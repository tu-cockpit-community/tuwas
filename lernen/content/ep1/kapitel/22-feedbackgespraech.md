---
nummer: 22
titel: "Das Feedbackgespräch: Zusatzfragen, Variationen und Code erklären"
kurz: Die Aufgabenblätter bringen 24 Punkte, bewertet im Feedbackgespräch. Hier übst du die Zusatzfragen der Blätter 1 bis 6, kleine Änderungsaufträge und das Erklären deines eigenen Codes.
teil: training
stunden: 6
pruefungsgewicht: 2
voraussetzungen: [ausdruecke, verzweigungen, schleifen, methoden, ziffern, eingabe, codequalitaet, rekursion, rekursion-vertieft, arrays, arrays-2d, projekt]
lernziele:
  - den Ablauf und die Bewertung des Feedbackgesprächs beschreiben und eine Antwort nach dem Schema Kernaussage, Begründung, Beleg im eigenen Code formulieren
  - Zusatzfragen zu Verzweigungen, Schleifen, Literalen und Typumwandlungen (Blatt 1) richtig beantworten und mit einem kleinen Codebeispiel belegen
  - Zusatzfragen zu Parametern, Rückgabewerten, Sichtbarkeit, Überladen und Scanner-Eingaben (Blatt 2 und 3) beantworten und die Antwort am Code zeigen
  - Zusatzfragen zur Rekursion beantworten, also Basisfall und Fortschritt benennen, Aufrufe und gezeichnete Formen eines Fraktals zählen und rekursive mit iterativen Lösungen vergleichen
  - Zusatzfragen zu Arrays und Referenzen beantworten (Indextyp, Länge, Kopie, Vergleich mit ==, Array als Parameter) und das Verhalten eines Programms damit erklären
  - Variationsaufträge wie „jetzt absteigend“, „jetzt mit Rückgabewert“ oder „jetzt rekursiv“ in wenigen Minuten an einer Lösung umsetzen und mit einem Grenzfall testen
  - eigenen oder fremden Code in Schritten erklären (Zweck, Parameter, Ablauf, Sonderfälle), seine Ausgabe vorhersagen und typische Rückfragen beantworten
  - Fehler in Code und in Antworten auf Zusatzfragen finden, auch in Antworten und Programmen, die eine KI erzeugt hat, und sie begründet korrigieren
---

**Worum geht es?** In EP1 zählen die vier Aufgabenblätter zusammen 24 von 100 Punkten (so steht es in TISS für das
Wintersemester 2026/27, siehe [1.7 Kursmodus 2026W und Abgaberegeln](/lernen/ep1/werkzeuge/kursmodus-2026w-und-abgaberegeln)).
Du gibst deine Lösung zu Hause ab. Die
Punkte bekommst du aber erst im **Feedbackgespräch** in der Übung. Dort sitzt du mit einer Tutorin, einem Tutor oder der
Übungsleitung vor deinem Code. Du erklärst ihn, beantwortest Fragen dazu und änderst vielleicht eine Kleinigkeit.

Ein **Feedbackgespräch** ist also ein kurzes Einzelgespräch über deine eigene Abgabe. Es ist keine Prüfung mit
Fangfragen. Es soll zeigen, dass du deinen Code **verstehst**. Wer eine Lösung abschreibt oder von einer KI erzeugen
lässt, kann sie meistens nicht erklären. Genau das fällt im Gespräch auf.

Dieses Kapitel ist ein **Trainingskapitel**. Es bringt kaum neuen Stoff. Es nimmt die Themen der Kapitel 1 bis 14 und des
Projekts aus [Kapitel 16 „Abschlussprojekt: ein Spiel auf einem Zeichenfeld“](/lernen/ep1/projekt). Diese Themen übt
es in der Form, in der das Gespräch sie abfragt. Die Anwendungen aus
[Kapitel 15 „2D-Anwendungen: Sudoku, Bilder, Flood-Fill“](/lernen/ep1/arrays-anwendungen) und die Algorithmen aus den
Kapiteln [17 „Algorithmen und Komplexität“](/lernen/ep1/komplexitaet), [18 „Suchen“](/lernen/ep1/suchen) und
[19 „Sortieren“](/lernen/ep1/sortieren) kommen hier nicht vor. Du lernst drei Dinge:

1. **Zusatzfragen beantworten.** Auf den Blättern stehen bei manchen Aufgaben **Zusatzfragen**. Das sind Verständnisfragen
   zum Thema der Aufgabe, zum Beispiel sinngemäß „Kann eine Methode zwei Ergebnisse auf einmal zurückgeben?“. Du musst sie für jede
   angekreuzte Aufgabe im Gespräch beantworten können.
2. **Variationsaufträge umsetzen.** Vielleicht heißt es: „Ändere deine Lösung so, dass sie die Zahlen absteigend
   ausgibt.“ Das nennen wir einen **Variationsauftrag**. Ob es solche Aufträge im Gespräch wirklich gibt, ist nicht
   belegt. Das Kapitel übt sie trotzdem, weil sie zeigen, ob du deinen Code verstehst.
3. **Deinen Code erklären.** Du sagst in eigenen Worten, was eine Methode tut, und beantwortest Rückfragen wie „Was
   passiert, wenn der String leer ist?“.

**Was ist über das Gespräch bekannt?** Die Lehrveranstaltung veröffentlicht das genaue Format für das Wintersemester 2026
nicht. Dieses Kapitel stützt sich auf drei Quellen:

- **Die Aufgabenblätter.** Seit 2020 steht auf den Blättern, die Zusatzfragen enthalten, sinngemäß: Bei manchen
  Aufgaben gibt es Zusatzfragen. Du musst sie für die angekreuzten Aufgaben in der Übung beantworten können. Die
  Antworten darfst du als Kommentar in deine Java-Datei schreiben. Nicht jedes Blatt hat Zusatzfragen: Im
  Wintersemester 2023 hatten nur die Blätter 3 und 4 welche.
- **Erfahrungsberichte im VoWi** (dem Wiki der Fachschaft Informatik). Nach diesen Berichten gibt es seit etwa 2024 kein
  Vorrechnen an der Tafel mehr. Stattdessen gibt es ein Einzelgespräch, das prüft, ob man die Abgabe verstanden hat.
- **Die Zusatzfragen selbst**, gesammelt aus den Blättern der Jahre 2017 bis 2023. Leitfassung sind die Blätter vom
  Wintersemester 2023. Die Fragen hier sind **umformuliert und mit eigenen Zahlen nachgebaut**, keine Originalfragen.

Alles, was über diese Quellen hinausgeht, ist als Annahme gekennzeichnet.

**Wie du dieses Kapitel benutzt.** Viele Aufgaben hier sind **Selbsttests mit freier Antwort**. Du schreibst zuerst
deine eigene Antwort in das Textfeld. Erst danach siehst du eine Musterantwort und vergleichst selbst. Diese
**Selbstbewertung** ist das beste Training für das Gespräch, weil du dort auch frei sprechen musst. Sei dabei ehrlich zu
dir. Eine Antwort zählt nur dann als richtig, wenn sie die Kernpunkte der Musterantwort enthält.

:::vorwissen
Dieses Kapitel wiederholt Stoff aus fast allen früheren Kapiteln. Die wichtigsten Grundlagen sind:

- **Verzweigungen und `switch`** aus [3.1 Die if-Anweisung](/lernen/ep1/verzweigungen/die-if-anweisung) und
  [3.5 Die switch-Anweisung und der Fallthrough](/lernen/ep1/verzweigungen/die-switch-anweisung-und-der-fallthrough).
- **Schleifen und Intervallgrenzen** aus [4.2 Die for-Schleife und Intervallgrenzen](/lernen/ep1/schleifen/die-for-schleife-und-intervallgrenzen).
- **Parameter und Rückgabewerte** aus [6.2 Parameter: Werte an eine Methode übergeben](/lernen/ep1/methoden/parameter-werte-an-eine-methode-uebergeben)
  und [6.3 Rückgabewerte und return](/lernen/ep1/methoden/rueckgabewerte-und-return).
- **Eingaben prüfen** aus [8.4 Eingaben prüfen mit hasNextInt](/lernen/ep1/eingabe/eingaben-pruefen-mit-hasnextint).
- **Basisfall und Fortschritt** aus [10.1 Eine Methode ruft sich selbst auf](/lernen/ep1/rekursion/eine-methode-ruft-sich-selbst-auf).
- **Referenzen** aus [12.5 Referenzen: zwei Namen für dasselbe Array](/lernen/ep1/arrays/referenzen-zwei-namen-fuer-dasselbe-array).

Die folgenden sechs Fragen zeigen dir, ob du diese Grundlagen noch sicher beherrschst. Wenn eine Frage nicht klappt,
wiederhole zuerst den verlinkten Abschnitt. Jede Lektion dieses Kapitels erklärt den nötigen Stoff aber noch einmal kurz.
:::

```aufgabe
id: fg-ein-switch
titel: Ein switch ohne break
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [3.5 Die switch-Anweisung und der Fallthrough](/lernen/ep1/verzweigungen/die-switch-anweisung-und-der-fallthrough))
teile:
  - typ: ausgabe
    code: |
      int note = 2;
      switch (note) {
          case 1:
              System.out.println("sehr gut");
          case 2:
              System.out.println("gut");
          case 3:
              System.out.println("befriedigend");
              break;
          default:
              System.out.println("sonst");
      }
    loesung: |
      gut
      befriedigend
    fehler:
      - wert: "gut"
        meldung: 'Nach `case 2` steht kein `break`. Java führt dann auch die Anweisungen des nächsten Falls aus, bis ein `break` kommt. Das nennt man **Fallthrough** (Durchfallen).'
      - wert: "gut\nbefriedigend\nsonst"
        meldung: 'Das `break` nach `befriedigend` beendet die `switch`-Anweisung. Der `default`-Zweig wird nicht mehr erreicht.'
hinweise:
  - Java springt zum passenden `case` und läuft weiter, bis ein `break` oder das Ende der `switch`-Anweisung kommt.
loesung: |
  `note` ist 2. Java springt zu `case 2` und gibt `gut` aus.
  ---
  Dort fehlt das `break`. Java läuft in `case 3` weiter, gibt `befriedigend` aus und hält beim `break` an.
```

```aufgabe
id: fg-ein-grenzen
titel: Wie oft läuft die Schleife?
niveau: 1
art: check
angabe: |
  Wie oft wird der Rumpf dieser Schleife ausgeführt?
  (Wiederholung: [4.2 Die for-Schleife und Intervallgrenzen](/lernen/ep1/schleifen/die-for-schleife-und-intervallgrenzen))

  ```java
  for (int i = 4; i < 20; i += 4) {
      System.out.print(i + " ");
  }
  ```
teile:
  - typ: zahl
    loesung: "4"
    fehler:
      - wert: "5"
        meldung: 'Die Bedingung lautet `i < 20`, nicht `i <= 20`. Für `i = 20` ist sie falsch, die 20 wird nicht mehr ausgegeben.'
      - wert: "16"
        meldung: 'Die Schleife zählt nicht in Einerschritten. `i += 4` erhöht `i` jedes Mal um 4.'
hinweise:
  - Schreib die Werte von `i` auf, für die die Bedingung `i < 20` gilt.
loesung: |
  `i` nimmt die Werte 4, 8, 12 und 16 an. Danach ist `i = 20`, und `20 < 20` ist falsch.
  ---
  Der Rumpf läuft also 4-mal. Ausgabe: `4 8 12 16 `.
```

```aufgabe
id: fg-ein-kopie
titel: Ein Parameter ist eine Kopie
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? (Wiederholung: [6.2 Parameter: Werte an eine Methode übergeben](/lernen/ep1/methoden/parameter-werte-an-eine-methode-uebergeben))
teile:
  - typ: ausgabe
    code: |
      public class Kopie {
          public static void erhoehe(int zahl) {
              zahl = zahl + 10;
          }

          public static void main(String[] args) {
              int wert = 5;
              erhoehe(wert);
              System.out.println(wert);
          }
      }
    loesung: |
      5
    fehler:
      - wert: "15"
        meldung: 'Der Parameter `zahl` bekommt eine **Kopie** des Werts von `wert`. Die Methode ändert nur diese Kopie. Die Variable `wert` in `main` bleibt 5.'
hinweise:
  - Beim Aufruf wird der Wert 5 in den Parameter kopiert. Ist `zahl` dieselbe Variable wie `wert`?
loesung: |
  `erhoehe(wert)` kopiert den Wert 5 in den Parameter `zahl`. Die Methode setzt `zahl` auf 15.
  ---
  Am Ende der Methode verschwindet `zahl`. `wert` in `main` wurde nie verändert, Ausgabe `5`.
```

```aufgabe
id: fg-ein-hasnext
titel: Was prüft hasNextInt?
niveau: 1
art: check
angabe: |
  Ein `Scanner` liest von der Tastatur. Der Nutzer tippt `zwölf` und drückt Enter.
  Was liefert `sc.hasNextInt()` jetzt?
  (Wiederholung: [8.4 Eingaben prüfen mit hasNextInt](/lernen/ep1/eingabe/eingaben-pruefen-mit-hasnextint))
teile:
  - typ: auswahl
    optionen:
      - "`false`, und das Wort `zwölf` bleibt im Puffer liegen"
      - "`false`, und das Wort `zwölf` wird dabei automatisch entfernt"
      - "Eine `InputMismatchException`, weil `zwölf` keine Zahl ist"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`hasNextInt()` schaut nur nach, es **liest nichts**. Das Wort bleibt im Puffer, bis du es zum Beispiel mit `sc.next()` holst.'
      - wert: 2
        meldung: 'Die Exception wirft erst `nextInt()`, wenn das nächste Wort keine ganze Zahl ist. `hasNextInt()` liefert stattdessen `false`.'
hinweise:
  - '`hasNextInt` heißt wörtlich „hat als Nächstes eine ganze Zahl?“. Es ist eine Frage, kein Lesebefehl.'
loesung: |
  `hasNextInt()` prüft, ob das nächste Wort im Puffer eine ganze Zahl ist. `zwölf` ist keine, also `false`.
  ---
  Gelesen wird dabei nichts. `zwölf` bleibt im Puffer liegen, bis ein Lesebefehl wie `sc.next()` es entfernt.
```

```aufgabe
id: fg-ein-basisfall
titel: Den Basisfall erkennen
niveau: 1
art: check
angabe: |
  Welche Zeile ist der **Basisfall** dieser rekursiven Methode, also der Fall ohne Selbstaufruf?
  (Wiederholung: [10.1 Eine Methode ruft sich selbst auf](/lernen/ep1/rekursion/eine-methode-ruft-sich-selbst-auf))

  ```java
  public static int summe(int n) {
      if (n == 0) {
          return 0;
      }
      return n + summe(n - 1);
  }
  ```
teile:
  - typ: auswahl
    optionen:
      - "`if (n == 0) { return 0; }`"
      - "`return n + summe(n - 1);`"
      - "Die Methode hat keinen Basisfall."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'In dieser Zeile ruft sich `summe` selbst auf. Das ist der **rekursive Fall**. Der Basisfall liefert ein Ergebnis ohne Selbstaufruf.'
      - wert: 2
        meldung: 'Für `n == 0` liefert die Methode sofort 0, ohne sich selbst aufzurufen. Genau das ist ein Basisfall.'
hinweise:
  - Suche die Stelle, an der die Methode ein Ergebnis liefert, ohne `summe` noch einmal aufzurufen.
loesung: |
  Der Basisfall ist `n == 0`. Dort liefert die Methode 0 ohne Selbstaufruf.
  ---
  `n - 1` ist der **Fortschritt**: Jeder Aufruf kommt dem Basisfall um 1 näher.
```

```aufgabe
id: fg-ein-alias
titel: Zwei Namen für ein Array
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [12.5 Referenzen: zwei Namen für dasselbe Array](/lernen/ep1/arrays/referenzen-zwei-namen-fuer-dasselbe-array))
teile:
  - typ: ausgabe
    code: |
      int[] a = {3, 6, 9};
      int[] b = a;
      b[0] = 100;
      System.out.println(a[0]);
    loesung: |
      100
    fehler:
      - wert: "3"
        meldung: '`b = a` kopiert nicht die Zahlen, sondern nur den **Verweis** auf das Array. `a` und `b` zeigen auf dasselbe Array. Was du über `b` änderst, siehst du auch über `a`.'
hinweise:
  - Eine Array-Variable enthält nicht die Zahlen selbst, sondern einen Verweis auf das Array.
loesung: |
  `int[] b = a;` legt kein neues Array an. `b` zeigt auf dasselbe Array wie `a`.
  ---
  `b[0] = 100` ändert also das gemeinsame Array. `a[0]` ist danach 100.
```

## So läuft das Feedbackgespräch ab

```aufgabe
id: fg-ab-check-ziel
titel: Was soll das Gespräch zeigen?
niveau: 1
art: check
angabe: |
  Die Einleitung dieses Kapitels beschreibt, wozu das Feedbackgespräch dient. Was ist sein Hauptziel?
teile:
  - typ: auswahl
    optionen:
      - Es soll zeigen, dass du deine abgegebene Lösung verstehst und erklären kannst.
      - Es soll prüfen, ob du neue Aufgaben in derselben Zeit lösen kannst wie im Test.
      - Es soll vor allem die Formatierung und die Kommentare deines Codes bewerten.
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Für neue Aufgaben unter Zeitdruck gibt es den Test. Im Gespräch geht es um **deine** Abgabe und ob du sie verstehst.
      - wert: 2
        meldung: Lesbarer Code hilft beim Erklären. Bewertet wird aber, ob du den Code verstehst, nicht nur, wie er aussieht.
hinweise:
  - Überlege, was an einer abgeschriebenen Lösung im Gespräch auffällt.
loesung: |
  Das Gespräch prüft das **Verständnis** der eigenen Abgabe.
  ---
  Wer die Lösung nicht selbst geschrieben hat, kann sie meistens nicht erklären. Das fällt im Gespräch auf.
```

Bevor es um einzelne Fragen geht, schauen wir uns den Ablauf an. Wer weiß, was im Gespräch kommt, ist ruhiger und
antwortet besser.

### Der Ablauf in fünf Schritten

Der folgende Ablauf beruht auf den Blättern bis 2023 und auf den VoWi-Erfahrungsberichten seit etwa 2024. Für das
Wintersemester 2026 ist er nicht offiziell beschrieben. Nimm ihn also als begründete Annahme.

1. **Abgeben und ankreuzen.** Du lädst dein IntelliJ-Projekt in TUWEL hoch. Zusätzlich kreuzt du in TUWEL an, welche
   Aufgaben du gelöst hast. TUWEL ist die Lernplattform der TU Wien.
2. **Das Gespräch beginnt.** In der Übung öffnet die Tutorin oder der Tutor deinen Code. Meist heißt es dann: „Erklär mir
   bitte deine Lösung zu Aufgabe 3.“
3. **Zusatzfragen.** Zu den angekreuzten Aufgaben kommen Fragen. Oft sind es die Zusatzfragen vom Blatt, manchmal eigene
   Rückfragen zu deinem Code.
4. **Vielleicht ein Variationsauftrag.** Du sollst eine Kleinigkeit ändern, zum Beispiel die Reihenfolge der Ausgabe.
   Dieser Schritt ist eine **Annahme**: Weder die Blätter noch die Erfahrungsberichte erwähnen solche Aufträge. Sie sind
   aber eine naheliegende Art zu prüfen, ob du deinen Code verstehst, und darum ein gutes Training.
5. **Bewertung.** Laut den VoWi-Berichten wird das Gespräch mit einem Prozentsatz bewertet, von 0 bis 100 Prozent.

Für die Abgabe gelten auf jedem Blatt dieselben Regeln. Sie stehen auf der ersten Seite, und ein Verstoß fällt im
Gespräch schnell auf:

- Das Programm muss **kompilieren** und **laufen**. Kompilieren heißt: Der **Compiler**, das Übersetzungsprogramm von
  Java, kann den Quelltext ohne Fehlermeldung übersetzen.
- **Dateinamen und Ordnerstruktur** bleiben unverändert.
- Du verwendest nur **erlaubte Klassen** der Java-Bibliothek, meist `String`, `Math` und die auf dem Blatt genannten.
- **Vorbedingungen** musst du nicht prüfen. Eine Vorbedingung ist eine Zusicherung über die Eingabe, zum Beispiel
  „`n` ist größer als 0“ oder „`text` ist nicht `null`“ (`null` heißt: Die Variable verweist auf gar keinen String).
  Du darfst dich darauf verlassen.

```aufgabe
id: fg-ab-regeln
titel: Die Abgaberegeln
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Beurteile jede Aussage über die Regeln, die auf den Aufgabenblättern stehen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Ein Programm, das nicht kompiliert, kann trotzdem volle Punkte bekommen, wenn die Idee stimmt.
        richtig: false
        erklaerung: Die Blätter verlangen ausdrücklich, dass das Programm kompiliert und läuft.
      - text: Wenn eine Vorbedingung `n > 0` lautet, musst du negative Werte nicht abfangen.
        richtig: true
        erklaerung: Auf den Blättern steht, dass du dich auf die Vorbedingungen verlassen darfst und sie nicht prüfen musst.
      - text: Du darfst die Datei `Aufgabe3.java` in `Rekursion.java` umbenennen, wenn der Name besser passt.
        richtig: false
        erklaerung: Dateinamen und Ordnerstruktur sollen unverändert bleiben.
      - text: Die Antworten auf Zusatzfragen darfst du als Kommentar in deine Java-Datei schreiben.
        richtig: true
        erklaerung: Das steht seit 2020 auf den Blättern mit Zusatzfragen. Im Gespräch musst du sie trotzdem mündlich beantworten können.
    fehler:
      - wert: [f, f, f, f]
        meldung: Vorbedingungen sind eine Erleichterung. Du darfst dich darauf verlassen und musst sie nicht selbst prüfen.
      - wert: [f, r, r, r]
        meldung: Dateinamen und Ordnerstruktur bleiben so, wie sie im vorgegebenen Projekt sind.
hinweise:
  - Lies die Liste der Abgaberegeln in dieser Lektion noch einmal.
loesung: |
  **Ansatz:** Jede Aussage mit den vier Abgaberegeln vergleichen.
  ---
  Kompilieren ist Pflicht, Dateinamen bleiben gleich. Aussagen 1 und 3 sind falsch.
  Vorbedingungen musst du nicht prüfen, Antworten als Kommentar sind erlaubt. Aussagen 2 und 4 sind richtig.
```

### Wie die Punkte entstehen

Nach den VoWi-Erfahrungsberichten seit etwa 2024 ergibt sich die Punktezahl aus zwei Teilen. Der erste Teil ist der
**Anteil der angekreuzten Aufgaben**. Der zweite Teil ist die **Bewertung im Gespräch** in Prozent. Beide werden
multipliziert. Für die Beispiele nehmen wir an, dass jedes der vier Blätter 6 Punkte wert ist. Das ergibt die 24 Punkte.
Die genaue Rechenregel für 2026 ist nicht veröffentlicht. Alle Rechnungen in dieser Lektion beruhen also auf dieser
Annahme.

:::beispiel[Punkte für ein Blatt berechnen]
Ein Blatt hat fünf Aufgaben. Aufgabe 1 bis 4 bringen je 1 Punkt, Aufgabe 5 bringt 2 Punkte. Zusammen sind das 6 Punkte.

1. **Angekreuzt:** Du hast Aufgabe 1, 2 und 5 gelöst und angekreuzt. Das sind $1 + 1 + 2 = 4$ Punkte.
2. **Gespräch:** Du erklärst alles gut, bei einer Zusatzfrage stockst du. Die Bewertung lautet 80 Prozent.
3. **Ergebnis:** Du bekommst 80 Prozent von 4 Punkten, also $0{,}8 \cdot 4 = 3{,}2$ Punkte.

Daraus folgt zweierlei. Was du nicht ankreuzt, bringt nichts, auch wenn du es fast gelöst hast. Und was du ankreuzt,
musst du im Gespräch auch erklären können.
:::

```aufgabe
id: fg-ab-punkte
titel: Punkte für ein Blatt
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Ein Blatt hat fünf Aufgaben: Aufgabe 1 bis 4 zu je 1 Punkt und Aufgabe 5 zu 2 Punkten.
  Du kreuzt Aufgabe 1 bis 4 an. Das Gespräch wird mit 75 Prozent bewertet.
  Wie viele Punkte bekommst du nach der Rechenregel aus dieser Lektion?
teile:
  - typ: zahl
    loesung: "0.75 * 4"
    fehler:
      - wert: "4.5"
        meldung: Du hast 75 Prozent von **allen** 6 Punkten genommen. Zählen nur die angekreuzten Aufgaben, also 4 Punkte.
      - wert: "4"
        meldung: Das sind die angekreuzten Punkte. Sie werden noch mit der Gesprächsbewertung von 75 Prozent multipliziert.
hinweise:
  - Zähle zuerst die Punkte der angekreuzten Aufgaben. Nimm davon 75 Prozent.
loesung: |
  **Ansatz:** Punkte der angekreuzten Aufgaben mal Gesprächsbewertung.
  ---
  Angekreuzt sind Aufgabe 1 bis 4, das sind 4 Punkte. 75 Prozent davon sind $0{,}75 \cdot 4 = 3$ Punkte.
```

### Wie eine gute Antwort gebaut ist

Im Gespräch reicht ein „Ja“ oder „Nein“ fast nie. Die Tutorin will hören, dass du den **Grund** kennst. Am besten zeigst
du auch, wo man das in deinem Code sieht. Eine gute Antwort hat darum meistens drei Teile, manchmal einen vierten:

1. **Kernaussage:** ein Satz, der die Frage direkt beantwortet.
2. **Begründung:** warum das so ist, also welcher Mechanismus von Java dahintersteckt.
3. **Beleg:** eine konkrete Stelle in deinem eigenen Code.
4. **Grenzfall:** wo die Aussage nicht gilt oder worauf man achten muss.

Zuerst ein Beispiel, danach fassen wir das Schema zusammen.

:::beispiel[Schwache und starke Antwort auf eine Zusatzfrage]
**Zusatzfrage (sinngemäß, Blatt 2):** „Kann eine Methode dem Aufrufer zwei Ergebnisse auf einmal zurückgeben?“

**Schwache Antwort:** „Nein.“ Das stimmt, aber die Tutorin weiß jetzt nicht, ob du geraten hast. Die nächste Frage
lautet fast sicher „Warum nicht?“.

**Starke Antwort:**

1. *Kernaussage:* „Nein. Eine Methode liefert mit `return` höchstens einen Wert zurück.“
2. *Begründung:* „Im Methodenkopf steht genau ein Rückgabetyp, zum Beispiel `int`, oder `void` für gar keinen Wert.
   Sobald ein `return` ausgeführt wird, endet die Methode.“
3. *Beleg:* „In meiner Methode `summeVonBis` gebe ich nur die Summe zurück.“
4. *Grenzfall:* „Brauche ich zwei Werte, kann ich ein Array mit zwei Plätzen zurückgeben. Im Projekt aus
   [16.2 Figur und Kisten finden](/lernen/ep1/projekt/figur-und-kisten-finden) liefert die Suche nach der Figur
   `new int[]{x, y}`. Das ist aber immer noch **ein** Rückgabewert, nämlich ein Array.“

Die starke Antwort dauert etwa 30 Sekunden. Sie beantwortet die Nachfrage „Warum?“, bevor sie gestellt wird.
:::

:::beispiel[Ein Gesprächsausschnitt zu einer Schleife]
Die Aufgabe war: Gib alle Vielfachen von 15 im Intervall von 15 (ausgeschlossen) bis 75 (eingeschlossen) aus. Die
Zahlen sollen durch Sterne getrennt sein, mit einem Stern am Anfang und am Ende. Erwartet ist `*30*45*60*75*`.

```java
System.out.print("*");
for (int i = 30; i <= 75; i += 15) {
    System.out.print(i + "*");
}
System.out.println();
```

**Tutor:** „Warum beginnt deine Schleife bei 30 und nicht bei 15?“

**Studentin:** „Das Intervall schließt 15 aus. Das sagt die Klammer: Bei ]15, 75] gehört 15 nicht dazu, 75 schon. Die
erste passende Zahl ist darum 30.“

**Tutor:** „Und warum steht der erste Stern vor der Schleife?“

**Studentin:** „In der Schleife kommt nach jeder Zahl ein Stern. Vor der ersten Zahl fehlt dann noch einer. Den gebe
ich einmal vor der Schleife aus.“

Beide Antworten nennen einen Grund und zeigen auf eine bestimmte Zeile. Mehr verlangt das Gespräch nicht.
:::

:::merke[Das Antwortschema]
**Kernaussage, Begründung, Beleg im eigenen Code**, dazu wenn passend ein **Grenzfall**. Ein Satz pro Teil reicht. Sprich
die Fachbegriffe aus (Parameter, Rückgabewert, Verweis, Basisfall), denn genau die will man hören.
:::

```aufgabe
id: fg-ab-schema
titel: Die Teile einer guten Antwort ordnen
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Bringe die Teile einer guten Antwort auf eine Zusatzfrage in die empfohlene Reihenfolge.
teile:
  - typ: reihenfolge
    elemente:
      - "Kernaussage: ein Satz, der die Frage direkt beantwortet"
      - "Begründung: welcher Mechanismus von Java dahintersteckt"
      - "Beleg: eine konkrete Stelle im eigenen Code"
      - "Grenzfall: wo die Aussage nicht gilt oder worauf man achten muss"
    fehler:
      - wert: [2, 0, 1, 3]
        meldung: Der Beleg ist stark, aber er braucht zuerst eine Aussage, die er belegt. Beginne mit der direkten Antwort auf die Frage.
hinweise:
  - Die Frage verlangt zuerst eine direkte Antwort. Alles andere stützt diese Antwort.
loesung: |
  Zuerst kommt die direkte Antwort, damit die Frage beantwortet ist.
  ---
  Dann folgen Begründung und Beleg. Der Grenzfall zeigt am Ende, dass du auch die Ausnahmen kennst.
```

:::achtung[Eine Antwort ohne Begründung]
**Zusatzfrage:** „Muss jeder `case` in einer `switch`-Anweisung mit `break` enden?“

**Falsche Art zu antworten:** „Ja, sonst gibt es einen Fehler.“

Das ist gleich doppelt schlecht. Erstens ist die Aussage **falsch**: Ohne `break` kompiliert der Code. Java läuft dann
einfach in den nächsten `case` weiter. Zweitens fehlt jede Begründung, also kann die Tutorin nicht erkennen, was du
wirklich weißt.

**Besser:** „Nein, das `break` darf fehlen. Dann läuft Java in den nächsten `case` weiter, das heißt Fallthrough. Das ist
manchmal gewollt. In meinem Kalenderprogramm teilen sich die Monate 4, 6, 9 und 11 dieselbe Ausgabe 30.“ Prüfe eine
Antwort, bei der du unsicher bist, im Zweifel an einem kleinen Programm.
:::

```aufgabe
id: fg-ab-gefuehrt
titel: Die beste Antwort auswählen
niveau: 2
lernziel: 0
kompetenz: begruenden
quelle: Zusatzfrage zu if-Anweisungen, Blatt 1 SS2020 (umformuliert)
angabe: |
  **Zusatzfrage:** „Ist ein `if` ohne passenden `else`-Teil erlaubt?“
  Welche Antwort ist im Gespräch am besten? Löse die Aufgabe zuerst geführt.
teile:
  - typ: auswahl
    optionen:
      - "Ja. Der `else`-Zweig ist freiwillig. Ist die Bedingung falsch, wird der `if`-Zweig übersprungen und es geht nach der `if`-Anweisung weiter. Beim Zählen der Buchstaben erhöhe ich den Zähler nur im `if`, ein `else` brauche ich dort nicht."
      - "Ja."
      - "Nein. Zu jedem `if` gehört ein `else`, sonst meldet der Compiler einen Fehler."
      - "Ja, aber nur, wenn im `if`-Zweig ein `return` steht."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die Aussage stimmt, aber Begründung und Beleg fehlen. Die nächste Frage wäre „Warum?“ oder „Wo verwendest du das?“.
      - wert: 2
        meldung: Ein `if` ohne `else` kompiliert. Wenn die Bedingung falsch ist, wird der Zweig einfach übersprungen.
      - wert: 3
        meldung: Ein `return` ist keine Bedingung für ein `if` ohne `else`. Jedes `if` darf ohne `else` stehen.
gefuehrt:
  - text: "**Kernaussage:** Ist der `else`-Zweig Pflicht?"
    teil:
      typ: auswahl
      optionen: ["Nein, er ist freiwillig.", "Ja, er ist Pflicht."]
      richtig: [0]
    erklaerung: Ein `if` darf allein stehen. Der Compiler verlangt kein `else`.
  - text: "**Begründung:** Was passiert ohne `else`, wenn die Bedingung falsch ist?"
    teil:
      typ: auswahl
      optionen:
        - Der `if`-Zweig wird übersprungen, das Programm macht nach der `if`-Anweisung weiter.
        - Das Programm bricht mit einer Fehlermeldung ab.
        - Der `if`-Zweig wird trotzdem einmal ausgeführt.
      richtig: [0]
    erklaerung: Ohne `else` gibt es für den Fall „falsch“ einfach nichts zu tun.
  - text: "**Beleg:** Welches Codestück zeigt ein `if` ohne `else`, wie es in einer Zählschleife vorkommt?"
    teil:
      typ: auswahl
      optionen:
        - "`if (text.charAt(i) == 'e') { anzahl++; }`"
        - "`if (x > 0) { y = 1; } else { y = -1; }`"
      richtig: [0]
    erklaerung: Beim Zählen soll nur bei einem Treffer etwas passieren. Ein `else` wäre hier leer.
  - text: Vergleiche jetzt die vier Antworten der Aufgabe. Welche enthält alle drei Teile?
    erklaerung: Streiche zuerst die falschen Antworten. Von den richtigen gewinnt die mit Kernaussage, Begründung und Beleg.
hinweise:
  - Prüfe jede Antwort zuerst auf Richtigkeit. Streiche alle falschen.
  - Unter den richtigen Antworten gewinnt die mit Begründung und Beleg.
loesung: |
  **Ansatz:** Jede Antwort zuerst auf Richtigkeit prüfen, dann auf Vollständigkeit nach dem Antwortschema.
  ---
  Antwort 3 und 4 sind falsch. Ein `if` braucht weder `else` noch `return`.
  ---
  Antwort 2 ist richtig, aber ohne Begründung. Antwort 1 hat Kernaussage, Begründung und Beleg. Sie ist die beste.
```

:::achtung[Verbotene Klassen aus fremdem oder KI-Code]
Eine Aufgabe verlangt, einen String umzudrehen. Erlaubt sind nur `String` und `Math`. Eine Abgabe enthält diese Zeile:

```java
String umgedreht = new StringBuilder(text).reverse().toString();
```

Der Code funktioniert, verstößt aber gegen die Regel. `StringBuilder` ist eine **andere Klasse** der Java-Bibliothek.
Solche Zeilen stammen oft aus dem Internet oder von einer KI. Im Gespräch kommt dann die Frage „Was macht `reverse` hier
genau?“, und die Antwort fehlt.

