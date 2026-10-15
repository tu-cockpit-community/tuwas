---
nummer: 5
titel: Trigonometrie
kurz: Winkelfunktionen im rechtwinkligen Dreieck, im Raum und am Einheitskreis, Bogenmaß, Sinus- und Kosinussatz, Graphen, trigonometrische Gleichungen mit allen Lösungen, Identitäten und Polarkoordinaten.
teil: A
stunden: 16
pruefungsgewicht: 2
voraussetzungen: [zahlen, gleichungen, funktionen]
lernziele:
  - sin, cos und tan im rechtwinkligen Dreieck als Seitenverhältnisse angeben und damit fehlende Seiten und Winkel berechnen, auch in Körpern wie Quader und Pyramide
  - Steigungen zwischen Prozentangabe und Winkel umrechnen und Höhenunterschiede, Höhenwinkel und Tiefenwinkel in Sachaufgaben berechnen
  - die Winkelfunktionen am Einheitskreis für beliebige Winkel erklären, ihre Vorzeichen bestimmen und exakte Werte bei 0°, 30°, 45°, 60°, 90° und ihren Vielfachen angeben
  - Winkel zwischen Grad- und Bogenmaß umrechnen, den Taschenrechnermodus richtig wählen und Bogenlänge, Sektor, Sehne und Kreissegment berechnen
  - allgemeine Dreiecke mit Sinus- und Kosinussatz auflösen, den mehrdeutigen Fall SSW erkennen und Flächen sowie Vermessungsaufgaben berechnen
  - Graphen von sin, cos, tan und von a·sin(b(x − c)) + d skizzieren, Amplitude, Periode und Verschiebung ablesen und Schwingungen damit modellieren
  - trigonometrische Gleichungen vollständig lösen und alle Lösungen in einem Intervall oder in ganz ℝ angeben
  - die Identitäten sin² + cos² = 1, die Additionstheoreme und die Doppelwinkelformeln herleiten und zum Vereinfachen und exakten Rechnen anwenden
  - Punkte zwischen kartesischen Koordinaten und Polarkoordinaten umrechnen und dabei den Quadranten richtig berücksichtigen
---

Trigonometrie heißt wörtlich „Dreiecksmessung“. Sie beginnt mit einer einfachen Beobachtung. Zeichnest du
zwei rechtwinklige Dreiecke mit demselben spitzen Winkel, dann ist das eine eine vergrößerte Kopie des
anderen. Die **Verhältnisse** der Seiten sind in beiden gleich. Diese Verhältnisse heißen Sinus, Kosinus und
Tangens. Mit ihnen berechnest du Höhen, die du nicht messen kannst, Entfernungen über einen Fluss oder den
Neigungswinkel eines Daches.

Später wird aus dem Dreieck ein Kreis. Am Einheitskreis werden Sinus und Kosinus zu Funktionen, die für jeden
Winkel definiert sind. Sie beschreiben alles, was sich regelmäßig wiederholt: Schwingungen einer Feder,
Wechselstrom, Gezeiten und die Tageslänge im Lauf des Jahres. Ohne sie gäbe es auch die Polarform der komplexen
Zahlen aus [Kapitel 15, Polarform](/lernen/mathe3/komplexe-zahlen/polarform-und-exponentialform) nicht, und in [Kapitel 9, Grundregeln](/lernen/mathe3/differentialrechnung/grundregeln-potenz-faktor-und-summenregel-und-die-wichtigsten-ableitungen)
leitest du sie ab.

### Was in der Prüfung vorkommt

In den Musterprüfungen ist Trigonometrie meist eine Teilaufgabe mit etwa fünf Punkten. Zwei Typen kommen vor:

- **Ein rechtwinkliges Dreieck mit ganzzahligen Seiten.** Du sollst rechnerisch zeigen, dass ein Winkel ein
  rechter ist. Dann gibst du Sinus, Kosinus und Tangens als Brüche an und erklärst, warum der Tangens von $90°$
  nicht existiert.
- **Eine Gleichung und eine Anwendung.** Gesucht sind **alle** Winkel mit einem bestimmten Sinuswert. Dazu kommt
  eine Straße mit einer Steigung in Prozent, bei der du den Steigungswinkel und einen Höhenunterschied berechnest.

Beide Typen übst du in diesem Kapitel an abgewandelten Varianten mit anderen Zahlen. Die Originale sind für die
[Prüfungssimulationen](/lernen/mathe3/pruefung) reserviert. Dort kannst du ehrlich testen, ob du sie ohne Vorlage
lösen kannst.

Drei Stellen sind für fast alle Lernenden schwierig. Wir nehmen uns für sie besonders viel Zeit:

1. **Grad und Bogenmaß am Taschenrechner.** Der Rechner rechnet in dem Modus, der gerade eingestellt ist. Steht er
   falsch, ist jedes Ergebnis falsch, ohne dass eine Fehlermeldung kommt.
2. **„Alle Lösungen“ bei $\sin x = c$.** Der Rechner liefert immer nur **eine** Lösung. Die übrigen musst du selbst
   finden.
3. **Der mehrdeutige Fall beim Sinussatz.** Manchmal passen zu denselben Angaben zwei verschiedene Dreiecke.

In der mündlichen Prüfung sind Fragen wie „Wie ist der Sinus am Einheitskreis definiert?“ oder „Warum hat
$\sin x = 0{,}3$ unendlich viele Lösungen?“ typisch. Zu jeder dieser Fragen findest du eine Karte in
[5.19 Mündliche Prüfung](/lernen/mathe3/trigonometrie/muendliche-pruefung).

Eine Lektion ist als **Vertiefung** gekennzeichnet:
[5.15 Überlagerung von Schwingungen](/lernen/mathe3/trigonometrie/ueberlagerung-von-schwingungen-und-schwebung-vertiefung).
Sie geht über den Stoff der Studienberechtigungsprüfung hinaus, ist aber für die Physik (Schwebung, Wechselstrom)
sehr nützlich.

:::vorwissen
Du brauchst vor allem vier Dinge aus früheren Kapiteln:

- **Bruchrechnen und Wurzeln**, etwa $\frac{1}{\sqrt2} = \frac{\sqrt2}{2}$, aus
  [Kapitel 1, Bruchrechnen](/lernen/mathe3/zahlen/bruchrechnen) und
  [Kapitel 1, Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln).
- **Formeln umstellen**, etwa $\sin\alpha = \frac{a}{c}$ nach $c$ auflösen, aus
  [Kapitel 2, Formeln umstellen](/lernen/mathe3/gleichungen/formeln-umstellen). Dort steht auch der Satz des
  Pythagoras.
- **Quadratische Gleichungen** aus
  [Kapitel 2, Quadratische Gleichungen](/lernen/mathe3/gleichungen/quadratische-gleichungen). Sie tauchen bei
  trigonometrischen Gleichungen nach einer Substitution wieder auf.
- **Graphen verschieben und strecken** aus [Kapitel 4, Graphen verschieben, strecken und spiegeln](/lernen/mathe3/funktionen/graphen-verschieben-strecken-und-spiegeln). Damit beschreibst du
  Schwingungen.
:::

### Eingangsdiagnose

Teste dich mit den folgenden sechs Kurzfragen. Wenn du bei einer Frage unsicher bist, wiederhole zuerst den
verlinkten Abschnitt. Jede Lücke von dort taucht in diesem Kapitel wieder auf.

```aufgabe
id: tr-ein-pythagoras
titel: Eine Kathete mit Pythagoras
art: check
niveau: 1
angabe: |
  In einem rechtwinkligen Dreieck ist die längste Seite (die Hypotenuse) $25$ cm lang und eine der beiden kürzeren
  Seiten $7$ cm. Wie lang ist die dritte Seite? Zum Nachlesen:
  [Kapitel 2, Formeln umstellen](/lernen/mathe3/gleichungen/formeln-umstellen).
teile:
  - typ: zahl
    einheit: cm
    loesung: "sqrt(25^2 - 7^2)"
    fehler:
      - wert: "25 - 7"
        meldung: 'Aus $a^2 + b^2 = c^2$ folgt nicht $b = c - a$. Die Wurzel aus einer Differenz ist nicht die Differenz der Wurzeln. Rechne zuerst mit den Quadraten.'
      - wert: "sqrt(25^2 + 7^2)"
        meldung: 'Du hast die Quadrate addiert. Das ergibt die Hypotenuse aus zwei Katheten. Hier ist die Hypotenuse aber schon gegeben, also musst du subtrahieren.'
loesung: |
  Pythagoras: $a^2 + b^2 = c^2$, wobei $c = 25$ die Hypotenuse ist. Umgestellt nach der gesuchten Seite: $b^2 = c^2 - a^2$.
  ---
  $b^2 = 625 - 49 = 576$, also $b = \sqrt{576} = 24$ cm.
```

```aufgabe
id: tr-ein-doppelbruch
titel: Ein Bruch durch einen Bruch
art: check
niveau: 1
angabe: |
  Vereinfache $\dfrac{3/5}{4/5}$. Zum Nachlesen: [Kapitel 1, Bruchrechnen](/lernen/mathe3/zahlen/bruchrechnen).
teile:
  - typ: zahl
    loesung: "3/4"
    anzeige: '\tfrac34'
    fehler:
      - wert: "12/25"
        meldung: 'Du hast die beiden Brüche multipliziert. Durch einen Bruch teilt man, indem man mit seinem **Kehrwert** multipliziert.'
      - wert: "4/3"
        meldung: 'Zähler und Nenner sind vertauscht. Oben steht $\frac35$, unten $\frac45$.'
loesung: |
  Durch einen Bruch teilen heißt, mit dem Kehrwert zu multiplizieren: $\frac35 : \frac45 = \frac35\cdot\frac54$.
  ---
  Die $5$ kürzt sich weg: $\frac{3\cdot 5}{5\cdot 4} = \frac34$. Genau so entsteht später $\tan\alpha = \frac{\sin\alpha}{\cos\alpha}$.
```

```aufgabe
id: tr-ein-wurzel
titel: Eine Wurzel aus dem Nenner holen
art: check
niveau: 1
angabe: |
  Welcher Ausdruck ist gleich $\dfrac{1}{\sqrt3}$? Zum Nachlesen:
  [Kapitel 1, Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln).
teile:
  - typ: auswahl
    optionen:
      - '$\frac{\sqrt3}{3}$'
      - '$\sqrt3$'
      - '$\frac{1}{3}$'
      - '$\frac{3}{\sqrt3}$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$\sqrt3 \approx 1{,}73$ ist größer als $1$. Der Bruch $\frac{1}{\sqrt3}$ ist aber kleiner als $1$. Erweitere den Bruch mit $\sqrt3$.'
      - wert: 2
        meldung: 'Im Nenner steht $\sqrt3$, nicht $3$. Du hast die Wurzel weggelassen.'
      - wert: 3
        meldung: '$\frac{3}{\sqrt3} = \sqrt3$, das ist der Kehrwert des gesuchten Bruchs.'
loesung: |
  Wir erweitern mit $\sqrt3$, damit im Nenner keine Wurzel mehr steht: $\frac{1}{\sqrt3} = \frac{1\cdot\sqrt3}{\sqrt3\cdot\sqrt3}$.
  ---
  Wegen $\sqrt3\cdot\sqrt3 = 3$ ergibt das $\frac{\sqrt3}{3} \approx 0{,}577$. Das ist der exakte Wert von $\tan 30°$.
```

```aufgabe
id: tr-ein-umstellen
titel: Nach dem Nenner auflösen
art: check
niveau: 1
angabe: |
  Löse $0{,}6 = \dfrac{9}{c}$ nach $c$ auf. Zum Nachlesen:
  [Kapitel 2, Formeln umstellen](/lernen/mathe3/gleichungen/formeln-umstellen).
teile:
  - typ: zahl
    loesung: "9/0.6"
    fehler:
      - wert: "9*0.6"
        meldung: 'Du hast mit $0{,}6$ multipliziert. Multipliziere zuerst beide Seiten mit $c$, dann teile durch $0{,}6$.'
      - wert: "0.6/9"
        meldung: 'Das ist der Kehrwert. Probe: $\frac{9}{0{,}0667}$ ist viel größer als $0{,}6$.'
loesung: |
  Wir multiplizieren beide Seiten mit $c$, damit $c$ aus dem Nenner kommt: $0{,}6\,c = 9$.
  ---
  Dann teilen wir durch $0{,}6$: $c = \frac{9}{0{,}6} = 15$. Probe: $\frac{9}{15} = 0{,}6$.
```

```aufgabe
id: tr-ein-quadratisch
titel: Eine quadratische Gleichung
art: check
niveau: 1
angabe: |
  Löse $u^2 + u - 2 = 0$. Gib beide Lösungen getrennt durch einen Strichpunkt an. Zum Nachlesen:
  [Kapitel 2, Quadratische Gleichungen](/lernen/mathe3/gleichungen/quadratische-gleichungen).
teile:
  - typ: menge
    loesung: ["1", "-2"]
    fehler:
      - wert: ["-1", "2"]
        meldung: 'Die Vorzeichen sind vertauscht. Probe mit $u = 2$: $4 + 2 - 2 = 4 \ne 0$.'
loesung: |
  Kleine Lösungsformel mit $p = 1$ und $q = -2$: $u = -\frac12 \pm \sqrt{\frac14 + 2} = -\frac12 \pm \frac32$.
  ---
  Also $u_1 = 1$ und $u_2 = -2$. Probe: $1 + 1 - 2 = 0$ und $4 - 2 - 2 = 0$.
```

```aufgabe
id: tr-ein-verschieben
titel: Einen Graphen verschieben
art: check
niveau: 1
angabe: |
  Wie entsteht der Graph von $g(x) = f(x - 3) + 1$ aus dem Graphen von $f$? Zum Nachlesen:
  [Kapitel 4, Graphen verschieben, strecken und spiegeln](/lernen/mathe3/funktionen/graphen-verschieben-strecken-und-spiegeln).
teile:
  - typ: auswahl
    optionen:
      - 'um $3$ nach rechts und um $1$ nach oben'
      - 'um $3$ nach links und um $1$ nach oben'
      - 'um $3$ nach rechts und um $1$ nach unten'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Das Minus in $x - 3$ täuscht. Setz $x = 3$ ein: $g(3) = f(0) + 1$. Was bei $f$ an der Stelle $0$ passiert, passiert bei $g$ also an der Stelle $3$, weiter rechts.'
      - wert: 2
        meldung: 'Das $+1$ steht außerhalb der Klammer. Es wird zum Funktionswert addiert, der Graph wandert also nach oben.'
loesung: |
  Ein Summand außerhalb der Klammer verschiebt in $y$-Richtung: $+1$ heißt um $1$ nach oben.
  ---
  $x - 3$ in der Klammer verschiebt in $x$-Richtung um $3$ nach **rechts**, denn $g(3) = f(0) + 1$.
```

**So ist das Kapitel aufgebaut.** Zuerst kommen das rechtwinklige Dreieck, Steigungen und Körper. Dann führen wir
Sinus und Kosinus am Einheitskreis für beliebige Winkel ein, mit Bogenmaß und exakten Werten. Darauf bauen die
allgemeinen Dreiecke, die Graphen, die Gleichungen und die Identitäten auf. Am Ende stehen Polarkoordinaten, eine
Vertiefung zu Schwingungen, eine gemischte Wiederholung, Prüfungsaufgaben, eine Zusammenfassung und Karten für
die mündliche Prüfung.

## Das rechtwinklige Dreieck

```aufgabe
id: tr-rd-check-hypotenuse
titel: Welche Seite ist die Hypotenuse?
art: check
niveau: 1
angabe: |
  Ein Dreieck $ABC$ hat bei $C$ einen rechten Winkel. Wie üblich liegt die Seite $a$ der Ecke $A$ gegenüber, $b$ der Ecke
  $B$ und $c$ der Ecke $C$. Welche Seite ist die Hypotenuse, also die längste Seite? Wenn du unsicher bist, lies den
  Satz des Pythagoras in [Kapitel 2, Formeln umstellen](/lernen/mathe3/gleichungen/formeln-umstellen) nach.
teile:
  - typ: auswahl
    optionen: ['$a$', '$b$', '$c$']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: '$a$ liegt der Ecke $A$ gegenüber. Die Hypotenuse liegt aber dem **rechten** Winkel gegenüber, und der ist bei $C$.'
      - wert: 1
        meldung: '$b$ liegt der Ecke $B$ gegenüber. Die Hypotenuse liegt dem **rechten** Winkel gegenüber, und der ist bei $C$.'
loesung: |
  Die Hypotenuse liegt immer dem rechten Winkel gegenüber.
  ---
  Der rechte Winkel ist bei $C$, also ist $c$ die Hypotenuse. Die Seiten $a$ und $b$ bilden den rechten Winkel, sie heißen Katheten.
```

**Worum geht es?** In einem rechtwinkligen Dreieck hängen die Seitenverhältnisse nur von einem spitzen Winkel ab.
Kennst du diesen Winkel und eine Seite, kannst du jede andere Seite berechnen.

Ein konkretes Bild dazu: Zwei Rampen steigen beide unter $20°$ an. Die erste ist $3$ m lang und endet in $1{,}026$ m
Höhe. Die zweite ist doppelt so lang, nämlich $6$ m, und endet in $2{,}052$ m Höhe. Teilst du jeweils die Höhe durch
die Länge, erhältst du beide Male $0{,}342$. Dieses Verhältnis ist für **jede** Rampe mit $20°$ gleich. Es heißt
Sinus von $20°$.

Warum ist das so? Zwei rechtwinklige Dreiecke mit demselben spitzen Winkel stimmen in allen drei Winkeln überein.
Solche Dreiecke heißen **ähnlich**: Das eine ist eine maßstäbliche Vergrößerung des anderen. Beim Vergrößern
werden alle Seiten mit demselben Faktor multipliziert. Deshalb bleiben ihre Verhältnisse gleich.

### Hypotenuse, Gegenkathete und Ankathete

Die Seite gegenüber dem rechten Winkel heißt **Hypotenuse**. Sie ist immer die längste Seite. Die beiden anderen
Seiten heißen **Katheten**. Bezogen auf einen spitzen Winkel $\alpha$ unterscheiden wir sie so:

- Die **Gegenkathete** von $\alpha$ liegt dem Winkel $\alpha$ gegenüber. Sie berührt $\alpha$ nicht.
- Die **Ankathete** von $\alpha$ ist die Kathete, die am Winkel $\alpha$ anliegt. Sie ist einer der beiden Schenkel
  von $\alpha$. Der andere Schenkel ist die Hypotenuse.

Welche Kathete Gegen- und welche Ankathete ist, hängt also vom Winkel ab. Für den anderen spitzen Winkel $\beta$
tauschen die beiden Katheten ihre Rollen.

```plot
x: [-0.6, 5.2]
y: [-0.7, 3.8]
gleich: true
strecken:
  - { von: [0, 0], nach: [4, 0], farbe: 0 }
  - { von: [4, 0], nach: [4, 3], farbe: 1 }
  - { von: [0, 0], nach: [4, 3], farbe: 2 }
  - { von: [3.7, 0], nach: [3.7, 0.3], farbe: 3 }
  - { von: [3.7, 0.3], nach: [4, 0.3], farbe: 3 }
punkte:
  - { x: 0, y: 0, label: "A (α)" }
  - { x: 4, y: 0, label: "C (rechter Winkel)" }
  - { x: 4, y: 3, label: "B (β)" }
  - { x: 2, y: -0.3, label: "b: Ankathete von α" }
  - { x: 4.1, y: 1.5, label: "a: Gegenkathete von α" }
  - { x: 1.4, y: 1.6, label: "c: Hypotenuse" }
beschriftung: Rechtwinkliges Dreieck mit dem rechten Winkel bei C. Für den Winkel α bei A ist a die Gegenkathete, b die Ankathete und c die Hypotenuse. Für den Winkel β bei B wären a und b vertauscht.
```

### Sinus, Kosinus und Tangens

:::definition[Winkelfunktionen im rechtwinkligen Dreieck]
Für einen spitzen Winkel $\alpha$ in einem rechtwinkligen Dreieck gilt:
$$\sin\alpha = \frac{\text{Gegenkathete}}{\text{Hypotenuse}}, \qquad \cos\alpha = \frac{\text{Ankathete}}{\text{Hypotenuse}}, \qquad \tan\alpha = \frac{\text{Gegenkathete}}{\text{Ankathete}}.$$
Man liest „Sinus von Alpha“, „Kosinus von Alpha“ und „Tangens von Alpha“.
:::

Mit dem rechten Winkel bei $C$ heißt das für beide spitzen Winkel:
$$\sin\alpha = \frac ac, \quad \cos\alpha = \frac bc, \quad \tan\alpha = \frac ab, \qquad \sin\beta = \frac bc, \quad \cos\beta = \frac ac, \quad \tan\beta = \frac ba.$$

:::beispiel[Ein Dreieck mit den Seiten 8, 15 und 17]
Ein Dreieck hat die Seiten $a = 8$, $b = 15$ und $c = 17$, der rechte Winkel liegt bei $C$.

- Für $\alpha$ ist $a = 8$ die Gegenkathete, $b = 15$ die Ankathete und $c = 17$ die Hypotenuse.
- Also gilt $\sin\alpha = \frac{8}{17}$, $\cos\alpha = \frac{15}{17}$ und $\tan\alpha = \frac{8}{15}$.
- Den Winkel selbst liefert die Umkehrfunktion des Sinus. Am Taschenrechner heißt sie $\sin^{-1}$:
  $\alpha = \sin^{-1}\!\left(\frac{8}{17}\right) \approx 28{,}07°$.
- Kontrolle mit dem Tangens: $\tan^{-1}\!\left(\frac{8}{15}\right) \approx 28{,}07°$. Es stimmt.

**Nichtbeispiel:** Ein Dreieck mit den Seiten $5$, $6$ und $8$ hat **keinen** rechten Winkel, denn
$5^2 + 6^2 = 61 \ne 64 = 8^2$. Dort gibt es keine Hypotenuse. Der Bruch „gegenüberliegende Seite durch längste
Seite“ ist dann **nicht** der Sinus des Winkels. Die Definition gilt nur im rechtwinkligen Dreieck.
:::

Den Winkel aus einem Seitenverhältnis bekommst du mit den **Umkehrfunktionen**. Sie heißen $\arcsin$, $\arccos$ und
$\arctan$ (lies „Arkussinus“ und so weiter). Am Taschenrechner stehen sie als $\sin^{-1}$, $\cos^{-1}$ und
$\tan^{-1}$ über den Tasten $\sin$, $\cos$ und $\tan$. Für Winkel im Gradmaß muss der Rechner im Modus **DEG**
(englisch *degree*, Grad) stehen. Mehr dazu in [5.5 Winkel in Grad und im Bogenmaß](/lernen/mathe3/trigonometrie/winkel-in-grad-und-im-bogenmass).

:::achtung[sin⁻¹ ist nicht 1 durch sin]
Gesucht ist $\alpha$ mit $\sin\alpha = 0{,}4$. Falsch ist die Rechnung $\frac{1}{0{,}4} = 2{,}5$. Das Zeichen
$\sin^{-1}$ bedeutet nicht „Kehrwert“, sondern „Umkehrfunktion“: Es beantwortet die Frage „Welcher Winkel hat den
Sinus $0{,}4$?“.

Richtig ist $\alpha = \sin^{-1}(0{,}4) \approx 23{,}58°$. Probe: $\sin 23{,}58° \approx 0{,}4$. Mit dem Kehrwert
$2{,}5$ als Winkel scheitert die Probe: $\sin 2{,}5° \approx 0{,}044$, nicht $0{,}4$.
:::

```aufgabe
id: tr-rd-check-umkehr
titel: Den Winkel aus einem Verhältnis holen
art: check
niveau: 1
angabe: |
  In einem rechtwinkligen Dreieck ist $\tan\alpha = 0{,}75$. Mit welcher Eingabe am Taschenrechner (Modus DEG) bekommst
  du den Winkel $\alpha$?
teile:
  - typ: auswahl
    optionen:
      - '$\tan^{-1}(0{,}75)$'
      - '$1 : \tan(0{,}75)$'
      - '$\tan(0{,}75)$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Das ist der Kehrwert von $\tan(0{,}75°)$. Gesucht ist aber der Winkel, dessen Tangens $0{,}75$ ist. Dafür gibt es die Umkehrfunktion $\tan^{-1}$.'
      - wert: 2
        meldung: 'Damit berechnest du den Tangens des Winkels $0{,}75°$. Hier ist der Tangens gegeben und der Winkel gesucht, also musst du umkehren.'
loesung: |
  Gegeben ist der Wert des Tangens, gesucht ist der Winkel. Das ist die Umkehrung, also $\tan^{-1}$.
  ---
  $\alpha = \tan^{-1}(0{,}75) \approx 36{,}87°$. Probe: $\tan 36{,}87° \approx 0{,}75$.
```

### Pythagoras und zwei Beziehungen zwischen den Winkelfunktionen

:::satz[Satz des Pythagoras und seine Umkehrung]
In einem Dreieck mit den Seiten $a$, $b$, $c$ gilt: Der Winkel $\gamma$ gegenüber von $c$ ist genau dann ein rechter
Winkel, wenn
$$a^2 + b^2 = c^2.$$
Die Richtung „rechter Winkel, also gilt die Gleichung“ ist der Satz des Pythagoras. Die Richtung „die Gleichung gilt,
also ist der Winkel ein rechter“ heißt **Umkehrung**.
:::

Mit der Umkehrung prüfst du **rechnerisch**, ob ein Dreieck rechtwinklig ist. Das Dreieck mit den Seiten $7$, $24$
und $25$ ist rechtwinklig, denn $7^2 + 24^2 = 49 + 576 = 625 = 25^2$. Der rechte Winkel liegt der längsten Seite
gegenüber. Das Dreieck mit $5$, $6$ und $8$ ist es nicht. Einen Beweis der Umkehrung liefert der Kosinussatz in
[5.7 Allgemeine Dreiecke](/lernen/mathe3/trigonometrie/allgemeine-dreiecke-sinussatz-kosinussatz-flaeche).

Aus den Definitionen folgen zwei Beziehungen, die du immer wieder brauchst:

- **Tangens als Quotient:** $\tan\alpha = \frac{\sin\alpha}{\cos\alpha}$. Denn $\frac{a/c}{b/c} = \frac ab$: Der
  Nenner $c$ kürzt sich weg.
- **Trigonometrischer Pythagoras:** $\sin^2\alpha + \cos^2\alpha = 1$. Dabei bedeutet $\sin^2\alpha$ dasselbe wie
  $(\sin\alpha)^2$. Begründung: $\frac{a^2}{c^2} + \frac{b^2}{c^2} = \frac{a^2 + b^2}{c^2} = \frac{c^2}{c^2} = 1$.

Eine dritte Beziehung erklärt den Namen Kosinus. Die Gegenkathete von $\alpha$ ist die Ankathete von $\beta$. Also ist
$\sin\alpha = \cos\beta$. Weil $\beta = 90° - \alpha$ ist, gilt $\sin\alpha = \cos(90° - \alpha)$. Der **Ko**sinus
ist der Sinus des **Komplement**winkels, also des Winkels, der $\alpha$ zu $90°$ ergänzt.

```reflexion
frage: Warum darf man $\sin 20°$ einfach als Zahl in eine Tabelle schreiben, obwohl es unendlich viele verschiedene rechtwinklige Dreiecke mit einem $20°$-Winkel gibt?
antwort: |
  Alle diese Dreiecke stimmen in allen drei Winkeln überein ($20°$, $90°$ und $70°$). Sie sind also ähnlich: Jedes
  ist eine maßstäbliche Vergrößerung oder Verkleinerung jedes anderen. Beim Vergrößern mit einem Faktor $k$ werden
  Gegenkathete und Hypotenuse beide mit $k$ multipliziert, und $k$ kürzt sich im Bruch weg. Das Verhältnis
  Gegenkathete durch Hypotenuse ist deshalb in allen diesen Dreiecken dasselbe. Es hängt nur vom Winkel ab. Diese
  eine Zahl, etwa $0{,}342$, nennen wir $\sin 20°$.
```

### Fehlende Stücke berechnen

Kennst du in einem rechtwinkligen Dreieck eine Seite und einen spitzen Winkel oder zwei Seiten, dann kannst du alle
übrigen Seiten und Winkel berechnen.

:::beispiel[Ein Dachsparren]
Ein Dachsparren ist $7{,}5$ m lang und liegt unter einer Dachneigung von $38°$ gegen die Waagrechte. Wie hoch liegt
der First über dem unteren Ende des Sparrens, und wie weit reicht der Sparren waagrecht?

1. **Skizze:** Sparren, Waagrechte und Senkrechte bilden ein rechtwinkliges Dreieck. Der rechte Winkel liegt unten
   am Lot vom First. Der Sparren ist die Hypotenuse, denn er liegt dem rechten Winkel gegenüber.
2. **Höhe:** Sie liegt dem $38°$-Winkel gegenüber, ist also die Gegenkathete. Wir brauchen die Funktion mit
   Gegenkathete und Hypotenuse, den Sinus: $\sin 38° = \frac{h}{7{,}5}$.
3. Wir multiplizieren mit $7{,}5$: $h = 7{,}5\cdot\sin 38° \approx 7{,}5\cdot 0{,}6157 \approx 4{,}62$ m.
4. **Waagrechte Länge:** Sie ist die Ankathete, also $\cos 38° = \frac{w}{7{,}5}$ und
   $w = 7{,}5\cdot\cos 38° \approx 5{,}91$ m.
5. **Kontrolle mit Pythagoras:** $4{,}617^2 + 5{,}910^2 \approx 21{,}32 + 34{,}93 = 56{,}25 = 7{,}5^2$. Es stimmt.

**Antwort:** Der First liegt etwa $4{,}62$ m höher, der Sparren reicht waagrecht etwa $5{,}91$ m weit.
:::

:::achtung[Kosinus für die Gegenkathete]
Beim Dachsparren rechnet jemand die Höhe so: $h = 7{,}5\cdot\cos 38° \approx 5{,}91$ m. Das ist die **waagrechte**
Länge, nicht die Höhe. Der Fehler entsteht, weil die Höhe „neben“ dem Winkel gezeichnet wurde.

Prüfe immer an der Skizze: Berührt die Seite den Winkel? Dann ist sie Ankathete (oder Hypotenuse). Liegt sie ihm
gegenüber, ist sie die Gegenkathete. Zur Plausibilität: Bei einem Winkel unter $45°$ ist die Gegenkathete kürzer als
die Ankathete. $5{,}91$ m als Höhe wäre zu viel.
:::

:::merke[Rezept: rechtwinkliges Dreieck berechnen]
1. Skizze zeichnen, den rechten Winkel markieren, alle gegebenen Stücke eintragen.
2. Für den gegebenen oder gesuchten Winkel festlegen: Welche Seite ist Gegenkathete, Ankathete, Hypotenuse?
3. Die Winkelfunktion wählen, in der genau **eine** Unbekannte vorkommt.
4. Nach der Unbekannten umformen. Einen Winkel liefert $\sin^{-1}$, $\cos^{-1}$ oder $\tan^{-1}$ im Modus DEG.
5. Kontrollieren: Die beiden spitzen Winkel ergeben zusammen $90°$. Die Seiten erfüllen den Pythagoras. Die
   Hypotenuse ist die längste Seite.
:::

```aufgabe
id: tr-rechtwinklig-seiten
titel: Katheten aus Hypotenuse und Winkel
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  In einem rechtwinkligen Dreieck mit dem rechten Winkel bei $C$ ist $c = 15$ cm und $\alpha = 28°$.
  Berechne $a$, $b$ und $\beta$. Runde Längen auf zwei Nachkommastellen.
teile:
  - typ: zahl
    label: '$a$'
    einheit: cm
    loesung: "15*sin(inRad(28))"
    anzeige: '7{,}04'
    fehler:
      - wert: "15*cos(inRad(28))"
        meldung: 'Das ist die Ankathete. $a$ liegt dem Winkel $\alpha$ gegenüber, ist also die Gegenkathete. Dazu gehört der Sinus.'
      - wert: "15*sin(28)"
        meldung: 'Dein Rechner steht im Modus RAD (Bogenmaß). Stell ihn auf DEG, denn $28$ ist hier ein Winkel in Grad.'
  - typ: zahl
    label: '$b$'
    einheit: cm
    loesung: "15*cos(inRad(28))"
    anzeige: '13{,}24'
    fehler:
      - wert: "15*sin(inRad(28))"
        meldung: '$b$ berührt den Winkel $\alpha$, ist also die Ankathete. Dazu gehört der Kosinus.'
  - typ: zahl
    label: '$\beta$'
    einheit: °
    loesung: "90 - 28"
    fehler:
      - wert: "180 - 28"
        meldung: 'Die Winkelsumme ist $180°$, aber der rechte Winkel ist schon $90°$ davon. Für $\alpha$ und $\beta$ zusammen bleiben $90°$.'
hinweise:
  - 'Zeichne eine Skizze. $a$ liegt dem Winkel $\alpha$ gegenüber, $b$ liegt an $\alpha$ an, $c$ ist die Hypotenuse.'
loesung: |
  **Ansatz:** $c$ ist die Hypotenuse. $a$ ist die Gegenkathete von $\alpha$, also gilt $\sin\alpha = \frac ac$. Umgeformt: $a = 15\cdot\sin 28° \approx 7{,}04$ cm.
  ---
  $b$ ist die Ankathete, also gilt $\cos\alpha = \frac bc$ und $b = 15\cdot\cos 28° \approx 13{,}24$ cm.
  ---
  Die beiden spitzen Winkel ergeben $90°$: $\beta = 90° - 28° = 62°$. **Probe:** $7{,}042^2 + 13{,}244^2 \approx 49{,}59 + 175{,}41 = 225 = 15^2$. Es stimmt.
```

```aufgabe
id: tr-winkel-aus-katheten
titel: Winkel aus zwei Katheten
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Die Katheten eines rechtwinkligen Dreiecks sind $a = 5$ cm und $b = 12$ cm, der rechte Winkel liegt bei $C$.
  Berechne die Hypotenuse $c$ und den Winkel $\alpha$ gegenüber von $a$ auf zwei Nachkommastellen.
teile:
  - typ: zahl
    label: '$c$'
    einheit: cm
    loesung: "sqrt(25+144)"
    fehler:
      - wert: "sqrt(144-25)"
        meldung: 'Du hast die Quadrate subtrahiert. Gesucht ist die Hypotenuse aus zwei Katheten. Dann werden die Quadrate addiert.'
  - typ: zahl
    label: '$\alpha$'
    einheit: °
    loesung: "inGrad(atan(5/12))"
    anzeige: '22{,}62'
    fehler:
      - wert: "inGrad(atan(12/5))"
        meldung: 'Das ist der Winkel $\beta$. Für $\alpha$ ist $a = 5$ die Gegenkathete und $b = 12$ die Ankathete, also $\tan\alpha = \frac{5}{12}$.'
hinweise:
  - 'Für $c$ hilft der Pythagoras. Für $\alpha$ sind beide Katheten bekannt: Welche Winkelfunktion verbindet Gegenkathete und Ankathete?'
loesung: |
  **Ansatz:** Zwei Katheten sind bekannt. Der Pythagoras liefert die Hypotenuse, der Tangens den Winkel.
  ---
  $c = \sqrt{5^2 + 12^2} = \sqrt{169} = 13$ cm.
  ---
  $\tan\alpha = \frac{a}{b} = \frac{5}{12}$, also $\alpha = \tan^{-1}\frac{5}{12} \approx 22{,}62°$. **Kontrolle:** $\sin\alpha = \frac{5}{13} \approx 0{,}3846$ und $\sin 22{,}62° \approx 0{,}3846$. Es stimmt.
```

```aufgabe
id: tr-rechtwinklig-erkennen
titel: Rechtwinklig oder nicht?
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Welche Dreiecke mit den angegebenen Seitenlängen sind rechtwinklig? Wähle alle richtigen aus.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$9,\ 40,\ 41$'
      - '$5,\ 6,\ 7$'
      - '$11,\ 60,\ 61$'
      - '$1,\ 1,\ \sqrt2$'
      - '$2,\ 3,\ 4$'
    richtig: [0, 2, 3]
    fehler:
      - wert: [0, 2]
        meldung: 'Auch $1$, $1$, $\sqrt2$ passt: $1^2 + 1^2 = 2 = (\sqrt2)^2$. Das ist das halbe Quadrat.'
      - wert: [0, 1, 2, 3]
        meldung: 'Prüfe $5, 6, 7$ noch einmal: $25 + 36 = 61$, aber $7^2 = 49$.'
      - wert: [0, 2, 3, 4]
        meldung: 'Prüfe $2, 3, 4$ noch einmal: $4 + 9 = 13$, aber $4^2 = 16$.'
hinweise:
  - 'Umkehrung des Pythagoras: Ergeben die Quadrate der beiden kürzeren Seiten zusammen das Quadrat der längsten?'
loesung: |
  **Ansatz:** Nach der Umkehrung des Pythagoras ist ein Dreieck genau dann rechtwinklig, wenn die Quadrate der beiden kürzeren Seiten zusammen das Quadrat der längsten ergeben.
  ---
  $81 + 1600 = 1681 = 41^2$ ja. $25 + 36 = 61 \ne 49$ nein. $121 + 3600 = 3721 = 61^2$ ja. $1 + 1 = 2 = (\sqrt2)^2$ ja. $4 + 9 = 13 \ne 16$ nein.
  ---
  Rechtwinklig sind also das erste, dritte und vierte Dreieck.
```

```aufgabe
id: tr-leiter
titel: Leiter an der Wand
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Eine $6$ m lange Leiter lehnt an einer senkrechten Wand. Sie bildet mit dem waagrechten Boden einen Winkel von $70°$.
  Runde auf zwei Nachkommastellen.

  a) In welcher Höhe berührt sie die Wand?

  b) Wie weit steht der Fuß der Leiter von der Wand entfernt?

  c) Aus Sicherheitsgründen darf der Winkel höchstens $75°$ betragen. Wie weit muss der Fuß dann mindestens von der Wand entfernt sein?
teile:
  - typ: zahl
    label: 'a) Höhe'
    einheit: m
    loesung: "6*sin(inRad(70))"
    anzeige: '5{,}64'
    fehler:
      - wert: "6*cos(inRad(70))"
        meldung: 'Das ist der Abstand am Boden. Die Höhe liegt dem $70°$-Winkel gegenüber, also brauchst du den Sinus.'
  - typ: zahl
    label: 'b) Abstand'
    einheit: m
    loesung: "6*cos(inRad(70))"
    anzeige: '2{,}05'
    fehler:
      - wert: "6*tan(inRad(70))"
        meldung: 'Der Tangens verbindet die beiden Katheten. Bekannt ist aber die Leiter, also die Hypotenuse.'
  - typ: zahl
    label: 'c) Mindestabstand'
    einheit: m
    loesung: "6*cos(inRad(75))"
    anzeige: '1{,}55'
hinweise:
  - 'Die Leiter ist die Hypotenuse. Die Höhe an der Wand liegt dem $70°$-Winkel gegenüber, der Abstand am Boden liegt an ihm an.'
  - 'c) Je steiler die Leiter, desto näher steht ihr Fuß an der Wand. Der steilste erlaubte Winkel liefert also den kleinsten erlaubten Abstand.'
loesung: |
  **Ansatz:** Wand, Boden und Leiter bilden ein rechtwinkliges Dreieck mit dem rechten Winkel am Fuß der Wand. Die Leiter ist die Hypotenuse mit $6$ m.
  ---
  a) Die Höhe ist die Gegenkathete des $70°$-Winkels: $h = 6\cdot\sin 70° \approx 5{,}64$ m.
  ---
  b) Der Abstand ist die Ankathete: $d = 6\cdot\cos 70° \approx 2{,}05$ m.
  ---
  c) Bei $75°$ ist $d = 6\cdot\cos 75° \approx 1{,}55$ m. Für spitze Winkel wird der Kosinus kleiner, wenn der Winkel wächst. Ein steilerer Winkel als $75°$ ergäbe also einen noch kleineren Abstand. **Antwort:** Der Fuß muss mindestens $1{,}55$ m von der Wand entfernt sein.
```

```aufgabe
id: tr-rd-rampe-gefuehrt
titel: Eine Rollstuhlrampe Schritt für Schritt
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Eine Rollstuhlrampe überwindet $0{,}45$ m Höhe. Die schräge Rampenfläche ist $5{,}4$ m lang.
  Berechne den Neigungswinkel $\alpha$ der Rampe (zwei Nachkommastellen) und ihre waagrechte Länge (zwei Nachkommastellen).
teile:
  - typ: zahl
    label: 'Neigungswinkel $\alpha$'
    einheit: °
    loesung: "inGrad(asin(0.45/5.4))"
    anzeige: '4{,}78'
    toleranz: 0.005
    fehler:
      - wert: "inGrad(atan(0.45/5.4))"
        meldung: 'Der Tangens braucht die waagrechte Länge als Ankathete. Die $5{,}4$ m sind aber die schräge Länge, also die Hypotenuse. Dazu gehört der Sinus.'
  - typ: zahl
    label: 'waagrechte Länge'
    einheit: m
    loesung: "sqrt(5.4^2 - 0.45^2)"
    anzeige: '5{,}38'
    toleranz: 0.005
    fehler:
      - wert: "5.4"
        meldung: 'Die schräge Länge ist die Hypotenuse und damit länger als die waagrechte Länge. Die beiden unterscheiden sich hier nur wenig, aber nicht gar nicht.'
hinweise:
  - 'Welche der beiden gegebenen Längen ist die Hypotenuse?'
  - 'Gegeben sind Gegenkathete und Hypotenuse. Die passende Funktion ist der Sinus. Die waagrechte Länge bekommst du mit dem Pythagoras oder mit dem Kosinus.'
loesung: |
  **Ansatz:** Höhe, waagrechte Länge und Rampenfläche bilden ein rechtwinkliges Dreieck. Die schräge Rampenfläche liegt dem rechten Winkel gegenüber und ist die Hypotenuse.
  ---
  Die Höhe $0{,}45$ m liegt dem Winkel $\alpha$ gegenüber. Also gilt $\sin\alpha = \frac{0{,}45}{5{,}4} \approx 0{,}0833$.
  ---
  $\alpha = \sin^{-1}(0{,}0833) \approx 4{,}78°$.
  ---
  Waagrechte Länge mit Pythagoras: $w = \sqrt{5{,}4^2 - 0{,}45^2} = \sqrt{29{,}16 - 0{,}2025} \approx 5{,}38$ m. **Antwort:** Die Rampe ist etwa $4{,}78°$ geneigt und reicht waagrecht $5{,}38$ m weit.
gefuehrt:
  - text: 'Welche gegebene Länge ist die Hypotenuse? Gib ihre Länge in Metern ein.'
    teil: { typ: zahl, loesung: "5.4", fehler: [ { wert: "0.45", meldung: 'Die Höhe ist eine Kathete. Die Hypotenuse liegt dem rechten Winkel gegenüber, das ist die schräge Rampenfläche.' } ] }
    erklaerung: 'Der rechte Winkel liegt zwischen Boden und Senkrechter. Ihm gegenüber liegt die schräge Rampenfläche mit $5{,}4$ m.'
  - text: 'Berechne das Verhältnis Gegenkathete durch Hypotenuse, also $\sin\alpha$, auf vier Nachkommastellen.'
    teil: { typ: zahl, loesung: "0.45/5.4", toleranz: 0.0001 }
    erklaerung: '$\sin\alpha = \frac{0{,}45}{5{,}4} \approx 0{,}0833$.'
  - text: 'Bestimme $\alpha$ mit $\sin^{-1}$ im Modus DEG.'
    teil: { typ: zahl, loesung: "inGrad(asin(0.45/5.4))", fehler: [ { wert: "asin(0.45/5.4)", meldung: 'Das ist das Ergebnis im Bogenmaß. Stell den Rechner auf DEG.' } ] }
    erklaerung: '$\alpha \approx 4{,}78°$. Eine flache Rampe, wie es sein soll.'
  - text: 'Berechne die waagrechte Länge mit dem Pythagoras.'
    teil: { typ: zahl, loesung: "sqrt(5.4^2 - 0.45^2)" }
    erklaerung: '$w = \sqrt{5{,}4^2 - 0{,}45^2} \approx 5{,}38$ m. Zur Kontrolle: $5{,}4\cdot\cos 4{,}78° \approx 5{,}38$ m.'
```

```aufgabe
id: tr-rd-fehler-finden
titel: Wo steckt der Fehler?
niveau: 2
lernziel: 0
kompetenz: begruenden
angabe: |
  In einem rechtwinkligen Dreieck ist die Hypotenuse $c = 14$ cm lang und die Kathete $a = 9$ cm liegt dem Winkel
  $\alpha$ gegenüber. Eine Mitschülerin rechnet:

  „$\tan\alpha = \frac{9}{14}$, also $\alpha = \tan^{-1}\frac{9}{14} \approx 32{,}74°$.“

  a) Welcher Fehler ist passiert?

  b) Berechne $\alpha$ richtig (zwei Nachkommastellen).
teile:
  - typ: auswahl
    label: 'a) Der Fehler'
    optionen:
      - 'Der Tangens verbindet die beiden Katheten. $14$ cm ist aber die Hypotenuse.'
      - 'Der Rechner stand im falschen Modus.'
      - 'Sie hätte $\frac{14}{9}$ statt $\frac{9}{14}$ nehmen müssen.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Im Modus RAD käme ein Wert unter $1{,}6$ heraus, nicht $32{,}74$. Der Modus stimmt. Prüfe, welche Seiten zur gewählten Funktion gehören.'
      - wert: 2
        meldung: 'Auch mit dem Kehrwert bliebe der Fehler: Der Tangens braucht Gegenkathete und Ankathete. Welche Rolle hat $c = 14$?'
  - typ: zahl
    label: 'b) $\alpha$'
    einheit: °
    loesung: "inGrad(asin(9/14))"
    anzeige: '40{,}01'
    fehler:
      - wert: "inGrad(acos(9/14))"
        meldung: 'Der Kosinus gehört zur Ankathete. $a = 9$ liegt dem Winkel aber gegenüber.'
hinweise:
  - 'Welche Rolle hat die Seite $c = 14$? Welche Seiten verbindet der Tangens?'
  - 'Gegeben sind Gegenkathete und Hypotenuse. Welche Winkelfunktion gehört zu diesem Paar?'
loesung: |
  **Ansatz:** Zuerst die Rollen der Seiten klären. $c = 14$ liegt dem rechten Winkel gegenüber und ist die Hypotenuse. $a = 9$ ist die Gegenkathete von $\alpha$.
  ---
  Der Tangens ist Gegenkathete durch **Ankathete**. Die Mitschülerin hat die Hypotenuse als Ankathete verwendet. Das ist der Fehler.
  ---
  Richtig ist der Sinus: $\sin\alpha = \frac{9}{14}$, also $\alpha = \sin^{-1}\frac{9}{14} \approx 40{,}01°$. **Plausibilität:** $\sin 30° = 0{,}5$ und $\frac{9}{14} \approx 0{,}64$ ist größer, also muss $\alpha$ über $30°$ liegen.
```

```aufgabe
id: tr-rd-gleichschenklig
titel: Ein gleichschenkliges Dreieck zerlegen
niveau: 3
lernziel: 0
kompetenz: modellieren
angabe: |
  Ein gleichschenkliges Dreieck hat die Basis $10$ cm und zwei gleich lange Schenkel von je $13$ cm. Es ist **nicht**
  rechtwinklig.

  a) Berechne die Höhe auf die Basis.

  b) Berechne die beiden Basiswinkel und den Winkel an der Spitze (zwei Nachkommastellen).

  c) Berechne den Flächeninhalt.
teile:
  - typ: zahl
    label: 'a) Höhe'
    einheit: cm
    loesung: "sqrt(13^2 - 5^2)"
    fehler:
      - wert: "sqrt(13^2 - 10^2)"
        meldung: 'Die Höhe teilt die Basis in **zwei Hälften**. Im halben Dreieck ist die waagrechte Kathete deshalb $5$ cm, nicht $10$ cm.'
  - typ: zahl
    label: 'b) Basiswinkel'
    einheit: °
    loesung: "inGrad(acos(5/13))"
    anzeige: '67{,}38'
  - typ: zahl
    label: 'b) Winkel an der Spitze'
    einheit: °
    loesung: "180 - 2*inGrad(acos(5/13))"
    anzeige: '45{,}24'
    fehler:
      - wert: "90 - inGrad(acos(5/13))"
        meldung: 'Das ist nur der halbe Winkel an der Spitze. Die Höhe halbiert ihn. Du musst also verdoppeln.'
  - typ: zahl
    label: 'c) Fläche'
    einheit: 'cm²'
    loesung: "0.5*10*12"
hinweise:
  - 'Das Dreieck selbst ist nicht rechtwinklig. Die Höhe auf die Basis zerlegt es aber in zwei gleiche rechtwinklige Dreiecke.'
  - 'Im halben Dreieck sind die Hypotenuse $13$ cm und eine Kathete die halbe Basis $5$ cm. Der Basiswinkel liegt an der halben Basis an.'
loesung: |
  **Ansatz:** Für ein nicht rechtwinkliges Dreieck gelten die Definitionen von Sinus, Kosinus und Tangens nicht direkt. Die Höhe auf die Basis zerlegt das gleichschenklige Dreieck aber in zwei gleiche rechtwinklige Dreiecke mit Hypotenuse $13$ cm und waagrechter Kathete $5$ cm.
  ---
  a) Pythagoras im halben Dreieck: $h = \sqrt{13^2 - 5^2} = \sqrt{144} = 12$ cm.
  ---
  b) Am Basiswinkel $\beta$ liegt die halbe Basis an: $\cos\beta = \frac{5}{13}$, also $\beta = \cos^{-1}\frac{5}{13} \approx 67{,}38°$. Beide Basiswinkel sind gleich groß.
  ---
  Winkel an der Spitze aus der Winkelsumme: $\gamma = 180° - 2\cdot 67{,}38° \approx 45{,}24°$.
  ---
  c) $A = \frac12\cdot\text{Basis}\cdot\text{Höhe} = \frac12\cdot 10\cdot 12 = 60\text{ cm}^2$. **Kontrolle:** $\tan\beta = \frac{12}{5} = 2{,}4$ und $\tan 67{,}38° \approx 2{,}4$. Es stimmt.
```

## Steigung, Höhenwinkel und Vermessung

```aufgabe
id: tr-st-check-tangens
titel: Was ist der Tangens?
art: check
niveau: 1
angabe: |
  In einem rechtwinkligen Dreieck ist die Gegenkathete von $\alpha$ $3$ m lang und die Ankathete $4$ m. Wie groß ist
  $\tan\alpha$? Zum Nachlesen: [5.1 Das rechtwinklige Dreieck](/lernen/mathe3/trigonometrie/das-rechtwinklige-dreieck).
teile:
  - typ: zahl
    loesung: "3/4"
    fehler:
      - wert: "4/3"
        meldung: 'Das ist Ankathete durch Gegenkathete. Der Tangens ist umgekehrt: Gegenkathete durch Ankathete.'
      - wert: "3/5"
        meldung: 'Das ist der Sinus, also Gegenkathete durch Hypotenuse ($5$ m). Der Tangens verbindet die beiden Katheten.'
loesung: |
  Der Tangens ist Gegenkathete durch Ankathete.
  ---
  $\tan\alpha = \frac{3}{4} = 0{,}75$.
```

**Worum geht es?** Im Alltag begegnen dir Winkel selten direkt. Verkehrsschilder nennen Steigungen in Prozent,
Landvermesser messen Winkel von einem Standpunkt aus und berechnen daraus Höhen. In dieser Lektion übersetzt du
solche Angaben in rechtwinklige Dreiecke.

### Steigung in Prozent

Ein Schild „$12\,\%$ Steigung“ bedeutet: Auf $100$ m **waagrechter** Strecke steigt die Straße um $12$ m. Die
Steigung ist also ein Verhältnis:
$$k = \frac{\text{Höhenunterschied}}{\text{waagrechte Strecke}} = \frac{\Delta h}{\Delta x}.$$
Dabei ist $\Delta h$ (lies „Delta h“) der Höhenunterschied und $\Delta x$ die waagrechte Strecke. Im
Steigungsdreieck ist $\Delta h$ die Gegenkathete und $\Delta x$ die Ankathete des Steigungswinkels $\alpha$. Also ist
die Steigung genau der Tangens: $k = \tan\alpha$. Es ist dieselbe Steigung $k$ wie bei linearen Funktionen in
[Kapitel 4, Lineare Funktionen](/lernen/mathe3/funktionen/lineare-funktionen).

:::satz[Steigung und Steigungswinkel]
Eine Steigung von $p\,\%$ gehört zum Steigungswinkel $\alpha$ mit
$$\tan\alpha = \frac{p}{100}, \qquad\text{also}\qquad \alpha = \tan^{-1}\!\left(\frac{p}{100}\right).$$
Umgekehrt ist $p = 100\cdot\tan\alpha$.
:::

**Beispiel:** $50\,\%$ Steigung gehören zu $\alpha = \tan^{-1}(0{,}5) \approx 26{,}57°$. **Nichtbeispiel:** $50\,\%$
Steigung sind **nicht** $45°$, also nicht die Hälfte von $90°$. Prozent und Winkel sind nicht proportional.

:::achtung[Prozent sind nicht proportional zum Winkel]
Viele rechnen so: „$100\,\%$ ist ganz steil, also $90°$. Dann sind $50\,\%$ die Hälfte, also $45°$.“ Beides ist falsch.

- $100\,\%$ bedeutet: Höhe gleich waagrechte Strecke. Das ist $\tan^{-1}(1) = 45°$.
- $50\,\%$ sind $\tan^{-1}(0{,}5) \approx 26{,}57°$, nicht $22{,}5°$.
- $200\,\%$ sind $\tan^{-1}(2) \approx 63{,}43°$. Eine senkrechte Wand hätte „unendlich viel Prozent“.

Nur bei kleinen Steigungen liegen Prozent und Grad zufällig ähnlich. Rechne deshalb immer mit dem Tangens.
:::

Die zweite Falle betrifft die Länge. Ein Kilometerstein misst die Strecke **entlang der Straße**. Diese Strecke ist
die schräge Seite des Steigungsdreiecks, also die **Hypotenuse**. Den Höhenunterschied auf $s$ Metern Straße
berechnest du deshalb mit dem Sinus: $\Delta h = s\cdot\sin\alpha$.

:::beispiel[Eine Bergstraße mit 9 % Steigung]
Eine Straße steigt mit $9\,\%$. Zwei Parkplätze liegen entlang der Straße $1500$ m auseinander. Wie groß sind der
Steigungswinkel und der Höhenunterschied der Parkplätze?

1. **Steigungswinkel:** $9\,\%$ bedeuten $\tan\alpha = 0{,}09$. Also ist $\alpha = \tan^{-1}(0{,}09) \approx 5{,}143°$.
2. **Rolle der $1500$ m:** Sie sind entlang der Straße gemessen, also die Hypotenuse. Der Höhenunterschied ist die
   Gegenkathete.
3. **Höhenunterschied:** $\sin\alpha = \frac{\Delta h}{1500}$, also
   $\Delta h = 1500\cdot\sin 5{,}143° \approx 1500\cdot 0{,}08964 \approx 134{,}46$ m.
4. **Kontrolle:** Die waagrechte Strecke ist $1500\cdot\cos 5{,}143° \approx 1493{,}96$ m. Dann ist
   $\frac{134{,}46}{1493{,}96} \approx 0{,}09$. Es stimmt.

**Antwort:** Die Straße steigt unter etwa $5{,}14°$. Die Parkplätze liegen etwa $134{,}46$ m übereinander.
:::

```plot
x: [-100, 1700]
y: [-60, 260]
achsen: { x: "waagrecht in m", y: "Höhe in m" }
strecken:
  - { von: [0, 0], nach: [1494, 134.5], farbe: 0 }
  - { von: [0, 0], nach: [1494, 0], farbe: 1, gestrichelt: true }
  - { von: [1494, 0], nach: [1494, 134.5], farbe: 2 }
punkte:
  - { x: 700, y: 110, label: "Straße s = 1500 m (Hypotenuse)" }
  - { x: 700, y: -30, label: "waagrecht ≈ 1494 m" }
  - { x: 1494, y: 190, label: "Δh ≈ 134,5 m" }
  - { x: 260, y: 8, label: "α ≈ 5,1°" }
beschriftung: Steigungsdreieck einer Straße mit 9 % Steigung. Die Länge entlang der Straße ist die Hypotenuse, deshalb ist der Höhenunterschied s·sin α. Die Höhe ist stark überhöht gezeichnet, damit man das Dreieck erkennt.
```

:::achtung[Straßenlänge als waagrechte Strecke behandelt]
Bei der Bergstraße rechnet jemand: „$9\,\%$ von $1500$ m sind $1500\cdot 0{,}09 = 135$ m.“ Das wäre der
Höhenunterschied auf $1500$ m **waagrechter** Strecke. Die $1500$ m liegen aber entlang der schrägen Straße.

Richtig ist $1500\cdot\sin 5{,}143° \approx 134{,}46$ m. Bei so kleinen Winkeln liegen beide Werte nahe
beieinander. Bewertet wird in der Prüfung aber der **Ansatz**. Bei steilen Straßen wird der Unterschied groß.
:::

```aufgabe
id: tr-st-check-seite
titel: Welche Seite ist die Straße?
art: check
niveau: 1
angabe: |
  Auf einer Straße fährst du laut Tacho $800$ m bergauf. Welche Seite des Steigungsdreiecks ist diese Strecke?
teile:
  - typ: auswahl
    optionen: ['die Hypotenuse', 'die waagrechte Ankathete', 'die senkrechte Gegenkathete']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Der Tacho misst entlang der schrägen Straße, nicht entlang einer gedachten waagrechten Linie darunter.'
      - wert: 2
        meldung: 'Die senkrechte Seite ist der Höhenunterschied. Du fährst aber schräg, nicht senkrecht nach oben.'
loesung: |
  Der Tacho misst die Strecke, die das Auto auf der Straße zurücklegt. Die Straße ist die schräge Seite des Steigungsdreiecks.
  ---
  Die schräge Seite liegt dem rechten Winkel gegenüber, ist also die Hypotenuse.
```

### Höhenwinkel und Tiefenwinkel

Der **Höhenwinkel** ist der Winkel zwischen der Waagrechten und deiner Blickrichtung, wenn du **nach oben**
schaust, etwa zu einer Turmspitze. Der **Tiefenwinkel** ist der Winkel zwischen der Waagrechten und der
Blickrichtung **nach unten**, etwa von einem Turm zu einem Boot. Beide werden **immer von der Waagrechten aus**
gemessen. Ein Winkel, den du von der Senkrechten aus misst, ist **kein** Höhenwinkel.

:::beispiel[Die Höhe eines Turms]
Du stehst $40$ m vom Fuß eines Turms entfernt und siehst seine Spitze unter einem Höhenwinkel von $38°$. Deine
Augen sind $1{,}6$ m über dem Boden. Wie hoch ist der Turm?

1. **Skizze:** Das rechtwinklige Dreieck liegt **über** deiner Augenhöhe. Die waagrechte Linie von deinem Auge
   zum Turm ist $40$ m lang. Sie liegt am Winkel an, ist also die Ankathete.
2. Die gesuchte Höhe $x$ der Spitze über Augenhöhe liegt dem Winkel gegenüber. Gegenkathete und Ankathete
   verbindet der Tangens: $\tan 38° = \frac{x}{40}$.
3. $x = 40\cdot\tan 38° \approx 40\cdot 0{,}7813 \approx 31{,}25$ m.
4. Die Augenhöhe kommt dazu: $31{,}25 + 1{,}6 = 32{,}85$ m.

**Antwort:** Der Turm ist etwa $32{,}85$ m hoch.
:::

:::beispiel[Ein Boot vom Leuchtturm aus]
Von der Spitze eines $45$ m hohen Leuchtturms siehst du ein Boot unter einem Tiefenwinkel von $6°$. Wie weit ist das
Boot waagrecht vom Turm entfernt?

1. Der Tiefenwinkel liegt oben, zwischen der Waagrechten in Turmhöhe und der Blicklinie zum Boot.
2. Die Waagrechte oben ist parallel zur Wasseroberfläche. Deshalb tritt derselbe Winkel unten beim Boot auf, als
   Winkel zwischen Wasser und Blicklinie. Solche Winkel an Parallelen heißen **Wechselwinkel**.
3. Im Dreieck aus Turm, Wasserlinie und Blicklinie liegt der Turm dem $6°$-Winkel beim Boot gegenüber. Die
   Entfernung $e$ liegt an ihm an. Also gilt $\tan 6° = \frac{45}{e}$.
4. Wir multiplizieren mit $e$ und teilen durch $\tan 6°$: $e = \frac{45}{\tan 6°} \approx \frac{45}{0{,}1051} \approx 428{,}15$ m.

**Antwort:** Das Boot ist etwa $428$ m vom Turm entfernt. Kleiner Tiefenwinkel heißt große Entfernung, das passt.
:::

:::achtung[Den Winkel von der Senkrechten aus genommen]
Beim Leuchtturm misst jemand den Winkel zwischen Turm und Blicklinie, also $90° - 6° = 84°$. Diesen Winkel setzt er
dann so ein, als läge er unten beim Boot: $e = \frac{45}{\tan 84°} \approx 4{,}73$ m. Das Boot läge dann fast am Turmfuß. Das passt nicht zu einem
so flachen Blick.

Richtig ist der Ansatz mit dem Tiefenwinkel $6°$ beim Boot: $e = \frac{45}{\tan 6°} \approx 428{,}15$ m. Zeichne den
Winkel immer zwischen **Waagrechter** und Blicklinie ein.
:::

### Höhe aus zwei Standpunkten

Oft kommst du nicht bis zum Fußpunkt unter einem Berggipfel. Dann misst du den Höhenwinkel von zwei Punkten aus,
die mit dem Fußpunkt auf einer Linie liegen. Ihren Abstand $d$ misst du direkt.

:::beispiel[Ein Berggipfel aus zwei Messungen]
Von einem Punkt $P$ siehst du einen Gipfel unter $25°$. Du gehst $200$ m waagrecht auf den Berg zu und siehst ihn
vom Punkt $Q$ aus unter $35°$. Wie hoch liegt der Gipfel über der Ebene der beiden Punkte?

1. **Unbekannte:** $h$ ist die Höhe, $x$ der waagrechte Abstand von $Q$ zum Fußpunkt. Von $P$ aus ist der Abstand
   dann $x + 200$.
2. **Zwei rechtwinklige Dreiecke** mit derselben Höhe $h$: $\tan 35° = \frac{h}{x}$ und $\tan 25° = \frac{h}{x + 200}$.
   Also gilt $h = x\cdot\tan 35°$ und $h = (x + 200)\cdot\tan 25°$.
3. **Gleichsetzen:** $x\cdot\tan 35° = x\cdot\tan 25° + 200\cdot\tan 25°$. Wir bringen alle $x$ auf eine Seite und
   heben $x$ heraus: $x\,(\tan 35° - \tan 25°) = 200\cdot\tan 25°$.
4. **Auflösen:** $x = \frac{200\cdot\tan 25°}{\tan 35° - \tan 25°} \approx \frac{93{,}26}{0{,}2339} \approx 398{,}7$ m.
5. **Höhe:** $h = x\cdot\tan 35° \approx 398{,}7\cdot 0{,}7002 \approx 279{,}2$ m. **Kontrolle:**
   $(398{,}7 + 200)\cdot\tan 25° \approx 279{,}2$ m.

**Antwort:** Der Gipfel liegt etwa $279$ m über der Ebene der Messpunkte.
:::

```plot
x: [-40, 660]
y: [-40, 330]
gleich: true
strecken:
  - { von: [0, 0], nach: [598.7, 0] }
  - { von: [598.7, 0], nach: [598.7, 279.2], gestrichelt: true }
  - { von: [0, 0], nach: [598.7, 279.2], farbe: 1 }
  - { von: [200, 0], nach: [598.7, 279.2], farbe: 2 }
punkte:
  - { x: 0, y: 0, label: "P (25°)" }
  - { x: 200, y: 0, label: "Q (35°)" }
  - { x: 598.7, y: 279.2, label: "Gipfel" }
  - { x: 100, y: -20, label: "200 m" }
  - { x: 400, y: -20, label: "x" }
  - { x: 620, y: 140, label: "h" }
beschriftung: Höhe aus zwei Standpunkten. Von P und vom 200 m näheren Punkt Q sieht man denselben Gipfel unter 25° und 35°. Beide rechtwinkligen Dreiecke haben dieselbe Höhe h.
```

:::merke[Rezept: Sachaufgabe mit rechtwinkligen Dreiecken]
1. Skizze mit **Waagrechter**, rechtem Winkel und allen Messwerten.
2. Winkel immer von der Waagrechten aus eintragen. Bei Steigungen in Prozent zuerst $\tan\alpha = \frac{p}{100}$.
3. Für jede Strecke klären: schräg (Hypotenuse), waagrecht oder senkrecht?
4. Passende Winkelfunktion wählen und auflösen. Bei zwei Standpunkten zwei Gleichungen mit derselben Höhe
   aufstellen und gleichsetzen.
5. Augenhöhe oder Sockel am Ende addieren. Antwortsatz mit Einheit.
:::

```reflexion
frage: Warum gehört zur Steigung in Prozent der Tangens und nicht der Sinus, obwohl man doch entlang der Straße fährt?
antwort: |
  Die Prozentangabe ist so festgelegt: Höhenunterschied pro $100$ m **waagrechter** Strecke. Waagrechte Strecke und
  Höhenunterschied sind die beiden Katheten des Steigungsdreiecks. Das Verhältnis zweier Katheten ist der Tangens.
  Den Sinus brauchst du erst, wenn eine Strecke **entlang der Straße** gegeben ist, also die Hypotenuse. Darum
  kommen in einer Straßenaufgabe oft beide vor: der Tangens für den Winkel, der Sinus für den Höhenunterschied.
```

```aufgabe
id: tr-steigung
titel: Steigung und Steigungswinkel
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  a) Eine Passstraße hat $12\,\%$ Steigung. Unter welchem Winkel steigt sie an? Runde auf zwei Nachkommastellen.

  b) Eine Rampe steigt unter $30°$ an. Wie viel Prozent Steigung sind das? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    label: 'a) Winkel'
    einheit: °
    loesung: "inGrad(atan(0.12))"
    anzeige: '6{,}84'
    fehler:
      - wert: "0.12*90"
        meldung: 'Du hast die Prozent auf $90°$ umgerechnet, als wären Prozent und Winkel proportional. Die Steigung ist aber der Tangens des Winkels.'
      - wert: "inGrad(asin(0.12))"
        meldung: 'Die Prozentangabe ist Höhe durch **waagrechte** Strecke. Das ist der Tangens, nicht der Sinus.'
  - typ: zahl
    label: 'b) Steigung'
    einheit: '%'
    loesung: "100*tan(inRad(30))"
    anzeige: '57{,}7'
    fehler:
      - wert: "100/3"
        meldung: '$30°$ sind ein Drittel von $90°$, aber Prozent sind nicht proportional zum Winkel. Rechne $100\cdot\tan 30°$.'
hinweise:
  - 'Die Steigung als Dezimalzahl ist der Tangens des Steigungswinkels: $\tan\alpha = \frac{p}{100}$.'
loesung: |
  **Ansatz:** Steigung $= \tan\alpha$, wobei die Steigung als Dezimalzahl geschrieben wird ($12\,\% = 0{,}12$).
  ---
  a) $\tan\alpha = 0{,}12$, also $\alpha = \tan^{-1}(0{,}12) \approx 6{,}84°$.
  ---
  b) $\tan 30° \approx 0{,}5774$, also etwa $57{,}7\,\%$ Steigung. **Vergleich:** $30°$ sind ein Drittel von $90°$, aber die Steigung ist nicht $33\,\%$. Prozent und Winkel sind nicht proportional.
```

```aufgabe
id: tr-st-hoehe-strasse
titel: Höhenunterschied auf einer steilen Straße
niveau: 1
lernziel: 1
kompetenz: anwenden
angabe: |
  Eine Straße hat $15\,\%$ Steigung. Ein Radfahrer fährt auf ihr laut Tacho $600$ m bergauf.
  Wie viele Höhenmeter gewinnt er? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    label: 'Höhenunterschied'
    einheit: m
    loesung: "600*sin(atan(0.15))"
    anzeige: '89{,}00'
    toleranz: 0.05
    fehler:
      - wert: "600*0.15"
        meldung: '$15\,\%$ von $600$ m wären richtig, wenn die $600$ m waagrecht gemessen wären. Der Tacho misst aber entlang der schrägen Straße, also die Hypotenuse.'
hinweise:
  - 'Bestimme zuerst den Steigungswinkel aus $\tan\alpha = 0{,}15$. Die $600$ m sind die Hypotenuse.'
loesung: |
  **Ansatz:** Der Tacho misst entlang der Straße, das ist die Hypotenuse. Der Höhenunterschied ist die Gegenkathete. Wir brauchen also zuerst den Winkel und dann den Sinus.
  ---
  $\tan\alpha = 0{,}15$, also $\alpha = \tan^{-1}(0{,}15) \approx 8{,}531°$.
  ---
  $\Delta h = 600\cdot\sin 8{,}531° \approx 600\cdot 0{,}1483 \approx 89{,}00$ m. **Vergleich:** Der falsche Ansatz $600\cdot 0{,}15 = 90$ m liegt einen ganzen Meter daneben.
```

```aufgabe
id: tr-hoehenwinkel
titel: Höhe eines Gebäudes
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Eine Person steht $65$ m vom Fuß eines Gebäudes entfernt und sieht dessen Dachkante unter einem Höhenwinkel von $27°$.
  Ihre Augenhöhe ist $1{,}75$ m. Wie hoch ist das Gebäude? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    label: 'Gebäudehöhe'
    einheit: m
    loesung: "65*tan(inRad(27)) + 1.75"
    anzeige: '34{,}87'
    fehler:
      - wert: "65*tan(inRad(27))"
        meldung: 'Das ist nur die Höhe über deinen Augen. Das Dreieck beginnt in Augenhöhe, also fehlen noch $1{,}75$ m.'
      - wert: "65*sin(inRad(27)) + 1.75"
        meldung: 'Die $65$ m sind waagrecht gemessen, also die Ankathete. Gegenkathete und Ankathete verbindet der Tangens.'
hinweise:
  - 'Das rechtwinklige Dreieck liegt über deiner Augenhöhe. Die waagrechte Linie zum Gebäude ist die Ankathete.'
  - 'Berechne die Höhe über Augenhöhe mit dem Tangens und addiere am Schluss die Augenhöhe.'
loesung: |
  **Ansatz:** Rechtwinkliges Dreieck in Augenhöhe: Ankathete $65$ m (waagrecht), Gegenkathete $x$ = Höhe der Dachkante über den Augen.
  ---
  $\tan 27° = \frac{x}{65}$, also $x = 65\cdot\tan 27° \approx 65\cdot 0{,}5095 \approx 33{,}12$ m.
  ---
  Gebäudehöhe: $33{,}12 + 1{,}75 \approx 34{,}87$ m. **Plausibilität:** $27°$ ist flacher als $45°$, also ist die Höhe über den Augen kleiner als die Entfernung $65$ m.
```

```aufgabe
id: tr-st-tiefenwinkel
titel: Ein Boot unter dem Felsen
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Von einem Aussichtspunkt $80$ m über dem Meer siehst du ein Boot unter einem Tiefenwinkel von $12°$.
  Wie weit ist das Boot waagrecht vom Fuß des Felsens entfernt? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    label: 'Entfernung'
    einheit: m
    loesung: "80/tan(inRad(12))"
    anzeige: '376{,}37'
    fehler:
      - wert: "80*tan(inRad(12))"
        meldung: 'Du hast mit $\tan 12°$ multipliziert statt dividiert. Prüfe mit einer Skizze: Die $80$ m liegen dem $12°$-Winkel beim Boot gegenüber.'
      - wert: "80/sin(inRad(12))"
        meldung: 'Das ist die Länge der schrägen Blicklinie. Gefragt ist die waagrechte Entfernung, also die Ankathete.'
hinweise:
  - 'Der Tiefenwinkel tritt als Wechselwinkel unten beim Boot wieder auf.'
  - 'Beim Boot liegt die Höhe $80$ m dem Winkel gegenüber, die Entfernung liegt an ihm an. Stelle $\tan 12° = \frac{80}{e}$ nach $e$ um.'
loesung: |
  **Ansatz:** Die Waagrechte am Aussichtspunkt ist parallel zur Wasserfläche. Der Tiefenwinkel $12°$ tritt daher unten beim Boot als Winkel zwischen Wasser und Blicklinie auf.
  ---
  Im Dreieck beim Boot ist die Höhe $80$ m die Gegenkathete, die Entfernung $e$ die Ankathete: $\tan 12° = \frac{80}{e}$.
  ---
  Umformen: $e = \frac{80}{\tan 12°} \approx \frac{80}{0{,}2126} \approx 376{,}37$ m. **Plausibilität:** Ein flacher Blick nach unten bedeutet ein weit entferntes Boot.
```

```aufgabe
id: tr-st-seilbahn-gefuehrt
titel: Eine Seilbahn Schritt für Schritt
niveau: 2
lernziel: 1
kompetenz: modellieren
angabe: |
  Eine Seilbahn verbindet Tal- und Bergstation. Die Bergstation liegt $380$ m höher und waagrecht gemessen $1{,}2$ km
  entfernt. Das Seil wird als gerade Strecke angenommen.

  Berechne die mittlere Steigung in Prozent, den Steigungswinkel und die Seillänge (jeweils zwei Nachkommastellen).
teile:
  - typ: zahl
    label: 'Steigung'
    einheit: '%'
    loesung: "100*380/1200"
    anzeige: '31{,}67'
    fehler:
      - wert: "100*380/1.2"
        meldung: 'Die Einheiten passen nicht zusammen. Rechne $1{,}2$ km in $1200$ m um, bevor du teilst.'
  - typ: zahl
    label: 'Steigungswinkel'
    einheit: °
    loesung: "inGrad(atan(380/1200))"
    anzeige: '17{,}57'
  - typ: zahl
    label: 'Seillänge'
    einheit: m
    loesung: "sqrt(1200^2 + 380^2)"
    anzeige: '1258{,}73'
hinweise:
  - 'Waagrechte Strecke und Höhenunterschied sind die beiden Katheten. Rechne beide in Metern.'
  - 'Die Steigung ist Höhenunterschied durch waagrechte Strecke. Der Winkel folgt mit $\tan^{-1}$, die Seillänge mit Pythagoras.'
loesung: |
  **Ansatz:** Waagrechte Strecke $1200$ m und Höhenunterschied $380$ m sind die Katheten. Das Seil ist die Hypotenuse.
  ---
  Steigung: $\frac{380}{1200} \approx 0{,}3167$, also $31{,}67\,\%$.
  ---
  Winkel: $\alpha = \tan^{-1}(0{,}3167) \approx 17{,}57°$.
  ---
  Seillänge: $s = \sqrt{1200^2 + 380^2} = \sqrt{1\,584\,400} \approx 1258{,}73$ m. **Kontrolle:** $1258{,}73\cdot\sin 17{,}57° \approx 380$ m.
gefuehrt:
  - text: 'Rechne die waagrechte Strecke in Meter um.'
    teil: { typ: zahl, einheit: m, loesung: "1200" }
    erklaerung: '$1{,}2$ km sind $1200$ m. Beide Katheten müssen in derselben Einheit stehen.'
  - text: 'Wie viel Prozent Steigung hat das Seil im Mittel?'
    teil: { typ: zahl, einheit: '%', loesung: "100*380/1200", fehler: [ { wert: "100*1200/380", meldung: 'Umgekehrt: Höhenunterschied durch waagrechte Strecke.' } ] }
    erklaerung: '$\frac{380}{1200} \approx 0{,}3167$, das sind $31{,}67\,\%$.'
  - text: 'Bestimme den Steigungswinkel.'
    teil: { typ: zahl, einheit: °, loesung: "inGrad(atan(380/1200))", fehler: [ { wert: "0.3167*90", meldung: 'Prozent und Winkel sind nicht proportional. Verwende $\tan^{-1}$.' } ] }
    erklaerung: '$\alpha = \tan^{-1}(0{,}3167) \approx 17{,}57°$.'
  - text: 'Berechne die Seillänge.'
    teil: { typ: zahl, einheit: m, loesung: "sqrt(1200^2 + 380^2)" }
    erklaerung: 'Das Seil ist die Hypotenuse: $\sqrt{1200^2 + 380^2} \approx 1258{,}73$ m.'
```

```aufgabe
id: tr-st-richtig-falsch
titel: Aussagen über Steigungen beurteilen
niveau: 2
lernziel: 1
kompetenz: begruenden
angabe: |
  Beurteile jede Aussage. Begründe für dich, bevor du prüfst.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: 'Eine Straße mit $100\,\%$ Steigung ist senkrecht.'
        richtig: false
        erklaerung: '$100\,\%$ heißt Höhe gleich waagrechte Strecke, also $\tan\alpha = 1$ und $\alpha = 45°$.'
      - text: 'Verdoppelt man die Prozentangabe, verdoppelt sich der Steigungswinkel nicht genau.'
        richtig: true
        erklaerung: 'Der Winkel ist $\tan^{-1}$ der Steigung, und $\tan^{-1}$ ist keine Gerade durch den Ursprung. Bei kleinen Steigungen ist die Abweichung aber gering.'
      - text: 'Auf einer Straße mit $10\,\%$ Steigung gewinnt man auf $1$ km Straße genau $100$ Höhenmeter.'
        richtig: false
        erklaerung: '$100$ m wären es auf $1$ km **waagrechter** Strecke. Entlang der Straße sind es $1000\cdot\sin(\tan^{-1} 0{,}1) \approx 99{,}5$ m.'
      - text: 'Ein Höhenwinkel wird von der Waagrechten aus gemessen.'
        richtig: true
        erklaerung: 'Höhen- und Tiefenwinkel misst man immer zwischen der Waagrechten und der Blicklinie.'
    fehler:
      - wert: [r, r, r, r]
        meldung: 'Prüfe die erste und die dritte Aussage noch einmal. Welcher Winkel gehört zu $\tan\alpha = 1$? Und welche Strecke meint die Prozentangabe?'
hinweise:
  - 'Übersetze jede Prozentangabe in $\tan\alpha = \frac{p}{100}$.'
  - 'Achte darauf, ob eine Strecke waagrecht oder entlang der Straße gemessen ist.'
loesung: |
  **Ansatz:** Jede Aussage mit der Definition $\tan\alpha = \frac{p}{100}$ prüfen und bei Strecken klären, ob sie waagrecht oder schräg sind.
  ---
  Aussage 1 ist falsch ($45°$). Aussage 2 ist richtig, weil $\tan^{-1}$ nicht proportional ist.
  ---
  Aussage 3 ist falsch, es sind etwa $99{,}5$ m. Aussage 4 ist richtig.
```

```aufgabe
id: tr-zwei-standpunkte
titel: Höhe eines Felsturms aus zwei Messungen
niveau: 3
lernziel: 1
kompetenz: modellieren
angabe: |
  Von einem Punkt $P$ aus erscheint die Spitze eines Felsturms unter dem Höhenwinkel $18°$. Geht man $150$ m
  waagrecht auf den Felsturm zu, bis zum Punkt $Q$, sieht man die Spitze unter $29°$. Runde auf zwei Nachkommastellen.

  a) Wie hoch liegt die Spitze über der Ebene von $P$ und $Q$?

  b) Wie weit ist $Q$ waagrecht vom Fußpunkt unter der Spitze entfernt?
teile:
  - typ: zahl
    label: 'a) Höhe $h$'
    einheit: m
    loesung: "150/(1/tan(inRad(18)) - 1/tan(inRad(29)))"
    anzeige: '117{,}77'
    fehler:
      - wert: "150*tan(inRad(29))"
        meldung: 'Du hast die $150$ m als Abstand von $Q$ zum Fußpunkt verwendet. Die $150$ m liegen aber zwischen $P$ und $Q$. Der Abstand von $Q$ zum Fußpunkt ist unbekannt.'
  - typ: zahl
    label: 'b) Abstand $x$'
    einheit: m
    loesung: "150*tan(inRad(18))/(tan(inRad(29)) - tan(inRad(18)))"
    anzeige: '212{,}47'
hinweise:
  - 'Führe zwei Unbekannte ein: die Höhe $h$ und den Abstand $x$ von $Q$ zum Fußpunkt. Von $P$ aus ist der Abstand $x + 150$.'
  - 'Stelle für beide Punkte eine Tangens-Gleichung auf, löse beide nach $h$ auf und setze gleich.'
loesung: |
  **Ansatz:** Zwei rechtwinklige Dreiecke mit derselben Höhe $h$. Von $Q$ aus: $h = x\cdot\tan 29°$. Von $P$ aus: $h = (x + 150)\cdot\tan 18°$.
  ---
  Gleichsetzen: $x\cdot\tan 29° = x\cdot\tan 18° + 150\cdot\tan 18°$. Alle $x$ nach links und herausheben: $x\,(\tan 29° - \tan 18°) = 150\cdot\tan 18°$.
  ---
  $x = \frac{150\cdot\tan 18°}{\tan 29° - \tan 18°} \approx \frac{48{,}74}{0{,}2294} \approx 212{,}47$ m.
  ---
  $h = x\cdot\tan 29° \approx 212{,}47\cdot 0{,}5543 \approx 117{,}77$ m. **Kontrolle:** $(212{,}47 + 150)\cdot\tan 18° \approx 362{,}47\cdot 0{,}3249 \approx 117{,}77$ m. Es stimmt.
```

## Trigonometrie im Raum

```aufgabe
id: tr-raum-check-diagonale
titel: Die Diagonale eines Rechtecks
art: check
niveau: 1
angabe: |
  Ein Rechteck ist $9$ cm lang und $12$ cm breit. Wie lang ist seine Diagonale? Zum Nachlesen:
  [5.1 Das rechtwinklige Dreieck](/lernen/mathe3/trigonometrie/das-rechtwinklige-dreieck).
teile:
  - typ: zahl
    einheit: cm
    loesung: "sqrt(9^2 + 12^2)"
    fehler:
      - wert: "9 + 12"
        meldung: 'Die Diagonale ist kürzer als der Weg außen herum. Sie ist die Hypotenuse eines rechtwinkligen Dreiecks, also gilt der Pythagoras.'
loesung: |
  Die Diagonale teilt das Rechteck in zwei rechtwinklige Dreiecke mit den Katheten $9$ cm und $12$ cm.
  ---
  Pythagoras: $d = \sqrt{81 + 144} = \sqrt{225} = 15$ cm.
```

**Worum geht es?** Auch in Körpern wie Quader, Pyramide oder Kegel stecken rechtwinklige Dreiecke. Sie liegen nur
schräg im Raum und sind auf den ersten Blick schwer zu sehen. Die ganze Kunst besteht darin, das passende Dreieck zu
finden und es eben herauszuzeichnen. Danach rechnest du wie in
[5.1 Das rechtwinklige Dreieck](/lernen/mathe3/trigonometrie/das-rechtwinklige-dreieck).

### Der Neigungswinkel

Wie steil steht eine Strecke gegen eine Ebene, etwa ein Dachbalken gegen den Dachboden? Dafür gibt es den
Neigungswinkel.

:::definition[Neigungswinkel einer Strecke gegen eine Ebene]
Fälle vom oberen Ende der Strecke das Lot auf die Ebene. Das ist die senkrechte Linie nach unten. Verbinde den
Fußpunkt des Lots mit dem unteren Ende der Strecke. Diese Verbindung heißt **Projektion** der Strecke, sie ist ihr
„Schatten“ bei Licht von oben. Der **Neigungswinkel** ist der Winkel zwischen der Strecke und ihrer Projektion.
:::

Strecke, Projektion und Lot bilden immer ein rechtwinkliges Dreieck mit dem rechten Winkel am Fußpunkt des Lots. Das
ist das Dreieck, das du suchst.

**Beispiel:** Bei einem Fahnenmast, der schräg im Boden steckt, ist der Neigungswinkel der Winkel zwischen dem Mast
und seinem Schatten bei Licht, das genau senkrecht von oben kommt. **Nichtbeispiel:** Der Winkel zwischen dem Mast und einem
beliebigen Weg auf dem Boden ist **kein** Neigungswinkel. Er hängt davon ab, in welche Richtung der Weg läuft.

### Diagonalen und Winkel im Quader

Ein Quader hat die Kanten $a$ (Länge), $b$ (Breite) und $c$ (Höhe). Die Diagonale der Grundfläche heißt
**Flächendiagonale** $d_G$. Die Strecke von einer unteren Ecke zur gegenüberliegenden oberen Ecke heißt
**Raumdiagonale** $d$. Zweimal Pythagoras liefert beide:
$$d_G = \sqrt{a^2 + b^2}, \qquad d = \sqrt{d_G^2 + c^2} = \sqrt{a^2 + b^2 + c^2}.$$
Dabei ist $d_G$ die Projektion der Raumdiagonale auf die Grundfläche. Die Höhe $c$ ist das Lot.

```plot
x: [-0.5, 7.5]
y: [-0.6, 4.5]
gleich: true
strecken:
  - { von: [0, 0], nach: [6, 0] }
  - { von: [6, 0], nach: [6, 3] }
  - { von: [6, 3], nach: [0, 3] }
  - { von: [0, 3], nach: [0, 0] }
  - { von: [6, 0], nach: [6.707, 0.707] }
  - { von: [6.707, 0.707], nach: [6.707, 3.707] }
  - { von: [6, 3], nach: [6.707, 3.707] }
  - { von: [0, 3], nach: [0.707, 3.707] }
  - { von: [0.707, 3.707], nach: [6.707, 3.707] }
  - { von: [0, 0], nach: [0.707, 0.707], gestrichelt: true }
  - { von: [0.707, 0.707], nach: [6.707, 0.707], gestrichelt: true }
  - { von: [0.707, 0.707], nach: [0.707, 3.707], gestrichelt: true }
  - { von: [0, 0], nach: [6.707, 0.707], farbe: 1, gestrichelt: true }
  - { von: [0, 0], nach: [6.707, 3.707], farbe: 2 }
  - { von: [6.707, 0.707], nach: [6.707, 3.707], farbe: 3 }
punkte:
  - { x: 0, y: 0, label: "A" }
  - { x: 6.707, y: 0.707, label: "C" }
  - { x: 6.707, y: 3.707, label: "G" }
  - { x: 3.2, y: 0.05, label: "d_G" }
  - { x: 3.0, y: 2.1, label: "d" }
  - { x: 0.9, y: 0.25, label: "φ" }
beschriftung: Quader im Schrägbild mit Länge 6, Breite 2 und Höhe 3. Die Raumdiagonale AG (grün), ihre Projektion AC auf die Grundfläche (orange) und die senkrechte Kante CG (violett) bilden ein rechtwinkliges Dreieck mit dem rechten Winkel bei C. Der Neigungswinkel φ liegt bei A.
```

:::beispiel[Neigungswinkel einer Raumdiagonale]
Ein Quader hat die Länge $a = 6$ cm, die Breite $b = 2$ cm und die Höhe $c = 3$ cm. Unter welchem Winkel $\varphi$
(lies „phi“) ist die Raumdiagonale gegen die Grundfläche geneigt?

1. **Dreieck finden:** Raumdiagonale $AG$, ihre Projektion $AC$ auf die Grundfläche und die senkrechte Kante $CG$.
   Der rechte Winkel liegt bei $C$.
2. **Projektion:** Sie ist die Flächendiagonale der Grundfläche: $d_G = \sqrt{6^2 + 2^2} = \sqrt{40} \approx 6{,}325$ cm.
3. **Raumdiagonale:** $d = \sqrt{40 + 3^2} = \sqrt{49} = 7$ cm.
4. **Winkel:** Die Höhe $3$ cm liegt $\varphi$ gegenüber, $d_G$ liegt an. Also gilt
   $\tan\varphi = \frac{3}{\sqrt{40}}$ und $\varphi \approx 25{,}38°$.
5. **Kontrolle:** $\sin\varphi = \frac{3}{7}$ ergibt ebenfalls $\varphi \approx 25{,}38°$.
:::

:::achtung[Die falsche Kathete am Boden]
Beim Quader $6 \times 2 \times 3$ rechnet jemand so: $\tan\varphi = \frac{3}{6}$, also $\varphi \approx 26{,}57°$.
Er hat die Kante $a = 6$ als Ankathete genommen. Die Raumdiagonale steht aber nicht über der Kante $a$, sondern über
der Flächendiagonale $d_G$.

Richtig ist $\tan\varphi = \frac{3}{\sqrt{40}}$ und $\varphi \approx 25{,}38°$. Zeichne immer zuerst die Projektion
ein. Sie verbindet den Fußpunkt der Strecke mit dem Fußpunkt des Lots.
:::

```aufgabe
id: tr-raum-check-projektion
titel: Wo liegt der rechte Winkel?
art: check
niveau: 1
angabe: |
  Eine Raumdiagonale, ihre Projektion auf die Grundfläche und eine senkrechte Kante bilden ein rechtwinkliges Dreieck.
  Welche der drei Seiten ist die Hypotenuse?
teile:
  - typ: auswahl
    optionen: ['die Raumdiagonale', 'die Projektion', 'die senkrechte Kante']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Die Projektion liegt am Boden und bildet mit der senkrechten Kante den rechten Winkel. Sie ist eine Kathete.'
      - wert: 2
        meldung: 'Die senkrechte Kante steht auf der Projektion senkrecht. Sie ist eine Kathete.'
loesung: |
  Der rechte Winkel liegt zwischen der Projektion am Boden und der senkrechten Kante.
  ---
  Ihm gegenüber liegt die Raumdiagonale. Sie ist die Hypotenuse und damit die längste der drei Seiten.
```

### Pyramiden

Eine **quadratische Pyramide** hat ein Quadrat mit Seite $a$ als Grundfläche. Ihre Spitze liegt genau über dem
Mittelpunkt $M$ des Quadrats, in der Höhe $h$. In ihr stecken zwei wichtige rechtwinklige Dreiecke:

- **Zur Seitenfläche:** Spitze, Mittelpunkt $M$ und die Mitte einer Grundkante. Die waagrechte Kathete ist $\frac a2$.
  Die Hypotenuse ist die **Seitenhöhe** $h_s$, also die Höhe des dreieckigen Seitenteils. Der Winkel bei der
  Kantenmitte ist der Neigungswinkel der Seitenfläche.
- **Zur Seitenkante:** Spitze, Mittelpunkt $M$ und eine Ecke der Grundfläche. Die waagrechte Kathete ist die halbe
  Diagonale $\frac{a\sqrt2}{2}$. Die Hypotenuse ist die **Seitenkante** $s$.

:::beispiel[Die Cheops-Pyramide]
Die Cheops-Pyramide in Ägypten hatte ursprünglich etwa die Grundkante $a = 230$ m und die Höhe $h = 146$ m.

1. **Neigung der Seitenflächen:** Waagrechte Kathete $\frac a2 = 115$ m, senkrechte Kathete $146$ m. Also gilt
   $\tan\alpha = \frac{146}{115}$ und $\alpha \approx 51{,}77°$.
2. **Neigung der Seitenkanten:** Die halbe Diagonale ist $115\cdot\sqrt2 \approx 162{,}63$ m. Also gilt
   $\tan\beta = \frac{146}{162{,}63}$ und $\beta \approx 41{,}91°$.
3. **Deutung:** Die Kanten sind flacher als die Flächen. Das passt, denn bis zur Ecke ist es waagrecht weiter als
   bis zur Kantenmitte, bei gleicher Höhe.
4. **Seitenhöhe:** $h_s = \sqrt{146^2 + 115^2} \approx 185{,}85$ m. So lang ist der Weg von der Kantenmitte über die
   Seitenfläche zur Spitze.
:::

:::achtung[Halbe Kante statt halbe Diagonale]
Für die Neigung der **Seitenkante** der Cheops-Pyramide rechnet jemand $\tan\beta = \frac{146}{115}$ und erhält
$51{,}77°$. Das ist aber die Neigung der **Seitenfläche**. Unter einer Ecke liegt nicht die halbe Kante, sondern
die halbe Diagonale $\frac{a\sqrt2}{2} \approx 162{,}63$ m.

Richtig ist $\tan\beta = \frac{146}{162{,}63}$, also $\beta \approx 41{,}91°$. Frag dich immer: Vom Mittelpunkt aus
bis wohin reicht die waagrechte Kathete, bis zur Kantenmitte oder bis zur Ecke?
:::

:::merke[Rezept: Winkel und Strecken in Körpern]
1. Schrägbild skizzieren. Die gesuchte Strecke oder den gesuchten Winkel farbig markieren.
2. Ein rechtwinkliges Dreieck suchen, das die gesuchte Größe enthält. Meist besteht es aus einer senkrechten Höhe,
   einer waagrechten Strecke am Boden und einer schrägen Strecke.
3. Das Dreieck **eben** herauszeichnen und die bekannten Längen eintragen. Oft brauchst du dafür vorher eine
   Flächendiagonale oder eine halbe Diagonale aus einem zweiten Dreieck.
4. Wie in der Ebene rechnen: Pythagoras, Sinus, Kosinus, Tangens.
:::

```reflexion
frage: Warum ist der Neigungswinkel der Raumdiagonale eines Würfels immer gleich groß, egal wie lang die Kante ist?
antwort: |
  Bei einem Würfel mit Kante $a$ ist die Flächendiagonale $a\sqrt2$ und die Höhe $a$. Der Tangens des
  Neigungswinkels ist $\frac{a}{a\sqrt2} = \frac{1}{\sqrt2}$. Die Kantenlänge kürzt sich heraus. Das ist wieder die
  Ähnlichkeit: Alle Würfel sind maßstäbliche Kopien voneinander, also haben sie dieselben Winkel. Der Winkel ist
  $\tan^{-1}\frac{1}{\sqrt2} \approx 35{,}26°$.
```

```aufgabe
id: tr-raum-quader
titel: Raumdiagonale eines Quaders
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Ein Quader hat die Länge $4$ cm, die Breite $4$ cm und die Höhe $7$ cm.
  Berechne die Raumdiagonale und ihren Neigungswinkel gegen die Grundfläche (zwei Nachkommastellen).
teile:
  - typ: zahl
    label: 'Raumdiagonale'
    einheit: cm
    loesung: "sqrt(4^2 + 4^2 + 7^2)"
    fehler:
      - wert: "sqrt(4^2 + 7^2)"
        meldung: 'Das ist nur die Diagonale einer Seitenfläche. Die Raumdiagonale braucht alle drei Kanten: $\sqrt{a^2 + b^2 + c^2}$.'
  - typ: zahl
    label: 'Neigungswinkel'
    einheit: °
    loesung: "inGrad(atan(7/sqrt(32)))"
    anzeige: '51{,}06'
    fehler:
      - wert: "inGrad(atan(7/4))"
        meldung: 'Die Ankathete ist nicht die Kante $4$ cm, sondern die Flächendiagonale der Grundfläche, $\sqrt{32}$ cm.'
hinweise:
  - 'Berechne zuerst die Flächendiagonale der Grundfläche. Sie ist die Projektion der Raumdiagonale.'
loesung: |
  **Ansatz:** Raumdiagonale, ihre Projektion auf die Grundfläche und die Höhe bilden ein rechtwinkliges Dreieck.
  ---
  Flächendiagonale: $d_G = \sqrt{4^2 + 4^2} = \sqrt{32} \approx 5{,}657$ cm. Raumdiagonale: $d = \sqrt{32 + 49} = \sqrt{81} = 9$ cm.
  ---
  Winkel: $\tan\varphi = \frac{7}{\sqrt{32}}$, also $\varphi \approx 51{,}06°$. **Kontrolle:** $\sin\varphi = \frac79 \approx 0{,}778$ und $\sin 51{,}06° \approx 0{,}778$.
```

```aufgabe
id: tr-raum-wuerfel
titel: Ein Winkel, der nicht von der Größe abhängt
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Berechne den Neigungswinkel der Raumdiagonale eines Würfels gegen seine Grundfläche (zwei Nachkommastellen).
  Die Kantenlänge ist nicht angegeben, weil sie keine Rolle spielt.
teile:
  - typ: zahl
    label: 'Neigungswinkel'
    einheit: °
    loesung: "inGrad(atan(1/sqrt(2)))"
    anzeige: '35{,}26'
    fehler:
      - wert: "45"
        meldung: '$45°$ ist der Winkel zwischen Kante und Flächendiagonale in der Grundfläche. Die Raumdiagonale steigt flacher an, weil ihre Projektion länger als die Höhe ist.'
hinweise:
  - 'Nimm eine beliebige Kante $a$, zum Beispiel $a = 1$. Die Flächendiagonale ist dann $\sqrt2$.'
loesung: |
  **Ansatz:** Mit der Kante $a$ ist die Projektion der Raumdiagonale die Flächendiagonale $a\sqrt2$, die Höhe ist $a$.
  ---
  $\tan\varphi = \frac{a}{a\sqrt2} = \frac{1}{\sqrt2}$. Die Kantenlänge kürzt sich weg.
  ---
  $\varphi = \tan^{-1}\frac{1}{\sqrt2} \approx 35{,}26°$, für jeden Würfel.
```

```aufgabe
id: tr-raum-pyramide
titel: Neigungswinkel einer Pyramide
niveau: 2
lernziel: 0
kompetenz: rechnen
angabe: |
  Eine quadratische Pyramide hat die Grundkante $a = 6$ cm und die Höhe $h = 8$ cm.
  Berechne die Seitenhöhe $h_s$, den Neigungswinkel der Seitenflächen und den Neigungswinkel der Seitenkanten
  gegen die Grundfläche (zwei Nachkommastellen).
teile:
  - typ: zahl
    label: 'Seitenhöhe $h_s$'
    einheit: cm
    loesung: "sqrt(8^2 + 3^2)"
    anzeige: '8{,}54'
    fehler:
      - wert: "sqrt(8^2 + 6^2)"
        meldung: 'Die waagrechte Kathete reicht vom Mittelpunkt nur bis zur Kantenmitte, also $\frac a2 = 3$ cm.'
  - typ: zahl
    label: 'Neigung der Seitenflächen'
    einheit: °
    loesung: "inGrad(atan(8/3))"
    anzeige: '69{,}44'
    fehler:
      - wert: "inGrad(atan(8/6))"
        meldung: 'Vom Mittelpunkt bis zur Kantenmitte sind es $3$ cm, nicht $6$ cm.'
  - typ: zahl
    label: 'Neigung der Seitenkanten'
    einheit: °
    loesung: "inGrad(atan(8/(3*sqrt(2))))"
    anzeige: '62{,}06'
    fehler:
      - wert: "inGrad(atan(8/3))"
        meldung: 'Das ist die Neigung der Seitenfläche. Unter der Kante liegt die halbe Diagonale $3\sqrt2$ cm, nicht die halbe Kante.'
hinweise:
  - 'Zeichne das Dreieck aus Spitze, Mittelpunkt der Grundfläche und Kantenmitte. Die waagrechte Kathete ist $\frac a2$.'
  - 'Für die Seitenkante nimmst du das Dreieck aus Spitze, Mittelpunkt und Ecke. Die waagrechte Kathete ist die halbe Diagonale $\frac{a\sqrt2}{2}$.'
loesung: |
  **Ansatz:** Zwei rechtwinklige Dreiecke mit der Höhe $8$ cm als senkrechter Kathete. Für die Seitenfläche reicht die waagrechte Kathete bis zur Kantenmitte ($3$ cm), für die Seitenkante bis zur Ecke ($3\sqrt2$ cm).
  ---
  Seitenhöhe: $h_s = \sqrt{8^2 + 3^2} = \sqrt{73} \approx 8{,}54$ cm.
  ---
  Seitenfläche: $\tan\alpha = \frac83$, also $\alpha \approx 69{,}44°$.
  ---
  Seitenkante: $\tan\beta = \frac{8}{3\sqrt2} \approx 1{,}886$, also $\beta \approx 62{,}06°$. **Plausibilität:** Die Kanten sind flacher als die Flächen, wie bei jeder quadratischen Pyramide.
```

```aufgabe
id: tr-raum-zimmer-gefuehrt
titel: Eine Schnur quer durch das Zimmer
niveau: 2
lernziel: 0
kompetenz: modellieren
angabe: |
  Ein quaderförmiges Zimmer ist $5$ m lang, $4$ m breit und $2{,}5$ m hoch. Eine Lichterkette wird straff von einer
  Bodenecke zur gegenüberliegenden Deckenecke gespannt. Wie lang ist sie, und unter welchem Winkel steigt sie gegen
  den Boden an? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    label: 'Länge'
    einheit: m
    loesung: "sqrt(5^2 + 4^2 + 2.5^2)"
    anzeige: '6{,}87'
  - typ: zahl
    label: 'Winkel gegen den Boden'
    einheit: °
    loesung: "inGrad(atan(2.5/sqrt(41)))"
    anzeige: '21{,}33'
    fehler:
      - wert: "inGrad(atan(2.5/5))"
        meldung: 'Die Lichterkette steht nicht über der Länge $5$ m, sondern über der Bodendiagonale $\sqrt{41}$ m.'
hinweise:
  - 'Die Lichterkette ist eine Raumdiagonale. Ihre Projektion auf den Boden ist die Bodendiagonale.'
  - 'Berechne zuerst die Bodendiagonale aus Länge und Breite. Dann bilden Bodendiagonale, Raumhöhe und Lichterkette ein rechtwinkliges Dreieck.'
loesung: |
  **Ansatz:** Die Lichterkette ist die Raumdiagonale des Zimmers. Ihr Schatten am Boden ist die Bodendiagonale.
  ---
  Bodendiagonale: $d_G = \sqrt{5^2 + 4^2} = \sqrt{41} \approx 6{,}40$ m.
  ---
  Länge: $d = \sqrt{41 + 2{,}5^2} = \sqrt{47{,}25} \approx 6{,}87$ m.
  ---
  Winkel: $\tan\varphi = \frac{2{,}5}{\sqrt{41}} \approx 0{,}390$, also $\varphi \approx 21{,}33°$. **Antwort:** Die Lichterkette ist etwa $6{,}87$ m lang und steigt unter etwa $21{,}33°$ an.
gefuehrt:
  - text: 'Welche Strecke am Boden liegt genau unter der Lichterkette? Berechne ihre Länge.'
    teil: { typ: zahl, einheit: m, loesung: "sqrt(41)", fehler: [ { wert: "5", meldung: 'Die Lichterkette läuft schräg durch den Raum. Ihr Schatten am Boden ist die Diagonale, nicht die Länge.' } ] }
    erklaerung: 'Die Bodendiagonale: $\sqrt{5^2 + 4^2} = \sqrt{41} \approx 6{,}40$ m.'
  - text: 'Bodendiagonale, Raumhöhe und Lichterkette bilden ein rechtwinkliges Dreieck. Wo liegt der rechte Winkel?'
    erklaerung: 'Am Endpunkt der Bodendiagonale, also in der Bodenecke unter der Deckenecke, steht die Raumhöhe senkrecht auf dem Boden. Dort liegt der rechte Winkel. Die Lichterkette liegt ihm gegenüber und ist die Hypotenuse.'
  - text: 'Berechne die Länge der Lichterkette.'
    teil: { typ: zahl, einheit: m, loesung: "sqrt(41 + 2.5^2)" }
    erklaerung: '$\sqrt{41 + 6{,}25} = \sqrt{47{,}25} \approx 6{,}87$ m.'
  - text: 'Berechne den Winkel gegen den Boden.'
    teil: { typ: zahl, einheit: °, loesung: "inGrad(atan(2.5/sqrt(41)))" }
    erklaerung: 'Die Raumhöhe liegt dem Winkel gegenüber, die Bodendiagonale liegt an: $\tan\varphi = \frac{2{,}5}{\sqrt{41}}$, also $\varphi \approx 21{,}33°$.'
```

```aufgabe
id: tr-raum-sandkegel
titel: Ein Kegel aus Sand
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Schüttet man Sand auf einen Haufen, entsteht ein Kegel. Seine Mantellinie ist gegen den Boden immer um denselben
  Winkel geneigt, den Schüttwinkel. Bei trockenem Sand sind das etwa $33°$. Der Kegel hat am Boden den Radius $3$ m.
  Berechne seine Höhe und die Länge der Mantellinie, also der schrägen Linie vom Rand zur Spitze (zwei Nachkommastellen).
teile:
  - typ: zahl
    label: 'Höhe'
    einheit: m
    loesung: "3*tan(inRad(33))"
    anzeige: '1{,}95'
    fehler:
      - wert: "3*sin(inRad(33))"
        meldung: 'Der Radius liegt waagrecht am Schüttwinkel an, ist also die Ankathete und nicht die Hypotenuse. Gegenkathete durch Ankathete ist der Tangens.'
  - typ: zahl
    label: 'Mantellinie'
    einheit: m
    loesung: "3/cos(inRad(33))"
    anzeige: '3{,}58'
    fehler:
      - wert: "3*cos(inRad(33))"
        meldung: 'Die Mantellinie ist die Hypotenuse und muss länger sein als der Radius $3$ m. Aus $\cos 33° = \frac{3}{s}$ folgt $s = \frac{3}{\cos 33°}$.'
hinweise:
  - 'Schneide den Kegel in der Mitte senkrecht durch. Radius, Höhe und Mantellinie bilden ein rechtwinkliges Dreieck.'
  - 'Der Schüttwinkel liegt am Rand des Kegels. Der Radius ist seine Ankathete, die Höhe seine Gegenkathete.'
loesung: |
  **Ansatz:** Ein senkrechter Schnitt durch die Spitze zeigt ein rechtwinkliges Dreieck aus Radius (waagrecht), Höhe (senkrecht) und Mantellinie (schräg). Der Schüttwinkel liegt am Rand.
  ---
  Höhe: $\tan 33° = \frac{h}{3}$, also $h = 3\cdot\tan 33° \approx 1{,}95$ m.
  ---
  Mantellinie: $\cos 33° = \frac{3}{s}$, also $s = \frac{3}{\cos 33°} \approx 3{,}58$ m. **Kontrolle:** $\sqrt{3^2 + 1{,}948^2} \approx 3{,}58$ m.
```

```aufgabe
id: tr-raum-welcher-winkel
titel: Welcher Winkel ist der Neigungswinkel?
niveau: 2
lernziel: 0
kompetenz: begruenden
angabe: |
  Ein Stab steckt schräg im Boden. Sein oberes Ende ist $1{,}2$ m über dem Boden. Welche Aussage beschreibt seinen
  Neigungswinkel gegen den Boden richtig?
teile:
  - typ: auswahl
    optionen:
      - 'der Winkel zwischen dem Stab und seinem Schatten bei Licht genau von oben'
      - 'der Winkel zwischen dem Stab und der Senkrechten'
      - 'der Winkel zwischen dem Stab und einer beliebigen Linie am Boden durch seinen Fußpunkt'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Der Winkel zur Senkrechten ergänzt den Neigungswinkel zu $90°$. Gemessen wird der Neigungswinkel gegen die Ebene, also gegen die Projektion am Boden.'
      - wert: 2
        meldung: 'Je nach Richtung der Linie ändert sich dieser Winkel. Der Neigungswinkel muss aber eindeutig sein. Nur die Projektion legt ihn eindeutig fest.'
hinweise:
  - 'Denk an die Definition: Lot vom oberen Ende auf den Boden, dann Strecke und Projektion vergleichen.'
  - 'Welche Linie am Boden liegt genau unter dem Stab?'
loesung: |
  **Ansatz:** Nach der Definition fällt man vom oberen Ende das Lot auf den Boden und verbindet seinen Fußpunkt mit dem Fußpunkt des Stabs. Das ist die Projektion.
  ---
  Der Neigungswinkel liegt zwischen Stab und Projektion. Die Projektion ist genau der Schatten bei Licht von oben.
  ---
  Andere Linien am Boden liefern größere Winkel, je nach Richtung. Der Winkel zur Senkrechten ist $90°$ minus Neigungswinkel. Richtig ist also die erste Aussage.
```

```aufgabe
id: tr-raum-pyramide-rueckwaerts
titel: Eine Pyramide aus Kante und Winkel
niveau: 3
lernziel: 0
kompetenz: modellieren
angabe: |
  Ein Zelt hat die Form einer quadratischen Pyramide. Jede der vier Stangen entlang der Seitenkanten ist $s = 3$ m lang
  und gegen den Boden um $55°$ geneigt. Runde auf zwei Nachkommastellen.

  a) Wie hoch ist das Zelt?

  b) Wie lang ist eine Seite der quadratischen Grundfläche?

  c) Unter welchem Winkel sind die Zeltwände gegen den Boden geneigt?
teile:
  - typ: zahl
    label: 'a) Höhe'
    einheit: m
    loesung: "3*sin(inRad(55))"
    anzeige: '2{,}46'
    fehler:
      - wert: "3*cos(inRad(55))"
        meldung: 'Das ist die waagrechte Strecke von der Mitte zur Ecke. Die Höhe liegt dem $55°$-Winkel gegenüber.'
  - typ: zahl
    label: 'b) Grundkante'
    einheit: m
    loesung: "3*cos(inRad(55))*sqrt(2)"
    anzeige: '2{,}43'
    fehler:
      - wert: "2*3*cos(inRad(55))"
        meldung: 'Die doppelte Strecke von der Mitte zur Ecke ist die **Diagonale** des Quadrats, nicht seine Seite. Teile die Diagonale durch $\sqrt2$.'
  - typ: zahl
    label: 'c) Neigung der Wände'
    einheit: °
    loesung: "inGrad(atan(3*sin(inRad(55))/(3*cos(inRad(55))*sqrt(2)/2)))"
    anzeige: '63{,}66'
hinweise:
  - 'Die Stange, die Höhe und die Strecke vom Mittelpunkt zur Ecke bilden ein rechtwinkliges Dreieck. Die Stange ist die Hypotenuse.'
  - 'Die Strecke vom Mittelpunkt zur Ecke ist die halbe Diagonale des Quadrats. Die Seite ist Diagonale durch $\sqrt2$. Für die Wände brauchst du danach die halbe Seite.'
loesung: |
  **Ansatz:** Wir arbeiten rückwärts. Im Dreieck aus Stange, Höhe und halber Diagonale kennen wir die Hypotenuse $3$ m und den Winkel $55°$.
  ---
  a) Höhe als Gegenkathete: $h = 3\cdot\sin 55° \approx 2{,}457$ m, gerundet $2{,}46$ m.
  ---
  b) Halbe Diagonale als Ankathete: $3\cdot\cos 55° \approx 1{,}721$ m. Die ganze Diagonale ist $3{,}441$ m. Bei einem Quadrat ist die Diagonale $a\sqrt2$, also $a = \frac{3{,}441}{\sqrt2} \approx 2{,}43$ m.
  ---
  c) Für die Wand nehmen wir das Dreieck aus Höhe, halber Seite $\frac{2{,}433}{2} \approx 1{,}217$ m und Seitenhöhe: $\tan\alpha = \frac{2{,}457}{1{,}217} \approx 2{,}02$, also $\alpha \approx 63{,}66°$.
  ---
  **Plausibilität:** Die Wände sind steiler als die Kanten ($63{,}66°$ gegen $55°$). Das passt, weil die Kantenmitte näher am Mittelpunkt liegt als die Ecke.
```

## Der Einheitskreis

```aufgabe
id: tr-ek-check-hypotenuse-eins
titel: Ein Dreieck mit Hypotenuse 1
art: check
niveau: 1
angabe: |
  Ein rechtwinkliges Dreieck hat die Hypotenuse $1$ und den spitzen Winkel $\alpha$. Wie lang ist die Gegenkathete von
  $\alpha$? Zum Nachlesen: [5.1 Das rechtwinklige Dreieck](/lernen/mathe3/trigonometrie/das-rechtwinklige-dreieck).
teile:
  - typ: auswahl
    optionen: ['$\sin\alpha$', '$\cos\alpha$', '$\tan\alpha$', '$1$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$\cos\alpha$ ist Ankathete durch Hypotenuse. Mit Hypotenuse $1$ ist das die Länge der **Ankathete**.'
      - wert: 2
        meldung: 'Der Tangens braucht die Ankathete im Nenner. Hier ist die Hypotenuse bekannt.'
      - wert: 3
        meldung: '$1$ ist die Hypotenuse selbst. Die Gegenkathete ist kürzer.'
loesung: |
  $\sin\alpha = \frac{\text{Gegenkathete}}{\text{Hypotenuse}} = \frac{\text{Gegenkathete}}{1}$.
  ---
  Bei Hypotenuse $1$ ist die Gegenkathete also genau $\sin\alpha$ lang, die Ankathete genau $\cos\alpha$. Diese Idee trägt die ganze Lektion.
```

**Worum geht es?** Im rechtwinkligen Dreieck gibt es nur Winkel zwischen $0°$ und $90°$. Für stumpfe Dreiecke, für
Drehungen und für Schwingungen brauchst du aber Sinus und Kosinus von **jedem** Winkel, etwa von $150°$, $300°$ oder
$-45°$. Der Einheitskreis liefert eine Definition, die für spitze Winkel mit der alten übereinstimmt und für alle
anderen Winkel weiterfunktioniert.

Die Idee steckt in der Eingangsfrage: Bei Hypotenuse $1$ **sind** Sinus und Kosinus Seitenlängen. Wir legen das
Dreieck in ein Koordinatensystem. Die Hypotenuse beginnt im Ursprung und hat die Länge $1$. Ihr Endpunkt liegt dann
auf dem Kreis mit Radius $1$ um den Ursprung. Seine Koordinaten sind genau $\cos\alpha$ und $\sin\alpha$.

### Die Definition am Kreis

:::definition[Sinus und Kosinus am Einheitskreis]
Der **Einheitskreis** ist der Kreis mit Radius $1$ um den Ursprung. Einen Winkel $\alpha$ tragen wir an der
positiven $x$-Achse an und drehen **gegen den Uhrzeigersinn**. Negative Winkel drehen im Uhrzeigersinn. Der
gedrehte Schenkel schneidet den Einheitskreis im Punkt $P_\alpha$. Dann gilt
$$P_\alpha = (\cos\alpha \mid \sin\alpha).$$
In Worten: $\cos\alpha$ ist die **$x$-Koordinate** und $\sin\alpha$ die **$y$-Koordinate** von $P_\alpha$. Wo
$\cos\alpha \ne 0$ ist, setzt man $\tan\alpha = \frac{\sin\alpha}{\cos\alpha}$.
:::

Für $0° < \alpha < 90°$ ist das die alte Definition. Fällst du von $P_\alpha$ das Lot auf die $x$-Achse, entsteht ein
rechtwinkliges Dreieck mit Hypotenuse $1$. Seine Gegenkathete ist die Höhe $y$, seine Ankathete die Strecke $x$.

:::beispiel[Der Winkel 150°]
Wo liegt der Punkt $P_{150°}$, und was sind $\sin 150°$ und $\cos 150°$?

1. $150°$ ist mehr als eine Vierteldrehung ($90°$) und weniger als eine halbe ($180°$). Der Punkt liegt also links
   oben.
2. Er ist das Spiegelbild von $P_{30°}$ an der $y$-Achse, denn $150° = 180° - 30°$. Beim Spiegeln an der $y$-Achse
   bleibt die Höhe gleich, und die $x$-Koordinate wechselt das Vorzeichen.
3. Aus $P_{30°} \approx (0{,}866 \mid 0{,}5)$ wird $P_{150°} \approx (-0{,}866 \mid 0{,}5)$.
4. Also gilt $\sin 150° = 0{,}5$ und $\cos 150° \approx -0{,}866$. Der Taschenrechner bestätigt beides.

**Nichtbeispiel:** „Gegenkathete durch Hypotenuse“ ergibt für $150°$ keinen Sinn. Ein rechtwinkliges Dreieck kann
keinen Winkel von $150°$ enthalten. Erst die Kreisdefinition gibt $\sin 150°$ eine Bedeutung.
:::

```plot
x: [-1.5, 1.7]
y: [-1.3, 1.5]
gleich: true
kurven:
  - { x: "cos(t)", y: "sin(t)", t: [0, "2*pi"], farbe: 3 }
vektoren:
  - { nach: ["cos(5*pi/6)", "sin(5*pi/6)"], label: "P(150°)", farbe: 0 }
  - { nach: ["cos(pi/6)", "sin(pi/6)"], label: "P(30°)", farbe: 1 }
strecken:
  - { von: ["cos(5*pi/6)", 0], nach: ["cos(5*pi/6)", "sin(5*pi/6)"], gestrichelt: true, farbe: 0 }
  - { von: ["cos(pi/6)", 0], nach: ["cos(pi/6)", "sin(pi/6)"], gestrichelt: true, farbe: 1 }
  - { von: [1, -1.2], nach: [1, 1.4], gestrichelt: true, farbe: 2 }
punkte:
  - { x: "cos(5*pi/6)", y: -0.12, label: "cos 150° ≈ −0,87" }
  - { x: "cos(pi/6)", y: -0.12, label: "cos 30° ≈ 0,87" }
  - { x: 1, y: "tan(pi/6)", label: "tan 30°", farbe: 2 }
beschriftung: Einheitskreis mit den Punkten zu 30° und 150°. Beide haben die y-Koordinate 0,5, also denselben Sinus. Ihre x-Koordinaten, die Kosinuswerte, haben entgegengesetzte Vorzeichen. Auf der senkrechten Tangente x = 1 liest man tan 30° ab.
```

:::intuition
Stell dir einen Punkt vor, der gleichmäßig auf dem Einheitskreis umläuft. $\cos\alpha$ ist sein Schatten auf der
$x$-Achse, $\sin\alpha$ sein Schatten auf der $y$-Achse. Während der Punkt umläuft, pendeln beide Schatten zwischen
$-1$ und $1$ hin und her. Genau deshalb beschreiben Sinus und Kosinus Schwingungen.
:::

### Der Tangens am Kreis

Verlängere den gedrehten Schenkel, bis er die senkrechte Gerade $x = 1$ trifft. Diese Gerade berührt den Kreis im
Punkt $(1 \mid 0)$, sie heißt deshalb Tangente. Der Schnittpunkt liegt in der Höhe $\tan\alpha$. Begründung mit dem
Strahlensatz: Das kleine Dreieck mit den Katheten $\cos\alpha$ und $\sin\alpha$ und das große mit den Katheten $1$
und $\tan\alpha$ sind ähnlich. Also ist $\frac{\tan\alpha}{1} = \frac{\sin\alpha}{\cos\alpha}$. Daher kommt der Name
**Tangens**. Zugleich ist $\tan\alpha$ die Steigung des Schenkels.

Bei $\alpha = 90°$ ist der Schenkel senkrecht und parallel zur Geraden $x = 1$. Es gibt keinen Schnittpunkt.
Algebraisch ist $\cos 90° = 0$, und durch $0$ darf man nicht teilen. Also ist **$\tan 90°$ nicht definiert**. Dasselbe
gilt für $270°$ und allgemein für jeden Winkel, bei dem $P_\alpha$ auf der $y$-Achse liegt.

### Vorzeichen in den vier Quadranten

Die Koordinatenachsen teilen die Ebene in vier **Quadranten** (Viertel). Weil Sinus und Kosinus Koordinaten sind, hängen ihre Vorzeichen nur vom Quadranten ab:

- **I. Quadrant** (rechts oben, $0°$ bis $90°$): $\sin$ positiv, $\cos$ positiv, $\tan$ positiv.
- **II. Quadrant** (links oben, $90°$ bis $180°$): $\sin$ positiv, $\cos$ negativ, $\tan$ negativ.
- **III. Quadrant** (links unten, $180°$ bis $270°$): $\sin$ negativ, $\cos$ negativ, $\tan$ positiv.
- **IV. Quadrant** (rechts unten, $270°$ bis $360°$): $\sin$ negativ, $\cos$ positiv, $\tan$ negativ.

Das Vorzeichen des Tangens folgt aus dem Quotienten: positiv bei gleichen, negativ bei verschiedenen Vorzeichen.

:::achtung[Vorzeichen vergessen]
Jemand rechnet: „$\cos 120° = \cos 60° = 0{,}5$, weil beide Schenkel mit der $x$-Achse einen Winkel von $60°$
bilden.“ Der Betrag stimmt, aber $120°$ liegt im II. Quadranten. Dort ist die $x$-Koordinate negativ.

Richtig ist $\cos 120° = -0{,}5$. Mach dir zu jedem Winkel eine kleine Skizze: Liegt der Punkt links von der
$y$-Achse, ist der Kosinus negativ. Liegt er unter der $x$-Achse, ist der Sinus negativ.
:::

```aufgabe
id: tr-ek-check-quadrant
titel: Ein Vorzeichen bestimmen
art: check
niveau: 1
angabe: |
  Welches Vorzeichen hat $\cos 300°$?
teile:
  - typ: auswahl
    optionen: ['positiv', 'negativ', 'null']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$300°$ liegt zwischen $270°$ und $360°$, also rechts unten. Rechts von der $y$-Achse ist die $x$-Koordinate positiv. Negativ ist dort nur der Sinus.'
      - wert: 2
        meldung: 'Zwischen $0°$ und $360°$ ist der Kosinus nur bei $90°$ und $270°$ null, wo der Punkt auf der $y$-Achse liegt.'
loesung: |
  $300°$ liegt im IV. Quadranten, also rechts unten.
  ---
  Rechts von der $y$-Achse ist die $x$-Koordinate positiv, also ist $\cos 300° > 0$. Genauer: $\cos 300° = 0{,}5$.
```

### Vier Grundeigenschaften

:::satz[Grundeigenschaften von Sinus und Kosinus]
Für alle Winkel $\alpha$ gilt:

1. **Beschränktheit:** $-1 \le \sin\alpha \le 1$ und $-1 \le \cos\alpha \le 1$.
2. **Trigonometrischer Pythagoras:** $\sin^2\alpha + \cos^2\alpha = 1$.
3. **Periodizität:** $\sin(\alpha + 360°) = \sin\alpha$, $\cos(\alpha + 360°) = \cos\alpha$ und $\tan(\alpha + 180°) = \tan\alpha$.
4. **Symmetrie:** $\sin(-\alpha) = -\sin\alpha$, $\cos(-\alpha) = \cos\alpha$ und $\tan(-\alpha) = -\tan\alpha$.
:::

Alle vier Aussagen liest du am Kreis ab:

- **Zu 1:** $P_\alpha$ liegt auf einem Kreis mit Radius $1$. Keine Koordinate kann größer als $1$ werden.
- **Zu 2:** $P_\alpha$ hat vom Ursprung den Abstand $1$. Nach Pythagoras ist $\cos^2\alpha + \sin^2\alpha = 1^2$.
- **Zu 3:** Nach einer vollen Umdrehung bist du wieder am selben Punkt. Beim Tangens genügt eine halbe Umdrehung.
  Dann liegt der Punkt genau gegenüber, beide Koordinaten wechseln das Vorzeichen, und im Quotienten heben sich die
  beiden Minus auf.
- **Zu 4:** $-\alpha$ ist das Spiegelbild von $\alpha$ an der $x$-Achse. Die $x$-Koordinate bleibt, die
  $y$-Koordinate wechselt das Vorzeichen.

:::achtung[Falsche Symmetrie beim Kosinus]
Jemand rechnet: „$\cos(-40°) = -\cos 40° \approx -0{,}766$.“ Das Minus darf man aber nur beim Sinus herausziehen.

$-40°$ ist das Spiegelbild von $40°$ an der $x$-Achse. Dabei ändert sich nur die Höhe, nicht die $x$-Koordinate.
Richtig ist $\cos(-40°) = \cos 40° \approx 0{,}766$. Man sagt: Der Kosinus ist **gerade**, der Sinus ist **ungerade**.
:::

:::beispiel[Die Spitze eines Windradflügels]
Ein Windrad hat $40$ m lange Flügel, die Nabe sitzt in $95$ m Höhe. Ein Flügel ist von der waagrechten Richtung
nach rechts aus um $130°$ gegen den Uhrzeigersinn gedreht. Wie hoch ist seine Spitze, und wie weit liegt sie
waagrecht neben der Nabe?

1. Die Flügelspitze bewegt sich auf einem Kreis mit Radius $40$ m um die Nabe. Das ist der Einheitskreis,
   gestreckt mit dem Faktor $40$. Ihre Koordinaten relativ zur Nabe sind deshalb $(40\cos 130° \mid 40\sin 130°)$.
2. Höhe über der Nabe: $40\cdot\sin 130° \approx 40\cdot 0{,}7660 \approx 30{,}64$ m. Positiv, denn $130°$ liegt
   im II. Quadranten, also oben.
3. Waagrecht: $40\cdot\cos 130° \approx 40\cdot(-0{,}6428) \approx -25{,}71$ m. Das Minus heißt: links von der Nabe.
4. Höhe über dem Boden: $95 + 30{,}64 = 125{,}64$ m.

**Antwort:** Die Spitze ist etwa $125{,}64$ m hoch und liegt $25{,}71$ m links neben der Nabe.
:::

:::merke[Rezept: Sinus und Kosinus eines beliebigen Winkels deuten]
1. Den Winkel ab der positiven $x$-Achse gegen den Uhrzeigersinn eintragen und den Quadranten bestimmen.
2. Daraus die Vorzeichen ablesen: $\sin$ ist positiv oben, $\cos$ ist positiv rechts.
3. Für einen Kreis mit Radius $r$ um einen Mittelpunkt $M$ sind die Koordinaten $M + (r\cos\alpha \mid r\sin\alpha)$.
4. Kontrolle: Passt das Ergebnis zur Lage des Punktes in der Skizze?
:::

```aufgabe
id: tr-ek-check-vorhersage
titel: Was passiert mit dem Sinus?
art: check
niveau: 1
angabe: |
  Sag voraus, bevor du das Widget benutzt: Der Winkel wächst von $90°$ auf $180°$. Was passiert mit $\sin\alpha$?
teile:
  - typ: auswahl
    optionen:
      - 'Er nimmt von $1$ auf $0$ ab.'
      - 'Er wächst weiter von $1$ auf $2$.'
      - 'Er nimmt von $0$ auf $-1$ ab.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Der Sinus ist eine Koordinate auf einem Kreis mit Radius $1$. Er kann nie größer als $1$ werden.'
      - wert: 2
        meldung: 'Zwischen $90°$ und $180°$ liegt der Punkt im II. Quadranten, also oberhalb der $x$-Achse. Der Sinus bleibt dort positiv.'
loesung: |
  Bei $90°$ ist der Punkt ganz oben, $(0 \mid 1)$. Bei $180°$ ist er ganz links, $(-1 \mid 0)$.
  ---
  Die Höhe, also der Sinus, sinkt dabei von $1$ auf $0$. Im Widget kannst du das jetzt beobachten.
```

```widget
name: einheitskreis
titel: Sinus, Kosinus und Tangens am Einheitskreis
props:
  winkel: 150
  kurve: true
```

**Beobachte und erkläre:** Dreh den Winkel einmal ganz herum. Prüfe deine Vorhersage. Achte dann auf drei Dinge:
In welchen Quadranten ist der Sinus positiv? Wo wird der Tangens sehr groß, und warum? Welcher zweite Winkel
zwischen $0°$ und $360°$ hat denselben Sinus wie $30°$? Die Antwort auf die letzte Frage ist der Schlüssel zu den
Gleichungen in [5.11 Trigonometrische Gleichungen](/lernen/mathe3/trigonometrie/trigonometrische-gleichungen).

```aufgabe
id: tr-quadranten-vorzeichen
titel: Vorzeichen im Quadranten
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Für einen Winkel $\alpha$ mit $0° \le \alpha < 360°$ gilt $\sin\alpha > 0$ und $\cos\alpha < 0$.
  In welchem Bereich liegt $\alpha$, und welches Vorzeichen hat $\tan\alpha$?
teile:
  - typ: auswahl
    label: 'Bereich'
    optionen:
      - '$0° < \alpha < 90°$'
      - '$90° < \alpha < 180°$'
      - '$180° < \alpha < 270°$'
      - '$270° < \alpha < 360°$'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Im I. Quadranten ist auch der Kosinus positiv. Gesucht ist ein Punkt links von der $y$-Achse.'
      - wert: 2
        meldung: 'Im III. Quadranten ist auch der Sinus negativ. Gesucht ist ein Punkt oberhalb der $x$-Achse.'
      - wert: 3
        meldung: 'Im IV. Quadranten ist der Sinus negativ und der Kosinus positiv, also genau umgekehrt.'
  - typ: auswahl
    label: 'Vorzeichen von $\tan\alpha$'
    optionen: ['positiv', 'negativ', 'nicht definiert']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: '$\tan\alpha = \frac{\sin\alpha}{\cos\alpha}$. Ein positiver Zähler durch einen negativen Nenner ergibt ein negatives Ergebnis.'
hinweise:
  - '$\sin\alpha$ ist die $y$-Koordinate, $\cos\alpha$ die $x$-Koordinate des Punktes am Einheitskreis.'
loesung: |
  **Ansatz:** $\sin\alpha > 0$ heißt $y > 0$, der Punkt liegt oberhalb der $x$-Achse. $\cos\alpha < 0$ heißt $x < 0$, er liegt links von der $y$-Achse.
  ---
  Links oben ist der II. Quadrant, also $90° < \alpha < 180°$.
  ---
  $\tan\alpha = \frac{\sin\alpha}{\cos\alpha}$ ist positiv durch negativ, also negativ.
```

```aufgabe
id: tr-ek-koordinaten
titel: Koordinaten eines Punktes am Einheitskreis
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Gib die Koordinaten des Punktes $P_{200°}$ auf dem Einheitskreis an. Runde auf vier Nachkommastellen.
teile:
  - typ: zahl
    label: '$x$-Koordinate'
    loesung: "cos(inRad(200))"
    anzeige: '-0{,}9397'
    fehler:
      - wert: "sin(inRad(200))"
        meldung: 'Das ist die $y$-Koordinate. Die $x$-Koordinate ist der **Kosinus**.'
      - wert: "cos(200)"
        meldung: 'Der Rechner stand auf RAD. Stell ihn auf DEG, denn $200$ ist ein Winkel in Grad.'
  - typ: zahl
    label: '$y$-Koordinate'
    loesung: "sin(inRad(200))"
    anzeige: '-0{,}3420'
    fehler:
      - wert: "-sin(inRad(200))"
        meldung: '$200°$ liegt im III. Quadranten, also unterhalb der $x$-Achse. Die $y$-Koordinate muss negativ sein.'
hinweise:
  - '$P_\alpha = (\cos\alpha \mid \sin\alpha)$. Rechner im Modus DEG.'
loesung: |
  **Ansatz:** Nach der Definition ist $P_\alpha = (\cos\alpha \mid \sin\alpha)$.
  ---
  $\cos 200° \approx -0{,}9397$ und $\sin 200° \approx -0{,}3420$. **Plausibilität:** $200°$ liegt knapp hinter $180°$ im III. Quadranten. Der Punkt ist also weit links und ein wenig unten. Beide Koordinaten sind negativ, das passt.
```

```aufgabe
id: tr-cos-aus-sin
titel: Kosinus aus dem Sinus
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Es gilt $\sin\alpha = \tfrac{20}{29}$ und $90° < \alpha < 180°$. Berechne $\cos\alpha$ und $\tan\alpha$ exakt
  (Eingabe als Bruch, zum Beispiel `-21/29`).
teile:
  - typ: zahl
    label: '$\cos\alpha$'
    loesung: "-21/29"
    anzeige: '-\tfrac{21}{29}'
    fehler:
      - wert: "21/29"
        meldung: 'Der Betrag stimmt. Aber im II. Quadranten liegt der Punkt links von der $y$-Achse. Dort ist der Kosinus negativ.'
  - typ: zahl
    label: '$\tan\alpha$'
    loesung: "-20/21"
    anzeige: '-\tfrac{20}{21}'
    fehler:
      - wert: "20/21"
        meldung: 'Positiver Sinus durch negativen Kosinus ergibt einen negativen Tangens.'
      - wert: "-21/20"
        meldung: 'Zähler und Nenner sind vertauscht. $\tan\alpha = \frac{\sin\alpha}{\cos\alpha}$.'
hinweise:
  - 'Verwende $\sin^2\alpha + \cos^2\alpha = 1$, also $\cos^2\alpha = 1 - \sin^2\alpha$.'
  - 'Die Wurzel liefert zwei Vorzeichen. Welches passt zum II. Quadranten?'
loesung: |
  **Ansatz:** Der trigonometrische Pythagoras liefert $\cos^2\alpha$. Das Vorzeichen kommt aus dem Quadranten.
  ---
  $\cos^2\alpha = 1 - \frac{400}{841} = \frac{441}{841}$, also $\cos\alpha = \pm\frac{21}{29}$.
  ---
  Im II. Quadranten ist der Kosinus negativ: $\cos\alpha = -\frac{21}{29}$.
  ---
  $\tan\alpha = \frac{20/29}{-21/29} = -\frac{20}{21}$. **Probe:** $\left(\frac{20}{29}\right)^2 + \left(\frac{21}{29}\right)^2 = \frac{400 + 441}{841} = 1$.
```

```aufgabe
id: tr-tan-undefiniert
titel: Warum ist tan 90° nicht definiert?
niveau: 2
lernziel: 2
kompetenz: begruenden
angabe: |
  Begründe auf zwei Arten, algebraisch und geometrisch, warum $\tan 90°$ nicht definiert ist, während $\sin 90°$ und
  $\cos 90°$ problemlos existieren.
teile:
  - typ: text
    muster: |
      Algebraisch: $\tan\alpha = \frac{\sin\alpha}{\cos\alpha}$, und $\cos 90° = 0$. Durch $0$ darf man nicht teilen, also
      ist auch $\tan 90° = \frac{1}{0}$ nicht definiert.

      Geometrisch: $\tan\alpha$ ist die Höhe, in der der gedrehte Schenkel die senkrechte Gerade $x = 1$ schneidet. Bei
      $90°$ ist der Schenkel senkrecht und parallel zu dieser Geraden. Es gibt keinen Schnittpunkt. Gleichbedeutend:
      Eine senkrechte Gerade hat keine Steigung. Nähert sich $\alpha$ von unten an $90°$, wächst $\tan\alpha$ über alle
      Grenzen.

      Sinus und Kosinus sind dagegen die Koordinaten des Punktes $(0 \mid 1)$: $\cos 90° = 0$ und $\sin 90° = 1$.
hinweise:
  - 'Welche Koordinaten hat der Punkt am Einheitskreis bei $90°$?'
  - 'Algebraisch: Setze in $\tan\alpha = \frac{\sin\alpha}{\cos\alpha}$ ein. Geometrisch: Wo schneidet ein senkrechter Schenkel die Gerade $x = 1$?'
loesung: |
  **Ansatz:** Bei $90°$ liegt der Punkt am Einheitskreis bei $(0 \mid 1)$. Also ist $\cos 90° = 0$ und $\sin 90° = 1$.
  ---
  Algebraisch: $\tan 90° = \frac{\sin 90°}{\cos 90°} = \frac10$, und durch null darf man nicht teilen.
  ---
  Geometrisch: Der senkrechte Schenkel ist parallel zur Geraden $x = 1$ und schneidet sie nie. Eine senkrechte Gerade hat keine Steigung.
```

```aufgabe
id: tr-ek-riesenrad-gefuehrt
titel: Eine Gondel am Riesenrad
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Ein Riesenrad hat den Radius $15$ m, seine Achse liegt $18$ m über dem Boden. Eine Gondel ist von der waagrechten
  Richtung nach rechts aus um $250°$ gegen den Uhrzeigersinn gedreht. Wie hoch über dem Boden ist sie? Runde auf zwei
  Nachkommastellen.
teile:
  - typ: zahl
    label: 'Höhe'
    einheit: m
    loesung: "18 + 15*sin(inRad(250))"
    anzeige: '3{,}90'
    fehler:
      - wert: "18 - 15*sin(inRad(250))"
        meldung: 'Der Sinus von $250°$ ist schon negativ. Ein zusätzliches Minus dreht das Vorzeichen falsch herum, die Gondel läge dann über der Achse.'
      - wert: "15*sin(inRad(250))"
        meldung: 'Das ist die Höhe relativ zur Achse. Die Achse liegt aber $18$ m über dem Boden.'
hinweise:
  - 'Die Gondel liegt auf einem Kreis mit Radius $15$ m um die Achse. Ihre Höhe über der Achse ist $15\cdot\sin 250°$.'
  - 'Bestimme zuerst den Quadranten. Ist die Gondel über oder unter der Achse?'
loesung: |
  **Ansatz:** Die Gondel bewegt sich auf dem Einheitskreis, gestreckt mit dem Faktor $15$ und um $18$ m nach oben verschoben. Ihre Höhe ist $18 + 15\cdot\sin 250°$.
  ---
  $250°$ liegt zwischen $180°$ und $270°$, also im III. Quadranten. Dort ist der Sinus negativ, die Gondel ist unter der Achse.
  ---
  $\sin 250° \approx -0{,}9397$, also $15\cdot\sin 250° \approx -14{,}10$ m.
  ---
  Höhe: $18 - 14{,}10 \approx 3{,}90$ m. **Plausibilität:** $250°$ ist nahe bei $270°$, dem tiefsten Punkt bei $3$ m. Die Gondel ist also knapp darüber.
gefuehrt:
  - text: 'In welchem Quadranten liegt der Winkel $250°$? Gib die Nummer als Zahl ein (1 bis 4).'
    teil: { typ: zahl, loesung: "3", fehler: [ { wert: "2", meldung: 'Der II. Quadrant reicht nur bis $180°$.' } ] }
    erklaerung: '$180° < 250° < 270°$, also der III. Quadrant, links unten.'
  - text: 'Welches Vorzeichen hat $\sin 250°$? Liegt die Gondel über oder unter der Achse?'
    erklaerung: 'Im III. Quadranten ist der Sinus negativ. Die Gondel liegt unter der Achse.'
  - text: 'Berechne die Höhe der Gondel relativ zur Achse, also $15\cdot\sin 250°$.'
    teil: { typ: zahl, einheit: m, loesung: "15*sin(inRad(250))" }
    erklaerung: '$15\cdot\sin 250° \approx -14{,}10$ m. Das Minus bestätigt: unter der Achse.'
  - text: 'Wie hoch über dem Boden ist die Gondel?'
    teil: { typ: zahl, einheit: m, loesung: "18 + 15*sin(inRad(250))" }
    erklaerung: '$18 + (-14{,}10) \approx 3{,}90$ m.'
```

```aufgabe
id: tr-ek-symmetrie
titel: Werte durch Spiegeln finden
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  Es ist $\sin 35° \approx 0{,}5736$. Bestimme ohne Taschenrechner, nur mit Spiegelungen am Einheitskreis:
teile:
  - typ: zahl
    label: '$\sin 145°$'
    loesung: "sin(inRad(35))"
    anzeige: '0{,}5736'
    fehler:
      - wert: "-sin(inRad(35))"
        meldung: '$145° = 180° - 35°$ ist das Spiegelbild an der $y$-Achse. Dabei bleibt die Höhe gleich, der Punkt bleibt oberhalb der $x$-Achse.'
  - typ: zahl
    label: '$\sin(-35°)$'
    loesung: "-sin(inRad(35))"
    anzeige: '-0{,}5736'
    fehler:
      - wert: "sin(inRad(35))"
        meldung: '$-35°$ ist das Spiegelbild an der $x$-Achse. Der Punkt liegt unten, der Sinus ist negativ.'
  - typ: zahl
    label: '$\sin 215°$'
    loesung: "-sin(inRad(35))"
    anzeige: '-0{,}5736'
    fehler:
      - wert: "sin(inRad(35))"
        meldung: '$215° = 180° + 35°$ liegt im III. Quadranten, also unter der $x$-Achse.'
hinweise:
  - 'Zeichne $P_{35°}$ und spiegle: an der $y$-Achse für $180° - 35°$, an der $x$-Achse für $-35°$, am Ursprung für $180° + 35°$.'
  - 'Beim Spiegeln bleibt der Betrag der Höhe gleich. Nur das Vorzeichen kann wechseln: Liegt der neue Punkt oben oder unten?'
loesung: |
  **Ansatz:** Alle drei Punkte entstehen durch Spiegeln von $P_{35°}$. Ihr Schenkel bildet mit der $x$-Achse jeweils $35°$, also ist der Betrag des Sinus immer $0{,}5736$. Das Vorzeichen entscheidet die Lage.
  ---
  $145°$ liegt im II. Quadranten, oben: $\sin 145° \approx 0{,}5736$.
  ---
  $-35°$ liegt im IV. Quadranten, unten: $\sin(-35°) \approx -0{,}5736$. $215°$ liegt im III. Quadranten, unten: $\sin 215° \approx -0{,}5736$.
```

```aufgabe
id: tr-ek-dritter-quadrant
titel: Vom Kosinus zum Winkel im dritten Quadranten
niveau: 3
lernziel: 2
kompetenz: begruenden
angabe: |
  Von einem Winkel $\alpha$ mit $0° \le \alpha < 360°$ weiß man: $\cos\alpha = -0{,}6$ und $\tan\alpha > 0$.

  a) Berechne $\sin\alpha$ und $\tan\alpha$ exakt.

  b) Bestimme $\alpha$ (zwei Nachkommastellen).

  c) Der Taschenrechner liefert $\cos^{-1}(-0{,}6) \approx 126{,}87°$. Begründe, warum das hier nicht die gesuchte Lösung ist.
teile:
  - typ: zahl
    label: 'a) $\sin\alpha$'
    loesung: "-0.8"
    fehler:
      - wert: "0.8"
        meldung: 'Der Tangens ist positiv, der Kosinus negativ. Dann muss auch der Sinus negativ sein.'
  - typ: zahl
    label: 'a) $\tan\alpha$'
    loesung: "4/3"
    anzeige: '\tfrac43'
  - typ: zahl
    label: 'b) $\alpha$'
    einheit: °
    loesung: "180 + inGrad(acos(0.6))"
    anzeige: '233{,}13'
    fehler:
      - wert: "inGrad(acos(-0.6))"
        meldung: 'Dieser Winkel liegt im II. Quadranten. Dort ist der Tangens negativ, das widerspricht der Angabe.'
  - typ: text
    label: 'c) Begründung'
    muster: |
      $\cos^{-1}$ liefert immer einen Winkel zwischen $0°$ und $180°$. $126{,}87°$ liegt im II. Quadranten, dort ist der
      Sinus positiv und der Tangens negativ. Verlangt ist aber $\tan\alpha > 0$. Zusammen mit $\cos\alpha < 0$ geht das nur
      im III. Quadranten. Der passende Winkel ist das Spiegelbild an der $x$-Achse: $360° - 126{,}87° = 233{,}13°$.
hinweise:
  - 'Bestimme zuerst den Quadranten: Kosinus negativ und Tangens positiv. Welches Vorzeichen hat dann der Sinus?'
  - 'Der Betrag des Sinus folgt aus $\sin^2\alpha + \cos^2\alpha = 1$. Den Winkel findest du über den spitzen Winkel $\cos^{-1}(0{,}6)$ zwischen Schenkel und $x$-Achse.'
loesung: |
  **Ansatz:** Zuerst den Quadranten aus den Vorzeichen bestimmen, dann den Betrag aus dem trigonometrischen Pythagoras.
  ---
  $\cos\alpha < 0$ und $\tan\alpha > 0$ heißt: Auch $\sin\alpha < 0$. Beide Koordinaten negativ, also III. Quadrant.
  ---
  $\sin^2\alpha = 1 - 0{,}36 = 0{,}64$, und weil der Sinus negativ ist, gilt $\sin\alpha = -0{,}8$. Dann ist $\tan\alpha = \frac{-0{,}8}{-0{,}6} = \frac43$.
  ---
  Spitzer Winkel zur $x$-Achse: $\cos^{-1}(0{,}6) \approx 53{,}13°$. Im III. Quadranten liegt der Punkt um diesen Winkel unter der negativen $x$-Achse: $\alpha = 180° + 53{,}13° = 233{,}13°$.
  ---
  c) $\cos^{-1}$ gibt nur Winkel von $0°$ bis $180°$ aus. Der Rechnerwert $126{,}87°$ hat den richtigen Kosinus, liegt aber im II. Quadranten mit negativem Tangens. **Probe:** $\cos 233{,}13° \approx -0{,}6$ und $\tan 233{,}13° \approx 1{,}333$.
```

## Winkel in Grad und im Bogenmaß

```aufgabe
id: tr-bm-check-umfang
titel: Der Umfang des Einheitskreises
art: check
niveau: 1
angabe: |
  Wie lang ist der Umfang des Einheitskreises, also eines Kreises mit Radius $1$? Zum Nachlesen:
  [5.4 Der Einheitskreis](/lernen/mathe3/trigonometrie/der-einheitskreis).
teile:
  - typ: zahl
    loesung: "2*pi"
    anzeige: '2\pi \approx 6{,}283'
    fehler:
      - wert: "pi"
        meldung: '$\pi$ ist der Umfang eines Kreises mit **Durchmesser** $1$. Der Einheitskreis hat Radius $1$, also Durchmesser $2$.'
      - wert: "360"
        meldung: '$360$ ist die Zahl der Grad einer vollen Drehung, keine Länge. Der Umfang eines Kreises ist $2\pi r$.'
loesung: |
  Der Umfang eines Kreises mit Radius $r$ ist $u = 2\pi r$.
  ---
  Für $r = 1$ ist $u = 2\pi \approx 6{,}283$. Diese Zahl gehört gleich zur vollen Drehung.
```

**Worum geht es?** Winkel kann man auf zwei Arten messen: in Grad oder als Länge eines Bogens. Die zweite Art heißt
Bogenmaß. Sie ist in der Analysis und in der Physik der Standard. Weil der Taschenrechner beide Arten kennt, musst
du immer wissen, in welcher er gerade rechnet.

### Gradmaß und Bogenmaß

Im **Gradmaß** teilt man eine volle Drehung in $360$ gleiche Teile. Ein rechter Winkel hat $90°$, ein gestreckter
$180°$. Die Zahl $360$ stammt aus dem Sechzigersystem der Babylonier. Mathematisch ist sie willkürlich.

:::definition[Bogenmaß]
Das **Bogenmaß** eines Winkels ist die Länge des Bogens, den der Winkel aus dem Einheitskreis ausschneidet. Seine
Einheit heißt **Radiant** (rad). Meist lässt man sie weg und schreibt nur die Zahl.
:::

**Beispiel:** Ein rechter Winkel schneidet ein Viertel des Einheitskreises aus. Der ganze Kreis hat den Umfang
$2\pi$, ein Viertel davon ist $\frac{2\pi}{4} = \frac{\pi}{2}$. Also ist $90°$ im Bogenmaß $\frac{\pi}{2} \approx 1{,}571$.
**Nichtbeispiel:** Auf einem Kreis mit Radius $3$ schneidet derselbe rechte Winkel einen Bogen der Länge
$\frac{3\pi}{2}$ aus. Das ist **nicht** das Bogenmaß. Das Bogenmaß misst immer am Kreis mit Radius $1$. Bei Radius $3$
musst du die Bogenlänge noch durch $3$ teilen.

Eine volle Drehung schneidet den ganzen Einheitskreis aus, also gilt $360° \,\hat{=}\, 2\pi$. Das Zeichen $\hat{=}$
liest man „entspricht“. Halbieren ergibt die wichtigste Beziehung: $180° \,\hat{=}\, \pi$. Daraus folgt die
Umrechnung.

:::satz[Umrechnung zwischen Grad und Bogenmaß]
Ist $\alpha$ ein Winkel in Grad und $x$ derselbe Winkel im Bogenmaß, dann gilt
$$x = \alpha\cdot\frac{\pi}{180°} \qquad\text{und}\qquad \alpha = x\cdot\frac{180°}{\pi}.$$
Ein Radiant sind also $\frac{180°}{\pi} \approx 57{,}3°$.
:::

Die wichtigsten Winkel solltest du auswendig umrechnen können:
$$\begin{array}{c|ccccccccc}
\text{Grad} & 0° & 30° & 45° & 60° & 90° & 120° & 180° & 270° & 360° \\ \hline
\text{Bogenmaß} & 0 & \frac{\pi}{6} & \frac{\pi}{4} & \frac{\pi}{3} & \frac{\pi}{2} & \frac{2\pi}{3} & \pi & \frac{3\pi}{2} & 2\pi
\end{array}$$

:::beispiel[Umrechnen in beide Richtungen]
1. $150°$ ins Bogenmaß: $150\cdot\frac{\pi}{180} = \frac{150\pi}{180}$. Wir kürzen mit $30$: $\frac{5\pi}{6} \approx 2{,}618$.
2. $x = 0{,}8$ in Grad: $0{,}8\cdot\frac{180°}{\pi} = \frac{144°}{\pi} \approx 45{,}84°$.
3. **Plausibilität:** $150°$ ist etwas weniger als $180° \,\hat{=}\, \pi \approx 3{,}14$, und $2{,}618$ ist etwas
   weniger als $3{,}14$. Ebenso sind $0{,}8$ rad etwas mehr als $\frac{\pi}{4} \approx 0{,}785$, also etwas mehr als $45°$.
:::

### Der Taschenrechner: DEG oder RAD

Der Taschenrechner hat zwei Modi. Im Modus **DEG** (degree, Grad) versteht er jede Eingabe als Grad. Im Modus
**RAD** (radiant) versteht er sie als Bogenmaß. Er warnt dich nicht, wenn der Modus nicht zur Aufgabe passt. Er
rechnet einfach etwas anderes aus.

:::achtung[Falscher Modus, falsches Ergebnis]
Gesucht ist $\sin 30°$. Steht der Rechner auf RAD, liefert $\sin(30)$ den Wert $-0{,}988$. Er hat den Sinus von
$30$ **Radiant** berechnet, also von etwa $1719°$.

Umgekehrt: Gesucht ist $\sin\frac{\pi}{6}$. Steht der Rechner auf DEG, liefert $\sin(\pi : 6)$ den Wert $0{,}0091$.
Er hat den Sinus von $0{,}52°$ berechnet. In beiden Fällen ist das richtige Ergebnis $0{,}5$.

**Die Gegenprobe kostet fünf Sekunden:** Tippe $\sin 30$. Kommt $0{,}5$, steht der Rechner auf DEG. Kommt
$-0{,}988$, steht er auf RAD.
:::

Welcher Modus ist wann richtig? Faustregel: Steht ein Gradzeichen da, oder geht es um Winkel in einem Dreieck, dann
DEG. Steht $\pi$ im Winkel, ist eine Funktion wie $f(x) = \sin x$ gegeben, oder geht es um Zeit in einer Schwingung,
dann RAD.

```aufgabe
id: tr-bm-check-modus
titel: Welcher Modus ist eingestellt?
art: check
niveau: 1
angabe: |
  Du tippst $\cos(60)$ und der Rechner zeigt $-0{,}952$. In welchem Modus steht er?
teile:
  - typ: auswahl
    optionen: ['RAD', 'DEG']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Im Modus DEG wäre $\cos 60° = 0{,}5$. Der Rechner hat also $60$ als Bogenmaß verstanden.'
loesung: |
  $\cos 60° = 0{,}5$ ist ein exakter Wert, den du kennst. Der Rechner zeigt etwas anderes.
  ---
  Er hat $\cos(60\text{ rad})$ berechnet, steht also auf RAD. Für Winkel in Grad musst du auf DEG umstellen.
```

### Bogenlänge und Kreissektor

Ein **Kreissektor** ist ein „Tortenstück“ eines Kreises. Er wird von zwei Radien und einem Bogen begrenzt. Auf
einem Kreis mit Radius $r$ ist alles $r$-mal so groß wie auf dem Einheitskreis. Ein Bogen zum Winkel $x$ ist dort also
$r\cdot x$ lang. Daraus folgen zwei Formeln.

:::merke[Bogenlänge und Sektorfläche]
Für einen Kreis mit Radius $r$ und einen Mittelpunktswinkel $x$ im **Bogenmaß** gilt:
$$b = r\cdot x \qquad\text{und}\qquad A_{\text{Sektor}} = \frac12\, r^2\, x.$$
Dabei ist $b$ die Bogenlänge und $A_{\text{Sektor}}$ die Fläche des Sektors. Im Gradmaß lauten dieselben Formeln
$b = \frac{\alpha}{360°}\cdot 2\pi r$ und $A_{\text{Sektor}} = \frac{\alpha}{360°}\cdot\pi r^2$.
:::

Die Sektorformel erklärt sich so: Der ganze Kreis hat die Fläche $\pi r^2$ und gehört zum Winkel $2\pi$. Der Sektor
ist der Anteil $\frac{x}{2\pi}$ davon, also $\frac{x}{2\pi}\cdot\pi r^2 = \frac12 r^2 x$.

:::beispiel[Ein Pizzastück]
Eine Pizza hat den Radius $16$ cm. Ein Stück hat an der Spitze einen Winkel von $50°$. Wie lang ist der Rand des
Stücks, und wie groß ist seine Fläche?

1. **Ins Bogenmaß umrechnen:** $x = 50\cdot\frac{\pi}{180} = \frac{5\pi}{18} \approx 0{,}8727$.
2. **Randlänge:** $b = 16\cdot 0{,}8727 \approx 13{,}96$ cm.
3. **Fläche:** $A = \frac12\cdot 16^2\cdot 0{,}8727 = 128\cdot 0{,}8727 \approx 111{,}70\text{ cm}^2$.
4. **Kontrolle im Gradmaß:** $\frac{50}{360}\cdot\pi\cdot 256 \approx 111{,}70\text{ cm}^2$. Es stimmt.
:::

:::achtung[Grad in die Bogenmaß-Formel eingesetzt]
Für das Pizzastück rechnet jemand $A = \frac12\cdot 16^2\cdot 50 = 6400\text{ cm}^2$. Das ist achtmal so viel wie die
ganze Pizza mit etwa $804\text{ cm}^2$. Die Formel $\frac12 r^2 x$ verlangt den Winkel im Bogenmaß.

Richtig ist $\frac12\cdot 256\cdot\frac{5\pi}{18} \approx 111{,}70\text{ cm}^2$. Eine schnelle Plausibilitätsprobe
fängt solche Fehler ab: Ein Stück ist immer kleiner als die ganze Pizza.
:::

### Sehne und Kreissegment

Eine **Sehne** ist die gerade Verbindung zweier Punkte auf dem Kreis. Ein **Kreissegment** ist das Flächenstück
zwischen Bogen und Sehne, wie die Wasserfläche in einem halb gefüllten Rohr.

Zieh vom Mittelpunkt die beiden Radien zu den Enden der Sehne. Es entsteht ein gleichschenkliges Dreieck mit der
Spitze im Mittelpunkt. Die Höhe von der Spitze auf die Sehne halbiert die Sehne und den Winkel $x$. Im halben Dreieck
ist der Radius die Hypotenuse und die halbe Sehne die Gegenkathete von $\frac x2$. Also gilt
$\frac{s}{2} = r\cdot\sin\frac{x}{2}$.

Für die Fläche brauchst du noch das Dreieck. Seine Höhe über dem einen Radius ist $r\cdot\sin x$, also hat es die
Fläche $\frac12 r\cdot r\sin x$. Das Segment ist der Sektor ohne dieses Dreieck.

```plot
x: [-1.4, 1.4]
y: [-0.5, 1.4]
gleich: true
kurven:
  - { x: "cos(t)", y: "sin(t)", t: [0, "2*pi"], farbe: 3 }
  - { x: "cos(t)", y: "sin(t)", t: ["pi/6", "5*pi/6"], farbe: 0 }
strecken:
  - { von: [0, 0], nach: ["cos(pi/6)", "sin(pi/6)"], farbe: 2 }
  - { von: [0, 0], nach: ["cos(5*pi/6)", "sin(5*pi/6)"], farbe: 2 }
  - { von: ["cos(5*pi/6)", "sin(5*pi/6)"], nach: ["cos(pi/6)", "sin(pi/6)"], farbe: 1 }
  - { von: [0, 0], nach: [0, 0.5], gestrichelt: true, farbe: 2 }
punkte:
  - { x: 0, y: 1.08, label: "Bogen" }
  - { x: 0.35, y: 0.42, label: "Sehne s" }
  - { x: 0, y: 0.72, label: "Segment" }
  - { x: 0.12, y: 0.18, label: "x" }
  - { x: 0.55, y: 0.18, label: "r" }
beschriftung: Kreis mit dem Mittelpunktswinkel x. Die beiden Radien (grün) und die Sehne (orange) bilden ein gleichschenkliges Dreieck. Die gestrichelte Höhe halbiert Sehne und Winkel. Das Segment ist das Stück zwischen Bogen (blau) und Sehne.
```

:::satz[Sehne und Kreissegment]
Für einen Kreis mit Radius $r$ und einen Mittelpunktswinkel $x$ im Bogenmaß mit $0 < x \le \pi$ gilt:
$$s = 2r\cdot\sin\frac{x}{2} \qquad\text{und}\qquad A_{\text{Segment}} = \frac12\, r^2\,(x - \sin x).$$
Dabei ist $s$ die Länge der Sehne und $A_{\text{Segment}}$ die Fläche zwischen Bogen und Sehne.
:::

:::beispiel[Wasser in einem Rohr]
Ein Abwasserrohr hat den Innenradius $0{,}5$ m. Das Wasser füllt ein Segment mit dem Mittelpunktswinkel $120°$.
Wie breit ist die Wasseroberfläche, und wie groß ist die Querschnittsfläche des Wassers?

1. **Bogenmaß:** $120° = \frac{2\pi}{3} \approx 2{,}0944$.
2. **Wasseroberfläche** (die Sehne): $s = 2\cdot 0{,}5\cdot\sin 60° \approx 0{,}866$ m.
3. **Sektor:** $\frac12\cdot 0{,}5^2\cdot 2{,}0944 \approx 0{,}2618\text{ m}^2$.
4. **Dreieck:** $\frac12\cdot 0{,}5^2\cdot\sin 120° \approx 0{,}1083\text{ m}^2$.
5. **Segment:** $0{,}2618 - 0{,}1083 \approx 0{,}1535\text{ m}^2$.

**Antwort:** Die Oberfläche ist etwa $0{,}87$ m breit, das Wasser hat etwa $0{,}15\text{ m}^2$ Querschnitt.
:::

**Bogen und Sehne im Vergleich.** Der Bogen ist immer länger als die Sehne, denn die gerade Verbindung ist der
kürzeste Weg. Bei kleinen Winkeln ist der Unterschied aber winzig. Am Einheitskreis ist bei $x = 0{,}2$ der Bogen
$0{,}2$ lang und die Sehne $2\sin 0{,}1 \approx 0{,}1997$. Daraus folgt die wichtige Näherung $\sin x \approx x$ für
kleine $x$ im Bogenmaß. Sie gilt **nur** im Bogenmaß. Deshalb wird in der Analysis immer im Bogenmaß gerechnet, siehe
[Kapitel 12, Standardgrenzwerte](/lernen/mathe3/grenzwerte-stetigkeit/einschliessungssatz-und-standardgrenzwerte).

:::merke[Rezept: Aufgaben zu Kreisteilen]
1. Skizze: Kreis, Mittelpunktswinkel, gesuchtes Stück (Bogen, Sektor, Sehne, Segment) markieren.
2. Den Winkel ins Bogenmaß umrechnen, wenn du die Formeln $b = rx$ oder $\frac12 r^2 x$ verwendest.
3. Für die Sehne das gleichschenklige Dreieck halbieren: $s = 2r\sin\frac x2$.
4. Segment gleich Sektor minus Dreieck.
5. Plausibilität: Teilstücke sind kleiner als der ganze Kreis, die Sehne ist kürzer als der Bogen.
:::

```reflexion
frage: Warum ist das Bogenmaß „natürlicher“ als das Gradmaß, obwohl Grad im Alltag viel üblicher sind?
antwort: |
  Im Bogenmaß kommen die Formeln ohne Umrechnungsfaktor aus. Die Bogenlänge ist einfach $r\cdot x$, die Sektorfläche
  $\frac12 r^2 x$, und für kleine Winkel gilt $\sin x \approx x$. In Grad stünde überall der Faktor $\frac{\pi}{180}$.
  Später zeigt sich dasselbe beim Ableiten: Nur im Bogenmaß ist die Ableitung von $\sin x$ genau $\cos x$. Das Gradmaß
  ist dagegen eine Vereinbarung, die auf die Zahl $360$ der Babylonier zurückgeht.
```

```aufgabe
id: tr-grad-bogenmass
titel: Grad und Bogenmaß umrechnen
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  a) Rechne $135°$ und $225°$ ins Bogenmaß um. Du kannst exakt mit `pi` oder auf drei Nachkommastellen eingeben.

  b) Rechne $x = 2{,}5$ (Bogenmaß) in Grad um. Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    label: 'a) $135°$'
    loesung: "135*pi/180"
    anzeige: '\tfrac{3\pi}{4} \approx 2{,}356'
    fehler:
      - wert: "135*180/pi"
        meldung: 'Du hast mit dem falschen Faktor multipliziert. Von Grad ins Bogenmaß rechnest du mit $\frac{\pi}{180}$. Das Ergebnis muss kleiner als $2\pi \approx 6{,}28$ sein.'
  - typ: zahl
    label: 'a) $225°$'
    loesung: "225*pi/180"
    anzeige: '\tfrac{5\pi}{4} \approx 3{,}927'
  - typ: zahl
    label: 'b) $2{,}5$ rad'
    einheit: °
    loesung: "2.5*180/pi"
    anzeige: '143{,}24'
    fehler:
      - wert: "2.5*pi/180"
        meldung: 'Das ist die Umrechnung in die falsche Richtung. Von Bogenmaß in Grad multiplizierst du mit $\frac{180°}{\pi}$.'
hinweise:
  - '$180° \,\hat{=}\, \pi$. Von Grad ins Bogenmaß mit $\frac{\pi}{180°}$, zurück mit $\frac{180°}{\pi}$ multiplizieren.'
loesung: |
  **Ansatz:** Aus $180° \,\hat{=}\, \pi$ folgen die Faktoren $\frac{\pi}{180°}$ und $\frac{180°}{\pi}$.
  ---
  a) $135° = 135\cdot\frac{\pi}{180} = \frac{3\pi}{4} \approx 2{,}356$ (gekürzt mit $45$) und $225° = \frac{225\pi}{180} = \frac{5\pi}{4} \approx 3{,}927$.
  ---
  b) $2{,}5\cdot\frac{180°}{\pi} \approx 143{,}24°$. **Plausibilität:** $2{,}5$ liegt etwas unter $\pi \approx 3{,}14$, also liegt der Winkel etwas unter $180°$.
```

```aufgabe
id: tr-bogenlaenge
titel: Bogenlänge und Sektorfläche
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Ein Kreissektor hat den Radius $r = 5$ cm und den Mittelpunktswinkel $72°$. Berechne Bogenlänge und Fläche.
  Exakte Eingabe mit `pi` ist möglich.
teile:
  - typ: zahl
    label: 'Bogenlänge'
    einheit: cm
    loesung: "5*72*pi/180"
    anzeige: '2\pi \approx 6{,}28'
    fehler:
      - wert: "5*72"
        meldung: 'Die Formel $b = r\cdot x$ braucht den Winkel im Bogenmaß. $72$ ist der Winkel in Grad.'
  - typ: zahl
    label: 'Fläche'
    einheit: 'cm²'
    loesung: "0.5*25*72*pi/180"
    anzeige: '5\pi \approx 15{,}71'
    fehler:
      - wert: "0.5*25*72"
        meldung: 'Auch die Flächenformel $\frac12 r^2 x$ braucht das Bogenmaß. Rechne $72°$ zuerst um.'
      - wert: "25*72*pi/180"
        meldung: 'Der Faktor $\frac12$ fehlt. Kontrolle: Der Sektor ist ein Fünftel des Kreises, also $\frac{25\pi}{5}$.'
hinweise:
  - '$72° = \frac{72}{180}\pi = \frac{2\pi}{5}$.'
loesung: |
  **Ansatz:** Winkel ins Bogenmaß umrechnen, dann $b = r x$ und $A = \frac12 r^2 x$.
  ---
  $x = \frac{72\pi}{180} = \frac{2\pi}{5}$. Bogenlänge: $b = 5\cdot\frac{2\pi}{5} = 2\pi \approx 6{,}28$ cm.
  ---
  Fläche: $A = \frac12\cdot 25\cdot\frac{2\pi}{5} = 5\pi \approx 15{,}71\text{ cm}^2$. **Kontrolle:** $72°$ ist ein Fünftel von $360°$, und $\frac{\pi\cdot 25}{5} = 5\pi$.
```

```aufgabe
id: tr-bm-modus
titel: Den Modus erkennen und korrigieren
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  Für ein Dreieck brauchst du $\sin 40°$. Dein Rechner zeigt bei $\sin(40)$ den Wert $0{,}7451$.

  a) In welchem Modus steht der Rechner?

  b) Welcher Wert ist richtig? Runde auf vier Nachkommastellen.
teile:
  - typ: auswahl
    label: 'a) Modus'
    optionen: ['RAD', 'DEG']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Im Modus DEG müsste $\sin 40°$ zwischen $\sin 30° = 0{,}5$ und $\sin 45° \approx 0{,}707$ liegen. $0{,}7451$ liegt darüber.'
  - typ: zahl
    label: 'b) $\sin 40°$'
    loesung: "sin(inRad(40))"
    anzeige: '0{,}6428'
    fehler:
      - wert: "sin(40)"
        meldung: 'Das ist der Wert im Modus RAD, also der Sinus von $40$ Radiant. Stell auf DEG um.'
hinweise:
  - 'Schätze ab: $\sin 40°$ liegt zwischen $\sin 30° = 0{,}5$ und $\sin 45° \approx 0{,}707$.'
loesung: |
  **Ansatz:** Mit bekannten Werten abschätzen. Weil der Sinus zwischen $0°$ und $90°$ wächst, liegt $\sin 40°$ zwischen $0{,}5$ und $0{,}707$.
  ---
  $0{,}7451$ liegt außerhalb, also stand der Rechner auf RAD. Im Modus DEG ergibt sich $\sin 40° \approx 0{,}6428$, und das liegt im erwarteten Bereich.
```

```aufgabe
id: tr-bm-sehne
titel: Sehne und Bogen vergleichen
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Ein Kreis hat den Radius $8$ cm. Zwei Punkte auf dem Kreis schließen den Mittelpunktswinkel $75°$ ein.
  Berechne die Länge der Sehne und die Länge des Bogens zwischen den Punkten (zwei Nachkommastellen).
teile:
  - typ: zahl
    label: 'Sehne'
    einheit: cm
    loesung: "2*8*sin(inRad(37.5))"
    anzeige: '9{,}74'
    fehler:
      - wert: "2*8*sin(inRad(75))"
        meldung: 'Im halben Dreieck gehört zur halben Sehne der **halbe** Winkel $37{,}5°$, nicht der ganze.'
      - wert: "8*sin(inRad(37.5))"
        meldung: 'Das ist nur die halbe Sehne. Die Höhe halbiert die Sehne, du musst also verdoppeln.'
  - typ: zahl
    label: 'Bogen'
    einheit: cm
    loesung: "8*75*pi/180"
    anzeige: '10{,}47'
hinweise:
  - 'Zeichne die beiden Radien zu den Enden der Sehne. Die Höhe vom Mittelpunkt halbiert Sehne und Winkel.'
  - 'Halbe Sehne $= r\cdot\sin\frac{x}{2}$. Für den Bogen den Winkel ins Bogenmaß umrechnen und $b = r x$ verwenden.'
loesung: |
  **Ansatz:** Das gleichschenklige Dreieck aus den beiden Radien und der Sehne wird durch seine Höhe halbiert. Im halben Dreieck ist der Radius die Hypotenuse.
  ---
  Halbe Sehne: $8\cdot\sin 37{,}5° \approx 4{,}870$ cm. Sehne: $s \approx 9{,}74$ cm.
  ---
  Bogen: $75° = \frac{5\pi}{12} \approx 1{,}309$, also $b = 8\cdot 1{,}309 \approx 10{,}47$ cm.
  ---
  **Plausibilität:** Der Bogen ist länger als die Sehne, wie es sein muss.
```

```aufgabe
id: tr-bm-segment-gefuehrt
titel: Ein Kreissegment Schritt für Schritt
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Aus einer kreisrunden Scheibe mit Radius $10$ cm wird ein Segment mit dem Mittelpunktswinkel $90°$ abgeschnitten.
  Wie groß ist die Fläche des Segments? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    label: 'Segmentfläche'
    einheit: 'cm²'
    loesung: "0.5*100*(pi/2 - 1)"
    anzeige: '28{,}54'
    fehler:
      - wert: "0.5*100*pi/2"
        meldung: 'Das ist der ganze Sektor. Das Segment ist der Sektor **ohne** das Dreieck zwischen den beiden Radien.'
      - wert: "0.5*100*(90 - 1)"
        meldung: 'In der Formel $\frac12 r^2 (x - \sin x)$ muss $x$ im Bogenmaß stehen.'
hinweise:
  - 'Segment gleich Sektor minus Dreieck. Rechne den Winkel ins Bogenmaß um.'
  - 'Bei $90°$ ist das Dreieck rechtwinklig mit den Katheten $10$ cm und $10$ cm.'
loesung: |
  **Ansatz:** Das Segment ist der Sektor ohne das Dreieck, das die beiden Radien mit der Sehne bilden.
  ---
  Bogenmaß: $90° = \frac{\pi}{2}$. Sektor: $\frac12\cdot 100\cdot\frac{\pi}{2} = 25\pi \approx 78{,}54\text{ cm}^2$.
  ---
  Dreieck: Bei $90°$ stehen die Radien senkrecht, also $\frac12\cdot 10\cdot 10 = 50\text{ cm}^2$. Die Formel liefert dasselbe: $\frac12\cdot 100\cdot\sin 90° = 50$.
  ---
  Segment: $78{,}54 - 50 \approx 28{,}54\text{ cm}^2$.
gefuehrt:
  - text: 'Rechne $90°$ ins Bogenmaß um.'
    teil: { typ: zahl, loesung: "pi/2", fehler: [ { wert: "90", meldung: 'Das ist noch das Gradmaß. Multipliziere mit $\frac{\pi}{180}$.' } ] }
    erklaerung: '$90° = \frac{\pi}{2} \approx 1{,}571$.'
  - text: 'Berechne die Fläche des Sektors.'
    teil: { typ: zahl, einheit: 'cm²', loesung: "0.5*100*pi/2" }
    erklaerung: '$\frac12\cdot 10^2\cdot\frac{\pi}{2} = 25\pi \approx 78{,}54\text{ cm}^2$, ein Viertel der Scheibe.'
  - text: 'Berechne die Fläche des Dreiecks aus den beiden Radien.'
    teil: { typ: zahl, einheit: 'cm²', loesung: "50" }
    erklaerung: 'Die Radien stehen senkrecht aufeinander, also $\frac12\cdot 10\cdot 10 = 50\text{ cm}^2$.'
  - text: 'Wie groß ist das Segment?'
    teil: { typ: zahl, einheit: 'cm²', loesung: "0.5*100*(pi/2 - 1)" }
    erklaerung: 'Sektor minus Dreieck: $78{,}54 - 50 \approx 28{,}54\text{ cm}^2$.'
```

```aufgabe
id: tr-bm-erde
titel: Entfernung auf der Erdkugel
niveau: 2
lernziel: 3
kompetenz: modellieren
angabe: |
  Zwei Orte liegen auf demselben Längenkreis der Erde, also genau nördlich und südlich voneinander. Ihre geografische
  Breite unterscheidet sich um $9°$. Die Erde wird als Kugel mit Radius $6371$ km angenommen. Wie weit sind die Orte
  entlang der Erdoberfläche voneinander entfernt? Runde auf ganze Kilometer.
teile:
  - typ: zahl
    label: 'Entfernung'
    einheit: km
    loesung: "6371*9*pi/180"
    anzeige: '1001'
    toleranz: 0.5
    fehler:
      - wert: "6371*9"
        meldung: 'In $b = r\cdot x$ muss der Winkel im Bogenmaß stehen. $57\,339$ km wäre mehr als der ganze Erdumfang.'
      - wert: "2*6371*sin(inRad(4.5))"
        meldung: 'Das ist die gerade Strecke durch die Erde hindurch, also die Sehne. Gefragt ist der Weg auf der Oberfläche, also der Bogen.'
hinweise:
  - 'Ein Längenkreis ist ein Kreis mit dem Erdradius um den Erdmittelpunkt. Der Breitenunterschied ist der Mittelpunktswinkel.'
  - 'Rechne $9°$ ins Bogenmaß um und verwende $b = r\cdot x$.'
loesung: |
  **Ansatz:** Beide Orte liegen auf einem Kreis mit Radius $6371$ km um den Erdmittelpunkt. Der Breitenunterschied $9°$ ist der Mittelpunktswinkel, die Entfernung ist der Bogen.
  ---
  $9° = 9\cdot\frac{\pi}{180} = \frac{\pi}{20} \approx 0{,}15708$.
  ---
  $b = 6371\cdot 0{,}15708 \approx 1001$ km. **Plausibilität:** Ein Grad Breite entspricht etwa $111$ km, und $9\cdot 111 = 999$. Das passt.
```

```aufgabe
id: tr-bm-sektor-rueckwaerts
titel: Radius und Winkel aus Bogen und Fläche
niveau: 3
lernziel: 3
kompetenz: modellieren
angabe: |
  Von einem Kreissektor sind die Bogenlänge $b = 12$ cm und die Fläche $A = 48\text{ cm}^2$ bekannt.

  a) Bestimme den Radius.

  b) Bestimme den Mittelpunktswinkel im Bogenmaß und in Grad (zwei Nachkommastellen).

  c) Wie lang ist die Sehne zu diesem Sektor? (zwei Nachkommastellen)
teile:
  - typ: zahl
    label: 'a) Radius'
    einheit: cm
    loesung: "2*48/12"
    fehler:
      - wert: "48/12"
        meldung: 'Aus $A = \frac12 r^2 x$ und $b = r x$ folgt $A = \frac12\, r\, b$. Der Faktor $\frac12$ fehlt in deiner Rechnung.'
  - typ: zahl
    label: 'b) Winkel im Bogenmaß'
    loesung: "12/8"
  - typ: zahl
    label: 'b) Winkel in Grad'
    einheit: °
    loesung: "1.5*180/pi"
    anzeige: '85{,}94'
  - typ: zahl
    label: 'c) Sehne'
    einheit: cm
    loesung: "2*8*sin(0.75)"
    anzeige: '10{,}91'
    fehler:
      - wert: "2*8*sin(inRad(0.75))"
        meldung: 'Der halbe Winkel $0{,}75$ ist schon im Bogenmaß. Rechne im Modus RAD oder setze $42{,}97°$ im Modus DEG ein.'
hinweise:
  - 'Setze $b = r x$ in $A = \frac12 r^2 x$ ein. Dann bleibt eine Formel mit $r$ und $b$.'
  - 'Mit dem Radius folgt der Winkel aus $x = \frac{b}{r}$. Für die Sehne brauchst du den halben Winkel.'
loesung: |
  **Ansatz:** Zwei Formeln, zwei Unbekannte. Wegen $b = r x$ ist $A = \frac12 r^2 x = \frac12\, r\,(r x) = \frac12\, r\, b$.
  ---
  a) $48 = \frac12\cdot r\cdot 12 = 6r$, also $r = 8$ cm.
  ---
  b) $x = \frac{b}{r} = \frac{12}{8} = 1{,}5$. In Grad: $1{,}5\cdot\frac{180°}{\pi} \approx 85{,}94°$.
  ---
  c) $s = 2\cdot 8\cdot\sin 0{,}75 \approx 16\cdot 0{,}6816 \approx 10{,}91$ cm, im Modus RAD. **Probe:** $\frac12\cdot 64\cdot 1{,}5 = 48$ und $8\cdot 1{,}5 = 12$. Die Sehne ist kürzer als der Bogen, das passt.
```

## Besondere Werte und Quadrantenbeziehungen

```aufgabe
id: tr-bw-check-diagonale
titel: Die Diagonale im Einheitsquadrat
art: check
niveau: 1
angabe: |
  Ein Quadrat hat die Seitenlänge $1$. Wie lang ist seine Diagonale? Zum Nachlesen:
  [Kapitel 1, Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln).
teile:
  - typ: zahl
    loesung: "sqrt(2)"
    anzeige: '\sqrt2 \approx 1{,}414'
    fehler:
      - wert: "2"
        meldung: 'Das ist das **Quadrat** der Diagonale: $1^2 + 1^2 = 2$. Die Diagonale selbst ist die Wurzel daraus.'
loesung: |
  Die Diagonale ist die Hypotenuse eines rechtwinkligen Dreiecks mit zwei Katheten der Länge $1$.
  ---
  Pythagoras: $d^2 = 1^2 + 1^2 = 2$, also $d = \sqrt2 \approx 1{,}414$.
```

**Worum geht es?** Für einige Winkel kennt man Sinus und Kosinus **exakt**, also als Bruch mit Wurzeln statt als
gerundete Dezimalzahl. In der Prüfung werden sie ohne Taschenrechner erwartet. Du lernst hier, sie aus zwei
einfachen Dreiecken herzuleiten. Dann musst du sie nicht stur auswendig lernen. Danach überträgst du sie mit
Spiegelungen auf alle vier Quadranten.

### Exakte Werte aus zwei Dreiecken

**Der Winkel $45°$.** Halbiere ein Quadrat mit Seite $1$ entlang der Diagonale. Es entsteht ein rechtwinkliges
Dreieck mit zwei Katheten der Länge $1$, zwei Winkeln von $45°$ und der Hypotenuse $\sqrt2$. Also ist
$\sin 45° = \cos 45° = \frac{1}{\sqrt2}$. Erweitert mit $\sqrt2$ wird daraus $\frac{\sqrt2}{2} \approx 0{,}707$. Der
Tangens ist $\frac11 = 1$.

**Die Winkel $30°$ und $60°$.** Nimm ein gleichseitiges Dreieck mit Seite $2$. Alle Winkel sind $60°$. Die Höhe
halbiert die Grundseite und den Winkel an der Spitze. So entsteht ein rechtwinkliges Dreieck mit der Hypotenuse $2$,
der kurzen Kathete $1$ und den Winkeln $30°$ und $60°$. Die Höhe ist $\sqrt{2^2 - 1^2} = \sqrt3$. Die kurze
Kathete liegt dem $30°$-Winkel gegenüber, die Höhe dem $60°$-Winkel.

```plot
x: [-0.3, 2.6]
y: [-0.3, 2.2]
gleich: true
strecken:
  - { von: [0, 0], nach: [2, 0], farbe: 0 }
  - { von: [2, 0], nach: [1, "sqrt(3)"], farbe: 0 }
  - { von: [0, 0], nach: [1, "sqrt(3)"], farbe: 0 }
  - { von: [1, 0], nach: [1, "sqrt(3)"], farbe: 1, gestrichelt: true }
punkte:
  - { x: 0.5, y: -0.12, label: "1" }
  - { x: 1.12, y: 0.85, label: "√3" }
  - { x: 0.35, y: 1.0, label: "2" }
  - { x: 0.25, y: 0.1, label: "60°" }
  - { x: 1.08, y: 1.45, label: "30°" }
beschriftung: Die Höhe teilt das gleichseitige Dreieck mit Seitenlänge 2 in zwei rechtwinklige Dreiecke mit den Seiten 1, √3 und 2. Die Seite 1 liegt dem 30°-Winkel gegenüber, die Höhe √3 dem 60°-Winkel.
```

:::beispiel[Werte aus dem halben gleichseitigen Dreieck ablesen]
Im halben gleichseitigen Dreieck gilt:

- $\sin 30° = \frac{\text{Gegenkathete}}{\text{Hypotenuse}} = \frac12$ und $\cos 30° = \frac{\sqrt3}{2} \approx 0{,}866$.
- $\sin 60° = \frac{\sqrt3}{2}$ und $\cos 60° = \frac12$. Sinus und Kosinus tauschen die Rollen, weil
  $60° = 90° - 30°$ ist.
- $\tan 30° = \frac{1}{\sqrt3} = \frac{\sqrt3}{3} \approx 0{,}577$ und $\tan 60° = \frac{\sqrt3}{1} = \sqrt3 \approx 1{,}732$.

Zur Kontrolle der trigonometrische Pythagoras: $\left(\frac12\right)^2 + \left(\frac{\sqrt3}{2}\right)^2 = \frac14 + \frac34 = 1$.
:::

Dazu kommen die Werte am Rand. Bei $0°$ ist der Punkt am Einheitskreis $(1 \mid 0)$, bei $90°$ ist er $(0 \mid 1)$.

:::merke[Wertetabelle]
$$\begin{array}{c|ccccc}
\alpha & 0° & 30° & 45° & 60° & 90° \\
\text{Bogenmaß} & 0 & \frac{\pi}{6} & \frac{\pi}{4} & \frac{\pi}{3} & \frac{\pi}{2} \\ \hline
\sin\alpha & 0 & \frac12 & \frac{\sqrt2}{2} & \frac{\sqrt3}{2} & 1 \\
\cos\alpha & 1 & \frac{\sqrt3}{2} & \frac{\sqrt2}{2} & \frac12 & 0 \\
\tan\alpha & 0 & \frac{\sqrt3}{3} & 1 & \sqrt3 & \text{nicht definiert}
\end{array}$$
**Eselsbrücke:** Der Sinus ist der Reihe nach $\frac{\sqrt0}{2}, \frac{\sqrt1}{2}, \frac{\sqrt2}{2}, \frac{\sqrt3}{2}, \frac{\sqrt4}{2}$.
Der Kosinus ist dieselbe Folge rückwärts.
:::

:::achtung[Den Bezugswinkel von 90° aus gemessen]
Gesucht ist $\sin 120°$. Jemand rechnet: „$120° - 90° = 30°$, also $\sin 120° = \sin 30° = \frac12$.“ Das ist falsch.
Er hat den Winkel zur $y$-Achse gemessen. Zurückführen muss man aber auf den spitzen Winkel zwischen Schenkel und
**$x$-Achse**. Dieser Winkel heißt **Bezugswinkel**.

$120°$ liegt $60°$ vor $180°$. Der Bezugswinkel ist also $60°$, und $\sin 120° = \sin 60° = \frac{\sqrt3}{2}$. Die
Gegenprobe mit dem Rechner zeigt $0{,}866$, nicht $0{,}5$.
:::

```aufgabe
id: tr-bw-check-tabelle
titel: Einen Wert aus der Tabelle
art: check
niveau: 1
angabe: |
  Welcher Wert ist $\cos 30°$?
teile:
  - typ: auswahl
    optionen: ['$\frac{\sqrt3}{2}$', '$\frac12$', '$\frac{\sqrt2}{2}$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$\frac12$ ist $\sin 30°$ oder $\cos 60°$. Im halben gleichseitigen Dreieck liegt am $30°$-Winkel die lange Kathete $\sqrt3$ an.'
      - wert: 2
        meldung: '$\frac{\sqrt2}{2}$ gehört zu $45°$.'
loesung: |
  Im halben gleichseitigen Dreieck liegt am $30°$-Winkel die Höhe $\sqrt3$ an. Die Hypotenuse ist $2$.
  ---
  Also $\cos 30° = \frac{\sqrt3}{2} \approx 0{,}866$.
```

### Quadrantenbeziehungen

Jeder Winkel lässt sich auf einen Winkel im I. Quadranten zurückführen, seinen **Bezugswinkel**. Das ist der spitze
Winkel zwischen dem gedrehten Schenkel und der $x$-Achse. Für $150°$ ist er $30°$, für $240°$ ist er $60°$. Dazu
nutzt du die Symmetrie des Einheitskreises. Ist $\alpha$ spitz, dann liegen die Punkte zu $180° - \alpha$, $180° + \alpha$ und $360° - \alpha$
spiegelbildlich zu $P_\alpha$. Ihre Koordinaten haben dieselben Beträge, nur die Vorzeichen ändern sich.

:::satz[Quadrantenbeziehungen]
Für jeden Winkel $\alpha$ gilt (die Spalte $\tan$ überall dort, wo der Tangens definiert ist):
$$\begin{array}{l|l|ccc}
\text{Winkel} & \text{Spiegelung von } P_\alpha & \sin & \cos & \tan \\ \hline
180° - \alpha & \text{an der } y\text{-Achse} & \sin\alpha & -\cos\alpha & -\tan\alpha \\
180° + \alpha & \text{am Ursprung} & -\sin\alpha & -\cos\alpha & \tan\alpha \\
360° - \alpha & \text{an der } x\text{-Achse} & -\sin\alpha & \cos\alpha & -\tan\alpha \\
90° - \alpha & \text{an der Winkelhalbierenden} & \cos\alpha & \sin\alpha & \frac{1}{\tan\alpha}
\end{array}$$
:::

Du musst die Tabelle nicht auswendig lernen. Eine Skizze zeigt sofort, welche Koordinate das Vorzeichen wechselt.

Die wichtigste Zeile ist die erste: $\sin(180° - \alpha) = \sin\alpha$. **Zwei verschiedene Winkel zwischen $0°$ und
$180°$ haben denselben Sinus.** Das hat zwei Folgen, die immer wieder auftauchen. Die Gleichung $\sin x = 0{,}3$ hat
zwischen $0°$ und $360°$ zwei Lösungen. Und beim Sinussatz kann es zwei passende Dreiecke geben.

### Winkel über 360° und negative Winkel

Ein Winkel von $405°$ bedeutet eine volle Umdrehung plus $45°$. Der Punkt am Kreis ist derselbe wie bei $45°$. Ein
Winkel von $-90°$ dreht im Uhrzeigersinn und landet bei $(0 \mid -1)$, also dort, wo auch $270°$ landet. Allgemein
gilt: Zwei Winkel beschreiben genau dann denselben Punkt, wenn sie sich um ein ganzzahliges Vielfaches von $360°$
unterscheiden. Solche Winkel sind keine Spielerei. Ein Rad, das sich dreimal gedreht hat, hat $1080°$ zurückgelegt.

:::beispiel[Vier Werte exakt bestimmen]
1. $\sin 150°$: II. Quadrant, dort ist der Sinus positiv. Bezugswinkel $180° - 150° = 30°$. Also $\sin 150° = \frac12$.
2. $\cos 240°$: III. Quadrant, Kosinus negativ. Bezugswinkel $240° - 180° = 60°$. Also $\cos 240° = -\frac12$.
3. $\tan 315°$: IV. Quadrant, Tangens negativ. Bezugswinkel $360° - 315° = 45°$. Also $\tan 315° = -1$.
4. $\sin(-750°)$: Zuerst $3\cdot 360° = 1080°$ addieren: $-750° + 1080° = 330°$. IV. Quadrant, Sinus negativ,
   Bezugswinkel $30°$. Also $\sin(-750°) = -\frac12$.
:::

:::beispiel[Kraftkomponenten exakt]
An einem Haken zieht eine Kraft von $50$ N unter $120°$ gegen die positive $x$-Achse. Wie groß sind ihre Anteile
in $x$- und $y$-Richtung?

1. Die Kraft ist ein Pfeil der Länge $50$ in Richtung $120°$. Seine Komponenten sind
   $F_x = 50\cdot\cos 120°$ und $F_y = 50\cdot\sin 120°$.
2. $120°$ liegt im II. Quadranten, Bezugswinkel $60°$. Also $\cos 120° = -\frac12$ und $\sin 120° = \frac{\sqrt3}{2}$.
3. $F_x = 50\cdot\left(-\frac12\right) = -25$ N und $F_y = 50\cdot\frac{\sqrt3}{2} = 25\sqrt3 \approx 43{,}30$ N.

**Antwort:** Die Kraft zieht mit $25$ N nach links und mit etwa $43{,}30$ N nach oben. Diese Zerlegung brauchst du in
der Physik ständig, etwa an der schiefen Ebene.
:::

:::merke[Rezept: Winkelfunktion eines beliebigen Winkels exakt]
1. Mit Vielfachen von $360°$ in den Bereich von $0°$ bis $360°$ bringen.
2. Den Quadranten bestimmen und daraus das Vorzeichen.
3. Den **Bezugswinkel** bestimmen, also den spitzen Winkel zur $x$-Achse: $\alpha$, $180° - \alpha$, $\alpha - 180°$
   oder $360° - \alpha$, je nach Quadrant.
4. Den Wert des Bezugswinkels aus der Wertetabelle nehmen und mit dem Vorzeichen versehen.
:::

:::achtung[Das Vorzeichen des Tangens im II. Quadranten]
Jemand rechnet: „$\tan 150° = \tan 30° = \frac{\sqrt3}{3}$.“ Der Bezugswinkel $30°$ stimmt. Aber im II. Quadranten ist
der Sinus positiv und der Kosinus negativ. Ihr Quotient ist negativ.

Richtig ist $\tan 150° = -\frac{\sqrt3}{3} \approx -0{,}577$. Am Kreis sieht man es auch so: Der Schenkel bei $150°$
fällt nach rechts ab, seine Steigung ist negativ.
:::

```reflexion
frage: Warum ist $\sin 150° = \sin 30°$, aber $\cos 150° = -\cos 30°$? Erkläre es mit einer Skizze am Einheitskreis, ohne Formeln.
antwort: |
  Der Punkt zu $150°$ ist das Spiegelbild des Punktes zu $30°$ an der $y$-Achse. Beim Spiegeln an der $y$-Achse
  bleibt die Höhe gleich: Beide Punkte liegen gleich hoch über der $x$-Achse, also haben sie denselben Sinus. Die
  waagrechte Lage kippt dagegen von rechts nach links: Der eine Punkt liegt $0{,}866$ rechts der $y$-Achse, der
  andere $0{,}866$ links davon. Deshalb haben die Kosinuswerte denselben Betrag, aber entgegengesetzte Vorzeichen.
```

```aufgabe
id: tr-exakte-werte
titel: Exakte Werte
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Gib exakt an. Eingabe zum Beispiel als `sqrt(3)/2`.
teile:
  - typ: zahl
    label: '$\sin 45°$'
    loesung: "sqrt(2)/2"
    anzeige: '\tfrac{\sqrt2}{2}'
    fehler:
      - wert: "1/2"
        meldung: '$\frac12$ gehört zu $30°$. Bei $45°$ ist das Dreieck ein halbes Quadrat mit Hypotenuse $\sqrt2$.'
  - typ: zahl
    label: '$\tan\frac{\pi}{4}$'
    loesung: "1"
    fehler:
      - wert: "tan(pi/4*pi/180)"
        meldung: 'Der Rechner stand auf DEG, während $\frac{\pi}{4}$ im Bogenmaß steht. Rechne um: $\frac{\pi}{4} = 45°$.'
  - typ: zahl
    label: '$\cos\frac{\pi}{2}$'
    loesung: "0"
    fehler:
      - wert: "1"
        meldung: 'Bei $\frac{\pi}{2} = 90°$ liegt der Punkt ganz oben, bei $(0 \mid 1)$. Der Kosinus ist die $x$-Koordinate.'
  - typ: zahl
    label: '$\sin 60°\cdot\cos 30°$'
    loesung: "3/4"
    anzeige: '\tfrac34'
    fehler:
      - wert: "1/4"
        meldung: 'Du hast für beide Faktoren $\frac12$ genommen. $\frac12$ ist aber $\sin 30°$ und $\cos 60°$. Hier sind beide Faktoren $\frac{\sqrt3}{2}$.'
hinweise:
  - 'Rechne Bogenmaß zuerst in Grad um. Leite die Werte aus dem halben Quadrat (Seiten $1$, $1$, $\sqrt2$) oder dem halben gleichseitigen Dreieck (Seiten $1$, $\sqrt3$, $2$) her.'
loesung: |
  **Ansatz:** Bogenmaß in Grad umrechnen und die passenden Seiten aus einem der beiden Dreiecke nehmen.
  ---
  $\sin 45° = \frac{1}{\sqrt2} = \frac{\sqrt2}{2}$ (halbes Quadrat). $\frac{\pi}{4} = 45°$, also $\tan\frac{\pi}{4} = \frac11 = 1$.
  ---
  $\frac{\pi}{2} = 90°$, der Punkt $(0 \mid 1)$, also $\cos\frac{\pi}{2} = 0$. Außerdem $\sin 60°\cdot\cos 30° = \frac{\sqrt3}{2}\cdot\frac{\sqrt3}{2} = \frac34$.
```

```aufgabe
id: tr-bw-cos330-gefuehrt
titel: Ein Wert im vierten Quadranten
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Bestimme $\cos 330°$ exakt.
teile:
  - typ: zahl
    label: '$\cos 330°$'
    loesung: "sqrt(3)/2"
    anzeige: '\tfrac{\sqrt3}{2}'
    fehler:
      - wert: "-sqrt(3)/2"
        meldung: '$330°$ liegt rechts unten. Rechts von der $y$-Achse ist der Kosinus positiv. Negativ ist dort der Sinus.'
      - wert: "1/2"
        meldung: 'Das ist $\cos 60°$. Der Bezugswinkel von $330°$ ist aber $360° - 330° = 30°$.'
hinweise:
  - 'Quadrant bestimmen, dann den Bezugswinkel zur $x$-Achse.'
loesung: |
  **Ansatz:** Rezept mit Quadrant, Vorzeichen und Bezugswinkel.
  ---
  $330°$ liegt im IV. Quadranten. Dort ist der Kosinus positiv. Bezugswinkel: $360° - 330° = 30°$.
  ---
  $\cos 330° = +\cos 30° = \frac{\sqrt3}{2}$.
gefuehrt:
  - text: 'In welchem Quadranten liegt $330°$? Gib die Nummer ein (1 bis 4).'
    teil: { typ: zahl, loesung: "4", fehler: [ { wert: "3", meldung: 'Der III. Quadrant endet bei $270°$.' } ] }
    erklaerung: '$270° < 330° < 360°$: IV. Quadrant, rechts unten.'
  - text: 'Welches Vorzeichen hat der Kosinus dort?'
    erklaerung: 'Rechts von der $y$-Achse ist die $x$-Koordinate positiv, also ist der Kosinus positiv.'
  - text: 'Wie groß ist der Bezugswinkel (in Grad)?'
    teil: { typ: zahl, einheit: °, loesung: "30", fehler: [ { wert: "60", meldung: 'Miss den Abstand zur $x$-Achse, nicht zur $y$-Achse: $360° - 330°$.' } ] }
    erklaerung: 'Der Abstand zur positiven $x$-Achse ist $360° - 330° = 30°$.'
  - text: 'Setze zusammen: Gib $\cos 330°$ exakt an.'
    teil: { typ: zahl, loesung: "sqrt(3)/2" }
    erklaerung: 'Positiv und Betrag $\cos 30° = \frac{\sqrt3}{2}$. Also $\cos 330° = \frac{\sqrt3}{2}$.'
```

```aufgabe
id: tr-quadrantenbeziehungen
titel: Werte in anderen Quadranten
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Bestimme exakt. Eingabe zum Beispiel als `-sqrt(2)/2`.
teile:
  - typ: zahl
    label: '$\sin 300°$'
    loesung: "-sqrt(3)/2"
    anzeige: '-\tfrac{\sqrt3}{2}'
    fehler:
      - wert: "sqrt(3)/2"
        meldung: '$300°$ liegt unter der $x$-Achse. Dort ist der Sinus negativ.'
      - wert: "-1/2"
        meldung: 'Der Bezugswinkel ist $360° - 300° = 60°$, nicht $30°$.'
  - typ: zahl
    label: '$\cos 135°$'
    loesung: "-sqrt(2)/2"
    anzeige: '-\tfrac{\sqrt2}{2}'
    fehler:
      - wert: "sqrt(2)/2"
        meldung: '$135°$ liegt links von der $y$-Achse. Dort ist der Kosinus negativ.'
  - typ: zahl
    label: '$\tan 210°$'
    loesung: "sqrt(3)/3"
    anzeige: '\tfrac{\sqrt3}{3}'
    fehler:
      - wert: "-sqrt(3)/3"
        meldung: 'Im III. Quadranten sind Sinus und Kosinus beide negativ. Ihr Quotient ist positiv.'
  - typ: zahl
    label: '$\cos(-420°)$'
    loesung: "1/2"
    fehler:
      - wert: "-1/2"
        meldung: '$-420° + 720° = 300°$ liegt rechts unten. Dort ist der Kosinus positiv. Außerdem gilt $\cos(-\alpha) = \cos\alpha$.'
hinweise:
  - 'Bring jeden Winkel zuerst in den Bereich von $0°$ bis $360°$.'
  - 'Dann Quadrant, Vorzeichen und Bezugswinkel zur $x$-Achse bestimmen.'
loesung: |
  **Ansatz:** Für jeden Winkel das Rezept anwenden: in $0°$ bis $360°$ bringen, Quadrant und Vorzeichen, Bezugswinkel.
  ---
  $300°$: IV. Quadrant, Sinus negativ, Bezugswinkel $60°$, also $\sin 300° = -\frac{\sqrt3}{2}$. $135°$: II. Quadrant, Kosinus negativ, Bezugswinkel $45°$, also $\cos 135° = -\frac{\sqrt2}{2}$.
  ---
  $210°$: III. Quadrant, Tangens positiv, Bezugswinkel $30°$, also $\tan 210° = \frac{\sqrt3}{3}$.
  ---
  $-420° + 2\cdot 360° = 300°$: IV. Quadrant, Kosinus positiv, Bezugswinkel $60°$, also $\cos(-420°) = \frac12$.
```

```aufgabe
id: tr-bogenmass-werte
titel: Exakte Werte im Bogenmaß
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Bestimme exakt.
teile:
  - typ: zahl
    label: '$\sin\frac{7\pi}{6}$'
    loesung: "sin(7*pi/6)"
    anzeige: '-\tfrac12'
    fehler:
      - wert: "1/2"
        meldung: '$\frac{7\pi}{6} = 210°$ liegt unter der $x$-Achse. Dort ist der Sinus negativ.'
  - typ: zahl
    label: '$\cos\frac{5\pi}{3}$'
    loesung: "cos(5*pi/3)"
    anzeige: '\tfrac12'
    fehler:
      - wert: "-1/2"
        meldung: '$\frac{5\pi}{3} = 300°$ liegt rechts von der $y$-Achse. Dort ist der Kosinus positiv.'
  - typ: zahl
    label: '$\tan\frac{3\pi}{4}$'
    loesung: "tan(3*pi/4)"
    anzeige: '-1'
    fehler:
      - wert: "1"
        meldung: '$\frac{3\pi}{4} = 135°$ liegt im II. Quadranten. Dort ist der Tangens negativ.'
hinweise:
  - 'Rechne zuerst um: $\frac{\pi}{6} = 30°$, also $\frac{7\pi}{6} = 210°$. Ebenso $\frac{5\pi}{3} = 300°$ und $\frac{3\pi}{4} = 135°$.'
  - 'Dann wie im Gradmaß: Quadrant, Vorzeichen, Bezugswinkel.'
loesung: |
  **Ansatz:** Ins Gradmaß umrechnen, dann das Rezept anwenden.
  ---
  $\frac{7\pi}{6} = 210°$: III. Quadrant, Bezugswinkel $30°$, Sinus negativ: $-\frac12$.
  ---
  $\frac{5\pi}{3} = 300°$: IV. Quadrant, Bezugswinkel $60°$, Kosinus positiv: $\frac12$. $\frac{3\pi}{4} = 135°$: II. Quadrant, Bezugswinkel $45°$, Tangens negativ: $-1$.
```

```aufgabe
id: tr-bw-grosse-winkel
titel: Große und negative Winkel
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Bestimme exakt.
teile:
  - typ: zahl
    label: '$\sin 1110°$'
    loesung: "1/2"
    fehler:
      - wert: "-1/2"
        meldung: '$1110° - 3\cdot 360° = 30°$. Das liegt im I. Quadranten, dort ist alles positiv.'
  - typ: zahl
    label: '$\cos(-495°)$'
    loesung: "-sqrt(2)/2"
    anzeige: '-\tfrac{\sqrt2}{2}'
    fehler:
      - wert: "sqrt(2)/2"
        meldung: '$-495° + 720° = 225°$ liegt links unten. Dort ist der Kosinus negativ.'
  - typ: zahl
    label: '$\tan\frac{13\pi}{6}$'
    loesung: "sqrt(3)/3"
    anzeige: '\tfrac{\sqrt3}{3}'
hinweise:
  - 'Ziehe ganze Umdrehungen ab oder addiere sie: $360°$ beziehungsweise $2\pi$.'
  - '$\frac{13\pi}{6} = 2\pi + \frac{\pi}{6}$.'
loesung: |
  **Ansatz:** Ganze Umdrehungen ändern den Punkt am Kreis nicht. Wir bringen jeden Winkel in den Bereich von $0°$ bis $360°$.
  ---
  $1110° - 3\cdot 360° = 30°$, also $\sin 1110° = \sin 30° = \frac12$.
  ---
  $-495° + 2\cdot 360° = 225°$: III. Quadrant, Bezugswinkel $45°$, Kosinus negativ: $\cos(-495°) = -\frac{\sqrt2}{2}$.
  ---
  $\frac{13\pi}{6} - 2\pi = \frac{\pi}{6}$, also $\tan\frac{13\pi}{6} = \tan 30° = \frac{\sqrt3}{3}$.
```

```aufgabe
id: tr-bw-fehler-finden
titel: Wo steckt der Fehler beim Tangens?
niveau: 2
lernziel: 2
kompetenz: begruenden
angabe: |
  Lena rechnet: „$\tan 120° = \tan 60° = \sqrt3$, weil $60°$ der Bezugswinkel ist.“

  a) Welche Aussage beschreibt ihren Fehler?

  b) Gib $\tan 120°$ exakt an.
teile:
  - typ: auswahl
    label: 'a) Fehler'
    optionen:
      - 'Der Bezugswinkel stimmt, aber im II. Quadranten ist der Tangens negativ.'
      - 'Der Bezugswinkel von $120°$ ist $30°$, nicht $60°$.'
      - 'Der Tangens von $120°$ ist nicht definiert.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$120°$ liegt $60°$ vor $180°$. Der Abstand zur $x$-Achse ist $60°$. Der Bezugswinkel stimmt also.'
      - wert: 2
        meldung: 'Nicht definiert ist der Tangens nur, wenn der Kosinus null ist, zwischen $0°$ und $360°$ also bei $90°$ und $270°$.'
  - typ: zahl
    label: 'b) $\tan 120°$'
    loesung: "-sqrt(3)"
    anzeige: '-\sqrt3'
    fehler:
      - wert: "sqrt(3)"
        meldung: 'Das ist Lenas Ergebnis. Prüfe das Vorzeichen: Sinus positiv, Kosinus negativ.'
hinweise:
  - 'Prüfe zuerst den Bezugswinkel, dann das Vorzeichen.'
  - 'Im II. Quadranten ist $\sin > 0$ und $\cos < 0$. Was folgt für den Quotienten?'
loesung: |
  **Ansatz:** Lenas Rechnung hat zwei Teile: den Bezugswinkel und das Vorzeichen. Wir prüfen beide.
  ---
  Bezugswinkel: $180° - 120° = 60°$. Das ist richtig.
  ---
  Vorzeichen: $120°$ liegt im II. Quadranten. Dort ist der Sinus positiv und der Kosinus negativ, der Tangens also negativ. Lena hat das Vorzeichen vergessen.
  ---
  Richtig ist $\tan 120° = -\sqrt3 \approx -1{,}732$. **Kontrolle am Kreis:** Der Schenkel bei $120°$ fällt nach rechts ab, seine Steigung ist negativ.
```

```aufgabe
id: tr-bw-ausdruck
titel: Ein Ausdruck ohne Taschenrechner
niveau: 3
lernziel: 2
kompetenz: rechnen
angabe: |
  Berechne exakt und ohne Taschenrechner:
  $$\sin^2 135° + \cos 300°\cdot\tan 225° - \sin(-330°).$$
teile:
  - typ: zahl
    loesung: "1/2"
    fehler:
      - wert: "3/2"
        meldung: 'Prüfe $\sin(-330°)$: $-330° + 360° = 30°$, also $\sin(-330°) = +\frac12$. Davor steht ein Minus.'
      - wert: "-1/2"
        meldung: 'Prüfe $\cos 300°$: $300°$ liegt rechts unten, dort ist der Kosinus positiv.'
hinweise:
  - 'Bestimme jeden der vier Werte einzeln mit Quadrant, Vorzeichen und Bezugswinkel.'
  - '$\sin^2 135°$ bedeutet $(\sin 135°)^2$. Das Quadrat ist immer positiv.'
loesung: |
  **Ansatz:** Jeden Wert einzeln exakt bestimmen und erst am Ende zusammenrechnen.
  ---
  $\sin 135° = \frac{\sqrt2}{2}$ (II. Quadrant, Bezugswinkel $45°$), also $\sin^2 135° = \frac24 = \frac12$.
  ---
  $\cos 300° = \frac12$ (IV. Quadrant, Kosinus positiv). $\tan 225° = 1$ (III. Quadrant, Tangens positiv, Bezugswinkel $45°$).
  ---
  $\sin(-330°) = \sin 30° = \frac12$, denn $-330° + 360° = 30°$.
  ---
  Zusammen: $\frac12 + \frac12\cdot 1 - \frac12 = \frac12$. **Kontrolle mit dem Rechner im Modus DEG:** $0{,}5$.
```

## Allgemeine Dreiecke: Sinussatz, Kosinussatz, Fläche

```aufgabe
id: tr-ad-check-stumpf
titel: Der Sinus eines stumpfen Winkels
art: check
niveau: 1
angabe: |
  Welche Aussage über $\sin 110°$ stimmt? Zum Nachlesen:
  [5.6 Besondere Werte und Quadrantenbeziehungen](/lernen/mathe3/trigonometrie/besondere-werte-und-quadrantenbeziehungen).
teile:
  - typ: auswahl
    optionen:
      - '$\sin 110° = \sin 70°$, also positiv'
      - '$\sin 110° = -\sin 70°$, also negativ'
      - '$\sin 110°$ ist nicht definiert, weil $110°$ stumpf ist'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$110°$ liegt im II. Quadranten, oberhalb der $x$-Achse. Dort ist der Sinus positiv. Negativ ist dort der Kosinus.'
      - wert: 2
        meldung: 'Am Einheitskreis ist der Sinus für jeden Winkel definiert, auch für stumpfe.'
loesung: |
  Es gilt $\sin(180° - \alpha) = \sin\alpha$. Mit $\alpha = 70°$ folgt $\sin 110° = \sin 70° \approx 0{,}940$.
  ---
  Der Sinus stumpfer Winkel ist also positiv. Das brauchst du gleich für Dreiecke mit einem stumpfen Winkel.
```

**Worum geht es?** In der Vermessung und in der Technik sind Dreiecke selten rechtwinklig. Mit zwei Sätzen kannst du
trotzdem **jedes** Dreieck berechnen, sobald drei passende Stücke bekannt sind. Die Bezeichnungen sind wie üblich: Die
Seiten $a$, $b$, $c$ liegen den Ecken $A$, $B$, $C$ gegenüber. Die Winkel bei diesen Ecken heißen $\alpha$, $\beta$,
$\gamma$. Ihre Summe ist $\alpha + \beta + \gamma = 180°$.

### Die Flächenformel

Die Schulformel „Grundlinie mal Höhe durch zwei“ braucht eine Höhe. Die kennt man oft nicht. Zeichne die Höhe $h_c$
von $C$ auf die Seite $c$. Bei $A$ entsteht ein rechtwinkliges Dreieck mit der Hypotenuse $b$. Die Höhe liegt dem
Winkel $\alpha$ gegenüber, also ist $h_c = b\cdot\sin\alpha$. Das gilt auch für stumpfes $\alpha$. Dann liegt der
Fußpunkt der Höhe außerhalb des Dreiecks, und man verwendet $\sin(180° - \alpha) = \sin\alpha$.

:::satz[Flächeninhalt eines Dreiecks]
$$A = \frac12\, b\, c\,\sin\alpha = \frac12\, a\, c\,\sin\beta = \frac12\, a\, b\,\sin\gamma.$$
In Worten: Die Fläche ist das halbe Produkt zweier Seiten mal dem Sinus des Winkels, den **diese beiden Seiten
einschließen**.
:::

Für $\gamma = 90°$ ist $\sin\gamma = 1$, und es bleibt die bekannte Formel $\frac12 ab$ für rechtwinklige Dreiecke.

:::beispiel[Ein dreieckiges Grundstück]
Zwei Grenzen eines dreieckigen Grundstücks sind $45$ m und $62$ m lang. Sie treffen sich an einem Grenzstein unter
$73°$. Wie groß ist das Grundstück?

1. Die beiden Seiten schließen den Winkel $73°$ ein. Die Flächenformel passt also direkt.
2. $A = \frac12\cdot 45\cdot 62\cdot\sin 73° \approx 1395\cdot 0{,}9563 \approx 1334{,}05\text{ m}^2$.
3. **Plausibilität:** Mit einem rechten Winkel wären es $1395\text{ m}^2$. Ein Winkel nahe bei $90°$ gibt etwas weniger.

**Nichtbeispiel:** Wäre der $73°$-Winkel an einer anderen Ecke gemessen, also nicht zwischen den beiden bekannten
Seiten, dann dürfte man die Formel so **nicht** anwenden.
:::

### Der Sinussatz

:::satz[Sinussatz]
In jedem Dreieck gilt
$$\frac{a}{\sin\alpha} = \frac{b}{\sin\beta} = \frac{c}{\sin\gamma}.$$
In Worten: Jede Seite geteilt durch den Sinus des **gegenüberliegenden** Winkels ergibt dieselbe Zahl.
:::

:::beweis
Die Flächenformel liefert dreimal denselben Flächeninhalt:
$$\tfrac12\, b\,c\,\sin\alpha = \tfrac12\, a\,c\,\sin\beta = \tfrac12\, a\,b\,\sin\gamma.$$
Wir multiplizieren alle drei Ausdrücke mit $\frac{2}{abc}$. Dabei kürzen sich in jedem Ausdruck zwei Seiten weg:
$$\frac{\sin\alpha}{a} = \frac{\sin\beta}{b} = \frac{\sin\gamma}{c}.$$
Nimmt man von allen drei Brüchen den Kehrwert, steht der Sinussatz da.
:::

Der Sinussatz braucht immer ein **Paar** aus einer Seite und dem Winkel gegenüber. Mit diesem Paar und einem weiteren
Stück rechnest du weiter. Typisch ist der Fall **WSW**: zwei Winkel und eine Seite. Den dritten Winkel liefert die
Winkelsumme.

:::beispiel[Ein Leuchtfeuer anpeilen]
Zwei Beobachtungsposten $A$ und $B$ liegen $c = 500$ m auseinander. Sie peilen ein Leuchtfeuer $C$ an. Bei $A$ misst
man $\alpha = 52°$, bei $B$ misst man $\beta = 71°$. Wie weit ist das Leuchtfeuer von beiden Posten entfernt?

1. **Dritter Winkel:** $\gamma = 180° - 52° - 71° = 57°$.
2. **Paar:** Seite $c = 500$ m und der gegenüberliegende Winkel $\gamma = 57°$ sind bekannt.
3. **Entfernung von $B$**, das ist die Seite $a$ gegenüber von $\alpha$:
   $a = \frac{c\cdot\sin\alpha}{\sin\gamma} = \frac{500\cdot\sin 52°}{\sin 57°} \approx \frac{394{,}01}{0{,}8387} \approx 469{,}80$ m.
4. **Entfernung von $A$**, das ist $b$: $b = \frac{500\cdot\sin 71°}{\sin 57°} \approx 563{,}70$ m.
5. **Plausibilität:** Dem größten Winkel $\beta = 71°$ liegt die längste Seite $b$ gegenüber. Es passt.
:::

### Der Kosinussatz

:::satz[Kosinussatz]
In jedem Dreieck gilt
$$c^2 = a^2 + b^2 - 2ab\cos\gamma$$
und ebenso $a^2 = b^2 + c^2 - 2bc\cos\alpha$ und $b^2 = a^2 + c^2 - 2ac\cos\beta$.
:::

Der Kosinussatz ist ein **verallgemeinerter Pythagoras**. Für $\gamma = 90°$ ist $\cos\gamma = 0$, und es bleibt
$c^2 = a^2 + b^2$. Der Zusatzterm $-2ab\cos\gamma$ korrigiert für alle anderen Winkel. Bei spitzem $\gamma$ ist er
negativ, $c$ wird kürzer als beim rechten Winkel. Bei stumpfem $\gamma$ ist er positiv, $c$ wird länger.

:::beweis
Lege $C$ in den Ursprung und $B$ auf die positive $x$-Achse: $C(0 \mid 0)$ und $B(a \mid 0)$. Der Punkt $A$ hat vom
Ursprung den Abstand $b$ und liegt unter dem Winkel $\gamma$. Am Einheitskreis, gestreckt mit dem Faktor $b$, sind
seine Koordinaten $A(b\cos\gamma \mid b\sin\gamma)$. Die Seite $c$ ist der Abstand von $A$ und $B$. Mit Pythagoras:
$$\begin{aligned}
c^2 &= (b\cos\gamma - a)^2 + (b\sin\gamma)^2 \\
&= b^2\cos^2\gamma - 2ab\cos\gamma + a^2 + b^2\sin^2\gamma \\
&= a^2 + b^2\,(\cos^2\gamma + \sin^2\gamma) - 2ab\cos\gamma = a^2 + b^2 - 2ab\cos\gamma.
\end{aligned}$$
In der zweiten Zeile haben wir die Klammer mit der binomischen Formel ausmultipliziert. In der dritten Zeile haben wir
$b^2$ herausgehoben und $\cos^2\gamma + \sin^2\gamma = 1$ verwendet. Der Beweis gilt für spitze und stumpfe
Winkel, weil die Koordinaten am Einheitskreis für alle Winkel definiert sind.
:::

```plot
x: [-1.5, 6]
y: [-0.8, 4]
gleich: true
strecken:
  - { von: [0, 0], nach: [5, 0], farbe: 0 }
  - { von: [0, 0], nach: ["4*cos(pi*65/180)", "4*sin(pi*65/180)"], farbe: 1 }
  - { von: ["4*cos(pi*65/180)", "4*sin(pi*65/180)"], nach: [5, 0], farbe: 2 }
punkte:
  - { x: 0, y: 0, label: "C(0|0), Winkel γ" }
  - { x: 5, y: 0, label: "B(a|0)" }
  - { x: "4*cos(pi*65/180)", y: "4*sin(pi*65/180)", label: "A(b·cos γ | b·sin γ)" }
  - { x: 2.5, y: -0.3, label: "a" }
  - { x: 0.4, y: 1.9, label: "b" }
  - { x: 3.6, y: 1.9, label: "c" }
beschriftung: Beweisidee zum Kosinussatz. C liegt im Ursprung, B auf der x-Achse. A hat die Koordinaten b·cos γ und b·sin γ. Die Seite c ist der Abstand von A und B.
```

Der Kosinussatz löst zwei Fälle:

- **SWS:** zwei Seiten und der **eingeschlossene** Winkel. Der Satz liefert die dritte Seite direkt.
- **SSS:** drei Seiten. Umgestellt liefert er jeden Winkel: $\cos\gamma = \dfrac{a^2 + b^2 - c^2}{2ab}$.

:::beispiel[Zwei Wanderer]
Zwei Wanderer starten am selben Punkt. Der eine geht $3{,}2$ km geradeaus, der andere $4{,}5$ km. Ihre Richtungen
schließen einen Winkel von $64°$ ein. Wie weit sind sie dann voneinander entfernt?

1. Bekannt sind zwei Seiten und der Winkel dazwischen, also der Fall SWS.
2. $d^2 = 3{,}2^2 + 4{,}5^2 - 2\cdot 3{,}2\cdot 4{,}5\cdot\cos 64° \approx 10{,}24 + 20{,}25 - 12{,}63 = 17{,}86$.
3. $d \approx \sqrt{17{,}86} \approx 4{,}23$ km.
4. **Plausibilität:** $64°$ ist spitz, also ist $d$ kürzer als beim rechten Winkel. Dort wären es
   $\sqrt{30{,}49} \approx 5{,}52$ km.
:::

:::achtung[Den Kosinussatz falsch geklammert]
Bei den Wanderern rechnet jemand: $d^2 = (3{,}2^2 + 4{,}5^2 - 2\cdot 3{,}2\cdot 4{,}5)\cdot\cos 64° \approx 0{,}74$. Er hat
den Kosinus mit der ganzen Klammer multipliziert. Das ergibt $d \approx 0{,}86$ km, viel zu wenig.

Im Kosinussatz gehört $\cos\gamma$ **nur** zum letzten Summanden: $a^2 + b^2 - (2ab\cos\gamma)$. Am Taschenrechner
tippst du am besten erst $2\cdot 3{,}2\cdot 4{,}5\cdot\cos 64°$ und ziehst das Ergebnis von $30{,}49$ ab.
:::

Beim Kosinussatz ist der Winkel immer eindeutig. Der Kosinus wird zwischen $0°$ und $180°$ ständig kleiner, jeder Wert
gehört dort zu genau einem Winkel. Ein negativer Kosinus bedeutet einen stumpfen Winkel. Beim Sinussatz ist das
anders. Darum geht es in [5.8 Der mehrdeutige Fall und Vermessungsaufgaben](/lernen/mathe3/trigonometrie/der-mehrdeutige-fall-und-vermessungsaufgaben).

:::achtung[Der Winkel liegt nicht zwischen den Seiten]
Ein Dreieck hat $a = 12$ cm, $b = 9$ cm und $\alpha = 40°$. Jemand rechnet die Fläche mit
$\frac12\cdot 12\cdot 9\cdot\sin 40° \approx 34{,}71\text{ cm}^2$. Der Winkel $\alpha$ liegt aber bei $A$, also zwischen den
Seiten $b$ und $c$. Er wird von $a$ und $b$ **nicht** eingeschlossen.

Richtig wäre: zuerst mit dem Sinussatz $\beta$ bestimmen, dann $\gamma$ aus der Winkelsumme, dann
$A = \frac12\, a\, b\,\sin\gamma$. Prüfe vor jeder Flächenrechnung an der Skizze, ob der Winkel zwischen den beiden
Seiten liegt.
:::

:::merke[Welcher Satz wann?]
- **SSS** (drei Seiten): Kosinussatz für einen Winkel, am besten den größten, gegenüber der längsten Seite. Dann
  Sinussatz oder noch einmal Kosinussatz.
- **SWS** (zwei Seiten, eingeschlossener Winkel): Kosinussatz für die dritte Seite, dann weiter.
- **WSW** oder **SWW** (zwei Winkel, eine Seite): dritter Winkel aus $180°$, dann Sinussatz.
- **SSW** (zwei Seiten, ein Winkel gegenüber einer davon): Sinussatz, aber **Mehrdeutigkeit prüfen**.
- **Fläche:** $\frac12 \cdot$ Seite $\cdot$ Seite $\cdot \sin$ des eingeschlossenen Winkels.
:::

```reflexion
frage: Warum kann man aus dem Kosinussatz die Umkehrung des Pythagoras folgern?
antwort: |
  Angenommen, in einem Dreieck gilt $a^2 + b^2 = c^2$. Der Kosinussatz sagt $c^2 = a^2 + b^2 - 2ab\cos\gamma$. Beides
  zusammen ergibt $2ab\cos\gamma = 0$. Da $a$ und $b$ Seitenlängen sind, also nicht null, muss $\cos\gamma = 0$ sein.
  Zwischen $0°$ und $180°$ gibt es dafür nur einen Winkel, nämlich $90°$. Also ist $\gamma$ ein rechter Winkel.
  Entscheidend ist, dass der Kosinus auf diesem Bereich jeden Wert nur einmal annimmt.
```

```aufgabe
id: tr-flaeche
titel: Flächeninhalt mit dem Sinus
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Ein Dreieck hat die Seiten $a = 6$ cm und $b = 10$ cm. Sie schließen den Winkel $\gamma = 30°$ ein.
  Berechne den Flächeninhalt.
teile:
  - typ: zahl
    label: '$A$'
    einheit: 'cm²'
    loesung: "0.5*6*10*sin(inRad(30))"
    anzeige: '15'
    fehler:
      - wert: "6*10*sin(inRad(30))"
        meldung: 'Der Faktor $\frac12$ fehlt. Die Fläche ist das **halbe** Produkt mal Sinus.'
      - wert: "0.5*6*10*cos(inRad(30))"
        meldung: 'Die Höhe auf eine Seite ist die andere Seite mal **Sinus** des Winkels, nicht Kosinus.'
hinweise:
  - 'Die beiden Seiten schließen $\gamma$ ein. Verwende $A = \frac12 ab\sin\gamma$.'
loesung: |
  **Ansatz:** Zwei Seiten und der eingeschlossene Winkel sind bekannt, also passt $A = \frac12\, a\, b\,\sin\gamma$.
  ---
  $A = \frac12\cdot 6\cdot 10\cdot\sin 30° = 30\cdot\frac12 = 15\text{ cm}^2$. **Plausibilität:** Mit einem rechten Winkel wären es $30\text{ cm}^2$. Ein flacher Winkel halbiert hier die Fläche.
```

```aufgabe
id: tr-ad-welcher-satz
titel: Welcher Satz passt?
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Entscheide für jede Angabe, womit du am schnellsten beginnst. Rechne nichts aus.
teile:
  - typ: auswahl
    label: '$a = 5$, $b = 7$, $c = 9$'
    optionen: ['Sinussatz', 'Kosinussatz', 'Winkelsumme, dann Sinussatz']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Der Sinussatz braucht ein Paar aus Seite und gegenüberliegendem Winkel. Hier ist kein Winkel bekannt.'
  - typ: auswahl
    label: '$a = 8$, $\beta = 40°$, $\gamma = 75°$'
    optionen: ['Sinussatz', 'Kosinussatz', 'Winkelsumme, dann Sinussatz']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: 'Zu $a$ fehlt noch der gegenüberliegende Winkel $\alpha$. Den liefert zuerst die Winkelsumme.'
  - typ: auswahl
    label: '$b = 4$, $c = 6$, $\alpha = 50°$'
    optionen: ['Sinussatz', 'Kosinussatz', 'Winkelsumme, dann Sinussatz']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: '$\alpha$ liegt zwischen $b$ und $c$, also der Fall SWS. Es gibt kein Paar aus Seite und Gegenwinkel.'
hinweise:
  - 'Gibt es schon ein Paar aus einer Seite und dem gegenüberliegenden Winkel? Dann Sinussatz. Sonst Kosinussatz.'
loesung: |
  **Ansatz:** Der Sinussatz braucht ein Paar aus Seite und Gegenwinkel. Der Kosinussatz braucht entweder drei Seiten oder zwei Seiten mit dem eingeschlossenen Winkel.
  ---
  Drei Seiten (SSS) und zwei Seiten mit eingeschlossenem Winkel (SWS): Kosinussatz.
  ---
  Zwei Winkel und eine Seite: Mit der Winkelsumme $\alpha = 65°$ entsteht das Paar $(a, \alpha)$, dann Sinussatz.
```

```aufgabe
id: tr-kosinussatz-winkel
titel: Winkel aus drei Seiten (SSS)
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Ein Dreieck hat die Seiten $a = 5$, $b = 7$, $c = 8$. Berechne den Winkel $\beta$ gegenüber von $b$.
teile:
  - typ: zahl
    label: '$\beta$'
    einheit: °
    loesung: "inGrad(acos((25 + 64 - 49)/(2*5*8)))"
    anzeige: '60'
    fehler:
      - wert: "inGrad(acos((25 + 49 - 64)/(2*5*7)))"
        meldung: 'Das ist der Winkel gegenüber von $c$. Für $\beta$ steht $b^2$ mit dem Minus im Zähler, und im Nenner stehen die beiden anderen Seiten.'
hinweise:
  - '$\cos\beta = \frac{a^2 + c^2 - b^2}{2ac}$.'
loesung: |
  **Ansatz:** Drei Seiten sind bekannt (SSS). Der Kosinussatz für $b$ wird nach $\cos\beta$ umgestellt: $\cos\beta = \frac{a^2 + c^2 - b^2}{2ac}$.
  ---
  $\cos\beta = \frac{25 + 64 - 49}{80} = \frac{40}{80} = \frac12$.
  ---
  $\beta = \cos^{-1}\frac12 = 60°$. Der Winkel ist eindeutig, weil $\cos^{-1}$ Werte zwischen $0°$ und $180°$ liefert.
```

```aufgabe
id: tr-sinussatz
titel: Sinussatz (WSW)
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Von einem Dreieck kennt man $a = 8$ cm, $\alpha = 40°$ und $\beta = 65°$. Berechne $\gamma$, $b$ und $c$
  (zwei Nachkommastellen).
teile:
  - typ: zahl
    label: '$\gamma$'
    einheit: °
    loesung: "180 - 40 - 65"
  - typ: zahl
    label: '$b$'
    einheit: cm
    loesung: "8*sin(inRad(65))/sin(inRad(40))"
    anzeige: '11{,}28'
    fehler:
      - wert: "8*sin(inRad(40))/sin(inRad(65))"
        meldung: 'Der Bruch steht auf dem Kopf. Aus $\frac{b}{\sin\beta} = \frac{a}{\sin\alpha}$ folgt $b = \frac{a\sin\beta}{\sin\alpha}$.'
  - typ: zahl
    label: '$c$'
    einheit: cm
    loesung: "8*sin(inRad(75))/sin(inRad(40))"
    anzeige: '12{,}02'
hinweise:
  - 'Zuerst die Winkelsumme. Das Paar $(a, \alpha)$ ist vollständig bekannt.'
  - '$\frac{b}{\sin\beta} = \frac{a}{\sin\alpha}$ nach $b$ umstellen: mit $\sin\beta$ multiplizieren.'
loesung: |
  **Ansatz:** Das Paar $a = 8$ und $\alpha = 40°$ ist bekannt. Mit der Winkelsumme und dem Sinussatz folgt der Rest.
  ---
  $\gamma = 180° - 40° - 65° = 75°$.
  ---
  $b = \frac{a\sin\beta}{\sin\alpha} = \frac{8\sin 65°}{\sin 40°} \approx \frac{7{,}2505}{0{,}6428} \approx 11{,}28$ cm.
  ---
  $c = \frac{8\sin 75°}{\sin 40°} \approx \frac{7{,}7274}{0{,}6428} \approx 12{,}02$ cm. **Plausibilität:** Dem größten Winkel $\gamma = 75°$ liegt die längste Seite gegenüber.
```

```aufgabe
id: tr-kosinussatz-seite
titel: Kosinussatz (SWS)
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Im Dreieck $ABC$ ist $b = 7$, $c = 5$ und der eingeschlossene Winkel $\alpha = 60°$. Berechne $a$ exakt und auf
  zwei Nachkommastellen.
teile:
  - typ: zahl
    label: '$a$'
    loesung: "sqrt(49 + 25 - 2*7*5*cos(inRad(60)))"
    anzeige: '\sqrt{39} \approx 6{,}24'
    fehler:
      - wert: "sqrt(49 + 25)"
        meldung: 'Das wäre der Pythagoras. Er gilt nur für einen rechten Winkel. Bei $60°$ kommt der Korrekturterm $-2bc\cos\alpha$ dazu.'
      - wert: "sqrt(49 + 25 + 35)"
        meldung: 'Das Vorzeichen des Korrekturterms stimmt nicht. Im Kosinussatz steht $-2bc\cos\alpha$, und $\cos 60°$ ist positiv.'
hinweise:
  - '$a^2 = b^2 + c^2 - 2bc\cos\alpha$.'
  - '$\cos 60° = \frac12$ kennst du exakt.'
loesung: |
  **Ansatz:** Zwei Seiten und der eingeschlossene Winkel sind bekannt (SWS), also Kosinussatz.
  ---
  $a^2 = 7^2 + 5^2 - 2\cdot 7\cdot 5\cdot\cos 60° = 49 + 25 - 70\cdot\frac12 = 39$.
  ---
  $a = \sqrt{39} \approx 6{,}24$. **Plausibilität:** Bei $90°$ wäre $a = \sqrt{74} \approx 8{,}60$. Ein spitzer Winkel macht die Gegenseite kürzer.
```

```aufgabe
id: tr-ad-sss-gefuehrt
titel: Ein Dreieck mit stumpfem Winkel
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Ein Dreieck hat die Seiten $a = 4$, $b = 5$ und $c = 8$. Berechne alle drei Winkel (zwei Nachkommastellen).
teile:
  - typ: zahl
    label: '$\gamma$'
    einheit: °
    loesung: "inGrad(acos((16 + 25 - 64)/40))"
    anzeige: '125{,}10'
    fehler:
      - wert: "180 - inGrad(acos((16 + 25 - 64)/40))"
        meldung: 'Der Kosinus ist negativ, also ist $\gamma$ stumpf. $\cos^{-1}$ liefert den stumpfen Winkel direkt. Du musst nichts von $180°$ abziehen.'
  - typ: zahl
    label: '$\alpha$'
    einheit: °
    loesung: "inGrad(asin(4*sin(acos(-0.575))/8))"
    anzeige: '24{,}15'
  - typ: zahl
    label: '$\beta$'
    einheit: °
    loesung: "180 - inGrad(acos(-0.575)) - inGrad(asin(4*sin(acos(-0.575))/8))"
    anzeige: '30{,}75'
hinweise:
  - 'Beginne mit dem größten Winkel. Er liegt der längsten Seite $c = 8$ gegenüber.'
  - 'Danach ist das Paar $(c, \gamma)$ bekannt. Der Sinussatz liefert $\alpha$, die Winkelsumme $\beta$.'
loesung: |
  **Ansatz:** Drei Seiten (SSS). Wir beginnen mit dem größten Winkel $\gamma$ über den Kosinussatz. Dann sind die übrigen Winkel spitz, und der Sinussatz liefert sie eindeutig.
  ---
  $\cos\gamma = \frac{16 + 25 - 64}{2\cdot 4\cdot 5} = \frac{-23}{40} = -0{,}575$. Negativ, also ist $\gamma$ stumpf: $\gamma \approx 125{,}10°$.
  ---
  Sinussatz: $\sin\alpha = \frac{a\sin\gamma}{c} = \frac{4\cdot\sin 125{,}10°}{8} \approx 0{,}4091$, also $\alpha \approx 24{,}15°$.
  ---
  Winkelsumme: $\beta = 180° - 125{,}10° - 24{,}15° \approx 30{,}75°$. **Kontrolle:** $\cos\beta = \frac{16 + 64 - 25}{64} \approx 0{,}859$ ergibt ebenfalls $30{,}75°$.
gefuehrt:
  - text: 'Welcher Winkel ist der größte? Er liegt der längsten Seite gegenüber.'
    erklaerung: 'Die längste Seite ist $c = 8$. Der größte Winkel ist $\gamma$.'
  - text: 'Berechne $\cos\gamma$ mit dem Kosinussatz.'
    teil: { typ: zahl, loesung: "(16 + 25 - 64)/40", fehler: [ { wert: "(16 + 64 - 25)/64", meldung: 'Das ist $\cos\beta$. Für $\gamma$ steht $c^2$ mit dem Minus im Zähler.' } ] }
    erklaerung: '$\cos\gamma = \frac{a^2 + b^2 - c^2}{2ab} = \frac{-23}{40} = -0{,}575$.'
  - text: 'Bestimme $\gamma$.'
    teil: { typ: zahl, einheit: °, loesung: "inGrad(acos(-0.575))" }
    erklaerung: '$\gamma = \cos^{-1}(-0{,}575) \approx 125{,}10°$. Ein negativer Kosinus heißt stumpfer Winkel.'
  - text: 'Bestimme $\alpha$ mit dem Sinussatz und $\beta$ mit der Winkelsumme. Gib $\beta$ ein.'
    teil: { typ: zahl, einheit: °, loesung: "180 - inGrad(acos(-0.575)) - inGrad(asin(4*sin(acos(-0.575))/8))" }
    erklaerung: '$\sin\alpha \approx 0{,}4091$, also $\alpha \approx 24{,}15°$. Dann $\beta \approx 180° - 125{,}10° - 24{,}15° = 30{,}75°$.'
```

```aufgabe
id: tr-see
titel: Entfernung über einen See
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Die Punkte $A$ und $B$ liegen an gegenüberliegenden Ufern eines Sees. Von einem Punkt $C$ aus misst man
  $\overline{CA} = 320$ m, $\overline{CB} = 450$ m und den Winkel $\angle ACB = 48°$. Wie weit sind $A$ und $B$
  voneinander entfernt? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    label: '$\overline{AB}$'
    einheit: m
    loesung: "sqrt(320^2 + 450^2 - 2*320*450*cos(inRad(48)))"
    anzeige: '334{,}95'
    fehler:
      - wert: "sqrt(320^2 + 450^2)"
        meldung: 'Das wäre richtig bei einem rechten Winkel in $C$. Bei $48°$ brauchst du den Korrekturterm des Kosinussatzes.'
      - wert: "sqrt((320^2 + 450^2 - 2*320*450)*cos(inRad(48)))"
        meldung: 'Der Kosinus gehört nur zum letzten Summanden, nicht zur ganzen Klammer.'
hinweise:
  - 'Zwei Seiten und der eingeschlossene Winkel (SWS): Kosinussatz.'
  - 'Rechne zuerst $2\cdot 320\cdot 450\cdot\cos 48°$ aus und ziehe es von $320^2 + 450^2$ ab.'
loesung: |
  **Ansatz:** Im Dreieck $ABC$ sind $a = \overline{CB} = 450$ m, $b = \overline{CA} = 320$ m und der eingeschlossene Winkel $\gamma = 48°$ bekannt. Gesucht ist $c = \overline{AB}$.
  ---
  $c^2 = 320^2 + 450^2 - 2\cdot 320\cdot 450\cdot\cos 48° \approx 304\,900 - 192\,710 = 112\,190$.
  ---
  $c \approx \sqrt{112\,190} \approx 334{,}95$ m. **Antwort:** $A$ und $B$ sind etwa $335$ m voneinander entfernt.
```

```aufgabe
id: tr-ad-parallelogramm
titel: Diagonalen eines Parallelogramms
niveau: 3
lernziel: 4
kompetenz: modellieren
angabe: |
  Ein Parallelogramm hat die Seiten $7$ cm und $11$ cm. Sie schließen den Winkel $52°$ ein.

  a) Berechne die beiden Diagonalen (zwei Nachkommastellen).

  b) Berechne den Flächeninhalt (zwei Nachkommastellen).

  c) Prüfe an deinen Zahlen: Die Summe der Quadrate der Diagonalen ist gleich der Summe der Quadrate aller vier Seiten.
  Begründe diese Regel mit dem Kosinussatz.
teile:
  - typ: zahl
    label: 'a) kürzere Diagonale'
    einheit: cm
    loesung: "sqrt(49 + 121 - 2*77*cos(inRad(52)))"
    anzeige: '8{,}67'
  - typ: zahl
    label: 'a) längere Diagonale'
    einheit: cm
    loesung: "sqrt(49 + 121 + 2*77*cos(inRad(52)))"
    anzeige: '16{,}27'
    fehler:
      - wert: "sqrt(49 + 121 - 2*77*cos(inRad(52)))"
        meldung: 'Das ist die kürzere Diagonale. Die längere liegt dem **stumpfen** Winkel $128°$ gegenüber, und $\cos 128° = -\cos 52°$.'
  - typ: zahl
    label: 'b) Fläche'
    einheit: 'cm²'
    loesung: "7*11*sin(inRad(52))"
    anzeige: '60{,}68'
    fehler:
      - wert: "0.5*7*11*sin(inRad(52))"
        meldung: 'Das ist nur eines der beiden Dreiecke, in die eine Diagonale das Parallelogramm teilt. Das Parallelogramm ist doppelt so groß.'
  - typ: text
    label: 'c) Begründung'
    muster: |
      Die kurze Diagonale $e$ liegt dem Winkel $52°$ gegenüber, die lange $f$ dem Nachbarwinkel $128°$. Kosinussatz:
      $e^2 = a^2 + b^2 - 2ab\cos 52°$ und $f^2 = a^2 + b^2 - 2ab\cos 128° = a^2 + b^2 + 2ab\cos 52°$, weil
      $\cos(180° - \alpha) = -\cos\alpha$. Addiert heben sich die Korrekturterme weg: $e^2 + f^2 = 2a^2 + 2b^2$. Mit den
      Zahlen: $75{,}19 + 264{,}81 = 340 = 2\cdot 49 + 2\cdot 121$.
hinweise:
  - 'Jede Diagonale teilt das Parallelogramm in zwei Dreiecke mit den Seiten $7$ und $11$. Benachbarte Winkel im Parallelogramm ergänzen sich zu $180°$.'
  - 'Die kurze Diagonale liegt dem $52°$-Winkel gegenüber, die lange dem $128°$-Winkel. Verwende $\cos 128° = -\cos 52°$.'
loesung: |
  **Ansatz:** Jede Diagonale ist die dritte Seite eines Dreiecks mit den Seiten $7$ und $11$. Der eingeschlossene Winkel ist $52°$ oder sein Nachbarwinkel $180° - 52° = 128°$.
  ---
  a) $e^2 = 49 + 121 - 2\cdot 77\cdot\cos 52° \approx 170 - 94{,}81 = 75{,}19$, also $e \approx 8{,}67$ cm.
  ---
  $f^2 = 49 + 121 - 2\cdot 77\cdot\cos 128° = 170 + 94{,}81 = 264{,}81$, also $f \approx 16{,}27$ cm.
  ---
  b) Die Diagonale teilt das Parallelogramm in zwei gleiche Dreiecke mit je $\frac12\cdot 7\cdot 11\cdot\sin 52°$. Zusammen: $A = 77\cdot\sin 52° \approx 60{,}68\text{ cm}^2$.
  ---
  c) Die Korrekturterme $\mp 2ab\cos 52°$ heben sich bei der Addition weg: $e^2 + f^2 = 2\cdot 7^2 + 2\cdot 11^2 = 340$. Die Zahlen bestätigen das: $75{,}19 + 264{,}81 = 340$.
```

## Der mehrdeutige Fall und Vermessungsaufgaben

```aufgabe
id: tr-sw-check-zwei-winkel
titel: Zwei Winkel mit demselben Sinus
art: check
niveau: 1
angabe: |
  Welche beiden Winkel zwischen $0°$ und $180°$ haben den Sinus $0{,}6$? Zum Nachlesen:
  [5.6 Besondere Werte und Quadrantenbeziehungen](/lernen/mathe3/trigonometrie/besondere-werte-und-quadrantenbeziehungen).
teile:
  - typ: auswahl
    optionen:
      - '$36{,}87°$ und $143{,}13°$'
      - '$36{,}87°$ und $53{,}13°$'
      - 'nur $36{,}87°$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$53{,}13°$ ergänzt $36{,}87°$ zu $90°$. Dieser Winkel hat den Kosinus $0{,}6$, nicht den Sinus. Gleichen Sinus hat $180° - 36{,}87°$.'
      - wert: 2
        meldung: 'Der Rechner liefert nur diesen einen Wert. Es gilt aber $\sin(180° - \alpha) = \sin\alpha$. Es gibt also einen zweiten Winkel.'
loesung: |
  Der Rechner liefert $\sin^{-1}(0{,}6) \approx 36{,}87°$.
  ---
  Wegen $\sin(180° - \alpha) = \sin\alpha$ hat auch $180° - 36{,}87° = 143{,}13°$ den Sinus $0{,}6$.
```

**Worum geht es?** Der Sinussatz liefert manchmal einen Sinuswert, aus dem du einen Winkel bestimmen musst. Zu einem
Sinuswert zwischen $0$ und $1$ gibt es aber zwei Winkel zwischen $0°$ und $180°$, einen spitzen und einen stumpfen.
Beide können zu einem Dreieck passen. Dann gibt es zwei verschiedene Dreiecke zu denselben Angaben. Diese Stelle ist
für fast alle ungewohnt. Lies sie langsam.

### Warum es zwei Dreiecke geben kann

Gegeben sind zwei Seiten $a$ und $b$ und der Winkel $\alpha$, der der Seite $a$ gegenüberliegt. Das ist der Fall
**SSW**. Zeichne so:

1. Trage am Punkt $A$ den Winkel $\alpha$ ab. Er hat zwei Schenkel.
2. Auf dem einen Schenkel trägst du $b = \overline{AC}$ ab. So liegt der Punkt $C$ fest.
3. Der Punkt $B$ liegt auf dem anderen Schenkel, und zwar im Abstand $a$ von $C$. Zeichne also einen Kreis um $C$ mit
   Radius $a$.

Dieser Kreis kann den Schenkel zweimal, einmal oder gar nicht treffen. Stell ihn dir wie eine schwingende Tür vor: Die
Seite $a$ ist an $C$ befestigt und schwingt hin und her. Sie kann auf zwei Arten auf dem Schenkel aufsetzen.

```plot
x: [-0.5, 10]
y: [-0.8, 6]
gleich: true
kurven:
  - { x: "8*cos(pi*40/180) + 6*cos(t)", y: "8*sin(pi*40/180) + 6*sin(t)", t: [-2.7, -0.45], farbe: 3 }
strecken:
  - { von: [0, 0], nach: [9.8, 0], farbe: 0 }
  - { von: [0, 0], nach: ["8*cos(pi*40/180)", "8*sin(pi*40/180)"], farbe: 2 }
  - { von: ["8*cos(pi*40/180)", "8*sin(pi*40/180)"], nach: [9.22, 0], farbe: 0 }
  - { von: ["8*cos(pi*40/180)", "8*sin(pi*40/180)"], nach: [3.04, 0], farbe: 1 }
punkte:
  - { x: 0, y: 0, label: "A (α = 40°)" }
  - { x: "8*cos(pi*40/180)", y: "8*sin(pi*40/180)", label: "C" }
  - { x: 9.22, y: 0, label: "B₁" }
  - { x: 3.04, y: 0, label: "B₂" }
  - { x: 2.6, y: 3.0, label: "b = 8" }
beschriftung: Der mehrdeutige Fall SSW mit a = 6, b = 8 und α = 40°. Der Kreis um C mit Radius 6 schneidet den waagrechten Schenkel zweimal, in B₁ und B₂. Beide Dreiecke ABC erfüllen alle Angaben.
```

Rechnerisch liefert der Sinussatz $\sin\beta = \frac{b\cdot\sin\alpha}{a}$. Dann gibt es drei Fälle:

- **$\sin\beta > 1$:** Kein Winkel hat diesen Sinus. Es gibt **kein** Dreieck. Die Seite $a$ ist zu kurz und erreicht
  den Schenkel nicht.
- **$\sin\beta = 1$:** Genau ein Dreieck, mit $\beta = 90°$. Die Seite $a$ trifft den Schenkel genau senkrecht.
- **$\sin\beta < 1$:** Zwei Kandidaten, $\beta_1 = \sin^{-1}(\ldots)$ und $\beta_2 = 180° - \beta_1$. Ein Kandidat
  ist nur gültig, wenn $\alpha + \beta < 180°$ bleibt. Sonst bliebe für $\gamma$ kein positiver Winkel übrig.

:::beispiel[Zwei Lösungen]
Gegeben sind $a = 6$, $b = 8$ und $\alpha = 40°$.

1. **Sinussatz:** $\sin\beta = \frac{8\cdot\sin 40°}{6} \approx 0{,}8571$. Das ist kleiner als $1$.
2. **Kandidaten:** $\beta_1 = \sin^{-1}(0{,}8571) \approx 58{,}99°$ und $\beta_2 = 180° - 58{,}99° = 121{,}01°$.
3. **Prüfen:** $40° + 58{,}99° < 180°$ und $40° + 121{,}01° = 161{,}01° < 180°$. Beide sind gültig.
4. **Dreieck 1:** $\gamma_1 = 180° - 40° - 58{,}99° = 81{,}01°$ und $c_1 = \frac{6\cdot\sin 81{,}01°}{\sin 40°} \approx 9{,}22$.
5. **Dreieck 2:** $\gamma_2 = 180° - 40° - 121{,}01° = 18{,}99°$ und $c_2 = \frac{6\cdot\sin 18{,}99°}{\sin 40°} \approx 3{,}04$.
:::

:::beispiel[Eine Lösung und keine Lösung]
**Fall mit einer Lösung:** $a = 9$, $b = 6$, $\alpha = 50°$. Der Sinussatz gibt
$\sin\beta = \frac{6\cdot\sin 50°}{9} \approx 0{,}5107$. Die Kandidaten sind $30{,}71°$ und $149{,}29°$. Der zweite
scheitert: $50° + 149{,}29° = 199{,}29°$ ist mehr als $180°$. Es gibt also nur ein Dreieck mit $\beta \approx 30{,}71°$.

**Fall ohne Lösung:** $a = 3$, $b = 8$, $\alpha = 40°$. Der Sinussatz gibt
$\sin\beta = \frac{8\cdot\sin 40°}{3} \approx 1{,}714$. Das ist größer als $1$, also gibt es kein Dreieck. Die Seite
$a = 3$ ist kürzer als der Abstand von $C$ zum Schenkel, $8\cdot\sin 40° \approx 5{,}14$.
:::

Eine Faustregel hilft beim Abschätzen. Der größeren Seite liegt im Dreieck immer der größere Winkel gegenüber. Ist
$a \ge b$, dann muss $\alpha \ge \beta$ sein, und der stumpfe Kandidat für $\beta$ scheidet aus. Nur wenn $a < b$
ist, kann es zwei Dreiecke geben.

:::achtung[Nur den Wert des Taschenrechners genommen]
Bei $a = 6$, $b = 8$ und $\alpha = 40°$ rechnet jemand $\beta = \sin^{-1}(0{,}8571) \approx 58{,}99°$ und hört auf.
Damit hat er nur Dreieck 1 mit $c \approx 9{,}22$ gefunden. Das Dreieck mit $\beta \approx 121{,}01°$ und
$c \approx 3{,}04$ fehlt.

Der Rechner liefert bei $\sin^{-1}$ immer nur den spitzen Winkel. Prüfe im Fall SSW deshalb **jedes Mal** auch
$180° - \beta_1$.
:::

:::achtung[Einen ungültigen zweiten Winkel behalten]
Bei $a = 9$, $b = 6$ und $\alpha = 50°$ gibt jemand zwei Dreiecke an, mit $\beta_1 \approx 30{,}71°$ und
$\beta_2 \approx 149{,}29°$. Für das zweite wäre $\gamma = 180° - 50° - 149{,}29° = -19{,}29°$. Einen negativen Winkel
gibt es in keinem Dreieck.

Richtig: Nur $\beta_1$ ist gültig. Prüfe immer $\alpha + \beta_2 < 180°$. Schneller geht es mit der Faustregel: Hier
ist $a > b$, also gibt es höchstens ein Dreieck.
:::

:::merke[Rezept: der Fall SSW]
1. Sinussatz für den unbekannten Winkel gegenüber der zweiten bekannten Seite: $\sin\beta = \frac{b\sin\alpha}{a}$.
2. Ist $\sin\beta > 1$: kein Dreieck. Ist $\sin\beta = 1$: genau eines mit $\beta = 90°$.
3. Sonst $\beta_1 = \sin^{-1}(\ldots)$ und $\beta_2 = 180° - \beta_1$ bilden.
4. Jeden Kandidaten mit $\alpha + \beta < 180°$ prüfen. Kurz: Ist $a \ge b$, gilt nur $\beta_1$.
5. Für jedes gültige $\beta$ den dritten Winkel und die dritte Seite berechnen.
:::

```reflexion
frage: Warum kann der Kosinussatz keine zwei Dreiecke liefern, der Sinussatz aber schon?
antwort: |
  Mit dem Kosinussatz berechnest du einen Winkel über $\cos^{-1}$. Zwischen $0°$ und $180°$ wird der Kosinus ständig
  kleiner, jeder Wert gehört dort zu genau einem Winkel. Der Sinus wächst dagegen bis $90°$ und fällt danach wieder.
  Deshalb gehören zu jedem Sinuswert zwischen $0$ und $1$ zwei Winkel, $\beta$ und $180° - \beta$. Geometrisch: SSS
  und SWS legen ein Dreieck eindeutig fest, SSW nicht. Die „schwingende“ Seite $a$ kann auf zwei Arten aufsetzen.
```

### Vermessungsaufgaben

Die klassische Anwendung der beiden Sätze: Man misst eine einzige Strecke, die **Standlinie**, und dazu Winkel. Daraus
berechnet man Entfernungen zu Punkten, die man nicht erreichen kann, etwa auf der anderen Seite eines Flusses.

:::beispiel[Die Breite eines Flusses]
Zwei Punkte $A$ und $B$ am Ufer sind $80$ m voneinander entfernt. Am anderen Ufer steht ein Baum $C$. Man misst
$\angle CAB = 70°$ und $\angle ABC = 60°$. Wie breit ist der Fluss, wenn $AB$ am Ufer entlang läuft?

1. **Dritter Winkel:** $\gamma = 180° - 70° - 60° = 50°$. Jetzt ist das Paar $c = 80$ m und $\gamma = 50°$ bekannt.
2. **Sinussatz** für $b = \overline{AC}$: $b = \frac{80\cdot\sin 60°}{\sin 50°} \approx \frac{69{,}28}{0{,}7660} \approx 90{,}44$ m.
3. **Flussbreite:** Sie ist der Abstand des Baums von der Uferlinie $AB$, also die Höhe des Dreiecks. Im rechtwinkligen
   Teildreieck bei $A$ ist $b$ die Hypotenuse: $h = b\cdot\sin 70° \approx 84{,}99$ m.

**Antwort:** Der Fluss ist etwa $85$ m breit.
:::

```aufgabe
id: tr-sw-check-standlinie
titel: Was muss man messen?
art: check
niveau: 1
angabe: |
  Bei der Flussbreite hat man eine Strecke und zwei Winkel gemessen. Welcher Fall liegt im Dreieck $ABC$ vor?
teile:
  - typ: auswahl
    optionen: ['WSW', 'SSW', 'SSS']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Bekannt ist nur eine Seite, die Standlinie. Für SSW bräuchte man zwei Seiten.'
      - wert: 2
        meldung: 'Die Seiten zum Baum sind ja gerade unbekannt. Gemessen wurde nur die Standlinie.'
loesung: |
  Gemessen sind die Standlinie $c$ und die beiden Winkel an ihren Enden. Das ist der Fall WSW.
  ---
  WSW ist immer eindeutig: dritter Winkel aus der Winkelsumme, dann Sinussatz.
```

Auch die Höhe aus zwei Standpunkten aus [5.2 Steigung, Höhenwinkel und Vermessung](/lernen/mathe3/trigonometrie/steigung-hoehenwinkel-und-vermessung)
lässt sich so lösen. Dort sah man einen Gipfel von $P$ unter $25°$ und vom $200$ m näheren $Q$ unter $35°$. Im
Dreieck $P$, $Q$, Gipfel ist der Winkel bei $P$ gleich $25°$. Bei $Q$ ist er $180° - 35° = 145°$, also bleiben
$10°$ für den Gipfel. Der Sinussatz liefert die Strecke von $Q$ zum Gipfel:
$\frac{200\cdot\sin 25°}{\sin 10°} \approx 486{,}75$ m. Die Höhe ist dann $486{,}75\cdot\sin 35° \approx 279{,}2$ m,
genau wie mit dem Tangens-Ansatz.

:::pruefung
**So holst du bei Vermessungsaufgaben sichere Punkte.** Eine saubere Skizze mit allen eingetragenen Winkeln und
Strecken bringt in der Prüfung bereits Punkte. Schreib zu jedem Schritt dazu, welchen Satz du in welchem Dreieck
anwendest, etwa „Sinussatz im Dreieck $ABC$“. Rechne mit ungerundeten Zwischenwerten aus dem Speicher des Rechners
weiter und runde erst das Endergebnis. Bei SSW schreib ausdrücklich hin, ob es eine oder zwei Lösungen gibt und warum.
:::

```aufgabe
id: tr-ssw-anzahl
titel: Wie viele Dreiecke gibt es?
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Von einem Dreieck kennt man $a = 5$, $b = 7$ und $\alpha = 30°$. Wie viele verschiedene Dreiecke passen dazu?
teile:
  - typ: auswahl
    optionen: ['keines', 'genau eines', 'genau zwei']
    richtig: [2]
    fehler:
      - wert: 1
        meldung: 'Der Rechner liefert nur $\beta_1 \approx 44{,}43°$. Prüfe auch $\beta_2 = 180° - 44{,}43°$: Ist $30° + \beta_2$ kleiner als $180°$?'
      - wert: 0
        meldung: 'Berechne $\sin\beta = \frac{7\cdot\sin 30°}{5}$. Der Wert ist kleiner als $1$, also gibt es mindestens ein Dreieck.'
hinweise:
  - 'Berechne $\sin\beta$ mit dem Sinussatz und prüfe dann beide Kandidaten.'
loesung: |
  **Ansatz:** Fall SSW. Sinussatz für $\beta$: $\sin\beta = \frac{7\cdot\sin 30°}{5} = \frac{3{,}5}{5} = 0{,}7$.
  ---
  Kandidaten: $\beta_1 \approx 44{,}43°$ und $\beta_2 \approx 135{,}57°$. Es gilt $30° + 135{,}57° = 165{,}57° < 180°$. Beide sind gültig, es gibt **zwei** Dreiecke. Das passt zur Faustregel, denn $a < b$.
```

```aufgabe
id: tr-ssw-eins
titel: SSW mit genau einer Lösung
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Von einem Dreieck kennt man $a = 10$, $b = 7$ und $\alpha = 65°$. Berechne $\beta$ (zwei Nachkommastellen).
teile:
  - typ: zahl
    label: '$\beta$'
    einheit: °
    loesung: "inGrad(asin(7*sin(inRad(65))/10))"
    anzeige: '39{,}38'
    fehler:
      - wert: "180 - inGrad(asin(7*sin(inRad(65))/10))"
        meldung: 'Dieser Kandidat ist ungültig: $65° + 140{,}62°$ ist mehr als $180°$. Wegen $a > b$ muss $\beta$ kleiner als $\alpha$ sein.'
hinweise:
  - '$\sin\beta = \frac{b\sin\alpha}{a}$. Prüfe danach, ob auch der stumpfe Kandidat möglich ist.'
loesung: |
  **Ansatz:** Fall SSW, also Sinussatz mit Prüfung beider Kandidaten.
  ---
  $\sin\beta = \frac{7\cdot\sin 65°}{10} \approx 0{,}6344$, also $\beta_1 \approx 39{,}38°$ und $\beta_2 \approx 140{,}62°$.
  ---
  $65° + 140{,}62° > 180°$, also scheidet $\beta_2$ aus. Es gibt genau ein Dreieck mit $\beta \approx 39{,}38°$. Die Faustregel bestätigt das: $a > b$.
```

```aufgabe
id: tr-ssw-keine
titel: Wie lang muss die Seite mindestens sein?
niveau: 2
lernziel: 4
kompetenz: begruenden
angabe: |
  Von einem Dreieck kennt man $b = 9$ cm und $\alpha = 35°$. Die Seite $a$ liegt $\alpha$ gegenüber.

  a) Zeige, dass es mit $a = 4$ cm kein Dreieck gibt. Gib dazu den Wert von $\sin\beta$ an (vier Nachkommastellen).

  b) Wie lang muss $a$ mindestens sein, damit es ein Dreieck gibt? (zwei Nachkommastellen)
teile:
  - typ: zahl
    label: 'a) $\sin\beta$ für $a = 4$'
    loesung: "9*sin(inRad(35))/4"
    anzeige: '1{,}2905'
    fehler:
      - wert: "4*sin(inRad(35))/9"
        meldung: 'Der Bruch steht auf dem Kopf. Aus $\frac{a}{\sin\alpha} = \frac{b}{\sin\beta}$ folgt $\sin\beta = \frac{b\sin\alpha}{a}$.'
  - typ: zahl
    label: 'b) kleinstes $a$'
    einheit: cm
    loesung: "9*sin(inRad(35))"
    anzeige: '5{,}16'
    fehler:
      - wert: "9*cos(inRad(35))"
        meldung: 'Gesucht ist der Abstand von $C$ zum anderen Schenkel. Er liegt dem Winkel $\alpha$ gegenüber, gehört also zum Sinus.'
hinweise:
  - 'Für a): Setze in $\sin\beta = \frac{b\sin\alpha}{a}$ ein. Kann ein Sinus größer als $1$ sein?'
  - 'Für b): Im Grenzfall ist $\sin\beta = 1$, die Seite $a$ trifft den Schenkel senkrecht. Löse $\frac{9\sin 35°}{a} = 1$ nach $a$.'
loesung: |
  **Ansatz:** Ein Dreieck gibt es nur, wenn $\sin\beta = \frac{b\sin\alpha}{a}$ höchstens $1$ ist.
  ---
  a) $\sin\beta = \frac{9\cdot\sin 35°}{4} \approx \frac{5{,}162}{4} \approx 1{,}2905 > 1$. Kein Winkel hat diesen Sinus, also gibt es kein Dreieck.
  ---
  b) Grenzfall: $\frac{9\sin 35°}{a} = 1$, also $a = 9\cdot\sin 35° \approx 5{,}16$ cm. Das ist genau der Abstand von $C$ zum anderen Schenkel.
  ---
  **Deutung:** Ist $a$ kürzer, erreicht die Seite den Schenkel nicht. Bei genau $5{,}16$ cm gibt es ein rechtwinkliges Dreieck. Ist $a$ länger als $5{,}16$ cm, aber kürzer als $b = 9$ cm, gibt es zwei Dreiecke. Ab $a = 9$ cm gibt es nur noch eines.
```

```aufgabe
id: tr-sw-fluss-gefuehrt
titel: Die Breite eines Kanals
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Zwei Punkte $A$ und $B$ am geraden Ufer eines Kanals sind $120$ m voneinander entfernt. Ein Mast $C$ am anderen
  Ufer wird angepeilt: $\angle CAB = 64°$ und $\angle ABC = 72°$. Wie breit ist der Kanal? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    label: 'Breite'
    einheit: m
    loesung: "120*sin(inRad(72))/sin(inRad(44))*sin(inRad(64))"
    anzeige: '147{,}66'
    fehler:
      - wert: "120*sin(inRad(72))/sin(inRad(44))"
        meldung: 'Das ist die schräge Entfernung von $A$ zum Mast. Die Breite ist der senkrechte Abstand zum Ufer, also noch mit $\sin 64°$ multiplizieren.'
hinweise:
  - 'Bestimme zuerst den Winkel beim Mast. Dann ist ein Paar aus Seite und Gegenwinkel bekannt.'
  - 'Berechne $\overline{AC}$ mit dem Sinussatz. Die Breite ist die Höhe des Dreiecks über $AB$.'
loesung: |
  **Ansatz:** WSW: Standlinie und zwei Winkel. Mit der Winkelsumme und dem Sinussatz folgt $\overline{AC}$, daraus die Höhe.
  ---
  $\gamma = 180° - 64° - 72° = 44°$.
  ---
  $\overline{AC} = \frac{120\cdot\sin 72°}{\sin 44°} \approx \frac{114{,}13}{0{,}6947} \approx 164{,}29$ m.
  ---
  Breite: $h = \overline{AC}\cdot\sin 64° \approx 164{,}29\cdot 0{,}8988 \approx 147{,}66$ m.
gefuehrt:
  - text: 'Berechne den Winkel $\gamma$ beim Mast.'
    teil: { typ: zahl, einheit: °, loesung: "180 - 64 - 72" }
    erklaerung: '$\gamma = 180° - 64° - 72° = 44°$.'
  - text: 'Welche Seite liegt $\gamma$ gegenüber, und wie lang ist sie?'
    teil: { typ: zahl, einheit: m, loesung: "120" }
    erklaerung: 'Die Standlinie $\overline{AB} = 120$ m liegt dem Mast gegenüber. Das Paar ist $(120\text{ m}, 44°)$.'
  - text: 'Berechne $\overline{AC}$ mit dem Sinussatz. Welcher Winkel liegt $\overline{AC}$ gegenüber?'
    teil: { typ: zahl, einheit: m, loesung: "120*sin(inRad(72))/sin(inRad(44))", fehler: [ { wert: "120*sin(inRad(64))/sin(inRad(44))", meldung: '$\overline{AC}$ liegt dem Winkel bei $B$ gegenüber, also $72°$.' } ] }
    erklaerung: '$\overline{AC} = \frac{120\cdot\sin 72°}{\sin 44°} \approx 164{,}29$ m.'
  - text: 'Berechne die Breite als Abstand des Masts von der Uferlinie.'
    teil: { typ: zahl, einheit: m, loesung: "120*sin(inRad(72))/sin(inRad(44))*sin(inRad(64))" }
    erklaerung: 'Im rechtwinkligen Teildreieck bei $A$ ist $\overline{AC}$ die Hypotenuse: $h = 164{,}29\cdot\sin 64° \approx 147{,}66$ m.'
```

```aufgabe
id: tr-sw-berg-sinussatz
titel: Eine Höhe mit dem Sinussatz
niveau: 3
lernziel: 4
kompetenz: anwenden
angabe: |
  Von einem Punkt $P$ sieht man einen Antennenmast auf einem Hügel unter dem Höhenwinkel $22°$. Vom Punkt $Q$, der
  $300$ m näher am Hügel auf derselben waagrechten Linie liegt, sieht man die Mastspitze unter $38°$.
  Berechne zuerst mit dem Sinussatz die Entfernung von $Q$ zur Mastspitze und dann die Höhe der Spitze über der Ebene
  von $P$ und $Q$ (zwei Nachkommastellen).
teile:
  - typ: zahl
    label: 'Entfernung $Q$ bis Spitze'
    einheit: m
    loesung: "300*sin(inRad(22))/sin(inRad(16))"
    anzeige: '407{,}72'
    fehler:
      - wert: "300*sin(inRad(22))/sin(inRad(38))"
        meldung: 'Der Winkel an der Spitze ist nicht $38°$. Im Dreieck $P$, $Q$, Spitze ist der Winkel bei $Q$ gleich $180° - 38° = 142°$. Für die Spitze bleiben $16°$.'
  - typ: zahl
    label: 'Höhe'
    einheit: m
    loesung: "300*sin(inRad(22))/sin(inRad(16))*sin(inRad(38))"
    anzeige: '251{,}02'
hinweise:
  - 'Betrachte das schiefe Dreieck $P$, $Q$, Spitze. Der Innenwinkel bei $Q$ ist der Nebenwinkel des Höhenwinkels.'
  - 'Winkel bei der Spitze: $180° - 22° - 142° = 16°$. Dann Sinussatz für die Seite gegenüber von $22°$.'
loesung: |
  **Ansatz:** Im Dreieck aus $P$, $Q$ und der Spitze $S$ kennen wir die Seite $\overline{PQ} = 300$ m und die Winkel. Bei $P$ ist der Winkel $22°$, bei $Q$ ist er $180° - 38° = 142°$.
  ---
  Winkel bei $S$: $180° - 22° - 142° = 16°$. Er liegt $\overline{PQ}$ gegenüber.
  ---
  Sinussatz: $\overline{QS} = \frac{300\cdot\sin 22°}{\sin 16°} \approx \frac{112{,}38}{0{,}2756} \approx 407{,}72$ m.
  ---
  Höhe im rechtwinkligen Dreieck bei $Q$: $h = 407{,}72\cdot\sin 38° \approx 251{,}02$ m. **Kontrolle mit dem Tangens-Ansatz:** $\frac{300}{1/\tan 22° - 1/\tan 38°} \approx 251{,}02$ m.
```

```aufgabe
id: tr-ssw
titel: Der mehrdeutige Fall vollständig
niveau: 3
lernziel: 4
kompetenz: rechnen
angabe: |
  Von einem Dreieck sind $a = 7$, $b = 10$ und $\alpha = 38°$ bekannt.

  a) Begründe, dass es zwei verschiedene Dreiecke mit diesen Angaben gibt.

  b) Berechne für beide Dreiecke den Winkel $\beta$ und die Seite $c$ (zwei Nachkommastellen). Gib zuerst das Dreieck
  mit dem spitzen $\beta$ an.
teile:
  - typ: zahl
    label: '$\beta_1$ (spitz)'
    einheit: °
    loesung: "inGrad(asin(10*sin(inRad(38))/7))"
    anzeige: '61{,}58'
  - typ: zahl
    label: '$c_1$'
    loesung: "7*sin(pi - inRad(38) - asin(10*sin(inRad(38))/7))/sin(inRad(38))"
    anzeige: '11{,}21'
  - typ: zahl
    label: '$\beta_2$ (stumpf)'
    einheit: °
    loesung: "180 - inGrad(asin(10*sin(inRad(38))/7))"
    anzeige: '118{,}42'
    fehler:
      - wert: "inGrad(asin(10*sin(inRad(38))/7))"
        meldung: 'Das ist wieder der spitze Winkel. Der zweite Winkel mit demselben Sinus ist $180° - \beta_1$.'
  - typ: zahl
    label: '$c_2$'
    loesung: "7*sin(inRad(180 - 38) - (pi - asin(10*sin(inRad(38))/7)))/sin(inRad(38))"
    anzeige: '4{,}55'
  - typ: text
    label: 'a) Begründung'
    muster: |
      Der Sinussatz liefert $\sin\beta = \frac{10\cdot\sin 38°}{7} \approx 0{,}8795 < 1$. Dazu gibt es zwei Winkel zwischen
      $0°$ und $180°$: $\beta_1 \approx 61{,}58°$ und $\beta_2 \approx 118{,}42°$. Beide erfüllen $38° + \beta < 180°$. Also
      gibt es zwei Dreiecke. Das passt zur Faustregel, denn $a < b$.
hinweise:
  - 'Sinussatz: $\sin\beta = \frac{b\sin\alpha}{a}$. Zu einem Sinuswert unter $1$ gibt es zwischen $0°$ und $180°$ zwei Winkel.'
  - 'Prüfe für jeden Kandidaten $\alpha + \beta < 180°$. Berechne dann jeweils $\gamma$ aus der Winkelsumme und $c$ mit dem Sinussatz.'
loesung: |
  **Ansatz:** Fall SSW mit $a < b$. Wir rechnen beide Kandidaten durch.
  ---
  Sinussatz: $\sin\beta = \frac{10\cdot\sin 38°}{7} \approx 0{,}8795 < 1$. Kandidaten: $\beta_1 \approx 61{,}58°$ und $\beta_2 = 180° - 61{,}58° = 118{,}42°$.
  ---
  Prüfen: $38° + 61{,}58° < 180°$ und $38° + 118{,}42° = 156{,}42° < 180°$. Beide sind gültig.
  ---
  Dreieck 1: $\gamma_1 = 180° - 38° - 61{,}58° = 80{,}42°$, also $c_1 = \frac{7\cdot\sin 80{,}42°}{\sin 38°} \approx 11{,}21$.
  ---
  Dreieck 2: $\gamma_2 = 180° - 38° - 118{,}42° = 23{,}58°$, also $c_2 = \frac{7\cdot\sin 23{,}58°}{\sin 38°} \approx 4{,}55$.
```

```aufgabe
id: tr-sw-zwei-bojen
titel: Der Abstand zweier Bojen
niveau: 3
lernziel: 4
kompetenz: modellieren
angabe: |
  Zwei Bojen $P$ und $Q$ schwimmen vor einer Küste. Von den Punkten $A$ und $B$ an der Küste, $200$ m voneinander
  entfernt, misst man folgende Winkel zwischen der Standlinie $AB$ und den Peilrichtungen:

  - bei $A$: $\angle BAP = 68°$ und $\angle BAQ = 52°$
  - bei $B$: $\angle ABP = 47°$ und $\angle ABQ = 82°$

  Beide Bojen liegen auf derselben Seite von $AB$. Berechne $\overline{AP}$, $\overline{AQ}$ und den Abstand
  $\overline{PQ}$ der Bojen (zwei Nachkommastellen).
teile:
  - typ: zahl
    label: '$\overline{AP}$'
    einheit: m
    loesung: "200*sin(inRad(47))/sin(inRad(65))"
    anzeige: '161{,}39'
  - typ: zahl
    label: '$\overline{AQ}$'
    einheit: m
    loesung: "200*sin(inRad(82))/sin(inRad(46))"
    anzeige: '275{,}33'
  - typ: zahl
    label: '$\overline{PQ}$'
    einheit: m
    loesung: "sqrt((200*sin(inRad(47))/sin(inRad(65)))^2 + (200*sin(inRad(82))/sin(inRad(46)))^2 - 2*(200*sin(inRad(47))/sin(inRad(65)))*(200*sin(inRad(82))/sin(inRad(46)))*cos(inRad(16)))"
    anzeige: '128{,}16'
    fehler:
      - wert: "sqrt((200*sin(inRad(47))/sin(inRad(65)))^2 + (200*sin(inRad(82))/sin(inRad(46)))^2 - 2*(200*sin(inRad(47))/sin(inRad(65)))*(200*sin(inRad(82))/sin(inRad(46)))*cos(inRad(120)))"
        meldung: 'Der Winkel bei $A$ zwischen den beiden Peilrichtungen ist die **Differenz** $68° - 52° = 16°$, nicht die Summe.'
hinweise:
  - 'Arbeite in drei Dreiecken: $ABP$ (WSW), $ABQ$ (WSW) und zum Schluss $APQ$ (SWS).'
  - 'Im Dreieck $ABP$ ist der Winkel bei $P$ gleich $180° - 68° - 47° = 65°$, im Dreieck $ABQ$ bei $Q$ gleich $46°$. Im Dreieck $APQ$ ist der Winkel bei $A$ gleich $68° - 52° = 16°$.'
loesung: |
  **Ansatz:** Die Strecke $\overline{PQ}$ liegt in keinem Dreieck mit der Standlinie. Wir berechnen deshalb zuerst $\overline{AP}$ und $\overline{AQ}$ mit dem Sinussatz und dann $\overline{PQ}$ mit dem Kosinussatz.
  ---
  Dreieck $ABP$: Winkel bei $P$ ist $180° - 68° - 47° = 65°$. $\overline{AP}$ liegt dem Winkel bei $B$ gegenüber: $\overline{AP} = \frac{200\cdot\sin 47°}{\sin 65°} \approx 161{,}39$ m.
  ---
  Dreieck $ABQ$: Winkel bei $Q$ ist $180° - 52° - 82° = 46°$. $\overline{AQ} = \frac{200\cdot\sin 82°}{\sin 46°} \approx 275{,}33$ m.
  ---
  Dreieck $APQ$: Beide Peilrichtungen gehen von $A$ aus, der Winkel zwischen ihnen ist $68° - 52° = 16°$. Kosinussatz (SWS): $\overline{PQ}^2 = 161{,}39^2 + 275{,}33^2 - 2\cdot 161{,}39\cdot 275{,}33\cdot\cos 16° \approx 16\,424$.
  ---
  $\overline{PQ} \approx 128{,}16$ m. **Antwort:** Die Bojen sind etwa $128$ m voneinander entfernt.
```

## Die Graphen der Winkelfunktionen

```aufgabe
id: tr-gr-check-270
titel: Ganz unten am Einheitskreis
art: check
niveau: 1
angabe: |
  Welche $y$-Koordinate hat der Punkt am Einheitskreis zum Winkel $270°$, also $\frac{3\pi}{2}$? Zum Nachlesen:
  [5.4 Der Einheitskreis](/lernen/mathe3/trigonometrie/der-einheitskreis).
teile:
  - typ: zahl
    loesung: "-1"
    fehler:
      - wert: "0"
        meldung: '$0$ ist die $x$-Koordinate. Bei $270°$ liegt der Punkt ganz unten auf der $y$-Achse.'
      - wert: "1"
        meldung: 'Ganz oben ist der Punkt bei $90°$. Bei $270°$ hat er drei Viertel einer Drehung hinter sich und liegt ganz unten.'
loesung: |
  Bei $270°$ liegt der Punkt ganz unten, bei $(0 \mid -1)$.
  ---
  Seine $y$-Koordinate ist $-1$, also $\sin 270° = -1$. Das ist der tiefste Wert, den der Sinus annehmen kann.
```

**Worum geht es?** Ab jetzt sind $\sin$, $\cos$ und $\tan$ **Funktionen** einer reellen Zahl $x$. Die Zahl $x$ ist der
Winkel im **Bogenmaß**. Du trägst $x$ waagrecht ab und den Funktionswert senkrecht. Stell dir vor, du wickelst den
Einheitskreis ab: Der Sinusgraph zeichnet die Höhe des umlaufenden Punktes über der zurückgelegten Bogenlänge auf.

```plot
x: [-0.5, "2*pi + 0.5"]
y: [-1.5, 1.5]
graphen:
  - { f: "sin(x)", label: "sin x", farbe: 0 }
  - { f: "cos(x)", label: "cos x", farbe: 1 }
punkte:
  - { x: "pi/2", y: 1, label: "Hochpunkt (π/2 | 1)" }
  - { x: "pi", y: -1, label: "Tiefpunkt (π | −1)", farbe: 1 }
beschriftung: Sinus (blau) und Kosinus (orange) über eine volle Periode von 0 bis 2π. Beide schwanken zwischen −1 und 1. Der Kosinus ist der um π/2 nach links verschobene Sinus.
```

### Sinus und Kosinus

:::satz[Eigenschaften von Sinus und Kosinus]
Für alle ganzen Zahlen $k$, also $k \in \Z$, gilt:
$$\begin{array}{l|l|l}
 & \sin x & \cos x \\ \hline
\text{Definitionsmenge} & \R & \R \\
\text{Wertemenge} & [-1, 1] & [-1, 1] \\
\text{Periode} & 2\pi & 2\pi \\
\text{Symmetrie} & \text{ungerade: } \sin(-x) = -\sin x & \text{gerade: } \cos(-x) = \cos x \\
\text{Nullstellen} & x = k\pi & x = \frac{\pi}{2} + k\pi \\
\text{Hochpunkte (Wert 1)} & x = \frac{\pi}{2} + 2k\pi & x = 2k\pi \\
\text{Tiefpunkte (Wert } {-1}) & x = \frac{3\pi}{2} + 2k\pi & x = \pi + 2k\pi
\end{array}$$
Außerdem gilt $\cos x = \sin\left(x + \frac{\pi}{2}\right)$.
:::

Das Zeichen $\in$ liest man „ist Element von“, $\Z$ ist die Menge der ganzen Zahlen $\ldots, -2, -1, 0, 1, 2, \ldots$.
„Periode $2\pi$“ heißt: Nach $2\pi$ wiederholt sich der Graph genau, so wie der Punkt nach einer vollen Drehung wieder
am Anfang steht. „Ungerade“ heißt, der Graph ist punktsymmetrisch zum Ursprung. „Gerade“ heißt, er ist
spiegelsymmetrisch zur $y$-Achse.

:::beispiel[Nullstellen und Extremstellen in einem Intervall]
Gesucht sind alle Nullstellen, Hoch- und Tiefpunkte von $\sin x$ im Intervall $[0, 3\pi]$.

1. **Nullstellen:** $x = k\pi$. Im Intervall liegen $0$, $\pi$, $2\pi$ und $3\pi$.
2. **Hochpunkte:** $x = \frac{\pi}{2} + 2k\pi$. Im Intervall liegen $\frac{\pi}{2}$ (für $k = 0$) und
   $\frac{5\pi}{2}$ (für $k = 1$).
3. **Tiefpunkte:** $x = \frac{3\pi}{2} + 2k\pi$. Im Intervall liegt nur $\frac{3\pi}{2}$. Für $k = 1$ wäre es
   $\frac{7\pi}{2}$, und das ist größer als $3\pi = \frac{6\pi}{2}$.
4. **Kontrolle am Graphen:** Auf $1{,}5$ Perioden gibt es zwei Bögen nach oben und einen nach unten. Es passt.
:::

Warum ist der Kosinus ein verschobener Sinus? Am Einheitskreis ist der Kosinus die $x$-Koordinate. Die
$x$-Koordinate beim Winkel $x$ ist dieselbe wie die $y$-Koordinate eine Vierteldrehung weiter, also bei
$x + \frac{\pi}{2}$. Der Kosinus „läuft dem Sinus um eine Viertelperiode voraus“. Bei einer schwingenden Feder kennst du
das: Ist die Auslenkung am größten, ist die Geschwindigkeit null, und umgekehrt.

:::beispiel[Ein Steinchen im Fahrradreifen]
Ein Fahrradreifen hat außen den Radius $0{,}34$ m. Im Profil steckt ein kleines Steinchen. Es startet auf Höhe der
Achse, an der **hinteren** Seite des Rads. Rollt das Rad vorwärts und dreht sich dabei um den Winkel $x$ (im
Bogenmaß), dann steigt die hintere Seite nach oben. Das Steinchen liegt dann $h(x) = 0{,}34\cdot\sin x$ Meter über der
Achse.

1. **Ganz oben** ist das Steinchen, wenn $\sin x = 1$, also zuerst bei $x = \frac{\pi}{2}$. Es ist dann $0{,}34$ m über
   der Achse.
2. **Weg dorthin:** Beim Rollen legt das Rad die Bogenlänge $r\cdot x$ zurück, also $0{,}34\cdot\frac{\pi}{2} \approx 0{,}53$ m.
3. **Ganz unten** ist das Steinchen bei $x = \frac{3\pi}{2}$. Bis dahin ist das Rad $0{,}34\cdot\frac{3\pi}{2} \approx 1{,}60$ m
   gerollt.
4. **Wieder auf Achshöhe** ist es bei $x = \pi$ und $x = 2\pi$, nach etwa $1{,}07$ m und $2{,}14$ m.
:::

:::merke[Rezept: Sinus- und Kosinuskurve skizzieren]
1. Achsen zeichnen und auf der $x$-Achse $\frac{\pi}{2}$, $\pi$, $\frac{3\pi}{2}$, $2\pi$ markieren. Ein guter Maßstab:
   $\pi$ entspricht etwa $3$ Kästchen.
2. Fünf Punkte einer Periode eintragen. Sinus: $0$, $1$, $0$, $-1$, $0$. Kosinus: $1$, $0$, $-1$, $0$, $1$.
3. Mit einer glatten, runden Welle verbinden. An Hoch- und Tiefpunkten ist die Kurve waagrecht, nicht spitz.
4. Periodisch nach links und rechts fortsetzen.
:::

:::achtung[Hoch- und Tiefpunkte verwechselt]
Jemand gibt die Tiefpunkte von $\cos x$ in $[0, 2\pi]$ als $x = \frac{3\pi}{2}$ an. Das ist der Tiefpunkt des
**Sinus**. Der Kosinus startet bei $x = 0$ oben mit dem Wert $1$ und ist eine halbe Periode später unten.

Richtig: Der Tiefpunkt von $\cos x$ in $[0, 2\pi]$ liegt bei $x = \pi$, denn $\cos\pi = -1$. Hilfe: Setz die Stelle zur
Kontrolle ein. $\cos\frac{3\pi}{2} = 0$, das ist eine Nullstelle, kein Tiefpunkt.
:::

```aufgabe
id: tr-gr-check-periodisch
titel: Einen Wert mit der Periode finden
art: check
niveau: 1
angabe: |
  Welchen Wert hat $\sin\frac{5\pi}{2}$?
teile:
  - typ: auswahl
    optionen: ['$1$', '$0$', '$-1$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$\frac{5\pi}{2} = 2\pi + \frac{\pi}{2}$. Nach einer vollen Periode ist der Sinus wieder dort, wo er bei $\frac{\pi}{2}$ war.'
      - wert: 2
        meldung: 'Den Wert $-1$ hat der Sinus bei $\frac{3\pi}{2}$. Hier ist der Winkel aber $2\pi + \frac{\pi}{2}$.'
loesung: |
  $\frac{5\pi}{2} = 2\pi + \frac{\pi}{2}$. Die Periode des Sinus ist $2\pi$.
  ---
  Also $\sin\frac{5\pi}{2} = \sin\frac{\pi}{2} = 1$. Das ist der zweite Hochpunkt aus dem Beispiel mit dem Intervall $[0, 3\pi]$.
```

### Der Tangens

:::satz[Eigenschaften des Tangens]
$\tan x = \frac{\sin x}{\cos x}$ ist überall dort definiert, wo $\cos x \ne 0$ ist, also für $x \ne \frac{\pi}{2} + k\pi$.
An diesen Stellen hat er **Polstellen** mit senkrechten Asymptoten. Seine Wertemenge ist ganz $\R$, seine Periode
ist $\pi$. Er ist ungerade, hat die Nullstellen $x = k\pi$ und steigt auf jedem Intervall zwischen zwei Polstellen
streng monoton.
:::

Eine **Polstelle** ist eine Stelle, an der die Funktionswerte über alle Grenzen wachsen oder fallen. Die senkrechte
Gerade dort heißt **Asymptote**: Der Graph schmiegt sich an sie an, ohne sie zu erreichen. Die Polstellen des Tangens
sind genau die Nullstellen des Kosinus, denn dort steht im Nenner $0$.

```plot
x: [-4.7, 4.7]
y: [-4, 4]
graphen:
  - { f: "tan(x)", von: "-3*pi/2 + 0.05", bis: "-pi/2 - 0.05", farbe: 2 }
  - { f: "tan(x)", von: "-pi/2 + 0.05", bis: "pi/2 - 0.05", farbe: 2, label: "tan x" }
  - { f: "tan(x)", von: "pi/2 + 0.05", bis: "3*pi/2 - 0.05", farbe: 2 }
strecken:
  - { von: ["-pi/2", -4], nach: ["-pi/2", 4], gestrichelt: true, farbe: 3 }
  - { von: ["pi/2", -4], nach: ["pi/2", 4], gestrichelt: true, farbe: 3 }
  - { von: ["3*pi/2", -4], nach: ["3*pi/2", 4], gestrichelt: true, farbe: 3 }
  - { von: ["-3*pi/2", -4], nach: ["-3*pi/2", 4], gestrichelt: true, farbe: 3 }
beschriftung: Der Tangens hat die Periode π. Seine Polstellen bei ±π/2 und ±3π/2 sind die Nullstellen des Kosinus. Dort hat der Graph senkrechte Asymptoten (gestrichelt).
```

:::achtung[Periode des Tangens mit 2π angenommen]
Gesucht sind alle $x$ mit $\tan x = 1$. Jemand schreibt $x = \frac{\pi}{4} + 2k\pi$. Damit fehlt zum Beispiel
$x = \frac{5\pi}{4}$, denn auch $\tan\frac{5\pi}{4} = 1$.

Der Tangens wiederholt sich schon nach $\pi$. Richtig ist also $x = \frac{\pi}{4} + k\pi$. Am Einheitskreis liegt der
Punkt zu $\frac{5\pi}{4}$ genau gegenüber dem Punkt zu $\frac{\pi}{4}$. Beide Koordinaten wechseln das Vorzeichen,
ihr Quotient bleibt gleich.
:::

```aufgabe
id: tr-gr-check-periode
titel: Die Periode des Tangens
art: check
niveau: 1
angabe: |
  Nach welcher kürzesten Strecke wiederholt sich der Graph von $\tan x$?
teile:
  - typ: auswahl
    optionen: ['$\pi$', '$2\pi$', '$\frac{\pi}{2}$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Nach $2\pi$ wiederholt er sich auch, aber schon früher. Eine halbe Drehung reicht, weil sich die beiden Vorzeichen im Quotienten aufheben.'
      - wert: 2
        meldung: 'Nach $\frac{\pi}{2}$ ist der Tangens gerade an einer Polstelle. Zwei Polstellen liegen $\pi$ auseinander.'
loesung: |
  Die Polstellen liegen bei $\frac{\pi}{2} + k\pi$, also im Abstand $\pi$. Dazwischen durchläuft der Tangens jeden Wert genau einmal.
  ---
  Die Periode ist deshalb $\pi$.
```

### Die Umkehrfunktionen arcsin, arccos und arctan

Der Sinus nimmt jeden Wert zwischen $-1$ und $1$ unendlich oft an. Er ist auf ganz $\R$ also nicht umkehrbar. Eine
Umkehrfunktion gibt es nur, wenn jeder Wert genau einmal vorkommt (siehe [Kapitel 4, Verkettung und Umkehrfunktion](/lernen/mathe3/funktionen/verkettung-und-umkehrfunktion)). Man schränkt deshalb auf ein Stück ein, auf dem die Funktion streng monoton ist:
$$\begin{array}{l|l|l}
\text{Funktion} & \text{eingeschränkt auf} & \text{Umkehrfunktion liefert} \\ \hline
\sin & \left[-\frac{\pi}{2}, \frac{\pi}{2}\right] & \arcsin\colon\ \text{Werte von } -90° \text{ bis } 90° \\
\cos & [0, \pi] & \arccos\colon\ \text{Werte von } 0° \text{ bis } 180° \\
\tan & \left(-\frac{\pi}{2}, \frac{\pi}{2}\right) & \arctan\colon\ \text{Werte zwischen } -90° \text{ und } 90°
\end{array}$$

Genau das macht der Taschenrechner. $\sin^{-1}(0{,}6)$ liefert **nur** $36{,}87°$, weil das der einzige passende Winkel
zwischen $-90°$ und $90°$ ist. Den zweiten Winkel $143{,}13°$ musst du selbst ergänzen. Wie das systematisch geht,
zeigt [5.11 Trigonometrische Gleichungen](/lernen/mathe3/trigonometrie/trigonometrische-gleichungen).

:::achtung[arcsin macht sin nicht immer rückgängig]
Jemand rechnet: „$\arcsin(\sin 150°) = 150°$, weil $\arcsin$ und $\sin$ sich aufheben.“ Der Rechner zeigt aber $30°$.

Denn $\sin 150° = 0{,}5$, und $\arcsin(0{,}5)$ liefert den Winkel zwischen $-90°$ und $90°$, also $30°$. Die beiden
Funktionen heben sich nur auf, wenn der Winkel schon im Bereich von $\arcsin$ liegt.
:::

### Ausblick: die Steigung der Sinuskurve

Schau den Sinusgraphen genau an. Bei $x = 0$ steigt er unter $45°$, also mit der Steigung $1$. Bei $x = \frac{\pi}{2}$
ist er waagrecht, Steigung $0$. Bei $x = \pi$ fällt er mit Steigung $-1$. Das sind genau die Werte des Kosinus:
$\cos 0 = 1$, $\cos\frac{\pi}{2} = 0$, $\cos\pi = -1$. Tatsächlich gilt: Die Steigung von $\sin x$ an jeder Stelle ist
$\cos x$. Man schreibt $(\sin x)' = \cos x$. Das gilt **nur im Bogenmaß**. Herleitung und Regeln findest du in
[Kapitel 9, Grundregeln](/lernen/mathe3/differentialrechnung/grundregeln-potenz-faktor-und-summenregel-und-die-wichtigsten-ableitungen).

```reflexion
frage: Warum ist der Graph des Kosinus spiegelsymmetrisch zur $y$-Achse, der des Sinus aber nicht?
antwort: |
  Am Einheitskreis ist $-x$ das Spiegelbild von $x$ an der waagrechten Achse. Beim Spiegeln an der waagrechten Achse
  bleibt die $x$-Koordinate gleich, die $y$-Koordinate wechselt das Vorzeichen. Also ist $\cos(-x) = \cos x$: Links
  und rechts von der $y$-Achse hat der Kosinusgraph dieselben Werte, er ist spiegelsymmetrisch. Beim Sinus gilt
  $\sin(-x) = -\sin x$. Sein Graph ist links von der $y$-Achse das auf den Kopf gestellte Bild von rechts, also
  punktsymmetrisch zum Ursprung.
```

```aufgabe
id: tr-gr-nullstellen
titel: Nullstellen des Kosinus
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Bestimme alle Nullstellen von $\cos x$ im Intervall $[0, 2\pi]$. Eingabe zum Beispiel als `pi/2`, getrennt durch Strichpunkte.
teile:
  - typ: menge
    label: 'Nullstellen'
    loesung: ["pi/2", "3*pi/2"]
    fehler:
      - wert: ["0", "pi", "2*pi"]
        meldung: 'Das sind die Nullstellen des **Sinus**. Der Kosinus startet bei $x = 0$ mit dem Wert $1$.'
      - wert: ["pi/2"]
        meldung: 'Im Intervall gibt es noch eine zweite Nullstelle. Der Kosinus ist eine halbe Periode später wieder null.'
hinweise:
  - 'Die Nullstellen des Kosinus sind $x = \frac{\pi}{2} + k\pi$. Welche davon liegen zwischen $0$ und $2\pi$?'
loesung: |
  **Ansatz:** Allgemein ist $\cos x = 0$ für $x = \frac{\pi}{2} + k\pi$, denn dort liegt der Punkt am Einheitskreis auf der $y$-Achse.
  ---
  $k = 0$ liefert $\frac{\pi}{2}$, $k = 1$ liefert $\frac{3\pi}{2}$. Für $k = 2$ wäre es $\frac{5\pi}{2} > 2\pi$. Die Nullstellen sind $\frac{\pi}{2}$ und $\frac{3\pi}{2}$.
```

```aufgabe
id: tr-gr-eigenschaften
titel: Aussagen über die Graphen
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Beurteile jede Aussage über die Graphen von $\sin$, $\cos$ und $\tan$.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: 'Der Graph des Kosinus ist spiegelsymmetrisch zur $y$-Achse.'
        richtig: true
        erklaerung: 'Es gilt $\cos(-x) = \cos x$.'
      - text: 'Der Sinus nimmt Werte bis $2$ an, wenn $x$ groß genug ist.'
        richtig: false
        erklaerung: 'Der Sinus ist eine Koordinate am Einheitskreis und liegt immer zwischen $-1$ und $1$.'
      - text: 'Der Tangens hat dort Polstellen, wo der Kosinus null ist.'
        richtig: true
        erklaerung: 'Im Quotienten $\frac{\sin x}{\cos x}$ steht dort $0$ im Nenner.'
      - text: 'Die Periode des Tangens ist $2\pi$.'
        richtig: false
        erklaerung: 'Der Tangens wiederholt sich schon nach $\pi$.'
    fehler:
      - wert: [r, f, r, r]
        meldung: 'Prüfe die letzte Aussage: Wie weit liegen zwei Polstellen des Tangens auseinander?'
hinweise:
  - 'Denk an den Einheitskreis: Sinus und Kosinus sind Koordinaten, der Tangens ist ihr Quotient.'
loesung: |
  **Ansatz:** Jede Aussage am Einheitskreis prüfen.
  ---
  Richtig sind die erste und die dritte Aussage. Falsch ist die zweite, weil der Sinus zwischen $-1$ und $1$ bleibt, und die vierte, weil die Periode des Tangens $\pi$ ist.
```

```aufgabe
id: tr-gr-umkehr
titel: Was liefern die Umkehrfunktionen?
niveau: 2
lernziel: 5
kompetenz: verstehen
angabe: |
  Bestimme exakt im Bogenmaß. Eingabe zum Beispiel als `-pi/4`.
teile:
  - typ: zahl
    label: '$\arcsin\left(\sin\frac{5\pi}{6}\right)$'
    loesung: "pi/6"
    anzeige: '\tfrac{\pi}{6}'
    fehler:
      - wert: "5*pi/6"
        meldung: '$\arcsin$ liefert nur Werte zwischen $-\frac{\pi}{2}$ und $\frac{\pi}{2}$. $\frac{5\pi}{6}$ liegt außerhalb.'
  - typ: zahl
    label: '$\arccos\left(\cos\left(-\frac{\pi}{3}\right)\right)$'
    loesung: "pi/3"
    anzeige: '\tfrac{\pi}{3}'
    fehler:
      - wert: "-pi/3"
        meldung: '$\arccos$ liefert nur Werte zwischen $0$ und $\pi$, also nie negative.'
  - typ: zahl
    label: '$\arctan\left(\tan\frac{3\pi}{4}\right)$'
    loesung: "-pi/4"
    anzeige: '-\tfrac{\pi}{4}'
    fehler:
      - wert: "3*pi/4"
        meldung: '$\arctan$ liefert nur Werte zwischen $-\frac{\pi}{2}$ und $\frac{\pi}{2}$.'
      - wert: "pi/4"
        meldung: '$\tan\frac{3\pi}{4} = -1$ ist negativ. Der Winkel mit Tangens $-1$ im Bereich von $\arctan$ ist negativ.'
hinweise:
  - 'Berechne zuerst den inneren Wert, zum Beispiel $\sin\frac{5\pi}{6} = \frac12$.'
  - 'Suche dann den Winkel mit diesem Wert **im Bereich der Umkehrfunktion**: $\arcsin$ und $\arctan$ zwischen $-\frac{\pi}{2}$ und $\frac{\pi}{2}$, $\arccos$ zwischen $0$ und $\pi$.'
loesung: |
  **Ansatz:** Die Umkehrfunktionen liefern immer einen Winkel aus ihrem festen Bereich. Wir rechnen von innen nach außen.
  ---
  $\sin\frac{5\pi}{6} = \frac12$. Der Winkel zwischen $-\frac{\pi}{2}$ und $\frac{\pi}{2}$ mit Sinus $\frac12$ ist $\frac{\pi}{6}$.
  ---
  $\cos\left(-\frac{\pi}{3}\right) = \frac12$. Der Winkel zwischen $0$ und $\pi$ mit Kosinus $\frac12$ ist $\frac{\pi}{3}$.
  ---
  $\tan\frac{3\pi}{4} = -1$. Der Winkel zwischen $-\frac{\pi}{2}$ und $\frac{\pi}{2}$ mit Tangens $-1$ ist $-\frac{\pi}{4}$.
```

```aufgabe
id: tr-gr-monotonie-gefuehrt
titel: Wo fällt der Sinus?
niveau: 2
lernziel: 5
kompetenz: verstehen
angabe: |
  Auf welchem Teilintervall von $[0, 2\pi]$ ist $\sin x$ streng monoton fallend? Gib die linke und die rechte Grenze an.
teile:
  - typ: zahl
    label: 'linke Grenze'
    loesung: "pi/2"
    anzeige: '\tfrac{\pi}{2}'
    fehler:
      - wert: "0"
        meldung: 'Bei $0$ steigt der Sinus noch. Er fällt erst ab seinem Hochpunkt.'
  - typ: zahl
    label: 'rechte Grenze'
    loesung: "3*pi/2"
    anzeige: '\tfrac{3\pi}{2}'
    fehler:
      - wert: "pi"
        meldung: 'Bei $\pi$ ist der Sinus null, aber er fällt danach weiter bis zum Tiefpunkt.'
hinweise:
  - 'Der Sinus fällt vom Hochpunkt bis zum Tiefpunkt.'
  - 'Hochpunkt bei $\frac{\pi}{2}$, Tiefpunkt bei $\frac{3\pi}{2}$.'
loesung: |
  **Ansatz:** Zwischen einem Hochpunkt und dem nächsten Tiefpunkt fällt eine glatte Welle durchgehend.
  ---
  Hochpunkt von $\sin$ in $[0, 2\pi]$: $x = \frac{\pi}{2}$ mit Wert $1$. Tiefpunkt: $x = \frac{3\pi}{2}$ mit Wert $-1$.
  ---
  Also fällt der Sinus auf $\left[\frac{\pi}{2}, \frac{3\pi}{2}\right]$. **Am Kreis:** Zwischen $90°$ und $270°$ läuft der Punkt von ganz oben nach ganz unten.
gefuehrt:
  - text: 'Wo hat $\sin x$ in $[0, 2\pi]$ seinen Hochpunkt?'
    teil: { typ: zahl, loesung: "pi/2", fehler: [ { wert: "pi", meldung: 'Bei $\pi$ ist $\sin\pi = 0$. Der Hochpunkt liegt dort, wo der Sinus $1$ ist.' } ] }
    erklaerung: '$\sin\frac{\pi}{2} = 1$, der größte mögliche Wert.'
  - text: 'Wo hat $\sin x$ in $[0, 2\pi]$ seinen Tiefpunkt?'
    teil: { typ: zahl, loesung: "3*pi/2" }
    erklaerung: '$\sin\frac{3\pi}{2} = -1$, der kleinste mögliche Wert.'
  - text: 'Was passiert zwischen diesen beiden Stellen?'
    erklaerung: 'Der Punkt am Einheitskreis läuft von ganz oben über links nach ganz unten. Seine Höhe nimmt dabei ständig ab. Der Sinus fällt also auf $\left[\frac{\pi}{2}, \frac{3\pi}{2}\right]$.'
```

```aufgabe
id: tr-gr-zuordnen
titel: Graphen zuordnen
niveau: 2
lernziel: 5
kompetenz: verstehen
angabe: |
  Die Abbildung zeigt drei Graphen A (blau), B (orange) und C (grün). Einer gehört zu $\cos x$, einer zu $-\sin x$
  und einer zu $\sin x + 1$. Ordne zu.
plot:
  x: [-0.3, "2*pi + 0.3"]
  y: [-1.6, 2.4]
  graphen:
    - { f: "cos(x)", label: "A", farbe: 0 }
    - { f: "-sin(x)", label: "B", farbe: 1 }
    - { f: "sin(x) + 1", label: "C", farbe: 2 }
teile:
  - typ: auswahl
    label: 'Welcher Graph ist $\cos x$?'
    optionen: ['A', 'B', 'C']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Setze $x = 0$ ein: $\cos 0 = 1$. Graph B geht aber durch $(0 \mid 0)$.'
  - typ: auswahl
    label: 'Welcher Graph ist $-\sin x$?'
    optionen: ['A', 'B', 'C']
    richtig: [1]
    fehler:
      - wert: 2
        meldung: 'Graph C liegt zwischen $0$ und $2$. Das ist eine Verschiebung nach oben, keine Spiegelung.'
  - typ: auswahl
    label: 'Welcher Graph ist $\sin x + 1$?'
    optionen: ['A', 'B', 'C']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: 'Graph A schwankt zwischen $-1$ und $1$. Bei $\sin x + 1$ liegen alle Werte um $1$ höher, also zwischen $0$ und $2$.'
hinweise:
  - 'Setze $x = 0$ und $x = \frac{\pi}{2}$ in jede Funktion ein und vergleiche mit den Graphen.'
  - 'Achte auf die Wertebereiche: Welcher Graph liegt zwischen $0$ und $2$?'
loesung: |
  **Ansatz:** Werte an markanten Stellen vergleichen. Bei $x = 0$: $\cos 0 = 1$, $-\sin 0 = 0$ und $\sin 0 + 1 = 1$.
  ---
  Bei $x = \frac{\pi}{2}$: $\cos\frac{\pi}{2} = 0$, $-\sin\frac{\pi}{2} = -1$ und $\sin\frac{\pi}{2} + 1 = 2$.
  ---
  Graph A beginnt bei $1$ und fällt: $\cos x$. Graph B beginnt bei $0$ und fällt auf $-1$: $-\sin x$. Graph C liegt zwischen $0$ und $2$: $\sin x + 1$.
```

```aufgabe
id: tr-gr-steigung
titel: Die Steigung der Sinuskurve
niveau: 2
lernziel: 5
kompetenz: verstehen
angabe: |
  Die Steigung des Graphen von $\sin x$ an einer Stelle $x$ ist $\cos x$ (im Bogenmaß).
  Wie groß ist die Steigung der Sinuskurve bei $x = \frac{\pi}{3}$ und bei $x = \pi$?
teile:
  - typ: zahl
    label: 'Steigung bei $\frac{\pi}{3}$'
    loesung: "cos(pi/3)"
    anzeige: '\tfrac12'
    fehler:
      - wert: "sin(pi/3)"
        meldung: 'Das ist der Funktionswert, also die Höhe der Kurve. Die Steigung ist der Kosinus an dieser Stelle.'
  - typ: zahl
    label: 'Steigung bei $\pi$'
    loesung: "cos(pi)"
    anzeige: '-1'
    fehler:
      - wert: "0"
        meldung: 'Bei $\pi$ ist der **Funktionswert** null. Die Kurve geht dort aber steil abwärts durch die Achse.'
hinweise:
  - 'Setze die Stellen in $\cos x$ ein, nicht in $\sin x$.'
  - 'Kontrolliere am Graphen: Bei $\pi$ schneidet die Sinuskurve die Achse fallend.'
loesung: |
  **Ansatz:** Laut Angabe ist die Steigung von $\sin x$ an der Stelle $x$ gleich $\cos x$.
  ---
  Bei $\frac{\pi}{3}$: $\cos\frac{\pi}{3} = \frac12$. Die Kurve steigt dort noch, aber flacher als bei $0$.
  ---
  Bei $\pi$: $\cos\pi = -1$. Die Kurve fällt dort so steil wie sie bei $0$ steigt. **Kontrolle am Graphen:** Bei $\pi$ schneidet die Sinuskurve die Achse von oben nach unten.
```

```aufgabe
id: tr-gr-sin-groesser-cos
titel: Wo liegt der Sinus über dem Kosinus?
niveau: 3
lernziel: 5
kompetenz: begruenden
angabe: |
  Für welche $x$ im Intervall $[0, 2\pi]$ gilt $\sin x > \cos x$? Das Ergebnis ist ein offenes Intervall $(u, v)$.

  a) Gib $u$ und $v$ an.

  b) Begründe dein Ergebnis mit dem Einheitskreis oder mit den Graphen.
teile:
  - typ: zahl
    label: 'a) $u$'
    loesung: "pi/4"
    anzeige: '\tfrac{\pi}{4}'
    fehler:
      - wert: "0"
        meldung: 'Bei $x = 0$ ist $\sin 0 = 0 < 1 = \cos 0$. Dort liegt der Sinus unter dem Kosinus.'
  - typ: zahl
    label: 'a) $v$'
    loesung: "5*pi/4"
    anzeige: '\tfrac{5\pi}{4}'
    fehler:
      - wert: "pi"
        meldung: 'Bei $\pi$ ist $\sin\pi = 0 > -1 = \cos\pi$. Dort liegt der Sinus noch über dem Kosinus.'
  - typ: text
    label: 'b) Begründung'
    muster: |
      Gleich sind Sinus und Kosinus, wenn der Punkt am Einheitskreis auf der Winkelhalbierenden $y = x$ liegt, also bei
      $\frac{\pi}{4}$ und $\frac{5\pi}{4}$. Oberhalb dieser Geraden ist $y > x$, also $\sin x > \cos x$. Der Punkt liegt
      oberhalb, solange der Winkel zwischen $\frac{\pi}{4}$ und $\frac{5\pi}{4}$ liegt. Mit den Graphen: Sie schneiden sich bei
      $\frac{\pi}{4}$ und $\frac{5\pi}{4}$, dazwischen liegt die Sinuskurve oben.
hinweise:
  - 'Finde zuerst die Stellen, an denen $\sin x = \cos x$ gilt. Dort liegt der Punkt am Einheitskreis auf der Geraden $y = x$.'
  - 'Teste dann eine Stelle zwischen den Schnittpunkten, etwa $x = \frac{\pi}{2}$.'
loesung: |
  **Ansatz:** Zuerst die Grenzen: Wo ist $\sin x = \cos x$? Am Einheitskreis heißt das $y = x$, der Punkt liegt auf der Winkelhalbierenden.
  ---
  Die Winkelhalbierende schneidet den Kreis bei $45°$ und $225°$, also bei $\frac{\pi}{4}$ und $\frac{5\pi}{4}$.
  ---
  Testwert zwischen den Grenzen: $x = \frac{\pi}{2}$ gibt $\sin = 1 > 0 = \cos$. Testwert außerhalb: $x = 0$ gibt $0 < 1$.
  ---
  Also gilt $\sin x > \cos x$ genau für $\frac{\pi}{4} < x < \frac{5\pi}{4}$.
```

## Die allgemeine Sinusfunktion

```aufgabe
id: tr-sf-check-strecken
titel: Einen Graphen strecken
art: check
niveau: 1
angabe: |
  Wie entsteht der Graph von $g(x) = 3\cdot f(x)$ aus dem Graphen von $f$? Zum Nachlesen:
  [Kapitel 4, Graphen verschieben, strecken und spiegeln](/lernen/mathe3/funktionen/graphen-verschieben-strecken-und-spiegeln).
teile:
  - typ: auswahl
    optionen:
      - 'Er wird in $y$-Richtung mit dem Faktor $3$ gestreckt.'
      - 'Er wird um $3$ nach oben verschoben.'
      - 'Er wird in $x$-Richtung mit dem Faktor $3$ gestreckt.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Eine Verschiebung nach oben wäre $f(x) + 3$. Hier wird jeder Funktionswert **mal** $3$ genommen.'
      - wert: 2
        meldung: 'Der Faktor steht außerhalb, er wirkt auf die Funktionswerte, also auf die $y$-Richtung.'
loesung: |
  Jeder Funktionswert wird verdreifacht. Punkte auf der $x$-Achse bleiben dort, alles andere rückt dreimal so weit von der $x$-Achse weg.
  ---
  Das ist eine Streckung in $y$-Richtung mit dem Faktor $3$.
```

**Worum geht es?** Echte Schwingungen sind verschieden hoch, verschieden schnell und beginnen zu verschiedenen Zeiten.
Ein Pendel, eine Wechselspannung und die Tageslänge im Jahr folgen trotzdem alle derselben Form. Du beschreibst sie,
indem du die Sinuskurve streckst und verschiebst, genau wie jede andere Funktion in [Kapitel 4, Graphen verschieben, strecken und spiegeln](/lernen/mathe3/funktionen/graphen-verschieben-strecken-und-spiegeln).

:::definition[Allgemeine Sinusfunktion]
Eine allgemeine Sinusfunktion hat die Form
$$f(x) = a\cdot\sin\big(b\,(x - c)\big) + d \qquad\text{mit } a \ne 0 \text{ und } b > 0.$$
Dabei ist:

- $|a|$ die **Amplitude**, also der größte Ausschlag von der Mittellage. Ein negatives $a$ spiegelt die Kurve.
- $p = \frac{2\pi}{b}$ die **Periode**, also die Länge einer vollen Schwingung. Ist die Variable eine Zeit $t$,
  heißt sie Schwingungsdauer $T$, und $b$ heißt **Kreisfrequenz** $\omega$ (lies „omega“).
- $c$ die **Phasenverschiebung**, also die Verschiebung in $x$-Richtung. Für $c > 0$ geht es nach rechts.
- $d$ die **Mittellage**, also die Verschiebung in $y$-Richtung.

Die Wertemenge ist $[d - |a|,\ d + |a|]$.
:::

**Beispiel:** $f(x) = 4\sin\big(2(x - 1)\big) + 3$ hat die Amplitude $4$, die Periode $\pi$, die Verschiebung $1$ nach
rechts und die Mittellage $3$. **Nichtbeispiel:** $g(x) = \sin(x^2)$ ist **keine** allgemeine Sinusfunktion. Im
Argument steht kein linearer Ausdruck. Die Schwingungen werden immer schneller, es gibt keine feste Periode.

Warum ist die Periode $\frac{2\pi}{b}$? Der Sinus durchläuft eine volle Schwingung, wenn sein Argument um $2\pi$
wächst. Das Argument ist $b(x - c)$. Es wächst um $2\pi$, wenn $x$ um $\frac{2\pi}{b}$ wächst. Ein großes $b$ heißt
also **kurze** Periode und schnelle Schwingung.

:::achtung[Die Periode mit b verwechselt]
Jemand liest bei $f(x) = \sin(4x)$ ab: „Periode $4$.“ Aber $b = 4$ ist keine Länge. Es sagt, dass die Kurve **viermal
so schnell** schwingt wie $\sin x$.

Richtig ist $p = \frac{2\pi}{4} = \frac{\pi}{2} \approx 1{,}57$. Probe: $\sin\big(4\cdot\frac{\pi}{2}\big) = \sin 2\pi = 0$,
und nach $\frac{\pi}{2}$ beginnt die zweite Schwingung.
:::

:::achtung[Die Verschiebung ohne Ausklammern abgelesen]
Bei $f(x) = \sin(3x - \pi)$ liest jemand die Verschiebung $\pi$ ab. Das stimmt nicht, weil vor $x$ noch die $3$ steht.
Klammere zuerst $b$ aus: $3x - \pi = 3\left(x - \frac{\pi}{3}\right)$.

Richtig ist die Verschiebung $c = \frac{\pi}{3}$ nach rechts. Probe: Bei $x = \frac{\pi}{3}$ ist das Argument
$3\cdot\frac{\pi}{3} - \pi = 0$. Dort beginnt die Welle, genau wie $\sin x$ bei $x = 0$.
:::

:::beispiel[Alle Parameter ablesen]
Gegeben ist $f(x) = 2\sin\!\left(3x - \frac{\pi}{2}\right) + 1$.

1. **Ausklammern:** $3x - \frac{\pi}{2} = 3\left(x - \frac{\pi}{6}\right)$. Also ist $a = 2$, $b = 3$,
   $c = \frac{\pi}{6}$ und $d = 1$.
2. **Amplitude** $2$, **Mittellage** $y = 1$, **Wertemenge** $[1 - 2, 1 + 2] = [-1, 3]$.
3. **Periode** $\frac{2\pi}{3} \approx 2{,}09$.
4. **Startpunkt** der Welle (Mittellage, aufsteigend): $x = \frac{\pi}{6}$.
5. **Erster Hochpunkt:** Eine Viertelperiode nach dem Start, $\frac{\pi}{6} + \frac{2\pi}{12} = \frac{\pi}{3}$, mit dem
   Wert $3$. Probe: $2\sin\left(\pi - \frac{\pi}{2}\right) + 1 = 2\cdot 1 + 1 = 3$.
:::

:::merke[Rezept: allgemeine Sinusfunktion skizzieren]
1. Falls nötig $b$ ausklammern, dann $a$, $b$, $c$, $d$ ablesen.
2. Die Mittellage $y = d$ und die Grenzen $y = d \pm |a|$ als waagrechte Hilfslinien zeichnen.
3. Startpunkt bei $x = c$: Mittellage, aufsteigend, wenn $a > 0$ ist.
4. Eine Periode $p = \frac{2\pi}{b}$ in vier gleiche Teile teilen. Die fünf Punkte sind: Mittellage, Hochpunkt,
   Mittellage, Tiefpunkt, Mittellage. Bei $a < 0$ kommt zuerst der Tiefpunkt.
5. Die Punkte mit einer glatten Welle verbinden und periodisch fortsetzen.
:::

```aufgabe
id: tr-sf-check-vorhersage
titel: Was passiert, wenn b größer wird?
art: check
niveau: 1
angabe: |
  Sag voraus, bevor du das Widget benutzt: In $f(x) = \sin(b\,x)$ wird $b$ von $1$ auf $2$ verdoppelt. Was passiert mit
  dem Graphen?
teile:
  - typ: auswahl
    optionen:
      - 'Die Wellen werden doppelt so schmal, die Periode halbiert sich.'
      - 'Die Wellen werden doppelt so hoch.'
      - 'Die Wellen werden doppelt so breit, die Periode verdoppelt sich.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Die Höhe steuert der Faktor $a$ vor dem Sinus. $b$ steht im Argument und wirkt auf die $x$-Richtung.'
      - wert: 2
        meldung: 'Ein größeres $b$ heißt: Das Argument wächst schneller. Die Schwingung wird also schneller, nicht langsamer.'
loesung: |
  Die Periode ist $\frac{2\pi}{b}$. Für $b = 1$ ist sie $2\pi$, für $b = 2$ nur noch $\pi$.
  ---
  Die Wellen werden also doppelt so schmal. Prüfe es im Widget.
```

```widget
name: parameter
titel: Allgemeine Sinusfunktion a·sin(b(x − c)) + d
props:
  f: "a*sin(b*(x-c))+d"
  parameter:
    - { name: a, min: -3, max: 3, step: 0.5, wert: 2 }
    - { name: b, min: 0.5, max: 4, step: 0.5, wert: 3 }
    - { name: c, min: -3.14, max: 3.14, step: 0.01, wert: 0.52 }
    - { name: d, min: -2, max: 2, step: 0.5, wert: 1 }
  x: [-1, 7]
  y: [-4, 4]
  zusatz: ["sin(x)"]
  piAchse: true
```

**Beobachte und erkläre:** Stell zuerst $a = 1$, $b = 1$, $c = 0$ und $d = 0$ ein. Dann liegt die Kurve genau auf
$\sin x$. Ändere $b$ auf $2$ und prüfe deine Vorhersage. Ändere danach nur $a$: Die Nullstellen bleiben, nur die Höhe
ändert sich. Ändere zum Schluss nur $c$: Die ganze Welle wandert seitlich. Die Voreinstellung zeigt das Beispiel mit
$c = 0{,}52 \approx \frac{\pi}{6}$.

### Kosinus- und Tangensfunktion in allgemeiner Form

Genauso gibt es die allgemeine Kosinusfunktion $f(x) = a\cdot\cos\big(b(x - c)\big) + d$. Die Parameter bedeuten
dasselbe. Der einzige Unterschied: Bei $x = c$ startet die Welle im **Hochpunkt** (für $a > 0$), nicht in der
Mittellage. Welche Form du wählst, ist Geschmackssache. Startet ein Vorgang ganz oben oder ganz unten, ist der Kosinus
bequemer.

Beim Tangens gibt es keine Amplitude, weil er unbeschränkt ist. Bei $f(x) = a\cdot\tan(b\,x)$ ist die Periode
$\frac{\pi}{b}$, denn die Grundperiode des Tangens ist $\pi$.

:::beispiel[Wechselspannung im Stromnetz]
Die Netzspannung in Österreich hat den Effektivwert $230$ V und die Frequenz $50$ Hz, also $50$ Schwingungen pro
Sekunde. Ihr Spitzenwert ist $230\cdot\sqrt2 \approx 325$ V. Beschreibe die Spannung als Funktion der Zeit.

1. **Periode:** $50$ Schwingungen pro Sekunde heißt $T = \frac{1}{50}\text{ s} = 0{,}02$ s.
2. **Kreisfrequenz:** $b = \frac{2\pi}{T} = \frac{2\pi}{0{,}02\text{ s}} = 100\pi\ \frac{1}{\text{s}}$. Allgemein ist
   $\omega = 2\pi f$, wobei $f$ die Frequenz ist.
3. **Amplitude** $325$ V, Mittellage $0$, Start bei $t = 0$ in der Mittellage aufsteigend.
4. **Funktion:** $u(t) = 325\cdot\sin(100\pi\, t)$ mit $t$ in Sekunden und $u$ in Volt.
5. **Deutung:** Zwischen zwei Nulldurchgängen liegen $0{,}01$ s. So oft wechselt der Strom seine Richtung.
:::

```reflexion
frage: Warum führt ein großes $b$ in $\sin(b\,x)$ zu einer kurzen Periode? Erkläre es ohne die Formel $\frac{2\pi}{b}$.
antwort: |
  Der Sinus wiederholt sich, wenn sein Argument eine volle Runde von $2\pi$ zurückgelegt hat. Bei $\sin(b\,x)$ wächst
  das Argument $b$-mal so schnell wie $x$. Mit $b = 3$ hat das Argument die volle Runde schon geschafft, wenn $x$
  erst ein Drittel davon zurückgelegt hat. Die Welle braucht also nur ein Drittel der Strecke für eine Schwingung. Es
  ist wie ein Rad, das sich dreimal so schnell dreht: Es kommt dreimal so oft an derselben Stelle vorbei.
```

```aufgabe
id: tr-periode
titel: Periode und Amplitude
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Bestimme die Amplitude und die Periode von $f(x) = -4\sin(2x)$ sowie die Periode von $g(x) = \cos\!\left(\frac{x}{3}\right)$.
teile:
  - typ: zahl
    label: 'Amplitude von $f$'
    loesung: "4"
    fehler:
      - wert: "-4"
        meldung: 'Die Amplitude ist ein Ausschlag, also eine Länge. Sie ist $|a|$ und damit nie negativ. Das Minus spiegelt nur die Kurve.'
  - typ: zahl
    label: 'Periode von $f$'
    loesung: "2*pi/2"
    anzeige: '\pi'
    fehler:
      - wert: "2"
        meldung: '$b = 2$ ist keine Länge. Die Periode ist $\frac{2\pi}{b}$.'
  - typ: zahl
    label: 'Periode von $g$'
    loesung: "2*pi/(1/3)"
    anzeige: '6\pi'
    fehler:
      - wert: "2*pi/3"
        meldung: 'Hier ist $b = \frac13$, nicht $3$. Durch $\frac13$ teilen heißt mal $3$ nehmen.'
hinweise:
  - 'Periode $= \frac{2\pi}{b}$. Die Amplitude ist $|a|$, also immer positiv.'
loesung: |
  **Ansatz:** Bei $a\sin(bx)$ und $a\cos(bx)$ ist die Amplitude $|a|$ und die Periode $\frac{2\pi}{b}$.
  ---
  $f$: $a = -4$, Amplitude $|a| = 4$. Das Minus spiegelt die Kurve an der $x$-Achse. $b = 2$, Periode $\frac{2\pi}{2} = \pi$.
  ---
  $g$: $b = \frac13$, Periode $\frac{2\pi}{1/3} = 6\pi$. Die Kurve ist dreimal so breit wie $\cos x$.
```

```aufgabe
id: tr-sf-cos-tan
titel: Kosinus und Tangens in allgemeiner Form
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Bestimme Periode und Wertemenge von $f(x) = 2\cos(\pi x) - 1$ und die Periode von $h(x) = \tan(3x)$.
teile:
  - typ: zahl
    label: 'Periode von $f$'
    loesung: "2*pi/pi"
    fehler:
      - wert: "pi"
        meldung: '$b = \pi$ ist keine Periode. Die Periode ist $\frac{2\pi}{\pi}$.'
  - typ: zahl
    label: 'kleinster Wert von $f$'
    loesung: "-3"
    fehler:
      - wert: "-2"
        meldung: 'Die Mittellage ist $-1$, nicht $0$. Der kleinste Wert ist Mittellage minus Amplitude.'
  - typ: zahl
    label: 'größter Wert von $f$'
    loesung: "1"
  - typ: zahl
    label: 'Periode von $h$'
    loesung: "pi/3"
    anzeige: '\tfrac{\pi}{3}'
    fehler:
      - wert: "2*pi/3"
        meldung: 'Die Grundperiode des Tangens ist $\pi$, nicht $2\pi$. Also $\frac{\pi}{3}$.'
hinweise:
  - 'Kosinus: Periode $\frac{2\pi}{b}$, Wertemenge $[d - |a|, d + |a|]$. Tangens: Periode $\frac{\pi}{b}$.'
loesung: |
  **Ansatz:** Die Parameter bedeuten beim Kosinus dasselbe wie beim Sinus. Beim Tangens ist die Grundperiode $\pi$.
  ---
  $f$: $a = 2$, $b = \pi$, $d = -1$. Periode $\frac{2\pi}{\pi} = 2$. Wertemenge $[-1 - 2, -1 + 2] = [-3, 1]$.
  ---
  $h$: $b = 3$, Periode $\frac{\pi}{3}$.
```

```aufgabe
id: tr-allgemeine-sinus
titel: Parameter einer Sinusfunktion
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Gegeben ist $f(x) = 3\sin\!\left(2x + \frac{\pi}{3}\right) - 2$.
  Bestimme die Periode, die Phasenverschiebung $c$ in der Form $a\sin\big(b(x - c)\big) + d$, den größten und den kleinsten
  Funktionswert.
teile:
  - typ: zahl
    label: 'Periode'
    loesung: "2*pi/2"
    anzeige: '\pi'
  - typ: zahl
    label: '$c$'
    loesung: "-pi/6"
    anzeige: '-\tfrac{\pi}{6}'
    fehler:
      - wert: "pi/3"
        meldung: 'Erst $b = 2$ ausklammern: $2x + \frac{\pi}{3} = 2\left(x + \frac{\pi}{6}\right)$.'
      - wert: "pi/6"
        meldung: 'Das Vorzeichen stimmt nicht. $x + \frac{\pi}{6} = x - \left(-\frac{\pi}{6}\right)$, also $c = -\frac{\pi}{6}$. Die Welle ist nach links verschoben.'
  - typ: zahl
    label: 'größter Wert'
    loesung: "1"
    fehler:
      - wert: "3"
        meldung: 'Die Amplitude ist $3$, aber die Mittellage liegt bei $-2$. Der größte Wert ist $-2 + 3$.'
  - typ: zahl
    label: 'kleinster Wert'
    loesung: "-5"
hinweise:
  - 'Klammere im Argument die $2$ aus.'
  - 'Schreibe $x + \frac{\pi}{6}$ als $x - c$. Größter und kleinster Wert sind $d \pm |a|$.'
loesung: |
  **Ansatz:** Auf die Form $a\sin\big(b(x - c)\big) + d$ bringen und ablesen.
  ---
  $2x + \frac{\pi}{3} = 2\left(x + \frac{\pi}{6}\right) = 2\left(x - \left(-\frac{\pi}{6}\right)\right)$. Also $a = 3$, $b = 2$, $c = -\frac{\pi}{6}$, $d = -2$.
  ---
  Periode $\frac{2\pi}{2} = \pi$. Die Verschiebung ist $\frac{\pi}{6}$ nach **links**.
  ---
  Wertemenge $[-2 - 3, -2 + 3] = [-5, 1]$. **Probe:** Der Start der Welle liegt bei $x = -\frac{\pi}{6}$, dort ist das Argument $2\cdot\left(-\frac{\pi}{6}\right) + \frac{\pi}{3} = 0$.
```

```aufgabe
id: tr-sinus-aus-graph
titel: Funktionsterm aus dem Graphen
niveau: 2
lernziel: 5
kompetenz: modellieren
angabe: |
  Der Graph zeigt eine Funktion der Form $f(x) = a\sin(bx) + d$ mit $a > 0$ und $b > 0$. Lies $a$, $d$ und die Periode
  ab und bestimme $b$.
plot:
  x: [-1, 9]
  y: [-5, 3]
  graphen:
    - { f: "3*sin(pi*x/2) - 1" }
  punkte:
    - { x: 1, y: 2 }
    - { x: 3, y: -4 }
    - { x: 0, y: -1 }
    - { x: 4, y: -1 }
teile:
  - typ: zahl
    label: '$a$'
    loesung: "3"
    fehler:
      - wert: "6"
        meldung: '$6$ ist der Abstand von ganz unten nach ganz oben. Die Amplitude ist die Hälfte davon.'
  - typ: zahl
    label: '$d$'
    loesung: "-1"
  - typ: zahl
    label: 'Periode'
    loesung: "4"
    fehler:
      - wert: "2"
        meldung: 'Von einem Hochpunkt zum nächsten Tiefpunkt ist nur eine halbe Periode. Miss von Hochpunkt zu Hochpunkt.'
  - typ: zahl
    label: '$b$'
    loesung: "2*pi/4"
    anzeige: '\tfrac{\pi}{2}'
hinweise:
  - 'Mittellage = Mittelwert von größtem und kleinstem Wert. Amplitude = halber Abstand.'
  - 'Periode = Abstand zweier gleichartiger Punkte, etwa zweier Hochpunkte. Dann $b = \frac{2\pi}{p}$.'
loesung: |
  **Ansatz:** Aus dem größten und kleinsten Wert folgen Amplitude und Mittellage, aus dem Abstand gleicher Punkte die Periode.
  ---
  Größter Wert $2$ (bei $x = 1$), kleinster Wert $-4$ (bei $x = 3$). Mittellage $d = \frac{2 + (-4)}{2} = -1$, Amplitude $a = \frac{2 - (-4)}{2} = 3$.
  ---
  Von der Mittellage aufsteigend bei $x = 0$ bis wieder dort bei $x = 4$: Periode $p = 4$.
  ---
  $b = \frac{2\pi}{4} = \frac{\pi}{2}$. Also $f(x) = 3\sin\!\left(\frac{\pi}{2}x\right) - 1$. **Probe:** $f(1) = 3\cdot\sin\frac{\pi}{2} - 1 = 2$.
```

```aufgabe
id: tr-sf-feder-gefuehrt
titel: Ein Federpendel beschreiben
niveau: 2
lernziel: 5
kompetenz: modellieren
angabe: |
  Ein Gewicht an einer Feder schwingt auf und ab. Der größte Ausschlag aus der Ruhelage beträgt $5$ cm, eine volle
  Schwingung dauert $0{,}8$ s. Zur Zeit $t = 0$ geht das Gewicht gerade aufwärts durch die Ruhelage.

  a) Gib die Auslenkung $s(t)$ (in cm, $t$ in s) als allgemeine Sinusfunktion an. Gib $b$ an.

  b) Wo ist das Gewicht nach $0{,}3$ s? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    label: 'a) $b$'
    loesung: "2*pi/0.8"
    anzeige: '2{,}5\pi \approx 7{,}85'
    fehler:
      - wert: "0.8"
        meldung: 'Das ist die Schwingungsdauer $T$. Die Kreisfrequenz ist $b = \frac{2\pi}{T}$.'
  - typ: zahl
    label: 'b) $s(0{,}3)$'
    einheit: cm
    loesung: "5*sin(2.5*pi*0.3)"
    anzeige: '3{,}54'
    fehler:
      - wert: "5*sin(inRad(2.5*pi*0.3))"
        meldung: 'Der Rechner stand auf DEG. Bei Schwingungen mit der Zeit im Argument rechnest du im Bogenmaß, also RAD.'
hinweise:
  - 'Start in der Ruhelage aufwärts heißt: reine Sinusfunktion ohne Verschiebung, also $c = 0$ und $d = 0$.'
  - 'Die Amplitude ist $5$ cm. Für $b$ gilt $b = \frac{2\pi}{T}$ mit $T = 0{,}8$ s. Den Rechner auf RAD stellen.'
loesung: |
  **Ansatz:** Ein Vorgang, der in der Mittellage aufwärts startet, passt zu $a\sin(b\,t)$ ohne Verschiebung.
  ---
  Amplitude $a = 5$ cm. Kreisfrequenz $b = \frac{2\pi}{0{,}8} = 2{,}5\pi \approx 7{,}85\ \frac{1}{\text{s}}$. Also $s(t) = 5\cdot\sin(2{,}5\pi\, t)$.
  ---
  Nach $0{,}3$ s: $s(0{,}3) = 5\cdot\sin(0{,}75\pi) = 5\cdot\frac{\sqrt2}{2} \approx 3{,}54$ cm.
  ---
  **Deutung:** $0{,}3$ s sind $\frac38$ der Periode. Das Gewicht hat den höchsten Punkt nach $0{,}2$ s schon überschritten und ist auf dem Rückweg, noch $3{,}54$ cm über der Ruhelage.
gefuehrt:
  - text: 'Wie groß ist die Amplitude $a$ in cm?'
    teil: { typ: zahl, einheit: cm, loesung: "5", fehler: [ { wert: "10", meldung: 'Die Amplitude ist der Ausschlag aus der Ruhelage, nicht der Weg von ganz unten nach ganz oben.' } ] }
    erklaerung: 'Der größte Ausschlag aus der Ruhelage ist $5$ cm, also $a = 5$.'
  - text: 'Berechne die Kreisfrequenz $b$ aus der Schwingungsdauer.'
    teil: { typ: zahl, loesung: "2*pi/0.8" }
    erklaerung: '$b = \frac{2\pi}{T} = \frac{2\pi}{0{,}8} = 2{,}5\pi \approx 7{,}85$.'
  - text: 'Brauchst du eine Verschiebung $c$ oder $d$?'
    erklaerung: 'Nein. Die Ruhelage ist $0$, also $d = 0$. Bei $t = 0$ startet die Bewegung aufwärts in der Ruhelage, genau wie $\sin$ bei $0$. Also $c = 0$.'
  - text: 'Berechne $s(0{,}3)$ im Modus RAD.'
    teil: { typ: zahl, einheit: cm, loesung: "5*sin(2.5*pi*0.3)" }
    erklaerung: '$5\cdot\sin(0{,}75\pi) \approx 3{,}54$ cm.'
```

```aufgabe
id: tr-sf-fehler-finden
titel: Wo steckt der Fehler bei der Verschiebung?
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  Tim soll die Phasenverschiebung von $f(x) = \sin(2x - \pi)$ angeben. Er schreibt: „Die Kurve ist um $\pi$ nach rechts
  verschoben.“

  a) Welche Verschiebung ist richtig? Gib $c$ an.

  b) Erkläre Tims Fehler in einem Satz.
teile:
  - typ: zahl
    label: 'a) $c$'
    loesung: "pi/2"
    anzeige: '\tfrac{\pi}{2}'
    fehler:
      - wert: "pi"
        meldung: 'Das ist Tims Antwort. Klammere zuerst die $2$ vor dem $x$ aus.'
  - typ: text
    label: 'b) Erklärung'
    muster: |
      Tim hat die Zahl im Argument abgelesen, ohne vorher $b = 2$ auszuklammern. Aus $2x - \pi = 2\left(x - \frac{\pi}{2}\right)$
      folgt die Verschiebung $\frac{\pi}{2}$. Probe: Bei $x = \frac{\pi}{2}$ ist das Argument null, dort beginnt die Welle.
hinweise:
  - 'Die Form ist $\sin\big(b(x - c)\big)$. Klammere $b$ aus.'
  - 'Probe: An der Stelle $x = c$ muss das ganze Argument null sein.'
loesung: |
  **Ansatz:** Die Verschiebung kann man nur ablesen, wenn das Argument die Form $b(x - c)$ hat.
  ---
  $2x - \pi = 2\left(x - \frac{\pi}{2}\right)$. Also $c = \frac{\pi}{2}$, die Kurve ist um $\frac{\pi}{2}$ nach rechts verschoben.
  ---
  Tims Fehler: Er hat das $\pi$ direkt abgelesen und übersehen, dass es noch durch $b = 2$ geteilt werden muss. **Probe:** $2\cdot\frac{\pi}{2} - \pi = 0$, dort beginnt die Welle.
```

```aufgabe
id: tr-tageslaenge
titel: Tageslänge in Wien
niveau: 3
lernziel: 5
kompetenz: modellieren
angabe: |
  Die Tageslänge in Wien, also die Zeit zwischen Sonnenaufgang und Sonnenuntergang, wird durch
  $$L(t) = 12{,}2 + 3{,}9\,\sin\!\left(\frac{2\pi}{365}(t - 80)\right)$$
  modelliert. Dabei ist $L$ in Stunden und $t$ der Tag des Jahres, $t = 1$ ist der 1. Jänner. Der Taschenrechner muss
  auf RAD stehen.

  a) Bestimme die längste und die kürzeste Tageslänge laut Modell.

  b) An welchem Tag ist der Tag am längsten?

  c) An wie vielen Tagen im Jahr ist der Tag mindestens $14$ Stunden lang? Runde auf ganze Tage.
teile:
  - typ: zahl
    label: 'a) längste Tageslänge'
    einheit: h
    loesung: "12.2 + 3.9"
  - typ: zahl
    label: 'a) kürzeste Tageslänge'
    einheit: h
    loesung: "12.2 - 3.9"
  - typ: zahl
    label: 'b) Tag des Maximums'
    loesung: "80 + 365/4"
    toleranz: 1
    anzeige: '171{,}25 \approx 171'
    fehler:
      - wert: "80"
        meldung: 'Am Tag $80$ ist das Argument null. Dort steht der Sinus in der Mittellage, das ist die Tagundnachtgleiche im März.'
  - typ: zahl
    label: 'c) Anzahl Tage mit $L \ge 14$'
    loesung: "365*(pi - 2*asin(1.8/3.9))/(2*pi)"
    toleranz: 1
    anzeige: '126{,}8 \approx 127'
hinweise:
  - 'Der Sinus schwankt zwischen $-1$ und $1$. Das Maximum liegt dort, wo das Argument $\frac{\pi}{2}$ ist.'
  - 'c) $L(t) \ge 14$ heißt $\sin u \ge \frac{1{,}8}{3{,}9}$ mit $u = \frac{2\pi}{365}(t - 80)$. In einer Periode gilt das für $u$ zwischen $\arcsin\frac{1{,}8}{3{,}9}$ und $\pi - \arcsin\frac{1{,}8}{3{,}9}$.'
loesung: |
  **Ansatz:** $L$ ist eine allgemeine Sinusfunktion mit Mittellage $12{,}2$ h, Amplitude $3{,}9$ h und Periode $365$ Tage.
  ---
  a) $L_{\max} = 12{,}2 + 3{,}9 = 16{,}1$ h und $L_{\min} = 12{,}2 - 3{,}9 = 8{,}3$ h.
  ---
  b) $\frac{2\pi}{365}(t - 80) = \frac{\pi}{2}$ ergibt $t - 80 = \frac{365}{4} = 91{,}25$, also $t \approx 171$. Das ist der 20. Juni, die Sommersonnenwende.
  ---
  c) $L(t) \ge 14$ heißt $3{,}9\sin u \ge 1{,}8$, also $\sin u \ge 0{,}4615$. Es ist $\arcsin 0{,}4615 \approx 0{,}4797$. In einer Periode gilt die Ungleichung für $0{,}4797 \le u \le \pi - 0{,}4797 \approx 2{,}6619$.
  ---
  Zurückrechnen mit $t = 80 + \frac{365}{2\pi}\,u$: von $t \approx 107{,}9$ (Mitte April) bis $t \approx 234{,}6$ (Ende August).
  ---
  Dauer: $234{,}6 - 107{,}9 \approx 126{,}8$, also an etwa $127$ Tagen.
```

```aufgabe
id: tr-sf-gezeiten
titel: Ebbe und Flut im Hafen
niveau: 3
lernziel: 5
kompetenz: modellieren
angabe: |
  In einem Hafen ist um $4{:}00$ Uhr Hochwasser mit $5{,}8$ m Wassertiefe. Das nächste Niedrigwasser folgt $6{,}2$ Stunden
  später mit $1{,}4$ m. Die Wassertiefe wird durch $h(t) = a\cos\big(b\,(t - 4)\big) + d$ beschrieben, $t$ in Stunden
  nach Mitternacht, $h$ in Metern.

  a) Bestimme $a$, $d$ und $b$ (vier Nachkommastellen).

  b) Wie tief ist das Wasser um $13{:}00$ Uhr? Runde auf zwei Nachkommastellen.

  c) Ein Schiff braucht mindestens $3$ m Wassertiefe. Bis zu welcher Uhrzeit nach dem Hochwasser kann es auslaufen?
  Gib die Zeit in Stunden nach Mitternacht an (zwei Nachkommastellen).
teile:
  - typ: zahl
    label: 'a) $a$'
    einheit: m
    loesung: "(5.8 - 1.4)/2"
  - typ: zahl
    label: 'a) $d$'
    einheit: m
    loesung: "(5.8 + 1.4)/2"
  - typ: zahl
    label: 'a) $b$'
    loesung: "2*pi/12.4"
    anzeige: '0{,}5067'
    fehler:
      - wert: "2*pi/6.2"
        meldung: 'Von Hochwasser zu Niedrigwasser ist nur eine **halbe** Periode. Die ganze Periode dauert $12{,}4$ Stunden.'
  - typ: zahl
    label: 'b) $h(13)$'
    einheit: m
    loesung: "3.6 + 2.2*cos(2*pi/12.4*9)"
    anzeige: '3{,}27'
    fehler:
      - wert: "3.6 + 2.2*cos(inRad(2*pi/12.4*9))"
        meldung: 'Der Rechner stand auf DEG. Das Argument ist eine Zahl im Bogenmaß.'
  - typ: zahl
    label: 'c) letzte Zeit'
    einheit: h
    loesung: "4 + acos(-0.6/2.2)*12.4/(2*pi)"
    anzeige: '7{,}65'
hinweise:
  - 'Mittellage und Amplitude folgen aus Hoch- und Niedrigwasser. Von Hoch- bis Niedrigwasser vergeht eine halbe Periode.'
  - 'c) Löse $3{,}6 + 2{,}2\cos u = 3$ mit $u = b(t - 4)$. Nach dem Hochwasser fällt das Wasser, also nimmst du den ersten Wert von $\arccos$.'
loesung: |
  **Ansatz:** Das Modell startet bei $t = 4$ im Hochpunkt, deshalb passt der Kosinus ohne weitere Verschiebung.
  ---
  a) Mittellage $d = \frac{5{,}8 + 1{,}4}{2} = 3{,}6$ m, Amplitude $a = \frac{5{,}8 - 1{,}4}{2} = 2{,}2$ m. Die halbe Periode ist $6{,}2$ h, die ganze $12{,}4$ h. Also $b = \frac{2\pi}{12{,}4} \approx 0{,}5067$.
  ---
  b) $h(13) = 3{,}6 + 2{,}2\cos(0{,}5067\cdot 9) \approx 3{,}6 + 2{,}2\cdot(-0{,}1514) \approx 3{,}27$ m, im Modus RAD.
  ---
  c) $3{,}6 + 2{,}2\cos u = 3$ ergibt $\cos u = -\frac{0{,}6}{2{,}2} \approx -0{,}2727$. Nach dem Hochwasser fällt der Wasserstand, und $\arccos$ liefert den ersten passenden Wert: $u \approx 1{,}8470$.
  ---
  $t - 4 = \frac{1{,}8470}{0{,}5067} \approx 3{,}65$, also $t \approx 7{,}65$. **Antwort:** Das Schiff muss bis etwa $7{,}65$ Uhr, also gegen $7{:}39$ Uhr, ausgelaufen sein. **Plausibilität:** $3$ m liegt knapp unter der Mittellage. Die Mittellage erreicht das Wasser nach einer Viertelperiode, $3{,}1$ h. Etwas später sind es $3$ m.
```

## Trigonometrische Gleichungen

```aufgabe
id: tr-gl-check-arcsin
titel: Was liefert der Taschenrechner?
art: check
niveau: 1
angabe: |
  Welche Werte kann $\sin^{-1}$ am Taschenrechner (Modus DEG) überhaupt ausgeben? Zum Nachlesen:
  [5.9 Die Graphen der Winkelfunktionen](/lernen/mathe3/trigonometrie/die-graphen-der-winkelfunktionen).
teile:
  - typ: auswahl
    optionen:
      - 'nur Winkel von $-90°$ bis $90°$'
      - 'alle Winkel von $0°$ bis $360°$'
      - 'nur Winkel von $0°$ bis $180°$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Dann müsste der Rechner zu einem Sinuswert zwei Winkel ausgeben. Er gibt aber immer nur einen.'
      - wert: 2
        meldung: 'Diesen Bereich hat $\cos^{-1}$. Bei $\sin^{-1}$ liegt der Bereich symmetrisch um $0°$.'
loesung: |
  $\arcsin$ ist die Umkehrfunktion des Sinus, eingeschränkt auf $[-90°, 90°]$. Nur dort nimmt der Sinus jeden Wert genau einmal an.
  ---
  Also liefert der Rechner immer einen Winkel zwischen $-90°$ und $90°$. Andere Lösungen musst du selbst finden.
```

**Worum geht es?** Die Gleichung $\sin x = 0{,}8$ hat nicht eine Lösung, sondern **unendlich viele**. Der Sinus ist
periodisch und nimmt jeden Wert zwischen $-1$ und $1$ in jeder Periode zweimal an. Der Taschenrechner liefert davon
nur eine. In der Prüfung heißt es aber oft: „Gib **alle** Lösungen an.“ Diese Lektion zeigt, wie du sie systematisch
findest.

### Das Bild am Einheitskreis

Am Einheitskreis ist $\sin x$ die Höhe des Punktes. Die Gleichung $\sin x = s$ fragt also: Wo hat der Punkt die Höhe
$s$? Die waagrechte Gerade $y = s$ schneidet den Kreis in **zwei** Punkten, solange $-1 < s < 1$ ist. Der eine liegt
beim Winkel $\arcsin s$, der andere spiegelbildlich bei $\pi - \arcsin s$. Jede weitere volle Umdrehung liefert
dieselben zwei Punkte noch einmal.

Am Graphen siehst du dasselbe: Die waagrechte Gerade schneidet die Sinuskurve in jeder Periode zweimal.

```plot
x: [-0.3, "4*pi + 0.3"]
y: [-1.4, 1.4]
graphen:
  - { f: "sin(x)", label: "sin x", farbe: 0 }
  - { f: "sqrt(3)/2", label: "y = √3/2", farbe: 1, gestrichelt: true }
punkte:
  - { x: "pi/3", y: "sqrt(3)/2", label: "π/3" }
  - { x: "2*pi/3", y: "sqrt(3)/2", label: "2π/3" }
  - { x: "pi/3 + 2*pi", y: "sqrt(3)/2", label: "π/3 + 2π" }
  - { x: "2*pi/3 + 2*pi", y: "sqrt(3)/2", label: "2π/3 + 2π" }
beschriftung: Die Gerade y = √3/2 schneidet die Sinuskurve in jeder Periode zweimal. Die Lösungen von sin x = √3/2 sind π/3 + 2kπ und 2π/3 + 2kπ für alle ganzen Zahlen k.
```

:::satz[Lösungen der Grundgleichungen]
Für alle ganzen Zahlen $k$ gilt:

- $\sin x = s$ mit $-1 \le s \le 1$ hat die Lösungen $x = \arcsin s + 2k\pi$ und $x = \pi - \arcsin s + 2k\pi$.
- $\cos x = s$ mit $-1 \le s \le 1$ hat die Lösungen $x = \arccos s + 2k\pi$ und $x = -\arccos s + 2k\pi$.
- $\tan x = s$ hat für jedes $s$ die Lösungen $x = \arctan s + k\pi$.

Für $|s| > 1$ haben die Sinus- und die Kosinusgleichung **keine** Lösung. Im Gradmaß ersetzt du $\pi$ durch $180°$ und
$2\pi$ durch $360°$.
:::

Die zweite Lösungsschar kommt jeweils aus einer Spiegelung. Beim Sinus gilt $\sin(\pi - x) = \sin x$, das ist die
Spiegelung an der $y$-Achse. Beim Kosinus gilt $\cos(-x) = \cos x$, das ist die Spiegelung an der $x$-Achse. Beim
Tangens reicht eine Schar, weil er sich schon nach $\pi$ wiederholt und dazwischen jeden Wert nur einmal annimmt.

:::beispiel[Alle Winkel mit dem Sinus 0,8]
Gesucht sind alle Winkel $\alpha$ mit $\sin\alpha = 0{,}8$, im Gradmaß.

1. **Rechner (DEG):** $\sin^{-1}(0{,}8) \approx 53{,}13°$.
2. **Zweiter Winkel** mit derselben Höhe am Kreis: $180° - 53{,}13° = 126{,}87°$.
3. **Alle Lösungen:** Jede volle Umdrehung führt zum selben Punkt zurück. Also
   $$\alpha = 53{,}13° + k\cdot 360° \quad\text{oder}\quad \alpha = 126{,}87° + k\cdot 360°, \qquad k \in \Z.$$
4. **Probe:** $\sin 126{,}87° \approx 0{,}8$ und $\sin(53{,}13° - 360°) = \sin(-306{,}87°) \approx 0{,}8$.

Ist nach einem Winkel in einem Dreieck gefragt, kommen nur $53{,}13°$ und $126{,}87°$ in Frage. Beide sind möglich.
:::

:::achtung[Nur den Wert des Taschenrechners angegeben]
Bei „Gib alle Winkel mit $\sin\alpha = 0{,}8$ an“ schreibt jemand nur $\alpha \approx 53{,}13°$. Damit fehlen die zweite
Lösung $126{,}87°$ und alle Wiederholungen nach ganzen Umdrehungen.

Richtig ist $\alpha = 53{,}13° + k\cdot 360°$ oder $\alpha = 126{,}87° + k\cdot 360°$ mit $k \in \Z$. In der Prüfung
kostet die fehlende zweite Schar regelmäßig Punkte. Frag dich bei jeder Sinus- oder Kosinusgleichung: Wo ist der
zweite Punkt am Kreis?
:::

:::beispiel[Eine Kosinusgleichung]
Gesucht sind alle $x$ mit $0° \le x < 360°$ und $\cos x = -\frac{\sqrt2}{2}$.

1. **Bezugswinkel:** $\cos 45° = \frac{\sqrt2}{2}$, also ist der Bezugswinkel $45°$.
2. **Quadranten:** Der Kosinus ist negativ, der Punkt liegt also links von der $y$-Achse. Das sind der II. und der
   III. Quadrant.
3. **Lösungen:** $x_1 = 180° - 45° = 135°$ und $x_2 = 180° + 45° = 225°$.
4. **Mit der Formel:** $\arccos\left(-\frac{\sqrt2}{2}\right) = 135°$, und die zweite Lösung $-135°$ liegt nach Addition
   von $360°$ bei $225°$. Beide Wege führen zum selben Ergebnis.
:::

### Wenn im Argument mehr als x steht

Steht im Sinus ein Ausdruck wie $2x$ oder $x - \frac{\pi}{4}$, dann löst du zuerst für das ganze Argument. Erst
danach rechnest du auf $x$ zurück. Dabei wird **auch die Periode** umgerechnet.

:::beispiel[Eine Gleichung mit sin(2x)]
Gesucht sind alle $x$ in $[0, 2\pi)$ mit $\sin(2x) = \frac{\sqrt2}{2}$.

1. **Ersetzen:** $u = 2x$. Dann gilt $\sin u = \frac{\sqrt2}{2}$.
2. **Alle Lösungen für $u$:** $u = \frac{\pi}{4} + 2k\pi$ oder $u = \frac{3\pi}{4} + 2k\pi$.
3. **Zurück zu $x$:** Wir teilen durch $2$, und zwar **alles**, auch die Periode:
   $x = \frac{\pi}{8} + k\pi$ oder $x = \frac{3\pi}{8} + k\pi$.
4. **Im Intervall:** $k = 0$ liefert $\frac{\pi}{8}$ und $\frac{3\pi}{8}$. $k = 1$ liefert $\frac{9\pi}{8}$ und
   $\frac{11\pi}{8}$. Für $k = 2$ liegen die Werte über $2\pi$.

Es gibt **vier** Lösungen. Das ist logisch: $\sin(2x)$ schwingt doppelt so schnell und durchläuft in $[0, 2\pi)$ zwei
volle Perioden.
:::

:::achtung[Die Periode beim Zurückrechnen vergessen]
Bei $\sin(2x) = \frac{\sqrt2}{2}$ rechnet jemand: $2x = \frac{\pi}{4}$ oder $2x = \frac{3\pi}{4}$, also $x = \frac{\pi}{8}$
oder $x = \frac{3\pi}{8}$. Fertig. Damit fehlen $\frac{9\pi}{8}$ und $\frac{11\pi}{8}$.

Der Fehler: Die Periode $2k\pi$ wurde nicht mitgenommen. Aus $2x = \frac{\pi}{4} + 2k\pi$ wird nach dem Teilen
$x = \frac{\pi}{8} + k\pi$. Erst damit findest du alle Lösungen im Intervall.
:::

:::achtung[Grad und Bogenmaß in einer Rechnung gemischt]
Gesucht ist $x$ in $[0, 2\pi)$ mit $\sin x = 0{,}8$. Jemand rechnet im Modus RAD $\arcsin 0{,}8 \approx 0{,}9273$ und dann
für die zweite Lösung $180 - 0{,}9273 = 179{,}07$. Das mischt Bogenmaß mit Grad.

Im Bogenmaß gehört zu $180°$ die Zahl $\pi$. Richtig ist $\pi - 0{,}9273 \approx 2{,}2143$. Entscheide dich vor dem Rechnen
für ein Maß und bleib dabei.
:::

:::beispiel[Wann erreicht die Netzspannung 200 V?]
Die Netzspannung ist $u(t) = 325\cdot\sin(100\pi\, t)$ mit $t$ in Sekunden und $u$ in Volt. Wann ist die Spannung in der
ersten Periode, also für $0 \le t < 0{,}02$ s, genau $200$ V?

1. **Umformen:** $\sin(100\pi\, t) = \frac{200}{325} \approx 0{,}6154$.
2. **Für das Argument lösen,** im Modus RAD: $u_1 = \arcsin 0{,}6154 \approx 0{,}6629$ und $u_2 = \pi - 0{,}6629 \approx 2{,}4787$.
3. **Zurück zur Zeit:** $t = \frac{u}{100\pi}$, also $t_1 \approx 0{,}00211$ s und $t_2 \approx 0{,}00789$ s.
4. **Deutung:** Nach etwa $2{,}11$ ms steigt die Spannung durch $200$ V, nach etwa $7{,}89$ ms fällt sie wieder durch
   $200$ V. Beide Zeiten liegen symmetrisch um den Hochpunkt bei $5$ ms.
:::

:::merke[Rezept: trigonometrische Gleichung lösen]
1. Auf die Form $\sin(\ldots) = s$, $\cos(\ldots) = s$ oder $\tan(\ldots) = s$ bringen.
2. Bei Sinus und Kosinus prüfen, ob $|s| \le 1$ ist. Sonst gibt es keine Lösung.
3. **Einen** Grundwert mit $\arcsin$, $\arccos$ oder $\arctan$ bestimmen. Bei besonderen Werten exakt.
4. **Zweiten** Grundwert aus der Symmetrie: $\pi - \ldots$ beim Sinus, $-\ldots$ beim Kosinus. Beim Tangens entfällt er.
5. Die Periode anhängen: $+2k\pi$ bei Sinus und Kosinus, $+k\pi$ beim Tangens.
6. Steht im Argument ein Ausdruck wie $2x$: erst für das Argument lösen, dann nach $x$ umformen, **mit** der Periode.
7. Die Lösungen im verlangten Intervall auswählen und mit einer Skizze kontrollieren.
:::

```reflexion
frage: Warum hat $\sin x = s$ in jeder Periode zwei Lösungen, $\tan x = s$ aber nur eine?
antwort: |
  Der Sinus steigt in einer Periode von $-1$ auf $1$ und fällt wieder auf $-1$. Jeden Wert dazwischen durchläuft er
  einmal beim Steigen und einmal beim Fallen. Am Einheitskreis: Die waagrechte Gerade $y = s$ schneidet den Kreis in
  zwei Punkten. Der Tangens steigt dagegen zwischen zwei Polstellen ständig von $-\infty$ bis $+\infty$ und fällt nie.
  Jeden Wert nimmt er dort genau einmal an. Seine Periode ist $\pi$, deshalb lautet die Lösung $\arctan s + k\pi$.
```

```aufgabe
id: tr-gleichung-sin
titel: Eine Sinusgleichung
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Löse $\sin x = \frac{\sqrt2}{2}$ im Intervall $[0, 2\pi)$. Eingabe zum Beispiel als `pi/4`, getrennt durch Strichpunkte.
teile:
  - typ: menge
    label: 'Lösungen'
    loesung: ["pi/4", "3*pi/4"]
    fehler:
      - wert: ["pi/4"]
        meldung: 'Das ist nur der Wert des Rechners. Wegen $\sin(\pi - x) = \sin x$ gibt es eine zweite Lösung.'
      - wert: ["pi/4", "7*pi/4"]
        meldung: '$\frac{7\pi}{4}$ hat denselben **Kosinus** wie $\frac{\pi}{4}$. Beim Sinus spiegelt man an der $y$-Achse: $\pi - \frac{\pi}{4}$.'
hinweise:
  - 'Einen Wert kennst du aus der Wertetabelle. Den zweiten liefert $\sin(\pi - x) = \sin x$.'
loesung: |
  **Ansatz:** Grundwert aus der Wertetabelle, zweiter Wert aus der Symmetrie.
  ---
  $\arcsin\frac{\sqrt2}{2} = \frac{\pi}{4}$ ($45°$). Zweite Lösung: $\pi - \frac{\pi}{4} = \frac{3\pi}{4}$ ($135°$).
  ---
  Mit $+2\pi$ verlässt man das Intervall. Also $L = \left\{\frac{\pi}{4};\ \frac{3\pi}{4}\right\}$.
```

```aufgabe
id: tr-gl-cos-gefuehrt
titel: Eine Kosinusgleichung mit dem Taschenrechner
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Löse $\cos x = 0{,}4$ für $0° \le x < 360°$. Gib die Lösungen in Grad auf zwei Nachkommastellen an.
teile:
  - typ: menge
    label: 'Lösungen (in Grad)'
    loesung: ["inGrad(acos(0.4))", "360 - inGrad(acos(0.4))"]
    fehler:
      - wert: ["inGrad(acos(0.4))", "180 - inGrad(acos(0.4))"]
        meldung: '$180° - x$ ist die Spiegelung für den **Sinus**. Beim Kosinus spiegelt man an der $x$-Achse: $360° - x$.'
      - wert: ["inGrad(acos(0.4))"]
        meldung: 'Der Rechner liefert nur einen Wert. Der Kosinus ist aber in zwei Quadranten positiv.'
hinweise:
  - 'Der Kosinus ist positiv im I. und im IV. Quadranten. Der zweite Wert ist das Spiegelbild an der $x$-Achse.'
loesung: |
  **Ansatz:** Grundwert mit $\cos^{-1}$, zweiter Wert durch Spiegeln an der $x$-Achse.
  ---
  $\cos^{-1}(0{,}4) \approx 66{,}42°$. Spiegelbild: $360° - 66{,}42° = 293{,}58°$.
  ---
  $L = \{66{,}42°;\ 293{,}58°\}$. **Probe:** $\cos 293{,}58° \approx 0{,}4$.
gefuehrt:
  - text: 'Bestimme den Grundwert mit $\cos^{-1}$ im Modus DEG.'
    teil: { typ: zahl, einheit: °, loesung: "inGrad(acos(0.4))" }
    erklaerung: '$\cos^{-1}(0{,}4) \approx 66{,}42°$, ein Winkel im I. Quadranten.'
  - text: 'In welchem zweiten Quadranten ist der Kosinus auch positiv?'
    erklaerung: 'Im IV. Quadranten, rechts unten. Dort ist die $x$-Koordinate ebenfalls positiv.'
  - text: 'Berechne die zweite Lösung durch Spiegeln an der $x$-Achse.'
    teil: { typ: zahl, einheit: °, loesung: "360 - inGrad(acos(0.4))", fehler: [ { wert: "180 - inGrad(acos(0.4))", meldung: 'Diese Spiegelung gehört zum Sinus. Beim Kosinus bleibt die $x$-Koordinate bei Spiegelung an der $x$-Achse gleich.' } ] }
    erklaerung: '$360° - 66{,}42° = 293{,}58°$.'
```

```aufgabe
id: tr-gleichung-cos
titel: Kosinusgleichung in Grad
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Löse $\cos x = -\frac12$ für $0° \le x < 360°$. Gib die Lösungen in Grad an.
teile:
  - typ: menge
    label: 'Lösungen (in Grad)'
    loesung: ["120", "240"]
    fehler:
      - wert: ["60", "300"]
        meldung: 'Diese Winkel haben den Kosinus $+\frac12$. Hier ist der Kosinus negativ, der Punkt liegt links von der $y$-Achse.'
      - wert: ["120", "60"]
        meldung: '$60°$ hat den Kosinus $+\frac12$. Die zweite Lösung liegt im III. Quadranten.'
hinweise:
  - 'Bezugswinkel: $\cos 60° = \frac12$.'
  - 'In welchen Quadranten ist der Kosinus negativ? Dort die Winkel mit Bezugswinkel $60°$ bilden.'
loesung: |
  **Ansatz:** Bezugswinkel und Vorzeichen bestimmen.
  ---
  $\cos 60° = \frac12$, also Bezugswinkel $60°$. Der Kosinus ist negativ im II. und III. Quadranten.
  ---
  $x_1 = 180° - 60° = 120°$ und $x_2 = 180° + 60° = 240°$. **Probe:** $\cos 240° = -\cos 60° = -\frac12$.
```

```aufgabe
id: tr-gleichung-tan
titel: Eine Tangensgleichung
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Löse $\tan x = -\sqrt3$ im Intervall $[0, 2\pi)$.
teile:
  - typ: menge
    label: 'Lösungen'
    loesung: ["2*pi/3", "5*pi/3"]
    fehler:
      - wert: ["-pi/3"]
        meldung: 'Das ist der Wert des Rechners, er liegt aber nicht in $[0, 2\pi)$. Addiere Vielfache der Periode $\pi$.'
      - wert: ["2*pi/3"]
        meldung: 'Mit der Periode $\pi$ gibt es im Intervall eine weitere Lösung: $\frac{2\pi}{3} + \pi$.'
hinweise:
  - '$\arctan(-\sqrt3) = -\frac{\pi}{3}$. Die Periode des Tangens ist $\pi$.'
  - 'Addiere $\pi$ und $2\pi$ zum Grundwert und prüfe, welche Werte im Intervall liegen.'
loesung: |
  **Ansatz:** $\tan x = s$ hat die Lösungen $\arctan s + k\pi$.
  ---
  $\arctan(-\sqrt3) = -\frac{\pi}{3}$, also $x = -\frac{\pi}{3} + k\pi$.
  ---
  Im Intervall: $k = 1$ liefert $\frac{2\pi}{3}$, $k = 2$ liefert $\frac{5\pi}{3}$. **Kontrolle:** Der Tangens ist negativ im II. und IV. Quadranten, und $120°$ und $300°$ liegen dort.
```

```aufgabe
id: tr-gleichung-alle
titel: Alle Lösungen angeben
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Gib alle Lösungen von $\sin\alpha = 0{,}3$ im Gradmaß an. Gib zuerst die beiden Grundwinkel in $[0°, 360°)$ auf zwei
  Nachkommastellen an.
teile:
  - typ: zahl
    label: 'kleinerer Grundwinkel'
    einheit: °
    loesung: "inGrad(asin(0.3))"
    anzeige: '17{,}46'
    fehler:
      - wert: "asin(0.3)"
        meldung: 'Das ist das Ergebnis im Bogenmaß. Stell den Rechner auf DEG.'
  - typ: zahl
    label: 'größerer Grundwinkel'
    einheit: °
    loesung: "180 - inGrad(asin(0.3))"
    anzeige: '162{,}54'
    fehler:
      - wert: "360 - inGrad(asin(0.3))"
        meldung: 'Dieser Winkel hat denselben Kosinus, aber den Sinus $-0{,}3$. Beim Sinus spiegelt man an der $y$-Achse.'
  - typ: text
    label: 'alle Lösungen'
    muster: |
      $\alpha = 17{,}46° + k\cdot 360°$ oder $\alpha = 162{,}54° + k\cdot 360°$ mit $k \in \Z$.
hinweise:
  - 'Der Taschenrechner liefert nur $\sin^{-1}(0{,}3)$.'
  - 'Den zweiten Winkel liefert $180° - \sin^{-1}(0{,}3)$. Dann an beide die Periode $k\cdot 360°$ anhängen.'
loesung: |
  **Ansatz:** Grundwinkel mit dem Rechner, zweiter Grundwinkel aus der Symmetrie, dann die Periode.
  ---
  $\sin^{-1}(0{,}3) \approx 17{,}46°$. Zweiter Winkel mit gleichem Sinus: $180° - 17{,}46° = 162{,}54°$.
  ---
  Alle Lösungen: $\alpha = 17{,}46° + k\cdot 360°$ oder $\alpha = 162{,}54° + k\cdot 360°$ mit $k \in \Z$.
```

```aufgabe
id: tr-gl-bogenmass
titel: Eine Gleichung im Bogenmaß mit negativem Wert
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Löse $\sin x = -0{,}35$ im Intervall $[0, 2\pi)$. Gib die Lösungen im Bogenmaß auf vier Nachkommastellen an.
teile:
  - typ: menge
    label: 'Lösungen'
    loesung: ["pi - asin(-0.35)", "2*pi + asin(-0.35)"]
    fehler:
      - wert: ["asin(-0.35)", "pi - asin(-0.35)"]
        meldung: 'Der Rechnerwert $-0{,}3576$ liegt nicht im Intervall $[0, 2\pi)$. Addiere $2\pi$.'
      - wert: ["180 - inGrad(asin(-0.35))", "360 + inGrad(asin(-0.35))"]
        meldung: 'Das sind die Lösungen in Grad. Verlangt ist das Bogenmaß.'
hinweise:
  - 'Rechner auf RAD: $\arcsin(-0{,}35) \approx -0{,}3576$. Dieser Wert liegt nicht im Intervall.'
  - 'Zweiter Wert: $\pi - (-0{,}3576)$. Den ersten bringst du mit $+2\pi$ ins Intervall.'
loesung: |
  **Ansatz:** Grundwert mit $\arcsin$ im Modus RAD, dann Symmetrie und Periode.
  ---
  $\arcsin(-0{,}35) \approx -0{,}3576$. Das liegt im IV. Quadranten, aber unter $0$.
  ---
  Zweite Lösung: $\pi - (-0{,}3576) = \pi + 0{,}3576 \approx 3{,}4992$. Erste Lösung ins Intervall bringen: $-0{,}3576 + 2\pi \approx 5{,}9256$.
  ---
  $L \approx \{3{,}4992;\ 5{,}9256\}$. **Kontrolle:** Der Sinus ist negativ im III. und IV. Quadranten, also zwischen $\pi \approx 3{,}14$ und $2\pi \approx 6{,}28$. Beide Werte liegen dort.
```

```aufgabe
id: tr-gleichung-doppelwinkel
titel: Eine Gleichung mit sin(2x)
niveau: 3
lernziel: 6
kompetenz: rechnen
angabe: |
  Löse $\sin(2x) = \frac{\sqrt3}{2}$ im Intervall $[0, 2\pi)$.
teile:
  - typ: menge
    label: 'Lösungen'
    loesung: ["pi/6", "pi/3", "7*pi/6", "4*pi/3"]
    fehler:
      - wert: ["pi/6", "pi/3"]
        meldung: 'Die Periode wurde beim Halbieren nicht mitgenommen. Aus $2k\pi$ wird $k\pi$, und mit $k = 1$ kommen zwei weitere Lösungen dazu.'
      - wert: ["pi/3", "2*pi/3"]
        meldung: 'Das sind die Lösungen für $u = 2x$. Du musst noch durch $2$ teilen.'
hinweise:
  - 'Setze $u = 2x$ und löse zuerst $\sin u = \frac{\sqrt3}{2}$ mit allen Lösungen.'
  - 'Beim Halbieren wird auch die Periode halbiert: Aus $2k\pi$ wird $k\pi$.'
loesung: |
  **Ansatz:** Erst für das Argument $u = 2x$ lösen, dann zurückrechnen, mit der Periode.
  ---
  $\sin u = \frac{\sqrt3}{2}$ ergibt $u = \frac{\pi}{3} + 2k\pi$ oder $u = \frac{2\pi}{3} + 2k\pi$.
  ---
  $x = \frac{u}{2}$: $x = \frac{\pi}{6} + k\pi$ oder $x = \frac{\pi}{3} + k\pi$.
  ---
  In $[0, 2\pi)$: $k = 0$ liefert $\frac{\pi}{6}$ und $\frac{\pi}{3}$, $k = 1$ liefert $\frac{7\pi}{6}$ und $\frac{4\pi}{3}$. Vier Lösungen, weil $\sin(2x)$ im Intervall zwei volle Perioden durchläuft.
```

```aufgabe
id: tr-gl-feder
titel: Wann ist das Gewicht 4,5 cm hoch?
niveau: 3
lernziel: 6
kompetenz: modellieren
angabe: |
  Die Auslenkung eines Federpendels ist $s(t) = 6\cdot\sin(4t)$ mit $t$ in Sekunden und $s$ in cm.

  a) Zu welchen Zeiten im Intervall $0 \le t \le \frac{\pi}{2}$ ist die Auslenkung genau $4{,}5$ cm? Runde auf vier
  Nachkommastellen.

  b) Wie lange ist das Gewicht in diesem Intervall höher als $4{,}5$ cm? (vier Nachkommastellen)
teile:
  - typ: menge
    label: 'a) Zeiten in s'
    loesung: ["asin(0.75)/4", "(pi - asin(0.75))/4"]
    fehler:
      - wert: ["asin(0.75)/4"]
        meldung: 'Das Gewicht kommt in einer Schwingung zweimal durch $4{,}5$ cm: einmal auf dem Weg nach oben und einmal auf dem Weg zurück.'
      - wert: ["inGrad(asin(0.75))/4", "(180 - inGrad(asin(0.75)))/4"]
        meldung: 'Das Argument $4t$ ist im Bogenmaß. Rechne im Modus RAD.'
  - typ: zahl
    label: 'b) Dauer'
    einheit: s
    loesung: "(pi - 2*asin(0.75))/4"
    anzeige: '0{,}3614'
hinweise:
  - 'Löse zuerst $\sin(4t) = 0{,}75$ für das Argument $u = 4t$, im Bogenmaß.'
  - 'Die Periode von $s$ ist $\frac{2\pi}{4} = \frac{\pi}{2}$. Im Intervall liegt also genau eine Schwingung. Teile die beiden Werte für $u$ durch $4$.'
loesung: |
  **Ansatz:** $6\sin(4t) = 4{,}5$ heißt $\sin(4t) = 0{,}75$. Wir lösen für $u = 4t$ und rechnen dann auf $t$ zurück.
  ---
  Im Modus RAD: $u_1 = \arcsin 0{,}75 \approx 0{,}8481$ und $u_2 = \pi - 0{,}8481 \approx 2{,}2935$.
  ---
  $t = \frac{u}{4}$: $t_1 \approx 0{,}2120$ s und $t_2 \approx 0{,}5734$ s. Die nächsten Lösungen kämen eine Periode $\frac{\pi}{2} \approx 1{,}5708$ s später und liegen außerhalb.
  ---
  b) Zwischen $t_1$ und $t_2$ ist das Gewicht höher: $0{,}5734 - 0{,}2120 \approx 0{,}3614$ s. **Plausibilität:** Der Hochpunkt liegt bei $t = \frac{\pi}{8} \approx 0{,}3927$ s, genau in der Mitte zwischen $t_1$ und $t_2$.
```

## Trigonometrische Identitäten

```aufgabe
id: tr-id-check-binomisch
titel: Eine binomische Formel
art: check
niveau: 1
angabe: |
  Welcher Ausdruck ist gleich $(a + b)^2$? Zum Nachlesen:
  [Kapitel 1, Terme umformen](/lernen/mathe3/zahlen/terme-umformen-binomische-formeln-und-faktorisieren).
teile:
  - typ: auswahl
    optionen: ['$a^2 + 2ab + b^2$', '$a^2 + b^2$', '$a^2 + ab + b^2$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Das gemischte Glied fehlt. Rechne $(a + b)(a + b)$ aus: $a\cdot b$ kommt zweimal vor.'
      - wert: 2
        meldung: 'Das gemischte Glied kommt zweimal vor, einmal als $a\cdot b$ und einmal als $b\cdot a$.'
loesung: |
  $(a + b)^2 = (a + b)(a + b) = a^2 + ab + ba + b^2$.
  ---
  Zusammengefasst: $a^2 + 2ab + b^2$. Diese Formel brauchst du gleich mit $a = \sin x$ und $b = \cos x$.
```

**Worum geht es?** Eine **Identität** ist eine Gleichung, die für **alle** zulässigen Werte gilt. Sie ist also keine
Aufgabe, die man löst, sondern ein Werkzeug. Mit Identitäten vereinfachst du Terme, berechnest exakte Werte und
formst trigonometrische Gleichungen um. Später brauchst du sie beim Ableiten und Integrieren.

**Beispiel und Nichtbeispiel:** $\sin^2 x + \cos^2 x = 1$ ist eine Identität. Sie gilt für jedes $x$. Dagegen ist
$\sin x = \frac12$ eine **Gleichung**: Sie gilt nur für bestimmte $x$, etwa $\frac{\pi}{6}$, und muss gelöst werden.

### Die Grundidentitäten

$$\sin^2 x + \cos^2 x = 1, \qquad \tan x = \frac{\sin x}{\cos x}, \qquad 1 + \tan^2 x = \frac{1}{\cos^2 x}.$$
Die ersten beiden kennst du aus [5.4 Der Einheitskreis](/lernen/mathe3/trigonometrie/der-einheitskreis). Die dritte
entsteht aus der ersten: Wir teilen beide Seiten durch $\cos^2 x$, wo $\cos x \ne 0$ ist. Mit der ersten Identität
kannst du aus einem Wert alle anderen berechnen, **bis auf das Vorzeichen**. Das Vorzeichen liefert der Quadrant.

:::beispiel[Aus dem Kosinus alles andere]
Für einen spitzen Winkel $\alpha$ gilt $\cos\alpha = 0{,}28$. Gesucht sind $\sin\alpha$ und $\tan\alpha$.

1. **Pythagoras umstellen:** $\sin^2\alpha = 1 - \cos^2\alpha = 1 - 0{,}0784 = 0{,}9216$.
2. **Wurzel ziehen:** $\sin\alpha = \pm 0{,}96$. Der Winkel ist spitz, liegt also im I. Quadranten, und der Sinus ist
   positiv: $\sin\alpha = 0{,}96$.
3. **Tangens:** $\tan\alpha = \frac{0{,}96}{0{,}28} = \frac{24}{7} \approx 3{,}43$.
4. **Probe mit der dritten Identität:** $1 + \left(\frac{24}{7}\right)^2 = \frac{49 + 576}{49} = \frac{625}{49}$ und
   $\frac{1}{0{,}28^2} = \frac{1}{0{,}0784} \approx 12{,}755 = \frac{625}{49}$. Es stimmt.
:::

### Die Additionstheoreme

Wie groß ist $\sin(\alpha + \beta)$, wenn man $\sin$ und $\cos$ von $\alpha$ und $\beta$ kennt? Die naheliegende Idee
$\sin\alpha + \sin\beta$ ist falsch. Die richtige Antwort geben die Additionstheoreme.

:::satz[Additionstheoreme]
Für alle Winkel $\alpha$ und $\beta$ gilt:
$$\begin{aligned}
\sin(\alpha + \beta) &= \sin\alpha\cos\beta + \cos\alpha\sin\beta, &\qquad \sin(\alpha - \beta) &= \sin\alpha\cos\beta - \cos\alpha\sin\beta,\\
\cos(\alpha + \beta) &= \cos\alpha\cos\beta - \sin\alpha\sin\beta, &\qquad \cos(\alpha - \beta) &= \cos\alpha\cos\beta + \sin\alpha\sin\beta.
\end{aligned}$$
Beim Kosinus kehrt sich das Vorzeichen um: Bei $\alpha + \beta$ steht ein Minus, bei $\alpha - \beta$ ein Plus.
:::

```plot
x: [-1.3, 1.3]
y: [-0.4, 1.3]
gleich: true
kurven:
  - { x: "cos(t)", y: "sin(t)", t: [0, "2*pi"], farbe: 3 }
strecken:
  - { von: [0, 0], nach: ["cos(7*pi/18)", "sin(7*pi/18)"], farbe: 0 }
  - { von: [0, 0], nach: ["cos(5*pi/36)", "sin(5*pi/36)"], farbe: 1 }
  - { von: ["cos(7*pi/18)", "sin(7*pi/18)"], nach: ["cos(5*pi/36)", "sin(5*pi/36)"], farbe: 2 }
punkte:
  - { x: "cos(7*pi/18)", y: "sin(7*pi/18)", label: "P(cos α | sin α)" }
  - { x: "cos(5*pi/36)", y: "sin(5*pi/36)", label: "Q(cos β | sin β)" }
  - { x: 0, y: 0, label: "O" }
  - { x: 0.22, y: 0.2, label: "α − β" }
beschriftung: Beweisidee der Additionstheoreme. P und Q liegen auf dem Einheitskreis, die Strecken OP und OQ schließen den Winkel α − β ein. Der Abstand PQ (grün) wird einmal mit dem Kosinussatz und einmal mit Koordinaten berechnet.
```

:::beweis
**Ziel:** Zuerst zeigen wir die Formel für $\cos(\alpha - \beta)$. Alle anderen folgen daraus.

Die Punkte $P = (\cos\alpha \mid \sin\alpha)$ und $Q = (\cos\beta \mid \sin\beta)$ liegen auf dem Einheitskreis. Die
Strecken vom Ursprung $O$ zu $P$ und zu $Q$ sind beide $1$ lang und schließen den Winkel $\alpha - \beta$ ein. Wir
berechnen den Abstand $\overline{PQ}$ auf zwei Arten.

**Erste Art, Kosinussatz im Dreieck $OPQ$:**
$$\overline{PQ}^2 = 1^2 + 1^2 - 2\cdot 1\cdot 1\cdot\cos(\alpha - \beta) = 2 - 2\cos(\alpha - \beta).$$
**Zweite Art, Abstandsformel mit Koordinaten:**
$$\overline{PQ}^2 = (\cos\alpha - \cos\beta)^2 + (\sin\alpha - \sin\beta)^2.$$
Ausmultipliziert und umsortiert ergibt das
$$(\cos^2\alpha + \sin^2\alpha) + (\cos^2\beta + \sin^2\beta) - 2(\cos\alpha\cos\beta + \sin\alpha\sin\beta).$$
Jede der beiden ersten Klammern ist $1$. Also ist $\overline{PQ}^2 = 2 - 2(\cos\alpha\cos\beta + \sin\alpha\sin\beta)$.

**Gleichsetzen:** $2 - 2\cos(\alpha - \beta) = 2 - 2(\cos\alpha\cos\beta + \sin\alpha\sin\beta)$. Daraus folgt
$\cos(\alpha - \beta) = \cos\alpha\cos\beta + \sin\alpha\sin\beta$.

**Die übrigen Formeln:** Ersetzt man $\beta$ durch $-\beta$ und verwendet $\cos(-\beta) = \cos\beta$ und
$\sin(-\beta) = -\sin\beta$, entsteht die Formel für $\cos(\alpha + \beta)$. Für den Sinus nutzt man
$\sin\gamma = \cos(90° - \gamma)$:
$$\sin(\alpha + \beta) = \cos\big((90° - \alpha) - \beta\big) = \cos(90° - \alpha)\cos\beta + \sin(90° - \alpha)\sin\beta = \sin\alpha\cos\beta + \cos\alpha\sin\beta.$$
:::

**Was haben wir gezeigt?** Den Kosinus einer Winkeldifferenz kann man aus den einzelnen Sinus- und Kosinuswerten
zusammensetzen. Alle vier Formeln stammen aus einem einzigen Abstandsvergleich am Einheitskreis.

Die Formeln stehen in der Formelsammlung. Du musst sie nicht auswendig können, aber sicher anwenden. Eine schöne
Anwendung sind exakte Werte für Winkel, die sich aus $30°$, $45°$ und $60°$ zusammensetzen.

:::beispiel[Der exakte Wert von sin 75°]
Es ist $75° = 45° + 30°$. Mit dem Additionstheorem:
$$\sin 75° = \sin 45°\cos 30° + \cos 45°\sin 30° = \frac{\sqrt2}{2}\cdot\frac{\sqrt3}{2} + \frac{\sqrt2}{2}\cdot\frac12 = \frac{\sqrt6 + \sqrt2}{4} \approx 0{,}9659.$$
Im ersten Summanden haben wir $\sqrt2\cdot\sqrt3 = \sqrt6$ verwendet. **Anwendung:** Ein $20$ cm langer Uhrzeiger steht
unter $75°$ gegen die Waagrechte. Seine Spitze liegt $20\cdot\sin 75° = 5\left(\sqrt6 + \sqrt2\right) \approx 19{,}32$ cm
über dem Drehpunkt in der Mitte der Uhr.
:::

:::achtung[Den Sinus einer Summe aufgeteilt]
Jemand rechnet: „$\sin(30° + 60°) = \sin 30° + \sin 60° = \frac12 + \frac{\sqrt3}{2} \approx 1{,}366$.“ Das kann nicht
stimmen, denn ein Sinus ist nie größer als $1$. Tatsächlich ist $\sin 90° = 1$.

Winkelfunktionen sind nicht linear: Man darf sie nicht auf die Summanden verteilen. Richtig ist
$\sin 30°\cos 60° + \cos 30°\sin 60° = \frac14 + \frac34 = 1$.
:::

### Doppelwinkelformeln

Setzt man in den Additionstheoremen $\beta = \alpha$, entstehen die Doppelwinkelformeln.

:::satz[Doppelwinkelformeln]
$$\sin(2\alpha) = 2\sin\alpha\cos\alpha, \qquad \cos(2\alpha) = \cos^2\alpha - \sin^2\alpha = 1 - 2\sin^2\alpha = 2\cos^2\alpha - 1.$$
:::

Die zweite und dritte Form des Kosinus entstehen, indem man $\cos^2\alpha = 1 - \sin^2\alpha$ oder $\sin^2\alpha = 1 - \cos^2\alpha$
einsetzt. Umgestellt liefern sie
$$\sin^2\alpha = \frac{1 - \cos(2\alpha)}{2} \qquad\text{und}\qquad \cos^2\alpha = \frac{1 + \cos(2\alpha)}{2}.$$
Damit wird aus einem Quadrat ein Ausdruck ohne Quadrat. Das hilft zum Beispiel beim Integrieren: Für $\sin^2 x$ gibt es
keine einfache Grundregel, für $\frac{1 - \cos(2x)}{2}$ schon. Stammfunktionen lernst du in
[Kapitel 10, Stammfunktionen](/lernen/mathe3/integralrechnung/stammfunktionen-ableiten-rueckwaerts) kennen.

:::beispiel[Doppelwinkel mit Zahlen]
Für einen spitzen Winkel gilt $\cos\alpha = 0{,}28$ und, wie berechnet, $\sin\alpha = 0{,}96$.

1. $\sin(2\alpha) = 2\cdot 0{,}96\cdot 0{,}28 = 0{,}5376$.
2. $\cos(2\alpha) = 1 - 2\cdot 0{,}96^2 = 1 - 1{,}8432 = -0{,}8432$. Negativ, also ist $2\alpha$ stumpf.
3. **Probe:** $0{,}5376^2 + 0{,}8432^2 \approx 0{,}2890 + 0{,}7110 = 1$.
4. **Deutung:** $\alpha = \cos^{-1}(0{,}28) \approx 73{,}74°$, also $2\alpha \approx 147{,}48°$. Der Winkel ist tatsächlich
   stumpf.
:::

:::achtung[Den Doppelwinkel wie eine Verdopplung behandelt]
Jemand rechnet: „$\sin(2\cdot 90°) = 2\cdot\sin 90° = 2$.“ Aber $\sin 180° = 0$. Den Faktor $2$ im Argument darf man
nicht vor den Sinus ziehen.

Richtig ist $\sin(2\cdot 90°) = 2\sin 90°\cos 90° = 2\cdot 1\cdot 0 = 0$. Ein schneller Test mit einem bekannten Winkel
entlarvt solche Fehler sofort.
:::

:::merke[Rezept: eine Identität nachweisen]
1. Mit der komplizierteren Seite beginnen und sie so lange umformen, bis die andere Seite dasteht.
2. Werkzeuge: $\sin^2 + \cos^2 = 1$, $\tan = \frac{\sin}{\cos}$, binomische Formeln, Additionstheoreme,
   Doppelwinkelformeln.
3. Nicht beide Seiten gleichzeitig bearbeiten und am Ende $0 = 0$ folgern. Das ist nur dann ein Beweis, wenn jeder
   Schritt in beide Richtungen gilt.
4. Kontrolle mit einem Zahlenwert, etwa $x = \frac{\pi}{4}$. Eine Stichprobe ist kein Beweis, findet aber Fehler.
:::

```reflexion
frage: Warum ist $\sin(2\alpha)$ nicht dasselbe wie $2\sin\alpha$? Begründe am Einheitskreis, ohne Formeln.
antwort: |
  $2\sin\alpha$ ist die doppelte Höhe des Punktes zu $\alpha$. Verdoppelt man aber den Winkel, dreht der Punkt nur
  weiter um den Kreis. Er kann dabei nie höher als $1$ kommen. Schon bei $\alpha = 60°$ wäre $2\sin\alpha \approx 1{,}73$,
  das liegt außerhalb des Kreises. Der Punkt zu $120°$ hat dagegen wieder die Höhe $0{,}87$. Doppelter Winkel heißt
  also nicht doppelte Höhe. Der Sinus ist keine Gerade durch den Ursprung, er ist nicht linear.
```

```aufgabe
id: tr-identitaet-vereinfachen
titel: Einen Term vereinfachen
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Vereinfache $\dfrac{1 - \cos^2 x}{\sin x}$ für $\sin x \ne 0$.
teile:
  - typ: term
    label: 'vereinfachter Term'
    loesung: "sin(x)"
    bereich: [0.2, 3]
    fehler:
      - wert: "1"
        meldung: 'Der Zähler ist $\sin^2 x$, also $\sin x\cdot\sin x$. Gekürzt wird nur **ein** Faktor $\sin x$.'
      - wert: "1/sin(x) - cos(x)"
        meldung: 'Aus einer Differenz darf man nicht kürzen. Forme zuerst den Zähler mit $\sin^2 x + \cos^2 x = 1$ um.'
hinweise:
  - '$1 - \cos^2 x = \sin^2 x$.'
loesung: |
  **Ansatz:** Den Zähler mit dem trigonometrischen Pythagoras umschreiben: $1 - \cos^2 x = \sin^2 x$.
  ---
  $\frac{\sin^2 x}{\sin x} = \frac{\sin x\cdot\sin x}{\sin x} = \sin x$, weil $\sin x \ne 0$ ist. **Stichprobe:** Bei $x = \frac{\pi}{2}$ ist $\frac{1 - 0}{1} = 1 = \sin\frac{\pi}{2}$.
```

```aufgabe
id: tr-id-tan-kuerzen
titel: Den Tangens auflösen
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Vereinfache $\dfrac{\sin x}{\tan x}$ für Stellen, an denen beide Funktionen definiert sind und $\tan x \ne 0$ ist.
teile:
  - typ: term
    label: 'vereinfachter Term'
    loesung: "cos(x)"
    bereich: [0.2, 1.4]
    fehler:
      - wert: "1"
        meldung: '$\tan x$ ist nicht $\sin x$. Schreibe $\tan x = \frac{\sin x}{\cos x}$ und teile durch diesen Bruch.'
      - wert: "sin(x)^2/cos(x)"
        meldung: 'Durch einen Bruch teilt man, indem man mit dem Kehrwert multipliziert, also mit $\frac{\cos x}{\sin x}$.'
hinweise:
  - 'Ersetze $\tan x$ durch $\frac{\sin x}{\cos x}$ und teile durch einen Bruch, indem du mit dem Kehrwert multiplizierst.'
loesung: |
  **Ansatz:** Den Tangens durch Sinus und Kosinus ausdrücken: $\tan x = \frac{\sin x}{\cos x}$.
  ---
  $\frac{\sin x}{\tan x} = \sin x\cdot\frac{\cos x}{\sin x} = \cos x$. **Stichprobe:** Bei $x = \frac{\pi}{4}$ ist $\frac{\sqrt2/2}{1} = \frac{\sqrt2}{2} = \cos\frac{\pi}{4}$.
```

```aufgabe
id: tr-sin75
titel: Exakter Wert mit dem Additionstheorem
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Berechne $\cos 75°$ exakt mit $75° = 45° + 30°$. Eingabe zum Beispiel als `(sqrt(6)-sqrt(2))/4`.
teile:
  - typ: zahl
    label: '$\cos 75°$'
    loesung: "cos(inRad(75))"
    anzeige: '\tfrac{\sqrt6 - \sqrt2}{4} \approx 0{,}2588'
    fehler:
      - wert: "(sqrt(6)+sqrt(2))/4"
        meldung: 'Das ist $\sin 75°$. Beim Kosinus einer Summe steht in der Mitte ein **Minus**.'
      - wert: "sqrt(2)/2 + sqrt(3)/2"
        meldung: 'Der Kosinus einer Summe ist nicht die Summe der Kosinuswerte. Verwende das Additionstheorem.'
hinweise:
  - '$\cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta$.'
  - 'Setze die exakten Werte von $45°$ und $30°$ ein und verwende $\sqrt2\cdot\sqrt3 = \sqrt6$.'
loesung: |
  **Ansatz:** Additionstheorem für den Kosinus mit $\alpha = 45°$ und $\beta = 30°$.
  ---
  $\cos 75° = \cos 45°\cos 30° - \sin 45°\sin 30° = \frac{\sqrt2}{2}\cdot\frac{\sqrt3}{2} - \frac{\sqrt2}{2}\cdot\frac12$.
  ---
  $= \frac{\sqrt6}{4} - \frac{\sqrt2}{4} = \frac{\sqrt6 - \sqrt2}{4} \approx 0{,}2588$. **Kontrolle:** $\cos 75° = \sin 15°$, und der Rechner zeigt für beide $0{,}2588$.
```

```aufgabe
id: tr-id-cos15-gefuehrt
titel: cos 15° Schritt für Schritt
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Berechne $\cos 15°$ exakt mit $15° = 45° - 30°$.
teile:
  - typ: zahl
    label: '$\cos 15°$'
    loesung: "cos(inRad(15))"
    anzeige: '\tfrac{\sqrt6 + \sqrt2}{4} \approx 0{,}9659'
    fehler:
      - wert: "(sqrt(6)-sqrt(2))/4"
        meldung: 'Beim Kosinus einer **Differenz** steht in der Mitte ein Plus: $\cos(\alpha - \beta) = \cos\alpha\cos\beta + \sin\alpha\sin\beta$.'
hinweise:
  - 'Verwende $\cos(\alpha - \beta) = \cos\alpha\cos\beta + \sin\alpha\sin\beta$.'
  - 'Setze $\alpha = 45°$ und $\beta = 30°$ mit ihren exakten Werten ein.'
loesung: |
  **Ansatz:** Additionstheorem für $\cos(\alpha - \beta)$ mit $\alpha = 45°$ und $\beta = 30°$.
  ---
  $\cos 15° = \cos 45°\cos 30° + \sin 45°\sin 30° = \frac{\sqrt2}{2}\cdot\frac{\sqrt3}{2} + \frac{\sqrt2}{2}\cdot\frac12$.
  ---
  $= \frac{\sqrt6 + \sqrt2}{4} \approx 0{,}9659$. **Kontrolle:** $\cos 15° = \sin 75°$, wegen $\cos\alpha = \sin(90° - \alpha)$.
gefuehrt:
  - text: 'Welches Vorzeichen steht in der Formel für $\cos(\alpha - \beta)$ zwischen den beiden Produkten?'
    erklaerung: 'Ein Plus: $\cos(\alpha - \beta) = \cos\alpha\cos\beta + \sin\alpha\sin\beta$. Beim Kosinus kehrt sich das Vorzeichen um.'
  - text: 'Berechne das erste Produkt $\cos 45°\cdot\cos 30°$ exakt.'
    teil: { typ: zahl, loesung: "sqrt(6)/4", fehler: [ { wert: "sqrt(2)/4", meldung: '$\cos 30° = \frac{\sqrt3}{2}$, nicht $\frac12$.' } ] }
    erklaerung: '$\frac{\sqrt2}{2}\cdot\frac{\sqrt3}{2} = \frac{\sqrt6}{4}$.'
  - text: 'Berechne das zweite Produkt $\sin 45°\cdot\sin 30°$ exakt.'
    teil: { typ: zahl, loesung: "sqrt(2)/4" }
    erklaerung: '$\frac{\sqrt2}{2}\cdot\frac12 = \frac{\sqrt2}{4}$.'
  - text: 'Addiere beide Produkte.'
    teil: { typ: zahl, loesung: "(sqrt(6)+sqrt(2))/4" }
    erklaerung: '$\cos 15° = \frac{\sqrt6 + \sqrt2}{4} \approx 0{,}9659$.'
```

```aufgabe
id: tr-doppelwinkel
titel: Doppelwinkel exakt
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Für einen spitzen Winkel $\alpha$ gilt $\sin\alpha = \frac{9}{41}$. Berechne $\sin(2\alpha)$ und $\cos(2\alpha)$ exakt
  als Bruch.
teile:
  - typ: zahl
    label: '$\sin(2\alpha)$'
    loesung: "2*(9/41)*(40/41)"
    anzeige: '\tfrac{720}{1681}'
    fehler:
      - wert: "2*9/41"
        meldung: '$\sin(2\alpha)$ ist nicht $2\sin\alpha$. Es gilt $\sin(2\alpha) = 2\sin\alpha\cos\alpha$.'
  - typ: zahl
    label: '$\cos(2\alpha)$'
    loesung: "1 - 2*(9/41)^2"
    anzeige: '\tfrac{1519}{1681}'
    fehler:
      - wert: "1 - 2*9/41"
        meldung: 'In $1 - 2\sin^2\alpha$ wird der Sinus **quadriert**: $\left(\frac{9}{41}\right)^2 = \frac{81}{1681}$.'
hinweise:
  - 'Bestimme zuerst $\cos\alpha$ mit dem trigonometrischen Pythagoras. Er ist positiv, weil $\alpha$ spitz ist.'
  - 'Dann $\sin(2\alpha) = 2\sin\alpha\cos\alpha$ und $\cos(2\alpha) = 1 - 2\sin^2\alpha$.'
loesung: |
  **Ansatz:** Für die Doppelwinkelformel des Sinus brauchen wir auch $\cos\alpha$.
  ---
  $\cos\alpha = \sqrt{1 - \frac{81}{1681}} = \sqrt{\frac{1600}{1681}} = \frac{40}{41}$, positiv, weil $\alpha$ spitz ist.
  ---
  $\sin(2\alpha) = 2\cdot\frac{9}{41}\cdot\frac{40}{41} = \frac{720}{1681}$.
  ---
  $\cos(2\alpha) = 1 - 2\cdot\frac{81}{1681} = \frac{1681 - 162}{1681} = \frac{1519}{1681}$. **Probe:** $720^2 + 1519^2 = 518\,400 + 2\,307\,361 = 2\,825\,761 = 1681^2$, also ist $\sin^2(2\alpha) + \cos^2(2\alpha) = 1$.
```

```aufgabe
id: tr-id-fehler-finden
titel: Wo steckt der Fehler beim Doppelwinkel?
niveau: 2
lernziel: 7
kompetenz: begruenden
angabe: |
  Jonas rechnet: „$\cos 60° = \cos(2\cdot 30°) = 2\cos 30° = \sqrt3$.“

  a) Was ist $\cos 60°$ wirklich?

  b) Woran hätte Jonas ohne Rechnung merken können, dass sein Ergebnis falsch ist?
teile:
  - typ: zahl
    label: 'a) $\cos 60°$'
    loesung: "1/2"
    fehler:
      - wert: "sqrt(3)"
        meldung: 'Das ist Jonas'' Ergebnis. Verwende die Doppelwinkelformel $\cos(2\alpha) = 2\cos^2\alpha - 1$.'
  - typ: auswahl
    label: 'b) Warnsignal'
    optionen:
      - 'Ein Kosinus ist nie größer als $1$, aber $\sqrt3 \approx 1{,}73$.'
      - 'Ein Kosinus ist nie negativ.'
      - 'Ein Kosinus ist immer eine ganze Zahl.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Der Kosinus kann negativ sein, etwa im II. Quadranten. Das Warnsignal ist hier etwas anderes.'
hinweise:
  - 'Die Doppelwinkelformel lautet $\cos(2\alpha) = 2\cos^2\alpha - 1$, nicht $2\cos\alpha$.'
  - 'Welche Werte kann ein Kosinus überhaupt annehmen?'
loesung: |
  **Ansatz:** Den Faktor $2$ im Argument darf man nicht vor den Kosinus ziehen. Richtig ist die Doppelwinkelformel.
  ---
  $\cos 60° = 2\cos^2 30° - 1 = 2\cdot\frac34 - 1 = \frac12$. Das stimmt mit der Wertetabelle überein.
  ---
  Warnsignal: Ein Kosinus ist eine Koordinate am Einheitskreis und liegt zwischen $-1$ und $1$. $\sqrt3 \approx 1{,}73$ ist unmöglich.
```

```aufgabe
id: tr-identitaet-beweis
titel: Eine Identität nachweisen
niveau: 2
lernziel: 7
kompetenz: begruenden
angabe: |
  Zeige, dass für alle $x$ gilt: $(\sin x + \cos x)^2 = 1 + \sin(2x)$.
teile:
  - typ: text
    muster: |
      Ausgangspunkt ist die linke Seite. Binomische Formel:
      $(\sin x + \cos x)^2 = \sin^2 x + 2\sin x\cos x + \cos^2 x$. Umsortieren:
      $(\sin^2 x + \cos^2 x) + 2\sin x\cos x$. Trigonometrischer Pythagoras: Die Klammer ist $1$. Doppelwinkelformel:
      $2\sin x\cos x = \sin(2x)$. Also ist die linke Seite $1 + \sin(2x)$, und das ist die rechte Seite.
hinweise:
  - 'Beginne mit der linken Seite und multipliziere mit der binomischen Formel aus.'
  - 'Fasse $\sin^2 x + \cos^2 x$ zusammen und erkenne im Rest die Doppelwinkelformel.'
loesung: |
  **Ansatz:** Mit der komplizierteren linken Seite beginnen und sie umformen, bis die rechte dasteht.
  ---
  Binomische Formel: $(\sin x + \cos x)^2 = \sin^2 x + 2\sin x\cos x + \cos^2 x$.
  ---
  $\sin^2 x + \cos^2 x = 1$ und $2\sin x\cos x = \sin(2x)$. Also ist die linke Seite $1 + \sin(2x)$.
  ---
  **Stichprobe** bei $x = \frac{\pi}{4}$: links $\left(\frac{\sqrt2}{2} + \frac{\sqrt2}{2}\right)^2 = (\sqrt2)^2 = 2$, rechts $1 + \sin\frac{\pi}{2} = 2$.
```

```aufgabe
id: tr-id-summe-zwei-winkel
titel: Sinus und Kosinus einer Winkelsumme
niveau: 3
lernziel: 7
kompetenz: begruenden
angabe: |
  Für zwei spitze Winkel gilt $\sin\alpha = \frac45$ und $\cos\beta = \frac{5}{13}$.

  a) Berechne $\sin(\alpha + \beta)$ und $\cos(\alpha + \beta)$ exakt als Bruch.

  b) Ist $\alpha + \beta$ spitz oder stumpf? Begründe ohne Taschenrechner.
teile:
  - typ: zahl
    label: 'a) $\sin(\alpha + \beta)$'
    loesung: "56/65"
    anzeige: '\tfrac{56}{65}'
    fehler:
      - wert: "4/5 + 12/13"
        meldung: 'Der Sinus einer Summe ist nicht die Summe der Sinuswerte. Verwende das Additionstheorem.'
  - typ: zahl
    label: 'a) $\cos(\alpha + \beta)$'
    loesung: "-33/65"
    anzeige: '-\tfrac{33}{65}'
    fehler:
      - wert: "63/65"
        meldung: 'Beim Kosinus einer **Summe** steht in der Mitte ein Minus: $\cos\alpha\cos\beta - \sin\alpha\sin\beta$.'
  - typ: auswahl
    label: 'b) $\alpha + \beta$ ist'
    optionen: ['stumpf', 'spitz']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Schau auf das Vorzeichen von $\cos(\alpha + \beta)$. Ein negativer Kosinus gehört zwischen $0°$ und $180°$ zu einem stumpfen Winkel.'
hinweise:
  - 'Berechne zuerst die fehlenden Werte $\cos\alpha$ und $\sin\beta$ mit dem trigonometrischen Pythagoras. Beide sind positiv, weil die Winkel spitz sind.'
  - 'Setze in $\sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta$ und $\cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta$ ein.'
loesung: |
  **Ansatz:** Die Additionstheoreme brauchen von beiden Winkeln Sinus **und** Kosinus. Die fehlenden Werte liefert der trigonometrische Pythagoras.
  ---
  $\cos\alpha = \sqrt{1 - \frac{16}{25}} = \frac35$ und $\sin\beta = \sqrt{1 - \frac{25}{169}} = \frac{12}{13}$. Beide positiv, weil die Winkel spitz sind.
  ---
  $\sin(\alpha + \beta) = \frac45\cdot\frac{5}{13} + \frac35\cdot\frac{12}{13} = \frac{20 + 36}{65} = \frac{56}{65}$.
  ---
  $\cos(\alpha + \beta) = \frac35\cdot\frac{5}{13} - \frac45\cdot\frac{12}{13} = \frac{15 - 48}{65} = -\frac{33}{65}$.
  ---
  b) Zwei spitze Winkel ergeben zusammen weniger als $180°$. Dort ist ein negativer Kosinus nur bei einem stumpfen Winkel möglich. Also ist $\alpha + \beta$ stumpf. **Probe:** $\left(\frac{56}{65}\right)^2 + \left(\frac{33}{65}\right)^2 = \frac{3136 + 1089}{4225} = 1$.
```

## Gleichungen mit Substitution und Herausheben

```aufgabe
id: tr-sub-check-quadratisch
titel: Eine quadratische Gleichung in u
art: check
niveau: 1
angabe: |
  Löse $u^2 + 2u - 3 = 0$. Gib beide Lösungen getrennt durch einen Strichpunkt an. Zum Nachlesen:
  [Kapitel 2, Quadratische Gleichungen](/lernen/mathe3/gleichungen/quadratische-gleichungen).
teile:
  - typ: menge
    loesung: ["1", "-3"]
    fehler:
      - wert: ["-1", "3"]
        meldung: 'Die Vorzeichen sind vertauscht. Probe mit $u = 3$: $9 + 6 - 3 = 12 \ne 0$.'
loesung: |
  Kleine Lösungsformel mit $p = 2$ und $q = -3$: $u = -1 \pm \sqrt{1 + 3} = -1 \pm 2$.
  ---
  Also $u_1 = 1$ und $u_2 = -3$. Probe: $1 + 2 - 3 = 0$ und $9 - 6 - 3 = 0$.
```

**Worum geht es?** Nicht jede trigonometrische Gleichung hat schon die Form $\sin x = s$. Oft kommt dieselbe
Winkelfunktion quadriert vor, oder Sinus und Kosinus stehen gemischt. Mit drei Werkzeugen führst du solche
Gleichungen auf die Grundgleichungen aus [5.11 Trigonometrische Gleichungen](/lernen/mathe3/trigonometrie/trigonometrische-gleichungen)
zurück: **Substitution**, **Ersetzen mit einer Identität** und **Herausheben**.

### Substitution

Kommt dieselbe Winkelfunktion in verschiedenen Potenzen vor, ersetzt du sie durch eine neue Variable $u$. Das heißt
**Substitution**. Es entsteht eine quadratische Gleichung in $u$, die du schon lösen kannst. Danach setzt du zurück.

:::beispiel[Eine quadratische Gleichung im Kosinus]
Gesucht sind alle $x$ in $[0, 2\pi)$ mit $2\cos^2 x + \cos x - 1 = 0$.

1. **Ersetzen:** $u = \cos x$. Dann lautet die Gleichung $2u^2 + u - 1 = 0$.
2. **Quadratisch lösen:** $u = \frac{-1 \pm \sqrt{1 + 8}}{4} = \frac{-1 \pm 3}{4}$, also $u_1 = \frac12$ und $u_2 = -1$.
3. **Prüfen:** Beide Werte liegen zwischen $-1$ und $1$. Beide sind also mögliche Kosinuswerte.
4. **Zurücksetzen:** $\cos x = \frac12$ liefert $x = \frac{\pi}{3}$ und $x = \frac{5\pi}{3}$. $\cos x = -1$ liefert
   $x = \pi$.
5. **Ergebnis:** $L = \left\{\frac{\pi}{3};\ \pi;\ \frac{5\pi}{3}\right\}$. Probe für $\pi$: $2\cdot 1 + (-1) - 1 = 0$.
:::

:::beispiel[Leistung im Wechselstromkreis]
An einem Heizstab im Wechselstromnetz schwankt die Leistung nach $P(t) = 2000\cdot\sin^2(100\pi\, t)$ mit $P$ in Watt und
$t$ in Sekunden. Wann ist die Leistung während der ersten $0{,}02$ s genau $500$ W?

1. **Umformen:** $\sin^2(100\pi\, t) = \frac{500}{2000} = \frac14$.
2. **Wurzel ziehen, mit beiden Vorzeichen:** $\sin(100\pi\, t) = \frac12$ oder $\sin(100\pi\, t) = -\frac12$.
3. **Für das Argument $u = 100\pi\, t$** mit $0 \le u < 2\pi$: $\sin u = \frac12$ liefert $\frac{\pi}{6}$ und
   $\frac{5\pi}{6}$. $\sin u = -\frac12$ liefert $\frac{7\pi}{6}$ und $\frac{11\pi}{6}$.
4. **Zurück zur Zeit:** $t = \frac{u}{100\pi}$, also $t = \frac{1}{600}$, $\frac{5}{600}$, $\frac{7}{600}$ und
   $\frac{11}{600}$ Sekunden. Das sind etwa $1{,}67$ ms, $8{,}33$ ms, $11{,}67$ ms und $18{,}33$ ms.

**Deutung:** Die Leistung erreicht $500$ W viermal, weil sie pro Spannungsperiode zweimal ihr Maximum hat. Wer beim
Wurzelziehen das Minus vergisst, findet nur die Hälfte der Zeitpunkte.
:::

### Ersetzen mit dem trigonometrischen Pythagoras

Stehen $\sin^2 x$ und $\cos x$ gemischt in einer Gleichung, ersetzt du $\sin^2 x$ durch $1 - \cos^2 x$. Dann kommt nur
noch der Kosinus vor, und die Substitution funktioniert. Umgekehrt ersetzt du $\cos^2 x$ durch $1 - \sin^2 x$.

:::beispiel[Sinus und Kosinus gemischt]
Gesucht sind alle $x$ in $[0, 2\pi)$ mit $2\sin^2 x = 3\cos x$.

1. **Ersetzen:** $2(1 - \cos^2 x) = 3\cos x$, also $2 - 2\cos^2 x = 3\cos x$.
2. **Ordnen:** Alles auf eine Seite: $2\cos^2 x + 3\cos x - 2 = 0$.
3. **Substitution** $u = \cos x$: $2u^2 + 3u - 2 = 0$, also $u = \frac{-3 \pm \sqrt{9 + 16}}{4} = \frac{-3 \pm 5}{4}$.
   Das ergibt $u_1 = \frac12$ und $u_2 = -2$.
4. **Prüfen:** $u_2 = -2$ ist kleiner als $-1$. Kein Winkel hat diesen Kosinus, dieser Wert fällt weg.
5. **Zurücksetzen:** $\cos x = \frac12$ liefert $x = \frac{\pi}{3}$ und $x = \frac{5\pi}{3}$.
:::

:::achtung[Einen unmöglichen Wert behalten]
Im Beispiel ergibt die Substitution $u_2 = -2$. Jemand rechnet weiter mit $\cos x = -2$ und tippt $\cos^{-1}(-2)$. Der
Rechner meldet einen Fehler, oder es entsteht eine erfundene Lösung.

Sinus und Kosinus liegen immer zwischen $-1$ und $1$. Prüfe nach jeder Substitution, ob die Werte für $u$ in diesem
Bereich liegen. Werte außerhalb streichst du mit dem Satz „keine Lösung, weil $|\cos x| \le 1$“.
:::

```aufgabe
id: tr-sub-check-bereich
titel: Welche Werte sind möglich?
art: check
niveau: 1
angabe: |
  Nach einer Substitution $u = \sin x$ erhältst du $u_1 = 0{,}5$ und $u_2 = 1{,}5$. Welche Werte führen zu Lösungen?
teile:
  - typ: auswahl
    optionen: ['nur $u_1 = 0{,}5$', 'nur $u_2 = 1{,}5$', 'beide']
    richtig: [0]
    fehler:
      - wert: 2
        meldung: 'Ein Sinus liegt immer zwischen $-1$ und $1$. Der Wert $1{,}5$ ist unmöglich.'
      - wert: 1
        meldung: 'Umgekehrt: $1{,}5$ ist zu groß für einen Sinus, $0{,}5$ ist möglich.'
loesung: |
  Der Sinus ist eine Koordinate am Einheitskreis und liegt zwischen $-1$ und $1$.
  ---
  $u_1 = 0{,}5$ ist möglich, $u_2 = 1{,}5$ nicht. Nur $\sin x = 0{,}5$ liefert Lösungen.
```

### Herausheben statt Kürzen

Kommt in jedem Summanden derselbe Faktor vor, hebst du ihn heraus. Ein Produkt ist genau dann null, wenn einer der
Faktoren null ist. So zerfällt die Gleichung in zwei einfachere.

:::achtung[Durch einen Term mit x dividiert]
Gesucht sind alle $x$ in $[0, 2\pi)$ mit $\sin x\cos x = \sin x$. Jemand teilt beide Seiten durch $\sin x$ und erhält
$\cos x = 1$, also nur $x = 0$. Dabei geht die Lösung $x = \pi$ verloren.

Durch $\sin x$ darf man nur teilen, wenn $\sin x \ne 0$ ist. Genau die Stellen mit $\sin x = 0$ sind aber Lösungen.
Richtig ist: alles auf eine Seite bringen und herausheben,
$$\sin x\cos x - \sin x = 0, \quad\text{also}\quad \sin x\,(\cos x - 1) = 0.$$
Dann ist $\sin x = 0$ oder $\cos x = 1$. Das ergibt $x = 0$ und $x = \pi$, und $\cos x = 1$ liefert wieder $x = 0$.
Insgesamt $L = \{0;\ \pi\}$.
:::

:::beispiel[Doppelwinkel und Herausheben]
Gesucht sind alle $x$ in $[0, 2\pi)$ mit $\sin(2x) = \sin x$.

1. **Doppelwinkelformel:** $\sin(2x) = 2\sin x\cos x$, siehe
   [5.12 Trigonometrische Identitäten](/lernen/mathe3/trigonometrie/trigonometrische-identitaeten). Also
   $2\sin x\cos x = \sin x$.
2. **Alles auf eine Seite:** $2\sin x\cos x - \sin x = 0$.
3. **Herausheben:** $\sin x\,(2\cos x - 1) = 0$.
4. **Erster Faktor:** $\sin x = 0$ liefert $x = 0$ und $x = \pi$.
5. **Zweiter Faktor:** $2\cos x - 1 = 0$, also $\cos x = \frac12$. Das liefert $x = \frac{\pi}{3}$ und $x = \frac{5\pi}{3}$.

**Ergebnis:** $L = \left\{0;\ \frac{\pi}{3};\ \pi;\ \frac{5\pi}{3}\right\}$. Wer durch $\sin x$ geteilt hätte, hätte
$0$ und $\pi$ verloren.
:::

```plot
x: [-0.2, "2*pi + 0.2"]
y: [-1.3, 1.3]
graphen:
  - { f: "sin(2*x)", label: "sin(2x)", farbe: 0 }
  - { f: "sin(x)", label: "sin x", farbe: 1 }
punkte:
  - { x: 0, y: 0, label: "0" }
  - { x: "pi/3", y: "sin(pi/3)", label: "π/3" }
  - { x: "pi", y: 0, label: "π" }
  - { x: "5*pi/3", y: "sin(5*pi/3)", label: "5π/3" }
beschriftung: Die Graphen von sin(2x) und sin x schneiden sich im Intervall von 0 bis unter 2π genau viermal, bei 0, π/3, π und 5π/3. Zwei dieser Stellen gehen verloren, wenn man durch sin x teilt.
```

### Durch den Kosinus teilen, aber mit Vorsicht

Bei $\sin x = \cos x$ hilft ein Trick. Teilt man durch $\cos x$, entsteht $\tan x = 1$. Das Teilen ist erlaubt, weil
$\cos x = 0$ hier **keine** Lösung ist: Dort wäre $\sin x = \pm 1$, also nicht gleich $\cos x = 0$. Die Lösungen sind
$x = \frac{\pi}{4} + k\pi$, im Intervall $[0, 2\pi)$ also $\frac{\pi}{4}$ und $\frac{5\pi}{4}$. Ob das Teilen erlaubt
war, musst du jedes Mal so prüfen.

:::merke[Rezept: schwierigere trigonometrische Gleichungen]
1. Ein Argument wie $2x$ mit der Doppelwinkelformel auflösen, wenn sonst $x$ vorkommt.
2. Kommen $\sin$ und $\cos$ gemischt vor, mit $\sin^2 x + \cos^2 x = 1$ auf **eine** Funktion bringen.
3. Kommt dieselbe Funktion quadriert vor: substituieren, quadratisch lösen, Werte außerhalb von $[-1, 1]$ streichen.
4. Haben alle Summanden einen gemeinsamen Faktor: alles auf eine Seite und herausheben. **Nie** durch einen Term mit
   $x$ teilen, der null werden kann.
5. Jede Grundgleichung vollständig lösen und am Ende alle Lösungen im Intervall sammeln. Probe durch Einsetzen.
:::

```reflexion
frage: Warum ist es bei $\sin x\cos x = \sin x$ falsch, durch $\sin x$ zu teilen, bei $\sin x = \cos x$ das Teilen durch $\cos x$ aber erlaubt?
antwort: |
  Teilen durch einen Term ist nur erlaubt, wo er nicht null ist. Bei $\sin x\cos x = \sin x$ sind die Stellen mit
  $\sin x = 0$ gerade Lösungen: Links und rechts steht dann $0$. Wer teilt, wirft sie stillschweigend weg. Bei
  $\sin x = \cos x$ ist es anders: Wo $\cos x = 0$ ist, gilt $\sin x = \pm 1$. Die Gleichung ist dort nicht erfüllt.
  Durch das Teilen geht also keine Lösung verloren. Man muss den Fall $\cos x = 0$ trotzdem jedes Mal prüfen.
```

```aufgabe
id: tr-gleichung-faktor
titel: Herausheben statt Kürzen
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Löse $\cos x\cdot\sin x = \cos x$ im Intervall $[0, 2\pi)$.
teile:
  - typ: menge
    label: 'Lösungen'
    loesung: ["pi/2", "3*pi/2"]
    fehler:
      - wert: ["pi/2"]
        meldung: 'Du hast durch $\cos x$ geteilt. Dabei verlierst du die Stellen mit $\cos x = 0$. Hebe lieber $\cos x$ heraus.'
hinweise:
  - 'Nicht durch $\cos x$ dividieren. Bringe alles auf eine Seite und hebe $\cos x$ heraus.'
loesung: |
  **Ansatz:** Alles auf eine Seite und herausheben: $\cos x\sin x - \cos x = 0$, also $\cos x\,(\sin x - 1) = 0$.
  ---
  $\cos x = 0$ liefert $\frac{\pi}{2}$ und $\frac{3\pi}{2}$. $\sin x = 1$ liefert $\frac{\pi}{2}$, das ist schon dabei.
  ---
  $L = \left\{\frac{\pi}{2};\ \frac{3\pi}{2}\right\}$. **Probe** für $\frac{3\pi}{2}$: links $0\cdot(-1) = 0$, rechts $0$.
```

```aufgabe
id: tr-sub-tan
titel: Aus zwei Funktionen wird eine
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Löse $\sin x = \sqrt3\cdot\cos x$ im Intervall $[0, 2\pi)$.
teile:
  - typ: menge
    label: 'Lösungen'
    loesung: ["pi/3", "4*pi/3"]
    fehler:
      - wert: ["pi/3"]
        meldung: 'Der Tangens hat die Periode $\pi$. Im Intervall gibt es eine zweite Lösung: $\frac{\pi}{3} + \pi$.'
      - wert: ["pi/6", "7*pi/6"]
        meldung: '$\tan\frac{\pi}{6} = \frac{\sqrt3}{3}$, nicht $\sqrt3$.'
hinweise:
  - 'Teile durch $\cos x$. Prüfe vorher, dass $\cos x = 0$ keine Lösung ist.'
loesung: |
  **Ansatz:** Durch $\cos x$ teilen ergibt $\tan x = \sqrt3$. Das ist erlaubt: Wäre $\cos x = 0$, dann wäre $\sin x = \pm 1$, und die Gleichung wäre falsch.
  ---
  $\tan x = \sqrt3$ hat die Lösungen $x = \frac{\pi}{3} + k\pi$. Im Intervall: $\frac{\pi}{3}$ und $\frac{4\pi}{3}$.
```

```aufgabe
id: tr-gleichung-quadratisch
titel: Eine quadratische Gleichung im Sinus
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Löse $2\sin^2 x + 3\sin x + 1 = 0$ im Intervall $[0, 2\pi)$.
teile:
  - typ: menge
    label: 'Lösungen'
    loesung: ["7*pi/6", "3*pi/2", "11*pi/6"]
    fehler:
      - wert: ["7*pi/6", "11*pi/6"]
        meldung: 'Die zweite Lösung der quadratischen Gleichung, $u = -1$, führt auch zu einem Winkel.'
      - wert: ["-1/2", "-1"]
        meldung: 'Das sind die Werte für $u = \sin x$. Du musst noch zurücksetzen und die Winkel bestimmen.'
hinweise:
  - 'Substituiere $u = \sin x$ und löse $2u^2 + 3u + 1 = 0$.'
  - 'Die Lösungen sind $u = -\frac12$ und $u = -1$. Löse dann $\sin x = -\frac12$ und $\sin x = -1$.'
loesung: |
  **Ansatz:** Mit $u = \sin x$ wird daraus $2u^2 + 3u + 1 = 0$.
  ---
  $u = \frac{-3 \pm \sqrt{9 - 8}}{4} = \frac{-3 \pm 1}{4}$, also $u_1 = -\frac12$ und $u_2 = -1$. Beide liegen in $[-1, 1]$.
  ---
  $\sin x = -\frac12$: Der Sinus ist negativ im III. und IV. Quadranten, Bezugswinkel $\frac{\pi}{6}$. Also $x = \frac{7\pi}{6}$ und $x = \frac{11\pi}{6}$.
  ---
  $\sin x = -1$: $x = \frac{3\pi}{2}$. **Probe** für $\frac{7\pi}{6}$: $2\cdot\frac14 + 3\cdot\left(-\frac12\right) + 1 = 0$.
```

```aufgabe
id: tr-sub-gefuehrt
titel: Substitution Schritt für Schritt
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Löse $2\cos^2 x - 3\cos x + 1 = 0$ im Intervall $[0, 2\pi)$.
teile:
  - typ: menge
    label: 'Lösungen'
    loesung: ["0", "pi/3", "5*pi/3"]
    fehler:
      - wert: ["pi/3", "5*pi/3"]
        meldung: 'Auch $\cos x = 1$ liefert eine Lösung im Intervall, nämlich $x = 0$.'
hinweise:
  - 'Substituiere $u = \cos x$.'
  - 'Löse $2u^2 - 3u + 1 = 0$ und setze dann zurück.'
loesung: |
  **Ansatz:** Mit $u = \cos x$ entsteht $2u^2 - 3u + 1 = 0$.
  ---
  $u = \frac{3 \pm \sqrt{9 - 8}}{4} = \frac{3 \pm 1}{4}$, also $u_1 = 1$ und $u_2 = \frac12$.
  ---
  $\cos x = 1$ liefert $x = 0$. $\cos x = \frac12$ liefert $x = \frac{\pi}{3}$ und $x = \frac{5\pi}{3}$.
  ---
  $L = \left\{0;\ \frac{\pi}{3};\ \frac{5\pi}{3}\right\}$. **Probe** für $0$: $2 - 3 + 1 = 0$.
gefuehrt:
  - text: 'Setze $u = \cos x$. Wie lauten die Lösungen der quadratischen Gleichung $2u^2 - 3u + 1 = 0$?'
    teil: { typ: menge, loesung: ["1", "1/2"], fehler: [ { wert: ["-1", "-1/2"], meldung: 'Die Vorzeichen sind vertauscht. Probe mit $u = 1$: $2 - 3 + 1 = 0$.' } ] }
    erklaerung: '$u = \frac{3 \pm 1}{4}$, also $u = 1$ oder $u = \frac12$.'
  - text: 'Liegen beide Werte im möglichen Bereich eines Kosinus?'
    erklaerung: 'Ja, beide liegen zwischen $-1$ und $1$. Beide führen also zu Winkeln.'
  - text: 'Löse $\cos x = 1$ in $[0, 2\pi)$.'
    teil: { typ: menge, loesung: ["0"] }
    erklaerung: 'Der Punkt am Einheitskreis liegt bei $(1 \mid 0)$, also $x = 0$.'
  - text: 'Löse $\cos x = \frac12$ in $[0, 2\pi)$.'
    teil: { typ: menge, loesung: ["pi/3", "5*pi/3"] }
    erklaerung: '$\arccos\frac12 = \frac{\pi}{3}$, das Spiegelbild an der $x$-Achse ist $2\pi - \frac{\pi}{3} = \frac{5\pi}{3}$.'
```

```aufgabe
id: tr-sub-pythagoras
titel: Erst ersetzen, dann substituieren
niveau: 3
lernziel: 6
kompetenz: rechnen
angabe: |
  Löse $2\sin^2 x - 3\cos x - 3 = 0$ im Intervall $[0, 2\pi)$.
teile:
  - typ: menge
    label: 'Lösungen'
    loesung: ["2*pi/3", "pi", "4*pi/3"]
    fehler:
      - wert: ["2*pi/3", "4*pi/3"]
        meldung: 'Auch $\cos x = -1$ liefert eine Lösung, nämlich $x = \pi$.'
      - wert: ["pi/3", "5*pi/3", "pi"]
        meldung: 'Prüfe das Vorzeichen: Die Substitution ergibt $\cos x = -\frac12$, nicht $+\frac12$.'
hinweise:
  - 'Ersetze $\sin^2 x$ durch $1 - \cos^2 x$. Dann kommt nur noch der Kosinus vor.'
  - 'Nach dem Ordnen entsteht $2\cos^2 x + 3\cos x + 1 = 0$. Substituiere $u = \cos x$.'
loesung: |
  **Ansatz:** Mit $\sin^2 x = 1 - \cos^2 x$ steht nur noch der Kosinus in der Gleichung.
  ---
  $2(1 - \cos^2 x) - 3\cos x - 3 = 0$, also $-2\cos^2 x - 3\cos x - 1 = 0$. Mit $-1$ multipliziert: $2\cos^2 x + 3\cos x + 1 = 0$.
  ---
  $u = \cos x$: $u = \frac{-3 \pm \sqrt{9 - 8}}{4} = \frac{-3 \pm 1}{4}$, also $u_1 = -\frac12$ und $u_2 = -1$.
  ---
  $\cos x = -\frac12$ liefert $\frac{2\pi}{3}$ und $\frac{4\pi}{3}$. $\cos x = -1$ liefert $\pi$. $L = \left\{\frac{2\pi}{3};\ \pi;\ \frac{4\pi}{3}\right\}$.
```

```aufgabe
id: tr-sub-fehler-finden
titel: Wo ist die verlorene Lösung?
niveau: 2
lernziel: 6
kompetenz: begruenden
angabe: |
  Max löst $\sin^2 x = \sin x$ in $[0, 2\pi)$ so: „Ich teile durch $\sin x$. Dann ist $\sin x = 1$, also $x = \frac{\pi}{2}$.“

  a) Welcher Schritt ist falsch?

  b) Gib alle Lösungen an.
teile:
  - typ: auswahl
    label: 'a) Der falsche Schritt'
    optionen:
      - 'Das Teilen durch $\sin x$, denn $\sin x$ kann null sein.'
      - 'Die Lösung von $\sin x = 1$.'
      - 'Kein Schritt ist falsch.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$\sin x = 1$ hat in $[0, 2\pi)$ wirklich nur die Lösung $\frac{\pi}{2}$. Der Fehler passiert früher.'
      - wert: 2
        meldung: 'Setze $x = 0$ ein: $0 = 0$. Das ist eine Lösung, die Max nicht gefunden hat.'
  - typ: menge
    label: 'b) alle Lösungen'
    loesung: ["0", "pi/2", "pi"]
    fehler:
      - wert: ["pi/2"]
        meldung: 'Das ist Max'' Ergebnis. Die Stellen mit $\sin x = 0$ fehlen.'
hinweise:
  - 'Was passiert an Stellen, an denen $\sin x = 0$ ist? Setze ein.'
  - 'Bringe alles auf eine Seite und hebe $\sin x$ heraus: $\sin x\,(\sin x - 1) = 0$.'
loesung: |
  **Ansatz:** Durch einen Term darf man nur teilen, wenn er nicht null ist. Max hat übersehen, dass $\sin x = 0$ möglich ist.
  ---
  Richtig: $\sin^2 x - \sin x = 0$, also $\sin x\,(\sin x - 1) = 0$.
  ---
  $\sin x = 0$ liefert $0$ und $\pi$. $\sin x = 1$ liefert $\frac{\pi}{2}$. $L = \left\{0;\ \frac{\pi}{2};\ \pi\right\}$.
```

```aufgabe
id: tr-sub-doppel
titel: Doppelwinkel gegen Kosinus
niveau: 3
lernziel: 6
kompetenz: rechnen
angabe: |
  Löse $\sin(2x) = \cos x$ im Intervall $[0, 2\pi)$.
teile:
  - typ: menge
    label: 'Lösungen'
    loesung: ["pi/6", "pi/2", "5*pi/6", "3*pi/2"]
    fehler:
      - wert: ["pi/6", "5*pi/6"]
        meldung: 'Du hast durch $\cos x$ geteilt. Die Stellen mit $\cos x = 0$ sind aber auch Lösungen.'
      - wert: ["pi/6", "pi/2", "5*pi/6"]
        meldung: '$\cos x = 0$ hat in $[0, 2\pi)$ zwei Lösungen, $\frac{\pi}{2}$ und $\frac{3\pi}{2}$.'
hinweise:
  - 'Ersetze $\sin(2x)$ durch $2\sin x\cos x$.'
  - 'Bringe alles auf eine Seite und hebe $\cos x$ heraus: $\cos x\,(2\sin x - 1) = 0$.'
loesung: |
  **Ansatz:** Mit der Doppelwinkelformel steht links $2\sin x\cos x$. Dann haben beide Seiten den Faktor $\cos x$, und wir heben ihn heraus.
  ---
  $2\sin x\cos x - \cos x = 0$, also $\cos x\,(2\sin x - 1) = 0$.
  ---
  $\cos x = 0$ liefert $\frac{\pi}{2}$ und $\frac{3\pi}{2}$.
  ---
  $2\sin x - 1 = 0$, also $\sin x = \frac12$. Das liefert $\frac{\pi}{6}$ und $\frac{5\pi}{6}$.
  ---
  $L = \left\{\frac{\pi}{6};\ \frac{\pi}{2};\ \frac{5\pi}{6};\ \frac{3\pi}{2}\right\}$. **Probe** für $\frac{\pi}{6}$: $\sin\frac{\pi}{3} = \frac{\sqrt3}{2} = \cos\frac{\pi}{6}$.
```

```aufgabe
id: tr-sub-cos2x
titel: Doppelwinkel im Kosinus
niveau: 3
lernziel: 6
kompetenz: rechnen
angabe: |
  Löse $\cos(2x) = 3\cos x + 1$ im Intervall $[0, 2\pi)$.
teile:
  - typ: menge
    label: 'Lösungen'
    loesung: ["2*pi/3", "4*pi/3"]
    fehler:
      - wert: ["2*pi/3"]
        meldung: '$\cos x = -\frac12$ hat in $[0, 2\pi)$ zwei Lösungen: im II. und im III. Quadranten.'
      - wert: ["pi/3", "5*pi/3"]
        meldung: 'Prüfe das Vorzeichen: Die brauchbare Lösung der quadratischen Gleichung ist $u = -\frac12$.'
hinweise:
  - 'Wähle die Form der Doppelwinkelformel, in der nur der Kosinus vorkommt: $\cos(2x) = 2\cos^2 x - 1$.'
  - 'Substituiere $u = \cos x$. Es entsteht $2u^2 - 3u - 2 = 0$. Prüfe, ob beide Lösungen als Kosinus möglich sind.'
loesung: |
  **Ansatz:** Mit $\cos(2x) = 2\cos^2 x - 1$ kommt nur noch $\cos x$ vor.
  ---
  $2\cos^2 x - 1 = 3\cos x + 1$, also $2\cos^2 x - 3\cos x - 2 = 0$. Mit $u = \cos x$: $2u^2 - 3u - 2 = 0$.
  ---
  $u = \frac{3 \pm \sqrt{9 + 16}}{4} = \frac{3 \pm 5}{4}$, also $u_1 = 2$ und $u_2 = -\frac12$.
  ---
  $u_1 = 2$ fällt weg, denn ein Kosinus ist nie größer als $1$. $\cos x = -\frac12$ liefert $\frac{2\pi}{3}$ und $\frac{4\pi}{3}$.
  ---
  $L = \left\{\frac{2\pi}{3};\ \frac{4\pi}{3}\right\}$. **Probe** für $\frac{2\pi}{3}$: links $\cos\frac{4\pi}{3} = -\frac12$, rechts $3\cdot\left(-\frac12\right) + 1 = -\frac12$.
```

## Polarkoordinaten

```aufgabe
id: tr-pol-check-kreis
titel: Ein Punkt auf einem Kreis mit Radius r
art: check
niveau: 1
angabe: |
  Ein Punkt liegt auf dem Kreis mit Radius $r$ um den Ursprung, unter dem Winkel $\varphi$ zur positiven $x$-Achse.
  Welche Koordinaten hat er? Zum Nachlesen: [5.4 Der Einheitskreis](/lernen/mathe3/trigonometrie/der-einheitskreis).
teile:
  - typ: auswahl
    optionen:
      - '$(r\cos\varphi \mid r\sin\varphi)$'
      - '$(r\sin\varphi \mid r\cos\varphi)$'
      - '$(\cos\varphi \mid \sin\varphi)$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Sinus und Kosinus sind vertauscht. Am Einheitskreis ist der Kosinus die $x$-Koordinate.'
      - wert: 2
        meldung: 'Das gilt nur für den Einheitskreis mit $r = 1$. Bei Radius $r$ ist alles $r$-mal so groß.'
loesung: |
  Am Einheitskreis hat der Punkt die Koordinaten $(\cos\varphi \mid \sin\varphi)$.
  ---
  Ein Kreis mit Radius $r$ ist der Einheitskreis, mit $r$ gestreckt. Also $(r\cos\varphi \mid r\sin\varphi)$.
```

**Worum geht es?** Einen Punkt in der Ebene kannst du auf zwei Arten angeben. Mit **kartesischen Koordinaten**
$(x \mid y)$ sagst du: so weit nach rechts, so weit nach oben. Mit **Polarkoordinaten** sagst du: in diese Richtung,
so weit weg. Ein Radar macht genau das: Es meldet ein Flugzeug in $120$ km Entfernung unter $35°$. Polarkoordinaten
brauchst du für die Polarform der komplexen Zahlen in
[Kapitel 15, Polarform](/lernen/mathe3/komplexe-zahlen/polarform-und-exponentialform).

:::definition[Polarkoordinaten]
Ein Punkt $P \ne (0 \mid 0)$ hat die **Polarkoordinaten** $(r \mid \varphi)$. Dabei ist $r > 0$ sein Abstand vom
Ursprung und $\varphi$ der Winkel zwischen der positiven $x$-Achse und der Strecke vom Ursprung zu $P$, gegen den
Uhrzeigersinn gemessen. Üblich ist $0° \le \varphi < 360°$ oder im Bogenmaß $0 \le \varphi < 2\pi$.
:::

**Beispiel:** Der Punkt $(0 \mid 3)$ liegt $3$ vom Ursprung entfernt, genau oben. Seine Polarkoordinaten sind
$(3 \mid 90°)$. **Nichtbeispiel:** $(3 \mid 90°)$ ist **nicht** der Punkt mit $x = 3$ und $y = 90$. Die beiden Zahlen
haben in Polarkoordinaten eine ganz andere Bedeutung: Abstand und Winkel.

```plot
x: [-1, 5]
y: [-1, 4.5]
gleich: true
kurven:
  - { x: "0.8*cos(t)", y: "0.8*sin(t)", t: [0, 0.9273], farbe: 1 }
vektoren:
  - { nach: [3, 4], label: "P", farbe: 0 }
strecken:
  - { von: [3, 0], nach: [3, 4], gestrichelt: true, farbe: 2 }
  - { von: [0, 4], nach: [3, 4], gestrichelt: true, farbe: 2 }
punkte:
  - { x: 1.2, y: 2.4, label: "r" }
  - { x: 1.05, y: 0.4, label: "φ" }
  - { x: 3.3, y: 2, label: "y = r·sin φ" }
  - { x: 1.5, y: -0.35, label: "x = r·cos φ" }
beschriftung: Ein Punkt P mit Abstand r vom Ursprung und Winkel φ zur positiven x-Achse. Die kartesischen Koordinaten sind die Katheten des rechtwinkligen Dreiecks mit der Hypotenuse r.
```

### Von Polarkoordinaten zu kartesischen Koordinaten

Der Punkt liegt auf dem Kreis mit Radius $r$. Wie in der Eingangsfrage gilt deshalb
$$x = r\cdot\cos\varphi, \qquad y = r\cdot\sin\varphi.$$
Diese Richtung ist einfach. Die Vorzeichen stimmen automatisch, weil Sinus und Kosinus sie aus dem Quadranten
mitbringen.

:::beispiel[Ein Flugzeug auf dem Radar]
Ein Radar im Ursprung meldet ein Flugzeug in $120$ km Entfernung unter $35°$ gegen die Ostrichtung, gegen den
Uhrzeigersinn gemessen. Die $x$-Achse zeigt nach Osten, die $y$-Achse nach Norden. Wo ist das Flugzeug?

1. $x = 120\cdot\cos 35° \approx 120\cdot 0{,}8192 \approx 98{,}30$ km nach Osten.
2. $y = 120\cdot\sin 35° \approx 120\cdot 0{,}5736 \approx 68{,}83$ km nach Norden.
3. **Kontrolle:** $\sqrt{98{,}30^2 + 68{,}83^2} \approx 120$ km.
:::

### Von kartesischen Koordinaten zu Polarkoordinaten

Diese Richtung ist schwieriger. Der Abstand folgt aus dem Pythagoras: $r = \sqrt{x^2 + y^2}$. Für den Winkel gilt
$\tan\varphi = \frac{y}{x}$. Aber $\tan^{-1}$ liefert nur Winkel zwischen $-90°$ und $90°$, also nur Punkte rechts von
der $y$-Achse. Liegt der Punkt links, musst du den Winkel korrigieren.

:::achtung[Den Winkel ohne Blick auf den Quadranten berechnet]
Gesucht sind die Polarkoordinaten von $P(-5 \mid 12)$. Jemand rechnet $r = \sqrt{25 + 144} = 13$ und
$\varphi = \tan^{-1}\frac{12}{-5} \approx -67{,}38°$. Dieser Winkel zeigt aber nach rechts unten, in den IV. Quadranten.
Der Punkt $P$ liegt links oben.

Richtig: Der Rechner hat den Winkel der Gegenrichtung geliefert. Man addiert $180°$:
$\varphi = -67{,}38° + 180° = 112{,}62°$. Zeichne vor jeder Winkelberechnung den Punkt grob ein.
:::

:::beispiel[Ein Punkt im zweiten Quadranten]
Gesucht sind die Polarkoordinaten von $P(-5 \mid 12)$.

1. **Abstand:** $r = \sqrt{(-5)^2 + 12^2} = \sqrt{169} = 13$.
2. **Quadrant:** $x < 0$ und $y > 0$, also links oben, II. Quadrant.
3. **Bezugswinkel** mit Beträgen: $\tan^{-1}\frac{12}{5} \approx 67{,}38°$. Das ist der spitze Winkel zur $x$-Achse.
4. **Winkel im II. Quadranten:** $\varphi = 180° - 67{,}38° = 112{,}62°$.
5. **Probe:** $13\cdot\cos 112{,}62° \approx -5$ und $13\cdot\sin 112{,}62° \approx 12$.
:::

:::merke[Rezept: kartesisch in polar]
1. Den Punkt skizzieren und den Quadranten bestimmen.
2. $r = \sqrt{x^2 + y^2}$.
3. Bezugswinkel mit Beträgen: $\alpha = \tan^{-1}\left|\frac{y}{x}\right|$.
4. Je nach Quadrant: I. $\varphi = \alpha$, II. $\varphi = 180° - \alpha$, III. $\varphi = 180° + \alpha$,
   IV. $\varphi = 360° - \alpha$.
5. Sonderfälle auf den Achsen direkt ablesen, etwa $(0 \mid -2)$ mit $\varphi = 270°$.
6. Probe mit $x = r\cos\varphi$ und $y = r\sin\varphi$.
:::

:::achtung[Sinus und Kosinus vertauscht]
Für $r = 4$ und $\varphi = 30°$ rechnet jemand $x = 4\cdot\sin 30° = 2$ und $y = 4\cdot\cos 30° \approx 3{,}46$. Der Punkt
läge dann bei $60°$, nicht bei $30°$.

Richtig ist $x = 4\cdot\cos 30° \approx 3{,}46$ und $y = 4\cdot\sin 30° = 2$. Merkhilfe: Der Kosinus gehört zur $x$-Achse,
an der der Winkel anliegt. Kontrolle: Bei $30°$ ist der Punkt flach, also muss $x$ größer als $y$ sein.
:::

```reflexion
frage: Warum sind Polarkoordinaten nicht eindeutig, wenn man beliebige Winkel zulässt? Und warum hat der Ursprung keinen Winkel?
antwort: |
  Ein Winkel und derselbe Winkel plus eine volle Umdrehung zeigen in dieselbe Richtung. $(2 \mid 30°)$ und
  $(2 \mid 390°)$ beschreiben also denselben Punkt. Deshalb legt man den Winkel meist auf $0°$ bis unter $360°$ fest.
  Beim Ursprung ist $r = 0$. Von dort aus gibt es keine Richtung zum Punkt, weil der Punkt selbst der Ursprung ist.
  Jeder Winkel würde passen, also ist keiner sinnvoll festgelegt. Bei komplexen Zahlen heißt das: $z = 0$ hat kein
  Argument.
```

```aufgabe
id: tr-pol-zu-kart
titel: Von polar zu kartesisch
niveau: 1
lernziel: 8
kompetenz: rechnen
angabe: |
  Ein Punkt hat die Polarkoordinaten $r = 6$ und $\varphi = 150°$. Bestimme seine kartesischen Koordinaten exakt oder
  auf drei Nachkommastellen.
teile:
  - typ: vektor
    namen: ["x", "y"]
    loesung: ["6*cos(inRad(150))", "6*sin(inRad(150))"]
    fehler:
      - wert: ["3", "-3*sqrt(3)"]
        meldung: 'Sinus und Kosinus sind vertauscht. Die $x$-Koordinate ist $r\cos\varphi$.'
      - wert: ["3*sqrt(3)", "3"]
        meldung: 'Der Punkt liegt bei $150°$, also links von der $y$-Achse. Die $x$-Koordinate ist negativ.'
hinweise:
  - '$x = r\cos\varphi$ und $y = r\sin\varphi$. $\cos 150° = -\frac{\sqrt3}{2}$ und $\sin 150° = \frac12$.'
loesung: |
  **Ansatz:** $x = r\cos\varphi$, $y = r\sin\varphi$.
  ---
  $x = 6\cdot\cos 150° = 6\cdot\left(-\frac{\sqrt3}{2}\right) = -3\sqrt3 \approx -5{,}196$ und $y = 6\cdot\sin 150° = 6\cdot\frac12 = 3$.
  ---
  $P(-3\sqrt3 \mid 3)$. **Kontrolle:** $\sqrt{27 + 9} = 6$, und der Punkt liegt links oben, wie es zu $150°$ passt.
```

```aufgabe
id: tr-pol-zu-polar-einfach
titel: Von kartesisch zu polar im ersten Quadranten
niveau: 1
lernziel: 8
kompetenz: rechnen
angabe: |
  Bestimme die Polarkoordinaten des Punktes $P(5 \mid 5)$. Gib $r$ exakt oder auf drei Nachkommastellen und $\varphi$ in Grad an.
teile:
  - typ: zahl
    label: '$r$'
    loesung: "5*sqrt(2)"
    anzeige: '5\sqrt2 \approx 7{,}071'
    fehler:
      - wert: "10"
        meldung: 'Den Abstand vom Ursprung liefert der Pythagoras: $\sqrt{5^2 + 5^2}$, nicht $5 + 5$.'
  - typ: zahl
    label: '$\varphi$'
    einheit: °
    loesung: "45"
hinweise:
  - '$r = \sqrt{x^2 + y^2}$ und $\tan\varphi = \frac{y}{x}$.'
loesung: |
  **Ansatz:** Abstand mit Pythagoras, Winkel mit dem Tangens. Der Punkt liegt im I. Quadranten, eine Korrektur ist nicht nötig.
  ---
  $r = \sqrt{25 + 25} = \sqrt{50} = 5\sqrt2 \approx 7{,}071$. $\tan\varphi = \frac55 = 1$, also $\varphi = 45°$.
```

```aufgabe
id: tr-pol-bogenmass
titel: Polarkoordinaten im Bogenmaß
niveau: 1
lernziel: 8
kompetenz: rechnen
angabe: |
  Ein Punkt hat die Polarkoordinaten $r = 2$ und $\varphi = \frac{5\pi}{4}$. Bestimme seine kartesischen Koordinaten exakt.
teile:
  - typ: vektor
    namen: ["x", "y"]
    loesung: ["-sqrt(2)", "-sqrt(2)"]
    fehler:
      - wert: ["sqrt(2)", "sqrt(2)"]
        meldung: '$\frac{5\pi}{4} = 225°$ liegt im III. Quadranten. Dort sind beide Koordinaten negativ.'
hinweise:
  - '$\frac{5\pi}{4} = 225°$. Bezugswinkel $45°$, III. Quadrant.'
loesung: |
  **Ansatz:** $x = r\cos\varphi$, $y = r\sin\varphi$ mit $\varphi = \frac{5\pi}{4} = 225°$.
  ---
  $\cos 225° = -\frac{\sqrt2}{2}$ und $\sin 225° = -\frac{\sqrt2}{2}$. Also $x = y = 2\cdot\left(-\frac{\sqrt2}{2}\right) = -\sqrt2$.
```

```aufgabe
id: tr-pol-quadrant
titel: Ein Punkt im dritten Quadranten
niveau: 2
lernziel: 8
kompetenz: rechnen
angabe: |
  Bestimme die Polarkoordinaten von $P(-2 \mid -5)$ mit $0° \le \varphi < 360°$. Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    label: '$r$'
    loesung: "sqrt(29)"
    anzeige: '\sqrt{29} \approx 5{,}39'
  - typ: zahl
    label: '$\varphi$'
    einheit: °
    loesung: "180 + inGrad(atan(5/2))"
    anzeige: '248{,}20'
    fehler:
      - wert: "inGrad(atan(5/2))"
        meldung: 'Der Rechner liefert einen Winkel im I. Quadranten. Der Punkt liegt aber links unten. Addiere $180°$.'
      - wert: "360 - inGrad(atan(5/2))"
        meldung: 'Dieser Winkel liegt im IV. Quadranten, rechts unten. $P$ liegt links unten, im III. Quadranten.'
hinweise:
  - 'Skizziere den Punkt. In welchem Quadranten liegt er?'
  - 'Bezugswinkel $\tan^{-1}\frac{5}{2}$. Im III. Quadranten ist $\varphi = 180° + \text{Bezugswinkel}$.'
loesung: |
  **Ansatz:** Abstand mit Pythagoras, Winkel über den Bezugswinkel mit Quadrantenkorrektur.
  ---
  $r = \sqrt{4 + 25} = \sqrt{29} \approx 5{,}39$.
  ---
  $x < 0$ und $y < 0$: III. Quadrant. Bezugswinkel $\tan^{-1}\frac52 \approx 68{,}20°$.
  ---
  $\varphi = 180° + 68{,}20° = 248{,}20°$. **Probe:** $\sqrt{29}\cdot\cos 248{,}20° \approx -2$ und $\sqrt{29}\cdot\sin 248{,}20° \approx -5$.
```

```aufgabe
id: tr-pol-gefuehrt
titel: Polarkoordinaten Schritt für Schritt
niveau: 2
lernziel: 8
kompetenz: rechnen
angabe: |
  Bestimme die Polarkoordinaten von $P(4 \mid -7)$ mit $0° \le \varphi < 360°$. Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    label: '$r$'
    loesung: "sqrt(65)"
    anzeige: '8{,}06'
  - typ: zahl
    label: '$\varphi$'
    einheit: °
    loesung: "360 - inGrad(atan(7/4))"
    anzeige: '299{,}74'
    fehler:
      - wert: "inGrad(atan(-7/4))"
        meldung: 'Der Rechnerwert $-60{,}26°$ zeigt in die richtige Richtung, liegt aber nicht zwischen $0°$ und $360°$. Addiere $360°$.'
hinweise:
  - 'Der Punkt liegt rechts unten, im IV. Quadranten.'
  - 'Bezugswinkel $\tan^{-1}\frac{7}{4}$. Im IV. Quadranten ist $\varphi = 360° - \text{Bezugswinkel}$.'
loesung: |
  **Ansatz:** Rezept mit Quadrant, Abstand und Bezugswinkel.
  ---
  $x > 0$ und $y < 0$: IV. Quadrant. $r = \sqrt{16 + 49} = \sqrt{65} \approx 8{,}06$.
  ---
  Bezugswinkel: $\tan^{-1}\frac74 \approx 60{,}26°$.
  ---
  $\varphi = 360° - 60{,}26° = 299{,}74°$.
gefuehrt:
  - text: 'In welchem Quadranten liegt $P(4 \mid -7)$? Gib die Nummer ein.'
    teil: { typ: zahl, loesung: "4", fehler: [ { wert: "2", meldung: 'Im II. Quadranten wäre $x$ negativ. Hier ist $x = 4$ positiv und $y$ negativ.' } ] }
    erklaerung: 'Rechts unten: IV. Quadrant.'
  - text: 'Berechne $r$.'
    teil: { typ: zahl, loesung: "sqrt(65)" }
    erklaerung: '$r = \sqrt{4^2 + 7^2} = \sqrt{65} \approx 8{,}06$.'
  - text: 'Berechne den Bezugswinkel $\tan^{-1}\left|\frac{y}{x}\right|$.'
    teil: { typ: zahl, einheit: °, loesung: "inGrad(atan(7/4))" }
    erklaerung: '$\tan^{-1}\frac74 \approx 60{,}26°$, der spitze Winkel zur $x$-Achse.'
  - text: 'Bestimme $\varphi$ im IV. Quadranten.'
    teil: { typ: zahl, einheit: °, loesung: "360 - inGrad(atan(7/4))" }
    erklaerung: '$\varphi = 360° - 60{,}26° = 299{,}74°$.'
```

```aufgabe
id: tr-pol-radar
titel: Zwei Schiffe auf dem Radar
niveau: 2
lernziel: 8
kompetenz: anwenden
angabe: |
  Ein Radar meldet Schiff $A$ in $8$ km Entfernung unter $20°$ und Schiff $B$ in $5$ km Entfernung unter $95°$, beide
  Winkel gegen die Ostrichtung und gegen den Uhrzeigersinn. Wie weit sind die Schiffe voneinander entfernt? Runde
  auf zwei Nachkommastellen.
teile:
  - typ: zahl
    label: 'Abstand'
    einheit: km
    loesung: "sqrt(64 + 25 - 2*8*5*cos(inRad(75)))"
    anzeige: '8{,}26'
    fehler:
      - wert: "sqrt(64 + 25)"
        meldung: 'Das wäre richtig, wenn die beiden Richtungen senkrecht aufeinander stünden. Der Winkel zwischen ihnen ist aber $95° - 20° = 75°$.'
      - wert: "8 - 5"
        meldung: 'Die Schiffe liegen nicht in derselben Richtung. Du brauchst den Winkel zwischen den beiden Peilrichtungen.'
hinweise:
  - 'Radar, $A$ und $B$ bilden ein Dreieck. Zwei Seiten ($8$ km und $5$ km) und der Winkel dazwischen sind bekannt.'
  - 'Der Winkel zwischen den Peilrichtungen ist die Differenz der beiden Polarwinkel. Dann Kosinussatz.'
loesung: |
  **Ansatz:** Die Polarkoordinaten liefern direkt ein Dreieck mit den Seiten $8$ km und $5$ km. Der eingeschlossene Winkel ist $95° - 20° = 75°$. Das ist der Fall SWS.
  ---
  Kosinussatz: $d^2 = 8^2 + 5^2 - 2\cdot 8\cdot 5\cdot\cos 75° \approx 89 - 20{,}71 = 68{,}29$.
  ---
  $d \approx 8{,}26$ km. **Kontrolle über kartesische Koordinaten:** $A \approx (7{,}52 \mid 2{,}74)$ und $B \approx (-0{,}44 \mid 4{,}98)$. Der Abstand ist $\sqrt{7{,}95^2 + 2{,}24^2} \approx 8{,}26$ km.
```

```aufgabe
id: tr-pol-roboter
titel: Ein Roboterarm mit zwei Gliedern
niveau: 3
lernziel: 8
kompetenz: modellieren
angabe: |
  Ein Roboterarm hat sein Grundgelenk im Ursprung. Das erste Glied ist $30$ cm lang und zeigt unter $40°$ zur
  $x$-Achse. Am Ende sitzt ein zweites Gelenk. Das zweite Glied ist $20$ cm lang und zeigt unter $100°$ zur $x$-Achse.

  a) Berechne die kartesischen Koordinaten der Greiferspitze (zwei Nachkommastellen).

  b) Berechne ihre Polarkoordinaten $r$ und $\varphi$ (zwei Nachkommastellen).

  c) Prüfe $r$ mit dem Kosinussatz. Welchen Winkel schließen die beiden Glieder im Gelenk ein?
teile:
  - typ: vektor
    label: 'a) Spitze'
    namen: ["x", "y"]
    loesung: ["30*cos(inRad(40)) + 20*cos(inRad(100))", "30*sin(inRad(40)) + 20*sin(inRad(100))"]
    fehler:
      - wert: ["30*cos(inRad(40)) + 20*cos(inRad(60))", "30*sin(inRad(40)) + 20*sin(inRad(60))"]
        meldung: 'Der Winkel $100°$ ist gegen die $x$-Achse gemessen, nicht gegen das erste Glied. Setze $100°$ direkt ein.'
  - typ: zahl
    label: 'b) $r$'
    einheit: cm
    loesung: "sqrt(1900)"
    anzeige: '43{,}59'
  - typ: zahl
    label: 'b) $\varphi$'
    einheit: °
    loesung: "inGrad(atan((30*sin(inRad(40)) + 20*sin(inRad(100)))/(30*cos(inRad(40)) + 20*cos(inRad(100)))))"
    anzeige: '63{,}41'
  - typ: zahl
    label: 'c) Winkel im Gelenk'
    einheit: °
    loesung: "180 - 60"
    fehler:
      - wert: "60"
        meldung: '$60°$ ist der Richtungsunterschied der beiden Glieder. Im Dreieck aus Ursprung, Gelenk und Spitze ist der Innenwinkel am Gelenk der Nebenwinkel.'
hinweise:
  - 'Die Spitze ist die Summe von zwei Verschiebungen: $(30\cos 40° \mid 30\sin 40°)$ und $(20\cos 100° \mid 20\sin 100°)$.'
  - 'Für c): Die Glieder ändern ihre Richtung um $100° - 40° = 60°$. Der Innenwinkel am Gelenk ist dann $180° - 60°$.'
loesung: |
  **Ansatz:** Jedes Glied ist ein Pfeil, den man in Polarkoordinaten kennt. Die Spitze erreicht man, indem man beide Pfeile aneinanderhängt, also ihre kartesischen Komponenten addiert.
  ---
  a) Erstes Glied: $(30\cos 40° \mid 30\sin 40°) \approx (22{,}98 \mid 19{,}28)$. Zweites: $(20\cos 100° \mid 20\sin 100°) \approx (-3{,}47 \mid 19{,}70)$. Summe: $(19{,}51 \mid 38{,}98)$.
  ---
  b) $r = \sqrt{19{,}51^2 + 38{,}98^2} \approx 43{,}59$ cm. Die Spitze liegt im I. Quadranten: $\varphi = \tan^{-1}\frac{38{,}98}{19{,}51} \approx 63{,}41°$.
  ---
  c) Im Dreieck aus Ursprung, Gelenk und Spitze ist der Innenwinkel am Gelenk $180° - 60° = 120°$. Kosinussatz: $r^2 = 30^2 + 20^2 - 2\cdot 30\cdot 20\cdot\cos 120° = 900 + 400 + 600 = 1900$, also $r = \sqrt{1900} \approx 43{,}59$ cm. Es stimmt.
```

## Überlagerung von Schwingungen und Schwebung (Vertiefung)

```aufgabe
id: tr-ueb-check-additionstheorem
titel: Das Additionstheorem für den Sinus
art: check
niveau: 1
angabe: |
  Welche Formel ist richtig? Zum Nachlesen:
  [5.12 Trigonometrische Identitäten](/lernen/mathe3/trigonometrie/trigonometrische-identitaeten).
teile:
  - typ: auswahl
    optionen:
      - '$\sin(x + \varphi) = \sin x\cos\varphi + \cos x\sin\varphi$'
      - '$\sin(x + \varphi) = \sin x + \sin\varphi$'
      - '$\sin(x + \varphi) = \sin x\sin\varphi + \cos x\cos\varphi$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Der Sinus ist nicht linear. Teste mit $x = \varphi = 90°$: links $\sin 180° = 0$, rechts $2$.'
      - wert: 2
        meldung: 'Diese Mischung gehört zu keinem Additionstheorem. Beim Sinus einer Summe wird gemischt: Sinus mal Kosinus.'
loesung: |
  Das Additionstheorem lautet $\sin(x + \varphi) = \sin x\cos\varphi + \cos x\sin\varphi$.
  ---
  Diese Formel ist der Schlüssel dieser Lektion: Sie zerlegt eine verschobene Sinusschwingung in einen Sinus- und einen Kosinusanteil.
```

**Worum geht es?** Was passiert, wenn zwei Schwingungen gleichzeitig wirken? Zwei Lautsprecher spielen denselben Ton,
zwei Wechselspannungen liegen in Reihe, zwei Stimmgabeln klingen fast gleich hoch. In der Physik heißt das
**Überlagerung**: Die Auslenkungen werden addiert. Diese Lektion zeigt zwei wichtige Fälle. Sie geht über den Stoff der
Studienberechtigungsprüfung hinaus und ist eine Brücke zur Physik.

### Gleiche Frequenz: wieder eine Sinusschwingung

Addiert man eine Sinus- und eine Kosinusschwingung mit **derselben** Frequenz, entsteht wieder eine reine
Sinusschwingung, nur mit anderer Amplitude und verschobener Phase.

:::satz[Überlagerung gleicher Frequenz]
Für Zahlen $a$ und $b$, die nicht beide null sind, gilt für alle $x$:
$$a\sin x + b\cos x = R\sin(x + \varphi) \qquad\text{mit}\qquad R = \sqrt{a^2 + b^2}.$$
Der Winkel $\varphi$ ist der Polarwinkel des Punktes $(a \mid b)$: $\cos\varphi = \frac{a}{R}$ und $\sin\varphi = \frac{b}{R}$.
:::

**Begründung:** Nach dem Additionstheorem ist $R\sin(x + \varphi) = R\cos\varphi\cdot\sin x + R\sin\varphi\cdot\cos x$.
Das stimmt mit $a\sin x + b\cos x$ überein, wenn $a = R\cos\varphi$ und $b = R\sin\varphi$ ist. Genau das bedeutet:
$(R \mid \varphi)$ sind die Polarkoordinaten des Punktes $(a \mid b)$, siehe
[5.14 Polarkoordinaten](/lernen/mathe3/trigonometrie/polarkoordinaten).

:::beispiel[Exakt zusammengefasst]
Gesucht ist die Form $R\sin(x + \varphi)$ von $\sin x + \sqrt3\cos x$.

1. Es ist $a = 1$ und $b = \sqrt3$.
2. $R = \sqrt{1 + 3} = 2$.
3. Der Punkt $(1 \mid \sqrt3)$ liegt im I. Quadranten, $\tan\varphi = \sqrt3$, also $\varphi = \frac{\pi}{3}$.
4. Ergebnis: $\sin x + \sqrt3\cos x = 2\sin\left(x + \frac{\pi}{3}\right)$.
5. **Probe bei $x = 0$:** links $0 + \sqrt3$, rechts $2\sin\frac{\pi}{3} = 2\cdot\frac{\sqrt3}{2} = \sqrt3$.
:::

:::beispiel[Zwei Wechselspannungen]
In einem Stromkreis überlagern sich zwei Wechselspannungen gleicher Frequenz:
$u_1(t) = 7\sin(\omega t)$ und $u_2(t) = 24\cos(\omega t)$, beide in Volt. Wie groß ist die Spitzenspannung der Summe?

1. $a = 7$ und $b = 24$, also $R = \sqrt{49 + 576} = \sqrt{625} = 25$ V.
2. Phase: $\tan\varphi = \frac{24}{7}$, im I. Quadranten also $\varphi \approx 73{,}74°$.
3. Ergebnis: $u_1 + u_2 = 25\sin(\omega t + 73{,}74°)$ in Volt.

**Deutung:** Die Spitzenspannung ist $25$ V, **nicht** $7 + 24 = 31$ V. Die beiden Spannungen erreichen ihre Spitzen zu
verschiedenen Zeiten. Deshalb addieren sich die Spitzen nicht einfach.
:::

:::achtung[Amplituden einfach addiert]
Jemand rechnet für $5\sin x + 12\cos x$ die Amplitude $5 + 12 = 17$. Aber der Sinus ist bei $x = \frac{\pi}{2}$ ganz oben,
der Kosinus dort null. Beide erreichen ihr Maximum nie gleichzeitig.

Richtig ist $R = \sqrt{25 + 144} = 13$. Amplituden addieren sich nur dann direkt, wenn beide Schwingungen gleichphasig
sind, also gleichzeitig ihr Maximum erreichen.
:::

### Fast gleiche Frequenz: die Schwebung

Klingen zwei Töne mit fast gleicher Frequenz zusammen, hört man ein An- und Abschwellen der Lautstärke. Das heißt
**Schwebung**. Musiker stimmen damit ihre Instrumente: Je langsamer die Schwebung, desto näher liegen die Töne.

Aus den Additionstheoremen folgt eine Summenformel. Wir addieren $\sin(u + v) = \sin u\cos v + \cos u\sin v$ und
$\sin(u - v) = \sin u\cos v - \cos u\sin v$. Die gemischten Glieder heben sich weg:
$\sin(u + v) + \sin(u - v) = 2\sin u\cos v$. Mit $u = \frac{p + q}{2}$ und $v = \frac{p - q}{2}$ ist $u + v = p$ und
$u - v = q$. Also gilt:

:::satz[Summe zweier Sinusfunktionen]
$$\sin p + \sin q = 2\sin\frac{p + q}{2}\cdot\cos\frac{p - q}{2}.$$
:::

Für zwei Töne mit den Frequenzen $f_1$ und $f_2$ ist $p = 2\pi f_1 t$ und $q = 2\pi f_2 t$. Der erste Faktor schwingt mit
der mittleren Frequenz $\frac{f_1 + f_2}{2}$, das ist der Ton, den man hört. Der zweite Faktor
$2\cos\big(\pi (f_1 - f_2)\, t\big)$ ändert sich langsam. Er wirkt wie eine schwankende Amplitude, die **Hüllkurve**.

```plot
x: [0, "2*pi"]
y: [-2.4, 2.4]
graphen:
  - { f: "sin(10*x) + sin(12*x)", farbe: 0, label: "Summe" }
  - { f: "2*cos(x)", farbe: 1, gestrichelt: true }
  - { f: "-2*cos(x)", farbe: 1, gestrichelt: true }
beschriftung: Schwebung. Die Summe sin(10x) + sin(12x) schwingt schnell innerhalb der gestrichelten Hüllkurve ±2·cos(x). Die Lautstärke ist groß, wo der Betrag der Hüllkurve groß ist, also zweimal pro Periode des Kosinus.
```

Die Lautstärke ist am größten, wenn der Betrag der Hüllkurve maximal ist. Der Kosinus erreicht $+1$ und $-1$ je einmal
pro Periode. Deshalb hört man **zwei** laute Stellen pro Periode der Hüllkurve. Die Zahl der Schwebungen pro Sekunde
ist darum die volle Differenz:
$$f_{\text{Schwebung}} = |f_1 - f_2|.$$

:::beispiel[Zwei Stimmgabeln]
Eine Stimmgabel schwingt mit $440$ Hz, eine zweite mit $444$ Hz. Was hört man?

1. **Ton:** die mittlere Frequenz $\frac{440 + 444}{2} = 442$ Hz.
2. **Hüllkurve:** $2\cos(2\pi\cdot 2\cdot t)$. Ihre Periode ist $\frac{1}{2}$ s.
3. **Schwebungen:** Pro Periode der Hüllkurve gibt es zwei laute Stellen, also $|444 - 440| = 4$ Schwebungen pro Sekunde.
4. **Deutung:** Man hört einen Ton von $442$ Hz, der viermal pro Sekunde lauter und leiser wird.
:::

:::achtung[Die Schwebungsfrequenz halbiert]
Bei $440$ Hz und $444$ Hz liest jemand aus $\cos\big(2\pi\cdot 2\cdot t\big)$ ab: „$2$ Schwebungen pro Sekunde.“ Das ist
die Frequenz der Hüllkurve, aber nicht die der Lautstärke. Laut ist es sowohl bei $+2$ als auch bei $-2$.

Richtig sind $4$ Schwebungen pro Sekunde, also die volle Differenz $|f_1 - f_2|$.
:::

:::merke[Rezept: Schwingungen überlagern]
1. **Gleiche Frequenz:** $a\sin x + b\cos x$ als $R\sin(x + \varphi)$ schreiben. $R = \sqrt{a^2 + b^2}$ und $\varphi$ ist
   der Polarwinkel von $(a \mid b)$, mit Quadrantenkorrektur.
2. **Fast gleiche Frequenz:** Summenformel anwenden. Gehört wird die mittlere Frequenz, die Lautstärke schwankt
   $|f_1 - f_2|$-mal pro Sekunde.
3. Plausibilität: Die neue Amplitude $R$ liegt zwischen der Differenz und der Summe der Beträge, also zwischen
   $\big||a| - |b|\big|$ und $|a| + |b|$.
:::

```reflexion
frage: Warum ist die Amplitude von $a\sin x + b\cos x$ genau $\sqrt{a^2 + b^2}$ und nicht $a + b$? Erkläre es mit einem Bild.
antwort: |
  Man kann sich jede Schwingung als umlaufenden Zeiger vorstellen, dessen Höhe die Auslenkung ist. Der Sinusanteil
  ist ein Zeiger der Länge $a$, der Kosinusanteil ein Zeiger der Länge $b$, der ihm eine Vierteldrehung voraus ist.
  Die beiden Zeiger stehen also senkrecht aufeinander und drehen gemeinsam. Ihre Summe ist ein Zeiger, dessen Länge
  nach Pythagoras $\sqrt{a^2 + b^2}$ ist. Nur wenn beide Zeiger in dieselbe Richtung zeigen, also gleichphasig sind,
  addieren sich die Längen zu $a + b$.
```

```aufgabe
id: tr-ueb-amplitude
titel: Die Amplitude einer Summe
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Wie groß ist die Amplitude von $f(x) = 20\sin x + 21\cos x$?
teile:
  - typ: zahl
    label: 'Amplitude'
    loesung: "sqrt(400 + 441)"
    fehler:
      - wert: "41"
        meldung: 'Die beiden Anteile erreichen ihr Maximum nie gleichzeitig. Die Amplituden addieren sich deshalb nicht einfach.'
      - wert: "1"
        meldung: 'Das ist die Differenz. Richtig ist $\sqrt{a^2 + b^2}$.'
hinweise:
  - '$R = \sqrt{a^2 + b^2}$.'
loesung: |
  **Ansatz:** Sinus- und Kosinusanteil gleicher Frequenz ergeben eine Schwingung mit der Amplitude $R = \sqrt{a^2 + b^2}$.
  ---
  $R = \sqrt{20^2 + 21^2} = \sqrt{841} = 29$. **Plausibilität:** $29$ liegt zwischen $21 - 20 = 1$ und $21 + 20 = 41$.
```

```aufgabe
id: tr-ueb-schwebung
titel: Schwebungen zählen
niveau: 1
lernziel: 5
kompetenz: anwenden
angabe: |
  Zwei Orgelpfeifen erklingen gleichzeitig mit $256$ Hz und $260$ Hz. Wie viele Schwebungen pro Sekunde hört man, und
  welche Tonhöhe nimmt man wahr?
teile:
  - typ: zahl
    label: 'Schwebungen pro Sekunde'
    einheit: Hz
    loesung: "260 - 256"
    fehler:
      - wert: "2"
        meldung: 'Das ist die Frequenz der Hüllkurve. Laut wird es aber zweimal pro Periode der Hüllkurve.'
  - typ: zahl
    label: 'wahrgenommene Tonhöhe'
    einheit: Hz
    loesung: "(256 + 260)/2"
hinweise:
  - 'Schwebungsfrequenz $= |f_1 - f_2|$, Tonhöhe $= \frac{f_1 + f_2}{2}$.'
loesung: |
  **Ansatz:** Nach der Summenformel hört man die mittlere Frequenz, die Lautstärke schwankt mit der Differenz der Frequenzen.
  ---
  Schwebungen: $|260 - 256| = 4$ pro Sekunde. Tonhöhe: $\frac{256 + 260}{2} = 258$ Hz.
```

```aufgabe
id: tr-ueb-gefuehrt
titel: Sinus minus Kosinus zusammenfassen
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Schreibe $\sin x - \cos x$ in der Form $R\sin(x + \varphi)$ mit $R > 0$ und $-\pi < \varphi \le \pi$.
teile:
  - typ: zahl
    label: '$R$'
    loesung: "sqrt(2)"
    anzeige: '\sqrt2'
  - typ: zahl
    label: '$\varphi$'
    loesung: "-pi/4"
    anzeige: '-\tfrac{\pi}{4}'
    fehler:
      - wert: "pi/4"
        meldung: 'Der Punkt $(a \mid b) = (1 \mid -1)$ liegt im IV. Quadranten. Sein Polarwinkel ist negativ.'
hinweise:
  - 'Hier ist $a = 1$ und $b = -1$.'
  - '$\varphi$ ist der Polarwinkel des Punktes $(1 \mid -1)$.'
loesung: |
  **Ansatz:** $a = 1$, $b = -1$. $R$ ist der Abstand des Punktes $(1 \mid -1)$ vom Ursprung, $\varphi$ sein Polarwinkel.
  ---
  $R = \sqrt{1 + 1} = \sqrt2$.
  ---
  $(1 \mid -1)$ liegt im IV. Quadranten mit Bezugswinkel $\frac{\pi}{4}$. Also $\varphi = -\frac{\pi}{4}$.
  ---
  Ergebnis: $\sin x - \cos x = \sqrt2\sin\left(x - \frac{\pi}{4}\right)$. **Probe bei $x = 0$:** links $-1$, rechts $\sqrt2\cdot\left(-\frac{\sqrt2}{2}\right) = -1$.
gefuehrt:
  - text: 'Lies $a$ und $b$ ab. Gib $b$ ein.'
    teil: { typ: zahl, loesung: "-1", fehler: [ { wert: "1", meldung: 'Vor $\cos x$ steht ein Minus, also $b = -1$.' } ] }
    erklaerung: '$a = 1$ (vor $\sin x$) und $b = -1$ (vor $\cos x$).'
  - text: 'Berechne $R$.'
    teil: { typ: zahl, loesung: "sqrt(2)" }
    erklaerung: '$R = \sqrt{1^2 + (-1)^2} = \sqrt2$.'
  - text: 'Bestimme den Polarwinkel $\varphi$ des Punktes $(1 \mid -1)$ im Bogenmaß, zwischen $-\pi$ und $\pi$.'
    teil: { typ: zahl, loesung: "-pi/4" }
    erklaerung: 'Der Punkt liegt rechts unten, $45°$ unter der $x$-Achse. Also $\varphi = -\frac{\pi}{4}$.'
```

```aufgabe
id: tr-ueb-phase
titel: Amplitude und Phase exakt
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Schreibe $2\sin x + 2\sqrt3\cos x$ in der Form $R\sin(x + \varphi)$. Gib $R$ und $\varphi$ exakt an, $\varphi$ im Bogenmaß.
teile:
  - typ: zahl
    label: '$R$'
    loesung: "sqrt(4 + 12)"
    fehler:
      - wert: "2 + 2*sqrt(3)"
        meldung: 'Amplituden addieren sich nicht direkt. $R = \sqrt{a^2 + b^2}$.'
  - typ: zahl
    label: '$\varphi$'
    loesung: "pi/3"
    anzeige: '\tfrac{\pi}{3}'
    fehler:
      - wert: "pi/6"
        meldung: '$\tan\varphi = \frac{b}{a} = \sqrt3$, nicht $\frac{a}{b}$. Der Winkel mit Tangens $\sqrt3$ ist $\frac{\pi}{3}$.'
hinweise:
  - '$a = 2$ und $b = 2\sqrt3$. Dann $R = \sqrt{a^2 + b^2}$.'
  - '$\tan\varphi = \frac{b}{a}$. Der Punkt $(a \mid b)$ liegt im I. Quadranten.'
loesung: |
  **Ansatz:** $R$ und $\varphi$ sind die Polarkoordinaten des Punktes $(2 \mid 2\sqrt3)$.
  ---
  $R = \sqrt{4 + 12} = \sqrt{16} = 4$.
  ---
  $\tan\varphi = \frac{2\sqrt3}{2} = \sqrt3$, I. Quadrant, also $\varphi = \frac{\pi}{3}$.
  ---
  Ergebnis: $4\sin\left(x + \frac{\pi}{3}\right)$. **Probe bei $x = 0$:** links $2\sqrt3$, rechts $4\cdot\frac{\sqrt3}{2} = 2\sqrt3$.
```

```aufgabe
id: tr-ueb-maximum
titel: Wann ist die Summe am größten?
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Die Auslenkung einer überlagerten Schwingung ist $s(t) = 8\sin t + 15\cos t$ mit $t$ in Sekunden und $s$ in mm.

  a) Wie groß ist die größte Auslenkung?

  b) Zu welcher Zeit $t > 0$ wird sie zum ersten Mal erreicht? Runde auf vier Nachkommastellen.
teile:
  - typ: zahl
    label: 'a) größte Auslenkung'
    einheit: mm
    loesung: "sqrt(64 + 225)"
    fehler:
      - wert: "23"
        meldung: 'Sinus und Kosinus erreichen ihr Maximum nicht gleichzeitig. $R = \sqrt{a^2 + b^2}$.'
  - typ: zahl
    label: 'b) Zeit'
    einheit: s
    loesung: "pi/2 - atan(15/8)"
    anzeige: '0{,}4900'
    fehler:
      - wert: "atan(15/8)"
        meldung: 'Das ist die Phase $\varphi$. Das Maximum liegt dort, wo das ganze Argument $t + \varphi$ den Wert $\frac{\pi}{2}$ hat.'
hinweise:
  - 'Schreibe $s(t) = R\sin(t + \varphi)$ mit $R = 17$ und $\tan\varphi = \frac{15}{8}$.'
  - 'Der Sinus ist maximal, wenn $t + \varphi = \frac{\pi}{2}$ ist. Rechne im Bogenmaß.'
loesung: |
  **Ansatz:** Die Summe zu einer einzigen Sinusschwingung zusammenfassen. Dann lassen sich Maximum und Zeitpunkt direkt ablesen.
  ---
  a) $R = \sqrt{64 + 225} = \sqrt{289} = 17$ mm.
  ---
  $\tan\varphi = \frac{15}{8}$, I. Quadrant, also $\varphi \approx 1{,}0808$ (Bogenmaß). Damit $s(t) = 17\sin(t + 1{,}0808)$.
  ---
  b) Maximum bei $t + 1{,}0808 = \frac{\pi}{2}$, also $t \approx 1{,}5708 - 1{,}0808 = 0{,}4900$ s. **Probe:** $8\sin 0{,}49 + 15\cos 0{,}49 \approx 3{,}76 + 13{,}24 = 17$.
```

```aufgabe
id: tr-ueb-begruenden
titel: Warum wieder eine Sinusschwingung?
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  Welche Begründung zeigt am besten, warum $a\sin x + b\cos x$ wieder eine Sinusschwingung mit derselben Periode ist?
teile:
  - typ: auswahl
    optionen:
      - 'Nach dem Additionstheorem ist $R\sin(x + \varphi) = R\cos\varphi\sin x + R\sin\varphi\cos x$. Mit $a = R\cos\varphi$ und $b = R\sin\varphi$ passen beide Seiten genau zusammen.'
      - 'Man darf die Amplituden addieren, weil beide Funktionen die Periode $2\pi$ haben.'
      - 'Weil $\sin x$ und $\cos x$ beide zwischen $-1$ und $1$ liegen.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Die Amplitude der Summe ist im Allgemeinen nicht $a + b$. Die gleiche Periode allein erklärt noch nicht die Form der Summe.'
      - wert: 2
        meldung: 'Das sagt nur etwas über die Werte, nicht über die Form der Summe. Es begründet nicht, dass wieder eine Sinuskurve entsteht.'
hinweise:
  - 'Schreibe $R\sin(x + \varphi)$ mit dem Additionstheorem aus und vergleiche mit $a\sin x + b\cos x$.'
  - 'Wann stimmen die Faktoren vor $\sin x$ und vor $\cos x$ überein?'
loesung: |
  **Ansatz:** Wir zeigen, dass man $R$ und $\varphi$ so wählen kann, dass $R\sin(x + \varphi)$ genau gleich $a\sin x + b\cos x$ ist.
  ---
  Additionstheorem: $R\sin(x + \varphi) = R\cos\varphi\cdot\sin x + R\sin\varphi\cdot\cos x$.
  ---
  Die Faktoren stimmen überein, wenn $R\cos\varphi = a$ und $R\sin\varphi = b$ ist. Das sind die Polarkoordinaten von $(a \mid b)$, und die gibt es immer. Also ist die Summe wieder eine Sinusschwingung mit derselben Periode.
```

```aufgabe
id: tr-ueb-gitarre
titel: Eine Gitarre nach Gehör stimmen
niveau: 3
lernziel: 5
kompetenz: modellieren
angabe: |
  Eine Gitarrensaite ist auf $110$ Hz gestimmt. Eine zweite Saite soll denselben Ton haben. Spielt man beide zusammen,
  hört man $3$ Schwebungen pro Sekunde.

  a) Welche Frequenzen kann die zweite Saite haben?

  b) Wie lange dauert eine Schwebung, also die Zeit von einem lauten Moment zum nächsten?

  c) Man spannt die zweite Saite etwas stärker. Dadurch wird ihr Ton höher. Die Schwebungen werden langsamer. Welche
  Frequenz hatte die zweite Saite vorher?
teile:
  - typ: menge
    label: 'a) mögliche Frequenzen in Hz'
    loesung: ["107", "113"]
    fehler:
      - wert: ["113"]
        meldung: 'Die Schwebung zeigt nur den **Betrag** der Differenz. Die zweite Saite kann auch tiefer klingen.'
      - wert: ["108.5", "111.5"]
        meldung: 'Die Schwebungsfrequenz ist die volle Differenz $|f_1 - f_2|$, nicht die halbe.'
  - typ: zahl
    label: 'b) Dauer einer Schwebung'
    einheit: s
    loesung: "1/3"
  - typ: auswahl
    label: 'c) Frequenz vorher'
    optionen: ['$107$ Hz', '$113$ Hz']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Wäre sie bei $113$ Hz, würde ein höherer Ton den Abstand zu $110$ Hz vergrößern. Die Schwebungen würden schneller, nicht langsamer.'
hinweise:
  - 'Die Zahl der Schwebungen pro Sekunde ist $|f_1 - f_2|$. Es gibt zwei Möglichkeiten für das Vorzeichen.'
  - 'Langsamere Schwebungen heißen: Die Frequenzen rücken näher zusammen. In welche Richtung muss die zweite Frequenz dafür wandern?'
loesung: |
  **Ansatz:** Die Schwebungsfrequenz ist $|f_1 - f_2| = 3$ Hz mit $f_1 = 110$ Hz.
  ---
  a) $f_2 - 110 = 3$ oder $f_2 - 110 = -3$, also $f_2 = 113$ Hz oder $f_2 = 107$ Hz.
  ---
  b) $3$ Schwebungen pro Sekunde heißt: Eine Schwebung dauert $\frac13$ s, etwa $0{,}33$ s.
  ---
  c) Höherer Ton und langsamere Schwebung heißt: Die Frequenz rückt näher an $110$ Hz. Das passt nur, wenn sie vorher darunter lag. Also waren es $107$ Hz. **Probe:** Von $113$ Hz aus würde ein höherer Ton den Abstand vergrößern.
```

## Gemischte Wiederholung

In der Prüfung steht nicht dabei, aus welcher Lektion eine Aufgabe stammt. Du musst selbst erkennen, welches Werkzeug
passt. Deshalb mischt diese Lektion Aufgaben aus diesem Kapitel mit Aufgaben aus früheren Kapiteln. Dieses gemischte
Üben fühlt sich schwerer an als das Üben in Blöcken. Es verankert den Stoff aber nachweislich besser. Löse jede
Aufgabe zuerst ohne Hinweise.

```aufgabe
id: tr-wh-quadratisch
titel: "Wiederholung Kapitel 2: eine quadratische Gleichung"
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Löse $3x^2 - 5x - 2 = 0$. Gib beide Lösungen getrennt durch einen Strichpunkt an. Solche Gleichungen entstehen nach
  einer Substitution bei trigonometrischen Gleichungen. Zum Nachlesen:
  [Kapitel 2, Quadratische Gleichungen](/lernen/mathe3/gleichungen/quadratische-gleichungen).
teile:
  - typ: menge
    label: 'Lösungen'
    loesung: ["2", "-1/3"]
    fehler:
      - wert: ["-2", "1/3"]
        meldung: 'Die Vorzeichen sind vertauscht. Probe mit $x = 2$: $12 - 10 - 2 = 0$.'
hinweise:
  - 'Große Lösungsformel mit $a = 3$, $b = -5$, $c = -2$.'
loesung: |
  **Ansatz:** Große Lösungsformel $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$.
  ---
  $x = \frac{5 \pm \sqrt{25 + 24}}{6} = \frac{5 \pm 7}{6}$, also $x_1 = 2$ und $x_2 = -\frac13$. **Probe:** $3\cdot\frac19 + \frac53 - 2 = \frac13 + \frac53 - 2 = 0$.
```

```aufgabe
id: tr-wh-doppelbruch
titel: "Wiederholung Kapitel 1: ein Bruch aus Wurzeln"
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Vereinfache $\dfrac{\sqrt3/2}{1/2}$. Welcher exakte Wert der Winkelfunktionen ist das? Zum Nachlesen:
  [Kapitel 1, Bruchrechnen](/lernen/mathe3/zahlen/bruchrechnen).
teile:
  - typ: zahl
    label: 'Wert'
    loesung: "sqrt(3)"
    anzeige: '\sqrt3'
    fehler:
      - wert: "sqrt(3)/4"
        meldung: 'Du hast die beiden Brüche multipliziert. Durch einen Bruch teilt man, indem man mit seinem Kehrwert multipliziert.'
  - typ: auswahl
    label: 'Welcher Wert ist das?'
    optionen: ['$\tan 60°$', '$\tan 30°$', '$\sin 60°$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$\tan 30° = \frac{\sin 30°}{\cos 30°} = \frac{1/2}{\sqrt3/2}$, also der Kehrwert.'
hinweise:
  - 'Mit dem Kehrwert des Nenners multiplizieren: $\frac{\sqrt3}{2}\cdot\frac21$.'
loesung: |
  **Ansatz:** Durch $\frac12$ teilen heißt mit $2$ multiplizieren.
  ---
  $\frac{\sqrt3}{2}\cdot 2 = \sqrt3$. Das ist $\frac{\sin 60°}{\cos 60°} = \tan 60°$.
```

```aufgabe
id: tr-wh-prozent
titel: "Wiederholung Kapitel 1: Prozent und Steigung"
niveau: 1
lernziel: 1
kompetenz: anwenden
angabe: |
  Eine Straße steigt auf $2{,}5$ km waagrechter Strecke um $150$ m an. Wie viel Prozent Steigung hat sie, und unter welchem
  Winkel steigt sie an (zwei Nachkommastellen)? Zum Nachlesen:
  [Kapitel 1, Prozentrechnung](/lernen/mathe3/zahlen/prozentrechnung).
teile:
  - typ: zahl
    label: 'Steigung'
    einheit: '%'
    loesung: "150/2500*100"
    fehler:
      - wert: "150/2.5"
        meldung: 'Die Einheiten passen nicht. Rechne $2{,}5$ km in $2500$ m um, bevor du teilst.'
  - typ: zahl
    label: 'Winkel'
    einheit: °
    loesung: "inGrad(atan(0.06))"
    anzeige: '3{,}43'
    fehler:
      - wert: "0.06*90"
        meldung: 'Prozent und Winkel sind nicht proportional. Der Winkel ist $\tan^{-1}$ der Steigung.'
hinweise:
  - 'Prozentsatz $= \frac{\text{Anteil}}{\text{Grundwert}}\cdot 100$. Beide Längen in Metern.'
  - 'Der Steigungswinkel folgt aus $\tan\alpha = 0{,}06$.'
loesung: |
  **Ansatz:** Die Steigung in Prozent ist Höhenunterschied durch waagrechte Strecke, mal $100$.
  ---
  $\frac{150}{2500} = 0{,}06$, also $6\,\%$.
  ---
  $\alpha = \tan^{-1}(0{,}06) \approx 3{,}43°$.
```

```aufgabe
id: tr-wh-umkehrbar
titel: "Wiederholung Kapitel 4: Wann ist eine Funktion umkehrbar?"
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  Ist der Sinus auf dem Intervall $[0, \pi]$ umkehrbar? Zum Nachlesen: [Kapitel 4, Verkettung und Umkehrfunktion](/lernen/mathe3/funktionen/verkettung-und-umkehrfunktion).
teile:
  - typ: auswahl
    optionen:
      - 'Nein, denn zum Beispiel $\sin\frac{\pi}{6} = \sin\frac{5\pi}{6}$. Zwei Stellen haben denselben Wert.'
      - 'Ja, denn auf $[0, \pi]$ ist der Sinus nie negativ.'
      - 'Ja, denn jede stetige Funktion ist umkehrbar.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Das Vorzeichen spielt keine Rolle. Umkehrbar heißt: Jeder Funktionswert kommt nur einmal vor.'
      - wert: 2
        meldung: '$x^2$ ist stetig, aber auf $\R$ nicht umkehrbar, weil $(-2)^2 = 2^2$. Stetigkeit reicht nicht.'
hinweise:
  - 'Eine Funktion ist umkehrbar, wenn verschiedene Stellen immer verschiedene Werte haben.'
  - 'Steigt der Sinus auf $[0, \pi]$ durchgehend, oder steigt und fällt er?'
loesung: |
  **Ansatz:** Umkehrbar ist eine Funktion genau dann, wenn kein Wert zweimal vorkommt.
  ---
  Auf $[0, \pi]$ steigt der Sinus bis $\frac{\pi}{2}$ und fällt dann. Deshalb kommen Werte doppelt vor, etwa $\sin\frac{\pi}{6} = \sin\frac{5\pi}{6} = \frac12$.
  ---
  Er ist dort also nicht umkehrbar. Deshalb schränkt man für $\arcsin$ auf $\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$ ein, wo der Sinus durchgehend steigt.
```

```aufgabe
id: tr-wh-formel-umstellen
titel: "Wiederholung Kapitel 2: eine Formel umstellen"
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Die Sektorfläche ist $A = \frac12\, r^2\, x$. Stelle nach $r$ um und berechne den Radius für $A = 50\text{ cm}^2$ und
  $x = 1$ (Bogenmaß). Zum Nachlesen: [Kapitel 2, Formeln umstellen](/lernen/mathe3/gleichungen/formeln-umstellen).
teile:
  - typ: term
    label: '$r$ in Abhängigkeit von $A$ (mit $x = 1$)'
    variable: A
    loesung: "sqrt(2*A)"
    bereich: [1, 100]
    fehler:
      - wert: "sqrt(A/2)"
        meldung: 'Durch $\frac12$ teilen heißt mit $2$ multiplizieren. Aus $A = \frac12 r^2$ wird $r^2 = 2A$.'
  - typ: zahl
    label: '$r$ für $A = 50$'
    einheit: cm
    loesung: "sqrt(2*50/1)"
    fehler:
      - wert: "2*50"
        meldung: 'Das ist $r^2$. Zieh noch die Wurzel.'
hinweise:
  - 'Zuerst mit $2$ multiplizieren und durch $x$ teilen. Dann die Wurzel ziehen.'
  - 'Allgemein gilt $r = \sqrt{\frac{2A}{x}}$.'
loesung: |
  **Ansatz:** Die Formel schrittweise umkehren: Faktoren auf die andere Seite, dann Wurzel.
  ---
  $A = \frac12 r^2 x$ mal $2$ und durch $x$: $r^2 = \frac{2A}{x}$. Wurzel: $r = \sqrt{\frac{2A}{x}}$. Mit $x = 1$ ist $r = \sqrt{2A}$.
  ---
  $r = \sqrt{\frac{2\cdot 50}{1}} = \sqrt{100} = 10$ cm. **Probe:** $\frac12\cdot 100\cdot 1 = 50$.
```

```aufgabe
id: tr-wh-welcher-satz
titel: Welches Verfahren passt beim Dreieck?
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Entscheide für jede Angabe, womit du beginnst. Rechne nichts aus.
teile:
  - typ: auswahl
    label: 'Rechtwinkliges Dreieck, Hypotenuse und ein spitzer Winkel gegeben'
    optionen: ['Sinus, Kosinus oder Tangens direkt', 'Kosinussatz', 'Sinussatz mit Mehrdeutigkeit']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Im rechtwinkligen Dreieck reichen die Definitionen. Der Kosinussatz würde funktionieren, ist aber ein Umweg.'
  - typ: auswahl
    label: 'Zwei Seiten und der Winkel gegenüber der kürzeren Seite'
    optionen: ['Sinus, Kosinus oder Tangens direkt', 'Kosinussatz', 'Sinussatz mit Mehrdeutigkeit']
    richtig: [2]
    fehler:
      - wert: 1
        meldung: 'Der Winkel liegt nicht zwischen den beiden Seiten. Das ist der Fall SSW, nicht SWS.'
  - typ: auswahl
    label: 'Drei Seiten gegeben'
    optionen: ['Sinus, Kosinus oder Tangens direkt', 'Kosinussatz', 'Sinussatz mit Mehrdeutigkeit']
    richtig: [1]
    fehler:
      - wert: 2
        meldung: 'Ohne einen Winkel gibt es kein Paar für den Sinussatz.'
hinweise:
  - 'Ist das Dreieck rechtwinklig? Gibt es ein Paar aus Seite und Gegenwinkel? Liegt der Winkel zwischen den Seiten?'
loesung: |
  **Ansatz:** Zuerst prüfen, ob ein rechter Winkel vorliegt. Sonst nach dem Muster der gegebenen Stücke entscheiden.
  ---
  Rechtwinklig: Definitionen direkt. Zwei Seiten und ein Winkel gegenüber einer davon: Fall SSW, Sinussatz, Mehrdeutigkeit prüfen. Gegenüber der kürzeren Seite kann es zwei Dreiecke geben.
  ---
  Drei Seiten: Kosinussatz.
```

```aufgabe
id: tr-wh-welche-methode
titel: Welches Verfahren passt bei der Gleichung?
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  Entscheide für jede Gleichung, mit welchem ersten Schritt du sie löst. Rechne nichts aus.
teile:
  - typ: auswahl
    label: '$\cos^2 x - 3\cos x + 2 = 0$'
    optionen: ['Substitution $u = \cos x$', 'Herausheben', 'durch $\cos x$ teilen, dann Tangens', 'direkt $\arccos$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Der Summand $+2$ enthält kein $\cos x$. Herausheben geht nur, wenn jeder Summand den Faktor enthält.'
  - typ: auswahl
    label: '$\tan x\cdot\sin x = \sin x$'
    optionen: ['Substitution $u = \cos x$', 'Herausheben', 'durch $\cos x$ teilen, dann Tangens', 'direkt $\arccos$']
    richtig: [1]
    fehler:
      - wert: 2
        meldung: 'Jeder Summand enthält $\sin x$. Wer teilt, verliert die Lösungen mit $\sin x = 0$. Hebe heraus.'
  - typ: auswahl
    label: '$3\sin x = 4\cos x$'
    optionen: ['Substitution $u = \cos x$', 'Herausheben', 'durch $\cos x$ teilen, dann Tangens', 'direkt $\arccos$']
    richtig: [2]
    fehler:
      - wert: 1
        meldung: 'Die beiden Seiten haben keinen gemeinsamen Faktor. Teile durch $\cos x$, das ist hier erlaubt.'
  - typ: auswahl
    label: '$2\cos x = -1$'
    optionen: ['Substitution $u = \cos x$', 'Herausheben', 'durch $\cos x$ teilen, dann Tangens', 'direkt $\arccos$']
    richtig: [3]
hinweise:
  - 'Kommt dieselbe Funktion quadriert vor? Haben alle Summanden einen gemeinsamen Faktor? Stehen Sinus und Kosinus einfach gegenüber?'
loesung: |
  **Ansatz:** Die Form der Gleichung entscheidet über den ersten Schritt.
  ---
  Quadrat und einfache Potenz derselben Funktion: Substitution. Gemeinsamer Faktor $\sin x$ in jedem Summanden: herausheben.
  ---
  $3\sin x = 4\cos x$: durch $\cos x$ teilen ergibt $\tan x = \frac43$. Das ist erlaubt, weil bei $\cos x = 0$ die linke Seite $\pm 3$ wäre. $2\cos x = -1$ ist schon fast eine Grundgleichung: $\cos x = -\frac12$, dann $\arccos$.
```

```aufgabe
id: tr-wh-dreieck-stumpf
titel: Ein Dreieck mit stumpfem Winkel
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Zwei Seiten eines Dreiecks sind $a = 7$ m und $b = 9$ m. Sie schließen den Winkel $\gamma = 110°$ ein. Berechne die dritte
  Seite $c$ und den Flächeninhalt (zwei Nachkommastellen).
teile:
  - typ: zahl
    label: '$c$'
    einheit: m
    loesung: "sqrt(49 + 81 - 2*63*cos(inRad(110)))"
    anzeige: '13{,}16'
    fehler:
      - wert: "sqrt(49 + 81 + 2*63*cos(inRad(110)))"
        meldung: 'Das Vorzeichen im Kosinussatz ist immer Minus. Der Kosinus von $110°$ ist negativ, dadurch wird der Term insgesamt positiv.'
  - typ: zahl
    label: 'Fläche'
    einheit: 'm²'
    loesung: "0.5*63*sin(inRad(110))"
    anzeige: '29{,}60'
hinweise:
  - 'SWS: Kosinussatz für $c$, Flächenformel mit dem eingeschlossenen Winkel.'
  - '$\cos 110°$ ist negativ. Achte darauf, wie sich das Minus im Kosinussatz auswirkt.'
loesung: |
  **Ansatz:** Zwei Seiten mit eingeschlossenem Winkel, also Kosinussatz und Flächenformel.
  ---
  $c^2 = 49 + 81 - 2\cdot 7\cdot 9\cdot\cos 110° \approx 130 + 43{,}09 = 173{,}09$, also $c \approx 13{,}16$ m.
  ---
  $A = \frac12\cdot 7\cdot 9\cdot\sin 110° \approx 29{,}60\text{ m}^2$. **Plausibilität:** Bei einem stumpfen Winkel ist $c$ länger als $\sqrt{7^2 + 9^2} \approx 11{,}40$ m.
```

```aufgabe
id: tr-wh-sinusgleichung
titel: Eine Gleichung mit einer Sinusfunktion
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Löse $4\sin x - 1 = 1{,}6$ im Intervall $[0, 2\pi)$. Runde auf vier Nachkommastellen.
teile:
  - typ: menge
    label: 'Lösungen'
    loesung: ["asin(0.65)", "pi - asin(0.65)"]
    fehler:
      - wert: ["asin(0.65)"]
        meldung: 'Der Sinus ist im I. **und** im II. Quadranten positiv. Es gibt eine zweite Lösung $\pi - x_1$.'
      - wert: ["inGrad(asin(0.65))", "180 - inGrad(asin(0.65))"]
        meldung: 'Das sind die Lösungen in Grad. Das Intervall $[0, 2\pi)$ verlangt das Bogenmaß.'
hinweise:
  - 'Bringe die Gleichung auf die Form $\sin x = s$.'
  - '$\sin x = 0{,}65$. Grundwert mit $\arcsin$ im Modus RAD, zweiter Wert $\pi - x_1$.'
loesung: |
  **Ansatz:** Erst umformen, dann die Grundgleichung vollständig lösen.
  ---
  $4\sin x = 2{,}6$, also $\sin x = 0{,}65$.
  ---
  $x_1 = \arcsin 0{,}65 \approx 0{,}7076$ und $x_2 = \pi - 0{,}7076 \approx 2{,}4340$. **Probe:** $4\cdot\sin 2{,}4340 - 1 \approx 4\cdot 0{,}65 - 1 = 1{,}6$.
```

## Prüfungsaufgaben

Diese Aufgaben haben das Format der schriftlichen Prüfung: mehrere Teilaufgaben, ein Sachkontext, Skizzen und
Begründungen. Bei jeder Aufgabe steht ein Zeitrichtwert. In der Prüfung hast du $120$ Minuten für etwa sechs solche
Aufgaben. Erlaubt sind ein Taschenrechner ohne Grafik und die Formelsammlung. Schreib bei jeder Teilaufgabe zuerst
den Ansatz hin, dann die Rechnung, dann einen Antwortsatz mit Einheit.

Trigonometrie ist in den Musterprüfungen meist eine Teilaufgabe mit rund fünf Punkten. Punkte gehen selten durch
schwere Rechnungen verloren, sondern durch Kleinigkeiten:

- **Falscher Taschenrechnermodus.** Ein Ergebnis wie $\sin 30 = -0{,}988$ muss dir sofort auffallen.
- **Nur eine Lösung angegeben,** obwohl „alle“ verlangt sind. Bei Sinus und Kosinus gibt es pro Periode meist zwei.
- **Hypotenuse und Kathete verwechselt,** besonders bei Straßen, Rampen und Leitern. Eine Skizze mit markiertem
  rechtem Winkel verhindert das.
- **Zu früh gerundet.** Behalte Zwischenergebnisse im Speicher und runde erst am Ende.
- **„Warum“-Fragen ohne Begründung.** Eine Antwort wie „geht nicht“ bringt keine Punkte. Eine Begründung über die
  Definition schon.

```aufgabe
id: tr-pruefung-winkler
titel: Ein rechtwinkliges Dreieck mit ganzzahligen Seiten
niveau: 3
punkte: 10
lernziel: 0
kompetenz: begruenden
quelle: nach Musterprüfung Winkler, Aufgabe 2 (abgewandelt)
angabe: |
  Zeitrichtwert: $15$ Minuten.

  Gegeben ist ein Dreieck mit den Eckpunkten $A$, $B$ und $C$. Wie üblich liegen die Seiten $a$, $b$, $c$ den Ecken
  gegenüber, die Winkel heißen $\alpha$, $\beta$, $\gamma$. Es ist $a = 12$, $b = 35$ und $c = 37$.

  a) Skizziere das Dreieck und beschrifte es.

  b) Zeige rein rechnerisch, dass das Dreieck bei $C$ einen rechten Winkel hat.

  c) Stelle $\sin\alpha$, $\cos\alpha$ und $\tan\alpha$ jeweils als Bruch zweier Seitenlängen dar.

  d) Gib $\sin\gamma$ und $\cos\gamma$ an.

  e) Welches Problem tritt bei $\tan\gamma$ auf? Argumentiere mit einer geometrischen oder algebraischen Definition des Tangens.
teile:
  - typ: text
    label: 'b)'
    muster: |
      Umkehrung des Pythagoras: $a^2 + b^2 = 144 + 1225 = 1369 = 37^2 = c^2$. Gilt in einem Dreieck $a^2 + b^2 = c^2$, so ist
      der Winkel gegenüber von $c$, also $\gamma$ bei $C$, ein rechter. Alternativ mit dem Kosinussatz:
      $\cos\gamma = \frac{a^2 + b^2 - c^2}{2ab} = 0$, also $\gamma = 90°$.
  - typ: zahl
    label: 'c) $\sin\alpha$'
    loesung: "12/37"
    anzeige: '\tfrac{12}{37}'
    fehler:
      - wert: "35/37"
        meldung: 'Das ist $\cos\alpha$. Für $\alpha$ ist $a = 12$ die Gegenkathete.'
  - typ: zahl
    label: 'c) $\cos\alpha$'
    loesung: "35/37"
    anzeige: '\tfrac{35}{37}'
  - typ: zahl
    label: 'c) $\tan\alpha$'
    loesung: "12/35"
    anzeige: '\tfrac{12}{35}'
    fehler:
      - wert: "35/12"
        meldung: 'Der Tangens ist Gegenkathete durch Ankathete, also $\frac{a}{b}$.'
  - typ: zahl
    label: 'd) $\sin\gamma$'
    loesung: "1"
  - typ: zahl
    label: 'd) $\cos\gamma$'
    loesung: "0"
  - typ: text
    label: 'e)'
    muster: |
      Algebraisch: $\tan\gamma = \frac{\sin\gamma}{\cos\gamma} = \frac10$. Durch $0$ darf man nicht teilen, also ist
      $\tan 90°$ nicht definiert. Geometrisch: Am Einheitskreis ist $\tan\gamma$ die Höhe, in der der gedrehte Schenkel die
      senkrechte Gerade $x = 1$ schneidet. Bei $90°$ ist der Schenkel senkrecht und parallel zu ihr, es gibt keinen
      Schnittpunkt. Im Dreieck: Beide Schenkel von $\gamma$ sind Katheten, eine Ankathete im Sinn der Definition gibt es
      nicht.
hinweise:
  - 'Die längste Seite $c = 37$ ist die Kandidatin für die Hypotenuse.'
  - 'Für $\alpha$ ist $a$ die Gegenkathete und $b$ die Ankathete.'
  - 'Bei $\gamma = 90°$ liegt der Punkt am Einheitskreis bei $(0 \mid 1)$.'
plot:
  x: [-2, 40]
  y: [-2, 15]
  gleich: true
  strecken:
    - { von: [0, 0], nach: [35, 0] }
    - { von: [35, 0], nach: [35, 12] }
    - { von: [0, 0], nach: [35, 12] }
  punkte:
    - { x: 0, y: 0, label: "A" }
    - { x: 35, y: 0, label: "C" }
    - { x: 35, y: 12, label: "B" }
loesung: |
  **a)** Skizze: $C$ rechts unten mit rechtem Winkel, $b = \overline{AC} = 35$ waagrecht, $a = \overline{BC} = 12$ senkrecht, $c = \overline{AB} = 37$ schräg.
  ---
  **b)** $a^2 + b^2 = 144 + 1225 = 1369 = 37^2 = c^2$. Nach der Umkehrung des Pythagoras liegt der rechte Winkel der längsten Seite $c$ gegenüber, also bei $C$.
  ---
  **c)** $\sin\alpha = \frac{a}{c} = \frac{12}{37}$, $\cos\alpha = \frac{b}{c} = \frac{35}{37}$ und $\tan\alpha = \frac{a}{b} = \frac{12}{35}$.
  ---
  **d)** $\gamma = 90°$, der Punkt am Einheitskreis ist $(0 \mid 1)$. Also $\sin\gamma = 1$ und $\cos\gamma = 0$.
  ---
  **e)** $\tan\gamma = \frac{\sin\gamma}{\cos\gamma} = \frac10$ ist nicht definiert. Geometrisch ist der Schenkel bei $90°$ parallel zur Geraden $x = 1$ und schneidet sie nicht. Nähert sich der Winkel $90°$, wächst der Tangens über alle Grenzen.
```

```aufgabe
id: tr-pruefung-strasse
titel: Ein Sinuswert und eine Passstraße
niveau: 3
punkte: 8
lernziel: 1
kompetenz: modellieren
quelle: nach Musterprüfung Schranz-Kirlinger, Aufgabe 4.1 (abgewandelt)
angabe: |
  Zeitrichtwert: $12$ Minuten.

  a) Gib alle Winkel $\alpha$ an, für die $\sin\alpha = -\frac{\sqrt2}{2}$ gilt.

  b) Eine Passstraße hat $6\,\%$ Steigung. Ermittle den Steigungswinkel auf zwei Nachkommastellen. Berechne den
  Höhenunterschied zweier Kehren, die an der geradlinig verlaufenden Straße liegen und entlang der Straße $3200$ m
  voneinander entfernt sind. Runde auf zwei Nachkommastellen.
teile:
  - typ: menge
    label: 'a) Lösungen in $[0°, 360°)$ (in Grad)'
    loesung: ["225", "315"]
    fehler:
      - wert: ["-45"]
        meldung: 'Das ist der Wert des Rechners. Er liegt nicht in $[0°, 360°)$, und es fehlt die zweite Lösung.'
      - wert: ["135", "225"]
        meldung: '$135°$ und $225°$ haben denselben **Kosinus**. Gesucht ist ein negativer Sinus, also Punkte unterhalb der $x$-Achse.'
  - typ: text
    label: 'a) alle Lösungen'
    muster: |
      $\alpha = 225° + k\cdot 360°$ oder $\alpha = 315° + k\cdot 360°$ mit $k \in \Z$. Im Bogenmaß
      $\frac{5\pi}{4} + 2k\pi$ oder $\frac{7\pi}{4} + 2k\pi$.
  - typ: zahl
    label: 'b) Steigungswinkel'
    einheit: °
    loesung: "inGrad(atan(0.06))"
    anzeige: '3{,}43'
    fehler:
      - wert: "0.06*90"
        meldung: 'Prozent und Winkel sind nicht proportional. $6\,\%$ Steigung heißt $\tan\alpha = 0{,}06$.'
  - typ: zahl
    label: 'b) Höhenunterschied'
    einheit: m
    loesung: "3200*sin(atan(0.06))"
    anzeige: '191{,}66'
    toleranz: 0.05
    fehler:
      - wert: "3200*0.06"
        meldung: 'So rechnet man, wenn die $3200$ m waagrecht gemessen wären. Sie liegen aber entlang der Straße, also auf der Hypotenuse. Verwende den Sinus.'
      - wert: "3200*cos(atan(0.06))"
        meldung: 'Das ist die waagrechte Strecke, die Ankathete. Der Höhenunterschied liegt dem Steigungswinkel gegenüber, dazu gehört der Sinus.'
hinweise:
  - 'a) Bezugswinkel $45°$. Der Sinus ist negativ im III. und IV. Quadranten. Danach die Periode $360°$ anhängen.'
  - 'b) $6\,\%$ Steigung heißt $\tan\alpha = 0{,}06$.'
  - 'Die $3200$ m entlang der Straße sind die Hypotenuse, nicht die waagrechte Strecke.'
loesung: |
  **a)** Bezugswinkel: $\sin 45° = \frac{\sqrt2}{2}$. Der Sinus ist negativ im III. und IV. Quadranten: $180° + 45° = 225°$ und $360° - 45° = 315°$.
  ---
  Alle Lösungen: $\alpha = 225° + k\cdot 360°$ oder $\alpha = 315° + k\cdot 360°$ mit $k \in \Z$.
  ---
  **b)** $\tan\alpha = 0{,}06$, also $\alpha = \tan^{-1}(0{,}06) \approx 3{,}43°$.
  ---
  Die $3200$ m sind die Hypotenuse des Steigungsdreiecks, der Höhenunterschied die Gegenkathete: $\Delta h = 3200\cdot\sin 3{,}434° \approx 191{,}66$ m.
  ---
  **Hinweis:** $3200\cdot 0{,}06 = 192$ m wäre der Höhenunterschied auf $3200$ m **waagrechter** Strecke. Der Unterschied ist klein, weil der Winkel klein ist. Bewertet wird aber der richtige Ansatz mit dem Sinus.
```

```aufgabe
id: tr-pruefung-grundstueck
titel: Ein dreieckiges Grundstück
niveau: 3
punkte: 8
lernziel: 4
kompetenz: anwenden
angabe: |
  Zeitrichtwert: $12$ Minuten.

  Ein dreieckiges Grundstück $ABC$ grenzt mit der Seite $\overline{AB} = 120$ m an eine Straße. Bei $A$ misst man den
  Winkel $\alpha = 62°$, bei $B$ den Winkel $\beta = 48°$.

  a) Fertige eine beschriftete Skizze an und berechne den Winkel $\gamma$.

  b) Berechne die Längen der beiden anderen Grundstücksgrenzen $a = \overline{BC}$ und $b = \overline{AC}$ (zwei
  Nachkommastellen).

  c) Berechne die Grundstücksfläche auf ganze Quadratmeter.
teile:
  - typ: zahl
    label: 'a) $\gamma$'
    einheit: °
    loesung: "180 - 62 - 48"
  - typ: zahl
    label: 'b) $a$'
    einheit: m
    loesung: "120*sin(inRad(62))/sin(inRad(70))"
    anzeige: '112{,}75'
    fehler:
      - wert: "120*sin(inRad(48))/sin(inRad(70))"
        meldung: 'Das ist $b$. Die Seite $a$ liegt dem Winkel $\alpha = 62°$ gegenüber.'
  - typ: zahl
    label: 'b) $b$'
    einheit: m
    loesung: "120*sin(inRad(48))/sin(inRad(70))"
    anzeige: '94{,}90'
  - typ: zahl
    label: 'c) Fläche'
    einheit: 'm²'
    loesung: "0.5*120*(120*sin(inRad(48))/sin(inRad(70)))*sin(inRad(62))"
    toleranz: 1
    anzeige: '5028'
    fehler:
      - wert: "120*(120*sin(inRad(48))/sin(inRad(70)))*sin(inRad(62))"
        meldung: 'Der Faktor $\frac12$ fehlt in der Flächenformel.'
hinweise:
  - 'Zwei Winkel und eine Seite (WSW): Winkelsumme, dann Sinussatz.'
  - 'Fläche: $A = \frac12\, b\, c\,\sin\alpha$ mit den beiden Seiten am Winkel $\alpha$.'
loesung: |
  **a)** $\gamma = 180° - 62° - 48° = 70°$. Skizze: Seite $c = 120$ m unten an der Straße, $62°$ links bei $A$, $48°$ rechts bei $B$, $C$ oben.
  ---
  **b)** Sinussatz mit dem Paar $c = 120$ m und $\gamma = 70°$: $a = \frac{120\cdot\sin 62°}{\sin 70°} \approx \frac{105{,}95}{0{,}9397} \approx 112{,}75$ m.
  ---
  $b = \frac{120\cdot\sin 48°}{\sin 70°} \approx \frac{89{,}18}{0{,}9397} \approx 94{,}90$ m.
  ---
  **c)** $A = \frac12\cdot b\cdot c\cdot\sin\alpha = \frac12\cdot 94{,}90\cdot 120\cdot\sin 62° \approx 5028\text{ m}^2$.
  ---
  **Kontrolle** mit einer anderen Seitenwahl: $\frac12\cdot a\cdot c\cdot\sin\beta = \frac12\cdot 112{,}75\cdot 120\cdot\sin 48° \approx 5028\text{ m}^2$. **Antwort:** Das Grundstück ist etwa $5028\text{ m}^2$ groß.
```

```aufgabe
id: tr-pruefung-riesenrad
titel: Die Gondel eines Riesenrads
niveau: 3
punkte: 10
lernziel: 5
kompetenz: modellieren
angabe: |
  Zeitrichtwert: $20$ Minuten.

  Ein Riesenrad hat $50$ m Durchmesser. Eine Gondel ist zur Zeit $t = 0$ am tiefsten Punkt, $2$ m über dem Boden. Eine
  Umdrehung dauert $16$ Minuten. Die Höhe der Gondel ist
  $$h(t) = 27 - 25\cos\!\left(\frac{\pi}{8}\,t\right) \qquad (t \text{ in min},\ h \text{ in m}).$$

  a) Begründe die Zahlen $27$, $25$ und $\frac{\pi}{8}$ im Funktionsterm.

  b) In welcher Höhe ist die Gondel nach $3$ Minuten? Runde auf zwei Nachkommastellen.

  c) Wie lange ist die Gondel während einer Umdrehung höher als $39{,}5$ m? Runde auf zwei Nachkommastellen.

  d) Schreibe $h$ in der Form $h(t) = a\sin\big(b(t - c)\big) + d$ mit $a > 0$ und $0 \le c < 16$. Gib $c$ an.
teile:
  - typ: text
    label: 'a)'
    muster: |
      $27$ ist die Mittellage, also die Höhe der Achse: $2$ m plus Radius $25$ m. $25$ ist die Amplitude, also der Radius
      $\frac{50}{2}$. $\frac{\pi}{8} = \frac{2\pi}{16}$ ergibt die Periode $16$ min. Das Minus vor dem Kosinus sorgt dafür,
      dass $h(0) = 27 - 25 = 2$ der tiefste Punkt ist.
  - typ: zahl
    label: 'b) $h(3)$'
    einheit: m
    loesung: "27 - 25*cos(pi*3/8)"
    anzeige: '17{,}43'
    fehler:
      - wert: "27 - 25*cos(inRad(pi*3/8))"
        meldung: 'Der Rechner stand auf DEG. Das Argument $\frac{3\pi}{8}$ ist im Bogenmaß.'
  - typ: zahl
    label: 'c) Dauer über $39{,}5$ m'
    einheit: min
    loesung: "32/3 - 16/3"
    anzeige: '5{,}33'
    fehler:
      - wert: "32/3"
        meldung: 'Das ist der Zeitpunkt, an dem die Gondel wieder unter $39{,}5$ m sinkt. Gefragt ist die Dauer, also die Differenz zum Zeitpunkt, an dem sie $39{,}5$ m erreicht.'
  - typ: zahl
    label: 'd) $c$'
    loesung: "4"
    fehler:
      - wert: "8"
        meldung: 'Nach $8$ Minuten ist die Gondel oben. Die Sinuswelle startet aber in der Mittellage, aufsteigend, also nach einer Viertelumdrehung.'
hinweise:
  - 'Für b) den Taschenrechner auf RAD stellen.'
  - 'c) $27 - 25\cos\left(\frac{\pi}{8}t\right) > 39{,}5$ heißt $\cos\left(\frac{\pi}{8}t\right) < -\frac12$.'
  - 'd) Die Sinuswelle startet in der Mittellage aufsteigend. Wann ist die Gondel zum ersten Mal auf Achshöhe und steigt?'
loesung: |
  **a)** Mittellage $27$ m ist die Achshöhe, $2$ m plus Radius $25$ m. Amplitude $25$ m ist der Radius. Periode $\frac{2\pi}{\pi/8} = 16$ min. Wegen des Minus vor dem Kosinus startet die Gondel unten: $h(0) = 2$.
  ---
  **b)** $h(3) = 27 - 25\cos\left(\frac{3\pi}{8}\right) \approx 27 - 25\cdot 0{,}3827 \approx 17{,}43$ m.
  ---
  **c)** $h(t) > 39{,}5$ heißt $-25\cos\left(\frac{\pi}{8}t\right) > 12{,}5$, also $\cos\left(\frac{\pi}{8}t\right) < -\frac12$. Für $u = \frac{\pi}{8}t$ zwischen $0$ und $2\pi$ gilt das für $\frac{2\pi}{3} < u < \frac{4\pi}{3}$.
  ---
  Zurückrechnen mit $t = \frac{8}{\pi}u$: $\frac{16}{3} < t < \frac{32}{3}$, also etwa von $5{,}33$ bis $10{,}67$ min. Dauer: $\frac{16}{3} \approx 5{,}33$ min, ein Drittel der Umdrehung.
  ---
  **d)** Die Gondel ist nach einer Viertelumdrehung, also nach $4$ min, auf Achshöhe und steigt. Dort beginnt die Sinuswelle: $h(t) = 25\sin\left(\frac{\pi}{8}(t - 4)\right) + 27$, also $c = 4$. **Probe:** $h(0) = 25\sin\left(-\frac{\pi}{2}\right) + 27 = 2$.
```

```aufgabe
id: tr-pruefung-feld
titel: Ein dreieckiges Feld mit zwei Möglichkeiten
niveau: 3
punkte: 10
lernziel: 4
kompetenz: begruenden
angabe: |
  Zeitrichtwert: $20$ Minuten.

  Ein Landwirt möchte ein dreieckiges Feld $ABC$ einzäunen. Er weiß nur noch: Die Seite $\overline{BC} = a = 140$ m,
  die Seite $\overline{AC} = b = 180$ m, und der Winkel bei $A$ beträgt $\alpha = 42°$.

  a) Zeige, dass zu diesen Angaben zwei verschiedene Dreiecke passen. Gib für beide den Winkel $\beta$ an
  (zwei Nachkommastellen), zuerst den spitzen.

  b) Berechne für beide Dreiecke die dritte Seite $c$ (zwei Nachkommastellen).

  c) Berechne für beide Dreiecke die Fläche auf ganze Quadratmeter.

  d) Der Landwirt erinnert sich, dass das Feld größer als $1$ Hektar ($10\,000\text{ m}^2$) war. Welches Dreieck ist es?
teile:
  - typ: zahl
    label: 'a) $\beta_1$ (spitz)'
    einheit: °
    loesung: "inGrad(asin(180*sin(inRad(42))/140))"
    anzeige: '59{,}35'
  - typ: zahl
    label: 'a) $\beta_2$ (stumpf)'
    einheit: °
    loesung: "180 - inGrad(asin(180*sin(inRad(42))/140))"
    anzeige: '120{,}65'
    fehler:
      - wert: "inGrad(asin(180*sin(inRad(42))/140))"
        meldung: 'Der zweite Winkel mit demselben Sinus ist $180° - \beta_1$.'
  - typ: zahl
    label: 'b) $c_1$'
    einheit: m
    loesung: "140*sin(pi - inRad(42) - asin(180*sin(inRad(42))/140))/sin(inRad(42))"
    anzeige: '205{,}13'
  - typ: zahl
    label: 'b) $c_2$'
    einheit: m
    loesung: "140*sin(asin(180*sin(inRad(42))/140) - inRad(42))/sin(inRad(42))"
    anzeige: '62{,}40'
  - typ: zahl
    label: 'c) Fläche 1'
    einheit: 'm²'
    loesung: "0.5*140*180*sin(pi - inRad(42) - asin(180*sin(inRad(42))/140))"
    toleranz: 1
    anzeige: '12354'
  - typ: zahl
    label: 'c) Fläche 2'
    einheit: 'm²'
    loesung: "0.5*140*180*sin(asin(180*sin(inRad(42))/140) - inRad(42))"
    toleranz: 1
    anzeige: '3758'
    fehler:
      - wert: "0.5*140*180*sin(inRad(42))"
        meldung: 'Der Winkel $42°$ liegt bei $A$, also nicht zwischen $a$ und $b$. Die beiden Seiten schließen den Winkel $\gamma$ ein.'
  - typ: auswahl
    label: 'd) Das Feld ist'
    optionen: ['Dreieck 1 mit spitzem $\beta$', 'Dreieck 2 mit stumpfem $\beta$']
    richtig: [0]
hinweise:
  - 'Sinussatz: $\sin\beta = \frac{b\sin\alpha}{a}$. Prüfe beide Kandidaten mit $\alpha + \beta < 180°$.'
  - 'Für jedes Dreieck $\gamma = 180° - \alpha - \beta$, dann $c = \frac{a\sin\gamma}{\sin\alpha}$.'
  - 'Fläche mit den beiden bekannten Seiten $a$ und $b$ und ihrem eingeschlossenen Winkel $\gamma$.'
loesung: |
  **Ansatz:** Fall SSW mit $a < b$. Der Sinussatz liefert zwei Kandidaten für $\beta$, die wir beide prüfen.
  ---
  **a)** $\sin\beta = \frac{180\cdot\sin 42°}{140} \approx 0{,}8603 < 1$. Also $\beta_1 \approx 59{,}35°$ und $\beta_2 = 180° - 59{,}35° = 120{,}65°$. Beide erfüllen $42° + \beta < 180°$, also gibt es zwei Dreiecke.
  ---
  **b)** Dreieck 1: $\gamma_1 = 180° - 42° - 59{,}35° = 78{,}65°$, also $c_1 = \frac{140\cdot\sin 78{,}65°}{\sin 42°} \approx 205{,}13$ m. Dreieck 2: $\gamma_2 = 180° - 42° - 120{,}65° = 17{,}35°$, also $c_2 \approx 62{,}40$ m.
  ---
  **c)** $a$ und $b$ schließen $\gamma$ ein: $A_1 = \frac12\cdot 140\cdot 180\cdot\sin 78{,}65° \approx 12\,354\text{ m}^2$ und $A_2 = \frac12\cdot 140\cdot 180\cdot\sin 17{,}35° \approx 3758\text{ m}^2$.
  ---
  **d)** Nur Dreieck 1 ist größer als $10\,000\text{ m}^2$. Das Feld hat also den spitzen Winkel $\beta \approx 59{,}35°$ und die dritte Seite $c \approx 205{,}13$ m.
```

```aufgabe
id: tr-pruefung-glaspyramide
titel: Eine gläserne Pyramide
niveau: 3
punkte: 8
lernziel: 0
kompetenz: modellieren
angabe: |
  Zeitrichtwert: $15$ Minuten.

  Ein Museum plant einen Eingang in Form einer quadratischen Glaspyramide. Die Grundkante ist $35$ m lang, die Spitze
  liegt $21{,}6$ m über der Mitte der Grundfläche. Nur die vier dreieckigen Seitenflächen sind aus Glas.

  a) Berechne die Höhe einer Seitenfläche, also die Seitenhöhe $h_s$ (zwei Nachkommastellen).

  b) Berechne den Neigungswinkel der Seitenflächen gegen den Boden (zwei Nachkommastellen).

  c) Wie viel Quadratmeter Glas werden benötigt? Runde auf ganze Quadratmeter.

  d) Ist eine Seitenkante steiler oder flacher als eine Seitenfläche? Begründe ohne Rechnung.
teile:
  - typ: zahl
    label: 'a) $h_s$'
    einheit: m
    loesung: "sqrt(21.6^2 + 17.5^2)"
    anzeige: '27{,}80'
    fehler:
      - wert: "sqrt(21.6^2 + 35^2)"
        meldung: 'Vom Mittelpunkt bis zur Kantenmitte ist es nur die halbe Grundkante, also $17{,}5$ m.'
  - typ: zahl
    label: 'b) Neigungswinkel'
    einheit: °
    loesung: "inGrad(atan(21.6/17.5))"
    anzeige: '50{,}99'
  - typ: zahl
    label: 'c) Glasfläche'
    einheit: 'm²'
    loesung: "4*0.5*35*sqrt(21.6^2 + 17.5^2)"
    toleranz: 1
    anzeige: '1946'
    fehler:
      - wert: "4*0.5*35*21.6"
        meldung: 'Die Höhe einer Seitenfläche ist die schräge Seitenhöhe $h_s$, nicht die senkrechte Pyramidenhöhe.'
  - typ: text
    label: 'd) Begründung'
    muster: |
      Flacher. Beide Dreiecke haben dieselbe senkrechte Kathete, die Höhe $21{,}6$ m. Bei der Seitenkante reicht die
      waagrechte Kathete aber vom Mittelpunkt bis zur Ecke, also die halbe Diagonale. Bei der Seitenfläche reicht sie nur bis
      zur Kantenmitte. Bei gleicher Höhe und längerer waagrechter Strecke ist der Tangens kleiner, der Winkel also flacher.
hinweise:
  - 'Zeichne das Dreieck aus Spitze, Mittelpunkt der Grundfläche und Mitte einer Grundkante.'
  - 'Jede Seitenfläche ist ein Dreieck mit Grundlinie $35$ m und Höhe $h_s$.'
loesung: |
  **Ansatz:** Das Dreieck aus Spitze, Mittelpunkt und Kantenmitte ist rechtwinklig. Seine Katheten sind die Pyramidenhöhe $21{,}6$ m und die halbe Grundkante $17{,}5$ m. Die Hypotenuse ist die Seitenhöhe.
  ---
  **a)** $h_s = \sqrt{21{,}6^2 + 17{,}5^2} = \sqrt{466{,}56 + 306{,}25} = \sqrt{772{,}81} \approx 27{,}80$ m.
  ---
  **b)** $\tan\alpha = \frac{21{,}6}{17{,}5} \approx 1{,}234$, also $\alpha \approx 50{,}99°$.
  ---
  **c)** Eine Seitenfläche: $\frac12\cdot 35\cdot 27{,}80 \approx 486{,}5\text{ m}^2$. Vier Flächen: etwa $1946\text{ m}^2$ Glas.
  ---
  **d)** Die Seitenkanten sind flacher. Unter einer Ecke liegt die halbe Diagonale, $17{,}5\cdot\sqrt2 \approx 24{,}75$ m, unter einer Kantenmitte nur $17{,}5$ m. Bei gleicher Höhe heißt längere waagrechte Strecke flacherer Winkel: etwa $41{,}11°$ gegen $50{,}99°$.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, bevor du weiterliest. Was würdest du jemandem sagen, der wissen will, worum es in der Trigonometrie geht?
antwort: |
  Eine mögliche Antwort mit drei Aussagen:
  1. Im rechtwinkligen Dreieck hängen die Seitenverhältnisse nur vom Winkel ab. Sie heißen Sinus, Kosinus und Tangens.
     Mit ihnen und mit Sinus- und Kosinussatz berechnet man jedes Dreieck.
  2. Am Einheitskreis sind $\cos\alpha$ und $\sin\alpha$ die Koordinaten des Punktes zum Winkel $\alpha$. So sind sie für
     jeden Winkel definiert, periodisch und beschreiben Schwingungen.
  3. Eine Gleichung wie $\sin x = s$ hat unendlich viele Lösungen. Der Rechner liefert nur eine. Die zweite kommt aus
     der Symmetrie, die übrigen aus der Periode.

  Vergleiche mit dem Kasten „Zusammenfassung“ direkt nach dieser Frage. Fehlt dir eine Aussage, lies die zugehörige
  Lektion noch einmal.
```

:::zusammenfassung
1. **Rechtwinkliges Dreieck:** $\sin\alpha = \frac{\text{Gegenkathete}}{\text{Hypotenuse}}$, $\cos\alpha = \frac{\text{Ankathete}}{\text{Hypotenuse}}$, $\tan\alpha = \frac{\text{Gegenkathete}}{\text{Ankathete}}$. Die Werte hängen nur vom Winkel ab, weil Dreiecke mit gleichen Winkeln ähnlich sind. In Körpern sucht man ein rechtwinkliges Dreieck aus Höhe, Projektion und schräger Strecke.
2. **Steigung:** $p\,\%$ Steigung heißt $\tan\alpha = \frac{p}{100}$. Eine Strecke entlang der Straße ist die Hypotenuse, der Höhenunterschied also $s\cdot\sin\alpha$.
3. **Einheitskreis:** $P_\alpha = (\cos\alpha \mid \sin\alpha)$. Daraus folgen Vorzeichen, $\sin^2\alpha + \cos^2\alpha = 1$, die Periode $2\pi$ (beim Tangens $\pi$) und die Quadrantenbeziehungen, etwa $\sin(180° - \alpha) = \sin\alpha$.
4. **Bogenmaß:** $180° \,\hat{=}\, \pi$. Bogen $b = rx$, Sektor $\frac12 r^2 x$, Sehne $2r\sin\frac x2$, Segment $\frac12 r^2(x - \sin x)$. Der Rechner muss im passenden Modus stehen: DEG für Grad, RAD für Bogenmaß.
5. **Allgemeine Dreiecke:** Fläche $\frac12 ab\sin\gamma$. Sinussatz $\frac{a}{\sin\alpha} = \frac{b}{\sin\beta}$, Kosinussatz $c^2 = a^2 + b^2 - 2ab\cos\gamma$. Im Fall SSW kann es zwei Dreiecke geben.
6. **Graphen:** $a\sin\big(b(x - c)\big) + d$ hat die Amplitude $|a|$, die Periode $\frac{2\pi}{b}$, die Verschiebung $c$ und die Mittellage $d$.
7. **Gleichungen:** $\sin x = s$ hat die Lösungen $\arcsin s + 2k\pi$ und $\pi - \arcsin s + 2k\pi$. Bei innerem Argument die Periode mit umrechnen. Substitution und Herausheben führen auf diese Grundgleichungen. Nie durch einen Term teilen, der null sein kann.
8. **Identitäten und Polarkoordinaten:** Additionstheoreme und Doppelwinkelformeln liefern exakte Werte und vereinfachen Terme. Ein Punkt $(x \mid y)$ hat die Polarkoordinaten $r = \sqrt{x^2 + y^2}$ und einen Winkel $\varphi$, der mit dem Quadranten korrigiert wird.
:::

### Die häufigsten Fehler

Jeder Fehler wird von mindestens einer Aufgabe im Kapitel trainiert. Wenn dir ein Fehler bekannt vorkommt, löse die
genannte Aufgabe noch einmal.

1. **Falscher Modus am Taschenrechner.** $\sin 30$ im Modus RAD ergibt $-0{,}988$ statt $0{,}5$. Training: „Den Modus
   erkennen und korrigieren“ in [5.5 Winkel in Grad und im Bogenmaß](/lernen/mathe3/trigonometrie/winkel-in-grad-und-im-bogenmass)
   und „Ein Federpendel beschreiben“ in [5.10 Die allgemeine Sinusfunktion](/lernen/mathe3/trigonometrie/die-allgemeine-sinusfunktion).
2. **Gegenkathete und Ankathete verwechselt.** Die Seite, die den Winkel berührt, ist die Ankathete. Training: „Wo
   steckt der Fehler?“ und „Katheten aus Hypotenuse und Winkel“ in
   [5.1 Das rechtwinklige Dreieck](/lernen/mathe3/trigonometrie/das-rechtwinklige-dreieck).
3. **Straßenlänge als waagrechte Strecke behandelt.** Die Strecke entlang der Straße ist die Hypotenuse. Training:
   „Höhenunterschied auf einer steilen Straße“ in
   [5.2 Steigung, Höhenwinkel und Vermessung](/lernen/mathe3/trigonometrie/steigung-hoehenwinkel-und-vermessung) und
   die Prüfungsaufgabe „Ein Sinuswert und eine Passstraße“.
4. **Prozent proportional zum Winkel.** $100\,\%$ sind $45°$, nicht $90°$. Training: „Steigung und Steigungswinkel“ und
   „Aussagen über Steigungen beurteilen“ in
   [5.2 Steigung, Höhenwinkel und Vermessung](/lernen/mathe3/trigonometrie/steigung-hoehenwinkel-und-vermessung).
5. **Im Raum die falsche Kathete am Boden.** Unter einer Raumdiagonale liegt die Flächendiagonale, unter einer
   Pyramidenkante die halbe Diagonale. Training: „Raumdiagonale eines Quaders“ und „Neigungswinkel einer Pyramide“ in
   [5.3 Trigonometrie im Raum](/lernen/mathe3/trigonometrie/trigonometrie-im-raum).
6. **Vorzeichen im Quadranten vergessen.** $\cos 120° = -\frac12$, nicht $+\frac12$. Training: „Werte in anderen
   Quadranten“ und „Wo steckt der Fehler beim Tangens?“ in
   [5.6 Besondere Werte und Quadrantenbeziehungen](/lernen/mathe3/trigonometrie/besondere-werte-und-quadrantenbeziehungen).
7. **Grad in eine Bogenmaß-Formel eingesetzt.** In $b = rx$ und $\frac12 r^2 x$ steht $x$ im Bogenmaß. Training:
   „Bogenlänge und Sektorfläche“ und „Entfernung auf der Erdkugel“ in
   [5.5 Winkel in Grad und im Bogenmaß](/lernen/mathe3/trigonometrie/winkel-in-grad-und-im-bogenmass).
8. **Im Fall SSW nur ein Dreieck angegeben.** Der Rechner liefert nur den spitzen Winkel. Training: „Wie viele
   Dreiecke gibt es?“ und „Der mehrdeutige Fall vollständig“ in
   [5.8 Der mehrdeutige Fall und Vermessungsaufgaben](/lernen/mathe3/trigonometrie/der-mehrdeutige-fall-und-vermessungsaufgaben).
9. **Kosinussatz falsch geklammert.** $\cos\gamma$ gehört nur zum Term $2ab\cos\gamma$. Training: „Entfernung über
   einen See“ in [5.7 Allgemeine Dreiecke](/lernen/mathe3/trigonometrie/allgemeine-dreiecke-sinussatz-kosinussatz-flaeche).
10. **Verschiebung ohne Ausklammern abgelesen.** Bei $\sin(2x - \pi)$ ist die Verschiebung $\frac{\pi}{2}$. Training:
    „Wo steckt der Fehler bei der Verschiebung?“ und „Parameter einer Sinusfunktion“ in
    [5.10 Die allgemeine Sinusfunktion](/lernen/mathe3/trigonometrie/die-allgemeine-sinusfunktion).
11. **Nur die Lösung des Rechners angegeben.** Bei $\sin x = s$ fehlt dann $\pi - \arcsin s$. Training: „Alle Lösungen
    angeben“ und „Eine Sinusgleichung“ in
    [5.11 Trigonometrische Gleichungen](/lernen/mathe3/trigonometrie/trigonometrische-gleichungen).
12. **Periode beim inneren Argument nicht umgerechnet.** Aus $2x = \ldots + 2k\pi$ wird $x = \ldots + k\pi$. Training:
    „Eine Gleichung mit sin(2x)“ und „Wann ist das Gewicht 4,5 cm hoch?“ in
    [5.11 Trigonometrische Gleichungen](/lernen/mathe3/trigonometrie/trigonometrische-gleichungen).
13. **Durch einen Term mit x geteilt.** Dabei gehen Lösungen verloren. Training: „Herausheben statt Kürzen“ und „Wo ist
    die verlorene Lösung?“ in
    [5.13 Gleichungen mit Substitution und Herausheben](/lernen/mathe3/trigonometrie/gleichungen-mit-substitution-und-herausheben).
14. **Winkelfunktionen linear behandelt.** $\sin(\alpha + \beta) \ne \sin\alpha + \sin\beta$ und $\cos(2\alpha) \ne 2\cos\alpha$.
    Training: „Wo steckt der Fehler beim Doppelwinkel?“ in
    [5.12 Trigonometrische Identitäten](/lernen/mathe3/trigonometrie/trigonometrische-identitaeten).
15. **Polarwinkel ohne Quadrantenkorrektur.** $\tan^{-1}\frac{y}{x}$ zeigt bei $x < 0$ in die Gegenrichtung. Training:
    „Ein Punkt im dritten Quadranten“ in [5.14 Polarkoordinaten](/lernen/mathe3/trigonometrie/polarkoordinaten).

### Selbstcheck zu den Lernzielen

Schätze für jedes Lernziel ein, wie sicher du bist: **sicher**, **unsicher** oder **noch nicht**. Vergleiche dann mit
deinen Ergebnissen in den Aufgaben. Wo du dich überschätzt hast, lohnt sich eine Wiederholung am meisten.

1. Rechtwinklige Dreiecke berechnen, auch in Quader und Pyramide.
2. Steigungen, Höhenwinkel und Tiefenwinkel in Sachaufgaben verwenden.
3. Sinus und Kosinus am Einheitskreis erklären, Vorzeichen und exakte Werte angeben.
4. Grad und Bogenmaß umrechnen, den Rechnermodus wählen, Kreisteile berechnen.
5. Allgemeine Dreiecke mit Sinus- und Kosinussatz lösen, den Fall SSW erkennen.
6. Graphen und allgemeine Sinusfunktionen deuten und aufstellen.
7. Trigonometrische Gleichungen mit allen Lösungen lösen.
8. Identitäten herleiten und anwenden.
9. Zwischen kartesischen und Polarkoordinaten umrechnen.

## Mündliche Prüfung

```karten
- id: tr-k-dreieck
  frage: Wie sind Sinus, Kosinus und Tangens im rechtwinkligen Dreieck definiert, und warum hängen sie nur vom Winkel ab?
  antwort: |
    Für einen spitzen Winkel $\alpha$ ist $\sin\alpha$ Gegenkathete durch Hypotenuse, $\cos\alpha$ Ankathete durch
    Hypotenuse und $\tan\alpha$ Gegenkathete durch Ankathete. Zwei rechtwinklige Dreiecke mit demselben Winkel $\alpha$
    stimmen in allen Winkeln überein, sie sind ähnlich. Beim Vergrößern werden alle Seiten mit demselben Faktor
    multipliziert, und der Faktor kürzt sich in den Verhältnissen weg. Deshalb hängen die Werte nur von $\alpha$ ab.
  kernpunkte:
    - Drei Verhältnisse mit Gegenkathete, Ankathete, Hypotenuse
    - Gleiche Winkel heißt ähnliche Dreiecke
    - Der Vergrößerungsfaktor kürzt sich weg
- id: tr-k-einheitskreis
  frage: Wie sind Sinus und Kosinus am Einheitskreis definiert, und warum braucht man diese zweite Definition?
  antwort: |
    Man trägt den Winkel $\alpha$ an der positiven $x$-Achse gegen den Uhrzeigersinn ab. Der Schenkel schneidet den Kreis
    mit Radius $1$ im Punkt $P_\alpha$. Dann ist $\cos\alpha$ seine $x$-Koordinate und $\sin\alpha$ seine $y$-Koordinate.
    Im Dreieck gibt es nur Winkel bis $90°$. Für stumpfe Dreiecke, Drehungen und Schwingungen braucht man aber jeden
    Winkel. Für spitze Winkel stimmen beide Definitionen überein, weil die Hypotenuse $1$ ist.
  kernpunkte:
    - Punkt auf dem Kreis mit Radius 1, Winkel ab der x-Achse
    - cos ist x-Koordinate, sin ist y-Koordinate
    - Gilt für alle Winkel und stimmt für spitze mit dem Dreieck überein
- id: tr-k-pythagoras
  frage: Warum gilt sin²α + cos²α = 1 für jeden Winkel?
  antwort: |
    Der Punkt $(\cos\alpha \mid \sin\alpha)$ liegt auf dem Einheitskreis, sein Abstand vom Ursprung ist also $1$. Nach
    dem Satz des Pythagoras ist das Quadrat dieses Abstands $\cos^2\alpha + \sin^2\alpha$. Also ist die Summe $1$. Im
    rechtwinkligen Dreieck sieht man es direkt: $\frac{a^2}{c^2} + \frac{b^2}{c^2} = \frac{a^2 + b^2}{c^2} = 1$.
  kernpunkte:
    - Punkt auf dem Einheitskreis hat Abstand 1
    - Pythagoras mit den Koordinaten als Katheten
    - Gilt für alle Winkel, nicht nur spitze
- id: tr-k-tan90
  frage: Warum ist tan 90° nicht definiert, obwohl sin 90° und cos 90° existieren?
  antwort: |
    Algebraisch: $\tan 90° = \frac{\sin 90°}{\cos 90°} = \frac10$, und durch null darf man nicht teilen. Geometrisch: Der
    Tangens ist die Höhe, in der der Schenkel die senkrechte Gerade $x = 1$ schneidet. Bei $90°$ ist der Schenkel parallel
    zu dieser Geraden, es gibt keinen Schnittpunkt. Nähert man sich $90°$, wächst der Tangens über alle Grenzen. Sinus
    und Kosinus sind dagegen die Koordinaten des Punktes $(0 \mid 1)$.
  kernpunkte:
    - Division durch cos 90° = 0
    - Schenkel parallel zur Tangente x = 1, kein Schnittpunkt
    - Polstelle des Tangensgraphen
- id: tr-k-bogenmass
  frage: Was ist das Bogenmaß, und warum rechnet man in der Analysis damit?
  antwort: |
    Das Bogenmaß eines Winkels ist die Länge des Bogens, den er aus dem Einheitskreis ausschneidet. $360°$ entsprechen
    $2\pi$, $180°$ entsprechen $\pi$. Im Bogenmaß kommen die Formeln ohne Umrechnungsfaktor aus: Bogenlänge $b = rx$,
    $\sin x \approx x$ für kleine $x$, und die Ableitung von $\sin x$ ist genau $\cos x$, wie in Kapitel 9 gezeigt. In Grad
    stünde überall der Faktor $\frac{\pi}{180}$.
  kernpunkte:
    - Bogenlänge am Einheitskreis, 180° entspricht π
    - Formeln ohne Faktor, etwa b = r·x
    - Ableitung von sin ist cos nur im Bogenmaß (Kapitel 9)
- id: tr-k-alle-loesungen
  frage: Wie viele Lösungen hat sin x = 0,3, und wie findet man alle?
  antwort: |
    Unendlich viele. Der Rechner liefert nur $\arcsin 0{,}3 \approx 17{,}46°$, weil $\arcsin$ nur Werte zwischen $-90°$ und
    $90°$ hat. Die zweite Lösung kommt aus der Symmetrie $\sin(180° - x) = \sin x$, also $162{,}54°$. Alle weiteren
    entstehen durch ganze Umdrehungen: $x = 17{,}46° + k\cdot 360°$ oder $x = 162{,}54° + k\cdot 360°$. Am Einheitskreis
    schneidet die Gerade $y = 0{,}3$ den Kreis in genau zwei Punkten.
  kernpunkte:
    - Rechner liefert nur einen Wert aus [−90°, 90°]
    - Zweite Lösung 180° minus erste
    - Periode 360° anhängen
- id: tr-k-umkehrfunktion
  frage: Warum ist der Sinus auf ganz ℝ nicht umkehrbar, und wie entsteht trotzdem arcsin?
  antwort: |
    Eine Funktion ist nur umkehrbar, wenn jeder Wert genau einmal vorkommt, wie in Kapitel 4 besprochen. Der Sinus nimmt
    jeden Wert zwischen $-1$ und $1$ unendlich oft an. Man schränkt ihn deshalb auf $\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$
    ein. Dort steigt er durchgehend und nimmt jeden Wert genau einmal an. Die Umkehrfunktion dieses Stücks ist $\arcsin$.
    Deshalb liefert $\arcsin(\sin 150°)$ nicht $150°$, sondern $30°$.
  kernpunkte:
    - Umkehrbar nur bei eindeutigen Werten (Kapitel 4)
    - Einschränkung auf das Intervall von −π/2 bis π/2
    - Folge, arcsin liefert nur einen Winkel
- id: tr-k-steigung
  frage: Wie hängen die Steigung in Prozent und der Steigungswinkel zusammen? Nenne ein Gegenbeispiel zur Proportionalität.
  antwort: |
    $p\,\%$ Steigung heißt $\tan\alpha = \frac{p}{100}$, denn die Steigung ist Höhenunterschied durch waagrechte Strecke,
    also Gegenkathete durch Ankathete. Prozent und Winkel sind nicht proportional. Gegenbeispiel: $100\,\%$ sind $45°$, nicht
    $90°$, und $50\,\%$ sind etwa $26{,}57°$, nicht $22{,}5°$. Ist eine Strecke entlang der Straße gegeben, ist sie die
    Hypotenuse, und der Höhenunterschied ist $s\cdot\sin\alpha$.
  kernpunkte:
    - Steigung ist tan α
    - Gegenbeispiel 100 % sind 45°
    - Strecke entlang der Straße ist die Hypotenuse
- id: tr-k-neigungswinkel
  frage: Wie bestimmt man den Neigungswinkel einer Raumdiagonale gegen die Grundfläche eines Quaders?
  antwort: |
    Der Neigungswinkel liegt zwischen der Strecke und ihrer Projektion auf die Ebene. Die Projektion der Raumdiagonale
    ist die Flächendiagonale der Grundfläche, $d_G = \sqrt{a^2 + b^2}$. Raumdiagonale, Flächendiagonale und die
    senkrechte Kante $c$ bilden ein rechtwinkliges Dreieck. Also ist $\tan\varphi = \frac{c}{d_G}$. Ein typischer Fehler
    ist, die Kante $a$ statt der Flächendiagonale als Ankathete zu nehmen.
  kernpunkte:
    - Winkel zwischen Strecke und Projektion
    - Projektion ist die Flächendiagonale
    - tan φ = Höhe durch Flächendiagonale
- id: tr-k-sinussatz
  frage: Was sagt der Sinussatz, und wie beweist man ihn?
  antwort: |
    In jedem Dreieck gilt $\frac{a}{\sin\alpha} = \frac{b}{\sin\beta} = \frac{c}{\sin\gamma}$. Beweis über die
    Flächenformel: Die Fläche ist $\frac12 bc\sin\alpha = \frac12 ac\sin\beta = \frac12 ab\sin\gamma$. Teilt man alles
    durch $\frac12 abc$ und nimmt die Kehrwerte, steht der Sinussatz da. Man braucht immer ein Paar aus einer Seite und dem
    gegenüberliegenden Winkel.
  kernpunkte:
    - Seite durch Sinus des Gegenwinkels ist konstant
    - Beweis mit dreimal derselben Fläche
    - Braucht ein Paar Seite und Gegenwinkel
- id: tr-k-kosinussatz
  frage: Was sagt der Kosinussatz, und wie hängt er mit dem Satz des Pythagoras zusammen?
  antwort: |
    $c^2 = a^2 + b^2 - 2ab\cos\gamma$. Für $\gamma = 90°$ ist $\cos\gamma = 0$, und es bleibt der Pythagoras. Er ist also
    dessen Verallgemeinerung: Bei spitzem $\gamma$ ist $c$ kürzer, bei stumpfem länger als beim rechten Winkel. Man
    verwendet ihn bei SWS und SSS. Aus ihm folgt die Umkehrung des Pythagoras: Aus $a^2 + b^2 = c^2$ folgt $\cos\gamma = 0$,
    also $\gamma = 90°$.
  kernpunkte:
    - Formel mit Korrekturterm −2ab cos γ
    - Für 90° wird es der Pythagoras
    - Anwendung SWS und SSS, Umkehrung des Pythagoras
- id: tr-k-ssw
  frage: Warum kann der Sinussatz im Fall SSW zwei Dreiecke liefern, der Kosinussatz aber nie?
  antwort: |
    Zu einem Sinuswert zwischen $0$ und $1$ gibt es zwischen $0°$ und $180°$ zwei Winkel, $\beta$ und $180° - \beta$. Im Fall
    SSW können beide zu einem Dreieck passen, wenn $\alpha + \beta < 180°$ bleibt. Anschaulich kann die Seite gegenüber dem
    bekannten Winkel auf zwei Arten aufsetzen. Der Kosinus ist zwischen $0°$ und $180°$ streng fallend, jeder Wert gehört dort
    zu genau einem Winkel. Ein Beispiel für zwei Lösungen ist $a = 6$, $b = 8$, $\alpha = 40°$.
  kernpunkte:
    - Zwei Winkel mit gleichem Sinus
    - Prüfen mit α + β < 180°
    - Kosinus ist auf 0° bis 180° eindeutig
- id: tr-k-parameter
  frage: Was bedeuten a, b, c und d in f(x) = a·sin(b(x − c)) + d?
  antwort: |
    $|a|$ ist die Amplitude, der größte Ausschlag von der Mittellage. $\frac{2\pi}{b}$ ist die Periode. $c$ ist die
    Verschiebung in $x$-Richtung, nach rechts für $c > 0$. $d$ ist die Mittellage. Die Wertemenge ist $[d - |a|, d + |a|]$.
    Steht $\sin(bx - e)$ da, muss man $b$ ausklammern: Die Verschiebung ist $\frac{e}{b}$, nicht $e$. Es sind dieselben
    Transformationen wie bei jeder Funktion in Kapitel 4.
  kernpunkte:
    - Amplitude |a| und Mittellage d
    - Periode 2π/b
    - Verschiebung c erst nach Ausklammern von b
- id: tr-k-perioden
  frage: Welche Periode haben sin, cos und tan, und warum ist die des Tangens kürzer?
  antwort: |
    Sinus und Kosinus haben die Periode $2\pi$, eine volle Umdrehung. Beim Tangens genügt $\pi$. Nach einer halben
    Umdrehung liegt der Punkt am Einheitskreis genau gegenüber. Beide Koordinaten wechseln das Vorzeichen, und im
    Quotienten $\frac{\sin}{\cos}$ heben sich die beiden Minus auf.
  kernpunkte:
    - sin und cos 2π
    - tan π
    - Gegenüberliegender Punkt, beide Vorzeichen kippen
- id: tr-k-additionstheorem
  frage: Wie lautet das Additionstheorem für sin(α + β), und warum ist sin(2α) nicht 2·sin α?
  antwort: |
    $\sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta$. Mit $\beta = \alpha$ folgt
    $\sin(2\alpha) = 2\sin\alpha\cos\alpha$. Die Winkelfunktionen sind nicht linear. Gegenbeispiel:
    $\sin(2\cdot 90°) = \sin 180° = 0$, aber $2\sin 90° = 2$. Der Beweis vergleicht den Abstand zweier Punkte am
    Einheitskreis einmal mit dem Kosinussatz und einmal mit Koordinaten.
  kernpunkte:
    - Formel für sin(α + β)
    - Doppelwinkel 2 sin α cos α
    - Gegenbeispiel mit 90°
- id: tr-k-polar
  frage: Was sind Polarkoordinaten, und wozu braucht man sie bei den komplexen Zahlen?
  antwort: |
    Ein Punkt wird durch seinen Abstand $r$ vom Ursprung und den Winkel $\varphi$ zur positiven $x$-Achse beschrieben. Es
    gilt $x = r\cos\varphi$ und $y = r\sin\varphi$, umgekehrt $r = \sqrt{x^2 + y^2}$. Den Winkel bestimmt man über den
    Tangens und korrigiert ihn je nach Quadrant, weil $\tan^{-1}$ nur Winkel zwischen $-90°$ und $90°$ liefert. In
    Kapitel 15 ist das die Polarform $z = r(\cos\varphi + i\sin\varphi)$. Dort werden beim Multiplizieren die Winkel
    addiert, und das folgt aus den Additionstheoremen.
  kernpunkte:
    - Abstand r und Winkel φ
    - Umrechnung in beide Richtungen mit Quadrantenkorrektur
    - Polarform komplexer Zahlen (Kapitel 15)
```
