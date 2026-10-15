---
nummer: 2
titel: Gleichungen und Ungleichungen
kurz: Lineare, quadratische, biquadratische, Bruch-, Wurzel-, Betrags-, Exponential- und Logarithmusgleichungen, Ungleichungen, Gleichungen mit Parameter, nichtlineare Gleichungssysteme, Formeln umstellen und Textaufgaben modellieren.
teil: A
stunden: 18
pruefungsgewicht: 3
voraussetzungen: [zahlen]
lernziele:
  - erklären, welche Umformungen die Lösungsmenge einer Gleichung nicht verändern, den Nullproduktsatz anwenden und verlorene Lösungen sowie Scheinlösungen erkennen und begründen
  - lineare Gleichungen mit Klammern und Brüchen lösen und lineare Gleichungen mit Parameter durch Fallunterscheidung vollständig lösen
  - quadratische Gleichungen ohne Formel, durch quadratische Ergänzung und mit den Lösungsformeln lösen und die Anzahl der reellen Lösungen über die Diskriminante bestimmen
  - den Satz von Vieta zur Kontrolle, zum Zerlegen in Linearfaktoren und zum Aufstellen von Gleichungen anwenden und quadratische Gleichungen mit Parameter untersuchen
  - Gleichungen höheren Grades durch Herausheben, Substitution und Polynomdivision lösen und reine Potenzgleichungen lösen
  - Bruch-, Wurzel- und Betragsgleichungen mit Definitionsmenge, Probe beziehungsweise Fallunterscheidung vollständig lösen
  - Exponential- und Logarithmusgleichungen durch Basisvergleich, Logarithmieren oder Substitution lösen und Wachstumsfragen damit beantworten
  - lineare, quadratische, Bruch-, Betrags- und Wurzelungleichungen lösen und die Lösungsmenge als Intervall angeben
  - Formeln nach jeder Größe umstellen und aus Textangaben eine Gleichung oder Formel aufstellen, lösen und im Sachzusammenhang deuten
  - nichtlineare Gleichungssysteme mit zwei Unbekannten durch Einsetzen lösen und die Anzahl der Schnittpunkte von Gerade und Parabel deuten
---

Gleichungen lösen ist das Handwerk, das du in fast **jeder** Prüfungsaufgabe brauchst. Eine Kurvendiskussion
beginnt mit „Nullstellen bestimmen“, also mit einer Gleichung. Eine Wachstumsaufgabe fragt „Wann ist der
Bestand doppelt so groß?“, also wieder nach einer Gleichung. Und eine Integralaufgabe endet oft mit „Bestimme die
Grenze $c$“, auch das ist eine Gleichung. Wer Gleichungen sicher löst, verliert in der Prüfung keine Punkte an
Stellen, an denen die eigentliche Idee längst stimmt.

**Was kommt in der Prüfung?** Die drei Musterprüfungen der TU Wien zeigen typische Muster:

- Aus einer Textangabe soll eine **Formel** mit Buchstaben aufgestellt werden, zum Beispiel für eine Gesamtzahl
  aus mehreren Prozentanteilen.
- Ein exponentielles Wachstum führt auf eine **Exponentialgleichung**: Wann erreicht ein Bestand einen bestimmten
  Wert, wann hat er sich verdoppelt?
- Eine Kurvendiskussion beginnt mit einer **biquadratischen Gleichung**, also einer Gleichung mit $x^4$ und $x^2$.
  Die Angabe gibt dazu den Tipp „Setzen Sie $u = x^2$“.
- Am Ende einer Integralaufgabe steht eine **Potenzgleichung** wie $c^3 = \ldots$.

In der mündlichen Prüfung fragt man gern nach dem Warum. Typische Fragen sind: „Warum muss man bei
Wurzelgleichungen eine Probe machen?“, „Warum darf man nicht durch $x$ dividieren?“ und „Was sagt die
Diskriminante?“. Auf jede dieser Fragen bekommst du in diesem Kapitel eine Antwort in ganzen Sätzen.

**Der rote Faden des Kapitels** ist eine einzige Frage: **Lässt sich der Schritt, den ich gerade mache, wieder
rückgängig machen?** Wenn ja, ändert er die Lösungen nicht. Wenn nein, etwa beim Quadrieren oder beim
Multiplizieren mit einem Term, der null sein kann, musst du am Ende kontrollieren. Wer diese Frage verstanden hat,
macht keinen der klassischen Fehler mehr.

**Wie dieses Kapitel aufgebaut ist:** Zuerst klären wir in
[2.1 Gleichungen und Äquivalenzumformungen](/lernen/mathe3/gleichungen/gleichungen-und-aequivalenzumformungen),
was eine Gleichung ist und welche Umformungen erlaubt sind. Dann folgen die Gleichungstypen der Reihe nach: linear,
quadratisch, höheren Grades, mit Brüchen, mit Wurzeln, mit Beträgen, mit Exponenten und Logarithmen. Danach kommen
Ungleichungen, das Umstellen von Formeln, Textaufgaben und Systeme aus einer Geraden und einer Parabel. Lineare
Gleichungs**systeme** mit mehreren Unbekannten behandelt [Kapitel 3](/lernen/mathe3/lgs-matrizen). Quadratische
Gleichungen ohne reelle Lösung werden in [Kapitel 15](/lernen/mathe3/komplexe-zahlen) mit komplexen Zahlen lösbar.

:::vorwissen
Du brauchst aus [Kapitel 1 Zahlen](/lernen/mathe3/zahlen):

- **Bruchrechnen:** Brüche auf einen gemeinsamen Nenner bringen, addieren, kürzen
  ([Kapitel 1, Abschnitt 1.5 Bruchrechnen](/lernen/mathe3/zahlen/bruchrechnen)).
- **Klammern auflösen** mit Vorzeichen und die **binomischen Formeln**, zum Beispiel $(a - b)^2 = a^2 - 2ab + b^2$
  ([Kapitel 1, Abschnitt 1.12 Terme umformen](/lernen/mathe3/zahlen/terme-umformen-binomische-formeln-und-faktorisieren)).
- **Potenzen und Wurzeln** mit ihren Rechenregeln, etwa $a^m\cdot a^n = a^{m + n}$
  ([Kapitel 1, Abschnitt 1.9 Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln)).
- **Logarithmen:** $\log_a b$ ist die Hochzahl, mit der man $a$ potenzieren muss, um $b$ zu erhalten
  ([Kapitel 1, Abschnitt 1.11 Logarithmen](/lernen/mathe3/zahlen/logarithmen)).
- **Betrag und Intervalle:** $|x|$ ist der Abstand von $x$ zur Null, und $[2; 5[$ ist ein Intervall
  ([Kapitel 1, Abschnitt 1.15 Betrag und Intervalle](/lernen/mathe3/zahlen/betrag-und-intervalle)).
- **Prozentrechnung:** „um $p\,\%$ mehr“ heißt „mal $1 + \tfrac{p}{100}$“
  ([Kapitel 1, Abschnitt 1.6 Prozentrechnung](/lernen/mathe3/zahlen/prozentrechnung)).

Die folgende Eingangsdiagnose prüft genau diese Dinge. Wenn du bei einer Frage danebenliegst, lies den genannten
Abschnitt in Kapitel 1 noch einmal, bevor du weitermachst.
:::

:::anwendung
Gleichungen sind das Werkzeug, mit dem man aus einem Modell eine Antwort herausholt. In der Physik stellst du
Formeln um, etwa $s = v\cdot t$ nach der Zeit $t$. In der Informatik bestimmt man mit einer Ungleichung, ab welcher
Eingabegröße ein Algorithmus schneller ist als ein anderer. In der Wirtschaft beantwortet eine Gleichung die Frage,
ab welcher Stückzahl ein Produkt Gewinn bringt.
:::

### Eingangsdiagnose

```aufgabe
id: gl-diag-bruch
titel: Zwei Brüche subtrahieren
niveau: 1
art: check
angabe: |
  Berechne $\dfrac23 - \dfrac14$ und gib das Ergebnis als gekürzten Bruch ein.
  Herkunft: [Kapitel 1, Abschnitt 1.5 Bruchrechnen](/lernen/mathe3/zahlen/bruchrechnen).
teile:
  - typ: zahl
    label: '$\tfrac23 - \tfrac14 =$'
    loesung: "2/3 - 1/4"
    anzeige: '\tfrac{5}{12}'
    fehler:
      - wert: "1/-1"
        meldung: |
          Du hast Zähler minus Zähler und Nenner minus Nenner gerechnet. Brüche subtrahiert man so nicht.
          Zuerst müssen beide Brüche denselben Nenner haben.
      - wert: "1/12"
        meldung: |
          Der Nenner $12$ stimmt. Beim Erweitern musst du aber auch die Zähler mit demselben Faktor multiplizieren:
          aus $\tfrac23$ wird $\tfrac{8}{12}$, aus $\tfrac14$ wird $\tfrac{3}{12}$.
hinweise:
  - 'Der kleinste gemeinsame Nenner von $3$ und $4$ ist $12$.'
loesung: |
  Wir bringen beide Brüche auf den gemeinsamen Nenner $12$. Dazu erweitern wir $\tfrac23$ mit $4$ und $\tfrac14$
  mit $3$: $\tfrac23 = \tfrac{8}{12}$ und $\tfrac14 = \tfrac{3}{12}$.
  ---
  Jetzt subtrahieren wir die Zähler und behalten den Nenner: $\tfrac{8}{12} - \tfrac{3}{12} = \tfrac{5}{12}$.
  Der Bruch lässt sich nicht weiter kürzen, weil $5$ und $12$ keinen gemeinsamen Teiler haben.
```

```aufgabe
id: gl-diag-klammer
titel: Eine Klammer mit Minus auflösen
niveau: 1
art: check
angabe: |
  Löse die Klammer auf und fasse zusammen: $5 - 2(x - 3)$.
  Herkunft: [Kapitel 1, Abschnitt 1.12 Terme umformen](/lernen/mathe3/zahlen/terme-umformen-binomische-formeln-und-faktorisieren).
teile:
  - typ: term
    label: '$5 - 2(x - 3) =$'
    variable: x
    loesung: "11 - 2x"
    fehler:
      - wert: "-1 - 2x"
        meldung: |
          Das Minus vor der $2$ gilt für **jeden** Summanden in der Klammer. Also ist $-2\cdot(-3) = +6$,
          nicht $-6$.
      - wert: "3x - 9"
        meldung: |
          Du hast zuerst $5 - 2 = 3$ gerechnet. Punktrechnung geht aber vor Strichrechnung:
          Die $2$ gehört zur Klammer, also zuerst $2(x - 3)$ ausmultiplizieren.
hinweise:
  - 'Multipliziere zuerst $-2$ mit jedem Summanden der Klammer: $-2\cdot x$ und $-2\cdot(-3)$.'
loesung: |
  Punkt vor Strich: Zuerst wird die Klammer mit $-2$ multipliziert. Dabei wird jeder Summand erfasst:
  $-2\cdot x = -2x$ und $-2\cdot(-3) = +6$.
  ---
  Also $5 - 2(x - 3) = 5 - 2x + 6 = 11 - 2x$. Probe mit $x = 0$: links $5 - 2\cdot(-3) = 11$, rechts $11$.
```

```aufgabe
id: gl-diag-binom
titel: Eine binomische Formel erkennen
niveau: 1
art: check
angabe: |
  Welcher Term ist gleich $x^2 - 10x + 25$?
  Herkunft: [Kapitel 1, Abschnitt 1.12 Terme umformen](/lernen/mathe3/zahlen/terme-umformen-binomische-formeln-und-faktorisieren).
teile:
  - typ: auswahl
    optionen:
      - '$(x - 5)^2$'
      - '$(x + 5)^2$'
      - '$(x - 5)(x + 5)$'
      - '$x(x - 10) + 5$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Bei $(x + 5)^2$ wäre das mittlere Glied $+10x$. Hier steht aber $-10x$.
      - wert: 2
        meldung: |
          $(x - 5)(x + 5)$ ist die dritte binomische Formel und ergibt $x^2 - 25$. Ein Glied mit $x$ fehlt dort.
      - wert: 3
        meldung: |
          Multipliziere aus: $x(x - 10) + 5 = x^2 - 10x + 5$. Das letzte Glied ist $5$, nicht $25$.
hinweise:
  - 'Vergleiche mit $(a - b)^2 = a^2 - 2ab + b^2$. Was sind hier $a$ und $b$?'
loesung: |
  Der Term hat die Form $a^2 - 2ab + b^2$ mit $a = x$ und $b = 5$, denn $b^2 = 25$ und $2ab = 2\cdot x\cdot 5 = 10x$.
  ---
  Nach der zweiten binomischen Formel ist er gleich $(x - 5)^2$. Probe mit $x = 0$: $25 = (-5)^2$.
```

```aufgabe
id: gl-diag-potenz
titel: Potenzregeln anwenden
niveau: 1
art: check
angabe: |
  Berechne $\left(2^3\right)^2\cdot 2^{-4}$ ohne Taschenrechner.
  Herkunft: [Kapitel 1, Abschnitt 1.9 Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln).
teile:
  - typ: zahl
    label: 'Ergebnis'
    loesung: "(2^3)^2 * 2^(-4)"
    anzeige: '4'
    fehler:
      - wert: "2"
        meldung: |
          Du hast bei $\left(2^3\right)^2$ die Hochzahlen addiert ($3 + 2 = 5$). Beim Potenzieren einer Potenz werden
          die Hochzahlen **multipliziert**: $\left(2^3\right)^2 = 2^3\cdot 2^3 = 2^6$.
      - wert: "-1024"
        meldung: |
          Du hast $2^{-4}$ als $-16$ gelesen. Eine negative Hochzahl macht das Ergebnis aber nicht negativ.
          $2^{-4}$ bedeutet $\tfrac{1}{2^4} = \tfrac{1}{16}$.
hinweise:
  - '$\left(a^m\right)^n = a^{m\cdot n}$ und $a^m\cdot a^n = a^{m + n}$.'
loesung: |
  Potenz einer Potenz: Die Hochzahlen werden multipliziert, also $\left(2^3\right)^2 = 2^{6}$.
  ---
  Gleiche Basis beim Multiplizieren: Die Hochzahlen werden addiert, also $2^6\cdot 2^{-4} = 2^{6 - 4} = 2^2 = 4$.
```

```aufgabe
id: gl-diag-log
titel: Einen Logarithmus bestimmen
niveau: 1
art: check
angabe: |
  Bestimme $\log_3 81$ ohne Taschenrechner.
  Herkunft: [Kapitel 1, Abschnitt 1.11 Logarithmen](/lernen/mathe3/zahlen/logarithmen).
teile:
  - typ: zahl
    label: '$\log_3 81 =$'
    loesung: "log(81, 3)"
    anzeige: '4'
    fehler:
      - wert: "27"
        meldung: |
          Der Logarithmus ist keine Division. $\log_3 81$ fragt: Mit welcher Hochzahl muss man $3$ potenzieren,
          damit $81$ herauskommt?
      - wert: "9"
        meldung: |
          $9$ ist $\sqrt{81}$. Gesucht ist aber die Hochzahl $k$ mit $3^k = 81$.
hinweise:
  - 'Zähle, wie oft du $3$ mit sich selbst multiplizieren musst: $3, 9, 27, \ldots$'
loesung: |
  $\log_3 81$ ist die Zahl $k$ mit $3^k = 81$. Wir rechnen die Potenzen von $3$ durch: $3^1 = 3$, $3^2 = 9$, $3^3 = 27$, $3^4 = 81$.
  ---
  Also ist $\log_3 81 = 4$.
```

```aufgabe
id: gl-diag-betrag
titel: Einen Betrag ausrechnen
niveau: 1
art: check
angabe: |
  Berechne $|-7 + 3| - |-2|$.
  Herkunft: [Kapitel 1, Abschnitt 1.15 Betrag und Intervalle](/lernen/mathe3/zahlen/betrag-und-intervalle).
teile:
  - typ: zahl
    label: 'Ergebnis'
    loesung: "abs(-7 + 3) - abs(-2)"
    anzeige: '2'
    fehler:
      - wert: "8"
        meldung: |
          Du hast den Betrag summandenweise genommen: $|-7| + |3| = 10$. Zuerst wird **innen** gerechnet,
          also $-7 + 3 = -4$, dann der Betrag $|-4| = 4$.
      - wert: "-6"
        meldung: |
          Ein Betrag ist nie negativ. $|-4|$ ist der Abstand von $-4$ zur Null, also $4$.
hinweise:
  - 'Rechne zuerst innerhalb der Betragsstriche, dann nimm den Abstand zur Null.'
loesung: |
  Innen zuerst: $-7 + 3 = -4$. Der Betrag ist der Abstand zur Null, also $|-4| = 4$. Ebenso ist $|-2| = 2$.
  ---
  Also $|-7 + 3| - |-2| = 4 - 2 = 2$.
```

```aufgabe
id: gl-diag-prozent
titel: Eine Preiserhöhung
niveau: 1
art: check
angabe: |
  Ein Fahrrad kostet 640 Euro. Der Preis steigt um 15 %. Wie viel kostet es danach?
  Herkunft: [Kapitel 1, Abschnitt 1.6 Prozentrechnung](/lernen/mathe3/zahlen/prozentrechnung).
teile:
  - typ: zahl
    label: 'neuer Preis'
    einheit: "Euro"
    loesung: "640*1.15"
    fehler:
      - wert: "96"
        meldung: |
          $96$ Euro ist nur die **Erhöhung**. Der neue Preis ist alter Preis plus Erhöhung.
      - wert: "655"
        meldung: |
          Du hast $15$ Euro addiert. Gemeint sind aber $15\,\%$ **von** $640$ Euro.
hinweise:
  - '„Um $15\,\%$ mehr“ heißt „mal $1{,}15$“.'
loesung: |
  „Um $15\,\%$ mehr“ bedeutet: Zu den $100\,\%$ kommen $15\,\%$ dazu, also $115\,\% = 1{,}15$.
  ---
  Neuer Preis: $640\cdot 1{,}15 = 736$ Euro. Kontrolle: Die Erhöhung ist $736 - 640 = 96$ Euro, und $96$ ist $15\,\%$ von $640$.
```

## Gleichungen und Äquivalenzumformungen

```aufgabe
id: gl-aequiv-check-einsetzen
titel: Einen Term ausrechnen
niveau: 1
art: check
angabe: |
  Welchen Wert hat der Term $3x^2 - 2x$ für $x = -2$?
  Herkunft: [Kapitel 1, Abschnitt 1.12 Terme umformen](/lernen/mathe3/zahlen/terme-umformen-binomische-formeln-und-faktorisieren).
teile:
  - typ: zahl
    label: 'Wert'
    loesung: "3*(-2)^2 - 2*(-2)"
    anzeige: '16'
    fehler:
      - wert: "-8"
        meldung: |
          Du hast $3\cdot(-2)^2$ als $-12$ gerechnet. Das Quadrat einer negativen Zahl ist positiv:
          $(-2)^2 = (-2)\cdot(-2) = +4$.
      - wert: "8"
        meldung: |
          Prüfe das zweite Glied. Es ist $-2\cdot(-2) = +4$. Minus mal minus ergibt plus.
hinweise:
  - 'Setze $-2$ mit Klammern ein: $3\cdot(-2)^2 - 2\cdot(-2)$.'
loesung: |
  Wir setzen $-2$ mit Klammern ein, damit kein Vorzeichen verloren geht: $3\cdot(-2)^2 - 2\cdot(-2)$.
  ---
  Potenz zuerst: $(-2)^2 = 4$, also $3\cdot 4 = 12$. Dann $-2\cdot(-2) = +4$. Zusammen: $12 + 4 = 16$.
```

Bevor du einzelne Gleichungstypen lernst, klären wir drei Grundfragen. Was ist eine Gleichung überhaupt? Was
heißt „lösen“? Und welche Rechenschritte sind dabei erlaubt? Diese Lektion ist das Fundament für alle weiteren.
Lies sie in Ruhe. Fast jeder Fehler beim Gleichungslösen lässt sich auf eine dieser Fragen zurückführen.

### Was ist eine Gleichung, und was heißt lösen?

Schau dir $2x + 3 = 11$ an. Solange $x$ keinen Wert hat, ist das weder wahr noch falsch. Setzt du für $x$ eine
Zahl ein, entsteht eine Aussage, die wahr oder falsch ist:

- Für $x = 4$ steht da $2\cdot 4 + 3 = 11$, also $11 = 11$. Das ist **wahr**.
- Für $x = 1$ steht da $2\cdot 1 + 3 = 11$, also $5 = 11$. Das ist **falsch**.

Eine **Gleichung** ist also eine Art Frage: Für welche Zahlen stimmt das? Die Buchstaben darin heißen
**Variablen** oder **Unbekannte**. Eine Zahl, die beim Einsetzen eine wahre Aussage ergibt, heißt **Lösung**.
**Lösen** heißt: **alle** Lösungen finden und zeigen, dass es keine weiteren gibt.

Zwei Nichtbeispiele helfen beim Abgrenzen:

- $2x + 3$ ist **keine** Gleichung, sondern ein **Term**, also ein Rechenausdruck. Es fehlt das Gleichheitszeichen.
  Einen Term kann man vereinfachen, aber nicht lösen.
- $2 + 3 = 5$ ist **keine** Gleichung im Sinn dieses Kapitels. Sie enthält keine Variable und ist einfach wahr.

:::definition[Grundmenge, Definitionsmenge, Lösungsmenge]
- Die **Grundmenge** $G$ sagt, aus welchen Zahlen die Lösungen kommen dürfen. Meist ist $G = \R$, die Menge
  aller reellen Zahlen.
- Die **Definitionsmenge** $D$ enthält alle Zahlen aus $G$, für die jeder Term der Gleichung einen Sinn hat. Man
  schreibt $D \subseteq G$ und liest das „$D$ ist eine Teilmenge von $G$“.
- Die **Lösungsmenge** $L$ enthält alle Zahlen aus $D$, die die Gleichung erfüllen. Gibt es keine Lösung, schreibt
  man $L = \emptyset$ und liest das „leere Menge“.
:::

Drei Dinge machen einen Term „sinnlos“, und sie verkleinern die Definitionsmenge. Erstens eine Division durch
null. Zweitens eine Quadratwurzel aus einer negativen Zahl. Drittens ein Logarithmus einer Zahl, die null oder
negativ ist.

:::beispiel[Definitionsmenge und Grundmenge bestimmen]
**Definitionsmenge:** In $\dfrac{3}{x - 2} = 1$ steht $x$ im Nenner. Für $x = 2$ wäre der Nenner $0$, und durch
null kann man nicht dividieren. Also ist $D = \R\setminus\{2\}$. Das liest man „alle reellen Zahlen außer $2$“.

**Lösung:** Wir multiplizieren mit $x - 2$, weil dann der Bruch verschwindet: $3 = x - 2$, also $x = 5$. Die Zahl $5$
liegt in $D$. Probe: $\tfrac{3}{5 - 2} = 1$. Also ist $L = \{5\}$.

**Grundmenge:** Ein Verein kauft Tische mit je $6$ Plätzen und braucht $27$ Plätze. Die Gleichung $6x = 27$ hat
in $\R$ die Lösung $x = 4{,}5$. Tische zählt man aber in ganzen Stück. Mit $G = \N$, den natürlichen Zahlen, ist
$L = \emptyset$: Mit genau $27$ Plätzen geht es nicht. Im Alltag nimmt man dann $5$ Tische und hat $3$ Plätze übrig.
:::

### Erlaubte Rechenschritte: Äquivalenzumformungen

Gleichungen löst man, indem man sie Schritt für Schritt in einfachere Gleichungen umformt, bis links nur noch
$x$ steht. Damit das funktioniert, darf kein Schritt die Lösungsmenge verändern. Es dürfen also keine Lösungen
verloren gehen und keine falschen dazukommen.

Ein gutes Bild ist eine **Balkenwaage** im Gleichgewicht. Legst du auf beide Seiten dasselbe Gewicht dazu, bleibt
sie im Gleichgewicht. Nimmst du es wieder weg, ist alles wie vorher. Der Schritt ist **umkehrbar**.

```aufgabe
id: gl-aequiv-check-waage
titel: Was passiert mit der Lösung?
niveau: 1
art: check
angabe: |
  Die Gleichung $x + 4 = 10$ hat die Lösung $x = 6$. Auf beiden Seiten wird $4$ subtrahiert. Welche Lösung hat die
  neue Gleichung $x = 6$?
teile:
  - typ: auswahl
    optionen:
      - 'wieder $6$, die Lösung bleibt gleich'
      - '$2$, weil man $4$ abgezogen hat'
      - '$10$, weil rechts vorher $10$ stand'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Die $4$ wird auf **beiden** Seiten abgezogen. Wie bei einer Waage bleibt das Gleichgewicht erhalten, und $x$ ändert sich nicht.
      - wert: 2
        meldung: |
          Die rechte Seite ist nach dem Umformen $10 - 4 = 6$. Gesucht ist der Wert von $x$, der die neue Gleichung erfüllt.
hinweise:
  - 'Setze $x = 6$ in beide Gleichungen ein.'
loesung: |
  Setzen wir $x = 6$ in $x + 4 = 10$ ein, erhalten wir $10 = 10$. In der neuen Gleichung $x = 6$ steht $6 = 6$.
  ---
  Die Lösung bleibt $6$. Wer auf beiden Seiten dasselbe abzieht, verändert die Lösung nicht. Das ist die Idee der
  Äquivalenzumformung.
```

:::definition[Äquivalenzumformung]
Eine Umformung heißt **Äquivalenzumformung**, wenn die neue Gleichung **genau dieselbe** Lösungsmenge hat wie
die alte. Das Wort „äquivalent“ bedeutet „gleichwertig“. Äquivalenzumformungen sind:

1. auf beiden Seiten dieselbe Zahl oder denselben Term addieren oder subtrahieren;
2. beide Seiten mit derselben Zahl $c \neq 0$ multiplizieren oder durch sie dividieren;
3. eine Seite durch einen gleichwertigen Term ersetzen, also ausmultiplizieren, zusammenfassen oder kürzen.
:::

Jeder dieser Schritte lässt sich rückgängig machen. Addierst du $7$, kannst du $7$ wieder abziehen. Multiplizierst
du mit $3$, kannst du wieder durch $3$ dividieren. Genau deshalb ändern sie nichts an den Lösungen.

Ein Nichtbeispiel zeigt, warum $c \neq 0$ verlangt wird. Multiplizierst du die falsche Aussage $3 = 5$ auf beiden
Seiten mit $0$, erhältst du $0 = 0$. Das ist wahr. Aus einer falschen Aussage ist eine wahre geworden, und
zurück kommt man nicht mehr, weil man nicht durch $0$ dividieren kann.

Zwischen zwei gleichwertigen Gleichungen schreibt man das Zeichen $\iff$. Man liest es „ist gleichwertig mit“ oder
„genau dann, wenn“. Ist ein Schritt nicht umkehrbar, schreibt man stattdessen $\Rightarrow$ und liest es „daraus
folgt“. Dann können Lösungen dazugekommen sein, und am Ende ist eine Kontrolle nötig.

:::beispiel[Eine Gleichung Schritt für Schritt lösen]
Gesucht ist die Lösung von $5x - 7 = 2x + 8$.

1. Wir subtrahieren $2x$ auf beiden Seiten, damit $x$ nur noch links steht: $3x - 7 = 8$.
2. Wir addieren $7$ auf beiden Seiten, damit links keine Zahl mehr neben $3x$ steht: $3x = 15$.
3. Wir dividieren beide Seiten durch $3$. Das ist erlaubt, weil $3 \neq 0$ ist: $x = 5$.

Jeder Schritt war eine Äquivalenzumformung. Deshalb ist $L = \{5\}$, und es gibt sicher keine weitere Lösung.
**Probe:** links $5\cdot 5 - 7 = 18$, rechts $2\cdot 5 + 8 = 18$. Beide Seiten stimmen überein.
:::

### Was keine Äquivalenzumformung ist

Zwei Rechenschritte sehen harmlos aus, sind aber **nicht** umkehrbar. Sie sind die Quelle der meisten Fehler in
diesem Kapitel.

:::achtung[Durch einen Term mit x dividieren]
Eine typische Fehlrechnung:
$$x^2 = 5x \quad\big|\, :x \qquad\Longrightarrow\qquad x = 5.$$
Die Lösung $x = 0$ ist verschwunden. Setze sie ein: $0^2 = 5\cdot 0$, also $0 = 0$. Sie stimmt. Die Division durch
$x$ war nur für $x \neq 0$ erlaubt, und den Fall $x = 0$ hat niemand geprüft.

**Richtig:** Alles auf eine Seite bringen und $x$ herausheben: $x^2 - 5x = 0$, also $x\,(x - 5) = 0$. Daraus folgt
$x = 0$ oder $x = 5$. Merke: **Dividiere nie durch einen Term, der null sein kann.**
:::

:::achtung[Beide Seiten quadrieren]
Eine typische Fehlrechnung:
$$x - 1 = 3 \quad\Longrightarrow\quad (x - 1)^2 = 9 \quad\Longrightarrow\quad x - 1 = 3 \text{ oder } x - 1 = -3.$$
Die letzte Zeile liefert $x = 4$ **und** $x = -2$. Aber $x = -2$ erfüllt die Ausgangsgleichung nicht, denn
$-2 - 1 = -3$ und nicht $3$. Beim Quadrieren ist eine **Scheinlösung** dazugekommen. Das ist eine Zahl, die die
umgeformte Gleichung erfüllt, die ursprüngliche aber nicht.

Der Grund: Aus $a = b$ folgt $a^2 = b^2$. Umgekehrt folgt aus $a^2 = b^2$ nur $a = b$ **oder** $a = -b$, denn
$3^2$ und $(-3)^2$ sind beide $9$. Nach dem Quadrieren ist deshalb eine **Probe Pflicht**.
:::

Auch das Multiplizieren mit einem Term wie $(x - 5)$ ist gefährlich. Für $x = 5$ multipliziert man mit null, und
dann wird jede Gleichung wahr. So kann $x = 5$ als Scheinlösung hineinrutschen. Das passiert bei Bruchgleichungen,
die du in [2.6 Bruchgleichungen](/lernen/mathe3/gleichungen/bruchgleichungen) kennenlernst.

```plot
x: [-1.5, 6.5]
y: [-4, 30]
achsen: { x: "x", y: "y" }
graphen:
  - { f: "x^2", label: "y = x²", farbe: 0 }
  - { f: "5*x", label: "y = 5x", farbe: 1 }
punkte:
  - { x: 0, y: 0, label: "x = 0", farbe: 2 }
  - { x: 5, y: 25, label: "x = 5", farbe: 2 }
beschriftung: Die Parabel y = x² und die Gerade y = 5x schneiden einander zweimal, bei x = 0 und bei x = 5. Die Gleichung x² = 5x hat also zwei Lösungen. Wer durch x dividiert, findet nur x = 5 und verliert x = 0.
```

### Der Nullproduktsatz

Wie findet man also die Lösungen von $x\,(x - 5) = 0$ sicher? Dafür gibt es einen Satz, den du in diesem Kapitel
ständig brauchst.

:::satz[Nullproduktsatz]
Ein Produkt reeller Zahlen ist genau dann null, wenn mindestens einer der Faktoren null ist:
$$a\cdot b = 0 \iff a = 0 \text{ oder } b = 0.$$
Dabei sind $a$ und $b$ beliebige reelle Zahlen oder Terme. Das gilt genauso für drei oder mehr Faktoren.
:::

**Warum gilt das?** Angenommen, $a\cdot b = 0$ und $a$ ist nicht null. Dann darf man durch $a$ dividieren und erhält
$b = \tfrac{0}{a} = 0$. Also ist $a = 0$ oder $b = 0$. Umgekehrt: Ist ein Faktor null, ist das Produkt null.

**Gegenbeispiel:** Für andere Zahlen als null gilt das nicht. Aus $a\cdot b = 6$ folgt **nicht** „$a = 6$ oder
$b = 6$“. Es könnte ja $a = 2$ und $b = 3$ sein. Die Null ist die einzige Zahl mit dieser Eigenschaft. Deshalb
bringt man bei solchen Gleichungen zuerst **alles auf eine Seite**, sodass rechts $0$ steht.

:::beispiel[Den Nullproduktsatz anwenden]
Gesucht sind alle Lösungen von $(2x - 6)(x + 5) = 0$.

Das Produkt ist null, wenn einer der Faktoren null ist. Wir setzen jeden Faktor einzeln null:

- $2x - 6 = 0$. Wir addieren $6$ und dividieren durch $2$: $x = 3$.
- $x + 5 = 0$. Wir subtrahieren $5$: $x = -5$.

Also ist $L = \{3; -5\}$. **Probe** für $x = -5$: $(2\cdot(-5) - 6)\cdot(-5 + 5) = (-16)\cdot 0 = 0$.
:::

:::beispiel[Wann landet der Ball?]
Ein Ball wird vom Boden senkrecht nach oben geworfen. Seine Höhe nach $t$ Sekunden ist ungefähr
$h(t) = 20t - 5t^2$ in Metern. Wann ist er wieder am Boden?

1. **Gleichung aufstellen:** Am Boden ist die Höhe null, also $20t - 5t^2 = 0$.
2. **Herausheben:** Beide Summanden enthalten den Faktor $5t$. Also ist $5t\,(4 - t) = 0$.
3. **Nullproduktsatz:** $5t = 0$ ergibt $t = 0$. Und $4 - t = 0$ ergibt $t = 4$.
4. **Deuten:** Bei $t = 0$ s wird der Ball abgeworfen. Bei $t = 4$ s landet er wieder.

**Antwort:** Der Ball ist nach $4$ Sekunden wieder am Boden. Probe: $h(4) = 80 - 80 = 0$ Meter.
:::

:::merke[Sicher umformen]
1. Bei jedem Schritt fragen: Lässt er sich rückgängig machen? Nur dann schreibst du $\iff$.
2. Erlaubt sind: denselben Term addieren oder subtrahieren, mit einer Zahl $c \neq 0$ multiplizieren oder dividieren,
   Terme gleichwertig umformen.
3. Nie durch einen Term dividieren, der null sein kann. Stattdessen alles auf eine Seite bringen, herausheben und den
   Nullproduktsatz anwenden.
4. Nach dem Quadrieren und nach dem Multiplizieren mit einem Term, der null sein kann, ist eine Probe Pflicht.
5. Die Lösungsmenge am Ende ausdrücklich hinschreiben, zum Beispiel $L = \{0; 5\}$ oder $L = \emptyset$.
:::

```reflexion
frage: Warum darf man beide Seiten einer Gleichung mit $3$ multiplizieren, aber nicht mit $0$? Erkläre es mit dem Wort „umkehrbar“.
antwort: |
  Multipliziert man mit $3$, kann man den Schritt durch Division durch $3$ wieder rückgängig machen. Die neue
  Gleichung hat deshalb genau dieselben Lösungen wie die alte. Multipliziert man mit $0$, steht auf beiden Seiten $0$.
  Die Gleichung $0 = 0$ ist für jede Zahl wahr, egal was vorher dastand. Dieser Schritt lässt sich nicht umkehren,
  weil man durch $0$ nicht dividieren kann. Alle Information über die ursprüngliche Gleichung ist verloren.
```

```aufgabe
id: gl-aequiv-loesung-pruefen
titel: Lösungen durch Einsetzen erkennen
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Welche der Zahlen $-2$, $-1$, $2$ und $3$ sind Lösungen der Gleichung $x^2 - x = 6$?
  Gib alle Lösungen aus dieser Liste ein, getrennt durch einen Strichpunkt.
teile:
  - typ: menge
    label: 'Lösungen aus der Liste'
    loesung: ["-2", "3"]
    fehler:
      - wert: ["3"]
        meldung: |
          $3$ stimmt. Prüfe aber auch die negativen Zahlen sorgfältig. Setze sie mit Klammern ein:
          $(-2)^2 - (-2)$.
      - wert: ["2", "3"]
        meldung: |
          Setze $2$ ein: $2^2 - 2 = 4 - 2 = 2$. Das ist nicht $6$.
hinweise:
  - 'Setze jede Zahl einzeln mit Klammern ein und vergleiche das Ergebnis mit $6$.'
loesung: |
  Eine Zahl ist Lösung, wenn das Einsetzen eine wahre Aussage ergibt. Wir prüfen jede Zahl:
  $(-2)^2 - (-2) = 4 + 2 = 6$ ✓, $(-1)^2 - (-1) = 1 + 1 = 2$ ✗, $2^2 - 2 = 2$ ✗, $3^2 - 3 = 6$ ✓.
  ---
  Aus der Liste sind also $-2$ und $3$ Lösungen. Ob es noch weitere gibt, sagt das Einsetzen nicht. Dafür braucht man ein
  Lösungsverfahren, etwa die Lösungsformel aus [2.3 Quadratische Gleichungen](/lernen/mathe3/gleichungen/quadratische-gleichungen).
```

```aufgabe
id: gl-aequiv-welche-umformung
titel: Welche Schritte sind Äquivalenzumformungen?
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Welche der folgenden Schritte verändern die Lösungsmenge einer Gleichung **nie**? Kreuze alle an.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - 'auf beiden Seiten $7$ addieren'
      - 'beide Seiten mit $-2$ multiplizieren'
      - 'beide Seiten mit $0$ multiplizieren'
      - 'beide Seiten durch $x$ dividieren'
      - 'beide Seiten quadrieren'
    richtig: [0, 1]
    fehler:
      - wert: [0]
        meldung: |
          Addieren ist richtig. Aber auch das Multiplizieren mit einer negativen Zahl ist umkehrbar: Man dividiert
          danach wieder durch $-2$. Nur bei **Ungleichungen** ändert eine negative Zahl etwas.
      - wert: [0, 1, 3]
        meldung: |
          Division durch $x$ ist für $x = 0$ nicht erlaubt. Dabei kann die Lösung $x = 0$ verloren gehen,
          wie bei $x^2 = 5x$.
      - wert: [0, 1, 4]
        meldung: |
          Quadrieren ist nicht umkehrbar: $3^2$ und $(-3)^2$ sind beide $9$. Es können Scheinlösungen entstehen.
hinweise:
  - 'Frage bei jedem Schritt: Kann ich ihn immer rückgängig machen, egal welchen Wert $x$ hat?'
loesung: |
  Ein Schritt verändert die Lösungsmenge nie, wenn er sich immer rückgängig machen lässt. Addieren von $7$ macht man
  durch Subtrahieren von $7$ rückgängig. Multiplizieren mit $-2$ macht man durch Dividieren durch $-2$ rückgängig.
  ---
  Nicht umkehrbar sind: Multiplizieren mit $0$ (danach steht $0 = 0$), Dividieren durch $x$ (verboten für $x = 0$) und
  Quadrieren (aus $a^2 = b^2$ folgt nur $a = \pm b$). Richtig sind also die ersten beiden Schritte.
```

```aufgabe
id: gl-aequiv-nullprodukt
titel: Faktoren null setzen
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Löse mit dem Nullproduktsatz. Gib jeweils alle Lösungen ein, getrennt durch einen Strichpunkt.

  a) $(3x - 12)(x + 2) = 0$

  b) $x\,(2x + 7) = 0$
teile:
  - typ: menge
    label: 'a) $L$'
    loesung: ["4", "-2"]
    fehler:
      - wert: ["12", "-2"]
        meldung: |
          Aus $3x - 12 = 0$ folgt $3x = 12$. Danach musst du noch durch $3$ dividieren.
      - wert: ["4", "2"]
        meldung: |
          Aus $x + 2 = 0$ folgt $x = -2$, nicht $x = 2$. Zum Freistellen subtrahierst du $2$.
  - typ: menge
    label: 'b) $L$'
    loesung: ["0", "-7/2"]
    fehler:
      - wert: ["-7/2"]
        meldung: |
          Der Faktor $x$ allein ist auch ein Faktor. Er ist null für $x = 0$. Diese Lösung fehlt.
      - wert: ["0", "7/2"]
        meldung: |
          Aus $2x + 7 = 0$ folgt $2x = -7$. Das Vorzeichen ist negativ.
hinweise:
  - 'Setze jeden Faktor einzeln gleich null und löse die entstehende einfache Gleichung.'
loesung: |
  **Ansatz:** Ein Produkt ist genau dann null, wenn ein Faktor null ist. Wir setzen jeden Faktor einzeln null.
  ---
  a) $3x - 12 = 0$ ergibt $3x = 12$, also $x = 4$. Und $x + 2 = 0$ ergibt $x = -2$. Also $L = \{4; -2\}$.
  ---
  b) Der erste Faktor $x$ ist null für $x = 0$. Aus $2x + 7 = 0$ folgt $2x = -7$, also $x = -\tfrac72 = -3{,}5$.
  Also $L = \{0; -3{,}5\}$. Probe: $-3{,}5\cdot(-7 + 7) = 0$.
```

```aufgabe
id: gl-fehler-finden
titel: Wo ist die Lösung verloren gegangen?
niveau: 2
lernziel: 0
kompetenz: begruenden
angabe: |
  Eine Mitschülerin löst $x\,(x - 2) = 4x$ so:
  $$x\,(x - 2) = 4x \quad\big|\, :x \qquad\Longrightarrow\qquad x - 2 = 4 \qquad\Longrightarrow\qquad x = 6.$$
  a) Erkläre, was an diesem Lösungsweg falsch ist.

  b) Gib die vollständige Lösungsmenge an, getrennt durch einen Strichpunkt.
teile:
  - typ: text
    label: 'a)'
    muster: |
      Die Division durch $x$ ist nur erlaubt, wenn $x \neq 0$ ist. Sie ist deshalb keine Äquivalenzumformung. Der Fall
      $x = 0$ wurde nie geprüft. Setzt man $x = 0$ ein, steht links $0\cdot(-2) = 0$ und rechts $4\cdot 0 = 0$. Also
      ist $x = 0$ eine Lösung, die verloren gegangen ist.
  - typ: menge
    label: 'b) $L$'
    loesung: ["0", "6"]
    fehler:
      - wert: ["6"]
        meldung: |
          Das ist genau das Ergebnis der fehlerhaften Rechnung. Setze $x = 0$ in die Ausgangsgleichung ein.
      - wert: ["0", "2"]
        meldung: |
          Du hast vermutlich $x\,(x - 2) = 0$ gelöst. Rechts steht aber $4x$ und nicht $0$. Bring zuerst alles auf eine Seite.
hinweise:
  - 'Was passiert bei der Division, wenn $x = 0$ ist?'
  - 'Bring alles auf eine Seite: $x^2 - 2x - 4x = 0$. Dann hebe $x$ heraus und wende den Nullproduktsatz an.'
loesung: |
  **Fehler:** Durch $x$ zu dividieren setzt $x \neq 0$ voraus. Ob $x = 0$ eine Lösung ist, wurde nie geprüft.
  ---
  **Richtig:** Wir multiplizieren links aus und bringen alles auf eine Seite: $x^2 - 2x - 4x = 0$, also $x^2 - 6x = 0$.
  Herausheben ergibt $x\,(x - 6) = 0$.
  ---
  Nullproduktsatz: $x = 0$ oder $x = 6$. Also $L = \{0; 6\}$. **Probe** für $x = 0$: links $0$, rechts $0$. Für $x = 6$:
  links $6\cdot 4 = 24$, rechts $24$.
```

```aufgabe
id: gl-aequiv-scheinloesung
titel: Eine Scheinlösung entsteht
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  Die Gleichung $x = 2$ hat nur die Lösung $2$. Jemand multipliziert beide Seiten mit $(x - 5)$ und erhält
  $x\,(x - 5) = 2\,(x - 5)$.

  a) Bestimme alle Lösungen der neuen Gleichung, getrennt durch einen Strichpunkt.

  b) Welche dieser Lösungen ist eine Scheinlösung?
teile:
  - typ: menge
    label: 'a) Lösungen der neuen Gleichung'
    loesung: ["2", "5"]
    fehler:
      - wert: ["2"]
        meldung: |
          Du hast vermutlich durch $(x - 5)$ dividiert. Genau das darf man nicht, weil $x - 5$ null sein kann.
          Bring alles auf eine Seite und hebe $(x - 5)$ heraus.
  - typ: zahl
    label: 'b) Scheinlösung'
    loesung: "5"
    fehler:
      - wert: "2"
        meldung: |
          $2$ erfüllt die ursprüngliche Gleichung $x = 2$. Eine Scheinlösung erfüllt nur die umgeformte Gleichung.
hinweise:
  - 'Bring alles auf eine Seite: $x\,(x - 5) - 2\,(x - 5) = 0$.'
  - 'Hebe den gemeinsamen Faktor $(x - 5)$ heraus und wende den Nullproduktsatz an.'
loesung: |
  **Ansatz:** Wir bringen alles auf eine Seite, damit wir den Nullproduktsatz anwenden können:
  $x\,(x - 5) - 2\,(x - 5) = 0$.
  ---
  Beide Summanden enthalten den Faktor $(x - 5)$. Herausheben: $(x - 5)(x - 2) = 0$. Also $x = 5$ oder $x = 2$.
  ---
  Die ursprüngliche Gleichung $x = 2$ wird von $5$ nicht erfüllt. Also ist $5$ die Scheinlösung. Sie kam herein,
  weil für $x = 5$ mit null multipliziert wurde. Dann steht $0 = 0$ da, und das ist immer wahr.
```

```aufgabe
id: gl-aequiv-grundmenge
titel: Tische für ein Fest
niveau: 2
lernziel: 0
kompetenz: modellieren
angabe: |
  Für ein Fest stehen schon $3$ Einzelplätze bereit. Dazu kommen Tische mit je $8$ Plätzen. Insgesamt sollen es
  **genau** $57$ Plätze werden.

  a) Mit welcher Gleichung beschreibst du die Situation, wenn $x$ die Anzahl der Tische ist?

  b) Wie lautet die Lösungsmenge in der Grundmenge $\N$, also für ganze Tische?
teile:
  - typ: auswahl
    label: 'a) Gleichung'
    optionen:
      - '$8x + 3 = 57$'
      - '$3x + 8 = 57$'
      - '$8\,(x + 3) = 57$'
      - '$x + 8 + 3 = 57$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Hier hätte jeder Tisch $3$ Plätze. Es sind aber $8$ Plätze pro Tisch, also $8$ mal die Anzahl der Tische.
      - wert: 2
        meldung: |
          Diese Gleichung würde auch die $3$ Einzelplätze mit $8$ multiplizieren. Sie kommen aber nur einmal dazu.
      - wert: 3
        meldung: |
          Jeder Tisch bringt $8$ Plätze. Die Plätze an den Tischen sind also $8\cdot x$, nicht $x + 8$.
  - typ: auswahl
    label: 'b) $L$ in $\N$'
    optionen:
      - '$L = \{6{,}75\}$'
      - '$L = \{7\}$'
      - '$L = \{6\}$'
      - '$L = \emptyset$'
    richtig: [3]
    fehler:
      - wert: 0
        meldung: |
          $6{,}75$ löst die Gleichung in $\R$. Es gibt aber keine Dreiviertel-Tische. In $\N$ liegt nur, was ganzzahlig und nicht negativ ist.
      - wert: 1
        meldung: |
          Mit $7$ Tischen hast du $8\cdot 7 + 3 = 59$ Plätze. Gefragt war nach **genau** $57$ Plätzen.
      - wert: 2
        meldung: |
          Mit $6$ Tischen hast du $8\cdot 6 + 3 = 51$ Plätze, also zu wenige.
hinweise:
  - 'Plätze an den Tischen plus Einzelplätze ergeben die Gesamtzahl.'
  - 'Löse $8x + 3 = 57$ in $\R$ und prüfe dann, ob das Ergebnis eine natürliche Zahl ist.'
loesung: |
  **Modell:** $x$ ist die Anzahl der Tische. Sie bringen $8x$ Plätze, dazu kommen $3$ Einzelplätze. Also $8x + 3 = 57$.
  ---
  Lösen in $\R$: Wir subtrahieren $3$ und erhalten $8x = 54$. Dann dividieren wir durch $8$: $x = 6{,}75$.
  ---
  $6{,}75$ ist keine natürliche Zahl. In der Grundmenge $\N$ ist also $L = \emptyset$. **Antwort:** Genau $57$ Plätze
  sind nicht möglich. Mit $7$ Tischen gibt es $59$ Plätze, mit $6$ Tischen nur $51$.
```

```aufgabe
id: gl-aequiv-dritte-potenz
titel: Nicht durch x dividieren
niveau: 3
lernziel: 0
kompetenz: begruenden
angabe: |
  Löse $x^3 = 16x$ vollständig.

  a) Gib alle Lösungen ein, getrennt durch einen Strichpunkt.

  b) Begründe, warum man hier nicht durch $x$ dividieren darf, und sag, wie viele Lösungen man dabei verlieren würde.
teile:
  - typ: menge
    label: 'a) $L$'
    loesung: ["0", "4", "-4"]
    fehler:
      - wert: ["4", "-4"]
        meldung: |
          Diese zwei Lösungen erhältst du nach Division durch $x$. Prüfe zusätzlich $x = 0$ in der Ausgangsgleichung.
      - wert: ["0", "4"]
        meldung: |
          Aus $x^2 = 16$ folgen **zwei** Lösungen, denn auch $(-4)^2 = 16$.
  - typ: text
    label: 'b)'
    muster: |
      Division durch $x$ ist nur für $x \neq 0$ erlaubt. Man müsste den Fall $x = 0$ getrennt untersuchen. Tut man das
      nicht, verliert man die Lösung $x = 0$, denn $0^3 = 16\cdot 0$ ist wahr. Man würde also genau eine Lösung verlieren.
      Sicher ist der Weg über $x\,(x^2 - 16) = 0$ und den Nullproduktsatz.
hinweise:
  - 'Bring alles auf eine Seite und hebe $x$ heraus.'
  - 'In der Klammer steht $x^2 - 16$. Zerlege sie mit der dritten binomischen Formel $a^2 - b^2 = (a - b)(a + b)$.'
loesung: |
  **Ansatz:** Statt zu dividieren bringen wir alles auf eine Seite: $x^3 - 16x = 0$. Beide Summanden enthalten $x$.
  Herausheben ergibt $x\,(x^2 - 16) = 0$.
  ---
  Die Klammer zerlegen wir mit der dritten binomischen Formel: $x^2 - 16 = (x - 4)(x + 4)$.
  Also $x\,(x - 4)(x + 4) = 0$.
  ---
  Nullproduktsatz mit drei Faktoren: $x = 0$ oder $x = 4$ oder $x = -4$. Also $L = \{0; 4; -4\}$.
  ---
  **Probe:** $x = -4$: links $(-4)^3 = -64$, rechts $16\cdot(-4) = -64$. Wer durch $x$ dividiert, erhält nur $x^2 = 16$ und
  verliert die Lösung $x = 0$.
```

```aufgabe
id: gl-aequiv-gemeinsamer-faktor
titel: Ein gemeinsamer Faktor auf beiden Seiten
niveau: 3
lernziel: 0
kompetenz: rechnen
angabe: |
  Löse $(x - 3)^2 = 4\,(x - 3)$. Gib alle Lösungen ein, getrennt durch einen Strichpunkt.
teile:
  - typ: menge
    label: '$L$'
    loesung: ["3", "7"]
    fehler:
      - wert: ["7"]
        meldung: |
          Du hast durch $(x - 3)$ dividiert. Das ist für $x = 3$ verboten. Setze $x = 3$ in die Ausgangsgleichung ein.
      - wert: ["3", "-1"]
        meldung: |
          Prüfe das Vorzeichen im zweiten Faktor. Rechts stand $+4\,(x - 3)$. Auf die linke Seite gebracht wird daraus
          $-4\,(x - 3)$, also bleibt nach dem Herausheben $(x - 3) - 4$ und nicht $(x - 3) + 4$.
hinweise:
  - 'Dividiere nicht durch $(x - 3)$. Bring alles auf eine Seite.'
  - 'Hebe $(x - 3)$ heraus: $(x - 3)\,\big[(x - 3) - 4\big] = 0$.'
loesung: |
  **Ansatz:** Auf beiden Seiten steht der Faktor $(x - 3)$. Dividieren wäre verboten, weil er null sein kann. Wir bringen
  alles auf eine Seite: $(x - 3)^2 - 4\,(x - 3) = 0$.
  ---
  Herausheben von $(x - 3)$: $(x - 3)\,\big[(x - 3) - 4\big] = 0$, also $(x - 3)(x - 7) = 0$.
  ---
  Nullproduktsatz: $x = 3$ oder $x = 7$. **Probe:** Für $x = 3$ steht $0 = 0$. Für $x = 7$ steht links $16$ und rechts
  $4\cdot 4 = 16$. Also $L = \{3; 7\}$.
gefuehrt:
  - text: Bring alles auf die linke Seite. Welcher Term steht dann links, wenn rechts $0$ steht?
    teil:
      typ: term
      variable: x
      loesung: "(x - 3)^2 - 4(x - 3)"
      fehler:
        - wert: "(x - 3)^2 + 4(x - 3)"
          meldung: 'Beim Hinüberbringen ändert sich das Vorzeichen: Du subtrahierst $4\,(x - 3)$ auf beiden Seiten.'
    erklaerung: 'Wir subtrahieren $4\,(x - 3)$ auf beiden Seiten. Das ist eine Äquivalenzumformung.'
  - text: Beide Summanden enthalten den Faktor $(x - 3)$. Was bleibt in der zweiten Klammer übrig, wenn du ihn heraushebst?
    teil:
      typ: term
      variable: x
      loesung: "x - 7"
      fehler:
        - wert: "x - 3 - 4x"
          meldung: 'Aus $(x - 3)^2$ bleibt nach dem Herausheben ein Faktor $(x - 3)$ übrig, aus $4\,(x - 3)$ bleibt $4$.'
    erklaerung: '$(x - 3)^2 - 4\,(x - 3) = (x - 3)\,\big[(x - 3) - 4\big] = (x - 3)(x - 7)$.'
  - text: Wende den Nullproduktsatz an. Gib alle Lösungen an, getrennt durch einen Strichpunkt.
    teil:
      typ: menge
      loesung: ["3", "7"]
    erklaerung: 'Ein Produkt ist null, wenn ein Faktor null ist: $x = 3$ oder $x = 7$.'
  - text: Welche Lösung hätte man verloren, wenn man am Anfang durch $(x - 3)$ dividiert hätte? Überlege, bevor du weiterklickst.
    erklaerung: 'Man hätte $x - 3 = 4$ erhalten, also nur $x = 7$. Die Lösung $x = 3$ wäre verloren gegangen, weil für sie durch null dividiert wurde.'
```

## Lineare Gleichungen

```aufgabe
id: gl-linear-check-hauptnenner
titel: Der kleinste gemeinsame Nenner
niveau: 1
art: check
angabe: |
  Was ist der kleinste gemeinsame Nenner (Hauptnenner) der Brüche $\dfrac{x}{4}$ und $\dfrac{x}{6}$?
  Herkunft: [Kapitel 1, Abschnitt 1.5 Bruchrechnen](/lernen/mathe3/zahlen/bruchrechnen).
teile:
  - typ: zahl
    label: 'Hauptnenner'
    loesung: "12"
    fehler:
      - wert: "24"
        meldung: |
          $24 = 4\cdot 6$ ist ein gemeinsamer Nenner, aber nicht der kleinste. Gesucht ist die kleinste Zahl, die durch
          $4$ **und** durch $6$ teilbar ist.
      - wert: "2"
        meldung: |
          $2$ ist der größte gemeinsame **Teiler** von $4$ und $6$. Der Hauptnenner ist ein gemeinsames **Vielfaches**.
hinweise:
  - 'Schreib die Vielfachen von $6$ auf: $6, 12, 18, \ldots$ Welches davon ist auch durch $4$ teilbar?'
loesung: |
  Der Hauptnenner ist das kleinste gemeinsame Vielfache der Nenner. Die Vielfachen von $6$ sind $6, 12, 18, \ldots$
  ---
  $6$ ist nicht durch $4$ teilbar, $12$ schon. Also ist der Hauptnenner $12$.
```

Lineare Gleichungen sind der einfachste Gleichungstyp. Trotzdem lohnt es sich, sie sauber zu beherrschen. Fast jede
schwierigere Gleichung wird am Ende auf eine lineare zurückgeführt. Außerdem beschreiben sie viele Alltagsfragen:
„Ab wie vielen Minuten ist Tarif B billiger?“ oder „Wie viele Stunden hat der Handwerker gearbeitet?“.

### Was eine lineare Gleichung ist

:::definition[Lineare Gleichung]
Eine Gleichung heißt **lineare Gleichung** in $x$, wenn man sie durch Äquivalenzumformungen auf die Form
$$a\,x + b = 0$$
bringen kann. Dabei sind $a$ und $b$ feste Zahlen. Die Zahl $a$ heißt **Koeffizient** von $x$, also die Zahl, mit der
$x$ multipliziert wird. Das Wort „linear“ kommt von „Linie“: Der Graph von $y = ax + b$ ist eine Gerade.
:::

**Beispiel:** $3\,(x - 2) = x + 4$ ist linear. Nach dem Ausmultiplizieren steht $3x - 6 = x + 4$, und daraus wird
$2x - 10 = 0$. Die Unbekannte kommt nur in der ersten Potenz vor.

**Nichtbeispiele:** $x^2 + 1 = 2x$ ist **nicht** linear, weil $x^2$ vorkommt. Und $2^x = 8$ ist nicht linear, weil $x$
im Exponenten steht. Solche Gleichungen kommen in eigenen Lektionen.

:::satz[Die drei Lösungsfälle]
Für die Gleichung $a\,x + b = 0$ gibt es genau drei Möglichkeiten:

1. Ist $a \neq 0$, gibt es **genau eine** Lösung: $x = -\dfrac{b}{a}$.
2. Ist $a = 0$ und $b = 0$, steht da $0 = 0$. Das ist für jedes $x$ wahr, also $L = \R$.
3. Ist $a = 0$ und $b \neq 0$, steht da zum Beispiel $3 = 0$. Das ist nie wahr, also $L = \emptyset$.
:::

Für jeden Fall ein Zahlenbeispiel:

- $2x + 6 = 0$ hat $a = 2 \neq 0$. Wir subtrahieren $6$ und dividieren durch $2$: $x = -3$.
- $2\,(x + 1) = 2x + 2$ wird nach dem Ausmultiplizieren und Subtrahieren von $2x + 2$ zu $0 = 0$. Also $L = \R$.
- $2\,(x + 1) = 2x + 5$ wird zu $0 = 3$. Das ist falsch, egal was $x$ ist. Also $L = \emptyset$.

Geometrisch suchst du den Schnittpunkt der Geraden $y = ax + b$ mit der $x$-Achse. Eine schräge Gerade schneidet die
Achse genau einmal. Eine waagrechte Gerade schneidet sie nie, oder sie liegt ganz auf der Achse. Dieselben drei Fälle
begegnen dir bei Gleichungssystemen in [Kapitel 3](/lernen/mathe3/lgs-matrizen) wieder.

```plot
x: [-5, 3]
y: [-3, 7]
achsen: { x: "x", y: "y" }
graphen:
  - { f: "2*x + 6", label: "y = 2x + 6", farbe: 0 }
  - { f: "3", label: "y = 3", farbe: 1 }
punkte:
  - { x: -3, y: 0, label: "x = −3", farbe: 0 }
beschriftung: Die schräge Gerade y = 2x + 6 schneidet die x-Achse genau einmal, bei x = −3. Die waagrechte Gerade y = 3 schneidet sie nie, die Gleichung 0·x + 3 = 0 hat also keine Lösung.
```

### Lösen in vier Schritten

:::beispiel[Klammern auflösen]
Gesucht ist die Lösung von $4\,(x - 1) - (3x + 2) = 2 - 3\,(x - 4)$.

1. **Klammern auflösen.** Links: $4x - 4 - 3x - 2 = x - 6$. Das Minus vor $(3x + 2)$ ändert **beide** Vorzeichen.
   Rechts: $2 - 3x + 12 = 14 - 3x$, denn $-3\cdot(-4) = +12$.
2. **Sortieren.** Aus $x - 6 = 14 - 3x$ wird durch Addieren von $3x$ und von $6$ auf beiden Seiten $4x = 20$.
3. **Dividieren** durch den Koeffizienten $4$: $x = 5$.
4. **Probe in der Ausgangsgleichung:** links $4\cdot 4 - 17 = -1$, rechts $2 - 3\cdot 1 = -1$. Es stimmt.
:::

:::beispiel[Brüche beseitigen]
Gesucht ist die Lösung von $\dfrac{x - 2}{3} - \dfrac{x + 1}{4} = \dfrac12$.

1. **Hauptnenner** von $3$, $4$ und $2$ ist $12$. Wir multiplizieren beide Seiten mit $12$, damit alle Brüche
   verschwinden. Jeder Summand wird multipliziert: $12\cdot\tfrac{x - 2}{3} = 4\,(x - 2)$, $12\cdot\tfrac{x + 1}{4} = 3\,(x + 1)$
   und $12\cdot\tfrac12 = 6$.
2. Es entsteht $4\,(x - 2) - 3\,(x + 1) = 6$. Die Klammern um die Zähler sind wichtig.
3. **Auflösen:** $4x - 8 - 3x - 3 = 6$, also $x - 11 = 6$ und $x = 17$.
4. **Probe:** $\tfrac{15}{3} - \tfrac{18}{4} = 5 - 4{,}5 = 0{,}5$. Es stimmt.
:::

:::beispiel[Wie lange hat der Handwerker gearbeitet?]
Ein Installateur verrechnet $45$ Euro für die Anfahrt und $38$ Euro pro Arbeitsstunde. Die Rechnung lautet auf
$216$ Euro. Wie viele Stunden hat er gearbeitet?

1. **Variable festlegen:** $t$ ist die Arbeitszeit in Stunden.
2. **Gleichung:** Anfahrt plus Stundenlohn mal Zeit ergibt den Rechnungsbetrag: $45 + 38\,t = 216$.
3. **Lösen:** Wir subtrahieren $45$: $38\,t = 171$. Dann dividieren wir durch $38$: $t = 4{,}5$.
4. **Antwort:** Er hat $4{,}5$ Stunden gearbeitet. Kontrolle: $45 + 38\cdot 4{,}5 = 45 + 171 = 216$ Euro.
:::

:::achtung[Minus vor einer Klammer]
Eine typische Fehlrechnung:
$$4\,(x - 1) - (3x + 2) = 4x - 4 - 3x + 2.$$
Das Minus vor der Klammer wurde nur auf $3x$ angewendet. Es wirkt aber wie ein Faktor $-1$ auf **jeden**
Summanden in der Klammer. **Richtig:** $-(3x + 2) = -3x - 2$, also $4x - 4 - 3x - 2 = x - 6$.
:::

:::achtung[Beim Multiplizieren mit dem Hauptnenner einen Summanden vergessen]
Eine typische Fehlrechnung bei $\dfrac{x}{2} + 3 = 5$:
$$\frac{x}{2} + 3 = 5 \quad\big|\cdot 2 \qquad\Longrightarrow\qquad x + 3 = 10.$$
Hier wurde nur $\tfrac{x}{2}$ und die rechte Seite mit $2$ multipliziert, die $3$ aber nicht. **Richtig:** Jeder Summand
auf beiden Seiten wird multipliziert: $x + 6 = 10$, also $x = 4$. Ebenso falsch ist $12\cdot\tfrac{x + 1}{4} = 3x + 1$.
Die Klammer um den Zähler fehlt, richtig ist $3\,(x + 1) = 3x + 3$.
:::

```aufgabe
id: gl-linear-check-schritt
titel: Der nächste Schritt
niveau: 1
art: check
angabe: |
  Du hast $7x - 4 = 3x + 8$ vor dir. Welcher Schritt bringt alle Terme mit $x$ auf die linke Seite?
teile:
  - typ: auswahl
    optionen:
      - 'auf beiden Seiten $3x$ subtrahieren'
      - 'auf beiden Seiten $3x$ addieren'
      - 'beide Seiten durch $x$ dividieren'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Dann stünde rechts $6x + 8$. Um $3x$ rechts zu beseitigen, ziehst du $3x$ ab.'
      - wert: 2
        meldung: 'Durch $x$ zu dividieren ist gefährlich, weil $x$ null sein könnte. Außerdem bleiben dabei Brüche übrig.'
hinweise:
  - 'Rechts steht $+3x$. Was musst du tun, damit es dort verschwindet?'
loesung: |
  Rechts steht $+3x$. Ziehen wir auf beiden Seiten $3x$ ab, verschwindet es rechts: $4x - 4 = 8$.
  ---
  Danach addieren wir $4$ und dividieren durch $4$: $x = 3$.
```

### Gleichungen mit Parameter

Manchmal steht in einer Gleichung neben $x$ noch ein zweiter Buchstabe, zum Beispiel $a$. Er heißt **Parameter**.
Ein Parameter ist eine Zahl, die noch nicht festgelegt ist. Du kannst dir eine ganze Familie von Gleichungen
vorstellen: Für $a = 1$, für $a = 2$ und so weiter entsteht jeweils eine eigene Gleichung. Die Lösung ist dann
ein Term, in dem $a$ vorkommt.

Die Schwierigkeit ist der letzte Schritt. Steht da $(a - 1)\,x = \ldots$, möchte man durch $a - 1$ dividieren. Für
$a = 1$ wäre das aber eine Division durch null. Deshalb braucht man eine **Fallunterscheidung**: Man rechnet den
Fall „Koeffizient ungleich null“ und den Fall „Koeffizient gleich null“ getrennt.

:::beispiel[Ein Parameter mit zwei Fällen]
Löse $(a - 1)\,x = a^2 - 1$ für jeden Wert des Parameters $a$.

- **Fall $a \neq 1$:** Dann ist $a - 1 \neq 0$, und wir dürfen dividieren. Mit der dritten binomischen Formel
  $a^2 - 1 = (a - 1)(a + 1)$ wird $x = \dfrac{(a - 1)(a + 1)}{a - 1} = a + 1$. Für $a = 4$ ist zum Beispiel $x = 5$.
- **Fall $a = 1$:** Die Gleichung lautet $0\cdot x = 0$. Jede reelle Zahl erfüllt das, also $L = \R$.

Für $a \neq 1$ gilt also $L = \{a + 1\}$, für $a = 1$ gilt $L = \R$.
:::

:::beispiel[Ein Parameter, bei dem die Gleichung unlösbar wird]
Löse $(a - 2)\,x = a + 1$.

- **Fall $a \neq 2$:** Division durch $a - 2$ ist erlaubt: $x = \dfrac{a + 1}{a - 2}$. Für $a = 5$ ist $x = \tfrac63 = 2$.
- **Fall $a = 2$:** Die Gleichung lautet $0\cdot x = 3$, also $0 = 3$. Das ist nie wahr, also $L = \emptyset$.

Hier gibt es einen Parameterwert ohne Lösung. Der Unterschied zum Beispiel davor: Rechts bleibt für $a = 2$ eine Zahl
ungleich null stehen.
:::

:::merke[Lineare Gleichung lösen]
1. Brüche beseitigen: beide Seiten mit dem Hauptnenner multiplizieren, jeden Summanden, mit Klammern um die Zähler.
2. Klammern auflösen. Ein Minus vor der Klammer ändert jedes Vorzeichen darin.
3. Alle Terme mit $x$ auf eine Seite, alle Zahlen auf die andere.
4. Durch den Koeffizienten von $x$ dividieren, aber nur, wenn er nicht null ist. Enthält er einen Parameter, unterscheide
   die Fälle „Koeffizient ungleich null“ und „Koeffizient gleich null“.
5. Probe in der **Ausgangsgleichung**.
:::

```reflexion
frage: Bei $(a - 2)\,x = a + 1$ schreibt jemand sofort $x = \frac{a + 1}{a - 2}$ und ist fertig. Was fehlt, und warum ist das wichtig?
antwort: |
  Die Division durch $a - 2$ ist nur erlaubt, wenn $a - 2 \neq 0$ ist, also für $a \neq 2$. Der Fall $a = 2$ fehlt.
  Für $a = 2$ steht da $0\cdot x = 3$, und das hat keine Lösung. Die Formel $x = \frac{a + 1}{a - 2}$ würde für $a = 2$
  eine Division durch null verlangen und damit gar nichts aussagen. Eine vollständige Lösung nennt deshalb beide Fälle:
  für $a \neq 2$ die Formel, für $a = 2$ die leere Lösungsmenge.
```

```aufgabe
id: gl-linear
titel: Lineare Gleichungen mit Klammern und Brüchen
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Löse:

  a) $5\,(x + 2) - 3\,(2x - 1) = 2\,(x - 4) + 3$

  b) $\dfrac{x + 1}{4} - \dfrac{x - 3}{6} = 2$
teile:
  - typ: zahl
    label: 'a) $x$'
    loesung: "6"
    fehler:
      - wert: "4"
        meldung: |
          Prüfe $-3\,(2x - 1)$. Das Minus wirkt auf beide Summanden: $-3\cdot 2x = -6x$ und $-3\cdot(-1) = +3$.
  - typ: zahl
    label: 'b) $x$'
    loesung: "15"
    fehler:
      - wert: "27"
        meldung: |
          Nach dem Multiplizieren mit $12$ steht $3\,(x + 1) - 2\,(x - 3)$. Das Minus vor der zweiten Klammer macht aus
          $-3$ ein $+6$, nicht ein $-6$.
hinweise:
  - 'Bei b) mit dem Hauptnenner $12$ multiplizieren und die Zähler in Klammern setzen.'
loesung: |
  a) Klammern auflösen. Links: $5x + 10 - 6x + 3 = -x + 13$. Rechts: $2x - 8 + 3 = 2x - 5$.
  Also $-x + 13 = 2x - 5$. Wir addieren $x$ und $5$: $18 = 3x$, also $x = 6$.
  ---
  Probe a): links $5\cdot 8 - 3\cdot 11 = 7$, rechts $2\cdot 2 + 3 = 7$. Es stimmt.
  ---
  b) Mal $12$: $3\,(x + 1) - 2\,(x - 3) = 24$, also $3x + 3 - 2x + 6 = 24$. Das ergibt $x + 9 = 24$ und $x = 15$.
  ---
  Probe b): $\tfrac{16}{4} - \tfrac{12}{6} = 4 - 2 = 2$. Es stimmt.
```

```aufgabe
id: gl-linear-taxi
titel: Eine Taxifahrt
niveau: 1
lernziel: 1
kompetenz: anwenden
angabe: |
  Ein Taxi verrechnet $3{,}80$ Euro Grundgebühr und $1{,}90$ Euro pro Kilometer. Eine Fahrt hat $26{,}60$ Euro gekostet.
  Wie viele Kilometer war die Strecke lang?
teile:
  - typ: zahl
    label: 'Strecke'
    einheit: "km"
    loesung: "(26.6 - 3.8)/1.9"
    fehler:
      - wert: "14"
        meldung: |
          Du hast den ganzen Betrag durch $1{,}90$ geteilt. Darin steckt aber auch die Grundgebühr, die nicht von der
          Strecke abhängt. Zieh sie zuerst ab.
      - wert: "16"
        meldung: |
          Die Grundgebühr muss **abgezogen** werden, nicht addiert. Sie ist schon im Fahrpreis enthalten.
hinweise:
  - 'Mit $s$ Kilometern kostet die Fahrt $3{,}80 + 1{,}90\,s$ Euro.'
loesung: |
  **Modell:** $s$ ist die Strecke in km. Grundgebühr plus Kilometerpreis mal Strecke ergibt den Fahrpreis:
  $3{,}80 + 1{,}90\,s = 26{,}60$.
  ---
  Wir subtrahieren $3{,}80$: $1{,}90\,s = 22{,}80$. Dann dividieren wir durch $1{,}90$: $s = 12$.
  **Antwort:** Die Strecke war $12$ km lang. Kontrolle: $3{,}80 + 22{,}80 = 26{,}60$ Euro.
```

```aufgabe
id: gl-linear-faelle
titel: Eine, keine oder unendlich viele Lösungen?
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Entscheide für jede Gleichung, wie viele Lösungen sie hat.

  a) $3\,(x - 2) = 3x - 6$ b) $2x + 5 = 2\,(x + 1)$ c) $4x - 1 = 3x$
teile:
  - typ: auswahl
    label: 'a)'
    optionen: ['genau eine', 'keine', 'unendlich viele ($L = \R$)']
    richtig: [2]
    fehler:
      - wert: 1
        meldung: 'Nach dem Ausmultiplizieren steht links und rechts dasselbe. Was bleibt übrig, wenn du $3x - 6$ abziehst?'
      - wert: 0
        meldung: 'Versuch, nach $x$ aufzulösen. Das $x$ fällt dabei ganz heraus. Prüfe dann, ob die übrige Aussage wahr ist.'
  - typ: auswahl
    label: 'b)'
    optionen: ['genau eine', 'keine', 'unendlich viele ($L = \R$)']
    richtig: [1]
    fehler:
      - wert: 2
        meldung: 'Rechts steht nach dem Ausmultiplizieren $2x + 2$. Ziehst du $2x$ ab, bleibt $5 = 2$. Ist das wahr?'
      - wert: 0
        meldung: 'Die $x$-Terme heben sich weg. Dann kann keine einzelne Zahl als Lösung herauskommen.'
  - typ: auswahl
    label: 'c)'
    optionen: ['genau eine', 'keine', 'unendlich viele ($L = \R$)']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Ziehst du $3x$ ab, bleibt $x - 1 = 0$. Diese Gleichung hat eine Lösung.'
      - wert: 2
        meldung: 'Setze $x = 0$ ein: links $-1$, rechts $0$. Also ist nicht jede Zahl eine Lösung.'
hinweise:
  - 'Bring jeweils alle $x$-Terme auf eine Seite. Bleibt ein $x$ übrig, oder fällt es heraus?'
loesung: |
  a) Ausmultiplizieren ergibt $3x - 6 = 3x - 6$. Wir ziehen $3x - 6$ ab: $0 = 0$. Das ist immer wahr, also $L = \R$.
  ---
  b) Rechts steht $2x + 2$. Wir ziehen $2x$ ab: $5 = 2$. Das ist nie wahr, also $L = \emptyset$.
  ---
  c) Wir ziehen $3x$ ab und addieren $1$: $x = 1$. Genau eine Lösung. Probe: $4 - 1 = 3 = 3\cdot 1$.
```

```aufgabe
id: gl-parameter
titel: Lineare Gleichung mit Parameter
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Gegeben ist die Gleichung $(a + 3)\,x = a^2 - 9$ mit einem reellen Parameter $a$.

  a) Löse die Gleichung für $a = 5$.

  b) Welche Lösungsmenge ergibt sich für $a = -3$?

  c) Gib die Lösung für alle $a \neq -3$ als Term in $a$ an.
teile:
  - typ: zahl
    label: 'a) $x$'
    loesung: "(25 - 9)/(5 + 3)"
    fehler:
      - wert: "16"
        meldung: 'Für $a = 5$ steht da $8x = 16$. Du musst noch durch $8$ dividieren.'
  - typ: auswahl
    label: 'b)'
    optionen:
      - '$L = \{0\}$'
      - '$L = \emptyset$'
      - '$L = \R$'
      - '$L = \{-3\}$'
    richtig: [2]
    fehler:
      - wert: 0
        meldung: 'Für $a = -3$ steht da $0\cdot x = 0$. Nicht nur $x = 0$ erfüllt das. Probiere $x = 7$.'
      - wert: 1
        meldung: 'Rechts steht $(-3)^2 - 9 = 0$. Die Gleichung $0\cdot x = 0$ ist also für jedes $x$ wahr, nicht für keines.'
      - wert: 3
        meldung: '$-3$ ist der Wert des Parameters $a$, nicht von $x$. Setze $a = -3$ ein und schau, was mit $x$ passiert.'
  - typ: term
    label: 'c) $x$ in Abhängigkeit von $a$'
    variable: a
    loesung: "a - 3"
    bereich: [0, 4]
    fehler:
      - wert: "a + 3"
        meldung: 'Es gilt $a^2 - 9 = (a - 3)(a + 3)$. Gekürzt wird der Faktor $(a + 3)$. Übrig bleibt der andere Faktor.'
hinweise:
  - 'Setze bei a) und b) den Wert von $a$ ein und rechne beide Seiten aus.'
  - 'Für c) zerlege $a^2 - 9$ mit der dritten binomischen Formel und kürze. Das ist nur für $a + 3 \neq 0$ erlaubt.'
loesung: |
  **Ansatz:** Durch den Koeffizienten $a + 3$ darf man nur dividieren, wenn er nicht null ist. Deshalb rechnen wir die
  Fälle getrennt.
  ---
  a) Für $a = 5$: $8x = 25 - 9 = 16$. Division durch $8$ ergibt $x = 2$.
  ---
  b) Für $a = -3$: $0\cdot x = 9 - 9 = 0$. Jede Zahl erfüllt das, also $L = \R$.
  ---
  c) Für $a \neq -3$: $x = \dfrac{a^2 - 9}{a + 3} = \dfrac{(a - 3)(a + 3)}{a + 3} = a - 3$. Kontrolle mit a): $5 - 3 = 2$.
```

```aufgabe
id: gl-tarif
titel: Zwei Tarife vergleichen
niveau: 2
lernziel: 1
kompetenz: modellieren
angabe: |
  Tarif A kostet monatlich $12$ Euro Grundgebühr plus $0{,}09$ Euro pro Gesprächsminute. Tarif B kostet $20$ Euro
  Grundgebühr plus $0{,}05$ Euro pro Minute.

  a) Bei welcher Gesprächsdauer kosten beide gleich viel?

  b) Welcher Tarif ist bei einer längeren Gesprächsdauer günstiger?
teile:
  - typ: zahl
    label: 'a) Gesprächsdauer'
    einheit: "min"
    loesung: "(20 - 12)/(0.09 - 0.05)"
    fehler:
      - wert: "(20 + 12)/(0.09 + 0.05)"
        meldung: 'Beim Gleichsetzen bringst du die $t$-Terme auf eine Seite und die Zahlen auf die andere. Dabei wird subtrahiert, nicht addiert.'
      - wert: "0.32"
        meldung: 'Aus $0{,}04\,t = 8$ folgt $t = 8 : 0{,}04$. Du hast multipliziert statt dividiert.'
  - typ: auswahl
    label: 'b) günstiger bei längerer Dauer'
    optionen: ['Tarif A', 'Tarif B']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Tarif A hat die kleinere Grundgebühr. Bei langen Gesprächen zählt aber der Minutenpreis stärker.'
hinweise:
  - 'Kosten als Term der Minuten $t$: $K_A = 12 + 0{,}09\,t$ und $K_B = 20 + 0{,}05\,t$.'
  - 'Setze $K_A = K_B$ und löse nach $t$.'
loesung: |
  **Modell:** $t$ ist die Gesprächsdauer in Minuten. Gleiche Kosten heißt $12 + 0{,}09\,t = 20 + 0{,}05\,t$.
  ---
  Wir subtrahieren $0{,}05\,t$ und $12$: $0{,}04\,t = 8$. Division durch $0{,}04$ ergibt $t = 200$ Minuten.
  Beide kosten dann $12 + 18 = 30$ Euro.
  ---
  Pro zusätzlicher Minute steigt A um $0{,}09$ Euro, B nur um $0{,}05$ Euro. **Antwort:** Bei genau $200$ Minuten kosten beide
  gleich viel, bei mehr als $200$ Minuten ist **Tarif B** günstiger. Kontrolle bei $300$ Minuten: A kostet $39$ Euro, B $35$ Euro.
```

```aufgabe
id: gl-linear-fehlersuche
titel: Fehler in einer Rechnung finden
niveau: 2
lernziel: 1
kompetenz: begruenden
angabe: |
  Ein Mitschüler löst $\dfrac{2x - 1}{3} - \dfrac{x - 4}{2} = 1$ so:

  Zeile 1: $2\,(2x - 1) - 3\,(x - 4) = 6$

  Zeile 2: $4x - 2 - 3x - 4 = 6$

  Zeile 3: $x - 6 = 6$, also $x = 12$.

  a) In welcher Zeile steckt der Fehler?

  b) Wie lautet die richtige Lösung?
teile:
  - typ: auswahl
    label: 'a) fehlerhafte Zeile'
    optionen: ['Zeile 1', 'Zeile 2', 'Zeile 3']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Zeile 1 stimmt: Der Hauptnenner ist $6$, und $6\cdot\tfrac{2x - 1}{3} = 2\,(2x - 1)$ sowie $6\cdot\tfrac{x - 4}{2} = 3\,(x - 4)$.'
      - wert: 2
        meldung: 'Zeile 3 folgt richtig aus Zeile 2. Der Fehler muss also vorher passiert sein. Prüfe $-3\cdot(-4)$.'
  - typ: zahl
    label: 'b) $x$'
    loesung: "-4"
    fehler:
      - wert: "12"
        meldung: 'Das ist das Ergebnis mit dem Vorzeichenfehler. Rechne $-3\cdot(-4)$ noch einmal.'
hinweise:
  - 'Prüfe jeden Schritt einzeln. Wo wird eine Klammer mit einem Minus davor aufgelöst?'
  - 'Es gilt $-3\cdot(x - 4) = -3x + 12$.'
loesung: |
  **Ansatz:** Wir prüfen jede Zeile. Zeile 1 ist richtig, denn mit dem Hauptnenner $6$ wird jeder Summand multipliziert.
  ---
  In Zeile 2 wurde $-3\,(x - 4)$ als $-3x - 4$ geschrieben. Richtig ist $-3x + 12$, weil $-3\cdot(-4) = +12$ ist. Der
  Fehler steckt also in **Zeile 2**.
  ---
  Richtig: $4x - 2 - 3x + 12 = 6$, also $x + 10 = 6$ und $x = -4$.
  ---
  **Probe:** $\tfrac{-9}{3} - \tfrac{-8}{2} = -3 + 4 = 1$. Es stimmt. Der falsche Wert $12$ ergibt dagegen
  $\tfrac{23}{3} - 4 \neq 1$.
```

```aufgabe
id: gl-linear-umkehr
titel: Den Parameter passend wählen
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: |
  Gegeben ist $k\,x + 3 = 2x + 7$ mit einem reellen Parameter $k$.

  a) Für welchen Wert von $k$ hat die Gleichung **keine** Lösung?

  b) Für welchen Wert von $k$ ist $x = 2$ eine Lösung?
teile:
  - typ: zahl
    label: 'a) $k$'
    loesung: "2"
    fehler:
      - wert: "0"
        meldung: 'Für $k = 0$ steht da $3 = 2x + 7$. Das hat die Lösung $x = -2$. Entscheidend ist der Koeffizient **nach** dem Sortieren.'
  - typ: zahl
    label: 'b) $k$'
    loesung: "4"
    fehler:
      - wert: "2"
        meldung: 'Für $k = 2$ hat die Gleichung gar keine Lösung. Setze $x = 2$ ein und löse dann nach $k$.'
hinweise:
  - 'Bring alles mit $x$ nach links: $(k - 2)\,x = 4$.'
  - 'Für a) muss der Koeffizient null sein, während rechts nicht null steht. Für b) setze $x = 2$ ein.'
loesung: |
  **Ansatz:** Wir sortieren so, dass alle $x$-Terme links stehen: $k\,x - 2x = 7 - 3$, also $(k - 2)\,x = 4$.
  ---
  a) Keine Lösung gibt es, wenn links $0\cdot x$ steht und rechts eine Zahl ungleich null. Das passiert für $k = 2$:
  Dann steht da $0 = 4$.
  ---
  b) Wir setzen $x = 2$ ein: $(k - 2)\cdot 2 = 4$, also $k - 2 = 2$ und $k = 4$.
  **Probe:** Für $k = 4$ und $x = 2$ ist links $4\cdot 2 + 3 = 11$ und rechts $2\cdot 2 + 7 = 11$.
```

```aufgabe
id: gl-parameter-fall
titel: Drei Fälle bei einem Parameter
niveau: 3
lernziel: 1
kompetenz: rechnen
angabe: |
  Löse die Gleichung $(a^2 - 4)\,x = a + 2$ für jeden reellen Parameter $a$.

  a) Welche Lösungsmenge ergibt sich für $a = 2$?

  b) Welche Lösungsmenge ergibt sich für $a = -2$?

  c) Gib die Lösung für alle übrigen $a$ als Term in $a$ an, so weit wie möglich gekürzt.
teile:
  - typ: auswahl
    label: 'a) $a = 2$'
    optionen: ['$L = \{0\}$', '$L = \emptyset$', '$L = \R$', '$L = \{\tfrac14\}$']
    richtig: [1]
    fehler:
      - wert: 2
        meldung: 'Für $a = 2$ steht rechts $2 + 2 = 4$, nicht $0$. Die Gleichung $0\cdot x = 4$ ist nie wahr.'
  - typ: auswahl
    label: 'b) $a = -2$'
    optionen: ['$L = \{0\}$', '$L = \emptyset$', '$L = \R$', '$L = \{-\tfrac14\}$']
    richtig: [2]
    fehler:
      - wert: 1
        meldung: 'Für $a = -2$ steht rechts $-2 + 2 = 0$. Die Gleichung $0\cdot x = 0$ ist für jedes $x$ wahr.'
  - typ: term
    label: 'c) $x$'
    variable: a
    loesung: "1/(a - 2)"
    bereich: [3, 6]
    fehler:
      - wert: "1/(a + 2)"
        meldung: 'Es gilt $a^2 - 4 = (a - 2)(a + 2)$. Gekürzt wird der Faktor $(a + 2)$, der auch im Zähler steht.'
      - wert: "a - 2"
        meldung: 'Beim Dividieren steht $a^2 - 4$ im **Nenner**. Nach dem Kürzen bleibt ein Bruch übrig.'
hinweise:
  - 'Zerlege den Koeffizienten: $a^2 - 4 = (a - 2)(a + 2)$. Für welche $a$ ist er null?'
  - 'Untersuche $a = 2$ und $a = -2$ getrennt. Für alle anderen $a$ darfst du dividieren und kürzen.'
loesung: |
  **Ansatz:** Der Koeffizient von $x$ ist $a^2 - 4 = (a - 2)(a + 2)$. Er ist null für $a = 2$ und für $a = -2$. Diese zwei
  Fälle müssen wir getrennt untersuchen, weil man dort nicht dividieren darf.
  ---
  **Fall $a = 2$:** $0\cdot x = 4$. Das ist nie wahr, also $L = \emptyset$.
  ---
  **Fall $a = -2$:** $0\cdot x = 0$. Das ist immer wahr, also $L = \R$.
  ---
  **Fall $a \neq \pm 2$:** Division ist erlaubt. $x = \dfrac{a + 2}{(a - 2)(a + 2)} = \dfrac{1}{a - 2}$.
  **Probe** mit $a = 3$: Die Formel liefert $x = 1$. Einsetzen: $(9 - 4)\cdot 1 = 5 = 3 + 2$.
gefuehrt:
  - text: Für welche Werte von $a$ ist der Koeffizient $a^2 - 4$ gleich null? Gib beide an, getrennt durch einen Strichpunkt.
    teil:
      typ: menge
      loesung: ["2", "-2"]
      fehler:
        - wert: ["2"]
          meldung: 'Auch $(-2)^2 - 4 = 0$. Ein Quadrat hat zwei Zahlen als Kandidaten.'
    erklaerung: '$a^2 - 4 = 0$ heißt $a^2 = 4$, also $a = 2$ oder $a = -2$. Nur dort darf man nicht dividieren.'
  - text: Setze $a = 2$ ein. Was steht rechts?
    teil: { typ: zahl, loesung: "4" }
    erklaerung: 'Für $a = 2$ entsteht $0\cdot x = 4$. Keine Zahl erfüllt das, also $L = \emptyset$.'
  - text: Setze $a = -2$ ein. Was steht rechts?
    teil: { typ: zahl, loesung: "0" }
    erklaerung: 'Für $a = -2$ entsteht $0\cdot x = 0$. Jede Zahl erfüllt das, also $L = \R$.'
  - text: Für alle anderen $a$ dividierst du durch $(a - 2)(a + 2)$ und kürzt. Welcher Term bleibt für $x$?
    teil: { typ: term, variable: a, loesung: "1/(a - 2)", bereich: [3, 6] }
    erklaerung: 'Der Faktor $(a + 2)$ steht oben und unten und kürzt sich: $x = \frac{1}{a - 2}$.'
```

```aufgabe
id: gl-linear-kerzen
titel: Zwei Kerzen brennen ab
niveau: 3
lernziel: 1
kompetenz: modellieren
angabe: |
  Zwei Kerzen werden gleichzeitig angezündet. Kerze A ist $24$ cm hoch und brennt $2$ cm pro Stunde ab. Kerze B ist
  $18$ cm hoch und brennt $1{,}2$ cm pro Stunde ab. Beide brennen gleichmäßig.

  a) Nach wie vielen Stunden sind beide gleich hoch? Wie hoch sind sie dann?

  b) Nach wie vielen Stunden ist Kerze A genau halb so hoch wie Kerze B? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    label: 'a) Zeit'
    einheit: "h"
    loesung: "6/0.8"
  - typ: zahl
    label: 'a) Höhe'
    einheit: "cm"
    loesung: "24 - 2*7.5"
  - typ: zahl
    label: 'b) Zeit'
    einheit: "h"
    loesung: "75/7"
    toleranz: 0.01
hinweise:
  - 'Die Höhe von A nach $t$ Stunden ist $24 - 2t$, die von B ist $18 - 1{,}2\,t$.'
  - 'Für b) lautet der Ansatz $24 - 2t = \tfrac12\,(18 - 1{,}2\,t)$. Prüfe am Ende, ob beide Kerzen dann noch brennen.'
loesung: |
  **Modell:** $t$ ist die Zeit in Stunden. Die Höhen sind $h_A(t) = 24 - 2t$ und $h_B(t) = 18 - 1{,}2\,t$ in cm. Kerze A
  ist nach $12$ h abgebrannt, Kerze B nach $15$ h. Sinnvoll ist also nur $0 \le t \le 12$.
  ---
  a) Gleich hoch: $24 - 2t = 18 - 1{,}2\,t$. Wir addieren $2t$ und subtrahieren $18$: $6 = 0{,}8\,t$, also $t = 7{,}5$ h.
  Die Höhe ist dann $24 - 15 = 9$ cm. Kontrolle: $18 - 1{,}2\cdot 7{,}5 = 9$ cm.
  ---
  b) Halb so hoch: $24 - 2t = \tfrac12\,(18 - 1{,}2\,t) = 9 - 0{,}6\,t$. Wir addieren $2t$ und subtrahieren $9$:
  $15 = 1{,}4\,t$, also $t = \tfrac{15}{1{,}4} = \tfrac{75}{7} \approx 10{,}71$ h.
  ---
  **Kontrolle:** Nach $10{,}71$ h ist A etwa $2{,}57$ cm hoch und B etwa $5{,}14$ cm. Das ist genau das Doppelte, und beide
  brennen noch. **Antwort:** Nach $7{,}5$ h sind beide $9$ cm hoch. Nach etwa $10{,}71$ h ist A halb so hoch wie B.
```

## Quadratische Gleichungen

```aufgabe
id: gl-quadr-check-binom
titel: Eine Summe quadrieren
niveau: 1
art: check
angabe: |
  Multipliziere aus: $(x + 3)^2$.
  Herkunft: [Kapitel 1, Abschnitt 1.12 Terme umformen](/lernen/mathe3/zahlen/terme-umformen-binomische-formeln-und-faktorisieren).
teile:
  - typ: term
    label: '$(x + 3)^2 =$'
    variable: x
    loesung: "x^2 + 6x + 9"
    fehler:
      - wert: "x^2 + 9"
        meldung: |
          Das **gemischte Glied** fehlt. Nach der ersten binomischen Formel ist $(a + b)^2 = a^2 + 2ab + b^2$.
          Rechne $2\cdot x\cdot 3$ aus.
      - wert: "x^2 + 3x + 9"
        meldung: |
          Das gemischte Glied ist $2ab$, also doppelt so groß: $2\cdot x\cdot 3 = 6x$.
hinweise:
  - 'Erste binomische Formel: $(a + b)^2 = a^2 + 2ab + b^2$ mit $a = x$ und $b = 3$.'
loesung: |
  Nach der ersten binomischen Formel mit $a = x$ und $b = 3$: $a^2 = x^2$, $2ab = 6x$, $b^2 = 9$.
  ---
  Also $(x + 3)^2 = x^2 + 6x + 9$. Probe mit $x = 1$: links $16$, rechts $1 + 6 + 9 = 16$.
```

Quadratische Gleichungen sind der wichtigste Gleichungstyp der Schulmathematik. Sie entstehen, sobald eine Fläche
gesucht ist, sobald ein Wurf beschrieben wird, und bei jeder Parabel, deren Nullstellen gesucht sind. In dieser
Lektion lernst du drei Wege: ohne Formel für Sonderfälle, mit der quadratischen Ergänzung und mit den
Lösungsformeln. Am Ende kannst du schon vor dem Rechnen sagen, wie viele Lösungen es gibt.

### Was eine quadratische Gleichung ist

:::definition[Quadratische Gleichung]
Eine Gleichung, die sich auf die Form
$$a\,x^2 + b\,x + c = 0 \qquad\text{mit } a \neq 0$$
bringen lässt, heißt **quadratische Gleichung**. Diese Form heißt **allgemeine Form**. Dabei ist $a\,x^2$ das
**quadratische Glied**, $b\,x$ das **lineare Glied** und $c$ das **konstante Glied**. Teilt man durch $a$, entsteht
die **Normalform** $x^2 + p\,x + q = 0$ mit $p = \tfrac{b}{a}$ und $q = \tfrac{c}{a}$.
:::

**Beispiel:** $x\,(x - 4) = 5$ ist quadratisch. Ausmultiplizieren und $5$ subtrahieren ergibt $x^2 - 4x - 5 = 0$. Hier
ist $a = 1$, $b = -4$ und $c = -5$. Die Gleichung $2x^2 - 3x + 1 = 0$ hat $a = 2$, $b = -3$ und $c = 1$. Ihre Normalform
ist $x^2 - 1{,}5\,x + 0{,}5 = 0$.

**Nichtbeispiele:** $x\,(x + 1) = x^2 + 4$ sieht quadratisch aus. Nach dem Ausmultiplizieren heben sich die $x^2$ aber
weg, und es bleibt die lineare Gleichung $x = 4$. Deshalb verlangt die Definition $a \neq 0$. Auch $x^3 = 2x$ ist nicht
quadratisch, weil eine dritte Potenz vorkommt.

### Sonderfälle ohne Formel

Zwei Sonderfälle löst du schneller und sicherer ohne Formel.

**Kein lineares Glied** ($b = 0$): Du stellst nach $x^2$ um und ziehst die Wurzel. Dabei gibt es zwei Lösungen, eine
positive und eine negative. Denn sowohl $5^2$ als auch $(-5)^2$ ergeben $25$.

**Kein konstantes Glied** ($c = 0$): Du hebst $x$ heraus und wendest den Nullproduktsatz aus
[2.1 Gleichungen und Äquivalenzumformungen](/lernen/mathe3/gleichungen/gleichungen-und-aequivalenzumformungen) an. Er
sagt: Ein Produkt ist genau dann null, wenn ein Faktor null ist.

:::beispiel[Zwei Sonderfälle]
**Ohne lineares Glied:** $2x^2 - 50 = 0$. Wir addieren $50$ und dividieren durch $2$: $x^2 = 25$. Die Zahlen mit Quadrat
$25$ sind $5$ und $-5$. Also $L = \{5; -5\}$. Man schreibt kurz $x_{1,2} = \pm 5$ und liest das „$x$ eins und $x$ zwei
sind plus oder minus $5$“.

**Ohne lineares Glied, keine Lösung:** $x^2 + 4 = 0$ ergibt $x^2 = -4$. Ein Quadrat einer reellen Zahl ist nie negativ.
Also $L = \emptyset$.

**Ohne konstantes Glied:** $3x^2 + 12x = 0$. Beide Summanden enthalten $3x$. Herausheben: $3x\,(x + 4) = 0$. Nach dem
Nullproduktsatz ist $x = 0$ oder $x = -4$.
:::

:::achtung[Die negative Lösung vergessen]
Eine typische Fehlrechnung:
$$x^2 = 25 \quad\Longrightarrow\quad x = \sqrt{25} = 5.$$
Die Lösung $x = -5$ fehlt, denn auch $(-5)^2 = 25$. Die Wurzel $\sqrt{25}$ ist zwar nur die positive Zahl $5$. Die
**Gleichung** $x^2 = 25$ hat aber zwei Lösungen. **Richtig:** $x^2 = 25$ ist gleichwertig mit $x = 5$ oder $x = -5$.
:::

### Die quadratische Ergänzung

Was tun, wenn alle drei Glieder vorkommen, etwa bei $x^2 + 6x = 7$? Die Idee: Wir ergänzen die linke Seite so, dass
eine binomische Formel entsteht. Dann steht links ein Quadrat, und wir können wie im Sonderfall die Wurzel ziehen.

Die erste binomische Formel lautet $(x + d)^2 = x^2 + 2d\,x + d^2$. Vergleiche mit $x^2 + 6x$: Es ist $2d = 6$, also
$d = 3$. Es fehlt nur noch $d^2 = 9$. Diese Zahl addieren wir auf **beiden** Seiten.

:::beispiel[Lösen durch quadratische Ergänzung]
Gesucht ist die Lösung von $x^2 + 6x = 7$.

1. **Ergänzen:** Die Hälfte von $6$ ist $3$, ihr Quadrat ist $9$. Wir addieren $9$ auf beiden Seiten: $x^2 + 6x + 9 = 16$.
2. **Binomische Formel:** Links steht jetzt $(x + 3)^2$. Also $(x + 3)^2 = 16$.
3. **Wurzel ziehen, beide Vorzeichen:** $x + 3 = 4$ oder $x + 3 = -4$.
4. **Auflösen:** $x = 1$ oder $x = -7$.

**Probe:** $1 + 6 = 7$ und $49 - 42 = 7$. Beide Lösungen stimmen.
:::

### Die Lösungsformeln

Führt man die quadratische Ergänzung einmal allgemein mit Buchstaben durch, erhält man eine Formel. Sie erspart das
Ergänzen bei jeder einzelnen Gleichung.

:::satz[Kleine Lösungsformel]
Die Gleichung $x^2 + p\,x + q = 0$ hat die reellen Lösungen
$$x_{1,2} = -\frac{p}{2} \pm \sqrt{\left(\frac{p}{2}\right)^2 - q},$$
sofern $D = \left(\tfrac{p}{2}\right)^2 - q \geq 0$ ist. Für $D < 0$ gibt es keine reelle Lösung. Dabei ist $p$ die Zahl vor
$x$ und $q$ die Zahl ohne $x$. Das Zeichen $\pm$ liest man „plus oder minus“: Es steht für zwei Rechnungen.
Der Buchstabe $D$ steht hier für die **Diskriminante**, den Ausdruck unter der Wurzel. Er hat nichts mit der
Definitionsmenge $D$ aus [2.1](/lernen/mathe3/gleichungen/gleichungen-und-aequivalenzumformungen) zu tun.
:::

:::beweis
Wir ergänzen quadratisch wie im Beispiel. Die Hälfte von $p$ ist $\tfrac{p}{2}$. Es gilt
$x^2 + p\,x = \left(x + \tfrac{p}{2}\right)^2 - \left(\tfrac{p}{2}\right)^2$, wie man durch Ausmultiplizieren prüft. Damit wird
$x^2 + p\,x + q = 0$ zu
$$\left(x + \frac{p}{2}\right)^2 = \left(\frac{p}{2}\right)^2 - q = D.$$
Links steht ein Quadrat, und das ist nie negativ. Ist $D < 0$, gibt es also keine Lösung. Ist $D \geq 0$, folgt
$x + \tfrac{p}{2} = \sqrt D$ oder $x + \tfrac{p}{2} = -\sqrt D$. Wir subtrahieren $\tfrac{p}{2}$ und erhalten die Formel.
:::

:::satz[Große Lösungsformel]
Die Gleichung $a\,x^2 + b\,x + c = 0$ mit $a \neq 0$ hat die reellen Lösungen
$$x_{1,2} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a},$$
sofern $\Delta = b^2 - 4ac \geq 0$ ist. Das Zeichen $\Delta$ ist der griechische Großbuchstabe Delta.
:::

Die große Formel entsteht aus der kleinen, wenn man $p = \tfrac{b}{a}$ und $q = \tfrac{c}{a}$ einsetzt und vereinfacht.
Welche Formel du verwendest, ist Geschmackssache. Die große erspart das Dividieren durch $a$ und damit Brüche.
Die kleine ist bei $a = 1$ etwas kürzer.

:::beispiel[Beide Formeln anwenden]
**Kleine Formel:** $x^2 - 2x - 8 = 0$. Es ist $p = -2$ und $q = -8$. Also $-\tfrac{p}{2} = 1$ und
$D = 1^2 - (-8) = 9$. Damit $x_{1,2} = 1 \pm 3$, also $x_1 = 4$ und $x_2 = -2$.

**Große Formel:** $2x^2 + 3x - 2 = 0$. Es ist $a = 2$, $b = 3$ und $c = -2$. Also
$\Delta = 9 - 4\cdot 2\cdot(-2) = 9 + 16 = 25$. Damit $x_{1,2} = \tfrac{-3 \pm 5}{4}$, also $x_1 = \tfrac{2}{4} = \tfrac12$ und
$x_2 = \tfrac{-8}{4} = -2$.

**Probe** für $x = \tfrac12$: $2\cdot\tfrac14 + \tfrac32 - 2 = \tfrac12 + \tfrac32 - 2 = 0$.
:::

:::beispiel[Ein Gemüsebeet]
Ein rechteckiges Beet ist $3$ m länger als breit und hat eine Fläche von $40$ m². Wie breit ist es?

1. **Variable:** $x$ ist die Breite in m. Dann ist die Länge $x + 3$ m.
2. **Gleichung:** Fläche gleich Länge mal Breite: $x\,(x + 3) = 40$, also $x^2 + 3x - 40 = 0$.
3. **Kleine Formel:** $p = 3$, $q = -40$. $D = 1{,}5^2 + 40 = 42{,}25$ und $\sqrt{D} = 6{,}5$. Also
   $x_{1,2} = -1{,}5 \pm 6{,}5$, das heißt $x_1 = 5$ und $x_2 = -8$.
4. **Deuten:** Eine Breite ist positiv. $x_2 = -8$ scheidet aus.

**Antwort:** Das Beet ist $5$ m breit und $8$ m lang. Kontrolle: $5\cdot 8 = 40$ m².
:::

:::achtung[Vorzeichenfehler bei p]
Eine typische Fehlrechnung bei $x^2 - 2x - 8 = 0$:
$$x_{1,2} = -1 \pm \sqrt{1 + 8} = -1 \pm 3 \quad\Longrightarrow\quad x_1 = 2,\; x_2 = -4.$$
Hier wurde $p = 2$ statt $p = -2$ eingesetzt. Das Vorzeichen gehört zu $p$. **Richtig:** $p = -2$, also $-\tfrac{p}{2} = +1$
und $x_{1,2} = 1 \pm 3$. Eine Probe deckt den Fehler sofort auf: $2^2 - 2\cdot 2 - 8 = -8 \neq 0$.
:::

:::achtung[Nicht alles auf eine Seite gebracht]
Eine typische Fehlrechnung bei $x^2 + 3x = 10$:
$$p = 3,\; q = 10 \quad\Longrightarrow\quad D = 2{,}25 - 10 < 0 \quad\Longrightarrow\quad \text{keine Lösung}.$$
Die Formel gilt nur, wenn **rechts null** steht. **Richtig:** Zuerst $10$ subtrahieren, $x^2 + 3x - 10 = 0$. Dann ist
$q = -10$, $D = 2{,}25 + 10 = 12{,}25$, und $x_{1,2} = -1{,}5 \pm 3{,}5$. Also $x = 2$ oder $x = -5$.
:::

### Die Diskriminante

Der Ausdruck unter der Wurzel entscheidet, wie viele Lösungen es gibt. Er heißt **Diskriminante**. Das kommt vom
lateinischen Wort für „unterscheiden“: Er unterscheidet die drei möglichen Fälle.

Dabei ist $D = \left(\tfrac{p}{2}\right)^2 - q$ bei der kleinen und $\Delta = b^2 - 4ac$ bei der großen Formel.

| Diskriminante | reelle Lösungen | Parabel |
|---|---|---|
| größer als $0$ | zwei verschiedene | schneidet die $x$-Achse zweimal. |
| gleich $0$ | genau eine | berührt die $x$-Achse im Scheitel. |
| kleiner als $0$ | keine | liegt ganz über oder ganz unter der Achse. |

Warum ist das so? Ist die Diskriminante positiv, ergeben $+\sqrt D$ und $-\sqrt D$ zwei verschiedene Werte. Ist sie
null, fallen beide Werte zusammen. Ist sie negativ, gibt es keine reelle Wurzel. In
[Kapitel 15](/lernen/mathe3/komplexe-zahlen) wirst du sehen, dass es dann zwei komplexe Lösungen gibt.

```plot
x: [-2.5, 4.5]
y: [-4.5, 5]
achsen: { x: "x", y: "y" }
graphen:
  - { f: "x^2 - 2*x - 3", label: "D > 0", farbe: 0 }
  - { f: "x^2 - 2*x + 1", label: "D = 0", farbe: 1 }
  - { f: "x^2 - 2*x + 3", label: "D < 0", farbe: 2 }
punkte:
  - { x: -1, y: 0, farbe: 0 }
  - { x: 3, y: 0, farbe: 0 }
  - { x: 1, y: 0, farbe: 1 }
beschriftung: Drei Parabeln y = x² − 2x + q mit q = −3, q = 1 und q = 3. Die erste schneidet die x-Achse bei −1 und 3, die zweite berührt sie bei x = 1, die dritte trifft sie nie.
```

```aufgabe
id: gl-quadr-check-vorhersage
titel: Was passiert, wenn c wächst?
niveau: 1
art: check
angabe: |
  Betrachte die Parabel $y = x^2 - 2x + c$. Was passiert mit ihren Nullstellen, wenn $c$ von $-3$ langsam auf $3$
  steigt? Entscheide zuerst, dann prüfe es mit dem Schieberegler im Widget direkt danach.
teile:
  - typ: auswahl
    optionen:
      - 'Die Parabel wandert nach oben. Die zwei Nullstellen rücken zusammen, fallen zusammen und verschwinden dann.'
      - 'Die Parabel wird schmaler, die Nullstellen bleiben gleich.'
      - 'Die Parabel wandert nach rechts, es bleiben immer zwei Nullstellen.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Die Form der Parabel hängt von $a$ ab, nicht von $c$. Eine größere Zahl $c$ addiert überall denselben Wert.'
      - wert: 2
        meldung: 'Wenn zu jedem $y$-Wert dieselbe Zahl dazukommt, verschiebt sich der Graph senkrecht, nicht waagrecht.'
hinweise:
  - 'Ein größeres $c$ erhöht jeden Funktionswert um denselben Betrag. Wohin bewegt sich dann der Graph?'
loesung: |
  Ein größeres $c$ addiert zu jedem Funktionswert dieselbe Zahl. Die Parabel wird also senkrecht nach oben verschoben.
  ---
  Die Diskriminante ist $\Delta = 4 - 4c$. Für $c < 1$ ist sie positiv (zwei Nullstellen), bei $c = 1$ null (eine), für
  $c > 1$ negativ (keine).
```

```widget
name: parameter
titel: Koeffizienten und Nullstellen einer Parabel
props:
  f: "a*x^2 + b*x + c"
  parameter:
    - { name: a, min: -3, max: 3, step: 0.5, wert: 1 }
    - { name: b, min: -6, max: 6, step: 0.5, wert: -2 }
    - { name: c, min: -6, max: 6, step: 0.5, wert: -3 }
  x: [-6, 6]
  y: [-8, 8]
```

**Arbeitsauftrag:** Lass $a = 1$ und $b = -2$ fest und zieh $c$ langsam nach oben. Beobachte, bei welchem Wert von $c$
die zwei Nullstellen zu einer verschmelzen. Erkläre dann mit $\Delta = b^2 - 4ac = 4 - 4c$, warum das genau bei
$c = 1$ passiert.

:::merke[Quadratische Gleichung lösen]
1. Auf die Form $a\,x^2 + b\,x + c = 0$ bringen. Rechts muss null stehen.
2. Fehlt $b$: nach $x^2$ umstellen und die Wurzel ziehen, an beide Vorzeichen denken. Fehlt $c$: $x$ herausheben.
3. Sonst die Diskriminante berechnen. Ist sie negativ, gibt es keine reelle Lösung, und du bist fertig.
4. Lösungsformel anwenden. Die Vorzeichen von $p$, $q$ beziehungsweise $a$, $b$, $c$ gehören mit zur Zahl.
5. Probe durch Einsetzen oder mit dem Satz von Vieta aus
   [2.4 Satz von Vieta und Gleichungen mit Parameter](/lernen/mathe3/gleichungen/satz-von-vieta-und-gleichungen-mit-parameter).
:::

```reflexion
frage: Erkläre ohne Formel, warum die Gleichung $(x - 2)^2 = -9$ keine reelle Lösung hat, die Gleichung $(x - 2)^2 = 9$ aber zwei.
antwort: |
  Links steht jeweils ein Quadrat. Das Quadrat einer reellen Zahl ist nie negativ. Deshalb kann $(x - 2)^2$ nie den Wert
  $-9$ annehmen, und die erste Gleichung hat keine Lösung. Bei der zweiten Gleichung gibt es zwei Zahlen mit Quadrat $9$,
  nämlich $3$ und $-3$. Also ist $x - 2 = 3$ oder $x - 2 = -3$, und es gibt die zwei Lösungen $5$ und $-1$. Genau diese
  Überlegung steckt in der Diskriminante: Sie ist die Zahl, die nach der quadratischen Ergänzung rechts steht.
```

```aufgabe
id: gl-quadr-sonderfaelle
titel: Quadratische Gleichungen ohne Formel
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Löse ohne Lösungsformel. Gib alle Lösungen ein, getrennt durch einen Strichpunkt. Gibt es keine, gib `leer` ein.

  a) $2x^2 - 72 = 0$ b) $4x^2 + 28x = 0$ c) $x^2 + 16 = 0$
teile:
  - typ: menge
    label: 'a) $L$'
    loesung: ["6", "-6"]
    fehler:
      - wert: ["6"]
        meldung: 'Auch $(-6)^2 = 36$. Die Gleichung $x^2 = 36$ hat zwei Lösungen.'
      - wert: ["sqrt(72)", "-sqrt(72)"]
        meldung: 'Vor dem Wurzelziehen musst du durch $2$ dividieren. Es ist $x^2 = 36$, nicht $x^2 = 72$.'
  - typ: menge
    label: 'b) $L$'
    loesung: ["0", "-7"]
    fehler:
      - wert: ["-7"]
        meldung: 'Der herausgehobene Faktor $4x$ ist auch null, wenn $x = 0$ ist. Diese Lösung fehlt.'
      - wert: ["0", "7"]
        meldung: 'Aus $x + 7 = 0$ folgt $x = -7$. Prüfe das Vorzeichen.'
  - typ: menge
    label: 'c) $L$'
    loesung: []
    fehler:
      - wert: ["4", "-4"]
        meldung: 'Setze $4$ ein: $16 + 16 = 32$, nicht $0$. Die Gleichung verlangt $x^2 = -16$, und das kann kein reelles Quadrat sein.'
hinweise:
  - 'Bei a) und c) nach $x^2$ umstellen, bei b) $4x$ herausheben.'
loesung: |
  a) Wir addieren $72$ und dividieren durch $2$: $x^2 = 36$. Die Zahlen mit Quadrat $36$ sind $6$ und $-6$. Also $L = \{6; -6\}$.
  ---
  b) Herausheben: $4x\,(x + 7) = 0$. Nach dem Nullproduktsatz ist $x = 0$ oder $x = -7$.
  ---
  c) $x^2 = -16$. Ein reelles Quadrat ist nie negativ, also $L = \emptyset$.
```

```aufgabe
id: gl-quadr-formel
titel: Lösungsformel anwenden
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Löse mit einer Lösungsformel. Gib die Lösungen ein, getrennt durch einen Strichpunkt.

  a) $x^2 - 2x - 15 = 0$ b) $3x^2 + 5x - 2 = 0$
teile:
  - typ: menge
    label: 'a) $L$'
    loesung: ["5", "-3"]
    fehler:
      - wert: ["3", "-5"]
        meldung: 'Vorzeichen von $p$ prüfen: $p = -2$, also ist $-\tfrac{p}{2} = +1$, nicht $-1$.'
  - typ: menge
    label: 'b) $L$'
    loesung: ["1/3", "-2"]
    fehler:
      - wert: ["2", "-12"]
        meldung: 'Im Nenner steht $2a = 6$. Du hast vermutlich den Bruch vergessen und nur den Zähler $-5 \pm 7$ ausgerechnet.'
      - wert: ["-1/3", "2"]
        meldung: 'Vor der Wurzel steht $-b = -5$, weil $b = +5$ ist. Prüfe das Vorzeichen.'
hinweise:
  - 'a) $p = -2$, $q = -15$. b) große Formel mit $a = 3$, $b = 5$, $c = -2$.'
loesung: |
  a) Kleine Formel mit $p = -2$, $q = -15$: $D = 1 + 15 = 16$, $\sqrt D = 4$. Also $x_{1,2} = 1 \pm 4$, das heißt $x_1 = 5$ und $x_2 = -3$.
  ---
  b) Große Formel: $\Delta = 25 - 4\cdot 3\cdot(-2) = 25 + 24 = 49$, $\sqrt\Delta = 7$. Also $x_{1,2} = \tfrac{-5 \pm 7}{6}$,
  das heißt $x_1 = \tfrac{2}{6} = \tfrac13$ und $x_2 = \tfrac{-12}{6} = -2$.
  ---
  Probe b) für $x = \tfrac13$: $3\cdot\tfrac19 + \tfrac53 - 2 = \tfrac13 + \tfrac53 - 2 = 0$. Es stimmt.
```

```aufgabe
id: gl-quadr-ergaenzen
titel: Quadratisch ergänzen
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Löse $x^2 + 8x = 9$ durch quadratische Ergänzung.

  a) Welche Zahl addierst du auf beiden Seiten?

  b) Gib alle Lösungen ein, getrennt durch einen Strichpunkt.
teile:
  - typ: zahl
    label: 'a) Ergänzung'
    loesung: "16"
    fehler:
      - wert: "64"
        meldung: 'Du brauchst das Quadrat der **Hälfte** von $8$, also $4^2$, nicht $8^2$.'
      - wert: "4"
        meldung: '$4$ ist die Hälfte von $8$. Ergänzt wird aber ihr **Quadrat**, damit $(x + 4)^2$ entsteht.'
  - typ: menge
    label: 'b) $L$'
    loesung: ["1", "-9"]
    fehler:
      - wert: ["1"]
        meldung: 'Aus $(x + 4)^2 = 25$ folgt auch $x + 4 = -5$. Die zweite Lösung fehlt.'
      - wert: ["9", "-1"]
        meldung: 'Aus $x + 4 = 5$ folgt $x = 5 - 4$. Prüfe die Vorzeichen beim Auflösen.'
hinweise:
  - 'Die Hälfte von $8$ ist $4$. Mit $4^2 = 16$ wird links $(x + 4)^2$.'
loesung: |
  **Ansatz:** Links soll die binomische Formel $(x + 4)^2 = x^2 + 8x + 16$ entstehen. Dafür fehlt $16$. Wir addieren $16$ auf
  beiden Seiten: $x^2 + 8x + 16 = 25$, also $(x + 4)^2 = 25$.
  ---
  Zwei Zahlen haben das Quadrat $25$: $x + 4 = 5$ oder $x + 4 = -5$. Also $x = 1$ oder $x = -9$.
  **Probe:** $1 + 8 = 9$ und $81 - 72 = 9$.
```

```aufgabe
id: gl-diskriminante-anzahl
titel: Anzahl der Lösungen vorhersagen
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  Bestimme mit der Diskriminante, wie viele reelle Lösungen jede Gleichung hat. Löse die Gleichungen nicht.

  a) $x^2 - 6x + 10 = 0$ b) $4x^2 - 12x + 9 = 0$ c) $2x^2 + x - 6 = 0$
teile:
  - typ: zahl
    label: 'a) Anzahl'
    loesung: "0"
    fehler:
      - wert: "2"
        meldung: 'Rechne $D = \left(\tfrac{p}{2}\right)^2 - q = 9 - 10$ aus. Welches Vorzeichen hat das Ergebnis?'
  - typ: zahl
    label: 'b) Anzahl'
    loesung: "1"
    fehler:
      - wert: "2"
        meldung: '$\Delta = (-12)^2 - 4\cdot 4\cdot 9 = 144 - 144$. Bei $\Delta = 0$ fallen die zwei Lösungen zu einer zusammen.'
      - wert: "0"
        meldung: '$(-12)^2$ ist $+144$, nicht $-144$. Das Quadrat einer negativen Zahl ist positiv.'
  - typ: zahl
    label: 'c) Anzahl'
    loesung: "2"
    fehler:
      - wert: "0"
        meldung: 'Bei $c = -6$ wird $-4ac = -4\cdot 2\cdot(-6) = +48$. Minus mal minus ergibt plus.'
hinweise:
  - 'Bei a) die kleine Formel: $D = \left(\tfrac{p}{2}\right)^2 - q$. Bei b) und c) $\Delta = b^2 - 4ac$.'
  - 'Nur das Vorzeichen zählt: positiv heißt zwei, null heißt eine, negativ heißt keine Lösung.'
loesung: |
  **Ansatz:** Das Vorzeichen der Diskriminante entscheidet über die Anzahl der Lösungen. Wir müssen also nur sie berechnen.
  ---
  a) $p = -6$, $q = 10$: $D = 9 - 10 = -1 < 0$. Keine reelle Lösung.
  ---
  b) $\Delta = 144 - 144 = 0$. Genau eine Lösung, nämlich $x = \tfrac{12}{8} = 1{,}5$.
  ---
  c) $\Delta = 1 + 48 = 49 > 0$. Zwei Lösungen. Kontrolle: Sie lauten $\tfrac{-1 \pm 7}{4}$, also $1{,}5$ und $-2$.
```

```aufgabe
id: gl-quadr-umformen
titel: Erst umformen, dann lösen
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Löse $(x - 2)(x + 3) = 14$. Gib die Lösungen ein, getrennt durch einen Strichpunkt.
teile:
  - typ: menge
    label: '$L$'
    loesung: ["4", "-5"]
    fehler:
      - wert: ["16", "11"]
        meldung: |
          Du hast $x - 2 = 14$ und $x + 3 = 14$ gesetzt. Der Nullproduktsatz gilt aber nur, wenn rechts **null** steht.
          Multipliziere aus und bring die $14$ nach links.
      - wert: ["2", "-3"]
        meldung: 'Das sind die Lösungen von $(x - 2)(x + 3) = 0$. Rechts steht aber $14$.'
hinweise:
  - 'Multipliziere links aus und subtrahiere $14$ auf beiden Seiten.'
  - 'Es entsteht $x^2 + x - 20 = 0$. Verwende die kleine Formel mit $p = 1$, $q = -20$.'
loesung: |
  **Ansatz:** Rechts steht nicht null, also darf man die Faktoren nicht einzeln gleich $14$ setzen. Wir multiplizieren aus:
  $x^2 + 3x - 2x - 6 = 14$, also $x^2 + x - 6 = 14$.
  ---
  Wir subtrahieren $14$: $x^2 + x - 20 = 0$. Kleine Formel mit $p = 1$, $q = -20$: $D = 0{,}25 + 20 = 20{,}25$, $\sqrt D = 4{,}5$.
  ---
  $x_{1,2} = -0{,}5 \pm 4{,}5$, also $x_1 = 4$ und $x_2 = -5$. **Probe:** $(4 - 2)(4 + 3) = 2\cdot 7 = 14$ und
  $(-7)\cdot(-2) = 14$.
```

```aufgabe
id: gl-quadr-fehler
titel: Wo steckt der Fehler?
niveau: 2
lernziel: 2
kompetenz: begruenden
angabe: |
  Jemand löst $2x^2 - 8x + 6 = 0$ so: „$p = -8$, $q = 6$, also $x_{1,2} = 4 \pm \sqrt{16 - 6} = 4 \pm \sqrt{10}$.“

  a) Was ist falsch?

  b) Wie lautet die richtige Lösungsmenge? Gib die Lösungen ein, getrennt durch einen Strichpunkt.
teile:
  - typ: auswahl
    label: 'a) Fehler'
    optionen:
      - 'Die kleine Formel gilt nur für $x^2 + p\,x + q = 0$. Man hätte zuerst durch $2$ dividieren müssen.'
      - 'Das Vorzeichen von $p$ ist falsch.'
      - 'Unter der Wurzel müsste $16 + 6$ stehen.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$p = -8$ hätte man richtig abgelesen, wenn vor $x^2$ eine $1$ stünde. Schau auf die Zahl vor $x^2$.'
      - wert: 2
        meldung: 'In der Formel steht $-q$, und $q = 6$ wird abgezogen. Der Fehler liegt woanders: Was steht vor $x^2$?'
  - typ: menge
    label: 'b) $L$'
    loesung: ["1", "3"]
    fehler:
      - wert: ["4 + sqrt(10)", "4 - sqrt(10)"]
        meldung: 'Das ist das Ergebnis mit dem Fehler. Teile zuerst durch $2$: $x^2 - 4x + 3 = 0$.'
hinweise:
  - 'Schau, welche Zahl vor $x^2$ steht. Für welche Form ist die kleine Formel gemacht?'
  - 'Dividiere durch $2$ und verwende dann $p = -4$, $q = 3$.'
loesung: |
  **Ansatz:** Die kleine Formel setzt die Normalform $x^2 + p\,x + q = 0$ voraus, also die Zahl $1$ vor $x^2$. Hier steht $2$.
  ---
  a) Der Fehler: Man hätte zuerst durch $2$ dividieren müssen. Dann ist $x^2 - 4x + 3 = 0$, also $p = -4$ und $q = 3$.
  ---
  b) $D = 4 - 3 = 1$, also $x_{1,2} = 2 \pm 1$. Das ergibt $x_1 = 3$ und $x_2 = 1$.
  ---
  **Probe:** $2\cdot 9 - 24 + 6 = 0$ und $2 - 8 + 6 = 0$. Mit der großen Formel kommt dasselbe heraus:
  $\tfrac{8 \pm \sqrt{64 - 48}}{4} = \tfrac{8 \pm 4}{4}$.
```

```aufgabe
id: gl-quadr-rechteck
titel: Rechteck aus Fläche und Umfang
niveau: 3
lernziel: 2
kompetenz: modellieren
angabe: |
  Ein rechteckiges Grundstück hat den Flächeninhalt $60$ m² und den Umfang $34$ m.

  a) Bestimme die beiden Seitenlängen. Gib sie ein, getrennt durch einen Strichpunkt.

  b) Wie lang ist die Diagonale?
teile:
  - typ: menge
    label: 'a) Seitenlängen in m'
    loesung: ["12", "5"]
  - typ: zahl
    label: 'b) Diagonale'
    einheit: "m"
    loesung: "sqrt(12^2 + 5^2)"
hinweise:
  - 'Der halbe Umfang ist die Summe zweier Seiten: $a + b = 17$. Außerdem ist $a\cdot b = 60$.'
  - 'Setze $b = 17 - a$ in $a\cdot b = 60$ ein. Es entsteht eine quadratische Gleichung in $a$.'
loesung: |
  **Modell:** Die Seiten heißen $a$ und $b$ in m. Der Umfang ist $2a + 2b = 34$, also $a + b = 17$. Die Fläche ist $a\,b = 60$.
  ---
  Aus der ersten Gleichung folgt $b = 17 - a$. Eingesetzt: $a\,(17 - a) = 60$, also $17a - a^2 = 60$. Umgeordnet:
  $a^2 - 17a + 60 = 0$.
  ---
  Kleine Formel mit $p = -17$, $q = 60$: $D = 72{,}25 - 60 = 12{,}25$, $\sqrt D = 3{,}5$. Also $a = 8{,}5 \pm 3{,}5$, das heißt
  $a = 12$ oder $a = 5$. Die andere Seite ist dann $5$ beziehungsweise $12$.
  ---
  **Antwort:** Die Seiten sind $12$ m und $5$ m lang. Probe: $12\cdot 5 = 60$ und $2\cdot(12 + 5) = 34$. Die Diagonale ist nach
  Pythagoras $\sqrt{144 + 25} = \sqrt{169} = 13$ m.
```

```aufgabe
id: gl-quadr-wurf
titel: Ein Stein von der Brücke
niveau: 3
lernziel: 2
kompetenz: anwenden
angabe: |
  Ein Stein wird von einer Brücke senkrecht nach oben geworfen. Seine Höhe über dem Wasser nach $t$ Sekunden ist
  ungefähr $h(t) = 20 + 15\,t - 5\,t^2$ in Metern.

  a) Nach wie vielen Sekunden trifft der Stein auf das Wasser?

  b) Zu welchen Zeitpunkten ist der Stein genau $30$ m hoch? Gib beide an, getrennt durch einen Strichpunkt.

  c) Erreicht der Stein eine Höhe von $35$ m? Begründe mit der Diskriminante.
teile:
  - typ: zahl
    label: 'a) Zeit'
    einheit: "s"
    loesung: "4"
  - typ: menge
    label: 'b) Zeitpunkte in s'
    loesung: ["1", "2"]
  - typ: auswahl
    label: 'c)'
    optionen:
      - 'Ja, weil die Diskriminante positiv ist.'
      - 'Nein, weil die Diskriminante negativ ist.'
      - 'Ja, genau einmal, weil die Diskriminante null ist.'
    richtig: [1]
hinweise:
  - 'Setze jeweils $h(t)$ gleich der gesuchten Höhe und bring alles auf eine Seite.'
  - 'Dividiere durch $-5$ beziehungsweise $5$, damit die Normalform entsteht. Bei c) entsteht $t^2 - 3t + 3 = 0$.'
loesung: |
  **Ansatz:** Jede Frage nach einer Höhe führt auf $h(t) = \text{Höhe}$. Das ist eine quadratische Gleichung in $t$.
  ---
  a) Wasser heißt $h = 0$: $20 + 15t - 5t^2 = 0$. Division durch $-5$: $t^2 - 3t - 4 = 0$. Mit $p = -3$, $q = -4$ ist
  $D = 2{,}25 + 4 = 6{,}25$, also $t = 1{,}5 \pm 2{,}5$. Das ergibt $t = 4$ oder $t = -1$. Eine negative Zeit liegt vor dem Wurf.
  Der Stein trifft nach $4$ s auf.
  ---
  b) $20 + 15t - 5t^2 = 30$, also $-5t^2 + 15t - 10 = 0$. Division durch $-5$: $t^2 - 3t + 2 = 0$. $D = 2{,}25 - 2 = 0{,}25$,
  also $t = 1{,}5 \pm 0{,}5$. Der Stein ist nach $1$ s auf dem Weg nach oben und nach $2$ s auf dem Weg nach unten $30$ m hoch.
  ---
  c) $20 + 15t - 5t^2 = 35$ führt auf $t^2 - 3t + 3 = 0$. $D = 2{,}25 - 3 = -0{,}75 < 0$. Es gibt keine Lösung.
  **Antwort:** Der Stein erreicht $35$ m nie. Seine größte Höhe hat er bei $t = 1{,}5$ s mit $h = 31{,}25$ m.
gefuehrt:
  - text: Stelle für a) die Gleichung $h(t) = 0$ auf und dividiere durch $-5$. Welche Zahl steht dann als $q$ in der Normalform?
    teil:
      typ: zahl
      loesung: "-4"
      fehler:
        - wert: "4"
          meldung: 'Beim Dividieren von $+20$ durch $-5$ ändert sich das Vorzeichen: $20 : (-5) = -4$.'
    erklaerung: 'Aus $-5t^2 + 15t + 20 = 0$ wird $t^2 - 3t - 4 = 0$. Also $p = -3$ und $q = -4$.'
  - text: Berechne die Diskriminante $D = \left(\tfrac{p}{2}\right)^2 - q$.
    teil: { typ: zahl, loesung: "6.25" }
    erklaerung: '$D = 1{,}5^2 + 4 = 2{,}25 + 4 = 6{,}25$, und $\sqrt{D} = 2{,}5$.'
  - text: Welche Lösung ist im Sachzusammenhang sinnvoll?
    teil: { typ: zahl, loesung: "4" }
    erklaerung: '$t = 1{,}5 \pm 2{,}5$ ergibt $4$ und $-1$. Eine negative Zeit liegt vor dem Wurf und scheidet aus.'
  - text: Warum gibt es bei b) zwei passende Zeitpunkte? Überlege, bevor du weiterklickst.
    erklaerung: 'Der Stein fliegt erst nach oben und dann wieder nach unten. Die Höhe $30$ m durchfliegt er dabei zweimal.'
```

## Satz von Vieta und Gleichungen mit Parameter

```aufgabe
id: gl-vieta-check-ausmultiplizieren
titel: Zwei Klammern ausmultiplizieren
niveau: 1
art: check
angabe: |
  Multipliziere aus: $(x - 2)(x - 5)$.
  Herkunft: [Kapitel 1, Abschnitt 1.12 Terme umformen](/lernen/mathe3/zahlen/terme-umformen-binomische-formeln-und-faktorisieren).
teile:
  - typ: term
    label: '$(x - 2)(x - 5) =$'
    variable: x
    loesung: "x^2 - 7x + 10"
    fehler:
      - wert: "x^2 + 10"
        meldung: 'Jeder Summand der ersten Klammer wird mit jedem der zweiten multipliziert. Es fehlen die gemischten Produkte $x\cdot(-5)$ und $(-2)\cdot x$.'
      - wert: "x^2 - 7x - 10"
        meldung: '$(-2)\cdot(-5) = +10$. Minus mal minus ergibt plus.'
hinweise:
  - 'Jeder mit jedem: $x\cdot x$, $x\cdot(-5)$, $(-2)\cdot x$, $(-2)\cdot(-5)$.'
loesung: |
  Jeder Summand der ersten Klammer wird mit jedem der zweiten multipliziert: $x^2 - 5x - 2x + 10$.
  ---
  Zusammenfassen ergibt $x^2 - 7x + 10$. Probe mit $x = 0$: links $(-2)(-5) = 10$, rechts $10$.
```

Schau dir das Ergebnis der Eingangsfrage genau an. Die Klammern $(x - 2)(x - 5)$ ergeben $x^2 - 7x + 10$. Die
Gleichung $x^2 - 7x + 10 = 0$ hat also die Lösungen $2$ und $5$. Fällt dir etwas auf? Die Summe der Lösungen ist
$2 + 5 = 7$, und $7$ steht mit umgekehrtem Vorzeichen vor $x$. Das Produkt ist $2\cdot 5 = 10$, und das ist genau die
Zahl ohne $x$. Das ist kein Zufall. Der französische Mathematiker François Viète, latinisiert Vieta, hat diesen
Zusammenhang um 1600 beschrieben.

### Der Satz von Vieta

:::satz[Satz von Vieta]
Hat die Gleichung $x^2 + p\,x + q = 0$ die reellen Lösungen $x_1$ und $x_2$, dann gilt
$$x_1 + x_2 = -p \qquad\text{und}\qquad x_1\cdot x_2 = q.$$
Außerdem lässt sich der Term zerlegen: $x^2 + p\,x + q = (x - x_1)(x - x_2)$. Die Faktoren $(x - x_1)$ heißen
**Linearfaktoren**. Bei einer doppelten Lösung ist $x_1 = x_2$.
:::

:::beweis
Nach der kleinen Lösungsformel aus [2.3 Quadratische Gleichungen](/lernen/mathe3/gleichungen/quadratische-gleichungen)
ist $x_{1} = -\tfrac{p}{2} + \sqrt D$ und $x_{2} = -\tfrac{p}{2} - \sqrt D$ mit $D = \left(\tfrac{p}{2}\right)^2 - q$.

**Summe:** Die Wurzeln heben sich weg: $x_1 + x_2 = -\tfrac{p}{2} - \tfrac{p}{2} = -p$.

**Produkt:** Mit der dritten binomischen Formel $(u + v)(u - v) = u^2 - v^2$ ist
$x_1\cdot x_2 = \left(\tfrac{p}{2}\right)^2 - D = \left(\tfrac{p}{2}\right)^2 - \left(\tfrac{p}{2}\right)^2 + q = q$.

**Zerlegung:** Ausmultiplizieren ergibt $(x - x_1)(x - x_2) = x^2 - (x_1 + x_2)\,x + x_1 x_2 = x^2 + p\,x + q$.
:::

**Wichtig:** Der Satz gilt für die **Normalform**, also mit der Zahl $1$ vor $x^2$. Bei $2x^2 - 10x + 12 = 0$ musst du
zuerst durch $2$ dividieren. Erst $x^2 - 5x + 6 = 0$ liefert die richtigen Werte: Summe $5$ und Produkt $6$.
Die Lösungen sind dann $2$ und $3$.

**Nichtbeispiel:** Bei $x^2 + 2x + 5 = 0$ ist $D = 1 - 5 = -4 < 0$. Es gibt keine reellen Lösungen. Der Satz macht
dann keine Aussage über reelle Zahlen. Zwei reelle Zahlen mit Summe $-2$ und Produkt $5$ gibt es nicht.

### Drei Verwendungen

Der Satz hat drei praktische Verwendungen: Kontrolle, Lösen im Kopf und Aufstellen von Gleichungen.

:::beispiel[Lösen im Kopf und Zerlegen]
**Im Kopf:** Bei $x^2 - 9x + 20 = 0$ suchen wir zwei Zahlen mit Produkt $20$ und Summe $9$. Die Zerlegungen von $20$
sind $1\cdot 20$, $2\cdot 10$ und $4\cdot 5$. Nur bei $4$ und $5$ ist die Summe $9$. Also $L = \{4; 5\}$.

**Zerlegen:** $x^2 + 2x - 15$ soll in Linearfaktoren zerlegt werden. Gesucht sind zwei Zahlen mit Produkt $-15$ und
Summe $-2$. Das sind $-5$ und $3$. Also $x^2 + 2x - 15 = (x + 5)(x - 3)$, denn $x_1 = -5$ und $x_2 = 3$.

**Kontrolle:** Wer bei $x^2 + 2x - 15 = 0$ mit der Formel die Lösungen $3$ und $-5$ gefunden hat, prüft: Summe
$3 + (-5) = -2 = -p$ und Produkt $3\cdot(-5) = -15 = q$. Beides stimmt.
:::

:::beispiel[Eine Gleichung zu vorgegebenen Lösungen]
Gesucht ist eine quadratische Gleichung mit ganzzahligen Koeffizienten und den Lösungen $-3$ und $\tfrac12$.

1. **Linearfaktoren:** Zu den Lösungen gehört $(x + 3)\left(x - \tfrac12\right) = 0$.
2. **Bruch beseitigen:** Wir multiplizieren mit $2$. Das ändert die Lösungen nicht. Es entsteht $(x + 3)(2x - 1) = 0$.
3. **Ausmultiplizieren:** $2x^2 - x + 6x - 3 = 2x^2 + 5x - 3$. Die Gleichung lautet $2x^2 + 5x - 3 = 0$.

**Kontrolle mit Vieta:** Die Normalform ist $x^2 + 2{,}5\,x - 1{,}5 = 0$. Summe $-3 + 0{,}5 = -2{,}5 = -p$ und Produkt
$-1{,}5 = q$. Es stimmt.
:::

:::achtung[Vorzeichen bei der Summe]
Eine typische Fehlrechnung bei $x^2 - 7x + 12 = 0$:
$$x_1 + x_2 = p = -7, \qquad x_1\cdot x_2 = 12 \quad\Longrightarrow\quad x_1 = -3,\; x_2 = -4.$$
Die Summe ist aber $-p$, nicht $p$. **Richtig:** $x_1 + x_2 = 7$ und $x_1\cdot x_2 = 12$, also $x_1 = 3$ und $x_2 = 4$. Die
Probe zeigt den Fehler: $(-3)^2 - 7\cdot(-3) + 12 = 42 \neq 0$.
:::

:::achtung[Vieta ohne Normalform]
Eine typische Fehlrechnung bei $2x^2 - 10x + 12 = 0$: „Das Produkt der Lösungen ist $12$, die Summe ist $10$.
Keine zwei ganzen Zahlen passen dazu, also gibt es keine ganzzahligen Lösungen.“ Der Satz gilt nur für die Normalform. **Richtig:** Durch $2$ dividieren,
$x^2 - 5x + 6 = 0$. Produkt $6$ und Summe $5$ ergeben $x_1 = 2$ und $x_2 = 3$.
:::

### Quadratische Gleichungen mit Parameter

Wie in [2.2 Lineare Gleichungen](/lernen/mathe3/gleichungen/lineare-gleichungen) kann auch eine quadratische Gleichung
einen **Parameter** enthalten, also eine noch nicht festgelegte Zahl. Typische Prüfungsfragen lauten: „Für welche
Werte des Parameters gibt es zwei, eine oder keine Lösung?“ Die Antwort liefert die Diskriminante, also der Ausdruck
unter der Wurzel der Lösungsformel. Du stellst sie als Term im Parameter auf und untersuchst ihr Vorzeichen.

:::beispiel[Anzahl der Lösungen abhängig von k]
Wie viele Lösungen hat $x^2 + 4x + k = 0$ in Abhängigkeit vom Parameter $k$?

1. **Diskriminante als Term:** $p = 4$, $q = k$, also $D = 2^2 - k = 4 - k$.
2. **Zwei Lösungen** für $D > 0$, also $4 - k > 0$ und damit $k < 4$.
3. **Eine Lösung** für $D = 0$, also $k = 4$. Dann ist $x = -\tfrac{p}{2} = -2$.
4. **Keine reelle Lösung** für $D < 0$, also $k > 4$.

**Kontrolle** mit $k = 3$: $x^2 + 4x + 3 = (x + 1)(x + 3)$ hat zwei Lösungen, wie vorhergesagt.
:::

:::beispiel[Wie groß kann das Feld werden?]
Ein rechteckiges Feld soll den Umfang $20$ m haben. Welche Flächen $A$ sind möglich?

1. **Modell:** Eine Seite ist $x$ m lang. Der halbe Umfang ist $10$ m, also ist die andere Seite $10 - x$ m. Die
   Fläche ist $x\,(10 - x) = A$.
2. **Gleichung mit Parameter $A$:** $x^2 - 10x + A = 0$.
3. **Diskriminante:** $D = 25 - A$. Eine Lösung $x$ gibt es nur für $D \geq 0$, also $A \leq 25$.
4. **Grenzfall:** Bei $A = 25$ ist $D = 0$ und $x = 5$. Das Feld ist dann ein Quadrat mit $5$ m Seitenlänge.

**Antwort:** Mit $20$ m Umfang sind alle Flächen bis höchstens $25$ m² möglich. Das Quadrat hat die größte Fläche.
:::

:::achtung[Parameter vor x²]
Eine typische Fehlrechnung bei $(k - 1)\,x^2 + 2x + 1 = 0$: „$\Delta = 4 - 4(k - 1) = 8 - 4k$. Genau eine Lösung
gibt es also nur für $k = 2$.“ Der Fall $k = 1$ fehlt. Dann ist die Zahl vor $x^2$ gleich null. Die Gleichung wird
linear, $2x + 1 = 0$, und hat genau eine Lösung $x = -\tfrac12$. **Richtig:** Genau eine Lösung gibt es für $k = 1$
und für $k = 2$. Steht der Parameter vor $x^2$, untersuche zuerst den Fall „Koeffizient gleich null“.
:::

:::merke[Vieta und Parameter]
1. Vieta gilt für die Normalform $x^2 + p\,x + q = 0$: Summe der Lösungen $-p$, Produkt $q$.
2. Damit kontrollierst du Lösungen, findest ganzzahlige Lösungen im Kopf und zerlegst in Linearfaktoren.
3. Zu vorgegebenen Lösungen $x_1$, $x_2$ gehört die Gleichung $(x - x_1)(x - x_2) = 0$, mit einer Zahl ungleich null
   multipliziert, wenn ganze Koeffizienten verlangt sind.
4. Bei einem Parameter stellst du die Diskriminante als Term auf und löst $D > 0$, $D = 0$ und $D < 0$.
5. Steht der Parameter vor $x^2$, prüfst du zuerst den Fall, in dem diese Zahl null wird.
:::

```reflexion
frage: Warum kann eine Gleichung $x^2 + p\,x + q = 0$ mit $q < 0$ nie „keine Lösung“ haben? Begründe auf zwei Arten, einmal mit der Diskriminante und einmal mit Vieta.
antwort: |
  **Mit der Diskriminante:** $D = \left(\tfrac{p}{2}\right)^2 - q$. Ein Quadrat ist nie negativ, und $-q$ ist für $q < 0$
  positiv. Also ist $D > 0$, und es gibt immer zwei Lösungen.

  **Mit Vieta:** Das Produkt der Lösungen ist $q < 0$. Ein negatives Produkt entsteht nur aus einer positiven und einer
  negativen Zahl. Die Lösungen liegen also auf verschiedenen Seiten der Null. Geometrisch: Die nach oben offene Parabel
  hat an der Stelle $x = 0$ den Wert $q < 0$. Sie liegt dort unter der Achse und muss die Achse links und rechts schneiden.
```

```aufgabe
id: gl-vieta
titel: Die zweite Lösung mit Vieta
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Die Gleichung $x^2 - 7x + q = 0$ hat die Lösung $x_1 = 2$. Bestimme die zweite Lösung $x_2$ und die Zahl $q$, ohne
  die Lösungsformel zu verwenden.
teile:
  - typ: zahl
    label: '$x_2$'
    loesung: "7 - 2"
    fehler:
      - wert: "-9"
        meldung: 'Die Summe der Lösungen ist $-p = +7$, nicht $-7$. Prüfe das Vorzeichen.'
  - typ: zahl
    label: '$q$'
    loesung: "2*5"
    fehler:
      - wert: "-18"
        meldung: 'Mit der richtigen zweiten Lösung ändert sich auch das Produkt. Prüfe zuerst $x_2$.'
hinweise:
  - 'Nach Vieta ist $x_1 + x_2 = -p = 7$ und $x_1\cdot x_2 = q$.'
loesung: |
  **Ansatz:** Vieta mit $p = -7$: Die Summe der Lösungen ist $-p = 7$. Also $2 + x_2 = 7$ und $x_2 = 5$.
  ---
  Das Produkt ist $q = x_1\cdot x_2 = 2\cdot 5 = 10$. **Probe:** $x^2 - 7x + 10 = (x - 2)(x - 5)$, beide Lösungen stimmen.
```

```aufgabe
id: gl-vieta-zerlegen
titel: In Linearfaktoren zerlegen
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Zerlege $x^2 - x - 12$ in Linearfaktoren. Gib das Produkt der zwei Klammern ein.
teile:
  - typ: term
    label: '$x^2 - x - 12 =$'
    variable: x
    loesung: "(x - 4)(x + 3)"
    fehler:
      - wert: "(x + 4)(x - 3)"
        meldung: 'Multipliziere aus: $(x + 4)(x - 3) = x^2 + x - 12$. Das mittlere Glied hat das falsche Vorzeichen. Die Summe der Lösungen muss $-p = +1$ sein.'
      - wert: "(x - 6)(x + 2)"
        meldung: 'Das Produkt $-12$ stimmt, aber die Summe der Lösungen $6 + (-2) = 4$ müsste $1$ sein.'
hinweise:
  - 'Suche zwei Zahlen mit Produkt $-12$ und Summe $+1$.'
loesung: |
  **Ansatz:** Nach Vieta gilt $x^2 - x - 12 = (x - x_1)(x - x_2)$ mit $x_1 + x_2 = 1$ und $x_1\cdot x_2 = -12$.
  ---
  Ein negatives Produkt heißt: eine Zahl positiv, eine negativ. Unter den Zerlegungen von $12$ passt $4$ und $-3$, denn
  $4 + (-3) = 1$. Also $x^2 - x - 12 = (x - 4)(x + 3)$. **Probe:** $x^2 + 3x - 4x - 12 = x^2 - x - 12$.
```

```aufgabe
id: gl-vieta-pruefen
titel: Welches Lösungspaar passt?
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  Welches Zahlenpaar ist die Lösungsmenge von $x^2 + 3x - 10 = 0$? Entscheide mit dem Satz von Vieta, ohne zu rechnen.
teile:
  - typ: auswahl
    optionen:
      - '$\{2; -5\}$'
      - '$\{-2; 5\}$'
      - '$\{2; 5\}$'
      - '$\{-1; 10\}$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Das Produkt $-10$ stimmt. Die Summe $-2 + 5 = 3$ müsste aber $-p = -3$ sein.'
      - wert: 2
        meldung: 'Das Produkt $2\cdot 5 = 10$ ist positiv. Gebraucht wird $q = -10$, also verschiedene Vorzeichen.'
      - wert: 3
        meldung: 'Das Produkt $-10$ stimmt, die Summe $9$ aber nicht. Sie müsste $-3$ sein.'
hinweise:
  - 'Prüfe für jedes Paar: Ist die Summe $-3$ und das Produkt $-10$?'
loesung: |
  **Ansatz:** Nach Vieta brauchen wir Summe $-p = -3$ und Produkt $q = -10$.
  ---
  Nur $2$ und $-5$ erfüllen beides: $2 + (-5) = -3$ und $2\cdot(-5) = -10$. **Probe:** $4 + 6 - 10 = 0$.
```

```aufgabe
id: gl-quadr-aufstellen
titel: Gleichung zu gegebenen Lösungen
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: |
  Gib eine quadratische Gleichung $a\,x^2 + b\,x + c = 0$ mit **ganzzahligen** Koeffizienten und $a = 2$ an, die genau die
  Lösungen $-2$ und $\tfrac32$ hat. Trage die linke Seite ein.
teile:
  - typ: term
    label: '$a\,x^2 + b\,x + c$'
    variable: x
    loesung: "2x^2 + x - 6"
    fehler:
      - wert: "2x^2 - x - 6"
        meldung: 'Zur Lösung $-2$ gehört der Faktor $(x + 2)$, zu $\tfrac32$ der Faktor $(x - \tfrac32)$. Prüfe die Vorzeichen beim Ausmultiplizieren.'
      - wert: "x^2 + 0.5x - 3"
        meldung: 'Diese Gleichung hat die richtigen Lösungen, aber $a = 1$ und keine ganzzahligen Koeffizienten. Multipliziere mit $2$.'
hinweise:
  - 'Linearfaktoren: $(x + 2)\left(x - \tfrac32\right)$.'
  - 'Multipliziere mit $2$, damit der Bruch verschwindet: $(x + 2)(2x - 3)$.'
loesung: |
  **Ansatz:** Zu den Lösungen $-2$ und $\tfrac32$ gehören die Linearfaktoren $(x + 2)$ und $\left(x - \tfrac32\right)$.
  ---
  Mit $2$ multiplizieren ändert die Lösungen nicht und beseitigt den Bruch: $(x + 2)(2x - 3) = 2x^2 - 3x + 4x - 6 = 2x^2 + x - 6$.
  ---
  **Kontrolle mit Vieta:** Normalform $x^2 + 0{,}5\,x - 3 = 0$. Summe $-2 + 1{,}5 = -0{,}5 = -p$ und Produkt $-3 = q$.
```

```aufgabe
id: gl-diskriminante
titel: Genau eine Lösung
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Für welche Werte von $k$ hat $x^2 + k\,x + 9 = 0$ genau eine reelle Lösung? Gib beide Werte ein, getrennt durch einen
  Strichpunkt. Wie lautet diese Lösung für das positive $k$?
teile:
  - typ: menge
    label: 'Werte von $k$'
    loesung: ["6", "-6"]
    fehler:
      - wert: ["6"]
        meldung: 'Aus $k^2 = 36$ folgen zwei Werte. Auch $k = -6$ ergibt $D = 0$.'
      - wert: ["3", "-3"]
        meldung: 'Die Diskriminante ist $\left(\tfrac{k}{2}\right)^2 - 9 = \tfrac{k^2}{4} - 9$. Aus $\tfrac{k^2}{4} = 9$ folgt $k^2 = 36$.'
  - typ: zahl
    label: 'Lösung für $k > 0$'
    loesung: "-3"
    fehler:
      - wert: "3"
        meldung: 'Die doppelte Lösung ist $x = -\tfrac{p}{2} = -\tfrac{6}{2}$. Achte auf das Minus.'
hinweise:
  - 'Genau eine Lösung heißt Diskriminante gleich null.'
  - 'Mit $p = k$ und $q = 9$ ist $D = \tfrac{k^2}{4} - 9$. Setze das gleich null.'
loesung: |
  **Ansatz:** Genau eine Lösung gibt es, wenn die Diskriminante null ist: $D = \tfrac{k^2}{4} - 9 = 0$.
  ---
  Also $k^2 = 36$ und $k = 6$ oder $k = -6$.
  ---
  Für $k = 6$: $x^2 + 6x + 9 = (x + 3)^2 = 0$, also $x = -3$. **Kontrolle:** Für $|k| > 6$ gibt es zwei Lösungen, für $|k| < 6$ keine.
```

```aufgabe
id: gl-param-anzahl
titel: Zwei Lösungen in Abhängigkeit von c
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: |
  Gegeben ist $x^2 - 6x + c = 0$ mit einem reellen Parameter $c$.

  a) Für welche $c$ hat die Gleichung zwei verschiedene reelle Lösungen?

  b) Für welches $c$ hat sie genau eine Lösung, und wie lautet diese?
teile:
  - typ: auswahl
    label: 'a)'
    optionen: ['$c < 9$', '$c > 9$', '$c < 36$', '$c > -9$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Für große $c$ wird $D = 9 - c$ negativ. Zwei Lösungen brauchen aber $D > 0$.'
      - wert: 2
        meldung: 'In der Diskriminante steht $\left(\tfrac{p}{2}\right)^2 = 3^2 = 9$, nicht $p^2 = 36$.'
      - wert: 3
        meldung: 'Löse $9 - c > 0$ sauber: Addiere $c$ auf beiden Seiten. Dann steht $9 > c$.'
  - typ: vektor
    label: 'b) Wert von $c$ und Lösung $x$'
    namen: ['c', 'x']
    loesung: ["9", "3"]
    fehler:
      - wert: ["9", "-3"]
        meldung: 'Die doppelte Lösung ist $-\tfrac{p}{2}$ mit $p = -6$. Minus mal minus ergibt plus.'
hinweise:
  - 'Stelle die Diskriminante als Term in $c$ auf: $D = \left(\tfrac{-6}{2}\right)^2 - c$.'
  - 'Löse $D > 0$ für a) und $D = 0$ für b).'
loesung: |
  **Ansatz:** Die Anzahl der Lösungen hängt vom Vorzeichen der Diskriminante ab. Mit $p = -6$ und $q = c$ ist $D = 9 - c$.
  ---
  a) Zwei Lösungen für $D > 0$, also $9 - c > 0$. Wir addieren $c$: $c < 9$.
  ---
  b) Genau eine Lösung für $D = 0$, also $c = 9$. Dann ist $x = -\tfrac{p}{2} = 3$. **Probe:** $x^2 - 6x + 9 = (x - 3)^2$.
```

```aufgabe
id: gl-param-fuehrend
titel: Der Parameter steht vor x²
niveau: 3
lernziel: 3
kompetenz: begruenden
angabe: |
  Gegeben ist $(k - 2)\,x^2 - 4x + 2 = 0$ mit einem reellen Parameter $k$.

  a) Für welche Werte von $k$ hat die Gleichung genau eine reelle Lösung? Gib alle an, getrennt durch einen Strichpunkt.

  b) Wie lautet die Lösung für den größeren dieser Werte?
teile:
  - typ: menge
    label: 'a) Werte von $k$'
    loesung: ["2", "4"]
    fehler:
      - wert: ["4"]
        meldung: 'Für $k = 2$ verschwindet das Glied mit $x^2$. Die Gleichung wird linear. Wie viele Lösungen hat sie dann?'
  - typ: zahl
    label: 'b) $x$'
    loesung: "1"
hinweise:
  - 'Untersuche zuerst den Fall $k = 2$. Dann ist die Gleichung nicht mehr quadratisch.'
  - 'Für $k \neq 2$ ist $\Delta = 16 - 4\cdot(k - 2)\cdot 2 = 32 - 8k$. Setze $\Delta = 0$.'
loesung: |
  **Ansatz:** Die Lösungsformel gilt nur, wenn die Zahl vor $x^2$ nicht null ist. Deshalb untersuchen wir den Fall
  $k - 2 = 0$ getrennt.
  ---
  **Fall $k = 2$:** Die Gleichung lautet $-4x + 2 = 0$, also $x = \tfrac12$. Genau eine Lösung.
  ---
  **Fall $k \neq 2$:** $\Delta = (-4)^2 - 4\cdot(k - 2)\cdot 2 = 16 - 8k + 16 = 32 - 8k$. Genau eine Lösung für $\Delta = 0$, also $k = 4$.
  ---
  Für $k = 4$ lautet die Gleichung $2x^2 - 4x + 2 = 0$, also $2\,(x - 1)^2 = 0$ und $x = 1$. **Antwort:** Genau eine Lösung
  gibt es für $k = 2$ und für $k = 4$. Für $k = 4$ ist sie $x = 1$.
gefuehrt:
  - text: Für welchen Wert von $k$ ist die Zahl vor $x^2$ gleich null?
    teil: { typ: zahl, loesung: "2" }
    erklaerung: 'Für $k = 2$ fällt das quadratische Glied weg. Die Gleichung wird linear: $-4x + 2 = 0$ mit der einzigen Lösung $x = \tfrac12$.'
  - text: Stelle für $k \neq 2$ die Diskriminante $\Delta = b^2 - 4ac$ als Term in $k$ auf.
    teil:
      typ: term
      variable: k
      loesung: "32 - 8k"
      fehler:
        - wert: "16 - 8k"
          meldung: 'Es ist $-4\cdot(k - 2)\cdot 2 = -8k + 16$. Das $+16$ kommt zu den $16$ aus $b^2$ dazu.'
    erklaerung: '$\Delta = 16 - 8\,(k - 2) = 32 - 8k$.'
  - text: Für welches $k$ ist $\Delta = 0$?
    teil: { typ: zahl, loesung: "4" }
    erklaerung: '$32 - 8k = 0$ ergibt $k = 4$.'
  - text: Warum darf man den Fall $k = 2$ nicht mit der Diskriminante behandeln? Überlege, bevor du weiterklickst.
    erklaerung: 'Die Diskriminante gehört zur Lösungsformel, und diese verlangt $a \neq 0$. Für $k = 2$ ist $a = 0$, im Nenner $2a$ stünde null.'
```

```aufgabe
id: gl-param-zaun
titel: Ein Gehege an der Mauer
niveau: 3
lernziel: 3
kompetenz: modellieren
angabe: |
  Ein rechteckiges Gehege wird an eine lange Mauer gebaut. Die Mauer bildet eine Seite. Für die anderen drei Seiten stehen
  $40$ m Zaun zur Verfügung. Die zwei Seiten senkrecht zur Mauer sind je $x$ m lang.

  a) Wie groß kann die Fläche höchstens werden?

  b) Welche Werte von $x$ ergeben eine Fläche von $150$ m²? Gib beide an, getrennt durch einen Strichpunkt.
teile:
  - typ: zahl
    label: 'a) größte Fläche'
    einheit: "m²"
    loesung: "200"
  - typ: menge
    label: 'b) $x$ in m'
    loesung: ["5", "15"]
hinweise:
  - 'Die Seite parallel zur Mauer ist $40 - 2x$ m lang. Die Fläche ist $x\,(40 - 2x)$.'
  - 'Setze die Fläche gleich einem Parameter $A$ und bring die Gleichung auf die Form $2x^2 - 40x + A = 0$. Wann hat sie eine Lösung?'
loesung: |
  **Modell:** Zwei Seiten sind $x$ m lang, die dritte ist $40 - 2x$ m lang. Die Fläche ist $A = x\,(40 - 2x)$ in m².
  Umgeformt: $2x^2 - 40x + A = 0$.
  ---
  a) Ein passendes $x$ gibt es nur für $\Delta = 1600 - 8A \geq 0$, also $A \leq 200$. Bei $A = 200$ ist $\Delta = 0$ und
  $x = \tfrac{40}{4} = 10$. Die größte Fläche ist $200$ m² mit den Seiten $10$ m und $20$ m.
  ---
  b) Für $A = 150$: $2x^2 - 40x + 150 = 0$, durch $2$ dividiert $x^2 - 20x + 75 = 0$. Kleine Formel: $D = 100 - 75 = 25$,
  also $x = 10 \pm 5$, das heißt $x = 5$ oder $x = 15$.
  ---
  **Probe:** $5\cdot 30 = 150$ und $15\cdot 10 = 150$. **Antwort:** Höchstens $200$ m² sind möglich. Für $150$ m² sind die Seiten
  senkrecht zur Mauer $5$ m oder $15$ m lang.
```
## Gleichungen höheren Grades

```aufgabe
id: gl-hoeher-check-nullprodukt
titel: Ein Produkt ist null
niveau: 1
art: check
lernziel: 0
angabe: |
  Bestimme alle Lösungen von $x\cdot(x - 4) = 0$. Gib die Lösungen durch Strichpunkt getrennt ein.
  Herkunft: [2.1 Gleichungen und Äquivalenzumformungen](/lernen/mathe3/gleichungen/gleichungen-und-aequivalenzumformungen).
teile:
  - typ: menge
    label: '$L$'
    loesung: ["0", "4"]
    fehler:
      - wert: ["4"]
        meldung: |
          Die Lösung $4$ stimmt. Der erste Faktor $x$ kann aber ebenfalls null sein. Ein Produkt ist null, sobald
          **ein** Faktor null ist. Prüfe jeden Faktor einzeln.
      - wert: ["0", "-4"]
        meldung: |
          Setz $-4$ zur Probe ein: $(-4)\cdot(-4 - 4) = (-4)\cdot(-8) = 32$. Das ist nicht null. Der Faktor $x - 4$ ist null,
          wenn $x - 4 = 0$ gilt. Löse diese Gleichung sauber nach $x$ auf.
hinweise:
  - 'Nullproduktsatz: Ein Produkt ist genau dann null, wenn mindestens ein Faktor null ist.'
loesung: |
  Nach dem Nullproduktsatz ist das Produkt null, wenn $x = 0$ ist oder wenn $x - 4 = 0$ ist.
  ---
  Aus $x - 4 = 0$ folgt $x = 4$. Also ist $L = \{0;\ 4\}$. Probe: $0\cdot(-4) = 0$ und $4\cdot 0 = 0$.
```

Bisher hatten unsere Gleichungen höchstens $x^2$. In der Kurvendiskussion aus [Kapitel 9](/lernen/mathe3/differentialrechnung)
tauchen aber ständig Gleichungen wie $x^3 - 4x = 0$ oder $x^4 - 5x^2 + 4 = 0$ auf. Für solche Gleichungen gibt es
keine handliche Lösungsformel wie für quadratische Gleichungen. Für Grad 3 und 4 existieren zwar Formeln, sie sind
aber so lang, dass niemand sie verwendet. Ab Grad 5 gibt es beweisbar keine allgemeine Formel mehr,
die nur mit Grundrechenarten und Wurzeln auskommt.

Die gute Nachricht: Prüfungsaufgaben sind immer so gebaut, dass einer von drei Tricks funktioniert. Jeder Trick führt
die schwierige Gleichung auf Gleichungen zurück, die du schon lösen kannst. In diesem Abschnitt lernst du alle drei.

:::definition[Polynomgleichung vom Grad n]
Eine **Polynomgleichung** ist eine Gleichung, die man in die Form
$$a_n x^n + a_{n-1}x^{n-1} + \dots + a_1 x + a_0 = 0 \qquad (a_n \neq 0)$$
bringen kann. Dabei sind $a_n, \dots, a_0$ feste Zahlen, die **Koeffizienten**. Die höchste vorkommende Hochzahl $n$ heißt
**Grad**. Der Summand $a_0$ ohne $x$ heißt **Absolutglied** (auch konstantes Glied).
:::

**Beispiel:** $2x^3 - x + 5 = 0$ ist eine Polynomgleichung vom Grad $3$ mit dem Absolutglied $5$.
**Nichtbeispiel:** $x^2 + \frac{1}{x} = 0$ ist **keine** Polynomgleichung, weil $x$ im Nenner steht. Auch $2^x = 8$ ist
keine, weil $x$ dort im Exponenten steht.

### Trick 1: Herausheben und Nullproduktsatz

Fehlt das Absolutglied, enthält jeder Summand mindestens ein $x$. Dann kannst du $x$ (oder eine Potenz von $x$)
**herausheben**, also als gemeinsamen Faktor vor eine Klammer schreiben. Danach hilft der **Nullproduktsatz**: Ein
Produkt ist genau dann null, wenn mindestens ein Faktor null ist.

:::beispiel[Herausheben bei Grad 3]
Löse $x^3 - 4x = 0$.

1. **Herausheben:** Beide Summanden enthalten $x$. Also $x^3 - 4x = x\,(x^2 - 4)$.
2. **Weiter zerlegen:** $x^2 - 4$ ist eine dritte binomische Formel: $x^2 - 4 = (x - 2)(x + 2)$.
3. **Nullproduktsatz:** $x\,(x - 2)(x + 2) = 0$ gilt genau dann, wenn $x = 0$ oder $x - 2 = 0$ oder $x + 2 = 0$ ist.

**Ergebnis:** $L = \{-2;\ 0;\ 2\}$. Eine Polynomgleichung vom Grad $n$ hat höchstens $n$ reelle Lösungen. Hier sind es drei, mehr geht bei Grad $3$ nicht.
**Probe** für $x = -2$: $(-2)^3 - 4\cdot(-2) = -8 + 8 = 0$.
:::

:::achtung[Durch x dividiert, Lösung verloren]
Eine häufige Fehlrechnung zu derselben Gleichung lautet:
$$x^3 = 4x \quad\overset{:x}{\Longrightarrow}\quad x^2 = 4 \quad\Longrightarrow\quad x = \pm 2.$$
Dabei fehlt die Lösung $x = 0$. Die Division durch $x$ ist nur erlaubt, wenn $x \neq 0$ ist. Ob $x = 0$ eine Lösung
ist, wird so nie geprüft. **Richtig:** alles auf eine Seite bringen und herausheben, $x\,(x^2 - 4) = 0$.
:::

### Reine Potenzgleichungen

Eine Gleichung der Form $x^n = c$ heißt **reine Potenzgleichung**. Man löst sie mit der $n$-ten Wurzel aus
[Kapitel 1, Abschnitt 1.9 Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln). Wie viele Lösungen es gibt, hängt davon ab, ob die
Hochzahl $n$ gerade oder ungerade ist.

- **$n$ ungerade:** Es gibt immer genau eine reelle Lösung. Ein Beispiel: $x^3 = -27$ hat die Lösung $x = -3$, denn $(-3)^3 = -27$.
- **$n$ gerade und $c > 0$:** Es gibt zwei Lösungen $x = \pm\sqrt[n]{c}$. Ein Beispiel: $x^4 = 16$ hat die Lösungen $2$ und $-2$.
- **$n$ gerade und $c = 0$:** Nur $x = 0$ ist Lösung.
- **$n$ gerade und $c < 0$:** Es gibt keine reelle Lösung, denn eine gerade Potenz ist nie negativ. So hat $x^4 = -16$ keine Lösung.

Warum der Unterschied? Eine ungerade Potenz behält das Vorzeichen: $(-3)^3$ ist negativ. Eine gerade Potenz macht
jedes Vorzeichen positiv: $2^4$ und $(-2)^4$ sind beide $16$.

```aufgabe
id: gl-hoeher-check-potenz
titel: Gerade oder ungerade Hochzahl?
niveau: 1
art: check
lernziel: 4
angabe: |
  Wie viele reelle Lösungen hat die Gleichung $x^5 = -32$?
teile:
  - typ: auswahl
    optionen:
      - 'keine'
      - 'genau eine'
      - 'genau zwei'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Eine **ungerade** Potenz kann negativ sein. Rechne zur Probe $(-2)^5$ aus.'
      - wert: 2
        meldung: 'Zwei Lösungen $\pm$ gibt es nur bei gerader Hochzahl. Bei ungerader Hochzahl behält die Potenz das Vorzeichen der Basis.'
hinweise:
  - 'Die Hochzahl $5$ ist ungerade. Welches Vorzeichen hat $x^5$ für negatives $x$?'
loesung: |
  Die Hochzahl $5$ ist ungerade. Dann gibt es für jede rechte Seite genau eine reelle Lösung.
  ---
  Hier ist es $x = -2$, denn $(-2)^5 = -32$. Die Zahl $2$ löst die Gleichung nicht, weil $2^5 = +32$ ist.
```

### Trick 2: Substitution bei biquadratischen Gleichungen

:::definition[Biquadratische Gleichung]
Eine Gleichung der Form $a x^4 + b x^2 + c = 0$ mit $a \neq 0$ heißt **biquadratisch**. In ihr kommen nur die geraden
Potenzen $x^4$, $x^2$ und $x^0$ vor. Mit der **Substitution** $u = x^2$ (Substitution heißt Ersetzen) wird daraus die
quadratische Gleichung $a u^2 + b u + c = 0$, denn $x^4 = (x^2)^2 = u^2$.
:::

**Beispiel:** $x^4 - 5x^2 + 4 = 0$ ist biquadratisch. **Nichtbeispiel:** $x^4 - 5x^3 + 4 = 0$ ist es nicht, weil $x^3$
eine ungerade Potenz ist. Dort lässt sich $x^3$ nicht durch $u = x^2$ ausdrücken.

Nach dem Lösen für $u$ kommt die **Rücksubstitution**: Du setzt $x^2 = u$ und löst diese reine Potenzgleichung. Jedes
positive $u$ liefert zwei Lösungen $x = \pm\sqrt u$. Der Wert $u = 0$ liefert $x = 0$. Ein negatives $u$ liefert keine
reelle Lösung. Eine biquadratische Gleichung hat deshalb $0$, $1$, $2$, $3$ oder $4$ reelle Lösungen.

:::beispiel[Vier Lösungen]
Löse $x^4 - 5x^2 + 4 = 0$.

1. **Substitution:** Setze $u = x^2$. Dann ist $x^4 = u^2$, und die Gleichung lautet $u^2 - 5u + 4 = 0$.
2. **Quadratische Gleichung lösen:** Zwei Zahlen mit Produkt $4$ und Summe $5$ sind $1$ und $4$. Also $(u - 1)(u - 4) = 0$ und $u_1 = 1$, $u_2 = 4$.
3. **Rücksubstitution:** Aus $x^2 = 1$ folgt $x = \pm 1$. Aus $x^2 = 4$ folgt $x = \pm 2$.

**Ergebnis:** $L = \{-2;\ -1;\ 1;\ 2\}$. **Probe** für $x = 2$: $16 - 5\cdot 4 + 4 = 16 - 20 + 4 = 0$.
:::

```plot
x: [-3, 3]
y: [-3, 6]
achsen: { x: "x", y: "y" }
graphen:
  - { f: "x^4 - 5*x^2 + 4", label: "y = x⁴ − 5x² + 4", farbe: 0 }
punkte:
  - { x: -2, y: 0, label: "−2" }
  - { x: -1, y: 0, label: "−1" }
  - { x: 1, y: 0, label: "1" }
  - { x: 2, y: 0, label: "2" }
beschriftung: Der Graph von y = x⁴ − 5x² + 4 ist symmetrisch zur y-Achse und schneidet die x-Achse viermal, bei −2, −1, 1 und 2. Die Symmetrie kommt daher, dass nur gerade Potenzen vorkommen.
```

:::beispiel[Ein negativer Wert für u]
Löse $x^4 + 3x^2 - 4 = 0$.

1. **Substitution** $u = x^2$: Die Gleichung wird zu $u^2 + 3u - 4 = 0$.
2. **Lösen:** Zwei Zahlen mit Produkt $-4$ und Summe $-3$ sind $-4$ und $1$. Also $(u + 4)(u - 1) = 0$ und $u_1 = -4$, $u_2 = 1$.
3. **Rücksubstitution:** $x^2 = -4$ hat keine reelle Lösung, weil ein Quadrat nie negativ ist. Aus $x^2 = 1$ folgt $x = \pm 1$.

**Ergebnis:** $L = \{-1;\ 1\}$. Die Gleichung hat nur zwei reelle Lösungen, obwohl sie vom Grad $4$ ist.
:::

:::achtung[Rücksubstitution vergessen]
Eine typische Fehlrechnung zum Beispiel „Vier Lösungen“: „$u^2 - 5u + 4 = 0$ hat die Lösungen $1$ und $4$, also
$L = \{1;\ 4\}$.“ Das ist falsch, denn gesucht ist $x$, nicht $u$. Die Probe zeigt es: Für $x = 4$ ist
$4^4 - 5\cdot 16 + 4 = 256 - 80 + 4 = 180 \neq 0$. **Richtig:** $x^2 = 1$ und $x^2 = 4$ lösen. Jeder positive Wert
von $u$ liefert **zwei** Werte von $x$.
:::

Dasselbe Prinzip funktioniert immer, wenn ein Term und sein Quadrat vorkommen. In $x^6 - 7x^3 - 8 = 0$ ist
$x^6 = (x^3)^2$. Mit $u = x^3$ entsteht $u^2 - 7u - 8 = 0$, also $(u - 8)(u + 1) = 0$. Die Rücksubstitution
$x^3 = 8$ liefert $x = 2$, und $x^3 = -1$ liefert $x = -1$. Hier gibt es kein $\pm$, weil die Hochzahl $3$ ungerade ist.

```aufgabe
id: gl-hoeher-check-substitution
titel: Welche Substitution passt?
niveau: 1
art: check
lernziel: 4
angabe: |
  Mit welcher Substitution wird $x^8 - 3x^4 + 2 = 0$ zu einer quadratischen Gleichung?
teile:
  - typ: auswahl
    optionen:
      - '$u = x^2$'
      - '$u = x^4$'
      - '$u = x^8$'
      - '$u = x^3$'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Mit $u = x^2$ wird $x^8 = u^4$. Das ergibt eine Gleichung vierten Grades in $u$, keine quadratische.'
      - wert: 2
        meldung: 'Dann bleibt $x^4$ stehen, und $x^4$ lässt sich nicht als Potenz von $x^8$ mit ganzer Hochzahl schreiben.'
      - wert: 3
        meldung: 'Weder $x^8$ noch $x^4$ ist eine Potenz von $x^3$ mit ganzer Hochzahl.'
hinweise:
  - 'Gesucht ist ein Term $u$, für den die höchste Potenz genau $u^2$ ist.'
loesung: |
  Es gilt $x^8 = (x^4)^2$. Mit $u = x^4$ wird die Gleichung zu $u^2 - 3u + 2 = 0$.
  ---
  Das ist eine quadratische Gleichung in $u$. Danach folgt wie immer die Rücksubstitution $x^4 = u$.
```

### Trick 3: Eine Lösung erraten und abspalten

Hat die Gleichung ein Absolutglied und lässt sie sich nicht substituieren, dann rät man eine Lösung. Das Raten ist
nicht blind. Es gibt eine Regel, die die Kandidaten stark einschränkt.

:::satz[Ganzzahlige Lösungen teilen das Absolutglied]
Die Gleichung $x^n + a_{n-1}x^{n-1} + \dots + a_1 x + a_0 = 0$ habe ganzzahlige Koeffizienten und den **Leitkoeffizienten** $1$. Der Leitkoeffizient
ist die Zahl vor der höchsten Potenz von $x$.
Wenn sie eine ganzzahlige Lösung $x_0$ hat, dann ist $x_0$ ein **Teiler** von $a_0$.
:::

Warum? Setzt man $x_0$ ein und bringt $a_0$ auf die andere Seite, erhält man
$a_0 = -x_0\cdot\left(x_0^{n-1} + a_{n-1}x_0^{n-2} + \dots + a_1\right)$. Die Klammer ist eine ganze Zahl. Also ist $a_0$ ein
ganzzahliges Vielfaches von $x_0$. Für $x^3 - 2x^2 - 5x + 6 = 0$ kommen deshalb nur die Teiler von $6$ in Frage:
$\pm 1$, $\pm 2$, $\pm 3$ und $\pm 6$.

Hast du eine Lösung $x_0$ gefunden, enthält das Polynom den **Linearfaktor** $(x - x_0)$. Du dividierst das Polynom
durch $(x - x_0)$ und erhältst ein Polynom mit um eins kleinerem Grad. Dieses Dividieren heißt **Polynomdivision**. Sie
funktioniert wie die schriftliche Division von Zahlen.

:::beispiel[Polynomdivision Schritt für Schritt]
Löse $x^3 - 2x^2 - 5x + 6 = 0$.

**Raten:** $x = 1$ ergibt $1 - 2 - 5 + 6 = 0$. Also ist $x = 1$ eine Lösung, und $(x - 1)$ ist ein Faktor.

**Dividieren** $(x^3 - 2x^2 - 5x + 6) : (x - 1)$:

1. Teile das erste Glied durch $x$: $x^3 : x = x^2$. Multipliziere zurück: $x^2\cdot(x - 1) = x^3 - x^2$. Ziehe das ab: $(x^3 - 2x^2) - (x^3 - x^2) = -x^2$. Hole das nächste Glied $-5x$ herunter. Es bleibt $-x^2 - 5x$.
2. $-x^2 : x = -x$. Zurück multiplizieren: $-x\cdot(x - 1) = -x^2 + x$. Abziehen: $(-x^2 - 5x) - (-x^2 + x) = -6x$. Hole $+6$ herunter. Es bleibt $-6x + 6$.
3. $-6x : x = -6$. Zurück multiplizieren: $-6\cdot(x - 1) = -6x + 6$. Abziehen ergibt den Rest $0$.

Das Ergebnis ist $x^2 - x - 6$. Es gilt also $x^3 - 2x^2 - 5x + 6 = (x - 1)(x^2 - x - 6)$.

**Restliche Lösungen:** $x^2 - x - 6 = (x - 3)(x + 2)$, also $x = 3$ oder $x = -2$.
**Ergebnis:** $L = \{-2;\ 1;\ 3\}$.
:::

Der Rest $0$ ist eine eingebaute Kontrolle. Bleibt ein Rest ungleich null, war die geratene Zahl keine Lösung, oder du
hast dich verrechnet.

Schneller geht dieselbe Rechnung mit dem **Horner-Schema**. Du schreibst nur die Koeffizienten in eine Zeile. Den ersten
Koeffizienten schreibst du herunter. Dann multiplizierst du jeweils das letzte Ergebnis mit $x_0$ und addierst es zum
nächsten Koeffizienten.

:::beispiel[Ein Paket mit gegebenem Volumen]
Ein Paket hat eine quadratische Grundfläche mit der Seitenlänge $x$ in cm und die Höhe $x + 3$ in cm. Sein Volumen ist
$20$ cm³. Wie lang ist die Grundseite?

1. **Gleichung:** Volumen ist Grundfläche mal Höhe, also $x^2\,(x + 3) = 20$. Ausmultipliziert und null gesetzt: $x^3 + 3x^2 - 20 = 0$.
2. **Raten:** Teiler von $20$ sind Kandidaten. $x = 2$ ergibt $8 + 12 - 20 = 0$. Treffer.
3. **Horner-Schema** mit $x_0 = 2$ und den Koeffizienten $1$, $3$, $0$, $-20$. Für das fehlende $x$-Glied steht eine $0$.

$$
\begin{array}{r|rrrr}
 & 1 & 3 & 0 & -20 \\
\text{mal } 2 & & 2 & 10 & 20 \\
\hline
\text{Summe} & 1 & 5 & 10 & 0
\end{array}
$$

4. **Ablesen:** Die Summenzeile liefert $x^2 + 5x + 10$ mit Rest $0$. Seine Diskriminante ist $25 - 40 = -15 < 0$. Dieser Faktor hat also keine Nullstelle.

**Antwort:** Die Grundseite ist $2$ cm lang, die Höhe $5$ cm. Probe: $2^2\cdot 5 = 20$ cm³.
:::

:::achtung[Lücke im Polynom nicht mit 0 aufgefüllt]
Bei $x^3 - 7x + 6$ fehlt das Glied mit $x^2$. Eine typische Fehlrechnung im Horner-Schema mit $x_0 = 1$ verwendet nur die
Koeffizienten $1$, $-7$, $6$. Heraus kommt $1$, $-6$, $0$, also scheinbar „$x - 6$“. Das ist falsch, denn beim
Dividieren durch $(x - 1)$ sinkt der Grad nur um eins: Aus Grad $3$ wird Grad $2$. **Richtig:** Koeffizienten
$1$, $0$, $-7$, $6$. Jede fehlende Potenz bekommt eine $0$.
:::

:::merke[Rezept: Gleichung höheren Grades]
1. Alles auf eine Seite bringen, sodass rechts $0$ steht.
2. Fehlt das Absolutglied? Dann die höchstmögliche Potenz von $x$ herausheben und den Nullproduktsatz anwenden.
3. Kommen nur $x^4$, $x^2$ und Zahlen vor? Dann $u = x^2$ setzen, für $u$ lösen und **rücksubstituieren**.
4. Sonst eine Lösung unter den Teilern des Absolutglieds raten und mit Polynomdivision oder Horner abspalten. Lücken mit $0$ füllen.
5. Den Rest zerlegen, bis Grad $2$ erreicht ist, dann mit der Lösungsformel weiter.
6. Probe mit mindestens einer Lösung in der Ausgangsgleichung. Mehr als $n$ Lösungen bei Grad $n$ deuten auf einen Fehler.
:::

```reflexion
frage: Warum kann eine biquadratische Gleichung nie genau drei verschiedene Lösungen haben, die alle ungleich null sind?
antwort: |
  Die Lösungen kommen aus der Rücksubstitution $x^2 = u$. Jedes positive $u$ liefert ein Paar $+\sqrt u$ und $-\sqrt u$.
  Die Lösungen ungleich null treten also immer paarweise auf, einmal positiv und einmal negativ. Ihre Anzahl ist deshalb
  gerade. Eine ungerade Anzahl ist nur möglich, wenn $x = 0$ dabei ist, also wenn $u = 0$ eine Lösung ist. Das passt zur
  Symmetrie des Graphen zur $y$-Achse.
```

```aufgabe
id: gl-ausheben
titel: Herausheben und Nullproduktsatz
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Löse die beiden Gleichungen. Gib jede Lösungsmenge durch Strichpunkt getrennt ein.

  a) $3x^3 - 27x = 0$

  b) $x^4 - 6x^3 = 0$
teile:
  - typ: menge
    label: 'a) $L$'
    loesung: ["0", "3", "-3"]
    fehler:
      - wert: ["3", "-3"]
        meldung: |
          Die Lösung $x = 0$ fehlt. Sie geht verloren, wenn man durch $x$ dividiert. Hebe $x$ stattdessen heraus und
          prüfe jeden Faktor einzeln.
      - wert: ["0", "3"]
        meldung: |
          Aus $x^2 = 9$ folgen zwei Werte. Auch eine negative Zahl ergibt quadriert $9$.
  - typ: menge
    label: 'b) $L$'
    loesung: ["0", "6"]
    fehler:
      - wert: ["6"]
        meldung: |
          Nach dem Herausheben steht $x^3\cdot(x - 6) = 0$. Auch der Faktor $x^3$ kann null sein. Wann ist das der Fall?
      - wert: ["0", "-6"]
        meldung: |
          Prüfe das Vorzeichen. Setz $-6$ zur Probe ein: $(-6)^4 - 6\cdot(-6)^3$ ist nicht null.
hinweise:
  - 'Hebe die höchste Potenz von $x$ heraus, die in jedem Summanden steckt. Bei a) ist das $3x$, bei b) $x^3$.'
loesung: |
  **a) Ansatz:** Das Absolutglied fehlt, also heben wir $3x$ heraus: $3x\,(x^2 - 9) = 0$. Mit der dritten binomischen Formel ist $x^2 - 9 = (x - 3)(x + 3)$.
  ---
  Nullproduktsatz: $3x = 0$ oder $x - 3 = 0$ oder $x + 3 = 0$. Also $L = \{-3;\ 0;\ 3\}$. Probe mit $x = 3$: $81 - 81 = 0$.
  ---
  **b)** Beide Summanden enthalten mindestens $x^3$: $x^3\,(x - 6) = 0$. Aus $x^3 = 0$ folgt $x = 0$, aus $x - 6 = 0$ folgt $x = 6$. Also $L = \{0;\ 6\}$.
```

```aufgabe
id: gl-potenzgleichung
titel: Reine Potenzgleichungen
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Bestimme alle reellen Lösungen. Gib sie durch Strichpunkt getrennt ein. Gibt es keine Lösung, gib `leer` ein.

  a) $x^3 = -\tfrac{125}{8}$, b) $x^4 = 625$, c) $x^6 = -64$
teile:
  - typ: menge
    label: 'a) $L$'
    loesung: ["-5/2"]
    fehler:
      - wert: ["5/2"]
        meldung: |
          Prüfe das Vorzeichen: $\left(\tfrac52\right)^3$ ist positiv. Bei ungerader Hochzahl bleibt das Minus erhalten.
      - wert: ["5/2", "-5/2"]
        meldung: |
          Bei einer **ungeraden** Hochzahl gibt es genau eine reelle Lösung. $\left(\tfrac52\right)^3$ ist positiv und
          löst die Gleichung deshalb nicht.
  - typ: menge
    label: 'b) $L$'
    loesung: ["5", "-5"]
    fehler:
      - wert: ["5"]
        meldung: |
          Bei einer **geraden** Hochzahl gibt es zu einer positiven rechten Seite zwei Lösungen. Rechne $(-5)^4$ aus.
  - typ: menge
    label: 'c) $L$'
    loesung: []
    fehler:
      - wert: ["-2"]
        meldung: |
          Rechne zur Probe $(-2)^6$ aus. Eine gerade Potenz ist nie negativ, egal welches Vorzeichen die Basis hat.
hinweise:
  - 'Ungerade Hochzahl: genau eine Lösung mit demselben Vorzeichen wie die rechte Seite. Gerade Hochzahl: zwei, eine oder keine Lösung.'
loesung: |
  **a)** Die Hochzahl $3$ ist ungerade, also gibt es genau eine Lösung. Es ist $\sqrt[3]{125} = 5$ und $\sqrt[3]{8} = 2$. Das Vorzeichen bleibt: $x = -\tfrac52$. Probe: $\left(-\tfrac52\right)^3 = -\tfrac{125}{8}$.
  ---
  **b)** Die Hochzahl $4$ ist gerade und $625 > 0$. Also $x = \pm\sqrt[4]{625} = \pm 5$, denn $5^4 = 625$.
  ---
  **c)** Eine sechste Potenz ist nie negativ, weil die Hochzahl gerade ist. Also hat $x^6 = -64$ keine reelle Lösung, $L = \emptyset$.
```

```aufgabe
id: gl-biquadratisch
titel: Biquadratische Gleichung
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Löse $x^4 - 10x^2 + 9 = 0$. Gib alle reellen Lösungen durch Strichpunkt getrennt ein.
teile:
  - typ: menge
    label: '$L$'
    loesung: ["1", "-1", "3", "-3"]
    fehler:
      - wert: ["1", "9"]
        meldung: |
          Das sind die Lösungen für $u = x^2$, nicht für $x$. Es fehlt die Rücksubstitution: Löse $x^2 = 1$ und $x^2 = 9$.
      - wert: ["1", "3"]
        meldung: |
          Aus $x^2 = 1$ und $x^2 = 9$ folgen jeweils **zwei** Werte. Auch negative Zahlen ergeben quadriert eine positive Zahl.
hinweise:
  - 'Setze $u = x^2$. Dann ist $x^4 = u^2$.'
loesung: |
  **Ansatz:** Es kommen nur $x^4$, $x^2$ und eine Zahl vor. Mit $u = x^2$ entsteht $u^2 - 10u + 9 = 0$. Zwei Zahlen mit Produkt $9$ und Summe $10$ sind $1$ und $9$: $(u - 1)(u - 9) = 0$.
  ---
  Rücksubstitution: $x^2 = 1$ ergibt $x = \pm 1$, und $x^2 = 9$ ergibt $x = \pm 3$.
  ---
  $L = \{-3;\ -1;\ 1;\ 3\}$. Probe mit $x = 3$: $81 - 90 + 9 = 0$.
```

```aufgabe
id: gl-biquadratisch-muster
titel: Nullstellen einer Polynomfunktion vierten Grades
niveau: 2
lernziel: 4
kompetenz: anwenden
quelle: "nach Musterprüfung Schranz-Kirlinger, Beispiel 3.1 (abgewandelt)"
angabe: |
  Gegeben ist $f(x) = 8 + 2x^2 - x^4$. Bestimme alle reellen Nullstellen. Hinweis: Setze $u = x^2$.

  a) Gib die reellen Nullstellen durch Strichpunkt getrennt ein.

  b) Beim Lösen für $u$ entsteht ein Wert, der keine reelle Nullstelle liefert. Welcher?
teile:
  - typ: menge
    label: 'a) Nullstellen'
    loesung: ["2", "-2"]
    fehler:
      - wert: ["4", "-2"]
        meldung: |
          Das sind die Werte von $u$. Gesucht sind aber die Werte von $x$. Löse noch $x^2 = u$ für jeden Wert.
      - wert: ["2", "-2", "sqrt(2)", "-sqrt(2)"]
        meldung: |
          Prüfe $x^2 = -2$. Ein Quadrat ist nie negativ. Dieser Wert von $u$ liefert keine reelle Lösung.
      - wert: ["2"]
        meldung: |
          Aus $x^2 = 4$ folgen zwei Werte. Denk an die negative Zahl, deren Quadrat $4$ ist.
  - typ: zahl
    label: 'b) verworfener Wert von $u$'
    loesung: "-2"
    fehler:
      - wert: "4"
        meldung: |
          Der Wert $u = 4$ liefert die Nullstellen $x = \pm 2$. Gesucht ist der andere Wert, für den $x^2 = u$ unlösbar ist.
hinweise:
  - 'Mit $u = x^2$ wird die Gleichung zu $8 + 2u - u^2 = 0$. Multipliziere mit $-1$, damit $u^2$ positiv vorne steht.'
  - 'Löse $u^2 - 2u - 8 = 0$ und prüfe dann für jedes $u$, ob $x^2 = u$ lösbar ist.'
loesung: |
  **Ansatz:** Nullstellen heißt $f(x) = 0$. Es kommen nur gerade Potenzen vor, also setzen wir $u = x^2$: $8 + 2u - u^2 = 0$. Mal $-1$ und geordnet: $u^2 - 2u - 8 = 0$.
  ---
  Zwei Zahlen mit Produkt $-8$ und Summe $2$ sind $4$ und $-2$. Also $(u - 4)(u + 2) = 0$, das heißt $u = 4$ oder $u = -2$.
  ---
  Rücksubstitution: $x^2 = 4$ ergibt $x = \pm 2$. Die Gleichung $x^2 = -2$ hat keine reelle Lösung, weil Quadrate nie negativ sind. Verworfen wird also $u = -2$.
  ---
  **Antwort:** $f$ hat die Nullstellen $-2$ und $2$. Probe: $f(2) = 8 + 8 - 16 = 0$.
```

```aufgabe
id: gl-polynomdivision
titel: Lösung raten und abspalten
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Löse $x^3 - 7x + 6 = 0$. Gib alle Lösungen durch Strichpunkt getrennt ein.
teile:
  - typ: menge
    label: '$L$'
    loesung: ["1", "2", "-3"]
    fehler:
      - wert: ["1", "6"]
        meldung: |
          Du hast vermutlich ohne Platzhalter für das fehlende $x^2$-Glied dividiert. Dann sinkt der Grad um zwei statt um eins.
          Schreib die Koeffizienten als $1$, $0$, $-7$, $6$.
      - wert: ["2", "-3"]
        meldung: |
          Die Lösung, die du zum Abspalten geraten hast, gehört ebenfalls zur Lösungsmenge. Schreib sie dazu.
      - wert: ["1", "-2", "3"]
        meldung: |
          Prüfe die Vorzeichen beim Zerlegen von $x^2 + x - 6$. Setz $3$ zur Probe ein: $27 - 21 + 6 = 12$.
hinweise:
  - 'Ganzzahlige Lösungen sind Teiler von $6$. Probiere zuerst $x = 1$.'
  - 'Teile durch $(x - 1)$. Achtung, das Glied mit $x^2$ fehlt. Im Horner-Schema lauten die Koeffizienten $1$, $0$, $-7$, $6$.'
loesung: |
  **Ansatz:** Es gibt ein Absolutglied, und es kommt $x^3$ vor. Also raten wir eine Lösung unter den Teilern von $6$. $x = 1$ ergibt $1 - 7 + 6 = 0$, ein Treffer.
  ---
  Horner-Schema mit $x_0 = 1$ und den Koeffizienten $1$, $0$, $-7$, $6$: $1$; $0 + 1 = 1$; $-7 + 1 = -6$; $6 - 6 = 0$. Der Rest ist $0$, und der Quotient ist $x^2 + x - 6$.
  ---
  $x^2 + x - 6 = (x + 3)(x - 2)$, also $x = -3$ oder $x = 2$.
  ---
  $L = \{-3;\ 1;\ 2\}$. Probe mit $x = -3$: $-27 + 21 + 6 = 0$.
gefuehrt:
  - text: Welchen Wert hat $x^3 - 7x + 6$ für $x = 1$?
    teil: { typ: zahl, loesung: "1 - 7 + 6", fehler: [ { wert: "14", meldung: 'Achte auf das Vorzeichen: $-7\cdot 1 = -7$.' } ] }
    erklaerung: '$1 - 7 + 6 = 0$. Also ist $x = 1$ eine Lösung, und $(x - 1)$ ist ein Faktor.'
  - text: Dividiere $x^3 - 7x + 6$ durch $(x - 1)$. Welcher Quotient entsteht?
    teil: { typ: term, loesung: "x^2 + x - 6", fehler: [ { wert: "x - 6", meldung: 'Das fehlende $x^2$-Glied braucht den Platzhalter $0$. Aus Grad $3$ wird beim Dividieren Grad $2$.' } ] }
    erklaerung: 'Horner mit $1$, $0$, $-7$, $6$ liefert $1$, $1$, $-6$ und Rest $0$. Der Quotient ist $x^2 + x - 6$.'
  - text: Löse $x^2 + x - 6 = 0$. Gib beide Lösungen durch Strichpunkt getrennt ein.
    teil: { typ: menge, loesung: ["2", "-3"] }
    erklaerung: 'Zwei Zahlen mit Produkt $-6$ und Summe $-1$ sind $-3$ und $2$. Also $(x + 3)(x - 2) = 0$.'
  - text: Fasse alle Lösungen der ursprünglichen Gleichung zusammen.
    erklaerung: 'Zur geratenen Lösung $1$ kommen $2$ und $-3$. Also $L = \{-3;\ 1;\ 2\}$.'
```

```aufgabe
id: gl-hoeher-substitution
titel: Substitution mit dritter Potenz
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Löse $x^6 - 9x^3 + 8 = 0$. Gib alle reellen Lösungen durch Strichpunkt getrennt ein.
teile:
  - typ: menge
    label: '$L$'
    loesung: ["1", "2"]
    fehler:
      - wert: ["1", "8"]
        meldung: |
          Das sind die Werte von $u = x^3$. Gesucht ist $x$. Löse noch $x^3 = 1$ und $x^3 = 8$.
      - wert: ["1", "-1", "2", "-2"]
        meldung: |
          Bei einer **ungeraden** Hochzahl gibt es kein $\pm$. Rechne zur Probe $(-2)^3$ aus. Das ist $-8$, nicht $8$.
hinweise:
  - 'Es ist $x^6 = (x^3)^2$. Welche Substitution macht daraus eine quadratische Gleichung?'
  - 'Setze $u = x^3$, löse $u^2 - 9u + 8 = 0$ und ziehe dann die dritte Wurzel.'
loesung: |
  **Ansatz:** Die Gleichung enthält $x^3$ und dessen Quadrat $x^6$. Mit $u = x^3$ wird sie zu $u^2 - 9u + 8 = 0$.
  ---
  Zwei Zahlen mit Produkt $8$ und Summe $9$ sind $1$ und $8$. Also $(u - 1)(u - 8) = 0$ und $u = 1$ oder $u = 8$.
  ---
  Rücksubstitution: $x^3 = 1$ ergibt $x = 1$, und $x^3 = 8$ ergibt $x = 2$. Die Hochzahl $3$ ist ungerade, deshalb gibt es jeweils nur eine Lösung.
  ---
  $L = \{1;\ 2\}$. Probe mit $x = 2$: $64 - 72 + 8 = 0$.
```

```aufgabe
id: gl-hoeher-fehler
titel: Wo ist die Lösung verloren gegangen?
niveau: 2
lernziel: 0
kompetenz: begruenden
angabe: |
  Eine Mitschülerin löst $x^3 = 25x$ so:
  $$x^3 = 25x \quad\overset{:x}{\Longrightarrow}\quad x^2 = 25 \quad\Longrightarrow\quad L = \{-5;\ 5\}.$$
  a) Erkläre, welcher Schritt falsch ist und warum.

  b) Gib die richtige Lösungsmenge durch Strichpunkt getrennt an.
teile:
  - typ: text
    label: 'a)'
    muster: |
      Die Division durch $x$ ist nur für $x \neq 0$ erlaubt. Sie ist deshalb keine Äquivalenzumformung. Ob $x = 0$ die
      Gleichung erfüllt, wird nie geprüft. Tatsächlich gilt $0^3 = 25\cdot 0$, also ist $x = 0$ eine Lösung, die verloren geht.
  - typ: menge
    label: 'b) $L$'
    loesung: ["0", "5", "-5"]
    fehler:
      - wert: ["-5", "5"]
        meldung: |
          Das ist das Ergebnis der Mitschülerin. Setz $x = 0$ in die Ausgangsgleichung ein und prüfe, ob sie stimmt.
hinweise:
  - 'Was passiert bei der Division durch $x$, wenn $x = 0$ ist?'
  - 'Bring alles auf eine Seite und hebe $x$ heraus: $x\,(x^2 - 25) = 0$.'
loesung: |
  **Ansatz:** Wir prüfen jede Umformung darauf, ob sie umkehrbar ist. Die Division durch $x$ setzt $x \neq 0$ voraus. Der Fall $x = 0$ wird dabei übersehen.
  ---
  Richtig ist: $x^3 - 25x = 0$, also $x\,(x^2 - 25) = x\,(x - 5)(x + 5) = 0$.
  ---
  Nullproduktsatz: $x = 0$, $x = 5$ oder $x = -5$. Also $L = \{-5;\ 0;\ 5\}$. Probe für $x = 0$: $0 = 0$.
```

```aufgabe
id: gl-polynom-grad4
titel: Zweimal abspalten bei Grad 4
niveau: 3
lernziel: 4
kompetenz: rechnen
angabe: |
  Löse $x^4 - x^3 - 7x^2 + x + 6 = 0$.

  a) Bestimme den Quotienten $(x^4 - x^3 - 7x^2 + x + 6) : (x - 1)$.

  b) Gib alle Lösungen der Gleichung durch Strichpunkt getrennt an.
teile:
  - typ: term
    label: 'a) Quotient'
    loesung: "x^3 - 7x - 6"
    fehler:
      - wert: "x^3 - 7x^2 - 6"
        meldung: |
          Im Horner-Schema ist die zweite Summe $-1 + 1 = 0$. Der Quotient hat also kein $x^2$-Glied. Ordne die Summen den Potenzen $x^3$, $x^2$, $x$, $1$ zu.
  - typ: menge
    label: 'b) $L$'
    loesung: ["1", "-1", "3", "-2"]
    fehler:
      - wert: ["-1", "3", "-2"]
        meldung: |
          Die erste geratene Lösung $x = 1$ gehört auch zur Lösungsmenge.
hinweise:
  - 'Teiler von $6$ sind Kandidaten. Sowohl $x = 1$ als auch $x = -1$ sind Lösungen.'
  - 'Spalte zuerst $(x - 1)$ mit dem Horner-Schema ab, dann vom Quotienten $(x + 1)$. Übrig bleibt eine quadratische Gleichung.'
loesung: |
  **Ansatz:** Es gibt ein Absolutglied und ungerade Potenzen, also raten wir unter den Teilern von $6$. $x = 1$: $1 - 1 - 7 + 1 + 6 = 0$. Treffer.
  ---
  **a)** Horner mit $x_0 = 1$ und $1$, $-1$, $-7$, $1$, $6$: $1$; $-1 + 1 = 0$; $-7 + 0 = -7$; $1 - 7 = -6$; $6 - 6 = 0$. Der Quotient ist $x^3 + 0x^2 - 7x - 6 = x^3 - 7x - 6$.
  ---
  Auch $x = -1$ löst den Quotienten: $-1 + 7 - 6 = 0$. Horner mit $x_0 = -1$ und $1$, $0$, $-7$, $-6$: $1$; $-1$; $-7 + 1 = -6$; $-6 + 6 = 0$. Übrig bleibt $x^2 - x - 6$.
  ---
  $x^2 - x - 6 = (x - 3)(x + 2)$, also $x = 3$ oder $x = -2$.
  ---
  **b)** $L = \{-2;\ -1;\ 1;\ 3\}$. Das sind vier Lösungen, mehr kann es bei Grad $4$ nicht geben. Probe mit $x = 3$: $81 - 27 - 63 + 3 + 6 = 0$.
```

```aufgabe
id: gl-horner
titel: Ein Paket mit 18 dm³
niveau: 3
lernziel: 4
kompetenz: modellieren
angabe: |
  Ein Paket hat eine quadratische Grundfläche mit der Seitenlänge $x$ (in dm). Die Höhe ist um $1$ dm kleiner als die
  Grundseite. Das Volumen beträgt $18$ dm³.

  a) Bestimme die Seitenlänge $x$ der Grundfläche.

  b) Berechne die Oberfläche des Pakets.
teile:
  - typ: zahl
    label: 'a) $x$'
    einheit: dm
    loesung: "3"
    fehler:
      - wert: "nthRoot(18, 3)"
        meldung: |
          Du hast mit einem Würfel gerechnet. Die Höhe ist aber $x - 1$, nicht $x$. Das Volumen ist $x^2\,(x - 1)$.
  - typ: zahl
    label: 'b) Oberfläche'
    einheit: dm²
    loesung: "2*3^2 + 4*3*2"
    fehler:
      - wert: "3^2 + 4*3*2"
        meldung: |
          Ein Quader hat zwei quadratische Flächen, Boden **und** Deckel.
hinweise:
  - 'Volumen gleich Grundfläche mal Höhe: $x^2\,(x - 1) = 18$.'
  - 'Bringe die Gleichung auf $x^3 - x^2 - 18 = 0$, rate eine Lösung unter den Teilern von $18$ und spalte sie ab.'
loesung: |
  **Ansatz:** Das Volumen eines Quaders ist Grundfläche mal Höhe. Also $x^2\,(x - 1) = 18$, ausmultipliziert $x^3 - x^2 - 18 = 0$.
  ---
  Raten unter den Teilern von $18$: $x = 3$ ergibt $27 - 9 - 18 = 0$. Horner mit $1$, $-1$, $0$, $-18$: $1$; $2$; $6$; Rest $0$. Der Quotient ist $x^2 + 2x + 6$.
  ---
  Die Diskriminante von $x^2 + 2x + 6$ ist $4 - 24 = -20 < 0$. Es gibt also keine weitere reelle Lösung. Die Grundseite ist $3$ dm, die Höhe $2$ dm.
  ---
  **b)** Oberfläche: zwei Quadrate mit $3\cdot 3 = 9$ dm² und vier Rechtecke mit $3\cdot 2 = 6$ dm². Zusammen $18 + 24 = 42$ dm².
  ---
  **Probe:** $3^2\cdot 2 = 18$ dm³. **Antwort:** Die Grundseite ist $3$ dm lang, die Oberfläche beträgt $42$ dm².
```
## Bruchgleichungen

```aufgabe
id: gl-bruch-check-nenner
titel: Wann ist ein Bruch nicht definiert?
niveau: 1
art: check
lernziel: 0
angabe: |
  Für welche Zahl $x$ ist der Term $\dfrac{5}{x + 3}$ **nicht** definiert?
  Herkunft: [2.1 Gleichungen und Äquivalenzumformungen](/lernen/mathe3/gleichungen/gleichungen-und-aequivalenzumformungen).
teile:
  - typ: zahl
    label: '$x =$'
    loesung: "-3"
    fehler:
      - wert: "3"
        meldung: |
          Setz $3$ ein: Der Nenner ist dann $3 + 3 = 6$, und $\tfrac56$ ist eine gewöhnliche Zahl. Gesucht ist die Zahl,
          für die der Nenner null wird.
      - wert: "0"
        meldung: |
          Für $x = 0$ ist der Nenner $0 + 3 = 3$, also nicht null. Problematisch ist nicht $x = 0$, sondern ein Nenner $0$.
hinweise:
  - 'Durch null darf man nicht dividieren. Wann ist der Nenner $x + 3$ gleich null?'
loesung: |
  Ein Bruch ist nicht definiert, wenn sein Nenner null ist, weil man durch null nicht dividieren kann.
  ---
  $x + 3 = 0$ gilt für $x = -3$. Für diese Zahl ist der Term nicht definiert, für alle anderen schon.
```

Viele Anwendungen führen auf Brüche, in deren Nenner die Unbekannte steht. Wie lange brauchen zwei Pumpen gemeinsam?
Wie schnell fährt jemand, wenn er für dieselbe Strecke eine Stunde weniger braucht? In beiden Fällen steht eine Zeit
oder eine Geschwindigkeit im Nenner. Solche Gleichungen heißen Bruchgleichungen.

:::definition[Bruchgleichung]
Eine **Bruchgleichung** ist eine Gleichung, in der die Unbekannte im **Nenner** eines Bruchs vorkommt.
:::

**Beispiel:** $\frac{3}{x} = 6$ ist eine Bruchgleichung, weil $x$ im Nenner steht. **Nichtbeispiel:** $\frac{x}{3} + 1 = 2$
ist **keine** Bruchgleichung. Dort steht $x$ nur im Zähler, und die Gleichung ist linear. Man multipliziert einfach mit $3$.

Die Idee beim Lösen ist immer dieselbe. Du multiplizierst beide Seiten mit dem **Hauptnenner**, also dem kleinsten
gemeinsamen Vielfachen aller Nenner. Danach steht eine Gleichung ohne Brüche da, die du schon lösen kannst.

Es gibt aber einen Haken. Der Hauptnenner enthält $x$ und kann deshalb für bestimmte Zahlen null werden. Mit null
multiplizieren ist keine Äquivalenzumformung, denn es macht aus jeder Gleichung die wahre Aussage $0 = 0$. Deshalb
bestimmst du **vor** dem Multiplizieren die **Definitionsmenge** $D$. Sie enthält alle Zahlen, für die kein Nenner null ist.
Am Ende prüfst du jede gefundene Lösung gegen $D$.

:::beispiel[Bruchgleichung mit einer Lösung]
Löse $\dfrac{2}{x - 1} + \dfrac{3}{x + 1} = \dfrac{5}{x^2 - 1}$.

1. **Nenner zerlegen:** Nach der dritten binomischen Formel ist $x^2 - 1 = (x - 1)(x + 1)$.
2. **Definitionsmenge:** Die Nenner werden null für $x = 1$ und $x = -1$. Also $D = \R\setminus\{-1;\ 1\}$. Gelesen: „alle reellen Zahlen ohne $-1$ und $1$“.
3. **Mit dem Hauptnenner $(x - 1)(x + 1)$ multiplizieren:** Im ersten Bruch kürzt sich $(x - 1)$, im zweiten $(x + 1)$. Es bleibt $2(x + 1) + 3(x - 1) = 5$.
4. **Lösen:** $2x + 2 + 3x - 3 = 5$, also $5x - 1 = 5$ und $x = \tfrac65$.
5. **Abgleich mit $D$:** $\tfrac65$ ist weder $1$ noch $-1$. Also $L = \left\{\tfrac65\right\}$.
:::

:::beispiel[Die Lösung liegt nicht in D]
Löse $\dfrac{x}{x - 2} = \dfrac{2}{x - 2} + 3$.

1. **Definitionsmenge:** Der Nenner $x - 2$ ist null für $x = 2$. Also $D = \R\setminus\{2\}$.
2. **Mit $(x - 2)$ multiplizieren**, und zwar **jeden** Summanden: $x = 2 + 3(x - 2)$.
3. **Lösen:** $x = 2 + 3x - 6$, also $x = 3x - 4$, dann $-2x = -4$ und $x = 2$.
4. **Abgleich mit $D$:** $2$ liegt nicht in $D$. Für $x = 2$ stünde in der Ausgangsgleichung $\frac{2}{0}$.

**Ergebnis:** Die Gleichung hat **keine** Lösung, $L = \emptyset$. Die Zahl $2$ ist eine **Scheinlösung**. Sie ist erst durch
das Multiplizieren mit $(x - 2)$ entstanden.
:::

```plot
x: [-2, 6]
y: [-4, 2]
achsen: { x: "x", y: "y" }
graphen:
  - { f: "-2", label: "linke minus rechte Seite", farbe: 0 }
punkte:
  - { x: 2, y: -2, label: "Lücke bei x = 2", offen: true, farbe: 1 }
beschriftung: Für die Gleichung x/(x − 2) = 2/(x − 2) + 3 ist „linke Seite minus rechte Seite“ für jedes erlaubte x gleich −2, also nie 0. Bei x = 2 ist der Ausdruck gar nicht definiert (offener Punkt). Darum hat die Gleichung keine Lösung.
```

:::intuition
Warum entsteht die Scheinlösung? Setzt man $x = 2$ in die Gleichung $x = 2 + 3(x - 2)$ ein, steht dort $2 = 2$. Diese
Gleichung erhält man aber nur, wenn man vorher mit $x - 2 = 0$ multipliziert hat. Multiplizieren mit null macht
jede Gleichung wahr. Zusätzliche Lösungen können deshalb nur Nullstellen des Hauptnenners sein. Genau diese hast du
aus $D$ ausgeschlossen. Der Abgleich mit $D$ fängt also jede Scheinlösung.
:::

:::beispiel[Zwei Zuleitungen füllen einen Tank]
Zwei Zuleitungen füllen einen Tank gemeinsam in $6$ Stunden. Leitung A allein braucht $5$ Stunden länger als Leitung B
allein. Wie lange braucht jede Leitung allein?

1. **Variable festlegen:** B braucht allein $x$ Stunden, A braucht $x + 5$ Stunden. Sinnvoll ist nur $x > 0$.
2. **Leistung pro Stunde:** Wer für den ganzen Tank $x$ Stunden braucht, schafft pro Stunde $\frac1x$ des Tanks. Gemeinsam schaffen beide $\frac16$ des Tanks pro Stunde. Also $\frac1x + \frac{1}{x + 5} = \frac16$.
3. **Definitionsmenge:** $x \neq 0$ und $x \neq -5$. Hauptnenner $6x(x + 5)$.
4. **Multiplizieren:** $6(x + 5) + 6x = x(x + 5)$, also $12x + 30 = x^2 + 5x$ und $x^2 - 7x - 30 = 0$.
5. **Lösen:** $(x - 10)(x + 3) = 0$, also $x = 10$ oder $x = -3$. Eine negative Zeit ist sinnlos, $x = -3$ fällt weg.

**Antwort:** Leitung B braucht allein $10$ h, Leitung A $15$ h. **Probe:** $\frac{1}{10} + \frac{1}{15} = \frac{3}{30} + \frac{2}{30} = \frac{5}{30} = \frac16$.
:::

:::achtung[Nicht jeden Summanden multipliziert]
Eine typische Fehlrechnung zu $\frac{4}{x} + 1 = \frac{6}{x}$: „Mal $x$ ergibt $4 + 1 = 6$, also keine Lösung.“ Hier wurde
die $1$ nicht mit $x$ multipliziert. Beim Multiplizieren einer Gleichung wird **jeder** Summand auf beiden Seiten
multipliziert. **Richtig:** $4 + x = 6$, also $x = 2$. Probe: $\frac42 + 1 = 3$ und $\frac62 = 3$.
:::

:::achtung[Scheinlösung nicht verworfen]
Eine typische Fehlrechnung zu $\frac{x^2}{x - 3} = \frac{9}{x - 3}$: „Mal $(x - 3)$ ergibt $x^2 = 9$, also $L = \{-3;\ 3\}$.“
Aber $x = 3$ macht den Nenner null und liegt nicht in $D = \R\setminus\{3\}$. **Richtig:** $L = \{-3\}$. Probe für $-3$:
links $\frac{9}{-6}$, rechts $\frac{9}{-6}$.
:::

:::achtung[Arbeitszeiten einfach addiert]
Eine verbreitete Fehlrechnung zu den Zuleitungen: „B braucht $10$ h, A braucht $15$ h, gemeinsam also $10 + 15 = 25$ h.“
Gemeinsam geht es aber **schneller** als allein, nicht langsamer. Addieren darf man nur die **Leistungen pro Stunde**:
$\frac{1}{10} + \frac{1}{15} = \frac16$. Die gemeinsame Zeit ist der Kehrwert davon, also $6$ h.
:::

:::merke[Rezept: Bruchgleichung lösen]
1. Alle Nenner zerlegen und die **Definitionsmenge** bestimmen: Nullstellen der Nenner ausschließen.
2. Den Hauptnenner bestimmen und **jeden** Summanden auf beiden Seiten damit multiplizieren.
3. Die entstandene Gleichung ohne Brüche lösen.
4. Jede Lösung mit $D$ vergleichen. Was nicht in $D$ liegt, ist eine Scheinlösung und wird verworfen.
5. Bei Sachaufgaben zusätzlich prüfen, ob die Lösung sinnvoll ist, etwa ob eine Zeit positiv ist.
:::

```reflexion
frage: Bei Bruchgleichungen genügt der Abgleich mit der Definitionsmenge, eine Probe ist nicht unbedingt nötig. Warum ist das so, während bei Wurzelgleichungen die Probe Pflicht ist?
antwort: |
  Das Multiplizieren mit dem Hauptnenner ist für jede Zahl aus $D$ eine Äquivalenzumformung, weil der Hauptnenner dort
  nicht null ist. Zusätzliche Lösungen können nur dort entstehen, wo der Hauptnenner null ist. Genau diese Zahlen sind
  aus $D$ ausgeschlossen. Beim Quadrieren einer Wurzelgleichung ist es anders: Dort kommen Lösungen einer ganz anderen
  Gleichung hinzu, nämlich von „Wurzel gleich minus rechte Seite“. Diese Zahlen können mitten in der Definitionsmenge
  liegen. Nur eine Probe in der Ausgangsgleichung findet sie. Eine Probe ist trotzdem immer eine gute Kontrolle gegen Rechenfehler.
```

```aufgabe
id: gl-bruch-einfach
titel: Einfache Bruchgleichung
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Löse $\dfrac{4}{x} + \dfrac13 = \dfrac{5}{x}$. Gib die Lösung als Zahl an.
teile:
  - typ: zahl
    label: '$x$'
    loesung: "3"
    fehler:
      - wert: "1"
        meldung: |
          Prüfe, wie du $\tfrac13$ mit dem Hauptnenner $3x$ multipliziert hast. $3x\cdot\tfrac13$ ergibt $x$, nicht $3x$.
      - wert: "-3"
        meldung: |
          Prüfe das Vorzeichen beim Umstellen. Setz deinen Wert zur Probe ein: Die linke Seite ist dann nicht gleich der rechten.
hinweise:
  - '$D = \R\setminus\{0\}$. Der Hauptnenner ist $3x$. Multipliziere jeden Summanden damit.'
loesung: |
  **Ansatz:** $x$ steht im Nenner, also zuerst $D = \R\setminus\{0\}$. Dann mit dem Hauptnenner $3x$ multiplizieren, damit die Brüche verschwinden: $12 + x = 15$.
  ---
  Daraus folgt $x = 3$, und $3$ liegt in $D$.
  ---
  **Probe:** $\tfrac43 + \tfrac13 = \tfrac53$ und rechts $\tfrac53$. Also $L = \{3\}$.
```

```aufgabe
id: gl-bruch-definitionsmenge
titel: Definitionsmenge bestimmen
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Welche Zahlen sind aus der Definitionsmenge der Gleichung $\dfrac{3}{x^2 - 9} + \dfrac{1}{x} = 2$ auszuschließen?
  Gib sie durch Strichpunkt getrennt ein.
teile:
  - typ: menge
    label: 'ausgeschlossene Zahlen'
    loesung: ["-3", "0", "3"]
    fehler:
      - wert: ["3"]
        meldung: |
          Auch $(-3)^2 - 9 = 0$. Der Nenner $x^2 - 9$ hat zwei Nullstellen. Außerdem gibt es einen zweiten Nenner.
      - wert: ["-3", "3"]
        meldung: |
          Der zweite Bruch $\tfrac{1}{x}$ hat ebenfalls einen Nenner, der null werden kann.
      - wert: ["9", "0"]
        meldung: |
          Aus $x^2 - 9 = 0$ folgt $x^2 = 9$. Gesucht ist $x$, nicht $x^2$.
hinweise:
  - 'Setze jeden Nenner gleich null. $x^2 - 9 = (x - 3)(x + 3)$.'
loesung: |
  **Ansatz:** Ausgeschlossen werden alle Zahlen, für die ein Nenner null ist, weil dort durch null dividiert würde.
  ---
  $x^2 - 9 = (x - 3)(x + 3) = 0$ für $x = 3$ oder $x = -3$. Der Nenner $x$ ist null für $x = 0$.
  ---
  Also $D = \R\setminus\{-3;\ 0;\ 3\}$. Ausgeschlossen sind $-3$, $0$ und $3$.
```

```aufgabe
id: gl-bruch-kreuz
titel: Zwei Brüche gleichsetzen
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Löse $\dfrac{3}{x - 2} = \dfrac{5}{x + 4}$.
teile:
  - typ: zahl
    label: '$x$'
    loesung: "11"
    fehler:
      - wert: "7"
        meldung: |
          Beim Multiplizieren mit $(x + 4)$ braucht die ganze Klammer den Faktor $3$: $3(x + 4) = 3x + 12$, nicht $3x + 4$.
      - wert: "-11"
        meldung: |
          Prüfe das Vorzeichen beim Zusammenfassen. Setz deinen Wert zur Probe in beide Brüche ein.
hinweise:
  - 'Multipliziere mit $(x - 2)(x + 4)$. Es bleibt $3(x + 4) = 5(x - 2)$.'
loesung: |
  **Ansatz:** $D = \R\setminus\{-4;\ 2\}$, weil dort ein Nenner null ist. Multiplikation mit $(x - 2)(x + 4)$ ergibt $3(x + 4) = 5(x - 2)$.
  ---
  Ausmultiplizieren: $3x + 12 = 5x - 10$. Dann $22 = 2x$, also $x = 11$. Das liegt in $D$.
  ---
  **Probe:** $\tfrac{3}{9} = \tfrac13$ und $\tfrac{5}{15} = \tfrac13$. Also $L = \{11\}$.
```

```aufgabe
id: gl-bruch-ausschluss
titel: Bruchgleichung mit Scheinlösung
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Löse $\dfrac{x}{x + 2} + \dfrac{3}{x - 2} = \dfrac{12}{x^2 - 4}$. Gib die Lösungsmenge durch Strichpunkt getrennt an.
teile:
  - typ: menge
    label: '$L$'
    loesung: ["-3"]
    fehler:
      - wert: ["-3", "2"]
        meldung: |
          Beide Zahlen lösen die Gleichung ohne Brüche. Prüfe aber, ob jede in der Definitionsmenge liegt. Was steht im Nenner für $x = 2$?
      - wert: ["2"]
        meldung: |
          Für $x = 2$ ist der Nenner $x - 2$ null. Diese Zahl kann keine Lösung sein. Die andere Lösung der quadratischen Gleichung bleibt übrig.
hinweise:
  - '$x^2 - 4 = (x - 2)(x + 2)$. Bestimme zuerst $D$.'
  - 'Mit dem Hauptnenner $(x - 2)(x + 2)$ multiplizieren. Es entsteht eine quadratische Gleichung, deren Lösungen du mit $D$ vergleichst.'
loesung: |
  **Ansatz:** $x^2 - 4 = (x - 2)(x + 2)$, also $D = \R\setminus\{-2;\ 2\}$. Mit dem Hauptnenner $(x - 2)(x + 2)$ multiplizieren: $x(x - 2) + 3(x + 2) = 12$.
  ---
  Ausmultiplizieren: $x^2 - 2x + 3x + 6 = 12$, also $x^2 + x - 6 = 0$ und $(x + 3)(x - 2) = 0$.
  ---
  Kandidaten sind $-3$ und $2$. Die Zahl $2$ liegt nicht in $D$ und ist eine Scheinlösung.
  ---
  **Probe für $-3$:** links $\tfrac{-3}{-1} + \tfrac{3}{-5} = 3 - 0{,}6 = 2{,}4$, rechts $\tfrac{12}{5} = 2{,}4$. Also $L = \{-3\}$.
```

```aufgabe
id: gl-bruch-gefuehrt
titel: Bruchgleichung mit zwei Lösungen
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Löse $\dfrac{2}{x} + \dfrac{3}{x + 1} = 2$. Gib die Lösungsmenge durch Strichpunkt getrennt an.
teile:
  - typ: menge
    label: '$L$'
    loesung: ["2", "-1/2"]
    fehler:
      - wert: ["2"]
        meldung: |
          $x = 2$ stimmt. Die quadratische Gleichung hat aber zwei Lösungen. Prüfe, ob auch die zweite in $D$ liegt.
      - wert: ["-2", "1/2"]
        meldung: |
          Prüfe die Vorzeichen beim Zerlegen. Setz $x = -2$ zur Probe ein: $-1 + \tfrac{3}{-1} = -4$, nicht $2$.
hinweise:
  - '$D = \R\setminus\{-1;\ 0\}$. Der Hauptnenner ist $x(x + 1)$.'
  - 'Nach dem Multiplizieren entsteht $2(x + 1) + 3x = 2x(x + 1)$. Bring alles auf eine Seite und löse die quadratische Gleichung.'
loesung: |
  **Ansatz:** $D = \R\setminus\{-1;\ 0\}$, weil dort ein Nenner null ist. Mit $x(x + 1)$ multiplizieren: $2(x + 1) + 3x = 2x(x + 1)$.
  ---
  Links $5x + 2$, rechts $2x^2 + 2x$. Alles nach rechts: $2x^2 - 3x - 2 = 0$.
  ---
  Große Lösungsformel: $x = \frac{3 \pm \sqrt{9 + 16}}{4} = \frac{3 \pm 5}{4}$, also $x = 2$ oder $x = -\tfrac12$. Beide liegen in $D$.
  ---
  **Probe:** Für $x = 2$: $1 + 1 = 2$. Für $x = -\tfrac12$: $-4 + \frac{3}{0{,}5} = -4 + 6 = 2$. Also $L = \left\{-\tfrac12;\ 2\right\}$.
gefuehrt:
  - text: Welche Zahlen musst du aus der Definitionsmenge ausschließen? Gib sie durch Strichpunkt getrennt ein.
    teil: { typ: menge, loesung: ["0", "-1"], fehler: [ { wert: ["0"], meldung: 'Auch der Nenner $x + 1$ kann null werden.' } ] }
    erklaerung: 'Die Nenner $x$ und $x + 1$ sind null für $x = 0$ und $x = -1$. Also $D = \R\setminus\{-1;\ 0\}$.'
  - text: Multipliziere mit dem Hauptnenner $x(x + 1)$ und bringe alles auf die Seite von $2x^2$. Welcher Term steht dann vor $= 0$?
    teil: { typ: term, loesung: "2x^2 - 3x - 2", fehler: [ { wert: "2x^2 - 3x - 1", meldung: 'Im ersten Bruch ergibt $x(x + 1)\cdot\tfrac2x$ den Term $2(x + 1) = 2x + 2$. Die ganze Klammer wird mit $2$ multipliziert.' } ] }
    erklaerung: '$2(x + 1) + 3x = 2x(x + 1)$ ergibt $5x + 2 = 2x^2 + 2x$, also $2x^2 - 3x - 2 = 0$.'
  - text: Löse die quadratische Gleichung. Gib beide Lösungen durch Strichpunkt getrennt ein.
    teil: { typ: menge, loesung: ["2", "-1/2"] }
    erklaerung: '$x = \frac{3 \pm 5}{4}$, also $2$ und $-\tfrac12$.'
  - text: Vergleiche mit $D$. Welche Lösungen bleiben?
    erklaerung: 'Weder $2$ noch $-\tfrac12$ ist ausgeschlossen. Beide bleiben, $L = \left\{-\tfrac12;\ 2\right\}$.'
```

```aufgabe
id: gl-bruch-fehler
titel: Fehler finden in einer Bruchgleichung
niveau: 2
lernziel: 0
kompetenz: begruenden
angabe: |
  Jemand löst $\dfrac{2x}{x - 4} = \dfrac{8}{x - 4} + 1$ so: „Mal $(x - 4)$ ergibt $2x = 8 + x - 4$, also $x = 4$.
  Die Lösungsmenge ist $\{4\}$.“

  a) Was ist falsch? Begründe.

  b) Welche Lösungsmenge ist richtig?
teile:
  - typ: text
    label: 'a)'
    muster: |
      Die Rechnung selbst stimmt, aber die Definitionsmenge wurde nicht beachtet. Für $x = 4$ ist der Nenner $x - 4$ null.
      Die Ausgangsgleichung ist dort gar nicht definiert. Die Zahl $4$ ist durch das Multiplizieren mit $x - 4 = 0$ als
      Scheinlösung entstanden und muss verworfen werden.
  - typ: auswahl
    label: 'b)'
    optionen:
      - '$L = \{4\}$'
      - '$L = \emptyset$'
      - '$L = \R\setminus\{4\}$'
      - '$L = \{-4\}$'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Setz $x = 4$ in die Ausgangsgleichung ein. Im Nenner steht dann $0$.'
      - wert: 2
        meldung: 'Das ist die Definitionsmenge, nicht die Lösungsmenge. Prüfe eine Zahl daraus, etwa $x = 0$: links $0$, rechts $-2 + 1 = -1$.'
      - wert: 3
        meldung: 'Prüfe $x = -4$: links $\tfrac{-8}{-8} = 1$, rechts $\tfrac{8}{-8} + 1 = 0$. Das stimmt nicht.'
hinweise:
  - 'Bestimme zuerst die Definitionsmenge der Ausgangsgleichung.'
  - 'Vergleiche die gefundene Zahl mit der Definitionsmenge.'
loesung: |
  **Ansatz:** Wir prüfen, ob jede Umformung erlaubt war. Die Definitionsmenge ist $D = \R\setminus\{4\}$, weil der Nenner $x - 4$ für $x = 4$ null ist.
  ---
  Die Rechnung $2x = 8 + x - 4$, also $x = 4$, ist richtig. Aber $4$ liegt nicht in $D$.
  ---
  Die einzige Kandidatin ist eine Scheinlösung. Also hat die Gleichung keine Lösung: $L = \emptyset$.
```

```aufgabe
id: gl-arbeit
titel: Zwei Pumpen leeren ein Becken
niveau: 3
lernziel: 5
kompetenz: modellieren
angabe: |
  Zwei Pumpen leeren ein Becken gemeinsam in $4$ Stunden. Pumpe A allein braucht $6$ Stunden länger als Pumpe B allein.
  Wie lange braucht jede Pumpe allein? Gib die Zeiten in Stunden an.
teile:
  - typ: zahl
    label: 'Pumpe B allein'
    einheit: h
    loesung: "6"
    fehler:
      - wert: "-4"
        meldung: 'Diese Zahl löst die quadratische Gleichung, aber eine Zeit kann nicht negativ sein.'
  - typ: zahl
    label: 'Pumpe A allein'
    einheit: h
    loesung: "12"
    fehler:
      - wert: "2"
        meldung: 'Gemeinsam geht es schneller als allein. Keine Pumpe kann allein schneller sein als beide zusammen.'
hinweise:
  - 'Braucht B allein $x$ Stunden, schafft B pro Stunde $\tfrac1x$ des Beckens. A schafft $\tfrac{1}{x + 6}$.'
  - 'Ansatz: $\tfrac1x + \tfrac{1}{x + 6} = \tfrac14$. Multipliziere mit $4x(x + 6)$.'
loesung: |
  **Ansatz:** B braucht $x$ Stunden, A braucht $x + 6$ Stunden, sinnvoll ist nur $x > 0$. Addieren darf man die Leistungen pro Stunde: $\frac1x + \frac{1}{x + 6} = \frac14$.
  ---
  $D$ schließt $0$ und $-6$ aus. Mit $4x(x + 6)$ multiplizieren: $4(x + 6) + 4x = x(x + 6)$, also $8x + 24 = x^2 + 6x$ und $x^2 - 2x - 24 = 0$.
  ---
  $(x - 6)(x + 4) = 0$, also $x = 6$ oder $x = -4$. Eine negative Zeit ist sinnlos, also $x = 6$.
  ---
  **Antwort:** B braucht allein $6$ h, A braucht $12$ h. **Probe:** $\frac16 + \frac1{12} = \frac{2}{12} + \frac{1}{12} = \frac{3}{12} = \frac14$.
```

```aufgabe
id: gl-bruch-radtour
titel: Schneller fahren, früher ankommen
niveau: 3
lernziel: 5
kompetenz: modellieren
angabe: |
  Eine Radfahrerin fährt eine Strecke von $60$ km. Wäre sie im Schnitt um $5$ km/h schneller, käme sie $1$ Stunde früher an.
  Wie groß ist ihre Durchschnittsgeschwindigkeit?
teile:
  - typ: zahl
    label: 'Geschwindigkeit'
    einheit: km/h
    loesung: "15"
    fehler:
      - wert: "20"
        meldung: 'Das ist die schnellere Geschwindigkeit. Gefragt ist die tatsächliche, also die langsamere.'
hinweise:
  - 'Zeit ist Weg durch Geschwindigkeit. Bei der Geschwindigkeit $v$ dauert die Fahrt $\tfrac{60}{v}$ Stunden.'
  - 'Ansatz: $\tfrac{60}{v} - \tfrac{60}{v + 5} = 1$. Multipliziere mit $v(v + 5)$.'
loesung: |
  **Ansatz:** Mit der Geschwindigkeit $v$ in km/h dauert die Fahrt $\frac{60}{v}$ h, mit $v + 5$ nur $\frac{60}{v + 5}$ h. Die Differenz ist $1$ h: $\frac{60}{v} - \frac{60}{v + 5} = 1$.
  ---
  Mit $v(v + 5)$ multiplizieren ($v > 0$): $60(v + 5) - 60v = v(v + 5)$, also $300 = v^2 + 5v$ und $v^2 + 5v - 300 = 0$.
  ---
  $(v - 15)(v + 20) = 0$, also $v = 15$ oder $v = -20$. Eine Geschwindigkeit ist hier positiv, also $v = 15$.
  ---
  **Probe:** $\frac{60}{15} = 4$ h und $\frac{60}{20} = 3$ h, das ist $1$ h Unterschied. **Antwort:** Sie fährt im Schnitt $15$ km/h.
```
## Wurzelgleichungen

```aufgabe
id: gl-wurzel-check-binom
titel: Eine Differenz quadrieren
niveau: 1
art: check
lernziel: 5
angabe: |
  Multipliziere aus: $(x - 3)^2$.
  Herkunft: [Kapitel 1, Abschnitt 1.12 Terme umformen](/lernen/mathe3/zahlen/terme-umformen-binomische-formeln-und-faktorisieren).
teile:
  - typ: term
    label: '$(x - 3)^2 =$'
    variable: x
    loesung: "x^2 - 6x + 9"
    fehler:
      - wert: "x^2 - 9"
        meldung: |
          Du hast nur die beiden Glieder einzeln quadriert. Es fehlt das gemischte Glied $-2\cdot x\cdot 3$.
          Das ist die zweite binomische Formel.
      - wert: "x^2 + 9"
        meldung: |
          Es gilt $(a - b)^2 = a^2 - 2ab + b^2$. Das gemischte Glied $-2ab$ fehlt in deinem Ergebnis.
hinweise:
  - 'Zweite binomische Formel: $(a - b)^2 = a^2 - 2ab + b^2$ mit $a = x$ und $b = 3$.'
loesung: |
  Mit der zweiten binomischen Formel und $a = x$, $b = 3$: $a^2 = x^2$, $2ab = 6x$, $b^2 = 9$.
  ---
  Also $(x - 3)^2 = x^2 - 6x + 9$. Probe mit $x = 1$: links $(-2)^2 = 4$, rechts $1 - 6 + 9 = 4$.
```

Viele Formeln aus Physik und Technik enthalten Wurzeln. Die Schwingungsdauer eines Pendels ist
$T = 2\pi\sqrt{\frac{l}{g}}$, die Fallzeit aus der Höhe $h$ ist $t = \sqrt{\frac{2h}{g}}$. Fragt man umgekehrt nach der
Pendellänge oder nach der Höhe, steht die Unbekannte unter einer Wurzel.

:::definition[Wurzelgleichung]
Eine **Wurzelgleichung** ist eine Gleichung, in der die Unbekannte unter einem Wurzelzeichen steht.
:::

**Beispiel:** $\sqrt{x + 2} = 3$ ist eine Wurzelgleichung. Quadrieren ergibt $x + 2 = 9$, also $x = 7$.
**Nichtbeispiel:** $\sqrt2\cdot x = 4$ ist **keine** Wurzelgleichung. Die Wurzel betrifft nur die Zahl $2$, nicht $x$.
Das ist eine lineare Gleichung mit der Lösung $x = \frac{4}{\sqrt2} = 2\sqrt2$.

Um die Wurzel loszuwerden, quadriert man beide Seiten. Dabei passiert etwas Neues. Quadrieren ist **keine**
Äquivalenzumformung. Aus $a = b$ folgt zwar $a^2 = b^2$. Umgekehrt folgt aus $a^2 = b^2$ aber nur $a = b$ **oder**
$a = -b$. Ein Zahlenbeispiel: Die falsche Aussage $3 = -3$ wird nach dem Quadrieren zur wahren Aussage $9 = 9$.

Die quadrierte Gleichung kann deshalb Lösungen haben, die die ursprüngliche Gleichung nicht erfüllt. Solche Zahlen
heißen **Scheinlösungen**. Die Definitionsmenge hilft hier nicht immer, denn Scheinlösungen können mitten in ihr liegen.
Nur eine **Probe in der Ausgangsgleichung** entlarvt sie zuverlässig.

:::beispiel[Eine Scheinlösung]
Löse $\sqrt{x + 7} = x + 1$.

1. **Die Wurzel steht schon allein.** Also beide Seiten quadrieren. Rechts mit der ersten binomischen Formel: $x + 7 = x^2 + 2x + 1$.
2. **Ordnen:** $x^2 + x - 6 = 0$, zerlegt $(x + 3)(x - 2) = 0$. Kandidaten sind $2$ und $-3$.
3. **Probe für $x = 2$:** links $\sqrt{9} = 3$, rechts $2 + 1 = 3$. Stimmt.
4. **Probe für $x = -3$:** links $\sqrt{4} = 2$, rechts $-3 + 1 = -2$. Stimmt **nicht**.

**Ergebnis:** $L = \{2\}$. Die Zahl $-3$ ist eine Scheinlösung. Sie löst $\sqrt{x + 7} = -(x + 1)$, und diese Gleichung
hat nach dem Quadrieren dieselbe Form.
:::

```plot
x: [-7.5, 4]
y: [-6, 5]
achsen: { x: "x", y: "y" }
graphen:
  - { f: "sqrt(x + 7)", label: "y = √(x + 7)", farbe: 0, von: -7, bis: 4 }
  - { f: "x + 1", label: "y = x + 1", farbe: 1 }
  - { f: "-(x + 1)", label: "y = −(x + 1)", farbe: 2, gestrichelt: true }
punkte:
  - { x: 2, y: 3, label: "Lösung x = 2", farbe: 0 }
  - { x: -3, y: 2, label: "Scheinlösung x = −3", farbe: 2, offen: true }
beschriftung: Die Wurzelkurve schneidet die Gerade y = x + 1 nur bei x = 2. Beim Quadrieren kommt der Schnittpunkt mit der gespiegelten Geraden y = −(x + 1) bei x = −3 als Scheinlösung dazu.
```

:::beispiel[Zwei Wurzeln]
Löse $\sqrt{2x + 3} - \sqrt{x + 1} = 1$. Beide Wurzeln brauchen einen Radikanden $\geq 0$, also $D = [-1;\ \infty[$.

1. **Eine Wurzel isolieren:** $\sqrt{2x + 3} = 1 + \sqrt{x + 1}$.
2. **Quadrieren**, rechts mit der binomischen Formel: $2x + 3 = 1 + 2\sqrt{x + 1} + x + 1$.
3. **Die verbliebene Wurzel isolieren:** $x + 1 = 2\sqrt{x + 1}$.
4. **Nochmals quadrieren:** $(x + 1)^2 = 4(x + 1)$. Alles auf eine Seite und $(x + 1)$ herausheben: $(x + 1)(x + 1 - 4) = 0$. Also $x = -1$ oder $x = 3$.
5. **Probe:** Für $x = -1$: $\sqrt1 - \sqrt0 = 1$. Für $x = 3$: $\sqrt9 - \sqrt4 = 3 - 2 = 1$. Beide stimmen.

**Ergebnis:** $L = \{-1;\ 3\}$. Die Probe kann also auch zeigen, dass alle Kandidaten echt sind.
:::

:::beispiel[Wie lang ist das Pendel?]
Für ein Fadenpendel gilt $T = 2\pi\sqrt{\frac{l}{g}}$. Dabei ist $T$ die Schwingungsdauer in s, $l$ die Fadenlänge in m und
$g = 9{,}81$ m/s² die Fallbeschleunigung. Welche Länge hat ein Pendel mit $T = 2$ s?

1. **Wurzel isolieren:** Durch $2\pi$ dividieren: $\sqrt{\frac{l}{g}} = \frac{T}{2\pi}$.
2. **Quadrieren:** $\frac{l}{g} = \frac{T^2}{4\pi^2}$. Beide Seiten sind positiv, deshalb entsteht hier keine Scheinlösung.
3. **Nach $l$ auflösen:** $l = \frac{g\,T^2}{4\pi^2} = \frac{9{,}81\cdot 4}{4\pi^2}\ \text{m} \approx 0{,}994$ m.

**Antwort:** Das Pendel ist knapp $1$ m lang. **Einheiten:** $\frac{\text{m}}{\text{s}^2}\cdot\text{s}^2 = \text{m}$.
:::

:::achtung[Eine Differenz gliedweise quadriert]
Eine typische Fehlrechnung zu $\sqrt{x + 5} = x - 1$: „Quadrieren ergibt $x + 5 = x^2 - 1$.“ Das ist falsch, denn
$(x - 1)^2$ ist nicht $x^2 - 1$. **Richtig** mit der zweiten binomischen Formel: $x + 5 = x^2 - 2x + 1$, also
$x^2 - 3x - 4 = 0$ und $x = 4$ oder $x = -1$. Die Probe zeigt: $x = 4$ stimmt ($3 = 3$), $x = -1$ nicht ($2 \neq -2$).
Also $L = \{4\}$.
:::

:::achtung[Probe in der falschen Gleichung]
Eine typische Fehlrechnung zum Beispiel „Eine Scheinlösung“: „Probe für $x = -3$ in $x + 7 = (x + 1)^2$: $4 = 4$, stimmt.“
Diese Probe beweist nichts. Die quadrierte Gleichung hat die Scheinlösung ja gerade dazubekommen. Die Probe gehört in
die **Ausgangsgleichung** $\sqrt{x + 7} = x + 1$. Dort steht $2 = -2$, und das ist falsch.
:::

:::achtung[Wurzel nicht isoliert]
Eine typische Fehlrechnung zu $\sqrt{x} + 2 = x$: „Quadrieren ergibt $x + 4 = x^2$.“ Links wurde summandenweise
quadriert. Korrekt wäre $(\sqrt x + 2)^2 = x + 4\sqrt x + 4$, und die Wurzel wäre immer noch da. **Richtig:** zuerst
isolieren, $\sqrt x = x - 2$. Dann quadrieren: $x = x^2 - 4x + 4$, also $x = 1$ oder $x = 4$. Die Probe lässt nur $x = 4$ übrig.
:::

:::merke[Rezept: Wurzelgleichung lösen]
1. Eine Wurzel **allein** auf eine Seite bringen.
2. Beide Seiten quadrieren. Eine Summe auf der anderen Seite mit der binomischen Formel quadrieren.
3. Steht noch eine Wurzel da: Schritt 1 und 2 wiederholen.
4. Die entstandene Gleichung lösen.
5. **Probe in der Ausgangsgleichung** für jeden Kandidaten. Die Probe ist Teil der Lösung, nicht ein freiwilliger Zusatz.
:::

```reflexion
frage: Beim Pendel-Beispiel war nach dem Quadrieren keine Probe nötig. Bei $\sqrt{x + 7} = x + 1$ aber schon. Woran erkennt man, ob Quadrieren gefahrlos ist?
antwort: |
  Quadrieren ist genau dann umkehrbar, wenn beide Seiten nicht negativ sind. Für $a \geq 0$ und $b \geq 0$ folgt aus
  $a^2 = b^2$ wirklich $a = b$, weil die negative Möglichkeit $a = -b$ ausscheidet. Beim Pendel sind $\sqrt{l/g}$ und
  $\frac{T}{2\pi}$ beide positiv. Bei $\sqrt{x + 7} = x + 1$ kann die rechte Seite negativ sein, etwa für $x = -3$.
  Genau dort entsteht die Scheinlösung. Wer das Vorzeichen nicht sicher kennt, macht die Probe.
```

```aufgabe
id: gl-wurzel-einfach
titel: Einfache Wurzelgleichung
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Löse $\sqrt{2x + 5} = 5$ und mache die Probe.
teile:
  - typ: zahl
    label: '$x$'
    loesung: "(25 - 5)/2"
    fehler:
      - wert: "0"
        meldung: |
          Du hast nur die linke Seite von der Wurzel befreit. Beim Quadrieren wird **jede** Seite quadriert: Rechts steht dann $5^2$.
      - wert: "15"
        meldung: |
          Prüfe das Vorzeichen beim Umstellen. Von $2x + 5 = 25$ ziehst du $5$ ab, du addierst sie nicht.
hinweise:
  - 'Quadriere beide Seiten. Rechts entsteht $25$.'
loesung: |
  **Ansatz:** Die Wurzel steht allein, also quadrieren wir beide Seiten: $2x + 5 = 25$. Dann $2x = 20$ und $x = 10$.
  ---
  **Probe in der Ausgangsgleichung:** $\sqrt{20 + 5} = \sqrt{25} = 5$. Stimmt, also $L = \{10\}$.
```

```aufgabe
id: gl-wurzel-negativ
titel: Kann eine Wurzel negativ sein?
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Welche Aussage über die Gleichung $\sqrt{x - 3} = -2$ ist richtig?
teile:
  - typ: auswahl
    optionen:
      - 'Die Lösung ist $x = 7$.'
      - 'Die Lösung ist $x = 1$.'
      - 'Die Gleichung hat keine Lösung.'
      - 'Die Lösungen sind $x = 7$ und $x = -1$.'
    richtig: [2]
    fehler:
      - wert: 0
        meldung: 'Quadrieren liefert $x - 3 = 4$, also $x = 7$. Die Probe zeigt aber $\sqrt4 = 2$, nicht $-2$.'
      - wert: 1
        meldung: 'Für $x = 1$ steht unter der Wurzel $-2$. Davon gibt es keine reelle Wurzel.'
      - wert: 3
        meldung: 'Quadrieren liefert nur eine Gleichung ersten Grades, $x - 3 = 4$. Und auch $x = 7$ besteht die Probe nicht.'
hinweise:
  - 'Welches Vorzeichen hat eine Quadratwurzel immer?'
loesung: |
  **Ansatz:** Die Quadratwurzel ist als die nicht negative Zahl definiert, deren Quadrat der Radikand ist. Also ist $\sqrt{x - 3} \geq 0$ für jedes erlaubte $x$.
  ---
  Die rechte Seite $-2$ ist negativ. Keine Zahl erfüllt die Gleichung, $L = \emptyset$. Quadrieren würde die Scheinlösung $x = 7$ liefern.
```

```aufgabe
id: gl-wurzel-probe
titel: Probe entscheidet
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Löse $\sqrt{3x + 10} = x + 2$. Gib die Lösungsmenge durch Strichpunkt getrennt an.
teile:
  - typ: menge
    label: '$L$'
    loesung: ["2"]
    fehler:
      - wert: ["2", "-3"]
        meldung: |
          Beide Zahlen lösen die quadrierte Gleichung. Setz $-3$ in die **Ausgangsgleichung** ein und vergleiche beide Seiten.
      - wert: ["-3"]
        meldung: |
          Für $x = -3$ ist die linke Seite $\sqrt1 = 1$, die rechte $-1$. Prüfe auch den anderen Kandidaten.
hinweise:
  - 'Quadriere beide Seiten. Rechts brauchst du die erste binomische Formel.'
  - 'Nach dem Quadrieren entsteht $x^2 + x - 6 = 0$. Mach mit beiden Kandidaten die Probe in der Ausgangsgleichung.'
loesung: |
  **Ansatz:** Die Wurzel steht allein, also quadrieren: $3x + 10 = x^2 + 4x + 4$.
  ---
  Ordnen: $x^2 + x - 6 = 0$, zerlegt $(x + 3)(x - 2) = 0$. Kandidaten sind $2$ und $-3$.
  ---
  Probe $x = 2$: $\sqrt{16} = 4$ und $2 + 2 = 4$, stimmt. Probe $x = -3$: $\sqrt1 = 1$, aber $-3 + 2 = -1$, stimmt nicht.
  ---
  **Ergebnis:** $L = \{2\}$. Die Zahl $-3$ ist eine Scheinlösung.
```

```aufgabe
id: gl-wurzel-isolieren
titel: Erst isolieren, dann quadrieren
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Löse $\sqrt{x + 1} + 1 = x$. Gib die Lösungsmenge durch Strichpunkt getrennt an.
teile:
  - typ: menge
    label: '$L$'
    loesung: ["3"]
    fehler:
      - wert: ["0", "3"]
        meldung: |
          Mach die Probe mit $x = 0$ in der Ausgangsgleichung: links $\sqrt1 + 1 = 2$, rechts $0$.
      - wert: ["0"]
        meldung: |
          Setz $0$ in die Ausgangsgleichung ein. Die beiden Seiten sind nicht gleich. Prüfe auch den zweiten Kandidaten.
hinweise:
  - 'Bring zuerst die $1$ auf die rechte Seite, damit die Wurzel allein steht.'
  - 'Quadriere $\sqrt{x + 1} = x - 1$ mit der zweiten binomischen Formel und mach am Ende die Probe.'
loesung: |
  **Ansatz:** Vor dem Quadrieren muss die Wurzel allein stehen. Also $1$ abziehen: $\sqrt{x + 1} = x - 1$.
  ---
  Quadrieren: $x + 1 = x^2 - 2x + 1$, also $x^2 - 3x = 0$ und $x(x - 3) = 0$. Kandidaten sind $0$ und $3$.
  ---
  Probe $x = 3$: $\sqrt4 + 1 = 3$, stimmt. Probe $x = 0$: $\sqrt1 + 1 = 2 \neq 0$, stimmt nicht.
  ---
  **Ergebnis:** $L = \{3\}$.
gefuehrt:
  - text: Isoliere die Wurzel. Welcher Term steht danach auf der rechten Seite von $\sqrt{x + 1} = \ldots$?
    teil: { typ: term, loesung: "x - 1", fehler: [ { wert: "x + 1", meldung: 'Die $1$ wird von beiden Seiten **abgezogen**. Rechts entsteht $x - 1$.' } ] }
    erklaerung: 'Wir ziehen auf beiden Seiten $1$ ab: $\sqrt{x + 1} = x - 1$.'
  - text: Quadriere beide Seiten und bring alles auf eine Seite. Welcher Term steht vor $= 0$, wenn $x^2$ positiv bleibt?
    teil: { typ: term, loesung: "x^2 - 3x", fehler: [ { wert: "x^2 - x - 2", meldung: '$(x - 1)^2$ ist $x^2 - 2x + 1$, nicht $x^2 - 1$. Das gemischte Glied fehlt.' } ] }
    erklaerung: '$x + 1 = x^2 - 2x + 1$ ergibt $x^2 - 3x = 0$.'
  - text: Welche Kandidaten liefert $x^2 - 3x = 0$? Gib sie durch Strichpunkt getrennt ein.
    teil: { typ: menge, loesung: ["0", "3"] }
    erklaerung: '$x\,(x - 3) = 0$, also $x = 0$ oder $x = 3$.'
  - text: Mach die Probe in der Ausgangsgleichung. Welche Kandidaten bleiben?
    erklaerung: 'Für $x = 3$: $2 + 1 = 3$, stimmt. Für $x = 0$: $1 + 1 = 2$, aber rechts steht $0$. Also $L = \{3\}$.'
```

```aufgabe
id: gl-wurzel-fallzeit
titel: Aus welcher Höhe fällt der Stein?
niveau: 2
lernziel: 5
kompetenz: modellieren
angabe: |
  Ein Stein fällt aus der Ruhe. Ohne Luftwiderstand gilt für die Fallzeit $t = \sqrt{\dfrac{2h}{g}}$ mit der Fallhöhe $h$ in m
  und $g = 9{,}81$ m/s². Der Stein ist $2{,}5$ s unterwegs. Aus welcher Höhe fällt er? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    label: '$h$'
    einheit: m
    loesung: "9.81*2.5^2/2"
    toleranz: 0.05
    fehler:
      - wert: "9.81*2.5/2"
        meldung: |
          Beim Quadrieren wird auch die Zeit quadriert. Links steht danach $t^2 = 6{,}25$, nicht $2{,}5$.
      - wert: "2*2.5^2/9.81"
        meldung: |
          Prüfe das Umstellen. Aus $t^2 = \tfrac{2h}{g}$ folgt $h = \tfrac{g\,t^2}{2}$. Die Einheit muss am Ende Meter sein.
hinweise:
  - 'Quadriere beide Seiten: $t^2 = \tfrac{2h}{g}$.'
  - 'Multipliziere mit $g$ und dividiere durch $2$: $h = \tfrac{g\,t^2}{2}$.'
loesung: |
  **Ansatz:** Die Wurzel steht allein. Beide Seiten sind positiv, also ist Quadrieren hier umkehrbar: $t^2 = \frac{2h}{g}$.
  ---
  Nach $h$ auflösen: mit $g$ multiplizieren und durch $2$ dividieren, $h = \frac{g\,t^2}{2}$.
  ---
  Einsetzen: $h = \frac{9{,}81\cdot 2{,}5^2}{2} = \frac{9{,}81\cdot 6{,}25}{2} \approx 30{,}7$ m. Einheiten: $\frac{\text{m}}{\text{s}^2}\cdot\text{s}^2 = \text{m}$.
  ---
  **Probe:** $\sqrt{\frac{2\cdot 30{,}66}{9{,}81}} \approx \sqrt{6{,}25} = 2{,}5$ s. **Antwort:** Der Stein fällt aus rund $30{,}7$ m Höhe.
```

```aufgabe
id: gl-wurzel-fehler
titel: Fehler finden beim Quadrieren
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  Jemand löst $\sqrt{x + 4} = x - 2$ so: „Quadrieren ergibt $x + 4 = x^2 - 4$, also $x^2 - x - 8 = 0$.“

  a) Beschreibe den Fehler.

  b) Gib die richtige Lösungsmenge durch Strichpunkt getrennt an.
teile:
  - typ: text
    label: 'a)'
    muster: |
      Die rechte Seite $x - 2$ ist eine Differenz. Beim Quadrieren gilt die zweite binomische Formel:
      $(x - 2)^2 = x^2 - 4x + 4$. Die Person hat die beiden Glieder einzeln quadriert und dabei das gemischte Glied
      $-4x$ vergessen. Außerdem muss das Quadrat von $2$ als $+4$ und nicht als $-4$ erscheinen.
  - typ: menge
    label: 'b) $L$'
    loesung: ["5"]
    fehler:
      - wert: ["0", "5"]
        meldung: |
          Beide Zahlen lösen die quadrierte Gleichung. Mach die Probe mit $x = 0$ in der Ausgangsgleichung: links $2$, rechts $-2$.
hinweise:
  - 'Wie lautet $(x - 2)^2$ nach der zweiten binomischen Formel?'
  - 'Richtig quadriert entsteht $x^2 - 5x = 0$. Mach danach die Probe.'
loesung: |
  **Ansatz:** Beim Quadrieren einer Differenz braucht man die binomische Formel. $(x - 2)^2 = x^2 - 4x + 4$, nicht $x^2 - 4$.
  ---
  Richtig: $x + 4 = x^2 - 4x + 4$, also $x^2 - 5x = 0$ und $x(x - 5) = 0$. Kandidaten sind $0$ und $5$.
  ---
  Probe $x = 5$: $\sqrt9 = 3$ und $5 - 2 = 3$, stimmt. Probe $x = 0$: $\sqrt4 = 2$, aber $0 - 2 = -2$, stimmt nicht.
  ---
  **Ergebnis:** $L = \{5\}$.
```

```aufgabe
id: gl-wurzel-zwei
titel: Zwei Wurzeln
niveau: 3
lernziel: 5
kompetenz: rechnen
angabe: |
  Löse $\sqrt{x + 7} + \sqrt{x} = 7$.
teile:
  - typ: menge
    label: '$L$'
    loesung: ["9"]
    fehler:
      - wert: ["3"]
        meldung: 'Aus $\sqrt x = 3$ folgt noch nicht $x = 3$. Quadriere ein zweites Mal.'
hinweise:
  - 'Isoliere eine Wurzel: $\sqrt{x + 7} = 7 - \sqrt x$.'
  - 'Nach dem ersten Quadrieren hebt sich $x$ weg, und nur noch $\sqrt x$ bleibt übrig. Isoliere sie und quadriere erneut.'
loesung: |
  **Ansatz:** Beide Wurzeln brauchen einen Radikanden $\geq 0$, also $D = [0;\ \infty[$. Wir isolieren eine Wurzel: $\sqrt{x + 7} = 7 - \sqrt x$.
  ---
  Quadrieren mit der zweiten binomischen Formel: $x + 7 = 49 - 14\sqrt x + x$. Das $x$ hebt sich weg: $14\sqrt x = 42$, also $\sqrt x = 3$.
  ---
  Nochmals quadrieren: $x = 9$.
  ---
  **Probe:** $\sqrt{16} + \sqrt9 = 4 + 3 = 7$. Stimmt, also $L = \{9\}$.
```

```aufgabe
id: gl-wurzel-parameter
titel: Den Parameter aus einer Lösung bestimmen
niveau: 3
lernziel: 5
kompetenz: verstehen
angabe: |
  Die Gleichung $\sqrt{x + a} = x$ hat die Lösung $x = 4$.

  a) Bestimme den Parameter $a$.

  b) Beim Quadrieren mit diesem $a$ entsteht ein zweiter Kandidat. Welcher ist es? Ist er eine echte Lösung?
teile:
  - typ: zahl
    label: 'a) $a$'
    loesung: "4^2 - 4"
    fehler:
      - wert: "0"
        meldung: 'Setz $x = 4$ ein: $\sqrt{4 + a} = 4$. Quadrieren ergibt $4 + a = 16$.'
  - typ: zahl
    label: 'b) zweiter Kandidat'
    loesung: "-3"
  - typ: auswahl
    label: 'b) Ist er eine Lösung?'
    optionen: ['ja', 'nein, eine Scheinlösung']
    richtig: [1]
hinweise:
  - 'Setz $x = 4$ in die Gleichung ein und löse nach $a$.'
  - 'Quadriere $\sqrt{x + a} = x$ mit dem gefundenen $a$ und löse die quadratische Gleichung. Mach mit beiden Kandidaten die Probe.'
loesung: |
  **Ansatz:** Eine Lösung erfüllt die Gleichung. Also $\sqrt{4 + a} = 4$. Quadrieren (beide Seiten positiv): $4 + a = 16$, also $a = 12$.
  ---
  Mit $a = 12$: $\sqrt{x + 12} = x$. Quadrieren ergibt $x + 12 = x^2$, also $x^2 - x - 12 = 0$ und $(x - 4)(x + 3) = 0$.
  ---
  Der zweite Kandidat ist $x = -3$. Probe: links $\sqrt9 = 3$, rechts $-3$. Das stimmt nicht.
  ---
  **Antwort:** $a = 12$. Der Kandidat $-3$ ist eine Scheinlösung, die Lösungsmenge ist $L = \{4\}$.
```
## Betragsgleichungen

```aufgabe
id: gl-betrag-check-wert
titel: Einen Betrag ausrechnen
niveau: 1
art: check
lernziel: 5
angabe: |
  Berechne $|3 - 8|$.
  Herkunft: [Kapitel 1, Abschnitt 1.15 Betrag und Intervalle](/lernen/mathe3/zahlen/betrag-und-intervalle).
teile:
  - typ: zahl
    label: '$|3 - 8| =$'
    loesung: "5"
    fehler:
      - wert: "-5"
        meldung: |
          $3 - 8 = -5$ ist der Wert **im** Betrag. Der Betrag macht daraus den Abstand zur Null, und ein Abstand ist nie negativ.
      - wert: "11"
        meldung: |
          Der Betrag wirkt erst auf das Ergebnis der Klammer. Rechne zuerst $3 - 8$ aus, dann nimm den Betrag.
hinweise:
  - 'Rechne zuerst $3 - 8$ aus. Der Betrag ist dann der Abstand dieser Zahl von $0$.'
loesung: |
  Zuerst den Inhalt ausrechnen: $3 - 8 = -5$.
  ---
  Der Betrag ist der Abstand zur Null: $|-5| = 5$. Das ist zugleich der Abstand zwischen $3$ und $8$ auf der Zahlengeraden.
```

Der Betrag $|a|$ einer Zahl ist ihr **Abstand von der Null** auf der Zahlengeraden. Darum ist $|5| = 5$ und
$|-5| = 5$. Allgemeiner ist $|x - a|$ der Abstand der Zahl $x$ von der Zahl $a$. Beträge tauchen überall auf, wo es
um Abweichungen geht: Toleranzen in der Fertigung, Messfehler, Abstände.

In der Rechnung ist der Betrag stückweise definiert:
$$|T| = \begin{cases} T, & \text{falls } T \geq 0,\\ -T, & \text{falls } T < 0.\end{cases}$$
Dabei ist $T$ ein beliebiger Term. Ist $T$ negativ, macht das Minus vor $T$ ihn positiv. Ein Beispiel: $|-3| = -(-3) = 3$.

:::definition[Betragsgleichung]
Eine **Betragsgleichung** ist eine Gleichung, in der die Unbekannte innerhalb eines Betrags vorkommt.
:::

**Beispiel:** $|x - 2| = 3$ ist eine Betragsgleichung. Sie fragt nach den Zahlen mit Abstand $3$ von $2$. Das sind $5$ und $-1$.
**Nichtbeispiel:** $|-2|\cdot x = 6$ ist **keine** Betragsgleichung. Der Betrag enthält nur die Zahl $-2$. Es ist einfach
$2x = 6$, also $x = 3$.

### Der einfachste Typ: Betrag gleich Zahl

Für eine Zahl $c$ gilt:

- Ist $c > 0$, dann ist $|T| = c$ gleichwertig zu $T = c$ **oder** $T = -c$. Es gibt zwei Fälle.
- Ist $c = 0$, dann ist $|T| = 0$ gleichwertig zu $T = 0$.
- Ist $c < 0$, dann hat $|T| = c$ keine Lösung, weil ein Betrag nie negativ ist.

:::beispiel[Betrag gleich Zahl]
Löse $|2x - 3| = 5$.

1. **Zwei Fälle**, weil $5 > 0$ ist: $2x - 3 = 5$ oder $2x - 3 = -5$.
2. **Erster Fall:** $2x = 8$, also $x = 4$.
3. **Zweiter Fall:** $2x = -2$, also $x = -1$.

**Ergebnis:** $L = \{-1;\ 4\}$. **Probe:** $|8 - 3| = 5$ und $|-2 - 3| = |-5| = 5$.
**Deutung als Abstand:** $|2x - 3| = 2\,|x - 1{,}5|$. Gesucht sind also die Zahlen mit Abstand $2{,}5$ von $1{,}5$.
:::

:::beispiel[Toleranz bei einem Bauteil]
Ein Bolzen soll $50$ mm lang sein. Ein Bolzen gilt als Grenzfall, wenn seine Länge $l$ (in mm) genau $0{,}2$ mm vom Sollwert
abweicht. Welche Längen sind Grenzfälle?

1. **Gleichung:** Die Abweichung ist der Abstand von $l$ zu $50$, also $|l - 50| = 0{,}2$.
2. **Zwei Fälle:** $l - 50 = 0{,}2$ oder $l - 50 = -0{,}2$.
3. **Lösen:** $l = 50{,}2$ oder $l = 49{,}8$.

**Antwort:** Grenzfälle sind die Längen $49{,}8$ mm und $50{,}2$ mm. Alle Längen dazwischen liegen innerhalb der Toleranz.
:::

:::achtung[Den zweiten Fall vergessen]
Eine typische Fehlrechnung zu $|x + 3| = 5$: „$x + 3 = 5$, also $x = 2$.“ Dabei fehlt der Fall $x + 3 = -5$, der
$x = -8$ liefert. Probe: $|-8 + 3| = |-5| = 5$. **Richtig:** $L = \{-8;\ 2\}$. Auf der Zahlengeraden gibt es zu jedem
Punkt **zwei** Punkte im Abstand $5$, einen links und einen rechts.
:::

### Unbekannte auch außerhalb des Betrags: Fallunterscheidung

Steht rechts keine feste Zahl, sondern ein Term mit $x$, hilft der einfache Typ nicht. Dann zerlegt man die
Zahlengerade in Bereiche, in denen der Term im Betrag ein festes Vorzeichen hat. In jedem Bereich ersetzt man den Betrag
durch $T$ oder $-T$. Das heißt **Fallunterscheidung**. Eine Lösung zählt nur, wenn sie im Bereich ihres Falls liegt.

:::beispiel[Unbekannte auf beiden Seiten]
Löse $|x - 1| = 2x + 4$. Der Term $x - 1$ wechselt bei $x = 1$ sein Vorzeichen.

1. **Fall 1, $x \geq 1$:** Dann ist $x - 1 \geq 0$ und $|x - 1| = x - 1$. Die Gleichung $x - 1 = 2x + 4$ ergibt $x = -5$. Aber $-5$ ist nicht $\geq 1$. Dieser Fall liefert keine Lösung.
2. **Fall 2, $x < 1$:** Dann ist $x - 1 < 0$ und $|x - 1| = -(x - 1) = 1 - x$. Die Gleichung $1 - x = 2x + 4$ ergibt $-3 = 3x$, also $x = -1$. Es gilt $-1 < 1$, die Lösung liegt im Bereich.

**Ergebnis:** $L = \{-1\}$. **Probe:** $|-1 - 1| = 2$ und $2\cdot(-1) + 4 = 2$.
:::

:::achtung[Fallbereich nicht geprüft]
Eine typische Fehlrechnung zu $|x - 2| = 2x + 1$: „Fall 1: $x - 2 = 2x + 1$, also $x = -3$. Fall 2: $2 - x = 2x + 1$,
also $x = \tfrac13$. Also $L = \{-3;\ \tfrac13\}$.“ Fall 1 gilt aber nur für $x \geq 2$, und $-3$ liegt nicht dort. Die
Probe bestätigt das: $|-3 - 2| = 5$, aber $2\cdot(-3) + 1 = -5$. **Richtig:** $L = \left\{\tfrac13\right\}$.
:::

### Zwei Beträge

Bei zwei Beträgen hat jeder Betrag seine eigene **Knickstelle**, also die Stelle, an der sein Inhalt null wird. Zwei
Knickstellen teilen die Zahlengerade in drei Bereiche. In jedem Bereich wird jeder Betrag durch $T$ oder $-T$ ersetzt.

:::beispiel[Zwei Beträge]
Löse $|x - 1| + |x + 2| = 5$. Die Knickstellen sind $1$ und $-2$.

1. **Bereich $x \geq 1$:** Beide Inhalte sind $\geq 0$. Also $(x - 1) + (x + 2) = 5$, das heißt $2x + 1 = 5$ und $x = 2$. Das liegt im Bereich.
2. **Bereich $-2 \leq x < 1$:** Der erste Inhalt ist negativ, der zweite nicht. Also $(1 - x) + (x + 2) = 5$, das heißt $3 = 5$. Das ist falsch, also keine Lösung.
3. **Bereich $x < -2$:** Beide Inhalte sind negativ. Also $(1 - x) + (-x - 2) = 5$, das heißt $-2x - 1 = 5$ und $x = -3$. Das liegt im Bereich.

**Ergebnis:** $L = \{-3;\ 2\}$. **Deutung:** Gesucht sind die Punkte, deren Abstände zu $1$ und zu $-2$ zusammen $5$ ergeben.
Zwischen $-2$ und $1$ ist die Abstandssumme immer $3$. Erst je eine Einheit weiter außen erreicht sie $5$.
:::

```plot
x: [-5, 4]
y: [0, 9]
achsen: { x: "x", y: "y" }
graphen:
  - { f: "abs(x - 1) + abs(x + 2)", label: "y = |x − 1| + |x + 2|", farbe: 0 }
  - { f: "5", label: "y = 5", farbe: 1, gestrichelt: true }
punkte:
  - { x: -3, y: 5, label: "x = −3" }
  - { x: 2, y: 5, label: "x = 2" }
beschriftung: Der Graph von y = |x − 1| + |x + 2| ist zwischen −2 und 1 waagrecht auf Höhe 3 und steigt außerhalb mit Steigung 2 an. Die Gerade y = 5 schneidet ihn bei x = −3 und x = 2.
```

:::merke[Rezept: Betragsgleichung lösen]
1. Steht der Betrag allein und rechts eine Zahl $c$? Dann gilt: für $c > 0$ zwei Fälle $T = \pm c$, für $c = 0$ nur $T = 0$, für $c < 0$ keine Lösung.
2. Sonst die Knickstellen bestimmen, also die Nullstellen der Terme in den Beträgen. Sie teilen die Zahlengerade in Bereiche.
3. In jedem Bereich jeden Betrag durch $T$ oder $-T$ ersetzen. Das Vorzeichen prüfst du mit einer Testzahl aus dem Bereich.
4. Die betragsfreie Gleichung lösen und **nur Lösungen im jeweiligen Bereich** behalten.
5. Die Lösungen aller Bereiche zusammenfassen und eine Probe machen.
:::

```reflexion
frage: Warum muss man bei der Fallunterscheidung prüfen, ob eine Lösung im Bereich ihres Falls liegt? Die Rechnung im Fall war doch richtig.
antwort: |
  In jedem Fall ersetzt man den Betrag durch einen Term, der **nur in diesem Bereich** mit dem Betrag übereinstimmt.
  Für $x \geq 1$ ist $|x - 1|$ dasselbe wie $x - 1$. Für $x < 1$ ist es das nicht. Die Gleichung des Falls ist
  deshalb nur innerhalb des Bereichs gleichwertig zur Ausgangsgleichung. Eine Lösung außerhalb des Bereichs löst eine
  andere Gleichung als die gestellte. Darum wird sie verworfen.
```

```aufgabe
id: gl-betrag-einfach
titel: Betrag gleich Zahl
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Löse die Gleichungen. Gib jede Lösungsmenge durch Strichpunkt getrennt ein. Gibt es keine Lösung, gib `leer` ein.

  a) $|3x + 1| = 8$, b) $|x - 5| = -1$
teile:
  - typ: menge
    label: 'a) $L$'
    loesung: ["7/3", "-3"]
    fehler:
      - wert: ["7/3"]
        meldung: |
          Der Fall $3x + 1 = 8$ ist richtig gelöst. Es gibt aber einen zweiten Fall: Auch eine Zahl mit Inhalt $-8$ hat den Betrag $8$.
      - wert: ["7/3", "3"]
        meldung: |
          Prüfe den zweiten Fall: $3x + 1 = -8$ ergibt $3x = -9$. Setz deinen Wert zur Probe ein.
  - typ: menge
    label: 'b) $L$'
    loesung: []
    fehler:
      - wert: ["6", "4"]
        meldung: |
          Ein Betrag ist ein Abstand und deshalb nie negativ. Die Fallregel $T = \pm c$ gilt nur für $c > 0$.
hinweise:
  - '$|T| = c$ mit $c > 0$ heißt $T = c$ oder $T = -c$. Mit $c < 0$ gibt es keine Lösung.'
loesung: |
  **a) Ansatz:** Rechts steht die positive Zahl $8$, also zwei Fälle. $3x + 1 = 8$ ergibt $x = \tfrac73$. $3x + 1 = -8$ ergibt $x = -3$.
  ---
  Probe: $|7 + 1| = 8$ und $|-9 + 1| = 8$. Also $L = \left\{-3;\ \tfrac73\right\}$.
  ---
  **b)** Ein Betrag ist nie negativ. Kein $x$ erfüllt $|x - 5| = -1$, also $L = \emptyset$.
```

```aufgabe
id: gl-betrag-abstand
titel: Betrag als Abstand
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Löse $|x + 4| = 3$, indem du den Betrag als Abstand deutest. Gib die Lösungen durch Strichpunkt getrennt ein.
teile:
  - typ: menge
    label: '$L$'
    loesung: ["-7", "-1"]
    fehler:
      - wert: ["1", "7"]
        meldung: |
          $|x + 4| = |x - (-4)|$ ist der Abstand von $x$ zur Zahl $-4$, nicht zur Zahl $4$.
      - wert: ["-1"]
        meldung: |
          Zu einem Punkt gibt es zwei Zahlen mit Abstand $3$: eine links davon und eine rechts davon.
hinweise:
  - 'Schreibe $x + 4$ als $x - (-4)$. Der Betrag ist dann der Abstand von $x$ zu $-4$.'
loesung: |
  **Ansatz:** $|x + 4| = |x - (-4)|$ ist der Abstand von $x$ zur Zahl $-4$. Gesucht sind alle Zahlen mit Abstand $3$ von $-4$.
  ---
  Drei Schritte nach rechts ergeben $-1$, drei Schritte nach links $-7$. Also $L = \{-7;\ -1\}$. Probe: $|-3| = 3$ und $|3| = 3$.
```

```aufgabe
id: gl-betrag-fall
titel: Betragsgleichung mit Fallunterscheidung
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Löse $|x - 3| = 2x$. Gib die Lösungsmenge durch Strichpunkt getrennt an.
teile:
  - typ: menge
    label: '$L$'
    loesung: ["1"]
    fehler:
      - wert: ["-3", "1"]
        meldung: |
          Prüfe für jede Zahl, ob sie im Bereich ihres Falls liegt. $-3$ stammt aus dem Fall $x \geq 3$.
      - wert: ["-3"]
        meldung: |
          Setz $-3$ zur Probe ein: links $|-6| = 6$, rechts $-6$. Liegt die Zahl im Bereich ihres Falls?
hinweise:
  - 'Die Knickstelle ist $x = 3$. Unterscheide die Fälle $x \geq 3$ und $x < 3$.'
  - 'Im Fall $x < 3$ ist $|x - 3| = 3 - x$. Prüfe jede Lösung gegen ihren Bereich.'
loesung: |
  **Ansatz:** Rechts steht ein Term mit $x$, also Fallunterscheidung an der Knickstelle $3$.
  ---
  **Fall $x \geq 3$:** $x - 3 = 2x$ ergibt $x = -3$. Diese Zahl ist nicht $\geq 3$, keine Lösung.
  ---
  **Fall $x < 3$:** $3 - x = 2x$ ergibt $x = 1$. Es gilt $1 < 3$, also eine Lösung.
  ---
  **Ergebnis:** $L = \{1\}$. Probe: $|1 - 3| = 2$ und $2\cdot 1 = 2$.
```

```aufgabe
id: gl-betrag-gefuehrt
titel: Zwei Fälle, zwei Lösungen
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Löse $|2x - 6| = x + 3$. Gib die Lösungsmenge durch Strichpunkt getrennt an.
teile:
  - typ: menge
    label: '$L$'
    loesung: ["1", "9"]
    fehler:
      - wert: ["9"]
        meldung: |
          Der Fall $x \geq 3$ ist richtig. Im Fall $x < 3$ entsteht ebenfalls eine Lösung, die im Bereich liegt.
      - wert: ["1", "-9"]
        meldung: |
          Prüfe den Fall $x \geq 3$: $2x - 6 = x + 3$ ergibt $x = 9$. Setz deinen Wert zur Probe ein.
hinweise:
  - 'Die Knickstelle ist die Nullstelle von $2x - 6$.'
  - 'Fall $x \geq 3$: $2x - 6 = x + 3$. Fall $x < 3$: $6 - 2x = x + 3$. Prüfe beide Lösungen gegen ihren Bereich.'
loesung: |
  **Ansatz:** Rechts steht ein Term mit $x$, also Fallunterscheidung. Die Knickstelle ist $2x - 6 = 0$, also $x = 3$.
  ---
  **Fall $x \geq 3$:** $|2x - 6| = 2x - 6$. Aus $2x - 6 = x + 3$ folgt $x = 9$. Das liegt im Bereich.
  ---
  **Fall $x < 3$:** $|2x - 6| = 6 - 2x$. Aus $6 - 2x = x + 3$ folgt $3 = 3x$, also $x = 1$. Das liegt im Bereich.
  ---
  **Ergebnis:** $L = \{1;\ 9\}$. Probe: $|-4| = 4 = 1 + 3$ und $|12| = 12 = 9 + 3$.
gefuehrt:
  - text: An welcher Stelle wechselt $2x - 6$ sein Vorzeichen?
    teil: { typ: zahl, loesung: "3", fehler: [ { wert: "6", meldung: 'Gesucht ist $x$ mit $2x - 6 = 0$. Teile noch durch $2$.' } ] }
    erklaerung: '$2x - 6 = 0$ für $x = 3$. Links davon ist der Term negativ, rechts davon positiv.'
  - text: Fall $x \geq 3$. Löse $2x - 6 = x + 3$.
    teil: { typ: zahl, loesung: "9" }
    erklaerung: '$x = 9$. Das ist $\geq 3$, also eine Lösung.'
  - text: Fall $x < 3$. Hier ist $|2x - 6| = 6 - 2x$. Löse $6 - 2x = x + 3$.
    teil: { typ: zahl, loesung: "1", fehler: [ { wert: "-1", meldung: 'Aus $6 - 2x = x + 3$ folgt $3 = 3x$. Prüfe das Vorzeichen.' } ] }
    erklaerung: '$x = 1$. Das ist kleiner als $3$, also ebenfalls eine Lösung.'
  - text: Fasse zusammen und mach die Probe.
    erklaerung: '$L = \{1;\ 9\}$. Probe: $|2 - 6| = 4 = 1 + 3$ und $|18 - 6| = 12 = 9 + 3$.'
```

```aufgabe
id: gl-betrag-fehler
titel: Fehler finden bei der Fallunterscheidung
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  Jemand löst $|x + 1| = 3x - 5$ so: „$x + 1 = 3x - 5$ ergibt $x = 3$. Und $x + 1 = -(3x - 5)$ ergibt $x = 1$.
  Also $L = \{1;\ 3\}$.“

  a) Erkläre, was an diesem Vorgehen fehlt.

  b) Gib die richtige Lösungsmenge durch Strichpunkt getrennt an.
teile:
  - typ: text
    label: 'a)'
    muster: |
      Die Person hat zwei Fälle gerechnet, aber nie geprüft, in welchem Bereich jeder Fall gilt. Rechts steht ein Term mit
      $x$, der negativ sein kann. Für $x = 1$ ist $3x - 5 = -2$, ein Betrag kann aber nicht $-2$ sein. Eine Probe oder der
      Abgleich mit dem Fallbereich hätte die Zahl $1$ ausgeschlossen.
  - typ: menge
    label: 'b) $L$'
    loesung: ["3"]
    fehler:
      - wert: ["1", "3"]
        meldung: |
          Setz $x = 1$ in die Ausgangsgleichung ein: links $|2| = 2$, rechts $3 - 5 = -2$.
hinweise:
  - 'Wo wechselt $x + 1$ das Vorzeichen? Welche Bereiche entstehen?'
  - 'Fall $x \geq -1$ und Fall $x < -1$ rechnen und jede Lösung gegen ihren Bereich prüfen.'
loesung: |
  **Ansatz:** Bei Fallunterscheidung gehört zu jedem Fall ein Bereich. Die Knickstelle ist $x = -1$.
  ---
  **Fall $x \geq -1$:** $x + 1 = 3x - 5$ ergibt $x = 3$. Das liegt im Bereich.
  ---
  **Fall $x < -1$:** $-(x + 1) = 3x - 5$ ergibt $-x - 1 = 3x - 5$, also $x = 1$. Aber $1$ ist nicht kleiner als $-1$. Keine Lösung.
  ---
  **Ergebnis:** $L = \{3\}$. Probe: $|4| = 4$ und $9 - 5 = 4$.
```

```aufgabe
id: gl-betrag-fuellmenge
titel: Abweichung beim Abfüllen
niveau: 2
lernziel: 5
kompetenz: modellieren
angabe: |
  Eine Maschine füllt Packungen mit der Sollmasse $500$ g. Eine Packung gilt als Grenzfall, wenn ihre Masse $m$ (in g)
  genau $12$ g vom Sollwert abweicht. Stelle eine Betragsgleichung auf und gib alle Grenzfall-Massen durch Strichpunkt
  getrennt an.
teile:
  - typ: menge
    label: 'Grenzfall-Massen'
    loesung: ["488", "512"]
    fehler:
      - wert: ["512"]
        meldung: |
          Eine Abweichung kann nach oben **oder** nach unten gehen. Auch eine zu leichte Packung weicht ab.
      - wert: ["-12", "12"]
        meldung: |
          Das sind die Abweichungen $m - 500$. Gesucht sind aber die Massen $m$ selbst.
hinweise:
  - 'Die Abweichung vom Sollwert ist der Abstand $|m - 500|$.'
  - 'Löse $|m - 500| = 12$ mit den zwei Fällen $m - 500 = 12$ und $m - 500 = -12$.'
loesung: |
  **Ansatz:** Die Abweichung ist der Abstand zwischen $m$ und $500$, also $|m - 500|$. Die Gleichung lautet $|m - 500| = 12$.
  ---
  Weil $12 > 0$ ist, gibt es zwei Fälle: $m - 500 = 12$ ergibt $m = 512$, und $m - 500 = -12$ ergibt $m = 488$.
  ---
  **Antwort:** Grenzfälle sind Packungen mit $488$ g und mit $512$ g. Probe: $|488 - 500| = 12$ und $|512 - 500| = 12$.
```

```aufgabe
id: gl-betrag-umkehr
titel: Gleichung zu gegebenen Lösungen
niveau: 2
lernziel: 5
kompetenz: verstehen
angabe: |
  Die Gleichung $|x - a| = r$ mit $r > 0$ soll genau die Lösungen $-2$ und $6$ haben. Bestimme $a$ und $r$.
teile:
  - typ: vektor
    label: 'Werte'
    namen: ["a", "r"]
    loesung: ["2", "4"]
    fehler:
      - wert: ["4", "2"]
        meldung: |
          $a$ ist der Mittelpunkt, $r$ der Abstand. Prüfe die Reihenfolge der Einträge.
      - wert: ["2", "8"]
        meldung: |
          $8$ ist der ganze Abstand zwischen $-2$ und $6$. Jede Lösung ist aber nur **halb** so weit vom Mittelpunkt entfernt.
hinweise:
  - 'Die beiden Lösungen liegen symmetrisch um $a$, jeweils im Abstand $r$.'
  - 'Berechne $a$ als Mittelwert der beiden Lösungen und $r$ als halben Abstand zwischen ihnen.'
loesung: |
  **Ansatz:** $|x - a| = r$ beschreibt die zwei Zahlen mit Abstand $r$ von $a$. Also liegt $a$ genau in der Mitte zwischen den Lösungen.
  ---
  Mitte: $a = \frac{-2 + 6}{2} = 2$. Abstand: $r = 6 - 2 = 4$.
  ---
  **Probe:** $|-2 - 2| = 4$ und $|6 - 2| = 4$. Die Gleichung lautet $|x - 2| = 4$.
```

```aufgabe
id: gl-betrag-zwei
titel: Zwei Beträge
niveau: 3
lernziel: 5
kompetenz: rechnen
angabe: |
  Löse $|x - 3| + |x + 1| = 6$ und deute das Ergebnis als Abstand.
teile:
  - typ: menge
    label: '$L$'
    loesung: ["-2", "4"]
    fehler:
      - wert: ["4"]
        meldung: 'Auch im Bereich links von $-1$ gibt es eine Lösung.'
  - typ: text
    label: 'Deutung'
    muster: |
      Gesucht sind die Punkte, deren Abstände zu $3$ und zu $-1$ zusammen $6$ ergeben. Zwischen $-1$ und $3$ ist die
      Abstandssumme immer $4$. Außerhalb wächst sie um $2$ pro Einheit. Die Summe $6$ wird deshalb je eine Einheit
      außerhalb erreicht, bei $-2$ und bei $4$.
hinweise:
  - 'Die Knickstellen $3$ und $-1$ teilen die Zahlengerade in drei Bereiche.'
  - 'Ersetze in jedem Bereich beide Beträge durch $T$ oder $-T$ und prüfe jede Lösung gegen den Bereich.'
loesung: |
  **Ansatz:** Zwei Beträge mit den Knickstellen $3$ und $-1$. Wir rechnen in drei Bereichen.
  ---
  **$x \geq 3$:** $(x - 3) + (x + 1) = 6$, also $2x - 2 = 6$ und $x = 4$. Liegt im Bereich.
  ---
  **$-1 \leq x < 3$:** $(3 - x) + (x + 1) = 6$, also $4 = 6$. Falsch, keine Lösung.
  ---
  **$x < -1$:** $(3 - x) + (-x - 1) = 6$, also $2 - 2x = 6$ und $x = -2$. Liegt im Bereich.
  ---
  **Ergebnis:** $L = \{-2;\ 4\}$. Probe: $|-5| + |-1| = 6$ und $|1| + |5| = 6$.
```

```aufgabe
id: gl-betrag-intervall
titel: Unendlich viele Lösungen
niveau: 3
lernziel: 5
kompetenz: begruenden
angabe: |
  Welche Lösungsmenge hat $|x| + |x - 4| = 4$? Begründe mit der Abstandsdeutung.
teile:
  - typ: auswahl
    optionen:
      - '$L = \{0;\ 4\}$'
      - '$L = [0;\ 4]$'
      - '$L = \emptyset$'
      - '$L = \{2\}$'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Prüfe eine Zahl zwischen $0$ und $4$, etwa $x = 1$: $1 + 3 = 4$.'
      - wert: 3
        meldung: '$2$ ist eine Lösung, aber nicht die einzige. Prüfe auch $x = 1$ oder $x = 3$.'
  - typ: text
    label: 'Begründung'
    muster: |
      $|x| + |x - 4|$ ist die Summe der Abstände von $x$ zu $0$ und zu $4$. Liegt $x$ zwischen $0$ und $4$, ergeben die
      beiden Abstände zusammen genau die Strecke von $0$ bis $4$, also $4$. Liegt $x$ außerhalb, ist die Summe größer als $4$.
      Darum ist jede Zahl aus dem Intervall $[0;\ 4]$ eine Lösung, und keine andere.
hinweise:
  - 'Deute $|x|$ als Abstand zu $0$ und $|x - 4|$ als Abstand zu $4$.'
  - 'Rechne im mittleren Bereich $0 \leq x < 4$: Was ergibt $x + (4 - x)$?'
loesung: |
  **Ansatz:** Knickstellen sind $0$ und $4$. Im mittleren Bereich $0 \leq x < 4$ gilt $|x| + |x - 4| = x + (4 - x) = 4$. Die Gleichung $4 = 4$ ist für **jedes** $x$ dieses Bereichs wahr.
  ---
  Für $x \geq 4$: $x + x - 4 = 4$ ergibt $x = 4$. Für $x < 0$: $-x + 4 - x = 4$ ergibt $x = 0$, das liegt nicht im Bereich.
  ---
  **Ergebnis:** $L = [0;\ 4]$. Jede Zahl zwischen den beiden Punkten hat die Abstandssumme $4$, weil die Abstände zusammen die ganze Strecke bilden.
```
## Exponential- und Logarithmusgleichungen

```aufgabe
id: gl-exp-check-log
titel: Was ist ein Logarithmus?
niveau: 1
art: check
lernziel: 6
angabe: |
  Berechne ohne Taschenrechner $\log_2 32$.
  Herkunft: [Kapitel 1, Abschnitt 1.11 Logarithmen](/lernen/mathe3/zahlen/logarithmen).
teile:
  - typ: zahl
    label: '$\log_2 32 =$'
    loesung: "5"
    fehler:
      - wert: "16"
        meldung: |
          Du hast $32$ durch $2$ geteilt. Der Logarithmus fragt aber nach einem **Exponenten**:
          Mit welcher Hochzahl muss man $2$ potenzieren, um $32$ zu erhalten?
      - wert: "1/5"
        meldung: |
          Das ist der Kehrwert. Prüfe deine Zahl durch Potenzieren: $2$ hoch dein Ergebnis muss $32$ ergeben.
hinweise:
  - '$\log_2 32$ ist die Zahl $x$ mit $2^x = 32$. Zähle, wie oft du $2$ mit sich selbst multiplizieren musst.'
loesung: |
  $\log_2 32$ ist die Hochzahl $x$, für die $2^x = 32$ gilt. Genau das ist die Definition des Logarithmus.
  ---
  Es gilt $2\cdot 2\cdot 2\cdot 2\cdot 2 = 32$, also $2^5 = 32$. Damit ist $\log_2 32 = 5$.
```

Bisher stand die Unbekannte in der Basis, etwa bei $x^2 = 9$. Jetzt wandert sie nach oben in die Hochzahl.
Eine Gleichung, in der die Unbekannte im Exponenten steht, heißt **Exponentialgleichung**. Der Exponent ist
die Hochzahl einer Potenz. Ein Beispiel ist $2^x = 8$. Ein Nichtbeispiel ist $x^3 = 8$: Dort steht die
Unbekannte in der Basis, das ist eine Potenzgleichung aus
[2.5 Gleichungen höheren Grades](/lernen/mathe3/gleichungen/gleichungen-hoeheren-grades).

Exponentialgleichungen sind der Kern aller Wachstums- und Zerfallsaufgaben. Wann hat sich ein Kapital
verdoppelt? Wann ist ein Medikament zur Hälfte abgebaut? Die Antwort ist immer eine Hochzahl.

Das Werkzeug dafür ist der **Logarithmus** aus [Kapitel 1, Abschnitt 1.11 Logarithmen](/lernen/mathe3/zahlen/logarithmen).
Zur Erinnerung: $\log_a b$ ist die Hochzahl, mit der man $a$ potenzieren muss, um $b$ zu erhalten.
Man liest es „Logarithmus von $b$ zur Basis $a$“. Dabei ist $\ln$ der Logarithmus zur Basis $e \approx 2{,}718$
und $\lg$ der Logarithmus zur Basis $10$. Die wichtigste Regel für dieses Kapitel lautet:
$$\ln\left(a^x\right) = x\cdot\ln a.$$
Der Logarithmus holt also die Hochzahl als Faktor herunter. Genau deshalb hilft er beim Lösen.

### Warum Logarithmieren eine Äquivalenzumformung ist

Für eine Basis $a > 0$ mit $a \neq 1$ ist die Funktion $x \mapsto a^x$ **streng monoton**. Das heißt: Sie
steigt überall (für $a > 1$) oder fällt überall (für $a < 1$). Zwei verschiedene Hochzahlen geben also immer
zwei verschiedene Potenzen. Daraus folgen zwei Regeln. Beide ändern die Lösungsmenge nicht.

:::satz[Exponenten vergleichen und logarithmieren]
Für $a > 0$, $a \neq 1$ gilt:
1. $a^u = a^v$ gilt genau dann, wenn $u = v$ gilt.
2. Für $b > 0$ gilt $a^x = b$ genau dann, wenn $x = \log_a b = \dfrac{\ln b}{\ln a}$.
3. Für $b \leq 0$ hat $a^x = b$ keine Lösung, weil jede Potenz $a^x$ positiv ist.
:::

Beispiel zu Regel 3: $2^x = -4$ hat keine Lösung. Egal welche Hochzahl du wählst, $2^x$ ist immer größer als null.
Die Zahl $2^{-2} = \tfrac14$ ist zwar klein, aber positiv. Ein negatives Vorzeichen in der Hochzahl macht die
Potenz nicht negativ.

### Typ 1: Gleiche Basis herstellen

Lassen sich beide Seiten als Potenz derselben Basis schreiben, vergleichst du einfach die Exponenten. Das geht ganz
ohne Taschenrechner.

:::beispiel[Exponenten vergleichen]
Löse $3^{x + 1} = 9^{x - 2}$.

1. **Gleiche Basis:** $9 = 3^2$. Mit der Regel $(a^m)^n = a^{m\cdot n}$ wird die rechte Seite zu
   $\left(3^2\right)^{x - 2} = 3^{2(x - 2)} = 3^{2x - 4}$. Die Klammer um $x - 2$ ist wichtig.
2. **Exponenten vergleichen:** Aus $3^{x + 1} = 3^{2x - 4}$ folgt $x + 1 = 2x - 4$.
3. **Lineare Gleichung lösen:** Wir ziehen $x$ ab und addieren $4$. Das ergibt $5 = x$.

**Probe:** links $3^{6} = 729$, rechts $9^{3} = 729$. Es stimmt, also $L = \{5\}$.
:::

### Typ 2: Potenz isolieren, dann logarithmieren

Meist lässt sich keine gemeinsame Basis finden. Dann bringst du die Potenz allein auf eine Seite und
logarithmierst beide Seiten. Mit „logarithmieren“ ist gemeint: auf beide Seiten $\ln$ anwenden.

:::beispiel[Wann sind aus 2000 Euro 3000 Euro geworden?]
Ein Kapital von $2000$ Euro wird mit $4\,\%$ pro Jahr verzinst. Nach $t$ Jahren beträgt es $K(t) = 2000\cdot 1{,}04^t$ Euro.
Wann ist es auf $3000$ Euro gewachsen?

1. **Gleichung:** $2000\cdot 1{,}04^t = 3000$.
2. **Potenz isolieren:** Wir dividieren durch $2000$, damit die Potenz allein steht: $1{,}04^t = 1{,}5$.
3. **Logarithmieren:** $\ln\left(1{,}04^t\right) = \ln 1{,}5$, also $t\cdot\ln 1{,}04 = \ln 1{,}5$.
4. **Nach $t$ auflösen:** Wir dividieren durch $\ln 1{,}04$. Das ist erlaubt, weil $\ln 1{,}04 \approx 0{,}0392$ nicht null ist:
   $$t = \frac{\ln 1{,}5}{\ln 1{,}04} \approx 10{,}34.$$

**Antwort:** Nach etwa $10{,}34$ Jahren sind $3000$ Euro erreicht. Bei jährlicher Zinsgutschrift ist das am Ende des
11. Jahres der Fall. **Probe:** $2000\cdot 1{,}04^{10{,}34} \approx 3000$.
:::

:::achtung[Erst isolieren, dann logarithmieren]
Eine häufige Fehlrechnung zum Kapital-Beispiel: „$2000\cdot 1{,}04^t = 3000$, also $2080^t = 3000$.“
Das ist falsch. Die Hochzahl $t$ gehört nur zu $1{,}04$, nicht zu $2000$. Potenzieren kommt vor dem Multiplizieren.
Richtig ist: zuerst durch $2000$ dividieren, dann erst logarithmieren. Das ergibt $1{,}04^t = 1{,}5$.
:::

### Typ 3: Zwei verschiedene Basen

Steht die Unbekannte auf beiden Seiten in einer Hochzahl, und die Basen passen nicht zusammen, logarithmierst du
beide Seiten. Danach steht eine **lineare** Gleichung da.

:::beispiel[Zwei Basen]
Löse $2^x = 5^{x - 1}$.

1. **Logarithmieren:** $x\ln 2 = (x - 1)\ln 5$. Die Klammer um $x - 1$ muss bleiben, weil die ganze Hochzahl herunterkommt.
2. **Ausmultiplizieren:** $x\ln 2 = x\ln 5 - \ln 5$.
3. **Sortieren:** Alle Glieder mit $x$ nach links, $\ln 5$ nach rechts: $x\ln 5 - x\ln 2 = \ln 5$.
4. **Herausheben:** $x(\ln 5 - \ln 2) = \ln 5$, also
   $$x = \frac{\ln 5}{\ln 5 - \ln 2} = \frac{\ln 5}{\ln 2{,}5} \approx 1{,}756.$$

**Probe mit dem Taschenrechner:** $2^{1{,}756} \approx 3{,}38$ und $5^{0{,}756} \approx 3{,}38$.
:::

### Typ 4: Summen von Potenzen

:::achtung[Summen nicht gliedweise logarithmieren]
Eine typische Fehlrechnung zu $2^{x + 2} + 2^x = 40$: „$(x + 2)\ln 2 + x\ln 2 = \ln 40$.“
Das ist falsch, denn $\ln(u + v)$ ist **nicht** $\ln u + \ln v$. Der Logarithmus einer Summe lässt sich nicht zerlegen.
Richtig: Zuerst $2^x$ herausheben. Wegen $2^{x + 2} = 2^x\cdot 2^2 = 4\cdot 2^x$ gilt
$2^x(4 + 1) = 40$. Also $2^x = 8$ und $x = 3$. Probe: $2^5 + 2^3 = 32 + 8 = 40$.
:::

### Typ 5: Substitution

Kommen $a^x$ und $a^{2x}$ zusammen vor, hilft dieselbe Idee wie bei den biquadratischen Gleichungen in
[2.5 Gleichungen höheren Grades](/lernen/mathe3/gleichungen/gleichungen-hoeheren-grades). Man ersetzt einen Term durch
einen neuen Buchstaben. Das nennt man **Substitution**.

:::beispiel[Quadratische Gleichung in 3 hoch x]
Löse $9^x - 2\cdot 3^x - 3 = 0$.

1. **Umschreiben:** $9^x = \left(3^2\right)^x = \left(3^x\right)^2$. Die Gleichung enthält also $3^x$ und sein Quadrat.
2. **Substituieren:** Wir setzen $u = 3^x$. Dann lautet die Gleichung $u^2 - 2u - 3 = 0$.
3. **Quadratisch lösen:** $u^2 - 2u - 3 = (u - 3)(u + 1)$. Nach dem Nullproduktsatz ist $u = 3$ oder $u = -1$.
4. **Rücksubstitution:** Aus $3^x = 3$ folgt $x = 1$. Die Gleichung $3^x = -1$ hat keine Lösung, weil $3^x$ immer positiv ist.

**Ergebnis:** $L = \{1\}$. **Probe:** $9 - 2\cdot 3 - 3 = 0$.
:::

### Logarithmusgleichungen

Steht die Unbekannte im Argument eines Logarithmus, spricht man von einer **Logarithmusgleichung**. Das Argument ist
die Zahl, von der man den Logarithmus nimmt. Ein Beispiel ist $\lg(x + 1) = 2$. Ein Nichtbeispiel ist
$x\cdot\ln 3 = 2$: Dort steht $x$ nur als Faktor vor einer festen Zahl, das ist eine lineare Gleichung.

Das Vorgehen hat zwei Schritte. Zuerst fasst du alles zu **einem** Logarithmus zusammen. Dann wendest du die Definition an:
$\log_a T = c$ gilt genau dann, wenn $T = a^c$ gilt. Logarithmen gibt es aber nur von positiven Zahlen. Deshalb bestimmst
du ganz am Anfang die **Definitionsmenge** $D$, also alle $x$, für die jedes Argument positiv ist.

:::beispiel[Logarithmusgleichung mit Scheinlösung]
Löse $\log_2(x) + \log_2(x - 2) = 3$.

1. **Definitionsmenge:** Es muss $x > 0$ und $x - 2 > 0$ gelten. Beides zusammen heißt $x > 2$, also $D = \,]2; \infty[$.
2. **Zusammenfassen:** Mit der Regel $\log u + \log v = \log(u\cdot v)$ wird die Gleichung zu $\log_2\big(x(x - 2)\big) = 3$.
3. **Definition anwenden:** $x(x - 2) = 2^3 = 8$, also $x^2 - 2x - 8 = 0$.
4. **Lösen:** $x^2 - 2x - 8 = (x - 4)(x + 2)$, also $x = 4$ oder $x = -2$.
5. **Mit $D$ abgleichen:** $4 \in D$. Aber $-2$ ist nicht in $D$, denn $\log_2(-2)$ gibt es nicht.

**Ergebnis:** $L = \{4\}$. **Probe:** $\log_2 4 + \log_2 2 = 2 + 1 = 3$.
:::

:::achtung[Den Abgleich mit der Definitionsmenge vergessen]
Wer beim Beispiel mit $\log_2$ schreibt „$L = \{4; -2\}$“, hat eine **Scheinlösung** behalten. Eine Scheinlösung ist eine
Zahl, die die umgeformte Gleichung löst, aber nicht die ursprüngliche. Sie entsteht beim Zusammenfassen: $\log_2\big(x(x - 2)\big)$
ist auch für $x = -2$ definiert, weil $(-2)\cdot(-4) = 8$ positiv ist. Die einzelnen Logarithmen $\log_2(-2)$ und $\log_2(-4)$ gibt
es aber nicht. Darum gehört der Abgleich mit $D$ immer ans Ende.
:::

### Wachstum und Zerfall

Viele Prüfungsaufgaben beschreiben einen Bestand mit einer der beiden Formen
$$N(t) = N_0\cdot q^t \qquad\text{oder}\qquad N(t) = N_0\cdot e^{\lambda t}.$$
Dabei ist $N_0$ der Anfangsbestand, $t$ die Zeit und $q$ der **Wachstumsfaktor** pro Zeiteinheit. Bei $p\,\%$ Zunahme ist
$q = 1 + \tfrac{p}{100}$, bei $p\,\%$ Abnahme ist $q = 1 - \tfrac{p}{100}$. In der zweiten Form ist $\lambda$ (gelesen „lambda“) eine
Konstante, und der Faktor pro Zeiteinheit ist $e^\lambda$. Die Modelle selbst bespricht
[Kapitel 4](/lernen/mathe3/funktionen) ausführlich. Hier geht es um die Gleichungen, die daraus entstehen.

:::beispiel[Ein Medikament wird abgebaut]
Die Konzentration eines Wirkstoffs im Blut ist $c(t) = 80\cdot e^{-0{,}2t}$ in mg/l, $t$ in Stunden.

1. **Abnahme pro Stunde:** Pro Stunde wird mit $e^{-0{,}2} \approx 0{,}8187$ multipliziert. Die Konzentration sinkt also um
   $1 - 0{,}8187 = 0{,}1813$, das sind etwa $18{,}13\,\%$ pro Stunde. Es sind **nicht** $20\,\%$, denn $0{,}2$ steht in der Hochzahl.
2. **Halbwertszeit:** Gesucht ist $t$ mit $80\cdot e^{-0{,}2t} = 40$. Wir dividieren durch $80$: $e^{-0{,}2t} = 0{,}5$.
   Logarithmieren gibt $-0{,}2t = \ln 0{,}5 = -\ln 2$, also $t = \tfrac{\ln 2}{0{,}2} \approx 3{,}47$ Stunden.
3. **Ab wann unter 10 mg/l?** $80\cdot e^{-0{,}2t} = 10$ ergibt $e^{-0{,}2t} = \tfrac18$. Also $-0{,}2t = -\ln 8$ und
   $t = \tfrac{\ln 8}{0{,}2} \approx 10{,}40$ Stunden.

**Antwort:** Die Halbwertszeit beträgt etwa $3{,}47$ h. Nach etwa $10{,}40$ h liegt die Konzentration unter $10$ mg/l.
Kontrolle: $10$ ist ein Achtel von $80$, also drei Halbierungen. $3\cdot 3{,}466 \approx 10{,}40$ passt.
:::

```plot
x: [0, 16]
y: [0, 85]
achsen: { x: "t in h", y: "c in mg/l" }
graphen:
  - { f: "80*exp(-0.2*x)", label: "c(t) = 80·e^(−0,2t)", farbe: 0, von: 0, bis: 16 }
  - { f: "40", label: "40 mg/l", farbe: 1, gestrichelt: true }
  - { f: "10", label: "10 mg/l", farbe: 2, gestrichelt: true }
punkte:
  - { x: "ln(2)/0.2", y: 40, label: "Halbwertszeit ≈ 3,47 h", farbe: 1 }
  - { x: "ln(8)/0.2", y: 10, label: "≈ 10,40 h", farbe: 2 }
beschriftung: Die Konzentration c(t) = 80·e^(−0,2t) fällt nach etwa 3,47 Stunden auf die Hälfte (40 mg/l) und nach etwa 10,40 Stunden auf 10 mg/l. Ab dort liegt die Kurve unter der gestrichelten Linie bei 10 mg/l.
```

Die letzte Frage war eigentlich eine **Ungleichung**: Für welche $t$ gilt $80\cdot e^{-0{,}2t} < 10$? Weil die Kurve fällt, gilt
das für alle $t$ größer als $10{,}40$. Wie man solche Ungleichungen sauber umformt, zeigt
[2.10 Ungleichungen](/lernen/mathe3/gleichungen/ungleichungen).

:::merke[Exponential- und Logarithmusgleichungen lösen]
1. **Potenz isolieren:** Bring die Gleichung auf die Form $a^{T} = b$. Für $b \leq 0$ gibt es keine Lösung.
2. **Gleiche Basis möglich?** Dann die Exponenten vergleichen.
3. **Sonst logarithmieren:** $T\cdot\ln a = \ln b$, dann nach $x$ auflösen.
4. **Summen von Potenzen:** zuerst die kleinste Potenz herausheben, nie gliedweise logarithmieren.
5. **$a^x$ und $a^{2x}$ zusammen:** Substitution $u = a^x$. Werte $u \leq 0$ verwerfen.
6. **Logarithmusgleichungen:** Definitionsmenge zuerst, zu einem Logarithmus zusammenfassen, Definition anwenden, am Ende mit $D$ abgleichen.
:::

```reflexion
frage: Warum hat die Gleichung $5^x = -25$ keine Lösung, die Gleichung $5^x = \tfrac{1}{25}$ aber schon? Und warum darf man bei $5^x = 25$ einfach logarithmieren, ohne eine Lösung zu verlieren?
antwort: |
  Jede Potenz $5^x$ ist positiv, auch für negative Hochzahlen. Zum Beispiel ist $5^{-2} = \tfrac{1}{25}$ klein, aber positiv.
  Darum hat $5^x = \tfrac{1}{25}$ die Lösung $x = -2$. Den negativen Wert $-25$ erreicht keine Potenz, also hat
  $5^x = -25$ keine Lösung.

  Logarithmieren ist erlaubt, weil der Logarithmus auf den positiven Zahlen streng monoton und damit umkehrbar ist.
  Zwei verschiedene positive Zahlen haben verschiedene Logarithmen. Die Umformung ist also eine Äquivalenzumformung:
  Sie ändert die Lösungsmenge nicht.
```

```aufgabe
id: gl-exp-basis
titel: Gleiche Basis herstellen
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Löse ohne Taschenrechner.

  a) $5^{2x - 1} = 125$

  b) $9^{x} = 27^{x - 1}$
teile:
  - typ: zahl
    label: 'a) $x$'
    loesung: "(3 + 1)/2"
    fehler:
      - wert: "3/2"
        meldung: |
          Aus $2x - 1 = 3$ hast du $2x = 3$ gemacht. Um die $-1$ zu beseitigen, musst du auf beiden Seiten $1$ **addieren**.
      - wert: "63"
        meldung: |
          Du hast mit $125$ statt mit der Hochzahl gerechnet. Schreib $125$ zuerst als Potenz von $5$ und vergleiche dann die Exponenten.
  - typ: zahl
    label: 'b) $x$'
    loesung: "3"
    fehler:
      - wert: "1"
        meldung: |
          Beim Umschreiben von $27^{x - 1}$ muss die ganze Hochzahl mit $3$ multipliziert werden: $3(x - 1) = 3x - 3$, nicht $3x - 1$.
      - wert: "-3"
        meldung: |
          Prüfe das Vorzeichen beim Sortieren. Setze dein Ergebnis zur Probe ein: Beide Seiten müssen gleich groß sein.
hinweise:
  - '$125 = 5^3$, $9 = 3^2$ und $27 = 3^3$.'
  - 'Bei b) wird $9^x = 3^{2x}$ und $27^{x - 1} = 3^{3(x - 1)}$. Dann die Hochzahlen gleichsetzen.'
loesung: |
  **Ansatz:** Beide Seiten als Potenz derselben Basis schreiben und die Exponenten vergleichen. Das ist erlaubt, weil
  $a^u = a^v$ genau dann gilt, wenn $u = v$ ist.
  ---
  a) $125 = 5^3$, also $5^{2x - 1} = 5^3$ und $2x - 1 = 3$. Wir addieren $1$ und teilen durch $2$: $x = 2$. Probe: $5^3 = 125$.
  ---
  b) $9^x = 3^{2x}$ und $27^{x - 1} = 3^{3x - 3}$. Also $2x = 3x - 3$. Wir ziehen $2x$ ab und addieren $3$: $x = 3$.
  Probe: $9^3 = 729$ und $27^2 = 729$.
```

```aufgabe
id: gl-exp-log
titel: Isolieren und logarithmieren
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Löse und runde auf drei Nachkommastellen.

  a) $3\cdot 1{,}06^x = 7{,}5$

  b) $e^{0{,}4x} = 9$
teile:
  - typ: zahl
    label: 'a) $x$'
    loesung: "ln(7.5/3)/ln(1.06)"
    anzeige: '\tfrac{\ln 2{,}5}{\ln 1{,}06} \approx 15{,}725'
    toleranz: 0.001
    fehler:
      - wert: "ln(7.5)/ln(3.18)"
        meldung: |
          Du hast $3\cdot 1{,}06$ zu $3{,}18$ zusammengefasst. Die Hochzahl gehört aber nur zu $1{,}06$. Dividiere zuerst durch $3$.
      - wert: "ln(7.5)/ln(1.06)"
        meldung: |
          Der Faktor $3$ fehlt in deiner Rechnung. Bevor du logarithmierst, muss die Potenz allein auf einer Seite stehen.
  - typ: zahl
    label: 'b) $x$'
    loesung: "ln(9)/0.4"
    anzeige: '\tfrac{\ln 9}{0{,}4} \approx 5{,}493'
    toleranz: 0.001
    fehler:
      - wert: "ln(9)*0.4"
        meldung: |
          Aus $0{,}4x = \ln 9$ folgt $x$ durch **Dividieren** durch $0{,}4$, nicht durch Multiplizieren.
      - wert: "ln(9/0.4)"
        meldung: |
          Du hast zuerst durch $0{,}4$ geteilt und dann logarithmiert. Die $0{,}4$ steht aber in der Hochzahl. Logarithmiere zuerst.
hinweise:
  - 'Bei a) zuerst durch $3$ dividieren. Dann $\ln$ auf beide Seiten anwenden.'
loesung: |
  **Ansatz:** Potenz isolieren, dann logarithmieren. Der Logarithmus holt die Hochzahl als Faktor herunter.
  ---
  a) Durch $3$ dividieren: $1{,}06^x = 2{,}5$. Logarithmieren: $x\ln 1{,}06 = \ln 2{,}5$, also $x = \tfrac{\ln 2{,}5}{\ln 1{,}06} \approx 15{,}725$.
  ---
  b) Die Potenz steht schon allein. $\ln$ anwenden: $0{,}4x = \ln 9$. Durch $0{,}4$ dividieren: $x = \tfrac{\ln 9}{0{,}4} \approx 5{,}493$.
  Probe: $e^{0{,}4\cdot 5{,}493} = e^{2{,}197} \approx 9$.
```

```aufgabe
id: gl-exp-summe-fehler
titel: Fehler finden bei einer Summe von Potenzen
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  Eine Mitschülerin löst $3^{x + 1} - 3^x = 54$ so:
  $$(x + 1)\ln 3 - x\ln 3 = \ln 54 \quad\Longrightarrow\quad \ln 3 = \ln 54.$$
  Sie folgert: „Die Gleichung hat keine Lösung.“

  a) Welcher Schritt ist falsch?

  b) Löse die Gleichung richtig.
teile:
  - typ: auswahl
    label: 'a)'
    optionen:
      - 'Sie hat gliedweise logarithmiert. Der Logarithmus einer Differenz ist aber nicht die Differenz der Logarithmen.'
      - 'Sie hätte $\lg$ statt $\ln$ verwenden müssen.'
      - 'Der Fehler liegt nur am Schluss: Aus $\ln 3 = \ln 54$ folgt $3 = 54$, und das ist eine Lösung.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Die Basis des Logarithmus ist gleichgültig, solange man auf beiden Seiten dieselbe nimmt. Das Problem liegt früher.
      - wert: 2
        meldung: |
          $3 = 54$ ist eine falsche Aussage und enthält kein $x$. Der eigentliche Fehler passiert schon beim Logarithmieren.
  - typ: zahl
    label: 'b) $x$'
    loesung: "3"
    fehler:
      - wert: "ln(54)/ln(3)"
        meldung: |
          Du hast $3^{x + 1} - 3^x$ wie $3^x$ behandelt. Hebe zuerst $3^x$ heraus: $3^{x + 1} = 3\cdot 3^x$.
      - wert: "ln(27)/ln(2)"
        meldung: |
          $3^x = 27$ ist richtig. Beim Logarithmieren muss aber $\ln 3$ in den Nenner, weil die Basis $3$ ist.
hinweise:
  - 'Schreib $3^{x + 1}$ als $3\cdot 3^x$ und hebe $3^x$ heraus.'
loesung: |
  **a)** Der Logarithmus einer Differenz lässt sich nicht zerlegen: $\ln(u - v) \neq \ln u - \ln v$. Gliedweise logarithmieren
  ist deshalb verboten.
  ---
  **b)** Wegen $3^{x + 1} = 3\cdot 3^x$ heben wir $3^x$ heraus: $3^x(3 - 1) = 54$, also $2\cdot 3^x = 54$ und $3^x = 27$.
  ---
  $27 = 3^3$, also $x = 3$. **Probe:** $3^4 - 3^3 = 81 - 27 = 54$.
```

```aufgabe
id: gl-exp-zwei-basen
titel: Zwei verschiedene Basen
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Löse $7^{x} = 3^{x + 2}$. Gib das Ergebnis exakt an und runde dann auf drei Nachkommastellen.
teile:
  - typ: zahl
    label: '$x$'
    loesung: "2*ln(3)/(ln(7) - ln(3))"
    anzeige: '\tfrac{2\ln 3}{\ln 7 - \ln 3} \approx 2{,}593'
    toleranz: 0.001
    fehler:
      - wert: "ln(3)/(ln(7) - ln(3))"
        meldung: |
          Beim Logarithmieren kommt die **ganze** Hochzahl $x + 2$ herunter: $(x + 2)\ln 3 = x\ln 3 + 2\ln 3$. Der Faktor $2$ fehlt bei dir.
      - wert: "2*ln(3)/(ln(7) + ln(3))"
        meldung: |
          Prüfe das Vorzeichen beim Sortieren. Wenn du $x\ln 3$ nach links bringst, wird es abgezogen.
hinweise:
  - 'Logarithmieren: $x\ln 7 = (x + 2)\ln 3$. Das ist eine lineare Gleichung in $x$.'
  - 'Ausmultiplizieren, alle Glieder mit $x$ auf eine Seite und $x$ herausheben.'
loesung: |
  **Ansatz:** Die Basen $7$ und $3$ lassen sich nicht angleichen. Wir logarithmieren beide Seiten: $x\ln 7 = (x + 2)\ln 3$.
  ---
  Ausmultiplizieren: $x\ln 7 = x\ln 3 + 2\ln 3$. Wir ziehen $x\ln 3$ ab: $x\ln 7 - x\ln 3 = 2\ln 3$.
  ---
  Herausheben: $x(\ln 7 - \ln 3) = 2\ln 3$, also $x = \tfrac{2\ln 3}{\ln 7 - \ln 3} \approx \tfrac{2{,}1972}{0{,}8473} \approx 2{,}593$.
  ---
  **Probe:** $7^{2{,}593} \approx 155{,}4$ und $3^{4{,}593} \approx 155{,}4$.
```

```aufgabe
id: gl-log-gleichung
titel: Logarithmusgleichungen
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  a) Löse $\lg(3x - 5) = 2$.

  b) Löse $\log_2(x) + \log_2(x + 6) = 4$. Gib die Lösungsmenge an, mehrere Zahlen durch Strichpunkt getrennt.
teile:
  - typ: zahl
    label: 'a) $x$'
    loesung: "(100 + 5)/3"
    fehler:
      - wert: "7/3"
        meldung: |
          Du hast $3x - 5 = 2$ gesetzt. Der Logarithmus ist aber $2$, nicht das Argument. Nach der Definition ist $3x - 5 = 10^2$.
      - wert: "(20 + 5)/3"
        meldung: |
          $10^2$ ist $100$, nicht $20$. Potenzieren heißt mehrfach multiplizieren.
  - typ: menge
    label: 'b) $L$'
    loesung: ["2"]
    fehler:
      - wert: ["2", "-8"]
        meldung: |
          Eine der beiden Zahlen liegt nicht in der Definitionsmenge. Für sie wäre $\log_2$ einer negativen Zahl nötig.
      - wert: ["-8"]
        meldung: |
          Setze $-8$ in $\log_2(x)$ ein. Logarithmen gibt es nur von positiven Zahlen.
hinweise:
  - 'Definition: $\log_a T = c$ gilt genau dann, wenn $T = a^c$ gilt.'
  - 'Bei b) zuerst $D$ bestimmen ($x > 0$), dann zu $\log_2\big(x(x + 6)\big) = 4$ zusammenfassen.'
loesung: |
  **Ansatz:** Zu einem Logarithmus zusammenfassen, dann die Definition des Logarithmus anwenden.
  ---
  a) $\lg$ ist der Logarithmus zur Basis $10$. Also $3x - 5 = 10^2 = 100$, $3x = 105$ und $x = 35$. Das Argument $100$ ist positiv.
  ---
  b) $D$: Es muss $x > 0$ und $x + 6 > 0$ gelten, also $D = \,]0; \infty[$. Zusammenfassen: $x(x + 6) = 2^4 = 16$,
  also $x^2 + 6x - 16 = 0$ und $(x + 8)(x - 2) = 0$.
  ---
  $x = 2$ liegt in $D$. $x = -8$ liegt nicht in $D$ und ist eine Scheinlösung. **Ergebnis:** $L = \{2\}$.
  Probe: $\log_2 2 + \log_2 8 = 1 + 3 = 4$.
```

```aufgabe
id: gl-exp-halbwertszeit
titel: Koffein im Blut
niveau: 2
lernziel: 6
kompetenz: modellieren
angabe: |
  Die Koffeinmenge im Blut nimmt pro Stunde um $13\,\%$ ab. Nach wie vielen Stunden ist nur noch die Hälfte vorhanden?
  Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    label: 'Halbwertszeit'
    einheit: h
    loesung: "ln(0.5)/ln(0.87)"
    anzeige: '\tfrac{\ln 0{,}5}{\ln 0{,}87} \approx 4{,}98'
    toleranz: 0.01
    fehler:
      - wert: "50/13"
        meldung: |
          Du hast linear gerechnet, als ob jede Stunde $13$ Prozentpunkte der Anfangsmenge verschwinden. Die Abnahme bezieht sich
          aber jede Stunde auf die **aktuelle** Menge. Der Faktor pro Stunde ist $0{,}87$.
      - wert: "ln(0.5)/ln(0.13)"
        meldung: |
          $0{,}13$ ist der Anteil, der verschwindet. Übrig bleiben pro Stunde $1 - 0{,}13 = 0{,}87$ der Menge.
hinweise:
  - 'Nach $t$ Stunden ist noch $M(t) = M_0\cdot 0{,}87^t$ vorhanden.'
  - 'Setze $M_0\cdot 0{,}87^t = 0{,}5\cdot M_0$ an. $M_0$ kürzt sich weg, dann logarithmieren.'
loesung: |
  **Ansatz:** Bei $13\,\%$ Abnahme bleiben pro Stunde $87\,\%$ übrig. Mit der Anfangsmenge $M_0$ gilt $M(t) = M_0\cdot 0{,}87^t$.
  ---
  Halbwertszeit: $M_0\cdot 0{,}87^t = 0{,}5\,M_0$. Wir dividieren durch $M_0$, das ist positiv: $0{,}87^t = 0{,}5$.
  ---
  Logarithmieren: $t\ln 0{,}87 = \ln 0{,}5$, also $t = \tfrac{\ln 0{,}5}{\ln 0{,}87} \approx 4{,}98$. Beide Logarithmen sind negativ, der Quotient ist positiv.
  ---
  **Antwort:** Nach etwa $4{,}98$ Stunden ist die Hälfte des Koffeins abgebaut. Die Anfangsmenge spielt dafür keine Rolle.
```

```aufgabe
id: gl-exp-wachstumsrate
titel: Wachstum in der e-Form
niveau: 2
lernziel: 6
kompetenz: anwenden
quelle: "nach Musterprüfung Karigl, Aufgabe 3 (abgewandelt)"
angabe: |
  Die Zahl der Nutzerinnen und Nutzer einer App wächst nach $N(t) = N_0\cdot e^{0{,}035t}$ mit $t$ in Monaten.

  a) Um wie viel Prozent wächst die Zahl pro Monat? Runde auf zwei Nachkommastellen.

  b) Nach wie vielen Monaten hat sie sich verdoppelt? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    label: 'a) Zunahme pro Monat'
    einheit: "%"
    loesung: "(exp(0.035) - 1)*100"
    toleranz: 0.01
    fehler:
      - wert: "3.5"
        meldung: |
          $0{,}035$ steht in der Hochzahl und ist nicht der Prozentsatz. Der Faktor pro Monat ist $e^{0{,}035}$. Rechne ihn aus.
  - typ: zahl
    label: 'b) Verdopplungszeit'
    einheit: Monate
    loesung: "ln(2)/0.035"
    anzeige: '\tfrac{\ln 2}{0{,}035} \approx 19{,}80'
    toleranz: 0.01
    fehler:
      - wert: "100/3.5"
        meldung: |
          Das wäre lineares Wachstum mit $3{,}5$ Prozentpunkten pro Monat. Hier wächst die Zahl aber exponentiell. Setze $e^{0{,}035t} = 2$ an.
      - wert: "ln(2)/3.5"
        meldung: |
          In der Hochzahl steht $0{,}035$, nicht $3{,}5$. Prozentzahlen gehören nicht in diese Formel.
hinweise:
  - 'Vergleiche $N(t + 1)$ mit $N(t)$. Der Quotient ist der Faktor pro Monat.'
  - 'Für b): $N_0\,e^{0{,}035t} = 2N_0$. Durch $N_0$ dividieren, dann logarithmieren.'
loesung: |
  **Ansatz:** Der Faktor pro Monat ist $\tfrac{N(t + 1)}{N(t)} = e^{0{,}035}$, weil sich beim Dividieren die Hochzahlen abziehen.
  ---
  a) $e^{0{,}035} \approx 1{,}03562$. Die Zahl wächst also um etwa $3{,}56\,\%$ pro Monat, etwas mehr als $3{,}5\,\%$.
  ---
  b) $e^{0{,}035t} = 2$. Logarithmieren: $0{,}035\,t = \ln 2$, also $t = \tfrac{\ln 2}{0{,}035} \approx 19{,}80$.
  ---
  **Antwort:** Etwa $3{,}56\,\%$ Zunahme pro Monat. Nach rund $19{,}80$ Monaten hat sich die Zahl verdoppelt.
  Kontrolle: $1{,}03562^{19{,}8} \approx 2{,}00$.
```

```aufgabe
id: gl-exp-verdreifachung
titel: Den Prozentsatz zurückrechnen
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Ein Waldbestand soll sich durch gleichmäßiges prozentuelles Wachstum in $12$ Jahren verdreifachen.
  Um wie viel Prozent muss er jährlich wachsen? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    label: 'jährlicher Zuwachs'
    einheit: "%"
    loesung: "(3^(1/12) - 1)*100"
    toleranz: 0.01
    fehler:
      - wert: "200/12"
        meldung: |
          Du hast den Zuwachs von $200\,\%$ gleichmäßig auf $12$ Jahre verteilt. Bei prozentuellem Wachstum wächst aber jedes Jahr
          auch der Zuwachs der Vorjahre mit. Gesucht ist ein Faktor $q$ mit $q^{12} = 3$.
      - wert: "300/12"
        meldung: |
          Verdreifachen heißt $200\,\%$ dazu, nicht $300\,\%$. Rechne aber ohnehin mit dem Faktor: $q^{12} = 3$.
hinweise:
  - 'Mit dem Faktor $q$ pro Jahr gilt $N_0\cdot q^{12} = 3N_0$.'
  - 'Diesmal ist die Basis gesucht, nicht die Hochzahl. Ziehe die zwölfte Wurzel.'
loesung: |
  **Ansatz:** Mit dem jährlichen Faktor $q$ gilt $N_0\cdot q^{12} = 3N_0$. Hier ist die **Basis** unbekannt, nicht die Hochzahl.
  Das ist eine Potenzgleichung.
  ---
  Durch $N_0$ dividieren: $q^{12} = 3$. Zwölfte Wurzel ziehen, $q$ ist positiv: $q = \sqrt[12]{3} \approx 1{,}09587$.
  ---
  Der Zuwachs ist $q - 1 \approx 0{,}09587$, also etwa $9{,}59\,\%$ pro Jahr.
  ---
  **Probe:** $1{,}09587^{12} \approx 3{,}00$. **Antwort:** Der Bestand muss jährlich um etwa $9{,}59\,\%$ wachsen.
```

```aufgabe
id: gl-exp-substitution
titel: Exponentialgleichung mit Substitution
niveau: 3
lernziel: 6
kompetenz: rechnen
angabe: |
  Löse $2^{2x + 1} - 9\cdot 2^x + 4 = 0$. Gib die Lösungsmenge an, mehrere Zahlen durch Strichpunkt getrennt.
teile:
  - typ: menge
    label: '$L$'
    loesung: ["2", "-1"]
    fehler:
      - wert: ["4", "1/2"]
        meldung: |
          Das sind die Lösungen für $u = 2^x$. Gesucht ist aber $x$. Die Rücksubstitution fehlt noch.
      - wert: ["2"]
        meldung: |
          Auch $u = \tfrac12$ ist positiv und liefert eine Lösung. $2^x = \tfrac12$ hat die Lösung $x = -1$.
hinweise:
  - '$2^{2x + 1} = 2\cdot 2^{2x} = 2\cdot\left(2^x\right)^2$.'
  - 'Setze $u = 2^x$. Dann entsteht $2u^2 - 9u + 4 = 0$. Löse mit der großen Lösungsformel und substituiere zurück.'
loesung: |
  **Ansatz:** In der Gleichung kommen $2^x$ und $\left(2^x\right)^2$ vor. Darum substituieren wir $u = 2^x$.
  Wegen $2^{2x + 1} = 2\cdot\left(2^x\right)^2$ wird die Gleichung zu $2u^2 - 9u + 4 = 0$.
  ---
  Große Lösungsformel: $u = \tfrac{9 \pm\sqrt{81 - 32}}{4} = \tfrac{9 \pm 7}{4}$, also $u = 4$ oder $u = \tfrac12$.
  ---
  Rücksubstitution: $2^x = 4 = 2^2$ ergibt $x = 2$. $2^x = \tfrac12 = 2^{-1}$ ergibt $x = -1$. Beide $u$ sind positiv, keiner fällt weg.
  ---
  **Probe:** $x = 2$: $2^5 - 9\cdot 4 + 4 = 32 - 36 + 4 = 0$. $x = -1$: $2^{-1} - \tfrac92 + 4 = 0{,}5 - 4{,}5 + 4 = 0$.
  Also $L = \{-1; 2\}$.
gefuehrt:
  - text: Schreib $2^{2x + 1}$ mit $u = 2^x$. Welcher Term in $u$ entsteht?
    teil:
      typ: term
      variable: u
      loesung: "2u^2"
      fehler:
        - wert: "u^2"
          meldung: 'Der Summand $+1$ in der Hochzahl liefert einen zusätzlichen Faktor $2^1 = 2$.'
        - wert: "2u"
          meldung: '$2^{2x} = \left(2^x\right)^2 = u^2$, nicht $u$.'
    erklaerung: '$2^{2x + 1} = 2^1\cdot 2^{2x} = 2\cdot\left(2^x\right)^2 = 2u^2$.'
  - text: Löse die Gleichung $2u^2 - 9u + 4 = 0$ nach $u$.
    teil:
      typ: menge
      loesung: ["4", "1/2"]
      fehler:
        - wert: ["4", "-1/2"]
          meldung: 'Prüfe das Vorzeichen: $\tfrac{9 - 7}{4}$ ist positiv.'
    erklaerung: 'Die Diskriminante ist $81 - 32 = 49$. Also $u = \tfrac{9 \pm 7}{4}$, das ergibt $4$ und $\tfrac12$.'
  - text: Überlege, ob eine der beiden Lösungen für $u$ wegfällt.
    erklaerung: 'Es gilt $u = 2^x > 0$. Beide Werte sind positiv, also bleiben beide.'
  - text: Substituiere zurück und gib alle $x$ an.
    teil:
      typ: menge
      loesung: ["2", "-1"]
    erklaerung: '$2^x = 4$ ergibt $x = 2$, und $2^x = \tfrac12$ ergibt $x = -1$.'
```

```aufgabe
id: gl-exp-ab-wann
titel: Ab welchem Jahr sind es mehr als 7000 Euro?
niveau: 3
lernziel: 6
kompetenz: modellieren
angabe: |
  Ein Betrag von $5000$ Euro wird mit $2{,}5\,\%$ pro Jahr verzinst. Die Zinsen werden am Ende jedes Jahres gutgeschrieben.

  a) Für welches $t$ gilt genau $5000\cdot 1{,}025^t = 7000$? Runde auf zwei Nachkommastellen.

  b) Nach wie vielen ganzen Jahren liegen erstmals mehr als $7000$ Euro am Konto?
teile:
  - typ: zahl
    label: 'a) $t$'
    loesung: "ln(1.4)/ln(1.025)"
    anzeige: '\tfrac{\ln 1{,}4}{\ln 1{,}025} \approx 13{,}63'
    toleranz: 0.01
    fehler:
      - wert: "ln(7000)/ln(5125)"
        meldung: |
          $5000\cdot 1{,}025^t$ ist nicht $5125^t$. Die Hochzahl gehört nur zu $1{,}025$. Dividiere zuerst durch $5000$.
  - typ: zahl
    label: 'b) ganze Jahre'
    loesung: "14"
    fehler:
      - wert: "13"
        meldung: |
          Nach $13$ Jahren ist $t = 13{,}63$ noch nicht erreicht. Rechne zur Kontrolle $5000\cdot 1{,}025^{13}$ aus.
hinweise:
  - 'Dividiere durch $5000$: $1{,}025^t = 1{,}4$. Dann logarithmieren.'
  - 'Das Kapital wächst mit $t$. Es übersteigt $7000$ Euro für alle $t$ größer als die Lösung aus a). Gesucht ist die nächste ganze Zahl.'
loesung: |
  **Ansatz:** Zuerst die Grenze bestimmen, an der das Kapital genau $7000$ Euro erreicht. Weil das Kapital mit der Zeit wächst,
  liegt es danach immer darüber.
  ---
  a) $5000\cdot 1{,}025^t = 7000$. Durch $5000$ dividieren: $1{,}025^t = 1{,}4$. Logarithmieren: $t = \tfrac{\ln 1{,}4}{\ln 1{,}025} \approx 13{,}63$.
  ---
  b) Die Zinsen kommen nur am Jahresende dazu. Nach $13$ Jahren sind es $5000\cdot 1{,}025^{13} \approx 6892{,}56$ Euro, also noch zu wenig.
  Nach $14$ Jahren sind es $5000\cdot 1{,}025^{14} \approx 7064{,}87$ Euro.
  ---
  **Antwort:** Nach $14$ Jahren liegen erstmals mehr als $7000$ Euro am Konto.
```
## Ungleichungen

```aufgabe
id: gl-ungl-check-intervall
titel: Intervalle lesen
niveau: 1
art: check
lernziel: 7
angabe: |
  Welches Intervall beschreibt alle reellen Zahlen $x$ mit $-2 < x \leq 3$?
  Herkunft: [Kapitel 1, Abschnitt 1.15 Betrag und Intervalle](/lernen/mathe3/zahlen/betrag-und-intervalle).
teile:
  - typ: auswahl
    optionen:
      - '$]-2; 3]$'
      - '$[-2; 3]$'
      - '$]-2; 3[$'
      - '$[-2; 3[$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Die eckige Klammer $[$ links bedeutet „$-2$ gehört dazu“. In der Angabe steht aber $-2 < x$, also gehört $-2$ nicht dazu.
      - wert: 2
        meldung: |
          Rechts steht $x \leq 3$. Die Zahl $3$ gehört also dazu, und dafür braucht es die Klammer $]$, die zur Zahl hin zeigt.
      - wert: 3
        meldung: |
          Bei dir sind beide Ränder vertauscht: $-2$ gehört nicht dazu, $3$ gehört dazu.
hinweise:
  - 'Eine Klammer, die zur Zahl hin zeigt, heißt „gehört dazu“. Eine Klammer, die von der Zahl weg zeigt, heißt „gehört nicht dazu“.'
loesung: |
  Der linke Rand $-2$ gehört nicht dazu, weil $-2 < x$ streng ist. Dafür schreibt man $]-2$.
  ---
  Der rechte Rand $3$ gehört dazu, weil $x \leq 3$ auch die Gleichheit erlaubt. Dafür schreibt man $3]$. Zusammen: $]-2; 3]$.
```

Eine Gleichung fragt: Für welche $x$ sind beide Seiten **gleich**? Eine **Ungleichung** fragt: Für welche $x$ ist eine
Seite **kleiner** oder **größer** als die andere? Die Zeichen liest man so: $<$ „kleiner als“, $\leq$ „kleiner oder
gleich“, $>$ „größer als“, $\geq$ „größer oder gleich“.

Ein Beispiel für eine Ungleichung ist $2x + 1 > 7$. Sie gilt für $x = 5$, denn $11 > 7$. Sie gilt nicht für $x = 1$,
denn $3 > 7$ ist falsch. Ein Nichtbeispiel ist $2x + 1 = 7$: Das ist eine Gleichung mit genau einer Lösung.

Ungleichungen begegnen dir überall, wo Grenzen eine Rolle spielen. Ab welcher Stückzahl macht eine Firma Gewinn? Bis zu
welcher Geschwindigkeit reicht der Anhalteweg? Die Lösungsmenge ist darum meist kein einzelner Wert, sondern ein ganzer
Bereich. Man schreibt sie als **Intervall** oder als Vereinigung von Intervallen.

Zur Erinnerung an die Schreibweise aus [Kapitel 1, Abschnitt 1.15 Betrag und Intervalle](/lernen/mathe3/zahlen/betrag-und-intervalle):

- $[a; b]$ heißt: alle $x$ mit $a \leq x \leq b$. Beide Ränder gehören dazu.
- $]a; b[$ heißt: alle $x$ mit $a < x < b$. Kein Rand gehört dazu.
- $]-\infty; b]$ heißt: alle $x$ mit $x \leq b$. Bei $\infty$ (unendlich) steht immer eine offene Klammer.
- Das Zeichen $\cup$ heißt „vereinigt mit“. $]-\infty; 1[ \cup ]4; \infty[$ sind alle Zahlen kleiner als $1$ oder größer als $4$.

### Welche Umformungen erlaubt sind

:::satz[Äquivalenzumformungen bei Ungleichungen]
1. Auf beiden Seiten dieselbe Zahl oder denselben Term addieren oder abziehen ändert die Lösungsmenge nicht.
2. Beide Seiten mit derselben **positiven** Zahl multiplizieren oder durch sie dividieren ändert die Lösungsmenge nicht.
3. Beide Seiten mit derselben **negativen** Zahl multiplizieren oder durch sie dividieren: Dann muss man das
   Ungleichheitszeichen **umdrehen**. Aus $<$ wird $>$, aus $\leq$ wird $\geq$ und umgekehrt.
:::

Warum dreht sich das Zeichen um? Nimm die wahre Aussage $2 < 5$. Multipliziere beide Seiten mit $-1$. Du erhältst $-2$ und
$-5$. Auf der Zahlengeraden liegt $-5$ links von $-2$, also gilt $-2 > -5$. Die Multiplikation mit $-1$ spiegelt die Zahlen
an der Null. Bei einer Spiegelung tauschen links und rechts die Plätze, und damit kehrt sich die Reihenfolge um.

```aufgabe
id: gl-ungl-check-umdrehen
titel: Was passiert beim Multiplizieren mit −2?
niveau: 1
art: check
lernziel: 7
angabe: |
  Es gilt $3 < 7$. Beide Seiten werden mit $-2$ multipliziert. Welche Aussage ist dann wahr?
teile:
  - typ: auswahl
    optionen:
      - '$-6 > -14$'
      - '$-6 < -14$'
      - '$6 < 14$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Auf der Zahlengeraden liegt $-14$ links von $-6$. Also ist $-14$ die kleinere Zahl, und das Zeichen hat sich umgedreht.
      - wert: 2
        meldung: 'Das Minuszeichen fehlt: $3\cdot(-2) = -6$ und $7\cdot(-2) = -14$.'
hinweise:
  - 'Rechne beide Seiten aus und stelle dir die Zahlen auf der Zahlengeraden vor.'
loesung: |
  $3\cdot(-2) = -6$ und $7\cdot(-2) = -14$. Auf der Zahlengeraden liegt $-14$ weiter links.
  ---
  Also gilt $-6 > -14$. Das Zeichen $<$ hat sich in $>$ umgedreht.
```

Daraus folgt eine wichtige Regel: **Mit einem Term, dessen Vorzeichen du nicht kennst, darfst du nicht einfach
multiplizieren.** Ein Beispiel ist $x - 2$: Für $x = 5$ ist er positiv, für $x = 0$ negativ. Wie man dann vorgeht,
zeigt [2.11 Bruch-, Betrags- und Wurzelungleichungen](/lernen/mathe3/gleichungen/bruch-betrags-und-wurzelungleichungen).

### Lineare Ungleichungen

Eine **lineare Ungleichung** enthält $x$ nur in der ersten Potenz. Du löst sie wie eine lineare Gleichung. Der einzige
Unterschied: Beim Dividieren durch eine negative Zahl drehst du das Zeichen um.

:::beispiel[Durch eine negative Zahl dividieren]
Löse $7 - 2x > 3x - 8$.

1. **Sortieren:** Wir ziehen $3x$ ab und ziehen $7$ ab. Das ergibt $-2x - 3x > -8 - 7$, also $-5x > -15$.
2. **Dividieren:** Wir dividieren durch $-5$. Weil $-5$ negativ ist, dreht sich das Zeichen um: $x < 3$.
3. **Lösungsmenge:** $L = \,]-\infty; 3[$.

**Probe mit zwei Testzahlen:** Für $x = 0$ steht da $7 > -8$, das stimmt. Für $x = 4$ steht da $-1 > 4$, das stimmt nicht.
Also liegt die Grenze richtig, und die Richtung passt auch.
:::

:::achtung[Das Zeichen nicht umgedreht]
Typische Fehlrechnung: „$-3x < 12$, also $x < -4$.“ Teste mit $x = -5$: Links steht $-3\cdot(-5) = 15$, und $15 < 12$ ist falsch.
Die Zahl $-5$ erfüllt die Ungleichung also nicht, obwohl sie $x < -4$ erfüllt. Richtig ist: Beim Dividieren durch $-3$ dreht sich
das Zeichen um, also $x > -4$.
:::

Eine **Doppelungleichung** wie $-1 < 2x + 3 \leq 9$ besteht aus zwei Ungleichungen auf einmal. Du formst dann alle drei Teile
gleichzeitig um.

:::beispiel[Wassertemperatur im Aquarium]
Für ein Aquarium soll die Temperatur zwischen $77\,°\text{F}$ und $82{,}4\,°\text{F}$ liegen. Grad Fahrenheit $F$ und Grad Celsius
$C$ hängen über $F = 1{,}8\,C + 32$ zusammen. Welcher Bereich in $°\text{C}$ ist das?

1. **Ansatz:** $77 \leq 1{,}8\,C + 32 \leq 82{,}4$.
2. **$32$ abziehen**, und zwar in allen drei Teilen: $45 \leq 1{,}8\,C \leq 50{,}4$.
3. **Durch $1{,}8$ dividieren.** Die Zahl ist positiv, also bleiben die Zeichen: $25 \leq C \leq 28$.

**Antwort:** Die Temperatur soll zwischen $25\,°\text{C}$ und $28\,°\text{C}$ liegen, also $C \in [25; 28]$.
**Kontrolle:** $1{,}8\cdot 25 + 32 = 77$ und $1{,}8\cdot 28 + 32 = 82{,}4$.
:::

### Quadratische Ungleichungen

Bei einer quadratischen Ungleichung wie $x^2 - 2x - 15 \leq 0$ kann man nicht einfach „nach $x$ umstellen“. Stattdessen
fragt man: Wo liegt die Parabel $y = x^2 - 2x - 15$ **unter** der $x$-Achse? Dazu brauchst du nur ihre Nullstellen und ihre
Öffnungsrichtung.

:::beispiel[Parabel unter der Achse]
Löse $x^2 - 2x - 15 \leq 0$.

1. **Nullstellen:** $x^2 - 2x - 15 = (x - 5)(x + 3)$. Die Nullstellen sind $-3$ und $5$. Probe mit Vieta: $-3 + 5 = 2$ und $(-3)\cdot 5 = -15$.
2. **Öffnung:** Der Koeffizient vor $x^2$ ist $1$, also positiv. Die Parabel ist nach oben offen.
3. **Ablesen:** Eine nach oben offene Parabel liegt **zwischen** ihren Nullstellen unter der Achse. Wegen $\leq$ gehören die Nullstellen dazu.

**Ergebnis:** $L = [-3; 5]$. **Probe:** Für $x = 0$ gilt $-15 \leq 0$, das stimmt. Für $x = 6$ ist der Term $36 - 12 - 15 = 9$, und $9 \leq 0$ stimmt nicht.
:::

```plot
x: [-5, 7]
y: [-17, 10]
achsen: { x: "x", y: "y" }
graphen:
  - { f: "x^2 - 2*x - 15", label: "y = x² − 2x − 15", farbe: 0 }
flaechen:
  - { f: "x^2 - 2*x - 15", g: "0", von: -3, bis: 5, farbe: 2 }
punkte:
  - { x: -3, y: 0, label: "−3", farbe: 2 }
  - { x: 5, y: 0, label: "5", farbe: 2 }
beschriftung: Die nach oben offene Parabel y = x² − 2x − 15 liegt zwischen ihren Nullstellen −3 und 5 unterhalb der x-Achse (farbig markiert). Dort gilt x² − 2x − 15 ≤ 0. Links von −3 und rechts von 5 liegt sie darüber.
```

Statt einer Skizze kannst du auch eine **Vorzeichentabelle** verwenden. Du schreibst den Term als Produkt $(x + 3)(x - 5)$ und
bestimmst das Vorzeichen jedes Faktors in jedem Bereich. Ein Produkt ist negativ, wenn genau ein Faktor negativ ist.

||$x < -3$|$-3 < x < 5$|$x > 5$|
|---|---|---|---|
|$x + 3$|$-$|$+$|$+$|
|$x - 5$|$-$|$-$|$+$|
|Produkt|$+$|$-$|$+$|

Die Tabelle bestätigt das Ergebnis: Nur im mittleren Bereich ist das Produkt negativ.

:::achtung[Wurzel ziehen bei einer Ungleichung]
Typische Fehlrechnung: „$x^2 > 9$, also $x > 3$.“ Teste mit $x = -4$: $(-4)^2 = 16 > 9$ stimmt, aber $-4 > 3$ stimmt nicht.
Die Lösung $x = -4$ ging verloren. Richtig ist: $x^2 - 9 > 0$ heißt $(x - 3)(x + 3) > 0$. Die Parabel ist außerhalb der
Nullstellen positiv. Also $x < -3$ oder $x > 3$, in Intervallschreibweise $L = \,]-\infty; -3[ \cup ]3; \infty[$.
:::

### Sonderfälle: negative Öffnung und keine Nullstellen

:::beispiel[Parabel nach unten offen]
Löse $-2x^2 + 4x + 6 \geq 0$.

1. **Normieren:** Wir dividieren durch $-2$. Weil $-2$ negativ ist, dreht sich das Zeichen um: $x^2 - 2x - 3 \leq 0$.
2. **Nullstellen:** $x^2 - 2x - 3 = (x - 3)(x + 1)$, also $-1$ und $3$.
3. **Ablesen:** $x^2 - 2x - 3$ ist nach oben offen und zwischen den Nullstellen höchstens null.

**Ergebnis:** $L = [-1; 3]$. **Probe:** $x = 0$ ergibt $6 \geq 0$, das stimmt.
:::

Hat die Parabel **keine** Nullstellen, liegt sie ganz über oder ganz unter der Achse. Ein Beispiel ist $x^2 + 2x + 5$. Die
Diskriminante aus [2.3 Quadratische Gleichungen](/lernen/mathe3/gleichungen/quadratische-gleichungen) ist
$\tfrac{p^2}{4} - q = 1 - 5 = -4$, also negativ. Die Parabel ist nach oben offen und schneidet die Achse nie. Damit gilt
$x^2 + 2x + 5 > 0$ für **alle** $x$, also $L = \R$. Die Ungleichung $x^2 + 2x + 5 < 0$ hat dagegen gar keine Lösung, $L = \emptyset$.

:::merke[Ungleichungen lösen]
1. **Linear:** wie eine Gleichung umformen. Beim Multiplizieren oder Dividieren mit einer negativen Zahl das Zeichen umdrehen.
2. **Quadratisch:** alles auf eine Seite bringen, sodass rechts $0$ steht.
3. Nullstellen der zugehörigen Gleichung bestimmen.
4. Öffnung der Parabel feststellen und skizzieren, oder eine Vorzeichentabelle anlegen.
5. Bereich ablesen. Die Ränder gehören nur bei $\leq$ und $\geq$ dazu.
6. **Probe** mit je einer Testzahl innerhalb und außerhalb der Lösungsmenge.
:::

```reflexion
frage: Warum darf man bei $x^2 > 4x$ nicht durch $x$ dividieren? Überlege, was für $x = -1$ passiert.
antwort: |
  Für $x = -1$ ist $x^2 = 1$ und $4x = -4$. Also gilt $1 > -4$, und $x = -1$ ist eine Lösung. Wer durch $x$ dividiert,
  erhält $x > 4$, und darin ist $-1$ nicht enthalten. Die Lösung ging verloren.

  Der Grund: Das Vorzeichen von $x$ ist unbekannt. Für negative $x$ müsste sich das Zeichen umdrehen, für $x = 0$ darf man
  gar nicht dividieren. Richtig ist: $x^2 - 4x > 0$, also $x(x - 4) > 0$. Das gilt für $x < 0$ oder $x > 4$.
```

```aufgabe
id: gl-ungl-linear
titel: Lineare Ungleichung mit Klammer
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Löse $3(x + 2) - 5 \geq 7x - 11$.
teile:
  - typ: auswahl
    optionen:
      - '$x \leq 3$'
      - '$x \geq 3$'
      - '$x \leq -3$'
      - '$x < 3$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Du hast beim Dividieren durch eine negative Zahl das Zeichen nicht umgedreht. Teste $x = 4$: links $13$, rechts $17$.
      - wert: 2
        meldung: |
          Prüfe das Vorzeichen: $-12 : (-4)$ ist positiv. Teste außerdem $x = 0$ in der Ausgangsungleichung.
      - wert: 3
        meldung: |
          In der Angabe steht $\geq$. Beim Umdrehen wird daraus $\leq$, nicht $<$. Der Rand $3$ gehört also dazu.
hinweise:
  - 'Klammer auflösen, $x$-Glieder nach links. Beim Dividieren durch eine negative Zahl das Zeichen umdrehen.'
loesung: |
  **Ansatz:** Wie eine lineare Gleichung umformen und auf das Vorzeichen beim Dividieren achten.
  Klammer auflösen: $3x + 6 - 5 \geq 7x - 11$, also $3x + 1 \geq 7x - 11$.
  ---
  $7x$ und $1$ abziehen: $-4x \geq -12$. Durch $-4$ dividieren, das Zeichen dreht sich um: $x \leq 3$.
  ---
  **Probe:** $x = 3$ ergibt links $3\cdot 5 - 5 = 10$, rechts $21 - 11 = 10$, und $10 \geq 10$ stimmt. $x = 4$ ergibt links $3\cdot 6 - 5 = 13$ und rechts $28 - 11 = 17$, und $13 \geq 17$ stimmt nicht.
```

```aufgabe
id: gl-ungl-doppel
titel: Doppelungleichung
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Löse $-1 < 2x + 3 \leq 9$.

  a) Gib den linken und den rechten Rand der Lösungsmenge an.

  b) Wähle die richtige Schreibweise.
teile:
  - typ: vektor
    label: 'a) Ränder'
    namen: ["links", "rechts"]
    loesung: ["-2", "3"]
    fehler:
      - wert: ["1", "6"]
        meldung: |
          Du hast $3$ addiert statt abgezogen. Um $+3$ zu beseitigen, ziehst du in allen drei Teilen $3$ ab.
      - wert: ["-4", "6"]
        meldung: |
          Das ist ein Zwischenschritt für $2x$. Dividiere noch alle drei Teile durch $2$.
  - typ: auswahl
    label: 'b)'
    optionen:
      - '$]-2; 3]$'
      - '$[-2; 3]$'
      - '$]-2; 3[$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Links steht ein echtes $<$. Der Rand $-2$ gehört also nicht dazu.'
      - wert: 2
        meldung: 'Rechts steht $\leq$. Der Rand $3$ gehört dazu.'
hinweise:
  - 'Forme alle drei Teile gleichzeitig um: zuerst $3$ abziehen, dann durch $2$ dividieren.'
loesung: |
  **Ansatz:** Eine Doppelungleichung formt man in allen drei Teilen gleichzeitig um.
  $3$ abziehen: $-4 < 2x \leq 6$.
  ---
  Durch $2$ dividieren. Die Zahl ist positiv, die Zeichen bleiben: $-2 < x \leq 3$. Also $L = \,]-2; 3]$.
  Probe: $x = 3$ ergibt $2\cdot 3 + 3 = 9 \leq 9$.
```

```aufgabe
id: gl-ungl-quadratisch
titel: Quadratische Ungleichung
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Löse $x^2 + x - 12 > 0$.

  a) Gib die Nullstellen von $x^2 + x - 12$ an, die kleinere zuerst.

  b) Wähle die Lösungsmenge.
teile:
  - typ: vektor
    label: 'a) Nullstellen'
    namen: ["x₁", "x₂"]
    loesung: ["-4", "3"]
    fehler:
      - wert: ["-3", "4"]
        meldung: |
          Prüfe mit Vieta: Die Summe der Nullstellen muss $-p = -1$ sein. Bei dir ist sie $+1$.
  - typ: auswahl
    label: 'b)'
    optionen:
      - '$]-4; 3[$'
      - '$]-\infty; -4[ \cup ]3; \infty[$'
      - '$]-\infty; -4] \cup [3; \infty[$'
      - '$]3; \infty[$'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Zwischen den Nullstellen liegt eine nach oben offene Parabel **unter** der Achse. Gesucht ist aber $> 0$.
      - wert: 2
        meldung: 'Bei $> 0$ gehören die Nullstellen nicht dazu, denn dort ist der Term genau $0$.'
      - wert: 3
        meldung: |
          Auch links von der kleineren Nullstelle liegt die Parabel über der Achse. Teste $x = -5$.
hinweise:
  - 'Zerlege $x^2 + x - 12$ in Linearfaktoren oder verwende die Lösungsformel.'
  - 'Die Parabel ist nach oben offen. Wo liegt sie über der $x$-Achse?'
loesung: |
  **Ansatz:** Nullstellen bestimmen, dann am Graphen der Parabel ablesen, wo der Term positiv ist.
  ---
  $x^2 + x - 12 = (x + 4)(x - 3)$, die Nullstellen sind $-4$ und $3$. Vieta: $-4 + 3 = -1 = -p$ und $(-4)\cdot 3 = -12 = q$.
  ---
  Die Parabel ist nach oben offen, also außerhalb der Nullstellen positiv. Wegen $>$ gehören die Ränder nicht dazu.
  ---
  $L = \,]-\infty; -4[ \cup ]3; \infty[$. **Probe:** $x = 0$ ergibt $-12 > 0$, falsch. $x = 4$ ergibt $8 > 0$, richtig.
```

```aufgabe
id: gl-ungl-quadr-negativ
titel: Parabel nach unten offen
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Löse $-x^2 + 6x - 5 \geq 0$ und wähle die Lösungsmenge.
teile:
  - typ: auswahl
    optionen:
      - '$[1; 5]$'
      - '$]-\infty; 1] \cup [5; \infty[$'
      - '$]1; 5[$'
      - '$[-5; -1]$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Du hast mit $-1$ multipliziert, aber das Zeichen nicht umgedreht. Teste $x = 3$: $-9 + 18 - 5 = 4 \geq 0$.
      - wert: 2
        meldung: 'Wegen $\geq$ gehören die Nullstellen dazu, denn dort ist der Term genau $0$.'
      - wert: 3
        meldung: |
          Prüfe die Vorzeichen der Nullstellen. Setze $x = 1$ in $-x^2 + 6x - 5$ ein.
hinweise:
  - 'Multipliziere mit $-1$, damit vor $x^2$ ein Plus steht. Achtung: Das Zeichen dreht sich um.'
  - 'Löse dann $x^2 - 6x + 5 \leq 0$ über die Nullstellen.'
loesung: |
  **Ansatz:** Mit $-1$ multiplizieren, damit die Parabel nach oben offen ist. Dabei dreht sich das Zeichen um:
  $x^2 - 6x + 5 \leq 0$.
  ---
  Nullstellen: $x^2 - 6x + 5 = (x - 1)(x - 5)$, also $1$ und $5$.
  ---
  Die Parabel $x^2 - 6x + 5$ ist zwischen den Nullstellen negativ und an ihnen null. Also $L = [1; 5]$.
  **Probe:** $x = 3$ ergibt im Original $-9 + 18 - 5 = 4 \geq 0$.
```

```aufgabe
id: gl-ungl-keine-nullstelle
titel: Immer positiv?
niveau: 2
lernziel: 7
kompetenz: verstehen
angabe: |
  Welche der folgenden Ungleichungen hat als Lösungsmenge **alle** reellen Zahlen, also $L = \R$?
teile:
  - typ: auswahl
    optionen:
      - '$x^2 - 4x + 5 > 0$'
      - '$x^2 - 4x + 4 > 0$'
      - '$x^2 - 4x + 3 > 0$'
      - '$x^2 + 4x + 5 < 0$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          $x^2 - 4x + 4 = (x - 2)^2$. Für $x = 2$ ist der Term genau $0$, und $0 > 0$ ist falsch. Eine Zahl fehlt also.
      - wert: 2
        meldung: |
          Diese Parabel hat zwei Nullstellen und liegt dazwischen unter der Achse. Teste $x = 2$.
      - wert: 3
        meldung: |
          Diese Parabel ist nach oben offen und hat keine Nullstelle. Sie liegt also ganz **über** der Achse. Der Term ist nie negativ.
hinweise:
  - 'Berechne für jede Parabel die Diskriminante $\tfrac{p^2}{4} - q$.'
  - 'Eine nach oben offene Parabel ohne Nullstelle liegt ganz über der Achse.'
loesung: |
  **Ansatz:** Alle vier Parabeln sind nach oben offen. Entscheidend ist, ob sie Nullstellen haben. Das sagt die Diskriminante.
  ---
  $x^2 - 4x + 5$: $4 - 5 = -1 < 0$, keine Nullstelle. Der Term ist überall positiv, also $L = \R$.
  ---
  $x^2 - 4x + 4$: Diskriminante $0$, Nullstelle $2$, also $L = \R\setminus\{2\}$. $x^2 - 4x + 3$: Nullstellen $1$ und $3$.
  $x^2 + 4x + 5$: keine Nullstelle, immer positiv, also ist $< 0$ nie erfüllt.
  ---
  **Ergebnis:** Nur $x^2 - 4x + 5 > 0$ gilt für alle $x$.
```

```aufgabe
id: gl-ungl-fehler-dividieren
titel: Fehler finden beim Dividieren durch x
niveau: 2
lernziel: 7
kompetenz: begruenden
angabe: |
  Jemand löst $x^2 \geq 4x$ so: „Ich dividiere durch $x$ und erhalte $x \geq 4$.“

  a) Erkläre den Fehler.

  b) Wähle die richtige Lösungsmenge.
teile:
  - typ: text
    label: 'a)'
    muster: |
      Das Vorzeichen von $x$ ist unbekannt. Für negative $x$ müsste sich beim Dividieren das Zeichen umdrehen, und für
      $x = 0$ darf man gar nicht dividieren. Dadurch gehen Lösungen verloren, zum Beispiel $x = 0$ ($0 \geq 0$) und
      $x = -1$ ($1 \geq -4$).
  - typ: auswahl
    label: 'b)'
    optionen:
      - '$[4; \infty[$'
      - '$]-\infty; 0] \cup [4; \infty[$'
      - '$[0; 4]$'
      - '$]-\infty; 0[ \cup ]4; \infty[$'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Das ist das Ergebnis mit dem Fehler. Teste $x = -1$: $1 \geq -4$ stimmt.'
      - wert: 2
        meldung: 'Zwischen $0$ und $4$ liegt $x^2 - 4x$ unter der Achse. Teste $x = 2$: $4 \geq 8$ ist falsch.'
      - wert: 3
        meldung: 'Wegen $\geq$ gehören die Nullstellen $0$ und $4$ dazu.'
hinweise:
  - 'Bring alles auf eine Seite: $x^2 - 4x \geq 0$.'
  - 'Hebe $x$ heraus: $x(x - 4) \geq 0$. Lies an der Parabel ab, wo sie über der Achse liegt.'
loesung: |
  **a)** Dividieren durch $x$ ist nur erlaubt, wenn man das Vorzeichen von $x$ kennt. Hier ist es unbekannt.
  ---
  **b)** Alles auf eine Seite: $x^2 - 4x \geq 0$. Herausheben: $x(x - 4) \geq 0$. Die Nullstellen sind $0$ und $4$.
  ---
  Die Parabel ist nach oben offen, also außerhalb der Nullstellen positiv. Wegen $\geq$ gehören $0$ und $4$ dazu:
  $L = \,]-\infty; 0] \cup [4; \infty[$. **Probe:** $x = -1$ ergibt $1 \geq -4$, richtig.
```

```aufgabe
id: gl-ungl-anhalteweg
titel: Anhalteweg begrenzen
niveau: 2
lernziel: 7
kompetenz: modellieren
angabe: |
  In der Fahrschule lernt man die Faustformel für den Anhalteweg $s$ in Metern bei der Geschwindigkeit $v$ in km/h:
  $$s = 3\cdot\frac{v}{10} + \left(\frac{v}{10}\right)^2.$$
  Bis zu welcher Geschwindigkeit ist der Anhalteweg höchstens $40$ m?
teile:
  - typ: zahl
    label: 'höchstens'
    einheit: km/h
    loesung: "50"
    fehler:
      - wert: "40"
        meldung: |
          Bei $40$ km/h ist der Anhalteweg $12 + 16 = 28$ m, also deutlich kleiner als $40$ m. Löse die Ungleichung $s \leq 40$.
      - wert: "-80"
        meldung: |
          Diese Zahl löst zwar die quadratische Gleichung, aber eine Geschwindigkeit ist nicht negativ.
hinweise:
  - 'Setze $u = \tfrac{v}{10}$. Dann lautet die Bedingung $u^2 + 3u \leq 40$.'
  - 'Löse $u^2 + 3u - 40 \leq 0$ über die Nullstellen und rechne zurück auf $v$.'
loesung: |
  **Ansatz:** Gesucht sind alle $v \geq 0$ mit $s \leq 40$. Zur Vereinfachung setzen wir $u = \tfrac{v}{10}$. Dann gilt $u^2 + 3u \leq 40$.
  ---
  Alles auf eine Seite: $u^2 + 3u - 40 \leq 0$. Zerlegen: $(u + 8)(u - 5) \leq 0$. Die Parabel ist zwischen $-8$ und $5$ höchstens null.
  ---
  Wegen $v \geq 0$ ist auch $u \geq 0$. Also $0 \leq u \leq 5$ und damit $0 \leq v \leq 50$.
  ---
  **Antwort:** Bis $50$ km/h ist der Anhalteweg höchstens $40$ m. **Probe:** $3\cdot 5 + 5^2 = 15 + 25 = 40$.
```

```aufgabe
id: gl-ungl-gewinn
titel: Gewinnzone einer Firma
niveau: 3
lernziel: 7
kompetenz: modellieren
angabe: |
  Eine kleine Firma stellt Lampen her. Bei $x$ verkauften Lampen pro Woche beträgt der Gewinn in Euro
  $$G(x) = -0{,}5x^2 + 40x - 600.$$

  a) Für welche Stückzahlen macht die Firma keinen Verlust, also $G(x) \geq 0$? Gib die Grenzen an.

  b) Für welche Stückzahlen beträgt der Gewinn mindestens $150$ Euro? Gib die Grenzen an.
teile:
  - typ: vektor
    label: 'a) von … bis …'
    namen: ["von", "bis"]
    loesung: ["20", "60"]
    fehler:
      - wert: ["-20", "-60"]
        meldung: 'Prüfe die Vorzeichen in der Zerlegung. Setze $x = 20$ in $G(x)$ ein.'
  - typ: vektor
    label: 'b) von … bis …'
    namen: ["von", "bis"]
    loesung: ["30", "50"]
    fehler:
      - wert: ["20", "60"]
        meldung: 'Das ist die Gewinnzone aus a). Jetzt soll $G(x) \geq 150$ gelten. Bring die $150$ zuerst auf die linke Seite.'
hinweise:
  - 'Multipliziere $G(x) \geq 0$ mit $-2$. Das Zeichen dreht sich um.'
  - 'a) $x^2 - 80x + 1200 \leq 0$. b) $-0{,}5x^2 + 40x - 750 \geq 0$, also $x^2 - 80x + 1500 \leq 0$.'
loesung: |
  **Ansatz:** Beide Fragen sind quadratische Ungleichungen. Wir multiplizieren mit $-2$, damit vor $x^2$ eine $1$ steht.
  Dabei dreht sich das Zeichen um.
  ---
  **a)** $-0{,}5x^2 + 40x - 600 \geq 0$ wird zu $x^2 - 80x + 1200 \leq 0$. Lösungsformel: $x = 40 \pm\sqrt{1600 - 1200} = 40 \pm 20$.
  Die Nullstellen sind $20$ und $60$. Dazwischen ist die nach oben offene Parabel höchstens null.
  ---
  **b)** $G(x) \geq 150$ heißt $-0{,}5x^2 + 40x - 750 \geq 0$, also $x^2 - 80x + 1500 \leq 0$. $x = 40 \pm\sqrt{1600 - 1500} = 40 \pm 10$.
  ---
  **Antwort:** Ohne Verlust arbeitet die Firma bei $20$ bis $60$ Lampen pro Woche. Mindestens $150$ Euro Gewinn gibt es bei $30$ bis $50$ Lampen.
  **Probe:** $G(30) = -450 + 1200 - 600 = 150$.
gefuehrt:
  - text: Multipliziere $-0{,}5x^2 + 40x - 600 \geq 0$ mit $-2$. Welches Zeichen steht danach?
    teil:
      typ: auswahl
      optionen: ['$\geq$', '$\leq$']
      richtig: [1]
      fehler:
        - wert: 0
          meldung: 'Beim Multiplizieren mit einer negativen Zahl dreht sich das Zeichen um.'
    erklaerung: 'Es entsteht $x^2 - 80x + 1200 \leq 0$.'
  - text: Bestimme die Nullstellen von $x^2 - 80x + 1200$.
    teil:
      typ: menge
      loesung: ["20", "60"]
      fehler:
        - wert: ["-20", "-60"]
          meldung: 'Mit $p = -80$ ist $-\tfrac p2 = +40$.'
    erklaerung: '$x = 40 \pm \sqrt{1600 - 1200} = 40 \pm 20$.'
  - text: Wo ist $x^2 - 80x + 1200$ höchstens null?
    erklaerung: 'Die Parabel ist nach oben offen, also zwischen den Nullstellen: von $20$ bis $60$ Stück.'
  - text: Für b) bringst du die $150$ nach links und gehst genauso vor. Wo liegt die obere Grenze?
    teil:
      typ: zahl
      loesung: "50"
    erklaerung: '$x^2 - 80x + 1500 \leq 0$ hat die Nullstellen $40 \pm 10$, also $30$ und $50$.'
```

```aufgabe
id: gl-ungl-parameter
titel: Für welche k immer positiv?
niveau: 3
lernziel: 7
kompetenz: begruenden
angabe: |
  Für welche reellen Zahlen $k$ gilt $2x^2 + kx + 8 > 0$ für **alle** $x$?

  a) Gib die Grenzen des Bereichs für $k$ an.

  b) Begründe dein Vorgehen in zwei Sätzen.
teile:
  - typ: vektor
    label: 'a) $k$ liegt echt zwischen'
    namen: ["links", "rechts"]
    loesung: ["-8", "8"]
    fehler:
      - wert: ["-4", "4"]
        meldung: 'Die Diskriminante ist $k^2 - 4\cdot 2\cdot 8$. Prüfe den Faktor $4ac = 64$.'
  - typ: text
    label: 'b)'
    muster: |
      Die Parabel $y = 2x^2 + kx + 8$ ist nach oben offen. Sie liegt genau dann ganz über der Achse, wenn sie keine
      Nullstelle hat, also wenn die Diskriminante $k^2 - 64$ negativ ist. Das gilt für $-8 < k < 8$.
hinweise:
  - 'Wann liegt eine nach oben offene Parabel ganz über der $x$-Achse?'
  - 'Verlange, dass die Diskriminante $b^2 - 4ac = k^2 - 64$ kleiner als $0$ ist, und löse diese Ungleichung in $k$.'
loesung: |
  **Ansatz:** Der Koeffizient vor $x^2$ ist $2 > 0$, die Parabel ist nach oben offen. Sie ist überall positiv, wenn sie keine
  Nullstelle hat. Das ist genau dann so, wenn die Diskriminante negativ ist.
  ---
  Diskriminante der großen Lösungsformel: $b^2 - 4ac = k^2 - 4\cdot 2\cdot 8 = k^2 - 64$.
  ---
  $k^2 - 64 < 0$ heißt $(k - 8)(k + 8) < 0$. Das gilt zwischen den Nullstellen: $-8 < k < 8$.
  ---
  **Kontrolle:** Für $k = 8$ ist $2x^2 + 8x + 8 = 2(x + 2)^2$. Bei $x = -2$ wird das $0$, also nicht $> 0$. Der Rand gehört nicht dazu.
```
## Bruch-, Betrags- und Wurzelungleichungen

```aufgabe
id: gl-ungl-check-abstand
titel: Betrag als Abstand
niveau: 1
art: check
lernziel: 7
angabe: |
  Löse $|x - 4| = 1$. Gib die Lösungsmenge an, mehrere Zahlen durch Strichpunkt getrennt.
  Herkunft: [2.8 Betragsgleichungen](/lernen/mathe3/gleichungen/betragsgleichungen).
teile:
  - typ: menge
    loesung: ["3", "5"]
    fehler:
      - wert: ["5"]
        meldung: |
          Das ist nur die Zahl rechts von $4$. Auch links von $4$ liegt eine Zahl mit Abstand $1$.
      - wert: ["-3", "-5"]
        meldung: |
          $|x - 4|$ ist der Abstand von $x$ zur Zahl $+4$, nicht zu $-4$.
hinweise:
  - '$|x - 4|$ ist der Abstand von $x$ zur Zahl $4$ auf der Zahlengeraden.'
loesung: |
  $|x - 4| = 1$ heißt: Der Abstand von $x$ zu $4$ ist $1$.
  ---
  Das gilt für $4 + 1 = 5$ und $4 - 1 = 3$. Also $L = \{3; 5\}$.
```

In [2.10 Ungleichungen](/lernen/mathe3/gleichungen/ungleichungen) haben wir lineare und quadratische Ungleichungen gelöst. Dort
gab es eine Warnung: Mit einem Term, dessen Vorzeichen man nicht kennt, darf man nicht einfach multiplizieren. Genau dieses
Problem tritt jetzt auf. Bei einem Bruch steht $x$ im Nenner. Bei einem Betrag hängt das Vorzeichen innen von $x$ ab. Bei einer
Wurzel will man quadrieren, und das ist nur für nicht negative Seiten erlaubt.

Für alle drei Typen gibt es ein sicheres Werkzeug. Bei Brüchen ist es die **Vorzeichentabelle**. Bei Beträgen ist es die
**Abstandsdeutung** oder eine **Fallunterscheidung**. Bei Wurzeln ist es die **Definitionsmenge** zusammen mit einer
Fallunterscheidung nach dem Vorzeichen der anderen Seite.

### Bruchungleichungen

Eine **Bruchungleichung** enthält die Unbekannte im Nenner. Ein Beispiel ist $\tfrac{x + 4}{x - 1} \leq 3$. Ein Nichtbeispiel
ist $\tfrac{x + 4}{2} \leq 3$: Der Nenner ist die feste Zahl $2$, du darfst ohne Bedenken mit $2$ multiplizieren.

Die sichere Methode hat drei Schritte. Zuerst bringst du alles auf eine Seite, sodass rechts $0$ steht. Dann fasst du zu einem
einzigen Bruch zusammen. Am Ende liest du das Vorzeichen des Bruchs aus einer Tabelle ab. Ein Bruch ist positiv, wenn Zähler
und Nenner dasselbe Vorzeichen haben. Er ist negativ, wenn sie verschiedene Vorzeichen haben.

:::beispiel[Vorzeichentabelle statt Multiplizieren]
Löse $\dfrac{x + 4}{x - 1} \leq 3$.

1. **Definitionsmenge:** Der Nenner darf nicht null sein, also $D = \R\setminus\{1\}$.
2. **Alles auf eine Seite:** $\dfrac{x + 4}{x - 1} - 3 \leq 0$.
3. **Ein Bruch:** Wir schreiben $3 = \tfrac{3(x - 1)}{x - 1}$. Dann ist $\dfrac{x + 4 - 3x + 3}{x - 1} = \dfrac{7 - 2x}{x - 1} \leq 0$.
4. **Kritische Stellen:** Der Zähler ist null bei $x = 3{,}5$. Der Nenner ist null bei $x = 1$.
5. **Tabelle:** Wir prüfen die Vorzeichen in den drei Bereichen.

||$x < 1$|$1 < x < 3{,}5$|$x > 3{,}5$|
|---|---|---|---|
|$7 - 2x$|$+$|$+$|$-$|
|$x - 1$|$-$|$+$|$+$|
|Bruch|$-$|$+$|$-$|

Der Bruch ist kleiner oder gleich null für $x < 1$ und für $x \geq 3{,}5$. Die Stelle $3{,}5$ gehört dazu, weil dort der Bruch
$0$ ist. Die Stelle $1$ gehört nicht dazu, weil dort der Nenner null ist.

**Ergebnis:** $L = \,]-\infty; 1[ \cup [3{,}5; \infty[$. **Probe:** $x = 0$ ergibt $\tfrac{4}{-1} = -4 \leq 3$, richtig.
$x = 2$ ergibt $\tfrac61 = 6 \leq 3$, falsch. $x = 5$ ergibt $\tfrac94 \leq 3$, richtig.
:::

:::achtung[Mit dem Nenner multipliziert, ohne an das Vorzeichen zu denken]
Typische Fehlrechnung zum Beispiel: „Mal $(x - 1)$: $x + 4 \leq 3x - 3$, also $x \geq 3{,}5$.“ Dabei geht ein ganzer Bereich
verloren. Teste $x = 0$: $\tfrac{4}{-1} = -4 \leq 3$ stimmt, aber $0 \geq 3{,}5$ stimmt nicht. Für $x < 1$ ist $x - 1$
negativ, und das Zeichen hätte sich umdrehen müssen. Richtig ist die Vorzeichentabelle oder eine Fallunterscheidung
„$x > 1$“ und „$x < 1$“.
:::

### Betragsungleichungen

Der Betrag $|x - a|$ ist der **Abstand** von $x$ zur Zahl $a$ auf der Zahlengeraden. Damit lassen sich einfache
Betragsungleichungen ohne Rechnung lesen. Für eine Zahl $r > 0$ gilt:
$$|x - a| < r \text{ gilt genau dann, wenn } a - r < x < a + r.$$
$$|x - a| > r \text{ gilt genau dann, wenn } x < a - r \text{ oder } x > a + r.$$
In Worten: Abstand kleiner als $r$ heißt „innerhalb“ eines Bereichs um $a$. Abstand größer als $r$ heißt „außerhalb“.

:::beispiel[Toleranz einer Schraube]
Eine Schraube soll $40$ mm lang sein. Erlaubt ist eine Abweichung von höchstens $0{,}2$ mm. Für die Länge $\ell$ in mm heißt das
$|\ell - 40| \leq 0{,}2$.

1. **Deutung:** Der Abstand von $\ell$ zu $40$ ist höchstens $0{,}2$.
2. **Grenzen:** $40 - 0{,}2 = 39{,}8$ und $40 + 0{,}2 = 40{,}2$.
3. **Ergebnis:** $39{,}8 \leq \ell \leq 40{,}2$, also $\ell \in [39{,}8; 40{,}2]$ in mm.

Ein zweites Beispiel ohne Sachbezug: $|3x + 1| \geq 8$ bedeutet $3x + 1 \leq -8$ oder $3x + 1 \geq 8$.
Das ergibt $x \leq -3$ oder $x \geq \tfrac73$, also $L = \,]-\infty; -3] \cup [\tfrac73; \infty[$.
:::

:::achtung[Nur eine Seite des Betrags betrachtet]
Typische Fehlrechnung: „$|x - 2| < 5$, also $x - 2 < 5$ und damit $x < 7$.“ Teste $x = -10$: $|-12| = 12 < 5$ ist falsch,
obwohl $-10 < 7$ gilt. Die untere Grenze fehlt. Richtig ist $-5 < x - 2 < 5$, also $-3 < x < 7$ und $L = \,]-3; 7[$.
:::

Kommen **zwei Beträge** vor, reicht die Abstandsdeutung allein meist nicht. Dann hilft eine Fallunterscheidung wie bei den
Betragsgleichungen. Die Stellen, an denen ein Betrag innen null wird, teilen die Zahlengerade in Bereiche. In jedem Bereich
ersetzt du jeden Betrag durch den Term selbst oder durch sein Negatives.

:::beispiel[Zwei Beträge]
Löse $|x - 1| + |x + 3| \leq 6$.

1. **Knickstellen:** $x - 1 = 0$ bei $x = 1$, und $x + 3 = 0$ bei $x = -3$. Es gibt drei Bereiche.
2. **Bereich $x \geq 1$:** Beide Terme sind nicht negativ. $(x - 1) + (x + 3) \leq 6$ ergibt $2x + 2 \leq 6$, also $x \leq 2$. Im Bereich bleibt $1 \leq x \leq 2$.
3. **Bereich $-3 \leq x < 1$:** Jetzt ist $x - 1$ negativ, also $|x - 1| = 1 - x$. $(1 - x) + (x + 3) = 4 \leq 6$ ist immer wahr. Der ganze Bereich gehört dazu.
4. **Bereich $x < -3$:** Beide Terme sind negativ. $(1 - x) + (-x - 3) \leq 6$ ergibt $-2x - 2 \leq 6$. Wir dividieren durch $-2$ und drehen das Zeichen um: $x \geq -4$. Im Bereich bleibt $-4 \leq x < -3$.

**Ergebnis:** Alle drei Teile zusammen ergeben $L = [-4; 2]$. **Deutung:** Gesucht sind die Punkte, deren Abstände zu $1$ und zu $-3$
zusammen höchstens $6$ sind. Zwischen $-3$ und $1$ ist die Summe immer $4$.
:::

```plot
x: [-6, 4]
y: [0, 12]
achsen: { x: "x", y: "y" }
graphen:
  - { f: "abs(x - 1) + abs(x + 3)", label: "y = |x − 1| + |x + 3|", farbe: 0 }
  - { f: "6", label: "y = 6", farbe: 1, gestrichelt: true }
punkte:
  - { x: -4, y: 6, label: "−4", farbe: 2 }
  - { x: 2, y: 6, label: "2", farbe: 2 }
strecken:
  - { von: [-4, 0], nach: [2, 0], farbe: 2 }
beschriftung: Der Graph von y = |x − 1| + |x + 3| ist zwischen −3 und 1 waagrecht auf Höhe 4 und steigt nach außen an. Er liegt von x = −4 bis x = 2 nicht über der Linie y = 6. Dieser Bereich ist auf der x-Achse grün markiert.
```

### Wurzelungleichungen

Eine **Wurzelungleichung** enthält $x$ unter einer Wurzel, zum Beispiel $\sqrt{x + 2} < x$. Zwei Dinge musst du beachten.

- **Definitionsmenge:** Unter der Wurzel darf nichts Negatives stehen.
- **Quadrieren:** Für zwei nicht negative Zahlen $u$ und $v$ gilt $u < v$ genau dann, wenn $u^2 < v^2$ gilt. Ist eine Seite negativ, stimmt das nicht mehr. Ein Beispiel: $-3 < 2$, aber $9 < 4$ ist falsch.

Darum unterscheidest du Fälle nach dem Vorzeichen der Seite ohne Wurzel. Die Wurzel selbst ist nie negativ.

:::beispiel[Wurzel kleiner als x]
Löse $\sqrt{x + 2} < x$.

1. **Definitionsmenge:** $x + 2 \geq 0$, also $x \geq -2$.
2. **Fall $x \leq 0$:** Die Wurzel ist mindestens $0$, also nicht kleiner als eine Zahl, die höchstens $0$ ist. Hier gibt es keine Lösung.
3. **Fall $x > 0$:** Beide Seiten sind nicht negativ, Quadrieren ist erlaubt: $x + 2 < x^2$, also $x^2 - x - 2 > 0$.
4. **Quadratisch lösen:** $(x - 2)(x + 1) > 0$ gilt für $x < -1$ oder $x > 2$. Zusammen mit $x > 0$ bleibt $x > 2$.

**Ergebnis:** $L = \,]2; \infty[$. **Probe:** $x = 3$ ergibt $\sqrt5 \approx 2{,}24 < 3$, richtig. $x = 1$ ergibt $\sqrt3 \approx 1{,}73 < 1$, falsch.
:::

:::beispiel[Wurzel größer als x]
Löse $\sqrt{x + 6} > x$.

1. **Definitionsmenge:** $x \geq -6$.
2. **Fall $x < 0$:** Die rechte Seite ist negativ, die Wurzel ist mindestens $0$. Die Ungleichung gilt also **immer**. Alle $x$ mit $-6 \leq x < 0$ sind Lösungen.
3. **Fall $x \geq 0$:** Beide Seiten sind nicht negativ. Quadrieren: $x + 6 > x^2$, also $x^2 - x - 6 < 0$ und $(x - 3)(x + 2) < 0$. Das gilt für $-2 < x < 3$. Mit $x \geq 0$ bleibt $0 \leq x < 3$.

**Ergebnis:** Beide Fälle zusammen ergeben $L = [-6; 3[$. **Probe:** $x = -4$ ergibt $\sqrt2 > -4$, richtig. $x = 4$ ergibt $\sqrt{10} \approx 3{,}16 > 4$, falsch.
:::

```plot
x: [-7, 6]
y: [-7, 5]
achsen: { x: "x", y: "y" }
graphen:
  - { f: "sqrt(x + 6)", label: "y = √(x + 6)", farbe: 0, von: -6, bis: 6 }
  - { f: "x", label: "y = x", farbe: 1 }
punkte:
  - { x: 3, y: 3, label: "Schnittpunkt bei x = 3", farbe: 1, offen: true }
strecken:
  - { von: [-6, 0], nach: [3, 0], farbe: 2 }
beschriftung: Die Wurzelkurve y = √(x + 6) liegt von x = −6 bis knapp vor x = 3 über der Geraden y = x. Links von 0 ist die Gerade negativ, dort liegt die Wurzel sicher darüber. Die Lösungsmenge [−6; 3[ ist grün markiert.
```

:::achtung[Ohne Fallunterscheidung quadriert]
Typische Fehlrechnung zu $\sqrt{x + 6} > x$: „Quadrieren: $x^2 - x - 6 < 0$, also $L = \,]-2; 3[$.“ Teste $x = -4$:
$\sqrt{2} \approx 1{,}41 > -4$ ist wahr. Trotzdem fehlt $-4$ in dieser Lösungsmenge. Beim Quadrieren einer negativen Seite
ändert sich die Größenbeziehung, darum gehen Lösungen verloren. Richtig ist die Fallunterscheidung nach dem Vorzeichen
von $x$. Das Ergebnis ist $L = [-6; 3[$.
:::

:::merke[Bruch-, Betrags- und Wurzelungleichungen]
1. **Definitionsmenge** bestimmen: Nenner ungleich null, unter der Wurzel nicht negativ.
2. **Bruch:** alles auf eine Seite, zu einem Bruch zusammenfassen, Vorzeichentabelle für Zähler und Nenner. Nullstellen des Nenners gehören nie dazu.
3. **Ein Betrag:** über den Abstand lesen. „Kleiner“ heißt innerhalb, „größer“ heißt außerhalb, beide Seiten beachten.
4. **Zwei Beträge:** Knickstellen bestimmen, in jedem Bereich ohne Betrag rechnen, nur Lösungen im Bereich behalten.
5. **Wurzel:** nach dem Vorzeichen der anderen Seite unterscheiden. Nur wenn beide Seiten nicht negativ sind, darf man quadrieren.
6. **Probe** mit Testzahlen aus jedem Bereich.
:::

```reflexion
frage: Bei Wurzelgleichungen hilft eine Probe am Ende, um Scheinlösungen zu entfernen. Warum reicht eine Probe bei Wurzelungleichungen nicht aus?
antwort: |
  Bei einer Gleichung kommen beim Quadrieren höchstens einzelne falsche Zahlen dazu. Diese findet man, indem man jeden
  Kandidaten einsetzt. Bei einer Ungleichung besteht die Lösungsmenge aus ganzen Bereichen mit unendlich vielen Zahlen.
  Man kann nicht jede Zahl einsetzen.

  Außerdem können beim Quadrieren ganze Bereiche **verloren** gehen, etwa die negativen $x$ bei $\sqrt{x + 6} > x$.
  Was fehlt, findet keine Probe. Darum muss man vorher sauber nach dem Vorzeichen der anderen Seite unterscheiden.
  Testzahlen sind trotzdem nützlich, um das Ergebnis zu kontrollieren.
```

```aufgabe
id: gl-ungl-betrag
titel: Betragsungleichung innerhalb
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Löse $|2x - 3| \leq 7$.

  a) Gib den linken und den rechten Rand der Lösungsmenge an.

  b) Wähle die richtige Schreibweise.
teile:
  - typ: vektor
    label: 'a) Ränder'
    namen: ["links", "rechts"]
    loesung: ["-2", "5"]
    fehler:
      - wert: ["-5", "2"]
        meldung: |
          Du hast $3$ abgezogen statt addiert. Um $-3$ zu beseitigen, addierst du in allen drei Teilen $3$.
      - wert: ["-4", "10"]
        meldung: |
          Das ist ein Zwischenschritt für $2x$. Dividiere noch alle drei Teile durch $2$.
  - typ: auswahl
    label: 'b)'
    optionen:
      - '$[-2; 5]$'
      - '$]-2; 5[$'
      - '$]-\infty; -2] \cup [5; \infty[$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Wegen $\leq$ ist auch der Abstand genau $7$ erlaubt. Die Ränder gehören dazu.'
      - wert: 2
        meldung: '„Kleiner oder gleich“ beim Betrag heißt innerhalb eines Bereichs, nicht außerhalb.'
hinweise:
  - '$|T| \leq 7$ heißt $-7 \leq T \leq 7$.'
loesung: |
  **Ansatz:** Ein Betrag ist höchstens $7$, wenn der Term innen zwischen $-7$ und $7$ liegt: $-7 \leq 2x - 3 \leq 7$.
  ---
  $3$ addieren: $-4 \leq 2x \leq 10$. Durch $2$ dividieren: $-2 \leq x \leq 5$. Also $L = [-2; 5]$.
  Probe: $x = 5$ ergibt $|7| = 7 \leq 7$.
```

```aufgabe
id: gl-ungl-betrag-aussen
titel: Betragsungleichung außerhalb
niveau: 1
lernziel: 7
kompetenz: verstehen
angabe: |
  Welche Lösungsmenge hat $|x + 4| > 3$?
teile:
  - typ: auswahl
    optionen:
      - '$]-7; -1[$'
      - '$]-\infty; -7[ \cup ]-1; \infty[$'
      - '$]-\infty; 1[ \cup ]7; \infty[$'
      - '$]-1; \infty[$'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Das sind die Zahlen mit Abstand **kleiner** als $3$. Gesucht ist ein Abstand größer als $3$, also außerhalb.
      - wert: 2
        meldung: |
          $|x + 4| = |x - (-4)|$ ist der Abstand zu $-4$, nicht zu $+4$.
      - wert: 3
        meldung: |
          Auch links gibt es Zahlen mit großem Abstand zu $-4$. Teste $x = -10$.
hinweise:
  - '$|x + 4|$ ist der Abstand von $x$ zur Zahl $-4$.'
loesung: |
  **Ansatz:** $|x + 4| = |x - (-4)|$ ist der Abstand von $x$ zu $-4$. Gesucht sind alle $x$, deren Abstand größer als $3$ ist.
  ---
  Die Grenzen liegen bei $-4 - 3 = -7$ und $-4 + 3 = -1$. Außerhalb davon und ohne Ränder: $L = \,]-\infty; -7[ \cup ]-1; \infty[$.
  Probe: $x = 0$ ergibt $4 > 3$, richtig.
```

```aufgabe
id: gl-ungl-bruch-einfach
titel: Wann ist ein Bruch positiv?
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Löse $\dfrac{x - 2}{x + 1} > 0$.
teile:
  - typ: auswahl
    optionen:
      - '$]-\infty; -1[ \cup ]2; \infty[$'
      - '$]-1; 2[$'
      - '$]2; \infty[$'
      - '$]-\infty; -1] \cup ]2; \infty[$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Zwischen $-1$ und $2$ ist der Zähler negativ und der Nenner positiv. Der Bruch ist dort negativ.
      - wert: 2
        meldung: |
          Du hast mit $x + 1$ multipliziert, ohne an negative Werte zu denken. Teste $x = -3$: $\tfrac{-5}{-2} = 2{,}5 > 0$.
      - wert: 3
        meldung: 'Bei $x = -1$ ist der Nenner null. Diese Stelle gehört nie zur Lösungsmenge.'
hinweise:
  - 'Ein Bruch ist positiv, wenn Zähler und Nenner dasselbe Vorzeichen haben. Lege eine Vorzeichentabelle mit den Stellen $-1$ und $2$ an.'
loesung: |
  **Ansatz:** Rechts steht schon $0$. Die kritischen Stellen sind $x = 2$ (Zähler null) und $x = -1$ (Nenner null).
  ---
  Für $x < -1$ sind Zähler und Nenner negativ, der Bruch ist positiv. Zwischen $-1$ und $2$ ist er negativ. Für $x > 2$ ist er positiv.
  Also $L = \,]-\infty; -1[ \cup ]2; \infty[$. Probe: $x = 3$ ergibt $\tfrac14 > 0$.
```

```aufgabe
id: gl-ungl-bruch
titel: Bruchungleichung mit Vorzeichentabelle
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Löse $\dfrac{x - 5}{x + 2} \geq 2$.

  a) Gib die beiden Randpunkte der Lösungsmenge an, den kleineren zuerst.

  b) Wähle die Lösungsmenge.
teile:
  - typ: vektor
    label: 'a) Randpunkte'
    namen: ["links", "rechts"]
    loesung: ["-9", "-2"]
    fehler:
      - wert: ["-2", "9"]
        meldung: 'Prüfe den Zähler nach dem Zusammenfassen: $x - 5 - 2(x + 2) = -x - 9$. Er wird bei $x = -9$ null.'
  - typ: auswahl
    label: 'b)'
    optionen:
      - '$[-9; -2[$'
      - '$[-9; -2]$'
      - '$]-\infty; -9]$'
      - '$]-\infty; -9] \cup ]-2; \infty[$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Bei $x = -2$ ist der Nenner null. Diese Stelle gehört nie dazu.'
      - wert: 2
        meldung: |
          So entsteht das Ergebnis, wenn man mit $x + 2$ multipliziert und das Zeichen nicht umdreht. Teste $x = -5$:
          $\tfrac{-10}{-3} \approx 3{,}3 \geq 2$.
      - wert: 3
        meldung: 'Teste $x = 0$: $\tfrac{-5}{2} = -2{,}5 \geq 2$ ist falsch.'
hinweise:
  - 'Ziehe $2$ ab und schreibe alles als einen Bruch: $\tfrac{x - 5 - 2(x + 2)}{x + 2} \geq 0$.'
  - 'Der Zähler ist $-x - 9$. Lege eine Vorzeichentabelle mit den Stellen $-9$ und $-2$ an.'
loesung: |
  **Ansatz:** Nicht mit $x + 2$ multiplizieren, weil dessen Vorzeichen unbekannt ist. Stattdessen alles auf eine Seite.
  $D = \R\setminus\{-2\}$.
  ---
  $\tfrac{x - 5}{x + 2} - 2 = \tfrac{x - 5 - 2x - 4}{x + 2} = \tfrac{-x - 9}{x + 2} \geq 0$.
  ---
  Vorzeichen: Für $x < -9$ ist der Zähler positiv, der Nenner negativ, der Bruch negativ. Für $-9 < x < -2$ sind beide negativ,
  der Bruch ist positiv. Für $x > -2$ ist der Zähler negativ, der Nenner positiv, der Bruch negativ.
  ---
  Bei $x = -9$ ist der Bruch $0$, das ist erlaubt. Also $L = [-9; -2[$. **Probe:** $x = -5$ ergibt $\tfrac{-10}{-3} \approx 3{,}33 \geq 2$.
```

```aufgabe
id: gl-ungl-bruch-fehler
titel: Fehler finden in einer Bruchungleichung
niveau: 2
lernziel: 7
kompetenz: begruenden
angabe: |
  Ein Mitschüler löst $\dfrac{3}{x - 2} > 1$ so: „Mal $(x - 2)$ ergibt $3 > x - 2$, also $x < 5$.“

  a) Erkläre, was an diesem Weg falsch ist.

  b) Wähle die richtige Lösungsmenge.
teile:
  - typ: text
    label: 'a)'
    muster: |
      Er multipliziert mit $x - 2$, ohne das Vorzeichen zu kennen. Für $x < 2$ ist $x - 2$ negativ, dann müsste sich das Zeichen
      umdrehen. Außerdem ist $x = 2$ nicht erlaubt. Seine Lösung enthält deshalb falsche Zahlen, zum Beispiel $x = 0$:
      $\tfrac{3}{-2} = -1{,}5 > 1$ ist falsch.
  - typ: auswahl
    label: 'b)'
    optionen:
      - '$]-\infty; 5[$'
      - '$]2; 5[$'
      - '$]2; 5]$'
      - '$]-\infty; 2[ \cup ]5; \infty[$'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Das ist das fehlerhafte Ergebnis. Teste $x = 0$: Links steht $-1{,}5$.'
      - wert: 2
        meldung: 'Bei $x = 5$ ist der Bruch genau $1$, und $1 > 1$ ist falsch.'
      - wert: 3
        meldung: 'Das ist der Bereich, in dem der Bruch höchstens $1$ ist. Gesucht ist größer als $1$.'
hinweise:
  - 'Ziehe $1$ ab und fasse zu einem Bruch zusammen.'
  - 'Du erhältst $\tfrac{5 - x}{x - 2} > 0$. Lege eine Vorzeichentabelle mit den Stellen $2$ und $5$ an.'
loesung: |
  **a)** Das Vorzeichen von $x - 2$ ist unbekannt. Für $x < 2$ ist es negativ, und das Zeichen hätte sich umdrehen müssen.
  ---
  **b)** Richtig: $\tfrac{3}{x - 2} - 1 > 0$ ergibt $\tfrac{3 - (x - 2)}{x - 2} = \tfrac{5 - x}{x - 2} > 0$.
  ---
  Der Bruch ist positiv, wenn Zähler und Nenner dasselbe Vorzeichen haben. Für $2 < x < 5$ sind beide positiv. Für $x < 2$ ist
  der Zähler positiv und der Nenner negativ. Für $x > 5$ ist es umgekehrt. Also $L = \,]2; 5[$.
  ---
  **Probe:** $x = 3$ ergibt $\tfrac31 = 3 > 1$, richtig. $x = 6$ ergibt $\tfrac34 > 1$, falsch.
```

```aufgabe
id: gl-ungl-wurzel
titel: Einfache Wurzelungleichung
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Löse $\sqrt{x + 3} \leq 2$ und wähle die Lösungsmenge.
teile:
  - typ: auswahl
    optionen:
      - '$[-3; 1]$'
      - '$]-\infty; 1]$'
      - '$[-3; 1[$'
      - '$[1; \infty[$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Du hast die Definitionsmenge vergessen. Für $x = -5$ steht unter der Wurzel $-2$, und diese Wurzel gibt es nicht.
      - wert: 2
        meldung: 'Bei $x = 1$ ist die Wurzel genau $2$, und $2 \leq 2$ ist erfüllt.'
      - wert: 3
        meldung: 'Die Wurzel wächst mit $x$. Kleine Werte erhält man also für kleine $x$, nicht für große.'
hinweise:
  - 'Bestimme zuerst die Definitionsmenge: $x + 3 \geq 0$.'
  - 'Beide Seiten sind nicht negativ. Darum darfst du quadrieren: $x + 3 \leq 4$.'
loesung: |
  **Ansatz:** Zuerst die Definitionsmenge, dann quadrieren. Quadrieren ist erlaubt, weil beide Seiten nicht negativ sind.
  ---
  Definitionsmenge: $x + 3 \geq 0$, also $x \geq -3$. Quadrieren: $x + 3 \leq 4$, also $x \leq 1$.
  ---
  Beides zusammen: $-3 \leq x \leq 1$, also $L = [-3; 1]$. **Probe:** $x = -3$ ergibt $0 \leq 2$, $x = 1$ ergibt $2 \leq 2$.
```

```aufgabe
id: gl-ungl-toleranz
titel: Füllmenge mit Toleranz
niveau: 2
lernziel: 7
kompetenz: modellieren
angabe: |
  Eine Packung Kaffee soll $250$ g enthalten. Die tatsächliche Masse $m$ darf um höchstens $3\,\%$ der Sollmasse abweichen.

  a) Stelle die Bedingung als Betragsungleichung auf und bestimme die kleinste erlaubte Masse.

  b) Bestimme die größte erlaubte Masse.
teile:
  - typ: zahl
    label: 'a) kleinste Masse'
    einheit: g
    loesung: "250 - 0.03*250"
    fehler:
      - wert: "247"
        meldung: 'Erlaubt sind $3\,\%$ von $250$ g, nicht $3$ g. Rechne zuerst die Toleranz in Gramm aus.'
      - wert: "250*0.97^2"
        meldung: 'Die Abweichung bezieht sich einmal auf die Sollmasse. Es wird nichts doppelt angewendet.'
  - typ: zahl
    label: 'b) größte Masse'
    einheit: g
    loesung: "250 + 0.03*250"
    fehler:
      - wert: "253"
        meldung: 'Erlaubt sind $3\,\%$ von $250$ g, nicht $3$ g.'
hinweise:
  - 'Die erlaubte Abweichung in Gramm ist $0{,}03\cdot 250$.'
  - 'Die Bedingung lautet $|m - 250| \leq 7{,}5$. Lies die Grenzen über den Abstand ab.'
loesung: |
  **Ansatz:** Die Abweichung von der Sollmasse ist $|m - 250|$. Sie darf höchstens $3\,\%$ von $250$ g betragen, also
  $0{,}03\cdot 250 = 7{,}5$ g.
  ---
  Bedingung: $|m - 250| \leq 7{,}5$. Das heißt $-7{,}5 \leq m - 250 \leq 7{,}5$, also $242{,}5 \leq m \leq 257{,}5$.
  ---
  **Antwort:** Die Masse muss zwischen $242{,}5$ g und $257{,}5$ g liegen.
```

```aufgabe
id: gl-ungl-betrag-zwei
titel: Zwei Beträge in einer Ungleichung
niveau: 3
lernziel: 7
kompetenz: rechnen
angabe: |
  Löse $|x + 2| + |x - 4| \geq 10$.

  a) Gib die beiden Grenzen der Lösungsmenge an, die kleinere zuerst.

  b) Wähle die Lösungsmenge.
teile:
  - typ: vektor
    label: 'a) Grenzen'
    namen: ["links", "rechts"]
    loesung: ["-4", "6"]
    fehler:
      - wert: ["-6", "4"]
        meldung: 'Teste $x = 4$: $6 + 0 = 6$, und $6 \geq 10$ ist falsch. Rechne die Bereiche neu.'
  - typ: auswahl
    label: 'b)'
    optionen:
      - '$[-4; 6]$'
      - '$]-\infty; -4] \cup [6; \infty[$'
      - '$]-\infty; -4[ \cup ]6; \infty[$'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Zwischen $-2$ und $4$ ist die Summe immer $6$, also kleiner als $10$. Die Lösungen liegen außen.'
      - wert: 2
        meldung: 'Wegen $\geq$ gehören die Grenzen dazu. Teste $x = 6$: $8 + 2 = 10$.'
hinweise:
  - 'Die Knickstellen sind $-2$ und $4$. Sie teilen die Zahlengerade in drei Bereiche.'
  - 'Ersetze in jedem Bereich jeden Betrag durch den Term oder sein Negatives, löse und behalte nur Zahlen im Bereich.'
loesung: |
  **Ansatz:** Fallunterscheidung an den Knickstellen $-2$ und $4$. In jedem Bereich hat jeder Term innen ein festes Vorzeichen.
  ---
  **$x \geq 4$:** $(x + 2) + (x - 4) = 2x - 2 \geq 10$, also $x \geq 6$. Das liegt im Bereich.
  ---
  **$-2 \leq x < 4$:** $(x + 2) + (4 - x) = 6 \geq 10$ ist falsch. Hier gibt es keine Lösung.
  ---
  **$x < -2$:** $(-x - 2) + (4 - x) = -2x + 2 \geq 10$. Durch $-2$ dividieren und Zeichen umdrehen: $x \leq -4$. Das liegt im Bereich.
  ---
  $L = \,]-\infty; -4] \cup [6; \infty[$. **Probe:** $x = -4$ ergibt $2 + 8 = 10 \geq 10$. **Deutung:** Die Abstände zu $-2$ und $4$
  ergeben zusammen mindestens $10$.
gefuehrt:
  - text: An welchen Stellen wird einer der Beträge innen null?
    teil:
      typ: menge
      loesung: ["-2", "4"]
      fehler:
        - wert: ["2", "-4"]
          meldung: '$x + 2 = 0$ gilt für $x = -2$, nicht für $x = 2$.'
    erklaerung: '$x + 2 = 0$ bei $x = -2$ und $x - 4 = 0$ bei $x = 4$. Das ergibt drei Bereiche.'
  - text: Welchen Wert hat $|x + 2| + |x - 4|$ für alle $x$ zwischen $-2$ und $4$?
    teil:
      typ: zahl
      loesung: "6"
      fehler:
        - wert: "2"
          meldung: 'Für $x < 4$ ist $|x - 4| = 4 - x$, nicht $x - 4$.'
    erklaerung: '$(x + 2) + (4 - x) = 6$. Weil $6 \geq 10$ falsch ist, liegt dort keine Lösung.'
  - text: Löse im Bereich $x \geq 4$ die Ungleichung $2x - 2 \geq 10$.
    teil:
      typ: zahl
      label: 'kleinste Lösung'
      loesung: "6"
    erklaerung: '$2x \geq 12$, also $x \geq 6$.'
  - text: Löse im Bereich $x < -2$ und fasse alles zusammen.
    erklaerung: '$-2x + 2 \geq 10$ ergibt $x \leq -4$. Zusammen: $x \leq -4$ oder $x \geq 6$.'
```

```aufgabe
id: gl-ungl-wurzel-fall
titel: Wurzelungleichung mit Fallunterscheidung
niveau: 3
lernziel: 7
kompetenz: begruenden
angabe: |
  Löse $\sqrt{2x + 7} > x + 2$.

  a) Gib die beiden Grenzen der Lösungsmenge an, die kleinere zuerst.

  b) Wähle die Lösungsmenge.

  c) Begründe, warum die Zahlen zwischen $-3{,}5$ und $-2$ ohne Quadrieren zur Lösungsmenge gehören.
teile:
  - typ: vektor
    label: 'a) Grenzen'
    namen: ["links", "rechts"]
    loesung: ["-3.5", "1"]
    fehler:
      - wert: ["-3", "1"]
        meldung: |
          Das ist das Ergebnis nach dem Quadrieren ohne Fallunterscheidung. Teste $x = -3{,}2$: Die Wurzel ist positiv, rechts steht $-1{,}2$.
  - typ: auswahl
    label: 'b)'
    optionen:
      - '$[-3{,}5; 1[$'
      - '$]-3; 1[$'
      - '$[-3{,}5; 1]$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Die Zahlen von $-3{,}5$ bis $-3$ fehlen. Für sie ist die rechte Seite negativ.'
      - wert: 2
        meldung: 'Bei $x = 1$ sind beide Seiten $3$, und $3 > 3$ ist falsch.'
  - typ: text
    label: 'c)'
    muster: |
      Für $-3{,}5 \leq x < -2$ ist die Wurzel definiert und mindestens $0$. Die rechte Seite $x + 2$ ist dort negativ.
      Eine Zahl, die mindestens $0$ ist, ist immer größer als eine negative Zahl. Also gilt die Ungleichung dort für jedes $x$.
hinweise:
  - 'Definitionsmenge: $2x + 7 \geq 0$. Unterscheide dann die Fälle $x + 2 < 0$ und $x + 2 \geq 0$.'
  - 'Im zweiten Fall darfst du quadrieren: $2x + 7 > (x + 2)^2$. Das ergibt $x^2 + 2x - 3 < 0$.'
loesung: |
  **Ansatz:** Definitionsmenge, dann Fallunterscheidung nach dem Vorzeichen der rechten Seite. Quadrieren ist nur erlaubt,
  wenn beide Seiten nicht negativ sind. $D$: $2x + 7 \geq 0$, also $x \geq -3{,}5$.
  ---
  **Fall $x + 2 < 0$, also $-3{,}5 \leq x < -2$:** Die Wurzel ist mindestens $0$, die rechte Seite negativ. Die Ungleichung gilt immer.
  ---
  **Fall $x \geq -2$:** Quadrieren: $2x + 7 > x^2 + 4x + 4$, also $x^2 + 2x - 3 < 0$ und $(x + 3)(x - 1) < 0$. Das gilt für
  $-3 < x < 1$. Mit $x \geq -2$ bleibt $-2 \leq x < 1$.
  ---
  Beide Fälle zusammen: $L = [-3{,}5; 1[$. **Probe:** $x = 0$ ergibt $\sqrt7 \approx 2{,}65 > 2$, richtig. $x = 2$ ergibt $\sqrt{11} \approx 3{,}32 > 4$, falsch.
```
## Formeln umstellen

```aufgabe
id: gl-formel-check
titel: Einen Bruch auflösen
niveau: 1
art: check
lernziel: 8
angabe: |
  Löse die Gleichung $\dfrac{2x}{5} = 6$ nach $x$.
  Herkunft: [2.2 Lineare Gleichungen](/lernen/mathe3/gleichungen/lineare-gleichungen).
teile:
  - typ: zahl
    label: '$x$'
    loesung: "6*5/2"
    fehler:
      - wert: "6*2/5"
        meldung: |
          Du hast mit $2$ multipliziert und durch $5$ dividiert. Das ist genau verkehrt herum.
          Die $5$ steht im Nenner. Um sie loszuwerden, multiplizierst du mit $5$.
      - wert: "6/2/5"
        meldung: |
          Du hast durch $5$ dividiert, obwohl die $5$ schon im Nenner steht.
          Um einen Nenner zu beseitigen, multiplizierst du beide Seiten mit ihm.
hinweise:
  - 'Multipliziere zuerst beide Seiten mit $5$. Dann steht $2x = 30$ da.'
loesung: |
  Wir multiplizieren beide Seiten mit $5$, damit der Bruch verschwindet: $2x = 30$.
  ---
  Wir dividieren durch $2$: $x = 15$. Probe: $\tfrac{2\cdot 15}{5} = \tfrac{30}{5} = 6$.
```

In Physik, Technik und Wirtschaft stehen fast alle Zusammenhänge als **Formeln** da. Eine Formel ist
eine Gleichung, in der mehrere Größen vorkommen. Ein Beispiel ist $v = \frac{s}{t}$: Die Geschwindigkeit
$v$ ist der Weg $s$ geteilt durch die Zeit $t$.

Oft kennst du aber nicht $v$, sondern suchst $t$. Dann musst du die Formel **nach $t$ umstellen**.
Das heißt: Du formst sie so um, dass $t$ allein auf einer Seite steht und auf der anderen Seite kein
$t$ mehr vorkommt.

Die gute Nachricht: Dafür brauchst du nichts Neues. Du liest die Formel als Gleichung in der einen
gesuchten Größe. Alle anderen Buchstaben behandelst du so, als wären es Zahlen. Dann gelten genau die
Äquivalenzumformungen aus [2.1 Gleichungen und Äquivalenzumformungen](/lernen/mathe3/gleichungen/gleichungen-und-aequivalenzumformungen).
Das sind Umformungen, die die Lösungsmenge nicht verändern, etwa auf beiden Seiten dasselbe addieren.

:::definition[Formel nach einer Größe umstellen]
Eine Formel ist **nach der Größe $t$ umgestellt**, wenn sie die Form $t = \text{Term}$ hat.
Im Term rechts darf kein $t$ mehr vorkommen. Man sagt dafür auch: Die Formel ist **nach $t$ freigestellt**.
:::

**Beispiel:** $t = \frac{s}{v}$ ist nach $t$ umgestellt. Rechts stehen nur $s$ und $v$.

**Nichtbeispiel:** $t = \frac{s}{v} \cdot \frac{t}{t}$ oder $x = \frac{12 - 2x}{3}$ sind **nicht** umgestellt.
In beiden steht die gesuchte Größe noch rechts. Du kannst damit nichts ausrechnen, weil du für die rechte Seite
die Größe schon kennen müsstest.

### Der einfachste Fall: Multiplizieren und Dividieren

:::beispiel[Wie lange dauert die Fahrt?]
Ein Zug fährt $s = 150\,\text{km}$ mit der mittleren Geschwindigkeit $v = 60\,\tfrac{\text{km}}{\text{h}}$. Gesucht ist die Fahrzeit $t$.

1. **Gesuchte Größe markieren:** In $v = \frac{s}{t}$ suchen wir $t$. Es steht im Nenner.
2. **Nenner beseitigen:** Wir multiplizieren beide Seiten mit $t$. Das ist erlaubt, weil eine Fahrzeit nie $0$ ist: $v\cdot t = s$.
3. **Durch den Faktor bei $t$ dividieren:** Wir dividieren durch $v$, weil $v \neq 0$: $t = \frac{s}{v}$.
4. **Einsetzen:** $t = \frac{150\,\text{km}}{60\,\text{km/h}} = 2{,}5\,\text{h}$.

**Einheitenkontrolle:** $\frac{\text{km}}{\text{km/h}} = \text{km}\cdot\frac{\text{h}}{\text{km}} = \text{h}$. Eine Zeit kommt heraus, so muss es sein.
Die Fahrt dauert also $2{,}5$ Stunden, das sind $2$ Stunden und $30$ Minuten.
:::

:::achtung[Nur einen Teil dividiert]
Eine typische Fehlrechnung beim Trapez $A = \frac{a + c}{2}\cdot h$ nach $c$:
$$2A = (a + c)\cdot h \quad\Longrightarrow\quad c = 2A - \frac{a}{h}. \qquad\text{(falsch)}$$
Die Division durch $h$ muss die **ganze** Seite treffen, also $2A$. Richtig ist: Erst durch $h$ dividieren, $\frac{2A}{h} = a + c$, dann $a$ abziehen: $c = \frac{2A}{h} - a$.

Probe mit Zahlen: Für $A = 20$, $a = 3$ und $h = 4$ ergibt die richtige Formel $c = 10 - 3 = 7$. Kontrolle: $\frac{3 + 7}{2}\cdot 4 = 20$ stimmt.
Die falsche Formel liefert $40 - 0{,}75 = 39{,}25$. Damit wäre die Fläche viel zu groß.
:::

### Wenn die gesuchte Größe mehrfach vorkommt: herausheben

Manchmal steht die gesuchte Größe an zwei Stellen. Dann reicht es nicht, irgendwo zu dividieren. Du sammelst
alle Summanden mit der Größe auf einer Seite und **hebst sie heraus**. Herausheben heißt: den gemeinsamen
Faktor vor eine Klammer schreiben, also $K_0 + K_0\cdot r = K_0\,(1 + r)$. Danach dividierst du durch die Klammer.

:::beispiel[Wie viel wurde angelegt?]
Bei einfacher Verzinsung wächst ein Kapital $K_0$ in $t$ Jahren mit dem Zinssatz $p\,\%$ auf
$$K = K_0 + K_0\cdot\frac{p}{100}\cdot t.$$
Nach $t = 3$ Jahren bei $p = 2$ sind $K = 1060$ Euro auf dem Konto. Wie viel wurde angelegt?

1. **$K_0$ kommt zweimal vor.** Wir heben es heraus: $K = K_0\left(1 + \frac{p\,t}{100}\right)$.
2. **Durch die Klammer dividieren.** Die Klammer ist größer als $1$, also nicht null: $K_0 = \dfrac{K}{1 + \frac{p\,t}{100}}$.
3. **Einsetzen:** $K_0 = \dfrac{1060}{1 + 0{,}06} = \dfrac{1060}{1{,}06} = 1000$ Euro.

**Probe:** $1000 + 1000\cdot 0{,}02\cdot 3 = 1000 + 60 = 1060$. Es wurden $1000$ Euro angelegt.
:::

### Kehrwerte von Summen

Bei Linsen und bei parallel geschalteten Widerständen addiert man **Kehrwerte**. Der Kehrwert von $f$ ist
$\frac1f$. Die **Linsengleichung** lautet
$$\frac1f = \frac1g + \frac1b.$$
Dabei ist $f$ die Brennweite, $g$ die Gegenstandsweite (Abstand vom Gegenstand zur Linse) und $b$ die Bildweite
(Abstand vom Bild zur Linse).

:::beispiel[Wo entsteht das Bild?]
Eine Sammellinse hat die Brennweite $f = 4\,\text{cm}$. Ein Gegenstand steht $g = 12\,\text{cm}$ vor der Linse. Gesucht ist $b$.

1. **Den Kehrwert der gesuchten Größe isolieren:** Wir ziehen $\frac1g$ ab: $\frac1b = \frac1f - \frac1g$.
2. **Auf gemeinsamen Nenner bringen:** $\frac1b = \frac{g - f}{f\,g}$.
3. **Kehrwert beider Seiten nehmen.** Das ist erlaubt, weil beide Seiten nicht null sind: $b = \frac{f\,g}{g - f}$.
4. **Einsetzen:** $b = \frac{4\cdot 12}{12 - 4}\,\text{cm} = \frac{48}{8}\,\text{cm} = 6\,\text{cm}$.

**Probe:** $\frac1{12} + \frac16 = \frac1{12} + \frac2{12} = \frac3{12} = \frac14$. Das ist $\frac1f$, es stimmt.
:::

:::achtung[Der Kehrwert einer Summe ist nicht die Summe der Kehrwerte]
Aus $\frac1f = \frac1g + \frac1b$ schließen viele: $f = g + b$. Das ist falsch.
Zahlenprobe mit dem Beispiel „Wo entsteht das Bild?“: $g = 12$ und $b = 6$ ergäbe $f = 18\,\text{cm}$.
Richtig ist $\frac1f = \frac14$, also $f = 4\,\text{cm}$.

Allgemein gilt $\frac{1}{x + y} \neq \frac1x + \frac1y$. Zum Beispiel ist $\frac{1}{1 + 1} = \frac12$, aber $\frac11 + \frac11 = 2$.
Erst auf einen gemeinsamen Nenner bringen, dann den Kehrwert der **ganzen** Seite nehmen.
:::

```reflexion
frage: Warum musst du beim Umstellen nach einer Größe, die zweimal vorkommt, zuerst herausheben? Warum genügt es nicht, einfach durch die Größe zu dividieren?
antwort: |
  Dividiert man $K = K_0 + K_0\cdot r$ durch $K_0$, erhält man $\frac{K}{K_0} = 1 + r$. Die gesuchte Größe steht dann
  immer noch auf der linken Seite, nur an einer anderen Stelle. Man hat nichts gewonnen. Erst das Herausheben fasst
  beide Vorkommen zu **einem** Faktor zusammen: $K = K_0\,(1 + r)$. Diesen einen Faktor kann man dann durch
  Division freistellen. Außerdem muss man beim Dividieren sicher sein, dass der Divisor nicht null ist. Bei einer
  Klammer wie $1 + r$ mit $r > 0$ ist das klar.
```

### Quadrate, Wurzeln und Exponenten

Steht die gesuchte Größe im Quadrat, ziehst du am Ende die Wurzel. Dabei entstehen eigentlich zwei Lösungen,
$+$ und $-$. Welche gilt, entscheidet der Sachzusammenhang. Eine Länge, eine Masse oder ein Geldbetrag sind
nie negativ.

:::beispiel[Geschwindigkeit aus der Bewegungsenergie]
Ein Auto mit der Masse $m = 1000\,\text{kg}$ hat die Bewegungsenergie $E = 200\,000\,\text{J}$. Es gilt $E = \frac12 m v^2$. Wie schnell fährt es?

1. **Bruch beseitigen:** Wir multiplizieren mit $2$: $2E = m v^2$.
2. **$v^2$ freistellen:** Wir dividieren durch $m$, weil $m > 0$: $v^2 = \frac{2E}{m}$.
3. **Wurzel ziehen:** $v = \pm\sqrt{\frac{2E}{m}}$. Hier ist nur der Betrag der Geschwindigkeit gefragt, also gilt das Pluszeichen.
4. **Einsetzen:** $v = \sqrt{\frac{2\cdot 200\,000}{1000}}\,\tfrac{\text{m}}{\text{s}} = \sqrt{400}\,\tfrac{\text{m}}{\text{s}} = 20\,\tfrac{\text{m}}{\text{s}}$.

**Einheitenkontrolle:** $1\,\text{J} = 1\,\text{kg}\cdot\frac{\text{m}^2}{\text{s}^2}$. Also ist $\frac{\text{J}}{\text{kg}} = \frac{\text{m}^2}{\text{s}^2}$, und die Wurzel daraus ist $\frac{\text{m}}{\text{s}}$.
Das Auto fährt $20\,\tfrac{\text{m}}{\text{s}}$, also $72\,\tfrac{\text{km}}{\text{h}}$.
:::

:::achtung[Wurzel aus einer Summe gliedweise gezogen]
Beim Satz des Pythagoras $a^2 + b^2 = c^2$ nach $a$ rechnen viele so: $a = c - b$. Das ist falsch, denn
$\sqrt{c^2 - b^2} \neq c - b$.

Zahlenprobe mit $c = 13$ und $b = 5$: Richtig ist $a = \sqrt{169 - 25} = \sqrt{144} = 12$. Die falsche Formel gibt $13 - 5 = 8$.
Kontrolle: $12^2 + 5^2 = 169 = 13^2$ stimmt, $8^2 + 5^2 = 89$ stimmt nicht.
:::

Steht die gesuchte Größe **im Exponenten**, hilft der Logarithmus. Er holt den Exponenten herunter:
$\ln(q^n) = n\cdot\ln q$. Das kennst du aus [2.9 Exponential- und Logarithmusgleichungen](/lernen/mathe3/gleichungen/exponential-und-logarithmusgleichungen).
Steht sie dagegen **in der Basis** und der Exponent ist bekannt, ziehst du die passende Wurzel.

:::beispiel[Zinseszins: Laufzeit und Zinssatz]
Bei Zinseszins wächst ein Kapital $K_0$ in $n$ Jahren auf $K_n = K_0\cdot q^n$ mit dem Zinsfaktor $q = 1 + \frac{p}{100}$.

**Gesucht $n$:** $2000$ Euro sollen bei $p = 3$ auf $2500$ Euro wachsen.
Wir dividieren durch $K_0$: $1{,}03^n = \frac{2500}{2000} = 1{,}25$. Wir logarithmieren beide Seiten: $n\cdot\ln 1{,}03 = \ln 1{,}25$.
Also $n = \frac{\ln 1{,}25}{\ln 1{,}03} \approx 7{,}55$. Nach $8$ ganzen Jahren ist das Ziel erreicht.

**Gesucht $p$:** $2000$ Euro sollen in $5$ Jahren auf $2400$ Euro wachsen.
Wir dividieren durch $K_0$: $q^5 = 1{,}2$. Wir ziehen die fünfte Wurzel, weil $q > 0$ ist: $q = \sqrt[5]{1{,}2} \approx 1{,}03714$.
Also $p = 100\,(q - 1) \approx 3{,}71$. Der Zinssatz muss etwa $3{,}71\,\%$ betragen.
:::

:::merke[Formel umstellen in fünf Schritten]
1. **Markieren:** Kreise die gesuchte Größe ein. Alle anderen Buchstaben sind wie Zahlen.
2. **Brüche beseitigen:** Mit den Nennern multiplizieren, die nicht null sein können.
3. **Sammeln und herausheben:** Alle Summanden mit der gesuchten Größe auf eine Seite, die Größe herausheben, dann durch die Klammer dividieren.
4. **Potenzen auflösen:** Bei einem Quadrat die Wurzel ziehen und das Vorzeichen aus dem Sachzusammenhang wählen. Bei einem Exponenten logarithmieren.
5. **Kontrollieren:** Einheiten prüfen und mit einfachen Zahlen eine Probe machen.
:::

```aufgabe
id: gl-formel-dichte
titel: Volumen aus der Dichte
niveau: 1
lernziel: 8
kompetenz: rechnen
angabe: |
  Die Dichte eines Körpers ist $\rho = \dfrac{m}{V}$ (gelesen „rho“), mit der Masse $m$ und dem Volumen $V$.

  a) Welche Formel gibt $V$ richtig an?

  b) Ein Aluminiumteil hat die Masse $540\,\text{g}$. Aluminium hat die Dichte $2{,}7\,\tfrac{\text{g}}{\text{cm}^3}$. Berechne sein Volumen in cm³.
teile:
  - typ: auswahl
    label: 'a)'
    optionen:
      - '$V = \dfrac{m}{\rho}$'
      - '$V = \rho\cdot m$'
      - '$V = \dfrac{\rho}{m}$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Prüfe mit den Einheiten: $\tfrac{\text{g}}{\text{cm}^3}\cdot\text{g}$ ergibt $\tfrac{\text{g}^2}{\text{cm}^3}$, kein Volumen.
          Aus $\rho = \tfrac{m}{V}$ wird nach Multiplizieren mit $V$ zuerst $\rho\,V = m$.
      - wert: 2
        meldung: |
          Du hast den Bruch einfach umgedreht. Multipliziere $\rho = \tfrac{m}{V}$ zuerst mit $V$.
          Dann steht $V$ nicht mehr im Nenner, und du kannst durch $\rho$ dividieren.
  - typ: zahl
    label: 'b) $V$'
    einheit: cm³
    loesung: "540/2.7"
    fehler:
      - wert: "540*2.7"
        meldung: 'Du hast Masse und Dichte multipliziert. Bei gleicher Masse hat ein Stoff mit großer Dichte aber ein **kleines** Volumen. Darum wird durch die Dichte dividiert.'
      - wert: "2.7/540"
        meldung: 'Du hast Dichte durch Masse gerechnet. Die Einheit wäre dann $\tfrac{1}{\text{cm}^3}$, kein Volumen.'
hinweise:
  - 'Multipliziere $\rho = \tfrac{m}{V}$ mit $V$ und dividiere dann durch $\rho$.'
loesung: |
  **Ansatz:** Wir stellen nach $V$ um. Multiplizieren mit $V$ ($V > 0$) gibt $\rho\,V = m$. Dividieren durch $\rho$ gibt $V = \frac{m}{\rho}$.
  ---
  Einsetzen: $V = \frac{540\,\text{g}}{2{,}7\,\text{g/cm}^3} = 200\,\text{cm}^3$. **Einheitenkontrolle:** $\text{g}\cdot\frac{\text{cm}^3}{\text{g}} = \text{cm}^3$. Das Teil hat ein Volumen von $200\,\text{cm}^3$.
```

```aufgabe
id: gl-formel-weg
titel: Beschleunigung aus dem Weg
niveau: 1
lernziel: 8
kompetenz: rechnen
angabe: |
  Für eine gleichmäßig beschleunigte Bewegung gilt $s = v_0\,t + \tfrac12\,a\,t^2$. Dabei ist $s$ der Weg, $v_0$ die
  Anfangsgeschwindigkeit, $t$ die Zeit und $a$ die Beschleunigung.

  a) Welche Formel gibt $a$ richtig an?

  b) Ein Auto fährt mit $v_0 = 5\,\tfrac{\text{m}}{\text{s}}$ und beschleunigt gleichmäßig. Es legt in $t = 10\,\text{s}$ den Weg $s = 100\,\text{m}$ zurück. Berechne $a$ in $\tfrac{\text{m}}{\text{s}^2}$.
teile:
  - typ: auswahl
    label: 'a)'
    optionen:
      - '$a = \dfrac{2\,(s - v_0 t)}{t^2}$'
      - '$a = \dfrac{2s}{t^2} - v_0 t$'
      - '$a = \dfrac{s - v_0 t}{2t^2}$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Hier wurde nur $s$ durch $t^2$ geteilt, aber $v_0 t$ nicht. Die Division muss die ganze Seite $s - v_0 t$ treffen.
          Prüfe außerdem die Einheiten: $\tfrac{\text{m}}{\text{s}^2} - \text{m}$ kann man nicht subtrahieren.
      - wert: 2
        meldung: |
          Der Faktor $\tfrac12$ wird beseitigt, indem man mit $2$ **multipliziert**. Du hast stattdessen durch $2$ geteilt.
  - typ: zahl
    label: 'b) $a$'
    einheit: m/s²
    loesung: "2*(100 - 5*10)/10^2"
    fehler:
      - wert: "2*100/10^2"
        meldung: 'Du hast den Anteil $v_0\,t$ vergessen. Das Auto hatte schon Geschwindigkeit und hätte ohne Beschleunigung $50\,\text{m}$ geschafft.'
      - wert: "(100 - 5*10)/(2*10^2)"
        meldung: 'Den Faktor $\tfrac12$ beseitigst du durch Multiplikation mit $2$, nicht durch Division.'
hinweise:
  - 'Ziehe zuerst $v_0\,t$ ab, multipliziere dann mit $2$ und dividiere zuletzt durch $t^2$.'
loesung: |
  **Ansatz:** $a$ kommt nur einmal vor. Wir ziehen $v_0 t$ ab: $s - v_0 t = \frac12 a t^2$. Wir multiplizieren mit $2$: $2(s - v_0 t) = a t^2$. Wir dividieren durch $t^2 \neq 0$: $a = \frac{2(s - v_0 t)}{t^2}$.
  ---
  Einsetzen: $a = \frac{2\,(100 - 50)}{100}\,\tfrac{\text{m}}{\text{s}^2} = 1\,\tfrac{\text{m}}{\text{s}^2}$.
  **Probe:** $5\cdot 10 + \frac12\cdot 1\cdot 100 = 50 + 50 = 100$. Die Beschleunigung beträgt $1\,\tfrac{\text{m}}{\text{s}^2}$.
```

```aufgabe
id: gl-formel-parallel
titel: Zwei Widerstände parallel
niveau: 2
lernziel: 8
kompetenz: anwenden
angabe: |
  Schaltet man zwei Widerstände $R_1$ und $R_2$ parallel, gilt für den Gesamtwiderstand $R$:
  $$\frac1R = \frac1{R_1} + \frac1{R_2}.$$
  a) Welche Formel gibt $R_2$ richtig an?

  b) Ein Gesamtwiderstand von $12\,\Omega$ (Ohm) soll mit $R_1 = 20\,\Omega$ erreicht werden. Wie groß muss $R_2$ sein?
teile:
  - typ: auswahl
    label: 'a)'
    optionen:
      - '$R_2 = R - R_1$'
      - '$R_2 = \dfrac{R\,R_1}{R_1 - R}$'
      - '$R_2 = \dfrac{R_1 - R}{R\,R_1}$'
      - '$R_2 = \dfrac{R\,R_1}{R + R_1}$'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Du hast die Kehrwerte weggelassen, als wären es gewöhnliche Summanden. Der Kehrwert einer Summe ist aber nicht die Summe der Kehrwerte.
      - wert: 2
        meldung: |
          Dieser Term ist $\tfrac{1}{R_2}$. Ganz zum Schluss musst du noch den Kehrwert nehmen.
      - wert: 3
        meldung: |
          Beim Isolieren von $\tfrac{1}{R_2}$ wird $\tfrac{1}{R_1}$ **abgezogen**, nicht addiert. Das ändert das Vorzeichen im Nenner.
  - typ: zahl
    label: 'b) $R_2$'
    einheit: Ω
    loesung: "12*20/(20 - 12)"
    fehler:
      - wert: "-8"
        meldung: 'Ein negativer Widerstand ist unmöglich. Du hast $R - R_1$ gerechnet, also Kehrwerte wie normale Zahlen behandelt.'
      - wert: "1/30"
        meldung: 'Das ist $\tfrac{1}{R_2}$ in $\tfrac{1}{\Omega}$. Nimm noch den Kehrwert.'
      - wert: "12*20/(12 + 20)"
        meldung: 'Prüfe das Vorzeichen: $\tfrac{1}{R_2} = \tfrac1R - \tfrac1{R_1}$.'
hinweise:
  - 'Isoliere zuerst $\tfrac{1}{R_2} = \tfrac1R - \tfrac1{R_1}$.'
  - 'Bringe die rechte Seite auf den gemeinsamen Nenner $R\,R_1$ und nimm dann von beiden Seiten den Kehrwert.'
loesung: |
  **Ansatz:** $R_2$ steht im Nenner. Wir isolieren seinen Kehrwert, indem wir $\frac{1}{R_1}$ abziehen: $\frac{1}{R_2} = \frac1R - \frac1{R_1}$.
  ---
  Gemeinsamer Nenner $R\,R_1$: $\frac{1}{R_2} = \frac{R_1 - R}{R\,R_1}$. Kehrwert beider Seiten: $R_2 = \frac{R\,R_1}{R_1 - R}$.
  ---
  Einsetzen: $R_2 = \frac{12\cdot 20}{20 - 12}\,\Omega = \frac{240}{8}\,\Omega = 30\,\Omega$.
  ---
  **Probe:** $\frac{1}{20} + \frac{1}{30} = \frac{3}{60} + \frac{2}{60} = \frac{5}{60} = \frac{1}{12}$. Es stimmt. **Plausibilität:** Parallel geschaltet ist der Gesamtwiderstand immer kleiner als jeder Einzelwiderstand. $12 < 20$ und $12 < 30$ passen.
```

```aufgabe
id: gl-formel-mischtemperatur
titel: Wie viel kaltes Wasser?
niveau: 2
lernziel: 8
kompetenz: rechnen
angabe: |
  Mischt man $m_1$ Kilogramm Wasser der Temperatur $T_1$ mit $m_2$ Kilogramm der Temperatur $T_2$, stellt sich
  die Mischtemperatur
  $$T = \frac{m_1\,T_1 + m_2\,T_2}{m_1 + m_2}$$
  ein. In einem Topf sind $2\,\text{kg}$ Wasser mit $80\,°\text{C}$. Wie viel Kilogramm Wasser mit $20\,°\text{C}$ muss man
  zugießen, damit die Mischung $60\,°\text{C}$ hat?
teile:
  - typ: zahl
    label: '$m_2$'
    einheit: kg
    loesung: "2*(80 - 60)/(60 - 20)"
    fehler:
      - wert: "2*(80 - 60)/20"
        meldung: 'Beim Sammeln der $m_2$-Terme bleibt $m_2\,(T - T_2)$ übrig, nicht $m_2\,T_2$. Du hast den Summanden $m_2\,T$ vergessen.'
      - wert: "2*(60 - 20)/(80 - 60)"
        meldung: Du hast Zähler und Nenner vertauscht. Mehr kaltes Wasser würde die Mischung unter $60\,°\text{C}$ drücken. Prüfe dein Ergebnis durch Einsetzen.
hinweise:
  - 'Multipliziere zuerst mit dem Nenner $m_1 + m_2$. Danach kommt $m_2$ links und rechts vor.'
  - 'Bringe alle Summanden mit $m_2$ auf eine Seite und hebe $m_2$ heraus: $m_2\,(T - T_2) = m_1\,(T_1 - T)$.'
loesung: |
  **Ansatz:** $m_2$ kommt zweimal vor, im Zähler und im Nenner. Wir beseitigen den Bruch und heben dann heraus.
  Mal $(m_1 + m_2)$: $T\,m_1 + T\,m_2 = m_1 T_1 + m_2 T_2$.
  ---
  Alle $m_2$-Terme nach links, den Rest nach rechts: $T\,m_2 - T_2\,m_2 = m_1 T_1 - T\,m_1$. Herausheben: $m_2\,(T - T_2) = m_1\,(T_1 - T)$.
  ---
  Division durch $T - T_2 \neq 0$: $m_2 = \frac{m_1\,(T_1 - T)}{T - T_2} = \frac{2\cdot 20}{40}\,\text{kg} = 1\,\text{kg}$.
  ---
  **Probe:** $\frac{2\cdot 80 + 1\cdot 20}{3} = \frac{180}{3} = 60$. Man muss $1\,\text{kg}$ kaltes Wasser zugießen.
gefuehrt:
  - text: Multipliziere beide Seiten mit dem Nenner $m_1 + m_2$. Was steht dann da?
    erklaerung: '$T\,(m_1 + m_2) = m_1 T_1 + m_2 T_2$, ausmultipliziert $T\,m_1 + T\,m_2 = m_1 T_1 + m_2 T_2$.'
  - text: Bringe alle Summanden mit $m_2$ nach links und hebe $m_2$ heraus. Welcher Faktor steht dann bei $m_2$?
    teil:
      typ: auswahl
      optionen: ['$T - T_2$', '$T_2$', '$T + T_2$']
      richtig: [0]
      fehler:
        - wert: 1
          meldung: 'Links steht auch noch $T\,m_2$. Beide Summanden mit $m_2$ gehören in die Klammer.'
        - wert: 2
          meldung: '$m_2 T_2$ wechselt beim Hinüberbringen das Vorzeichen.'
    erklaerung: '$T\,m_2 - T_2\,m_2 = m_1 T_1 - T\,m_1$, also $m_2\,(T - T_2) = m_1\,(T_1 - T)$.'
  - text: Dividiere durch die Klammer und setze ein. Wie groß ist $m_2$ in kg?
    teil:
      typ: zahl
      loesung: "2*(80 - 60)/(60 - 20)"
      fehler:
        - wert: "2*(60 - 20)/(80 - 60)"
          meldung: Zähler und Nenner sind vertauscht. Setze die Zahlen in $\frac{m_1\,(T_1 - T)}{T - T_2}$ ein.
    erklaerung: '$m_2 = \frac{2\cdot(80 - 60)}{60 - 20} = \frac{40}{40} = 1$.'
  - text: Mach die Probe in der Ausgangsformel.
    erklaerung: '$\frac{2\cdot 80 + 1\cdot 20}{2 + 1} = 60$. Es stimmt.'
```

```aufgabe
id: gl-formel-zins
titel: Zinseszinsformel nach n und nach p
niveau: 2
lernziel: 8
kompetenz: anwenden
angabe: |
  Es gilt $K_n = K_0\left(1 + \tfrac{p}{100}\right)^n$ (Zinseszins, jährliche Verzinsung).

  a) Nach wie vielen Jahren wachsen $3000$ Euro bei $2{,}5\,\%$ Zinsen auf $4000$ Euro? Runde auf zwei Nachkommastellen.

  b) Welcher Zinssatz lässt $8000$ Euro in $6$ Jahren auf $9000$ Euro wachsen? Gib $p$ in Prozent auf zwei Nachkommastellen an.
teile:
  - typ: zahl
    label: 'a) $n$'
    einheit: Jahre
    loesung: "ln(4000/3000)/ln(1.025)"
    toleranz: 0.01
    fehler:
      - wert: "(4000/3000 - 1)/0.025"
        meldung: 'Das ist die Rechnung für **einfache** Zinsen, bei denen jedes Jahr derselbe Betrag dazukommt. Bei Zinseszins steht $n$ im Exponenten. Dafür brauchst du den Logarithmus.'
      - wert: "ln(1000)/ln(1.025)"
        meldung: 'Du hast die Differenz $4000 - 3000$ logarithmiert. Dividiere zuerst durch $K_0$, damit links nur die Potenz steht.'
  - typ: zahl
    label: 'b) $p$'
    einheit: '%'
    loesung: "100*((9000/8000)^(1/6) - 1)"
    toleranz: 0.01
    fehler:
      - wert: "100*(9000/8000 - 1)/6"
        meldung: 'Du hast den Gesamtzuwachs von $12{,}5\,\%$ einfach durch $6$ geteilt. Bei Zinseszins werden die Zinsen mitverzinst. Ziehe die sechste Wurzel aus dem Wachstumsfaktor.'
hinweise:
  - 'Dividiere zuerst beide Seiten durch $K_0$. Dann steht links nur noch die Potenz.'
  - 'Bei a) steht $n$ im Exponenten: logarithmieren. Bei b) ist der Exponent bekannt: die sechste Wurzel ziehen.'
loesung: |
  **Ansatz:** In beiden Fällen dividieren wir zuerst durch $K_0$, damit die Potenz allein steht.
  ---
  **a)** $1{,}025^n = \frac{4000}{3000} = \frac43$. Logarithmieren: $n\cdot\ln 1{,}025 = \ln\frac43$, also $n = \frac{\ln(4/3)}{\ln 1{,}025} \approx 11{,}65$ Jahre.
  ---
  **b)** $q^6 = \frac{9000}{8000} = 1{,}125$. Sechste Wurzel (weil $q > 0$): $q = \sqrt[6]{1{,}125} \approx 1{,}01982$. Also $p = 100\,(q - 1) \approx 1{,}98$.
  ---
  **Probe:** $3000\cdot 1{,}025^{11{,}65} \approx 4000$ und $8000\cdot 1{,}01982^6 \approx 9000$. Nach etwa $11{,}65$ Jahren sind es $4000$ Euro, also nach $12$ ganzen Jahren. Für b) braucht man rund $1{,}98\,\%$ Zinsen.
```

```aufgabe
id: gl-formel-fehlersuche
titel: Fehler beim Umstellen finden
niveau: 2
lernziel: 8
kompetenz: begruenden
angabe: |
  Die Energie eines Körpers mit Masse $m$, Geschwindigkeit $v$ und Höhe $h$ ist $E = \tfrac12 m v^2 + m g h$.
  Eine Mitschülerin stellt nach $m$ um und schreibt:
  $$m = \frac{E}{\tfrac12 v^2} + \frac{E}{g h}.$$
  a) Welche Formel ist richtig?

  b) Erkläre den Fehler der Mitschülerin in ein bis zwei Sätzen.
teile:
  - typ: auswahl
    label: 'a)'
    optionen:
      - '$m = \dfrac{E}{\tfrac12 v^2} + \dfrac{E}{g h}$'
      - '$m = \dfrac{2E}{v^2 + 2gh}$'
      - '$m = E - \tfrac12 v^2 - g h$'
      - '$m = \dfrac{2E}{v^2} - g h$'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Probiere Zahlen: Für $v = 2$, $g h = 2$ und $m = 1$ ist $E = 2 + 2 = 4$. Die Formel liefert $\tfrac{4}{2} + \tfrac{4}{2} = 4$ statt $1$.'
      - wert: 2
        meldung: '$m$ ist ein **Faktor** in beiden Summanden, kein Summand. Man darf ihn nicht durch Abziehen freistellen.'
      - wert: 3
        meldung: 'Hier wurde nur ein Summand durch $\tfrac12 v^2$ geteilt. $m$ kommt zweimal vor. Zuerst herausheben.'
  - typ: text
    label: 'b)'
    muster: |
      $m$ kommt in beiden Summanden vor. Die Mitschülerin hat so getan, als dürfte man jeden Summanden einzeln
      durch seinen Faktor teilen. Richtig ist herausheben: $E = m\left(\tfrac12 v^2 + g h\right)$. Dann teilt man durch
      die **ganze** Klammer: $m = \dfrac{E}{\tfrac12 v^2 + g h} = \dfrac{2E}{v^2 + 2gh}$.
hinweise:
  - 'In welchen Summanden kommt $m$ vor? Was macht man, wenn die gesuchte Größe mehrfach vorkommt?'
  - 'Hebe $m$ heraus: $E = m\left(\tfrac12 v^2 + g h\right)$. Dividiere dann durch die Klammer.'
loesung: |
  **Ansatz:** $m$ steht in beiden Summanden als Faktor. Wir heben es heraus: $E = m\left(\frac12 v^2 + g h\right)$.
  ---
  Die Klammer ist positiv, also dürfen wir durch sie dividieren: $m = \frac{E}{\frac12 v^2 + g h}$. Mit $2$ erweitert: $m = \frac{2E}{v^2 + 2gh}$.
  ---
  **Fehler der Mitschülerin:** Sie hat $\frac{E}{a + b}$ wie $\frac{E}{a} + \frac{E}{b}$ behandelt. Das ist falsch. **Probe mit Zahlen:** $m = 1$, $v = 2$, $gh = 2$ ergibt $E = 4$. Die richtige Formel liefert $\frac{8}{4 + 4} = 1$, ihre Formel $4$.
```

```aufgabe
id: gl-formel-reifen
titel: Reifendruck und Temperatur
niveau: 3
lernziel: 8
kompetenz: modellieren
angabe: |
  Für eine eingeschlossene Gasmenge gilt $\dfrac{p_1 V_1}{T_1} = \dfrac{p_2 V_2}{T_2}$. Dabei ist $p$ der Druck, $V$ das Volumen und $T$ die
  Temperatur in **Kelvin** ($T = \vartheta + 273{,}15$, wenn $\vartheta$ die Temperatur in °C ist).

  a) Stelle die Formel nach $T_2$ um.

  b) In einem Autoreifen herrscht bei $15\,°\text{C}$ der absolute Luftdruck $3{,}2\,\text{bar}$. Nach schneller Fahrt sind es
  $3{,}5\,\text{bar}$. Das Volumen bleibt gleich. (Ein Reifenmessgerät zeigt nur den Überdruck gegenüber der Außenluft an, also
  rund $1\,\text{bar}$ weniger. Die Gasformel braucht aber den absoluten Druck.) Wie warm ist die Luft im Reifen jetzt? Gib das Ergebnis in °C auf eine Nachkommastelle an.
teile:
  - typ: auswahl
    label: 'a)'
    optionen:
      - '$T_2 = \dfrac{p_2 V_2\,T_1}{p_1 V_1}$'
      - '$T_2 = \dfrac{p_1 V_1}{p_2 V_2\,T_1}$'
      - '$T_2 = \dfrac{p_1 V_1\,T_1}{p_2 V_2}$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Prüfe die Einheit: Dieser Term hat die Einheit $\tfrac{1}{\text{K}}$, keine Temperatur.'
      - wert: 2
        meldung: 'Höherer Druck bei gleichem Volumen muss eine höhere Temperatur bedeuten. Bei deiner Formel wird $T_2$ kleiner, wenn $p_2$ wächst.'
  - typ: zahl
    label: 'b) Temperatur'
    einheit: °C
    loesung: "(273.15 + 15)*3.5/3.2 - 273.15"
    toleranz: 0.1
    fehler:
      - wert: "15*3.5/3.2"
        meldung: 'Du hast mit °C gerechnet. Die Gasformel gilt nur mit Kelvin. Rechne $15\,°\text{C}$ zuerst in Kelvin um.'
      - wert: "(273.15 + 15)*3.5/3.2"
        meldung: Das ist die Temperatur in Kelvin. Gefragt ist °C. Ziehe noch $273{,}15$ ab.
hinweise:
  - 'Multipliziere mit $T_2$ und mit $T_1$, um beide Nenner loszuwerden. Dividiere dann durch $p_1 V_1$.'
  - 'Bei b) ist $V_1 = V_2$, das kürzt sich. Rechne $T_1$ in Kelvin um, berechne $T_2$ und rechne zurück in °C.'
loesung: |
  **Ansatz:** $T_2$ steht im Nenner. Wir multiplizieren über Kreuz mit $T_1\,T_2$ (beide positiv in Kelvin): $p_1 V_1\,T_2 = p_2 V_2\,T_1$.
  ---
  Division durch $p_1 V_1 > 0$: $T_2 = \frac{p_2 V_2\,T_1}{p_1 V_1}$.
  ---
  Mit $V_1 = V_2$ kürzt sich das Volumen: $T_2 = T_1\cdot\frac{p_2}{p_1}$. In Kelvin ist $T_1 = 15 + 273{,}15 = 288{,}15\,\text{K}$.
  Also $T_2 = 288{,}15\,\text{K}\cdot\frac{3{,}5}{3{,}2} \approx 315{,}16\,\text{K}$.
  ---
  Zurück in °C: $315{,}16 - 273{,}15 \approx 42{,}0\,°\text{C}$. **Antwort:** Die Luft im Reifen hat etwa $42{,}0\,°\text{C}$.
  **Plausibilität:** Der Druck stieg um etwa $9{,}4\,\%$, also auch die Kelvin-Temperatur. $9{,}4\,\%$ von $288\,\text{K}$ sind rund $27\,\text{K}$.
```

```aufgabe
id: gl-formel-pendel
titel: Pendellänge für eine Standuhr
niveau: 3
lernziel: 8
kompetenz: anwenden
angabe: |
  Für die Schwingungsdauer eines Fadenpendels gilt $T = 2\pi\sqrt{\dfrac{l}{g}}$. Dabei ist $l$ die Pendellänge und
  $g = 9{,}81\,\tfrac{\text{m}}{\text{s}^2}$ die Fallbeschleunigung.

  a) Stelle die Formel nach $l$ um.

  b) Eine Standuhr soll die Schwingungsdauer $T = 1{,}5\,\text{s}$ haben. Wie lang muss das Pendel sein? Gib das Ergebnis in Metern auf drei Nachkommastellen an.
teile:
  - typ: auswahl
    label: 'a)'
    optionen:
      - '$l = \dfrac{g\,T^2}{4\pi^2}$'
      - '$l = \dfrac{g\,T}{2\pi}$'
      - '$l = \dfrac{g\,T^2}{2\pi}$'
      - '$l = \dfrac{4\pi^2\,T^2}{g}$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Die Wurzel verschwindet erst durch **Quadrieren**. Du hast nur durch $2\pi$ geteilt und die Wurzel einfach weggelassen.'
      - wert: 2
        meldung: 'Beim Quadrieren wird die ganze Seite quadriert, also auch $2\pi$: $(2\pi)^2 = 4\pi^2$.'
      - wert: 3
        meldung: 'Hier ist $l$ falsch herum aufgelöst. Aus $\tfrac{T^2}{4\pi^2} = \tfrac{l}{g}$ folgt durch Multiplikation mit $g$ das Ergebnis.'
  - typ: zahl
    label: 'b) $l$'
    einheit: m
    loesung: "9.81*1.5^2/(4*pi^2)"
    toleranz: 0.001
hinweise:
  - 'Dividiere zuerst durch $2\pi$, damit die Wurzel allein steht.'
  - 'Quadriere dann beide Seiten. Das ist hier ohne Probe erlaubt, weil beide Seiten positiv sind. Multipliziere zuletzt mit $g$.'
loesung: |
  **Ansatz:** $l$ steht unter einer Wurzel. Wir isolieren die Wurzel und quadrieren. Division durch $2\pi$: $\frac{T}{2\pi} = \sqrt{\frac{l}{g}}$.
  ---
  Quadrieren. Beide Seiten sind positiv, also entsteht keine Scheinlösung: $\frac{T^2}{4\pi^2} = \frac{l}{g}$. Mal $g$: $l = \frac{g\,T^2}{4\pi^2}$.
  ---
  Einsetzen: $l = \frac{9{,}81\cdot 1{,}5^2}{4\pi^2}\,\text{m} = \frac{9{,}81\cdot 2{,}25}{4\pi^2}\,\text{m} \approx 0{,}559\,\text{m}$. **Einheitenkontrolle:** $\frac{\text{m}}{\text{s}^2}\cdot\text{s}^2 = \text{m}$.
  ---
  **Antwort:** Das Pendel muss etwa $0{,}559\,\text{m}$ lang sein, also gut einen halben Meter. **Probe:** $2\pi\sqrt{0{,}559/9{,}81} \approx 1{,}50\,\text{s}$.
```
## Textaufgaben modellieren

```aufgabe
id: gl-text-check
titel: Prozent von einer Zahl
niveau: 1
art: check
lernziel: 8
angabe: |
  Wie viel sind $15\,\%$ von $240$?
  Herkunft: [Kapitel 1, Abschnitt 1.6 Prozentrechnung](/lernen/mathe3/zahlen/prozentrechnung).
teile:
  - typ: zahl
    loesung: "240*15/100"
    fehler:
      - wert: "240/15"
        meldung: '„$15\,\%$ von“ heißt nicht „durch $15$“. Prozent bedeutet „von Hundert“: $15\,\% = \tfrac{15}{100}$. Multipliziere damit.'
      - wert: "240*15"
        meldung: 'Du hast mit $15$ multipliziert, aber das „Prozent“ vergessen. $15\,\%$ ist $\tfrac{15}{100} = 0{,}15$.'
hinweise:
  - '$15\,\% = 0{,}15$. Das Wort „von“ bedeutet „mal“.'
loesung: |
  „$15\,\%$ von $240$“ übersetzt man in $0{,}15\cdot 240$, weil Prozent „Hundertstel“ heißt und „von“ ein Mal ist.
  ---
  $0{,}15\cdot 240 = 36$. Kontrolle: $10\,\%$ sind $24$, $5\,\%$ sind $12$, zusammen $36$.
```

In der Prüfung steht selten „Löse die Gleichung“. Meistens beschreibt die Angabe eine Situation in Worten.
Die Gleichung oder die Formel musst du selbst aufstellen. Diesen Schritt nennt man **Modellieren**:
Man übersetzt die Wirklichkeit in die Sprache der Mathematik. Danach ist die Rechnung oft einfach.

Viele finden diesen Teil am schwersten. Das liegt selten an der Mathematik. Es liegt meistens daran, dass
man ohne festen Plan losrechnet. Mit einem festen Ablauf wird das Übersetzen zur Routine.

:::definition[Variable mit Bedeutung]
Eine **Variable mit Bedeutung** ist ein Buchstabe, zu dem du hinschreibst, wofür er steht und in welcher Einheit.
:::

**Beispiel:** „$t$ … Zeit in Stunden seit $8{:}00$ Uhr“. Damit ist klar, was $t = 1{,}5$ bedeutet, nämlich $9{:}30$ Uhr.

**Nichtbeispiel:** „$x$ … das Auto“. Ein Auto ist keine Zahl. Gemeint ist vielleicht die Strecke, die Zeit oder
die Geschwindigkeit. Mit so einer Variable kann man keine Gleichung aufstellen.

### Vom Text zum Term

Die folgende Tabelle zeigt typische Wendungen und ihre Übersetzung. Dabei ist $x$ irgendeine Größe.

| Im Text steht … | als Term. |
|---|---|
| „um $8\,\%$ mehr als $x$“ | $1{,}08\cdot x$. |
| „um $25\,\%$ weniger als $x$“ | $0{,}75\cdot x$. |
| „$p\,\%$ von $x$“ | $\frac{p}{100}\cdot x$. |
| „$3$ mehr als $x$“ | $x + 3$. |
| „doppelt so groß wie $x$“ | $2x$. |
| „zusammen“ | Summe. |
| „pro Stunde“ | Rate, mal Zeit ergibt Menge. |

:::beispiel[Eine Formel mit Buchstaben aufstellen]
Eine Bäckerei hat drei Filialen. An einem Tag verkaufen sie $x_1$, $x_2$ und $x_3$ Brote. Davon sind
$p_1\,\%$, $p_2\,\%$ und $p_3\,\%$ Vollkornbrote. Gesucht ist eine Formel für die Gesamtzahl $N$ der Vollkornbrote.

1. **Variablen:** $N$ … Anzahl der Vollkornbrote in allen drei Filialen zusammen.
2. **Übersetzen:** „$p_1\,\%$ von $x_1$“ ist $\frac{p_1}{100}\cdot x_1$. Das ist die Zahl der Vollkornbrote in Filiale 1.
3. **Zusammensetzen:** „Gesamtzahl“ heißt addieren: $N = \frac{p_1 x_1}{100} + \frac{p_2 x_2}{100} + \frac{p_3 x_3}{100} = \frac{p_1 x_1 + p_2 x_2 + p_3 x_3}{100}$.
4. **Kontrolle mit einfachen Zahlen:** Für $x_1 = 100$, $p_1 = 10$ und $x_2 = x_3 = 0$ ergibt die Formel $10$. Das sind tatsächlich $10\,\%$ von $100$ Broten.

Der **Anteil** der Vollkornbrote an allen Broten ist dann $\frac{N}{x_1 + x_2 + x_3}$.
:::

:::achtung[Prozentsätze nicht einfach mitteln]
Eine häufige Fehlrechnung: Filiale 1 verkauft $100$ Brote mit $50\,\%$ Vollkorn, Filiale 2 verkauft $300$ Brote mit $10\,\%$ Vollkorn.
„Im Schnitt sind es $\frac{50 + 10}{2} = 30\,\%$.“ Das ist falsch.

Richtig: Es sind $50 + 30 = 80$ Vollkornbrote von $400$ Broten, also $\frac{80}{400} = 20\,\%$. Die große Filiale
muss stärker zählen. Der einfache Mittelwert stimmt nur, wenn alle Filialen gleich viele Brote verkaufen.
:::

:::pruefung
Steht in der Angabe „Stellen Sie eine Formel auf“, wird eine **Formel mit den Buchstaben der Angabe** erwartet.
Ein Zahlenbeispiel reicht nicht. Schreib zu jedem Teil kurz dazu, was er bedeutet. Zum Beispiel: „$\frac{p_1 x_1}{100}$ ist die
Zahl der Vollkornbrote in Filiale 1.“ Eine Kontrolle mit einfachen Zahlen zeigt dir und den Prüfenden, dass die Formel stimmt.
:::

### Mischungen und Bewegungen

Zwei Aufgabentypen kommen immer wieder. Bei **Mischungen** bleibt eine Menge erhalten, etwa der Fruchtanteil
oder der Gesamtpreis. Bei **Bewegungen** gilt Weg gleich Geschwindigkeit mal Zeit, also $s = v\cdot t$.

:::beispiel[Saft verdünnen]
Reiner Orangensaft ($100\,\%$ Frucht) und ein Nektar mit $40\,\%$ Frucht sollen $12$ Liter Getränk mit $60\,\%$ Frucht ergeben.

1. **Variablen:** $x$ … Liter reiner Saft. Dann sind es $12 - x$ Liter Nektar, weil zusammen $12$ Liter entstehen.
2. **Erhaltene Größe:** Die Fruchtmenge in Litern. Im Saft stecken $1\cdot x$, im Nektar $0{,}4\,(12 - x)$, in der Mischung $0{,}6\cdot 12 = 7{,}2$.
3. **Gleichung:** $x + 0{,}4\,(12 - x) = 7{,}2$. Ausmultiplizieren: $x + 4{,}8 - 0{,}4x = 7{,}2$, also $0{,}6x = 2{,}4$ und $x = 4$.
4. **Prüfen:** $4\,\text{L}$ Saft und $8\,\text{L}$ Nektar. Fruchtmenge: $4 + 3{,}2 = 7{,}2\,\text{L}$, das sind $60\,\%$ von $12\,\text{L}$.

**Antwort:** Man mischt $4$ Liter Saft mit $8$ Litern Nektar.
:::

:::beispiel[Das Moped holt die Radfahrerin ein]
Eine Radfahrerin fährt um $8{:}00$ Uhr los, mit $18\,\tfrac{\text{km}}{\text{h}}$. Um $9{:}00$ Uhr folgt ein Moped auf derselben Straße mit $45\,\tfrac{\text{km}}{\text{h}}$.
Wann und wo holt es sie ein?

1. **Variablen:** $t$ … Zeit in Stunden seit $8{:}00$ Uhr. Das Moped fährt erst ab $t = 1$, also $t - 1$ Stunden lang.
2. **Übersetzen:** Weg der Radfahrerin $18t$, Weg des Mopeds $45\,(t - 1)$, beide in km.
3. **Gleichung:** Beim Einholen sind beide Wege gleich: $18t = 45t - 45$. Also $27t = 45$ und $t = \frac{45}{27} = \frac53\,\text{h}$.
4. **Deuten:** $\frac53\,\text{h}$ sind $1\,\text{h}\,40\,\text{min}$. Treffpunkt $9{:}40$ Uhr, $18\cdot\frac53 = 30\,\text{km}$ vom Start.

**Probe:** Das Moped fährt $\frac23\,\text{h}$ lang und schafft $45\cdot\frac23 = 30\,\text{km}$. Es stimmt.
:::

:::achtung[Rabatt rückwärts gerechnet]
Ein Mantel kostet nach $25\,\%$ Rabatt $60$ Euro. Wie viel kostete er vorher? Eine typische Fehlrechnung:
„$60 + 0{,}25\cdot 60 = 75$ Euro.“

Der Fehler: Die $25\,\%$ beziehen sich auf den **alten** Preis, nicht auf $60$ Euro. Richtig ist der Ansatz
$0{,}75\cdot x = 60$, also $x = 80$ Euro. **Probe:** $25\,\%$ von $80$ sind $20$, und $80 - 20 = 60$. Bei $75$ Euro wären es nur $56{,}25$ Euro.
:::

:::merke[Textaufgaben in fünf Schritten]
1. **Variablen festlegen**, mit Bedeutung und Einheit.
2. **Beziehungen übersetzen**, Satz für Satz, mit der Tabelle „Vom Text zum Term“.
3. **Gleichung aufstellen** und lösen.
4. **Ergebnis prüfen:** Ist es positiv, ganzzahlig, realistisch? Lösungen, die im Sachzusammenhang unmöglich sind, verwerfen.
5. **Antwortsatz** mit Einheit schreiben.
:::

```reflexion
frage: Warum lohnt es sich, eine aufgestellte Formel mit ganz einfachen Zahlen zu testen, etwa mit 100 und 10 %? Was kann so ein Test zeigen und was nicht?
antwort: |
  Mit einfachen Zahlen kennst du das richtige Ergebnis schon im Kopf. Liefert die Formel etwas anderes, ist sie
  sicher falsch. So entdeckst du vergessene Faktoren wie das $\frac{1}{100}$ beim Prozent oder vertauschte Größen.
  Ein bestandener Test beweist aber nicht, dass die Formel stimmt. Ein Fehler kann bei den gewählten Zahlen
  zufällig verschwinden. Zum Beispiel stimmt der gemittelte Prozentsatz, wenn alle Mengen gleich groß sind.
  Deshalb testet man am besten mit ungleichen Zahlen.
```

```aufgabe
id: gl-text-rabatt
titel: Preis vor dem Rabatt
niveau: 1
lernziel: 8
kompetenz: modellieren
angabe: |
  Ein Fahrradhelm kostet nach einem Rabatt von $20\,\%$ noch $68$ Euro. Wie viel kostete er vor dem Rabatt?
teile:
  - typ: zahl
    einheit: Euro
    loesung: "68/0.8"
    fehler:
      - wert: "68*1.2"
        meldung: 'Die $20\,\%$ beziehen sich auf den alten Preis, nicht auf $68$ Euro. Prüfe: $20\,\%$ Rabatt auf deinen Preis ergibt nicht $68$.'
      - wert: "68*0.8"
        meldung: Du hast noch einmal Rabatt abgezogen. Gesucht ist aber der Preis davor, der größer als $68$ Euro sein muss.
hinweise:
  - 'Nennt man den alten Preis $x$, bleiben nach dem Rabatt $80\,\%$ davon übrig: $0{,}8\cdot x = 68$.'
loesung: |
  **Ansatz:** $x$ … alter Preis in Euro. Nach $20\,\%$ Rabatt bleiben $80\,\%$, also $0{,}8\,x = 68$.
  ---
  Division durch $0{,}8$: $x = 85$. **Probe:** $20\,\%$ von $85$ sind $17$, und $85 - 17 = 68$. Der Helm kostete $85$ Euro.
```

```aufgabe
id: gl-zug-zahlen
titel: Brillenanteil in drei Klassen
niveau: 1
lernziel: 8
kompetenz: rechnen
angabe: |
  In drei Klassen sitzen $12$, $30$ und $18$ Kinder. Davon tragen $50\,\%$, $10\,\%$ und $50\,\%$ eine Brille.

  a) Wie viele Kinder tragen insgesamt eine Brille?

  b) Wie viel Prozent aller Kinder der drei Klassen sind das?
teile:
  - typ: zahl
    label: 'a)'
    loesung: "(12*50 + 30*10 + 18*50)/100"
    fehler:
      - wert: "110"
        meldung: Du hast die Prozentsätze addiert. Gefragt ist eine Anzahl von Kindern. Berechne für jede Klasse, wie viele Kinder das sind.
  - typ: zahl
    label: 'b)'
    einheit: '%'
    loesung: "18/60*100"
    fehler:
      - wert: "110/3"
        meldung: 'Das ist der einfache Mittelwert der Prozentsätze. Die große Klasse mit $10\,\%$ muss aber stärker zählen. Teile die Gesamtzahl aus a) durch die Zahl aller Kinder.'
hinweise:
  - 'Berechne für jede Klasse „Prozentsatz von Kinderzahl“ und addiere.'
loesung: |
  **Ansatz:** Je Klasse „$p\,\%$ von $x$“, also $\frac{p\cdot x}{100}$, dann addieren: $\frac{12\cdot 50 + 30\cdot 10 + 18\cdot 50}{100} = 6 + 3 + 9 = 18$.
  ---
  Anteil an allen $12 + 30 + 18 = 60$ Kindern: $\frac{18}{60} = 0{,}3 = 30\,\%$. Der einfache Mittelwert $\frac{50 + 10 + 50}{3} \approx 36{,}7\,\%$ wäre falsch, weil die große Klasse den kleinsten Anteil hat. **Antwort:** $18$ Kinder, das sind $30\,\%$.
```

```aufgabe
id: gl-text-fermi
titel: Ein tropfender Wasserhahn
niveau: 1
lernziel: 8
kompetenz: anwenden
angabe: |
  Ein Wasserhahn tropft. Pro Sekunde fällt etwa ein Tropfen, ein Tropfen hat etwa $0{,}05\,\text{ml}$.
  Wie viel Wasser geht in einem Jahr ungefähr verloren? Wähle die passende Größenordnung.
teile:
  - typ: auswahl
    optionen:
      - 'etwa $1{,}6$ Liter'
      - 'etwa $16$ Liter'
      - 'etwa $160$ Liter'
      - 'etwa $1600$ Liter'
    richtig: [3]
    fehler:
      - wert: 0
        meldung: 'Ein Tag hat $86\,400$ Sekunden, schon an einem Tag kommen über $4$ Liter zusammen. Rechne die Sekunden eines Jahres aus.'
      - wert: 1
        meldung: 'Das ist um den Faktor $100$ zu wenig. Schon an einem Tag tropfen über $4$ Liter. Ein Jahr hat rund $31{,}5$ Millionen Sekunden.'
      - wert: 2
        meldung: 'Prüfe die Umrechnung: $1000\,\text{ml}$ sind $1$ Liter, nicht $10\,000\,\text{ml}$.'
hinweise:
  - 'Ein Jahr hat $365\cdot 24\cdot 3600 \approx 31{,}5$ Millionen Sekunden.'
  - 'Tropfen mal Volumen ergibt Milliliter. Teile durch $1000$, um Liter zu erhalten.'
loesung: |
  **Ansatz:** Menge $=$ Rate mal Zeit. Ein Jahr hat $365\cdot 86\,400 = 31\,536\,000$ Sekunden, also ebenso viele Tropfen.
  ---
  $31\,536\,000\cdot 0{,}05\,\text{ml} = 1\,576\,800\,\text{ml} \approx 1577\,\text{L}$. **Antwort:** Es sind rund $1600$ Liter, also etwa zehn volle Badewannen.
```

```aufgabe
id: gl-zug-formel
titel: Beschädigte Pakete in vier Wochen
niveau: 2
lernziel: 8
kompetenz: modellieren
quelle: "nach Musterprüfung Schranz-Kirlinger 1.3 (abgewandelt)"
angabe: |
  Ein Paketdienst stellt in vier aufeinanderfolgenden Wochen $a_1$, $a_2$, $a_3$ und $a_4$ Pakete zu. Davon werden jeweils
  $s_1$, $s_2$, $s_3$ und $s_4$ **Promille** beschädigt. Ein Promille ist ein Tausendstel, $1$ ‰ $= \tfrac{1}{1000}$.

  a) Welche Formel gibt die Gesamtzahl $B$ der beschädigten Pakete in den vier Wochen an?

  b) Welche Formel gibt den Anteil $A$ der beschädigten Pakete an allen Paketen in Promille an?
teile:
  - typ: auswahl
    label: 'a)'
    optionen:
      - '$B = \dfrac{a_1 s_1 + a_2 s_2 + a_3 s_3 + a_4 s_4}{1000}$'
      - '$B = \dfrac{a_1 s_1 + a_2 s_2 + a_3 s_3 + a_4 s_4}{100}$'
      - '$B = \dfrac{s_1 + s_2 + s_3 + s_4}{4}\cdot\dfrac{a_1 + a_2 + a_3 + a_4}{1000}$'
      - '$B = a_1 s_1 + a_2 s_2 + a_3 s_3 + a_4 s_4$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Hier wurde mit Prozent gerechnet. Promille heißt aber „von Tausend“. Teste mit $a_1 = 1000$, $s_1 = 2$: Es müssen $2$ Pakete herauskommen.'
      - wert: 2
        meldung: 'Diese Formel mittelt die Promillesätze. Das stimmt nur, wenn jede Woche gleich viele Pakete hat. Eine Woche mit vielen Paketen muss stärker zählen.'
      - wert: 3
        meldung: 'Das „Promille“ fehlt. Mit $a_1 = 1000$ und $s_1 = 2$ ergäbe diese Formel $2000$ beschädigte Pakete statt $2$.'
  - typ: auswahl
    label: 'b)'
    optionen:
      - '$A = \dfrac{s_1 + s_2 + s_3 + s_4}{4}$'
      - '$A = \dfrac{a_1 s_1 + a_2 s_2 + a_3 s_3 + a_4 s_4}{a_1 + a_2 + a_3 + a_4}$'
      - '$A = \dfrac{a_1 + a_2 + a_3 + a_4}{a_1 s_1 + a_2 s_2 + a_3 s_3 + a_4 s_4}$'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Der einfache Mittelwert behandelt alle Wochen gleich. Richtig ist ein **gewichteter** Mittelwert: Jede Woche zählt mit ihrer Paketzahl.'
      - wert: 2
        meldung: 'Ein Anteil ist „Teil durch Ganzes“. Hier stehen Teil und Ganzes vertauscht.'
hinweise:
  - 'Wie viele beschädigte Pakete gab es allein in Woche 1? Übersetze „$s_1$ Promille von $a_1$“.'
  - 'Addiere die vier Wochen für $B$. Für den Anteil in Promille teilst du $B$ durch alle Pakete und multiplizierst mit $1000$.'
loesung: |
  **Ansatz:** „$s_1$ Promille von $a_1$“ übersetzt man in $\frac{s_1}{1000}\cdot a_1$, weil Promille „Tausendstel“ heißt.
  ---
  **a)** Gesamtzahl heißt addieren: $B = \frac{a_1 s_1 + a_2 s_2 + a_3 s_3 + a_4 s_4}{1000}$.
  ---
  **b)** Anteil $=$ Teil durch Ganzes, in Promille mal $1000$: $A = \frac{B}{a_1 + a_2 + a_3 + a_4}\cdot 1000 = \frac{a_1 s_1 + a_2 s_2 + a_3 s_3 + a_4 s_4}{a_1 + a_2 + a_3 + a_4}$.
  ---
  **Kontrolle:** Mit $a_1 = 1000$, $s_1 = 2$ und sonst $0$ Paketen ergibt a) $2$ Pakete und b) $2$ ‰. Das passt.
```

```aufgabe
id: gl-mischung
titel: Teemischung
niveau: 2
lernziel: 8
kompetenz: modellieren
angabe: |
  Ein Teeladen mischt eine Sorte zu $24$ Euro/kg mit einer Sorte zu $36$ Euro/kg. Es sollen $30\,\text{kg}$ einer Mischung
  zu $28$ Euro/kg entstehen. Wie viel kg braucht man von jeder Sorte?
teile:
  - typ: zahl
    label: 'Sorte zu 24 Euro/kg'
    einheit: kg
    loesung: "(36*30 - 28*30)/(36 - 24)"
    fehler:
      - wert: "15"
        meldung: 'Gleich viel von beiden Sorten ergäbe den Mittelpreis $30$ Euro/kg. Die Mischung soll aber billiger sein, also braucht man mehr von der billigen Sorte.'
      - wert: "10"
        meldung: Du hast die Mengen vertauscht. Die Mischung liegt näher am billigen Preis, also überwiegt die billige Sorte.
  - typ: zahl
    label: 'Sorte zu 36 Euro/kg'
    einheit: kg
    loesung: "30 - (36*30 - 28*30)/(36 - 24)"
    fehler:
      - wert: "20"
        meldung: Du hast die Mengen vertauscht. Die teure Sorte macht den kleineren Teil aus.
hinweise:
  - 'Sei $x$ die Menge der billigen Sorte in kg. Dann sind es $30 - x$ kg der teuren.'
  - 'Der Gesamtwert bleibt gleich: $24x + 36\,(30 - x) = 28\cdot 30$.'
loesung: |
  **Ansatz:** $x$ … kg der Sorte zu $24$ Euro. Dann $30 - x$ kg der Sorte zu $36$ Euro. Erhalten bleibt der Gesamtwert in Euro.
  ---
  $24x + 36\,(30 - x) = 28\cdot 30$. Ausmultiplizieren: $24x + 1080 - 36x = 840$, also $-12x = -240$ und $x = 20$.
  ---
  **Antwort:** $20\,\text{kg}$ der Sorte zu $24$ Euro und $10\,\text{kg}$ der Sorte zu $36$ Euro. **Probe:** $480 + 360 = 840 = 28\cdot 30$.
gefuehrt:
  - text: Lege die Variable fest. Wenn $x$ die Menge der billigen Sorte ist, wie viel kg sind es von der teuren?
    teil:
      typ: term
      variable: x
      loesung: "30 - x"
      fehler:
        - wert: "x - 30"
          meldung: 'Zusammen sollen es $30$ kg sein. Von $30$ wird die billige Menge abgezogen, nicht umgekehrt.'
    erklaerung: 'Zusammen sind es $30$ kg, also $30 - x$ kg teure Sorte.'
  - text: Welcher Wert in Euro hat die ganze Mischung?
    teil:
      typ: zahl
      loesung: "28*30"
      fehler:
        - wert: "28"
          meldung: '$28$ Euro ist der Preis für **ein** Kilogramm. Die Mischung hat $30$ kg.'
    erklaerung: '$28\cdot 30 = 840$ Euro.'
  - text: Stelle die Gleichung „Wert billig plus Wert teuer gleich Wert der Mischung“ auf und löse sie.
    teil:
      typ: zahl
      loesung: "20"
    erklaerung: '$24x + 36\,(30 - x) = 840$ ergibt $-12x = -240$, also $x = 20$.'
  - text: Prüfe das Ergebnis mit dem Gesamtwert.
    erklaerung: '$20\cdot 24 + 10\cdot 36 = 480 + 360 = 840$. Es stimmt.'
```

```aufgabe
id: gl-text-bewegung
titel: Zwei Züge auf einer Strecke
niveau: 2
lernziel: 8
kompetenz: modellieren
angabe: |
  Die Städte A und B liegen $300\,\text{km}$ auseinander. Um $10{:}00$ Uhr fährt ein Zug von A nach B mit $120\,\tfrac{\text{km}}{\text{h}}$.
  Um $10{:}30$ Uhr fährt ein Zug von B nach A mit $80\,\tfrac{\text{km}}{\text{h}}$.

  a) Wie viele Stunden nach $10{:}00$ Uhr begegnen sie sich?

  b) Wie weit von A entfernt ist der Treffpunkt?
teile:
  - typ: zahl
    label: 'a) $t$'
    einheit: h
    loesung: "(300 + 80*0.5)/(120 + 80)"
    fehler:
      - wert: "300/200"
        meldung: 'Du hast die halbe Stunde Verspätung des zweiten Zuges nicht berücksichtigt. Er fährt nur $t - 0{,}5$ Stunden.'
      - wert: "(300 - 80*0.5)/(120 + 80)"
        meldung: 'Prüfe das Vorzeichen: Aus $80\,(t - 0{,}5)$ wird $80t - 40$. Bringst du $-40$ auf die andere Seite, wird es $+40$.'
  - typ: zahl
    label: 'b)'
    einheit: km
    loesung: "120*(300 + 80*0.5)/(120 + 80)"
    fehler:
      - wert: "180"
        meldung: 'Mit $t = 1{,}5$ hast du die Verspätung des zweiten Zuges übersehen.'
hinweise:
  - '$t$ … Stunden seit $10{:}00$ Uhr. Der erste Zug fährt $120t$ km, der zweite $80\,(t - 0{,}5)$ km.'
  - 'Bei der Begegnung haben beide zusammen die ganze Strecke zurückgelegt: $120t + 80\,(t - 0{,}5) = 300$.'
loesung: |
  **Ansatz:** $t$ … Zeit in Stunden seit $10{:}00$ Uhr. Der zweite Zug startet eine halbe Stunde später und fährt $t - 0{,}5$ Stunden. Beim Treffen ergeben beide Wege zusammen $300$ km.
  ---
  $120t + 80\,(t - 0{,}5) = 300$. Ausmultiplizieren: $200t - 40 = 300$, also $200t = 340$ und $t = 1{,}7\,\text{h}$.
  ---
  Weg des ersten Zuges: $120\cdot 1{,}7 = 204\,\text{km}$. **Probe:** Der zweite Zug fährt $1{,}2\,\text{h}$ und schafft $96\,\text{km}$. $204 + 96 = 300$.
  ---
  **Antwort:** Die Züge begegnen sich $1{,}7\,\text{h}$ nach $10{:}00$ Uhr, also um $11{:}42$ Uhr, $204\,\text{km}$ von A entfernt.
```

```aufgabe
id: gl-text-maeher
titel: Zwei Rasenmäher
niveau: 2
lernziel: 8
kompetenz: rechnen
angabe: |
  Mäher A schafft eine Wiese allein in $5$ Stunden. Mit Mäher B zusammen dauert es $2$ Stunden. Wie lange bräuchte
  Mäher B allein? Gib das Ergebnis in Stunden an (Bruch oder Dezimalzahl).
teile:
  - typ: zahl
    einheit: h
    loesung: "1/(1/2 - 1/5)"
    fehler:
      - wert: "3"
        meldung: 'Zeiten darf man nicht einfach subtrahieren. Addieren lassen sich nur die Arbeitsraten, also die Anteile der Wiese pro Stunde.'
      - wert: "3/10"
        meldung: 'Das ist die Rate von B, also der Anteil der Wiese pro Stunde. Gefragt ist die Zeit für die ganze Wiese, der Kehrwert.'
hinweise:
  - 'Braucht A allein $5$ Stunden, schafft A pro Stunde $\tfrac15$ der Wiese.'
  - 'Mit $x$ … Stunden für B allein gilt: $\tfrac15 + \tfrac1x = \tfrac12$.'
loesung: |
  **Ansatz:** Die Raten (Wiese pro Stunde) addieren sich. A schafft $\frac15$, B schafft $\frac1x$, beide zusammen $\frac12$.
  ---
  $\frac15 + \frac1x = \frac12$, also $\frac1x = \frac12 - \frac15 = \frac{3}{10}$. Kehrwert: $x = \frac{10}{3} \approx 3{,}33$.
  ---
  **Antwort:** Mäher B bräuchte allein $\frac{10}{3}\,\text{h}$, also $3$ Stunden $20$ Minuten. **Probe:** $\frac15 + \frac{3}{10} = \frac{5}{10} = \frac12$. **Plausibilität:** B ist schneller als A, denn gemeinsam geht es mehr als doppelt so schnell wie mit A allein.
```

```aufgabe
id: gl-text-alter
titel: Fehler im Ansatz finden
niveau: 2
lernziel: 8
kompetenz: begruenden
angabe: |
  „Ein Vater ist viermal so alt wie sein Sohn. In $20$ Jahren ist er nur noch doppelt so alt.“
  Max nennt das Alter des Sohnes $x$ und setzt an: $4x + 20 = 2x + 20$. Er erhält $x = 0$.

  a) Welcher Ansatz ist richtig?

  b) Wie alt ist der Sohn heute?
teile:
  - typ: auswahl
    label: 'a)'
    optionen:
      - '$4x + 20 = 2x + 20$'
      - '$4x + 20 = 2\,(x + 20)$'
      - '$4\,(x + 20) = 2x$'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'In $20$ Jahren ist auch der Sohn älter. „Doppelt so alt“ bezieht sich auf das **neue** Alter des Sohnes, also auf $x + 20$, und das ganze Alter wird verdoppelt.'
      - wert: 2
        meldung: 'Das Vierfache gilt **heute**, nicht in $20$ Jahren. Der Vater ist heute $4x$ und in $20$ Jahren $4x + 20$ Jahre alt.'
  - typ: zahl
    label: 'b) Alter des Sohnes'
    einheit: Jahre
    loesung: "10"
    fehler:
      - wert: "0"
        meldung: Ein Sohn mit $0$ Jahren und ein Vater mit $0$ Jahren ist unmöglich. Das zeigt, dass der Ansatz falsch ist.
hinweise:
  - Schreib zuerst getrennt auf, wie alt Vater und Sohn heute und in $20$ Jahren sind.
  - '„Doppelt so alt“ heißt: Alter des Vaters $= 2\cdot$ Alter des Sohnes, beide in $20$ Jahren.'
loesung: |
  **Ansatz:** Heute: Sohn $x$, Vater $4x$. In $20$ Jahren: Sohn $x + 20$, Vater $4x + 20$.
  ---
  „Doppelt so alt“ in $20$ Jahren: $4x + 20 = 2\,(x + 20)$. Max hat die Klammer vergessen und nur das heutige Alter verdoppelt.
  ---
  $4x + 20 = 2x + 40$, also $2x = 20$ und $x = 10$. **Probe:** Heute $10$ und $40$. In $20$ Jahren $30$ und $60$, und $60 = 2\cdot 30$. Der Sohn ist $10$ Jahre alt.
```

```aufgabe
id: gl-text-konzert
titel: Ticketpreis und Einnahmen
niveau: 3
lernziel: 8
kompetenz: modellieren
angabe: |
  Bei einem Ticketpreis von $40$ Euro kommen $2000$ Besucher. Jede Preissenkung um $1$ Euro bringt erfahrungsgemäß
  $100$ Besucher mehr.

  a) Bei welchen Ticketpreisen nimmt der Veranstalter genau $89\,100$ Euro ein? Gib beide Preise in Euro an, durch Strichpunkt getrennt.

  b) Wie viele Besucher kommen beim höheren dieser Preise?
teile:
  - typ: menge
    label: 'a) Preise'
    loesung: ["33", "27"]
    fehler:
      - wert: ["7", "13"]
        meldung: Das sind die Preissenkungen in Euro. Gefragt sind die Ticketpreise selbst, also $40$ minus Senkung.
  - typ: zahl
    label: 'b) Besucher'
    loesung: "2000 + 100*7"
hinweise:
  - '$x$ … Preissenkung in Euro. Dann ist der Preis $40 - x$ und die Besucherzahl $2000 + 100x$.'
  - 'Einnahmen $=$ Preis mal Besucher: $(40 - x)(2000 + 100x) = 89\,100$. Ausmultiplizieren und durch $-100$ dividieren.'
loesung: |
  **Ansatz:** $x$ … Preissenkung in Euro. Preis $40 - x$ Euro, Besucher $2000 + 100x$. Einnahmen sind Preis mal Besucherzahl.
  ---
  $(40 - x)(2000 + 100x) = 89\,100$. Ausmultiplizieren: $80\,000 + 4000x - 2000x - 100x^2 = 89\,100$, also $-100x^2 + 2000x - 9100 = 0$.
  ---
  Division durch $-100$: $x^2 - 20x + 91 = 0$. Lösungsformel: $x = 10 \pm\sqrt{100 - 91} = 10 \pm 3$, also $x = 7$ oder $x = 13$.
  ---
  Preise: $40 - 7 = 33$ Euro und $40 - 13 = 27$ Euro. Beim höheren Preis kommen $2000 + 700 = 2700$ Besucher.
  ---
  **Probe:** $33\cdot 2700 = 89\,100$ und $27\cdot 3300 = 89\,100$. **Antwort:** Bei $33$ Euro und bei $27$ Euro nimmt er $89\,100$ Euro ein. Beim Preis $33$ Euro kommen $2700$ Besucher.
```
## Nichtlineare Gleichungssysteme

```aufgabe
id: gl-system-check
titel: Wie viele Lösungen?
niveau: 1
art: check
lernziel: 9
angabe: |
  Wie viele reelle Lösungen hat die Gleichung $x^2 - 4x + 4 = 0$?
  Herkunft: [2.3 Quadratische Gleichungen](/lernen/mathe3/gleichungen/quadratische-gleichungen).
teile:
  - typ: auswahl
    optionen: ['keine', 'genau eine', 'genau zwei']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Keine reelle Lösung gibt es nur, wenn die Diskriminante negativ ist. Rechne $\left(\tfrac p2\right)^2 - q$ mit $p = -4$ und $q = 4$ aus.'
      - wert: 2
        meldung: 'Zwei Lösungen gibt es nur, wenn die Diskriminante positiv ist. Hier ist sie genau $0$. Erkennst du eine binomische Formel?'
hinweise:
  - 'Berechne $D = \left(\tfrac p2\right)^2 - q$ mit $p = -4$ und $q = 4$.'
loesung: |
  $D = \left(\tfrac{-4}{2}\right)^2 - 4 = 4 - 4 = 0$. Bei $D = 0$ gibt es genau eine Lösung.
  ---
  Tatsächlich ist $x^2 - 4x + 4 = (x - 2)^2$. Die einzige Lösung ist $x = 2$, eine doppelte Lösung.
```

Bisher hatte jede Gleichung **eine** Unbekannte. Oft gibt es aber zwei Unbekannte, die zwei Bedingungen
gleichzeitig erfüllen müssen. Dann hat man ein **Gleichungssystem**. Ein typisches Beispiel ist die Frage:
Wo schneidet eine Gerade eine Parabel? Ein Schnittpunkt liegt auf beiden Graphen, seine Koordinaten erfüllen
also beide Gleichungen.

Sind beide Gleichungen linear, heißt das System **linear**. Solche Systeme behandelt [Kapitel 3](/lernen/mathe3/lgs-matrizen/systeme-mit-zwei-unbekannten)
ausführlich. In diesem Abschnitt kommt in mindestens einer Gleichung ein Quadrat oder ein Produkt der Unbekannten vor.

:::definition[Nichtlineares Gleichungssystem]
Ein **Gleichungssystem** besteht aus mehreren Gleichungen, die **gleichzeitig** gelten sollen. Eine Lösung ist ein
Zahlenpaar $(x \mid y)$, das alle Gleichungen erfüllt. Das System heißt **nichtlinear**, wenn in mindestens einer
Gleichung eine Unbekannte quadriert, mit einer anderen multipliziert oder anders nichtlinear vorkommt.
:::

**Beispiel:** $y = x^2$ und $y = x + 2$ bilden ein nichtlineares System, denn $x$ kommt im Quadrat vor.
Das Paar $(2 \mid 4)$ ist eine Lösung: $4 = 2^2$ und $4 = 2 + 2$.

**Nichtbeispiel:** $2x + y = 5$ und $x - y = 1$ ist ein **lineares** System. Beide Unbekannten kommen nur
in der ersten Potenz vor.

**Nichtbeispiel für eine Lösung:** Nicht jedes Paar löst das System aus $y = x^2$ und $y = x + 2$. Das Paar
$(1 \mid 3)$ erfüllt zwar $y = x + 2$, aber nicht $y = x^2$, denn $1^2 = 1 \neq 3$. Es ist deshalb keine Lösung.

### Gerade und Parabel schneiden

Das Werkzeug heißt **Einsetzen** oder **Gleichsetzen**. Stehen beide Gleichungen in der Form $y = \ldots$, setzt
man die rechten Seiten gleich. Dann bleibt eine Gleichung mit der einen Unbekannten $x$ übrig. Mit jeder Lösung
$x$ berechnet man danach das zugehörige $y$.

:::beispiel[Schnittpunkte von Parabel und Gerade]
Gesucht sind die Schnittpunkte von $y = x^2 - 2x - 1$ und $y = x + 3$.

1. **Gleichsetzen:** Im Schnittpunkt haben beide Graphen denselben $y$-Wert: $x^2 - 2x - 1 = x + 3$.
2. **Alles auf eine Seite:** Wir ziehen $x$ und $3$ ab: $x^2 - 3x - 4 = 0$.
3. **Lösen:** Zerlegen in $(x - 4)(x + 1) = 0$. Nullproduktsatz: $x = 4$ oder $x = -1$.
4. **$y$-Werte:** Wir setzen in die einfachere Gleichung $y = x + 3$ ein. Für $x = 4$ ist $y = 7$, für $x = -1$ ist $y = 2$.
5. **Probe in der anderen Gleichung:** $16 - 8 - 1 = 7$ und $1 + 2 - 1 = 2$. Beide stimmen.

Die Schnittpunkte sind $S_1 = (4 \mid 7)$ und $S_2 = (-1 \mid 2)$.
:::

```plot
x: [-3, 6]
y: [-3, 10]
achsen: { x: "x", y: "y" }
graphen:
  - { f: "x^2 - 2*x - 1", label: "y = x² − 2x − 1", farbe: 0 }
  - { f: "x + 3", label: "y = x + 3", farbe: 1 }
punkte:
  - { x: 4, y: 7, label: "S₁ (4 | 7)" }
  - { x: -1, y: 2, label: "S₂ (−1 | 2)" }
beschriftung: Die Gerade y = x + 3 schneidet die Parabel y = x² − 2x − 1 in den zwei Punkten (4 | 7) und (−1 | 2). Diese beiden Zahlenpaare sind die Lösungen des Gleichungssystems.
```

:::achtung[Nur die x-Werte angegeben]
Eine häufige unvollständige Antwort zum Beispiel „Schnittpunkte von Parabel und Gerade“: „$L = \{4; -1\}$.“
Gesucht waren aber **Punkte**, also Zahlenpaare. Zu jedem $x$ gehört genau ein $y$.

Ebenso falsch ist es, die $y$-Werte zu vertauschen, etwa $(4 \mid 2)$ und $(-1 \mid 7)$. Probe: $(4 \mid 2)$ liegt nicht auf
$y = x + 3$, denn $4 + 3 = 7 \neq 2$. Richtig sind $(4 \mid 7)$ und $(-1 \mid 2)$. Berechne jedes $y$ direkt aus seinem $x$.
:::

:::achtung[Vorzeichenfehler beim Hinüberbringen]
Eine typische Fehlrechnung beim Gleichsetzen:
$$x^2 - 2x - 1 = x + 3 \quad\Longrightarrow\quad x^2 - x - 4 = 0. \qquad\text{(falsch)}$$
Beim Abziehen von $x$ wird aus $-2x$ der Term $-2x - x = -3x$, nicht $-x$. Richtig ist $x^2 - 3x - 4 = 0$.
Die falsche Gleichung hätte die Lösungen $\frac{1 \pm\sqrt{17}}{2}$. Die Probe würde sofort zeigen, dass diese Punkte nicht auf beiden Graphen liegen.
:::

### Wie viele Schnittpunkte gibt es?

Beim Gleichsetzen von Gerade und Parabel entsteht immer eine **quadratische** Gleichung. Ihre Diskriminante,
also der Ausdruck unter der Wurzel der Lösungsformel, entscheidet über die Zahl der Schnittpunkte:

- Diskriminante positiv: zwei Schnittpunkte. Die Gerade heißt dann **Sekante**.
- Diskriminante null: ein gemeinsamer Punkt. Die Gerade **berührt** die Parabel, sie ist eine **Tangente**.
- Diskriminante negativ: kein gemeinsamer Punkt. Die Gerade heißt **Passante**.

:::beispiel[Für welche Steigung berührt die Gerade?]
Die Gerade $y = kx$ geht durch den Ursprung und hat die Steigung $k$. Wann berührt sie die Parabel $y = x^2 + 1$?

1. **Gleichsetzen:** $x^2 + 1 = kx$, also $x^2 - kx + 1 = 0$.
2. **Diskriminante:** Mit $p = -k$ und $q = 1$ ist $D = \frac{k^2}{4} - 1$.
3. **Berühren heißt $D = 0$:** $\frac{k^2}{4} = 1$, also $k^2 = 4$ und $k = 2$ oder $k = -2$.
4. **Berührpunkt für $k = 2$:** $x^2 - 2x + 1 = (x - 1)^2 = 0$, also $x = 1$ und $y = 2$.

**Deutung:** Für $|k| > 2$ schneidet die Gerade die Parabel zweimal, für $|k| < 2$ gar nicht.
:::

```plot
x: [-1, 3.5]
y: [-1, 8]
achsen: { x: "x", y: "y" }
graphen:
  - { f: "x^2 + 1", label: "y = x² + 1", farbe: 0 }
  - { f: "3*x", label: "k = 3", farbe: 1 }
  - { f: "2*x", label: "k = 2", farbe: 2 }
  - { f: "x", label: "k = 1", farbe: 3, gestrichelt: true }
punkte:
  - { x: 1, y: 2, label: "Berührpunkt (1 | 2)" }
beschriftung: Drei Geraden y = kx durch den Ursprung und die Parabel y = x² + 1. Mit k = 3 gibt es zwei Schnittpunkte, mit k = 2 berührt die Gerade die Parabel im Punkt (1 | 2), mit k = 1 gibt es keinen gemeinsamen Punkt.
```

:::achtung[Die Diskriminante der falschen Gleichung]
Jemand fragt, ob $y = x^2 + 1$ und $y = 2x$ einen gemeinsamen Punkt haben. Fehlrechnung: „$x^2 + 1 = 0$ hat die Diskriminante $-1$,
also gibt es keinen Schnittpunkt.“

Das ist die Diskriminante der **Parabel allein**. Sie sagt nur, dass die Parabel die $x$-Achse nicht trifft.
Entscheidend ist die Gleichung nach dem Gleichsetzen: $x^2 - 2x + 1 = 0$ mit $D = 1 - 1 = 0$. Es gibt also genau
einen gemeinsamen Punkt, den Berührpunkt $(1 \mid 2)$.
:::

### Summe und Produkt gegeben

Ein Rechteck hat einen bekannten Umfang und eine bekannte Fläche. Das führt auf das System $x + y = s$ und
$x\cdot y = p$. Nach dem Satz von Vieta aus [2.4 Satz von Vieta und Gleichungen mit Parameter](/lernen/mathe3/gleichungen/satz-von-vieta-und-gleichungen-mit-parameter)
sind $x$ und $y$ dann die beiden Lösungen der quadratischen Gleichung $t^2 - s\,t + p = 0$.

:::beispiel[Ein Gemüsebeet]
Ein rechteckiges Beet hat den Umfang $22\,\text{m}$ und die Fläche $28\,\text{m}^2$. Wie lang sind die Seiten?

1. **Variablen:** $x$ und $y$ … Seitenlängen in m.
2. **Gleichungen:** Umfang $2x + 2y = 22$, also $x + y = 11$. Fläche $x\cdot y = 28$.
3. **Einsetzen:** Aus der ersten Gleichung $y = 11 - x$. In die zweite: $x\,(11 - x) = 28$, also $x^2 - 11x + 28 = 0$.
4. **Lösen:** $(x - 4)(x - 7) = 0$, also $x = 4$ oder $x = 7$. Dazu gehört $y = 7$ beziehungsweise $y = 4$.

**Antwort:** Das Beet ist $4\,\text{m}$ breit und $7\,\text{m}$ lang. **Probe:** $2\cdot 4 + 2\cdot 7 = 22$ und $4\cdot 7 = 28$.
:::

### Ausblick: Kreis und Gerade

Dasselbe Vorgehen funktioniert bei einem Kreis. Der Kreis um den Ursprung mit Radius $5$ hat die Gleichung
$x^2 + y^2 = 25$ (mehr dazu in [Kapitel 7, Der Kreis](/lernen/mathe3/analytische-geometrie/der-kreis)). Mit der Geraden
$y = x + 1$ setzt man ein: $x^2 + (x + 1)^2 = 25$. Ausmultipliziert gibt das $2x^2 + 2x - 24 = 0$, also $x^2 + x - 12 = 0$.
Die Lösungen sind $x = 3$ und $x = -4$. Die Schnittpunkte lauten $(3 \mid 4)$ und $(-4 \mid -3)$.

:::merke[Gerade und Parabel schneiden]
1. Beide Gleichungen nach $y$ auflösen, wenn sie es noch nicht sind.
2. Gleichsetzen oder einsetzen. Es entsteht eine Gleichung mit nur einer Unbekannten.
3. Alles auf eine Seite bringen und lösen. Die Diskriminante sagt, wie viele Schnittpunkte es gibt.
4. Zu jedem $x$ das $y$ aus der einfacheren Gleichung berechnen.
5. Probe in der anderen Gleichung. Als Ergebnis **Punkte** angeben, nicht nur $x$-Werte.
:::

```reflexion
frage: Warum können eine Gerade und eine Parabel höchstens zwei gemeinsame Punkte haben? Und warum können zwei verschiedene Geraden höchstens einen haben?
antwort: |
  Beim Gleichsetzen von Gerade und Parabel entsteht eine quadratische Gleichung in $x$. Eine quadratische Gleichung
  hat höchstens zwei reelle Lösungen. Jede Lösung $x$ liefert genau einen Punkt, weil $y$ dann aus der Geradengleichung
  feststeht. Also gibt es höchstens zwei gemeinsame Punkte. Bei zwei verschiedenen Geraden entsteht eine lineare
  Gleichung. Sie hat genau eine Lösung oder keine (parallele Geraden). Deshalb schneiden sich zwei verschiedene
  Geraden höchstens einmal.
```

```aufgabe
id: gl-system-einsetzen
titel: Normalparabel und Gerade
niveau: 1
lernziel: 9
kompetenz: rechnen
angabe: |
  Bestimme die Schnittpunkte der Parabel $y = x^2$ mit der Geraden $y = 2x + 3$.

  a) Gib die $x$-Werte an, durch Strichpunkt getrennt.

  b) Gib den Schnittpunkt mit dem größeren $x$-Wert an.

  c) Gib den Schnittpunkt mit dem kleineren $x$-Wert an.
teile:
  - typ: menge
    label: 'a) $x$-Werte'
    loesung: ["3", "-1"]
    fehler:
      - wert: ["-3", "1"]
        meldung: 'Prüfe die Vorzeichen beim Zerlegen. Setze deine Werte in $x^2 - 2x - 3$ ein: Es muss $0$ herauskommen.'
  - typ: vektor
    label: 'b) Punkt'
    namen: ["x", "y"]
    loesung: ["3", "9"]
    fehler:
      - wert: ["9", "3"]
        meldung: Du hast die Koordinaten vertauscht. Zuerst steht der $x$-Wert, dann der $y$-Wert.
  - typ: vektor
    label: 'c) Punkt'
    namen: ["x", "y"]
    loesung: ["-1", "1"]
    fehler:
      - wert: ["-1", "-1"]
        meldung: 'Das Quadrat von $-1$ ist $+1$. Berechne $y$ am besten mit $y = 2x + 3$ und kontrolliere mit $y = x^2$.'
hinweise:
  - 'Setze $x^2 = 2x + 3$ und bringe alles auf eine Seite.'
loesung: |
  **Ansatz:** Im Schnittpunkt sind beide $y$-Werte gleich: $x^2 = 2x + 3$, also $x^2 - 2x - 3 = 0$. Zerlegt: $(x - 3)(x + 1) = 0$, also $x = 3$ oder $x = -1$.
  ---
  $y$-Werte aus $y = 2x + 3$: $y = 9$ und $y = 1$. **Probe** mit $y = x^2$: $3^2 = 9$ und $(-1)^2 = 1$. Die Schnittpunkte sind $(3 \mid 9)$ und $(-1 \mid 1)$.
```

```aufgabe
id: gl-system-anzahl
titel: Schneiden oder berühren?
niveau: 1
lernziel: 9
kompetenz: verstehen
angabe: |
  Wie viele gemeinsame Punkte haben die Parabel $y = x^2 - 4x + 5$ und die Gerade $y = 2x - 4$?
teile:
  - typ: auswahl
    optionen: ['keinen', 'genau einen', 'genau zwei']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Hast du die Diskriminante der Parabel allein berechnet? Entscheidend ist die Gleichung nach dem Gleichsetzen: $x^2 - 6x + 9 = 0$.'
      - wert: 2
        meldung: 'Prüfe die Diskriminante von $x^2 - 6x + 9 = 0$ genau: $\left(\tfrac{-6}{2}\right)^2 - 9$.'
hinweise:
  - 'Setze gleich, bringe alles auf eine Seite und berechne die Diskriminante $\left(\tfrac p2\right)^2 - q$.'
loesung: |
  **Ansatz:** Gleichsetzen: $x^2 - 4x + 5 = 2x - 4$, also $x^2 - 6x + 9 = 0$. Die Diskriminante ist $9 - 9 = 0$.
  ---
  Bei Diskriminante $0$ gibt es genau einen gemeinsamen Punkt. Die Gerade berührt die Parabel bei $x = 3$, $y = 2$. **Probe:** $9 - 12 + 5 = 2$ und $6 - 4 = 2$.
```

```aufgabe
id: gl-system-parabeln
titel: Zwei Parabeln schneiden
niveau: 2
lernziel: 9
kompetenz: rechnen
angabe: |
  Bestimme die Schnittpunkte der Parabeln $y = x^2 - 3$ und $y = -x^2 + 2x + 1$.

  a) Gib die $x$-Werte an, durch Strichpunkt getrennt.

  b) Gib den Schnittpunkt mit dem positiven $x$-Wert an.

  c) Gib den Schnittpunkt mit dem negativen $x$-Wert an.
teile:
  - typ: menge
    label: 'a) $x$-Werte'
    loesung: ["2", "-1"]
    fehler:
      - wert: ["-2", "1"]
        meldung: 'Prüfe die Vorzeichen in der Zerlegung von $x^2 - x - 2$. Setze deine Werte zur Probe ein.'
      - wert: ["1 + sqrt(5)", "1 - sqrt(5)"]
        meldung: 'Du hast das $-x^2$ der zweiten Parabel weggelassen. Bringst du es auf die linke Seite, wird daraus $+x^2$. Links steht dann $2x^2$, nicht $x^2$.'
  - typ: vektor
    label: 'b) Punkt'
    namen: ["x", "y"]
    loesung: ["2", "1"]
    fehler:
      - wert: ["2", "-1"]
        meldung: 'Setze $x = 2$ noch einmal in $y = x^2 - 3$ ein: $4 - 3$.'
  - typ: vektor
    label: 'c) Punkt'
    namen: ["x", "y"]
    loesung: ["-1", "-2"]
    fehler:
      - wert: ["-1", "-4"]
        meldung: '$(-1)^2 = +1$, nicht $-1$. Rechne $y = (-1)^2 - 3$ noch einmal.'
hinweise:
  - 'Setze die rechten Seiten gleich: $x^2 - 3 = -x^2 + 2x + 1$.'
  - 'Bringe alles nach links. Du erhältst $2x^2 - 2x - 4 = 0$. Dividiere durch $2$ und löse.'
loesung: |
  **Ansatz:** Im Schnittpunkt sind die $y$-Werte gleich: $x^2 - 3 = -x^2 + 2x + 1$.
  ---
  Alles nach links: $2x^2 - 2x - 4 = 0$. Division durch $2$: $x^2 - x - 2 = 0$. Zerlegt: $(x - 2)(x + 1) = 0$, also $x = 2$ oder $x = -1$.
  ---
  $y$ aus $y = x^2 - 3$: Für $x = 2$ ist $y = 1$, für $x = -1$ ist $y = -2$.
  ---
  **Probe** in der zweiten Gleichung: $-4 + 4 + 1 = 1$ und $-1 - 2 + 1 = -2$. Die Schnittpunkte sind $(2 \mid 1)$ und $(-1 \mid -2)$.
```

```aufgabe
id: gl-system-tangente
titel: Wann berührt die Gerade?
niveau: 2
lernziel: 9
kompetenz: verstehen
angabe: |
  Gegeben sind die Parabel $y = x^2 - 3x$ und die Gerade $y = x + c$ mit einem Parameter $c$.

  a) Für welchen Wert von $c$ berührt die Gerade die Parabel?

  b) Gib den Berührpunkt an.
teile:
  - typ: zahl
    label: 'a) $c$'
    loesung: "-4"
    fehler:
      - wert: "4"
        meldung: 'Prüfe das Vorzeichen. Nach dem Gleichsetzen steht $x^2 - 4x - c = 0$. Die Diskriminante ist $4 + c$, und sie muss null sein.'
      - wert: "-9/4"
        meldung: 'Hast du $x^2 - 3x - c = 0$ verwendet? Beim Gleichsetzen musst du auch das $x$ der Geraden hinüberbringen.'
  - typ: vektor
    label: 'b) Berührpunkt'
    namen: ["x", "y"]
    loesung: ["2", "-2"]
    fehler:
      - wert: ["2", "2"]
        meldung: 'Setze $x = 2$ in $y = x^2 - 3x$ ein: $4 - 6$.'
hinweise:
  - 'Setze gleich und bringe alles auf eine Seite. Es entsteht $x^2 - 4x - c = 0$.'
  - 'Berühren heißt: genau ein gemeinsamer Punkt. Setze die Diskriminante $\left(\tfrac p2\right)^2 - q$ gleich null.'
loesung: |
  **Ansatz:** Berühren heißt, dass die Gleichung nach dem Gleichsetzen genau eine Lösung hat. Ihre Diskriminante muss also $0$ sein.
  ---
  $x^2 - 3x = x + c$ ergibt $x^2 - 4x - c = 0$. Mit $p = -4$ und $q = -c$ ist $D = 4 + c$.
  ---
  $D = 0$ für $c = -4$. Dann lautet die Gleichung $x^2 - 4x + 4 = (x - 2)^2 = 0$, also $x = 2$ und $y = 2 - 4 = -2$.
  ---
  **Probe:** $2^2 - 3\cdot 2 = -2$. Die Gerade $y = x - 4$ berührt die Parabel im Punkt $(2 \mid -2)$.
gefuehrt:
  - text: Setze die beiden rechten Seiten gleich und bringe alles nach links. Welcher Term steht dann links (die rechte Seite ist $0$)?
    teil:
      typ: term
      variable: x
      loesung: "x^2 - 4x - c"
      fehler:
        - wert: "x^2 - 2x - c"
          meldung: 'Beim Abziehen von $x$ wird aus $-3x$ der Term $-4x$, nicht $-2x$.'
    erklaerung: '$x^2 - 3x - x - c = x^2 - 4x - c$.'
  - text: Berechne die Diskriminante $\left(\tfrac p2\right)^2 - q$ mit $p = -4$ und $q = -c$. Für welches $c$ ist sie null?
    teil:
      typ: zahl
      loesung: "-4"
      fehler:
        - wert: "4"
          meldung: 'Es ist $q = -c$. Dann ist $-q = +c$, und $D = 4 + c$.'
    erklaerung: '$D = 4 - (-c) = 4 + c = 0$ für $c = -4$.'
  - text: Löse die Gleichung für dieses $c$ und berechne den Berührpunkt.
    teil:
      typ: vektor
      namen: ["x", "y"]
      loesung: ["2", "-2"]
    erklaerung: '$x^2 - 4x + 4 = (x - 2)^2 = 0$ ergibt $x = 2$, und $y = 2 - 4 = -2$.'
  - text: Was passiert für $c > -4$, was für $c < -4$?
    erklaerung: 'Für $c > -4$ ist $D > 0$: zwei Schnittpunkte. Für $c < -4$ ist $D < 0$: kein gemeinsamer Punkt. Die Gerade liegt dann ganz unter der Parabel.'
```

```aufgabe
id: gl-system-feld
titel: Ein Feld aus Umfang und Fläche
niveau: 2
lernziel: 9
kompetenz: modellieren
angabe: |
  Ein rechteckiges Feld hat den Umfang $46\,\text{m}$ und die Fläche $120\,\text{m}^2$. Bestimme die beiden Seitenlängen
  in Metern, durch Strichpunkt getrennt.
teile:
  - typ: menge
    label: 'Seitenlängen'
    loesung: ["15", "8"]
    fehler:
      - wert: ["-15", "-8"]
        meldung: 'Längen sind positiv. Prüfe die Vorzeichen in der quadratischen Gleichung: $x\,(23 - x) = 120$ ergibt $x^2 - 23x + 120 = 0$.'
      - wert: ["40", "3"]
        meldung: 'Diese Seiten haben zwar die Fläche $120$, aber den Umfang $2\cdot(40 + 3) = 86$. Beide Bedingungen müssen gleichzeitig gelten: $x + y = 23$ und $x\cdot y = 120$.'
hinweise:
  - 'Halber Umfang: $x + y = 23$. Fläche: $x\cdot y = 120$.'
  - 'Setze $y = 23 - x$ in die Flächengleichung ein und löse die quadratische Gleichung.'
loesung: |
  **Ansatz:** $x$, $y$ … Seitenlängen in m. Umfang $2x + 2y = 46$, also $x + y = 23$. Fläche $x\,y = 120$.
  ---
  Einsetzen von $y = 23 - x$: $x\,(23 - x) = 120$, also $x^2 - 23x + 120 = 0$.
  ---
  Lösungsformel: $x = \frac{23 \pm\sqrt{529 - 480}}{2} = \frac{23 \pm 7}{2}$, also $x = 15$ oder $x = 8$. Dazu gehört $y = 8$ beziehungsweise $y = 15$.
  ---
  **Antwort:** Das Feld ist $15\,\text{m}$ lang und $8\,\text{m}$ breit. **Probe:** $2\cdot 15 + 2\cdot 8 = 46$ und $15\cdot 8 = 120$.
```

```aufgabe
id: gl-system-fehler
titel: Falsch zugeordnete Punkte
niveau: 2
lernziel: 9
kompetenz: begruenden
angabe: |
  Lisa schneidet $y = x^2 - 1$ mit $y = x + 1$. Sie erhält richtig $x = 2$ und $x = -1$ und schreibt dann:
  „Die Schnittpunkte sind $(2 \mid 0)$ und $(-1 \mid 3)$.“

  a) Welche Angabe ist richtig?

  b) Erkläre in ein bis zwei Sätzen, was Lisa falsch gemacht hat und wie man den Fehler mit einer Probe entdeckt.
teile:
  - typ: auswahl
    label: 'a)'
    optionen:
      - '$(2 \mid 0)$ und $(-1 \mid 3)$'
      - '$(2 \mid 3)$ und $(-1 \mid 0)$'
      - 'nur $(2 \mid 3)$'
      - '$L = \{2; -1\}$, Punkte sind nicht nötig'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Probe: Liegt $(2 \mid 0)$ auf $y = x + 1$? Für $x = 2$ ist $y = 3$, nicht $0$.'
      - wert: 2
        meldung: '$x = -1$ ist ebenfalls eine Lösung. Auch dazu gehört ein Schnittpunkt.'
      - wert: 3
        meldung: 'Gefragt sind Schnittpunkte, also Zahlenpaare. Die $x$-Werte allein beschreiben keine Punkte.'
  - typ: text
    label: 'b)'
    muster: |
      Lisa hat die $y$-Werte den falschen $x$-Werten zugeordnet. Zu $x = 2$ gehört $y = 2 + 1 = 3$, zu $x = -1$ gehört
      $y = 0$. Eine Probe deckt das auf: Man setzt jeden Punkt in **beide** Gleichungen ein. $(2 \mid 0)$ erfüllt
      $y = x + 1$ nicht, denn $2 + 1 = 3 \neq 0$.
hinweise:
  - 'Setze jeden von Lisas Punkten in $y = x + 1$ ein.'
  - 'Berechne zu jedem $x$ den $y$-Wert direkt aus $y = x + 1$ und kontrolliere mit $y = x^2 - 1$.'
loesung: |
  **Ansatz:** Ein Schnittpunkt muss beide Gleichungen erfüllen. Wir prüfen Lisas Punkte und berechnen die richtigen.
  ---
  Zu $x = 2$ gehört $y = 2 + 1 = 3$, zu $x = -1$ gehört $y = -1 + 1 = 0$. Lisa hat die beiden $y$-Werte vertauscht.
  ---
  **Probe:** $(2 \mid 3)$: $4 - 1 = 3$ und $2 + 1 = 3$. $(-1 \mid 0)$: $1 - 1 = 0$ und $-1 + 1 = 0$. Die Schnittpunkte sind $(2 \mid 3)$ und $(-1 \mid 0)$.
```

```aufgabe
id: gl-system-kreis
titel: Kreis und Gerade
niveau: 3
lernziel: 9
kompetenz: rechnen
angabe: |
  Der Kreis $x^2 + y^2 = 10$ hat den Mittelpunkt im Ursprung und den Radius $\sqrt{10}$. Bestimme seine Schnittpunkte
  mit der Geraden $y = 2x - 5$.

  a) Gib den Schnittpunkt mit dem kleineren $x$-Wert an.

  b) Gib den Schnittpunkt mit dem größeren $x$-Wert an.
teile:
  - typ: vektor
    label: 'a) Punkt'
    namen: ["x", "y"]
    loesung: ["1", "-3"]
    fehler:
      - wert: ["1", "3"]
        meldung: 'Prüfe mit der Geraden: $2\cdot 1 - 5 = -3$. Aus der Kreisgleichung allein kannst du das Vorzeichen von $y$ nicht ablesen.'
  - typ: vektor
    label: 'b) Punkt'
    namen: ["x", "y"]
    loesung: ["3", "1"]
hinweise:
  - 'Setze $y = 2x - 5$ in die Kreisgleichung ein: $x^2 + (2x - 5)^2 = 10$.'
  - 'Multipliziere $(2x - 5)^2$ mit der binomischen Formel aus. Du erhältst $5x^2 - 20x + 15 = 0$.'
loesung: |
  **Ansatz:** Ein Schnittpunkt erfüllt beide Gleichungen. Wir setzen $y = 2x - 5$ in die Kreisgleichung ein: $x^2 + (2x - 5)^2 = 10$.
  ---
  Zweite binomische Formel: $(2x - 5)^2 = 4x^2 - 20x + 25$. Also $5x^2 - 20x + 25 = 10$ und $5x^2 - 20x + 15 = 0$.
  ---
  Division durch $5$: $x^2 - 4x + 3 = 0$, zerlegt $(x - 1)(x - 3) = 0$. Also $x = 1$ oder $x = 3$.
  ---
  $y$ aus der Geraden: $y = 2 - 5 = -3$ und $y = 6 - 5 = 1$. **Probe** im Kreis: $1 + 9 = 10$ und $9 + 1 = 10$. Die Schnittpunkte sind $(1 \mid -3)$ und $(3 \mid 1)$.
```

```aufgabe
id: gl-system-wurf
titel: Wo landet der Ball am Hang?
niveau: 3
lernziel: 9
kompetenz: modellieren
angabe: |
  Ein Ball wird an einem Hang abgeworfen. Seine Flugbahn ist $h(x) = -0{,}05\,x^2 + 1{,}15\,x + 2$. Der Hang steigt
  gleichmäßig an und wird durch $g(x) = 0{,}25\,x$ beschrieben. Dabei sind $x$ der waagrechte Abstand vom Abwurfpunkt
  und $h$, $g$ Höhen, alle in Metern.

  a) In welchem waagrechten Abstand landet der Ball auf dem Hang?

  b) In welcher Höhe landet er?
teile:
  - typ: zahl
    label: 'a) $x$'
    einheit: m
    loesung: "20"
    fehler:
      - wert: "(23 + sqrt(689))/2"
        meldung: Das ist die Stelle, an der die Bahn die Höhe $0$ erreicht. Der Ball landet aber vorher auf dem ansteigenden Hang. Setze die Bahn mit dem Hang gleich.
      - wert: "-2"
        meldung: 'Dieser Wert löst zwar die Gleichung, liegt aber hinter dem Abwurfpunkt. Der Ball fliegt nach vorne, also ist $x > 0$.'
  - typ: zahl
    label: 'b) Höhe'
    einheit: m
    loesung: "0.25*20"
hinweise:
  - 'Der Ball landet dort, wo Bahn und Hang dieselbe Höhe haben: $h(x) = g(x)$.'
  - 'Bring alles auf eine Seite und multipliziere mit $-20$. Du erhältst $x^2 - 18x - 40 = 0$. Nur eine Lösung passt zum Sachzusammenhang.'
loesung: |
  **Ansatz:** Der Landepunkt ist der Schnittpunkt von Flugbahn und Hang: $-0{,}05x^2 + 1{,}15x + 2 = 0{,}25x$.
  ---
  Alles nach links: $-0{,}05x^2 + 0{,}9x + 2 = 0$. Multiplikation mit $-20$ beseitigt die Dezimalzahlen: $x^2 - 18x - 40 = 0$.
  ---
  Zerlegt: $(x - 20)(x + 2) = 0$, also $x = 20$ oder $x = -2$. Die negative Lösung liegt hinter dem Abwurfpunkt und entfällt.
  ---
  Höhe: $g(20) = 0{,}25\cdot 20 = 5$. **Probe:** $h(20) = -20 + 23 + 2 = 5$. **Antwort:** Der Ball landet $20\,\text{m}$ vom Abwurfpunkt entfernt in $5\,\text{m}$ Höhe am Hang.
```

## Überblick: Welcher Typ, welches Verfahren?

Vor dem Rechnen steht die Diagnose. Wenn du eine Gleichung siehst, frag dich zuerst: **Wo steht die Unbekannte?**
Daraus ergibt sich das Verfahren. Vor allem ergibt sich daraus, ob am Ende eine Kontrolle nötig ist. Die Tabelle fasst
alle Typen dieses Kapitels zusammen.

|Unbekannte steht …|Typ|Verfahren|Kontrolle nötig? |
|---|---|---|--- |
|nur in der ersten Potenz|linear|sortieren, dividieren|nur bei Parametern den Fall „Koeffizient null“. |
|als $x^2$ und $x$|quadratisch|Sonderfälle, Lösungsformel|nein, Vieta als Probe. |
|als $x^4$ und $x^2$|biquadratisch|Substitution $u = x^2$|negative $u$ verwerfen. |
|in höheren Potenzen|Polynom|herausheben, raten, Polynomdivision|nein. |
|im Nenner|Bruchgleichung|$D$ bestimmen, Hauptnenner|Lösungen mit $D$ abgleichen. |
|unter einer Wurzel|Wurzelgleichung|isolieren, quadrieren|Probe in der Ausgangsgleichung. |
|im Betrag|Betragsgleichung|Fallunterscheidung|Lösung im Fallbereich? |
|im Exponenten|Exponentialgleichung|Basis angleichen oder logarithmieren|bei Substitution $a^x > 0$. |
|im Logarithmus|Logarithmusgleichung|zusammenfassen, Definition|Lösungen mit $D$ abgleichen. |

Die Kontrollspalte folgt direkt aus dem roten Faden des Kapitels, der Frage nach der Umkehrbarkeit aus
[2.1 Gleichungen und Äquivalenzumformungen](/lernen/mathe3/gleichungen/gleichungen-und-aequivalenzumformungen). War eine
Umformung nicht umkehrbar, können Lösungen hinzukommen. Das passiert beim Quadrieren, beim Multiplizieren mit einem
Term und beim Zusammenfassen von Logarithmen. Dividiert man durch etwas, das null sein kann, können Lösungen verloren
gehen.

:::pruefung
**So schreibst du eine Lösung prüfungsfest auf.** Die Prüfenden vergeben Punkte für einen nachvollziehbaren Weg, nicht nur
für das Ergebnis.

1. **Definitionsmenge zuerst**, wenn Brüche, Wurzeln oder Logarithmen vorkommen: „$D = \R\setminus\{2\}$“.
2. **Lösungsmenge am Ende ausdrücklich hinschreiben:** „$L = \{-3; 4\}$“ oder „$L = \emptyset$“.
3. **Verworfene Kandidaten begründen**, nicht einfach weglassen: „$x = -1$ liegt nicht in $D$“ oder „$t = -2$ ist eine
   negative Zeit“.
4. Bei Anwendungsaufgaben gehört ein **Antwortsatz mit Einheit** dazu: „Nach etwa $18{,}7$ Tagen ist die Fläche $50$ m² groß.“
:::

```aufgabe
id: gl-typ-wurzel
titel: Welcher Typ? Eine Wurzel
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Welches Vorgehen passt zu $\sqrt{3x + 4} = x$, und was ist am Ende Pflicht?
teile:
  - typ: auswahl
    optionen:
      - 'quadrieren, die quadratische Gleichung lösen, Probe in der Ausgangsgleichung'
      - 'quadrieren, die quadratische Gleichung lösen, fertig'
      - 'logarithmieren'
      - 'Fallunterscheidung nach dem Vorzeichen von $3x + 4$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Quadrieren ist keine Äquivalenzumformung. Es kann Scheinlösungen erzeugen. Deshalb ist die Probe Pflicht.'
      - wert: 2
        meldung: 'Logarithmieren hilft, wenn $x$ im Exponenten steht. Hier steht $x$ unter einer Wurzel.'
      - wert: 3
        meldung: 'Fallunterscheidungen braucht man bei Beträgen. Eine Wurzel beseitigt man durch Quadrieren.'
hinweise:
  - 'Wo steht die Unbekannte? Welche Rechenart macht eine Quadratwurzel rückgängig?'
loesung: |
  Die Unbekannte steht unter einer Wurzel. Die Wurzel wird durch Quadrieren beseitigt: $3x + 4 = x^2$.
  ---
  Quadrieren ist nicht umkehrbar. Am Ende ist deshalb die Probe in der Ausgangsgleichung Pflicht. Hier ergibt sich
  $x = 4$ (Probe: $\sqrt{16} = 4$) und die Scheinlösung $x = -1$ (Probe: $\sqrt{1} = 1 \neq -1$).
```

```aufgabe
id: gl-typ-exponent
titel: Welcher Typ? Unbekannte im Exponenten
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  Welcher erste Schritt ist bei $7\cdot 1{,}3^x = 20$ richtig?
teile:
  - typ: auswahl
    optionen:
      - 'durch $7$ dividieren, damit die Potenz allein steht'
      - 'beide Seiten mit $\ln$ logarithmieren und $\ln(7\cdot 1{,}3^x) = 7x\ln 1{,}3$ setzen'
      - 'die $x$-te Wurzel ziehen'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Es gilt $\ln(7\cdot 1{,}3^x) = \ln 7 + x\ln 1{,}3$. Der Faktor $7$ wird nicht zum Faktor vor $x$. Einfacher ist es, zuerst die Potenz zu isolieren.'
      - wert: 2
        meldung: 'Die Unbekannte steht im Exponenten, nicht in der Basis. Eine Wurzel holt sie nicht herunter, der Logarithmus schon.'
hinweise:
  - 'Bevor man logarithmiert, steht die Potenz allein auf einer Seite.'
loesung: |
  Zuerst isolieren wir die Potenz: $1{,}3^x = \tfrac{20}{7}$.
  ---
  Dann logarithmieren: $x\ln 1{,}3 = \ln\tfrac{20}{7}$, also $x = \tfrac{\ln(20/7)}{\ln 1{,}3} \approx 4{,}00$.
```

```aufgabe
id: gl-typ-zuordnen
titel: Drei Gleichungen, drei Verfahren
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  Ordne jeder Gleichung das passende Verfahren zu. Rechnen ist nicht nötig.

  a) $x^4 - 3x^2 - 4 = 0$ b) $|2x - 1| = x + 4$ c) $\dfrac{3}{x - 1} = \dfrac{x}{2}$
teile:
  - typ: auswahl
    label: 'a)'
    optionen: ['Substitution $u = x^2$', 'Fallunterscheidung', 'Definitionsmenge, mit dem Hauptnenner multiplizieren']
    richtig: [0]
    fehler:
      - wert: 2
        meldung: 'Hier gibt es keinen Nenner mit $x$. Es kommen nur $x^4$ und $x^2$ vor.'
      - wert: 1
        meldung: 'Fallunterscheidungen braucht man bei Beträgen. Hier kommt $x^2$ und sein Quadrat $x^4$ vor.'
  - typ: auswahl
    label: 'b)'
    optionen: ['Substitution $u = x^2$', 'Fallunterscheidung', 'Definitionsmenge, mit dem Hauptnenner multiplizieren']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Es gibt kein $x^4$. Der Betrag verlangt zwei Fälle: Inhalt nicht negativ und Inhalt negativ.'
      - wert: 2
        meldung: 'Es gibt keinen Nenner mit $x$. Der Betrag ist das Besondere an dieser Gleichung.'
  - typ: auswahl
    label: 'c)'
    optionen: ['Substitution $u = x^2$', 'Fallunterscheidung', 'Definitionsmenge, mit dem Hauptnenner multiplizieren']
    richtig: [2]
    fehler:
      - wert: 1
        meldung: 'Es gibt keinen Betrag. Die Unbekannte steht im Nenner, also zuerst $D = \R\setminus\{1\}$.'
      - wert: 0
        meldung: 'Es gibt kein $x^4$. Die Unbekannte steht im Nenner.'
hinweise:
  - 'Frage bei jeder Gleichung: Wo steht die Unbekannte?'
  - 'Hoch vier und hoch zwei: Substitution. Betrag: Fälle. Nenner: Definitionsmenge und Hauptnenner.'
loesung: |
  **Ansatz:** Das Verfahren richtet sich danach, wo die Unbekannte steht.
  ---
  a) Es kommen nur $x^4$ und $x^2$ vor. Mit $u = x^2$ wird daraus $u^2 - 3u - 4 = 0$.
  ---
  b) Der Betrag verlangt eine Fallunterscheidung: $2x - 1 \geq 0$ und $2x - 1 < 0$.
  ---
  c) Die Unbekannte steht im Nenner. Also $D = \R\setminus\{1\}$ und dann mit $2\,(x - 1)$ multiplizieren.
```

```aufgabe
id: gl-typ-kontrolle
titel: Wo ist eine Kontrolle Pflicht?
niveau: 2
lernziel: 0
kompetenz: begruenden
angabe: |
  Bei welchen Gleichungen musst du am Ende Kandidaten verwerfen können, weil ein Lösungsschritt nicht umkehrbar ist?
  Kreuze alle an.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$\sqrt{x + 2} = x$'
      - '$\lg x + \lg(x - 3) = 1$'
      - '$\dfrac{x}{x - 3} = \dfrac{3}{x - 3} + 2$'
      - '$x^2 - 4x = 0$'
      - '$3x + 1 = 7$'
    richtig: [0, 1, 2]
    fehler:
      - wert: [0]
        meldung: 'Die Wurzelgleichung stimmt. Aber auch beim Zusammenfassen von Logarithmen und beim Multiplizieren mit einem Nenner können falsche Kandidaten entstehen.'
      - wert: [0, 1, 2, 3]
        meldung: 'Bei $x^2 - 4x = 0$ hebt man $x$ heraus. Das ist eine Äquivalenzumformung. Es entsteht kein falscher Kandidat.'
hinweise:
  - 'Welche Schritte brauchst du jeweils? Quadrieren, Logarithmen zusammenfassen und mit einem Term multiplizieren sind nicht umkehrbar.'
  - 'Herausheben und lineare Umformungen ändern die Lösungsmenge nicht.'
loesung: |
  **Ansatz:** Eine Kontrolle ist Pflicht, wenn ein Schritt die Lösungsmenge vergrößern kann.
  ---
  Bei $\sqrt{x + 2} = x$ wird quadriert. Bei $\lg x + \lg(x - 3) = 1$ wird zusammengefasst, und das neue Argument
  $x\,(x - 3)$ ist auch für manche negativen $x$ positiv. Bei der Bruchgleichung wird mit $x - 3$ multipliziert, das null sein kann.
  ---
  Bei $x^2 - 4x = 0$ und $3x + 1 = 7$ werden nur Äquivalenzumformungen gebraucht. **Antwort:** die ersten drei Gleichungen.
  Bei der Bruchgleichung entsteht tatsächlich $x = 3$, das nicht in $D$ liegt. Sie hat also keine Lösung.
```

## Gemischte Wiederholung

In dieser Lektion sind die Aufgaben bewusst gemischt. Manche wiederholen Stoff aus
[Kapitel 1 Zahlen](/lernen/mathe3/zahlen), manche verbinden mehrere Gleichungstypen. Bei zwei Aufgaben musst du nur
entscheiden, welches Verfahren passt. Genau diese Entscheidung ist in der Prüfung oft der schwerste Schritt, weil dort
nicht dabeisteht, zu welcher Lektion eine Aufgabe gehört.

```aufgabe
id: gl-misch-prozent-rueck
titel: Den ursprünglichen Preis finden
niveau: 1
lernziel: 8
kompetenz: anwenden
angabe: |
  Nach einem Rabatt von $20\,\%$ kostet eine Jacke $96$ Euro. Wie viel hat sie vorher gekostet?
  Wiederholung: [Kapitel 1, Abschnitt 1.6 Prozentrechnung](/lernen/mathe3/zahlen/prozentrechnung).
teile:
  - typ: zahl
    label: 'ursprünglicher Preis'
    einheit: "Euro"
    loesung: "96/0.8"
    fehler:
      - wert: "115.2"
        meldung: |
          Du hast $96$ um $20\,\%$ erhöht. Die $20\,\%$ beziehen sich aber auf den **alten** Preis, nicht auf $96$ Euro.
          Stell eine Gleichung für den alten Preis auf.
      - wert: "116"
        meldung: 'Du hast $20$ Euro addiert. Gemeint sind $20\,\%$ des alten Preises.'
hinweise:
  - 'Ist $x$ der alte Preis, dann kostet die Jacke nach dem Rabatt $0{,}8\,x$.'
loesung: |
  **Ansatz:** $x$ ist der alte Preis in Euro. Nach $20\,\%$ Rabatt bleiben $80\,\%$, also $0{,}8\,x = 96$.
  ---
  Division durch $0{,}8$: $x = 120$. **Antwort:** Die Jacke hat vorher $120$ Euro gekostet. Kontrolle: $20\,\%$ von $120$ sind $24$, und $120 - 24 = 96$.
```

```aufgabe
id: gl-misch-log-regel
titel: Zwei Logarithmen zusammenfassen
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Berechne $\lg 4 + \lg 25$ ohne Taschenrechner. Dabei ist $\lg$ der Logarithmus zur Basis $10$.
  Wiederholung: [Kapitel 1, Abschnitt 1.11 Logarithmen](/lernen/mathe3/zahlen/logarithmen).
teile:
  - typ: zahl
    label: 'Ergebnis'
    loesung: "log(100, 10)"
    anzeige: '2'
    fehler:
      - wert: "log(29, 10)"
        meldung: 'Die Summe zweier Logarithmen ist der Logarithmus des **Produkts**, nicht der Summe: $\lg a + \lg b = \lg(a\cdot b)$.'
      - wert: "100"
        meldung: '$4\cdot 25 = 100$ stimmt. Gesucht ist aber $\lg 100$, also die Hochzahl $k$ mit $10^k = 100$.'
hinweise:
  - 'Logarithmengesetz: $\lg a + \lg b = \lg(a\cdot b)$.'
loesung: |
  Nach dem Logarithmengesetz ist $\lg 4 + \lg 25 = \lg(4\cdot 25) = \lg 100$.
  ---
  Wegen $10^2 = 100$ ist $\lg 100 = 2$.
```

```aufgabe
id: gl-misch-potenz
titel: Eine Gleichung mit gebrochener Hochzahl
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Löse $x^{3/2} = 27$ für $x > 0$.
  Wiederholung: [Kapitel 1, Abschnitt 1.9 Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln).
teile:
  - typ: zahl
    label: '$x$'
    loesung: "27^(2/3)"
    anzeige: '9'
    fehler:
      - wert: "27^(3/2)"
        meldung: 'Um die Hochzahl $\tfrac32$ rückgängig zu machen, potenzierst du mit dem **Kehrwert** $\tfrac23$, nicht noch einmal mit $\tfrac32$.'
      - wert: "18"
        meldung: 'Eine Hochzahl ist kein Faktor. $x^{3/2}$ heißt nicht $\tfrac32\cdot x$.'
hinweise:
  - 'Potenziere beide Seiten mit $\tfrac23$, denn $\left(x^{3/2}\right)^{2/3} = x^{1} = x$.'
loesung: |
  **Ansatz:** Mit $\left(a^m\right)^n = a^{m\cdot n}$ machen wir die Hochzahl $\tfrac32$ durch Potenzieren mit $\tfrac23$ rückgängig.
  Für $x > 0$ ist das eine Äquivalenzumformung.
  ---
  $x = 27^{2/3} = \left(\sqrt[3]{27}\right)^2 = 3^2 = 9$. **Probe:** $9^{3/2} = \left(\sqrt9\right)^3 = 27$.
```

```aufgabe
id: gl-misch-binom
titel: Eine binomische Formel erkennen und lösen
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Löse $9x^2 - 12x + 4 = 0$ ohne Lösungsformel.
  Wiederholung: [Kapitel 1, Abschnitt 1.12 Terme umformen](/lernen/mathe3/zahlen/terme-umformen-binomische-formeln-und-faktorisieren).
teile:
  - typ: menge
    label: '$L$'
    loesung: ["2/3"]
    fehler:
      - wert: ["2/3", "-2/3"]
        meldung: 'Aus $(3x - 2)^2 = 0$ folgt nur $3x - 2 = 0$. Die Null hat nur eine Wurzel, nämlich $0$ selbst.'
      - wert: ["3/2"]
        meldung: 'Aus $3x - 2 = 0$ folgt $3x = 2$ und dann $x = \tfrac23$. Du hast den Bruch umgedreht.'
hinweise:
  - 'Vergleiche mit $(a - b)^2 = a^2 - 2ab + b^2$. Es ist $9x^2 = (3x)^2$ und $4 = 2^2$.'
  - 'Prüfe das mittlere Glied: $2\cdot 3x\cdot 2 = 12x$.'
loesung: |
  **Ansatz:** Die Gleichung hat die Form einer zweiten binomischen Formel mit $a = 3x$ und $b = 2$, denn
  $2ab = 2\cdot 3x\cdot 2 = 12x$.
  ---
  Also ist $9x^2 - 12x + 4 = (3x - 2)^2 = 0$. Ein Quadrat ist nur null, wenn die Basis null ist: $3x - 2 = 0$.
  ---
  $x = \tfrac23$, eine doppelte Lösung. **Kontrolle:** $\Delta = 144 - 4\cdot 9\cdot 4 = 0$ bestätigt genau eine Lösung.
```

```aufgabe
id: gl-misch-intervall
titel: Betrag als Intervall
niveau: 2
lernziel: 7
kompetenz: verstehen
angabe: |
  Welches Intervall beschreibt alle $x$ mit $|x + 1| \le 4$?
  Wiederholung: [Kapitel 1, Abschnitt 1.15 Betrag und Intervalle](/lernen/mathe3/zahlen/betrag-und-intervalle).
teile:
  - typ: auswahl
    optionen: ['$[-5; 3]$', '$[-3; 5]$', '$]-5; 3[$', '$[-4; 4]$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$|x + 1| = |x - (-1)|$ ist der Abstand von $x$ zu $-1$, nicht zu $+1$. Der Mittelpunkt des Intervalls ist $-1$.'
      - wert: 2
        meldung: 'Wegen „$\le$“ gehören die Randpunkte dazu. Das Intervall ist geschlossen.'
      - wert: 3
        meldung: 'Das wäre $|x| \le 4$. Hier steht $x + 1$ im Betrag, das verschiebt den Mittelpunkt.'
hinweise:
  - '$|x + 1| \le 4$ bedeutet: Der Abstand von $x$ zu $-1$ ist höchstens $4$.'
  - 'Rechnerisch: $-4 \le x + 1 \le 4$. Subtrahiere überall $1$.'
loesung: |
  **Ansatz:** $|x + 1| = |x - (-1)|$ ist der Abstand von $x$ zur Zahl $-1$ auf der Zahlengeraden.
  ---
  Abstand höchstens $4$ heißt $-4 \le x + 1 \le 4$. Wir subtrahieren in allen drei Teilen $1$: $-5 \le x \le 3$.
  ---
  Die Randpunkte gehören wegen „$\le$“ dazu: $L = [-5; 3]$. **Probe:** $x = 3$ ergibt $|4| = 4$, und $x = 4$ ergibt $|5| = 5 > 4$.
```

```aufgabe
id: gl-misch-verfahren
titel: Welches Verfahren passt?
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Entscheide für jede Gleichung, welches Verfahren passt. Du musst nicht rechnen.

  a) $\sqrt{2x + 1} = x - 1$ b) $3\cdot 5^x = 75$ c) $x^4 - 10x^2 + 9 = 0$
teile:
  - typ: auswahl
    label: 'a)'
    optionen: ['quadrieren, lösen, Probe', 'Potenz isolieren und logarithmieren oder Basen vergleichen', 'Substitution $u = x^2$']
    richtig: [0]
    fehler:
      - wert: 2
        meldung: 'Es kommen weder $x^4$ noch $x^2$ vor. Die Unbekannte steht unter einer Wurzel.'
      - wert: 1
        meldung: 'Die Unbekannte steht nicht im Exponenten, sondern unter einer Wurzel.'
  - typ: auswahl
    label: 'b)'
    optionen: ['quadrieren, lösen, Probe', 'Potenz isolieren und logarithmieren oder Basen vergleichen', 'Substitution $u = x^2$']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Es gibt keine Wurzel. Die Unbekannte steht im Exponenten.'
      - wert: 2
        meldung: 'Die Unbekannte steht im Exponenten, nicht als $x^2$ oder $x^4$.'
  - typ: auswahl
    label: 'c)'
    optionen: ['quadrieren, lösen, Probe', 'Potenz isolieren und logarithmieren oder Basen vergleichen', 'Substitution $u = x^2$']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: 'Es gibt keine Wurzel. Es kommen nur gerade Potenzen $x^4$ und $x^2$ vor.'
      - wert: 1
        meldung: 'Die Unbekannte steht in der Basis, nicht im Exponenten. Logarithmieren hilft hier nicht.'
hinweise:
  - 'Frage bei jeder Gleichung: Wo steht die Unbekannte?'
loesung: |
  a) Die Unbekannte steht unter einer Wurzel. Also isolieren, quadrieren, lösen und die Probe machen.
  ---
  b) Die Unbekannte steht im Exponenten. Durch $3$ dividieren ergibt $5^x = 25 = 5^2$, also $x = 2$.
  ---
  c) Nur $x^4$ und $x^2$ kommen vor. Mit $u = x^2$ entsteht $u^2 - 10u + 9 = 0$.
```

```aufgabe
id: gl-misch-strategie
titel: Was ist der erste Schritt?
niveau: 2
lernziel: 0
kompetenz: begruenden
angabe: |
  Bei $\dfrac{4}{x} = x - 3$ schlägt jemand vor: „Ich quadriere zuerst beide Seiten.“ Welcher erste Schritt ist
  stattdessen sinnvoll?
teile:
  - typ: auswahl
    optionen:
      - 'Definitionsmenge $D = \R\setminus\{0\}$ notieren und dann mit $x$ multiplizieren.'
      - 'Beide Seiten quadrieren und danach die Probe machen.'
      - 'Beide Seiten logarithmieren.'
      - 'Durch $x - 3$ dividieren.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Quadrieren beseitigt Wurzeln, keine Brüche. Hier entstünde $\tfrac{16}{x^2} = (x - 3)^2$, also eine Gleichung vierten Grades.'
      - wert: 2
        meldung: 'Logarithmieren hilft bei Exponenten. Außerdem kann $x - 3$ negativ sein, und dann gibt es keinen Logarithmus.'
      - wert: 3
        meldung: 'Durch einen Term mit $x$ zu dividieren ist gefährlich und macht die Gleichung hier nicht einfacher.'
hinweise:
  - 'Die Unbekannte steht im Nenner. Was beseitigt einen Bruch?'
  - 'Vor dem Multiplizieren mit $x$ schließt du $x = 0$ aus.'
loesung: |
  **Ansatz:** Die Unbekannte steht im Nenner. Das ist eine Bruchgleichung. Zuerst notieren wir $D = \R\setminus\{0\}$.
  ---
  Mit $x$ multiplizieren: $4 = x^2 - 3x$, also $x^2 - 3x - 4 = 0$ und $(x - 4)(x + 1) = 0$.
  ---
  Beide Kandidaten $4$ und $-1$ liegen in $D$. **Probe:** $\tfrac44 = 1 = 4 - 3$ und $\tfrac{4}{-1} = -4 = -1 - 3$. Also $L = \{4; -1\}$.
```

```aufgabe
id: gl-misch-biquadr
titel: Biquadratisch lösen
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Löse $x^4 - 13x^2 + 36 = 0$. Gib alle reellen Lösungen ein, getrennt durch einen Strichpunkt.
teile:
  - typ: menge
    label: '$L$'
    loesung: ["2", "-2", "3", "-3"]
    fehler:
      - wert: ["4", "9"]
        meldung: 'Das sind die Lösungen für $u = x^2$. Gesucht ist $x$. Die Rücksubstitution fehlt.'
      - wert: ["2", "3"]
        meldung: 'Aus $x^2 = 4$ und $x^2 = 9$ folgen je **zwei** Lösungen, eine positive und eine negative.'
hinweise:
  - 'Setze $u = x^2$. Dann entsteht $u^2 - 13u + 36 = 0$.'
  - 'Löse für $u$ und ziehe danach für jedes positive $u$ die Wurzel mit beiden Vorzeichen.'
loesung: |
  **Ansatz:** Es kommen nur $x^4 = (x^2)^2$ und $x^2$ vor. Mit $u = x^2$ wird daraus $u^2 - 13u + 36 = 0$.
  ---
  Vieta: Produkt $36$ und Summe $13$ ergeben $u = 4$ oder $u = 9$.
  ---
  Rücksubstitution: $x^2 = 4$ ergibt $x = \pm 2$, und $x^2 = 9$ ergibt $x = \pm 3$. Also $L = \{-3; -2; 2; 3\}$.
  **Probe** für $x = 3$: $81 - 117 + 36 = 0$.
```

```aufgabe
id: gl-misch-bruch-quadr
titel: Bruchgleichung mit quadratischem Rest
niveau: 3
lernziel: 5
kompetenz: rechnen
angabe: |
  Löse $\dfrac{x}{x - 2} + \dfrac{4}{x + 2} = \dfrac{8}{x^2 - 4}$. Gib die Lösungsmenge an, getrennt durch einen Strichpunkt.
teile:
  - typ: menge
    label: '$L$'
    loesung: ["-8"]
    fehler:
      - wert: ["-8", "2"]
        meldung: 'Für $x = 2$ wird der Nenner $x - 2$ null. Diese Zahl liegt nicht in der Definitionsmenge.'
hinweise:
  - 'Es ist $x^2 - 4 = (x - 2)(x + 2)$. Also $D = \R\setminus\{-2; 2\}$.'
  - 'Mit $(x - 2)(x + 2)$ multiplizieren ergibt $x\,(x + 2) + 4\,(x - 2) = 8$.'
loesung: |
  **Ansatz:** Zuerst die Definitionsmenge. Wegen $x^2 - 4 = (x - 2)(x + 2)$ ist $D = \R\setminus\{-2; 2\}$. Hauptnenner ist $(x - 2)(x + 2)$.
  ---
  Multiplizieren: $x\,(x + 2) + 4\,(x - 2) = 8$, also $x^2 + 2x + 4x - 8 = 8$ und $x^2 + 6x - 16 = 0$.
  ---
  Zerlegen nach Vieta: $(x + 8)(x - 2) = 0$, also $x = -8$ oder $x = 2$.
  ---
  $x = 2$ liegt nicht in $D$ und scheidet aus. **Probe** für $x = -8$: links $\tfrac{-8}{-10} + \tfrac{4}{-6} = 0{,}8 - \tfrac23 = \tfrac{2}{15}$,
  rechts $\tfrac{8}{60} = \tfrac{2}{15}$. Also $L = \{-8\}$.
```

```aufgabe
id: gl-misch-kapitalvergleich
titel: Wann überholt das eine Konto das andere?
niveau: 3
lernziel: 6
kompetenz: modellieren
angabe: |
  Konto A startet mit $4000$ Euro und wird jährlich mit $3\,\%$ verzinst. Konto B startet mit $5000$ Euro und wird mit
  $1{,}5\,\%$ verzinst. Zinsen werden am Jahresende gutgeschrieben.

  a) Für welche Zeiten $t$ (in Jahren, als reelle Zahl) ist A größer als B? Gib die Grenze auf zwei Nachkommastellen an.

  b) Nach wie vielen ganzen Jahren hat A zum ersten Mal mehr Geld als B?
teile:
  - typ: zahl
    label: 'a) Grenze'
    einheit: "Jahre"
    loesung: "ln(1.25)/ln(1.03/1.015)"
    toleranz: 0.01
  - typ: zahl
    label: 'b) ganze Jahre'
    loesung: "16"
hinweise:
  - 'Ansatz: $4000\cdot 1{,}03^t > 5000\cdot 1{,}015^t$. Bring alle Potenzen auf eine Seite.'
  - 'Dividiere durch $4000\cdot 1{,}015^t$: $\left(\tfrac{1{,}03}{1{,}015}\right)^t > 1{,}25$. Dann logarithmieren. Die Basis ist größer als $1$.'
loesung: |
  **Modell:** Nach $t$ Jahren hat A $4000\cdot 1{,}03^t$ Euro und B $5000\cdot 1{,}015^t$ Euro. Gesucht ist
  $4000\cdot 1{,}03^t > 5000\cdot 1{,}015^t$.
  ---
  Wir dividieren durch die positive Zahl $4000\cdot 1{,}015^t$. Das Zeichen bleibt: $\left(\tfrac{1{,}03}{1{,}015}\right)^t > 1{,}25$.
  ---
  Logarithmieren mit $\ln$. Der Logarithmus ist wachsend, also bleibt das Zeichen: $t\cdot\ln\tfrac{1{,}03}{1{,}015} > \ln 1{,}25$.
  Weil $\ln\tfrac{1{,}03}{1{,}015} > 0$ ist, dürfen wir dividieren, ohne das Zeichen umzudrehen: $t > 15{,}21$.
  ---
  **Antwort:** A ist für $t > 15{,}21$ größer. Nach $15$ Jahren hat A $6231{,}87$ Euro und B $6251{,}16$ Euro. Nach $16$ Jahren hat
  A $6418{,}83$ Euro und B $6344{,}93$ Euro. Zum ersten Mal vorne liegt A also nach $16$ Jahren.
```

## Prüfungsaufgaben

Diese Aufgaben haben das Format der schriftlichen Prüfung: mehrere Teilaufgaben, ein Sachzusammenhang und Punkte.
Zwei davon sind abgewandelte Varianten von Aufgaben der Musterprüfungen, die übrigen haben keine Vorlage. Die
Originalaufgaben der Musterprüfungen findest du in den Prüfungssimulationen. Rechne mit Taschenrechner und Uhr. Der
Zeitrichtwert steht jeweils in der Angabe.

```aufgabe
id: gl-pruefung-bakterien
titel: Ein Algenteppich wächst
niveau: 3
lernziel: 6
kompetenz: modellieren
punkte: 6
quelle: "nach Musterprüfung Schranz-Kirlinger 1.4 (abgewandelt)"
angabe: |
  *Zeitrichtwert: 12 Minuten.* Auf einem Teich bedeckt ein Algenteppich anfangs $6$ m². Seine Fläche $A(t)$ wächst pro Tag
  um $12\,\%$. Dabei ist $t$ die Zeit in Tagen.

  a) Gib das Wachstumsgesetz $A(t)$ an.

  b) Nach wie vielen Tagen bedeckt der Teppich $50$ m²? Runde auf zwei Nachkommastellen.

  c) Berechne $A(30)$ und deute das Ergebnis, wenn der Teich $120$ m² groß ist.
teile:
  - typ: term
    label: 'a) $A(t)$ in m²'
    variable: t
    loesung: "6*1.12^t"
    bereich: [0, 10]
  - typ: zahl
    label: 'b) $t$'
    einheit: "Tage"
    loesung: "ln(50/6)/ln(1.12)"
    toleranz: 0.01
  - typ: zahl
    label: 'c) $A(30)$'
    einheit: "m²"
    loesung: "6*1.12^30"
    toleranz: 0.1
  - typ: text
    label: 'c) Deutung'
    muster: |
      Laut Modell wären es nach $30$ Tagen rund $179{,}8$ m². Der Teich hat aber nur $120$ m². Das Modell des
      exponentiellen Wachstums gilt also nur, solange genug Platz ist. Spätestens wenn der Teich fast bedeckt ist,
      bremst das Wachstum ab. Dann passt ein beschränktes Wachstumsmodell besser.
hinweise:
  - 'Pro Tag wird die Fläche mit $1 + \tfrac{12}{100} = 1{,}12$ multipliziert.'
  - 'Für b) die Potenz isolieren: $1{,}12^t = \tfrac{50}{6}$. Dann logarithmieren.'
loesung: |
  **a)** Wachstum um $12\,\%$ pro Tag heißt: Jeden Tag wird mit $1{,}12$ multipliziert. Mit dem Anfangswert $6$ m² ist
  $A(t) = 6\cdot 1{,}12^t$ ($t$ in Tagen, $A$ in m²).
  ---
  **b)** $6\cdot 1{,}12^t = 50$. Division durch $6$: $1{,}12^t = \tfrac{50}{6} \approx 8{,}333$. Logarithmieren:
  $t = \tfrac{\ln(50/6)}{\ln 1{,}12} \approx 18{,}71$. Nach etwa $18{,}71$ Tagen sind es $50$ m².
  ---
  **c)** $A(30) = 6\cdot 1{,}12^{30} \approx 6\cdot 29{,}96 \approx 179{,}8$ m².
  ---
  **Deutung:** Das ist mehr als die Teichfläche von $120$ m². Das exponentielle Modell kann die Wirklichkeit also nur für
  eine begrenzte Zeit beschreiben. Wachstumsmodelle mit Obergrenze behandelt [Kapitel 4](/lernen/mathe3/funktionen).
```

```aufgabe
id: gl-pruefung-zugschaden
titel: Reparaturen in drei Filialen
niveau: 3
lernziel: 8
kompetenz: modellieren
punkte: 6
quelle: "nach Musterprüfung Schranz-Kirlinger 1.3 (abgewandelt)"
angabe: |
  *Zeitrichtwert: 12 Minuten.* Ein Fahrradverleih hat drei Filialen. In einer Saison werden in Filiale 1 insgesamt $a$ Räder
  verliehen, davon kommen $u\,\%$ mit einem Schaden zurück. In Filiale 2 sind es $b$ Räder mit $v\,\%$, in Filiale 3 $c$ Räder
  mit $w\,\%$ Schäden.

  a) Stelle eine Formel für die Gesamtzahl $n$ der beschädigt zurückgegebenen Räder auf.

  b) Stelle eine Formel für den Anteil $P$ (in Prozent) der beschädigten Räder an allen verliehenen Rädern auf.

  c) Es ist $a = 200$, $u = 6$, $b = 150$, $v = 10$, $c = 50$, $w = 4$. Eine vierte Filiale verleiht $100$ Räder. Wie viel
  Prozent davon dürfen höchstens beschädigt zurückkommen, damit der Anteil über alle vier Filialen höchstens $7\,\%$ beträgt?
teile:
  - typ: term
    label: 'a) $n$ als Term in $a$ (mit $u = 6$, $b = 150$, $v = 10$, $c = 50$, $w = 4$ eingesetzt)'
    variable: a
    loesung: "(a*6 + 150*10 + 50*4)/100"
    bereich: [100, 300]
  - typ: text
    label: 'a) und b) allgemein'
    muster: |
      a) $n = \dfrac{a\,u + b\,v + c\,w}{100}$.

      b) $P = \dfrac{n}{a + b + c}\cdot 100 = \dfrac{a\,u + b\,v + c\,w}{a + b + c}$ in Prozent. Das ist das mit den Stückzahlen
      gewichtete Mittel der Prozentsätze, nicht das einfache Mittel $\tfrac{u + v + w}{3}$.
  - typ: zahl
    label: 'c) höchstens'
    einheit: "%"
    loesung: "(0.07*500 - 29)/100*100"
hinweise:
  - '„$u\,\%$ von $a$“ ist $\tfrac{a\,u}{100}$.'
  - 'Für c): Über vier Filialen werden $500$ Räder verliehen. $7\,\%$ davon sind erlaubt. Ziehe die $n$ beschädigten Räder der ersten drei Filialen ab.'
loesung: |
  **a)** In Filiale 1 kommen $u\,\%$ von $a$ Rädern beschädigt zurück, also $\tfrac{a\,u}{100}$ Räder. Ebenso $\tfrac{b\,v}{100}$ und
  $\tfrac{c\,w}{100}$. Die Summe ist $n = \tfrac{a\,u + b\,v + c\,w}{100}$.
  ---
  **b)** Insgesamt werden $a + b + c$ Räder verliehen. Der Anteil in Prozent ist $P = \tfrac{n}{a + b + c}\cdot 100 = \tfrac{a\,u + b\,v + c\,w}{a + b + c}$.
  ---
  **c)** Mit den Zahlen: $n = \tfrac{1200 + 1500 + 200}{100} = 29$. Über vier Filialen sind es $500$ Räder, erlaubt sind
  $0{,}07\cdot 500 = 35$ beschädigte.
  ---
  Für die vierte Filiale bleiben $35 - 29 = 6$ Räder, also $6$ von $100$. **Antwort:** Höchstens $6\,\%$ der Räder der vierten
  Filiale dürfen beschädigt zurückkommen. Kontrolle: $\tfrac{29 + 6}{500} = 0{,}07$.
```

```aufgabe
id: gl-pruefung-brunnen
titel: Wie tief ist der Brunnen?
niveau: 3
lernziel: 5
kompetenz: anwenden
punkte: 7
angabe: |
  *Zeitrichtwert: 15 Minuten.* Ein Stein fällt in einen Brunnen. Nach $3$ s hört man ihn aufschlagen. Für die Fallzeit
  aus der Höhe $h$ (in m) gilt $t_1 = \sqrt{\tfrac{2h}{9{,}81}}$ in s. Der Schall braucht für den Weg nach oben $t_2 = \tfrac{h}{340}$ s.

  a) Stelle eine Gleichung für $h$ auf.

  b) Löse sie mit der Substitution $w = \sqrt h$. Gib $h$ auf eine Nachkommastelle an.

  c) Wie tief wäre der Brunnen, wenn man die Laufzeit des Schalls vernachlässigt? Gib das Ergebnis auf zwei Nachkommastellen an.
teile:
  - typ: text
    label: 'a) Gleichung'
    muster: |
      Fallzeit plus Schallzeit ergeben die gemessene Zeit: $\sqrt{\tfrac{2h}{9{,}81}} + \tfrac{h}{340} = 3$.
  - typ: zahl
    label: 'b) $h$'
    einheit: "m"
    loesung: "((-sqrt(2/9.81) + sqrt(2/9.81 + 4*3/340))/(2/340))^2"
    toleranz: 0.1
  - typ: zahl
    label: 'c) $h$ ohne Schall'
    einheit: "m"
    loesung: "9.81/2*3^2"
    toleranz: 0.01
hinweise:
  - 'Es ist $\sqrt{\tfrac{2h}{9{,}81}} = \sqrt{\tfrac{2}{9{,}81}}\cdot\sqrt h \approx 0{,}4515\,w$ und $h = w^2$.'
  - 'Es entsteht die quadratische Gleichung $\tfrac{1}{340}\,w^2 + 0{,}4515\,w - 3 = 0$. Nur eine positive Lösung für $w$ ist sinnvoll.'
loesung: |
  **a)** Die gemessene Zeit setzt sich aus Fallzeit und Schallzeit zusammen: $\sqrt{\tfrac{2h}{9{,}81}} + \tfrac{h}{340} = 3$.
  ---
  **b)** Mit $w = \sqrt h$ ist $h = w^2$ und $\sqrt{\tfrac{2h}{9{,}81}} = \sqrt{\tfrac{2}{9{,}81}}\,w \approx 0{,}4515\,w$. Die Gleichung
  wird quadratisch in $w$: $\tfrac{1}{340}\,w^2 + 0{,}4515\,w - 3 = 0$.
  ---
  Große Lösungsformel mit $a = \tfrac{1}{340}$, $b \approx 0{,}4515$, $c = -3$: $\Delta = b^2 + \tfrac{12}{340} \approx 0{,}2392$, also
  $w = \tfrac{-0{,}4515 + 0{,}4890}{2/340} \approx 6{,}379$. Die zweite Lösung ist negativ, und $w = \sqrt h$ kann nicht negativ sein.
  ---
  Rücksubstitution: $h = w^2 \approx 40{,}7$ m. **Probe:** Fallzeit $\sqrt{81{,}39/9{,}81} \approx 2{,}880$ s, Schallzeit
  $40{,}7/340 \approx 0{,}120$ s, zusammen $3$ s.
  ---
  **c)** Ohne Schall ist $\sqrt{\tfrac{2h}{9{,}81}} = 3$. Quadrieren: $\tfrac{2h}{9{,}81} = 9$, also $h = 44{,}15$ m. Die
  Vernachlässigung macht den Brunnen um etwa $3{,}5$ m, also rund $8\,\%$, zu tief.
```

```aufgabe
id: gl-pruefung-parameter
titel: Quadratische Gleichung mit Parameter
niveau: 3
lernziel: 3
kompetenz: begruenden
punkte: 7
angabe: |
  *Zeitrichtwert: 12 Minuten.* Gegeben ist die Gleichung $x^2 + k\,x + 4 = 0$ mit einem reellen Parameter $k$.

  a) Für welche Werte von $k$ hat die Gleichung genau eine reelle Lösung? Gib beide an, getrennt durch einen Strichpunkt.

  b) Für welche $k$ hat sie zwei verschiedene reelle Lösungen?

  c) Löse die Gleichung für $k = 5$.

  d) Begründe mit dem Satz von Vieta: Wenn es zwei reelle Lösungen gibt, haben beide dasselbe Vorzeichen, und zwar das
  entgegengesetzte Vorzeichen von $k$.
teile:
  - typ: menge
    label: 'a) $k$'
    loesung: ["4", "-4"]
  - typ: auswahl
    label: 'b)'
    optionen:
      - '$-4 < k < 4$'
      - '$k < -4$ oder $k > 4$'
      - '$k \le -4$ oder $k \ge 4$'
      - '$k > 4$'
    richtig: [1]
  - typ: menge
    label: 'c) $L$ für $k = 5$'
    loesung: ["-1", "-4"]
  - typ: text
    label: 'd)'
    muster: |
      Nach Vieta ist $x_1\cdot x_2 = q = 4 > 0$. Ein positives Produkt heißt: Beide Lösungen haben dasselbe Vorzeichen.
      Außerdem ist $x_1 + x_2 = -k$. Sind beide positiv, ist $-k > 0$, also $k < 0$. Sind beide negativ, ist $k > 0$.
      Die Lösungen haben also das Vorzeichen von $-k$.
hinweise:
  - 'Die Diskriminante ist $D = \tfrac{k^2}{4} - 4$.'
  - 'Zwei Lösungen: $D > 0$, also $k^2 > 16$. Für d) betrachte Produkt und Summe der Lösungen.'
loesung: |
  **a)** Genau eine Lösung bei $D = \tfrac{k^2}{4} - 4 = 0$, also $k^2 = 16$ und $k = \pm 4$.
  ---
  **b)** $D > 0$ heißt $k^2 > 16$, also $|k| > 4$. Das bedeutet $k < -4$ oder $k > 4$.
  ---
  **c)** $x^2 + 5x + 4 = (x + 1)(x + 4) = 0$, also $L = \{-1; -4\}$. Beide negativ, $k = 5$ positiv. Das passt zu d).
  ---
  **d)** Vieta: $x_1 x_2 = 4 > 0$, also gleiches Vorzeichen. Die Summe $x_1 + x_2 = -k$ hat dieses gemeinsame Vorzeichen.
  Die Lösungen haben also das Vorzeichen von $-k$.
```

```aufgabe
id: gl-pruefung-kombiniert
titel: Wurzel, Betrag und Ungleichung
niveau: 3
lernziel: 7
kompetenz: begruenden
punkte: 7
angabe: |
  *Zeitrichtwert: 15 Minuten.*

  a) Löse $\sqrt{x + 1} = |x - 1|$. Gib alle Lösungen an, getrennt durch einen Strichpunkt. Begründe, warum hier beim
  Quadrieren keine Scheinlösung entstehen kann.

  b) Löse die Ungleichung $x^2 + 4 < 5x$. Gib die Randpunkte des Lösungsintervalls an.

  c) Beschreibe eine Skizze der Parabel $y = x^2 - 5x + 4$, in der die Lösungsmenge von b) zu sehen ist.
teile:
  - typ: menge
    label: 'a) $L$'
    loesung: ["0", "3"]
  - typ: text
    label: 'a) Begründung'
    muster: |
      Für alle $x \ge -1$ sind beide Seiten nicht negativ, die Wurzel und der Betrag. Für nicht negative Zahlen $u$, $v$ gilt
      $u = v$ genau dann, wenn $u^2 = v^2$. Das Quadrieren ist hier also umkehrbar. Außerdem ist $|x - 1|^2 = (x - 1)^2$.
  - typ: vektor
    label: 'b) Randpunkte des offenen Intervalls'
    namen: ["links", "rechts"]
    loesung: ["1", "4"]
  - typ: text
    label: 'c) Skizze'
    muster: |
      Eine nach oben offene Parabel mit den Nullstellen $1$ und $4$, dem Scheitel $(2{,}5 \mid -2{,}25)$ und dem
      $y$-Achsenabschnitt $4$. Zwischen $1$ und $4$ liegt sie unter der $x$-Achse. Dieses offene Intervall ist die Lösungsmenge.
hinweise:
  - 'a) $D = [-1; \infty[$. Nach dem Quadrieren steht $x + 1 = (x - 1)^2$.'
  - 'b) Alles auf eine Seite: $x^2 - 5x + 4 < 0$. Bestimme die Nullstellen der Parabel.'
loesung: |
  **a)** $D = [-1; \infty[$. Beide Seiten sind nicht negativ, also ist das Quadrieren hier umkehrbar: $x + 1 = (x - 1)^2 = x^2 - 2x + 1$.
  ---
  Das ergibt $x^2 - 3x = 0$, also $x\,(x - 3) = 0$ und $x = 0$ oder $x = 3$. Beide liegen in $D$.
  **Probe:** $\sqrt1 = 1 = |-1|$ und $\sqrt4 = 2 = |2|$. Also $L = \{0; 3\}$.
  ---
  **b)** $x^2 - 5x + 4 < 0$. Nullstellen: $(x - 1)(x - 4) = 0$, also $1$ und $4$. Die Parabel ist nach oben offen und dazwischen
  negativ. Also $L = \,]1; 4[$.
  ---
  **c)** Scheitel bei $x = 2{,}5$ mit $y = 6{,}25 - 12{,}5 + 4 = -2{,}25$. Auf der $x$-Achse markiert man das Intervall zwischen
  den Nullstellen, die Randpunkte offen. **Probe** für b): $x = 2$ ergibt $8 < 10$, $x = 0$ ergibt $4 < 0$, das ist falsch.
```

```aufgabe
id: gl-pruefung-medikament
titel: Ein Medikament wird abgebaut
niveau: 3
lernziel: 6
kompetenz: anwenden
punkte: 6
angabe: |
  *Zeitrichtwert: 12 Minuten.* Nach einer Injektion beträgt die Konzentration eines Wirkstoffs im Blut $c(t) = 12\cdot 0{,}85^t$
  in mg/l. Dabei ist $t$ die Zeit in Stunden. Der Wirkstoff wirkt nur, solange die Konzentration mindestens $3$ mg/l beträgt.

  a) Berechne die Halbwertszeit. Runde auf zwei Nachkommastellen.

  b) Wie lange wirkt das Medikament? Runde auf zwei Nachkommastellen.

  c) Welche Anfangskonzentration $c_0$ wäre nötig, damit nach $6$ Stunden noch mindestens $4$ mg/l vorhanden sind?
  Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    label: 'a) Halbwertszeit'
    einheit: "h"
    loesung: "ln(0.5)/ln(0.85)"
    toleranz: 0.01
  - typ: zahl
    label: 'b) Wirkdauer'
    einheit: "h"
    loesung: "ln(0.25)/ln(0.85)"
    toleranz: 0.01
  - typ: zahl
    label: 'c) $c_0$ mindestens'
    einheit: "mg/l"
    loesung: "4/0.85^6"
    toleranz: 0.01
hinweise:
  - 'Halbwertszeit: $0{,}85^t = \tfrac12$. Wirkdauer: $12\cdot 0{,}85^t = 3$.'
  - 'Beim Dividieren durch $\ln 0{,}85 < 0$ dreht sich ein Ungleichheitszeichen um. Für c) löst du $c_0\cdot 0{,}85^6 \ge 4$ nach $c_0$.'
loesung: |
  **a)** Die Halbwertszeit hängt nicht vom Anfangswert ab: $0{,}85^t = 0{,}5$. Logarithmieren: $t = \tfrac{\ln 0{,}5}{\ln 0{,}85} \approx 4{,}27$ h.
  ---
  **b)** Wirkung bis $12\cdot 0{,}85^t = 3$, also $0{,}85^t = 0{,}25$ und $t = \tfrac{\ln 0{,}25}{\ln 0{,}85} \approx 8{,}53$ h. Das ist genau
  die doppelte Halbwertszeit, denn $0{,}25 = 0{,}5^2$. Für $t > 8{,}53$ h liegt die Konzentration unter $3$ mg/l.
  ---
  **c)** $c_0\cdot 0{,}85^6 \ge 4$. Weil $0{,}85^6 \approx 0{,}3771$ positiv ist, dürfen wir dividieren: $c_0 \ge \tfrac{4}{0{,}3771} \approx 10{,}61$ mg/l.
  ---
  **Antwort:** Die Halbwertszeit ist etwa $4{,}27$ h, das Medikament wirkt etwa $8{,}53$ h. Für $4$ mg/l nach $6$ h braucht man
  mindestens etwa $10{,}61$ mg/l zu Beginn. Plausibel: Nach $6$ h, etwas mehr als einer Halbwertszeit, ist weniger als die Hälfte übrig.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, bevor du weiterliest. Was würdest du jemandem sagen, der wissen will, wie man Gleichungen sicher löst?
antwort: |
  Eine mögliche Antwort mit drei Aussagen:
  1. Man formt eine Gleichung nur mit umkehrbaren Schritten um. Dann ändert sich die Lösungsmenge nicht. Quadrieren,
     Multiplizieren mit einem Term und Zusammenfassen von Logarithmen sind nicht umkehrbar. Danach braucht man eine Probe
     oder einen Abgleich mit der Definitionsmenge.
  2. Man dividiert nie durch einen Term, der null sein kann. Stattdessen bringt man alles auf eine Seite, zerlegt in Faktoren
     und wendet den Nullproduktsatz an.
  3. Das Verfahren richtet sich danach, wo die Unbekannte steht: in einer Potenz, im Nenner, unter einer Wurzel, im Betrag,
     im Exponenten oder im Logarithmus.

  Vergleiche mit dem Kasten „Zusammenfassung“ direkt nach dieser Frage. Fehlt dir eine Aussage, lies die zugehörige Lektion noch einmal.
```

:::zusammenfassung
1. **Äquivalenzumformungen** ändern die Lösungsmenge nicht, weil sie umkehrbar sind: denselben Term addieren, mit einer Zahl ungleich null multiplizieren. Der **Nullproduktsatz** sagt: Ein Produkt ist genau dann null, wenn ein Faktor null ist.
2. **Lineare Gleichungen** haben eine, keine oder unendlich viele Lösungen. Bei einem **Parameter** unterscheidet man die Fälle „Koeffizient ungleich null“ und „Koeffizient gleich null“.
3. **Quadratische Gleichungen** löst man mit Sonderfällen, quadratischer Ergänzung oder der Lösungsformel $x_{1,2} = -\tfrac{p}{2} \pm \sqrt{\left(\tfrac{p}{2}\right)^2 - q}$. Die **Diskriminante** entscheidet über zwei, eine oder keine Lösung.
4. **Satz von Vieta:** Für $x^2 + p\,x + q = 0$ ist $x_1 + x_2 = -p$ und $x_1 x_2 = q$. Damit kontrolliert, zerlegt und konstruiert man Gleichungen.
5. **Höhere Grade:** herausheben, substituieren ($u = x^2$) oder eine Lösung raten und mit Polynomdivision abspalten.
6. **Bruch-, Wurzel- und Betragsgleichungen:** Definitionsmenge zuerst, nach dem Quadrieren die Probe in der Ausgangsgleichung, beim Betrag Fälle mit Kontrolle des Fallbereichs.
7. **Exponential- und Logarithmusgleichungen:** Potenz isolieren und logarithmieren oder Basen vergleichen. Logarithmen gibt es nur von positiven Zahlen.
8. **Ungleichungen** löst man wie Gleichungen, aber Multiplizieren oder Dividieren mit einer negativen Zahl dreht das Zeichen um. Das Ergebnis ist meist ein Intervall.
:::

### Die häufigsten Fehler

Jeder Fehler wird von mindestens einer Aufgabe im Kapitel trainiert. Wenn dir ein Fehler bekannt vorkommt, löse die
genannte Aufgabe noch einmal.

1. **Durch x dividiert.** Aus $x^2 = 5x$ wird fälschlich nur $x = 5$, die Lösung $0$ geht verloren. Training: „Wo ist die Lösung verloren gegangen?“ und „Ein gemeinsamer Faktor auf beiden Seiten“ in [2.1 Gleichungen und Äquivalenzumformungen](/lernen/mathe3/gleichungen/gleichungen-und-aequivalenzumformungen).
2. **Minus vor der Klammer nur auf den ersten Summanden angewendet.** $-(3x + 2)$ ist $-3x - 2$. Training: „Fehler in einer Rechnung finden“ in [2.2 Lineare Gleichungen](/lernen/mathe3/gleichungen/lineare-gleichungen).
3. **Fall „Koeffizient gleich null“ vergessen.** Bei $(a - 2)\,x = a + 1$ fehlt sonst der Fall $a = 2$. Training: „Drei Fälle bei einem Parameter“ in [2.2 Lineare Gleichungen](/lernen/mathe3/gleichungen/lineare-gleichungen) und „Der Parameter steht vor x²“ in [2.4 Satz von Vieta und Gleichungen mit Parameter](/lernen/mathe3/gleichungen/satz-von-vieta-und-gleichungen-mit-parameter).
4. **Die negative Lösung vergessen.** Aus $x^2 = 25$ folgt $x = 5$ **oder** $x = -5$. Training: „Quadratische Gleichungen ohne Formel“ in [2.3 Quadratische Gleichungen](/lernen/mathe3/gleichungen/quadratische-gleichungen).
5. **Lösungsformel ohne Normalform oder mit falschem Vorzeichen.** Rechts muss null stehen, vor $x^2$ eine $1$, und das Vorzeichen gehört zu $p$. Training: „Wo steckt der Fehler?“ und „Erst umformen, dann lösen“ in [2.3 Quadratische Gleichungen](/lernen/mathe3/gleichungen/quadratische-gleichungen).
6. **Vieta mit falschem Vorzeichen.** Die Summe der Lösungen ist $-p$, nicht $p$. Training: „Welches Lösungspaar passt?“ in [2.4 Satz von Vieta und Gleichungen mit Parameter](/lernen/mathe3/gleichungen/satz-von-vieta-und-gleichungen-mit-parameter).
7. **Rücksubstitution vergessen.** Nach $u = x^2$ ist $u$ nicht die Lösung. Training: „Biquadratisch lösen“ in der Gemischten Wiederholung und die Aufgaben in [2.5 Gleichungen höheren Grades](/lernen/mathe3/gleichungen/gleichungen-hoeheren-grades).
8. **Lösung außerhalb der Definitionsmenge behalten.** Bei Bruch- und Logarithmusgleichungen wird jeder Kandidat mit $D$ verglichen. Training: die Aufgaben in [2.6 Bruchgleichungen](/lernen/mathe3/gleichungen/bruchgleichungen) und „Bruchgleichung mit quadratischem Rest“.
9. **Probe nach dem Quadrieren vergessen.** Training: die Aufgaben in [2.7 Wurzelgleichungen](/lernen/mathe3/gleichungen/wurzelgleichungen) und „Welcher Typ? Eine Wurzel“.
10. **Bei Beträgen den Fallbereich nicht geprüft.** Eine Lösung zählt nur, wenn sie im jeweiligen Fall liegt. Training: die Aufgaben in [2.8 Betragsgleichungen](/lernen/mathe3/gleichungen/betragsgleichungen).
11. **Summandenweise logarithmiert.** $\ln(a + b)$ ist nicht $\ln a + \ln b$. Training: die Aufgaben in [2.9 Exponential- und Logarithmusgleichungen](/lernen/mathe3/gleichungen/exponential-und-logarithmusgleichungen).
12. **Ungleichheitszeichen nicht umgedreht.** Bei Division durch eine negative Zahl oder durch $\ln 0{,}85 < 0$ dreht sich das Zeichen. Training: die Aufgaben in [2.10 Ungleichungen](/lernen/mathe3/gleichungen/ungleichungen) und die Prüfungsaufgabe „Ein Medikament wird abgebaut“.
13. **Bruchungleichung einfach mit dem Nenner multipliziert.** Das Vorzeichen des Nenners ist unbekannt. Training: die Aufgaben in [2.11 Bruch-, Betrags- und Wurzelungleichungen](/lernen/mathe3/gleichungen/bruch-betrags-und-wurzelungleichungen).
14. **Prozentsätze gemittelt statt gewichtet.** Training: die Aufgaben in [2.13 Textaufgaben modellieren](/lernen/mathe3/gleichungen/textaufgaben-modellieren) und „Reparaturen in drei Filialen“.

### Selbstcheck zu den Lernzielen

Schätze für jedes Lernziel ein, wie sicher du bist: **sicher**, **unsicher** oder **noch nicht**. Vergleiche dann mit
deinen Ergebnissen in den Aufgaben. Wo du dich überschätzt hast, lohnt sich eine Wiederholung am meisten.

1. Ich erkenne, welche Umformungen die Lösungsmenge verändern, und wende den Nullproduktsatz an.
2. Ich löse lineare Gleichungen, auch mit Parameter und Fallunterscheidung.
3. Ich löse quadratische Gleichungen auf drei Arten und deute die Diskriminante.
4. Ich wende den Satz von Vieta an und untersuche quadratische Gleichungen mit Parameter.
5. Ich löse Gleichungen höheren Grades durch Herausheben, Substitution und Polynomdivision.
6. Ich löse Bruch-, Wurzel- und Betragsgleichungen vollständig, mit Definitionsmenge, Probe und Fällen.
7. Ich löse Exponential- und Logarithmusgleichungen und beantworte Wachstumsfragen.
8. Ich löse Ungleichungen und gebe die Lösungsmenge als Intervall an.
9. Ich stelle Formeln um und übersetze Texte in Gleichungen.
10. Ich löse nichtlineare Gleichungssysteme und deute die Zahl der Schnittpunkte.

## Mündliche Prüfung

```karten
- id: gl-k-aequivalenz
  frage: Was ist eine Äquivalenzumformung? Nenne zwei Umformungen, die keine sind, und erkläre jeweils, was passieren kann.
  antwort: |
    Eine Äquivalenzumformung verändert die Lösungsmenge nicht, weil sie umkehrbar ist. Beispiele sind: auf beiden Seiten
    dieselbe Zahl addieren oder mit einer Zahl ungleich null multiplizieren. Keine Äquivalenzumformungen sind das Quadrieren,
    das Scheinlösungen erzeugen kann, und das Dividieren durch einen Term, der null sein kann. Dabei können Lösungen verloren gehen.
  kernpunkte:
    - Lösungsmenge bleibt gleich, weil der Schritt umkehrbar ist
    - Quadrieren kann Scheinlösungen erzeugen
    - Division durch einen Term mit x kann Lösungen vernichten
- id: gl-k-durch-x
  frage: Warum darf man x² = 3x nicht durch x dividieren? Wie löst man richtig?
  antwort: |
    Weil $x$ null sein könnte, und durch null darf man nicht dividieren. Man verliert dabei die Lösung $x = 0$, denn
    $0^2 = 3\cdot 0$ ist wahr. Richtig bringt man alles auf eine Seite und hebt heraus: $x^2 - 3x = x\,(x - 3) = 0$.
    Nach dem Nullproduktsatz ist $x = 0$ oder $x = 3$.
  kernpunkte:
    - x = 0 wäre eine Division durch null
    - die Lösung 0 geht verloren
    - alles auf eine Seite, herausheben, Nullproduktsatz
- id: gl-k-nullprodukt
  frage: Was sagt der Nullproduktsatz, warum gilt er, und warum gilt er nicht für andere Zahlen als null?
  antwort: |
    Ein Produkt reeller Zahlen ist genau dann null, wenn mindestens ein Faktor null ist. Ist $a\,b = 0$ und $a \neq 0$, kann man
    durch $a$ dividieren und erhält $b = 0$. Für andere Zahlen gilt kein solcher Schluss: Aus $a\,b = 6$ folgt nicht $a = 6$
    oder $b = 6$, denn es könnte $a = 2$ und $b = 3$ sein.
  kernpunkte:
    - Produkt null genau dann, wenn ein Faktor null
    - Begründung durch Division durch den Faktor ungleich null
    - Gegenbeispiel a·b = 6
- id: gl-k-parameter-linear
  frage: Wie löst man eine lineare Gleichung mit Parameter, etwa (a − 2)·x = a + 1, vollständig?
  antwort: |
    Man muss durch den Koeffizienten $a - 2$ dividieren. Das ist nur für $a \neq 2$ erlaubt, also braucht man eine
    Fallunterscheidung. Für $a \neq 2$ ist $x = \frac{a + 1}{a - 2}$. Für $a = 2$ steht $0\cdot x = 3$ da, und es gibt keine Lösung.
    Allgemein hat eine lineare Gleichung eine, keine oder unendlich viele Lösungen.
  kernpunkte:
    - Division nur bei Koeffizient ungleich null
    - Fall Koeffizient gleich null getrennt untersuchen
    - Ergebnis je Fall angeben, auch L leer oder L gleich R
- id: gl-k-loesungsformel
  frage: Wie leitet man die Lösungsformel für x² + px + q = 0 her?
  antwort: |
    Durch quadratische Ergänzung. Es gilt $x^2 + p\,x = \left(x + \frac{p}{2}\right)^2 - \left(\frac{p}{2}\right)^2$. Damit wird
    die Gleichung zu $\left(x + \frac{p}{2}\right)^2 = \left(\frac{p}{2}\right)^2 - q = D$. Für $D \geq 0$ folgt
    $x = -\frac{p}{2} \pm \sqrt D$. Für $D < 0$ gibt es keine reelle Lösung, weil ein Quadrat nie negativ ist.
  kernpunkte:
    - quadratische Ergänzung mit der Hälfte von p
    - links ein Quadrat, rechts die Diskriminante
    - Wurzel ziehen mit beiden Vorzeichen
- id: gl-k-diskriminante
  frage: Was gibt die Diskriminante an, und was passiert bei negativer Diskriminante in Kapitel 15?
  antwort: |
    Die Diskriminante ist der Ausdruck unter der Wurzel der Lösungsformel. Ist sie positiv, gibt es zwei reelle Lösungen, ist
    sie null, eine, ist sie negativ, keine. Geometrisch schneidet die Parabel die $x$-Achse zweimal, berührt sie oder trifft sie
    nicht. In den komplexen Zahlen aus Kapitel 15 hat die Gleichung auch bei negativer Diskriminante zwei Lösungen, die zueinander
    konjugiert sind.
  kernpunkte:
    - Vorzeichen entscheidet über zwei, eine, keine reelle Lösung
    - Deutung mit Parabel und x-Achse
    - Brücke zu Kapitel 15, zwei konjugiert komplexe Lösungen
- id: gl-k-vieta
  frage: Wie lautet der Satz von Vieta, unter welcher Voraussetzung gilt er, und wofür verwendet man ihn?
  antwort: |
    Für die Lösungen von $x^2 + p\,x + q = 0$ gilt $x_1 + x_2 = -p$ und $x_1 x_2 = q$, also $x^2 + p\,x + q = (x - x_1)(x - x_2)$.
    Er gilt nur für die Normalform mit der Zahl $1$ vor $x^2$. Man nutzt ihn zur Probe, zum Lösen ganzzahliger Fälle im Kopf,
    zum Zerlegen in Linearfaktoren und zum Aufstellen einer Gleichung mit vorgegebenen Lösungen.
  kernpunkte:
    - Summe -p, Produkt q
    - nur in Normalform
    - Probe, Kopfrechnen, Linearfaktoren, Gleichung aufstellen
- id: gl-k-parameter-quadratisch
  frage: Wie bestimmt man, für welche Werte eines Parameters eine quadratische Gleichung zwei, eine oder keine Lösung hat?
  antwort: |
    Man stellt die Diskriminante als Term im Parameter auf und löst die Bedingungen $D > 0$, $D = 0$ und $D < 0$. Bei
    $x^2 + 4x + k = 0$ ist $D = 4 - k$: zwei Lösungen für $k < 4$, eine für $k = 4$, keine für $k > 4$. Steht der Parameter vor
    $x^2$, prüft man zuerst den Fall, in dem dieser Koeffizient null ist. Dann ist die Gleichung linear.
  kernpunkte:
    - Diskriminante als Term im Parameter
    - drei Bedingungen lösen
    - Sonderfall Koeffizient vor x² gleich null
- id: gl-k-biquadratisch
  frage: Wie löst man eine biquadratische Gleichung, und wie viele reelle Lösungen kann sie haben?
  antwort: |
    Mit der Substitution $u = x^2$ wird $a\,x^4 + b\,x^2 + c = 0$ zur quadratischen Gleichung $a\,u^2 + b\,u + c = 0$. Danach folgt
    die Rücksubstitution: Jedes $u > 0$ liefert $x = \pm\sqrt u$, $u = 0$ liefert $x = 0$, negative $u$ liefern keine reelle
    Lösung. Es gibt also null bis vier reelle Lösungen. Solche Gleichungen treten bei Kurvendiskussionen in Kapitel 9 auf.
  kernpunkte:
    - Substitution u = x²
    - Rücksubstitution mit beiden Vorzeichen
    - null bis vier reelle Lösungen, negative u verwerfen
- id: gl-k-polynomdivision
  frage: Wie findet man die Lösungen einer Gleichung dritten Grades ohne Formel?
  antwort: |
    Fehlt das konstante Glied, hebt man $x$ heraus. Sonst errät man eine Lösung. Hat die Gleichung ganzzahlige Koeffizienten und
    den Koeffizienten $1$ vor der höchsten Potenz, ist jede ganzzahlige Lösung ein Teiler des konstanten Glieds. Mit der
    Polynomdivision oder dem Horner-Schema spaltet man den Linearfaktor ab und löst die übrige quadratische Gleichung.
  kernpunkte:
    - herausheben, wenn das konstante Glied fehlt
    - ganzzahlige Lösungen teilen das konstante Glied
    - Linearfaktor abspalten, Rest quadratisch lösen
- id: gl-k-wurzel-probe
  frage: Warum ist bei Wurzelgleichungen die Probe Pflicht? Gib ein Beispiel.
  antwort: |
    Weil Quadrieren keine Äquivalenzumformung ist. Aus $a^2 = b^2$ folgt nur $a = b$ oder $a = -b$. Die quadrierte Gleichung
    enthält deshalb auch die Lösungen einer Gleichung mit umgekehrtem Vorzeichen. Beispiel: $\sqrt{3x + 4} = x$ führt auf
    $x^2 - 3x - 4 = 0$ mit $4$ und $-1$. Nur $4$ erfüllt die Ausgangsgleichung, denn $\sqrt1 = 1 \neq -1$.
  kernpunkte:
    - Quadrieren ist nicht umkehrbar
    - a² = b² heißt nur a = ±b
    - Beispiel mit Scheinlösung
- id: gl-k-bruch-definitionsmenge
  frage: Warum bestimmt man bei Bruchgleichungen zuerst die Definitionsmenge?
  antwort: |
    Beim Multiplizieren mit dem Hauptnenner multipliziert man mit einem Term, der null werden kann. Für diese Zahlen wird jede
    Gleichung zu $0 = 0$, und sie können als Kandidaten auftauchen, obwohl die Ausgangsgleichung dort gar nicht definiert ist.
    Der Abgleich mit der Definitionsmenge entfernt diese Scheinlösungen.
  kernpunkte:
    - Multiplikation mit einem Term, der null sein kann
    - Nullstellen der Nenner sind ausgeschlossen
    - Kandidaten am Ende mit D vergleichen
- id: gl-k-exponential
  frage: Wie löst man eine Gleichung, bei der die Unbekannte im Exponenten steht? Wie hängt das mit Wachstum aus Kapitel 4 zusammen?
  antwort: |
    Man isoliert die Potenz und logarithmiert: $a^x = b$ ergibt $x = \frac{\ln b}{\ln a}$ für $b > 0$. Lassen sich beide Seiten
    zur selben Basis schreiben, vergleicht man die Exponenten. Kommen $a^x$ und $a^{2x}$ vor, substituiert man $u = a^x$ und
    verwirft $u \le 0$. Fragen nach Verdopplungs- oder Halbwertszeit bei den Wachstumsmodellen aus Kapitel 4 führen genau auf
    solche Gleichungen, etwa $1{,}12^t = 2$.
  kernpunkte:
    - Potenz isolieren, dann logarithmieren oder Basen vergleichen
    - Substitution bei a hoch 2x, negative u verwerfen
    - Verdopplungszeit und Halbwertszeit als Anwendung
- id: gl-k-ungleichung
  frage: Was ändert sich beim Lösen von Ungleichungen gegenüber Gleichungen, und warum?
  antwort: |
    Multipliziert oder dividiert man mit einer negativen Zahl, dreht sich das Ungleichheitszeichen um. Der Grund: Die
    Multiplikation mit $-1$ spiegelt die Zahlengerade an der Null und kehrt die Reihenfolge um. Aus $2 < 5$ wird $-2 > -5$.
    Mit Termen unbekannten Vorzeichens darf man deshalb nicht einfach multiplizieren. Man braucht Fallunterscheidungen oder eine
    Vorzeichentabelle. Das Ergebnis ist meist ein Intervall.
  kernpunkte:
    - Zeichen dreht sich bei negativen Faktoren
    - Begründung über die Spiegelung an der Null
    - bei Termen mit unbekanntem Vorzeichen Fälle oder Vorzeichentabelle
- id: gl-k-quadratische-ungleichung
  frage: Wie löst man eine quadratische Ungleichung wie x² − x − 6 < 0?
  antwort: |
    Man bestimmt die Nullstellen der zugehörigen Gleichung, hier $-2$ und $3$, und skizziert die Parabel. Eine nach oben offene
    Parabel ist zwischen den Nullstellen negativ und außerhalb positiv. Also ist $L = \,]-2; 3[$. Bei $\le$ würden die Randpunkte
    dazugehören.
  kernpunkte:
    - Nullstellen bestimmen
    - Parabel skizzieren, Öffnung beachten
    - Bereich ablesen, Ränder je nach Zeichen
- id: gl-k-textaufgabe
  frage: Wie stellt man aus einer Textangabe eine Formel auf? Warum darf man Prozentsätze verschiedener Gruppen nicht einfach mitteln?
  antwort: |
    Man legt Variablen mit Bedeutung und Einheit fest und übersetzt jede Angabe: „$u\,\%$ von $a$“ ist $\frac{a\,u}{100}$. Eine
    Gesamtzahl ist die Summe der Teilzahlen, etwa $n = \frac{a\,u + b\,v + c\,w}{100}$. Prozentsätze mitteln wäre nur richtig, wenn
    alle Gruppen gleich groß sind. Eine große Gruppe muss stärker zählen. Eine Kontrolle mit einfachen Zahlen zeigt, ob die Formel stimmt.
  kernpunkte:
    - Variablen mit Bedeutung festlegen
    - Prozent von einer Größe als Produkt durch 100
    - gewichtet statt gemittelt, Kontrolle mit Zahlen
- id: gl-k-gerade-parabel
  frage: Wie bestimmt man die Schnittpunkte einer Geraden mit einer Parabel, und wie hängt das mit Kapitel 3 zusammen?
  antwort: |
    Man setzt die beiden Funktionsterme gleich und erhält eine quadratische Gleichung. Ihre Diskriminante entscheidet über zwei
    Schnittpunkte, einen Berührpunkt oder keinen Schnittpunkt. Die $y$-Werte erhält man durch Einsetzen in die Geradengleichung.
    Anders als bei den linearen Gleichungssystemen aus Kapitel 3 ist das System nichtlinear und kann genau zwei Lösungen haben.
  kernpunkte:
    - gleichsetzen ergibt eine quadratische Gleichung
    - Diskriminante gibt die Zahl der Schnittpunkte
    - y-Werte durch Einsetzen, Vergleich mit linearen Systemen
```