**Richtig:** eine Schleife, die den String von hinten nach vorne durchläuft.

```java
String umgedreht = "";
for (int i = text.length() - 1; i >= 0; i--) {
    umgedreht = umgedreht + text.charAt(i);
}
```

Prüfe vor der Abgabe jede Zeile: Welche Klasse wird hier aufgerufen, und ist sie auf dem Blatt erlaubt?
:::

```aufgabe
id: fg-ab-api
titel: Erlaubte und verbotene Klassen
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Auf einem Blatt sind nur die Klassen `String` und `Math` erlaubt. `System.out.println` ist immer erlaubt,
  Arrays als Datentyp ebenfalls. Markiere alle Zeilen, die eine **nicht erlaubte** Klasse verwenden.
teile:
  - typ: zeilen
    label: Welche Zeilen verstoßen gegen die Regel?
    code: |
      String s = "Feedback";
      String r = new StringBuilder(s).reverse().toString();
      int n = Math.abs(-4);
      char c = s.charAt(2);
      int[] a = {3, 1, 2};
      Arrays.sort(a);
      String t = s.substring(1, 4);
      System.out.println(String.valueOf(n));
    loesung: [2, 6]
    fehler:
      - wert: [2]
        meldung: '`Arrays.sort` gehört zur Klasse `Arrays`. Ein Array zu **verwenden** ist erlaubt, eine Methode der Klasse `Arrays` aufzurufen nicht.'
      - wert: [2, 6, 8]
        meldung: '`String.valueOf` ist eine Methode der Klasse `String`. Die ist erlaubt.'
hinweise:
  - Schau bei jedem Methodenaufruf, vor welchem Klassennamen er steht.
  - '`Math`, `String` und Methoden auf String-Variablen wie `s.charAt` sind erlaubt. Gesucht sind zwei andere Klassennamen.'
loesung: |
  **Ansatz:** Bei jedem Aufruf die Klasse bestimmen und mit der Liste der erlaubten Klassen vergleichen.
  ---
  Zeile 2 verwendet `StringBuilder`, Zeile 6 die Klasse `Arrays`. Beide sind nicht erlaubt.
  ---
  `Math.abs`, `s.charAt`, `s.substring` und `String.valueOf` gehören zu erlaubten Klassen. Das Array in Zeile 5 ist nur ein Datentyp, kein Aufruf einer Klasse.
```

```aufgabe
id: fg-ab-antworten
titel: Antworten aus alten Abgaben beurteilen
niveau: 2
lernziel: 7
kompetenz: begruenden
quelle: Fragen nach den Zusatzfragen zu Blatt 2 und 4, WS2021; Antworten frei erfunden
angabe: |
  Die folgenden Antworten auf Zusatzfragen sind erfunden. Sie klingen aber wie typische Antworten im Gespräch.
  Beurteile, ob die Antwort fachlich richtig ist.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: "Frage: „Kann man auf eine Variable, die in einer Methode deklariert ist, von außerhalb zugreifen?“ Antwort: „Nein, sie existiert nur innerhalb der Methode.“"
        richtig: true
        erklaerung: Eine **lokale Variable** (eine Variable, die innerhalb einer Methode deklariert ist) ist nur in ihrem Block sichtbar und verschwindet am Ende der Methode.
      - text: "Frage: „Wie erkennt dein Programm, ob als Nächstes eine Zahl oder ein Wort eingegeben wurde?“ Antwort: „Gar nicht. Das merkt man erst, wenn das Programm mit einer Exception abbricht.“"
        richtig: false
        erklaerung: Mit `hasNextInt()`, `hasNextDouble()` und ähnlichen Methoden fragt man vorher nach, welcher Typ als Nächstes kommt. Sie liefern `true` oder `false` und lesen nichts.
      - text: "Frage: „Muss man ein Array mit `new` anlegen, bevor man hineinschreibt?“ Antwort: „Nein, nach `int[] a;` haben alle Elemente schon den Wert 0.“"
        richtig: false
        erklaerung: '`int[] a;` legt nur eine Variable an, aber kein Array. Ein Zugriff wie `a[0] = 5;` kompiliert dann nicht: Der Compiler meldet `variable a might not have been initialized`. Erst `new int[5]` erzeugt ein Array, und erst dessen Elemente haben den Standardwert 0.'
      - text: "Frage: „Welchen Index hat das erste Element eines Arrays?“ Antwort: „Den Index 0. Der letzte Index ist `length - 1`.“"
        richtig: true
        erklaerung: In Java beginnt jeder Array-Index bei 0. Bei Länge `n` ist der letzte Index `n - 1`.
    fehler:
      - wert: [r, r, r, r]
        meldung: Die Antworten 2 und 3 klingen sicher, enthalten aber falsche Aussagen. Was prüft `hasNextInt()`? Gibt es nach `int[] a;` schon ein Array?
      - wert: [r, r, f, r]
        meldung: 'Mit `hasNextInt()` kann das Programm **vorher** nachfragen, ob als Nächstes eine ganze Zahl kommt. Man muss nicht auf eine Exception warten.'
      - wert: [r, f, r, r]
        meldung: 'Standardwerte wie 0 gibt es erst, wenn mit `new` ein Array erzeugt wurde. `int[] a;` allein legt nur eine Variable ohne Array an.'
hinweise:
  - Eine Antwort ist falsch, sobald eine einzige Aussage darin nicht stimmt.
  - 'Denke an `hasNextInt()` aus [8.4 Eingaben prüfen mit hasNextInt](/lernen/ep1/eingabe/eingaben-pruefen-mit-hasnextint) und daran, was `new` in [12.1 Was ist ein Array? Anlegen, Index und Länge](/lernen/ep1/arrays/was-ist-ein-array-anlegen-index-und-laenge) bewirkt.'
loesung: |
  **Ansatz:** Jede Antwort mit dem Stoff des passenden Kapitels vergleichen.
  ---
  Antwort 1 und 4 sind richtig. Lokale Variablen gibt es nur in ihrer Methode, Indizes beginnen bei 0.
  ---
  Antwort 2 ist falsch: `hasNextInt()` prüft den Typ, bevor gelesen wird. Antwort 3 ist falsch: Ohne `new` gibt es gar kein Array, also auch keine Standardwerte.
```

```aufgabe
id: fg-ab-parameter-antworten
titel: Welche Antworten enthalten einen Fehler?
niveau: 3
lernziel: 7
kompetenz: begruenden
quelle: Zusatzfrage „Wie viele Parameter können einer Methode übergeben werden?“, Blatt 2 WS2021 (umformuliert)
angabe: |
  **Zusatzfrage:** „Wie viele Parameter kann eine Methode haben?“ Vier Studierende antworten so.
  Welche Antworten enthalten eine **falsche** Aussage? Wähle alle aus.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "A: „Beliebig viele, auch gar keine. Jeder Parameter hat einen Typ und einen Namen, getrennt durch Kommas. Meine Methode `summeVonBis(int von, int bis)` hat zwei.“"
      - "B: „So viele man will.“"
      - "C: „Höchstens drei, sonst ist die Methode nicht erlaubt.“"
      - "D: „Mindestens einen, denn auch `main` hat einen Parameter.“"
    richtig: [2, 3]
    fehler:
      - wert: [1, 2, 3]
        meldung: Antwort B ist knapp und ohne Beleg, aber nicht falsch. Gefragt ist nur nach falschen Aussagen.
      - wert: [2]
        meldung: 'Eine Methode darf auch **keinen** Parameter haben, zum Beispiel `druckeTrennlinie()`. Dass `main` einen hat, ist keine Regel für alle.'
      - wert: [3]
        meldung: Viele Parameter sind schlechter Stil, aber erlaubt. Der Compiler verbietet nicht schon den vierten Parameter.
hinweise:
  - Trenne zwei Dinge. Ist die Antwort falsch, oder ist sie nur unvollständig?
  - Denk an eine Methode ohne Parameter und an eine mit vier Parametern. Kompilieren beide?
loesung: |
  **Ansatz:** Jede Antwort auf eine Aussage prüfen, die sich durch ein Gegenbeispiel widerlegen lässt.
  ---
  C ist falsch: Eine Methode mit vier Parametern kompiliert. D ist falsch: `druckeTrennlinie()` hat keinen Parameter.
  ---
  A ist vollständig. B ist richtig, aber zu knapp und würde eine Nachfrage auslösen. Die technische Grenze von 255 Parametern spielt in der Praxis keine Rolle.
```

```aufgabe
id: fg-ab-text-return
titel: Eine Antwort nach dem Schema formulieren
niveau: 3
lernziel: 0
kompetenz: begruenden
angabe: |
  Deine Methode `int zaehleVokale(String text)` zählt die Vokale und gibt die Anzahl mit `return` zurück. Die
  Tutorin fragt: „Warum gibst du die Anzahl zurück, statt sie einfach mit `System.out.println` auszugeben?“

  Schreib deine Antwort nach dem Schema Kernaussage, Begründung, Beleg und Grenzfall auf. Vergleiche danach selbst
  mit der Musterantwort und prüfe, ob alle vier Teile vorkommen.
teile:
  - typ: text
    muster: |
      **Kernaussage:** Mit `return` kann der Aufrufer mit dem Ergebnis weiterarbeiten. Eine Ausgabe kann er nur lesen.
      **Begründung:** Ein Rückgabewert ist ein Wert im Programm. Man kann ihn speichern, vergleichen oder in eine
      Rechnung einsetzen. Eine Ausgabe landet nur auf der Konsole, das Programm selbst bekommt sie nicht zurück.
      **Beleg:** In `main` schreibe ich `if (zaehleVokale(wort) > 3)`. Das ginge mit einer `void`-Methode nicht.
      **Grenzfall:** Verlangt die Angabe ausdrücklich eine Ausgabe, wie bei einer Methode `druckeTrennlinie()`, ist `void` mit `println` richtig.
hinweise:
  - Was kann der Aufrufer mit einem zurückgegebenen Wert tun, das mit einer Ausgabe nicht geht?
  - Für den Beleg reicht eine Zeile Code, die das Ergebnis weiterverwendet. Als Grenzfall denk an eine Methode, die laut Angabe ausgeben soll.
loesung: |
  **Ansatz:** Das Schema aus dieser Lektion Schritt für Schritt füllen.
  ---
  Kernaussage und Begründung: Ein Rückgabewert kann weiterverarbeitet werden, eine Konsolenausgabe nicht.
  ---
  Beleg und Grenzfall: eine Bedingung wie `zaehleVokale(wort) > 3` in `main`. Verlangt die Angabe eine Ausgabe, ist `void` richtig. Prüfe deine Antwort: Kommen alle vier Teile vor?
```

```reflexion
frage: Denk an eine Zusatzfrage, die du schon einmal nur mit „Ja“ oder „Nein“ beantwortet hättest. Wie würde die Antwort nach dem Schema Kernaussage, Begründung, Beleg klingen?
antwort: |
  Zum Beispiel „Darf eine `while`-Schleife in einer `for`-Schleife stehen?“. Kernaussage: Ja, Schleifen darf man
  beliebig ineinander schachteln. Begründung: Der Rumpf einer Schleife darf jede Anweisung enthalten, also auch eine
  andere Schleife. Beleg: In meinem Trapez läuft eine `for`-Schleife über die Zeilen, darin eine `while`-Schleife über
  die Zeichen. Schon dieser eine Zusatzsatz zeigt, dass du nicht geraten hast.
```

## Zusatzfragen zu Verzweigungen, Schleifen und Datentypen

```aufgabe
id: fg-vs-check-elseif
titel: Welcher Zweig wird ausgeführt?
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [3.3 Mehrfachverzweigung und Verschachtelung](/lernen/ep1/verzweigungen/mehrfachverzweigung-und-verschachtelung))
teile:
  - typ: ausgabe
    code: |
      int punkte = 80;
      if (punkte >= 90) {
          System.out.println("A");
      } else if (punkte >= 70) {
          System.out.println("B");
      } else if (punkte >= 50) {
          System.out.println("C");
      } else {
          System.out.println("D");
      }
    loesung: |
      B
    fehler:
      - wert: "B\nC"
        meldung: In einer `else if`-Kette wird höchstens **ein** Zweig ausgeführt. Sobald eine Bedingung zutrifft, werden die übrigen übersprungen.
hinweise:
  - Prüfe die Bedingungen von oben nach unten. Beim ersten Treffer ist Schluss.
loesung: |
  `80 >= 90` ist falsch, `80 >= 70` ist wahr. Ausgabe `B`.
  ---
  Die restlichen Zweige werden übersprungen, obwohl auch `80 >= 50` wahr wäre.
```

Zu den ersten Blättern gehören Verzweigungen, Schleifen und der Umgang mit Datentypen. Die Zusatzfragen dazu kehren
seit Jahren in ähnlicher Form wieder. Hier sind die wichtigsten, in eigenen Worten zusammengefasst:

- Geht ein `if` ohne `else`? Kann ein `if` mehrere `else` haben?
- Was bewirkt ein `break` in einem `if`-Zweig? Was passiert, wenn in einem `case` das `break` fehlt?
- Braucht jede `switch`-Anweisung ein `default`? Lässt sich jedes `if` durch ein `switch` ersetzen und umgekehrt?
- Kann man jede Schleifenart durch eine andere ersetzen? Kann jede Schleifenart endlos laufen?
- Muss das Hochzählen einer `for`-Schleife im Schleifenkopf stehen? Ändert sich etwas, wenn dort `++i` statt `i++` steht?
- Wann wandelt Java einen Wert automatisch in einen anderen Typ um, und wann braucht man einen Cast?

Die erste Frage hast du in [22.1 So läuft das Feedbackgespräch ab](/lernen/ep1/feedbackgespraech/so-laeuft-das-feedbackgespraech-ab)
schon geübt: Ein `if` darf ohne `else` stehen. Jetzt folgen die anderen.

### Fragen zu Verzweigungen

:::beispiel[„Kann ein if mehrere else haben?“]
**Kernaussage:** Zu einem `if` gehört **höchstens ein** `else`.

**Begründung:** `else` heißt „in allen anderen Fällen“. Davon gibt es nur einen. Eine Kette wie `else if` sieht zwar
nach mehreren `else`-Zweigen aus. In Wahrheit ist jedes `else if` ein neues `if`, das im `else`-Zweig des vorigen steht.
Die beiden folgenden Fassungen bedeuten genau dasselbe:

```java
if (punkte >= 90) {
    note = 1;
} else if (punkte >= 75) {
    note = 2;
} else {
    note = 3;
}
```

```java
if (punkte >= 90) {
    note = 1;
} else {
    if (punkte >= 75) {
        note = 2;
    } else {
        note = 3;
    }
}
```

**Beleg:** In der zweiten Fassung sieht man es: Jedes `if` hat genau ein `else`. Die erste Schreibweise spart nur
Klammern und Einrückung.
:::

Eine verwandte Frage lautet: „Gibt es ein Limit für die Verschachtelung von `if`-Anweisungen?“ Die Sprache Java setzt
keine kleine Grenze. Ab drei oder vier Ebenen wird der Code aber schwer lesbar. Dann zerlegt man ihn besser in Methoden
oder verknüpft Bedingungen mit `&&`.

:::beispiel[„Lässt sich jedes if durch ein switch ersetzen und umgekehrt?“]
**Kernaussage:** Nur in eine Richtung immer. Jede `switch`-Anweisung lässt sich als `if`-Kette schreiben. Umgekehrt geht
es nur, wenn jede Bedingung ein Vergleich **auf Gleichheit** mit einem **festen Wert** ist.

**Begründung:** Ein `case` vergleicht den Wert hinter `switch` mit einer Konstanten. Erlaubt sind dabei `int`, `char`,
`String` und einige weitere Typen, aber nicht `double`, `long` oder `boolean`. Ein Bereich wie `punkte >= 90` lässt sich
nicht als `case` schreiben.

**Beleg, Richtung switch zu if:** Diese beiden Stücke tun dasselbe.

```java
switch (monat) {
    case 4: case 6: case 9: case 11:
        tage = 30;
        break;
    case 2:
        tage = 28;
        break;
    default:
        tage = 31;
}
```

```java
if (monat == 4 || monat == 6 || monat == 9 || monat == 11) {
    tage = 30;
} else if (monat == 2) {
    tage = 28;
} else {
    tage = 31;
}
```

**Gegenbeispiel, Richtung if zu switch:** `if (punkte >= 90)` hat kein passendes `case`, denn `case` kennt keine Bereiche.
:::

Zwei weitere Fragen gehören zu `switch`. **Darf das `break` fehlen?** Ja, dann läuft Java in den nächsten `case` weiter.
Das Monatsbeispiel nutzt das gezielt: Vier `case`-Marken teilen sich eine Anweisung. **Muss es einen `default`-Zweig
geben?** Nein. Ohne `default` passiert einfach nichts, wenn kein `case` passt. Ein `default` ist trotzdem oft sinnvoll,
weil er unerwartete Werte sichtbar macht.

Die letzte Frage zu Verzweigungen lautet: „Darf in einem `if`-Zweig ein `break` stehen?“ Die Antwort hängt davon ab,
wo das `if` steht.

:::achtung[„break beendet das if“]
**Falsche Antwort:** „`break` springt aus dem `if` heraus, danach geht die Schleife normal weiter.“ Wer so denkt, erwartet
bei diesem Code die Ausgabe `1245`:

```java
for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        break;
    }
    System.out.print(i);
}
```

**Richtig:** Das Programm gibt `12` aus. `break` beendet immer die **innerste Schleife** oder `switch`-Anweisung, in der es
steht. Auf ein `if` wirkt es gar nicht. Steht ein `if` mit `break` außerhalb jeder Schleife und jedes `switch`, meldet der
Compiler einen Fehler: `break outside switch or loop`. Die erwartete Ausgabe `1245` würde man mit `continue` bekommen.
Das überspringt nur den Rest des aktuellen Durchlaufs.
:::

```aufgabe
id: fg-vs-else
titel: Wie viele else-Zweige?
niveau: 1
lernziel: 1
kompetenz: verstehen
quelle: Zusatzfrage zu if-Anweisungen, Blatt 1 SS2020 (umformuliert)
angabe: |
  **Zusatzfrage:** „Darf zu einem `if` mehr als ein `else` gehören?“ Welche Antwort ist richtig?
teile:
  - typ: auswahl
    optionen:
      - "Höchstens einen. Ein `else if` ist ein neues `if`, das im `else`-Zweig des vorigen steht."
      - "Beliebig viele, man schreibt sie einfach hintereinander mit `else if`."
      - "Genau einen, ein `if` ohne `else` kompiliert nicht."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`else if` sieht aus wie ein weiterer `else`-Zweig. Es ist aber ein `else`, in dem sofort ein neues `if` steht. Jedes `if` hat nur ein `else`.'
      - wert: 2
        meldung: Ein `if` darf auch ganz ohne `else` stehen. Es heißt also „höchstens einer“, nicht „genau einer“.
hinweise:
  - Schreib eine `else if`-Kette mit Klammern aus, so wie im Beispiel dieser Lektion.
loesung: |
  `else` heißt „in allen anderen Fällen“. Diesen Fall gibt es nur einmal.
  ---
  Eine `else if`-Kette ist eine Schachtelung: Im `else` steht wieder ein `if` mit höchstens einem eigenen `else`.
```

```aufgabe
id: fg-vs-switch-gruppe
titel: Mehrere case-Marken für eine Anweisung
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Was gibt der Code aus?
teile:
  - typ: ausgabe
    code: |
      char zeichen = '-';
      switch (zeichen) {
          case '+':
          case '-':
              System.out.println("Strichrechnung");
              break;
          case '*':
          case '/':
              System.out.println("Punktrechnung");
              break;
          default:
              System.out.println("unbekannt");
      }
    loesung: |
      Strichrechnung
    fehler:
      - wert: "unbekannt"
        meldung: 'Für `case ''-'':` gibt es eine passende Marke. Dass dort keine eigene Anweisung steht, macht nichts. Java läuft zur nächsten Anweisung weiter.'
      - wert: "Strichrechnung\nPunktrechnung"
        meldung: Nach `Strichrechnung` steht ein `break`. Es beendet die ganze `switch`-Anweisung.
hinweise:
  - Eine `case`-Marke ohne eigene Anweisung führt einfach zur nächsten Anweisung darunter.
loesung: |
  Java springt zu `case '-':`. Dort steht keine Anweisung, also geht es mit der nächsten weiter: `Strichrechnung`.
  ---
  Das `break` beendet danach die `switch`-Anweisung. So teilen sich zwei Fälle bewusst eine Anweisung.
```

### Fragen zu Schleifen

**Sind die Schleifenarten austauschbar?** Ja. Jede `for`-Schleife lässt sich als `while`-Schleife schreiben und umgekehrt.
Man verschiebt nur Startwert, Bedingung und Schritt an andere Stellen. Bei `do-while` gibt es einen Unterschied: Ihr Rumpf
läuft **mindestens einmal**, weil die Bedingung erst am Ende geprüft wird. Will man eine `do-while`-Schleife durch eine
`while`-Schleife ersetzen, muss man das beachten.

**Kann jede Schleifenart endlos laufen?** Ja. Eine **Endlosschleife** entsteht, wenn die Bedingung nie falsch wird. Das
geht bei `while`, `do-while` und `for`.

**Darf das Hochzählen im Rumpf stehen?** Gemeint ist der Schritt, zum Beispiel `i++`, der die Zählvariable erhöht
(Fachwort **Inkrement**). Ja, er darf im Rumpf stehen. Die drei Teile im Kopf einer `for`-Schleife dürfen sogar alle fehlen. Dann muss der
Rumpf selbst dafür sorgen, dass die Schleife endet. `for (int i = 0; i < 5; ) { i++; }` ist erlaubt und endet.

:::achtung[„++i im Kopf lässt die Schleife einmal anders laufen“]
**Falsche Antwort:** „Mit `++i` statt `i++` beginnt die Ausgabe bei 1, weil zuerst erhöht wird.“

**Richtig:** Beide Schleifen geben `0 1 2` aus.

```java
for (int i = 0; i < 3; i++) { System.out.print(i + " "); }
for (int i = 0; i < 3; ++i) { System.out.print(i + " "); }
```

Der Schritt im Kopf wird erst **nach** jedem Durchlauf ausgeführt. Sein Wert wird dabei nicht verwendet, nur die Wirkung
„`i` wird um 1 größer“ zählt. Die beiden Formen unterscheiden sich nur, wenn man den **Wert** des Ausdrucks benutzt. Bei
`int k = 5; int a = k++;` bekommt `a` den alten Wert 5. Bei `int b = ++k;` bekommt `b` den neuen Wert.
:::

```aufgabe
id: fg-vs-inkrement
titel: i++ und ++i
niveau: 1
lernziel: 1
kompetenz: verstehen
quelle: Zusatzfrage „Macht es einen Unterschied, ob mit i++ oder ++i inkrementiert wird?“, Blatt 1 SS2020 (nachgebaut)
angabe: |
  Was gibt der Code aus? Am Ende der ersten Zeile steht ein Leerzeichen, das beim Vergleich nicht zählt.
teile:
  - typ: ausgabe
    code: |
      for (int i = 0; i < 3; ++i) {
          System.out.print(i + " ");
      }
      System.out.println();
      int k = 5;
      int a = k++;
      int b = ++k;
      System.out.println(a + " " + b + " " + k);
    trim: true
    loesung: |
      0 1 2 
      5 7 7
    fehler:
      - wert: "1 2 3\n5 7 7"
        meldung: Im Kopf einer `for`-Schleife wird der Schritt erst nach dem Durchlauf ausgeführt. Der erste Durchlauf hat `i = 0`, egal ob `++i` oder `i++` dasteht.
      - wert: "0 1 2\n6 7 7"
        meldung: '`k++` liefert den **alten** Wert von `k` und erhöht erst danach. `a` bekommt also 5.'
      - wert: "0 1 2\n5 6 7"
        meldung: 'Nach `k++` ist `k` schon 6. `++k` erhöht auf 7 und liefert den **neuen** Wert, also ist `b` gleich 7.'
hinweise:
  - Im Schleifenkopf wird der Wert des Schritts nicht verwendet. Bei `a = k++` und `b = ++k` dagegen schon.
loesung: |
  Die Schleife gibt `0 1 2 ` aus. `++i` und `i++` wirken im Kopf gleich.
  ---
  `a = k++`: `a` wird 5, danach ist `k` 6. `b = ++k`: `k` wird 7, `b` bekommt 7. Ausgabe `5 7 7`.
```

