---
nummer: 1
titel: Werkzeuge, erstes Programm und Kursregeln
kurz: Was ein Programm ist, wie aus Quelltext eine Ausgabe wird, IntelliJ, Hello World Zeile für Zeile, Kommentare, Fehlermeldungen lesen, der Kursmodus 2026W und das erste Bild mit CodeDraw.
teil: grundlagen
stunden: 3
pruefungsgewicht: 1
voraussetzungen: []
lernziele:
  - den Weg eines Java-Programms vom Quelltext über den Compiler (javac) zum Bytecode und zur Ausführung in der JVM beschreiben und die Dateiarten .java und .class richtig zuordnen
  - in IntelliJ ein Java-Projekt anlegen oder öffnen, eine Klasse mit main-Methode erstellen, das Programm starten und die Regel „Klassenname gleich Dateiname“ anwenden
  - den Aufbau eines Hello-World-Programms Zeile für Zeile erklären (Klasse, main-Methode, Anweisung, Klammern, Strichpunkt, Anführungszeichen) und fehlende Teile ergänzen
  - die Konsolenausgabe von Programmen mit print und println Zeichen für Zeichen vorhersagen und Programme schreiben, die eine vorgegebene Ausgabe exakt erzeugen
  - Zeilen- und Blockkommentare korrekt setzen, auskommentierten Code erkennen und Code durch Einrückung und Kommentare lesbar machen
  - Compilerfehler, Laufzeitfehler und logische Fehler unterscheiden, eine Fehlermeldung nach Datei, Zeile und Ursache lesen und den Fehler beheben
  - die Bewertungsregeln von EP1 in Kompetenzstufe K1 (2026W) anwenden, Gesamtpunkte und Note berechnen und eine Abgabe nach den Regeln der Aufgabenblätter vorbereiten
  - CodeDraw in ein Projekt einbinden und ein Bild aus Rechtecken, Kreisen und Linien im Pixel-Koordinatensystem (Ursprung links oben, y nach unten) zeichnen
---

**Worum geht es?** In diesem Kapitel schreibst du dein erstes Programm. Du brauchst dafür kein
Vorwissen. Wir klären zuerst, was ein Programm überhaupt ist und was zwischen dem Tippen und der
Ausgabe am Bildschirm passiert. Danach richtest du deine Werkzeuge ein: das Java-Entwicklungspaket
(JDK) und die Entwicklungsumgebung IntelliJ. Dann lesen wir das kleinste Java-Programm Zeichen für
Zeichen. Am Ende zeichnest du mit der Bibliothek CodeDraw dein erstes Bild.

**Was kommt in der Prüfung?** EP1 ist die Lehrveranstaltung „Einführung in die Programmierung 1“ an
der TU Wien. Ein **Aufgabenblatt** ist eine Sammlung von Programmieraufgaben, die du zu Hause löst und
abgibst. Dieses Kapitel bereitet vor allem die **Abgabe von Aufgabenblatt 1** vor. Dort zählt, dass
dein Projekt **kompiliert**, also ohne Fehler übersetzt werden kann. Außerdem muss die Ausgabe exakt
stimmen, und du musst die Regeln für Dateinamen und Ordner einhalten. Fehlermeldungen lesen brauchst du
in jedem Teil der Lehrveranstaltung, besonders im **Test** am Rechner. Dort hast du niemanden, der dir
den Fehler zeigt. Außerdem lernst du den Bewertungsmodus von EP1 im Wintersemester 2026/27 genau
kennen. So weißt du von Anfang an, wofür du wie viele Punkte bekommst.

**Wie du dieses Kapitel liest:** Jede Überschrift ist eine eigene Seite. Lies langsam. Tippe jedes
Beispielprogramm selbst ab, statt es nur anzusehen. Beim Abtippen bemerkst du Zeichen, die du beim
Lesen übersiehst. Genau diese Zeichen entscheiden, ob ein Programm läuft.

:::vorwissen
Dieses Kapitel ist der Anfang des Kurses. Es setzt nur voraus, dass du einen Computer bedienen kannst:
Dateien öffnen, Ordner anlegen, ein ZIP-Archiv entpacken. Die folgenden sechs Fragen prüfen genau das.
Wenn eine Frage nicht klappt, ist das kein Problem. Die verlinkte Seite dieses Kapitels erklärt es.
:::

```aufgabe
id: wz-ein-endung
titel: Dateiendungen
niveau: 1
art: check
angabe: |
  Eine Datei heißt `Bericht.final.pdf`. Was ist ihre **Dateiendung**, also der Teil, an dem das
  Betriebssystem erkennt, welches Programm die Datei öffnet?
  (Warum das für Java wichtig ist, steht in [1.1 Was ist ein Programm?](/lernen/ep1/werkzeuge/was-ist-ein-programm))
teile:
  - typ: auswahl
    optionen:
      - "`.final`"
      - "`.pdf`"
      - "`Bericht`"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Die Endung ist immer der Teil nach dem **letzten** Punkt. Punkte davor gehören zum Namen.
      - wert: 2
        meldung: Das ist der Anfang des Dateinamens. Die Endung steht ganz am Schluss, nach dem letzten Punkt.
loesung: |
  Die Dateiendung ist der Teil nach dem **letzten** Punkt im Namen.
  ---
  Bei `Bericht.final.pdf` ist das `.pdf`. Java-Quelltexte erkennst du später genauso an der Endung `.java`.
```

```aufgabe
id: wz-ein-pfad
titel: In welchem Ordner liegt die Datei?
niveau: 1
art: check
angabe: |
  Ein **Pfad** beschreibt, in welchen Ordnern eine Datei liegt. Die Ordner werden durch `/`
  (oder unter Windows durch `\`) getrennt. Gegeben ist der Pfad `Uni/EP1/Blatt1/src/Aufgabe1.java`.
  In welchem Ordner liegt die Datei `Aufgabe1.java` **direkt**?
  (Die Ordner eines Java-Projekts erklärt [1.2 IntelliJ: Projekt anlegen und Programm starten](/lernen/ep1/werkzeuge/intellij-projekt-anlegen-und-programm-starten).)
teile:
  - typ: auswahl
    optionen:
      - "`Uni`"
      - "`Blatt1`"
      - "`src`"
    richtig: [2]
    fehler:
      - wert: 0
        meldung: "`Uni` ist der äußerste Ordner. Die Datei liegt mehrere Ebenen tiefer. Direkt über ihr steht der Ordner unmittelbar vor dem Dateinamen."
      - wert: 1
        meldung: "`Blatt1` enthält den Ordner `src`, und erst darin liegt die Datei. Schau auf den Ordnernamen direkt vor dem Dateinamen."
loesung: |
  Ein Pfad liest sich von außen nach innen: `Uni` enthält `EP1`, das enthält `Blatt1`, und so weiter.
  ---
  Direkt vor dem Dateinamen steht `src`. Dort liegt `Aufgabe1.java`.
```

```aufgabe
id: wz-ein-gross-klein
titel: Groß- und Kleinschreibung
niveau: 1
art: check
angabe: |
  Beurteile die Aussagen. (Warum das in Java zählt, zeigt [1.3 Hello World Zeile für Zeile](/lernen/ep1/werkzeuge/hello-world-zeile-fuer-zeile).)
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Für einen Menschen bedeuten „Hallo“ und „hallo“ meistens dasselbe.
        richtig: true
      - text: Für Java sind `Hallo` und `hallo` zwei verschiedene Namen.
        richtig: true
        erklaerung: Java unterscheidet Groß- und Kleinschreibung bei jedem Namen.
      - text: Ein Computer errät, was gemeint ist, wenn man sich vertippt.
        richtig: false
        erklaerung: Ein Computer führt genau das aus, was dasteht. Er rät nie.
    fehler:
      - wert: [r, f, f]
        meldung: Java unterscheidet Groß- und Kleinschreibung. `Hallo` und `hallo` sind für Java so verschieden wie zwei ganz andere Wörter.
loesung: |
  Menschen lesen über kleine Unterschiede hinweg. Ein Computer vergleicht Zeichen für Zeichen.
  ---
  Deshalb sind `Hallo` und `hallo` in Java verschiedene Namen, und ein Tippfehler wird nie „erraten“.
```

```aufgabe
id: wz-ein-zip
titel: Was ist ein ZIP-Archiv?
niveau: 1
art: check
angabe: |
  Die Vorlagen der Aufgabenblätter bekommst du als ZIP-Datei. Was ist eine ZIP-Datei?
  (Wie du eine Vorlage öffnest, steht in [1.2 IntelliJ: Projekt anlegen und Programm starten](/lernen/ep1/werkzeuge/intellij-projekt-anlegen-und-programm-starten).)
teile:
  - typ: auswahl
    optionen:
      - Ein Programm, das man direkt starten kann.
      - Eine einzige Datei, in die viele Dateien und Ordner verpackt und verkleinert sind.
      - Eine Textdatei mit Java-Code.
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Eine ZIP-Datei startet nichts. Sie ist eine Verpackung. Man muss sie erst entpacken, dann sieht man die Ordner darin.
      - wert: 2
        meldung: Java-Code steht in Dateien mit der Endung `.java`. Eine ZIP-Datei kann solche Dateien enthalten, ist aber selbst nur die Verpackung.
loesung: |
  ZIP ist ein Archivformat: Viele Dateien und Ordner werden zu einer einzigen, kleineren Datei verpackt.
  ---
  Vor der Arbeit entpackst du sie (Rechtsklick, „Alle extrahieren“ oder „Entpacken“). Erst dann öffnest du den entpackten Ordner.
```

```aufgabe
id: wz-ein-reihenfolge
titel: Anweisungen der Reihe nach
niveau: 1
art: check
angabe: |
  Ein Programm ist eine Folge von Anweisungen, die der Reihe nach ausgeführt werden. Bring die Schritte
  „Tee kochen“ in eine sinnvolle Reihenfolge.
  (Mehr dazu in [1.1 Was ist ein Programm?](/lernen/ep1/werkzeuge/was-ist-ein-programm))
teile:
  - typ: reihenfolge
    elemente:
      - Wasser in den Wasserkocher füllen.
      - Wasserkocher einschalten.
      - Teebeutel in die Tasse legen.
      - Heißes Wasser in die Tasse gießen.
      - Drei Minuten warten.
      - Teebeutel herausnehmen.
loesung: |
  Jeder Schritt braucht das Ergebnis des vorigen: Ohne Wasser kann der Kocher nichts erhitzen.
  ---
  Genauso führt Java Anweisungen strikt von oben nach unten aus. Vertauschte Anweisungen ergeben ein anderes Ergebnis.
```

