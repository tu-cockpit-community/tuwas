---
nummer: 6
titel: Vektoren
kurz: Pfeile und Koordinaten in der Ebene und im Raum, Rechenregeln, Betrag, besondere Punkte, Parallelogramme, Skalarprodukt, Kreuzprodukt, lineare Abhängigkeit und Kräfte als Vektoren.
teil: A
stunden: 14
pruefungsgewicht: 3
voraussetzungen: [zahlen, gleichungen, lgs-matrizen, trigonometrie]
lernziele:
  - Vektoren als Pfeile und als Koordinaten auffassen, Punkte von Vektoren unterscheiden und Verbindungsvektoren sowie Endpunkte von Verschiebungen berechnen
  - Vektoren addieren, subtrahieren und mit Zahlen vervielfachen, Vektorgleichungen umformen und Parallelität rechnerisch prüfen
  - Beträge, Abstände und Einheitsvektoren berechnen und eine Strecke vorgegebener Länge in eine vorgegebene Richtung abtragen
  - Mittelpunkte, Spiegelpunkte, Teilungspunkte und Schwerpunkte berechnen, auch rückwärts aus dem Ergebnis
  - fehlende Ecken von Parallelogrammen bestimmen, Seiten und Diagonalen berechnen und mit Vektoren entscheiden, ob ein Rechteck oder eine Raute vorliegt
  - mit dem Skalarprodukt Winkel berechnen, Orthogonalität prüfen, Normalvektoren in der Ebene angeben und Projektionen bestimmen
  - mit dem Kreuzprodukt Normalvektoren, Flächeninhalte und Spatvolumina berechnen und dabei die Reihenfolge der Faktoren beachten
  - bei einem Term aus Vektoren und Zahlen entscheiden und begründen, ob er ein Vektor, ein Skalar oder nicht definiert ist
  - lineare Abhängigkeit erkennen und nachweisen und einen Vektor als Linearkombination anderer Vektoren darstellen
  - Kräfte, Geschwindigkeiten und Arbeit mit Vektoren modellieren und die Ergebnisse mit Einheiten deuten
---

Vektoren sind das Werkzeug, mit dem man Geometrie **rechnen** kann. Statt mit Zirkel und Lineal zu
konstruieren, beschreibst du Punkte durch Koordinaten und Verschiebungen durch Vektoren. Danach wird
jede geometrische Frage zu einer kleinen Rechnung. Ist dieses Viereck ein Parallelogramm? Wie groß ist
dieser Winkel? Wie groß ist die Fläche dieses Dreiecks im Raum? Für alle drei Fragen gibt es in diesem
Kapitel ein festes Verfahren.

Vektoren begegnen dir auch außerhalb der Geometrie. Eine Kraft hat eine Stärke und eine Richtung, eine
Geschwindigkeit ebenso. In der Physik rechnet man deshalb ständig mit Vektoren. In der Informatik ist ein
Vektor in Koordinaten einfach eine Liste fester Länge, und fast alle Rechenregeln sind Schleifen über die
Einträge. Die eigentliche Kunst liegt darin, hinter den Zahlen die Geometrie zu sehen und jeden Schritt
sauber zu begründen.

### Was in der Prüfung vorkommt

Vektoren kommen in allen drei Musterprüfungen vor:

- **Musterprüfung Karigl, Aufgabe 2:** Von einem Parallelogramm kennt man drei Ecken. Gesucht sind die
  vierte Ecke, der Schnittpunkt der Diagonalen und alle Seiten- und Diagonalenlängen.
- **Musterprüfung Schranz-Kirlinger, Aufgabe 2.1:** Welche Terme aus Vektoren und Zahlen sind wieder
  Vektoren? Diese Frage löst du mit einem einzigen Gedanken, wenn du weißt, dass das Skalarprodukt eine
  Zahl liefert.
- **Musterprüfung Schranz-Kirlinger, Aufgabe 2.2,** und **Musterprüfung Winkler, Aufgabe 4:** Hier
  braucht man Richtungs- und Normalvektoren von Geraden und Ebenen. Die Geraden und Ebenen selbst kommen
  in [Kapitel 7, Geraden in der Ebene: die Parameterform](/lernen/mathe3/analytische-geometrie/geraden-in-der-ebene-die-parameterform). Die Werkzeuge dafür lernst du hier.

Alle diese Aufgabentypen übst du in diesem Kapitel an **abgewandelten** Varianten mit anderen Zahlen. Die
Originale sind für die [Prüfungssimulationen](/lernen/mathe3/pruefung) reserviert. Dort kannst du später
ehrlich testen, ob du die Aufgaben ohne Vorlage lösen kannst.

In der mündlichen Prüfung kommen gern diese Fragen: Was ist der Unterschied zwischen einem Punkt und einem
Vektor? Warum ist das Skalarprodukt null, wenn zwei Vektoren aufeinander normal stehen? Was bedeutet die
Länge des Kreuzprodukts? Zu jeder Frage findest du eine Karte in
[6.15 Mündliche Prüfung](/lernen/mathe3/vektoren/muendliche-pruefung).

:::vorwissen
Du brauchst vor allem vier Dinge aus früheren Kapiteln:

- **Rechnen mit negativen Zahlen,** besonders „minus minus ergibt plus“. Das steht in
  [Kapitel 1, Grundrechenarten](/lernen/mathe3/zahlen/grundrechenarten-vorzeichen-klammern-und-rechenreihenfolge).
  Fast jeder Rechenfehler mit Vektoren ist ein Vorzeichenfehler.
- **Wurzeln und den Satz von Pythagoras.** Wurzeln stehen in
  [Kapitel 1, Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln). Pythagoras und Kosinus stehen in
  [Kapitel 5, Das rechtwinklige Dreieck](/lernen/mathe3/trigonometrie/das-rechtwinklige-dreieck), der Kosinussatz in
  [Kapitel 5, Allgemeine Dreiecke](/lernen/mathe3/trigonometrie/allgemeine-dreiecke-sinussatz-kosinussatz-flaeche).
  Damit berechnest du Längen und Winkel.
- **Lineare Gleichungen** aus [Kapitel 2, Lineare Gleichungen](/lernen/mathe3/gleichungen/lineare-gleichungen).
  Damit bestimmst du fehlende Koordinaten.
- **Lineare Gleichungssysteme und Determinanten** aus [Kapitel 3, Das Gauß-Verfahren](/lernen/mathe3/lgs-matrizen/das-gauss-verfahren)
  und [Kapitel 3, Determinanten](/lernen/mathe3/lgs-matrizen/determinanten). Sie
  tauchen bei Linearkombinationen und beim Spatprodukt wieder auf.
:::

### Eingangsdiagnose

Teste dich mit den folgenden sieben Kurzfragen. Wenn du bei einer Frage unsicher bist, wiederhole zuerst
den verlinkten Abschnitt. Das spart dir später Zeit, denn jede Lücke von dort taucht hier wieder auf.

```aufgabe
id: ve-ein-vorzeichen
titel: Vorzeichen und Klammern
art: check
niveau: 1
angabe: |
  Berechne $4 - (-3) + 2\cdot(-5)$. Zum Nachlesen:
  [Kapitel 1, Grundrechenarten](/lernen/mathe3/zahlen/grundrechenarten-vorzeichen-klammern-und-rechenreihenfolge).
teile:
  - typ: zahl
    loesung: "4 - (-3) + 2*(-5)"
    fehler:
      - wert: "-9"
        meldung: 'Bei $4 - (-3)$ hast du $4 - 3$ gerechnet. Minus mal minus ergibt plus, also ist $4 - (-3) = 4 + 3 = 7$.'
      - wert: "17"
        meldung: 'Das Produkt $2\cdot(-5)$ ist negativ, nämlich $-10$. Es wird also abgezogen, nicht addiert.'
loesung: |
  Zuerst das Produkt (Punkt vor Strich): $2\cdot(-5) = -10$. Außerdem ist $-(-3) = +3$, weil zwei Minuszeichen zusammen ein Plus ergeben.
  ---
  Also $4 + 3 - 10 = -3$.
```

```aufgabe
id: ve-ein-pythagoras
titel: Satz von Pythagoras
art: check
niveau: 1
angabe: |
  Ein rechtwinkliges Dreieck hat die Katheten $5$ cm und $12$ cm. Wie lang ist die Hypotenuse? Zum Nachlesen:
  [Kapitel 5, Das rechtwinklige Dreieck](/lernen/mathe3/trigonometrie/das-rechtwinklige-dreieck) und [Kapitel 1, Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln).
teile:
  - typ: zahl
    einheit: cm
    loesung: "sqrt(5^2 + 12^2)"
    fehler:
      - wert: "17"
        meldung: 'Die Längen der Katheten werden nicht einfach addiert. Pythagoras addiert ihre **Quadrate**: $c^2 = a^2 + b^2$.'
      - wert: "169"
        meldung: 'Das ist $c^2$. Für die Länge $c$ musst du noch die Wurzel ziehen.'
loesung: |
  Pythagoras: Im rechtwinkligen Dreieck gilt $c^2 = a^2 + b^2$, wobei $c$ die Hypotenuse ist (die Seite gegenüber dem rechten Winkel).
  ---
  $c^2 = 25 + 144 = 169$, also $c = \sqrt{169} = 13$ cm.
```

```aufgabe
id: ve-ein-wurzel
titel: Wurzeln aus Summen
art: check
niveau: 1
angabe: |
  Welche Aussagen sind richtig? Wähle alle richtigen aus. Zum Nachlesen:
  [Kapitel 1, Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln).
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$\sqrt{9 + 16} = 5$'
      - '$\sqrt{9 + 16} = \sqrt 9 + \sqrt{16} = 7$'
      - '$\sqrt{(-3)^2} = 3$'
      - '$(-3)^2 = -9$'
    richtig: [0, 2]
    fehler:
      - wert: [0, 1, 2]
        meldung: 'Die Wurzel aus einer Summe ist **nicht** die Summe der Wurzeln. Probe: $\sqrt{25} = 5$, aber $3 + 4 = 7$.'
      - wert: [0, 2, 3]
        meldung: 'Das Quadrat einer negativen Zahl ist positiv: $(-3)^2 = (-3)\cdot(-3) = 9$.'
loesung: |
  $\sqrt{9 + 16} = \sqrt{25} = 5$. Die Wurzel darf man nicht auf die einzelnen Summanden verteilen, daher ist die zweite Aussage falsch.
  ---
  $(-3)^2 = 9$, also $\sqrt{(-3)^2} = \sqrt 9 = 3$. Beim Quadrieren verschwindet das Vorzeichen. Die vierte Aussage ist deshalb falsch.
```

```aufgabe
id: ve-ein-kosinus
titel: Ein Winkel aus dem Kosinus
art: check
niveau: 1
angabe: |
  Welcher Winkel $\varphi$ zwischen $0°$ und $180°$ hat den Kosinus $\cos\varphi = -0{,}5$? Zum Nachlesen:
  [Kapitel 5, Besondere Werte und Quadrantenbeziehungen](/lernen/mathe3/trigonometrie/besondere-werte-und-quadrantenbeziehungen).
teile:
  - typ: zahl
    einheit: "°"
    loesung: "120"
    fehler:
      - wert: "60"
        meldung: '$\cos 60° = +0{,}5$. Gesucht ist der Winkel mit **negativem** Kosinus. Zwischen $0°$ und $180°$ ist der Kosinus genau für die Winkel über $90°$ negativ.'
      - wert: "2.0944"
        meldung: 'Das ist der Winkel im Bogenmaß. Stelle den Taschenrechner auf Grad (DEG).'
loesung: |
  Der Taschenrechner liefert mit $\cos^{-1}(-0{,}5)$ (auch $\arccos$ genannt) einen Winkel zwischen $0°$ und $180°$. Im Modus DEG ergibt das $120°$.
  ---
  Kontrolle am Einheitskreis: $\cos 120° = -\cos 60° = -0{,}5$.
```

```aufgabe
id: ve-ein-lineare-gleichung
titel: Eine lineare Gleichung
art: check
niveau: 1
angabe: |
  Löse $3\cdot 2 - 5t + 4 = 0$ nach $t$. Zum Nachlesen:
  [Kapitel 2, Lineare Gleichungen](/lernen/mathe3/gleichungen/lineare-gleichungen).
teile:
  - typ: zahl
    label: '$t$'
    loesung: "10/5"
    fehler:
      - wert: "-2"
        meldung: 'Probe: $6 + 10 + 4 = 20 \neq 0$. Beim Hinüberbringen von $-5t$ ändert sich das Vorzeichen.'
      - wert: "0.5"
        meldung: 'Du hast $5 : 10$ statt $10 : 5$ gerechnet. Aus $5t = 10$ folgt $t = \frac{10}{5}$.'
loesung: |
  Zuerst zusammenfassen: $6 + 4 = 10$, also $10 - 5t = 0$.
  ---
  Wir addieren $5t$ auf beiden Seiten: $10 = 5t$. Dann teilen wir durch $5$: $t = 2$. Probe: $6 - 10 + 4 = 0$.
```

```aufgabe
id: ve-ein-lgs
titel: Ein Gleichungssystem mit zwei Unbekannten
art: check
niveau: 1
angabe: |
  Löse das System $r + 2s = 4$ und $3r - s = 5$. Zum Nachlesen:
  [Kapitel 3, Systeme mit zwei Unbekannten](/lernen/mathe3/lgs-matrizen/systeme-mit-zwei-unbekannten).
teile:
  - typ: zahl
    label: '$r$'
    loesung: "2"
    fehler:
      - wert: "4"
        meldung: 'Probe in der zweiten Gleichung: $3\cdot 4 - s = 5$ ergibt $s = 7$, aber dann stimmt die erste Gleichung nicht. Löse das System mit Einsetzen.'
  - typ: zahl
    label: '$s$'
    loesung: "1"
loesung: |
  Aus der ersten Gleichung: $r = 4 - 2s$. Wir setzen das in die zweite ein: $3(4 - 2s) - s = 5$, also $12 - 7s = 5$ und $s = 1$.
  ---
  Dann $r = 4 - 2 = 2$. Probe: $2 + 2 = 4$ und $6 - 1 = 5$.
```

```aufgabe
id: ve-ein-determinante
titel: Eine 2×2-Determinante
art: check
niveau: 1
angabe: |
  Berechne $\det\begin{pmatrix} 3 & 2 \\ 1 & 4 \end{pmatrix}$. Zum Nachlesen:
  [Kapitel 3, Determinanten](/lernen/mathe3/lgs-matrizen/determinanten).
teile:
  - typ: zahl
    loesung: "3*4 - 2*1"
    fehler:
      - wert: "14"
        meldung: 'Die beiden Diagonalprodukte werden **subtrahiert**, nicht addiert: Hauptdiagonale minus Nebendiagonale.'
      - wert: "-10"
        meldung: 'Die Reihenfolge stimmt nicht. Es heißt Hauptdiagonale ($3\cdot 4$) minus Nebendiagonale ($2\cdot 1$).'
loesung: |
  Für eine $2\times 2$-Matrix gilt $\det\begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc$, also Hauptdiagonale minus Nebendiagonale.
  ---
  $3\cdot 4 - 2\cdot 1 = 12 - 2 = 10$.
```

**So ist das Kapitel aufgebaut.** Zuerst klären wir, was ein Vektor ist und wie man mit ihm rechnet. Dann
kommen Längen, besondere Punkte und Parallelogramme. Danach folgen die beiden Produkte: das
Skalarprodukt für Winkel und rechte Winkel, das Kreuzprodukt für Flächen und Volumen. Eine eigene
Lektion übt, Vektoren und Zahlen in Termen auseinanderzuhalten. Zum Schluss stehen lineare
Abhängigkeit und Anwendungen in der Physik, dann gemischte Wiederholung, Prüfungsaufgaben, eine
Zusammenfassung und Karten für die mündliche Prüfung.

## Was ist ein Vektor? Pfeile, Punkte und Koordinaten

```aufgabe
id: ve-pfeil-vorwissen
titel: Einen Punkt verschieben
art: check
niveau: 1
angabe: |
  Der Punkt $P(2 \mid -1)$ wird um $3$ Einheiten nach rechts und um $4$ Einheiten nach oben verschoben. Wo landet er?
  Wenn du mit Koordinaten im Koordinatensystem unsicher bist, schau in [Kapitel 4, Was ist eine Funktion?](/lernen/mathe3/funktionen/was-ist-eine-funktion).
teile:
  - typ: vektor
    label: 'neuer Punkt'
    namen: ["x", "y"]
    loesung: ["2 + 3", "-1 + 4"]
    fehler:
      - wert: ["3", "4"]
        meldung: 'Das ist nur die Verschiebung selbst. Gefragt ist der Punkt, an dem $P$ ankommt. Zähle die Verschiebung zu den Koordinaten von $P$ dazu.'
      - wert: ["5", "-5"]
        meldung: '„Nach oben“ heißt: Die $y$-Koordinate wird größer. Du hast $4$ abgezogen statt dazugezählt.'
loesung: |
  Nach rechts heißt: Die $x$-Koordinate wächst um $3$, also $2 + 3 = 5$.
  ---
  Nach oben heißt: Die $y$-Koordinate wächst um $4$, also $-1 + 4 = 3$. Der neue Punkt ist $(5 \mid 3)$.
```

In dieser Lektion lernst du, was ein Vektor ist, wie man ihn mit Zahlen beschreibt und wodurch er sich
von einem Punkt unterscheidet. Der Unterschied „Punkt oder Vektor?“ ist der wichtigste Gedanke des ganzen
Kapitels. Nimm dir hier Zeit.

### Pfeile und Verschiebungen

Stell dir vor, du schiebst ein Blatt Papier über den Tisch, ohne es zu drehen. Jeder Punkt des Blattes
bewegt sich dabei um dieselbe Strecke in dieselbe Richtung. Zeichnest du für jeden Punkt einen Pfeil vom
alten zum neuen Ort, dann sind alle diese Pfeile gleich lang, parallel und zeigen in dieselbe Richtung.
Sie beschreiben ein und dieselbe Verschiebung.

Genau diese Verschiebung nennt man einen **Vektor**. In Alltagssprache: Ein Vektor ist eine Anweisung
„so weit und in diese Richtung“. Ein Beispiel ist „3 Schritte nach Osten und 4 Schritte nach Norden“.
Diese Anweisung kannst du von jedem Startpunkt aus befolgen. Sie gehört zu keinem bestimmten Ort.

:::definition[Vektor (geometrisch)]
Ein **Vektor** ist die Gesamtheit aller Pfeile, die gleich lang sind, parallel sind und in dieselbe
Richtung zeigen. Jeder einzelne dieser Pfeile heißt ein **Repräsentant** (ein Vertreter) des Vektors.

Man schreibt Vektoren mit einem kleinen Pfeil über dem Buchstaben, etwa $\vec a$ oder $\vec v$. Den
Vektor, dessen Pfeil von einem Punkt $A$ zu einem Punkt $B$ führt, schreibt man $\overrightarrow{AB}$.
:::

Ein Vektor hat also eine **Länge** und eine **Richtung**, aber **keinen festen Ort**. Zeichnest du einen
Pfeil an einer anderen Stelle noch einmal, gleich lang und gleich gerichtet, so stellt er **denselben**
Vektor dar. Das ist wie bei der Zahl $5$: Du kannst sie auf viele Zettel schreiben, es bleibt dieselbe
Zahl.

```plot
x: [-1, 9]
y: [-1, 6]
gleich: true
vektoren:
  - { von: [0, 0], nach: [3, 2], label: "v", farbe: 0 }
  - { von: [4, 1], nach: [7, 3], label: "v", farbe: 0 }
  - { von: [1, 3], nach: [4, 5], label: "v", farbe: 0 }
  - { von: [6, 4], nach: [8, 1], label: "w", farbe: 1 }
beschriftung: Die drei blauen Pfeile sind gleich lang, parallel und gleich gerichtet. Sie sind drei Repräsentanten desselben Vektors v. Der orange Pfeil w hat eine andere Richtung, er stellt einen anderen Vektor dar.
```

**Nichtbeispiel:** Zwei Pfeile, die gleich lang und parallel sind, aber in **entgegengesetzte** Richtungen
zeigen, stellen **nicht** denselben Vektor dar. Der eine bedeutet „3 Schritte nach Osten“, der andere „3
Schritte nach Westen“. Das sind verschiedene Anweisungen.

:::intuition
Ein **Vektor** ist wie eine Wegbeschreibung: „3 Schritte nach Osten, 4 Schritte nach Norden.“ Sie
funktioniert von jedem Startpunkt aus. Ein **Punkt** ist wie eine Adresse: „Karlsplatz 13“. Die Adresse
sagt, **wo** etwas ist. Die Wegbeschreibung sagt, **wie man sich bewegt**.
:::

### Koordinaten

Sobald man ein Koordinatensystem festlegt, kann man jede Verschiebung durch zwei Zahlen beschreiben: wie
weit sie in $x$-Richtung geht und wie weit in $y$-Richtung. Im Raum kommt eine dritte Zahl für die
$z$-Richtung dazu. Man schreibt die Zahlen untereinander in eine Klammer:
$$\vec a = \begin{pmatrix} 3 \\ 4 \end{pmatrix}, \qquad \vec b = \begin{pmatrix} 2 \\ -1 \\ 5 \end{pmatrix}.$$
Dabei gilt:

- Die Zahlen heißen **Komponenten** (oder Koordinaten) des Vektors.
- $\vec a$ bedeutet: $3$ Einheiten in $x$-Richtung und $4$ Einheiten in $y$-Richtung.
- $\vec b$ bedeutet: $2$ Einheiten in $x$-Richtung, $1$ Einheit **gegen** die $y$-Richtung und $5$ Einheiten in $z$-Richtung.

Die Menge aller Zahlenpaare heißt $\R^2$ (gelesen „R zwei“), die Menge aller Zahlentripel $\R^3$ („R
drei“). Man schreibt $\vec a \in \R^2$ und liest das Zeichen $\in$ als „ist Element von“, also „$\vec a$ ist
ein Vektor mit zwei Komponenten“.

**Punkte** schreibt man in Österreich mit senkrechtem Strich, etwa $P(3 \mid 4)$ oder $Q(2 \mid -1 \mid 5)$.
Die Schreibweise unterscheidet sie schon optisch von Vektoren, die als Spalte stehen.

```aufgabe
id: ve-pfeil-check-gleich
titel: Derselbe Vektor?
art: check
niveau: 1
angabe: |
  Ein Pfeil führt von $(1 \mid 1)$ nach $(4 \mid 3)$, ein zweiter von $(5 \mid 0)$ nach $(8 \mid 2)$. Stellen beide denselben Vektor dar?
teile:
  - typ: auswahl
    optionen:
      - 'Ja, beide bedeuten „3 nach rechts, 2 nach oben“.'
      - 'Nein, denn sie beginnen an verschiedenen Stellen.'
      - 'Nein, denn sie enden an verschiedenen Stellen.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Ein Vektor hat keinen festen Ort. Entscheidend sind nur Länge und Richtung. Zähle bei beiden Pfeilen, wie weit sie nach rechts und nach oben gehen.'
      - wert: 2
        meldung: 'Auch die Endpunkte spielen keine Rolle. Ein Vektor ist eine Verschiebung, kein Ort. Vergleiche die Verschiebungen.'
loesung: |
  Erster Pfeil: von $x = 1$ nach $x = 4$ sind es $3$ nach rechts, von $y = 1$ nach $y = 3$ sind es $2$ nach oben.
  ---
  Zweiter Pfeil: $8 - 5 = 3$ nach rechts und $2 - 0 = 2$ nach oben. Beide stellen den Vektor $\begin{pmatrix} 3 \\ 2 \end{pmatrix}$ dar.
```

### Ortsvektor und Verbindungsvektor

Wie kommt man von zwei Punkten zu dem Vektor, der sie verbindet? Dazu braucht man zwei Begriffe.

:::definition[Ortsvektor, Verbindungsvektor]
Der **Ortsvektor** eines Punktes $P$ ist der Vektor $\overrightarrow{OP}$ vom Ursprung $O$ zum Punkt $P$.
Er hat dieselben Koordinaten wie der Punkt.

Der **Verbindungsvektor** von $A$ nach $B$ ist
$$\overrightarrow{AB} = \overrightarrow{OB} - \overrightarrow{OA}.$$
Man schreibt dafür kurz $B - A$.
:::

In Worten: Du ziehst die Koordinaten des **Anfangspunkts** von den Koordinaten des **Endpunkts** ab. In
der Schule heißt diese Regel **„Spitze minus Schaft“**. Die Spitze ist das Ende des Pfeils, der Schaft
sein Anfang.

Warum stimmt das? Der Weg vom Ursprung nach $B$ ist derselbe wie der Weg vom Ursprung nach $A$ und
danach von $A$ nach $B$. Also gilt $\overrightarrow{OB} = \overrightarrow{OA} + \overrightarrow{AB}$. Löst man
das nach $\overrightarrow{AB}$ auf, erhält man genau die Formel.

:::beispiel[Verbindungsvektor in der Ebene]
Gegeben sind $A(2 \mid 1)$ und $B(7 \mid 4)$.

**Schritt 1:** Wir rechnen „Spitze minus Schaft“, also $B - A$, komponentenweise:
$$\overrightarrow{AB} = \begin{pmatrix} 7 - 2 \\ 4 - 1 \end{pmatrix} = \begin{pmatrix} 5 \\ 3 \end{pmatrix}.$$
**Schritt 2:** Wir deuten das Ergebnis. Von $A$ nach $B$ geht man $5$ Einheiten nach rechts und $3$ nach oben.

**Schritt 3:** Der umgekehrte Pfeil ist $\overrightarrow{BA} = A - B = \begin{pmatrix} -5 \\ -3 \end{pmatrix}$. Er ist
gleich lang, aber entgegengesetzt gerichtet. Es gilt also $\overrightarrow{BA} = -\overrightarrow{AB}$.
:::

```plot
x: [-1, 11]
y: [-1, 7]
gleich: true
vektoren:
  - { von: [0, 0], nach: [2, 1], label: "OA", farbe: 2 }
  - { von: [0, 0], nach: [7, 4], label: "OB", farbe: 2 }
  - { von: [2, 1], nach: [7, 4], label: "AB = B − A", farbe: 0 }
  - { von: [4, 3], nach: [9, 6], label: "derselbe Vektor", farbe: 1 }
punkte:
  - { x: 2, y: 1, label: "A" }
  - { x: 7, y: 4, label: "B" }
beschriftung: Der Verbindungsvektor AB ist die Differenz der Ortsvektoren OB und OA. Der orange Pfeil ist ein anderer Repräsentant desselben Vektors (5, 3), gleich lang und gleich gerichtet, nur an anderer Stelle.
```

:::beispiel[Eine Drohne im Raum]
Eine Drohne startet im Punkt $A(2 \mid 1 \mid 0)$ und fliegt geradlinig zum Punkt $B(10 \mid 7 \mid 5)$. Die
Koordinaten sind in Metern angegeben. Die $x$-Achse zeigt nach Osten, die $y$-Achse nach Norden und die
$z$-Achse nach oben.

**Schritt 1:** Die Verschiebung der Drohne ist der Verbindungsvektor, also „Spitze minus Schaft“:
$$\overrightarrow{AB} = \begin{pmatrix} 10 - 2 \\ 7 - 1 \\ 5 - 0 \end{pmatrix} = \begin{pmatrix} 8 \\ 6 \\ 5 \end{pmatrix}\ \text{m}.$$
**Schritt 2:** Wir deuten jede Komponente. Die Drohne fliegt insgesamt $8$ m nach Osten, $6$ m nach
Norden und $5$ m hinauf.

**Schritt 3:** Probe: $A + \overrightarrow{AB} = (2 + 8 \mid 1 + 6 \mid 0 + 5) = (10 \mid 7 \mid 5) = B$. Es stimmt.
:::

Die Probe im Drohnen-Beispiel zeigt eine zweite wichtige Regel. Von einem Punkt und einem Vektor kommst
du zum Endpunkt:
$$B = A + \overrightarrow{AB}.$$
Man liest das als „Punkt plus Vektor ergibt einen Punkt“. Auf dieser Gleichung beruhen später alle
Geraden und Ebenen in [Kapitel 7, Geraden in der Ebene: die Parameterform](/lernen/mathe3/analytische-geometrie/geraden-in-der-ebene-die-parameterform).

:::achtung[Schaft minus Spitze]
Gegeben sind $A(3 \mid -2)$ und $B(1 \mid 5)$. Falsch ist:
$$\overrightarrow{AB} = A - B = \begin{pmatrix} 3 - 1 \\ -2 - 5 \end{pmatrix} = \begin{pmatrix} 2 \\ -7 \end{pmatrix}.$$
Das ist der Pfeil von $B$ nach $A$, also genau verkehrt herum. Richtig ist „Spitze minus Schaft“:
$$\overrightarrow{AB} = B - A = \begin{pmatrix} 1 - 3 \\ 5 - (-2) \end{pmatrix} = \begin{pmatrix} -2 \\ 7 \end{pmatrix}.$$
**Kontrolle mit einer Skizze:** $B$ liegt links oberhalb von $A$. Der Pfeil von $A$ nach $B$ muss also nach
links (negative $x$-Komponente) und nach oben (positive $y$-Komponente) zeigen.
:::

```aufgabe
id: ve-pfeil-check-richtung
titel: Vorzeichen vorhersagen
art: check
niveau: 1
angabe: |
  Gegeben sind $A(4 \mid 1)$ und $B(-2 \mid 3)$. Welche Vorzeichen haben die Komponenten von $\overrightarrow{AB}$? Entscheide zuerst mit einer kleinen Skizze und rechne erst dann.
teile:
  - typ: auswahl
    optionen:
      - '$x$-Komponente negativ, $y$-Komponente positiv'
      - '$x$-Komponente positiv, $y$-Komponente negativ'
      - 'beide positiv'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Das wäre der Pfeil von $B$ nach $A$. Von $A$ nach $B$ geht es nach links ($-2$ liegt links von $4$) und nach oben ($3$ liegt über $1$).'
      - wert: 2
        meldung: 'Liegt $B$ rechts oder links von $A$? Vergleiche die $x$-Koordinaten $-2$ und $4$.'
loesung: |
  $B$ liegt links oberhalb von $A$. Der Pfeil zeigt also nach links und nach oben.
  ---
  Rechnung: $\overrightarrow{AB} = \begin{pmatrix} -2 - 4 \\ 3 - 1 \end{pmatrix} = \begin{pmatrix} -6 \\ 2 \end{pmatrix}$. Das passt zur Skizze.
```

### Der dreidimensionale Raum

Im Raum braucht man drei Achsen, die paarweise aufeinander **normal** stehen. „Normal“ ist das
österreichische Wort für „senkrecht“, also im rechten Winkel. Üblich ist ein **Rechtssystem**.
Halte dazu die rechte Hand so: Der Daumen zeigt in $x$-Richtung, der Zeigefinger in $y$-Richtung. Dann
zeigt der abgespreizte Mittelfinger in $z$-Richtung. Diese Orientierung wird beim Kreuzprodukt in
[6.8 Das Kreuzprodukt](/lernen/mathe3/vektoren/das-kreuzprodukt-normalvektor-flaeche-und-volumen) wichtig.

Alle Rechenregeln dieses Kapitels funktionieren in $\R^2$ und $\R^3$ gleich, nur mit zwei beziehungsweise
drei Komponenten. Es gibt zwei Ausnahmen. Der Trick für Normalvektoren aus
[6.7 Orthogonalität](/lernen/mathe3/vektoren/orthogonalitaet-normalvektor-und-projektion) ist auf $\R^2$
zugeschnitten. Das Kreuzprodukt gibt es nur in $\R^3$.

### Punkt oder Vektor?

Punkte und Vektoren werden beide durch Zahlen beschrieben. Trotzdem sind sie verschiedene Dinge, und nicht
jede Rechnung ergibt einen Sinn. Mit Punkten und Vektoren sind diese drei Rechnungen sinnvoll:

- **Punkt minus Punkt ergibt einen Vektor.** Beispiel: $B - A = \overrightarrow{AB}$.
- **Punkt plus Vektor ergibt einen Punkt.** Beispiel: $A + \vec v$ ist der Punkt, an dem man landet.
- **Vektor plus oder minus Vektor ergibt einen Vektor.** Zwei Verschiebungen hintereinander sind wieder eine Verschiebung.

:::achtung[Punkt plus Punkt]
Jemand rechnet mit $A(1 \mid 2)$ und $B(3 \mid 4)$ die „Summe“ $A + B = (4 \mid 6)$ und hält das für einen
besonderen Punkt. Das ist er nicht. Wir verschieben den Ursprung um eine Einheit nach rechts. Dann heißen
dieselben Punkte $A(0 \mid 2)$ und $B(2 \mid 4)$, und ihre „Summe“ ist $(2 \mid 6)$. In den alten
Koordinaten ist das der Punkt $(3 \mid 6)$, nicht $(4 \mid 6)$.

Die „Summe zweier Punkte“ hängt also davon ab, wo man den Ursprung hinlegt. Sie hat deshalb keine
geometrische Bedeutung. Der Verbindungsvektor $B - A$ ist dagegen in beiden Koordinatensystemen
$\begin{pmatrix} 2 \\ 2 \end{pmatrix}$. Er hängt nicht vom Ursprung ab.
:::

Eine Ausnahme wirst du in [6.4 Mittelpunkt, Teilungspunkt und Schwerpunkt](/lernen/mathe3/vektoren/mittelpunkt-teilungspunkt-und-schwerpunkt)
kennenlernen: den Mittelpunkt $\tfrac12(A + B)$. Er ist in Wahrheit eine Abkürzung für „Punkt plus
Vektor“, nämlich $A + \tfrac12\overrightarrow{AB}$. Darum ist er sinnvoll.

```reflexion
frage: Erkläre in eigenen Worten, warum ein Vektor keinen festen Ort hat, ein Punkt aber schon. Warum ergibt „Punkt minus Punkt“ einen Sinn, „Punkt plus Punkt“ aber nicht?
antwort: |
  Ein Punkt ist ein Ort, also eine Adresse im Koordinatensystem. Ein Vektor ist eine Verschiebung, also eine
  Anweisung „so weit in diese Richtung“. Diese Anweisung kann man an jeder Stelle ausführen, deshalb hat
  der Vektor keinen festen Ort.

  Die Differenz $B - A$ beschreibt, wie man von $A$ nach $B$ kommt. Sie bleibt gleich, wenn man den Ursprung
  verschiebt, denn beide Punkte ändern ihre Koordinaten um denselben Betrag. Die Summe $A + B$ ändert sich
  dagegen beim Verschieben des Ursprungs. Sie beschreibt also nichts Geometrisches.
```

:::merke[Rezept: Punkte und Vektoren]
1. Verbindungsvektor: $\overrightarrow{AB} = B - A$, also Spitze minus Schaft, komponentenweise.
2. Umgekehrter Pfeil: $\overrightarrow{BA} = -\overrightarrow{AB}$.
3. Endpunkt einer Verschiebung: $B = A + \overrightarrow{AB}$.
4. Anfangspunkt einer Verschiebung: $A = B - \overrightarrow{AB}$.
5. Kontrolle mit einer Skizze: Zeigen die Vorzeichen der Komponenten in die richtige Richtung?
:::

```aufgabe
id: ve-pfeil-ablesen
titel: Verbindungsvektor berechnen
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Gegeben sind $A(2 \mid -1)$ und $B(5 \mid 3)$. Berechne $\overrightarrow{AB}$ und $\overrightarrow{BA}$.
teile:
  - typ: vektor
    label: '$\overrightarrow{AB}$'
    loesung: ["5-2", "3-(-1)"]
    fehler:
      - wert: ["-3", "-4"]
        meldung: 'Du hast Schaft minus Spitze gerechnet, also $A - B$. Für den Pfeil von $A$ nach $B$ gilt Spitze minus Schaft: $B - A$.'
      - wert: ["3", "2"]
        meldung: 'In der zweiten Komponente steckt ein Vorzeichenfehler. $3 - (-1)$ ist $3 + 1 = 4$, nicht $3 - 1$.'
      - wert: ["7", "2"]
        meldung: 'Du hast die Koordinaten addiert. Für einen Verbindungsvektor wird subtrahiert: Endpunkt minus Anfangspunkt.'
  - typ: vektor
    label: '$\overrightarrow{BA}$'
    loesung: ["2-5", "-1-3"]
    fehler:
      - wert: ["3", "4"]
        meldung: 'Das ist $\overrightarrow{AB}$. Der Pfeil von $B$ nach $A$ zeigt genau in die Gegenrichtung.'
hinweise:
  - 'Spitze minus Schaft: Für $\overrightarrow{AB}$ ist $B$ die Spitze und $A$ der Schaft.'
loesung: |
  **Ansatz:** Ein Verbindungsvektor ist „Spitze minus Schaft“. Für $\overrightarrow{AB}$ rechnen wir also $B - A$, komponentenweise.
  ---
  $\overrightarrow{AB} = \begin{pmatrix} 5 - 2 \\ 3 - (-1) \end{pmatrix} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$. Achte auf $3 - (-1) = 3 + 1 = 4$.
  ---
  $\overrightarrow{BA} = A - B = \begin{pmatrix} -3 \\ -4 \end{pmatrix} = -\overrightarrow{AB}$. Gleiche Länge, entgegengesetzte Richtung. **Plausibel:** $B$ liegt rechts oberhalb von $A$, also hat $\overrightarrow{AB}$ zwei positive Komponenten.
```

```aufgabe
id: ve-raum-verbindung
titel: Verbindungsvektor im Raum
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Bestimme $\overrightarrow{AB}$ für $A(1 \mid -2 \mid 4)$ und $B(-3 \mid 0 \mid 7)$.
teile:
  - typ: vektor
    label: '$\overrightarrow{AB}$'
    loesung: ["-3-1", "0-(-2)", "7-4"]
    fehler:
      - wert: ["4", "-2", "-3"]
        meldung: 'Das ist $A - B$, also der Pfeil in die Gegenrichtung. Rechne Spitze ($B$) minus Schaft ($A$).'
      - wert: ["-4", "-2", "3"]
        meldung: 'In der zweiten Komponente steckt ein Vorzeichenfehler: $0 - (-2) = 0 + 2 = 2$.'
hinweise:
  - 'Rechne für jede der drei Komponenten „Koordinate von $B$ minus Koordinate von $A$“.'
loesung: |
  **Ansatz:** Auch im Raum gilt Spitze minus Schaft, jetzt mit drei Komponenten.
  ---
  $$\overrightarrow{AB} = \begin{pmatrix} -3 - 1 \\ 0 - (-2) \\ 7 - 4 \end{pmatrix} = \begin{pmatrix} -4 \\ 2 \\ 3 \end{pmatrix}.$$
  **Probe:** $A + \overrightarrow{AB} = (1 - 4 \mid -2 + 2 \mid 4 + 3) = (-3 \mid 0 \mid 7) = B$. Es stimmt.
```

```aufgabe
id: ve-pfeil-plot-ablesen
titel: Einen Vektor aus der Zeichnung ablesen
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Lies aus der Zeichnung die Komponenten des Vektors $\vec u$ ab. Ein Kästchen ist eine Einheit.
plot:
  x: [-1, 6]
  y: [-3, 3]
  gleich: true
  vektoren:
    - { von: [1, 1], nach: [4, -1], label: "u", farbe: 0 }
  punkte:
    - { x: 1, y: 1, label: "Anfang (1 | 1)" }
teile:
  - typ: vektor
    label: '$\vec u$'
    loesung: ["3", "-2"]
    fehler:
      - wert: ["4", "-1"]
        meldung: 'Das sind die Koordinaten der Pfeilspitze. Ein Vektor gibt aber an, **wie weit** man sich bewegt: Spitze minus Anfang.'
      - wert: ["-3", "2"]
        meldung: 'Beide Vorzeichen sind vertauscht. Der Pfeil zeigt nach rechts (positive $x$-Komponente) und nach unten (negative $y$-Komponente).'
      - wert: ["3", "2"]
        meldung: 'Der Pfeil geht nach **unten**. Die $y$-Komponente ist deshalb negativ.'
hinweise:
  - 'Zähle vom Anfang zur Spitze: Wie viele Einheiten nach rechts, wie viele nach oben oder unten?'
loesung: |
  **Ansatz:** Der Vektor ist Spitze minus Anfang. Die Spitze liegt bei $(4 \mid -1)$, der Anfang bei $(1 \mid 1)$.
  ---
  $\vec u = \begin{pmatrix} 4 - 1 \\ -1 - 1 \end{pmatrix} = \begin{pmatrix} 3 \\ -2 \end{pmatrix}$. Der Pfeil geht $3$ nach rechts und $2$ nach unten, das passt zur Zeichnung.
```

```aufgabe
id: ve-punkt-plus-vektor
titel: Punkt plus Vektor
niveau: 2
lernziel: 0
kompetenz: rechnen
angabe: |
  Ein Punkt $P(4 \mid 1 \mid -2)$ wird um den Vektor $\vec v = \begin{pmatrix} -3 \\ 2 \\ 5 \end{pmatrix}$ verschoben.

  a) Bestimme den Bildpunkt $Q$.

  b) Von welchem Punkt $R$ aus kommt man mit derselben Verschiebung $\vec v$ genau nach $P$?
teile:
  - typ: vektor
    label: 'a) $Q$'
    namen: ["x", "y", "z"]
    loesung: ["4-3", "1+2", "-2+5"]
    fehler:
      - wert: ["7", "-1", "-7"]
        meldung: 'Du hast $\vec v$ abgezogen. Beim Verschieben um $\vec v$ wird $\vec v$ dazugezählt: $Q = P + \vec v$.'
  - typ: vektor
    label: 'b) $R$'
    namen: ["x", "y", "z"]
    loesung: ["4+3", "1-2", "-2-5"]
    fehler:
      - wert: ["1", "3", "3"]
        meldung: 'Das ist $Q$ aus Teil a). Gesucht ist der Punkt **vor** der Verschiebung. Aus $R + \vec v = P$ folgt $R = P - \vec v$.'
      - wert: ["-7", "1", "7"]
        meldung: 'Du hast $\vec v - P$ gerechnet. Richtig ist $P - \vec v$: Vom Endpunkt geht man die Verschiebung zurück.'
hinweise:
  - 'a) Punkt plus Vektor ergibt einen Punkt: $Q = P + \vec v$.'
  - 'b) Für $R$ gilt $R + \vec v = P$. Löse diese Gleichung nach $R$ auf.'
loesung: |
  **Ansatz:** Verschieben heißt „Punkt plus Vektor“. Wir rechnen komponentenweise.
  ---
  a) $Q = P + \vec v = (4 - 3 \mid 1 + 2 \mid -2 + 5) = (1 \mid 3 \mid 3)$.
  ---
  b) Aus $R + \vec v = P$ folgt durch Abziehen von $\vec v$ auf beiden Seiten $R = P - \vec v = (4 + 3 \mid 1 - 2 \mid -2 - 5) = (7 \mid -1 \mid -7)$.
  ---
  **Probe:** $R + \vec v = (7 - 3 \mid -1 + 2 \mid -7 + 5) = (4 \mid 1 \mid -2) = P$. Es stimmt.
```

```aufgabe
id: ve-vektor-gleich-pfeile
titel: Welche Pfeile stellen denselben Vektor dar?
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  Der Vektor $\vec v$ führt von $(0 \mid 0)$ nach $(2 \mid 3)$. Welche der folgenden Pfeile sind Repräsentanten von $\vec v$?
  Wähle alle passenden aus.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - 'von $(1 \mid 1)$ nach $(3 \mid 4)$'
      - 'von $(-2 \mid 1)$ nach $(0 \mid 4)$'
      - 'von $(1 \mid 0)$ nach $(3 \mid -3)$'
      - 'von $(2 \mid 3)$ nach $(0 \mid 0)$'
    richtig: [0, 1]
    fehler:
      - wert: [0, 1, 3]
        meldung: 'Der letzte Pfeil ist gleich lang und parallel, zeigt aber in die **Gegenrichtung**. Er stellt den Gegenvektor $-\vec v$ dar.'
      - wert: [0, 1, 2]
        meldung: 'Beim dritten Pfeil geht es $3$ nach **unten**, nicht nach oben. Rechne Spitze minus Anfang: $(3 - 1 \mid -3 - 0)$.'
      - wert: [0]
        meldung: 'Der Ort des Pfeils spielt keine Rolle. Prüfe auch den zweiten Pfeil mit Spitze minus Anfang.'
hinweise:
  - 'Berechne für jeden Pfeil Spitze minus Anfang und vergleiche mit $\begin{pmatrix} 2 \\ 3 \end{pmatrix}$.'
  - 'Gleich lang und parallel reicht nicht. Auch die Richtung muss stimmen.'
loesung: |
  **Ansatz:** Ein Pfeil ist ein Repräsentant von $\vec v$, wenn Spitze minus Anfang genau $\begin{pmatrix} 2 \\ 3 \end{pmatrix}$ ergibt.
  ---
  Erster Pfeil: $(3 - 1 \mid 4 - 1) = (2 \mid 3)$, passt. Zweiter Pfeil: $(0 + 2 \mid 4 - 1) = (2 \mid 3)$, passt.
  ---
  Dritter Pfeil: $(3 - 1 \mid -3 - 0) = (2 \mid -3)$, andere Richtung. Vierter Pfeil: $(0 - 2 \mid 0 - 3) = (-2 \mid -3)$, das ist $-\vec v$. Richtig sind also die ersten beiden.
```

```aufgabe
id: ve-pfeil-anfang-gesucht
titel: Den Anfangspunkt einer Verschiebung finden
niveau: 2
lernziel: 0
kompetenz: rechnen
angabe: |
  Der Pfeil $\overrightarrow{AB} = \begin{pmatrix} -4 \\ 2 \\ 1 \end{pmatrix}$ endet im Punkt $B(1 \mid 5 \mid -2)$. Bestimme den Anfangspunkt $A$.
teile:
  - typ: vektor
    label: '$A$'
    namen: ["x", "y", "z"]
    loesung: ["1-(-4)", "5-2", "-2-1"]
    fehler:
      - wert: ["-3", "7", "-1"]
        meldung: 'Du hast $B + \overrightarrow{AB}$ gerechnet. Damit gehst du von $B$ aus noch weiter. Der Anfangspunkt liegt aber **vor** $B$: $A = B - \overrightarrow{AB}$.'
      - wert: ["-3", "3", "-3"]
        meldung: 'In der ersten Komponente steckt ein Vorzeichenfehler: $1 - (-4) = 1 + 4 = 5$.'
hinweise:
  - 'Es gilt $B = A + \overrightarrow{AB}$. Löse diese Gleichung nach $A$ auf.'
  - 'Ziehe $\overrightarrow{AB}$ komponentenweise von $B$ ab. Achte auf minus minus.'
loesung: |
  **Ansatz:** Aus $B = A + \overrightarrow{AB}$ folgt durch Abziehen $A = B - \overrightarrow{AB}$.
  ---
  $A = (1 - (-4) \mid 5 - 2 \mid -2 - 1) = (5 \mid 3 \mid -3)$.
  ---
  **Probe:** $A + \overrightarrow{AB} = (5 - 4 \mid 3 + 2 \mid -3 + 1) = (1 \mid 5 \mid -2) = B$. Es stimmt.
gefuehrt:
  - text: 'Welche Gleichung verbindet $A$, $B$ und den Pfeil $\overrightarrow{AB}$?'
    teil:
      typ: auswahl
      optionen: ['$B = A + \overrightarrow{AB}$', '$A = B + \overrightarrow{AB}$', '$B = \overrightarrow{AB} - A$']
      richtig: [0]
      fehler:
        - wert: 1
          meldung: 'Mit dem Pfeil kommt man von $A$ nach $B$, nicht von $B$ nach $A$.'
    erklaerung: 'Punkt plus Vektor ergibt einen Punkt: Von $A$ aus kommt man mit $\overrightarrow{AB}$ nach $B$.'
  - text: 'Löse nach $A$ auf. Welche Formel ergibt sich?'
    teil:
      typ: auswahl
      optionen: ['$A = B - \overrightarrow{AB}$', '$A = B + \overrightarrow{AB}$']
      richtig: [0]
    erklaerung: 'Wir ziehen auf beiden Seiten $\overrightarrow{AB}$ ab: $A = B - \overrightarrow{AB}$.'
  - text: 'Berechne die $x$-Koordinate von $A$.'
    teil: { typ: zahl, loesung: "1-(-4)", fehler: [ { wert: "-3", meldung: 'Minus minus ergibt plus: $1 - (-4) = 5$.' } ] }
    erklaerung: '$1 - (-4) = 1 + 4 = 5$.'
  - text: 'Gib den ganzen Punkt $A$ an.'
    teil: { typ: vektor, namen: ["x", "y", "z"], loesung: ["5", "3", "-3"] }
    erklaerung: '$A = (5 \mid 3 \mid -3)$. Probe: $A + \overrightarrow{AB} = (1 \mid 5 \mid -2) = B$.'
```

```aufgabe
id: ve-drohne-rueckweg
titel: Zwei Flugetappen und der Rückweg
niveau: 3
lernziel: 0
kompetenz: modellieren
angabe: |
  Eine Drohne startet im Punkt $S(2 \mid -1 \mid 0)$ (Angaben in Metern, $z$-Achse nach oben). Sie fliegt zuerst um
  $\vec u = \begin{pmatrix} 5 \\ 3 \\ 4 \end{pmatrix}$ und danach um $\vec v = \begin{pmatrix} -2 \\ 6 \\ -1 \end{pmatrix}$.

  a) In welchem Punkt $E$ ist sie danach?

  b) Mit welchem Vektor $\vec r$ fliegt sie auf direktem Weg zurück zum Start?

  c) In welcher Höhe über dem Startpunkt ist sie am Ende?
teile:
  - typ: vektor
    label: 'a) $E$'
    namen: ["x", "y", "z"]
    loesung: ["2+5-2", "-1+3+6", "0+4-1"]
    fehler:
      - wert: ["3", "9", "3"]
        meldung: 'Das ist nur die Summe der beiden Verschiebungen. Sie beginnt aber nicht im Ursprung, sondern in $S$. Zähle $S$ dazu.'
  - typ: vektor
    label: 'b) $\vec r$'
    loesung: ["2-5", "-1-8", "0-3"]
    fehler:
      - wert: ["3", "9", "3"]
        meldung: 'Dieser Vektor führt von $S$ nach $E$, also auf dem Hinweg. Zurück geht es von $E$ nach $S$: Spitze $S$ minus Schaft $E$.'
  - typ: zahl
    label: 'c) Höhe über dem Start'
    einheit: m
    loesung: "4-1"
    fehler:
      - wert: "4"
        meldung: 'Nach der ersten Etappe ist die Drohne $4$ m hoch. Die zweite Etappe hat aber die $z$-Komponente $-1$, sie sinkt also wieder.'
hinweise:
  - 'Zwei Verschiebungen hintereinander: Punkt plus Vektor plus Vektor, also $E = S + \vec u + \vec v$.'
  - 'Der Rückweg ist der Verbindungsvektor $\overrightarrow{ES} = S - E$. Die Höhe liest du an der $z$-Koordinate ab.'
loesung: |
  **Ansatz:** Jede Etappe ist eine Verschiebung. Punkt plus Vektor ergibt den neuen Punkt, also zweimal hintereinander $E = S + \vec u + \vec v$.
  ---
  a) $E = (2 + 5 - 2 \mid -1 + 3 + 6 \mid 0 + 4 - 1) = (5 \mid 8 \mid 3)$.
  ---
  b) Der Rückweg führt von $E$ nach $S$: $\vec r = \overrightarrow{ES} = S - E = \begin{pmatrix} 2 - 5 \\ -1 - 8 \\ 0 - 3 \end{pmatrix} = \begin{pmatrix} -3 \\ -9 \\ -3 \end{pmatrix}$. Das ist genau $-(\vec u + \vec v)$.
  ---
  c) Die Höhe ist die $z$-Koordinate. Sie steigt um $4$ m und sinkt um $1$ m, insgesamt also $3$ m über dem Start.
  ---
  **Antwort:** Die Drohne ist am Ende in $E(5 \mid 8 \mid 3)$, also $3$ m über dem Startniveau. Den Rückweg beschreibt $\vec r = \begin{pmatrix} -3 \\ -9 \\ -3 \end{pmatrix}$ m.
```

```aufgabe
id: ve-punkt-vektor-begruenden
titel: Welche Rechnungen ergeben einen Sinn?
niveau: 3
lernziel: 0
kompetenz: begruenden
angabe: |
  $A$ und $B$ sind Punkte, $\vec u$ und $\vec v$ sind Vektoren.

  a) Welche Ausdrücke haben eine geometrische Bedeutung? Wähle alle passenden aus.

  b) Begründe am Beispiel $A(1 \mid 0)$, $B(3 \mid 2)$, warum $A + B$ keine geometrische Bedeutung hat. Verschiebe dazu den Ursprung.
teile:
  - typ: auswahl
    label: 'a)'
    mehrfach: true
    optionen:
      - '$B - A$'
      - '$A + \vec u$'
      - '$A + B$'
      - '$\vec u - \vec v$'
      - '$\vec u - A$'
    richtig: [0, 1, 3]
    fehler:
      - wert: [0, 1, 2, 3]
        meldung: '$A + B$ hängt davon ab, wo der Ursprung liegt. Probiere es im Teil b) aus.'
      - wert: [0, 1, 3, 4]
        meldung: 'Was soll „Verschiebung minus Ort“ bedeuten? Man kann einen Punkt verschieben, aber nicht von einer Verschiebung einen Ort abziehen.'
  - typ: text
    label: 'b) Begründung'
    muster: |
      Im ursprünglichen System ist $A + B = (4 \mid 2)$. Verschiebt man den Ursprung um eine Einheit nach rechts,
      dann heißen die Punkte $A(0 \mid 0)$ und $B(2 \mid 2)$, und $A + B = (2 \mid 2)$. In alten Koordinaten ist das
      $(3 \mid 2)$, also ein anderer Punkt als $(4 \mid 2)$. Das Ergebnis hängt von der Wahl des Ursprungs ab und
      beschreibt deshalb nichts Geometrisches. $B - A = \begin{pmatrix} 2 \\ 2 \end{pmatrix}$ bleibt dagegen in beiden
      Systemen gleich.
hinweise:
  - 'Sinnvoll sind Punkt minus Punkt (Vektor), Punkt plus Vektor (Punkt) und Vektor plus oder minus Vektor (Vektor).'
  - 'Für b): Ziehe von beiden Punkten in der $x$-Koordinate $1$ ab. Rechne $A + B$ neu und übersetze das Ergebnis zurück, indem du wieder $1$ dazuzählst.'
loesung: |
  **Ansatz:** Ein Ausdruck hat eine geometrische Bedeutung, wenn er nicht davon abhängt, wo der Ursprung liegt.
  ---
  a) $B - A$ ist ein Verbindungsvektor. $A + \vec u$ ist der verschobene Punkt. $\vec u - \vec v$ ist ein Vektor. Diese drei sind sinnvoll. $A + B$ und $\vec u - A$ sind es nicht.
  ---
  b) Altes System: $A + B = (1 + 3 \mid 0 + 2) = (4 \mid 2)$. Neues System mit um $1$ nach rechts verschobenem Ursprung: $A(0 \mid 0)$, $B(2 \mid 2)$, also $A + B = (2 \mid 2)$.
  ---
  Zurückübersetzt ist $(2 \mid 2)$ im neuen System der Punkt $(3 \mid 2)$ im alten. Das ist nicht $(4 \mid 2)$. **Fazit:** $A + B$ hängt vom Ursprung ab und hat keine geometrische Bedeutung. Der Vektor $B - A = \begin{pmatrix} 2 \\ 2 \end{pmatrix}$ ist dagegen in beiden Systemen gleich.
```

## Rechnen mit Vektoren: Addition, Vielfache und Rechengesetze

```aufgabe
id: ve-rechnen-vorwissen
titel: Klammern auflösen
art: check
niveau: 1
angabe: |
  Vereinfache $2(x + 3y) - (x - y)$. Zum Nachlesen:
  [Kapitel 1, Terme umformen](/lernen/mathe3/zahlen/terme-umformen-binomische-formeln-und-faktorisieren).
teile:
  - typ: auswahl
    optionen:
      - '$x + 7y$'
      - '$x + 5y$'
      - '$3x + 7y$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Das Minus vor der zweiten Klammer wirkt auf **beide** Summanden. Aus $-(x - y)$ wird $-x + y$.'
      - wert: 2
        meldung: 'Das Minus vor der Klammer ändert auch das Vorzeichen von $x$: $2x - x = x$.'
loesung: |
  Ausmultiplizieren: $2(x + 3y) = 2x + 6y$ und $-(x - y) = -x + y$.
  ---
  Zusammenfassen: $2x - x + 6y + y = x + 7y$.
```

Diese Lektion zeigt, wie man Vektoren addiert, subtrahiert und mit Zahlen multipliziert. Alles geht
**komponentenweise**, also Eintrag für Eintrag. Das Schöne daran: Für Vektoren gelten dieselben
Rechenregeln wie für Zahlen, solange man nur addiert und mit Zahlen multipliziert. Du kannst also Klammern
auflösen und Gleichungen umformen wie gewohnt.

### Addition

Zwei Verschiebungen hintereinander ergeben wieder eine Verschiebung. Diese Gesamtverschiebung heißt die
**Summe** der beiden Vektoren. Zeichnerisch hängst du den Pfeil von $\vec b$ an die Spitze von $\vec a$. Der
Summenpfeil führt dann vom Anfang von $\vec a$ zur Spitze von $\vec b$. Das nennt man die
**Spitze-an-Schaft-Regel**.

In Koordinaten addierst du einfach die Komponenten:
$$\begin{pmatrix} a_1 \\ a_2 \\ a_3 \end{pmatrix} + \begin{pmatrix} b_1 \\ b_2 \\ b_3 \end{pmatrix} = \begin{pmatrix} a_1 + b_1 \\ a_2 + b_2 \\ a_3 + b_3 \end{pmatrix}.$$
Dabei sind $a_1, a_2, a_3$ die Komponenten von $\vec a$ und $b_1, b_2, b_3$ die von $\vec b$. Der kleine Index
sagt, um welche Komponente es geht.

**Warum passt das zum Bild?** Gehst du erst $a_1$ Einheiten und dann $b_1$ Einheiten in $x$-Richtung,
dann bist du insgesamt $a_1 + b_1$ Einheiten gegangen. Dasselbe gilt für jede andere Richtung.

:::beispiel[Addition in der Ebene]
Gegeben sind $\vec a = \begin{pmatrix} 5 \\ 1 \end{pmatrix}$ und $\vec b = \begin{pmatrix} 2 \\ 4 \end{pmatrix}$.

**Schritt 1:** komponentenweise addieren: $\vec a + \vec b = \begin{pmatrix} 5 + 2 \\ 1 + 4 \end{pmatrix} = \begin{pmatrix} 7 \\ 5 \end{pmatrix}$.

**Schritt 2:** die Reihenfolge tauschen: $\vec b + \vec a = \begin{pmatrix} 2 + 5 \\ 4 + 1 \end{pmatrix} = \begin{pmatrix} 7 \\ 5 \end{pmatrix}$.
Es kommt dasselbe heraus. Zeichnet man beide Wege, entsteht ein Parallelogramm. Seine Diagonale ist
$\vec a + \vec b$. Das heißt **Parallelogrammregel**.
:::

```plot
x: [-1, 8]
y: [-1, 6]
gleich: true
vektoren:
  - { von: [0, 0], nach: [5, 1], label: "a", farbe: 0 }
  - { von: [5, 1], nach: [7, 5], label: "b", farbe: 1 }
  - { von: [0, 0], nach: [2, 4], label: "b", farbe: 1 }
  - { von: [2, 4], nach: [7, 5], label: "a", farbe: 0 }
  - { von: [0, 0], nach: [7, 5], label: "a + b", farbe: 2 }
beschriftung: Parallelogrammregel. Ob man erst a und dann b anträgt oder erst b und dann a, man landet am selben Punkt. Die Diagonale ist a + b = (7, 5) für a = (5, 1) und b = (2, 4).
```

:::beispiel[Ein Roboter fährt zwei Strecken]
Ein Saugroboter fährt zuerst um $\vec u = \begin{pmatrix} 30 \\ 10 \end{pmatrix}$ cm und danach um
$\vec v = \begin{pmatrix} -10 \\ 25 \end{pmatrix}$ cm. Die $x$-Achse zeigt nach rechts, die $y$-Achse nach vorne.

**Schritt 1:** Die Gesamtverschiebung ist die Summe: $\vec u + \vec v = \begin{pmatrix} 30 - 10 \\ 10 + 25 \end{pmatrix} = \begin{pmatrix} 20 \\ 35 \end{pmatrix}$ cm.

**Schritt 2:** Deutung: Am Ende steht der Roboter $20$ cm rechts vom Start und $35$ cm vor dem Start.
Welchen Weg er dazwischen genommen hat, spielt für die Gesamtverschiebung keine Rolle.
:::

### Nullvektor, Gegenvektor und Subtraktion

Der **Nullvektor** $\vec 0$ hat lauter Nullen als Komponenten. Er ist die Verschiebung, die nichts bewegt.
Der **Gegenvektor** $-\vec a$ ist gleich lang wie $\vec a$, zeigt aber in die Gegenrichtung. In Koordinaten
änderst du bei jeder Komponente das Vorzeichen. Es gilt $\vec a + (-\vec a) = \vec 0$.

**Subtrahieren** heißt: den Gegenvektor addieren, also $\vec a - \vec b = \vec a + (-\vec b)$. Auch das geht
komponentenweise. Zeichnerisch ist $\vec a - \vec b$ der Pfeil **von der Spitze von $\vec b$ zur Spitze von
$\vec a$**, wenn beide Pfeile im selben Punkt beginnen. Der Grund: $\vec b + (\vec a - \vec b) = \vec a$. Im
Parallelogramm aus $\vec a$ und $\vec b$ ist also $\vec a + \vec b$ die eine Diagonale und $\vec a - \vec b$ die
andere.

Mit den Zahlen aus dem Beispiel zur Addition ist $\vec a - \vec b = \begin{pmatrix} 5 - 2 \\ 1 - 4 \end{pmatrix} = \begin{pmatrix} 3 \\ -3 \end{pmatrix}$.
Probe: $\vec b + (\vec a - \vec b) = \begin{pmatrix} 2 + 3 \\ 4 - 3 \end{pmatrix} = \begin{pmatrix} 5 \\ 1 \end{pmatrix} = \vec a$.

:::achtung[Vorzeichenfehler beim Subtrahieren]
Gesucht ist $\begin{pmatrix} 3 \\ -2 \\ 5 \end{pmatrix} - \begin{pmatrix} 1 \\ -4 \\ -2 \end{pmatrix}$. Ein häufiger Fehler ist
$$\begin{pmatrix} 3 - 1 \\ -2 - 4 \\ 5 - 2 \end{pmatrix} = \begin{pmatrix} 2 \\ -6 \\ 3 \end{pmatrix}. \qquad\text{Falsch!}$$
Hier wurde das Minus der negativen Komponenten einfach weggelassen. Richtig ist $-2 - (-4) = -2 + 4 = 2$ und
$5 - (-2) = 5 + 2 = 7$. Das Ergebnis lautet also $\begin{pmatrix} 2 \\ 2 \\ 7 \end{pmatrix}$. **Tipp:** Schreib bei negativen
Komponenten immer die Klammer hin, etwa $-2 - (-4)$.
:::

### Multiplikation mit einer Zahl

Zahlen nennt man in der Vektorrechnung **Skalare**. Das Wort kommt vom lateinischen *scala*, die Leiter
oder Skala: Eine Zahl misst nur „wie viel“, sie hat keine Richtung. Für Skalare verwendet man oft
griechische Buchstaben wie $\lambda$ (gelesen „lambda“) oder $\mu$ („mü“).

Einen Vektor multiplizierst du mit einem Skalar $\lambda$, indem du **jede Komponente** mit $\lambda$
multiplizierst:
$$\lambda\cdot\begin{pmatrix} a_1 \\ a_2 \\ a_3 \end{pmatrix} = \begin{pmatrix} \lambda a_1 \\ \lambda a_2 \\ \lambda a_3 \end{pmatrix}.$$
Zeichnerisch wird der Pfeil $|\lambda|$-mal so lang. Ist $|\lambda| > 1$, wird er länger, ist $|\lambda| < 1$, wird er kürzer. Ist
$\lambda$ negativ, dreht sich zusätzlich die Richtung um. Und $0\cdot\vec a$ ist der Nullvektor.

:::beispiel[Vielfache eines Vektors]
**Erstes Vielfaches:** $3\cdot\begin{pmatrix} 2 \\ -1 \\ 4 \end{pmatrix} = \begin{pmatrix} 6 \\ -3 \\ 12 \end{pmatrix}$. Der Pfeil ist dreimal so lang, die Richtung bleibt.

**Zweites Vielfaches:** $-\tfrac12\cdot\begin{pmatrix} 4 \\ -2 \\ 6 \end{pmatrix} = \begin{pmatrix} -2 \\ 1 \\ -3 \end{pmatrix}$. Der Pfeil ist halb so lang und
zeigt in die Gegenrichtung.

**Nichtbeispiel:** $3\cdot\begin{pmatrix} 2 \\ -1 \\ 4 \end{pmatrix}$ ist **nicht** $\begin{pmatrix} 6 \\ -1 \\ 4 \end{pmatrix}$. Die Zahl wirkt auf
**alle** Komponenten, nicht nur auf die erste.
:::

### Die Rechengesetze

:::satz[Rechengesetze für Vektoren]
Für alle Vektoren $\vec a, \vec b, \vec c$ gleicher Dimension und alle Skalare $\lambda, \mu$ gilt:

- **Kommutativgesetz:** $\vec a + \vec b = \vec b + \vec a$.
- **Assoziativgesetz:** $(\vec a + \vec b) + \vec c = \vec a + (\vec b + \vec c)$.
- **Nullvektor und Gegenvektor:** $\vec a + \vec 0 = \vec a$ und $\vec a + (-\vec a) = \vec 0$.
- **Distributivgesetze:** $\lambda(\vec a + \vec b) = \lambda\vec a + \lambda\vec b$ und $(\lambda + \mu)\vec a = \lambda\vec a + \mu\vec a$.
- **Vielfache von Vielfachen:** $\lambda(\mu\vec a) = (\lambda\mu)\vec a$ und $1\cdot\vec a = \vec a$.
:::

**Warum gelten sie?** Jedes Gesetz gilt Komponente für Komponente, weil es für gewöhnliche Zahlen gilt.
Ein Beispiel: Die erste Komponente von $\lambda(\vec a + \vec b)$ ist $\lambda(a_1 + b_1)$. Nach dem
Distributivgesetz für Zahlen ist das $\lambda a_1 + \lambda b_1$. Das ist genau die erste Komponente von
$\lambda\vec a + \lambda\vec b$. Für die anderen Komponenten und Gesetze geht es genauso.

Für die Prüfung heißt das: Mit Vektoren rechnest du wie mit Variablen in Termen, solange du nur addierst,
subtrahierst und mit Zahlen multiplizierst. Eine Menge mit diesen Rechengesetzen nennt man einen
**Vektorraum**. Mehr dazu steht in
[6.10 Lineare Abhängigkeit, Linearkombination und Basis](/lernen/mathe3/vektoren/lineare-abhaengigkeit-linearkombination-und-basis).

:::beispiel[Eine Vektorgleichung lösen]
Gesucht ist $\vec x$ mit $2\vec x + \vec a = 3\vec b - \vec x$, wobei $\vec a = \begin{pmatrix} 3 \\ -6 \\ 9 \end{pmatrix}$ und
$\vec b = \begin{pmatrix} 1 \\ 2 \\ -1 \end{pmatrix}$.

**Schritt 1:** Wir formen zuerst allgemein um, wie bei einer linearen Gleichung. Wir addieren $\vec x$ und
ziehen $\vec a$ ab: $3\vec x = 3\vec b - \vec a$.

**Schritt 2:** Wir teilen durch die Zahl $3$: $\vec x = \vec b - \tfrac13\vec a$.

**Schritt 3:** Erst jetzt setzen wir ein: $\tfrac13\vec a = \begin{pmatrix} 1 \\ -2 \\ 3 \end{pmatrix}$, also
$\vec x = \begin{pmatrix} 1 - 1 \\ 2 + 2 \\ -1 - 3 \end{pmatrix} = \begin{pmatrix} 0 \\ 4 \\ -4 \end{pmatrix}$.
:::

:::achtung[Durch einen Vektor teilen]
Jemand soll $\lambda$ aus $\lambda\cdot\begin{pmatrix} 2 \\ -1 \\ 4 \end{pmatrix} = \begin{pmatrix} 6 \\ -3 \\ 12 \end{pmatrix}$ bestimmen und schreibt
$$\lambda = \frac{\begin{pmatrix} 6 \\ -3 \\ 12 \end{pmatrix}}{\begin{pmatrix} 2 \\ -1 \\ 4 \end{pmatrix}}. \qquad\text{Falsch!}$$
Durch einen Vektor kann man **nicht** teilen, ein solcher Bruch ist nicht definiert. Richtig ist der
Vergleich der Komponenten: $2\lambda = 6$, $-\lambda = -3$ und $4\lambda = 12$. Alle drei Gleichungen
ergeben $\lambda = 3$. Teilen darfst du nur durch eine **Zahl** $\lambda \neq 0$, also
$\frac{\vec a}{\lambda} = \frac{1}{\lambda}\,\vec a$.
:::

### Parallele Vektoren

:::definition[Parallel, kollinear]
Zwei Vektoren $\vec a$ und $\vec b$, die beide nicht der Nullvektor sind, heißen **parallel** oder
**kollinear** (lateinisch für „auf einer Linie“), wenn einer ein Vielfaches des anderen ist:
$$\vec b = \lambda\,\vec a \quad\text{für eine Zahl } \lambda.$$
Man schreibt $\vec a \parallel \vec b$. Ist $\lambda > 0$, zeigen beide in dieselbe Richtung. Ist $\lambda < 0$,
zeigen sie in entgegengesetzte Richtungen.
:::

Rechnerisch prüfst du Parallelität so: Du teilst jede Komponente von $\vec b$ durch die passende
Komponente von $\vec a$. Alle Quotienten müssen gleich sein. Steht in einer Komponente von $\vec a$ eine
Null, dann muss an derselben Stelle von $\vec b$ auch eine Null stehen.

:::beispiel[Parallel oder nicht?]
**Beispiel:** $\begin{pmatrix} 3 \\ -1 \\ 2 \end{pmatrix}$ und $\begin{pmatrix} -6 \\ 2 \\ -4 \end{pmatrix}$. Die Quotienten sind
$\tfrac{-6}{3} = -2$, $\tfrac{2}{-1} = -2$ und $\tfrac{-4}{2} = -2$. Alle gleich, also parallel mit $\lambda = -2$.
Die beiden zeigen in entgegengesetzte Richtungen.

**Nichtbeispiel:** $\begin{pmatrix} 3 \\ -1 \\ 2 \end{pmatrix}$ und $\begin{pmatrix} 6 \\ -2 \\ -4 \end{pmatrix}$. Die Quotienten sind
$2$, $2$ und $-2$. Sie sind nicht alle gleich, also sind die Vektoren nicht parallel.
:::

Vielfache eines Vektors zeigen in dieselbe oder die genau entgegengesetzte Richtung. Deshalb darf man
einen **Richtungsvektor** kürzen. Der Vektor $\begin{pmatrix} 6 \\ -9 \\ 3 \end{pmatrix}$ beschreibt dieselbe Richtung wie
$\begin{pmatrix} 2 \\ -3 \\ 1 \end{pmatrix}$, denn er ist das Dreifache davon. Das brauchst du ständig in
[Kapitel 7, Geraden in der Ebene: die Parameterform](/lernen/mathe3/analytische-geometrie/geraden-in-der-ebene-die-parameterform).

:::merke[Rezept: Rechnen mit Koordinaten]
1. Addieren, Subtrahieren und Vervielfachen gehen komponentenweise. Negative Komponenten in Klammern setzen.
2. Vektorgleichungen zuerst allgemein nach $\vec x$ umformen, erst dann Koordinaten einsetzen.
3. Nie durch einen Vektor teilen. Unbekannte Zahlen findest du durch Vergleich der Komponenten.
4. Parallel heißt $\vec b = \lambda\vec a$: Alle Komponentenquotienten müssen gleich sein.
:::

### Summe und Differenz im Widget

```aufgabe
id: ve-rechnen-check-vorhersage
titel: Was passiert, wenn die Pfeile parallel werden?
art: check
niveau: 1
angabe: |
  Im folgenden Widget spannen $\vec a$ und $\vec b$ ein Parallelogramm auf. Mach zuerst eine Vorhersage: Du ziehst die Spitze
  von $\vec b$ so, dass $\vec b$ genau in dieselbe Richtung zeigt wie $\vec a$. Was passiert mit dem Parallelogramm?
teile:
  - typ: auswahl
    optionen:
      - 'Es wird ganz flach: Alle vier Ecken liegen auf einer Geraden, und $\vec a + \vec b$ und $\vec a - \vec b$ liegen auf derselben Geraden wie $\vec a$.'
      - 'Es bleibt ein echtes Parallelogramm mit Fläche, nur schmaler.'
      - '$\vec a + \vec b$ wird immer zum Nullvektor.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Wenn beide Pfeile in dieselbe Richtung zeigen, gibt es keine zweite Richtung mehr, in die das Parallelogramm sich ausdehnen könnte.'
      - wert: 2
        meldung: 'Zwei gleich gerichtete Pfeile heben sich nicht auf, sie verlängern sich. Zum Nullvektor wird nur $\vec a + (-\vec a)$.'
loesung: |
  Zeigen $\vec a$ und $\vec b$ in dieselbe Richtung, so ist $\vec b = \lambda\vec a$. Dann sind auch $\vec a + \vec b = (1 + \lambda)\vec a$ und $\vec a - \vec b = (1 - \lambda)\vec a$ Vielfache von $\vec a$.
  ---
  Alle Pfeile liegen also auf einer Geraden, und das Parallelogramm hat keine Fläche mehr. Prüfe das jetzt im Widget.
```

```widget
name: vektoren
titel: Summe und Differenz zweier Vektoren
props:
  a: [4, 1]
  b: [1, 3]
  zeige: [summe, differenz]
```

**Beobachte:** Zieh an den Spitzen von $\vec a$ und $\vec b$. Der grüne Pfeil $\vec a + \vec b$ ist immer die eine
Diagonale des aufgespannten Parallelogramms. Der violette gestrichelte Pfeil von der Spitze von $\vec b$ zur Spitze
von $\vec a$ ist $\vec a - \vec b$, die andere Diagonale. Das Widget zeichnet $\vec a - \vec b$ zusätzlich noch einmal
vom Ursprung aus. Ziehe dann $\vec b$ parallel zu $\vec a$.

**Erkläre:** Bei parallelen Pfeilen sind alle beteiligten Vektoren Vielfache von $\vec a$. Das Parallelogramm
fällt zu einer Strecke zusammen. Genau diese „Entartung“ wird später bei der linearen Abhängigkeit in
[6.10 Lineare Abhängigkeit, Linearkombination und Basis](/lernen/mathe3/vektoren/lineare-abhaengigkeit-linearkombination-und-basis) wichtig.

```reflexion
frage: Warum darfst du eine Vektorgleichung wie $3\vec x + \vec a = \vec b$ genauso umformen wie eine Zahlengleichung? Und welcher Umformungsschritt ist bei Vektoren verboten?
antwort: |
  Für Vektoren gelten dieselben Rechengesetze wie für Zahlen, solange man addiert, subtrahiert und mit Zahlen
  multipliziert. Man darf also auf beiden Seiten denselben Vektor abziehen und beide Seiten durch dieselbe
  **Zahl** teilen: $3\vec x = \vec b - \vec a$, also $\vec x = \tfrac13(\vec b - \vec a)$.

  Verboten ist das Teilen durch einen **Vektor**. Ein Bruch mit einem Vektor im Nenner ist nicht definiert.
  Fehlt eine Zahl als Faktor vor einem Vektor, vergleicht man stattdessen die Komponenten.
```

```aufgabe
id: ve-linearkombination
titel: Vielfache addieren
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Gegeben sind $\vec a = \begin{pmatrix} 2 \\ -1 \\ 3 \end{pmatrix}$ und $\vec b = \begin{pmatrix} -1 \\ 4 \\ 0 \end{pmatrix}$.
  Berechne $3\vec a - 2\vec b$.
teile:
  - typ: vektor
    label: '$3\vec a - 2\vec b$'
    loesung: ["3*2-2*(-1)", "3*(-1)-2*4", "3*3-2*0"]
    fehler:
      - wert: ["4", "5", "9"]
        meldung: 'Das ist $3\vec a + 2\vec b$. Das Minus vor $2\vec b$ ändert das Vorzeichen jeder Komponente von $2\vec b$.'
      - wert: ["8", "5", "9"]
        meldung: 'In der zweiten Komponente stimmt das Vorzeichen nicht: $-3 - 8 = -11$.'
hinweise:
  - 'Berechne zuerst $3\vec a$ und $2\vec b$ einzeln, dann subtrahiere komponentenweise.'
loesung: |
  **Ansatz:** Zuerst die Vielfachen bilden, dann komponentenweise subtrahieren.
  ---
  $3\vec a = \begin{pmatrix} 6 \\ -3 \\ 9 \end{pmatrix}$ und $2\vec b = \begin{pmatrix} -2 \\ 8 \\ 0 \end{pmatrix}$.
  ---
  $3\vec a - 2\vec b = \begin{pmatrix} 6 - (-2) \\ -3 - 8 \\ 9 - 0 \end{pmatrix} = \begin{pmatrix} 8 \\ -11 \\ 9 \end{pmatrix}$.
```

```aufgabe
id: ve-differenz-vorzeichen
titel: Differenz mit negativen Komponenten
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Berechne $\begin{pmatrix} -2 \\ 5 \\ 0 \end{pmatrix} - \begin{pmatrix} 3 \\ -1 \\ -4 \end{pmatrix}$.
teile:
  - typ: vektor
    loesung: ["-2-3", "5-(-1)", "0-(-4)"]
    fehler:
      - wert: ["1", "4", "-4"]
        meldung: 'Du hast addiert statt subtrahiert.'
      - wert: ["-5", "4", "-4"]
        meldung: 'Bei negativen Komponenten fehlt der Vorzeichenwechsel: $5 - (-1) = 6$ und $0 - (-4) = 4$.'
hinweise:
  - 'Setze negative Komponenten in Klammern und beachte: Minus minus ergibt plus.'
loesung: |
  **Ansatz:** komponentenweise subtrahieren, negative Zahlen in Klammern.
  ---
  $$\begin{pmatrix} -2 - 3 \\ 5 - (-1) \\ 0 - (-4) \end{pmatrix} = \begin{pmatrix} -5 \\ 6 \\ 4 \end{pmatrix}.$$
  **Probe:** $\begin{pmatrix} -5 \\ 6 \\ 4 \end{pmatrix} + \begin{pmatrix} 3 \\ -1 \\ -4 \end{pmatrix} = \begin{pmatrix} -2 \\ 5 \\ 0 \end{pmatrix}$. Es stimmt.
```

```aufgabe
id: ve-parallel-erkennen
titel: Parallele Vektoren erkennen
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Welche der folgenden Vektoren sind parallel zu $\vec a = \begin{pmatrix} 1 \\ -2 \\ 3 \end{pmatrix}$? Wähle alle passenden aus.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$\begin{pmatrix} -3 \\ 6 \\ -9 \end{pmatrix}$'
      - '$\begin{pmatrix} 2 \\ -4 \\ 6 \end{pmatrix}$'
      - '$\begin{pmatrix} 2 \\ -4 \\ -6 \end{pmatrix}$'
      - '$\begin{pmatrix} 0{,}5 \\ -1 \\ 1{,}5 \end{pmatrix}$'
      - '$\begin{pmatrix} 3 \\ -2 \\ 1 \end{pmatrix}$'
    richtig: [0, 1, 3]
    fehler:
      - wert: [0, 1, 2, 3]
        meldung: 'Beim dritten Vektor passt die letzte Komponente nicht: $\tfrac{2}{1} = 2$, aber $\tfrac{-6}{3} = -2$.'
      - wert: [1, 3]
        meldung: 'Auch ein Vielfaches mit negativem Faktor ist parallel. Prüfe den ersten Vektor: alle Quotienten sind $-3$.'
hinweise:
  - 'Teile jede Komponente des Kandidaten durch die passende Komponente von $\vec a$. Parallel heißt: alle Quotienten gleich.'
loesung: |
  **Ansatz:** Für jeden Kandidaten die Quotienten der Komponenten bilden.
  ---
  Erster Vektor: $-3, -3, -3$, parallel mit $\lambda = -3$ (Gegenrichtung). Zweiter: $2, 2, 2$, parallel. Vierter: $0{,}5;\ 0{,}5;\ 0{,}5$, parallel.
  ---
  Dritter: $2, 2, -2$, nicht parallel. Fünfter: $3;\ 1;\ \tfrac13$, nicht parallel. Richtig sind also der erste, zweite und vierte Vektor.
```

```aufgabe
id: ve-vektorgleichung
titel: Vektorgleichung lösen
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Bestimme $\vec x$ aus $\;4\vec x - \vec a = 2\vec x + 2\vec b\;$ mit
  $\vec a = \begin{pmatrix} 2 \\ 0 \\ -6 \end{pmatrix}$ und $\vec b = \begin{pmatrix} 1 \\ -3 \\ 5 \end{pmatrix}$.
teile:
  - typ: vektor
    label: '$\vec x$'
    loesung: ["(2+2*1)/2", "(0+2*(-3))/2", "(-6+2*5)/2"]
    fehler:
      - wert: ["4", "-6", "4"]
        meldung: 'Das ist $2\vec x$. Du musst noch durch $2$ teilen.'
      - wert: ["0", "-3", "8"]
        meldung: 'Beim Hinüberbringen von $-\vec a$ hat sich das Vorzeichen nicht geändert. Aus $4\vec x - \vec a = \ldots$ wird $\ldots + \vec a$.'
hinweise:
  - 'Forme zuerst allgemein nach $\vec x$ um, genau wie bei der Zahlengleichung $4x - a = 2x + 2b$.'
  - 'Bringe alle $\vec x$ nach links und $\vec a$ nach rechts. Teile am Ende durch die Zahl vor $\vec x$.'
loesung: |
  **Ansatz:** Für Vektoren gelten dieselben Umformungsregeln wie für Zahlen. Wir formen zuerst allgemein um und setzen erst am Schluss ein.
  ---
  Wir ziehen $2\vec x$ ab und addieren $\vec a$: $2\vec x = \vec a + 2\vec b$. Dann teilen wir durch $2$: $\vec x = \tfrac12\vec a + \vec b$.
  ---
  Einsetzen: $\vec x = \begin{pmatrix} 1 \\ 0 \\ -3 \end{pmatrix} + \begin{pmatrix} 1 \\ -3 \\ 5 \end{pmatrix} = \begin{pmatrix} 2 \\ -3 \\ 2 \end{pmatrix}$.
  ---
  **Probe:** $4\vec x - \vec a = \begin{pmatrix} 8 - 2 \\ -12 - 0 \\ 8 + 6 \end{pmatrix} = \begin{pmatrix} 6 \\ -12 \\ 14 \end{pmatrix}$ und $2\vec x + 2\vec b = \begin{pmatrix} 4 + 2 \\ -6 - 6 \\ 4 + 10 \end{pmatrix} = \begin{pmatrix} 6 \\ -12 \\ 14 \end{pmatrix}$. Beide Seiten sind gleich.
gefuehrt:
  - text: 'Bringe alle Summanden mit $\vec x$ auf die linke Seite und $\vec a$ auf die rechte. Welche Gleichung entsteht?'
    teil:
      typ: auswahl
      optionen: ['$2\vec x = \vec a + 2\vec b$', '$2\vec x = 2\vec b - \vec a$', '$6\vec x = \vec a + 2\vec b$']
      richtig: [0]
      fehler:
        - wert: 1
          meldung: '$-\vec a$ wechselt die Seite und wird dabei zu $+\vec a$.'
        - wert: 2
          meldung: '$2\vec x$ steht rechts mit Plus. Auf die linke Seite gebracht wird es abgezogen: $4\vec x - 2\vec x$.'
    erklaerung: '$4\vec x - 2\vec x = 2\vec x$ und $\vec a$ wandert mit Vorzeichenwechsel nach rechts.'
  - text: 'Teile durch $2$. Berechne dazu zuerst $\tfrac12\vec a$.'
    teil: { typ: vektor, loesung: ["1", "0", "-3"] }
    erklaerung: '$\tfrac12\vec a = \begin{pmatrix} 1 \\ 0 \\ -3 \end{pmatrix}$. Damit ist $\vec x = \tfrac12\vec a + \vec b$.'
  - text: 'Berechne $\vec x = \tfrac12\vec a + \vec b$.'
    teil: { typ: vektor, loesung: ["2", "-3", "2"] }
    erklaerung: 'Komponentenweise: $1 + 1 = 2$, $0 - 3 = -3$ und $-3 + 5 = 2$.'
  - text: 'Mach die Probe, indem du $\vec x$ in beide Seiten der ursprünglichen Gleichung einsetzt.'
    erklaerung: 'Beide Seiten ergeben $\begin{pmatrix} 6 \\ -12 \\ 14 \end{pmatrix}$. Die Lösung stimmt.'
```

```aufgabe
id: ve-parallel-parameter
titel: Parameter für Parallelität
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Bestimme $t$ und $s$ so, dass $\begin{pmatrix} t \\ 6 \\ -2 \end{pmatrix}$ und $\begin{pmatrix} 3 \\ s \\ 1 \end{pmatrix}$ parallel sind.
teile:
  - typ: zahl
    label: '$t$'
    loesung: "-2*3"
    fehler:
      - wert: "-1.5"
        meldung: 'Du hast den Faktor verkehrt herum angesetzt. Aus der dritten Komponente folgt: Der erste Vektor ist das $(-2)$-Fache des zweiten, nicht das $(-\tfrac12)$-Fache.'
  - typ: zahl
    label: '$s$'
    loesung: "6/(-2)"
    fehler:
      - wert: "-12"
        meldung: 'Aus $6 = \lambda\cdot s$ mit $\lambda = -2$ folgt $s = \frac{6}{-2}$. Du hast multipliziert statt geteilt.'
      - wert: "3"
        meldung: 'Das Vorzeichen stimmt nicht. $\lambda = -2$ ist negativ, also ist auch $s = \frac{6}{-2}$ negativ.'
hinweise:
  - 'Ansatz $\begin{pmatrix} t \\ 6 \\ -2 \end{pmatrix} = \lambda \begin{pmatrix} 3 \\ s \\ 1 \end{pmatrix}$. Das sind drei Gleichungen.'
  - 'Die dritte Komponente enthält keine Unbekannte außer $\lambda$. Bestimme damit $\lambda$ zuerst.'
loesung: |
  **Ansatz:** Parallel heißt, der eine Vektor ist ein Vielfaches des anderen: $\begin{pmatrix} t \\ 6 \\ -2 \end{pmatrix} = \lambda \begin{pmatrix} 3 \\ s \\ 1 \end{pmatrix}$. Komponentenweise: $t = 3\lambda$, $6 = \lambda s$ und $-2 = \lambda$.
  ---
  Aus der dritten Gleichung: $\lambda = -2$. Damit $t = 3\cdot(-2) = -6$ und $6 = -2s$, also $s = -3$.
  ---
  **Probe:** $\begin{pmatrix} -6 \\ 6 \\ -2 \end{pmatrix} = -2\begin{pmatrix} 3 \\ -3 \\ 1 \end{pmatrix}$. Es stimmt.
```

```aufgabe
id: ve-roboterarm-wege
titel: Ein Roboterarm fährt mehrere Strecken
niveau: 2
lernziel: 1
kompetenz: modellieren
angabe: |
  Der Greifer eines Roboterarms steht im Punkt $P(10 \mid 0 \mid 5)$ (Angaben in cm). Er fährt zuerst um
  $\vec u = \begin{pmatrix} 12 \\ -5 \\ 3 \end{pmatrix}$, danach zweimal hintereinander um $\vec v = \begin{pmatrix} -4 \\ 6 \\ 1 \end{pmatrix}$ und
  zum Schluss um den Gegenvektor von $\vec w = \begin{pmatrix} 3 \\ 3 \\ -2 \end{pmatrix}$. Wo steht der Greifer am Ende?
teile:
  - typ: vektor
    label: 'Endpunkt'
    namen: ["x", "y", "z"]
    loesung: ["10+12-8-3", "0-5+12-3", "5+3+2+2"]
    fehler:
      - wert: ["17", "10", "8"]
        meldung: 'Du hast $\vec w$ addiert. Der Gegenvektor ist $-\vec w$, also wird $\vec w$ abgezogen.'
      - wert: ["15", "-2", "11"]
        meldung: '„Zweimal hintereinander um $\vec v$“ bedeutet $2\vec v$. Du hast $\vec v$ nur einmal gezählt.'
hinweise:
  - 'Der Endpunkt ist $P + \vec u + 2\vec v - \vec w$.'
  - 'Rechne zuerst $2\vec v$ aus und addiere dann alles komponentenweise. Achte auf das Minus vor $\vec w$.'
loesung: |
  **Ansatz:** Jede Fahrt ist eine Verschiebung. Der Endpunkt ist Punkt plus alle Verschiebungen: $E = P + \vec u + 2\vec v - \vec w$.
  ---
  $2\vec v = \begin{pmatrix} -8 \\ 12 \\ 2 \end{pmatrix}$ und $-\vec w = \begin{pmatrix} -3 \\ -3 \\ 2 \end{pmatrix}$.
  ---
  $E = (10 + 12 - 8 - 3 \mid 0 - 5 + 12 - 3 \mid 5 + 3 + 2 + 2) = (11 \mid 4 \mid 12)$.
  ---
  **Antwort:** Der Greifer steht am Ende in $(11 \mid 4 \mid 12)$. **Plausibel:** In $z$-Richtung sind alle drei Verschiebungen positiv ($3 + 2 + 2$), der Greifer steigt also um $7$ cm.
```

```aufgabe
id: ve-umformen-fehler
titel: Wo steckt der Fehler beim Umformen?
niveau: 3
lernziel: 1
kompetenz: begruenden
angabe: |
  Ein Mitschüler löst $3\vec x + \vec a = \vec b - \vec x$ mit $\vec a = \begin{pmatrix} 2 \\ -4 \\ 6 \end{pmatrix}$ und $\vec b = \begin{pmatrix} 6 \\ 0 \\ -2 \end{pmatrix}$ so:
  $$3\vec x - \vec x = \vec b - \vec a \quad\Longrightarrow\quad 2\vec x = \vec b - \vec a \quad\Longrightarrow\quad \vec x = \tfrac12(\vec b - \vec a) = \begin{pmatrix} 2 \\ 2 \\ -4 \end{pmatrix}.$$
  a) In welchem Schritt steckt der Fehler?

  b) Bestimme das richtige $\vec x$.
teile:
  - typ: auswahl
    label: 'a)'
    optionen:
      - 'Beim Hinüberbringen von $-\vec x$: Es müsste $3\vec x + \vec x$ heißen.'
      - 'Beim Hinüberbringen von $\vec a$: Es müsste $\vec b + \vec a$ heißen.'
      - 'Beim Teilen: Durch $2$ darf man einen Vektor nicht teilen.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$+\vec a$ wechselt die Seite und wird zu $-\vec a$. Dieser Schritt stimmt. Prüfe das $\vec x$ auf der rechten Seite.'
      - wert: 2
        meldung: 'Durch eine **Zahl** darf man immer teilen. Verboten ist nur das Teilen durch einen Vektor.'
  - typ: vektor
    label: 'b) $\vec x$'
    loesung: ["(6-2)/4", "(0+4)/4", "(-2-6)/4"]
    fehler:
      - wert: ["2", "2", "-4"]
        meldung: 'Das ist das Ergebnis des Mitschülers. Auf der linken Seite steht nach richtigem Umformen $4\vec x$, nicht $2\vec x$.'
hinweise:
  - 'Setze das Ergebnis des Mitschülers zur Probe in die ursprüngliche Gleichung ein. Stimmen beide Seiten?'
  - 'Auf der rechten Seite steht $-\vec x$. Bringt man es nach links, wird daraus $+\vec x$.'
loesung: |
  **Ansatz:** Wir prüfen jeden Umformungsschritt. Beim Hinüberbringen ändert ein Summand sein Vorzeichen.
  ---
  a) Rechts steht $-\vec x$. Nach links gebracht wird daraus $+\vec x$, also $3\vec x + \vec x = 4\vec x$. Der Mitschüler hat $3\vec x - \vec x$ geschrieben. Das ist der Fehler.
  ---
  b) Richtig: $4\vec x = \vec b - \vec a = \begin{pmatrix} 4 \\ 4 \\ -8 \end{pmatrix}$, also $\vec x = \tfrac14\begin{pmatrix} 4 \\ 4 \\ -8 \end{pmatrix} = \begin{pmatrix} 1 \\ 1 \\ -2 \end{pmatrix}$.
  ---
  **Probe:** $3\vec x + \vec a = \begin{pmatrix} 3 + 2 \\ 3 - 4 \\ -6 + 6 \end{pmatrix} = \begin{pmatrix} 5 \\ -1 \\ 0 \end{pmatrix}$ und $\vec b - \vec x = \begin{pmatrix} 6 - 1 \\ 0 - 1 \\ -2 + 2 \end{pmatrix} = \begin{pmatrix} 5 \\ -1 \\ 0 \end{pmatrix}$. Beide Seiten stimmen überein.
```

## Betrag, Abstand und Einheitsvektor

```aufgabe
id: ve-betrag-vorwissen
titel: Eine Wurzel aus einer Quadratsumme
art: check
niveau: 1
angabe: |
  Berechne $\sqrt{8^2 + 15^2}$ ohne Taschenrechner. Zum Nachlesen:
  [Kapitel 1, Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln).
teile:
  - typ: zahl
    loesung: "sqrt(8^2 + 15^2)"
    fehler:
      - wert: "23"
        meldung: 'Die Wurzel aus einer Summe ist nicht die Summe der Wurzeln. Rechne zuerst $64 + 225$ und ziehe dann die Wurzel.'
      - wert: "289"
        meldung: 'Das ist die Summe der Quadrate. Die Wurzel fehlt noch.'
loesung: |
  Zuerst unter der Wurzel rechnen: $8^2 + 15^2 = 64 + 225 = 289$.
  ---
  Dann die Wurzel: $\sqrt{289} = 17$, denn $17^2 = 289$.
```

Ein Vektor hat eine Länge. In dieser Lektion lernst du, wie man sie aus den Komponenten berechnet, wie man
damit Abstände zwischen Punkten misst und wie man einen Vektor auf die Länge $1$ bringt. Das Werkzeug dafür
ist der Satz von Pythagoras aus [Kapitel 5, Das rechtwinklige Dreieck](/lernen/mathe3/trigonometrie/das-rechtwinklige-dreieck).

### Die Länge eines Vektors

In der Ebene ist der Pfeil $\vec a = \begin{pmatrix} a_1 \\ a_2 \end{pmatrix}$ die Hypotenuse eines
rechtwinkligen Dreiecks. Seine Katheten sind $|a_1|$ und $|a_2|$ lang, also die Komponenten ohne
Vorzeichen. Nach Pythagoras ist die Länge des Pfeils $\sqrt{a_1^2 + a_2^2}$. Das Vorzeichen einer
Komponente spielt keine Rolle, weil sie quadriert wird.

Im Raum wendet man Pythagoras zweimal an. Zuerst ist die Diagonale in der Grundfläche
$\sqrt{a_1^2 + a_2^2}$ lang. Diese Diagonale steht normal auf der $z$-Richtung. Sie bildet mit der
$z$-Komponente ein zweites rechtwinkliges Dreieck. Dessen Hypotenuse ist
$$\sqrt{\Big(\sqrt{a_1^2 + a_2^2}\Big)^2 + a_3^2} = \sqrt{a_1^2 + a_2^2 + a_3^2}.$$

:::definition[Betrag (Länge) eines Vektors]
Der **Betrag** eines Vektors ist seine Länge. Man schreibt $|\vec a|$ und liest „Betrag von $\vec a$“.
$$|\vec a| = \sqrt{a_1^2 + a_2^2} \quad\text{in } \R^2, \qquad |\vec a| = \sqrt{a_1^2 + a_2^2 + a_3^2} \quad\text{in } \R^3.$$
Der **Abstand** zweier Punkte $A$ und $B$ ist die Länge ihres Verbindungsvektors:
$d(A, B) = \big|\overrightarrow{AB}\big|$. Der Buchstabe $d$ kommt vom lateinischen *distantia*.
:::

:::beispiel[Beträge berechnen]
**In der Ebene:** $\vec a = \begin{pmatrix} -6 \\ 8 \end{pmatrix}$. Wir quadrieren jede Komponente, addieren und ziehen
die Wurzel: $|\vec a| = \sqrt{(-6)^2 + 8^2} = \sqrt{36 + 64} = \sqrt{100} = 10$. Das Minus ist durch das
Quadrieren verschwunden.

**Im Raum:** $\vec b = \begin{pmatrix} 2 \\ -3 \\ 6 \end{pmatrix}$. Ebenso: $|\vec b| = \sqrt{4 + 9 + 36} = \sqrt{49} = 7$.

**Nichtbeispiel:** $|\vec a|$ ist **nicht** $-6 + 8 = 2$ und auch nicht $6 + 8 = 14$. Die Länge der
Hypotenuse ist kürzer als der Umweg über die beiden Katheten.
:::

```plot
x: [-8, 2]
y: [-1, 9]
gleich: true
vektoren:
  - { von: [0, 0], nach: [-6, 8], label: "a = (−6, 8), |a| = 10", farbe: 0 }
strecken:
  - { von: [0, 0], nach: [-6, 0], gestrichelt: true, farbe: 2 }
  - { von: [-6, 0], nach: [-6, 8], gestrichelt: true, farbe: 2 }
punkte:
  - { x: -3, y: 0, label: "6" }
  - { x: -6, y: 4, label: "8" }
beschriftung: Der Betrag eines Vektors ist die Hypotenuse des rechtwinkligen Dreiecks aus seinen Komponenten. Für a = (−6, 8) sind die Katheten 6 und 8 lang, also ist |a| = √(36 + 64) = 10.
```

:::beispiel[Länge eines Spannseils]
Ein Mast steht im Ursprung. Ein Spannseil führt von der Mastspitze $A(0 \mid 0 \mid 12)$ zu einem
Bodenanker $B(5 \mid -4 \mid 0)$. Alle Angaben sind in Metern. Wie lang ist das Seil?

**Schritt 1:** Das Seil ist die Strecke $AB$. Wir berechnen den Verbindungsvektor:
$\overrightarrow{AB} = \begin{pmatrix} 5 \\ -4 \\ -12 \end{pmatrix}$ m.

**Schritt 2:** Die Länge ist der Betrag: $\big|\overrightarrow{AB}\big| = \sqrt{25 + 16 + 144} = \sqrt{185} \approx 13{,}60$ m.

**Schritt 3:** Plausibilität: Das Seil muss länger sein als der Mast ($12$ m) und länger als der
Abstand des Ankers vom Mastfuß ($\sqrt{25 + 16} \approx 6{,}40$ m). Beides stimmt.
:::

:::achtung[Vorzeichen und Wurzel]
Zwei Fehler kommen beim Betrag immer wieder vor. Beide zeigen wir an $\vec a = \begin{pmatrix} -3 \\ 4 \end{pmatrix}$.

- **Falsch:** $|\vec a| = \sqrt{-9 + 16} = \sqrt 7$. Hier wurde $(-3)^2$ als $-9$ gerechnet. Richtig ist
  $(-3)^2 = 9$, also $|\vec a| = \sqrt{9 + 16} = 5$.
- **Falsch:** $|\vec a| = \sqrt 9 + \sqrt{16} = 3 + 4 = 7$. Die Wurzel einer Summe ist nicht die Summe der
  Wurzeln. Erst addieren, dann die Wurzel ziehen.
:::

```aufgabe
id: ve-betrag-check-schaetzen
titel: Schätzen vor dem Rechnen
art: check
niveau: 1
angabe: |
  Ohne zu rechnen: Wie lang ist ungefähr der Vektor $\begin{pmatrix} 10 \\ 1 \end{pmatrix}$?
teile:
  - typ: auswahl
    optionen: ['etwas mehr als $10$', 'genau $11$', 'ungefähr $9$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$11$ wäre der Umweg über beide Katheten. Die Hypotenuse ist kürzer als dieser Umweg.'
      - wert: 2
        meldung: 'Die Hypotenuse ist immer mindestens so lang wie die längste Kathete, hier also mindestens $10$.'
loesung: |
  Die Hypotenuse ist länger als jede Kathete, aber kürzer als beide zusammen. Also liegt die Länge zwischen $10$ und $11$.
  ---
  Genau: $\sqrt{100 + 1} = \sqrt{101} \approx 10{,}05$. Die kleine Komponente ändert die Länge kaum.
```

### Rechenregeln für den Betrag

:::satz[Eigenschaften des Betrags]
Für alle Vektoren $\vec a, \vec b$ und alle Zahlen $\lambda$ gilt:

1. $|\vec a| \ge 0$. Und $|\vec a| = 0$ gilt genau dann, wenn $\vec a$ der Nullvektor ist.
2. $|\lambda\vec a| = |\lambda|\cdot|\vec a|$.
3. **Dreiecksungleichung:** $|\vec a + \vec b| \le |\vec a| + |\vec b|$.
:::

**Warum gilt Regel 2?** Wir rechnen in der Ebene nach:
$\sqrt{(\lambda a_1)^2 + (\lambda a_2)^2} = \sqrt{\lambda^2(a_1^2 + a_2^2)} = \sqrt{\lambda^2}\cdot\sqrt{a_1^2 + a_2^2}$.
Dabei ist $\sqrt{\lambda^2} = |\lambda|$, denn eine Wurzel ist nie negativ. Ein Beispiel: $\big|-3\vec a\big|$ ist
dreimal so lang wie $\vec a$, nicht „minus dreimal“.

**Was sagt Regel 3?** Der direkte Weg ist nie länger als ein Umweg. Für $\vec a = \begin{pmatrix} 3 \\ 0 \end{pmatrix}$ und
$\vec b = \begin{pmatrix} 0 \\ 4 \end{pmatrix}$ ist $|\vec a + \vec b| = 5$, aber $|\vec a| + |\vec b| = 7$. Gleichheit gilt nur,
wenn $\vec a$ und $\vec b$ in dieselbe Richtung zeigen oder einer von beiden der Nullvektor ist.

### Einheitsvektoren

Oft braucht man einen Vektor, der nur eine **Richtung** angibt und die Länge $1$ hat. So einen Vektor nennt
man **Einheitsvektor**. Ein Beispiel ist $\begin{pmatrix} 0 \\ 1 \end{pmatrix}$, er zeigt eine Einheit nach oben.

:::definition[Einheitsvektor, normieren]
Ein Vektor der Länge $1$ heißt **Einheitsvektor**. Zu jedem Vektor $\vec a \neq \vec 0$ ist
$$\vec a_0 = \frac{1}{|\vec a|}\,\vec a$$
der Einheitsvektor in Richtung von $\vec a$. Diesen Vorgang nennt man **Normieren**. Der kleine Index $0$
erinnert an „auf Länge eins gebracht“.
:::

Warum hat $\vec a_0$ die Länge $1$? Nach Regel 2 ist $|\vec a_0| = \frac{1}{|\vec a|}\cdot|\vec a| = 1$.

:::beispiel[Einen Vektor normieren]
Wir normieren $\vec b = \begin{pmatrix} 2 \\ -3 \\ 6 \end{pmatrix}$.

**Schritt 1:** Länge berechnen: $|\vec b| = \sqrt{4 + 9 + 36} = 7$.

**Schritt 2:** durch die Länge teilen: $\vec b_0 = \tfrac17\begin{pmatrix} 2 \\ -3 \\ 6 \end{pmatrix} \approx \begin{pmatrix} 0{,}286 \\ -0{,}429 \\ 0{,}857 \end{pmatrix}$.

**Schritt 3:** Probe: $\big(\tfrac27\big)^2 + \big(\tfrac{-3}{7}\big)^2 + \big(\tfrac67\big)^2 = \tfrac{4 + 9 + 36}{49} = 1$. Es stimmt.

**Nichtbeispiel:** $\begin{pmatrix} 1 \\ 1 \end{pmatrix}$ ist **kein** Einheitsvektor, obwohl nur Einsen darin stehen. Seine
Länge ist $\sqrt 2 \approx 1{,}41$.
:::

:::achtung[Durch das Quadrat der Länge geteilt]
Jemand normiert $\vec b = \begin{pmatrix} 2 \\ -3 \\ 6 \end{pmatrix}$ so: $|\vec b|^2 = 49$, also $\vec b_0 = \tfrac{1}{49}\begin{pmatrix} 2 \\ -3 \\ 6 \end{pmatrix}$.
Das ist falsch. Dieser Vektor hat die Länge $\tfrac{7}{49} = \tfrac17$, nicht $1$. Man teilt durch die
**Länge** $7$, nicht durch ihr Quadrat. Die Probe „Länge ist $1$“ deckt den Fehler sofort auf.
:::

:::pruefung
„Normieren Sie den Vektor“ heißt: durch seine Länge teilen. Schreib das Ergebnis exakt, zum Beispiel
$\tfrac17\begin{pmatrix} 2 \\ -3 \\ 6 \end{pmatrix}$, und nicht nur gerundet. Mach dann die Probe: Die Summe der
quadrierten Komponenten muss $1$ ergeben. Das kostet zehn Sekunden und deckt Fehler beim Normieren sofort auf,
etwa das Teilen durch $|\vec a|^2$ statt durch $|\vec a|$.
:::

### Eine Strecke in eine Richtung abtragen

Einheitsvektoren braucht man, wenn man von einem Punkt aus **eine bestimmte Strecke in eine bestimmte
Richtung** gehen will. Der Punkt, der von $A$ aus im Abstand $d$ in Richtung $\vec v$ liegt, ist
$$P = A + d\cdot\vec v_0.$$
Dabei ist $d$ die gewünschte Länge und $\vec v_0$ der Einheitsvektor in Richtung $\vec v$. Weil $\vec v_0$ die
Länge $1$ hat, hat $d\cdot\vec v_0$ genau die Länge $d$.

Ein Beispiel: Von $A(2 \mid 0 \mid -1)$ aus sollen wir $6$ Einheiten in Richtung $\vec v = \begin{pmatrix} 1 \\ 2 \\ 2 \end{pmatrix}$
gehen. Es ist $|\vec v| = 3$, also $\vec v_0 = \tfrac13\vec v$. Damit ist $6\vec v_0 = 2\vec v = \begin{pmatrix} 2 \\ 4 \\ 4 \end{pmatrix}$ und
$P = (4 \mid 4 \mid 3)$.

Zum Rechnen ohne Taschenrechner helfen einige Vektoren mit ganzzahliger Länge. In der Ebene sind das
etwa $(3, 4)$ mit Länge $5$, $(5, 12)$ mit Länge $13$ und $(8, 15)$ mit Länge $17$. Im Raum sind es etwa
$(1, 2, 2)$ mit Länge $3$, $(2, 3, 6)$ mit Länge $7$, $(1, 4, 8)$ mit Länge $9$ und $(2, 6, 9)$ mit Länge $11$.
Die Vorzeichen und die Reihenfolge der Komponenten darf man dabei beliebig ändern.

```reflexion
frage: Warum verschwindet beim Betrag das Vorzeichen jeder Komponente, beim Einheitsvektor aber nicht?
antwort: |
  Beim Betrag wird jede Komponente quadriert. Ein Quadrat ist nie negativ, das Vorzeichen fällt also weg. Das
  passt zur Anschauung: Eine Länge ist immer positiv, egal in welche Richtung der Pfeil zeigt.

  Beim Normieren teilt man jede Komponente durch die positive Zahl $|\vec a|$. Dabei bleibt jedes Vorzeichen
  erhalten. Das muss so sein, denn der Einheitsvektor soll in **dieselbe Richtung** zeigen wie $\vec a$, und die
  Richtung steckt in den Vorzeichen.
```

:::merke[Rezept: Längen und Einheitsvektoren]
1. Betrag: jede Komponente quadrieren, addieren, Wurzel ziehen.
2. Abstand zweier Punkte: zuerst den Verbindungsvektor, dann seinen Betrag.
3. Normieren: durch die Länge teilen, Probe „Länge $1$“.
4. Strecke $d$ in Richtung $\vec v$ abtragen: $P = A + d\cdot\vec v_0$.
:::

```aufgabe
id: ve-betrag-einheit
titel: Betrag und Einheitsvektor
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Bestimme die Länge von $\vec a = \begin{pmatrix} 4 \\ -4 \\ 7 \end{pmatrix}$ und den Einheitsvektor $\vec a_0$.
teile:
  - typ: zahl
    label: '$|\vec a|$'
    loesung: "sqrt(4^2+4^2+7^2)"
    anzeige: '9'
    fehler:
      - wert: "7"
        meldung: 'Du hast $(-4)^2$ als $-16$ gerechnet. Ein Quadrat ist nie negativ: $(-4)^2 = 16$.'
      - wert: "81"
        meldung: 'Das ist $|\vec a|^2$. Zieh noch die Wurzel.'
  - typ: vektor
    label: '$\vec a_0$'
    loesung: ["4/9", "-4/9", "7/9"]
    anzeige: '\tfrac{1}{9}\begin{pmatrix} 4 \\ -4 \\ 7 \end{pmatrix}'
    fehler:
      - wert: ["4/81", "-4/81", "7/81"]
        meldung: 'Du hast durch $|\vec a|^2 = 81$ geteilt. Normieren heißt: durch die Länge $9$ teilen.'
      - wert: ["4/9", "4/9", "7/9"]
        meldung: 'Beim Normieren bleibt jedes Vorzeichen erhalten, sonst ändert sich die Richtung.'
hinweise:
  - 'Quadriere jede Komponente, addiere, ziehe die Wurzel. Dann teile jede Komponente durch diese Länge.'
loesung: |
  **Ansatz:** Betrag nach Pythagoras im Raum, dann durch den Betrag teilen.
  ---
  $|\vec a| = \sqrt{16 + 16 + 49} = \sqrt{81} = 9$.
  ---
  $\vec a_0 = \tfrac19\begin{pmatrix} 4 \\ -4 \\ 7 \end{pmatrix} \approx \begin{pmatrix} 0{,}444 \\ -0{,}444 \\ 0{,}778 \end{pmatrix}$. **Probe:** $\tfrac{16 + 16 + 49}{81} = 1$. Es stimmt.
```

```aufgabe
id: ve-abstand-punkte
titel: Abstand zweier Punkte
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Wie weit sind $P(1 \mid 2 \mid -1)$ und $Q(3 \mid -4 \mid 2)$ voneinander entfernt?
teile:
  - typ: zahl
    label: '$d(P, Q)$'
    loesung: "sqrt(2^2 + (-6)^2 + 3^2)"
    anzeige: '7'
    fehler:
      - wert: "sqrt(21)"
        meldung: 'Du hast die Koordinaten der Punkte addiert. Für den Abstand brauchst du den Verbindungsvektor, also eine Differenz.'
      - wert: "49"
        meldung: 'Das ist das Quadrat des Abstands. Die Wurzel fehlt noch.'
hinweise:
  - 'Berechne zuerst $\overrightarrow{PQ} = Q - P$ und dann seinen Betrag.'
loesung: |
  **Ansatz:** Der Abstand ist der Betrag des Verbindungsvektors.
  ---
  $\overrightarrow{PQ} = \begin{pmatrix} 3 - 1 \\ -4 - 2 \\ 2 - (-1) \end{pmatrix} = \begin{pmatrix} 2 \\ -6 \\ 3 \end{pmatrix}$.
  ---
  $d(P, Q) = \sqrt{4 + 36 + 9} = \sqrt{49} = 7$ Längeneinheiten.
```

```aufgabe
id: ve-einheitsvektor-ebene
titel: Einheitsvektor in der Ebene
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Bestimme den Einheitsvektor in Richtung $\vec a = \begin{pmatrix} -5 \\ 12 \end{pmatrix}$.
teile:
  - typ: vektor
    label: '$\vec a_0$'
    loesung: ["-5/13", "12/13"]
    fehler:
      - wert: ["5/13", "12/13"]
        meldung: 'Das Minuszeichen gehört zur Richtung und bleibt erhalten. Nur beim Berechnen der Länge fällt es weg.'
      - wert: ["-5/169", "12/169"]
        meldung: 'Du hast durch $169 = 13^2$ geteilt. Geteilt wird durch die Länge $13$.'
hinweise:
  - '$|\vec a| = \sqrt{25 + 144}$. Teile jede Komponente durch diese Länge.'
loesung: |
  **Ansatz:** Erst die Länge, dann durch die Länge teilen.
  ---
  $|\vec a| = \sqrt{25 + 144} = \sqrt{169} = 13$, also $\vec a_0 = \tfrac{1}{13}\begin{pmatrix} -5 \\ 12 \end{pmatrix}$.
  ---
  **Probe:** $\tfrac{25 + 144}{169} = 1$. Es stimmt.
```

```aufgabe
id: ve-strecke-abtragen
titel: Eine Strecke in eine Richtung abtragen
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Der Greifer eines Roboters steht im Punkt $A(1 \mid 1 \mid 1)$ (Einheiten in cm). Er bewegt sich geradlinig
  $15$ cm weit in Richtung $\vec v = \begin{pmatrix} 2 \\ -1 \\ 2 \end{pmatrix}$. Bestimme den Endpunkt $P$.
teile:
  - typ: vektor
    label: '$P$'
    namen: ["x", "y", "z"]
    loesung: ["1+15*2/3", "1-15/3", "1+15*2/3"]
    fehler:
      - wert: ["31", "-14", "31"]
        meldung: 'Du hast $15\vec v$ addiert. $\vec v$ hat aber nicht die Länge $1$, sondern $3$. Damit wäre der Greifer $45$ cm gefahren. Normiere $\vec v$ zuerst.'
      - wert: ["10", "-5", "10"]
        meldung: 'Das ist nur die Verschiebung. Der Endpunkt ist $A$ plus diese Verschiebung.'
hinweise:
  - '$\vec v$ selbst hat nicht die Länge $15$. Normiere zuerst.'
  - '$|\vec v| = 3$, also $\vec v_0 = \tfrac13\vec v$. Dann ist $P = A + 15\,\vec v_0$.'
loesung: |
  **Ansatz:** Eine Strecke $d$ in Richtung $\vec v$ abtragen heißt $P = A + d\cdot\vec v_0$. Dazu brauchen wir den Einheitsvektor.
  ---
  $|\vec v| = \sqrt{4 + 1 + 4} = 3$, also $\vec v_0 = \tfrac13\begin{pmatrix} 2 \\ -1 \\ 2 \end{pmatrix}$.
  ---
  $15\,\vec v_0 = 5\vec v = \begin{pmatrix} 10 \\ -5 \\ 10 \end{pmatrix}$, also $P = (1 + 10 \mid 1 - 5 \mid 1 + 10) = (11 \mid -4 \mid 11)$.
  ---
  **Probe:** $\big|\overrightarrow{AP}\big| = |5\vec v| = 5\cdot 3 = 15$ cm. Es stimmt.
gefuehrt:
  - text: 'Wie lang ist der Richtungsvektor $\vec v$?'
    teil: { typ: zahl, loesung: "3", fehler: [ { wert: "9", meldung: 'Das ist $|\vec v|^2$. Zieh die Wurzel.' }, { wert: "5", meldung: 'Die Komponenten werden quadriert, nicht addiert: $4 + 1 + 4$.' } ] }
    erklaerung: '$|\vec v| = \sqrt{4 + 1 + 4} = \sqrt 9 = 3$.'
  - text: 'Bestimme den Einheitsvektor $\vec v_0$.'
    teil: { typ: vektor, loesung: ["2/3", "-1/3", "2/3"] }
    erklaerung: 'Jede Komponente durch $3$ teilen: $\vec v_0 = \tfrac13\begin{pmatrix} 2 \\ -1 \\ 2 \end{pmatrix}$.'
  - text: 'Welcher Vektor hat die Richtung von $\vec v$ und die Länge $15$?'
    teil: { typ: vektor, loesung: ["10", "-5", "10"], fehler: [ { wert: ["30", "-15", "30"], meldung: 'Das ist $15\vec v$ mit Länge $45$. Nimm $15\vec v_0$.' } ] }
    erklaerung: '$15\cdot\vec v_0 = 5\vec v = \begin{pmatrix} 10 \\ -5 \\ 10 \end{pmatrix}$.'
  - text: 'Addiere diesen Vektor zu $A$. Wo endet der Greifer?'
    teil: { typ: vektor, namen: ["x", "y", "z"], loesung: ["11", "-4", "11"] }
    erklaerung: '$P = (1 + 10 \mid 1 - 5 \mid 1 + 10) = (11 \mid -4 \mid 11)$.'
```

```aufgabe
id: ve-laenge-parameter
titel: Eine fehlende Komponente aus der Länge
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Der Vektor $\begin{pmatrix} t \\ 2 \\ -4 \end{pmatrix}$ soll die Länge $6$ haben. Bestimme die **positive** Zahl $t$.
teile:
  - typ: zahl
    label: '$t$'
    loesung: "sqrt(36 - 4 - 16)"
    fehler:
      - wert: "16"
        meldung: 'Das ist $t^2$. Du musst noch die Wurzel ziehen.'
      - wert: "sqrt(30)"
        meldung: 'Die Komponenten werden quadriert: Aus $2$ wird $4$ und aus $-4$ wird $16$. Du hast sie nicht quadriert abgezogen.'
hinweise:
  - 'Setze die Längenformel an: $\sqrt{t^2 + 2^2 + (-4)^2} = 6$.'
  - 'Quadriere beide Seiten, damit die Wurzel verschwindet. Löse dann nach $t^2$ und schließlich nach $t$.'
loesung: |
  **Ansatz:** Die Länge ist $\sqrt{t^2 + 4 + 16}$. Sie soll $6$ sein.
  ---
  Beide Seiten quadrieren: $t^2 + 20 = 36$, also $t^2 = 16$.
  ---
  $t = 4$ oder $t = -4$. Verlangt ist die positive Lösung, also $t = 4$. **Probe:** $\sqrt{16 + 4 + 16} = \sqrt{36} = 6$.
```

```aufgabe
id: ve-dreieck-art
titel: Welche Art von Dreieck?
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Gegeben sind $A(1 \mid 0 \mid 2)$, $B(3 \mid 2 \mid 3)$ und $C(-1 \mid 2 \mid 3)$. Berechne die drei Seitenlängen und entscheide,
  welche Art von Dreieck vorliegt.
teile:
  - typ: zahl
    label: '$|AB|$'
    loesung: "3"
    fehler:
      - wert: "9"
        meldung: 'Das ist $|AB|^2$. Zieh die Wurzel.'
  - typ: zahl
    label: '$|AC|$'
    loesung: "3"
  - typ: zahl
    label: '$|BC|$'
    loesung: "4"
  - typ: auswahl
    label: 'Art des Dreiecks'
    optionen: ['gleichseitig', 'gleichschenklig, aber nicht gleichseitig', 'alle Seiten verschieden lang']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Gleichseitig hieße: alle drei Seiten gleich lang. $|BC|$ ist aber länger als die anderen beiden.'
      - wert: 2
        meldung: 'Vergleiche $|AB|$ und $|AC|$ noch einmal.'
hinweise:
  - 'Berechne die drei Verbindungsvektoren $\overrightarrow{AB}$, $\overrightarrow{AC}$ und $\overrightarrow{BC}$.'
  - 'Bilde von jedem den Betrag. Gleichschenklig heißt: zwei Seiten sind gleich lang.'
loesung: |
  **Ansatz:** Seitenlängen sind Beträge der Verbindungsvektoren.
  ---
  $\overrightarrow{AB} = \begin{pmatrix} 2 \\ 2 \\ 1 \end{pmatrix}$, $|AB| = \sqrt{4 + 4 + 1} = 3$. $\overrightarrow{AC} = \begin{pmatrix} -2 \\ 2 \\ 1 \end{pmatrix}$, $|AC| = 3$.
  ---
  $\overrightarrow{BC} = \begin{pmatrix} -4 \\ 0 \\ 0 \end{pmatrix}$, $|BC| = 4$.
  ---
  **Antwort:** Zwei Seiten sind $3$ lang, eine ist $4$ lang. Das Dreieck ist gleichschenklig mit der Spitze $A$ und der Basis $BC$.
```

```aufgabe
id: ve-punkte-auf-achse
titel: Punkte auf der x-Achse mit vorgegebenem Abstand
niveau: 3
lernziel: 2
kompetenz: anwenden
angabe: |
  Bestimme alle Punkte $P$ auf der $x$-Achse, die vom Punkt $A(2 \mid 3 \mid -4)$ den Abstand $13$ haben.
  Gib die $x$-Koordinaten getrennt durch einen Strichpunkt an.
teile:
  - typ: menge
    label: '$x$-Koordinaten'
    loesung: ["14", "-10"]
    fehler:
      - wert: ["14"]
        meldung: 'Beim Wurzelziehen gibt es zwei Möglichkeiten: $x - 2 = 12$ und $x - 2 = -12$. Es gibt also zwei Punkte, auf jeder Seite einen.'
      - wert: ["12", "-12"]
        meldung: 'Das sind die Werte von $x - 2$. Gesucht ist $x$ selbst.'
hinweise:
  - 'Ein Punkt auf der $x$-Achse hat die Form $P(x \mid 0 \mid 0)$. Stelle $\big|\overrightarrow{AP}\big| = 13$ auf.'
  - 'Quadriere die Gleichung. Es entsteht $(x - 2)^2 + 9 + 16 = 169$. Löse nach $(x - 2)^2$ und dann nach $x$, siehe [Kapitel 2, Quadratische Gleichungen](/lernen/mathe3/gleichungen/quadratische-gleichungen).'
loesung: |
  **Ansatz:** Jeder Punkt der $x$-Achse hat die Form $P(x \mid 0 \mid 0)$. Wir verlangen, dass sein Abstand zu $A$ genau $13$ ist.
  ---
  $\overrightarrow{AP} = \begin{pmatrix} x - 2 \\ -3 \\ 4 \end{pmatrix}$, also $\sqrt{(x - 2)^2 + 9 + 16} = 13$.
  ---
  Quadrieren: $(x - 2)^2 + 25 = 169$, also $(x - 2)^2 = 144$. Daraus folgt $x - 2 = 12$ oder $x - 2 = -12$.
  ---
  $x = 14$ oder $x = -10$. **Antwort:** $P_1(14 \mid 0 \mid 0)$ und $P_2(-10 \mid 0 \mid 0)$. **Probe für $P_2$:** $\sqrt{144 + 9 + 16} = \sqrt{169} = 13$.
```

## Mittelpunkt, Teilungspunkt und Schwerpunkt

```aufgabe
id: ve-mitte-vorwissen
titel: Die Mitte zwischen zwei Zahlen
art: check
niveau: 1
angabe: |
  Welche Zahl liegt auf der Zahlengeraden genau in der Mitte zwischen $-3$ und $7$? Zum Nachlesen:
  [Kapitel 1, Betrag und Intervalle](/lernen/mathe3/zahlen/betrag-und-intervalle).
teile:
  - typ: zahl
    loesung: "(-3 + 7)/2"
    fehler:
      - wert: "5"
        meldung: '$5$ ist die halbe **Länge** des Intervalls, also der Abstand von der Mitte zu jedem Rand. Gesucht ist aber die Lage der Mitte.'
      - wert: "4"
        meldung: 'Das ist $-3 + 7$. Die Mitte ist der Mittelwert, du musst also noch durch $2$ teilen.'
loesung: |
  Die Mitte ist der Mittelwert der beiden Zahlen: $\frac{-3 + 7}{2} = \frac{4}{2} = 2$.
  ---
  Probe: Von $-3$ bis $2$ sind es $5$ Einheiten, von $2$ bis $7$ ebenfalls $5$.
```

Viele Prüfungsaufgaben fragen nach besonderen Punkten: der Mitte einer Strecke, einem Punkt, der eine
Strecke in einem bestimmten Verhältnis teilt, oder dem Schwerpunkt eines Dreiecks. Alle diese Punkte
entstehen nach demselben Muster: **Punkt plus ein Teil eines Verbindungsvektors**. Diese Lektion zeigt das
Muster und die daraus folgenden Formeln.

### Mittelpunkt einer Strecke

Den Mittelpunkt $M$ der Strecke $AB$ erreichst du, indem du von $A$ aus den halben Weg nach $B$ gehst. In
Vektoren:
$$M = A + \tfrac12\overrightarrow{AB} = A + \tfrac12(B - A) = A + \tfrac12 B - \tfrac12 A = \tfrac12(A + B).$$
Im letzten Schritt haben wir $A - \tfrac12 A = \tfrac12 A$ zusammengefasst.

:::satz[Mittelpunkt]
Der Mittelpunkt der Strecke $AB$ ist
$$M = \frac{A + B}{2}.$$
In Koordinaten ist jede Koordinate von $M$ der Mittelwert der entsprechenden Koordinaten von $A$ und $B$.
:::

Die Herleitung zeigt auch, warum $\tfrac12(A + B)$ trotz der Warnung vor „Punkt plus Punkt“ aus
[6.1 Was ist ein Vektor?](/lernen/mathe3/vektoren/was-ist-ein-vektor-pfeile-punkte-und-koordinaten) sinnvoll ist.
Es ist nur eine Abkürzung für $A + \tfrac12(B - A)$, also für „Punkt plus Vektor“.

:::beispiel[Mittelpunkte berechnen]
**Im Raum:** $A(-3 \mid 5 \mid 2)$ und $B(7 \mid 1 \mid -4)$. Jede Koordinate mitteln:
$$M = \left(\tfrac{-3 + 7}{2} \;\Big|\; \tfrac{5 + 1}{2} \;\Big|\; \tfrac{2 + (-4)}{2}\right) = (2 \mid 3 \mid -1).$$
**Anwendung:** Zwei Funkmasten stehen in $A(2 \mid -1)$ und $B(8 \mid 5)$, Angaben in Kilometern. Ein
Techniker will genau in der Mitte zwischen beiden parken. Er fährt zu $M = \left(\tfrac{2 + 8}{2} \;\Big|\; \tfrac{-1 + 5}{2}\right) = (5 \mid 2)$.
Probe: Von $A$ nach $M$ geht es um $\begin{pmatrix} 3 \\ 3 \end{pmatrix}$ km, von $M$ nach $B$ ebenfalls um $\begin{pmatrix} 3 \\ 3 \end{pmatrix}$ km.
:::

:::achtung[Halber Vektor statt Mittelpunkt]
Für $A(2 \mid 4)$ und $B(6 \mid 8)$ rechnet jemand $M = \tfrac12(B - A) = (2 \mid 2)$. Das ist falsch.
$\tfrac12(B - A) = \begin{pmatrix} 2 \\ 2 \end{pmatrix}$ ist ein **Vektor**: die halbe Verschiebung von $A$ nach $B$. Den
Mittelpunkt erhält man erst, wenn man diese halbe Verschiebung an $A$ anhängt:
$M = A + \tfrac12(B - A) = (4 \mid 6)$. Mit der Formel geht es direkt: $\tfrac12(A + B) = \tfrac12(8 \mid 12) = (4 \mid 6)$.
:::

### Spiegeln an einem Punkt

Spiegelst du einen Punkt $P$ an einem Punkt $Z$, so liegt der Bildpunkt $P'$ auf der anderen Seite von $Z$,
gleich weit entfernt. Dann ist $Z$ genau der Mittelpunkt von $P$ und $P'$. Aus $Z = \tfrac12(P + P')$ folgt
durch Umformen:
$$P' = 2Z - P = Z + \overrightarrow{PZ}.$$
In Worten: Du gehst von $P$ zu $Z$ und dann noch einmal denselben Vektor weiter. Ein Beispiel: $P(1 \mid 4)$
wird an $Z(3 \mid 1)$ gespiegelt. Dann ist $P' = (6 - 1 \mid 2 - 4) = (5 \mid -2)$. Probe: Die Mitte von $P$ und
$P'$ ist $(3 \mid 1) = Z$.

```aufgabe
id: ve-mitte-check-spiegel
titel: Wo liegt der Spiegelpunkt?
art: check
niveau: 1
angabe: |
  Der Punkt $P(0 \mid 0)$ wird am Punkt $Z(2 \mid 1)$ gespiegelt. Wo liegt der Bildpunkt $P'$?
teile:
  - typ: auswahl
    optionen: ['$(4 \mid 2)$', '$(1 \mid 0{,}5)$', '$(-2 \mid -1)$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Das ist die Mitte zwischen $P$ und $Z$. Der Spiegelpunkt liegt aber **hinter** $Z$, gleich weit wie $P$ davor.'
      - wert: 2
        meldung: 'Dieser Punkt liegt auf der falschen Seite. $P'' $ muss von $P$ aus gesehen hinter $Z$ liegen.'
loesung: |
  Von $P$ nach $Z$ geht es um $\begin{pmatrix} 2 \\ 1 \end{pmatrix}$. Dieselbe Verschiebung noch einmal ab $Z$ ergibt $(4 \mid 2)$.
  ---
  Mit der Formel: $P' = 2Z - P = (4 \mid 2) - (0 \mid 0) = (4 \mid 2)$.
```

### Teilungspunkt

Allgemeiner kann man nicht nur den halben, sondern einen beliebigen Bruchteil $\lambda$ des Weges von $A$
nach $B$ gehen. Der Punkt
$$T = A + \lambda\cdot\overrightarrow{AB}, \qquad 0 \le \lambda \le 1,$$
liegt dann auf der Strecke $AB$. Dabei ist $\lambda$ der Anteil des Weges, den man schon zurückgelegt hat.

Oft ist ein **Teilungsverhältnis** gegeben. „$T$ teilt $AB$ im Verhältnis $m : n$“ bedeutet: Die Teilstrecke
von $A$ bis $T$ verhält sich zur Teilstrecke von $T$ bis $B$ wie $m$ zu $n$. Die ganze Strecke besteht dann
aus $m + n$ gleichen Teilen. Bis $T$ sind es $m$ davon, also
$$\lambda = \frac{m}{m + n}.$$

:::beispiel[Eine Strecke im Verhältnis 1 : 2 teilen]
Gegeben sind $A(-2 \mid 1 \mid 3)$ und $B(4 \mid 7 \mid -6)$. Gesucht ist der Punkt $T$, der $AB$ im Verhältnis
$1 : 2$ teilt, von $A$ aus gezählt.

**Schritt 1:** Anteil bestimmen. Die Strecke hat $1 + 2 = 3$ Teile, bis $T$ ist es einer. Also $\lambda = \tfrac13$.

**Schritt 2:** Verbindungsvektor: $\overrightarrow{AB} = \begin{pmatrix} 6 \\ 6 \\ -9 \end{pmatrix}$, also $\tfrac13\overrightarrow{AB} = \begin{pmatrix} 2 \\ 2 \\ -3 \end{pmatrix}$.

**Schritt 3:** $T = A + \tfrac13\overrightarrow{AB} = (-2 + 2 \mid 1 + 2 \mid 3 - 3) = (0 \mid 3 \mid 0)$.

**Schritt 4:** Kontrolle: Von $T$ nach $B$ sind es $\begin{pmatrix} 4 \\ 4 \\ -6 \end{pmatrix}$, also genau das Doppelte von
$\overrightarrow{AT}$. Das Verhältnis ist $1 : 2$.
:::

:::achtung[Das Verhältnis falsch in einen Anteil übersetzt]
Gegeben sind $A(0 \mid 0)$ und $B(9 \mid 6)$. Gesucht ist der Punkt, der $AB$ im Verhältnis $2 : 1$ teilt.
Ein häufiger Fehler ist $\lambda = \tfrac12$ (weil „2 zu 1“) oder $\lambda = \tfrac13$ (von der falschen Seite
gezählt). Mit $\lambda = \tfrac13$ erhält man $(3 \mid 2)$, also den Punkt, der im Verhältnis $1 : 2$ teilt.

Richtig: Die Strecke hat $2 + 1 = 3$ Teile, bis $T$ sind es $2$. Also $\lambda = \tfrac23$ und
$T = \tfrac23\begin{pmatrix} 9 \\ 6 \end{pmatrix} = (6 \mid 4)$. **Kontrolle:** $T$ muss näher bei $B$ liegen, weil der erste Teil
doppelt so lang ist wie der zweite.
:::

```aufgabe
id: ve-mitte-check-anteil
titel: Vom Verhältnis zum Anteil
art: check
niveau: 1
angabe: |
  Ein Punkt $T$ teilt die Strecke $AB$ im Verhältnis $3 : 1$, von $A$ aus gezählt. Welcher Anteil $\lambda$ gehört in $T = A + \lambda\overrightarrow{AB}$?
teile:
  - typ: auswahl
    optionen: ['$\lambda = \tfrac34$', '$\lambda = \tfrac13$', '$\lambda = 3$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Das Verhältnis $3 : 1$ ist kein Bruch $\tfrac13$. Die Strecke besteht aus $3 + 1 = 4$ gleichen Teilen.'
      - wert: 2
        meldung: 'Mit $\lambda = 3$ läge $T$ weit hinter $B$. Für Punkte auf der Strecke ist $\lambda$ höchstens $1$.'
loesung: |
  Die Strecke hat $3 + 1 = 4$ gleiche Teile. Bis $T$ sind es $3$ davon.
  ---
  Also $\lambda = \tfrac{3}{3 + 1} = \tfrac34$.
```

### Schwerpunkt eines Dreiecks

Eine **Schwerlinie** eines Dreiecks verbindet eine Ecke mit dem Mittelpunkt der gegenüberliegenden Seite.
Jedes Dreieck hat drei Schwerlinien. Sie schneiden sich in einem einzigen Punkt, dem **Schwerpunkt** $S$.
Ein Dreieck aus Karton, das man genau im Schwerpunkt auf eine Nadelspitze legt, bleibt im Gleichgewicht.

:::satz[Schwerpunkt]
Der Schwerpunkt des Dreiecks $ABC$ ist
$$S = \frac{A + B + C}{3}.$$
Er teilt jede Schwerlinie im Verhältnis $2 : 1$, von der Ecke aus gezählt.
:::

**Worum geht es im Beweis?** Wir rechnen den Punkt aus, der **eine** Schwerlinie im Verhältnis $2 : 1$
teilt. Dann zeigen wir, dass er auf **allen drei** Schwerlinien liegt.

:::beweis
**Schritt 1:** Die Schwerlinie von $A$ endet im Mittelpunkt $M_a = \tfrac12(B + C)$ der Seite $BC$.

**Schritt 2:** Der Punkt, der diese Schwerlinie im Verhältnis $2 : 1$ teilt, ist nach der Formel für den
Teilungspunkt mit $\lambda = \tfrac23$:
$$A + \tfrac23(M_a - A) = \tfrac13 A + \tfrac23\cdot\tfrac12(B + C) = \tfrac13(A + B + C).$$
**Schritt 3:** Das Ergebnis ändert sich nicht, wenn man $A$, $B$ und $C$ vertauscht. Rechnet man dasselbe für
die Schwerlinie von $B$ oder von $C$, kommt also derselbe Punkt heraus.

**Schritt 4:** Damit liegt dieser Punkt auf allen drei Schwerlinien und teilt jede im Verhältnis $2 : 1$.
:::

**Was haben wir gezeigt?** Die drei Schwerlinien treffen sich wirklich in einem Punkt, und dieser Punkt ist
einfach der Mittelwert der drei Ecken. Mit Zirkel und Lineal wäre dieser Beweis deutlich länger.

:::beispiel[Schwerpunkt in der Ebene]
Das Dreieck hat die Ecken $A(1 \mid 2)$, $B(7 \mid -1)$ und $C(4 \mid 8)$.

**Schritt 1:** Wir addieren die drei Punkte koordinatenweise: $(1 + 7 + 4 \mid 2 - 1 + 8) = (12 \mid 9)$.

**Schritt 2:** Wir teilen durch $3$: $S = (4 \mid 3)$.

**Schritt 3:** Kontrolle mit einer Schwerlinie: $M_a = \tfrac12(B + C) = (5{,}5 \mid 3{,}5)$. Der Punkt
$A + \tfrac23(M_a - A) = (1 + 3 \mid 2 + 1) = (4 \mid 3)$ ist tatsächlich $S$.
:::

```plot
x: [0, 8]
y: [-2, 9]
gleich: true
strecken:
  - { von: [1, 2], nach: [7, -1] }
  - { von: [7, -1], nach: [4, 8] }
  - { von: [4, 8], nach: [1, 2] }
  - { von: [1, 2], nach: [5.5, 3.5], gestrichelt: true, farbe: 1 }
  - { von: [7, -1], nach: [2.5, 5], gestrichelt: true, farbe: 1 }
  - { von: [4, 8], nach: [4, 0.5], gestrichelt: true, farbe: 1 }
punkte:
  - { x: 1, y: 2, label: "A" }
  - { x: 7, y: -1, label: "B" }
  - { x: 4, y: 8, label: "C" }
  - { x: 4, y: 3, label: "S(4 | 3)", farbe: 2 }
beschriftung: Das Dreieck A(1 | 2), B(7 | −1), C(4 | 8) mit seinen drei Schwerlinien (gestrichelt). Sie schneiden sich im Schwerpunkt S = (A + B + C)/3 = (4 | 3).
```

```reflexion
frage: 'Der Schwerpunkt teilt jede Schwerlinie im Verhältnis 2 : 1. Warum liegt er näher an der Seitenmitte als an der Ecke? Versuche eine Erklärung mit dem Gleichgewicht.'
antwort: |
  Rechnerisch: $S$ liegt bei $\lambda = \tfrac23$ des Weges von der Ecke zur Seitenmitte. Es bleibt also nur ein
  Drittel bis zur Seitenmitte, aber zwei Drittel liegen hinter $S$ in Richtung Ecke.

  Anschaulich: Zur Ecke hin wird das Dreieck immer schmaler, zur gegenüberliegenden Seite hin breiter. Auf der
  Seite der Seitenmitte liegt also mehr Fläche. Damit das Dreieck im Gleichgewicht ist, muss der Schwerpunkt
  näher an der breiten Seite liegen.
```

:::merke[Rezept: besondere Punkte]
- Mittelpunkt: $M = \tfrac12(A + B)$.
- Spiegelpunkt von $P$ an $Z$: $P' = 2Z - P$.
- Teilungspunkt im Verhältnis $m : n$ von $A$ aus: $T = A + \tfrac{m}{m + n}\overrightarrow{AB}$.
- Schwerpunkt: $S = \tfrac13(A + B + C)$.
- Rückwärts (ein Punkt gesucht): die Formel nach dem unbekannten Punkt umformen.
:::

```aufgabe
id: ve-mittelpunkt
titel: Mittelpunkt einer Strecke
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Bestimme den Mittelpunkt $M$ der Strecke $AB$ mit $A(-2 \mid 5 \mid 1)$ und $B(4 \mid -1 \mid 7)$.
teile:
  - typ: vektor
    label: '$M$'
    namen: ["x", "y", "z"]
    loesung: ["(-2+4)/2", "(5-1)/2", "(1+7)/2"]
    fehler:
      - wert: ["3", "-3", "3"]
        meldung: 'Das ist $\tfrac12(B - A)$, also der halbe Verbindungsvektor. Für den Mittelpunkt mittelst du die Koordinaten: $\tfrac12(A + B)$.'
      - wert: ["2", "4", "8"]
        meldung: 'Das ist $A + B$. Du musst noch durch $2$ teilen.'
hinweise:
  - 'Jede Koordinate von $M$ ist der Mittelwert der entsprechenden Koordinaten von $A$ und $B$.'
loesung: |
  **Ansatz:** $M = \tfrac12(A + B)$, also koordinatenweise den Mittelwert bilden.
  ---
  $M = \left(\tfrac{-2 + 4}{2} \;\Big|\; \tfrac{5 - 1}{2} \;\Big|\; \tfrac{1 + 7}{2}\right) = (1 \mid 2 \mid 4)$.
  ---
  **Probe:** $\overrightarrow{AM} = \begin{pmatrix} 3 \\ -3 \\ 3 \end{pmatrix}$ und $\overrightarrow{MB} = \begin{pmatrix} 3 \\ -3 \\ 3 \end{pmatrix}$. Beide Hälften sind gleich.
```

```aufgabe
id: ve-spiegeln
titel: Punkt an Punkt spiegeln
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Spiegle $P(3 \mid -1)$ am Punkt $Z(1 \mid 2)$.
teile:
  - typ: vektor
    label: '$P^\prime$'
    namen: ["x", "y"]
    loesung: ["2*1-3", "2*2-(-1)"]
    fehler:
      - wert: ["2", "0.5"]
        meldung: 'Das ist der Mittelpunkt von $P$ und $Z$. Beim Spiegeln ist $Z$ selbst der Mittelpunkt von $P$ und $P''$.'
      - wert: ["5", "-4"]
        meldung: 'Du hast $2P - Z$ gerechnet. Es heißt $2Z - P$: Das Spiegelzentrum zählt doppelt.'
hinweise:
  - '$Z$ ist der Mittelpunkt von $P$ und $P''$. Löse $Z = \tfrac12(P + P'')$ nach $P''$ auf.'
loesung: |
  **Ansatz:** $Z$ ist der Mittelpunkt von $P$ und $P'$. Aus $Z = \tfrac12(P + P')$ folgt $P' = 2Z - P$.
  ---
  $P' = (2 - 3 \mid 4 + 1) = (-1 \mid 5)$.
  ---
  **Probe:** $\tfrac12(P + P') = \left(\tfrac{3 - 1}{2} \;\Big|\; \tfrac{-1 + 5}{2}\right) = (1 \mid 2) = Z$. Es stimmt.
```

```aufgabe
id: ve-schwerpunkt
titel: Schwerpunkt eines Dreiecks
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Bestimme den Schwerpunkt des Dreiecks mit $A(2 \mid -1 \mid 3)$, $B(5 \mid 4 \mid 0)$ und $C(-1 \mid 3 \mid 6)$.
teile:
  - typ: vektor
    label: '$S$'
    namen: ["x", "y", "z"]
    loesung: ["(2+5-1)/3", "(-1+4+3)/3", "(3+0+6)/3"]
    fehler:
      - wert: ["3", "3", "4.5"]
        meldung: 'Du hast durch $2$ geteilt. Beim Schwerpunkt mittelst du **drei** Punkte, also teilst du durch $3$.'
      - wert: ["6", "6", "9"]
        meldung: 'Das ist $A + B + C$. Teile noch durch $3$.'
hinweise:
  - '$S = \tfrac13(A + B + C)$: Addiere die drei Punkte koordinatenweise und teile durch $3$.'
loesung: |
  **Ansatz:** Der Schwerpunkt ist der Mittelwert der drei Ecken, $S = \tfrac13(A + B + C)$.
  ---
  Summe: $(2 + 5 - 1 \mid -1 + 4 + 3 \mid 3 + 0 + 6) = (6 \mid 6 \mid 9)$. Geteilt durch $3$: $S = (2 \mid 2 \mid 3)$.
```

```aufgabe
id: ve-teilungspunkt
titel: Strecke dritteln
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Auf der Strecke von $A(1 \mid -2 \mid 0)$ nach $B(7 \mid 4 \mid 9)$ liegen die Punkte $T_1$ und $T_2$, die die
  Strecke in drei gleich lange Teile zerlegen. $T_1$ liegt näher bei $A$. Bestimme beide Punkte.
teile:
  - typ: vektor
    label: '$T_1$'
    namen: ["x", "y", "z"]
    loesung: ["1+6/3", "-2+6/3", "0+9/3"]
    fehler:
      - wert: ["5", "2", "6"]
        meldung: 'Das ist der Punkt bei zwei Dritteln, also $T_2$. $T_1$ liegt näher bei $A$.'
      - wert: ["2", "2", "3"]
        meldung: 'Das ist nur ein Drittel des Verbindungsvektors. Hänge ihn noch an $A$ an.'
  - typ: vektor
    label: '$T_2$'
    namen: ["x", "y", "z"]
    loesung: ["1+2*6/3", "-2+2*6/3", "0+2*9/3"]
hinweise:
  - 'Berechne zuerst $\overrightarrow{AB}$ und dann ein Drittel davon.'
  - '$T_1 = A + \tfrac13\overrightarrow{AB}$ und $T_2 = A + \tfrac23\overrightarrow{AB}$.'
loesung: |
  **Ansatz:** Drei gleiche Teile heißt $\lambda = \tfrac13$ und $\lambda = \tfrac23$.
  ---
  $\overrightarrow{AB} = \begin{pmatrix} 6 \\ 6 \\ 9 \end{pmatrix}$, also $\tfrac13\overrightarrow{AB} = \begin{pmatrix} 2 \\ 2 \\ 3 \end{pmatrix}$.
  ---
  $T_1 = A + \tfrac13\overrightarrow{AB} = (3 \mid 0 \mid 3)$ und $T_2 = T_1 + \tfrac13\overrightarrow{AB} = (5 \mid 2 \mid 6)$.
  ---
  **Probe:** $T_2 + \tfrac13\overrightarrow{AB} = (7 \mid 4 \mid 9) = B$. Es stimmt.
```

```aufgabe
id: ve-schwerpunkt-rueckwaerts
titel: Fehlende Ecke aus dem Schwerpunkt
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Ein Dreieck $ABC$ hat den Schwerpunkt $S(2 \mid 1 \mid 3)$. Bekannt sind $A(1 \mid 0 \mid 2)$ und $B(4 \mid -1 \mid 5)$.
  Bestimme $C$.
teile:
  - typ: vektor
    label: '$C$'
    namen: ["x", "y", "z"]
    loesung: ["3*2-1-4", "3*1-0+1", "3*3-2-5"]
    fehler:
      - wert: ["-3", "2", "-4"]
        meldung: 'Du hast $S - A - B$ gerechnet. Aus $S = \tfrac13(A + B + C)$ folgt aber zuerst $3S = A + B + C$.'
hinweise:
  - 'Löse $S = \tfrac13(A + B + C)$ nach $C$ auf.'
  - 'Multipliziere beide Seiten mit $3$ und ziehe dann $A$ und $B$ ab.'
loesung: |
  **Ansatz:** Die Schwerpunktformel nach dem unbekannten Punkt umformen.
  ---
  Mal $3$: $3S = A + B + C$. Dann $A$ und $B$ abziehen: $C = 3S - A - B$.
  ---
  $C = (6 - 1 - 4 \mid 3 - 0 + 1 \mid 9 - 2 - 5) = (1 \mid 4 \mid 2)$.
  ---
  **Probe:** $\tfrac13(A + B + C) = \tfrac13(6 \mid 3 \mid 9) = (2 \mid 1 \mid 3) = S$. Es stimmt.
```

```aufgabe
id: ve-mittelpunkt-endpunkt
titel: Endpunkt aus dem Mittelpunkt
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  $M(1 \mid -2 \mid 4)$ ist der Mittelpunkt der Strecke $AB$. Bekannt ist $A(5 \mid 0 \mid -1)$. Bestimme $B$.
teile:
  - typ: vektor
    label: '$B$'
    namen: ["x", "y", "z"]
    loesung: ["2*1-5", "2*(-2)-0", "2*4-(-1)"]
    fehler:
      - wert: ["3", "-1", "1.5"]
        meldung: 'Das ist die Mitte zwischen $A$ und $M$. $B$ liegt aber von $M$ aus gesehen auf der anderen Seite, gleich weit wie $A$.'
      - wert: ["-4", "-2", "5"]
        meldung: 'Das ist der Vektor $\overrightarrow{AM}$. Hänge ihn an $M$ an, dann bist du bei $B$.'
hinweise:
  - 'Löse $M = \tfrac12(A + B)$ nach $B$ auf.'
  - 'Es ergibt sich $B = 2M - A$. Das ist dieselbe Formel wie beim Spiegeln: $B$ ist das Spiegelbild von $A$ an $M$.'
loesung: |
  **Ansatz:** Aus $M = \tfrac12(A + B)$ folgt $2M = A + B$, also $B = 2M - A$.
  ---
  $B = (2 - 5 \mid -4 - 0 \mid 8 + 1) = (-3 \mid -4 \mid 9)$.
  ---
  **Probe:** $\tfrac12(A + B) = \tfrac12(2 \mid -4 \mid 8) = (1 \mid -2 \mid 4) = M$. Es stimmt.
```

```aufgabe
id: ve-spiegel-fehler
titel: Fehler beim Spiegeln finden
niveau: 2
lernziel: 3
kompetenz: begruenden
angabe: |
  Eine Mitschülerin soll $P(4 \mid -1 \mid 2)$ am Punkt $Z(1 \mid 3 \mid 0)$ spiegeln. Sie rechnet
  $P' = Z - P = (-3 \mid 4 \mid -2)$.

  a) Was ist an ihrer Rechnung falsch?

  b) Bestimme den richtigen Bildpunkt $P'$.
teile:
  - typ: auswahl
    label: 'a)'
    optionen:
      - '$Z - P$ ist der Vektor von $P$ nach $Z$, kein Punkt. Man muss ihn noch an $Z$ anhängen.'
      - 'Sie hätte $P - Z$ rechnen müssen.'
      - 'Die Rechnung ist richtig.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$P - Z$ ist ebenfalls nur ein Vektor, nämlich der von $Z$ nach $P$. Ein Punkt entsteht erst durch „Punkt plus Vektor“.'
      - wert: 2
        meldung: 'Mach die Probe: Ist $Z$ die Mitte von $P$ und $(-3 \mid 4 \mid -2)$?'
  - typ: vektor
    label: 'b) $P^\prime$'
    namen: ["x", "y", "z"]
    loesung: ["2*1-4", "2*3+1", "2*0-2"]
    fehler:
      - wert: ["-3", "4", "-2"]
        meldung: 'Das ist die Rechnung der Mitschülerin. Es fehlt noch ein Schritt: $P'' = Z + \overrightarrow{PZ}$.'
hinweise:
  - 'Mach die Probe mit ihrem Ergebnis: Berechne den Mittelpunkt von $P$ und $(-3 \mid 4 \mid -2)$.'
  - 'Richtig ist $P'' = Z + \overrightarrow{PZ} = 2Z - P$.'
loesung: |
  **Ansatz:** Beim Spiegeln ist $Z$ der Mittelpunkt von $P$ und $P'$. Wir prüfen das Ergebnis der Mitschülerin mit dieser Bedingung.
  ---
  a) Die Mitte von $P$ und $(-3 \mid 4 \mid -2)$ ist $(0{,}5 \mid 1{,}5 \mid 0)$, nicht $Z$. Der Fehler: $Z - P = \overrightarrow{PZ}$ ist ein Vektor. Den muss man an $Z$ anhängen.
  ---
  b) $P' = Z + \overrightarrow{PZ} = (1 - 3 \mid 3 + 4 \mid 0 - 2) = (-2 \mid 7 \mid -2)$.
  ---
  **Probe:** $\tfrac12(P + P') = \tfrac12(2 \mid 6 \mid 0) = (1 \mid 3 \mid 0) = Z$. Es stimmt.
```

```aufgabe
id: ve-teilverhaeltnis-bestimmen
titel: Liegt der Punkt auf der Strecke, und wo?
niveau: 3
lernziel: 3
kompetenz: begruenden
angabe: |
  Gegeben sind $A(-1 \mid 4 \mid 1)$, $B(11 \mid -2 \mid -5)$ und $T(3 \mid 2 \mid -1)$.

  a) Zeige, dass $T$ auf der Strecke $AB$ liegt, und bestimme den Anteil $\lambda$ mit $T = A + \lambda\overrightarrow{AB}$.

  b) In welchem Verhältnis $|AT| : |TB|$ teilt $T$ die Strecke? Gib den Wert des Bruchs $\frac{|AT|}{|TB|}$ an.
teile:
  - typ: zahl
    label: 'a) $\lambda$'
    loesung: "1/3"
    fehler:
      - wert: "3"
        meldung: 'Du hast den Kehrwert genommen. $\overrightarrow{AT}$ ist kürzer als $\overrightarrow{AB}$, also ist $\lambda$ kleiner als $1$.'
  - typ: zahl
    label: 'b) $\frac{|AT|}{|TB|}$'
    loesung: "(1/3)/(2/3)"
    fehler:
      - wert: "1/3"
        meldung: '$\tfrac13$ ist der Anteil an der **ganzen** Strecke. Gefragt ist das Verhältnis der beiden Teilstrecken zueinander.'
      - wert: "2"
        meldung: 'Das Verhältnis ist umgedreht. $T$ liegt näher bei $A$, also ist $|AT|$ die kürzere Teilstrecke.'
hinweise:
  - 'Berechne $\overrightarrow{AB}$ und $\overrightarrow{AT}$. Ist $\overrightarrow{AT}$ ein Vielfaches von $\overrightarrow{AB}$?'
  - 'Bestimme den Faktor $\lambda$ aus jeder Komponente. Liegt er zwischen $0$ und $1$, liegt $T$ auf der Strecke. Bis $T$ ist der Anteil $\lambda$, ab $T$ der Rest $1 - \lambda$.'
loesung: |
  **Ansatz:** $T$ liegt auf der Strecke $AB$, wenn $\overrightarrow{AT} = \lambda\overrightarrow{AB}$ mit einem $\lambda$ zwischen $0$ und $1$ gilt.
  ---
  $\overrightarrow{AB} = \begin{pmatrix} 12 \\ -6 \\ -6 \end{pmatrix}$ und $\overrightarrow{AT} = \begin{pmatrix} 4 \\ -2 \\ -2 \end{pmatrix}$.
  ---
  Komponentenweise: $\tfrac{4}{12} = \tfrac{-2}{-6} = \tfrac{-2}{-6} = \tfrac13$. Alle drei Quotienten sind gleich, also $\overrightarrow{AT} = \tfrac13\overrightarrow{AB}$. Weil $0 \le \tfrac13 \le 1$ ist, liegt $T$ auf der Strecke.
  ---
  b) Bis $T$ ist ein Drittel der Strecke geschafft, es bleiben zwei Drittel. $|AT| : |TB| = \tfrac13 : \tfrac23 = 1 : 2$, also $\frac{|AT|}{|TB|} = \tfrac12$.
  ---
  **Antwort:** $T$ teilt $AB$ im Verhältnis $1 : 2$. **Kontrolle:** $\overrightarrow{TB} = \begin{pmatrix} 8 \\ -4 \\ -4 \end{pmatrix} = 2\overrightarrow{AT}$.
gefuehrt:
  - text: 'Berechne den Verbindungsvektor $\overrightarrow{AB}$.'
    teil: { typ: vektor, loesung: ["12", "-6", "-6"], fehler: [ { wert: ["-12", "6", "6"], meldung: 'Spitze minus Schaft: $B - A$, nicht $A - B$.' } ] }
    erklaerung: '$\overrightarrow{AB} = (11 + 1 \mid -2 - 4 \mid -5 - 1)$.'
  - text: 'Berechne den Verbindungsvektor $\overrightarrow{AT}$.'
    teil: { typ: vektor, loesung: ["4", "-2", "-2"] }
    erklaerung: '$\overrightarrow{AT} = (3 + 1 \mid 2 - 4 \mid -1 - 1)$.'
  - text: 'Welcher Faktor $\lambda$ macht aus $\overrightarrow{AB}$ den Vektor $\overrightarrow{AT}$?'
    teil: { typ: zahl, loesung: "1/3" }
    erklaerung: 'In jeder Komponente ist $\overrightarrow{AT}$ ein Drittel von $\overrightarrow{AB}$: $\tfrac{4}{12} = \tfrac{-2}{-6} = \tfrac13$.'
  - text: 'Überlege: Warum folgt aus $0 \le \lambda \le 1$, dass $T$ zwischen $A$ und $B$ liegt?'
    erklaerung: 'Bei $\lambda = 0$ ist man noch in $A$, bei $\lambda = 1$ schon in $B$. Werte dazwischen beschreiben genau die Punkte der Strecke.'
  - text: 'Gib den Wert des Verhältnisses $\frac{|AT|}{|TB|}$ an.'
    teil: { typ: zahl, loesung: "1/2" }
    erklaerung: 'Bis $T$ ein Drittel, danach zwei Drittel. $\tfrac13 : \tfrac23 = 1 : 2$.'
```

## Parallelogramme und besondere Vierecke

```aufgabe
id: ve-parallelogramm-vorwissen
titel: Gegenüberliegende Ecken
art: check
niveau: 1
angabe: |
  In einem Viereck $ABCD$ folgen die Ecken in dieser Reihenfolge aufeinander. Welche Ecke liegt $A$ **gegenüber**?
  Den Verbindungsvektor, den du gleich brauchst, findest du in
  [6.1 Was ist ein Vektor?](/lernen/mathe3/vektoren/was-ist-ein-vektor-pfeile-punkte-und-koordinaten).
teile:
  - typ: auswahl
    optionen: ['$B$', '$C$', '$D$']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: '$B$ folgt direkt auf $A$, die beiden sind durch die Seite $AB$ verbunden. Sie sind Nachbarn.'
      - wert: 2
        meldung: '$D$ ist der Vorgänger von $A$, die beiden sind durch die Seite $DA$ verbunden. Sie sind Nachbarn.'
loesung: |
  Die Seiten sind $AB$, $BC$, $CD$ und $DA$. Nachbarn von $A$ sind also $B$ und $D$.
  ---
  Gegenüber liegt $C$. Die Strecken $AC$ und $BD$ sind die Diagonalen.
```

Die Aufgabe „Von einem Parallelogramm kennt man drei Ecken“ ist ein Prüfungsklassiker. Sie kommt in der
Musterprüfung von Karigl vor. In dieser Lektion lernst du, wie man die vierte Ecke findet, warum sich die
Diagonalen halbieren und wie man mit Vektoren erkennt, ob ein Rechteck oder eine Raute vorliegt.

### Die Vektorbedingung

Ein **Parallelogramm** ist ein Viereck, bei dem gegenüberliegende Seiten parallel und gleich lang sind. Mit
Vektoren lässt sich das in einer einzigen Gleichung ausdrücken.

:::definition[Parallelogramm]
Ein Viereck $ABCD$, dessen Ecken in dieser Reihenfolge aufeinander folgen, ist ein **Parallelogramm**, wenn
$$\overrightarrow{AB} = \overrightarrow{DC}.$$
Gleichwertig dazu ist $\overrightarrow{AD} = \overrightarrow{BC}$.
:::

Warum genügt eine Gleichung? Zwei gleiche Vektoren haben dieselbe Richtung **und** dieselbe Länge. Die
Gleichung $\overrightarrow{AB} = \overrightarrow{DC}$ sagt also auf einmal: Die Seiten $AB$ und $DC$ sind parallel,
gleich lang und gleich orientiert.

**Nichtbeispiel:** Das Viereck $A(0 \mid 0)$, $B(4 \mid 0)$, $C(3 \mid 2)$, $D(1 \mid 2)$ ist **kein**
Parallelogramm. Es ist $\overrightarrow{AB} = \begin{pmatrix} 4 \\ 0 \end{pmatrix}$, aber $\overrightarrow{DC} = \begin{pmatrix} 2 \\ 0 \end{pmatrix}$. Die Seiten
sind zwar parallel, aber verschieden lang. So ein Viereck heißt **Trapez**.

Aus $\overrightarrow{AD} = \overrightarrow{BC}$ folgt sofort eine Formel für die vierte Ecke:
$$D = A + \overrightarrow{BC} = A + C - B.$$
In Worten: Die fehlende Ecke ist „Nachbar plus Nachbar minus Gegenecke“. Die Nachbarn von $D$ sind $A$ und
$C$, gegenüber liegt $B$.

:::beispiel[Parallelogramm aus drei Ecken]
Gegeben sind $A(-2 \mid 1)$, $B(4 \mid -1)$ und $C(6 \mid 3)$. Gesucht sind $D$, der Schnittpunkt der Diagonalen
und alle Seiten- und Diagonalenlängen.

**Schritt 1, vierte Ecke:** $\overrightarrow{BC} = \begin{pmatrix} 2 \\ 4 \end{pmatrix}$, also $D = A + \overrightarrow{BC} = (0 \mid 5)$.

**Schritt 2, Diagonalenschnittpunkt:** $M = \tfrac12(A + C) = (2 \mid 2)$. Kontrolle: $\tfrac12(B + D) = (2 \mid 2)$.
Warum das stimmt, zeigt der Satz nach diesem Beispiel.

**Schritt 3, Seiten:** $\big|\overrightarrow{AB}\big| = \Big|\begin{pmatrix} 6 \\ -2 \end{pmatrix}\Big| = \sqrt{40} \approx 6{,}32$ und
$\big|\overrightarrow{BC}\big| = \sqrt{4 + 16} = \sqrt{20} \approx 4{,}47$. Die Gegenseiten sind gleich lang:
$|CD| = \sqrt{40}$ und $|DA| = \sqrt{20}$.

**Schritt 4, Diagonalen:** $\big|\overrightarrow{AC}\big| = \Big|\begin{pmatrix} 8 \\ 2 \end{pmatrix}\Big| = \sqrt{68} \approx 8{,}25$ und
$\big|\overrightarrow{BD}\big| = \Big|\begin{pmatrix} -4 \\ 6 \end{pmatrix}\Big| = \sqrt{52} \approx 7{,}21$.
:::

```plot
x: [-3, 7]
y: [-2, 6]
gleich: true
strecken:
  - { von: [-2, 1], nach: [4, -1] }
  - { von: [4, -1], nach: [6, 3] }
  - { von: [6, 3], nach: [0, 5] }
  - { von: [0, 5], nach: [-2, 1] }
  - { von: [-2, 1], nach: [6, 3], gestrichelt: true, farbe: 1 }
  - { von: [4, -1], nach: [0, 5], gestrichelt: true, farbe: 1 }
punkte:
  - { x: -2, y: 1, label: "A" }
  - { x: 4, y: -1, label: "B" }
  - { x: 6, y: 3, label: "C" }
  - { x: 0, y: 5, label: "D", farbe: 2 }
  - { x: 2, y: 2, label: "M", farbe: 3 }
beschriftung: Das Parallelogramm ABCD aus dem Beispiel. D = A + C − B, und die Diagonalen (gestrichelt) schneiden einander in ihrem gemeinsamen Mittelpunkt M(2 | 2).
```

:::achtung[Die falsche Gegenecke]
Mit den Punkten aus dem Beispiel rechnet jemand $D = A + B - C = (-2 + 4 - 6 \mid 1 - 1 - 3) = (-4 \mid -3)$. Das
ist ebenfalls die vierte Ecke eines Parallelogramms, aber eines anderen: In ihm liegt $D$ gegenüber von $C$,
und $AB$ ist eine Diagonale statt einer Seite. Für das Parallelogramm $ABCD$ in **dieser** Reihenfolge liegt
$D$ gegenüber von $B$, also $D = A + C - B$. Eine kurze **Skizze** zeigt sofort, ob die Ecken in der richtigen
Reihenfolge herumlaufen.
:::

### Die Diagonalen halbieren einander

:::satz[Diagonalen im Parallelogramm]
In jedem Parallelogramm halbieren die Diagonalen einander. Ihr Schnittpunkt ist
$$M = \tfrac12(A + C) = \tfrac12(B + D).$$
:::

:::beweis
**Schritt 1:** Aus der Vektorbedingung folgt $D = A + C - B$. Wir addieren $B$ auf beiden Seiten: $B + D = A + C$.

**Schritt 2:** Wir teilen durch $2$: $\tfrac12(B + D) = \tfrac12(A + C)$. Links steht der Mittelpunkt der
Diagonale $BD$, rechts der Mittelpunkt der Diagonale $AC$.

**Schritt 3:** Beide Mittelpunkte sind also derselbe Punkt $M$. Er liegt auf beiden Diagonalen. Damit ist er
ihr Schnittpunkt, und er halbiert jede von ihnen.
:::

**Was heißt das für die Prüfung?** Den Diagonalenschnittpunkt bekommst du gratis als Mittelpunkt **einer**
Diagonale. Die zweite Diagonale liefert eine Kontrolle für deine vierte Ecke.

```aufgabe
id: ve-parallelogramm-check-mitte
titel: Der Diagonalenschnittpunkt als Kontrolle
art: check
niveau: 1
angabe: |
  Jemand hat für ein Parallelogramm $ABCD$ mit $A(0 \mid 0)$, $B(5 \mid 1)$ und $C(7 \mid 4)$ die vierte Ecke $D(3 \mid 2)$ berechnet.
  Ist das richtig? Prüfe mit den Mittelpunkten der Diagonalen.
teile:
  - typ: auswahl
    optionen:
      - 'Nein, denn $\tfrac12(A + C) = (3{,}5 \mid 2)$, aber $\tfrac12(B + D) = (4 \mid 1{,}5)$.'
      - 'Ja, denn $D$ liegt zwischen $A$ und $C$.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Im Parallelogramm müssen die Mittelpunkte beider Diagonalen gleich sein. Rechne sie aus und vergleiche.'
loesung: |
  Die Mittelpunkte der Diagonalen sind verschieden, also stimmt $D$ nicht.
  ---
  Richtig ist $D = A + C - B = (2 \mid 3)$. Dann ist $\tfrac12(B + D) = (3{,}5 \mid 2) = \tfrac12(A + C)$.
```

### Rechteck, Raute und Quadrat

Manche Parallelogramme haben zusätzliche Eigenschaften:

- Ein **Rechteck** ist ein Parallelogramm mit einem rechten Winkel. Dann sind alle vier Winkel rechte Winkel.
- Eine **Raute** (auch Rhombus) ist ein Parallelogramm mit zwei gleich langen Nachbarseiten. Dann sind alle vier Seiten gleich lang.
- Ein **Quadrat** ist ein Parallelogramm, das zugleich Rechteck und Raute ist.

Die Raute prüfst du mit Beträgen: $\big|\overrightarrow{AB}\big| = \big|\overrightarrow{AD}\big|$. Für das Rechteck brauchst du
einen rechten Winkel. Mit den Mitteln dieser Lektion geht das über die **Umkehrung des Satzes von Pythagoras**:
Im Dreieck $ABC$ ist der Winkel bei $B$ genau dann ein rechter, wenn $|AC|^2 = |AB|^2 + |BC|^2$ gilt. Schneller
geht es mit dem Skalarprodukt aus
[6.6 Das Skalarprodukt](/lernen/mathe3/vektoren/das-skalarprodukt-und-der-winkel-zwischen-vektoren). In
[6.7 Orthogonalität](/lernen/mathe3/vektoren/orthogonalitaet-normalvektor-und-projektion) folgen zwei schöne
Kriterien. Ein Parallelogramm ist genau dann ein Rechteck, wenn seine Diagonalen gleich lang sind. Es ist genau
dann eine Raute, wenn seine Diagonalen aufeinander normal stehen.

:::beispiel[Ist es ein Rechteck?]
Gegeben ist das Parallelogramm $A(0 \mid 1)$, $B(6 \mid 4)$, $C(5 \mid 6)$, $D(-1 \mid 3)$.

**Schritt 1, Parallelogramm prüfen:** $\overrightarrow{AB} = \begin{pmatrix} 6 \\ 3 \end{pmatrix}$ und $\overrightarrow{DC} = \begin{pmatrix} 6 \\ 3 \end{pmatrix}$. Gleich, also ein
Parallelogramm.

**Schritt 2, Quadrate der Längen:** $|AB|^2 = 36 + 9 = 45$. Mit $\overrightarrow{BC} = \begin{pmatrix} -1 \\ 2 \end{pmatrix}$ ist $|BC|^2 = 1 + 4 = 5$.
Mit $\overrightarrow{AC} = \begin{pmatrix} 5 \\ 5 \end{pmatrix}$ ist $|AC|^2 = 50$.

**Schritt 3, Pythagoras rückwärts:** $45 + 5 = 50$. Also hat das Dreieck $ABC$ bei $B$ einen rechten Winkel. Das
Parallelogramm ist ein Rechteck.

**Schritt 4, Raute?** $|AB| = \sqrt{45} \neq \sqrt 5 = |BC|$. Es ist also kein Quadrat.
:::

:::achtung[Mittelpunkt einer Seite statt einer Diagonale]
Für das Parallelogramm mit $A(-2 \mid 1)$, $B(4 \mid -1)$, $C(6 \mid 3)$, $D(0 \mid 5)$ rechnet jemand den
Diagonalenschnittpunkt als $\tfrac12(A + B) = (1 \mid 0)$. Das ist der Mittelpunkt der **Seite** $AB$, nicht
einer Diagonale. Diagonalen verbinden **gegenüberliegende** Ecken: $\tfrac12(A + C) = (2 \mid 2)$. Die
Kontrolle $\tfrac12(B + D) = (2 \mid 2)$ bestätigt das Ergebnis.
:::

```reflexion
frage: Warum genügt die eine Gleichung AB = DC, um ein Parallelogramm nachzuweisen? Muss man nicht zusätzlich prüfen, dass auch AD = BC gilt?
antwort: |
  Eine Vektorgleichung sagt Richtung und Länge zugleich. $\overrightarrow{AB} = \overrightarrow{DC}$ heißt also: $AB$ und $DC$
  sind parallel, gleich lang und gleich orientiert.

  Die zweite Gleichung folgt daraus von selbst. Aus $B - A = C - D$ erhält man durch Umstellen $D - A = C - B$,
  also $\overrightarrow{AD} = \overrightarrow{BC}$. Man muss sie deshalb nicht extra prüfen. Wichtig ist nur, dass die Ecken
  wirklich in der Reihenfolge $A, B, C, D$ herumlaufen.
```

:::merke[Rezept: Parallelogramm $ABCD$ aus drei Ecken]
1. **Skizze** mit den gegebenen Punkten, Ecken der Reihe nach beschriften.
2. Vierte Ecke: Nachbar plus Nachbar minus Gegenecke, also $D = A + C - B$.
3. Diagonalenschnittpunkt $M = \tfrac12(A + C)$, Kontrolle mit $\tfrac12(B + D)$.
4. Seiten $|AB| = |CD|$ und $|BC| = |DA|$, Diagonalen $|AC|$ und $|BD|$ als Beträge.
5. Rechteck oder Raute prüfen, falls gefragt. Zum Schluss ein Antwortsatz mit allen Ergebnissen.
:::

```aufgabe
id: ve-parallelogramm-raum
titel: Parallelogramm im Raum
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  $A(1 \mid 0 \mid 2)$, $B(4 \mid 2 \mid 1)$ und $C(5 \mid 5 \mid 3)$ sind drei aufeinanderfolgende Ecken eines
  Parallelogramms $ABCD$. Bestimme $D$ und den Diagonalenschnittpunkt $M$.
teile:
  - typ: vektor
    label: '$D$'
    namen: ["x", "y", "z"]
    loesung: ["1+5-4", "0+5-2", "2+3-1"]
    fehler:
      - wert: ["8", "7", "2"]
        meldung: 'Du hast $B + C - A$ gerechnet. Damit liegt der neue Punkt gegenüber von $A$. Gesucht ist $D$, das gegenüber von $B$ liegt: $D = A + C - B$.'
      - wert: ["0", "-3", "0"]
        meldung: 'Du hast $A + B - C$ gerechnet. Die Nachbarn von $D$ sind $A$ und $C$, die Gegenecke ist $B$.'
  - typ: vektor
    label: '$M$'
    namen: ["x", "y", "z"]
    loesung: ["(1+5)/2", "(0+5)/2", "(2+3)/2"]
    fehler:
      - wert: ["2.5", "1", "1.5"]
        meldung: 'Das ist der Mittelpunkt der Seite $AB$. Die Diagonalen verbinden gegenüberliegende Ecken, zum Beispiel $A$ und $C$.'
hinweise:
  - 'Die fehlende Ecke ist Nachbar plus Nachbar minus Gegenecke.'
loesung: |
  **Ansatz:** $D$ hat die Nachbarn $A$ und $C$ und liegt gegenüber von $B$. Also $D = A + C - B$.
  ---
  $D = (1 + 5 - 4 \mid 0 + 5 - 2 \mid 2 + 3 - 1) = (2 \mid 3 \mid 4)$.
  ---
  $M = \tfrac12(A + C) = (3 \mid 2{,}5 \mid 2{,}5)$. **Kontrolle:** $\tfrac12(B + D) = \tfrac12(6 \mid 5 \mid 5) = (3 \mid 2{,}5 \mid 2{,}5)$.
```

```aufgabe
id: ve-viereck-pruefen
titel: Ist das ein Parallelogramm?
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Gegeben ist das Viereck $A(1 \mid 2)$, $B(6 \mid 3)$, $C(8 \mid 7)$, $D(3 \mid 6)$. Berechne $\overrightarrow{AB}$ und $\overrightarrow{DC}$ und entscheide.
teile:
  - typ: vektor
    label: '$\overrightarrow{AB}$'
    loesung: ["5", "1"]
    fehler:
      - wert: ["-5", "-1"]
        meldung: 'Spitze minus Schaft: $B - A$.'
  - typ: vektor
    label: '$\overrightarrow{DC}$'
    loesung: ["5", "1"]
    fehler:
      - wert: ["-5", "-1"]
        meldung: 'Das ist $\overrightarrow{CD}$. Der Pfeil $\overrightarrow{DC}$ beginnt in $D$ und endet in $C$: $C - D$.'
  - typ: auswahl
    label: 'Ist $ABCD$ ein Parallelogramm?'
    optionen: ['Ja', 'Nein']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Vergleiche die beiden Vektoren. Sind sie gleich, dann sind die Seiten parallel und gleich lang.'
hinweise:
  - 'Parallelogramm heißt $\overrightarrow{AB} = \overrightarrow{DC}$. Achte darauf, dass $\overrightarrow{DC}$ in $D$ beginnt.'
loesung: |
  **Ansatz:** Ein Viereck ist ein Parallelogramm, wenn $\overrightarrow{AB} = \overrightarrow{DC}$.
  ---
  $\overrightarrow{AB} = \begin{pmatrix} 6 - 1 \\ 3 - 2 \end{pmatrix} = \begin{pmatrix} 5 \\ 1 \end{pmatrix}$ und $\overrightarrow{DC} = \begin{pmatrix} 8 - 3 \\ 7 - 6 \end{pmatrix} = \begin{pmatrix} 5 \\ 1 \end{pmatrix}$.
  ---
  Die Vektoren sind gleich. $ABCD$ ist also ein Parallelogramm.
```

```aufgabe
id: ve-ecken-aus-mittelpunkt
titel: Zwei Ecken aus dem Diagonalenschnittpunkt
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Von einem Parallelogramm $ABCD$ kennt man $A(1 \mid -2 \mid 3)$, $B(4 \mid 0 \mid 1)$ und den Schnittpunkt der Diagonalen
  $M(2 \mid 1 \mid 2)$. Bestimme $C$ und $D$.
teile:
  - typ: vektor
    label: '$C$'
    namen: ["x", "y", "z"]
    loesung: ["2*2-1", "2*1+2", "2*2-3"]
    fehler:
      - wert: ["1.5", "-0.5", "2.5"]
        meldung: 'Das ist die Mitte zwischen $A$ und $M$. $M$ ist aber selbst die Mitte der Diagonale $AC$, also liegt $C$ hinter $M$.'
  - typ: vektor
    label: '$D$'
    namen: ["x", "y", "z"]
    loesung: ["2*2-4", "2*1-0", "2*2-1"]
    fehler:
      - wert: ["-2", "1", "1"]
        meldung: 'Das ist der Vektor $\overrightarrow{BM}$. Hänge ihn an $M$ an, dann erhältst du $D$.'
hinweise:
  - '$M$ ist der Mittelpunkt der Diagonale $AC$ und zugleich der Mittelpunkt der Diagonale $BD$.'
  - 'Aus $M = \tfrac12(A + C)$ folgt $C = 2M - A$. Für $D$ genauso mit $B$.'
loesung: |
  **Ansatz:** Die Diagonalen halbieren einander. $M$ ist also die Mitte von $AC$ und von $BD$, und es gilt $C = 2M - A$ und $D = 2M - B$.
  ---
  $C = (4 - 1 \mid 2 + 2 \mid 4 - 3) = (3 \mid 4 \mid 1)$.
  ---
  $D = (4 - 4 \mid 2 - 0 \mid 4 - 1) = (0 \mid 2 \mid 3)$.
  ---
  **Probe:** $\overrightarrow{AB} = \begin{pmatrix} 3 \\ 2 \\ -2 \end{pmatrix}$ und $\overrightarrow{DC} = \begin{pmatrix} 3 \\ 2 \\ -2 \end{pmatrix}$. Gleich, also ist $ABCD$ ein Parallelogramm.
```

```aufgabe
id: ve-rechteck-pythagoras
titel: Rechteck oder nicht?
niveau: 2
lernziel: 4
kompetenz: begruenden
angabe: |
  $A(-1 \mid 0)$, $B(3 \mid 2)$, $C(2 \mid 4)$ und $D(-2 \mid 2)$ bilden ein Parallelogramm.

  a) Berechne $|AB|^2$, $|BC|^2$ und $|AC|^2$.

  b) Ist das Parallelogramm ein Rechteck? Ist es eine Raute?
teile:
  - typ: zahl
    label: 'a) $|AB|^2$'
    loesung: "4^2 + 2^2"
    fehler:
      - wert: "sqrt(20)"
        meldung: 'Das ist $|AB|$. Gefragt ist das Quadrat der Länge, ohne Wurzel.'
  - typ: zahl
    label: 'a) $|BC|^2$'
    loesung: "(-1)^2 + 2^2"
  - typ: zahl
    label: 'a) $|AC|^2$'
    loesung: "3^2 + 4^2"
  - typ: auswahl
    label: 'b)'
    mehrfach: true
    optionen: ['Es ist ein Rechteck.', 'Es ist eine Raute.']
    richtig: [0]
    fehler:
      - wert: [0, 1]
        meldung: 'Für eine Raute müssten die Nachbarseiten gleich lang sein. Vergleiche $|AB|^2 = 20$ mit $|BC|^2 = 5$.'
      - wert: []
        meldung: 'Prüfe Pythagoras rückwärts: Ist $|AB|^2 + |BC|^2 = |AC|^2$?'
hinweise:
  - 'Berechne die drei Verbindungsvektoren und quadriere ihre Längen. Dann brauchst du keine Wurzeln.'
  - 'Im Dreieck $ABC$ ist der Winkel bei $B$ genau dann ein rechter, wenn $|AB|^2 + |BC|^2 = |AC|^2$ gilt.'
loesung: |
  **Ansatz:** Ein Parallelogramm mit einem rechten Winkel ist ein Rechteck. Den rechten Winkel bei $B$ prüfen wir mit der Umkehrung des Satzes von Pythagoras im Dreieck $ABC$.
  ---
  $\overrightarrow{AB} = \begin{pmatrix} 4 \\ 2 \end{pmatrix}$, $|AB|^2 = 20$. $\overrightarrow{BC} = \begin{pmatrix} -1 \\ 2 \end{pmatrix}$, $|BC|^2 = 5$. $\overrightarrow{AC} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$, $|AC|^2 = 25$.
  ---
  $20 + 5 = 25$. Also ist der Winkel bei $B$ ein rechter, und das Parallelogramm ist ein Rechteck.
  ---
  $|AB|^2 = 20 \neq 5 = |BC|^2$. Die Nachbarseiten sind verschieden lang, also ist es keine Raute und damit auch kein Quadrat.
```

```aufgabe
id: ve-grundstueck-zaun
titel: Ein Grundstück einzäunen
niveau: 2
lernziel: 4
kompetenz: modellieren
angabe: |
  Ein Grundstück hat die Form eines Parallelogramms $ABCD$ mit $A(0 \mid 0)$, $B(60 \mid 0)$ und $D(20 \mid 45)$. Die
  Koordinaten sind in Metern angegeben.

  a) Bestimme die vierte Ecke $C$.

  b) Wie viele Meter Zaun braucht man für den ganzen Rand? Runde auf zwei Dezimalstellen.

  c) Wie lang ist die längere Diagonale? Runde auf zwei Dezimalstellen.
teile:
  - typ: vektor
    label: 'a) $C$'
    namen: ["x", "y"]
    loesung: ["60+20", "0+45"]
    fehler:
      - wert: ["40", "-45"]
        meldung: 'Du hast $B - D$ gerechnet. Die Ecke $C$ ist Nachbar plus Nachbar minus Gegenecke: $C = B + D - A$.'
  - typ: zahl
    label: 'b) Zaunlänge'
    einheit: m
    loesung: "2*(60 + sqrt(20^2 + 45^2))"
    fehler:
      - wert: "60 + sqrt(20^2 + 45^2)"
        meldung: 'Das ist nur eine lange und eine kurze Seite. Der Rand besteht aus vier Seiten, je zwei gleich lange.'
      - wert: "2*(60 + 65)"
        meldung: 'Die Seite $AD$ ist nicht $20 + 45$ m lang. Sie ist die Hypotenuse mit den Katheten $20$ und $45$.'
  - typ: zahl
    label: 'c) längere Diagonale'
    einheit: m
    loesung: "sqrt(80^2 + 45^2)"
hinweise:
  - '$C$ liegt gegenüber von $A$. Also $C = B + D - A$.'
  - 'Der Zaun ist der Umfang: $2\cdot(|AB| + |AD|)$. Die Diagonalen sind $AC$ und $BD$. Berechne beide und nimm die längere.'
loesung: |
  **Ansatz:** Vierte Ecke mit „Nachbar plus Nachbar minus Gegenecke“, Längen als Beträge.
  ---
  a) $C = B + D - A = (60 + 20 \mid 0 + 45) = (80 \mid 45)$.
  ---
  b) $|AB| = 60$ m. $\overrightarrow{AD} = \begin{pmatrix} 20 \\ 45 \end{pmatrix}$, also $|AD| = \sqrt{400 + 2025} = \sqrt{2425} \approx 49{,}24$ m. Umfang: $2\cdot(60 + 49{,}24) \approx 218{,}49$ m.
  ---
  c) $\overrightarrow{AC} = \begin{pmatrix} 80 \\ 45 \end{pmatrix}$, $|AC| = \sqrt{6400 + 2025} = \sqrt{8425} \approx 91{,}79$ m. $\overrightarrow{BD} = \begin{pmatrix} -40 \\ 45 \end{pmatrix}$, $|BD| = \sqrt{3625} \approx 60{,}21$ m.
  ---
  **Antwort:** Man braucht rund $218{,}49$ m Zaun. Die längere Diagonale $AC$ ist rund $91{,}79$ m lang.
```

```aufgabe
id: ve-karigl-parallelogramm
titel: Parallelogramm aus drei Ecken vollständig berechnen
niveau: 3
lernziel: 4
kompetenz: rechnen
quelle: nach Musterprüfung Karigl, Aufgabe 2 (abgewandelt)
angabe: |
  Von einem Parallelogramm $ABCD$ in der Ebene kennt man die Eckpunkte $A(2 \mid -1)$, $B(10 \mid 5)$ und $C(6 \mid 10)$.
  Bestimme den vierten Eckpunkt $D$ und den Schnittpunkt $M$ der Diagonalen. Berechne die Längen aller Seiten und
  Diagonalen, wo nötig auf zwei Dezimalstellen gerundet.
teile:
  - typ: vektor
    label: '$D$'
    namen: ["x", "y"]
    loesung: ["2+6-10", "-1+10-5"]
    fehler:
      - wert: ["6", "-6"]
        meldung: 'Du hast $A + B - C$ gerechnet. Das ergibt ein Parallelogramm, in dem $AB$ eine Diagonale ist. $D$ liegt gegenüber von $B$.'
  - typ: vektor
    label: '$M$'
    namen: ["x", "y"]
    loesung: ["(2+6)/2", "(-1+10)/2"]
    fehler:
      - wert: ["6", "2"]
        meldung: 'Das ist die Mitte der Seite $AB$, nicht einer Diagonale.'
  - typ: zahl
    label: '$|AB| = |CD|$'
    loesung: "sqrt(8^2+6^2)"
    anzeige: '10'
  - typ: zahl
    label: '$|BC| = |DA|$'
    loesung: "sqrt(4^2+5^2)"
    anzeige: '\sqrt{41} \approx 6{,}40'
  - typ: zahl
    label: '$|AC|$'
    loesung: "sqrt(4^2+11^2)"
    anzeige: '\sqrt{137} \approx 11{,}70'
  - typ: zahl
    label: '$|BD|$'
    loesung: "sqrt(12^2+1^2)"
    anzeige: '\sqrt{145} \approx 12{,}04'
hinweise:
  - 'Fertige eine Skizze an. $D$ liegt gegenüber von $B$.'
  - '$D = A + \overrightarrow{BC}$, und $M$ ist der Mittelpunkt von $AC$. Die Längen sind Beträge von Verbindungsvektoren.'
loesung: |
  **Ansatz:** Vierte Ecke mit $D = A + \overrightarrow{BC}$, Schnittpunkt als Mitte einer Diagonale, alle Längen als Beträge.
  ---
  **Vierte Ecke:** $\overrightarrow{BC} = \begin{pmatrix} -4 \\ 5 \end{pmatrix}$, also $D = A + \overrightarrow{BC} = (-2 \mid 4)$.
  ---
  **Diagonalenschnittpunkt:** $M = \tfrac12(A + C) = (4 \mid 4{,}5)$. Kontrolle: $\tfrac12(B + D) = \tfrac12(8 \mid 9) = (4 \mid 4{,}5)$.
  ---
  **Seiten:** $\overrightarrow{AB} = \begin{pmatrix} 8 \\ 6 \end{pmatrix}$, $|AB| = \sqrt{64 + 36} = 10 = |CD|$. $|BC| = \sqrt{16 + 25} = \sqrt{41} \approx 6{,}40 = |DA|$.
  ---
  **Diagonalen:** $\overrightarrow{AC} = \begin{pmatrix} 4 \\ 11 \end{pmatrix}$, $|AC| = \sqrt{137} \approx 11{,}70$. $\overrightarrow{BD} = \begin{pmatrix} -12 \\ -1 \end{pmatrix}$, $|BD| = \sqrt{145} \approx 12{,}04$.
  ---
  **Antwort:** $D(-2 \mid 4)$, $M(4 \mid 4{,}5)$, Seiten $10$ und $\sqrt{41} \approx 6{,}40$, Diagonalen $\sqrt{137} \approx 11{,}70$ und $\sqrt{145} \approx 12{,}04$ Längeneinheiten.
gefuehrt:
  - text: 'Berechne $\overrightarrow{BC}$.'
    teil: { typ: vektor, loesung: ["-4", "5"], fehler: [ { wert: ["4", "-5"], meldung: 'Spitze minus Schaft: $C - B$.' } ] }
    erklaerung: '$\overrightarrow{BC} = (6 - 10 \mid 10 - 5)$.'
  - text: 'Bestimme $D = A + \overrightarrow{BC}$.'
    teil: { typ: vektor, namen: ["x", "y"], loesung: ["-2", "4"] }
    erklaerung: '$D = (2 - 4 \mid -1 + 5) = (-2 \mid 4)$.'
  - text: 'Bestimme den Diagonalenschnittpunkt $M$ als Mitte von $AC$.'
    teil: { typ: vektor, namen: ["x", "y"], loesung: ["4", "4.5"] }
    erklaerung: '$M = \tfrac12(2 + 6 \mid -1 + 10) = (4 \mid 4{,}5)$. Die Mitte von $BD$ ist derselbe Punkt.'
  - text: 'Wie lang ist die Seite $AB$?'
    teil: { typ: zahl, loesung: "10" }
    erklaerung: '$\overrightarrow{AB} = \begin{pmatrix} 8 \\ 6 \end{pmatrix}$, also $|AB| = \sqrt{100} = 10$.'
  - text: 'Berechne die übrigen Längen genauso und schreib einen Antwortsatz.'
    erklaerung: '$|BC| = \sqrt{41}$, $|AC| = \sqrt{137}$, $|BD| = \sqrt{145}$.'
```

```aufgabe
id: ve-parallelogramm-drei
titel: Drei mögliche vierte Ecken
niveau: 3
lernziel: 4
kompetenz: begruenden
angabe: |
  Die Punkte $A(0 \mid 0)$, $B(4 \mid 1)$ und $C(1 \mid 3)$ sollen drei Ecken eines Parallelogramms sein. Es ist
  aber nicht bekannt, welche Ecken benachbart sind. Bestimme alle Punkte $X$, die das Parallelogramm ergänzen.
  Sortiere sie danach, welchem der drei Punkte $X$ gegenüberliegt.
teile:
  - typ: vektor
    label: '$X$ liegt gegenüber von $B$'
    namen: ["x", "y"]
    loesung: ["0+1-4", "0+3-1"]
    fehler:
      - wert: ["3", "-2"]
        meldung: 'Dieser Punkt liegt gegenüber von $C$. Liegt $X$ gegenüber von $B$, dann sind $A$ und $C$ seine Nachbarn.'
  - typ: vektor
    label: '$X$ liegt gegenüber von $C$'
    namen: ["x", "y"]
    loesung: ["0+4-1", "0+1-3"]
  - typ: vektor
    label: '$X$ liegt gegenüber von $A$'
    namen: ["x", "y"]
    loesung: ["4+1-0", "1+3-0"]
  - typ: text
    label: 'Warum sind es genau drei Möglichkeiten?'
    muster: |
      Im Parallelogramm liegt $X$ genau einem der drei gegebenen Punkte gegenüber. Die beiden anderen sind
      dann die Nachbarn von $X$. Für jede der drei Wahlen gibt es genau einen Punkt, nämlich Nachbar plus
      Nachbar minus Gegenecke. Also gibt es drei Parallelogramme.
hinweise:
  - 'Liegt $X$ gegenüber von $B$, dann sind $A$ und $C$ die Nachbarn von $X$, und $X = A + C - B$.'
  - 'Allgemein gilt: $X$ ist die Summe der beiden Nachbarn minus die gegenüberliegende Ecke.'
loesung: |
  **Ansatz:** Für jede Ecke eines Parallelogramms gilt: Ecke $=$ Nachbar $+$ Nachbar $-$ Gegenecke. Wir gehen die drei Möglichkeiten für die Gegenecke durch.
  ---
  $X$ gegenüber $B$ (Nachbarn $A$, $C$): $X_1 = A + C - B = (-3 \mid 2)$.
  ---
  $X$ gegenüber $C$ (Nachbarn $A$, $B$): $X_2 = A + B - C = (3 \mid -2)$.
  ---
  $X$ gegenüber $A$ (Nachbarn $B$, $C$): $X_3 = B + C - A = (5 \mid 4)$.
  ---
  **Probe für $X_1$:** $\tfrac12(A + C) = (0{,}5 \mid 1{,}5) = \tfrac12(B + X_1)$. Bemerkenswert: Die drei Punkte $X_1, X_2, X_3$ bilden ein Dreieck, dessen Seitenmitten genau $A$, $B$ und $C$ sind.
```

## Das Skalarprodukt und der Winkel zwischen Vektoren

```aufgabe
id: ve-skalar-vorwissen
titel: Der Kosinussatz
art: check
niveau: 1
angabe: |
  In einem Dreieck sind zwei Seiten $a = 3$ und $b = 5$ lang. Sie schließen den Winkel $\gamma = 60°$ ein. Wie lang ist die dritte
  Seite $c$? Runde auf zwei Dezimalstellen. Der Kosinussatz lautet $c^2 = a^2 + b^2 - 2ab\cos\gamma$. Zum Nachlesen:
  [Kapitel 5, Allgemeine Dreiecke: Sinussatz, Kosinussatz, Fläche](/lernen/mathe3/trigonometrie/allgemeine-dreiecke-sinussatz-kosinussatz-flaeche).
teile:
  - typ: zahl
    loesung: "sqrt(9 + 25 - 2*3*5*cos(inRad(60)))"
    fehler:
      - wert: "sqrt(34)"
        meldung: 'Das wäre Pythagoras. Der gilt nur bei einem rechten Winkel. Bei $60°$ fehlt der Korrekturterm $-2ab\cos\gamma$.'
      - wert: "19"
        meldung: 'Das ist $c^2$. Zieh noch die Wurzel.'
loesung: |
  Einsetzen: $c^2 = 9 + 25 - 2\cdot 3\cdot 5\cdot\cos 60° = 34 - 30\cdot 0{,}5 = 19$.
  ---
  Also $c = \sqrt{19} \approx 4{,}36$.
```

Bisher kannst du mit Vektoren Längen messen. Für **Winkel** brauchst du ein neues Werkzeug, das
**Skalarprodukt**. Es ist eine Art Multiplikation zweier Vektoren, deren Ergebnis eine **Zahl** ist. Diese Zahl
misst, wie stark zwei Vektoren in dieselbe Richtung zeigen. Das ist der wichtigste Gedanke dieser Lektion:
**Das Skalarprodukt zweier Vektoren ist kein Vektor, sondern eine Zahl.**

### Definition

:::definition[Skalarprodukt]
Für zwei Vektoren in $\R^2$ beziehungsweise $\R^3$ ist das **Skalarprodukt**
$$\vec a \cdot \vec b = a_1 b_1 + a_2 b_2 \qquad\text{beziehungsweise}\qquad \vec a \cdot \vec b = a_1 b_1 + a_2 b_2 + a_3 b_3.$$
In Worten: Man multipliziert die Komponenten paarweise und **addiert** die Produkte. Das Ergebnis ist ein
**Skalar**, also eine reelle Zahl. Daher kommt der Name.
:::

In der Informatik heißt das Skalarprodukt *dot product*. Für zwei Listen `a` und `b` ist es
`sum(a[i] * b[i] for i in range(n))`.

:::beispiel[Skalarprodukte berechnen]
**Im Raum:** $\begin{pmatrix} 3 \\ -1 \\ 2 \end{pmatrix} \cdot \begin{pmatrix} 4 \\ 5 \\ -1 \end{pmatrix} = 3\cdot 4 + (-1)\cdot 5 + 2\cdot(-1) = 12 - 5 - 2 = 5.$

**Anwendung mit Einheiten:** Du kaufst $3$ kg Äpfel, $2$ kg Birnen und $5$ kg Kartoffeln. Die Preise sind
$2{,}40$, $1{,}50$ und $0{,}80$ Euro pro kg. Mit dem Mengenvektor $\vec m = \begin{pmatrix} 3 \\ 2 \\ 5 \end{pmatrix}$ kg und dem
Preisvektor $\vec p = \begin{pmatrix} 2{,}40 \\ 1{,}50 \\ 0{,}80 \end{pmatrix}$ Euro/kg ist der Gesamtpreis
$$\vec m\cdot\vec p = 3\cdot 2{,}40 + 2\cdot 1{,}50 + 5\cdot 0{,}80 = 7{,}20 + 3{,}00 + 4{,}00 = 14{,}20\ \text{Euro}.$$
Das Ergebnis ist ein einziger Geldbetrag, also eine Zahl, kein Vektor.
:::

:::achtung[Das Skalarprodukt ist kein Vektor]
Jemand rechnet $\begin{pmatrix} 2 \\ 3 \end{pmatrix}\cdot\begin{pmatrix} 4 \\ -1 \end{pmatrix} = \begin{pmatrix} 8 \\ -3 \end{pmatrix}$. Das ist falsch. Die
paarweisen Produkte $8$ und $-3$ müssen noch **addiert** werden. Richtig ist
$\begin{pmatrix} 2 \\ 3 \end{pmatrix}\cdot\begin{pmatrix} 4 \\ -1 \end{pmatrix} = 8 + (-3) = 5$. Ein Skalarprodukt schreibt man nie in eine
Vektorklammer.
:::

### Rechengesetze

:::satz[Rechengesetze des Skalarprodukts]
Für alle Vektoren $\vec a, \vec b, \vec c$ und alle Zahlen $\lambda$ gilt:

1. $\vec a \cdot \vec b = \vec b \cdot \vec a$. Die Reihenfolge ist egal (kommutativ).
2. $\vec a \cdot (\vec b + \vec c) = \vec a\cdot\vec b + \vec a\cdot\vec c$. Man darf ausmultiplizieren (distributiv).
3. $(\lambda\vec a)\cdot\vec b = \lambda\,(\vec a\cdot\vec b)$. Zahlen darf man herausziehen.
4. $\vec a\cdot\vec a = |\vec a|^2$. Das Skalarprodukt eines Vektors mit sich selbst ist das Quadrat seiner Länge.
:::

Alle vier Regeln folgen direkt aus der Koordinatenformel. Regel 4 sieht man so:
$\vec a\cdot\vec a = a_1^2 + a_2^2 + a_3^2 = |\vec a|^2$. Mit den Regeln kann man **binomische Formeln** für
Vektoren herleiten, etwa
$$|\vec a - \vec b|^2 = (\vec a - \vec b)\cdot(\vec a - \vec b) = |\vec a|^2 - 2\,\vec a\cdot\vec b + |\vec b|^2.$$

:::achtung[Kein Kürzen durch einen Vektor]
Für Zahlen folgt aus $a\cdot b = a\cdot c$ mit $a \neq 0$, dass $b = c$ ist. Für das Skalarprodukt stimmt das
**nicht**. Ein Gegenbeispiel: $\vec a = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$, $\vec b = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$, $\vec c = \begin{pmatrix} 0 \\ 2 \end{pmatrix}$.
Dann ist $\vec a\cdot\vec b = 0$ und $\vec a\cdot\vec c = 0$, also $\vec a\cdot\vec b = \vec a\cdot\vec c$. Trotzdem ist $\vec b \neq \vec c$.
Wer hier „durch $\vec a$ kürzt“, schließt also falsch.
:::

```aufgabe
id: ve-skalar-check-quadrat
titel: Ein Vektor mal sich selbst
art: check
niveau: 1
angabe: |
  Berechne $\vec a\cdot\vec a$ für $\vec a = \begin{pmatrix} 1 \\ -2 \\ 3 \end{pmatrix}$. Was bedeutet das Ergebnis?
teile:
  - typ: zahl
    loesung: "1 + 4 + 9"
    fehler:
      - wert: "2"
        meldung: 'Du hast die Komponenten addiert, ohne sie zu quadrieren. Paarweise multiplizieren heißt hier: $1\cdot 1$, $(-2)\cdot(-2)$ und $3\cdot 3$.'
      - wert: "sqrt(14)"
        meldung: 'Das ist die Länge $|\vec a|$. Das Skalarprodukt mit sich selbst ist das **Quadrat** der Länge, also ohne Wurzel.'
loesung: |
  $\vec a\cdot\vec a = 1\cdot 1 + (-2)\cdot(-2) + 3\cdot 3 = 1 + 4 + 9 = 14$.
  ---
  Nach Regel 4 ist das $|\vec a|^2$. Der Vektor hat also die Länge $\sqrt{14}$.
```

### Die geometrische Bedeutung

Das Skalarprodukt hängt eng mit dem Winkel zwischen zwei Vektoren zusammen. Mit dem **Winkel zwischen
$\vec a$ und $\vec b$** ist immer der Winkel gemeint, den die beiden Pfeile einschließen, wenn sie im selben
Punkt beginnen. Er liegt immer zwischen $0°$ und $180°$. Man bezeichnet ihn oft mit $\varphi$ (gelesen „phi“).

:::satz[Skalarprodukt und Winkel]
Für $\vec a, \vec b \neq \vec 0$ mit dem eingeschlossenen Winkel $\varphi$ zwischen $0°$ und $180°$ gilt
$$\vec a\cdot\vec b = |\vec a|\,|\vec b|\cos\varphi.$$
:::

**Worum geht es im Beweis?** Wir berechnen die Länge der dritten Dreiecksseite auf zwei Arten: einmal mit
dem Kosinussatz und einmal mit den Rechengesetzen des Skalarprodukts. Der Vergleich liefert die Formel.

:::beweis
**Schritt 1, das Dreieck:** Beginnen $\vec a$ und $\vec b$ im selben Punkt, verbindet $\vec a - \vec b$ ihre
Spitzen. Die drei Vektoren bilden ein Dreieck. Der Winkel $\varphi$ liegt der Seite $\vec a - \vec b$ gegenüber.

**Schritt 2, Kosinussatz:** Nach dem Kosinussatz aus [Kapitel 5, Allgemeine Dreiecke: Sinussatz, Kosinussatz, Fläche](/lernen/mathe3/trigonometrie/allgemeine-dreiecke-sinussatz-kosinussatz-flaeche) gilt
$$|\vec a - \vec b|^2 = |\vec a|^2 + |\vec b|^2 - 2|\vec a|\,|\vec b|\cos\varphi.$$
**Schritt 3, Rechengesetze:** Mit der binomischen Formel für Vektoren gilt auch
$$|\vec a - \vec b|^2 = |\vec a|^2 - 2\,\vec a\cdot\vec b + |\vec b|^2.$$
**Schritt 4, Vergleich:** Die linken Seiten sind gleich, also auch die rechten. Wir streichen auf beiden
Seiten $|\vec a|^2 + |\vec b|^2$ und teilen durch $-2$. Es bleibt $\vec a\cdot\vec b = |\vec a|\,|\vec b|\cos\varphi$.

Sind $\vec a$ und $\vec b$ parallel, gibt es kein echtes Dreieck. Dann prüft man die Formel direkt mit
$\varphi = 0°$ beziehungsweise $\varphi = 180°$.
:::

**Was haben wir gezeigt?** Die einfache Koordinatenformel „multiplizieren und addieren“ enthält versteckt
die Längen beider Vektoren und den Kosinus des Winkels zwischen ihnen.

```aufgabe
id: ve-skalar-check-formel
titel: Das Skalarprodukt aus Längen und Winkel
art: check
niveau: 1
angabe: |
  Zwei Vektoren haben die Längen $4$ und $5$ und schließen einen Winkel von $60°$ ein. Wie groß ist ihr Skalarprodukt?
teile:
  - typ: zahl
    loesung: "4*5*cos(inRad(60))"
    fehler:
      - wert: "20"
        meldung: 'Das wäre richtig, wenn die Vektoren in dieselbe Richtung zeigen ($\cos 0° = 1$). Hier fehlt der Faktor $\cos 60° = 0{,}5$.'
      - wert: "4*5*sin(inRad(60))"
        meldung: 'Im Skalarprodukt steht der **Kosinus** des Winkels, nicht der Sinus.'
loesung: |
  $\vec a\cdot\vec b = |\vec a|\,|\vec b|\cos\varphi = 4\cdot 5\cdot\cos 60°$.
  ---
  Mit $\cos 60° = 0{,}5$ ergibt sich $20\cdot 0{,}5 = 10$.
```

### Den Winkel berechnen

Löst man die Formel nach $\cos\varphi$ auf, erhält man den Winkel zwischen zwei Vektoren:
$$\cos\varphi = \frac{\vec a\cdot\vec b}{|\vec a|\,|\vec b|}, \qquad \varphi = \arccos\frac{\vec a\cdot\vec b}{|\vec a|\,|\vec b|}.$$
Dabei ist $\arccos$ (gelesen „Arkuskosinus“) die Umkehrfunktion des Kosinus. Auf dem Taschenrechner heißt sie
$\cos^{-1}$. Sie liefert immer einen Winkel zwischen $0°$ und $180°$.

Das ist kein Zufall, sondern passt genau: Der Winkel zwischen zwei Vektoren liegt immer in diesem Bereich.
Darum gibt es hier **kein Quadrantenproblem** wie beim Arkustangens in [Kapitel 15](/lernen/mathe3/komplexe-zahlen/polarform-und-exponentialform).
Der Taschenrechner liefert direkt den richtigen Winkel, auch wenn er stumpf ist.

:::beispiel[Ein stumpfer Winkel]
Gesucht ist der Winkel zwischen $\vec a = \begin{pmatrix} 2 \\ 1 \\ -2 \end{pmatrix}$ und $\vec b = \begin{pmatrix} 1 \\ -1 \\ 4 \end{pmatrix}$.

**Schritt 1, Skalarprodukt:** $\vec a\cdot\vec b = 2 - 1 - 8 = -7$.

**Schritt 2, Längen:** $|\vec a| = \sqrt{4 + 1 + 4} = 3$ und $|\vec b| = \sqrt{1 + 1 + 16} = \sqrt{18}$.

**Schritt 3, Kosinus:** $\cos\varphi = \dfrac{-7}{3\sqrt{18}} \approx -0{,}5500$.

**Schritt 4, Winkel:** $\varphi = \arccos(-0{,}5500) \approx 123{,}37°$. Der Kosinus ist negativ, also ist der Winkel
stumpf. Der Taschenrechner liefert den stumpfen Winkel direkt.
:::

Das **Vorzeichen** des Skalarprodukts verrät die Art des Winkels, ohne dass man ihn ausrechnet. Die
Längen sind positiv, also hat $\vec a\cdot\vec b$ dasselbe Vorzeichen wie $\cos\varphi$:

- Ist $\vec a\cdot\vec b > 0$, dann ist der Winkel **spitz**, also kleiner als $90°$.
- Ist $\vec a\cdot\vec b = 0$, dann ist der Winkel ein **rechter** Winkel, also genau $90°$.
- Ist $\vec a\cdot\vec b < 0$, dann ist der Winkel **stumpf**, also größer als $90°$.

### Das Skalarprodukt im Widget

```aufgabe
id: ve-skalar-check-vorhersage
titel: Was passiert, wenn der Winkel stumpf wird?
art: check
niveau: 1
angabe: |
  Im folgenden Widget kannst du die Spitze von $\vec a$ ziehen und so $\vec a$ um $\vec b$ herumführen. Mach zuerst eine Vorhersage: Was passiert mit dem Skalarprodukt
  $\vec a\cdot\vec b$, wenn der Winkel zwischen den Vektoren größer als $90°$ wird?
teile:
  - typ: auswahl
    optionen:
      - 'Es wird negativ.'
      - 'Es bleibt positiv, wird aber kleiner.'
      - 'Es wird zu einem Vektor, der nach hinten zeigt.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Denk an $\vec a\cdot\vec b = |\vec a|\,|\vec b|\cos\varphi$. Welches Vorzeichen hat der Kosinus für Winkel über $90°$?'
      - wert: 2
        meldung: 'Das Skalarprodukt ist immer eine Zahl, nie ein Vektor. Die Frage ist nur, welches Vorzeichen diese Zahl hat.'
loesung: |
  Die Längen sind positiv, also hat $\vec a\cdot\vec b$ dasselbe Vorzeichen wie $\cos\varphi$.
  ---
  Für $\varphi > 90°$ ist $\cos\varphi < 0$, also wird das Skalarprodukt negativ. Bei genau $90°$ ist es null.
```

```widget
name: vektoren
titel: Skalarprodukt und Winkel
props:
  a: [4, 2]
  b: [3, -1]
  zeige: [skalarprodukt, winkel]
```

**Beobachte:** Zieh die Spitze von $\vec a$ langsam um den Ursprung herum und achte auf das Vorzeichen des
Skalarprodukts. Suche die Stellung, bei der es genau null ist.

**Erkläre:** Bei $\varphi = 90°$ ist $\cos\varphi = 0$, also verschwindet das Skalarprodukt. Bei gleichbleibenden
Längen ist es am größten, wenn beide Pfeile in dieselbe Richtung zeigen, nämlich $|\vec a|\,|\vec b|$.

:::achtung[Winkel im Dreieck: Die Vektoren müssen von der Ecke weg zeigen]
Im Dreieck $A(0 \mid 0)$, $B(4 \mid 0)$, $C(1 \mid 3)$ ist der Innenwinkel bei $B$ gesucht. Jemand nimmt
$\overrightarrow{AB} = \begin{pmatrix} 4 \\ 0 \end{pmatrix}$ und $\overrightarrow{BC} = \begin{pmatrix} -3 \\ 3 \end{pmatrix}$:
$\cos\beta = \frac{-12}{4\sqrt{18}} \approx -0{,}7071$, also $\beta = 135°$. Das ist falsch, denn $\overrightarrow{AB}$ zeigt
**zur** Ecke $B$ hin.

Richtig sind die beiden Vektoren, die von $B$ **weg** zeigen: $\overrightarrow{BA} = \begin{pmatrix} -4 \\ 0 \end{pmatrix}$ und
$\overrightarrow{BC} = \begin{pmatrix} -3 \\ 3 \end{pmatrix}$. Dann ist $\cos\beta = \frac{12}{4\sqrt{18}} \approx 0{,}7071$ und $\beta = 45°$.
Der falsche Wert $135°$ ist genau der Nebenwinkel $180° - 45°$. **Kontrolle:** Die drei Innenwinkel müssen
zusammen $180°$ ergeben.
:::

:::achtung[Taschenrechner im Bogenmaß]
Jemand berechnet $\arccos(0{,}5)$ und liest $1{,}047$ ab. Daraus schreibt er „$\varphi \approx 1{,}05°$“. Das ist
falsch: Der Rechner stand auf Bogenmaß (RAD), und $1{,}047$ ist $\frac{\pi}{3}$ im Bogenmaß. In Grad ist das
$60°$. Stelle den Taschenrechner vor jeder Winkelrechnung auf **DEG**, wenn das Ergebnis in Grad verlangt ist.
:::

```reflexion
frage: Beim Umrechnen in Polarkoordinaten muss man mit dem Arkustangens aufpassen, in welchem Quadranten der Winkel liegt. Warum braucht man beim Winkel zwischen zwei Vektoren keine solche Fallunterscheidung?
antwort: |
  Der Winkel zwischen zwei Vektoren liegt per Definition immer zwischen $0°$ und $180°$. Der Arkuskosinus liefert
  genau Werte aus diesem Bereich, und zu jedem Kosinuswert zwischen $-1$ und $1$ gibt es dort genau einen Winkel.

  Ein negativer Kosinus führt also automatisch auf einen stumpfen Winkel. Beim Arkustangens ist das anders: Er
  liefert nur Werte zwischen $-90°$ und $90°$, obwohl ein Polarwinkel überall zwischen $0°$ und $360°$ liegen kann.
```

:::merke[Rezept: Winkel zwischen zwei Vektoren]
1. Skalarprodukt $\vec a\cdot\vec b$ berechnen: paarweise multiplizieren, dann addieren.
2. Beide Längen $|\vec a|$ und $|\vec b|$ berechnen.
3. $\cos\varphi = \dfrac{\vec a\cdot\vec b}{|\vec a|\,|\vec b|}$, dann $\varphi = \arccos(\ldots)$ mit dem Rechner auf DEG.
4. Im Dreieck: Die Vektoren müssen von der Ecke weg zeigen. Kontrolle mit der Winkelsumme $180°$.
:::

```aufgabe
id: ve-skalarprodukt
titel: Skalarprodukt und Art des Winkels
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Berechne $\vec a\cdot\vec b$ für $\vec a = \begin{pmatrix} 2 \\ -5 \\ 1 \end{pmatrix}$ und $\vec b = \begin{pmatrix} 3 \\ 1 \\ -4 \end{pmatrix}$.
  Ist der eingeschlossene Winkel spitz, recht oder stumpf?
teile:
  - typ: zahl
    label: '$\vec a\cdot\vec b$'
    loesung: "2*3 + (-5)*1 + 1*(-4)"
    fehler:
      - wert: "7"
        meldung: 'Beim zweiten Produkt stimmt das Vorzeichen nicht: $(-5)\cdot 1 = -5$.'
      - wert: "5"
        meldung: 'Beim dritten Produkt stimmt das Vorzeichen nicht: $1\cdot(-4) = -4$.'
  - typ: auswahl
    label: 'Art des Winkels'
    optionen: ["spitz", "rechter Winkel", "stumpf"]
    richtig: [2]
    fehler:
      - wert: 0
        meldung: 'Ein negatives Skalarprodukt bedeutet einen negativen Kosinus, also einen stumpfen Winkel.'
hinweise:
  - 'Multipliziere die Komponenten paarweise und addiere. Das Vorzeichen des Ergebnisses verrät die Art des Winkels.'
loesung: |
  **Ansatz:** Skalarprodukt nach der Koordinatenformel, dann das Vorzeichen deuten.
  ---
  $\vec a\cdot\vec b = 2\cdot 3 + (-5)\cdot 1 + 1\cdot(-4) = 6 - 5 - 4 = -3$.
  ---
  Das Skalarprodukt ist negativ. Also ist $\cos\varphi < 0$, und der Winkel ist stumpf.
```

```aufgabe
id: ve-winkelart-ebene
titel: Spitz, recht oder stumpf?
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Entscheide für jedes Paar ohne Winkelberechnung, ob die Vektoren einen spitzen, einen rechten oder einen stumpfen Winkel einschließen.
teile:
  - typ: auswahl
    label: '$\begin{pmatrix} 2 \\ 5 \end{pmatrix}$ und $\begin{pmatrix} 5 \\ -2 \end{pmatrix}$'
    optionen: ["spitz", "rechter Winkel", "stumpf"]
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Rechne das Skalarprodukt aus: $2\cdot 5 + 5\cdot(-2)$.'
  - typ: auswahl
    label: '$\begin{pmatrix} -1 \\ 3 \end{pmatrix}$ und $\begin{pmatrix} 2 \\ 1 \end{pmatrix}$'
    optionen: ["spitz", "rechter Winkel", "stumpf"]
    richtig: [0]
    fehler:
      - wert: 2
        meldung: 'Eine negative Komponente macht das Skalarprodukt nicht automatisch negativ. Rechne: $-2 + 3 = 1$.'
  - typ: auswahl
    label: '$\begin{pmatrix} 4 \\ -1 \end{pmatrix}$ und $\begin{pmatrix} -2 \\ -3 \end{pmatrix}$'
    optionen: ["spitz", "rechter Winkel", "stumpf"]
    richtig: [2]
    fehler:
      - wert: 0
        meldung: 'Rechne: $4\cdot(-2) + (-1)\cdot(-3) = -8 + 3$.'
hinweise:
  - 'Berechne jeweils nur das Skalarprodukt und schau auf das Vorzeichen.'
loesung: |
  **Ansatz:** Das Vorzeichen des Skalarprodukts entscheidet: positiv heißt spitz, null heißt recht, negativ heißt stumpf.
  ---
  Erstes Paar: $10 - 10 = 0$, rechter Winkel. Zweites Paar: $-2 + 3 = 1 > 0$, spitz. Drittes Paar: $-8 + 3 = -5 < 0$, stumpf.
```

```aufgabe
id: ve-winkel-ebene
titel: Winkel in der Ebene
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Berechne den Winkel zwischen $\vec a = \begin{pmatrix} 3 \\ 1 \end{pmatrix}$ und $\vec b = \begin{pmatrix} -1 \\ 2 \end{pmatrix}$ in Grad, auf zwei Dezimalstellen.
teile:
  - typ: zahl
    label: '$\varphi$'
    einheit: "°"
    loesung: "inGrad(acos(-1/(sqrt(10)*sqrt(5))))"
    fehler:
      - wert: "inGrad(acos(1/(sqrt(10)*sqrt(5))))"
        meldung: 'Das Vorzeichen des Skalarprodukts ist verloren gegangen. $3\cdot(-1) + 1\cdot 2 = -1$ ist negativ, der Winkel also stumpf.'
      - wert: "acos(-1/(sqrt(10)*sqrt(5)))"
        meldung: 'Das ist der Winkel im Bogenmaß. Stelle den Rechner auf DEG.'
hinweise:
  - '$\cos\varphi = \dfrac{\vec a\cdot\vec b}{|\vec a|\,|\vec b|}$.'
loesung: |
  **Ansatz:** Winkelformel mit Skalarprodukt und Längen.
  ---
  $\vec a\cdot\vec b = -3 + 2 = -1$, $|\vec a| = \sqrt{10}$, $|\vec b| = \sqrt 5$.
  ---
  $\cos\varphi = \dfrac{-1}{\sqrt{50}} \approx -0{,}1414$, also $\varphi \approx 98{,}13°$. Knapp stumpf, passend zum negativen Skalarprodukt.
```

```aufgabe
id: ve-winkel
titel: Winkel zwischen zwei Vektoren im Raum
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Berechne den Winkel zwischen $\vec a = \begin{pmatrix} 1 \\ 2 \\ 2 \end{pmatrix}$ und $\vec b = \begin{pmatrix} 2 \\ -1 \\ 2 \end{pmatrix}$ in Grad, auf zwei Dezimalstellen.
teile:
  - typ: zahl
    label: '$\varphi$'
    einheit: "°"
    loesung: "inGrad(acos(4/9))"
    anzeige: '\arccos\tfrac49 \approx 63{,}61°'
    fehler:
      - wert: "acos(4/9)"
        meldung: 'Das ist der Winkel im Bogenmaß. Stelle den Rechner auf DEG.'
      - wert: "180 - inGrad(acos(4/9))"
        meldung: 'Das ist der Nebenwinkel. Das Skalarprodukt ist positiv, der Winkel muss also spitz sein.'
hinweise:
  - 'Beide Vektoren haben eine ganzzahlige Länge.'
  - 'Berechne $\vec a\cdot\vec b$, $|\vec a|$ und $|\vec b|$ und setze in $\cos\varphi = \frac{\vec a\cdot\vec b}{|\vec a|\,|\vec b|}$ ein.'
loesung: |
  **Ansatz:** Winkelformel $\cos\varphi = \dfrac{\vec a\cdot\vec b}{|\vec a|\,|\vec b|}$.
  ---
  $\vec a\cdot\vec b = 2 - 2 + 4 = 4$, $|\vec a| = \sqrt{1 + 4 + 4} = 3$ und $|\vec b| = \sqrt{4 + 1 + 4} = 3$.
  ---
  $\cos\varphi = \dfrac{4}{3\cdot 3} = \dfrac49$, also $\varphi = \arccos\tfrac49 \approx 63{,}61°$. Spitz, passend zum positiven Skalarprodukt.
gefuehrt:
  - text: 'Berechne das Skalarprodukt $\vec a\cdot\vec b$.'
    teil: { typ: zahl, loesung: "4", fehler: [ { wert: "8", meldung: 'Das mittlere Produkt ist $2\cdot(-1) = -2$, nicht $+2$.' } ] }
    erklaerung: '$1\cdot 2 + 2\cdot(-1) + 2\cdot 2 = 2 - 2 + 4 = 4$.'
  - text: 'Berechne $|\vec a|$.'
    teil: { typ: zahl, loesung: "3" }
    erklaerung: '$\sqrt{1 + 4 + 4} = 3$.'
  - text: 'Berechne $|\vec b|$.'
    teil: { typ: zahl, loesung: "3" }
    erklaerung: '$\sqrt{4 + 1 + 4} = 3$.'
  - text: 'Welchen Wert hat $\cos\varphi$?'
    teil: { typ: zahl, loesung: "4/9", fehler: [ { wert: "4/3", meldung: 'Teile durch das **Produkt** beider Längen, also durch $9$.' } ] }
    erklaerung: '$\cos\varphi = \frac{4}{3\cdot 3} = \frac49$.'
  - text: 'Bestimme den Winkel in Grad.'
    teil: { typ: zahl, einheit: "°", loesung: "inGrad(acos(4/9))" }
    erklaerung: '$\varphi = \arccos\frac49 \approx 63{,}61°$.'
```

```aufgabe
id: ve-dreieck-winkel
titel: Rechtwinkliges Dreieck im Raum
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Gegeben ist das Dreieck $A(2 \mid 1 \mid 0)$, $B(5 \mid 3 \mid -1)$, $C(1 \mid 3 \mid 1)$.
  Zeige, dass es bei $A$ rechtwinklig ist, und berechne die Innenwinkel $\beta$ und $\gamma$ in Grad, auf zwei Dezimalstellen.
teile:
  - typ: zahl
    label: '$\overrightarrow{AB}\cdot\overrightarrow{AC}$'
    loesung: "3*(-1) + 2*2 + (-1)*1"
  - typ: zahl
    label: '$\beta$'
    einheit: "°"
    loesung: "inGrad(acos(14/(sqrt(14)*sqrt(20))))"
    fehler:
      - wert: "180 - inGrad(acos(14/(sqrt(14)*sqrt(20))))"
        meldung: 'Das ist der Nebenwinkel. Für den Winkel bei $B$ müssen beide Vektoren von $B$ weg zeigen: $\overrightarrow{BA}$ und $\overrightarrow{BC}$.'
  - typ: zahl
    label: '$\gamma$'
    einheit: "°"
    loesung: "90 - inGrad(acos(14/(sqrt(14)*sqrt(20))))"
hinweise:
  - 'Rechter Winkel bei $A$ heißt $\overrightarrow{AB}\cdot\overrightarrow{AC} = 0$. Für den Winkel bei $B$ brauchst du $\overrightarrow{BA}$ und $\overrightarrow{BC}$.'
  - 'Wenn ein Winkel $90°$ ist, ergibt sich der dritte aus der Winkelsumme.'
loesung: |
  **Ansatz:** Rechter Winkel heißt Skalarprodukt null. Die anderen Winkel berechnen wir mit der Winkelformel, immer mit Vektoren, die von der Ecke weg zeigen.
  ---
  $\overrightarrow{AB} = \begin{pmatrix} 3 \\ 2 \\ -1 \end{pmatrix}$, $\overrightarrow{AC} = \begin{pmatrix} -1 \\ 2 \\ 1 \end{pmatrix}$, $\overrightarrow{AB}\cdot\overrightarrow{AC} = -3 + 4 - 1 = 0$. Also $\alpha = 90°$.
  ---
  $\overrightarrow{BA} = \begin{pmatrix} -3 \\ -2 \\ 1 \end{pmatrix}$, $\overrightarrow{BC} = \begin{pmatrix} -4 \\ 0 \\ 2 \end{pmatrix}$. Skalarprodukt $12 + 0 + 2 = 14$, Längen $\sqrt{14}$ und $\sqrt{20}$.
  ---
  $\cos\beta = \dfrac{14}{\sqrt{14}\sqrt{20}} \approx 0{,}8367$, also $\beta \approx 33{,}21°$. Dann $\gamma = 180° - 90° - \beta \approx 56{,}79°$.
  ---
  **Kontrolle** mit $\overrightarrow{CA}\cdot\overrightarrow{CB} = 6$: $\cos\gamma = \tfrac{6}{\sqrt6\sqrt{20}} \approx 0{,}5477$, also $\gamma \approx 56{,}79°$. Es passt.
```

```aufgabe
id: ve-winkel-fehler-betrag
titel: Ein falsch korrigierter Winkel
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  Ein Mitschüler berechnet den Winkel zwischen $\vec a = \begin{pmatrix} 2 \\ 3 \\ -6 \end{pmatrix}$ und $\vec b = \begin{pmatrix} -2 \\ 2 \\ 1 \end{pmatrix}$. Er erhält
  $\cos\varphi = -\tfrac{4}{21}$ und sagt: „Ein Winkel kann nicht negativ sein, also nehme ich den Betrag. Es ist
  $\varphi = \arccos\tfrac{4}{21} \approx 79{,}02°$.“

  a) Was ist an seiner Überlegung falsch?

  b) Wie groß ist der Winkel wirklich? Gib ihn in Grad auf zwei Dezimalstellen an.
teile:
  - typ: auswahl
    label: 'a)'
    optionen:
      - 'Ein negativer Kosinus bedeutet keinen negativen Winkel, sondern einen stumpfen. Der Betrag verfälscht das Ergebnis.'
      - 'Er hätte vorher die Vektoren normieren müssen.'
      - 'Die Überlegung ist richtig.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Die Winkelformel teilt schon durch die Längen. Normieren ändert am Kosinus nichts.'
      - wert: 2
        meldung: 'Der Arkuskosinus kann negative Werte verarbeiten und liefert dann einen Winkel über $90°$.'
  - typ: zahl
    label: 'b) $\varphi$'
    einheit: "°"
    loesung: "inGrad(acos(-4/21))"
    fehler:
      - wert: "inGrad(acos(4/21))"
        meldung: 'Das ist der Wert des Mitschülers, also der Nebenwinkel. Setze $-\tfrac{4}{21}$ mit Vorzeichen ein.'
hinweise:
  - 'Welche Werte liefert der Arkuskosinus für negative Argumente?'
  - 'Der Winkel zwischen Vektoren liegt zwischen $0°$ und $180°$. Ein negativer Kosinus gehört zu einem Winkel über $90°$.'
loesung: |
  **Ansatz:** Wir prüfen zuerst die Rechnung und dann die Deutung des negativen Kosinus.
  ---
  Rechnung: $\vec a\cdot\vec b = -4 + 6 - 6 = -4$, $|\vec a| = \sqrt{4 + 9 + 36} = 7$ und $|\vec b| = \sqrt{4 + 4 + 1} = 3$. Also $\cos\varphi = -\tfrac{4}{21}$. Bis hierher stimmt alles.
  ---
  a) Der Fehler steckt in der Deutung. Ein negativer Kosinus heißt nicht „negativer Winkel“, sondern „stumpfer Winkel“. Der Arkuskosinus liefert dafür direkt einen Wert zwischen $90°$ und $180°$.
  ---
  b) $\varphi = \arccos\left(-\tfrac{4}{21}\right) \approx 100{,}98°$. Der Wert $79{,}02°$ des Mitschülers ist der Nebenwinkel $180° - 100{,}98°$.
```

```aufgabe
id: ve-winkel-parameter
titel: Ein Vektor mit vorgegebenem Winkel
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Für welche **positive** Zahl $t$ schließen $\vec a = \begin{pmatrix} 1 \\ t \end{pmatrix}$ und $\vec b = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$ einen Winkel von $60°$ ein?
  Gib den exakten Wert oder einen Wert auf drei Dezimalstellen an.
teile:
  - typ: zahl
    label: '$t$'
    loesung: "sqrt(3)"
    fehler:
      - wert: "3"
        meldung: 'Das ist $t^2$. Zieh noch die Wurzel.'
      - wert: "sqrt(3)/3"
        meldung: 'Mit diesem $t$ wäre der Winkel $30°$. Prüfe die Gleichung $\frac{1}{\sqrt{1 + t^2}} = \frac12$ noch einmal.'
hinweise:
  - 'Setze in die Winkelformel ein: $\cos 60° = \dfrac{\vec a\cdot\vec b}{|\vec a|\,|\vec b|}$, und es ist $\cos 60° = \tfrac12$.'
  - 'Es entsteht $\frac{1}{\sqrt{1 + t^2}} = \frac12$, also $\sqrt{1 + t^2} = 2$. Quadriere beide Seiten.'
loesung: |
  **Ansatz:** Winkelformel mit dem bekannten Winkel aufstellen und nach $t$ lösen.
  ---
  $\vec a\cdot\vec b = 1$, $|\vec a| = \sqrt{1 + t^2}$, $|\vec b| = 1$. Also $\frac{1}{\sqrt{1 + t^2}} = \cos 60° = \frac12$.
  ---
  Kehrwerte: $\sqrt{1 + t^2} = 2$. Quadrieren: $1 + t^2 = 4$, also $t^2 = 3$ und $t = \sqrt 3 \approx 1{,}732$ (die positive Lösung).
  ---
  **Probe:** $\cos\varphi = \frac{1}{\sqrt{1 + 3}} = \frac12$, also $\varphi = 60°$. Es stimmt.
```

```aufgabe
id: ve-winkel-quader
titel: Winkel an einer Raumdiagonale
niveau: 3
lernziel: 5
kompetenz: modellieren
angabe: |
  Ein quaderförmiger Raum ist $6$ m lang, $3$ m breit und $2$ m hoch. Eine Ecke am Boden liegt im Ursprung $A(0 \mid 0 \mid 0)$,
  die gegenüberliegende Ecke an der Decke ist $G(6 \mid 3 \mid 2)$. Ein Seil wird straff von $A$ nach $G$ gespannt.

  a) Unter welchem Winkel steigt das Seil gegenüber dem Boden an? Das ist der Winkel zwischen $\overrightarrow{AG}$ und der
  Bodendiagonale $\overrightarrow{AC}$ mit $C(6 \mid 3 \mid 0)$.

  b) Welchen Winkel schließt das Seil mit der langen Bodenkante $\overrightarrow{AB}$, $B(6 \mid 0 \mid 0)$, ein?

  Gib beide Winkel in Grad auf zwei Dezimalstellen an.
teile:
  - typ: zahl
    label: 'a) Steigungswinkel'
    einheit: "°"
    loesung: "inGrad(acos(45/(7*sqrt(45))))"
    fehler:
      - wert: "inGrad(acos(4/(7*2)))"
        meldung: 'Das ist der Winkel zur senkrechten Kante. Der Steigungswinkel wird gegen den Boden gemessen, also gegen die Bodendiagonale $\overrightarrow{AC}$.'
  - typ: zahl
    label: 'b) Winkel zur Kante $AB$'
    einheit: "°"
    loesung: "inGrad(acos(36/(7*6)))"
hinweise:
  - '$\overrightarrow{AG} = \begin{pmatrix} 6 \\ 3 \\ 2 \end{pmatrix}$ hat die Länge $7$. Berechne auch $\overrightarrow{AC}$ und $\overrightarrow{AB}$ mit ihren Längen.'
  - 'Setze jeweils in $\cos\varphi = \frac{\vec a\cdot\vec b}{|\vec a|\,|\vec b|}$ ein. Kontrolle für a): Der Sinus des Steigungswinkels ist Höhe durch Seillänge.'
loesung: |
  **Ansatz:** Beide Winkel sind Winkel zwischen Vektoren, die in $A$ beginnen. Wir verwenden jeweils die Winkelformel.
  ---
  $\overrightarrow{AG} = \begin{pmatrix} 6 \\ 3 \\ 2 \end{pmatrix}$, $|\overrightarrow{AG}| = \sqrt{36 + 9 + 4} = 7$ m. $\overrightarrow{AC} = \begin{pmatrix} 6 \\ 3 \\ 0 \end{pmatrix}$, $|\overrightarrow{AC}| = \sqrt{45}$ m.
  ---
  a) $\overrightarrow{AG}\cdot\overrightarrow{AC} = 36 + 9 + 0 = 45$, also $\cos\varphi = \dfrac{45}{7\sqrt{45}} = \dfrac{\sqrt{45}}{7} \approx 0{,}9583$ und $\varphi \approx 16{,}60°$.
  ---
  b) $\overrightarrow{AB} = \begin{pmatrix} 6 \\ 0 \\ 0 \end{pmatrix}$, $\overrightarrow{AG}\cdot\overrightarrow{AB} = 36$, also $\cos\psi = \dfrac{36}{7\cdot 6} = \dfrac67$ und $\psi \approx 31{,}00°$.
  ---
  **Kontrolle für a):** $\sin\varphi = \frac{\text{Höhe}}{\text{Seillänge}} = \frac27$ ergibt ebenfalls $\varphi \approx 16{,}60°$. **Antwort:** Das Seil steigt unter rund $16{,}60°$ an und bildet mit der langen Bodenkante rund $31{,}00°$.
```

## Orthogonalität, Normalvektor und Projektion

```aufgabe
id: ve-ortho-vorwissen
titel: Skalarprodukt und rechter Winkel
art: check
niveau: 1
angabe: |
  Berechne $\begin{pmatrix} 6 \\ -2 \end{pmatrix}\cdot\begin{pmatrix} 1 \\ 3 \end{pmatrix}$. Was folgt daraus für den Winkel zwischen den beiden Vektoren? Zum Nachlesen:
  [6.6 Das Skalarprodukt](/lernen/mathe3/vektoren/das-skalarprodukt-und-der-winkel-zwischen-vektoren).
teile:
  - typ: zahl
    label: 'Skalarprodukt'
    loesung: "6*1 + (-2)*3"
    fehler:
      - wert: "12"
        meldung: 'Das Vorzeichen des zweiten Produkts stimmt nicht: $(-2)\cdot 3 = -6$.'
  - typ: auswahl
    label: 'Winkel'
    optionen: ['spitz', 'genau $90°$', 'stumpf']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Das Skalarprodukt ist null. Welcher Winkel hat den Kosinus $0$?'
loesung: |
  $6\cdot 1 + (-2)\cdot 3 = 6 - 6 = 0$.
  ---
  Das Skalarprodukt ist $|\vec a|\,|\vec b|\cos\varphi$. Es ist null, also ist $\cos\varphi = 0$ und $\varphi = 90°$.
```

Die wichtigste Anwendung des Skalarprodukts ist die Prüfung auf rechte Winkel. Außerdem lernst du in dieser
Lektion zwei Werkzeuge. Das erste findet in der Ebene schnell einen Vektor, der auf einem gegebenen normal
steht. Das zweite zerlegt einen Vektor in einen Anteil längs einer Richtung und einen Anteil quer dazu.

### Orthogonalität

Zwei Vektoren heißen **orthogonal** (griechisch für „rechtwinklig“), wenn sie einen rechten Winkel
einschließen. Man sagt auch: Sie stehen **normal** oder senkrecht aufeinander. Man schreibt $\vec a \perp \vec b$.

:::satz[Orthogonalitätskriterium]
Zwei Vektoren $\vec a, \vec b \neq \vec 0$ stehen genau dann normal aufeinander, wenn
$$\vec a\cdot\vec b = 0.$$
:::

**Warum?** Es gilt $\vec a\cdot\vec b = |\vec a|\,|\vec b|\cos\varphi$. Die beiden Längen sind nicht null. Also ist das
Produkt genau dann null, wenn $\cos\varphi = 0$ ist. Zwischen $0°$ und $180°$ gilt das nur für $\varphi = 90°$.
„Genau dann, wenn“ bedeutet: Die Aussage gilt in beide Richtungen. Aus dem rechten Winkel folgt
Skalarprodukt null, und aus Skalarprodukt null folgt der rechte Winkel.

Warum die Bedingung $\vec a, \vec b \neq \vec 0$? Der Nullvektor hat keine Richtung. Sein Skalarprodukt mit jedem
Vektor ist null, aber einen Winkel kann man mit ihm nicht bilden.

:::beispiel[Orthogonal oder nicht?]
**Beispiel:** $\begin{pmatrix} 2 \\ -1 \\ 3 \end{pmatrix}$ und $\begin{pmatrix} 4 \\ 5 \\ -1 \end{pmatrix}$. Das Skalarprodukt ist $8 - 5 - 3 = 0$. Die
Vektoren stehen normal aufeinander.

**Nichtbeispiel:** $\begin{pmatrix} 2 \\ -1 \\ 3 \end{pmatrix}$ und $\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$. Das Skalarprodukt ist $2 - 1 + 3 = 4 \neq 0$.
Die Vektoren stehen nicht normal aufeinander. Der Winkel ist spitz.

**Mit Parameter:** Für welches $t$ steht $\begin{pmatrix} 2 \\ t \\ 1 \end{pmatrix}$ normal auf $\begin{pmatrix} 3 \\ -2 \\ 4 \end{pmatrix}$? Bedingung:
$6 - 2t + 4 = 0$, also $2t = 10$ und $t = 5$. Probe: $6 - 10 + 4 = 0$.
:::

### Der Satz von Thales mit Vektoren

Das Kriterium ist auch ein starkes Beweiswerkzeug. Der **Satz von Thales** sagt: Liegt $C$ auf einem Kreis
mit dem Durchmesser $AB$, dann hat das Dreieck $ABC$ bei $C$ einen rechten Winkel. Wir beweisen das mit
Vektoren. Das ist eine typische Frage für die mündliche Prüfung.

:::beispiel[Beweis des Satzes von Thales]
**Schritt 1, Bezeichnungen:** $M$ ist der Kreismittelpunkt, also die Mitte von $AB$. Wir setzen
$\vec r = \overrightarrow{MB}$ und $\vec c = \overrightarrow{MC}$. Dann ist $\overrightarrow{MA} = -\vec r$. Beide Vektoren sind Radien,
also gilt $|\vec c| = |\vec r|$.

**Schritt 2, die Seiten bei $C$:** $\overrightarrow{CA} = \overrightarrow{MA} - \overrightarrow{MC} = -\vec r - \vec c$ und
$\overrightarrow{CB} = \vec r - \vec c$.

**Schritt 3, Skalarprodukt ausmultiplizieren:**
$$\overrightarrow{CA}\cdot\overrightarrow{CB} = (-\vec r - \vec c)\cdot(\vec r - \vec c) = -|\vec r|^2 + \vec r\cdot\vec c - \vec c\cdot\vec r + |\vec c|^2 = |\vec c|^2 - |\vec r|^2 = 0.$$
**Schritt 4, Deutung:** Das Skalarprodukt ist null, weil beide Radien gleich lang sind. Also steht
$\overrightarrow{CA}$ normal auf $\overrightarrow{CB}$, und der Winkel bei $C$ ist ein rechter.
:::

Auf dieselbe Art beweist man die Kriterien für besondere Parallelogramme aus
[6.5 Parallelogramme](/lernen/mathe3/vektoren/parallelogramme-und-besondere-vierecke). Spannen $\vec a$ und $\vec b$
ein Parallelogramm auf, dann sind die Diagonalen $\vec a + \vec b$ und $\vec b - \vec a$. Es gilt
$$(\vec a + \vec b)\cdot(\vec b - \vec a) = |\vec b|^2 - |\vec a|^2.$$
Die Diagonalen stehen also genau dann normal aufeinander, wenn $|\vec a| = |\vec b|$ ist, also bei einer Raute.
Ebenso gilt $|\vec a + \vec b|^2 - |\vec a - \vec b|^2 = 4\,\vec a\cdot\vec b$. Die Diagonalen sind also genau dann gleich
lang, wenn $\vec a\cdot\vec b = 0$ ist, also bei einem Rechteck.

### Normalvektoren in der Ebene

Ein **Normalvektor** zu $\vec a$ ist ein Vektor, der auf $\vec a$ normal steht. In der Ebene gibt es dafür einen
einfachen Trick.

:::satz[Normalvektor in der Ebene]
Zu $\vec a = \begin{pmatrix} a_1 \\ a_2 \end{pmatrix} \neq \vec 0$ ist
$$\vec n = \begin{pmatrix} -a_2 \\ a_1 \end{pmatrix}$$
ein Normalvektor gleicher Länge. Er entsteht durch Drehung von $\vec a$ um $90°$ gegen den Uhrzeigersinn. Auch
$-\vec n = \begin{pmatrix} a_2 \\ -a_1 \end{pmatrix}$ und jedes andere Vielfache von $\vec n$ ist ein Normalvektor.
:::

Merkregel: **Koordinaten vertauschen und bei genau einer das Vorzeichen ändern.** Die Probe zeigt, warum das
immer klappt: $\vec a\cdot\vec n = a_1\cdot(-a_2) + a_2\cdot a_1 = 0$.

:::beispiel[Normalvektor bestimmen]
Zu $\vec a = \begin{pmatrix} 7 \\ -3 \end{pmatrix}$ vertauschen wir die Koordinaten zu $(-3, 7)$ und ändern bei der ersten das
Vorzeichen. Das ergibt $\vec n = \begin{pmatrix} 3 \\ 7 \end{pmatrix}$. Probe: $7\cdot 3 + (-3)\cdot 7 = 21 - 21 = 0$.

**Nichtbeispiel:** Nur vertauschen ohne Vorzeichenwechsel ergibt $\begin{pmatrix} -3 \\ 7 \end{pmatrix}$. Das ist **kein**
Normalvektor, denn $7\cdot(-3) + (-3)\cdot 7 = -42 \neq 0$.
:::

```plot
x: [-3, 6]
y: [-1, 6]
gleich: true
vektoren:
  - { von: [0, 0], nach: [5, 2], label: "a = (5, 2)", farbe: 0 }
  - { von: [0, 0], nach: [-2, 5], label: "n = (−2, 5)", farbe: 1 }
beschriftung: Vertauscht man die Koordinaten von a = (5, 2) und ändert bei einer das Vorzeichen, erhält man den um 90° gedrehten Vektor n = (−2, 5). Das Skalarprodukt ist 5·(−2) + 2·5 = 0.
```

:::achtung[Nur vertauscht oder nur das Vorzeichen geändert]
Zu $\vec a = \begin{pmatrix} 4 \\ 1 \end{pmatrix}$ werden oft diese falschen Normalvektoren angegeben:

- $\begin{pmatrix} 1 \\ 4 \end{pmatrix}$: nur vertauscht. Probe: $4 + 4 = 8 \neq 0$.
- $\begin{pmatrix} -4 \\ 1 \end{pmatrix}$: nur ein Vorzeichen geändert, nicht vertauscht. Probe: $-16 + 1 = -15 \neq 0$.

Richtig ist $\begin{pmatrix} -1 \\ 4 \end{pmatrix}$ oder $\begin{pmatrix} 1 \\ -4 \end{pmatrix}$, Probe: $-4 + 4 = 0$. Mach nach jedem Normalvektor die
Skalarprodukt-Probe. Sie kostet fünf Sekunden.
:::

Im Raum reicht der Trick nicht. Zu einem Vektor im $\R^3$ gibt es unendlich viele Richtungen, die normal
auf ihm stehen. Sie bilden zusammen eine ganze Ebene. Vertauscht man zwei Komponenten, ändert bei einer das
Vorzeichen und setzt die dritte null, erhält man zwar einen Normalvektor, aber nur einen von vielen. Einen Vektor, der auf **zwei** gegebenen Vektoren normal
steht, liefert das Kreuzprodukt aus
[6.8 Das Kreuzprodukt](/lernen/mathe3/vektoren/das-kreuzprodukt-normalvektor-flaeche-und-volumen).
Normalvektoren von Geraden in der Ebene sind das zentrale Werkzeug in
[Kapitel 7, Normalvektorform, allgemeine Form und Steigung](/lernen/mathe3/analytische-geometrie/normalvektorform-allgemeine-form-und-steigung).

```aufgabe
id: ve-ortho-check-normal
titel: Einen Normalvektor erkennen
art: check
niveau: 1
angabe: |
  Welcher Vektor steht normal auf $\begin{pmatrix} 2 \\ 9 \end{pmatrix}$?
teile:
  - typ: auswahl
    optionen: ['$\begin{pmatrix} 9 \\ -2 \end{pmatrix}$', '$\begin{pmatrix} 9 \\ 2 \end{pmatrix}$', '$\begin{pmatrix} -2 \\ 9 \end{pmatrix}$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Nur vertauscht reicht nicht. Probe: $18 + 18 = 36 \neq 0$.'
      - wert: 2
        meldung: 'Nur das Vorzeichen geändert reicht nicht. Probe: $-4 + 81 \neq 0$.'
loesung: |
  Koordinaten vertauschen und bei einer das Vorzeichen ändern: $\begin{pmatrix} 9 \\ -2 \end{pmatrix}$.
  ---
  Probe: $2\cdot 9 + 9\cdot(-2) = 18 - 18 = 0$.
```

### Projektion: der Schatten eines Vektors

Oft will man wissen, welcher **Anteil** eines Vektors in eine bestimmte Richtung zeigt. Ein Beispiel aus der
Physik: Eine schräg ziehende Kraft bewegt einen Wagen nur mit ihrem Anteil in Fahrtrichtung.

Stell dir vor, Licht fällt senkrecht auf die Gerade in Richtung $\vec b$. Der Schatten von $\vec a$ auf dieser
Geraden ist wieder ein Vektor. Er heißt **Projektion** von $\vec a$ auf $\vec b$ und wird $\vec a_b$ geschrieben.

:::satz[Projektion]
Für $\vec b \neq \vec 0$ ist die Projektion von $\vec a$ auf $\vec b$
$$\vec a_b = \frac{\vec a\cdot\vec b}{|\vec b|^2}\,\vec b.$$
Der Rest $\vec a - \vec a_b$ steht normal auf $\vec b$. Die **vorzeichenbehaftete Länge** der Projektion ist
$\dfrac{\vec a\cdot\vec b}{|\vec b|} = |\vec a|\cos\varphi$. Sie ist negativ, wenn der Winkel stumpf ist.
:::

**Woher kommt die Formel?** Die Projektion liegt auf der Geraden in Richtung $\vec b$, ist also ein Vielfaches
$\lambda\vec b$. Der Rest $\vec a - \lambda\vec b$ soll normal auf $\vec b$ stehen:
$$(\vec a - \lambda\vec b)\cdot\vec b = 0.$$
Ausmultiplizieren ergibt $\vec a\cdot\vec b - \lambda|\vec b|^2 = 0$, also $\lambda = \dfrac{\vec a\cdot\vec b}{|\vec b|^2}$.

:::beispiel[Einen Vektor zerlegen]
Wir zerlegen $\vec a = \begin{pmatrix} 5 \\ 4 \\ 2 \end{pmatrix}$ in einen Anteil längs $\vec b = \begin{pmatrix} 2 \\ 1 \\ 2 \end{pmatrix}$ und einen Anteil quer dazu.

**Schritt 1:** $\vec a\cdot\vec b = 10 + 4 + 4 = 18$ und $|\vec b|^2 = 4 + 1 + 4 = 9$.

**Schritt 2:** $\lambda = \tfrac{18}{9} = 2$, also $\vec a_b = 2\vec b = \begin{pmatrix} 4 \\ 2 \\ 4 \end{pmatrix}$ mit der Länge $2\cdot 3 = 6$.

**Schritt 3:** Der Rest ist $\vec a - \vec a_b = \begin{pmatrix} 1 \\ 2 \\ -2 \end{pmatrix}$.

**Schritt 4:** Probe: $\begin{pmatrix} 1 \\ 2 \\ -2 \end{pmatrix}\cdot\begin{pmatrix} 2 \\ 1 \\ 2 \end{pmatrix} = 2 + 2 - 4 = 0$. Der Rest steht wirklich normal auf $\vec b$.
:::

:::achtung[Nur durch die Länge statt durch ihr Quadrat geteilt]
Mit den Zahlen aus dem Beispiel rechnet jemand $\vec a_b = \frac{18}{3}\,\vec b = \begin{pmatrix} 12 \\ 6 \\ 12 \end{pmatrix}$. Dieser Vektor ist
$18$ lang, also länger als $\vec a$ selbst mit $|\vec a| = \sqrt{45} \approx 6{,}71$. Ein Schatten kann aber nicht länger
sein als der Gegenstand. Der Fehler: In der Formel steht $|\vec b|^2 = 9$ im Nenner, nicht $|\vec b| = 3$. Teilt man nur
durch $3$, bleibt die Länge von $\vec b$ als Faktor im Ergebnis stehen.
:::

```reflexion
frage: Warum muss in der Projektionsformel das Quadrat der Länge von b im Nenner stehen? Überlege, was passiert, wenn man b durch 10 b ersetzt.
antwort: |
  Die Projektion hängt nur von der **Richtung** von $\vec b$ ab, nicht von seiner Länge. Ersetzt man $\vec b$ durch
  $10\vec b$, muss dieselbe Projektion herauskommen.

  Im Zähler wird $\vec a\cdot\vec b$ zehnmal so groß, und der Faktor $\vec b$ hinten ebenfalls. Zusammen ist das der
  Faktor $100$. Im Nenner wird $|\vec b|^2$ genau hundertmal so groß. Beides hebt sich auf. Mit $|\vec b|$ statt
  $|\vec b|^2$ im Nenner bliebe ein Faktor $10$ übrig, und das Ergebnis hinge von der Länge von $\vec b$ ab.
```

:::merke[Rezept: Orthogonalität, Normalvektor, Projektion]
1. Normal prüfen: $\vec a\cdot\vec b = 0$. Fehlt ein Parameter, die Gleichung $\vec a\cdot\vec b = 0$ lösen.
2. Normalvektor in der Ebene: Koordinaten vertauschen, bei einer das Vorzeichen ändern, Probe machen.
3. Projektion: $\vec a_b = \frac{\vec a\cdot\vec b}{|\vec b|^2}\,\vec b$. Probe: Der Rest $\vec a - \vec a_b$ steht normal auf $\vec b$.
:::

```aufgabe
id: ve-orthogonal-parameter
titel: Parameter für Orthogonalität
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Für welches $t$ stehen $\begin{pmatrix} 2 \\ t \\ -1 \end{pmatrix}$ und $\begin{pmatrix} 3 \\ 4 \\ 2 \end{pmatrix}$ normal aufeinander?
teile:
  - typ: zahl
    label: '$t$'
    loesung: "-1"
    fehler:
      - wert: "1"
        meldung: 'Probe: $6 + 4 - 2 = 8 \neq 0$. Beim Auflösen von $4 + 4t = 0$ ist das Vorzeichen verloren gegangen.'
      - wert: "-2"
        meldung: 'Das dritte Produkt ist $(-1)\cdot 2 = -2$, nicht $+2$. Fasse zuerst $6 - 2 = 4$ zusammen.'
hinweise:
  - 'Setze das Skalarprodukt gleich null und löse die lineare Gleichung nach $t$.'
loesung: |
  **Ansatz:** Normal heißt Skalarprodukt null: $2\cdot 3 + 4t + (-1)\cdot 2 = 0$.
  ---
  $4 + 4t = 0$, also $t = -1$.
  ---
  **Probe:** $6 - 4 - 2 = 0$. Es stimmt.
```

```aufgabe
id: ve-normalvektor-ebene
titel: Normalvektor in der Ebene
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Gib einen Normalvektor zu $\vec a = \begin{pmatrix} -3 \\ 8 \end{pmatrix}$ an und außerdem den Normalvektor der Länge $1$ mit positiver $x$-Komponente.
teile:
  - typ: vektor
    label: 'ein Normalvektor $\vec n$'
    vielfaches: true
    loesung: ["8", "3"]
    fehler:
      - wert: ["8", "-3"]
        meldung: 'Du hast nur vertauscht. Probe: $-24 - 24 \neq 0$. Ändere zusätzlich bei einer Koordinate das Vorzeichen.'
      - wert: ["3", "8"]
        meldung: 'Du hast nur das Vorzeichen geändert, aber nicht vertauscht. Probe: $-9 + 64 \neq 0$.'
  - typ: vektor
    label: 'Einheitsnormalvektor mit positiver $x$-Komponente'
    loesung: ["8/sqrt(73)", "3/sqrt(73)"]
    anzeige: '\tfrac{1}{\sqrt{73}}\begin{pmatrix} 8 \\ 3 \end{pmatrix}'
    fehler:
      - wert: ["8/73", "3/73"]
        meldung: 'Du hast durch $|\vec n|^2 = 73$ geteilt. Normieren heißt: durch die Länge $\sqrt{73}$ teilen.'
hinweise:
  - 'Koordinaten vertauschen, bei einer das Vorzeichen ändern. Mach die Probe mit dem Skalarprodukt.'
loesung: |
  **Ansatz:** Vertauschen und ein Vorzeichen ändern liefert einen Normalvektor. Dann normieren.
  ---
  $\vec n = \begin{pmatrix} 8 \\ 3 \end{pmatrix}$, oder jedes Vielfache wie $\begin{pmatrix} -8 \\ -3 \end{pmatrix}$. **Probe:** $-3\cdot 8 + 8\cdot 3 = 0$.
  ---
  $|\vec n| = \sqrt{64 + 9} = \sqrt{73}$, also $\vec n_0 = \tfrac{1}{\sqrt{73}}\begin{pmatrix} 8 \\ 3 \end{pmatrix} \approx \begin{pmatrix} 0{,}936 \\ 0{,}351 \end{pmatrix}$.
```

```aufgabe
id: ve-orthogonal-pruefen
titel: Welche Paare stehen normal aufeinander?
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Welche der folgenden Paare stehen normal aufeinander? Wähle alle passenden aus.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$\begin{pmatrix} 3 \\ -2 \\ 4 \end{pmatrix}$ und $\begin{pmatrix} 2 \\ 5 \\ 1 \end{pmatrix}$'
      - '$\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$ und $\begin{pmatrix} 1 \\ -2 \\ 1 \end{pmatrix}$'
      - '$\begin{pmatrix} 2 \\ 0 \\ -3 \end{pmatrix}$ und $\begin{pmatrix} 3 \\ 1 \\ 2 \end{pmatrix}$'
      - '$\begin{pmatrix} 4 \\ 1 \\ -1 \end{pmatrix}$ und $\begin{pmatrix} 1 \\ -3 \\ 2 \end{pmatrix}$'
    richtig: [0, 1, 2]
    fehler:
      - wert: [0, 1, 2, 3]
        meldung: 'Beim letzten Paar ist das Skalarprodukt $4 - 3 - 2 = -1$, nicht null.'
      - wert: [0, 1]
        meldung: 'Beim dritten Paar ergibt das mittlere Produkt $0\cdot 1 = 0$. Rechne: $6 + 0 - 6$.'
hinweise:
  - 'Berechne für jedes Paar das Skalarprodukt. Normal heißt: genau null.'
loesung: |
  **Ansatz:** Für jedes Paar das Skalarprodukt berechnen.
  ---
  Erstes Paar: $6 - 10 + 4 = 0$. Zweites Paar: $1 - 2 + 1 = 0$. Drittes Paar: $6 + 0 - 6 = 0$. Viertes Paar: $4 - 3 - 2 = -1$.
  ---
  Die ersten drei Paare stehen normal aufeinander, das vierte nicht.
```

```aufgabe
id: ve-projektion
titel: Projektion und Zerlegung
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Zerlege $\vec a = \begin{pmatrix} 1 \\ 8 \\ -5 \end{pmatrix}$ in einen Anteil $\vec a_b$ parallel zu $\vec b = \begin{pmatrix} 1 \\ 2 \\ -2 \end{pmatrix}$
  und einen Anteil $\vec a_\perp$ normal zu $\vec b$. Wie lang ist $\vec a_b$?
teile:
  - typ: vektor
    label: '$\vec a_b$'
    loesung: ["27/9*1", "27/9*2", "27/9*(-2)"]
    fehler:
      - wert: ["9", "18", "-18"]
        meldung: 'Du hast nur durch $|\vec b| = 3$ geteilt. In der Formel steht $|\vec b|^2 = 9$ im Nenner.'
  - typ: vektor
    label: '$\vec a_\perp$'
    loesung: ["1-3", "8-6", "-5+6"]
    fehler:
      - wert: ["4", "14", "-11"]
        meldung: 'Du hast $\vec a_b$ addiert. Der Rest ist $\vec a - \vec a_b$.'
  - typ: zahl
    label: 'Länge von $\vec a_b$'
    loesung: "27/3"
    fehler:
      - wert: "27"
        meldung: 'Das ist $\vec a\cdot\vec b$. Die Länge der Projektion ist $\frac{\vec a\cdot\vec b}{|\vec b|}$.'
hinweise:
  - '$\vec a_b = \dfrac{\vec a\cdot\vec b}{|\vec b|^2}\,\vec b$.'
  - 'Berechne $\vec a\cdot\vec b$ und $|\vec b|^2$, dann den Faktor. Der Rest ist $\vec a - \vec a_b$.'
loesung: |
  **Ansatz:** Projektionsformel, dann den Rest bilden und mit dem Skalarprodukt prüfen.
  ---
  $\vec a\cdot\vec b = 1 + 16 + 10 = 27$ und $|\vec b|^2 = 1 + 4 + 4 = 9$. Der Faktor ist $\tfrac{27}{9} = 3$.
  ---
  $\vec a_b = 3\vec b = \begin{pmatrix} 3 \\ 6 \\ -6 \end{pmatrix}$ mit Länge $3\cdot|\vec b| = 3\cdot 3 = 9$.
  ---
  $\vec a_\perp = \vec a - \vec a_b = \begin{pmatrix} -2 \\ 2 \\ 1 \end{pmatrix}$. **Probe:** $\vec a_\perp\cdot\vec b = -2 + 4 - 2 = 0$. Es stimmt.
gefuehrt:
  - text: 'Berechne $\vec a\cdot\vec b$.'
    teil: { typ: zahl, loesung: "27", fehler: [ { wert: "7", meldung: 'Das dritte Produkt ist $(-5)\cdot(-2) = +10$.' } ] }
    erklaerung: '$1\cdot 1 + 8\cdot 2 + (-5)\cdot(-2) = 1 + 16 + 10 = 27$.'
  - text: 'Berechne $|\vec b|^2$.'
    teil: { typ: zahl, loesung: "9" }
    erklaerung: '$1 + 4 + 4 = 9$. Das ist $\vec b\cdot\vec b$, also ohne Wurzel.'
  - text: 'Welcher Faktor $\lambda$ steht vor $\vec b$?'
    teil: { typ: zahl, loesung: "3" }
    erklaerung: '$\lambda = \frac{27}{9} = 3$.'
  - text: 'Berechne $\vec a_b = \lambda\vec b$.'
    teil: { typ: vektor, loesung: ["3", "6", "-6"] }
    erklaerung: '$3\cdot\begin{pmatrix} 1 \\ 2 \\ -2 \end{pmatrix}$.'
  - text: 'Berechne den Rest $\vec a_\perp = \vec a - \vec a_b$ und prüfe, ob er normal auf $\vec b$ steht.'
    teil: { typ: vektor, loesung: ["-2", "2", "1"] }
    erklaerung: '$\vec a_\perp = \begin{pmatrix} -2 \\ 2 \\ 1 \end{pmatrix}$, und $\vec a_\perp\cdot\vec b = -2 + 4 - 2 = 0$.'
```

```aufgabe
id: ve-normal-zu-zwei-lgs
titel: Normal auf zwei Vektoren mit einem Gleichungssystem
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Gesucht ist ein Vektor der Form $\vec n = \begin{pmatrix} 1 \\ y \\ z \end{pmatrix}$, der auf $\vec a = \begin{pmatrix} 1 \\ 2 \\ -1 \end{pmatrix}$ und auf
  $\vec b = \begin{pmatrix} 2 \\ 0 \\ 1 \end{pmatrix}$ normal steht. Bestimme $y$ und $z$.
teile:
  - typ: zahl
    label: '$y$'
    loesung: "-3/2"
    fehler:
      - wert: "3/2"
        meldung: 'Probe mit $\vec a$: $1 + 3 + 2 \neq 0$. Prüfe das Vorzeichen beim Auflösen nach $y$.'
  - typ: zahl
    label: '$z$'
    loesung: "-2"
    fehler:
      - wert: "2"
        meldung: 'Aus $\vec n\cdot\vec b = 2 + z = 0$ folgt $z = -2$.'
hinweise:
  - 'Zwei Bedingungen: $\vec n\cdot\vec a = 0$ und $\vec n\cdot\vec b = 0$. Das sind zwei Gleichungen für $y$ und $z$.'
  - 'Die zweite Gleichung enthält kein $y$. Löse sie zuerst und setze $z$ in die erste ein. Siehe [Kapitel 3, Systeme mit zwei Unbekannten](/lernen/mathe3/lgs-matrizen/systeme-mit-zwei-unbekannten).'
loesung: |
  **Ansatz:** Normal auf beide Vektoren heißt: beide Skalarprodukte sind null. Das ergibt ein Gleichungssystem.
  ---
  $\vec n\cdot\vec a = 1 + 2y - z = 0$ und $\vec n\cdot\vec b = 2 + z = 0$.
  ---
  Aus der zweiten Gleichung: $z = -2$. Eingesetzt in die erste: $1 + 2y + 2 = 0$, also $y = -\tfrac32$.
  ---
  **Probe:** $\vec n = \begin{pmatrix} 1 \\ -1{,}5 \\ -2 \end{pmatrix}$. $\vec n\cdot\vec a = 1 - 3 + 2 = 0$ und $\vec n\cdot\vec b = 2 + 0 - 2 = 0$. Mit dem Kreuzprodukt aus der nächsten Lektion geht das schneller.
```

```aufgabe
id: ve-thales-pruefen
titel: Ein rechter Winkel im Halbkreis
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  Gegeben sind $A(-5 \mid 0)$, $B(5 \mid 0)$ und $C(3 \mid 4)$.

  a) Berechne $\overrightarrow{CA}\cdot\overrightarrow{CB}$.

  b) Begründe mit dem Ergebnis und mit dem Satz von Thales, warum $C$ auf dem Kreis mit Durchmesser $AB$ liegen muss. Prüfe das auch direkt.
teile:
  - typ: zahl
    label: 'a) $\overrightarrow{CA}\cdot\overrightarrow{CB}$'
    loesung: "(-8)*2 + (-4)*(-4)"
    fehler:
      - wert: "-32"
        meldung: 'Das zweite Produkt ist $(-4)\cdot(-4) = +16$.'
  - typ: text
    label: 'b) Begründung'
    muster: |
      Das Skalarprodukt ist $0$, also steht $\overrightarrow{CA}$ normal auf $\overrightarrow{CB}$, und das Dreieck hat bei $C$
      einen rechten Winkel. Nach der Umkehrung des Satzes von Thales liegt $C$ dann auf dem Kreis mit Durchmesser $AB$.
      Direkte Probe: Der Mittelpunkt ist $M(0 \mid 0)$, der Radius $5$, und $|\overrightarrow{MC}| = \sqrt{9 + 16} = 5$.
hinweise:
  - '$\overrightarrow{CA} = A - C$ und $\overrightarrow{CB} = B - C$.'
  - 'Für die direkte Probe: Der Kreismittelpunkt ist die Mitte von $AB$, der Radius ist die halbe Länge von $AB$.'
loesung: |
  **Ansatz:** Ein rechter Winkel bei $C$ zeigt sich am Skalarprodukt null der beiden Seiten, die von $C$ weg zeigen.
  ---
  $\overrightarrow{CA} = \begin{pmatrix} -8 \\ -4 \end{pmatrix}$ und $\overrightarrow{CB} = \begin{pmatrix} 2 \\ -4 \end{pmatrix}$. Skalarprodukt: $-16 + 16 = 0$.
  ---
  Der Winkel bei $C$ ist also ein rechter. Nach der Umkehrung des Satzes von Thales liegt $C$ auf dem Kreis über dem Durchmesser $AB$.
  ---
  **Direkte Probe:** Mittelpunkt $M = \tfrac12(A + B) = (0 \mid 0)$, Radius $\tfrac12|AB| = 5$. Es ist $|\overrightarrow{MC}| = \sqrt{9 + 16} = 5$. $C$ liegt tatsächlich auf dem Kreis.
```

```aufgabe
id: ve-hoehenfusspunkt
titel: Höhe eines Dreiecks mit der Projektion
niveau: 3
lernziel: 5
kompetenz: anwenden
angabe: |
  Gegeben ist das Dreieck $A(0 \mid 0)$, $B(6 \mid 2)$, $C(1 \mid 5)$.

  a) Bestimme den Fußpunkt $H$ der Höhe von $C$ auf die Seite $AB$.

  b) Berechne die Höhe $h_c = |\overrightarrow{HC}|$ auf zwei Dezimalstellen.

  c) Berechne damit den Flächeninhalt des Dreiecks.
teile:
  - typ: vektor
    label: 'a) $H$'
    namen: ["x", "y"]
    loesung: ["16/40*6", "16/40*2"]
    fehler:
      - wert: ["3", "1"]
        meldung: 'Das ist der Mittelpunkt von $AB$. Der Höhenfußpunkt liegt nur bei gleichschenkligen Dreiecken in der Mitte.'
  - typ: zahl
    label: 'b) $h_c$'
    loesung: "sqrt((1-2.4)^2 + (5-0.8)^2)"
  - typ: zahl
    label: 'c) Flächeninhalt'
    loesung: "sqrt(40)*sqrt((1-2.4)^2 + (5-0.8)^2)/2"
    fehler:
      - wert: "sqrt(40)*sqrt((1-2.4)^2 + (5-0.8)^2)"
        meldung: 'Grundlinie mal Höhe ist die Fläche eines Parallelogramms. Das Dreieck ist halb so groß.'
hinweise:
  - 'Der Höhenfußpunkt ist $A$ plus die Projektion von $\overrightarrow{AC}$ auf $\overrightarrow{AB}$.'
  - '$H = A + \lambda\overrightarrow{AB}$ mit $\lambda = \dfrac{\overrightarrow{AC}\cdot\overrightarrow{AB}}{|\overrightarrow{AB}|^2}$. Die Fläche ist $\tfrac12\cdot|AB|\cdot h_c$.'
loesung: |
  **Ansatz:** Der Fußpunkt der Höhe ist der „Schatten“ von $C$ auf der Geraden durch $A$ und $B$. Wir projizieren $\overrightarrow{AC}$ auf $\overrightarrow{AB}$.
  ---
  $\overrightarrow{AB} = \begin{pmatrix} 6 \\ 2 \end{pmatrix}$, $\overrightarrow{AC} = \begin{pmatrix} 1 \\ 5 \end{pmatrix}$. $\overrightarrow{AC}\cdot\overrightarrow{AB} = 6 + 10 = 16$ und $|\overrightarrow{AB}|^2 = 40$. Also $\lambda = \tfrac{16}{40} = 0{,}4$.
  ---
  a) $H = A + 0{,}4\begin{pmatrix} 6 \\ 2 \end{pmatrix} = (2{,}4 \mid 0{,}8)$.
  ---
  b) $\overrightarrow{HC} = \begin{pmatrix} -1{,}4 \\ 4{,}2 \end{pmatrix}$, $h_c = \sqrt{1{,}96 + 17{,}64} = \sqrt{19{,}6} \approx 4{,}43$. **Probe:** $\overrightarrow{HC}\cdot\overrightarrow{AB} = -8{,}4 + 8{,}4 = 0$, die Höhe steht normal auf $AB$.
  ---
  c) $A = \tfrac12\cdot\sqrt{40}\cdot\sqrt{19{,}6} = \tfrac12\sqrt{784} = \tfrac12\cdot 28 = 14$ Flächeneinheiten. **Kontrolle** mit der Determinante aus [6.8](/lernen/mathe3/vektoren/das-kreuzprodukt-normalvektor-flaeche-und-volumen): $\tfrac12|6\cdot 5 - 2\cdot 1| = 14$.
```

```aufgabe
id: ve-raute-pruefen
titel: Raute oder Quadrat?
niveau: 3
lernziel: 5
kompetenz: begruenden
angabe: |
  Gegeben sind $A(0 \mid 0 \mid 0)$, $B(3 \mid 4 \mid 0)$ und $D(4 \mid 0 \mid 3)$.

  a) Bestimme $C$ so, dass $ABCD$ ein Parallelogramm ist.

  b) Zeige, dass $ABCD$ eine Raute ist, und berechne den Innenwinkel $\alpha$ bei $A$ in Grad auf zwei Dezimalstellen.

  c) Welche der Aussagen stimmen?
teile:
  - typ: vektor
    label: 'a) $C$'
    namen: ["x", "y", "z"]
    loesung: ["3+4", "4+0", "0+3"]
    fehler:
      - wert: ["1", "-4", "3"]
        meldung: 'Das ist $D - B$. Die Ecke $C$ hat die Nachbarn $B$ und $D$, die Gegenecke ist $A$: $C = B + D - A$.'
  - typ: zahl
    label: 'b) $\alpha$'
    einheit: "°"
    loesung: "inGrad(acos(12/25))"
  - typ: auswahl
    label: 'c)'
    mehrfach: true
    optionen:
      - '$ABCD$ ist ein Quadrat.'
      - 'Die Diagonalen stehen normal aufeinander.'
      - 'Alle Seiten sind $5$ Einheiten lang.'
      - 'Die Diagonalen sind gleich lang.'
    richtig: [1, 2]
    fehler:
      - wert: [0, 1, 2]
        meldung: 'Ein Quadrat braucht einen rechten Winkel. Ist $\overrightarrow{AB}\cdot\overrightarrow{AD} = 0$?'
      - wert: [1, 2, 3]
        meldung: 'Gleich lange Diagonalen hätte nur ein Rechteck. Berechne $|AC|$ und $|BD|$.'
hinweise:
  - '$C = B + \overrightarrow{AD}$. Für die Raute vergleichst du $|\overrightarrow{AB}|$ und $|\overrightarrow{AD}|$.'
  - 'Quadrat heißt zusätzlich: $\overrightarrow{AB}\cdot\overrightarrow{AD} = 0$. Für die Diagonalen berechnest du $\overrightarrow{AC}\cdot\overrightarrow{BD}$ und beide Längen.'
loesung: |
  **Ansatz:** Vierte Ecke mit der Vektorbedingung, Raute über Seitenlängen, rechte Winkel über Skalarprodukte.
  ---
  a) $C = B + \overrightarrow{AD} = (3 + 4 \mid 4 + 0 \mid 0 + 3) = (7 \mid 4 \mid 3)$.
  ---
  b) $|\overrightarrow{AB}| = \sqrt{9 + 16} = 5$ und $|\overrightarrow{AD}| = \sqrt{16 + 9} = 5$. Zwei Nachbarseiten sind gleich lang, im Parallelogramm also alle vier: eine Raute. $\cos\alpha = \dfrac{\overrightarrow{AB}\cdot\overrightarrow{AD}}{5\cdot 5} = \dfrac{12}{25}$, also $\alpha \approx 61{,}31°$.
  ---
  c) $\overrightarrow{AB}\cdot\overrightarrow{AD} = 12 \neq 0$: kein rechter Winkel, also kein Quadrat. Diagonalen: $\overrightarrow{AC} = \begin{pmatrix} 7 \\ 4 \\ 3 \end{pmatrix}$, $\overrightarrow{BD} = \begin{pmatrix} 1 \\ -4 \\ 3 \end{pmatrix}$, Skalarprodukt $7 - 16 + 9 = 0$. Sie stehen normal aufeinander, wie in jeder Raute.
  ---
  Die Längen der Diagonalen sind $\sqrt{74}$ und $\sqrt{26}$, also verschieden. Richtig sind die Aussagen „Diagonalen normal“ und „alle Seiten $5$“.
```

## Das Kreuzprodukt: Normalvektor, Fläche und Volumen

```aufgabe
id: ve-kreuz-vorwissen
titel: Dreiecksfläche mit dem Sinus
art: check
niveau: 1
angabe: |
  Ein Dreieck hat zwei Seiten der Längen $8$ cm und $5$ cm, die einen Winkel von $30°$ einschließen. Wie groß ist seine Fläche?
  Die Formel lautet $A = \tfrac12\,a\,b\sin\gamma$. Zum Nachlesen: [Kapitel 5, Allgemeine Dreiecke: Sinussatz, Kosinussatz, Fläche](/lernen/mathe3/trigonometrie/allgemeine-dreiecke-sinussatz-kosinussatz-flaeche).
teile:
  - typ: zahl
    einheit: cm²
    loesung: "0.5*8*5*sin(inRad(30))"
    fehler:
      - wert: "20"
        meldung: 'Das ist $a\,b\sin\gamma$, also die Fläche des Parallelogramms aus beiden Seiten. Das Dreieck ist halb so groß.'
      - wert: "0.5*8*5*cos(inRad(30))"
        meldung: 'In der Flächenformel steht der **Sinus** des eingeschlossenen Winkels, nicht der Kosinus.'
loesung: |
  Einsetzen: $A = \tfrac12\cdot 8\cdot 5\cdot\sin 30° = 20\cdot 0{,}5$.
  ---
  Also $A = 10$ cm².
```

Im Raum stellt sich oft die Frage: Welcher Vektor steht auf **zwei** gegebenen Vektoren normal? Das braucht man
für Normalvektoren von Ebenen in [Kapitel 7, Ebenen im Raum: Parameterform und Koordinatenform](/lernen/mathe3/analytische-geometrie/ebenen-im-raum-parameterform-und-koordinatenform), für Flächen von Dreiecken im
Raum und für Volumen. Die Antwort liefert das **Kreuzprodukt**, auch **Vektorprodukt** genannt. Anders als das
Skalarprodukt liefert es einen **Vektor**. Und es existiert **nur im Raum**, also in $\R^3$.

### Definition und Rechenschema

:::definition[Kreuzprodukt]
Für $\vec a, \vec b \in \R^3$ ist das **Kreuzprodukt**
$$\vec a\times\vec b = \begin{pmatrix} a_1 \\ a_2 \\ a_3 \end{pmatrix}\times\begin{pmatrix} b_1 \\ b_2 \\ b_3 \end{pmatrix} = \begin{pmatrix} a_2 b_3 - a_3 b_2 \\ a_3 b_1 - a_1 b_3 \\ a_1 b_2 - a_2 b_1 \end{pmatrix}.$$
Man liest $\vec a\times\vec b$ als „$\vec a$ kreuz $\vec b$“. Das Ergebnis ist ein **Vektor** im $\R^3$.
:::

Die Formel muss man sich nicht als Buchstabensalat merken. Ein bewährtes Schema geht so:

1. Schreib die beiden Vektoren nebeneinander. Darunter wiederholst du ihre ersten beiden Zeilen.
2. Für die **erste** Komponente nimmst du die Zeilen 2 und 3. Du rechnest „über Kreuz“: Produkt der Hauptdiagonale minus Produkt der Nebendiagonale.
3. Für die **zweite** Komponente nimmst du die Zeilen 3 und 4, für die **dritte** die Zeilen 4 und 5.

$$\begin{array}{cc} a_1 & b_1 \\ a_2 & b_2 \\ a_3 & b_3 \\ a_1 & b_1 \\ a_2 & b_2 \end{array}
\qquad\begin{aligned}
&\text{1. Komponente: } a_2 b_3 - a_3 b_2 &&\text{(Zeilen 2 und 3)}\\
&\text{2. Komponente: } a_3 b_1 - a_1 b_3 &&\text{(Zeilen 3 und 4)}\\
&\text{3. Komponente: } a_1 b_2 - a_2 b_1 &&\text{(Zeilen 4 und 5)}
\end{aligned}$$
Jede Komponente ist also eine kleine $2\times 2$-Determinante, wie du sie aus [Kapitel 3, Determinanten](/lernen/mathe3/lgs-matrizen/determinanten)
kennst.

:::beispiel[Ein Kreuzprodukt mit Probe]
Wir berechnen $\begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}\times\begin{pmatrix} 4 \\ 5 \\ 6 \end{pmatrix}$.

**Schritt 1, erste Komponente** (Zeilen 2 und 3): $2\cdot 6 - 3\cdot 5 = 12 - 15 = -3$.

**Schritt 2, zweite Komponente** (Zeilen 3 und 4 des Schemas; Zeile 4 ist die wiederholte Zeile 1): $3\cdot 4 - 1\cdot 6 = 12 - 6 = 6$.

**Schritt 3, dritte Komponente** (Zeilen 4 und 5 des Schemas, also die wiederholten Zeilen 1 und 2): $1\cdot 5 - 2\cdot 4 = 5 - 8 = -3$.

Also $\vec a\times\vec b = \begin{pmatrix} -3 \\ 6 \\ -3 \end{pmatrix}$.

**Schritt 4, Probe:** $\begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}\cdot\begin{pmatrix} -3 \\ 6 \\ -3 \end{pmatrix} = -3 + 12 - 9 = 0$ und
$\begin{pmatrix} 4 \\ 5 \\ 6 \end{pmatrix}\cdot\begin{pmatrix} -3 \\ 6 \\ -3 \end{pmatrix} = -12 + 30 - 18 = 0$. Das Ergebnis steht auf beiden Vektoren normal.
:::

:::pruefung
Mach nach jedem Kreuzprodukt **beide** Skalarprodukt-Proben. Ein Vorzeichenfehler in einer Komponente ist der
häufigste Fehler überhaupt, und die Probe deckt ihn sofort auf. Brauchst du nur einen Normalvektor, darfst du
das Ergebnis anschließend kürzen: $\begin{pmatrix} -3 \\ 6 \\ -3 \end{pmatrix}$ ist parallel zu $\begin{pmatrix} 1 \\ -2 \\ 1 \end{pmatrix}$.
:::

:::achtung[Vorzeichenfehler in der mittleren Komponente]
Gesucht ist $\begin{pmatrix} 2 \\ 1 \\ 0 \end{pmatrix}\times\begin{pmatrix} 1 \\ 3 \\ 4 \end{pmatrix}$. Ein typischer Fehler ist, die mittlere Komponente als
$a_1 b_3 - a_3 b_1 = 2\cdot 4 - 0\cdot 1 = 8$ zu rechnen. Das ergibt $\begin{pmatrix} 4 \\ 8 \\ 5 \end{pmatrix}$. Die Probe zeigt den Fehler:
$\begin{pmatrix} 2 \\ 1 \\ 0 \end{pmatrix}\cdot\begin{pmatrix} 4 \\ 8 \\ 5 \end{pmatrix} = 8 + 8 + 0 = 16 \neq 0$.

Richtig ist $a_3 b_1 - a_1 b_3 = 0\cdot 1 - 2\cdot 4 = -8$, also $\begin{pmatrix} 4 \\ -8 \\ 5 \end{pmatrix}$. Probe: $8 - 8 + 0 = 0$ und
$4 - 24 + 20 = 0$. Mit dem Schema „Zeilen 3 und 4“ passiert dieser Fehler nicht.
:::

### Die Reihenfolge zählt

Beim Kreuzprodukt ist die Reihenfolge der Faktoren **nicht** egal. Vertauscht man sie, dreht sich das Ergebnis um:
$$\vec b\times\vec a = -(\vec a\times\vec b).$$
Mit den Zahlen aus dem Beispiel ist $\begin{pmatrix} 4 \\ 5 \\ 6 \end{pmatrix}\times\begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix} = \begin{pmatrix} 3 \\ -6 \\ 3 \end{pmatrix}$. Das ist genau der
Gegenvektor. Man nennt diese Eigenschaft **antikommutativ**.

In welche der beiden Richtungen das Ergebnis zeigt, sagt die **Rechte-Hand-Regel**. Der Daumen der rechten Hand
zeigt in Richtung $\vec a$, der Zeigefinger in Richtung $\vec b$. Dann zeigt der abgespreizte Mittelfinger in
Richtung $\vec a\times\vec b$. Ein Beispiel mit den Achsenrichtungen:
$$\begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}\times\begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}, \qquad \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}\times\begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ -1 \end{pmatrix}.$$
„$x$ kreuz $y$ ergibt $z$“, aber „$y$ kreuz $x$ ergibt minus $z$“.

Wann spielt die Reihenfolge eine Rolle? Für einen **Normalvektor** ist sie egal, denn $\vec a\times\vec b$ und
$\vec b\times\vec a$ liegen auf derselben Geraden. Für **Flächen** ist sie ebenfalls egal, weil nur die Länge zählt. Sie
zählt, wenn eine **Orientierung** gefragt ist, etwa beim Drehmoment in der Physik oder beim Vorzeichen des
Spatprodukts.

```aufgabe
id: ve-kreuz-check-reihenfolge
titel: Reihenfolge vertauschen
art: check
niveau: 1
angabe: |
  Es ist $\vec a\times\vec b = \begin{pmatrix} 2 \\ -5 \\ 1 \end{pmatrix}$. Was ist $\vec b\times\vec a$?
teile:
  - typ: vektor
    loesung: ["-2", "5", "-1"]
    fehler:
      - wert: ["2", "-5", "1"]
        meldung: 'Das Kreuzprodukt ist nicht kommutativ. Beim Vertauschen der Faktoren dreht sich das Vorzeichen jeder Komponente um.'
loesung: |
  Es gilt $\vec b\times\vec a = -(\vec a\times\vec b)$.
  ---
  Also $\vec b\times\vec a = \begin{pmatrix} -2 \\ 5 \\ -1 \end{pmatrix}$. Er zeigt in die Gegenrichtung.
```

### Die Eigenschaften

:::satz[Eigenschaften des Kreuzprodukts]
Für $\vec a, \vec b \in \R^3$ mit eingeschlossenem Winkel $\varphi$ gilt:

1. $\vec a\times\vec b$ steht normal auf $\vec a$ und normal auf $\vec b$.
2. $|\vec a\times\vec b| = |\vec a|\,|\vec b|\sin\varphi$. Das ist der **Flächeninhalt des Parallelogramms**, das von $\vec a$ und $\vec b$ aufgespannt wird.
3. Sind $\vec a$ und $\vec b$ nicht parallel, so bilden $\vec a$, $\vec b$ und $\vec a\times\vec b$ ein Rechtssystem.
4. $\vec b\times\vec a = -(\vec a\times\vec b)$.
5. $\vec a\times\vec b = \vec 0$ gilt genau dann, wenn $\vec a$ und $\vec b$ parallel sind oder einer der beiden der Nullvektor ist.
:::

**Worum geht es im Beweis von Eigenschaft 1?** Wir zeigen, dass das Skalarprodukt von $\vec a$ mit $\vec a\times\vec b$
null ist. Dazu multiplizieren wir alles aus und sehen, dass sich alle Summanden wegheben.

:::beweis[Beweis von Eigenschaft 1]
Wir setzen die Definition ein und multiplizieren aus:
$$\begin{aligned}
\vec a\cdot(\vec a\times\vec b) &= a_1(a_2 b_3 - a_3 b_2) + a_2(a_3 b_1 - a_1 b_3) + a_3(a_1 b_2 - a_2 b_1)\\
&= a_1a_2b_3 - a_1a_3b_2 + a_2a_3b_1 - a_1a_2b_3 + a_1a_3b_2 - a_2a_3b_1 = 0.
\end{aligned}$$
Jeder der sechs Summanden kommt genau einmal mit Plus und einmal mit Minus vor. Für $\vec b$ rechnet man genauso.
:::

**Warum ist die Länge eine Fläche?** Durch längeres Ausmultiplizieren erhält man die **Identität von Lagrange**
$|\vec a\times\vec b|^2 = |\vec a|^2|\vec b|^2 - (\vec a\cdot\vec b)^2$. Wir ersetzen $\vec a\cdot\vec b$ durch $|\vec a|\,|\vec b|\cos\varphi$
und klammern aus. Das ergibt $|\vec a|^2|\vec b|^2(1 - \cos^2\varphi) = |\vec a|^2|\vec b|^2\sin^2\varphi$. Dabei haben wir
$\sin^2\varphi + \cos^2\varphi = 1$ aus [Kapitel 5, Trigonometrische Identitäten](/lernen/mathe3/trigonometrie/trigonometrische-identitaeten) verwendet. Und $|\vec a|\,|\vec b|\sin\varphi$
ist Grundlinie mal Höhe des Parallelogramms: Die Grundlinie ist $|\vec a|$, die Höhe ist $|\vec b|\sin\varphi$.

### Flächen von Dreiecken und Parallelogrammen

:::merke[Flächen mit Vektoren]
- Parallelogramm, aufgespannt von $\vec a$ und $\vec b$: $\;A = |\vec a\times\vec b|$.
- Dreieck $ABC$: $\;A = \tfrac12\,\big|\overrightarrow{AB}\times\overrightarrow{AC}\big|$.
- In der Ebene: $\;A_{\text{Parallelogramm}} = |a_1 b_2 - a_2 b_1| = \left|\det\begin{pmatrix} a_1 & b_1 \\ a_2 & b_2 \end{pmatrix}\right|$.
:::

Die Formel für die Ebene ist ein Sonderfall. Man ergänzt $\vec a$ und $\vec b$ um die dritte Komponente $0$. Dann hat
das Kreuzprodukt nur noch die dritte Komponente $a_1 b_2 - a_2 b_1$, und das ist eine Determinante.

:::beispiel[Dreieck im Raum]
Gesucht ist die Fläche des Dreiecks $A(1 \mid 0 \mid 1)$, $B(3 \mid 2 \mid 1)$, $C(1 \mid 4 \mid 3)$.

**Schritt 1, zwei Seitenvektoren ab derselben Ecke:** $\overrightarrow{AB} = \begin{pmatrix} 2 \\ 2 \\ 0 \end{pmatrix}$ und $\overrightarrow{AC} = \begin{pmatrix} 0 \\ 4 \\ 2 \end{pmatrix}$.

**Schritt 2, Kreuzprodukt:**
$$\overrightarrow{AB}\times\overrightarrow{AC} = \begin{pmatrix} 2\cdot 2 - 0\cdot 4 \\ 0\cdot 0 - 2\cdot 2 \\ 2\cdot 4 - 2\cdot 0 \end{pmatrix} = \begin{pmatrix} 4 \\ -4 \\ 8 \end{pmatrix}.$$
**Schritt 3, Fläche:** $A = \tfrac12\sqrt{16 + 16 + 64} = \tfrac12\sqrt{96} = 2\sqrt6 \approx 4{,}90$ Flächeneinheiten.
:::

:::beispiel[Eine dreieckige Dachfläche]
Eine dreieckige Dachfläche hat die Ecken $A(0 \mid 0 \mid 3)$, $B(8 \mid 0 \mid 3)$ und $C(4 \mid 3 \mid 6)$, Angaben in
Metern. Wie viel Fläche muss gedeckt werden?

**Schritt 1:** $\overrightarrow{AB} = \begin{pmatrix} 8 \\ 0 \\ 0 \end{pmatrix}$ m und $\overrightarrow{AC} = \begin{pmatrix} 4 \\ 3 \\ 3 \end{pmatrix}$ m.

**Schritt 2:** $\overrightarrow{AB}\times\overrightarrow{AC} = \begin{pmatrix} 0\cdot 3 - 0\cdot 3 \\ 0\cdot 4 - 8\cdot 3 \\ 8\cdot 3 - 0\cdot 4 \end{pmatrix} = \begin{pmatrix} 0 \\ -24 \\ 24 \end{pmatrix}$ m².

**Schritt 3:** $A = \tfrac12\sqrt{0 + 576 + 576} = \tfrac12\cdot 24\sqrt2 = 12\sqrt2 \approx 16{,}97$ m². Die Einheit ist m², weil
im Kreuzprodukt zwei Längen in Metern multipliziert werden.
:::

### Das Kreuzprodukt im Widget

```aufgabe
id: ve-kreuz-check-vorhersage
titel: Wann ist die Fläche am größten?
art: check
niveau: 1
angabe: |
  Im folgenden Widget spannen $\vec a$ und $\vec b$ ein Parallelogramm auf. Mach zuerst eine Vorhersage: Die Längen bleiben gleich, nur
  der Winkel zwischen den Vektoren ändert sich. Bei welchem Winkel ist die Fläche am größten?
teile:
  - typ: auswahl
    optionen: ['bei $90°$', 'bei $0°$', 'bei $180°$', 'bei $45°$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Zeigen beide Vektoren in dieselbe Richtung, fällt das Parallelogramm zu einer Strecke zusammen. Die Fläche ist dann null.'
      - wert: 2
        meldung: 'Bei $180°$ zeigen die Vektoren in entgegengesetzte Richtungen. Auch dann gibt es keine Fläche.'
      - wert: 3
        meldung: 'Denk an $A = |\vec a|\,|\vec b|\sin\varphi$. Wo ist der Sinus am größten?'
loesung: |
  Die Fläche ist $|\vec a|\,|\vec b|\sin\varphi$. Bei festen Längen ist sie am größten, wenn $\sin\varphi$ am größten ist.
  ---
  Das ist bei $\varphi = 90°$ mit $\sin 90° = 1$ der Fall. Dann wird das Parallelogramm ein Rechteck.
```

```widget
name: vektoren
titel: Fläche des aufgespannten Parallelogramms
props:
  a: [4, 1]
  b: [2, 3]
  zeige: [flaeche, winkel]
```

**Beobachte:** Zieh die Spitze von $\vec b$ langsam auf einem Kreis um den Ursprung herum, damit seine Länge etwa gleich bleibt. Achte auf die Fläche.
Stelle $\vec b$ dann parallel zu $\vec a$.

**Erkläre:** Die Fläche folgt dem Sinus des Winkels. Sie ist bei $90°$ am größten und bei parallelen Vektoren null.
Darum ist das Kreuzprodukt paralleler Vektoren der Nullvektor.

### Spatprodukt und Volumen

Drei Vektoren $\vec a, \vec b, \vec c$ spannen einen **Spat** auf. Das ist ein „schiefer Quader“, dessen sechs Seiten
Parallelogramme sind. Der Fachbegriff lautet **Parallelepiped**. Sein Volumen ist Grundfläche mal Höhe. Die
Grundfläche ist das Parallelogramm aus $\vec a$ und $\vec b$, also $|\vec a\times\vec b|$. Die Höhe ist der Anteil von
$\vec c$, der normal auf dieser Grundfläche steht.

:::satz[Spatprodukt]
Das Volumen des von $\vec a, \vec b, \vec c$ aufgespannten Spats ist
$$V = \big|(\vec a\times\vec b)\cdot\vec c\big| = \left|\det\begin{pmatrix} a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \\ a_3 & b_3 & c_3 \end{pmatrix}\right|.$$
Der Ausdruck $(\vec a\times\vec b)\cdot\vec c$ heißt **Spatprodukt**. Eine dreiseitige Pyramide (ein **Tetraeder**) mit
den Kantenvektoren $\vec a, \vec b, \vec c$ hat das Volumen $V = \tfrac16\big|(\vec a\times\vec b)\cdot\vec c\big|$.
:::

:::beweis[Begründung]
**Schritt 1:** Mit $\vec n = \vec a\times\vec b$ ist $|\vec n|$ die Grundfläche, und $\vec n$ steht normal auf ihr.

**Schritt 2:** Die Höhe ist die Länge der Projektion von $\vec c$ auf $\vec n$, also $|\vec c|\,|\cos\psi|$. Dabei ist $\psi$ (gelesen „psi“)
der Winkel zwischen $\vec c$ und $\vec n$. Der Betrag sorgt dafür, dass die Höhe nicht negativ wird.

**Schritt 3:** Volumen $= |\vec n|\cdot|\vec c|\,|\cos\psi| = |\vec n\cdot\vec c|$.

**Schritt 4:** Ein Tetraeder ist eine Pyramide über dem **halben** Parallelogramm. Wegen $V_{\text{Pyramide}} = \tfrac13 G h$
ist sein Volumen $\tfrac13\cdot\tfrac12 = \tfrac16$ des Spatvolumens.
:::

:::beispiel[Ein Spatvolumen]
Gegeben sind $\vec a = \begin{pmatrix} 1 \\ 2 \\ 0 \end{pmatrix}$, $\vec b = \begin{pmatrix} 0 \\ 1 \\ 3 \end{pmatrix}$ und $\vec c = \begin{pmatrix} 3 \\ 0 \\ 1 \end{pmatrix}$.

**Schritt 1:** $\vec a\times\vec b = \begin{pmatrix} 2\cdot 3 - 0\cdot 1 \\ 0\cdot 0 - 1\cdot 3 \\ 1\cdot 1 - 2\cdot 0 \end{pmatrix} = \begin{pmatrix} 6 \\ -3 \\ 1 \end{pmatrix}$.

**Schritt 2:** $(\vec a\times\vec b)\cdot\vec c = 18 + 0 + 1 = 19$.

**Schritt 3:** Der Spat hat das Volumen $V = 19$, das Tetraeder mit denselben Kanten $\tfrac{19}{6} \approx 3{,}17$
Volumeneinheiten.
:::

Ist das Spatprodukt null, hat der Spat kein Volumen. Die drei Vektoren liegen dann in einer Ebene. Darauf
baut [6.10 Lineare Abhängigkeit](/lernen/mathe3/vektoren/lineare-abhaengigkeit-linearkombination-und-basis) auf.

:::achtung[Kreuzprodukt in der Ebene]
Jemand will die Fläche des Parallelogramms aus $\begin{pmatrix} 3 \\ 1 \end{pmatrix}$ und $\begin{pmatrix} 1 \\ 2 \end{pmatrix}$ mit „$\begin{pmatrix} 3 \\ 1 \end{pmatrix}\times\begin{pmatrix} 1 \\ 2 \end{pmatrix}$“
berechnen und erfindet dafür eine Formel mit zwei Komponenten. Das Kreuzprodukt gibt es in der Ebene aber
nicht. Richtig ist die Determinante $|3\cdot 2 - 1\cdot 1| = 5$. Wer lieber mit dem Kreuzprodukt rechnet, ergänzt
beide Vektoren um eine dritte Komponente $0$: $\begin{pmatrix} 3 \\ 1 \\ 0 \end{pmatrix}\times\begin{pmatrix} 1 \\ 2 \\ 0 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 5 \end{pmatrix}$.
:::

```reflexion
frage: Warum ist das Kreuzprodukt zweier paralleler Vektoren der Nullvektor? Erkläre es einmal mit der Fläche und einmal mit der Richtung.
antwort: |
  **Mit der Fläche:** Die Länge von $\vec a\times\vec b$ ist die Fläche des aufgespannten Parallelogramms. Zwei
  parallele Vektoren spannen kein echtes Parallelogramm auf, es fällt zu einer Strecke zusammen. Die Fläche
  ist null, also hat $\vec a\times\vec b$ die Länge null und ist der Nullvektor.

  **Mit der Richtung:** Bei parallelen Vektoren gibt es keine eindeutige Richtung, die auf beiden normal steht.
  Es gibt eine ganze Ebene davon. Das Kreuzprodukt kann keine davon auszeichnen und liefert den Nullvektor.
```

```aufgabe
id: ve-kreuzprodukt
titel: Kreuzprodukt berechnen
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Berechne $\begin{pmatrix} 3 \\ -1 \\ 2 \end{pmatrix}\times\begin{pmatrix} 1 \\ 4 \\ 0 \end{pmatrix}$ und mache die Probe.
teile:
  - typ: vektor
    label: 'Kreuzprodukt'
    loesung: ["(-1)*0 - 2*4", "2*1 - 3*0", "3*4 - (-1)*1"]
    fehler:
      - wert: ["8", "-2", "-13"]
        meldung: 'Das ist $\vec b\times\vec a$, also die umgekehrte Reihenfolge. Beginne die Rechnung mit den Komponenten des ersten Vektors.'
      - wert: ["-8", "-2", "13"]
        meldung: 'Die mittlere Komponente ist $a_3 b_1 - a_1 b_3 = 2\cdot 1 - 3\cdot 0 = 2$. Dein Vorzeichen ist vertauscht.'
hinweise:
  - 'Schreib beide Vektoren nebeneinander und wiederhole darunter ihre ersten beiden Zeilen. Die erste Komponente kommt aus den Zeilen 2 und 3, die zweite aus den Zeilen 3 und 4. Die dritte kommt aus den Zeilen 4 und 5.'
loesung: |
  **Ansatz:** Kreuzprodukt nach dem Schema, danach beide Skalarprodukt-Proben.
  ---
  $$\begin{pmatrix} 3 \\ -1 \\ 2 \end{pmatrix}\times\begin{pmatrix} 1 \\ 4 \\ 0 \end{pmatrix} = \begin{pmatrix} (-1)\cdot 0 - 2\cdot 4 \\ 2\cdot 1 - 3\cdot 0 \\ 3\cdot 4 - (-1)\cdot 1 \end{pmatrix} = \begin{pmatrix} -8 \\ 2 \\ 13 \end{pmatrix}$$
  ---
  **Probe:** $(3, -1, 2)\cdot(-8, 2, 13) = -24 - 2 + 26 = 0$ und $(1, 4, 0)\cdot(-8, 2, 13) = -8 + 8 + 0 = 0$. Es stimmt.
```

```aufgabe
id: ve-kreuz-achsen
titel: Kreuzprodukte der Achsenrichtungen
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  Es sei $\vec e_1 = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}$, $\vec e_2 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}$ und $\vec e_3 = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}$.
  Berechne $\vec e_2\times\vec e_3$ und $\vec e_1\times\vec e_3$.
teile:
  - typ: vektor
    label: '$\vec e_2\times\vec e_3$'
    loesung: ["1", "0", "0"]
    fehler:
      - wert: ["-1", "0", "0"]
        meldung: 'Rechte-Hand-Regel: Daumen nach $y$, Zeigefinger nach $z$. Der Mittelfinger zeigt in die positive $x$-Richtung.'
  - typ: vektor
    label: '$\vec e_1\times\vec e_3$'
    loesung: ["0", "-1", "0"]
    fehler:
      - wert: ["0", "1", "0"]
        meldung: 'Es gilt $\vec e_3\times\vec e_1 = \vec e_2$. Hier steht die umgekehrte Reihenfolge, also kommt $-\vec e_2$ heraus.'
hinweise:
  - 'Rechne mit dem Schema oder mit der Rechten-Hand-Regel. Beachte die Reihenfolge der Faktoren.'
loesung: |
  **Ansatz:** Schema anwenden und mit der Rechten-Hand-Regel kontrollieren.
  ---
  $\vec e_2\times\vec e_3 = \begin{pmatrix} 1\cdot 1 - 0\cdot 0 \\ 0\cdot 0 - 0\cdot 1 \\ 0\cdot 0 - 1\cdot 0 \end{pmatrix} = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} = \vec e_1$.
  ---
  $\vec e_1\times\vec e_3 = \begin{pmatrix} 0\cdot 1 - 0\cdot 0 \\ 0\cdot 0 - 1\cdot 1 \\ 1\cdot 0 - 0\cdot 0 \end{pmatrix} = \begin{pmatrix} 0 \\ -1 \\ 0 \end{pmatrix} = -\vec e_2$. Die Reihenfolge $\vec e_1, \vec e_3$ läuft gegen den Zyklus $1 \to 2 \to 3 \to 1$, daher das Minus.
```

```aufgabe
id: ve-flaeche-ebene
titel: Flächen in der Ebene mit der Determinante
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Die Vektoren $\vec a = \begin{pmatrix} 6 \\ 1 \end{pmatrix}$ und $\vec b = \begin{pmatrix} 2 \\ 4 \end{pmatrix}$ spannen ein Parallelogramm auf.
  Berechne seinen Flächeninhalt und den Flächeninhalt des Dreiecks aus $\vec a$ und $\vec b$.
teile:
  - typ: zahl
    label: 'Parallelogramm'
    loesung: "abs(det([[6, 2], [1, 4]]))"
    anzeige: '22'
    fehler:
      - wert: "26"
        meldung: 'Die beiden Produkte werden **subtrahiert**: $6\cdot 4 - 1\cdot 2$.'
  - typ: zahl
    label: 'Dreieck'
    loesung: "abs(det([[6, 2], [1, 4]]))/2"
    anzeige: '11'
    fehler:
      - wert: "22"
        meldung: 'Das ist das ganze Parallelogramm. Das Dreieck ist die Hälfte davon.'
hinweise:
  - '$A = |a_1 b_2 - a_2 b_1|$. Das Dreieck ist das halbe Parallelogramm.'
loesung: |
  **Ansatz:** In der Ebene ist die Parallelogrammfläche der Betrag der Determinante.
  ---
  $A = |6\cdot 4 - 1\cdot 2| = |24 - 2| = 22$ Flächeneinheiten.
  ---
  Das Dreieck ist das halbe Parallelogramm: $11$ Flächeneinheiten.
```

```aufgabe
id: ve-normal-zu-zwei
titel: Normalvektor zu zwei Vektoren
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Bestimme einen Vektor, der auf $\vec a = \begin{pmatrix} 2 \\ -1 \\ 3 \end{pmatrix}$ und auf $\vec b = \begin{pmatrix} 1 \\ 4 \\ -2 \end{pmatrix}$
  normal steht.
teile:
  - typ: vektor
    label: '$\vec n$'
    vielfaches: true
    loesung: ["(-1)*(-2) - 3*4", "3*1 - 2*(-2)", "2*4 - (-1)*1"]
    fehler:
      - wert: ["-10", "-7", "9"]
        meldung: 'Die mittlere Komponente hat das falsche Vorzeichen. Probe: $\vec a\cdot\vec n = -20 + 7 + 27 \neq 0$.'
      - wert: ["2", "-4", "-6"]
        meldung: 'Du hast die Komponenten einfach multipliziert. Ein Normalvektor entsteht mit dem Kreuzprodukt.'
hinweise:
  - 'Berechne das Kreuzprodukt $\vec a\times\vec b$. Jedes Vielfache ist ebenfalls richtig.'
  - 'Mach anschließend beide Proben $\vec a\cdot\vec n = 0$ und $\vec b\cdot\vec n = 0$.'
loesung: |
  **Ansatz:** Das Kreuzprodukt steht auf beiden Faktoren normal.
  ---
  $$\vec a\times\vec b = \begin{pmatrix} (-1)(-2) - 3\cdot 4 \\ 3\cdot 1 - 2\cdot(-2) \\ 2\cdot 4 - (-1)\cdot 1 \end{pmatrix} = \begin{pmatrix} -10 \\ 7 \\ 9 \end{pmatrix}$$
  ---
  **Probe:** $\vec a\cdot\vec n = -20 - 7 + 27 = 0$ und $\vec b\cdot\vec n = -10 + 28 - 18 = 0$. Es stimmt.
```

```aufgabe
id: ve-dreiecksflaeche
titel: Fläche eines Dreiecks im Raum
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Berechne den Flächeninhalt des Dreiecks $A(2 \mid 0 \mid 1)$, $B(4 \mid 3 \mid 1)$, $C(2 \mid 1 \mid 3)$. Gib das Ergebnis exakt
  oder auf zwei Dezimalstellen an.
teile:
  - typ: zahl
    label: 'Fläche'
    loesung: "sqrt(6^2 + (-4)^2 + 2^2)/2"
    anzeige: '\sqrt{14} \approx 3{,}74'
    fehler:
      - wert: "sqrt(56)"
        meldung: 'Das ist die Fläche des Parallelogramms. Das Dreieck ist halb so groß.'
      - wert: "28"
        meldung: 'Die Länge des Kreuzprodukts ist eine Wurzel. Du hast $\frac{56}{2}$ ohne Wurzel gerechnet.'
hinweise:
  - '$A = \tfrac12\,\big|\overrightarrow{AB}\times\overrightarrow{AC}\big|$.'
  - 'Beide Seitenvektoren müssen in derselben Ecke beginnen, hier in $A$.'
loesung: |
  **Ansatz:** Die Dreiecksfläche ist die halbe Länge des Kreuzprodukts zweier Seitenvektoren.
  ---
  $\overrightarrow{AB} = \begin{pmatrix} 2 \\ 3 \\ 0 \end{pmatrix}$, $\overrightarrow{AC} = \begin{pmatrix} 0 \\ 1 \\ 2 \end{pmatrix}$.
  ---
  $\overrightarrow{AB}\times\overrightarrow{AC} = \begin{pmatrix} 3\cdot 2 - 0\cdot 1 \\ 0\cdot 0 - 2\cdot 2 \\ 2\cdot 1 - 3\cdot 0 \end{pmatrix} = \begin{pmatrix} 6 \\ -4 \\ 2 \end{pmatrix}$.
  ---
  $A = \tfrac12\sqrt{36 + 16 + 4} = \tfrac12\sqrt{56} = \sqrt{14} \approx 3{,}74$ Flächeneinheiten.
gefuehrt:
  - text: 'Berechne $\overrightarrow{AB}$.'
    teil: { typ: vektor, loesung: ["2", "3", "0"] }
    erklaerung: '$B - A = (4 - 2 \mid 3 - 0 \mid 1 - 1)$.'
  - text: 'Berechne $\overrightarrow{AC}$.'
    teil: { typ: vektor, loesung: ["0", "1", "2"] }
    erklaerung: '$C - A = (2 - 2 \mid 1 - 0 \mid 3 - 1)$.'
  - text: 'Berechne $\overrightarrow{AB}\times\overrightarrow{AC}$.'
    teil: { typ: vektor, loesung: ["6", "-4", "2"], fehler: [ { wert: ["6", "4", "2"], meldung: 'Mittlere Komponente: $a_3 b_1 - a_1 b_3 = 0\cdot 0 - 2\cdot 2 = -4$.' } ] }
    erklaerung: 'Erste Komponente $3\cdot 2 - 0\cdot 1 = 6$, zweite $0\cdot 0 - 2\cdot 2 = -4$, dritte $2\cdot 1 - 3\cdot 0 = 2$.'
  - text: 'Wie lang ist das Kreuzprodukt?'
    teil: { typ: zahl, loesung: "sqrt(56)" }
    erklaerung: '$\sqrt{36 + 16 + 4} = \sqrt{56} \approx 7{,}48$. Das ist die Fläche des Parallelogramms.'
  - text: 'Bestimme die Dreiecksfläche.'
    teil: { typ: zahl, loesung: "sqrt(56)/2" }
    erklaerung: 'Halbieren: $\tfrac12\sqrt{56} = \sqrt{14} \approx 3{,}74$.'
```

```aufgabe
id: ve-spat
titel: Volumen eines Spats und eines Tetraeders
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Berechne das Volumen des Spats, der von $\vec a = \begin{pmatrix} 2 \\ 0 \\ 1 \end{pmatrix}$, $\vec b = \begin{pmatrix} 1 \\ 3 \\ 0 \end{pmatrix}$ und
  $\vec c = \begin{pmatrix} 0 \\ 1 \\ 4 \end{pmatrix}$ aufgespannt wird, sowie das Volumen des Tetraeders mit diesen Kantenvektoren.
teile:
  - typ: zahl
    label: '$V_{\text{Spat}}$'
    loesung: "abs(det([[2, 1, 0], [0, 3, 1], [1, 0, 4]]))"
    anzeige: '25'
  - typ: zahl
    label: '$V_{\text{Tetraeder}}$'
    loesung: "abs(det([[2, 1, 0], [0, 3, 1], [1, 0, 4]]))/6"
    anzeige: '\tfrac{25}{6} \approx 4{,}17'
    fehler:
      - wert: "25/3"
        meldung: 'Der Faktor $\tfrac13$ gilt für eine Pyramide über dem ganzen Parallelogramm. Das Tetraeder steht nur auf dem halben, also $\tfrac13\cdot\tfrac12 = \tfrac16$.'
      - wert: "25/2"
        meldung: 'Halbieren reicht nicht. Das Tetraeder ist eine Pyramide, also kommt noch der Faktor $\tfrac13$ dazu.'
hinweise:
  - 'Zuerst $\vec a\times\vec b$, dann das Skalarprodukt mit $\vec c$.'
  - 'Das Tetraeder hat $\tfrac16$ des Spatvolumens.'
loesung: |
  **Ansatz:** Spatprodukt $(\vec a\times\vec b)\cdot\vec c$, davon der Betrag.
  ---
  $\vec a\times\vec b = \begin{pmatrix} 0\cdot 0 - 1\cdot 3 \\ 1\cdot 1 - 2\cdot 0 \\ 2\cdot 3 - 0\cdot 1 \end{pmatrix} = \begin{pmatrix} -3 \\ 1 \\ 6 \end{pmatrix}$.
  ---
  $(\vec a\times\vec b)\cdot\vec c = 0 + 1 + 24 = 25$, also $V_{\text{Spat}} = 25$.
  ---
  $V_{\text{Tetraeder}} = \tfrac{25}{6} \approx 4{,}17$ Volumeneinheiten.
```

```aufgabe
id: ve-kreuz-fehler
titel: Ein Kreuzprodukt kontrollieren
niveau: 2
lernziel: 6
kompetenz: begruenden
angabe: |
  Ein Mitschüler gibt an: $\begin{pmatrix} 1 \\ -2 \\ 3 \end{pmatrix}\times\begin{pmatrix} 2 \\ 1 \\ -1 \end{pmatrix} = \begin{pmatrix} -1 \\ -7 \\ 5 \end{pmatrix}$.

  a) Woran erkennst du ohne Neurechnen, dass das Ergebnis falsch ist?

  b) Bestimme das richtige Kreuzprodukt.
teile:
  - typ: auswahl
    label: 'a)'
    optionen:
      - 'Das Skalarprodukt mit dem ersten Vektor ist $28$, nicht $0$.'
      - 'Ein Kreuzprodukt kann keine negativen Komponenten haben.'
      - 'Das Ergebnis ist länger als beide Faktoren.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Negative Komponenten sind beim Kreuzprodukt ganz normal. Prüfe stattdessen, ob das Ergebnis auf beiden Faktoren normal steht.'
      - wert: 2
        meldung: 'Die Länge des Kreuzprodukts ist eine Fläche. Sie kann größer sein als die Längen der Faktoren. Das ist kein Kriterium.'
  - typ: vektor
    label: 'b)'
    loesung: ["(-2)*(-1) - 3*1", "3*2 - 1*(-1)", "1*1 - (-2)*2"]
    fehler:
      - wert: ["-1", "-7", "5"]
        meldung: 'Das ist das falsche Ergebnis des Mitschülers. Rechne die mittlere Komponente neu: $a_3 b_1 - a_1 b_3$.'
hinweise:
  - 'Das Kreuzprodukt muss auf beiden Faktoren normal stehen. Prüfe das mit dem Skalarprodukt.'
  - 'Rechne danach jede Komponente mit dem Schema neu. Die mittlere ist $a_3 b_1 - a_1 b_3$.'
loesung: |
  **Ansatz:** Ein richtiges Kreuzprodukt steht auf beiden Faktoren normal. Diese Probe kostet nur ein Skalarprodukt.
  ---
  a) $\begin{pmatrix} 1 \\ -2 \\ 3 \end{pmatrix}\cdot\begin{pmatrix} -1 \\ -7 \\ 5 \end{pmatrix} = -1 + 14 + 15 = 28 \neq 0$. Das Ergebnis steht nicht normal auf dem ersten Vektor, also ist es falsch.
  ---
  b) $\begin{pmatrix} (-2)(-1) - 3\cdot 1 \\ 3\cdot 2 - 1\cdot(-1) \\ 1\cdot 1 - (-2)\cdot 2 \end{pmatrix} = \begin{pmatrix} -1 \\ 7 \\ 5 \end{pmatrix}$. Der Mitschüler hatte das Vorzeichen der mittleren Komponente falsch.
  ---
  **Probe:** $-1 - 14 + 15 = 0$ und $-2 + 7 - 5 = 0$. Es stimmt.
```

```aufgabe
id: ve-zeltdach
titel: Ein pyramidenförmiges Dach
niveau: 3
lernziel: 6
kompetenz: modellieren
angabe: |
  Ein Gartenpavillon hat ein Dach in Form einer Pyramide mit quadratischer Grundfläche. Die Ecken der Grundfläche sind
  $A(0 \mid 0 \mid 0)$, $B(6 \mid 0 \mid 0)$, $C(6 \mid 6 \mid 0)$ und $D(0 \mid 6 \mid 0)$, die Spitze ist $S(3 \mid 3 \mid 4)$. Alle Angaben in Metern.

  a) Berechne den Flächeninhalt der Dachfläche $ABS$.

  b) Wie viel Dachfläche muss insgesamt gedeckt werden? Alle vier Dachflächen sind gleich groß.

  c) Berechne das Volumen unter dem Dach mit dem Spatprodukt. Kontrolliere mit $V = \tfrac13 G h$.
teile:
  - typ: zahl
    label: 'a) Fläche $ABS$'
    einheit: m²
    loesung: "sqrt(0^2 + 24^2 + 18^2)/2"
    fehler:
      - wert: "30"
        meldung: 'Das ist die Länge des Kreuzprodukts, also die Fläche des Parallelogramms. Die Dachfläche ist ein Dreieck.'
  - typ: zahl
    label: 'b) gesamte Dachfläche'
    einheit: m²
    loesung: "4*sqrt(0^2 + 24^2 + 18^2)/2"
  - typ: zahl
    label: 'c) Volumen'
    einheit: m³
    loesung: "36*4/3"
    fehler:
      - wert: "144"
        meldung: 'Das ist das Volumen des Spats aus $\overrightarrow{AB}$, $\overrightarrow{AD}$ und $\overrightarrow{AS}$. Eine Pyramide über einem Parallelogramm hat ein Drittel davon.'
      - wert: "24"
        meldung: 'Der Faktor $\tfrac16$ gilt für ein Tetraeder mit dreieckiger Grundfläche. Diese Pyramide hat eine viereckige Grundfläche, also $\tfrac13$.'
hinweise:
  - 'Für a): $\tfrac12\big|\overrightarrow{AB}\times\overrightarrow{AS}\big|$.'
  - 'Für c): Der Spat aus $\overrightarrow{AB}$, $\overrightarrow{AD}$ und $\overrightarrow{AS}$ hat dieselbe Grundfläche und Höhe wie die Pyramide. Die Pyramide hat ein Drittel seines Volumens.'
loesung: |
  **Ansatz:** Dreiecksflächen mit dem Kreuzprodukt, das Volumen mit dem Spatprodukt und dem Faktor für Pyramiden.
  ---
  a) $\overrightarrow{AB} = \begin{pmatrix} 6 \\ 0 \\ 0 \end{pmatrix}$, $\overrightarrow{AS} = \begin{pmatrix} 3 \\ 3 \\ 4 \end{pmatrix}$, $\overrightarrow{AB}\times\overrightarrow{AS} = \begin{pmatrix} 0\cdot 4 - 0\cdot 3 \\ 0\cdot 3 - 6\cdot 4 \\ 6\cdot 3 - 0\cdot 3 \end{pmatrix} = \begin{pmatrix} 0 \\ -24 \\ 18 \end{pmatrix}$.
  Länge $\sqrt{576 + 324} = \sqrt{900} = 30$, also Fläche $15$ m².
  ---
  b) Vier gleich große Dachflächen: $4\cdot 15 = 60$ m².
  ---
  c) $\overrightarrow{AB}\times\overrightarrow{AD} = \begin{pmatrix} 0 \\ 0 \\ 36 \end{pmatrix}$, Spatprodukt mit $\overrightarrow{AS}$: $36\cdot 4 = 144$. Die Pyramide hat ein Drittel davon: $V = 48$ m³.
  ---
  **Kontrolle:** $G = 6\cdot 6 = 36$ m², $h = 4$ m, $V = \tfrac13\cdot 36\cdot 4 = 48$ m³. **Plausibel:** Die Höhe einer Dachfläche über der Kante $AB$ ist $\sqrt{3^2 + 4^2} = 5$ m, also $\tfrac12\cdot 6\cdot 5 = 15$ m².
```

## Vektor oder Skalar? Terme richtig lesen

```aufgabe
id: ve-typ-vorwissen
titel: Was liefert das Skalarprodukt?
art: check
niveau: 1
angabe: |
  Was ist $\begin{pmatrix} 2 \\ 1 \end{pmatrix}\cdot\begin{pmatrix} 3 \\ -4 \end{pmatrix}$? Zum Nachlesen:
  [6.6 Das Skalarprodukt](/lernen/mathe3/vektoren/das-skalarprodukt-und-der-winkel-zwischen-vektoren).
teile:
  - typ: auswahl
    optionen: ['die Zahl $2$', 'der Vektor $\begin{pmatrix} 6 \\ -4 \end{pmatrix}$', 'die Zahl $10$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Die paarweisen Produkte werden beim Skalarprodukt noch addiert. Das Ergebnis ist eine Zahl, kein Vektor.'
      - wert: 2
        meldung: 'Das zweite Produkt ist $1\cdot(-4) = -4$. Also $6 - 4$.'
loesung: |
  Paarweise multiplizieren und addieren: $2\cdot 3 + 1\cdot(-4) = 6 - 4 = 2$.
  ---
  Das Ergebnis ist eine **Zahl**. Genau das ist der Schlüssel für diese Lektion.
```

In der Prüfung von Schranz-Kirlinger sollte man bei mehreren Termen aus Vektoren und Zahlen entscheiden,
welche davon wieder Vektoren sind. Das ist eine **Typprüfung**, wie sie ein Compiler macht, bevor er ein Programm
übersetzt. Man muss nichts ausrechnen. Man muss nur für jede Rechenoperation wissen, was hineingeht und was
herauskommt.

### Die Signaturen der Operationen

In der Informatik nennt man das die **Signatur** einer Operation: welche Typen sie verarbeitet und welchen Typ sie
liefert. Für die Vektorrechnung sind diese die wichtigsten:

- **Vektor plus oder minus Vektor** ergibt einen **Vektor**. Beispiel: $\vec a + \vec b$.
- **Zahl mal Vektor** ergibt einen **Vektor**. Beispiel: $r\cdot\vec a$ oder $|\vec a|\,\vec b$.
- **Vektor mal Vektor als Skalarprodukt** ergibt eine **Zahl**. Beispiel: $\vec a\cdot\vec b$.
- **Vektor kreuz Vektor** ergibt einen **Vektor**, aber nur im Raum. Beispiel: $\vec a\times\vec b$.
- **Betrag eines Vektors** ergibt eine **Zahl**. Beispiel: $|\vec a|$.
- **Zahl plus, minus oder mal Zahl** ergibt eine **Zahl**. Beispiel: $r + s$ oder $r\cdot s$.

```aufgabe
id: ve-typ-check-betrag
titel: Betrag mal Vektor
art: check
niveau: 1
angabe: |
  Welchen Typ hat der Ausdruck $|\vec a|\,\vec b$?
teile:
  - typ: auswahl
    optionen: ['Vektor', 'Skalar', 'nicht definiert']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$|\vec a|$ ist zwar eine Zahl, aber sie wird mit dem Vektor $\vec b$ multipliziert. Zahl mal Vektor ergibt einen Vektor.'
      - wert: 2
        meldung: 'Eine Zahl darf man mit einem Vektor multiplizieren. Der Betrag $|\vec a|$ ist eine Zahl.'
loesung: |
  $|\vec a|$ ist ein Skalar (eine Länge). Skalar mal Vektor ergibt einen Vektor.
  ---
  $|\vec a|\,\vec b$ ist also ein Vektor in Richtung von $\vec b$, gestreckt um den Faktor $|\vec a|$.
```

**Nicht definiert** sind unter anderem diese Ausdrücke:

- Zahl plus Vektor, etwa $r + \vec a$ oder $|\vec a| + \vec b$. Eine Länge und eine Verschiebung kann man nicht addieren.
- Teilen durch einen Vektor, etwa $\frac{\vec a}{\vec b}$.
- Kreuzprodukt mit einer Zahl, etwa $\vec a\times(\vec b\cdot\vec c)$, denn $\vec b\cdot\vec c$ ist eine Zahl.
- Skalarprodukt mit einer Zahl, etwa $\vec a\cdot(\vec b\cdot\vec c)$, wenn der äußere Punkt als Skalarprodukt gemeint ist.

:::achtung[Der Malpunkt hat zwei Bedeutungen]
Der Punkt $\cdot$ bedeutet je nach Typ der beiden Seiten etwas anderes. Zwischen einer Zahl und einem Vektor ist
er die Multiplikation mit einer Zahl, das Ergebnis ist ein Vektor. Zwischen zwei Vektoren ist er das
Skalarprodukt, das Ergebnis ist eine Zahl.

Ein konkreter Fehler: Mit $\vec a = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$, $\vec b = \begin{pmatrix} 3 \\ 0 \end{pmatrix}$, $\vec c = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$ rechnet jemand
$(\vec a\cdot\vec b)\cdot\vec c$ als „Skalarprodukt von drei Vektoren“ und schreibt eine Zahl hin. Richtig ist: Innen
steht $\vec a\cdot\vec b = 3$, eine Zahl. Außen steht dann Zahl mal Vektor: $3\cdot\vec c = \begin{pmatrix} 3 \\ 3 \end{pmatrix}$. Das
Ergebnis ist ein **Vektor**.
:::

### Von innen nach außen lesen

Die Methode ist immer dieselbe. Du bestimmst die Typen **von innen nach außen**, so wie ein Rechner einen
Ausdrucksbaum auswertet. Schreib dir zu jedem Teilausdruck ein kleines „V“ für Vektor oder „S“ für Skalar dazu.
Dann prüfst du bei jeder Operation, ob es sie für diese Typen gibt.

:::beispiel[Typen bestimmen]
**Erster Term:** $\big(\vec a\cdot\vec b\big)\,\vec c$. Innen steht Vektor mal Vektor als Skalarprodukt, also S. Außen
steht S mal V, also ein **Vektor**.

**Zweiter Term:** $|\vec a|\,\vec b - 2\vec c$. $|\vec a|$ ist S. $|\vec a|\,\vec b$ ist S mal V, also V. $2\vec c$ ist ebenfalls V. V minus V
ergibt einen **Vektor**.

**Dritter Term:** $(2\vec a + \vec b)\cdot(\vec a - 3\vec b)$. Beide Klammern sind Vektoren. Dazwischen steht ein
Skalarprodukt. Das Ergebnis ist ein **Skalar**.

**Vierter Term:** $\vec a\cdot\vec b + \vec c$. Links steht S, rechts V. S plus V ist **nicht definiert**.
:::

:::beispiel[Typen mit echten Zahlen bestätigen]
Mit $\vec a = \begin{pmatrix} 1 \\ 2 \\ 0 \end{pmatrix}$, $\vec b = \begin{pmatrix} 3 \\ 1 \\ -1 \end{pmatrix}$ und $\vec c = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}$ rechnen wir drei der
Terme wirklich aus.

**Schritt 1:** $\vec a\cdot\vec b = 3 + 2 + 0 = 5$. Damit ist $(\vec a\cdot\vec b)\,\vec c = 5\,\vec c = \begin{pmatrix} 0 \\ 5 \\ 5 \end{pmatrix}$, ein Vektor.

**Schritt 2:** $|\vec a| = \sqrt{1 + 4 + 0} = \sqrt 5$. Damit ist $|\vec a|\,\vec b = \sqrt5\begin{pmatrix} 3 \\ 1 \\ -1 \end{pmatrix}$, ebenfalls ein Vektor.

**Schritt 3:** $\vec a + \vec b = \begin{pmatrix} 4 \\ 3 \\ -1 \end{pmatrix}$, also $(\vec a + \vec b)\cdot\vec c = 0 + 3 - 1 = 2$, eine Zahl.

Die Rechnung bestätigt in jedem Fall die Typprüfung.
:::

```aufgabe
id: ve-typ-check-nullvektor
titel: Nullvektor oder Null?
art: check
niveau: 1
angabe: |
  Für zwei Vektoren gilt $\vec a\cdot\vec b = 0$. Was ist dann $(\vec a\cdot\vec b)\,\vec c$ für einen Vektor $\vec c$ im $\R^3$?
teile:
  - typ: auswahl
    optionen: ['der Nullvektor $\vec 0$', 'die Zahl $0$', 'nicht definiert']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Zahl mal Vektor ist immer ein Vektor, auch wenn die Zahl $0$ ist. Das Ergebnis ist $0\cdot\vec c$.'
      - wert: 2
        meldung: '$\vec a\cdot\vec b$ ist eine Zahl, und Zahl mal Vektor ist erlaubt.'
loesung: |
  Innen steht die Zahl $0$, außen Zahl mal Vektor. Das Ergebnis ist ein Vektor.
  ---
  $0\cdot\vec c = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$, also der Nullvektor. Er ist ein Vektor, keine Zahl.
```

:::achtung[Klammern verschieben beim Skalarprodukt]
Für Zahlen gilt $(a b) c = a (b c)$. Jemand überträgt das auf Vektoren und behauptet $(\vec a\cdot\vec b)\,\vec c = \vec a\,(\vec b\cdot\vec c)$.
Das ist falsch. Links steht ein Vielfaches von $\vec c$, rechts ein Vielfaches von $\vec a$. Ein Gegenbeispiel mit
$\vec a = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$, $\vec b = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$, $\vec c = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$: Links ist $1\cdot\vec c = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$, rechts ist
$\vec a\cdot 1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$. Ein Ausdruck wie $\vec a\cdot\vec b\cdot\vec c$ ohne Klammern ist deshalb nicht eindeutig und
wird nie geschrieben.
:::

Diese Typprüfung hat auch eine physikalische Seite. Eine Kraft $\vec F$ und ein Weg $\vec s$ sind Vektoren. Die
Arbeit $W = \vec F\cdot\vec s$ ist ein Skalarprodukt und damit eine Zahl mit der Einheit Joule. Mehr dazu steht in
[6.11 Vektoren in der Physik](/lernen/mathe3/vektoren/kraefte-geschwindigkeiten-und-arbeit-vektoren-in-der-physik).

```reflexion
frage: Ist der Nullvektor dasselbe wie die Zahl 0? Begründe mit einer Rechnung, in der der Unterschied eine Rolle spielt.
antwort: |
  Nein. Die Zahl $0$ ist ein Skalar, der Nullvektor $\vec 0$ ist ein Vektor mit lauter Nullen als Komponenten.
  Beide verhalten sich in Rechnungen verschieden.

  Ein Beispiel: $\vec a + \vec 0 = \vec a$ ist erlaubt, aber $\vec a + 0$ ist nicht definiert, weil man Zahl und Vektor
  nicht addieren kann. Umgekehrt ist $\vec a\cdot\vec 0 = 0$ eine Zahl, während $0\cdot\vec a = \vec 0$ ein Vektor ist.
  Bei einer Typprüfung muss man also genau hinschauen, welche Null gemeint ist.
```

:::merke[Rezept: Vektor, Skalar oder nicht definiert?]
1. Von innen nach außen jedem Teilausdruck ein V oder ein S zuordnen.
2. Ein Skalarprodukt zweier Vektoren und ein Betrag ergeben S. Summen von Vektoren, Zahl mal Vektor und Kreuzprodukte ergeben V.
3. S plus V, Teilen durch V sowie Kreuz- oder Skalarprodukt mit S sind nicht definiert.
4. Nullvektor und Zahl $0$ nicht verwechseln.
:::

```aufgabe
id: ve-typ-einfach
titel: Drei Terme einordnen
niveau: 1
lernziel: 7
kompetenz: verstehen
angabe: |
  $\vec a$ und $\vec b$ sind Vektoren im $\R^3$. Ordne jeden Term ein.
teile:
  - typ: auswahl
    label: '$\vec a - 3\vec b$'
    optionen: ['Vektor', 'Skalar', 'nicht definiert']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$3\vec b$ ist Zahl mal Vektor, also ein Vektor. Vektor minus Vektor ist wieder ein Vektor.'
  - typ: auswahl
    label: '$|\vec a|\cdot|\vec b|$'
    optionen: ['Vektor', 'Skalar', 'nicht definiert']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Beide Beträge sind Zahlen. Das Produkt zweier Zahlen ist eine Zahl.'
  - typ: auswahl
    label: '$\vec a + 2$'
    optionen: ['Vektor', 'Skalar', 'nicht definiert']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: 'Zu einem Vektor kann man keine Zahl addieren. Zu welcher Komponente sollte die $2$ gehören?'
hinweise:
  - 'Schreib zu jedem Teilausdruck V oder S und prüfe, ob die Operation für diese Typen existiert.'
loesung: |
  **Ansatz:** Von innen nach außen die Typen bestimmen.
  ---
  $\vec a - 3\vec b$: V minus V ist ein **Vektor**. $|\vec a|\cdot|\vec b|$: S mal S ist ein **Skalar**.
  ---
  $\vec a + 2$: V plus S ist **nicht definiert**.
```

```aufgabe
id: ve-typ-zahlen
titel: Ein Term mit zwei Malpunkten
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Berechne $(\vec a\cdot\vec b)\,\vec c$ für $\vec a = \begin{pmatrix} 2 \\ 1 \\ -1 \end{pmatrix}$, $\vec b = \begin{pmatrix} 1 \\ 3 \\ 2 \end{pmatrix}$ und $\vec c = \begin{pmatrix} 1 \\ 0 \\ 4 \end{pmatrix}$.
teile:
  - typ: vektor
    loesung: ["(2*1+1*3+(-1)*2)*1", "(2*1+1*3+(-1)*2)*0", "(2*1+1*3+(-1)*2)*4"]
    fehler:
      - wert: ["2", "0", "-8"]
        meldung: 'Du hast alle drei Vektoren komponentenweise multipliziert. Innen steht aber ein Skalarprodukt, also zuerst eine Zahl.'
      - wert: ["7", "0", "28"]
        meldung: 'Beim Skalarprodukt ist das dritte Produkt $(-1)\cdot 2 = -2$. Also $2 + 3 - 2$.'
hinweise:
  - 'Berechne zuerst die Klammer. Sie ist ein Skalarprodukt, also eine Zahl.'
loesung: |
  **Ansatz:** Von innen nach außen: Die Klammer ist eine Zahl, danach Zahl mal Vektor.
  ---
  $\vec a\cdot\vec b = 2 + 3 - 2 = 3$.
  ---
  $3\,\vec c = \begin{pmatrix} 3 \\ 0 \\ 12 \end{pmatrix}$. Das Ergebnis ist ein Vektor.
```

```aufgabe
id: ve-terme-vektoren
titel: Welche Terme sind Vektoren?
niveau: 2
lernziel: 7
kompetenz: verstehen
quelle: nach Musterprüfung Schranz-Kirlinger, Aufgabe 2.1 (abgewandelt)
angabe: |
  Gegeben sind zwei Vektoren $\vec a, \vec b$ und zwei reelle Zahlen $r, s$. Welche der folgenden Terme stellen Vektoren dar?
  Wähle alle passenden aus.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$s\cdot\vec a - r\cdot\vec b$'
      - '$(\vec a + \vec b)\cdot(r\cdot\vec a)$'
      - '$r\cdot s\cdot(\vec b - \vec a)$'
      - '$\vec a\cdot(s\cdot\vec b) + r$'
      - '$(\vec a\cdot\vec b)\cdot(\vec a + s\cdot\vec b)$'
      - '$|r\cdot\vec a|$'
    richtig: [0, 2, 4]
    fehler:
      - wert: [0, 1, 2, 4]
        meldung: 'Beim zweiten Term stehen links und rechts vom mittleren Punkt zwei Vektoren. Das ist ein Skalarprodukt, also eine Zahl.'
      - wert: [0, 2]
        meldung: 'Beim fünften Term ist die erste Klammer eine Zahl und die zweite ein Vektor. Zahl mal Vektor ist ein Vektor.'
      - wert: [0, 2, 3, 4]
        meldung: 'Beim vierten Term ist $\vec a\cdot(s\vec b)$ ein Skalarprodukt, also eine Zahl. Zahl plus $r$ ist wieder eine Zahl.'
hinweise:
  - 'Bestimme bei jedem Term von innen nach außen, ob ein Zwischenergebnis Vektor oder Skalar ist.'
  - 'Ein Skalarprodukt zweier Vektoren ist eine Zahl. Ein Betrag ist eine Zahl.'
loesung: |
  **Ansatz:** Typprüfung von innen nach außen, V für Vektor und S für Skalar.
  ---
  Erster Term: $s\vec a$ und $r\vec b$ sind V, ihre Differenz ist ein **Vektor**. Zweiter Term: Beide Klammern sind V, dazwischen steht ein Skalarprodukt, also ein **Skalar**.
  ---
  Dritter Term: $r\cdot s$ ist S, die Klammer ist V, zusammen ein **Vektor**. Vierter Term: $\vec a\cdot(s\vec b)$ ist ein Skalarprodukt, also S, plus $r$ ergibt einen **Skalar**.
  ---
  Fünfter Term: Die erste Klammer ist S, die zweite V, zusammen ein **Vektor**. Sechster Term: Ein Betrag ist ein **Skalar**.
  ---
  Vektoren sind also der erste, dritte und fünfte Term.
```

```aufgabe
id: ve-sinnlose-terme
titel: Welche Terme sind nicht definiert?
niveau: 2
lernziel: 7
kompetenz: verstehen
angabe: |
  Es seien $\vec a, \vec b, \vec c \in \R^3$ und $r \in \R$. Welche Terme sind **nicht definiert**? Wähle alle passenden aus.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$|\vec a| + \vec b$'
      - '$(\vec a\cdot\vec b)\,\vec c$'
      - '$\vec a\times(\vec b\cdot\vec c)$'
      - '$(\vec a\times\vec b)\cdot\vec c$'
      - '$\vec a\cdot\vec b + r\,|\vec c|$'
      - '$\dfrac{\vec a}{\vec b}$'
    richtig: [0, 2, 5]
    fehler:
      - wert: [0, 5]
        meldung: 'Im dritten Term ist $\vec b\cdot\vec c$ eine Zahl. Ein Kreuzprodukt braucht aber zwei Vektoren.'
      - wert: [0, 2, 3, 5]
        meldung: 'Der vierte Term ist das Spatprodukt: $\vec a\times\vec b$ ist ein Vektor, und sein Skalarprodukt mit $\vec c$ ist erlaubt.'
hinweise:
  - 'Schreibe zu jedem Teilausdruck V oder S und prüfe dann, ob die Operation für diese Typen existiert.'
  - 'Nicht definiert sind S plus V, Teilen durch V und Kreuzprodukte mit einer Zahl.'
loesung: |
  **Ansatz:** Typprüfung von innen nach außen.
  ---
  $|\vec a| + \vec b$: S plus V, **nicht definiert**. $(\vec a\cdot\vec b)\,\vec c$: S mal V ergibt V, definiert.
  ---
  $\vec a\times(\vec b\cdot\vec c)$: Kreuzprodukt von V mit S, **nicht definiert**. $(\vec a\times\vec b)\cdot\vec c$: V mal V als Skalarprodukt ergibt S, definiert. Das ist das Spatprodukt.
  ---
  $\vec a\cdot\vec b + r\,|\vec c|$: S plus S ergibt S, definiert. $\frac{\vec a}{\vec b}$: Teilen durch einen Vektor, **nicht definiert**.
```

```aufgabe
id: ve-typ-ausrechnen
titel: Einen gemischten Term ausrechnen
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Berechne $|\vec a|\,\vec b - (\vec a\cdot\vec b)\,\vec c$ für $\vec a = \begin{pmatrix} 3 \\ 0 \\ 4 \end{pmatrix}$, $\vec b = \begin{pmatrix} 1 \\ 2 \\ -2 \end{pmatrix}$ und
  $\vec c = \begin{pmatrix} 2 \\ -1 \\ 0 \end{pmatrix}$.
teile:
  - typ: vektor
    loesung: ["5*1 + 5*2", "5*2 + 5*(-1)", "5*(-2) + 5*0"]
    fehler:
      - wert: ["-5", "15", "-10"]
        meldung: 'Das Skalarprodukt $\vec a\cdot\vec b = -5$ ist negativ. Minus mal minus ergibt plus, also wird $5\vec c$ **addiert**.'
      - wert: ["5", "10", "-10"]
        meldung: 'Das ist nur $|\vec a|\,\vec b$. Der zweite Teil $(\vec a\cdot\vec b)\,\vec c$ fehlt.'
hinweise:
  - 'Berechne zuerst die beiden Zahlen $|\vec a|$ und $\vec a\cdot\vec b$.'
  - 'Dann bildest du die beiden Vielfachen und ziehst sie voneinander ab. Achte auf das Vorzeichen von $\vec a\cdot\vec b$.'
loesung: |
  **Ansatz:** Zuerst die Skalare ausrechnen, dann die Vektoren bilden. So bleibt die Typprüfung sichtbar.
  ---
  $|\vec a| = \sqrt{9 + 0 + 16} = 5$ und $\vec a\cdot\vec b = 3 + 0 - 8 = -5$.
  ---
  $|\vec a|\,\vec b = 5\begin{pmatrix} 1 \\ 2 \\ -2 \end{pmatrix} = \begin{pmatrix} 5 \\ 10 \\ -10 \end{pmatrix}$ und $(\vec a\cdot\vec b)\,\vec c = -5\begin{pmatrix} 2 \\ -1 \\ 0 \end{pmatrix} = \begin{pmatrix} -10 \\ 5 \\ 0 \end{pmatrix}$.
  ---
  Differenz: $\begin{pmatrix} 5 + 10 \\ 10 - 5 \\ -10 - 0 \end{pmatrix} = \begin{pmatrix} 15 \\ 5 \\ -10 \end{pmatrix}$. Das Ergebnis ist ein Vektor, wie die Typprüfung vorhersagt.
gefuehrt:
  - text: 'Welchen Typ hat der ganze Term? Bestimme ihn, bevor du rechnest.'
    teil:
      typ: auswahl
      optionen: ['Vektor', 'Skalar', 'nicht definiert']
      richtig: [0]
      fehler:
        - wert: 1
          meldung: '$|\vec a|\,\vec b$ ist Zahl mal Vektor. Vektor minus Vektor ergibt einen Vektor.'
    erklaerung: 'S mal V ergibt V, und V minus V ergibt V. Das Ergebnis ist ein Vektor.'
  - text: 'Berechne $|\vec a|$.'
    teil: { typ: zahl, loesung: "5" }
    erklaerung: '$\sqrt{9 + 0 + 16} = 5$.'
  - text: 'Berechne $\vec a\cdot\vec b$.'
    teil: { typ: zahl, loesung: "-5", fehler: [ { wert: "11", meldung: 'Das dritte Produkt ist $4\cdot(-2) = -8$.' } ] }
    erklaerung: '$3\cdot 1 + 0\cdot 2 + 4\cdot(-2) = 3 - 8 = -5$.'
  - text: 'Berechne $(\vec a\cdot\vec b)\,\vec c$.'
    teil: { typ: vektor, loesung: ["-10", "5", "0"] }
    erklaerung: '$-5\cdot\begin{pmatrix} 2 \\ -1 \\ 0 \end{pmatrix}$.'
  - text: 'Berechne den ganzen Term.'
    teil: { typ: vektor, loesung: ["15", "5", "-10"] }
    erklaerung: '$\begin{pmatrix} 5 \\ 10 \\ -10 \end{pmatrix} - \begin{pmatrix} -10 \\ 5 \\ 0 \end{pmatrix} = \begin{pmatrix} 15 \\ 5 \\ -10 \end{pmatrix}$.'
```

```aufgabe
id: ve-typ-klammern
titel: Darf man die Klammer verschieben?
niveau: 2
lernziel: 7
kompetenz: begruenden
angabe: |
  Es seien $\vec a = \begin{pmatrix} 2 \\ 1 \end{pmatrix}$, $\vec b = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$ und $\vec c = \begin{pmatrix} 0 \\ 3 \end{pmatrix}$.

  a) Berechne $(\vec a\cdot\vec b)\,\vec c$.

  b) Berechne $\vec a\,(\vec b\cdot\vec c)$.

  c) Was zeigt der Vergleich?
teile:
  - typ: vektor
    label: 'a)'
    loesung: ["0", "9"]
    fehler:
      - wert: ["6", "3"]
        meldung: 'Das ist Teil b). In a) wird zuerst $\vec a\cdot\vec b = 3$ berechnet und dann mit $\vec c$ multipliziert.'
  - typ: vektor
    label: 'b)'
    loesung: ["6", "3"]
  - typ: auswahl
    label: 'c)'
    optionen:
      - 'Die Ergebnisse sind verschieden. Beim Skalarprodukt darf man die Klammer nicht verschieben.'
      - 'Die Ergebnisse sind gleich, das Assoziativgesetz gilt.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Vergleiche die beiden Vektoren aus a) und b). Sie zeigen sogar in verschiedene Richtungen.'
hinweise:
  - 'Berechne in jedem Teil zuerst die Klammer. Sie ist ein Skalarprodukt, also eine Zahl.'
  - 'In a) ist das Ergebnis ein Vielfaches von $\vec c$, in b) ein Vielfaches von $\vec a$.'
loesung: |
  **Ansatz:** In beiden Termen ist die Klammer eine Zahl. Danach folgt Zahl mal Vektor.
  ---
  a) $\vec a\cdot\vec b = 2 + 1 = 3$, also $3\,\vec c = \begin{pmatrix} 0 \\ 9 \end{pmatrix}$.
  ---
  b) $\vec b\cdot\vec c = 0 + 3 = 3$, also $\vec a\cdot 3 = \begin{pmatrix} 6 \\ 3 \end{pmatrix}$.
  ---
  c) Die Ergebnisse sind verschieden. Der erste Vektor ist ein Vielfaches von $\vec c$, der zweite ein Vielfaches von $\vec a$. Ein „Assoziativgesetz“ für das Skalarprodukt gibt es nicht. Deshalb schreibt man nie $\vec a\cdot\vec b\cdot\vec c$ ohne Klammern.
```

```aufgabe
id: ve-typ-gleichung
titel: Kann man durch einen Vektor teilen?
niveau: 3
lernziel: 7
kompetenz: begruenden
angabe: |
  Gesucht sind Vektoren $\vec x \in \R^3$ mit $\vec a\cdot\vec x = 6$, wobei $\vec a = \begin{pmatrix} 1 \\ 2 \\ 2 \end{pmatrix}$.

  a) Jemand schreibt „$\vec x = \frac{6}{\vec a}$“. Ist das sinnvoll? Und gibt es nur eine Lösung?

  b) Gib die Lösung an, deren zweite und dritte Komponente null sind.

  c) Gib die Lösung an, die parallel zu $\vec a$ ist.
teile:
  - typ: auswahl
    label: 'a)'
    optionen:
      - 'Nicht sinnvoll, denn durch einen Vektor kann man nicht teilen. Es gibt unendlich viele Lösungen.'
      - 'Sinnvoll, und es gibt genau eine Lösung.'
      - 'Nicht sinnvoll, und es gibt gar keine Lösung.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Ein Bruch mit einem Vektor im Nenner ist nicht definiert. Probiere außerdem aus, ob $\begin{pmatrix} 6 \\ 0 \\ 0 \end{pmatrix}$ und $\begin{pmatrix} 0 \\ 3 \\ 0 \end{pmatrix}$ beide passen.'
      - wert: 2
        meldung: 'Rechne $\vec a\cdot\begin{pmatrix} 6 \\ 0 \\ 0 \end{pmatrix}$ aus. Lösungen gibt es also.'
  - typ: vektor
    label: 'b)'
    loesung: ["6", "0", "0"]
    fehler:
      - wert: ["1", "0", "0"]
        meldung: 'Probe: $1\cdot 1 = 1 \neq 6$.'
  - typ: vektor
    label: 'c)'
    loesung: ["6/9*1", "6/9*2", "6/9*2"]
    fehler:
      - wert: ["6", "12", "12"]
        meldung: 'Probe: $6 + 24 + 24 = 54 \neq 6$. Setze $\vec x = \lambda\vec a$ an und bestimme $\lambda$ aus $\lambda\,|\vec a|^2 = 6$.'
      - wert: ["2", "4", "4"]
        meldung: 'Du hast durch $|\vec a| = 3$ geteilt. Aus $\lambda\,\vec a\cdot\vec a = 6$ folgt aber $\lambda = \frac{6}{9}$.'
hinweise:
  - 'Das Skalarprodukt fasst drei Komponenten zu einer einzigen Zahl zusammen. Eine Gleichung reicht nicht, um drei Unbekannte festzulegen.'
  - 'Für c): Setze $\vec x = \lambda\vec a$. Dann ist $\vec a\cdot\vec x = \lambda\,|\vec a|^2$.'
loesung: |
  **Ansatz:** $\vec a\cdot\vec x = 6$ ist eine einzige Gleichung $x_1 + 2x_2 + 2x_3 = 6$ für drei Unbekannte.
  ---
  a) Durch einen Vektor kann man nicht teilen, $\frac{6}{\vec a}$ ist nicht definiert. Eine Gleichung mit drei Unbekannten hat unendlich viele Lösungen. Geometrisch bilden sie eine Ebene.
  ---
  b) Mit $x_2 = x_3 = 0$ bleibt $x_1 = 6$, also $\vec x = \begin{pmatrix} 6 \\ 0 \\ 0 \end{pmatrix}$.
  ---
  c) $\vec x = \lambda\vec a$ ergibt $\lambda\,(1 + 4 + 4) = 9\lambda = 6$, also $\lambda = \tfrac23$ und $\vec x = \begin{pmatrix} \tfrac23 \\ \tfrac43 \\ \tfrac43 \end{pmatrix}$.
  ---
  **Probe:** $\tfrac23 + \tfrac83 + \tfrac83 = \tfrac{18}{3} = 6$. Die Lösungen aus b) und c) sind verschieden. Das bestätigt, dass es nicht nur eine Lösung gibt.
```

## Lineare Abhängigkeit, Linearkombination und Basis

```aufgabe
id: ve-lin-vorwissen
titel: Ein kleines Gleichungssystem
art: check
niveau: 1
angabe: |
  Löse das System $r + s = 3$ und $2r - s = 0$. Zum Nachlesen: [Kapitel 3, Systeme mit zwei Unbekannten](/lernen/mathe3/lgs-matrizen/systeme-mit-zwei-unbekannten).
teile:
  - typ: zahl
    label: '$r$'
    loesung: "1"
    fehler:
      - wert: "3"
        meldung: 'Probe in der zweiten Gleichung: Mit $r = 3$ müsste $s = 6$ sein, dann ist aber $r + s = 9$. Addiere die beiden Gleichungen, dann fällt $s$ weg.'
  - typ: zahl
    label: '$s$'
    loesung: "2"
loesung: |
  Addieren der beiden Gleichungen: $3r = 3$, also $r = 1$.
  ---
  Aus $r + s = 3$ folgt $s = 2$. Probe: $2\cdot 1 - 2 = 0$.
```

In dieser Lektion geht es um die Frage, wie viele **wirklich verschiedene Richtungen** in einer Gruppe von
Vektoren stecken. Zwei parallele Vektoren beschreiben nur eine Richtung, drei Vektoren in einer Ebene nur zwei.
Der Fachbegriff dafür ist **lineare Abhängigkeit**. Er ist für viele ungewohnt. Nimm dir Zeit und lies die
Definition ruhig zweimal.

### Linearkombinationen

Eine **Linearkombination** ist eine „Mischung“ aus Vielfachen von Vektoren. Ein Beispiel:
$$2\begin{pmatrix} 1 \\ 0 \\ 2 \end{pmatrix} - 3\begin{pmatrix} 0 \\ 1 \\ -1 \end{pmatrix} = \begin{pmatrix} 2 \\ -3 \\ 7 \end{pmatrix}.$$
Man nimmt jeden Vektor mit einem Faktor und addiert alles.

:::definition[Linearkombination]
Ein Vektor der Form
$$\lambda_1\vec a_1 + \lambda_2\vec a_2 + \dots + \lambda_k\vec a_k$$
mit Zahlen $\lambda_1, \dots, \lambda_k$ heißt **Linearkombination** der Vektoren $\vec a_1, \dots, \vec a_k$. Die Zahlen
$\lambda_i$ heißen **Koeffizienten**. Der kleine Index $i$ nummeriert sie nur durch.
:::

**Nichtbeispiel:** Für $\vec a = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}$ und $\vec b = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}$ ist
$\vec c = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}$ **keine** Linearkombination von $\vec a$ und $\vec b$. Jede Linearkombination
$r\vec a + s\vec b = \begin{pmatrix} r \\ s \\ 0 \end{pmatrix}$ hat die dritte Komponente $0$, egal welche Zahlen $r$ und $s$ man wählt.

**Was kann man mit Linearkombinationen erreichen?** Mit einem Vektor $\vec a \neq \vec 0$ erreichst du alle Punkte
einer Geraden durch den Ursprung. Mit zwei nicht parallelen Vektoren $\vec a$ und $\vec b$ erreichst du alle Punkte
einer Ebene: $r$ Schritte in Richtung $\vec a$ und $s$ Schritte in Richtung $\vec b$. Das ist die Idee der
Parameterform von Geraden und Ebenen in [Kapitel 7, Ebenen im Raum: Parameterform und Koordinatenform](/lernen/mathe3/analytische-geometrie/ebenen-im-raum-parameterform-und-koordinatenform).

:::beispiel[Eine Futtermischung]
Ein Tierpark mischt zwei Körnerfuttersorten. Sorte $P$ enthält pro kg $200$ g Eiweiß und $100$ g Fett, Sorte $Q$
enthält $100$ g Eiweiß und $300$ g Fett. Gebraucht wird eine Mischung mit genau $700$ g Eiweiß und $600$ g Fett.
Wie viel kg jeder Sorte muss man nehmen?

**Schritt 1, als Linearkombination:** Mit $r$ kg von $P$ und $s$ kg von $Q$ ist der Nährstoffvektor
$$r\begin{pmatrix} 200 \\ 100 \end{pmatrix} + s\begin{pmatrix} 100 \\ 300 \end{pmatrix} = \begin{pmatrix} 700 \\ 600 \end{pmatrix}.$$
**Schritt 2, Gleichungssystem:** komponentenweise $200r + 100s = 700$ und $100r + 300s = 600$. Wir teilen beide
Gleichungen durch $100$, damit die Zahlen kleiner werden: $2r + s = 7$ und $r + 3s = 6$.

**Schritt 3, lösen:** Aus der ersten Gleichung $s = 7 - 2r$. Eingesetzt in die zweite: $r + 21 - 6r = 6$, also
$-5r = -15$ und $r = 3$. Dann $s = 1$.

**Schritt 4, Antwort und Probe:** $3$ kg von $P$ und $1$ kg von $Q$. Probe: $3\cdot 200 + 1\cdot 100 = 700$ g Eiweiß und
$3\cdot 100 + 1\cdot 300 = 600$ g Fett.
:::

### Linear abhängig und linear unabhängig

**Worum geht es?** Eine Gruppe von Vektoren ist **linear abhängig**, wenn mindestens einer von ihnen „nichts Neues
bringt“. Er lässt sich dann aus den anderen zusammensetzen.

**Ein Bild dazu:** Du gibst jemandem Wegbeschreibungen in der Ebene. Mit „nach Osten“ und „nach Norden“ erreicht
er jeden Punkt. Gibst du ihm zusätzlich „nach Nordosten“, bringt das nichts Neues, denn Nordosten ist eine Mischung
aus Osten und Norden. Die drei Richtungen sind abhängig.

:::definition[Lineare Abhängigkeit]
Die Vektoren $\vec a_1, \dots, \vec a_k$ heißen **linear abhängig**, wenn sich der Nullvektor als Linearkombination
schreiben lässt, bei der **nicht alle** Koeffizienten null sind:
$$\lambda_1\vec a_1 + \dots + \lambda_k\vec a_k = \vec 0 \quad\text{mit mindestens einem } \lambda_i \neq 0.$$
Geht das nur mit $\lambda_1 = \dots = \lambda_k = 0$, so heißen die Vektoren **linear unabhängig**.
:::

**In kleinen Schritten zurück zum Bild:** Ist in so einer Gleichung etwa $\lambda_1 \neq 0$, dann darf man durch
$\lambda_1$ teilen und nach $\vec a_1$ auflösen:
$$\vec a_1 = -\frac{\lambda_2}{\lambda_1}\vec a_2 - \dots - \frac{\lambda_k}{\lambda_1}\vec a_k.$$
Also ist $\vec a_1$ eine Linearkombination der anderen. Genau das meint „bringt nichts Neues“.

**Was haben wir gezeigt?** Linear abhängig heißt gleichwertig: Mindestens einer der Vektoren lässt sich durch die
anderen ausdrücken. Warum dann die umständliche Definition mit dem Nullvektor? Sie behandelt alle Vektoren gleich,
und man muss nicht vorher wissen, welcher der überflüssige ist.

```aufgabe
id: ve-lin-check-definition
titel: Die Definition anwenden
art: check
niveau: 1
angabe: |
  Für drei Vektoren gilt $2\vec a - \vec b + 3\vec c = \vec 0$. Was folgt daraus?
teile:
  - typ: auswahl
    optionen:
      - 'Die Vektoren sind linear abhängig, zum Beispiel ist $\vec b = 2\vec a + 3\vec c$.'
      - 'Die Vektoren sind linear unabhängig.'
      - 'Man kann nichts sagen, solange man die Koordinaten nicht kennt.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Hier ist der Nullvektor eine Linearkombination mit Koeffizienten $2$, $-1$ und $3$. Sie sind nicht alle null. Genau das heißt linear abhängig.'
      - wert: 2
        meldung: 'Die Definition braucht keine Koordinaten. Es reicht eine Gleichung mit nicht lauter Nullen als Koeffizienten.'
loesung: |
  Die Koeffizienten $2$, $-1$ und $3$ sind nicht alle null. Nach der Definition sind die Vektoren linear abhängig.
  ---
  Auflösen nach $\vec b$: $\vec b = 2\vec a + 3\vec c$. Der Vektor $\vec b$ bringt also nichts Neues.
```

:::achtung[Drei Vektoren nur paarweise geprüft]
Jemand prüft $\vec a = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}$, $\vec b = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}$ und $\vec c = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}$ so: „Keine zwei davon sind parallel,
also sind die drei linear unabhängig.“ Das ist falsch. Es gilt $\vec c = \vec a + \vec b$, also $\vec a + \vec b - \vec c = \vec 0$.
Die drei liegen alle in der $xy$-Ebene. Bei drei Vektoren reicht es nicht, Paare zu vergleichen. Man prüft alle drei
gemeinsam, zum Beispiel mit dem Spatprodukt: $(\vec a\times\vec b)\cdot\vec c = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}\cdot\begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} = 0$.
:::

### Geometrische Bedeutung und Determinantenkriterium

Je nach Anzahl der Vektoren hat lineare Abhängigkeit eine anschauliche Bedeutung:

- **Zwei Vektoren** sind genau dann linear abhängig, wenn sie parallel sind, also **kollinear**.
- **Drei Vektoren im Raum** sind genau dann linear abhängig, wenn sie in einer gemeinsamen Ebene liegen. Man sagt **komplanar** (lateinisch „in einer Ebene“).
- **Drei Vektoren in der Ebene** sind immer linear abhängig.
- **Vier Vektoren im Raum** sind immer linear abhängig.

:::satz[Determinantenkriterium]
Drei Vektoren $\vec a, \vec b, \vec c \in \R^3$ sind genau dann linear abhängig, wenn
$$(\vec a\times\vec b)\cdot\vec c = \det\begin{pmatrix} a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \\ a_3 & b_3 & c_3 \end{pmatrix} = 0.$$
Zwei Vektoren in der Ebene sind genau dann linear abhängig, wenn $a_1 b_2 - a_2 b_1 = 0$ ist.
:::

**Warum?** Das Spatprodukt ist bis auf das Vorzeichen das Volumen des Spats aus
[6.8 Das Kreuzprodukt](/lernen/mathe3/vektoren/das-kreuzprodukt-normalvektor-flaeche-und-volumen). Das Volumen ist
genau dann null, wenn der Spat „platt“ ist, also alle drei Vektoren in einer Ebene liegen. Algebraisch ist das der
Zusammenhang zwischen Determinante und Lösbarkeit aus [Kapitel 3, Determinanten](/lernen/mathe3/lgs-matrizen/determinanten). Das homogene System
$\lambda_1\vec a + \lambda_2\vec b + \lambda_3\vec c = \vec 0$ hat genau dann auch andere Lösungen als die Nulllösung, wenn die
Determinante null ist.

:::beispiel[Komplanar oder nicht?]
**Erstes Tripel:** $\vec a = \begin{pmatrix} 1 \\ 2 \\ 0 \end{pmatrix}$, $\vec b = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}$, $\vec c = \begin{pmatrix} 2 \\ 5 \\ 1 \end{pmatrix}$.
Es ist $\vec a\times\vec b = \begin{pmatrix} 2\cdot 1 - 0\cdot 1 \\ 0\cdot 0 - 1\cdot 1 \\ 1\cdot 1 - 2\cdot 0 \end{pmatrix} = \begin{pmatrix} 2 \\ -1 \\ 1 \end{pmatrix}$ und
$(\vec a\times\vec b)\cdot\vec c = 4 - 5 + 1 = 0$. Die Vektoren sind komplanar, also linear abhängig. Tatsächlich ist
$\vec c = 2\vec a + \vec b$.

**Zweites Tripel (Nichtbeispiel):** $\vec a = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}$, $\vec b = \begin{pmatrix} 0 \\ 2 \\ 1 \end{pmatrix}$, $\vec c = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}$.
Es ist $\vec a\times\vec b = \begin{pmatrix} -2 \\ -1 \\ 2 \end{pmatrix}$ und $(\vec a\times\vec b)\cdot\vec c = -2 - 1 + 0 = -3 \neq 0$. Diese Vektoren sind
linear unabhängig. Sie spannen einen echten Spat mit Volumen $3$ auf.
:::

### Basis und Koordinaten

Zwei linear unabhängige Vektoren in der Ebene, oder drei im Raum, bilden eine **Basis**. Das heißt: Jeder Vektor
lässt sich auf **genau eine** Weise als Linearkombination von ihnen schreiben. Die Koeffizienten heißen dann die
**Koordinaten bezüglich dieser Basis**.

Die gewohnte Basis besteht aus den Einheitsvektoren in Achsenrichtung, $\vec e_1, \vec e_2, \vec e_3$. Mit ihr sind die
Koordinaten einfach die Komponenten: $\begin{pmatrix} 2 \\ -1 \\ 5 \end{pmatrix} = 2\vec e_1 - \vec e_2 + 5\vec e_3$. Man kann aber auch andere Basen
verwenden. Ein Beispiel in der Ebene mit der Basis $\vec b_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$ und $\vec b_2 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$:
$$\begin{pmatrix} 7 \\ 1 \end{pmatrix} = 4\begin{pmatrix} 1 \\ 1 \end{pmatrix} + 3\begin{pmatrix} 1 \\ -1 \end{pmatrix}.$$
Bezüglich dieser Basis hat $\begin{pmatrix} 7 \\ 1 \end{pmatrix}$ also die Koordinaten $4$ und $3$. Gefunden hat man sie mit dem System
$r + s = 7$ und $r - s = 1$.

Eine Menge, in der man Elemente addieren und mit Zahlen multiplizieren kann und in der die Rechengesetze aus
[6.2 Rechnen mit Vektoren](/lernen/mathe3/vektoren/rechnen-mit-vektoren-addition-vielfache-und-rechengesetze) gelten,
heißt **Vektorraum**. $\R^2$ und $\R^3$ sind Vektorräume. Die Anzahl der Vektoren in einer Basis heißt **Dimension**.
Darum ist der $\R^2$ zweidimensional und der $\R^3$ dreidimensional. Diese Begriffe sind an der Universität
zentral, für die Prüfung genügt die anschauliche Bedeutung.

:::achtung[Nur zwei von drei Gleichungen geprüft]
Gefragt ist, ob $\vec d = \begin{pmatrix} 1 \\ 4 \\ 1 \end{pmatrix}$ eine Linearkombination von $\vec a = \begin{pmatrix} 1 \\ 2 \\ 0 \end{pmatrix}$ und $\vec b = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}$
ist. Jemand rechnet mit den ersten beiden Komponenten: $r = 1$ und $2r + s = 4$, also $s = 2$. Er schließt
„$\vec d = \vec a + 2\vec b$“. Das ist falsch, denn die dritte Komponente passt nicht: $0\cdot r + 1\cdot s = 2 \neq 1$.
Tatsächlich ist $\vec a + 2\vec b = \begin{pmatrix} 1 \\ 4 \\ 2 \end{pmatrix}$. Bei drei Gleichungen mit zwei Unbekannten ist die dritte Gleichung die
**Probe**. Geht sie nicht auf, gibt es keine Darstellung.
:::

```reflexion
frage: Warum ist jede Gruppe von Vektoren, die den Nullvektor enthält, linear abhängig? Erkläre es mit der Definition und mit dem Bild „bringt nichts Neues“.
antwort: |
  **Mit der Definition:** Ist etwa $\vec a_1 = \vec 0$, dann gilt $1\cdot\vec a_1 + 0\cdot\vec a_2 + \dots + 0\cdot\vec a_k = \vec 0$. Der
  Koeffizient $1$ ist nicht null. Also gibt es eine Darstellung des Nullvektors, bei der nicht alle Koeffizienten
  null sind, und die Vektoren sind linear abhängig.

  **Mit dem Bild:** Der Nullvektor hat keine Richtung. Er fügt also keine neue Richtung hinzu und bringt nichts
  Neues. Man erhält ihn als $0\cdot$(irgendein anderer Vektor).
```

:::merke[Rezept: lineare Abhängigkeit prüfen]
1. Zwei Vektoren: Ist einer ein Vielfaches des anderen? Quotienten der Komponenten vergleichen.
2. Drei Vektoren im Raum: Spatprodukt $(\vec a\times\vec b)\cdot\vec c$ berechnen. Null heißt abhängig.
3. Darstellung $\vec c = r\vec a + s\vec b$ gesucht: Gleichungssystem aus den Komponenten aufstellen, mit zwei Gleichungen lösen und die dritte als Probe verwenden.
4. Mehr Vektoren als die Dimension (drei in der Ebene, vier im Raum): immer abhängig.
:::

```aufgabe
id: ve-lin-abh-zwei
titel: Welche Paare sind linear abhängig?
niveau: 1
lernziel: 8
kompetenz: verstehen
angabe: |
  Welche Paare sind linear abhängig? Wähle alle passenden aus.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$\begin{pmatrix} 2 \\ -4 \\ 6 \end{pmatrix}$ und $\begin{pmatrix} -3 \\ 6 \\ -9 \end{pmatrix}$'
      - '$\begin{pmatrix} 1 \\ 0 \\ 2 \end{pmatrix}$ und $\begin{pmatrix} 2 \\ 1 \\ 4 \end{pmatrix}$'
      - '$\begin{pmatrix} 4 \\ 6 \end{pmatrix}$ und $\begin{pmatrix} 6 \\ 9 \end{pmatrix}$'
      - '$\begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$ und $\begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$'
    richtig: [0, 2, 3]
    fehler:
      - wert: [0, 2]
        meldung: 'Auch das letzte Paar ist abhängig: $1\cdot\vec 0 + 0\cdot\begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix} = \vec 0$ ist eine Darstellung mit einem Koeffizienten ungleich null.'
      - wert: [0, 1, 2, 3]
        meldung: 'Beim zweiten Paar müsste aus der zweiten Komponente $1 = \lambda\cdot 0$ folgen. Das ist unmöglich.'
hinweise:
  - 'Zwei Vektoren sind genau dann abhängig, wenn einer ein Vielfaches des anderen ist. Denk auch an den Nullvektor.'
loesung: |
  **Ansatz:** Für jedes Paar prüfen, ob ein Vektor ein Vielfaches des anderen ist.
  ---
  Erstes Paar: $\begin{pmatrix} -3 \\ 6 \\ -9 \end{pmatrix} = -\tfrac32\begin{pmatrix} 2 \\ -4 \\ 6 \end{pmatrix}$, abhängig. Zweites Paar: In der zweiten Komponente müsste $1 = \lambda\cdot 0$ sein, unmöglich, also unabhängig.
  ---
  Drittes Paar: $4\cdot 9 - 6\cdot 6 = 0$, abhängig. Es ist $\begin{pmatrix} 6 \\ 9 \end{pmatrix} = 1{,}5\begin{pmatrix} 4 \\ 6 \end{pmatrix}$.
  ---
  Viertes Paar: $1\cdot\vec 0 + 0\cdot\begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix} = \vec 0$ mit dem Koeffizienten $1 \neq 0$. Mit dem Nullvektor ist jede Gruppe abhängig.
```

```aufgabe
id: ve-linkomb-berechnen
titel: Eine Linearkombination ausrechnen
niveau: 1
lernziel: 8
kompetenz: rechnen
angabe: |
  Berechne $3\begin{pmatrix} 1 \\ -1 \\ 2 \end{pmatrix} - 2\begin{pmatrix} 2 \\ 0 \\ -1 \end{pmatrix} + \begin{pmatrix} 0 \\ 4 \\ 1 \end{pmatrix}$.
teile:
  - typ: vektor
    loesung: ["3*1 - 2*2 + 0", "3*(-1) - 2*0 + 4", "3*2 - 2*(-1) + 1"]
    fehler:
      - wert: ["7", "1", "5"]
        meldung: 'Das Minus vor dem zweiten Vektor wurde vergessen. Es wirkt auf jede Komponente von $2\begin{pmatrix} 2 \\ 0 \\ -1 \end{pmatrix}$.'
      - wert: ["-1", "1", "5"]
        meldung: 'In der dritten Komponente: $6 - 2\cdot(-1) + 1 = 6 + 2 + 1 = 9$. Minus mal minus ergibt plus.'
hinweise:
  - 'Bilde zuerst die Vielfachen, dann addiere komponentenweise. Achte auf minus mal minus.'
loesung: |
  **Ansatz:** Vielfache bilden, dann komponentenweise addieren.
  ---
  $3\begin{pmatrix} 1 \\ -1 \\ 2 \end{pmatrix} = \begin{pmatrix} 3 \\ -3 \\ 6 \end{pmatrix}$ und $-2\begin{pmatrix} 2 \\ 0 \\ -1 \end{pmatrix} = \begin{pmatrix} -4 \\ 0 \\ 2 \end{pmatrix}$.
  ---
  Summe: $\begin{pmatrix} 3 - 4 + 0 \\ -3 + 0 + 4 \\ 6 + 2 + 1 \end{pmatrix} = \begin{pmatrix} -1 \\ 1 \\ 9 \end{pmatrix}$.
```

```aufgabe
id: ve-komplanar
titel: Parameter für Komplanarität
niveau: 2
lernziel: 8
kompetenz: rechnen
angabe: |
  Für welchen Wert von $t$ liegen $\vec a = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}$, $\vec b = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}$ und
  $\vec c = \begin{pmatrix} 1 \\ t \\ 2 \end{pmatrix}$ in einer Ebene?
teile:
  - typ: zahl
    label: '$t$'
    loesung: "3"
    fehler:
      - wert: "-3"
        meldung: 'Probe: $(\vec a\times\vec b)\cdot\vec c = 1 + 3 + 2 \neq 0$. Prüfe das Vorzeichen der mittleren Komponente von $\vec a\times\vec b$.'
      - wert: "1"
        meldung: 'Mit $t = 1$ ist das Spatprodukt $1 - 1 + 2 = 2 \neq 0$. Löse die Gleichung $3 - t = 0$.'
hinweise:
  - 'Komplanar heißt $(\vec a\times\vec b)\cdot\vec c = 0$.'
  - 'Berechne zuerst $\vec a\times\vec b$. Das Skalarprodukt mit $\vec c$ ergibt eine lineare Gleichung in $t$.'
loesung: |
  **Ansatz:** Drei Vektoren liegen genau dann in einer Ebene, wenn ihr Spatprodukt null ist.
  ---
  $\vec a\times\vec b = \begin{pmatrix} 1\cdot 1 - 0\cdot 1 \\ 0\cdot 0 - 1\cdot 1 \\ 1\cdot 1 - 1\cdot 0 \end{pmatrix} = \begin{pmatrix} 1 \\ -1 \\ 1 \end{pmatrix}$.
  ---
  $(\vec a\times\vec b)\cdot\vec c = 1 - t + 2 = 3 - t = 0$, also $t = 3$.
  ---
  **Probe:** $\vec c = \begin{pmatrix} 1 \\ 3 \\ 2 \end{pmatrix} = \vec a + 2\vec b$. Es stimmt.
```

```aufgabe
id: ve-linearkombination-darstellen
titel: Als Linearkombination darstellen
niveau: 2
lernziel: 8
kompetenz: rechnen
angabe: |
  Gegeben sind $\vec a = \begin{pmatrix} 1 \\ 0 \\ 2 \end{pmatrix}$ und $\vec b = \begin{pmatrix} 0 \\ 1 \\ -1 \end{pmatrix}$.

  a) Stelle $\vec c = \begin{pmatrix} 3 \\ -2 \\ 8 \end{pmatrix}$ als $r\vec a + s\vec b$ dar.

  b) Lässt sich auch $\vec d = \begin{pmatrix} 1 \\ 1 \\ 2 \end{pmatrix}$ so darstellen?
teile:
  - typ: zahl
    label: 'a) $r$'
    loesung: "3"
  - typ: zahl
    label: 'a) $s$'
    loesung: "-2"
    fehler:
      - wert: "2"
        meldung: 'Die zweite Komponente von $r\vec a + s\vec b$ ist genau $s$. Sie muss gleich $-2$ sein.'
  - typ: auswahl
    label: 'b)'
    optionen: ["Ja", "Nein"]
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Aus den ersten beiden Komponenten folgt $r = 1$ und $s = 1$. Prüfe damit die dritte: $2r - s = 1$, aber verlangt ist $2$.'
hinweise:
  - 'Schreibe $r\vec a + s\vec b$ komponentenweise aus. Es entsteht $\begin{pmatrix} r \\ s \\ 2r - s \end{pmatrix}$.'
  - 'Zwei Komponenten liefern $r$ und $s$, die dritte ist die Probe.'
loesung: |
  **Ansatz:** $r\vec a + s\vec b = \begin{pmatrix} r \\ s \\ 2r - s \end{pmatrix}$. Wir vergleichen mit dem Zielvektor.
  ---
  a) Vergleich mit $\vec c$: $r = 3$ und $s = -2$. Probe mit der dritten Komponente: $2\cdot 3 - (-2) = 8$. Also $\vec c = 3\vec a - 2\vec b$.
  ---
  b) Für $\vec d$: $r = 1$ und $s = 1$, aber dann ist $2r - s = 1 \neq 2$. Die Probe geht nicht auf, es gibt keine Darstellung.
  ---
  **Deutung:** $\vec c$ liegt in der Ebene, die $\vec a$ und $\vec b$ aufspannen, $\vec d$ nicht. Die Vektoren $\vec a, \vec b, \vec d$ sind also linear unabhängig.
gefuehrt:
  - text: 'Die erste Komponente von $r\vec a + s\vec b$ ist $r$. Welchen Wert muss $r$ haben, damit sie mit $\vec c$ übereinstimmt?'
    teil: { typ: zahl, loesung: "3" }
    erklaerung: 'Die erste Komponente von $\vec c$ ist $3$, also $r = 3$.'
  - text: 'Die zweite Komponente ist $s$. Welchen Wert hat $s$?'
    teil: { typ: zahl, loesung: "-2" }
    erklaerung: 'Die zweite Komponente von $\vec c$ ist $-2$, also $s = -2$.'
  - text: 'Probe mit der dritten Komponente $2r - s$. Welcher Wert kommt heraus?'
    teil: { typ: zahl, loesung: "8", fehler: [ { wert: "4", meldung: 'Minus mal minus: $2\cdot 3 - (-2) = 6 + 2$.' } ] }
    erklaerung: '$2\cdot 3 - (-2) = 8$. Das ist die dritte Komponente von $\vec c$, die Darstellung stimmt.'
  - text: 'Für $\vec d$ ergeben die ersten beiden Komponenten $r = 1$ und $s = 1$. Geht die Probe auf?'
    teil:
      typ: auswahl
      optionen: ['Ja', 'Nein']
      richtig: [1]
    erklaerung: '$2\cdot 1 - 1 = 1$, verlangt ist aber $2$. Die Probe geht nicht auf, also gibt es keine Darstellung.'
```

```aufgabe
id: ve-basis-koordinaten
titel: Koordinaten bezüglich einer anderen Basis
niveau: 2
lernziel: 8
kompetenz: rechnen
angabe: |
  Die Vektoren $\vec b_1 = \begin{pmatrix} 2 \\ 1 \end{pmatrix}$ und $\vec b_2 = \begin{pmatrix} 1 \\ -3 \end{pmatrix}$ bilden eine Basis der Ebene.
  Bestimme die Zahlen $r$ und $s$ mit $r\vec b_1 + s\vec b_2 = \begin{pmatrix} 7 \\ 0 \end{pmatrix}$.
teile:
  - typ: zahl
    label: '$r$'
    loesung: "3"
    fehler:
      - wert: "7/2"
        meldung: 'Du hast nur die erste Gleichung verwendet und $s = 0$ angenommen. Beide Gleichungen müssen gleichzeitig gelten.'
  - typ: zahl
    label: '$s$'
    loesung: "1"
hinweise:
  - 'Komponentenweise entstehen zwei Gleichungen: $2r + s = 7$ und $r - 3s = 0$.'
  - 'Aus der zweiten Gleichung folgt $r = 3s$. Setze das in die erste ein.'
loesung: |
  **Ansatz:** Komponentenweise vergleichen ergibt ein Gleichungssystem für $r$ und $s$.
  ---
  $2r + s = 7$ und $r - 3s = 0$. Aus der zweiten Gleichung: $r = 3s$.
  ---
  Eingesetzt: $6s + s = 7$, also $s = 1$ und $r = 3$.
  ---
  **Probe:** $3\begin{pmatrix} 2 \\ 1 \end{pmatrix} + \begin{pmatrix} 1 \\ -3 \end{pmatrix} = \begin{pmatrix} 7 \\ 0 \end{pmatrix}$. Es stimmt.
```

```aufgabe
id: ve-futter-mischung
titel: Zwei Futtersorten mischen
niveau: 2
lernziel: 8
kompetenz: modellieren
angabe: |
  Futtersorte $P$ enthält pro kg $300$ g Eiweiß und $50$ g Fett. Sorte $Q$ enthält pro kg $100$ g Eiweiß und $200$ g Fett.
  Eine Mischung soll genau $1100$ g Eiweiß und $550$ g Fett enthalten. Wie viele kg jeder Sorte braucht man?
teile:
  - typ: zahl
    label: 'Sorte $P$'
    einheit: kg
    loesung: "3"
    fehler:
      - wert: "11/3"
        meldung: 'So viel $P$ bräuchte man, wenn das Eiweiß nur aus $P$ käme. Beide Sorten liefern Eiweiß und Fett, also brauchst du ein Gleichungssystem.'
  - typ: zahl
    label: 'Sorte $Q$'
    einheit: kg
    loesung: "2"
hinweise:
  - 'Stelle die Linearkombination $r\begin{pmatrix} 300 \\ 50 \end{pmatrix} + s\begin{pmatrix} 100 \\ 200 \end{pmatrix} = \begin{pmatrix} 1100 \\ 550 \end{pmatrix}$ auf.'
  - 'Teile beide Gleichungen durch $50$. Löse dann die zweite Gleichung $r + 4s = 11$ nach $r$ auf und setze in die erste ein.'
loesung: |
  **Ansatz:** Mit $r$ kg von $P$ und $s$ kg von $Q$ ist der Nährstoffvektor eine Linearkombination der beiden Sortenvektoren.
  ---
  Komponentenweise: $300r + 100s = 1100$ (Eiweiß) und $50r + 200s = 550$ (Fett). Durch $50$ geteilt: $6r + 2s = 22$ und $r + 4s = 11$.
  ---
  Aus der zweiten Gleichung: $r = 11 - 4s$. Eingesetzt: $66 - 24s + 2s = 22$, also $22s = 44$ und $s = 2$. Dann $r = 3$.
  ---
  **Antwort:** $3$ kg von $P$ und $2$ kg von $Q$. **Probe:** $900 + 200 = 1100$ g Eiweiß und $150 + 400 = 550$ g Fett.
```

```aufgabe
id: ve-abhaengig-begruenden
titel: Aussagen über lineare Abhängigkeit
niveau: 2
lernziel: 8
kompetenz: begruenden
angabe: |
  Beurteile die folgenden Aussagen über Vektoren im $\R^3$.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: 'Vier Vektoren im $\R^3$ sind immer linear abhängig.'
        richtig: true
        erklaerung: 'Drei unabhängige Vektoren erreichen schon jeden Punkt. Ein vierter lässt sich deshalb immer durch sie ausdrücken.'
      - text: 'Sind keine zwei von drei Vektoren parallel, dann sind die drei linear unabhängig.'
        richtig: false
        erklaerung: 'Gegenbeispiel: $\vec e_1$, $\vec e_2$ und $\vec e_1 + \vec e_2$. Keine zwei sind parallel, aber alle liegen in einer Ebene.'
      - text: 'Ist das Spatprodukt dreier Vektoren null, liegen sie in einer Ebene.'
        richtig: true
        erklaerung: 'Das Spatprodukt ist bis auf das Vorzeichen das Volumen des Spats. Volumen null heißt: Der Spat ist platt.'
      - text: 'Zwei linear unabhängige Vektoren können parallel sein.'
        richtig: false
        erklaerung: 'Zwei parallele Vektoren sind Vielfache voneinander, also gerade linear abhängig.'
    fehler:
      - wert: [r, r, r, f]
        meldung: 'Die zweite Aussage ist der klassische Fehler: paarweise nicht parallel reicht bei drei Vektoren nicht. Denk an drei Vektoren in derselben Ebene.'
      - wert: [f, f, r, f]
        meldung: 'Im $\R^3$ gibt es höchstens drei unabhängige Richtungen. Ein vierter Vektor bringt nie etwas Neues.'
hinweise:
  - 'Denk bei jeder Aussage an ein Bild: Gerade, Ebene, Raum.'
  - 'Suche für falsche Aussagen ein konkretes Gegenbeispiel mit den Einheitsvektoren.'
loesung: |
  **Ansatz:** Jede Aussage geometrisch deuten und für falsche Aussagen ein Gegenbeispiel suchen.
  ---
  Erste Aussage richtig: Im Raum gibt es höchstens drei unabhängige Richtungen. Zweite Aussage falsch: $\vec e_1$, $\vec e_2$ und $\vec e_1 + \vec e_2$ sind paarweise nicht parallel, aber abhängig.
  ---
  Dritte Aussage richtig: Spatprodukt null heißt Volumen null, die Vektoren liegen in einer Ebene. Vierte Aussage falsch: Parallele Vektoren sind immer abhängig.
```

```aufgabe
id: ve-lin-abh-parameter
titel: Für welche k sind drei Vektoren abhängig?
niveau: 3
lernziel: 8
kompetenz: rechnen
angabe: |
  Für welche Zahlen $k$ sind $\vec a = \begin{pmatrix} k \\ 1 \\ 1 \end{pmatrix}$, $\vec b = \begin{pmatrix} 1 \\ k \\ 1 \end{pmatrix}$ und $\vec c = \begin{pmatrix} 1 \\ 1 \\ k \end{pmatrix}$ linear abhängig?
  Gib alle Werte getrennt durch einen Strichpunkt an.
teile:
  - typ: menge
    label: '$k$'
    loesung: ["1", "-2"]
    fehler:
      - wert: ["1"]
        meldung: '$k = 1$ ist eine Nullstelle von $k^3 - 3k + 2$. Nach dem Abspalten von $(k - 1)$ bleibt $k^2 + k - 2$. Diese quadratische Gleichung hat noch eine zweite Lösung.'
      - wert: ["1", "2"]
        meldung: 'Probe mit $k = 2$: $8 - 6 + 2 = 4 \neq 0$. Prüfe das Vorzeichen.'
hinweise:
  - 'Abhängig heißt Spatprodukt null. Berechne $(\vec a\times\vec b)\cdot\vec c$ in Abhängigkeit von $k$.'
  - 'Es entsteht $k^3 - 3k + 2 = 0$. Rate eine kleine ganze Lösung und spalte sie mit Polynomdivision ab, siehe [Kapitel 2, Gleichungen höheren Grades](/lernen/mathe3/gleichungen/gleichungen-hoeheren-grades).'
loesung: |
  **Ansatz:** Drei Vektoren im Raum sind genau dann abhängig, wenn ihr Spatprodukt null ist.
  ---
  $\vec a\times\vec b = \begin{pmatrix} 1\cdot 1 - 1\cdot k \\ 1\cdot 1 - k\cdot 1 \\ k\cdot k - 1\cdot 1 \end{pmatrix} = \begin{pmatrix} 1 - k \\ 1 - k \\ k^2 - 1 \end{pmatrix}$.
  ---
  $(\vec a\times\vec b)\cdot\vec c = (1 - k) + (1 - k) + k(k^2 - 1) = k^3 - 3k + 2$.
  ---
  $k = 1$ ist eine Lösung, denn $1 - 3 + 2 = 0$. Polynomdivision: $k^3 - 3k + 2 = (k - 1)(k^2 + k - 2) = (k - 1)(k - 1)(k + 2)$.
  ---
  **Antwort:** Abhängig für $k = 1$ und $k = -2$. **Probe für $k = -2$:** $\vec a + \vec b + \vec c = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$, also eine Darstellung des Nullvektors mit lauter Einsen. Für $k = 1$ sind sogar alle drei Vektoren gleich.
```

## Kräfte, Geschwindigkeiten und Arbeit: Vektoren in der Physik

```aufgabe
id: ve-physik-vorwissen
titel: Eine Kraft zerlegen
art: check
niveau: 1
angabe: |
  Eine Kraft von $50$ N zieht unter $30°$ gegen die Waagrechte. Wie groß ist ihr waagrechter Anteil? Runde auf zwei
  Dezimalstellen. Zum Nachlesen: [Kapitel 5, Das rechtwinklige Dreieck](/lernen/mathe3/trigonometrie/das-rechtwinklige-dreieck).
teile:
  - typ: zahl
    einheit: N
    loesung: "50*cos(inRad(30))"
    fehler:
      - wert: "25"
        meldung: 'Das ist $50\cdot\sin 30°$, der **senkrechte** Anteil. Der waagrechte Anteil liegt am Winkel an, also gehört der Kosinus dazu.'
      - wert: "50"
        meldung: 'Die ganze Kraft zieht schräg. Nur ein Teil davon wirkt waagrecht.'
loesung: |
  Der waagrechte Anteil ist die Ankathete im rechtwinkligen Dreieck aus Kraft und Anteilen: $F_x = F\cos 30°$.
  ---
  $F_x = 50\cdot\cos 30° \approx 43{,}30$ N.
```

Viele physikalische Größen haben eine **Stärke und eine Richtung**: Kräfte, Geschwindigkeiten, Verschiebungen. Sie
sind Vektoren. Man nennt sie **vektorielle Größen**. Andere Größen wie Masse, Zeit, Temperatur oder Arbeit haben nur
einen Zahlenwert mit Einheit. Sie heißen **skalare Größen**. In dieser Lektion wendest du die Werkzeuge des
Kapitels auf Kräfte, Geschwindigkeiten und Arbeit an. Sie bilden die Grundlage für die Kapitel
Dynamik (etwa [Das Freikörperbild](/lernen/physik1/dynamik/das-freikoerperbild-alle-kraefte-auf-einen-koerper)) und Arbeit, Energie und Impuls (etwa [Mechanische Arbeit](/lernen/physik1/arbeit-energie-impuls/mechanische-arbeit)) im
Physikkurs.

### Kräfte addieren: das Kräfteparallelogramm

Greifen mehrere Kräfte am selben Körper an, wirken sie zusammen wie eine einzige Kraft. Diese heißt
**resultierende Kraft** oder kurz **Resultierende**. Sie ist die **Vektorsumme** aller Kräfte. Zeichnerisch erhält
man sie mit der Parallelogrammregel aus
[6.2 Rechnen mit Vektoren](/lernen/mathe3/vektoren/rechnen-mit-vektoren-addition-vielfache-und-rechengesetze). In der
Physik heißt das **Kräfteparallelogramm**.

:::beispiel[Zwei Seile ziehen ein Boot]
Zwei Personen ziehen ein Boot an Seilen. Die Kräfte sind $\vec F_1 = \begin{pmatrix} 300 \\ 100 \end{pmatrix}$ N und
$\vec F_2 = \begin{pmatrix} 200 \\ -150 \end{pmatrix}$ N. Die $x$-Achse zeigt flussabwärts.

**Schritt 1, Resultierende:** $\vec R = \vec F_1 + \vec F_2 = \begin{pmatrix} 500 \\ -50 \end{pmatrix}$ N.

**Schritt 2, Betrag:** $|\vec R| = \sqrt{500^2 + 50^2} = \sqrt{252\,500} \approx 502{,}49$ N.

**Schritt 3, Richtung:** Der Winkel gegen die $x$-Achse ist $\arctan\frac{-50}{500} \approx -5{,}71°$. Das Boot wird also
fast genau flussabwärts gezogen, leicht nach rechts abweichend.
:::

```plot
x: [-0.5, 5.5]
y: [-2, 1.5]
gleich: true
vektoren:
  - { von: [0, 0], nach: [3, 1], label: "F1", farbe: 0 }
  - { von: [0, 0], nach: [2, -1.5], label: "F2", farbe: 1 }
  - { von: [3, 1], nach: [5, -0.5], gestrichelt: true, farbe: 1 }
  - { von: [2, -1.5], nach: [5, -0.5], gestrichelt: true, farbe: 0 }
  - { von: [0, 0], nach: [5, -0.5], label: "R = F1 + F2", farbe: 2 }
beschriftung: Kräfteparallelogramm zum Boot-Beispiel, eine Einheit entspricht 100 N. Die Resultierende R ist die Diagonale des Parallelogramms aus F1 und F2.
```

:::achtung[Beträge von Kräften addiert]
Im Boot-Beispiel rechnet jemand die Stärke der Resultierenden als $|\vec F_1| + |\vec F_2| = \sqrt{100\,000} + 250 \approx 316{,}23 + 250 = 566{,}23$ N.
Das ist falsch. Die beiden Kräfte ziehen in verschiedene Richtungen und heben sich teilweise auf. Richtig ist der
Betrag der Vektorsumme, also $|\vec R| \approx 502{,}49$ N. Beträge darf man nur addieren, wenn die Kräfte in genau
dieselbe Richtung zeigen. Das ist die Dreiecksungleichung aus
[6.3 Betrag, Abstand und Einheitsvektor](/lernen/mathe3/vektoren/betrag-abstand-und-einheitsvektor).
:::

### Gleichgewicht

Ein Körper ist im **Gleichgewicht**, wenn die Summe aller Kräfte der Nullvektor ist. Dann bewegt er sich nicht oder
gleichmäßig weiter. Mit Vektoren heißt das: $\vec F_1 + \vec F_2 + \dots = \vec 0$. Diese eine Vektorgleichung enthält
in der Ebene zwei Zahlengleichungen, eine für jede Komponente.

:::beispiel[Eine Lampe an zwei Seilen]
Eine Lampe mit der Gewichtskraft $\vec G = \begin{pmatrix} 0 \\ -60 \end{pmatrix}$ N hängt an zwei Seilen. Das linke Seil zieht in Richtung
$\begin{pmatrix} -3 \\ 4 \end{pmatrix}$, das rechte in Richtung $\begin{pmatrix} 3 \\ 4 \end{pmatrix}$. Wie stark ziehen die Seile?

**Schritt 1, Ansatz:** Die Seilkräfte sind Vielfache ihrer Richtungen: $\vec F_1 = \lambda\begin{pmatrix} -3 \\ 4 \end{pmatrix}$ und
$\vec F_2 = \mu\begin{pmatrix} 3 \\ 4 \end{pmatrix}$ mit positiven Zahlen $\lambda$ und $\mu$.

**Schritt 2, Gleichgewicht komponentenweise:** $x$-Richtung: $-3\lambda + 3\mu = 0$. $y$-Richtung: $4\lambda + 4\mu - 60 = 0$.

**Schritt 3, lösen:** Aus der ersten Gleichung $\lambda = \mu$. Eingesetzt in die zweite: $8\lambda = 60$, also $\lambda = 7{,}5$.

**Schritt 4, Seilkräfte:** $\vec F_1 = \begin{pmatrix} -22{,}5 \\ 30 \end{pmatrix}$ N mit $|\vec F_1| = 7{,}5\cdot 5 = 37{,}5$ N. Ebenso
$|\vec F_2| = 37{,}5$ N. Jedes Seil trägt mehr als die halbe Last, weil es schräg zieht.
:::

```plot
x: [-3.5, 3.5]
y: [-6.5, 3.5]
gleich: true
vektoren:
  - { von: [0, 0], nach: [-2.25, 3], label: "F1", farbe: 0 }
  - { von: [0, 0], nach: [2.25, 3], label: "F2", farbe: 1 }
  - { von: [0, 0], nach: [0, -6], label: "G", farbe: 2 }
punkte:
  - { x: 0, y: 0, label: "Lampe" }
beschriftung: Freikörperbild der Lampe, eine Einheit entspricht 10 N. Die beiden Seilkräfte von je 37,5 N und die Gewichtskraft von 60 N ergeben zusammen den Nullvektor.
```

```aufgabe
id: ve-physik-check-gleichgewicht
titel: Die dritte Kraft im Gleichgewicht
art: check
niveau: 1
angabe: |
  An einem Ring ziehen $\vec F_1 = \begin{pmatrix} 4 \\ 1 \end{pmatrix}$ N und $\vec F_2 = \begin{pmatrix} -1 \\ 3 \end{pmatrix}$ N. Welche dritte Kraft $\vec F_3$ hält den Ring im Gleichgewicht?
teile:
  - typ: vektor
    label: '$\vec F_3$ in N'
    loesung: ["-3", "-4"]
    fehler:
      - wert: ["3", "4"]
        meldung: 'Das ist die Resultierende $\vec F_1 + \vec F_2$. Die dritte Kraft muss sie aufheben, zeigt also in die Gegenrichtung.'
loesung: |
  Gleichgewicht heißt $\vec F_1 + \vec F_2 + \vec F_3 = \vec 0$, also $\vec F_3 = -(\vec F_1 + \vec F_2)$.
  ---
  $\vec F_1 + \vec F_2 = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$, also $\vec F_3 = \begin{pmatrix} -3 \\ -4 \end{pmatrix}$ N.
```

### Kräfte zerlegen: die Hangabtriebskraft

Oft will man wissen, wie stark eine Kraft **in eine bestimmte Richtung** wirkt. Das ist die Projektion aus
[6.7 Orthogonalität, Normalvektor und Projektion](/lernen/mathe3/vektoren/orthogonalitaet-normalvektor-und-projektion).
Ein wichtiges Beispiel ist die schiefe Ebene. Die Gewichtskraft zeigt senkrecht nach unten. Nur ihr Anteil längs der
Ebene zieht den Körper hinunter. Er heißt **Hangabtriebskraft**.

:::beispiel[Eine Kiste auf einer Rampe]
Eine Kiste mit der Gewichtskraft $\vec G = \begin{pmatrix} 0 \\ -200 \end{pmatrix}$ N steht auf einer Rampe. Die Rampe fällt in Richtung
$\vec d = \begin{pmatrix} 12 \\ -5 \end{pmatrix}$ ab, sie geht also $12$ m nach rechts und dabei $5$ m hinunter.

**Schritt 1, Einheitsvektor:** $|\vec d| = \sqrt{144 + 25} = 13$, also $\vec d_0 = \tfrac{1}{13}\begin{pmatrix} 12 \\ -5 \end{pmatrix}$.

**Schritt 2, Anteil längs der Rampe:** $\vec G\cdot\vec d_0 = \tfrac{1}{13}\big(0\cdot 12 + (-200)\cdot(-5)\big) = \tfrac{1000}{13} \approx 76{,}92$ N.

**Schritt 3, Kontrolle mit Trigonometrie:** Der Neigungswinkel ist $\alpha = \arctan\tfrac{5}{12} \approx 22{,}62°$. Die
Hangabtriebskraft ist $G\sin\alpha = 200\cdot\tfrac{5}{13} \approx 76{,}92$ N. Beide Wege liefern dasselbe.
:::

### Arbeit als Skalarprodukt

Wird ein Körper um den Weg $\vec s$ verschoben, während die konstante Kraft $\vec F$ wirkt, dann verrichtet die Kraft
die **Arbeit**
$$W = \vec F\cdot\vec s = |\vec F|\,|\vec s|\cos\varphi.$$
Dabei ist $\varphi$ der Winkel zwischen Kraft und Weg. Die Einheit ist Newton mal Meter, also Joule:
$1\ \text{N}\cdot\text{m} = 1\ \text{J}$. Nur der Anteil der Kraft in Wegrichtung zählt. Eine Kraft quer zum Weg verrichtet
keine Arbeit. Die Arbeit ist ein Skalarprodukt und damit eine **skalare Größe**, obwohl Kraft und Weg Vektoren sind.

:::beispiel[Einen Schlitten ziehen]
Ein Schlitten wird $5$ m weit geradeaus gezogen, $\vec s = \begin{pmatrix} 5 \\ 0 \end{pmatrix}$ m. Das Seil zieht mit
$\vec F = \begin{pmatrix} 60 \\ 20 \end{pmatrix}$ N schräg nach oben.

**Schritt 1, Arbeit:** $W = \vec F\cdot\vec s = 60\cdot 5 + 20\cdot 0 = 300$ J.

**Schritt 2, Winkel:** $|\vec F| = \sqrt{3600 + 400} = \sqrt{4000} \approx 63{,}25$ N. $\cos\varphi = \frac{300}{63{,}25\cdot 5} \approx 0{,}9487$,
also $\varphi \approx 18{,}43°$.

**Schritt 3, Deutung:** Der senkrechte Anteil von $20$ N hebt den Schlitten etwas an, verrichtet aber keine Arbeit längs
des Weges. Nur die $60$ N in Wegrichtung zählen.
:::

:::achtung[Arbeit ohne Winkel]
Im Schlitten-Beispiel rechnet jemand $W = |\vec F|\cdot|\vec s| = 63{,}25\cdot 5 \approx 316{,}23$ J. Das ist zu viel. Diese Formel gilt nur,
wenn Kraft und Weg in dieselbe Richtung zeigen. Hier zieht das Seil schräg, deshalb fehlt der Faktor
$\cos\varphi \approx 0{,}9487$. Richtig ist $W = \vec F\cdot\vec s = 300$ J.
:::

### Geschwindigkeiten addieren

Auch Geschwindigkeiten addieren sich als Vektoren. Ein Boot, das relativ zum Wasser fährt, wird zusätzlich von der
Strömung mitgenommen. Seine Geschwindigkeit **über Grund** ist die Summe beider Vektoren.

:::beispiel[Eine Fähre im Fluss]
Eine Fähre fährt mit $4$ m/s relativ zum Wasser quer über einen $120$ m breiten Fluss, $\vec v_B = \begin{pmatrix} 0 \\ 4 \end{pmatrix}$ m/s.
Die Strömung hat $\vec w = \begin{pmatrix} 1{,}5 \\ 0 \end{pmatrix}$ m/s.

**Schritt 1, über Grund:** $\vec v = \vec v_B + \vec w = \begin{pmatrix} 1{,}5 \\ 4 \end{pmatrix}$ m/s, also $|\vec v| = \sqrt{2{,}25 + 16} \approx 4{,}27$ m/s.

**Schritt 2, Fahrzeit:** Quer zum Fluss kommt nur die Komponente $4$ m/s voran. Die Fahrt dauert $\frac{120}{4} = 30$ s.

**Schritt 3, Abdrift:** In diesen $30$ s treibt die Fähre $1{,}5\cdot 30 = 45$ m flussabwärts. Der Abdriftwinkel gegen die
Querrichtung ist $\arctan\frac{1{,}5}{4} \approx 20{,}56°$.
:::

```reflexion
frage: Warum ist die Arbeit eine skalare Größe, obwohl Kraft und Weg Vektoren sind? Und warum verrichtet die Gewichtskraft bei einer waagrechten Bewegung keine Arbeit?
antwort: |
  Die Arbeit ist das Skalarprodukt $\vec F\cdot\vec s$. Ein Skalarprodukt zweier Vektoren ist eine Zahl. Physikalisch
  misst die Arbeit, wie viel Energie übertragen wird, und Energie hat keine Richtung.

  Bei einer waagrechten Bewegung steht der Weg normal auf der senkrechten Gewichtskraft. Dann ist $\cos 90° = 0$,
  also $\vec G\cdot\vec s = 0$. Die Gewichtskraft hilft und bremst nicht, sie verrichtet keine Arbeit.
```

:::merke[Rezept: Vektoren in der Physik]
1. Mehrere Kräfte: Resultierende als Vektorsumme. Die Stärke ist der Betrag der Summe, nicht die Summe der Beträge.
2. Gleichgewicht: Summe aller Kräfte gleich Nullvektor, komponentenweise lösen.
3. Anteil einer Kraft in eine Richtung: Projektion $\vec F\cdot\vec d_0$.
4. Arbeit: $W = \vec F\cdot\vec s$ in Joule.
5. Geschwindigkeiten: über Grund gleich Eigengeschwindigkeit plus Strömung oder Wind.
:::

```aufgabe
id: ve-resultierende
titel: Die Resultierende zweier Kräfte
niveau: 1
lernziel: 9
kompetenz: anwenden
angabe: |
  Auf einen Körper wirken $\vec F_1 = \begin{pmatrix} 120 \\ 50 \end{pmatrix}$ N und $\vec F_2 = \begin{pmatrix} -40 \\ 100 \end{pmatrix}$ N. Berechne die Resultierende
  und ihren Betrag.
teile:
  - typ: vektor
    label: '$\vec R$ in N'
    loesung: ["120-40", "50+100"]
    fehler:
      - wert: ["160", "150"]
        meldung: 'In der ersten Komponente: $120 + (-40) = 80$. Das Minus gehört zur Kraft.'
  - typ: zahl
    label: '$|\vec R|$'
    einheit: N
    loesung: "sqrt(80^2 + 150^2)"
    fehler:
      - wert: "sqrt(120^2+50^2) + sqrt(40^2+100^2)"
        meldung: 'Du hast die Beträge der beiden Kräfte addiert. Die Kräfte zeigen in verschiedene Richtungen. Berechne den Betrag der Vektorsumme.'
hinweise:
  - 'Die Resultierende ist die Vektorsumme. Ihr Betrag ist $\sqrt{R_x^2 + R_y^2}$.'
loesung: |
  **Ansatz:** Die Resultierende ist die Summe der Kraftvektoren.
  ---
  $\vec R = \begin{pmatrix} 120 - 40 \\ 50 + 100 \end{pmatrix} = \begin{pmatrix} 80 \\ 150 \end{pmatrix}$ N.
  ---
  $|\vec R| = \sqrt{6400 + 22\,500} = \sqrt{28\,900} = 170$ N. **Plausibel:** Die Summe der Beträge wäre etwa $237{,}7$ N. Die Resultierende ist kleiner, weil sich die $x$-Anteile teilweise aufheben.
```

```aufgabe
id: ve-gleichgewicht-raum
titel: Gleichgewicht im Raum
niveau: 1
lernziel: 9
kompetenz: anwenden
angabe: |
  An einem Knoten ziehen $\vec F_1 = \begin{pmatrix} 30 \\ -20 \\ 10 \end{pmatrix}$ N und $\vec F_2 = \begin{pmatrix} -10 \\ 45 \\ 5 \end{pmatrix}$ N. Welche dritte Kraft hält ihn im Gleichgewicht?
teile:
  - typ: vektor
    label: '$\vec F_3$ in N'
    loesung: ["-(30-10)", "-(-20+45)", "-(10+5)"]
    fehler:
      - wert: ["20", "25", "15"]
        meldung: 'Das ist $\vec F_1 + \vec F_2$. Die dritte Kraft muss diese Summe aufheben, also das Vorzeichen jeder Komponente umdrehen.'
hinweise:
  - 'Gleichgewicht heißt $\vec F_1 + \vec F_2 + \vec F_3 = \vec 0$.'
loesung: |
  **Ansatz:** Im Gleichgewicht ist die Summe aller Kräfte der Nullvektor. Also $\vec F_3 = -(\vec F_1 + \vec F_2)$.
  ---
  $\vec F_1 + \vec F_2 = \begin{pmatrix} 20 \\ 25 \\ 15 \end{pmatrix}$ N, also $\vec F_3 = \begin{pmatrix} -20 \\ -25 \\ -15 \end{pmatrix}$ N.
  ---
  **Probe:** $\vec F_1 + \vec F_2 + \vec F_3 = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$. Es stimmt.
```

```aufgabe
id: ve-arbeit
titel: Arbeit einer Kraft
niveau: 2
lernziel: 9
kompetenz: anwenden
angabe: |
  Ein Wagen wird geradlinig um $\vec s = \begin{pmatrix} 3 \\ 4 \\ 0 \end{pmatrix}$ m verschoben. Dabei wirkt die konstante Kraft
  $\vec F = \begin{pmatrix} 20 \\ 10 \\ -5 \end{pmatrix}$ N. Berechne die verrichtete Arbeit und den Winkel zwischen Kraft und Weg in Grad auf zwei Dezimalstellen.
teile:
  - typ: zahl
    label: '$W$'
    einheit: "J"
    loesung: "20*3 + 10*4 + (-5)*0"
    fehler:
      - wert: "sqrt(525)*5"
        meldung: 'Du hast die Beträge multipliziert. Das gilt nur, wenn Kraft und Weg in dieselbe Richtung zeigen. Berechne das Skalarprodukt.'
  - typ: zahl
    label: '$\varphi$'
    einheit: "°"
    loesung: "inGrad(acos(100/(5*sqrt(525))))"
hinweise:
  - 'Arbeit ist das Skalarprodukt $W = \vec F\cdot\vec s$. Newtonmeter sind Joule.'
  - 'Für den Winkel: $\cos\varphi = \frac{W}{|\vec F|\,|\vec s|}$ mit $|\vec s| = 5$ m.'
loesung: |
  **Ansatz:** Arbeit als Skalarprodukt, Winkel aus der Winkelformel.
  ---
  $W = 20\cdot 3 + 10\cdot 4 + (-5)\cdot 0 = 100$ J.
  ---
  $|\vec F| = \sqrt{400 + 100 + 25} = \sqrt{525} \approx 22{,}91$ N und $|\vec s| = 5$ m.
  ---
  $\cos\varphi = \dfrac{100}{5\sqrt{525}} \approx 0{,}8729$, also $\varphi \approx 29{,}21°$. **Deutung:** Nur der Anteil $|\vec F|\cos\varphi = 20$ N in Wegrichtung verrichtet Arbeit, und $20\cdot 5 = 100$ J.
```

```aufgabe
id: ve-hangabtrieb
titel: Hangabtriebskraft mit der Projektion
niveau: 2
lernziel: 9
kompetenz: modellieren
angabe: |
  Eine Kiste mit der Gewichtskraft $\vec G = \begin{pmatrix} 0 \\ -500 \end{pmatrix}$ N steht auf einer Rampe, die in Richtung $\vec d = \begin{pmatrix} 15 \\ -8 \end{pmatrix}$ abfällt.

  a) Berechne die Hangabtriebskraft, also den Anteil von $\vec G$ in Richtung $\vec d$. Runde auf zwei Dezimalstellen.

  b) Berechne den Anteil von $\vec G$ normal zur Rampe, also die Kraft, mit der die Kiste auf die Rampe drückt.
teile:
  - typ: zahl
    label: 'a) Hangabtriebskraft'
    einheit: N
    loesung: "4000/17"
    fehler:
      - wert: "4000"
        meldung: 'Das ist $\vec G\cdot\vec d$. Der Vektor $\vec d$ hat aber die Länge $17$, nicht $1$. Teile durch $|\vec d|$.'
      - wert: "4000/289"
        meldung: 'Du hast durch $|\vec d|^2$ geteilt. Für die **Länge** des Anteils teilst du durch $|\vec d|$.'
  - typ: zahl
    label: 'b) Normalanteil'
    einheit: N
    loesung: "500*15/17"
    fehler:
      - wert: "500 - 4000/17"
        meldung: 'Kraftanteile in zwei normal aufeinander stehenden Richtungen addieren sich nicht einfach. Es gilt Pythagoras: $G^2 = F_H^2 + F_N^2$.'
hinweise:
  - 'Berechne $|\vec d|$ und den Einheitsvektor $\vec d_0$. Der Anteil ist $\vec G\cdot\vec d_0$.'
  - 'Für b): Ein Normalvektor zur Rampe ist $\begin{pmatrix} 8 \\ 15 \end{pmatrix}$. Oder du nutzt $G^2 = F_H^2 + F_N^2$.'
loesung: |
  **Ansatz:** Der Anteil einer Kraft in eine Richtung ist das Skalarprodukt mit dem Einheitsvektor dieser Richtung.
  ---
  $|\vec d| = \sqrt{225 + 64} = 17$, also $\vec d_0 = \tfrac{1}{17}\begin{pmatrix} 15 \\ -8 \end{pmatrix}$.
  ---
  a) $F_H = \vec G\cdot\vec d_0 = \tfrac{1}{17}\big(0 + (-500)(-8)\big) = \tfrac{4000}{17} \approx 235{,}29$ N.
  ---
  b) Normalrichtung $\vec n_0 = \tfrac{1}{17}\begin{pmatrix} 8 \\ 15 \end{pmatrix}$, Betrag des Anteils $\big|\vec G\cdot\vec n_0\big| = \tfrac{7500}{17} \approx 441{,}18$ N.
  ---
  **Probe mit Pythagoras:** $235{,}29^2 + 441{,}18^2 \approx 55\,361 + 194\,640 = 250\,001 \approx 500^2$. Es passt.
```

```aufgabe
id: ve-faehre
titel: Über den Fluss
niveau: 2
lernziel: 9
kompetenz: modellieren
angabe: |
  Ein Boot fährt mit $3$ m/s relativ zum Wasser genau quer über einen $90$ m breiten Fluss. Die Strömung fließt mit $2$ m/s.

  a) Wie schnell ist das Boot über Grund? Runde auf zwei Dezimalstellen.

  b) Wie lange dauert die Überfahrt?

  c) Wie weit wird das Boot dabei flussabwärts versetzt?
teile:
  - typ: zahl
    label: 'a) Geschwindigkeit über Grund'
    einheit: m/s
    loesung: "sqrt(3^2 + 2^2)"
    fehler:
      - wert: "5"
        meldung: 'Die Geschwindigkeiten stehen normal aufeinander. Ihre Beträge addieren sich nicht, es gilt Pythagoras.'
  - typ: zahl
    label: 'b) Fahrzeit'
    einheit: s
    loesung: "90/3"
    fehler:
      - wert: "90/sqrt(13)"
        meldung: 'Quer über den Fluss kommt nur die Komponente $3$ m/s voran. Der schräge Weg ist länger als $90$ m.'
  - typ: zahl
    label: 'c) Versatz'
    einheit: m
    loesung: "2*90/3"
hinweise:
  - 'Lege die $x$-Achse flussabwärts und die $y$-Achse quer zum Fluss. Dann ist $\vec v = \begin{pmatrix} 2 \\ 3 \end{pmatrix}$ m/s.'
  - 'Die Fahrzeit hängt nur von der Querkomponente ab. In dieser Zeit treibt das Boot mit der Strömungsgeschwindigkeit ab.'
loesung: |
  **Ansatz:** Geschwindigkeit über Grund ist die Vektorsumme aus Eigengeschwindigkeit und Strömung: $\vec v = \begin{pmatrix} 2 \\ 3 \end{pmatrix}$ m/s.
  ---
  a) $|\vec v| = \sqrt{4 + 9} = \sqrt{13} \approx 3{,}61$ m/s.
  ---
  b) Quer kommt das Boot mit $3$ m/s voran: $t = \frac{90}{3} = 30$ s.
  ---
  c) In $30$ s treibt es $2\cdot 30 = 60$ m flussabwärts. **Kontrolle:** Der schräge Weg ist $\sqrt{90^2 + 60^2} \approx 108{,}2$ m lang, und $3{,}61\cdot 30 \approx 108{,}2$ m.
```

```aufgabe
id: ve-arbeit-gewicht
titel: Wann verrichtet eine Kraft keine Arbeit?
niveau: 2
lernziel: 9
kompetenz: begruenden
angabe: |
  Eine Person trägt eine Kiste mit der Gewichtskraft $\vec G = \begin{pmatrix} 0 \\ 0 \\ -20 \end{pmatrix}$ N waagrecht um $\vec s = \begin{pmatrix} 4 \\ 3 \\ 0 \end{pmatrix}$ m.

  a) Welche Arbeit verrichtet die Gewichtskraft?

  b) Warum ist das so?
teile:
  - typ: zahl
    label: 'a) $W$'
    einheit: J
    loesung: "0"
    fehler:
      - wert: "100"
        meldung: 'Du hast die Beträge $20$ N und $5$ m multipliziert. Kraft und Weg stehen aber normal aufeinander.'
  - typ: auswahl
    label: 'b)'
    optionen:
      - 'Weg und Gewichtskraft stehen normal aufeinander, ihr Skalarprodukt ist null.'
      - 'Die Kiste ist zu leicht.'
      - 'Die Gewichtskraft ist negativ.'
    richtig: [0]
    fehler:
      - wert: 2
        meldung: 'Das Minus zeigt nur die Richtung nach unten an. Entscheidend ist der Winkel zwischen Kraft und Weg.'
hinweise:
  - 'Berechne das Skalarprodukt $\vec G\cdot\vec s$.'
  - 'Welchen Winkel schließen eine senkrechte Kraft und ein waagrechter Weg ein?'
loesung: |
  **Ansatz:** Arbeit ist das Skalarprodukt von Kraft und Weg.
  ---
  a) $W = 0\cdot 4 + 0\cdot 3 + (-20)\cdot 0 = 0$ J.
  ---
  b) Die Gewichtskraft zeigt senkrecht nach unten, der Weg ist waagrecht. Sie stehen normal aufeinander, $\cos 90° = 0$. Die Kraft hat keinen Anteil in Wegrichtung und verrichtet keine Arbeit. Die Person ermüdet trotzdem, aber das liegt an ihren Muskeln, nicht an der Arbeit im physikalischen Sinn.
```

```aufgabe
id: ve-seil-gleichgewicht
titel: Eine Lampe an zwei ungleichen Seilen
niveau: 3
lernziel: 9
kompetenz: modellieren
angabe: |
  Eine Lampe mit der Gewichtskraft $\vec G = \begin{pmatrix} 0 \\ -80 \end{pmatrix}$ N hängt an zwei Seilen. Das linke Seil zieht in Richtung
  $\begin{pmatrix} -1 \\ 2 \end{pmatrix}$, das rechte in Richtung $\begin{pmatrix} 3 \\ 2 \end{pmatrix}$. Berechne die Beträge beider Seilkräfte auf zwei Dezimalstellen.
teile:
  - typ: zahl
    label: '$|\vec F_1|$ (linkes Seil)'
    einheit: N
    loesung: "30*sqrt(5)"
    fehler:
      - wert: "40"
        meldung: 'Die Last verteilt sich nicht gleichmäßig. Das steilere linke Seil trägt mehr. Stelle die Gleichgewichtsbedingung für jede Komponente auf.'
  - typ: zahl
    label: '$|\vec F_2|$ (rechtes Seil)'
    einheit: N
    loesung: "10*sqrt(13)"
hinweise:
  - 'Ansatz $\vec F_1 = \lambda\begin{pmatrix} -1 \\ 2 \end{pmatrix}$ und $\vec F_2 = \mu\begin{pmatrix} 3 \\ 2 \end{pmatrix}$. Im Gleichgewicht ist $\vec F_1 + \vec F_2 + \vec G = \vec 0$.'
  - 'Die $x$-Gleichung liefert $\lambda = 3\mu$. Setze das in die $y$-Gleichung ein. Siehe [Kapitel 3, Systeme mit zwei Unbekannten](/lernen/mathe3/lgs-matrizen/systeme-mit-zwei-unbekannten).'
loesung: |
  **Ansatz:** Die Seilkräfte sind Vielfache ihrer Richtungen. Im Gleichgewicht ist die Summe aller drei Kräfte der Nullvektor.
  ---
  $x$-Richtung: $-\lambda + 3\mu = 0$, also $\lambda = 3\mu$. $y$-Richtung: $2\lambda + 2\mu - 80 = 0$.
  ---
  Eingesetzt: $6\mu + 2\mu = 80$, also $\mu = 10$ und $\lambda = 30$.
  ---
  $\vec F_1 = \begin{pmatrix} -30 \\ 60 \end{pmatrix}$ N, $|\vec F_1| = 30\sqrt5 \approx 67{,}08$ N. $\vec F_2 = \begin{pmatrix} 30 \\ 20 \end{pmatrix}$ N, $|\vec F_2| = 10\sqrt{13} \approx 36{,}06$ N.
  ---
  **Probe:** $\vec F_1 + \vec F_2 = \begin{pmatrix} 0 \\ 80 \end{pmatrix}$ N hebt $\vec G$ genau auf. **Plausibel:** Das steilere Seil trägt den größeren Teil der Last.
gefuehrt:
  - text: 'Stelle die Gleichung für die $x$-Komponenten auf. Was folgt für $\lambda$?'
    teil:
      typ: auswahl
      optionen: ['$\lambda = 3\mu$', '$\lambda = -3\mu$', '$\lambda = \tfrac13\mu$']
      richtig: [0]
      fehler:
        - wert: 2
          meldung: 'Aus $-\lambda + 3\mu = 0$ folgt $\lambda = 3\mu$, nicht umgekehrt.'
    erklaerung: '$-\lambda + 3\mu + 0 = 0$, also $\lambda = 3\mu$.'
  - text: 'Setze in die $y$-Gleichung $2\lambda + 2\mu - 80 = 0$ ein. Wie groß ist $\mu$?'
    teil: { typ: zahl, loesung: "10" }
    erklaerung: '$6\mu + 2\mu = 8\mu = 80$, also $\mu = 10$.'
  - text: 'Wie groß ist $\lambda$?'
    teil: { typ: zahl, loesung: "30" }
    erklaerung: '$\lambda = 3\cdot 10 = 30$.'
  - text: 'Berechne $|\vec F_1|$.'
    teil: { typ: zahl, einheit: N, loesung: "30*sqrt(5)" }
    erklaerung: '$\vec F_1 = 30\begin{pmatrix} -1 \\ 2 \end{pmatrix}$, also $|\vec F_1| = 30\sqrt{5} \approx 67{,}08$ N.'
```

```aufgabe
id: ve-pruefung-flugzeug
titel: Flugzeug im Seitenwind
niveau: 3
lernziel: 9
kompetenz: modellieren
angabe: |
  Ein Flugzeug fliegt mit $200$ km/h relativ zur Luft. Es weht Wind aus Norden mit $30$ km/h, der Windvektor ist also
  $\vec w = \begin{pmatrix} 0 \\ -30 \end{pmatrix}$ km/h. Die $x$-Achse zeigt nach Osten, die $y$-Achse nach Norden. Runde auf zwei Dezimalstellen.

  a) Der Pilot steuert genau nach Osten, $\vec v_L = \begin{pmatrix} 200 \\ 0 \end{pmatrix}$. Berechne die Geschwindigkeit über Grund und den
  Abdriftwinkel gegenüber der Ostrichtung.

  b) In welche Richtung muss der Pilot steuern, damit das Flugzeug genau nach Osten fliegt? Gib den Vorhaltewinkel nach
  Norden und die Geschwindigkeit über Grund an.

  c) Wie lange dauert dann ein Flug über $500$ km nach Osten?
teile:
  - typ: zahl
    label: 'a) Geschwindigkeit über Grund'
    einheit: "km/h"
    loesung: "sqrt(200^2 + 30^2)"
    fehler:
      - wert: "230"
        meldung: 'Wind und Flugrichtung stehen normal aufeinander. Die Beträge addieren sich nicht, es gilt Pythagoras.'
  - typ: zahl
    label: 'a) Abdriftwinkel'
    einheit: "°"
    loesung: "inGrad(atan(30/200))"
  - typ: zahl
    label: 'b) Vorhaltewinkel'
    einheit: "°"
    loesung: "inGrad(asin(30/200))"
    fehler:
      - wert: "inGrad(atan(30/200))"
        meldung: 'In b) sind $200$ km/h die **Hypotenuse**: Das Flugzeug fliegt mit $200$ km/h schräg gegen den Wind. Also gehört der Sinus dazu.'
  - typ: zahl
    label: 'b) Geschwindigkeit über Grund'
    einheit: "km/h"
    loesung: "sqrt(200^2 - 30^2)"
  - typ: zahl
    label: 'c) Flugdauer'
    einheit: "h"
    loesung: "500/sqrt(200^2 - 30^2)"
hinweise:
  - 'Die Geschwindigkeit über Grund ist die Vektorsumme $\vec v_L + \vec w$.'
  - 'b) Ansatz $\vec v_L = \begin{pmatrix} x \\ 30 \end{pmatrix}$ mit $|\vec v_L| = 200$. Dann ist $\vec v_L + \vec w = \begin{pmatrix} x \\ 0 \end{pmatrix}$.'
loesung: |
  **Ansatz:** Über Grund gilt $\vec v_G = \vec v_L + \vec w$. In a) ist $\vec v_L$ gegeben, in b) ist $\vec v_G$ in der Richtung vorgegeben.
  ---
  **a)** $\vec v_G = \begin{pmatrix} 200 \\ -30 \end{pmatrix}$, $|\vec v_G| = \sqrt{40\,000 + 900} \approx 202{,}24$ km/h. Abdrift: $\tan\delta = \tfrac{30}{200}$, also $\delta \approx 8{,}53°$ nach Süden.
  ---
  **b)** Der Wind muss ausgeglichen werden: $\vec v_L = \begin{pmatrix} x \\ 30 \end{pmatrix}$ mit $x^2 + 900 = 40\,000$, also $x = \sqrt{39\,100} \approx 197{,}74$.
  Vorhaltewinkel: $\sin\varepsilon = \tfrac{30}{200}$, also $\varepsilon \approx 8{,}63°$ nach Norden. Über Grund: $197{,}74$ km/h.
  ---
  **c)** $t = \dfrac{500}{197{,}74} \approx 2{,}53$ h, also etwa $2$ h $32$ min.
  ---
  **Beachte den Unterschied:** In a) ist $\vec v_L$ eine Kathete und $\vec v_G$ die Hypotenuse, daher der Tangens. In b) ist $\vec v_L$ die Hypotenuse, daher der Sinus.
```

## Gemischte Wiederholung

In der Prüfung steht nicht dabei, aus welchem Kapitel eine Aufgabe stammt. Du musst selbst erkennen, welches
Werkzeug passt. Deshalb mischt diese Lektion Aufgaben aus diesem Kapitel mit Aufgaben aus früheren Kapiteln. Dieses
gemischte Üben fühlt sich schwerer an als Üben in Blöcken. Es verankert den Stoff aber nachweislich besser. Löse jede
Aufgabe zuerst ohne Hinweise.

```aufgabe
id: ve-wh-kosinussatz
titel: "Wiederholung Kapitel 5: Kosinussatz und Vektoren"
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  In einem Dreieck sind zwei Seiten $7$ cm und $4$ cm lang und schließen einen Winkel von $60°$ ein. Berechne die dritte Seite
  auf zwei Dezimalstellen. Zum Nachlesen: [Kapitel 5, Allgemeine Dreiecke: Sinussatz, Kosinussatz, Fläche](/lernen/mathe3/trigonometrie/allgemeine-dreiecke-sinussatz-kosinussatz-flaeche).
teile:
  - typ: zahl
    einheit: cm
    loesung: "sqrt(49 + 16 - 2*7*4*cos(inRad(60)))"
    fehler:
      - wert: "sqrt(65)"
        meldung: 'Das wäre Pythagoras. Der Winkel ist aber $60°$, nicht $90°$. Es fehlt der Term $-2ab\cos\gamma$.'
      - wert: "sqrt(49 + 16 + 2*7*4*cos(inRad(60)))"
        meldung: 'Im Kosinussatz steht **minus** $2ab\cos\gamma$. Mit plus erhältst du die Diagonale des Parallelogramms statt der Dreiecksseite.'
hinweise:
  - 'Kosinussatz: $c^2 = a^2 + b^2 - 2ab\cos\gamma$.'
  - 'Mit Vektoren ist das $|\vec a - \vec b|^2 = |\vec a|^2 + |\vec b|^2 - 2\,\vec a\cdot\vec b$, siehe [6.6](/lernen/mathe3/vektoren/das-skalarprodukt-und-der-winkel-zwischen-vektoren).'
loesung: |
  **Ansatz:** Zwei Seiten und der eingeschlossene Winkel sind bekannt. Dafür passt der Kosinussatz.
  ---
  $c^2 = 49 + 16 - 2\cdot 7\cdot 4\cdot 0{,}5 = 65 - 28 = 37$.
  ---
  $c = \sqrt{37} \approx 6{,}08$ cm. **Kontrolle mit Vektoren:** Mit $\vec a = \begin{pmatrix} 7 \\ 0 \end{pmatrix}$ und $\vec b = \begin{pmatrix} 2 \\ 2\sqrt3 \end{pmatrix}$ ist $|\vec a - \vec b| = \sqrt{25 + 12} = \sqrt{37}$.
```

```aufgabe
id: ve-wh-lgs
titel: "Wiederholung Kapitel 3: Ein Gleichungssystem mit drei Unbekannten"
niveau: 1
lernziel: 8
kompetenz: rechnen
angabe: |
  Gesucht sind $r$, $s$ und $t$ mit $r\begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} + s\begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix} + t\begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix} = \begin{pmatrix} 4 \\ 3 \\ 5 \end{pmatrix}$.
  Zum Nachlesen: [Kapitel 3, Das Gauß-Verfahren](/lernen/mathe3/lgs-matrizen/das-gauss-verfahren).
teile:
  - typ: zahl
    label: '$r$'
    loesung: "1"
  - typ: zahl
    label: '$s$'
    loesung: "2"
    fehler:
      - wert: "3"
        meldung: 'Probe in der zweiten Gleichung $r + s = 3$: Mit $r = 1$ muss $s = 2$ sein.'
  - typ: zahl
    label: '$t$'
    loesung: "3"
hinweise:
  - 'Komponentenweise: $r + t = 4$, $r + s = 3$ und $s + t = 5$.'
loesung: |
  **Ansatz:** Komponentenweise vergleichen ergibt ein lineares Gleichungssystem.
  ---
  $r + t = 4$, $r + s = 3$, $s + t = 5$. Alle drei addieren: $2(r + s + t) = 12$, also $r + s + t = 6$.
  ---
  Davon jeweils eine Gleichung abziehen: $s = 6 - 4 = 2$, $t = 6 - 3 = 3$ und $r = 6 - 5 = 1$. **Probe:** $1 + 3 = 4$, $1 + 2 = 3$, $2 + 3 = 5$.
```

```aufgabe
id: ve-wh-quadratisch
titel: "Wiederholung Kapitel 2: Eine Länge führt auf eine quadratische Gleichung"
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Für welche Zahlen $t$ hat der Vektor $\begin{pmatrix} t \\ t + 1 \end{pmatrix}$ die Länge $5$? Gib alle Werte getrennt durch einen Strichpunkt an.
  Zum Nachlesen: [Kapitel 2, Quadratische Gleichungen](/lernen/mathe3/gleichungen/quadratische-gleichungen).
teile:
  - typ: menge
    label: '$t$'
    loesung: ["3", "-4"]
    fehler:
      - wert: ["3"]
        meldung: 'Die quadratische Gleichung $t^2 + t - 12 = 0$ hat zwei Lösungen. Prüfe auch die negative.'
      - wert: ["-3", "4"]
        meldung: 'Die Vorzeichen sind vertauscht. Probe mit $t = 4$: $16 + 25 = 41 \neq 25$.'
hinweise:
  - 'Setze $t^2 + (t + 1)^2 = 25$ an und multipliziere mit der binomischen Formel aus.'
  - 'Es entsteht $2t^2 + 2t - 24 = 0$. Teile durch $2$ und verwende die Lösungsformel.'
loesung: |
  **Ansatz:** Länge $5$ heißt $\sqrt{t^2 + (t + 1)^2} = 5$. Quadrieren beseitigt die Wurzel.
  ---
  $t^2 + t^2 + 2t + 1 = 25$, also $2t^2 + 2t - 24 = 0$ und $t^2 + t - 12 = 0$.
  ---
  $(t - 3)(t + 4) = 0$, also $t = 3$ oder $t = -4$. **Probe:** $\begin{pmatrix} 3 \\ 4 \end{pmatrix}$ und $\begin{pmatrix} -4 \\ -3 \end{pmatrix}$ haben beide die Länge $5$.
```

```aufgabe
id: ve-wh-komplex
titel: "Wiederholung Kapitel 15: Komplexe Zahlen als Vektoren"
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Komplexe Zahlen lassen sich als Pfeile in der Zahlenebene deuten. Berechne $z = (3 + 2i) + (1 - 4i)$ und seinen Betrag $|z|$
  auf zwei Dezimalstellen. Zum Nachlesen: [Kapitel 15, Gaußsche Zahlenebene](/lernen/mathe3/komplexe-zahlen/algebraische-form-und-gausssche-zahlenebene).
teile:
  - typ: komplex
    label: '$z$'
    loesung: "(3+2i) + (1-4i)"
    fehler:
      - wert: "4+6i"
        meldung: 'Beim Imaginärteil: $2 + (-4) = -2$. Das Minus gehört zur zweiten Zahl.'
  - typ: zahl
    label: '$|z|$'
    loesung: "sqrt(4^2 + 2^2)"
    fehler:
      - wert: "6"
        meldung: 'Der Betrag ist die Länge des Pfeils, also $\sqrt{4^2 + (-2)^2}$, nicht $4 + 2$.'
hinweise:
  - 'Komplexe Zahlen addiert man wie Vektoren: Realteile addieren, Imaginärteile addieren.'
  - 'Der Betrag ist die Länge des Pfeils $\begin{pmatrix} 4 \\ -2 \end{pmatrix}$.'
loesung: |
  **Ansatz:** $a + bi$ entspricht dem Vektor $\begin{pmatrix} a \\ b \end{pmatrix}$. Addition und Betrag funktionieren wie bei Vektoren.
  ---
  $z = (3 + 1) + (2 - 4)i = 4 - 2i$, also der Vektor $\begin{pmatrix} 4 \\ -2 \end{pmatrix}$.
  ---
  $|z| = \sqrt{16 + 4} = \sqrt{20} \approx 4{,}47$.
```

```aufgabe
id: ve-wh-wurzel
titel: "Wiederholung Kapitel 1: Eine Länge exakt angeben"
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Der Vektor $\begin{pmatrix} 6 \\ 6 \end{pmatrix}$ hat die Länge $\sqrt{72}$. Schreibe diese Länge in der Form $k\sqrt 2$. Welche Zahl ist $k$?
  Zum Nachlesen: [Kapitel 1, Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln).
teile:
  - typ: zahl
    label: '$k$'
    loesung: "6"
    fehler:
      - wert: "36"
        meldung: 'Aus $72 = 36\cdot 2$ folgt $\sqrt{72} = \sqrt{36}\cdot\sqrt 2$. Die $36$ steht noch unter einer Wurzel.'
hinweise:
  - 'Zerlege $72$ in eine Quadratzahl mal $2$.'
loesung: |
  **Ansatz:** Teilweise Wurzel ziehen: Man sucht den größten Quadratfaktor unter der Wurzel.
  ---
  $72 = 36\cdot 2$, also $\sqrt{72} = \sqrt{36}\cdot\sqrt 2 = 6\sqrt 2$. Damit ist $k = 6$. Allgemein hat $\begin{pmatrix} a \\ a \end{pmatrix}$ die Länge $|a|\sqrt 2$.
```

```aufgabe
id: ve-wh-steigung
titel: "Wiederholung Kapitel 4: Steigung und Richtungsvektor"
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Eine Gerade geht durch $P(1 \mid 2)$ und $Q(5 \mid 4)$. Zum Nachlesen: [Kapitel 4, Lineare Funktionen](/lernen/mathe3/funktionen/lineare-funktionen).

  a) Wie groß ist ihre Steigung $k$?

  b) Welcher Vektor ist ein Richtungsvektor dieser Geraden?
teile:
  - typ: zahl
    label: 'a) $k$'
    loesung: "(4-2)/(5-1)"
    fehler:
      - wert: "2"
        meldung: 'Die Steigung ist Höhenänderung durch Breitenänderung: $\frac{4 - 2}{5 - 1}$. Du hast den Kehrwert genommen.'
  - typ: auswahl
    label: 'b)'
    optionen: ['$\begin{pmatrix} 2 \\ 1 \end{pmatrix}$', '$\begin{pmatrix} 1 \\ 2 \end{pmatrix}$', '$\begin{pmatrix} 5 \\ 4 \end{pmatrix}$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Dieser Vektor geht $1$ nach rechts und $2$ hinauf. Er hätte die Steigung $2$.'
      - wert: 2
        meldung: 'Das ist der Ortsvektor von $Q$, nicht die Richtung von $P$ nach $Q$.'
hinweise:
  - 'Der Verbindungsvektor $\overrightarrow{PQ}$ ist ein Richtungsvektor. Die Steigung ist seine $y$-Komponente durch seine $x$-Komponente.'
loesung: |
  **Ansatz:** Der Verbindungsvektor zeigt in Richtung der Geraden. Aus ihm liest man die Steigung ab.
  ---
  $\overrightarrow{PQ} = \begin{pmatrix} 4 \\ 2 \end{pmatrix}$, also $k = \frac{2}{4} = 0{,}5$.
  ---
  Gekürzt ist $\begin{pmatrix} 2 \\ 1 \end{pmatrix}$ ebenfalls ein Richtungsvektor. Ein Richtungsvektor $\begin{pmatrix} 1 \\ k \end{pmatrix}$ enthält die Steigung direkt. Mehr dazu in [Kapitel 7, Normalvektorform, allgemeine Form und Steigung](/lernen/mathe3/analytische-geometrie/normalvektorform-allgemeine-form-und-steigung).
```

```aufgabe
id: ve-wh-welches-werkzeug
titel: "Welches Verfahren passt? Werkzeuge der Vektorrechnung"
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  Entscheide für jede Frage, mit welchem Werkzeug du sie am schnellsten beantwortest. Rechne nichts aus.
teile:
  - typ: auswahl
    label: 'Stehen zwei Kanten eines Quaders wirklich normal aufeinander?'
    optionen: ['Skalarprodukt', 'Kreuzprodukt', 'Betrag', 'Spatprodukt']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Das Kreuzprodukt liefert einen Normalvektor zu zwei Vektoren. Für die Frage „rechter Winkel?“ reicht eine Zahl.'
  - typ: auswahl
    label: 'Wie groß ist die Fläche eines Dreiecks im Raum?'
    optionen: ['Skalarprodukt', 'Kreuzprodukt', 'Betrag', 'Spatprodukt']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Mit dem Skalarprodukt bekommst du den Winkel, aber noch nicht die Fläche. Die Länge des Kreuzprodukts ist direkt eine Fläche.'
  - typ: auswahl
    label: 'Liegen vier Punkte in einer gemeinsamen Ebene?'
    optionen: ['Skalarprodukt', 'Kreuzprodukt', 'Betrag', 'Spatprodukt']
    richtig: [3]
    fehler:
      - wert: 1
        meldung: 'Das Kreuzprodukt verarbeitet nur zwei Vektoren. Für drei Verbindungsvektoren braucht man das Volumen des Spats.'
  - typ: auswahl
    label: 'Wie weit sind zwei Punkte voneinander entfernt?'
    optionen: ['Skalarprodukt', 'Kreuzprodukt', 'Betrag', 'Spatprodukt']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: 'Das Skalarprodukt braucht zwei Vektoren. Ein Abstand ist die Länge eines einzigen Verbindungsvektors.'
hinweise:
  - 'Winkel und rechte Winkel: Skalarprodukt. Flächen und Normalvektoren im Raum: Kreuzprodukt. Volumen und Komplanarität: Spatprodukt. Längen: Betrag.'
loesung: |
  **Ansatz:** Jedes Werkzeug beantwortet eine bestimmte Art von Frage.
  ---
  Rechter Winkel: Skalarprodukt null? Fläche im Raum: halbe Länge des Kreuzprodukts.
  ---
  Vier Punkte $A, B, C, D$ in einer Ebene: Spatprodukt von $\overrightarrow{AB}$, $\overrightarrow{AC}$, $\overrightarrow{AD}$ gleich null? Abstand: Betrag des Verbindungsvektors.
```

```aufgabe
id: ve-wh-welche-formel
titel: "Welches Verfahren passt? Besondere Punkte"
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  Ordne jeder Aufgabe die passende Formel zu. Rechne nichts aus.
teile:
  - typ: auswahl
    label: 'Von einem Parallelogramm $ABCD$ kennt man $A$, $B$ und $C$. Gesucht ist $D$.'
    optionen: ['$\tfrac12(A + C)$', '$A + C - B$', '$\tfrac13(A + B + C)$', '$2Z - P$']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Das ist der Diagonalenschnittpunkt, nicht die vierte Ecke.'
  - typ: auswahl
    label: 'Gesucht ist der Punkt, in dem sich die Schwerlinien eines Dreiecks $ABC$ schneiden.'
    optionen: ['$\tfrac12(A + C)$', '$A + C - B$', '$\tfrac13(A + B + C)$', '$2Z - P$']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: 'Das ist nur die Mitte einer Seite. Der Schwerpunkt ist der Mittelwert aller drei Ecken.'
  - typ: auswahl
    label: 'Ein Punkt $P$ soll am Punkt $Z$ gespiegelt werden.'
    optionen: ['$\tfrac12(A + C)$', '$A + C - B$', '$\tfrac13(A + B + C)$', '$2Z - P$']
    richtig: [3]
    fehler:
      - wert: 0
        meldung: 'Beim Spiegeln ist $Z$ die Mitte. Gesucht ist aber nicht die Mitte, sondern der zweite Endpunkt.'
hinweise:
  - 'Überlege bei jeder Aufgabe, welcher Punkt die Mitte von welchen anderen Punkten ist.'
loesung: |
  **Ansatz:** Alle Formeln entstehen aus „Punkt plus Teil eines Verbindungsvektors“.
  ---
  Vierte Ecke: Nachbar plus Nachbar minus Gegenecke, $D = A + C - B$. Schwerpunkt: $\tfrac13(A + B + C)$.
  ---
  Spiegelpunkt: $Z$ ist die Mitte von $P$ und $P'$, also $P' = 2Z - P$.
```

```aufgabe
id: ve-wh-gleichseitig
titel: Winkel und Fläche in einem Dreieck im Raum
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Gegeben ist das Dreieck $A(1 \mid 1 \mid 0)$, $B(3 \mid 1 \mid 2)$, $C(1 \mid 3 \mid 2)$.

  a) Berechne den Winkel bei $A$ in Grad.

  b) Berechne den Flächeninhalt auf zwei Dezimalstellen.

  c) Welche besondere Form hat das Dreieck?
teile:
  - typ: zahl
    label: 'a) Winkel bei $A$'
    einheit: "°"
    loesung: "inGrad(acos(4/8))"
    fehler:
      - wert: "inGrad(acos(4/64))"
        meldung: 'Du hast durch das Produkt der **quadrierten** Längen $8\cdot 8 = 64$ geteilt. Im Nenner stehen die Längen selbst: $\sqrt8\cdot\sqrt8 = 8$.'
  - typ: zahl
    label: 'b) Fläche'
    loesung: "sqrt(16+16+16)/2"
    fehler:
      - wert: "sqrt(48)"
        meldung: 'Das ist die Fläche des Parallelogramms. Das Dreieck ist die Hälfte.'
  - typ: auswahl
    label: 'c)'
    optionen: ['gleichseitig', 'rechtwinklig', 'gleichschenklig mit verschiedener Basis']
    richtig: [0]
    fehler:
      - wert: 2
        meldung: 'Berechne auch $|BC|$. Ist sie von den anderen beiden Seiten verschieden?'
hinweise:
  - 'Winkel: Skalarprodukt von $\overrightarrow{AB}$ und $\overrightarrow{AC}$. Fläche: halbe Länge ihres Kreuzprodukts.'
  - 'Vergleiche zum Schluss alle drei Seitenlängen.'
loesung: |
  **Ansatz:** Winkel mit dem Skalarprodukt, Fläche mit dem Kreuzprodukt, Form über die Seitenlängen.
  ---
  $\overrightarrow{AB} = \begin{pmatrix} 2 \\ 0 \\ 2 \end{pmatrix}$, $\overrightarrow{AC} = \begin{pmatrix} 0 \\ 2 \\ 2 \end{pmatrix}$, beide mit Länge $\sqrt 8$. Skalarprodukt $4$, also $\cos\alpha = \tfrac48 = \tfrac12$ und $\alpha = 60°$.
  ---
  $\overrightarrow{AB}\times\overrightarrow{AC} = \begin{pmatrix} 0\cdot 2 - 2\cdot 2 \\ 2\cdot 0 - 2\cdot 2 \\ 2\cdot 2 - 0\cdot 0 \end{pmatrix} = \begin{pmatrix} -4 \\ -4 \\ 4 \end{pmatrix}$, Länge $\sqrt{48} = 4\sqrt3$. Fläche $2\sqrt3 \approx 3{,}46$.
  ---
  $\overrightarrow{BC} = \begin{pmatrix} -2 \\ 2 \\ 0 \end{pmatrix}$ hat ebenfalls die Länge $\sqrt 8$. Alle Seiten gleich: gleichseitig. **Kontrolle:** $\tfrac{\sqrt3}{4}\cdot 8 = 2\sqrt3$.
```

## Prüfungsaufgaben

Diese Aufgaben haben das Format der schriftlichen Prüfung: mehrere Teilaufgaben, die aufeinander aufbauen, oft mit
einem Sachkontext. Bei jeder Aufgabe steht ein Zeitrichtwert. In der Prüfung hast du $120$ Minuten, erlaubt sind ein
Taschenrechner ohne Grafik und die Formelsammlung. Fertige zu jeder ebenen Aufgabe eine **Skizze** an, auch wenn sie
nicht verlangt ist. Sie zeigt der Prüferin, dass du die Geometrie verstanden hast, und dir, ob die Ergebnisse plausibel
sind. Schreib bei jeder Teilaufgabe zuerst den Ansatz hin, dann die Rechnung, dann einen Antwortsatz.

```aufgabe
id: ve-pruefung-dreieck
titel: Ein Dreieck in der Ebene vollständig untersuchen
niveau: 3
punkte: 10
lernziel: 5
kompetenz: rechnen
angabe: |
  Zeitrichtwert: $20$ Minuten.

  Gegeben ist das Dreieck $A(-1 \mid -2)$, $B(7 \mid 2)$, $C(1 \mid 6)$. Runde Winkel und Längen auf zwei Dezimalstellen.

  a) Fertige eine Skizze an und berechne die drei Seitenlängen.

  b) Berechne die drei Innenwinkel.

  c) Berechne den Flächeninhalt und den Schwerpunkt $S$.

  d) Bestimme den Höhenfußpunkt $H_c$ auf der Seite $AB$ und die Höhe $h_c$. Kontrolliere damit den Flächeninhalt.
plot:
  x: [-2, 8]
  y: [-3, 7]
  gleich: true
  strecken:
    - { von: [-1, -2], nach: [7, 2] }
    - { von: [7, 2], nach: [1, 6] }
    - { von: [1, 6], nach: [-1, -2] }
  punkte:
    - { x: -1, y: -2, label: "A" }
    - { x: 7, y: 2, label: "B" }
    - { x: 1, y: 6, label: "C" }
teile:
  - typ: zahl
    label: 'a) $c = |AB|$'
    loesung: "sqrt(80)"
    anzeige: '4\sqrt5 \approx 8{,}94'
  - typ: zahl
    label: 'a) $b = |AC|$'
    loesung: "sqrt(68)"
    anzeige: '\sqrt{68} \approx 8{,}25'
  - typ: zahl
    label: 'a) $a = |BC|$'
    loesung: "sqrt(52)"
    anzeige: '\sqrt{52} \approx 7{,}21'
  - typ: zahl
    label: 'b) $\alpha$'
    einheit: "°"
    loesung: "inGrad(acos(48/(sqrt(80)*sqrt(68))))"
  - typ: zahl
    label: 'b) $\beta$'
    einheit: "°"
    loesung: "inGrad(acos(32/(sqrt(80)*sqrt(52))))"
    fehler:
      - wert: "180 - inGrad(acos(32/(sqrt(80)*sqrt(52))))"
        meldung: 'Das ist der Nebenwinkel. Für den Winkel bei $B$ müssen beide Vektoren von $B$ weg zeigen: $\overrightarrow{BA}$ und $\overrightarrow{BC}$.'
  - typ: zahl
    label: 'b) $\gamma$'
    einheit: "°"
    loesung: "inGrad(acos(20/(sqrt(68)*sqrt(52))))"
  - typ: zahl
    label: 'c) Flächeninhalt'
    loesung: "abs(8*8 - 4*2)/2"
    fehler:
      - wert: "56"
        meldung: 'Das ist die Fläche des Parallelogramms aus $\overrightarrow{AB}$ und $\overrightarrow{AC}$. Das Dreieck ist die Hälfte.'
  - typ: vektor
    label: 'c) $S$'
    namen: ["x", "y"]
    loesung: ["7/3", "2"]
  - typ: vektor
    label: 'd) $H_c$'
    namen: ["x", "y"]
    loesung: ["-1 + 0.6*8", "-2 + 0.6*4"]
    fehler:
      - wert: ["3", "0"]
        meldung: 'Das ist der Mittelpunkt von $AB$. Der Höhenfußpunkt liegt nur im gleichschenkligen Dreieck dort.'
  - typ: zahl
    label: 'd) $h_c$'
    loesung: "sqrt(2.8^2 + 5.6^2)"
hinweise:
  - 'Winkel bei $A$ aus $\overrightarrow{AB}$ und $\overrightarrow{AC}$, bei $B$ aus $\overrightarrow{BA}$ und $\overrightarrow{BC}$, bei $C$ aus $\overrightarrow{CA}$ und $\overrightarrow{CB}$.'
  - 'Fläche: $\tfrac12|a_1 b_2 - a_2 b_1|$ mit $\overrightarrow{AB}$ und $\overrightarrow{AC}$.'
  - '$H_c = A + \lambda\overrightarrow{AB}$ mit $\lambda = \dfrac{\overrightarrow{AC}\cdot\overrightarrow{AB}}{|\overrightarrow{AB}|^2}$. Das ist die Projektion.'
loesung: |
  **a)** $\overrightarrow{AB} = \begin{pmatrix} 8 \\ 4 \end{pmatrix}$, $\overrightarrow{AC} = \begin{pmatrix} 2 \\ 8 \end{pmatrix}$, $\overrightarrow{BC} = \begin{pmatrix} -6 \\ 4 \end{pmatrix}$.
  Also $c = \sqrt{80} \approx 8{,}94$, $b = \sqrt{68} \approx 8{,}25$ und $a = \sqrt{52} \approx 7{,}21$.
  ---
  **b)** $\cos\alpha = \dfrac{\overrightarrow{AB}\cdot\overrightarrow{AC}}{c\,b} = \dfrac{16 + 32}{\sqrt{80}\sqrt{68}} \approx 0{,}6508$, also $\alpha \approx 49{,}40°$.

  $\cos\beta = \dfrac{\overrightarrow{BA}\cdot\overrightarrow{BC}}{c\,a} = \dfrac{(-8)(-6) + (-4)\cdot 4}{\sqrt{80}\sqrt{52}} = \dfrac{32}{\sqrt{4160}} \approx 0{,}4961$, also $\beta \approx 60{,}26°$.

  $\cos\gamma = \dfrac{\overrightarrow{CA}\cdot\overrightarrow{CB}}{b\,a} = \dfrac{(-2)\cdot 6 + (-8)(-4)}{\sqrt{68}\sqrt{52}} = \dfrac{20}{\sqrt{3536}} \approx 0{,}3363$, also $\gamma \approx 70{,}35°$.

  **Kontrolle:** $49{,}40° + 60{,}26° + 70{,}35° \approx 180°$.
  ---
  **c)** $A_\triangle = \tfrac12|8\cdot 8 - 4\cdot 2| = \tfrac12\cdot 56 = 28$ Flächeneinheiten.
  $S = \tfrac13(A + B + C) = \left(\tfrac{-1 + 7 + 1}{3} \;\Big|\; \tfrac{-2 + 2 + 6}{3}\right) = \left(\tfrac73 \;\Big|\; 2\right)$.
  ---
  **d)** $\lambda = \dfrac{\overrightarrow{AC}\cdot\overrightarrow{AB}}{|\overrightarrow{AB}|^2} = \dfrac{48}{80} = 0{,}6$, also $H_c = A + 0{,}6\begin{pmatrix} 8 \\ 4 \end{pmatrix} = (3{,}8 \mid 0{,}4)$.
  ---
  $\overrightarrow{H_cC} = \begin{pmatrix} -2{,}8 \\ 5{,}6 \end{pmatrix}$, $h_c = \sqrt{7{,}84 + 31{,}36} = \sqrt{39{,}2} \approx 6{,}26$.
  **Kontrolle:** $\overrightarrow{H_cC}\cdot\overrightarrow{AB} = -22{,}4 + 22{,}4 = 0$, und $\tfrac12\cdot c\cdot h_c = \tfrac12\sqrt{80}\sqrt{39{,}2} = \tfrac12\sqrt{3136} = 28$. Beide Wege liefern dieselbe Fläche.
```

```aufgabe
id: ve-pruefung-parallelogramm
titel: Parallelogramm vollständig untersuchen
niveau: 3
punkte: 10
lernziel: 4
kompetenz: begruenden
quelle: nach Musterprüfung Karigl, Aufgabe 2 (abgewandelt und erweitert)
angabe: |
  Zeitrichtwert: $20$ Minuten.

  Von einem Parallelogramm $ABCD$ kennt man $A(-3 \mid 2)$, $B(5 \mid -4)$ und $C(9 \mid -1)$. Runde auf zwei Dezimalstellen.

  a) Bestimme die vierte Ecke $D$, den Diagonalenschnittpunkt $M$ und die Seitenlängen.

  b) Berechne den Flächeninhalt und die Innenwinkel $\alpha$ (bei $A$) und $\beta$ (bei $B$).

  c) Unter welchem spitzen Winkel schneiden die Diagonalen einander?

  d) Ist das Parallelogramm ein Rechteck, eine Raute oder keines von beiden? Begründe mit Vektoren.
teile:
  - typ: vektor
    label: 'a) $D$'
    namen: ["x", "y"]
    loesung: ["-3+9-5", "2-1+4"]
    fehler:
      - wert: ["-7", "-1"]
        meldung: 'Du hast $A + B - C$ gerechnet. $D$ liegt aber gegenüber von $B$, also $D = A + C - B$.'
  - typ: vektor
    label: 'a) $M$'
    namen: ["x", "y"]
    loesung: ["(-3+9)/2", "(2-1)/2"]
  - typ: zahl
    label: 'a) $|AB|$'
    loesung: "sqrt(8^2 + 6^2)"
  - typ: zahl
    label: 'a) $|AD|$'
    loesung: "sqrt(4^2 + 3^2)"
  - typ: zahl
    label: 'b) Flächeninhalt'
    loesung: "abs(8*3 - (-6)*4)"
    fehler:
      - wert: "24"
        meldung: 'Du hast die Hälfte genommen. Das wäre ein Dreieck. Die Fläche des Parallelogramms ist der ganze Betrag der Determinante.'
      - wert: "0"
        meldung: 'In der Determinante steht $8\cdot 3 - (-6)\cdot 4$. Minus mal minus ergibt plus.'
  - typ: zahl
    label: 'b) $\alpha$'
    einheit: "°"
    loesung: "inGrad(acos(14/(10*5)))"
  - typ: zahl
    label: 'b) $\beta$'
    einheit: "°"
    loesung: "180 - inGrad(acos(14/(10*5)))"
  - typ: zahl
    label: 'c) spitzer Winkel zwischen den Diagonalen'
    einheit: "°"
    loesung: "180 - inGrad(acos(-75/(sqrt(153)*sqrt(97))))"
    fehler:
      - wert: "inGrad(acos(-75/(sqrt(153)*sqrt(97))))"
        meldung: 'Das ist der stumpfe Winkel zwischen den Diagonalen. Gefragt ist der spitze, also der Nebenwinkel.'
  - typ: auswahl
    label: 'd)'
    optionen: ["Rechteck", "Raute", "Quadrat", "keines davon"]
    richtig: [3]
    fehler:
      - wert: 0
        meldung: 'Für ein Rechteck müsste $\overrightarrow{AB}\cdot\overrightarrow{AD} = 0$ sein. Es ist aber $14$.'
      - wert: 1
        meldung: 'Für eine Raute müssten die Nachbarseiten gleich lang sein. Vergleiche $|AB|$ und $|AD|$.'
hinweise:
  - '$D = A + C - B$. Das Parallelogramm wird von $\overrightarrow{AB}$ und $\overrightarrow{AD}$ aufgespannt.'
  - 'Benachbarte Innenwinkel im Parallelogramm ergänzen einander auf $180°$.'
  - 'Die Diagonalen sind $\overrightarrow{AC}$ und $\overrightarrow{BD}$. Ist ihr Winkel stumpf, ist der spitze Winkel $180°$ minus dieser Wert.'
loesung: |
  **a)** $D = A + C - B = (-3 + 9 - 5 \mid 2 - 1 + 4) = (1 \mid 5)$ und $M = \tfrac12(A + C) = (3 \mid 0{,}5)$. Kontrolle: $\tfrac12(B + D) = (3 \mid 0{,}5)$.
  $\overrightarrow{AB} = \begin{pmatrix} 8 \\ -6 \end{pmatrix}$, $|AB| = 10$. $\overrightarrow{AD} = \begin{pmatrix} 4 \\ 3 \end{pmatrix}$, $|AD| = 5$.
  ---
  **b)** Fläche: $|8\cdot 3 - (-6)\cdot 4| = |24 + 24| = 48$ Flächeneinheiten.
  $\overrightarrow{AB}\cdot\overrightarrow{AD} = 32 - 18 = 14$, also $\cos\alpha = \dfrac{14}{10\cdot 5} = 0{,}28$ und $\alpha \approx 73{,}74°$. Dann $\beta = 180° - \alpha \approx 106{,}26°$.
  ---
  **c)** $\overrightarrow{AC} = \begin{pmatrix} 12 \\ -3 \end{pmatrix}$ und $\overrightarrow{BD} = \begin{pmatrix} -4 \\ 9 \end{pmatrix}$. Skalarprodukt $-48 - 27 = -75$.
  $\cos\delta = \dfrac{-75}{\sqrt{153}\sqrt{97}} \approx -0{,}6157$, also $\delta \approx 128{,}00°$. Der spitze Winkel ist $180° - 128{,}00° = 52{,}00°$.
  ---
  **d)** $\overrightarrow{AB}\cdot\overrightarrow{AD} = 14 \neq 0$: kein rechter Winkel, also kein Rechteck. $|AB| = 10 \neq 5 = |AD|$: keine Raute. Gleichwertig: Die Diagonalen stehen nicht normal aufeinander ($-75 \neq 0$) und sind nicht gleich lang ($\sqrt{153} \neq \sqrt{97}$). Das Parallelogramm ist also keines von beiden.
```

```aufgabe
id: ve-pruefung-tetraeder
titel: Ein Tetraeder
niveau: 3
punkte: 10
lernziel: 6
kompetenz: anwenden
angabe: |
  Zeitrichtwert: $20$ Minuten.

  Ein Tetraeder hat die Ecken $A(0 \mid 0 \mid 0)$, $B(4 \mid 0 \mid 0)$, $C(0 \mid 3 \mid 0)$ und $D(2 \mid 1 \mid 5)$, Angaben in cm.
  Runde auf zwei Dezimalstellen.

  a) Berechne das Volumen.

  b) Bestimme einen Normalvektor der Seitenfläche $BCD$ und ihren Flächeninhalt.

  c) Wie weit ist $A$ von der Ebene durch $B$, $C$ und $D$ entfernt?
teile:
  - typ: zahl
    label: 'a) $V$'
    einheit: "cm³"
    loesung: "abs(det([[4, 0, 2], [0, 3, 1], [0, 0, 5]]))/6"
    fehler:
      - wert: "60"
        meldung: 'Das ist das Volumen des Spats. Das Tetraeder hat ein Sechstel davon.'
  - typ: vektor
    label: 'b) Normalvektor von $BCD$'
    vielfaches: true
    loesung: ["15", "20", "2"]
    fehler:
      - wert: ["15", "-20", "2"]
        meldung: 'Die mittlere Komponente hat das falsche Vorzeichen. Probe mit $\overrightarrow{BC}$: $-60 - 60 \neq 0$.'
  - typ: zahl
    label: 'b) Fläche $BCD$'
    einheit: "cm²"
    loesung: "sqrt(15^2 + 20^2 + 2^2)/2"
    anzeige: '\tfrac12\sqrt{629} \approx 12{,}54'
  - typ: zahl
    label: 'c) Abstand von $A$'
    einheit: "cm"
    loesung: "3*10/(sqrt(629)/2)"
    anzeige: '\tfrac{60}{\sqrt{629}} \approx 2{,}39'
    fehler:
      - wert: "10/(sqrt(629)/2)"
        meldung: 'Aus $V = \tfrac13 G h$ folgt $h = \frac{3V}{G}$. Der Faktor $3$ fehlt.'
hinweise:
  - '$V = \tfrac16\,\big|(\overrightarrow{AB}\times\overrightarrow{AC})\cdot\overrightarrow{AD}\big|$.'
  - 'Ein Normalvektor von $BCD$ ist $\overrightarrow{BC}\times\overrightarrow{BD}$.'
  - 'Das Volumen einer Pyramide ist $\tfrac13 G h$. Nimm $BCD$ als Grundfläche $G$, dann ist $h$ der gesuchte Abstand.'
loesung: |
  **a)** $\overrightarrow{AB}\times\overrightarrow{AC} = \begin{pmatrix} 4 \\ 0 \\ 0 \end{pmatrix}\times\begin{pmatrix} 0 \\ 3 \\ 0 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 12 \end{pmatrix}$, Skalarprodukt mit $\overrightarrow{AD} = \begin{pmatrix} 2 \\ 1 \\ 5 \end{pmatrix}$ ergibt $60$. Also $V = \tfrac{60}{6} = 10$ cm³.
  **Kontrolle:** Die Grundfläche $ABC$ ist ein rechtwinkliges Dreieck mit $\tfrac12\cdot 4\cdot 3 = 6$ cm². Die Höhe ist $5$ cm. $V = \tfrac13\cdot 6\cdot 5 = 10$ cm³.
  ---
  **b)** $\overrightarrow{BC} = \begin{pmatrix} -4 \\ 3 \\ 0 \end{pmatrix}$, $\overrightarrow{BD} = \begin{pmatrix} -2 \\ 1 \\ 5 \end{pmatrix}$,
  $\overrightarrow{BC}\times\overrightarrow{BD} = \begin{pmatrix} 3\cdot 5 - 0\cdot 1 \\ 0\cdot(-2) - (-4)\cdot 5 \\ (-4)\cdot 1 - 3\cdot(-2) \end{pmatrix} = \begin{pmatrix} 15 \\ 20 \\ 2 \end{pmatrix}$.
  **Probe:** $-60 + 60 + 0 = 0$ und $-30 + 20 + 10 = 0$.
  ---
  Fläche: $\tfrac12\sqrt{225 + 400 + 4} = \tfrac12\sqrt{629} \approx 12{,}54$ cm².
  ---
  **c)** Aus $V = \tfrac13\,G\,h$ mit $G = A_{BCD}$: $h = \dfrac{3V}{G} = \dfrac{30}{\tfrac12\sqrt{629}} = \dfrac{60}{\sqrt{629}} \approx 2{,}39$ cm.
  In [Kapitel 7, Abstände im Raum](/lernen/mathe3/analytische-geometrie/abstaende-im-raum) rechnest du dasselbe mit der Hesseschen Normalform nach.
```

```aufgabe
id: ve-pruefung-wuerfel
titel: Winkel und Schnitte im Würfel
niveau: 3
punkte: 10
lernziel: 5
kompetenz: anwenden
angabe: |
  Zeitrichtwert: $18$ Minuten.

  Ein Würfel $ABCDEFGH$ mit Kantenlänge $4$ hat die Ecken $A(0 \mid 0 \mid 0)$, $B(4 \mid 0 \mid 0)$, $C(4 \mid 4 \mid 0)$,
  $D(0 \mid 4 \mid 0)$ und darüber $E(0 \mid 0 \mid 4)$, $F(4 \mid 0 \mid 4)$, $G(4 \mid 4 \mid 4)$, $H(0 \mid 4 \mid 4)$. Runde auf zwei Dezimalstellen.

  a) Unter welchem Winkel ist die Raumdiagonale $AG$ gegen die Bodenfläche geneigt, also gegen die Bodendiagonale $AC$?

  b) Welchen spitzen Winkel schließen die Raumdiagonalen $AG$ und $BH$ ein?

  c) Das Dreieck $BDE$ schneidet eine Ecke des Würfels ab. Berechne seinen Flächeninhalt. Welche besondere Form hat es?
teile:
  - typ: zahl
    label: 'a) Winkel'
    einheit: "°"
    loesung: "inGrad(acos(32/(sqrt(48)*sqrt(32))))"
    fehler:
      - wert: "45"
        meldung: 'Das ist der Winkel zwischen der Bodendiagonale und einer Bodenkante. Die Raumdiagonale steigt flacher an.'
  - typ: zahl
    label: 'b) Winkel'
    einheit: "°"
    loesung: "inGrad(acos(1/3))"
  - typ: zahl
    label: 'c) Fläche'
    loesung: "8*sqrt(3)"
    anzeige: '8\sqrt3 \approx 13{,}86'
    fehler:
      - wert: "16*sqrt(3)"
        meldung: 'Das ist die Länge des Kreuzprodukts, also die Fläche des Parallelogramms. Das Dreieck ist die Hälfte.'
  - typ: text
    label: 'c) Form des Dreiecks'
    muster: |
      Gleichseitig: Alle drei Seiten sind Flächendiagonalen des Würfels, also jeweils $4\sqrt2$ lang.
hinweise:
  - '$\overrightarrow{AG} = (4, 4, 4)$, $\overrightarrow{AC} = (4, 4, 0)$, $\overrightarrow{BH} = (-4, 4, 4)$.'
  - 'Für c) hilft $\overrightarrow{BD}\times\overrightarrow{BE}$. Vergleiche auch die drei Seitenlängen.'
loesung: |
  **Ansatz:** Alle Winkel mit der Winkelformel, die Fläche mit dem Kreuzprodukt.
  ---
  **a)** $\cos\varphi = \dfrac{(4, 4, 4)\cdot(4, 4, 0)}{\sqrt{48}\sqrt{32}} = \dfrac{32}{\sqrt{1536}} = \sqrt{\tfrac23} \approx 0{,}8165$, also $\varphi \approx 35{,}26°$.
  ---
  **b)** $\overrightarrow{AG}\cdot\overrightarrow{BH} = -16 + 16 + 16 = 16$, beide Längen sind $\sqrt{48}$. $\cos\psi = \tfrac{16}{48} = \tfrac13$, also $\psi \approx 70{,}53°$. Der Winkel ist spitz, weil das Skalarprodukt positiv ist.
  ---
  **c)** $\overrightarrow{BD} = \begin{pmatrix} -4 \\ 4 \\ 0 \end{pmatrix}$, $\overrightarrow{BE} = \begin{pmatrix} -4 \\ 0 \\ 4 \end{pmatrix}$,
  $\overrightarrow{BD}\times\overrightarrow{BE} = \begin{pmatrix} 16 \\ 16 \\ 16 \end{pmatrix}$ mit Länge $16\sqrt3$. Fläche $8\sqrt3 \approx 13{,}86$.
  ---
  $|BD| = |BE| = |DE| = 4\sqrt2$: gleichseitiges Dreieck. **Kontrolle:** $\tfrac{\sqrt3}{4}s^2 = \tfrac{\sqrt3}{4}\cdot 32 = 8\sqrt3$.
```

```aufgabe
id: ve-pruefung-terme-gerade
titel: Vektoren, Skalare und eine Gerade
niveau: 3
punkte: 10
lernziel: 7
kompetenz: begruenden
quelle: nach Musterprüfung Schranz-Kirlinger, Aufgaben 2.1 und 2.2 (abgewandelt)
angabe: |
  Zeitrichtwert: $12$ Minuten.

  a) Es seien $\vec u, \vec v$ Vektoren im $\R^3$ und $p, q$ reelle Zahlen. Welche Terme sind Vektoren?

  b) Die Gerade $g$ hat die Gleichung $5x - 12y = 7$. Die Koeffizienten vor $x$ und $y$ bilden einen Normalvektor
  $\vec n = \begin{pmatrix} 5 \\ -12 \end{pmatrix}$ der Geraden (warum, zeigt [Kapitel 7, Normalvektorform, allgemeine Form und Steigung](/lernen/mathe3/analytische-geometrie/normalvektorform-allgemeine-form-und-steigung)). Gib einen Richtungsvektor
  $\vec r$ der Geraden an.

  c) Normiere den Richtungsvektor $\vec r$ mit positiver $x$-Komponente.

  d) Gib einen Vektor an, der normal auf $g$ steht und die Länge $26$ hat. Wähle den mit positiver $x$-Komponente.
teile:
  - typ: auswahl
    label: 'a)'
    mehrfach: true
    optionen:
      - '$(\vec u\cdot\vec v)\cdot\vec u$'
      - '$p\cdot\vec u\cdot q\cdot\vec v$'
      - '$|\vec u|\cdot\vec v - q\cdot\vec u$'
      - '$(p\cdot\vec u + \vec v)\cdot\vec v$'
      - '$\vec u\times(q\cdot\vec v)$'
    richtig: [0, 2, 4]
    fehler:
      - wert: [0, 1, 2, 4]
        meldung: 'Im zweiten Term steht zwischen $p\vec u$ und $q\vec v$ ein Skalarprodukt zweier Vektoren. Das Ergebnis ist eine Zahl.'
      - wert: [0, 2]
        meldung: 'Im fünften Term ist $q\vec v$ ein Vektor. Das Kreuzprodukt zweier Vektoren ist wieder ein Vektor.'
  - typ: vektor
    label: 'b) $\vec r$'
    vielfaches: true
    loesung: ["12", "5"]
    fehler:
      - wert: ["5", "-12"]
        meldung: 'Das ist der Normalvektor selbst. Ein Richtungsvektor steht normal auf ihm: vertauschen und ein Vorzeichen ändern.'
  - typ: vektor
    label: 'c) $\vec r_0$'
    loesung: ["12/13", "5/13"]
    fehler:
      - wert: ["12/169", "5/169"]
        meldung: 'Du hast durch $|\vec r|^2 = 169$ geteilt. Normieren heißt: durch die Länge $13$ teilen.'
  - typ: vektor
    label: 'd)'
    loesung: ["10", "-24"]
    fehler:
      - wert: ["130", "-312"]
        meldung: 'Du hast $26\vec n$ gerechnet. $\vec n$ hat aber schon die Länge $13$. Nimm $26\,\vec n_0 = 2\vec n$.'
hinweise:
  - 'a) Typprüfung von innen nach außen. Ein Skalarprodukt zweier Vektoren ist eine Zahl.'
  - 'b) Ein Richtungsvektor steht normal auf dem Normalvektor. Für c) und d) brauchst du $|\vec n| = |\vec r| = 13$.'
loesung: |
  **a)** Erster Term: Klammer S, mal V ergibt einen **Vektor**. Zweiter Term: $p\vec u$ und $q\vec v$ sind V, dazwischen ein Skalarprodukt, also ein **Skalar**. Dritter Term: S mal V minus S mal V ergibt einen **Vektor**.
  Vierter Term: Klammer V, Skalarprodukt mit V ergibt einen **Skalar**. Fünfter Term: Kreuzprodukt zweier Vektoren ergibt einen **Vektor**. Vektoren sind also der erste, dritte und fünfte Term.
  ---
  **b)** Ein Richtungsvektor steht normal auf $\vec n$. Vertauschen und ein Vorzeichen ändern: $\vec r = \begin{pmatrix} 12 \\ 5 \end{pmatrix}$. **Probe:** $5\cdot 12 + (-12)\cdot 5 = 0$.
  ---
  **c)** $|\vec r| = \sqrt{144 + 25} = 13$, also $\vec r_0 = \tfrac{1}{13}\begin{pmatrix} 12 \\ 5 \end{pmatrix}$. **Probe:** $\tfrac{144 + 25}{169} = 1$.
  ---
  **d)** Der Normalvektor $\vec n = \begin{pmatrix} 5 \\ -12 \end{pmatrix}$ hat die Länge $13$. Doppelt so lang ist $2\vec n = \begin{pmatrix} 10 \\ -24 \end{pmatrix}$ mit Länge $26$ und positiver $x$-Komponente.
```

```aufgabe
id: ve-pruefung-ring
titel: Drei Kräfte an einem Ring
niveau: 3
punkte: 8
lernziel: 9
kompetenz: modellieren
angabe: |
  Zeitrichtwert: $15$ Minuten.

  An einem Ring ziehen zwei Seile mit $\vec F_1 = \begin{pmatrix} 200 \\ 0 \end{pmatrix}$ N und $\vec F_2 = \begin{pmatrix} -100 \\ 150 \end{pmatrix}$ N. Ein drittes Seil
  hält den Ring im Gleichgewicht. Runde auf zwei Dezimalstellen.

  a) Bestimme die dritte Kraft $\vec F_3$ und ihren Betrag.

  b) Welchen Winkel schließt $\vec F_3$ mit $\vec F_1$ ein?

  c) Der Ring wird nun um $\vec s = \begin{pmatrix} 3 \\ 1 \end{pmatrix}$ m verschoben, während $\vec F_1$ unverändert wirkt. Welche Arbeit verrichtet $\vec F_1$?
teile:
  - typ: vektor
    label: 'a) $\vec F_3$ in N'
    loesung: ["-(200-100)", "-(0+150)"]
    fehler:
      - wert: ["100", "150"]
        meldung: 'Das ist $\vec F_1 + \vec F_2$. Die dritte Kraft muss diese Summe aufheben.'
  - typ: zahl
    label: 'a) $|\vec F_3|$'
    einheit: N
    loesung: "sqrt(100^2 + 150^2)"
  - typ: zahl
    label: 'b) Winkel'
    einheit: "°"
    loesung: "inGrad(acos(-20000/(200*sqrt(32500))))"
    fehler:
      - wert: "inGrad(atan(150/100))"
        meldung: 'Das ist der Winkel im rechtwinkligen Dreieck aus den Beträgen der Komponenten. Gesucht ist der Winkel zwischen den beiden Pfeilen. Verwende das Skalarprodukt.'
  - typ: zahl
    label: 'c) $W$'
    einheit: J
    loesung: "200*3 + 0*1"
    fehler:
      - wert: "200*sqrt(10)"
        meldung: 'Du hast die Beträge multipliziert. Die Kraft zeigt nicht in Wegrichtung. Berechne das Skalarprodukt.'
hinweise:
  - 'Gleichgewicht: $\vec F_1 + \vec F_2 + \vec F_3 = \vec 0$.'
  - 'Winkel mit $\cos\varphi = \frac{\vec F_3\cdot\vec F_1}{|\vec F_3|\,|\vec F_1|}$. Arbeit: $W = \vec F_1\cdot\vec s$.'
loesung: |
  **a)** $\vec F_3 = -(\vec F_1 + \vec F_2) = -\begin{pmatrix} 100 \\ 150 \end{pmatrix} = \begin{pmatrix} -100 \\ -150 \end{pmatrix}$ N, $|\vec F_3| = \sqrt{10\,000 + 22\,500} = \sqrt{32\,500} \approx 180{,}28$ N.
  ---
  **b)** $\vec F_3\cdot\vec F_1 = -20\,000$, also $\cos\varphi = \dfrac{-20\,000}{200\cdot 180{,}28} \approx -0{,}5547$ und $\varphi \approx 123{,}69°$. Der Winkel ist stumpf, weil das Skalarprodukt negativ ist.
  ---
  **c)** $W = \vec F_1\cdot\vec s = 200\cdot 3 + 0\cdot 1 = 600$ J.
  ---
  **Antwort:** Das dritte Seil zieht mit rund $180{,}28$ N schräg nach links unten, unter rund $123{,}69°$ gegen $\vec F_1$. Bei der Verschiebung verrichtet $\vec F_1$ die Arbeit $600$ J, denn nur die $3$ m in ihrer Richtung zählen.
```

```aufgabe
id: ve-pruefung-varignon
titel: Einen Satz mit Vektoren beweisen
niveau: 3
punkte: 6
lernziel: 3
kompetenz: begruenden
angabe: |
  Zeitrichtwert: $10$ Minuten.

  Beweise mit Vektoren: Verbindet man die Seitenmittelpunkte eines **beliebigen** Vierecks $ABCD$ der Reihe nach, entsteht
  ein Parallelogramm. Dieser Satz heißt Satz von Varignon.
teile:
  - typ: text
    muster: |
      Seien $P = \tfrac12(A + B)$, $Q = \tfrac12(B + C)$, $R = \tfrac12(C + D)$ und $S = \tfrac12(D + A)$ die Seitenmittelpunkte.
      Dann ist $\overrightarrow{PQ} = Q - P = \tfrac12(C - A)$ und $\overrightarrow{SR} = R - S = \tfrac12(C - A)$.
      Also $\overrightarrow{PQ} = \overrightarrow{SR}$, und nach der Vektorbedingung ist $PQRS$ ein Parallelogramm.
      Seine Seiten sind parallel zur Diagonale $AC$ beziehungsweise $BD$ und halb so lang.
hinweise:
  - 'Schreibe die vier Mittelpunkte als $\tfrac12(A + B)$ und so weiter.'
  - 'Ein Viereck $PQRS$ ist ein Parallelogramm, wenn $\overrightarrow{PQ} = \overrightarrow{SR}$ gilt.'
loesung: |
  **Ansatz:** Wir drücken die Mittelpunkte durch die Ecken aus und prüfen die Vektorbedingung für Parallelogramme.
  ---
  Seitenmittelpunkte: $P = \tfrac12(A + B)$, $Q = \tfrac12(B + C)$, $R = \tfrac12(C + D)$, $S = \tfrac12(D + A)$.
  ---
  $\overrightarrow{PQ} = \tfrac12(B + C) - \tfrac12(A + B) = \tfrac12(C - A) = \tfrac12\overrightarrow{AC}$. Ebenso $\overrightarrow{SR} = \tfrac12(C + D) - \tfrac12(D + A) = \tfrac12(C - A)$.
  ---
  Also $\overrightarrow{PQ} = \overrightarrow{SR}$, und $PQRS$ ist ein Parallelogramm. Nebenbei: Seine Seiten sind halb so lang wie die Diagonale $AC$ und parallel zu ihr. Der Beweis braucht keine Voraussetzung an das Viereck. Er gilt sogar für Vierecke im Raum, deren Ecken nicht in einer Ebene liegen.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, bevor du weiterliest. Was würdest du jemandem sagen, der wissen will, wozu man Vektoren braucht und wie man mit ihnen rechnet?
antwort: |
  Eine mögliche Antwort mit drei Aussagen:
  1. Ein Vektor ist eine Verschiebung mit Länge und Richtung, aber ohne festen Ort. Punkt minus Punkt ergibt einen
     Vektor, Punkt plus Vektor einen Punkt. Gerechnet wird komponentenweise.
  2. Das Skalarprodukt ist eine Zahl. Es misst Winkel: $\vec a\cdot\vec b = |\vec a|\,|\vec b|\cos\varphi$, und es ist genau dann
     null, wenn die Vektoren normal aufeinander stehen.
  3. Das Kreuzprodukt ist ein Vektor, der auf beiden Faktoren normal steht. Seine Länge ist die Fläche des
     aufgespannten Parallelogramms. Das Spatprodukt liefert Volumen und prüft, ob drei Vektoren in einer Ebene liegen.

  Vergleiche mit dem Kasten „Zusammenfassung“ direkt nach dieser Frage. Fehlt dir eine Aussage, lies die zugehörige Lektion noch einmal.
```

:::zusammenfassung
1. **Vektor und Punkt:** Ein Vektor ist eine Verschiebung ohne festen Ort, ein Punkt ist ein Ort. Es gilt $\overrightarrow{AB} = B - A$ (Spitze minus Schaft) und $B = A + \overrightarrow{AB}$. Addition, Subtraktion und Vielfache gehen komponentenweise.
2. **Betrag und Einheitsvektor:** $|\vec a| = \sqrt{a_1^2 + a_2^2 + a_3^2}$ ist die Länge nach Pythagoras. Normieren heißt durch die Länge teilen: $\vec a_0 = \frac{1}{|\vec a|}\vec a$.
3. **Besondere Punkte:** Mittelpunkt $\tfrac12(A + B)$, Spiegelpunkt $2Z - P$, Teilungspunkt $A + \tfrac{m}{m + n}\overrightarrow{AB}$, Schwerpunkt $\tfrac13(A + B + C)$. Im Parallelogramm $ABCD$ ist $D = A + C - B$, und die Diagonalen halbieren einander.
4. **Skalarprodukt:** $\vec a\cdot\vec b = a_1b_1 + a_2b_2 + a_3b_3 = |\vec a|\,|\vec b|\cos\varphi$ ist eine Zahl. Winkel: $\varphi = \arccos\frac{\vec a\cdot\vec b}{|\vec a|\,|\vec b|}$ zwischen $0°$ und $180°$. Normal genau dann, wenn $\vec a\cdot\vec b = 0$.
5. **Normalvektor und Projektion:** In der Ebene steht $\begin{pmatrix} -a_2 \\ a_1 \end{pmatrix}$ normal auf $\vec a$. Die Projektion ist $\vec a_b = \frac{\vec a\cdot\vec b}{|\vec b|^2}\vec b$.
6. **Kreuzprodukt:** $\vec a\times\vec b$ gibt es nur im Raum. Es steht normal auf beiden Faktoren, seine Länge ist die Parallelogrammfläche, und $\vec b\times\vec a = -\vec a\times\vec b$. Das Spatprodukt $|(\vec a\times\vec b)\cdot\vec c|$ ist das Volumen des Spats.
7. **Typprüfung:** Skalarprodukt und Betrag liefern Zahlen, Summen, Vielfache und Kreuzprodukte liefern Vektoren. Zahl plus Vektor und Teilen durch einen Vektor sind nicht definiert.
8. **Lineare Abhängigkeit:** Vektoren sind abhängig, wenn einer durch die anderen ausgedrückt werden kann. Zwei Vektoren sind dann parallel, drei Vektoren im Raum komplanar, und das Spatprodukt ist null. In der Physik werden Kräfte und Geschwindigkeiten als Vektoren addiert, und die Arbeit ist $W = \vec F\cdot\vec s$.
:::

### Die häufigsten Fehler

Jeder Fehler wird von mindestens einer Aufgabe im Kapitel trainiert. Wenn dir ein Fehler bekannt vorkommt, löse die
genannte Aufgabe noch einmal.

1. **Schaft minus Spitze.** $\overrightarrow{AB}$ als $A - B$ berechnet. Richtig ist $B - A$. Training: „Verbindungsvektor berechnen“ und „Vorzeichen vorhersagen“ in [6.1 Was ist ein Vektor?](/lernen/mathe3/vektoren/was-ist-ein-vektor-pfeile-punkte-und-koordinaten).
2. **Punkt plus Punkt.** $A + B$ als sinnvollen Punkt behandelt. Training: „Welche Rechnungen ergeben einen Sinn?“ in [6.1](/lernen/mathe3/vektoren/was-ist-ein-vektor-pfeile-punkte-und-koordinaten).
3. **Minus minus vergessen.** $-2 - (-4)$ als $-6$ gerechnet. Training: „Differenz mit negativen Komponenten“ in [6.2 Rechnen mit Vektoren](/lernen/mathe3/vektoren/rechnen-mit-vektoren-addition-vielfache-und-rechengesetze).
4. **Wurzel aus einer Summe zerlegt** oder das Quadrat einer negativen Komponente negativ gerechnet. Training: „Betrag und Einheitsvektor“ in [6.3 Betrag, Abstand und Einheitsvektor](/lernen/mathe3/vektoren/betrag-abstand-und-einheitsvektor).
5. **Ohne Normieren abgetragen.** $A + d\cdot\vec v$ statt $A + d\cdot\vec v_0$. Training: „Eine Strecke in eine Richtung abtragen“ in [6.3](/lernen/mathe3/vektoren/betrag-abstand-und-einheitsvektor).
6. **Halber Vektor statt Mittelpunkt** oder ein Teilungsverhältnis falsch in einen Anteil übersetzt. Training: „Mittelpunkt einer Strecke“ und „Liegt der Punkt auf der Strecke, und wo?“ in [6.4 Mittelpunkt, Teilungspunkt und Schwerpunkt](/lernen/mathe3/vektoren/mittelpunkt-teilungspunkt-und-schwerpunkt).
7. **Falsche Gegenecke im Parallelogramm.** $D = A + B - C$ statt $D = A + C - B$. Training: „Parallelogramm aus drei Ecken vollständig berechnen“ in [6.5 Parallelogramme](/lernen/mathe3/vektoren/parallelogramme-und-besondere-vierecke).
8. **Skalarprodukt als Vektor hingeschrieben.** Die paarweisen Produkte nicht addiert. Training: „Skalarprodukt und Art des Winkels“ in [6.6 Das Skalarprodukt](/lernen/mathe3/vektoren/das-skalarprodukt-und-der-winkel-zwischen-vektoren).
9. **Vektoren im Dreieck zur Ecke hin statt von ihr weg** genommen, oder den Betrag des Kosinus verwendet. Das ergibt den Nebenwinkel. Training: „Rechtwinkliges Dreieck im Raum“ und „Ein falsch korrigierter Winkel“ in [6.6](/lernen/mathe3/vektoren/das-skalarprodukt-und-der-winkel-zwischen-vektoren).
10. **Normalvektor nur vertauscht** ohne Vorzeichenwechsel. Training: „Normalvektor in der Ebene“ in [6.7 Orthogonalität, Normalvektor und Projektion](/lernen/mathe3/vektoren/orthogonalitaet-normalvektor-und-projektion).
11. **Vorzeichen in der mittleren Komponente des Kreuzprodukts** oder die Reihenfolge der Faktoren vertauscht. Training: „Kreuzprodukt berechnen“ und „Ein Kreuzprodukt kontrollieren“ in [6.8 Das Kreuzprodukt](/lernen/mathe3/vektoren/das-kreuzprodukt-normalvektor-flaeche-und-volumen).
12. **Faktor $\tfrac12$ oder $\tfrac16$ vergessen** bei Dreiecksfläche und Tetraedervolumen. Training: „Fläche eines Dreiecks im Raum“ und „Volumen eines Spats und eines Tetraeders“ in [6.8](/lernen/mathe3/vektoren/das-kreuzprodukt-normalvektor-flaeche-und-volumen).
13. **Typen verwechselt.** Ein Skalarprodukt für einen Vektor gehalten oder durch einen Vektor geteilt. Training: „Welche Terme sind Vektoren?“ und „Kann man durch einen Vektor teilen?“ in [6.9 Vektor oder Skalar?](/lernen/mathe3/vektoren/vektor-oder-skalar-terme-richtig-lesen).
14. **Drei Vektoren nur paarweise geprüft.** Training: „Aussagen über lineare Abhängigkeit“ in [6.10 Lineare Abhängigkeit](/lernen/mathe3/vektoren/lineare-abhaengigkeit-linearkombination-und-basis).
15. **Beträge von Kräften addiert** statt die Vektoren. Training: „Die Resultierende zweier Kräfte“ in [6.11 Vektoren in der Physik](/lernen/mathe3/vektoren/kraefte-geschwindigkeiten-und-arbeit-vektoren-in-der-physik).

### Selbstcheck zu den Lernzielen

Schätze für jedes Lernziel ein, wie sicher du bist: **sicher**, **unsicher** oder **noch nicht**. Vergleiche dann mit
deinen Ergebnissen in den Aufgaben. Wo du dich überschätzt hast, lohnt sich eine Wiederholung am meisten.

1. Punkte und Vektoren unterscheiden, Verbindungsvektoren und Endpunkte berechnen.
2. Mit Vektoren rechnen, Vektorgleichungen lösen und Parallelität prüfen.
3. Beträge, Abstände und Einheitsvektoren berechnen und Strecken abtragen.
4. Mittelpunkte, Spiegelpunkte, Teilungspunkte und Schwerpunkte berechnen.
5. Parallelogramme ergänzen und auf Rechteck und Raute untersuchen.
6. Winkel, Orthogonalität, Normalvektoren und Projektionen mit dem Skalarprodukt bestimmen.
7. Normalvektoren, Flächen und Volumen mit dem Kreuzprodukt berechnen.
8. Terme als Vektor, Skalar oder nicht definiert einordnen.
9. Lineare Abhängigkeit nachweisen und Linearkombinationen bestimmen.
10. Kräfte, Geschwindigkeiten und Arbeit mit Vektoren modellieren.

## Mündliche Prüfung

```karten
- id: ve-k-vektor
  frage: Was ist ein Vektor? Gib ein Beispiel und ein Nichtbeispiel.
  antwort: |
    Geometrisch ist ein Vektor die Gesamtheit aller Pfeile, die gleich lang, parallel und gleich gerichtet sind. Jeder
    Pfeil ist ein Repräsentant. Nach Wahl eines Koordinatensystems ist ein Vektor ein Zahlenpaar im $\R^2$ oder ein
    Zahlentripel im $\R^3$, das die Verschiebung in jede Achsenrichtung angibt. Beispiel: $\begin{pmatrix} 3 \\ 2 \end{pmatrix}$ heißt
    „3 nach rechts, 2 nach oben“, egal wo man beginnt. Nichtbeispiel: Zwei gleich lange, parallele Pfeile mit
    entgegengesetzter Richtung stellen verschiedene Vektoren dar.
  kernpunkte:
    - Klasse gleich langer, paralleler, gleich gerichteter Pfeile
    - In Koordinaten ein Zahlenpaar oder Zahlentripel
    - Länge und Richtung, aber kein fester Ort
- id: ve-k-punkt-vektor
  frage: Was ist der Unterschied zwischen einem Punkt und einem Vektor, und warum hat Punkt plus Punkt keinen Sinn?
  antwort: |
    Ein Punkt ist ein Ort, ein Vektor eine Verschiebung. Punkt minus Punkt ergibt einen Vektor, $\overrightarrow{AB} = B - A$,
    und Punkt plus Vektor ergibt einen Punkt. Die Summe zweier Punkte hängt davon ab, wo man den Ursprung hinlegt.
    Verschiebt man den Ursprung, ändert sich das Ergebnis. Deshalb beschreibt $A + B$ nichts Geometrisches. Der
    Mittelpunkt $\tfrac12(A + B)$ ist trotzdem sinnvoll, weil er eine Abkürzung für $A + \tfrac12\overrightarrow{AB}$ ist.
  kernpunkte:
    - Punkt ist Ort, Vektor ist Verschiebung
    - B − A ist ein Vektor, A + v ist ein Punkt
    - A + B hängt vom Ursprung ab
- id: ve-k-rechengesetze
  frage: Warum darf man Vektorgleichungen wie Zahlengleichungen umformen, und was ist dabei verboten?
  antwort: |
    Addition und Vielfache gehen komponentenweise. Deshalb gelten Kommutativ-, Assoziativ- und Distributivgesetze für
    Vektoren, weil sie für jede Komponente als Zahlengesetze gelten. Man darf also Klammern auflösen, auf beiden Seiten
    denselben Vektor abziehen und durch eine Zahl ungleich null teilen. Verboten ist das Teilen durch einen Vektor, ein
    solcher Bruch ist nicht definiert.
  kernpunkte:
    - Rechengesetze gelten komponentenweise
    - Umformen und Teilen durch eine Zahl erlaubt
    - Teilen durch einen Vektor nicht definiert
- id: ve-k-betrag
  frage: Wie berechnet man den Betrag eines Vektors, und warum stimmt die Formel im Raum?
  antwort: |
    $|\vec a| = \sqrt{a_1^2 + a_2^2 + a_3^2}$. In der Ebene ist das der Satz von Pythagoras mit den Komponenten als
    Katheten. Im Raum wendet man ihn zweimal an: Zuerst ist die Diagonale der Grundfläche $\sqrt{a_1^2 + a_2^2}$ lang.
    Sie steht normal auf der $z$-Komponente, also ist die Raumdiagonale $\sqrt{a_1^2 + a_2^2 + a_3^2}$ lang. Es gilt
    $|\lambda\vec a| = |\lambda|\,|\vec a|$ und die Dreiecksungleichung.
  kernpunkte:
    - Formel mit Quadraten und Wurzel
    - Zweimal Pythagoras im Raum
    - "|λa| = |λ||a| und Dreiecksungleichung"
- id: ve-k-einheitsvektor
  frage: Was ist ein Einheitsvektor, und wozu braucht man ihn?
  antwort: |
    Ein Einheitsvektor hat die Länge $1$. Man normiert $\vec a \neq \vec 0$, indem man durch seine Länge teilt:
    $\vec a_0 = \frac{1}{|\vec a|}\vec a$. Man braucht ihn, um eine bestimmte Strecke $d$ in eine Richtung abzutragen,
    $P = A + d\cdot\vec a_0$, um Kraftanteile in eine Richtung zu berechnen und für die Hessesche Normalform in Kapitel 7.
  kernpunkte:
    - Länge 1, Richtung bleibt
    - Durch die Länge teilen, nicht durch ihr Quadrat
    - Anwendung Strecke abtragen und Projektion
- id: ve-k-schwerpunkt
  frage: Wie berechnet man den Schwerpunkt eines Dreiecks, und warum stimmt die Formel?
  antwort: |
    $S = \tfrac13(A + B + C)$. Der Punkt, der die Schwerlinie von $A$ zum Mittelpunkt $\tfrac12(B + C)$ im Verhältnis
    $2 : 1$ teilt, ist $A + \tfrac23\big(\tfrac12(B + C) - A\big) = \tfrac13(A + B + C)$. Der Ausdruck ändert sich nicht, wenn man
    die Ecken vertauscht. Also liegt derselbe Punkt auch auf den anderen beiden Schwerlinien.
  kernpunkte:
    - "Formel S = (A + B + C)/3"
    - Teilungspunkt im Verhältnis 2 zu 1 auf einer Schwerlinie
    - Symmetrie liefert alle drei Schwerlinien
- id: ve-k-parallelogramm
  frage: Wie findet man die vierte Ecke eines Parallelogramms, und warum halbieren die Diagonalen einander?
  antwort: |
    $ABCD$ ist ein Parallelogramm, wenn $\overrightarrow{AD} = \overrightarrow{BC}$. Daraus folgt $D = A + C - B$: Nachbar plus Nachbar
    minus Gegenecke. Weiter folgt $A + C = B + D$. Damit sind die Mittelpunkte $\tfrac12(A + C)$ und $\tfrac12(B + D)$ der beiden
    Diagonalen derselbe Punkt. Er liegt auf beiden Diagonalen und halbiert jede.
  kernpunkte:
    - Vektorbedingung AD = BC
    - "D = A + C − B, auf die Gegenecke achten"
    - Gleiche Diagonalenmittelpunkte
- id: ve-k-skalarprodukt
  frage: Wie ist das Skalarprodukt definiert, und warum gilt a·b = |a||b|cos φ?
  antwort: |
    $\vec a\cdot\vec b = a_1b_1 + a_2b_2 + a_3b_3$, das Ergebnis ist eine Zahl. Für die geometrische Formel betrachtet man das
    Dreieck aus $\vec a$, $\vec b$ und $\vec a - \vec b$. Der Kosinussatz aus Kapitel 5 liefert
    $|\vec a - \vec b|^2 = |\vec a|^2 + |\vec b|^2 - 2|\vec a|\,|\vec b|\cos\varphi$. Ausmultiplizieren mit den Rechengesetzen liefert
    $|\vec a|^2 - 2\,\vec a\cdot\vec b + |\vec b|^2$. Der Vergleich ergibt die Formel.
  kernpunkte:
    - Koordinatenformel, Ergebnis ist eine Zahl
    - Dreieck aus a, b und a − b
    - Vergleich mit dem Kosinussatz (Kapitel 5)
- id: ve-k-orthogonal
  frage: Wann stehen zwei Vektoren normal aufeinander, und warum braucht man beim Winkel keine Quadrantenüberlegung?
  antwort: |
    Zwei Vektoren ungleich dem Nullvektor stehen genau dann normal aufeinander, wenn ihr Skalarprodukt null ist. Denn
    $\vec a\cdot\vec b = |\vec a|\,|\vec b|\cos\varphi$, die Längen sind nicht null, und $\cos\varphi = 0$ gilt zwischen $0°$ und $180°$
    nur für $90°$. Der Winkel zwischen Vektoren liegt immer in diesem Bereich, und der Arkuskosinus liefert genau diese
    Werte. Ein negativer Kosinus ergibt automatisch einen stumpfen Winkel.
  kernpunkte:
    - Skalarprodukt null genau bei rechtem Winkel
    - Winkel zwischen 0° und 180°
    - arccos liefert diesen Bereich, kein Quadrantenproblem
- id: ve-k-normalvektor
  frage: Wie findet man in der Ebene einen Normalvektor, und warum reicht das im Raum nicht?
  antwort: |
    In der Ebene vertauscht man die Koordinaten und ändert bei einer das Vorzeichen: Aus $(a_1, a_2)$ wird $(-a_2, a_1)$. Das
    Skalarprodukt ist $-a_1a_2 + a_2a_1 = 0$. Im Raum gibt es zu einem Vektor eine ganze Ebene von Normalrichtungen,
    also keinen bis auf Vielfache eindeutigen Normalvektor. Normal auf zwei nicht parallele Vektoren steht ihr Kreuzprodukt.
  kernpunkte:
    - Vertauschen und ein Vorzeichen ändern
    - Probe mit dem Skalarprodukt
    - Im Raum Kreuzprodukt für zwei Vektoren
- id: ve-k-projektion
  frage: Was ist die Projektion eines Vektors, und wo braucht man sie?
  antwort: |
    Die Projektion von $\vec a$ auf $\vec b$ ist der „Schatten“ von $\vec a$ auf der Geraden in Richtung $\vec b$:
    $\vec a_b = \frac{\vec a\cdot\vec b}{|\vec b|^2}\vec b$. Der Rest $\vec a - \vec a_b$ steht normal auf $\vec b$. Man braucht sie für
    Höhenfußpunkte, für Kraftanteile wie die Hangabtriebskraft und für die Arbeit, bei der nur der Kraftanteil in
    Wegrichtung zählt.
  kernpunkte:
    - Formel mit |b|² im Nenner
    - Rest steht normal auf b
    - Anwendungen Höhenfußpunkt und Kraftzerlegung
- id: ve-k-kreuzprodukt
  frage: Was liefert das Kreuzprodukt, und warum ist die Reihenfolge wichtig?
  antwort: |
    Für $\vec a, \vec b \in \R^3$ ist $\vec a\times\vec b$ ein Vektor, der auf beiden normal steht. Seine Länge
    $|\vec a|\,|\vec b|\sin\varphi$ ist die Fläche des aufgespannten Parallelogramms, und $\vec a, \vec b, \vec a\times\vec b$ bilden ein
    Rechtssystem. Vertauscht man die Faktoren, dreht sich das Ergebnis um: $\vec b\times\vec a = -\vec a\times\vec b$. Für Normalvektoren
    und Flächen ist das egal, für Orientierungen nicht. Bei parallelen Vektoren ist es der Nullvektor.
  kernpunkte:
    - Normal auf beiden Faktoren
    - Länge ist Parallelogrammfläche
    - Antikommutativ, Rechte-Hand-Regel
- id: ve-k-spat
  frage: Was berechnet das Spatprodukt, und was hat es mit Determinanten zu tun?
  antwort: |
    $|(\vec a\times\vec b)\cdot\vec c|$ ist das Volumen des von $\vec a, \vec b, \vec c$ aufgespannten Spats: Grundfläche $|\vec a\times\vec b|$
    mal Höhe, die Projektion von $\vec c$ auf die Normalrichtung. Es ist gleich dem Betrag der Determinante mit den drei
    Vektoren als Spalten aus Kapitel 3. Ein Tetraeder hat ein Sechstel davon. Ist das Spatprodukt null, liegen die drei
    Vektoren in einer Ebene.
  kernpunkte:
    - Grundfläche mal Höhe
    - Gleich der 3×3-Determinante (Kapitel 3)
    - Null heißt komplanar
- id: ve-k-typen
  frage: Wie entscheidet man, ob ein Term aus Vektoren ein Vektor oder ein Skalar ist?
  antwort: |
    Man bestimmt die Typen von innen nach außen. Vektor plus Vektor, Zahl mal Vektor und Kreuzprodukt ergeben Vektoren.
    Das Skalarprodukt zweier Vektoren und der Betrag ergeben Zahlen. Beispiel: $r(\vec a\cdot\vec b)$ ist ein Skalar,
    $s(\vec a + r\vec b)$ ein Vektor. Nicht definiert sind Zahl plus Vektor, Teilen durch einen Vektor und ein Kreuzprodukt mit
    einer Zahl.
  kernpunkte:
    - Von innen nach außen V oder S zuordnen
    - Skalarprodukt ergibt eine Zahl
    - Nicht definierte Kombinationen nennen
- id: ve-k-linear
  frage: Was bedeutet lineare Abhängigkeit? Gib ein Gegenbeispiel zu „paarweise nicht parallel heißt unabhängig“.
  antwort: |
    Vektoren sind linear abhängig, wenn der Nullvektor eine Linearkombination mit nicht lauter Nullen als Koeffizienten
    ist. Gleichwertig: Einer lässt sich durch die anderen ausdrücken. Zwei abhängige Vektoren sind parallel, drei
    abhängige Vektoren im Raum liegen in einer Ebene, und ihr Spatprodukt ist null. Gegenbeispiel: $\vec e_1$, $\vec e_2$ und
    $\vec e_1 + \vec e_2$ sind paarweise nicht parallel, aber abhängig.
  kernpunkte:
    - Definition mit dem Nullvektor
    - Geometrisch kollinear oder komplanar
    - Gegenbeispiel mit drei Vektoren in einer Ebene
- id: ve-k-physik
  frage: Wie rechnet man mit Kräften als Vektoren, und warum ist die Arbeit ein Skalar?
  antwort: |
    Die Resultierende mehrerer Kräfte ist ihre Vektorsumme. Ihr Betrag ist im Allgemeinen kleiner als die Summe der
    Beträge. Im Gleichgewicht ist die Summe aller Kräfte der Nullvektor, das liefert eine Gleichung je Komponente. Die
    Arbeit einer konstanten Kraft längs eines geraden Weges ist das Skalarprodukt $W = \vec F\cdot\vec s$. Sie ist eine Zahl in
    Joule. Eine Kraft quer zum Weg verrichtet keine Arbeit.
  kernpunkte:
    - Resultierende als Vektorsumme
    - Gleichgewicht heißt Summe gleich Nullvektor
    - Arbeit als Skalarprodukt in Joule
- id: ve-k-komplex
  frage: Was haben komplexe Zahlen mit Vektoren zu tun?
  antwort: |
    Eine komplexe Zahl $a + bi$ entspricht dem Vektor $\begin{pmatrix} a \\ b \end{pmatrix}$ in der Gaußschen Zahlenebene aus Kapitel 15.
    Addition und Subtraktion komplexer Zahlen sind genau die Addition und Subtraktion dieser Vektoren, und der Betrag
    $|a + bi| = \sqrt{a^2 + b^2}$ ist die Länge des Pfeils. Die Multiplikation komplexer Zahlen ist dagegen eine Drehstreckung
    und entspricht weder dem Skalarprodukt noch dem Kreuzprodukt.
  kernpunkte:
    - a + bi entspricht dem Vektor (a, b)
    - Addition und Betrag wie bei Vektoren
    - Multiplikation ist eine Drehstreckung, kein Vektorprodukt
```