```aufgabe
id: fg-vs-switch-austausch
titel: Welche if-Ketten passen in ein switch?
niveau: 2
lernziel: 1
kompetenz: begruenden
quelle: Zusatzfrage zur Austauschbarkeit von if und switch, Blatt 1 SS2020 (umformuliert)
angabe: |
  Welche dieser `if`-Ketten kann man **direkt** in eine `switch`-Anweisung umschreiben, ohne die Logik zu ändern?
  Wähle alle passenden aus.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "`if (tag == 1) {…} else if (tag == 7) {…} else {…}` mit `int tag`"
      - "`if (punkte >= 90) {…} else if (punkte >= 75) {…}` mit `int punkte`"
      - "`if (befehl.equals(\"start\")) {…} else if (befehl.equals(\"stop\")) {…}` mit `String befehl`"
      - "`if (preis == 9.5) {…} else {…}` mit `double preis`"
      - "`if (c == 'j' || c == 'J') {…} else {…}` mit `char c`"
    richtig: [0, 2, 4]
    fehler:
      - wert: [0, 4]
        meldung: Seit Java 7 darf auch ein `String` hinter `switch` stehen. Verglichen wird dann mit `equals`, also passt die dritte Kette.
      - wert: [0, 1, 2, 4]
        meldung: Ein `case` vergleicht auf Gleichheit mit einem festen Wert. Ein Bereich wie `punkte >= 90` lässt sich nicht als `case` schreiben.
      - wert: [0, 2, 3, 4]
        meldung: '`double` ist in `switch` nicht erlaubt. Kommazahlen sind wegen Rundungsfehlern für exakte Vergleiche ungeeignet.'
gefuehrt:
  - text: Was vergleicht eine `case`-Marke mit dem Wert hinter `switch`?
    teil:
      typ: auswahl
      optionen: ["Gleichheit mit einem festen Wert", "größer oder kleiner als ein Wert", "eine beliebige Bedingung"]
      richtig: [0]
    erklaerung: '`case 7:` heißt „ist der Wert gleich 7?“. Bereiche und andere Bedingungen gehen nicht.'
  - text: Welche Typen dürfen hinter `switch` stehen?
    teil:
      typ: auswahl
      mehrfach: true
      optionen: ["`int`", "`char`", "`String`", "`double`", "`boolean`"]
      richtig: [0, 1, 2]
    erklaerung: '`int`, `char` und `String` sind erlaubt. `double`, `long` und `boolean` nicht.'
  - text: Die Kette mit `c == 'j' || c == 'J'` hat zwei Werte in einer Bedingung. Geht das trotzdem?
    teil:
      typ: auswahl
      optionen: ["Ja, mit zwei `case`-Marken übereinander", "Nein, ein `||` lässt sich nicht übersetzen"]
      richtig: [0]
    erklaerung: '`case ''j'': case ''J'':` vor derselben Anweisung bildet das ODER nach.'
  - text: Prüfe jetzt jede Kette mit diesen drei Regeln.
    erklaerung: Eine Kette passt nur, wenn jede Bedingung Gleichheit mit einer Konstanten prüft und der Typ in `switch` erlaubt ist.
hinweise:
  - Ein `case` vergleicht nur auf Gleichheit mit einer Konstanten. Bereiche gehen nicht.
  - Erlaubte Typen sind unter anderem `int`, `char` und `String`. `double` ist nicht erlaubt.
loesung: |
  **Ansatz:** Für jede Kette zwei Dinge prüfen. Ist jede Bedingung ein Gleichheitsvergleich mit einer Konstanten? Ist der Typ in `switch` erlaubt?
  ---
  Kette 1 (`int`, Gleichheit) und Kette 3 (`String`, `equals`) passen. Kette 5 passt mit zwei `case`-Marken übereinander.
  ---
  Kette 2 vergleicht Bereiche, Kette 4 verwendet `double`. Beide lassen sich nur als `if` schreiben. Das ist die Begründung im Gespräch: `switch` zu `if` geht immer, `if` zu `switch` nicht immer.
```

```aufgabe
id: fg-vs-for-while
titel: Eine for-Schleife als while-Schleife
niveau: 2
lernziel: 1
kompetenz: anwenden
quelle: Zusatzfrage „Sind verschiedene Arten von Schleifen gegeneinander austauschbar?“, Blatt 1 WS2017 (Variation)
angabe: |
  Die Tutorin bittet dich, diese Schleife als `while`-Schleife zu schreiben:

  ```java
  for (int i = 12; i >= 0; i -= 3) {
      System.out.print(i + " ");
  }
  ```

  Fülle die Lücken so, dass genau dieselbe Ausgabe entsteht.
teile:
  - typ: lueckentext
    code: |
      int i = ___;
      while (___) {
          System.out.print(i + " ");
          ___;
      }
    luecken: [["12"], ["i >= 0", "0 <= i", "i > -1"], ["i -= 3", "i = i - 3"]]
    fehler:
      - wert: ["12", "i > 0", "i -= 3"]
        meldung: Die Schleife gibt `12 9 6 3 0` aus. Mit `i > 0` fehlt die 0 am Ende. Übernimm die Bedingung aus dem Kopf unverändert.
      - wert: ["0", "i >= 0", "i -= 3"]
        meldung: Der Startwert ist der erste Teil im Kopf der `for`-Schleife, also 12.
hinweise:
  - Die drei Teile im Kopf einer `for`-Schleife sind Startwert, Bedingung und Schritt.
  - Der Startwert kommt vor die `while`-Schleife, die Bedingung in die Klammer, der Schritt ans Ende des Rumpfs.
loesung: |
  **Ansatz:** Die drei Teile des `for`-Kopfs an ihre Plätze in der `while`-Fassung verschieben.
  ---
  Startwert vor die Schleife: `int i = 12;`. Bedingung in die Klammer: `while (i >= 0)`.
  ---
  Der Schritt `i -= 3;` steht als letzte Anweisung im Rumpf. Beide Fassungen geben `12 9 6 3 0 ` aus.
```

```aufgabe
id: fg-vs-endlos
titel: Welche Schleifen enden nie?
niveau: 2
lernziel: 1
kompetenz: verstehen
quelle: Zusatzfrage „Können Endlosschleifen bei jeder Form von Schleife entstehen?“, Blatt 1 SS2020 (Variation)
angabe: |
  Welche dieser Schleifen laufen **endlos**? Wähle alle aus.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "`for (int i = 1; i != 10; i += 2) { }`"
      - "`int i = 0; while (i < 5) { System.out.println(i); }`"
      - "`for (int i = 0; i < 5; ) { i++; }`"
      - "`int i = 10; do { i--; } while (i > 0);`"
      - "`while (true) { break; }`"
    richtig: [0, 1]
    fehler:
      - wert: [1]
        meldung: '`i` nimmt nur ungerade Werte an: 1, 3, 5, 7, 9, 11 und so weiter. Die Bedingung `i != 10` bleibt darum immer wahr.'
      - wert: [0, 1, 2]
        meldung: Der Schritt `i++` steht hier im Rumpf statt im Kopf. Das ist erlaubt, und die Schleife endet nach fünf Durchläufen.
      - wert: [0, 1, 4]
        meldung: '`while (true)` allein wäre endlos. Das `break` beendet die Schleife aber schon im ersten Durchlauf.'
hinweise:
  - Prüfe bei jeder Schleife, ob sich die Variable in der Bedingung überhaupt ändert.
  - Wenn sie sich ändert, prüfe, ob die Bedingung irgendwann falsch wird. Achte auf `!=`.
loesung: |
  **Ansatz:** Für jede Schleife fragen: Ändert sich die Bedingung, und wird sie irgendwann falsch?
  ---
  Schleife 1 trifft die 10 nie, weil `i` immer ungerade bleibt. In Schleife 2 ändert sich `i` gar nicht.
  ---
  Schleife 3 erhöht `i` im Rumpf und endet, Schleife 4 zählt bis 0 herunter, Schleife 5 endet sofort durch `break`. Für das Gespräch: Bei Bedingungen mit `!=` lieber `<` verwenden, das ist robuster.
```

### Fragen zu Literalen und Typumwandlungen

Auf den Blättern 0 und 1 der Jahre 2017 bis 2020 ging es um **Literale**. Ein Literal ist ein Wert, der direkt im
Quelltext steht, zum Beispiel `42`, `3.5`, `'A'` oder `"Text"`. Typische Zusatzfragen waren: „Warum ergibt die Ausgabe
nicht genau die Literale, die im Code stehen?“ und „Wann wird ein Wert automatisch umgewandelt, wann braucht man einen
Cast?“. Ein **Cast** ist eine ausdrückliche Typumwandlung in Klammern, zum Beispiel `(int) 3.7`.

:::beispiel[„Wann wird automatisch umgewandelt, wann braucht man einen Cast?“]
**Kernaussage:** Java wandelt automatisch um, wenn **kein Wert verloren gehen kann**. Sonst verlangt der Compiler einen Cast.

**Begründung und Beleg:**

```java
int ganz = 7;
double komma = ganz;        // automatisch: 7 wird 7.0, nichts geht verloren
int zurueck = (int) 7.9;    // Cast nötig: der Nachkommaanteil fällt weg, Ergebnis 7
char zeichen = 'A';
int code = zeichen;         // automatisch: der Zeichencode 65
char weiter = (char) (zeichen + 2);   // Cast nötig: zeichen + 2 ist ein int, Ergebnis 'C'
```

- `int` in `double` ist eine **Erweiterung**. Jede ganze Zahl passt in eine Kommazahl. Darum geht es automatisch.
- `double` in `int` ist eine **Einengung**. Der Nachkommaanteil geht verloren. Der Cast `(int)` sagt dem Compiler: „Das
  ist Absicht.“ Er schneidet ab, er rundet nicht.
- `zeichen + 2` rechnet mit dem Zeichencode und liefert ein `int`. Zurück in ein `char` braucht man einen Cast.

**Grenzfall:** Literale haben eigene Schreibweisen. `017` beginnt mit einer Null und ist darum eine **Oktalzahl**
(Basis 8), also $1 \cdot 8 + 7 = 15$. `0x20` ist **hexadezimal** (Basis 16), also $2 \cdot 16 + 0 = 32$. `25L` ist ein
`long`, `2.5f` ein `float`. Wer ein Oktal- oder Hexadezimal-Literal ausgibt, sieht deshalb eine andere Zahl als im
Quelltext.
:::

```aufgabe
id: fg-vs-literale
titel: Literale und Casts ausgeben
niveau: 2
lernziel: 1
kompetenz: verstehen
quelle: Zusatzfragen zu Literalen und Typumwandlungen, Blatt 0 SS2020 und Blatt 1 WS2017 (nachgebaut)
angabe: |
  Was gibt der Code aus?
teile:
  - typ: ausgabe
    code: |
      System.out.println(012 + 1);
      System.out.println(0x15);
      System.out.println('7' + 1);
      System.out.println((char) ('7' + 1));
      System.out.println(7 / 2 * 2.0);
      System.out.println((int) 3.99);
    loesung: |
      11
      21
      56
      8
      6.0
      3
    fehler:
      - wert: "13\n15\n8\n8\n6.0\n3"
        meldung: 'Literale mit führender `0` sind Oktalzahlen, mit `0x` Hexadezimalzahlen. Und `''7''` ist ein Zeichen mit dem Code 55, nicht die Zahl 7.'
      - wert: "11\n21\n56\n8\n7.0\n3"
        meldung: '`7 / 2` sind zwei `int`-Werte. Die Division ergibt 3, der Rest fällt weg. Erst danach wird mit `2.0` multipliziert.'
      - wert: "11\n21\n56\n8\n6.0\n4"
        meldung: Der Cast `(int)` rundet nicht, er schneidet den Nachkommaanteil ab.
hinweise:
  - '`012` ist oktal, also $1 \cdot 8 + 2 = 10$. `0x15` ist hexadezimal, also $1 \cdot 16 + 5 = 21$. `''7''` hat den Zeichencode 55.'
  - Rechne von links nach rechts. Bei `int` geteilt durch `int` fällt der Rest weg.
loesung: |
  **Ansatz:** Jedes Literal zuerst in seinen Wert übersetzen, dann rechnen.
  ---
  `012` ist $1 \cdot 8 + 2 = 10$, plus 1 ergibt 11. `0x15` ist $1 \cdot 16 + 5 = 21$. `'7' + 1` rechnet mit dem Zeichencode: 55 + 1 = 56. Mit Cast wird daraus das Zeichen `8`.
  ---
  `7 / 2` ergibt 3 (Ganzzahldivision), `3 * 2.0` ergibt `6.0`. `(int) 3.99` schneidet ab, Ergebnis 3.
```

```aufgabe
id: fg-vs-break-zeilen
titel: Welche Zeilen kompilieren nicht?
niveau: 3
lernziel: 1
kompetenz: anwenden
quelle: Zusatzfrage „Darf in einem if-Zweig ein break verwendet werden?“, Blatt 1 SS2020 (Variation)
angabe: |
  Der folgende Code steht in `main`. Er kompiliert nicht. Markiere alle Zeilen, die du ändern musst, damit er
  kompiliert.
teile:
  - typ: zeilen
    label: Welche Zeilen enthalten einen Fehler?
    code: |
      int x = 5;
      if (x > 3) {
          break;
      }
      for (int i = 0; i < 3; i++) {
          if (i == 1) {
              break;
          }
      }
      switch (x) {
          case 5: System.out.println("fünf");
      }
      else {
          System.out.println("anders");
      }
    loesung: [3, 13]
    fehler:
      - wert: [3, 7, 13]
        meldung: Das `break` in Zeile 7 steht in einem `if`, das selbst in einer `for`-Schleife steht. Dort ist es erlaubt und beendet die Schleife.
      - wert: [13]
        meldung: Das `break` in Zeile 3 steht in keiner Schleife und in keinem `switch`. Der Compiler meldet `break outside switch or loop`.
      - wert: [3]
        meldung: Ein `else` braucht ein `if` direkt davor. Vor Zeile 13 steht aber eine `switch`-Anweisung.
hinweise:
  - Prüfe bei jedem `break`, ob es in einer Schleife oder einem `switch` steht.
  - Prüfe bei jedem `else`, welches `if` direkt davor steht.
loesung: |
  **Ansatz:** Für jedes `break` die umgebende Schleife oder `switch`-Anweisung suchen, für jedes `else` das passende `if`.
  ---
  Zeile 3: Das `break` steht nur in einem `if`, nicht in einer Schleife. Fehler `break outside switch or loop`.
  ---
  Zeile 7 ist erlaubt, weil das `if` in der `for`-Schleife steht. Zeile 13: Vor dem `else` steht kein `if`, sondern ein `switch`. Fehler `'else' without 'if'`. Ein `switch` ohne `default` ist dagegen erlaubt.
  ---
  Achtung beim Ausprobieren: `javac` meldet zuerst nur den Fehler in Zeile 13. Das ist ein Fehler im Satzbau, und danach prüft der Compiler nicht weiter. Erst wenn du ihn behoben hast, meldet er auch Zeile 3.
```

```aufgabe
id: fg-vs-text-schleifen
titel: Sind Schleifen austauschbar?
niveau: 3
lernziel: 1
kompetenz: begruenden
quelle: Zusatzfrage „Sind verschiedene Arten von Schleifen gegeneinander austauschbar?“, Blatt 1 WS2017 und SS2020
angabe: |
  Beantworte die Zusatzfrage „Kann man jede Schleifenart durch eine andere ersetzen?“ so, wie du es im
  Gespräch tun würdest. Nenne auch, wann du welche Schleife wählst. Vergleiche danach mit der Musterantwort.
teile:
  - typ: text
    muster: |
      Ja, grundsätzlich schon. Jede `for`-Schleife lässt sich als `while`-Schleife schreiben: Der Startwert kommt vor
      die Schleife, die Bedingung in die Klammer und der Schritt ans Ende des Rumpfs. Umgekehrt geht es auch.
      Ein Unterschied ist `do-while`: Ihr Rumpf läuft mindestens einmal, weil die Bedingung erst am Ende geprüft wird.
      Ersetzt man sie durch `while`, muss man den ersten Durchlauf eigens sicherstellen.
      Ich wähle `for`, wenn die Zahl der Durchläufe vorher feststeht, zum Beispiel beim Durchlaufen eines Strings.
      `while` nehme ich, wenn eine Bedingung entscheidet, etwa „bis der Buchstabe gefunden ist“.
      `do-while` passt, wenn etwas mindestens einmal passieren muss, zum Beispiel eine Eingabe.
hinweise:
  - Beginne mit der Kernaussage. Erkläre dann, wie man eine `for`-Schleife in eine `while`-Schleife umbaut.
  - Denk an den Sonderfall `do-while` und an je ein typisches Einsatzgebiet jeder Schleife.
loesung: |
  **Ansatz:** Kernaussage, Umbau als Begründung, dann der Sonderfall `do-while`.
  ---
  Kernaussage: Ja. Begründung: Startwert, Bedingung und Schritt lassen sich an andere Stellen verschieben, wie in der Lückentextaufgabe dieser Lektion.
  ---
  Grenzfall und Wahl: `do-while` läuft mindestens einmal. `for` passt bei bekannter Zahl von Durchläufen, `while` bei einer Abbruchbedingung. Prüfe deine Antwort auf alle drei Punkte.
```

## Zusatzfragen zu Methoden und Eingabe

```aufgabe
id: fg-me-check-return
titel: Was liefert die Methode?
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? (Wiederholung: [6.3 Rückgabewerte und return](/lernen/ep1/methoden/rueckgabewerte-und-return))
teile:
  - typ: ausgabe
    code: |
      public class Liefern {
          public static int dreifach(int x) {
              return 3 * x;
          }

          public static void main(String[] args) {
              int y = dreifach(4) + 1;
              System.out.println(y);
          }
      }
    loesung: |
      13
    fehler:
      - wert: "12"
        meldung: '`dreifach(4)` liefert 12. Danach wird in `main` noch 1 addiert.'
      - wert: "15"
        meldung: Der Methodenaufruf wird zuerst ausgewertet, also `3 * 4 = 12`. Erst dann kommt `+ 1`. Es heißt nicht `3 * (4 + 1)`.
hinweise:
  - Ersetze den Aufruf `dreifach(4)` gedanklich durch den Wert, den er liefert.
loesung: |
  `dreifach(4)` liefert `3 * 4 = 12`.
  ---
  In `main` steht dann `12 + 1`, also ist `y` gleich 13.
```

Zu Blatt 2 und 3 gehören Methoden und Eingaben mit dem `Scanner`. Die Zusatzfragen dazu sind seit 2017 erstaunlich
gleich geblieben. In eigenen Worten:

- Wie viele Parameter darf eine Methode haben? Ist ein Parameter bei einer `void`-Methode verboten?
- Kann eine Methode dem Aufrufer zwei Ergebnisse auf einmal zurückgeben?
- Kommt man von außen an eine Variable heran, die innerhalb einer Methode deklariert ist? Was ist eine lokale Variable?
- Ist es egal, ob man eine Methode mit `berechne(i + 1)` oder mit `berechne(i++)` aufruft?
- Dürfen zwei Methoden denselben Namen haben?
- Wie erkennt man beim `Scanner`, welcher Typ als Nächstes eingegeben wurde? Wozu muss man eine falsche Eingabe entfernen?

Die ersten beiden Fragen hast du in
[22.1 So läuft das Feedbackgespräch ab](/lernen/ep1/feedbackgespraech/so-laeuft-das-feedbackgespraech-ab) gesehen. Kurz
zur Erinnerung: **Ein Parameter** ist eine Variable im Methodenkopf, die beim Aufruf einen Wert bekommt. **`void`**
bedeutet „kein Rückgabewert“. Es sagt nichts über Parameter.

:::achtung[„Eine void-Methode darf keine Parameter haben“]
Diese Behauptung stand 2020 und 2021 auf Blatt 2, mit der Bitte, sie zu prüfen. Viele stimmen spontan zu.
Sie ist **falsch**. Ein Gegenbeispiel:

```java
public static void druckeZeile(char zeichen, int anzahl) {
    for (int i = 0; i < anzahl; i++) {
        System.out.print(zeichen);
    }
    System.out.println();
}
```

Die Methode ist `void` und hat trotzdem zwei Parameter. `void` steht an der Stelle des **Rückgabetyps**. Es sagt nur,
dass die Methode kein Ergebnis mit `return` liefert. Die Parameterliste in den runden Klammern ist davon völlig
unabhängig. Umgekehrt kann eine Methode mit Rückgabewert auch ganz ohne Parameter auskommen, zum Beispiel `int wuerfeln()`.
:::

```aufgabe
id: fg-me-rf
titel: Parameter, void und lokale Variablen
niveau: 1
lernziel: 2
kompetenz: verstehen
quelle: Zusatzfragen zu Methoden, Blatt 2 WS2021 und SS2020 (umformuliert)
angabe: |
  Beurteile jede Aussage.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Eine Methode mit Rückgabetyp `void` darf beliebig viele Parameter haben.
        richtig: true
        erklaerung: '`void` betrifft nur den Rückgabewert. Die Parameterliste ist davon unabhängig.'
      - text: Eine Variable `i`, die in der Methode `zaehle` deklariert ist, kann `main` mit `zaehle.i` lesen.
        richtig: false
        erklaerung: Eine lokale Variable existiert nur, solange die Methode läuft, und nur in ihrem Block. Von außen kommt niemand an sie heran.
      - text: Zwei Methoden einer Klasse dürfen gleich heißen, wenn sich ihre Parameterlisten unterscheiden.
        richtig: true
        erklaerung: Das heißt **Überladen**. Java wählt beim Aufruf die Methode, deren Parameter zu den Argumenten passen.
      - text: Zwei Methoden einer Klasse dürfen gleich heißen, wenn sich nur ihr Rückgabetyp unterscheidet.
        richtig: false
        erklaerung: Am Aufruf `f(3)` sieht man den Rückgabetyp nicht. Java könnte nicht entscheiden, welche Methode gemeint ist. Der Compiler lehnt das ab.
    fehler:
      - wert: [r, f, r, r]
        meldung: Überladen geht nur über die **Parameterliste**. Beim Aufruf ist nur sie zu sehen, der Rückgabetyp nicht.
      - wert: [f, f, r, f]
        meldung: '`void` heißt nur „kein Rückgabewert“. Parameter darf eine `void`-Methode trotzdem haben.'
hinweise:
  - Überlege bei jeder Aussage, was der Compiler beim Aufruf sehen kann.
loesung: |
  **Ansatz:** `void` betrifft den Rückgabewert, lokale Variablen gelten nur in ihrem Block, Überladen geht über die Parameter.
  ---
  Aussagen 1 und 3 sind richtig. Aussage 2 ist falsch, weil lokale Variablen von außen unsichtbar sind. Aussage 4 ist falsch, weil der Rückgabetyp beim Aufruf nicht sichtbar ist.
```

### berechne(i + 1) oder berechne(i++)?

Diese Frage stand 2020 und 2021 auf Blatt 2. Sie prüft, ob du weißt, **wann** sich eine Variable ändert.

:::beispiel[„Ist berechne(i + 1) dasselbe wie berechne(i++)?“]
**Kernaussage:** Nein. Beide Aufrufe übergeben einen anderen Wert, und nur einer verändert `i`.

**Begründung:**

- `i + 1` berechnet nur einen neuen Wert und lässt `i` unverändert. Ist `i` gleich 4, wird 5 übergeben,
  und `i` bleibt 4.
- `i++` erhöht `i` um 1, liefert aber den **alten** Wert. Ist `i` gleich 4, wird 4 übergeben. Danach ist `i` gleich 5.

**Beleg:**

```java
public static void zeige(int x) {
    System.out.println("x = " + x);
}

// in main:
int i = 4;
zeige(i + 1);    // x = 5, danach ist i immer noch 4
zeige(i++);      // x = 4, danach ist i gleich 5
zeige(i);        // x = 5
```

**Grenzfall:** In einer **rekursiven** Methode ist der Unterschied gefährlich. Ruft sich eine Methode mit
`berechne(n++)` selbst auf, übergibt sie denselben Wert noch einmal. Der Selbstaufruf kommt dem Basisfall dann nie näher, und das Programm stürzt mit einem `StackOverflowError` ab.
:::

```aufgabe
id: fg-me-scope
titel: Zwei Variablen mit demselben Namen
niveau: 1
lernziel: 2
kompetenz: verstehen
quelle: Zusatzfrage „Was ist eine lokale Variable?“, Blatt 3 WS2017 (nachgebaut)
angabe: |
  Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Sicht {
          public static void setze() {
              int zahl = 99;
              System.out.println("innen " + zahl);
          }

          public static void main(String[] args) {
              int zahl = 1;
              setze();
              System.out.println("aussen " + zahl);
          }
      }
    loesung: |
      innen 99
      aussen 1
    fehler:
      - wert: "innen 99\naussen 99"
        meldung: Die beiden Variablen heißen gleich, sind aber zwei **verschiedene** lokale Variablen. Jede gehört zu ihrer eigenen Methode.
      - wert: "innen 1\naussen 1"
        meldung: In `setze` gibt es eine eigene Variable `zahl` mit dem Wert 99. Die Variable aus `main` ist dort gar nicht sichtbar.
hinweise:
  - Jede Methode hat ihre eigenen lokalen Variablen, auch wenn die Namen gleich sind.
loesung: |
  `setze` legt eine eigene lokale Variable `zahl` mit dem Wert 99 an und gibt `innen 99` aus.
  ---
  Diese Variable verschwindet am Ende von `setze`. In `main` hat die eigene Variable `zahl` weiter den Wert 1.
```

```aufgabe
id: fg-me-inkrement
titel: Argumente mit i++, i + 1 und ++i
niveau: 2
lernziel: 2
kompetenz: verstehen
quelle: Zusatzfrage zu Argumenten mit i + 1 und i++, Blatt 2 WS2021 (nachgebaut)
angabe: |
  Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Argumente {
          public static int doppelt(int x) {
              return 2 * x;
          }

          public static void main(String[] args) {
              int i = 5;
              int a = doppelt(i++);
              int b = doppelt(i + 1);
              int c = doppelt(++i);
              System.out.println(a + " " + b + " " + c + " " + i);
          }
      }
    loesung: |
      10 14 14 7
    fehler:
      - wert: "12 14 14 7"
        meldung: '`i++` übergibt den **alten** Wert 5. Erst danach wird `i` zu 6. `a` ist also `2 * 5`.'
      - wert: "10 14 16 8"
        meldung: '`i + 1` berechnet nur einen Wert. Die Variable `i` bleibt dabei 6. Erst `++i` erhöht sie auf 7.'
      - wert: "10 14 12 7"
        meldung: '`++i` erhöht `i` **vor** der Übergabe. Übergeben wird der neue Wert 7, nicht der alte Wert 6.'
hinweise:
  - Schreib nach jeder Zeile den aktuellen Wert von `i` auf.
  - '`i++` liefert den alten Wert, `++i` den neuen. `i + 1` ändert `i` gar nicht.'
loesung: |
  **Ansatz:** Die Zeilen der Reihe nach ausführen und nach jeder Zeile `i` notieren.
  ---
  `doppelt(i++)`: übergeben wird 5, also `a = 10`. Danach ist `i = 6`. `doppelt(i + 1)`: übergeben wird 7, also `b = 14`. `i` bleibt 6.
  ---
  `doppelt(++i)`: `i` wird 7, übergeben wird 7, also `c = 14`. Ausgabe `10 14 14 7`.
```

### Zusatzfragen zum Scanner

Ein **Scanner** liest Eingaben, zum Beispiel von der Tastatur. Er sammelt die getippten Zeichen in einem **Puffer**, einem
Zwischenspeicher. Er zerlegt den Puffer in **Token**, also Wörter, die durch Leerraum (Leerzeichen, Tabulator,
Zeilenumbruch) getrennt sind. Die Zusatzfragen dazu lauten sinngemäß: „Woran erkennt das Programm, welcher Typ als
Nächstes eingegeben wurde?“ und „Wozu muss man eine falsche Eingabe aus dem Puffer holen?“.

Die erste Antwort ist kurz: Mit den Prüfmethoden `hasNextInt()`, `hasNextDouble()` und so weiter. Sie schauen nach, ob das
nächste Token in den gewünschten Typ passt, und liefern `true` oder `false`. Gelesen wird dabei nichts. Die zweite Antwort
zeigt das folgende Beispiel.

:::beispiel[„Wozu muss man eine falsche Eingabe aus dem Puffer holen?“]
**Kernaussage:** Sonst bleibt sie liegen, und das Programm prüft immer wieder dasselbe Token.

**Beleg:** Diese Methode soll so lange lesen, bis eine ganze Zahl kommt.

```java
public static int leseZahl(Scanner sc) {
    while (!sc.hasNextInt()) {
        System.out.println("Bitte eine ganze Zahl!");
        sc.next();                 // das ungültige Token entfernen
    }
    return sc.nextInt();
}
```

Der Nutzer tippt `abc 12`. Wir gehen die Schleife Schritt für Schritt durch:

1. Im Puffer liegt `abc`. `hasNextInt()` liefert `false`, also läuft die Schleife.
2. Die Meldung erscheint. `sc.next()` holt `abc` aus dem Puffer und wirft es weg.
3. Jetzt liegt `12` vorne. `hasNextInt()` liefert `true`, die Schleife endet. `nextInt()` liest 12.

**Begründung:** Fehlt die Zeile `sc.next()`, bleibt `abc` vorne im Puffer liegen. `hasNextInt()` schaut immer wieder auf
dasselbe `abc` und liefert immer wieder `false`. Die Meldung erscheint endlos, das Programm hängt in einer
**Endlosschleife**. Ruft man stattdessen ohne Prüfung `nextInt()` auf, wirft Java eine `InputMismatchException`.
:::

```aufgabe
id: fg-me-scanner-ausgabe
titel: Ungültige Token überspringen
niveau: 2
lernziel: 2
kompetenz: anwenden
quelle: Zusatzfragen zum Scanner, Blatt 2 WS2021 und WS2017 (Variation)
angabe: |
  Das Programm liest die Eingabe `drei 4 2.5 -1 8`. Was gibt es aus? Löse die Aufgabe zuerst geführt.
teile:
  - typ: ausgabe
    code: |
      Scanner sc = new Scanner(System.in);
      int summe = 0;
      int gelesen = 0;
      while (gelesen < 2) {
          if (sc.hasNextInt()) {
              summe += sc.nextInt();
              gelesen++;
          } else {
              System.out.println("ignoriert: " + sc.next());
          }
      }
      System.out.println(summe);
    stdin: "drei 4 2.5 -1 8\n"
    loesung: |
      ignoriert: drei
      ignoriert: 2.5
      3
    fehler:
      - wert: "ignoriert: drei\nignoriert: 2.5\n11"
        meldung: Die Schleife endet, sobald zwei ganze Zahlen gelesen sind. Die 8 bleibt ungelesen im Puffer.
      - wert: "ignoriert: drei\nignoriert: 2.5\nignoriert: -1\n4"
        meldung: '`-1` ist eine gültige ganze Zahl. `hasNextInt()` liefert dafür `true`.'
      - wert: "ignoriert: drei\n6"
        meldung: '`2.5` ist keine ganze Zahl. `hasNextInt()` liefert `false`, und das Token wird übersprungen.'
gefuehrt:
  - text: Welches Token liegt zu Beginn vorne im Puffer, und was liefert `hasNextInt()`?
    teil:
      typ: auswahl
      optionen: ["`drei`, also `false`", "`drei`, also `true`", "`4`, also `true`"]
      richtig: [0]
    erklaerung: '`drei` ist ein Wort, keine Zahl. Der `else`-Zweig gibt `ignoriert: drei` aus und entfernt das Token mit `next()`.'
  - text: Nach `4` folgt `2.5`. Ist das für `hasNextInt()` eine ganze Zahl?
    teil:
      typ: auswahl
      optionen: ["Nein", "Ja, sie wird zu 2 abgeschnitten"]
      richtig: [0]
    erklaerung: '`hasNextInt()` liefert nur bei einer ganzen Zahl `true`. `2.5` wird übersprungen.'
  - text: Welchen Wert hat `summe`, wenn `gelesen` den Wert 2 erreicht?
    teil: { typ: zahl, loesung: "4 + (-1)" }
    erklaerung: Gelesen werden 4 und -1. Danach ist `gelesen` gleich 2, und die Schleife endet vor der 8.
hinweise:
  - Gehe die Token einzeln durch und notiere jeweils `gelesen` und `summe`.
  - Die Schleife endet, sobald `gelesen` den Wert 2 hat. Danach wird nichts mehr gelesen.
loesung: |
  **Ansatz:** Token für Token prüfen, ob `hasNextInt()` wahr ist, und `gelesen` mitzählen.
  ---
  `drei` wird ignoriert. `4` wird gelesen (`gelesen = 1`). `2.5` wird ignoriert. `-1` wird gelesen (`gelesen = 2`).
  ---
  Die Schleife endet, `summe` ist `4 + (-1) = 3`. Die 8 bleibt im Puffer.
```

:::achtung[„Mit hasNextInt wird die falsche Eingabe übersprungen“]
**Falscher Code:** Die Zeile `sc.next()` fehlt.

```java
while (!sc.hasNextInt()) {
    System.out.println("Bitte eine ganze Zahl!");
}
int zahl = sc.nextInt();
```

Bei der Eingabe `x 5` erscheint `Bitte eine ganze Zahl!` ohne Ende. Die 5 wird nie erreicht. `hasNextInt()` schaut nur
nach, es entfernt nichts. Das `x` liegt darum bei jeder Prüfung wieder vorne.

**Richtig:** Im Rumpf der Schleife das ungültige Token mit `sc.next()` entfernen, wie im Beispiel davor.
:::

```aufgabe
id: fg-me-scanner-endlos
titel: Was passiert ohne sc.next()?
niveau: 2
lernziel: 2
kompetenz: begruenden
quelle: Zusatzfrage „Warum muss eine ungültige Eingabe aus dem Input-Stream des Scanners entfernt werden?“, Blatt 2 WS2021
angabe: |
  Eine Methode liest mit dieser Schleife eine Zahl ein. Die Eingabe ist `neun 9`.

  ```java
  while (!sc.hasNextInt()) {
      System.out.println("ungültig");
  }
  return sc.nextInt();
  ```

  Was passiert?
teile:
  - typ: auswahl
    optionen:
      - "`ungültig` erscheint endlos, weil `neun` im Puffer liegen bleibt."
      - "`ungültig` erscheint einmal, dann wird 9 gelesen."
      - Das Programm bricht mit einer `InputMismatchException` ab.
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '`hasNextInt()` entfernt das Wort `neun` nicht. Ohne `sc.next()` kommt die Schleife nie bis zur 9.'
      - wert: 2
        meldung: '`nextInt()` wird gar nicht erreicht, weil die Schleife nicht endet. `hasNextInt()` selbst wirft keine Exception.'
hinweise:
  - Was ändert sich im Puffer, wenn nur `hasNextInt()` aufgerufen wird?
  - Wird die Bedingung `!sc.hasNextInt()` jemals falsch?
loesung: |
  **Ansatz:** Verfolgen, was im Puffer passiert.
  ---
  `neun` liegt vorne. `hasNextInt()` liefert `false`, also läuft die Schleife und gibt `ungültig` aus.
  ---
  Nichts entfernt `neun`. Die nächste Prüfung sieht dasselbe Token. Das ist eine Endlosschleife. Die Abhilfe ist `sc.next();` im Rumpf.
```

### Überladen: zwei Methoden mit einem Namen

Zu Blatt 3 gehört das **Überladen**. Das heißt: Mehrere Methoden einer Klasse tragen denselben Namen, haben aber
verschiedene Parameterlisten. Eine typische Zusatzfrage lautet sinngemäß: „Dürfen deine Methoden `zeigeText(String s)`
und `zeigeZahl(int z)` beide einfach `zeige` heißen?“ Die Antwort ist Ja, solange sich die Parameter unterscheiden. Java
wählt beim Aufruf die passende Methode nach Anzahl und Typ der **Argumente** (der Werte, die man beim Aufruf übergibt).
Eine weitere Zusatzfrage von 2017 ging in dieselbe Richtung: Eine Methode soll mit und ohne Trennzeichen aufrufbar sein.
Ohne Angabe gilt ein Standardzeichen.

```aufgabe
id: fg-me-ueberladen
titel: Mit und ohne Trennzeichen aufrufen
niveau: 2
lernziel: 2
kompetenz: anwenden
quelle: Zusatzfrage zu überladenen Methoden, Blatt 3 WS2017, und addChar, Blatt 3 WS2023 (Variation)
angabe: |
  Schreibe zwei Methoden mit dem Namen `zeigeGetrennt`:

  - `zeigeGetrennt(String text, char trenner)` gibt die Zeichen von `text` in einer Zeile aus. Zwischen je zwei
    Zeichen steht `trenner`, am Anfang und am Ende nicht. Danach folgt ein Zeilenumbruch.
  - `zeigeGetrennt(String text)` macht dasselbe mit dem Trennzeichen `'.'`. Sie soll **keinen** Code doppelt
    enthalten, sondern die erste Methode aufrufen.

  Beispiele: `zeigeGetrennt("EP1", '/')` gibt `E/P/1` aus, `zeigeGetrennt("Java")` gibt `J.a.v.a` aus.
  Bei einem leeren String erscheint nur der Zeilenumbruch. Vorbedingung: `text != null`.
teile:
  - typ: code
    vorlage: |
      public class Trenner {
          public static void zeigeGetrennt(String text, char trenner) {
              // TODO
          }

          public static void zeigeGetrennt(String text) {
              // TODO
          }

          public static void main(String[] args) {
              zeigeGetrennt("EP1", '/');
              zeigeGetrennt("Java");
          }
      }
    musterloesung: |
      public class Trenner {
          public static void zeigeGetrennt(String text, char trenner) {
              for (int i = 0; i < text.length(); i++) {
                  if (i > 0) {
                      System.out.print(trenner);
                  }
                  System.out.print(text.charAt(i));
              }
              System.out.println();
          }

          public static void zeigeGetrennt(String text) {
              zeigeGetrennt(text, '.');
          }

          public static void main(String[] args) {
              zeigeGetrennt("EP1", '/');
              zeigeGetrennt("Java");
          }
      }
    tests:
      - { aufruf: "zeigeGetrennt(\"EP1\", '/')", stdout: "E/P/1\n" }
      - { aufruf: "zeigeGetrennt(\"Java\")", stdout: "J.a.v.a\n", beschreibung: "ohne Trennzeichen: Standard '.'" }
      - { aufruf: "zeigeGetrennt(\"\")", stdout: "\n", beschreibung: "leerer String" }
      - { aufruf: "zeigeGetrennt(\"x\", '+')", stdout: "x\n", versteckt: true }
    regeln: { erlaubteApi: ["String.charAt", "String.length"] }
    fehler:
      - { wert: 1, meldung: "Steht am Ende ein Trennzeichen zu viel? Gib das Trennzeichen **vor** jedem Zeichen aus, außer vor dem ersten." }
      - { wert: 2, meldung: "Die Methode mit einem Parameter ruft einfach die andere mit dem Trennzeichen `'.'` auf." }
hinweise:
  - Die Methode mit zwei Parametern macht die eigentliche Arbeit. Die andere besteht aus einem einzigen Aufruf.
  - Gib das Trennzeichen vor jedem Zeichen aus, außer vor dem ersten, also nur wenn `i > 0` ist.
loesung: |
  **Ansatz:** Eine Methode macht die Arbeit, die überladene Methode ruft sie mit dem Standardwert auf. So gibt es keinen doppelten Code.
  ---
  ```java
  for (int i = 0; i < text.length(); i++) {
      if (i > 0) {
          System.out.print(trenner);
      }
      System.out.print(text.charAt(i));
  }
  System.out.println();
  ```
  ---
  Die zweite Methode lautet `zeigeGetrennt(text, '.');`. Java erkennt am Aufruf mit einem Argument, welche Methode gemeint ist. Kontrolle: Bei `""` läuft die Schleife nicht, es erscheint nur der Zeilenumbruch.
```

```aufgabe
id: fg-me-zwei-werte
titel: Zwei Ergebnisse in einem Array
niveau: 2
lernziel: 2
kompetenz: anwenden
quelle: Zusatzfrage „Kann eine Methode mehr als einen Rückgabewert haben?“, Blatt 2 WS2021 (Variation)
angabe: |
  Eine Methode soll Quotient und Rest einer ganzzahligen Division liefern. Da eine Methode nur einen Rückgabewert hat,
  gibt sie ein Array mit zwei Plätzen zurück: zuerst den Quotienten, dann den Rest.

  Schreibe `int[] teileMitRest(int a, int b)`. Beispiel: `teileMitRest(17, 5)` liefert `{3, 2}`.
  Vorbedingung: `a >= 0` und `b > 0`.
teile:
  - typ: code
    vorlage: |
      public class Division {
          public static int[] teileMitRest(int a, int b) {
              return null; // TODO
          }
      }
    musterloesung: |
      public class Division {
          public static int[] teileMitRest(int a, int b) {
              return new int[]{a / b, a % b};
          }
      }
    tests:
      - { aufruf: "teileMitRest(17, 5)", erwartet: "new int[]{3, 2}" }
      - { aufruf: "teileMitRest(20, 4)", erwartet: "new int[]{5, 0}", beschreibung: "ohne Rest" }
      - { aufruf: "teileMitRest(3, 7)", erwartet: "new int[]{0, 3}", beschreibung: "Divisor größer als Dividend" }
      - { aufruf: "teileMitRest(100, 9)", erwartet: "new int[]{11, 1}", versteckt: true }
    fehler:
      - { wert: 1, meldung: "Stimmt die Reihenfolge? Zuerst der Quotient `a / b`, dann der Rest `a % b`." }
      - { wert: 3, meldung: "Wenn `a` kleiner als `b` ist, ist der Quotient 0 und der Rest gleich `a`." }
hinweise:
  - Der Quotient ist `a / b`, der Rest `a % b`.
  - 'Ein Array mit zwei Werten legst du direkt mit `new int[]{…, …}` an und gibst es zurück.'
loesung: |
  **Ansatz:** Beide Ergebnisse berechnen und in ein Array mit zwei Plätzen packen. So bleibt es bei einem Rückgabewert.
  ---
  `return new int[]{a / b, a % b};`
  ---
  Kontrolle: `17 / 5 = 3` und `17 % 5 = 2`, also `{3, 2}`. Im Gespräch sagst du: „Es ist ein Rückgabewert, nämlich ein Array, das zwei Zahlen enthält.“
```

```aufgabe
id: fg-me-text-increment
titel: Warum kann verdopple(z) nicht funktionieren?
niveau: 3
lernziel: 2
kompetenz: begruenden
quelle: Zusatzfrage zu einer void-Methode, die ihren Parameter erhöhen soll, Blatt 3 WS2017 (umformuliert, eigene Methode)
angabe: |
  **Zusatzfrage:** „Deine Methode `void verdopple(int z)` setzt `z = 2 * z;`. Warum hat die Variable des Aufrufers
  danach trotzdem noch ihren alten Wert?“

  ```java
  int z = 3;
  verdopple(z);
  System.out.println(z);   // gibt 3 aus, nicht 6
  ```

  Erkläre den Grund und nenne zwei Wege, wie man das Ziel trotzdem erreicht. Vergleiche danach mit der Musterantwort.
teile:
  - typ: text
    muster: |
      Java übergibt bei primitiven Typen wie `int` (den einfachen Zahl-, Zeichen- und Wahrheitswert-Typen) eine
      **Kopie des Werts**. Das Fachwort dafür ist **call-by-value**. Der Parameter `z` in `verdopple` ist eine eigene
      lokale Variable, die nur zufällig genauso heißt. Wird sie verdoppelt, ändert sich nur die Kopie. Sie verschwindet
      am Ende der Methode. Die Variable `z` des Aufrufers wird nie berührt.
      Weg 1: Die Methode gibt den neuen Wert zurück, `int verdopple(int z) { return 2 * z; }`, und der Aufrufer
      schreibt `z = verdopple(z);`.
      Weg 2: Der Wert steckt in einem Array, zum Beispiel `int[] zahl = {3};`. Die Methode bekommt den Verweis auf das
      Array und verdoppelt `zahl[0]`. Weil beide auf dasselbe Array zeigen, sieht der Aufrufer die Änderung.
hinweise:
  - Was genau wird beim Aufruf in den Parameter geschrieben, die Variable oder ihr Wert?
  - Für die Wege denk an den Rückgabewert und an Arrays, deren Inhalt eine Methode verändern kann.
loesung: |
  **Ansatz:** Den Mechanismus call-by-value (Übergabe einer Kopie des Werts) benennen und auf das Beispiel anwenden.
  ---
  Der Parameter bekommt eine Kopie. Die Methode ändert nur diese Kopie, `z` des Aufrufers bleibt 3.
  ---
  Abhilfe: Rückgabewert mit `z = verdopple(z);`, oder ein Array, dessen Inhalt die Methode verändert, wie in [12.6 Arrays als Parameter und Rückgabewert](/lernen/ep1/arrays/arrays-als-parameter-und-rueckgabewert). Prüfe, ob deine Antwort den Begriff Kopie und beide Wege enthält.
```

## Zusatzfragen zur Rekursion

```aufgabe
id: fg-rk-check-ausgabe
titel: Eine kleine Rekursion verfolgen
niveau: 1
art: check
angabe: |
  Was gibt das Programm aus? (Wiederholung: [10.2 Der Aufrufstapel: Hinweg und Rückweg](/lernen/ep1/rekursion/der-aufrufstapel-hinweg-und-rueckweg))
teile:
  - typ: ausgabe
    code: |
      public class Zaehlen {
          public static void runter(int n) {
              if (n < 1) {
                  return;
              }
              System.out.print(n + " ");
              runter(n - 2);
          }

          public static void main(String[] args) {
              runter(7);
          }
      }
    trim: true
    loesung: |
      7 5 3 1 
    fehler:
      - wert: "7 5 3 1 -1"
        meldung: 'Bei `n = -1` greift der Basisfall `n < 1` **vor** der Ausgabe. Die -1 wird nicht mehr ausgegeben.'
      - wert: "7 6 5 4 3 2 1"
        meldung: Der Fortschritt ist `n - 2`, nicht `n - 1`. Jeder Aufruf springt um zwei weiter.
hinweise:
  - Schreib die Argumente der Aufrufe der Reihe nach auf, bis der Basisfall greift.
loesung: |
  Die Aufrufe haben die Argumente 7, 5, 3, 1 und -1.
  ---
  Bei -1 greift der Basisfall `n < 1`, ohne Ausgabe. Ausgegeben werden `7 5 3 1`.
```

Ab Blatt 3 kommt die **Rekursion**: Eine Methode ruft sich selbst auf. Zu den rekursiven Aufgaben gab es diese
Zusatzfragen, teils seit 2017:

- Was ist **Fundiertheit**, was ist **Fortschritt** im Zusammenhang mit der Rekursion?
- Wie oft wird die Methode aufgerufen, wenn das Muster bis zu einer bestimmten Größe gezeichnet wird?
- Wie viele Formen werden auf der letzten Rekursionsstufe gezeichnet?
- Wie musst du deine Lösung ändern, um ein abgewandeltes Muster zu erzeugen?
- Warum hat eine Methode zwei oder drei rekursive Aufrufe?
- Wie unterscheidet sich eine rekursive von einer iterativen Lösung? Iterativ heißt: mit einer Schleife statt mit
  Selbstaufrufen.

### Fundiertheit und Fortschritt

Diese beiden Wörter beschreiben, warum eine Rekursion endet. In
[10.1 Eine Methode ruft sich selbst auf](/lernen/ep1/rekursion/eine-methode-ruft-sich-selbst-auf) heißen sie Basisfall
und Fortschritt.

- **Fundiertheit** heißt: Es gibt mindestens einen **Basisfall**. Das ist ein Fall, der ohne Selbstaufruf gelöst wird.
  Die Rekursion steht sozusagen auf einem festen Fundament.
- **Fortschritt** heißt: Jeder Selbstaufruf kommt dem Basisfall **näher**. Meist wird ein Argument kleiner, zum Beispiel
  `n / 10` statt `n`.

Nur wenn beides gilt, endet die Rekursion für jede erlaubte Eingabe.

:::beispiel[Fundiertheit und Fortschritt an einer Methode zeigen]
Die Methode zählt, wie oft die Ziffer 7 in einer Zahl `n >= 0` vorkommt.

```java
public static int zaehleSieben(int n) {
    if (n == 0) {
        return 0;
    }
    int rest = zaehleSieben(n / 10);
    if (n % 10 == 7) {
        return rest + 1;
    }
    return rest;
}
```

**Fundiertheit:** „Der Basisfall ist `n == 0`. Dann sind alle Ziffern abgeschnitten, es gibt keine 7 mehr zu zählen.
Also liefere ich 0 ohne Selbstaufruf.“

**Fortschritt:** „Ich rufe mich mit `n / 10` auf. Das schneidet die letzte Ziffer ab. Die Zahl hat bei jedem Aufruf eine
Ziffer weniger und wird nach höchstens zehn Aufrufen 0.“

**Probe mit Zahlen:** `zaehleSieben(717)` ruft `zaehleSieben(71)` auf, das ruft `zaehleSieben(7)` auf, das ruft
`zaehleSieben(0)` auf. Rückweg: 0, dann 1 (die 7), dann 1 (die 1 ist keine 7), dann 2 (die 7). Ergebnis 2.

**Gegenbeispiel:** Würde der Selbstaufruf `zaehleSieben(n)` lauten, fehlte der Fortschritt. Das Argument bliebe gleich,
der Basisfall käme nie. Java bricht dann mit einem `StackOverflowError` ab, weil der Speicher für die Aufrufe voll ist.
:::

```aufgabe
id: fg-rk-rf
titel: Fundiertheit und Fortschritt beurteilen
niveau: 1
lernziel: 3
kompetenz: verstehen
quelle: Zusatzfragen „Was ist Fundiertheit / Fortschritt im Zusammenhang mit der Rekursion?“, Blatt 5 WS2017 (umformuliert)
angabe: |
  Beurteile jede Aussage.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Eine Rekursion ist fundiert, wenn es mindestens einen Fall gibt, der ohne Selbstaufruf gelöst wird.
        richtig: true
        erklaerung: Das ist der Basisfall. Auf ihm „steht“ die Rekursion.
      - text: "`f(n)` mit dem Selbstaufruf `f(n + 1)` und dem Basisfall `n == 0` hat für `n = 5` Fortschritt."
        richtig: false
        erklaerung: Von 5 aus wird `n` immer größer. Der Basisfall 0 wird nie erreicht.
      - text: Hat eine Methode einen Basisfall, dann endet sie für jede Eingabe.
        richtig: false
        erklaerung: Der Basisfall muss auch **erreicht** werden. Dafür braucht es Fortschritt in Richtung Basisfall.
      - text: "Bei `f(n / 2)` mit Basisfall `n == 0` gibt es für jedes `n >= 0` Fortschritt."
        richtig: true
        erklaerung: Ganzzahliges Halbieren macht jede positive Zahl kleiner und landet schließlich bei 0.
    fehler:
      - wert: [r, f, r, r]
        meldung: Ein Basisfall allein genügt nicht. Er muss auch erreicht werden. Denk an `f(n + 1)` mit dem Basisfall `n == 0`.
      - wert: [r, r, f, r]
        meldung: Prüfe mit Zahlen. Aus 5 wird bei `f(n + 1)` die 6, dann 7. Kommt man so je bei 0 an?
hinweise:
  - Fundiertheit fragt nach dem Basisfall, Fortschritt nach der Richtung der Selbstaufrufe.
loesung: |
  **Ansatz:** Fundiertheit heißt Basisfall vorhanden, Fortschritt heißt Basisfall wird erreicht.
  ---
  Aussagen 1 und 4 sind richtig. Aussage 2 ist falsch, weil `n` wächst. Aussage 3 ist falsch, weil ein Basisfall ohne Fortschritt nichts nützt.
```

```aufgabe
id: fg-rk-linear-aufrufe
titel: Aufrufe einer linearen Rekursion zählen
niveau: 1
lernziel: 3
kompetenz: rechnen
quelle: printOddNumbersAscending, Blatt 3 WS2023 (Variation mit eigenen Zahlen)
angabe: |
  Wie oft wird `zeigeUngerade` insgesamt aufgerufen, wenn `main` den Aufruf `zeigeUngerade(5, 21)` macht?
  Der erste Aufruf aus `main` zählt mit.

  ```java
  public static void zeigeUngerade(int start, int ende) {
      if (start > ende) {
          return;
      }
      System.out.print(start + " ");
      zeigeUngerade(start + 2, ende);
  }
  ```
teile:
  - typ: zahl
    loesung: "(21 - 5) / 2 + 1 + 1"
    fehler:
      - wert: "9"
        meldung: Ausgegeben werden 9 Zahlen. Es gibt aber noch einen Aufruf mit `start = 23`, der sofort im Basisfall endet. Auch er zählt.
      - wert: "17"
        meldung: Der Fortschritt ist `start + 2`. Die Methode springt in Zweierschritten, nicht in Einerschritten.
hinweise:
  - Schreib die Werte von `start` aller Aufrufe auf, bis einmal `start > ende` gilt.
loesung: |
  **Ansatz:** Alle Aufrufe mit ihrem `start` aufschreiben, auch den letzten, der nur den Basisfall prüft.
  ---
  `start` ist 5, 7, 9, 11, 13, 15, 17, 19, 21 (9 Aufrufe mit Ausgabe) und zuletzt 23 (Basisfall). Das sind 10 Aufrufe.
```

### Aufrufe und Formen eines Fraktals zählen

Auf Blatt 3 war mehrere Jahre lang ein Muster aus Quadraten rekursiv zu zeichnen. Ein solches Muster, das sich in immer
kleineren Kopien wiederholt, heißt **Fraktal**. Die Zusatzfragen lauteten: Wie oft wird die Methode aufgerufen? Wie viele
Quadrate liegen auf der letzten Ebene? Die Antwort hängt an **deinem** Code. Darum musst du sie selbst ausrechnen können.

:::beispiel[Aufrufe und Quadrate zählen]
Die Methode zeichnet ein Quadrat mit Mittelpunkt `(x, y)` und Seitenlänge `s`. Davor ruft sie sich viermal auf, für die
vier Ecken, jeweils mit halber Seitenlänge. Gestartet wird mit `muster(cd, 200, 200, 160)`.

```java
public static void muster(CodeDraw cd, int x, int y, int s) {
    if (s < 10) {
        return;
    }
    muster(cd, x - s / 2, y - s / 2, s / 2);
    muster(cd, x + s / 2, y - s / 2, s / 2);
    muster(cd, x - s / 2, y + s / 2, s / 2);
    muster(cd, x + s / 2, y + s / 2, s / 2);
    cd.fillSquare(x - s / 2, y - s / 2, s);
}
```

Wir zählen Ebene für Ebene. Jeder Aufruf, der zeichnet, erzeugt vier Aufrufe auf der nächsten Ebene.

- Ebene 0: Seitenlänge 160, 1 Aufruf, 1 Quadrat.
- Ebene 1: Seitenlänge 80, 4 Aufrufe, 4 Quadrate.
- Ebene 2: Seitenlänge 40, 16 Aufrufe, 16 Quadrate.
- Ebene 3: Seitenlänge 20, 64 Aufrufe, 64 Quadrate.
- Ebene 4: Seitenlänge 10, 256 Aufrufe, 256 Quadrate.
- Ebene 5: Seitenlänge 5, 1024 Aufrufe, kein Quadrat, weil hier der Basisfall greift.

- **Quadrate auf der letzten Ebene:** Die kleinsten Quadrate haben `s = 10`. Davon gibt es $4^4 = 256$.
- **Quadrate insgesamt:** $1 + 4 + 16 + 64 + 256 = 341$.
- **Aufrufe insgesamt:** Auch die 1024 Aufrufe mit `s = 5` zählen. Sie prüfen nur den Basisfall und kehren sofort
  zurück. Zusammen sind es $341 + 1024 = 1365$ Aufrufe.

Die Formel dahinter: Auf Ebene $k$ gibt es $4^k$ Aufrufe, weil sich die Zahl bei jeder Ebene vervierfacht.
:::

:::achtung[Aufrufe und Quadrate gleichgesetzt]
**Falsche Antwort im Gespräch:** „Die Methode wird 341-mal aufgerufen, weil 341 Quadrate gezeichnet werden.“

Das stimmt nur, wenn die Größe **vor** dem Selbstaufruf geprüft wird, etwa mit `if (s / 2 >= 10)` vor jedem Aufruf. Im
Code aus dem Beispiel steht die Prüfung `if (s < 10)` aber **am Anfang** der Methode. Dann wird die Methode auch für
`s = 5` noch aufgerufen. Sie zeichnet nichts, zählt aber als Aufruf. Richtig sind darum 1365 Aufrufe.

Beide Fassungen sind erlaubt. Wichtig ist, dass deine Antwort zu **deinem** Code passt. Auswendig gelernte Zahlen aus
einer fremden Lösung verraten sich hier sofort.
:::

```aufgabe
id: fg-rk-dreier
titel: Ein Muster mit drei Selbstaufrufen
niveau: 2
lernziel: 3
kompetenz: rechnen
quelle: Zusatzfragen zur Anzahl der Aufrufe und Quadrate, Blatt 3 WS2021 (Variation mit eigenen Zahlen)
angabe: |
  Eine Variante des Musters ruft sich nur **dreimal** auf, jeweils mit einem Drittel der Seitenlänge. Der Basisfall
  steht am Anfang:

  ```java
  public static void drei(CodeDraw cd, int x, int y, int s) {
      if (s < 3) {
          return;
      }
      drei(cd, x - s / 3, y, s / 3);
      drei(cd, x + s / 3, y, s / 3);
      drei(cd, x, y + s / 3, s / 3);
      cd.fillSquare(x - s / 2, y - s / 2, s);
  }
  ```

  Gestartet wird mit `drei(cd, 200, 200, 81)`. Löse die Aufgabe zuerst geführt.

  **a)** Wie viele Quadrate werden insgesamt gezeichnet?

  **b)** Wie viele Quadrate liegen auf der letzten gezeichneten Ebene?

  **c)** Wie oft wird `drei` insgesamt aufgerufen, den Aufruf aus `main` mitgezählt?