```aufgabe
id: wz-ein-klammern
titel: Klammerpaare
niveau: 1
art: check
angabe: |
  In Java gehört zu jeder öffnenden Klammer genau eine schließende. Paare dürfen ineinander liegen,
  aber sich nicht überkreuzen. Welche Zeichenfolge ist **richtig** geklammert?
  (Klammern in Java erklärt [1.3 Hello World Zeile für Zeile](/lernen/ep1/werkzeuge/hello-world-zeile-fuer-zeile).)
teile:
  - typ: auswahl
    optionen:
      - "`{ ( } )`"
      - "`{ ( ) }`"
      - "`{ ( ) `"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Hier überkreuzen sich die Paare. Die runde Klammer wurde innen geöffnet, also muss sie zuerst wieder zugehen.
      - wert: 2
        meldung: Die geschweifte Klammer wird geöffnet, aber nie geschlossen. Zähle öffnende und schließende Klammern jeder Art.
loesung: |
  Eine Klammer, die später geöffnet wurde, muss früher geschlossen werden (innen zuerst).
  ---
  Nur `{ ( ) }` erfüllt das: Die runde Klammer liegt vollständig in der geschweiften.
```

## Was ist ein Programm?

```aufgabe
id: wz-prog-check
titel: Genau genug für einen Computer?
niveau: 1
art: check
angabe: |
  Welche Anweisung könnte ein Computer ohne Rückfrage ausführen?
teile:
  - typ: auswahl
    optionen:
      - Schreib etwas Nettes auf den Bildschirm.
      - Schreib den Text Hallo auf den Bildschirm.
      - Mach das Fenster schöner.
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Was ist „etwas Nettes“? Ein Computer hat keinen Geschmack. Er braucht genau den Text, den er schreiben soll.
      - wert: 2
        meldung: „Schöner“ ist keine genaue Angabe. Ein Computer braucht Farben, Größen und Positionen als exakte Werte.
loesung: |
  Ein Computer versteht nur Anweisungen, die nichts offen lassen.
  ---
  Nur „Schreib den Text Hallo auf den Bildschirm“ legt genau fest, was passieren soll.
```

Ein Computer kann nur sehr einfache Dinge: zwei Zahlen addieren, eine Zahl speichern, ein Zeichen
anzeigen. Das macht er aber milliardenfach pro Sekunde und ohne je müde zu werden. Damit er etwas
Nützliches tut, muss ihm jemand **genau** sagen, was er der Reihe nach tun soll.

Ein **Programm** ist eine solche Folge von Anweisungen. Eine **Anweisung** ist ein einzelner,
eindeutiger Befehl, zum Beispiel „schreib den Text Hallo auf den Bildschirm“. Der Computer führt die
Anweisungen der Reihe nach aus, von oben nach unten. Ein Kochrezept ist ein gutes Bild dafür. Es gibt
aber einen wichtigen Unterschied: Ein Mensch denkt beim Kochen mit. Ein Computer denkt nie mit. Er tut
genau das, was dasteht, auch wenn es unsinnig ist.

Hier ist ein **Nichtbeispiel**: „Mach mir etwas Gutes zu essen“ ist kein Programm. Was ist „gut“?
Welche Zutaten? Ein Computer kann mit so einer Bitte nichts anfangen.

### Warum es Programmiersprachen gibt

Der Prozessor eines Computers versteht nur **Maschinensprache**: lange Folgen von Nullen und Einsen.
Darin kann ein Mensch kaum arbeiten. Deutsch wiederum ist für Computer zu ungenau, weil viele Sätze
mehrdeutig sind. Eine **Programmiersprache** wie Java ist der Kompromiss dazwischen. Sie hat feste
Wörter und strenge Regeln wie eine Maschine, ist aber für Menschen lesbar.

Den Text, den du in Java schreibst, nennt man **Quelltext** (auch Quellcode oder englisch *source
code*). Er steht in einer gewöhnlichen Textdatei mit der Endung `.java`. Bevor der Computer ihn
ausführen kann, muss ein Übersetzungsprogramm ihn umwandeln. Dieses Programm heißt **Compiler**
(sprich „kom-PEI-ler“, vom englischen *to compile*, zusammenstellen). Der Java-Compiler heißt `javac`.

:::definition[Quelltext, Compiler, Bytecode und JVM]
- **Quelltext:** das Programm, so wie du es schreibst, in einer Datei `Name.java`.
- **Compiler (`javac`):** prüft den Quelltext auf Regelverstöße und übersetzt ihn. Findet er einen Verstoß, meldet er einen **Compilerfehler** und erzeugt nichts.
- **Bytecode:** das Ergebnis der Übersetzung, in einer Datei `Name.class`. Er ist keine Maschinensprache eines bestimmten Prozessors, sondern ein Zwischencode.
- **JVM** (*Java Virtual Machine*, „virtuelle Java-Maschine“): ein Programm, das den Bytecode liest und auf dem jeweiligen Computer ausführt. Gestartet wird sie mit dem Befehl `java`.
:::

```aufgabe
id: wz-prog-check-quelltext
titel: Welche Datei schreibst du selbst?
niveau: 1
art: check
angabe: |
  Welche der beiden Dateien `Hallo.java` und `Hallo.class` tippst du selbst, und welche erzeugt der Compiler?
teile:
  - typ: auswahl
    optionen:
      - "Ich schreibe `Hallo.java`, der Compiler erzeugt `Hallo.class`."
      - "Ich schreibe `Hallo.class`, der Compiler erzeugt `Hallo.java`."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Der Compiler übersetzt **vom** Quelltext **in** Bytecode. Quelltext hat die Endung `.java`.
loesung: |
  Quelltext (`.java`) schreibt ein Mensch.
  ---
  Bytecode (`.class`) erzeugt der Compiler `javac` daraus.
```

Das **JDK** (*Java Development Kit*) ist das Paket, das `javac`, `java` und alles Nötige enthält.
In diesem Kurs verwenden wir JDK 21. Warum der Umweg über Bytecode? Derselbe `.class`-Code läuft auf
Windows, macOS und Linux, solange dort eine JVM installiert ist. Man übersetzt also einmal und kann
das Ergebnis überall ausführen.

```text
 du tippst          javac prüft           java startet die JVM
     |               und übersetzt              |
     v                    v                     v
 Hallo.java  ------>  Hallo.class  ------>  Ausgabe auf der Konsole:
 (Quelltext)          (Bytecode)            Hallo Welt!
```

Die **Konsole** ist ein Textfenster, in dem ein Programm Text ausgibt. In IntelliJ heißt sie
„Run“-Fenster und erscheint unten am Bildschirm.

Die **Kommandozeile** (auch Terminal, unter Windows „Eingabeaufforderung“ oder „PowerShell“) ist ein
solches Textfenster, in das du selbst Befehle als Text tippst. Mit der Eingabetaste führst du den Befehl
aus. Die Befehle `javac` und `java` tippst du genau dort ein.

:::beispiel[Ein Programm auf der Kommandozeile übersetzen und starten]
Die Datei `Hallo.java` enthält ein fertiges Programm. Was es bedeutet, lernst du in
[1.3 Hello World Zeile für Zeile](/lernen/ep1/werkzeuge/hello-world-zeile-fuer-zeile).
Hier geht es nur um die drei Schritte.

1. **Übersetzen:** Im Ordner der Datei tippst du `javac Hallo.java`. Der Compiler liest den Quelltext. Er findet keinen Fehler und gibt deshalb gar nichts aus. Im Ordner liegt jetzt zusätzlich die Datei `Hallo.class`.
2. **Ausführen:** Du tippst `java Hallo`. Achte darauf: Hier steht der **Klassenname** ohne Endung. Das ist vorerst einfach der Name des Programms (was eine Klasse ist, erklärt [1.2 IntelliJ: Projekt anlegen und Programm starten](/lernen/ep1/werkzeuge/intellij-projekt-anlegen-und-programm-starten)). Die JVM sucht selbst nach `Hallo.class`.
3. **Ergebnis:** Auf der Konsole erscheint `Hallo Welt!`.

Zusammengefasst: `.java` hineinstecken, `.class` herausbekommen, `.class` ausführen.
:::

:::beispiel[Was der Compiler prüft und was nicht]
Angenommen, in `Hallo.java` fehlt ein Strichpunkt am Ende einer Anweisung. Dann meldet `javac`:

```text
Hallo.java:3: error: ';' expected
```

Das heißt: In Datei `Hallo.java`, Zeile 3, erwartet der Compiler einen Strichpunkt. Es entsteht
**keine** `.class`-Datei, und du kannst nichts ausführen.

Steht dagegen im Programm der Text `"Hallo Wlet!"` mit Tippfehler, meldet der Compiler nichts. Für ihn
ist das ein gültiger Text. Das Programm läuft und gibt den Tippfehler aus. Der Compiler prüft also die
**Form** des Programms, nicht, ob es das tut, was du wolltest.
:::

:::merke[Vom Quelltext zur Ausgabe]
1. **Schreiben:** Quelltext in `Name.java`.
2. **Übersetzen:** `javac Name.java` erzeugt `Name.class` (nur wenn kein Compilerfehler auftritt).
3. **Ausführen:** `java Name` startet die JVM, die den Bytecode ausführt.

IntelliJ erledigt Schritt 2 und 3 mit einem einzigen Klick. Es passiert aber genau dasselbe.
:::

:::achtung[Die Endung beim Starten mitgeschrieben]
Eine typische falsche Eingabe lautet:

```text
java Hallo.class
Error: Could not find or load main class Hallo.class
Caused by: java.lang.ClassNotFoundException: Hallo.class
```

Die JVM sucht eine Klasse namens `Hallo.class` und findet keine. Die zweite Zeile sagt dasselbe noch
einmal: Eine Klasse (*class*) mit diesem Namen wurde nicht gefunden (*not found*). Nach `java` steht der **Klassenname**
ohne Endung: `java Hallo`. Den Dateinamen mit Endung bekommt `javac`: `javac Hallo.java`.
(Seit Java 11 gibt es eine Ausnahme: `java Hallo.java` übersetzt und startet eine einzelne
Quelltextdatei in einem Schritt. In EP1 brauchst du das nicht.)
:::

:::achtung[Geändert, aber nicht neu übersetzt]
Du änderst in `Hallo.java` den Text von `"Hallo Welt!"` auf `"Servus!"`. Dann tippst du sofort
`java Hallo`. Die Ausgabe ist immer noch `Hallo Welt!`. Warum? Die JVM führt die **alte** Datei
`Hallo.class` aus. Erst `javac Hallo.java` erzeugt neuen Bytecode, danach erscheint `Servus!`.
Merke dir: Nach jeder Änderung neu übersetzen. IntelliJ tut das beim Starten automatisch.
:::

```aufgabe
id: wz-prog-schritte
titel: Die Schritte ordnen
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Bring die Schritte, mit denen aus einer Idee eine Ausgabe auf der Konsole wird, in die richtige Reihenfolge.
teile:
  - typ: reihenfolge
    elemente:
      - Quelltext in die Datei `Gruss.java` schreiben.
      - "`javac Gruss.java` aufrufen."
      - Der Compiler erzeugt `Gruss.class`.
      - "`java Gruss` aufrufen."
      - Die JVM führt den Bytecode aus, und die Ausgabe erscheint.
hinweise:
  - Was muss existieren, bevor der Compiler etwas übersetzen kann? Und was muss existieren, bevor die JVM etwas ausführen kann?
loesung: |
  Ohne Quelltext gibt es nichts zu übersetzen. Darum steht das Schreiben am Anfang.
  ---
  `javac` übersetzt und erzeugt die `.class`-Datei. Erst danach kann `java` den Bytecode ausführen.
```

```aufgabe
id: wz-prog-dateiart
titel: Welche Datei entsteht?
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Du rufst `javac Uhr.java` auf, und der Compiler meldet keinen Fehler. Welche **neue** Datei liegt danach im Ordner?
teile:
  - typ: auswahl
    optionen:
      - "`Uhr.class`"
      - "`Uhr.exe`"
      - "`Uhr.java`"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: "`.exe` ist ein Programmformat von Windows. Java erzeugt stattdessen Bytecode in einer `.class`-Datei, damit er auf jedem System mit JVM läuft."
      - wert: 2
        meldung: "`Uhr.java` ist der Quelltext. Den hast du selbst geschrieben, er ist nicht neu. Der Compiler erzeugt eine Datei mit anderer Endung."
hinweise:
  - Der Compiler übersetzt Quelltext in Bytecode. Wie heißt die Endung von Bytecode-Dateien?
loesung: |
  `javac` übersetzt den Quelltext `Uhr.java` in Bytecode.
  ---
  Bytecode steht in einer Datei mit der Endung `.class`, hier `Uhr.class`.
```

```aufgabe
id: wz-prog-befehle
titel: Die beiden Befehle ergänzen
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Die Datei `Wetter.java` enthält ein Programm mit der Klasse `Wetter`. Ergänze die beiden Befehle für die Kommandozeile.
teile:
  - typ: lueckentext
    text: |
      Übersetzen: ___ Wetter.java
      Ausführen: java ___
    luecken: [["javac"], ["Wetter"]]
    fehler:
      - wert: ["javac", "Wetter.class"]
        meldung: Nach `java` steht der **Klassenname** ohne Endung. Mit `.class` sucht die JVM eine Klasse, die „Wetter.class“ heißt, und findet sie nicht.
      - wert: ["java", "Wetter"]
        meldung: "`java` startet die JVM und kann keinen Quelltext übersetzen. Für das Übersetzen brauchst du den Compiler, und der heißt anders."
hinweise:
  - Der Compiler heißt fast wie der Startbefehl, hat aber einen Buchstaben mehr (c wie *compiler*).
  - Beim Ausführen gibst du den Klassennamen ohne Endung an.
loesung: |
  **Ansatz:** Übersetzen und Ausführen sind zwei verschiedene Programme des JDK.
  ---
  Übersetzen macht der Compiler: `javac Wetter.java` (Dateiname **mit** Endung).
  ---
  Ausführen macht die JVM: `java Wetter` (Klassenname **ohne** Endung). Probe: Danach erscheint die Ausgabe des Programms auf der Konsole.
```

```aufgabe
id: wz-prog-aussagen
titel: Aussagen über Compiler und JVM
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  Beurteile die vier Aussagen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Der Compiler findet jeden Tippfehler in einem Text, der ausgegeben werden soll.
        richtig: false
        erklaerung: Ein Text in Anführungszeichen ist für den Compiler gültig, egal was darin steht.
      - text: Wenn `javac` einen Fehler meldet, entsteht keine neue `.class`-Datei.
        richtig: true
        erklaerung: Bei einem Compilerfehler bricht die Übersetzung ab.
      - text: Dieselbe `.class`-Datei kann auf Windows und auf Linux ausgeführt werden, wenn dort eine JVM installiert ist.
        richtig: true
        erklaerung: Bytecode ist nicht an einen Prozessor gebunden. Das ist der Grund für den Zwischenschritt.
      - text: Mit `java Name.java` kann man nur Bytecode starten, nie Quelltext.
        richtig: false
        erklaerung: Seit Java 11 kann `java` eine einzelne Quelltextdatei direkt übersetzen und starten. In EP1 brauchst du das nicht, IntelliJ übernimmt das.
    fehler:
      - wert: [r, r, r, f]
        meldung: Der Compiler prüft nur die Form des Programms. Was zwischen Anführungszeichen steht, ist für ihn beliebiger Text. Einen Tippfehler darin findet er nicht.
hinweise:
  - Überlege bei jeder Aussage, ob es um die **Form** des Programms (Compiler) oder um das **Ausführen** (JVM) geht.
  - Für die letzte Aussage hilft es zu wissen, dass `java` seit Version 11 auch einzelne `.java`-Dateien annimmt.
loesung: |
  **Ansatz:** Der Compiler prüft Regeln der Sprache, die JVM führt aus.
  ---
  Aussage 1 ist falsch, weil ein Text in Anführungszeichen beliebigen Inhalt haben darf. Aussage 2 ist richtig: Ein Compilerfehler bricht die Übersetzung ab.
  ---
  Aussage 3 ist richtig, das ist der Sinn des Bytecodes. Aussage 4 ist falsch: `java Name.java` übersetzt und startet seit Java 11 eine einzelne Datei.
  Ergebnis der Reihe nach: falsch, richtig, richtig, falsch.
```

```aufgabe
id: wz-prog-alte-ausgabe
titel: Die Ausgabe ändert sich nicht
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Lena ändert in `Ampel.java` den ausgegebenen Text von `"Rot"` auf `"Gruen"` und speichert. Dann tippt
  sie `java Ampel`. Auf der Konsole steht weiterhin `Rot`. Was ist die Ursache?
teile:
  - typ: auswahl
    optionen:
      - Die Änderung wurde nicht gespeichert, weil Java gespeicherte Dateien sperrt.
      - Sie hat nicht neu übersetzt. Die JVM führt die alte `Ampel.class` aus.
      - Das Wort „Gruen“ enthält einen Fehler, deshalb ignoriert Java es.
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Java sperrt keine Dateien. Die Datei ist gespeichert. Die Frage ist, welche Datei die JVM eigentlich ausführt.
      - wert: 2
        meldung: Ein Text in Anführungszeichen ist für Java nie „falsch“. Hätte der Text einen Fehler, würde er trotzdem ausgegeben.
hinweise:
  - Welche Datei liest `java Ampel`, die `.java`- oder die `.class`-Datei?
  - Wann wird die `.class`-Datei erneuert?
loesung: |
  **Ansatz:** Nachverfolgen, welche Datei welcher Befehl liest.
  ---
  `java Ampel` liest `Ampel.class`. Diese Datei stammt vom letzten Aufruf von `javac`, also von vor der Änderung.
  ---
  Lösung: `javac Ampel.java` und danach `java Ampel`. Dann erscheint `Gruen`.
```

```aufgabe
id: wz-prog-bytecode-warum
titel: Warum der Umweg über Bytecode?
niveau: 3
lernziel: 0
kompetenz: begruenden
angabe: |
  Ein Mitstudent meint: „Der Bytecode ist ein unnötiger Umweg. Java sollte gleich Maschinensprache erzeugen.“
  Erkläre in zwei bis drei Sätzen, welchen Vorteil der Bytecode hat und was man dafür braucht.
teile:
  - typ: text
    muster: |
      Maschinensprache gehört zu einem bestimmten Prozessor und Betriebssystem. Ein Programm in Maschinensprache
      müsste man für jedes System neu übersetzen. Bytecode ist dagegen ein Zwischencode, den jede JVM ausführen kann.
      Man übersetzt also einmal, und dieselbe `.class`-Datei läuft auf Windows, macOS und Linux.
      Voraussetzung ist, dass auf dem Zielrechner eine JVM installiert ist.
hinweise:
  - Denke an drei Rechner mit verschiedenen Betriebssystemen, auf denen dasselbe Programm laufen soll.
  - Wer führt den Bytecode aus, und was muss deshalb auf jedem Rechner vorhanden sein?
loesung: |
  **Ansatz:** Vergleiche, wie oft man übersetzen muss.
  ---
  Mit Maschinensprache bräuchte man für jedes System eine eigene Übersetzung.
  ---
  Mit Bytecode übersetzt man einmal. Jede JVM führt denselben Bytecode aus. Der Preis: Auf jedem Rechner muss eine JVM installiert sein.
```

```aufgabe
id: wz-prog-gefuehrt
titel: Vom Tippen zur Ausgabe, Schritt für Schritt
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Du hast die Datei `Zaehler.java` geschrieben. Darin steht die Klasse `Zaehler`. Gib an, welchen Befehl du
  **zuerst** und welche Datei danach **neu** im Ordner liegt.
teile:
  - typ: lueckentext
    text: |
      Erster Befehl: ___
      Neue Datei: ___
    luecken: [["javac Zaehler.java"], ["Zaehler.class"]]
    fehler:
      - wert: ["java Zaehler", "Zaehler.class"]
        meldung: "`java Zaehler` kann noch nichts ausführen, weil es noch keinen Bytecode gibt. Zuerst muss der Compiler übersetzen."
hinweise:
  - Bevor etwas ausgeführt wird, muss es übersetzt sein.
  - Der Compiler heißt `javac` und bekommt den Dateinamen mit Endung.
gefuehrt:
  - text: Welches Programm des JDK übersetzt Quelltext in Bytecode? Gib seinen Namen ein.
    teil: { typ: lueckentext, text: "Das Programm heißt ___.", luecken: [["javac"]] }
    erklaerung: Der Compiler heißt `javac`. Das c am Ende steht für *compiler*.
  - text: Bekommt `javac` den Dateinamen mit oder ohne Endung?
    erklaerung: Mit Endung, also `javac Zaehler.java`. Der Compiler liest eine Datei.
  - text: Welche Endung hat die Datei, die der Compiler erzeugt?
    teil: { typ: lueckentext, text: "Zaehler.___", luecken: [["class"]] }
    erklaerung: Bytecode steht in `.class`-Dateien, hier `Zaehler.class`.
  - text: Wie startest du jetzt das Programm?
    erklaerung: Mit `java Zaehler`, also Klassenname ohne Endung. Die JVM sucht selbst nach `Zaehler.class`.
loesung: |
  **Ansatz:** Erst übersetzen, dann ausführen.
  ---
  Der erste Befehl ist `javac Zaehler.java`. Er prüft den Quelltext und übersetzt ihn.
  ---
  Danach liegt `Zaehler.class` im Ordner. Mit `java Zaehler` wird sie ausgeführt.
```

```reflexion
frage: Erkläre in eigenen Worten, warum ein Programm, das der Compiler ohne Fehler übersetzt, trotzdem das Falsche ausgeben kann.
antwort: |
  Der Compiler prüft nur, ob das Programm nach den Regeln der Sprache gebaut ist: Klammern, Strichpunkte,
  bekannte Namen. Ob die Anweisungen das tun, was ich wollte, kann er nicht wissen. Schreibe ich den falschen
  Text in Anführungszeichen oder vertausche zwei Anweisungen, ist das Programm formal richtig. Es tut nur
  etwas anderes, als ich wollte. Solche Fehler finde ich nur, wenn ich die Ausgabe mit dem Ziel vergleiche.
```

## IntelliJ: Projekt anlegen und Programm starten

```aufgabe
id: wz-ij-check
titel: Wer übersetzt beim Klick auf Start?
niveau: 1
art: check
angabe: |
  Du klickst in IntelliJ auf den grünen Startknopf. Welche zwei Schritte aus
  [1.1 Was ist ein Programm?](/lernen/ep1/werkzeuge/was-ist-ein-programm) passieren dabei?
teile:
  - typ: auswahl
    optionen:
      - Nur das Ausführen. Übersetzen muss man vorher selbst.
      - Erst übersetzen (javac), dann ausführen (java).
      - Nur das Speichern der Datei.
    richtig: [1]
    fehler:
      - wert: 0
        meldung: IntelliJ übersetzt vor jedem Start selbst. Genau deshalb siehst du dort nie eine veraltete Ausgabe.
      - wert: 2
        meldung: Speichern allein erzeugt keine Ausgabe. Der Startknopf löst die ganze Kette aus.
loesung: |
  Der Startknopf ruft zuerst den Compiler auf.
  ---
  Nur wenn das Übersetzen klappt, startet IntelliJ die JVM, und die Ausgabe erscheint im Run-Fenster.
```

Du kannst Java-Programme mit einem einfachen Texteditor und der Kommandozeile schreiben. Bequemer ist
eine **Entwicklungsumgebung**, englisch *IDE* (*Integrated Development Environment*). Sie vereint
Editor, Compiler und Konsole in einem Fenster. Sie färbt den Code ein und unterstreicht Fehler schon
beim Tippen. In EP1 arbeitest du mit **IntelliJ IDEA** von JetBrains. Die Vorlagen der Aufgabenblätter
sind IntelliJ-Projekte, und abgegeben wird ebenfalls ein IntelliJ-Projekt.

### Was du installieren musst

1. **IntelliJ IDEA** von der Seite jetbrains.com. Die kostenlose Ausgabe genügt für EP1.
2. **Ein JDK**, am besten Version 21. Am einfachsten lädst du es direkt in IntelliJ: Beim Anlegen eines Projekts gibt es im Feld „JDK“ den Eintrag „Download JDK“.

Ein **Projekt** ist ein Ordner, in dem alle Dateien eines Programms zusammen liegen. IntelliJ speichert
darin auch seine Einstellungen. Ein typisches Projekt sieht so aus:

```text
Aufgabenblatt1/            der Projektordner
├── .idea/                 Einstellungen von IntelliJ (nicht anfassen)
├── Aufgabenblatt1.iml     Moduldatei von IntelliJ (nicht anfassen)
├── lib/
│   └── CodeDraw.jar       eine Bibliothek, also fertiger Code (Lektion 1.8)
├── out/                   entsteht beim ersten Start: hier landen die .class-Dateien
└── src/                   "source": hier liegen deine .java-Dateien
    ├── Aufgabe1.java
    └── Aufgabe2.java
```

Was die Bibliothek CodeDraw im Ordner `lib` ist, erklärt
[1.8 CodeDraw einrichten und das erste Bild](/lernen/ep1/werkzeuge/codedraw-einrichten-und-das-erste-bild).

In einer Java-Datei steht eine **Klasse**. Eine Klasse ist vorerst einfach der Behälter, in dem dein
Programmcode steht. Jedes Java-Programm besteht aus mindestens einer Klasse. Sie beginnt mit
`public class Name` und umfasst alles bis zur passenden schließenden geschweiften Klammer.

:::definition[Klassenname gleich Dateiname]
Steht in einer Datei `public class Name`, dann **muss** die Datei `Name.java` heißen. Groß- und
Kleinschreibung zählen. Ein Klassenname besteht aus Buchstaben, Ziffern und `_`, beginnt nicht mit
einer Ziffer und enthält keine Leerzeichen. Üblich ist ein großer Anfangsbuchstabe, zum Beispiel
`Aufgabe1` oder `HelloWorld`.
:::

**Beispiel:** `public class Aufgabe1` in der Datei `Aufgabe1.java` ist richtig.
**Nichtbeispiel:** `public class Gruss` in der Datei `Hallo.java` ist falsch. Der Compiler meldet
`class Gruss is public, should be declared in a file named Gruss.java`. Ebenfalls falsch ist
`public class Aufgabe 1` mit Leerzeichen. Hier meldet der Compiler `'{' expected`, weil nach dem
Namen `Aufgabe` schon die Klammer kommen müsste.

```aufgabe
id: wz-ij-check-name
titel: Passender Dateiname
niveau: 1
art: check
angabe: |
  In einer Datei steht `public class Wuerfel`. Wie muss die Datei heißen?
teile:
  - typ: auswahl
    optionen:
      - "`wuerfel.java`"
      - "`Wuerfel.java`"
      - "`Wuerfel.class`"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Groß- und Kleinschreibung zählen. Der Klassenname beginnt mit großem W, also auch der Dateiname.
      - wert: 2
        meldung: "`.class` ist die Endung des Bytecodes. Quelltext steht in einer Datei mit der Endung `.java`."
loesung: |
  Dateiname = Klassenname + `.java`.
  ---
  Also `Wuerfel.java`, mit großem W.
```

:::beispiel[Ein neues Projekt mit einer eigenen Klasse]
So entsteht dein erstes eigenes Programm in IntelliJ:

1. **File → New → Project** wählen. Links „Java“ auswählen.
2. Einen Namen eingeben, zum Beispiel `Uebungen`. Bei „Build system“ „IntelliJ“ lassen.
3. Bei „JDK“ Version 21 wählen (oder „Download JDK“). Mit „Create“ bestätigen.
4. Links im Projektfenster mit der rechten Maustaste auf `src` klicken: **New → Java Class**.
5. Den Namen `Begruessung` eingeben und Enter drücken. IntelliJ legt `Begruessung.java` an und schreibt schon `public class Begruessung { }` hinein.
6. In die Klasse `psvm` tippen und die Tabulatortaste drücken. IntelliJ ergänzt die **Startmethode** `public static void main(String[] args) { }`. Eine Methode ist ein benannter Abschnitt mit Anweisungen. Die Startmethode heißt `main`, und dort beginnt das Programm. Jedes Wort dieser Zeile erklärt [1.3 Hello World Zeile für Zeile](/lernen/ep1/werkzeuge/hello-world-zeile-fuer-zeile).
7. Zwischen die geschweiften Klammern der Startmethode `sout` tippen und Tab drücken. Es erscheint `System.out.println();`. Zwischen die runden Klammern schreibst du `"Servus!"`.
8. Auf das grüne Dreieck links neben `main` klicken und „Run“ wählen.

Unten öffnet sich das Run-Fenster. Dort steht `Servus!` und darunter `Process finished with exit code 0`.
Diese letzte Zeile schreibt IntelliJ selbst. Exit code 0 bedeutet: Das Programm endete ohne Fehler.
:::

:::beispiel[Eine Vorlage aus TUWEL öffnen]
**TUWEL** ist die Lernplattform der TU Wien im Internet. Dort stellt EP1 Unterlagen bereit, und dort
gibst du deine Lösungen ab. Für jedes Aufgabenblatt bekommst du in TUWEL ein fertiges Projekt als ZIP-Datei.

1. Die ZIP-Datei entpacken. Es entsteht ein Ordner, zum Beispiel `Aufgabenblatt1`.
2. In IntelliJ **File → Open** wählen und **genau diesen Ordner** auswählen. Das ist der Ordner, in dem `src` und `.idea` liegen.
3. Links `src` aufklappen und `Aufgabe1.java` doppelt anklicken.
4. Ist oben ein gelber Balken „Project JDK is not defined“ zu sehen, dort auf „Setup SDK“ klicken und JDK 21 wählen.
5. Mit dem grünen Dreieck neben `main` starten.

Jede Datei `Aufgabe1.java`, `Aufgabe2.java` ist ein eigenes kleines Programm mit eigener `main`-Methode.
Du startest also jede Aufgabe einzeln.
:::

:::merke[Neues Programm in IntelliJ]
Rechtsklick auf `src` → New → Java Class → Name → `psvm` + Tab → `sout` + Tab → Text eintragen → grünes Dreieck.
:::

:::achtung[Datei umbenannt, Klasse nicht]
Du benennst im Dateimanager `Aufgabe1.java` in `Aufgabe1_fertig.java` um. In der Datei steht weiter
`public class Aufgabe1`. Beim Start meldet der Compiler:

```text
class Aufgabe1 is public, should be declared in a file named Aufgabe1.java
```

Benenne Dateien darum nie von Hand um. Bei Blattabgaben gilt sowieso: Dateinamen nicht ändern.
Musst du doch umbenennen, dann in IntelliJ mit Rechtsklick → Refactor → Rename. Das ändert Datei und
Klassenname gemeinsam.
:::

:::achtung[Kein grüner Startknopf, weil main falsch geschrieben ist]
Steht in der Klasse `public static void Main(String[] args)` mit großem M, zeigt IntelliJ keinen
grünen Startknopf. Auf der Kommandozeile meldet `java` beim Start:

```text
Error: Main method not found in class Hallo, please define the main method as:
   public static void main(String[] args)
or a JavaFX application class must extend javafx.application.Application
```

Übersetzt: „Methode main in der Klasse Hallo nicht gefunden, bitte definiere sie so: …“. Die letzte
Zeile betrifft eine andere Art von Programmen (JavaFX) und ist für dich unwichtig.

Der Compiler hat nichts zu beanstanden, denn `Main` ist ein erlaubter Name. Die JVM sucht aber genau
`main` in Kleinbuchstaben. Ohne sie weiß sie nicht, wo das Programm beginnt.
:::

```aufgabe
id: wz-ij-dateiname
titel: Klasse und Datei
niveau: 1
lernziel: 1
kompetenz: anwenden
angabe: |
  Du willst eine Klasse für einen Taschenrechner anlegen. Die Klasse soll `Rechner` heißen.
  Wie heißt die Datei, in der `public class Rechner` steht?
teile:
  - typ: lueckentext
    text: "Die Datei heißt ___"
    luecken: [["Rechner.java"]]
    fehler:
      - wert: ["rechner.java"]
        meldung: Groß- und Kleinschreibung müssen genau zum Klassennamen passen. Die Klasse beginnt mit großem R.
      - wert: ["Rechner"]
        meldung: Es fehlt die Endung. Quelltextdateien enden auf `.java`.
hinweise:
  - Dateiname = Klassenname, dazu die Endung für Quelltext.
loesung: |
  Die Regel lautet: Steht `public class Rechner` in der Datei, heißt die Datei `Rechner.java`.
  ---
  Großes R wie in der Klasse, Endung `.java`. Ergebnis: `Rechner.java`.
```

```aufgabe
id: wz-ij-klasse-anlegen
titel: Eine Klasse anlegen
niveau: 1
lernziel: 1
kompetenz: anwenden
angabe: |
  Bring die Arbeitsschritte in IntelliJ in die richtige Reihenfolge, um ein Programm `Wetter` anzulegen und zu starten.
teile:
  - typ: reihenfolge
    elemente:
      - Rechtsklick auf den Ordner `src`.
      - New → Java Class wählen.
      - Den Namen `Wetter` eingeben und Enter drücken.
      - "`psvm` tippen und Tab drücken."
      - "`sout` tippen, Tab drücken und den Text eintragen."
      - Auf das grüne Dreieck neben `main` klicken.
hinweise:
  - Ohne Klasse gibt es keinen Ort für `main`, und ohne `main` gibt es keinen Startknopf.
loesung: |
  Zuerst braucht es die Datei mit der Klasse. Darum stehen Rechtsklick, New und Name am Anfang.
  ---
  In die Klasse kommt `main` (psvm), in `main` die Ausgabe (sout). Erst dann gibt es etwas zu starten.
```

```aufgabe
id: wz-ij-struktur
titel: Wo liegt was im Projekt?
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: |
  Beurteile die Aussagen über ein IntelliJ-Projekt mit den Ordnern `.idea`, `src`, `out` und `lib`.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Deine `.java`-Dateien liegen im Ordner `src`.
        richtig: true
      - text: Die `.class`-Dateien schreibst du selbst in den Ordner `out`.
        richtig: false
        erklaerung: "`out` füllt der Compiler beim Starten. Du schreibst nur Quelltext."
      - text: Den Ordner `.idea` kannst du löschen, um Platz zu sparen. Das Projekt öffnet sich danach genauso.
        richtig: false
        erklaerung: In `.idea` stehen die Einstellungen, etwa welches JDK und welche Bibliotheken das Projekt verwendet. Ohne ihn fehlt zum Beispiel die Einbindung von CodeDraw.
      - text: Zum Öffnen einer Vorlage wählst du in IntelliJ den Ordner, in dem `src` und `.idea` liegen.
        richtig: true
    fehler:
      - wert: [r, r, f, r]
        meldung: Bytecode schreibst du nie selbst. Der Compiler erzeugt die `.class`-Dateien beim Übersetzen und legt sie in `out` ab.
      - wert: [r, f, r, r]
        meldung: "`.idea` enthält die Einstellungen des Projekts. Wer ihn löscht, verliert zum Beispiel die Einbindung von Bibliotheken wie CodeDraw."
hinweise:
  - "`src` steht für *source*, also Quelle. `out` steht für *output*, also Ergebnis."
  - Überlege bei jeder Datei, ob ein Mensch oder ein Werkzeug sie erzeugt.
loesung: |
  **Ansatz:** Für jeden Ordner fragen: Wer legt ihn an, und was steht darin?
  ---
  `src` enthält deinen Quelltext (richtig). `out` füllt der Compiler (Aussage 2 falsch). `.idea` enthält wichtige Einstellungen (Aussage 3 falsch).
  ---
  Geöffnet wird der Ordner, der `src` und `.idea` enthält (richtig). Ergebnis: richtig, falsch, falsch, richtig.
```

```aufgabe
id: wz-ij-zeile-falsch
titel: Welche Zeile passt nicht zur Datei?
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Die Datei heißt `Muenze.java`. Beim Starten meldet IntelliJ einen Compilerfehler.
  Markiere die Zeile, die du ändern musst.
teile:
  - typ: zeilen
    code: |
      public class Munze {
          public static void main(String[] args) {
              System.out.println("Kopf");
          }
      }
    loesung: [1]
    fehler:
      - wert: [3]
        meldung: "`\"Kopf\"` ist ein beliebiger Text. Den prüft der Compiler nicht. Vergleiche lieber Dateiname und Klassenname Buchstabe für Buchstabe."
hinweise:
  - Vergleiche den Klassennamen mit dem Dateinamen `Muenze.java` Zeichen für Zeichen.
  - Im Klassennamen fehlt ein Buchstabe.
loesung: |
  **Ansatz:** Regel „Klassenname gleich Dateiname“ prüfen.
  ---
  Zeile 1 lautet `public class Munze`. Die Datei heißt aber `Muenze.java`. Es fehlt das e.
  ---
  Korrektur: `public class Muenze`. Danach passt der Name, und das Programm gibt `Kopf` aus.
```

```aufgabe
id: wz-ij-kein-start
titel: Kein grüner Startknopf
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  In der Datei `Uhr.java` steht der folgende Code. IntelliJ zeigt **keinen** grünen Startknopf. Warum?

  ```java
  public class Uhr {
      public static void start(String[] args) {
          System.out.println("tick");
      }
  }
  ```
teile:
  - typ: auswahl
    optionen:
      - Die Methode heißt `start` statt `main`. Die JVM beginnt nur bei `main`.
      - Die Klasse heißt `Uhr`, das ist zu kurz.
      - Der Text `"tick"` muss großgeschrieben sein.
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Ein Klassenname darf kurz sein, solange er zum Dateinamen passt. Das tut er hier.
      - wert: 2
        meldung: Was zwischen Anführungszeichen steht, ist beliebiger Text. Er hat keinen Einfluss darauf, ob man starten kann.
hinweise:
  - Wo beginnt die JVM die Ausführung eines Programms?
  - Vergleiche den Namen der Methode mit dem Namen, den IntelliJ mit `psvm` erzeugt.
loesung: |
  **Ansatz:** Die JVM startet jedes Programm in einer Methode mit dem genauen Namen `main`.
  ---
  Hier heißt die Methode `start`. Der Compiler übersetzt das ohne Fehler, aber es gibt keinen Startpunkt.
  ---
  Ändert man `start` zu `main`, erscheint der Startknopf, und das Programm gibt `tick` aus.
```

```aufgabe
id: wz-ij-gefuehrt
titel: Die Vorlage öffnen
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Du hast `Aufgabenblatt1.zip` aus TUWEL heruntergeladen und nach `Downloads/Aufgabenblatt1/` entpackt.
  Darin liegen `.idea`, `lib`, `src` und `Aufgabenblatt1.iml`. Welchen Ordner wählst du in IntelliJ bei **File → Open**?
teile:
  - typ: auswahl
    optionen:
      - "`Downloads/Aufgabenblatt1/src`"
      - "`Downloads/Aufgabenblatt1`"
      - "`Downloads`"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: "`src` ist nur ein Teil des Projekts. Öffnest du ihn, fehlen IntelliJ die Einstellungen aus `.idea`, zum Beispiel die Einbindung von CodeDraw."
      - wert: 2
        meldung: "`Downloads` enthält das Projekt, ist aber selbst keines. Geöffnet wird der Ordner, der direkt `.idea` und `src` enthält."
hinweise:
  - Das Projekt ist der Ordner, in dem die Einstellungen von IntelliJ liegen.
  - Suche den Ordner, der `.idea` **direkt** enthält.
gefuehrt:
  - text: In welchem Ordner liegen die Einstellungen von IntelliJ (der Ordner `.idea`)?
    teil: { typ: auswahl, optionen: ["`Downloads/Aufgabenblatt1`", "`Downloads/Aufgabenblatt1/src`"], richtig: [0] }
    erklaerung: "`.idea` liegt direkt im Projektordner `Aufgabenblatt1`, neben `src`."
  - text: Was passiert, wenn du nur `src` öffnest?
    erklaerung: IntelliJ sieht dann nur Quelltext ohne Einstellungen. Das JDK und Bibliotheken wie CodeDraw sind nicht eingetragen.
  - text: Welche Datei öffnest du danach, um Aufgabe 1 zu bearbeiten?
    teil: { typ: lueckentext, text: "src/___", luecken: [["Aufgabe1.java"]] }
    erklaerung: Die Quelltexte liegen in `src`. Aufgabe 1 steht in `Aufgabe1.java`.
  - text: Wie startest du Aufgabe 1?
    erklaerung: Mit dem grünen Dreieck neben `main` in `Aufgabe1.java`. Jede Aufgabe hat ihre eigene `main`-Methode.
loesung: |
  **Ansatz:** Ein IntelliJ-Projekt ist der Ordner mit `.idea` und `src`.
  ---
  Das ist `Downloads/Aufgabenblatt1`. Den wählst du bei File → Open.
  ---
  Danach `src/Aufgabe1.java` öffnen und mit dem grünen Dreieck starten. Erscheint die Ausgabe, ist alles richtig eingerichtet.
```

````aufgabe
id: wz-ij-erstes-programm
titel: Dein erstes Programm
niveau: 3
lernziel: 1
kompetenz: anwenden
angabe: |
  Du hast in IntelliJ die Klasse `Start` angelegt und mit `psvm` + Tab die leere Startmethode `main` erzeugt.
  Das ist die Vorlage. Ergänze in `main` eine Anweisung, sodass das Programm genau diese Zeile ausgibt:

  ```text
  Projekt laeuft!
  ```

  (Ohne Umlaut, damit es auf jedem System gleich aussieht.)
teile:
  - typ: code
    vorlage: |
      public class Start {
          public static void main(String[] args) {
              // Hier fehlt die Ausgabe.
          }
      }
    musterloesung: |
      public class Start {
          public static void main(String[] args) {
              System.out.println("Projekt laeuft!");
          }
      }
    tests:
      - { stdout: "Projekt laeuft!\n", beschreibung: "main gibt die Zeile aus" }
    fehler:
      - wert: 1
        meldung: Prüfe die Ausgabe Zeichen für Zeichen, auch das Ausrufezeichen und die Groß- und Kleinschreibung. Steht die Anweisung wirklich zwischen den geschweiften Klammern von `main`?
hinweise:
  - In IntelliJ erzeugt `sout` + Tab die Anweisung `System.out.println();`. Der Text kommt zwischen die runden Klammern.
  - Die Ausgabe-Anweisung lautet `System.out.println("...");` mit dem Text zwischen den Anführungszeichen und einem Strichpunkt am Ende.
loesung: |
  **Ansatz:** Ein Programm braucht eine Klasse und darin `main`. Beides ist da. In `main` fehlt nur die Ausgabe.
  ---
  Die Anweisung kommt zwischen die geschweiften Klammern von `main`, also in die Zeile mit dem Kommentar.
  ---
  In `main` steht `System.out.println("Projekt laeuft!");`. Probe: Beim Start erscheint genau `Projekt laeuft!`.
````

```reflexion
frage: Warum verlangt Java, dass eine öffentliche Klasse genauso heißt wie ihre Datei? Überlege, was der Compiler sonst tun müsste.
antwort: |
  Wenn ein Programm die Klasse `Aufgabe1` braucht, kann Java direkt in der Datei `Aufgabe1.java` nachsehen.
  Ohne die Regel müsste der Compiler alle Dateien öffnen und durchsuchen, um herauszufinden, wo die Klasse
  steht. Die Regel macht das Finden einfach und eindeutig. Für mich heißt das: Klasse und Datei immer
  gemeinsam benennen, sonst gibt es sofort einen Compilerfehler.
```

## Hello World Zeile für Zeile

```aufgabe
id: wz-hw-check
titel: Wo beginnt das Programm?
niveau: 1
art: check
angabe: |
  In [1.2 IntelliJ: Projekt anlegen und Programm starten](/lernen/ep1/werkzeuge/intellij-projekt-anlegen-und-programm-starten)
  hast du `psvm` getippt. Wie heißt die Methode, bei der jedes Java-Programm beginnt?
teile:
  - typ: auswahl
    optionen:
      - "`start`"
      - "`main`"
      - "`Main`"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Der Name ist in Java fest vorgegeben und kommt vom englischen Wort für „Haupt-“.
      - wert: 2
        meldung: Fast. Aber Java unterscheidet Groß- und Kleinschreibung. Die JVM sucht den Namen in Kleinbuchstaben.
loesung: |
  `psvm` steht für **p**ublic **s**tatic **v**oid **m**ain.
  ---
  Die Startmethode heißt `main`, kleingeschrieben.
```

Das kleinste vollständige Java-Programm heißt traditionell „Hello World“. Fast jede Programmiersprache
beginnt damit. Hier ist es. Wir zählen die Zeilen von oben nach unten, von Zeile 1 bis Zeile 5:

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}
```

Diese fünf Zeilen enthalten fast alle Zeichen, die du in den nächsten Wochen ständig brauchst. Wir
gehen sie in der Reihenfolge durch, in der du sie liest.

:::beispiel[Zeile 1: die Klasse]
`public class HelloWorld {`

- `public` heißt „öffentlich“: Die Klasse darf von überall verwendet werden, auch von der JVM.
- `class` sagt: Jetzt beginnt eine Klasse.
- `HelloWorld` ist ihr Name. Die Datei muss deshalb `HelloWorld.java` heißen.
- `{` ist eine **geschweifte Klammer**. Sie öffnet einen **Block**, also einen Bereich, der zusammengehört. Alles bis zur passenden `}` in Zeile 5 gehört zur Klasse.

Wörter wie `public` und `class` heißen **Schlüsselwörter**. Sie haben in Java eine feste Bedeutung und
dürfen nicht als Namen verwendet werden.
:::

:::beispiel[Zeile 2: die Startmethode main]
`public static void main(String[] args) {`

Eine **Methode** ist ein benannter Block von Anweisungen. Diese hier heißt `main`, und die JVM beginnt
die Ausführung in ihr. Die Wörter davor legen Eigenschaften fest:

- `public`: Die JVM darf die Methode von außen aufrufen.
- `static`: Die Methode gehört zur Klasse selbst. Was das genau bedeutet, lernst du in [6.1 Was ist eine Methode?](/lernen/ep1/methoden/was-ist-eine-methode). Für `main` gilt: Es muss dastehen.
- `void` (englisch „leer“): Die Methode liefert kein Ergebnis zurück. Sie tut nur etwas.
- `main`: der Name.
- `(String[] args)`: In den **runden Klammern** stehen die **Parameter**, also Werte, die man beim Start übergeben könnte. In EP1 bleibt das ungenutzt, muss aber dastehen.
- `{` öffnet den Block der Methode. Er endet mit `}` in Zeile 4.

Alles in dieser Zeile vor der `{` heißt **Methodenkopf** (kurz: Kopf der Methode). Diese Zeile schreibst du in EP1 hunderte Male genau so ab. Am schnellsten mit `psvm` + Tab.
:::

:::beispiel[Zeile 3: eine Anweisung]
`System.out.println("Hello World!");`

- `System` ist eine Klasse, die Java mitbringt. Sie gibt Zugang zum Computer, auf dem das Programm läuft.
- `.out` ist der Ausgabekanal von `System`, also die Konsole. Der **Punkt** heißt „davon“: `out` von `System`.
- `.println` ist eine Methode von `out`. Der Name kommt von *print line*: Gib eine Zeile aus.
- `( ... )`: Die runden Klammern enthalten, **was** ausgegeben werden soll.
- `"Hello World!"` ist ein **String-Literal**: ein Text, der genau so ausgegeben wird. Die **Anführungszeichen** markieren Anfang und Ende und werden selbst nicht ausgegeben.
- `;` Der **Strichpunkt** beendet die Anweisung, so wie ein Punkt einen Satz beendet.

Ausgabe auf der Konsole: `Hello World!`
:::

Zeile 4 und 5 enthalten nur `}`. Die erste schließt den Block von `main`, die zweite den Block der
Klasse. Die **Einrückung**, also die Leerzeichen am Zeilenanfang, ist dem Compiler egal. Sie zeigt
Menschen auf einen Blick, was in welchem Block steht. Jede Ebene wird um vier Leerzeichen eingerückt.

**Nichtbeispiel:** `System.out.println(Hello World!);` ohne Anführungszeichen ist kein gültiges
Programm. Ohne Anführungszeichen hält Java `Hello` und `World` für Namen, die es nicht kennt. Der
Compiler meldet gleich drei Fehler in Zeile 3, darunter `')' or ',' expected` und `not a statement`.

:::merke[Das Grundgerüst]
```java
public class Name {                          // Datei: Name.java
    public static void main(String[] args) { // Startpunkt
        // hier stehen die Anweisungen, jede endet mit ;
    }                                        // Ende von main
}                                            // Ende der Klasse
```
:::

:::achtung[Großschreibung bei System]
Eine typische falsche Zeile lautet:

```java
system.out.println("Hallo");
```

Der Compiler meldet `package system does not exist`, also „Paket system existiert nicht“. Ein
**Paket** ist eine benannte Sammlung von Klassen. Eine Klasse `system` gibt es nicht, darum hält der
Compiler `system` für ein Paket. Richtig ist `System` mit großem S. Ebenso falsch sind `System.out.Println` und
`System.out.printn`. Beide meldet der Compiler als `cannot find symbol` („Symbol nicht gefunden“, also
ein unbekannter Name), bei der zweiten mit dem Zusatz `symbol: method printn(String)`.
:::

:::achtung[Strichpunkt hinter dem Methodenkopf]
Manche setzen aus Gewohnheit überall einen Strichpunkt, auch hier:

```java
public static void main(String[] args); {
```

Der Compiler meldet `missing method body, or declare abstract`, also „Methodenrumpf (Block) fehlt“.
Der Strichpunkt beendet den Methodenkopf, und die Methode hat dann keinen Block. Den Zusatz „or
declare abstract“ brauchst du in EP1 nicht. Ein Strichpunkt gehört ans Ende einer **Anweisung**, nie hinter
`class Name` und nie hinter den Kopf einer Methode, auf den `{` folgt.
:::

```aufgabe
id: wz-hw-zeichen
titel: Welches Zeichen wofür?
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Ordne zu: Was beendet in Java eine Anweisung?
teile:
  - typ: auswahl
    optionen:
      - "Die geschweifte Klammer `}`"
      - "Der Strichpunkt `;`"
      - "Das Zeilenende"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: "`}` schließt einen Block, also eine ganze Gruppe von Anweisungen. Eine einzelne Anweisung endet mit einem anderen Zeichen."
      - wert: 2
        meldung: Für Java ist ein Zeilenende nur Leerraum. Man könnte zwei Anweisungen in eine Zeile schreiben. Das Ende markiert ein Zeichen.
hinweise:
  - Denke an den Punkt am Ende eines deutschen Satzes.
loesung: |
  Ein Block wird mit `{ }` begrenzt. Eine einzelne Anweisung endet mit `;`.
  ---
  Das Zeilenende zählt für Java nicht. Richtig ist also der Strichpunkt.
```

