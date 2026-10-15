---
nummer: 20
titel: "Programmiertest-Werkstatt: drei Methoden unter Prüfungsbedingungen"
kurz: Der Test bringt 30 Punkte. Hier übst du ihn so, wie er bisher gestellt wurde, mit den Methoden M1, M2 und M3, den Einschränkungen, den Testfällen in main, einem Zeitplan und den typischen Varianten.
teil: training
stunden: 6
pruefungsgewicht: 3
voraussetzungen: [methoden, rekursion, arrays, rekursion-arrays, arrays-2d]
lernziele:
  - eine Testangabe in ihre Teile zerlegen und aus Methodenkopf, Vorbedingungen, Beispielbild und Testtabelle eine vollständige Liste der Fälle ableiten, die deine Methode behandeln muss
  - die Einschränkungen des Programmiertests (keine Hilfsmethoden und Klassenvariablen, Kopf unverändert, keine Schleifen in der Rekursion, kein clone und kein System.arraycopy, nur erlaubte Methoden, kein == bei Strings) erkennen und Verstöße in fremdem und eigenem Code finden
  - eine Methode nach Muster M1 schreiben, die aus Parametern ein neues zweidimensionales Array mit passender Form erzeugt, ohne Zeilen mit der Eingabe zu teilen
  - eine Methode nach Muster M2 schreiben, die ein zweidimensionales Array an Ort und Stelle verändert, indem sie Werte überschreibt, Zeilen ersetzt oder Zeilenverweise tauscht
  - eine Methode nach Muster M3 rekursiv ohne Schleifen auf Strings oder Arrays mit Index schreiben und sie nach dem Bewertungsraster (Basisfall, Fortschritt, Rückgabewert) selbst kontrollieren
  - in main die verlangten Variablen exakt deklarieren und die Testtabelle mit passenden Ausgaben umsetzen, auch für Methoden mit Seiteneffekt und für den Test auf geteilte Zeilen
  - die verfügbare Zeit auf die drei Methoden und main aufteilen und durch einen übersetzbaren Zwischenstand und Teillösungen Punkte sichern
  - zwei Varianten derselben Angabe vergleichen und eine fertige Lösung an geänderte Namen, Parameterreihenfolgen, Grenzen und Sonderregeln anpassen
---

**Worum geht es?** Im **Programmiertest** von EP1 sitzt du an einem Rechner und schreibst Java-Methoden nach einer
genauen Angabe. Ein **Programmiertest** ist also keine Wissensfrage, sondern eine Programmieraufgabe unter Zeitdruck.
Du bekommst eine Klasse mit vorgegebenen **Methodenköpfen**. Ein Methodenkopf ist die erste Zeile einer Methode mit
Rückgabetyp, Name und Parametern, zum Beispiel `int[][] spiegeln(int[][] input)`. Du schreibst die **Rümpfe**, also den Code zwischen den
geschweiften Klammern unter jedem Kopf, und schreibst in `main` Testaufrufe.

Dieses Kapitel bringt dir keinen neuen Java-Stoff bei. Alles, was du brauchst, kennst du aus den Kapiteln 6 bis 15
(Methoden, Rekursion und Arrays).
Neu ist die **Prüfungstechnik**: wie man eine Angabe liest, welche Fehler Punkte kosten, wie man die Zeit einteilt und
wie man eine bekannte Aufgabe in einer neuen Verkleidung wiedererkennt.

**Was kommt in der Prüfung?** Der Test bringt **30 von 100 Punkten**. Laut TISS, dem Lehrveranstaltungsverzeichnis der TU Wien, brauchst du 2026W darin mindestens
**50 %**, also 15 Punkte. Sonst zählt der Test mit 0 Punkten. Erlaubt sind die Vorlesungsfolien und die
Java-Dokumentation (Java-API). Termine sind der 27.01.2027 und der Ersatztermin 08.02.2027.

Wie der Test 2026W genau aussieht, ist nicht veröffentlicht. Die Angaben von Jänner 2021 bis Jänner 2023 hatten aber
immer denselben Aufbau. Diesen Aufbau übst du hier:

- **M1** (8 bis 11 Punkte): eine Methode, die ein **neues** zweidimensionales Array erzeugt und zurückgibt.
- **M2** (8 bis 10 Punkte): eine `void`-Methode, die ein übergebenes Array **an Ort und Stelle** verändert.
- **M3** (8 bis 9 Punkte): eine **rekursive** Methode ohne Schleifen, auf einem String oder einem Array mit Index.
- **main** (3 Punkte): 1 Punkt für die verlangten Deklarationen, 2 Punkte für die Testfälle aus der Testtabelle.

Laut Erfahrungsberichten im Studierenden-Wiki VoWi dauerte der Test bisher etwa 60 bis 75 Minuten. Er fand im InfLab statt,
einem Computerraum der Fakultät. Wie lange der Test 2026W dauert, steht noch nicht fest. Die Aufgaben dieses Kapitels sind den
Programmiertests vom Jänner 2021, vom Jänner und Februar 2022, den neun Probetests vom Jänner 2023 und den
Tests aus dem Sommer 2020 nachgebaut. Sie sind umformuliert und haben neue Namen und Testdaten.

**Wie arbeitest du mit diesem Kapitel?** Die Lektionen [20.1 Aufbau, Bewertung und die Angabe lesen](/lernen/ep1/programmiertest/aufbau-bewertung-und-die-angabe-lesen)
bis [20.7 Zeitplan, Teilpunkte und Varianten](/lernen/ep1/programmiertest/zeitplan-teilpunkte-und-varianten) gehen den Test Teil für Teil durch. Danach
folgen eine gemischte Wiederholung und ein vollständiger Probetest in den Prüfungsaufgaben. Die Quiz (40 Punkte) übst
du in Kapitel 21, beginnend mit [21.1 Das Quizformat und Auswahlfragen](/lernen/ep1/quiz/das-quizformat-und-auswahlfragen). Das Gespräch zu den
Aufgabenblättern übst du in Kapitel 22, beginnend mit [22.1 So läuft das Feedbackgespräch ab](/lernen/ep1/feedbackgespraech/so-laeuft-das-feedbackgespraech-ab).

:::vorwissen
Du brauchst aus früheren Kapiteln:

- **Methoden mit Vorbedingungen** aus [6.6 Vor- und Nachbedingungen](/lernen/ep1/methoden/vor-und-nachbedingungen).
- **Rekursion ohne Schleifen** aus [10.6 Rekursiv nach Vorgabe: Schleifenverbot und Bewertung](/lernen/ep1/rekursion/rekursiv-nach-vorgabe-schleifenverbot-und-bewertung)
  und [10.4 Rekursion mit Strings](/lernen/ep1/rekursion/rekursion-mit-strings).
- **Referenzen auf Arrays** aus [12.5 Referenzen: zwei Namen für dasselbe Array](/lernen/ep1/arrays/referenzen-zwei-namen-fuer-dasselbe-array) und
  [12.6 Arrays als Parameter und Rückgabewert](/lernen/ep1/arrays/arrays-als-parameter-und-rueckgabewert).
- **Rekursion mit Index** aus [13.1 Ein Array mit einem Index durchlaufen](/lernen/ep1/rekursion-arrays/ein-array-mit-einem-index-durchlaufen).
- **Zweidimensionale Arrays**, besonders [14.3 Jagged Arrays: Zeilen als eigene Arrays](/lernen/ep1/arrays-2d/jagged-arrays-zeilen-als-eigene-arrays),
  [14.5 Neue Arrays erzeugen (Muster M1)](/lernen/ep1/arrays-2d/neue-arrays-erzeugen-muster-m1) und
  [14.6 Arrays an Ort und Stelle verändern (Muster M2)](/lernen/ep1/arrays-2d/arrays-an-ort-und-stelle-veraendern-muster-m2).
- **Randprüfung** aus [15.1 Nachbarn im Raster: Richtungen und Randprüfung](/lernen/ep1/arrays-anwendungen/nachbarn-im-raster-richtungen-und-randpruefung):
  Vor jedem Zugriff prüfen, ob der Index im Array liegt. Das brauchst du bei kurzen und leeren Zeilen ständig.

Die folgenden sechs Fragen zeigen dir, ob diese Werkzeuge sitzen. Wenn eine Frage nicht klappt, wiederhole zuerst die
verlinkte Lektion. Im Test bleibt dafür keine Zeit.
:::

```aufgabe
id: pt-ein-deep
titel: Ein ausgefranstes Array ausgeben
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [14.1 Zweidimensionale Arrays anlegen und lesen](/lernen/ep1/arrays-2d/zweidimensionale-arrays-anlegen-und-lesen))
teile:
  - typ: ausgabe
    code: |
      int[][] a = {{4, 1}, {}, {7}};
      System.out.println(Arrays.deepToString(a));
      System.out.println(a.length + " " + a[1].length);
    loesung: |
      [[4, 1], [], [7]]
      3 0
    fehler:
      - wert: "[[4, 1], [], [7]]\n3 1"
        meldung: Die Zeile mit Index 1 ist `{}`, also leer. Ihre Länge ist 0, nicht 1.
      - wert: "[[4, 1], null, [7]]\n3 0"
        meldung: '`{}` legt eine leere Zeile an. `null` stünde nur da, wenn die Zeile gar nicht angelegt worden wäre.'
hinweise:
  - '`a.length` zählt die Zeilen, `a[1].length` die Elemente der Zeile mit Index 1.'
loesung: |
  `Arrays.deepToString` zeigt jede Zeile in eckigen Klammern. Die leere Zeile erscheint als `[]`.
  ---
  `a` hat drei Zeilen. Die Zeile mit Index 1 hat kein Element. Ausgabe `3 0`.
```

```aufgabe
id: pt-ein-alias
titel: Geteilte und kopierte Zeilen
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [12.5 Referenzen: zwei Namen für dasselbe Array](/lernen/ep1/arrays/referenzen-zwei-namen-fuer-dasselbe-array))
teile:
  - typ: ausgabe
    code: |
      int[][] a = {{1, 2}, {3}};
      int[][] b = new int[2][];
      b[0] = a[0];
      b[1] = new int[]{3};
      b[0][0] = 9;
      System.out.println(a[0][0]);
      System.out.println(b[0] == a[0]);
      System.out.println(b[1] == a[1]);
    loesung: |
      9
      true
      false
    fehler:
      - wert: "1\ntrue\nfalse"
        meldung: '`b[0] = a[0]` kopiert nur den Verweis. `b[0]` und `a[0]` sind dieselbe Zeile, also ändert `b[0][0] = 9` auch `a[0][0]`.'
      - wert: "9\ntrue\ntrue"
        meldung: '`new int[]{3}` legt eine neue Zeile an. Sie hat denselben Inhalt wie `a[1]`, ist aber ein anderes Array. `==` vergleicht Verweise.'
hinweise:
  - '`==` zwischen zwei Arrays fragt: Zeigen beide Namen auf dasselbe Array?'
loesung: |
  `b[0]` zeigt auf dieselbe Zeile wie `a[0]`. Die Änderung über `b[0]` sieht man auch über `a[0]`, also 9 und `true`.
  ---
  `b[1]` ist eine neu angelegte Zeile. Gleicher Inhalt, aber ein anderes Array, darum `false`.
```

```aufgabe
id: pt-ein-rekursion
titel: Zeichen rekursiv zählen
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? (Wiederholung: [10.4 Rekursion mit Strings](/lernen/ep1/rekursion/rekursion-mit-strings))
teile:
  - typ: ausgabe
    code: |
      public class Zaehlen {
          public static int f(String s) {
              if (s.isEmpty()) {
                  return 0;
              }
              int eins = 0;
              if (s.charAt(0) == 'a') {
                  eins = 1;
              }
              return eins + f(s.substring(1));
          }

          public static void main(String[] args) {
              System.out.println(f("Banana"));
              System.out.println(f("Aal"));
          }
      }
    loesung: |
      3
      1
    fehler:
      - wert: "3\n2"
        meldung: Ein `char`-Vergleich unterscheidet Groß- und Kleinbuchstaben. `'A'` ist ein anderes Zeichen als `'a'`.
      - wert: "2\n1"
        meldung: '`"Banana"` enthält an den Indizes 1, 3 und 5 ein kleines `a`. Zähle jedes Zeichen einzeln.'
hinweise:
  - Jeder Aufruf schaut nur auf das erste Zeichen und gibt den Rest an den nächsten Aufruf weiter.
loesung: |
  `f` zählt die kleinen `a`. In `"Banana"` sind es drei.
  ---
  In `"Aal"` ist das erste Zeichen ein großes `A` und zählt nicht. Nur das zweite Zeichen ist ein kleines `a`, also 1.
```

```aufgabe
id: pt-ein-parameter
titel: Was sieht der Aufrufer?
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? (Wiederholung: [12.6 Arrays als Parameter und Rückgabewert](/lernen/ep1/arrays/arrays-als-parameter-und-rueckgabewert))
teile:
  - typ: ausgabe
    code: |
      import java.util.Arrays;

      public class Parameter {
          public static void tausche(int[][] a) {
              int[] h = a[0];
              a[0] = a[1];
              a[1] = h;
          }

          public static void ersetze(int[][] a) {
              a = new int[][]{{0}};
          }

          public static void main(String[] args) {
              int[][] t = {{1}, {2, 2}};
              tausche(t);
              System.out.println(Arrays.deepToString(t));
              ersetze(t);
              System.out.println(Arrays.deepToString(t));
          }
      }
    loesung: |
      [[2, 2], [1]]
      [[2, 2], [1]]
    fehler:
      - wert: "[[2, 2], [1]]\n[[0]]"
        meldung: '`a = new int[][]{{0}};` ändert nur die lokale Variable `a` in `ersetze`. Die Variable `t` in `main` zeigt weiter auf das alte Array.'
      - wert: "[[1], [2, 2]]\n[[1], [2, 2]]"
        meldung: '`tausche` verändert das Array, auf das `t` zeigt. Die Zeilenverweise darin werden wirklich vertauscht, und `main` sieht das.'
hinweise:
  - Unterscheide zwei Dinge. Wird etwas **im** übergebenen Array geändert, oder bekommt der Parameter ein **neues** Array?
loesung: |
  `tausche` ändert die Plätze 0 und 1 im Array, auf das auch `t` zeigt. Die Änderung bleibt sichtbar.
  ---
  `ersetze` lässt nur seine lokale Kopie des Verweises auf ein neues Array zeigen. `t` ist davon nicht betroffen.
```

```aufgabe
id: pt-ein-index
titel: Zählen ab einem Index
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? (Wiederholung: [13.1 Ein Array mit einem Index durchlaufen](/lernen/ep1/rekursion-arrays/ein-array-mit-einem-index-durchlaufen))
teile:
  - typ: ausgabe
    code: |
      public class Negative {
          public static int z(int[] a, int i) {
              if (i >= a.length) {
                  return 0;
              }
              int eins = 0;
              if (a[i] < 0) {
                  eins = 1;
              }
              return eins + z(a, i + 1);
          }

          public static void main(String[] args) {
              int[] a = {3, -1, -4, 0, -2};
              System.out.println(z(a, 2));
              System.out.println(z(a, 5));
          }
      }
    loesung: |
      2
      0
    fehler:
      - wert: "3\n0"
        meldung: Die Zählung beginnt bei Index 2. Die `-1` an Index 1 zählt nicht mehr mit.
      - wert: "2\n1"
        meldung: '`z(a, 5)` landet sofort im Basisfall, weil `5 >= a.length` gilt. Ergebnis 0.'
hinweise:
  - Der Index wandert von 2 bis zum Ende. Die 0 ist nicht negativ.
loesung: |
  Ab Index 2 stehen `-4`, `0` und `-2`. Negativ sind zwei davon.
  ---
  Bei Index 5 ist das Array schon zu Ende. Der Basisfall liefert 0.
```

```aufgabe
id: pt-ein-vorbedingung
titel: Was eine Vorbedingung dir erlaubt
niveau: 1
art: check
angabe: |
  Eine Methode hat die Vorbedingung `seq != null, index ist ein gültiger Index von seq`. Was folgt daraus für dich?
  (Wiederholung: [6.6 Vor- und Nachbedingungen](/lernen/ep1/methoden/vor-und-nachbedingungen))
teile:
  - typ: auswahl
    optionen:
      - Du darfst annehmen, dass jeder Aufruf diese Bedingung erfüllt. Aufrufe mit `null` musst du nicht behandeln.
      - Du musst am Anfang der Methode prüfen, ob `seq == null` ist, und dann eine Fehlermeldung ausgeben.
      - Die Methode muss für jeden beliebigen `index` funktionieren, auch für negative.
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Eine Vorbedingung ist eine Zusage des Aufrufers. Du darfst dich darauf verlassen und musst sie nicht prüfen.
      - wert: 2
        meldung: Die Vorbedingung schließt ungültige Indizes ausdrücklich aus. Für sie muss deine Methode nichts Bestimmtes tun.
hinweise:
  - Eine Vorbedingung beschreibt, was **vor** dem Aufruf garantiert wahr ist.
loesung: |
  Eine Vorbedingung ist ein Vertrag. Der Aufrufer verspricht, dass sie gilt.
  ---
  Deine Methode muss also nur für Aufrufe richtig arbeiten, die die Vorbedingung erfüllen. Prüfen musst du sie nicht.
```

## Aufbau, Bewertung und die Angabe lesen

```aufgabe
id: pt-an-check-teile
titel: Wo steht, was main testen muss?
niveau: 1
art: check
angabe: |
  Eine Testangabe hat mehrere Teile. Welcher Teil sagt dir, welche Aufrufe in `main` mindestens vorkommen müssen?
  (Wiederholung zu `main`: [6.1 Was ist eine Methode?](/lernen/ep1/methoden/was-ist-eine-methode))
teile:
  - typ: auswahl
    optionen:
      - die Tabelle mit den Spalten „Aufruf“ und „Ausgabe in main auf der Konsole“
      - die Liste der Einschränkungen am Anfang
      - die Tabelle mit der Bewertungsgrundlage am Ende
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die Einschränkungen sagen, was du **nicht** verwenden darfst. Welche Aufrufe in main gehören, steht dort nicht.
      - wert: 2
        meldung: Das Bewertungsraster sagt, wofür es Punkte gibt. Die konkreten Aufrufe stehen in einer eigenen Tabelle.
hinweise:
  - Suche nach dem Teil, in dem echte Aufrufe mit Argumenten stehen.
loesung: |
  Die Testtabelle nennt jeden Aufruf und die erwartete Ausgabe. Diese Aufrufe gehören mindestens in `main`.
  ---
  Einschränkungen und Bewertungsraster sind andere Teile der Angabe mit anderer Aufgabe.
```

Eine Testangabe sieht beim ersten Lesen nach viel Text aus. Sie hat aber immer dieselben sechs Teile. Wer die Teile
kennt, findet die wichtige Information in Sekunden.

1. **Einschränkungen:** eine Liste von Verboten, zum Beispiel „keine Hilfsmethoden“ oder „keine Schleifen in der
   rekursiven Methode“. Sie gelten für alle drei Methoden. [20.2 Die Einschränkungen einhalten](/lernen/ep1/programmiertest/die-einschraenkungen-einhalten) geht sie einzeln durch.
2. **Deklarationen:** Variablen, die du in `main` genau so anlegen sollst, etwa `int[][] test1 = {{5, 7}, {5}};`.
3. **Methodenbeschreibungen:** für jede Methode der Kopf, ein Text, der das Ergebnis beschreibt, und die
   **Vorbedingungen**. Eine Vorbedingung ist eine Zusage des Aufrufers, zum Beispiel `input != null`.
4. **Beispielbild:** ein Aufruf mit dem Ergebnis, als Tabelle von Zahlen gezeichnet.
5. **Testtabelle:** Aufrufe für `main` mit der Ausgabe, die auf der Konsole erscheinen soll.
6. **Bewertungsraster:** eine Tabelle, die jeder Methode Teilpunkte für Teilziele zuordnet.

Das Wort **Seiteneffekt** taucht in jeder Angabe auf. Es bedeutet: Eine Methode verändert etwas, das nach dem Aufruf
noch sichtbar ist, zum Beispiel ein übergebenes Array. Eine `void`-Methode nach Muster M2 wirkt nur über ihren
Seiteneffekt.

:::beispiel[Eine Angabe in ihre Teile zerlegen]
Hier ist eine kleine Übungsangabe im Stil der echten Tests. Lies sie einmal ganz, bevor du die Erklärung darunter liest.

```text
Deklarieren und initialisieren Sie in main die folgenden Variablen:
int[][] test1 = {{3, 1, 2}, {4, 4}, {9}};
int[][] test2 = {{2, 5}, {}, {7, 1, 8}};
int[] seq = {6, 2, 9, 9, 1, 4};

• int[][] spiegeln(int[][] input) liefert ein neues Array. Es enthält zuerst Kopien
  aller Zeilen von input, danach Kopien der Zeilen in umgekehrter Reihenfolge,
  wobei die letzte Zeile von input nur einmal vorkommt.
  Vorbedingung(en): input != null, input.length > 0, input[i] != null für alle i.
• void tauscheNachbarn(int[][] input) vertauscht Zeile 0 mit Zeile 1, Zeile 2 mit
  Zeile 3 und so weiter. Bei ungerader Zeilenzahl bleibt die letzte Zeile, wo sie ist.
  Vorbedingung(en): input != null.
• int zaehleGroesser(int[] seq, int grenze, int index) liefert die Anzahl der
  Einträge ab index (inklusive), die größer als grenze sind.
  Diese Methode muss rekursiv implementiert werden.
  Vorbedingung(en): seq != null, index ist ein gültiger Index von seq.

Aufruf                          Ausgabe in main auf der Konsole
result1 = spiegeln(test1)       [[3, 1, 2], [4, 4], [9], [4, 4], [3, 1, 2]]
tauscheNachbarn(test2)          [[], [2, 5], [7, 1, 8]]
zaehleGroesser(seq, 5, 0)       3
zaehleGroesser(seq, 5, 3)       1
```

So zerlegst du die Angabe:

- **Deklarationen:** drei Variablen, die du Zeichen für Zeichen abschreibst. Das bringt 1 Punkt.
- **M1** ist `spiegeln`. Der Rückgabetyp `int[][]` und das Wort „neues Array“ verraten das Muster. Aus der
  Beschreibung liest du die Form ab: Bei `n` Zeilen hat das Ergebnis `2 · n − 1` Zeilen, denn die letzte Zeile kommt
  nur einmal vor. Probe mit `test1`: 3 Zeilen ergeben 5 Zeilen, genau wie in der Testtabelle.
- **M2** ist `tauscheNachbarn`, erkennbar an `void`. Wirkung zeigt sie nur über ihren Seiteneffekt. Darum steht in der
  Testtabelle hinter dem Aufruf das **veränderte** Array `test2`.
- **M3** ist `zaehleGroesser` mit dem Satz „muss rekursiv implementiert werden“. Der Parameter `index` sagt dir, wo
  die Zählung beginnt. Probe mit `zaehleGroesser(seq, 5, 0)`: Größer als 5 sind 6, 9 und 9, also 3.
- **Vorbedingungen:** `spiegeln` bekommt nie ein leeres Array, `zaehleGroesser` nie einen ungültigen Index.
  `tauscheNachbarn` dagegen kann ein Array mit nur einer Zeile oder ganz ohne Zeilen bekommen. Diese Fälle musst du
  behandeln.
:::

```aufgabe
id: pt-an-punkte
titel: Wie viele Punkte fehlen noch?
niveau: 1
lernziel: 0
kompetenz: rechnen
quelle: Punkteverteilung der Programmiertests 2021 bis 2023 (main 1 + 2 Punkte, Gesamt 30)
angabe: |
  Der Test hat 30 Punkte. Du brauchst mindestens die Hälfte. In `main` bekommst du 1 Punkt für die Deklarationen und
  2 Punkte für die Testfälle. Angenommen, `main` ist vollständig richtig und M1 bringt alle 10 Punkte. Wie viele
  Punkte musst du aus M2 und M3 **zusammen** noch mindestens holen?
teile:
  - typ: zahl
    loesung: "30 / 2 - (1 + 2) - 10"
    fehler:
      - wert: "5"
        meldung: Du hast die 3 Punkte aus `main` nicht mitgerechnet. Die Deklarationen und Testfälle zählen genauso zur Summe.
      - wert: "17"
        meldung: Gefragt ist nicht, wie viele Punkte M2 und M3 zusammen haben, sondern wie viele dir bis zur Hälfte fehlen.
hinweise:
  - Die Hälfte von 30 ist 15. Ziehe davon ab, was du schon sicher hast.
loesung: |
  **Ansatz:** Bestehensgrenze minus die schon sicheren Punkte.
  ---
  Die Hälfte von 30 ist 15. Sicher sind 3 Punkte aus `main` und 10 aus M1, zusammen 13.
  ---
  Es fehlen `15 − 13 = 2` Punkte. Schon ein richtiger Basisfall und ein richtiger Fortschritt in M3 können das bringen.
```

Das **Bewertungsraster** steht am Ende jeder Angabe. Es ist dein wichtigstes Werkzeug, um Punkte zu sichern. Im
Test vom Jänner 2022 sah es für die rekursive Methode so aus:

- korrekter Methodenansatz mit Rückgabe: 1 Punkt.
- Basisfall vorhanden: 1 Punkt. Basisfall korrekt: 1 Punkt.
- Fortschritt der Rekursion vorhanden: 1 Punkt. Fortschritt korrekt: 1 Punkt.
- korrekter Rückgabewert: 4 Punkte.

Das ergibt 9 Punkte. Für M1 und M2 gab es Punkte für Teilziele wie „Korrekte Anzahl der Zeilen“ oder „Korrekte
Behandlung des Falles `ind1 > ind2`“. Daraus folgt: Eine Methode, die **teilweise** stimmt, bringt Teilpunkte.

```aufgabe
id: pt-an-rf-angabe
titel: Aussagen über eine Testangabe
niveau: 1
lernziel: 0
kompetenz: verstehen
quelle: Aufbau der Programmiertests 2021 bis 2023 (Einschränkungen, Testtabelle, Raster)
angabe: Beurteile jede Aussage über den Aufbau einer Testangabe.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Die Aufrufe in der Testtabelle müssen in `main` mindestens vorkommen. Weitere eigene Tests sind erlaubt.
        richtig: true
        erklaerung: 'Die Angaben sagen: „mit zumindest folgenden Aufrufen und weiteren Aufrufen“.'
      - text: Ausgaben mit `System.out.println` darfst du auch in M1 und M2 schreiben, damit du das Ergebnis siehst.
        richtig: false
        erklaerung: 'Die Angaben verlangen: „Erzeugen Sie diese Ausgaben nur in main, nicht in den implementierten Methoden.“'
      - text: Was die Vorbedingungen ausschließen, musst du nicht abfangen.
        richtig: true
        erklaerung: Eine Vorbedingung ist eine Zusage des Aufrufers. Solche Fälle kommen in den Tests nicht vor.
      - text: Ein Fall, den die Vorbedingungen **nicht** ausschließen, darf zu einer Exception führen.
        richtig: false
        erklaerung: Alles, was die Vorbedingung erlaubt, muss richtig behandelt werden, zum Beispiel leere Zeilen oder `ind1 > ind2`.
    fehler:
      - wert: [r, r, r, r]
        meldung: Lies die letzte Aussage noch einmal. Was nicht ausgeschlossen ist, ist erlaubt. Eine Exception ist dann ein Fehler.
      - wert: [r, f, f, f]
        meldung: Die Vorbedingungen sind eine Zusage. Was sie ausschließen, kommt nicht vor und muss nicht geprüft werden.
hinweise:
  - Überlege bei jeder Aussage, wer etwas garantiert, der Aufrufer oder deine Methode.
loesung: |
  **Ansatz:** Jede Aussage an den Formulierungen der Angaben prüfen.
  ---
  Testtabelle mindestens, Ausgaben nur in `main`. Vorbedingungen musst du nicht prüfen.
  ---
  Fälle, die die Vorbedingung erlaubt, müssen funktionieren. Richtig sind also die Aussagen 1 und 3.
```

Die Vorbedingungen sagen dir, was **nicht** vorkommt. Viel wichtiger ist die Umkehrung: Alles, was sie **nicht**
ausschließen, kann im Test vorkommen. Genau dort verlieren die meisten Teilpunkte. Darum schreibst du dir vor dem
Programmieren eine **Fallliste**. Das ist eine kurze Liste von Eingaben, die verschieden behandelt werden müssen.

:::merke[Die Fallliste in drei Schritten]
1. **Normalfall:** Rechne das Beispielbild der Angabe von Hand nach. Dann weißt du, ob du die Beschreibung verstanden hast.
2. **Grenzen:** Schreib zu jedem Parameter die kleinsten erlaubten Werte auf, etwa eine leere Zeile, eine einzige
   Zeile, `index` am Ende, zwei gleiche Indizes oder einen leeren String.
3. **Sonderregeln aus dem Text:** Sätze mit „auch wenn“, „gilt auch“ oder „ist … nicht vorhanden“ sind fast immer
   eigene Fälle mit eigenen Punkten.
:::

:::beispiel[Eine Fallliste für einen Bereich im Array]
Eine Angabe lautet so. `void dreheBereich(int[] a, int von, int bis)` dreht die Reihenfolge der Einträge um. Gemeint
sind die Einträge von Index `von` bis Index `bis`, jeweils inklusive. Das gilt auch, wenn `von > bis`. Vorbedingung: `a != null`, `von` und
`bis` sind gültige Indizes.

**Normalfall:** `a = {5, 8, 1, 9, 4}` mit `von = 1` und `bis = 3`. Umgedreht wird der Teil `8, 1, 9`. Ergebnis
`{5, 9, 1, 8, 4}`.

**Grenzen und Sonderregeln:**

- `von > bis`, etwa `dreheBereich(a, 3, 1)`. Laut Angabe dreht sich derselbe Bereich um. Also tauscht man zuerst die
  Rollen, sodass `l` der kleinere und `r` der größere Index ist.
- `von == bis`: Der Bereich hat nur einen Eintrag. Es passiert nichts, und es darf auch keine Exception entstehen.
- Der ganze Bereich: `von = 0` und `bis = a.length - 1`. Das ganze Array dreht sich um.
- Ein Array mit nur einem Eintrag. Dann sind `von` und `bis` automatisch beide 0.

Mit dieser Liste schreibst du den Code:

```java
public static void dreheBereich(int[] a, int von, int bis) {
    int l = Math.min(von, bis);   // kleinerer Index
    int r = Math.max(von, bis);   // größerer Index
    while (l < r) {               // solange zwei verschiedene Plätze übrig sind
        int h = a[l];             // tauschen über eine Hilfsvariable
        a[l] = a[r];
        a[r] = h;
        l++;                      // beide Ränder rücken zur Mitte
        r--;
    }
}
```

`Math.min` und `Math.max` liefern den kleineren und den größeren von zwei Werten. Damit ist der Fall `von > bis`
erledigt, ohne eine eigene Verzweigung. Bei `von == bis` ist `l < r` sofort falsch, und die Schleife läuft nie.
:::

:::achtung[Den Fall von > bis übersehen]
Jemand schreibt die Tauschschleife direkt mit den Parametern:

```java
int l = von;
int r = bis;
while (l < r) { … }
```

Für `dreheBereich(a, 3, 1)` ist `l = 3` und `r = 1`. Die Bedingung `3 < 1` ist sofort falsch, und das Array bleibt
`{5, 8, 1, 9, 4}`. Erwartet war `{5, 9, 1, 8, 4}`. Im Test vom Jänner 2022 gab es für genau diesen Fall 2 eigene
Punkte. Prüfe jeden Satz mit „gilt auch“ mit einem eigenen Testaufruf.
:::

```aufgabe
id: pt-an-trace-bereich
titel: Die Tauschschleife verfolgen
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Die Methode `dreheBereich` aus dem Beispiel wird mit `a = {1, 2, 3, 4, 5, 6, 7}`, `von = 6` und `bis = 1`
  aufgerufen. Trage `l` und `r` ein, und zwar am Start und nach jedem Tausch. Die erste Zeile ist vorgegeben.
teile:
  - typ: trace
    spalten: [l, r]
    zeilen: [Start, nach dem 1. Tausch, nach dem 2. Tausch, nach dem 3. Tausch]
    vorgabe: 1
    loesung: [[1, 6], [2, 5], [3, 4], [4, 3]]
    fehler:
      - wert: ["1", "6", "2", "5", "3", "4", "3", "3"]
        meldung: Nach jedem Tausch wird `l` um 1 größer **und** `r` um 1 kleiner. Aus `l = 3, r = 4` wird `l = 4, r = 3`.
hinweise:
  - '`l` ist das Minimum von 6 und 1, `r` das Maximum. Nach jedem Tausch rücken beide einen Schritt zur Mitte.'
loesung: |
  **Ansatz:** Start mit `l = min(6, 1) = 1` und `r = max(6, 1) = 6`. Nach jedem Tausch `l++` und `r--`.
  ---
  Getauscht werden die Paare (1, 6), (2, 5) und (3, 4). Danach ist `l = 4` und `r = 3`, die Bedingung `l < r` ist falsch.
  ---
  Ergebnis: `a = {1, 7, 6, 5, 4, 3, 2}`. Der Eintrag an Index 0 bleibt, weil er nicht zum Bereich gehört.
```

:::achtung[Inklusive und exklusive Grenzen verwechselt]
Im Juni 2020 hieß es: Zeichen „zwischen den Indizes `start` (inklusive) und `end` (exklusive)“. **Exklusiv** heißt,
der Index `end` selbst gehört **nicht** dazu. Wer die Bedingung `start <= end` statt `start < end` schreibt, nimmt ein
Zeichen zu viel. Für `{'a', 'b', 'c'}` mit `start = 0` und `end = 3` greift er sogar auf Index 3 zu, den es nicht gibt.
Die Folge ist eine `ArrayIndexOutOfBoundsException`. Unterstreiche beim Lesen jedes „inklusive“ und „exklusive“.
:::


```aufgabe
id: pt-an-gefuehrt-spiegeln
titel: Das Ergebnis einer M1-Beschreibung vorhersagen
niveau: 2
lernziel: 0
kompetenz: anwenden
quelle: nach den Probetests vom 26.01.2023 (generate, Zeilen hin und zurück), vereinfacht
angabe: |
  Die Methode `spiegeln` aus dem Beispiel „Eine Angabe in ihre Teile zerlegen“ ist richtig implementiert. Was gibt das
  Programm aus? Löse die Aufgabe zuerst geführt.
teile:
  - typ: ausgabe
    code: |
      import java.util.Arrays;

      public class Spiegel {
          public static int[][] spiegeln(int[][] input) {
              int n = input.length;
              int[][] r = new int[2 * n - 1][];
              for (int i = 0; i < r.length; i++) {
                  int q = i;
                  if (i >= n) {
                      q = 2 * n - 2 - i;
                  }
                  r[i] = new int[input[q].length];
                  for (int j = 0; j < r[i].length; j++) {
                      r[i][j] = input[q][j];
                  }
              }
              return r;
          }

          public static void main(String[] args) {
              int[][] test2 = {{2, 5}, {}, {7, 1, 8}};
              int[][] result = spiegeln(test2);
              System.out.println(Arrays.deepToString(result));
              System.out.println(result.length);
              System.out.println(result[0] == result[4]);
          }
      }
    loesung: |
      [[2, 5], [], [7, 1, 8], [], [2, 5]]
      5
      false
    fehler:
      - wert: "[[2, 5], [], [7, 1, 8], [7, 1, 8], [], [2, 5]]\n6\nfalse"
        meldung: Die letzte Zeile von `input` kommt laut Angabe nur einmal vor. Das Ergebnis hat `2 · 3 − 1 = 5` Zeilen.
      - wert: "[[2, 5], [], [7, 1, 8], [], [2, 5]]\n5\ntrue"
        meldung: Für jede Ergebniszeile wird mit `new int[…]` eine eigene Zeile angelegt. Zeile 0 und Zeile 4 haben gleichen Inhalt, sind aber verschiedene Arrays.
gefuehrt:
  - text: Wie viele Zeilen hat das Ergebnis, wenn `input` drei Zeilen hat?
    teil: { typ: zahl, loesung: "2 * 3 - 1" }
    erklaerung: Erst kommen alle drei Zeilen, dann zwei Zeilen zurück. Die letzte Zeile steht nur einmal in der Mitte.
  - text: Welche Zeile von `input` steht an Index 3 des Ergebnisses? Gib den Zeilenindex in `input` an.
    teil: { typ: zahl, loesung: "2 * 3 - 2 - 3" }
    erklaerung: 'Für `i >= n` gilt `q = 2 · n − 2 − i`. Mit `n = 3` und `i = 3` ergibt das `q = 1`, die leere Zeile.'
  - text: Sind `result[0]` und `result[4]` dasselbe Array?
    teil:
      typ: auswahl
      optionen: ['nein, zwei verschiedene Arrays mit gleichem Inhalt', 'ja, weil beide die Zeile 0 von input kopieren']
      richtig: [0]
    erklaerung: Jede Ergebniszeile wird mit `new int[…]` neu angelegt und dann befüllt. Gleicher Inhalt heißt nicht gleiche Zeile.
hinweise:
  - Bestimme zuerst die Zeilenzahl, dann für jede Ergebniszeile, welche Eingabezeile sie kopiert.
  - '`==` zwischen zwei Zeilen vergleicht Verweise, nicht den Inhalt.'
loesung: |
  **Ansatz:** Form bestimmen, dann jede Ergebniszeile einer Eingabezeile zuordnen.
  ---
  Das Ergebnis hat 5 Zeilen. Die Indizes 0, 1, 2 kopieren die Eingabezeilen 0, 1, 2. Die Indizes 3 und 4 kopieren 1 und 0.
  ---
  Zeile 0 und Zeile 4 haben denselben Inhalt `[2, 5]`, sind aber zwei verschiedene Arrays. Darum `false`.
```

```aufgabe
id: pt-an-ausgabe-tausche
titel: Nachbarzeilen zweimal tauschen
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  `tauscheNachbarn` aus dem Beispiel „Eine Angabe in ihre Teile zerlegen“ ist richtig implementiert. Was gibt das
  Programm aus?
teile:
  - typ: ausgabe
    code: |
      import java.util.Arrays;

      public class Nachbarn {
          public static void tauscheNachbarn(int[][] input) {
              for (int i = 0; i + 1 < input.length; i += 2) {
                  int[] h = input[i];
                  input[i] = input[i + 1];
                  input[i + 1] = h;
              }
          }

          public static void main(String[] args) {
              int[][] t = {{1}, {2, 2}, {3}, {4, 4, 4}, {5}};
              tauscheNachbarn(t);
              System.out.println(Arrays.deepToString(t));
              int[][] u = {{8}};
              tauscheNachbarn(u);
              System.out.println(Arrays.deepToString(u));
          }
      }
    loesung: |
      [[2, 2], [1], [4, 4, 4], [3], [5]]
      [[8]]
    fehler:
      - wert: "[[2, 2], [1], [4, 4, 4], [3], [5]]\n[]"
        meldung: Bei nur einer Zeile ist `0 + 1 < 1` falsch. Die Schleife läuft nie, die Zeile bleibt, wo sie ist.
      - wert: "[[2, 2], [3], [4, 4, 4], [5], [1]]\n[[8]]"
        meldung: Getauscht werden Paare, nicht ein Schritt nach vorne. Zeile 0 tauscht mit 1, Zeile 2 mit 3. Zeile 4 hat keinen Partner.
hinweise:
  - Die Schleife springt in Zweierschritten. Bei jedem Schritt tauscht sie die Zeilen `i` und `i + 1`.
  - Die Bedingung `i + 1 < input.length` verhindert einen Zugriff hinter dem Ende.
loesung: |
  **Ansatz:** Die Paare (0, 1) und (2, 3) bestimmen. Die letzte Zeile mit Index 4 hat keinen Partner.
  ---
  Nach dem Tausch: `[2, 2]`, `[1]`, `[4, 4, 4]`, `[3]`, `[5]`.
  ---
  Bei `u` mit einer Zeile ist `0 + 1 < 1` falsch. Nichts wird getauscht, und es gibt keine Exception.
```

```aufgabe
id: pt-an-randfaelle
titel: Welche Aufrufe muss die Methode verkraften?
niveau: 2
lernziel: 0
kompetenz: begruenden
angabe: |
  Für `int zaehleGroesser(int[] seq, int grenze, int index)` gilt die Vorbedingung `seq != null`, `index` ist ein
  gültiger Index von `seq`. Welche Aufrufe muss deine Methode richtig behandeln? Wähle **alle** passenden aus.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '`zaehleGroesser(new int[]{4, 7}, 5, 1)`, also `index` am letzten Eintrag'
      - '`zaehleGroesser(new int[]{}, 5, 0)`, also ein leeres Array'
      - '`zaehleGroesser(new int[]{-3, -8}, -5, 0)`, also eine negative Grenze'
      - '`zaehleGroesser(new int[]{4, 7}, 5, 2)`, also `index` gleich der Länge'
      - '`zaehleGroesser(null, 5, 0)`'
    richtig: [0, 2]
    fehler:
      - wert: [0, 1, 2]
        meldung: In einem leeren Array gibt es keinen gültigen Index. Die Vorbedingung schließt diesen Aufruf also schon aus.
      - wert: [0, 2, 3]
        meldung: 'Index 2 ist bei Länge 2 kein gültiger Index. Die Vorbedingung schließt ihn aus. Deine Rekursion erreicht ihn aber intern, siehe Lösung.'
      - wert: [0]
        meldung: Über `grenze` sagt die Vorbedingung nichts. Jede ganze Zahl ist erlaubt, auch eine negative.
hinweise:
  - Prüfe jede Option gegen beide Teile der Vorbedingung.
  - Ein Parameter, über den die Vorbedingung nichts sagt, darf jeden Wert seines Typs haben.
loesung: |
  **Ansatz:** Was die Vorbedingung erlaubt, muss funktionieren. Was sie ausschließt, nicht.
  ---
  Erlaubt sind der letzte gültige Index und jede Grenze, auch eine negative. Ausgeschlossen sind `null`, das leere
  Array (kein gültiger Index) und `index = seq.length`.
  ---
  Achtung: Deine Rekursion ruft sich intern trotzdem mit `index = seq.length` auf, nämlich nach dem letzten Eintrag.
  Darum lautet der Basisfall `index >= seq.length`. Die Vorbedingung gilt nur für den Aufruf von außen.
```

```reflexion
frage: Warum lohnt es sich, das Beispielbild einer Angabe von Hand nachzurechnen, bevor du die erste Zeile Code schreibst?
antwort: |
  Das Beispielbild ist die einzige Stelle, an der die Angabe ihre Beschreibung mit echten Zahlen vorführt. Wenn ich es
  von Hand nachrechne und auf dasselbe Ergebnis komme, habe ich den Text richtig verstanden. Komme ich auf ein anderes
  Ergebnis, habe ich einen Satz falsch gelesen, und das merke ich nach einer Minute statt nach zwanzig Minuten
  Programmieren. Außerdem sehe ich dabei die Form des Ergebnisses, also Zeilenzahl und Zeilenlängen. Genau das brauche
  ich als Erstes, wenn ich ein neues Array anlege.
```

```aufgabe
id: pt-an-code-summe
titel: Eine Summe in beide Richtungen
niveau: 3
lernziel: 0
kompetenz: anwenden
quelle: Leseregel „gilt auch, wenn ind1 > ind2“ aus dem Programmiertest vom 27.01.2022, auf eine Summe übertragen
angabe: |
  Implementiere `int summeZwischen(int[] a, int i1, int i2)`. Die Methode liefert die Summe der Einträge von Index
  `i1` bis Index `i2`, jeweils **inklusive**. Das gilt auch, wenn `i1 > i2`. Vorbedingung: `a != null`, `i1` und `i2`
  sind gültige Indizes von `a`.

  ```text
  summeZwischen(new int[]{4, 7, 1, 9, 3}, 1, 3)   liefert 17
  summeZwischen(new int[]{4, 7, 1, 9, 3}, 3, 1)   liefert 17
  summeZwischen(new int[]{4, 7, 1, 9, 3}, 2, 2)   liefert 1
  ```
teile:
  - typ: code
    vorlage: |
      public class Summe {
          public static int summeZwischen(int[] a, int i1, int i2) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Summe {
          public static int summeZwischen(int[] a, int i1, int i2) {
              int von = Math.min(i1, i2);
              int bis = Math.max(i1, i2);
              int summe = 0;
              for (int i = von; i <= bis; i++) {
                  summe += a[i];
              }
              return summe;
          }
      }
    tests:
      - { aufruf: "summeZwischen(new int[]{4, 7, 1, 9, 3}, 1, 3)", erwartet: "17" }
      - { aufruf: "summeZwischen(new int[]{4, 7, 1, 9, 3}, 3, 1)", erwartet: "17", beschreibung: "i1 > i2" }
      - { aufruf: "summeZwischen(new int[]{4, 7, 1, 9, 3}, 2, 2)", erwartet: "1", beschreibung: "i1 == i2" }
      - { aufruf: "summeZwischen(new int[]{-2, 5}, 1, 0)", erwartet: "3", versteckt: true }
      - { aufruf: "summeZwischen(new int[]{6}, 0, 0)", erwartet: "6", versteckt: true }
      - { aufruf: "summeZwischen(new int[]{1, 2, 3, 4, 5, 6}, 5, 0)", erwartet: "21", versteckt: true }
    regeln: { keineHilfsmethoden: true, keineFelder: true, erlaubteApi: ["Math.*"] }
    fehler:
      - { wert: 2, meldung: "Bei `i1 > i2` liefert deine Methode etwas anderes als bei vertauschten Indizes. Bestimme zuerst den kleineren und den größeren Index, zum Beispiel mit `Math.min` und `Math.max`." }
      - { wert: 3, meldung: "Bei `i1 == i2` besteht der Bereich aus genau einem Eintrag. Prüfe, ob deine Schleife mit `<=` läuft, denn beide Grenzen gehören dazu." }
hinweise:
  - Lege zuerst die Fallliste an. Normalfall, `i1 > i2` und `i1 == i2`.
  - Mit `Math.min(i1, i2)` und `Math.max(i1, i2)` brauchst du für beide Richtungen nur eine Schleife. Beide Grenzen sind inklusive.
loesung: |
  **Ansatz:** Die Fallliste hat drei Einträge. Alle drei erledigt eine Schleife vom kleineren zum größeren Index.
  ---
  ```java
  int von = Math.min(i1, i2);
  int bis = Math.max(i1, i2);
  int summe = 0;
  for (int i = von; i <= bis; i++) {
      summe += a[i];
  }
  return summe;
  ```
  ---
  `<=` statt `<`, weil `bis` laut Angabe inklusive ist. Bei `i1 == i2` läuft die Schleife genau einmal.
  ---
  Probe: `{4, 7, 1, 9, 3}` von 1 bis 3 ergibt `7 + 1 + 9 = 17`, in beiden Richtungen.
```

## Die Einschränkungen einhalten

```aufgabe
id: pt-ei-check-equals
titel: Zwei Strings, zwei Vergleiche
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [2.7 String-Methoden und der Vergleich mit equals](/lernen/ep1/ausdruecke/string-methoden-und-der-vergleich-mit-equals))
teile:
  - typ: ausgabe
    code: |
      String a = "ab";
      String b = "a";
      b = b + "b";
      System.out.println(a.equals(b));
      System.out.println(a == b);
    loesung: |
      true
      false
    fehler:
      - wert: "true\ntrue"
        meldung: '`b + "b"` wird erst beim Ausführen berechnet und ergibt ein **neues** String-Objekt. `==` vergleicht Verweise, und die zwei Verweise sind verschieden.'
      - wert: "false\nfalse"
        meldung: '`equals` vergleicht den Inhalt Zeichen für Zeichen. Beide Strings bestehen aus `a` und `b`.'
hinweise:
  - '`equals` fragt nach dem Inhalt, `==` nach demselben Objekt.'
loesung: |
  Beide Strings haben den Inhalt `ab`. `equals` liefert darum `true`.
  ---
  `b` wurde aus zwei Teilen neu zusammengesetzt und ist ein anderes Objekt als `a`. `==` liefert `false`.
```

Jede Testangabe beginnt mit derselben Liste von **Einschränkungen**. Sie war von 2021 bis 2023 fast wortgleich. Nur der
Satz zur Klasse `Math` und zu den übrigen Klassen kam erst 2022 dazu. Sie
ist kein Kleingedrucktes: Eine Lösung, die gegen eine Einschränkung verstößt, löst die Aufgabe nicht so, wie sie
gestellt ist. Wie viele Punkte ein Verstoß genau kostet, steht in den Angaben nicht. Rechne damit, dass die
betroffene Methode nicht als Lösung gilt. Die Code-Aufgaben in diesem Kurs werten einen Verstoß darum mit 0 Punkten.

Hier ist die Liste mit dem Grund für jede Regel:

1. **Keine zusätzlichen Hilfsmethoden.** Alles steht in den vorgegebenen Methoden. Eine eigene Methode
   `summe(int[] z)` ist verboten, auch wenn sie praktisch wäre.
2. **Keine globalen Variablen**, in neueren Angaben „Klassenvariablen“ genannt. Gemeint sind Variablen, die außerhalb
   jeder Methode in der Klasse stehen, etwa `static int zaehler = 0;`. Jede Information muss über Parameter
   hinein und über `return` hinaus.
3. **Methodenköpfe nicht ändern oder erweitern.** Du darfst keinen Parameter ergänzen, auch keinen praktischen
   Index für die Rekursion.
4. **Keine Schleifen in der rekursiven Methode.** `for`, `while` und `do` sind dort verboten. In M1 und M2 sind
   Schleifen erlaubt und nötig.
5. **Strings nicht per Referenz vergleichen.** Gemeint ist: kein `==` und kein `!=` zwischen zwei Strings. Zwei
   `char`-Werte darfst du dagegen mit `==` vergleichen, denn `char` ist ein einfacher Zahlentyp.
6. **Kein `clone` und kein `System.arraycopy`.** Kopien baust du Element für Element mit einer Schleife.
7. **Aus `Arrays` nur `toString` und `deepToString`**, aus `String` nur `charAt`, `equals`, `length`, `substring` und
   `isEmpty`. Aus `Math` ist alles erlaubt. Andere Klassen der Java-API sind verboten, etwa `Character`,
   `StringBuilder` oder `Integer`.

:::beispiel[Eine verbotene Lösung umbauen]
Gesucht ist `int[][] mitSumme(int[][] input)`. Jede Zeile des Ergebnisses enthält die Werte der Eingabezeile und dahinter
deren Summe. Aus `{{2, 3}, {}}` wird `{{2, 3, 5}, {0}}`. Eine erste Lösung sieht so aus:

```java
public static int[][] mitSumme(int[][] input) {
    int[][] r = new int[input.length][];
    for (int i = 0; i < input.length; i++) {
        r[i] = Arrays.copyOf(input[i], input[i].length + 1);   // Verstoß: Arrays.copyOf
        r[i][input[i].length] = summe(input[i]);              // Verstoß: Hilfsmethode
    }
    return r;
}

public static int summe(int[] z) {                             // Verstoß: zusätzliche Methode
    int s = 0;
    for (int x : z) s += x;
    return s;
}
```

Sie liefert das richtige Ergebnis, verstößt aber dreimal gegen die Regeln. Der Umbau ersetzt jede verbotene Stelle
durch eine Schleife im Rumpf:

```java
public static int[][] mitSumme(int[][] input) {
    int[][] r = new int[input.length][];
    for (int i = 0; i < input.length; i++) {
        int n = input[i].length;
        r[i] = new int[n + 1];             // eigene, um 1 längere Zeile
        int s = 0;
        for (int j = 0; j < n; j++) {
            r[i][j] = input[i][j];         // Element für Element kopieren
            s += input[i][j];              // und dabei gleich summieren
        }
        r[i][n] = s;                       // Summe an den letzten Platz
    }
    return r;
}
```

- `new int[n + 1]` legt die Zeile in der richtigen Länge an. Den letzten Platz füllt erst die Summe.
- Kopieren und Summieren erledigt **eine** Schleife. Die Hilfsmethode ist überflüssig.
- Probe mit der leeren Zeile: `n = 0`, die innere Schleife läuft nie, `s` bleibt 0. Die neue Zeile ist `{0}`.
:::

:::achtung[Strings mit == vergleichen]
In einer rekursiven Methode soll geprüft werden, ob das erste Zeichen ein Stern ist. Jemand schreibt:

```java
if (s.substring(0, 1) == "*") { … }
```

Das übersetzt der Compiler ohne Fehler. `substring` liefert aber beim Ausführen meist ein **neues** String-Objekt. `==`
vergleicht Verweise. Für `s = "*ab"` ist das Ergebnis darum `false`, obwohl das erste Zeichen ein Stern ist. Außerdem verstößt der
Vergleich gegen die Regel „Strings nicht per Referenz vergleichen“. Richtig ist `s.charAt(0) == '*'`, ein Vergleich
zweier `char`-Werte. Erlaubt wäre auch `s.substring(0, 1).equals("*")`.
:::

```aufgabe
id: pt-ei-zeilen-verstoesse
titel: Verstöße markieren
niveau: 1
lernziel: 1
kompetenz: verstehen
quelle: Einschränkungen der Programmiertests 2021 bis 2023
angabe: |
  Markiere **alle** Zeilen, die gegen eine Einschränkung des Programmiertests verstoßen. Die Methode `hatStern` soll
  rekursiv sein.
teile:
  - typ: zeilen
    code: |
      public class Verstoesse {
          static int gefunden = 0;
          public static int[][] kopie(int[][] a) {
              int[][] r = new int[a.length][];
              for (int i = 0; i < a.length; i++) {
                  r[i] = a[i].clone();
              }
              return r;
          }
          public static boolean hatStern(String s) {
              if (s.isEmpty()) {
                  return false;
              }
              if (s.substring(0, 1) == "*") {
                  return true;
              }
              return hatStern(s.substring(1));
          }
      }
    loesung: [2, 6, 14]
    fehler:
      - wert: [6, 14]
        meldung: Zeile 2 legt eine Variable außerhalb jeder Methode an. Das ist eine Klassenvariable, und die ist verboten, auch wenn sie nirgends benutzt wird.
      - wert: [2, 6, 14, 17]
        meldung: Zeile 17 ist der Selbstaufruf. Er ist erlaubt, denn `hatStern` muss rekursiv sein. `substring` gehört zu den erlaubten Methoden.
      - wert: [2, 14]
        meldung: '`clone` ist ausdrücklich verboten. Eine Kopie entsteht mit `new int[…]` und einer Schleife.'
hinweise:
  - Gehe die sieben Einschränkungen der Reihe nach durch und suche für jede eine passende Zeile.
loesung: |
  **Ansatz:** Jede Einschränkung einzeln gegen den Code prüfen.
  ---
  Zeile 2 ist eine Klassenvariable, Zeile 6 benutzt `clone`, Zeile 14 vergleicht zwei Strings mit `==`.
  ---
  Die Schleife in `kopie` ist erlaubt, denn `kopie` ist nicht die rekursive Methode. Zeile 17 ist ein erlaubter Selbstaufruf.
```

```aufgabe
id: pt-ei-rf-api
titel: Erlaubt oder verboten?
niveau: 1
lernziel: 1
kompetenz: verstehen
quelle: Einschränkungen der Programmiertests 2021 bis 2023 (erlaubte Methoden aus Arrays, String und Math)
angabe: Es gelten die Einschränkungen des Programmiertests. Beurteile für jeden Aufruf, ob er **erlaubt** ist.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`Math.abs(x)` in einer M1-Methode ist erlaubt.'
        richtig: true
        erklaerung: Aus der Klasse `Math` dürfen alle Methoden verwendet werden.
      - text: '`Arrays.sort(zeile)` in einer M2-Methode ist erlaubt.'
        richtig: false
        erklaerung: Aus `Arrays` sind nur `toString` und `deepToString` erlaubt.
      - text: '`s.isEmpty()` in der rekursiven Methode ist erlaubt.'
        richtig: true
        erklaerung: '`isEmpty` steht in der Liste der erlaubten String-Methoden.'
      - text: '`s.indexOf(''('')` in der rekursiven Methode ist erlaubt.'
        richtig: false
        erklaerung: '`indexOf` fehlt in der Liste. Erlaubt sind nur `charAt`, `equals`, `length`, `substring` und `isEmpty`.'
      - text: '`Arrays.deepToString(test1)` in `main` ist erlaubt.'
        richtig: true
        erklaerung: '`deepToString` ist ausdrücklich erlaubt und das wichtigste Werkzeug für die Testausgaben.'
    fehler:
      - wert: [r, r, r, r, r]
        meldung: Prüfe jeden Aufruf gegen die Liste. `sort` und `indexOf` stehen nicht darin, auch wenn sie bequem wären.
      - wert: [r, f, r, f, f]
        meldung: '`deepToString` steht ausdrücklich in der Liste der erlaubten Methoden aus `Arrays`.'
hinweise:
  - 'Die Liste lautet: aus `Arrays` nur `toString` und `deepToString`, aus `String` nur fünf Methoden, aus `Math` alles.'
loesung: |
  **Ansatz:** Jeden Aufruf mit der Liste der erlaubten Methoden vergleichen.
  ---
  Erlaubt sind `Math.abs`, `isEmpty` und `deepToString`. Verboten sind `Arrays.sort` und `indexOf`.
```

:::beispiel[Zählen ohne Klassenvariable]
Gesucht ist eine rekursive Methode `int anzahlZiffern(String s)`, die zählt, wie viele Zeichen von `s` Ziffern sind.
Aus `"a1b22"` wird 3. Eine erste Lösung sieht so aus:

```java
static int zaehler = 0;                              // Verstoß: Klassenvariable

public static int anzahlZiffern(String s) {
    if (s.isEmpty()) {
        return zaehler;
    }
    if (Character.isDigit(s.charAt(0))) {           // Verstoß: Klasse Character
        zaehler++;
    }
    return anzahlZiffern(s.substring(1));
}
```

Zwei Verstöße. Der Zähler liegt außerhalb der Methode, und `Character` gehört nicht zu den erlaubten Klassen. Die
Lösung ohne Verstöße gibt den Zähler über den **Rückgabewert** weiter:

```java
public static int anzahlZiffern(String s) {
    if (s.isEmpty()) {
        return 0;                          // im leeren String gibt es keine Ziffer
    }
    int eins = 0;
    char c = s.charAt(0);
    if (c >= '0' && c <= '9') {           // Ziffern liegen im Zeichensatz hintereinander
        eins = 1;
    }
    return eins + anzahlZiffern(s.substring(1));
}
```

- Der Basisfall liefert 0 statt einer Klassenvariable.
- Jeder Aufruf zählt nur sein erstes Zeichen (0 oder 1) und addiert das Ergebnis für den Rest.
- `c >= '0' && c <= '9'` vergleicht `char`-Werte. Die Ziffern `'0'` bis `'9'` haben im Zeichensatz aufeinanderfolgende
  Nummern. Das kennst du aus [2.5 Zeichen sind Zahlen: der Typ char](/lernen/ep1/ausdruecke/zeichen-sind-zahlen-der-typ-char).
:::

:::achtung[Eine Schleife in der rekursiven Methode]
Unter Zeitdruck schreiben manche die Rekursion „nur ein bisschen“ mit Schleife:

```java
public static boolean hatZiffer(String s) {
    for (int i = 0; i < s.length(); i++) {          // Verstoß
        if (s.charAt(i) >= '0' && s.charAt(i) <= '9') return true;
    }
    return false;
}
```

Das Ergebnis stimmt, aber die Methode ist gar nicht rekursiv. Sie verstößt gleich zweimal: gegen „muss rekursiv
implementiert werden“ und gegen „keine Schleifen“. Im Raster bleiben dafür weder Basisfall noch Fortschritt übrig.
Schreib lieber eine unvollständige Rekursion mit richtigem Basisfall als eine fertige Schleife.
:::

```aufgabe
id: pt-ei-gefuehrt-zaehler
titel: Warum eine Klassenvariable falsch zählt
niveau: 2
lernziel: 1
kompetenz: begruenden
angabe: |
  Diese Methode zählt mit einer Klassenvariable, wie oft `c` in `s` vorkommt. Was gibt das Programm aus? Löse die
  Aufgabe zuerst geführt.
teile:
  - typ: ausgabe
    code: |
      public class Zaehler {
          static int z = 0;

          public static int zaehle(String s, char c) {
              if (s.isEmpty()) {
                  return z;
              }
              if (s.charAt(0) == c) {
                  z++;
              }
              return zaehle(s.substring(1), c);
          }

          public static void main(String[] args) {
              System.out.println(zaehle("abca", 'a'));
              System.out.println(zaehle("xa", 'a'));
          }
      }
    loesung: |
      2
      3
    fehler:
      - wert: "2\n1"
        meldung: Das wäre richtig gezählt. Aber `z` wird zwischen den beiden Aufrufen nie auf 0 zurückgesetzt. Der zweite Aufruf zählt beim alten Stand weiter.
      - wert: "2\n2"
        meldung: Im String `"xa"` gibt es ein `a`. `z` wird also noch einmal erhöht, ausgehend vom Stand nach dem ersten Aufruf.
gefuehrt:
  - text: Welchen Wert hat `z`, nachdem der erste Aufruf `zaehle("abca", 'a')` fertig ist?
    teil: { typ: zahl, loesung: "2" }
    erklaerung: In `"abca"` steht `a` an den Indizes 0 und 3. `z` wird zweimal erhöht.
  - text: Wird `z` vor dem zweiten Aufruf wieder 0?
    teil:
      typ: auswahl
      optionen: ['nein, `z` behält den Wert 2', 'ja, jeder Aufruf aus main beginnt neu']
      richtig: [0]
    erklaerung: '`z` gehört der Klasse, nicht dem Aufruf. Die Zeile `static int z = 0;` läuft nur einmal beim Start des Programms.'
  - text: Welchen Wert müsste `zaehle("xa", 'a')` richtigerweise liefern?
    teil: { typ: zahl, loesung: "1" }
    erklaerung: 'In `"xa"` steht genau ein `a`. Die Methode liefert aber `2 + 1 = 3`.'
hinweise:
  - Lokale Variablen und Parameter beginnen bei jedem Aufruf neu. Eine Klassenvariable nicht.
  - Verfolge `z` über beide Aufrufe aus `main`.
loesung: |
  **Ansatz:** `z` existiert nur einmal für das ganze Programm. Jede Erhöhung bleibt erhalten.
  ---
  Erster Aufruf: zwei Treffer, `z = 2`, Ausgabe 2.
  ---
  Zweiter Aufruf: ein Treffer, `z = 3`, Ausgabe 3. Richtig wäre 1. Der Testrahmen ruft deine Methode viele Male auf.
  Deshalb verbietet der Test Klassenvariablen, und deshalb gehört der Zähler in den Rückgabewert.
```

```aufgabe
id: pt-ei-auswahl-kopie
titel: Eine Zeile regelkonform kopieren
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  In einer M1-Methode soll `r[i]` eine **eigene Kopie** der Zeile `input[i]` werden. Welcher Code erfüllt das und hält
  die Einschränkungen ein?
teile:
  - typ: auswahl
    optionen:
      - '`r[i] = input[i];`'
      - '`r[i] = input[i].clone();`'
      - '`r[i] = new int[input[i].length];` und danach `for (int j = 0; j < input[i].length; j++) { r[i][j] = input[i][j]; }`'
      - '`r[i] = new int[input[i].length];` und danach `System.arraycopy(input[i], 0, r[i], 0, input[i].length);`'
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Das kopiert nur den Verweis. `r[i]` und `input[i]` sind danach dieselbe Zeile, und `r[i] == input[i]` liefert `true`.
      - wert: 1
        meldung: '`clone` würde eine echte Kopie liefern, ist im Test aber ausdrücklich verboten.'
      - wert: 3
        meldung: '`System.arraycopy` ist im Test ausdrücklich verboten. Kopiere mit einer eigenen Schleife.'
hinweise:
  - Zwei Bedingungen müssen gelten. Es entsteht eine neue Zeile, und keine verbotene Methode wird benutzt.
  - Eine neue Zeile entsteht nur mit `new`.
loesung: |
  **Ansatz:** Für jede Option zwei Fragen stellen. Entsteht ein neues Array, und ist der Weg erlaubt?
  ---
  Option 1 erzeugt kein neues Array. Optionen 2 und 4 kopieren richtig, benutzen aber verbotene Methoden.
  ---
  Nur Option 3 legt mit `new` eine neue Zeile an und kopiert sie Element für Element.
```

```aufgabe
id: pt-ei-lueckentext-klammern
titel: Klammern rekursiv zählen
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  `zaehleAuf(s)` soll rekursiv zählen, wie viele öffnende Klammern `(` in `s` stehen. Ergänze die Lücken so, dass die
  Methode alle Einschränkungen einhält.
teile:
  - typ: lueckentext
    code: |
      public class Klammern {
          public static int zaehleAuf(String s) {
              if (___) {
                  return 0;
              }
              int eins = 0;
              if (s.charAt(0) ___ '(') {
                  eins = 1;
              }
              return eins + zaehleAuf(___);
          }
      }
    luecken: [["s.isEmpty()", "s.length() == 0", "s.length() < 1"], ["=="], ["s.substring(1)"]]
    fehler:
      - wert: ["s == \"\"", "==", "s.substring(1)"]
        meldung: '`s == ""` vergleicht zwei Strings per Referenz. Das ist verboten. Ob es `true` liefert, hängt davon ab, wie der leere String entstanden ist, und darauf kannst du dich nicht verlassen. Nimm `s.isEmpty()`.'
      - wert: ["s.isEmpty()", "==", "s.substring(0)"]
        meldung: '`s.substring(0)` ist der ganze String. Der Aufruf wird nie kürzer, und die Rekursion endet nie. Der Rest beginnt bei Index 1.'
hinweise:
  - Der Basisfall ist der leere String. Prüfe ihn mit einer erlaubten String-Methode.
  - '`charAt` liefert ein `char`. Zwei `char`-Werte vergleichst du mit `==`.'
loesung: |
  **Ansatz:** Basisfall leerer String, Beitrag des ersten Zeichens, Selbstaufruf mit dem Rest.
  ---
  Lücke 1: `s.isEmpty()`. Lücke 2: `==`, denn `s.charAt(0)` und `'('` sind beide `char`.
  ---
  Lücke 3: `s.substring(1)`, der Rest ohne das erste Zeichen. Probe: `zaehleAuf("(a)(")` liefert 2.
```

```aufgabe
id: pt-ei-code-laenge
titel: Jede Zeile mit ihrer Länge
niveau: 2
lernziel: 1
kompetenz: anwenden
quelle: Einschränkungen der Programmiertests (keine Hilfsmethoden, kein clone, kein System.arraycopy), Inhalt neu
angabe: |
  Implementiere `int[][] mitLaenge(int[][] input)`. Die Methode liefert ein neues Array mit so vielen Zeilen wie
  `input`. Jede Zeile beginnt mit der Länge der ursprünglichen Zeile. Danach folgen deren Einträge in derselben
  Reihenfolge. Es gelten die Einschränkungen des Programmiertests. Vorbedingung: `input != null`, keine Zeile ist
  `null`.

  ```text
  mitLaenge(new int[][]{{7, 8}, {}, {5}})   liefert {{2, 7, 8}, {0}, {1, 5}}
  ```
teile:
  - typ: code
    vorlage: |
      public class Laenge {
          public static int[][] mitLaenge(int[][] input) {
              return null; // TODO
          }
      }
    musterloesung: |
      public class Laenge {
          public static int[][] mitLaenge(int[][] input) {
              int[][] r = new int[input.length][];
              for (int i = 0; i < input.length; i++) {
                  int n = input[i].length;
                  r[i] = new int[n + 1];
                  r[i][0] = n;
                  for (int j = 0; j < n; j++) {
                      r[i][j + 1] = input[i][j];
                  }
              }
              return r;
          }
      }
    tests:
      - { aufruf: "mitLaenge(new int[][]{{7, 8}, {}, {5}})", erwartet: "new int[][]{{2, 7, 8}, {0}, {1, 5}}" }
      - { aufruf: "mitLaenge(new int[][]{{}})", erwartet: "new int[][]{{0}}", beschreibung: "nur eine leere Zeile" }
      - { aufruf: "mitLaenge(new int[][]{})", erwartet: "new int[][]{}", beschreibung: "gar keine Zeile" }
      - { vorher: "int[][] t = {{4, 4}}; mitLaenge(t);", aufruf: "t", erwartet: "new int[][]{{4, 4}}", beschreibung: "Eingabe bleibt unverändert" }
      - { aufruf: "mitLaenge(new int[][]{{-1, -1, -1}, {0}})", erwartet: "new int[][]{{3, -1, -1, -1}, {1, 0}}", versteckt: true }
    regeln: { keineHilfsmethoden: true, keineFelder: true, keineArrayKopie: true, erlaubteApi: ["Math.*"] }
    fehler:
      - { wert: 1, meldung: "Jede neue Zeile ist um 1 länger als die alte. Der Platz 0 bekommt die Länge, die Einträge rücken um einen Platz nach hinten: `r[i][j + 1] = input[i][j]`." }
      - { wert: 2, meldung: "Eine leere Zeile hat die Länge 0. Ihre neue Zeile ist `{0}`, nicht leer. Lege die Zeile mit `new int[n + 1]` an." }
      - { wert: "keineArrayKopie", meldung: "`clone`, `System.arraycopy` und `Arrays.copyOf` sind verboten. Kopiere mit einer Schleife." }
hinweise:
  - Die Form steht sofort fest. So viele Zeilen wie `input`, jede um 1 länger als ihr Original.
  - Schreibe zuerst `r[i][0] = n;`, dann kopiere mit einer Schleife um einen Platz versetzt.
loesung: |
  **Ansatz:** M1 ohne verbotene Hilfen. Neue Zeile mit `new`, Länge an Platz 0, Einträge versetzt kopieren.
  ---
  ```java
  int[][] r = new int[input.length][];
  for (int i = 0; i < input.length; i++) {
      int n = input[i].length;
      r[i] = new int[n + 1];
      r[i][0] = n;
      for (int j = 0; j < n; j++) {
          r[i][j + 1] = input[i][j];
      }
  }
  return r;
  ```
  ---
  Die leere Zeile wird zu `{0}`. Bei `new int[][]{}` läuft die äußere Schleife nie, und das Ergebnis hat keine Zeile.
  ---
  Probe: `{7, 8}` hat die Länge 2. Die neue Zeile ist `{2, 7, 8}`.
```

```reflexion
frage: Die Einschränkung „Methodenköpfe nicht erweitern“ verbietet dir, einer rekursiven String-Methode einen Index-Parameter hinzuzufügen. Wie kommst du trotzdem durch den String?
antwort: |
  Statt eines Index verkürze ich den String selbst. Jeder Aufruf schaut nur auf das erste Zeichen mit `charAt(0)` und
  gibt den Rest `substring(1)` an den Selbstaufruf weiter. Der Rest wird mit jedem Aufruf um ein Zeichen kürzer, also
  ist der leere String ein sicherer Basisfall. Brauche ich das letzte Zeichen, nehme ich `charAt(s.length() - 1)` und
  `substring(0, s.length() - 1)`. Steht ein Index schon im vorgegebenen Kopf, wie bei Methoden auf Arrays, benutze ich
  ihn und rufe mit `index + 1` auf.
```

```aufgabe
id: pt-ei-code-punkt
titel: Alles bis zum ersten Punkt
niveau: 3
lernziel: 1
kompetenz: anwenden
quelle: Einschränkungen der rekursiven Methode im Programmiertest (nur charAt, equals, length, substring, isEmpty), Inhalt neu
angabe: |
  Implementiere `String bisZumPunkt(String s)` **rekursiv**. Die Methode liefert alle Zeichen von `s` vor dem ersten
  Punkt `.`. Enthält `s` keinen Punkt, liefert sie `s` unverändert. Es gelten alle Einschränkungen des
  Programmiertests, also auch: kein `indexOf`, keine Schleife, keine Hilfsmethode. Vorbedingung: `s != null`.

  ```text
  bisZumPunkt("abc.de")   liefert "abc"
  bisZumPunkt("...")      liefert ""
  bisZumPunkt("kein")     liefert "kein"
  bisZumPunkt("")         liefert ""
  ```
teile:
  - typ: code
    vorlage: |
      public class Punkt {
          public static String bisZumPunkt(String s) {
              return null; // TODO
          }
      }
    musterloesung: |
      public class Punkt {
          public static String bisZumPunkt(String s) {
              if (s.isEmpty() || s.charAt(0) == '.') {
                  return "";
              }
              return s.charAt(0) + bisZumPunkt(s.substring(1));
          }
      }
    tests:
      - { aufruf: "bisZumPunkt(\"abc.de\")", erwartet: "\"abc\"" }
      - { aufruf: "bisZumPunkt(\"...\")", erwartet: "\"\"", beschreibung: "Punkt ganz vorne" }
      - { aufruf: "bisZumPunkt(\"kein\")", erwartet: "\"kein\"", beschreibung: "kein Punkt" }
      - { aufruf: "bisZumPunkt(\"\")", erwartet: "\"\"", beschreibung: "leerer String" }
      - { aufruf: "bisZumPunkt(\"a.b.c\")", erwartet: "\"a\"", versteckt: true }
      - { aufruf: "bisZumPunkt(\"Ende.\")", erwartet: "\"Ende\"", versteckt: true }
    regeln: { keineSchleifenIn: [bisZumPunkt], rekursiv: [bisZumPunkt], keineHilfsmethoden: true, keineFelder: true, keinStringGleichOperator: true, erlaubteApi: ["String.charAt", "String.equals", "String.length", "String.substring", "String.isEmpty", "Math.*"] }
    fehler:
      - { wert: 3, meldung: "Ohne Punkt soll der ganze String herauskommen. Der Basisfall „leerer String“ liefert dann `\"\"`, und jeder Aufruf hängt sein Zeichen davor." }
      - { wert: 4, meldung: "Der leere String braucht einen eigenen Basisfall. Sonst greift `charAt(0)` ins Leere und wirft eine Exception." }
      - { wert: "keineSchleifenIn", meldung: "Die Methode muss ohne Schleife auskommen. Schau dir nur das erste Zeichen an und überlasse den Rest dem Selbstaufruf." }
hinweise:
  - 'Zwei Basisfälle: Der String ist leer, oder er beginnt mit einem Punkt. In beiden Fällen ist das Ergebnis `""`.'
  - Sonst gehört das erste Zeichen zum Ergebnis. Hänge es vor das Ergebnis des Selbstaufrufs mit `substring(1)`.
loesung: |
  **Ansatz:** Ein `indexOf` ist verboten, also wandert die Rekursion Zeichen für Zeichen bis zum ersten Punkt.
  ---
  Basisfälle: leerer String oder erstes Zeichen `.`. Dann kommt nichts mehr dazu, Ergebnis `""`.
  ---
  ```java
  if (s.isEmpty() || s.charAt(0) == '.') {
      return "";
  }
  return s.charAt(0) + bisZumPunkt(s.substring(1));
  ```
  ---
  `s.charAt(0) + bisZumPunkt(…)` verbindet ein `char` mit einem `String`. Weil rechts ein String steht, ist `+` hier
  Verkettung, keine Addition. Die Reihenfolge der Zeichen bleibt erhalten, weil das eigene Zeichen vorne steht.
  ---
  Probe: `"abc.de"` ergibt `'a' + ('b' + ('c' + ""))`, also `"abc"`. Bei `"..."` greift sofort der zweite Basisfall.
```

## Methode 1: ein neues Array erzeugen

```aufgabe
id: pt-m1-check-null
titel: Zeilen, die es noch nicht gibt
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [14.3 Jagged Arrays: Zeilen als eigene Arrays](/lernen/ep1/arrays-2d/jagged-arrays-zeilen-als-eigene-arrays))
teile:
  - typ: ausgabe
    code: |
      int[][] r = new int[2][];
      System.out.println(Arrays.deepToString(r));
      r[1] = new int[3];
      System.out.println(Arrays.deepToString(r));
    loesung: |
      [null, null]
      [null, [0, 0, 0]]
    fehler:
      - wert: "[[], []]\n[[], [0, 0, 0]]"
        meldung: Mit leerer zweiter Klammer legt `new int[2][]` nur die zwei Plätze für Zeilen an. Beide Plätze sind `null`, nicht leere Zeilen.
      - wert: "[null, null]\n[null, [3]]"
        meldung: '`new int[3]` legt eine Zeile mit drei Plätzen an, alle mit dem Standardwert 0.'
hinweise:
  - Eine leere zweite Klammer heißt, dass die Zeilen erst später einzeln angelegt werden.
loesung: |
  `new int[2][]` erzeugt zwei Plätze für Zeilen, beide `null`.
  ---
  `r[1] = new int[3]` legt die Zeile mit Index 1 an, mit drei Nullen. Zeile 0 bleibt `null`.
```

Die erste Methode eines Programmiertests liefert fast immer ein **neues** Array zurück. Das ist das **Muster M1**. Das
Rezept dafür kennst du aus [14.5 Neue Arrays erzeugen (Muster M1)](/lernen/ep1/arrays-2d/neue-arrays-erzeugen-muster-m1):
erst die Form bestimmen, dann das äußere Array anlegen, dann jede Zeile anlegen und befüllen, zuletzt zurückgeben.

Im Test liegt die eigentliche Schwierigkeit in Schritt 1. Die **Form** ist die Zeilenzahl zusammen mit der Länge jeder
Zeile. Ein Array kann nach `new` nicht mehr wachsen. Darum musst du die Form aus der Beschreibung ausrechnen, bevor du
den ersten Wert einträgst. In den bisherigen Tests kamen sieben Arten von M1 vor. Für jede steht hier, wie man die
Form findet.

- **Treppe voranstellen** (`addTriangle`, 2022): Zeilenzahl ist die Länge der ersten Zeile plus die alte Zeilenzahl.
- **Zeilen wiederholen** (`repeat`, 2022): Zeile `i` hat die alte Länge mal `|reps[i]| + 1`.
- **Wahrheitswerte an Positionen** (`generate` mit `boolean[][]`, 2022): Länge ist das Maximum aus Mindestlänge und Position plus 1.
- **Auf Ziellänge bringen** (`getRectangular`, Februar 2022): alle Zeilen so lang wie die längste Zeile der Eingabe.
- **Filtern oder umordnen** (`removeLeadingZeros`, 2021, stabile Trennung, 2023): Länge erst nach einem Zähldurchlauf bekannt.
- **Linearisieren und neu verteilen** (`rearrange`, 2021): Zeilenzahl aus der Gesamtzahl aller Werte, aufgerundet.
- **Gitter aus einer Punktliste** (`labelPath`, 2021): ein quadratisches Array `n × n`.

:::beispiel[Zeilen wiederholen, auch rückwärts]
Gesucht ist `int[][] wiederhole(int[][] input, int[] mal)`. Die Methode liefert ein neues Array mit so vielen Zeilen
wie `input`. Zeile `i` besteht aus der Zeile `input[i]` und `mal[i]` weiteren Wiederholungen davon. Bei `mal[i] = 0`
wird die Zeile nur kopiert. Ist `mal[i]` negativ, wird die Zeile rückwärts kopiert und rückwärts wiederholt, so oft,
wie der Betrag angibt. Vorbedingung: keine Zeile ist leer, `mal.length == input.length`.

Aus `{{4, 6}, {1, 2, 3}, {5}}` mit `mal = {1, -1, 2}` wird `{{4, 6, 4, 6}, {3, 2, 1, 3, 2, 1}, {5, 5, 5}}`.

**Schritt 1, die Form:** Zeile `i` enthält die Eingabezeile `|mal[i]| + 1`-mal, das eine Original und die
Wiederholungen. Bei Länge `n` ist die neue Länge also `n · (|mal[i]| + 1)`. Für Zeile 1 sind das `3 · 2 = 6` Plätze.

**Schritt 2 bis 4, anlegen und befüllen:**

```java
public static int[][] wiederhole(int[][] input, int[] mal) {
    int[][] r = new int[input.length][];                  // so viele Zeilen wie input
    for (int i = 0; i < input.length; i++) {
        int n = input[i].length;
        r[i] = new int[n * (Math.abs(mal[i]) + 1)];       // Form der Zeile i
        for (int j = 0; j < r[i].length; j++) {
            if (mal[i] >= 0) {
                r[i][j] = input[i][j % n];                // vorwärts im Kreis
            } else {
                r[i][j] = input[i][n - 1 - j % n];        // rückwärts im Kreis
            }
        }
    }
    return r;
}
```

- `j % n` ist der Rest von `j` geteilt durch `n`. Er läuft 0, 1, …, `n − 1`, dann wieder 0, 1, … So liest die
  Schleife die Eingabezeile immer wieder von vorne.
- `n - 1 - j % n` läuft dieselben Indizes rückwärts, also `n − 1`, …, 0, dann wieder von hinten.
- Probe für Zeile 1 mit `n = 3`. Die Werte `j = 0` bis `j = 5` ergeben die Indizes 2, 1, 0, 2, 1, 0. Gelesen werden
  also `3, 2, 1, 3, 2, 1`.
:::

:::achtung[Die Länge ohne das Original berechnet]
Jemand legt die Zeile mit `new int[n * mal[i]]` an. Das vergisst zweierlei. Bei `mal[i] = 0` entsteht eine leere
Zeile statt einer Kopie, also `[]` statt `[5]` für die Eingabezeile `{5}`. Bei `mal[i] = -1` ist die Länge `-3`, und
Java bricht mit einer `NegativeArraySizeException` ab. Richtig ist `n * (Math.abs(mal[i]) + 1)`: Betrag nehmen und
das Original mitzählen.
:::

```aufgabe
id: pt-m1-gefuehrt-stufen
titel: Eine Treppe über den Zeilen
niveau: 1
lernziel: 2
kompetenz: verstehen
quelle: nach Programmiertest 27.01.2022, Gruppe A (addTriangle), neue Testdaten
angabe: |
  `stufenOben(input)` liefert ein neues Array. Oben stehen `n` Zeilen, wobei `n` die Länge der ersten Zeile von `input`
  ist. Zeile `k` dieser Treppe hat die Länge `k + 1` und lauter Einträge `k + 1`. Darunter folgen Kopien aller Zeilen
  von `input`. Was gibt das Programm aus? Löse die Aufgabe zuerst geführt.
teile:
  - typ: ausgabe
    code: |
      import java.util.Arrays;

      public class Stufen {
          public static int[][] stufenOben(int[][] input) {
              int n = input[0].length;
              int[][] r = new int[n + input.length][];
              for (int k = 0; k < n; k++) {
                  r[k] = new int[k + 1];
                  for (int j = 0; j <= k; j++) {
                      r[k][j] = k + 1;
                  }
              }
              for (int i = 0; i < input.length; i++) {
                  r[n + i] = new int[input[i].length];
                  for (int j = 0; j < input[i].length; j++) {
                      r[n + i][j] = input[i][j];
                  }
              }
              return r;
          }

          public static void main(String[] args) {
              int[][] t = {{6, 0, 6}, {1}};
              System.out.println(Arrays.deepToString(stufenOben(t)));
          }
      }
    loesung: |
      [[1], [2, 2], [3, 3, 3], [6, 0, 6], [1]]
    fehler:
      - wert: "[[1], [2, 2], [3, 3, 3], [6, 0, 6]]"
        meldung: Alle Zeilen von `input` werden kopiert, auch die letzte Zeile `{1}`. Das Ergebnis hat `3 + 2 = 5` Zeilen.
      - wert: "[[0], [1, 1], [2, 2, 2], [6, 0, 6], [1]]"
        meldung: 'Die Einträge der Treppe sind `k + 1`, nicht `k`. Die erste Stufe enthält also eine 1.'
gefuehrt:
  - text: Wie viele Zeilen hat das Ergebnis?
    teil: { typ: zahl, loesung: "3 + 2" }
    erklaerung: Die erste Zeile `{6, 0, 6}` hat die Länge 3, also drei Stufen. Dazu kommen die zwei Zeilen von `input`.
  - text: Wie lang ist die Ergebniszeile mit Index 2?
    teil: { typ: zahl, loesung: "2 + 1" }
    erklaerung: Index 2 ist noch eine Stufe. Sie hat die Länge `k + 1 = 3`.
  - text: Welcher Index im Ergebnis bekommt die Kopie von `input[1]`?
    teil: { typ: zahl, loesung: "3 + 1" }
    erklaerung: Die Kopien beginnen nach den `n = 3` Stufen. `input[i]` landet bei `n + i`, also `input[1]` bei 4.
hinweise:
  - Bestimme zuerst `n`, dann die Zeilenzahl, dann jede Zeile einzeln.
loesung: |
  **Ansatz:** Form zuerst. `n = 3` Stufen plus 2 kopierte Zeilen ergeben 5 Zeilen.
  ---
  Stufen: `[1]`, `[2, 2]`, `[3, 3, 3]`. Danach die Kopien `[6, 0, 6]` und `[1]` an den Indizes 3 und 4.
```

```aufgabe
id: pt-m1-ausgabe-wiederhole
titel: Wiederholen mit null und negativ
niveau: 1
lernziel: 2
kompetenz: anwenden
angabe: |
  `wiederhole` aus dem Beispiel „Zeilen wiederholen, auch rückwärts“ ist richtig implementiert. Was gibt dieser Aufruf
  aus?

  ```java
  int[][] t = {{9, 8}, {7}, {1, 2, 3}};
  System.out.println(Arrays.deepToString(wiederhole(t, new int[]{0, 3, -2})));
  ```
teile:
  - typ: ausgabe
    codeAnzeigen: false
    code: |
      import java.util.Arrays;

      public class W {
          public static int[][] wiederhole(int[][] input, int[] mal) {
              int[][] r = new int[input.length][];
              for (int i = 0; i < input.length; i++) {
                  int n = input[i].length;
                  r[i] = new int[n * (Math.abs(mal[i]) + 1)];
                  for (int j = 0; j < r[i].length; j++) {
                      if (mal[i] >= 0) {
                          r[i][j] = input[i][j % n];
                      } else {
                          r[i][j] = input[i][n - 1 - j % n];
                      }
                  }
              }
              return r;
          }

          public static void main(String[] args) {
              int[][] t = {{9, 8}, {7}, {1, 2, 3}};
              System.out.println(Arrays.deepToString(wiederhole(t, new int[]{0, 3, -2})));
          }
      }
    loesung: |
      [[9, 8], [7, 7, 7, 7], [3, 2, 1, 3, 2, 1, 3, 2, 1]]
    fehler:
      - wert: "[[], [7, 7, 7], [3, 2, 1, 3, 2, 1]]"
        meldung: Das Original zählt mit. Bei `mal = 0` steht die Zeile einmal da, bei `mal = 3` viermal und bei `mal = -2` dreimal.
      - wert: "[[9, 8], [7, 7, 7, 7], [3, 2, 1, 1, 2, 3, 3, 2, 1]]"
        meldung: Auch die Wiederholungen laufen rückwärts. Jeder Durchgang beginnt wieder beim letzten Element.
hinweise:
  - Die Länge der Zeile `i` ist `n · (|mal[i]| + 1)`.
loesung: |
  **Ansatz:** Für jede Zeile Länge und Richtung bestimmen.
  ---
  Zeile 0: `mal = 0`, nur die Kopie `[9, 8]`. Zeile 1: `mal = 3`, viermal die 7. Zeile 2: `mal = -2`, dreimal `3, 2, 1`.
```

```aufgabe
id: pt-m1-auswahl-form
titel: Die Form für eine Rechteckaufgabe
niveau: 1
lernziel: 2
kompetenz: verstehen
quelle: nach Programmiertest 10.02.2022, Gruppe 10A (getRectangular)
angabe: |
  Eine M1-Methode soll ein **rechteckiges** Array liefern. Es hat so viele Zeilen wie `input`, und jede Zeile ist so
  lang wie die **längste** Zeile von `input`. Welcher Anfang legt die richtige Form an?
teile:
  - typ: auswahl
    optionen:
      - '`int max = 0; for (int i = 0; i < input.length; i++) { max = Math.max(max, input[i].length); } int[][] r = new int[input.length][max];`'
      - '`int[][] r = new int[input.length][input[0].length];`'
      - '`int[][] r = new int[input.length][input.length];`'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die erste Zeile ist nicht unbedingt die längste. Für `{{5}, {5, 7, 9}}` wären alle Zeilen nur 1 lang.
      - wert: 2
        meldung: Die Zeilenzahl hat mit der Zeilenlänge nichts zu tun. Gesucht ist die Länge der längsten Zeile.
hinweise:
  - Die längste Zeile kennst du erst nach einem Durchlauf über alle Zeilen.
loesung: |
  **Ansatz:** Die Form braucht die größte Zeilenlänge. Die steht erst nach einem eigenen Durchlauf fest.
  ---
  Nur Option 1 bestimmt `max` über alle Zeilen. Danach legt `new int[input.length][max]` alle Zeilen gleich lang an.
```

:::beispiel[Wahrheitswerte an vorgegebenen Positionen]
Gesucht ist `boolean[][] markiere(int[] pos)`. Für jeden Eintrag von `pos` entsteht eine Zeile. In Zeile `i` ist genau
der Eintrag mit Spaltenindex `pos[i]` gleich `true`, alle anderen sind `false`. Jede Zeile ist mindestens 4 lang. Ist
`pos[i]` negativ, gibt es in der Zeile kein `true`. Ist `pos[i]` größer als 3, wird die Zeile gerade so lang, dass
der letzte Eintrag `true` ist. Vorbedingung: `pos != null`.

Für `pos = {2, -1, 5}` entsteht:

```text
false false true  false
false false false false
false false false false false true
```

**Form:** Damit Index `pos[i]` existiert, braucht die Zeile die Länge `pos[i] + 1`. Mindestens ist sie 4 lang. Die
Länge ist also `Math.max(4, pos[i] + 1)`. Für `pos[i] = 5` sind das 6, für `pos[i] = 2` und `pos[i] = -1` sind es 4.

```java
public static boolean[][] markiere(int[] pos) {
    boolean[][] r = new boolean[pos.length][];
    for (int i = 0; i < pos.length; i++) {
        r[i] = new boolean[Math.max(4, pos[i] + 1)];  // Mindestlänge oder bis pos[i]
        if (pos[i] >= 0) {
            r[i][pos[i]] = true;                       // nur bei gültiger Position
        }
    }
    return r;
}
```

- `new boolean[…]` füllt alle Plätze mit dem Standardwert `false`. Gesetzt werden muss nur das eine `true`.
- Die Abfrage `pos[i] >= 0` verhindert den Zugriff `r[i][-1]`.
- Randfall `pos = {}`: Die Schleife läuft nie, das Ergebnis ist ein Array ohne Zeilen, `deepToString` zeigt `[]`.
:::

:::achtung[Die Mindestlänge mit der Position verglichen]
Jemand schreibt `new boolean[Math.max(4, pos[i])]`. Für `pos[i] = 5` entsteht eine Zeile der Länge 5 mit den Indizes 0
bis 4. Die Zuweisung `r[i][5] = true` greift dann hinter das Ende, und das Programm bricht mit einer
`ArrayIndexOutOfBoundsException` ab. Ein Index `p` braucht eine Länge von mindestens `p + 1`. Prüfe jede
Längenformel am größten Index, der darin landen soll.
:::

```aufgabe
id: pt-m1-code-treppe
titel: Eine Treppe unter den Zeilen
niveau: 2
lernziel: 2
kompetenz: anwenden
quelle: nach Programmiertest 27.01.2022, Gruppen 14A und 14B (addTriangle, addStairs), Treppe nach unten verlegt
angabe: |
  Implementiere `int[][] treppeUnten(int[][] input)`. Die Methode liefert ein neues Array. Es beginnt mit Kopien aller
  Zeilen von `input`. Darunter folgen `k` weitere Zeilen, wobei `k` die Länge der **letzten** Zeile von `input` ist.
  Diese Zeilen haben die Längen `k`, `k − 1`, …, 1, und jeder Eintrag ist gleich der Länge seiner Zeile. Keine Zeile
  des Ergebnisses darf mit `input` geteilt werden. Vorbedingung: `input != null`, `input.length > 0`, keine Zeile ist
  `null`, die letzte Zeile ist nicht leer.

  ```text
  treppeUnten({{8, 1}, {5, 5, 2}})   liefert {{8, 1}, {5, 5, 2}, {3, 3, 3}, {2, 2}, {1}}
  treppeUnten({{9}})                 liefert {{9}, {1}}
  ```
teile:
  - typ: code
    vorlage: |
      public class Treppe {
          public static int[][] treppeUnten(int[][] input) {
              return null; // TODO
          }
      }
    musterloesung: |
      public class Treppe {
          public static int[][] treppeUnten(int[][] input) {
              int k = input[input.length - 1].length;
              int[][] r = new int[input.length + k][];
              for (int i = 0; i < input.length; i++) {
                  r[i] = new int[input[i].length];
                  for (int j = 0; j < input[i].length; j++) {
                      r[i][j] = input[i][j];
                  }
              }
              for (int s = 0; s < k; s++) {
                  int laenge = k - s;
                  r[input.length + s] = new int[laenge];
                  for (int j = 0; j < laenge; j++) {
                      r[input.length + s][j] = laenge;
                  }
              }
              return r;
          }
      }
    tests:
      - { aufruf: "treppeUnten(new int[][]{{8, 1}, {5, 5, 2}})", erwartet: "new int[][]{{8, 1}, {5, 5, 2}, {3, 3, 3}, {2, 2}, {1}}" }
      - { aufruf: "treppeUnten(new int[][]{{9}})", erwartet: "new int[][]{{9}, {1}}", beschreibung: "eine Zeile der Länge 1" }
      - { aufruf: "treppeUnten(new int[][]{{1}, {2, 0, 7, 3}})", erwartet: "new int[][]{{1}, {2, 0, 7, 3}, {4, 4, 4, 4}, {3, 3, 3}, {2, 2}, {1}}" }
      - { vorher: "int[][] t = {{4, 4}, {6}}; int[][] r = treppeUnten(t);", aufruf: "r[0] != t[0] && r[1] != t[1]", erwartet: "true", beschreibung: "keine Zeile mit input geteilt" }
      - { aufruf: "treppeUnten(new int[][]{{}, {7, 7}})", erwartet: "new int[][]{{}, {7, 7}, {2, 2}, {1}}", versteckt: true }
    regeln: { keineHilfsmethoden: true, keineFelder: true, keineArrayKopie: true, erlaubteApi: ["Math.*"] }
    fehler:
      - { wert: 1, meldung: "Prüfe die Zeilenzahl. Sie ist `input.length + k`, wobei `k` die Länge der **letzten** Zeile ist, nicht der ersten." }
      - { wert: 4, meldung: "Mindestens eine Zeile wurde mit `r[i] = input[i]` übernommen. Lege für jede Kopie mit `new int[…]` eine eigene Zeile an." }
hinweise:
  - Bestimme zuerst `k` und daraus die Zeilenzahl `input.length + k`.
  - Die Treppenzeile mit Index `input.length + s` hat die Länge `k − s`. Fülle sie mit diesem Wert.
loesung: |
  **Ansatz:** M1-Rezept. Die Form ist `input.length + k` Zeilen, die Treppe beginnt am Index `input.length`.
  ---
  Kopieren: für jede Eingabezeile eine neue Zeile mit `new int[input[i].length]` und eine Kopierschleife.
  ---
  ```java
  for (int s = 0; s < k; s++) {
      int laenge = k - s;
      r[input.length + s] = new int[laenge];
      for (int j = 0; j < laenge; j++) {
          r[input.length + s][j] = laenge;
      }
  }
  ```
  ---
  Probe mit `{{8, 1}, {5, 5, 2}}`: `k = 3`, also 5 Zeilen. Die Treppe ist `{3, 3, 3}`, `{2, 2}`, `{1}`.
```

```aufgabe
id: pt-m1-code-endnullen
titel: Nullen am Zeilenende entfernen
niveau: 2
lernziel: 2
kompetenz: anwenden
quelle: nach Programmiertest 28.01.2021 (removeLeadingZeros), Nullen am Ende statt am Anfang
angabe: |
  Implementiere `int[][] ohneEndNullen(int[][] input)`. Die Methode liefert ein neues Array mit so vielen Zeilen wie
  `input`. Jede Zeile ist eine Kopie der Eingabezeile ohne die Nullen **am Ende**. Nullen davor bleiben stehen. Eine
  Zeile aus lauter Nullen wird leer. Es gelten die Einschränkungen des Programmiertests. Vorbedingung:
  `input != null`, keine Zeile ist `null`.

  ```text
  ohneEndNullen({{3, 0, 4, 0, 0}, {0, 0}, {5}, {}})   liefert {{3, 0, 4}, {}, {5}, {}}
  ```
teile:
  - typ: code
    vorlage: |
      public class EndNullen {
          public static int[][] ohneEndNullen(int[][] input) {
              return null; // TODO
          }
      }
    musterloesung: |
      public class EndNullen {
          public static int[][] ohneEndNullen(int[][] input) {
              int[][] r = new int[input.length][];
              for (int i = 0; i < input.length; i++) {
                  int laenge = input[i].length;
                  while (laenge > 0 && input[i][laenge - 1] == 0) {
                      laenge--;
                  }
                  r[i] = new int[laenge];
                  for (int j = 0; j < laenge; j++) {
                      r[i][j] = input[i][j];
                  }
              }
              return r;
          }
      }
    tests:
      - { aufruf: "ohneEndNullen(new int[][]{{3, 0, 4, 0, 0}, {0, 0}, {5}, {}})", erwartet: "new int[][]{{3, 0, 4}, {}, {5}, {}}" }
      - { aufruf: "ohneEndNullen(new int[][]{{0, 1}})", erwartet: "new int[][]{{0, 1}}", beschreibung: "Null nur am Anfang" }
      - { vorher: "int[][] t = {{1, 2}}; int[][] r = ohneEndNullen(t);", aufruf: "r[0] != t[0]", erwartet: "true", beschreibung: "auch eine unveränderte Zeile ist eine Kopie" }
      - { aufruf: "ohneEndNullen(new int[][]{{0, 0, 7, 0}, {0}})", erwartet: "new int[][]{{0, 0, 7}, {}}", versteckt: true }
    regeln: { keineHilfsmethoden: true, keineFelder: true, keineArrayKopie: true, erlaubteApi: ["Math.*"] }
    fehler:
      - { wert: 1, meldung: "Bei `{0, 0}` muss die Zählung bei Länge 0 aufhören. Prüfe in der Bedingung zuerst `laenge > 0`, bevor du auf `input[i][laenge - 1]` zugreifst." }
      - { wert: 2, meldung: "Nur Nullen **am Ende** fallen weg. Eine Null am Anfang oder in der Mitte bleibt stehen." }
      - { wert: 3, meldung: "Auch eine Zeile ohne Endnullen muss eine neue Zeile werden. `r[i] = input[i]` teilt die Zeile mit der Eingabe." }
hinweise:
  - Zähle für jede Zeile zuerst, wie lang sie ohne Endnullen ist. Gehe dazu vom Ende nach vorne, solange eine 0 steht.
  - Lege dann eine Zeile dieser Länge an und kopiere die ersten Einträge.
loesung: |
  **Ansatz:** Filter-Muster. Die Länge jeder Zeile steht erst nach einem Zähldurchlauf fest, hier von hinten.
  ---
  ```java
  int laenge = input[i].length;
  while (laenge > 0 && input[i][laenge - 1] == 0) {
      laenge--;
  }
  ```
  `laenge > 0` steht vorne. Wegen der Kurzschlussauswertung von `&&` wird `input[i][-1]` nie gelesen.
  ---
  Danach `r[i] = new int[laenge];` und die ersten `laenge` Einträge kopieren.
  ---
  Probe: `{3, 0, 4, 0, 0}` verliert die zwei Nullen am Ende, die Null in der Mitte bleibt. Ergebnis `{3, 0, 4}`.
```

```aufgabe
id: pt-m1-code-rechteck
titel: Kürzere Zeilen im Kreis auffüllen
niveau: 2
lernziel: 2
kompetenz: anwenden
quelle: nach Programmiertest 10.02.2022, Gruppen 10A und 10B (getRectangular, uniformLength), neue Testdaten
angabe: |
  Implementiere `int[][] aufLaenge(int[][] input)`. Das Ergebnis hat so viele Zeilen wie `input`, und jede Zeile ist so
  lang wie die längste Zeile von `input`. Kürzere Zeilen werden **wiederholt**, bis die Zeile voll ist. Eine leere
  Zeile wird mit Nullen gefüllt. Vorbedingung: `input != null`, `input.length > 0`, keine Zeile ist `null`.

  ```text
  aufLaenge({{3, 1}, {}, {6, 7, 8, 9}, {2}})   liefert {{3, 1, 3, 1}, {0, 0, 0, 0}, {6, 7, 8, 9}, {2, 2, 2, 2}}
  aufLaenge({{}})                               liefert {{}}
  ```
teile:
  - typ: code
    vorlage: |
      public class Rechteckig {
          public static int[][] aufLaenge(int[][] input) {
              return null; // TODO
          }
      }
    musterloesung: |
      public class Rechteckig {
          public static int[][] aufLaenge(int[][] input) {
              int max = 0;
              for (int i = 0; i < input.length; i++) {
                  max = Math.max(max, input[i].length);
              }
              int[][] r = new int[input.length][max];
              for (int i = 0; i < input.length; i++) {
                  int n = input[i].length;
                  if (n > 0) {
                      for (int j = 0; j < max; j++) {
                          r[i][j] = input[i][j % n];
                      }
                  }
              }
              return r;
          }
      }
    tests:
      - { aufruf: "aufLaenge(new int[][]{{3, 1}, {}, {6, 7, 8, 9}, {2}})", erwartet: "new int[][]{{3, 1, 3, 1}, {0, 0, 0, 0}, {6, 7, 8, 9}, {2, 2, 2, 2}}" }
      - { aufruf: "aufLaenge(new int[][]{{}})", erwartet: "new int[][]{{}}", beschreibung: "nur eine leere Zeile" }
      - { aufruf: "aufLaenge(new int[][]{{5, 6, 7}, {1, 2}})", erwartet: "new int[][]{{5, 6, 7}, {1, 2, 1}}", beschreibung: "Wiederholung bricht mitten in der Zeile ab" }
      - { vorher: "int[][] t = {{4, 5}, {1}}; int[][] r = aufLaenge(t);", aufruf: "r[0] != t[0]", erwartet: "true", beschreibung: "auch die längste Zeile wird kopiert" }
      - { aufruf: "aufLaenge(new int[][]{{}, {1, 2, 3, 4, 5}, {8, 9}})", erwartet: "new int[][]{{0, 0, 0, 0, 0}, {1, 2, 3, 4, 5}, {8, 9, 8, 9, 8}}", versteckt: true }
    regeln: { keineHilfsmethoden: true, keineFelder: true, keineArrayKopie: true, erlaubteApi: ["Math.*"] }
    fehler:
      - { wert: 1, meldung: "Eine leere Zeile hat die Länge 0. `j % 0` wirft eine `ArithmeticException`. Behandle leere Zeilen gesondert, ihre Nullen kommen vom Standardwert." }
      - { wert: 3, meldung: "Die Wiederholung kann mitten in der Zeile aufhören. Mit `input[i][j % n]` läuft der Index im Kreis, egal wie oft `n` in `max` passt." }
hinweise:
  - Erster Durchlauf, die längste Länge `max` bestimmen. Dann `new int[input.length][max]`.
  - Für eine Zeile der Länge `n > 0` ist der Wert an Stelle `j` gleich `input[i][j % n]`.
loesung: |
  **Ansatz:** Muster „auf Ziellänge bringen“. Erst die Form mit einem eigenen Durchlauf, dann befüllen.
  ---
  `max` ist die größte Zeilenlänge. `new int[input.length][max]` legt alle Zeilen gleich lang mit Nullen an.
  ---
  ```java
  int n = input[i].length;
  if (n > 0) {
      for (int j = 0; j < max; j++) {
          r[i][j] = input[i][j % n];
      }
  }
  ```
  ---
  Leere Zeilen bleiben unberührt und behalten ihre Nullen. Ohne die Abfrage `n > 0` würde `j % 0` eine Exception werfen.
  ---
  Probe: `{3, 1}` mit `max = 4` ergibt die Indizes 0, 1, 0, 1, also `{3, 1, 3, 1}`.
```

```reflexion
frage: In fast jeder M1-Aufgabe prüfen die Tests, ob `result[0] == input[0]` den Wert `false` liefert. Warum ist es ein Fehler, eine Zeile einfach zu übernehmen, wenn ihr Inhalt doch stimmt?
antwort: |
  Weil dann zwei Arrays dieselbe Zeile teilen. Die Angabe verlangt ein neues Array, und ein neues Array soll vom Original
  unabhängig sein. Ändert später eine M2-Methode die Eingabe, ändert sie unbemerkt auch das Ergebnis mit, und umgekehrt.
  In `main` steht oft genau diese Folge, erst M1, dann M2 auf demselben Testarray. Mit geteilten Zeilen sind dann beide
  Ausgaben falsch, obwohl jede Methode für sich korrekt aussieht. `==` vergleicht Verweise und deckt das sofort auf.
```

```aufgabe
id: pt-m1-code-schlange
titel: Werte in Schlangenlinien verteilen
niveau: 3
lernziel: 2
kompetenz: anwenden
quelle: nach Programmiertest 2020W, PT 10 (rearrange), drei statt vier Spalten
angabe: |
  Implementiere `int[][] schlange(int[][] input)`. Das Ergebnis hat in jeder Zeile genau **3** Spalten. Es nimmt alle
  Werte von `input` auf, Zeile für Zeile von links nach rechts gelesen. Zeilen mit geradem Index werden von **links**
  beginnend gefüllt, Zeilen mit ungeradem Index von **rechts** beginnend. Die Zeilenzahl ist die kleinste, bei der
  alle Werte Platz haben. Plätze, die frei bleiben, enthalten 0. Vorbedingung: `input != null`, `input.length > 0`,
  keine Zeile ist `null`.

  ```text
  schlange({{1, 2}, {3, 4, 5, 6}, {7}})   liefert {{1, 2, 3}, {6, 5, 4}, {7, 0, 0}}
  schlange({{1, 2, 3, 4, 5}})             liefert {{1, 2, 3}, {0, 5, 4}}
  schlange({{}})                          liefert {}
  ```
teile:
  - typ: code
    vorlage: |
      public class Schlange {
          public static int[][] schlange(int[][] input) {
              return null; // TODO
          }
      }
    musterloesung: |
      public class Schlange {
          public static int[][] schlange(int[][] input) {
              int anzahl = 0;
              for (int i = 0; i < input.length; i++) {
                  anzahl += input[i].length;
              }
              int[][] r = new int[(anzahl + 2) / 3][3];
              int k = 0;
              for (int i = 0; i < input.length; i++) {
                  for (int j = 0; j < input[i].length; j++) {
                      int zeile = k / 3;
                      int platz = k % 3;
                      if (zeile % 2 == 0) {
                          r[zeile][platz] = input[i][j];
                      } else {
                          r[zeile][2 - platz] = input[i][j];
                      }
                      k++;
                  }
              }
              return r;
          }
      }
    tests:
      - { aufruf: "schlange(new int[][]{{1, 2}, {3, 4, 5, 6}, {7}})", erwartet: "new int[][]{{1, 2, 3}, {6, 5, 4}, {7, 0, 0}}" }
      - { aufruf: "schlange(new int[][]{{1, 2, 3, 4, 5}})", erwartet: "new int[][]{{1, 2, 3}, {0, 5, 4}}", beschreibung: "unvollständige Zeile von rechts" }
      - { aufruf: "schlange(new int[][]{{}})", erwartet: "new int[][]{}", beschreibung: "keine Werte, keine Zeilen" }
      - { aufruf: "schlange(new int[][]{{4, 9, 2, 6, 8}, {}, {1, 3}})", erwartet: "new int[][]{{4, 9, 2}, {1, 8, 6}, {3, 0, 0}}", versteckt: true }
      - { aufruf: "schlange(new int[][]{{5, 5, 5}, {6, 6, 6}})", erwartet: "new int[][]{{5, 5, 5}, {6, 6, 6}}", versteckt: true }
    regeln: { keineHilfsmethoden: true, keineFelder: true, keineArrayKopie: true, erlaubteApi: ["Math.*"] }
    fehler:
      - { wert: 2, meldung: "In einer Zeile mit ungeradem Index landet der erste Wert ganz rechts, auf Platz 2. Der Platz ist `2 - (k % 3)`. Freie Plätze bleiben dann links übrig." }
      - { wert: 3, meldung: "Ohne Werte gibt es keine Zeile. Die Zeilenzahl ist `(anzahl + 2) / 3`, aufgerundet, und für `anzahl = 0` ist das 0." }
hinweise:
  - Zähle zuerst alle Werte. Die Zeilenzahl ist die Anzahl geteilt durch 3, aufgerundet. In ganzen Zahlen ist das `(anzahl + 2) / 3`.
  - Nummeriere die Werte mit einem Zähler `k`. Wert `k` gehört in Zeile `k / 3` an Platz `k % 3`, in ungeraden Zeilen gespiegelt an Platz `2 - k % 3`.
loesung: |
  **Ansatz:** Muster „linearisieren und neu verteilen“. Ein Zähler `k` läuft über alle Werte, und aus `k` folgen Zeile und Platz.
  ---
  Form: `anzahl` Werte brauchen `(anzahl + 2) / 3` Zeilen. Die `+ 2` sorgt fürs Aufrunden: 7 Werte ergeben `9 / 3 = 3` Zeilen.
  ---
  ```java
  int zeile = k / 3;
  int platz = k % 3;
  if (zeile % 2 == 0) {
      r[zeile][platz] = input[i][j];
  } else {
      r[zeile][2 - platz] = input[i][j];
  }
  k++;
  ```
  ---
  Freie Plätze behalten den Standardwert 0. In einer Zeile von rechts bleiben sie links frei.
  ---
  Probe: `{1, 2, 3, 4, 5}`. Werte 4 und 5 haben `k = 3` und `k = 4`, also Zeile 1, Plätze 2 und 1. Ergebnis `{0, 5, 4}`.
```

```aufgabe
id: pt-m1-code-gerade
titel: Erst die geraden, dann die ungeraden
niveau: 3
lernziel: 2
kompetenz: anwenden
quelle: nach den Probetests vom 26.01.2023 (generate, erst negative, dann positive Werte), mit gerade und ungerade
angabe: |
  Implementiere `int[][] geradeZuerst(int[][] input)`. Das Ergebnis hat dieselbe Form wie `input`. Jede Zeile enthält
  zuerst alle **geraden** Werte der Eingabezeile, danach alle **ungeraden**. Innerhalb der geraden und innerhalb der
  ungeraden Werte bleibt die Reihenfolge erhalten. Negative Zahlen sind gerade, wenn sie durch 2 teilbar sind.
  Vorbedingung: `input != null`, keine Zeile ist `null`.

  ```text
  geradeZuerst({{3, 4, 7, 2, 5}, {}, {1, 1}})   liefert {{4, 2, 3, 7, 5}, {}, {1, 1}}
  geradeZuerst({{-2, -3, 6}})                   liefert {{-2, 6, -3}}
  ```
teile:
  - typ: code
    vorlage: |
      public class Trennen {
          public static int[][] geradeZuerst(int[][] input) {
              return null; // TODO
          }
      }
    musterloesung: |
      public class Trennen {
          public static int[][] geradeZuerst(int[][] input) {
              int[][] r = new int[input.length][];
              for (int i = 0; i < input.length; i++) {
                  r[i] = new int[input[i].length];
                  int k = 0;
                  for (int j = 0; j < input[i].length; j++) {
                      if (input[i][j] % 2 == 0) {
                          r[i][k] = input[i][j];
                          k++;
                      }
                  }
                  for (int j = 0; j < input[i].length; j++) {
                      if (input[i][j] % 2 != 0) {
                          r[i][k] = input[i][j];
                          k++;
                      }
                  }
              }
              return r;
          }
      }
    tests:
      - { aufruf: "geradeZuerst(new int[][]{{3, 4, 7, 2, 5}, {}, {1, 1}})", erwartet: "new int[][]{{4, 2, 3, 7, 5}, {}, {1, 1}}" }
      - { aufruf: "geradeZuerst(new int[][]{{-2, -3, 6}})", erwartet: "new int[][]{{-2, 6, -3}}", beschreibung: "negative Werte" }
      - { vorher: "int[][] t = {{2, 4}, {1}}; int[][] r = geradeZuerst(t);", aufruf: "r[0] != t[0] && r[1] != t[1]", erwartet: "true", beschreibung: "keine Zeile geteilt" }
      - { vorher: "int[][] t = {{5, 2}}; geradeZuerst(t);", aufruf: "t", erwartet: "new int[][]{{5, 2}}", beschreibung: "Eingabe bleibt unverändert" }
      - { aufruf: "geradeZuerst(new int[][]{{0, 9, 8}, {-1, -5, 3}})", erwartet: "new int[][]{{0, 8, 9}, {-1, -5, 3}}", versteckt: true }
    regeln: { keineHilfsmethoden: true, keineFelder: true, keineArrayKopie: true, erlaubteApi: ["Math.*"] }
    fehler:
      - { wert: 2, meldung: "Für negative ungerade Zahlen ist der Rest `-3 % 2` gleich `-1`, nicht `1`. Prüfe auf ungerade mit `% 2 != 0` statt `% 2 == 1`." }
      - { wert: 4, meldung: "Die Eingabe darf sich nicht ändern. Sortiere nicht in `input`, sondern schreibe in eine neue Zeile." }
hinweise:
  - Die Form ist dieselbe wie bei `input`. Jede neue Zeile ist so lang wie ihre Eingabezeile.
  - Zwei Durchläufe pro Zeile. Der erste schreibt die geraden Werte, der zweite die ungeraden, beide mit demselben Schreibzähler `k`.
loesung: |
  **Ansatz:** Muster „filtern und umordnen“. Die Länge bleibt gleich, nur die Reihenfolge ändert sich. Ein Schreibzähler
  `k` merkt sich den nächsten freien Platz.
  ---
  Erster Durchlauf über die Zeile: jeden geraden Wert an Platz `k` schreiben und `k++`.
  ---
  Zweiter Durchlauf: jeden ungeraden Wert an Platz `k`. Weil `k` nicht zurückgesetzt wird, landen sie hinter den geraden.
  ---
  `% 2 != 0` erkennt auch negative ungerade Zahlen, denn in Java ist `-3 % 2` gleich `-1`.
  ---
  Probe: `{3, 4, 7, 2, 5}` ergibt erst `4, 2`, dann `3, 7, 5`. Die Reihenfolge innerhalb jeder Gruppe bleibt erhalten.
```

## Methode 2: ein Array an Ort und Stelle verändern

```aufgabe
id: pt-m2-check-parameter
titel: Welche Änderung sieht der Aufrufer?
niveau: 1
art: check
angabe: |
  Eine Methode bekommt den Parameter `int[][] a`. Welche Anweisung verändert das Array, das der Aufrufer übergeben hat?
  (Wiederholung: [12.6 Arrays als Parameter und Rückgabewert](/lernen/ep1/arrays/arrays-als-parameter-und-rueckgabewert))
teile:
  - typ: auswahl
    optionen:
      - '`a[0] = new int[]{1};`'
      - '`a = new int[][]{{1}};`'
      - '`int[] z = a[0]; z = new int[]{1};`'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Hier zeigt nur die lokale Variable `a` auf ein neues Array. Das Array des Aufrufers bleibt unberührt.
      - wert: 2
        meldung: '`z` ist eine lokale Variable. Sie zeigt danach auf eine neue Zeile, aber im Array `a` steht weiter die alte Zeile.'
hinweise:
  - Geändert wird das Array des Aufrufers nur, wenn auf der linken Seite ein Platz **in** diesem Array steht.
loesung: |
  `a[0] = …` schreibt in Platz 0 des übergebenen Arrays. Diese Änderung sieht der Aufrufer.
  ---
  In den anderen Optionen bekommt nur eine lokale Variable einen neuen Verweis.
```

Die zweite Methode ist fast immer eine `void`-Methode, die das übergebene Array **an Ort und Stelle** verändert. Das
ist das **Muster M2**. „An Ort und Stelle“ heißt: Es entsteht kein Ergebnis-Array, das zurückgegeben wird. Nach dem
Aufruf hat sich das Array des Aufrufers selbst verändert. Das kennst du aus
[14.6 Arrays an Ort und Stelle verändern (Muster M2)](/lernen/ep1/arrays-2d/arrays-an-ort-und-stelle-veraendern-muster-m2).

Eine M2-Methode kann ein zweidimensionales Array auf drei Arten verändern:

1. **Werte überschreiben:** `a[i][j] = 0;` Die Zeilen bleiben dieselben Arrays, nur ihr Inhalt ändert sich.
2. **Eine Zeile ersetzen:** `a[i] = neu;` Nötig, wenn eine Zeile länger oder kürzer werden soll. Eine Zeile kann nicht
   wachsen, also legst du eine neue an, kopierst und hängst sie an Platz `i`.
3. **Zeilenverweise tauschen:** `int[] h = a[i]; a[i] = a[k]; a[k] = h;` Nötig, wenn ganze Zeilen ihre Plätze tauschen.
   Dabei wird kein einziger Wert kopiert.

In den Tests kamen diese Muster vor. Zeilen in einem Bereich umdrehen (`reverseBetween`, 2022), jede Zeile in sich
umdrehen (`reorder`, 2023) und ein Element in die nächste Zeile verschieben (`rasp`, 2022). Außerdem eine Spalte
entfernen (`removeEntry`, Februar 2022). Dazu kamen Werte nach rechts schieben mit Verlängerung (`shift`, 2022),
Stellen auf 0 setzen (`mask`, 2021), Zeilen markieren (`label`, 2021) und mit vorgegebenen Werten füllen (`fill`, 2023).
Bei fast allen kommt ein Zugriff vor, der hinter ein Zeilenende greifen könnte. Die Randprüfung dafür kennst du aus
[15.1 Nachbarn im Raster: Richtungen und Randprüfung](/lernen/ep1/arrays-anwendungen/nachbarn-im-raster-richtungen-und-randpruefung).

:::beispiel[Zeilen in einem Bereich umdrehen]
Gesucht ist `void dreheZeilen(int[][] a, int i1, int i2)`. Die Methode dreht die Reihenfolge der Zeilen von Index
`i1` bis Index `i2` um, beide inklusive. Das gilt auch, wenn `i1 > i2`. Vorbedingung: `i1` und `i2` sind gültige
Zeilenindizes.

Für `a = {{1}, {2, 2}, {3}, {4, 4}, {5}}` und den Aufruf `dreheZeilen(a, 3, 1)` drehen sich die Zeilen 1, 2 und 3 um.
Danach ist `a = {{1}, {4, 4}, {3}, {2, 2}, {5}}`.

```java
public static void dreheZeilen(int[][] a, int i1, int i2) {
    int l = Math.min(i1, i2);
    int r = Math.max(i1, i2);
    while (l < r) {
        int[] h = a[l];      // Verweis auf Zeile l merken
        a[l] = a[r];         // Zeile r an Platz l
        a[r] = h;            // gemerkte Zeile an Platz r
        l++;
        r--;
    }
}
```

- Getauscht werden **Verweise** auf Zeilen. Darum kann `h` vom Typ `int[]` sein, und die Zeilenlängen spielen keine Rolle.
- `Math.min` und `Math.max` erledigen den Fall `i1 > i2`. Bei `i1 == i2` läuft die Schleife nie.
- Ablauf für `(3, 1)`: `l = 1`, `r = 3`. Die Zeilen 1 und 3 tauschen. Danach `l = 2`, `r = 2`, die Schleife endet. Zeile 2
  bleibt in der Mitte stehen.
:::

:::achtung[Das Ergebnis dem Parameter zuweisen]
Jemand baut in einer M2-Methode ein neues Array `r` auf und schreibt am Ende `a = r;`. In der Methode zeigt `a`
danach auf das neue Array, im Aufrufer aber nicht. Ruft `main` die Methode für `test1 = {{1}, {2, 2}}` auf und gibt
`test1` aus, steht dort unverändert `[[1], [2, 2]]`. Die ganze Arbeit ist verloren. In M2 schreibst du immer **in**
das übergebene Array, also in `a[i]` oder `a[i][j]`.
:::

:::achtung[Den ganzen Bereich durchlaufen statt nur bis zur Mitte]
Jemand dreht die Zeilen mit einer `for`-Schleife über den ganzen Bereich um:

```java
for (int k = l; k <= r; k++) {
    int[] h = a[k];
    a[k] = a[l + r - k];
    a[l + r - k] = h;
}
```

Für den Bereich 1 bis 3 tauscht `k = 1` die Zeilen 1 und 3. Dann tauscht `k = 2` die Zeile 2 mit sich selbst. Zuletzt
tauscht `k = 3` die Zeilen 3 und 1 **zurück**. Am Ende ist alles wie vorher. Jedes Paar darf nur einmal getauscht werden. Die
Schleife muss in der Mitte aufhören, zum Beispiel mit der Bedingung `l < r` und zwei wandernden Grenzen.
:::

```aufgabe
id: pt-m2-gefuehrt-drehen
titel: Zwei Aufrufe auf demselben Array
niveau: 1
lernziel: 3
kompetenz: anwenden
quelle: nach Programmiertest 27.01.2022, Gruppe A (reverseBetween), neue Testdaten
angabe: |
  `dreheZeilen` aus dem Beispiel „Zeilen in einem Bereich umdrehen“ ist richtig implementiert. Was gibt das Programm
  aus? Löse die Aufgabe zuerst geführt.
teile:
  - typ: ausgabe
    code: |
      import java.util.Arrays;

      public class Drehen {
          public static void dreheZeilen(int[][] a, int i1, int i2) {
              int l = Math.min(i1, i2);
              int r = Math.max(i1, i2);
              while (l < r) {
                  int[] h = a[l];
                  a[l] = a[r];
                  a[r] = h;
                  l++;
                  r--;
              }
          }

          public static void main(String[] args) {
              int[][] t = {{7}, {8, 8}, {9}, {0, 0, 0}};
              dreheZeilen(t, 3, 0);
              System.out.println(Arrays.deepToString(t));
              dreheZeilen(t, 2, 2);
              System.out.println(Arrays.deepToString(t));
          }
      }
    loesung: |
      [[0, 0, 0], [9], [8, 8], [7]]
      [[0, 0, 0], [9], [8, 8], [7]]
    fehler:
      - wert: "[[7], [8, 8], [9], [0, 0, 0]]\n[[7], [8, 8], [9], [0, 0, 0]]"
        meldung: Auch bei `i1 > i2` dreht sich der Bereich um. `Math.min` und `Math.max` machen daraus den Bereich 0 bis 3.
      - wert: "[[0, 0, 0], [9], [8, 8], [7]]\n[[0, 0, 0], [8, 8], [9], [7]]"
        meldung: Im zweiten Aufruf sind beide Indizes 2. Ein Bereich aus einer Zeile bleibt, wie er ist.
gefuehrt:
  - text: Welche Werte haben `l` und `r` zu Beginn des ersten Aufrufs?
    teil:
      typ: auswahl
      optionen: ['`l = 0`, `r = 3`', '`l = 3`, `r = 0`', '`l = 0`, `r = 4`']
      richtig: [0]
    erklaerung: '`l = Math.min(3, 0) = 0` und `r = Math.max(3, 0) = 3`.'
  - text: Wie oft wird im ersten Aufruf getauscht?
    teil: { typ: zahl, loesung: "2" }
    erklaerung: 'Die Paare (0, 3) und (1, 2). Danach ist `l = 2`, `r = 1`, und `l < r` ist falsch.'
  - text: Wie oft wird im zweiten Aufruf getauscht?
    teil: { typ: zahl, loesung: "0" }
    erklaerung: Bei `l = r = 2` ist `l < r` sofort falsch.
hinweise:
  - Arbeite die Tauschpaare von außen nach innen ab.
loesung: |
  **Ansatz:** Bereich bestimmen und Paare von außen nach innen tauschen.
  ---
  Erster Aufruf: Bereich 0 bis 3, Paare (0, 3) und (1, 2). Ergebnis `[[0, 0, 0], [9], [8, 8], [7]]`.
  ---
  Zweiter Aufruf: Bereich aus einer Zeile, nichts ändert sich. Dieselbe Ausgabe noch einmal.
```

```aufgabe
id: pt-m2-ausgabe-abgeben
titel: Das letzte Element wandert nach unten
niveau: 1
lernziel: 3
kompetenz: anwenden
quelle: nach Programmiertest 27.01.2022, Gruppen 16A und 16B (rasp, move), neue Testdaten
angabe: |
  `abgeben(a)` nimmt das letzte Element jeder Zeile mit **geradem** Index weg und hängt es an das Ende der Zeile
  darunter. Bei ungerader Zeilenzahl bleibt die letzte Zeile unverändert. Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      import java.util.Arrays;

      public class Abgeben {
          public static void abgeben(int[][] a) {
              for (int i = 0; i + 1 < a.length; i += 2) {
                  int n = a[i].length;
                  int letztes = a[i][n - 1];
                  int[] oben = new int[n - 1];
                  for (int j = 0; j < n - 1; j++) {
                      oben[j] = a[i][j];
                  }
                  int[] unten = new int[a[i + 1].length + 1];
                  for (int j = 0; j < a[i + 1].length; j++) {
                      unten[j] = a[i + 1][j];
                  }
                  unten[unten.length - 1] = letztes;
                  a[i] = oben;
                  a[i + 1] = unten;
              }
          }

          public static void main(String[] args) {
              int[][] t = {{1, 2}, {3}, {4, 5, 6}, {7}, {8}};
              abgeben(t);
              System.out.println(Arrays.deepToString(t));
          }
      }
    loesung: |
      [[1], [3, 2], [4, 5], [7, 6], [8]]
    fehler:
      - wert: "[[1], [3], [4, 5, 6], [7], [8, 2]]"
        meldung: Die Schleife springt in Zweierschritten. Es gibt nur die Paare (0, 1) und (2, 3), jede Zeile gehört zu höchstens einem Paar. Mit `i++` würde die 2 bis ganz nach unten weitergereicht.
      - wert: "[[1], [2, 3], [4, 5], [6, 7], [8]]"
        meldung: Das Element wird **hinten** an die untere Zeile angehängt, nicht vorne eingefügt.
hinweise:
  - Paare sind die Zeilen (0, 1) und (2, 3). Die Zeile mit Index 4 bleibt allein.
loesung: |
  **Ansatz:** Für jedes Paar das letzte Element der oberen Zeile nach unten hinten verschieben. Beide Zeilen werden ersetzt.
  ---
  Paar (0, 1): `[1, 2]` gibt die 2 ab, `[3]` wird `[3, 2]`. Paar (2, 3): `[4, 5, 6]` gibt die 6 ab, `[7]` wird `[7, 6]`.
  ---
  Die Zeile `[8]` hat keinen Partner. Ergebnis `[[1], [3, 2], [4, 5], [7, 6], [8]]`.
```

:::beispiel[Nach rechts schieben, manchmal mit Verlängerung]
Gesucht ist `void schiebeRechts(int[][] a)`. In jeder Zeile rücken alle Einträge um eine Position nach rechts, und vorne
kommt eine 0 dazu. Steht am Ende der Zeile eine 0, fällt sie weg, und die Zeile behält ihre Länge. Steht am Ende etwas
anderes, wird die Zeile durch eine um 1 längere Zeile ersetzt. Vorbedingung: keine Zeile ist leer.

Für `a = {{3, 0}, {1, 2}, {0}}` entsteht `{{0, 3}, {0, 1, 2}, {0}}`.

```java
public static void schiebeRechts(int[][] a) {
    for (int i = 0; i < a.length; i++) {
        int n = a[i].length;
        if (a[i][n - 1] == 0) {
            for (int j = n - 1; j > 0; j--) {   // von hinten nach vorne schieben
                a[i][j] = a[i][j - 1];
            }
            a[i][0] = 0;                         // vorne die neue 0
        } else {
            int[] neu = new int[n + 1];          // eine längere Zeile
            for (int j = 0; j < n; j++) {
                neu[j + 1] = a[i][j];            // um 1 versetzt kopieren
            }
            a[i] = neu;                          // Zeile im Array ersetzen
        }
    }
}
```

- Fall 1 überschreibt Werte in derselben Zeile. Die Schleife läuft **von hinten nach vorne**. Würde sie vorne beginnen,
  überschriebe `a[i][1] = a[i][0]` den Wert an Platz 1, bevor er weitergeschoben ist.
- Fall 2 ersetzt die Zeile. `neu[0]` ist schon 0, der Standardwert.
- Probe mit `{1, 2}`: Am Ende steht 2, also Fall 2. Die neue Zeile ist `{0, 1, 2}`.
:::

```aufgabe
id: pt-m2-trace-schieben
titel: Von hinten nach vorne schieben
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  `schiebeRechts` aus dem Beispiel „Nach rechts schieben, manchmal mit Verlängerung“ bearbeitet die Zeile
  `z = {4, 7, 2, 0}`. Am Ende steht 0, also verschiebt die Schleife innerhalb der Zeile. Trage den Inhalt der Zeile
  nach jedem Schritt ein. Die erste Zeile ist vorgegeben.
teile:
  - typ: trace
    spalten: ["z[0]", "z[1]", "z[2]", "z[3]"]
    zeilen: [Start, nach j = 3, nach j = 2, nach j = 1, "nach z[0] = 0"]
    vorgabe: 1
    loesung: [[4, 7, 2, 0], [4, 7, 2, 2], [4, 7, 7, 2], [4, 4, 7, 2], [0, 4, 7, 2]]
    fehler:
      - wert: ["4", "7", "2", "0", "4", "4", "2", "0", "4", "4", "4", "0", "4", "4", "4", "4", "0", "4", "4", "4"]
        meldung: So sähe es aus, wenn die Schleife vorne beginnt. Hier beginnt sie aber bei `j = 3` und läuft rückwärts. Jeder Schritt kopiert `z[j - 1]` nach `z[j]`.
hinweise:
  - 'Bei jedem Schritt gilt `z[j] = z[j - 1]`. Nur ein Platz ändert sich pro Schritt.'
loesung: |
  **Ansatz:** Jeder Schritt überschreibt genau einen Platz mit seinem linken Nachbarn.
  ---
  `j = 3`: `z[3] = z[2] = 2`. `j = 2`: `z[2] = z[1] = 7`. `j = 1`: `z[1] = z[0] = 4`. Zum Schluss `z[0] = 0`.
  ---
  Ergebnis `{0, 4, 7, 2}`. Die alte 0 am Ende ist überschrieben, die Länge bleibt 4.
```

```aufgabe
id: pt-m2-code-hinten
titel: Ein Element von hinten gezählt entfernen
niveau: 2
lernziel: 3
kompetenz: anwenden
quelle: nach Programmiertest 10.02.2022, Gruppen 10A und 10B (removeEntry, clear), Position vom Zeilenende gezählt
angabe: |
  Implementiere `void entferneVonHinten(int[][] a, int k)`. Die Methode entfernt aus jeder Zeile von `a` das Element,
  das an Position `k` **vom Zeilenende** gezählt steht. Bei `k = 0` ist das das letzte Element, bei `k = 1` das
  vorletzte. Ist eine Zeile dafür zu kurz, bleibt sie unverändert. Vorbedingung: `a != null`, keine Zeile ist `null`,
  `k >= 0`.

  ```text
  a = {{1, 2, 3, 4}, {5}, {6, 7}, {8, 9, 10}}
  entferneVonHinten(a, 1)   ändert a zu {{1, 2, 4}, {5}, {7}, {8, 10}}
  ```
teile:
  - typ: code
    vorlage: |
      public class Hinten {
          public static void entferneVonHinten(int[][] a, int k) {
              // TODO
          }
      }
    musterloesung: |
      public class Hinten {
          public static void entferneVonHinten(int[][] a, int k) {
              for (int i = 0; i < a.length; i++) {
                  int n = a[i].length;
                  if (k < n) {
                      int weg = n - 1 - k;
                      int[] neu = new int[n - 1];
                      int z = 0;
                      for (int j = 0; j < n; j++) {
                          if (j != weg) {
                              neu[z] = a[i][j];
                              z++;
                          }
                      }
                      a[i] = neu;
                  }
              }
          }
      }
    tests:
      - { vorher: "int[][] a = {{1, 2, 3, 4}, {5}, {6, 7}, {8, 9, 10}};", aufruf: "entferneVonHinten(a, 1)", ergebnis: "a", erwartet: "new int[][]{{1, 2, 4}, {5}, {7}, {8, 10}}" }
      - { vorher: "int[][] a = {{3, 1}, {}, {2}};", aufruf: "entferneVonHinten(a, 0)", ergebnis: "a", erwartet: "new int[][]{{3}, {}, {}}", beschreibung: "k = 0 und eine leere Zeile" }
      - { vorher: "int[][] a = {{4, 5, 6}};", aufruf: "entferneVonHinten(a, 2)", ergebnis: "a", erwartet: "new int[][]{{5, 6}}", beschreibung: "das erste Element" }
      - { vorher: "int[][] a = {{1, 2, 3}, {1, 2, 3, 4}};", aufruf: "entferneVonHinten(a, 3)", ergebnis: "a", erwartet: "new int[][]{{1, 2, 3}, {2, 3, 4}}", versteckt: true }
    regeln: { keineHilfsmethoden: true, keineFelder: true, keineArrayKopie: true, erlaubteApi: ["Math.*"] }
    fehler:
      - { wert: 1, meldung: "Vom Ende gezählt steht Position `k` am Index `n - 1 - k`. Für eine Zeile der Länge 4 und `k = 1` ist das Index 2." }
      - { wert: 2, meldung: "Eine Zeile mit `n <= k` ist zu kurz. Für sie darfst du nichts ändern, sonst entsteht ein negativer Index oder eine negative Länge." }
hinweise:
  - Für eine Zeile der Länge `n` steht das gesuchte Element am Index `n - 1 - k`. Es existiert nur, wenn `k < n` gilt.
  - Lege eine Zeile der Länge `n - 1` an, kopiere alle Elemente außer dem einen und ersetze damit `a[i]`.
loesung: |
  **Ansatz:** M2 mit Zeilenersatz. Eine Zeile kann nicht schrumpfen, also wird sie durch eine kürzere ersetzt.
  ---
  Index umrechnen: Vom Ende gezählt ist Position `k` der Index `weg = n - 1 - k`. Nur für `k < n` existiert er.
  ---
  ```java
  int[] neu = new int[n - 1];
  int z = 0;
  for (int j = 0; j < n; j++) {
      if (j != weg) {
          neu[z] = a[i][j];
          z++;
      }
  }
  a[i] = neu;
  ```
  ---
  Zwei Zähler: `j` liest jeden alten Platz, `z` schreibt nur, wenn der Platz nicht entfernt wird.
  ---
  Probe: `{8, 9, 10}` mit `k = 1` hat `weg = 1`. Übrig bleibt `{8, 10}`.
```

```aufgabe
id: pt-m2-code-wandern
titel: Das erste Element wandert nach oben
niveau: 2
lernziel: 3
kompetenz: anwenden
quelle: nach Programmiertest 27.01.2022, Gruppen 16A und 16B (rasp, move), Richtung umgekehrt
angabe: |
  Implementiere `void wandern(int[][] a)`. Für jedes Zeilenpaar mit den Indizes `2m` und `2m + 1` wird das **erste**
  Element der unteren Zeile entfernt und **hinten** an die obere Zeile angehängt. Bei ungerader Zeilenzahl bleibt die
  letzte Zeile unverändert. Vorbedingung: `a != null`, keine Zeile ist `null`, jede Zeile mit ungeradem Index hat
  mindestens ein Element.

  ```text
  a = {{1, 2}, {3, 4, 5}, {6}, {7, 8}, {9}}
  wandern(a)   ändert a zu {{1, 2, 3}, {4, 5}, {6, 7}, {8}, {9}}
  ```
teile:
  - typ: code
    vorlage: |
      public class Wandern {
          public static void wandern(int[][] a) {
              // TODO
          }
      }
    musterloesung: |
      public class Wandern {
          public static void wandern(int[][] a) {
              for (int i = 1; i < a.length; i += 2) {
                  int[] oben = a[i - 1];
                  int[] unten = a[i];
                  int[] neuOben = new int[oben.length + 1];
                  for (int j = 0; j < oben.length; j++) {
                      neuOben[j] = oben[j];
                  }
                  neuOben[oben.length] = unten[0];
                  int[] neuUnten = new int[unten.length - 1];
                  for (int j = 1; j < unten.length; j++) {
                      neuUnten[j - 1] = unten[j];
                  }
                  a[i - 1] = neuOben;
                  a[i] = neuUnten;
              }
          }
      }
    tests:
      - { vorher: "int[][] a = {{1, 2}, {3, 4, 5}, {6}, {7, 8}, {9}};", aufruf: "wandern(a)", ergebnis: "a", erwartet: "new int[][]{{1, 2, 3}, {4, 5}, {6, 7}, {8}, {9}}" }
      - { vorher: "int[][] a = {{}, {5}};", aufruf: "wandern(a)", ergebnis: "a", erwartet: "new int[][]{{5}, {}}", beschreibung: "obere Zeile leer, untere wird leer" }
      - { vorher: "int[][] a = {{2}};", aufruf: "wandern(a)", ergebnis: "a", erwartet: "new int[][]{{2}}", beschreibung: "eine einzige Zeile" }
      - { vorher: "int[][] a = {{1}, {2}, {3}, {4}};", aufruf: "wandern(a)", ergebnis: "a", erwartet: "new int[][]{{1, 2}, {}, {3, 4}, {}}", versteckt: true }
    regeln: { keineHilfsmethoden: true, keineFelder: true, keineArrayKopie: true, erlaubteApi: ["Math.*"] }
    fehler:
      - { wert: 1, meldung: "Die Paare sind (0, 1) und (2, 3). Die Zeile mit Index 4 bleibt allein. Lass die Schleife bei `i = 1` beginnen und in Zweierschritten laufen." }
      - { wert: 3, meldung: "Bei nur einer Zeile gibt es kein Paar. Prüfe, ob deine Schleife auf eine Zeile `a[1]` zugreift, die es nicht gibt." }
hinweise:
  - Lass `i` über die unteren Zeilen der Paare laufen, also `i = 1, 3, 5, …`, solange `i < a.length`.
  - Beide Zeilen eines Paars ändern ihre Länge. Lege für beide neue Zeilen an und ersetze `a[i - 1]` und `a[i]`.
loesung: |
  **Ansatz:** M2 mit Zeilenersatz für beide Zeilen eines Paars. Die obere wird um 1 länger, die untere um 1 kürzer.
  ---
  Schleife über die unteren Zeilen: `for (int i = 1; i < a.length; i += 2)`. Eine einzelne letzte Zeile wird nie erreicht.
  ---
  Obere Zeile: alte Werte kopieren und `unten[0]` hinten anhängen. Untere Zeile: ab Index 1 um einen Platz nach vorne kopieren.
  ---
  ```java
  a[i - 1] = neuOben;
  a[i] = neuUnten;
  ```
  ---
  Probe: Paar `{6}` und `{7, 8}` wird zu `{6, 7}` und `{8}`.
```

```aufgabe
id: pt-m2-code-nullen
titel: Ausgewählte Stellen auf 0 setzen
niveau: 2
lernziel: 3
kompetenz: anwenden
quelle: nach Programmiertest 28.01.2021 (mask), neue Testdaten
angabe: |
  Implementiere `void nullen(int[][] a, int[] zeilen, int[] spalten)`. Die Methode setzt jeden Eintrag von `a` auf 0,
  dessen Zeilenindex in `zeilen` **und** dessen Spaltenindex in `spalten` vorkommt. Eine Spalte, die es in einer Zeile
  nicht gibt, wird in dieser Zeile übersprungen. Vorbedingung: `a != null`, keine Zeile ist `null`, alle Werte in
  `zeilen` sind gültige Zeilenindizes, alle Werte in `spalten` sind `>= 0`.

  ```text
  a = {{1, 2, 3}, {4, 5}, {6, 7, 8, 9}, {1}}
  nullen(a, new int[]{0, 2, 3}, new int[]{1, 3})   ändert a zu {{1, 0, 3}, {4, 5}, {6, 0, 8, 0}, {1}}
  ```
teile:
  - typ: code
    vorlage: |
      public class Nullen {
          public static void nullen(int[][] a, int[] zeilen, int[] spalten) {
              // TODO
          }
      }
    musterloesung: |
      public class Nullen {
          public static void nullen(int[][] a, int[] zeilen, int[] spalten) {
              for (int z = 0; z < zeilen.length; z++) {
                  int i = zeilen[z];
                  for (int s = 0; s < spalten.length; s++) {
                      int j = spalten[s];
                      if (j < a[i].length) {
                          a[i][j] = 0;
                      }
                  }
              }
          }
      }
    tests:
      - { vorher: "int[][] a = {{1, 2, 3}, {4, 5}, {6, 7, 8, 9}, {1}};", aufruf: "nullen(a, new int[]{0, 2, 3}, new int[]{1, 3})", ergebnis: "a", erwartet: "new int[][]{{1, 0, 3}, {4, 5}, {6, 0, 8, 0}, {1}}" }
      - { vorher: "int[][] a = {{5, 5}, {6}};", aufruf: "nullen(a, new int[]{}, new int[]{0})", ergebnis: "a", erwartet: "new int[][]{{5, 5}, {6}}", beschreibung: "keine Zeile ausgewählt" }
      - { vorher: "int[][] a = {{9, 8}, {}};", aufruf: "nullen(a, new int[]{0, 1}, new int[]{0, 1, 2})", ergebnis: "a", erwartet: "new int[][]{{0, 0}, {}}", beschreibung: "Spalten außerhalb und eine leere Zeile" }
      - { vorher: "int[][] a = {{1, 1, 1}, {2, 2, 2}};", aufruf: "nullen(a, new int[]{1}, new int[]{0, 2})", ergebnis: "a", erwartet: "new int[][]{{1, 1, 1}, {0, 2, 0}}", versteckt: true }
    regeln: { keineHilfsmethoden: true, keineFelder: true, keineArrayKopie: true, erlaubteApi: ["Math.*"] }
    fehler:
      - { wert: 1, meldung: "Nur Einträge, deren Zeile **und** Spalte ausgewählt sind, werden 0. Durchlaufe die Paare aus `zeilen` und `spalten`, nicht das ganze Array." }
      - { wert: 3, meldung: "Spaltenindex 2 gibt es in `{9, 8}` nicht, und die leere Zeile hat gar keinen. Prüfe vor dem Schreiben `j < a[i].length`." }
hinweise:
  - Zwei verschachtelte Schleifen über `zeilen` und `spalten` liefern alle ausgewählten Paare `(i, j)`.
  - Vor dem Schreiben prüfen, ob die Spalte `j` in Zeile `i` existiert.
loesung: |
  **Ansatz:** M2 mit Überschreiben. Die Zeilen bleiben dieselben Arrays, nur einzelne Werte werden 0.
  ---
  Jedes Paar aus einem Zeilenindex `i` und einem Spaltenindex `j` ist ein Kandidat.
  ---
  ```java
  if (j < a[i].length) {
      a[i][j] = 0;
  }
  ```
  ---
  Die Abfrage schützt vor Spalten, die es in einer kurzen Zeile nicht gibt.
  ---
  Probe: Zeile 2 mit Spalten 1 und 3 ergibt `{6, 0, 8, 0}`. Zeile 3 hat nur Spalte 0 und bleibt `{1}`.
```

```reflexion
frage: Warum ersetzt man eine Zeile durch eine neue, wenn sie länger oder kürzer werden soll, statt sie direkt zu verändern?
antwort: |
  Ein Array hat in Java eine feste Länge, die beim Anlegen mit `new` entsteht. Eine Zeile eines zweidimensionalen Arrays
  ist selbst ein Array und kann darum weder wachsen noch schrumpfen. Ich lege also eine neue Zeile mit der gewünschten
  Länge an, kopiere die Werte hinein und speichere den Verweis an derselben Stelle `a[i]`. Weil das äußere Array dem
  Aufrufer gehört, sieht er danach die neue Zeile. Ein bloßes Umschreiben der Werte reicht nur, wenn die Länge gleich
  bleibt.
```

```aufgabe
id: pt-m2-code-doppel
titel: Wiederholte Zeilen markieren
niveau: 3
lernziel: 3
kompetenz: anwenden
quelle: nach Programmiertest 2020W, PT 10 (label), Vergleich mit der Zeile davor statt danach
angabe: |
  Implementiere `void markiereNachDoppel(int[][] a)`. Eine Zeile wird mit lauter `-1` überschrieben, wenn die Zeile
  **davor** genauso lang ist und dieselben Werte in derselben Reihenfolge hat. Verglichen wird immer mit dem
  **ursprünglichen** Inhalt der Zeile davor, nicht mit einer schon überschriebenen Zeile. Die Länge jeder Zeile
  bleibt gleich. Vorbedingung: `a != null`, keine Zeile ist `null`.

  ```text
  a = {{7, 1}, {7, 1}, {7, 1}, {3}, {3}}
  markiereNachDoppel(a)   ändert a zu {{7, 1}, {-1, -1}, {-1, -1}, {3}, {-1}}
  ```
teile:
  - typ: code
    vorlage: |
      public class Doppel {
          public static void markiereNachDoppel(int[][] a) {
              // TODO
          }
      }
    musterloesung: |
      public class Doppel {
          public static void markiereNachDoppel(int[][] a) {
              for (int i = a.length - 1; i >= 1; i--) {
                  boolean gleich = a[i].length == a[i - 1].length;
                  for (int j = 0; gleich && j < a[i].length; j++) {
                      if (a[i][j] != a[i - 1][j]) {
                          gleich = false;
                      }
                  }
                  if (gleich) {
                      for (int j = 0; j < a[i].length; j++) {
                          a[i][j] = -1;
                      }
                  }
              }
          }
      }
    tests:
      - { vorher: "int[][] a = {{7, 1}, {7, 1}, {7, 1}, {3}, {3}};", aufruf: "markiereNachDoppel(a)", ergebnis: "a", erwartet: "new int[][]{{7, 1}, {-1, -1}, {-1, -1}, {3}, {-1}}" }
      - { vorher: "int[][] a = {{5}, {6}, {5, 6}};", aufruf: "markiereNachDoppel(a)", ergebnis: "a", erwartet: "new int[][]{{5}, {6}, {5, 6}}", beschreibung: "keine Wiederholung" }
      - { vorher: "int[][] a = {{3, 3}, {3}};", aufruf: "markiereNachDoppel(a)", ergebnis: "a", erwartet: "new int[][]{{3, 3}, {3}}", beschreibung: "gleiche Werte, andere Länge" }
      - { vorher: "int[][] a = {{0, 0}, {0, 0}, {0, 0}, {0, 0}};", aufruf: "markiereNachDoppel(a)", ergebnis: "a", erwartet: "new int[][]{{0, 0}, {-1, -1}, {-1, -1}, {-1, -1}}", versteckt: true }
      - { vorher: "int[][] a = {{}, {}};", aufruf: "markiereNachDoppel(a)", ergebnis: "a", erwartet: "new int[][]{{}, {}}", versteckt: true }
    regeln: { keineHilfsmethoden: true, keineFelder: true, keineArrayKopie: true, erlaubteApi: ["Math.*"] }
    fehler:
      - { wert: 1, meldung: "Die dritte Zeile `{7, 1}` muss auch `-1` werden. Läuft deine Schleife von oben, vergleicht sie die dritte Zeile mit der schon überschriebenen zweiten. Laufe von unten nach oben." }
      - { wert: 3, meldung: "Zwei Zeilen sind nur gleich, wenn auch ihre Längen gleich sind. Vergleiche zuerst `a[i].length` mit `a[i - 1].length`." }
hinweise:
  - Eine Zeile wird nur durch den Vergleich mit ihrer oberen Nachbarin verändert. Welche Reihenfolge stellt sicher, dass die obere Nachbarin noch unverändert ist?
  - 'Laufe mit `i` von `a.length - 1` bis 1 rückwärts. Vergleiche zuerst die Längen, dann Element für Element.'
loesung: |
  **Ansatz:** M2 mit Überschreiben. Die Falle ist die Reihenfolge. Eine überschriebene Zeile darf nie als Vergleich dienen.
  ---
  Von oben nach unten ginge es schief. Zeile 1 würde `{-1, -1}`, und Zeile 2 würde dann mit `{-1, -1}` verglichen, also nicht markiert.
  ---
  Von unten nach oben wird Zeile `i` nur mit Zeile `i - 1` verglichen. Die ist zu diesem Zeitpunkt noch nicht bearbeitet.
  ---
  ```java
  for (int i = a.length - 1; i >= 1; i--) {
      boolean gleich = a[i].length == a[i - 1].length;
      for (int j = 0; gleich && j < a[i].length; j++) {
          if (a[i][j] != a[i - 1][j]) {
              gleich = false;
          }
      }
      if (gleich) {
          for (int j = 0; j < a[i].length; j++) {
              a[i][j] = -1;
          }
      }
  }
  ```
  ---
  Probe: Zeile 4 `{3}` gleicht Zeile 3, Zeile 2 gleicht Zeile 1, Zeile 1 gleicht Zeile 0. Zeile 3 `{3}` hat eine andere Länge als Zeile 2.
```

```aufgabe
id: pt-m2-code-verteilen
titel: Werte nach Häufigkeiten verteilen
niveau: 3
lernziel: 3
kompetenz: anwenden
quelle: nach den Probetests vom 26.01.2023 (fill), neue Testdaten
angabe: |
  Implementiere `void verteile(int[][] ziel, int[] werte, int[] wieOft)`. Die Methode überschreibt die Einträge von
  `ziel` Zeile für Zeile von links nach rechts. Zuerst kommt `werte[0]` genau `wieOft[0]`-mal, dann `werte[1]` genau
  `wieOft[1]`-mal und so weiter. `werte` und `wieOft` dürfen nicht verändert werden. Vorbedingung: `ziel != null`, keine
  Zeile ist `null`, `werte.length == wieOft.length`, alle Einträge in `wieOft` sind `> 0`, und ihre Summe ist die
  Anzahl der Einträge von `ziel`.

  ```text
  ziel = {{0, 0, 0}, {0}, {0, 0}}
  verteile(ziel, new int[]{7, 1, 4}, new int[]{2, 3, 1})   ändert ziel zu {{7, 7, 1}, {1}, {1, 4}}
  ```
teile:
  - typ: code
    vorlage: |
      public class Verteilen {
          public static void verteile(int[][] ziel, int[] werte, int[] wieOft) {
              // TODO
          }
      }
    musterloesung: |
      public class Verteilen {
          public static void verteile(int[][] ziel, int[] werte, int[] wieOft) {
              int w = 0;
              int schonGeschrieben = 0;
              for (int i = 0; i < ziel.length; i++) {
                  for (int j = 0; j < ziel[i].length; j++) {
                      if (schonGeschrieben == wieOft[w]) {
                          w++;
                          schonGeschrieben = 0;
                      }
                      ziel[i][j] = werte[w];
                      schonGeschrieben++;
                  }
              }
          }
      }
    tests:
      - { vorher: "int[][] z = {{0, 0, 0}, {0}, {0, 0}};", aufruf: "verteile(z, new int[]{7, 1, 4}, new int[]{2, 3, 1})", ergebnis: "z", erwartet: "new int[][]{{7, 7, 1}, {1}, {1, 4}}" }
      - { vorher: "int[][] z = {{0, 0}, {}, {0}};", aufruf: "verteile(z, new int[]{5, 6}, new int[]{1, 2})", ergebnis: "z", erwartet: "new int[][]{{5, 6}, {}, {6}}", beschreibung: "mit einer leeren Zeile" }
      - { vorher: "int[][] z = {{1, 1}}; int[] h = {2};", aufruf: "verteile(z, new int[]{9}, h)", ergebnis: "h", erwartet: "new int[]{2}", beschreibung: "wieOft bleibt unverändert" }
      - { vorher: "int[][] z = {{0}, {0, 0, 0}, {0, 0}};", aufruf: "verteile(z, new int[]{-1, 3, 8}, new int[]{4, 1, 1})", ergebnis: "z", erwartet: "new int[][]{{-1}, {-1, -1, -1}, {3, 8}}", versteckt: true }
    regeln: { keineHilfsmethoden: true, keineFelder: true, keineArrayKopie: true, erlaubteApi: ["Math.*"] }
    fehler:
      - { wert: 1, meldung: "Der Wert wechselt mitten in einer Zeile oder über eine Zeilengrenze hinweg. Zähle unabhängig von den Zeilen mit, wie oft der aktuelle Wert schon geschrieben wurde." }
      - { wert: 3, meldung: "`wieOft` darf nicht verändert werden. Zähle nicht `wieOft[w]` herunter, sondern führe einen eigenen Zähler." }
hinweise:
  - Du brauchst zwei Zähler, die über alle Zeilen hinweg weiterlaufen. `w` ist der Index des aktuellen Werts, ein zweiter zählt, wie oft er schon geschrieben wurde.
  - Ist der zweite Zähler bei `wieOft[w]` angekommen, gehe zum nächsten Wert und setze den Zähler auf 0. Erst dann schreibst du.
loesung: |
  **Ansatz:** M2 mit Überschreiben. Die Schreibreihenfolge ist zeilenweise, aber der Wertewechsel hängt nicht an den Zeilen.
  ---
  Zwei Zähler laufen über das ganze Array: `w` für den aktuellen Wert und `schonGeschrieben` für seine Wiederholungen.
  ---
  ```java
  if (schonGeschrieben == wieOft[w]) {
      w++;
      schonGeschrieben = 0;
  }
  ziel[i][j] = werte[w];
  schonGeschrieben++;
  ```
  ---
  Weil die Summe von `wieOft` genau die Anzahl der Einträge ist, läuft `w` nie über das Ende hinaus. `wieOft` selbst wird nur gelesen.
  ---
  Probe: 7 zweimal, 1 dreimal, 4 einmal. Zeilenweise geschrieben ergibt das `{7, 7, 1}`, `{1}`, `{1, 4}`.
```

## Methode 3: rekursiv ohne Schleifen

```aufgabe
id: pt-m3-check-basisfall
titel: Was ein Basisfall ist
niveau: 1
art: check
angabe: |
  Was ist der Basisfall einer rekursiven Methode? (Wiederholung: [10.1 Eine Methode ruft sich selbst auf](/lernen/ep1/rekursion/eine-methode-ruft-sich-selbst-auf))
teile:
  - typ: auswahl
    optionen:
      - ein Fall, in dem die Methode ihr Ergebnis **ohne** Selbstaufruf kennt
      - der erste Aufruf, den `main` macht
      - der Selbstaufruf mit kleineren Argumenten
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Der erste Aufruf kann irgendwo beginnen. Der Basisfall ist der Fall, in dem die Rekursion endet.
      - wert: 2
        meldung: Der Selbstaufruf mit kleineren Argumenten ist der Fortschritt. Der Basisfall kommt gerade ohne Selbstaufruf aus.
hinweise:
  - Eine Rekursion braucht eine Stelle, an der sie aufhört.
loesung: |
  Im Basisfall steht das Ergebnis fest, ohne dass die Methode sich noch einmal aufruft.
  ---
  Dort endet die Rekursion. Der Selbstaufruf mit kleineren Argumenten heißt Fortschritt.
```

Die dritte Methode muss **rekursiv** sein, und Schleifen sind in ihr verboten. Wie man rekursiv denkt, steht in
[Kapitel 10 „Rekursion I: Zahlen und Strings“](/lernen/ep1/rekursion) und [Kapitel 13 „Rekursion auf Arrays“](/lernen/ep1/rekursion-arrays). Hier geht es darum, die drei Formen
zu erkennen, in denen M3 bisher gestellt wurde, und für jede den passenden Kopf und Basisfall sofort zu finden.

1. **Ein String wird kürzer.** Der Kopf hat nur den String, etwa `boolean evenOccurrences(String s, char ch)`. Jeder
   Aufruf behandelt `s.charAt(0)` und ruft sich mit `s.substring(1)` auf. Der Basisfall ist `s.isEmpty()`.
2. **Ein Index wandert durch ein Array.** Der Kopf hat einen Index, etwa
   `boolean hasNOrderedPairs(int[] seq, int n, int index)`. Jeder Aufruf behandelt `seq[index]` und ruft sich mit
   `index + 1` auf. Der Basisfall ist erreicht, wenn der Index am Ende angekommen ist.
3. **Zwei Indizes laufen aufeinander zu.** Der Kopf hat zwei Grenzen, etwa
   `int findMaxOppositeSum(int[] sequence, int start, int end)`. Jeder Aufruf behandelt die beiden Ränder und ruft
   sich mit `start + 1` und `end - 1` auf.

Wie die Punkte verteilt sind, steht im Raster aus [10.6 Rekursiv nach Vorgabe: Schleifenverbot und Bewertung](/lernen/ep1/rekursion/rekursiv-nach-vorgabe-schleifenverbot-und-bewertung):
Rückgabe vorhanden, Basisfall vorhanden und korrekt, Fortschritt vorhanden und korrekt, Rückgabewert korrekt. Die
meisten Punkte bringt der richtige Rückgabewert.

:::beispiel[Genau k-mal ein Zeichen]
Gesucht ist `boolean genauKMal(String s, char c, int k)`. Die Methode liefert `true`, wenn `c` genau `k`-mal in `s`
vorkommt. Sie muss rekursiv sein. Vorbedingung: `s != null`, `k >= 0`.

**Idee:** Statt zu zählen und am Ende zu vergleichen, zählt die Methode `k` herunter. Jedes gefundene `c` verbraucht
einen der `k` gesuchten Treffer. Ist der String zu Ende, müssen alle Treffer verbraucht sein, also `k == 0`.

```java
public static boolean genauKMal(String s, char c, int k) {
    if (s.isEmpty()) {
        return k == 0;                                  // Basisfall: alles verbraucht?
    }
    if (s.charAt(0) == c) {
        return genauKMal(s.substring(1), c, k - 1);     // ein Treffer verbraucht
    }
    return genauKMal(s.substring(1), c, k);             // kein Treffer
}
```

- **Basisfall:** Im leeren String kommt `c` nullmal vor. Das stimmt genau dann, wenn noch `k == 0` Treffer gesucht
  werden. `return k == 0;` liefert dafür direkt den passenden `boolean`-Wert.
- **Fortschritt:** Jeder Aufruf kürzt den String um ein Zeichen. `k` wird nur bei einem Treffer kleiner.
- **Ablauf** für `genauKMal("aba", 'a', 2)`: Aufrufe mit `("ba", 1)`, dann `("a", 1)`, dann `("", 0)`. Ergebnis `true`.
- Der Zählparameter steht schon im vorgegebenen Kopf. So braucht die Methode weder eine Klassenvariable noch einen
  zusätzlichen Parameter.
:::

:::achtung[Ein Paar am Ende des Arrays]
Bei Aufgaben mit Paaren wie `hasNOrderedPairs` schreiben viele den Basisfall `if (index == seq.length)`. Dann rechnet der
Aufruf mit `index = seq.length - 1` noch `seq[index] <= seq[index + 1]`. Bei `seq = {2, 8}` ist das `seq[1] <= seq[2]`,
und `seq[2]` gibt es nicht. Java wirft eine `ArrayIndexOutOfBoundsException`. Ein Paar braucht zwei Plätze. Der
Basisfall lautet darum `index >= seq.length - 1`: Ab dem letzten Eintrag beginnt kein Paar mehr.
:::

```aufgabe
id: pt-m3-ausgabe-kmal
titel: Groß und klein beim Zählen
niveau: 1
lernziel: 4
kompetenz: anwenden
quelle: nach Beispiel-Programmiertest 2 vom 18.05.2020 und den Probetests 2023 (isPresentNTimes), neue Testdaten
angabe: |
  `genauKMal` aus dem Beispiel „Genau k-mal ein Zeichen“ ist richtig implementiert. Was gibt das Programm aus?

  ```java
  System.out.println(genauKMal("Rhabarber", 'r', 2));
  System.out.println(genauKMal("Rhabarber", 'r', 3));
  System.out.println(genauKMal("", 'x', 0));
  ```
teile:
  - typ: ausgabe
    codeAnzeigen: false
    code: |
      public class KMal {
          public static boolean genauKMal(String s, char c, int k) {
              if (s.isEmpty()) {
                  return k == 0;
              }
              if (s.charAt(0) == c) {
                  return genauKMal(s.substring(1), c, k - 1);
              }
              return genauKMal(s.substring(1), c, k);
          }

          public static void main(String[] args) {
              System.out.println(genauKMal("Rhabarber", 'r', 2));
              System.out.println(genauKMal("Rhabarber", 'r', 3));
              System.out.println(genauKMal("", 'x', 0));
          }
      }
    loesung: |
      true
      false
      true
    fehler:
      - wert: "false\ntrue\ntrue"
        meldung: Das große `R` am Anfang ist ein anderes Zeichen als das kleine `r`. Kleine `r` gibt es zweimal, an den Indizes 5 und 8.
      - wert: "true\nfalse\nfalse"
        meldung: Im leeren String kommt `x` nullmal vor. Gesucht sind 0 Treffer, also liefert der Basisfall `k == 0`, und das ist `true`.
hinweise:
  - Zähle in `"Rhabarber"` nur die kleinen `r`.
loesung: |
  **Ansatz:** Treffer zählen und mit `k` vergleichen. Der Vergleich von `char`-Werten unterscheidet Groß und klein.
  ---
  In `"Rhabarber"` steht das kleine `r` zweimal. Also `true` für `k = 2` und `false` für `k = 3`. Der leere String hat 0 Treffer, also `true`.
```

```aufgabe
id: pt-m3-zeilen-fortschritt
titel: Wo steht der Fortschritt?
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Die Methode zählt, wie oft in `s` zwei gleiche Zeichen direkt nebeneinander stehen. Markiere **alle** Zeilen, in
  denen ein Fortschritt der Rekursion steht, also ein Selbstaufruf mit kleinerem Argument.
teile:
  - typ: zeilen
    code: |
      public static int gleichePaare(String s) {
          if (s.length() < 2) {
              return 0;
          }
          if (s.charAt(0) == s.charAt(1)) {
              return 1 + gleichePaare(s.substring(1));
          }
          return gleichePaare(s.substring(1));
      }
    loesung: [6, 8]
    fehler:
      - wert: [6]
        meldung: Auch Zeile 8 ruft `gleichePaare` mit dem kürzeren String auf. Beide Zweige brauchen einen Fortschritt.
      - wert: [2, 6, 8]
        meldung: Zeile 2 ist die Bedingung des Basisfalls. Dort steht kein Selbstaufruf.
      - wert: [5, 6, 8]
        meldung: Zeile 5 entscheidet nur, welcher Zweig läuft. Der Fortschritt ist der Selbstaufruf selbst.
hinweise:
  - Suche jede Zeile, in der `gleichePaare(` mit einem Argument steht.
loesung: |
  **Ansatz:** Fortschritt heißt Selbstaufruf mit kleinerem Argument. Gesucht sind alle Zeilen mit `gleichePaare(…)` im Rumpf.
  ---
  Zeile 6 und Zeile 8 rufen sich mit `s.substring(1)` auf. Zeilen 2 und 3 bilden den Basisfall, Zeile 5 die Fallunterscheidung.
```

:::beispiel[Der Inhalt der äußersten Klammer]
Gesucht ist `String innerhalb(String s)`. Die Methode liefert den Text zwischen dem **ersten** `(` und der **letzten**
`)` von `s`, ohne diese beiden Klammern. Steht keine `(` vor einer `)`, liefert sie den leeren String. Sie muss
rekursiv sein. Vorbedingung: `s != null`.

Beispiele: `innerhalb("ab(cd)e")` liefert `"cd"`, `innerhalb("x(1(2)3)y")` liefert `"1(2)3"`, `innerhalb(")(")`
liefert `""`.

**Idee:** Die Methode schneidet von **beiden** Seiten ab. Ist das erste Zeichen keine `(`, fällt es weg. Ist das
letzte Zeichen keine `)`, fällt es weg. Stehen vorne `(` und hinten `)`, ist das Ergebnis der Text dazwischen.

```java
public static String innerhalb(String s) {
    if (s.length() < 2) {
        return "";                                        // zu kurz für ein Klammerpaar
    }
    if (s.charAt(0) != '(') {
        return innerhalb(s.substring(1));                 // vorne abschneiden
    }
    if (s.charAt(s.length() - 1) != ')') {
        return innerhalb(s.substring(0, s.length() - 1)); // hinten abschneiden
    }
    return s.substring(1, s.length() - 1);                // zwischen den Klammern
}
```

- **Basisfall 1:** Ein String mit weniger als zwei Zeichen kann kein Paar `(` und `)` enthalten. Ergebnis `""`.
- **Basisfall 2:** Vorne `(` und hinten `)`. Das Ergebnis steht ohne Selbstaufruf fest.
- **Fortschritt:** In jedem anderen Fall wird der String um ein Zeichen kürzer, also endet die Rekursion sicher.
- Ablauf für `")("`: Das erste Zeichen ist keine `(`, weiter mit `"("`. Das ist kürzer als 2, Ergebnis `""`.
:::

:::achtung[Das Ergebnis des Selbstaufrufs fallen lassen]
Jemand schreibt im rekursiven Fall nur den Aufruf ohne `return`:

```java
if (s.charAt(0) == c) {
    genauKMal(s.substring(1), c, k - 1);
}
return false;
```

Der Selbstaufruf rechnet sein Ergebnis aus, aber niemand verwendet es. Danach läuft die Methode zur Zeile
`return false;` weiter. `genauKMal("aa", 'a', 2)` liefert so `false`, obwohl es `true` sein müsste. Im Raster fehlen
dann die 4 Punkte für den Rückgabewert. Jeder Selbstaufruf in einer Methode mit Rückgabewert gehört in ein `return`
oder in eine Rechnung, deren Ergebnis zurückgegeben wird.
:::

```aufgabe
id: pt-m3-gefuehrt-fallend
titel: Genau n fallende Paare ab einem Index
niveau: 2
lernziel: 4
kompetenz: anwenden
quelle: nach Programmiertest 27.01.2022, Gruppen 16A und 16B (hasNOrderedPairs, contains), mit fallenden statt steigenden Paaren
angabe: |
  Implementiere `boolean genauNFallend(int[] seq, int n, int index)` **rekursiv**. Die Methode prüft, ob es ab `index`
  (inklusive) genau `n` Paare direkt aufeinanderfolgender Einträge gibt, bei denen der erste **größer** als der zweite
  ist. Paare dürfen sich überlappen. Es gelten die Einschränkungen des Programmiertests. Vorbedingung: `seq != null`,
  `seq.length > 0`, `n >= 0`, `index` ist ein gültiger Index von `seq`. Löse die Aufgabe zuerst geführt.

  ```text
  int[] seq = {9, 4, 4, 7, 3, 1, 8};
  genauNFallend(seq, 3, 0)   liefert true    (9 > 4, 7 > 3, 3 > 1)
  genauNFallend(seq, 2, 0)   liefert false
  genauNFallend(seq, 0, 6)   liefert true
  ```
teile:
  - typ: code
    vorlage: |
      public class Fallend {
          public static boolean genauNFallend(int[] seq, int n, int index) {
              return false; // TODO
          }
      }
    musterloesung: |
      public class Fallend {
          public static boolean genauNFallend(int[] seq, int n, int index) {
              if (index >= seq.length - 1) {
                  return n == 0;
              }
              if (seq[index] > seq[index + 1]) {
                  return genauNFallend(seq, n - 1, index + 1);
              }
              return genauNFallend(seq, n, index + 1);
          }
      }
    tests:
      - { aufruf: "genauNFallend(new int[]{9, 4, 4, 7, 3, 1, 8}, 3, 0)", erwartet: "true" }
      - { aufruf: "genauNFallend(new int[]{9, 4, 4, 7, 3, 1, 8}, 2, 0)", erwartet: "false" }
      - { aufruf: "genauNFallend(new int[]{9, 4, 4, 7, 3, 1, 8}, 0, 6)", erwartet: "true", beschreibung: "index am letzten Eintrag" }
      - { aufruf: "genauNFallend(new int[]{9, 4, 4, 7, 3, 1, 8}, 2, 2)", erwartet: "true" }
      - { aufruf: "genauNFallend(new int[]{5}, 0, 0)", erwartet: "true", beschreibung: "nur ein Eintrag" }
      - { aufruf: "genauNFallend(new int[]{9, 4, 4, 7, 3, 1, 8}, 3, 3)", erwartet: "false", versteckt: true }
      - { aufruf: "genauNFallend(new int[]{4, 4, 4}, 1, 0)", erwartet: "false", versteckt: true }
      - { aufruf: "genauNFallend(new int[]{6, 5, 4, 3}, 3, 0)", erwartet: "true", versteckt: true }
    regeln: { keineSchleifenIn: [genauNFallend], rekursiv: [genauNFallend], keineHilfsmethoden: true, keineFelder: true, keinStringGleichOperator: true, erlaubteApi: ["Math.*"] }
    fehler:
      - { wert: 3, meldung: "Ab dem letzten Eintrag beginnt kein Paar mehr. Der Basisfall muss schon bei `index >= seq.length - 1` greifen, sonst liest du `seq[index + 1]` hinter dem Ende." }
      - { wert: 5, meldung: "Ein Array mit einem Eintrag hat kein Paar. Für `n = 0` ist das Ergebnis `true`." }
      - { wert: "keineSchleifenIn", meldung: "In der rekursiven Methode ist keine Schleife erlaubt. Behandle pro Aufruf nur das Paar an `index` und `index + 1`." }
gefuehrt:
  - text: Ab welchem Index beginnt kein Paar mehr, sodass der Basisfall greifen muss?
    teil:
      typ: auswahl
      optionen: ['ab `index >= seq.length - 1`', 'erst ab `index == seq.length`', 'ab `index >= seq.length - 2`']
      richtig: [0]
    erklaerung: Ein Paar braucht die Plätze `index` und `index + 1`. Am letzten Platz `seq.length - 1` fehlt der zweite.
  - text: Was muss der Basisfall zurückgeben?
    teil:
      typ: auswahl
      optionen: ['`n == 0`', '`true`', '`false`']
      richtig: [0]
    erklaerung: Im leeren Rest gibt es 0 Paare. Das stimmt genau dann, wenn noch `n == 0` Paare gesucht werden.
  - text: Wie viele fallende Paare gibt es in `{9, 4, 4, 7, 3, 1, 8}` ab Index 2?
    teil: { typ: zahl, loesung: "2" }
    erklaerung: 'Ab Index 2 stehen die Paare (4, 7), (7, 3), (3, 1) und (1, 8). Fallend sind (7, 3) und (3, 1).'
  - text: Mit welchem `n` geht der Selbstaufruf weiter, wenn das Paar an `index` fallend ist?
    teil:
      typ: auswahl
      optionen: ['`n - 1`', '`n`', '`n + 1`']
      richtig: [0]
    erklaerung: Ein gefundenes Paar verbraucht einen der gesuchten Treffer. Danach werden nur noch `n - 1` gesucht.
hinweise:
  - Arbeite wie bei `genauKMal`. Zähle `n` bei jedem Treffer herunter.
  - Der Basisfall greift, sobald `index + 1` kein gültiger Index mehr ist. Dann liefert er `n == 0`.
loesung: |
  **Ansatz:** Form 2, ein Index wandert durch das Array. Jeder Aufruf prüft genau ein Paar und zählt `n` herunter.
  ---
  Basisfall: `index >= seq.length - 1`, kein Paar mehr. Ergebnis `n == 0`.
  ---
  ```java
  if (index >= seq.length - 1) {
      return n == 0;
  }
  if (seq[index] > seq[index + 1]) {
      return genauNFallend(seq, n - 1, index + 1);
  }
  return genauNFallend(seq, n, index + 1);
  ```
  ---
  Fortschritt: `index + 1`. Paare überlappen, also rückt der Index nur um 1 weiter, nicht um 2.
  ---
  Probe für `(seq, 2, 0)`: Es gibt drei fallende Paare, `n` landet bei `-1`. Der Basisfall liefert `false`.
```

```aufgabe
id: pt-m3-code-ungerade
titel: Kommt das Zeichen ungerade oft vor?
niveau: 2
lernziel: 4
kompetenz: anwenden
quelle: nach Programmiertest 27.01.2022, Gruppe 18A (oddOccurrences), neue Testdaten
angabe: |
  Implementiere `boolean ungeradeOft(String s, char c)` **rekursiv**. Die Methode liefert `true`, wenn `c` in `s` eine
  **ungerade** Anzahl von Malen vorkommt, sonst `false`. Es gelten die Einschränkungen des Programmiertests.
  Vorbedingung: `s != null`.

  ```text
  ungeradeOft("Kakao", 'a')   liefert false
  ungeradeOft("Kakao", 'K')   liefert true
  ungeradeOft("", 'z')        liefert false
  ```
teile:
  - typ: code
    vorlage: |
      public class Ungerade {
          public static boolean ungeradeOft(String s, char c) {
              return false; // TODO
          }
      }
    musterloesung: |
      public class Ungerade {
          public static boolean ungeradeOft(String s, char c) {
              if (s.isEmpty()) {
                  return false;
              }
              boolean rest = ungeradeOft(s.substring(1), c);
              if (s.charAt(0) == c) {
                  return !rest;
              }
              return rest;
          }
      }
    tests:
      - { aufruf: "ungeradeOft(\"Kakao\", 'a')", erwartet: "false" }
      - { aufruf: "ungeradeOft(\"Kakao\", 'K')", erwartet: "true" }
      - { aufruf: "ungeradeOft(\"\", 'z')", erwartet: "false", beschreibung: "leerer String" }
      - { aufruf: "ungeradeOft(\"Kakao\", 'k')", erwartet: "true", beschreibung: "kleines k" }
      - { aufruf: "ungeradeOft(\"zzz\", 'z')", erwartet: "true", versteckt: true }
      - { aufruf: "ungeradeOft(\"Mississippi\", 's')", erwartet: "false", versteckt: true }
      - { aufruf: "ungeradeOft(\"Mississippi\", 'M')", erwartet: "true", versteckt: true }
    regeln: { keineSchleifenIn: [ungeradeOft], rekursiv: [ungeradeOft], keineHilfsmethoden: true, keineFelder: true, keinStringGleichOperator: true, erlaubteApi: ["String.charAt", "String.equals", "String.length", "String.substring", "String.isEmpty", "Math.*"] }
    fehler:
      - { wert: 3, meldung: "Im leeren String kommt `c` nullmal vor, und 0 ist gerade. Der Basisfall liefert also `false`." }
      - { wert: 1, meldung: "Jeder Treffer dreht die Antwort um. Ist das erste Zeichen `c`, gib `!rest` zurück, sonst `rest`." }
      - { wert: "keineFelder", meldung: "Ein Zähler als Klassenvariable ist verboten. Die Information „gerade oder ungerade“ steckt schon im Rückgabewert für den Rest." }
hinweise:
  - Du brauchst keinen Zähler. Wenn du weißt, ob `c` im Rest ungerade oft vorkommt, kennst du die Antwort für den ganzen String.
  - Ein Treffer am Anfang macht aus „ungerade“ ein „gerade“ und umgekehrt. Das ist die Verneinung mit `!`.
loesung: |
  **Ansatz:** Form 1, der String wird kürzer. Statt einer Anzahl wird nur die Parität weitergegeben, also gerade oder ungerade.
  ---
  Basisfall: leerer String, 0 Treffer, 0 ist nicht ungerade. Ergebnis `false`.
  ---
  ```java
  boolean rest = ungeradeOft(s.substring(1), c);
  if (s.charAt(0) == c) {
      return !rest;
  }
  return rest;
  ```
  ---
  Fortschritt `substring(1)`, Rückgabewert über `!rest`. Die Frage „kommt das Zeichen **gerade** oft vor?“ löst man genauso. Nur der Basisfall liefert dann `true`, denn 0 ist gerade.
  ---
  Probe `"Kakao"`, `'a'`: zwei Treffer, die Antwort dreht sich zweimal, Ergebnis `false`.
```

```aufgabe
id: pt-m3-code-ohne
titel: Zeichen aus einem Bereich, ohne ein bestimmtes
niveau: 2
lernziel: 4
kompetenz: anwenden
quelle: nach Programmiertest 2 vom 04.06.2020 und den Probetests 2023 (extractString), neue Testdaten
angabe: |
  Implementiere `String ohneZeichen(char[] seq, int start, int end, char weg)` **rekursiv**. Die Methode liefert einen
  String aus den Zeichen von `seq` von Index `start` (inklusive) bis Index `end` (**exklusive**). Jedes Vorkommen von
  `weg` wird ausgelassen. Methoden der Klasse `String` sind hier **ganz verboten**, der Operator `+` ist erlaubt.
  Vorbedingung: `seq != null`, `0 <= start <= end <= seq.length`.

  ```text
  char[] cs = {'k', '-', 'a', '-', 'n', 'u'};
  ohneZeichen(cs, 0, 6, '-')   liefert "kanu"
  ohneZeichen(cs, 1, 4, 'a')   liefert "--"
  ohneZeichen(cs, 2, 2, 'x')   liefert ""
  ```
teile:
  - typ: code
    vorlage: |
      public class Ohne {
          public static String ohneZeichen(char[] seq, int start, int end, char weg) {
              return null; // TODO
          }
      }
    musterloesung: |
      public class Ohne {
          public static String ohneZeichen(char[] seq, int start, int end, char weg) {
              if (start >= end) {
                  return "";
              }
              if (seq[start] == weg) {
                  return ohneZeichen(seq, start + 1, end, weg);
              }
              return seq[start] + ohneZeichen(seq, start + 1, end, weg);
          }
      }
    tests:
      - { aufruf: "ohneZeichen(new char[]{'k', '-', 'a', '-', 'n', 'u'}, 0, 6, '-')", erwartet: "\"kanu\"" }
      - { aufruf: "ohneZeichen(new char[]{'k', '-', 'a', '-', 'n', 'u'}, 1, 4, 'a')", erwartet: "\"--\"", beschreibung: "end exklusiv" }
      - { aufruf: "ohneZeichen(new char[]{'k', '-', 'a', '-', 'n', 'u'}, 2, 2, 'x')", erwartet: "\"\"", beschreibung: "leerer Bereich" }
      - { aufruf: "ohneZeichen(new char[]{'k', '-', 'a', '-', 'n', 'u'}, 0, 3, 'k')", erwartet: "\"-a\"", versteckt: true }
      - { aufruf: "ohneZeichen(new char[]{'o', 'o', 'o'}, 0, 3, 'o')", erwartet: "\"\"", versteckt: true }
    regeln: { keineSchleifenIn: [ohneZeichen], rekursiv: [ohneZeichen], keineHilfsmethoden: true, keineFelder: true, keinStringGleichOperator: true, erlaubteApi: ["Math.*"] }
    fehler:
      - { wert: 2, meldung: "`end` ist exklusiv. Der Index `end` selbst gehört nicht mehr dazu. Der Basisfall greift bei `start >= end`." }
      - { wert: 3, meldung: "Bei `start == end` ist der Bereich leer. Greife dann nicht mehr auf `seq[start]` zu, sondern liefere sofort `\"\"`." }
hinweise:
  - Der Bereich wird von vorne kürzer. Jeder Aufruf behandelt `seq[start]` und ruft sich mit `start + 1` auf.
  - Ohne String-Methoden baust du das Ergebnis mit `+` auf. `seq[start] + "rest"` ist eine Verkettung, weil rechts ein String steht.
loesung: |
  **Ansatz:** Form 2 mit Index `start`. `end` bleibt fest und markiert das exklusive Ende.
  ---
  Basisfall: `start >= end`. Der Bereich ist leer, das Ergebnis `""`.
  ---
  ```java
  if (seq[start] == weg) {
      return ohneZeichen(seq, start + 1, end, weg);
  }
  return seq[start] + ohneZeichen(seq, start + 1, end, weg);
  ```
  ---
  `seq[start] + …` steht vor dem Ergebnis des Rests, also bleibt die Reihenfolge erhalten.
  ---
  Probe: Bereich 1 bis 3 von `{'k', '-', 'a', '-', …}` ist `-`, `a`, `-`. Ohne `a` bleibt `"--"`.
```

```aufgabe
id: pt-m3-code-trenne
titel: Ein Trennzeichen zwischen jeden Buchstaben
niveau: 2
lernziel: 4
kompetenz: anwenden
quelle: nach Beispiel-Programmiertest 2 vom 18.05.2020, Variante 2 (insert), neue Testdaten
angabe: |
  Implementiere `String trenne(String s, String sep)` **rekursiv**. Die Methode fügt zwischen je zwei Zeichen von `s`
  den String `sep` ein. Vor dem ersten und nach dem letzten Zeichen steht kein `sep`. Es gelten die Einschränkungen des
  Programmiertests. Vorbedingung: `s != null`, `sep != null`.

  ```text
  trenne("Tor", "-")   liefert "T-o-r"
  trenne("Q", "*")     liefert "Q"
  trenne("", "+")      liefert ""
  ```
teile:
  - typ: code
    vorlage: |
      public class Trenne {
          public static String trenne(String s, String sep) {
              return s; // TODO
          }
      }
    musterloesung: |
      public class Trenne {
          public static String trenne(String s, String sep) {
              if (s.length() <= 1) {
                  return s;
              }
              return s.charAt(0) + sep + trenne(s.substring(1), sep);
          }
      }
    tests:
      - { aufruf: "trenne(\"Tor\", \"-\")", erwartet: "\"T-o-r\"" }
      - { aufruf: "trenne(\"Q\", \"*\")", erwartet: "\"Q\"", beschreibung: "ein Zeichen" }
      - { aufruf: "trenne(\"\", \"+\")", erwartet: "\"\"", beschreibung: "leerer String" }
      - { aufruf: "trenne(\"ab\", \"<>\")", erwartet: "\"a<>b\"", beschreibung: "Trenner aus zwei Zeichen" }
      - { aufruf: "trenne(\"Rhein\", \", \")", erwartet: "\"R, h, e, i, n\"", versteckt: true }
    regeln: { keineSchleifenIn: [trenne], rekursiv: [trenne], keineHilfsmethoden: true, keineFelder: true, keinStringGleichOperator: true, erlaubteApi: ["String.charAt", "String.equals", "String.length", "String.substring", "String.isEmpty", "Math.*"] }
    fehler:
      - { wert: 1, meldung: "Steht am Ende ein Trenner zu viel? Der Basisfall muss schon bei **einem** Zeichen greifen und es ohne `sep` zurückgeben." }
      - { wert: 3, meldung: "Der leere String braucht einen Basisfall, sonst greift `charAt(0)` ins Leere. Mit `s.length() <= 1` sind beide kurzen Fälle erledigt." }
hinweise:
  - Ein Trenner gehört nur **zwischen** zwei Zeichen. Bei null oder einem Zeichen gibt es nichts zu trennen.
  - 'Sonst: erstes Zeichen, dann `sep`, dann das Ergebnis für den Rest.'
loesung: |
  **Ansatz:** Form 1, der String wird kürzer. Der Basisfall deckt die zwei Fälle ab, in denen es kein Paar mehr gibt.
  ---
  Basisfall `s.length() <= 1`: Ergebnis ist `s` selbst, ohne Trenner. Das deckt `""` und ein einzelnes Zeichen ab.
  ---
  ```java
  return s.charAt(0) + sep + trenne(s.substring(1), sep);
  ```
  ---
  Weil der Rest mindestens ein Zeichen hat, steht hinter jedem `sep` wieder ein Zeichen. Am Ende entsteht kein überzähliger Trenner.
  ---
  Probe: `"Tor"` ergibt `'T' + "-" + ('o' + "-" + "r")`, also `"T-o-r"`.
```

```reflexion
frage: Bei `genauKMal` und `genauNFallend` wird ein Parameter heruntergezählt, statt einen Zähler zu führen. Warum ist das im Programmiertest besonders praktisch?
antwort: |
  Weil die Einschränkungen Klassenvariablen und zusätzliche Parameter verbieten. Ein Zähler, der Treffer aufsummiert,
  hätte im vorgegebenen Kopf keinen Platz. Der Parameter `k` oder `n` ist aber schon da. Wenn ich ihn bei jedem Treffer
  um 1 verkleinere, steht im Basisfall fest, ob genau die verlangte Anzahl gefunden wurde: Das ist genau dann der Fall,
  wenn der Rest 0 ist. So passt die ganze Information in die vorhandenen Parameter und den Rückgabewert.
```

```aufgabe
id: pt-m3-code-wechsel
titel: Wechselt das Vorzeichen in einem Bereich?
niveau: 3
lernziel: 4
kompetenz: anwenden
quelle: nach Programmiertest 10.02.2022, Gruppe 10B (changeOfSign), neue Testdaten
angabe: |
  Implementiere `boolean wechselZwischen(int[] seq, int i1, int i2)` **rekursiv**. Die Methode prüft, ob die Einträge
  von Index `i1` bis Index `i2` (beide inklusive) **alternieren**. Das heißt, je zwei direkt aufeinanderfolgende Einträge
  in diesem Bereich haben verschiedene Vorzeichen. Es gelten die Einschränkungen des Programmiertests. Vorbedingung:
  `seq != null`, `seq` enthält keine 0, `i1 <= i2`, beide sind gültige Indizes.

  ```text
  int[] w = {3, -1, 2, -7, -2, 5};
  wechselZwischen(w, 0, 3)   liefert true
  wechselZwischen(w, 0, 5)   liefert false
  wechselZwischen(w, 2, 2)   liefert true
  ```
teile:
  - typ: code
    vorlage: |
      public class Wechsel {
          public static boolean wechselZwischen(int[] seq, int i1, int i2) {
              return false; // TODO
          }
      }
    musterloesung: |
      public class Wechsel {
          public static boolean wechselZwischen(int[] seq, int i1, int i2) {
              if (i1 >= i2) {
                  return true;
              }
              if ((seq[i1] > 0) == (seq[i1 + 1] > 0)) {
                  return false;
              }
              return wechselZwischen(seq, i1 + 1, i2);
          }
      }
    tests:
      - { aufruf: "wechselZwischen(new int[]{3, -1, 2, -7, -2, 5}, 0, 3)", erwartet: "true" }
      - { aufruf: "wechselZwischen(new int[]{3, -1, 2, -7, -2, 5}, 0, 5)", erwartet: "false" }
      - { aufruf: "wechselZwischen(new int[]{3, -1, 2, -7, -2, 5}, 2, 2)", erwartet: "true", beschreibung: "ein einziger Eintrag" }
      - { aufruf: "wechselZwischen(new int[]{3, -1, 2, -7, -2, 5}, 4, 5)", erwartet: "true" }
      - { aufruf: "wechselZwischen(new int[]{3, -1, 2, -7, -2, 5}, 3, 4)", erwartet: "false", versteckt: true }
      - { aufruf: "wechselZwischen(new int[]{3, -1, 2, -7, -2, 5}, 2, 4)", erwartet: "false", versteckt: true }
      - { aufruf: "wechselZwischen(new int[]{-4, 8, -1, 6}, 0, 3)", erwartet: "true", versteckt: true }
    regeln: { keineSchleifenIn: [wechselZwischen], rekursiv: [wechselZwischen], keineHilfsmethoden: true, keineFelder: true, keinStringGleichOperator: true, erlaubteApi: ["Math.*"] }
    fehler:
      - { wert: 2, meldung: "Die Einträge `-7` und `-2` stehen nebeneinander und haben dasselbe Vorzeichen. Prüfe jedes Paar im Bereich bis einschließlich `i2`." }
      - { wert: 3, meldung: "Ein Bereich mit nur einem Eintrag enthält kein Paar und alterniert damit. Der Basisfall `i1 >= i2` liefert `true`." }
      - { wert: 4, meldung: "Das letzte Paar im Bereich besteht aus `seq[i2 - 1]` und `seq[i2]`. Bei `i1 == i2` ist Schluss. Prüfst du dort noch `seq[i2 + 1]`, liest du hinter dem Bereich und hier sogar hinter dem Arrayende." }
      - { wert: 5, meldung: "Das letzte Paar im Bereich besteht aus `seq[i2 - 1]` und `seq[i2]`. Prüfe, ob du nicht ein Paar zu früh aufhörst." }
hinweise:
  - Ein Index wandert durch das Array, bis zu einer festen rechten Grenze `i2`. Jeder Aufruf prüft das Paar an `i1` und `i1 + 1` und rückt mit `i1 + 1` weiter.
  - '`(seq[i1] > 0) == (seq[i1 + 1] > 0)` ist genau dann wahr, wenn beide dasselbe Vorzeichen haben. Die Vorbedingung schließt die 0 aus.'
loesung: |
  **Ansatz:** Der linke Index wandert bis zur festen rechten Grenze. Jedes Paar im Bereich muss das Vorzeichen wechseln.
  ---
  Basisfall: `i1 >= i2`. Ab hier liegt kein Paar mehr im Bereich, also stimmt die Aussage, Ergebnis `true`.
  ---
  Zweiter Basisfall: Hat das Paar an `i1` und `i1 + 1` dasselbe Vorzeichen, steht `false` sofort fest.
  ---
  ```java
  if ((seq[i1] > 0) == (seq[i1 + 1] > 0)) {
      return false;
  }
  return wechselZwischen(seq, i1 + 1, i2);
  ```
  ---
  Zwei `boolean`-Werte vergleicht man mit `==`. Beide sind `true` bei zwei positiven Zahlen, beide `false` bei zwei negativen.
  ---
  Probe `(w, 0, 5)`: Die Paare bis `(2, -7)` wechseln, dann `(-7, -2)` nicht. Ergebnis `false`.
```

```aufgabe
id: pt-m3-code-gegenueber
titel: Die kleinste Summe gegenüberliegender Einträge
niveau: 3
lernziel: 4
kompetenz: anwenden
quelle: nach Programmiertest 2020W, PT 10 und den Probetests 2023 (findMaxOppositeSum), Minimum statt Maximum
angabe: |
  Implementiere `int kleinsteGegenueber(int[] seq, int start, int end)` **rekursiv**. Die Methode bildet die Summen
  gegenüberliegender Einträge zwischen `start` und `end`. Gemeint sind `seq[start] + seq[end]`, dann
  `seq[start + 1] + seq[end - 1]` und so weiter. Sie liefert die **kleinste** dieser Summen. Es gelten die
  Einschränkungen des Programmiertests. Vorbedingung: `seq != null`, `start < end`, beide sind gültige Indizes, und von
  `start` bis `end` liegt eine gerade Anzahl von Einträgen.

  ```text
  int[] g = {5, 1, 0, 6, 2, 3};
  kleinsteGegenueber(g, 0, 5)   liefert 3    (Summen 8, 3, 6)
  kleinsteGegenueber(g, 2, 3)   liefert 6
  ```
teile:
  - typ: code
    vorlage: |
      public class Gegenueber {
          public static int kleinsteGegenueber(int[] seq, int start, int end) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Gegenueber {
          public static int kleinsteGegenueber(int[] seq, int start, int end) {
              int summe = seq[start] + seq[end];
              if (end - start == 1) {
                  return summe;
              }
              return Math.min(summe, kleinsteGegenueber(seq, start + 1, end - 1));
          }
      }
    tests:
      - { aufruf: "kleinsteGegenueber(new int[]{5, 1, 0, 6, 2, 3}, 0, 5)", erwartet: "3" }
      - { aufruf: "kleinsteGegenueber(new int[]{5, 1, 0, 6, 2, 3}, 2, 3)", erwartet: "6", beschreibung: "nur ein Paar" }
      - { aufruf: "kleinsteGegenueber(new int[]{5, 1, 0, 6, 2, 3}, 1, 4)", erwartet: "3" }
      - { aufruf: "kleinsteGegenueber(new int[]{2, 7, 1, 8}, 0, 3)", erwartet: "8", versteckt: true }
      - { aufruf: "kleinsteGegenueber(new int[]{4, 4, 9, 9}, 0, 3)", erwartet: "13", versteckt: true }
      - { aufruf: "kleinsteGegenueber(new int[]{0, -5, 3, 1, 2, 0}, 1, 4)", erwartet: "-3", versteckt: true }
    regeln: { keineSchleifenIn: [kleinsteGegenueber], rekursiv: [kleinsteGegenueber], keineHilfsmethoden: true, keineFelder: true, keinStringGleichOperator: true, erlaubteApi: ["Math.*"] }
    fehler:
      - { wert: 1, meldung: "Vergleiche die eigene Summe mit dem Ergebnis des inneren Bereichs. `Math.min(summe, …)` liefert die kleinere der beiden." }
      - { wert: 2, meldung: "Liegen `start` und `end` nebeneinander, gibt es nur noch ein Paar. Das ist der Basisfall, er liefert dessen Summe." }
hinweise:
  - Form 3, zwei Indizes laufen aufeinander zu. Jeder Aufruf kennt sein eigenes Paar `seq[start] + seq[end]`.
  - 'Basisfall: `end - start == 1`, das innerste Paar. Sonst die eigene Summe mit dem Ergebnis für `start + 1` und `end - 1` vergleichen.'
loesung: |
  **Ansatz:** Teile und herrsche von außen nach innen. Das Minimum aller Summen ist das Minimum aus der äußeren Summe und dem Minimum aller inneren Summen.
  ---
  Basisfall: `start` und `end` sind Nachbarn. Weil die Anzahl gerade ist, kommt man genau dort an und nie an `start == end`.
  ---
  ```java
  int summe = seq[start] + seq[end];
  if (end - start == 1) {
      return summe;
  }
  return Math.min(summe, kleinsteGegenueber(seq, start + 1, end - 1));
  ```
  ---
  Fortschritt: beide Indizes rücken einen Schritt zur Mitte. Das Ergebnis wird auf dem Rückweg mit `Math.min` gebildet.
  ---
  Probe `(g, 0, 5)`: innen `0 + 6 = 6`, dann `min(1 + 2, 6) = 3`, außen `min(5 + 3, 3) = 3`.
```

## main: Deklarationen und Testfälle

```aufgabe
id: pt-ma-check-ausgabe
titel: Den Inhalt eines zweidimensionalen Arrays zeigen
niveau: 1
art: check
angabe: |
  `int[][] t = {{1, 2}, {3}};` Welche Anweisung gibt `[[1, 2], [3]]` aus?
  (Wiederholung: [14.1 Zweidimensionale Arrays anlegen und lesen](/lernen/ep1/arrays-2d/zweidimensionale-arrays-anlegen-und-lesen))
teile:
  - typ: auswahl
    optionen:
      - '`System.out.println(Arrays.deepToString(t));`'
      - '`System.out.println(Arrays.toString(t));`'
      - '`System.out.println(t);`'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`toString` schaut nur eine Ebene tief. Für jede Zeile erscheint eine Kennung wie `[I@1b6d3586`, nicht ihr Inhalt.'
      - wert: 2
        meldung: '`println` mit einem Array gibt nur eine Kennung wie `[[I@4554617c` aus.'
hinweise:
  - '`deep` heißt „tief“. Die Methode geht in jede Zeile hinein.'
loesung: |
  Nur `Arrays.deepToString` zeigt bei einem Array von Arrays den Inhalt jeder Zeile.
  ---
  `Arrays.toString` passt zu `int[]`, also zu eindimensionalen Arrays.
```

`main` bringt im Test **3 Punkte**: 1 Punkt für die Deklarationen und 2 Punkte für die Testfälle. Das sind die
sichersten Punkte des ganzen Tests, denn hier gibt es nichts zu erfinden. Die Angabe sagt wörtlich, was dastehen soll.
Laut Erfahrungsberichten auf VoWi bringen die Testaufrufe ihre Punkte auch dann, wenn eine Methode noch falsch rechnet.

**Deklarationen:** Schreib jede verlangte Variable genau so ab, wie sie in der Angabe steht. Name, Typ und Werte müssen
stimmen. Aus `int[][] test1 = {{5, 7}, {5}};` wird in deinem Code wörtlich dieselbe Zeile. Fehlt ein Wert oder heißt
die Variable anders, stimmt später auch die Ausgabe der Testfälle nicht.

**Testfälle:** Jede Zeile der Testtabelle wird zu ein oder zwei Zeilen Code. Wie, hängt von der Art der Methode ab.

- **M1 mit Ergebnis:** Aus `result1 = spiegeln(test1)` wird `int[][] result1 = spiegeln(test1);` und danach
  `System.out.println(Arrays.deepToString(result1));`.
- **M2 ohne Ergebnis:** Aus `tauscheNachbarn(test2)` wird zuerst der Aufruf `tauscheNachbarn(test2);`.
  Danach folgt `System.out.println(Arrays.deepToString(test2));`. Die Ausgabe zeigt den **Seiteneffekt**, also das
  veränderte Array.
- **M3 mit einfachem Wert:** Aus `zaehleGroesser(seq, 5, 0)` wird `System.out.println(zaehleGroesser(seq, 5, 0));`.
  Bei `int`, `boolean` und `String` genügt `println`.
- **Arrays im Aufruf:** Steht in der Tabelle etwa `markiere(new int[]{2, -1, 5})`, schreibst du genau diesen Ausdruck
  ab. `new int[]{…}` ist auch als Argument erlaubt. Ein Ergebnis vom Typ `boolean[][]` gibst du mit `Arrays.deepToString` aus.

Für `Arrays.deepToString` und `Arrays.toString` braucht die Datei ganz oben `import java.util.Arrays;`.

:::beispiel[Ein vollständiges main für die Übungsangabe]
Für die Übungsangabe aus [20.1 Aufbau, Bewertung und die Angabe lesen](/lernen/ep1/programmiertest/aufbau-bewertung-und-die-angabe-lesen)
mit `spiegeln`, `tauscheNachbarn` und `zaehleGroesser` sieht `main` so aus:

```java
import java.util.Arrays;

public class Werkstatt {
    // … hier stehen die drei Methoden …

    public static void main(String[] args) {
        int[][] test1 = {{3, 1, 2}, {4, 4}, {9}};          // Deklarationen wörtlich
        int[][] test2 = {{2, 5}, {}, {7, 1, 8}};
        int[] seq = {6, 2, 9, 9, 1, 4};

        int[][] result1 = spiegeln(test1);                  // M1: Ergebnis merken
        System.out.println(Arrays.deepToString(result1));
        System.out.println(result1[0] == test1[0]);         // eigener Zusatztest, erwartet false

        tauscheNachbarn(test2);                             // M2: erst aufrufen
        System.out.println(Arrays.deepToString(test2));     // dann das Array zeigen

        System.out.println(zaehleGroesser(seq, 5, 0));      // M3: Wert direkt ausgeben
        System.out.println(zaehleGroesser(seq, 5, 3));
    }
}
```

Die Ausgabe ist:

```text
[[3, 1, 2], [4, 4], [9], [4, 4], [3, 1, 2]]
false
[[], [2, 5], [7, 1, 8]]
3
1
```

- Jede Ausgabezeile lässt sich mit einer Zeile der Testtabelle vergleichen. So siehst du sofort, welche Methode noch falsch ist.
- Die Zeile `result1[0] == test1[0]` steht nicht in der Tabelle. Die Angabe erlaubt aber „weitere Aufrufe“. Dieser
  Zusatztest prüft, ob `spiegeln` wirklich neue Zeilen anlegt.
:::

:::achtung[Ein Array direkt ausgeben]
Jemand schreibt `System.out.println(result1);`. Auf der Konsole erscheint etwas wie `[[I@6d06d69c`. Das ist der
Typname mit einer Kennung, nicht der Inhalt. Mit `Arrays.toString(result1)` wird es kaum besser:
`[[I@7852e922, [I@4e25154f]`, denn `toString` geht nicht in die Zeilen hinein. Für `int[][]` und `boolean[][]` brauchst
du `Arrays.deepToString`, für `int[]` und `char[]` reicht `Arrays.toString`.
:::

:::achtung[Eine void-Methode in println aufrufen]
Jemand schreibt `System.out.println(tauscheNachbarn(test2));`. Der Compiler meldet `'void' type not allowed here`, und
das ganze Programm lässt sich nicht starten. Eine `void`-Methode liefert keinen Wert, also gibt es nichts auszugeben.
Richtig sind zwei Anweisungen: erst `tauscheNachbarn(test2);`, dann `System.out.println(Arrays.deepToString(test2));`.
:::

```aufgabe
id: pt-ma-lueckentext-ausgaben
titel: Drei Ausgaben in main ergänzen
niveau: 1
lernziel: 5
kompetenz: anwenden
angabe: |
  Die Testtabelle verlangt diese Ausgaben: den Inhalt von `result1`, danach den Inhalt von `test1` nach dem Aufruf von
  `nullen`, danach das Ergebnis von `leer("abc")`. Ergänze die Lücken.
teile:
  - typ: lueckentext
    code: |
      import java.util.Arrays;

      public class Ausgaben {
          public static int[][] kopie(int[][] a) {
              return new int[0][];
          }

          public static void nullen(int[][] a) {
          }

          public static boolean leer(String s) {
              return s.isEmpty();
          }

          public static void main(String[] args) {
              int[][] test1 = {{1}, {2, 3}};
              int[][] result1 = kopie(test1);
              System.out.println(Arrays.___(result1));
              nullen(test1);
              System.out.println(Arrays.deepToString(___));
              System.out.println(___("abc"));
          }
      }
    luecken: [["deepToString"], ["test1"], ["leer"]]
    fehler:
      - wert: ["toString", "test1", "leer"]
        meldung: '`result1` ist ein `int[][]`. `toString` zeigt dafür nur Kennungen der Zeilen. Du brauchst `deepToString`.'
      - wert: ["deepToString", "nullen(test1)", "leer"]
        meldung: '`nullen` ist `void` und liefert nichts. Der Aufruf steht schon in der Zeile davor. Ausgegeben wird das veränderte Array `test1`.'
hinweise:
  - Bei einer `void`-Methode zeigst du nach dem Aufruf das Array, das sie verändert hat.
loesung: |
  **Ansatz:** Für jede Art von Methode die passende Ausgabe wählen.
  ---
  Lücke 1 `deepToString` für das `int[][]`, Lücke 2 `test1` als Seiteneffekt von `nullen`, Lücke 3 der Methodenname `leer`.
```

```aufgabe
id: pt-ma-zeilen-fehler
titel: Fehler in einem main finden
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Gegeben sind `int[][] dreheAlle(int[][] a)`, `void nullen(int[][] a)` und `int zaehle(int[] seq, int index)`. Das
  folgende `main` soll für jeden Testfall den Inhalt des Arrays oder den Wert ausgeben. Markiere **alle** Zeilen, die das nicht
  leisten oder nicht übersetzt werden.
teile:
  - typ: zeilen
    code: |
      public static void main(String[] args) {
          int[][] test1 = {{4, 2}, {7}};
          int[] seq = {3, 1, 2};
          int[][] result1 = dreheAlle(test1);
          System.out.println(result1);
          System.out.println(Arrays.deepToString(nullen(test1)));
          System.out.println(zaehle(seq, 0));
      }
    loesung: [5, 6]
    fehler:
      - wert: [5]
        meldung: Zeile 6 übersetzt nicht. `nullen` ist `void`, sein Aufruf hat keinen Wert, den `deepToString` bekommen könnte.
      - wert: [6]
        meldung: Zeile 5 übersetzt zwar, gibt aber nur eine Kennung wie `[[I@…` aus statt des Inhalts.
      - wert: [5, 6, 7]
        meldung: '`zaehle` liefert einen `int`. Den darf `println` direkt ausgeben, Zeile 7 ist richtig.'
hinweise:
  - Prüfe für jede Ausgabe, welchen Typ der Ausdruck in den Klammern hat.
loesung: |
  **Ansatz:** Für jede Ausgabezeile den Typ des Arguments bestimmen.
  ---
  Zeile 5 gibt ein `int[][]` direkt aus, also nur eine Kennung. Zeile 6 übergibt den „Wert“ einer `void`-Methode, das übersetzt nicht.
  ---
  Richtig wäre in Zeile 5 `Arrays.deepToString(result1)`. Zeile 6 wird zu `nullen(test1);` und danach `System.out.println(Arrays.deepToString(test1));`.
```

:::beispiel[Die Reihenfolge der Testfälle zählt]
Testtabellen enthalten oft mehrere Aufrufe auf **demselben** Array. Jeder Aufruf sieht das Array so, wie die
vorherigen es hinterlassen haben. Die Tabelle aus dem Jänner 2022 war genau so gebaut. Hier ist dasselbe Muster mit
`dreheZeilen` aus [20.4 Methode 2: ein Array an Ort und Stelle verändern](/lernen/ep1/programmiertest/methode-2-ein-array-an-ort-und-stelle-veraendern):

```text
int[][] test3 = {{6}, {7, 7}, {}, {8}};

Aufruf                     Ausgabe in main
dreheZeilen(test3, 1, 1)   [[6], [7, 7], [], [8]]
dreheZeilen(test3, 3, 0)   [[8], [], [7, 7], [6]]
```

Der erste Aufruf ändert nichts, denn der Bereich hat nur eine Zeile. Der zweite Aufruf dreht dann das unveränderte
Array um. In `main` stehen beide Aufrufe in genau dieser Reihenfolge, jeweils mit einer Ausgabe dahinter:

```java
dreheZeilen(test3, 1, 1);
System.out.println(Arrays.deepToString(test3));
dreheZeilen(test3, 3, 0);
System.out.println(Arrays.deepToString(test3));
```

Vertauscht man die beiden Aufrufe, stimmt die erste Ausgabe nicht mehr mit der Tabelle überein. Darum gilt: Testfälle
in der Reihenfolge der Tabelle schreiben und **nach jedem** Aufruf einer M2-Methode ausgeben.
:::

```aufgabe
id: pt-ma-gefuehrt-geteilt
titel: Wenn M1 die Zeilen teilt
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  `kopiere` soll eine Kopie liefern, übernimmt aber nur die Zeilenverweise. `verdopple` verdoppelt jeden Wert an Ort
  und Stelle. Was gibt `main` aus? Löse die Aufgabe zuerst geführt.
teile:
  - typ: ausgabe
    code: |
      import java.util.Arrays;

      public class Geteilt {
          public static int[][] kopiere(int[][] input) {
              int[][] r = new int[input.length][];
              for (int i = 0; i < input.length; i++) {
                  r[i] = input[i];
              }
              return r;
          }

          public static void verdopple(int[][] a) {
              for (int i = 0; i < a.length; i++) {
                  for (int j = 0; j < a[i].length; j++) {
                      a[i][j] = 2 * a[i][j];
                  }
              }
          }

          public static void main(String[] args) {
              int[][] test1 = {{1, 2}, {3}};
              int[][] result1 = kopiere(test1);
              System.out.println(Arrays.deepToString(result1));
              verdopple(test1);
              System.out.println(Arrays.deepToString(test1));
              System.out.println(Arrays.deepToString(result1));
              System.out.println(result1[0] == test1[0]);
          }
      }
    loesung: |
      [[1, 2], [3]]
      [[2, 4], [6]]
      [[2, 4], [6]]
      true
    fehler:
      - wert: "[[1, 2], [3]]\n[[2, 4], [6]]\n[[1, 2], [3]]\nfalse"
        meldung: So sähe eine echte Kopie aus. `kopiere` legt aber keine neuen Zeilen an. `result1[i]` und `test1[i]` sind dieselben Zeilen, also sieht man die Verdopplung über beide Namen.
      - wert: "[[1, 2], [3]]\n[[2, 4], [6]]\n[[2, 4], [6]]\nfalse"
        meldung: Der Inhalt hat sich gemeinsam geändert, weil die Zeilen geteilt sind. Genau das zeigt `==` mit `true`.
gefuehrt:
  - text: Legt `kopiere` mit `new` neue Zeilen an?
    teil:
      typ: auswahl
      optionen: ['nein, nur das äußere Array ist neu', 'ja, für jede Zeile']
      richtig: [0]
    erklaerung: '`new int[input.length][]` legt nur die Plätze für Zeilen an. Danach wird `r[i] = input[i]` gesetzt, also derselbe Verweis.'
  - text: Welchen Wert hat `result1[0][1]`, nachdem `verdopple(test1)` gelaufen ist?
    teil: { typ: zahl, loesung: "2 * 2" }
    erklaerung: '`result1[0]` ist dieselbe Zeile wie `test1[0]`. Die 2 wurde dort zu 4.'
  - text: Welches Ergebnis würde ein Testfall `result1[0] == test1[0]` bei einer **richtigen** M1 zeigen?
    teil:
      typ: auswahl
      optionen: ['false', 'true']
      richtig: [0]
    erklaerung: Eine richtige Kopie legt eigene Zeilen an. Zwei verschiedene Arrays sind nie `==`.
hinweise:
  - Verfolge, welche Variablen auf welche Zeile zeigen. `kopiere` erzeugt keine neue Zeile.
  - '`==` zwischen zwei Zeilen ist `true`, wenn beide dasselbe Array sind.'
loesung: |
  **Ansatz:** Zeilenverweise verfolgen. `result1` ist ein neues äußeres Array, aber seine Plätze zeigen auf die Zeilen von `test1`.
  ---
  Nach `verdopple(test1)` sind die gemeinsamen Zeilen `{2, 4}` und `{6}`. Beide Ausgaben zeigen das.
  ---
  `result1[0] == test1[0]` ist `true`. Genau dieser Zusatztest in `main` deckt im Test eine falsche M1 auf.
```

```aufgabe
id: pt-ma-reihenfolge-main
titel: Ein main in die richtige Reihenfolge bringen
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Die Testtabelle lautet:

  ```text
  Aufruf                       Ausgabe in main
  result1 = spiegeln(test1)    [[2, 5], [], [7, 1, 8], [], [2, 5]]
  tauscheNachbarn(test1)       [[], [2, 5], [7, 1, 8]]
  zaehleGroesser(seq, 5, 0)    3
  ```

  Bringe die Zeilen von `main` in eine Reihenfolge, die genau diese Ausgabe erzeugt.
teile:
  - typ: reihenfolge
    elemente:
      - '`int[][] test1 = {{2, 5}, {}, {7, 1, 8}}; int[] seq = {6, 2, 9, 9, 1, 4};`'
      - '`int[][] result1 = spiegeln(test1);`'
      - '`System.out.println(Arrays.deepToString(result1));`'
      - '`tauscheNachbarn(test1);`'
      - '`System.out.println(Arrays.deepToString(test1));`'
      - '`System.out.println(zaehleGroesser(seq, 5, 0));`'
    fehler:
      - wert: [0, 3, 4, 1, 2, 5]
        meldung: Wenn `tauscheNachbarn` zuerst läuft, bekommt `spiegeln` schon das veränderte Array. Die erste Ausgabe wäre dann `[[], [2, 5], …]`.
hinweise:
  - Deklarationen zuerst. Danach jeder Testfall in der Reihenfolge der Tabelle, jeweils Aufruf und Ausgabe.
  - Eine M2-Methode wird erst aufgerufen, dann wird das Array ausgegeben.
loesung: |
  **Ansatz:** Deklarationen vor allen Aufrufen, dann die Tabelle von oben nach unten.
  ---
  `spiegeln` muss `test1` im Originalzustand bekommen, also vor `tauscheNachbarn`. Nach dem Tausch zeigt die Ausgabe von `test1` den Seiteneffekt.
  ---
  Zuletzt der Wert von `zaehleGroesser`. Er hängt nicht von `test1` ab.
```

```aufgabe
id: pt-ma-ausgabe-folge
titel: Erst tauschen, dann spiegeln
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  `spiegeln` und `tauscheNachbarn` aus der Übungsangabe in [20.1 Aufbau, Bewertung und die Angabe lesen](/lernen/ep1/programmiertest/aufbau-bewertung-und-die-angabe-lesen)
  sind richtig implementiert. Was gibt dieser Teil von `main` aus?

  ```java
  int[][] t = {{1}, {2, 2}, {3, 3, 3}};
  tauscheNachbarn(t);
  int[][] r = spiegeln(t);
  System.out.println(Arrays.deepToString(r));
  tauscheNachbarn(r);
  System.out.println(Arrays.deepToString(r));
  System.out.println(Arrays.deepToString(t));
  ```
teile:
  - typ: ausgabe
    codeAnzeigen: false
    code: |
      import java.util.Arrays;

      public class Folge {
          public static int[][] spiegeln(int[][] input) {
              int n = input.length;
              int[][] r = new int[2 * n - 1][];
              for (int i = 0; i < r.length; i++) {
                  int q = i;
                  if (i >= n) {
                      q = 2 * n - 2 - i;
                  }
                  r[i] = new int[input[q].length];
                  for (int j = 0; j < r[i].length; j++) {
                      r[i][j] = input[q][j];
                  }
              }
              return r;
          }

          public static void tauscheNachbarn(int[][] input) {
              for (int i = 0; i + 1 < input.length; i += 2) {
                  int[] h = input[i];
                  input[i] = input[i + 1];
                  input[i + 1] = h;
              }
          }

          public static void main(String[] args) {
              int[][] t = {{1}, {2, 2}, {3, 3, 3}};
              tauscheNachbarn(t);
              int[][] r = spiegeln(t);
              System.out.println(Arrays.deepToString(r));
              tauscheNachbarn(r);
              System.out.println(Arrays.deepToString(r));
              System.out.println(Arrays.deepToString(t));
          }
      }
    loesung: |
      [[2, 2], [1], [3, 3, 3], [1], [2, 2]]
      [[1], [2, 2], [1], [3, 3, 3], [2, 2]]
      [[2, 2], [1], [3, 3, 3]]
    fehler:
      - wert: "[[1], [2, 2], [3, 3, 3], [2, 2], [1]]\n[[2, 2], [1], [2, 2], [3, 3, 3], [1]]\n[[2, 2], [1], [3, 3, 3]]"
        meldung: '`spiegeln` sieht `t` erst nach dem Tausch. Zu diesem Zeitpunkt ist `t = {{2, 2}, {1}, {3, 3, 3}}`.'
      - wert: "[[2, 2], [1], [3, 3, 3], [1], [2, 2]]\n[[1], [2, 2], [1], [3, 3, 3], [2, 2]]\n[[1], [2, 2], [3, 3, 3]]"
        meldung: Der zweite Tausch betrifft nur `r`. `spiegeln` legt neue Zeilen an, und `t` hat seit dem ersten Tausch keine Änderung mehr erfahren.
hinweise:
  - Arbeite die Anweisungen streng von oben nach unten ab und schreib nach jeder den Zustand von `t` und `r` auf.
  - '`tauscheNachbarn(r)` tauscht in `r` die Paare (0, 1) und (2, 3). Die Zeile mit Index 4 bleibt, wo sie ist.'
loesung: |
  **Ansatz:** Zustand nach jeder Anweisung notieren.
  ---
  Nach dem ersten Tausch ist `t = {{2, 2}, {1}, {3, 3, 3}}`. `spiegeln(t)` liefert fünf neue Zeilen `[2, 2], [1], [3, 3, 3], [1], [2, 2]`.
  ---
  `tauscheNachbarn(r)` tauscht in `r` die Paare (0, 1) und (2, 3). `t` bleibt unverändert, weil `r` eigene Zeilen hat.
```

```aufgabe
id: pt-ma-code-main
titel: Eine Testtabelle in main umsetzen
niveau: 2
lernziel: 5
kompetenz: anwenden
quelle: nach den Testtabellen der Programmiertests 2021 bis 2023 (Deklarationen 1 Punkt, Testfälle 2 Punkte)
angabe: |
  Die drei Methoden der Klasse sind fertig. Schreib nur `main`. Deklariere `test1` und `wort` wie verlangt und erzeuge
  genau die Ausgaben der Tabelle, jede in einer eigenen Zeile, in dieser Reihenfolge.

  ```text
  Deklarieren und initialisieren Sie in main:
  int[][] test1 = {{1, 2, 3}, {4}, {}};
  String wort = "Lampe";

  Aufruf                   Ausgabe in main
  result1 = umgekehrt(test1)   [[3, 2, 1], [4], []]
  nullSetzen(test1, 0)         [[0, 0, 0], [4], []]
  enthaelt(wort, 'p')          true
  enthaelt(wort, 'P')          false
  ```
teile:
  - typ: code
    vorlage: |
      import java.util.Arrays;

      public class Tabelle {
          public static int[][] umgekehrt(int[][] input) {
              int[][] r = new int[input.length][];
              for (int i = 0; i < input.length; i++) {
                  int n = input[i].length;
                  r[i] = new int[n];
                  for (int j = 0; j < n; j++) {
                      r[i][j] = input[i][n - 1 - j];
                  }
              }
              return r;
          }

          public static void nullSetzen(int[][] a, int zeile) {
              for (int j = 0; j < a[zeile].length; j++) {
                  a[zeile][j] = 0;
              }
          }

          public static boolean enthaelt(String s, char c) {
              if (s.isEmpty()) {
                  return false;
              }
              return s.charAt(0) == c || enthaelt(s.substring(1), c);
          }

          public static void main(String[] args) {
              // TODO
          }
      }
    musterloesung: |
      import java.util.Arrays;

      public class Tabelle {
          public static int[][] umgekehrt(int[][] input) {
              int[][] r = new int[input.length][];
              for (int i = 0; i < input.length; i++) {
                  int n = input[i].length;
                  r[i] = new int[n];
                  for (int j = 0; j < n; j++) {
                      r[i][j] = input[i][n - 1 - j];
                  }
              }
              return r;
          }

          public static void nullSetzen(int[][] a, int zeile) {
              for (int j = 0; j < a[zeile].length; j++) {
                  a[zeile][j] = 0;
              }
          }

          public static boolean enthaelt(String s, char c) {
              if (s.isEmpty()) {
                  return false;
              }
              return s.charAt(0) == c || enthaelt(s.substring(1), c);
          }

          public static void main(String[] args) {
              int[][] test1 = {{1, 2, 3}, {4}, {}};
              String wort = "Lampe";
              int[][] result1 = umgekehrt(test1);
              System.out.println(Arrays.deepToString(result1));
              nullSetzen(test1, 0);
              System.out.println(Arrays.deepToString(test1));
              System.out.println(enthaelt(wort, 'p'));
              System.out.println(enthaelt(wort, 'P'));
          }
      }
    tests:
      - { stdout: "[[3, 2, 1], [4], []]\n[[0, 0, 0], [4], []]\ntrue\nfalse\n", beschreibung: "Ausgabe von main wie in der Tabelle" }
    regeln: { keineHilfsmethoden: true, keineFelder: true, keineArrayKopie: true }
    fehler:
      - { wert: 1, meldung: "Vergleiche Zeile für Zeile mit der Tabelle. Zeigst du nach `nullSetzen` das Array `test1`? Benutzt du für `int[][]` die Methode `Arrays.deepToString`?" }
hinweise:
  - Erst die zwei Deklarationen wörtlich abschreiben. Dann jede Tabellenzeile umsetzen.
  - '`umgekehrt` liefert ein Ergebnis, das du in `result1` speicherst und ausgibst. `nullSetzen` ist `void`, danach gibst du `test1` aus.'
loesung: |
  **Ansatz:** Deklarationen wörtlich, dann je Tabellenzeile Aufruf und passende Ausgabe.
  ---
  ```java
  int[][] test1 = {{1, 2, 3}, {4}, {}};
  String wort = "Lampe";
  int[][] result1 = umgekehrt(test1);
  System.out.println(Arrays.deepToString(result1));
  nullSetzen(test1, 0);
  System.out.println(Arrays.deepToString(test1));
  System.out.println(enthaelt(wort, 'p'));
  System.out.println(enthaelt(wort, 'P'));
  ```
  ---
  `result1` bleibt nach `nullSetzen` unverändert, weil `umgekehrt` eigene Zeilen anlegt. Das könnte ein Zusatztest zeigen.
  ---
  Probe: `"Lampe"` enthält ein kleines `p`, aber kein großes `P`. Ausgaben `true` und `false`.
```

```reflexion
frage: Warum gehören die Ausgaben in main und nicht in die Methoden selbst, obwohl es bequemer wäre, das Ergebnis gleich in der Methode zu drucken?
antwort: |
  Eine Methode soll genau eine Aufgabe erledigen: M1 liefert ein Array, M2 verändert eines, M3 liefert einen Wert. Wer
  die Methode benutzt, entscheidet selbst, was mit dem Ergebnis passiert. Druckt die Methode selbst, entstehen bei jedem
  Aufruf zusätzliche Zeilen, auch in fremden Tests, und die Ausgabe passt nicht mehr zur erwarteten. Bei einer
  rekursiven Methode wäre es noch schlimmer, weil jeder Selbstaufruf drucken würde. Darum verlangen die Angaben
  ausdrücklich: Ausgaben nur in main.
```

```aufgabe
id: pt-ma-code-main-gross
titel: Ein vollständiges main mit Zusatztest
niveau: 3
lernziel: 5
kompetenz: anwenden
quelle: nach den Testtabellen der Programmiertests 2021 bis 2023, mit Test auf geteilte Zeilen
angabe: |
  Die drei Methoden der Übungsangabe sind fertig. Schreib nur `main`. Deklariere die Variablen wie verlangt und erzeuge
  genau diese Ausgaben, jede in einer eigenen Zeile, in dieser Reihenfolge.

  ```text
  Deklarieren und initialisieren Sie in main:
  int[][] test1 = {{5, 1}, {2}};
  int[][] test2 = {{7}, {8, 8}, {9}};
  int[] seq = {4, 9, 1, 7};

  Aufruf                                 Ausgabe in main
  result1 = spiegeln(test1)              [[5, 1], [2], [5, 1]]
  result1[0] == test1[0]                 false
  tauscheNachbarn(test2)                 [[8, 8], [7], [9]]
  tauscheNachbarn(test1)                 [[2], [5, 1]]
  Arrays.deepToString(result1)           [[5, 1], [2], [5, 1]]
  zaehleGroesser(seq, 5, 0)              2
  zaehleGroesser(seq, 5, 2)              1
  zaehleGroesser(new int[]{6}, 6, 0)     0
  ```
teile:
  - typ: code
    vorlage: |
      import java.util.Arrays;

      public class Werkstatt {
          public static int[][] spiegeln(int[][] input) {
              int n = input.length;
              int[][] r = new int[2 * n - 1][];
              for (int i = 0; i < r.length; i++) {
                  int q = i;
                  if (i >= n) {
                      q = 2 * n - 2 - i;
                  }
                  r[i] = new int[input[q].length];
                  for (int j = 0; j < r[i].length; j++) {
                      r[i][j] = input[q][j];
                  }
              }
              return r;
          }

          public static void tauscheNachbarn(int[][] input) {
              for (int i = 0; i + 1 < input.length; i += 2) {
                  int[] h = input[i];
                  input[i] = input[i + 1];
                  input[i + 1] = h;
              }
          }

          public static int zaehleGroesser(int[] seq, int grenze, int index) {
              if (index >= seq.length) {
                  return 0;
              }
              int eins = 0;
              if (seq[index] > grenze) {
                  eins = 1;
              }
              return eins + zaehleGroesser(seq, grenze, index + 1);
          }

          public static void main(String[] args) {
              // TODO
          }
      }
    musterloesung: |
      import java.util.Arrays;

      public class Werkstatt {
          public static int[][] spiegeln(int[][] input) {
              int n = input.length;
              int[][] r = new int[2 * n - 1][];
              for (int i = 0; i < r.length; i++) {
                  int q = i;
                  if (i >= n) {
                      q = 2 * n - 2 - i;
                  }
                  r[i] = new int[input[q].length];
                  for (int j = 0; j < r[i].length; j++) {
                      r[i][j] = input[q][j];
                  }
              }
              return r;
          }

          public static void tauscheNachbarn(int[][] input) {
              for (int i = 0; i + 1 < input.length; i += 2) {
                  int[] h = input[i];
                  input[i] = input[i + 1];
                  input[i + 1] = h;
              }
          }

          public static int zaehleGroesser(int[] seq, int grenze, int index) {
              if (index >= seq.length) {
                  return 0;
              }
              int eins = 0;
              if (seq[index] > grenze) {
                  eins = 1;
              }
              return eins + zaehleGroesser(seq, grenze, index + 1);
          }

          public static void main(String[] args) {
              int[][] test1 = {{5, 1}, {2}};
              int[][] test2 = {{7}, {8, 8}, {9}};
              int[] seq = {4, 9, 1, 7};
              int[][] result1 = spiegeln(test1);
              System.out.println(Arrays.deepToString(result1));
              System.out.println(result1[0] == test1[0]);
              tauscheNachbarn(test2);
              System.out.println(Arrays.deepToString(test2));
              tauscheNachbarn(test1);
              System.out.println(Arrays.deepToString(test1));
              System.out.println(Arrays.deepToString(result1));
              System.out.println(zaehleGroesser(seq, 5, 0));
              System.out.println(zaehleGroesser(seq, 5, 2));
              System.out.println(zaehleGroesser(new int[]{6}, 6, 0));
          }
      }
    tests:
      - { stdout: "[[5, 1], [2], [5, 1]]\nfalse\n[[8, 8], [7], [9]]\n[[2], [5, 1]]\n[[5, 1], [2], [5, 1]]\n2\n1\n0\n", beschreibung: "Ausgabe von main wie in der Tabelle" }
    regeln: { keineHilfsmethoden: true, keineFelder: true, keineArrayKopie: true }
    fehler:
      - { wert: 1, meldung: "Vergleiche Zeile für Zeile. Steht `result1[0] == test1[0]` direkt in `println`? Gibst du nach jedem `tauscheNachbarn` das veränderte Array aus? Steht der Aufruf mit `new int[]{6}` wörtlich da?" }
hinweise:
  - Drei Deklarationen, dann acht Ausgaben. Jede M2-Zeile der Tabelle braucht einen Aufruf und eine Ausgabe.
  - '`result1[0] == test1[0]` ist ein `boolean`-Ausdruck. Du kannst ihn direkt in `println` schreiben.'
loesung: |
  **Ansatz:** Deklarationen, dann die Tabelle Zeile für Zeile. Bei jeder Zeile entscheiden, ob es ein Ergebnis gibt oder ein Seiteneffekt gezeigt wird.
  ---
  ```java
  int[][] result1 = spiegeln(test1);
  System.out.println(Arrays.deepToString(result1));
  System.out.println(result1[0] == test1[0]);
  tauscheNachbarn(test2);
  System.out.println(Arrays.deepToString(test2));
  tauscheNachbarn(test1);
  System.out.println(Arrays.deepToString(test1));
  System.out.println(Arrays.deepToString(result1));
  ```
  ---
  Der Vergleich mit `==` liefert `false`, weil `spiegeln` eigene Zeilen anlegt. Darum bleibt `result1` auch nach `tauscheNachbarn(test1)` unverändert.
  ---
  Die M3-Aufrufe gibst du direkt aus. `new int[]{6}` steht wörtlich im Aufruf, denn `6 > 6` ist falsch, also 0.
  ---
  Probe: In `{4, 9, 1, 7}` sind 9 und 7 größer als 5, also 2. Ab Index 2 nur noch die 7, also 1.
```

## Zeitplan, Teilpunkte und Varianten

```aufgabe
id: pt-zv-check-raster
titel: Wofür gibt es in M3 die meisten Punkte?
niveau: 1
art: check
angabe: |
  Im Raster der rekursiven Methode vom Jänner 2022 stehen sechs Posten. Welcher davon bringt die meisten Punkte?
  (Wiederholung: [10.6 Rekursiv nach Vorgabe: Schleifenverbot und Bewertung](/lernen/ep1/rekursion/rekursiv-nach-vorgabe-schleifenverbot-und-bewertung))
teile:
  - typ: auswahl
    optionen:
      - der korrekte Rückgabewert
      - der vorhandene Basisfall
      - der korrekte Fortschritt
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Ein vorhandener Basisfall bringt 1 Punkt. Der richtige Rückgabewert bringt 4.
      - wert: 2
        meldung: Ein korrekter Fortschritt bringt 1 Punkt. Der richtige Rückgabewert bringt 4.
hinweise:
  - Im Jänner 2022 waren es 1 + 1 + 1 + 1 + 1 + 4 Punkte.
loesung: |
  Der korrekte Rückgabewert brachte 4 von 9 Punkten.
  ---
  Basisfall und Fortschritt brachten je 1 Punkt für „vorhanden“ und 1 Punkt für „korrekt“.
```

Der Test belohnt nicht, wer am längsten an einer perfekten Methode feilt, sondern wer bei **allen** Teilen Punkte
sammelt. Ein Plan hilft, nicht an einer Stelle hängenzubleiben. Laut Erfahrungsberichten auf VoWi dauerte der Test bisher 60 bis 75
Minuten für 30 Punkte. Bei 75 Minuten sind das 2,5 Minuten pro Punkt. Wie lange der Test 2026W dauert, steht noch nicht
fest. Darum rechnest du unten einen Plan für 75 und einen für 60 Minuten.

Drei Regeln stecken hinter jedem guten Plan:

1. **Erst ein übersetzbares Gerüst.** In den ersten Minuten liest du die ganze Angabe. Dann schreibst du die
   Deklarationen und alle Testaufrufe in `main`. Jede Methode bekommt einen Rumpf, der übersetzt, etwa `return null;`,
   `return false;` oder einen leeren Rumpf. Damit läuft das Programm nach etwa 10 Minuten, und jede fertige Methode lässt sich
   sofort testen.
2. **Jede Methode hat ein Zeitbudget.** Ist es abgelaufen, gehst du zur nächsten. Eine halbe Methode mit richtiger Form
   bringt Teilpunkte. Eine nicht begonnene bringt keine.
3. **Am Ende bleibt Zeit für eine Kontrolle.** Läuft alles ohne Compilerfehler? Stimmt jede Ausgabe mit der Tabelle
   überein? Ist jeder Randfall aus deiner Fallliste getestet?

:::beispiel[Ein Zeitplan für 75 Minuten]
Die Punkte seien wie im Jänner 2022 verteilt: `main` 3, M1 9, M2 9, M3 9. Nach 5 Minuten Lesen und mit 10
Minuten Kontrolle am Ende bleiben `75 − 5 − 10 = 60` Minuten. Verteilt nach Punkten sind das `60 / 30 = 2` Minuten pro
Punkt.

```text
Minute  0 bis  5   Angabe lesen, Beispielbilder nachrechnen, Fallliste je Methode
Minute  5 bis 11   Gerüst: Deklarationen, Testaufrufe, Methoden mit return null / false   (main, 3 Punkte)
Minute 11 bis 29   M3, die rekursive Methode                                              (9 Punkte)
Minute 29 bis 47   M1, das neue Array                                                      (9 Punkte)
Minute 47 bis 65   M2, die Veränderung an Ort und Stelle                                   (9 Punkte)
Minute 65 bis 75   Kontrolle: Ausgaben gegen die Tabelle, Randfälle, Einschränkungen
```

- Warum M3 zuerst? Rekursive Methoden sind kurz. Wer Basisfall und Fortschritt sicher beherrscht, hat dort in wenigen
  Minuten viele Punkte. Wer bei Rekursion unsicher ist, beginnt besser mit M1. Wichtig ist nur: Beginne mit der
  Methode, bei der du dir am sichersten bist.
- Jede Methode bekommt 18 Minuten, also 2 Minuten pro Punkt. Ist eine Methode nach 18 Minuten nicht fertig, wird sie
  übersetzbar gemacht, und es geht weiter. Eine übrige Minute wandert ans Ende.
- Die Kontrolle am Ende ist keine Reserve für eine unfertige Methode. Sie findet die kleinen Fehler, die am meisten
  kosten, zum Beispiel eine falsche Deklaration.
:::

:::achtung[An einer Methode hängenbleiben]
Jemand beginnt mit M1, findet einen Fehler bei leeren Zeilen und sucht ihn 40 Minuten lang. M2 und M3 sind danach nur
noch halb oder gar nicht begonnen. Rechne nach: M1 bringt im besten Fall 9 Punkte, und der Fehler kostet vielleicht 2
davon. M3 nicht anzufangen kostet alle 9. Wer nach 18 Minuten weitergeht und am Ende zurückkommt, verliert höchstens
die 2 Punkte, bekommt aber die Chance auf die anderen 18.
:::

```aufgabe
id: pt-zv-zahl-minuten
titel: Ein Zeitbudget für M1
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Der Test dauert 75 Minuten. Du planst 5 Minuten zum Lesen und 10 Minuten Kontrolle am Ende ein.
  Die übrige Zeit verteilst du nach Punkten. Es gibt `main` 3, M1 10, M2 9 und M3 8 Punkte. Wie viele Minuten
  bekommt M1?
teile:
  - typ: zahl
    loesung: "(75 - 5 - 10) * 10 / 30"
    einheit: min
    fehler:
      - wert: "25"
        meldung: Du hast die ganzen 75 Minuten verteilt. Lesen und Kontrolle sind schon verplant, verteilt werden nur `75 − 15 = 60` Minuten.
      - wert: "15"
        meldung: Gleich viel Zeit für alle vier Teile passt nicht zu den Punkten. M1 bringt 10 von 30 Punkten, also ein Drittel der verfügbaren Zeit.
hinweise:
  - Ziehe zuerst die verplanten Minuten ab. Dann ist der Anteil von M1 gleich 10 von 30 Punkten.
loesung: |
  **Ansatz:** Verfügbare Zeit mal Punkteanteil.
  ---
  Verfügbar sind `75 − 5 − 10 = 60` Minuten. M1 bringt `10 / 30`, also ein Drittel der Punkte.
  ---
  `60 · 10 / 30 = 20` Minuten. Probe: Alle Teile zusammen bekommen `2 · (3 + 10 + 9 + 8) = 60` Minuten.
```

```aufgabe
id: pt-zv-auswahl-start
titel: Die ersten Minuten
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: Womit verbringst du die ersten Minuten des Tests am sinnvollsten?
teile:
  - typ: auswahl
    optionen:
      - Angabe ganz lesen, Deklarationen und Testaufrufe in main schreiben, jede Methode mit einer übersetzbaren Rückgabe anlegen
      - sofort mit M1 beginnen, weil sie die meisten Punkte bringt
      - zuerst die schwerste Methode lösen, solange man noch frisch ist
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Ohne Gerüst lässt sich M1 nicht testen, und `main` mit seinen 3 sicheren Punkten bleibt liegen. Fünf Minuten Gerüst sparen später viel Zeit.
      - wert: 2
        meldung: Wer mit der schwersten Methode beginnt, riskiert, dort hängenzubleiben. Sichere zuerst die Punkte, die sicher sind.
hinweise:
  - Welche Punkte sind im Test ohne jede Idee zu holen?
loesung: |
  **Ansatz:** Erst sichere Punkte und ein laufendes Programm, dann die Methoden.
  ---
  Das Gerüst bringt die Deklarationen in `main` und macht jede spätere Methode sofort testbar. Danach folgt die Methode, bei der du am sichersten bist.
```

```aufgabe
id: pt-zv-rf-teilpunkte
titel: Wo es Teilpunkte gibt
niveau: 2
lernziel: 6
kompetenz: begruenden
quelle: Bewertungsraster der Programmiertests 2021 bis 2023
angabe: Beurteile jede Aussage über Teilpunkte im Programmiertest.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Eine M1, die die richtige Zeilenzahl liefert, aber falsche Werte, kann trotzdem Punkte bringen.
        richtig: true
        erklaerung: Das Raster enthält Posten wie „Korrekte Anzahl der Zeilen“ oder „Richtige Dimensionen“.
      - text: Die Deklarationen in main bringen ihren Punkt auch dann, wenn keine Methode fertig ist.
        richtig: true
        erklaerung: Der Posten „Deklarationen“ ist von den Methoden unabhängig.
      - text: Im Raster vom Jänner 2022 bringen in M3 Basisfall und Fortschritt zusammen **mehr** Punkte als der richtige Rückgabewert.
        richtig: false
        erklaerung: Basisfall und Fortschritt, je vorhanden und korrekt, ergeben 4 Punkte. Der Rückgabewert bringt ebenfalls 4, also nicht mehr.
      - text: Wenn die Zeit knapp wird, ist eine fertige Schleifenlösung für M3 besser als eine unvollständige Rekursion.
        richtig: false
        erklaerung: Eine Schleife verstößt gegen die Einschränkungen. Eine Rekursion mit richtigem Basisfall und Fortschritt bringt dagegen Teilpunkte.
    fehler:
      - wert: [r, r, r, f]
        meldung: Zähle die Raster-Posten von Basisfall und Fortschritt genau. Vorhanden und korrekt bringen je 1 Punkt.
      - wert: [r, r, f, r]
        meldung: Eine Schleife in der rekursiven Methode verstößt gegen die Einschränkungen. Das Ergebnis zählt dann nicht als Lösung.
hinweise:
  - Das Raster vergibt Punkte für Teilziele. Überlege bei jeder Aussage, welcher Posten betroffen ist.
  - 'Rekursion im Jänner 2022: 1 + 1 + 1 + 1 + 1 + 4 Punkte.'
loesung: |
  **Ansatz:** Jede Aussage mit den Posten des Rasters vergleichen.
  ---
  Richtige Form und Deklarationen bringen eigene Punkte. Aussagen 1 und 2 sind richtig.
  ---
  Basisfall und Fortschritt bringen 4 Punkte, genauso viel wie der Rückgabewert, nicht mehr. Eine Schleife ist ein Verstoß. Aussagen 3 und 4 sind falsch.
```

```aufgabe
id: pt-zv-gefuehrt-plan
titel: Ein Plan für 60 Minuten
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Angenommen, der Test dauert nur 60 Minuten. Du planst wieder 5 Minuten Lesen und 10 Minuten Kontrolle
  ein. Die übrige Zeit verteilst du nach Punkten auf 30 Punkte. Wie viele Minuten bekommt M2 mit 9 Punkten? Löse die
  Aufgabe zuerst geführt.
teile:
  - typ: zahl
    loesung: "(60 - 5 - 10) * 9 / 30"
    einheit: min
    fehler:
      - wert: "18"
        meldung: 18 Minuten wären es bei 60 frei verteilbaren Minuten. Lesen und Kontrolle sind aber abgezogen.
      - wert: "11.25"
        meldung: Verteilt wird nach Punkten, nicht gleichmäßig auf vier Teile. M2 bekommt 9 von 30 Punkten.
gefuehrt:
  - text: Wie viele Minuten bleiben zum Verteilen?
    teil: { typ: zahl, loesung: "60 - 5 - 10" }
    erklaerung: '`60 − 5 − 10 = 45` Minuten.'
  - text: Wie viele Minuten sind das pro Punkt?
    teil: { typ: zahl, loesung: "45 / 30" }
    erklaerung: '`45 / 30 = 1,5` Minuten pro Punkt.'
  - text: Wie viele Minuten bekommt M2?
    teil: { typ: zahl, loesung: "1.5 * 9" }
    erklaerung: '`1,5 · 9 = 13,5` Minuten.'
hinweise:
  - Erst die freie Zeit, dann die Zeit pro Punkt, dann die Methode.
  - Freie Zeit ist Gesamtzeit minus Lesen minus Kontrolle.
loesung: |
  **Ansatz:** Freie Zeit durch Gesamtpunkte ergibt die Zeit pro Punkt.
  ---
  Freie Zeit `45` Minuten, also `1,5` Minuten pro Punkt.
  ---
  M2 bekommt `1,5 · 9 = 13,5` Minuten. Bei 60 Minuten ist der Plan deutlich enger, darum lohnt sich das Gerüst noch mehr.
```

```aufgabe
id: pt-zv-code-retten
titel: Eine fast fertige Methode retten
niveau: 3
lernziel: 6
kompetenz: anwenden
quelle: Prüfungssituation „Kontrolle am Ende“, Inhalt neu
angabe: |
  Es bleiben 8 Minuten. `raender(input)` soll ein neues Array liefern. Jede Zeile besteht aus dem **ersten** und dem
  **letzten** Element der Eingabezeile. Eine Zeile mit nur einem Element `x` wird zu `{x, x}`, eine leere Zeile bleibt
  leer. Keine Zeile darf mit `input` geteilt werden. Die Vorlage übersetzt, scheitert aber an Randfällen. Finde die
  Fehler mit den Tests und repariere sie mit möglichst kleinen Änderungen. Vorbedingung: `input != null`, keine Zeile
  ist `null`.

  ```text
  raender({{3, 8, 1}, {5}, {}})   liefert {{3, 1}, {5, 5}, {}}
  ```
teile:
  - typ: code
    vorlage: |
      public class Raender {
          public static int[][] raender(int[][] input) {
              int[][] r = new int[input.length][];
              for (int i = 0; i < input.length; i++) {
                  int n = input[i].length;
                  if (n <= 2) {
                      r[i] = input[i];
                  } else {
                      r[i] = new int[]{input[i][0], input[i][n - 1]};
                  }
              }
              return r;
          }
      }
    musterloesung: |
      public class Raender {
          public static int[][] raender(int[][] input) {
              int[][] r = new int[input.length][];
              for (int i = 0; i < input.length; i++) {
                  int n = input[i].length;
                  if (n == 0) {
                      r[i] = new int[0];
                  } else {
                      r[i] = new int[]{input[i][0], input[i][n - 1]};
                  }
              }
              return r;
          }
      }
    tests:
      - { aufruf: "raender(new int[][]{{3, 8, 1}, {5}, {}})", erwartet: "new int[][]{{3, 1}, {5, 5}, {}}" }
      - { aufruf: "raender(new int[][]{{}})", erwartet: "new int[][]{{}}", beschreibung: "nur eine leere Zeile" }
      - { vorher: "int[][] t = {{2, 4}, {}}; int[][] r = raender(t);", aufruf: "r[0] != t[0] && r[1] != t[1]", erwartet: "true", beschreibung: "keine Zeile geteilt, auch keine kurze" }
      - { aufruf: "raender(new int[][]{{9, 9, 9, 9}, {0, 7}})", erwartet: "new int[][]{{9, 9}, {0, 7}}", versteckt: true }
    regeln: { keineHilfsmethoden: true, keineFelder: true, keineArrayKopie: true, erlaubteApi: ["Math.*"] }
    fehler:
      - { wert: 1, meldung: "Eine Zeile mit einem Element `x` soll zu `{x, x}` werden. Die Vorlage übernimmt sie unverändert. Der Sonderfall gilt nur für die leere Zeile." }
      - { wert: 3, meldung: "Auch kurze Zeilen müssen neue Arrays sein. `r[i] = input[i]` teilt die Zeile, auch wenn ihr Inhalt stimmt. Für eine leere Zeile ist das `new int[0]`." }
hinweise:
  - Lass die Tests laufen und lies, welcher scheitert. Für welche Zeilenlängen ist die Sonderbehandlung `n <= 2` falsch?
  - Nur die leere Zeile braucht einen Sonderfall, und auch sie muss eine neue Zeile sein. Für jede andere Länge passt `new int[]{input[i][0], input[i][n - 1]}`.
loesung: |
  **Ansatz:** Unter Zeitdruck nicht neu schreiben, sondern mit den Tests die fehlerhafte Stelle eingrenzen.
  ---
  Fehler 1: Für `n = 1` liefert die Vorlage `{5}` statt `{5, 5}`. Der allgemeine Fall funktioniert schon bei einem Element, denn dann sind erstes und letztes Element dasselbe.
  ---
  Fehler 2: Für `n <= 2` wird die Zeile geteilt. Das bemerkt erst der Test mit `!=`.
  ---
  ```java
  if (n == 0) {
      r[i] = new int[0];
  } else {
      r[i] = new int[]{input[i][0], input[i][n - 1]};
  }
  ```
  ---
  Probe: `{3, 8, 1}` ergibt `{3, 1}`, `{5}` ergibt `{5, 5}`, `{}` eine neue leere Zeile.
```

Von einem Test gab es mehrere **Varianten** derselben Angabe, zum Beispiel im Jänner 2022 die Gruppen 14A und 14B.
Wer welche Variante bekam, steht in den Angaben nicht. Die Varianten sind gleich aufgebaut und unterscheiden sich in
Kleinigkeiten. Wer die alten Tests geübt hat, erkennt die Aufgabe wieder, muss aber genau auf die Unterschiede achten. In den Angaben von 2021 bis 2023 kamen diese
Arten vor:

- **Andere Namen:** `addTriangle` und `addStairs`, `reverseBetween` und `changeOrder`, `clean` und `shrink`.
- **Andere Parameterreihenfolge:** `hasNOrderedPairs(seq, n, index)` und `contains(seq, index, n)`.
- **Andere Konstante:** `generate` mit Mindestlänge 5 und `create` mit Mindestlänge 3.
- **Das Gegenteil:** `evenOccurrences` (gerade oft) und `oddOccurrences` (ungerade oft).
- **Bereich statt Startindex:** `isAlternating(seq, index)` und `changeOfSign(seq, i1, i2)`.
- **Andere Bedeutung einer Spalte:** Bei `labelPath` war Spalte 0 im Jahr 2021 der Spaltenindex, im Jahr 2023 der Zeilenindex.
- **Andere Regel für die Mitte:** Bei `insertMiddle` war einmal die linke, einmal die rechte Hälfte die längere.

:::beispiel[Eine Lösung auf Variante B umbauen]
Du hast die Variante A „kommt das Zeichen **gerade** oft vor?“ geübt, etwa als `boolean geradeOft(String s, char c)`.
Im Test bekommst du die Variante B `boolean ungeradeOft(String s, char c)`. Deine geübte Lösung lautet:

```java
public static boolean geradeOft(String s, char c) {
    if (s.isEmpty()) {
        return true;                                // 0 Treffer, 0 ist gerade
    }
    boolean rest = geradeOft(s.substring(1), c);
    if (s.charAt(0) == c) {
        return !rest;                               // ein Treffer dreht die Antwort um
    }
    return rest;
}
```

**Was bleibt gleich?** Fortschritt und Umkehrung. Ein Treffer macht aus „gerade“ ein „ungerade“, und auch aus
„ungerade“ ein „gerade“. Das `!rest` passt also für beide Varianten.

**Was ändert sich?** Nur der Basisfall. Im leeren String gibt es 0 Treffer. 0 ist gerade, aber **nicht** ungerade. Für
`ungeradeOft` liefert der Basisfall darum `false`. Dazu kommt der neue Methodenname im Kopf und im Selbstaufruf.

Ähnlich ist es bei einer anderen Parameterreihenfolge. Variante A ist `genauNFallend(int[] seq, int n, int index)` aus
[20.5 Methode 3: rekursiv ohne Schleifen](/lernen/ep1/programmiertest/methode-3-rekursiv-ohne-schleifen), Variante B
heißt `fallendePaare(int[] seq, int index, int n)`. An der Logik ändert sich nichts. Es ändert sich aber die
Reihenfolge der Argumente, im Selbstaufruf und in jedem Testaufruf in `main`. Aus
`genauNFallend(seq, n - 1, index + 1)` wird `fallendePaare(seq, index + 1, n - 1)`.
:::

:::achtung[Die Argumente in der gewohnten Reihenfolge übergeben]
In Variante B lautet der Kopf `fallendePaare(int[] seq, int index, int n)`. Jemand hat die Variante A geübt und schreibt
im Selbstaufruf nach einem Treffer aus Gewohnheit `fallendePaare(seq, n - 1, index + 1)`. Beide Parameter sind `int`,
also meldet der Compiler keinen Fehler. Beim Ausführen wird aber `n - 1` als Index benutzt und `index + 1` als
gesuchte Anzahl.

Ein Beispiel mit `seq = {9, 4, 6, 5}` und dem Aufruf `fallendePaare(seq, 0, 2)`. Das Paar `9, 4` ist fallend, also folgt
der Aufruf `fallendePaare(seq, 1, 1)`. Das stimmt hier zufällig. Das Paar `4, 6` ist nicht fallend, weiter mit
`fallendePaare(seq, 2, 1)`. Das Paar `6, 5` ist fallend. Jetzt lautet der Selbstaufruf aber `fallendePaare(seq, 0, 3)`
statt `fallendePaare(seq, 3, 0)` und springt zurück an den Anfang. Von dort geht es wieder zu `(seq, 2, 1)` und wieder zu
`(seq, 0, 3)`. Die Rekursion läuft im Kreis, bis Java mit einem `StackOverflowError` abbricht. Lies bei jedem Aufruf
den Kopf der **eigenen** Variante.
:::

```aufgabe
id: pt-zv-auswahl-parameter
titel: Der passende Aufruf für Variante B
niveau: 1
lernziel: 7
kompetenz: anwenden
quelle: nach Programmiertest 27.01.2022, Gruppen 16A und 16B (hasNOrderedPairs, contains), neue Namen und Testdaten
angabe: |
  Variante A heißt `boolean genauNFallend(int[] seq, int n, int index)`. In deiner Variante B heißt die Methode
  `boolean fallendePaare(int[] seq, int index, int n)`. Die Testtabelle verlangt: „Prüfe ab Index 2, ob es genau 3
  fallende Paare gibt.“ Welcher Aufruf gehört in `main`?
teile:
  - typ: auswahl
    optionen:
      - '`fallendePaare(seq, 2, 3)`'
      - '`fallendePaare(seq, 3, 2)`'
      - '`genauNFallend(seq, 3, 2)`'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Das ist die Reihenfolge der Variante A. In deinem Kopf steht `index` vor `n`.
      - wert: 2
        meldung: Diese Methode gibt es in deiner Variante nicht. Der Name im Aufruf muss zum Kopf deiner Angabe passen.
hinweise:
  - Lies die Parameterliste deines Kopfs von links nach rechts und setze die Werte an die passenden Stellen.
loesung: |
  **Ansatz:** Argumente nach der Parameterliste des eigenen Kopfs ordnen.
  ---
  Der Kopf lautet `(seq, index, n)`. Index 2 kommt an die zweite Stelle, die Anzahl 3 an die dritte. Richtig ist `fallendePaare(seq, 2, 3)`.
```

```aufgabe
id: pt-zv-rf-varianten
titel: Was sich zwischen zwei Varianten ändert
niveau: 2
lernziel: 7
kompetenz: begruenden
quelle: Varianten der Programmiertests vom 27.01.2022 (Gruppen 14, 16 und 18 jeweils A und B)
angabe: Beurteile jede Aussage über Varianten einer Testangabe.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '`geradeOft` (kommt gerade oft vor) und `ungeradeOft` (kommt ungerade oft vor) unterscheiden sich in der Lösung nur im Ergebnis des Basisfalls (und im Namen).'
        richtig: true
        erklaerung: 'Fortschritt und Umkehrung mit `!rest` bleiben gleich. Der leere String liefert einmal `true`, einmal `false`.'
      - text: '`genauNFallend(seq, n, index)` und `fallendePaare(seq, index, n)` kann man mit denselben Argumenten in derselben Reihenfolge aufrufen.'
        richtig: false
        erklaerung: Die Parameterreihenfolge ist vertauscht. Die Argumente müssen mitgetauscht werden, sonst rechnet die Methode mit vertauschten Werten.
      - text: Bei Mindestlänge 5 statt 3 ändert sich in der Längenformel nur die Konstante, etwa `Math.max(5, pos + 1)` statt `Math.max(3, pos + 1)`.
        richtig: true
        erklaerung: Die Logik bleibt gleich. Nur die Zahl für die Mindestlänge ist eine andere.
      - text: Unterscheiden sich zwei Varianten nur im Methodennamen, müssen auch die Testaufrufe in main den neuen Namen tragen.
        richtig: true
        erklaerung: Ein Aufruf mit dem alten Namen übersetzt nicht, weil es die Methode in deiner Klasse nicht gibt.
    fehler:
      - wert: [r, r, r, r]
        meldung: Bei vertauschten Parametern dürfen die Argumente nicht in der alten Reihenfolge stehen. Beide sind `int`, darum bemerkt der Compiler den Fehler nicht.
      - wert: [f, f, r, r]
        meldung: Überlege, was sich zwischen gerade und ungerade wirklich ändert. Ein Treffer dreht die Antwort in beiden Fällen um. Nur der leere String ist verschieden.
hinweise:
  - Frage bei jeder Variante, welche Zeile der Lösung sich ändern muss.
  - Für den leeren String gilt, 0 ist gerade.
loesung: |
  **Ansatz:** Für jedes Variantenpaar die betroffene Stelle im Code bestimmen.
  ---
  Gerade und ungerade unterscheiden sich nur im Basisfall. Die Mindestlänge ist eine Konstante, der Name betrifft auch `main`.
  ---
  Falsch ist nur Aussage 2. Vertauschte Parameter verlangen vertauschte Argumente.
```

```aufgabe
id: pt-zv-lueckentext-mindestens
titel: Aus „genau“ wird „mindestens“
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Variante A war `genauKMal(s, c, k)` aus [20.5 Methode 3: rekursiv ohne Schleifen](/lernen/ep1/programmiertest/methode-3-rekursiv-ohne-schleifen).
  Variante B heißt `boolean mindestensKMal(String s, char c, int k)` und liefert `true`, wenn `c` **mindestens**
  `k`-mal in `s` vorkommt. Vorbedingung: `s != null`, `k >= 0`. Ergänze die Lücken.
teile:
  - typ: lueckentext
    code: |
      public class Mindestens {
          public static boolean mindestensKMal(String s, char c, int k) {
              if (s.isEmpty()) {
                  return ___;
              }
              if (s.charAt(0) == c) {
                  return mindestensKMal(s.substring(1), c, ___);
              }
              return mindestensKMal(s.substring(1), c, k);
          }
      }
    luecken: [["k <= 0", "k < 1", "0 >= k"], ["k - 1"]]
    fehler:
      - wert: ["k == 0", "k - 1"]
        meldung: Das wäre wieder „genau“. Bei „mindestens“ darf es mehr Treffer geben, dann wird `k` negativ. Auch das ist ein Erfolg.
      - wert: ["true", "k - 1"]
        meldung: Ist der String zu Ende und `k` noch größer als 0, fehlen Treffer. Dann muss das Ergebnis `false` sein.
hinweise:
  - Der Fortschritt bleibt gleich. Nur der Basisfall entscheidet anders.
  - Wie viele Treffer fehlen noch, wenn `k` bei 0 oder darunter angekommen ist?
loesung: |
  **Ansatz:** Variante erkennen. Der Treffer verbraucht weiter einen der gesuchten Treffer, nur die Erfolgsbedingung ändert sich.
  ---
  Lücke 2 bleibt `k - 1`. Lücke 1 wird `k <= 0`. Zu viele Treffer machen `k` negativ, und das ist bei „mindestens“ erlaubt.
  ---
  Probe: `mindestensKMal("aaa", 'a', 2)` endet mit `k = -1`, und `-1 <= 0` liefert `true`.
```

```reflexion
frage: Warum lohnt es sich, eine alte Testangabe nicht nur einmal zu lösen, sondern danach auch ihre Variante zu programmieren?
antwort: |
  Weil die Tests einander stark ähneln, die Unterschiede aber genau dort liegen, wo eine auswendig gelernte Lösung
  scheitert. Wer nur eine Fassung kennt, schreibt aus Gewohnheit die alte Parameterreihenfolge, die alte Konstante oder
  den alten Basisfall. Beim Umbau auf die Variante muss ich jede Zeile fragen: Gilt das noch? So lerne ich, welche Teile
  einer Lösung zur Idee gehören und welche nur zur einen Angabe. Genau diese Unterscheidung brauche ich, wenn im Test eine
  dritte, mir unbekannte Variante kommt.
```

```aufgabe
id: pt-zv-code-punkte
titel: Ein Gitter mit vertauschten Koordinaten
niveau: 3
lernziel: 7
kompetenz: anwenden
quelle: nach Programmiertest 2020W, PT 16 und den Probetests 2023 (labelPath in zwei Varianten), mit Zählen der Treffer
angabe: |
  Implementiere `int[][] punkteZaehlen(int n, int[][] punkte)`. Das Ergebnis ist ein neues quadratisches Array mit `n`
  Zeilen und `n` Spalten. Jede Zeile von `punkte` beschreibt einen Punkt. Dabei ist **Spalte 0 der Spaltenindex** und
  **Spalte 1 der Zeilenindex** des Punkts. Jedes Feld enthält, wie oft es in `punkte` vorkommt. Felder ohne Punkt
  enthalten 0. Vorbedingung: `n >= 1`, `punkte != null`, jede Zeile von `punkte` hat genau zwei Einträge im Bereich
  0 bis `n − 1`.

  ```text
  punkteZaehlen(4, {{1, 3}, {2, 0}, {0, 2}, {1, 3}})
  liefert {{0, 0, 1, 0}, {0, 0, 0, 0}, {1, 0, 0, 0}, {0, 2, 0, 0}}
  ```
teile:
  - typ: code
    vorlage: |
      public class Gitter {
          public static int[][] punkteZaehlen(int n, int[][] punkte) {
              return null; // TODO
          }
      }
    musterloesung: |
      public class Gitter {
          public static int[][] punkteZaehlen(int n, int[][] punkte) {
              int[][] r = new int[n][n];
              for (int i = 0; i < punkte.length; i++) {
                  int spalte = punkte[i][0];
                  int zeile = punkte[i][1];
                  r[zeile][spalte]++;
              }
              return r;
          }
      }
    tests:
      - { aufruf: "punkteZaehlen(4, new int[][]{{1, 3}, {2, 0}, {0, 2}, {1, 3}})", erwartet: "new int[][]{{0, 0, 1, 0}, {0, 0, 0, 0}, {1, 0, 0, 0}, {0, 2, 0, 0}}" }
      - { aufruf: "punkteZaehlen(2, new int[][]{})", erwartet: "new int[][]{{0, 0}, {0, 0}}", beschreibung: "keine Punkte" }
      - { aufruf: "punkteZaehlen(1, new int[][]{{0, 0}, {0, 0}})", erwartet: "new int[][]{{2}}", beschreibung: "n = 1, ein Punkt doppelt" }
      - { aufruf: "punkteZaehlen(2, new int[][]{{1, 0}})", erwartet: "new int[][]{{0, 1}, {0, 0}}", beschreibung: "Spalte 1, Zeile 0" }
      - { aufruf: "punkteZaehlen(3, new int[][]{{0, 2}, {2, 0}, {0, 2}, {1, 1}, {0, 2}})", erwartet: "new int[][]{{0, 0, 1}, {0, 1, 0}, {3, 0, 0}}", versteckt: true }
    regeln: { keineHilfsmethoden: true, keineFelder: true, keineArrayKopie: true, erlaubteApi: ["Math.*"] }
    fehler:
      - { wert: 4, meldung: "Spalte 0 eines Punkts ist der **Spaltenindex**. Der Punkt `{1, 0}` liegt also in Zeile 0, Spalte 1. Schreibe `r[punkte[i][1]][punkte[i][0]]`." }
      - { wert: 3, meldung: "Ein Punkt kann mehrfach vorkommen. Erhöhe das Feld mit `++`, statt es auf 1 zu setzen." }
hinweise:
  - Die Form steht sofort fest, `new int[n][n]`. Alle Felder beginnen mit 0.
  - Für jeden Punkt zuerst Zeile und Spalte in eigene Variablen lesen, dann `r[zeile][spalte]++`. Achte auf die Bedeutung der zwei Spalten.
loesung: |
  **Ansatz:** M1 mit fester Form. Die Variante liegt in der Bedeutung der zwei Spalten und im Mitzählen von Wiederholungen.
  ---
  `new int[n][n]` legt das Gitter an. Alle Felder sind 0, also ist „kein Punkt“ schon richtig.
  ---
  ```java
  int spalte = punkte[i][0];
  int zeile = punkte[i][1];
  r[zeile][spalte]++;
  ```
  Eigene Variablen mit sprechenden Namen verhindern, dass du die zwei Spalten im Zugriff vertauschst.
  ---
  Mehrfache Punkte werden mitgezählt, weil `++` den alten Wert erhöht.
  ---
  Probe: `{1, 3}` kommt zweimal vor und liegt in Zeile 3, Spalte 1. Dort steht 2.
```

## Gemischte Wiederholung

Diese Aufgaben mischen den Stoff dieses Kapitels mit den Werkzeugen aus den Kapiteln 6, 10, 12, 13 und 14. Zwei
Aufgaben fragen nur, welches Vorgehen passt, ohne dass du etwas programmierst. Löse sie in gemischter Reihenfolge und
schau erst danach in die Lösungen.

```aufgabe
id: pt-gw-verfahren-zeile
titel: Welches Vorgehen verlängert eine Zeile?
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  Eine Angabe verlangt `void verlaengere(int[][] a)`: Jede Zeile von `a` bekommt am Ende zusätzlich eine 0. Welches
  Vorgehen passt? Du musst nichts programmieren.
teile:
  - typ: auswahl
    optionen:
      - Für jede Zeile eine neue Zeile der Länge `n + 1` anlegen, die Werte kopieren und `a[i]` auf die neue Zeile setzen.
      - Für jede Zeile `a[i].length = a[i].length + 1;` schreiben.
      - Ein neues Array `r` mit längeren Zeilen bauen und am Ende `a = r;` schreiben.
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`length` eines Arrays ist unveränderlich. Der Compiler lehnt eine Zuweisung an `length` ab.'
      - wert: 2
        meldung: '`a = r;` ändert nur die lokale Variable `a`. Das Array des Aufrufers bleibt unverändert.'
hinweise:
  - Eine Zeile kann nicht wachsen. Was bleibt dann übrig?
loesung: |
  **Ansatz:** Eine Zeile mit fester Länge wird durch eine neue ersetzt. Das ist M2 mit Zeilenersatz.
  ---
  Nur die erste Option ändert das Array des Aufrufers. `length` ist unveränderlich, und `a = r` wirkt nur lokal.
```

```aufgabe
id: pt-gw-verfahren-rekursion
titel: Welcher Basisfall passt zum Kopf?
niveau: 2
lernziel: 4
kompetenz: begruenden
angabe: |
  Der vorgegebene Kopf lautet `boolean allePositiv(int[] seq, int index)`. Die Methode soll rekursiv prüfen, ob ab
  `index` alle Einträge größer als 0 sind. Welche Kombination aus Basisfall und Fortschritt passt? Du musst nichts
  programmieren.
teile:
  - typ: auswahl
    optionen:
      - 'Basisfall `index >= seq.length` mit Ergebnis `true`, Fortschritt `index + 1`.'
      - 'Basisfall `seq.length == 0` mit Ergebnis `true`, Fortschritt `index + 1`.'
      - 'Eine `for`-Schleife ab `index`, die bei einem Wert `<= 0` sofort `false` liefert.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`seq.length` ändert sich bei keinem Aufruf. Bei einem nicht leeren Array wird dieser Basisfall nie erreicht, und `index` läuft hinter das Ende.'
      - wert: 2
        meldung: Eine Schleife in der rekursiven Methode verstößt gegen die Einschränkungen. Der Kopf mit `index` ist für einen wandernden Index gedacht.
hinweise:
  - Im Kopf steht ein Index. Welcher Wert ändert sich also bei jedem Aufruf?
loesung: |
  **Ansatz:** Form 2 aus [20.5 Methode 3: rekursiv ohne Schleifen](/lernen/ep1/programmiertest/methode-3-rekursiv-ohne-schleifen), ein Index wandert durch das Array.
  ---
  Der Index ist das, was sich ändert. Darum muss der Basisfall am Index hängen. Ein leerer Rest enthält keinen
  Gegenbeweis, das Ergebnis ist dort `true`.
```

```aufgabe
id: pt-gw-alias
titel: Zwei Namen, ein Array
niveau: 1
lernziel: 5
kompetenz: anwenden
angabe: |
  Was gibt der Code aus? (Wiederholung: [12.5 Referenzen: zwei Namen für dasselbe Array](/lernen/ep1/arrays/referenzen-zwei-namen-fuer-dasselbe-array))
teile:
  - typ: ausgabe
    code: |
      int[] a = {1, 2, 3};
      int[] b = a;
      int[] c = {1, 2, 3};
      b[0] = 7;
      System.out.println(a[0] + " " + (a == b) + " " + (a == c));
    loesung: |
      7 true false
    fehler:
      - wert: "1 true false"
        meldung: '`b = a` kopiert nur den Verweis. `a` und `b` sind dasselbe Array, also sieht man `b[0] = 7` auch über `a`.'
      - wert: "7 true true"
        meldung: '`c` hat denselben Inhalt, ist aber ein eigenes Array. `==` vergleicht Verweise und liefert `false`.'
hinweise:
  - '`==` zwischen Arrays fragt, ob beide Namen auf dasselbe Array zeigen.'
loesung: |
  **Ansatz:** Verweise verfolgen. `a` und `b` zeigen auf dasselbe Array, `c` auf ein anderes.
  ---
  Die Änderung über `b` sieht man über `a`, also `7`. `a == b` ist `true`, `a == c` ist `false`.
```

```aufgabe
id: pt-gw-trace-rekursion
titel: Rückgabewerte einer Rekursion verfolgen
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Gegeben ist die Methode unten. Trage für jeden Aufruf von `f(10)` den Parameter `n` und den Rückgabewert ein, in der
  Reihenfolge der Aufrufe. (Wiederholung: [10.2 Der Aufrufstapel: Hinweg und Rückweg](/lernen/ep1/rekursion/der-aufrufstapel-hinweg-und-rueckweg))

  ```java
  public static int f(int n) {
      if (n < 3) {
          return n;
      }
      return f(n - 3) + n;
  }
  ```
teile:
  - typ: trace
    spalten: [n, Rückgabe]
    zeilen: [1. Aufruf, 2. Aufruf, 3. Aufruf, 4. Aufruf]
    loesung: [[10, 22], [7, 12], [4, 5], [1, 1]]
    fehler:
      - wert: ["10", "10", "7", "7", "4", "4", "1", "1"]
        meldung: Ein Aufruf liefert nicht nur sein eigenes `n`, sondern `f(n - 3) + n`. Rechne die Rückgabewerte von unten nach oben aus.
      - wert: ["10", "21", "7", "11", "4", "4", "1", "0"]
        meldung: Im Basisfall wird `n` selbst zurückgegeben, nicht 0. `f(1)` liefert 1.
hinweise:
  - Erst die Folge der Parameter bis zum Basisfall aufschreiben, dann die Rückgabewerte von innen nach außen.
  - '`f(1)` ist der Basisfall. Dann `f(4) = f(1) + 4`.'
loesung: |
  **Ansatz:** Hinweg mit den Parametern 10, 7, 4, 1. Bei 1 gilt `n < 3`.
  ---
  Rückweg: `f(1) = 1`, `f(4) = 1 + 4 = 5`, `f(7) = 5 + 7 = 12`, `f(10) = 12 + 10 = 22`.
  ---
  Probe: `10 + 7 + 4 + 1 = 22`. Die Methode summiert jeden dritten Wert ab `n` abwärts.
```

```aufgabe
id: pt-gw-kapazitaet
titel: Wie viele Werte passen hinein?
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Wie viele `int`-Werte kann `int[][][] x = new int[2][3][4];` direkt nach dem Anlegen aufnehmen?
  (Wiederholung: [14.4 Deklaration und Kapazität mehrdimensionaler Arrays](/lernen/ep1/arrays-2d/deklaration-und-kapazitaet-mehrdimensionaler-arrays))
teile:
  - typ: zahl
    loesung: "2 * 3 * 4"
    fehler:
      - wert: "9"
        meldung: Die Größen werden multipliziert, nicht addiert. Jede der 2 Ebenen hat 3 Zeilen mit je 4 Plätzen.
      - wert: "4"
        meldung: 4 ist nur die Länge einer innersten Zeile. Es gibt `2 · 3` solche Zeilen.
hinweise:
  - Alle drei Größen sind angegeben. Jede Ebene enthält die volle Größe der nächsten.
loesung: |
  **Ansatz:** Alle Größen sind angegeben, also gilt die Produktregel.
  ---
  `2 · 3 · 4 = 24` Plätze, jeder mit dem Standardwert 0.
```

```aufgabe
id: pt-gw-vorbedingung
titel: Vorbedingung und Nachbedingung eines Durchschnitts
niveau: 2
lernziel: 0
kompetenz: begruenden
angabe: |
  Gegeben ist die Methode unten. Beurteile jede Aussage. (Wiederholung: [6.6 Vor- und Nachbedingungen](/lernen/ep1/methoden/vor-und-nachbedingungen))

  ```java
  public static int mittel(int[] a) {
      int s = 0;
      for (int i = 0; i < a.length; i++) {
          s += a[i];
      }
      return s / a.length;
  }
  ```
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Mit der Vorbedingung `a != null, a.length > 0` kann bei keinem erlaubten Aufruf eine Exception entstehen.
        richtig: true
        erklaerung: '`null` fällt weg, und `a.length > 0` verhindert die Division durch 0.'
      - text: Die Vorbedingung `a.length > 0` allein schließt auch `a == null` aus.
        richtig: false
        erklaerung: Für `a == null` lässt sich `a.length` gar nicht auswerten. Die Vorbedingung muss `a != null` ausdrücklich nennen.
      - text: Lautet die Vorbedingung `a != null, a.length > 0`, muss die Methode trotzdem `a == null` prüfen.
        richtig: false
        erklaerung: Was die Vorbedingung ausschließt, kommt nicht vor. Eine Prüfung ist überflüssig.
      - text: Eine passende Nachbedingung lautet, das Ergebnis ist der Durchschnitt der Einträge, ohne Nachkommastellen in Richtung 0 gerundet.
        richtig: true
        erklaerung: '`s / a.length` ist eine Ganzzahldivision. Java schneidet den Nachkommaanteil ab, also Richtung 0.'
    fehler:
      - wert: [r, r, f, r]
        meldung: Kann man `a.length` auswerten, wenn `a` gleich `null` ist? Dann entsteht gerade die Exception, die die Vorbedingung ausschließen soll.
      - wert: [r, f, r, r]
        meldung: Vorbedingungen sind Zusagen des Aufrufers. Die Methode darf sich darauf verlassen.
hinweise:
  - Suche die beiden Stellen, an denen eine Exception entstehen könnte.
  - Ganzzahldivision schneidet ab, sie rundet nicht kaufmännisch.
loesung: |
  **Ansatz:** Mögliche Exceptions finden. Zugriff auf `a.length` bei `null` und Division durch 0 bei leerem Array.
  ---
  Beide Fälle schließt `a != null, a.length > 0` aus. Prüfen muss die Methode sie dann nicht.
  ---
  Die Nachbedingung beschreibt den ganzzahligen Durchschnitt. Richtig sind die Aussagen 1 und 4.
```

```aufgabe
id: pt-gw-code-haeufigkeit
titel: Häufigkeiten in einem sortierten Array
niveau: 2
lernziel: 2
kompetenz: anwenden
quelle: nach Programmiertest 2 vom 04.06.2020 (compress), neue Testdaten
angabe: |
  Implementiere `int[] haeufigkeiten(int[] sortiert)`. Die Methode liefert ein neues Array derselben Länge. Es enthält
  für jeden verschiedenen Wert von `sortiert`, wie oft er vorkommt, in der Reihenfolge des ersten Auftretens. Übrige
  Plätze enthalten `-1`. Vorbedingung: `sortiert != null`, `sortiert.length > 0`, `sortiert` ist aufsteigend sortiert.
  (Wiederholung: [12.3 Typische Algorithmen: Summe, Minimum, Zählen und Suchen](/lernen/ep1/arrays/typische-algorithmen-summe-minimum-zaehlen-und-suchen))

  ```text
  haeufigkeiten({2, 2, 4, 7, 7, 7, 9})   liefert {2, 1, 3, 1, -1, -1, -1}
  haeufigkeiten({5})                     liefert {1}
  ```
teile:
  - typ: code
    vorlage: |
      public class Haeufig {
          public static int[] haeufigkeiten(int[] sortiert) {
              return null; // TODO
          }
      }
    musterloesung: |
      public class Haeufig {
          public static int[] haeufigkeiten(int[] sortiert) {
              int[] r = new int[sortiert.length];
              int k = 0;
              for (int i = 0; i < sortiert.length; i++) {
                  if (i == 0 || sortiert[i] != sortiert[i - 1]) {
                      r[k] = 1;
                      k++;
                  } else {
                      r[k - 1]++;
                  }
              }
              for (int i = k; i < r.length; i++) {
                  r[i] = -1;
              }
              return r;
          }
      }
    tests:
      - { aufruf: "haeufigkeiten(new int[]{2, 2, 4, 7, 7, 7, 9})", erwartet: "new int[]{2, 1, 3, 1, -1, -1, -1}" }
      - { aufruf: "haeufigkeiten(new int[]{5})", erwartet: "new int[]{1}", beschreibung: "ein Eintrag" }
      - { aufruf: "haeufigkeiten(new int[]{1, 2, 3})", erwartet: "new int[]{1, 1, 1}", beschreibung: "alle verschieden" }
      - { aufruf: "haeufigkeiten(new int[]{-3, -3, -3, -3})", erwartet: "new int[]{4, -1, -1, -1}", versteckt: true }
    regeln: { keineHilfsmethoden: true, keineFelder: true, keineArrayKopie: true, erlaubteApi: ["Math.*"] }
    fehler:
      - { wert: 1, meldung: "Weil das Array sortiert ist, stehen gleiche Werte nebeneinander. Ein neuer Wert beginnt genau dort, wo sich ein Eintrag von seinem Vorgänger unterscheidet." }
      - { wert: 3, meldung: "Wenn alle Werte verschieden sind, bleibt kein Platz für `-1` übrig. Fülle nur die Plätze ab `k` mit `-1`." }
hinweise:
  - Gleiche Werte stehen nebeneinander. Ein Zähler `k` merkt sich, wie viele verschiedene Werte schon gefunden sind.
  - Bei einem neuen Wert `r[k] = 1` und `k++`, sonst `r[k - 1]++`. Danach die Plätze ab `k` mit `-1` füllen.
loesung: |
  **Ansatz:** Form steht fest, dieselbe Länge wie die Eingabe. Ein Durchlauf zählt Gruppen gleicher Werte.
  ---
  Ein neuer Wert beginnt bei `i == 0` oder wenn `sortiert[i] != sortiert[i - 1]`. Dann `r[k] = 1; k++;`. Sonst wird die laufende Gruppe um 1 größer.
  ---
  Danach haben `k` Plätze eine Anzahl. Die übrigen werden `-1`.
  ---
  Probe: `{2, 2, 4, 7, 7, 7, 9}` hat die Gruppen 2, 4, 7, 9 mit 2, 1, 3, 1 Einträgen. Drei Plätze bleiben `-1`.
```

```aufgabe
id: pt-gw-code-taeler
titel: Täler ab einem Index zählen
niveau: 3
lernziel: 4
kompetenz: anwenden
quelle: Muster „Array-Eigenschaft ab index“ der Programmiertests (isAlternating, hasNOrderedPairs), Inhalt neu
angabe: |
  Ein **Tal** ist ein Eintrag, der kleiner ist als **beide** Nachbarn. Der erste und der letzte Eintrag eines Arrays
  sind nie Täler, weil ihnen ein Nachbar fehlt. Implementiere `int zaehleTaeler(int[] a, int index)` **rekursiv**. Die
  Methode zählt die Täler ab `index` (inklusive). Es gelten die Einschränkungen des Programmiertests. Vorbedingung:
  `a != null`, `a.length > 0`, `index` ist ein gültiger Index.
  (Wiederholung: [13.1 Ein Array mit einem Index durchlaufen](/lernen/ep1/rekursion-arrays/ein-array-mit-einem-index-durchlaufen))

  ```text
  int[] a = {5, 2, 6, 1, 3, 3};
  zaehleTaeler(a, 0)   liefert 2    (die 2 an Index 1 und die 1 an Index 3)
  zaehleTaeler(a, 2)   liefert 1
  ```
teile:
  - typ: code
    vorlage: |
      public class Taeler {
          public static int zaehleTaeler(int[] a, int index) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Taeler {
          public static int zaehleTaeler(int[] a, int index) {
              if (index >= a.length - 1) {
                  return 0;
              }
              int eins = 0;
              if (index > 0 && a[index] < a[index - 1] && a[index] < a[index + 1]) {
                  eins = 1;
              }
              return eins + zaehleTaeler(a, index + 1);
          }
      }
    tests:
      - { aufruf: "zaehleTaeler(new int[]{5, 2, 6, 1, 3, 3}, 0)", erwartet: "2" }
      - { aufruf: "zaehleTaeler(new int[]{5, 2, 6, 1, 3, 3}, 2)", erwartet: "1" }
      - { aufruf: "zaehleTaeler(new int[]{4, 2, 2, 5}, 0)", erwartet: "0", beschreibung: "ein gleich großer Nachbar: kein Tal" }
      - { aufruf: "zaehleTaeler(new int[]{3, 1, 4, 2}, 0)", erwartet: "1", beschreibung: "der letzte Eintrag ist kleiner als sein Nachbar" }
      - { aufruf: "zaehleTaeler(new int[]{1}, 0)", erwartet: "0", beschreibung: "nur ein Eintrag" }
      - { aufruf: "zaehleTaeler(new int[]{9, 1, 9, 1, 9}, 0)", erwartet: "2", versteckt: true }
      - { aufruf: "zaehleTaeler(new int[]{9, 1, 9, 1, 9}, 4)", erwartet: "0", versteckt: true }
    regeln: { keineSchleifenIn: [zaehleTaeler], rekursiv: [zaehleTaeler], keineHilfsmethoden: true, keineFelder: true, keinStringGleichOperator: true, erlaubteApi: ["Math.*"] }
    fehler:
      - { wert: 3, meldung: "Ein Tal muss **echt** kleiner sein als beide Nachbarn. Ist ein Nachbar gleich groß, ist es kein Tal. Vergleiche mit `<`, nicht mit `<=`." }
      - { wert: 4, meldung: "Der letzte Eintrag hat keinen rechten Nachbarn. Es gibt kein `a[index + 1]`. Der Basisfall muss schon bei `index >= a.length - 1` greifen." }
      - { wert: 1, meldung: "Index 0 hat keinen linken Nachbarn. Prüfe `index > 0`, bevor du `a[index - 1]` liest. Wegen `&&` wird der Zugriff dann übersprungen." }
hinweise:
  - Ein Tal braucht einen linken und einen rechten Nachbarn. Für `index = 0` und den letzten Index ist die Antwort also immer „kein Tal“.
  - 'Basisfall: `index >= a.length - 1`, Ergebnis 0. Sonst den eigenen Beitrag (0 oder 1) und das Ergebnis für `index + 1` addieren.'
loesung: |
  **Ansatz:** Form 2, der Index wandert. Jeder Aufruf prüft nur, ob `a[index]` ein Tal ist.
  ---
  Basisfall: Ab dem letzten Index gibt es kein Tal mehr. Ergebnis 0.
  ---
  ```java
  int eins = 0;
  if (index > 0 && a[index] < a[index - 1] && a[index] < a[index + 1]) {
      eins = 1;
  }
  return eins + zaehleTaeler(a, index + 1);
  ```
  ---
  `index > 0` steht vorne. Wegen der Kurzschlussauswertung von `&&` wird `a[-1]` nie gelesen.
  ---
  Probe: In `{5, 2, 6, 1, 3, 3}` sind die 2 und die 1 Täler. Die 3 an Index 4 ist größer als ihr linker Nachbar 1 und darum kein Tal.
```

```aufgabe
id: pt-gw-code-bereich
titel: Werte in einem halboffenen Intervall
niveau: 2
lernziel: 7
kompetenz: anwenden
quelle: nach Beispiel-Programmiertest 2 vom 18.05.2020 (Werte im Intervall [1, 7)), mit Grenzen als Parameter
angabe: |
  Implementiere `int[] imBereich(int[] input, int von, int bis)`. Die Methode liefert ein neues Array mit allen Werten
  von `input`, die im Intervall **[von, bis)** liegen. Das heißt: `von` gehört dazu, `bis` nicht. Die Reihenfolge
  bleibt erhalten. Vorbedingung: `input != null`, `von <= bis`.

  ```text
  imBereich({8, 0, 3, 5, -2, 5}, 0, 5)   liefert {0, 3}
  imBereich({4, 4, 9}, 4, 10)           liefert {4, 4, 9}
  ```
teile:
  - typ: code
    vorlage: |
      public class Bereich {
          public static int[] imBereich(int[] input, int von, int bis) {
              return null; // TODO
          }
      }
    musterloesung: |
      public class Bereich {
          public static int[] imBereich(int[] input, int von, int bis) {
              int anzahl = 0;
              for (int i = 0; i < input.length; i++) {
                  if (input[i] >= von && input[i] < bis) {
                      anzahl++;
                  }
              }
              int[] r = new int[anzahl];
              int k = 0;
              for (int i = 0; i < input.length; i++) {
                  if (input[i] >= von && input[i] < bis) {
                      r[k] = input[i];
                      k++;
                  }
              }
              return r;
          }
      }
    tests:
      - { aufruf: "imBereich(new int[]{8, 0, 3, 5, -2, 5}, 0, 5)", erwartet: "new int[]{0, 3}" }
      - { aufruf: "imBereich(new int[]{4, 4, 9}, 4, 10)", erwartet: "new int[]{4, 4, 9}", beschreibung: "untere Grenze gehört dazu" }
      - { aufruf: "imBereich(new int[]{}, 1, 2)", erwartet: "new int[]{}", beschreibung: "leeres Array" }
      - { aufruf: "imBereich(new int[]{-1, 1, 6, 7, 1}, 1, 7)", erwartet: "new int[]{1, 6, 1}", versteckt: true }
    regeln: { keineHilfsmethoden: true, keineFelder: true, keineArrayKopie: true, erlaubteApi: ["Math.*"] }
    fehler:
      - { wert: 1, meldung: "Die obere Grenze `bis` gehört **nicht** dazu. Die 5 fällt weg. Prüfe `input[i] < bis` statt `<=`." }
      - { wert: 2, meldung: "Die untere Grenze `von` gehört dazu. Prüfe `input[i] >= von` statt `>`." }
hinweise:
  - Zwei Durchläufe. Der erste zählt die passenden Werte und legt damit die Länge fest, der zweite kopiert sie.
  - 'Halboffen heißt: `input[i] >= von && input[i] < bis`.'
loesung: |
  **Ansatz:** Filter-Muster in einer Dimension. Länge erst nach einem Zähldurchlauf bekannt.
  ---
  Bedingung für [von, bis): `input[i] >= von && input[i] < bis`. Das ist die Variante zur Angabe von 2020 mit dem festen Intervall [1, 7).
  ---
  Zweiter Durchlauf mit Schreibzähler `k`, der nur bei einem Treffer weiterrückt.
  ---
  Probe: In `{8, 0, 3, 5, -2, 5}` liegen 0 und 3 in [0, 5). Die zwei 5 gehören nicht dazu.
```

## Prüfungsaufgaben

Die ersten vier Aufgaben bilden zusammen einen **vollständigen Probetest** mit 30 Punkten. Plane dafür 75 Minuten
ein, arbeite nach deinem Zeitplan aus [20.7 Zeitplan, Teilpunkte und Varianten](/lernen/ep1/programmiertest/zeitplan-teilpunkte-und-varianten) und decke
erst danach Hinweise auf. Die Angaben sind den Tests von 2021 bis 2023 nachgebaut, mit neuen Namen und Testdaten. Das
Format 2026W ist nicht veröffentlicht. Danach folgen eine weitere M2-Methode und eine Aufgabe zum Bewertungsraster.

Für alle Aufgaben dieses Abschnitts gelten die Einschränkungen des Programmiertests:

```text
• Keine zusätzlichen Hilfsmethoden und keine Klassenvariablen.
• Die vorgegebenen Methodenköpfe dürfen nicht geändert oder erweitert werden.
• In der rekursiven Methode sind keine Schleifen erlaubt.
• Strings dürfen nicht per Referenz verglichen werden.
• Weder clone noch System.arraycopy.
• Aus Arrays nur deepToString und toString, aus String nur charAt, equals, length,
  substring und isEmpty. Aus Math alle Methoden. Sonst keine Klasse der Java-API.
```

```aufgabe
id: pt-pa-m1-sanduhr
titel: "Probetest, M1: eine Sanduhr aus Zeilen"
niveau: 3
punkte: 10
lernziel: 2
kompetenz: anwenden
quelle: nach den Probetests vom 26.01.2023 (generate, Zeilen schrumpfen und wachsen), Elemente vorne statt hinten entfernt
angabe: |
  (Zeitrichtwert: 20 Minuten) Implementiere `int[][] sanduhr(int[][] input)`. `input` ist quadratisch mit `n` Zeilen.
  Das Ergebnis hat `2n − 1` Zeilen. Die Zeile mit Index `i` (für `i < n`) ist eine Kopie von `input[i]` **ohne die
  ersten `i` Elemente**. Danach folgen dieselben Zeilen in umgekehrter Reihenfolge, ohne die letzte noch einmal.
  Zuletzt steht also wieder die vollständige erste Zeile. Jede Zeile des Ergebnisses ist ein eigenes Array.
  Vorbedingung: `input != null`, `input.length > 0`, `input[i].length == input.length` für alle `i`.

  ```text
  sanduhr({{6, 1, 9}, {4, 8, 2}, {3, 7, 5}})   liefert {{6, 1, 9}, {8, 2}, {5}, {8, 2}, {6, 1, 9}}
  sanduhr({{4}})                               liefert {{4}}
  ```

  Raster: korrekte Anzahl der Zeilen 2, korrekte Längen aller Zeilen 3, korrekter Inhalt 3, keine geteilten Zeilen 2.
teile:
  - typ: code
    vorlage: |
      public class Sanduhr {
          public static int[][] sanduhr(int[][] input) {
              return null; // TODO
          }
      }
    musterloesung: |
      public class Sanduhr {
          public static int[][] sanduhr(int[][] input) {
              int n = input.length;
              int[][] r = new int[2 * n - 1][];
              for (int i = 0; i < r.length; i++) {
                  int q = i;
                  if (i >= n) {
                      q = 2 * n - 2 - i;
                  }
                  r[i] = new int[n - q];
                  for (int j = 0; j < n - q; j++) {
                      r[i][j] = input[q][q + j];
                  }
              }
              return r;
          }
      }
    tests:
      - { aufruf: "sanduhr(new int[][]{{6, 1, 9}, {4, 8, 2}, {3, 7, 5}})", erwartet: "new int[][]{{6, 1, 9}, {8, 2}, {5}, {8, 2}, {6, 1, 9}}" }
      - { aufruf: "sanduhr(new int[][]{{4}})", erwartet: "new int[][]{{4}}", beschreibung: "n = 1" }
      - { vorher: "int[][] t = {{1, 2}, {3, 4}}; int[][] r = sanduhr(t);", aufruf: "r[0] != r[2] && r[0] != t[0]", erwartet: "true", beschreibung: "eigene Zeilen, auch für die Wiederholung" }
      - { aufruf: "sanduhr(new int[][]{{1, 2, 3, 4}, {5, 6, 7, 8}, {9, 8, 7, 6}, {5, 4, 3, 2}})", erwartet: "new int[][]{{1, 2, 3, 4}, {6, 7, 8}, {7, 6}, {2}, {7, 6}, {6, 7, 8}, {1, 2, 3, 4}}", versteckt: true }
    regeln: { keineHilfsmethoden: true, keineFelder: true, keineArrayKopie: true, erlaubteApi: ["Math.*"] }
    fehler:
      - { wert: 1, meldung: "Zeile `i` beginnt bei Index `i` der Eingabezeile und hat die Länge `n − i`. Die ersten `i` Elemente fallen weg, nicht die letzten." }
      - { wert: 3, meldung: "Die Wiederholung auf dem Rückweg braucht eigene Arrays. Lege auch für die Zeilen ab Index `n` mit `new` neue Zeilen an, statt `r[i] = r[2n − 2 − i]` zu setzen." }
hinweise:
  - Form zuerst. `2n − 1` Zeilen, und Ergebniszeile `i` gehört zur Eingabezeile `q = i` für `i < n`, sonst `q = 2n − 2 − i`.
  - Die Zeile zu `q` hat die Länge `n − q` und beginnt bei `input[q][q]`.
loesung: |
  **Ansatz:** M1 mit Indexumrechnung. Für jede Ergebniszeile bestimmen, welche Eingabezeile sie kopiert und ab welchem Element.
  ---
  Form: `2n − 1` Zeilen. Für `i < n` ist `q = i`, auf dem Rückweg `q = 2n − 2 − i`. Probe mit `n = 3`: `i = 3` ergibt `q = 1`, `i = 4` ergibt `q = 0`.
  ---
  ```java
  r[i] = new int[n - q];
  for (int j = 0; j < n - q; j++) {
      r[i][j] = input[q][q + j];
  }
  ```
  ---
  `q + j` überspringt die ersten `q` Elemente. Jede Zeile entsteht mit `new`, also teilt keine Zeile ihr Array mit einer anderen.
  ---
  Probe: Zeile 1 von `{4, 8, 2}` ohne das erste Element ergibt `{8, 2}`. Zeile 2 von `{3, 7, 5}` ohne zwei Elemente ergibt `{5}`.
```

```aufgabe
id: pt-pa-m2-muster
titel: "Probetest, M2: ein Muster in jeder Zeile zählen"
niveau: 3
punkte: 9
lernziel: 3
kompetenz: anwenden
quelle: nach den Probetests vom 26.01.2023 und Programmiertest 2020W, PT 16 (findMatches), neue Testdaten
angabe: |
  (Zeitrichtwert: 20 Minuten) Implementiere `void zaehleMuster(int[][] daten, int[] muster, int[] ziel)`. Für jede
  Zeile `i` von `daten` zählt die Methode, wie oft die Folge `muster` darin lückenlos vorkommt. Vorkommen dürfen sich
  überlappen. Die Anzahl wird in `ziel[i]` geschrieben. Plätze von `ziel` mit Index `>= daten.length` bleiben
  unverändert. Vorbedingung: `daten != null`, keine Zeile ist `null`, `muster.length > 0`,
  `ziel.length >= daten.length`.

  ```text
  int[] ziel = {-1, -1, -1, 5};
  zaehleMuster({{1, 2, 1, 2, 1}, {2}, {2, 1, 2}}, new int[]{1, 2}, ziel)   ändert ziel zu {2, 0, 1, 5}
  ```

  Raster: korrekte Schleifen 3, einzelne Vergleiche korrekt 2, Werte korrekt eingetragen 2, kurze Zeilen und nicht betroffene Plätze 2.
teile:
  - typ: code
    vorlage: |
      public class Muster {
          public static void zaehleMuster(int[][] daten, int[] muster, int[] ziel) {
              // TODO
          }
      }
    musterloesung: |
      public class Muster {
          public static void zaehleMuster(int[][] daten, int[] muster, int[] ziel) {
              for (int i = 0; i < daten.length; i++) {
                  int anzahl = 0;
                  for (int s = 0; s + muster.length <= daten[i].length; s++) {
                      boolean passt = true;
                      for (int m = 0; m < muster.length && passt; m++) {
                          if (daten[i][s + m] != muster[m]) {
                              passt = false;
                          }
                      }
                      if (passt) {
                          anzahl++;
                      }
                  }
                  ziel[i] = anzahl;
              }
          }
      }
    tests:
      - { vorher: "int[] z = {-1, -1, -1, 5};", aufruf: "zaehleMuster(new int[][]{{1, 2, 1, 2, 1}, {2}, {2, 1, 2}}, new int[]{1, 2}, z)", ergebnis: "z", erwartet: "new int[]{2, 0, 1, 5}" }
      - { vorher: "int[] z = {7, 7};", aufruf: "zaehleMuster(new int[][]{{3, 3, 3}, {1}}, new int[]{3, 3}, z)", ergebnis: "z", erwartet: "new int[]{2, 0}", beschreibung: "überlappende Vorkommen" }
      - { vorher: "int[] z = {0, 0, 0, 9};", aufruf: "zaehleMuster(new int[][]{{4, 1, 4, 1, 4}, {}, {1, 4}}, new int[]{4, 1, 4}, z)", ergebnis: "z", erwartet: "new int[]{2, 0, 0, 9}", beschreibung: "leere und zu kurze Zeilen" }
      - { vorher: "int[] z = {5, 5, 5};", aufruf: "zaehleMuster(new int[][]{{8}, {8, 8}}, new int[]{8}, z)", ergebnis: "z", erwartet: "new int[]{1, 2, 5}", versteckt: true }
    regeln: { keineHilfsmethoden: true, keineFelder: true, keineArrayKopie: true, erlaubteApi: ["Math.*"] }
    fehler:
      - { wert: 2, meldung: "Vorkommen dürfen sich überlappen. Nach einem Treffer rückt der Startpunkt nur um 1 weiter, nicht um die Länge des Musters." }
      - { wert: 3, meldung: "Ist eine Zeile kürzer als das Muster, ist die Anzahl 0. Die Startschleife braucht die Bedingung `s + muster.length <= daten[i].length`, sonst liest du hinter dem Zeilenende." }
hinweise:
  - Drei Schleifen. Über die Zeilen, über jeden möglichen Startpunkt `s`, und über die Elemente des Musters.
  - Ein Startpunkt `s` ist nur möglich, wenn `s + muster.length <= daten[i].length`. Schreibe `ziel[i]` für jede Zeile, auch wenn die Anzahl 0 ist.
loesung: |
  **Ansatz:** M2, das Ziel ist ein eindimensionales Array, das an Ort und Stelle beschrieben wird. Für jede Zeile ein Zähler.
  ---
  Startpunkte: `s` läuft von 0, solange das ganze Muster ab `s` in die Zeile passt.
  ---
  ```java
  boolean passt = true;
  for (int m = 0; m < muster.length && passt; m++) {
      if (daten[i][s + m] != muster[m]) {
          passt = false;
      }
  }
  if (passt) {
      anzahl++;
  }
  ```
  ---
  `ziel[i] = anzahl;` für jede Zeile. Plätze mit Index `>= daten.length` werden nie angefasst.
  ---
  Probe: In `{1, 2, 1, 2, 1}` passt `{1, 2}` bei den Startpunkten 0 und 2, also 2.
```

```aufgabe
id: pt-pa-m3-mitte
titel: "Probetest, M3: Zeichen in die Mitten einfügen"
niveau: 3
punkte: 8
lernziel: 4
kompetenz: anwenden
quelle: nach Programmiertest 2020W, PT 16 und den Probetests 2023 (insertMiddle, Teile und herrsche), neue Testdaten
angabe: |
  (Zeitrichtwert: 20 Minuten) Implementiere `String mitteEinfuegen(String input, String seps)` **rekursiv**. Ist `seps`
  leer oder hat `input` weniger als 2 Zeichen, liefert die Methode `input`. Sonst teilt sie `input` in zwei Hälften. Ist
  die Länge ungerade, ist die **linke** Hälfte die **kürzere**. Zwischen die Hälften kommt das erste Zeichen von `seps`.
  Jede Hälfte wird auf dieselbe Weise mit dem Rest von `seps` behandelt. Vorbedingung: `input != null`, `seps != null`.

  ```text
  mitteEinfuegen("PQ", "xyz")      liefert "PxQ"
  mitteEinfuegen("0123", "+-")     liefert "0-1+2-3"
  mitteEinfuegen("abcde", "*")     liefert "ab*cde"
  ```

  Raster: Rückgabe vorhanden 1, Basisfall vorhanden und korrekt 2, Fortschritt vorhanden und korrekt 2, Aufteilung 1, Rückgabewert 2.
teile:
  - typ: code
    vorlage: |
      public class Mitte {
          public static String mitteEinfuegen(String input, String seps) {
              return input; // TODO
          }
      }
    musterloesung: |
      public class Mitte {
          public static String mitteEinfuegen(String input, String seps) {
              if (seps.isEmpty() || input.length() < 2) {
                  return input;
              }
              int mitte = input.length() / 2;
              String links = mitteEinfuegen(input.substring(0, mitte), seps.substring(1));
              String rechts = mitteEinfuegen(input.substring(mitte), seps.substring(1));
              return links + seps.charAt(0) + rechts;
          }
      }
    tests:
      - { aufruf: "mitteEinfuegen(\"PQ\", \"xyz\")", erwartet: "\"PxQ\"" }
      - { aufruf: "mitteEinfuegen(\"0123\", \"+-\")", erwartet: "\"0-1+2-3\"" }
      - { aufruf: "mitteEinfuegen(\"abcde\", \"*\")", erwartet: "\"ab*cde\"", beschreibung: "ungerade Länge, links kürzer" }
      - { aufruf: "mitteEinfuegen(\"\", \"xyz\")", erwartet: "\"\"", beschreibung: "leerer String" }
      - { aufruf: "mitteEinfuegen(\"Q\", \"12\")", erwartet: "\"Q\"", versteckt: true }
      - { aufruf: "mitteEinfuegen(\"0123456\", \"ab\")", erwartet: "\"0b12a34b56\"", versteckt: true }
      - { aufruf: "mitteEinfuegen(\"abcdefgh\", \"123\")", erwartet: "\"a3b2c3d1e3f2g3h\"", versteckt: true }
    regeln: { keineSchleifenIn: [mitteEinfuegen], rekursiv: [mitteEinfuegen], keineHilfsmethoden: true, keineFelder: true, keinStringGleichOperator: true, erlaubteApi: ["String.charAt", "String.equals", "String.length", "String.substring", "String.isEmpty", "Math.*"] }
    fehler:
      - { wert: 3, meldung: "Bei ungerader Länge ist die **linke** Hälfte die kürzere. `input.length() / 2` rundet ab und liefert genau die Länge der linken Hälfte." }
      - { wert: 2, meldung: "Jede Hälfte bekommt den **Rest** von `seps`, also `seps.substring(1)`. Das zweite Zeichen steht dann in der Mitte beider Hälften." }
hinweise:
  - Zwei Basisfälle in einer Bedingung. Keine Trennzeichen mehr oder nichts mehr zu teilen.
  - Die Mitte ist `input.length() / 2`. Beide Hälften rufen die Methode mit `seps.substring(1)` auf. Das erste Zeichen von `seps` kommt dazwischen.
loesung: |
  **Ansatz:** Teile und herrsche. Der String wird halbiert, jede Hälfte wird mit den restlichen Trennzeichen genauso behandelt.
  ---
  Basisfall: `seps.isEmpty() || input.length() < 2`. Dann bleibt `input` unverändert.
  ---
  ```java
  int mitte = input.length() / 2;
  String links = mitteEinfuegen(input.substring(0, mitte), seps.substring(1));
  String rechts = mitteEinfuegen(input.substring(mitte), seps.substring(1));
  return links + seps.charAt(0) + rechts;
  ```
  ---
  Fortschritt: Beide Aufrufe haben einen kürzeren String und weniger Trennzeichen. Die Ganzzahldivision macht die linke Hälfte bei ungerader Länge kürzer.
  ---
  Probe `"0123"`, `"+-"`: Hälften `"01"` und `"23"`, je mit `"-"` zu `"0-1"` und `"2-3"`, dazwischen `+`. Ergebnis `"0-1+2-3"`.
```

```aufgabe
id: pt-pa-main
titel: "Probetest, main: Deklarationen und Testfälle"
niveau: 2
punkte: 3
lernziel: 5
kompetenz: anwenden
quelle: nach den Testtabellen der Programmiertests 2021 bis 2023 (Deklarationen 1 Punkt, Testfälle 2 Punkte)
angabe: |
  (Zeitrichtwert: 8 Minuten) Die drei Methoden des Probetests sind fertig. Schreib nur `main`. Deklariere die
  Variablen und erzeuge genau diese Ausgaben, jede in einer eigenen Zeile, in dieser Reihenfolge.

  ```text
  Deklarieren und initialisieren Sie in main:
  int[][] test1 = {{6, 1}, {2, 8}};
  int[][] daten = {{1, 2, 1, 2, 1}, {2}, {2, 1, 2}};
  int[] ziel = {-1, -1, -1, 5};

  Aufruf                                  Ausgabe in main
  result1 = sanduhr(test1)                [[6, 1], [8], [6, 1]]
  zaehleMuster(daten, test1[0], ziel)     [0, 0, 0, 5]
  zaehleMuster(daten, new int[]{2}, ziel) [2, 1, 2, 5]
  mitteEinfuegen("Tor", "|")              T|or
  ```
teile:
  - typ: code
    vorlage: |
      import java.util.Arrays;

      public class Probetest {
          public static int[][] sanduhr(int[][] input) {
              int n = input.length;
              int[][] r = new int[2 * n - 1][];
              for (int i = 0; i < r.length; i++) {
                  int q = i;
                  if (i >= n) {
                      q = 2 * n - 2 - i;
                  }
                  r[i] = new int[n - q];
                  for (int j = 0; j < n - q; j++) {
                      r[i][j] = input[q][q + j];
                  }
              }
              return r;
          }

          public static void zaehleMuster(int[][] daten, int[] muster, int[] ziel) {
              for (int i = 0; i < daten.length; i++) {
                  int anzahl = 0;
                  for (int s = 0; s + muster.length <= daten[i].length; s++) {
                      boolean passt = true;
                      for (int m = 0; m < muster.length && passt; m++) {
                          if (daten[i][s + m] != muster[m]) {
                              passt = false;
                          }
                      }
                      if (passt) {
                          anzahl++;
                      }
                  }
                  ziel[i] = anzahl;
              }
          }

          public static String mitteEinfuegen(String input, String seps) {
              if (seps.isEmpty() || input.length() < 2) {
                  return input;
              }
              int mitte = input.length() / 2;
              String links = mitteEinfuegen(input.substring(0, mitte), seps.substring(1));
              String rechts = mitteEinfuegen(input.substring(mitte), seps.substring(1));
              return links + seps.charAt(0) + rechts;
          }

          public static void main(String[] args) {
              // TODO
          }
      }
    musterloesung: |
      import java.util.Arrays;

      public class Probetest {
          public static int[][] sanduhr(int[][] input) {
              int n = input.length;
              int[][] r = new int[2 * n - 1][];
              for (int i = 0; i < r.length; i++) {
                  int q = i;
                  if (i >= n) {
                      q = 2 * n - 2 - i;
                  }
                  r[i] = new int[n - q];
                  for (int j = 0; j < n - q; j++) {
                      r[i][j] = input[q][q + j];
                  }
              }
              return r;
          }

          public static void zaehleMuster(int[][] daten, int[] muster, int[] ziel) {
              for (int i = 0; i < daten.length; i++) {
                  int anzahl = 0;
                  for (int s = 0; s + muster.length <= daten[i].length; s++) {
                      boolean passt = true;
                      for (int m = 0; m < muster.length && passt; m++) {
                          if (daten[i][s + m] != muster[m]) {
                              passt = false;
                          }
                      }
                      if (passt) {
                          anzahl++;
                      }
                  }
                  ziel[i] = anzahl;
              }
          }

          public static String mitteEinfuegen(String input, String seps) {
              if (seps.isEmpty() || input.length() < 2) {
                  return input;
              }
              int mitte = input.length() / 2;
              String links = mitteEinfuegen(input.substring(0, mitte), seps.substring(1));
              String rechts = mitteEinfuegen(input.substring(mitte), seps.substring(1));
              return links + seps.charAt(0) + rechts;
          }

          public static void main(String[] args) {
              int[][] test1 = {{6, 1}, {2, 8}};
              int[][] daten = {{1, 2, 1, 2, 1}, {2}, {2, 1, 2}};
              int[] ziel = {-1, -1, -1, 5};
              int[][] result1 = sanduhr(test1);
              System.out.println(Arrays.deepToString(result1));
              zaehleMuster(daten, test1[0], ziel);
              System.out.println(Arrays.toString(ziel));
              zaehleMuster(daten, new int[]{2}, ziel);
              System.out.println(Arrays.toString(ziel));
              System.out.println(mitteEinfuegen("Tor", "|"));
          }
      }
    tests:
      - { stdout: "[[6, 1], [8], [6, 1]]\n[0, 0, 0, 5]\n[2, 1, 2, 5]\nT|or\n", beschreibung: "Ausgabe von main wie in der Tabelle" }
    regeln: { keineHilfsmethoden: true, keineFelder: true, keineArrayKopie: true }
    fehler:
      - { wert: 1, meldung: "Vergleiche Zeile für Zeile. `ziel` ist ein `int[]`, dafür passt `Arrays.toString`. Nach jedem `zaehleMuster` gibst du `ziel` aus, nicht `daten`." }
hinweise:
  - Drei Deklarationen, dann vier Testfälle. Bei `zaehleMuster` steht der Seiteneffekt in `ziel`.
  - '`test1[0]` ist die Zeile `{6, 1}`, und sie kommt in `daten` nicht vor. Darum zeigt die erste `zaehleMuster`-Ausgabe lauter Nullen.'
loesung: |
  **Ansatz:** Deklarationen wörtlich, dann je Tabellenzeile Aufruf und passende Ausgabe.
  ---
  ```java
  int[][] result1 = sanduhr(test1);
  System.out.println(Arrays.deepToString(result1));
  zaehleMuster(daten, test1[0], ziel);
  System.out.println(Arrays.toString(ziel));
  zaehleMuster(daten, new int[]{2}, ziel);
  System.out.println(Arrays.toString(ziel));
  System.out.println(mitteEinfuegen("Tor", "|"));
  ```
  ---
  `result1` ist zweidimensional, also `deepToString`. `ziel` ist eindimensional, also `toString`. Der zweite Aufruf überschreibt die ersten drei Plätze von `ziel`.
  ---
  Probe: `"Tor"` hat Länge 3, die linke Hälfte ist `"T"`. Ergebnis `"T|or"`.
```

```aufgabe
id: pt-pa-m2-links
titel: Nach links schieben, manchmal mit Verlängerung
niveau: 3
punkte: 9
lernziel: 3
kompetenz: anwenden
quelle: nach Programmiertest 27.01.2022, Gruppen 18A und 18B (shift, move), Richtung gespiegelt
angabe: |
  (Zeitrichtwert: 18 Minuten) Implementiere `void schiebeLinks(int[][] a)`. In jeder Zeile rücken alle Einträge um eine
  Position nach **links**, und am Ende kommt eine 0 dazu. Steht am **Anfang** der Zeile eine 0, fällt sie weg, und die
  Zeile behält ihre Länge. In diesem Fall wird die Zeile nicht ersetzt, sondern ihre Einträge werden geändert. Steht am
  Anfang ein anderer Wert, bleibt er erhalten, und die Zeile wird durch eine um 1 längere Zeile ersetzt. Vorbedingung:
  `a != null`, keine Zeile ist `null` oder leer.

  ```text
  a = {{0, 4, 1}, {3}, {0}}
  schiebeLinks(a)   ändert a zu {{4, 1, 0}, {3, 0}, {0}}
  ```

  Raster: korrektes Verschieben 3, korrektes Kopieren bei längeren Zeilen 3, korrekte Längen 2, korrekte letzte Stelle 1.
teile:
  - typ: code
    vorlage: |
      public class Links {
          public static void schiebeLinks(int[][] a) {
              // TODO
          }
      }
    musterloesung: |
      public class Links {
          public static void schiebeLinks(int[][] a) {
              for (int i = 0; i < a.length; i++) {
                  int n = a[i].length;
                  if (a[i][0] == 0) {
                      for (int j = 0; j < n - 1; j++) {
                          a[i][j] = a[i][j + 1];
                      }
                      a[i][n - 1] = 0;
                  } else {
                      int[] neu = new int[n + 1];
                      for (int j = 0; j < n; j++) {
                          neu[j] = a[i][j];
                      }
                      a[i] = neu;
                  }
              }
          }
      }
    tests:
      - { vorher: "int[][] a = {{0, 4, 1}, {3}, {0}};", aufruf: "schiebeLinks(a)", ergebnis: "a", erwartet: "new int[][]{{4, 1, 0}, {3, 0}, {0}}" }
      - { vorher: "int[][] a = {{5, 0, 2}, {0, 0}, {-1}};", aufruf: "schiebeLinks(a)", ergebnis: "a", erwartet: "new int[][]{{5, 0, 2, 0}, {0, 0}, {-1, 0}}" }
      - { vorher: "int[][] a = {{0, 7}}; int[] z = a[0]; schiebeLinks(a);", aufruf: "a[0] == z", erwartet: "true", beschreibung: "Zeile mit 0 am Anfang wird nicht ersetzt" }
      - { vorher: "int[][] a = {{0, 1, 0, 2}, {9, 9}};", aufruf: "schiebeLinks(a)", ergebnis: "a", erwartet: "new int[][]{{1, 0, 2, 0}, {9, 9, 0}}", versteckt: true }
    regeln: { keineHilfsmethoden: true, keineFelder: true, keineArrayKopie: true, erlaubteApi: ["Math.*"] }
    fehler:
      - { wert: 1, meldung: "Beim Schieben nach links läuft die Schleife von vorne nach hinten: `a[i][j] = a[i][j + 1]`. Danach bekommt der letzte Platz die 0." }
      - { wert: 2, meldung: "Steht am Anfang keine 0, bleibt der ganze Inhalt erhalten. Die neue, längere Zeile hat dieselben Werte und hinten eine 0." }
      - { wert: 3, meldung: "Wenn am Anfang eine 0 steht, soll die Zeile **dasselbe** Array bleiben. Ändere ihre Einträge, statt eine neue Zeile anzulegen." }
hinweise:
  - Zwei Fälle je Zeile, abhängig von `a[i][0]`. Bei 0 verschiebst du innerhalb der Zeile, sonst ersetzt du sie.
  - Innerhalb der Zeile läuft die Schleife von vorne, weil jeder Platz seinen rechten Nachbarn übernimmt.
loesung: |
  **Ansatz:** M2 mit zwei Arten der Änderung. Werte überschreiben, wenn die Länge bleibt, Zeile ersetzen, wenn sie wächst.
  ---
  Fall 0 am Anfang: `for (int j = 0; j < n - 1; j++) a[i][j] = a[i][j + 1];` und danach `a[i][n - 1] = 0;`. Die Richtung ist umgekehrt zu `schiebeRechts`. Dort lief die Schleife von hinten.
  ---
  ```java
  int[] neu = new int[n + 1];
  for (int j = 0; j < n; j++) {
      neu[j] = a[i][j];
  }
  a[i] = neu;
  ```
  Der letzte Platz von `neu` hat schon den Standardwert 0.
  ---
  Probe: `{0, 4, 1}` wird zu `{4, 1, 0}`, `{3}` zu `{3, 0}`, `{0}` bleibt `{0}`.
```

```aufgabe
id: pt-pa-rf-raster
titel: Eine fremde Lösung nach dem Raster beurteilen
niveau: 3
punkte: 4
lernziel: 4
kompetenz: begruenden
quelle: Bewertungsraster der rekursiven Methode (Programmiertest 27.01.2022), Lösung neu
angabe: |
  (Zeitrichtwert: 6 Minuten) Jemand gibt für `boolean ungeradeOft(String s, char c)` diese Lösung ab. Vorbedingung
  ist `s != null`. Beurteile jede Aussage.

  ```java
  public static boolean ungeradeOft(String s, char c) {
      if (s.length() == 1) {
          return s.charAt(0) == c;
      }
      boolean rest = ungeradeOft(s.substring(1), c);
      if (s.charAt(0) == c) {
          return !rest;
      }
      return rest;
  }
  ```
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Ein Basisfall ist vorhanden.
        richtig: true
        erklaerung: Für Strings der Länge 1 liefert die Methode ein Ergebnis ohne Selbstaufruf.
      - text: Der Basisfall ist für alle erlaubten Eingaben korrekt.
        richtig: false
        erklaerung: '`s = ""` ist erlaubt. Dann greift der Basisfall nicht, und `"".substring(1)` wirft eine `StringIndexOutOfBoundsException`. Richtig wäre der Basisfall `s.isEmpty()` mit `false`.'
      - text: Der Fortschritt `s.substring(1)` ist vorhanden und verkürzt den String bei jedem Aufruf.
        richtig: true
        erklaerung: Jeder Selbstaufruf bekommt einen um ein Zeichen kürzeren String.
      - text: '`ungeradeOft("Kakao", ''K'')` liefert mit dieser Lösung `true`.'
        richtig: true
        erklaerung: Für nicht leere Strings stimmt die Lösung. Das große `K` kommt einmal vor, und das ist ungerade.
    fehler:
      - wert: [r, r, r, r]
        meldung: Probiere den leeren String aus. Er ist laut Vorbedingung erlaubt. Was passiert bei `"".substring(1)`?
      - wert: [r, f, r, f]
        meldung: Für nicht leere Strings arbeitet die Lösung richtig. Verfolge `"Kakao"` bis zum Basisfall `"o"`.
hinweise:
  - Prüfe zuerst, welche Eingaben die Vorbedingung erlaubt. Ist der leere String dabei?
  - Bei `"Kakao"` endet die Rekursion beim String `"o"`. Rechne von dort zurück.
loesung: |
  **Ansatz:** Jeden Raster-Posten einzeln an der Lösung prüfen. Basisfall vorhanden, Basisfall korrekt, Fortschritt, Rückgabewert.
  ---
  Ein Basisfall ist vorhanden, aber er deckt den leeren String nicht ab. `""` ist erlaubt und führt zu einer `StringIndexOutOfBoundsException`.
  ---
  Fortschritt vorhanden und korrekt. Für `"Kakao"` mit `'K'` ergibt sich von hinten `false`, `false`, `false`, `false` und am Anfang `!false = true`.
  ---
  Im Raster gäbe es darum vermutlich Abzüge bei „Basisfall korrekt“ und beim Rückgabewert für den leeren String.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, ohne nachzuschauen. Vergleiche danach mit dem Kasten unten.
antwort: |
  Eine mögliche Auswahl: (1) Der Test besteht aus M1 (neues Array, Form zuerst bestimmen, keine Zeile teilen), M2
  (Array an Ort und Stelle verändern, nie `a = neu`) und M3 (Rekursion ohne Schleifen mit passendem Basisfall), dazu
  3 Punkte für `main`. (2) Die Einschränkungen und die Vorbedingungen sind Teil der Aufgabe: Was die Vorbedingung nicht
  ausschließt, muss funktionieren, und ein Verstoß gegen eine Einschränkung kostet die Methode. (3) Mit einem
  übersetzbaren Gerüst, einem Zeitbudget pro Methode und einer Kontrolle am Ende sammelt man in allen Teilen Punkte.
  Ebenso gute Antworten sind die Umsetzung der Testtabelle oder das Erkennen von Varianten.
```

:::zusammenfassung
1. **Aufbau:** Ein Programmiertest hatte 2021 bis 2023 drei Methoden und `main`. M1 erzeugt ein neues Array, M2
   verändert ein Array an Ort und Stelle, M3 ist rekursiv ohne Schleifen. `main` bringt 1 Punkt für die Deklarationen
   und 2 Punkte für die Testfälle. Du brauchst mindestens 15 von 30 Punkten.
2. **Angabe lesen:** Vorbedingungen musst du nicht prüfen. Alles, was sie **nicht** ausschließen, muss funktionieren.
   Rechne das Beispielbild von Hand nach und schreib eine Fallliste mit Normalfall, Grenzen und Sätzen wie „gilt auch,
   wenn“.
3. **Einschränkungen:** keine Hilfsmethoden, keine Klassenvariablen, Köpfe unverändert, keine Schleifen in der
   Rekursion, kein `==` zwischen Strings, kein `clone` und kein `System.arraycopy`, nur die erlaubten Methoden aus
   `Arrays`, `String` und `Math`.
4. **M1:** Erst die Form bestimmen, oft mit einem eigenen Durchlauf. Dann jede Zeile mit `new` anlegen und befüllen.
   Keine Zeile darf mit der Eingabe oder einer anderen Ergebniszeile geteilt werden.
5. **M2:** Werte überschreiben, wenn die Länge bleibt. Eine Zeile durch eine neue ersetzen, wenn sie wächst oder
   schrumpft. Zeilenverweise tauschen, wenn ganze Zeilen wandern. Nie dem Parameter ein neues Array zuweisen.
6. **M3:** Drei Formen. Ein String wird mit `substring(1)` kürzer, ein Index wandert mit `index + 1`, oder zwei Indizes
   laufen aufeinander zu. Zählaufgaben zählen einen vorgegebenen Parameter herunter oder geben die Parität mit `!`
   weiter. Der richtige Rückgabewert bringt die meisten Punkte.
7. **main:** Deklarationen wörtlich abschreiben. M1-Ergebnisse speichern und mit `Arrays.deepToString` ausgeben. Nach
   jedem M2-Aufruf das veränderte Array ausgeben. M3-Werte direkt mit `println`. Reihenfolge der Tabelle einhalten.
8. **Zeit und Varianten:** Erst ein übersetzbares Gerüst, dann pro Methode ein Zeitbudget, am Ende Kontrolle.
   Varianten unterscheiden sich in Namen, Parameterreihenfolge, Konstanten, Gegenteil oder Bedeutung einer Spalte.
   Lies immer den Kopf deiner eigenen Variante.
:::

### Die häufigsten Fehler

Jeder Fehler steht mit einer Aufgabe, die ihn gezielt trainiert. Wenn dir ein Fehler bekannt vorkommt, löse die
genannte Aufgabe noch einmal.

1. **Einen Fall übersehen, den die Vorbedingung erlaubt**, etwa `i1 > i2` oder eine leere Zeile. Training: „Eine Summe in
   beide Richtungen“ und „Welche Aufrufe muss die Methode verkraften?“ in [20.1 Aufbau, Bewertung und die Angabe lesen](/lernen/ep1/programmiertest/aufbau-bewertung-und-die-angabe-lesen).
2. **Zähler als Klassenvariable**, der bei jedem weiteren Aufruf weiterzählt. Training: „Warum eine Klassenvariable
   falsch zählt“ in [20.2 Die Einschränkungen einhalten](/lernen/ep1/programmiertest/die-einschraenkungen-einhalten).
3. **Strings mit `==` vergleichen oder verbotene Methoden wie `indexOf` und `clone` benutzen.** Training: „Verstöße
   markieren“ und „Alles bis zum ersten Punkt“ in [20.2 Die Einschränkungen einhalten](/lernen/ep1/programmiertest/die-einschraenkungen-einhalten).
4. **Falsche Form in M1**, etwa die Länge ohne das Original oder eine zu kurze Zeile für einen Index. Training:
   „Wiederholen mit null und negativ“ und „Eine Treppe unter den Zeilen“ in [20.3 Methode 1: ein neues Array erzeugen](/lernen/ep1/programmiertest/methode-1-ein-neues-array-erzeugen).
5. **Zeilen mit der Eingabe teilen** (`r[i] = input[i]`). Training: „Nullen am Zeilenende entfernen“ in
   [20.3 Methode 1: ein neues Array erzeugen](/lernen/ep1/programmiertest/methode-1-ein-neues-array-erzeugen) und „Wenn M1 die Zeilen teilt“ in
   [20.6 main: Deklarationen und Testfälle](/lernen/ep1/programmiertest/main-deklarationen-und-testfaelle).
6. **In M2 dem Parameter ein neues Array zuweisen** oder ein Paar doppelt tauschen. Training: „Zwei Aufrufe auf
   demselben Array“ in [20.4 Methode 2: ein Array an Ort und Stelle verändern](/lernen/ep1/programmiertest/methode-2-ein-array-an-ort-und-stelle-veraendern).
7. **In falscher Richtung schieben oder vergleichen**, sodass schon überschriebene Werte weiterverwendet werden.
   Training: „Von hinten nach vorne schieben“ und „Wiederholte Zeilen markieren“ in [20.4 Methode 2: ein Array an Ort und Stelle verändern](/lernen/ep1/programmiertest/methode-2-ein-array-an-ort-und-stelle-veraendern).
8. **Basisfall zu spät**, sodass ein Paar hinter das Array greift, oder **Ergebnis des Selbstaufrufs verloren**.
   Training: „Genau n fallende Paare ab einem Index“ in [20.5 Methode 3: rekursiv ohne Schleifen](/lernen/ep1/programmiertest/methode-3-rekursiv-ohne-schleifen).
9. **Exklusive Grenze wie eine inklusive behandelt.** Training: „Zeichen aus einem Bereich, ohne ein bestimmtes“ in
   [20.5 Methode 3: rekursiv ohne Schleifen](/lernen/ep1/programmiertest/methode-3-rekursiv-ohne-schleifen). Dazu „Werte in einem halboffenen Intervall“ in
   [20.8 Gemischte Wiederholung](/lernen/ep1/programmiertest/gemischte-wiederholung).
10. **Arrays mit `println` oder `toString` statt `deepToString` ausgeben, eine `void`-Methode in `println`.** Training:
    „Fehler in einem main finden“ in [20.6 main: Deklarationen und Testfälle](/lernen/ep1/programmiertest/main-deklarationen-und-testfaelle).
11. **Testfälle in falscher Reihenfolge**, sodass eine Methode einen schon veränderten Zustand sieht. Training: „Ein main
    in die richtige Reihenfolge bringen“ in [20.6 main: Deklarationen und Testfälle](/lernen/ep1/programmiertest/main-deklarationen-und-testfaelle).
12. **An einer Methode hängenbleiben** und andere nicht beginnen. Training: „Ein Zeitbudget für M1“ und „Eine fast
    fertige Methode retten“ in [20.7 Zeitplan, Teilpunkte und Varianten](/lernen/ep1/programmiertest/zeitplan-teilpunkte-und-varianten).
13. **Die Parameterreihenfolge oder Spaltenbedeutung der eigenen Variante übersehen.** Training: „Der passende Aufruf
    für Variante B“ und „Ein Gitter mit vertauschten Koordinaten“ in [20.7 Zeitplan, Teilpunkte und Varianten](/lernen/ep1/programmiertest/zeitplan-teilpunkte-und-varianten).

### Selbstcheck zu den Lernzielen

Schätze für jedes Lernziel ein, wie sicher du bist: **1** = noch unsicher, **2** = meistens richtig, **3** = sicher,
auch unter Zeitdruck. Vergleiche danach mit deinen Ergebnissen. Wo du dich bei 3 eingeschätzt hast, aber Fehler machst,
liegt deine wichtigste Baustelle. Löse danach den Probetest in den Prüfungsaufgaben noch einmal mit Uhr.

1. Eine Angabe zerlegen und eine Fallliste schreiben.
2. Die Einschränkungen kennen und Verstöße finden.
3. M1-Methoden mit richtiger Form und eigenen Zeilen schreiben.
4. M2-Methoden mit Überschreiben, Zeilenersatz und Tauschen schreiben.
5. M3-Methoden in den drei Formen schreiben und nach Raster prüfen.
6. `main` mit Deklarationen und Testfällen umsetzen.
7. Die Zeit einteilen und Teilpunkte sichern.
8. Varianten erkennen und eine Lösung anpassen.

## Mündliche Prüfung: Feedbackgespräch

Zum Programmiertest gibt es kein Gespräch. Die Fragen unten sind trotzdem nützlich. Sie prüfen, ob du die Regeln des
Tests begründen kannst, und solche Fragen kommen auch im Feedbackgespräch zu den Aufgabenblättern vor. Das Gespräch
selbst übst du in Kapitel 22, beginnend mit
[22.1 So läuft das Feedbackgespräch ab](/lernen/ep1/feedbackgespraech/so-laeuft-das-feedbackgespraech-ab). Formuliere zuerst laut eine eigene Antwort in ganzen Sätzen. Decke
erst dann die Musterantwort auf und vergleiche sie mit den Kernpunkten.

```karten
- id: pt-karte-aufbau
  frage: Wie war ein Programmiertest in EP1 aufgebaut, und wie viele Punkte brauchst du?
  antwort: |
    In den Jahren 2021 bis 2023 bestand er aus drei Methoden und `main`. Die erste erzeugt ein neues
    zweidimensionales Array, die zweite verändert ein Array an Ort und Stelle, die dritte ist rekursiv ohne Schleifen.
    `main` bringt 1 Punkt für die Deklarationen und 2 Punkte für die Testfälle. Insgesamt gibt es 30 Punkte, und laut
    TISS braucht man mindestens die Hälfte, sonst zählt der Test mit 0.
  kernpunkte:
    - M1 neues Array, M2 an Ort und Stelle, M3 rekursiv
    - main 1 plus 2 Punkte
    - mindestens 15 von 30 Punkten
- id: pt-karte-vorbedingung
  frage: Was bedeutet eine Vorbedingung in der Angabe, und was folgt daraus für Randfälle?
  antwort: |
    Eine Vorbedingung ist eine Zusage des Aufrufers, zum Beispiel `input != null`. Ich muss sie nicht prüfen, weil
    Aufrufe, die sie verletzen, nicht vorkommen. Umgekehrt muss alles funktionieren, was sie nicht ausschließt. Steht
    dort nur „gültige Indizes“, sind `i1 > i2` und `i1 == i2` erlaubt und müssen richtig behandelt werden. Leere Zeilen
    sind erlaubt, solange nicht ausdrücklich `length > 0` verlangt ist.
  kernpunkte:
    - Zusage des Aufrufers, nicht prüfen
    - was nicht ausgeschlossen ist, muss funktionieren
    - Beispiele i1 größer i2, leere Zeile
- id: pt-karte-klassenvariable
  frage: Warum verbietet der Test Klassenvariablen, besonders in der rekursiven Methode?
  antwort: |
    Eine Klassenvariable existiert nur einmal für das ganze Programm und wird zwischen zwei Aufrufen aus `main` nicht
    zurückgesetzt. Ein Zähler darin zählt beim zweiten Testaufruf vom alten Stand weiter und liefert falsche Werte.
    Außerdem soll eine Methode ihr Ergebnis nur aus Parametern und Rückgabewerten berechnen. In der Rekursion geht die
    Information darum über den Rückgabewert oder einen vorgegebenen Parameter weiter.
  kernpunkte:
    - existiert einmal, wird nicht zurückgesetzt
    - zweiter Aufruf zählt falsch weiter
    - Information über Rückgabewert und Parameter
- id: pt-karte-geteilte-zeile
  frage: Warum darf eine M1-Methode eine Zeile nicht mit `r[i] = input[i]` übernehmen, obwohl der Inhalt stimmt?
  antwort: |
    Dann zeigen `r[i]` und `input[i]` auf dasselbe Array, das kennt man aus
    [12.5 Referenzen: zwei Namen für dasselbe Array](/lernen/ep1/arrays/referenzen-zwei-namen-fuer-dasselbe-array) als Aliasing. Verändert danach
    eine M2-Methode die Eingabe, ändert sich das Ergebnis unbemerkt mit. Die Angabe verlangt ein neues Array, also
    eigene Zeilen. In `main` prüft man das mit `result1[0] == test1[0]`. Bei einer richtigen Lösung ist das `false`.
  kernpunkte:
    - gleicher Verweis, kein neues Array
    - spätere Änderung wirkt auf beide
    - Test mit == liefert false bei richtiger Kopie
- id: pt-karte-parameter-neu
  frage: Warum bewirkt `a = neu;` am Ende einer M2-Methode beim Aufrufer nichts?
  antwort: |
    Java übergibt beim Aufruf eine Kopie des Verweises. Der Parameter `a` ist eine lokale Variable, die zuerst auf das
    Array des Aufrufers zeigt. Mit `a = neu;` zeigt nur diese lokale Variable auf ein anderes Array. Die Variable in
    `main` zeigt weiter auf das alte. Damit der Aufrufer etwas sieht, muss man in das Array hineinschreiben, also in
    `a[i]` oder `a[i][j]`.
  kernpunkte:
    - Parameter ist Kopie des Verweises
    - Neuzuweisung wirkt nur lokal
    - in a[i] oder a[i][j] schreiben
- id: pt-karte-zeile-laenger
  frage: Wie machst du in einer M2-Methode eine Zeile um ein Element länger?
  antwort: |
    Ein Array hat eine feste Länge, auch jede Zeile eines zweidimensionalen Arrays. Ich lege darum eine neue Zeile mit
    der Länge `n + 1` an, kopiere die alten Werte mit einer Schleife hinein und trage den neuen Wert ein. Dann setze ich
    `a[i] = neu;`. Weil `a` auf das Array des Aufrufers zeigt, sieht er die neue Zeile. `clone` und `System.arraycopy`
    sind dabei verboten.
  kernpunkte:
    - Länge eines Arrays ist fest
    - neue Zeile, kopieren, a[i] = neu
    - kein clone, kein arraycopy
- id: pt-karte-m3-formen
  frage: In welchen drei Formen kam die rekursive Methode vor, und wie sieht jeweils der Basisfall aus?
  antwort: |
    Erstens wird ein String kürzer, mit `substring(1)`, und der Basisfall ist der leere String. Zweitens wandert ein
    Index durch ein Array, mit `index + 1`, und der Basisfall ist das Ende des Arrays, bei Paaren schon der letzte
    Index. Drittens laufen zwei Indizes aufeinander zu, mit `start + 1` und `end - 1`, und der Basisfall ist erreicht,
    wenn sie sich treffen oder nebeneinander stehen. Das kennt man aus
    [10.4 Rekursion mit Strings](/lernen/ep1/rekursion/rekursion-mit-strings) und
    [13.4 Zwei Indizes: von beiden Enden zur Mitte](/lernen/ep1/rekursion-arrays/zwei-indizes-von-beiden-enden-zur-mitte).
  kernpunkte:
    - String mit substring, Basisfall leer
    - Index mit index + 1, Basisfall Ende oder vorletzter Index
    - zwei Indizes zur Mitte
- id: pt-karte-genau-k
  frage: Wie prüft man rekursiv „kommt genau k-mal vor“, ohne einen Zähler anzulegen?
  antwort: |
    Ich zähle den vorgegebenen Parameter `k` herunter. Jeder Treffer verbraucht einen der gesuchten Treffer, also rufe
    ich mich dann mit `k - 1` auf, sonst mit `k`. Im Basisfall, beim leeren String, müssen alle Treffer verbraucht sein.
    Darum liefert er `k == 0`. Für „mindestens k-mal“ ändert sich nur der Basisfall zu `k <= 0`.
  kernpunkte:
    - k bei jedem Treffer verkleinern
    - Basisfall liefert k == 0
    - Variante mindestens mit k kleiner gleich 0
- id: pt-karte-raster
  frage: Wofür gab es bei der rekursiven Methode Punkte, und was folgt daraus für deine Arbeit?
  antwort: |
    Im Jänner 2022 gab es 1 Punkt für einen Ansatz mit Rückgabe, je 1 Punkt für Basisfall vorhanden und korrekt, je
    1 Punkt für Fortschritt vorhanden und korrekt und 4 Punkte für den richtigen Rückgabewert. Auch eine unvollständige
    Rekursion bringt also Punkte, wenn Basisfall und Fortschritt stimmen. Eine Lösung mit Schleife dagegen verstößt gegen
    die Einschränkungen.
  kernpunkte:
    - 1 plus 2 plus 2 plus 4 Punkte
    - Teilpunkte für Basisfall und Fortschritt
    - Schleife ist ein Verstoß
- id: pt-karte-testtabelle
  frage: Wie setzt du die drei Arten von Zeilen einer Testtabelle in main um?
  antwort: |
    Bei einer M1-Methode speichere ich das Ergebnis, etwa `int[][] result1 = spiegeln(test1);`, und gebe es mit
    `Arrays.deepToString` aus. Bei einer M2-Methode rufe ich sie zuerst als eigene Anweisung auf und gebe danach das
    veränderte Array aus, denn eine `void`-Methode hat keinen Wert. Bei einer M3-Methode gebe ich den Wert direkt mit
    `println` aus. Die Deklarationen schreibe ich vorher wörtlich ab.
  kernpunkte:
    - M1 speichern und deepToString
    - M2 aufrufen, dann Array ausgeben
    - M3 direkt mit println
- id: pt-karte-reihenfolge
  frage: Warum musst du die Testfälle in main in der Reihenfolge der Tabelle schreiben?
  antwort: |
    Viele Testfälle arbeiten auf demselben Array. Eine M2-Methode verändert es, und jeder spätere Aufruf sieht den
    veränderten Zustand. Die Tabelle wurde in genau dieser Reihenfolge erstellt. Ändere ich die Reihenfolge, bekommt etwa
    die M1-Methode schon ein umgedrehtes Array, und die Ausgabe passt nicht mehr zur Tabelle, obwohl jede Methode stimmt.
  kernpunkte:
    - Aufrufe teilen dieselben Arrays
    - M2 verändert den Zustand
    - Tabelle ist in dieser Reihenfolge berechnet
- id: pt-karte-zeitplan
  frage: Wie teilst du die Zeit im Test ein, und warum zuerst ein Gerüst?
  antwort: |
    Ich lese zuerst die ganze Angabe und rechne die Beispiele nach. Dann schreibe ich ein Gerüst: Deklarationen,
    Testaufrufe in `main` und jede Methode mit einer übersetzbaren Rückgabe. So läuft das Programm früh, `main` bringt
    seine Punkte, und jede fertige Methode kann ich sofort testen. Danach bekommt jede Methode ein Budget, etwa
    2 Minuten pro Punkt. Am Ende bleiben 10 Minuten für die Kontrolle.
  kernpunkte:
    - lesen und Beispiele nachrechnen
    - übersetzbares Gerüst zuerst
    - Budget pro Methode, Kontrolle am Ende
- id: pt-karte-varianten
  frage: Wie unterscheiden sich die Varianten A und B einer Angabe, und worauf achtest du?
  antwort: |
    Die Varianten sind gleich aufgebaut, aber in Kleinigkeiten verschieden. Es kann sich der Name ändern, die
    Reihenfolge der Parameter, eine Konstante wie die Mindestlänge, das Gegenteil wie gerade statt ungerade oder die
    Bedeutung einer Spalte. Ich lese darum den Kopf meiner eigenen Variante genau und ändere bei vertauschten Parametern
    auch jeden Selbstaufruf und jeden Testaufruf. Vertauschte `int`-Parameter bemerkt der Compiler nicht.
  kernpunkte:
    - Namen, Parameterreihenfolge, Konstanten, Gegenteil, Spaltenbedeutung
    - eigenen Kopf genau lesen
    - Compiler findet vertauschte int nicht
- id: pt-karte-null-punkte
  frage: Gegenbeispiel. Wie kann eine Methode übersetzen und alle Testausgaben richtig liefern und trotzdem keine Punkte bringen?
  antwort: |
    Wenn sie gegen eine Einschränkung verstößt. Eine rekursive Methode mit einer Schleife darin, eine Kopie mit `clone`
    oder ein Vergleich von Strings mit `==` können zufällig richtige Ausgaben liefern. Die Aufgabe verlangt aber
    ausdrücklich, ohne diese Mittel auszukommen. Eine solche Lösung zählt nicht als Lösung der gestellten Aufgabe.
  kernpunkte:
    - Verstoß gegen eine Einschränkung
    - Schleife in der Rekursion, clone, == bei Strings
    - richtige Ausgabe reicht nicht
- id: pt-karte-deeptostring
  frage: Warum brauchst du für ein `int[][]` die Methode `Arrays.deepToString` und nicht `Arrays.toString`?
  antwort: |
    Ein `int[][]` ist ein Array von Verweisen auf Zeilen. `Arrays.toString` gibt für jedes Element dessen Textform aus,
    und für eine Zeile ist das nur eine Kennung wie `[I@1b6d3586`. `Arrays.deepToString` geht in jede Zeile hinein und
    zeigt ihren Inhalt, so wie in der Testtabelle. Für ein eindimensionales `int[]` reicht `Arrays.toString`.
  kernpunkte:
    - Zeilen sind Verweise
    - toString zeigt nur Kennungen
    - deepToString geht in die Zeilen
```