teile:
  - typ: zahl
    label: a)
    loesung: "1 + 3 + 9 + 27"
    fehler:
      - wert: "121"
        meldung: Das ist die Zahl der Aufrufe. Gezeichnet wird nur, wenn `s >= 3` ist. Die Aufrufe mit `s = 1` zeichnen nichts.
      - wert: "4"
        meldung: Das ist die Zahl der Ebenen. Auf jeder Ebene gibt es dreimal so viele Quadrate wie auf der vorigen.
  - typ: zahl
    label: b)
    loesung: "3^3"
    fehler:
      - wert: "81"
        meldung: Die 81 Aufrufe mit `s = 1` enden im Basisfall und zeichnen nichts. Die letzte gezeichnete Ebene hat `s = 3`.
  - typ: zahl
    label: c)
    loesung: "1 + 3 + 9 + 27 + 81"
    fehler:
      - wert: "40"
        meldung: Der Basisfall steht am Anfang der Methode. Die Aufrufe mit `s = 1` finden also statt und zählen mit.
gefuehrt:
  - text: Welche Seitenlängen kommen der Reihe nach vor? Ab welcher greift der Basisfall?
    teil:
      typ: auswahl
      optionen: ["81, 27, 9, 3, dann 1 (Basisfall)", "81, 27, 9, dann 3 (Basisfall)", "81, 40, 20, 10, 5, 2 (Basisfall)"]
      richtig: [0]
    erklaerung: 'Jede Ebene teilt durch 3. Bei `s = 3` gilt `s < 3` noch nicht, gezeichnet wird. Erst `s = 1` ist der Basisfall.'
  - text: Wie viele Aufrufe gibt es auf der Ebene mit `s = 3`?
    teil: { typ: zahl, loesung: "3^3" }
    erklaerung: 'Ebene 0 hat 1 Aufruf, jede weitere dreimal so viele: 1, 3, 9, 27.'
  - text: Wie viele Aufrufe gibt es auf der Ebene mit `s = 1`?
    teil: { typ: zahl, loesung: "3^4" }
    erklaerung: 'Jeder der 27 Aufrufe mit `s = 3` ruft dreimal auf, das sind 81 Aufrufe, die sofort zurückkehren.'
hinweise:
  - Leg eine Tabelle an wie im Beispiel. Jede Ebene hat dreimal so viele Aufrufe wie die vorige.
  - Gezeichnet wird nur auf Ebenen mit `s >= 3`. Aufgerufen wird auch noch die Ebene mit `s = 1`.
loesung: |
  **Ansatz:** Ebenen mit Seitenlänge, Zahl der Aufrufe und Zahl der Quadrate in eine Tabelle schreiben.
  ---
  Seitenlängen 81, 27, 9, 3 werden gezeichnet, mit 1, 3, 9 und 27 Quadraten. Zusammen sind das 40 Quadrate. Auf der letzten gezeichneten Ebene liegen 27.
  ---
  Dazu kommen 81 Aufrufe mit `s = 1`, die nur den Basisfall prüfen. Aufrufe insgesamt: $40 + 81 = 121$.
```

### Das Muster abwandeln

Die dritte Zusatzfrage zum Fraktal lautet: „Wie musst du deine Lösung ändern, um das abgewandelte Muster zu erzeugen?“
Es gibt dabei drei Stellschrauben:

1. **Welche Selbstaufrufe** stehen in der Methode? Weniger Aufrufe heißt weniger Äste.
2. **Wohin** geht ein Aufruf? Die Verschiebung von `x` und `y` legt die Richtung fest.
3. **Wann** wird gezeichnet, vor oder nach den Selbstaufrufen? Das bestimmt, was oben liegt.

Die dritte Stellschraube ist die häufigste Falle.

:::achtung[Erst zeichnen, dann rekursiv aufrufen]
**Auftrag:** Die großen Quadrate sollen die kleinen überdecken.

**Falscher Code:** Das Quadrat wird **vor** den Selbstaufrufen gezeichnet.

```java
cd.fillSquare(x - s / 2, y - s / 2, s);
muster(cd, x - s / 2, y - s / 2, s / 2);
// ... drei weitere Aufrufe
```

Dann entsteht zuerst das größte Quadrat, danach die kleineren. Was später gezeichnet wird, liegt oben. Die kleinen
Quadrate liegen also **über** dem großen, genau umgekehrt wie verlangt.

**Richtig:** Das Quadrat erst **nach** den vier Selbstaufrufen zeichnen, wie im Beispiel davor. Dann sind alle kleinen
Quadrate schon fertig, wenn das große darübergemalt wird.
:::

```aufgabe
id: fg-rk-zwei-aeste
titel: Nur noch zwei Selbstaufrufe
niveau: 2
lernziel: 3
kompetenz: rechnen
quelle: Zusatzfrage „Wie müssen Sie Ihre Implementierung abändern, um das Muster in Abbildung 1b zu erzeugen?“, Blatt 3 WS2021 (Variation)
angabe: |
  Im Muster aus dem Beispiel dieser Lektion (Start `s = 160`, Basisfall `s < 10` am Anfang) streichst du die beiden
  Selbstaufrufe für die **oberen** Ecken. Es bleiben zwei Selbstaufrufe. Wie viele Quadrate werden jetzt gezeichnet?
teile:
  - typ: zahl
    loesung: "1 + 2 + 4 + 8 + 16"
    fehler:
      - wert: "341"
        meldung: Das ist die Zahl für vier Selbstaufrufe. Mit zwei Selbstaufrufen verdoppelt sich die Zahl je Ebene nur noch.
      - wert: "16"
        meldung: Das sind nur die Quadrate der letzten Ebene. Gefragt ist die Summe über alle Ebenen.
      - wert: "63"
        meldung: Die Aufrufe mit `s = 5` zeichnen nichts. Gezählt werden nur die Ebenen mit `s = 160` bis `s = 10`.
hinweise:
  - Die Seitenlängen bleiben 160, 80, 40, 20 und 10. Nur die Zahl der Quadrate je Ebene ändert sich.
  - Mit zwei Selbstaufrufen hat Ebene k genau $2^k$ Quadrate.
loesung: |
  **Ansatz:** Dieselben fünf Ebenen wie im Beispiel, aber Faktor 2 statt 4 je Ebene.
  ---
  Die Ebenen haben 1, 2, 4, 8 und 16 Quadrate.
  ---
  Zusammen sind das $1 + 2 + 4 + 8 + 16 = 31$ Quadrate. Im Gespräch erklärst du: „Ich habe zwei Aufrufe entfernt, darum verdoppelt sich die Zahl je Ebene nur noch.“
```

```aufgabe
id: fg-rk-vor-nach
titel: Ausgabe vor und nach dem Selbstaufruf
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: |
  Was gibt das Programm aus? Am Zeilenende steht ein Leerzeichen, das beim Vergleich nicht zählt.
teile:
  - typ: ausgabe
    code: |
      public class VorNach {
          public static void f(int n) {
              if (n == 0) {
                  return;
              }
              System.out.print("v" + n + " ");
              f(n - 1);
              System.out.print("n" + n + " ");
          }

          public static void main(String[] args) {
              f(3);
          }
      }
    trim: true
    loesung: |
      v3 v2 v1 n1 n2 n3 
    fehler:
      - wert: "v3 n3 v2 n2 v1 n1"
        meldung: Die Ausgabe `n3` steht **nach** dem Selbstaufruf. Sie kommt erst, wenn `f(2)` mit allem, was dazugehört, fertig ist.
      - wert: "v3 v2 v1 n3 n2 n1"
        meldung: Auf dem Rückweg werden die Aufrufe in umgekehrter Reihenfolge beendet. Zuerst endet der innerste Aufruf `f(1)`.
hinweise:
  - Vor dem Selbstaufruf passiert alles auf dem Hinweg, danach alles auf dem Rückweg.
  - Der zuletzt begonnene Aufruf endet als Erster.
loesung: |
  **Ansatz:** Hinweg und Rückweg getrennt betrachten, wie beim Fraktal mit dem Zeichnen nach den Aufrufen.
  ---
  Auf dem Hinweg erscheinen `v3 v2 v1`. Dann trifft `f(0)` den Basisfall.
  ---
  Auf dem Rückweg enden `f(1)`, `f(2)`, `f(3)` in dieser Reihenfolge: `n1 n2 n3`.
```

### Rekursiv oder iterativ?

Auf Blatt 3 im Jahr 2023 stand neben der rekursiven Fassung des Musters eine **iterative** Fassung. Eine KI hatte sie
erzeugt, und sie zeichnete ein falsches Bild. Die Frage war, wie man den Code reparieren muss. Eine allgemeinere
Rückfrage liegt im Gespräch nahe: „Was ist der Unterschied zwischen rekursiv und iterativ?“ Auf den Blättern stand sie
so allerdings nicht.

Kurz gesagt: Jede rekursive Lösung lässt sich iterativ schreiben und umgekehrt. Bei einfachen Rekursionen mit einem
Selbstaufruf ist die Schleife oft kürzer und braucht keinen Speicher für viele Aufrufe. Bei verzweigten Rekursionen wie
dem Fraktal ist die rekursive Fassung meist viel einfacher. Die Schleifenfassung muss sich selbst merken, welche Quadrate
noch zu zeichnen sind.

```aufgabe
id: fg-rk-iterativ
titel: Eine rekursive Quersumme als Schleife
niveau: 2
lernziel: 3
kompetenz: anwenden
quelle: Vergleich rekursiver und iterativer Implementierung, Blatt 3 WS2023 (Variation)
angabe: |
  Die rekursive Fassung lautet:

  ```java
  public static int quersumme(int n) {
      if (n == 0) {
          return 0;
      }
      return n % 10 + quersumme(n / 10);
  }
  ```

  Fülle die Lücken der iterativen Fassung so, dass sie für jedes `n >= 0` dasselbe liefert.
teile:
  - typ: lueckentext
    code: |
      int n = 4096;
      int summe = 0;
      while (___) {
          summe += ___;
          n = ___;
      }
      System.out.println(summe);
    luecken: [["n > 0", "n != 0", "0 < n"], ["n % 10"], ["n / 10"]]
    fehler:
      - wert: ["n > 0", "n / 10", "n % 10"]
        meldung: '`n % 10` ist die letzte Ziffer, die zur Summe kommt. `n / 10` schneidet sie ab und ist der neue Wert von `n`.'
      - wert: ["n > 10", "n % 10", "n / 10"]
        meldung: Mit `n > 10` fehlt die erste Ziffer. Die Schleife muss laufen, bis `n` gleich 0 ist, wie der Basisfall der rekursiven Fassung.
hinweise:
  - Der Basisfall `n == 0` wird zur Abbruchbedingung der Schleife.
  - Was die rekursive Fassung zur Summe addiert, addiert die Schleife zu `summe`. Der Fortschritt `n / 10` wird zur Zuweisung an `n`.
loesung: |
  **Ansatz:** Basisfall, addierter Wert und Fortschritt der Rekursion auf Bedingung, Rumpf und Schritt der Schleife abbilden.
  ---
  Die Schleife läuft, solange `n > 0` ist. In jedem Durchlauf kommt `n % 10` zur Summe, danach wird `n = n / 10`.
  ---
  Kontrolle mit 4096: 6 + 9 + 0 + 4 = 19. Das liefert auch die rekursive Fassung.
```

```aufgabe
id: fg-rk-code-grenze
titel: Ziffern über einer Grenze zählen, rekursiv
niveau: 3
lernziel: 3
kompetenz: anwenden
quelle: countDigitsAboveFive, Blatt 3 WS2023 (eigener Variationsauftrag „Grenze als Parameter“)
angabe: |
  Auf Blatt 3 im Wintersemester 2023 war eine Methode zu schreiben, die Ziffern größer als 5 zählt. Ein denkbarer
  Variationsauftrag dazu lautet: „Mach die Grenze zu einem Parameter.“

  Schreibe `int zaehleGroesser(int zahl, int grenze)`. Sie liefert, wie viele Ziffern von `zahl` größer als `grenze`
  sind. Wie auf dem Blatt: rekursiv, ohne Schleifen, ohne Hilfsmethoden. Vorbedingung: `zahl >= 0` und
  `0 <= grenze <= 9`.

  Beispiel: `zaehleGroesser(70519, 4)` liefert 3, denn 7, 5 und 9 sind größer als 4.
teile:
  - typ: code
    vorlage: |
      public class Ziffern {
          public static int zaehleGroesser(int zahl, int grenze) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Ziffern {
          public static int zaehleGroesser(int zahl, int grenze) {
              if (zahl == 0) {
                  return 0;
              }
              int rest = zaehleGroesser(zahl / 10, grenze);
              if (zahl % 10 > grenze) {
                  return rest + 1;
              }
              return rest;
          }
      }
    tests:
      - { aufruf: "zaehleGroesser(70519, 4)", erwartet: "3" }
      - { aufruf: "zaehleGroesser(222, 1)", erwartet: "3", beschreibung: "alle Ziffern zählen" }
      - { aufruf: "zaehleGroesser(5, 5)", erwartet: "0", beschreibung: "gleich der Grenze zählt nicht" }
      - { aufruf: "zaehleGroesser(908172, 7)", erwartet: "2", versteckt: true }
      - { aufruf: "zaehleGroesser(1000, 0)", erwartet: "1", versteckt: true }
    regeln: { keineSchleifen: true, rekursiv: [zaehleGroesser], keineHilfsmethoden: true }
    fehler:
      - { wert: 3, meldung: "Verlangt ist „größer als“. Eine Ziffer, die gleich der Grenze ist, zählt nicht. Prüfe `>` statt `>=`." }
      - { wert: 5, meldung: "Nullen innerhalb der Zahl dürfen die Rekursion nicht beenden. Der Basisfall ist erst `zahl == 0`, nicht „letzte Ziffer ist 0“." }
      - { wert: keineSchleifen, meldung: "Wie auf dem Blatt sind Schleifen verboten. Ersetze die Schleife durch einen Selbstaufruf mit `zahl / 10`." }
hinweise:
  - Basisfall wie bei `zaehleSieben` aus dem Beispiel dieser Lektion. Die letzte Ziffer ist `zahl % 10`.
  - Gib `grenze` beim Selbstaufruf unverändert weiter. Nur `zahl` wird kleiner.
loesung: |
  **Ansatz:** Fundiertheit mit dem Basisfall `zahl == 0`, Fortschritt mit `zahl / 10`. Die Grenze reist unverändert mit.
  ---
  ```java
  if (zahl == 0) {
      return 0;
  }
  int rest = zaehleGroesser(zahl / 10, grenze);
  if (zahl % 10 > grenze) {
      return rest + 1;
  }
  return rest;
  ```
  ---
  Kontrolle mit `zaehleGroesser(1000, 0)`: Die Nullen bringen nichts, die 1 zählt. Ergebnis 1. Die Nullen beenden die Rekursion nicht, weil erst `zahl == 0` der Basisfall ist.
```

```aufgabe
id: fg-rk-text-fundiert
titel: Fundiertheit und Fortschritt im Gespräch
niveau: 3
lernziel: 3
kompetenz: begruenden
angabe: |
  Die Tutorin zeigt auf diese Methode und fragt: „Ist deine Rekursion fundiert, und hat sie Fortschritt? Woran siehst du
  das?“

  ```java
  public static boolean enthaeltX(String text) {
      if (text.length() == 0) {
          return false;
      }
      if (text.charAt(0) == 'x') {
          return true;
      }
      return enthaeltX(text.substring(1));
  }
  ```

  Schreib deine Antwort auf. Vergleiche danach mit der Musterantwort.
teile:
  - typ: text
    muster: |
      Ja, die Rekursion ist fundiert. Es gibt zwei Basisfälle ohne Selbstaufruf: den leeren String, für den ich `false`
      liefere, und ein `x` am Anfang, für das ich `true` liefere.
      Sie hat Fortschritt, weil ich mich mit `text.substring(1)` aufrufe. Dieser String ist um genau ein Zeichen kürzer.
      Nach höchstens `text.length()` Aufrufen ist er leer, und der erste Basisfall greift.
      Darum endet die Methode für jeden String, der nicht `null` ist.
hinweise:
  - Zähle die Fälle, in denen die Methode ohne Selbstaufruf zurückkehrt.
  - Wie verändert sich das Argument beim Selbstaufruf, und wohin führt das?
loesung: |
  **Ansatz:** Erst die Basisfälle suchen (Fundiertheit), dann die Änderung des Arguments (Fortschritt).
  ---
  Basisfälle: leerer String liefert `false`, `x` am Anfang liefert `true`.
  ---
  Fortschritt: `substring(1)` kürzt um ein Zeichen, also ist der String nach endlich vielen Aufrufen leer. Prüfe, ob deine Antwort beide Basisfälle und das Wort „kürzer“ enthält.
```

## Zusatzfragen zu Arrays und Referenzen

```aufgabe
id: fg-ar-check-index
titel: Index und Länge
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [12.1 Was ist ein Array? Anlegen, Index und Länge](/lernen/ep1/arrays/was-ist-ein-array-anlegen-index-und-laenge))
teile:
  - typ: ausgabe
    code: |
      int[] werte = new int[4];
      werte[1] = 8;
      System.out.println(werte.length);
      System.out.println(werte[1] + werte[3]);
    loesung: |
      4
      8
    fehler:
      - wert: "3\n8"
        meldung: '`new int[4]` legt vier Plätze an, mit den Indizes 0 bis 3. Die Länge ist 4.'
      - wert: "4\n0"
        meldung: '`werte[1]` wurde auf 8 gesetzt. `werte[3]` hat noch den Standardwert 0. Zusammen sind das 8.'
hinweise:
  - Ein neues `int`-Array ist mit lauter Nullen gefüllt.
loesung: |
  Das Array hat 4 Plätze, also ist `werte.length` gleich 4.
  ---
  `werte[1]` ist 8, `werte[3]` ist noch 0. Die Summe ist 8.
```

Blatt 4 bringt Arrays und die Frage, was eine Array-Variable eigentlich enthält. Die erste Aufgabe dieses Blatts ist seit
2021 fast unverändert: Ein vorgegebenes Programm verhält sich seltsam, und du sollst vier Fragen dazu beantworten. Danach
folgen Zusatzfragen, die sich von Jahr zu Jahr kaum ändern. 2021 waren es sechs, 2023 vier davon (ohne Nummer 2 und 5).
In eigenen Worten:

1. Von welchem Typ muss die Zahl in den eckigen Klammern sein, mit der man einen Platz im Array auswählt?
2. Muss ein Array erst erzeugt werden, bevor man es benutzt?
3. Lässt sich ein Array nachträglich länger oder kürzer machen?
4. Wie bekommt man eine echte Kopie eines `int`-Arrays?
5. Hat das erste Element immer den Index 0?
6. Taugt `==`, um zwei Arrays zu vergleichen? Was genau wird dabei verglichen?

Ältere Blätter fragten außerdem: Was passiert bei `new int[100]` im Hintergrund? Wie legt man ein dreidimensionales Array
an? Wie ändert man die Länge einer einzelnen Zeile eines zweidimensionalen Arrays?

Der Schlüssel zu fast allen Antworten ist ein Satz aus [12.5 Referenzen: zwei Namen für dasselbe Array](/lernen/ep1/arrays/referenzen-zwei-namen-fuer-dasselbe-array):
**Eine Array-Variable enthält nicht die Werte, sondern einen Verweis auf das Array**. Ein Verweis, auch **Referenz**
genannt, ist so etwas wie die Adresse, unter der das Array im Speicher liegt.

### Die vier Fragen zum vorgegebenen Programm

Auf Blatt 4 steht ein Programm mit vier Methoden. Unser Nachbau hat andere Namen und Zahlen, aber denselben Aufbau.

:::beispiel[Ein Programm mit vier seltsamen Stellen erklären]
```java
public class Analyse {
    public static void fuelle(int[] feld) {
        int wert = 5;
        for (int i = 0; i < feld.length; i++) {
            feld[i] = wert;
            wert += 5;
        }
    }

    public static void filtere(int[] feld) {
        int[] kopie = feld;
        for (int i = 0; i < kopie.length; i++) {
            if (kopie[i] % 3 == 0) {
                kopie[i] = 0;
            }
        }
    }

    public static void ersetze(int[] feld) {
        int[] neu = new int[feld.length];
        feld = neu;
    }

    public static void zeige(int[] feld) {
        for (int i = 0; i <= feld.length; i++) {
            System.out.print(feld[i] + " ");
        }
        System.out.println();
    }
}
```

In `main` steht: `int[] zahlen = new int[6]; fuelle(zahlen); zeige(zahlen); filtere(zahlen); zeige(zahlen);
ersetze(zahlen); zeige(zahlen);`

**a) Warum wirft `zeige` eine Exception?** Die Bedingung `i <= feld.length` lässt `i` bis 6 laufen. Das Array hat aber nur
die Indizes 0 bis 5. Bei `feld[6]` wirft Java eine `ArrayIndexOutOfBoundsException`. Korrektur: `i < feld.length`.
Die Antworten b bis d gehen von dieser korrigierten Fassung aus.

**b) Wie kommen die Werte aus `fuelle` nach `main`, ganz ohne `return`?** Die Methode bekommt eine Kopie des
**Verweises**. Beide Verweise zeigen auf dasselbe Array. Was `fuelle` hineinschreibt, steht danach in `zahlen`. Eine Rückgabe
ist nicht nötig. Nach `fuelle` enthält das Array `5 10 15 20 25 30`.

**c) `filtere` arbeitet doch mit `kopie`. Wieso hat sich danach `zahlen` geändert?** `int[] kopie = feld;`
kopiert nur den Verweis, kein einziges Element. `kopie`, `feld` und `zahlen` zeigen auf dasselbe Array. Danach enthält es
`5 10 0 20 25 0`, weil 15 und 30 durch 3 teilbar sind.

**d) `ersetze` legt ein neues Array an. Warum zeigt `zeige` danach trotzdem den alten Inhalt?** `feld = neu;` ändert nur die **lokale Variable** `feld`
der Methode. Sie zeigt danach auf das neue Array. Der Verweis in `zahlen` bleibt, wie er war. Am Ende der Methode
verschwindet `feld`, und das neue Array ist für immer verloren.
:::

```aufgabe
id: fg-ar-verweise
titel: Verweise verfolgen
niveau: 2
lernziel: 4
kompetenz: verstehen
quelle: Aufgabe 1 c und d, Blatt 4 WS2021 und WS2023 (Variation)
angabe: |
  Was gibt das Programm aus? Löse die Aufgabe zuerst geführt.