```aufgabe
id: wz-hw-luecken
titel: Das Gerüst vervollständigen
niveau: 1
lernziel: 2
kompetenz: anwenden
angabe: |
  Ergänze die drei Lücken, sodass ein vollständiges Programm entsteht, das `Hi` ausgibt.
teile:
  - typ: lueckentext
    code: |
      public ___ Gruss {
          public static ___ main(String[] args) {
              System.out.___("Hi");
          }
      }
    luecken: [["class"], ["void"], ["println", "print"]]
    fehler:
      - wert: ["Class", "void", "println"]
        meldung: Schlüsselwörter werden in Java immer kleingeschrieben. `Class` mit großem C ist für den Compiler ein unbekanntes Wort.
      - wert: ["class", "Void", "println"]
        meldung: "`void` ist ein Schlüsselwort und wird kleingeschrieben."
hinweise:
  - Die erste Lücke sagt, dass eine Klasse beginnt. Die zweite sagt, dass `main` kein Ergebnis liefert.
loesung: |
  `class` leitet die Klasse ein, `void` sagt „liefert nichts zurück“.
  ---
  Die Ausgabe-Methode ist `println` (oder `print`, das hier dieselbe Ausgabe ohne Zeilenumbruch erzeugt). Das Programm gibt `Hi` aus.
```

