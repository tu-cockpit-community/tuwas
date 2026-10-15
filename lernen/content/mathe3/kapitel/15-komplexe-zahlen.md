---
nummer: 15
titel: Komplexe Zahlen
kurz: Die imaginäre Einheit, Rechnen in algebraischer Form und in Polarform, Drehstreckung, de Moivre, n-te Wurzeln, Polynomgleichungen und Mengen in der Zahlenebene.
teil: B
stunden: 16
pruefungsgewicht: 3
voraussetzungen: [zahlen, gleichungen, trigonometrie, vektoren, analytische-geometrie]
lernziele:
  - mit der imaginären Einheit rechnen, Potenzen von i vereinfachen, Wurzeln aus negativen Zahlen als Vielfache von i schreiben und begründen, warum die Regel √a·√b = √(ab) dabei nicht gilt
  - komplexe Zahlen in algebraischer Form angeben, Real- und Imaginärteil ablesen, als Punkt oder Pfeil in der Gaußschen Zahlenebene darstellen und Gleichungen durch Vergleich von Real- und Imaginärteil lösen
  - komplexe Zahlen in algebraischer Form addieren, subtrahieren und multiplizieren und die Addition als Aneinanderhängen von Pfeilen deuten
  - Konjugierte und Betrag berechnen, beide geometrisch deuten und Quotienten durch Erweitern mit der Konjugierten in die Form a + bi bringen
  - zwischen algebraischer Form, Polarform und Exponentialform sicher umrechnen und dabei den Quadranten richtig berücksichtigen
  - Multiplikation und Division in Polarform als Drehstreckung deuten und Potenzen mit dem Satz von de Moivre berechnen
  - alle Lösungen einer Gleichung zⁿ = w bestimmen und als Ecken eines regelmäßigen n-Ecks zeichnen
  - quadratische Gleichungen und Polynomgleichungen in ℂ lösen, Polynome über ℂ in Linearfaktoren zerlegen und den Fundamentalsatz der Algebra anwenden
  - Mengen komplexer Zahlen, die durch Bedingungen an Betrag, Argument, Real- oder Imaginärteil gegeben sind, in der Zahlenebene zeichnen und beschreiben
---

Die Gleichung $x^2 = -1$ hat keine reelle Lösung. Jede reelle Zahl ergibt quadriert eine Zahl, die
null oder positiv ist. In diesem Kapitel erweitern wir die Zahlen so, dass auch diese Gleichung lösbar
wird. Die neuen Zahlen heißen **komplexe Zahlen**. Das Wort „komplex“ bedeutet hier nicht „kompliziert“,
sondern „zusammengesetzt“: Jede komplexe Zahl setzt sich aus zwei gewöhnlichen reellen Zahlen zusammen.

Du wirst sehen, dass komplexe Zahlen erstaunlich anschaulich sind. Man kann sie als Punkte einer Ebene
zeichnen. Addieren heißt dann Pfeile aneinanderhängen, und Multiplizieren heißt Drehen und Strecken.
Deshalb hängt dieses Kapitel eng mit der Trigonometrie und den Vektoren zusammen.

**Was kommt in der Prüfung?** In der schriftlichen Prüfung zu Mathematik 3 gibt es regelmäßig eine eigene
Aufgabe zu komplexen Zahlen. Ein typisches Muster: Zwei Zahlen $z_1$ und $z_2$ sind gegeben. Du sollst sie
in der Zahlenebene als Pfeile zeichnen und dann Summe, Differenz, Produkt und Quotient berechnen. Das ist
Rechenroutine und bringt sichere Punkte, wenn du sauber arbeitest. Dazu kommen oft Teilaufgaben zur
Polarform, zu hohen Potenzen, zu Wurzeln oder zu quadratischen Gleichungen ohne reelle Lösung.

In der mündlichen Prüfung fragt man gern nach dem Warum. Typische Fragen sind:

- „Warum kann man komplexe Zahlen nicht der Größe nach ordnen?“
- „Was passiert geometrisch bei der Multiplikation?“
- „Wie viele Lösungen hat die Gleichung $z^5 = 1$, und wo liegen sie?“

Auf jede dieser Fragen bekommst du in diesem Kapitel eine Antwort, die du in ganzen Sätzen vortragen kannst.

**Wie dieses Kapitel aufgebaut ist:** Zuerst führen wir die imaginäre Einheit $i$ ein und rechnen mit ihr.
Danach lernst du die algebraische Form $a + bi$ und die vier Grundrechnungsarten. Dann kommt die Polarform,
die eine Zahl durch Länge und Winkel beschreibt. Mit ihr werden Multiplizieren, Potenzieren und
Wurzelziehen einfach. Am Ende lösen wir Polynomgleichungen und zeichnen ganze Mengen von komplexen Zahlen.

:::vorwissen
Du brauchst aus früheren Kapiteln:

- **Quadratische Gleichungen** mit der Lösungsformel und der Diskriminante, also dem Ausdruck unter der
  Wurzel ([Kapitel 2, Abschnitt „Quadratische Gleichungen“](/lernen/mathe3/gleichungen/quadratische-gleichungen)).
- **Binomische Formeln** zum Ausmultiplizieren von Klammern
  ([Kapitel 1, Abschnitt „Terme umformen“](/lernen/mathe3/zahlen/terme-umformen-binomische-formeln-und-faktorisieren)).
- **Sinus und Kosinus** der besonderen Winkel $30°$, $45°$, $60°$ und die Vorzeichen in den vier Quadranten
  ([Kapitel 5, Abschnitt „Besondere Werte und Quadrantenbeziehungen“](/lernen/mathe3/trigonometrie/besondere-werte-und-quadrantenbeziehungen)).
- **Bogenmaß**, also Winkel als Vielfache von $\pi$
  ([Kapitel 5, Abschnitt „Winkel in Grad und im Bogenmaß“](/lernen/mathe3/trigonometrie/winkel-in-grad-und-im-bogenmass)).
- **Vektoren** in der Ebene: addieren, mit einer Zahl multiplizieren und die Länge berechnen
  ([Kapitel 6, Abschnitt „Rechnen mit Vektoren: Addition, Vielfache und Rechengesetze“](/lernen/mathe3/vektoren/rechnen-mit-vektoren-addition-vielfache-und-rechengesetze)).
- Die **Kreisgleichung** mit Mittelpunkt und Radius
  ([Kapitel 7, Abschnitt „Der Kreis“](/lernen/mathe3/analytische-geometrie/der-kreis)).

Die folgende Eingangsdiagnose prüft genau diese Dinge. Wenn du bei einer Frage danebenliegst, lies den
verlinkten Abschnitt noch einmal, bevor du weitermachst.
:::

:::anwendung
Komplexe Zahlen sind in Technik und Informatik ein Standardwerkzeug. In der Elektrotechnik beschreibt man
Wechselströme mit ihnen, weil sich Schwingungen wie drehende Pfeile verhalten. Die Signalverarbeitung, also
das Bearbeiten von Ton, Bild und Funk, rechnet mit der sogenannten Fourier-Transformation durchgehend komplex.
Auch Computergrafik (Drehungen in der Ebene), Regelungstechnik und Quantenmechanik kommen ohne sie nicht aus.
:::

### Eingangsdiagnose

```aufgabe
id: kz-diag-diskriminante
titel: Wie viele reelle Lösungen?
niveau: 1
art: check
angabe: |
  Wie viele reelle Lösungen hat die Gleichung $x^2 - 2x + 10 = 0$?
  Herkunft: [Kapitel 2, „Quadratische Gleichungen“](/lernen/mathe3/gleichungen/quadratische-gleichungen).
teile:
  - typ: auswahl
    optionen:
      - 'keine'
      - 'genau eine'
      - 'genau zwei'
      - 'unendlich viele'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Genau eine Lösung gibt es nur, wenn der Ausdruck unter der Wurzel genau $0$ ist. Rechne ihn aus:
          Mit $p = -2$ und $q = 10$ ist er $\left(\tfrac{p}{2}\right)^2 - q$.
      - wert: 2
        meldung: |
          Viele quadratische Gleichungen haben zwei Lösungen, aber nicht alle. Entscheidend ist das Vorzeichen
          des Ausdrucks unter der Wurzel. Rechne $\left(\tfrac{p}{2}\right)^2 - q$ mit $p = -2$ und $q = 10$ aus.
      - wert: 3
        meldung: |
          Unendlich viele Lösungen hat eine Gleichung nur, wenn sie für jedes $x$ stimmt. Setz $x = 0$ ein:
          Dann steht links $10$, nicht $0$.
hinweise:
  - 'Berechne die Diskriminante $D = \left(\tfrac{p}{2}\right)^2 - q$ mit $p = -2$ und $q = 10$.'
loesung: |
  Mit der kleinen Lösungsformel ist $p = -2$ und $q = 10$. Unter der Wurzel steht
  $D = \left(\tfrac{-2}{2}\right)^2 - 10 = 1 - 10 = -9$.
  ---
  Aus einer negativen Zahl kann man keine reelle Wurzel ziehen. Die Gleichung hat also **keine** reelle Lösung.
  Genau diese Lücke schließen die komplexen Zahlen.
```

```aufgabe
id: kz-diag-binom
titel: Eine Klammer quadrieren
niveau: 1
art: check
angabe: |
  Multipliziere aus: $(3 - 2x)^2$.
  Herkunft: [Kapitel 1, „Terme umformen“](/lernen/mathe3/zahlen/terme-umformen-binomische-formeln-und-faktorisieren).
teile:
  - typ: term
    label: '$(3 - 2x)^2 =$'
    variable: x
    loesung: "9 - 12x + 4x^2"
    fehler:
      - wert: "9 - 4x^2"
        meldung: |
          Du hast nur die beiden Quadrate hingeschrieben. Beim Quadrieren einer Summe oder Differenz entsteht
          zusätzlich das **gemischte Glied** $2\cdot a\cdot b$. Das ist die zweite binomische Formel.
      - wert: "9 + 4x^2"
        meldung: |
          Das gemischte Glied fehlt. Es gilt $(a - b)^2 = a^2 - 2ab + b^2$, nicht $a^2 + b^2$.
hinweise:
  - 'Zweite binomische Formel: $(a - b)^2 = a^2 - 2ab + b^2$ mit $a = 3$ und $b = 2x$.'
loesung: |
  Mit der zweiten binomischen Formel und $a = 3$, $b = 2x$: $a^2 = 9$, $2ab = 2\cdot 3\cdot 2x = 12x$, $b^2 = 4x^2$.
  ---
  Also $(3 - 2x)^2 = 9 - 12x + 4x^2$. Probe mit $x = 1$: links $(3 - 2)^2 = 1$, rechts $9 - 12 + 4 = 1$.
```

```aufgabe
id: kz-diag-cos30
titel: Ein besonderer Kosinuswert
niveau: 1
art: check
angabe: |
  Welchen exakten Wert hat $\cos 30°$?
  Herkunft: [Kapitel 5, „Besondere Werte und Quadrantenbeziehungen“](/lernen/mathe3/trigonometrie/besondere-werte-und-quadrantenbeziehungen).
teile:
  - typ: auswahl
    optionen:
      - '$\tfrac{\sqrt3}{2}$'
      - '$\tfrac12$'
      - '$\tfrac{\sqrt2}{2}$'
      - '$\sqrt3$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          $\tfrac12$ ist $\sin 30°$ (oder $\cos 60°$). Der Kosinus eines kleinen Winkels ist nahe bei $1$,
          also größer als $\tfrac12$.
      - wert: 2
        meldung: |
          $\tfrac{\sqrt2}{2}$ gehört zu $45°$. Dort sind Sinus und Kosinus gleich groß.
      - wert: 3
        meldung: |
          $\sqrt3$ ist größer als $1$. Sinus und Kosinus liegen aber immer zwischen $-1$ und $1$.
          $\sqrt3$ ist der Wert von $\tan 60°$.
hinweise:
  - 'Denk an das halbe gleichseitige Dreieck mit Hypotenuse $2$, kurzer Kathete $1$ und langer Kathete $\sqrt3$.'
loesung: |
  Im halben gleichseitigen Dreieck mit Hypotenuse $2$ liegt am $30°$-Winkel die lange Kathete $\sqrt3$ an.
  ---
  Also $\cos 30° = \frac{\text{Ankathete}}{\text{Hypotenuse}} = \frac{\sqrt3}{2} \approx 0{,}866$.
```

```aufgabe
id: kz-diag-sin210
titel: Sinus im dritten Quadranten
niveau: 1
art: check
angabe: |
  Berechne den exakten Wert von $\sin 210°$.
  Herkunft: [Kapitel 5, „Besondere Werte und Quadrantenbeziehungen“](/lernen/mathe3/trigonometrie/besondere-werte-und-quadrantenbeziehungen).
teile:
  - typ: zahl
    label: '$\sin 210° =$'
    loesung: "sin(inRad(210))"
    anzeige: '-\tfrac12'
    fehler:
      - wert: "1/2"
        meldung: |
          Der Betrag $\tfrac12$ stimmt, aber das Vorzeichen nicht. $210°$ liegt im dritten Quadranten, also unterhalb
          der waagrechten Achse. Dort ist der Sinus negativ.
      - wert: "-sqrt(3)/2"
        meldung: |
          Das wäre $\cos 210°$. Der Bezugswinkel ist $210° - 180° = 30°$, und $\sin 30° = \tfrac12$.
hinweise:
  - 'Der Bezugswinkel ist $210° - 180° = 30°$. Im dritten Quadranten sind Sinus und Kosinus negativ.'
loesung: |
  $210° = 180° + 30°$. Der Punkt auf dem Einheitskreis liegt im dritten Quadranten, wo die $y$-Koordinate negativ ist.
  ---
  Der Betrag ist $\sin 30° = \tfrac12$. Mit dem Vorzeichen: $\sin 210° = -\tfrac12$.
```

```aufgabe
id: kz-diag-vektorbetrag
titel: Länge eines Vektors
niveau: 1
art: check
angabe: |
  Wie lang ist der Vektor $\vec v = \begin{pmatrix} -5 \\ 12 \end{pmatrix}$?
  Herkunft: [Kapitel 6, „Betrag, Abstand und Einheitsvektor“](/lernen/mathe3/vektoren/betrag-abstand-und-einheitsvektor).
teile:
  - typ: zahl
    label: '$|\vec v| =$'
    loesung: "sqrt((-5)^2 + 12^2)"
    anzeige: '13'
    fehler:
      - wert: "7"
        meldung: |
          Du hast die Koordinaten addiert. Die Länge kommt aber aus dem Satz des Pythagoras:
          beide Koordinaten quadrieren, addieren, Wurzel ziehen.
      - wert: "sqrt(119)"
        meldung: |
          $(-5)^2$ ist $+25$, nicht $-25$. Das Quadrat einer negativen Zahl ist positiv.
      - wert: "17"
        meldung: |
          Die Länge ist nicht die Summe der Beträge $5 + 12$. Die Koordinaten sind die Katheten eines
          rechtwinkligen Dreiecks, die Länge ist dessen Hypotenuse.
hinweise:
  - 'Satz des Pythagoras: $|\vec v| = \sqrt{v_1^2 + v_2^2}$.'
loesung: |
  Die Koordinaten sind die Katheten eines rechtwinkligen Dreiecks. Die Länge ist die Hypotenuse.
  ---
  $|\vec v| = \sqrt{(-5)^2 + 12^2} = \sqrt{25 + 144} = \sqrt{169} = 13$.
```

```aufgabe
id: kz-diag-vektoraddition
titel: Vektoren verknüpfen
niveau: 1
art: check
angabe: |
  Berechne $\begin{pmatrix} 2 \\ -1 \end{pmatrix} + 3\cdot\begin{pmatrix} -1 \\ 2 \end{pmatrix}$.
  Herkunft: [Kapitel 6, „Rechnen mit Vektoren: Addition, Vielfache und Rechengesetze“](/lernen/mathe3/vektoren/rechnen-mit-vektoren-addition-vielfache-und-rechengesetze).
teile:
  - typ: vektor
    loesung: ["-1", "5"]
    namen: ["x", "y"]
    fehler:
      - wert: ["1", "1"]
        meldung: |
          Du hast den Faktor $3$ vergessen. Zuerst wird der zweite Vektor mit $3$ multipliziert, das heißt jede
          Koordinate mal $3$. Erst dann wird addiert.
      - wert: ["-6", "-6"]
        meldung: |
          Du hast die Koordinaten miteinander multipliziert. Vektoren werden koordinatenweise **addiert**:
          $x$ zu $x$ und $y$ zu $y$.
hinweise:
  - 'Zuerst $3\cdot\begin{pmatrix} -1 \\ 2 \end{pmatrix} = \begin{pmatrix} -3 \\ 6 \end{pmatrix}$, dann koordinatenweise addieren.'
loesung: |
  Skalarmultiplikation zuerst: $3\cdot\begin{pmatrix} -1 \\ 2 \end{pmatrix} = \begin{pmatrix} -3 \\ 6 \end{pmatrix}$.
  ---
  Koordinatenweise addieren: $\begin{pmatrix} 2 + (-3) \\ -1 + 6 \end{pmatrix} = \begin{pmatrix} -1 \\ 5 \end{pmatrix}$.
```

```aufgabe
id: kz-diag-bogenmass
titel: Grad in Bogenmaß
niveau: 1
art: check
angabe: |
  Rechne $120°$ ins Bogenmaß um. Gib das Ergebnis als Vielfaches von $\pi$ ein (zum Beispiel `3pi/4`).
  Herkunft: [Kapitel 5, „Winkel in Grad und im Bogenmaß“](/lernen/mathe3/trigonometrie/winkel-in-grad-und-im-bogenmass).
teile:
  - typ: zahl
    label: '$120° =$'
    loesung: "120*pi/180"
    anzeige: '\tfrac{2\pi}{3} \approx 2{,}094'
    fehler:
      - wert: "120*180/pi"
        meldung: |
          Du hast mit dem Kehrwert umgerechnet. Vom Grad ins Bogenmaß multipliziert man mit $\frac{\pi}{180°}$,
          denn $180°$ entsprechen genau $\pi$.
      - wert: "3*pi/2"
        meldung: |
          $\tfrac{3\pi}{2}$ sind $270°$. Ein Drittel des Vollkreises ($360°$) sind $120°$, und der Vollkreis ist $2\pi$.
hinweise:
  - '$180°$ entsprechen $\pi$. Also ist $1° = \frac{\pi}{180}$.'
loesung: |
  Weil $180° = \pi$ gilt, multipliziert man den Gradwert mit $\frac{\pi}{180}$.
  ---
  $120\cdot\frac{\pi}{180} = \frac{2\pi}{3} \approx 2{,}094$.
```

```aufgabe
id: kz-diag-kreis
titel: Mittelpunkt und Radius ablesen
niveau: 1
art: check
angabe: |
  Ein Kreis hat die Gleichung $(x - 1)^2 + (y + 2)^2 = 9$. Gib den Mittelpunkt und den Radius an.
  Herkunft: [Kapitel 7, „Der Kreis“](/lernen/mathe3/analytische-geometrie/der-kreis).
teile:
  - typ: vektor
    label: 'Mittelpunkt $M$'
    namen: ["x", "y"]
    loesung: ["1", "-2"]
    fehler:
      - wert: ["-1", "2"]
        meldung: |
          Die Gleichung hat die Form $(x - x_M)^2 + (y - y_M)^2 = r^2$. Aus $(y + 2)$ wird $(y - (-2))$,
          also ist $y_M = -2$. Die Vorzeichen in der Klammer sind umgekehrt zu den Koordinaten.
  - typ: zahl
    label: 'Radius $r$'
    loesung: "sqrt(9)"
    anzeige: '3'
    fehler:
      - wert: "9"
        meldung: |
          Rechts steht $r^2$, nicht $r$. Du musst noch die Wurzel ziehen.
hinweise:
  - 'Vergleiche mit $(x - x_M)^2 + (y - y_M)^2 = r^2$.'
loesung: |
  Die Kreisgleichung lautet $(x - x_M)^2 + (y - y_M)^2 = r^2$. Es ist $y + 2 = y - (-2)$.
  ---
  Also $M = (1 \mid -2)$ und $r^2 = 9$, das heißt $r = 3$.
```

## Die imaginäre Einheit: warum es komplexe Zahlen gibt

```aufgabe
id: kz-check-quadrat
titel: Kann ein Quadrat negativ sein?
niveau: 1
art: check
angabe: |
  Welche reelle Zahl $x$ erfüllt die Gleichung $x^2 = -4$?
  Herkunft: [Kapitel 1, „Potenzen und Wurzeln“](/lernen/mathe3/zahlen/potenzen-und-wurzeln).
teile:
  - typ: auswahl
    optionen:
      - '$x = 2$'
      - '$x = -2$'
      - '$x = 2$ und $x = -2$'
      - 'keine reelle Zahl'
    richtig: [3]
    fehler:
      - wert: 0
        meldung: '$2^2 = 2\cdot 2 = +4$, nicht $-4$.'
      - wert: 1
        meldung: |
          $(-2)^2 = (-2)\cdot(-2) = +4$. Minus mal minus ergibt plus. Das Quadrat einer negativen Zahl ist positiv.
      - wert: 2
        meldung: |
          Beide Zahlen lösen $x^2 = +4$. Hier steht aber $-4$ auf der rechten Seite.
hinweise:
  - 'Überlege, welches Vorzeichen $x^2$ hat, wenn $x$ positiv, negativ oder null ist.'
loesung: |
  Ist $x$ positiv, so ist $x^2 = x\cdot x$ positiv. Ist $x$ negativ, so ist $x\cdot x$ als Produkt zweier negativer Zahlen ebenfalls positiv. Ist $x = 0$, so ist $x^2 = 0$.
  ---
  Ein reelles Quadrat ist also nie negativ. Keine reelle Zahl erfüllt $x^2 = -4$.
```

Die Antwort auf die Frage „Kann ein Quadrat negativ sein?“ ist der Ausgangspunkt dieses Kapitels. Für jede reelle Zahl $x$ gilt
$x^2 \ge 0$. Der Grund: Plus mal plus ist plus, und minus mal minus ist ebenfalls plus. Deshalb haben
Gleichungen wie $x^2 = -4$ oder $x^2 = -1$ in den reellen Zahlen keine Lösung.

### Zahlbereiche werden erweitert, wenn Gleichungen unlösbar sind

Das ist nicht das erste Mal, dass Zahlen „fehlen“. Die Zahlbereiche aus [1.3 Die Zahlenmengen N, Z, Q und R](/lernen/mathe3/zahlen/die-zahlenmengen-n-z-q-und-r)
sind genau so entstanden. Jedes Mal gab es eine einfache Gleichung ohne Lösung, und man hat neue Zahlen dazugenommen.

- In den natürlichen Zahlen $\N = \{0, 1, 2, \dots\}$ hat $x + 5 = 2$ keine Lösung. Die negativen Zahlen in $\Z$ helfen.
- In den ganzen Zahlen $\Z$ hat $3x = 2$ keine Lösung. Die Brüche in $\Q$ helfen.
- In den Bruchzahlen $\Q$ hat $x^2 = 2$ keine Lösung. Die irrationalen Zahlen wie $\sqrt2$ in $\R$ helfen.
- In den reellen Zahlen $\R$ hat $x^2 = -1$ keine Lösung. Hier helfen die komplexen Zahlen $\C$.

```aufgabe
id: kz-check-zahlbereich
titel: Welcher Zahlbereich genügt?
niveau: 1
art: check
angabe: |
  Was ist die kleinste der Zahlenmengen $\N$, $\Z$, $\Q$, $\R$, in der die Gleichung $x^2 = 9$ **und** die Gleichung $5x = 3$ lösbar sind?
  Herkunft: [Kapitel 1, „Die Zahlenmengen N, Z, Q und R“](/lernen/mathe3/zahlen/die-zahlenmengen-n-z-q-und-r).
teile:
  - typ: auswahl
    optionen:
      - '$\N$'
      - '$\Z$'
      - '$\Q$'
      - '$\R$'
    richtig: [2]
    fehler:
      - wert: 0
        meldung: '$x^2 = 9$ hat in $\N$ die Lösung $3$. Aber $5x = 3$ verlangt $x = \tfrac35$, und das ist keine natürliche Zahl.'
      - wert: 1
        meldung: '$\tfrac35$ ist keine ganze Zahl. Für $5x = 3$ braucht man Brüche.'
      - wert: 3
        meldung: '$\R$ genügt zwar, ist aber nicht die kleinste Menge. Die Lösungen $3$, $-3$ und $\tfrac35$ sind alle Brüche.'
hinweise:
  - 'Bestimme die Lösungen beider Gleichungen und prüfe, zu welchen Mengen sie gehören.'
loesung: |
  $x^2 = 9$ hat die Lösungen $3$ und $-3$, $5x = 3$ hat die Lösung $\tfrac35$.
  ---
  Alle drei Zahlen sind Brüche, aber $\tfrac35$ ist nicht ganz. Die kleinste passende Menge ist $\Q$.
```

Bei jedem Schritt bleiben die alten Rechenregeln gültig. Die neuen Zahlen sind keine Spielerei, sondern
schließen eine Lücke. Mit den komplexen Zahlen wird diese Reihe abgeschlossen. In $\C$ ist **jede** Polynomgleichung
vom Grad $1$ oder höher lösbar. Das zeigt die Lektion
[15.8 Polynomgleichungen und der Fundamentalsatz der Algebra](/lernen/mathe3/komplexe-zahlen/polynomgleichungen-und-der-fundamentalsatz-der-algebra).

### Die Definition der imaginären Einheit

Die Idee ist kühn und einfach. Wir nehmen eine neue Zahl dazu, die die Gleichung $x^2 = -1$ löst. Wir
nennen sie $i$. Außerdem verlangen wir, dass die gewohnten Rechengesetze weiter gelten. Das sind das
**Kommutativgesetz** (die Reihenfolge beim Addieren und Multiplizieren ist egal), das **Assoziativgesetz**
(die Klammerung ist egal) und das **Distributivgesetz** (man darf ausmultiplizieren).

:::definition[Imaginäre Einheit]
Die **imaginäre Einheit** $i$ ist eine Zahl mit der Eigenschaft
$$i^2 = -1.$$
Mit $i$ rechnet man nach den gewohnten Rechengesetzen. Jedes $i^2$, das dabei entsteht, ersetzt man durch $-1$.
:::

Das Wort „imaginär“ heißt „eingebildet“. Der Name stammt aus einer Zeit, in der man diesen Zahlen
misstraute. Heute ist er nur noch ein Name. Du wirst bald sehen, dass man $i$ ganz konkret als Punkt in einer
Ebene zeichnen kann.

:::beispiel[Zwei Lösungen von x² = −1]
1. $i$ löst die Gleichung $x^2 = -1$, denn $i^2 = -1$ nach Definition.
2. Auch $-i$ löst sie: $(-i)^2 = (-1)^2\cdot i^2 = 1\cdot(-1) = -1$.
3. Die Gleichung $x^2 = -1$ hat also die beiden Lösungen $i$ und $-i$, so wie $x^2 = 1$ die beiden Lösungen $1$ und $-1$ hat.
:::

**Nichtbeispiel:** $i$ ist **keine** reelle Zahl. Sie liegt nirgends auf der Zahlengeraden. Sie ist weder
positiv noch negativ. Warum das so sein muss, begründest du in der Übung „Begründen statt rechnen“ am Ende dieser Lektion.

```reflexion
frage: Wir haben die Zahl $i$ einfach „erfunden“. Warum ist das kein mathematischer Trick, der irgendwann zu Widersprüchen führt?
antwort: |
  Mit den negativen Zahlen war es genauso. Auch $-3$ ist eine „erfundene“ Zahl, die man braucht, damit $x + 5 = 2$ eine Lösung hat.
  Entscheidend ist, dass die neuen Zahlen mit den alten Regeln widerspruchsfrei zusammenpassen. Das ist bei $i$ der Fall:
  In der Lektion [15.2 Algebraische Form und Gaußsche Zahlenebene](/lernen/mathe3/komplexe-zahlen/algebraische-form-und-gausssche-zahlenebene) sehen wir, dass jede komplexe Zahl einfach ein Paar aus zwei reellen Zahlen ist, also ein Punkt der Ebene.
  Für solche Paare kann man die Rechenregeln ganz konkret festlegen und nachprüfen. Eine Einschränkung gibt es aber:
  Die Ordnung „größer als“ lässt sich nicht übertragen.
```

### Wurzeln aus negativen Zahlen

Mit $i$ kann man jetzt jede Gleichung der Form $x^2 = -a$ mit einer positiven Zahl $a$ lösen. Probiere
$x = i\sqrt a$ aus: $(i\sqrt a)^2 = i^2\cdot(\sqrt a)^2 = (-1)\cdot a = -a$. Ebenso löst $x = -i\sqrt a$ die
Gleichung. Man vereinbart deshalb für positive Zahlen $a$:
$$\sqrt{-a} = i\sqrt a.$$
Dabei ist $\sqrt a$ die gewöhnliche reelle Wurzel. Zum Beispiel ist $\sqrt{-16} = i\sqrt{16} = 4i$.

:::beispiel[Eine reine Quadratgleichung]
Löse $x^2 + 9 = 0$.

1. Umstellen: $x^2 = -9$.
2. Die Lösungen sind $x = \pm i\sqrt9 = \pm 3i$. Das Zeichen $\pm$ liest man „plus oder minus“.
3. Probe für $x = 3i$: $(3i)^2 = 3^2\cdot i^2 = 9\cdot(-1) = -9$. Die Probe für $-3i$ geht genauso.

Die Lösungen sind $x_1 = 3i$ und $x_2 = -3i$.
:::

:::beispiel[Wurzel, die sich nicht ganz ziehen lässt]
Löse $x^2 + 12 = 0$.

1. Umstellen: $x^2 = -12$, also $x = \pm i\sqrt{12}$.
2. Teilweise Wurzel ziehen wie in [1.9 Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln): $\sqrt{12} = \sqrt{4\cdot 3} = 2\sqrt3$.
3. Ergebnis: $x = \pm 2\sqrt3\, i \approx \pm 3{,}464\, i$.
:::

:::achtung[Das Wurzelgesetz gilt nicht für negative Zahlen]
**Falsch:** $\sqrt{-4}\cdot\sqrt{-9} = \sqrt{(-4)\cdot(-9)} = \sqrt{36} = 6$.

**Richtig:** Zuerst jede Wurzel einzeln mit $i$ schreiben, dann multiplizieren:
$\sqrt{-4}\cdot\sqrt{-9} = 2i\cdot 3i = 6i^2 = -6$.

Die Regel $\sqrt a\cdot\sqrt b = \sqrt{ab}$ ist sicher richtig, wenn $a \ge 0$ und $b \ge 0$ sind. Sind $a$ und $b$
beide negativ, ist sie falsch. Wer sie trotzdem anwendet,
kann sogar „beweisen“, dass $-1 = 1$ ist: $-1 = i\cdot i = \sqrt{-1}\cdot\sqrt{-1} = \sqrt{(-1)(-1)} = \sqrt1 = 1$.
Sicher ist nur die Definition $i^2 = -1$.
:::

### Potenzen von i

Was ergibt $i^3$ oder $i^{27}$? Wir rechnen die ersten Potenzen aus. Jede Zeile verwendet die vorige.

- $i^0 = 1$, wie bei jeder Zahl ungleich null.
- $i^1 = i$.
- $i^2 = -1$ nach Definition.
- $i^3 = i^2\cdot i = (-1)\cdot i = -i$.
- $i^4 = i^3\cdot i = (-i)\cdot i = -i^2 = -(-1) = 1$.
- $i^5 = i^4\cdot i = 1\cdot i = i$.

Ab $i^4 = 1$ wiederholt sich alles. Die Werte laufen immer im Kreis: $1,\ i,\ -1,\ -i,\ 1,\ i,\ \dots$
Man sagt: Die Potenzen von $i$ sind **periodisch mit Periode 4**. Das Bild zeigt die vier Werte. Schon hier
deutet sich an, dass Multiplizieren mit $i$ etwas mit Drehen zu tun hat.

```plot
x: [-1.6, 1.6]
y: [-1.4, 1.4]
gleich: true
kurven:
  - { x: "cos(t)", y: "sin(t)", t: [0, "2*pi"], farbe: 0, gestrichelt: true }
punkte:
  - { x: 1, y: 0, label: "i⁰ = 1", farbe: 1 }
  - { x: 0, y: 1, label: "i¹ = i", farbe: 1 }
  - { x: -1, y: 0, label: "i² = −1", farbe: 1 }
  - { x: 0, y: -1, label: "i³ = −i", farbe: 1 }
beschriftung: Die Potenzen von i liegen auf einem Kreis mit Radius 1. Jede weitere Multiplikation mit i führt zum nächsten Punkt, eine Vierteldrehung gegen den Uhrzeigersinn weiter. Nach vier Schritten ist man wieder bei 1.
```

:::beispiel[Eine hohe Potenz von i]
Berechne $i^{27}$.

1. Teile den Exponenten mit Rest durch $4$: $27 = 4\cdot 6 + 3$. Der Rest ist $3$.
2. Zerlege die Potenz mit den Potenzregeln: $i^{27} = i^{4\cdot 6 + 3} = (i^4)^6\cdot i^3$.
3. Weil $i^4 = 1$ ist, bleibt $(i^4)^6 = 1^6 = 1$. Also $i^{27} = i^3 = -i$.
:::

:::beispiel[Der Kehrwert von i]
Berechne $\dfrac1i$.

1. Gesucht ist die Zahl, die mit $i$ multipliziert $1$ ergibt.
2. Probiere $-i$: $i\cdot(-i) = -i^2 = -(-1) = 1$.
3. Also ist $\dfrac1i = -i$. Genauso gilt $i^{-1} = -i$, denn eine negative Hochzahl bedeutet den Kehrwert.
:::

:::merke[Rezept: Potenzen von i]
1. Teile die Hochzahl $n$ mit Rest durch $4$. Der Rest $r$ ist eine der Zahlen $0, 1, 2, 3$.
2. Dann gilt $i^n = i^r$. Es ist $i^0 = 1$, $i^1 = i$, $i^2 = -1$ und $i^3 = -i$.
3. Bei negativer Hochzahl wählst du den Rest ebenfalls aus $0$ bis $3$. Beispiel: $-1 = 4\cdot(-1) + 3$, also $i^{-1} = i^3 = -i$.
:::

:::achtung[Rest, nicht Quotient]
**Falsch:** „$14 : 4 = 3$ Rest $2$, also ist $i^{14} = i^3 = -i$.“

**Richtig:** Entscheidend ist der **Rest** $2$, nicht der Quotient $3$. Denn $i^{14} = (i^4)^3\cdot i^2 = 1\cdot i^2 = -1$.
Der Quotient zählt nur, wie viele volle Runden zu je vier Schritten gemacht werden. Volle Runden ändern nichts.
:::

Komplexe Zahlen haben übrigens eine spannende Geschichte. Im 16. Jahrhundert stieß der italienische Mathematiker
Gerolamo Cardano bei Lösungsformeln für Gleichungen dritten Grades auf Wurzeln aus negativen Zahlen. Am Ende kamen
reelle Ergebnisse heraus, aber unterwegs musste man mit diesen „unmöglichen“ Ausdrücken rechnen. Erst um 1800 haben
Gauß und andere gezeigt, wie man sie sauber als Punkte einer Ebene versteht.

### Übungen

```aufgabe
id: kz-wurzel-negativ
titel: Wurzeln aus negativen Zahlen
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Schreibe als Vielfaches von $i$:

  a) $\sqrt{-25}$

  b) $\sqrt{-7}$ (exakt oder auf drei Nachkommastellen gerundet)
teile:
  - typ: komplex
    label: 'a) $\sqrt{-25} =$'
    loesung: "i*sqrt(25)"
    anzeige: '5i'
    fehler:
      - wert: "-5"
        meldung: |
          $(-5)^2 = +25$, nicht $-25$. Eine reelle Zahl hat nie ein negatives Quadrat. Die Wurzel aus einer negativen
          Zahl ist deshalb ein Vielfaches von $i$.
      - wert: "25i"
        meldung: 'Du hast das $i$ vorgezogen, aber die Wurzel aus $25$ vergessen. Es gilt $\sqrt{-a} = i\sqrt a$.'
  - typ: komplex
    label: 'b) $\sqrt{-7} =$'
    loesung: "i*sqrt(7)"
    anzeige: '\sqrt7\, i \approx 2{,}646i'
    fehler:
      - wert: "7i"
        meldung: 'Die Wurzel aus $7$ fehlt. Es gilt $\sqrt{-7} = i\cdot\sqrt7$.'
hinweise:
  - 'Für positives $a$ gilt $\sqrt{-a} = i\sqrt a$.'
loesung: |
  Ansatz: Für eine positive Zahl $a$ ist $\sqrt{-a} = i\sqrt a$. Probe dafür: $(i\sqrt a)^2 = i^2\cdot a = -a$.
  ---
  a) $\sqrt{-25} = i\sqrt{25} = 5i$. Probe: $(5i)^2 = 25i^2 = -25$.
  ---
  b) $\sqrt{-7} = i\sqrt7 \approx 2{,}646\,i$. Probe: $(\sqrt7\, i)^2 = 7i^2 = -7$.
```

```aufgabe
id: kz-potenz-i
titel: Potenzen von i
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Berechne $i^{38}$ und $i^{101} + i^{102}$.
teile:
  - typ: komplex
    label: '$i^{38}$'
    loesung: "-1"
    anzeige: '-1'
    fehler:
      - wert: "i"
        meldung: |
          $38 : 4 = 9$ Rest $2$. Du hast mit dem Quotienten $9$ weitergerechnet. Entscheidend ist der **Rest**, denn volle
          Viererrunden ergeben $(i^4)^9 = 1$.
      - wert: "1"
        meldung: '$38$ ist nicht durch $4$ teilbar. Bestimme den Rest bei der Division durch $4$.'
  - typ: komplex
    label: '$i^{101} + i^{102}$'
    loesung: "i^101 + i^102"
    anzeige: '-1 + i'
    fehler:
      - wert: "1+i"
        meldung: '$102 = 4\cdot 25 + 2$. Der Rest ist $2$, also ist $i^{102} = i^2 = -1$, nicht $+1$.'
hinweise:
  - Die Potenzen von $i$ wiederholen sich mit Periode $4$. Bestimme den Rest des Exponenten bei Division durch $4$.
loesung: |
  Ansatz: Die Potenzen von $i$ wiederholen sich alle vier Schritte. Es zählt nur der Rest der Hochzahl bei Division durch $4$.
  ---
  $38 = 4\cdot 9 + 2$, also $i^{38} = i^2 = -1$.
  ---
  $101 = 4\cdot 25 + 1$ und $102 = 4\cdot 25 + 2$. Also $i^{101} + i^{102} = i + (-1) = -1 + i$.
```

```aufgabe
id: kz-reine-quadratgleichung
titel: Eine reine Quadratgleichung
niveau: 2
lernziel: 0
kompetenz: rechnen
angabe: |
  Löse $x^2 + 49 = 0$ in $\C$.
teile:
  - typ: komplex
    label: 'Lösung $x_1$ mit Pluszeichen vor dem $i$'
    loesung: "7i"
    fehler:
      - wert: "7"
        meldung: |
          $7^2 = 49$, aber gesucht ist $x^2 = -49$. Prüfe: $7^2 + 49 = 98 \ne 0$. Das $i$ fehlt.
      - wert: "49i"
        meldung: 'Probe: $(49i)^2 = 2401\cdot(-1)$, viel zu groß. Du musst noch die Wurzel aus $49$ ziehen.'
  - typ: komplex
    label: 'Lösung $x_2$ mit Minuszeichen vor dem $i$'
    loesung: "-7i"
    fehler:
      - wert: "-7"
        meldung: '$(-7)^2 = 49$, also $(-7)^2 + 49 = 98$. Das $i$ fehlt.'
hinweise:
  - 'Stelle zuerst nach $x^2$ um.'
  - 'Aus $x^2 = -a$ mit $a > 0$ folgt $x = \pm i\sqrt a$.'
loesung: |
  Ansatz: Die Gleichung enthält nur $x^2$, also stellen wir nach $x^2$ um und ziehen die Wurzel.
  ---
  $x^2 = -49$. Mit $\sqrt{-49} = i\sqrt{49} = 7i$ folgt $x = \pm 7i$.
  ---
  Probe: $(7i)^2 + 49 = 49i^2 + 49 = -49 + 49 = 0$. Ebenso $(-7i)^2 = 49i^2 = -49$. Die Lösungen sind $x_1 = 7i$ und $x_2 = -7i$.
```

```aufgabe
id: kz-wurzelgesetz-fehler
titel: Fehler finden beim Wurzelgesetz
niveau: 2
lernziel: 0
kompetenz: begruenden
angabe: |
  Ein Mitschüler rechnet:
  $$\sqrt{-2}\cdot\sqrt{-8} = \sqrt{(-2)\cdot(-8)} = \sqrt{16} = 4.$$
  a) Was ist an der Rechnung falsch?

  b) Berechne $\sqrt{-2}\cdot\sqrt{-8}$ richtig.
teile:
  - typ: auswahl
    label: 'a) Der Fehler'
    optionen:
      - 'Er wendet $\sqrt a\cdot\sqrt b = \sqrt{ab}$ an, obwohl $a$ und $b$ beide negativ sind. In diesem Fall ist die Regel falsch.'
      - '$\sqrt{16}$ ist nicht $4$, sondern $\pm 4$.'
      - '$(-2)\cdot(-8)$ ist $-16$, nicht $16$.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          $\sqrt{16}$ bezeichnet immer die **positive** Zahl, deren Quadrat $16$ ist, also $4$. Das $\pm$ entsteht
          erst beim Lösen einer Gleichung wie $x^2 = 16$. Der Fehler liegt einen Schritt früher.
      - wert: 2
        meldung: 'Minus mal minus ergibt plus: $(-2)\cdot(-8) = +16$. Dieser Schritt stimmt.'
  - typ: komplex
    label: 'b) $\sqrt{-2}\cdot\sqrt{-8} =$'
    loesung: "(i*sqrt(2))*(i*sqrt(8))"
    anzeige: '-4'
    fehler:
      - wert: "4"
        meldung: |
          Das ist das Ergebnis der falschen Rechnung. Schreibe zuerst $\sqrt{-2} = i\sqrt2$ und $\sqrt{-8} = i\sqrt8$.
          Beim Multiplizieren entsteht $i^2$.
hinweise:
  - 'Für welche Zahlen gilt die Regel $\sqrt a\cdot\sqrt b = \sqrt{ab}$?'
  - 'Schreibe jede Wurzel einzeln als Vielfaches von $i$ und multipliziere dann.'
loesung: |
  Ansatz: Wir prüfen, welche Regel benutzt wurde, und ob sie hier erlaubt ist.
  ---
  a) Die Regel $\sqrt a\cdot\sqrt b = \sqrt{ab}$ ist sicher richtig, wenn $a \ge 0$ und $b \ge 0$ sind. Sind beide Zahlen negativ,
  ist sie falsch. Hier sind beide Zahlen negativ. Der erste Gleichheitsschritt ist deshalb falsch.
  ---
  b) Richtig ist: $\sqrt{-2}\cdot\sqrt{-8} = i\sqrt2\cdot i\sqrt8 = i^2\sqrt{16} = (-1)\cdot 4 = -4$.
  Dabei durften wir $\sqrt2\cdot\sqrt8 = \sqrt{16}$ rechnen, weil $2$ und $8$ positiv sind.
```

```aufgabe
id: kz-kehrwert-i
titel: Negative Potenzen von i
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Berechne $\dfrac{1}{i}$ und $i^{-3}$.
teile:
  - typ: komplex
    label: '$\dfrac1i$'
    loesung: "1/i"
    anzeige: '-i'
    fehler:
      - wert: "i"
        meldung: 'Probe: $i\cdot i = i^2 = -1$, nicht $1$. Der Kehrwert von $i$ muss mit $i$ multipliziert $1$ ergeben.'
  - typ: komplex
    label: '$i^{-3}$'
    loesung: "i^(-3)"
    anzeige: 'i'
    fehler:
      - wert: "-i"
        meldung: |
          $i^{-3}$ ist der Kehrwert von $i^3 = -i$, nicht $i^3$ selbst. Prüfe, welche Zahl mit $-i$ multipliziert $1$ ergibt.
hinweise:
  - 'Gesucht ist bei $\frac1i$ die Zahl $w$ mit $i\cdot w = 1$.'
  - 'Es gilt $i^{-3} = \dfrac{1}{i^3}$, und $i^3 = -i$.'
loesung: |
  Ansatz: Eine negative Hochzahl bedeutet den Kehrwert. Den Kehrwert finden wir über die Frage „Was ergibt mal $i$ genau $1$?“.
  ---
  $i\cdot(-i) = -i^2 = 1$, also $\frac1i = -i$.
  ---
  $i^{-3} = \frac{1}{i^3} = \frac{1}{-i} = -\frac1i = -(-i) = i$.
  Kontrolle mit dem Rest-Rezept: $-3 = 4\cdot(-1) + 1$, also $i^{-3} = i^1 = i$.
```

```aufgabe
id: kz-polynom-an-i
titel: Ein Polynom an der Stelle i
niveau: 2
lernziel: 0
kompetenz: rechnen
angabe: |
  Gegeben ist $p(z) = z^4 + z^3 + 2z^2 + z + 1$. Berechne $p(i)$ und $p(-i)$.
teile:
  - typ: komplex
    label: '$p(i)$'
    loesung: "i^4 + i^3 + 2*i^2 + i + 1"
    anzeige: '0'
    fehler:
      - wert: "2i"
        meldung: '$i^3 = i^2\cdot i = -i$, nicht $+i$. Mit $i^3 = i$ heben sich die $i$-Terme nicht auf.'
      - wert: "-2"
        meldung: '$i^4 = (i^2)^2 = (-1)^2 = +1$, nicht $-1$.'
  - typ: komplex
    label: '$p(-i)$'
    loesung: "(-i)^4 + (-i)^3 + 2*(-i)^2 + (-i) + 1"
    anzeige: '0'
    fehler:
      - wert: "-2i"
        meldung: '$(-i)^3 = (-1)^3\cdot i^3 = (-1)\cdot(-i) = +i$. Das Vorzeichen dreht sich zweimal.'
hinweise:
  - 'Berechne zuerst $i^2$, $i^3$ und $i^4$ einzeln.'
  - 'Für $-i$ gilt $(-i)^n = (-1)^n\cdot i^n$.'
gefuehrt:
  - text: Welchen Wert hat $i^4$?
    teil:
      typ: zahl
      loesung: "1"
      fehler:
        - wert: "-1"
          meldung: '$i^4 = i^2\cdot i^2 = (-1)\cdot(-1) = +1$.'
    erklaerung: '$i^4 = (i^2)^2 = (-1)^2 = 1$.'
  - text: Welchen Wert hat $i^3$?
    teil:
      typ: komplex
      loesung: "-i"
      fehler:
        - wert: "i"
          meldung: '$i^3 = i^2\cdot i = (-1)\cdot i$.'
    erklaerung: '$i^3 = i^2\cdot i = -i$.'
  - text: Welchen Wert hat $2i^2$?
    teil:
      typ: zahl
      loesung: "-2"
      fehler:
        - wert: "2"
          meldung: '$i^2 = -1$, also $2i^2 = 2\cdot(-1)$.'
    erklaerung: '$2i^2 = 2\cdot(-1) = -2$.'
  - text: Setze alles in $p(i) = i^4 + i^3 + 2i^2 + i + 1$ ein und fasse zusammen. Was ergibt $p(i)$?
    teil:
      typ: komplex
      loesung: "0"
    erklaerung: '$p(i) = 1 + (-i) + (-2) + i + 1$. Reelle Teile: $1 - 2 + 1 = 0$. Teile mit $i$: $-i + i = 0$. Also $p(i) = 0$.'
loesung: |
  Ansatz: Wir setzen $z = i$ ein und ersetzen jede Potenz von $i$ durch $1$, $i$, $-1$ oder $-i$.
  ---
  $i^4 = 1$, $i^3 = -i$, $2i^2 = -2$. Also $p(i) = 1 - i - 2 + i + 1 = 0$.
  ---
  Für $-i$: $(-i)^4 = 1$, $(-i)^3 = -i^3 = i$, $2(-i)^2 = 2i^2 = -2$. Also $p(-i) = 1 + i - 2 - i + 1 = 0$.
  ---
  Beide Zahlen $i$ und $-i$ sind Nullstellen von $p$. Dass sie als Paar auftreten, ist kein Zufall. Den Grund erklärt die Lektion [15.8 Polynomgleichungen und der Fundamentalsatz der Algebra](/lernen/mathe3/komplexe-zahlen/polynomgleichungen-und-der-fundamentalsatz-der-algebra).
```

```aufgabe
id: kz-potenzsumme
titel: Eine lange Summe von Potenzen
niveau: 3
lernziel: 0
kompetenz: verstehen
angabe: |
  Berechne die Summe
  $$S = i + i^2 + i^3 + \dots + i^{2026}.$$
  Gib das Ergebnis in der Form $a + bi$ an.
teile:
  - typ: komplex
    label: '$S =$'
    loesung: "i*(1 - i^2026)/(1 - i)"
    anzeige: '-1 + i'
    fehler:
      - wert: "0"
        meldung: |
          Je vier aufeinanderfolgende Potenzen heben sich auf. Aber $2026$ ist nicht durch $4$ teilbar.
          Nach der letzten vollen Vierergruppe bleiben noch Summanden übrig.
      - wert: "i"
        meldung: '$2026 = 4\cdot 506 + 2$. Es bleiben **zwei** Summanden übrig, nämlich $i^{2025}$ und $i^{2026}$.'
hinweise:
  - 'Berechne $i + i^2 + i^3 + i^4$. Was fällt auf?'
  - 'Teile die Summe in Vierergruppen auf. Wie viele volle Gruppen gibt es bis $i^{2024}$, und was bleibt übrig?'
loesung: |
  Ansatz: Die Potenzen von $i$ wiederholen sich mit Periode $4$. Wir prüfen, was eine Gruppe von vier Summanden ergibt.
  ---
  $i + i^2 + i^3 + i^4 = i - 1 - i + 1 = 0$. Jede Gruppe von vier aufeinanderfolgenden Potenzen ergibt also $0$.
  ---
  $2024 = 4\cdot 506$. Die Summanden $i^1$ bis $i^{2024}$ bilden $506$ volle Gruppen mit Summe $0$.
  ---
  Übrig bleiben $i^{2025} + i^{2026}$. Wegen $2025 = 4\cdot 506 + 1$ und $2026 = 4\cdot 506 + 2$ ist das $i + (-1)$.
  ---
  Ergebnis: $S = -1 + i$. Kontrolle mit der Summenformel für geometrische Reihen aus
  [8.6 Endliche geometrische Reihen](/lernen/mathe3/folgen-reihen/endliche-geometrische-reihen) (erstes Glied $i$, Faktor $q = i$, $2026$ Glieder):
  $S = i\cdot\frac{1 - i^{2026}}{1 - i}$. Wegen $i^{2026} = i^2 = -1$ ist der Zähler $1 - (-1) = 2$, also $S = \frac{2i}{1 - i}$.
  Erweitern mit $1 + i$ ergibt $S = \frac{2i(1 + i)}{(1 - i)(1 + i)} = \frac{2i + 2i^2}{2} = \frac{-2 + 2i}{2} = -1 + i$.
```

```aufgabe
id: kz-pruefung-ordnung
titel: Begründen statt rechnen
niveau: 3
lernziel: 0
kompetenz: begruenden
angabe: |
  In $\R$ gilt: Für jede Zahl $x \ne 0$ ist $x^2 > 0$. Diese Regel folgt aus den Ordnungsregeln für „$<$“.

  Begründe damit, warum man auf $\C$ keine Ordnung „$<$“ einführen kann, die dieselben Regeln wie in $\R$ erfüllt.
  Begründe insbesondere, warum $i$ weder positiv noch negativ sein kann.
teile:
  - typ: text
    muster: |
      Angenommen, es gäbe so eine Ordnung. Dann wäre jedes Quadrat einer Zahl ungleich null positiv.
      Insbesondere wäre $1 = 1^2 > 0$ und $-1 = i^2 > 0$. Addiert man beide Ungleichungen, folgt $0 = 1 + (-1) > 0$.
      Das ist ein Widerspruch. Also gibt es keine solche Ordnung. Genauso direkt: Wäre $i > 0$ oder $i < 0$, dann wäre
      $i^2 > 0$, aber $i^2 = -1 < 0$. Komplexe Zahlen vergleicht man deshalb nur über ihre Beträge, also ihre Abstände vom Nullpunkt.
hinweise:
  - 'Was müsste nach der Regel „Quadrate sind positiv“ für $i^2$ gelten?'
  - 'Vergleiche das mit $i^2 = -1$ und mit $1^2 = 1$. Addiere die beiden Ungleichungen.'
loesung: |
  Ansatz: Wir nehmen das Gegenteil an, also dass es eine solche Ordnung gibt. Daraus leiten wir einen Widerspruch her.
  Das heißt Widerspruchsbeweis.
  ---
  Mit den Regeln aus $\R$ wäre jedes Quadrat einer Zahl ungleich null positiv. Also $1 = 1^2 > 0$ **und** $-1 = i^2 > 0$.
  ---
  Addiert man beide Ungleichungen, folgt $1 + (-1) > 0$, also $0 > 0$. Das ist unmöglich.
  ---
  Ergebnis: Es gibt keine solche Ordnung. Insbesondere ist $i$ weder positiv noch negativ, denn in beiden Fällen wäre $i^2 > 0$.
  Ausdrücke wie „$z_1 < z_2$“ haben für komplexe Zahlen keinen Sinn. Vergleichen kann man nur Beträge, etwa $|z_1| < |z_2|$.
  Der Betrag $|z|$ ist der Abstand der Zahl $z$ vom Nullpunkt. Er ist eine reelle Zahl und wird in der Lektion [15.4 Konjugierte, Betrag und Division](/lernen/mathe3/komplexe-zahlen/konjugierte-betrag-und-division) genau eingeführt.
```

## Algebraische Form und Gaußsche Zahlenebene

```aufgabe
id: kz-check-quadrant
titel: Ein Punkt im Koordinatensystem
niveau: 1
art: check
angabe: |
  In welchem Quadranten liegt der Punkt $P = (-3 \mid 2)$? Die Quadranten werden gegen den Uhrzeigersinn
  nummeriert, beginnend rechts oben.
  Herkunft: [Kapitel 6, „Was ist ein Vektor? Pfeile, Punkte und Koordinaten“](/lernen/mathe3/vektoren/was-ist-ein-vektor-pfeile-punkte-und-koordinaten).
teile:
  - typ: auswahl
    optionen:
      - '1. Quadrant (rechts oben)'
      - '2. Quadrant (links oben)'
      - '3. Quadrant (links unten)'
      - '4. Quadrant (rechts unten)'
    richtig: [1]
    fehler:
      - wert: 3
        meldung: |
          Du hast die Koordinaten vertauscht. Die erste Koordinate $-3$ gibt die waagrechte Richtung an
          (nach links), die zweite Koordinate $2$ die senkrechte (nach oben).
      - wert: 2
        meldung: 'Die zweite Koordinate ist $+2$. Der Punkt liegt also **oberhalb** der waagrechten Achse.'
      - wert: 0
        meldung: 'Die erste Koordinate ist $-3$. Der Punkt liegt also **links** der senkrechten Achse.'
hinweise:
  - 'Die erste Koordinate sagt „links oder rechts“, die zweite „oben oder unten“.'
loesung: |
  Die erste Koordinate $-3$ ist negativ: Der Punkt liegt links. Die zweite Koordinate $2$ ist positiv: Er liegt oben.
  ---
  Links oben ist der 2. Quadrant.
```

Mit der imaginären Einheit $i$ allein kommt man nicht weit. Sobald wir $i$ mit reellen Zahlen
verknüpfen, entstehen Ausdrücke wie $3 + 2i$ oder $-1 - 4i$. Das sind die komplexen Zahlen. Jede von ihnen
besteht aus zwei reellen Zahlen: einem Teil ohne $i$ und einem Teil, der mit $i$ multipliziert wird.

:::definition[Komplexe Zahl, Realteil, Imaginärteil]
Eine **komplexe Zahl** ist ein Ausdruck der Form
$$z = a + b\,i \qquad\text{mit reellen Zahlen } a \text{ und } b.$$
Diese Schreibweise heißt **algebraische Form** (oder kartesische Form). Dabei heißt
$a = \operatorname{Re}(z)$ der **Realteil** und $b = \operatorname{Im}(z)$ der **Imaginärteil** von $z$.
Die Menge aller komplexen Zahlen heißt $\C$.
:::

Wichtig: Der Imaginärteil ist die **reelle** Zahl $b$ vor dem $i$, nicht das Produkt $bi$. Die Abkürzungen
$\operatorname{Re}$ und $\operatorname{Im}$ kommen von „reell“ und „imaginär“.

:::beispiel[Real- und Imaginärteil ablesen]
- $z = 4 - 3i$: Es ist $z = 4 + (-3)\,i$, also $\operatorname{Re}(z) = 4$ und $\operatorname{Im}(z) = -3$.
- $z = -2i$: Es ist $z = 0 + (-2)\,i$, also $\operatorname{Re}(z) = 0$ und $\operatorname{Im}(z) = -2$.
- $z = 5$: Es ist $z = 5 + 0\cdot i$, also $\operatorname{Re}(z) = 5$ und $\operatorname{Im}(z) = 0$.
- $z = 3i^2 + 2$: Hier muss man zuerst vereinfachen. Wegen $i^2 = -1$ ist $z = -3 + 2 = -1$. Also $\operatorname{Re}(z) = -1$ und $\operatorname{Im}(z) = 0$.
:::

Zwei Sonderfälle haben eigene Namen:

- Ist $b = 0$, dann ist $z = a$ eine gewöhnliche reelle Zahl. Jede reelle Zahl ist also auch eine komplexe Zahl.
  Man schreibt $\R \subset \C$ und liest das als „$\R$ ist eine Teilmenge von $\C$“.
- Ist $a = 0$ und $b \ne 0$, dann heißt $z = bi$ **rein imaginär**. Beispiele sind $2i$, $-i$ und $\sqrt3\, i$.

**Nichtbeispiel:** $z = 0$ ist **nicht** rein imaginär, denn hier ist auch $b = 0$. Und $\frac{2 + i}{1 - i}$ ist
zwar eine komplexe Zahl, steht aber **nicht** in algebraischer Form. Wie man solche Brüche in die Form $a + bi$
bringt, lernst du in der Lektion [15.4 Konjugierte, Betrag und Division](/lernen/mathe3/komplexe-zahlen/konjugierte-betrag-und-division).

:::achtung[Der Imaginärteil enthält kein i]
**Falsch:** „$\operatorname{Im}(4 - 3i) = -3i$“.

**Richtig:** $\operatorname{Im}(4 - 3i) = -3$. Der Imaginärteil ist die reelle Zahl, mit der $i$ multipliziert wird.
Real- und Imaginärteil sind **beide** reelle Zahlen. Das ist wichtig, wenn man mit ihnen Gleichungen aufstellt.
:::

### Die Gaußsche Zahlenebene

Eine komplexe Zahl $a + bi$ ist durch das Zahlenpaar $(a \mid b)$ vollständig festgelegt. Ein Zahlenpaar kann man
als Punkt in einem Koordinatensystem zeichnen. Genau das tun wir:

- Waagrecht tragen wir den Realteil ab. Diese Achse heißt **reelle Achse**.
- Senkrecht tragen wir den Imaginärteil ab. Diese Achse heißt **imaginäre Achse**.

Diese Ebene heißt **Gaußsche Zahlenebene**, nach dem Mathematiker Carl Friedrich Gauß. Statt eines Punktes
zeichnet man oft einen Pfeil vom Nullpunkt zum Punkt. Dann ist die komplexe Zahl $a + bi$ dasselbe Bild wie der Vektor
$\begin{pmatrix} a \\ b \end{pmatrix}$ aus [6.1 Was ist ein Vektor?](/lernen/mathe3/vektoren/was-ist-ein-vektor-pfeile-punkte-und-koordinaten).

```plot
x: [-5, 5]
y: [-4, 4]
gleich: true
achsen: { x: "Re", y: "Im" }
vektoren:
  - { nach: [3, 2], label: "3 + 2i", farbe: 0 }
  - { nach: [-2, 3], label: "−2 + 3i", farbe: 1 }
  - { nach: [-1, -2], label: "−1 − 2i", farbe: 2 }
punkte:
  - { x: 2.5, y: 0, label: "2,5", farbe: 3 }
  - { x: 0, y: -3, label: "−3i", farbe: 4 }
beschriftung: Fünf komplexe Zahlen in der Gaußschen Zahlenebene. Die reelle Zahl 2,5 liegt auf der waagrechten reellen Achse, die rein imaginäre Zahl −3i auf der senkrechten imaginären Achse. Die übrigen drei Zahlen sind als Pfeile vom Nullpunkt gezeichnet.
```

:::beispiel[Eine Zahl zeichnen und einordnen]
Zeichne $z = -4 + i$ und bestimme den Quadranten.

1. Realteil $-4$: vom Nullpunkt vier Einheiten nach **links**.
2. Imaginärteil $1$: von dort eine Einheit nach **oben**.
3. Der Punkt liegt links oben, also im 2. Quadranten. Der Pfeil vom Nullpunkt zu diesem Punkt stellt $z$ dar.
:::

:::achtung[Achsen nicht vertauschen]
**Falsch:** $z = 2 - 5i$ wird beim Punkt $(-5 \mid 2)$ eingezeichnet, also fünf nach links und zwei nach oben.

**Richtig:** Der Realteil $2$ gehört auf die waagrechte Achse, der Imaginärteil $-5$ auf die senkrechte.
Der Punkt ist $(2 \mid -5)$: zwei nach rechts, fünf nach unten. Merkhilfe: Wie bei $(x \mid y)$ kommt zuerst
die waagrechte Richtung.
:::

### Gleichheit: aus einer Gleichung werden zwei

Zwei komplexe Zahlen sind gleich, wenn sie denselben Punkt der Ebene darstellen. Das heißt: Die Realteile stimmen
überein **und** die Imaginärteile stimmen überein.

:::satz[Gleichheit komplexer Zahlen]
Für reelle Zahlen $a, b, c, d$ gilt:
$$a + bi = c + di \iff a = c \text{ und } b = d.$$
Das Zeichen $\iff$ liest man „genau dann, wenn“. Es bedeutet, dass beide Seiten einander bedingen.
:::

Warum ist das so? Angenommen, $a + bi = c + di$. Dann ist $a - c = (d - b)\,i$. Links steht eine reelle Zahl, ihr
Quadrat ist also nicht negativ. Rechts steht ein reelles Vielfaches von $i$, sein Quadrat ist $(d - b)^2\cdot i^2 = -(d - b)^2$
und damit nicht positiv. Beide Quadrate sind gleich, also müssen beide null sein. Daraus folgt $a = c$ und $b = d$.

Dieser Satz ist ein wichtiges Werkzeug. Aus **einer** Gleichung mit komplexen Zahlen werden **zwei** Gleichungen mit
reellen Zahlen. Man nennt das **Koeffizientenvergleich** oder Vergleich von Real- und Imaginärteil.

:::beispiel[Unbekannte durch Vergleich bestimmen]
Bestimme die reellen Zahlen $x$ und $y$ mit $(x + 2) + (3y - 1)\,i = 5 + 8i$.

1. Realteile vergleichen: $x + 2 = 5$. Also $x = 3$.
2. Imaginärteile vergleichen: $3y - 1 = 8$. Also $3y = 9$ und $y = 3$.
3. Probe: $(3 + 2) + (3\cdot 3 - 1)\,i = 5 + 8i$. Die Gleichung stimmt.
:::

:::merke[Rezept: Vergleich von Real- und Imaginärteil]
1. Bringe beide Seiten der Gleichung in die Form „reeller Teil $+$ (reeller Teil)$\cdot i$“.
2. Setze die Realteile gleich. Das ist die erste Gleichung.
3. Setze die Imaginärteile gleich. Das ist die zweite Gleichung.
4. Löse dieses System aus zwei reellen Gleichungen und mache die Probe.
:::

```reflexion
frage: Warum darf man bei $(x + 2) + (3y - 1)\,i = 5 + 8i$ nicht einfach „alles zusammenzählen“ und $x + 2 + 3y - 1 = 13$ schreiben?
antwort: |
  Real- und Imaginärteil sind zwei verschiedene Richtungen in der Zahlenebene, waagrecht und senkrecht. Sie lassen sich
  nicht gegeneinander aufrechnen, genauso wenig wie die $x$- und die $y$-Koordinate eines Punktes. Die Gleichung
  $x + 3y + 1 = 13$ wäre zwar wahr, aber sie verliert Information: Sie hat unendlich viele Lösungen, zum Beispiel
  $x = 12$ und $y = 0$. Erst die beiden getrennten Gleichungen legen $x = 3$ und $y = 3$ eindeutig fest.
```

### Übungen

```aufgabe
id: kz-ablesen
titel: Real- und Imaginärteil
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Gegeben ist $z = -7 + \tfrac{3}{2}\, i$. Gib Realteil und Imaginärteil an.
teile:
  - typ: zahl
    label: '$\operatorname{Re}(z)$'
    loesung: "-7"
    fehler:
      - wert: "3/2"
        meldung: 'Das ist der Imaginärteil. Der Realteil ist der Teil **ohne** $i$.'
  - typ: zahl
    label: '$\operatorname{Im}(z)$'
    loesung: "3/2"
    anzeige: '\tfrac{3}{2}'
    fehler:
      - wert: "-7"
        meldung: 'Das ist der Realteil. Der Imaginärteil ist die Zahl, die mit $i$ multipliziert wird.'
hinweise:
  - Der Imaginärteil ist die reelle Zahl *vor* dem $i$, ohne das $i$ selbst.
loesung: |
  Bei $z = a + bi$ ist $a$ der Realteil und $b$ der Imaginärteil. Hier ist $a = -7$ und $b = \tfrac{3}{2}$.
  ---
  Also $\operatorname{Re}(z) = -7$ und $\operatorname{Im}(z) = \tfrac{3}{2}$. Achtung: Der Imaginärteil ist $\tfrac32$, nicht $\tfrac{3}{2}i$.
```

```aufgabe
id: kz-zahlenebene-ablesen
titel: Zahlen aus der Zahlenebene ablesen
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Die Punkte $A$, $B$ und $C$ stellen komplexe Zahlen dar. Gib sie in der Form $a + bi$ an.
plot:
  x: [-5, 5]
  y: [-3, 3]
  gleich: true
  achsen: { x: "Re", y: "Im" }
  punkte:
    - { x: -3, y: 1, label: "A" }
    - { x: 0, y: -2, label: "B" }
    - { x: 4, y: -1, label: "C" }
teile:
  - typ: komplex
    label: '$A$'
    loesung: "-3 + i"
    fehler:
      - wert: "1 - 3i"
        meldung: 'Du hast die Achsen vertauscht. Waagrecht liest du den Realteil ab, senkrecht den Imaginärteil.'
  - typ: komplex
    label: '$B$'
    loesung: "-2i"
    fehler:
      - wert: "-2"
        meldung: '$B$ liegt auf der **senkrechten** Achse. Dort liegen die rein imaginären Zahlen, der Realteil ist $0$.'
  - typ: komplex
    label: '$C$'
    loesung: "4 - i"
    fehler:
      - wert: "-1 + 4i"
        meldung: 'Vertauschte Achsen: Der Realteil wird waagrecht abgelesen. $C$ liegt $4$ Einheiten rechts.'
hinweise:
  - 'Waagrechte Koordinate = Realteil, senkrechte Koordinate = Imaginärteil.'
loesung: |
  Ansatz: Ein Punkt $(a \mid b)$ der Zahlenebene stellt die Zahl $a + bi$ dar.
  ---
  $A = (-3 \mid 1)$, also $A = -3 + i$. $B = (0 \mid -2)$, also $B = -2i$ (rein imaginär).
  ---
  $C = (4 \mid -1)$, also $C = 4 - i$.
```

```aufgabe
id: kz-zeichnen
titel: Zahlen einzeichnen
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Zeichne die Zahlen $z_1 = 1 + 3i$, $z_2 = -2 - i$, $z_3 = 2i$ und $z_4 = -3$ als Pfeile in die Gaußsche Zahlenebene.

  a) Fertige die Skizze auf Papier an.

  b) Welche der Zahlen liegen auf einer Achse?
teile:
  - typ: text
    label: 'a) Skizze'
    muster: |
      $z_1$ liegt bei $(1 \mid 3)$, $z_2$ bei $(-2 \mid -1)$, $z_3$ bei $(0 \mid 2)$ und $z_4$ bei $(-3 \mid 0)$.
      Jeder Pfeil beginnt im Nullpunkt. Die Skizze im Lösungsweg zeigt das Ergebnis.
  - typ: auswahl
    label: 'b) Auf einer Achse liegen'
    mehrfach: true
    optionen:
      - '$z_1$'
      - '$z_2$'
      - '$z_3$'
      - '$z_4$'
    richtig: [2, 3]
    fehler:
      - wert: [3]
        meldung: '$z_3 = 2i$ hat den Realteil $0$. Solche Zahlen liegen auf der imaginären Achse.'
      - wert: [2]
        meldung: '$z_4 = -3$ hat den Imaginärteil $0$. Solche Zahlen liegen auf der reellen Achse.'
hinweise:
  - 'Zahlen mit Imaginärteil $0$ liegen auf der reellen Achse, Zahlen mit Realteil $0$ auf der imaginären Achse.'
loesung: |
  Ansatz: Jede Zahl $a + bi$ wird zum Punkt $(a \mid b)$. Der Pfeil führt vom Nullpunkt dorthin.
  ---
  Die Skizze:

  ```plot
  x: [-4, 3]
  y: [-2, 4]
  gleich: true
  achsen: { x: "Re", y: "Im" }
  vektoren:
    - { nach: [1, 3], label: "z₁", farbe: 0 }
    - { nach: [-2, -1], label: "z₂", farbe: 1 }
    - { nach: [0, 2], label: "z₃", farbe: 2 }
    - { nach: [-3, 0], label: "z₄", farbe: 3 }
  ```
  ---
  Auf einer Achse liegen $z_3 = 2i$ (imaginäre Achse, Realteil $0$) und $z_4 = -3$ (reelle Achse, Imaginärteil $0$).
```

```aufgabe
id: kz-gleichheit
titel: Gleichheit nutzen
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Bestimme die reellen Zahlen $x$ und $y$ so, dass gilt:
  $$(2x - 1) + (x + y)\,i = 5 - 4i.$$
teile:
  - typ: zahl
    label: '$x$'
    loesung: "3"
    fehler:
      - wert: "2"
        meldung: 'Aus $2x - 1 = 5$ folgt $2x = 6$. Beim Hinüberbringen wird aus $-1$ ein $+1$ auf der rechten Seite.'
  - typ: zahl
    label: '$y$'
    loesung: "-7"
    fehler:
      - wert: "-1"
        meldung: 'Aus $x + y = -4$ folgt $y = -4 - x = -4 - 3$. Du hast $x$ addiert statt subtrahiert.'
      - wert: "-4"
        meldung: 'Der Imaginärteil links ist $x + y$, nicht nur $y$. Setze $x = 3$ ein.'
hinweise:
  - Zwei komplexe Zahlen sind gleich, wenn Real- **und** Imaginärteile gleich sind. Das liefert zwei Gleichungen.
  - 'Realteile: $2x - 1 = 5$. Imaginärteile: $x + y = -4$.'
gefuehrt:
  - text: Setze die Realteile beider Seiten gleich und löse nach $x$ auf. Was ist $x$?
    teil:
      typ: zahl
      loesung: "3"
      fehler:
        - wert: "2"
          meldung: '$2x - 1 = 5$, also $2x = 5 + 1 = 6$.'
    erklaerung: 'Realteil links ist $2x - 1$, rechts $5$. Aus $2x - 1 = 5$ folgt $2x = 6$, also $x = 3$.'
  - text: Welche Gleichung liefern die Imaginärteile? Überlege, bevor du weiterklickst.
    erklaerung: 'Imaginärteil links ist $x + y$, rechts $-4$. Also $x + y = -4$. Achtung: Der Imaginärteil rechts ist $-4$, nicht $-4i$.'
  - text: Setze $x = 3$ ein. Was ist $y$?
    teil:
      typ: zahl
      loesung: "-7"
      fehler:
        - wert: "-1"
          meldung: '$3 + y = -4$, also $y = -4 - 3$.'
    erklaerung: '$3 + y = -4$, also $y = -7$.'
  - text: Mache die Probe, indem du $x = 3$ und $y = -7$ in die linke Seite einsetzt.
    erklaerung: '$(2\cdot 3 - 1) + (3 - 7)\,i = 5 - 4i$. Das ist genau die rechte Seite.'
loesung: |
  Ansatz: Nach dem Satz über die Gleichheit müssen die Realteile und die Imaginärteile übereinstimmen.
  ---
  Realteile vergleichen: $2x - 1 = 5$, also $2x = 6$ und $x = 3$.
  ---
  Imaginärteile vergleichen: $x + y = -4$, also $y = -4 - 3 = -7$.
  ---
  Probe: $(2\cdot 3 - 1) + (3 - 7)\,i = 5 - 4i$. Die Gleichung stimmt.
```

```aufgabe
id: kz-reell-oder-imaginaer
titel: Versteckt reell oder rein imaginär?
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Welche der folgenden Zahlen sind **reell**? Vereinfache zuerst mit den Potenzen von $i$.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$3i^2$'
      - '$2i^3$'
      - '$i^8$'
      - '$\sqrt{-4}$'
      - '$5 + 0\cdot i$'
    richtig: [0, 2, 4]
    fehler:
      - wert: [4]
        meldung: |
          Nicht nur Zahlen ohne sichtbares $i$ sind reell. Vereinfache: $3i^2 = 3\cdot(-1) = -3$ und $i^8 = (i^4)^2 = 1$.
      - wert: [0, 4]
        meldung: '$i^8$ fehlt. Weil $8$ durch $4$ teilbar ist, gilt $i^8 = 1$.'
      - wert: [0, 2, 3, 4]
        meldung: '$\sqrt{-4} = 2i$ ist rein imaginär, nicht reell.'
hinweise:
  - 'Ersetze $i^2$ durch $-1$, $i^3$ durch $-i$ und $i^4$ durch $1$.'
  - 'Reell heißt: Der Imaginärteil ist $0$. Rein imaginär heißt: Der Realteil ist $0$ und der Imaginärteil nicht.'
loesung: |
  Ansatz: Wir vereinfachen jede Zahl in die Form $a + bi$ und schauen, ob $b = 0$ ist.
  ---
  $3i^2 = -3$ (reell), $2i^3 = -2i$ (rein imaginär), $i^8 = 1$ (reell).
  ---
  $\sqrt{-4} = 2i$ (rein imaginär), $5 + 0\cdot i = 5$ (reell).
  ---
  Reell sind also $3i^2$, $i^8$ und $5 + 0\cdot i$.
```

```aufgabe
id: kz-gleichheit-system
titel: Ein Gleichungssystem aus einer Gleichung
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Bestimme die reellen Zahlen $x$ und $y$ mit
  $$(x + y) + (x - y)\,i = 6 + 2i.$$
teile:
  - typ: zahl
    label: '$x$'
    loesung: "(6+2)/2"
    anzeige: '4'
    fehler:
      - wert: "2"
        meldung: 'Das ist der Wert von $y$. Prüfe: Mit $x = 2$ und $y = 4$ wäre $x - y = -2$, nicht $2$.'
  - typ: zahl
    label: '$y$'
    loesung: "(6-2)/2"
    anzeige: '2'
    fehler:
      - wert: "4"
        meldung: 'Das ist der Wert von $x$. Setze in $x - y = 2$ ein und prüfe das Vorzeichen.'
hinweise:
  - 'Realteile: $x + y = 6$. Imaginärteile: $x - y = 2$.'
  - 'Addiere die beiden Gleichungen, dann fällt $y$ weg. Das ist das Additionsverfahren aus [3.2 Systeme mit zwei Unbekannten](/lernen/mathe3/lgs-matrizen/systeme-mit-zwei-unbekannten).'
loesung: |
  Ansatz: Real- und Imaginärteile vergleichen. Das ergibt zwei lineare Gleichungen mit zwei Unbekannten.
  ---
  Realteile: $x + y = 6$. Imaginärteile: $x - y = 2$.
  ---
  Beide Gleichungen addieren: $2x = 8$, also $x = 4$. Einsetzen in die erste Gleichung: $4 + y = 6$, also $y = 2$.
  ---
  Probe: $(4 + 2) + (4 - 2)\,i = 6 + 2i$. Die Gleichung stimmt.
```

```aufgabe
id: kz-parameter-rein-imaginaer
titel: Wann ist die Zahl rein imaginär?
niveau: 3
lernziel: 1
kompetenz: begruenden
angabe: |
  Für eine reelle Zahl $t$ sei $z = (t^2 - 4) + (t + 2)\,i$.

  a) Für welche $t$ ist $z$ rein imaginär?

  b) Für welche $t$ ist $z$ reell?

  c) Für welche $t$ ist $z = 0$?

  Gib jeweils alle passenden Werte an, getrennt durch Strichpunkte. Gibt es keinen, schreibe `{}`.
teile:
  - typ: menge
    label: 'a) $t \in$'
    loesung: ["2"]
    fehler:
      - wert: ["-2", "2"]
        meldung: |
          Für $t = -2$ ist zwar der Realteil $0$, aber auch der Imaginärteil $-2 + 2 = 0$. Dann ist $z = 0$.
          Rein imaginär verlangt einen Imaginärteil **ungleich** null.
  - typ: menge
    label: 'b) $t \in$'
    loesung: ["-2"]
    fehler:
      - wert: ["2", "-2"]
        meldung: 'Reell heißt: Der **Imaginärteil** ist $0$. Die Bedingung $t^2 - 4 = 0$ betrifft den Realteil.'
  - typ: menge
    label: 'c) $t \in$'
    loesung: ["-2"]
    fehler:
      - wert: []
        meldung: 'Prüfe $t = -2$: Realteil $(-2)^2 - 4 = 0$ und Imaginärteil $-2 + 2 = 0$.'
hinweise:
  - 'Schreibe die Bedingungen für Realteil und Imaginärteil getrennt auf.'
  - 'Rein imaginär: Realteil $= 0$ **und** Imaginärteil $\ne 0$. Reell: Imaginärteil $= 0$.'
loesung: |
  Ansatz: Wir übersetzen „rein imaginär“, „reell“ und „null“ in Bedingungen an $\operatorname{Re}(z) = t^2 - 4$ und $\operatorname{Im}(z) = t + 2$.
  ---
  a) Realteil null: $t^2 - 4 = 0$, also $t = 2$ oder $t = -2$. Zusätzlich muss der Imaginärteil ungleich null sein.
  Bei $t = -2$ ist $t + 2 = 0$, das scheidet aus. Bei $t = 2$ ist $z = 4i$. Also nur $t = 2$.
  ---
  b) Imaginärteil null: $t + 2 = 0$, also $t = -2$. Dann ist $z = 0$, und $0$ ist eine reelle Zahl.
  ---
  c) Beide Teile müssen null sein. Das gilt nur für $t = -2$.
  Die Falle in a) ist typisch: Wer nur den Realteil prüft, nimmt $t = -2$ fälschlich mit.
```

## Addieren, Subtrahieren und Multiplizieren

```aufgabe
id: kz-check-ausmultiplizieren
titel: Zwei Klammern ausmultiplizieren
niveau: 1
art: check
angabe: |
  Multipliziere aus und fasse zusammen: $(2 + 3x)(4 - x)$.
  Herkunft: [Kapitel 1, „Terme umformen“](/lernen/mathe3/zahlen/terme-umformen-binomische-formeln-und-faktorisieren).
teile:
  - typ: term
    label: '$(2 + 3x)(4 - x) =$'
    variable: x
    loesung: "8 + 10x - 3x^2"
    fehler:
      - wert: "8 - 3x^2"
        meldung: |
          Du hast nur „vorne mal vorne“ und „hinten mal hinten“ gerechnet. Beim Ausmultiplizieren wird **jeder** Summand
          der ersten Klammer mit **jedem** Summanden der zweiten multipliziert. Das sind vier Produkte.
      - wert: "8 + 10x + 3x^2"
        meldung: '$3x\cdot(-x) = -3x^2$. Das Vorzeichen des letzten Produkts ist negativ.'
hinweise:
  - 'Vier Produkte: $2\cdot 4$, $2\cdot(-x)$, $3x\cdot 4$ und $3x\cdot(-x)$.'
loesung: |
  Jeder Summand der ersten Klammer mal jeder Summand der zweiten: $2\cdot 4 + 2\cdot(-x) + 3x\cdot 4 + 3x\cdot(-x)$.
  ---
  Das ergibt $8 - 2x + 12x - 3x^2 = 8 + 10x - 3x^2$.
```

Komplexe Zahlen rechnen sich wie Terme mit einer Variablen. Der einzige Unterschied: Die „Variable“ heißt $i$,
und jedes $i^2$ wird durch $-1$ ersetzt. Mehr braucht es für Addieren, Subtrahieren und Multiplizieren nicht.

### Addieren und Subtrahieren

Beim Addieren fasst man gleichartige Teile zusammen, wie bei $3x + 5x = 8x$. Realteile kommen zu Realteilen,
Imaginärteile zu Imaginärteilen:
$$(a + bi) + (c + di) = (a + c) + (b + d)\,i, \qquad (a + bi) - (c + di) = (a - c) + (b - d)\,i.$$
Dabei sind $a, b, c, d$ reelle Zahlen. Zum Beispiel ist $(1 + 2i) + (3 - 5i) = 4 - 3i$.

In der Zahlenebene ist das genau die **Vektoraddition** aus [6.2 Rechnen mit Vektoren](/lernen/mathe3/vektoren/rechnen-mit-vektoren-addition-vielfache-und-rechengesetze).
Man hängt den Pfeil von $z_2$ an die Spitze des Pfeils von $z_1$. Der Pfeil vom Nullpunkt zur neuen Spitze ist
$z_1 + z_2$. Zusammen mit den beiden Pfeilen entsteht ein Parallelogramm.

:::beispiel[Summe und Differenz (nach Musterprüfung, abgewandelt)]
Gegeben sind $z_1 = 4 + 3i$ und $z_2 = 2 - 5i$.

1. $z_1 + 2z_2$: Zuerst verdoppeln, $2z_2 = 4 - 10i$. Dann addieren: $(4 + 4) + (3 - 10)\,i = 8 - 7i$.
2. $z_1 - z_2$: Das Minus gilt für **beide** Teile von $z_2$. $(4 - 2) + (3 - (-5))\,i = 2 + 8i$.
:::

```plot
x: [-1, 7]
y: [-6, 4]
gleich: true
achsen: { x: "Re", y: "Im" }
vektoren:
  - { nach: [4, 3], label: "z₁ = 4 + 3i", farbe: 0 }
  - { nach: [2, -5], label: "z₂ = 2 − 5i", farbe: 1 }
  - { von: [4, 3], nach: [6, -2], farbe: 1 }
  - { nach: [6, -2], label: "z₁ + z₂ = 6 − 2i", farbe: 2 }
strecken:
  - { von: [2, -5], nach: [6, -2], gestrichelt: true }
beschriftung: Addition als Pfeiladdition. Der Pfeil von z₂ wird an die Spitze von z₁ gehängt. Der grüne Pfeil vom Nullpunkt zur neuen Spitze ist die Summe 6 − 2i. Mit der gestrichelten Seite entsteht ein Parallelogramm.
```

:::achtung[Das Minus gilt für die ganze Klammer]
**Falsch:** $(5 + i) - (2 - 3i) = 5 + i - 2 - 3i = 3 - 2i$.

**Richtig:** $(5 + i) - (2 - 3i) = 5 + i - 2 + 3i = 3 + 4i$. Das Minus vor der Klammer dreht **jedes** Vorzeichen in
der Klammer um, also auch das von $-3i$.
:::

### Multiplizieren

Beim Multiplizieren multipliziert man aus, genau wie zwei Klammern mit einer Variablen. Danach ersetzt man $i^2$ durch $-1$:
$$(a + bi)(c + di) = ac + ad\,i + bc\,i + bd\,i^2 = (ac - bd) + (ad + bc)\,i.$$
Diese Formel musst du nicht auswendig lernen. Ausmultiplizieren und $i^2 = -1$ einsetzen genügt immer.

:::beispiel[Ein Produkt (nach Musterprüfung, abgewandelt)]
Berechne $z_1 z_2$ für $z_1 = 4 + 3i$ und $z_2 = 2 - 5i$.

1. Jeder Teil mal jeder Teil: $4\cdot 2 + 4\cdot(-5i) + 3i\cdot 2 + 3i\cdot(-5i) = 8 - 20i + 6i - 15i^2$.
2. $i^2$ ersetzen: $-15i^2 = -15\cdot(-1) = +15$.
3. Zusammenfassen: Realteil $8 + 15 = 23$, Imaginärteil $-20 + 6 = -14$. Also $z_1 z_2 = 23 - 14i$.
:::

:::beispiel[Ein Quadrat mit der binomischen Formel]
Berechne $(2 + 3i)^2$.

1. Erste binomische Formel $(a + b)^2 = a^2 + 2ab + b^2$ mit $a = 2$ und $b = 3i$.
2. $a^2 = 4$, $2ab = 2\cdot 2\cdot 3i = 12i$, $b^2 = (3i)^2 = 9i^2 = -9$.
3. Zusammen: $(2 + 3i)^2 = 4 + 12i - 9 = -5 + 12i$.
:::

:::beispiel[Anwendung: Impedanzen in Reihe]
In der Elektrotechnik beschreibt man den Wechselstromwiderstand eines Bauteils durch eine komplexe Zahl $Z$, die
**Impedanz**. Ihre Einheit ist Ohm ($\Omega$). Der Realteil ist der gewöhnliche Widerstand, der Imaginärteil
beschreibt Spulen (positiv) und Kondensatoren (negativ). Bei einer Reihenschaltung addieren sich die Impedanzen.

Eine Spule mit $Z_1 = (6 + 8i)\,\Omega$ und ein Widerstand mit $Z_2 = 10\,\Omega$ sind in Reihe geschaltet.

1. Gesamtimpedanz: $Z = Z_1 + Z_2 = (6 + 10) + 8i = (16 + 8i)\,\Omega$.
2. Der reelle Anteil $16\,\Omega$ wandelt Energie in Wärme um. Der imaginäre Anteil $8\,\Omega$ kommt allein von der Spule.
:::

:::achtung[Nicht nur „vorne mal vorne, hinten mal hinten“]
**Falsch:** $(3 + 2i)(1 + 4i) = 3\cdot 1 + 2\cdot 4\,i = 3 + 8i$.

**Richtig:** Es entstehen **vier** Produkte: $3 + 12i + 2i + 8i^2 = 3 + 14i - 8 = -5 + 14i$. Wer nur Realteil mal
Realteil und Imaginärteil mal Imaginärteil rechnet, vergisst die gemischten Produkte.
:::

:::achtung[i² ist −1, nicht +1]
**Falsch:** $(1 + 2i)(3 + i) = 3 + i + 6i + 2i^2 = 3 + 7i + 2 = 5 + 7i$.

**Richtig:** $2i^2 = 2\cdot(-1) = -2$. Also $(1 + 2i)(3 + i) = 3 + 7i - 2 = 1 + 7i$. Der Vorzeichenwechsel durch
$i^2 = -1$ ist der häufigste Rechenfehler bei komplexen Zahlen. Schreib den Schritt „$i^2 = -1$“ deshalb immer hin.
:::

:::merke[Rezept: Rechnen in algebraischer Form]
1. **Addieren und Subtrahieren:** Realteile zusammenfassen, Imaginärteile zusammenfassen. Bei einem Minus vor der Klammer jedes Vorzeichen umdrehen.
2. **Multiplizieren:** Jeden Teil mit jedem Teil multiplizieren (vier Produkte). Dann $i^2 = -1$ einsetzen und zusammenfassen.
3. **Kontrolle:** Das Ergebnis hat die Form $a + bi$ mit reellen Zahlen $a$ und $b$.
:::

Alle gewohnten Rechengesetze gelten weiter. Man darf die Faktoren vertauschen, beliebig Klammern setzen und
ausmultiplizieren. Deshalb funktionieren auch die binomischen Formeln, wie im Beispiel zu $(2 + 3i)^2$.

```reflexion
frage: In der Produktformel steht beim Realteil $ac - bd$. Beim Ausmultiplizieren entstehen aber nur Pluszeichen. Woher kommt das Minus?
antwort: |
  Das Minus kommt aus dem Produkt der beiden Imaginärteile. Es ist $bi\cdot di = bd\,i^2$, und wegen $i^2 = -1$ wird daraus $-bd$.
  Dieses Produkt hat kein $i$ mehr, gehört also zum Realteil. Deshalb wandert $bd$ mit umgedrehtem Vorzeichen in den Realteil.
  Beim Addieren entsteht nie ein $i^2$, darum gibt es dort keinen solchen Vorzeichenwechsel.
```

### Selbst ausprobieren

```aufgabe
id: kz-check-vorhersage-summe
titel: Vorhersage zur Summe
niveau: 1
art: check
angabe: |
  Im folgenden Widget ist $z_1 = 3 + i$ und $z_2 = -1 + 2i$ eingestellt. **Bevor** du es benutzt: Wie entsteht der
  Punkt $z_1 + z_2$ aus dem Punkt $z_1$?
teile:
  - typ: auswahl
    optionen:
      - '$z_1$ wird um $1$ nach links und um $2$ nach oben verschoben.'
      - '$z_1$ wird um $1$ nach rechts und um $2$ nach oben verschoben.'
      - '$z_1$ wird gedreht.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Der Realteil von $z_2$ ist $-1$. Eine negative Zahl beim Realteil bedeutet eine Verschiebung nach **links**.'
      - wert: 2
        meldung: 'Beim Addieren wird nichts gedreht. Man hängt den Pfeil von $z_2$ an, das ist eine Verschiebung.'
hinweise:
  - 'Addieren heißt: Der Pfeil von $z_2$ wird an die Spitze von $z_1$ gehängt.'
loesung: |
  $z_1 + z_2 = (3 - 1) + (1 + 2)\,i = 2 + 3i$.
  ---
  Gegenüber $z_1 = 3 + i$ ist der Punkt um $1$ nach links und um $2$ nach oben verschoben. Genau um den Pfeil von $z_2$.
```

```widget
name: komplex
titel: Rechenoperationen in der Zahlenebene
props:
  z1: [3, 1]
  z2: [-1, 2]
  operation: summe
```

**Beobachte:** Zieh an $z_2$. Die Summe wandert immer genau mit dem Pfeil von $z_2$ mit. Schalte dann oben auf
„$z_1 \cdot z_2$“ (Produkt) um. Jetzt passiert etwas anderes: Der Ergebnispfeil ist gegenüber $z_1$ **gedreht** und hat eine andere Länge.
**Erklärung:** Beim Addieren werden Pfeile aneinandergehängt. Beim Multiplizieren werden die Winkel addiert und die Längen
multipliziert. Warum das so ist, zeigt die Lektion [15.6 Multiplizieren und Potenzieren in Polarform](/lernen/mathe3/komplexe-zahlen/multiplizieren-und-potenzieren-in-polarform-drehstreckung-und-de-moivre).

### Übungen

```aufgabe
id: kz-grundrechnungen
titel: Addieren und Subtrahieren
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Gegeben sind $z_1 = 3 - 2i$ und $z_2 = -1 + 4i$. Berechne:
teile:
  - typ: komplex
    label: '$z_1 + z_2$'
    loesung: "(3-2i) + (-1+4i)"
    anzeige: '2 + 2i'
    fehler:
      - wert: "4-6i"
        meldung: 'Das ist $z_1 - z_2$. Gefragt ist die Summe.'
  - typ: komplex
    label: '$z_1 - z_2$'
    loesung: "(3-2i) - (-1+4i)"
    anzeige: '4 - 6i'
    fehler:
      - wert: "2+2i"
        meldung: 'Das Minus vor $z_2$ gilt für **beide** Teile: $-(-1 + 4i) = +1 - 4i$.'
      - wert: "4+2i"
        meldung: 'Beim Imaginärteil fehlt der Vorzeichenwechsel: $-2 - 4 = -6$.'
  - typ: komplex
    label: '$3z_1 - 2z_2$'
    loesung: "3*(3-2i) - 2*(-1+4i)"
    anzeige: '11 - 14i'
    fehler:
      - wert: "7+2i"
        meldung: '$-2z_2 = -2\cdot(-1 + 4i) = +2 - 8i$. Das Minus dreht beide Vorzeichen um.'
hinweise:
  - Realteile zusammenfassen, Imaginärteile zusammenfassen. Bei einem Minus vor der Klammer drehen sich alle Vorzeichen in der Klammer um.
loesung: |
  Ansatz: Addieren und Subtrahieren geschieht getrennt für Real- und Imaginärteil.
  ---
  $z_1 + z_2 = (3 - 1) + (-2 + 4)\,i = 2 + 2i$.
  ---
  $z_1 - z_2 = (3 - (-1)) + (-2 - 4)\,i = 4 - 6i$.
  ---
  $3z_1 = 9 - 6i$ und $2z_2 = -2 + 8i$. Also $3z_1 - 2z_2 = (9 + 2) + (-6 - 8)\,i = 11 - 14i$.
```

```aufgabe
id: kz-multiplizieren
titel: Zwei Zahlen multiplizieren
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Berechne $(2 + i)(3 - 2i)$ in der Form $a + bi$.
teile:
  - typ: komplex
    label: '$(2 + i)(3 - 2i) =$'
    loesung: "(2+i)*(3-2i)"
    anzeige: '8 - i'
    fehler:
      - wert: "6-2i"
        meldung: 'Du hast nur $2\cdot 3$ und $1\cdot(-2)$ gerechnet. Es gibt vier Produkte, auch die gemischten $2\cdot(-2i)$ und $i\cdot 3$.'
      - wert: "4-i"
        meldung: '$i\cdot(-2i) = -2i^2 = -2\cdot(-1) = +2$. Du hast $i^2$ wie $+1$ behandelt.'
hinweise:
  - 'Multipliziere jeden Teil der ersten Klammer mit jedem Teil der zweiten. Ersetze dann $i^2$ durch $-1$.'
gefuehrt:
  - text: Berechne das Produkt der beiden Realteile, $2\cdot 3$.
    teil:
      typ: zahl
      loesung: "6"
    erklaerung: '$2\cdot 3 = 6$.'
  - text: Berechne die gemischten Produkte $2\cdot(-2i) + i\cdot 3$ und fasse sie zusammen.
    teil:
      typ: komplex
      loesung: "-i"
      fehler:
        - wert: "7i"
          meldung: '$2\cdot(-2i) = -4i$, nicht $+4i$.'
    erklaerung: '$2\cdot(-2i) = -4i$ und $i\cdot 3 = 3i$. Zusammen $-4i + 3i = -i$.'
  - text: Berechne das letzte Produkt $i\cdot(-2i)$. Denk an $i^2 = -1$.
    teil:
      typ: zahl
      loesung: "2"
      fehler:
        - wert: "-2"
          meldung: '$i\cdot(-2i) = -2i^2$, und $i^2 = -1$ macht daraus $-2\cdot(-1) = +2$.'
    erklaerung: '$i\cdot(-2i) = -2i^2 = -2\cdot(-1) = 2$.'
  - text: Fasse alle vier Produkte zusammen. Was ist $(2 + i)(3 - 2i)$?
    teil:
      typ: komplex
      loesung: "8 - i"
    erklaerung: 'Realteil: $6 + 2 = 8$. Imaginärteil: $-1$. Also $8 - i$.'
loesung: |
  Ansatz: Ausmultiplizieren wie bei zwei Klammern, danach $i^2 = -1$ einsetzen.
  ---
  $(2 + i)(3 - 2i) = 6 - 4i + 3i - 2i^2$.
  ---
  Mit $i^2 = -1$ wird $-2i^2 = +2$. Zusammenfassen: $(6 + 2) + (-4 + 3)\,i = 8 - i$.
```

```aufgabe
id: kz-quadrieren
titel: Komplexe Zahlen quadrieren
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Berechne in der Form $a + bi$:

  a) $(3 - 2i)^2$

  b) $(1 + i)^2$
teile:
  - typ: komplex
    label: 'a) $(3 - 2i)^2$'
    loesung: "(3-2i)^2"
    anzeige: '5 - 12i'
    fehler:
      - wert: "13-12i"
        meldung: '$(2i)^2 = 4i^2 = -4$, nicht $+4$. Also $9 - 4 = 5$ beim Realteil.'
      - wert: "5"
        meldung: 'Das gemischte Glied $-2\cdot 3\cdot 2i = -12i$ fehlt. Es gilt $(a - b)^2 = a^2 - 2ab + b^2$.'
  - typ: komplex
    label: 'b) $(1 + i)^2$'
    loesung: "(1+i)^2"
    anzeige: '2i'
    fehler:
      - wert: "2+2i"
        meldung: '$i^2 = -1$, also $1 + 2i + i^2 = 1 + 2i - 1$.'
      - wert: "0"
        meldung: 'Das gemischte Glied $2\cdot 1\cdot i = 2i$ fehlt.'
hinweise:
  - 'Binomische Formeln: $(a - b)^2 = a^2 - 2ab + b^2$ und $(a + b)^2 = a^2 + 2ab + b^2$.'
  - 'Bei a) ist $a = 3$ und $b = 2i$. Dann ist $b^2 = 4i^2$.'
loesung: |
  Ansatz: Binomische Formel anwenden, danach $i^2 = -1$ einsetzen.
  ---
  a) $(3 - 2i)^2 = 9 - 2\cdot 3\cdot 2i + (2i)^2 = 9 - 12i + 4i^2 = 9 - 12i - 4 = 5 - 12i$.
  ---
  b) $(1 + i)^2 = 1 + 2i + i^2 = 1 + 2i - 1 = 2i$.
  ---
  Bemerkenswert an b): Das Quadrat von $1 + i$ ist rein imaginär. In der Lektion [15.6 Multiplizieren und Potenzieren in Polarform](/lernen/mathe3/komplexe-zahlen/multiplizieren-und-potenzieren-in-polarform-drehstreckung-und-de-moivre) sehen wir, warum:
  Der Pfeil von $1 + i$ hat den Winkel $45°$, das Quadrat den Winkel $90°$.
```

```aufgabe
id: kz-impedanz-reihe
titel: Drei Bauteile in Reihe
niveau: 2
lernziel: 2
kompetenz: modellieren
angabe: |
  In einem Wechselstromkreis sind drei Bauteile in Reihe geschaltet. Ihre Impedanzen (komplexe Widerstände) sind
  $Z_1 = (12 + 5i)\,\Omega$, $Z_2 = (8 - 20i)\,\Omega$ und $Z_3 = 15i\,\Omega$.
  Bei einer Reihenschaltung addieren sich die Impedanzen.

  a) Berechne die Gesamtimpedanz $Z$ in Ohm.

  b) Was fällt am Ergebnis auf?
teile:
  - typ: komplex
    label: 'a) $Z$ in $\Omega$'
    loesung: "(12+5i) + (8-20i) + 15i"
    anzeige: '20'
    fehler:
      - wert: "20+40i"
        meldung: 'Der Imaginärteil von $Z_2$ ist $-20$, nicht $+20$. Also $5 - 20 + 15$.'
      - wert: "35-15i"
        meldung: '$Z_3 = 15i$ ist rein imaginär. Die $15$ gehört zum Imaginärteil, nicht zum Realteil.'
  - typ: text
    label: 'b) Beobachtung'
    muster: |
      Der Imaginärteil ist $0$. Die Gesamtimpedanz ist rein reell, $Z = 20\,\Omega$. Die Wirkungen von Spule und
      Kondensator heben sich gerade auf. Der Kreis verhält sich wie ein gewöhnlicher Widerstand von $20\,\Omega$.
hinweise:
  - 'Addiere getrennt: alle Realteile und alle Imaginärteile.'
  - 'Realteile: $12 + 8 + 0$. Imaginärteile: $5 + (-20) + 15$.'
loesung: |
  Ansatz: Bei Reihenschaltung gilt $Z = Z_1 + Z_2 + Z_3$. Wir addieren Real- und Imaginärteile getrennt.
  ---
  Realteil: $12 + 8 + 0 = 20$. Imaginärteil: $5 - 20 + 15 = 0$.
  ---
  Also $Z = (20 + 0i)\,\Omega = 20\,\Omega$.
  ---
  Antwort: Die Gesamtimpedanz ist rein reell. Spule und Kondensator heben sich in ihrer Wirkung auf.
```

```aufgabe
id: kz-mal-i
titel: Mit i multiplizieren
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  Gegeben ist $z = 3 + 2i$.

  a) Berechne $i\cdot z$.

  b) Wie liegt der Pfeil von $i\cdot z$ im Vergleich zum Pfeil von $z$? Zeichne beide Pfeile, bevor du antwortest.
teile:
  - typ: komplex
    label: 'a) $i\cdot z$'
    loesung: "i*(3+2i)"
    anzeige: '-2 + 3i'
    fehler:
      - wert: "2+3i"
        meldung: '$i\cdot 2i = 2i^2$, und $i^2 = -1$. Der Realteil ist also $-2$, nicht $+2$.'
  - typ: auswahl
    label: 'b) Lage'
    optionen:
      - 'Er ist um $90°$ gegen den Uhrzeigersinn gedreht und gleich lang.'
      - 'Er ist um $90°$ im Uhrzeigersinn gedreht und gleich lang.'
      - 'Er ist an der reellen Achse gespiegelt.'
      - 'Er ist doppelt so lang und zeigt in dieselbe Richtung.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$z$ zeigt nach rechts oben, $iz = -2 + 3i$ nach links oben. Das ist eine Drehung **gegen** den Uhrzeigersinn.'
      - wert: 2
        meldung: 'Eine Spiegelung an der reellen Achse würde nur das Vorzeichen des Imaginärteils ändern, also $3 - 2i$ ergeben.'
      - wert: 3
        meldung: 'Beide Pfeile sind gleich lang: $\sqrt{3^2 + 2^2} = \sqrt{(-2)^2 + 3^2} = \sqrt{13}$. Die Richtung hat sich geändert.'
hinweise:
  - '$i\cdot(3 + 2i) = 3i + 2i^2$.'
  - 'Zeichne $(3 \mid 2)$ und $(-2 \mid 3)$. Wie liegen die beiden Pfeile zueinander?'
loesung: |
  Ansatz: Ausmultiplizieren und $i^2 = -1$ einsetzen.
  ---
  a) $i\cdot(3 + 2i) = 3i + 2i^2 = -2 + 3i$.
  ---
  b) Die Pfeile $(3 \mid 2)$ und $(-2 \mid 3)$ sind gleich lang ($\sqrt{13}$). Ihr Skalarprodukt ist $3\cdot(-2) + 2\cdot 3 = 0$,
  sie stehen also senkrecht aufeinander. Der neue Pfeil zeigt nach links oben: Drehung um $90°$ gegen den Uhrzeigersinn.
  ---
  Allgemein: Aus $a + bi$ wird $i(a + bi) = -b + ai$. Das ist immer eine Vierteldrehung, passend zum Bild der Potenzen von $i$.
```

```aufgabe
id: kz-parameter-produkt
titel: Ein Produkt mit Parameter
niveau: 3
lernziel: 2
kompetenz: anwenden
angabe: |
  Für eine reelle Zahl $a$ sei $w = (a + 2i)(3 - i)$.

  a) Für welches $a$ ist $w$ rein imaginär?

  b) Für welches $a$ ist $w$ reell? Gib für diesen Fall auch $w$ an.
teile:
  - typ: zahl
    label: 'a) $a =$'
    loesung: "-2/3"
    anzeige: '-\tfrac23'
    fehler:
      - wert: "2/3"
        meldung: 'Aus $3a + 2 = 0$ folgt $3a = -2$. Das Vorzeichen ist negativ.'
      - wert: "6"
        meldung: 'Für $a = 6$ ist der **Imaginärteil** null. Rein imaginär verlangt aber, dass der **Realteil** null ist.'
  - typ: zahl
    label: 'b) $a =$'
    loesung: "6"
    fehler:
      - wert: "-6"
        meldung: 'Der Imaginärteil ist $-a + 6$. Aus $-a + 6 = 0$ folgt $a = 6$.'
  - typ: komplex
    label: 'b) $w =$'
    loesung: "(6+2i)*(3-i)"
    anzeige: '20'
hinweise:
  - 'Multipliziere aus und schreibe $w$ in der Form $(\dots) + (\dots)\,i$, wobei in den Klammern Terme mit $a$ stehen.'
  - 'Realteil: $3a + 2$. Imaginärteil: $-a + 6$. Rein imaginär heißt Realteil $0$ (und Imaginärteil nicht $0$).'
loesung: |
  Ansatz: Wir multiplizieren aus und lesen Real- und Imaginärteil als Terme in $a$ ab.
  ---
  $(a + 2i)(3 - i) = 3a - ai + 6i - 2i^2 = (3a + 2) + (6 - a)\,i$.
  ---
  a) Realteil null: $3a + 2 = 0$, also $a = -\tfrac23$. Dann ist der Imaginärteil $6 + \tfrac23 = \tfrac{20}{3} \ne 0$. Also ist $w = \tfrac{20}{3}i$ wirklich rein imaginär.
  ---
  b) Imaginärteil null: $6 - a = 0$, also $a = 6$. Dann ist $w = 3\cdot 6 + 2 = 20$.
  Probe: $(6 + 2i)(3 - i) = 18 - 6i + 6i - 2i^2 = 18 + 2 = 20$.
```

## Konjugierte, Betrag und Division

```aufgabe
id: kz-check-nenner-rational
titel: Einen Wurzelnenner beseitigen
niveau: 1
art: check
angabe: |
  Bringe $\dfrac{1}{2 - \sqrt3}$ auf eine Form ohne Wurzel im Nenner. Gib das Ergebnis exakt ein.
  Herkunft: [Kapitel 1, „Potenzen und Wurzeln“](/lernen/mathe3/zahlen/potenzen-und-wurzeln).
teile:
  - typ: zahl
    label: '$\dfrac{1}{2 - \sqrt3} =$'
    loesung: "1/(2 - sqrt(3))"
    anzeige: '2 + \sqrt3 \approx 3{,}732'
    fehler:
      - wert: "2 - sqrt(3)"
        meldung: |
          Du hast mit $2 - \sqrt3$ erweitert. Erweitern muss man mit $2 + \sqrt3$, also mit umgedrehtem Vorzeichen.
          Erst dann entsteht im Nenner die dritte binomische Formel $(2 - \sqrt3)(2 + \sqrt3) = 4 - 3$.
hinweise:
  - 'Erweitere mit $2 + \sqrt3$ und benutze $(a - b)(a + b) = a^2 - b^2$.'
loesung: |
  Erweitern mit $2 + \sqrt3$: $\frac{1\cdot(2 + \sqrt3)}{(2 - \sqrt3)(2 + \sqrt3)}$.
  ---
  Nenner: $2^2 - (\sqrt3)^2 = 4 - 3 = 1$. Also $\frac{1}{2 - \sqrt3} = 2 + \sqrt3 \approx 3{,}732$.
```

Addieren, Subtrahieren und Multiplizieren kannst du jetzt. Bei der Division fehlt noch ein Werkzeug. Wie bringt
man $\frac{3 + i}{1 - i}$ in die Form $a + bi$? Die Idee ist dieselbe wie beim Beseitigen eines Wurzelnenners in der Frage zu Beginn dieser Lektion: Man erweitert so, dass
der Nenner eine gewöhnliche reelle Zahl wird. Dafür brauchen wir zwei neue Begriffe, die Konjugierte und den Betrag.

### Die konjugiert komplexe Zahl

:::definition[Konjugiert komplexe Zahl]
Zu $z = a + bi$ heißt
$$\bar z = a - bi$$
die **konjugiert komplexe Zahl** oder kurz die **Konjugierte**. Man liest $\bar z$ als „$z$ quer“.
Beim Konjugieren dreht man nur das Vorzeichen des Imaginärteils um. Der Realteil bleibt gleich.
:::

Geometrisch ist $\bar z$ das **Spiegelbild** von $z$ an der reellen Achse. Beispiele: Die Konjugierte von $3 + 4i$ ist
$3 - 4i$. Die Konjugierte von $-2i$ ist $2i$. Die Konjugierte von $7$ ist $7$ selbst, weil $7$ keinen Imaginärteil hat.

**Nichtbeispiel:** $-3 - 4i$ ist **nicht** die Konjugierte von $3 + 4i$. Dort sind beide Vorzeichen umgedreht. Das ist
die Gegenzahl $-z$, also die Spiegelung am Nullpunkt.

### Der Betrag

:::definition[Betrag einer komplexen Zahl]
Der **Betrag** von $z = a + bi$ ist die Länge des Pfeils von $0$ zu $z$:
$$|z| = \sqrt{a^2 + b^2}.$$
Dabei sind $a$ und $b$ Real- und Imaginärteil. Der Betrag ist immer eine reelle Zahl größer oder gleich null.
:::

Die Formel ist der Satz des Pythagoras. Der Realteil $a$ und der Imaginärteil $b$ sind die beiden Katheten eines
rechtwinkligen Dreiecks, und der Pfeil ist die Hypotenuse. Das ist dieselbe Rechnung wie bei der Länge eines Vektors in
[6.3 Betrag, Abstand und Einheitsvektor](/lernen/mathe3/vektoren/betrag-abstand-und-einheitsvektor). Für reelle Zahlen ist der Betrag der gewohnte
Betrag: $|-5| = \sqrt{25 + 0} = 5$.

:::beispiel[Betrag und Abstand]
1. $|-8 + 15i| = \sqrt{(-8)^2 + 15^2} = \sqrt{64 + 225} = \sqrt{289} = 17$.
2. Der Abstand zweier Zahlen ist der Betrag ihrer Differenz. Für $z_1 = 1 + 2i$ und $z_2 = 4 - 2i$ ist
   $z_1 - z_2 = -3 + 4i$, also ist der Abstand $|z_1 - z_2| = \sqrt{9 + 16} = 5$.
3. Kontrolle mit der Skizze: Von $(1 \mid 2)$ nach $(4 \mid -2)$ geht es $3$ nach rechts und $4$ nach unten. Die Strecke ist $5$ lang.
:::

:::achtung[Kein i in die Betragsformel]
**Falsch:** $|3 - 4i| = \sqrt{3^2 + (-4i)^2} = \sqrt{9 - 16}$. Das ergibt eine Wurzel aus einer negativen Zahl.

**Richtig:** In die Formel kommen Real- und Imaginärteil, also die reellen Zahlen $3$ und $-4$:
$|3 - 4i| = \sqrt{9 + 16} = 5$. Ein Betrag ist eine Länge und deshalb nie negativ oder imaginär.
:::

### Die wichtigste Regel: z mal z quer

Multipliziert man eine Zahl mit ihrer Konjugierten, passiert etwas Schönes:
$$z\cdot\bar z = (a + bi)(a - bi) = a^2 - abi + abi - b^2 i^2 = a^2 + b^2 = |z|^2.$$
Die gemischten Glieder heben sich weg, und aus $-b^2 i^2$ wird $+b^2$. Das ist die dritte binomische Formel
$(x + y)(x - y) = x^2 - y^2$ mit $y = bi$. Das Ergebnis ist immer **reell und nicht negativ**.
Zum Beispiel: $(2 + 5i)(2 - 5i) = 4 + 25 = 29$.

Zwei weitere Regeln folgen direkt aus der Definition. Sie werden später nützlich:

- $z + \bar z = 2a = 2\operatorname{Re}(z)$. Zum Beispiel $(3 + 4i) + (3 - 4i) = 6$.
- $z$ ist genau dann reell, wenn $z = \bar z$ gilt. Dann ist nämlich $b = -b$, also $b = 0$.

### Division: mit der Konjugierten erweitern

Um $\frac{z_1}{z_2}$ in die Form $a + bi$ zu bringen, erweitert man den Bruch mit der Konjugierten des Nenners. Der
Nenner wird dadurch die reelle Zahl $|z_2|^2$. Für $z_2 = c + di$ gilt:
$$\frac{a + bi}{c + di} = \frac{(a + bi)(c - di)}{(c + di)(c - di)} = \frac{(a + bi)(c - di)}{c^2 + d^2}.$$
Dabei ist $c^2 + d^2$ eine positive reelle Zahl, solange $z_2 \ne 0$ ist. Durch null kann man auch in $\C$ nicht teilen.

:::beispiel[Ein Quotient mit glattem Ergebnis]
Berechne $\dfrac{3 + i}{1 - i}$.

1. Die Konjugierte des Nenners ist $1 + i$. Damit erweitern wir Zähler und Nenner.
2. Nenner: $(1 - i)(1 + i) = 1^2 + 1^2 = 2$.
3. Zähler: $(3 + i)(1 + i) = 3 + 3i + i + i^2 = 3 + 4i - 1 = 2 + 4i$.
4. Ergebnis: $\dfrac{2 + 4i}{2} = 1 + 2i$.
5. Probe durch Multiplizieren: $(1 + 2i)(1 - i) = 1 - i + 2i - 2i^2 = 3 + i$. Stimmt.
:::

:::beispiel[Der Quotient aus der Musteraufgabe (abgewandelt)]
Für $z_1 = 4 + 3i$ und $z_2 = 2 - 5i$ ist
$$\frac{z_1}{z_2} = \frac{(4 + 3i)(2 + 5i)}{(2 - 5i)(2 + 5i)} = \frac{8 + 20i + 6i + 15i^2}{4 + 25} = \frac{-7 + 26i}{29}.$$
Also $\frac{z_1}{z_2} = -\frac{7}{29} + \frac{26}{29}\,i \approx -0{,}241 + 0{,}897\,i$.
In der Prüfung darfst du das Ergebnis als Bruch stehen lassen oder sinnvoll runden.
:::

:::achtung[Den Zähler nicht vergessen]
**Falsch:** $\dfrac{3 + i}{1 - i} = \dfrac{3 + i}{(1 - i)(1 + i)} = \dfrac{3 + i}{2}$.

**Richtig:** Erweitern heißt, Zähler **und** Nenner mit derselben Zahl zu multiplizieren. Sonst ändert sich der Wert
des Bruchs. Richtig ist $\dfrac{(3 + i)(1 + i)}{2} = \dfrac{2 + 4i}{2} = 1 + 2i$.
:::

:::achtung[Nicht Teil für Teil dividieren]
**Falsch:** $\dfrac{6 + 4i}{2 + 2i} = \dfrac62 + \dfrac42\,i = 3 + 2i$.

**Richtig:** Erweitern mit $2 - 2i$ ergibt $\dfrac{(6 + 4i)(2 - 2i)}{8} = \dfrac{12 - 12i + 8i + 8}{8} = \dfrac{20 - 4i}{8} = 2{,}5 - 0{,}5\,i$.
Die Probe zeigt den Fehler: $(3 + 2i)(2 + 2i) = 2 + 10i$, nicht $6 + 4i$.
:::

:::merke[Rezept: Division in algebraischer Form]
1. Bilde die Konjugierte des Nenners (Vorzeichen des Imaginärteils umdrehen).
2. Erweitere Zähler **und** Nenner damit.
3. Nenner: $c^2 + d^2$ (reell). Zähler: ausmultiplizieren, $i^2 = -1$ einsetzen.
4. Teile Real- und Imaginärteil des Zählers durch den Nenner. Probe durch Multiplizieren, wenn Zeit bleibt.
:::

:::pruefung[Teilpunkte bei der Division sichern]
Schreib bei jeder Division den Zwischenschritt mit dem erweiterten Bruch und dem reellen Nenner hin, zum Beispiel
„$\frac{(4 + 3i)(2 + 5i)}{2^2 + 5^2}$“. Daran sieht die Prüferin, dass du das Verfahren beherrschst. Wenn sich danach beim
Ausmultiplizieren ein Vorzeichenfehler einschleicht, bekommst du für den richtigen Ansatz trotzdem Teilpunkte.
:::

```reflexion
frage: Warum erweitert man gerade mit der Konjugierten des Nenners und nicht zum Beispiel mit dem Nenner selbst?
antwort: |
  Das Ziel ist ein reeller Nenner. Nur das Produkt $z\cdot\bar z$ ist garantiert reell, denn es ist $|z|^2 = c^2 + d^2$.
  Mit dem Nenner selbst entstünde $z^2$, und das ist meist nicht reell. Zum Beispiel ist $(1 - i)^2 = -2i$.
  Die Konjugierte funktioniert, weil sich die gemischten Glieder wegheben und $i^2 = -1$ das Vorzeichen von $d^2$ positiv macht.
```

### Übungen

```aufgabe
id: kz-betrag-konjugiert
titel: Betrag und Konjugierte
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Für $z = -3 + 4i$: Bestimme $|z|$, $\bar z$ und $z \cdot \bar z$.
teile:
  - typ: zahl
    label: '$|z|$'
    loesung: "abs(-3+4i)"
    anzeige: '5'
    fehler:
      - wert: "sqrt(7)"
        meldung: 'Du hast $(-3)^2$ als $-9$ gerechnet (oder $3^2$ von $4^2$ abgezogen). Das Quadrat einer negativen Zahl ist positiv: $(-3)^2 = +9$. In der Formel $\sqrt{a^2 + b^2}$ werden beide Quadrate addiert.'
      - wert: "1"
        meldung: 'Der Betrag ist nicht die Summe $-3 + 4$. Er ist die Länge des Pfeils, also $\sqrt{a^2 + b^2}$.'
  - typ: komplex
    label: '$\bar z$'
    loesung: "-3-4i"
    anzeige: '-3 - 4i'
    fehler:
      - wert: "3-4i"
        meldung: 'Du hast beide Vorzeichen umgedreht. Beim Konjugieren ändert sich nur das Vorzeichen des **Imaginärteils**.'
      - wert: "3+4i"
        meldung: 'Beim Konjugieren bleibt der Realteil gleich. Nur der Imaginärteil wechselt das Vorzeichen.'
  - typ: zahl
    label: '$z\cdot\bar z$'
    loesung: "(-3+4i)*(-3-4i)"
    anzeige: '25'
    fehler:
      - wert: "-7"
        meldung: '$4i\cdot(-4i) = -16i^2 = +16$. Mit $i^2 = -1$ wird das Vorzeichen positiv.'
hinweise:
  - 'Betrag: $\sqrt{a^2 + b^2}$. Konjugierte: Vorzeichen des Imaginärteils umdrehen. Und es gilt $z\bar z = |z|^2$.'
loesung: |
  Ansatz: Wir benutzen die Definitionen von Betrag und Konjugierter und die Regel $z\bar z = |z|^2$.
  ---
  $|z| = \sqrt{(-3)^2 + 4^2} = \sqrt{25} = 5$.
  ---
  Konjugieren heißt, das Vorzeichen des Imaginärteils umzudrehen: $\bar z = -3 - 4i$.
  ---
  $z\bar z = |z|^2 = 25$. Kontrolle durch Ausmultiplizieren: $(-3 + 4i)(-3 - 4i) = 9 + 12i - 12i - 16i^2 = 9 + 16 = 25$.
```

```aufgabe
id: kz-division-einfach
titel: Ein erster Quotient
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Bringe $\dfrac{5 + 5i}{1 + 2i}$ auf die Form $a + bi$.
teile:
  - typ: komplex
    label: '$\dfrac{5 + 5i}{1 + 2i} =$'
    loesung: "(5+5i)/(1+2i)"
    anzeige: '3 - i'
    fehler:
      - wert: "5+2.5i"
        meldung: 'Du hast Teil für Teil dividiert. Das ist falsch. Erweitere mit der Konjugierten des Nenners.'
      - wert: "1+i"
        meldung: 'Du hast nur den Nenner mit $1 - 2i$ multipliziert. Der Zähler muss ebenfalls mit $1 - 2i$ multipliziert werden.'
hinweise:
  - 'Erweitere mit $1 - 2i$. Der Nenner wird $1^2 + 2^2 = 5$.'
gefuehrt:
  - text: Mit welcher Zahl erweiterst du?
    teil:
      typ: komplex
      loesung: "1-2i"
      fehler:
        - wert: "-1-2i"
          meldung: 'Beim Konjugieren bleibt der Realteil gleich. Nur das Vorzeichen vor $2i$ dreht sich um.'
    erklaerung: 'Mit der Konjugierten des Nenners, also $1 - 2i$.'
  - text: Was ergibt der neue Nenner $(1 + 2i)(1 - 2i)$?
    teil:
      typ: zahl
      loesung: "5"
      fehler:
        - wert: "-3"
          meldung: '$(2i)(-2i) = -4i^2 = +4$. Also $1 + 4$.'
    erklaerung: '$(1 + 2i)(1 - 2i) = 1^2 + 2^2 = 5$.'
  - text: Was ergibt der neue Zähler $(5 + 5i)(1 - 2i)$?
    teil:
      typ: komplex
      loesung: "(5+5i)*(1-2i)"
      fehler:
        - wert: "-5-5i"
          meldung: '$5i\cdot(-2i) = -10i^2 = +10$. Dieser Summand gehört positiv zum Realteil.'
    erklaerung: '$5 - 10i + 5i - 10i^2 = 5 - 5i + 10 = 15 - 5i$.'
  - text: Teile den Zähler durch den Nenner. Was ist das Ergebnis?
    teil:
      typ: komplex
      loesung: "3-i"
    erklaerung: '$\frac{15 - 5i}{5} = 3 - i$.'
loesung: |
  Ansatz: Mit der Konjugierten des Nenners erweitern, damit der Nenner reell wird.
  ---
  Nenner: $(1 + 2i)(1 - 2i) = 1 + 4 = 5$. Zähler: $(5 + 5i)(1 - 2i) = 5 - 10i + 5i - 10i^2 = 15 - 5i$.
  ---
  $\frac{15 - 5i}{5} = 3 - i$. Probe: $(3 - i)(1 + 2i) = 3 + 6i - i - 2i^2 = 5 + 5i$. Stimmt.
```

```aufgabe
id: kz-division
titel: Division mit Konjugierter
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Bringe auf die Form $a + bi$:
  $$w = \frac{3 - i}{1 + 2i} + \frac{5}{2 - i}$$
teile:
  - typ: komplex
    label: '$w$'
    loesung: "(3-i)/(1+2i) + 5/(2-i)"
    anzeige: '\tfrac{11}{5} - \tfrac{2}{5}i = 2{,}2 - 0{,}4i'
    fehler:
      - wert: "3-6i"
        meldung: 'Der erste Bruch ergibt $\frac{1 - 7i}{5}$. Du hast vergessen, den Zähler $1 - 7i$ durch den Nenner $5$ zu teilen.'
hinweise:
  - Jeden Bruch einzeln mit der Konjugierten seines Nenners erweitern.
  - 'Erster Nenner: $(1 + 2i)(1 - 2i) = 5$. Zweiter Nenner: $(2 - i)(2 + i) = 5$.'
loesung: |
  Ansatz: Wir bringen jeden Bruch einzeln in die Form $a + bi$ und addieren dann.
  ---
  $$\frac{3 - i}{1 + 2i} = \frac{(3 - i)(1 - 2i)}{1^2 + 2^2} = \frac{3 - 6i - i + 2i^2}{5} = \frac{1 - 7i}{5}$$
  ---
  $$\frac{5}{2 - i} = \frac{5(2 + i)}{2^2 + 1^2} = \frac{10 + 5i}{5} = 2 + i$$
  ---
  $$w = \frac{1 - 7i}{5} + 2 + i = \frac{1 - 7i + 10 + 5i}{5} = \frac{11 - 2i}{5} = 2{,}2 - 0{,}4\,i$$
```

```aufgabe
id: kz-abstand-drohnen
titel: Abstand zweier Drohnen
niveau: 2
lernziel: 3
kompetenz: modellieren
angabe: |
  Zwei Drohnen fliegen auf derselben Höhe. Ihre Positionen werden in einer Karte als komplexe Zahlen angegeben:
  Der Realteil ist die Ostrichtung, der Imaginärteil die Nordrichtung, beides in Metern vom Startplatz aus.
  Drohne A ist bei $z_A = -1 + 3i$, Drohne B bei $z_B = 5 - 5i$.

  a) Wie weit sind die Drohnen voneinander entfernt (in Metern)?

  b) Ein Funkrelais soll genau in der Mitte zwischen beiden stehen. Gib seine Position als komplexe Zahl an.
teile:
  - typ: zahl
    label: 'a) Abstand'
    einheit: m
    loesung: "abs((-1+3i) - (5-5i))"
    anzeige: '10'
    fehler:
      - wert: "sqrt(20)"
        meldung: 'Das ist $|z_A + z_B|$. Der Abstand ist der Betrag der **Differenz** $z_A - z_B$.'
      - wert: "sqrt(10) + sqrt(50)"
        meldung: 'Das sind die beiden Entfernungen zum Startplatz, zusammengezählt. Gesucht ist der direkte Abstand $|z_A - z_B|$.'
  - typ: komplex
    label: 'b) Position des Relais'
    loesung: "((-1+3i) + (5-5i))/2"
    anzeige: '2 - i'
    fehler:
      - wert: "-3+4i"
        meldung: 'Das ist die halbe Differenz. Der Mittelpunkt ist der Mittelwert, also die halbe **Summe** $\frac{z_A + z_B}{2}$.'
hinweise:
  - 'Der Abstand zweier Punkte ist der Betrag ihrer Differenz.'
  - 'Der Mittelpunkt zweier Punkte ist wie bei Vektoren $\frac{z_A + z_B}{2}$.'
loesung: |
  Ansatz: Die komplexen Zahlen sind Ortsvektoren in der Karte. Abstand und Mittelpunkt rechnet man wie bei Vektoren in [6.4 Mittelpunkt, Teilungspunkt und Schwerpunkt](/lernen/mathe3/vektoren/mittelpunkt-teilungspunkt-und-schwerpunkt).
  ---
  a) $z_A - z_B = (-1 - 5) + (3 - (-5))\,i = -6 + 8i$. Der Abstand ist $|-6 + 8i| = \sqrt{36 + 64} = \sqrt{100} = 10$ Meter.
  ---
  b) $\frac{z_A + z_B}{2} = \frac{4 - 2i}{2} = 2 - i$. Das Relais steht $2$ Meter östlich und $1$ Meter südlich des Startplatzes.
  ---
  Plausibilität: Vom Relais bis zu jeder Drohne sind es $|(-1 + 3i) - (2 - i)| = |-3 + 4i| = 5$ Meter, also genau der halbe Abstand.
```

```aufgabe
id: kz-kehrwert
titel: Kehrwert und sein Betrag
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Gegeben ist $z = 3 + 4i$.

  a) Berechne $\dfrac1z$ in der Form $a + bi$ (exakt oder als Dezimalzahl).

  b) Berechne $\left|\dfrac1z\right|$. Vergleiche mit $|z|$.
teile:
  - typ: komplex
    label: 'a) $\dfrac1z$'
    loesung: "1/(3+4i)"
    anzeige: '\tfrac{3}{25} - \tfrac{4}{25}i = 0{,}12 - 0{,}16i'
    fehler:
      - wert: "1/3 + i/4"
        meldung: 'Man kann nicht Teil für Teil den Kehrwert bilden. Erweitere $\frac{1}{3 + 4i}$ mit $3 - 4i$.'
      - wert: "3-4i"
        meldung: 'Der Zähler stimmt, aber der Nenner $(3 + 4i)(3 - 4i) = 25$ fehlt.'
  - typ: zahl
    label: 'b) $\left|\dfrac1z\right|$'
    loesung: "abs(1/(3+4i))"
    anzeige: '\tfrac15 = 0{,}2'
    fehler:
      - wert: "5"
        meldung: 'Das ist $|z|$. Gefragt ist der Betrag des Kehrwerts.'
hinweise:
  - 'Erweitere mit $\bar z = 3 - 4i$.'
  - 'Für b): Betrag von $0{,}12 - 0{,}16i$ mit der Formel $\sqrt{a^2 + b^2}$.'
loesung: |
  Ansatz: Kehrwert wie jeden Quotienten mit der Konjugierten des Nenners erweitern.
  ---
  a) $\frac{1}{3 + 4i} = \frac{3 - 4i}{(3 + 4i)(3 - 4i)} = \frac{3 - 4i}{25} = 0{,}12 - 0{,}16\,i$.
  ---
  b) $\left|\frac1z\right| = \sqrt{0{,}12^2 + 0{,}16^2} = \sqrt{0{,}0144 + 0{,}0256} = \sqrt{0{,}04} = 0{,}2$.
  ---
  Vergleich: $|z| = 5$ und $\left|\frac1z\right| = \frac15$. Der Betrag des Kehrwerts ist der Kehrwert des Betrags.
  In der Lektion [15.6 Multiplizieren und Potenzieren in Polarform](/lernen/mathe3/komplexe-zahlen/multiplizieren-und-potenzieren-in-polarform-drehstreckung-und-de-moivre) sehen wir, warum das immer gilt.
```

```aufgabe
id: kz-division-fehler
titel: Fehler finden beim Dividieren
niveau: 2
lernziel: 3
kompetenz: begruenden
angabe: |
  Eine Mitschülerin rechnet:
  $$\frac{4 + 2i}{1 - i} = \frac{(4 + 2i)(1 - i)}{(1 - i)(1 + i)} = \frac{6 - 2i}{2} = 3 - i.$$
  a) Wo liegt der Fehler?

  b) Berechne den Quotienten richtig.
teile:
  - typ: auswahl
    label: 'a) Der Fehler'
    optionen:
      - 'Zähler und Nenner wurden mit verschiedenen Zahlen multipliziert. Der Zähler muss ebenfalls mit $1 + i$ multipliziert werden.'
      - 'Der Nenner $(1 - i)(1 + i)$ ist $0$, nicht $2$.'
      - 'Man darf bei komplexen Zahlen gar nicht erweitern.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$(1 - i)(1 + i) = 1 - i^2 = 1 + 1 = 2$. Der Nenner stimmt.'
      - wert: 2
        meldung: 'Erweitern ist erlaubt, wenn Zähler und Nenner mit **derselben** Zahl ungleich null multipliziert werden.'
  - typ: komplex
    label: 'b) $\dfrac{4 + 2i}{1 - i} =$'
    loesung: "(4+2i)/(1-i)"
    anzeige: '1 + 3i'
    fehler:
      - wert: "3-i"
        meldung: 'Das ist das falsche Ergebnis der Mitschülerin. Multipliziere den Zähler mit $1 + i$.'
hinweise:
  - 'Vergleiche, womit der Zähler und womit der Nenner multipliziert wurde.'
  - 'Richtig: $\frac{(4 + 2i)(1 + i)}{2}$.'
loesung: |
  Ansatz: Erweitern bedeutet, Zähler und Nenner mit derselben Zahl zu multiplizieren. Wir prüfen, ob das passiert ist.
  ---
  a) Im Zähler steht der Faktor $1 - i$, im Nenner der Faktor $1 + i$. Das ist kein Erweitern, der Wert des Bruchs ändert sich.
  ---
  b) $\frac{(4 + 2i)(1 + i)}{(1 - i)(1 + i)} = \frac{4 + 4i + 2i + 2i^2}{2} = \frac{2 + 6i}{2} = 1 + 3i$.
  ---
  Probe: $(1 + 3i)(1 - i) = 1 - i + 3i - 3i^2 = 4 + 2i$. Stimmt.
```

```aufgabe
id: kz-pruefung-gleichung
titel: Eine lineare Gleichung in ℂ
niveau: 3
lernziel: 3
kompetenz: rechnen
angabe: |
  Bestimme $z \in \C$ mit
  $$(2 + i)\,z - 3i = 4 + (1 - i)\,z.$$
  Gib $z$ in der Form $a + bi$ an.
teile:
  - typ: komplex
    label: '$z$'
    loesung: "(4+3i)/((2+i)-(1-i))"
    anzeige: '2 - i'
    fehler:
      - wert: "(4+3i)/3"
        meldung: 'Du hast $(2 + i) + (1 - i) = 3$ gerechnet. Wenn $(1 - i)\,z$ von rechts nach links kommt, wird es **abgezogen**: $(2 + i) - (1 - i) = 1 + 2i$.'
      - wert: "4+3i"
        meldung: '$(2 + i) - (1 - i)$ ist nicht $1$. Das Minus vor der Klammer dreht auch das Vorzeichen von $-i$ um: $(2 + i) - (1 - i) = 1 + 2i$.'
      - wert: "(4-3i)/(1+2i)"
        meldung: 'Wenn $-3i$ auf die rechte Seite kommt, wird daraus $+3i$. Rechts steht also $4 + 3i$.'
hinweise:
  - Alle Terme mit $z$ auf die linke Seite bringen, alle anderen auf die rechte. Dann $z$ herausheben.
  - '$(2 + i) - (1 - i) = 1 + 2i$. Danach durch $1 + 2i$ dividieren.'
loesung: |
  Ansatz: Wie bei einer linearen Gleichung in $\R$ sortieren wir nach Termen mit und ohne $z$.
  Komplexe Zahlen erlauben dieselben Umformungen.
  ---
  $(2 + i)z - (1 - i)z = 4 + 3i$. Herausheben: $\big((2 + i) - (1 - i)\big)z = (1 + 2i)z = 4 + 3i$.
  ---
  $$z = \frac{4 + 3i}{1 + 2i} = \frac{(4 + 3i)(1 - 2i)}{1 + 4} = \frac{4 - 8i + 3i - 6i^2}{5} = \frac{10 - 5i}{5} = 2 - i$$
  ---
  Probe: links $(2 + i)(2 - i) - 3i = 5 - 3i$. Rechts $4 + (1 - i)(2 - i) = 4 + (2 - i - 2i + i^2) = 4 + 1 - 3i = 5 - 3i$. Stimmt.
```

## Polarform und Exponentialform

```aufgabe
id: kz-check-einheitskreis
titel: Ein Punkt auf dem Einheitskreis
niveau: 1
art: check
angabe: |
  Welche Koordinaten hat der Punkt auf dem Einheitskreis, der zum Winkel $150°$ gehört? Gib sie exakt an.
  Herkunft: [Kapitel 5, „Der Einheitskreis“](/lernen/mathe3/trigonometrie/der-einheitskreis).
teile:
  - typ: vektor
    label: 'Punkt $(\cos 150° \mid \sin 150°)$'
    namen: ["x", "y"]
    loesung: ["-sqrt(3)/2", "1/2"]
    fehler:
      - wert: ["sqrt(3)/2", "1/2"]
        meldung: '$150°$ liegt im 2. Quadranten, also links der senkrechten Achse. Dort ist der Kosinus negativ.'
      - wert: ["-1/2", "sqrt(3)/2"]
        meldung: 'Der Bezugswinkel ist $180° - 150° = 30°$, nicht $60°$. Bei $30°$ ist der Kosinus der größere Wert $\tfrac{\sqrt3}{2}$.'
hinweise:
  - 'Bezugswinkel $180° - 150° = 30°$. Im 2. Quadranten ist $\cos$ negativ und $\sin$ positiv.'
loesung: |
  Der Bezugswinkel ist $30°$, mit $\cos 30° = \tfrac{\sqrt3}{2}$ und $\sin 30° = \tfrac12$.
  ---
  Im 2. Quadranten ist die $x$-Koordinate negativ: $(\cos 150° \mid \sin 150°) = \left(-\tfrac{\sqrt3}{2} \mid \tfrac12\right)$.
```

Einen Punkt der Ebene kann man auf zwei Arten beschreiben. Die erste kennst du: „$3$ nach rechts, $3$ nach oben“.
Das sind die Koordinaten $(a \mid b)$, also die algebraische Form $a + bi$. Die zweite Art kennt jeder Seefahrer:
„Fahre $4{,}24$ Seemeilen in Richtung $45°$.“ Das ist eine Angabe aus **Abstand** und **Richtung**. Für komplexe
Zahlen heißt diese zweite Beschreibung **Polarform**. Sie macht das Multiplizieren, Potenzieren und Wurzelziehen
viel einfacher, wie du in den Lektionen [15.6 Multiplizieren und Potenzieren in Polarform](/lernen/mathe3/komplexe-zahlen/multiplizieren-und-potenzieren-in-polarform-drehstreckung-und-de-moivre) und [15.7 n-te Wurzeln und regelmäßige Vielecke](/lernen/mathe3/komplexe-zahlen/n-te-wurzeln-und-regelmaessige-vielecke) siehst.

### Betrag und Argument

:::definition[Polarform]
Jede komplexe Zahl $z \ne 0$ lässt sich schreiben als
$$z = r\,(\cos\varphi + i\sin\varphi).$$
Dabei ist $r = |z|$ der **Betrag**, also die Länge des Pfeils, und $\varphi = \arg z$ das **Argument**. Das Argument ist
der Winkel zwischen der positiven reellen Achse und dem Pfeil, gemessen **gegen** den Uhrzeigersinn. Der griechische
Buchstabe $\varphi$ heißt „phi“.
:::

Der Winkel ist nur bis auf volle Umdrehungen festgelegt: $30°$, $390°$ und $-330°$ zeigen in dieselbe Richtung. Man legt
deshalb einen Bereich fest. In diesem Kapitel gilt $0° \le \varphi < 360°$, wenn nichts anderes verlangt ist. Manche
Bücher verwenden $-180° < \varphi \le 180°$. Für $z = 0$ gibt es kein Argument, weil der Pfeil keine Richtung hat.

```plot
x: [-4, 2]
y: [-1, 4]
gleich: true
achsen: { x: "Re", y: "Im" }
vektoren:
  - { nach: [-3, 3], label: "z = −3 + 3i", farbe: 0 }
kurven:
  - { x: "0.8*cos(t)", y: "0.8*sin(t)", t: [0, "3*pi/4"], label: "φ = 135°", farbe: 1 }
strecken:
  - { von: [-3, 0], nach: [-3, 3], gestrichelt: true }
punkte:
  - { x: -1.8, y: 1.1, label: "r = 3√2" }
beschriftung: Die Zahl −3 + 3i als Pfeil. Seine Länge ist r = 3√2 ≈ 4,24, sein Winkel zur positiven reellen Achse ist φ = 135°, gemessen gegen den Uhrzeigersinn. Die gestrichelte Linie zeigt den Imaginärteil 3.
```

### Von der Polarform zur algebraischen Form

Das ist der einfache Weg. Im rechtwinkligen Dreieck aus Pfeil, Realteil und Imaginärteil gilt:
$$a = r\cos\varphi, \qquad b = r\sin\varphi.$$
Dabei ist $r$ die Hypotenuse, $a$ die Ankathete und $b$ die Gegenkathete von $\varphi$. Diese Formeln gelten in allen
vier Quadranten, weil Sinus und Kosinus dort die richtigen Vorzeichen haben.

:::beispiel[Polarform in algebraische Form]
Schreibe $z = 4\,(\cos 120° + i\sin 120°)$ in der Form $a + bi$.

1. Werte vom Einheitskreis: $\cos 120° = -\tfrac12$ und $\sin 120° = \tfrac{\sqrt3}{2}$ (2. Quadrant, Bezugswinkel $60°$).
2. Realteil: $a = 4\cdot\left(-\tfrac12\right) = -2$. Imaginärteil: $b = 4\cdot\tfrac{\sqrt3}{2} = 2\sqrt3$.
3. Ergebnis: $z = -2 + 2\sqrt3\, i \approx -2 + 3{,}464\, i$.
:::

### Von der algebraischen Form zur Polarform

Der Betrag ist $r = \sqrt{a^2 + b^2}$. Für den Winkel gilt im rechtwinkligen Dreieck $\tan\varphi = \frac ba$. Der
Taschenrechner liefert mit $\arctan\frac ba$ aber nur Winkel zwischen $-90°$ und $90°$. Das sind Richtungen nach rechts,
also nur der 1. und 4. Quadrant. Liegt $z$ links, muss man nachbessern.

:::merke[Rezept: algebraische Form in Polarform]
1. **Skizze:** Zeichne $z$ und bestimme den Quadranten.
2. **Betrag:** $r = \sqrt{a^2 + b^2}$.
3. **Hilfswinkel:** $\alpha = \arctan\frac ba$ mit dem Taschenrechner im Grad-Modus.
4. **Quadrant beachten:**
   - 1. Quadrant ($a > 0$, $b > 0$) und positive reelle Achse ($a > 0$, $b = 0$): $\varphi = \alpha$.
   - 2. und 3. Quadrant ($a < 0$): $\varphi = \alpha + 180°$.
   - 4. Quadrant ($a > 0$, $b < 0$): $\varphi = \alpha + 360°$.
   - Auf der imaginären Achse ($a = 0$): $\varphi = 90°$ für $b > 0$ und $\varphi = 270°$ für $b < 0$.
5. **Kontrolle:** Passt $\varphi$ zur Skizze?
:::

:::beispiel[Eine Zahl im 2. Quadranten]
Bestimme die Polarform von $z = -3 + 3i$.

1. Skizze: $a = -3 < 0$ und $b = 3 > 0$, also 2. Quadrant. Der Winkel liegt zwischen $90°$ und $180°$.
2. Betrag: $r = \sqrt{9 + 9} = \sqrt{18} = 3\sqrt2 \approx 4{,}24$.
3. Hilfswinkel: $\alpha = \arctan\frac{3}{-3} = \arctan(-1) = -45°$.
4. Wegen $a < 0$: $\varphi = -45° + 180° = 135°$. Das passt zur Skizze.

Ergebnis: $z = 3\sqrt2\,(\cos 135° + i\sin 135°)$.
:::

:::beispiel[Eine Zahl im 4. Quadranten]
Bestimme die Polarform von $z = 2 - 2\sqrt3\, i$.

1. Skizze: $a = 2 > 0$ und $b < 0$, also 4. Quadrant.
2. Betrag: $r = \sqrt{4 + 12} = \sqrt{16} = 4$.
3. Hilfswinkel: $\alpha = \arctan\frac{-2\sqrt3}{2} = \arctan(-\sqrt3) = -60°$.
4. Für den Bereich $0° \le \varphi < 360°$ addieren wir $360°$: $\varphi = 300°$.

Ergebnis: $z = 4\,(\cos 300° + i\sin 300°)$.
:::

:::achtung[Der Taschenrechner kennt den Quadranten nicht]
**Falsch:** „$z = -3 + 3i$, also $\varphi = \arctan\frac{3}{-3} = -45°$.“

**Richtig:** Der Winkel $-45°$ zeigt nach rechts unten, also auf $3 - 3i$. Unsere Zahl liegt aber links oben. Für $a < 0$
muss man $180°$ addieren: $\varphi = 135°$. Der Taschenrechner sieht nur den Quotienten $\frac{3}{-3} = -1$. Denselben
Quotienten liefert auch $\frac{-3}{3}$. Er kann die beiden Zahlen deshalb nicht unterscheiden.
:::

:::achtung[Kosinus gehört zum Realteil]
**Falsch:** $2\,(\cos 30° + i\sin 30°) = 2\sin 30° + 2\cos 30°\, i = 1 + \sqrt3\, i$.

**Richtig:** Der Realteil ist $r\cos\varphi$, der Imaginärteil $r\sin\varphi$. Also $2\cos 30° + 2\sin 30°\, i = \sqrt3 + i$.
Merkhilfe: Der Kosinus steht in der Formel **ohne** $i$, der Sinus **mit** $i$.
:::

```reflexion
frage: Warum genügt die Gleichung $\tan\varphi = \frac ba$ allein nicht, um das Argument festzulegen?
antwort: |
  Der Tangens wiederholt sich alle $180°$. Zu jedem Wert von $\frac ba$ gibt es deshalb zwei Winkel zwischen $0°$ und $360°$,
  die genau entgegengesetzt sind. Zum Beispiel haben $1 + i$ und $-1 - i$ beide $\frac ba = 1$, aber die Argumente $45°$ und $225°$.
  Erst das Vorzeichen von $a$, also die Frage „links oder rechts?“, entscheidet, welcher der beiden Winkel richtig ist.
  Deshalb beginnt jede Umrechnung mit einer Skizze.
```

### Die Exponentialform

Der Schweizer Mathematiker Leonhard Euler entdeckte im 18. Jahrhundert einen erstaunlichen Zusammenhang, die
**Eulersche Formel**:
$$e^{i\varphi} = \cos\varphi + i\sin\varphi.$$
Dabei ist $e \approx 2{,}718$ die Eulersche Zahl und $\varphi$ ein Winkel **im Bogenmaß**. Damit kann man die Polarform kurz als
$$z = r\,e^{i\varphi}$$
schreiben. Das ist die **Exponentialform**. Für die Prüfung genügt es, $e^{i\varphi}$ als **Abkürzung** für
$\cos\varphi + i\sin\varphi$ zu verstehen. Der Beweis der Formel braucht Reihen und gehört nicht zum Prüfungsstoff.

Warum ausgerechnet eine e-Potenz? In der Lektion [15.6 Multiplizieren und Potenzieren in Polarform](/lernen/mathe3/komplexe-zahlen/multiplizieren-und-potenzieren-in-polarform-drehstreckung-und-de-moivre) sehen wir: Beim Multiplizieren werden die Winkel addiert. Genau
so verhalten sich Potenzen, denn $e^{i\alpha}\cdot e^{i\beta} = e^{i(\alpha + \beta)}$. Die Schreibweise passt also zu den Rechenregeln.

:::beispiel[Exponentialform umrechnen]
1. $2e^{i\pi/3}$: Der Winkel $\frac\pi3$ entspricht $60°$. Also $2(\cos 60° + i\sin 60°) = 1 + \sqrt3\, i$.
2. $e^{i\pi}$: Der Winkel $\pi$ entspricht $180°$. Also $\cos 180° + i\sin 180° = -1$. Daraus folgt die berühmte Gleichung
   $e^{i\pi} + 1 = 0$. Sie verbindet in einer einzigen Zeile fünf besonders wichtige Zahlen: $0$, $1$, $\pi$, $e$ und $i$.
3. $z = -3 + 3i$ hat $r = 3\sqrt2$ und $\varphi = 135° = \frac{3\pi}{4}$. Also $z = 3\sqrt2\, e^{3\pi i/4}$.
:::

Viele Bücher schreiben auch $r\,e^{i\cdot 135°}$ mit dem Winkel in Grad. Gemeint ist dasselbe. Wenn du mit dem
Taschenrechner weiterrechnest, achte aber darauf, ob er im Grad- oder im Bogenmaß-Modus ist.

### Übungen

```aufgabe
id: kz-polar-zurueck
titel: Polarform in algebraische Form
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Schreibe $z = 6\,(\cos 240° + i\sin 240°)$ in der Form $a + bi$ (exakt oder auf drei Nachkommastellen).
teile:
  - typ: komplex
    label: '$z$'
    loesung: "6*(cos(inRad(240)) + i*sin(inRad(240)))"
    anzeige: '-3 - 3\sqrt3\, i \approx -3 - 5{,}196i'
    fehler:
      - wert: "-3 + 3*sqrt(3)*i"
        meldung: '$240°$ liegt im 3. Quadranten, also unterhalb der reellen Achse. Dort ist der Sinus negativ.'
      - wert: "-3*sqrt(3) - 3i"
        meldung: 'Kosinus und Sinus sind vertauscht. Der Realteil ist $r\cos\varphi$, der Imaginärteil $r\sin\varphi$.'
hinweise:
  - '$\cos 240° = -\cos 60°$ und $\sin 240° = -\sin 60°$ (3. Quadrant).'
loesung: |
  Ansatz: $a = r\cos\varphi$ und $b = r\sin\varphi$. Die Werte bei $240°$ holen wir über den Bezugswinkel $60°$.
  ---
  $\cos 240° = -\tfrac12$, $\sin 240° = -\tfrac{\sqrt3}{2}$, weil im 3. Quadranten beide negativ sind.
  ---
  $z = 6\cdot\left(-\tfrac12\right) + 6\cdot\left(-\tfrac{\sqrt3}{2}\right)i = -3 - 3\sqrt3\,i \approx -3 - 5{,}196\,i$.
  Kontrolle: Der Punkt liegt links unten, passend zu $240°$.
```

```aufgabe
id: kz-exp-zu-algebraisch
titel: Exponentialform auflösen
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Schreibe in der Form $a + bi$:

  a) $2e^{i\pi/2}$

  b) $4e^{i\pi}$

  c) $\sqrt2\, e^{-i\pi/4}$
teile:
  - typ: komplex
    label: 'a) $2e^{i\pi/2}$'
    loesung: "2*exp(i*pi/2)"
    anzeige: '2i'
    fehler:
      - wert: "2"
        meldung: '$\frac\pi2$ ist $90°$. Ein Pfeil mit Winkel $90°$ zeigt senkrecht nach oben, also auf die imaginäre Achse.'
  - typ: komplex
    label: 'b) $4e^{i\pi}$'
    loesung: "4*exp(i*pi)"
    anzeige: '-4'
    fehler:
      - wert: "4"
        meldung: '$\pi$ entspricht $180°$. Der Pfeil zeigt nach links: $\cos 180° = -1$.'
  - typ: komplex
    label: 'c) $\sqrt2\, e^{-i\pi/4}$'
    loesung: "sqrt(2)*exp(-i*pi/4)"
    anzeige: '1 - i'
    fehler:
      - wert: "1+i"
        meldung: 'Der Winkel ist **negativ**, $-45°$. Er wird im Uhrzeigersinn gemessen, der Pfeil zeigt nach rechts unten.'
hinweise:
  - 'Rechne die Winkel ins Gradmaß um: $\frac\pi2 = 90°$, $\pi = 180°$, $-\frac\pi4 = -45°$.'
loesung: |
  Ansatz: $r e^{i\varphi} = r(\cos\varphi + i\sin\varphi)$. Wir setzen Betrag und Winkel ein.
  ---
  a) $2(\cos 90° + i\sin 90°) = 2(0 + i) = 2i$. b) $4(\cos 180° + i\sin 180°) = 4\cdot(-1) = -4$.
  ---
  c) $\sqrt2\,(\cos(-45°) + i\sin(-45°)) = \sqrt2\left(\tfrac{\sqrt2}{2} - \tfrac{\sqrt2}{2}i\right) = 1 - i$.
  Kontrolle: $|1 - i| = \sqrt2$, und $1 - i$ liegt rechts unten, passend zu $-45°$.
```

```aufgabe
id: kz-polar-umrechnen
titel: In Polarform umrechnen
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Bestimme Betrag $r$ und Argument $\varphi$ (in Grad, $0° \le \varphi < 360°$) von
  $$z = -2\sqrt3 + 2i.$$
plot:
  x: [-4, 2]
  y: [-1, 3]
  gleich: true
  achsen: { x: "Re", y: "Im" }
  punkte:
    - { x: "-2*sqrt(3)", y: 2, label: "z" }
teile:
  - typ: zahl
    label: '$r$'
    loesung: "abs(-2*sqrt(3) + 2i)"
    anzeige: '4'
    fehler:
      - wert: "16"
        meldung: 'Das ist $r^2 = a^2 + b^2$. Für den Betrag musst du noch die Wurzel ziehen.'
  - typ: zahl
    label: '$\varphi$'
    einheit: "°"
    loesung: "inGrad(atan2(2, -2*sqrt(3)))"
    anzeige: '150'
    fehler:
      - wert: "-30"
        meldung: '$-30°$ zeigt nach rechts unten. $z$ liegt aber links oben. Für $a < 0$ musst du $180°$ addieren.'
      - wert: "330"
        meldung: '$330°$ liegt im 4. Quadranten. Bei $a < 0$ addiert man $180°$, nicht $360°$.'
hinweise:
  - Zuerst den Quadranten bestimmen. Realteil negativ, Imaginärteil positiv bedeutet welcher Quadrant?
  - '$\arctan\big(\tfrac{2}{-2\sqrt3}\big) = -30°$. Liegt dieser Winkel im richtigen Quadranten?'
gefuehrt:
  - text: In welchem Quadranten liegt $z = -2\sqrt3 + 2i$? Überlege mit der Skizze.
    erklaerung: 'Realteil negativ (links), Imaginärteil positiv (oben): 2. Quadrant. Das Argument liegt also zwischen $90°$ und $180°$.'
  - text: Berechne den Betrag $r$.
    teil:
      typ: zahl
      loesung: "4"
      fehler:
        - wert: "16"
          meldung: 'Das ist $r^2$. Zieh noch die Wurzel.'
    erklaerung: '$r = \sqrt{(-2\sqrt3)^2 + 2^2} = \sqrt{12 + 4} = 4$.'
  - text: Was liefert der Taschenrechner für $\arctan\frac{2}{-2\sqrt3}$ (in Grad)?
    teil:
      typ: zahl
      loesung: "-30"
      fehler:
        - wert: "30"
          meldung: 'Der Quotient $\frac{2}{-2\sqrt3} = -\frac{1}{\sqrt3}$ ist negativ, also auch der Arcustangens.'
    erklaerung: '$\arctan\left(-\tfrac{1}{\sqrt3}\right) = -30°$.'
  - text: Korrigiere den Winkel passend zum Quadranten. Was ist $\varphi$?
    teil:
      typ: zahl
      loesung: "150"
      fehler:
        - wert: "330"
          meldung: 'Bei $a < 0$ addiert man $180°$.'
    erklaerung: 'Wegen $a < 0$: $\varphi = -30° + 180° = 150°$. Das liegt im 2. Quadranten, wie die Skizze verlangt.'
loesung: |
  Ansatz: Rezept „algebraische Form in Polarform“: Skizze, Betrag, Hilfswinkel, Quadrantenkorrektur.
  ---
  Lage: $a = -2\sqrt3 < 0$, $b = 2 > 0$, also 2. Quadrant, $90° < \varphi < 180°$.
  ---
  $r = \sqrt{(-2\sqrt3)^2 + 2^2} = \sqrt{12 + 4} = 4$.
  ---
  $\arctan\frac{2}{-2\sqrt3} = \arctan\left(-\frac{1}{\sqrt3}\right) = -30°$. Das zeigt in den 4. Quadranten, also $+180°$: $\varphi = 150°$.
  ---
  Ergebnis: $z = 4\,(\cos 150° + i \sin 150°) = 4e^{5\pi i/6}$. Probe: $4\cos 150° = -2\sqrt3$ und $4\sin 150° = 2$.
```

```aufgabe
id: kz-argument-quadranten
titel: Argumente in allen vier Richtungen
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: |
  Bestimme das Argument $\varphi$ in Grad mit $0° \le \varphi < 360°$. Mach zu jeder Zahl eine kleine Skizze.
teile:
  - typ: zahl
    label: '$\arg(-5)$'
    einheit: "°"
    loesung: "180"
    fehler:
      - wert: "0"
        meldung: '$-5$ liegt auf der **negativen** reellen Achse, der Pfeil zeigt nach links. Das ist eine halbe Umdrehung.'
  - typ: zahl
    label: '$\arg(-4i)$'
    einheit: "°"
    loesung: "270"
    fehler:
      - wert: "-90"
        meldung: 'Die Richtung stimmt, aber verlangt ist der Bereich $0° \le \varphi < 360°$. Addiere $360°$.'
  - typ: zahl
    label: '$\arg(-2 - 2i)$'
    einheit: "°"
    loesung: "inGrad(atan2(-2, -2)) + 360"
    anzeige: '225'
    fehler:
      - wert: "45"
        meldung: '$\arctan\frac{-2}{-2} = 45°$ zeigt nach rechts oben. Die Zahl liegt aber links unten. Für $a < 0$ musst du $180°$ addieren.'
  - typ: zahl
    label: '$\arg(3 - \sqrt3\, i)$'
    einheit: "°"
    loesung: "inGrad(atan2(-sqrt(3), 3)) + 360"
    anzeige: '330'
    fehler:
      - wert: "-30"
        meldung: 'Die Richtung stimmt, aber der Winkel muss zwischen $0°$ und $360°$ liegen. Addiere $360°$.'
hinweise:
  - 'Zahlen auf den Achsen: rechts $0°$, oben $90°$, links $180°$, unten $270°$.'
  - 'Für die anderen: Hilfswinkel $\arctan\frac ba$, dann je nach Quadrant $180°$ oder $360°$ addieren.'
loesung: |
  Ansatz: Bei Zahlen auf einer Achse liest man den Winkel direkt ab. Sonst gilt das Quadranten-Rezept.
  ---
  $-5$ liegt auf der negativen reellen Achse: $\varphi = 180°$. $-4i$ liegt auf der negativen imaginären Achse: $\varphi = 270°$.
  ---
  $-2 - 2i$ liegt im 3. Quadranten. $\arctan\frac{-2}{-2} = 45°$, plus $180°$ ergibt $\varphi = 225°$.
  ---
  $3 - \sqrt3\, i$ liegt im 4. Quadranten. $\arctan\frac{-\sqrt3}{3} = -30°$, plus $360°$ ergibt $\varphi = 330°$.
```

```aufgabe
id: kz-polar-dezimal
titel: Polarform mit krummem Winkel
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Bestimme die Polarform von $z = -4 + 3i$. Gib $\varphi$ in Grad mit $0° \le \varphi < 360°$ auf zwei Nachkommastellen
  an und zusätzlich im Bogenmaß auf drei Nachkommastellen.
teile:
  - typ: zahl
    label: '$r$'
    loesung: "abs(-4+3i)"
    anzeige: '5'
    fehler:
      - wert: "sqrt(7)"
        meldung: 'Du hast $16 - 9$ gerechnet. Im Betrag werden beide Quadrate **addiert**, und $(-4)^2 = +16$ ist positiv. Also $r = \sqrt{16 + 9}$.'
  - typ: zahl
    label: '$\varphi$ in Grad'
    einheit: "°"
    loesung: "inGrad(atan2(3, -4))"
    anzeige: '143{,}13'
    toleranz: 0.01
    fehler:
      - wert: "-36.87"
        meldung: '$-36{,}87°$ zeigt nach rechts unten. $z$ liegt links oben, also musst du $180°$ addieren.'
      - wert: "323.13"
        meldung: 'Du hast $360°$ addiert. Das ist die Korrektur für den 4. Quadranten. $z$ liegt aber im 2. Quadranten.'
  - typ: zahl
    label: '$\varphi$ im Bogenmaß'
    loesung: "atan2(3, -4)"
    anzeige: '2{,}498'
    toleranz: 0.001
    fehler:
      - wert: "143.13"
        meldung: 'Das ist der Wert in Grad. Rechne mit $\varphi \cdot \frac{\pi}{180°}$ ins Bogenmaß um.'
hinweise:
  - 'Skizze: $a < 0$, $b > 0$, also 2. Quadrant.'
  - '$\arctan\frac{3}{-4} \approx -36{,}87°$. Für $a < 0$ addierst du $180°$.'
loesung: |
  Ansatz: Rezept „algebraische Form in Polarform“. Die Zahl liegt im 2. Quadranten.
  ---
  $r = \sqrt{(-4)^2 + 3^2} = \sqrt{25} = 5$.
  ---
  $\alpha = \arctan\frac{3}{-4} \approx -36{,}87°$. Wegen $a < 0$: $\varphi \approx -36{,}87° + 180° = 143{,}13°$.
  ---
  Im Bogenmaß: $143{,}13°\cdot\frac{\pi}{180°} \approx 2{,}498$. Ergebnis: $z \approx 5\,(\cos 143{,}13° + i\sin 143{,}13°) \approx 5e^{2{,}498\,i}$.
  Probe: $5\cos 143{,}13° \approx -4{,}00$ und $5\sin 143{,}13° \approx 3{,}00$.
```

```aufgabe
id: kz-exp-form
titel: In Exponentialform umrechnen
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Schreibe $z = -\sqrt3 - i$ in der Form $r\,e^{i\varphi}$ mit $\varphi$ im Bogenmaß und $0 \le \varphi < 2\pi$.
  Gib $\varphi$ als Vielfaches von $\pi$ ein (zum Beispiel `5pi/6`).
teile:
  - typ: zahl
    label: '$r$'
    loesung: "abs(-sqrt(3) - i)"
    anzeige: '2'
    fehler:
      - wert: "sqrt(2)"
        meldung: '$(\sqrt3)^2 = 3$, nicht $1$. Also $r = \sqrt{3 + 1}$.'
  - typ: zahl
    label: '$\varphi$'
    loesung: "atan2(-1, -sqrt(3)) + 2*pi"
    anzeige: '\tfrac{7\pi}{6} \approx 3{,}665'
    fehler:
      - wert: "pi/6"
        meldung: '$\frac\pi6 = 30°$ zeigt nach rechts oben. $z$ liegt links unten, also musst du $\pi$ (das sind $180°$) addieren.'
      - wert: "-5*pi/6"
        meldung: 'Die Richtung stimmt, aber verlangt ist $0 \le \varphi < 2\pi$. Addiere $2\pi$.'
hinweise:
  - 'Skizze: beide Teile negativ, also 3. Quadrant.'
  - '$\arctan\frac{-1}{-\sqrt3} = \arctan\frac{1}{\sqrt3} = 30°$. Im 3. Quadranten kommt $180°$ dazu. Dann ins Bogenmaß umrechnen.'
loesung: |
  Ansatz: Erst Betrag und Winkel in Grad, dann den Winkel ins Bogenmaß.
  ---
  $r = \sqrt{3 + 1} = 2$.
  ---
  3. Quadrant: $\alpha = \arctan\frac{-1}{-\sqrt3} = 30°$, also $\varphi = 30° + 180° = 210°$.
  ---
  Im Bogenmaß: $210°\cdot\frac{\pi}{180°} = \frac{7\pi}{6}$. Ergebnis: $z = 2e^{7\pi i/6}$.
  Probe: $2\cos 210° = -\sqrt3$ und $2\sin 210° = -1$.
```

```aufgabe
id: kz-polar-umkehr
titel: Aus Länge und Richtung zurückrechnen
niveau: 3
lernziel: 4
kompetenz: anwenden
angabe: |
  a) Eine komplexe Zahl $z$ hat den Betrag $10$ und liegt auf der Winkelhalbierenden des 2. Quadranten. Gib $z$ in der Form $a + bi$ an.

  b) Für welche reelle Zahl $b$ hat $w = 4 + bi$ das Argument $300°$?

  c) Begründe, warum es keine reelle Zahl $b$ gibt, für die $w = 4 + bi$ das Argument $120°$ hat.
teile:
  - typ: komplex
    label: 'a) $z$'
    loesung: "10*(cos(inRad(135)) + i*sin(inRad(135)))"
    anzeige: '-5\sqrt2 + 5\sqrt2\, i \approx -7{,}071 + 7{,}071i'
    fehler:
      - wert: "-5 + 5i"
        meldung: 'Der Betrag von $-5 + 5i$ ist $\sqrt{50} \approx 7{,}07$, nicht $10$. Rechne $10\cos 135°$ und $10\sin 135°$.'
  - typ: zahl
    label: 'b) $b$'
    loesung: "4*tan(inRad(300))"
    anzeige: '-4\sqrt3 \approx -6{,}928'
    fehler:
      - wert: "4*sqrt(3)"
        meldung: '$300°$ liegt im 4. Quadranten, also unterhalb der reellen Achse. Der Imaginärteil muss negativ sein.'
  - typ: text
    label: 'c) Begründung'
    muster: |
      Ein Argument von $120°$ bedeutet eine Richtung nach links oben, also einen negativen Realteil.
      Der Realteil von $w = 4 + bi$ ist aber immer $4 > 0$. Solche Zahlen liegen alle rechts der imaginären Achse.
      Ihr Argument liegt deshalb zwischen $-90°$ und $90°$ (im Bereich $[0°, 360°)$ also unter $90°$ oder über $270°$).
hinweise:
  - 'Die Winkelhalbierende des 2. Quadranten hat den Winkel $135°$.'
  - 'Für b): $\tan 300° = \frac{b}{4}$. Kontrolliere das Vorzeichen mit der Skizze.'
loesung: |
  Ansatz: Aus Betrag und Winkel folgt die algebraische Form über $a = r\cos\varphi$ und $b = r\sin\varphi$.
  ---
  a) Winkel $135°$, Betrag $10$: $z = 10\cos 135° + 10\sin 135°\, i = -5\sqrt2 + 5\sqrt2\, i \approx -7{,}071 + 7{,}071\,i$.
  ---
  b) Für $\varphi = 300°$ gilt $\tan 300° = \frac b4$. Mit $\tan 300° = -\sqrt3$ folgt $b = -4\sqrt3 \approx -6{,}928$.
  Kontrolle: $4 - 4\sqrt3\, i$ liegt rechts unten, im 4. Quadranten, passend zu $300°$.
  ---
  c) Das Argument $120°$ zeigt nach links oben, verlangt also einen negativen Realteil. Der Realteil von $w$ ist immer $4$.
  Der Ansatz $\tan 120° = \frac b4$ liefert zwar $b = -4\sqrt3$. Diese Zahl hat aber das Argument $300°$, nicht $120°$.
  Der Tangens kann die beiden Richtungen nicht unterscheiden.
```

## Multiplizieren und Potenzieren in Polarform: Drehstreckung und de Moivre

```aufgabe
id: kz-check-additionstheorem
titel: Das Additionstheorem für den Kosinus
niveau: 1
art: check
angabe: |
  Welche Formel ist das Additionstheorem für $\cos(\alpha + \beta)$?
  Herkunft: [Kapitel 5, „Trigonometrische Identitäten“](/lernen/mathe3/trigonometrie/trigonometrische-identitaeten).
teile:
  - typ: auswahl
    optionen:
      - '$\cos\alpha\cos\beta - \sin\alpha\sin\beta$'
      - '$\cos\alpha\cos\beta + \sin\alpha\sin\beta$'
      - '$\cos\alpha + \cos\beta$'
      - '$\sin\alpha\cos\beta + \cos\alpha\sin\beta$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Das ist die Formel für $\cos(\alpha - \beta)$. Bei der Summe steht ein Minus. Probe mit $\alpha = \beta = 90°$: $\cos 180° = -1 = 0 - 1$.'
      - wert: 2
        meldung: 'Der Kosinus ist nicht additiv. Probe: $\cos(60° + 60°) = \cos 120° = -\tfrac12$, aber $\cos 60° + \cos 60° = 1$.'
      - wert: 3
        meldung: 'Das ist das Additionstheorem für $\sin(\alpha + \beta)$.'
hinweise:
  - 'Prüfe deine Wahl mit $\alpha = \beta = 90°$. Dann muss $\cos 180° = -1$ herauskommen.'
loesung: |
  Es gilt $\cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta$.
  ---
  Probe mit $\alpha = \beta = 90°$: links $\cos 180° = -1$, rechts $0\cdot 0 - 1\cdot 1 = -1$.
```

In der Lektion [15.3 Addieren, Subtrahieren und Multiplizieren](/lernen/mathe3/komplexe-zahlen/addieren-subtrahieren-und-multiplizieren) hast du beobachtet: Beim Produkt wird der Pfeil gedreht. Mit der Polarform
können wir jetzt genau sagen, um wie viel. Die Antwort ist überraschend einfach, und sie macht hohe Potenzen zu einer
Rechnung von wenigen Zeilen.

### Die Multiplikationsregel

:::satz[Multiplikation und Division in Polarform]
Für $z_1 = r_1(\cos\varphi_1 + i\sin\varphi_1)$ und $z_2 = r_2(\cos\varphi_2 + i\sin\varphi_2)$ gilt
$$z_1 z_2 = r_1 r_2\,\big(\cos(\varphi_1 + \varphi_2) + i\sin(\varphi_1 + \varphi_2)\big),$$
$$\frac{z_1}{z_2} = \frac{r_1}{r_2}\,\big(\cos(\varphi_1 - \varphi_2) + i\sin(\varphi_1 - \varphi_2)\big) \quad\text{für } z_2 \ne 0.$$
In Worten: **Beim Multiplizieren werden die Beträge multipliziert und die Winkel addiert.** Beim Dividieren werden die
Beträge dividiert und die Winkel subtrahiert. In Exponentialform: $r_1 e^{i\varphi_1}\cdot r_2 e^{i\varphi_2} = r_1 r_2\, e^{i(\varphi_1 + \varphi_2)}$.
:::

:::beweis
Wir multiplizieren aus, wie in der Lektion [15.3 Addieren, Subtrahieren und Multiplizieren](/lernen/mathe3/komplexe-zahlen/addieren-subtrahieren-und-multiplizieren):
$$\begin{aligned}
z_1 z_2 &= r_1 r_2\,(\cos\varphi_1 + i\sin\varphi_1)(\cos\varphi_2 + i\sin\varphi_2)\\
&= r_1 r_2\,\big[(\cos\varphi_1\cos\varphi_2 - \sin\varphi_1\sin\varphi_2) + i\,(\sin\varphi_1\cos\varphi_2 + \cos\varphi_1\sin\varphi_2)\big].
\end{aligned}$$
Das Minus im Realteil kommt von $i\sin\varphi_1\cdot i\sin\varphi_2 = i^2\sin\varphi_1\sin\varphi_2$. In den Klammern stehen
genau die Additionstheoreme für Kosinus und Sinus aus
[5.12 Trigonometrische Identitäten](/lernen/mathe3/trigonometrie/trigonometrische-identitaeten), die auch in der Frage zu Beginn
dieser Lektion vorkommen. Die erste Klammer ist $\cos(\varphi_1 + \varphi_2)$, die zweite
$\sin(\varphi_1 + \varphi_2)$. Damit ist die Formel für das Produkt gezeigt. Die Formel für den Quotienten folgt daraus:
Die Zahl $\frac{r_1}{r_2}\big(\cos(\varphi_1 - \varphi_2) + i\sin(\varphi_1 - \varphi_2)\big)$ ergibt mit $z_2$
multipliziert nach der Produktformel genau $z_1$.
:::

Geometrisch heißt das: Multiplizieren mit $z_2$ ist eine **Drehstreckung**. Der Pfeil von $z_1$ wird um den Winkel
$\varphi_2$ gegen den Uhrzeigersinn gedreht und um den Faktor $r_2$ gestreckt. Zum Beispiel hat $i$ den Betrag $1$ und
den Winkel $90°$. Multiplizieren mit $i$ dreht also um $90°$ und streckt gar nicht. Zweimal mit $i$ multiplizieren dreht
um $180°$, und das ist die Multiplikation mit $-1$. So sieht man $i^2 = -1$ als Bild.

:::beispiel[Produkt und Quotient in Polarform]
Gegeben sind $z_1 = 4\,(\cos 70° + i\sin 70°)$ und $z_2 = 2\,(\cos 25° + i\sin 25°)$.

1. Produkt: Beträge mal, $4\cdot 2 = 8$. Winkel plus, $70° + 25° = 95°$. Also $z_1 z_2 = 8\,(\cos 95° + i\sin 95°)$.
2. Quotient: Beträge geteilt, $4 : 2 = 2$. Winkel minus, $70° - 25° = 45°$. Also $\frac{z_1}{z_2} = 2\,(\cos 45° + i\sin 45°)$.
3. Den Quotienten können wir sogar exakt in algebraische Form bringen: $2\cdot\tfrac{\sqrt2}{2} + 2\cdot\tfrac{\sqrt2}{2}\,i = \sqrt2 + \sqrt2\, i$.
:::

:::beispiel[Beide Wege führen zum selben Ergebnis]
Berechne $(1 + i)(\sqrt3 + i)$ auf zwei Arten.

1. Algebraisch: $\sqrt3 + i + \sqrt3\, i + i^2 = (\sqrt3 - 1) + (\sqrt3 + 1)\,i \approx 0{,}732 + 2{,}732\,i$.
2. Polar: $1 + i$ hat $r = \sqrt2$ und $\varphi = 45°$. $\sqrt3 + i$ hat $r = 2$ und $\varphi = 30°$. Das Produkt hat $r = 2\sqrt2$ und $\varphi = 75°$.
3. Vergleich: $2\sqrt2\cos 75° \approx 0{,}732$ und $2\sqrt2\sin 75° \approx 2{,}732$. Beide Wege stimmen überein.
:::

```plot
x: [-1, 3.5]
y: [-0.5, 3.5]
gleich: true
achsen: { x: "Re", y: "Im" }
vektoren:
  - { nach: [1, 1], label: "1 + i  (45°)", farbe: 0 }
  - { nach: ["sqrt(3)", 1], label: "√3 + i  (30°)", farbe: 1 }
  - { nach: ["sqrt(3) - 1", "sqrt(3) + 1"], label: "Produkt  (75°)", farbe: 2 }
beschriftung: Multiplikation als Drehstreckung. Der Pfeil 1 + i hat den Winkel 45°, der Pfeil √3 + i den Winkel 30°. Ihr Produkt hat den Winkel 45° + 30° = 75° und die Länge √2 · 2 = 2√2.
```

:::beispiel[Anwendung: einen Punkt drehen]
In einem Zeichenprogramm liegt ein Punkt bei $P = (4 \mid 1)$, gemessen in Zentimetern vom Drehzentrum. Er soll um $60°$
gegen den Uhrzeigersinn um das Drehzentrum gedreht werden.

1. Wir schreiben $P$ als $z = 4 + i$. Drehen um $60°$ heißt: mit $\cos 60° + i\sin 60° = \tfrac12 + \tfrac{\sqrt3}{2}\,i$ multiplizieren. Diese Zahl hat Betrag $1$, also wird nicht gestreckt.
2. $(4 + i)\left(\tfrac12 + \tfrac{\sqrt3}{2}i\right) = 2 + 2\sqrt3\, i + \tfrac12 i + \tfrac{\sqrt3}{2}i^2 = \left(2 - \tfrac{\sqrt3}{2}\right) + \left(2\sqrt3 + \tfrac12\right)i$.
3. Gerundet liegt der gedrehte Punkt bei $(1{,}13 \mid 3{,}96)$ Zentimetern. Kontrolle: Der Abstand zum Zentrum bleibt $\sqrt{17} \approx 4{,}12$ cm.
:::

:::achtung[Beträge werden multipliziert, nicht addiert]
**Falsch:** $2\,(\cos 30° + i\sin 30°)\cdot 3\,(\cos 40° + i\sin 40°) = 5\,(\cos 70° + i\sin 70°)$.

**Richtig:** Die Beträge werden **multipliziert**, die Winkel **addiert**: $6\,(\cos 70° + i\sin 70°)$. Wer die Regel
durcheinanderbringt, kann sie an einem einfachen Fall prüfen: $2\cdot 3 = 6$ für reelle Zahlen mit Winkel $0°$.
:::

### Potenzen: der Satz von de Moivre

Eine Potenz $z^n$ ist ein Produkt aus $n$ gleichen Faktoren. Nach der Multiplikationsregel wird der Betrag $n$-mal mit
sich selbst multipliziert, und der Winkel $n$-mal addiert. Das ist der Satz von de Moivre, benannt nach dem französischen
Mathematiker Abraham de Moivre.

:::satz[Satz von de Moivre]
Für jede natürliche Zahl $n$ gilt
$$\big(r\,(\cos\varphi + i\sin\varphi)\big)^n = r^n\,\big(\cos(n\varphi) + i\sin(n\varphi)\big).$$
In Exponentialform: $\left(r e^{i\varphi}\right)^n = r^n e^{in\varphi}$.
:::

:::beispiel[Eine hohe Potenz]
Berechne $(1 + i)^8$.

1. Polarform: $1 + i$ hat $r = \sqrt2$ und $\varphi = 45°$.
2. De Moivre: $r^8 = (\sqrt2)^8 = 2^4 = 16$ und $8\varphi = 360°$.
3. Also $(1 + i)^8 = 16\,(\cos 360° + i\sin 360°) = 16\cdot(1 + 0i) = 16$.

Ausmultiplizieren von acht Klammern wäre mühsam und fehleranfällig. Mit de Moivre sind es drei Zeilen.
:::

:::beispiel[Ein Winkel über 360°]
Berechne $(1 - \sqrt3\, i)^5$.

1. Polarform: $r = \sqrt{1 + 3} = 2$. Die Zahl liegt im 4. Quadranten, $\arctan(-\sqrt3) = -60°$, also $\varphi = 300°$.
2. De Moivre: $r^5 = 32$ und $5\cdot 300° = 1500°$.
3. Volle Umdrehungen abziehen: $1500° = 4\cdot 360° + 60°$. Der Winkel $1500°$ zeigt in dieselbe Richtung wie $60°$.
4. Ergebnis: $32\,(\cos 60° + i\sin 60°) = 16 + 16\sqrt3\, i$.
:::

:::achtung[Die Potenz verteilt sich nicht auf die Summe]
**Falsch:** $(1 + i)^8 = 1^8 + i^8 = 1 + 1 = 2$.

**Richtig:** $(a + b)^n$ ist nicht $a^n + b^n$, auch nicht im Reellen: $(1 + 1)^2 = 4$, aber $1^2 + 1^2 = 2$.
Hohe Potenzen einer Summe rechnet man mit de Moivre. Richtig ist $(1 + i)^8 = 16$.
:::

:::achtung[Den Betrag mitpotenzieren]
**Falsch:** $\big(2\,(\cos 30° + i\sin 30°)\big)^4 = 2\,(\cos 120° + i\sin 120°)$.

**Richtig:** Der Betrag wird ebenfalls hoch $4$ genommen: $2^4 = 16$. Also $16\,(\cos 120° + i\sin 120°) = -8 + 8\sqrt3\, i$.
:::

:::merke[Rezept: hohe Potenzen]
1. Rechne $z$ in die Polarform um (Skizze, Betrag, Winkel mit Quadrantenkorrektur).
2. Bilde $r^n$ und $n\varphi$.
3. Ziehe von $n\varphi$ so viele volle $360°$ ab, bis der Winkel zwischen $0°$ und $360°$ liegt.
4. Rechne mit $a = r^n\cos(n\varphi)$ und $b = r^n\sin(n\varphi)$ zurück in die algebraische Form.
:::

```reflexion
frage: Warum ist $z\cdot\bar z$ immer reell? Erkläre es diesmal mit Betrag und Winkel statt mit Ausmultiplizieren.
antwort: |
  Die Konjugierte $\bar z$ ist das Spiegelbild von $z$ an der reellen Achse. Sie hat denselben Betrag $r$, aber den Winkel $-\varphi$.
  Beim Multiplizieren werden die Winkel addiert: $\varphi + (-\varphi) = 0°$. Ein Pfeil mit Winkel $0°$ liegt auf der positiven
  reellen Achse. Sein Betrag ist $r\cdot r = r^2$. Also ist $z\bar z = r^2 = |z|^2$, für $z \ne 0$ eine positive reelle Zahl.
  (Für $z = 0$ gibt es keinen Winkel, aber dann ist $z\bar z = 0$ ohnehin reell.)
```

### Selbst ausprobieren

```aufgabe
id: kz-check-vorhersage-produkt
titel: Vorhersage zum Produkt
niveau: 1
art: check
angabe: |
  Im folgenden Widget ist $z_2 = i$ eingestellt. **Bevor** du es benutzt: Was passiert mit dem Pfeil $z_1 \cdot z_2$,
  wenn du $z_2$ gegen den Uhrzeigersinn weiterziehst, zuerst auf $-1$ und dann auf $-i$? Alle drei Punkte $i$, $-1$ und $-i$
  liegen auf dem Kreis mit Radius $1$ um den Nullpunkt.
teile:
  - typ: auswahl
    optionen:
      - 'Er dreht sich mit und bleibt gleich lang.'
      - 'Er wird länger.'
      - 'Er bleibt stehen.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Die Länge des Produkts ist $|z_1|\cdot|z_2|$. Wenn $z_2$ auf dem Kreis mit Radius $1$ bleibt, ist $|z_2| = 1$ fest.'
      - wert: 2
        meldung: 'Der Winkel des Produkts ist $\varphi_1 + \varphi_2$. Wenn $\varphi_2$ wächst, wächst auch der Winkel des Produkts.'
hinweise:
  - 'Beträge werden multipliziert, Winkel addiert.'
loesung: |
  Beim Weiterziehen bleibt $|z_2| = 1$, aber $\varphi_2$ wächst.
  ---
  Das Produkt hat die Länge $|z_1|\cdot 1 = |z_1|$ und den Winkel $\varphi_1 + \varphi_2$. Es dreht sich also mit und bleibt gleich lang.
```

```widget
name: komplex
titel: Multiplikation als Drehstreckung
props:
  z1: [2, 1]
  z2: [0, 1]
  operation: produkt
```

**Beobachte:** Zieh $z_2$ von $i$ auf $-1$ und dann auf $-i$. Diese Punkte liegen alle im Abstand $1$ vom Nullpunkt.
Das Produkt dreht sich jedes Mal um eine Vierteldrehung weiter, seine Länge bleibt. Zieh $z_2$ dann nach außen auf $2i$.
Jetzt wird der Produktpfeil doppelt so lang. **Erklärung:** Der Betrag von $z_2$ ist der Streckfaktor, der Winkel von
$z_2$ ist der Drehwinkel. Probier zum Schluss „$z_1^n$“ aus: Zieh $z_1$ auf $1 + 0{,}5i$ und schieb den Regler $n$ langsam
nach oben. Die Punkte $z_1^2, z_1^3, \dots$ laufen dann auf einer Spirale nach außen, weil jede Potenz um denselben
Winkel weiterdreht und um denselben Faktor $|z_1| \approx 1{,}12$ länger wird.

### Anwendung: Wechselstrom (Vertiefung)

:::anwendung
In Steckdosen schwingt die Spannung sinusförmig, $50$-mal pro Sekunde. Elektrotechniker stellen solche Schwingungen
als **Zeiger** dar: als Pfeil, der sich gleichmäßig dreht. Die tatsächliche Spannung ist der Realteil des Zeigers.
Weil Drehungen in $\C$ Multiplikationen sind, wird das Rechnen mit Wechselströmen fast so einfach wie mit Gleichstrom.
Mehr dazu steht in [Physik 14.8 Spule und Kondensator im Wechselstromkreis](/lernen/physik1/magnetismus-wechselstrom/spule-und-kondensator-im-wechselstromkreis).
:::

Jedes Bauteil bekommt eine komplexe **Impedanz** $Z$ in Ohm. Ein Widerstand hat $Z = R$ (reell). Eine Spule hat eine
Impedanz mit positivem Imaginärteil, ein Kondensator eine mit negativem. Der Betrag dieses Imaginärteils heißt
**Blindwiderstand**: Er bremst den Strom, ohne Wärme zu erzeugen. Es gilt das **Ohmsche Gesetz** in komplexer Form
$U = Z\cdot I$. Dabei sind die Spannung $U$ und die Stromstärke $I$ ebenfalls komplexe Zeiger. Der Betrag $|Z|$ ist das
Verhältnis der Spannung zur Stromstärke, und das Argument von $Z$ ist die **Phasenverschiebung**, also der Winkel, um den
der Strom der Spannung nachläuft.

:::beispiel[Widerstand und Spule in Reihe]
Ein Widerstand $R = 30\,\Omega$ und eine Spule mit $40\,\Omega$ Blindwiderstand sind in Reihe an $230\,\text{V}$ angeschlossen.

1. Impedanz: $Z = (30 + 40i)\,\Omega$.
2. Betrag: $|Z| = \sqrt{30^2 + 40^2}\,\Omega = 50\,\Omega$. Argument: $\varphi = \arctan\frac{40}{30} \approx 53{,}13°$ (1. Quadrant).
3. Stromstärke: $I = \frac{230\,\text{V}}{50\,\Omega} = 4{,}6\,\text{A}$. Der Strom läuft der Spannung um etwa $53°$ nach.
:::

### Übungen

```aufgabe
id: kz-drehstreckung
titel: Multiplikation geometrisch
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Es sei $z_1 = 2e^{i\cdot 50°}$ und $z_2 = 3e^{i\cdot 100°}$.
  Bestimme Betrag und Argument von $z_1 z_2$ und von $z_1/z_2$ (Argument in Grad, $0° \le \varphi < 360°$).
teile:
  - typ: zahl
    label: '$|z_1 z_2|$'
    loesung: "2*3"
    anzeige: '6'
    fehler:
      - wert: "5"
        meldung: 'Beträge werden **multipliziert**, nicht addiert.'
  - typ: zahl
    label: '$\arg(z_1 z_2)$'
    einheit: "°"
    loesung: "50 + 100"
    anzeige: '150'
    fehler:
      - wert: "5000"
        meldung: 'Winkel werden **addiert**, nicht multipliziert.'
  - typ: zahl
    label: '$|z_1 / z_2|$'
    loesung: "2/3"
    anzeige: '\tfrac{2}{3}'
    fehler:
      - wert: "-1"
        meldung: 'Beim Dividieren werden die Beträge **dividiert**: $\frac23$. Ein Betrag ist außerdem nie negativ.'
  - typ: zahl
    label: '$\arg(z_1 / z_2)$'
    einheit: "°"
    loesung: "50 - 100 + 360"
    anzeige: '310'
    fehler:
      - wert: "-50"
        meldung: 'Die Richtung stimmt, aber verlangt ist $0° \le \varphi < 360°$. Addiere $360°$.'
hinweise:
  - 'Beim Produkt: Beträge multiplizieren, Winkel addieren. Beim Quotienten: Beträge dividieren, Winkel subtrahieren.'
loesung: |
  Ansatz: Nach der Multiplikationsregel in Polarform werden Beträge multipliziert und Winkel addiert, beim Dividieren entsprechend dividiert und subtrahiert.
  ---
  $|z_1 z_2| = 2\cdot 3 = 6$, $\arg(z_1z_2) = 50° + 100° = 150°$.
  ---
  $|z_1/z_2| = \tfrac23$, $\arg(z_1/z_2) = 50° - 100° = -50°$. Plus $360°$ ergibt $310°$.
```

```aufgabe
id: kz-polar-produkt-algebraisch
titel: Produkt in Polarform, Ergebnis algebraisch
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Gegeben sind $z = 2\,(\cos 20° + i\sin 20°)$ und $w = 4\,(\cos 40° + i\sin 40°)$.
  Berechne $z\cdot w$ und gib das Ergebnis exakt in der Form $a + bi$ an.
teile:
  - typ: komplex
    label: '$z\cdot w$'
    loesung: "8*(cos(inRad(60)) + i*sin(inRad(60)))"
    anzeige: '4 + 4\sqrt3\, i \approx 4 + 6{,}928i'
    fehler:
      - wert: "6*(cos(inRad(60)) + i*sin(inRad(60)))"
        meldung: 'Du hast die Beträge addiert. Beim Multiplizieren werden sie multipliziert: $2\cdot 4$.'
      - wert: "8*(cos(inRad(800)) + i*sin(inRad(800)))"
        meldung: 'Du hast die Winkel multipliziert. Sie werden addiert: $20° + 40°$.'
hinweise:
  - 'Beträge multiplizieren, Winkel addieren. Danach $\cos 60°$ und $\sin 60°$ einsetzen.'
gefuehrt:
  - text: Welchen Betrag hat $z\cdot w$?
    teil:
      typ: zahl
      loesung: "8"
      fehler:
        - wert: "6"
          meldung: 'Beträge werden multipliziert, nicht addiert.'
    erklaerung: '$|zw| = 2\cdot 4 = 8$.'
  - text: Welches Argument (in Grad) hat $z\cdot w$?
    teil:
      typ: zahl
      loesung: "60"
      fehler:
        - wert: "800"
          meldung: 'Winkel werden addiert, nicht multipliziert.'
    erklaerung: '$\arg(zw) = 20° + 40° = 60°$.'
  - text: Welche exakten Werte haben $\cos 60°$ und $\sin 60°$? Überlege, bevor du weiterklickst.
    erklaerung: '$\cos 60° = \tfrac12$ und $\sin 60° = \tfrac{\sqrt3}{2}$.'
  - text: Gib $z\cdot w = 8(\cos 60° + i\sin 60°)$ in der Form $a + bi$ an.
    teil:
      typ: komplex
      loesung: "4 + 4*sqrt(3)*i"
    erklaerung: '$8\cdot\tfrac12 = 4$ und $8\cdot\tfrac{\sqrt3}{2} = 4\sqrt3$. Also $zw = 4 + 4\sqrt3\, i$.'
loesung: |
  Ansatz: In Polarform werden Beträge multipliziert und Winkel addiert.
  ---
  $z\cdot w = 2\cdot 4\,\big(\cos(20° + 40°) + i\sin(20° + 40°)\big) = 8\,(\cos 60° + i\sin 60°)$.
  ---
  Mit $\cos 60° = \tfrac12$ und $\sin 60° = \tfrac{\sqrt3}{2}$: $z\cdot w = 4 + 4\sqrt3\, i \approx 4 + 6{,}928\, i$.
```

```aufgabe
id: kz-de-moivre
titel: Hohe Potenz
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Berechne $\left(\sqrt3 + i\right)^6$ in der Form $a + bi$.
teile:
  - typ: komplex
    label: '$(\sqrt3 + i)^6$'
    loesung: "(sqrt(3) + i)^6"
    anzeige: '-64'
    fehler:
      - wert: "64"
        meldung: '$6\cdot 30° = 180°$, und $\cos 180° = -1$. Das Ergebnis ist negativ.'
      - wert: "26"
        meldung: 'Du hast $(\sqrt3)^6 + i^6 = 27 - 1$ gerechnet. Eine Potenz verteilt sich nicht auf eine Summe. Nimm de Moivre.'
hinweise:
  - 'Polarform: $r = 2$, $\varphi = 30°$.'
  - 'Nach de Moivre: $r^6$ und $6\varphi$.'
loesung: |
  Ansatz: Hohe Potenzen rechnet man in Polarform mit dem Satz von de Moivre.
  ---
  $r = \sqrt{3 + 1} = 2$. Es ist $\tan\varphi = \tfrac{1}{\sqrt3}$ und $z$ liegt im 1. Quadranten, also $\varphi = 30°$.
  ---
  $(\sqrt3 + i)^6 = 2^6\,(\cos 180° + i\sin 180°) = 64\cdot(-1 + 0i) = -64$.
  ---
  Plausibilität: Der Winkel $180°$ bedeutet, dass das Ergebnis auf der negativen reellen Achse liegt. Das passt zu $-64$.
```

```aufgabe
id: kz-potenz-polar
titel: Eine Potenz aus dem 2. Quadranten
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Berechne $(-1 + i)^6$ in der Form $a + bi$.
teile:
  - typ: komplex
    label: '$(-1 + i)^6$'
    loesung: "(-1+i)^6"
    anzeige: '8i'
    fehler:
      - wert: "6*sqrt(2)*i"
        meldung: 'Der Betrag wird potenziert, nicht mit $6$ multipliziert: $(\sqrt2)^6 = 8$.'
      - wert: "64i"
        meldung: 'Der Betrag von $-1 + i$ ist $\sqrt2$, nicht $2$. Also $(\sqrt2)^6 = 2^3 = 8$.'
      - wert: "-8i"
        meldung: '$6\cdot 135° = 810° = 720° + 90°$. Der Pfeil zeigt nach oben, der Imaginärteil ist positiv.'
hinweise:
  - '$-1 + i$ liegt im 2. Quadranten: $r = \sqrt2$, $\varphi = 135°$.'
  - '$6\cdot 135° = 810°$. Ziehe volle $360°$ ab.'
loesung: |
  Ansatz: Satz von de Moivre. Dafür zuerst die Polarform.
  ---
  $r = \sqrt{1 + 1} = \sqrt2$. 2. Quadrant: $\arctan\frac{1}{-1} = -45°$, plus $180°$ ergibt $\varphi = 135°$.
  ---
  $r^6 = (\sqrt2)^6 = 8$ und $6\cdot 135° = 810° = 2\cdot 360° + 90°$.
  ---
  $(-1 + i)^6 = 8\,(\cos 90° + i\sin 90°) = 8i$. Kontrolle: $(-1 + i)^2 = 1 - 2i + i^2 = -2i$, und $(-2i)^3 = -8i^3 = 8i$.
```

```aufgabe
id: kz-drehung-punkt
titel: Einen Punkt um 45° drehen
niveau: 2
lernziel: 5
kompetenz: modellieren
angabe: |
  In einem Grafikprogramm soll der Punkt $P = (3 \mid 2)$ (Angaben in Zentimetern) um $45°$ **gegen** den Uhrzeigersinn
  um den Ursprung gedreht werden. Schreibe $P$ als komplexe Zahl und berechne den gedrehten Punkt als komplexe Zahl
  (exakt oder auf drei Nachkommastellen).
teile:
  - typ: komplex
    label: 'gedrehter Punkt'
    loesung: "(3+2i)*(cos(inRad(45)) + i*sin(inRad(45)))"
    anzeige: '\tfrac{\sqrt2}{2}(1 + 5i) \approx 0{,}707 + 3{,}536i'
    fehler:
      - wert: "(3+2i)*(cos(inRad(45)) - i*sin(inRad(45)))"
        meldung: 'Das ist eine Drehung **im** Uhrzeigersinn, also um $-45°$. Gegen den Uhrzeigersinn multipliziert man mit $\cos 45° + i\sin 45°$.'
      - wert: "(3+2i)*(1+i)"
        meldung: '$1 + i$ hat den richtigen Winkel $45°$, aber den Betrag $\sqrt2$. Der Punkt würde zusätzlich gestreckt. Nimm $\tfrac{\sqrt2}{2}(1 + i)$.'
hinweise:
  - 'Drehen um $\alpha$ heißt Multiplizieren mit $\cos\alpha + i\sin\alpha$. Diese Zahl hat Betrag $1$.'
  - '$\cos 45° + i\sin 45° = \tfrac{\sqrt2}{2}(1 + i)$.'
loesung: |
  Ansatz: Eine Drehung um den Ursprung ist eine Multiplikation mit einer Zahl vom Betrag $1$, deren Winkel der Drehwinkel ist.
  ---
  $P$ entspricht $z = 3 + 2i$. Drehfaktor: $\cos 45° + i\sin 45° = \tfrac{\sqrt2}{2}(1 + i)$.
  ---
  $(3 + 2i)\cdot\tfrac{\sqrt2}{2}(1 + i) = \tfrac{\sqrt2}{2}(3 + 3i + 2i + 2i^2) = \tfrac{\sqrt2}{2}(1 + 5i) \approx 0{,}707 + 3{,}536\, i$.
  ---
  Der gedrehte Punkt liegt bei etwa $(0{,}71 \mid 3{,}54)$ cm. Kontrolle: Der Abstand zum Ursprung ist vorher und nachher $\sqrt{13} \approx 3{,}61$ cm.
```

```aufgabe
id: kz-quotient-polar
titel: Ein Quotient in Polarform
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Bestimme Betrag und Argument (in Grad, $0° \le \varphi < 360°$) von
  $$q = \frac{2 + 2i}{1 - \sqrt3\, i}.$$
teile:
  - typ: zahl
    label: '$|q|$'
    loesung: "abs((2+2i)/(1 - sqrt(3)*i))"
    anzeige: '\sqrt2 \approx 1{,}414'
    fehler:
      - wert: "4*sqrt(2)"
        meldung: 'Du hast die Beträge multipliziert. Beim Dividieren werden sie dividiert: $\frac{2\sqrt2}{2}$.'
  - typ: zahl
    label: '$\arg q$'
    einheit: "°"
    loesung: "45 - 300 + 360"
    anzeige: '105'
    fehler:
      - wert: "345"
        meldung: 'Du hast die Winkel addiert. Beim Dividieren werden sie subtrahiert: $45° - 300°$.'
      - wert: "-255"
        meldung: 'Die Richtung stimmt, aber verlangt ist $0° \le \varphi < 360°$. Addiere $360°$.'
hinweise:
  - 'Zähler: $r = 2\sqrt2$, $\varphi = 45°$. Nenner: $r = 2$, $\varphi = 300°$ (4. Quadrant).'
  - 'Beträge dividieren, Winkel subtrahieren.'
loesung: |
  Ansatz: Zähler und Nenner in Polarform umrechnen, dann die Divisionsregel anwenden.
  ---
  Zähler $2 + 2i$: $r = \sqrt8 = 2\sqrt2$, 1. Quadrant, $\varphi = 45°$. Nenner $1 - \sqrt3\, i$: $r = 2$, 4. Quadrant, $\arctan(-\sqrt3) = -60°$, also $\varphi = 300°$.
  ---
  $|q| = \frac{2\sqrt2}{2} = \sqrt2$ und $\arg q = 45° - 300° = -255°$, plus $360°$ ergibt $105°$.
  ---
  Kontrolle algebraisch: $\frac{(2 + 2i)(1 + \sqrt3 i)}{4} = \frac{(2 - 2\sqrt3) + (2 + 2\sqrt3)i}{4} \approx -0{,}366 + 1{,}366\, i$. Das liegt im 2. Quadranten, passend zu $105°$.
```

```aufgabe
id: kz-moivre-reell
titel: Wann ist eine Potenz reell?
niveau: 3
lernziel: 5
kompetenz: begruenden
angabe: |
  a) Für welche positiven ganzen Zahlen $n$ ist $(1 + i)^n$ reell? Gib die drei kleinsten an, getrennt durch Strichpunkte.

  b) Berechne $(1 + i)^{12}$.

  c) Begründe deine Antwort zu a) mit dem Satz von de Moivre.
teile:
  - typ: menge
    label: 'a) die drei kleinsten $n$'
    loesung: ["4", "8", "12"]
    fehler:
      - wert: ["2", "4", "6"]
        meldung: '$(1 + i)^2 = 2i$ ist rein imaginär, nicht reell. Der Winkel $2\cdot 45° = 90°$ zeigt nach oben.'
  - typ: komplex
    label: 'b) $(1 + i)^{12}$'
    loesung: "(1+i)^12"
    anzeige: '-64'
    fehler:
      - wert: "64"
        meldung: '$12\cdot 45° = 540° = 360° + 180°$. Der Pfeil zeigt nach links, das Ergebnis ist negativ.'
  - typ: text
    label: 'c) Begründung'
    muster: |
      Es ist $1 + i = \sqrt2\,(\cos 45° + i\sin 45°)$. Nach de Moivre hat $(1 + i)^n$ den Winkel $n\cdot 45°$.
      Eine Zahl ungleich null ist genau dann reell, wenn ihr Pfeil auf der reellen Achse liegt, also wenn ihr Winkel ein
      Vielfaches von $180°$ ist. Aus $n\cdot 45° = k\cdot 180°$ folgt $n = 4k$. Also ist $(1 + i)^n$ genau für die Vielfachen von $4$ reell.
hinweise:
  - 'Nach de Moivre hat $(1 + i)^n$ den Winkel $n\cdot 45°$.'
  - 'Reell heißt: Der Pfeil liegt auf der reellen Achse, der Winkel ist also $0°$, $180°$, $360°$, ...'
loesung: |
  Ansatz: Mit de Moivre bestimmen wir den Winkel von $(1 + i)^n$ und fragen, wann er auf der reellen Achse liegt.
  ---
  $1 + i = \sqrt2\,(\cos 45° + i\sin 45°)$, also hat $(1 + i)^n$ den Betrag $(\sqrt2)^n$ und den Winkel $n\cdot 45°$.
  ---
  a) Reell bedeutet: Winkel ist ein Vielfaches von $180°$. Aus $n\cdot 45° = k\cdot 180°$ folgt $n = 4k$. Die kleinsten sind $4$, $8$, $12$.
  ---
  b) $(1 + i)^{12} = (\sqrt2)^{12}\,(\cos 540° + i\sin 540°) = 64\,(\cos 180° + i\sin 180°) = -64$.
  ---
  c) Siehe a). Kontrolle: $(1 + i)^4 = \big((1 + i)^2\big)^2 = (2i)^2 = -4$ ist reell, $(1 + i)^2 = 2i$ dagegen nicht.
```

```aufgabe
id: kz-wechselstrom
titel: Wechselstrom mit Kondensator (Vertiefung)
niveau: 3
lernziel: 5
kompetenz: modellieren
angabe: |
  Ein Widerstand $R = 120\,\Omega$ und ein Kondensator mit $50\,\Omega$ Blindwiderstand sind in Reihe an eine Wechselspannung
  von $230\,\text{V}$ angeschlossen. Der Kondensator hat die Impedanz $-50i\,\Omega$.

  a) Gib die Gesamtimpedanz $Z$ an.

  b) Berechne $|Z|$ in Ohm.

  c) Berechne das Argument von $Z$ in Grad (zwischen $-90°$ und $90°$), auf zwei Nachkommastellen.

  d) Berechne die Stromstärke $\frac{230\,\text{V}}{|Z|}$ in Ampere, auf drei Nachkommastellen.
teile:
  - typ: komplex
    label: 'a) $Z$ in $\Omega$'
    loesung: "120 - 50i"
    fehler:
      - wert: "120+50i"
        meldung: 'Ein Kondensator hat eine Impedanz mit **negativem** Imaginärteil, hier $-50i\,\Omega$.'
  - typ: zahl
    label: 'b) $|Z|$'
    einheit: "Ω"
    loesung: "abs(120 - 50i)"
    anzeige: '130'
    fehler:
      - wert: "70"
        meldung: 'Der Betrag ist nicht $120 - 50$. Er ist $\sqrt{120^2 + 50^2}$, die Länge des Zeigers.'
  - typ: zahl
    label: 'c) $\arg Z$'
    einheit: "°"
    loesung: "inGrad(atan2(-50, 120))"
    anzeige: '-22{,}62'
    toleranz: 0.01
    fehler:
      - wert: "22.62"
        meldung: 'Der Imaginärteil ist negativ, der Zeiger zeigt nach rechts unten. Das Argument ist negativ.'
  - typ: zahl
    label: 'd) Stromstärke'
    einheit: "A"
    loesung: "230/abs(120 - 50i)"
    anzeige: '1{,}769'
    toleranz: 0.001
    fehler:
      - wert: "230/170"
        meldung: 'Du hast durch $120 + 50 = 170$ geteilt. Maßgeblich ist der Betrag $|Z| = 130\,\Omega$.'
hinweise:
  - 'Bei Reihenschaltung addieren sich die Impedanzen: $Z = R + (-50i)$.'
  - '$|Z| = \sqrt{120^2 + 50^2}$. Das Argument ist $\arctan\frac{-50}{120}$, weil $Z$ rechts der imaginären Achse liegt.'
loesung: |
  Ansatz: Impedanzen in Reihe addieren sich. Betrag und Argument der Gesamtimpedanz bestimmen Stromstärke und Phasenverschiebung.
  ---
  a) $Z = (120 - 50i)\,\Omega$.
  ---
  b) $|Z| = \sqrt{120^2 + 50^2}\,\Omega = \sqrt{14\,400 + 2\,500}\,\Omega = \sqrt{16\,900}\,\Omega = 130\,\Omega$.
  ---
  c) $Z$ liegt im 4. Quadranten, also genügt der Arcustangens ohne Korrektur: $\arg Z = \arctan\frac{-50}{120} \approx -22{,}62°$.
  ---
  d) $I = \frac{230\,\text{V}}{130\,\Omega} \approx 1{,}769\,\text{A}$. Das negative Argument bedeutet: Beim Kondensator eilt der
  Strom der Spannung um etwa $22{,}6°$ voraus.
```

## n-te Wurzeln und regelmäßige Vielecke

```aufgabe
id: kz-check-hoehere-gleichung
titel: Reelle Lösungen einer Potenzgleichung
niveau: 1
art: check
angabe: |
  Gib alle **reellen** Lösungen von $x^4 = 16$ an, getrennt durch Strichpunkte.
  Herkunft: [Kapitel 2, „Gleichungen höheren Grades“](/lernen/mathe3/gleichungen/gleichungen-hoeheren-grades).
teile:
  - typ: menge
    label: '$x \in$'
    loesung: ["-2", "2"]
    fehler:
      - wert: ["2"]
        meldung: 'Auch $(-2)^4 = 16$, denn eine gerade Hochzahl macht das Vorzeichen positiv.'
      - wert: ["4", "-4"]
        meldung: 'Das sind die Lösungen von $x^2 = 16$. Hier steht $x^4$. Probe: $4^4 = 256$.'
hinweise:
  - 'Bei gerader Hochzahl gibt es zu jeder positiven Lösung auch eine negative.'
loesung: |
  $x^4 = 16$ heißt $x = \sqrt[4]{16} = 2$ oder $x = -2$, denn bei gerader Hochzahl ist auch die negative Zahl eine Lösung.
  ---
  Weitere reelle Lösungen gibt es nicht. In $\C$ werden wir aber noch zwei weitere finden.
```

Im Reellen hat $x^4 = 16$ genau zwei Lösungen und $x^3 = 8$ nur eine. In $\C$ ändert sich das: Die Gleichung $z^n = w$
hat für jede Zahl $w \ne 0$ **genau $n$ Lösungen**. Die Polarform zeigt, woher sie kommen, und sie liefert ein schönes
Bild: Die Lösungen bilden die Ecken eines regelmäßigen Vielecks.

### Die Idee: Betrag und Winkel getrennt lösen

Gesucht sind alle $z$ mit $z^n = w$. Wir schreiben $w = r\,(\cos\varphi + i\sin\varphi)$ in Polarform und machen für die
Lösung den Ansatz $z = \rho\,(\cos\psi + i\sin\psi)$. Die griechischen Buchstaben heißen „rho“ und „psi“. Nach de Moivre ist
$$z^n = \rho^n\,\big(\cos(n\psi) + i\sin(n\psi)\big).$$
Das soll gleich $w$ sein. Zwei Pfeile sind gleich, wenn sie gleich lang sind und in dieselbe Richtung zeigen.

1. **Längen vergleichen:** $\rho^n = r$, also $\rho = \sqrt[n]{r}$. Das ist die gewöhnliche reelle $n$-te Wurzel einer positiven Zahl.
2. **Richtungen vergleichen:** Hier ist Vorsicht nötig. Die Winkel $n\psi$ und $\varphi$ müssen nicht gleich sein. Es genügt, dass sie sich um volle Umdrehungen unterscheiden, denn $\varphi$, $\varphi + 360°$ und $\varphi + 720°$ zeigen in dieselbe Richtung. Also gilt $n\psi = \varphi + k\cdot 360°$ mit einer ganzen Zahl $k$.

Daraus folgt $\psi_k = \frac{\varphi + k\cdot 360°}{n}$. Für $k = 0, 1, \dots, n - 1$ erhalten wir $n$ verschiedene Winkel, die jeweils
$\frac{360°}{n}$ auseinanderliegen. Für $k = n$ ist der Winkel um genau $360°$ größer als für $k = 0$. Das ist wieder dieselbe Lösung.

:::satz[Die n-ten Wurzeln]
Jede komplexe Zahl $w = r\,(\cos\varphi + i\sin\varphi) \ne 0$ hat **genau $n$ verschiedene** $n$-te Wurzeln, also Lösungen von $z^n = w$:
$$z_k = \sqrt[n]{r}\,\left(\cos\frac{\varphi + k\cdot 360°}{n} + i\sin\frac{\varphi + k\cdot 360°}{n}\right), \qquad k = 0, 1, \dots, n - 1.$$
Sie liegen alle auf dem Kreis um $0$ mit Radius $\sqrt[n]{r}$. Benachbarte Lösungen sind $\frac{360°}{n}$ voneinander entfernt.
Deshalb bilden sie die Ecken eines **regelmäßigen $n$-Ecks**.
:::

:::beispiel[Die drei dritten Wurzeln von 8]
Löse $z^3 = 8$ in $\C$.

1. Polarform: $8 = 8\,(\cos 0° + i\sin 0°)$, also $r = 8$ und $\varphi = 0°$.
2. Radius: $\rho = \sqrt[3]{8} = 2$. Winkel: $\psi_k = \frac{0° + k\cdot 360°}{3}$, also $0°$, $120°$ und $240°$.
3. Lösungen: $z_0 = 2$, $z_1 = 2\,(\cos 120° + i\sin 120°) = -1 + \sqrt3\, i$ und $z_2 = 2\,(\cos 240° + i\sin 240°) = -1 - \sqrt3\, i$.
4. Probe für $z_1$ mit de Moivre: $z_1^3 = 2^3\,(\cos 360° + i\sin 360°) = 8$.

Die reelle Lösung $2$ kennst du schon. Dazu kommen zwei nicht-reelle Lösungen, die zueinander konjugiert sind.
:::

```plot
x: [-3, 3]
y: [-2.5, 2.5]
gleich: true
achsen: { x: "Re", y: "Im" }
kurven:
  - { x: "2*cos(t)", y: "2*sin(t)", t: [0, "2*pi"], farbe: 0, gestrichelt: true }
punkte:
  - { x: 2, y: 0, label: "z₀ = 2", farbe: 1 }
  - { x: -1, y: "sqrt(3)", label: "z₁ = −1 + √3 i", farbe: 1 }
  - { x: -1, y: "-sqrt(3)", label: "z₂ = −1 − √3 i", farbe: 1 }
strecken:
  - { von: [2, 0], nach: [-1, "sqrt(3)"] }
  - { von: [-1, "sqrt(3)"], nach: [-1, "-sqrt(3)"] }
  - { von: [-1, "-sqrt(3)"], nach: [2, 0] }
beschriftung: Die drei Lösungen von z³ = 8 liegen auf dem Kreis mit Radius 2 und bilden ein gleichseitiges Dreieck. Benachbarte Lösungen sind 120° voneinander entfernt.
```

:::beispiel[Die vierten Wurzeln von −16]
Löse $z^4 = -16$.

1. Polarform: $-16$ liegt auf der negativen reellen Achse, also $r = 16$ und $\varphi = 180°$.
2. Radius: $\rho = \sqrt[4]{16} = 2$. Winkel: $\psi_k = \frac{180° + k\cdot 360°}{4} = 45° + k\cdot 90°$, also $45°$, $135°$, $225°$, $315°$.
3. Mit $\cos 45° = \sin 45° = \tfrac{\sqrt2}{2}$: Die Lösungen sind $\sqrt2 + \sqrt2\, i$, $-\sqrt2 + \sqrt2\, i$, $-\sqrt2 - \sqrt2\, i$ und $\sqrt2 - \sqrt2\, i$.

Die vier Lösungen bilden ein Quadrat. In $\R$ hätte die Gleichung gar keine Lösung, denn $x^4$ ist nie negativ.
:::

:::achtung[Nicht nur eine Lösung angeben]
**Falsch:** „$z^3 = 8$, also $z = 2$.“

**Richtig:** In $\C$ hat $z^3 = 8$ genau **drei** Lösungen: $2$, $-1 + \sqrt3\, i$ und $-1 - \sqrt3\, i$. Wer nur die reelle
Lösung angibt, hat zwei der drei Lösungen vergessen und verliert in der Prüfung entsprechend Punkte. Prüfe am Ende immer: Habe ich wirklich $n$ Lösungen?
:::

:::achtung[Auch die 360° durch n teilen]
**Falsch:** Bei $z^3 = 8$ (also $\varphi = 0°$) schreibt jemand $\psi_k = \frac{0°}{3} + k\cdot 360° = k\cdot 360°$.
Dann zeigen alle drei Winkel $0°$, $360°$ und $720°$ in dieselbe Richtung. Das ist dreimal dieselbe Lösung $2$.

**Richtig:** Der ganze Ausdruck $\varphi + k\cdot 360°$ wird durch $n$ geteilt: $\psi_k = \frac{0° + k\cdot 360°}{3} = k\cdot 120°$, also $0°$, $120°$, $240°$.
:::

:::achtung[Aus dem Betrag die Wurzel ziehen]
**Falsch:** „$z^4 = 16i$ hat Lösungen mit Betrag $16$.“

**Richtig:** Der Betrag der Lösungen ist $\sqrt[4]{16} = 2$. Probe: Eine Zahl mit Betrag $16$ hätte als vierte Potenz den Betrag $16^4 = 65\,536$.
:::

:::merke[Rezept: alle Lösungen von zⁿ = w]
1. Schreibe $w$ in Polarform: Betrag $r$ und Winkel $\varphi$ (mit Skizze und Quadrantenkorrektur).
2. Radius der Lösungen: $\sqrt[n]{r}$.
3. Erster Winkel: $\psi_0 = \frac{\varphi}{n}$. Jeder weitere Winkel ist um $\frac{360°}{n}$ größer. Höre nach $n$ Winkeln auf.
4. Rechne jede Lösung mit $\cos$ und $\sin$ in die algebraische Form um, wenn das verlangt ist.
5. Probe: Eine Lösung mit de Moivre potenzieren. Skizze: Liegen die Lösungen gleichmäßig auf dem Kreis?
:::

```reflexion
frage: Warum bilden die Lösungen von $z^n = w$ immer ein **regelmäßiges** $n$-Eck und nicht irgendein Vieleck?
antwort: |
  Alle Lösungen haben denselben Betrag $\sqrt[n]{r}$, liegen also auf einem Kreis um den Nullpunkt. Ihre Winkel unterscheiden sich
  jeweils um genau $\frac{360°}{n}$. Damit teilen sie den Kreis in $n$ gleich große Bogenstücke. Gleich große Bogenstücke gehören zu
  gleich langen Sehnen, also sind alle Seiten des Vielecks gleich lang und alle Winkel gleich groß. Anders gesagt: Dreht man das
  Bild um $\frac{360°}{n}$, geht jede Lösung in die nächste über. Das Vieleck sieht danach genauso aus wie vorher.
```

### Selbst ausprobieren

```aufgabe
id: kz-check-vorhersage-wurzeln
titel: Vorhersage zu den fünften Wurzeln
niveau: 1
art: check
angabe: |
  Im folgenden Widget werden die Lösungen von $z^5 = 1$ gezeichnet. **Bevor** du es öffnest: Welchen Winkelabstand haben
  benachbarte Lösungen?
teile:
  - typ: zahl
    label: 'Winkelabstand'
    einheit: "°"
    loesung: "360/5"
    anzeige: '72'
    fehler:
      - wert: "90"
        meldung: '$90°$ wäre der Abstand bei vier Lösungen. Hier teilen fünf Lösungen den Vollwinkel $360°$.'
      - wert: "36"
        meldung: 'Fünf Lösungen teilen den **ganzen** Kreis, $360°$, nicht den halben.'
hinweise:
  - 'Die $n$ Lösungen teilen den Vollwinkel $360°$ in $n$ gleiche Teile.'
loesung: |
  Die fünf Lösungen liegen gleichmäßig auf dem Einheitskreis.
  ---
  Benachbarte Lösungen sind $\frac{360°}{5} = 72°$ voneinander entfernt. Sie bilden ein regelmäßiges Fünfeck mit einer Ecke bei $1$.
```

```widget
name: komplex
titel: Die n-ten Wurzeln bilden ein regelmäßiges n-Eck
props:
  z1: [1, 0]
  operation: wurzeln
  n: 5
```

**Beobachte:** Im Widget heißt die Zahl $w$ auf der rechten Seite der Gleichung $z_1$. Die fünf Lösungen $w_0, \dots, w_4$
bilden ein regelmäßiges Fünfeck mit einer Ecke bei $1$. Zieh jetzt $z_1$ auf $-1$. Das Fünfeck dreht sich um $36°$, denn
der erste Winkel ist jetzt $\frac{180°}{5}$. Zieh $z_1$ dann nach außen auf $4$. Der Kreis wird nur wenig größer, sein
Radius ist $\sqrt[5]{4} \approx 1{,}32$. Verändere zum Schluss den Regler $n$: Aus dem Fünfeck wird ein Dreieck, Quadrat
oder Sechseck. **Erklärung:** Der Betrag von $w$ bestimmt den Radius, der Winkel von $w$ die Drehlage. Die Form des
$n$-Ecks hängt nur von $n$ ab.

### Quadratwurzeln auch ohne Polarform

Für $n = 2$ gibt es einen zweiten Weg, der ohne Winkel auskommt. Er ist praktisch, wenn der Winkel von $w$ krumm ist.

:::beispiel[Quadratwurzeln von −5 + 12i]
Gesucht sind alle $z = x + yi$ mit reellen $x, y$ und $z^2 = -5 + 12i$.

1. Ausmultiplizieren: $(x + yi)^2 = x^2 + 2xyi + y^2 i^2 = (x^2 - y^2) + 2xy\, i$.
2. Real- und Imaginärteil vergleichen: $x^2 - y^2 = -5$ und $2xy = 12$, also $y = \frac{6}{x}$.
3. Einsetzen: $x^2 - \frac{36}{x^2} = -5$. Mit $x^2$ multiplizieren: $x^4 + 5x^2 - 36 = 0$. Das ist eine biquadratische Gleichung. Mit $u = x^2$ folgt $u^2 + 5u - 36 = 0$, also $u = 4$ oder $u = -9$.
4. Weil $x$ reell ist, muss $x^2 = 4$ gelten, also $x = 2$ oder $x = -2$. Daraus $y = 3$ beziehungsweise $y = -3$.
5. Die Lösungen sind $z = 2 + 3i$ und $z = -2 - 3i$. Probe: $(2 + 3i)^2 = 4 + 12i + 9i^2 = -5 + 12i$. Dasselbe Quadrat steht auch als Beispiel in
   [15.3 Addieren, Subtrahieren und Multiplizieren](/lernen/mathe3/komplexe-zahlen/addieren-subtrahieren-und-multiplizieren).
:::

### Übungen

```aufgabe
id: kz-wurzeln-kennzahlen
titel: Anzahl, Radius und Abstand der Lösungen
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  Betrachte die Gleichung $z^5 = 32i$. Gib an:

  a) wie viele Lösungen sie in $\C$ hat,

  b) den Radius des Kreises, auf dem die Lösungen liegen,

  c) den Winkel der Lösung mit dem kleinsten Argument in $[0°, 360°)$.
teile:
  - typ: zahl
    label: 'a) Anzahl'
    loesung: "5"
    fehler:
      - wert: "1"
        meldung: 'In $\C$ hat $z^n = w$ für $w \ne 0$ genau $n$ Lösungen. Hier ist $n = 5$.'
  - typ: zahl
    label: 'b) Radius'
    loesung: "nthRoot(32, 5)"
    anzeige: '2'
    fehler:
      - wert: "32"
        meldung: 'Der Radius ist die **fünfte Wurzel** aus dem Betrag $32$. Probe: $2^5 = 32$.'
      - wert: "32/5"
        meldung: 'Der Betrag wird nicht durch $5$ geteilt. Aus ihm wird die fünfte Wurzel gezogen.'
  - typ: zahl
    label: 'c) kleinster Winkel'
    einheit: "°"
    loesung: "90/5"
    anzeige: '18'
    fehler:
      - wert: "90"
        meldung: '$90°$ ist der Winkel von $w = 32i$. Der Winkel der Lösung ist $\frac{90°}{5}$.'
      - wert: "72"
        meldung: '$72°$ ist der **Abstand** zwischen benachbarten Lösungen. Die erste Lösung hat den Winkel $\frac{\varphi}{5}$.'
hinweise:
  - '$32i$ hat den Betrag $32$ und den Winkel $90°$.'
loesung: |
  Ansatz: Satz über die $n$-ten Wurzeln mit $n = 5$, $r = 32$ und $\varphi = 90°$.
  ---
  a) $5$ Lösungen. b) Radius $\sqrt[5]{32} = 2$, denn $2^5 = 32$.
  ---
  c) $\psi_0 = \frac{90°}{5} = 18°$. Die weiteren Lösungen haben die Winkel $90°$, $162°$, $234°$ und $306°$, jeweils $72°$ weiter.
```

```aufgabe
id: kz-quadratwurzeln-polar
titel: Die Quadratwurzeln von 4i
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Bestimme beide Lösungen von $z^2 = 4i$ in der Form $a + bi$ (exakt oder auf drei Nachkommastellen).
teile:
  - typ: komplex
    label: 'Lösung mit positivem Realteil'
    loesung: "2*(cos(inRad(45)) + i*sin(inRad(45)))"
    anzeige: '\sqrt2 + \sqrt2\, i \approx 1{,}414 + 1{,}414i'
    fehler:
      - wert: "2i"
        meldung: 'Der Radius $2$ stimmt, aber der Winkel muss halbiert werden: $\frac{90°}{2} = 45°$. Probe: $(2i)^2 = -4$.'
  - typ: komplex
    label: 'Lösung mit negativem Realteil'
    loesung: "2*(cos(inRad(225)) + i*sin(inRad(225)))"
    anzeige: '-\sqrt2 - \sqrt2\, i'
    fehler:
      - wert: "-sqrt(2) + sqrt(2)*i"
        meldung: 'Die zweite Quadratwurzel ist das **Negative** der ersten, also um $180°$ gedreht. Beide Vorzeichen wechseln.'
hinweise:
  - '$4i$ hat $r = 4$ und $\varphi = 90°$.'
  - 'Radius $\sqrt4 = 2$, Winkel $\frac{90° + k\cdot 360°}{2}$ für $k = 0, 1$.'
loesung: |
  Ansatz: Rezept für $z^n = w$ mit $n = 2$, $r = 4$, $\varphi = 90°$.
  ---
  Radius $\sqrt4 = 2$. Winkel $\psi_0 = 45°$ und $\psi_1 = 45° + 180° = 225°$.
  ---
  $z_0 = 2(\cos 45° + i\sin 45°) = \sqrt2 + \sqrt2\, i$ und $z_1 = -z_0 = -\sqrt2 - \sqrt2\, i$.
  Probe: $(\sqrt2 + \sqrt2\, i)^2 = 2 + 4i + 2i^2 = 4i$.
```

```aufgabe
id: kz-kubikwurzeln
titel: Alle dritten Wurzeln von 8i
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Bestimme alle Lösungen $w \in \C$ der Gleichung $w^3 = 8i$ in der Form $a + bi$.
  Gib sie nach aufsteigendem Argument in $[0°, 360°)$ geordnet an.
teile:
  - typ: komplex
    label: '$w_0$'
    loesung: "2*(cos(inRad(30)) + i*sin(inRad(30)))"
    anzeige: '\sqrt3 + i'
    fehler:
      - wert: "2i"
        meldung: 'Der Winkel von $8i$ ist $90°$. Für die Lösung wird er durch $3$ geteilt: $30°$.'
  - typ: komplex
    label: '$w_1$'
    loesung: "2*(cos(inRad(150)) + i*sin(inRad(150)))"
    anzeige: '-\sqrt3 + i'
    fehler:
      - wert: "sqrt(3) + i"
        meldung: 'Das ist $w_0$. Die nächste Lösung hat einen um $120°$ größeren Winkel.'
  - typ: komplex
    label: '$w_2$'
    loesung: "-2i"
    anzeige: '-2i'
    fehler:
      - wert: "2i"
        meldung: 'Der Winkel ist $30° + 240° = 270°$. Der Pfeil zeigt nach **unten**.'
hinweise:
  - '$8i$ in Polarform: $r = 8$, $\varphi = 90°$.'
  - 'Betrag der Wurzeln: $\sqrt[3]{8} = 2$. Winkel: $\psi_k = \frac{90° + k\cdot 360°}{3}$ für $k = 0, 1, 2$.'
gefuehrt:
  - text: Welchen Betrag haben alle drei Lösungen?
    teil:
      typ: zahl
      loesung: "2"
      fehler:
        - wert: "8"
          meldung: 'Aus dem Betrag $8$ wird die dritte Wurzel gezogen.'
    erklaerung: '$\sqrt[3]{8} = 2$.'
  - text: Welchen Winkel (in Grad) hat die erste Lösung $w_0$?
    teil:
      typ: zahl
      loesung: "30"
      fehler:
        - wert: "90"
          meldung: 'Der Winkel von $8i$ wird durch $3$ geteilt.'
    erklaerung: '$\psi_0 = \frac{90°}{3} = 30°$.'
  - text: Um wie viel Grad liegen die Lösungen auseinander? Welche Winkel haben $w_1$ und $w_2$?
    erklaerung: '$\frac{360°}{3} = 120°$. Also $\psi_1 = 150°$ und $\psi_2 = 270°$.'
  - text: Gib $w_1 = 2(\cos 150° + i\sin 150°)$ in der Form $a + bi$ an.
    teil:
      typ: komplex
      loesung: "-sqrt(3) + i"
      fehler:
        - wert: "sqrt(3) + i"
          meldung: '$\cos 150° = -\frac{\sqrt3}{2}$ ist negativ (2. Quadrant).'
    erklaerung: '$2\cdot\left(-\tfrac{\sqrt3}{2}\right) + 2\cdot\tfrac12\, i = -\sqrt3 + i$.'
loesung: |
  Ansatz: $8i = 8\,(\cos 90° + i\sin 90°)$. Die Wurzeln haben Betrag $\sqrt[3]{8} = 2$.
  ---
  Winkel: $\psi_0 = 30°$, $\psi_1 = 150°$, $\psi_2 = 270°$. Sie liegen jeweils $120°$ auseinander.
  ---
  $w_0 = 2(\cos 30° + i\sin 30°) = \sqrt3 + i$, $w_1 = 2(\cos 150° + i\sin 150°) = -\sqrt3 + i$, $w_2 = 2(\cos 270° + i\sin 270°) = -2i$.
  ---
  Probe für $w_2$: $(-2i)^3 = -8i^3 = -8\cdot(-i) = 8i$. Die drei Punkte bilden ein gleichseitiges Dreieck.
```

```aufgabe
id: kz-einheitswurzeln
titel: Die sechsten Einheitswurzeln
niveau: 2
lernziel: 6
kompetenz: verstehen
angabe: |
  Die Lösungen von $z^6 = 1$ heißen **sechste Einheitswurzeln**.

  a) Gib die Lösung mit dem Argument $60°$ in der Form $a + bi$ an.

  b) Wie groß ist die Summe aller sechs Lösungen?
teile:
  - typ: komplex
    label: 'a) $z_1$'
    loesung: "cos(inRad(60)) + i*sin(inRad(60))"
    anzeige: '\tfrac12 + \tfrac{\sqrt3}{2}i'
    fehler:
      - wert: "sqrt(3)/2 + i/2"
        meldung: 'Sinus und Kosinus sind vertauscht. Bei $60°$ ist $\cos 60° = \tfrac12$ der kleinere Wert.'
  - typ: zahl
    label: 'b) Summe'
    loesung: "0"
    fehler:
      - wert: "6"
        meldung: 'Nicht jede Lösung ist $1$. Nur $z_0 = 1$ ist es. Die sechs Pfeile zeigen gleichmäßig in alle Richtungen.'
      - wert: "1"
        meldung: 'Zu jeder Lösung gibt es eine genau entgegengesetzte (um $180°$ gedreht). Was ergibt die Summe eines solchen Paares?'
hinweise:
  - 'Radius $\sqrt[6]{1} = 1$, Winkel $0°, 60°, 120°, 180°, 240°, 300°$.'
  - 'Für b): Die Lösungen bei $0°$ und $180°$ sind $1$ und $-1$. Gibt es weitere solche Paare?'
loesung: |
  Ansatz: $1 = 1\,(\cos 0° + i\sin 0°)$. Die Lösungen haben Radius $1$ und die Winkel $k\cdot 60°$ für $k = 0, \dots, 5$.
  ---
  a) $z_1 = \cos 60° + i\sin 60° = \tfrac12 + \tfrac{\sqrt3}{2}\, i$.
  ---
  b) Die Lösungen bilden ein regelmäßiges Sechseck. Je zwei liegen genau gegenüber: $0°$ und $180°$, $60°$ und $240°$, $120°$ und $300°$.
  Gegenüberliegende Pfeile heben sich auf, ihre Summe ist $0$. Also ist die Gesamtsumme $0$.
  ---
  Kontrolle mit Zahlen: $1 + \left(\tfrac12 + \tfrac{\sqrt3}{2}i\right) + \left(-\tfrac12 + \tfrac{\sqrt3}{2}i\right) + (-1) + \left(-\tfrac12 - \tfrac{\sqrt3}{2}i\right) + \left(\tfrac12 - \tfrac{\sqrt3}{2}i\right) = 0$.
```

```aufgabe
id: kz-quadratwurzel-algebraisch
titel: Eine Quadratwurzel durch Koeffizientenvergleich
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Bestimme alle $z = x + yi$ mit $z^2 = 3 - 4i$. Gib die Lösung mit **positivem Realteil** an.
teile:
  - typ: komplex
    label: 'Lösung mit $x > 0$'
    loesung: "2 - i"
    fehler:
      - wert: "2+i"
        meldung: 'Probe: $(2 + i)^2 = 3 + 4i$. Aus $2xy = -4$ folgt, dass $x$ und $y$ verschiedene Vorzeichen haben.'
      - wert: "sqrt(3) + 2i"
        meldung: 'Man kann die Wurzel nicht Teil für Teil ziehen. Probe: $(\sqrt3 + 2i)^2 = -1 + 4\sqrt3\, i$. Setze $(x + yi)^2 = 3 - 4i$ an.'
hinweise:
  - '$(x + yi)^2 = (x^2 - y^2) + 2xy\,i$. Vergleiche mit $3 - 4i$.'
  - '$x^2 - y^2 = 3$ und $2xy = -4$, also $y = -\frac2x$. Einsetzen führt auf eine biquadratische Gleichung.'
loesung: |
  Ansatz: $z = x + yi$ quadrieren und Real- und Imaginärteil mit $3 - 4i$ vergleichen.
  ---
  $(x + yi)^2 = (x^2 - y^2) + 2xy\, i$. Vergleich: $x^2 - y^2 = 3$ und $2xy = -4$, also $y = -\frac{2}{x}$.
  ---
  Einsetzen: $x^2 - \frac{4}{x^2} = 3$, also $x^4 - 3x^2 - 4 = 0$. Mit $u = x^2$: $u^2 - 3u - 4 = 0$, also $u = 4$ oder $u = -1$.
  Weil $x$ reell ist, gilt $x^2 = 4$, also $x = \pm 2$.
  ---
  Für $x = 2$ ist $y = -1$, für $x = -2$ ist $y = 1$. Die Lösungen sind $2 - i$ und $-2 + i$. Gesucht ist $2 - i$.
  Probe: $(2 - i)^2 = 4 - 4i + i^2 = 3 - 4i$.
```

```aufgabe
id: kz-wurzeln-dreieck
titel: Dritte Wurzeln von −27 und ihr Dreieck
niveau: 3
lernziel: 6
kompetenz: anwenden
angabe: |
  a) Bestimme alle Lösungen von $z^3 = -27$ in der Form $a + bi$, geordnet nach aufsteigendem Argument in $[0°, 360°)$.

  b) Zeichne die Lösungen in die Zahlenebene und verbinde sie zu einem Dreieck.

  c) Berechne die Seitenlänge dieses Dreiecks exakt.
teile:
  - typ: komplex
    label: 'a) $z_0$'
    loesung: "3*(cos(inRad(60)) + i*sin(inRad(60)))"
    anzeige: '\tfrac32 + \tfrac{3\sqrt3}{2}i \approx 1{,}5 + 2{,}598i'
  - typ: komplex
    label: 'a) $z_1$'
    loesung: "-3"
    fehler:
      - wert: "3"
        meldung: 'Probe: $3^3 = 27$, nicht $-27$. Die reelle Lösung ist $-3$, denn $(-3)^3 = -27$.'
  - typ: komplex
    label: 'a) $z_2$'
    loesung: "3*(cos(inRad(300)) + i*sin(inRad(300)))"
    anzeige: '\tfrac32 - \tfrac{3\sqrt3}{2}i'
  - typ: text
    label: 'b) Skizze'
    muster: |
      Die drei Punkte liegen auf dem Kreis mit Radius $3$ bei $60°$, $180°$ und $300°$. Sie bilden ein gleichseitiges
      Dreieck mit einer Ecke auf der negativen reellen Achse.
  - typ: zahl
    label: 'c) Seitenlänge'
    loesung: "abs(3*(cos(inRad(60)) + i*sin(inRad(60))) - 3*(cos(inRad(300)) + i*sin(inRad(300))))"
    anzeige: '3\sqrt3 \approx 5{,}196'
    fehler:
      - wert: "3"
        meldung: '$3$ ist der Radius des Kreises, nicht die Seitenlänge. Berechne den Abstand zweier Ecken, etwa $|z_0 - z_2|$.'
hinweise:
  - '$-27$ hat $r = 27$ und $\varphi = 180°$. Radius der Lösungen: $\sqrt[3]{27} = 3$.'
  - 'Winkel: $\frac{180° + k\cdot 360°}{3} = 60° + k\cdot 120°$. Die Seitenlänge ist der Abstand zweier Ecken, also der Betrag ihrer Differenz.'
loesung: |
  Ansatz: Rezept für $z^n = w$ mit $n = 3$, $r = 27$ und $\varphi = 180°$. Danach Abstand zweier Lösungen als Betrag der Differenz.
  ---
  a) Radius $\sqrt[3]{27} = 3$, Winkel $60°$, $180°$, $300°$.
  $z_0 = 3(\cos 60° + i\sin 60°) = \tfrac32 + \tfrac{3\sqrt3}{2}\, i$, $z_1 = -3$, $z_2 = \tfrac32 - \tfrac{3\sqrt3}{2}\, i$.
  ---
  b) Die Punkte liegen gleichmäßig auf dem Kreis mit Radius $3$. Sie bilden ein gleichseitiges Dreieck.
  ---
  c) $z_0 - z_2 = 3\sqrt3\, i$, also ist die Seitenlänge $|z_0 - z_2| = 3\sqrt3 \approx 5{,}196$.
  Kontrolle mit dem Kosinussatz aus [5.7 Allgemeine Dreiecke: Sinussatz, Kosinussatz, Fläche](/lernen/mathe3/trigonometrie/allgemeine-dreiecke-sinussatz-kosinussatz-flaeche): Seite$^2 = 3^2 + 3^2 - 2\cdot 3\cdot 3\cos 120° = 27$.
```

```aufgabe
id: kz-wurzeln-aus-einer-loesung
titel: Aus einer Lösung alle anderen gewinnen
niveau: 3
lernziel: 6
kompetenz: begruenden
angabe: |
  Eine Lösung der Gleichung $z^4 = w$ ist $z_0 = 1 + i$.

  a) Bestimme $w$.

  b) Gib die übrigen drei Lösungen an, geordnet nach aufsteigendem Argument in $[0°, 360°)$, beginnend nach $z_0$.

  c) Begründe, warum man die übrigen Lösungen durch fortgesetztes Multiplizieren mit $i$ erhält.
teile:
  - typ: komplex
    label: 'a) $w$'
    loesung: "(1+i)^4"
    anzeige: '-4'
    fehler:
      - wert: "4"
        meldung: '$(1 + i)^2 = 2i$ und $(2i)^2 = 4i^2 = -4$. Das Ergebnis ist negativ.'
  - typ: komplex
    label: 'b) Lösung bei $135°$'
    loesung: "i*(1+i)"
    anzeige: '-1 + i'
    fehler:
      - wert: "1 - i"
        meldung: 'Das ist die Lösung bei $315°$. Bei $135°$ liegt der Punkt links oben.'
  - typ: komplex
    label: 'b) Lösung bei $225°$'
    loesung: "-(1+i)"
    anzeige: '-1 - i'
  - typ: komplex
    label: 'b) Lösung bei $315°$'
    loesung: "-i*(1+i)"
    anzeige: '1 - i'
  - typ: text
    label: 'c) Begründung'
    muster: |
      Die vier Lösungen liegen auf einem Kreis und sind jeweils $\frac{360°}{4} = 90°$ voneinander entfernt. Multiplizieren mit $i$
      dreht um genau $90°$ und ändert den Betrag nicht. Also führt $i\cdot z_k$ von einer Lösung zur nächsten. Alternativ:
      $(iz)^4 = i^4 z^4 = 1\cdot w = w$, also ist mit $z$ auch $iz$ eine Lösung.
hinweise:
  - 'Für a): $(1 + i)^4 = \big((1 + i)^2\big)^2$.'
  - 'Die vier Lösungen bilden ein Quadrat. Benachbarte Ecken liegen $90°$ auseinander, und Multiplizieren mit $i$ dreht um $90°$.'
loesung: |
  Ansatz: $w$ ist die vierte Potenz der gegebenen Lösung. Die anderen Lösungen sind die übrigen Ecken des Quadrats.
  ---
  a) $(1 + i)^2 = 2i$, also $w = (2i)^2 = -4$.
  ---
  b) $z_0 = 1 + i$ hat den Winkel $45°$. Die nächsten Lösungen haben $135°$, $225°$, $315°$ und entstehen durch Multiplizieren mit $i$:
  $i(1 + i) = -1 + i$, $\;i(-1 + i) = -1 - i$, $\;i(-1 - i) = 1 - i$.
  ---
  c) Für jede Lösung $z$ gilt $(iz)^4 = i^4 z^4 = 1\cdot w = w$. Also ist auch $iz$ eine Lösung. Geometrisch dreht die Multiplikation mit $i$ um $90°$.
  Probe für $1 - i$: $(1 - i)^2 = -2i$ und $(-2i)^2 = -4$.
```

## Polynomgleichungen und der Fundamentalsatz der Algebra

```aufgabe
id: kz-check-vieta
titel: Eine Gleichung aus ihren Lösungen bauen
niveau: 1
art: check
angabe: |
  Die Gleichung $x^2 + px + q = 0$ hat die Lösungen $3$ und $-5$. Bestimme $p$ und $q$.
  Herkunft: [Kapitel 2, „Quadratische Gleichungen“](/lernen/mathe3/gleichungen/quadratische-gleichungen).
teile:
  - typ: zahl
    label: '$p$'
    loesung: "-(3 + (-5))"
    anzeige: '2'
    fehler:
      - wert: "-2"
        meldung: 'Nach Vieta ist $p = -(x_1 + x_2)$, mit einem Minus davor. Die Summe ist $-2$, also $p = +2$.'
  - typ: zahl
    label: '$q$'
    loesung: "3*(-5)"
    anzeige: '-15'
    fehler:
      - wert: "15"
        meldung: 'Nach Vieta ist $q = x_1\cdot x_2 = 3\cdot(-5)$. Das Produkt ist negativ.'
hinweise:
  - 'Satz von Vieta: $x_1 + x_2 = -p$ und $x_1\cdot x_2 = q$. Oder: $(x - 3)(x + 5)$ ausmultiplizieren.'
loesung: |
  Ausmultiplizieren der Linearfaktoren: $(x - 3)(x + 5) = x^2 + 5x - 3x - 15 = x^2 + 2x - 15$.
  ---
  Also $p = 2$ und $q = -15$. Das passt zu Vieta: $-(3 - 5) = 2$ und $3\cdot(-5) = -15$.
```

Mit den komplexen Zahlen hat jede quadratische Gleichung Lösungen, auch wenn unter der Wurzel eine negative Zahl
steht. Mehr noch: Jede Polynomgleichung vom Grad $1$ oder höher ist in $\C$ lösbar, egal wie hoch der Grad ist. Das ist der Inhalt des
Fundamentalsatzes der Algebra. Er erklärt, warum man nach $\C$ keine weiteren Zahlen mehr erfinden muss.

### Quadratische Gleichungen mit negativer Diskriminante

Die Lösungsformeln aus [2.3 Quadratische Gleichungen](/lernen/mathe3/gleichungen/quadratische-gleichungen) gelten unverändert. Für
$z^2 + pz + q = 0$ ist
$$z_{1,2} = -\frac p2 \pm \sqrt{D}, \qquad D = \left(\frac p2\right)^2 - q.$$
Dabei heißt $D$ die **Diskriminante**, das „Unterscheidende“: Ihr Vorzeichen entscheidet über die Art der Lösungen.
Ist $D < 0$, gibt es keine reelle Lösung. In $\C$ setzt man $\sqrt D = i\sqrt{|D|}$ und erhält zwei Lösungen:
$$z_{1,2} = -\frac p2 \pm i\sqrt{|D|}.$$
Bei reellen Zahlen $p$ und $q$ unterscheiden sich die beiden Lösungen nur im Vorzeichen des Imaginärteils. Sie sind also **zueinander konjugiert**.

:::beispiel[Mit der kleinen Lösungsformel]
Löse $z^2 + 2z + 5 = 0$.

1. $p = 2$, $q = 5$. Diskriminante: $D = 1^2 - 5 = -4 < 0$.
2. $\sqrt{D} = i\sqrt4 = 2i$. Also $z_{1,2} = -1 \pm 2i$.
3. Probe für $z_1 = -1 + 2i$: $(-1 + 2i)^2 + 2(-1 + 2i) + 5 = (1 - 4i - 4) - 2 + 4i + 5 = 0$.
4. Schnelle Kontrolle mit Vieta: Summe $(-1 + 2i) + (-1 - 2i) = -2 = -p$, Produkt $(-1)^2 + 2^2 = 5 = q$.
:::

:::beispiel[Mit der großen Lösungsformel]
Löse $4z^2 - 4z + 5 = 0$.

1. Hier ist $a = 4$, $b = -4$, $c = 5$. Die große Formel lautet $z_{1,2} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$.
2. Unter der Wurzel: $b^2 - 4ac = 16 - 80 = -64$, also $\sqrt{-64} = 8i$.
3. $z_{1,2} = \frac{4 \pm 8i}{8} = \frac12 \pm i$.
:::

:::achtung[Das i nicht verlieren]
**Falsch:** „$z^2 + 2z + 5 = 0$: $z = -1 \pm \sqrt{-4} = -1 \pm 2$, also $z = 1$ oder $z = -3$.“

**Richtig:** $\sqrt{-4} = 2i$, nicht $2$. Die Probe deckt den Fehler sofort auf: $1^2 + 2\cdot 1 + 5 = 8 \ne 0$.
Richtig ist $z = -1 \pm 2i$.
:::

### Der Fundamentalsatz der Algebra

:::satz[Fundamentalsatz der Algebra]
Jedes Polynom vom Grad $n \ge 1$ mit komplexen Koeffizienten hat in $\C$ mindestens eine Nullstelle. Daraus folgt:
Es zerfällt vollständig in **Linearfaktoren**,
$$p(z) = a_n\,(z - z_1)(z - z_2)\cdots(z - z_n).$$
Dabei ist $a_n$ der Leitkoeffizient, also die Zahl vor der höchsten Potenz, und $z_1, \dots, z_n$ sind die Nullstellen.
Ein Polynom vom Grad $n$ hat also genau $n$ Nullstellen, wenn man mehrfache Nullstellen mehrfach zählt.
:::

Man sagt: $\C$ ist **algebraisch abgeschlossen**. Jede Polynomgleichung vom Grad $1$ oder höher hat dort eine Lösung. Der Beweis ist schwer und
gehört nicht zum Prüfungsstoff. Die Aussage solltest du aber erklären können.

**Beispiel:** $z^2 + 9$ hat die Nullstellen $3i$ und $-3i$. Also ist $z^2 + 9 = (z - 3i)(z + 3i)$. Probe mit der dritten
binomischen Formel: $z^2 - (3i)^2 = z^2 - 9i^2 = z^2 + 9$.

**Nichtbeispiel:** In $\R$ gilt der Satz nicht. Das Polynom $x^2 + 9$ hat keine reelle Nullstelle. Über $\R$ lässt es sich
deshalb nicht in Linearfaktoren zerlegen.

:::achtung[Eine Summe von Quadraten richtig zerlegen]
**Falsch:** $z^2 + 9 = (z + 3)^2$.

**Richtig:** $(z + 3)^2 = z^2 + 6z + 9$, da fehlt das gemischte Glied. Eine **Summe** von Quadraten zerlegt man in $\C$ mit der
dritten binomischen Formel: $z^2 + 9 = z^2 - (3i)^2 = (z - 3i)(z + 3i)$.
:::

### Reelle Koeffizienten: Nullstellen kommen in Paaren

Bei quadratischen Gleichungen mit reellen Zahlen $p$ und $q$ waren die beiden nicht-reellen Lösungen konjugiert. Das gilt
für Polynome jeden Grades.

:::satz[Konjugierte Nullstellen]
Hat ein Polynom nur **reelle** Koeffizienten und ist $z_0$ eine nicht-reelle Nullstelle, dann ist auch $\bar z_0$ eine Nullstelle.
:::

Der Grund: Konjugieren verträgt sich mit Addieren und Multiplizieren, und reelle Koeffizienten ändern sich dabei nicht.
Aus $p(z_0) = 0$ folgt deshalb $p(\bar z_0) = \overline{p(z_0)} = \bar 0 = 0$. Eine wichtige Folgerung: Ein Polynom mit
reellen Koeffizienten und **ungeradem** Grad hat immer mindestens eine reelle Nullstelle. Die nicht-reellen Nullstellen
kommen ja paarweise, und bei ungerader Anzahl bleibt eine übrig.

:::beispiel[Eine Nullstelle ist gegeben]
Das Polynom $p(z) = z^3 - 5z^2 + 9z - 5$ hat die Nullstelle $2 + i$. Bestimme alle Nullstellen.

1. Die Koeffizienten sind reell. Also ist auch $2 - i$ eine Nullstelle.
2. Die beiden Linearfaktoren ergeben zusammen ein reelles Polynom: $(z - (2 + i))(z - (2 - i)) = (z - 2)^2 - i^2 = z^2 - 4z + 5$.
3. Polynomdivision: $(z^3 - 5z^2 + 9z - 5) : (z^2 - 4z + 5) = z - 1$, ohne Rest.
4. Die dritte Nullstelle ist $1$. Zerlegung: $p(z) = (z - 1)(z - 2 - i)(z - 2 + i)$.
:::

```plot
x: [-1, 4]
y: [-2, 2]
gleich: true
achsen: { x: "Re", y: "Im" }
punkte:
  - { x: 1, y: 0, label: "1", farbe: 0 }
  - { x: 2, y: 1, label: "2 + i", farbe: 1 }
  - { x: 2, y: -1, label: "2 − i", farbe: 1 }
strecken:
  - { von: [2, 1], nach: [2, -1], gestrichelt: true }
beschriftung: Die drei Nullstellen von z³ − 5z² + 9z − 5. Die beiden nicht-reellen Nullstellen 2 + i und 2 − i liegen spiegelbildlich zur reellen Achse. Die dritte Nullstelle 1 ist reell.
```

:::merke[Rezept: Polynomgleichungen in ℂ]
1. **Grad bestimmen:** So viele Lösungen musst du am Ende haben (mit Vielfachheit).
2. **Quadratisch:** Lösungsformel. Bei negativer Diskriminante $\sqrt{D} = i\sqrt{|D|}$.
3. **Höherer Grad:** Eine Nullstelle raten oder aus der Angabe nehmen, durch den Linearfaktor dividieren (Polynomdivision oder Horner-Schema).
4. **Reelle Koeffizienten:** Zu jeder nicht-reellen Nullstelle gehört die konjugierte. Beide zusammen liefern einen reellen quadratischen Faktor.
5. **Biquadratisch** ($z^4 + bz^2 + c$): mit $u = z^2$ substituieren und danach aus jedem $u$ beide Quadratwurzeln ziehen.
:::

```reflexion
frage: Warum hat jedes Polynom dritten Grades mit reellen Koeffizienten mindestens eine reelle Nullstelle, ein Polynom vierten Grades aber nicht unbedingt?
antwort: |
  Nach dem Fundamentalsatz hat ein Polynom dritten Grades genau drei Nullstellen in $\C$. Nicht-reelle Nullstellen treten bei reellen
  Koeffizienten paarweise auf ($z_0$ und $\bar z_0$). Drei ist ungerade, also kann nicht alles in Paare aufgehen: Mindestens eine
  Nullstelle ist ihr eigener Partner, das heißt $z_0 = \bar z_0$, und damit reell. Bei Grad $4$ können zwei Paare entstehen, so wie bei
  $z^4 + 1$ mit den Nullstellen $\pm\tfrac{\sqrt2}{2} \pm \tfrac{\sqrt2}{2}i$. Dann gibt es keine reelle Nullstelle.
```

### Übungen

```aufgabe
id: kz-quadratisch
titel: Quadratische Gleichung mit negativer Diskriminante
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Löse $z^2 - 4z + 13 = 0$ in $\C$.
teile:
  - typ: komplex
    label: 'Lösung mit positivem Imaginärteil $z_1$'
    loesung: "2 + 3i"
    fehler:
      - wert: "-2+3i"
        meldung: 'Mit $p = -4$ ist $-\frac p2 = +2$. Das Vorzeichen dreht sich um.'
      - wert: "5"
        meldung: 'Die Diskriminante ist negativ, $D = -9$. Ihre Wurzel ist $3i$, nicht $3$.'
  - typ: komplex
    label: 'Lösung mit negativem Imaginärteil $z_2$'
    loesung: "2 - 3i"
    fehler:
      - wert: "-2-3i"
        meldung: 'Mit $p = -4$ ist $-\frac p2 = +2$. Beide Lösungen haben den Realteil $2$.'
hinweise:
  - '$p = -4$, $q = 13$. Diskriminante $D = \left(\tfrac{p}{2}\right)^2 - q$.'
loesung: |
  Ansatz: Kleine Lösungsformel mit $p = -4$ und $q = 13$.
  ---
  $D = \left(\tfrac{-4}{2}\right)^2 - 13 = 4 - 13 = -9 < 0$, also $\sqrt D = 3i$. Damit $z_{1,2} = 2 \pm 3i$.
  ---
  Probe: $(2 + 3i)^2 - 4(2 + 3i) + 13 = (4 + 12i - 9) - 8 - 12i + 13 = 0$. Die Lösungen sind zueinander konjugiert.
```

```aufgabe
id: kz-linearfaktoren
titel: In Linearfaktoren zerlegen
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Zerlege über $\C$ in Linearfaktoren, indem du die Nullstellen bestimmst.

  a) $z^2 + 25 = (z - z_1)(z - z_2)$. Gib $z_1$ mit positivem Imaginärteil an.

  b) $z^2 + 6z + 10 = (z - z_1)(z - z_2)$. Gib $z_1$ mit positivem Imaginärteil an.
teile:
  - typ: komplex
    label: 'a) $z_1$'
    loesung: "5i"
    fehler:
      - wert: "5"
        meldung: '$5^2 + 25 = 50 \ne 0$. Aus $z^2 = -25$ folgt $z = \pm 5i$.'
  - typ: komplex
    label: 'b) $z_1$'
    loesung: "-3 + i"
    fehler:
      - wert: "3+i"
        meldung: 'Mit $p = 6$ ist $-\frac p2 = -3$. Der Realteil ist negativ.'
      - wert: "-3+2i"
        meldung: 'Du hast vermutlich $\sqrt{b^2 - 4ac} = \sqrt{-4} = 2i$ aus der großen Formel genommen, aber nicht durch $2a = 2$ geteilt. In der kleinen Formel ist $D = \left(\tfrac p2\right)^2 - q = 9 - 10 = -1$, also $\sqrt D = i$.'
hinweise:
  - 'Bestimme die Nullstellen. Jede Nullstelle $z_k$ liefert den Faktor $(z - z_k)$.'
loesung: |
  Ansatz: Nach dem Fundamentalsatz ist $p(z) = (z - z_1)(z - z_2)$, wenn $z_1, z_2$ die Nullstellen sind und der Leitkoeffizient $1$ ist.
  ---
  a) $z^2 = -25$, also $z = \pm 5i$. Zerlegung: $z^2 + 25 = (z - 5i)(z + 5i)$.
  ---
  b) $D = 3^2 - 10 = -1$, also $z = -3 \pm i$. Zerlegung: $z^2 + 6z + 10 = (z + 3 - i)(z + 3 + i)$.
  Probe: $(z + 3)^2 - i^2 = z^2 + 6z + 9 + 1$.
```

```aufgabe
id: kz-quadratisch-gross
titel: Die große Lösungsformel
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Löse $2z^2 - 6z + 5 = 0$ in $\C$. Gib die Lösung mit positivem Imaginärteil an.
teile:
  - typ: komplex
    label: '$z_1$'
    loesung: "(6 + sqrt(36 - 40))/4"
    anzeige: '\tfrac32 + \tfrac12 i'
    fehler:
      - wert: "3+i"
        meldung: 'Du hast durch $a = 2$ geteilt. In der großen Formel steht im Nenner $2a = 4$.'
      - wert: "3/2 + 2i"
        meldung: 'Auch der Imaginärteil $2i$ wird durch $2a = 4$ geteilt: $\frac{2i}{4} = \frac12 i$.'
hinweise:
  - 'Große Lösungsformel mit $a = 2$, $b = -6$, $c = 5$.'
  - '$b^2 - 4ac = 36 - 40 = -4$. Also $\sqrt{b^2 - 4ac} = 2i$.'
gefuehrt:
  - text: Berechne den Ausdruck unter der Wurzel, $b^2 - 4ac$.
    teil:
      typ: zahl
      loesung: "-4"
      fehler:
        - wert: "76"
          meldung: '$4ac = 4\cdot 2\cdot 5 = 40$ wird abgezogen: $36 - 40$.'
    erklaerung: '$(-6)^2 - 4\cdot 2\cdot 5 = 36 - 40 = -4$.'
  - text: Was ist $\sqrt{-4}$?
    teil:
      typ: komplex
      loesung: "2i"
      fehler:
        - wert: "2"
          meldung: '$2^2 = 4$, nicht $-4$. Die Wurzel aus einer negativen Zahl enthält $i$.'
    erklaerung: '$\sqrt{-4} = i\sqrt4 = 2i$.'
  - text: Setze in $z_{1,2} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$ ein. Was ist $z_1$ (mit Pluszeichen)?
    teil:
      typ: komplex
      loesung: "(6 + 2i)/4"
      fehler:
        - wert: "3+i"
          meldung: 'Der Nenner ist $2a = 4$, nicht $2$.'
    erklaerung: '$z_1 = \frac{6 + 2i}{4} = \frac32 + \frac12 i$.'
  - text: Mache die Kontrolle mit Vieta. Summe der Lösungen soll $-\frac ba = 3$ sein, Produkt $\frac ca = \frac52$.
    erklaerung: 'Summe: $\left(\frac32 + \frac12 i\right) + \left(\frac32 - \frac12 i\right) = 3$. Produkt: $\frac94 + \frac14 = \frac{10}{4} = \frac52$.'
loesung: |
  Ansatz: Große Lösungsformel, weil der Leitkoeffizient $a = 2$ nicht $1$ ist.
  ---
  $b^2 - 4ac = 36 - 40 = -4$, also $\sqrt{-4} = 2i$.
  ---
  $z_{1,2} = \frac{6 \pm 2i}{4} = \frac32 \pm \frac12 i$.
  ---
  Kontrolle mit Vieta: Summe $3 = -\frac{b}{a}$, Produkt $\frac94 + \frac14 = \frac52 = \frac ca$. Gesucht ist $\frac32 + \frac12 i$.
```

```aufgabe
id: kz-polynom-konjugiert
titel: Eine reelle Nullstelle ist bekannt
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Das Polynom $p(z) = z^3 - 3z^2 + 7z - 5$ hat die Nullstelle $z_1 = 1$.
  Bestimme die beiden anderen Nullstellen.
teile:
  - typ: komplex
    label: '$z_2$ (positiver Imaginärteil)'
    loesung: "1 + 2i"
    fehler:
      - wert: "-1+2i"
        meldung: 'Der Restfaktor ist $z^2 - 2z + 5$. Mit $p = -2$ ist $-\frac p2 = +1$.'
  - typ: komplex
    label: '$z_3$'
    loesung: "1 - 2i"
    fehler:
      - wert: "-1-2i"
        meldung: 'Die zweite Lösung ist die Konjugierte von $1 + 2i$. Nur das Vorzeichen des Imaginärteils wechselt.'
hinweise:
  - Teile $p(z)$ durch $(z - 1)$ (Polynomdivision oder Horner-Schema).
  - 'Es bleibt die quadratische Gleichung $z^2 - 2z + 5 = 0$.'
loesung: |
  Ansatz: Mit der bekannten Nullstelle spalten wir den Linearfaktor $(z - 1)$ ab. Dann bleibt eine quadratische Gleichung.
  ---
  Horner-Schema mit $z = 1$: Die Koeffizienten $1, -3, 7, -5$ ergeben $1, -2, 5$ mit Rest $0$.
  Also $p(z) = (z - 1)(z^2 - 2z + 5)$.
  ---
  $z^2 - 2z + 5 = 0$: $D = 1 - 5 = -4$, also $z_{2,3} = 1 \pm 2i$.
  ---
  Wie vom Fundamentalsatz vorhergesagt: drei Nullstellen, und die beiden nicht-reellen sind konjugiert.
```

```aufgabe
id: kz-gleichung-aus-loesung
titel: Eine Gleichung zu einer komplexen Lösung
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Gesucht ist eine quadratische Gleichung $z^2 + pz + q = 0$ mit **reellen** Zahlen $p$ und $q$, die $3 - 2i$ als Lösung hat.
  Bestimme $p$ und $q$.
teile:
  - typ: zahl
    label: '$p$'
    loesung: "-((3-2i) + (3+2i))"
    anzeige: '-6'
    fehler:
      - wert: "6"
        meldung: 'Nach Vieta ist $p = -(z_1 + z_2)$. Die Summe der Lösungen ist $6$, also $p = -6$.'
  - typ: zahl
    label: '$q$'
    loesung: "(3-2i)*(3+2i)"
    anzeige: '13'
    fehler:
      - wert: "5"
        meldung: '$(3 - 2i)(3 + 2i) = 9 - 4i^2 = 9 + 4$. Mit $i^2 = -1$ wird aus $-4i^2$ ein Plus.'
hinweise:
  - 'Weil $p$ und $q$ reell sein sollen, ist auch $3 + 2i$ eine Lösung.'
  - 'Vieta: $p = -(z_1 + z_2)$ und $q = z_1 z_2$.'
loesung: |
  Ansatz: Bei reellen Koeffizienten ist mit $3 - 2i$ auch die Konjugierte $3 + 2i$ eine Lösung. Daraus bauen wir die Gleichung.
  ---
  Summe: $(3 - 2i) + (3 + 2i) = 6$, also $p = -6$.
  ---
  Produkt: $(3 - 2i)(3 + 2i) = 9 + 4 = 13$, also $q = 13$.
  ---
  Die Gleichung lautet $z^2 - 6z + 13 = 0$. Probe mit der Lösungsformel: $D = 9 - 13 = -4$, also $z = 3 \pm 2i$.
```

```aufgabe
id: kz-biquadratisch
titel: Eine biquadratische Gleichung
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Löse $z^4 + 3z^2 - 4 = 0$ in $\C$.

  a) Wie viele Lösungen hat die Gleichung in $\C$?

  b) Gib die reellen Lösungen an, getrennt durch Strichpunkte.

  c) Gib die nicht-reelle Lösung mit positivem Imaginärteil an.
teile:
  - typ: zahl
    label: 'a) Anzahl'
    loesung: "4"
    fehler:
      - wert: "2"
        meldung: 'Ein Polynom vom Grad $4$ hat in $\C$ genau $4$ Nullstellen. Zu jedem Wert von $u = z^2$ gehören zwei Werte von $z$.'
  - typ: menge
    label: 'b) reelle Lösungen'
    loesung: ["1", "-1"]
    fehler:
      - wert: ["1"]
        meldung: 'Aus $z^2 = 1$ folgt $z = 1$ **oder** $z = -1$.'
      - wert: ["1", "-4"]
        meldung: 'Das sind die Lösungen für $u = z^2$. Du musst noch zurück zu $z$, also die Wurzeln ziehen.'
  - typ: komplex
    label: 'c) nicht-reelle Lösung'
    loesung: "2i"
    fehler:
      - wert: "-4"
        meldung: '$-4$ ist der Wert von $u = z^2$. Aus $z^2 = -4$ folgt $z = \pm 2i$.'
      - wert: "4i"
        meldung: 'Aus $z^2 = -4$ folgt $z = \pm i\sqrt4 = \pm 2i$. Die Wurzel aus $4$ fehlt.'
hinweise:
  - 'Substituiere $u = z^2$. Dann entsteht $u^2 + 3u - 4 = 0$.'
  - 'Die Lösungen sind $u = 1$ und $u = -4$. Ziehe aus beiden die Quadratwurzeln in $\C$.'
loesung: |
  Ansatz: In der Gleichung kommen nur $z^4$ und $z^2$ vor. Mit $u = z^2$ wird sie quadratisch.
  ---
  $u^2 + 3u - 4 = 0$: $D = \tfrac94 + 4 = \tfrac{25}{4}$, also $u = -\tfrac32 \pm \tfrac52$, das heißt $u = 1$ oder $u = -4$.
  ---
  $z^2 = 1$ ergibt $z = \pm 1$. $z^2 = -4$ ergibt $z = \pm 2i$.
  ---
  Insgesamt vier Lösungen: $1, -1, 2i, -2i$, wie vom Fundamentalsatz verlangt. Zerlegung: $(z - 1)(z + 1)(z - 2i)(z + 2i)$.
```

```aufgabe
id: kz-fundamentalsatz-aussagen
titel: Was folgt aus dem Fundamentalsatz?
niveau: 2
lernziel: 7
kompetenz: begruenden
angabe: |
  Welche Aussagen sind richtig? Wähle alle richtigen aus.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - 'Das Polynom $z^5 + z + 1$ hat in $\C$ genau fünf Nullstellen, wenn man mehrfache Nullstellen mehrfach zählt.'
      - 'Ein Polynom dritten Grades mit reellen Koeffizienten kann die Nullstellen $1$, $i$ und $2i$ haben.'
      - 'Jedes Polynom mit reellen Koeffizienten und ungeradem Grad hat mindestens eine reelle Nullstelle.'
      - 'Jedes Polynom vierten Grades mit reellen Koeffizienten hat mindestens eine reelle Nullstelle.'
    richtig: [0, 2]
    fehler:
      - wert: [0, 2, 3]
        meldung: 'Gegenbeispiel zur letzten Aussage: $z^4 + 1$ hat keine reelle Nullstelle. Bei Grad $4$ können zwei konjugierte Paare entstehen.'
      - wert: [0, 1, 2]
        meldung: 'Bei reellen Koeffizienten wären mit $i$ und $2i$ auch $-i$ und $-2i$ Nullstellen. Das wären mit $1$ fünf Nullstellen, zu viele für Grad $3$.'
      - wert: [0]
        meldung: 'Die dritte Aussage stimmt auch. Nicht-reelle Nullstellen kommen paarweise, bei ungerader Anzahl bleibt mindestens eine reelle übrig.'
hinweise:
  - 'Der Fundamentalsatz sagt: Grad $n$ bedeutet genau $n$ Nullstellen in $\C$ (mit Vielfachheit).'
  - 'Bei reellen Koeffizienten kommen nicht-reelle Nullstellen in konjugierten Paaren.'
loesung: |
  Ansatz: Wir prüfen jede Aussage mit dem Fundamentalsatz und dem Satz über konjugierte Nullstellen.
  ---
  Aussage 1 ist richtig: Grad $5$, also genau fünf Nullstellen mit Vielfachheit. Aussage 2 ist falsch: Mit $i$ und $2i$ müssten auch $-i$ und $-2i$ Nullstellen sein, zusammen mit $1$ also fünf.
  ---
  Aussage 3 ist richtig: Die nicht-reellen Nullstellen kommen paarweise, bei ungerader Gesamtzahl bleibt eine reelle übrig.
  ---
  Aussage 4 ist falsch: $z^4 + 1$ hat die vier nicht-reellen Nullstellen $\pm\tfrac{\sqrt2}{2} \pm \tfrac{\sqrt2}{2}i$.
```

```aufgabe
id: kz-polynom-vierten-grades
titel: Ein Polynom vierten Grades vollständig zerlegen
niveau: 3
lernziel: 7
kompetenz: begruenden
angabe: |
  Das Polynom $p(z) = z^4 - 2z^3 + 6z^2 - 8z + 8$ hat die Nullstelle $2i$.

  a) Begründe, warum auch $-2i$ eine Nullstelle ist.

  b) Bestimme alle vier Nullstellen. Gib die beiden noch fehlenden an (die mit positivem Imaginärteil zuerst).

  c) Zerlege $p$ über $\R$ in quadratische Faktoren.
teile:
  - typ: text
    label: 'a) Begründung'
    muster: |
      Alle Koeffizienten von $p$ sind reell. Dann ist mit jeder nicht-reellen Nullstelle auch ihre Konjugierte eine Nullstelle.
      Die Konjugierte von $2i$ ist $-2i$.
  - typ: komplex
    label: 'b) dritte Nullstelle'
    loesung: "1 + i"
    fehler:
      - wert: "-1+i"
        meldung: 'Der Restfaktor ist $z^2 - 2z + 2$. Mit $p = -2$ ist $-\frac p2 = +1$.'
  - typ: komplex
    label: 'b) vierte Nullstelle'
    loesung: "1 - i"
  - typ: text
    label: 'c) Zerlegung über $\R$'
    muster: |
      $p(z) = (z^2 + 4)(z^2 - 2z + 2)$. Beide Faktoren haben reelle Koeffizienten, aber keine reellen Nullstellen.
      Weiter zerlegen kann man nur in $\C$: $p(z) = (z - 2i)(z + 2i)(z - 1 - i)(z - 1 + i)$.
hinweise:
  - 'Reelle Koeffizienten: Konjugierte Nullstellen kommen paarweise. Das Paar $\pm 2i$ liefert den Faktor $(z - 2i)(z + 2i) = z^2 + 4$.'
  - 'Teile $p(z)$ durch $z^2 + 4$ (Polynomdivision). Löse dann die verbleibende quadratische Gleichung.'
loesung: |
  Ansatz: Mit dem Satz über konjugierte Nullstellen bekommen wir einen quadratischen Faktor. Nach der Division bleibt eine quadratische Gleichung.
  ---
  a) Die Koeffizienten $1, -2, 6, -8, 8$ sind reell. Also ist mit $2i$ auch $\overline{2i} = -2i$ eine Nullstelle.
  ---
  Das Paar liefert $(z - 2i)(z + 2i) = z^2 - 4i^2 = z^2 + 4$. Polynomdivision: $(z^4 - 2z^3 + 6z^2 - 8z + 8) : (z^2 + 4) = z^2 - 2z + 2$ ohne Rest.
  Kontrolle: $(z^2 + 4)(z^2 - 2z + 2) = z^4 - 2z^3 + 2z^2 + 4z^2 - 8z + 8$.
  ---
  b) $z^2 - 2z + 2 = 0$: $D = 1 - 2 = -1$, also $z = 1 \pm i$. Alle Nullstellen: $2i, -2i, 1 + i, 1 - i$.
  ---
  c) Über $\R$: $p(z) = (z^2 + 4)(z^2 - 2z + 2)$. Über $\C$ zerfällt $p$ weiter in vier Linearfaktoren.
```

## Mengen in der Zahlenebene zeichnen

```aufgabe
id: kz-check-kreis-lage
titel: Innerhalb oder außerhalb des Kreises?
niveau: 1
art: check
angabe: |
  Liegt der Punkt $P = (4 \mid 1)$ innerhalb, auf oder außerhalb des Kreises $(x - 1)^2 + (y - 2)^2 = 9$?
  Herkunft: [Kapitel 7, „Der Kreis“](/lernen/mathe3/analytische-geometrie/der-kreis).
teile:
  - typ: auswahl
    optionen:
      - 'innerhalb'
      - 'auf dem Kreis'
      - 'außerhalb'
    richtig: [2]
    fehler:
      - wert: 0
        meldung: 'Setze ein: $(4 - 1)^2 + (1 - 2)^2 = 9 + 1 = 10$. Das ist mehr als $r^2 = 9$, der Abstand zum Mittelpunkt ist also größer als der Radius.'
      - wert: 1
        meldung: 'Auf dem Kreis müsste die linke Seite genau $9$ ergeben. Sie ergibt $9 + 1 = 10$.'
hinweise:
  - 'Setze den Punkt in die linke Seite ein und vergleiche mit $r^2 = 9$.'
loesung: |
  Einsetzen: $(4 - 1)^2 + (1 - 2)^2 = 9 + 1 = 10$. Das ist das Quadrat des Abstands zum Mittelpunkt $(1 \mid 2)$.
  ---
  Wegen $10 > 9$ ist der Abstand $\sqrt{10} \approx 3{,}16$ größer als der Radius $3$. Der Punkt liegt außerhalb.
```

Bisher haben wir einzelne komplexe Zahlen gezeichnet. Oft fragt man aber nach **allen** Zahlen, die eine Bedingung
erfüllen, zum Beispiel „alle $z$ mit $|z| \le 2$“. Das Ergebnis ist eine Menge von Punkten, also eine Figur in der Ebene:
ein Kreis, eine Kreisscheibe, eine Gerade, eine Halbebene oder ein Winkelbereich. Solche Teilaufgaben kommen in
Prüfungen gern vor, weil sie zeigen, ob man Betrag und Argument wirklich geometrisch verstanden hat.

Die Schreibweise für eine solche Menge ist $M = \{z \in \C : |z| \le 2\}$. Man liest sie so: „$M$ ist die Menge aller
komplexen Zahlen $z$, für die $|z| \le 2$ gilt.“ Das Zeichen $\in$ bedeutet „ist Element von“, der Doppelpunkt heißt „für die gilt“.

### Bedingungen an den Betrag: Kreise und Kreisscheiben

Der Betrag $|z - z_0|$ ist der **Abstand** der Punkte $z$ und $z_0$. Das haben wir in der Lektion
[15.4 Konjugierte, Betrag und Division](/lernen/mathe3/komplexe-zahlen/konjugierte-betrag-und-division) gesehen. Damit lassen sich
viele Bedingungen sofort übersetzen:

- $|z - z_0| = r$: Alle Punkte mit Abstand $r$ von $z_0$. Das ist der **Kreis** um $z_0$ mit Radius $r$.
- $|z - z_0| \le r$: Abstand höchstens $r$. Das ist die **Kreisscheibe** samt Rand.
- $|z - z_0| < r$: Abstand kleiner als $r$. Das ist die Kreisscheibe **ohne** Rand. Den Rand zeichnet man gestrichelt.
- $|z - z_0| > r$: alles außerhalb des Kreises.

Rechnerisch steckt die Kreisgleichung aus [7.9 Der Kreis](/lernen/mathe3/analytische-geometrie/der-kreis) dahinter. Mit
$z = x + yi$ und $z_0 = a + bi$ ist $|z - z_0|^2 = (x - a)^2 + (y - b)^2$. Die Bedingung $|z - z_0| = r$ ist also gleichwertig mit
$(x - a)^2 + (y - b)^2 = r^2$.

:::beispiel[Eine Kreisscheibe]
Zeichne $M = \{z \in \C : |z - 2 + i| \le 3\}$.

1. Umschreiben in die Form $|z - z_0|$: $z - 2 + i = z - (2 - i)$. Der Mittelpunkt ist also $z_0 = 2 - i$, der Punkt $(2 \mid -1)$.
2. Radius $3$. Wegen „$\le$“ gehört der Rand dazu, er wird durchgezogen gezeichnet.
3. Kontrolle mit einem Punkt: $z = 2 + 2i$ hat den Abstand $|2 + 2i - 2 + i| = |3i| = 3$ und liegt genau auf dem Rand.
:::

```plot
x: [-2, 6]
y: [-4.5, 2.5]
gleich: true
achsen: { x: "Re", y: "Im" }
flaechen:
  - { f: "-1 + sqrt(9 - (x-2)^2)", g: "-1 - sqrt(9 - (x-2)^2)", von: -1, bis: 5, farbe: 0 }
kurven:
  - { x: "2 + 3*cos(t)", y: "-1 + 3*sin(t)", t: [0, "2*pi"], farbe: 0 }
punkte:
  - { x: 2, y: -1, label: "z₀ = 2 − i", farbe: 1 }
beschriftung: Die Kreisscheibe |z − 2 + i| ≤ 3 um den Mittelpunkt 2 − i mit Radius 3. Der durchgezogene Rand gehört zur Menge.
```

:::achtung[Das Vorzeichen des Mittelpunkts]
**Falsch:** „$|z + 1 - 2i| = 2$ ist der Kreis um $1 - 2i$.“

**Richtig:** Erst in die Form $|z - z_0|$ bringen: $z + 1 - 2i = z - (-1 + 2i)$. Der Mittelpunkt ist $-1 + 2i$, also der Punkt
$(-1 \mid 2)$. Es ist dieselbe Vorzeichenregel wie bei der Kreisgleichung $(x + 1)^2 + (y - 2)^2 = 4$.
:::

:::achtung[Ein Betrag ist kein Intervall]
**Falsch:** „$|z| \le 2$ bedeutet $-2 \le z \le 2$.“

**Richtig:** Das gilt nur in $\R$, wo die Zahlen auf einer Geraden liegen. In $\C$ ist $|z| \le 2$ die ganze **Kreisscheibe**
um $0$ mit Radius $2$. Zum Beispiel gehört $z = 1 + i$ dazu, denn $|1 + i| = \sqrt2 \le 2$. Eine Ungleichung wie $-2 \le z$
hat für komplexe Zahlen gar keinen Sinn, weil $\C$ keine Ordnung hat.
:::

### Bedingungen an Real- und Imaginärteil: Geraden und Halbebenen

- $\operatorname{Re}(z) = 1$: alle Punkte mit $x = 1$. Das ist eine **senkrechte** Gerade.
- $\operatorname{Re}(z) > 1$: alles **rechts** dieser Geraden, ohne die Gerade selbst. Das ist eine **Halbebene**.
- $\operatorname{Im}(z) \le 2$: alles **unterhalb** der waagrechten Geraden $y = 2$, mit der Geraden.

Bei mehreren Bedingungen gilt: „und“ bedeutet, dass beide erfüllt sein müssen. Die Menge ist dann der **Durchschnitt**,
also der Bereich, in dem sich beide Figuren überlappen. „Oder“ bedeutet die **Vereinigung**, also alles, was zu mindestens
einer der Figuren gehört.

:::beispiel[Halbebene und Kreisscheibe kombiniert]
Zeichne $M = \{z \in \C : \operatorname{Re}(z) > 1 \text{ und } |z| < 3\}$.

1. $\operatorname{Re}(z) > 1$: Halbebene rechts der senkrechten Geraden durch $1$. Die Gerade gehört nicht dazu.
2. $|z| < 3$: offene Kreisscheibe um $0$ mit Radius $3$.
3. „Und“: Gesucht ist der Teil der Kreisscheibe rechts der Geraden. Beide Ränder werden gestrichelt gezeichnet, weil beide Ungleichungen echt sind.
4. Die Gerade schneidet den Kreis, wo $1 + y^2 = 9$ ist, also bei $y = \pm 2\sqrt2 \approx \pm 2{,}83$.
:::

```plot
x: [-3.5, 3.5]
y: [-3.5, 3.5]
gleich: true
achsen: { x: "Re", y: "Im" }
flaechen:
  - { f: "sqrt(9 - x^2)", g: "-sqrt(9 - x^2)", von: 1, bis: 3, farbe: 1 }
kurven:
  - { x: "3*cos(t)", y: "3*sin(t)", t: [0, "2*pi"], farbe: 0, gestrichelt: true }
strecken:
  - { von: [1, -3.5], nach: [1, 3.5], gestrichelt: true }
beschriftung: Die Menge Re(z) > 1 und |z| < 3 ist das gefärbte Kreisstück rechts der senkrechten Geraden durch 1. Beide Ränder sind gestrichelt, weil sie nicht zur Menge gehören.
```

### Bedingungen an das Argument: Strahlen und Winkelbereiche

- $\arg(z) = \varphi$: alle Punkte in Richtung $\varphi$. Das ist ein **Strahl** (eine Halbgerade) vom Nullpunkt aus. Der Nullpunkt
  selbst gehört nicht dazu, weil $0$ kein Argument hat.
- $\alpha \le \arg(z) \le \beta$: der **Winkelbereich** zwischen den Strahlen zu $\alpha$ und $\beta$.
- Zusammen mit $|z| \le r$ entsteht ein **Kreissektor**, ein „Tortenstück“.

:::beispiel[Ein Kreissektor]
Zeichne $M = \{z \in \C : 30° \le \arg(z) \le 60° \text{ und } |z| \le 2\}$ und berechne seinen Flächeninhalt.

1. Strahlen vom Nullpunkt unter $30°$ und $60°$. Dazwischen liegt ein Winkelbereich von $30°$.
2. Mit $|z| \le 2$ wird daraus ein Tortenstück mit Radius $2$.
3. Fläche: Der Sektor ist $\frac{30°}{360°} = \frac{1}{12}$ des Kreises. Also $A = \frac{1}{12}\cdot\pi\cdot 2^2 = \frac{\pi}{3} \approx 1{,}05$ Flächeneinheiten.
:::

```plot
x: [-0.5, 2.5]
y: [-0.5, 2.5]
gleich: true
achsen: { x: "Re", y: "Im" }
flaechen:
  - { f: "sqrt(3)*x", g: "x/sqrt(3)", von: 0, bis: 1, farbe: 2 }
  - { f: "sqrt(4 - x^2)", g: "x/sqrt(3)", von: 1, bis: "sqrt(3)", farbe: 2 }
strecken:
  - { von: [0, 0], nach: ["sqrt(3)", 1] }
  - { von: [0, 0], nach: [1, "sqrt(3)"] }
kurven:
  - { x: "2*cos(t)", y: "2*sin(t)", t: ["pi/6", "pi/3"], farbe: 2 }
beschriftung: Der Kreissektor zwischen den Strahlen zu 30° und 60° mit Radius 2. Er ist ein Zwölftel der Kreisscheibe mit Radius 2.
```

### Gleich weit von zwei Punkten: die Mittelsenkrechte

:::beispiel[Eine Gleichung mit zwei Beträgen]
Beschreibe $M = \{z \in \C : |z - 2| = |z - 2i|\}$.

1. In Worten: Alle Punkte, die von $2$ und von $2i$ gleich weit entfernt sind.
2. Geometrisch ist das die **Mittelsenkrechte** der Strecke von $(2 \mid 0)$ nach $(0 \mid 2)$.
3. Rechnerisch mit $z = x + yi$: $(x - 2)^2 + y^2 = x^2 + (y - 2)^2$. Ausmultiplizieren: $-4x + 4 = -4y + 4$, also $y = x$.
4. Die Menge ist die Gerade $y = x$, die Winkelhalbierende des 1. und 3. Quadranten.
:::

:::merke[Übersetzen zwischen Bedingung und Figur]
1. $|z - z_0| = r$: Kreis um $z_0$ mit Radius $r$. $|z - z_0| \le r$: Kreisscheibe mit Rand. $|z - z_0| < r$: Kreisscheibe ohne Rand.
2. $\operatorname{Re}(z) = c$: senkrechte Gerade. $\operatorname{Im}(z) = c$: waagrechte Gerade. Mit $<$ oder $>$: Halbebene.
3. $\arg(z) = \varphi$: Strahl vom Nullpunkt. $\alpha \le \arg(z) \le \beta$: Winkelbereich.
4. $|z - z_1| = |z - z_2|$: Mittelsenkrechte der Strecke von $z_1$ nach $z_2$.
5. Echte Ungleichungen ($<$, $>$): Rand gestrichelt. Mit Gleichheit ($\le$, $\ge$): Rand durchgezogen.
6. „und“: Durchschnitt (Überlappung). „oder“: Vereinigung.
:::

```reflexion
frage: Warum beschreibt die Gleichung $|z - z_0| = r$ einen Kreis? Erkläre es, ohne Koordinaten einzusetzen.
antwort: |
  $z - z_0$ ist der Pfeil von $z_0$ nach $z$, so wie bei Vektoren die Differenz „Spitze minus Fuß“. Der Betrag dieses Pfeils ist
  der Abstand der beiden Punkte. Die Gleichung verlangt also: $z$ hat von $z_0$ genau den Abstand $r$. Alle Punkte mit festem
  Abstand von einem festen Punkt bilden nach Definition einen Kreis. Die Koordinatenrechnung mit $(x - a)^2 + (y - b)^2 = r^2$
  bestätigt nur, was dieses Bild schon sagt.
```

### Übungen

```aufgabe
id: kz-menge-kreis-ablesen
titel: Mittelpunkt und Radius eines Kreises
niveau: 1
lernziel: 8
kompetenz: verstehen
angabe: |
  Die Menge $K = \{z \in \C : |z - 3 + 4i| = 5\}$ ist ein Kreis.

  a) Gib den Mittelpunkt als komplexe Zahl an.

  b) Gib den Radius an.

  c) Liegt der Nullpunkt auf dem Kreis?
teile:
  - typ: komplex
    label: 'a) Mittelpunkt $z_0$'
    loesung: "3 - 4i"
    fehler:
      - wert: "-3+4i"
        meldung: 'Schreibe $z - 3 + 4i = z - (3 - 4i)$. In der Form $|z - z_0|$ ist $z_0 = 3 - 4i$.'
  - typ: zahl
    label: 'b) Radius'
    loesung: "5"
    fehler:
      - wert: "25"
        meldung: 'In der Betragsform steht rechts direkt der Radius, nicht sein Quadrat.'
  - typ: auswahl
    label: 'c) Nullpunkt'
    optionen:
      - 'ja'
      - 'nein, er liegt innerhalb'
      - 'nein, er liegt außerhalb'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Berechne den Abstand: $|0 - (3 - 4i)| = |-3 + 4i| = \sqrt{9 + 16}$. Vergleiche mit dem Radius.'
      - wert: 2
        meldung: 'Berechne den Abstand: $|0 - (3 - 4i)| = |-3 + 4i| = \sqrt{9 + 16}$. Vergleiche mit dem Radius.'
hinweise:
  - 'Bringe die Bedingung in die Form $|z - z_0| = r$.'
loesung: |
  Ansatz: $|z - z_0| = r$ ist der Kreis um $z_0$ mit Radius $r$.
  ---
  $z - 3 + 4i = z - (3 - 4i)$. Also Mittelpunkt $z_0 = 3 - 4i$ und Radius $5$.
  ---
  Abstand des Nullpunkts vom Mittelpunkt: $|0 - (3 - 4i)| = |-3 + 4i| = 5$. Er ist genau gleich dem Radius, der Nullpunkt liegt also auf dem Kreis.
```

```aufgabe
id: kz-menge-zuordnen
titel: Bedingung und Figur zuordnen
niveau: 1
lernziel: 8
kompetenz: verstehen
angabe: |
  a) Welche Bedingung beschreibt die Halbebene **rechts** der senkrechten Geraden durch $2$ (ohne die Gerade)?

  b) Welche Bedingung beschreibt den Strahl vom Nullpunkt in Richtung **links oben** unter $135°$?
teile:
  - typ: auswahl
    label: 'a)'
    optionen:
      - '$\operatorname{Re}(z) > 2$'
      - '$\operatorname{Im}(z) > 2$'
      - '$|z| > 2$'
      - '$\operatorname{Re}(z) \ge 2$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$\operatorname{Im}(z) > 2$ ist die Halbebene **oberhalb** der waagrechten Geraden $y = 2$. Rechts/links betrifft den Realteil.'
      - wert: 2
        meldung: '$|z| > 2$ ist das Äußere eines Kreises um $0$, keine Halbebene.'
      - wert: 3
        meldung: 'Mit $\ge$ gehört die Gerade dazu. Verlangt ist die Halbebene **ohne** die Gerade.'
  - typ: auswahl
    label: 'b)'
    optionen:
      - '$\arg(z) = 135°$'
      - '$|z| = 135$'
      - '$\operatorname{Re}(z) = -\operatorname{Im}(z)$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Eine Bedingung an den Betrag liefert einen Kreis, keinen Strahl.'
      - wert: 2
        meldung: 'Das ist die ganze Gerade $y = -x$, also auch der Teil nach rechts unten (Richtung $315°$) und der Nullpunkt. Ein Strahl ist nur eine Hälfte.'
hinweise:
  - 'Realteil = links/rechts, Imaginärteil = unten/oben, Betrag = Abstand vom Nullpunkt, Argument = Richtung.'
loesung: |
  Ansatz: Jede Art von Bedingung gehört zu einer Art von Figur.
  ---
  a) „Rechts der senkrechten Geraden durch $2$“ heißt $x > 2$, also $\operatorname{Re}(z) > 2$. Ohne Gerade, daher $>$ und nicht $\ge$.
  ---
  b) Ein Strahl vom Nullpunkt in eine feste Richtung ist $\arg(z) = 135°$. Die Gerade $y = -x$ enthält zusätzlich den Gegenstrahl.
```

```aufgabe
id: kz-punkt-in-menge
titel: Gehört der Punkt zur Menge?
niveau: 2
lernziel: 8
kompetenz: anwenden
angabe: |
  Gegeben ist $M = \{z \in \C : |z - 1 - i| \le 2\}$. Prüfe, ob $z = 3 + 2i$ zu $M$ gehört.

  a) Berechne den Abstand von $z$ zum Mittelpunkt von $M$ (exakt oder auf drei Nachkommastellen).

  b) Gehört $z$ zu $M$?
teile:
  - typ: zahl
    label: 'a) Abstand'
    loesung: "abs((3+2i) - (1+i))"
    anzeige: '\sqrt5 \approx 2{,}236'
    fehler:
      - wert: "sqrt(13)"
        meldung: 'Das ist $|z|$, der Abstand zum Nullpunkt. Der Mittelpunkt von $M$ ist aber $1 + i$.'
      - wert: "3"
        meldung: 'Der Abstand ist nicht die Summe $2 + 1$. Rechne $|(3 + 2i) - (1 + i)| = |2 + i| = \sqrt{2^2 + 1^2}$.'
  - typ: auswahl
    label: 'b)'
    optionen:
      - 'ja'
      - 'nein'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Der Abstand $\sqrt5 \approx 2{,}24$ ist größer als der Radius $2$. Der Punkt liegt außerhalb.'
hinweise:
  - '$|z - 1 - i| = |z - (1 + i)|$. Der Mittelpunkt ist $1 + i$, der Radius $2$.'
  - 'Berechne $|(3 + 2i) - (1 + i)|$ und vergleiche mit $2$.'
gefuehrt:
  - text: Welcher Punkt ist der Mittelpunkt $z_0$ der Kreisscheibe?
    teil:
      typ: komplex
      loesung: "1 + i"
      fehler:
        - wert: "-1-i"
          meldung: '$z - 1 - i = z - (1 + i)$. Der Mittelpunkt ist $1 + i$.'
    erklaerung: '$|z - 1 - i| = |z - (1 + i)|$, also $z_0 = 1 + i$ und Radius $2$.'
  - text: Berechne die Differenz $z - z_0 = (3 + 2i) - (1 + i)$.
    teil:
      typ: komplex
      loesung: "2 + i"
    erklaerung: '$(3 - 1) + (2 - 1)\,i = 2 + i$.'
  - text: Berechne ihren Betrag.
    teil:
      typ: zahl
      loesung: "sqrt(5)"
      fehler:
        - wert: "3"
          meldung: '$|2 + i| = \sqrt{2^2 + 1^2}$, nicht $2 + 1$.'
    erklaerung: '$|2 + i| = \sqrt{4 + 1} = \sqrt5 \approx 2{,}236$.'
  - text: Vergleiche mit dem Radius. Liegt $z$ in $M$?
    erklaerung: '$\sqrt5 \approx 2{,}236 > 2$. Der Punkt liegt knapp außerhalb der Kreisscheibe, gehört also nicht zu $M$.'
loesung: |
  Ansatz: $M$ ist die Kreisscheibe um $1 + i$ mit Radius $2$. Ein Punkt gehört dazu, wenn sein Abstand zum Mittelpunkt höchstens $2$ ist.
  ---
  $z - (1 + i) = 2 + i$, also Abstand $|2 + i| = \sqrt5 \approx 2{,}236$.
  ---
  Wegen $\sqrt5 > 2$ liegt $z$ außerhalb. $z$ gehört nicht zu $M$.
```

```aufgabe
id: kz-menge-aus-bild
titel: Aus dem Bild die Bedingung aufstellen
niveau: 2
lernziel: 8
kompetenz: verstehen
angabe: |
  Das Bild zeigt eine Kreisscheibe mit durchgezogenem Rand. Sie lässt sich als $\{z \in \C : |z - z_0| \le r\}$ schreiben.
  Bestimme $z_0$ und $r$.
plot:
  x: [-5, 1]
  y: [-2, 4]
  gleich: true
  achsen: { x: "Re", y: "Im" }
  flaechen:
    - { f: "1 + sqrt(4 - (x+2)^2)", g: "1 - sqrt(4 - (x+2)^2)", von: -4, bis: 0, farbe: 0 }
  kurven:
    - { x: "-2 + 2*cos(t)", y: "1 + 2*sin(t)", t: [0, "2*pi"], farbe: 0 }
  punkte:
    - { x: -2, y: 1 }
teile:
  - typ: komplex
    label: '$z_0$'
    loesung: "-2 + i"
    fehler:
      - wert: "1-2i"
        meldung: 'Vertauschte Achsen: Der Realteil ist die waagrechte Koordinate des Mittelpunkts, also $-2$.'
      - wert: "2-i"
        meldung: 'Der Mittelpunkt liegt links oben, bei $(-2 \mid 1)$. Lies $z_0$ direkt ab. Die Vorzeichenumkehr passiert erst in $|z - z_0|$.'
  - typ: zahl
    label: '$r$'
    loesung: "2"
    fehler:
      - wert: "4"
        meldung: 'Das ist der Durchmesser. Der Radius ist der Abstand vom Mittelpunkt zum Rand.'
hinweise:
  - 'Lies den Mittelpunkt und den Abstand zum Rand ab.'
  - 'Der Mittelpunkt liegt bei $(-2 \mid 1)$. Die Scheibe reicht waagrecht von $-4$ bis $0$.'
loesung: |
  Ansatz: Eine Kreisscheibe mit Rand ist $|z - z_0| \le r$. Mittelpunkt und Radius lesen wir ab.
  ---
  Mittelpunkt $(-2 \mid 1)$, also $z_0 = -2 + i$. Die Scheibe reicht von $x = -4$ bis $x = 0$, der Durchmesser ist $4$, also $r = 2$.
  ---
  Die Menge ist $\{z : |z - (-2 + i)| \le 2\} = \{z : |z + 2 - i| \le 2\}$. Das $\le$ passt zum durchgezogenen Rand.
```

```aufgabe
id: kz-mittelsenkrechte
titel: Gleich weit von 4 und −2i
niveau: 2
lernziel: 8
kompetenz: rechnen
angabe: |
  Die Menge $\{z \in \C : |z - 4| = |z + 2i|\}$ ist eine Gerade. Schreibe sie in der Form $y = kx + d$, wobei $z = x + yi$ ist.
  Gib $k$ und $d$ an.
teile:
  - typ: zahl
    label: '$k$'
    loesung: "-2"
    fehler:
      - wert: "2"
        meldung: 'Prüfe beim Ausmultiplizieren die Vorzeichen: $-8x + 16 = 4y + 4$, also $4y = -8x + 12$.'
  - typ: zahl
    label: '$d$'
    loesung: "3"
    fehler:
      - wert: "-3"
        meldung: 'Aus $4y = -8x + 12$ folgt $y = -2x + 3$. Der Achsenabschnitt ist positiv.'
hinweise:
  - '$|z + 2i| = |z - (-2i)|$: Gesucht sind die Punkte mit gleichem Abstand zu $(4 \mid 0)$ und zu $(0 \mid -2)$.'
  - 'Mit $z = x + yi$: $(x - 4)^2 + y^2 = x^2 + (y + 2)^2$. Ausmultiplizieren, die Quadrate fallen weg.'
loesung: |
  Ansatz: Beide Beträge sind Abstände. Wir quadrieren sie und setzen sie gleich.
  ---
  $(x - 4)^2 + y^2 = x^2 + (y + 2)^2$, also $x^2 - 8x + 16 + y^2 = x^2 + y^2 + 4y + 4$.
  ---
  $x^2$ und $y^2$ fallen weg: $-8x + 16 = 4y + 4$, also $4y = -8x + 12$ und $y = -2x + 3$. Damit $k = -2$, $d = 3$.
  ---
  Kontrolle: Der Mittelpunkt der Strecke von $(4 \mid 0)$ nach $(0 \mid -2)$ ist $(2 \mid -1)$. Er erfüllt $-1 = -2\cdot 2 + 3$.
```

```aufgabe
id: kz-menge-ring-flaeche
titel: Ein Viertel eines Kreisrings
niveau: 2
lernziel: 8
kompetenz: anwenden
angabe: |
  Gegeben ist $M = \{z \in \C : 1 \le |z| \le 3 \text{ und } 0° \le \arg(z) \le 90°\}$.

  a) Beschreibe $M$ in Worten.

  b) Berechne den Flächeninhalt von $M$ exakt.
teile:
  - typ: text
    label: 'a) Beschreibung'
    muster: |
      $M$ ist der Teil des Kreisrings zwischen den Kreisen um $0$ mit Radius $1$ und $3$, der im 1. Quadranten liegt
      (einschließlich der Ränder). Also ein Viertel eines Kreisrings.
  - typ: zahl
    label: 'b) Flächeninhalt'
    loesung: "(pi*3^2 - pi*1^2)/4"
    anzeige: '2\pi \approx 6{,}283'
    fehler:
      - wert: "9*pi/4"
        meldung: 'Das ist der ganze Viertelkreis mit Radius $3$. Wegen $|z| \ge 1$ fehlt aber das innere Viertel mit Radius $1$.'
      - wert: "8*pi"
        meldung: 'Das ist der ganze Kreisring. Wegen $0° \le \arg(z) \le 90°$ gehört nur ein Viertel davon zu $M$.'
hinweise:
  - '$1 \le |z| \le 3$ ist ein Kreisring. $0° \le \arg(z) \le 90°$ schneidet den 1. Quadranten heraus.'
  - 'Ringfläche: $\pi\cdot 3^2 - \pi\cdot 1^2$. Davon ein Viertel.'
loesung: |
  Ansatz: Wir übersetzen beide Bedingungen in Figuren und bilden den Durchschnitt.
  ---
  $1 \le |z| \le 3$: Kreisring zwischen den Radien $1$ und $3$. $0° \le \arg(z) \le 90°$: der 1. Quadrant. Zusammen: ein Viertelring.
  ---
  Fläche des ganzen Rings: $\pi\cdot 9 - \pi\cdot 1 = 8\pi$. Ein Viertel davon: $2\pi \approx 6{,}283$ Flächeneinheiten.
```

```aufgabe
id: kz-menge-schnitt
titel: Gerade und Kreis in ℂ schneiden
niveau: 3
lernziel: 8
kompetenz: anwenden
angabe: |
  Bestimme alle $z \in \C$, die **beide** Bedingungen erfüllen:
  $$|z - 1| = |z - i| \quad\text{und}\quad |z| = 2.$$
  Gib die Lösung mit positivem Realteil zuerst an (exakt oder auf drei Nachkommastellen).
teile:
  - typ: komplex
    label: 'Lösung mit positivem Realteil'
    loesung: "sqrt(2) + sqrt(2)*i"
    anzeige: '\sqrt2 + \sqrt2\, i'
    fehler:
      - wert: "sqrt(2) - sqrt(2)*i"
        meldung: 'Die erste Bedingung ergibt die Gerade $y = x$, nicht $y = -x$. Prüfe: Hat $\sqrt2 - \sqrt2 i$ von $1$ und von $i$ denselben Abstand?'
      - wert: "2 + 2i"
        meldung: '$|2 + 2i| = 2\sqrt2$, nicht $2$. Der Punkt liegt auf $y = x$, aber nicht auf dem Kreis mit Radius $2$.'
  - typ: komplex
    label: 'zweite Lösung'
    loesung: "-sqrt(2) - sqrt(2)*i"
    anzeige: '-\sqrt2 - \sqrt2\, i'
hinweise:
  - 'Die erste Bedingung beschreibt die Mittelsenkrechte der Strecke von $1$ nach $i$. Rechne sie mit $z = x + yi$ aus.'
  - 'Du erhältst $y = x$. Schneide diese Gerade mit dem Kreis $x^2 + y^2 = 4$.'
loesung: |
  Ansatz: Jede Bedingung ist eine Figur. Gesucht sind die Schnittpunkte von Gerade und Kreis.
  ---
  $|z - 1| = |z - i|$ mit $z = x + yi$: $(x - 1)^2 + y^2 = x^2 + (y - 1)^2$, also $-2x = -2y$ und $y = x$.
  ---
  $|z| = 2$ heißt $x^2 + y^2 = 4$. Mit $y = x$: $2x^2 = 4$, also $x = \pm\sqrt2$.
  ---
  Lösungen: $z = \sqrt2 + \sqrt2\, i$ und $z = -\sqrt2 - \sqrt2\, i$. Das sind die Punkte auf dem Kreis mit Radius $2$ unter $45°$ und $225°$.
  Kontrolle: $|\sqrt2 + \sqrt2 i| = \sqrt{2 + 2} = 2$.
```

```aufgabe
id: kz-menge-halbebene-begruenden
titel: Näher an 1 als an −1
niveau: 3
lernziel: 8
kompetenz: begruenden
angabe: |
  Gegeben ist $H = \{z \in \C : |z - 1| < |z + 1|\}$.

  a) Begründe geometrisch und rechnerisch, dass $H$ die Halbebene $\operatorname{Re}(z) > 0$ ist.

  b) Gehört $z = 0{,}5 - 3i$ zu $H$?
teile:
  - typ: text
    label: 'a) Begründung'
    muster: |
      Geometrisch: $|z - 1|$ ist der Abstand zu $1$, $|z + 1|$ der Abstand zu $-1$. $H$ enthält alle Punkte, die näher an $1$
      als an $-1$ liegen. Die Grenze ist die Mittelsenkrechte der Strecke von $-1$ nach $1$, also die imaginäre Achse.
      Näher an $1$ sind die Punkte rechts davon. Rechnerisch: Beide Seiten sind nicht negativ, also darf man quadrieren:
      $(x - 1)^2 + y^2 < (x + 1)^2 + y^2$. Daraus folgt $-2x < 2x$, also $x > 0$.
  - typ: auswahl
    label: 'b)'
    optionen:
      - 'ja'
      - 'nein'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Es zählt nur der Realteil. $\operatorname{Re}(0{,}5 - 3i) = 0{,}5 > 0$. Der Imaginärteil $-3$ spielt keine Rolle.'
hinweise:
  - 'Welche Punkte sind von $1$ und $-1$ gleich weit entfernt? Wo liegen die Punkte, die näher an $1$ sind?'
  - 'Rechnerisch: Beide Seiten quadrieren (das ist erlaubt, weil beide nicht negativ sind) und $z = x + yi$ einsetzen.'
loesung: |
  Ansatz: Die Beträge sind Abstände. Die Bedingung vergleicht also die Abstände zu $1$ und zu $-1$.
  ---
  Geometrisch: Gleich weit von $1$ und $-1$ sind genau die Punkte der Mittelsenkrechten, also der imaginären Achse. Näher an $1$ liegt alles rechts davon.
  ---
  Rechnerisch: Quadrieren ist erlaubt, weil beide Seiten nicht negativ sind. $(x - 1)^2 + y^2 < (x + 1)^2 + y^2$ ergibt $-2x + 1 < 2x + 1$, also $x > 0$.
  ---
  b) $\operatorname{Re}(0{,}5 - 3i) = 0{,}5 > 0$. Also gehört $z$ zu $H$. Kontrolle: $|z - 1| = |-0{,}5 - 3i| \approx 3{,}04$ und $|z + 1| = |1{,}5 - 3i| \approx 3{,}35$.
```

## Gemischte Wiederholung

In diesem Abschnitt sind Aufgaben aus dem ganzen Kapitel gemischt, dazu Aufgaben, die Stoff aus früheren Kapiteln mit
komplexen Zahlen verbinden. Vor jeder Aufgabe steht die wichtigste Frage der Prüfung: **Welches Verfahren passt hier?**
Nimm dir diese Frage bewusst vor, bevor du zu rechnen beginnst. Genau dieses Erkennen trainiert man nicht, wenn man nur
Aufgaben eines einzigen Abschnitts hintereinander löst.

```aufgabe
id: kz-mix-verfahren-potenz
titel: "Welches Verfahren passt? Eine hohe Potenz"
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Du sollst $(2 - 2i)^{12}$ in der Form $a + bi$ berechnen. Du musst nicht rechnen. Welches Vorgehen ist am geschicktesten?
teile:
  - typ: auswahl
    optionen:
      - 'In Polarform umrechnen und den Satz von de Moivre anwenden.'
      - 'Die Klammer zwölfmal mit sich selbst ausmultiplizieren.'
      - 'Mit der Konjugierten $2 + 2i$ erweitern.'
      - '$2^{12} - (2i)^{12}$ berechnen.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Das ist möglich, aber sehr lang und fehleranfällig. Für hohe Potenzen gibt es einen Weg mit drei Zeilen.'
      - wert: 2
        meldung: 'Erweitern mit der Konjugierten braucht man bei **Brüchen**. Hier gibt es keinen Nenner.'
      - wert: 3
        meldung: 'Eine Potenz verteilt sich nicht auf eine Summe oder Differenz: $(a - b)^{12} \ne a^{12} - b^{12}$.'
hinweise:
  - 'Bei welcher Darstellung wird das Potenzieren besonders einfach?'
loesung: |
  Hohe Potenzen rechnet man in Polarform: Betrag hoch $n$, Winkel mal $n$.
  ---
  Zur Kontrolle: $2 - 2i$ hat $r = 2\sqrt2$ und $\varphi = 315°$. Also $(2 - 2i)^{12} = (2\sqrt2)^{12}\,(\cos 3780° + i\sin 3780°)$.
  Es ist $3780° = 10\cdot 360° + 180°$, und $(2\sqrt2)^{12} = 2^{18} = 262\,144$. Ergebnis: $-262\,144$.
```

```aufgabe
id: kz-mix-verfahren-drei
titel: "Welches Verfahren passt? Drei Aufgabentypen"
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  Ordne jeder Aufgabe das passende Verfahren zu. Du musst nicht rechnen.

  a) $\dfrac{5 - i}{2 + 3i}$ in der Form $a + bi$ angeben.

  b) Alle Lösungen von $z^3 = -8i$ bestimmen.

  c) Alle Lösungen von $z^2 + 4z + 8 = 0$ bestimmen.
teile:
  - typ: auswahl
    label: 'a)'
    optionen:
      - 'mit der Konjugierten des Nenners erweitern'
      - 'Formel für die $n$-ten Wurzeln'
      - 'Lösungsformel für quadratische Gleichungen'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Hier wird nichts potenziert oder gewurzelt. Es ist ein Bruch, der in die Form $a + bi$ soll.'
      - wert: 2
        meldung: 'Hier steht keine Gleichung mit $z^2$. Es ist ein Bruch, der in die Form $a + bi$ soll.'
  - typ: auswahl
    label: 'b)'
    optionen:
      - 'mit der Konjugierten erweitern'
      - 'Polarform und Formel für die $n$-ten Wurzeln'
      - 'Lösungsformel für quadratische Gleichungen'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Erweitern hilft bei Brüchen. Bei $z^n = w$ sucht man $n$ Wurzeln.'
      - wert: 2
        meldung: 'Die Gleichung hat den Grad $3$, nicht $2$. Sie hat die besondere Form $z^n = w$.'
  - typ: auswahl
    label: 'c)'
    optionen:
      - 'mit der Konjugierten erweitern'
      - 'Formel für die $n$-ten Wurzeln'
      - 'Lösungsformel für quadratische Gleichungen'
    richtig: [2]
    fehler:
      - wert: 1
        meldung: 'Die Gleichung hat nicht die Form $z^n = w$, denn es gibt zusätzlich den Term $4z$.'
      - wert: 0
        meldung: 'Hier gibt es keinen Bruch. Es ist eine quadratische Gleichung.'
hinweise:
  - 'Achte auf die äußere Form: Bruch, reine Potenz $z^n = w$ oder quadratische Gleichung mit $z^2$ und $z$?'
loesung: |
  Ansatz: Die äußere Form entscheidet über das Verfahren.
  ---
  a) Ein Bruch wird mit der Konjugierten des Nenners erweitert. b) $z^3 = -8i$ hat die Form $z^n = w$: Polarform und Wurzelformel.
  ---
  c) Quadratische Gleichung: Lösungsformel. Zur Kontrolle: $D = 4 - 8 = -4$, also $z = -2 \pm 2i$.
```

```aufgabe
id: kz-mix-quadratisch-vergleich
titel: Reelle und komplexe Lösungen vergleichen
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Löse beide Gleichungen. Rückblick: [Kapitel 2, „Quadratische Gleichungen“](/lernen/mathe3/gleichungen/quadratische-gleichungen).

  a) $x^2 - 6x + 8 = 0$ in $\R$ (Lösungen durch Strichpunkt getrennt).

  b) $z^2 - 6z + 10 = 0$ in $\C$ (Lösung mit positivem Imaginärteil).
teile:
  - typ: menge
    label: 'a)'
    loesung: ["2", "4"]
    fehler:
      - wert: ["-2", "-4"]
        meldung: 'Mit $p = -6$ ist $-\frac p2 = +3$. Die Lösungen sind $3 \pm 1$.'
  - typ: komplex
    label: 'b)'
    loesung: "3 + i"
    fehler:
      - wert: "4"
        meldung: '$D = 9 - 10 = -1$ ist negativ. Die Wurzel ist $i$, nicht $1$.'
hinweise:
  - 'Kleine Lösungsformel mit $p = -6$. In a) ist $q = 8$, in b) $q = 10$.'
loesung: |
  Ansatz: Beide Male die kleine Lösungsformel mit $-\frac p2 = 3$ und $D = 9 - q$.
  ---
  a) $D = 9 - 8 = 1$, also $x = 3 \pm 1$, das heißt $x = 2$ oder $x = 4$.
  ---
  b) $D = 9 - 10 = -1$, also $z = 3 \pm i$. Ein kleiner Unterschied in $q$ entscheidet, ob die Lösungen reell sind.
```

```aufgabe
id: kz-mix-parallelogramm
titel: Ein Parallelogramm in der Zahlenebene
niveau: 1
lernziel: 2
kompetenz: anwenden
angabe: |
  Ein Parallelogramm hat die Ecken $0$, $z_1 = 3 + i$ und $z_2 = 1 + 2i$. Die vierte Ecke liegt $0$ gegenüber.
  Rückblick: [Kapitel 6, „Parallelogramme und besondere Vierecke“](/lernen/mathe3/vektoren/parallelogramme-und-besondere-vierecke).

  a) Gib die vierte Ecke als komplexe Zahl an.

  b) Wie lang ist die Diagonale von $0$ zur vierten Ecke (exakt oder auf drei Nachkommastellen)?
teile:
  - typ: komplex
    label: 'a) vierte Ecke'
    loesung: "(3+i) + (1+2i)"
    anzeige: '4 + 3i'
    fehler:
      - wert: "2-i"
        meldung: 'Das ist $z_1 - z_2$, die andere Diagonale als Pfeil. Die vierte Ecke gegenüber von $0$ ist die Summe $z_1 + z_2$.'
  - typ: zahl
    label: 'b) Diagonale'
    loesung: "abs(4+3i)"
    anzeige: '5'
    fehler:
      - wert: "7"
        meldung: 'Die Länge ist $\sqrt{4^2 + 3^2}$, nicht $4 + 3$.'
hinweise:
  - 'Pfeiladdition: Die vierte Ecke ist $z_1 + z_2$.'
loesung: |
  Ansatz: Addition komplexer Zahlen ist Pfeiladdition. Die Summe ist die gegenüberliegende Ecke des Parallelogramms.
  ---
  a) $z_1 + z_2 = 4 + 3i$. b) Die Diagonale hat die Länge $|4 + 3i| = \sqrt{16 + 9} = 5$.
```

```aufgabe
id: kz-mix-kosinus15
titel: cos 15° mit komplexen Zahlen
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Berechne $w = (\sqrt3 + i)(1 - i)$ in algebraischer Form und in Polarform. Folgere daraus den exakten Wert von $\cos 15°$.
  Rückblick: [Kapitel 5, „Trigonometrische Identitäten“](/lernen/mathe3/trigonometrie/trigonometrische-identitaeten).
teile:
  - typ: komplex
    label: '$w$ algebraisch'
    loesung: "(sqrt(3)+i)*(1-i)"
    anzeige: '(\sqrt3 + 1) + (1 - \sqrt3)\,i'
    fehler:
      - wert: "(sqrt(3)-1) + (1-sqrt(3))*i"
        meldung: '$i\cdot(-i) = -i^2 = +1$. Der Realteil ist $\sqrt3 + 1$.'
  - typ: zahl
    label: '$\cos 15°$'
    loesung: "(sqrt(3)+1)/(2*sqrt(2))"
    anzeige: '\tfrac{\sqrt3 + 1}{2\sqrt2} = \tfrac{\sqrt6 + \sqrt2}{4} \approx 0{,}9659'
    fehler:
      - wert: "(sqrt(3)-1)/(2*sqrt(2))"
        meldung: 'Das ist $\sin 15°$ (der Betrag des Imaginärteils geteilt durch $2\sqrt2$). Der Kosinus gehört zum Realteil.'
      - wert: "sqrt(3)+1"
        meldung: 'Der Realteil ist $r\cos\varphi$. Du musst noch durch den Betrag $r = 2\sqrt2$ teilen.'
hinweise:
  - '$\sqrt3 + i$ hat $r = 2$, $\varphi = 30°$. $1 - i$ hat $r = \sqrt2$, $\varphi = -45°$.'
  - 'Also hat $w$ den Betrag $2\sqrt2$ und den Winkel $-15°$. Vergleiche den Realteil: $2\sqrt2\cos(-15°) = \operatorname{Re}(w)$.'
loesung: |
  Ansatz: Wir berechnen dasselbe Produkt auf zwei Arten und vergleichen die Realteile.
  ---
  Algebraisch: $(\sqrt3 + i)(1 - i) = \sqrt3 - \sqrt3 i + i - i^2 = (\sqrt3 + 1) + (1 - \sqrt3)\,i$.
  ---
  Polar: Betrag $2\cdot\sqrt2 = 2\sqrt2$, Winkel $30° + (-45°) = -15°$. Also $\operatorname{Re}(w) = 2\sqrt2\cos(-15°) = 2\sqrt2\cos 15°$.
  ---
  Gleichsetzen: $2\sqrt2\cos 15° = \sqrt3 + 1$, also $\cos 15° = \frac{\sqrt3 + 1}{2\sqrt2} = \frac{\sqrt6 + \sqrt2}{4} \approx 0{,}9659$.
  Kontrolle mit dem Taschenrechner: $\cos 15° \approx 0{,}9659$.
```

```aufgabe
id: kz-mix-kreisgleichung
titel: Eine Kreisgleichung in Betragsform
niveau: 2
lernziel: 8
kompetenz: rechnen
angabe: |
  Der Kreis $x^2 + y^2 - 4x + 6y - 3 = 0$ soll in der Form $\{z \in \C : |z - z_0| = r\}$ geschrieben werden.
  Bestimme $z_0$ und $r$. Rückblick: [Kapitel 7, „Der Kreis“](/lernen/mathe3/analytische-geometrie/der-kreis).
teile:
  - typ: komplex
    label: '$z_0$'
    loesung: "2 - 3i"
    fehler:
      - wert: "-2+3i"
        meldung: 'Aus $x^2 - 4x$ wird $(x - 2)^2 - 4$. Der Mittelpunkt hat also $x = +2$. Ebenso $y = -3$.'
  - typ: zahl
    label: '$r$'
    loesung: "sqrt(3 + 4 + 9)"
    anzeige: '4'
    fehler:
      - wert: "16"
        meldung: 'Rechts steht $r^2 = 16$. Der Radius ist die Wurzel daraus.'
      - wert: "sqrt(3)"
        meldung: 'Bei der quadratischen Ergänzung kommen $4$ und $9$ auf die rechte Seite dazu: $r^2 = 3 + 4 + 9$.'
hinweise:
  - 'Quadratisch ergänzen: $x^2 - 4x = (x - 2)^2 - 4$ und $y^2 + 6y = (y + 3)^2 - 9$.'
  - 'Dann $(x - 2)^2 + (y + 3)^2 = 16$. Mittelpunkt $(2 \mid -3)$.'
loesung: |
  Ansatz: Quadratische Ergänzung liefert Mittelpunkt und Radius. Der Mittelpunkt $(a \mid b)$ wird zur Zahl $a + bi$.
  ---
  $(x - 2)^2 - 4 + (y + 3)^2 - 9 - 3 = 0$, also $(x - 2)^2 + (y + 3)^2 = 16$.
  ---
  Mittelpunkt $(2 \mid -3)$, Radius $4$. In Betragsform: $|z - (2 - 3i)| = 4$, also $z_0 = 2 - 3i$ und $r = 4$.
```

```aufgabe
id: kz-mix-quotient-potenz
titel: Quotient und Potenz von i kombiniert
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Berechne $w = \dfrac{2 + i}{1 - i}\cdot i^{15}$ in der Form $a + bi$.
teile:
  - typ: komplex
    label: '$w$'
    loesung: "(2+i)/(1-i) * i^15"
    anzeige: '\tfrac32 - \tfrac12 i'
    fehler:
      - wert: "-3/2 + i/2"
        meldung: '$15 = 4\cdot 3 + 3$, also $i^{15} = i^3 = -i$, nicht $+i$.'
      - wert: "1/2 + 3/2*i"
        meldung: 'Den Quotienten hast du richtig. Den Faktor $i^{15} = -i$ hast du aber nicht berücksichtigt.'
hinweise:
  - 'Zuerst $\frac{2 + i}{1 - i}$ mit $1 + i$ erweitern.'
  - 'Dann $i^{15} = i^3 = -i$ und multiplizieren.'
loesung: |
  Ansatz: Den Bruch in algebraische Form bringen, die Potenz von $i$ vereinfachen, dann multiplizieren.
  ---
  $\frac{2 + i}{1 - i} = \frac{(2 + i)(1 + i)}{2} = \frac{2 + 2i + i + i^2}{2} = \frac{1 + 3i}{2}$.
  ---
  $i^{15} = i^{4\cdot 3 + 3} = i^3 = -i$.
  ---
  $w = \frac{1 + 3i}{2}\cdot(-i) = \frac{-i - 3i^2}{2} = \frac{3 - i}{2} = \frac32 - \frac12 i$.
```

```aufgabe
id: kz-mix-polar-wurzel
titel: Polarform und Quadratwurzeln
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Gegeben ist $w = -8 + 8\sqrt3\, i$.

  a) Bestimme $r = |w|$ und $\varphi = \arg w$ in Grad ($0° \le \varphi < 360°$).

  b) Bestimme die Lösung von $z^2 = w$ mit positivem Realteil, exakt in der Form $a + bi$.
teile:
  - typ: zahl
    label: 'a) $r$'
    loesung: "abs(-8 + 8*sqrt(3)*i)"
    anzeige: '16'
    fehler:
      - wert: "8"
        meldung: '$r = \sqrt{64 + 192} = \sqrt{256}$. Beide Teile tragen bei.'
  - typ: zahl
    label: 'a) $\varphi$'
    einheit: "°"
    loesung: "inGrad(atan2(8*sqrt(3), -8))"
    anzeige: '120'
    fehler:
      - wert: "-60"
        meldung: '$w$ liegt links oben (2. Quadrant). Für $a < 0$ musst du $180°$ addieren.'
  - typ: komplex
    label: 'b) $z$'
    loesung: "4*(cos(inRad(60)) + i*sin(inRad(60)))"
    anzeige: '2 + 2\sqrt3\, i'
    fehler:
      - wert: "16*(cos(inRad(60)) + i*sin(inRad(60)))"
        meldung: 'Der Betrag der Wurzel ist $\sqrt{16} = 4$, nicht $16$.'
      - wert: "4*(cos(inRad(120)) + i*sin(inRad(120)))"
        meldung: 'Der Winkel wird halbiert: $\frac{120°}{2} = 60°$.'
hinweise:
  - '$w$ liegt im 2. Quadranten. $\arctan\frac{8\sqrt3}{-8} = -60°$.'
  - 'Quadratwurzeln: Radius $\sqrt{r}$, Winkel $\frac{\varphi}{2}$ und $\frac{\varphi}{2} + 180°$.'
loesung: |
  Ansatz: Erst Polarform, dann die Wurzelformel mit $n = 2$.
  ---
  a) $r = \sqrt{64 + 192} = \sqrt{256} = 16$. 2. Quadrant: $\varphi = -60° + 180° = 120°$.
  ---
  b) Radius $\sqrt{16} = 4$, Winkel $60°$ und $240°$. Die Lösung bei $60°$ hat positiven Realteil: $4(\cos 60° + i\sin 60°) = 2 + 2\sqrt3\, i$.
  ---
  Probe: $(2 + 2\sqrt3\, i)^2 = 4 + 8\sqrt3\, i + 12i^2 = -8 + 8\sqrt3\, i$.
```

```aufgabe
id: kz-mix-quadrat-gleich-konjugiert
titel: Wann ist das Quadrat gleich der Konjugierten?
niveau: 3
lernziel: 6
kompetenz: begruenden
angabe: |
  Bestimme alle $z \in \C$ mit $z^2 = \bar z$.

  a) Wie viele Lösungen gibt es?

  b) Gib die Lösung mit positivem Imaginärteil an.

  c) Begründe mit der Polarform, warum es genau diese Lösungen gibt.
teile:
  - typ: zahl
    label: 'a) Anzahl'
    loesung: "4"
    fehler:
      - wert: "3"
        meldung: 'Vergiss $z = 0$ nicht: $0^2 = 0 = \bar 0$. Die Polarform erfasst $0$ nicht, weil $0$ kein Argument hat.'
      - wert: "2"
        meldung: 'Prüfe $z = 1$ und $z = 0$: Beide erfüllen die Gleichung. Dazu kommen nicht-reelle Lösungen.'
  - typ: komplex
    label: 'b) Lösung mit positivem Imaginärteil'
    loesung: "cos(inRad(120)) + i*sin(inRad(120))"
    anzeige: '-\tfrac12 + \tfrac{\sqrt3}{2}i'
  - typ: text
    label: 'c) Begründung'
    muster: |
      $z = 0$ ist eine Lösung. Für $z = r(\cos\varphi + i\sin\varphi) \ne 0$ ist $z^2 = r^2(\cos 2\varphi + i\sin 2\varphi)$ und
      $\bar z = r(\cos(-\varphi) + i\sin(-\varphi))$. Beträge gleich: $r^2 = r$, also $r = 1$. Winkel gleich bis auf volle Umdrehungen:
      $2\varphi = -\varphi + k\cdot 360°$, also $\varphi = k\cdot 120°$. Das ergibt $1$, $\cos 120° + i\sin 120°$ und $\cos 240° + i\sin 240°$.
      Zusammen mit $0$ sind es vier Lösungen.
hinweise:
  - 'Prüfe zuerst $z = 0$ getrennt. Für $z \ne 0$: Vergleiche Betrag und Winkel von $z^2$ und $\bar z$.'
  - '$|z^2| = r^2$ und $|\bar z| = r$. Der Winkel von $z^2$ ist $2\varphi$, der von $\bar z$ ist $-\varphi$.'
loesung: |
  Ansatz: Polarform. Gleichheit heißt gleicher Betrag und gleicher Winkel bis auf volle Umdrehungen. Die Zahl $0$ prüfen wir extra.
  ---
  $z = 0$ erfüllt $0^2 = \bar 0$. Für $z \ne 0$: $r^2 = r$, also $r = 1$.
  ---
  Winkel: $2\varphi = -\varphi + k\cdot 360°$, also $3\varphi = k\cdot 360°$ und $\varphi = k\cdot 120°$. Für $k = 0, 1, 2$ erhalten wir $0°$, $120°$, $240°$.
  ---
  Lösungen: $0$, $1$, $-\tfrac12 + \tfrac{\sqrt3}{2}i$ und $-\tfrac12 - \tfrac{\sqrt3}{2}i$. Also vier Lösungen.
  Probe für $z = -\tfrac12 + \tfrac{\sqrt3}{2}i$: $z^2 = \tfrac14 - \tfrac{\sqrt3}{2}i - \tfrac34 = -\tfrac12 - \tfrac{\sqrt3}{2}i = \bar z$.
```

## Prüfungsaufgaben

Diese Aufgaben kombinieren mehrere Techniken auf dem Niveau der schriftlichen Prüfung. Jede hat einen Zeitrichtwert.
Rechne sie mit Stoppuhr und ohne Hilfen, so wie in der Prüfung: nicht-grafikfähiger Taschenrechner und Formelsammlung
sind erlaubt. Schreib zu jedem Teil zuerst den Ansatz hin, denn dafür gibt es auch dann Punkte, wenn sich später ein
Rechenfehler einschleicht.

```aufgabe
id: kz-pruefung-vier-rechenarten
titel: Zwei Zahlen darstellen und verknüpfen
niveau: 3
lernziel: 2
kompetenz: rechnen
punkte: 10
quelle: nach Musterprüfung Karigl, Aufgabe 6 (abgewandelt)
angabe: |
  Zeitrichtwert: 15 Minuten.

  Gegeben sind die komplexen Zahlen $z_1 = -3 + 2i$ und $z_2 = 4 + i$.

  a) Stelle $z_1$ und $z_2$ als Pfeile in der Gaußschen Zahlenebene dar.

  b) Berechne $z_1 + 2z_2$, $z_1 - z_2$, $z_1 z_2$ und $\dfrac{z_1}{z_2}$, jeweils in der Form $a + bi$.
teile:
  - typ: text
    label: 'a) Skizze'
    muster: |
      $z_1$ ist der Pfeil vom Nullpunkt zu $(-3 \mid 2)$, also links oben im 2. Quadranten.
      $z_2$ ist der Pfeil zu $(4 \mid 1)$, rechts knapp oberhalb der reellen Achse im 1. Quadranten.
  - typ: komplex
    label: 'b) $z_1 + 2z_2$'
    loesung: "(-3+2i) + 2*(4+i)"
    anzeige: '5 + 4i'
    fehler:
      - wert: "1+3i"
        meldung: 'Das ist $z_1 + z_2$. Der Faktor $2$ gilt für Real- **und** Imaginärteil von $z_2$: $2z_2 = 8 + 2i$.'
  - typ: komplex
    label: 'b) $z_1 - z_2$'
    loesung: "(-3+2i) - (4+i)"
    anzeige: '-7 + i'
    fehler:
      - wert: "-7+3i"
        meldung: 'Das Minus gilt auch für den Imaginärteil von $z_2$: $2i - i = i$.'
  - typ: komplex
    label: 'b) $z_1 z_2$'
    loesung: "(-3+2i)*(4+i)"
    anzeige: '-14 + 5i'
    fehler:
      - wert: "-10+5i"
        meldung: '$2i\cdot i = 2i^2 = -2$. Der Realteil ist $-12 - 2 = -14$.'
  - typ: komplex
    label: 'b) $z_1 / z_2$'
    loesung: "(-3+2i)/(4+i)"
    anzeige: '-\tfrac{10}{17} + \tfrac{11}{17}i \approx -0{,}588 + 0{,}647i'
    fehler:
      - wert: "(-10+11i)/15"
        meldung: 'Der Nenner ist $(4 + i)(4 - i) = 16 + 1 = 17$. Mit $i^2 = -1$ wird aus $-i^2$ ein Plus.'
hinweise:
  - 'Addieren und Subtrahieren: Real- und Imaginärteile getrennt. Multiplizieren: ausmultiplizieren, $i^2 = -1$.'
  - 'Dividieren: mit $\bar z_2 = 4 - i$ erweitern. Der Nenner wird $4^2 + 1^2 = 17$.'
loesung: |
  Ansatz: Zeichnen über die Koordinaten $(a \mid b)$, Rechnen nach den Regeln der algebraischen Form.
  ---
  a) $z_1$: Pfeil zu $(-3 \mid 2)$. $z_2$: Pfeil zu $(4 \mid 1)$.
  ---
  b) $z_1 + 2z_2 = -3 + 2i + 8 + 2i = 5 + 4i$. $\quad z_1 - z_2 = (-3 - 4) + (2 - 1)\,i = -7 + i$.
  ---
  $z_1 z_2 = -12 - 3i + 8i + 2i^2 = -12 - 2 + 5i = -14 + 5i$.
  ---
  $$\frac{z_1}{z_2} = \frac{(-3 + 2i)(4 - i)}{(4 + i)(4 - i)} = \frac{-12 + 3i + 8i - 2i^2}{17} = \frac{-10 + 11i}{17} \approx -0{,}588 + 0{,}647\,i$$
  Probe: $\frac{-10 + 11i}{17}\cdot(4 + i) = \frac{-40 - 10i + 44i + 11i^2}{17} = \frac{-51 + 34i}{17} = -3 + 2i$.
```

```aufgabe
id: kz-pruefung-darstellung
titel: Polarform, Produkt und hohe Potenz
niveau: 3
lernziel: 5
kompetenz: rechnen
punkte: 10
angabe: |
  Zeitrichtwert: 20 Minuten.

  Gegeben sind $z_1 = 1 - i$ und $z_2 = -\sqrt3 + i$.

  a) Stelle beide Zahlen in der Gaußschen Zahlenebene dar und gib sie in Polarform an.

  b) Berechne $z_1 \cdot z_2$ in Polarform. Wie entsteht der Pfeil von $z_1z_2$ geometrisch aus dem Pfeil von $z_1$?

  c) Berechne $z_1^{10}$ in der Form $a + bi$.
teile:
  - typ: vektor
    label: '$z_1$ in Polarform: $(r \mid \varphi)$, $\varphi$ in Grad aus $[0°, 360°)$'
    namen: ["r", "φ"]
    loesung: ["sqrt(2)", "315"]
    fehler:
      - wert: ["sqrt(2)", "-45"]
        meldung: 'Die Richtung stimmt, aber verlangt ist $0° \le \varphi < 360°$. Addiere $360°$.'
  - typ: vektor
    label: '$z_2$ in Polarform: $(r \mid \varphi)$'
    namen: ["r", "φ"]
    loesung: ["2", "150"]
    fehler:
      - wert: ["2", "-30"]
        meldung: '$z_2$ liegt links oben. Für $a < 0$ addierst du $180°$ zum Arcustangens.'
  - typ: vektor
    label: '$z_1 z_2$ in Polarform: $(r \mid \varphi)$'
    namen: ["r", "φ"]
    loesung: ["2*sqrt(2)", "105"]
    fehler:
      - wert: ["2*sqrt(2)", "465"]
        meldung: '$465°$ ist mehr als eine volle Umdrehung. Ziehe $360°$ ab.'
  - typ: text
    label: 'Geometrische Deutung zu b)'
    muster: |
      Der Pfeil von $z_1$ wird um $150°$ gegen den Uhrzeigersinn gedreht und auf das $2$-Fache gestreckt
      (Drehstreckung mit $z_2$).
  - typ: komplex
    label: '$z_1^{10}$'
    loesung: "(1-i)^10"
    anzeige: '-32i'
    fehler:
      - wert: "32i"
        meldung: '$10\cdot 315° = 3150° = 8\cdot 360° + 270°$. Der Winkel $270°$ zeigt nach unten.'
hinweise:
  - '$z_1$ liegt im 4. Quadranten, $z_2$ im 2. Quadranten.'
  - '$315° + 150° = 465° \equiv 105°$. Für c): $(\sqrt2)^{10} = 32$, $10\cdot 315° = 3150° \equiv 270°$.'
loesung: |
  **a)** $z_1 = 1 - i$: $r_1 = \sqrt2$, 4. Quadrant, $\arctan(-1) = -45°$, plus $360°$ ergibt $315°$. Also $z_1 = \sqrt2\, e^{i\cdot 315°}$.

  $z_2 = -\sqrt3 + i$: $r_2 = \sqrt{3 + 1} = 2$, 2. Quadrant, $\arctan(-\tfrac{1}{\sqrt3}) + 180° = -30° + 180° = 150°$. Also $z_2 = 2\,e^{i\cdot 150°}$.
  ---
  **b)** $z_1z_2 = 2\sqrt2\, e^{i(315° + 150°)} = 2\sqrt2\, e^{i\cdot 465°} = 2\sqrt2\, e^{i\cdot 105°}$.
  Geometrisch: Drehung von $z_1$ um $\arg z_2 = 150°$ und Streckung um $|z_2| = 2$.
  ---
  Kontrolle algebraisch: $(1 - i)(-\sqrt3 + i) = -\sqrt3 + i + \sqrt3 i - i^2 = (1 - \sqrt3) + (1 + \sqrt3)i$.
  Betrag: $\sqrt{(1-\sqrt3)^2 + (1+\sqrt3)^2} = \sqrt{8} = 2\sqrt2$.
  ---
  **c)** $z_1^{10} = (\sqrt2)^{10}\, e^{i\cdot 3150°}$. Es ist $3150° = 8\cdot 360° + 270°$, also
  $z_1^{10} = 32\,(\cos 270° + i \sin 270°) = 32\cdot(0 - i) = -32i$.
```

```aufgabe
id: kz-pruefung-wurzeln
titel: Vierte Wurzeln und ein Quadrat
niveau: 3
lernziel: 6
kompetenz: anwenden
punkte: 10
angabe: |
  Zeitrichtwert: 20 Minuten.

  Gegeben ist die Gleichung $z^4 = -81$.

  a) Gib $-81$ in Polarform an (Winkel in Grad).

  b) Bestimme alle vier Lösungen. Gib die Lösung im 1. Quadranten und die im 3. Quadranten exakt in der Form $a + bi$ an.

  c) Die vier Lösungen bilden ein Quadrat. Berechne seinen Flächeninhalt.
teile:
  - typ: vektor
    label: 'a) $(r \mid \varphi)$'
    namen: ["r", "φ"]
    loesung: ["81", "180"]
    fehler:
      - wert: ["81", "0"]
        meldung: '$-81$ liegt auf der **negativen** reellen Achse. Der Pfeil zeigt nach links, das sind $180°$.'
  - typ: komplex
    label: 'b) Lösung im 1. Quadranten'
    loesung: "3*(cos(inRad(45)) + i*sin(inRad(45)))"
    anzeige: '\tfrac{3\sqrt2}{2} + \tfrac{3\sqrt2}{2}i \approx 2{,}121 + 2{,}121i'
    fehler:
      - wert: "3i"
        meldung: 'Der Winkel der ersten Lösung ist $\frac{180°}{4} = 45°$, nicht $90°$.'
  - typ: komplex
    label: 'b) Lösung im 3. Quadranten'
    loesung: "3*(cos(inRad(225)) + i*sin(inRad(225)))"
    anzeige: '-\tfrac{3\sqrt2}{2} - \tfrac{3\sqrt2}{2}i'
  - typ: zahl
    label: 'c) Flächeninhalt'
    loesung: "abs(3*(cos(inRad(45)) + i*sin(inRad(45))) - 3*(cos(inRad(135)) + i*sin(inRad(135))))^2"
    anzeige: '18'
    fehler:
      - wert: "9"
        meldung: '$9 = 3^2$ wäre ein Quadrat mit Seite $3$. Die Seite ist aber der Abstand zweier **benachbarter** Lösungen, $3\sqrt2$.'
      - wert: "36"
        meldung: '$6$ ist die Diagonale des Quadrats (zwei gegenüberliegende Lösungen). Die Fläche ist $\frac{d^2}{2} = 18$.'
hinweise:
  - 'Radius der Lösungen: $\sqrt[4]{81} = 3$. Winkel: $\frac{180° + k\cdot 360°}{4} = 45° + k\cdot 90°$.'
  - 'Seite des Quadrats: Abstand von $3e^{i\cdot 45°}$ und $3e^{i\cdot 135°}$. Oder über die Diagonale $6$: Fläche $= \frac{d^2}{2}$.'
loesung: |
  Ansatz: Formel für die $n$-ten Wurzeln mit $n = 4$. Das Quadrat hat die Lösungen als Ecken.
  ---
  a) $-81 = 81\,(\cos 180° + i\sin 180°)$.
  ---
  b) Radius $3$, Winkel $45°$, $135°$, $225°$, $315°$. Mit $\cos 45° = \sin 45° = \frac{\sqrt2}{2}$:
  $z_0 = \frac{3\sqrt2}{2} + \frac{3\sqrt2}{2}i$ (1. Quadrant), $z_2 = -\frac{3\sqrt2}{2} - \frac{3\sqrt2}{2}i$ (3. Quadrant).
  Die anderen beiden sind $-\frac{3\sqrt2}{2} + \frac{3\sqrt2}{2}i$ und $\frac{3\sqrt2}{2} - \frac{3\sqrt2}{2}i$.
  ---
  c) Zwei benachbarte Ecken: $z_0 - z_1 = \frac{3\sqrt2}{2} - \left(-\frac{3\sqrt2}{2}\right) = 3\sqrt2$. Die Seite ist also $3\sqrt2$ lang, die Fläche $(3\sqrt2)^2 = 18$.
  ---
  Probe für $z_0$: $z_0^4 = 3^4\,(\cos 180° + i\sin 180°) = -81$.
```

```aufgabe
id: kz-pruefung-polynom
titel: Ein Polynom dritten Grades
niveau: 3
lernziel: 7
kompetenz: begruenden
punkte: 10
angabe: |
  Zeitrichtwert: 20 Minuten.

  Gegeben ist $p(z) = z^3 + z^2 + 8z - 10$.

  a) Zeige, dass $z = 1$ eine Nullstelle ist.

  b) Bestimme die übrigen Nullstellen.

  c) Gib die Zerlegung von $p$ in Linearfaktoren an und begründe mit dem Fundamentalsatz, warum es keine weiteren Nullstellen gibt.

  d) Die drei Nullstellen bilden in der Zahlenebene ein Dreieck. Berechne seinen Flächeninhalt.
teile:
  - typ: zahl
    label: 'a) $p(1)$'
    loesung: "1 + 1 + 8 - 10"
    anzeige: '0'
  - typ: komplex
    label: 'b) Nullstelle mit positivem Imaginärteil'
    loesung: "-1 + 3i"
    fehler:
      - wert: "1+3i"
        meldung: 'Der Restfaktor ist $z^2 + 2z + 10$. Mit $p = 2$ ist $-\frac p2 = -1$.'
      - wert: "-1+9i"
        meldung: '$D = 1 - 10 = -9$, also $\sqrt D = 3i$. Die Wurzel aus $9$ fehlt.'
  - typ: text
    label: 'c) Zerlegung und Begründung'
    muster: |
      $p(z) = (z - 1)(z + 1 - 3i)(z + 1 + 3i)$. Ein Polynom vom Grad $3$ hat nach dem Fundamentalsatz der Algebra genau
      drei Nullstellen (mit Vielfachheit). Alle drei sind gefunden, also gibt es keine weiteren.
  - typ: zahl
    label: 'd) Flächeninhalt'
    loesung: "6*2/2"
    anzeige: '6'
    fehler:
      - wert: "12"
        meldung: 'Die Dreiecksfläche ist $\frac{g\cdot h}{2}$. Du hast das Halbieren vergessen.'
hinweise:
  - 'Für b): Teile $p(z)$ durch $(z - 1)$ (Horner-Schema). Es bleibt eine quadratische Gleichung.'
  - 'Für d): Die beiden nicht-reellen Nullstellen liegen senkrecht übereinander bei $\operatorname{Re} = -1$. Das ist die Grundlinie.'
loesung: |
  Ansatz: Nullstelle prüfen, Linearfaktor abspalten, Rest mit der Lösungsformel lösen. Zum Schluss die Punkte als Dreieck deuten.
  ---
  a) $p(1) = 1 + 1 + 8 - 10 = 0$. Also ist $1$ eine Nullstelle.
  ---
  b) Horner-Schema mit $1$: Die Koeffizienten $1, 1, 8, -10$ ergeben $1, 2, 10$ mit Rest $0$. Also $p(z) = (z - 1)(z^2 + 2z + 10)$.
  $z^2 + 2z + 10 = 0$: $D = 1 - 10 = -9$, also $z = -1 \pm 3i$.
  ---
  c) $p(z) = (z - 1)(z + 1 - 3i)(z + 1 + 3i)$. Grad $3$ heißt genau drei Nullstellen, alle sind gefunden.
  ---
  d) Die Ecken sind $(1 \mid 0)$, $(-1 \mid 3)$ und $(-1 \mid -3)$. Grundlinie von $(-1 \mid 3)$ nach $(-1 \mid -3)$: Länge $6$.
  Höhe: waagrechter Abstand von $x = -1$ bis $x = 1$, also $2$. Fläche: $\frac{6\cdot 2}{2} = 6$ Flächeneinheiten.
```

```aufgabe
id: kz-pruefung-drohne
titel: Flugroute einer Drohne
niveau: 3
lernziel: 4
kompetenz: modellieren
punkte: 10
angabe: |
  Zeitrichtwert: 20 Minuten.

  Eine Vermessungsdrohne startet im Punkt $0$. Positionen werden als komplexe Zahlen angegeben: Der Realteil zeigt nach Osten,
  der Imaginärteil nach Norden, beides in Metern. Richtungen sind Winkel gegen den Uhrzeigersinn, gemessen von Osten aus.

  Die Drohne fliegt zuerst $300\,\text{m}$ in Richtung $30°$, danach $200\,\text{m}$ in Richtung $120°$.

  a) Gib die beiden Teilstrecken als komplexe Zahlen in Polarform an und berechne die Endposition in der Form $a + bi$ (auf eine Nachkommastelle).

  b) Wie weit ist die Drohne am Ende vom Startpunkt entfernt? Gib das Ergebnis auf einen Meter genau an.

  c) Erkläre, warum man den Abstand aus b) auch ohne Koordinaten mit dem Satz des Pythagoras erhält.

  d) In welche Richtung (Winkel in Grad, auf zwei Nachkommastellen) muss die Drohne fliegen, um direkt zum Start zurückzukehren?
teile:
  - typ: komplex
    label: 'a) Endposition in Metern'
    loesung: "300*(cos(inRad(30)) + i*sin(inRad(30))) + 200*(cos(inRad(120)) + i*sin(inRad(120)))"
    anzeige: '159{,}8 + 323{,}2i'
    toleranz: 0.1
    fehler:
      - wert: "300*(cos(inRad(30)) + i*sin(inRad(30))) + 200*(sin(inRad(120)) + i*cos(inRad(120)))"
        meldung: 'Bei der zweiten Strecke sind Sinus und Kosinus vertauscht. Der Realteil (Osten) ist $r\cos\varphi$.'
  - typ: zahl
    label: 'b) Entfernung'
    einheit: m
    loesung: "abs(300*(cos(inRad(30)) + i*sin(inRad(30))) + 200*(cos(inRad(120)) + i*sin(inRad(120))))"
    anzeige: '361'
    toleranz: 0.6
    fehler:
      - wert: "500"
        meldung: '$500\,\text{m}$ ist die Länge des Flugwegs. Der direkte Abstand ist kürzer, weil die Drohne abbiegt.'
  - typ: text
    label: 'c) Erklärung'
    muster: |
      Die beiden Richtungen $30°$ und $120°$ unterscheiden sich um genau $90°$. Die Teilstrecken stehen also senkrecht
      aufeinander und bilden die Katheten eines rechtwinkligen Dreiecks. Der Abstand zum Start ist die Hypotenuse:
      $\sqrt{300^2 + 200^2} = \sqrt{130\,000} \approx 361\,\text{m}$.
  - typ: zahl
    label: 'd) Rückflugrichtung'
    einheit: "°"
    loesung: "inGrad(atan2(-(150 + 100*sqrt(3)), -(150*sqrt(3) - 100))) + 360"
    anzeige: '243{,}69'
    toleranz: 0.01
    fehler:
      - wert: "63.69"
        meldung: 'Das ist die Richtung vom Start zur Drohne. Zurück fliegt sie genau entgegengesetzt, also $180°$ weiter.'
hinweise:
  - 'Teilstrecken: $300\,e^{i\cdot 30°}$ und $200\,e^{i\cdot 120°}$. Umrechnen mit $a = r\cos\varphi$, $b = r\sin\varphi$ und dann addieren.'
  - 'Rückflug: Pfeil von der Endposition zum Start, also $-z$. Sein Winkel ist der Winkel von $z$ plus $180°$.'
loesung: |
  Ansatz: Jede Teilstrecke ist ein Pfeil mit Länge und Richtung, also eine komplexe Zahl in Polarform. Hintereinander fliegen heißt Pfeile addieren.
  ---
  a) $z_1 = 300\,(\cos 30° + i\sin 30°) = 150\sqrt3 + 150i \approx 259{,}8 + 150{,}0\,i$.
  $z_2 = 200\,(\cos 120° + i\sin 120°) = -100 + 100\sqrt3\, i \approx -100{,}0 + 173{,}2\,i$.
  Endposition: $z = z_1 + z_2 \approx 159{,}8 + 323{,}2\,i$ (Meter).
  ---
  b) $|z| \approx \sqrt{159{,}8^2 + 323{,}2^2} \approx 360{,}6\,\text{m}$, also rund $361\,\text{m}$.
  ---
  c) Die Richtungen unterscheiden sich um $90°$. Die Teilstrecken sind Katheten, der Abstand ist die Hypotenuse: $\sqrt{300^2 + 200^2} = \sqrt{130\,000} \approx 360{,}6\,\text{m}$.
  ---
  d) Richtung der Endposition: $\arg z = \arctan\frac{323{,}2}{159{,}8} \approx 63{,}69°$ (1. Quadrant). Zurück geht es in die Gegenrichtung:
  $63{,}69° + 180° = 243{,}69°$, also nach Südsüdwest. Kontrolle: $63{,}69° = 30° + \arctan\frac{200}{300}$.
```

```aufgabe
id: kz-pruefung-menge
titel: Eine Menge zeichnen und untersuchen
niveau: 3
lernziel: 8
kompetenz: anwenden
punkte: 8
angabe: |
  Zeitrichtwert: 15 Minuten.

  Gegeben sind $M = \{z \in \C : |z - 2i| \le 2\}$ und $N = \{z \in \C : \operatorname{Im}(z) \ge 2\}$.

  a) Zeichne $M \cap N$, also die Menge der Zahlen, die in $M$ **und** in $N$ liegen.

  b) Berechne den Flächeninhalt von $M \cap N$ exakt.

  c) Welche Zahl in $M$ hat den größten Betrag? Gib sie und ihren Betrag an.

  d) Gehört $w = 1 + 3i$ zu $M \cap N$?
teile:
  - typ: text
    label: 'a) Skizze'
    muster: |
      $M$ ist die Kreisscheibe um $2i$, also um $(0 \mid 2)$, mit Radius $2$ (Rand durchgezogen). $N$ ist die Halbebene oberhalb der
      waagrechten Geraden $y = 2$, einschließlich der Geraden. Die Gerade geht durch den Mittelpunkt. $M \cap N$ ist deshalb
      die obere Hälfte der Kreisscheibe.
  - typ: zahl
    label: 'b) Flächeninhalt'
    loesung: "pi*2^2/2"
    anzeige: '2\pi \approx 6{,}283'
    fehler:
      - wert: "4*pi"
        meldung: 'Das ist die ganze Kreisscheibe $M$. Wegen $\operatorname{Im}(z) \ge 2$ bleibt nur die obere Hälfte.'
  - typ: komplex
    label: 'c) Zahl mit größtem Betrag'
    loesung: "4i"
    fehler:
      - wert: "2i"
        meldung: '$2i$ ist der Mittelpunkt. Am weitesten vom Nullpunkt entfernt ist der oberste Punkt des Kreises.'
  - typ: zahl
    label: 'c) ihr Betrag'
    loesung: "4"
  - typ: auswahl
    label: 'd) Gehört $w = 1 + 3i$ zu $M \cap N$?'
    optionen:
      - 'ja'
      - 'nein, $w$ liegt nicht in $M$'
      - 'nein, $w$ liegt nicht in $N$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Abstand zum Mittelpunkt: $|1 + 3i - 2i| = |1 + i| = \sqrt2 \approx 1{,}41 \le 2$. Also liegt $w$ in $M$.'
      - wert: 2
        meldung: '$\operatorname{Im}(w) = 3 \ge 2$. Also liegt $w$ in $N$.'
hinweise:
  - '$|z - 2i| \le 2$ ist eine Kreisscheibe um $(0 \mid 2)$. $\operatorname{Im}(z) \ge 2$ ist eine Halbebene.'
  - 'Der Nullpunkt liegt auf dem Rand von $M$. Der Punkt von $M$, der am weitesten weg ist, liegt ihm genau gegenüber.'
loesung: |
  Ansatz: Jede Bedingung als Figur zeichnen, dann den Durchschnitt bilden.
  ---
  a) $M$: Kreisscheibe um $2i$ mit Radius $2$. $N$: Halbebene $y \ge 2$. Die Grenzgerade geht durch den Mittelpunkt, also ist $M \cap N$ eine Halbkreisscheibe.
  ---
  b) Fläche $= \frac12\cdot\pi\cdot 2^2 = 2\pi \approx 6{,}283$ Flächeneinheiten.
  ---
  c) Der Kreis geht durch $0$ (Abstand $|0 - 2i| = 2$). Der gegenüberliegende Punkt ist $4i$ mit $|4i| = 4$. Kein Punkt von $M$ ist weiter von $0$ entfernt. Der Weg von $0$ über den Mittelpunkt $2i$ zu $z$ ist höchstens $2 + 2 = 4$ lang, und der direkte Weg ist nie länger als ein Umweg.
  ---
  d) $|w - 2i| = |1 + i| = \sqrt2 \le 2$, also $w \in M$. $\operatorname{Im}(w) = 3 \ge 2$, also $w \in N$. Damit gehört $w$ zu $M \cap N$.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, ohne nachzuschauen. Vergleiche dann mit dem Kasten „Auf einen Blick“ direkt nach dieser Frage.
antwort: |
  Zum Beispiel:
  1. Komplexe Zahlen $a + bi$ mit $i^2 = -1$ sind Punkte der Zahlenebene. Man rechnet mit ihnen wie mit Termen und ersetzt $i^2$ durch $-1$.
  2. In Polarform werden beim Multiplizieren die Beträge multipliziert und die Winkel addiert. Daraus folgen de Moivre und die $n$ Lösungen von $z^n = w$.
  3. In $\C$ hat jede Polynomgleichung vom Grad $n \ge 1$ genau $n$ Lösungen, wenn man mehrfache Lösungen mehrfach zählt (Fundamentalsatz der Algebra).
```

:::zusammenfassung
1. Die **imaginäre Einheit** $i$ erfüllt $i^2 = -1$. Ihre Potenzen wiederholen sich mit Periode $4$: $1, i, -1, -i$. Die Regel $\sqrt a\cdot\sqrt b = \sqrt{ab}$ ist für $a, b \ge 0$ sicher richtig, für zwei negative Zahlen aber falsch.
2. Eine **komplexe Zahl** $z = a + bi$ hat den Realteil $a$ und den Imaginärteil $b$, beide reell. Sie ist der Punkt $(a \mid b)$ der **Gaußschen Zahlenebene**. Zwei komplexe Zahlen sind gleich, wenn Real- und Imaginärteile übereinstimmen.
3. **Addieren** heißt Pfeile aneinanderhängen. **Multiplizieren** heißt ausmultiplizieren und $i^2 = -1$ setzen. **Dividieren** heißt mit der Konjugierten des Nenners erweitern, denn $z\bar z = |z|^2$ ist reell.
4. Die **Polarform** $z = r(\cos\varphi + i\sin\varphi) = re^{i\varphi}$ beschreibt $z$ durch Betrag $r = \sqrt{a^2 + b^2}$ und Argument $\varphi$. Beim Umrechnen entscheidet eine Skizze über den Quadranten.
5. **Multiplizieren** ist eine **Drehstreckung**: Beträge multiplizieren, Winkel addieren. Daraus folgt der **Satz von de Moivre** $(re^{i\varphi})^n = r^n e^{in\varphi}$ für hohe Potenzen.
6. Die Gleichung $z^n = w$ mit $w \ne 0$ hat **genau $n$ Lösungen**. Sie liegen auf einem Kreis mit Radius $\sqrt[n]{|w|}$ und bilden ein regelmäßiges $n$-Eck.
7. **Fundamentalsatz der Algebra:** Jedes Polynom vom Grad $n \ge 1$ zerfällt in $\C$ in $n$ Linearfaktoren. Bei reellen Koeffizienten kommen nicht-reelle Nullstellen in konjugierten Paaren.
8. **Mengen** in der Zahlenebene: $|z - z_0| \le r$ ist eine Kreisscheibe, $\operatorname{Re}(z) > c$ eine Halbebene, $\arg(z) = \varphi$ ein Strahl, $|z - z_1| = |z - z_2|$ eine Mittelsenkrechte.
:::

### Die häufigsten Fehler

Jeder Fehler ist mit der Aufgabe verknüpft, in der du ihn gezielt üben kannst. Die Aufgaben geben dir eine Rückmeldung,
wenn du genau diesen Fehler machst.

1. **Wurzelgesetz bei negativen Zahlen:** $\sqrt{-4}\cdot\sqrt{-9} = \sqrt{36}$ ist falsch. Richtig: $2i\cdot 3i = -6$. Training: „Fehler finden beim Wurzelgesetz“ (in [15.1 Die imaginäre Einheit](/lernen/mathe3/komplexe-zahlen/die-imaginaere-einheit-warum-es-komplexe-zahlen-gibt)).
2. **Quotient statt Rest bei Potenzen von $i$:** Bei $i^{14}$ zählt der Rest $2$, nicht der Quotient $3$. Training: „Potenzen von i“ (in [15.1 Die imaginäre Einheit](/lernen/mathe3/komplexe-zahlen/die-imaginaere-einheit-warum-es-komplexe-zahlen-gibt)).
3. **Imaginärteil mit $i$:** $\operatorname{Im}(4 - 3i)$ ist $-3$, nicht $-3i$. Training: „Real- und Imaginärteil“ (in [15.2 Algebraische Form und Gaußsche Zahlenebene](/lernen/mathe3/komplexe-zahlen/algebraische-form-und-gausssche-zahlenebene)).
4. **Achsen vertauscht:** $2 - 5i$ gehört zum Punkt $(2 \mid -5)$, nicht $(-5 \mid 2)$. Training: „Zahlen aus der Zahlenebene ablesen“ (in [15.2 Algebraische Form und Gaußsche Zahlenebene](/lernen/mathe3/komplexe-zahlen/algebraische-form-und-gausssche-zahlenebene)).
5. **Minus vor der Klammer nur halb angewendet:** $(5 + i) - (2 - 3i) = 3 + 4i$. Training: „Addieren und Subtrahieren“ (in [15.3 Addieren, Subtrahieren und Multiplizieren](/lernen/mathe3/komplexe-zahlen/addieren-subtrahieren-und-multiplizieren)).
6. **$i^2$ wie $+1$ behandelt** oder **gemischte Produkte vergessen** beim Multiplizieren. Training: „Zwei Zahlen multiplizieren“ und „Komplexe Zahlen quadrieren“ (in [15.3 Addieren, Subtrahieren und Multiplizieren](/lernen/mathe3/komplexe-zahlen/addieren-subtrahieren-und-multiplizieren)).
7. **Teil für Teil dividiert** oder **nur den Nenner erweitert.** Training: „Ein erster Quotient“ und „Fehler finden beim Dividieren“ (in [15.4 Konjugierte, Betrag und Division](/lernen/mathe3/komplexe-zahlen/konjugierte-betrag-und-division)).
8. **Quadrant beim Arcustangens vergessen:** $\arg(-3 + 3i)$ ist $135°$, nicht $-45°$. Training: „In Polarform umrechnen“ und „Argumente in allen vier Richtungen“ (in [15.5 Polarform und Exponentialform](/lernen/mathe3/komplexe-zahlen/polarform-und-exponentialform)).
9. **Kosinus und Sinus vertauscht:** Der Realteil ist $r\cos\varphi$. Training: „Polarform in algebraische Form“ (in [15.5 Polarform und Exponentialform](/lernen/mathe3/komplexe-zahlen/polarform-und-exponentialform)).
10. **Beträge addiert statt multipliziert** oder **Winkel multipliziert statt addiert.** Training: „Multiplikation geometrisch“ (in [15.6 Multiplizieren und Potenzieren in Polarform](/lernen/mathe3/komplexe-zahlen/multiplizieren-und-potenzieren-in-polarform-drehstreckung-und-de-moivre)).
11. **Potenz auf eine Summe verteilt:** $(1 + i)^8 \ne 1^8 + i^8$. Training: „Hohe Potenz“ (in [15.6 Multiplizieren und Potenzieren in Polarform](/lernen/mathe3/komplexe-zahlen/multiplizieren-und-potenzieren-in-polarform-drehstreckung-und-de-moivre)).
12. **Nur eine Wurzel angegeben** oder **$360°$ nicht durch $n$ geteilt.** Training: „Alle dritten Wurzeln von 8i“ und „Anzahl, Radius und Abstand der Lösungen“ (in [15.7 n-te Wurzeln und regelmäßige Vielecke](/lernen/mathe3/komplexe-zahlen/n-te-wurzeln-und-regelmaessige-vielecke)).
13. **Das $i$ in der Lösungsformel verloren:** $\sqrt{-4} = 2i$, nicht $2$. Training: „Quadratische Gleichung mit negativer Diskriminante“ (in [15.8 Polynomgleichungen und der Fundamentalsatz der Algebra](/lernen/mathe3/komplexe-zahlen/polynomgleichungen-und-der-fundamentalsatz-der-algebra)).
14. **Vorzeichen des Mittelpunkts:** $|z - 3 + 4i| = 5$ ist der Kreis um $3 - 4i$. Training: „Mittelpunkt und Radius eines Kreises“ (in [15.9 Mengen in der Zahlenebene zeichnen](/lernen/mathe3/komplexe-zahlen/mengen-in-der-zahlenebene-zeichnen)).

### Lernziel-Selbstcheck

Bewerte dich bei jedem Lernziel ehrlich mit $1$ (unsicher), $2$ (geht mit Nachschauen) oder $3$ (sicher, auch unter Zeitdruck).
Bei jeder $1$ oder $2$ gehst du zurück zur passenden Lektion und rechnest die Aufgaben auf Niveau 2 und 3 noch einmal.

1. Mit $i$ rechnen, Potenzen von $i$ und Wurzeln aus negativen Zahlen. Lektion: [15.1 Die imaginäre Einheit](/lernen/mathe3/komplexe-zahlen/die-imaginaere-einheit-warum-es-komplexe-zahlen-gibt).
2. Algebraische Form, Zahlenebene, Gleichheit. Lektion: [15.2 Algebraische Form und Gaußsche Zahlenebene](/lernen/mathe3/komplexe-zahlen/algebraische-form-und-gausssche-zahlenebene).
3. Addieren, Subtrahieren, Multiplizieren. Lektion: [15.3 Addieren, Subtrahieren und Multiplizieren](/lernen/mathe3/komplexe-zahlen/addieren-subtrahieren-und-multiplizieren).
4. Konjugierte, Betrag, Division. Lektion: [15.4 Konjugierte, Betrag und Division](/lernen/mathe3/komplexe-zahlen/konjugierte-betrag-und-division).
5. Umrechnen zwischen algebraischer Form, Polarform und Exponentialform. Lektion: [15.5 Polarform und Exponentialform](/lernen/mathe3/komplexe-zahlen/polarform-und-exponentialform).
6. Drehstreckung und Satz von de Moivre. Lektion: [15.6 Multiplizieren und Potenzieren in Polarform](/lernen/mathe3/komplexe-zahlen/multiplizieren-und-potenzieren-in-polarform-drehstreckung-und-de-moivre).
7. Alle Lösungen von $z^n = w$. Lektion: [15.7 n-te Wurzeln und regelmäßige Vielecke](/lernen/mathe3/komplexe-zahlen/n-te-wurzeln-und-regelmaessige-vielecke).
8. Polynomgleichungen und Fundamentalsatz. Lektion: [15.8 Polynomgleichungen und der Fundamentalsatz der Algebra](/lernen/mathe3/komplexe-zahlen/polynomgleichungen-und-der-fundamentalsatz-der-algebra).
9. Mengen in der Zahlenebene. Lektion: [15.9 Mengen in der Zahlenebene zeichnen](/lernen/mathe3/komplexe-zahlen/mengen-in-der-zahlenebene-zeichnen).

## Mündliche Prüfung

```karten
- id: kz-karte-komplexe-zahl
  frage: Was ist eine komplexe Zahl, und was sind Real- und Imaginärteil?
  antwort: |
    Eine komplexe Zahl ist ein Ausdruck $z = a + bi$ mit reellen Zahlen $a$ und $b$ und der imaginären Einheit $i$, für die $i^2 = -1$ gilt.
    $a = \operatorname{Re}(z)$ ist der Realteil, $b = \operatorname{Im}(z)$ der Imaginärteil. Beide sind reelle Zahlen, der Imaginärteil ist also $b$ und nicht $bi$.
    Jede reelle Zahl ist eine komplexe Zahl mit Imaginärteil $0$.
  kernpunkte:
    - '$z = a + bi$ mit reellen $a, b$ und $i^2 = -1$'
    - 'Realteil $a$, Imaginärteil $b$ (ohne $i$)'
    - '$\R$ ist Teilmenge von $\C$'
- id: kz-karte-wurzel-minus-eins
  frage: Warum soll man nicht einfach $i = \sqrt{-1}$ schreiben und mit den Wurzelgesetzen rechnen?
  antwort: |
    Weil die Regel $\sqrt a\cdot\sqrt b = \sqrt{ab}$ nur für $a, b \ge 0$ sicher gilt. Wendet man sie auf zwei negative Zahlen an, entstehen Widersprüche:
    $-1 = i\cdot i = \sqrt{-1}\cdot\sqrt{-1} = \sqrt{(-1)(-1)} = \sqrt1 = 1$. Sicher ist nur die Definition $i^2 = -1$.
    Wurzeln aus negativen Zahlen schreibt man zuerst als $i\sqrt a$ und rechnet dann weiter.
  kernpunkte:
    - '$\sqrt a\sqrt b = \sqrt{ab}$ ist für zwei negative Zahlen falsch'
    - 'Gegenbeispiel führt zu $-1 = 1$'
    - 'Grundlage ist nur $i^2 = -1$'
- id: kz-karte-ordnung
  frage: Warum kann man komplexe Zahlen nicht der Größe nach ordnen?
  antwort: |
    Bei einer Ordnung mit den gewohnten Regeln wäre jedes Quadrat einer Zahl ungleich null positiv. Dann wäre $1 = 1^2 > 0$ und auch
    $-1 = i^2 > 0$. Addiert man beide, folgt $0 > 0$, ein Widerspruch. Deshalb ist $i$ weder positiv noch negativ, und „$z_1 < z_2$“ hat keinen Sinn.
    Vergleichen kann man nur Beträge, also Abstände vom Nullpunkt.
  kernpunkte:
    - 'Quadrate wären positiv, also $i^2 = -1 > 0$'
    - 'zusammen mit $1 > 0$ folgt $0 > 0$'
    - 'nur Beträge sind vergleichbar'
- id: kz-karte-zahlenebene
  frage: Wie stellt man komplexe Zahlen geometrisch dar, und was bedeutet die Addition in diesem Bild?
  antwort: |
    In der Gaußschen Zahlenebene wird $a + bi$ zum Punkt $(a \mid b)$ oder zum Pfeil vom Nullpunkt dorthin: waagrecht der Realteil, senkrecht der Imaginärteil.
    Die Addition ist dann genau die Vektoraddition aus der Vektorrechnung: Man hängt die Pfeile aneinander, es entsteht ein Parallelogramm.
    Die Subtraktion $z_1 - z_2$ ist der Pfeil von $z_2$ nach $z_1$.
  kernpunkte:
    - 'Punkt $(a \mid b)$ oder Pfeil vom Nullpunkt'
    - 'Addition ist Vektoraddition (Parallelogramm)'
    - 'Verbindung zu den Vektoren in der Ebene'
- id: kz-karte-konjugierte
  frage: Was ist die konjugiert komplexe Zahl, und wofür braucht man sie?
  antwort: |
    Zu $z = a + bi$ ist $\bar z = a - bi$, das Spiegelbild an der reellen Achse. Es gilt $z\bar z = a^2 + b^2 = |z|^2$, also eine reelle, nicht negative Zahl.
    Deshalb erweitert man beim Dividieren mit der Konjugierten des Nenners: Der Nenner wird reell. Außerdem treten nicht-reelle Nullstellen reeller Polynome in Paaren $z, \bar z$ auf.
  kernpunkte:
    - '$\bar z = a - bi$, Spiegelung an der reellen Achse'
    - '$z\bar z = |z|^2$ ist reell'
    - 'Anwendung: Division und konjugierte Nullstellen'
- id: kz-karte-division
  frage: Wie bringt man einen Quotienten $\frac{z_1}{z_2}$ in die Form $a + bi$, und warum funktioniert das?
  antwort: |
    Man erweitert Zähler und Nenner mit $\bar z_2$. Im Nenner entsteht $z_2\bar z_2 = |z_2|^2$, eine positive reelle Zahl. Dann teilt man Real- und Imaginärteil des Zählers durch sie.
    Es funktioniert, weil sich beim Produkt mit der Konjugierten die gemischten Glieder aufheben und $i^2 = -1$ das Vorzeichen positiv macht.
    Teil für Teil zu dividieren ist falsch: $\frac{6 + 4i}{2 + 2i}$ ist nicht $3 + 2i$, sondern $2{,}5 - 0{,}5i$.
  kernpunkte:
    - 'mit der Konjugierten des Nenners erweitern'
    - 'Nenner wird $|z_2|^2$, also reell'
    - 'nicht Teil für Teil dividieren'
- id: kz-karte-polarform
  frage: Erkläre die Polarform und wie man sie aus $a + bi$ berechnet.
  antwort: |
    $z = r(\cos\varphi + i\sin\varphi)$ mit dem Betrag $r = \sqrt{a^2 + b^2}$ und dem Argument $\varphi$, dem Winkel zur positiven reellen Achse gegen den Uhrzeigersinn.
    Für den Winkel gilt $\tan\varphi = \frac ba$. Der Arcustangens liefert aber nur Winkel zwischen $-90°$ und $90°$. Liegt $z$ links ($a < 0$), muss man $180°$ addieren.
    Deshalb beginnt man immer mit einer Skizze. Zurück geht es mit $a = r\cos\varphi$ und $b = r\sin\varphi$.
  kernpunkte:
    - '$r = \sqrt{a^2 + b^2}$, $\varphi$ = Winkel zur positiven reellen Achse'
    - 'Quadrant beachten: bei $a < 0$ plus $180°$'
    - 'zurück: $a = r\cos\varphi$, $b = r\sin\varphi$'
- id: kz-karte-euler
  frage: Was besagt die Eulersche Formel, und was ist die Exponentialform?
  antwort: |
    Die Eulersche Formel lautet $e^{i\varphi} = \cos\varphi + i\sin\varphi$ mit $\varphi$ im Bogenmaß. Damit schreibt man jede Zahl kurz als $z = re^{i\varphi}$.
    Die Schreibweise passt zu den Rechenregeln, denn beim Multiplizieren addieren sich die Winkel, genau wie die Hochzahlen bei $e^{i\alpha}e^{i\beta} = e^{i(\alpha + \beta)}$.
    Für $\varphi = \pi$ ergibt sich $e^{i\pi} = -1$.
  kernpunkte:
    - '$e^{i\varphi} = \cos\varphi + i\sin\varphi$, Winkel im Bogenmaß'
    - '$z = re^{i\varphi}$'
    - 'passt zu „Winkel addieren“ beim Multiplizieren'
- id: kz-karte-drehstreckung
  frage: Was passiert geometrisch bei der Multiplikation zweier komplexer Zahlen, und wie beweist man das?
  antwort: |
    Eine Drehstreckung: Die Beträge werden multipliziert, die Winkel addiert. Multiplizieren mit $i$ ist zum Beispiel eine Drehung um $90°$ ohne Streckung.
    Beweis: Man multipliziert $r_1(\cos\varphi_1 + i\sin\varphi_1)$ und $r_2(\cos\varphi_2 + i\sin\varphi_2)$ aus. Im Realteil steht dann $\cos\varphi_1\cos\varphi_2 - \sin\varphi_1\sin\varphi_2$,
    im Imaginärteil $\sin\varphi_1\cos\varphi_2 + \cos\varphi_1\sin\varphi_2$. Nach den Additionstheoremen aus der Trigonometrie sind das $\cos(\varphi_1 + \varphi_2)$ und $\sin(\varphi_1 + \varphi_2)$.
  kernpunkte:
    - 'Beträge multiplizieren, Winkel addieren'
    - 'Beweis über die Additionstheoreme'
    - 'Multiplikation mit $i$ dreht um $90°$'
- id: kz-karte-moivre
  frage: Wie lautet der Satz von de Moivre, und wofür braucht man ihn?
  antwort: |
    $\big(r(\cos\varphi + i\sin\varphi)\big)^n = r^n(\cos n\varphi + i\sin n\varphi)$ für natürliche $n$. Er folgt durch wiederholtes Anwenden der Multiplikationsregel.
    Man braucht ihn für hohe Potenzen, etwa $(1 + i)^8 = (\sqrt2)^8(\cos 360° + i\sin 360°) = 16$, und als Werkzeug beim Wurzelziehen.
  kernpunkte:
    - 'Betrag hoch $n$, Winkel mal $n$'
    - 'folgt aus der Multiplikationsregel'
    - 'Anwendung: hohe Potenzen und Wurzeln'
- id: kz-karte-wurzeln
  frage: Wie viele Lösungen hat $z^n = w$ für $w \ne 0$, und wo liegen sie?
  antwort: |
    Genau $n$ Lösungen: $z_k = \sqrt[n]{r}\,\big(\cos\frac{\varphi + k\cdot 360°}{n} + i\sin\frac{\varphi + k\cdot 360°}{n}\big)$ für $k = 0, \dots, n - 1$.
    Sie liegen auf dem Kreis mit Radius $\sqrt[n]{r}$ und haben jeweils den Winkelabstand $\frac{360°}{n}$. Deshalb bilden sie ein regelmäßiges $n$-Eck.
    Beispiel: $z^5 = 1$ hat fünf Lösungen, die Ecken eines regelmäßigen Fünfecks mit einer Ecke bei $1$.
  kernpunkte:
    - 'genau $n$ Lösungen'
    - 'Radius $\sqrt[n]{r}$, Winkelabstand $\frac{360°}{n}$'
    - 'regelmäßiges $n$-Eck'
- id: kz-karte-wurzeln-warum
  frage: Warum genügt es beim Wurzelziehen nicht, den Winkel einfach durch $n$ zu teilen?
  antwort: |
    Weil ein Winkel nur bis auf volle Umdrehungen festgelegt ist: $\varphi$ und $\varphi + 360°$ beschreiben dieselbe Zahl $w$. Für die Lösung $z$ muss $n\psi$ nur
    bis auf Vielfache von $360°$ mit $\varphi$ übereinstimmen. Teilt man $\varphi + k\cdot 360°$ durch $n$, entstehen für $k = 0, \dots, n - 1$ verschiedene Winkel.
    Erst ab $k = n$ wiederholen sie sich. Nur $\frac{\varphi}{n}$ zu nehmen, liefert eine einzige der $n$ Lösungen.
  kernpunkte:
    - 'Winkel nur bis auf $360°$ bestimmt'
    - '$n\psi = \varphi + k\cdot 360°$'
    - 'ab $k = n$ Wiederholung'
- id: kz-karte-quadratisch
  frage: Wie löst man eine quadratische Gleichung mit negativer Diskriminante, und welche Eigenschaft haben die Lösungen?
  antwort: |
    Man verwendet die übliche Lösungsformel aus der Gleichungslehre und setzt $\sqrt D = i\sqrt{|D|}$. Für $z^2 + pz + q = 0$ erhält man $z = -\frac p2 \pm i\sqrt{|D|}$.
    Sind $p$ und $q$ reell, sind die beiden Lösungen zueinander konjugiert. Beispiel: $z^2 + 2z + 5 = 0$ hat die Lösungen $-1 \pm 2i$.
  kernpunkte:
    - 'Lösungsformel bleibt gültig'
    - '$\sqrt D = i\sqrt{|D|}$ bei $D < 0$'
    - 'Lösungen sind konjugiert'
- id: kz-karte-fundamentalsatz
  frage: Was sagt der Fundamentalsatz der Algebra, und warum muss man nach $\C$ keine weiteren Zahlen erfinden?
  antwort: |
    Jedes Polynom vom Grad $n \ge 1$ mit komplexen Koeffizienten hat in $\C$ eine Nullstelle und zerfällt deshalb vollständig in $n$ Linearfaktoren.
    Es hat also genau $n$ Nullstellen, wenn man mehrfache mehrfach zählt. Man sagt, $\C$ ist algebraisch abgeschlossen: Jede Polynomgleichung vom Grad $1$ oder höher ist in $\C$ lösbar.
    In $\R$ gilt das nicht, zum Beispiel hat $x^2 + 1$ keine reelle Nullstelle.
  kernpunkte:
    - 'Grad $n$ bedeutet $n$ Nullstellen mit Vielfachheit'
    - 'Zerlegung in Linearfaktoren'
    - '$\C$ algebraisch abgeschlossen, $\R$ nicht'
- id: kz-karte-konjugierte-nullstellen
  frage: Warum treten nicht-reelle Nullstellen eines Polynoms mit reellen Koeffizienten paarweise auf? Gilt das auch ohne reelle Koeffizienten?
  antwort: |
    Konjugieren verträgt sich mit Addieren und Multiplizieren, und reelle Koeffizienten bleiben beim Konjugieren gleich. Aus $p(z_0) = 0$ folgt deshalb
    $p(\bar z_0) = \overline{p(z_0)} = 0$. Ohne reelle Koeffizienten gilt das nicht. Gegenbeispiel: $p(z) = z - i$ hat nur die Nullstelle $i$, aber nicht $-i$.
    Folgerung: Ein reelles Polynom ungeraden Grades hat mindestens eine reelle Nullstelle.
  kernpunkte:
    - '$p(\bar z_0) = \overline{p(z_0)}$ bei reellen Koeffizienten'
    - 'Gegenbeispiel $z - i$'
    - 'ungerader Grad: mindestens eine reelle Nullstelle'
- id: kz-karte-mengen
  frage: Welche Figuren beschreiben $|z - z_0| \le r$, $\operatorname{Re}(z) > c$ und $\arg(z) = \varphi$, und wie hängt das mit der Kreisgleichung zusammen?
  antwort: |
    $|z - z_0|$ ist der Abstand von $z$ zu $z_0$. Also ist $|z - z_0| \le r$ die Kreisscheibe um $z_0$ mit Radius $r$, samt Rand.
    Mit $z = x + yi$ und $z_0 = a + bi$ ist das die Ungleichung $(x - a)^2 + (y - b)^2 \le r^2$ aus der analytischen Geometrie.
    $\operatorname{Re}(z) > c$ ist die Halbebene rechts der senkrechten Geraden $x = c$, ohne Rand. $\arg(z) = \varphi$ ist ein Strahl vom Nullpunkt in Richtung $\varphi$, ohne den Nullpunkt.
  kernpunkte:
    - 'Betrag der Differenz ist ein Abstand'
    - 'Kreisscheibe, Halbebene, Strahl'
    - 'Verbindung zur Kreisgleichung'
```