teile:
  - typ: ausgabe
    code: |
      public class Verweise {
          public static void verdopple(int[] feld) {
              for (int i = 0; i < feld.length; i++) {
                  feld[i] = 2 * feld[i];
              }
          }

          public static void neuesFeld(int[] feld) {
              feld = new int[]{7, 7, 7};
              feld[0] = 1;
          }

          public static void main(String[] args) {
              int[] a = {1, 2, 3};
              int[] b = a;
              verdopple(b);
              System.out.println(a[0] + " " + a[1] + " " + a[2]);
              neuesFeld(a);
              System.out.println(a[0] + " " + a[1] + " " + a[2]);
              b = new int[]{9, 9, 9};
              System.out.println(a[0] + " " + b[0]);
          }
      }
    loesung: |
      2 4 6
      2 4 6
      2 9
    fehler:
      - wert: "1 2 3\n1 2 3\n1 9"
        meldung: '`int[] b = a;` legt kein zweites Array an. `verdopple(b)` verändert also das Array, auf das auch `a` zeigt.'
      - wert: "2 4 6\n1 7 7\n1 9"
        meldung: In `neuesFeld` zeigt der Parameter nach `feld = new int[]{7, 7, 7}` auf ein **neues** Array. Alles Weitere betrifft nur dieses neue Array, nicht `a`.
      - wert: "2 4 6\n2 4 6\n9 9"
        meldung: '`b = new int[]{9, 9, 9}` lässt nur `b` auf ein neues Array zeigen. `a` zeigt weiter auf das alte.'
gefuehrt:
  - text: Wie viele verschiedene Arrays gibt es direkt nach `int[] b = a;`?
    teil: { typ: zahl, loesung: "1" }
    erklaerung: Es gibt ein Array und zwei Verweise darauf, `a` und `b`.
  - text: Was steht nach `verdopple(b)` in dem Array, auf das `a` zeigt?
    teil:
      typ: auswahl
      optionen: ["`{2, 4, 6}`", "`{1, 2, 3}`"]
      richtig: [0]
    erklaerung: '`verdopple` schreibt in das gemeinsame Array. Die erste Ausgabe ist `2 4 6`.'
  - text: Verändert `neuesFeld(a)` das Array von `a`?
    teil:
      typ: auswahl
      optionen: ["Nein, der Parameter zeigt sofort auf ein neues Array", "Ja, `feld[0] = 1` überschreibt die 2"]
      richtig: [0]
    erklaerung: 'Nach `feld = new int[]{7, 7, 7}` zeigt `feld` woanders hin. `feld[0] = 1` trifft nur das neue Array.'
hinweise:
  - Zeichne für jedes Array einen Kasten und für jede Variable einen Pfeil auf ihren Kasten.
  - 'Eine Zuweisung wie `feld = …` biegt nur den Pfeil dieser einen Variable um. Eine Zuweisung wie `feld[i] = …` ändert den Kasten.'
loesung: |
  **Ansatz:** Pfeile und Kästen zeichnen. Verweise kopieren heißt Pfeil kopieren, nicht Kasten kopieren.
  ---
  `a` und `b` zeigen auf denselben Kasten. `verdopple` macht daraus `{2, 4, 6}`. Erste Ausgabe `2 4 6`.
  ---
  `neuesFeld` biegt nur den eigenen Pfeil auf ein neues Array um. `a` bleibt `{2, 4, 6}`. Zuletzt zeigt `b` auf `{9, 9, 9}`, `a` nicht. Ausgabe `2 9`.
```

### Die sechs Zusatzfragen

:::beispiel[Die Zusatzfragen zu eindimensionalen Arrays kurz beantwortet]
1. **Datentyp des Index:** Der Index muss ein `int` sein. Erlaubt sind auch `byte`, `short` und `char`, weil Java sie
   automatisch in `int` umwandelt. `long` und `double` gehen nicht, dafür braucht man einen Cast.
2. **Initialisieren:** Ein Array muss mit `new` erzeugt oder mit `{…}` angegeben werden, bevor man es benutzt. Die
   Elemente bekommen dann automatisch **Standardwerte**: `0` bei Zahlen, `false` bei `boolean`, `null` bei Strings.
3. **Länge ändern:** Gar nicht. Die Länge eines Arrays steht beim Erzeugen fest. Man legt ein neues, längeres Array an,
   kopiert die Werte hinüber und lässt die Variable auf das neue Array zeigen.
4. **Kopieren:** Mit `int[] kopie = new int[original.length];` und einer Schleife, die jedes Element einzeln kopiert. Die
   Zuweisung `kopie = original` kopiert nur den Verweis.
5. **Index ab 0:** Ja, in Java immer. Der letzte Index ist `length - 1`.
6. **Vergleich mit `==`:** `==` vergleicht die **Verweise**, also ob zwei Variablen auf **dasselbe** Array zeigen. Zwei
   verschiedene Arrays mit gleichem Inhalt sind nach `==` verschieden.

Ein kleines Programm belegt Frage 6:

```java
int[] a = {1, 2, 3};
int[] b = {1, 2, 3};
int[] c = a;
System.out.println(a == b);   // false: zwei verschiedene Arrays
System.out.println(a == c);   // true: derselbe Verweis
```

Den **Inhalt** vergleicht man mit einer Schleife, Element für Element. In der Bibliothek gibt es dafür `Arrays.equals`.
Auf den Blättern ist die Klasse `Arrays` aber meistens nicht erlaubt.
:::

:::achtung[„Die Länge ändere ich mit length“]
**Falsche Antwort auf Frage 3:** „Mit `zahlen.length = 10;`.“

Der Compiler lehnt diese Zeile ab: `cannot assign a value to final variable length`. `length` ist **final**, also
unveränderlich. Es lässt sich nur lesen.

**Richtig:** ein neues Array anlegen und die Werte kopieren.

```java
int[] laenger = new int[10];
for (int i = 0; i < zahlen.length; i++) {
    laenger[i] = zahlen[i];
}
zahlen = laenger;
```

Danach zeigt `zahlen` auf ein Array der Länge 10. Die zusätzlichen Plätze sind 0. Das alte Array wird nicht verlängert,
es wird ersetzt.
:::

```aufgabe
id: fg-ar-rf
titel: Kurze Antworten prüfen
niveau: 1
lernziel: 4
kompetenz: verstehen
quelle: Zusatzfragen 1 bis 6 zu Aufgabe 1, Blatt 4 WS2021 und WS2023 (umformuliert)
angabe: |
  Beurteile jede Antwort auf eine der Zusatzfragen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: "„Der Index kann auch ein `char` sein, weil ein `char` automatisch in `int` umgewandelt wird.“"
        richtig: true
        erklaerung: '`a[''B'' - ''A'']` ist zum Beispiel `a[1]`. Auch `a[''A'']` kompiliert, greift aber auf Index 65 zu.'
      - text: "„Nach `int[] z = new int[3];` sind die Elemente noch undefiniert und müssen vor dem Lesen gesetzt werden.“"
        richtig: false
        erklaerung: Die Elemente eines neuen `int`-Arrays sind automatisch 0. Lesen ist sofort erlaubt.
      - text: "„Um ein Array zu kopieren, schreibe ich `int[] kopie = original;`.“"
        richtig: false
        erklaerung: Das kopiert nur den Verweis. Danach gibt es weiterhin ein einziges Array.
      - text: "„`a == b` ist `true` genau dann, wenn `a` und `b` auf dasselbe Array zeigen.“"
        richtig: true
        erklaerung: '`==` vergleicht bei Arrays die Verweise, nicht die Inhalte.'
    fehler:
      - wert: [r, f, r, r]
        meldung: '`int[] kopie = original;` legt kein neues Array an. Probiere es aus: Ändere danach `kopie[0]` und gib `original[0]` aus.'
      - wert: [f, f, f, r]
        meldung: Ein `char` ist intern eine Zahl, sein Zeichencode. Java wandelt ihn beim Index automatisch in `int` um.
hinweise:
  - Bei den Antworten zu Kopie und Vergleich hilft das Bild „Variable ist ein Pfeil auf einen Kasten“.
loesung: |
  **Ansatz:** Jede Antwort mit den sechs Kurzantworten dieser Lektion vergleichen.
  ---
  Richtig sind 1 und 4. Antwort 2 ist falsch, weil Standardwerte gelten. Antwort 3 ist falsch, weil nur der Verweis kopiert wird.
```

:::achtung[Ein Index vom Typ double]
**Falscher Code:** Eine Studentin berechnet die Mitte eines Arrays mit Kommazahlen.

```java
double mitte = a.length / 2.0;
System.out.println(a[mitte]);
```

Der Compiler meldet `incompatible types: possible lossy conversion from double to int`. Ein `double` als Index ginge nur
mit Verlust, denn welcher Platz wäre `a[2.5]`? Java wandelt darum nicht automatisch um.

**Richtig:** gleich mit ganzen Zahlen rechnen, `int mitte = a.length / 2;`, oder ausdrücklich umwandeln mit
`a[(int) mitte]`. Im Gespräch sagst du: „Der Index muss ein `int` sein. Kleinere ganzzahlige Typen und `char` werden
automatisch umgewandelt, `long` und `double` nicht.“
:::

```aufgabe
id: fg-ar-index-zeilen
titel: Welche Array-Zeilen kompilieren nicht?
niveau: 1
lernziel: 4
kompetenz: anwenden
quelle: Zusatzfrage „Welchen Datentyp muss der Indexausdruck haben?“, Blatt 4 WS2021 und WS2017 (Variation)
angabe: |
  Der Code steht in `main`. Markiere alle Zeilen, an denen der Compiler einen Fehler meldet.
teile:
  - typ: zeilen
    label: Welche Zeilen erzeugen einen Compilerfehler?
    code: |
      int[] a = new int[5];
      a[2L] = 1;
      a['b' - 'a'] = 2;
      double d = 3;
      a[d] = 3;
      a[(int) d] = 4;
      a.length = 10;
      String[] s = {"x", "y"};
      int[][] m = new int[2][];
    loesung: [2, 5, 7]
    fehler:
      - wert: [2, 3, 5, 7]
        meldung: '`''b'' - ''a''` rechnet mit Zeichencodes und ergibt den `int`-Wert 1. Das ist ein gültiger Index.'
      - wert: [2, 5]
        meldung: '`length` ist unveränderlich (final). Die Zuweisung in Zeile 7 lehnt der Compiler ab.'
      - wert: [2, 5, 7, 9]
        meldung: '`new int[2][]` legt ein zweidimensionales Array an, dessen Zeilen noch fehlen. Das ist erlaubt, die Zeilen sind vorerst `null`.'
hinweise:
  - Prüfe bei jedem Index, welchen Typ er hat. `long` und `double` werden nicht automatisch zu `int`.
  - Prüfe außerdem, ob irgendwo etwas Unveränderliches verändert wird.
loesung: |
  **Ansatz:** Bei jedem Zugriff den Typ des Index bestimmen. Dazu jede Zuweisung auf Erlaubtheit prüfen.
  ---
  Zeile 2 hat einen `long`-Index, Zeile 5 einen `double`-Index. Beide brauchen einen Cast, also Fehler. Zeile 7 verändert das finale `length`, ebenfalls Fehler.
  ---
  Zeile 3 ergibt den `int` 1, Zeile 6 hat einen Cast, Zeile 8 und 9 legen gültige Arrays an. Sie kompilieren.
```

```aufgabe
id: fg-ar-vergleich
titel: Gleich oder dasselbe?
niveau: 2
lernziel: 4
kompetenz: verstehen
quelle: Zusatzfrage „Ist es sinnvoll, zwei Arrays mit == zu vergleichen?“, Blatt 4 WS2023 (nachgebaut)
angabe: |
  Was gibt der Code aus?
teile:
  - typ: ausgabe
    code: |
      int[] x = {4, 5};
      int[] y = {4, 5};
      int[] z = x;
      System.out.println(x == y);
      System.out.println(x == z);
      System.out.println(x[0] == y[0] && x[1] == y[1]);
      z[1] = 6;
      System.out.println(x[1]);
    loesung: |
      false
      true
      true
      6
    fehler:
      - wert: "true\ntrue\ntrue\n6"
        meldung: '`x` und `y` haben denselben Inhalt, sind aber zwei verschiedene Arrays. `==` vergleicht die Verweise, also ergibt `x == y` den Wert `false`.'
      - wert: "false\ntrue\ntrue\n5"
        meldung: '`z` zeigt auf dasselbe Array wie `x`. `z[1] = 6` ändert also auch `x[1]`.'
hinweise:
  - '`==` fragt bei Arrays: Zeigen beide Variablen auf dasselbe Array?'
  - 'In der dritten Zeile werden `int`-Werte verglichen, nicht Arrays.'
loesung: |
  **Ansatz:** Bei jedem `==` prüfen, ob Verweise oder einzelne Zahlen verglichen werden.
  ---
  `x == y` vergleicht zwei verschiedene Arrays: `false`. `x == z` vergleicht denselben Verweis: `true`.
  ---
  Die dritte Zeile vergleicht Zahlen elementweise: `true`. Über `z` wird das gemeinsame Array verändert, `x[1]` ist 6.
```

```aufgabe
id: fg-ar-kopie
titel: Ein Array richtig kopieren
niveau: 2
lernziel: 4
kompetenz: anwenden
quelle: Zusatzfrage „Wie gehen Sie vor, wenn Sie ein int-Array kopieren müssen?“, Blatt 4 WS2021 und WS2023
angabe: |
  Fülle die Lücken so, dass `kopiere` ein **neues** Array mit demselben Inhalt liefert.
teile:
  - typ: lueckentext
    code: |
      public class Kopieren {
          public static int[] kopiere(int[] original) {
              int[] kopie = new int[___];
              for (int i = 0; i < ___; i++) {
                  kopie[i] = ___;
              }
              return kopie;
          }

          public static void main(String[] args) {
              int[] a = {3, 1, 4};
              int[] b = kopiere(a);
              b[0] = 9;
              System.out.println(a[0] + " " + b[0]);
          }
      }
    luecken: [["original.length"], ["original.length", "kopie.length"], ["original[i]"]]
    fehler:
      - wert: ["original.length", "original.length", "original"]
        meldung: 'Rechts muss **ein** Element stehen, `original[i]`. Ein ganzes Array passt nicht in den Platz `kopie[i]`.'
      - wert: ["original.length", "original.length - 1", "original[i]"]
        meldung: Mit `i < original.length - 1` fehlt das letzte Element. Die Bedingung `i < length` erreicht schon den letzten Index `length - 1`.
hinweise:
  - Das neue Array braucht dieselbe Länge wie das Original.
  - In der Schleife wird jedes Element einzeln übertragen, Platz für Platz.
loesung: |
  **Ansatz:** Neues Array gleicher Länge anlegen, dann jedes Element einzeln kopieren.
  ---
  `new int[original.length]`, Schleifenbedingung `i < original.length`, Rumpf `kopie[i] = original[i];`.
  ---
  Kontrolle: `main` gibt `3 9` aus. Die Änderung an `b` lässt `a` unberührt, es gibt also wirklich zwei Arrays.
```

```aufgabe
id: fg-ar-kapazitaet
titel: Mehrdimensionale Arrays und Zeilenlängen
niveau: 2
lernziel: 4
kompetenz: rechnen
quelle: Zusatzfragen zu mehrdimensionalen Arrays, Blatt 4 und 6 WS2017 (Variation)
angabe: |
  **a)** Wie viele `int`-Werte speichert `new int[3][4][2]`?

  **b)** Nach diesen Zeilen: Welchen Wert hat `m[0].length + m[1].length + m[2].length`?

  ```java
  int[][] m = new int[3][];
  m[0] = new int[5];
  m[1] = new int[2];
  m[2] = new int[4];
  m[1] = new int[6];
  ```
teile:
  - typ: zahl
    label: a)
    loesung: "3 * 4 * 2"
    fehler:
      - wert: "9"
        meldung: Die Größen werden nicht addiert. Es gibt 3 Blöcke, jeder mit 4 Zeilen, jede Zeile mit 2 Werten.
      - wert: "12"
        meldung: Die dritte Dimension mit 2 Werten gehört auch dazu.
  - typ: zahl
    label: b)
    loesung: "5 + 6 + 4"
    fehler:
      - wert: "11"
        meldung: '`m[1] = new int[6];` ersetzt die alte Zeile der Länge 2 durch eine neue der Länge 6.'
      - wert: "9"
        meldung: Zähle die Längen der drei Zeilen, nicht die Zahl der Zeilen plus die Länge einer Zeile.
hinweise:
  - Bei a) multiplizierst du die Größen aller Dimensionen.
  - Bei b) zählt für jede Zeile das Array, auf das sie **zuletzt** zeigt.
loesung: |
  **Ansatz:** a) Kapazität ist das Produkt der Dimensionen. b) Jede Zeile ist ein eigenes Array, das man ersetzen kann.
  ---
  a) $3 \cdot 4 \cdot 2 = 24$ Werte.
  ---
  b) `m[1]` zeigt zuletzt auf ein Array der Länge 6. Summe $5 + 6 + 4 = 15$. Das beantwortet auch die Zusatzfrage „Wie ändert man die Länge einer Zeile?“: Man weist der Zeile ein neues Array zu.
```

```aufgabe
id: fg-ar-code-verlaengern
titel: Ein Array verlängern oder kürzen
niveau: 3
lernziel: 4
kompetenz: anwenden
quelle: Zusatzfrage „Wie kann die Länge eines Arrays verändert werden?“, Blatt 4 WS2023 (als Programmieraufgabe)
angabe: |
  Schreibe `int[] neueLaenge(int[] a, int laenge)`. Die Methode liefert ein **neues** Array der Länge `laenge`. Es
  enthält vorne die Werte von `a`, so viele hineinpassen. Übrige Plätze sind 0. Das Array `a` bleibt unverändert.
  Kopierhilfen wie `clone` oder `System.arraycopy` sind nicht erlaubt. Vorbedingung: `a != null` und `laenge >= 0`.

  Beispiele: `neueLaenge({1, 2, 3}, 5)` liefert `{1, 2, 3, 0, 0}`, `neueLaenge({4, 5, 6}, 2)` liefert `{4, 5}`.
teile:
  - typ: code
    vorlage: |
      public class Laenge {
          public static int[] neueLaenge(int[] a, int laenge) {
              return a; // TODO
          }
      }
    musterloesung: |
      public class Laenge {
          public static int[] neueLaenge(int[] a, int laenge) {
              int[] neu = new int[laenge];
              for (int i = 0; i < laenge && i < a.length; i++) {
                  neu[i] = a[i];
              }
              return neu;
          }
      }
    tests:
      - { aufruf: "neueLaenge(new int[]{1, 2, 3}, 5)", erwartet: "new int[]{1, 2, 3, 0, 0}" }
      - { aufruf: "neueLaenge(new int[]{4, 5, 6}, 2)", erwartet: "new int[]{4, 5}", beschreibung: "kürzen" }
      - { aufruf: "neueLaenge(new int[]{}, 3)", erwartet: "new int[]{0, 0, 0}", beschreibung: "leeres Array verlängern" }
      - { vorher: "int[] x = {7, 8};", aufruf: "neueLaenge(x, 1)", ergebnis: "x", erwartet: "new int[]{7, 8}", beschreibung: "das Original bleibt unverändert" }
      - { aufruf: "neueLaenge(new int[]{9}, 0)", erwartet: "new int[]{}", versteckt: true }
    regeln: { keineArrayKopie: true }
    fehler:
      - { wert: 2, meldung: "Beim Kürzen ist das neue Array kürzer als `a`. Die Schleife darf nur bis zur kleineren der beiden Längen laufen." }
      - { wert: 3, meldung: "Beim Verlängern gibt es in `a` weniger Werte als Plätze. Lies nicht über `a.length` hinaus." }
      - { wert: keineArrayKopie, meldung: "Kopierhilfen sind wie im Test verboten. Kopiere mit einer Schleife, Element für Element." }
hinweise:
  - Lege zuerst `new int[laenge]` an. Die freien Plätze sind dann schon 0.
  - Die Schleife muss enden, sobald eines der beiden Arrays zu Ende ist. Verknüpfe zwei Bedingungen mit `&&`.
loesung: |
  **Ansatz:** Die Länge eines Arrays lässt sich nicht ändern. Darum ein neues Array anlegen und so viele Werte kopieren, wie in beide passen.
  ---
  ```java
  int[] neu = new int[laenge];
  for (int i = 0; i < laenge && i < a.length; i++) {
      neu[i] = a[i];
  }
  return neu;
  ```
  ---
  Kontrolle: Beim Kürzen stoppt `i < laenge`, beim Verlängern stoppt `i < a.length`. Die restlichen Plätze behalten den Standardwert 0. `a` wird nur gelesen, nie verändert.
```

```aufgabe
id: fg-ar-text-gleich
titel: Arrays mit == vergleichen
niveau: 3
lernziel: 4
kompetenz: begruenden
quelle: Zusatzfrage 4, Aufgabe 1, Blatt 4 WS2023
angabe: |
  Beantworte die Zusatzfrage „Taugt `==`, um zwei Arrays zu vergleichen? Was genau wird dabei verglichen?“ so, wie du
  es im Gespräch tun würdest. Nenne auch, wie man den Inhalt vergleicht.
  Vergleiche danach mit der Musterantwort.
teile:
  - typ: text
    muster: |
      Meistens nicht. Eine Array-Variable enthält nur einen Verweis auf das Array. `==` vergleicht diese Verweise. Das
      Ergebnis ist also nur dann `true`, wenn beide Variablen auf dasselbe Array zeigen, zum Beispiel nach `b = a`.
      Zwei verschiedene Arrays mit gleichem Inhalt, etwa zweimal `{1, 2, 3}`, ergeben `false`.
      Sinnvoll ist `==` nur, wenn man genau das wissen will: ob zwei Namen dasselbe Array meinen.
      Den Inhalt vergleiche ich so: Zuerst prüfe ich, ob die Längen gleich sind. Dann gehe ich mit einer Schleife alle
      Indizes durch. Beim ersten Unterschied liefere ich `false`, nach der Schleife `true`.
hinweise:
  - Was steckt in einer Array-Variable, die Werte oder ein Verweis?
  - Für den Inhaltsvergleich brauchst du die Länge und eine Schleife mit frühem `return false`.
loesung: |
  **Ansatz:** Den Begriff Verweis nennen und daraus die Bedeutung von `==` ableiten.
  ---
  `==` ist genau dann `true`, wenn beide Variablen auf dasselbe Array zeigen. Gleicher Inhalt genügt nicht.
  ---
  Inhaltsvergleich: Längen prüfen, dann Element für Element mit frühem `return false`. Prüfe, ob deine Antwort ein Beispiel mit zwei gleichen, aber getrennten Arrays enthält.
```

## Variationsaufträge: Ändere deinen Code

```aufgabe
id: fg-va-check-trenner
titel: Trennzeichen zwischen Zahlen
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [4.4 Trennzeichen und das Zaunpfahlproblem](/lernen/ep1/schleifen/trennzeichen-und-das-zaunpfahlproblem))
teile:
  - typ: ausgabe
    code: |
      for (int i = 1; i <= 4; i++) {
          System.out.print(i);
          if (i < 4) {
              System.out.print(",");
          }
      }
      System.out.println();
    loesung: |
      1,2,3,4
    fehler:
      - wert: "1,2,3,4,"
        meldung: 'Das Komma kommt nur, wenn `i < 4` gilt. Nach der 4 ist das falsch, also endet die Ausgabe ohne Komma.'
hinweise:
  - Nach welcher Zahl ist die Bedingung `i < 4` zum ersten Mal falsch?
loesung: |
  Nach 1, 2 und 3 folgt ein Komma, weil `i < 4` gilt.
  ---
  Nach der 4 ist `i < 4` falsch. Ausgabe `1,2,3,4` ohne Komma am Ende.
```

Ein **Variationsauftrag** ist eine kleine Änderung an deiner Lösung, die du im Gespräch live machst. Die Tutorin will
sehen, dass du deinen Code so gut kennst, dass du ihn gezielt umbauen kannst.

Wichtig: Diese ganze Lektion beruht auf einer **Annahme**. Ob es im Wintersemester 2026 solche Aufträge gibt, ist nicht
veröffentlicht, und auch die VoWi-Erfahrungsberichte erwähnen sie nicht. Belegt ist nur, dass das Gespräch prüft, ob du
deine Abgabe verstehst. Ein kleiner Umbau ist ein naheliegender Weg, genau das zu zeigen. Das Training lohnt sich
außerdem für den Test, denn dort musst du ähnliche Änderungen ohne Hilfe schreiben. Plane für so einen Umbau nur wenige
Minuten ein.

Typische Aufträge sind:

- **Reihenfolge umdrehen:** „Gib die Zahlen jetzt absteigend aus“.
- **Grenzen ändern:** „Jetzt soll die obere Grenze dazugehören“.
- **Feste Zahl zum Parameter machen:** „Statt 5 soll die Grenze übergeben werden“.
- **Ausgabe zur Rückgabe machen:** „Gib das Ergebnis jetzt als String zurück, statt es auszugeben“.
- **Schleife zu Rekursion:** „Schreib das jetzt ohne Schleife“.
- **Trennzeichen ändern:** „Jetzt durch Kommas getrennt, aber ohne Komma am Ende“.
- **Bedingung erweitern:** „Zähle jetzt auch die Großbuchstaben mit“.

### Ein Vorgehen in vier Schritten

1. **Auftrag wiederholen.** Sag in eigenen Worten, was sich ändern soll, und nenne die neue Sollausgabe für ein kleines
   Beispiel. So klärst du Missverständnisse, bevor du tippst.
2. **Betroffene Stellen finden.** Bei Schleifen sind es fast immer Startwert, Bedingung und Schritt. Bei Ausgabe gegen
   Rückgabe sind es Rückgabetyp, Ausgabezeilen und `return`.
3. **Ändern.** Nur die gefundenen Stellen, nichts anderes.
4. **Mit einem Grenzfall testen.** Das ist ein Eingabewert am Rand, zum Beispiel die Intervallgrenze selbst, ein leerer
   String oder die Zahl 0.

:::beispiel[„Gib die Zahlen jetzt absteigend aus“]
**Ausgangslösung:** Gib jede 6. Zahl im Intervall [6, 48[ aus, also von 6 (eingeschlossen) bis 48 (ausgeschlossen).

```java
for (int i = 6; i < 48; i += 6) {
    System.out.print(i + " ");
}
```

Ausgabe: `6 12 18 24 30 36 42`.

1. **Auftrag wiederholen:** „Dieselben Zahlen, aber von groß nach klein. Erwartet ist `42 36 30 24 18 12 6`.“
2. **Stellen finden:** Startwert, Bedingung und Schritt der Schleife.
3. **Ändern:**
   - Der **Startwert** wird die größte Zahl, die ausgegeben wird. Das ist 42, nicht 48, denn 48 gehört nicht zum
     Intervall.
   - Die **Bedingung** prüft jetzt die untere Grenze: `i >= 6`.
   - Der **Schritt** zählt herunter: `i -= 6`.

```java
for (int i = 42; i >= 6; i -= 6) {
    System.out.print(i + " ");
}
```

4. **Grenzfall testen:** Die erste Zahl ist 42, die letzte ist 6. Nach der 6 wird `i` zu 0, und `0 >= 6` ist falsch. Die
   Schleife endet richtig.
:::

:::achtung[Nur den Startwert umgedreht]
**Falscher Umbau:** „Absteigend heißt, ich fange am Ende des Intervalls an.“

```java
for (int i = 48; i >= 6; i -= 6) {
    System.out.print(i + " ");
}
```

Ausgabe `48 42 36 30 24 18 12 6`. Die 48 ist zu viel, denn das Intervall [6, 48[ schließt 48 aus. Wer aufsteigend
`i < 48` geschrieben hat, muss beim Umdrehen die **erste Zahl, die wirklich dazugehört,** als Startwert nehmen.

**Richtig:** Startwert 42. Allgemein ist das bei einer Schrittweite `k` die größte Zahl der Folge, die die Bedingung der
aufsteigenden Fassung noch erfüllt. Prüfe beim Umdrehen immer beide Enden der Ausgabe.
:::

```aufgabe
id: fg-va-absteigend
titel: Eine Schleife umdrehen
niveau: 1
lernziel: 5
kompetenz: anwenden
quelle: Blatt 1 A1 b, WS2023 (Variationsauftrag „absteigend“, eigene Zahlen)
angabe: |
  Die Schleife gibt `5 10 15 20 25 30 35 40` aus:

  ```java
  for (int i = 5; i <= 40; i += 5) {
      System.out.print(i + " ");
  }
  ```

  Fülle die Lücken so, dass dieselben Zahlen absteigend erscheinen: `40 35 30 25 20 15 10 5`.
teile:
  - typ: lueckentext
    code: |
      for (int i = ___; ___; ___) {
          System.out.print(i + " ");
      }
    luecken: [["40"], ["i >= 5", "5 <= i", "i > 0", "i >= 1"], ["i -= 5", "i = i - 5"]]
    fehler:
      - wert: ["40", "i <= 5", "i -= 5"]
        meldung: Die Bedingung sagt, **solange** die Schleife läuft. Am Anfang ist `i` gleich 40, und `40 <= 5` ist falsch. Die Schleife liefe gar nicht.
      - wert: ["45", "i >= 5", "i -= 5"]
        meldung: Die größte Zahl der Ausgabe ist 40. Mit 45 käme eine Zahl dazu, die vorher nicht dabei war.
hinweise:
  - Der Startwert ist die größte Zahl der Ausgabe. Die Bedingung prüft jetzt die untere Grenze.
loesung: |
  Startwert 40, Bedingung `i >= 5`, Schritt `i -= 5`.
  ---
  Grenzfall: Nach der 5 wird `i` zu 0, und `0 >= 5` ist falsch. Die 5 ist die letzte Zahl, wie verlangt.
```

```aufgabe
id: fg-va-grenzen
titel: Intervallgrenzen getauscht
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Ursprünglich gab der Code alle Vielfachen von 10 im Intervall [10, 50[ aus. Der Variationsauftrag lautete: „Jetzt das
  Intervall ]10, 50], also ohne 10 und mit 50.“ Was gibt die geänderte Fassung aus?
teile:
  - typ: ausgabe
    code: |
      for (int i = 11; i <= 50; i++) {
          if (i % 10 == 0) {
              System.out.print(i + " ");
          }
      }
      System.out.println();
    trim: true
    loesung: |
      20 30 40 50 
    fehler:
      - wert: "10 20 30 40 50"
        meldung: Die Schleife beginnt bei 11. Die 10 wird gar nicht mehr geprüft.
      - wert: "20 30 40"
        meldung: 'Die Bedingung lautet jetzt `i <= 50`. Damit gehört 50 dazu.'
hinweise:
  - Prüfe, mit welchem Wert die Schleife beginnt und ob die 50 die Bedingung noch erfüllt.
loesung: |
  `i` läuft von 11 bis 50. Durch 10 teilbar sind darin 20, 30, 40 und 50.
  ---
  Ausgabe `20 30 40 50`. Die 10 fehlt jetzt, die 50 ist neu dazugekommen, genau wie verlangt.
```

```aufgabe
id: fg-va-zeilen-aendern
titel: Welche Zeilen ändern sich?
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Die Methode summiert alle Vielfachen von 3, die kleiner als `grenze` sind. Der Variationsauftrag lautet: „Zähle jetzt
  die Vielfachen von 7 bis **einschließlich** `grenze`, statt sie zu summieren.“ Welche Zeilen **musst** du ändern, damit
  das Verhalten stimmt?
teile:
  - typ: zeilen
    label: Welche Zeilen müssen sich ändern?
    code: |
      public static int summeVielfache(int grenze) {
          int summe = 0;
          for (int i = 1; i < grenze; i++) {
              if (i % 3 == 0) {
                  summe += i;
              }
          }
          return summe;
      }
    loesung: [3, 4, 5]
    fehler:
      - wert: [4, 5]
        meldung: '„Bis einschließlich `grenze`“ verlangt `i <= grenze`. Mit `i < grenze` fehlt die Grenze selbst, falls sie ein Vielfaches von 7 ist.'
      - wert: [2, 3, 4, 5, 8]
        meldung: Umbenennen von `summe` in `anzahl` wäre guter Stil, ist für das richtige Verhalten aber nicht nötig. Gefragt war, was sich ändern **muss**.
      - wert: [3, 4]
        meldung: Gezählt wird statt summiert. Aus `summe += i` muss `summe++` werden.
hinweise:
  - Der Auftrag enthält drei Änderungen. Ordne jede einer Zeile zu.
  - '„Einschließlich“ betrifft die Bedingung, „von 7“ den Test mit `%`, „zählen“ die Anweisung im `if`.'
loesung: |
  **Ansatz:** Den Auftrag in drei Teile zerlegen und jedem Teil die Zeile zuordnen, die ihn umsetzt.
  ---
  Zeile 3: `i <= grenze` wegen „einschließlich“. Zeile 4: `i % 7 == 0` wegen „Vielfache von 7“. Zeile 5: `summe++` wegen „zählen“.
  ---
  Die anderen Zeilen bleiben gleich. Ein besserer Name wie `anzahl` und ein neuer Methodenname sind sinnvoll, aber keine Pflicht. Test mit `grenze = 14`: Ergebnis 2 (7 und 14).