```aufgabe
id: wz-hw-zeilen-ordnen
titel: Hello World in Einzelteilen
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Die Zeilen eines Programms sind durcheinandergeraten. Bring sie in die richtige Reihenfolge.
teile:
  - typ: reihenfolge
    elemente:
      - "`public class Tor {`"
      - "`public static void main(String[] args) {`"
      - "`System.out.println(\"Tor!\");`"
      - "`}` (Ende von main)"
      - "`}` (Ende der Klasse)"
    fehler:
      - wert: [1, 0, 2, 3, 4]
        meldung: Die Methode `main` steht **innerhalb** der Klasse. Darum muss die Klasse zuerst geöffnet werden.
hinweise:
  - Was ist der äußerste Block, was der innerste?
  - Blöcke werden in umgekehrter Reihenfolge geschlossen, wie sie geöffnet wurden.
loesung: |
  **Ansatz:** Von außen nach innen öffnen, von innen nach außen schließen.
  ---
  Außen steht die Klasse, darin `main`, darin die Anweisung.
  ---
  Zuerst schließt `main`, dann die Klasse. Probe: Jede `{` hat ihre `}`, und nichts überkreuzt sich.
```

```aufgabe
id: wz-hw-fehler-finden
titel: Fehler im Gerüst
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Die Datei heißt `Ziel.java`. Markiere alle Zeilen, in denen ein Fehler steckt.
teile:
  - typ: zeilen
    code: |
      public class Ziel {
          public static void main(String[] args); {
              System.out.println("Ziel erreicht")
              System.out.println("Gut gemacht!");
          }
      }
    loesung: [2, 3]
    fehler:
      - wert: [3]
        meldung: Zeile 3 hast du richtig erkannt, aber es gibt noch einen zweiten Fehler. Schau dir an, was direkt hinter dem Kopf von `main` steht.
      - wert: [2]
        meldung: Zeile 2 hast du richtig erkannt. Prüfe auch, ob jede Anweisung mit einem Strichpunkt endet.
hinweise:
  - Prüfe jede Zeile auf Strichpunkte. Wo muss einer stehen, wo darf keiner stehen?
  - Hinter dem Methodenkopf folgt direkt `{`. Hinter jeder Anweisung folgt `;`.
loesung: |
  **Ansatz:** Strichpunkte gehören ans Ende von Anweisungen, nicht hinter einen Kopf mit Block.
  ---
  Zeile 2: `main(String[] args); {` hat einen Strichpunkt zu viel. Der Compiler meldet `missing method body`.
  ---
  Zeile 3: Hinter `println("Ziel erreicht")` fehlt der Strichpunkt (`';' expected`). Zeile 1, 4, 5 und 6 sind korrekt.
  ---
  Gut zu wissen: Übersetzt du diese Datei, meldet `javac` zuerst nur den Fehler in Zeile 3. Den Fehler in Zeile 2 meldet er erst, wenn Zeile 3 repariert ist. Darum nach jeder Korrektur neu übersetzen.
```

```aufgabe
id: wz-hw-zwei-zeilen
titel: Zwei Anweisungen
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Wecker {
          public static void main(String[] args) {
              System.out.println("Aufstehen!");
              System.out.println("Kaffee kochen.");
          }
      }
    loesung: |
      Aufstehen!
      Kaffee kochen.
    fehler:
      - wert: "\"Aufstehen!\"\n\"Kaffee kochen.\""
        meldung: Die Anführungszeichen markieren nur Anfang und Ende des Textes. Sie werden nicht mit ausgegeben.
      - wert: "Kaffee kochen.\nAufstehen!"
        meldung: Java führt Anweisungen von oben nach unten aus. Was zuerst dasteht, erscheint zuerst.
hinweise:
  - Anweisungen laufen von oben nach unten.
  - Die Anführungszeichen gehören nicht zur Ausgabe.
loesung: |
  **Ansatz:** Die Anweisungen in `main` der Reihe nach ausführen.
  ---
  Zeile 3 gibt `Aufstehen!` aus und beginnt danach eine neue Zeile.
  ---
  Zeile 4 gibt `Kaffee kochen.` aus. Ergebnis: zwei Zeilen, ohne Anführungszeichen.
```

```aufgabe
id: wz-hw-warum-main
titel: Warum genau so?
niveau: 2
lernziel: 2
kompetenz: begruenden
angabe: |
  Erkläre, warum man den Kopf `public static void main(String[] args)` nicht kreativ umformulieren darf,
  zum Beispiel als `public static void Haupt(String[] args)`. Was passiert, und warum meldet der Compiler trotzdem keinen Fehler?
teile:
  - typ: text
    muster: |
      Die JVM sucht beim Start eine Methode mit genau diesem Kopf. Heißt sie `Haupt`, findet die JVM keinen
      Startpunkt und bricht mit „Main method not found“ ab. Der Compiler meldet nichts, weil `Haupt` ein
      erlaubter Methodenname ist. Er prüft nur die Form, nicht ob es einen Startpunkt gibt.
hinweise:
  - Wer sucht nach `main`, der Compiler oder die JVM?
  - Ist `Haupt` ein erlaubter Name für eine Methode?
loesung: |
  **Ansatz:** Trennen, was der Compiler prüft und was die JVM beim Start braucht.
  ---
  Für den Compiler ist `Haupt` ein gültiger Name. Er übersetzt ohne Fehler.
  ---
  Die JVM sucht beim Start genau `main`. Sie findet sie nicht und meldet `Main method not found in class ...`.
```

```aufgabe
id: wz-hw-gefuehrt
titel: Ein Programm Schritt für Schritt bauen
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Schreibe in Gedanken ein Programm in der Datei `Pause.java`, das `Zeit fuer Pause` ausgibt. Ergänze die Lücken.
teile:
  - typ: lueckentext
    code: |
      public class ___ {
          public static void main(String[] ___) {
              System.out.println(___);
          }
      }
    luecken: [["Pause"], ["args"], ["\"Zeit fuer Pause\""]]
    fehler:
      - wert: ["Pause", "args", "Zeit fuer Pause"]
        meldung: Der Text braucht Anführungszeichen. Ohne sie hält Java die Wörter für Namen.
hinweise:
  - Der Klassenname ergibt sich aus dem Dateinamen.
  - Ein Text steht immer zwischen Anführungszeichen.
gefuehrt:
  - text: Die Datei heißt `Pause.java`. Wie heißt die Klasse?
    teil: { typ: lueckentext, text: "public class ___", luecken: [["Pause"]] }
    erklaerung: Klassenname gleich Dateiname ohne Endung, also `Pause`.
  - text: Was steht in den runden Klammern von `main`?
    teil: { typ: lueckentext, text: "main(___)", luecken: [["String[] args"]] }
    erklaerung: Der Parameter `String[] args` muss dastehen, auch wenn wir ihn nicht verwenden. Den Namen `args` könnte man theoretisch ändern, aber alle schreiben ihn so, und IntelliJ erzeugt ihn mit `psvm`.
  - text: Wie schreibst du den auszugebenden Text?
    erklaerung: 'In Anführungszeichen: `"Zeit fuer Pause"`. Die Anführungszeichen werden nicht ausgegeben.'
  - text: Was steht ganz am Ende der Ausgabe-Anweisung?
    erklaerung: Ein Strichpunkt. Er beendet die Anweisung.
loesung: |
  **Ansatz:** Das Grundgerüst ausfüllen: Klasse, main, Anweisung.
  ---
  Klasse `Pause` (wie die Datei), Parameter `args`.
  ---
  Ausgabe `System.out.println("Zeit fuer Pause");`. Das Programm gibt `Zeit fuer Pause` aus.
```

````aufgabe
id: wz-hw-eigenes
titel: Eine Visitenkarte ausgeben
niveau: 3
lernziel: 2
kompetenz: anwenden
angabe: |
  Die Vorlage enthält die Klasse `Visitenkarte` mit einer leeren Methode `main`. Ergänze `main` so, dass genau diese drei Zeilen erscheinen:

  ```text
  Name: Ada Lovelace
  Studium: Informatik
  LVA: EP1
  ```
teile:
  - typ: code
    vorlage: |
      public class Visitenkarte {
          public static void main(String[] args) {
          }
      }
    musterloesung: |
      public class Visitenkarte {
          public static void main(String[] args) {
              System.out.println("Name: Ada Lovelace");
              System.out.println("Studium: Informatik");
              System.out.println("LVA: EP1");
          }
      }
    tests:
      - { stdout: "Name: Ada Lovelace\nStudium: Informatik\nLVA: EP1\n", beschreibung: "drei Zeilen in der richtigen Reihenfolge" }
    fehler:
      - wert: 1
        meldung: Vergleiche deine Ausgabe Zeichen für Zeichen mit der Vorgabe, auch Leerzeichen nach dem Doppelpunkt. Jede Zeile braucht ein eigenes `println`.
hinweise:
  - Alle Anweisungen kommen zwischen die geschweiften Klammern von `main`.
  - Für jede der drei Zeilen eine eigene `System.out.println("...");`-Anweisung, in der Reihenfolge der Ausgabe.
loesung: |
  **Ansatz:** Klasse und `main` sind da. In `main` kommen drei Ausgaben untereinander.
  ---
  ```java
  public static void main(String[] args) {
      System.out.println("Name: Ada Lovelace");
      System.out.println("Studium: Informatik");
      System.out.println("LVA: EP1");
  }
  ```
  ---
  Probe: Jedes `println` erzeugt eine Zeile. Der Doppelpunkt und das Leerzeichen danach stehen im Text, also erscheinen sie auch.
````

## Ausgaben mit print und println

```aufgabe
id: wz-pp-check
titel: Was heißt println?
niveau: 1
art: check
angabe: |
  In [1.3 Hello World Zeile für Zeile](/lernen/ep1/werkzeuge/hello-world-zeile-fuer-zeile) hast du
  `System.out.println("Hello World!");` kennengelernt. Wofür steht das `ln` in `println`?
teile:
  - typ: auswahl
    optionen:
      - Für *line*, also Zeile. Nach dem Text beginnt eine neue Zeile.
      - Für *long number*, also eine lange Zahl.
      - Für *language*, also die Sprache Java.
    richtig: [0]
    fehler:
      - wert: 1
        meldung: "`println` gibt Texte genauso aus wie Zahlen. Das `ln` hat mit Zahlen nichts zu tun."
      - wert: 2
        meldung: Das `ln` beschreibt, was nach der Ausgabe passiert, nicht die Sprache.
loesung: |
  `println` = *print line*, also „gib eine Zeile aus“.
  ---
  Nach dem Text springt die Ausgabe an den Anfang der nächsten Zeile.
```

Stell dir die Konsole wie eine alte Schreibmaschine vor. Ein unsichtbarer **Cursor** (die
Schreibposition) steht anfangs links oben. Jede Ausgabe schreibt ab dem Cursor nach rechts. Java hat
zwei Ausgabe-Methoden, die sich nur in einem Punkt unterscheiden:

- `System.out.print(...)` schreibt den Inhalt. Der Cursor bleibt direkt dahinter stehen.
- `System.out.println(...)` schreibt den Inhalt und setzt den Cursor danach an den Anfang der nächsten Zeile.
- `System.out.println()` mit leeren Klammern schreibt nichts und beginnt nur eine neue Zeile.

Leerzeichen **innerhalb** der Anführungszeichen gehören zum Text und werden ausgegeben. Leerzeichen
**außerhalb** der Anführungszeichen sind dem Compiler egal.

:::beispiel[print und println gemischt]
```java
System.out.print("Guten ");
System.out.print("Morgen");
System.out.println("!");
System.out.println("Wie geht's?");
```

Wir verfolgen den Cursor Anweisung für Anweisung:

1. `print("Guten ")` schreibt `Guten ` mit Leerzeichen am Ende. Der Cursor bleibt in Zeile 1.
2. `print("Morgen")` schreibt direkt dahinter. Zeile 1 lautet jetzt `Guten Morgen`.
3. `println("!")` hängt `!` an und springt in Zeile 2.
4. `println("Wie geht's?")` schreibt Zeile 2 und springt in Zeile 3.

Ausgabe:

```text
Guten Morgen!
Wie geht's?
```
:::

Ohne Anführungszeichen kann in den Klammern auch eine Rechnung stehen. Dann rechnet Java zuerst und
gibt das Ergebnis aus. Mit Anführungszeichen ist dieselbe Rechnung nur Text, Zeichen für Zeichen.
Rechnungen und Werte behandelt
[2.2 Rechnen mit ganzen Zahlen](/lernen/ep1/ausdruecke/rechnen-mit-ganzen-zahlen) ausführlich. Für jetzt genügt der
Unterschied zwischen „rechnen“ und „abschreiben“.

:::beispiel[Zahl oder Text?]
```java
System.out.println(3 + 4);
System.out.println("3 + 4");
System.out.print(10 - 2);
System.out.println(" Punkte");
```

1. `3 + 4` steht ohne Anführungszeichen. Java rechnet `7` und gibt `7` aus.
2. `"3 + 4"` ist ein Text. Er erscheint genau so, mit den Leerzeichen: `3 + 4`.
3. `print(10 - 2)` rechnet `8` und schreibt `8`. Der Cursor bleibt stehen.
4. `println(" Punkte")` hängt ` Punkte` mit führendem Leerzeichen an.

Ausgabe:

```text
7
3 + 4
8 Punkte
```
:::

**Nichtbeispiel:** `System.out.println(Punkte);` gibt nicht das Wort „Punkte“ aus. Ohne
Anführungszeichen sucht Java etwas mit dem Namen `Punkte` und meldet `cannot find symbol`.

:::merke[Ausgabe vorhersagen]
1. Anweisungen strikt von oben nach unten durchgehen.
2. Für jede Anweisung notieren: Was wird geschrieben? Bleibt der Cursor stehen (`print`) oder springt er (`println`)?
3. Text in Anführungszeichen wird abgeschrieben, Rechnungen ohne Anführungszeichen werden ausgerechnet.
4. Am Ende Zeile für Zeile aufschreiben, Leerzeichen mitzählen.
:::

:::achtung[Das fehlende Leerzeichen]
Gewünscht ist die Ausgabe `Summe: 12`. Geschrieben wurde:

```java
System.out.print("Summe:");
System.out.println(12);
```

Ausgegeben wird `Summe:12`. `print` fügt **nie** selbst ein Leerzeichen ein. Richtig ist
`System.out.print("Summe: ");` mit Leerzeichen vor dem schließenden Anführungszeichen. Auf Aufgabenblättern
ist die Sollausgabe exakt vorgegeben. Ein fehlendes Leerzeichen ist dort ein Fehler.
:::

:::achtung[Rechnung in Anführungszeichen]
Jemand will das Ergebnis von 6 mal 7 ausgeben und schreibt `System.out.println("6 * 7");`. Die Ausgabe
lautet `6 * 7`, nicht `42`. In Anführungszeichen ist alles nur Text. Für die Rechnung gehören die
Anführungszeichen weg: `System.out.println(6 * 7);` gibt `42` aus. Der Stern `*` ist in Java das
Malzeichen.
:::

```aufgabe
id: wz-pp-zusammenkleben
titel: Drei Teile, eine Zeile
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Kleben {
          public static void main(String[] args) {
              System.out.print("Ha");
              System.out.print("llo");
              System.out.println("!");
              System.out.println("Tschuess");
          }
      }
    loesung: |
      Hallo!
      Tschuess
    fehler:
      - wert: "Ha\nllo\n!\nTschuess"
        meldung: "`print` springt **nicht** in eine neue Zeile. Erst `println` beendet die Zeile."
      - wert: "Ha llo !\nTschuess"
        meldung: "`print` fügt kein Leerzeichen ein. Die Teile stehen direkt hintereinander."
hinweise:
  - Verfolge den Cursor. Nur `println` lässt ihn in die nächste Zeile springen.
loesung: |
  Die beiden `print`-Anweisungen schreiben `Ha` und `llo` direkt hintereinander. `println("!")` beendet die Zeile.
  ---
  Danach steht `Tschuess` in Zeile 2. Ergebnis: `Hallo!` und `Tschuess`.
```

```aufgabe
id: wz-pp-leerzeile
titel: Leere Klammern
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: Was gibt das Programm aus? Achte auf Leerzeilen.
teile:
  - typ: ausgabe
    code: |
      System.out.println("Oben");
      System.out.println();
      System.out.println("Unten");
    loesung: |
      Oben

      Unten
    fehler:
      - wert: "Oben\nUnten"
        meldung: "`println()` mit leeren Klammern schreibt zwar nichts, beginnt aber eine neue Zeile. So entsteht eine Leerzeile."
hinweise:
  - Was macht `println()`, wenn nichts in den Klammern steht?
loesung: |
  `println("Oben")` schreibt Zeile 1. `println()` schreibt nichts, beendet aber Zeile 2. Sie bleibt leer.
  ---
  `println("Unten")` schreibt Zeile 3. Zwischen `Oben` und `Unten` steht also eine Leerzeile.
```

```aufgabe
id: wz-pp-anzahl-zeilen
titel: Wie viele Zeilen?
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  Wie viele Zeilen erscheinen auf der Konsole? (Leere Zeilen zählen mit, eine noch offene letzte Zeile mit Text auch.)

  ```java
  System.out.print("a");
  System.out.println("b");
  System.out.println();
  System.out.print("c");
  System.out.print("d");
  ```
teile:
  - typ: zahl
    loesung: "3"
    fehler:
      - wert: "5"
        meldung: Du hast Anweisungen gezählt, nicht Zeilen. Nur `println` beendet eine Zeile. Zwei `print` hintereinander landen in derselben Zeile.
      - wert: "2"
        meldung: "`println()` mit leeren Klammern erzeugt eine eigene, leere Zeile. Zähle sie mit."
hinweise:
  - Schreib die Ausgabe auf und markiere jeden Zeilenwechsel.
loesung: |
  Zeile 1: `ab` (erst `print("a")`, dann `println("b")`). Zeile 2: leer (`println()`).
  ---
  Zeile 3: `cd` aus zwei `print`. Das sind 3 Zeilen.
```

```aufgabe
id: wz-pp-zahl-text
titel: Rechnen oder abschreiben?
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      System.out.println(5 + 9);
      System.out.println("5 + 9");
      System.out.print(20 - 8);
      System.out.println(" Tore");
      System.out.println("Ende" );
    loesung: |
      14
      5 + 9
      12 Tore
      Ende
    fehler:
      - wert: "14\n14\n12 Tore\nEnde"
        meldung: In Anführungszeichen wird nicht gerechnet. `"5 + 9"` ist Text und erscheint Zeichen für Zeichen.
      - wert: "14\n5 + 9\n12\n Tore\nEnde"
        meldung: "`print(20 - 8)` bleibt in der Zeile. ` Tore` wird direkt angehängt."
      - wert: "14\n5 + 9\n12Tore\nEnde"
        meldung: Das Leerzeichen am Anfang von `" Tore"` steht innerhalb der Anführungszeichen. Es wird ausgegeben.
hinweise:
  - Prüfe bei jeder Anweisung zuerst, ob Anführungszeichen dastehen.
  - Das Leerzeichen vor `)` in der letzten Zeile steht außerhalb der Anführungszeichen. Spielt es eine Rolle?
loesung: |
  **Ansatz:** Für jede Anweisung entscheiden: rechnen (keine Anführungszeichen) oder abschreiben (Anführungszeichen).
  ---
  `5 + 9` ergibt `14`. `"5 + 9"` wird abgeschrieben. `print(20 - 8)` schreibt `12`, und `println(" Tore")` hängt ` Tore` an.
  ---
  Das Leerzeichen in `"Ende" )` steht außerhalb des Textes und hat keine Wirkung. Ergebnis: vier Zeilen `14`, `5 + 9`, `12 Tore`, `Ende`.
```

```aufgabe
id: wz-pp-trace
titel: Den Cursor verfolgen
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: |
  Verfolge die Ausgabe. Trage nach jeder Anweisung ein, in welcher Zeile der Cursor steht (Zeile 1 ist die erste)
  und welcher Text in **dieser** Zeile schon steht. Steht noch nichts darin, trage `-` ein.

  ```java
  System.out.print("Rot");      // A
  System.out.println("Gelb");   // B
  System.out.print("Gruen");    // C
  System.out.println();         // D
  System.out.print("Blau");     // E
  ```
teile:
  - typ: trace
    spalten: [Cursorzeile, Text in der Cursorzeile]
    zeilen: [Start, nach A, nach B, nach C, nach D, nach E]
    vorgabe: 1
    loesung: [[1, "-"], [1, "Rot"], [2, "-"], [2, "Gruen"], [3, "-"], [3, "Blau"]]
    fehler:
      - wert: [1, "-", 1, "Rot", 1, "RotGelb", 1, "RotGelbGruen", 2, "-", 2, "Blau"]
        meldung: Nach `println` springt der Cursor in die nächste Zeile, und die neue Zeile ist zunächst leer.
hinweise:
  - "`print` lässt den Cursor in der Zeile, `println` setzt ihn in die nächste Zeile."
  - Nach `println("Gelb")` ist Zeile 1 fertig (`RotGelb`), und der Cursor steht am Anfang der leeren Zeile 2.
loesung: |
  **Ansatz:** Nach jeder Anweisung fragen: Wurde geschrieben? Ist der Cursor gesprungen?
  ---
  A schreibt `Rot` in Zeile 1. B hängt `Gelb` an und springt. Zeile 2 ist leer.
  ---
  C schreibt `Gruen` in Zeile 2. D springt nur. E schreibt `Blau` in Zeile 3. Die ganze Ausgabe lautet `RotGelb`, `Gruen`, `Blau`.
```

```aufgabe
id: wz-pp-luecken
titel: print oder println?
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Ergänze in jeder Lücke `print` oder `println`, sodass genau diese Ausgabe entsteht:

  ```text
  Ja Nein
  Vielleicht
  ```
teile:
  - typ: lueckentext
    code: |
      System.out.___("Ja ");
      System.out.___("Nein");
      System.out.___("Vielleicht");
    luecken: [["print"], ["println"], ["println", "print"]]
    fehler:
      - wert: ["println", "println", "println"]
        meldung: Mit `println("Ja ")` stünde `Nein` in einer eigenen Zeile. Nach `Ja ` darf der Cursor nicht springen.
      - wert: ["print", "print", "println"]
        meldung: Dann stünde `Vielleicht` direkt hinter `Nein` in derselben Zeile. Nach `Nein` muss die Zeile enden.
hinweise:
  - Wo soll nach einer Ausgabe die Zeile weitergehen, wo soll sie enden?
  - Nach `Nein` endet Zeile 1. Bei der letzten Anweisung ist beides möglich, denn danach kommt nichts mehr.
loesung: |
  **Ansatz:** Für jede Ausgabe prüfen, ob danach die Zeile weitergeht.
  ---
  Nach `Ja ` geht es in derselben Zeile weiter: `print`. Nach `Nein` endet die Zeile: `println`.
  ---
  `Vielleicht` steht in Zeile 2. Da danach nichts mehr kommt, ergeben `println` und `print` dieselbe sichtbare Ausgabe.
```

```aufgabe
id: wz-pp-gefuehrt
titel: Eine Ausgabe Schritt für Schritt
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      System.out.print("Level ");
      System.out.println(2 + 1);
      System.out.print("Leben: ");
      System.out.print("3");
      System.out.println();
      System.out.println("Los!");
    loesung: |
      Level 3
      Leben: 3
      Los!
    fehler:
      - wert: "Level 2 + 1\nLeben: 3\nLos!"
        meldung: "`2 + 1` steht ohne Anführungszeichen. Java rechnet also zuerst."
      - wert: "Level 3\nLeben: 3\n\nLos!"
        meldung: "`println()` beendet hier nur die angefangene Zeile `Leben: 3`. Es entsteht keine zusätzliche Leerzeile."
hinweise:
  - Rechne `2 + 1` aus, bevor du es hinschreibst.
  - "`println()` beendet die gerade begonnene Zeile. Eine Leerzeile entsteht nur, wenn die Zeile vorher leer war."
gefuehrt:
  - text: Was steht nach den ersten beiden Anweisungen in Zeile 1?
    teil: { typ: ausgabe, code: "System.out.print(\"Level \");\nSystem.out.println(2 + 1);", loesung: "Level 3", codeAnzeigen: true }
    erklaerung: "`print(\"Level \")` schreibt `Level ` mit Leerzeichen, dann rechnet Java `2 + 1 = 3` und beendet die Zeile."
  - text: 'Was steht nach `print("Leben: ")` und `print("3")` in Zeile 2, und ist die Zeile schon beendet?'
    erklaerung: "`Leben: 3`. Die Zeile ist noch offen, weil nur `print` vorkam."
  - text: Was bewirkt jetzt `println()`?
    erklaerung: Es beendet Zeile 2. Weil die Zeile nicht leer war, entsteht keine Leerzeile.
  - text: Schreib die ganze Ausgabe auf.
    erklaerung: "`Level 3`, `Leben: 3`, `Los!`."
loesung: |
  **Ansatz:** Den Cursor verfolgen und Rechnungen auswerten.
  ---
  Zeile 1: `Level ` und dann `3` (ausgerechnet), Zeilenende. Zeile 2: `Leben: ` und `3`, dann beendet `println()` die Zeile.
  ---
  Zeile 3: `Los!`. Probe: drei Zeilen, keine Leerzeile.
```

````aufgabe
id: wz-pp-treppe
titel: Eine Treppe aus Sternen
niveau: 3
lernziel: 3
kompetenz: anwenden
quelle: Aufgabenblatt 1 WS2023, Aufgabe 3 (Konsolenformen, stark vereinfacht nachgebaut)
angabe: |
  Schreibe `main` so, dass genau diese Ausgabe entsteht. Verwende für die Sterne nur `print` und `println`,
  und gib in jeder Anweisung **höchstens einen** Stern aus.

  ```text
  *
  **
  ***
  ```
teile:
  - typ: code
    vorlage: |
      public class Treppe {
          public static void main(String[] args) {
              // Deine Anweisungen
          }
      }
    musterloesung: |
      public class Treppe {
          public static void main(String[] args) {
              System.out.println("*");
              System.out.print("*");
              System.out.println("*");
              System.out.print("*");
              System.out.print("*");
              System.out.println("*");
          }
      }
    tests:
      - { stdout: "*\n**\n***\n", beschreibung: "drei Zeilen Treppe" }
    fehler:
      - wert: 1
        meldung: Zähle in jeder Zeile die Sterne. Am Zeilenende muss ein `println` stehen, sonst rutscht die nächste Stufe in dieselbe Zeile.
hinweise:
  - 'Pro Zeile gilt: alle Sterne außer dem letzten mit `print`, den letzten mit `println`.'
  - Zeile 3 braucht also zweimal `print("*")` und einmal `println("*")`.
loesung: |
  **Ansatz:** Jede Zeile besteht aus Sternen. Nur der letzte Stern einer Zeile wird mit `println` ausgegeben.
  ---
  Zeile 1: `println("*")`. Zeile 2: `print("*")`, `println("*")`. Zeile 3: zweimal `print("*")`, dann `println("*")`.
  ---
  Probe: 1 + 2 + 3 = 6 Anweisungen, drei davon `println`, also drei Zeilen. In [4.8 Verschachtelte Schleifen](/lernen/ep1/schleifen/verschachtelte-schleifen) lernst du, solche Muster mit Schleifen (Anweisungen, die Code wiederholen) für beliebig viele Zeilen zu erzeugen.
````

```reflexion
frage: Auf Aufgabenblättern ist die erwartete Ausgabe exakt vorgegeben. Warum reicht es nicht, wenn die Ausgabe „ungefähr“ stimmt?
antwort: |
  Programme werden oft automatisch geprüft, indem man ihre Ausgabe Zeichen für Zeichen mit der erwarteten
  vergleicht. Ein fehlendes Leerzeichen oder eine Leerzeile zu viel ist dann ein Unterschied. Auch im echten
  Leben liest oft ein anderes Programm die Ausgabe weiter, und das rät nicht. Darum gewöhne ich mich gleich
  daran, die Ausgabe mit der Vorgabe genau zu vergleichen.
```

## Kommentare und lesbarer Code

```aufgabe
id: wz-ko-check
titel: Was ignoriert der Compiler?
niveau: 1
art: check
angabe: |
  Aus [1.3 Hello World Zeile für Zeile](/lernen/ep1/werkzeuge/hello-world-zeile-fuer-zeile) weißt du:
  Die Einrückung ist dem Compiler egal. Was bewirkt sie dann?
teile:
  - typ: auswahl
    optionen:
      - Sie macht das Programm schneller.
      - Sie zeigt Menschen, welche Zeilen zu welchem Block gehören.
      - Sie ersetzt die geschweiften Klammern.
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Der Compiler entfernt die Einrückung beim Übersetzen. Auf die Geschwindigkeit hat sie keinen Einfluss.
      - wert: 2
        meldung: In Java bestimmen allein `{` und `}` die Blöcke. Die Einrückung ist nur eine Lesehilfe.
loesung: |
  Die Einrückung ist für Menschen da.
  ---
  Sie zeigt auf einen Blick, was in welchem Block steht. Die Blöcke selbst legen nur die Klammern fest.
```

Ein Programm wird öfter gelesen als geschrieben: von dir in drei Wochen, von Kolleginnen und Kollegen
und von Tutorinnen und Tutoren im Feedbackgespräch. Dort erklärst du deine Abgabe (mehr dazu in
[1.7 Kursmodus 2026W und Abgaberegeln](/lernen/ep1/werkzeuge/kursmodus-2026w-und-abgaberegeln)). Ein **Kommentar** ist Text im Quelltext, den der
Compiler vollständig ignoriert. Er ist nur für Menschen. Java kennt drei Arten:

- `// Text` ist ein **Zeilenkommentar**. Er reicht vom `//` bis zum Ende **dieser** Zeile.
- `/* Text */` ist ein **Blockkommentar**. Er beginnt bei `/*`, endet beim **ersten** `*/` und darf über mehrere Zeilen gehen.
- `/** Text */` ist ein **Javadoc-Kommentar**. Er beschreibt später Methoden und Klassen. Für den Compiler ist er ein gewöhnlicher Blockkommentar.

Innerhalb von Anführungszeichen gibt es keine Kommentare. In `"http://tuwien.at"` ist `//` einfach Text.

:::beispiel[Ein kommentiertes Programm]
```java
/* Aufgabe 1: Begrüßung
   Autor: Kim */
public class Gruss {
    public static void main(String[] args) {
        // Zuerst der Name, damit man sieht, wer grüßt
        System.out.println("Kim sagt:");
        System.out.println("Hallo!"); // Gruß in eigener Zeile
        // System.out.println("Tschuess");
    }
}
```

Wir gehen Zeile für Zeile durch:

1. Zeile 1 bis 2 sind ein Blockkommentar. Er beginnt mit `/*` und endet mit `*/` in Zeile 2.
2. Zeile 5 ist ganz Kommentar und wird übersprungen.
3. Zeile 6 gibt `Kim sagt:` aus.
4. Zeile 7 gibt `Hallo!` aus. Der Kommentar dahinter beginnt erst nach dem Strichpunkt.
5. Zeile 8 ist **auskommentiert**: Die Anweisung steht hinter `//` und wird nicht ausgeführt.

Ausgabe:

```text
Kim sagt:
Hallo!
```
:::

**Auskommentieren** heißt, eine Anweisung vorübergehend in einen Kommentar zu verwandeln, statt sie zu
löschen. In IntelliJ markierst du die Zeilen und drückst `Strg + /` (am Mac `Cmd + /`). Noch einmal
gedrückt, wird der Kommentar wieder entfernt. `Strg + Alt + L` (am Mac `Cmd + Alt + L`) rückt den
ganzen Code automatisch richtig ein.

:::beispiel[Auskommentieren bei der Fehlersuche]
Ein Programm hat fünf Ausgaben, und eine davon verursacht einen Fehler. Du weißt nicht, welche.

1. Du kommentierst die Anweisungen 3 bis 5 aus und startest. Der Fehler ist weg. Er steckt also in 3, 4 oder 5.
2. Du nimmst den Kommentar vor Anweisung 3 wieder weg. Der Fehler ist weiter weg. Also 4 oder 5.
3. Du aktivierst Anweisung 4. Der Fehler ist wieder da. Er steckt in Anweisung 4.

Mit jedem Schritt halbiert sich ungefähr die Zahl der Verdächtigen. Nichts wurde gelöscht.
:::

**Was gehört in einen guten Kommentar?** Er erklärt, **warum** etwas so ist, nicht, **was** dasteht.
`// gibt Hallo aus` direkt über `System.out.println("Hallo");` ist ein **Nichtbeispiel**: Er
wiederholt nur den Code. Ein guter Kommentar ist `// Ausgabe exakt wie in der Angabe, mit Punkt am Ende`.
Ab Aufgabenblatt 3 stehen in den Vorlagen **Zusatzfragen** als Kommentar. Deine Antworten schreibst du
ebenfalls als Kommentar darunter, damit das Projekt weiter kompiliert.

:::achtung[Blockkommentare verschachtelt]
Eine typische falsche Idee: einen Bereich mit einem Blockkommentar darin noch einmal einklammern.

```java
/* außen /* innen */ noch Kommentar? */
```

Der Kommentar endet beim **ersten** `*/`. Danach liest der Compiler `noch Kommentar? */` als Code und
meldet `';' expected`. Blockkommentare lassen sich nicht verschachteln. Verwende zum Auskommentieren
von Bereichen besser `//` vor jeder Zeile (`Strg + /`).
:::

:::achtung[Blockkommentar ohne Ende]
Fehlt das `*/`, frisst der Kommentar den ganzen Rest der Datei:

```java
/* Kommentar ohne Ende
System.out.println("Hi");
```

Der Compiler meldet `unclosed comment` an der Zeile mit `/*` und zusätzlich
`reached end of file while parsing`. Beide Meldungen haben dieselbe Ursache: das fehlende `*/`.
:::

```aufgabe
id: wz-ko-zeilenkommentar
titel: Was bleibt übrig?
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Liste {
          public static void main(String[] args) {
              // Einkaufsliste
              System.out.println("Brot");
              // System.out.println("Milch");
              System.out.println("Eier"); // nicht vergessen
          }
      }
    loesung: |
      Brot
      Eier
    fehler:
      - wert: "Brot\nMilch\nEier"
        meldung: Zeile 5 beginnt mit `//`. Die ganze Zeile ist damit Kommentar und wird nicht ausgeführt.
      - wert: "Brot\nEier nicht vergessen"
        meldung: Alles ab `//` ist Kommentar, auch wenn es hinter einer Anweisung steht. Kommentare werden nie ausgegeben.
hinweise:
  - Streiche gedanklich alles von `//` bis zum Zeilenende.
loesung: |
  Zeile 3 und 5 sind ganz Kommentar. In Zeile 6 ist nur der Teil ab `//` Kommentar.
  ---
  Ausgeführt werden die Ausgaben von `Brot` und `Eier`.
```

```aufgabe
id: wz-ko-art-waehlen
titel: Welche Kommentarart?
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Du willst über einer Klasse eine Beschreibung über **vier Zeilen** schreiben. Welche Schreibweise funktioniert, ohne in jede Zeile etwas Zusätzliches zu schreiben?
teile:
  - typ: auswahl
    optionen:
      - "`// ...` am Anfang und `//` am Ende"
      - "`/* ...` am Anfang und `*/` am Ende"
      - "`<!-- ...` am Anfang und `-->` am Ende"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: "`//` wirkt nur bis zum Ende **seiner** Zeile. Die Zeilen dazwischen wären Code."
      - wert: 2
        meldung: Das sind Kommentare in HTML, einer Sprache für Webseiten. Java kennt sie nicht.
hinweise:
  - Welche Kommentarart darf über mehrere Zeilen gehen?
loesung: |
  `//` gilt nur für eine Zeile. `/* ... */` reicht vom Anfang bis zum ersten `*/`, über beliebig viele Zeilen.
  ---
  Richtig ist also `/* ... */`.
```

```aufgabe
id: wz-ko-block
titel: Block über mehrere Zeilen
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      System.out.println("Start");
      /* System.out.println("A");
      System.out.println("B"); */
      System.out.println("Link: http://ep1.at");
      System.out.println("Ende"); /* fertig */
    loesung: |
      Start
      Link: http://ep1.at
      Ende
    fehler:
      - wert: "Start\nB\nLink: http://ep1.at\nEnde"
        meldung: Der Blockkommentar geht von `/*` in Zeile 2 bis `*/` am Ende von Zeile 3. Beide Ausgaben sind darin.
      - wert: "Start\nLink: http:\nEnde"
        meldung: Innerhalb von Anführungszeichen gibt es keine Kommentare. `//` ist dort ein gewöhnliches Zeichen.
hinweise:
  - Suche zu jedem `/*` das erste folgende `*/`.
  - Gilt `//` auch innerhalb eines Textes in Anführungszeichen?
loesung: |
  **Ansatz:** Erst alle Kommentare streichen, dann die übrigen Anweisungen ausführen.
  ---
  Zeile 2 und 3 liegen zwischen `/*` und `*/`. Sie fallen weg. Der Kommentar `/* fertig */` in Zeile 5 auch.
  ---
  `"Link: http://ep1.at"` ist ein Text. Das `//` darin bleibt. Ausgabe: `Start`, `Link: http://ep1.at`, `Ende`.
```

```aufgabe
id: wz-ko-zeilen-aktiv
titel: Welche Zeilen erzeugen Ausgabe?
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: Markiere alle Zeilen, die beim Ausführen etwas auf die Konsole schreiben.
teile:
  - typ: zeilen
    code: |
      System.out.println("1"); // eins
      // System.out.println("2");
      /* System.out.println("3"); */ System.out.println("4");
      /*
      System.out.println("5");
      */
      System.out.println("6 // sechs");
    loesung: [1, 3, 7]
    fehler:
      - wert: [1, 7]
        meldung: In Zeile 3 endet der Blockkommentar mit `*/` noch in derselben Zeile. Die Anweisung danach ist wieder Code.
      - wert: [1, 3, 5, 7]
        meldung: Zeile 5 steht zwischen `/*` in Zeile 4 und `*/` in Zeile 6. Sie ist Kommentar.
hinweise:
  - Ein Blockkommentar kann mitten in einer Zeile enden. Was danach kommt, ist Code.
  - In Zeile 7 steht `//` innerhalb der Anführungszeichen.
loesung: |
  **Ansatz:** Kommentare streichen und schauen, welche Anweisungen übrig bleiben.
  ---
  Zeile 1: Ausgabe `1`. Zeile 2: Kommentar. Zeile 3: Nach `*/` folgt `println("4")`, also Ausgabe.
  ---
  Zeile 4 bis 6: ein Blockkommentar. Zeile 7: Ausgabe `6 // sechs`, denn das `//` ist Text. Markiert werden 1, 3 und 7.
```

```aufgabe
id: wz-ko-auskommentieren
titel: Gezielt auskommentieren
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Vor jeder Anweisung ist eine Lücke. Trage `//` ein, wenn die Zeile ausgeschaltet werden soll, sonst ein
  Minuszeichen `-` (es steht hier für „nichts eintragen“). Am Ende sollen nur `B` und `C` ausgegeben werden.
teile:
  - typ: lueckentext
    text: |
      ___ System.out.println("A");
      ___ System.out.println("B");
      ___ System.out.println("C");
      ___ System.out.println("D");
    luecken: [["//"], ["-"], ["-"], ["//"]]
    fehler:
      - wert: ["-", "//", "//", "-"]
        meldung: Genau umgekehrt. `//` schaltet eine Zeile **aus**. Auszuschalten sind die Zeilen, deren Ausgabe nicht erscheinen soll.
hinweise:
  - "`//` vor einer Anweisung schaltet sie aus."
  - Welche Ausgaben sollen verschwinden?
loesung: |
  **Ansatz:** `//` macht eine Zeile zum Kommentar. Diese Zeile wird nicht ausgeführt.
  ---
  `A` und `D` sollen nicht erscheinen. Vor diese beiden Zeilen kommt `//`.
  ---
  `B` und `C` bleiben unverändert. Probe: Ausgabe `B`, `C`.
```

```aufgabe
id: wz-ko-guter-kommentar
titel: Ein besserer Kommentar
niveau: 2
lernziel: 4
kompetenz: begruenden
angabe: |
  Ein Student hat kommentiert:

  ```java
  // gibt Summe: aus
  System.out.print("Summe: ");
  ```

  Warum ist dieser Kommentar wenig hilfreich? Schreib einen besseren Kommentar und begründe.
teile:
  - typ: text
    muster: |
      Der Kommentar wiederholt nur, was im Code ohnehin steht. Er erklärt keinen Grund. Besser wäre zum Beispiel
      `// print statt println: Der Wert kommt direkt dahinter in dieselbe Zeile`. Dieser Kommentar sagt, warum
      hier `print` steht und warum das Leerzeichen nötig ist. Das ist genau die Information, die man beim
      Lesen nicht sofort sieht.
hinweise:
  - Was erfährt man aus dem Kommentar, das man nicht schon aus dem Code weiß?
  - Gute Kommentare beantworten die Frage „Warum?“.
loesung: |
  **Ansatz:** Prüfen, ob der Kommentar Information hinzufügt.
  ---
  „gibt Summe: aus“ steht wörtlich im Code. Der Kommentar fügt nichts hinzu.
  ---
  Ein guter Kommentar erklärt die Absicht, etwa warum `print` statt `println` steht.
```

```aufgabe
id: wz-ko-gefuehrt
titel: Kommentare Schritt für Schritt streichen
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      System.out.print("X"); // System.out.print("Y");
      /* System.out.print("Z"); */ System.out.println("W");
      System.out.println("/* V */");
    loesung: |
      XW
      /* V */
    fehler:
      - wert: "XYW\n/* V */"
        meldung: Hinter `//` ist der Rest der Zeile Kommentar, auch eine ganze Anweisung.
      - wert: "XW\n"
        meldung: Das `/* V */` in Zeile 3 steht in Anführungszeichen. Dort gibt es keine Kommentare, es ist Text.
hinweise:
  - Arbeite Zeile für Zeile. Prüfe bei jedem Kommentarzeichen, ob es in Anführungszeichen steht.
  - Zeile 1 endet mit `print`, also geht die Ausgabe in derselben Zeile weiter.
gefuehrt:
  - text: Was bleibt von Zeile 1 übrig, wenn du den Kommentar streichst?
    erklaerung: 'Nur `System.out.print("X");`. Alles ab `//` ist Kommentar.'
  - text: Was bleibt von Zeile 2 übrig?
    erklaerung: 'Nur `System.out.println("W");`. Der Blockkommentar endet noch in der Zeile.'
  - text: Ist `/* V */` in Zeile 3 ein Kommentar?
    teil: { typ: auswahl, optionen: ["Ja, er wird übersprungen.", "Nein, er steht in Anführungszeichen und wird ausgegeben."], richtig: [1] }
    erklaerung: In Anführungszeichen gibt es keine Kommentare.
  - text: Wie lautet die erste Ausgabezeile?
    teil: { typ: ausgabe, code: "System.out.print(\"X\");\nSystem.out.println(\"W\");", loesung: "XW" }
    erklaerung: '`print("X")` und dann `println("W")` in derselben Zeile ergibt `XW`.'
loesung: |
  **Ansatz:** Zuerst alle echten Kommentare streichen.
  ---
  Übrig bleiben `print("X")`, `println("W")` und `println("/* V */")`.
  ---
  Ausgabe: `XW` in Zeile 1 und `/* V */` in Zeile 2.
```

```aufgabe
id: wz-ko-knifflig
titel: Kommentarzeichen an ungewohnten Stellen
niveau: 3
lernziel: 4
kompetenz: verstehen
angabe: Was gibt das Programm aus? Lies genau, wo jeder Kommentar beginnt und endet.
teile:
  - typ: ausgabe
    code: |
      public class Raetsel {
          public static void main(String[] args) {
              System.out.print("a"); /* System.out.print("b");
              System.out.print("c"); */ System.out.print("d");
              // System.out.print("e"); /*
              System.out.print("f");
              System.out.println("//g");
              System.out.println(/* h */ "i");
          }
      }
    loesung: |
      adf//g
      i
    fehler:
      - wert: "adf//g\nh i"
        meldung: Das `/* h */` in Zeile 8 steht **außerhalb** der Anführungszeichen. Es ist ein Kommentar, und nur `"i"` wird ausgegeben.
      - wert: "ad\n"
        meldung: Das `/*` in Zeile 5 steht hinter `//`. Es gehört also zum Zeilenkommentar und öffnet keinen Blockkommentar.
      - wert: "acdf//g\ni"
        meldung: Der Blockkommentar beginnt in Zeile 3 und endet erst in Zeile 4 bei `*/`. Die Ausgabe von `c` liegt darin.
hinweise:
  - Ein `/*` hinter `//` ist Teil des Zeilenkommentars und öffnet nichts.
  - Ein Kommentar darf auch zwischen den Klammern von `println` stehen.
  - Alle `print` ohne `ln` schreiben in dieselbe Zeile.
loesung: |
  **Ansatz:** Von oben nach unten lesen und bei jedem Kommentarzeichen prüfen: Steht es in einem Text? Steht es schon in einem Kommentar?
  ---
  Zeile 3: `print("a")` ist Code. Dann beginnt ein Blockkommentar, der bis `*/` in Zeile 4 reicht. `b` und `c` fallen weg, `print("d")` ist Code.
  ---
  Zeile 5 ist ganz Zeilenkommentar, das `/*` darin zählt nicht. Zeile 6 schreibt `f`, Zeile 7 schreibt `//g` (Text) und beendet die Zeile.
  ---
  Zeile 8: `/* h */` ist ein Kommentar zwischen den Klammern, ausgegeben wird `i`. Ergebnis: `adf//g` und `i`.
```

## Fehlermeldungen lesen

```aufgabe
id: wz-fm-check
titel: Was prüft der Compiler?
niveau: 1
art: check
angabe: |
  Erinnere dich an [1.1 Was ist ein Programm?](/lernen/ep1/werkzeuge/was-ist-ein-programm).
  Welchen dieser Fehler meldet der Compiler?
teile:
  - typ: auswahl
    optionen:
      - Ein Tippfehler im Text `"Hallo Wlet!"`.
      - Ein fehlender Strichpunkt am Ende einer Anweisung.
      - Zwei Ausgaben stehen in der falschen Reihenfolge.
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Text in Anführungszeichen darf beliebig sein. Der Compiler prüft ihn nicht.
      - wert: 2
        meldung: Die Reihenfolge ist eine Frage der Absicht. Formal ist das Programm richtig, also meldet der Compiler nichts.
loesung: |
  Der Compiler prüft die Form, also die Regeln der Sprache.
  ---
  Ein fehlender Strichpunkt verletzt eine Regel. Die beiden anderen Fehler sind formal korrekt.
```

Fehler gehören zum Programmieren wie Rechenfehler zum Rechnen. Auch erfahrene Leute machen ständig
welche. Der Unterschied ist, dass sie Fehlermeldungen **lesen**, statt sie wegzuklicken. Eine
Fehlermeldung ist kein Urteil über dich. Sie ist ein Hinweis, wo du suchen sollst.

:::definition[Drei Arten von Fehlern]
- **Compilerfehler** (auch Syntaxfehler): Das Programm verletzt eine Regel von Java. Der Compiler meldet ihn, und das Programm startet gar nicht. Beispiel: fehlender Strichpunkt.
- **Laufzeitfehler**: Das Programm wird übersetzt und startet, bricht aber während der Ausführung ab. Java nennt das eine **Exception** (Ausnahme). Beispiel: Teilen durch null.
- **Logischer Fehler**: Das Programm läuft fehlerfrei bis zum Ende, tut aber nicht, was es soll. Niemand meldet etwas. Beispiel: falscher Text, falsche Reihenfolge.
:::

**Nichtbeispiel:** Eine **gelbe** Unterstreichung in IntelliJ ist keine Fehlermeldung, sondern eine
**Warnung** oder ein Verbesserungsvorschlag. Das Programm lässt sich trotzdem starten. Nur **rot**
unterstrichener Code ist ein Compilerfehler.

:::beispiel[Eine Compilermeldung zerlegen]
Die Datei `Hallo.java` enthält in Zeile 3 `System.out.println("Hallo Welt!")` ohne Strichpunkt.
Der Compiler meldet:

```text
Hallo.java:3: error: ';' expected
        System.out.println("Hallo Welt!")
                                         ^
1 error
```

Wir lesen die Meldung Stück für Stück:

1. `Hallo.java` ist die **Datei**.
2. `:3:` ist die **Zeilennummer**.
3. `error:` sagt, dass es ein Fehler ist (bei deutscher Spracheinstellung steht `Fehler:`).
4. `';' expected` ist die **Ursache**: Ein Strichpunkt wird erwartet (*expected*). Deutsch: `';' erwartet`.
5. Darunter steht die Zeile, und das Zeichen `^` zeigt auf die Stelle, an der der Compiler stutzt.

In IntelliJ erscheint dieselbe Meldung unten im Fenster „Build“ als `java: ';' expected`. Ein Klick
darauf springt direkt zur Zeile.
:::

:::beispiel[Einen Laufzeitfehler zerlegen]
```java
public class Teilen {
    public static void main(String[] args) {
        System.out.println("Start");
        System.out.println(10 / 0);
        System.out.println("Ende");
    }
}
```

Der Compiler übersetzt das ohne Klage. Beim Ausführen erscheint:

```text
Start
Exception in thread "main" java.lang.ArithmeticException: / by zero
	at Teilen.main(Teilen.java:4)
```

1. `Start` wird noch ausgegeben. Zeile 3 lief also fehlerfrei.
2. `Exception in thread "main"` heißt: Während `main` lief, trat eine Ausnahme auf.
3. `java.lang.ArithmeticException` ist die Art: ein Rechenfehler. `/ by zero` ist die Ursache: Teilen durch null.
4. `at Teilen.main(Teilen.java:4)` nennt den Ort: Methode `main` der Klasse `Teilen`, Datei `Teilen.java`, Zeile 4.
5. `Ende` erscheint **nicht**. Nach der Exception bricht das Programm ab.

Diese Liste von `at ...`-Zeilen heißt **Stacktrace**. In späteren Kapiteln wird sie länger. Dann liest
du sie von oben nach unten und suchst die erste Zeile, die eine deiner eigenen Dateien nennt.
:::

:::merke[Fehlermeldungen lesen]
1. Nur den **ersten** Fehler lesen. Die weiteren sind oft **Folgefehler**, also Meldungen, die nur wegen des ersten Fehlers entstehen.
2. Datei und Zeile ablesen und dorthin springen.
3. Die Ursache übersetzen (`expected` = erwartet, `cannot find symbol` = Name unbekannt).
4. Die genannte Zeile **und die Zeile davor** anschauen. Manchmal liegt die Ursache knapp davor.
5. Korrigieren, neu starten, wieder beim ersten Fehler beginnen.
:::

Die häufigsten Meldungen am Anfang:

- `';' expected`: Strichpunkt fehlt am Ende einer Anweisung.
- `cannot find symbol`: Ein Name ist unbekannt, meist ein Tippfehler wie `printn` oder falsche Großschreibung.
- `package system does not exist`: `System` wurde kleingeschrieben.
- `unclosed string literal`: Ein Text hat kein schließendes Anführungszeichen.
- `reached end of file while parsing`: Am Ende fehlt eine `}`, oder ein Kommentar wurde nicht geschlossen.
- `class X is public, should be declared in a file named X.java`: Klassenname und Dateiname passen nicht zusammen.

```aufgabe
id: wz-fm-check-art
titel: Welche Fehlerart?
niveau: 1
art: check
angabe: |
  Ein Programm startet, gibt drei Zeilen aus und endet mit `Process finished with exit code 0`.
  Die zweite Zeile ist aber falsch geschrieben. Welche Fehlerart liegt vor?
teile:
  - typ: auswahl
    optionen:
      - Compilerfehler
      - Laufzeitfehler
      - Logischer Fehler
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Mit einem Compilerfehler würde das Programm gar nicht starten.
      - wert: 1
        meldung: Ein Laufzeitfehler bricht das Programm mit einer Exception ab. Hier endet es normal mit exit code 0.
loesung: |
  Es startet (kein Compilerfehler) und läuft bis zum Ende (kein Laufzeitfehler).
  ---
  Es tut aber nicht das Gewünschte. Das ist ein logischer Fehler.
```

:::achtung[Ein Fehler, drei Meldungen]
Jemand vergisst in `HelloWorld.java` die Anführungszeichen: `System.out.println(Hello World!);` in
Zeile 3. Der Compiler meldet (hier gekürzt, ohne die Codezeilen mit `^` darunter):

```text
HelloWorld.java:3: error: ')' or ',' expected
HelloWorld.java:3: error: not a statement
HelloWorld.java:3: error: ';' expected
3 errors
```

Wer jetzt drei Fehler sucht, sucht zwei zu viel. Die Ursache ist nur das fehlende Paar `"`. Die
anderen Meldungen sind **Folgefehler**: Der Compiler ist nach dem ersten Fehler aus dem Tritt und
versteht den Rest der Zeile falsch. Darum gilt: ersten Fehler beheben, neu übersetzen, erst dann weiterlesen.
:::

:::achtung[Die Zeilennummer zeigt hinter die Ursache]
Hier fehlt die schließende Klammer von `main`:

```java
public class Hallo {
    public static void main(String[] args) {
        System.out.println("Hi");

}
```

Der Compiler meldet `Hallo.java:5: error: reached end of file while parsing`. Zeile 5 ist die letzte
Zeile. Dort ist aber alles in Ordnung. Die Ursache liegt davor: Der Compiler merkt erst am Dateiende,
dass eine `}` fehlt. Zähle in so einem Fall die öffnenden und schließenden geschweiften Klammern.
:::

```aufgabe
id: wz-fm-zeile-ablesen
titel: Die Zeile ablesen
niveau: 1
lernziel: 5
kompetenz: anwenden
angabe: |
  Der Compiler meldet:

  ```text
  Konto.java:7: error: ';' expected
  ```

  In welcher Zeile von `Konto.java` sollst du zuerst nachsehen?
teile:
  - typ: zahl
    loesung: "7"
    fehler:
      - wert: "1"
        meldung: Die `1` in Meldungen wie „1 error“ zählt die Fehler. Die Zeilennummer steht zwischen den Doppelpunkten direkt hinter dem Dateinamen.
hinweise:
  - 'Die Form ist immer `Datei:Zeile: error: Ursache`.'
loesung: |
  Die Meldung hat die Form `Datei:Zeile: error: Ursache`.
  ---
  Zwischen den Doppelpunkten steht `7`. Dort fehlt am Ende der Anweisung ein Strichpunkt.
```

```aufgabe
id: wz-fm-system-klein
titel: Eine Meldung übersetzen
niveau: 1
lernziel: 5
kompetenz: anwenden
angabe: |
  Der Compiler meldet für die Zeile `system.out.println("Tag");` die Ursache `package system does not exist`.
  Wie lautet die korrigierte Zeile?
teile:
  - typ: auswahl
    optionen:
      - '`System.out.println("Tag");`'
      - '`system.out.println(Tag);`'
      - '`system.Out.println("Tag");`'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die Anführungszeichen waren richtig. Die Meldung nennt `system`, also liegt das Problem bei diesem Wort.
      - wert: 2
        meldung: "`out` war richtig kleingeschrieben. Die Meldung beanstandet `system`. Die Klasse beginnt mit großem S."
hinweise:
  - Welches Wort nennt die Meldung? Wie schreibt man die Klasse richtig?
loesung: |
  Die Meldung sagt: Ein „Paket“ namens `system` gibt es nicht. Java kennt nur die Klasse `System` mit großem S.
  ---
  Korrektur: `System.out.println("Tag");`.
```

```aufgabe
id: wz-fm-meldung-zerlegen
titel: Eine Meldung zerlegen
niveau: 1
lernziel: 5
kompetenz: anwenden
angabe: |
  Zerlege die Meldung in ihre Teile:

  ```text
  Spiel.java:12: error: cannot find symbol
  ```
teile:
  - typ: lueckentext
    text: |
      Datei: ___
      Zeile: ___
      Ursache: Ein ___ ist unbekannt.
    luecken: [["Spiel.java"], ["12"], ["Name", "Symbol", "Bezeichner"]]
    fehler:
      - wert: ["Spiel", "12", "Name"]
        meldung: Der Dateiname enthält die Endung, so wie er vor dem ersten Doppelpunkt steht.
hinweise:
  - "*cannot find symbol* heißt: Ich finde dieses Symbol (diesen Namen) nicht."
loesung: |
  Vor dem ersten Doppelpunkt steht die Datei `Spiel.java`, dahinter die Zeile `12`.
  ---
  `cannot find symbol` bedeutet: Ein Name (ein Symbol) ist unbekannt, oft durch einen Tippfehler.
```

```aufgabe
id: wz-fm-arten
titel: Fehlerarten zuordnen
niveau: 2
lernziel: 5
kompetenz: verstehen
angabe: Beurteile die Aussagen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Ein Programm mit einem Compilerfehler gibt bis zur fehlerhaften Zeile noch etwas aus.
        richtig: false
        erklaerung: Bei einem Compilerfehler entsteht kein Bytecode. Das Programm startet gar nicht.
      - text: Ein Programm mit einem Laufzeitfehler gibt bis zur fehlerhaften Stelle aus, was davor steht.
        richtig: true
        erklaerung: Die Anweisungen vor der Exception werden normal ausgeführt.
      - text: "`System.out.println(10 / 0);` ist ein Compilerfehler."
        richtig: false
        erklaerung: Der Compiler übersetzt das. Erst beim Ausführen tritt die `ArithmeticException` auf.
      - text: Logische Fehler findet man nur, indem man die Ausgabe mit dem Ziel vergleicht.
        richtig: true
        erklaerung: Weder Compiler noch JVM wissen, was das Programm tun soll.
    fehler:
      - wert: [f, r, r, r]
        meldung: "`10 / 0` ist formal eine gültige Rechnung. Der Compiler übersetzt sie. Das Problem entsteht erst beim Ausrechnen, also zur Laufzeit."
hinweise:
  - Frage bei jeder Aussage, ob der Fehler beim Übersetzen oder beim Ausführen auffällt.
  - Teilen durch null ist erst ein Problem, wenn gerechnet wird.
loesung: |
  **Ansatz:** Zeitpunkt bestimmen: beim Übersetzen, beim Ausführen oder nie gemeldet.
  ---
  Aussage 1 ist falsch, denn ohne Bytecode läuft nichts. Aussage 2 ist richtig.
  ---
  Aussage 3 ist falsch: Division durch null ist ein Laufzeitfehler. Aussage 4 ist richtig. Ergebnis: falsch, richtig, falsch, richtig.
```

```aufgabe
id: wz-fm-laufzeit-zeile
titel: Wo ist das Programm abgestürzt?
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Beim Ausführen erscheint:

  ```text
  Anfang
  3
  Exception in thread "main" java.lang.ArithmeticException: / by zero
  	at Quote.main(Quote.java:5)
  ```

  Markiere die Zeile, in der die Exception auftritt.
teile:
  - typ: zeilen
    code: |
      public class Quote {
          public static void main(String[] args) {
              System.out.println("Anfang");
              System.out.println(12 / 4);
              System.out.println(12 / (4 - 4));
              System.out.println("Schluss");
          }
      }
    loesung: [5]
    fehler:
      - wert: [4]
        meldung: "`12 / 4` ergibt `3` und läuft fehlerfrei. Lies die Zeilennummer in `Quote.java:5` ab."
      - wert: [6]
        meldung: Zeile 6 wird gar nicht mehr erreicht. Das Programm bricht vorher ab.
hinweise:
  - Die Zeilennummer steht in der Klammer hinter `at Quote.main`.
  - Welche Rechnung teilt durch null?
loesung: |
  **Ansatz:** Die Zeile aus dem Stacktrace ablesen und am Code bestätigen.
  ---
  `Quote.java:5` nennt Zeile 5. Dort steht `12 / (4 - 4)`, und `4 - 4` ist `0`.
  ---
  Probe: Zeile 4 rechnet `12 / 4 = 3` ohne Fehler, darum steht `3` noch in der Ausgabe. `Schluss` fehlt, weil Zeile 6 nie erreicht wird.
```

```aufgabe
id: wz-fm-erster-fehler
titel: Welcher Fehler zuerst?
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Der Compiler meldet für eine Datei:

  ```text
  Ampel.java:4: error: unclosed comment
  Ampel.java:8: error: reached end of file while parsing
  2 errors
  ```

  (`unclosed comment` heißt „nicht geschlossener Kommentar“, `reached end of file while parsing` heißt
  „beim Lesen das Dateiende erreicht“.) Was ist das sinnvollste Vorgehen?
teile:
  - typ: auswahl
    optionen:
      - Zuerst am Dateiende (Zeile 8) etwas reparieren, weil das Dateiende wichtiger ist.
      - Zuerst den Kommentar, der in Zeile 4 beginnt, mit `*/` schließen, neu übersetzen und dann schauen, ob der zweite Fehler noch da ist.
      - Beide Meldungen ignorieren und das Programm trotzdem starten.
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Spätere Meldungen sind oft Folgefehler des ersten. Wer mit dem letzten beginnt, repariert womöglich etwas, das gar nicht kaputt ist.
      - wert: 2
        meldung: Mit einem Compilerfehler entsteht kein Bytecode. Es gibt nichts, was man starten könnte.
hinweise:
  - Kann der zweite Fehler eine Folge des ersten sein?
  - Ein Blockkommentar ohne `*/` „verschluckt“ alles bis zum Dateiende.
loesung: |
  **Ansatz:** Immer beim ersten Fehler beginnen.
  ---
  Der Blockkommentar ab Zeile 4 wird nie geschlossen. Der Compiler liest deshalb alles bis zum Dateiende als Kommentar und vermisst danach die schließenden Klammern. Die Meldung zum Dateiende ist also eine Folge des ersten Fehlers.
  ---
  Also das fehlende `*/` ergänzen, neu übersetzen und nur dann weitermachen, wenn noch etwas gemeldet wird. Meist verschwinden dann beide Meldungen.
```

```aufgabe
id: wz-fm-gefuehrt
titel: Eine Meldung Schritt für Schritt nutzen
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Die Datei `Gruss.java` hat fünf Zeilen. Der Compiler meldet `Gruss.java:3: error: cannot find symbol` mit dem Zusatz
  `symbol: method printn(String)`. Markiere die Zeile, die du ändern musst.
teile:
  - typ: zeilen
    code: |
      public class Gruss {
          public static void main(String[] args) {
              System.out.printn("Servus");
          }
      }
    loesung: [3]
    fehler:
      - wert: [1]
        meldung: Der Klassenname passt zur Datei. Die Meldung nennt Zeile 3.
hinweise:
  - Die Zeilennummer steht hinter dem Dateinamen.
  - Der Zusatz `symbol:` nennt den unbekannten Namen.
gefuehrt:
  - text: Welche Zeile nennt die Meldung?
    teil: { typ: zahl, loesung: "3" }
    erklaerung: "`Gruss.java:3:` heißt Zeile 3."
  - text: Welcher Name ist unbekannt?
    teil: { typ: lueckentext, text: "Der unbekannte Name ist ___.", luecken: [["printn"]] }
    erklaerung: "Der Zusatz `symbol: method printn(String)` nennt die Methode `printn`."
  - text: Wie heißt die Methode richtig?
    teil: { typ: lueckentext, text: "System.out.___", luecken: [["println"]] }
    erklaerung: Es fehlt das l. Richtig ist `println`.
  - text: Was tust du nach der Korrektur?
    erklaerung: Neu starten. IntelliJ übersetzt neu, und das Programm gibt `Servus` aus.
loesung: |
  **Ansatz:** Datei, Zeile und Ursache aus der Meldung ablesen.
  ---
  Zeile 3, unbekanntes Symbol `printn`.
  ---
  Korrektur: `System.out.println("Servus");`. Danach läuft das Programm und gibt `Servus` aus.
```

````aufgabe
id: wz-fm-logisch
titel: Ein logischer Fehler im Countdown
niveau: 3
lernziel: 5
kompetenz: anwenden
quelle: nach dem Debugging-Teil der Vorlesung (Folien WS2021, Teil 9), eigene Aufgabe
angabe: |
  Das Programm soll genau diese Ausgabe erzeugen:

  ```text
  3
  2
  1
  Start!
  ```

  Es kompiliert und läuft ohne Exception, gibt aber etwas anderes aus. Finde die logischen Fehler und repariere sie.
  Führe das Programm zuerst gedanklich aus, damit du weißt, was es tatsächlich ausgibt.
teile:
  - typ: code
    vorlage: |
      public class Countdown {
          public static void main(String[] args) {
              System.out.println(3);
              System.out.println(1);
              System.out.print(2);
              System.out.println("Start!");
          }
      }
    musterloesung: |
      public class Countdown {
          public static void main(String[] args) {
              System.out.println(3);
              System.out.println(2);
              System.out.println(1);
              System.out.println("Start!");
          }
      }
    tests:
      - { stdout: "3\n2\n1\nStart!\n", beschreibung: "Countdown 3, 2, 1, Start!" }
    fehler:
      - wert: 1
        meldung: Führe dein Programm Zeile für Zeile aus. Steht jede Zahl in einer eigenen Zeile, und stimmt die Reihenfolge?
hinweise:
  - Die Vorlage gibt `3`, `1` und dann `2Start!` aus. Vergleiche das Zeile für Zeile mit dem Ziel.
  - Zwei Fehler, zwei Ursachen. Eine ist die Reihenfolge, die andere ist `print` statt `println`.
loesung: |
  **Ansatz:** Zuerst die tatsächliche Ausgabe bestimmen, dann mit dem Ziel vergleichen.
  ---
  Die Vorlage gibt `3`, dann `1`, dann `2Start!` aus. Fehler 1: `1` und `2` sind vertauscht.
  ---
  Fehler 2: `print(2)` beendet die Zeile nicht, darum klebt `Start!` an der `2`.
  ---
  Korrektur: Reihenfolge 3, 2, 1 und überall `println`. Probe: vier Zeilen wie gefordert.
````

```reflexion
frage: Warum ist ein Compilerfehler eigentlich die „angenehmste“ der drei Fehlerarten?
antwort: |
  Weil er mir Datei, Zeile und Ursache nennt, bevor das Programm überhaupt läuft. Ein Laufzeitfehler zeigt
  sich erst beim Ausführen, und vielleicht nur bei bestimmten Eingaben. Ein logischer Fehler meldet sich gar
  nicht. Den finde ich nur, wenn ich die Ausgabe sorgfältig mit dem Ziel vergleiche. Je früher ein Fehler
  auffällt, desto leichter ist er zu beheben.
```

## Kursmodus 2026W und Abgaberegeln

```aufgabe
id: wz-km-check
titel: Die Hälfte von 30
niveau: 1
art: check
angabe: |
  Im Test von EP1 gibt es 30 Punkte. Wie viele Punkte sind **50 Prozent** davon?
  (Wozu du das brauchst, steht gleich in dieser Lektion. Zum Rechnen mit Prozent siehe auch [Mathematik 3, 1.6 Prozentrechnung](/lernen/mathe3/zahlen/prozentrechnung).)
teile:
  - typ: zahl
    loesung: "30*0.5"
    fehler:
      - wert: "50"
        meldung: 50 Prozent sind ein Anteil, die Hälfte. Gesucht ist die Hälfte von 30 Punkten.
loesung: |
  50 Prozent heißt die Hälfte.
  ---
  30 : 2 = 15 Punkte.
```

Jetzt weißt du, wie man ein Programm schreibt und startet. Bevor es mit dem eigentlichen Stoff
losgeht, solltest du wissen, wie EP1 bewertet wird. Dann kannst du deine Zeit klug einteilen. Die
Angaben stammen aus TISS (dem Informationssystem der TU Wien mit den offiziellen Daten jeder
Lehrveranstaltung) für das Wintersemester 2026/27 (Stand Oktober 2026). Verbindlich ist immer,
was in TISS und im TUWEL-Kurs der Lehrveranstaltung steht.

EP1 hat drei **Kompetenzstufen**. Wer ohne Vorkenntnisse beginnt, ist automatisch in **K1**. Wer
programmieren kann, konnte am Anfang des Semesters einen freiwilligen **Einstufungstest** für K2
machen und danach für K3. Dieser Kurs folgt K1.

:::definition[Bewertung in Kompetenzstufe K1 (2026W)]
Insgesamt gibt es höchstens **100 Punkte**:

- **Übungen ohne Aufgabenblatt:** zwei Termine, zusammen höchstens 6 Punkte. Höchstens zwei versäumte Übungen kann man in Tutorien nachholen.
- **Aufgabenblätter:** vier Blätter, besprochen im Feedbackgespräch, zusammen höchstens 24 Punkte.
- **Quiz:** vier Quiz in TUWEL, jedes mit Wiederholmöglichkeit, zusammen höchstens 40 Punkte.
- **Test:** ein Programmiertest am Rechner mit Wiederholmöglichkeit, höchstens 30 Punkte.

Zwei Regeln sind entscheidend. Bei Quiz, Blättern und Übungen gibt es **keine** Mindestpunktzahl. Im
**Test** brauchst du mindestens **50 Prozent**, also 15 von 30 Punkten. Sonst werden die Testpunkte
**nicht angerechnet**, sie zählen dann als 0.

Notenschlüssel: 92 bis 100 Punkte Sehr gut (1), 83 bis 91 Gut (2), 74 bis 82 Befriedigend (3),
65 bis 73 Genügend (4), unter 65 Nicht genügend (5). Bei Quiz und Test sind die Folien und die
Java-API als Unterlagen erlaubt. Die **Java-API** ist die Sammlung fertiger Klassen, die mit Java
mitkommt (zum Beispiel `System` oder `Math`), zusammen mit ihrer Beschreibung.
:::

Der Test ist für den 27. Jänner 2027 angesetzt, ein zweiter Termin für den 8. Februar 2027. Wie genau
Quiz und Test 2026W aufgebaut sind, ist noch nicht veröffentlicht. Dieser Kurs übt sie nach dem Muster
der TUWEL-Tests und Programmiertests der Jahre 2020 bis 2023. Das ist eine begründete Annahme, keine
Zusage.

:::beispiel[Gesamtpunkte und Note berechnen]
Mia hat 6 Punkte aus den Übungen, 19 aus den Blättern, 31 aus den Quiz und 21 im Test.

1. **Hürde prüfen:** 21 von 30 ist mehr als 15. Der Test zählt.
2. **Addieren:** 6 + 19 + 31 + 21 = 77 Punkte.
3. **Note ablesen:** 77 liegt zwischen 74 und 82. Das ist ein **Befriedigend (3)**.
:::

:::beispiel[Die 50-Prozent-Hürde im Test]
Jonas hat 6 Punkte aus den Übungen, 22 aus den Blättern und 35 aus den Quiz. Im Test hat er 14 Punkte.

1. **Hürde prüfen:** 14 ist weniger als 15. Die Testpunkte werden nicht angerechnet und zählen als 0.
2. **Addieren:** 6 + 22 + 35 + 0 = 63 Punkte.
3. **Note:** 63 ist unter 65, also Nicht genügend.

Beim Wiederholungstest schafft Jonas 18 Punkte. Dann zählt der Test: 6 + 22 + 35 + 18 = 81 Punkte,
ein Befriedigend. Hätten seine 14 Punkte gezählt, wären es schon im ersten Test 63 + 14 = 77 Punkte
gewesen, ebenfalls ein Befriedigend. Ein einziger Punkt unter der Hürde kostet also 14 Punkte und
macht aus einem Befriedigend ein Nicht genügend.
:::

:::merke[Note berechnen]
1. Testpunkte prüfen: unter 15, dann zählen sie als 0.
2. Übungen + Blätter + Quiz + (gültige) Testpunkte addieren.
3. Notengrenzen 92, 83, 74, 65 von oben nach unten vergleichen.
:::

### Die Regeln für Aufgabenblätter

Die Regeln auf Aufgabenblatt 1 im Wintersemester 2023 lauten sinngemäß so. Die Blätter 2026W
werden sehr ähnliche Regeln haben. Lies sie trotzdem auf jedem Blatt neu.

1. Du lädst dein **ganzes IntelliJ-Projekt** bis zur Frist in TUWEL hoch.
2. Zusätzlich **kreuzt** du in TUWEL an, welche Aufgaben du gelöst hast.
3. Deine Programme müssen **kompilierbar und ausführbar** sein.
4. Du änderst **keine Dateinamen** und **nicht die Ordnerstruktur**.
5. Ausgaben machst du mit `System.out.println()` oder `System.out.print()`.
6. Du verwendest nur die erlaubten Klassen der Java-API. Auf Blatt 1 waren das `CodeDraw`, `Math` und `String`.

Im **Feedbackgespräch** erklärst du deine Lösung einer Tutorin oder einem Tutor. Bewertet wird, ob du
deinen Code verstehst. Nach Erfahrungsberichten von Studierenden ergibt sich die Punktzahl aus einem
Prozentsatz für das Gespräch und dem Anteil der angekreuzten Aufgaben. Abgaben werden mit einer
Software auf Plagiate geprüft. Wer fremden Code oder KI-Code abgibt, ohne ihn zu verstehen, fällt im
Gespräch auf. Was genau 2026W für KI-Werkzeuge gilt, steht in TUWEL.

```aufgabe
id: wz-km-erlaubt
titel: Erlaubte Klassen
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Auf einem Blatt steht: „Erlaubt sind die Klassen CodeDraw, Math und String.“ Du findest im Internet eine
  fertige Lösung, die die Klasse `ArrayList` verwendet. Was folgt daraus?
teile:
  - typ: auswahl
    optionen:
      - Die Lösung ist erlaubt, weil `ArrayList` zu Java gehört.
      - Die Lösung verstößt gegen die Regeln, weil `ArrayList` nicht auf der Liste steht.
      - Die Lösung ist erlaubt, solange sie kompiliert.
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Auch Klassen, die zu Java gehören, sind nur erlaubt, wenn das Blatt sie nennt. Die Liste ist abschließend.
      - wert: 2
        meldung: Kompilieren ist nötig, aber nicht ausreichend. Die Regel über erlaubte Klassen gilt zusätzlich.
hinweise:
  - Die Regel lautet „keine Klassen der Java-API außer den ausdrücklich erlaubten“.
  - Steht `ArrayList` auf der Liste?
loesung: |
  **Ansatz:** Mit der Liste der erlaubten Klassen vergleichen.
  ---
  Erlaubt sind nur `CodeDraw`, `Math` und `String`. `ArrayList` gehört nicht dazu.
  ---
  Die Lösung verstößt also gegen die Regeln. Abgesehen davon musst du im Feedbackgespräch jede Zeile erklären können.
```

:::achtung[Den Test trotz Hürde mitgezählt]
Eine typische falsche Rechnung: 6 + 20 + 34 + 13 = 73 Punkte, also Genügend. Falsch! 13 Testpunkte
liegen unter 15. Sie werden nicht angerechnet. Richtig ist 6 + 20 + 34 + 0 = 60 Punkte, also Nicht
genügend. Prüfe die Hürde **immer zuerst**, bevor du addierst.
:::

:::achtung[Eine halbfertige Aufgabe verhindert den Start]
Du hast Aufgabe 1 bis 4 gelöst. In `Aufgabe5.java` fehlt noch ein Strichpunkt. Du startest
`Aufgabe1` und bekommst trotzdem einen Compilerfehler mit der Meldung `Aufgabe5.java:12: error: ';' expected`.
IntelliJ übersetzt vor dem Start das ganze Projekt, und eine einzige fehlerhafte Datei bricht das ab.
Genau deshalb verlangen die Blätter ein kompilierbares Projekt. Vor der Abgabe gilt: Unfertigen Code
in `Aufgabe5.java` auskommentieren, sodass alles übersetzt, und Aufgabe 5 nicht ankreuzen.
:::

```aufgabe
id: wz-km-summe
titel: Punkte zusammenzählen
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Sara hat 6 Punkte aus den Übungen, 21 aus den Blättern, 36 aus den Quiz und 24 im Test. Wie viele Punkte hat sie insgesamt?
teile:
  - typ: zahl
    loesung: "6 + 21 + 36 + 24"
    fehler:
      - wert: "63"
        meldung: Du hast den Test vergessen. 24 von 30 liegt über der Hürde von 15, also zählt er.
hinweise:
  - Prüfe zuerst, ob der Test mit 24 Punkten zählt.
loesung: |
  24 ist mindestens 15, der Test zählt.
  ---
  6 + 21 + 36 + 24 = 87 Punkte.
```

```aufgabe
id: wz-km-note
titel: Note ablesen
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Welche Note gehört zu 87 Punkten? Gib die Note als Zahl ein (1 = Sehr gut, 5 = Nicht genügend).
teile:
  - typ: zahl
    loesung: "2"
    fehler:
      - wert: "1"
        meldung: Für Sehr gut brauchst du mindestens 92 Punkte.
      - wert: "3"
        meldung: Befriedigend reicht von 74 bis 82. 87 liegt darüber.
hinweise:
  - Die Grenzen lauten 92, 83, 74 und 65.
loesung: |
  Die Grenzen von oben: 92 für Sehr gut, 83 für Gut.
  ---
  87 ist mindestens 83, aber unter 92. Das ist ein Gut, also Note 2.
```

```aufgabe
id: wz-km-huerde
titel: Knapp unter der Hürde
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Tim hat 4 Punkte aus den Übungen, 23 aus den Blättern, 36 aus den Quiz und 14 im Test.
  a) Wie viele Punkte zählen insgesamt? b) Welche Note ergibt das (als Zahl 1 bis 5)?
teile:
  - typ: zahl
    label: a) Gesamtpunkte
    loesung: "4 + 23 + 36 + 0"
    fehler:
      - wert: "77"
        meldung: 14 von 30 sind weniger als 50 Prozent. Die Testpunkte werden nicht angerechnet.
  - typ: zahl
    label: b) Note
    loesung: "5"
    fehler:
      - wert: "3"
        meldung: Mit den 14 Testpunkten wären es 77 Punkte. Diese Punkte zählen aber nicht. Rechne mit dem Test als 0.
hinweise:
  - Prüfe zuerst die 50-Prozent-Hürde im Test. 50 Prozent von 30 sind 15.
  - Liegt der Test darunter, rechnest du mit 0 Testpunkten weiter.
loesung: |
  **Ansatz:** Zuerst die Hürde prüfen, dann addieren, dann die Note ablesen.
  ---
  14 ist kleiner als 15. Der Test zählt als 0.
  ---
  4 + 23 + 36 + 0 = 63. Das liegt unter 65, also Nicht genügend, Note 5. Mit gültigem Test wären es 77 Punkte und ein Befriedigend gewesen.
```

```aufgabe
id: wz-km-regeln
titel: Regeln für die Abgabe
niveau: 2
lernziel: 6
kompetenz: verstehen
angabe: Beurteile die Aussagen über die Abgabe eines Aufgabenblatts.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Es reicht, die `.java`-Datei der schwierigsten Aufgabe hochzuladen.
        richtig: false
        erklaerung: Hochgeladen wird das ganze IntelliJ-Projekt.
      - text: Ohne Ankreuzen in TUWEL zählt eine gelöste Aufgabe nicht.
        richtig: true
        erklaerung: Bewertet wird, was angekreuzt ist.
      - text: Ich darf `Aufgabe2.java` in `Loesung2.java` umbenennen, damit es übersichtlicher ist.
        richtig: false
        erklaerung: Dateinamen und Ordnerstruktur dürfen nicht geändert werden.
      - text: Ein Compilerfehler in einer einzigen Datei kann das ganze Projekt unbrauchbar machen.
        richtig: true
        erklaerung: IntelliJ übersetzt vor dem Start das ganze Projekt. Darum muss alles kompilieren.
    fehler:
      - wert: [f, r, r, r]
        meldung: Dateinamen bleiben, wie sie sind. Die Tutorinnen und Tutoren und ihre Werkzeuge erwarten genau diese Namen.
hinweise:
  - Denk an die sechs Regeln auf dem Blatt.
  - Wer bewertet die Abgabe, und was muss dafür funktionieren?
loesung: |
  **Ansatz:** Jede Aussage mit den Blattregeln vergleichen.
  ---
  Aussage 1 ist falsch (ganzes Projekt). Aussage 2 ist richtig (ankreuzen).
  ---
  Aussage 3 ist falsch (Dateinamen bleiben). Aussage 4 ist richtig (alles muss kompilieren). Ergebnis: falsch, richtig, falsch, richtig.
```

```aufgabe
id: wz-km-gefuehrt
titel: Die Note Schritt für Schritt
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Lea hat 6 Punkte aus den Übungen, 18 aus den Blättern, 29 aus den Quiz und 16 im Test. Welche Note bekommt sie (als Zahl 1 bis 5)?
teile:
  - typ: zahl
    loesung: "4"
    fehler:
      - wert: "5"
        meldung: 16 Testpunkte liegen über der Hürde von 15. Der Test zählt also mit.
hinweise:
  - Prüfe die Hürde, addiere, vergleiche mit den Grenzen.
  - Die Notengrenzen sind 92, 83, 74, 65.
gefuehrt:
  - text: Zählt der Test? Wie viele Testpunkte gehen in die Summe ein?
    teil: { typ: zahl, loesung: "16" }
    erklaerung: 16 ist mindestens 15. Alle 16 Punkte zählen.
  - text: Wie viele Punkte hat Lea insgesamt?
    teil: { typ: zahl, loesung: "6 + 18 + 29 + 16" }
    erklaerung: 6 + 18 + 29 + 16 = 69.
  - text: Zwischen welchen Grenzen liegt 69?
    erklaerung: Zwischen 65 und 73. Das ist der Bereich für Genügend.
  - text: Welche Note ist das?
    erklaerung: Genügend, also Note 4.
loesung: |
  **Ansatz:** Hürde, Summe, Notengrenze.
  ---
  16 ist mindestens 15, der Test zählt. Summe: 6 + 18 + 29 + 16 = 69.
  ---
  69 liegt zwischen 65 und 73. Note 4, Genügend.
```

```aufgabe
id: wz-km-ziel
titel: Wie viel brauche ich im Test?
niveau: 3
lernziel: 6
kompetenz: modellieren
angabe: |
  Noah hat 6 Punkte aus den Übungen, 20 aus den Blättern und 32 aus den Quiz. Er möchte mindestens ein **Gut**.
  Wie viele Testpunkte braucht er mindestens? (Es gibt nur ganze Punkte.)
teile:
  - typ: zahl
    loesung: "83 - (6 + 20 + 32)"
    fehler:
      - wert: "15"
        meldung: 15 Punkte sind nur die Hürde, damit der Test überhaupt zählt. Für ein Gut braucht er insgesamt 83 Punkte.
      - wert: "34"
        meldung: Du hast mit der Grenze für Sehr gut (92) gerechnet. Gut beginnt bei 83 Punkten.
hinweise:
  - Ab wie vielen Punkten gibt es ein Gut?
  - Wie viele Punkte fehlen bis dorthin? Prüfe am Ende, ob dieser Testwert auch die Hürde von 15 erfüllt.
loesung: |
  **Ansatz:** Fehlende Punkte bis zur Notengrenze berechnen, dann die Hürde prüfen.
  ---
  Bisher: 6 + 20 + 32 = 58 Punkte. Gut beginnt bei 83.
  ---
  83 - 58 = 25 Testpunkte. 25 ist mehr als 15, die Hürde ist also automatisch erfüllt.
  ---
  Probe: 58 + 25 = 83, das ist genau Gut. Mit 24 Punkten wären es 82, nur Befriedigend.
```

```reflexion
frage: Die Quiz bringen 40 Punkte, der Test 30. Trotzdem ist der Test in gewisser Weise „gefährlicher“. Warum?
antwort: |
  Weil der Test eine Hürde hat. Mit weniger als 15 Punkten zählt er gar nicht, und dann fehlen auf einen Schlag
  bis zu 14 Punkte. Bei den Quiz zählt jeder Punkt einzeln, es gibt keine Mindestgrenze. Darum lohnt es sich,
  das Programmieren am Rechner früh und regelmäßig zu üben und nicht erst kurz vor dem Test.
```

## CodeDraw einrichten und das erste Bild

```aufgabe
id: wz-cd-check
titel: Wo liegt CodeDraw?
niveau: 1
art: check
angabe: |
  In [1.2 IntelliJ: Projekt anlegen und Programm starten](/lernen/ep1/werkzeuge/intellij-projekt-anlegen-und-programm-starten)
  hast du den Aufbau einer Vorlage gesehen. In welchem Ordner liegt dort die Datei `CodeDraw.jar`?
teile:
  - typ: auswahl
    optionen:
      - "`src`"
      - "`lib`"
      - "`out`"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: In `src` liegt nur dein eigener Quelltext. Fremder, fertiger Code liegt getrennt davon.
      - wert: 2
        meldung: "`out` füllt der Compiler mit deinen `.class`-Dateien. Bibliotheken liegen woanders."
loesung: |
  `lib` steht für *library*, also Bibliothek.
  ---
  Dort liegt `CodeDraw.jar`, getrennt von deinem Quelltext in `src`.
```

Bisher erscheint jede Ausgabe als Text auf der Konsole. Mit **CodeDraw** öffnet dein Programm ein
Fenster und zeichnet darin Linien, Rechtecke und Kreise. CodeDraw wurde an der TU Wien für EP1
entwickelt. Es kommt auf den Aufgabenblättern vor, im Wintersemester 2023 etwa auf Blatt 1 bis 3.

CodeDraw ist eine **Bibliothek**: fertiger Code, den andere geschrieben haben und den du verwendest.
Java-Bibliotheken werden als **JAR-Datei** weitergegeben (*Java Archive*, ein ZIP-Archiv voller
`.class`-Dateien). Damit dein Programm sie findet, sind zwei Dinge nötig. Die JAR-Datei muss im
Projekt eingetragen sein. Und am Anfang deiner Datei muss eine **import-Anweisung** stehen.

:::definition[Eine Bibliothek verwenden]
- **Eintragen:** Die JAR-Datei liegt im Projekt (meist in `lib`) und ist in IntelliJ als Bibliothek angemeldet. In den Vorlagen aus TUWEL ist das schon erledigt.
- **Importieren:** Ganz oben in der Datei, vor `public class`, steht `import codedraw.*;`. Das heißt: Verwende alle Klassen aus dem **Paket** (einer benannten Sammlung von Klassen) `codedraw`, zum Beispiel `CodeDraw` und `Palette`. Der Stern `*` steht für „alle“.
:::

**Beispiel:** Eine Datei beginnt mit `import codedraw.*;` und verwendet danach `new CodeDraw(400, 400)`.
Das kompiliert. **Nichtbeispiel:** Fehlt die import-Zeile, meldet der Compiler bei `CodeDraw`
`cannot find symbol` mit dem Zusatz `symbol: class CodeDraw`. Ohne Import kennt Java den Namen nicht.

### CodeDraw in ein eigenes Projekt einbinden

1. Die Datei `CodeDraw.jar` von der Release-Seite des Projekts herunterladen (github.com/Krassnig/CodeDraw, Abschnitt „Releases“). Nimm die Version, die in der TUWEL-Vorlage steckt. Im Wintersemester 2023 war das Version 4.
2. Im Projektordner einen Ordner `lib` anlegen und die Datei hineinkopieren.
3. In IntelliJ **File → Project Structure → Libraries** öffnen.
4. Auf **+** klicken, **Java** wählen, `lib/CodeDraw.jar` auswählen und mit OK bestätigen.
5. Mit **Apply** und **OK** schließen. Jetzt kompiliert `import codedraw.*;`.

```aufgabe
id: wz-cd-check-import
titel: Was fehlt?
niveau: 1
art: check
angabe: |
  Der Compiler meldet in Zeile 3 `cannot find symbol` und dazu `symbol: class CodeDraw`. Die Bibliothek ist eingetragen.
  Was fehlt am wahrscheinlichsten?
teile:
  - typ: auswahl
    optionen:
      - "Die Zeile `import codedraw.*;` am Dateianfang."
      - "Ein Strichpunkt nach `public class`."
      - "Die Methode `show()`."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Hinter `public class Name` steht nie ein Strichpunkt. Die Meldung sagt, dass der Name `CodeDraw` unbekannt ist.
      - wert: 2
        meldung: Ein fehlendes `show()` ist kein Compilerfehler. Die Meldung sagt, dass Java die Klasse `CodeDraw` nicht kennt.
loesung: |
  „cannot find symbol … class CodeDraw“ heißt: Der Name `CodeDraw` ist unbekannt.
  ---
  Ist die Bibliothek eingetragen, fehlt der Import `import codedraw.*;`.
```

### Das Koordinatensystem

Ein CodeDraw-Fenster besteht aus **Pixeln**, also winzigen Bildpunkten. Jeder Punkt hat zwei
Koordinaten. `x` zählt nach rechts, `y` zählt **nach unten**. Der Ursprung (0, 0) liegt in der
**linken oberen Ecke**. Das ist anders als in der Mathematik, wo `y` nach oben wächst.

```text
(0,0) ───────────── x wächst nach rechts ──────────▶ (400,0)
  │
  │      Punkt (100, 50): 100 nach rechts, 50 nach unten
  │
  y wächst
  nach unten
  │
  ▼
(0,400)                                              (400,400)
```

Die Zeile `CodeDraw cd = new CodeDraw(400, 400);` öffnet ein Fenster mit 400 mal 400 Pixeln. Danach
steht der Name `cd` für dieses Fenster. Vorerst reicht diese Vorstellung: `cd` ist dein Zeichenfenster,
und mit `cd.` vor einem Befehl sagst du, dass der Befehl in diesem Fenster ausgeführt wird. Was genau
hinter solchen Namen (**Variablen**) steckt, lernst du in
[2.1 Variablen, Datentypen und Literale](/lernen/ep1/ausdruecke/variablen-datentypen-und-literale).
Die wichtigsten Befehle:

- `cd.setColor(Palette.RED);` legt die Farbe für **alle folgenden** Formen fest. `Palette` ist eine Klasse aus CodeDraw mit fertigen Farben. Weitere Farben sind etwa `BLUE`, `GREEN`, `YELLOW`, `ORANGE`, `BROWN`, `BLACK`, `GRAY`, `WHITE`, immer mit `Palette.` davor. Solange du keine Farbe setzt, zeichnet CodeDraw schwarz.
- `cd.setLineWidth(3);` legt die Linienbreite in Pixeln fest.
- `cd.drawLine(x1, y1, x2, y2);` zeichnet eine Linie von (x1, y1) nach (x2, y2).
- `cd.drawRectangle(x, y, breite, hoehe);` zeichnet den Rand eines Rechtecks. **(x, y) ist die linke obere Ecke.**
- `cd.drawSquare(x, y, seite);` zeichnet ein Quadrat, ebenfalls mit (x, y) als linker oberer Ecke.
- `cd.drawCircle(x, y, radius);` zeichnet einen Kreis. **(x, y) ist der Mittelpunkt.**
- `cd.drawTriangle(x1, y1, x2, y2, x3, y3);` zeichnet ein Dreieck durch drei Punkte.
- Mit `fill` statt `draw` (`fillRectangle`, `fillSquare`, `fillCircle`, `fillTriangle`) wird die Form ausgefüllt.
- `cd.show();` zeigt alles Gezeichnete im Fenster an. Dieser Aufruf steht am Ende.

:::beispiel[Ein Haus zeichnen]
```java
import codedraw.*;

public class Haus {
    public static void main(String[] args) {
        CodeDraw cd = new CodeDraw(400, 400);
        cd.setColor(Palette.GRAY);
        cd.fillRectangle(100, 200, 200, 150);
        cd.setColor(Palette.RED);
        cd.fillTriangle(100, 200, 300, 200, 200, 100);
        cd.setColor(Palette.BROWN);
        cd.fillRectangle(180, 280, 40, 70);
        cd.show();
    }
}
```

Wir rechnen jede Form nach:

1. **Wand:** linke obere Ecke (100, 200), 200 breit, 150 hoch. Sie reicht also nach rechts bis x = 100 + 200 = 300 und nach unten bis y = 200 + 150 = 350.
2. **Dach:** ein Dreieck mit den Ecken (100, 200), (300, 200) und (200, 100). Die ersten beiden liegen genau auf der Oberkante der Wand. Die Spitze liegt in der Mitte (x = 200) und 100 Pixel **höher**, also bei y = 100. Höher heißt in CodeDraw: kleineres y.
3. **Tür:** linke obere Ecke (180, 280), 40 breit, 70 hoch. Unterkante: 280 + 70 = 350, also genau auf dem Boden der Wand. Mitte: 180 + 20 = 200, also genau unter der Dachspitze.
4. Die Tür wird **nach** der Wand gezeichnet. Darum liegt sie darüber und ist sichtbar.
:::

:::beispiel[Eine Ampel zeichnen]
Ein schwarzer Rahmen mit drei farbigen Lichtern untereinander, alle mit Radius 30.

```java
cd.setColor(Palette.BLACK);
cd.drawRectangle(160, 40, 80, 220);
cd.setColor(Palette.RED);
cd.fillCircle(200, 80, 30);
cd.setColor(Palette.YELLOW);
cd.fillCircle(200, 150, 30);
cd.setColor(Palette.GREEN);
cd.fillCircle(200, 220, 30);
```

1. Der Rahmen reicht von x = 160 bis 160 + 80 = 240. Seine Mitte ist x = 200. Darum haben alle Kreise den Mittelpunkt bei x = 200.
2. Der rote Kreis hat den Mittelpunkt y = 80. Er reicht von 80 − 30 = 50 bis 80 + 30 = 110.
3. Der gelbe Kreis reicht von 120 bis 180, der grüne von 190 bis 250. Zwischen den Lichtern bleiben je 10 Pixel Abstand.
4. Der Rahmen geht von y = 40 bis 40 + 220 = 260. Alle Lichter liegen innerhalb.
:::

:::merke[Koordinaten in CodeDraw]
- Ursprung links oben, x nach rechts, y nach unten.
- Rechteck und Quadrat: (x, y) ist die **linke obere Ecke**. Rechter Rand x + breite, unterer Rand y + hoehe.
- Kreis: (x, y) ist der **Mittelpunkt**. Er reicht von x − r bis x + r und von y − r bis y + r.
- Farbe vor der Form setzen. Später Gezeichnetes liegt oben. `show()` am Ende.
:::

:::achtung[Kreis wie ein Rechteck platziert]
Ein Kreis mit Radius 50 soll genau in die linke obere Ecke des Fensters passen. Falsch ist
`cd.fillCircle(0, 0, 50);`. Das setzt den **Mittelpunkt** in die Ecke, und drei Viertel des Kreises
liegen außerhalb des Fensters. Richtig ist `cd.fillCircle(50, 50, 50);`. Dann reicht der Kreis von
0 bis 100 in beide Richtungen.
:::

:::achtung[Fenster bleibt leer]
Jemand zeichnet zehn Formen, startet und sieht ein leeres Fenster. Es fehlt `cd.show();` am Ende.
Ohne diesen Aufruf zeigt CodeDraw das Gezeichnete nicht an. Ein zweiter Klassiker: `cd.setColor(...)`
steht **nach** der Form. Dann wird die Form noch in der alten Farbe gezeichnet, und die neue Farbe gilt
erst für die nächste.
:::

```aufgabe
id: wz-cd-unterkante
titel: Wo endet das Rechteck?
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  `cd.fillRectangle(50, 80, 120, 40);` Bei welchem y-Wert liegt die **Unterkante** des Rechtecks?
teile:
  - typ: zahl
    loesung: "80 + 40"
    fehler:
      - wert: "200"
        meldung: Du hast die Breite (120) zum y-Wert addiert. Für die Unterkante zählt die Höhe, also der vierte Wert.
      - wert: "40"
        meldung: 40 ist die Höhe. Die Unterkante liegt 40 Pixel unter der Oberkante bei y = 80.
hinweise:
  - Die Werte sind x, y, Breite, Höhe. (x, y) ist die linke obere Ecke.
loesung: |
  Die Oberkante liegt bei y = 80, die Höhe ist 40, und y wächst nach unten.
  ---
  Unterkante: 80 + 40 = 120.
```

```aufgabe
id: wz-cd-kreis-rand
titel: Der linke Rand eines Kreises
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  `cd.drawCircle(200, 150, 60);` Bei welchem x-Wert liegt der **am weitesten links** liegende Punkt des Kreises?
teile:
  - typ: zahl
    loesung: "200 - 60"
    fehler:
      - wert: "200"
        meldung: 200 ist der Mittelpunkt. Der Kreis reicht um den Radius nach links und rechts darüber hinaus.
      - wert: "260"
        meldung: Das ist der rechte Rand. Nach links wird der Radius abgezogen.
hinweise:
  - Bei Kreisen ist (x, y) der Mittelpunkt.
loesung: |
  Der Mittelpunkt liegt bei x = 200. Der Kreis reicht 60 Pixel nach links und nach rechts.
  ---
  Linker Rand: 200 − 60 = 140.
```

```aufgabe
id: wz-cd-aufruf-waehlen
titel: Das richtige Quadrat
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Gesucht ist ein ausgefülltes Quadrat mit Seitenlänge 60, dessen **Mittelpunkt** bei (100, 100) liegt. Welcher Aufruf zeichnet es?
teile:
  - typ: auswahl
    optionen:
      - "`cd.fillSquare(100, 100, 60);`"
      - "`cd.fillSquare(70, 70, 60);`"
      - "`cd.fillSquare(40, 40, 60);`"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Bei `fillSquare` ist (x, y) die linke obere Ecke, nicht der Mittelpunkt. So läge das Quadrat rechts unterhalb von (100, 100).
      - wert: 2
        meldung: Du hast die ganze Seitenlänge abgezogen. Vom Mittelpunkt zur Kante ist es nur die halbe Seite, also 30.
hinweise:
  - Bei Quadraten ist (x, y) die linke obere Ecke.
  - Vom Mittelpunkt zur linken Kante ist es eine halbe Seitenlänge.
loesung: |
  **Ansatz:** Aus dem Mittelpunkt die linke obere Ecke berechnen.
  ---
  Halbe Seite: 60 : 2 = 30. Ecke: x = 100 − 30 = 70, y = 100 − 30 = 70.
  ---
  Also `cd.fillSquare(70, 70, 60);`. Probe: Das Quadrat reicht von 70 bis 130, die Mitte ist 100.
```

```aufgabe
id: wz-cd-aussagen
titel: Aussagen über CodeDraw
niveau: 2
lernziel: 7
kompetenz: verstehen
angabe: Beurteile die Aussagen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Der Punkt (0, 400) liegt in einem 400 mal 400 großen Fenster links unten.
        richtig: true
        erklaerung: x = 0 ist ganz links, y = 400 ist ganz unten, weil y nach unten wächst.
      - text: Ein Punkt mit kleinerem y-Wert liegt weiter unten.
        richtig: false
        erklaerung: Kleineres y heißt weiter **oben**.
      - text: "`cd.setColor(Palette.RED);` färbt auch die Formen rot, die vorher gezeichnet wurden."
        richtig: false
        erklaerung: Die Farbe gilt nur für Formen, die danach gezeichnet werden.
      - text: Was später gezeichnet wird, liegt über dem, was früher gezeichnet wurde.
        richtig: true
        erklaerung: CodeDraw malt wie mit Farbe auf Papier, Schicht für Schicht.
    fehler:
      - wert: [r, r, f, r]
        meldung: In CodeDraw wächst y nach **unten**. Ein kleinerer y-Wert liegt also höher im Fenster, nicht tiefer.
hinweise:
  - Zeichne dir das Fenster mit dem Ursprung links oben auf.
  - Denk beim Zeichnen an Farbe auf Papier.
loesung: |
  **Ansatz:** Koordinatensystem und Zeichenreihenfolge anwenden.
  ---
  Aussage 1 ist richtig: x = 0 links, y = 400 unten. Aussage 2 ist falsch: Kleineres y liegt höher im Fenster.
  ---
  Aussage 3 ist falsch: `setColor` wirkt nur auf spätere Formen. Aussage 4 ist richtig. Ergebnis: richtig, falsch, falsch, richtig.
```

```aufgabe
id: wz-cd-groesster-kreis
titel: Der größte Kreis im Fenster
niveau: 2
lernziel: 7
kompetenz: modellieren
angabe: |
  Ein Fenster ist 300 mal 300 Pixel groß. Ein Kreis soll alle vier Ränder genau berühren. Gib die Werte für
  `cd.drawCircle(x, y, r);` an.
teile:
  - typ: zahl
    label: x
    loesung: "300/2"
    fehler:
      - wert: "0"
        meldung: Der Mittelpunkt liegt in der Mitte des Fensters, nicht in der Ecke. Bei Kreisen ist (x, y) der Mittelpunkt.
  - typ: zahl
    label: y
    loesung: "300/2"
  - typ: zahl
    label: r
    loesung: "300/2"
    fehler:
      - wert: "300"
        meldung: 300 ist der Durchmesser. Der Radius ist der halbe Durchmesser.
hinweise:
  - Wo liegt der Mittelpunkt eines Kreises, der alle Ränder berührt?
  - Der Durchmesser ist so groß wie das Fenster breit ist.
loesung: |
  **Ansatz:** Der Kreis ist symmetrisch, also liegt sein Mittelpunkt in der Mitte des Fensters.
  ---
  Mitte: x = 300 : 2 = 150 und y = 150.
  ---
  Der Durchmesser ist 300, der Radius also 150. Probe: Der Kreis reicht von 150 − 150 = 0 bis 150 + 150 = 300.
```

```aufgabe
id: wz-cd-gefuehrt
titel: Ein Quadrat in der Mitte
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  In einem Fenster mit 400 mal 400 Pixeln soll ein Quadrat mit Seitenlänge 120 genau in der Mitte liegen.
  Gib die linke obere Ecke (x, y) für `cd.fillSquare(x, y, 120);` an.
teile:
  - typ: zahl
    label: x
    loesung: "400/2 - 120/2"
    fehler:
      - wert: "200"
        meldung: 200 ist die Mitte des Fensters. Bei Quadraten brauchst du aber die linke obere Ecke.
      - wert: "80"
        meldung: Du hast die ganze Seite von der Mitte abgezogen. Die Ecke liegt nur eine halbe Seite links von der Mitte.
  - typ: zahl
    label: y
    loesung: "400/2 - 120/2"
hinweise:
  - Bestimme zuerst die Mitte des Fensters.
  - Von der Mitte zur linken Kante des Quadrats ist es die halbe Seitenlänge.
gefuehrt:
  - text: Wo liegt die Mitte des Fensters (x-Wert)?
    teil: { typ: zahl, loesung: "200" }
    erklaerung: '400 geteilt durch 2 ist 200.'
  - text: Wie weit liegt die linke Kante des Quadrats links von seiner Mitte?
    teil: { typ: zahl, loesung: "60" }
    erklaerung: 'Eine halbe Seitenlänge, also 120 geteilt durch 2, das ist 60.'
  - text: Wie groß ist also x?
    erklaerung: 200 − 60 = 140.
  - text: Und y?
    erklaerung: Das Fenster ist quadratisch, also ebenfalls 140.
loesung: |
  **Ansatz:** Mitte des Fensters minus halbe Seitenlänge.
  ---
  Mitte 200, halbe Seite 60. x = y = 200 − 60 = 140.
  ---
  Probe: Das Quadrat reicht von 140 bis 140 + 120 = 260. Links bleiben 140 Pixel frei, rechts 400 − 260 = 140. Es liegt genau in der Mitte.
```

````aufgabe
id: wz-cd-schneemann
titel: Ein Schneemann
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Zeichne in einem Fenster mit 400 mal 400 Pixeln einen Schneemann aus drei **Kreisumrissen** (`drawCircle`)
  in Schwarz (`Palette.BLACK`). Alle Mittelpunkte liegen bei x = 200.

  - Unten: Mittelpunkt y = 300, Radius 80.
  - Mitte: Radius 55. Der Kreis berührt den unteren Kreis genau von oben.
  - Kopf: Radius 35. Er berührt den mittleren Kreis genau von oben.

  Berechne die fehlenden y-Werte selbst. Am Ende steht `cd.show();`.
teile:
  - typ: code
    vorlage: |
      import codedraw.*;

      public class Schneemann {
          public static void main(String[] args) {
              CodeDraw cd = new CodeDraw(400, 400);
              // Deine Anweisungen
              cd.show();
          }
      }
    musterloesung: |
      import codedraw.*;

      public class Schneemann {
          public static void main(String[] args) {
              CodeDraw cd = new CodeDraw(400, 400);
              cd.setColor(Palette.BLACK);
              cd.drawCircle(200, 300, 80);
              cd.drawCircle(200, 165, 55);
              cd.drawCircle(200, 75, 35);
              cd.show();
          }
      }
    tests:
      - { zeichnung: true, beschreibung: "drei Kreise wie verlangt" }
    fehler:
      - wert: 1
        meldung: Berührung von oben heißt, der Abstand der Mittelpunkte ist die Summe der beiden Radien. Und denk daran, dass „oben“ ein kleineres y bedeutet.
hinweise:
  - Zwei Kreise berühren sich, wenn der Abstand ihrer Mittelpunkte gleich der Summe der Radien ist.
  - Mittlerer Kreis y = 300 − (80 + 55). Kopf entsprechend vom mittleren Kreis aus.
loesung: |
  **Ansatz:** Berührende Kreise haben den Mittelpunktsabstand Radius plus Radius. „Darüber“ heißt kleineres y.
  ---
  Mitte: 300 − (80 + 55) = 165. Kopf: 165 − (55 + 35) = 75.
  ---
  ```java
  cd.setColor(Palette.BLACK);
  cd.drawCircle(200, 300, 80);
  cd.drawCircle(200, 165, 55);
  cd.drawCircle(200, 75, 35);
  ```
  ---
  Probe: Der Kopf reicht nach oben bis 75 − 35 = 40, also noch im Fenster. Der untere Kreis reicht bis 300 + 80 = 380.
````

````aufgabe
id: wz-cd-zielscheibe
titel: Eine Zielscheibe
niveau: 3
lernziel: 7
kompetenz: anwenden
quelle: Aufgabenblatt 1 WS2023, Aufgabe 4 (Bild nach Maßangaben, vereinfacht nachgebaut)
angabe: |
  Zeichne in einem Fenster mit 400 mal 400 Pixeln eine Zielscheibe aus drei **ausgefüllten** Kreisen mit
  gemeinsamem Mittelpunkt (200, 200):

  - außen rot (`Palette.RED`), Radius 150,
  - in der Mitte weiß (`Palette.WHITE`), Radius 100,
  - innen rot, Radius 50.

  Alle drei Ringe müssen sichtbar sein. Überlege, in welcher **Reihenfolge** du zeichnen musst. Am Ende steht `cd.show();`.
teile:
  - typ: code
    vorlage: |
      import codedraw.*;

      public class Zielscheibe {
          public static void main(String[] args) {
              CodeDraw cd = new CodeDraw(400, 400);
              // Deine Anweisungen
              cd.show();
          }
      }
    musterloesung: |
      import codedraw.*;

      public class Zielscheibe {
          public static void main(String[] args) {
              CodeDraw cd = new CodeDraw(400, 400);
              cd.setColor(Palette.RED);
              cd.fillCircle(200, 200, 150);
              cd.setColor(Palette.WHITE);
              cd.fillCircle(200, 200, 100);
              cd.setColor(Palette.RED);
              cd.fillCircle(200, 200, 50);
              cd.show();
          }
      }
    tests:
      - { zeichnung: true, reihenfolge: true, beschreibung: "drei Kreise, vom größten zum kleinsten" }
    fehler:
      - wert: 1
        meldung: Später Gezeichnetes liegt oben. Zeichnest du den kleinen Kreis zuerst, verdeckt ihn der große. Prüfe auch, ob vor jedem Kreis die richtige Farbe gesetzt ist.
hinweise:
  - Ausgefüllte Formen verdecken, was vorher an derselben Stelle war.
  - Beginne mit dem größten Kreis und setze vor jedem Kreis die Farbe neu.
  - Alle drei Aufrufe haben die Form `cd.fillCircle(200, 200, r);`.
loesung: |
  **Ansatz:** Ausgefüllte Kreise überdecken alles darunter. Also vom größten zum kleinsten zeichnen.
  ---
  Zuerst Rot mit Radius 150, dann Weiß mit Radius 100 darüber. Vom roten Kreis bleibt ein Ring sichtbar.
  ---
  Zum Schluss Rot mit Radius 50. Vor jedem Kreis steht `cd.setColor(...)`, weil die Farbe nur für folgende Formen gilt.
  ---
  Probe: Umgekehrt (klein zuerst) würde der große rote Kreis alles verdecken, und man sähe nur eine rote Scheibe.
````

```reflexion
frage: Warum legt CodeDraw den Ursprung nach links oben und lässt y nach unten wachsen, obwohl das in der Mathematik anders ist?
antwort: |
  Bildschirme werden zeilenweise von oben nach unten aufgebaut, so wie man einen Text liest. Die erste
  Pixelzeile ist oben, und die Zeilennummer wächst nach unten. Fast alle Grafikbibliotheken übernehmen
  diese Zählweise. Für mich heißt das: „höher im Fenster“ bedeutet immer „kleineres y“. Diese Umstellung muss ich
  bei jeder Rechnung bewusst machen, zum Beispiel bei der Spitze eines Dachs.
```

## Gemischte Wiederholung

Die Aufgaben auf dieser Seite mischen alle Lektionen des Kapitels. Das ist Absicht. In Quiz und Test
steht nie dabei, zu welchem Thema eine Frage gehört. Du musst selbst erkennen, was gefragt ist. Bei den
ersten beiden Aufgaben musst du nichts ausrechnen, sondern nur das passende Vorgehen wählen.

```aufgabe
id: wz-gw-welches-werkzeug
titel: Welches Werkzeug passt?
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Du hast nur eine Kommandozeile, kein IntelliJ. Du willst wissen, ob `Rakete.java` Compilerfehler enthält,
  ohne das Programm zu starten. Welcher Befehl passt?
teile:
  - typ: auswahl
    optionen:
      - "`javac Rakete.java`"
      - "`java Rakete`"
      - "`java Rakete.class`"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: "`java` führt Bytecode aus. Um Compilerfehler zu finden, brauchst du den Compiler."
      - wert: 2
        meldung: Nach `java` steht nie die Endung `.class`, sondern nur der Klassenname. Außerdem führt `java` aus, statt nur zu prüfen.
hinweise:
  - Wer prüft die Regeln der Sprache?
loesung: |
  Compilerfehler findet der Compiler beim Übersetzen.
  ---
  Also `javac Rakete.java`. Meldet er nichts, ist die Datei fehlerfrei übersetzt.
```

```aufgabe
id: wz-gw-welches-vorgehen
titel: Welches Vorgehen passt?
niveau: 2
lernziel: 5
kompetenz: verstehen
angabe: |
  Ordne jedem Fall das passende Vorgehen zu. Welche Zuordnung ist richtig?

  - Fall A: Das Programm startet nicht, unten steht `Uhr.java:9: error: ';' expected`.
  - Fall B: Das Programm bricht mit `Exception in thread "main"` ab.
  - Fall C: Das Programm läuft durch, aber eine Zeile der Ausgabe weicht von der Angabe ab.
teile:
  - typ: auswahl
    optionen:
      - "A: Zeile 9 und die Zeile davor ansehen. B: im Stacktrace die Zeile hinter `at` ablesen. C: Ausgabe Zeichen für Zeichen mit der Angabe vergleichen."
      - "A: Ausgabe mit der Angabe vergleichen. B: Zeile 9 ansehen. C: im Stacktrace nachsehen."
      - "A, B und C: das Programm einfach noch einmal starten."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Bei Fall A gibt es noch gar keine Ausgabe, weil das Programm nicht übersetzt wurde. Und Fall C hat keinen Stacktrace, weil nichts abgestürzt ist.
      - wert: 2
        meldung: Ein Neustart ändert nichts. Dasselbe Programm verhält sich bei gleichem Code gleich.
hinweise:
  - Welcher Fall ist ein Compilerfehler, welcher ein Laufzeitfehler, welcher ein logischer Fehler?
  - Jede Fehlerart liefert andere Informationen.
loesung: |
  **Ansatz:** Erst die Fehlerart bestimmen, dann das passende Werkzeug wählen.
  ---
  A ist ein Compilerfehler: Datei und Zeile stehen in der Meldung. B ist ein Laufzeitfehler: Der Ort steht hinter `at` im Stacktrace.
  ---
  C ist ein logischer Fehler: Niemand meldet etwas, also bleibt nur der Vergleich mit der Angabe.
```

```aufgabe
id: wz-gw-ausgabe-mix
titel: Kommentare, print und Rechnungen
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      public class Mix {
          public static void main(String[] args) {
              System.out.print("Punkte: "); // Beschriftung
              System.out.println(12 + 8);
              /* System.out.println("Bonus"); */
              System.out.print("12 + 8");
              System.out.println(" // fertig");
          }
      }
    loesung: |
      Punkte: 20
      12 + 8 // fertig
    fehler:
      - wert: "Punkte: 20\nBonus\n12 + 8 // fertig"
        meldung: Die Ausgabe von `Bonus` steht zwischen `/*` und `*/` und wird nicht ausgeführt.
      - wert: "Punkte: 20\n20\n"
        meldung: "`\"12 + 8\"` steht in Anführungszeichen und wird als Text abgeschrieben. Und `\" // fertig\"` ist ebenfalls Text."
hinweise:
  - Streiche zuerst alle echten Kommentare. Steht `//` in Anführungszeichen, ist es kein Kommentar.
  - Prüfe dann bei jeder Ausgabe, ob gerechnet oder abgeschrieben wird.
loesung: |
  **Ansatz:** Kommentare streichen, dann Anweisung für Anweisung den Cursor verfolgen.
  ---
  Zeile 1 der Ausgabe: `Punkte: ` und dann `20` (gerechnet). Der Blockkommentar fällt weg.
  ---
  Zeile 2: `12 + 8` als Text, dann ` // fertig` als Text. Ergebnis: `Punkte: 20` und `12 + 8 // fertig`.
```

```aufgabe
id: wz-gw-zeilen-mix
titel: Fehler aus allen Lektionen
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Die Datei heißt `Bahn.java`. Markiere alle Zeilen, die einen **Compilerfehler** enthalten.
teile:
  - typ: zeilen
    code: |
      public class Bahn {
          public static void main(String[] args) {
              System.out.println("Abfahrt 8:15")
              system.out.println("Gleis 3");
              System.out.println("Ankunft 9:02"); // puenktlich?
              System.out.println("Gute Reise!");
          }
      }
    loesung: [3, 4]
    fehler:
      - wert: [3, 4, 5]
        meldung: Zeile 5 ist korrekt. Der Kommentar mit Fragezeichen ist erlaubt, denn im Kommentar darf beliebiger Text stehen.
      - wert: [3]
        meldung: Schau dir in Zeile 4 die Großschreibung an. Wie heißt die Klasse für die Ausgabe?
hinweise:
  - Prüfe in jeder Zeile Strichpunkt und Großschreibung.
  - Kommentare dürfen beliebigen Text enthalten, auch Satzzeichen.
loesung: |
  **Ansatz:** Jede Anweisung auf Strichpunkt, Großschreibung und Anführungszeichen prüfen.
  ---
  Zeile 3: Strichpunkt fehlt. Zeile 4: `system` muss `System` heißen.
  ---
  Zeile 5 und 6 sind korrekt, auch der Kommentar. Markiert werden 3 und 4.
```

```aufgabe
id: wz-gw-farbe
titel: Welche Farbe hat das Rechteck?
niveau: 2
lernziel: 7
kompetenz: verstehen
angabe: |
  Welche Farbe hat das Rechteck in diesem Programmausschnitt?

  ```java
  cd.setColor(Palette.BLUE);
  cd.fillCircle(100, 100, 20);
  cd.fillRectangle(200, 50, 80, 40);
  cd.setColor(Palette.GREEN);
  cd.drawLine(0, 0, 400, 400);
  ```
teile:
  - typ: auswahl
    optionen:
      - Blau
      - Grün
      - Schwarz
    richtig: [0]
    fehler:
      - wert: 1
        meldung: "`setColor(Palette.GREEN)` steht **nach** dem Rechteck. Die Farbe gilt nur für spätere Formen, hier für die Linie."
      - wert: 2
        meldung: Schwarz ist die Farbe, bevor man irgendetwas setzt. Hier wurde vor dem Rechteck schon Blau gesetzt.
hinweise:
  - Welche Farbe war zuletzt gesetzt, als das Rechteck gezeichnet wurde?
  - Eine Farbe gilt, bis eine neue gesetzt wird.
loesung: |
  **Ansatz:** Von oben lesen und die aktuelle Farbe mitführen.
  ---
  Nach Zeile 1 ist die Farbe Blau. Kreis und Rechteck werden blau gezeichnet.
  ---
  Erst danach wird Grün gesetzt. Das betrifft nur die Linie. Das Rechteck ist blau.
```

```aufgabe
id: wz-gw-note
titel: Note mit Wiederholungstest
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Ida hat 5 Punkte aus den Übungen, 20 aus den Blättern und 37 aus den Quiz. Im ersten Test hat sie 12 Punkte,
  im Wiederholungstest 23. Nimm an, dass das bessere Testergebnis zählt. Wie viele Punkte hat sie insgesamt?
teile:
  - typ: zahl
    loesung: "5 + 20 + 37 + 23"
    fehler:
      - wert: "62"
        meldung: Mit dem besseren Ergebnis von 23 Punkten zählt der Test. Die 12 Punkte aus dem ersten Versuch spielen keine Rolle mehr.
      - wert: "97"
        meldung: Es zählt nur ein Testergebnis, nicht beide zusammen.
hinweise:
  - Welches Testergebnis zählt, und erfüllt es die Hürde von 15 Punkten?
  - Danach wie gewohnt addieren.
loesung: |
  **Ansatz:** Das zählende Testergebnis bestimmen und die Hürde prüfen.
  ---
  Das bessere Ergebnis ist 23. Es liegt über 15, also zählt es.
  ---
  5 + 20 + 37 + 23 = 85 Punkte. Das wäre ein Gut. (Wie TUWEL Wiederholungen 2026W genau verrechnet, steht im Kurs. Hier ist es als Annahme vorgegeben.)
```

```aufgabe
id: wz-gw-abgabe-ablauf
titel: Vom ZIP zur Abgabe
niveau: 1
lernziel: 6
kompetenz: anwenden
angabe: Bring die Schritte für ein Aufgabenblatt in eine sinnvolle Reihenfolge.
teile:
  - typ: reihenfolge
    elemente:
      - Die ZIP-Datei aus TUWEL entpacken.
      - Den entpackten Projektordner in IntelliJ mit File → Open öffnen.
      - Die Aufgaben in den vorhandenen Dateien lösen, ohne Dateien umzubenennen.
      - Prüfen, dass das ganze Projekt kompiliert, und jede Aufgabe einmal starten.
      - Das Projekt in TUWEL hochladen und die gelösten Aufgaben ankreuzen.
hinweise:
  - Was muss vor dem Hochladen sicher funktionieren?
loesung: |
  Erst entpacken und öffnen, dann lösen.
  ---
  Vor dem Hochladen prüfen, dass alles kompiliert. Erst dann hochladen und ankreuzen.
```

````aufgabe
id: wz-gw-programm-mix
titel: Ein kleines Protokoll
niveau: 3
lernziel: 3
kompetenz: anwenden
angabe: |
  Schreibe `main` so, dass genau diese Ausgabe entsteht (die zweite Zeile ist leer):

  ```text
  EP1 - Woche 1
  
  6 * 7 = 42
  ```

  Bedingung: Die Zahl `42` soll Java **ausrechnen**. Schreibe sie also nicht als Text hin. Kommentiere außerdem
  die Rechnung mit einem Zeilenkommentar.
teile:
  - typ: code
    vorlage: |
      public class Protokoll {
          public static void main(String[] args) {
          }
      }
    musterloesung: |
      public class Protokoll {
          public static void main(String[] args) {
              System.out.println("EP1 - Woche 1");
              System.out.println();
              System.out.print("6 * 7 = ");
              System.out.println(6 * 7); // Java rechnet das Ergebnis selbst aus
          }
      }
    tests:
      - { stdout: "EP1 - Woche 1\n\n6 * 7 = 42\n", beschreibung: "drei Zeilen, die mittlere leer" }
    fehler:
      - wert: 1
        meldung: Prüfe die Leerzeile in der Mitte (`println()`) und das Leerzeichen nach dem Gleichheitszeichen.
hinweise:
  - Die leere Zeile entsteht mit `System.out.println();`.
  - Die letzte Zeile besteht aus einem Text mit `print` und einer Rechnung mit `println`.
loesung: |
  **Ansatz:** Jede Ausgabezeile einzeln planen: Text, Leerzeile, Text plus Rechnung.
  ---
  `println("EP1 - Woche 1")` und `println()` für die Leerzeile.
  ---
  `print("6 * 7 = ")` mit Leerzeichen am Ende, dann `println(6 * 7)`. Java rechnet 42 aus.
  ---
  Probe: drei Zeilen, die mittlere leer. Der Kommentar ändert an der Ausgabe nichts.
````

## Prüfungsaufgaben

Diese Aufgaben haben das Format der Prüfungsteile von EP1. Die Quizfragen folgen dem Muster der
TUWEL-Tests 2021 bis 2023 (Format 2026W unbestätigt): Single Choice mit drei Optionen, vier
Richtig-Falsch-Aussagen und Lückentext. Die Programmieraufgaben folgen Aufgabenblatt 1. Stell dir für
jede Aufgabe eine Uhr: Die Zeitangabe ist ein Richtwert.

```aufgabe
id: wz-pa-quiz-ausgabe
titel: Quiz (Single Choice, 2 Minuten)
niveau: 3
lernziel: 3
kompetenz: verstehen
punkte: 1
quelle: Format nach TUWEL-Test 1 WS2021 (Single Choice, drei Optionen)
angabe: |
  Welche Ausgabe erzeugt der folgende Ausschnitt?

  ```java
  System.out.print("A");
  System.out.println("B" ); // C
  /* System.out.print("D"); */ System.out.print("E");
  System.out.println("F//G");
  ```
teile:
  - typ: auswahl
    optionen:
      - "`AB` und in der nächsten Zeile `EF//G`"
      - "`AB C` und in der nächsten Zeile `DEF`"
      - "`A`, `B`, `E`, `F` jeweils in einer eigenen Zeile"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: "`// C` und `/* ... D ... */` sind Kommentare und erzeugen keine Ausgabe. Das `//` in `\"F//G\"` steht dagegen in einem Text."
      - wert: 2
        meldung: "`print` beginnt keine neue Zeile. Nur `println` beendet eine Zeile."
hinweise:
  - Kommentare streichen, aber nur außerhalb von Anführungszeichen.
  - Dann den Cursor verfolgen.
loesung: |
  **Ansatz:** Kommentare streichen, Cursor verfolgen.
  ---
  Zeile 1 der Ausgabe: `A`, dann `B` mit Zeilenende. `// C` ist Kommentar.
  ---
  Zeile 2: Der Blockkommentar mit `D` fällt weg. `E`, dann `F//G` mit Zeilenende. Richtig ist die erste Option.
```

```aufgabe
id: wz-pa-quiz-rf
titel: Quiz (Richtig/Falsch, 4 Minuten)
niveau: 3
lernziel: 0
kompetenz: verstehen
punkte: 2
quelle: Format nach TUWEL-Test 2 WS2021 (vier Aussagen, Teilpunkte)
angabe: Beurteile jede Aussage. Jede richtig beurteilte Aussage bringt einen halben Punkt.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: Ein Programm, das ohne Compilerfehler übersetzt wird, kann trotzdem mit einer Exception abbrechen.
        richtig: true
        erklaerung: Laufzeitfehler wie Division durch null zeigen sich erst beim Ausführen.
      - text: Die Datei `Spiel.class` enthält den Quelltext der Klasse `Spiel`.
        richtig: false
        erklaerung: "`.class` enthält Bytecode. Der Quelltext steht in `Spiel.java`."
      - text: "`/* a /* b */ c */` ist ein einziger, gültiger Kommentar."
        richtig: false
        erklaerung: Der Kommentar endet beim ersten `*/`. Danach bleibt `c */` als ungültiger Code übrig.
      - text: Die Einrückung des Codes hat keinen Einfluss auf die Ausgabe.
        richtig: true
        erklaerung: Leerraum außerhalb von Texten ignoriert der Compiler.
    fehler:
      - wert: [r, f, r, r]
        meldung: Blockkommentare lassen sich nicht verschachteln. Der erste Kommentar endet beim ersten `*/`.
      - wert: [f, f, f, r]
        meldung: Der Compiler prüft nur die Form. Ob beim Rechnen etwa durch null geteilt wird, zeigt sich erst zur Laufzeit.
hinweise:
  - Trenne bei jeder Aussage, ob es um das Übersetzen oder das Ausführen geht.
  - Suche beim Kommentar das erste `*/`.
loesung: |
  **Ansatz:** Jede Aussage einzeln an einem kleinen Beispiel prüfen.
  ---
  Aussage 1 ist richtig (`10 / 0` kompiliert und stürzt ab). Aussage 2 ist falsch (`.class` ist Bytecode).
  ---
  Aussage 3 ist falsch (keine Verschachtelung). Aussage 4 ist richtig (Einrückung ist Lesehilfe). Ergebnis: richtig, falsch, falsch, richtig.
```

```aufgabe
id: wz-pa-quiz-luecken
titel: Quiz (Lückentext, 3 Minuten)
niveau: 3
lernziel: 2
kompetenz: anwenden
punkte: 2
quelle: Format nach TUWEL-Test SS2024 (Lückentext)
angabe: |
  Die Datei heißt `Kino.java`. Ergänze die vier Lücken, sodass das Programm `Film ab!` ausgibt.
teile:
  - typ: lueckentext
    code: |
      public class ___ {
          public ___ void main(String[] args) {
              System.___.println("Film ab!")___
          }
      }
    luecken: [["Kino"], ["static"], ["out"], [";"]]
    fehler:
      - wert: ["kino", "static", "out", ";"]
        meldung: Der Klassenname muss genau zum Dateinamen `Kino.java` passen, mit großem K.
      - wert: ["Kino", "static", "Out", ";"]
        meldung: Der Ausgabekanal heißt `out`, kleingeschrieben.
hinweise:
  - Klassenname gleich Dateiname. Der Kopf von `main` lautet immer `public static void main(String[] args)`.
  - Jede Anweisung endet mit einem bestimmten Zeichen.
loesung: |
  **Ansatz:** Das Grundgerüst aus dem Gedächtnis ergänzen.
  ---
  Klasse `Kino` (wie die Datei), Kopf `public static void main(String[] args)`.
  ---
  Ausgabe über `System.out.println(...)`, abgeschlossen mit `;`. Ergebnis: `Kino`, `static`, `out`, `;`.
```

````aufgabe
id: wz-pa-blatt-rahmen
titel: Blattaufgabe Konsolenform (10 Minuten)
niveau: 3
lernziel: 3
kompetenz: anwenden
punkte: 3
quelle: Aufgabenblatt 1 WS2023, Aufgabe 3 (Konsolenformen mit exakter Sollausgabe, nachgebaut)
angabe: |
  Erweitere die Methode `main`, sodass genau diese Ausgabe entsteht. Verwende nur `System.out.print` und
  `System.out.println`, und gib in jeder Anweisung **höchstens ein Zeichen** aus. (Das zwingt dich, den Cursor
  genau zu verfolgen.)

  ```text
  +--+
  |EP|
  +--+
  ```
teile:
  - typ: code
    vorlage: |
      public class Rahmen {
          public static void main(String[] args) {
              // TODO: Implementieren Sie hier Ihre Lösung
          }
      }
    musterloesung: |
      public class Rahmen {
          public static void main(String[] args) {
              System.out.print("+");
              System.out.print("-");
              System.out.print("-");
              System.out.println("+");
              System.out.print("|");
              System.out.print("E");
              System.out.print("P");
              System.out.println("|");
              System.out.print("+");
              System.out.print("-");
              System.out.print("-");
              System.out.println("+");
          }
      }
    tests:
      - { stdout: "+--+\n|EP|\n+--+\n", beschreibung: "Rahmen mit EP" }
    fehler:
      - wert: 1
        meldung: Jede der drei Zeilen hat vier Zeichen. Nur das vierte Zeichen jeder Zeile wird mit `println` ausgegeben.
hinweise:
  - Jede Zeile hat genau vier Zeichen. Die ersten drei mit `print`, das vierte mit `println`.
  - Insgesamt brauchst du 12 Anweisungen, davon 3 mit `println`.
loesung: |
  **Ansatz:** Die Sollausgabe Zeichen für Zeichen zerlegen. Am Ende jeder Zeile ein `println`.
  ---
  Zeile 1: `+`, `-`, `-` mit `print`, dann `+` mit `println`.
  ---
  Zeile 2: `|`, `E`, `P` mit `print`, dann `|` mit `println`. Zeile 3 wie Zeile 1.
  ---
  Probe: 12 Anweisungen, 3 Zeilenenden, jede Zeile vier Zeichen. Die Vorgabe „höchstens ein Zeichen je Anweisung“ ist erfüllt.
````

````aufgabe
id: wz-pa-blatt-bild
titel: Blattaufgabe Bild nach Maßangaben (15 Minuten)
niveau: 3
lernziel: 7
kompetenz: modellieren
punkte: 3
quelle: Aufgabenblatt 1 WS2023, Aufgabe 4 (Bild nach Maßskizze, nachgebaut)
angabe: |
  Erzeuge ein Fenster mit 400 mal 400 Pixeln und zeichne folgendes Bild. Setze vor dem Zeichnen die Linienbreite auf 2.

  - Ein **blauer** Rahmen (Umriss) mit 50 Pixeln Abstand zu allen vier Fensterrändern.
  - Eine **grüne** Linie von der linken oberen zur rechten unteren Ecke dieses Rahmens.
  - Ein **orange** ausgefüllter Kreis mit Radius 40, dessen Mittelpunkt genau in der Mitte des Fensters liegt.

  Berechne alle Koordinaten selbst. Am Ende steht `cd.show();`.
teile:
  - typ: code
    vorlage: |
      import codedraw.*;

      public class Bild {
          public static void main(String[] args) {
              CodeDraw cd = new CodeDraw(400, 400);
              // TODO
              cd.show();
          }
      }
    musterloesung: |
      import codedraw.*;

      public class Bild {
          public static void main(String[] args) {
              CodeDraw cd = new CodeDraw(400, 400);
              cd.setLineWidth(2);
              cd.setColor(Palette.BLUE);
              cd.drawRectangle(50, 50, 300, 300);
              cd.setColor(Palette.GREEN);
              cd.drawLine(50, 50, 350, 350);
              cd.setColor(Palette.ORANGE);
              cd.fillCircle(200, 200, 40);
              cd.show();
          }
      }
    tests:
      - { zeichnung: true, beschreibung: "Rahmen, Diagonale und Kreis" }
    fehler:
      - wert: 1
        meldung: Prüfe den Rahmen. Bei 50 Pixeln Abstand auf beiden Seiten bleibt nicht 350, sondern 400 − 50 − 50 Pixel Breite.
hinweise:
  - Rahmen mit 50 Pixeln Abstand heißt linke obere Ecke (50, 50). Wie breit bleibt er bei 50 Pixeln Abstand links **und** rechts?
  - Die Diagonale verbindet die linke obere und die rechte untere Ecke des Rahmens.
  - Die Fenstermitte ist (200, 200), und bei Kreisen ist (x, y) der Mittelpunkt.
loesung: |
  **Ansatz:** Aus den Abständen die Koordinaten jeder Form berechnen.
  ---
  Rahmen: linke obere Ecke (50, 50). Breite und Höhe: 400 − 50 − 50 = 300. Also `drawRectangle(50, 50, 300, 300)`.
  ---
  Diagonale: von (50, 50) nach (50 + 300, 50 + 300) = (350, 350). Also `drawLine(50, 50, 350, 350)`.
  ---
  Kreis: Mittelpunkt (200, 200), Radius 40, ausgefüllt: `fillCircle(200, 200, 40)`. Vor jeder Form die Farbe setzen.
  ---
  Probe: Der Rahmen endet bei 350, also 50 Pixel vor dem Rand bei 400. Die Diagonale geht genau durch die Fenstermitte (200, 200), durch den Kreis.
````

```aufgabe
id: wz-pa-fehler-gespraech
titel: Feedbackgespräch Fehlersuche (5 Minuten)
niveau: 3
lernziel: 5
kompetenz: begruenden
punkte: 2
quelle: nach den Zusatzfragen der Aufgabenblätter WS2023 (Fehler erklären), eigene Aufgabe
angabe: |
  Im Feedbackgespräch zeigt dir die Tutorin dieses Programm in der Datei `Bericht.java`. Markiere alle Zeilen mit
  einem **Compilerfehler**. Begründe anschließend für dich jede Markierung in einem Satz.
teile:
  - typ: zeilen
    code: |
      public class Report {
          public static void main(String[] args) {
              System.out.println("Bericht");
              System.out.println("Seite 1);
              System.out.Println("Seite 2");
              System.out.println(10 / 0);
          }
      }
    loesung: [1, 4, 5]
    fehler:
      - wert: [1, 4, 5, 6]
        meldung: "`10 / 0` ist kein Compilerfehler. Der Compiler übersetzt es, erst beim Ausführen bricht das Programm mit einer `ArithmeticException` ab."
      - wert: [4, 5]
        meldung: Vergleiche den Klassennamen in Zeile 1 mit dem Dateinamen `Bericht.java`.
hinweise:
  - Prüfe Klassenname gegen Dateiname, Anführungszeichen und Großschreibung.
  - Ein Laufzeitfehler ist kein Compilerfehler.
loesung: |
  **Ansatz:** Jede Zeile gegen die Regeln prüfen und Compiler- von Laufzeitfehlern trennen.
  ---
  Zeile 1: Klasse `Report` passt nicht zu `Bericht.java`. Zeile 4: Das schließende Anführungszeichen fehlt (`unclosed string literal`).
  ---
  Zeile 5: `Println` muss `println` heißen. Zeile 6 ist ein Laufzeitfehler, kein Compilerfehler.
  Übrigens: `javac` meldet bei dieser Datei zuerst nur `unclosed string literal` in Zeile 4. Die Fehler in Zeile 1 und 5 meldet er erst, wenn Zeile 4 repariert ist. Fehler sind es trotzdem alle drei.
  ---
  So klingt die Begründung im Gespräch: „In Zeile 6 teilt das Programm durch null. Das übersetzt der Compiler, aber beim Ausführen kommt eine ArithmeticException.“
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, ohne nachzuschauen. Vergleiche danach mit dem Kasten.
antwort: |
  Eine mögliche Auswahl: (1) Quelltext in `Name.java` wird von `javac` zu Bytecode in `Name.class` übersetzt, und die
  JVM führt ihn mit `java Name` aus. (2) Jedes Programm braucht eine Klasse, deren Name zum Dateinamen passt, und
  darin `public static void main(String[] args)`. (3) Fehlermeldungen liest man von oben: Datei, Zeile, Ursache, und
  zuerst nur den ersten Fehler beheben. Gute Antworten sind auch der Unterschied zwischen `print` und `println`
  oder die 50-Prozent-Hürde im Test.
```

:::zusammenfassung
1. **Ein Programm** ist eine genaue Folge von Anweisungen, die von oben nach unten ausgeführt werden.
2. **Quelltext** (`Name.java`) wird vom **Compiler** `javac` in **Bytecode** (`Name.class`) übersetzt. Die **JVM** führt ihn mit `java Name` aus. IntelliJ erledigt beides mit einem Klick.
3. **Grundgerüst:** `public class Name` in `Name.java`, darin `public static void main(String[] args)`. Jede Anweisung endet mit `;`, jede `{` braucht ihre `}`. Groß- und Kleinschreibung zählen.
4. **Ausgabe:** `print` lässt den Cursor in der Zeile, `println` beendet sie. Text in Anführungszeichen wird abgeschrieben, Rechnungen ohne Anführungszeichen werden ausgerechnet.
5. **Kommentare** (`//`, `/* */`) ignoriert der Compiler. Blockkommentare enden beim ersten `*/` und lassen sich nicht verschachteln. In Texten gibt es keine Kommentare.
6. **Fehler:** Compilerfehler verhindern den Start, Laufzeitfehler brechen ab, logische Fehler meldet niemand. Meldungen liest man als Datei, Zeile, Ursache, und man behebt zuerst den ersten.
7. **Bewertung K1 2026W:** 6 + 24 + 40 + 30 Punkte. Im Test mindestens 15 Punkte, sonst zählt er nicht. Notengrenzen 92, 83, 74, 65. Abgaben müssen kompilieren, Dateinamen bleiben unverändert.
8. **CodeDraw:** Ursprung links oben, y nach unten. Rechtecke werden über die linke obere Ecke platziert, Kreise über den Mittelpunkt. Farbe vor der Form setzen, `show()` am Ende.
:::

### Die häufigsten Fehler

Jeder Fehler steht mit einer Aufgabe, die ihn gezielt trainiert. Wenn dir ein Fehler bekannt vorkommt, löse
die genannte Aufgabe noch einmal.

1. **Klassenname passt nicht zum Dateinamen**, etwa `public class Munze` in `Muenze.java`. Training: „Welche Zeile passt nicht zur Datei?“ und „Klasse und Datei“ in [1.2 IntelliJ: Projekt anlegen und Programm starten](/lernen/ep1/werkzeuge/intellij-projekt-anlegen-und-programm-starten).
2. **`main` falsch geschrieben** (`Main`, `start`), sodass kein Startpunkt existiert. Training: „Kein grüner Startknopf“ in [1.2 IntelliJ: Projekt anlegen und Programm starten](/lernen/ep1/werkzeuge/intellij-projekt-anlegen-und-programm-starten).
3. **Strichpunkt vergessen oder an der falschen Stelle**, etwa hinter dem Kopf von `main`. Training: „Fehler im Gerüst“ in [1.3 Hello World Zeile für Zeile](/lernen/ep1/werkzeuge/hello-world-zeile-fuer-zeile).
4. **`system` oder `Println` statt `System` und `println`.** Training: „Eine Meldung übersetzen“ in [1.6 Fehlermeldungen lesen](/lernen/ep1/werkzeuge/fehlermeldungen-lesen).
5. **`print` und `println` verwechselt** oder ein Leerzeichen vergessen. Training: „Drei Teile, eine Zeile“ und „print oder println?“ in [1.4 Ausgaben mit print und println](/lernen/ep1/werkzeuge/ausgaben-mit-print-und-println).
6. **Rechnung in Anführungszeichen gesetzt**, sodass `6 * 7` statt `42` erscheint. Training: „Rechnen oder abschreiben?“ in [1.4 Ausgaben mit print und println](/lernen/ep1/werkzeuge/ausgaben-mit-print-und-println).
7. **Blockkommentare verschachtelt oder nicht geschlossen.** Training: „Kommentarzeichen an ungewohnten Stellen“ in [1.5 Kommentare und lesbarer Code](/lernen/ep1/werkzeuge/kommentare-und-lesbarer-code).
8. **Alle Fehlermeldungen auf einmal abgearbeitet** statt zuerst den ersten. Training: „Welcher Fehler zuerst?“ in [1.6 Fehlermeldungen lesen](/lernen/ep1/werkzeuge/fehlermeldungen-lesen).
9. **Laufzeitfehler für einen Compilerfehler gehalten** (`10 / 0`). Training: „Fehlerarten zuordnen“ in [1.6 Fehlermeldungen lesen](/lernen/ep1/werkzeuge/fehlermeldungen-lesen).
10. **Testpunkte unter der Hürde mitgezählt.** Training: „Knapp unter der Hürde“ in [1.7 Kursmodus 2026W und Abgaberegeln](/lernen/ep1/werkzeuge/kursmodus-2026w-und-abgaberegeln).
11. **Kreis über die Ecke statt über den Mittelpunkt platziert** oder y nach oben gedacht. Training: „Das richtige Quadrat“ und „Ein Schneemann“ in [1.8 CodeDraw einrichten und das erste Bild](/lernen/ep1/werkzeuge/codedraw-einrichten-und-das-erste-bild).
12. **Farbe nach der Form gesetzt oder `show()` vergessen.** Training: „Welche Farbe hat das Rechteck?“ und „Eine Zielscheibe“ in [1.8 CodeDraw einrichten und das erste Bild](/lernen/ep1/werkzeuge/codedraw-einrichten-und-das-erste-bild).

### Selbstcheck zu den Lernzielen

Schätze für jedes Lernziel ein, wie sicher du bist: **1** = noch unsicher, **2** = meistens richtig, **3** = sicher, auch unter Zeitdruck.
Vergleiche danach mit deinen Ergebnissen in den Aufgaben. Wo du dich bei 3 eingeschätzt hast, aber Fehler machst, liegt deine wichtigste Baustelle.

1. Den Weg vom Quelltext über `javac` und Bytecode zur JVM beschreiben.
2. In IntelliJ ein Projekt anlegen oder öffnen und ein Programm starten.
3. Das Hello-World-Programm Zeile für Zeile erklären.
4. Die Ausgabe von `print` und `println` exakt vorhersagen und erzeugen.
5. Kommentare richtig setzen und erkennen.
6. Fehlerarten unterscheiden und Fehlermeldungen lesen.
7. Punkte und Note nach den Regeln 2026W berechnen und eine Abgabe vorbereiten.
8. CodeDraw einbinden und ein Bild nach Maßangaben zeichnen.

## Mündliche Prüfung: Feedbackgespräch

In EP1 gibt es keine mündliche Prüfung im engeren Sinn. Es gibt aber das **Feedbackgespräch** zu jedem
Aufgabenblatt. Dort erklärst du deinen Code und beantwortest Zusatzfragen. Die Karten zeigen typische
Fragen zu diesem Kapitel. Formuliere zuerst laut eine eigene Antwort in ganzen Sätzen. Decke erst dann die
Musterantwort auf und vergleiche sie mit den Kernpunkten.

```karten
- id: wz-karte-programm
  frage: Was passiert zwischen dem Schreiben eines Java-Programms und der Ausgabe auf der Konsole?
  antwort: |
    Ich schreibe den Quelltext in eine Datei `Name.java`. Der Compiler `javac` prüft ihn auf Regelverstöße und
    übersetzt ihn in Bytecode, der in `Name.class` landet. Mit `java Name` startet die JVM und führt den Bytecode
    aus. In IntelliJ passiert beides, wenn ich auf den grünen Startknopf klicke.
  kernpunkte:
    - Quelltext in .java
    - javac übersetzt in Bytecode (.class)
    - JVM führt aus (java Name)
- id: wz-karte-bytecode
  frage: Warum erzeugt Java Bytecode statt direkt Maschinensprache?
  antwort: |
    Maschinensprache gilt nur für einen bestimmten Prozessor und ein Betriebssystem. Bytecode ist ein
    Zwischencode, den jede JVM ausführen kann. Darum läuft dieselbe `.class`-Datei auf Windows, macOS und Linux.
    Man übersetzt einmal und kann überall ausführen. Voraussetzung ist eine installierte JVM.
  kernpunkte:
    - Maschinensprache ist systemabhängig
    - Bytecode läuft auf jeder JVM
    - einmal übersetzen, überall ausführen
- id: wz-karte-dateiname
  frage: Warum muss die Datei genauso heißen wie die öffentliche Klasse? Was passiert sonst?
  antwort: |
    Java findet eine Klasse über ihren Dateinamen. Steht `public class Gruss` in `Hallo.java`, meldet der Compiler
    „class Gruss is public, should be declared in a file named Gruss.java“. Deshalb darf ich auf Blättern keine
    Dateien umbenennen. Muss ich umbenennen, dann mit Refactor → Rename, das ändert Datei und Klasse gemeinsam.
  kernpunkte:
    - Klassenname gleich Dateiname, auch Groß/Klein
    - sonst Compilerfehler
    - Umbenennen nur über Refactor
- id: wz-karte-main
  frage: Erkläre die Zeile `public static void main(String[] args)` Wort für Wort.
  antwort: |
    `public` heißt, die JVM darf die Methode von außen aufrufen. `static` heißt, die Methode gehört zur Klasse
    selbst. `void` heißt, sie liefert kein Ergebnis zurück. `main` ist der feste Name des Startpunkts. In den
    runden Klammern steht der Parameter `String[] args`, den wir in EP1 nicht verwenden, der aber dastehen muss.
  kernpunkte:
    - public, static, void erklärt
    - main ist der Startpunkt
    - Parameter String[] args muss stehen
- id: wz-karte-strichpunkt
  frage: Wo steht in Java ein Strichpunkt und wo nicht?
  antwort: |
    Ein Strichpunkt beendet eine Anweisung, zum Beispiel `System.out.println("Hi");`. Er steht nicht hinter
    `public class Name` und nicht hinter dem Kopf einer Methode, auf den ein Block mit `{` folgt. Ein Strichpunkt
    hinter `main(String[] args)` führt zum Fehler „missing method body“.
  kernpunkte:
    - Strichpunkt beendet Anweisung
    - nicht hinter Klassen- oder Methodenkopf
- id: wz-karte-print
  frage: Was ist der Unterschied zwischen print und println, und wie entsteht eine Leerzeile?
  antwort: |
    `print` schreibt den Inhalt und lässt den Cursor dahinter stehen. `println` schreibt den Inhalt und beginnt
    danach eine neue Zeile. `println()` mit leeren Klammern beendet nur die Zeile. Steht der Cursor dabei am
    Zeilenanfang, entsteht eine Leerzeile.
  kernpunkte:
    - print ohne Zeilenwechsel
    - println mit Zeilenwechsel
    - println() erzeugt Leerzeile nur am Zeilenanfang
- id: wz-karte-text-zahl
  frage: Warum gibt `System.out.println("3 + 4");` etwas anderes aus als `System.out.println(3 + 4);`?
  antwort: |
    In Anführungszeichen steht ein String-Literal, also Text. Java schreibt ihn Zeichen für Zeichen ab, die Ausgabe
    ist `3 + 4`. Ohne Anführungszeichen ist `3 + 4` eine Rechnung. Java rechnet zuerst und gibt `7` aus. Mehr zu
    Rechnungen und Datentypen kommt in [2.1 Variablen, Datentypen und Literale](/lernen/ep1/ausdruecke/variablen-datentypen-und-literale).
  kernpunkte:
    - Anführungszeichen machen Text
    - ohne Anführungszeichen wird gerechnet
- id: wz-karte-kommentare
  frage: Welche Kommentararten gibt es, und warum soll ein Kommentar das „Warum“ erklären?
  antwort: |
    Es gibt den Zeilenkommentar `//` bis zum Zeilenende, den Blockkommentar `/* ... */` bis zum ersten `*/` und den
    Javadoc-Kommentar `/** ... */`. Der Compiler ignoriert alle. Was der Code tut, sieht man im Code selbst. Ein
    Kommentar lohnt sich, wenn er die Absicht erklärt, die man nicht sofort sieht.
  kernpunkte:
    - drei Arten, Compiler ignoriert sie
    - Blockkommentar endet beim ersten */
    - Kommentar erklärt Absicht
- id: wz-karte-fehlerarten
  frage: Nenne die drei Fehlerarten mit je einem Beispiel und sag, wann sie auffallen.
  antwort: |
    Ein Compilerfehler verletzt eine Sprachregel, etwa ein fehlender Strichpunkt. Er fällt beim Übersetzen auf, und
    das Programm startet nicht. Ein Laufzeitfehler zeigt sich erst beim Ausführen, etwa `10 / 0` mit
    `ArithmeticException`. Ein logischer Fehler wird nie gemeldet, das Programm tut nur das Falsche, etwa eine
    vertauschte Reihenfolge.
  kernpunkte:
    - Compilerfehler beim Übersetzen
    - Laufzeitfehler beim Ausführen (Exception)
    - logischer Fehler wird nicht gemeldet
- id: wz-karte-meldung
  frage: "Wie liest du die Meldung `Konto.java:7: error: ';' expected`, und was tust du bei mehreren Meldungen?"
  antwort: |
    `Konto.java` ist die Datei, 7 die Zeile, und `';' expected` die Ursache: Ein Strichpunkt fehlt. Ich sehe mir
    Zeile 7 und die Zeile davor an. Bei mehreren Meldungen behebe ich zuerst die erste und übersetze neu, weil
    die anderen oft Folgefehler sind.
  kernpunkte:
    - Datei, Zeile, Ursache
    - genannte Zeile und die davor ansehen
    - erster Fehler zuerst, Folgefehler
- id: wz-karte-stacktrace
  frage: Was steht in einem Stacktrace wie `at Teilen.main(Teilen.java:4)`?
  antwort: |
    Er nennt den Ort der Exception: die Methode `main` der Klasse `Teilen`, in der Datei `Teilen.java`, Zeile 4.
    Darüber steht die Art der Exception, etwa `ArithmeticException: / by zero`. Ausgaben vor dieser Zeile sind
    noch erschienen, danach bricht das Programm ab. Dieselbe Lesetechnik brauche ich später bei Arrays in [12.1 Was ist ein Array? Anlegen, Index und Länge](/lernen/ep1/arrays/was-ist-ein-array-anlegen-index-und-laenge).
  kernpunkte:
    - Klasse, Methode, Datei, Zeile
    - Art und Ursache der Exception
    - Programm bricht dort ab
- id: wz-karte-bewertung
  frage: Wie setzt sich die Note in K1 zusammen, und welche Regel ist beim Test besonders wichtig?
  antwort: |
    Es gibt 6 Punkte für zwei Übungen, 24 für vier Aufgabenblätter, 40 für vier Quiz und 30 für den Test. Im Test
    brauche ich mindestens 15 Punkte, sonst werden die Testpunkte nicht angerechnet. Ab 92 Punkten ist es ein Sehr
    gut, ab 83 Gut, ab 74 Befriedigend und ab 65 Genügend.
  kernpunkte:
    - 6 + 24 + 40 + 30
    - Test mindestens 50 Prozent
    - Grenzen 92, 83, 74, 65
- id: wz-karte-abgabe
  frage: Was musst du vor der Abgabe eines Aufgabenblatts prüfen?
  antwort: |
    Das ganze Projekt muss kompilieren, auch die Dateien unfertiger Aufgaben. Dateinamen und Ordnerstruktur bleiben
    unverändert. Ausgaben stimmen exakt mit der Angabe überein. Ich verwende nur erlaubte Klassen. Dann lade ich
    das ganze Projekt hoch und kreuze in TUWEL an, was ich gelöst habe. Im Gespräch muss ich jede Zeile erklären können.
  kernpunkte:
    - alles kompiliert, Namen unverändert
    - nur erlaubte Klassen, Ausgabe exakt
    - hochladen und ankreuzen
- id: wz-karte-codedraw
  frage: Wie funktioniert das Koordinatensystem in CodeDraw, und worin unterscheiden sich drawRectangle und drawCircle?
  antwort: |
    Der Ursprung liegt links oben, x wächst nach rechts und y nach unten. Bei `drawRectangle(x, y, b, h)` ist (x, y)
    die linke obere Ecke. Bei `drawCircle(x, y, r)` ist (x, y) der Mittelpunkt. Wer einen Kreis wie ein Rechteck
    platziert, verschiebt ihn um den Radius. Später gezeichnete Formen liegen oben. In [5.4 CodeDraw mit Schleifen: Reihen, Raster und Verläufe](/lernen/ep1/grafik/codedraw-mit-schleifen-reihen-raster-und-verlaeufe) baust du damit Muster mit Schleifen.
  kernpunkte:
    - Ursprung links oben, y nach unten
    - Rechteck über Ecke, Kreis über Mittelpunkt
    - Zeichenreihenfolge zählt
```