```

### Aus einer Ausgabe eine Rückgabe machen

Ein häufiger Auftrag stellt um von „Gib das Ergebnis aus“ auf „Gib das Ergebnis zurück“. Dahinter steckt der Unterschied
aus [6.3 Rückgabewerte und return](/lernen/ep1/methoden/rueckgabewerte-und-return): Eine Ausgabe landet nur auf der
Konsole, ein Rückgabewert kann weiterverwendet werden.

:::beispiel[„Gib das Ergebnis als String zurück, statt es auszugeben“]
**Ausgangslösung:**

```java
public static void druckeGerade(int von, int bis) {
    for (int i = von; i <= bis; i++) {
        if (i % 2 == 0) {
            System.out.print(i + " ");
        }
    }
}
```

**Stellen finden:** Der Rückgabetyp `void`, die Ausgabezeile und ein fehlendes `return`.

**Ändern:**

```java
public static String geradeAlsText(int von, int bis) {
    String ergebnis = "";
    for (int i = von; i <= bis; i++) {
        if (i % 2 == 0) {
            ergebnis = ergebnis + i + " ";
        }
    }
    return ergebnis;
}
```

- Aus `void` wird `String`, weil die Methode jetzt einen Text liefert.
- `String ergebnis = "";` ist eine **Sammelvariable**. Sie beginnt leer und wächst in der Schleife.
- Statt `System.out.print` hängt die Schleife an `ergebnis` an.
- `return ergebnis;` steht **nach** der Schleife, wenn alles gesammelt ist.
- Der Aufrufer gibt jetzt selbst aus: `System.out.println(geradeAlsText(3, 9));` zeigt `4 6 8 `.

**Grenzfall:** Bei `geradeAlsText(5, 5)` gibt es keine gerade Zahl. Die Methode liefert den leeren String `""`.
:::

:::achtung[Das return in der Schleife]
**Falscher Umbau:**

```java
for (int i = von; i <= bis; i++) {
    if (i % 2 == 0) {
        return ergebnis + i + " ";
    }
}
return ergebnis;
```

Bei `von = 3` und `bis = 9` liefert das nur `"4 "`. Ein `return` beendet die **ganze Methode** sofort, beim ersten Treffer.
Die Zahlen 6 und 8 werden nie erreicht.

**Richtig:** In der Schleife nur sammeln, also `ergebnis = ergebnis + i + " ";`. Das einzige `return` steht nach der
Schleife. Merke: Wer eine Ausgabe in eine Rückgabe umbaut, ersetzt `print` durch **Anhängen**, nicht durch `return`.
:::

```aufgabe
id: fg-va-gefuehrt-gross
titel: Auch Großbuchstaben zählen
niveau: 2
lernziel: 5
kompetenz: anwenden
quelle: Blatt 1 A1 e, WS2023 (Variationsauftrag „auch Großbuchstaben“)
angabe: |
  Deine Methode zählt den Buchstaben `'r'` in einem Text:

  ```java
  public static int zaehleR(String text) {
      int anzahl = 0;
      for (int i = 0; i < text.length(); i++) {
          if (text.charAt(i) == 'r') {
              anzahl++;
          }
      }
      return anzahl;
  }
  ```

  Auftrag: „Zähle jetzt auch `'R'` mit.“ Welche neue Bedingung im `if` setzt das richtig um? Löse zuerst geführt.
teile:
  - typ: auswahl
    optionen:
      - "`text.charAt(i) == 'r' || text.charAt(i) == 'R'`"
      - "`text.charAt(i) == 'r' && text.charAt(i) == 'R'`"
      - "`text.charAt(i) == 'r' || 'R'`"
      - "`text.charAt(i) == \"rR\"`"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Ein Zeichen kann nicht gleichzeitig `'r'` und `'R'` sein. Mit `&&` ist die Bedingung nie wahr, das Ergebnis wäre immer 0.
      - wert: 2
        meldung: Jeder Vergleich braucht zwei Seiten. `|| 'R'` allein ist kein Wahrheitswert, der Compiler lehnt das ab.
      - wert: 3
        meldung: '`"rR"` ist ein String, `charAt` liefert ein `char`. Die beiden lassen sich nicht mit `==` vergleichen.'
gefuehrt:
  - text: "**Schritt 1, Auftrag wiederholen:** Was soll `zaehleR(\"Rarer\")` nach der Änderung liefern?"
    teil: { typ: zahl, loesung: "3" }
    erklaerung: '`R`, `r` und noch ein `r`: drei Treffer. Vorher waren es zwei.'
  - text: "**Schritt 2, Stelle finden:** Welche Zeile ändert sich?"
    teil:
      typ: auswahl
      optionen: ["die Bedingung im `if`", "der Schleifenkopf", "das `return`"]
      richtig: [0]
    erklaerung: Nur die Frage „Ist das ein Treffer?“ ändert sich. Schleife und Rückgabe bleiben.
  - text: "**Schritt 3, ändern:** Welche Verknüpfung passt zu „das eine **oder** das andere Zeichen“?"
    teil:
      typ: auswahl
      optionen: ["`||`", "`&&`"]
      richtig: [0]
    erklaerung: '`||` ist das logische ODER. Es reicht, wenn einer der beiden Vergleiche wahr ist.'
hinweise:
  - Ein Zeichen ist ein Treffer, wenn es `'r'` **oder** `'R'` ist.
  - Jeder der beiden Vergleiche muss vollständig dastehen, mit `text.charAt(i) ==` auf der linken Seite.
loesung: |
  **Ansatz:** Nur die Trefferbedingung ändert sich. Zwei vollständige Vergleiche werden mit ODER verknüpft.
  ---
  Neue Bedingung: `text.charAt(i) == 'r' || text.charAt(i) == 'R'`.
  ---
  Test mit `"Rarer"`: Treffer bei Index 0, 2 und 4, Ergebnis 3. Grenzfall leerer String: Die Schleife läuft nicht, Ergebnis 0.
```

```aufgabe
id: fg-va-code-abwaerts
titel: Vielfache absteigend mit Kommas
niveau: 2
lernziel: 5
kompetenz: anwenden
quelle: Blatt 1 A1, WS2023 (Variationsaufträge „Parameter“, „absteigend“, „Trennzeichen“ kombiniert)
angabe: |
  Schreibe `druckeAbwaerts(int k, int von, int bis)`. Die Methode gibt alle Vielfachen von `k` im Intervall
  [von, bis] **absteigend** aus. Zwischen zwei Zahlen steht `", "`, am Ende nicht. Danach folgt ein Zeilenumbruch.
  Gibt es keine Vielfachen, erscheint nur der Zeilenumbruch. Vorbedingung: `k > 0` und `0 <= von <= bis`.

  Beispiel: `druckeAbwaerts(4, 3, 21)` gibt `20, 16, 12, 8, 4` aus.
teile:
  - typ: code
    vorlage: |
      public class Abwaerts {
          public static void druckeAbwaerts(int k, int von, int bis) {
              // TODO
          }

          public static void main(String[] args) {
              druckeAbwaerts(4, 3, 21);
          }
      }
    musterloesung: |
      public class Abwaerts {
          public static void druckeAbwaerts(int k, int von, int bis) {
              boolean erste = true;
              for (int i = bis; i >= von; i--) {
                  if (i % k == 0) {
                      if (!erste) {
                          System.out.print(", ");
                      }
                      System.out.print(i);
                      erste = false;
                  }
              }
              System.out.println();
          }

          public static void main(String[] args) {
              druckeAbwaerts(4, 3, 21);
          }
      }
    tests:
      - { aufruf: "druckeAbwaerts(4, 3, 21)", stdout: "20, 16, 12, 8, 4\n" }
      - { aufruf: "druckeAbwaerts(5, 10, 30)", stdout: "30, 25, 20, 15, 10\n", beschreibung: "beide Grenzen sind Vielfache" }
      - { aufruf: "druckeAbwaerts(7, 1, 6)", stdout: "\n", beschreibung: "kein Vielfaches im Intervall" }
      - { aufruf: "druckeAbwaerts(3, 9, 9)", stdout: "9\n", versteckt: true }
      - { aufruf: "druckeAbwaerts(5, 0, 5)", stdout: "5, 0\n", versteckt: true }
    fehler:
      - { wert: 1, meldung: "Steht am Ende ein Komma zu viel, oder fehlt es zwischen zwei Zahlen? Gib das Trennzeichen vor jeder Zahl aus, außer vor der ersten ausgegebenen." }
      - { wert: 2, meldung: "Das Intervall ist geschlossen. Gehören 30 und 10 bei dir dazu? Prüfe `>=` und den Startwert." }
      - { wert: 3, meldung: "Wenn es kein Vielfaches gibt, darf nur der Zeilenumbruch erscheinen, kein Komma." }
hinweise:
  - Lass eine Schleife von `bis` abwärts bis `von` laufen und prüfe jede Zahl mit `% k`.
  - Merke dir mit einer `boolean`-Variable, ob schon eine Zahl ausgegeben wurde. Nur dann kommt vorher `", "`.
loesung: |
  **Ansatz:** Absteigend durchlaufen, Vielfache mit `% k` erkennen und das Trennzeichen nur vor der zweiten und jeder weiteren Zahl ausgeben.
  ---
  ```java
  boolean erste = true;
  for (int i = bis; i >= von; i--) {
      if (i % k == 0) {
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
  Die Variable `erste` ist nötig, weil man vorher nicht weiß, welche Zahl als erste ausgegeben wird. Grenzfall ohne Vielfache: `erste` bleibt `true`, es erscheint nur der Zeilenumbruch.
```

```aufgabe
id: fg-va-code-rueckgabe
titel: Ohne Vokale, jetzt als Rückgabe
niveau: 2
lernziel: 5
kompetenz: anwenden
quelle: removeNumbersInString, Blatt 2 WS2023 (Variation „Rückgabe statt Ausgabe“, andere Zeichen)
angabe: |
  Eine Lösung gibt einen Text ohne Vokale aus:

  ```java
  public static void druckeOhneVokale(String text) {
      for (int i = 0; i < text.length(); i++) {
          char c = text.charAt(i);
          if ("aeiouAEIOU".indexOf(c) < 0) {
              System.out.print(c);
          }
      }
  }
  ```

  Auftrag: Schreibe `String ohneVokale(String text)`, die den Text ohne die Vokale a, e, i, o, u (klein und groß)
  **zurückgibt** und nichts ausgibt. Vorbedingung: `text != null`.
teile:
  - typ: code
    vorlage: |
      public class Vokale {
          public static String ohneVokale(String text) {
              return text; // TODO
          }
      }
    musterloesung: |
      public class Vokale {
          public static String ohneVokale(String text) {
              String ergebnis = "";
              for (int i = 0; i < text.length(); i++) {
                  char c = text.charAt(i);
                  if ("aeiouAEIOU".indexOf(c) < 0) {
                      ergebnis = ergebnis + c;
                  }
              }
              return ergebnis;
          }
      }
    tests:
      - { aufruf: "ohneVokale(\"Feedback\")", erwartet: "\"Fdbck\"" }
      - { aufruf: "ohneVokale(\"AEIOU xyz\")", erwartet: "\" xyz\"", beschreibung: "Großbuchstaben und Leerzeichen" }
      - { aufruf: "ohneVokale(\"\")", erwartet: "\"\"", beschreibung: "leerer String" }
      - { aufruf: "ohneVokale(\"Programmieren\")", erwartet: "\"Prgrmmrn\"", versteckt: true }
    regeln: { erlaubteApi: ["String.charAt", "String.length", "String.indexOf"] }
    fehler:
      - { wert: 1, meldung: "Liefert deine Methode nur den ersten Buchstaben? Ein `return` in der Schleife beendet die Methode beim ersten Treffer. Sammle in einer Variable und gib sie nach der Schleife zurück." }
      - { wert: 2, meldung: "Auch große Vokale fallen weg. Leerzeichen und andere Zeichen bleiben stehen." }
hinweise:
  - Lege eine Sammelvariable `String ergebnis = "";` an und hänge jedes behaltene Zeichen an.
  - Das einzige `return` steht nach der Schleife. Die Bedingung aus der Ausgangslösung kannst du übernehmen.
loesung: |
  **Ansatz:** `void` wird `String`, `print` wird Anhängen an eine Sammelvariable, `return` steht am Ende.
  ---
  ```java
  String ergebnis = "";
  for (int i = 0; i < text.length(); i++) {
      char c = text.charAt(i);
      if ("aeiouAEIOU".indexOf(c) < 0) {
          ergebnis = ergebnis + c;
      }
  }
  return ergebnis;
  ```
  ---
  `indexOf(c)` liefert -1, wenn `c` kein Vokal ist. Grenzfall leerer String: Die Schleife läuft nicht, die Methode liefert `""`.
```

### Aus einer Schleife eine Rekursion machen

Der schwerste übliche Auftrag lautet „Jetzt ohne Schleife“. Die Übersetzung folgt einem festen Muster. Die
Schleifenbedingung wird zum **Basisfall**, nur umgekehrt: Wo die Schleife endet, endet die Rekursion. Der Rumpf
behandelt **ein** Element. Der Schritt wird zum **Fortschritt** im Selbstaufruf. Bei Strings ist das oft `substring(1)`,
bei Zahlen `n / 10` oder `n - 1`.

```aufgabe
id: fg-va-code-rekursiv
titel: Zeichen zählen, jetzt ohne Schleife
niveau: 3
lernziel: 5
kompetenz: anwenden
quelle: Variationsauftrag „jetzt ohne Schleife“ nach den Rekursionsregeln von Blatt 3 WS2023
angabe: |
  Eine Lösung zählt mit einer Schleife, wie oft das Zeichen `c` im String `s` vorkommt. Auftrag: „Schreib das jetzt
  rekursiv.“ Schreibe `int zaehle(String s, char c)` ohne Schleifen und ohne Hilfsmethoden. Erlaubt sind `length`,
  `charAt` und `substring`. Vorbedingung: `s != null`.

  Beispiel: `zaehle("Banane", 'a')` liefert 2.
teile:
  - typ: code
    vorlage: |
      public class Zaehlen {
          public static int zaehle(String s, char c) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Zaehlen {
          public static int zaehle(String s, char c) {
              if (s.length() == 0) {
                  return 0;
              }
              int rest = zaehle(s.substring(1), c);
              if (s.charAt(0) == c) {
                  return rest + 1;
              }
              return rest;
          }
      }
    tests:
      - { aufruf: "zaehle(\"Banane\", 'a')", erwartet: "2" }
      - { aufruf: "zaehle(\"\", 'x')", erwartet: "0", beschreibung: "leerer String" }
      - { aufruf: "zaehle(\"aaa\", 'a')", erwartet: "3", beschreibung: "jedes Zeichen ein Treffer" }
      - { aufruf: "zaehle(\"Kayak\", 'K')", erwartet: "1", versteckt: true }
    regeln: { keineSchleifen: true, rekursiv: [zaehle], keineHilfsmethoden: true, erlaubteApi: ["String.charAt", "String.length", "String.substring"] }
    fehler:
      - { wert: 2, meldung: "Der leere String ist der Basisfall. Prüfe ihn, bevor du `charAt(0)` aufrufst, sonst gibt es eine Exception." }
      - { wert: 3, meldung: "Zählt deine Methode alle Treffer? Nach einem Treffer muss die Rekursion trotzdem weiterlaufen und den Rest durchsuchen." }
      - { wert: keineSchleifen, meldung: "Der Auftrag lautet „ohne Schleife“. Ersetze die Schleife durch einen Selbstaufruf mit `s.substring(1)`." }
hinweise:
  - Die Schleife endete am Ende des Strings. Also ist der leere String der Basisfall.
  - Prüfe das erste Zeichen und ruf dich für den Rest `s.substring(1)` auf. Zähle 1 dazu, wenn das erste Zeichen passt.
loesung: |
  **Ansatz:** Schleifenende wird Basisfall, Schleifenrumpf behandelt das erste Zeichen, der Schritt wird `substring(1)`.
  ---
  ```java
  if (s.length() == 0) {
      return 0;
  }
  int rest = zaehle(s.substring(1), c);
  if (s.charAt(0) == c) {
      return rest + 1;
  }
  return rest;
  ```
  ---
  Kontrolle mit `"aaa"`: Rückweg 0, 1, 2, 3. Fundiertheit: leerer String. Fortschritt: jeder Aufruf hat ein Zeichen weniger.
```

```aufgabe
id: fg-va-text-plan
titel: Einen Variationsauftrag laut planen
niveau: 3
lernziel: 5
kompetenz: begruenden
angabe: |
  Deine Lösung gibt die Zeichen eines Strings rückwärts aus, jedes in einer eigenen Zeile:

  ```java
  for (int i = text.length() - 1; i >= 0; i--) {
      System.out.println(text.charAt(i));
  }
  ```

  Die Tutorin sagt: „Gib die Zeichen jetzt rückwärts in **einer** Zeile aus, getrennt durch Bindestriche, ohne
  Bindestrich am Ende.“ Beschreibe in den vier Schritten dieser Lektion, wie du vorgehst. Nenne auch die neue Ausgabe
  für `"EP1"` und einen Grenzfall. Vergleiche danach mit der Musterantwort.
teile:
  - typ: text
    muster: |
      1. Auftrag wiederholen: Dieselben Zeichen, rückwärts, in einer Zeile, dazwischen `-`. Für `"EP1"` erwarte ich
         `1-P-E`.
      2. Stellen finden: Die Ausgabezeile im Rumpf. Dazu brauche ich eine Regel für das Trennzeichen und einen
         Zeilenumbruch nach der Schleife.
      3. Ändern: `println` wird `print`. Vor jedem Zeichen außer dem ersten ausgegebenen kommt ein `-`. Das erste
         ausgegebene Zeichen hat den Index `text.length() - 1`, also schreibe ich
         `if (i < text.length() - 1) System.out.print("-");` vor die Ausgabe. Nach der Schleife kommt `System.out.println();`.
      4. Grenzfall: Beim leeren String läuft die Schleife nicht, es erscheint nur der Zeilenumbruch. Bei einem
         einzelnen Zeichen erscheint es ohne Bindestrich.
hinweise:
  - Das Trennzeichen soll **zwischen** den Zeichen stehen. Vor welchem ausgegebenen Zeichen darf es nicht stehen?
  - Rückwärts ist das erste ausgegebene Zeichen das mit dem Index `text.length() - 1`. Als Grenzfälle eignen sich der leere String und ein einzelnes Zeichen.
loesung: |
  **Ansatz:** Die vier Schritte dieser Lektion der Reihe nach durchgehen.
  ---
  Sollausgabe `1-P-E`. Geändert werden die Ausgabezeile und ein Zeilenumbruch nach der Schleife.
  ---
  Bindestrich vor jedem Zeichen außer dem ersten ausgegebenen, also wenn `i < text.length() - 1`. Grenzfälle leerer String und ein Zeichen. Prüfe, ob deine Antwort alle vier Schritte enthält.
```

## Erkläre deinen Code: Zweck, Ablauf und Rückfragen

```aufgabe
id: fg-ek-check-lesen
titel: Was tut dieses Stück Code?
niveau: 1
art: check
angabe: |
  Was gibt der Code aus? (Wiederholung: [9.1 Code lesen: Was tut dieses Programm?](/lernen/ep1/codequalitaet/code-lesen-was-tut-dieses-programm))
teile:
  - typ: ausgabe
    code: |
      String w = "Tutor";
      String r = "";
      for (int i = 0; i < w.length(); i++) {
          r = w.charAt(i) + r;
      }
      System.out.println(r);
    loesung: |
      rotuT
    fehler:
      - wert: "Tutor"
        meldung: 'Jedes Zeichen wird **vorne** an `r` gehängt: `w.charAt(i) + r`, nicht `r + w.charAt(i)`. Dadurch dreht sich die Reihenfolge um.'
hinweise:
  - Schreib nach jedem Durchlauf den Wert von `r` auf.
loesung: |
  Nach den Durchläufen ist `r` der Reihe nach `T`, `uT`, `tuT`, `otuT`, `rotuT`.
  ---
  Weil jedes neue Zeichen vorne angefügt wird, steht der String am Ende umgedreht da: `rotuT`.
```

Die häufigste Bitte im Gespräch lautet schlicht „Erklär mir deinen Code“. Viele beginnen dann in der ersten Zeile und
lesen vor. Das klingt etwa so: „Hier wird `i` auf 0 gesetzt, dann wird geprüft, ob `i` kleiner als die Länge ist“.
Das zeigt, dass man Java lesen kann. Es zeigt aber nicht, dass man die **Idee** verstanden hat. Besser ist eine Erklärung in Schichten, vom
Großen zum Kleinen.

### Eine Erklärung in fünf Schichten

1. **Zweck:** Was tut die Methode, in einem Satz und ohne Java-Wörter?
2. **Schnittstelle:** Welche Parameter bekommt sie, was liefert sie zurück, welche Vorbedingung gilt?
3. **Ablauf in Blöcken:** Welche Teile hat der Code, und wozu dient jeder Teil? Nicht jede Zeile, sondern jeden
   Abschnitt.
4. **Heikle Stellen:** Grenzen von Schleifen, Sonderfälle, Hilfsvariablen. Hier kommen die Rückfragen.
5. **Beispiel:** Ein kurzer Durchlauf mit konkreten Werten, der zeigt, dass es funktioniert.

:::beispiel[Eine Methode in fünf Schichten erklären]
Die Aufgabe auf Blatt 2 verlangte eine Methode, die prüft, ob ein Zeichen genau einmal in einem Text vorkommt. Unser
Nachbau:

```java
public static boolean genauEinmal(String text, char zeichen) {
    int anzahl = 0;
    for (int i = 0; i < text.length(); i++) {
        if (text.charAt(i) == zeichen) {
            anzahl++;
        }
    }
    return anzahl == 1;
}
```

1. **Zweck:** „Die Methode sagt, ob ein bestimmtes Zeichen in einem Text genau einmal vorkommt.“
2. **Schnittstelle:** „Sie bekommt den Text und das gesuchte Zeichen und liefert `true` oder `false`. Vorbedingung ist,
   dass der Text nicht `null` ist.“
3. **Ablauf:** „Zuerst zähle ich in einer Schleife, wie oft das Zeichen vorkommt. Danach vergleiche ich die Anzahl mit 1.“
4. **Heikle Stelle:** „`return anzahl == 1;` liefert direkt das Ergebnis des Vergleichs. Ein `if` mit `return true` und
   `return false` wäre gleichwertig, nur länger.“
5. **Beispiel:** „Bei `genauEinmal("Kanu", 'n')` ist die Anzahl 1, also `true`. Bei `'a'` ebenfalls. Bei `'x'` ist sie 0,
   also `false`.“

Das dauert etwa eine Minute und beantwortet die meisten Rückfragen im Voraus.
:::

:::achtung[Vorlesen statt erklären]
**Schwache Erklärung des Codes aus dem Beispiel:** „In Zeile 2 wird `anzahl` auf 0 gesetzt. In Zeile 3 beginnt eine
`for`-Schleife mit `i` gleich 0, solange `i` kleiner als `text.length()` ist, und `i` wird um eins erhöht. In Zeile 4
wird geprüft, ob `text.charAt(i)` gleich `zeichen` ist …“

Jeder Satz ist richtig, aber der Zweck fehlt. Die Tutorin weiß danach nicht, ob du die Idee verstehst. Wer eine fremde
Lösung abgibt, kann übrigens genau so vorlesen.

**Besser:** Beginne mit dem Zweck („Ich zähle, wie oft das Zeichen vorkommt, und prüfe, ob es genau einmal ist“) und gehe
dann zu den Blöcken. Einzelne Zeilen erklärst du nur dort, wo etwas Besonderes passiert.
:::

```aufgabe
id: fg-ek-zweck
titel: Den Zweck in einem Satz
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  Welcher Satz beschreibt den **Zweck** dieser Methode am besten?

  ```java
  public static int f(String s) {
      int k = 0;
      for (int i = 0; i < s.length(); i++) {
          if (s.charAt(i) >= '0' && s.charAt(i) <= '9') {
              k++;
          }
      }
      return k;
  }
  ```
teile:
  - typ: auswahl
    optionen:
      - Die Methode zählt, wie viele Ziffern im String vorkommen.
      - Die Methode prüft, ob der String eine Zahl ist.
      - Die Methode gibt alle Ziffern des Strings aus.
      - "Die Methode setzt `k` auf 0 und erhöht `k` in einer Schleife, wenn `s.charAt(i)` zwischen `'0'` und `'9'` liegt."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die Methode liefert eine Anzahl, keinen Wahrheitswert. Für `"a1b2"` liefert sie 2, obwohl das keine Zahl ist.
      - wert: 2
        meldung: Im Code steht keine Ausgabe. Das Ergebnis wird mit `return` zurückgegeben.
      - wert: 3
        meldung: Das stimmt, ist aber Vorlesen. Ein Zweck nennt die Idee in Alltagssprache, ohne Variablennamen.
hinweise:
  - Was wird gezählt, und was liefert die Methode zurück?
loesung: |
  Die Bedingung prüft, ob ein Zeichen zwischen `'0'` und `'9'` liegt, also eine Ziffer ist. `k` zählt diese Treffer.
  ---
  Die Methode liefert `k` zurück. Zweck: Sie zählt die Ziffern im String.
```

```aufgabe
id: fg-ek-trace
titel: Variablen einer Schleife verfolgen
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  Eine typische Rückfrage lautet: „Welche Werte haben deine Variablen nach jedem Durchlauf?“ Fülle die Tabelle aus.

  ```java
  int a = 0;
  int b = 1;
  for (int i = 0; i < 4; i++) {
      int t = a + b;
      a = b;
      b = t;
  }
  ```
teile:
  - typ: trace
    spalten: [a, b]
    zeilen: [vor der Schleife, "nach dem Durchlauf mit i = 0", "nach dem Durchlauf mit i = 1", "nach dem Durchlauf mit i = 2", "nach dem Durchlauf mit i = 3"]
    vorgabe: 1
    loesung: [[0, 1], [1, 1], [1, 2], [2, 3], [3, 5]]
    fehler:
      - wert: [0, 1, 1, 1, 2, 2, 4, 4, 8, 8]
        meldung: Du hast zuerst `b = t` und dann `a = b` gerechnet. Im Code steht `a = b` **vor** `b = t`. `a` bekommt also den alten Wert von `b`.
hinweise:
  - Rechne in jedem Durchlauf zuerst `t = a + b` mit den alten Werten. Dann bekommt `a` den alten Wert von `b`, zuletzt `b` den Wert von `t`.
loesung: |
  Durchlauf `i = 0`: `t = 1`, `a = 1`, `b = 1`. Durchlauf `i = 1`: `t = 2`, `a = 1`, `b = 2`.
  ---
  Durchlauf `i = 2`: `t = 3`, `a = 2`, `b = 3`. Durchlauf `i = 3`: `t = 5`, `a = 3`, `b = 5`. Das sind aufeinanderfolgende Fibonacci-Zahlen.
```

### Typische Rückfragen

Nach der Erklärung kommen Rückfragen. Sie zielen fast immer auf die heiklen Stellen. Die häufigsten Formen sind:

- **„Was passiert, wenn …?“** … der String leer ist, die Zahl 0 ist, das Zeichen am Anfang oder am Ende steht, das Array
  nur ein Element hat.
- **„Warum steht hier `<` und nicht `<=`?“** Das zielt auf die Grenzen einer Schleife.
- **„Wozu brauchst du diese Variable?“** Zum Beispiel eine Hilfsvariable beim Tauschen oder ein Merker wie `boolean erste`.
- **„Was passiert, wenn ich diese Zeile lösche?“** Damit prüft die Tutorin, ob du die Aufgabe jeder Zeile kennst.
- **„Wie oft läuft diese Schleife?“** Bei verschachtelten Schleifen eine beliebte Rechenfrage.

Die beste Strategie ist immer dieselbe: **nicht raten, sondern mit einem kleinen Wert durchspielen**. Sag ruhig laut:
„Das probiere ich kurz mit dem leeren String aus.“ Das ist kein Zeichen von Unsicherheit, sondern genau die Arbeitsweise,
die man sehen will.

:::beispiel[Rückfragen zu einem Palindrom-Test]
Ein **Palindrom** ist ein Wort, das vorwärts und rückwärts gleich gelesen wird, etwa `"otto"` oder `"radar"`.

```java
public static boolean istPalindrom(String s) {
    int links = 0;
    int rechts = s.length() - 1;
    while (links < rechts) {
        if (s.charAt(links) != s.charAt(rechts)) {
            return false;
        }
        links++;
        rechts--;
    }
    return true;
}
```

**Tutorin:** „Warum `links < rechts` und nicht `links <= rechts`?“

**Student:** „Wenn `links` gleich `rechts` ist, stehen beide auf demselben mittleren Zeichen. Das ist mit sich selbst
immer gleich, ein Vergleich bringt nichts. Bei `"radar"` treffen sie sich bei Index 2. `<=` wäre auch richtig, nur
manchmal ein Durchlauf länger.“

**Tutorin:** „Was passiert beim leeren String?“

**Student:** „Dann ist `rechts` gleich -1. Die Bedingung `0 < -1` ist falsch, die Schleife läuft nicht. Die Methode liefert
`true`. Es wird kein `charAt` aufgerufen, also gibt es auch keine Exception.“

Beide Antworten spielen einen konkreten Fall durch, statt zu raten.
:::

:::achtung[Eine Behauptung über einen Sonderfall, ohne nachzuprüfen]
**Rückfrage zum Palindrom-Test:** „Was passiert beim leeren String?“

**Falsche Antwort:** „Da stürzt meine Methode ab, weil `s.length() - 1` gleich -1 ist und `charAt(-1)` nicht geht.“

Die Antwort klingt fachkundig, ist aber falsch. Ob `charAt(-1)` aufgerufen wird, entscheidet die Bedingung der Schleife.
`0 < -1` ist falsch, also wird `charAt` gar nicht erreicht. Die Methode liefert `true`.

**Richtig:** Den Fall Schritt für Schritt durchgehen: Startwerte einsetzen, Bedingung prüfen, erst dann über den Rumpf
reden. Wer so vorgeht, macht solche Fehler nicht.
:::

```aufgabe
id: fg-ek-rueckfragen
titel: Rückfragen zu einer Suche
niveau: 2
lernziel: 6
kompetenz: begruenden
angabe: |
  Die Tutorin stellt Rückfragen zu dieser Methode. Beurteile jede Antwort.

  ```java
  public static int ersteStelle(String s, char c) {
      for (int i = 0; i < s.length(); i++) {
          if (s.charAt(i) == c) {
              return i;
          }
      }
      return -1;
  }
  ```
teile:
  - typ: richtigfalsch
    aussagen:
      - text: "„Beim leeren String liefert die Methode -1.“"
        richtig: true
        erklaerung: Die Schleife läuft nicht, weil `0 < 0` falsch ist. Danach kommt `return -1`.
      - text: "„Kommt `c` zweimal vor, liefert die Methode den Index des zweiten Vorkommens.“"
        richtig: false
        erklaerung: Beim ersten Treffer beendet `return i` die Methode sofort. Das zweite Vorkommen wird nie erreicht.
      - text: "„Ohne die Zeile `return -1;` kompiliert die Methode nicht.“"
        richtig: true
        erklaerung: Der Compiler verlangt, dass jeder Weg durch die Methode mit einem `return` endet. Sonst meldet er `missing return statement`.
      - text: "„Mit `i <= s.length()` liefert die Methode für ein fehlendes Zeichen weiterhin -1.“"
        richtig: false
        erklaerung: Dann ruft die Schleife zuletzt `s.charAt(s.length())` auf. Diesen Index gibt es nicht, Java wirft eine `StringIndexOutOfBoundsException`.
    fehler:
      - wert: [r, f, f, r]
        meldung: Spiel die Bedingung `i <= s.length()` mit `"ab"` durch. Welcher Index wird im letzten Durchlauf gelesen?
      - wert: [r, r, r, f]
        meldung: Ein `return` beendet die Methode sofort. Nach dem ersten Treffer wird nicht weitergesucht.
hinweise:
  - Spiel jede Frage mit einem kleinen String wie `"ab"` oder `""` durch.
  - Denk daran, dass `return` die Methode sofort beendet, auch mitten in einer Schleife.
loesung: |
  **Ansatz:** Jede Behauptung mit einem konkreten Fall prüfen.
  ---
  Leerer String: Schleife läuft nicht, `-1`. Richtig. Zwei Vorkommen: Das erste beendet die Methode. Aussage 2 ist falsch.
  ---
  Ohne `return -1` fehlt ein Rückgabewert, Aussage 3 ist richtig. Mit `<=` wird `charAt(s.length())` gelesen, Aussage 4 ist falsch.
```

```aufgabe
id: fg-ek-randfall
titel: Sonderfälle ausprobieren
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Die Methode sucht von hinten den ersten Großbuchstaben. Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Hinten {
          public static char letzterGross(String s) {
              for (int i = s.length() - 1; i >= 0; i--) {
                  char c = s.charAt(i);
                  if (c >= 'A' && c <= 'Z') {
                      return c;
                  }
              }
              return '-';
          }

          public static void main(String[] args) {
              System.out.println(letzterGross("abCdE"));
              System.out.println(letzterGross("abc"));
              System.out.println(letzterGross(""));
              System.out.println(letzterGross("Xyz"));
          }
      }
    loesung: |
      E
      -
      -
      X
    fehler:
      - wert: "C\n-\n-\nX"
        meldung: Die Schleife beginnt beim **letzten** Zeichen und läuft rückwärts. Der erste Treffer von hinten ist `E`.
      - wert: "E\n-\nX"
        meldung: Auch der leere String liefert eine Ausgabe. Die Schleife läuft nicht, und `return '-'` liefert das Zeichen `-`.
hinweise:
  - Für jeden Aufruf getrennt überlegen. Beim leeren String startet `i` bei -1.
  - '`return c` beendet die Methode beim ersten Treffer, von hinten gezählt.'
loesung: |
  **Ansatz:** Jeden Aufruf einzeln durchspielen, die Sonderfälle besonders genau.
  ---
  `"abCdE"`: Von hinten ist `E` sofort ein Großbuchstabe. `"abc"`: kein Treffer, Ergebnis `-`.
  ---
  `""`: `i` startet bei -1, die Schleife läuft nicht, Ergebnis `-`. `"Xyz"`: Erst beim Index 0 kommt der Treffer `X`.
```

```aufgabe
id: fg-ek-gefuehrt-schleife
titel: „Wie oft läuft die innere Anweisung?“
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Rückfrage zu deinem Code: „Wie oft wird `zaehler++` ausgeführt?“ Löse die Aufgabe zuerst geführt.

  ```java
  int zaehler = 0;
  for (int i = 0; i < 4; i++) {
      for (int j = i; j < 4; j++) {
          zaehler++;
      }
  }
  ```
teile:
  - typ: zahl
    loesung: "4 + 3 + 2 + 1"
    fehler:
      - wert: "16"
        meldung: Die innere Schleife beginnt bei `j = i`, nicht bei 0. Mit jedem `i` läuft sie einmal weniger.
      - wert: "6"
        meldung: Bei `j = i` ist die Bedingung `j < 4` schon im ersten Durchlauf wahr. Für `i = 0` läuft die innere Schleife viermal, nicht dreimal.
gefuehrt:
  - text: Wie oft läuft die innere Schleife für `i = 0`?
    teil: { typ: zahl, loesung: "4" }
    erklaerung: '`j` nimmt die Werte 0, 1, 2 und 3 an.'
  - text: Wie oft läuft sie für `i = 2`?
    teil: { typ: zahl, loesung: "2" }
    erklaerung: '`j` nimmt die Werte 2 und 3 an.'
  - text: Wie oft läuft sie für `i = 3`?
    teil: { typ: zahl, loesung: "1" }
    erklaerung: Nur `j = 3`. Für `i = 1` sind es 3 Durchläufe.
hinweise:
  - Zähle für jeden Wert von `i` getrennt, wie viele Werte `j` annimmt.
  - Addiere die vier Anzahlen.
loesung: |
  **Ansatz:** Für jedes `i` die Durchläufe der inneren Schleife zählen und addieren.
  ---
  Für `i = 0, 1, 2, 3` läuft die innere Schleife 4-, 3-, 2- und 1-mal.
  ---
  Zusammen $4 + 3 + 2 + 1 = 10$. Im Gespräch: „Die innere Schleife wird mit jedem `i` um einen Durchlauf kürzer.“
```

```aufgabe
id: fg-ek-maximum-fehler
titel: Ein Fehler, der erst bei negativen Zahlen auffällt
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Die Methode soll das größte Element eines Arrays liefern. Vorbedingung: Das Array hat mindestens ein Element.
  Bei `{3, 8, 2}` liefert sie 8. Die Tutorin fragt: „Was passiert bei `{-4, -2, -9}`?“
  Welche Zeile ist dafür verantwortlich, dass die Methode dann falsch rechnet?
teile:
  - typ: zeilen
    label: Welche Zeile enthält den Fehler?
    code: |
      public static int groesstes(int[] a) {
          int max = 0;
          for (int i = 0; i < a.length; i++) {
              if (a[i] > max) {
                  max = a[i];
              }
          }
          return max;
      }
    loesung: [2]
    fehler:
      - wert: [4]
        meldung: Der Vergleich ist richtig. Das Problem ist der Startwert, mit dem verglichen wird.
      - wert: [3]
        meldung: Die Schleife läuft über alle Elemente. Daran liegt es nicht.
hinweise:
  - Spiel `{-4, -2, -9}` durch. Wird `max` jemals verändert?
  - Mit welchem Wert sollte `max` starten, damit es sicher ein Element des Arrays ist?
loesung: |
  **Ansatz:** Den genannten Fall durchspielen, so wie die Tutorin es erwartet.
  ---
  `max` startet bei 0. Keine der Zahlen -4, -2, -9 ist größer als 0. `max` bleibt 0, die Methode liefert 0. Die 0 steht aber gar nicht im Array.
  ---
  Fehler in Zeile 2. Richtig ist `int max = a[0];`. Die Vorbedingung garantiert, dass es `a[0]` gibt. Dann liefert die Methode -2.
```

```aufgabe
id: fg-ek-ausgabe-schwer
titel: Verschachtelte Schleifen bauen einen String
niveau: 3
lernziel: 6
kompetenz: verstehen
angabe: |
  Was gibt der Code aus?
teile:
  - typ: ausgabe
    code: |
      String s = "";
      for (int i = 1; i <= 3; i++) {
          for (int j = 0; j < i; j++) {
              s = s + (char) ('a' + j);
          }
          if (i % 2 == 0) {
              s = s + i;
          }
          s = s + "|";
      }
      System.out.println(s);
      System.out.println(s.length());
    loesung: |
      a|ab2|abc|
      10
    fehler:
      - wert: "a|ab|abc|\n9"
        meldung: Für `i = 2` ist `i % 2 == 0` wahr. Dann wird die Zahl 2 an den String gehängt.
      - wert: "a|ab2|abc|\n9"
        meldung: Zähle die Länge noch einmal genau. Jeder Buchstabe, die Ziffer 2 und jeder Strich zählen als ein Zeichen.
      - wert: "97|97982|979899|\n16"
        meldung: Der Cast `(char)` macht aus dem Zeichencode wieder ein Zeichen. Angehängt wird also `a`, nicht die Zahl 97.
hinweise:
  - Für jedes `i` hängt die innere Schleife die ersten `i` Buchstaben des Alphabets an.
  - Nach den Buchstaben kommt bei geradem `i` die Zahl `i`, danach immer ein Strich.
loesung: |
  **Ansatz:** Für jedes `i` aufschreiben, was angehängt wird.
  ---
  `i = 1`: `a` und `|`. `i = 2`: `ab`, dann `2`, weil 2 gerade ist, dann `|`. `i = 3`: `abc` und `|`.
  ---
  Ergebnis `a|ab2|abc|`. Die Länge ist 2 + 4 + 4 = 10.
```

```aufgabe
id: fg-ek-text-spaghetti
titel: Spaghetticode beschreiben
niveau: 3
lernziel: 6
kompetenz: begruenden
quelle: Blatt 3 A1 a und b, WS2023 (eigener Code)
angabe: |
  Auf Blatt 3 sollte man unübersichtlichen Code analysieren und beschreiben. Code ohne Struktur, der schwer zu lesen
  ist, heißt **Spaghetticode**. Beschreibe die Funktionsweise dieses Codes in zwei bis drei Sätzen. Nenne danach zwei
  Stellen, die du ändern würdest, und warum.

  ```java
  int a=4;for(int b=0;b<a;b++){for(int c=0;c<a;c++){if((b+c)%2==0)System.out.print("#");else System.out.print(".");}System.out.println();}
  ```
teile:
  - typ: text
    muster: |
      **Funktionsweise:** Der Code gibt ein Schachbrettmuster aus 4 Zeilen und 4 Spalten aus. Die äußere Schleife läuft
      über die Zeilen, die innere über die Spalten. Ist die Summe aus Zeilen- und Spaltennummer gerade, erscheint `#`,
      sonst ein Punkt. So wechseln sich die Zeichen in jeder Zeile und von Zeile zu Zeile ab. Die erste Zeile lautet `#.#.`.
      **Änderungen:** Erstens aussagekräftige Namen, also `groesse`, `zeile` und `spalte` statt `a`, `b` und `c`.
      Zweitens eine Anweisung pro Zeile mit Einrückung und Klammern auch um `if` und `else`, damit man die
      Verschachtelung sieht. Drittens eine Methode `druckeSchachbrett(int groesse)`, damit man verschiedene Größen
      ausgeben kann, ohne den Code zu kopieren.
hinweise:
  - Formatiere den Code zuerst auf Papier mit einer Anweisung pro Zeile. Spiel dann die erste Zeile durch.
  - Für die Änderungen denk an Namen, Einrückung und an eine Methode mit Parameter.
loesung: |
  **Ansatz:** Erst umformatieren, dann den Zweck in Alltagssprache beschreiben, dann verbessern.
  ---
  Zweck: ein 4 mal 4 großes Schachbrett aus `#` und `.`. Das Zeichen hängt davon ab, ob Zeilen- plus Spaltennummer gerade ist.
  ---
  Verbesserungen: sprechende Namen, Einrückung, eine Methode mit dem Parameter `groesse`. So zerlegt man Spaghetticode, wie in [9.3 Spaghetticode in Methoden zerlegen](/lernen/ep1/codequalitaet/spaghetticode-in-methoden-zerlegen). Prüfe, ob deine Antwort Zweck, Regel für `#` und zwei Verbesserungen enthält.
```

## Gemischte Wiederholung

Die folgenden Aufgaben mischen den Stoff früherer Kapitel mit den Fragetypen des Gesprächs. Einige fragen nicht nach
einem Ergebnis, sondern danach, **welches Vorgehen** oder **welche Erklärung** passt. Genau diese Entscheidung musst du im
Gespräch blitzschnell treffen.

```aufgabe
id: fg-mw-equals
titel: Strings mit == und equals
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Aus Kapitel 2: [2.7 String-Methoden und der Vergleich mit equals](/lernen/ep1/ausdruecke/string-methoden-und-der-vergleich-mit-equals).
  Was gibt der Code aus?
teile:
  - typ: ausgabe
    code: |
      String a = "EP";
      String b = new String("EP");
      System.out.println(a == b);
      System.out.println(a.equals(b));
    loesung: |
      false
      true
    fehler:
      - wert: "true\ntrue"
        meldung: '`new String("EP")` erzeugt ein neues String-Objekt. `==` vergleicht Verweise, und die beiden Verweise sind verschieden.'
hinweise:
  - Wie bei Arrays vergleicht `==` bei Strings die Verweise, `equals` den Inhalt.
  - '`new` erzeugt immer ein neues Objekt.'
loesung: |
  **Ansatz:** Wie bei Arrays: `==` vergleicht Verweise, `equals` vergleicht Inhalte.
  ---
  `a` und `b` zeigen auf zwei verschiedene Objekte, also `false`. Der Inhalt ist gleich, also liefert `equals` den Wert `true`.
  ---
  Eine passende Rückfrage im Gespräch wäre: „Warum vergleichst du Strings mit `equals`?“ Antwort: Weil `==` nur prüft, ob es dasselbe Objekt ist.
```

```aufgabe
id: fg-mw-sterne
titel: Sterne einer Doppelschleife zählen
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Aus Kapitel 4: [4.8 Verschachtelte Schleifen](/lernen/ep1/schleifen/verschachtelte-schleifen).
  Wie viele Sterne gibt der Code aus?

  ```java
  for (int i = 1; i <= 5; i++) {
      for (int j = 1; j <= i; j += 2) {
          System.out.print("*");
      }
  }
  ```
teile:
  - typ: zahl
    loesung: "1 + 1 + 2 + 2 + 3"
    fehler:
      - wert: "15"
        meldung: Die innere Schleife zählt in Zweierschritten. Für `i = 5` nimmt `j` nur die Werte 1, 3 und 5 an.
      - wert: "6"
        meldung: Auch für gerade `i` läuft die innere Schleife. Für `i = 2` gilt `j = 1 <= 2`, ein Stern.
hinweise:
  - Zähle für jedes `i` die Werte von `j`, die `j <= i` erfüllen, wenn `j` bei 1 beginnt und um 2 wächst.
  - 'Für `i = 1` bis 5 sind das 1, 1, 2, 2 und 3 Werte.'
loesung: |
  **Ansatz:** Für jedes `i` die Durchläufe der inneren Schleife zählen.
  ---
  `i = 1`: j = 1. `i = 2`: j = 1. `i = 3`: j = 1, 3. `i = 4`: j = 1, 3. `i = 5`: j = 1, 3, 5.
  ---
  Zusammen $1 + 1 + 2 + 2 + 3 = 9$ Sterne.
```

```aufgabe
id: fg-mw-harshad
titel: Durch die Quersumme teilbar?
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  Aus Kapitel 7: [7.4 Teilbarkeit und Harshad-Zahlen](/lernen/ep1/ziffern/teilbarkeit-und-harshad-zahlen).
  Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Harshad {
          public static int quersumme(int n) {
              int s = 0;
              while (n > 0) {
                  s += n % 10;
                  n /= 10;
              }
              return s;
          }

          public static boolean teilbar(int n) {
              return n % quersumme(n) == 0;
          }

          public static void main(String[] args) {
              System.out.println(teilbar(132));
              System.out.println(teilbar(134));
              System.out.println(quersumme(907));
          }
      }
    loesung: |
      true
      false
      16
    fehler:
      - wert: "true\ntrue\n16"
        meldung: Die Quersumme von 134 ist 8. 134 geteilt durch 8 lässt den Rest 6, also ist 134 nicht durch seine Quersumme teilbar.
      - wert: "true\nfalse\n7"
        meldung: Die 0 in der Mitte zählt mit, trägt aber nichts bei. Die Quersumme von 907 ist 9 + 0 + 7.
hinweise:
  - Berechne zuerst die Quersummen von 132, 134 und 907.
  - Dann prüfe den Rest der Division durch die Quersumme.
loesung: |
  **Ansatz:** Quersumme mit `% 10` und `/ 10` bilden, dann den Rest prüfen.
  ---
  132 hat die Quersumme 6, und `132 % 6 == 0`, also `true`. 134 hat die Quersumme 8, `134 % 8` ist 6, also `false`.
  ---
  907 hat die Quersumme 9 + 0 + 7 = 16. Die Ausgabe ist `true`, `false`, `16`.
```

```aufgabe
id: fg-mw-vorbedingung
titel: Eine Vorbedingung gegen den Absturz
niveau: 2
lernziel: 2
kompetenz: begruenden
angabe: |
  Aus Kapitel 6: [6.6 Vor- und Nachbedingungen](/lernen/ep1/methoden/vor-und-nachbedingungen).
  Welche Vorbedingung schließt aus, dass diese Methode mit einer Exception abbricht?

  ```java
  public static int anteil(int a, int b) {
      return a / (b - 3);
  }
  ```
teile:
  - typ: auswahl
    optionen:
      - "`b != 3`"
      - "`b > 0`"
      - "`a != 0`"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Auch mit `b > 0` ist `b = 3` erlaubt. Dann steht `a / 0` da, und Java wirft eine `ArithmeticException`.'
      - wert: 2
        meldung: '`a` steht im Zähler. Eine 0 im Zähler ist harmlos, gefährlich ist eine 0 im Nenner.'
hinweise:
  - Wann ist der Nenner `b - 3` gleich 0?
  - Ganzzahlige Division durch 0 wirft eine `ArithmeticException`.
loesung: |
  **Ansatz:** Die gefährliche Stelle suchen. Das ist die Division durch `b - 3`.
  ---
  Der Nenner ist genau dann 0, wenn `b == 3` ist.
  ---
  Die Vorbedingung `b != 3` schließt das aus. Mit ihr darf die Methode darauf verzichten, `b` selbst zu prüfen.
```

```aufgabe
id: fg-mw-jagged
titel: Summe über ein ausgefranstes Array
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: |
  Aus Kapitel 14: [14.3 Jagged Arrays: Zeilen als eigene Arrays](/lernen/ep1/arrays-2d/jagged-arrays-zeilen-als-eigene-arrays).
  Was gibt der Code aus?
teile:
  - typ: ausgabe
    code: |
      int[][] m = {{1, 2}, {3}, {}, {4, 5, 6}};
      int summe = 0;
      for (int i = 0; i < m.length; i++) {
          for (int j = 0; j < m[i].length; j++) {
              summe += m[i][j];
          }
      }
      System.out.println(summe + " " + m.length + " " + m[3].length);
    loesung: |
      21 4 3
    fehler:
      - wert: "21 3 3"
        meldung: Die leere Zeile `{}` ist trotzdem eine Zeile. `m` hat vier Zeilen.
      - wert: "15 4 3"
        meldung: Zähle alle Zahlen zusammen, auch die 6 in der letzten Zeile. 1 + 2 + 3 + 4 + 5 + 6 ergibt 21.
hinweise:
  - Die innere Schleife läuft bis zur Länge der **aktuellen** Zeile. Bei `{}` läuft sie gar nicht.
loesung: |
  **Ansatz:** Zeile für Zeile summieren und die Längen getrennt zählen.
  ---
  Die Summe ist 1 + 2 + 3 + 4 + 5 + 6 = 21. Die leere Zeile trägt nichts bei, verursacht aber auch keinen Fehler.
  ---
  `m.length` ist 4, `m[3].length` ist 3. Ausgabe `21 4 3`.
```

```aufgabe
id: fg-mw-rekursion-string
titel: Ein String rekursiv umgebaut
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: |
  Aus Kapitel 10: [10.4 Rekursion mit Strings](/lernen/ep1/rekursion/rekursion-mit-strings).
  Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Doppelt {
          public static String doppelt(String s) {
              if (s.length() == 0) {
                  return "";
              }
              return s.charAt(0) + "" + s.charAt(0) + doppelt(s.substring(1));
          }

          public static void main(String[] args) {
              System.out.println(doppelt("abc"));
              System.out.println(doppelt(""));
              System.out.println(doppelt("x").length());
          }
      }
    loesung: |
      aabbcc

      2
    fehler:
      - wert: "abcabc\n\n2"
        meldung: Jeder Aufruf verdoppelt nur das **erste** Zeichen und hängt den Rest dahinter. So steht jedes Zeichen zweimal direkt hintereinander.
      - wert: "aabbcc\n2"
        meldung: Auch `doppelt("")` erzeugt eine Ausgabezeile, nur ist sie leer.
hinweise:
  - Schreib die Aufrufe untereinander, `doppelt("abc")`, `doppelt("bc")` und so weiter.
  - Der Basisfall liefert den leeren String. Eine leere Zeile ist auch eine Ausgabe.
loesung: |
  **Ansatz:** Hinweg aufschreiben, Rückweg zusammensetzen.
  ---
  `doppelt("c")` liefert `"cc"`, `doppelt("bc")` liefert `"bb" + "cc"`, `doppelt("abc")` liefert `"aabbcc"`.
  ---
  `doppelt("")` liefert den leeren String, `println` gibt eine leere Zeile aus. `doppelt("x")` ist `"xx"` mit Länge 2.
```

```aufgabe
id: fg-mw-sokoban-yx
titel: Welche Erklärung passt zu level[y][x]?
niveau: 2
lernziel: 6
kompetenz: begruenden
angabe: |
  Aus Kapitel 16: [16.1 Das Spielfeld als Zeichenfeld](/lernen/ep1/projekt/das-spielfeld-als-zeichenfeld).
  Rückfrage zu deinem Sokoban: „Warum schreibst du `level[y][x]` und nicht `level[x][y]`?“ Welche Antwort ist richtig
  und vollständig?
teile:
  - typ: auswahl
    optionen:
      - "Ein zweidimensionales Array ist ein Array von Zeilen. Mit dem ersten Index wähle ich die Zeile, also `y`, dann darin die Spalte `x`. So steht es auch auf dem Blatt."
      - "Das ist egal, solange ich es überall gleich mache. `level[x][y]` würde genauso funktionieren."
      - "Weil `y` im Alphabet nach `x` kommt und Java Indizes rückwärts liest."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Das Level wird zeilenweise aus dem Text gebaut. Die Zeilen sind die erste Dimension. Mit `level[x][y]` liest man bei nicht quadratischen Levels an falschen Stellen oder stürzt ab.
      - wert: 2
        meldung: Java liest Indizes nicht rückwärts. Die Reihenfolge folgt allein dem Aufbau des Arrays aus Zeilen.
hinweise:
  - Was ist `level[2]` allein, eine Zeile oder eine Spalte?
loesung: |
  **Ansatz:** Vom Aufbau des Arrays ausgehen.
  ---
  `level[y]` ist eine Zeile, ein eigenes `char`-Array. Erst darin wählt `[x]` das Zeichen in Spalte `x`.
  ---
  Darum lautet der Zugriff immer `level[y][x]`. Antwort 1 nennt Grund und Beleg.
```

```aufgabe
id: fg-mw-welches-vorgehen
titel: Welches Vorgehen passt zum Auftrag?
niveau: 1
lernziel: 5
kompetenz: anwenden
angabe: |
  Der Variationsauftrag lautet: „Schreib deine Zählmethode jetzt ohne Schleife.“ Welches Vorgehen passt?
teile:
  - typ: auswahl
    optionen:
      - Den Schleifenabbruch zum Basisfall machen und die Methode sich selbst mit einem kürzeren Rest aufrufen lassen.
      - Die `for`-Schleife durch eine `while`-Schleife ersetzen.
      - Eine Klassenvariable als Zähler anlegen und eine Hilfsmethode schreiben, die zählt.
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Eine `while`-Schleife ist immer noch eine Schleife. „Ohne Schleife“ heißt Rekursion.
      - wert: 2
        meldung: Klassenvariablen und Hilfsmethoden sind bei den rekursiven Aufgaben der Blätter verboten. Der Zähler ergibt sich aus den Rückgabewerten.
hinweise:
  - Ohne Schleife bleibt in EP1 nur die Rekursion.
loesung: |
  **Ansatz:** „Ohne Schleife“ heißt rekursiv, nach den Regeln der Blätter.
  ---
  Das Schleifenende wird zum Basisfall, der Schritt zum Fortschritt im Selbstaufruf. So steht es in [22.6 Variationsaufträge: Ändere deinen Code](/lernen/ep1/feedbackgespraech/variationsauftraege-aendere-deinen-code).
```

```aufgabe
id: fg-mw-welche-erklaerung
titel: Welche Erklärung passt zur Beobachtung?
niveau: 2
lernziel: 0
kompetenz: begruenden
angabe: |
  Im Gespräch sagst du: „Meine `void`-Methode ändert ein `int[]`, und `main` sieht die Änderung. Bei einem `int`
  klappt das nicht.“ Welche Erklärung passt zu dieser Beobachtung?
teile:
  - typ: auswahl
    optionen:
      - "Übergeben wird immer eine Kopie. Beim `int` ist es eine Kopie der Zahl, beim Array eine Kopie des Verweises auf dasselbe Array."
      - Arrays werden als Rückgabewert automatisch an `main` zurückgegeben.
      - Ein `int` ist eine lokale Variable, ein Array eine Klassenvariable.
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Eine `void`-Methode gibt nichts zurück, auch kein Array. Die Änderung ist sichtbar, weil beide Verweise auf dasselbe Array zeigen.
      - wert: 2
        meldung: Auch ein Array-Parameter ist eine lokale Variable. Nur ihr Inhalt, der Verweis, zeigt auf ein Array, das auch `main` kennt.
hinweise:
  - Was steht in einer Array-Variable, die Werte oder ein Verweis?
  - Was wird bei jedem Aufruf in den Parameter kopiert?
loesung: |
  **Ansatz:** Den Mechanismus beim Aufruf benennen: Kopie des Werts.
  ---
  Bei `int` ist der Wert die Zahl. Eine Änderung trifft nur die Kopie.
  ---
  Bei einem Array ist der Wert ein Verweis. Die Kopie zeigt auf dasselbe Array, darum sieht `main` jede Änderung am Inhalt.
```

```aufgabe
id: fg-mw-welche-technik
titel: Welche Technik beantwortet die Frage?
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Die Tutorin fragt: „Wie oft wird deine Fraktal-Methode aufgerufen?“ Welches Vorgehen führt am sichersten zur richtigen
  Antwort?
teile:
  - typ: auswahl
    optionen:
      - Eine Tabelle mit Ebene, Seitenlänge und Zahl der Aufrufe anlegen und prüfen, ob die Größe am Anfang der Methode oder vor dem Selbstaufruf geprüft wird.
      - Die Zahl der gezeichneten Quadrate im Bild zählen, das ist immer die Zahl der Aufrufe.
      - Die Seitenlänge durch die kleinste Seitenlänge teilen.
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Steht der Basisfall am Anfang der Methode, gibt es zusätzlich Aufrufe, die nichts zeichnen. Bild und Aufrufzahl stimmen dann nicht überein.
      - wert: 2
        meldung: Die Zahl der Aufrufe wächst je Ebene um den Faktor der Selbstaufrufe, nicht linear mit der Seitenlänge.
hinweise:
  - Denk an das Beispiel mit 341 Quadraten und 1365 Aufrufen in [22.4 Zusatzfragen zur Rekursion](/lernen/ep1/feedbackgespraech/zusatzfragen-zur-rekursion).
loesung: |
  **Ansatz:** Ebenen zählen und die Lage des Basisfalls beachten.
  ---
  Jede Ebene hat so viele Aufrufe wie die vorige mal die Zahl der Selbstaufrufe. Basisfall am Anfang bedeutet eine zusätzliche Ebene, die nur prüft.
  ---
  Die Tabelle beantwortet beide Zusatzfragen auf einmal: Aufrufe und Quadrate der letzten Ebene.
```

## Prüfungsaufgaben

Jede Aufgabe hier simuliert eine **Gesprächsrunde zu einem Blatt**. Die Punkte und der Zeitrichtwert in der Angabe sind
nur Richtwerte für deine Selbstkontrolle. Wie lange ein Gespräch dauert und wie es genau bewertet wird, ist für 2026
nicht veröffentlicht. Löse zuerst alles ohne Hilfe und schau erst danach in Hinweise und Lösung.

```aufgabe
id: fg-pa-blatt1
titel: Gesprächsrunde zu Blatt 1
niveau: 3
lernziel: 1
kompetenz: anwenden
punkte: 4
quelle: Blatt 1 A1 c, WS2023 (nachgebaut mit eigenen Zahlen)
angabe: |
  **Zeitrichtwert: 8 Minuten.** Deine Abgabe gibt alle Zahlen im Intervall ]24, 120] aus, die durch 6 **und** durch 8
  teilbar sind. Sie sind durch `#` getrennt, mit `#` am Anfang und am Ende.

  ```java
  System.out.print("#");
  for (int i = 25; i <= 120; i++) {
      if (i % 6 == 0 && i % 8 == 0) {
          System.out.print(i + "#");
      }
  }
  System.out.println();
  ```

  **a)** (1 P) Was gibt der Code aus?

  **b)** (1 P) Beurteile die Antworten auf zwei Zusatzfragen.

  **c)** (2 P) Variationsauftrag: „Jetzt absteigend.“ Fülle die Lücken des neuen Schleifenkopfs. Der Rumpf bleibt gleich.
teile:
  - typ: ausgabe
    label: a)
    code: |
      System.out.print("#");
      for (int i = 25; i <= 120; i++) {
          if (i % 6 == 0 && i % 8 == 0) {
              System.out.print(i + "#");
          }
      }
      System.out.println();
    codeAnzeigen: false
    loesung: |
      #48#72#96#120#
    fehler:
      - wert: "#24#48#72#96#120#"
        meldung: Das Intervall ]24, 120] schließt 24 aus. Die Schleife beginnt deshalb bei 25.
      - wert: "#48#72#96#"
        meldung: 'Die obere Grenze gehört dazu, die Bedingung lautet `i <= 120`.'
  - typ: richtigfalsch
    label: b)
    aussagen:
      - text: "„Statt `&&` könnte ich `||` schreiben, das Ergebnis bliebe gleich.“"
        richtig: false
        erklaerung: Mit `||` käme jede Zahl dazu, die durch 6 **oder** durch 8 teilbar ist, zum Beispiel 30 und 32.
      - text: "„Das erste `#` gebe ich vor der Schleife aus, weil in der Schleife nur nach jeder Zahl ein Trennzeichen kommt.“"
        richtig: true
        erklaerung: So entsteht genau ein Trennzeichen mehr als Zahlen, eines am Anfang und eines nach jeder Zahl.
    fehler:
      - wert: [r, r]
        meldung: 'Teste `||` mit der Zahl 30. Sie ist durch 6 teilbar, aber nicht durch 8.'
  - typ: lueckentext
    label: c)
    code: |
      System.out.print("#");
      for (int i = ___; ___; ___) {
          if (i % 6 == 0 && i % 8 == 0) {
              System.out.print(i + "#");
          }
      }
      System.out.println();
    luecken: [["120"], ["i >= 25", "i > 24", "25 <= i"], ["i--", "i -= 1", "i = i - 1", "--i"]]
    fehler:
      - wert: ["120", "i >= 24", "i--"]
        meldung: Die 24 gehört nicht zum Intervall ]24, 120]. Sie ist durch 6 und 8 teilbar und würde fälschlich ausgegeben.
      - wert: ["120", "i <= 25", "i--"]
        meldung: Die Bedingung beschreibt, solange die Schleife läuft. Beim Start ist `120 <= 25` falsch, die Schleife liefe nie.
hinweise:
  - Bei a) ist eine Zahl durch 6 und 8 teilbar, wenn sie durch 24 teilbar ist. Achte auf die Klammern des Intervalls.
  - Bei c) beginnt die Schleife beim größten Wert des Intervalls und läuft, solange sie die untere Grenze nicht unterschreitet.
loesung: |
  **Ansatz:** Durch 6 und 8 teilbar heißt durch 24 teilbar. Im Intervall ]24, 120] sind das 48, 72, 96 und 120.
  ---
  a) `#48#72#96#120#`. b) Aussage 1 ist falsch, weil `||` mehr Zahlen zulässt. Aussage 2 ist richtig.
  ---
  c) `for (int i = 120; i >= 25; i--)`. Die neue Ausgabe ist `#120#96#72#48#`. Grenzfall: 24 gehört nicht dazu, darum `>= 25`.
```

```aufgabe
id: fg-pa-blatt2
titel: Gesprächsrunde zu Blatt 2
niveau: 3
lernziel: 2
kompetenz: begruenden
punkte: 4
quelle: Taschenrechner, Blatt 2 A4 WS2023, und Zusatzfragen zum Scanner, Blatt 2 WS2021 (nachgebaut)
angabe: |
  **Zeitrichtwert: 10 Minuten.** Deine Abgabe liest zwei ganze Zahlen ein und gibt den Rest der Division aus.

  **a)** (2 P) Die Tutorin tippt `sieben 17 x 5.0 5`. Was gibt das Programm aus?

  **b)** (1 P) Welche Aussage über `leseZahl` ist richtig?

  **c)** (1 P) Zusatzfrage: „Warum steht in der Schleife `sc.next()`?“ Antworte in zwei Sätzen und vergleiche danach.
teile:
  - typ: ausgabe
    label: a)
    code: |
      import java.util.Scanner;

      public class Rest {
          public static int leseZahl(Scanner sc) {
              while (!sc.hasNextInt()) {
                  System.out.println("Fehler: " + sc.next());
              }
              return sc.nextInt();
          }

          public static void main(String[] args) {
              Scanner sc = new Scanner(System.in);
              int a = leseZahl(sc);
              int b = leseZahl(sc);
              System.out.println(a + " % " + b + " = " + (a % b));
          }
      }
    stdin: "sieben 17 x 5.0 5\n"
    loesung: |
      Fehler: sieben
      Fehler: x
      Fehler: 5.0
      17 % 5 = 2
    fehler:
      - wert: "Fehler: sieben\nFehler: x\n17 % 5 = 2"
        meldung: '`5.0` ist keine ganze Zahl. `hasNextInt()` liefert dafür `false`, und das Token wird als Fehler gemeldet.'
      - wert: "Fehler: sieben\nFehler: x\nFehler: 5.0\n17 % 5 = 3.4"
        meldung: '`%` liefert den Rest der ganzzahligen Division. 17 geteilt durch 5 ist 3 mit Rest 2.'
  - typ: auswahl
    label: b)
    optionen:
      - "`leseZahl` bekommt den Scanner als Parameter, damit beide Aufrufe denselben Puffer lesen."
      - "`leseZahl` darf keinen Parameter haben, weil sie einen Rückgabewert hat."
      - "`leseZahl` könnte auch `void` sein, weil sie die Zahl schon in `sc` speichert."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Parameter und Rückgabewert sind unabhängig voneinander. Eine Methode darf beides haben.
      - wert: 2
        meldung: Ohne Rückgabewert käme die gelesene Zahl nie in `a` oder `b` an.
  - typ: text
    label: c)
    muster: |
      `hasNextInt()` prüft nur, ob das nächste Token eine ganze Zahl ist, und entfernt nichts. Ohne `sc.next()` bliebe das
      ungültige Token vorne im Puffer, die Schleife würde es immer wieder prüfen und nie enden.
hinweise:
  - Geh die Token einzeln durch. `leseZahl` wird zweimal aufgerufen und liest jeweils bis zur nächsten ganzen Zahl.
  - Für b) denk daran, dass ein zweiter Scanner den Puffer des ersten nicht kennt.
loesung: |
  **Ansatz:** Token für Token verfolgen, welcher Aufruf von `leseZahl` gerade läuft.
  ---
  a) Der erste Aufruf meldet `sieben` und liest 17. Der zweite meldet `x` und `5.0` und liest 5. Dann folgt `17 % 5 = 2`.
  ---
  b) Antwort 1: Beide Aufrufe teilen sich einen Scanner und damit einen Puffer. c) `hasNextInt()` entfernt nichts. Ohne `next()` entstünde eine Endlosschleife.
```

```aufgabe
id: fg-pa-blatt3
titel: Gesprächsrunde zu Blatt 3
niveau: 3
lernziel: 3
kompetenz: rechnen
punkte: 4
quelle: Zusatzfragen zum Quadratmuster, Blatt 3 WS2021 (Variation mit eigenem Muster)
angabe: |
  **Zeitrichtwert: 10 Minuten.** Deine rekursive Methode zeichnet einen Baum aus Quadraten. Gestartet wird mit
  `baum(cd, 400, 100, 200)`.

  ```java
  public static void baum(CodeDraw cd, int x, int y, int s) {
      cd.fillSquare(x - s / 2, y - s / 2, s);
      if (s / 2 >= 20) {
          baum(cd, x - s, y + s, s / 2);
          baum(cd, x + s, y + s, s / 2);
      }
  }
  ```

  **a)** (1 P) Wie viele Quadrate werden insgesamt gezeichnet?

  **b)** (1 P) Wie oft wird `baum` aufgerufen, den Aufruf aus `main` mitgezählt?

  **c)** (1 P) Wie viele Quadrate liegen auf der letzten Ebene?

  **d)** (1 P) Variationsauftrag: „Die großen Quadrate sollen die kleinen überdecken.“ Was änderst du?
teile:
  - typ: zahl
    label: a)
    loesung: "1 + 2 + 4 + 8"
    fehler:
      - wert: "31"
        meldung: 'Die Größe wird **vor** dem Selbstaufruf geprüft. Nach `s = 25` wird nicht mehr aufgerufen, denn `25 / 2 = 12` ist kleiner als 20.'
      - wert: "7"
        meldung: 'Auch `s = 25` wird noch gezeichnet. Die Prüfung `s / 2 >= 20` entscheidet nur, ob es **weitere** Aufrufe gibt.'
  - typ: zahl
    label: b)
    loesung: "15"
    fehler:
      - wert: "31"
        meldung: In dieser Fassung zeichnet jeder Aufruf ein Quadrat. Es gibt keine Aufrufe, die nur einen Basisfall prüfen.
  - typ: zahl
    label: c)
    loesung: "2^3"
    fehler:
      - wert: "16"
        meldung: Eine Ebene mit 16 Quadraten bräuchte `s = 12`. Die wird nicht mehr aufgerufen.
  - typ: auswahl
    label: d)
    optionen:
      - "`cd.fillSquare(…)` hinter die beiden Selbstaufrufe verschieben"
      - "Die beiden Selbstaufrufe vertauschen"
      - "Die Bedingung zu `s / 2 > 20` ändern"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die Reihenfolge der beiden Äste ändert nichts daran, dass das große Quadrat zuerst gezeichnet wird.
      - wert: 2
        meldung: Die Bedingung ändert die Zahl der Ebenen, nicht die Reihenfolge des Zeichnens.
hinweise:
  - 'Lege eine Tabelle an: Seitenlängen 200, 100, 50, 25. Prüfe für jede, ob `s / 2 >= 20` gilt.'
  - Was später gezeichnet wird, liegt oben. Wann ist das große Quadrat dran, vor oder nach den kleinen?
loesung: |
  **Ansatz:** Ebenen mit Seitenlänge und Anzahl in eine Tabelle schreiben und die Lage der Prüfung beachten.
  ---
  Die Seitenlängen sind 200, 100, 50, 25. Bei 25 ist `25 / 2 = 12 < 20`, also keine weiteren Aufrufe. Quadrate je Ebene: 1, 2, 4, 8, zusammen 15. Auf der letzten Ebene liegen 8.
  ---
  b) Jeder Aufruf zeichnet genau ein Quadrat, also 15 Aufrufe. d) Das große Quadrat muss **nach** den Selbstaufrufen gezeichnet werden, dann liegt es oben.
```

```aufgabe
id: fg-pa-blatt4
titel: Gesprächsrunde zu Blatt 4
niveau: 3
lernziel: 4
kompetenz: verstehen
punkte: 4
quelle: Aufgabe 1 und Zusatzfragen, Blatt 4 WS2023 (Variation)
angabe: |
  **Zeitrichtwert: 8 Minuten.**

  **a)** (2 P) Was gibt das Programm aus?

  **b)** (2 P) Beurteile die Antworten auf die Zusatzfragen.
teile:
  - typ: ausgabe
    label: a)
    code: |
      public class Blatt4 {
          public static void setzeRand(int[] a) {
              a[0] = -1;
              a[a.length - 1] = -1;
          }

          public static int[] umgedreht(int[] a) {
              int[] r = new int[a.length];
              for (int i = 0; i < a.length; i++) {
                  r[i] = a[a.length - 1 - i];
              }
              return r;
          }

          public static void tausche(int[] a, int[] b) {
              int[] h = a;
              a = b;
              b = h;
          }

          public static void main(String[] args) {
              int[] x = {1, 2, 3, 4};
              int[] y = umgedreht(x);
              setzeRand(y);
              tausche(x, y);
              System.out.println(x[0] + " " + x[3] + " " + y[0] + " " + y[1]);
              System.out.println(x == umgedreht(umgedreht(x)));
          }
      }
    loesung: |
      1 4 -1 3
      false
    fehler:
      - wert: "-1 3 1 4\nfalse"
        meldung: '`tausche` vertauscht nur die beiden **lokalen** Verweise `a` und `b`. In `main` zeigen `x` und `y` danach auf dieselben Arrays wie vorher.'
      - wert: "1 4 4 3\nfalse"
        meldung: '`setzeRand` schreibt über den Verweis in das Array von `y`. Diese Änderung bleibt sichtbar.'
      - wert: "1 4 -1 3\ntrue"
        meldung: '`umgedreht` liefert jedes Mal ein **neues** Array. Der Inhalt ist zwar wieder `{1, 2, 3, 4}`, aber `==` vergleicht Verweise.'
  - typ: richtigfalsch
    label: b)
    aussagen:
      - text: "„`umgedreht` braucht einen Rückgabewert, weil sie ein neues Array anlegt, das der Aufrufer sonst nicht kennt.“"
        richtig: true
        erklaerung: Der Verweis auf das neue Array existiert nur in der Methode. Ohne `return` ginge er verloren.
      - text: "„`setzeRand` braucht keinen Rückgabewert, weil sie das übergebene Array selbst verändert.“"
        richtig: true
        erklaerung: Der Aufrufer und die Methode zeigen auf dasselbe Array.
      - text: "„Mit `tausche` kann man in Java die Inhalte zweier Array-Variablen von `main` vertauschen.“"
        richtig: false
        erklaerung: Die Methode vertauscht nur ihre eigenen Kopien der Verweise. Die Variablen in `main` bleiben gleich.
      - text: "„Um zu prüfen, ob `x` und `umgedreht(umgedreht(x))` denselben Inhalt haben, vergleiche ich elementweise in einer Schleife.“"
        richtig: true
        erklaerung: '`==` prüft nur die Verweise. Für den Inhalt braucht es einen Vergleich Element für Element.'
    fehler:
      - wert: [r, r, r, r]
        meldung: Eine Methode bekommt Kopien der Verweise. Kann sie damit die Variablen `x` und `y` in `main` umbiegen?
hinweise:
  - Zeichne Pfeile und Kästen. `umgedreht` legt einen neuen Kasten an, `setzeRand` beschreibt einen vorhandenen.
  - '`tausche` biegt nur Pfeile innerhalb der Methode um.'
loesung: |
  **Ansatz:** Für jede Methode fragen, ob sie einen Kasten verändert oder nur Pfeile umbiegt.
  ---
  `y` ist das neue Array `{4, 3, 2, 1}`. `setzeRand` macht daraus `{-1, 3, 2, -1}`. `tausche` hat keine Wirkung auf `main`. Erste Zeile: `1 4 -1 3`.
  ---
  `umgedreht(umgedreht(x))` hat denselben Inhalt wie `x`, ist aber ein neues Array: `false`. b) Aussagen 1, 2 und 4 sind richtig, 3 ist falsch.
```

```aufgabe
id: fg-pa-blatt5
titel: Gesprächsrunde zu einem Zeichenfeld
niveau: 3
lernziel: 6
kompetenz: begruenden
punkte: 4
quelle: char[][] auf Blatt 5 und 6, WS2023 (eigene Methode)
angabe: |
  **Zeitrichtwert: 8 Minuten.** Deine Methode zählt die Zeilen eines Zeichenfelds, in denen ein Zeichen mindestens
  einmal vorkommt.

  **a)** (2 P) Was gibt das Programm aus?

  **b)** (2 P) Beurteile deine Antworten auf die Rückfragen der Tutorin.
teile:
  - typ: ausgabe
    label: a)
    code: |
      public class Feld {
          public static int zaehleZeilen(char[][] f, char c) {
              int anzahl = 0;
              for (int y = 0; y < f.length; y++) {
                  boolean gefunden = false;
                  for (int x = 0; x < f[y].length; x++) {
                      if (f[y][x] == c) {
                          gefunden = true;
                      }
                  }
                  if (gefunden) {
                      anzahl++;
                  }
              }
              return anzahl;
          }

          public static void main(String[] args) {
              char[][] f = {{'#', '*', '*'}, {}, {'.', '*'}, {'#', '#', '#', '#'}};
              System.out.println(zaehleZeilen(f, '*'));
              System.out.println(zaehleZeilen(f, '#'));
              System.out.println(zaehleZeilen(f, '.'));
          }
      }
    loesung: |
      2
      2
      1
    fehler:
      - wert: "3\n5\n1"
        meldung: Gezählt werden **Zeilen**, nicht Vorkommen. Die Variable `gefunden` sorgt dafür, dass jede Zeile höchstens einmal zählt.
      - wert: "2\n1\n1"
        meldung: 'Das `#` kommt in Zeile 0 und in Zeile 3 vor. Das sind zwei Zeilen.'
  - typ: richtigfalsch
    label: b)
    aussagen:
      - text: "„Mit `x < f[0].length` statt `x < f[y].length` würde das Programm für dieses Feld abstürzen.“"
        richtig: true
        erklaerung: 'Zeile 1 ist leer. Mit der Grenze 3 aus Zeile 0 würde `f[1][0]` gelesen, und es käme eine `ArrayIndexOutOfBoundsException`.'
      - text: "„Die leere Zeile `{}` verursacht in meiner Fassung eine Exception.“"
        richtig: false
        erklaerung: 'Für die leere Zeile ist `f[y].length` gleich 0. Die innere Schleife läuft einfach nicht.'
      - text: "„`gefunden` sorgt dafür, dass eine Zeile mit mehreren Treffern nur einmal zählt.“"
        richtig: true
        erklaerung: '`anzahl` wird erst nach der inneren Schleife und höchstens einmal je Zeile erhöht.'
      - text: "„Ein `break` direkt nach `gefunden = true` würde das Ergebnis ändern.“"
        richtig: false
        erklaerung: Das `break` beendet nur die innere Schleife früher. Das Ergebnis bleibt gleich, das Programm spart nur Arbeit.
    fehler:
      - wert: [r, r, r, f]
        meldung: Spiel die leere Zeile mit `x < f[y].length` durch. Die Bedingung `0 < 0` ist sofort falsch.
hinweise:
  - Zähle für jedes Zeichen die Zeilen, nicht die Treffer.
  - Bei b) spielst du jede Behauptung mit der leeren Zeile oder mit Zeile 0 durch.
loesung: |
  **Ansatz:** Für jedes gesuchte Zeichen Zeile für Zeile entscheiden, ob es vorkommt.
  ---
  `*` steht in Zeile 0 und 2: 2. `#` steht in Zeile 0 und 3: 2. `.` nur in Zeile 2: 1.
  ---
  b) Aussagen 1 und 3 sind richtig. Die leere Zeile ist mit `f[y].length` harmlos, und ein `break` ändert nur die Laufzeit.
```

```aufgabe
id: fg-pa-ki
titel: Antworten und Code einer KI prüfen
niveau: 3
lernziel: 7
kompetenz: begruenden
punkte: 3
quelle: ChatGPT-Code auf Blatt 3 A5, WS2023 (Idee), eigene Antworten und eigener Code
angabe: |
  **Zeitrichtwert: 8 Minuten.** Ein Studienkollege hat eine KI gebeten, Zusatzfragen zu beantworten und eine Methode
  rekursiv zu schreiben. Für rekursive Methoden gelten die Regeln von Blatt 3: keine Schleifen, keine Klassenvariablen,
  keine Hilfsmethoden.

  **a)** (1 P) Beurteile die Antworten der KI.

  **b)** (1 P) Gegen welche Regeln verstößt der erzeugte Code?

  **c)** (1 P) Was gibt das Programm aus? Die Zeile `for (char v : "aeiou".toCharArray())` ist eine Kurzform einer
  Schleife, die du in EP1 nicht brauchst: `v` nimmt der Reihe nach jedes Zeichen von `"aeiou"` an.
teile:
  - typ: richtigfalsch
    label: a)
    aussagen:
      - text: "„Ein `long` kann als Array-Index verwendet werden, weil er eine ganze Zahl ist.“"
        richtig: false
        erklaerung: '`long` wird nicht automatisch in `int` umgewandelt. Ohne Cast meldet der Compiler einen Fehler.'
      - text: "„Eine `switch`-Anweisung ohne `default` kompiliert. Passt kein Fall, passiert nichts.“"
        richtig: true
        erklaerung: Der `default`-Zweig ist freiwillig.
      - text: "„`berechne(i++)` übergibt den bereits erhöhten Wert von `i`.“"
        richtig: false
        erklaerung: '`i++` liefert den alten Wert und erhöht `i` erst danach.'
      - text: "„Eine Rekursion, deren Argumente den Basisfall nie erreichen, bricht mit einem `StackOverflowError` ab.“"
        richtig: true
        erklaerung: Jeder Aufruf belegt Speicher auf dem Aufrufstapel. Ohne Ende ist dieser Speicher irgendwann voll.
    fehler:
      - wert: [r, r, f, r]
        meldung: Ein `long` als Index braucht einen Cast. Nur `byte`, `short`, `char` und `int` gehen ohne.
  - typ: auswahl
    label: b)
    mehrfach: true
    optionen:
      - Klassenvariable
      - Schleife
      - Hilfsmethode
      - fehlender Basisfall
    richtig: [0, 1]
    fehler:
      - wert: [1]
        meldung: '`static int zaehler` steht außerhalb jeder Methode. Das ist eine Klassenvariable, und die ist verboten.'
      - wert: [0, 1, 3]
        meldung: '`if (s.isEmpty())` ist ein Basisfall. Er ist vorhanden, liefert aber den falschen Wert.'
  - typ: ausgabe
    label: c)
    code: |
      public class KiCode {
          static int zaehler = 0;

          public static int zaehleVokale(String s) {
              if (s.isEmpty()) {
                  return zaehler;
              }
              for (char v : "aeiou".toCharArray()) {
                  if (s.charAt(0) == v) {
                      zaehler++;
                  }
              }
              return zaehleVokale(s.substring(1));
          }

          public static void main(String[] args) {
              System.out.println(zaehleVokale("Oase"));
              System.out.println(zaehleVokale("ei"));
          }
      }
    loesung: |
      2
      4
    fehler:
      - wert: "3\n2"
        meldung: 'Verglichen wird nur mit den Kleinbuchstaben `aeiou`. Das große `O` zählt nicht. Und `zaehler` wird zwischen den Aufrufen nie auf 0 gesetzt.'
      - wert: "2\n2"
        meldung: '`zaehler` ist eine Klassenvariable. Sie behält den Wert 2 aus dem ersten Aufruf, der zweite zählt weiter.'
hinweise:
  - Bei b) suche Code außerhalb der Methode und Wörter wie `for` oder `while` in der Methode.
  - Bei c) verfolge `zaehler` über **beide** Aufrufe aus `main` hinweg. Achte auf Groß- und Kleinschreibung.
loesung: |
  **Ansatz:** Jede KI-Aussage einzeln prüfen und den Code gegen die Regeln des Blatts halten.
  ---
  a) Falsch sind die Aussagen zu `long` und zu `i++`. b) Der Code verwendet die Klassenvariable `zaehler` und eine `for`-Schleife.
  ---
  c) `"Oase"` enthält die kleinen Vokale `a` und `e`, also 2. Beim zweiten Aufruf startet `zaehler` noch bei 2 und zählt `e` und `i` dazu: 4. Genau deshalb sind Klassenvariablen in Rekursionen verboten. Richtig wäre `rest + 1` über die Rückgabewerte.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, ohne nachzuschauen. Vergleiche danach mit dem Zusammenfassungskasten, der auf diese Frage folgt.
antwort: |
  Eine mögliche Auswahl: (1) Im Gespräch zählt, dass du deinen eigenen Code verstehst. Eine gute Antwort hat Kernaussage,
  Begründung und einen Beleg im eigenen Code. (2) Die meisten Zusatzfragen drehen sich um wenige Mechanismen: Kopie des
  Werts beim Aufruf, Verweise bei Arrays, Basisfall und Fortschritt bei der Rekursion, Grenzen von Schleifen.
  (3) Variationsaufträge und Rückfragen löst man nicht durch Raten, sondern indem man die betroffenen Stellen sucht und
  einen kleinen Fall durchspielt. Ebenso gut ist die Aussage, dass Zahlen wie die Zahl der Aufrufe immer zum eigenen Code
  passen müssen.
```

:::zusammenfassung
1. **Das Gespräch:** Die Aufgabenblätter bringen 24 Punkte. Bewertet wird im Feedbackgespräch, ob du deine angekreuzten Aufgaben verstehst und ihre Zusatzfragen beantwortest. Dass du auch kleine Änderungen umsetzen sollst, ist eine Annahme dieses Kapitels. Was nicht angekreuzt ist, zählt nicht.
2. **Das Antwortschema:** Kernaussage, Begründung, Beleg im eigenen Code, wenn passend ein Grenzfall. Ein bloßes „Ja“ oder „Nein“ löst fast immer die Nachfrage „Warum?“ aus.
3. **Verzweigungen und Schleifen:** `else` ist freiwillig, höchstens eines je `if`. `break` wirkt auf Schleifen und `switch`, nie auf ein `if`. `switch` lässt sich immer als `if` schreiben, umgekehrt nur bei Gleichheit mit festen Werten. Schleifenarten sind austauschbar, `do-while` läuft mindestens einmal.
4. **Methoden und Eingabe:** Parameter bekommen Kopien der Werte. `void` betrifft nur den Rückgabewert. Mehrere Ergebnisse liefert man als Array. `berechne(i++)` übergibt den alten Wert und erhöht `i`, `berechne(i + 1)` ändert `i` nicht. `hasNextInt()` prüft nur, ungültige Token entfernt man mit `next()`.
5. **Rekursion:** Fundiertheit heißt Basisfall vorhanden, Fortschritt heißt Basisfall wird erreicht. Aufrufe und Formen eines Fraktals zählt man in einer Tabelle Ebene für Ebene. Ob es zusätzliche Aufrufe ohne Zeichnung gibt, hängt davon ab, wo die Größe geprüft wird.
6. **Arrays:** Eine Array-Variable enthält einen Verweis. Zuweisung kopiert den Verweis, `==` vergleicht Verweise. Die Länge ist fest, kopiert wird mit `new` und einer Schleife. Ein Parameter neu zuzuweisen wirkt nicht beim Aufrufer.
7. **Variationen:** Auftrag wiederholen, betroffene Stellen finden, nur diese ändern, mit einem Grenzfall testen. Beim Umdrehen von Schleifen beide Enden prüfen, beim Umbau zur Rückgabe sammeln statt `return` in der Schleife.
8. **Code erklären:** vom Zweck über Schnittstelle und Blöcke zu den heiklen Stellen. Rückfragen beantwortet man, indem man einen kleinen Fall laut durchspielt.
:::

### Die häufigsten Fehler

Jeder Fehler steht mit einer Aufgabe, die ihn gezielt trainiert. Wenn dir ein Fehler bekannt vorkommt, löse die genannte
Aufgabe noch einmal.

1. **Nur „Ja“ oder „Nein“ ohne Begründung.** Training: „Die beste Antwort auswählen“ in
   [22.1 So läuft das Feedbackgespräch ab](/lernen/ep1/feedbackgespraech/so-laeuft-das-feedbackgespraech-ab).
2. **Verbotene Klassen aus fremdem oder KI-Code.** Training: „Erlaubte und verbotene Klassen“ in
   [22.1 So läuft das Feedbackgespräch ab](/lernen/ep1/feedbackgespraech/so-laeuft-das-feedbackgespraech-ab).
3. **„`break` beendet das `if`“.** Training: „Welche Zeilen kompilieren nicht?“ in
   [22.2 Zusatzfragen zu Verzweigungen, Schleifen und Datentypen](/lernen/ep1/feedbackgespraech/zusatzfragen-zu-verzweigungen-schleifen-und-datentypen).
4. **`i++` und `++i` verwechselt.** Training: „i++ und ++i“ in
   [22.2 Zusatzfragen zu Verzweigungen, Schleifen und Datentypen](/lernen/ep1/feedbackgespraech/zusatzfragen-zu-verzweigungen-schleifen-und-datentypen). Dazu „Argumente mit i++,
   i + 1 und ++i“ in [22.3 Zusatzfragen zu Methoden und Eingabe](/lernen/ep1/feedbackgespraech/zusatzfragen-zu-methoden-und-eingabe).
5. **„Eine `void`-Methode hat keine Parameter“.** Training: „Parameter, void und lokale Variablen“ in
   [22.3 Zusatzfragen zu Methoden und Eingabe](/lernen/ep1/feedbackgespraech/zusatzfragen-zu-methoden-und-eingabe).
6. **`sc.next()` vergessen, Endlosschleife bei falscher Eingabe.** Training: „Was passiert ohne sc.next()?“ in
   [22.3 Zusatzfragen zu Methoden und Eingabe](/lernen/ep1/feedbackgespraech/zusatzfragen-zu-methoden-und-eingabe).
7. **Aufrufe und gezeichnete Formen gleichgesetzt.** Training: „Ein Muster mit drei Selbstaufrufen“ in
   [22.4 Zusatzfragen zur Rekursion](/lernen/ep1/feedbackgespraech/zusatzfragen-zur-rekursion).
8. **Zuerst zeichnen, dann rekursiv aufrufen**, obwohl die großen Formen oben liegen sollen. Training: „Gesprächsrunde
   zu Blatt 3“ in den [Prüfungsaufgaben](/lernen/ep1/feedbackgespraech/pruefungsaufgaben).
9. **Kopie mit `=` und Parameter neu zugewiesen.** Training: „Verweise verfolgen“ in
   [22.5 Zusatzfragen zu Arrays und Referenzen](/lernen/ep1/feedbackgespraech/zusatzfragen-zu-arrays-und-referenzen).
10. **Länge mit `length = …` ändern oder ein `double` als Index.** Training: „Welche Array-Zeilen kompilieren nicht?“ in
    [22.5 Zusatzfragen zu Arrays und Referenzen](/lernen/ep1/feedbackgespraech/zusatzfragen-zu-arrays-und-referenzen).
11. **Beim Umdrehen einer Schleife nur den Startwert getauscht.** Training: „Eine Schleife umdrehen“ in
    [22.6 Variationsaufträge: Ändere deinen Code](/lernen/ep1/feedbackgespraech/variationsauftraege-aendere-deinen-code).
12. **`return` in der Schleife beim Umbau zur Rückgabe.** Training: „Ohne Vokale, jetzt als Rückgabe“ in
    [22.6 Variationsaufträge: Ändere deinen Code](/lernen/ep1/feedbackgespraech/variationsauftraege-aendere-deinen-code).
13. **Vorlesen statt erklären.** Training: „Den Zweck in einem Satz“ in
    [22.7 Erkläre deinen Code: Zweck, Ablauf und Rückfragen](/lernen/ep1/feedbackgespraech/erklaere-deinen-code-zweck-ablauf-und-rueckfragen).
14. **Behauptungen über Sonderfälle, ohne sie durchzuspielen.** Training: „Rückfragen zu einer Suche“ und „Sonderfälle
    ausprobieren“ in [22.7 Erkläre deinen Code: Zweck, Ablauf und Rückfragen](/lernen/ep1/feedbackgespraech/erklaere-deinen-code-zweck-ablauf-und-rueckfragen).

### Selbstcheck zu den Lernzielen

Schätze für jedes Lernziel ein, wie sicher du bist: **1** = noch unsicher, **2** = meistens richtig, **3** = sicher, auch
unter Zeitdruck. Vergleiche danach mit deinen Ergebnissen in den Aufgaben. Wo du dich bei 3 eingeschätzt hast, aber
Fehler machst, liegt deine wichtigste Baustelle.

1. Ablauf und Bewertung des Gesprächs kennen, nach dem Antwortschema antworten.
2. Zusatzfragen zu Verzweigungen, Schleifen, Literalen und Casts beantworten.
3. Zusatzfragen zu Methoden, Parametern, Überladen und Scanner beantworten.
4. Basisfall und Fortschritt benennen, Aufrufe und Formen eines Fraktals zählen.
5. Zusatzfragen zu Arrays und Verweisen beantworten.
6. Variationsaufträge in wenigen Minuten umsetzen und testen.
7. Code in Schichten erklären und Rückfragen durch Durchspielen beantworten.
8. Fehler in Code und Antworten finden, auch in KI-Ergebnissen.

**Vor jedem Gespräch:** Geh für jede angekreuzte Aufgabe die Zusatzfragen des Blatts durch und sag die Antworten einmal
laut. Erkläre dann jede Methode in den fünf Schichten aus [22.7 Erkläre deinen Code: Zweck, Ablauf und Rückfragen](/lernen/ep1/feedbackgespraech/erklaere-deinen-code-zweck-ablauf-und-rueckfragen).
Überlege dir zu jeder Methode einen Variationsauftrag und wie du ihn umsetzen würdest. Die Algorithmen aus
[Kapitel 17 „Algorithmen und Komplexität“](/lernen/ep1/komplexitaet), [Kapitel 18 „Suchen“](/lernen/ep1/suchen) und
[Kapitel 19 „Sortieren“](/lernen/ep1/sortieren) kamen auf den Blättern von 2021 und 2023 nicht vor. Früher wurden sie
vor allem im TUWEL-Test geprüft, darum übst du sie in
[Kapitel 21 „Quiz-Werkstatt: Auswahl, Richtig/Falsch und Lückentext“](/lernen/ep1/quiz).

## Mündliche Prüfung: Generalprobe für das Gespräch

Die Karten sind eine Generalprobe. Formuliere zuerst laut eine eigene Antwort in ganzen Sätzen, nach dem Schema
Kernaussage, Begründung, Beleg. Decke erst dann die Musterantwort auf und vergleiche sie mit den Kernpunkten.

```karten
- id: fg-karte-ablauf
  frage: Wie läuft das Feedbackgespräch ab, und wie entstehen die Punkte für ein Blatt?
  antwort: |
    Ich lade mein Projekt hoch und kreuze in TUWEL die gelösten Aufgaben an. Im Gespräch erkläre ich meine Lösung,
    beantworte die Zusatzfragen der angekreuzten Aufgaben und setze vielleicht eine kleine Änderung um (das ist eine
    Annahme). Nach den VoWi-Berichten seit etwa 2024 wird das Gespräch in Prozent bewertet und mit dem Anteil der angekreuzten Aufgaben multipliziert.
    Was ich nicht ankreuze, bringt keine Punkte. Was ich ankreuze, muss ich erklären können.
  kernpunkte:
    - abgeben und ankreuzen
    - erklären, Zusatzfragen, Variation
    - Prozent mal angekreuzter Anteil
- id: fg-karte-schema
  frage: Warum reicht ein „Ja“ oder „Nein“ auf eine Zusatzfrage nicht, und wie sieht eine gute Antwort aus?
  antwort: |
    Ein bloßes Ja oder Nein kann geraten sein. Die Tutorin will sehen, dass ich den Grund kenne. Darum antworte ich mit
    einer Kernaussage, einer Begründung, also dem Mechanismus von Java, und einem Beleg in meinem eigenen Code. Wenn es
    passt, nenne ich noch einen Grenzfall. Das dauert eine halbe Minute und nimmt die Nachfrage „Warum?“ vorweg.
  kernpunkte:
    - Ja oder Nein kann geraten sein
    - Kernaussage, Begründung, Beleg
    - Grenzfall wenn passend
- id: fg-karte-else-break
  frage: Darf ein `if` ohne `else` stehen, und was bewirkt ein `break` in einem `if`?
  antwort: |
    Ein `if` darf ohne `else` stehen, und es hat höchstens ein `else`. Ein `else if` ist ein neues `if` im `else`-Zweig.
    Ein `break` beendet die innerste Schleife oder `switch`-Anweisung, in der es steht. Auf das `if` selbst wirkt es nicht.
    Steht es außerhalb jeder Schleife und jedes `switch`, meldet der Compiler einen Fehler.
  kernpunkte:
    - else freiwillig, höchstens eines
    - break wirkt auf Schleife oder switch
    - sonst Compilerfehler
- id: fg-karte-switch
  frage: Warum lässt sich nicht jede `if`-Kette als `switch` schreiben?
  antwort: |
    Ein `case` prüft nur auf Gleichheit mit einem festen Wert, und nur Typen wie `int`, `char` oder `String` sind erlaubt.
    Bereiche wie `punkte >= 90` oder Vergleiche mit `double` gehen darum nicht. Umgekehrt lässt sich jedes `switch` als
    `if`-Kette schreiben. Ohne `break` läuft Java in den nächsten `case` weiter. Ein `default` ist freiwillig.
  kernpunkte:
    - case nur Gleichheit mit Konstante
    - keine Bereiche, kein double
    - switch zu if geht immer
- id: fg-karte-schleifen
  frage: Sind die Schleifenarten austauschbar, und macht `++i` statt `i++` im Kopf einer `for`-Schleife einen Unterschied?
  antwort: |
    Ja, `for` und `while` lassen sich ineinander umbauen, indem man Startwert, Bedingung und Schritt verschiebt. Bei
    `do-while` muss man beachten, dass der Rumpf mindestens einmal läuft. Im Kopf der `for`-Schleife ist `++i` dasselbe
    wie `i++`, weil der Wert des Ausdrucks nicht verwendet wird. Einen Unterschied gibt es nur, wenn man den Wert benutzt,
    etwa in `a = i++`.
  kernpunkte:
    - Startwert, Bedingung, Schritt verschieben
    - do-while mindestens einmal
    - im Kopf kein Unterschied
- id: fg-karte-cast
  frage: Wann wandelt Java einen Wert automatisch um, und wann braucht man einen Cast?
  antwort: |
    Automatisch, wenn nichts verloren geht, zum Beispiel von `int` nach `double` oder von `char` nach `int`. Ein Cast ist
    nötig, wenn Information verloren gehen kann, etwa von `double` nach `int`. Der Cast schneidet dann den
    Nachkommaanteil ab, er rundet nicht. `(int) 3.99` ist 3. Auch `char` plus `int` ergibt ein `int`, das man mit
    `(char)` zurückwandelt.
  kernpunkte:
    - automatisch ohne Verlust
    - Cast bei möglichem Verlust
    - (int) schneidet ab
- id: fg-karte-methoden
  frage: Kann eine Methode mehrere Rückgabewerte haben, und darf eine `void`-Methode Parameter haben?
  antwort: |
    Eine Methode liefert mit `return` höchstens einen Wert, ihr Kopf nennt genau einen Rückgabetyp oder `void`. Brauche ich zwei Werte,
    gebe ich ein Array zurück, zum Beispiel `{quotient, rest}`. Das ist dann ein Rückgabewert, der zwei Zahlen enthält.
    `void` heißt nur „kein Rückgabewert“. Parameter darf eine `void`-Methode beliebig viele haben, wie
    `druckeZeile(char zeichen, int anzahl)`.
  kernpunkte:
    - höchstens ein Rückgabewert
    - mehrere Werte als Array
    - void betrifft nicht die Parameter
- id: fg-karte-inkrement
  frage: Ist `berechne(i + 1)` dasselbe wie `berechne(i++)`?
  antwort: |
    Nein. `i + 1` berechnet den nächsten Wert und übergibt ihn, `i` selbst bleibt gleich. `i++` übergibt den alten Wert
    von `i` und erhöht `i` danach um 1. Bei `i = 4` bekommt `berechne` also 5 beziehungsweise 4. In einer Rekursion ist
    `berechne(n++)` gefährlich, weil derselbe Wert noch einmal übergeben wird und der Fortschritt fehlt.
  kernpunkte:
    - i + 1 ändert i nicht
    - i++ übergibt alten Wert
    - Rekursion ohne Fortschritt
- id: fg-karte-scanner
  frage: Wozu muss man eine falsche Eingabe aus dem Puffer des Scanners holen?
  antwort: |
    `hasNextInt()` prüft nur, ob das nächste Token eine ganze Zahl ist. Es liest nichts und entfernt nichts. Ein
    ungültiges Token wie `abc` bleibt darum vorne im Puffer liegen. Ohne `sc.next()` prüft die Schleife immer wieder
    dasselbe Token und endet nie. Mit `sc.next()` hole ich es heraus und kann die nächste Eingabe prüfen.
  kernpunkte:
    - hasNextInt prüft nur
    - Token bleibt im Puffer
    - ohne next Endlosschleife
- id: fg-karte-fundiert
  frage: Was bedeuten Fundiertheit und Fortschritt bei einer Rekursion?
  antwort: |
    Fundiertheit heißt, es gibt mindestens einen Basisfall, der ohne Selbstaufruf gelöst wird. Fortschritt heißt, jeder
    Selbstaufruf kommt diesem Basisfall näher, meist weil ein Argument kleiner wird, etwa `n / 10` oder
    `s.substring(1)`. Nur beides zusammen garantiert, dass die Rekursion endet. Fehlt der Fortschritt, bricht das
    Programm mit einem `StackOverflowError` ab.
  kernpunkte:
    - Basisfall ohne Selbstaufruf
    - jeder Aufruf näher am Basisfall
    - beides nötig für das Ende
- id: fg-karte-fraktal
  frage: Wie bestimmst du, wie oft deine Fraktal-Methode aufgerufen wird, und warum ist das nicht immer die Zahl der Quadrate?
  antwort: |
    Ich lege eine Tabelle mit Ebene, Seitenlänge und Zahl der Aufrufe an. Jede Ebene hat so viele Aufrufe wie die vorige
    mal die Zahl der Selbstaufrufe. Steht der Basisfall am Anfang der Methode, gibt es eine zusätzliche Ebene mit
    Aufrufen, die nur prüfen und nichts zeichnen. Wird die Größe vor dem Selbstaufruf geprüft, sind Aufrufe und Quadrate
    gleich. Die Antwort muss also zu meinem Code passen.
  kernpunkte:
    - Tabelle Ebene für Ebene
    - Faktor gleich Zahl der Selbstaufrufe
    - Lage der Prüfung entscheidet
- id: fg-karte-arrays
  frage: Welchen Typ muss ein Array-Index haben, wie änderst du die Länge eines Arrays, und wie kopierst du es?
  antwort: |
    Der Index muss ein `int` sein, `byte`, `short` und `char` werden automatisch umgewandelt, `long` und `double` nicht.
    Die Länge ist beim Erzeugen fest, `length` ist unveränderlich. Ich lege ein neues Array an und kopiere die Werte. Kopieren
    heißt immer `new` mit derselben Länge und eine Schleife, die Element für Element überträgt. `kopie = original` kopiert
    nur den Verweis.
  kernpunkte:
    - Index int, kein long oder double
    - Länge fest, neues Array
    - Kopie mit new und Schleife
- id: fg-karte-gleich
  frage: Warum ist es meistens nicht sinnvoll, zwei Arrays oder zwei Strings mit `==` zu vergleichen?
  antwort: |
    Arrays und Strings sind Objekte, ihre Variablen enthalten Verweise. `==` vergleicht diese Verweise, also ob beide auf
    dasselbe Objekt zeigen. Zwei getrennte Arrays mit gleichem Inhalt ergeben `false`. Bei Strings vergleicht man den
    Inhalt mit `equals`, wie in [2.7 String-Methoden und der Vergleich mit equals](/lernen/ep1/ausdruecke/string-methoden-und-der-vergleich-mit-equals).
    Bei Arrays vergleicht man Länge und Elemente in einer Schleife, wie in
    [12.5 Referenzen: zwei Namen für dasselbe Array](/lernen/ep1/arrays/referenzen-zwei-namen-fuer-dasselbe-array).
  kernpunkte:
    - Variablen enthalten Verweise
    - == prüft dasselbe Objekt
    - equals oder elementweise Schleife
- id: fg-karte-parameter-array
  frage: Warum braucht eine Methode, die ein Array befüllt, kein `return`, während `feld = new int[5]` in der Methode nichts bewirkt?
  antwort: |
    Java übergibt immer eine Kopie des Werts, wie bei `int`-Parametern in
    [6.2 Parameter: Werte an eine Methode übergeben](/lernen/ep1/methoden/parameter-werte-an-eine-methode-uebergeben). Bei einem Array ist dieser Wert ein
    Verweis. Die Kopie zeigt auf dasselbe Array, darum sieht der Aufrufer alles, was die Methode hineinschreibt. Weist die
    Methode ihrem Parameter aber ein neues Array zu, biegt sie nur ihre eigene Kopie des Verweises um. Der Verweis des
    Aufrufers bleibt, wie er war.
  kernpunkte:
    - Kopie des Verweises
    - Inhalt ändern ist sichtbar
    - Parameter umbiegen nicht
- id: fg-karte-variation
  frage: Wie gehst du vor, wenn du im Gespräch deinen Code ändern sollst?
  antwort: |
    Ich wiederhole den Auftrag in eigenen Worten und nenne die neue Sollausgabe für ein kleines Beispiel. Dann suche ich die
    betroffenen Stellen, bei Schleifen meist Startwert, Bedingung und Schritt. Ich ändere nur diese Stellen und teste mit
    einem Grenzfall, etwa der Intervallgrenze oder dem leeren String. Beim Umdrehen einer Schleife prüfe ich beide Enden.
  kernpunkte:
    - Auftrag und Sollausgabe wiederholen
    - Stellen finden, nur diese ändern
    - mit Grenzfall testen
- id: fg-karte-erklaeren
  frage: Wie erklärst du eine Methode, statt sie nur vorzulesen?
  antwort: |
    Ich beginne mit dem Zweck in einem Satz ohne Java-Wörter. Dann nenne ich Parameter, Rückgabe und Vorbedingung. Danach
    beschreibe ich die Blöcke des Codes und wozu jeder dient. Einzelne Zeilen erkläre ich nur an heiklen Stellen wie
    Schleifengrenzen und Sonderfällen. Zum Schluss zeige ich einen kurzen Durchlauf mit konkreten Werten. Rückfragen
    beantworte ich, indem ich einen kleinen Fall laut durchspiele.
  kernpunkte:
    - Zweck zuerst
    - Schnittstelle, dann Blöcke
    - heikle Stellen durchspielen
- id: fg-karte-ki
  frage: Woran erkennst du typische Probleme in Code oder Antworten, die eine KI erzeugt hat?
  antwort: |
    Ich prüfe den Code gegen die Regeln des Blatts: nur erlaubte Klassen, bei Rekursion keine Schleifen, keine
    Klassenvariablen, keine Hilfsmethoden. Dann spiele ich ihn mit kleinen Werten durch, auch mit zwei Aufrufen
    hintereinander, weil Klassenvariablen ihren Wert behalten. Antworten auf Zusatzfragen prüfe ich mit einem kleinen
    Gegenbeispiel. Abgeben darf ich nur, was ich selbst erklären kann.
  kernpunkte:
    - Regeln des Blatts prüfen
    - mit kleinen Werten durchspielen
    - nur Erklärbares abgeben
```
