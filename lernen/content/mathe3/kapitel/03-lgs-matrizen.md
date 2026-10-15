---
nummer: 3
titel: Lineare Gleichungssysteme, Matrizen und Determinanten
kurz: Gleichungssysteme sicher lösen, ihre Lösbarkeit beurteilen und geometrisch deuten, dazu Matrizen, Inverse, Determinanten und die Cramersche Regel.
teil: A
stunden: 18
pruefungsgewicht: 2
voraussetzungen: [zahlen, gleichungen]
lernziele:
  - entscheiden, ob eine Gleichung linear ist, prüfen, ob ein Zahlenpaar oder Zahlentripel ein Gleichungssystem löst, und begründen, welche Umformungen die Lösungsmenge nicht verändern
  - Gleichungssysteme mit zwei Unbekannten mit dem Einsetzungs-, Gleichsetzungs- und Additionsverfahren lösen und als Schnitt zweier Geraden deuten
  - Gleichungssysteme mit drei Unbekannten mit dem Gauß-Verfahren lösen, also auf Zeilenstufenform bringen, rückwärts einsetzen und die Probe machen
  - mit dem Rang entscheiden, ob ein System genau eine, keine oder unendlich viele Lösungen hat, und unendlich viele Lösungen in Parameterdarstellung angeben
  - Gleichungssysteme in drei Unbekannten als Lage von Ebenen im Raum deuten und Punkte angeben, die nur einzelne Gleichungen erfüllen
  - mit Matrizen rechnen (Summe, Vielfache, Transponierte, Produkt) und Matrizen als Abbildungen der Ebene deuten
  - inverse Matrizen mit der Formel für 2×2-Matrizen und mit dem Gauß-Jordan-Verfahren berechnen und damit Gleichungssysteme und Matrixgleichungen lösen
  - Determinanten von 2×2- und 3×3-Matrizen berechnen, ihre Rechenregeln anwenden und ihre geometrische Bedeutung und ihren Zusammenhang mit der Lösbarkeit erklären
  - die Cramersche Regel anwenden und Gleichungssysteme mit einem Parameter vollständig diskutieren
  - Sachsituationen wie Mischungen, Bedarfsrechnungen und Übergänge als Gleichungssystem oder Matrixrechnung modellieren und das Ergebnis im Sachzusammenhang prüfen
---

Oft muss eine Größe mehrere Bedingungen **gleichzeitig** erfüllen. Eine Teemischung soll ein bestimmtes
Gewicht haben **und** einen bestimmten Preis. Eine Parabel soll durch drei vorgegebene Punkte gehen. Ein
Betrieb soll sein Lager genau aufbrauchen. Jede Bedingung ist eine Gleichung. Zusammen bilden sie ein
**Gleichungssystem**. In diesem Kapitel lernst du, solche Systeme sicher zu lösen und ihre Lösung zu deuten.

Danach kommen **Matrizen**. Eine Matrix ist ein rechteckiges Zahlenschema, also eine Tabelle aus Zahlen. Mit
Matrizen schreibt man ein ganzes Gleichungssystem als eine einzige kurze Gleichung. Die **Determinante** ist
eine einzige Zahl, die man aus einer quadratischen Matrix berechnet. Sie verrät, ob ein System genau eine
Lösung hat.

**Was kommt in der Prüfung?** In der schriftlichen Prüfung kommen Gleichungssysteme regelmäßig vor. Fast immer
gehört eine **Deutungsfrage** dazu. Die drei Musterprüfungen zeigen das deutlich:

- **Musterprüfung Karigl, Aufgabe 1:** Gegeben sind drei Gleichungen mit drei Unbekannten. Gesucht ist ein
  Zahlentripel, das alle drei Gleichungen erfüllt. Gesucht ist auch eines, das nur die erste Gleichung
  erfüllt. Dazu kommt die Frage, wie man beide Fälle geometrisch deutet.
- **Musterprüfung Schranz-Kirlinger, Aufgabe 1.2:** Zwei Gleichungen mit drei Unbekannten sollen auf
  Lösbarkeit untersucht werden. Wieder ist eine geometrische Deutung verlangt.
- **Musterprüfung Winkler, Aufgabe 4:** Man soll Ebenengleichungen so wählen, dass sie sich in einer
  vorgegebenen Geraden schneiden oder keinen gemeinsamen Punkt haben.

Rechnen allein reicht also nicht. Du musst sagen können, **warum** ein System keine Lösung hat und was das im
Bild bedeutet. Genau danach wird auch in der mündlichen Prüfung gern gefragt. Der Stoffkatalog der
Studienberechtigungsprüfung nennt außerdem ausdrücklich Matrizen und Determinanten.

**Wie dieses Kapitel aufgebaut ist:** Zuerst klären wir, was eine lineare Gleichung und was eine Lösung ist.
Dann lösen wir Systeme mit zwei Unbekannten und deuten sie als Geraden. Mit dem Gauß-Verfahren lösen wir
danach Systeme mit drei und mehr Unbekannten. Wir lernen zu erkennen, ob es keine, genau eine oder unendlich
viele Lösungen gibt, und deuten das mit Ebenen im Raum. Im zweiten Teil rechnen wir mit Matrizen, bestimmen
inverse Matrizen und Determinanten und lernen die Cramersche Regel. Zum Schluss modellieren wir
Anwendungsaufgaben.

:::vorwissen
Du brauchst aus früheren Kapiteln:

- **Lineare Gleichungen** mit einer Unbekannten lösen, also Klammern auflösen und Terme auf die andere Seite
  bringen ([Kapitel 2, Abschnitt „Lineare Gleichungen“](/lernen/mathe3/gleichungen/lineare-gleichungen)).
- **Bruchrechnen**, denn beim Eliminieren entstehen oft Brüche
  ([Kapitel 1, Abschnitt „Bruchrechnen“](/lernen/mathe3/zahlen/bruchrechnen)).
- **Terme umformen**, besonders ein Minus vor einer Klammer richtig auflösen ([Kapitel 1, „Grundrechenarten: Vorzeichen, Klammern und Rechenreihenfolge“](/lernen/mathe3/zahlen/grundrechenarten-vorzeichen-klammern-und-rechenreihenfolge)).
- **Geraden** in der Form $y = kx + d$: Dabei ist $k$ die Steigung und $d$ der Achsenabschnitt. Du solltest
  prüfen können, ob ein Punkt auf einer Geraden liegt. Ausführlich kommt das in [Kapitel 4](/lernen/mathe3/funktionen).

Die folgende Eingangsdiagnose prüft genau diese Dinge. Wenn du bei einer Frage danebenliegst, lies den
verlinkten Abschnitt noch einmal, bevor du weitermachst.
:::

:::anwendung
Gleichungssysteme und Matrizen gehören zu den meistbenutzten Werkzeugen der Mathematik. In der Informatik
steckt die Matrixmultiplikation in jeder Grafik-Engine: Drehen, Spiegeln und Verschieben von Objekten sind
Matrixprodukte. Neuronale Netze bestehen im Kern aus sehr großen Matrixprodukten. In Technik und Wirtschaft
löst man Gleichungssysteme mit Tausenden von Unbekannten, etwa bei der Berechnung von Stromnetzen oder in der
Produktionsplanung. Das Verfahren dahinter ist fast immer das Gauß-Verfahren aus diesem Kapitel.
:::

### Eingangsdiagnose

```aufgabe
id: lm-diag-linear
titel: Eine lineare Gleichung lösen
niveau: 1
art: check
angabe: |
  Löse die Gleichung $3(x - 2) = x + 8$.
  Herkunft: [Kapitel 2, „Lineare Gleichungen“](/lernen/mathe3/gleichungen/lineare-gleichungen).
teile:
  - typ: zahl
    label: '$x =$'
    loesung: "(8 + 6)/(3 - 1)"
    anzeige: '7'
    fehler:
      - wert: "5"
        meldung: |
          Du hast nur das $x$ mit $3$ multipliziert. Der Faktor vor der Klammer gilt für **jeden** Summanden in der
          Klammer: $3(x - 2) = 3x - 6$, nicht $3x - 2$.
      - wert: "1"
        meldung: |
          Beim Hinüberbringen ist ein Vorzeichen verloren gegangen. Aus $3x - 6 = x + 8$ wird $2x = 8 + 6$, denn
          du addierst auf beiden Seiten $6$.
hinweise:
  - 'Löse zuerst die Klammer auf: $3(x - 2) = 3x - 6$.'
loesung: |
  Klammer auflösen: $3x - 6 = x + 8$.
  ---
  Auf beiden Seiten $x$ abziehen und $6$ addieren: $2x = 14$, also $x = 7$.
  Probe: links $3\cdot(7 - 2) = 15$, rechts $7 + 8 = 15$.
```

```aufgabe
id: lm-diag-umformen
titel: Nach y umformen
niveau: 1
art: check
angabe: |
  Forme die Gleichung $4x - 2y = 6$ nach $y$ um.
  Herkunft: [Kapitel 2, „Lineare Gleichungen“](/lernen/mathe3/gleichungen/lineare-gleichungen).
teile:
  - typ: term
    label: '$y =$'
    variable: x
    loesung: "2x - 3"
    fehler:
      - wert: "3 - 2x"
        meldung: |
          Du hast durch $+2$ statt durch $-2$ geteilt. Vor dem $y$ steht $-2$. Aus $-2y = 6 - 4x$ wird
          $y = \frac{6 - 4x}{-2}$. Beim Teilen durch eine negative Zahl kehren sich **alle** Vorzeichen um.
      - wert: "2x + 3"
        meldung: |
          Beim Teilen durch $-2$ muss **jeder** Summand sein Vorzeichen wechseln, auch die Zahl $6$:
          $\frac{6}{-2} = -3$.
hinweise:
  - 'Bring zuerst $4x$ auf die rechte Seite: $-2y = 6 - 4x$. Teile dann durch $-2$.'
loesung: |
  $4x$ auf beiden Seiten abziehen: $-2y = 6 - 4x$.
  ---
  Durch $-2$ teilen: $y = \frac{6}{-2} - \frac{4x}{-2} = -3 + 2x$, also $y = 2x - 3$.
  Probe mit $x = 1$: $y = -1$, und $4\cdot 1 - 2\cdot(-1) = 6$ stimmt.
```

```aufgabe
id: lm-diag-bruch
titel: Brüche subtrahieren
niveau: 1
art: check
angabe: |
  Berechne $\dfrac23 - \dfrac34$ als Bruch.
  Herkunft: [Kapitel 1, „Bruchrechnen“](/lernen/mathe3/zahlen/bruchrechnen).
teile:
  - typ: zahl
    label: 'Ergebnis'
    loesung: "2/3 - 3/4"
    anzeige: '-\tfrac{1}{12}'
    fehler:
      - wert: "1"
        meldung: |
          Du hast Zähler minus Zähler und Nenner minus Nenner gerechnet. So darf man Brüche nicht subtrahieren.
          Bring beide Brüche zuerst auf denselben Nenner, hier $12$.
      - wert: "-1/7"
        meldung: |
          Die Nenner werden nicht addiert. Erst auf einen gemeinsamen Nenner bringen, dann nur die Zähler
          subtrahieren.
hinweise:
  - 'Der kleinste gemeinsame Nenner von $3$ und $4$ ist $12$.'
loesung: |
  Auf den gemeinsamen Nenner $12$ erweitern: $\frac23 = \frac{8}{12}$ und $\frac34 = \frac{9}{12}$.
  ---
  Zähler subtrahieren: $\frac{8}{12} - \frac{9}{12} = -\frac{1}{12}$.
```

```aufgabe
id: lm-diag-einsetzen
titel: Zahlen in einen Term einsetzen
niveau: 1
art: check
angabe: |
  Berechne $2a - 3b + c$ für $a = -1$, $b = 2$ und $c = 4$.
  Herkunft: [Kapitel 1, „Grundrechenarten: Vorzeichen, Klammern und Rechenreihenfolge“](/lernen/mathe3/zahlen/grundrechenarten-vorzeichen-klammern-und-rechenreihenfolge).
teile:
  - typ: zahl
    label: 'Wert'
    loesung: "2*(-1) - 3*2 + 4"
    anzeige: '-4'
    fehler:
      - wert: "8"
        meldung: |
          Das Minus vor $3b$ ist verloren gegangen. Es ist $-3b = -3\cdot 2 = -6$, nicht $+6$.
      - wert: "0"
        meldung: |
          $2a = 2\cdot(-1) = -2$, nicht $+2$. Plus mal minus ergibt minus.
hinweise:
  - 'Setze in Klammern ein: $2\cdot(-1) - 3\cdot 2 + 4$.'
loesung: |
  Einsetzen mit Klammern: $2\cdot(-1) - 3\cdot 2 + 4$.
  ---
  Ausrechnen: $-2 - 6 + 4 = -4$.
```

```aufgabe
id: lm-diag-punkt-gerade
titel: Liegt der Punkt auf der Geraden?
niveau: 1
art: check
angabe: |
  Liegt der Punkt $P(2 \mid -1)$ auf der Geraden mit der Gleichung $y = 3x - 7$?
  Herkunft: [Kapitel 2, „Lineare Gleichungen“](/lernen/mathe3/gleichungen/lineare-gleichungen); Geraden ausführlich in [Kapitel 4](/lernen/mathe3/funktionen).
teile:
  - typ: auswahl
    optionen:
      - 'ja'
      - 'nein'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Setze die Koordinaten ein: $x = 2$ und $y = -1$. Rechts steht dann $3\cdot 2 - 7$. Rechne aus und
          vergleiche mit der linken Seite $-1$.
hinweise:
  - 'Ein Punkt liegt auf der Geraden, wenn seine Koordinaten die Gleichung erfüllen.'
loesung: |
  Ein Punkt liegt genau dann auf der Geraden, wenn seine Koordinaten die Gleichung erfüllen.
  ---
  Einsetzen: rechts $3\cdot 2 - 7 = -1$, links $y = -1$. Beide Seiten stimmen überein, also liegt $P$ auf der Geraden.
```

```aufgabe
id: lm-diag-parallel
titel: Zwei Geraden mit gleicher Steigung
niveau: 1
art: check
angabe: |
  Wie liegen die Geraden $y = 2x + 1$ und $y = 2x - 3$ zueinander?
  Herkunft: Geraden in der Form $y = kx + d$, ausführlich in [Kapitel 4](/lernen/mathe3/funktionen).
teile:
  - typ: auswahl
    optionen:
      - 'Sie schneiden sich in genau einem Punkt.'
      - 'Sie sind parallel und haben keinen gemeinsamen Punkt.'
      - 'Sie sind dieselbe Gerade.'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Zwei Geraden schneiden sich nur, wenn sie verschieden steil sind. Hier ist die Steigung $k$ bei beiden $2$.
      - wert: 2
        meldung: |
          Die Steigung ist gleich, aber die Achsenabschnitte $1$ und $-3$ sind verschieden. Die eine Gerade
          schneidet die $y$-Achse bei $1$, die andere bei $-3$.
hinweise:
  - 'Vergleiche die Steigungen $k$ und die Achsenabschnitte $d$.'
loesung: |
  Beide Geraden haben die Steigung $k = 2$. Sie verlaufen also in dieselbe Richtung.
  ---
  Die Achsenabschnitte $1$ und $-3$ sind verschieden. Die Geraden sind parallel und haben keinen gemeinsamen Punkt.
```

```aufgabe
id: lm-diag-minusklammer
titel: Ein Minus vor der Klammer
niveau: 1
art: check
angabe: |
  Vereinfache $-(3 - 2x) + 2(x - 1)$.
  Herkunft: [Kapitel 1, „Grundrechenarten: Vorzeichen, Klammern und Rechenreihenfolge“](/lernen/mathe3/zahlen/grundrechenarten-vorzeichen-klammern-und-rechenreihenfolge).
teile:
  - typ: term
    label: 'Ergebnis'
    variable: x
    loesung: "4x - 5"
    fehler:
      - wert: "-5"
        meldung: |
          Ein Minus vor der Klammer dreht **jedes** Vorzeichen in der Klammer um: $-(3 - 2x) = -3 + 2x$.
          Du hast bei $-2x$ das Vorzeichen nicht umgedreht.
      - wert: "4x - 4"
        meldung: |
          Der Faktor $2$ gilt für beide Summanden der Klammer: $2(x - 1) = 2x - 2$, nicht $2x - 1$.
hinweise:
  - 'Löse beide Klammern einzeln auf: $-(3 - 2x) = -3 + 2x$ und $2(x - 1) = 2x - 2$.'
loesung: |
  Erste Klammer: Das Minus dreht beide Vorzeichen um, $-(3 - 2x) = -3 + 2x$. Zweite Klammer: $2(x - 1) = 2x - 2$.
  ---
  Zusammenfassen: $-3 + 2x + 2x - 2 = 4x - 5$.
```

## Lineare Gleichungen und Gleichungssysteme

```aufgabe
id: lm-check-eine-gleichung
titel: Wie viele Paare passen?
niveau: 1
art: check
angabe: |
  Wie viele Zahlenpaare $(x, y)$ erfüllen die Gleichung $x + y = 10$?
  Herkunft: [Kapitel 2, „Lineare Gleichungen“](/lernen/mathe3/gleichungen/lineare-gleichungen).
teile:
  - typ: auswahl
    optionen:
      - 'genau eines, nämlich $(5, 5)$'
      - 'genau zwei'
      - 'unendlich viele'
      - 'keines'
    richtig: [2]
    fehler:
      - wert: 0
        meldung: |
          $(5, 5)$ passt, aber nicht als einziges Paar. Probiere $(3, 7)$ oder $(10, 0)$ oder $(-2, 12)$.
      - wert: 1
        meldung: |
          Nimm irgendeine Zahl für $x$. Dann ist $y = 10 - x$ eine passende zweite Zahl. Wie viele Möglichkeiten für $x$ gibt es?
      - wert: 3
        meldung: |
          Setz $x = 4$ ein. Mit $y = 6$ stimmt die Gleichung, es gibt also mindestens ein Paar.
hinweise:
  - 'Wähle für $x$ eine beliebige Zahl. Lässt sich dann immer ein passendes $y$ finden?'
loesung: |
  Für jede Zahl $x$ ist $y = 10 - x$ die passende zweite Zahl. Beispiele: $(5, 5)$, $(3, 7)$, $(10, 0)$, $(-2, 12)$.
  ---
  Weil man für $x$ unendlich viele Zahlen wählen kann, gibt es unendlich viele Paare. Eine einzige Gleichung legt zwei Unbekannte also nicht fest.
```

Die Antwort auf diese Frage ist der Ausgangspunkt der Lektion: **Eine** Gleichung mit **zwei** Unbekannten hat
unendlich viele Lösungen. Um zwei Unbekannte festzulegen, braucht man mehr Information, also eine zweite
Bedingung.

### Zwei Bedingungen, zwei Unbekannte

Ein Teehändler will $20\,\text{kg}$ einer Mischung herstellen, die $15$ Euro pro Kilogramm kostet. Er hat eine
Sorte A zu $12$ Euro pro Kilogramm und eine Sorte B zu $22$ Euro pro Kilogramm. Wie viel nimmt er von jeder Sorte?

Wir geben den gesuchten Größen Namen. Es sei $x$ die Masse der Sorte A in Kilogramm und $y$ die Masse der
Sorte B in Kilogramm. Der Text enthält zwei Bedingungen:

- **Gesamtmasse:** Zusammen sollen es $20\,\text{kg}$ sein, also $x + y = 20$.
- **Gesamtpreis:** $20\,\text{kg}$ zu je $15$ Euro kosten $300$ Euro. Sorte A kostet $12x$ Euro, Sorte B
  kostet $22y$ Euro. Also $12x + 22y = 300$.

```aufgabe
id: lm-check-teemischung
titel: Welches Paar passt zu beiden Bedingungen?
niveau: 1
art: check
angabe: |
  Welches Paar $(x, y)$ erfüllt **beide** Gleichungen $x + y = 20$ und $12x + 22y = 300$?
teile:
  - typ: auswahl
    optionen:
      - '$(10, 10)$'
      - '$(25, 0)$'
      - '$(14, 6)$'
    richtig: [2]
    fehler:
      - wert: 0
        meldung: |
          $(10, 10)$ erfüllt die erste Gleichung. In der zweiten ergibt es aber $120 + 220 = 340$ statt $300$.
      - wert: 1
        meldung: |
          $(25, 0)$ erfüllt die zweite Gleichung, denn $12\cdot 25 = 300$. Aber $25 + 0 = 25$, nicht $20$.
hinweise:
  - 'Setze jedes Paar in beide Gleichungen ein.'
loesung: |
  $(14, 6)$: $14 + 6 = 20$ und $12\cdot 14 + 22\cdot 6 = 168 + 132 = 300$. Beide stimmen.
  ---
  $(10, 10)$ erfüllt nur die erste Gleichung, $(25, 0)$ nur die zweite.
```

Jede Gleichung allein hat unendlich viele Lösungen. Die erste wird zum Beispiel von $(10, 10)$, $(14, 6)$ und
$(5, 15)$ erfüllt. Die zweite wird zum Beispiel von $(25, 0)$ und $(14, 6)$ erfüllt. Nur ein Paar erfüllt
**beide** Gleichungen, nämlich $(14, 6)$.
Der Händler mischt also $14\,\text{kg}$ von Sorte A mit $6\,\text{kg}$ von Sorte B. Wie man dieses Paar
findet, ohne zu raten, lernst du in der Lektion
[3.2 Systeme mit zwei Unbekannten](/lernen/mathe3/lgs-matrizen/systeme-mit-zwei-unbekannten).

### Was ist eine lineare Gleichung?

Eine Gleichung heißt **linear**, wenn die Unbekannten darin nur ganz einfach vorkommen: Jede Unbekannte wird
höchstens mit einer festen Zahl multipliziert, und die Ergebnisse werden addiert. Es gibt keine Quadrate, keine
Produkte von Unbekannten und keine Unbekannten im Nenner oder unter einer Wurzel. Das Wort „linear“ kommt von
„Linie“: Mit zwei Unbekannten beschreibt so eine Gleichung eine Gerade.

:::definition[Lineare Gleichung]
Eine Gleichung in den Unbekannten $x_1, x_2, \dots, x_n$ heißt **linear**, wenn man sie in die Form
$$a_1 x_1 + a_2 x_2 + \dots + a_n x_n = b$$
bringen kann. Dabei sind $a_1, \dots, a_n$ und $b$ feste reelle Zahlen, also Zahlen wie $3$, $-0{,}5$ oder $\sqrt2$. Die Zahlen $a_1, \dots, a_n$ heißen
**Koeffizienten** (Vorfaktoren), die Zahl $b$ heißt **rechte Seite**. Die tiefgestellte Zahl bei $x_1, x_2, \dots$
ist nur eine Nummer, damit man viele Unbekannte unterscheiden kann.
:::

Bei zwei oder drei Unbekannten schreibt man meistens $x, y, z$ statt $x_1, x_2, x_3$.

:::beispiel[Linear oder nicht?]
**Linear** sind:

1. $5x - y = 2$. Das ist schon die Form $a_1x + a_2y = b$ mit $a_1 = 5$, $a_2 = -1$ und $b = 2$.
2. $x = 3y$. Wir ziehen $3y$ auf beiden Seiten ab und erhalten $x - 3y = 0$. Das ist die Form mit rechter Seite $0$.
3. $0{,}5x + \sqrt2\, z = 7$. Die Koeffizienten $0{,}5$ und $\sqrt2$ sind einfach Zahlen. Auch $\pi$ wäre erlaubt.

**Nicht linear** sind:

1. $x\cdot y = 6$, weil zwei Unbekannte miteinander multipliziert werden.
2. $x^2 + y = 4$, weil $x$ quadriert wird.
3. $\frac{2}{x} + y = 1$, weil $x$ im Nenner steht.
4. $\sqrt{x} + y = 3$, weil $x$ unter einer Wurzel steht.

Entscheidend ist nur, wie die **Unbekannten** vorkommen. Wurzeln oder Brüche bei den Koeffizienten stören nicht.
:::

### Gleichungssysteme und ihre Lösungen

Mehrere lineare Gleichungen, die gleichzeitig gelten sollen, bilden ein **lineares Gleichungssystem**. Man kürzt
das mit **LGS** ab. Die Gleichungen schreibt man untereinander und nummeriert sie oft mit römischen Ziffern
I, II, III.

:::definition[Lineares Gleichungssystem und Lösung]
Ein **lineares Gleichungssystem** besteht aus $m$ linearen Gleichungen mit denselben $n$ Unbekannten:
$$\begin{aligned}
a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n &= b_1\\
&\;\;\vdots\\
a_{m1}x_1 + a_{m2}x_2 + \dots + a_{mn}x_n &= b_m
\end{aligned}$$
Dabei ist $a_{ij}$ der Koeffizient in Gleichung Nummer $i$ vor der Unbekannten Nummer $j$. Man liest $a_{23}$ als
„a zwei drei“. Ein Zahlentupel $(x_1, \dots, x_n)$ heißt **Lösung** des Systems, wenn es **alle** $m$ Gleichungen
gleichzeitig erfüllt. Die Menge aller Lösungen heißt **Lösungsmenge** $L$.
:::

Ein **Tupel** ist eine geordnete Liste von Zahlen. Bei zwei Zahlen sagt man **Paar**, bei drei Zahlen **Tripel**.
Die Reihenfolge ist wichtig: $(2, 1, 2)$ bedeutet $x = 2$, $y = 1$ und $z = 2$. Ein System mit $m$ Gleichungen und $n$
Unbekannten nennt man kurz ein **$m\times n$-System**, gelesen „m mal n“. Das Teemischungs-System ist ein
$2\times 2$-System.

Sind alle rechten Seiten $b_1, \dots, b_m$ gleich $0$, heißt das System **homogen**. Sonst heißt es **inhomogen**.
Das Teemischungs-System ist inhomogen, denn seine rechten Seiten sind $20$ und $300$.

:::beispiel[Ist das eine Lösung?]
Gegeben ist das $3\times 3$-System
$$\begin{aligned} x + y - z &= 1 &\text{(I)}\\ 2x - y + z &= 5 &\text{(II)}\\ x + 2y + 2z &= 8 &\text{(III)} \end{aligned}$$
Wir prüfen drei Tripel, indem wir sie in **jede** Gleichung einsetzen.

1. $(2, 1, 2)$: I ergibt $2 + 1 - 2 = 1$, stimmt. II ergibt $4 - 1 + 2 = 5$, stimmt. III ergibt $2 + 2 + 4 = 8$,
   stimmt. Alle drei Gleichungen sind erfüllt, also ist $(2, 1, 2)$ eine **Lösung** des Systems.
2. $(1, 0, 0)$: I ergibt $1 + 0 - 0 = 1$, stimmt. II ergibt $2 - 0 + 0 = 2$, aber verlangt ist $5$. Das Tripel ist
   **keine** Lösung des Systems, obwohl es die erste Gleichung erfüllt.
3. $(0, 3, 2)$: I ergibt $0 + 3 - 2 = 1$, stimmt. II ergibt $0 - 3 + 2 = -1 \neq 5$. Auch das ist **keine** Lösung.

Das zweite und das dritte Tripel erfüllen nur die erste Gleichung. Genau nach so einem Tripel fragt die
Musterprüfung Karigl in Aufgabe 1 b).
:::

:::merke[Was „Lösung“ heißt]
Eine Lösung eines Systems ist **ein ganzes Tupel**, das **jede** Gleichung erfüllt. Ein Tupel, das nur einige
Gleichungen erfüllt, ist keine Lösung des Systems. Prüfen kannst du das immer durch Einsetzen in jede einzelne
Gleichung. Dieses Einsetzen ist zugleich die **Probe** am Ende jeder Rechnung.
:::

```aufgabe
id: lm-check-umformung
titel: Ist diese Umformung erlaubt?
niveau: 1
art: check
angabe: |
  Darf man in einem Gleichungssystem die Gleichung $x - 2y = 5$ durch $-2x + 4y = -10$ ersetzen, ohne dass sich die Lösungsmenge ändert?
teile:
  - typ: auswahl
    optionen:
      - 'ja, das ist eine Multiplikation mit $-2$'
      - 'nein, negative Faktoren sind verboten'
      - 'nein, weil sich die rechte Seite ändert'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Verboten ist nur der Faktor $0$. Die Multiplikation mit $-2$ macht man mit $-\tfrac12$ wieder rückgängig.
      - wert: 2
        meldung: |
          Die rechte Seite **muss** sich mitändern. Beide Seiten werden mit $-2$ multipliziert, sonst wäre es falsch.
hinweise:
  - 'Vergleiche die neue Gleichung mit dem $(-2)$-Fachen der alten.'
loesung: |
  $(-2)\cdot(x - 2y) = -2x + 4y$ und $(-2)\cdot 5 = -10$. Die neue Gleichung ist das $(-2)$-Fache der alten.
  ---
  Der Faktor $-2$ ist nicht $0$. Die Umformung lässt sich mit dem Faktor $-\tfrac12$ rückgängig machen, also ist sie erlaubt.
```

### Umformungen, die nichts verändern

Gelöst werden Systeme, indem man sie Schritt für Schritt in einfachere Systeme umformt. Dabei darf sich die
Lösungsmenge nicht ändern. Umformungen mit dieser Eigenschaft heißen **Äquivalenzumformungen**. Das Wort
„äquivalent“ bedeutet „gleichwertig“: Altes und neues System haben genau dieselben Lösungen.

:::satz[Äquivalenzumformungen eines linearen Gleichungssystems]
Die Lösungsmenge eines linearen Gleichungssystems ändert sich nicht, wenn man

1. zwei Gleichungen **vertauscht**,
2. eine Gleichung auf beiden Seiten mit einer Zahl $c \neq 0$ **multipliziert**,
3. zu einer Gleichung ein **Vielfaches einer anderen** Gleichung addiert. Die andere Gleichung bleibt dabei
   unverändert im System stehen.
:::

Das Zeichen $\neq$ liest man „ungleich“. Warum gelten diese drei Regeln? Der Grund ist immer derselbe: **Jede
dieser Umformungen lässt sich rückgängig machen.**

- Eine Vertauschung macht man durch nochmaliges Vertauschen rückgängig. Die Reihenfolge der Bedingungen spielt
  ohnehin keine Rolle.
- Hat man eine Gleichung mit $c = 3$ multipliziert, so multipliziert man sie mit $\frac13$ und hat die alte Gleichung
  zurück. Das geht nur, weil $c \neq 0$ ist. Zu $c = 0$ gibt es keinen Kehrwert.
- Hat man zu Gleichung II das $k$-Fache von Gleichung I addiert, so zieht man das $k$-Fache von I wieder ab. Dafür
  muss Gleichung I aber noch im System stehen.

Weil man jede Umformung umkehren kann, erfüllt ein Tupel das neue System genau dann, wenn es das alte erfüllt.

:::beispiel[Umformungen an der Teemischung]
Wir verwenden das System der Teemischung mit der bekannten Lösung $(14, 6)$:
$$\begin{aligned} x + y &= 20 &\text{(I)}\\ 12x + 22y &= 300 &\text{(II)} \end{aligned}$$

1. Wir multiplizieren I mit $12$, damit vor $x$ dieselbe Zahl steht wie in II: $12x + 12y = 240$. Das Paar
   $(14, 6)$ erfüllt auch die neue Gleichung: $168 + 72 = 240$.
2. Wir ersetzen II durch „II minus das $12$-Fache von I“. Links wird $(12x + 22y) - (12x + 12y) = 10y$, rechts
   $300 - 240 = 60$. Die neue Gleichung $10y = 60$ enthält kein $x$ mehr.
3. Das neue System lautet $x + y = 20$ und $10y = 60$. Gleichung I ist unverändert geblieben. Aus $10y = 60$ folgt
   $y = 6$, und aus I folgt $x = 14$.

Die Umformungen haben das System so vereinfacht, dass man die Lösung ablesen kann. Genau so arbeiten alle
Lösungsverfahren in diesem Kapitel.
:::

:::achtung[Multiplikation mit null ist verboten]
**Falsch:** Man multipliziert im Teemischungs-System die Gleichung $x + y = 20$ mit $0$. Es entsteht $0 = 0$.
Das neue System besteht dann nur noch aus $12x + 22y = 300$ und der immer wahren Aussage $0 = 0$. Das Paar
$(25, 0)$ erfüllt dieses neue System, denn $12\cdot 25 = 300$. Im alten System ist es aber keine Lösung, denn
$25 + 0 = 25 \neq 20$.

**Richtig:** Nur mit Zahlen $c \neq 0$ multiplizieren. Mit $0$ geht eine ganze Bedingung verloren, und plötzlich
gibt es „Lösungen“, die gar keine sind. Dieselbe Gefahr droht beim Teilen durch einen Ausdruck, der $0$ sein
könnte. Ein Beispiel ist $a - 1$, wenn $a$ für eine noch offene Zahl steht. Den Fall $a = 1$ untersuchst du dann getrennt.
:::

:::achtung[Nie zwei Gleichungen gleichzeitig ersetzen]
Gegeben ist $x + y = 5$ (I) und $x - y = 1$ (II) mit der Lösung $(3, 2)$.

**Falsch:** Jemand ersetzt **gleichzeitig** I durch $\text{I} - \text{II}$ und II durch $\text{II} - \text{I}$.
Er erhält $2y = 4$ und $-2y = -4$. Beide Gleichungen sagen nur $y = 2$. Daraus schließt er „$x$ ist beliebig,
es gibt unendlich viele Lösungen“. Aber $(0, 2)$ ist keine Lösung des alten Systems, denn $0 + 2 = 2 \neq 5$.

**Richtig:** Immer nur **eine** Gleichung ersetzen. Die Gleichung, die man zum Eliminieren benutzt, bleibt
unverändert stehen: $x + y = 5$ (I bleibt) und $\text{II} - \text{I}$ ergibt $-2y = -4$. Also $y = 2$ und $x = 3$.
Der Fehler war, dass die neue Gleichung II aus dem **alten** I berechnet wurde, das gleichzeitig verschwand. So
ging die Information über $x$ verloren.
:::

```reflexion
frage: Warum darf man eine Gleichung eines Systems mit $3$ multiplizieren, aber nicht mit $0$? Erkläre es mit dem Wort „rückgängig“.
antwort: |
  Eine Umformung ist nur dann harmlos, wenn man sie rückgängig machen kann. Dann hat das neue System genau dieselben Lösungen
  wie das alte. Die Multiplikation mit $3$ macht man durch Multiplikation mit $\frac13$ rückgängig. Nach einer Multiplikation
  mit $0$ steht dort nur noch $0 = 0$. Aus $0 = 0$ kann man die ursprüngliche Gleichung nicht mehr zurückgewinnen, denn
  $0$ hat keinen Kehrwert. Die Bedingung ist verloren, und das neue System kann zusätzliche, falsche Lösungen haben.
```

### Übungen

```aufgabe
id: lm-linear-erkennen
titel: Lineare Gleichungen erkennen
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Welche der folgenden Gleichungen in den Unbekannten $x, y, z$ sind linear? Wähle alle passenden aus.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$3x - 4y + z = 2$'
      - '$x\,z - y = 1$'
      - '$\sqrt{5}\,y = 2x - \pi$'
      - '$x^2 - y = 0$'
      - '$\dfrac{x - 2z}{3} = y$'
      - '$\dfrac{1}{y} + x = 4$'
    richtig: [0, 2, 4]
    fehler:
      - wert: [0, 4]
        meldung: |
          $\sqrt5$ und $\pi$ sind feste Zahlen, also ganz normale Koeffizienten. Die Gleichung $\sqrt5\,y = 2x - \pi$
          lässt sich zu $-2x + \sqrt5\,y = -\pi$ umformen. Sie ist linear.
      - wert: [0, 2]
        meldung: |
          Durch $3$ teilen heißt mit $\frac13$ multiplizieren. Multiplizierst du beide Seiten mit $3$, entsteht
          $x - 2z = 3y$, also $x - 3y - 2z = 0$. Das ist linear.
      - wert: [0, 1, 2, 4]
        meldung: |
          In $x\,z - y = 1$ werden zwei Unbekannte miteinander multipliziert. Ein solches Produkt ist nicht linear.
hinweise:
  - Entscheidend ist, wie die **Unbekannten** vorkommen. Zahlen wie $\sqrt5$ oder $\pi$ sind einfach Koeffizienten.
loesung: |
  Ansatz: Linear heißt, jede Unbekannte wird nur mit einer Zahl multipliziert, und die Ergebnisse werden addiert.
  ---
  $3x - 4y + z = 2$ ist schon in der Normalform, also linear. $\sqrt5\,y = 2x - \pi$ lässt sich zu $-2x + \sqrt5\,y = -\pi$ umformen, also linear. $\frac{x - 2z}{3} = y$ wird mit $3$ multipliziert zu $x - 3y - 2z = 0$, also linear.
  ---
  Nicht linear sind $x\,z - y = 1$ (Produkt zweier Unbekannter), $x^2 - y = 0$ (Quadrat) und $\frac1y + x = 4$ (Unbekannte im Nenner).
```

```aufgabe
id: lm-loesung-pruefen
titel: Ist das eine Lösung des Systems?
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Gegeben ist das System
  $$\begin{aligned} x - y + 2z &= 3\\ 2x + y - z &= 2\\ -x + 3y + z &= 7 \end{aligned}$$
  Welche der Tripel $(x, y, z)$ sind Lösungen des **Systems**? Wähle alle passenden aus.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$(1, 2, 2)$'
      - '$(3, 0, 0)$'
      - '$(5, 1, 9)$'
      - '$(1, 0, 1)$'
    richtig: [0]
    fehler:
      - wert: [0, 1]
        meldung: |
          $(3, 0, 0)$ erfüllt die erste Gleichung, denn $3 - 0 + 0 = 3$. In der zweiten ergibt es aber $6$ statt $2$.
          Eine Lösung des Systems muss **alle** Gleichungen erfüllen.
      - wert: [0, 3]
        meldung: |
          $(1, 0, 1)$ erfüllt nur die erste Gleichung. Die zweite ergibt $2 + 0 - 1 = 1$ statt $2$.
      - wert: [0, 2]
        meldung: |
          $(5, 1, 9)$ erfüllt die zweite und die dritte Gleichung, aber nicht die erste: $5 - 1 + 18 = 22 \neq 3$.
hinweise:
  - Setze jedes Tripel in **alle drei** Gleichungen ein. Es zählt nur, wenn alle drei stimmen.
loesung: |
  Ansatz: Ein Tripel ist genau dann Lösung, wenn es jede der drei Gleichungen erfüllt. Wir setzen ein.
  ---
  $(1, 2, 2)$: $1 - 2 + 4 = 3$, $2 + 2 - 2 = 2$, $-1 + 6 + 2 = 7$. Alle drei stimmen, das ist eine Lösung.
  ---
  $(3, 0, 0)$ und $(1, 0, 1)$ erfüllen nur die erste Gleichung. $(5, 1, 9)$ erfüllt die zweite ($10 + 1 - 9 = 2$) und die dritte ($-5 + 3 + 9 = 7$), aber nicht die erste.
  ---
  Ergebnis: Nur $(1, 2, 2)$ ist eine Lösung des Systems.
```

```aufgabe
id: lm-tupel-ergaenzen
titel: Ein Tripel passend ergänzen
niveau: 2
lernziel: 0
kompetenz: rechnen
angabe: |
  Gegeben ist das System
  $$\begin{aligned} 2x - y + 3z &= 7 &\text{(I)}\\ x + 4y - z &= 3 &\text{(II)} \end{aligned}$$
  a) Bestimme $z$ so, dass $(2, 0, z)$ die Gleichung I erfüllt.

  b) Ist das Tripel aus a) auch eine Lösung des Systems?

  c) Bestimme $y$ so, dass $(1, y, 2)$ die Gleichung I erfüllt. Prüfe, ob dieses Tripel auch II erfüllt.
teile:
  - typ: zahl
    label: 'a) $z =$'
    loesung: "(7 - 2*2)/3"
    anzeige: '1'
    fehler:
      - wert: "7/3"
        meldung: |
          Du hast den Summanden $2x = 4$ vergessen. Setz $x = 2$ und $y = 0$ ein: $4 - 0 + 3z = 7$.
      - wert: "11/3"
        meldung: |
          Beim Hinüberbringen ist das Vorzeichen falsch. Aus $4 + 3z = 7$ wird $3z = 7 - 4$.
  - typ: auswahl
    label: 'b) Ist $(2, 0, z)$ mit diesem $z$ eine Lösung des Systems?'
    optionen:
      - 'ja'
      - 'nein'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Es erfüllt die Gleichung I, aber ein Tripel ist erst dann Lösung, wenn es **alle** Gleichungen erfüllt.
          Setz es in II ein.
  - typ: zahl
    label: 'c) $y =$'
    loesung: "2*1 + 3*2 - 7"
    anzeige: '1'
    fehler:
      - wert: "-1"
        meldung: |
          Vorzeichen prüfen: Aus $2 - y + 6 = 7$ folgt $-y = -1$, also $y = +1$.
hinweise:
  - 'Setze die bekannten Zahlen in Gleichung I ein. Es bleibt eine Gleichung mit einer Unbekannten.'
  - 'Für b): Setze $(2, 0, 1)$ in Gleichung II ein und vergleiche mit $3$.'
gefuehrt:
  - text: 'Setze $x = 2$ und $y = 0$ in Gleichung I ein. Dann steht dort „Zahl $+\,3z = 7$“. Welche Zahl ist das?'
    teil:
      typ: zahl
      loesung: "2*2 - 0"
      fehler:
        - wert: "2"
          meldung: 'Vor dem $x$ steht der Faktor $2$. Mit $x = 2$ ergibt $2x$ also $2\cdot 2$.'
    erklaerung: '$2\cdot 2 - 0 = 4$. Es bleibt die Gleichung $4 + 3z = 7$.'
  - text: 'Löse $4 + 3z = 7$. Wie groß ist $z$?'
    teil:
      typ: zahl
      loesung: "1"
      fehler:
        - wert: "11/3"
          meldung: 'Die $4$ wird auf der rechten Seite abgezogen, nicht addiert.'
    erklaerung: '$3z = 3$, also $z = 1$.'
  - text: 'Setze $(2, 0, 1)$ in Gleichung II ein. Was ergibt die linke Seite $x + 4y - z$?'
    teil:
      typ: zahl
      loesung: "2 + 0 - 1"
    erklaerung: 'Die linke Seite ergibt $1$, verlangt ist aber $3$. Also ist $(2, 0, 1)$ keine Lösung des Systems.'
  - text: 'Jetzt c): Setze $(1, y, 2)$ in I ein und löse nach $y$ auf.'
    teil:
      typ: zahl
      loesung: "1"
    erklaerung: '$2 - y + 6 = 7$, also $y = 1$. In II: $1 + 4 - 2 = 3$. Das Tripel $(1, 1, 2)$ erfüllt beide Gleichungen.'
loesung: |
  Ansatz: Wir setzen die bekannten Koordinaten ein. Dann bleibt eine lineare Gleichung mit einer Unbekannten.
  ---
  a) $2\cdot 2 - 0 + 3z = 7$, also $4 + 3z = 7$, $3z = 3$ und $z = 1$.
  ---
  b) In II: $2 + 4\cdot 0 - 1 = 1 \neq 3$. Das Tripel $(2, 0, 1)$ erfüllt nur Gleichung I und ist keine Lösung des Systems.
  ---
  c) In I: $2\cdot 1 - y + 3\cdot 2 = 7$, also $8 - y = 7$ und $y = 1$. Probe in II: $1 + 4\cdot 1 - 2 = 3$. Das Tripel $(1, 1, 2)$ erfüllt beide Gleichungen und ist eine Lösung des Systems.
```

```aufgabe
id: lm-umformung-erlaubt
titel: Welche Umformungen sind erlaubt?
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  Gegeben ist das System $x + 2y = 7$ (I) und $3x - y = 7$ (II). Welche der folgenden Umformungen ändern die
  Lösungsmenge **nicht**? Wähle alle passenden aus.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - 'II durch $\text{II} - 3\cdot\text{I}$ ersetzen, I bleibt stehen.'
      - 'I mit $0$ multiplizieren.'
      - 'I und II vertauschen.'
      - 'I durch $2\cdot\text{I}$ ersetzen.'
      - 'Gleichzeitig I durch $\text{I} - \text{II}$ und II durch $\text{II} - \text{I}$ ersetzen.'
      - 'Beide Seiten von II quadrieren.'
    richtig: [0, 2, 3]
    fehler:
      - wert: [0, 2, 3, 4]
        meldung: |
          Werden beide Gleichungen gleichzeitig ersetzt, ist die zweite neue Gleichung nur das $(-1)$-Fache der ersten.
          Eine Bedingung geht verloren. Immer nur **eine** Gleichung ersetzen.
      - wert: [0, 1, 2, 3]
        meldung: |
          Mit $0$ multipliziert wird aus I die Aussage $0 = 0$. Die Bedingung I ist dann verschwunden, und das System
          hat plötzlich mehr Lösungen.
      - wert: [0, 2, 3, 5]
        meldung: |
          Quadrieren ist keine Äquivalenzumformung. Aus $a = b$ folgt zwar $a^2 = b^2$, aber nicht umgekehrt:
          Auch $a = -b$ führt zu $a^2 = b^2$. Außerdem ist die Gleichung danach nicht mehr linear.
hinweise:
  - 'Frage bei jeder Umformung: Kann man sie rückgängig machen?'
  - 'Die drei erlaubten Umformungen sind: vertauschen, mit $c \neq 0$ multiplizieren, ein Vielfaches einer anderen Gleichung addieren, die dabei stehen bleibt.'
loesung: |
  Ansatz: Erlaubt sind genau die Umformungen, die man rückgängig machen kann.
  ---
  Erlaubt: $\text{II} - 3\cdot\text{I}$ (I bleibt stehen, man kann $3\cdot\text{I}$ wieder addieren), Vertauschen, Multiplikation mit $2$ (rückgängig mit $\frac12$).
  ---
  Nicht erlaubt: Multiplikation mit $0$ (nicht umkehrbar), gleichzeitiges Ersetzen beider Gleichungen (eine Bedingung geht verloren) und Quadrieren (nicht umkehrbar und nicht mehr linear).
  ---
  Zur Kontrolle: Die Lösung des Systems ist $(3, 2)$. Nach den erlaubten Umformungen bleibt sie eine Lösung, zum Beispiel ergibt $\text{II} - 3\cdot\text{I}$ die Gleichung $-7y = -14$, und $y = 2$ passt.
```

```aufgabe
id: lm-huehner-kaninchen
titel: Hühner und Kaninchen
niveau: 2
lernziel: 0
kompetenz: modellieren
angabe: |
  Auf einem Bauernhof leben Hühner und Kaninchen. Zusammen haben sie $35$ Köpfe und $94$ Beine. Es sei $x$ die Anzahl
  der Hühner und $y$ die Anzahl der Kaninchen.

  a) Welches Gleichungssystem beschreibt die Situation?

  b) Welches der Paare $(x, y)$ löst das System?
teile:
  - typ: auswahl
    label: 'a) Das passende System'
    optionen:
      - '$x + y = 35$ und $2x + 4y = 94$'
      - '$x + y = 35$ und $4x + 2y = 94$'
      - '$x + y = 94$ und $2x + 4y = 35$'
      - '$2x + 4y = 35$ und $x + y = 94$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Ein Huhn hat $2$ Beine und ein Kaninchen $4$. Die $x$ Hühner haben also $2x$ Beine, die $y$ Kaninchen $4y$ Beine.
      - wert: 2
        meldung: |
          Jedes Tier hat genau einen Kopf. Die Anzahl der Köpfe ist also $x + y$, und das sind $35$, nicht $94$.
      - wert: 3
        meldung: |
          Die Zahlen sind vertauscht. Die Köpfe zählt man mit $x + y$, die Beine mit $2x + 4y$.
  - typ: auswahl
    label: 'b) Die Lösung'
    optionen:
      - '$(23, 12)$'
      - '$(12, 23)$'
      - '$(20, 15)$'
      - '$(17, 18)$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          $12$ Hühner und $23$ Kaninchen hätten $2\cdot 12 + 4\cdot 23 = 116$ Beine. Die Reihenfolge im Paar ist wichtig:
          zuerst $x$ (Hühner), dann $y$ (Kaninchen).
      - wert: 2
        meldung: |
          Die Köpfe stimmen ($20 + 15 = 35$), aber die Beine nicht: $40 + 60 = 100 \neq 94$.
      - wert: 3
        meldung: |
          Die Köpfe stimmen, aber die Beine nicht: $34 + 72 = 106 \neq 94$.
hinweise:
  - 'Jedes Tier hat einen Kopf. Wie viele Beine hat ein Huhn, wie viele ein Kaninchen?'
  - 'Setze jedes Paar in **beide** Gleichungen ein.'
gefuehrt:
  - text: 'Wie viele Beine haben $x$ Hühner zusammen? Gib den Faktor vor $x$ an.'
    teil:
      typ: zahl
      loesung: "2"
      fehler:
        - wert: "4"
          meldung: 'Ein Huhn hat $2$ Beine. Vier Beine hat ein Kaninchen.'
    erklaerung: '$x$ Hühner haben $2x$ Beine, $y$ Kaninchen haben $4y$ Beine.'
  - text: 'Wie viele Beine hätten $23$ Hühner und $12$ Kaninchen zusammen?'
    teil:
      typ: zahl
      loesung: "2*23 + 4*12"
    erklaerung: '$46 + 48 = 94$. Das passt, und die Köpfe ergeben $23 + 12 = 35$.'
  - text: 'Wie viele Beine hätten $20$ Hühner und $15$ Kaninchen?'
    teil:
      typ: zahl
      loesung: "2*20 + 4*15"
    erklaerung: '$40 + 60 = 100$. Das sind zu viele, das Paar $(20, 15)$ ist keine Lösung.'
loesung: |
  Ansatz: Jede Information im Text liefert eine Gleichung. Köpfe: Jedes Tier hat einen Kopf, also $x + y = 35$. Beine: $2x + 4y = 94$.
  ---
  Wir prüfen die Paare in beiden Gleichungen. $(23, 12)$: $23 + 12 = 35$ und $46 + 48 = 94$. Beide stimmen.
  ---
  $(12, 23)$ ergibt $116$ Beine, $(20, 15)$ ergibt $100$ Beine und $(17, 18)$ ergibt $106$ Beine. Diese Paare erfüllen nur die erste Gleichung.
  ---
  Antwort: Auf dem Hof leben $23$ Hühner und $12$ Kaninchen.
```

```aufgabe
id: lm-fehler-ersetzen
titel: Wo ist der Fehler?
niveau: 3
lernziel: 0
kompetenz: begruenden
angabe: |
  Lena löst das System $x + 2y = 8$ (I) und $3x - y = 3$ (II). Sie ersetzt **gleichzeitig** I durch $3\cdot\text{I} - \text{II}$
  und II durch $\text{II} - 3\cdot\text{I}$. So erhält sie
  $$7y = 21 \qquad\text{und}\qquad -7y = -21.$$
  Sie schließt: „$y = 3$, und $x$ ist beliebig. Das System hat unendlich viele Lösungen.“

  a) Welcher Schritt ist falsch?

  b) Bestimme die richtige Lösung.

  c) Begründe mit einem konkreten Paar, dass Lenas Schluss falsch ist.
teile:
  - typ: auswahl
    label: 'a) Der Fehler'
    optionen:
      - 'Sie ersetzt beide Gleichungen gleichzeitig. Dadurch geht die Information über $x$ verloren.'
      - 'Man darf eine Gleichung nicht mit $3$ multiplizieren.'
      - 'Die Rechnung $3\cdot\text{I} - \text{II}$ ergibt nicht $7y = 21$.'
      - 'Ein System aus zwei Gleichungen hat immer genau eine Lösung.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Multiplizieren mit $3 \neq 0$ ist erlaubt, man macht es mit $\frac13$ wieder rückgängig.
      - wert: 2
        meldung: |
          Rechne nach: $3x + 6y - (3x - y) = 7y$ und $24 - 3 = 21$. Dieser Schritt stimmt.
      - wert: 3
        meldung: |
          Das stimmt nicht allgemein. Ein System aus zwei Gleichungen kann auch keine oder unendlich viele Lösungen haben.
          Hier liegt der Fehler aber im Vorgehen.
  - typ: vektor
    label: 'b) Lösung $(x, y)$'
    namen: ["x", "y"]
    loesung: ["2", "3"]
    fehler:
      - wert: ["0", "3"]
        meldung: |
          $y = 3$ stimmt. Setze es in eine **ursprüngliche** Gleichung ein, um $x$ zu bestimmen: $x + 2\cdot 3 = 8$.
  - typ: text
    label: 'c) Begründung mit einem Paar'
    muster: |
      Nach Lena wäre zum Beispiel $(0, 3)$ eine Lösung. In I ergibt das aber $0 + 6 = 6 \neq 8$. Also ist $(0, 3)$ keine
      Lösung, und es gibt nicht unendlich viele Lösungen. Der Fehler: Die neue Gleichung II wurde aus dem alten I berechnet,
      und gleichzeitig wurde I ersetzt. Beide neuen Gleichungen sind Vielfache voneinander, eine Bedingung ging verloren.
hinweise:
  - 'Vergleiche die beiden neuen Gleichungen. Was fällt auf, wenn du die zweite mit $-1$ multiplizierst?'
  - 'Richtig ist: I bleibt stehen, nur II wird durch $\text{II} - 3\cdot\text{I}$ ersetzt.'
loesung: |
  Ansatz: Wir prüfen Lenas Vorgehen mit den Regeln für Äquivalenzumformungen. Nur **eine** Gleichung darf ersetzt werden, die andere muss stehen bleiben.
  ---
  a) Beide Ersetzungen gleichzeitig sind nicht erlaubt. Die zweite neue Gleichung $-7y = -21$ ist das $(-1)$-Fache der ersten. Es bleibt nur die Information $y = 3$, die Bedingung für $x$ ist verloren.
  ---
  b) Richtig: I bleibt stehen, $\text{II} - 3\cdot\text{I}$ ergibt $-7y = -21$, also $y = 3$. Aus I: $x + 6 = 8$, also $x = 2$. Probe in II: $6 - 3 = 3$.
  ---
  c) Lenas „Lösung“ $(0, 3)$ ergibt in I nur $0 + 6 = 6 \neq 8$. Das System hat genau eine Lösung, nämlich $(2, 3)$.
```

## Systeme mit zwei Unbekannten

```aufgabe
id: lm-check-einsetzen-vorbereiten
titel: Einen Term für y einsetzen
niveau: 1
art: check
angabe: |
  In der Gleichung $3x + y = 7$ wird $y$ durch den Term $4 - 2x$ ersetzt. Löse die entstehende Gleichung nach $x$.
  Herkunft: [Kapitel 2, „Lineare Gleichungen“](/lernen/mathe3/gleichungen/lineare-gleichungen).
teile:
  - typ: zahl
    label: '$x =$'
    loesung: "7 - 4"
    anzeige: '3'
    fehler:
      - wert: "3/5"
        meldung: |
          Das Minus vor $2x$ ist verloren gegangen. Eingesetzt steht dort $3x + (4 - 2x) = 7$, also $3x + 4 - 2x = 7$.
          Zusammengefasst ist das $x + 4 = 7$.
hinweise:
  - 'Schreib den Term in Klammern: $3x + (4 - 2x) = 7$. Fasse dann die $x$-Terme zusammen.'
loesung: |
  Einsetzen mit Klammer: $3x + (4 - 2x) = 7$, also $x + 4 = 7$.
  ---
  $4$ abziehen: $x = 3$.
```

In dieser Lektion lösen wir Systeme aus zwei Gleichungen mit zwei Unbekannten. Alle Verfahren beruhen auf
derselben Idee: **Man beseitigt eine Unbekannte.** Dann bleibt eine Gleichung mit nur einer Unbekannten übrig,
und die kannst du aus [Kapitel 2](/lernen/mathe3/gleichungen/lineare-gleichungen) lösen. Das Beseitigen einer
Unbekannten heißt **Eliminieren** (lateinisch „hinausbefördern“). Die Check-Frage hat genau diesen Schritt geübt.

### Drei Lösungsverfahren

Es gibt drei klassische Verfahren. Sie unterscheiden sich nur darin, **wie** die Unbekannte beseitigt wird.

:::beispiel[Einsetzungsverfahren]
Löse das System
$$\begin{aligned} 2x + y &= 8 &\text{(I)}\\ 3x - 4y &= 1 &\text{(II)} \end{aligned}$$

1. **Eine Gleichung nach einer Unbekannten auflösen.** In I hat $y$ den Koeffizienten $1$. Darum lösen wir I nach
   $y$ auf: $y = 8 - 2x$.
2. **In die andere Gleichung einsetzen.** Wir ersetzen in II das $y$ durch $(8 - 2x)$. Die Klammer ist wichtig:
   $3x - 4\cdot(8 - 2x) = 1$.
3. **Ausrechnen.** Klammer auflösen: $3x - 32 + 8x = 1$. Zusammenfassen: $11x - 32 = 1$. Dann $11x = 33$ und $x = 3$.
4. **Die zweite Unbekannte berechnen.** Aus Schritt 1: $y = 8 - 2\cdot 3 = 2$.
5. **Probe in beiden Gleichungen.** I: $2\cdot 3 + 2 = 8$, stimmt. II: $3\cdot 3 - 4\cdot 2 = 9 - 8 = 1$, stimmt.

Die Lösungsmenge ist $L = \{(3, 2)\}$. Die geschweiften Klammern bedeuten „die Menge, die genau aus diesem Paar besteht“.
:::

Das Einsetzungsverfahren lohnt sich, wenn eine Unbekannte schon allein steht oder den Koeffizienten $1$ oder $-1$
hat. Sonst entstehen beim Auflösen schnell Brüche.

:::beispiel[Gleichsetzungsverfahren]
Löse das System
$$\begin{aligned} y &= 3x - 5 &\text{(I)}\\ y &= -x + 7 &\text{(II)} \end{aligned}$$

1. Beide Gleichungen sind schon nach $y$ aufgelöst. Wenn beide gelten, müssen die rechten Seiten gleich sein:
   $3x - 5 = -x + 7$.
2. $x$ auf beiden Seiten addieren und $5$ addieren: $4x = 12$, also $x = 3$.
3. In I einsetzen: $y = 3\cdot 3 - 5 = 4$.
4. Probe in II: $-3 + 7 = 4$, stimmt. Die Lösungsmenge ist $L = \{(3, 4)\}$.
:::

Gleichsetzen ist ideal, wenn beide Gleichungen die Form $y = kx + d$ haben, also Geradengleichungen sind. Es ist
eigentlich ein Sonderfall des Einsetzens: Man setzt den Term für $y$ aus I in II ein.

:::beispiel[Additionsverfahren]
Löse das System
$$\begin{aligned} 5x + 2y &= 4 &\text{(I)}\\ 3x - 4y &= 18 &\text{(II)} \end{aligned}$$

1. **Ziel:** Vor $y$ sollen zwei **Gegenzahlen** stehen, also Zahlen, die sich zu $0$ addieren. In I steht $2$, in II
   steht $-4$. Multiplizieren wir I mit $2$, steht vor $y$ die Zahl $4$: $\;10x + 4y = 8$.
2. **Addieren.** Wir addieren die neue Gleichung und II, linke Seite zu linker Seite, rechte zu rechter:
   $(10x + 4y) + (3x - 4y) = 8 + 18$. Das $y$ fällt weg: $13x = 26$, also $x = 2$.
3. **Einsetzen.** In I: $5\cdot 2 + 2y = 4$, also $2y = -6$ und $y = -3$.
4. **Probe in II:** $3\cdot 2 - 4\cdot(-3) = 6 + 12 = 18$, stimmt. Die Lösungsmenge ist $L = \{(2, -3)\}$.
:::

Das Additionsverfahren heißt auch **Eliminationsverfahren**. Es verwendet nur die Äquivalenzumformungen aus der
Lektion [3.1 Lineare Gleichungen und Gleichungssysteme](/lernen/mathe3/lgs-matrizen/lineare-gleichungen-und-gleichungssysteme):
eine Gleichung mit einer Zahl $c \neq 0$ multiplizieren und ein Vielfaches einer Gleichung zu einer anderen addieren.
Darum funktioniert es immer, auch bei großen Systemen. Das Gauß-Verfahren der nächsten Lektion
[3.3 Das Gauß-Verfahren](/lernen/mathe3/lgs-matrizen/das-gauss-verfahren) ist nichts anderes als das Additionsverfahren
mit fester Reihenfolge.

:::merke[Welches Verfahren wann?]
- Eine Unbekannte steht allein oder hat den Koeffizienten $1$ oder $-1$: **Einsetzen**.
- Beide Gleichungen haben die Form $y = \dots$: **Gleichsetzen**.
- In allen anderen Fällen und bei größeren Systemen: **Addieren**.

Am Ende immer die **Probe in jeder ursprünglichen Gleichung**. Sie kostet eine halbe Minute und findet fast jeden
Vorzeichenfehler.
:::

```aufgabe
id: lm-check-verfahren-waehlen
titel: Welches Verfahren ist bequem?
niveau: 1
art: check
angabe: |
  Welches Verfahren ist für das System $x = 2y + 1$ und $3x - 4y = 7$ am bequemsten?
teile:
  - typ: auswahl
    optionen:
      - 'Einsetzen'
      - 'Gleichsetzen'
      - 'Addieren'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Gleichsetzen geht, wenn beide Gleichungen nach **derselben** Unbekannten aufgelöst sind. Hier ist nur die erste nach $x$ aufgelöst.
      - wert: 2
        meldung: |
          Addieren funktioniert immer, ist hier aber umständlich. Die erste Gleichung liefert schon einen fertigen Term für $x$.
hinweise:
  - 'Steht eine Unbekannte schon allein auf einer Seite?'
loesung: |
  In der ersten Gleichung steht $x$ schon allein. Man setzt $x = 2y + 1$ direkt in die zweite Gleichung ein.
  ---
  Zur Kontrolle: $3(2y + 1) - 4y = 7$ ergibt $2y = 4$, also $y = 2$ und $x = 5$.
```

:::achtung[Die Klammer beim Einsetzen vergessen]
**Falsch:** Im Beispiel zum Einsetzungsverfahren schreibt jemand $3x - 4\cdot 8 - 2x = 1$ statt $3x - 4\cdot(8 - 2x) = 1$.
Dann folgt $x - 32 = 1$, also $x = 33$, und $y = 8 - 66 = -58$. Die Probe in I stimmt sogar: $66 - 58 = 8$. Denn $y$
wurde ja aus I berechnet. Die Probe in II deckt den Fehler auf: $3\cdot 33 - 4\cdot(-58) = 99 + 232 = 331 \neq 1$.

**Richtig:** Einen Term immer **in Klammern** einsetzen. Der Faktor $-4$ gilt für den ganzen Term $8 - 2x$, also
$-4\cdot(8 - 2x) = -32 + 8x$. Und die Probe immer in **der Gleichung** machen, in die eingesetzt wurde.
:::

### Geometrische Deutung: zwei Geraden

Jede Gleichung $ax + by = c$ mit $b \neq 0$ beschreibt eine **Gerade** in der $xy$-Ebene. Auf der Geraden liegen
genau die Punkte, deren Koordinaten die Gleichung erfüllen. Löst man nach $y$ auf, erhält man die bekannte Form
$y = kx + d$ mit Steigung $k = -\frac{a}{b}$ und Achsenabschnitt $d = \frac{c}{b}$. Ist $b = 0$, ist die Gerade
senkrecht, zum Beispiel $x = 2$.

Eine Lösung des Systems ist ein Punkt, der auf **beiden** Geraden liegt, also ein **Schnittpunkt**. Zwei Geraden in der
Ebene können auf genau drei Arten zueinander liegen.

```plot
x: [-1, 6]
y: [-2, 9]
gleich: true
graphen:
  - { f: "8 - 2*x", label: "2x + y = 8", farbe: 0 }
  - { f: "(3*x - 1)/4", label: "3x − 4y = 1", farbe: 1 }
punkte:
  - { x: 3, y: 2, label: "S(3 | 2)" }
beschriftung: Fall 1, genau eine Lösung. Die Geraden 2x + y = 8 und 3x − 4y = 1 aus dem Beispiel zum Einsetzungsverfahren haben verschiedene Steigungen. Sie schneiden sich im Punkt S(3 | 2).
```

```plot
x: [-3, 6]
y: [-4, 5]
gleich: true
graphen:
  - { f: "x/2 - 1", label: "x − 2y = 2", farbe: 0 }
  - { f: "x/2 + 1.5", label: "−2x + 4y = 6", farbe: 1 }
beschriftung: Fall 2, keine Lösung. Die Geraden x − 2y = 2 und −2x + 4y = 6 haben beide die Steigung 1/2, aber verschiedene Achsenabschnitte −1 und 1,5. Sie sind parallel und haben keinen gemeinsamen Punkt.
```

```plot
x: [-3, 6]
y: [-4, 4]
gleich: true
graphen:
  - { f: "x/2 - 1", label: "x − 2y = 2 und 3x − 6y = 6", farbe: 2 }
punkte:
  - { x: 2, y: 0, label: "t = 0" }
  - { x: 4, y: 1, label: "t = 1" }
  - { x: 0, y: -1, label: "t = −1" }
beschriftung: Fall 3, unendlich viele Lösungen. Die Gleichung 3x − 6y = 6 ist das Dreifache von x − 2y = 2. Beide beschreiben dieselbe Gerade. Jeder ihrer Punkte ist eine Lösung, drei davon sind markiert.
```

Wie erkennt man die Fälle 2 und 3 beim Rechnen? **Beim Eliminieren fällt mit der einen Unbekannten auch die andere
weg.**

- **Fall 2:** $x - 2y = 2$ (I) und $-2x + 4y = 6$ (II). Wir rechnen $\text{II} + 2\cdot\text{I}$. Links bleibt
  $-2x + 4y + 2x - 4y = 0$, rechts $6 + 4 = 10$. Es entsteht $0 = 10$. Das ist ein **Widerspruch**, eine Aussage,
  die nie stimmt. Also gibt es keine Lösung: $L = \{\,\}$, die **leere Menge**.
- **Fall 3:** $x - 2y = 2$ (I) und $3x - 6y = 6$ (II). Wir rechnen $\text{II} - 3\cdot\text{I}$ und erhalten $0 = 0$.
  Diese Aussage ist immer wahr und schränkt nichts ein. Übrig bleibt nur die Bedingung $x - 2y = 2$.

Im Fall 3 beschreiben wir die unendlich vielen Lösungen so: Wir wählen $y$ frei und nennen den Wert $t$. Das $t$
heißt **Parameter**. Aus $x - 2t = 2$ folgt $x = 2 + 2t$. Also
$$L = \{(2 + 2t,\ t) \mid t \in \R\}.$$
Der senkrechte Strich liest sich „für die gilt“, und $t \in \R$ heißt „$t$ ist eine beliebige reelle Zahl“. Diese
Schreibweise heißt **Parameterdarstellung** der Lösungsmenge. Jeder Wert von $t$ liefert eine Lösung. Für $t = 0$
erhält man $(2, 0)$, für $t = 1$ erhält man $(4, 1)$, für $t = -1$ erhält man $(0, -1)$.

:::achtung[0 = 0 heißt nicht x = 0]
**Falsch:** Im Fall 3 entsteht $0 = 0$. Jemand schließt daraus „$x = 0$ und $y = 0$“. Aber $(0, 0)$ erfüllt die
Gleichung $x - 2y = 2$ nicht, denn $0 - 0 = 0 \neq 2$.

**Richtig:** Die Zeile $0 = 0$ ist eine immer wahre Aussage. Sie sagt **nichts** über $x$ oder $y$. Die Lösungsmenge
ist dann unendlich groß. Die Zeile $0 = 10$ dagegen ist immer falsch, dann ist die Lösungsmenge leer. Ein Ergebnis
wie $0\cdot x = 0$ bedeutet: $x$ ist beliebig, nicht $x = 0$.
:::

### Selbst ausprobieren

```aufgabe
id: lm-check-widget-geraden
titel: Vorhersage für zwei Geraden
niveau: 1
art: check
angabe: |
  Gegeben sind die feste Gerade $x + 2y = 4$ und die bewegliche Gerade $a\,x + 2y = c$. Was passiert, wenn du $a = 1$
  und $c = 4$ wählst? Überlege, bevor du das Werkzeug benutzt.
teile:
  - typ: auswahl
    optionen:
      - 'Die Geraden schneiden sich in genau einem Punkt.'
      - 'Die Geraden sind parallel und verschieden.'
      - 'Die Geraden fallen zusammen.'
    richtig: [2]
    fehler:
      - wert: 0
        meldung: |
          Setz $a = 1$ und $c = 4$ ein. Dann lautet die bewegliche Gleichung $x + 2y = 4$. Vergleiche sie mit der festen.
      - wert: 1
        meldung: |
          Die Steigungen sind gleich, das stimmt. Aber auch die rechten Seiten sind gleich, denn $c = 4$.
hinweise:
  - 'Setze $a = 1$ und $c = 4$ in $a\,x + 2y = c$ ein.'
loesung: |
  Mit $a = 1$ und $c = 4$ lautet die bewegliche Gleichung $x + 2y = 4$.
  ---
  Das ist genau die feste Gleichung. Beide beschreiben dieselbe Gerade, das System hat unendlich viele Lösungen.
```

```widget
name: parameter
titel: Zwei Geraden, drei Fälle
props:
  f: "(c - a*x)/2"
  parameter:
    - { name: a, min: -3, max: 3, step: 0.5, wert: -1 }
    - { name: c, min: -6, max: 8, step: 1, wert: 2 }
  zusatz: ["2 - x/2"]
  x: [-4, 6]
  y: [-4, 6]
```

Die feste Gerade ist $x + 2y = 4$, gezeichnet als $y = 2 - \frac x2$. Die bewegliche Gerade ist $a\,x + 2y = c$.
Prüfe deine Vorhersage: Stell $a = 1$ und $c = 4$ ein. Die Geraden fallen zusammen. Ändere dann nur $c$. Die
Geraden werden parallel und haben keinen gemeinsamen Punkt mehr. Stell zum Schluss ein $a \neq 1$ ein. Jetzt
schneiden sich die Geraden in genau einem Punkt, egal welches $c$ du wählst. Der Grund: Für $a \neq 1$ sind die
Steigungen $-\frac a2$ und $-\frac12$ verschieden.

### Ein Kriterium für genau eine Lösung

Kann man einem System ansehen, ob es genau eine Lösung hat, ohne es ganz zu lösen? Dazu führen wir das
Additionsverfahren einmal allgemein durch, also mit Buchstaben statt Zahlen:
$$\begin{aligned} a_1 x + b_1 y &= c_1 &\text{(I)}\\ a_2 x + b_2 y &= c_2 &\text{(II)} \end{aligned}$$
Dabei sind $a_1, b_1, c_1, a_2, b_2, c_2$ feste Zahlen. Um $y$ zu beseitigen, multiplizieren wir I mit $b_2$ und II
mit $b_1$ und subtrahieren. Vor $y$ steht dann $b_1b_2 - b_1b_2 = 0$. Übrig bleibt
$$(a_1 b_2 - a_2 b_1)\,x = c_1 b_2 - c_2 b_1.$$
Um $x$ zu beseitigen, rechnen wir $a_1\cdot\text{II} - a_2\cdot\text{I}$ und erhalten
$$(a_1 b_2 - a_2 b_1)\,y = a_1 c_2 - a_2 c_1.$$
Vor beiden Unbekannten steht dieselbe Zahl. Wir nennen sie $D = a_1 b_2 - a_2 b_1$.

:::satz[Lösbarkeit eines Systems mit zwei Unbekannten]
Für das System aus I und II sei $D = a_1 b_2 - a_2 b_1$.

- Ist $D \neq 0$, hat das System **genau eine** Lösung, nämlich
  $$x = \frac{c_1 b_2 - c_2 b_1}{D}, \qquad y = \frac{a_1 c_2 - a_2 c_1}{D}.$$
- Ist $D = 0$, hat das System **keine** oder **unendlich viele** Lösungen.
:::

Warum? Ist $D \neq 0$, darf man durch $D$ teilen und erhält genau die angegebenen Werte. Ist $D = 0$, so stehen die
Koeffizienten der beiden Gleichungen im selben Verhältnis. Dann haben beide Geraden dieselbe Steigung. Sie sind
parallel oder identisch, aber nie schneidend.

:::beispiel[Das Kriterium anwenden]
Für welche Werte von $a$ hat das System $3x + a\,y = 2$ (I) und $6x + 4y = 5$ (II) genau eine Lösung?

1. $D = a_1 b_2 - a_2 b_1 = 3\cdot 4 - 6\cdot a = 12 - 6a$.
2. $D = 0$ genau dann, wenn $a = 2$. Für jedes $a \neq 2$ gibt es genau eine Lösung.
3. Für $a = 2$ untersuchen wir genauer. I mal $2$ ergibt $6x + 4y = 4$. II sagt $6x + 4y = 5$. Gleiche linke Seiten, aber
   verschiedene rechte Seiten. Das ist ein Widerspruch, also gibt es für $a = 2$ **keine** Lösung.
4. Zur Kontrolle ein Wert mit $D \neq 0$: Für $a = 1$ ist $D = 6$. Die Formel liefert
   $x = \frac{2\cdot 4 - 5\cdot 1}{6} = \frac12$ und $y = \frac{3\cdot 5 - 6\cdot 2}{6} = \frac12$. Probe: $\frac32 + \frac12 = 2$
   und $3 + 2 = 5$.
:::

Die Zahl $D$ begegnet uns in der Lektion [3.9 Determinanten](/lernen/mathe3/lgs-matrizen/determinanten) wieder.
Dort heißt sie **Determinante**. Die Formeln für $x$ und $y$ sind die **Cramersche Regel** für zwei Unbekannte.

:::pruefung[Systeme mit Parameter: zuerst D, dann die Sonderfälle]
In Prüfungen heißt es oft: „Für welche Werte des Parameters $a$ ist das System eindeutig lösbar?“ So gehst du vor:

1. Berechne die Zahl $D = a_1 b_2 - a_2 b_1$ aus den Koeffizienten der Gleichungen $a_1 x + b_1 y = c_1$ und
   $a_2 x + b_2 y = c_2$. Sie ist hier ein Term in $a$. Setze $D = 0$. So findest du die **Sonderwerte**.
2. Schreib den Antwortsatz: „Für alle anderen Werte von $a$ gibt es genau eine Lösung.“
3. Setze jeden Sonderwert einzeln ein und prüfe, ob ein Widerspruch (keine Lösung) oder $0 = 0$ (unendlich viele) entsteht.

Wer Schritt 3 weglässt, verliert Punkte. Denn $D = 0$ allein sagt nicht, welcher der beiden Fälle vorliegt.
:::

```reflexion
frage: Warum kann ein lineares System mit zwei Unbekannten nie genau zwei Lösungen haben? Antworte mit dem Bild der Geraden.
antwort: |
  Jede Gleichung beschreibt eine Gerade. Zwei verschiedene Geraden, die sich schneiden, haben genau einen gemeinsamen Punkt.
  Haben zwei Geraden zwei gemeinsame Punkte, so geht durch diese zwei Punkte nur eine einzige Gerade. Die beiden Geraden sind
  also identisch und haben unendlich viele gemeinsame Punkte. Darum gibt es nur drei Möglichkeiten: keine, genau eine oder
  unendlich viele Lösungen.
```

### Übungen

```aufgabe
id: lm-einsetzen
titel: Einsetzungsverfahren
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Löse mit dem Einsetzungsverfahren:
  $$\begin{aligned} x - 3y &= -7\\ 4x + y &= -2 \end{aligned}$$
teile:
  - typ: vektor
    label: 'Lösung $(x, y)$'
    namen: ["x", "y"]
    loesung: ["-1", "2"]
    fehler:
      - wert: ["2", "-1"]
        meldung: |
          Die Zahlen stimmen, aber die Reihenfolge nicht. Im Paar $(x, y)$ steht zuerst $x$, dann $y$.
      - wert: ["-13", "2"]
        meldung: |
          $y = 2$ stimmt. Beim Zurückrechnen ist ein Vorzeichen verloren gegangen: $x = 3y - 7 = 6 - 7$.
hinweise:
  - 'In der ersten Gleichung hat $x$ den Koeffizienten $1$. Löse nach $x$ auf: $x = 3y - 7$.'
loesung: |
  Ansatz: Die erste Gleichung lässt sich ohne Brüche nach $x$ auflösen, darum Einsetzen: $x = 3y - 7$.
  ---
  In die zweite Gleichung einsetzen, mit Klammer: $4(3y - 7) + y = -2$, also $12y - 28 + y = -2$, $13y = 26$ und $y = 2$.
  ---
  Zurück einsetzen: $x = 3\cdot 2 - 7 = -1$. Probe: $-1 - 6 = -7$ und $-4 + 2 = -2$. Also $L = \{(-1, 2)\}$.
```

```aufgabe
id: lm-additionsverfahren
titel: Additionsverfahren
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Löse mit dem Additionsverfahren:
  $$\begin{aligned} 3x + 2y &= 12\\ 5x - 2y &= 4 \end{aligned}$$
teile:
  - typ: vektor
    label: 'Lösung $(x, y)$'
    namen: ["x", "y"]
    loesung: ["2", "3"]
    fehler:
      - wert: ["3", "2"]
        meldung: |
          Prüfe die Reihenfolge. Im Paar $(x, y)$ steht zuerst $x$. Setz dein Paar zur Kontrolle in die erste Gleichung ein.
      - wert: ["2", "9"]
        meldung: |
          $x = 2$ stimmt. Beim Auflösen von $6 + 2y = 12$ wird die $6$ auf beiden Seiten **abgezogen**: $2y = 6$.
hinweise:
  - 'Vor $y$ stehen schon die Gegenzahlen $2$ und $-2$. Addiere die beiden Gleichungen.'
loesung: |
  Ansatz: Vor $y$ stehen die Gegenzahlen $2$ und $-2$. Beim Addieren fällt $y$ weg.
  ---
  Addieren: $(3x + 2y) + (5x - 2y) = 12 + 4$, also $8x = 16$ und $x = 2$.
  ---
  In die erste Gleichung: $6 + 2y = 12$, also $y = 3$. Probe in der zweiten: $10 - 6 = 4$. Also $L = \{(2, 3)\}$.
```

```aufgabe
id: lm-gleichsetzen
titel: Gleichsetzungsverfahren
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Löse mit dem Gleichsetzungsverfahren:
  $$\begin{aligned} y &= 2x + 3\\ y &= -3x - 7 \end{aligned}$$
teile:
  - typ: vektor
    label: 'Lösung $(x, y)$'
    namen: ["x", "y"]
    loesung: ["-2", "-1"]
    fehler:
      - wert: ["2", "7"]
        meldung: |
          Auf der rechten Seite ist ein Vorzeichen verloren gegangen. Aus $2x + 3 = -3x - 7$ folgt durch Addieren von $3x$ und
          Abziehen von $3$ die Gleichung $5x = -7 - 3 = -10$, nicht $5x = 10$.
hinweise:
  - 'Setze die beiden rechten Seiten gleich: $2x + 3 = -3x - 7$.'
loesung: |
  Ansatz: Beide Gleichungen sind nach $y$ aufgelöst. Darum setzen wir die rechten Seiten gleich.
  ---
  $2x + 3 = -3x - 7$. Auf beiden Seiten $3x$ addieren und $3$ abziehen: $5x = -10$, also $x = -2$.
  ---
  $y = 2\cdot(-2) + 3 = -1$. Probe in der zweiten Gleichung: $-3\cdot(-2) - 7 = 6 - 7 = -1$. Also $L = \{(-2, -1)\}$.
```

```aufgabe
id: lm-brueche
titel: System mit Brüchen
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Löse das System
  $$\begin{aligned} \frac{x}{3} + \frac{y}{2} &= 5\\[2pt] \frac{x}{6} - \frac{y}{4} &= \frac12 \end{aligned}$$
teile:
  - typ: vektor
    label: 'Lösung $(x, y)$'
    namen: ["x", "y"]
    loesung: ["9", "4"]
    fehler:
      - wert: ["4", "9"]
        meldung: |
          Prüfe die Reihenfolge im Paar $(x, y)$. Setz dein Paar zur Kontrolle in die erste Gleichung ein.
      - wert: ["11/8", "3/4"]
        meldung: |
          Beim Multiplizieren mit dem Hauptnenner muss auch die **rechte Seite** multipliziert werden. Aus der ersten
          Gleichung wird $2x + 3y = 30$, nicht $2x + 3y = 5$. Aus der zweiten wird $2x - 3y = 6$, nicht $2x - 3y = \frac12$.
hinweise:
  - 'Multipliziere jede Gleichung mit ihrem Hauptnenner, damit die Brüche verschwinden. Das ist erlaubt, weil der Faktor nicht $0$ ist.'
  - 'Erste Gleichung mal $6$, zweite mal $12$. Vergiss die rechten Seiten nicht.'
gefuehrt:
  - text: 'Multipliziere die erste Gleichung mit $6$. Welche Zahl steht dann auf der rechten Seite?'
    teil:
      typ: zahl
      loesung: "5*6"
      fehler:
        - wert: "5"
          meldung: 'Beide Seiten werden mit $6$ multipliziert, also auch die $5$.'
    erklaerung: 'Aus $\frac x3 + \frac y2 = 5$ wird $2x + 3y = 30$.'
  - text: 'Multipliziere die zweite Gleichung mit $12$. Welche Zahl steht dann rechts?'
    teil:
      typ: zahl
      loesung: "12/2"
    erklaerung: 'Aus $\frac x6 - \frac y4 = \frac12$ wird $2x - 3y = 6$.'
  - text: 'Addiere die beiden neuen Gleichungen $2x + 3y = 30$ und $2x - 3y = 6$. Welchen Wert hat $x$?'
    teil:
      typ: zahl
      loesung: "36/4"
    erklaerung: 'Das $y$ fällt weg: $4x = 36$, also $x = 9$.'
  - text: 'Setze $x = 9$ in $2x + 3y = 30$ ein. Welchen Wert hat $y$?'
    teil:
      typ: zahl
      loesung: "(30 - 18)/3"
    erklaerung: '$18 + 3y = 30$, also $y = 4$.'
loesung: |
  Ansatz: Brüche erschweren das Rechnen. Wir multiplizieren jede Gleichung mit ihrem Hauptnenner. Das ist eine Äquivalenzumformung, weil der Faktor nicht $0$ ist.
  ---
  Erste Gleichung mal $6$: $2x + 3y = 30$. Zweite Gleichung mal $12$: $2x - 3y = 6$.
  ---
  Addieren: $4x = 36$, also $x = 9$. Einsetzen: $18 + 3y = 30$, also $y = 4$.
  ---
  Probe im Original: $\frac93 + \frac42 = 3 + 2 = 5$ und $\frac96 - \frac44 = 1{,}5 - 1 = \frac12$. Also $L = \{(9, 4)\}$.
```

```aufgabe
id: lm-kinokarten
titel: Kinokarten
niveau: 2
lernziel: 1
kompetenz: modellieren
angabe: |
  Für eine Schulvorstellung werden $40$ Kinokarten verkauft. Erwachsene zahlen $11$ Euro, Kinder $6$ Euro.
  Insgesamt werden $315$ Euro eingenommen. Wie viele Erwachsenen- und wie viele Kinderkarten waren es?
teile:
  - typ: zahl
    label: 'Anzahl der Erwachsenenkarten'
    loesung: "(315 - 6*40)/(11 - 6)"
    anzeige: '15'
    fehler:
      - wert: "25"
        meldung: |
          Das ist die Anzahl der Kinderkarten. Probe: $25$ Erwachsene und $15$ Kinder brächten $275 + 90 = 365$ Euro.
  - typ: zahl
    label: 'Anzahl der Kinderkarten'
    loesung: "40 - (315 - 6*40)/(11 - 6)"
    anzeige: '25'
    fehler:
      - wert: "15"
        meldung: |
          Das ist die Anzahl der Erwachsenenkarten. Kontrolliere, welche Unbekannte du für welche Gruppe gewählt hast.
hinweise:
  - 'Wähle $x$ = Anzahl der Erwachsenenkarten und $y$ = Anzahl der Kinderkarten. Eine Gleichung zählt Karten, eine zählt Euro.'
  - 'Die Gleichungen lauten $x + y = 40$ und $11x + 6y = 315$. Löse die erste nach $y$ auf und setze ein.'
loesung: |
  Ansatz: $x$ = Erwachsenenkarten, $y$ = Kinderkarten. Karten: $x + y = 40$. Geld in Euro: $11x + 6y = 315$.
  ---
  Aus der ersten Gleichung: $y = 40 - x$. Eingesetzt: $11x + 6(40 - x) = 315$, also $11x + 240 - 6x = 315$ und $5x = 75$.
  ---
  $x = 15$ und $y = 40 - 15 = 25$. Probe: $11\cdot 15 + 6\cdot 25 = 165 + 150 = 315$.
  ---
  Antwort: Es wurden $15$ Erwachsenenkarten und $25$ Kinderkarten verkauft.
```

```aufgabe
id: lm-2x2-faelle
titel: Eine, keine oder unendlich viele?
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: |
  Entscheide für jedes System, wie viele Lösungen es hat.

  (i) $\;3x - 6y = 9\;$ und $\;-x + 2y = -3$

  (ii) $\;3x - 6y = 9\;$ und $\;-x + 2y = 3$

  (iii) $\;3x - 6y = 9\;$ und $\;x + 2y = 3$
teile:
  - typ: auswahl
    label: 'System (i)'
    optionen: ['genau eine', 'keine', 'unendlich viele']
    richtig: [2]
    fehler:
      - wert: 1
        meldung: 'Multipliziere die zweite Gleichung mit $-3$. Vergleiche dann auch die rechten Seiten: $(-3)\cdot(-3) = 9$.'
      - wert: 0
        meldung: 'Die linken Seiten sind Vielfache voneinander, also sind die Geraden parallel oder identisch. Genau eine Lösung ist unmöglich.'
  - typ: auswahl
    label: 'System (ii)'
    optionen: ['genau eine', 'keine', 'unendlich viele']
    richtig: [1]
    fehler:
      - wert: 2
        meldung: 'Die zweite Gleichung mal $-3$ ergibt $3x - 6y = -9$. Die erste verlangt aber $9$. Das ist ein Widerspruch.'
      - wert: 0
        meldung: 'Die linken Seiten sind Vielfache voneinander, also sind die Geraden parallel oder identisch. Genau eine Lösung ist unmöglich.'
  - typ: auswahl
    label: 'System (iii)'
    optionen: ['genau eine', 'keine', 'unendlich viele']
    richtig: [0]
    fehler:
      - wert: 2
        meldung: 'Berechne $D = a_1b_2 - a_2b_1 = 3\cdot 2 - 1\cdot(-6)$. Ist $D \neq 0$, gibt es genau eine Lösung.'
      - wert: 1
        meldung: 'Die Steigungen sind verschieden: $\frac12$ und $-\frac12$. Zwei Geraden mit verschiedenen Steigungen schneiden sich.'
hinweise:
  - 'Prüfe, ob die linke Seite der zweiten Gleichung ein Vielfaches der linken Seite der ersten ist.'
  - 'Wenn ja: Vergleiche auch die rechten Seiten. Wenn nein: Es gibt genau eine Lösung, weil $D \neq 0$.'
loesung: |
  Ansatz: Wir prüfen, ob die linken Seiten Vielfache voneinander sind. Das ist genau der Fall $D = 0$.
  ---
  (i) Zweite Gleichung mal $-3$: $3x - 6y = 9$. Das ist genau die erste Gleichung. Dieselbe Gerade, **unendlich viele** Lösungen: $L = \{(3 + 2t,\ t) \mid t \in \R\}$.
  ---
  (ii) Zweite Gleichung mal $-3$: $3x - 6y = -9$. Zusammen mit $3x - 6y = 9$ folgt $9 = -9$, ein Widerspruch. Parallele Geraden, **keine** Lösung.
  ---
  (iii) $D = 3\cdot 2 - 1\cdot(-6) = 12 \neq 0$, also **genau eine** Lösung. Zur Kontrolle: Zweite Gleichung mal $3$ ergibt $3x + 6y = 9$. Addiert zur ersten: $6x = 18$, also $x = 3$ und $y = 0$.
```

```aufgabe
id: lm-geraden-ablesen
titel: Schnittpunkt ablesen und bestätigen
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: |
  Das Bild zeigt die Geraden $g\colon y = -x + 2$ und $h\colon y = 2x + 5$.
  Lies den Schnittpunkt ab und bestätige ihn rechnerisch.
plot:
  x: [-4, 3]
  y: [-2, 6]
  gleich: true
  graphen:
    - { f: "-x + 2", label: "g", farbe: 0 }
    - { f: "2*x + 5", label: "h", farbe: 1 }
teile:
  - typ: vektor
    label: 'Schnittpunkt $(x, y)$'
    namen: ["x", "y"]
    loesung: ["-1", "3"]
    fehler:
      - wert: ["3", "-1"]
        meldung: |
          Die Koordinaten sind vertauscht. Der Punkt liegt links der $y$-Achse, also ist $x$ negativ.
      - wert: ["1", "1"]
        meldung: |
          Aus $-x + 2 = 2x + 5$ folgt $-3x = 3$, also $x = -1$. Setz $x = 1$ zur Kontrolle ein: $g$ liefert $1$, $h$ liefert $7$.
hinweise:
  - 'Der Schnittpunkt liegt dort, wo sich die beiden Linien kreuzen. Lies zuerst den $x$-Wert ab.'
  - 'Zum Bestätigen: Setze die rechten Seiten gleich, $-x + 2 = 2x + 5$.'
loesung: |
  Ansatz: Ein Schnittpunkt liegt auf beiden Geraden. Rechnerisch setzt man deshalb die rechten Seiten gleich.
  ---
  Abgelesen: Die Geraden kreuzen sich bei $x = -1$ in der Höhe $y = 3$.
  ---
  Rechnung: $-x + 2 = 2x + 5$ ergibt $-3x = 3$, also $x = -1$. Dann $y = -(-1) + 2 = 3$ und zur Kontrolle $2\cdot(-1) + 5 = 3$. Der Schnittpunkt ist $S(-1 \mid 3)$.
```

```aufgabe
id: lm-parameter-2x2
titel: Wann gibt es keine oder unendlich viele Lösungen?
niveau: 3
lernziel: 1
kompetenz: anwenden
angabe: |
  Gegeben ist das System mit zwei reellen Parametern $a$ und $b$:
  $$\begin{aligned} a\,x - 3y &= b\\ 2x - y &= 4 \end{aligned}$$
  a) Für welchen Wert von $a$ hat das System **nicht** genau eine Lösung?

  b) Für welchen Wert von $b$ hat das System dann unendlich viele Lösungen?

  c) Löse das System für $a = 3$ und $b = 0$.
teile:
  - typ: zahl
    label: 'a) $a =$'
    loesung: "6"
    fehler:
      - wert: "-6"
        meldung: |
          Achte auf die Vorzeichen in $D = a_1b_2 - a_2b_1 = a\cdot(-1) - 2\cdot(-3)$. Das ergibt $-a + 6$.
      - wert: "3/2"
        meldung: |
          $D$ ist nicht $a\cdot 2 - (-3)\cdot(-1)$. Multipliziere über Kreuz: $a_1 b_2$ ist $a$ mal $-1$, und $a_2 b_1$ ist $2$ mal $-3$.
  - typ: zahl
    label: 'b) $b =$'
    loesung: "3*4"
    anzeige: '12'
    fehler:
      - wert: "4"
        meldung: |
          Für $a = 6$ ist die linke Seite der ersten Gleichung das **Dreifache** der zweiten: $6x - 3y = 3\,(2x - y)$. Dann muss
          auch $b$ das Dreifache von $4$ sein.
  - typ: vektor
    label: 'c) Lösung $(x, y)$ für $a = 3$, $b = 0$'
    namen: ["x", "y"]
    loesung: ["4", "4"]
    fehler:
      - wert: ["4", "-4"]
        meldung: |
          Aus $3x - 3y = 0$ folgt $x = y$. Setz dein Paar in $2x - y = 4$ ein: $8 - (-4) = 12 \neq 4$.
hinweise:
  - 'Berechne $D = a_1 b_2 - a_2 b_1$ als Term in $a$ und setze $D = 0$.'
  - 'Für den Sonderwert von $a$ ist die linke Seite der ersten Gleichung ein Vielfaches der zweiten. Dieselbe Gerade gibt es nur, wenn auch die rechte Seite dieses Vielfache ist.'
loesung: |
  Ansatz: Mit $D = a_1b_2 - a_2b_1$ finden wir den Sonderwert von $a$. Für diesen Wert vergleichen wir die beiden Gleichungen direkt.
  ---
  a) $D = a\cdot(-1) - 2\cdot(-3) = -a + 6$. $D = 0$ genau dann, wenn $a = 6$. Für jedes andere $a$ gibt es genau eine Lösung.
  ---
  b) Für $a = 6$ lautet die erste Gleichung $6x - 3y = b$. Das Dreifache der zweiten ist $6x - 3y = 12$. Für $b = 12$ sind beide Gleichungen gleichwertig: unendlich viele Lösungen. Für $b \neq 12$ entsteht ein Widerspruch: keine Lösung.
  ---
  c) $a = 3$, $b = 0$: Aus $3x - 3y = 0$ folgt $y = x$. In die zweite Gleichung: $2x - x = 4$, also $x = 4$ und $y = 4$. Probe: $12 - 12 = 0$ und $8 - 4 = 4$.
```

## Das Gauß-Verfahren

```aufgabe
id: lm-check-gauss-vorbereiten
titel: Eine Unbekannte beseitigen
niveau: 1
art: check
angabe: |
  Gegeben ist das System $2x + 3y = 7$ (I) und $4x - y = 7$ (II). Berechne $\text{II} - 2\cdot\text{I}$. Welchen Wert hat
  dann $y$?
  Herkunft: [3.2 Systeme mit zwei Unbekannten](/lernen/mathe3/lgs-matrizen/systeme-mit-zwei-unbekannten).
teile:
  - typ: zahl
    label: '$y =$'
    loesung: "(7 - 2*7)/(-1 - 2*3)"
    anzeige: '1'
    fehler:
      - wert: "-1"
        meldung: |
          Prüfe die rechte Seite: $7 - 2\cdot 7 = -7$. Links bleibt $-y - 6y = -7y$. Also $-7y = -7$.
      - wert: "7/4"
        meldung: |
          Du hast nur $2x$ verdoppelt, nicht aber $3y$. Das $2$-Fache von I ist $4x + 6y = 14$. Ziehst du das von II ab,
          steht vor $y$ die Zahl $-1 - 6 = -7$.
hinweise:
  - '$2\cdot\text{I}$ lautet $4x + 6y = 14$. Ziehe diese Gleichung Seite für Seite von II ab.'
loesung: |
  $2\cdot\text{I}$: $4x + 6y = 14$. Abziehen von II: $(4x - y) - (4x + 6y) = 7 - 14$.
  ---
  Das ergibt $-7y = -7$, also $y = 1$. Das $x$ ist verschwunden.
```

Bei zwei Unbekannten kann man zwischen drei Verfahren wählen. Bei drei und mehr Unbekannten wird Einsetzen schnell
unübersichtlich. Dann hilft das **Gauß-Verfahren**, benannt nach dem Mathematiker Carl Friedrich Gauß. Es ist das
Additionsverfahren in einer festen Reihenfolge. Es funktioniert für jede Größe des Systems und zeigt automatisch,
ob es keine, genau eine oder unendlich viele Lösungen gibt. Auch Computer lösen Gleichungssysteme mit diesem
Algorithmus.

**Die Idee in einem Satz:** Man beseitigt die Unbekannten der Reihe nach, bis die letzte Gleichung nur noch eine
Unbekannte enthält, und rechnet dann von unten nach oben zurück.

### Die erweiterte Koeffizientenmatrix

Beim Umformen ändern sich nur die Zahlen. Die Namen $x, y, z$ und die Gleichheitszeichen bleiben immer an ihrem
Platz. Darum schreibt man nur die Zahlen auf, in einem rechteckigen Schema. Dieses Schema heißt **erweiterte
Koeffizientenmatrix**. Ein senkrechter Strich trennt die rechten Seiten ab:
$$\begin{aligned} x + y + 2z &= 7\\ 2x + 3y - z &= -2\\ -x + 2y + 3z &= 5 \end{aligned}
\qquad\longleftrightarrow\qquad
\left(\begin{array}{rrr|r} 1 & 1 & 2 & 7\\ 2 & 3 & -1 & -2\\ -1 & 2 & 3 & 5 \end{array}\right)$$
Jede **Zeile** ist eine Gleichung. Jede **Spalte** links vom Strich gehört zu einer Unbekannten: die erste zu $x$,
die zweite zu $y$, die dritte zu $z$. Steht vor einer Unbekannten nichts, ist der Koeffizient $1$. Steht nur ein
Minus davor, ist er $-1$. **Fehlt eine Unbekannte** in einer Gleichung, schreibt man an ihre Stelle eine $0$. Das wird
gern vergessen.

Die drei Äquivalenzumformungen heißen in dieser Schreibweise **elementare Zeilenumformungen**:

1. zwei Zeilen vertauschen,
2. eine Zeile mit einer Zahl $c \neq 0$ multiplizieren,
3. ein Vielfaches einer Zeile zu einer anderen Zeile addieren.

Man notiert sie neben der Matrix. Zum Beispiel heißt $\text{II} - 2\cdot\text{I}$: „Ersetze Zeile II durch Zeile II
minus das Doppelte von Zeile I.“ Zeile I selbst bleibt dabei unverändert.

```aufgabe
id: lm-check-zeile-lesen
titel: Eine Zeile als Gleichung lesen
niveau: 1
art: check
angabe: |
  Die Spalten einer erweiterten Matrix gehören zu $x$, $y$ und $z$. Welche Gleichung steht in der Zeile $(0,\ 3,\ -1 \mid 4)$?
teile:
  - typ: auswahl
    optionen:
      - '$3y - z = 4$'
      - '$3x - y = 4$'
      - '$3y + z = 4$'
      - '$0 = 4$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Die erste Spalte gehört zu $x$, und dort steht $0$. Die $3$ steht in der zweiten Spalte, also vor $y$.
      - wert: 2
        meldung: |
          Der Eintrag in der $z$-Spalte ist $-1$. Vor $z$ steht also ein Minus.
      - wert: 3
        meldung: |
          $0 = 4$ wäre die Bedeutung von $(0,\ 0,\ 0 \mid 4)$. Hier stehen links aber nicht nur Nullen.
hinweise:
  - 'Jede Zahl links vom Strich ist der Koeffizient der Unbekannten ihrer Spalte.'
loesung: |
  Die Zeile bedeutet $0\cdot x + 3\cdot y + (-1)\cdot z = 4$.
  ---
  Kürzer geschrieben: $3y - z = 4$.
```

### Das Ziel: Zeilenstufenform

:::definition[Zeilenstufenform]
Eine Matrix hat **Zeilenstufenform**, wenn in jeder Zeile der erste Eintrag ungleich $0$ weiter rechts steht als in
der Zeile darüber. Zeilen, die links vom Strich nur Nullen enthalten, stehen ganz unten. Den ersten Eintrag ungleich
$0$ einer Zeile nennt man **Pivotelement** (französisch „pivot“, Drehpunkt).
:::

Unter jedem Pivotelement stehen dann nur Nullen. Das Schema sieht aus wie eine Treppe.

- **Beispiel:** $\left(\begin{array}{rrr|r} 2 & 1 & -1 & 3\\ 0 & 4 & 2 & 6\\ 0 & 0 & 5 & 10 \end{array}\right)$ hat
  Zeilenstufenform. Die Pivotelemente $2$, $4$, $5$ rücken von Zeile zu Zeile nach rechts.
- **Nichtbeispiel:** $\left(\begin{array}{rrr|r} 2 & 1 & -1 & 3\\ 0 & 4 & 2 & 6\\ 0 & 3 & 5 & 10 \end{array}\right)$ hat
  **keine** Zeilenstufenform. In der dritten Zeile steht die $3$ unter dem Pivotelement $4$. Sie muss erst noch
  beseitigt werden.

Aus der Zeilenstufenform liest man die Lösung durch **Rückwärtseinsetzen** ab. Die letzte Zeile enthält nur noch
eine Unbekannte. Ihren Wert setzt man in die vorletzte Zeile ein, die dann ebenfalls nur noch eine Unbekannte
enthält, und so weiter bis zur ersten Zeile.

:::beispiel[Ein System mit drei Unbekannten Schritt für Schritt]
Wir lösen das System, dessen erweiterte Matrix wir gerade aufgeschrieben haben.

**Schritt 1, erste Spalte.** Die erste Zeile beginnt mit $1$. Mit ihr beseitigen wir $x$ in den Zeilen darunter.
Für Zeile II rechnen wir $\text{II} - 2\cdot\text{I}$, denn $2 - 2\cdot 1 = 0$. Für Zeile III rechnen wir
$\text{III} + \text{I}$, denn $-1 + 1 = 0$:
$$\left(\begin{array}{rrr|r} 1 & 1 & 2 & 7\\ 2 & 3 & -1 & -2\\ -1 & 2 & 3 & 5 \end{array}\right)
\xrightarrow{\ \text{II} - 2\cdot\text{I},\ \ \text{III} + \text{I}\ }
\left(\begin{array}{rrr|r} 1 & 1 & 2 & 7\\ 0 & 1 & -5 & -16\\ 0 & 3 & 5 & 12 \end{array}\right)$$
Zur Kontrolle der neuen Zeile II, Eintrag für Eintrag: $2 - 2 = 0$, $3 - 2 = 1$, $-1 - 4 = -5$ und rechts $-2 - 14 = -16$.

**Schritt 2, zweite Spalte.** Die erste Zeile bleibt jetzt unverändert. Das Pivotelement der zweiten Zeile ist $1$.
Damit beseitigen wir die $3$ in Zeile III: $\text{III} - 3\cdot\text{II}$.
$$\xrightarrow{\ \text{III} - 3\cdot\text{II}\ }
\left(\begin{array}{rrr|r} 1 & 1 & 2 & 7\\ 0 & 1 & -5 & -16\\ 0 & 0 & 20 & 60 \end{array}\right)$$
Kontrolle: $5 - 3\cdot(-5) = 5 + 15 = 20$ und rechts $12 - 3\cdot(-16) = 12 + 48 = 60$.

**Schritt 3, rückwärts einsetzen.**

- Zeile III bedeutet $20z = 60$, also $z = 3$.
- Zeile II bedeutet $y - 5z = -16$. Mit $z = 3$: $y - 15 = -16$, also $y = -1$.
- Zeile I bedeutet $x + y + 2z = 7$. Mit $y = -1$ und $z = 3$: $x - 1 + 6 = 7$, also $x = 2$.

**Schritt 4, Probe in allen drei ursprünglichen Gleichungen.** $2 - 1 + 6 = 7$, dann $4 - 3 - 3 = -2$, dann
$-2 - 2 + 9 = 5$. Alles stimmt. Die Lösungsmenge ist $L = \{(2, -1, 3)\}$.
:::

### Wenn das Pivotelement unbequem ist

Steht oben links eine $0$, kann man mit dieser Zeile nichts beseitigen. Dann **vertauscht** man sie mit einer
Zeile, die vorne keine $0$ hat. Steht dort eine Zahl wie $2$ oder $3$, können beim Eliminieren Brüche entstehen.
Ein Trick vermeidet das: Man multipliziert **beide** beteiligten Zeilen so, dass vorne dieselbe Zahl steht. Steht
in Zeile I vorne eine $2$ und in Zeile III eine $3$, rechnet man $2\cdot\text{III} - 3\cdot\text{I}$. Vorne steht
dann $2\cdot 3 - 3\cdot 2 = 0$. Das ist erlaubt: Zeile III wird mit $2 \neq 0$ multipliziert, dann wird ein
Vielfaches von Zeile I abgezogen, und Zeile I bleibt stehen.

:::beispiel[Tauschen und Brüche vermeiden]
Löse das System
$$\left(\begin{array}{rrr|r} 0 & 2 & 1 & 7\\ 2 & 3 & -1 & 5\\ 3 & -2 & 2 & 5 \end{array}\right)$$

1. **Tauschen.** Zeile I beginnt mit $0$. Wir vertauschen I und II:
   $$\left(\begin{array}{rrr|r} 2 & 3 & -1 & 5\\ 0 & 2 & 1 & 7\\ 3 & -2 & 2 & 5 \end{array}\right)$$
2. **Erste Spalte ohne Brüche.** Zeile II hat vorne schon eine $0$. Für Zeile III rechnen wir $2\cdot\text{III} - 3\cdot\text{I}$:
   $(6 - 6,\ -4 - 9,\ 4 + 3 \mid 10 - 15) = (0,\ -13,\ 7 \mid -5)$.
3. **Zweite Spalte.** Die Pivotelemente sind $2$ (Zeile II) und $-13$ (Zeile III). Wir rechnen
   $2\cdot\text{III} + 13\cdot\text{II}$: $(0,\ -26 + 26,\ 14 + 13 \mid -10 + 91) = (0,\ 0,\ 27 \mid 81)$.
4. **Rückwärts.** $27z = 81$, also $z = 3$. Zeile II: $2y + 3 = 7$, also $y = 2$. Zeile I: $2x + 6 - 3 = 5$, also $x = 1$.
5. **Probe** im ursprünglichen System: $4 + 3 = 7$, dann $2 + 6 - 3 = 5$, dann $3 - 4 + 6 = 5$. Also $L = \{(1, 2, 3)\}$.
:::

:::merke[Gauß-Verfahren für drei Unbekannte]
1. **Erweiterte Matrix** aufschreiben. Fehlende Unbekannte als $0$ eintragen.
2. **Erste Spalte:** Eine Zeile, die vorne keine $0$ hat, nach oben tauschen, am besten eine mit $1$ oder $-1$.
   Damit in allen Zeilen darunter den ersten Eintrag zu $0$ machen.
3. **Zweite Spalte:** Ab der zweiten Zeile dasselbe. Die erste Zeile wird nicht mehr verändert.
4. **Stufenform lesen:** Eine Zeile $0 = c$ mit $c \neq 0$ heißt keine Lösung. Sonst heißt eine Nullzeile $0 = 0$
   unendlich viele Lösungen. Gibt es beides nicht, gibt es genau eine Lösung, und man setzt rückwärts ein.
5. **Probe** in allen ursprünglichen Gleichungen.
:::

Die Fälle „keine“ und „unendlich viele“ Lösungen behandelt die Lektion
[3.4 Lösbarkeit, Rang und Parameterdarstellung](/lernen/mathe3/lgs-matrizen/loesbarkeit-rang-und-parameterdarstellung) genau.

:::achtung[Die rechte Seite vergessen]
**Falsch:** Im ersten Beispiel rechnet jemand $\text{II} - 2\cdot\text{I}$ nur links vom Strich und lässt rechts die
$-2$ stehen. Er erhält $(0,\ 1,\ -5 \mid -2)$ statt $(0,\ 1,\ -5 \mid -16)$. Am Ende kommt eine falsche Lösung heraus,
und die Probe stimmt nicht.

**Richtig:** Eine Zeilenumformung betrifft die **ganze** Zeile, also auch den Eintrag rechts vom Strich:
$-2 - 2\cdot 7 = -16$. Die rechte Seite gehört zur Gleichung genauso wie die linke.
:::

:::achtung[Minus mal Minus beim Subtrahieren]
**Falsch:** Bei $\text{II} - 2\cdot\text{I}$ im ersten Beispiel rechnet jemand für den dritten Eintrag
$-1 - 2\cdot 2 = -1 + 4 = 3$.

**Richtig:** Abgezogen wird $2\cdot 2 = 4$. Also $-1 - 4 = -5$. Schwierig wird es bei negativen Zahlen in der abgezogenen Zeile:
Bei $\text{III} - 3\cdot\text{II}$ ist der dritte Eintrag $5 - 3\cdot(-5) = 5 + 15 = 20$. Hier wird aus Minus mal
Minus ein Plus. Schreib diese Zwischenrechnungen bei jeder Zahl hin, bis du sicher bist.
:::

### Selbst ausprobieren

```aufgabe
id: lm-check-widget-gauss
titel: Vorhersage für den ersten Schritt
niveau: 1
art: check
angabe: |
  Im Werkzeug steht das System aus dem ersten Beispiel. Was steht in Zeile III, nachdem du $\text{III} + \text{I}$
  gerechnet hast? Gib die vier Einträge an, den rechten Eintrag zuletzt.
teile:
  - typ: vektor
    namen: ["x", "y", "z", "rechts"]
    loesung: ["-1 + 1", "2 + 1", "3 + 2", "5 + 7"]
    fehler:
      - wert: ["0", "3", "5", "5"]
        meldung: |
          Auch die rechte Seite wird addiert: $5 + 7 = 12$.
      - wert: ["-2", "1", "1", "-2"]
        meldung: |
          Du hast I von III abgezogen. Gefragt ist $\text{III} + \text{I}$, damit vorne $-1 + 1 = 0$ entsteht.
hinweise:
  - 'Addiere Eintrag für Eintrag: $(-1, 2, 3 \mid 5) + (1, 1, 2 \mid 7)$.'
loesung: |
  Eintrag für Eintrag: $-1 + 1 = 0$, $2 + 1 = 3$, $3 + 2 = 5$, rechts $5 + 7 = 12$.
  ---
  Die neue Zeile III lautet $(0,\ 3,\ 5 \mid 12)$. Vorne steht jetzt eine $0$, wie gewünscht.
```

```widget
name: gauss
titel: Gauß-Elimination zum Nachvollziehen
props:
  matrix: [[1, 1, 2, 7], [2, 3, -1, -2], [-1, 2, 3, 5]]
```

Lass das Werkzeug das erste Beispiel Schritt für Schritt rechnen und vergleiche mit deiner Vorhersage. Das Werkzeug
wählt seine Pivotelemente vielleicht anders und rechnet mit Brüchen. Die Zwischenschritte dürfen sich also
unterscheiden. Die Lösung muss am Ende dieselbe sein, nämlich $(2, -1, 3)$. Ändere danach einzelne Zahlen und
beobachte, wie sich die Lösung ändert.

:::tipp[Gauß-Jordan: bis zur Diagonale weiterrechnen]
Man kann nach Erreichen der Stufenform auch **nach oben** eliminieren, bis links nur noch die Diagonale übrig ist.
Teilt man dann jede Zeile durch ihr Pivotelement, steht links überall $1$ auf der Diagonale und $0$ daneben. Rechts
steht direkt die Lösung, Rückwärtseinsetzen entfällt. Diese Variante heißt **Gauß-Jordan-Verfahren**. Für ein
einzelnes System spart sie wenig. Für die inverse Matrix in der Lektion
[3.8 Die inverse Matrix](/lernen/mathe3/lgs-matrizen/die-inverse-matrix) ist sie das Standardverfahren.
:::

```reflexion
frage: Warum lohnt es sich, im ersten Schritt eine Zeile mit $1$ oder $-1$ an der ersten Stelle nach oben zu tauschen?
antwort: |
  Mit dem Pivotelement $1$ beseitigt man den ersten Eintrag einer anderen Zeile, indem man genau diesen Eintrag als Faktor nimmt.
  Steht dort zum Beispiel $4$, rechnet man „Zeile minus 4 mal Zeile I“. Dabei entstehen nur ganze Zahlen. Mit einem Pivotelement
  wie $3$ müsste man durch $3$ teilen, und es entstehen Brüche. Weniger Brüche heißt weniger Rechenfehler.
```

### Übungen

```aufgabe
id: lm-stufenform-ablesen
titel: Rückwärtseinsetzen
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Ein Gleichungssystem in $x, y, z$ wurde bereits auf Zeilenstufenform gebracht:
  $$\left(\begin{array}{rrr|r} 1 & -2 & 1 & 3\\ 0 & 1 & 2 & 8\\ 0 & 0 & 3 & 6 \end{array}\right)$$
  Bestimme die Lösung.
teile:
  - typ: vektor
    label: 'Lösung $(x, y, z)$'
    namen: ["x", "y", "z"]
    loesung: ["9", "4", "2"]
    fehler:
      - wert: ["-3", "4", "2"]
        meldung: |
          $y = 4$ und $z = 2$ stimmen. In Zeile I steht $x - 2y + z = 3$, also $x - 8 + 2 = 3$. Um $x$ allein zu bekommen,
          addierst du $8$ und ziehst $2$ ab: $x = 3 + 8 - 2$.
      - wert: ["-71", "-28", "18"]
        meldung: |
          Schon $z$ ist falsch, und der Fehler wandert beim Rückwärtseinsetzen weiter. Zeile III bedeutet $3z = 6$.
          Teile durch $3$, statt mit $3$ zu multiplizieren.
hinweise:
  - 'Beginne mit der letzten Zeile. Sie bedeutet $3z = 6$.'
loesung: |
  Ansatz: Die letzte Zeile enthält nur $z$. Wir rechnen von unten nach oben.
  ---
  Zeile III: $3z = 6$, also $z = 2$. Zeile II: $y + 2\cdot 2 = 8$, also $y = 4$.
  ---
  Zeile I: $x - 2\cdot 4 + 2 = 3$, also $x - 6 = 3$ und $x = 9$. Ergebnis: $L = \{(9, 4, 2)\}$.
```

```aufgabe
id: lm-erweiterte-matrix
titel: Die erweiterte Matrix aufstellen
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Stelle die erweiterte Koeffizientenmatrix des Systems auf. Die Spalten gehören zu $x$, $y$, $z$ in dieser Reihenfolge.
  $$\begin{aligned} x + 2z &= 5\\ 3y - z &= 1\\ 2x - y &= 4 \end{aligned}$$
teile:
  - typ: vektor
    label: 'Zeile 2 der Matrix'
    namen: ["x", "y", "z", "rechts"]
    loesung: ["0", "3", "-1", "1"]
    fehler:
      - wert: ["3", "-1", "0", "1"]
        meldung: |
          In der zweiten Gleichung fehlt $x$. An die Stelle von $x$ gehört eine $0$. Die Zahlen rücken nicht einfach nach vorne.
      - wert: ["0", "3", "1", "1"]
        meldung: |
          Vor $z$ steht ein Minus, also ist der Koeffizient $-1$.
  - typ: vektor
    label: 'Zeile 3 der Matrix'
    namen: ["x", "y", "z", "rechts"]
    loesung: ["2", "-1", "0", "4"]
    fehler:
      - wert: ["2", "1", "0", "4"]
        meldung: |
          Vor $y$ steht ein Minus. Der Koeffizient ist also $-1$.
hinweise:
  - 'Fehlt eine Unbekannte in einer Gleichung, steht an ihrer Stelle eine $0$.'
loesung: |
  Ansatz: Jede Gleichung wird eine Zeile, jede Unbekannte hat ihre feste Spalte. Fehlende Unbekannte bekommen den Koeffizienten $0$.
  ---
  $$\left(\begin{array}{rrr|r} 1 & 0 & 2 & 5\\ 0 & 3 & -1 & 1\\ 2 & -1 & 0 & 4 \end{array}\right)$$
  Zeile 2 ist $(0,\ 3,\ -1 \mid 1)$ und Zeile 3 ist $(2,\ -1,\ 0 \mid 4)$.
```

```aufgabe
id: lm-gauss-1
titel: Gauß mit Pivotelement 1
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Löse mit dem Gauß-Verfahren:
  $$\begin{aligned} x + y + z &= 2\\ 2x - y + 3z &= 11\\ x + 3y - 2z &= -5 \end{aligned}$$
teile:
  - typ: vektor
    label: 'Lösung $(x, y, z)$'
    namen: ["x", "y", "z"]
    loesung: ["3", "-2", "1"]
    fehler:
      - wert: ["3", "2", "1"]
        meldung: |
          Prüfe das Vorzeichen von $y$. Aus $-3y + z = 7$ mit $z = 1$ folgt $-3y = 6$.
      - wert: ["1", "-2", "3"]
        meldung: |
          Die Zahlen für $x$ und $z$ sind vertauscht. Setz dein Tripel in die erste Gleichung ein: Beides gibt $2$, aber die
          zweite Gleichung zeigt den Unterschied.
hinweise:
  - 'Erste Spalte: $\text{II} - 2\cdot\text{I}$ und $\text{III} - \text{I}$.'
  - 'Du erhältst $(0, -3, 1 \mid 7)$ und $(0, 2, -3 \mid -7)$. Rechne dann $3\cdot\text{III} + 2\cdot\text{II}$, damit keine Brüche entstehen.'
loesung: |
  Ansatz: Die erste Zeile hat das Pivotelement $1$. Damit beseitigen wir $x$ in den Zeilen II und III.
  ---
  $\text{II} - 2\cdot\text{I}$: $(0,\ -3,\ 1 \mid 7)$. $\text{III} - \text{I}$: $(0,\ 2,\ -3 \mid -7)$.
  ---
  Zweite Spalte ohne Brüche: $3\cdot\text{III} + 2\cdot\text{II}$ ergibt $(0,\ 0,\ -9 + 2 \mid -21 + 14) = (0,\ 0,\ -7 \mid -7)$.
  ---
  Rückwärts: $-7z = -7$, also $z = 1$. Dann $-3y + 1 = 7$, also $y = -2$. Dann $x - 2 + 1 = 2$, also $x = 3$.
  ---
  Probe: $3 - 2 + 1 = 2$, dann $6 + 2 + 3 = 11$, dann $3 - 6 - 2 = -5$. Also $L = \{(3, -2, 1)\}$.
```

```aufgabe
id: lm-gauss-2
titel: Gauß ohne bequemes Pivotelement
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Löse mit dem Gauß-Verfahren, ohne Brüche zu verwenden:
  $$\begin{aligned} 2x - y - z &= 4\\ 3x - y + z &= 13\\ 5x - 2y - z &= 14 \end{aligned}$$
teile:
  - typ: vektor
    label: 'Lösung $(x, y, z)$'
    namen: ["x", "y", "z"]
    loesung: ["3", "-1", "3"]
    fehler:
      - wert: ["3", "1", "3"]
        meldung: |
          Kontrolliere $y$ in der Zeile $(0, 1, 5 \mid 14)$: $y + 5\cdot 3 = 14$, also $y = 14 - 15$.
hinweise:
  - 'Bilde $2\cdot\text{II} - 3\cdot\text{I}$ und $2\cdot\text{III} - 5\cdot\text{I}$. Beide neuen Zeilen beginnen mit $0$.'
  - 'Du erhältst $(0, 1, 5 \mid 14)$ und $(0, 1, 3 \mid 8)$. Ziehe die beiden voneinander ab.'
gefuehrt:
  - text: 'Berechne $2\cdot\text{II} - 3\cdot\text{I}$. Welcher Eintrag entsteht rechts vom Strich?'
    teil:
      typ: zahl
      loesung: "2*13 - 3*4"
      fehler:
        - wert: "13 - 12"
          meldung: 'Zeile II wird zuerst mit $2$ multipliziert, also auch ihre rechte Seite: $2\cdot 13 = 26$.'
    erklaerung: '$26 - 12 = 14$. Die ganze neue Zeile lautet $(0,\ 1,\ 5 \mid 14)$, denn $-2 + 3 = 1$ und $2 + 3 = 5$.'
  - text: 'Berechne $2\cdot\text{III} - 5\cdot\text{I}$. Welcher Eintrag entsteht in der $z$-Spalte?'
    teil:
      typ: zahl
      loesung: "2*(-1) - 5*(-1)"
      fehler:
        - wert: "-7"
          meldung: 'Minus mal Minus: $-5\cdot(-1) = +5$. Also $-2 + 5$.'
    erklaerung: '$-2 + 5 = 3$. Die ganze neue Zeile lautet $(0,\ 1,\ 3 \mid 8)$.'
  - text: 'Ziehe die Zeile $(0, 1, 5 \mid 14)$ von $(0, 1, 3 \mid 8)$ ab. Welchen Wert hat $z$?'
    teil:
      typ: zahl
      loesung: "(8 - 14)/(3 - 5)"
    erklaerung: 'Es entsteht $(0,\ 0,\ -2 \mid -6)$, also $-2z = -6$ und $z = 3$.'
  - text: 'Setze rückwärts ein. Welchen Wert hat $y$?'
    teil:
      typ: zahl
      loesung: "14 - 5*3"
    erklaerung: '$y + 15 = 14$, also $y = -1$. Aus Zeile I: $2x + 1 - 3 = 4$, also $x = 3$.'
loesung: |
  Ansatz: Kein Pivotelement ist $1$ oder $-1$ in der ersten Spalte. Damit keine Brüche entstehen, multiplizieren wir beide beteiligten Zeilen passend.
  ---
  $2\cdot\text{II} - 3\cdot\text{I}$: $(6 - 6,\ -2 + 3,\ 2 + 3 \mid 26 - 12) = (0,\ 1,\ 5 \mid 14)$.
  $2\cdot\text{III} - 5\cdot\text{I}$: $(10 - 10,\ -4 + 5,\ -2 + 5 \mid 28 - 20) = (0,\ 1,\ 3 \mid 8)$.
  ---
  Neue Zeile III minus neue Zeile II: $(0,\ 0,\ -2 \mid -6)$, also $z = 3$.
  ---
  $y + 5\cdot 3 = 14$, also $y = -1$. Dann $2x - (-1) - 3 = 4$, also $2x = 6$ und $x = 3$.
  ---
  Probe: $6 + 1 - 3 = 4$, dann $9 + 1 + 3 = 13$, dann $15 + 2 - 3 = 14$. Also $L = \{(3, -1, 3)\}$.
```

```aufgabe
id: lm-gauss-bruch
titel: Eine Lösung mit Brüchen
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Löse das System. Die Lösung ist nicht ganzzahlig. Gib sie exakt (zum Beispiel `3/2`) oder als Dezimalzahl an.
  $$\begin{aligned} 2x - y + 2z &= 1\\ 4x + y &= 7\\ -2x + 2y + 2z &= -2 \end{aligned}$$
teile:
  - typ: vektor
    label: 'Lösung $(x, y, z)$'
    namen: ["x", "y", "z"]
    loesung: ["3/2", "1", "-1/2"]
    fehler:
      - wert: ["3/2", "1", "1/2"]
        meldung: |
          Prüfe das Vorzeichen von $z$. Aus $-16z = 8$ folgt $z = -\frac12$.
      - wert: ["1/2", "1", "-1/2"]
        meldung: |
          Kontrolliere $x$ in Zeile I: $2x - 1 + 2\cdot\left(-\frac12\right) = 1$, also $2x - 2 = 1$ und $2x = 3$.
hinweise:
  - '$\text{II} - 2\cdot\text{I}$ und $\text{III} + \text{I}$ beseitigen $x$ ganz ohne Brüche. In Zeile II fehlt $z$, dort steht eine $0$.'
  - 'Du erhältst $(0, 3, -4 \mid 5)$ und $(0, 1, 4 \mid -1)$. Tausche die beiden, damit das Pivotelement $1$ ist.'
loesung: |
  Ansatz: Gauß-Verfahren. Brüche entstehen erst ganz am Ende beim Teilen.
  ---
  $\text{II} - 2\cdot\text{I}$: $(0,\ 3,\ -4 \mid 5)$. $\text{III} + \text{I}$: $(0,\ 1,\ 4 \mid -1)$.
  ---
  Zeilen II und III tauschen. Dann $\text{III} - 3\cdot\text{II}$: $(0,\ 3 - 3,\ -4 - 12 \mid 5 + 3) = (0,\ 0,\ -16 \mid 8)$.
  ---
  $z = \frac{8}{-16} = -\frac12$. Aus $y + 4\cdot\left(-\frac12\right) = -1$ folgt $y = 1$.
  ---
  Aus $2x - 1 + 2\cdot\left(-\frac12\right) = 1$ folgt $2x = 3$, also $x = \frac32$. Probe in II: $4\cdot\frac32 + 1 = 7$. Also $L = \{(\frac32, 1, -\frac12)\}$.
```

```aufgabe
id: lm-gauss-fehler
titel: Fehler in einer Gauß-Rechnung finden
niveau: 2
lernziel: 2
kompetenz: begruenden
angabe: |
  Tim löst das System
  $$\left(\begin{array}{rrr|r} 1 & 2 & -1 & 3\\ 2 & 5 & 1 & 14\\ -1 & 1 & 3 & 7 \end{array}\right)$$
  so:

  - Schritt 1: $\text{II} - 2\cdot\text{I}$ ergibt $(0,\ 1,\ 3 \mid 14)$.
  - Schritt 2: $\text{III} + \text{I}$ ergibt $(0,\ 3,\ 2 \mid 10)$.
  - Schritt 3: $\text{III} - 3\cdot\text{II}$ ergibt $(0,\ 0,\ -7 \mid -32)$.

  Er erhält $z = \frac{32}{7}$ und wundert sich über die krummen Zahlen.

  a) In welchem Schritt steckt der Fehler?

  b) Bestimme die richtige Lösung.
teile:
  - typ: auswahl
    label: 'a) Der fehlerhafte Schritt'
    optionen:
      - 'Schritt 1'
      - 'Schritt 2'
      - 'Schritt 3'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Rechne Schritt 2 nach: $-1 + 1 = 0$, $1 + 2 = 3$, $3 - 1 = 2$ und rechts $7 + 3 = 10$. Dieser Schritt stimmt.
      - wert: 2
        meldung: |
          Schritt 3 ist richtig gerechnet, aber er verwendet eine falsche Zeile II. Prüfe Schritt 1 Eintrag für Eintrag,
          auch rechts vom Strich.
  - typ: vektor
    label: 'b) Lösung $(x, y, z)$'
    namen: ["x", "y", "z"]
    loesung: ["1", "2", "2"]
    fehler:
      - wert: ["7", "2/7", "32/7"]
        meldung: |
          Das ist Tims Ergebnis mit dem Fehler aus Schritt 1. Rechne die rechte Seite von $\text{II} - 2\cdot\text{I}$ neu:
          $14 - 2\cdot 3$.
hinweise:
  - 'Prüfe jeden Schritt Eintrag für Eintrag, auch rechts vom Strich.'
  - 'In Schritt 1 muss rechts $14 - 2\cdot 3$ stehen.'
loesung: |
  Ansatz: Krumme Zahlen sind kein Beweis für einen Fehler, aber ein Warnsignal. Wir rechnen jeden Schritt nach, auch rechts vom Strich.
  ---
  a) Schritt 1 ist falsch. Rechts muss $14 - 2\cdot 3 = 8$ stehen, nicht $14$. Tim hat die rechte Seite nicht mit umgeformt. Richtig ist $(0,\ 1,\ 3 \mid 8)$.
  ---
  b) Mit der richtigen Zeile II: $\text{III} - 3\cdot\text{II}$ ergibt $(0,\ 0,\ 2 - 9 \mid 10 - 24) = (0,\ 0,\ -7 \mid -14)$, also $z = 2$.
  ---
  Rückwärts: $y + 3\cdot 2 = 8$, also $y = 2$. Dann $x + 4 - 2 = 3$, also $x = 1$.
  ---
  Probe: $1 + 4 - 2 = 3$, dann $2 + 10 + 2 = 14$, dann $-1 + 2 + 6 = 7$. Also $L = \{(1, 2, 2)\}$. Tims Tripel hätte die Probe in Gleichung II nicht bestanden.
```

```aufgabe
id: lm-zahlenraetsel
titel: Ein Zahlenrätsel
niveau: 3
lernziel: 2
kompetenz: modellieren
angabe: |
  Gesucht ist eine dreistellige Zahl. Ihre Ziffern ergeben zusammen $16$. Die Hunderterziffer ist doppelt so groß wie die
  Einerziffer. Vertauscht man Hunderter- und Einerziffer, wird die Zahl um $396$ kleiner.

  a) Stelle mit $h$ (Hunderter), $z$ (Zehner) und $e$ (Einer) ein Gleichungssystem auf.

  b) Löse es mit dem Gauß-Verfahren und gib die Zahl an.
teile:
  - typ: auswahl
    label: 'a) Welche Gleichung beschreibt das Vertauschen?'
    optionen:
      - '$(100h + 10z + e) - (100e + 10z + h) = 396$'
      - '$(h + z + e) - (e + z + h) = 396$'
      - '$100h - 100e = 396$'
      - '$(100e + 10z + h) - (100h + 10z + e) = 396$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Die Ziffern tragen verschiedenen Wert. Die Zahl mit den Ziffern $h, z, e$ ist $100h + 10z + e$, nicht $h + z + e$.
      - wert: 2
        meldung: |
          Auch die Einerziffer wandert. Die neue Zahl ist $100e + 10z + h$. Beim Abziehen bleibt $99h - 99e$, nicht $100h - 100e$.
      - wert: 3
        meldung: |
          Die neue Zahl ist **kleiner**. Also zieht man die neue Zahl von der alten ab, nicht umgekehrt.
  - typ: zahl
    label: 'b) Die gesuchte Zahl'
    loesung: "844"
    fehler:
      - wert: "448"
        meldung: |
          Das ist die Zahl nach dem Vertauschen. Gesucht ist die ursprüngliche Zahl, deren Hunderterziffer doppelt so groß ist wie die Einerziffer.
hinweise:
  - 'Die Zahl ist $100h + 10z + e$. Die vertauschte Zahl ist $100e + 10z + h$.'
  - 'Die Vertauschungsgleichung vereinfacht sich zu $99h - 99e = 396$, also $h - e = 4$. Mit $h = 2e$ ist das schnell gelöst.'
loesung: |
  Ansatz: Jede Information des Textes wird eine Gleichung. Die Zahl mit den Ziffern $h, z, e$ hat den Wert $100h + 10z + e$.
  ---
  Gleichungen: Quersumme $h + z + e = 16$. Doppelt so groß: $h - 2e = 0$. Vertauschen: $(100h + 10z + e) - (100e + 10z + h) = 396$, also $99h - 99e = 396$. Geteilt durch $99$: $h - e = 4$.
  ---
  Erweiterte Matrix mit den Spalten $h, z, e$:
  $$\left(\begin{array}{rrr|r} 1 & 1 & 1 & 16\\ 1 & 0 & -2 & 0\\ 1 & 0 & -1 & 4 \end{array}\right)$$
  ---
  $\text{II} - \text{I}$: $(0,\ -1,\ -3 \mid -16)$. $\text{III} - \text{I}$: $(0,\ -1,\ -2 \mid -12)$. Dann $\text{III} - \text{II}$: $(0,\ 0,\ 1 \mid 4)$, also $e = 4$.
  ---
  Rückwärts: $-z - 12 = -16$, also $z = 4$. Dann $h = 16 - 4 - 4 = 8$. Die Zahl ist $844$.
  ---
  Probe: $8 + 4 + 4 = 16$, $8 = 2\cdot 4$, und $844 - 448 = 396$. Antwort: Die gesuchte Zahl ist $844$.
```

## Lösbarkeit, Rang und Parameterdarstellung

```aufgabe
id: lm-check-nullzeile
titel: Was bedeutet diese Zeile?
niveau: 1
art: check
angabe: |
  Nach dem Gauß-Verfahren lautet die letzte Zeile einer erweiterten Matrix $(0\ \ 0\ \ 0 \mid 3)$. Was bedeutet das?
  Herkunft: [3.3 Das Gauß-Verfahren](/lernen/mathe3/lgs-matrizen/das-gauss-verfahren).
teile:
  - typ: auswahl
    optionen:
      - 'Die Zeile bedeutet $0x + 0y + 0z = 3$. Das ist nie erfüllt, das System hat keine Lösung.'
      - 'Die Zeile bedeutet $z = 3$.'
      - 'Die Zeile bedeutet $x = y = z = 0$.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Vor $z$ steht hier eine $0$, nicht eine $1$. Die Zeile lautet $0\cdot x + 0\cdot y + 0\cdot z = 3$. Die linke Seite ist
          immer $0$, egal welche Zahlen man einsetzt.
      - wert: 2
        meldung: |
          Setz $x = y = z = 0$ ein: Links steht dann $0$, rechts $3$. Die Gleichung ist nicht erfüllt.
hinweise:
  - 'Schreib die Zeile als Gleichung mit $x$, $y$ und $z$ aus.'
loesung: |
  Die Zeile bedeutet $0\cdot x + 0\cdot y + 0\cdot z = 3$, also $0 = 3$.
  ---
  Diese Aussage ist für jedes Tripel falsch. Darum hat das ganze System keine Lösung.
```

Bisher hatten unsere Systeme mit drei Unbekannten genau eine Lösung. Das ist nicht selbstverständlich. Wie bei zwei
Geraden gibt es auch hier drei Möglichkeiten: keine, genau eine oder unendlich viele Lösungen. In dieser Lektion
lernst du, welche davon vorliegt und wie man unendlich viele Lösungen übersichtlich aufschreibt. Das Werkzeug dafür
ist der **Rang**.

### Wenn eine Nullzeile entsteht

:::beispiel[Ein System mit unendlich vielen Lösungen]
Wir lösen
$$\begin{aligned} x + 2y - z &= 1\\ 2x + 3y + z &= 5\\ 3x + 5y &= 6 \end{aligned}$$

1. **Gauß, erste Spalte.** $\text{II} - 2\cdot\text{I}$ ergibt $(0,\ -1,\ 3 \mid 3)$. $\text{III} - 3\cdot\text{I}$ ergibt
   $(0,\ -1,\ 3 \mid 3)$. In der ursprünglichen Zeile III steht vor $z$ eine $0$, denn $z$ kommt in der dritten
   Gleichung nicht vor. Nach der Umformung steht dort $0 - 3\cdot(-1) = 3$.
2. **Zweite Spalte.** $\text{III} - \text{II}$ ergibt $(0,\ 0,\ 0 \mid 0)$, eine **Nullzeile**. Sie bedeutet $0 = 0$
   und ist immer wahr.
3. **Was ist passiert?** Die dritte Gleichung war überflüssig. Sie ist die Summe der ersten beiden:
   $(x + 2y - z) + (2x + 3y + z) = 3x + 5y$ und $1 + 5 = 6$. Übrig bleiben zwei echte Gleichungen für drei Unbekannte.
4. **Eine Unbekannte frei wählen.** In der Stufenform $(1, 2, -1 \mid 1)$ und $(0, -1, 3 \mid 3)$ stehen Pivotelemente
   in den Spalten von $x$ und $y$. Die Spalte von $z$ hat kein Pivotelement. Darum wählen wir $z$ frei und nennen den
   Wert $t$. Das $t$ heißt **Parameter**.
5. **Rückwärts einsetzen.** Zeile II: $-y + 3t = 3$, also $y = 3t - 3$. Zeile I: $x + 2(3t - 3) - t = 1$, also
   $x + 5t - 6 = 1$ und $x = 7 - 5t$.
6. **Ergebnis:** $L = \{(7 - 5t,\ -3 + 3t,\ t) \mid t \in \R\}$.

Für $t = 0$ erhält man die Lösung $(7, -3, 0)$, für $t = 1$ die Lösung $(2, 0, 1)$, für $t = 2$ die Lösung $(-3, 3, 2)$.
Probe mit dem allgemeinen Tripel in Gleichung II: $2(7 - 5t) + 3(-3 + 3t) + t = 14 - 10t - 9 + 9t + t = 5$. Das
stimmt für **jedes** $t$.
:::

Die Lösungsmenge lässt sich auch mit Vektoren schreiben. Ein Vektor ist hier einfach ein Tripel, das man senkrecht
schreibt:
$$\begin{pmatrix} x\\ y\\ z \end{pmatrix} = \begin{pmatrix} 7\\ -3\\ 0 \end{pmatrix} + t\begin{pmatrix} -5\\ 3\\ 1 \end{pmatrix}, \qquad t \in \R.$$
Zuerst kommt ein fester Punkt, dann ein Vielfaches einer Richtung. Das ist die **Parameterform einer Geraden** im
Raum, die du in [Kapitel 7, „Geraden im Raum“](/lernen/mathe3/analytische-geometrie/geraden-im-raum-parallel-schneidend-oder-windschief) genau kennenlernst. Die Lösungsmenge des Systems
ist also eine Gerade.

:::beispiel[Ein System ohne Lösung]
Wir ändern im Beispiel nur die rechte Seite der dritten Gleichung von $6$ auf $8$. Die erste Spalte ergibt jetzt
$\text{III} - 3\cdot\text{I}$: $(0,\ -1,\ 3 \mid 8 - 3) = (0,\ -1,\ 3 \mid 5)$. Dann $\text{III} - \text{II}$:
$(0,\ 0,\ 0 \mid 2)$. Die letzte Zeile bedeutet $0 = 2$. Das ist ein Widerspruch: Es gibt **keine** Lösung,
$L = \{\,\}$.

Woran liegt das? Die linke Seite der dritten Gleichung ist immer noch die Summe der ersten beiden linken Seiten. Dann
müsste auch die rechte Seite die Summe $1 + 5 = 6$ sein. Mit $8$ widersprechen sich die Gleichungen.
:::

:::achtung[Die Parameterdarstellung ist nicht eindeutig]
**Falsch:** Jemand wählt im Beispiel nicht $z$, sondern $y$ als freie Unbekannte, also $y = s$. Er erhält
$L = \{(2 - \frac53 s,\ s,\ 1 + \frac13 s) \mid s \in \R\}$. Er vergleicht mit $(7 - 5t,\ -3 + 3t,\ t)$ und denkt, eine
der beiden Darstellungen sei falsch.

**Richtig:** Beide beschreiben **dieselbe** Lösungsmenge. Für $s = 0$ erhält man $(2, 0, 1)$, und das ist der Punkt mit
$t = 1$ in der anderen Darstellung. Allgemein gehört zu jedem $s$ der Wert $t = 1 + \frac s3$. In Prüfungen ist jede
korrekte Parameterdarstellung richtig. Kontrollieren kannst du deine Darstellung, indem du das allgemeine Tripel in
alle Gleichungen einsetzt.
:::

### Selbst ausprobieren

```aufgabe
id: lm-check-widget-nullzeile
titel: Vorhersage für eine geänderte rechte Seite
niveau: 1
art: check
angabe: |
  Im Werkzeug steht das System mit unendlich vielen Lösungen. Du änderst die rechte Seite der dritten Zeile von $6$ auf
  $10$. Was steht nach dem Gauß-Verfahren rechts in der letzten Zeile?
teile:
  - typ: zahl
    label: 'rechter Eintrag der letzten Zeile'
    loesung: "10 - 6"
    anzeige: '4'
    fehler:
      - wert: "0"
        meldung: |
          $0$ stand dort, als die rechte Seite $6$ war. Die linke Seite von III ist die Summe von I und II, die rechte Seite
          weicht jetzt aber um $10 - 6$ von der Summe ab.
      - wert: "10"
        meldung: |
          Beim Eliminieren wird von der rechten Seite etwas abgezogen. Am Ende bleibt nur der Unterschied zur „passenden“ rechten Seite $6$.
hinweise:
  - 'Die passende rechte Seite wäre $1 + 5 = 6$. Was bleibt übrig, wenn dort $10$ steht?'
loesung: |
  Die linke Seite der dritten Gleichung ist die Summe der ersten beiden. Passend wäre deshalb die rechte Seite $1 + 5 = 6$.
  ---
  Mit $10$ bleibt nach der Elimination rechts $10 - 6 = 4$ stehen. Die letzte Zeile lautet $(0\ \ 0\ \ 0 \mid 4)$, also $0 = 4$: keine Lösung.
```

```widget
name: gauss
titel: Wenn eine Nullzeile entsteht
props:
  matrix: [[1, 2, -1, 1], [2, 3, 1, 5], [3, 5, 0, 6]]
```

Lass das Werkzeug zuerst das ursprüngliche System rechnen. Es endet mit einer Nullzeile. Ändere dann die rechte
Seite der dritten Zeile auf $10$. Die letzte Zeile wird $(0\ \ 0\ \ 0 \mid 4)$, wie vorhergesagt: Das System hat
keine Lösung mehr. Ändere zum Schluss eine Zahl **links** vom Strich in der dritten Zeile, zum Beispiel die $0$ zu
einer $1$. Dann ist die dritte Gleichung keine Summe der ersten beiden mehr, und das System hat genau eine Lösung.

### Der Rang

Wie viele „echte“ Gleichungen ein System hat, misst der **Rang**. Echt heißt: Die Gleichung lässt sich nicht aus den
anderen zusammensetzen. Im Beispiel waren es drei Gleichungen, aber nur zwei echte.

:::definition[Rang]
Man bringt eine Matrix $A$ mit elementaren Zeilenumformungen auf Zeilenstufenform. Die Anzahl der Zeilen, die nicht
nur aus Nullen bestehen, heißt **Rang** von $A$. Man schreibt $\operatorname{rg}(A)$.
:::

Man kann beweisen, dass der Rang nicht vom gewählten Rechenweg abhängt. Verschiedene Wege zur Stufenform liefern
immer gleich viele Stufen. Zu jedem System gehören zwei Matrizen. Die **Koeffizientenmatrix** $A$ enthält nur die
Zahlen links vom Strich. Die **erweiterte Matrix** $(A \mid b)$ enthält zusätzlich die rechten Seiten. Das $b$ steht
für die Spalte der rechten Seiten.

- **Beispiel:** Im System mit unendlich vielen Lösungen hat die Stufenform von $A$ zwei Zeilen, die nicht nur aus
  Nullen bestehen. Also ist $\operatorname{rg}(A) = 2$. Auch $\operatorname{rg}(A \mid b) = 2$, denn die letzte Zeile
  ist ganz null, rechts vom Strich eingeschlossen.
- **Im System ohne Lösung** ist ebenfalls $\operatorname{rg}(A) = 2$. Die erweiterte Matrix hat aber die Zeile
  $(0\ \ 0\ \ 0 \mid 2)$, die rechts eine Zahl ungleich $0$ enthält. Also ist $\operatorname{rg}(A \mid b) = 3$.
- **Nichtbeispiel:** „Die Matrix hat drei Zeilen, also ist ihr Rang $3$“ ist falsch. Man zählt erst **nach** dem
  Umformen auf Stufenform.

```aufgabe
id: lm-check-rang-zaehlen
titel: Den Rang aus der Stufenform ablesen
niveau: 1
art: check
angabe: |
  Die Stufenform einer erweiterten Matrix lautet
  $$\left(\begin{array}{rrr|r} 1 & 4 & -2 & 3\\ 0 & 0 & 5 & 1\\ 0 & 0 & 0 & 0 \end{array}\right).$$
  Wie groß ist $\operatorname{rg}(A)$?
teile:
  - typ: zahl
    label: '$\operatorname{rg}(A)$'
    loesung: "2"
    fehler:
      - wert: "3"
        meldung: |
          Die dritte Zeile besteht nur aus Nullen. Sie zählt beim Rang nicht mit.
      - wert: "1"
        meldung: |
          Die zweite Zeile ist keine Nullzeile, auch wenn sie mit zwei Nullen beginnt. Ihr Pivotelement ist die $5$.
hinweise:
  - 'Zähle die Zeilen, die links vom Strich nicht nur aus Nullen bestehen.'
loesung: |
  Die Zeilen $(1, 4, -2)$ und $(0, 0, 5)$ sind keine Nullzeilen, die dritte schon.
  ---
  Also ist $\operatorname{rg}(A) = 2$. Auch $\operatorname{rg}(A \mid b) = 2$, denn rechts steht in der letzten Zeile ebenfalls $0$.
```

:::satz[Lösbarkeitskriterium]
Gegeben ist ein lineares Gleichungssystem mit $n$ Unbekannten, der Koeffizientenmatrix $A$ und der erweiterten Matrix
$(A \mid b)$.

1. Ist $\operatorname{rg}(A) < \operatorname{rg}(A \mid b)$, hat das System **keine Lösung**.
2. Ist $\operatorname{rg}(A) = \operatorname{rg}(A \mid b) = n$, hat es **genau eine Lösung**.
3. Ist $\operatorname{rg}(A) = \operatorname{rg}(A \mid b) = r$ und $r < n$, hat es **unendlich viele Lösungen**. Die
   Lösungsmenge hat dann $n - r$ freie Parameter.
:::

Der Satz übersetzt nur, was man in der Stufenform sieht:

- $\operatorname{rg}(A) < \operatorname{rg}(A \mid b)$ heißt: Eine Zeile hat links nur Nullen, rechts aber eine Zahl
  ungleich $0$. Das ist ein Widerspruch $0 = c$.
- Sonst ist jede Zeile eine echte Gleichung mit Pivotelement oder eine Nullzeile. Jede Unbekannte mit Pivotelement in
  ihrer Spalte wird durch Rückwärtseinsetzen berechnet. Die übrigen $n - r$ Unbekannten sind frei wählbar. Ist $r = n$,
  ist keine Unbekannte frei, und es gibt genau eine Lösung.

:::achtung[Den Rang falsch zählen]
**Falsch:** Für das System ohne Lösung schreibt jemand $\operatorname{rg}(A) = 3$, weil die Stufenform von
$(A \mid b)$ drei Zeilen ohne lauter Nullen hat. Dann wäre $\operatorname{rg}(A) = \operatorname{rg}(A \mid b) = 3$, und
er schließt fälschlich auf genau eine Lösung.

**Richtig:** Für $\operatorname{rg}(A)$ zählt man nur den Teil **links** vom Strich. Die Zeile $(0\ \ 0\ \ 0 \mid 2)$ ist
links eine Nullzeile. Also ist $\operatorname{rg}(A) = 2$ und $\operatorname{rg}(A \mid b) = 3$. Weil $2 < 3$, gibt es
keine Lösung.
:::

```reflexion
frage: Ein System aus drei Gleichungen mit drei Unbekannten liefert nach Gauß die Zeilen $(1, 2, 0 \mid 4)$, $(0, 1, 1 \mid 2)$ und $(0, 0, 0 \mid 0)$. Wie viele freie Parameter hat die Lösungsmenge, und warum?
antwort: |
  Die Stufenform hat zwei Zeilen, die nicht nur aus Nullen bestehen. Also ist $\operatorname{rg}(A) = \operatorname{rg}(A \mid b) = 2$.
  Es gibt keinen Widerspruch, also ist das System lösbar. Pivotelemente stehen in den Spalten von $x$ und $y$. Die Spalte von $z$ hat
  keines. Darum ist $z$ frei wählbar, und es gibt $n - r = 3 - 2 = 1$ freien Parameter. Die Lösungsmenge ist eine Gerade.
```

### Was daraus folgt

:::satz[Folgerungen]
1. Ein lineares Gleichungssystem hat entweder **keine**, **genau eine** oder **unendlich viele** Lösungen. Genau zwei
   oder genau fünf Lösungen sind unmöglich.
2. Hat ein System **weniger Gleichungen als Unbekannte**, so hat es nie genau eine Lösung. Es hat dann keine oder
   unendlich viele Lösungen.
:::

Warum gilt die erste Aussage? Angenommen, $\vec p$ und $\vec q$ sind zwei verschiedene Lösungen. Der Pfeil über dem
Buchstaben zeigt an, dass es sich um ein Tripel handelt. Wir betrachten die Punkte $\vec p + t\,(\vec q - \vec p)$ für
beliebige Zahlen $t$. Ausmultipliziert ist das $(1 - t)\,\vec p + t\,\vec q$. Nimm eine Gleichung des Systems mit der
rechten Seite $b$. Ihre linke Seite ergibt für $\vec p$ den Wert $b$ und für $\vec q$ ebenfalls $b$. Weil die linke Seite
linear ist, also nur Vielfache und Summen enthält, ergibt sie für $(1 - t)\,\vec p + t\,\vec q$ den Wert
$(1 - t)\cdot b + t\cdot b = b$. Also ist jeder dieser Punkte eine Lösung. Im Bild: Mit zwei Punkten liegt die ganze
Gerade durch sie in der Lösungsmenge.

Warum gilt die zweite Aussage? Der Rang ist höchstens so groß wie die Anzahl $m$ der Zeilen. Bei $m < n$ ist also
$\operatorname{rg}(A) \le m < n$. Der Fall „Rang gleich $n$“ kann nicht eintreten, also gibt es nie genau eine Lösung.

```aufgabe
id: lm-check-weniger-gleichungen
titel: Weniger Gleichungen als Unbekannte
niveau: 1
art: check
angabe: |
  Ein System besteht aus zwei Gleichungen mit drei Unbekannten. Welche Aussage ist sicher richtig?
teile:
  - typ: auswahl
    optionen:
      - 'Es hat keine oder unendlich viele Lösungen.'
      - 'Es hat genau eine Lösung.'
      - 'Es hat immer unendlich viele Lösungen.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Der Rang ist höchstens $2$, also kleiner als die Anzahl $3$ der Unbekannten. Für genau eine Lösung müsste er $3$ sein.
      - wert: 2
        meldung: |
          Lösbar ist es nicht immer. Zum Beispiel widersprechen sich $x + y + z = 1$ und $x + y + z = 2$, dann gibt es keine Lösung.
hinweise:
  - 'Wie groß kann der Rang höchstens sein, wenn es nur zwei Zeilen gibt?'
loesung: |
  Der Rang ist höchstens $2 < 3$. Genau eine Lösung ist deshalb unmöglich.
  ---
  Ist das System lösbar, bleibt mindestens ein Parameter frei: unendlich viele Lösungen. Es kann aber auch widersprüchlich sein: keine Lösung.
```

### Homogene Systeme

Ein System, dessen rechte Seiten alle $0$ sind, heißt **homogen**. Es hat immer mindestens eine Lösung: die
**triviale Lösung**, bei der alle Unbekannten $0$ sind. Das Fachwort bedeutet hier „ohne Mühe gefunden“. Interessant ist
deshalb nur die Frage, ob es weitere, **nichttriviale** Lösungen gibt. Nach dem Lösbarkeitskriterium ist das genau dann
der Fall, wenn $\operatorname{rg}(A) < n$.

:::satz[Aufbau der Lösungsmenge]
Gegeben ist ein lineares Gleichungssystem mit der Koeffizientenmatrix $A$ und den rechten Seiten $\vec b$. Kurz schreibt
man dafür $A\vec x = \vec b$; was diese Schreibweise genau bedeutet, zeigt die Lektion
[3.6 Matrizen und ihre Rechenregeln](/lernen/mathe3/lgs-matrizen/matrizen-und-ihre-rechenregeln). Ist $\vec x_p$
irgendeine Lösung dieses Systems, so erhält man **alle** Lösungen in der Form
$$\vec x = \vec x_p + \vec x_h.$$
Dabei durchläuft $\vec x_h$ alle Lösungen des **homogenen** Systems, das dieselben linken Seiten hat, aber lauter Nullen
als rechte Seiten. Die Lösung $\vec x_p$ heißt **partikuläre** (einzelne, spezielle) Lösung.
:::

:::beispiel[Spezielle Lösung plus homogene Lösungen]
Im System mit unendlich vielen Lösungen vom Anfang der Lektion war $L = \{(7 - 5t,\ -3 + 3t,\ t) \mid t \in \R\}$.

1. Für $t = 0$ erhalten wir die spezielle Lösung $\vec x_p = (7, -3, 0)$.
2. Der Rest ist $t\cdot(-5, 3, 1)$. Das sind die Lösungen des homogenen Systems $x + 2y - z = 0$, $2x + 3y + z = 0$, $3x + 5y = 0$.
3. Probe für $t = 1$, also für $(-5, 3, 1)$: $-5 + 6 - 1 = 0$, $-10 + 9 + 1 = 0$ und $-15 + 15 = 0$.

Jede Lösung ist also „spezielle Lösung plus homogene Lösung“. Im Bild: Die Lösungsgerade geht durch den Punkt
$(7 \mid -3 \mid 0)$ und verläuft in Richtung $(-5, 3, 1)$. Die homogenen Lösungen liefern genau diese Richtung.
:::

### Übungen

```aufgabe
id: lm-stufenform-deuten
titel: Stufenform deuten
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  Drei Systeme in $x, y, z$ wurden auf Zeilenstufenform gebracht. Wie viele Lösungen hat jedes?
  $$\text{(i)}\ \left(\begin{array}{rrr|r} 1 & 3 & -1 & 2\\ 0 & 2 & 1 & 4\\ 0 & 0 & 0 & -3 \end{array}\right)\qquad
  \text{(ii)}\ \left(\begin{array}{rrr|r} 1 & 3 & -1 & 2\\ 0 & 2 & 1 & 4\\ 0 & 0 & 0 & 0 \end{array}\right)\qquad
  \text{(iii)}\ \left(\begin{array}{rrr|r} 1 & 3 & -1 & 2\\ 0 & 2 & 1 & 4\\ 0 & 0 & 5 & 0 \end{array}\right)$$
teile:
  - typ: auswahl
    label: 'System (i)'
    optionen: ['genau eine', 'keine', 'unendlich viele']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Die letzte Zeile bedeutet $0 = -3$. Diese Gleichung erfüllt kein Tripel.'
      - wert: 2
        meldung: 'Unendlich viele Lösungen gibt es bei $0 = 0$. Hier steht rechts aber $-3$, das ist ein Widerspruch.'
  - typ: auswahl
    label: 'System (ii)'
    optionen: ['genau eine', 'keine', 'unendlich viele']
    richtig: [2]
    fehler:
      - wert: 1
        meldung: '$0 = 0$ ist kein Widerspruch, sondern immer wahr. Es bleiben zwei Gleichungen für drei Unbekannte.'
      - wert: 0
        meldung: 'Für $z$ gibt es keine Bedingung mehr. Jede Wahl von $z$ führt zu einer Lösung.'
  - typ: auswahl
    label: 'System (iii)'
    optionen: ['genau eine', 'keine', 'unendlich viele']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Die Zeile $(0, 0, 5 \mid 0)$ bedeutet $5z = 0$, also $z = 0$. Das ist eine ganz normale Gleichung, kein Widerspruch.'
      - wert: 2
        meldung: 'Eine rechte Seite $0$ heißt nicht „unendlich viele“. Entscheidend ist, dass links eine $5$ steht: $5z = 0$ legt $z$ fest.'
hinweise:
  - 'Lies die letzte Zeile jeweils als Gleichung $0x + 0y + c\,z = d$.'
loesung: |
  Ansatz: Die letzte Zeile entscheidet. Wir lesen sie als Gleichung.
  ---
  (i) $0 = -3$ ist ein Widerspruch. $\operatorname{rg}(A) = 2 < 3 = \operatorname{rg}(A \mid b)$: **keine** Lösung.
  ---
  (ii) $0 = 0$ ist immer wahr. $\operatorname{rg}(A) = \operatorname{rg}(A \mid b) = 2 < 3$: **unendlich viele** Lösungen mit einem Parameter.
  ---
  (iii) $5z = 0$, also $z = 0$. Rang $3$, also **genau eine** Lösung. Zur Kontrolle: $2y = 4$ gibt $y = 2$, und $x + 6 = 2$ gibt $x = -4$.
```

```aufgabe
id: lm-rang-bestimmen
titel: Den Rang bestimmen
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Bestimme den Rang der Matrix
  $$A = \begin{pmatrix} 1 & 2 & 3\\ 2 & 4 & 6\\ 1 & 0 & 1 \end{pmatrix}.$$
teile:
  - typ: zahl
    label: '$\operatorname{rg}(A)$'
    loesung: "2"
    fehler:
      - wert: "3"
        meldung: |
          Der Rang ist nicht die Anzahl der Zeilen. Bring die Matrix zuerst auf Stufenform. Die zweite Zeile ist das
          Doppelte der ersten.
      - wert: "1"
        meldung: |
          Die dritte Zeile ist kein Vielfaches der ersten. Nach dem Umformen bleibt sie eine Zeile, die nicht nur aus Nullen besteht.
hinweise:
  - 'Rechne $\text{II} - 2\cdot\text{I}$ und $\text{III} - \text{I}$. Zähle danach die Zeilen, die nicht nur Nullen enthalten.'
loesung: |
  Ansatz: Wir bringen $A$ auf Stufenform und zählen die Zeilen, die nicht nur aus Nullen bestehen.
  ---
  $\text{II} - 2\cdot\text{I}$: $(0, 0, 0)$. $\text{III} - \text{I}$: $(0, -2, -2)$. Nach dem Tausch der Zeilen II und III steht die Nullzeile unten.
  ---
  Stufenform: $(1, 2, 3)$, $(0, -2, -2)$, $(0, 0, 0)$. Zwei Zeilen sind nicht null, also $\operatorname{rg}(A) = 2$.
```

```aufgabe
id: lm-rang-loesbarkeit
titel: Rang und Lösbarkeit
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Untersuche das System auf Lösbarkeit:
  $$\begin{aligned} x - y + 2z &= 3\\ 2x + y - z &= 1\\ 3x + z &= 5 \end{aligned}$$
teile:
  - typ: zahl
    label: '$\operatorname{rg}(A)$'
    loesung: "2"
    fehler:
      - wert: "3"
        meldung: |
          Für $\operatorname{rg}(A)$ zählt nur der Teil links vom Strich. Die letzte Zeile der Stufenform ist links eine Nullzeile.
  - typ: zahl
    label: '$\operatorname{rg}(A \mid b)$'
    loesung: "3"
    fehler:
      - wert: "2"
        meldung: |
          In der erweiterten Matrix zählt auch die rechte Seite mit. Die letzte Zeile lautet $(0\ \ 0\ \ 0 \mid 1)$ und ist damit keine Nullzeile.
  - typ: auswahl
    label: 'Das System hat'
    optionen: ['genau eine Lösung', 'keine Lösung', 'unendlich viele Lösungen']
    richtig: [1]
    fehler:
      - wert: 2
        meldung: 'Unendlich viele Lösungen gibt es nur, wenn beide Ränge gleich sind. Hier ist $\operatorname{rg}(A) < \operatorname{rg}(A \mid b)$.'
      - wert: 0
        meldung: 'Genau eine Lösung verlangt Rang $3$ für $A$. Die Koeffizientenmatrix hat aber nur Rang $2$.'
hinweise:
  - 'In der dritten Gleichung fehlt $y$. Schreib dort eine $0$ in die Matrix.'
  - 'Nach $\text{II} - 2\cdot\text{I}$ und $\text{III} - 3\cdot\text{I}$ haben beide neuen Zeilen links dieselben Einträge. Vergleiche die rechten Seiten.'
loesung: |
  Ansatz: Gauß-Verfahren, dann die Ränge von $A$ und $(A \mid b)$ vergleichen.
  ---
  $$\left(\begin{array}{rrr|r} 1 & -1 & 2 & 3\\ 2 & 1 & -1 & 1\\ 3 & 0 & 1 & 5 \end{array}\right) \xrightarrow{\ \text{II} - 2\cdot\text{I},\ \ \text{III} - 3\cdot\text{I}\ } \left(\begin{array}{rrr|r} 1 & -1 & 2 & 3\\ 0 & 3 & -5 & -5\\ 0 & 3 & -5 & -4 \end{array}\right)$$
  ---
  $\text{III} - \text{II}$: $(0,\ 0,\ 0 \mid 1)$, also $0 = 1$.
  ---
  Links zwei Stufen, mit rechter Seite drei: $\operatorname{rg}(A) = 2 < 3 = \operatorname{rg}(A \mid b)$. **Keine Lösung.**
  ---
  Deutung: Die linke Seite der dritten Gleichung ist die Summe der ersten beiden. Passend wäre die rechte Seite $3 + 1 = 4$, gegeben ist aber $5$.
```

```aufgabe
id: lm-parameterloesung
titel: Zwei Gleichungen, drei Unbekannte
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Gegeben ist das System
  $$\begin{aligned} x - 2y + z &= 1\\ 2x - 3y + 4z &= 6 \end{aligned}$$
  Bestimme die Lösung mit $z = 0$ und die Lösung mit $z = 1$. Gib dann die allgemeine Lösung mit $z = t$ an.
teile:
  - typ: vektor
    label: 'Lösung mit $z = 0$'
    namen: ["x", "y", "z"]
    loesung: ["9", "4", "0"]
    fehler:
      - wert: ["1", "0", "0"]
        meldung: |
          $(1, 0, 0)$ erfüllt nur die erste Gleichung. Setz $z = 0$ in **beide** Gleichungen ein und löse das entstehende System.
  - typ: vektor
    label: 'Lösung mit $z = 1$'
    namen: ["x", "y", "z"]
    loesung: ["4", "2", "1"]
    fehler:
      - wert: ["4", "-2", "1"]
        meldung: |
          Aus der Zeile $(0, 1, 2 \mid 4)$ folgt $y = 4 - 2z$. Mit $z = 1$ ist $y = 2$.
  - typ: term
    label: '$x$ in Abhängigkeit von $t$'
    variable: t
    loesung: "9 - 5t"
    fehler:
      - wert: "9 - 3t"
        meldung: |
          Setz $y = 4 - 2t$ vollständig ein: $x = 1 + 2(4 - 2t) - t = 9 - 4t - t$.
  - typ: term
    label: '$y$ in Abhängigkeit von $t$'
    variable: t
    loesung: "4 - 2t"
hinweise:
  - 'Eliminiere $x$: $\text{II} - 2\cdot\text{I}$ ergibt $y + 2z = 4$.'
  - 'Löse diese Gleichung nach $y$ auf und setze dann in die erste Gleichung ein.'
gefuehrt:
  - text: 'Berechne $\text{II} - 2\cdot\text{I}$. Welcher Koeffizient steht danach vor $z$?'
    teil:
      typ: zahl
      loesung: "4 - 2*1"
      fehler:
        - wert: "6"
          meldung: 'Abgezogen wird $2\cdot 1 = 2$, also $4 - 2$.'
    erklaerung: 'Die neue Zeile lautet $(0,\ 1,\ 2 \mid 4)$, also $y + 2z = 4$.'
  - text: 'Setze $z = t$. Wie lautet $y$ als Term in $t$?'
    teil:
      typ: term
      variable: t
      loesung: "4 - 2t"
    erklaerung: 'Aus $y + 2t = 4$ folgt $y = 4 - 2t$.'
  - text: 'Setze $y$ und $z$ in die erste Gleichung $x - 2y + z = 1$ ein. Wie lautet $x$?'
    teil:
      typ: term
      variable: t
      loesung: "9 - 5t"
    erklaerung: '$x = 1 + 2(4 - 2t) - t = 1 + 8 - 4t - t = 9 - 5t$.'
  - text: 'Welche Lösung gehört zu $t = 1$? Gib den $x$-Wert an.'
    teil:
      typ: zahl
      loesung: "9 - 5"
    erklaerung: 'Für $t = 1$: $(4, 2, 1)$. Probe: $4 - 4 + 1 = 1$ und $8 - 6 + 4 = 6$.'
loesung: |
  Ansatz: Zwei Gleichungen, drei Unbekannte. Nach dem Eliminieren bleibt eine Unbekannte frei. Wir wählen $z = t$.
  ---
  $\text{II} - 2\cdot\text{I}$: $y + 2z = 4$, also $y = 4 - 2z$.
  ---
  Aus I: $x = 1 + 2y - z = 1 + 2(4 - 2z) - z = 9 - 5z$.
  ---
  Mit $z = t$: $L = \{(9 - 5t,\ 4 - 2t,\ t) \mid t \in \R\}$.
  ---
  $t = 0$ ergibt $(9, 4, 0)$, $t = 1$ ergibt $(4, 2, 1)$. Probe für $(4, 2, 1)$: $4 - 4 + 1 = 1$ und $8 - 6 + 4 = 6$.
```

```aufgabe
id: lm-unendlich-3x3
titel: Unendlich viele Lösungen bei drei Gleichungen
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Zeige, dass das System unendlich viele Lösungen hat. Gib sie mit $z = t$ als Parameter an.
  $$\begin{aligned} x + y + z &= 4\\ 2x + 3y + z &= 9\\ x + 2y &= 5 \end{aligned}$$
teile:
  - typ: term
    label: '$x(t)$'
    variable: t
    loesung: "3 - 2t"
    fehler:
      - wert: "3"
        meldung: |
          Setz $y = 1 + t$ in die erste Gleichung ein: $x = 4 - (1 + t) - t$. Beide $t$ werden abgezogen.
  - typ: term
    label: '$y(t)$'
    variable: t
    loesung: "1 + t"
    fehler:
      - wert: "1 - t"
        meldung: |
          Die Zeile $(0, 1, -1 \mid 1)$ bedeutet $y - z = 1$. Also $y = 1 + z = 1 + t$.
hinweise:
  - 'Nach $\text{II} - 2\cdot\text{I}$ und $\text{III} - \text{I}$ entstehen zwei gleiche Zeilen.'
  - 'Aus der Zeile $(0, 1, -1 \mid 1)$ folgt $y = 1 + t$. Setze dann in die erste Gleichung ein.'
loesung: |
  Ansatz: Gauß-Verfahren. Entsteht eine Nullzeile und kein Widerspruch, gibt es unendlich viele Lösungen.
  ---
  $\text{II} - 2\cdot\text{I}$: $(0,\ 1,\ -1 \mid 1)$. $\text{III} - \text{I}$: $(0,\ 1,\ -1 \mid 1)$. Danach $\text{III} - \text{II}$: Nullzeile.
  ---
  $\operatorname{rg}(A) = \operatorname{rg}(A \mid b) = 2 < 3$: unendlich viele Lösungen mit einem Parameter.
  ---
  $z = t$, $y = 1 + t$, $x = 4 - (1 + t) - t = 3 - 2t$. Also $L = \{(3 - 2t,\ 1 + t,\ t) \mid t \in \R\}$.
  ---
  Probe in III mit dem allgemeinen Tripel: $(3 - 2t) + 2(1 + t) = 3 - 2t + 2 + 2t = 5$. Das stimmt für jedes $t$.
```

```aufgabe
id: lm-homogen
titel: Ein homogenes System
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: |
  Gegeben ist das homogene System
  $$\begin{aligned} x + y - z &= 0\\ 2x - y + z &= 0\\ x - 2y + 2z &= 0 \end{aligned}$$
  a) Hat das System nur die triviale Lösung $(0, 0, 0)$?

  b) Gib die Lösung mit $z = 1$ an.
teile:
  - typ: auswahl
    label: 'a)'
    optionen:
      - 'Ja, ein homogenes System hat nur die triviale Lösung.'
      - 'Nein, der Rang ist kleiner als $3$, es gibt auch nichttriviale Lösungen.'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Ein homogenes System hat **immer** die triviale Lösung, aber oft noch mehr. Bestimme den Rang der Matrix. Ist er
          kleiner als die Anzahl $3$ der Unbekannten, gibt es weitere Lösungen.
  - typ: vektor
    label: 'b) Lösung mit $z = 1$'
    namen: ["x", "y", "z"]
    loesung: ["0", "1", "1"]
    fehler:
      - wert: ["0", "0", "1"]
        meldung: |
          Setz $(0, 0, 1)$ in die erste Gleichung ein: $0 + 0 - 1 = -1 \neq 0$. Aus der Zeile $(0, -3, 3 \mid 0)$ folgt $y = z$.
hinweise:
  - 'Rechne $\text{II} - 2\cdot\text{I}$ und $\text{III} - \text{I}$. Was fällt an den beiden neuen Zeilen auf?'
  - 'Aus $-3y + 3z = 0$ folgt $y = z$. Setze dann in die erste Gleichung ein.'
loesung: |
  Ansatz: Ein homogenes System hat immer die triviale Lösung. Weitere Lösungen gibt es genau dann, wenn der Rang kleiner als die Anzahl der Unbekannten ist.
  ---
  $\text{II} - 2\cdot\text{I}$: $(0,\ -3,\ 3 \mid 0)$. $\text{III} - \text{I}$: $(0,\ -3,\ 3 \mid 0)$. Danach entsteht eine Nullzeile, also $\operatorname{rg}(A) = 2 < 3$.
  ---
  a) Es gibt unendlich viele Lösungen, nicht nur die triviale.
  ---
  b) Aus $-3y + 3z = 0$ folgt $y = z = 1$. Aus I: $x + 1 - 1 = 0$, also $x = 0$. Die Lösung ist $(0, 1, 1)$. Allgemein: $L = \{(0, t, t) \mid t \in \R\}$. Probe für $(0, 1, 1)$: $0 + 1 - 1 = 0$, $0 - 1 + 1 = 0$, $0 - 2 + 2 = 0$.
```

```aufgabe
id: lm-zwei-loesungen
titel: Aus zwei Lösungen werden unendlich viele
niveau: 3
lernziel: 3
kompetenz: begruenden
angabe: |
  Von einem linearen Gleichungssystem in $x, y, z$ weiß man, dass $\vec p = (2, -1, 1)$ und $\vec q = (0, 1, 3)$ Lösungen sind.

  a) Berechne $\vec p + 3\,(\vec q - \vec p)$.

  b) Begründe, warum dieses Tripel das System sicher löst, obwohl du das System nicht kennst.
teile:
  - typ: vektor
    label: 'a) $\vec p + 3(\vec q - \vec p)$'
    namen: ["x", "y", "z"]
    loesung: ["-4", "5", "7"]
    fehler:
      - wert: ["-6", "6", "6"]
        meldung: |
          Das ist nur $3\,(\vec q - \vec p)$. Addiere noch $\vec p = (2, -1, 1)$.
      - wert: ["8", "-7", "-5"]
        meldung: |
          Prüfe die Differenz: $\vec q - \vec p = (0 - 2,\ 1 - (-1),\ 3 - 1) = (-2,\ 2,\ 2)$.
  - typ: text
    label: 'b) Begründung'
    muster: |
      Für jede Gleichung des Systems mit linker Seite $\ell$ und rechter Seite $b$ gilt $\ell(\vec p) = b$ und $\ell(\vec q) = b$.
      Weil $\ell$ linear ist, gilt $\ell(\vec p + t(\vec q - \vec p)) = (1 - t)\,\ell(\vec p) + t\,\ell(\vec q) = (1 - t)\,b + t\,b = b$.
      Also ist jeder Punkt der Geraden durch $\vec p$ und $\vec q$ eine Lösung, insbesondere der Punkt mit $t = 3$.
      Ein lineares System mit zwei verschiedenen Lösungen hat deshalb unendlich viele Lösungen.
hinweise:
  - 'Berechne zuerst $\vec q - \vec p$ koordinatenweise.'
  - 'Schreibe $\vec p + t(\vec q - \vec p) = (1 - t)\,\vec p + t\,\vec q$. Was ergibt eine lineare linke Seite für diese Mischung?'
loesung: |
  Ansatz: Linke Seiten linearer Gleichungen vertragen sich mit Vielfachen und Summen. Darum ist jede „Mischung“ $(1 - t)\vec p + t\vec q$ wieder eine Lösung.
  ---
  a) $\vec q - \vec p = (-2,\ 2,\ 2)$, also $\vec p + 3(\vec q - \vec p) = (2 - 6,\ -1 + 6,\ 1 + 6) = (-4,\ 5,\ 7)$.
  ---
  b) Es gilt $\vec p + t(\vec q - \vec p) = (1 - t)\,\vec p + t\,\vec q$. Setzt man das in eine Gleichung mit linker Seite $\ell$ ein, ergibt sich $(1 - t)\,b + t\,b = b$.
  ---
  Das gilt für jedes $t$, hier mit $t = 3$. Die ganze Gerade durch $\vec p$ und $\vec q$ besteht aus Lösungen. Deshalb kann ein lineares Gleichungssystem nie genau zwei Lösungen haben.
```

## Geometrische Deutung im Raum

```aufgabe
id: lm-check-parallele-geraden
titel: Gleiche Steigung, verschiedene Achsenabschnitte
niveau: 1
art: check
angabe: |
  Zwei Geraden in der Ebene haben dieselbe Steigung, aber verschiedene Achsenabschnitte. Wie viele Lösungen hat das
  zugehörige Gleichungssystem?
  Herkunft: [3.2 Systeme mit zwei Unbekannten](/lernen/mathe3/lgs-matrizen/systeme-mit-zwei-unbekannten).
teile:
  - typ: auswahl
    optionen:
      - 'keine'
      - 'genau eine'
      - 'unendlich viele'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Genau eine Lösung gibt es bei einem Schnittpunkt. Zwei Geraden mit derselben Steigung schneiden sich aber nie in genau einem Punkt.
      - wert: 2
        meldung: |
          Unendlich viele Lösungen gibt es, wenn die Geraden zusammenfallen. Dafür müssten auch die Achsenabschnitte gleich sein.
hinweise:
  - 'Zeichne zwei Geraden mit gleicher Steigung und verschiedenen Achsenabschnitten.'
loesung: |
  Gleiche Steigung und verschiedene Achsenabschnitte bedeuten: Die Geraden sind parallel und verschieden.
  ---
  Sie haben keinen gemeinsamen Punkt. Das System hat keine Lösung.
```

In zwei Musterprüfungen wird nach der „geometrischen Interpretation“ eines Gleichungssystems mit drei Unbekannten
gefragt. Dafür brauchst du ein Bild: Jede lineare Gleichung mit drei Unbekannten beschreibt eine **Ebene** im Raum.
Eine Ebene ist eine unbegrenzt ausgedehnte, flache Fläche, wie eine Tischplatte ohne Rand. Diese Lektion zeigt an
Beispielen, dass das so ist, und wie man damit die Lösungsmengen deutet. Die Vektorrechnung dazu kommt in
[Kapitel 6](/lernen/mathe3/vektoren). Die genaue Begründung, warum so eine Gleichung eine Ebene beschreibt, steht in
[Kapitel 7, „Ebenen im Raum“](/lernen/mathe3/analytische-geometrie/ebenen-im-raum-parameterform-und-koordinatenform).

### Eine Gleichung, eine Ebene

Ein Punkt im Raum hat drei Koordinaten $(x \mid y \mid z)$: wie weit nach vorne, wie weit nach rechts und wie weit nach
oben. Eine Gleichung wie $x + 2y + 3z = 6$ wählt aus allen Punkten des Raums diejenigen aus, deren Koordinaten sie
erfüllen. Diese Punkte bilden eine Ebene.

:::beispiel[Eine Ebene skizzieren]
Wir skizzieren die Ebene $E\colon x + 2y + 3z = 6$. Am einfachsten sind die Punkte, in denen sie die Achsen schneidet.

1. **$x$-Achse:** Dort ist $y = 0$ und $z = 0$. Die Gleichung wird $x = 6$. Der Schnittpunkt ist $(6 \mid 0 \mid 0)$.
2. **$y$-Achse:** Dort ist $x = 0$ und $z = 0$. Die Gleichung wird $2y = 6$, also $y = 3$. Der Schnittpunkt ist $(0 \mid 3 \mid 0)$.
3. **$z$-Achse:** Dort ist $x = 0$ und $y = 0$. Die Gleichung wird $3z = 6$, also $z = 2$. Der Schnittpunkt ist $(0 \mid 0 \mid 2)$.

Die drei Punkte bilden ein Dreieck, das **Spurdreieck**. Die Ebene ist die unbegrenzte Fortsetzung dieses Dreiecks in
alle Richtungen.
:::

```plot
x: [-3.5, 5]
y: [-3.5, 3.5]
gleich: true
vektoren:
  - { von: [0, 0], nach: [-2.8, -2.8], label: "x", farbe: 4 }
  - { von: [0, 0], nach: [4.5, 0], label: "y", farbe: 4 }
  - { von: [0, 0], nach: [0, 3.2], label: "z", farbe: 4 }
strecken:
  - { von: [-2.4, -2.4], nach: [3, 0], farbe: 0 }
  - { von: [3, 0], nach: [0, 2], farbe: 0 }
  - { von: [0, 2], nach: [-2.4, -2.4], farbe: 0 }
punkte:
  - { x: -2.4, y: -2.4, label: "(6|0|0)", farbe: 0 }
  - { x: 3, y: 0, label: "(0|3|0)", farbe: 0 }
  - { x: 0, y: 2, label: "(0|0|2)", farbe: 0 }
beschriftung: Schrägbild des Raums. Die x-Achse zeigt schräg nach vorne links, die y-Achse nach rechts, die z-Achse nach oben. Die Ebene x + 2y + 3z = 6 schneidet die Achsen in (6|0|0), (0|3|0) und (0|0|2). Das blaue Spurdreieck ist das Stück der Ebene zwischen den Achsen.
```

:::satz[Eine lineare Gleichung mit drei Unbekannten beschreibt eine Ebene]
Die Lösungsmenge einer Gleichung $ax + by + cz = d$, in der nicht alle drei Koeffizienten $a, b, c$ gleich $0$ sind, ist
eine **Ebene** im Raum. Der Vektor $\vec n = (a, b, c)$ steht senkrecht auf dieser Ebene. Man nennt ihn
**Normalvektor**. „Normal“ bedeutet in der Geometrie „senkrecht“.
:::

**Nichtbeispiele:** Die Gleichung $0x + 0y + 0z = 5$ beschreibt keine Ebene, sondern die leere Menge. Kein Punkt
erfüllt sie. Die Gleichung $0x + 0y + 0z = 0$ wird von jedem Punkt erfüllt und beschreibt den ganzen Raum. Deshalb
verlangt der Satz, dass nicht alle Koeffizienten $0$ sind.

Für die Deutung genügt eine Folgerung: **Zwei Ebenen sind genau dann parallel, wenn ihre Normalvektoren Vielfache
voneinander sind.** Die Normalvektoren liest man direkt an den Koeffizienten ab. Die Ebenen $x + y + z = 6$ und
$2x + 2y + 2z = 5$ haben die Normalvektoren $(1, 1, 1)$ und $(2, 2, 2) = 2\cdot(1, 1, 1)$. Sie sind also parallel.

Damit wird jedes System mit drei Unbekannten zu einer Frage über Ebenen. **Eine Lösung ist ein Punkt, der auf allen
Ebenen gleichzeitig liegt.** Die Lösungsmenge ist der gemeinsame Schnitt aller Ebenen.

### Zwei Ebenen

Zwei Ebenen können auf drei Arten zueinander liegen. Wir schreiben dazu die Ränge aus der Lektion
[3.4 Lösbarkeit, Rang und Parameterdarstellung](/lernen/mathe3/lgs-matrizen/loesbarkeit-rang-und-parameterdarstellung).

- **Sie schneiden sich in einer Geraden.** Das passiert, wenn die Normalvektoren keine Vielfachen voneinander sind.
  Das System hat unendlich viele Lösungen mit einem Parameter, $\operatorname{rg}(A) = \operatorname{rg}(A \mid b) = 2$.
- **Sie sind parallel und verschieden.** Die Normalvektoren sind Vielfache, die ganzen Gleichungen aber nicht.
  Keine Lösung, $\operatorname{rg}(A) = 1$ und $\operatorname{rg}(A \mid b) = 2$.
- **Sie sind identisch.** Die eine Gleichung ist ein Vielfaches der anderen, rechte Seite eingeschlossen. Unendlich
  viele Lösungen mit zwei Parametern, $\operatorname{rg}(A) = \operatorname{rg}(A \mid b) = 1$.

Einen einzelnen Schnittpunkt haben zwei Ebenen nie. Das ist die geometrische Seite der Regel aus der Lektion 3.4:
Weniger Gleichungen als Unbekannte führen nie zu genau einer Lösung.

:::beispiel[Zwei Ebenen untersuchen]
1. $x + y + z = 6$ und $2x + 2y + 2z = 5$: Die Normalvektoren sind Vielfache. Die erste Gleichung mal $2$ ergibt
   $2x + 2y + 2z = 12 \neq 5$. Die Ebenen sind **parallel und verschieden**, es gibt keine Lösung.
2. $x + y + z = 6$ und $x - y + z = 2$: Die Normalvektoren $(1, 1, 1)$ und $(1, -1, 1)$ sind keine Vielfachen. Die Ebenen
   schneiden sich in einer Geraden. Wir berechnen sie: $\text{II} - \text{I}$ ergibt $-2y = -4$, also $y = 2$. Mit
   $z = t$ folgt aus I: $x = 6 - 2 - t = 4 - t$. Die **Schnittgerade** besteht aus allen Punkten $(4 - t \mid 2 \mid t)$.
   Für $t = 0$ ist das $(4 \mid 2 \mid 0)$, für $t = 1$ ist es $(3 \mid 2 \mid 1)$.
:::

:::achtung[Zwei Ebenen haben keinen einzelnen Schnittpunkt]
**Falsch:** Jemand löst $x + y + z = 6$ und $x - y + z = 2$, indem er $z = 0$ setzt. Er findet $(4 \mid 2 \mid 0)$ und
schreibt: „Die beiden Ebenen schneiden sich im Punkt $(4 \mid 2 \mid 0)$.“

**Richtig:** Mit $z = 0$ hat er nur **einen** von unendlich vielen gemeinsamen Punkten gefunden. Mit $z = 1$ erhält man
$(3 \mid 2 \mid 1)$, der ebenfalls auf beiden Ebenen liegt. Die Ebenen schneiden sich in einer ganzen Geraden. Die
richtige Antwort nennt die Schnittgerade $\{(4 - t \mid 2 \mid t)\}$.
:::

```aufgabe
id: lm-check-zwei-ebenen
titel: Parallel oder nicht?
niveau: 1
art: check
angabe: |
  Sind die Ebenen $3x - y + 2z = 1$ und $-6x + 2y - 4z = 5$ parallel?
teile:
  - typ: auswahl
    optionen:
      - 'ja, parallel und verschieden'
      - 'ja, sogar identisch'
      - 'nein, sie schneiden sich in einer Geraden'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Die linken Seiten passen zusammen: Die zweite ist das $(-2)$-Fache der ersten. Identisch wären die Ebenen aber nur,
          wenn auch die rechte Seite $5$ das $(-2)$-Fache von $1$ wäre.
      - wert: 2
        meldung: |
          Vergleiche die Normalvektoren $(3, -1, 2)$ und $(-6, 2, -4)$. Der zweite ist das $(-2)$-Fache des ersten.
hinweise:
  - 'Lies die Normalvektoren an den Koeffizienten ab und prüfe, ob sie Vielfache voneinander sind.'
loesung: |
  Normalvektoren: $(3, -1, 2)$ und $(-6, 2, -4) = -2\cdot(3, -1, 2)$. Die Ebenen sind parallel.
  ---
  Die erste Gleichung mal $-2$ ergibt $-6x + 2y - 4z = -2 \neq 5$. Die Ebenen sind also parallel und verschieden.
```

### Drei Ebenen

Bei drei Ebenen gibt es mehr Möglichkeiten. Die Ränge sortieren sie vollständig:

1. **$\operatorname{rg}(A) = 3$:** Die drei Ebenen schneiden sich in **genau einem Punkt**, wie zwei Wände und der Boden
   in einer Zimmerecke.
2. **$\operatorname{rg}(A) = \operatorname{rg}(A \mid b) = 2$:** Die drei Ebenen haben eine **gemeinsame Gerade**. Sie
   liegen wie die Seiten eines aufgeschlagenen Buches um den Buchrücken. Man nennt das ein **Ebenenbüschel**. Es kann
   auch sein, dass zwei der Ebenen zusammenfallen und die dritte sie schneidet.
3. **$\operatorname{rg}(A) = \operatorname{rg}(A \mid b) = 1$:** Alle drei Gleichungen beschreiben **dieselbe Ebene**.
4. **$\operatorname{rg}(A) = 2$ und $\operatorname{rg}(A \mid b) = 3$:** Keine Lösung. Entweder schneiden sich je zwei
   Ebenen in einer Geraden, und diese drei Geraden sind parallel. Die Ebenen bilden dann ein **Prisma**, wie die drei
   Flächen eines Zeltdachs mit Boden. Oder zwei der Ebenen sind parallel, und die dritte schneidet beide.
5. **$\operatorname{rg}(A) = 1$ und $\operatorname{rg}(A \mid b) = 2$:** Keine Lösung. Alle drei Ebenen sind parallel,
   mindestens zwei davon verschieden.

Die beiden Fälle in Punkt 4 unterscheidet man mit den Normalvektoren. Sind zwei davon Vielfache voneinander, gibt es
parallele Ebenen. Ist das bei keinem Paar so, liegt ein Prisma vor.

:::beispiel[Senkrechte Wände von oben betrachtet]
Fehlt in allen drei Gleichungen das $z$, sind die Ebenen senkrechte „Wände“. Von oben gesehen erscheint jede Wand als
Gerade in der $xy$-Ebene. So kann man das Prisma und das Büschel zeichnen.

1. **Prisma:** $x + y = 4$, $x - y = 0$ und $y = 3$. Von oben sieht man drei Geraden, die ein Dreieck bilden. Je zwei
   Wände schneiden sich in einer senkrechten Kante, zum Beispiel die ersten beiden über dem Punkt $(2 \mid 2)$. Einen
   Punkt auf allen drei Wänden gibt es nicht: Aus den ersten beiden Gleichungen folgt $y = 2$, die dritte verlangt $y = 3$.
2. **Büschel:** $x + y = 4$, $x - y = 0$ und $x = 2$. Jetzt gehen alle drei Geraden durch den Punkt $(2 \mid 2)$. Die drei
   Wände haben die senkrechte Gerade über diesem Punkt gemeinsam, also alle Punkte $(2 \mid 2 \mid t)$.
:::

```plot
x: [-1, 5]
y: [-1, 5]
gleich: true
graphen:
  - { f: "4 - x", label: "x + y = 4", farbe: 0 }
  - { f: "x", label: "x − y = 0", farbe: 1 }
  - { f: "3", label: "y = 3", farbe: 2 }
punkte:
  - { x: 2, y: 2 }
  - { x: 1, y: 3 }
  - { x: 3, y: 3 }
beschriftung: Prisma von oben gesehen. Die drei senkrechten Ebenen x + y = 4, x − y = 0 und y = 3 erscheinen als drei Geraden, die ein Dreieck bilden. Je zwei schneiden sich, aber kein Punkt liegt auf allen dreien.
```

```plot
x: [-1, 5]
y: [-1, 5]
gleich: true
graphen:
  - { f: "4 - x", label: "x + y = 4", farbe: 0 }
  - { f: "x", label: "x − y = 0", farbe: 1 }
strecken:
  - { von: [2, -1], nach: [2, 5], farbe: 2 }
punkte:
  - { x: 2, y: 2, label: "(2|2)" }
beschriftung: Ebenenbüschel von oben gesehen. Die senkrechten Ebenen x + y = 4, x − y = 0 und x = 2 (grün) erscheinen als drei Geraden durch den Punkt (2|2). Die drei Ebenen haben die senkrechte Gerade über diesem Punkt gemeinsam.
```

:::beispiel[Systeme aus diesem Kapitel deuten]
1. Das System aus dem ersten Beispiel der Lektion [3.3 Das Gauß-Verfahren](/lernen/mathe3/lgs-matrizen/das-gauss-verfahren)
   hat genau die Lösung $(2, -1, 3)$. Die drei Ebenen schneiden sich im Punkt $S(2 \mid -1 \mid 3)$.
2. Der Punkt $(7 \mid 0 \mid 0)$ erfüllt die erste Gleichung dieses Systems, $x + y + 2z = 7$. In die zweite eingesetzt
   ergibt er $14 \neq -2$, in die dritte $-7 \neq 5$. Er liegt also auf der ersten Ebene, aber auf keiner der anderen.
3. Das System mit unendlich vielen Lösungen aus der Lektion 3.4 hat eine Gerade als Lösungsmenge. Die drei Ebenen
   bilden ein Büschel um die Gerade $(7 - 5t \mid -3 + 3t \mid t)$.
4. Mit der rechten Seite $8$ statt $6$ hatte dasselbe System keine Lösung. Die Normalvektoren $(1, 2, -1)$, $(2, 3, 1)$ und
   $(3, 5, 0)$ sind paarweise keine Vielfachen. Die Ebenen bilden ein Prisma.
:::

:::achtung[Keine Lösung heißt nicht automatisch parallel]
**Falsch:** „Das System hat keine Lösung, also sind zwei der Ebenen parallel.“ Für das System $x + 2y - z = 1$,
$2x + 3y + z = 5$, $3x + 5y = 8$ stimmt das nicht.

**Richtig:** Seine Normalvektoren $(1, 2, -1)$, $(2, 3, 1)$ und $(3, 5, 0)$ sind paarweise keine Vielfachen. Keine zwei
Ebenen sind parallel. Je zwei schneiden sich in einer Geraden, aber die drei Schnittgeraden sind parallel. Es ist ein
Prisma. Bevor du „parallel“ schreibst, vergleiche die Normalvektoren.
:::

:::pruefung[So formulierst du die geometrische Deutung]
Eine vollständige Antwort hat drei Teile.

1. **Was die Gleichungen sind:** „Jede Gleichung beschreibt eine Ebene im Raum.“ Bei zwei Unbekannten sagst du stattdessen
   „eine Gerade in der Ebene“.
2. **Was die Lösungsmenge ist:** „Die Lösungsmenge des Systems ist die Menge der Punkte, die auf allen Ebenen liegen.“
3. **Was hier konkret passiert,** zum Beispiel: „Die drei Ebenen schneiden sich im Punkt $S(2 \mid -1 \mid 3)$.“ Oder:
   „Die beiden Ebenen sind parallel, denn ihre Normalvektoren sind Vielfache, aber sie sind nicht identisch. Sie haben
   keinen gemeinsamen Punkt.“

Fragt die Prüfung nach einem Tripel, das **nur eine** Gleichung erfüllt, ist die Deutung: Dieser Punkt liegt auf der
einen Ebene, aber nicht auf den anderen.
:::

```reflexion
frage: Warum können drei Ebenen nicht genau zwei gemeinsame Punkte haben?
antwort: |
  Haben die drei Ebenen zwei verschiedene Punkte $P$ und $Q$ gemeinsam, dann enthält jede der Ebenen auch die ganze Gerade
  durch $P$ und $Q$. Denn eine Ebene ist flach: Liegen zwei Punkte darin, liegt die Verbindungsgerade ganz darin. Also haben
  die Ebenen dann unendlich viele gemeinsame Punkte. Rechnerisch ist das die Aussage aus der Lektion 3.4: Ein lineares System
  hat nie genau zwei Lösungen.
```

### Mehr Gleichungen als Unbekannte

Auch **überbestimmte** Systeme kommen vor, also Systeme mit mehr Gleichungen als Unbekannten. Drei Gleichungen mit zwei
Unbekannten sind drei Geraden in der Ebene. Meistens haben drei Geraden keinen gemeinsamen Punkt. Nur in Ausnahmefällen
gehen alle drei durch denselben Punkt.

```plot
x: [-1, 6]
y: [-2, 5]
gleich: true
graphen:
  - { f: "4 - x", label: "x + y = 4", farbe: 0 }
  - { f: "x - 2", label: "x − y = 2", farbe: 1 }
  - { f: "(5 - x)/2", label: "x + 2y = 5", farbe: 2 }
  - { f: "(7 - x)/2", label: "x + 2y = 7", farbe: 3, gestrichelt: true }
punkte:
  - { x: 3, y: 1, label: "S(3 | 1)" }
beschriftung: Drei Geraden durch einen gemeinsamen Punkt S(3 | 1). Das überbestimmte System ist lösbar. Ersetzt man die grüne Gerade x + 2y = 5 durch die gestrichelte x + 2y = 7, bilden die drei Geraden ein Dreieck, und das System hat keine Lösung.
```

Rechnerisch löst man zwei der Gleichungen und prüft, ob die Lösung auch die übrigen erfüllt. Im Bild folgt aus
$x + y = 4$ und $x - y = 2$ durch Addieren $2x = 6$, also $(3, 1)$. Wegen $3 + 2\cdot 1 = 5$ liegt der Punkt auch auf der
grünen Geraden. Wegen $5 \neq 7$ liegt er nicht auf der gestrichelten.

### Übungen

```aufgabe
id: lm-ebene-achsen
titel: Wo schneidet die Ebene die Achsen?
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Bestimme die Schnittpunkte der Ebene $E\colon 3x + 2y + 6z = 12$ mit den drei Koordinatenachsen. Gib jeweils die von
  null verschiedene Koordinate an.
teile:
  - typ: zahl
    label: 'Schnitt mit der $x$-Achse: $x =$'
    loesung: "12/3"
    anzeige: '4'
    fehler:
      - wert: "12"
        meldung: |
          Auf der $x$-Achse ist $y = z = 0$. Es bleibt $3x = 12$. Du musst noch durch $3$ teilen.
      - wert: "1/4"
        meldung: |
          Aus $3x = 12$ folgt $x = \frac{12}{3}$, nicht $\frac{3}{12}$.
  - typ: zahl
    label: 'Schnitt mit der $y$-Achse: $y =$'
    loesung: "12/2"
    anzeige: '6'
  - typ: zahl
    label: 'Schnitt mit der $z$-Achse: $z =$'
    loesung: "12/6"
    anzeige: '2'
hinweise:
  - 'Auf der $x$-Achse sind $y$ und $z$ gleich $0$. Setze sie ein.'
loesung: |
  Ansatz: Auf einer Koordinatenachse sind die beiden anderen Koordinaten $0$.
  ---
  $x$-Achse: $3x = 12$, also $(4 \mid 0 \mid 0)$. $y$-Achse: $2y = 12$, also $(0 \mid 6 \mid 0)$. $z$-Achse: $6z = 12$, also $(0 \mid 0 \mid 2)$.
  ---
  Diese drei Punkte bilden das Spurdreieck der Ebene.
```

```aufgabe
id: lm-nur-erste-gleichung
titel: Ein Punkt auf nur einer Ebene
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Gegeben ist das System
  $$\begin{aligned} x + 2y - z &= 4 &\text{(I)}\\ 2x - y + z &= 4 &\text{(II)}\\ x + y + 2z &= 8 &\text{(III)} \end{aligned}$$
  a) Setze $y = 0$ und $z = 0$ in I ein. Welches $x$ erfüllt dann die Gleichung I?

  b) Liegt der Punkt $(x \mid 0 \mid 0)$ aus a) auch auf den Ebenen II und III?

  c) Wie deutet man diesen Punkt geometrisch?
teile:
  - typ: zahl
    label: 'a) $x =$'
    loesung: "4"
    fehler:
      - wert: "8"
        meldung: |
          Setz $y = 0$ und $z = 0$ in die **erste** Gleichung ein: $x + 0 - 0 = 4$.
  - typ: auswahl
    label: 'b)'
    optionen:
      - 'Er liegt auf keiner der Ebenen II und III.'
      - 'Er liegt auf II, aber nicht auf III.'
      - 'Er liegt auf allen drei Ebenen.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Setz $(4 \mid 0 \mid 0)$ in II ein: $2\cdot 4 - 0 + 0 = 8$. Verlangt ist aber $4$.
      - wert: 2
        meldung: |
          Prüfe durch Einsetzen. In II ergibt sich $8 \neq 4$, in III ergibt sich $4 \neq 8$.
  - typ: auswahl
    label: 'c) Deutung'
    optionen:
      - 'Der Punkt liegt auf der ersten Ebene, aber nicht auf den beiden anderen.'
      - 'Der Punkt ist der Schnittpunkt der drei Ebenen.'
      - 'Der Punkt liegt auf der Schnittgeraden von zwei Ebenen.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Der Schnittpunkt aller drei Ebenen müsste alle drei Gleichungen erfüllen. Dieser Punkt erfüllt nur I.
      - wert: 2
        meldung: |
          Auf einer Schnittgeraden zweier Ebenen läge der Punkt auf zwei Ebenen. Er erfüllt aber nur eine Gleichung.
hinweise:
  - 'Für a) bleibt von Gleichung I nur $x = 4$ übrig.'
  - 'Für b) setze den Punkt in II und III ein und vergleiche mit den rechten Seiten.'
loesung: |
  Ansatz: Jede Gleichung ist eine Ebene. Ein Punkt liegt auf einer Ebene, wenn er ihre Gleichung erfüllt.
  ---
  a) Mit $y = z = 0$ wird I zu $x = 4$. Der Punkt ist $(4 \mid 0 \mid 0)$.
  ---
  b) In II: $8 - 0 + 0 = 8 \neq 4$. In III: $4 + 0 + 0 = 4 \neq 8$. Der Punkt liegt auf keiner der beiden anderen Ebenen.
  ---
  c) Der Punkt liegt auf der ersten Ebene und nicht auf den anderen. Zum Vergleich: Das ganze System hat die Lösung $(2, 2, 2)$. Probe: $2 + 4 - 2 = 4$, $4 - 2 + 2 = 4$, $2 + 2 + 4 = 8$. Das ist der Schnittpunkt aller drei Ebenen.
```

```aufgabe
id: lm-zwei-ebenen-lage
titel: Wie liegen zwei Ebenen?
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: |
  Bestimme jeweils die Lage der beiden Ebenen zueinander.

  (i) $\;2x - y + 3z = 4\;$ und $\;-4x + 2y - 6z = 1$

  (ii) $\;2x - y + 3z = 4\;$ und $\;-4x + 2y - 6z = -8$

  (iii) $\;2x - y + 3z = 4\;$ und $\;x + y = 2$
teile:
  - typ: auswahl
    label: '(i)'
    optionen: ['schneiden sich in einer Geraden', 'parallel und verschieden', 'identisch']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Der Normalvektor $(-4, 2, -6)$ ist das $(-2)$-Fache von $(2, -1, 3)$. Die Ebenen sind parallel.'
      - wert: 2
        meldung: 'Die erste Gleichung mal $-2$ ergibt rechts $-8$, nicht $1$. Die Ebenen sind nicht identisch.'
  - typ: auswahl
    label: '(ii)'
    optionen: ['schneiden sich in einer Geraden', 'parallel und verschieden', 'identisch']
    richtig: [2]
    fehler:
      - wert: 1
        meldung: 'Vergleiche auch die rechten Seiten: $(-2)\cdot 4 = -8$. Die ganze zweite Gleichung ist das $(-2)$-Fache der ersten.'
      - wert: 0
        meldung: 'Die Normalvektoren sind Vielfache voneinander. Dann schneiden sich die Ebenen nicht in einer Geraden.'
  - typ: auswahl
    label: '(iii)'
    optionen: ['schneiden sich in einer Geraden', 'parallel und verschieden', 'identisch']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Der Normalvektor von $x + y = 2$ ist $(1, 1, 0)$. Er ist kein Vielfaches von $(2, -1, 3)$.'
      - wert: 2
        meldung: 'Die Normalvektoren $(2, -1, 3)$ und $(1, 1, 0)$ sind keine Vielfachen voneinander. Identische Ebenen haben parallele Normalvektoren.'
hinweise:
  - 'Lies die Normalvektoren ab. Sind sie Vielfache voneinander?'
  - 'Wenn ja: Ist auch die ganze Gleichung mit rechter Seite ein Vielfaches? Dann identisch, sonst parallel und verschieden.'
loesung: |
  Ansatz: Normalvektoren vergleichen. Sind sie Vielfache, sind die Ebenen parallel oder identisch. Sonst schneiden sie sich in einer Geraden.
  ---
  (i) $(-4, 2, -6) = -2\cdot(2, -1, 3)$, aber $(-2)\cdot 4 = -8 \neq 1$: **parallel und verschieden**, keine Lösung.
  ---
  (ii) Die ganze Gleichung ist das $(-2)$-Fache der ersten: **identisch**, unendlich viele Lösungen mit zwei Parametern.
  ---
  (iii) $(1, 1, 0)$ ist kein Vielfaches von $(2, -1, 3)$: Die Ebenen **schneiden sich in einer Geraden**.
```

```aufgabe
id: lm-ebenen-lage
titel: Lage dreier Ebenen erkennen
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: |
  Beschreibe die Lage der drei Ebenen
  $$E_1\colon x - y + z = 2, \qquad E_2\colon 2x - 2y + 2z = 7, \qquad E_3\colon x + y = 1.$$
teile:
  - typ: auswahl
    optionen:
      - 'Sie schneiden sich in genau einem Punkt.'
      - 'Sie haben eine gemeinsame Gerade.'
      - 'Sie bilden ein Prisma.'
      - '$E_1$ und $E_2$ sind parallel, $E_3$ schneidet beide.'
      - 'Alle drei Ebenen sind parallel.'
    richtig: [3]
    fehler:
      - wert: 2
        meldung: |
          Bei einem Prisma sind keine zwei Normalvektoren Vielfache voneinander. Hier ist $(2, -2, 2) = 2\cdot(1, -1, 1)$.
      - wert: 4
        meldung: |
          $E_3$ hat den Normalvektor $(1, 1, 0)$. Er ist kein Vielfaches von $(1, -1, 1)$. Also ist $E_3$ nicht parallel zu den anderen.
      - wert: 0
        meldung: |
          $E_1$ und $E_2$ sind parallel und verschieden. Dann gibt es keinen Punkt, der auf allen drei Ebenen liegt.
hinweise:
  - 'Vergleiche die Normalvektoren $(1, -1, 1)$, $(2, -2, 2)$ und $(1, 1, 0)$.'
  - 'Prüfe für die beiden parallelen Ebenen, ob sie identisch sind: $E_1$ mal $2$ ergibt rechts $4$.'
loesung: |
  Ansatz: Zuerst die Normalvektoren vergleichen, dann bei parallelen Ebenen die rechten Seiten.
  ---
  $(2, -2, 2) = 2\cdot(1, -1, 1)$: $E_1$ und $E_2$ sind parallel. $E_1$ mal $2$ ergibt $2x - 2y + 2z = 4 \neq 7$, also sind sie verschieden.
  ---
  $(1, 1, 0)$ ist kein Vielfaches von $(1, -1, 1)$. $E_3$ schneidet $E_1$ und $E_2$ je in einer Geraden.
  ---
  Ränge: $\operatorname{rg}(A) = 2$ und $\operatorname{rg}(A \mid b) = 3$, keine Lösung. Ergebnis: zwei parallele Ebenen, von der dritten geschnitten.
```

```aufgabe
id: lm-prisma
titel: Ein Prisma erkennen
niveau: 2
lernziel: 4
kompetenz: begruenden
angabe: |
  Gegeben sind die Ebenen
  $$E_1\colon x + 2y - z = 1, \qquad E_2\colon 2x - y + z = 3, \qquad E_3\colon 3x + y = 5.$$
  Bestimme die Ränge und beschreibe die Lage der Ebenen.
teile:
  - typ: zahl
    label: '$\operatorname{rg}(A)$'
    loesung: "2"
    fehler:
      - wert: "3"
        meldung: |
          Die linke Seite von $E_3$ ist die Summe der linken Seiten von $E_1$ und $E_2$. Nach Gauß entsteht links eine Nullzeile.
  - typ: zahl
    label: '$\operatorname{rg}(A \mid b)$'
    loesung: "3"
    fehler:
      - wert: "2"
        meldung: |
          Rechts bleibt in der letzten Zeile $5 - (1 + 3) = 1$ stehen. Die Zeile $(0\ \ 0\ \ 0 \mid 1)$ zählt beim Rang der erweiterten Matrix mit.
  - typ: text
    label: 'Lage der Ebenen'
    muster: |
      Die linke Seite von $E_3$ ist die Summe der linken Seiten von $E_1$ und $E_2$, die rechte Seite ist aber $5 \neq 1 + 3$.
      Darum hat das System keine Lösung. Keine zwei Normalvektoren $(1, 2, -1)$, $(2, -1, 1)$, $(3, 1, 0)$ sind Vielfache
      voneinander, also sind keine zwei Ebenen parallel. Je zwei Ebenen schneiden sich in einer Geraden. Diese drei Geraden
      sind parallel. Die Ebenen bilden ein Prisma.
hinweise:
  - 'Addiere die Gleichungen von $E_1$ und $E_2$ und vergleiche mit $E_3$.'
  - 'Zum Unterscheiden von Prisma und parallelen Ebenen: Prüfe, ob zwei Normalvektoren Vielfache voneinander sind.'
gefuehrt:
  - text: 'Addiere die linken Seiten von $E_1$ und $E_2$. Welcher Koeffizient steht dann vor $z$?'
    teil:
      typ: zahl
      loesung: "-1 + 1"
    erklaerung: '$(x + 2y - z) + (2x - y + z) = 3x + y$. Vor $z$ steht $0$. Das ist genau die linke Seite von $E_3$.'
  - text: 'Welche rechte Seite müsste $E_3$ haben, damit sie zu $E_1 + E_2$ passt?'
    teil:
      typ: zahl
      loesung: "1 + 3"
      fehler:
        - wert: "5"
          meldung: '$5$ steht tatsächlich bei $E_3$. Passend wäre aber die Summe der rechten Seiten von $E_1$ und $E_2$.'
    erklaerung: 'Passend wäre $1 + 3 = 4$. Gegeben ist $5$. Deshalb widersprechen sich die Gleichungen: keine Lösung.'
  - text: 'Ist einer der Normalvektoren $(1, 2, -1)$, $(2, -1, 1)$, $(3, 1, 0)$ ein Vielfaches eines anderen?'
    teil:
      typ: auswahl
      optionen: ['ja', 'nein']
      richtig: [1]
    erklaerung: 'Nein. Darum ist keine Ebene zu einer anderen parallel. Es liegt ein Prisma vor.'
loesung: |
  Ansatz: Gauß-Verfahren für die Ränge, dann die Normalvektoren für die Lage.
  ---
  $\text{II} - 2\cdot\text{I}$: $(0,\ -5,\ 3 \mid 1)$. $\text{III} - 3\cdot\text{I}$: $(0,\ -5,\ 3 \mid 2)$. Dann $\text{III} - \text{II}$: $(0,\ 0,\ 0 \mid 1)$.
  ---
  $\operatorname{rg}(A) = 2$ und $\operatorname{rg}(A \mid b) = 3$: keine Lösung.
  ---
  Die Normalvektoren $(1, 2, -1)$, $(2, -1, 1)$, $(3, 1, 0)$ sind paarweise keine Vielfachen. Keine zwei Ebenen sind parallel. Sie schneiden sich paarweise in drei parallelen Geraden ohne gemeinsamen Punkt: ein **Prisma**.
```

```aufgabe
id: lm-ueberbestimmt
titel: Wann ist ein überbestimmtes System lösbar?
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Bestimme $c$ so, dass das System lösbar ist. Gib dann die Lösung an.
  $$\begin{aligned} x + y &= 6\\ 3x - y &= 2\\ 2x + y &= c \end{aligned}$$
teile:
  - typ: zahl
    label: '$c =$'
    loesung: "2*2 + 4"
    anzeige: '8'
    fehler:
      - wert: "6"
        meldung: |
          Setze die Lösung der ersten beiden Gleichungen in die **dritte** ein: $2x + y$ mit $x = 2$ und $y = 4$.
  - typ: vektor
    label: 'Lösung $(x, y)$'
    namen: ["x", "y"]
    loesung: ["2", "4"]
    fehler:
      - wert: ["4", "2"]
        meldung: |
          Prüfe die Reihenfolge. Setz das Paar in $3x - y = 2$ ein: $3\cdot 4 - 2 = 10 \neq 2$.
hinweise:
  - 'Die ersten beiden Gleichungen enthalten kein $c$. Löse sie zuerst.'
  - 'Die dritte Gerade muss durch den Schnittpunkt der ersten beiden gehen. Setze diesen Punkt in die dritte Gleichung ein.'
loesung: |
  Ansatz: Drei Geraden haben nur dann einen gemeinsamen Punkt, wenn die dritte durch den Schnittpunkt der ersten beiden geht.
  ---
  Erste plus zweite Gleichung: $4x = 8$, also $x = 2$ und $y = 6 - 2 = 4$.
  ---
  Damit auch die dritte Gleichung erfüllt ist, muss $c = 2\cdot 2 + 4 = 8$ sein.
  ---
  Geometrisch: Für $c = 8$ gehen alle drei Geraden durch $(2 \mid 4)$. Für jedes andere $c$ verfehlt die dritte Gerade diesen Punkt, und das System hat keine Lösung.
```

```aufgabe
id: lm-ebene-waehlen
titel: Ebenen passend wählen
niveau: 3
lernziel: 4
kompetenz: begruenden
quelle: nach Musterprüfung Winkler, Aufgabe 4 (abgewandelt)
angabe: |
  Die Gleichung $G_1\colon 2x + y - z = 4$ beschreibt eine Ebene $\varepsilon$ (griechisch „epsilon“). Sie enthält die Punkte
  $A(2 \mid 0 \mid 0)$ und $B(0 \mid 4 \mid 0)$.

  a) Bei welchen Gleichungen $G_2$ erfüllen **genau die Punkte der Geraden durch $A$ und $B$** sowohl $G_1$ als auch $G_2$?

  b) Bei welchen Gleichungen $G_3$ erfüllt **kein Punkt** sowohl $G_1$ als auch $G_3$?
teile:
  - typ: auswahl
    label: 'a) geeignete $G_2$'
    mehrfach: true
    optionen:
      - '$z = 0$'
      - '$2x + y = 4$'
      - '$x - y = 2$'
      - '$4x + 2y - 2z = 8$'
      - '$2x + y + z = 4$'
    richtig: [0, 1, 4]
    fehler:
      - wert: [0, 1, 3, 4]
        meldung: |
          $4x + 2y - 2z = 8$ ist das Doppelte von $G_1$, also dieselbe Ebene. Dann erfüllt die **ganze** Ebene beide Gleichungen,
          nicht nur die Gerade $AB$.
      - wert: [0, 1, 2, 4]
        meldung: |
          $x - y = 2$ enthält $B$ nicht: $0 - 4 = -4 \neq 2$. Die Schnittgerade geht dann nicht durch $B$.
      - wert: [0, 1]
        meldung: |
          Prüfe auch $2x + y + z = 4$: Es enthält $A$ ($4 = 4$) und $B$ ($4 = 4$), und $(2, 1, 1)$ ist kein Vielfaches von $(2, 1, -1)$.
  - typ: auswahl
    label: 'b) geeignete $G_3$'
    mehrfach: true
    optionen:
      - '$2x + y - z = 1$'
      - '$-4x - 2y + 2z = 3$'
      - '$2x + y + z = 4$'
      - '$-2x - y + z = -4$'
    richtig: [0, 1]
    fehler:
      - wert: [0, 1, 3]
        meldung: |
          $-2x - y + z = -4$ ist $G_1$ mal $-1$, also dieselbe Ebene. Dann haben die beiden Gleichungen alle Punkte von $\varepsilon$ gemeinsam.
      - wert: [0]
        meldung: |
          Auch $-4x - 2y + 2z = 3$ passt: Der Normalvektor ist das $(-2)$-Fache von $(2, 1, -1)$. Geteilt durch $-2$ wird die
          Gleichung zu $2x + y - z = -1{,}5 \neq 4$. Die Ebene ist parallel und verschieden.
hinweise:
  - 'Für a): $G_2$ muss $A$ und $B$ enthalten (einsetzen) und darf nicht dieselbe Ebene wie $G_1$ sein.'
  - 'Für b): $G_3$ muss eine zu $\varepsilon$ parallele, aber verschiedene Ebene sein. Der Normalvektor ist ein Vielfaches von $(2, 1, -1)$, die ganze Gleichung aber kein Vielfaches von $G_1$.'
loesung: |
  Ansatz: Zwei verschiedene, nicht parallele Ebenen schneiden sich in einer Geraden. Diese Gerade ist $AB$, wenn beide Ebenen $A$ und $B$ enthalten. Kein gemeinsamer Punkt heißt: parallel und verschieden.
  ---
  a) $z = 0$: enthält $A$ und $B$, Normalvektor $(0, 0, 1)$ nicht parallel. Geeignet. $2x + y = 4$: $A$ gibt $4 = 4$, $B$ gibt $4 = 4$, Normalvektor $(2, 1, 0)$ nicht parallel. Geeignet. $2x + y + z = 4$: enthält $A$ und $B$, Normalvektor $(2, 1, 1)$ nicht parallel. Geeignet.
  ---
  Nicht geeignet: $x - y = 2$ enthält $B$ nicht. $4x + 2y - 2z = 8$ ist dieselbe Ebene wie $G_1$.
  ---
  b) $2x + y - z = 1$: gleicher Normalvektor, aber $1 \neq 4$. Geeignet. $-4x - 2y + 2z = 3$ ist durch $-2$ geteilt $2x + y - z = -1{,}5$. Parallel und verschieden, geeignet.
  ---
  $2x + y + z = 4$ hat einen anderen Normalvektor und schneidet $\varepsilon$. $-2x - y + z = -4$ ist $\varepsilon$ selbst. Rechnerisch ergibt zum Beispiel $G_1$ und $2x + y - z = 1$ nach Subtraktion $0 = 3$: $\operatorname{rg}(A) = 1 < 2 = \operatorname{rg}(A \mid b)$.
```

## Matrizen und ihre Rechenregeln

```aufgabe
id: lm-check-koeffizientenmatrix
titel: Wie groß ist die Koeffizientenmatrix?
niveau: 1
art: check
angabe: |
  Ein System besteht aus $2$ Gleichungen mit $3$ Unbekannten. Wie viele Zeilen und wie viele Spalten hat seine
  Koeffizientenmatrix, also das Zahlenschema links vom Strich?
  Herkunft: [3.3 Das Gauß-Verfahren](/lernen/mathe3/lgs-matrizen/das-gauss-verfahren).
teile:
  - typ: vektor
    namen: ["Zeilen", "Spalten"]
    loesung: ["2", "3"]
    fehler:
      - wert: ["3", "2"]
        meldung: |
          Jede **Gleichung** wird eine Zeile, jede **Unbekannte** eine Spalte. Zwei Gleichungen ergeben zwei Zeilen.
      - wert: ["2", "4"]
        meldung: |
          Die vierte Spalte mit den rechten Seiten gehört zur erweiterten Matrix. Gefragt ist nur der Teil links vom Strich.
hinweise:
  - 'Jede Gleichung ist eine Zeile, jede Unbekannte eine Spalte.'
loesung: |
  Jede Gleichung liefert eine Zeile, also $2$ Zeilen.
  ---
  Jede Unbekannte hat eine Spalte, also $3$ Spalten. Die Koeffizientenmatrix hat das Format $2\times 3$.
```

Bisher war eine Matrix nur eine Schreibabkürzung für ein Gleichungssystem. Matrizen sind aber auch eigenständige
Rechenobjekte. Man kann sie addieren und multiplizieren. Damit schreibt man ein ganzes Gleichungssystem als eine
einzige Gleichung $A\vec x = \vec b$. Später löst man sie mit einer „inversen Matrix“, ähnlich wie man $3x = 6$ durch
Multiplizieren mit $\frac13$ löst.

### Was ist eine Matrix?

:::definition[Matrix]
Eine **$m\times n$-Matrix** ist ein rechteckiges Zahlenschema mit $m$ Zeilen und $n$ Spalten:
$$A = \begin{pmatrix} a_{11} & a_{12} & \cdots & a_{1n}\\ a_{21} & a_{22} & \cdots & a_{2n}\\ \vdots & & & \vdots\\ a_{m1} & a_{m2} & \cdots & a_{mn} \end{pmatrix}.$$
Die Zahl $a_{ij}$ ist der **Eintrag** in Zeile $i$ und Spalte $j$. Merkhilfe: **Zeile zuerst, Spalte später.** Das Paar
$m\times n$ heißt **Format** der Matrix. Ist $m = n$, heißt die Matrix **quadratisch**.
:::

Die Mehrzahl von „Matrix“ ist „Matrizen“. Große Buchstaben wie $A$, $B$, $C$ bezeichnen Matrizen, kleine Buchstaben
mit zwei Nummern ihre Einträge.

:::beispiel[Format und Einträge ablesen]
$$A = \begin{pmatrix} 4 & -1 & 0\\ 2 & 5 & 3 \end{pmatrix}$$
hat $2$ Zeilen und $3$ Spalten. Ihr Format ist also $2\times 3$. Der Eintrag in Zeile $1$, Spalte $2$ ist
$a_{12} = -1$. Der Eintrag in Zeile $2$, Spalte $1$ ist $a_{21} = 2$. Der Eintrag in Zeile $2$, Spalte $3$ ist
$a_{23} = 3$. Beachte: $a_{12}$ und $a_{21}$ sind verschiedene Einträge.

**Nichtbeispiel:** Ein Schema, in dem die erste Zeile drei Zahlen und die zweite Zeile nur zwei Zahlen hat, ist keine
Matrix. Eine Matrix ist immer ein vollständiges Rechteck.
:::

Einige Matrizen haben eigene Namen:

- Ein **Zeilenvektor** ist eine $1\times n$-Matrix, ein **Spaltenvektor** eine $m\times 1$-Matrix. In der
  Matrizenrechnung schreibt man Vektoren als Spalten.
- Die **Nullmatrix** $O$ hat nur Nullen als Einträge.
- Die **Einheitsmatrix** $E$ ist quadratisch. Auf der **Hauptdiagonale**, also von links oben nach rechts unten, stehen
  Einsen, sonst Nullen. Beispiel: $E = \begin{pmatrix} 1 & 0 & 0\\ 0 & 1 & 0\\ 0 & 0 & 1 \end{pmatrix}$. Manche Bücher
  schreiben $I$ statt $E$.
- Eine **Diagonalmatrix** hat höchstens auf der Hauptdiagonale Einträge ungleich $0$.
- Eine **obere Dreiecksmatrix** hat unter der Hauptdiagonale nur Nullen. Die Stufenform eines Systems mit genau einer
  Lösung ist so eine Matrix.

### Addieren, vervielfachen, transponieren

:::definition[Summe und Vielfaches]
Für zwei Matrizen $A$ und $B$ **mit demselben Format** und eine Zahl $r$ gilt:

- $A + B$ ist die Matrix, deren Einträge die Summen $a_{ij} + b_{ij}$ sind.
- $r\cdot A$ ist die Matrix, deren Einträge die Produkte $r\cdot a_{ij}$ sind.

Man rechnet also **Eintrag für Eintrag**. Matrizen mit verschiedenem Format kann man nicht addieren.
:::

Für diese Rechenarten gelten dieselben Gesetze wie für Zahlen: $A + B = B + A$, $(A + B) + C = A + (B + C)$,
$A + O = A$ und $r\,(A + B) = rA + rB$.

:::definition[Transponierte]
Die **Transponierte** $A^T$ einer $m\times n$-Matrix $A$ entsteht, wenn man **Zeilen und Spalten vertauscht**. Die erste
Zeile von $A$ wird die erste Spalte von $A^T$, die zweite Zeile die zweite Spalte und so weiter. $A^T$ hat das Format
$n\times m$. Das hochgestellte $T$ liest man „transponiert“.
:::

:::beispiel[Summe, Vielfaches und Transponierte]
$$A = \begin{pmatrix} 3 & 0 & -2\\ 1 & 4 & 2 \end{pmatrix}, \qquad B = \begin{pmatrix} -1 & 2 & 5\\ 0 & -3 & 1 \end{pmatrix}.$$

1. **Summe**, Eintrag für Eintrag: $A + B = \begin{pmatrix} 3 - 1 & 0 + 2 & -2 + 5\\ 1 + 0 & 4 - 3 & 2 + 1 \end{pmatrix} = \begin{pmatrix} 2 & 2 & 3\\ 1 & 1 & 3 \end{pmatrix}$.
2. **Kombination:** $2A - B = \begin{pmatrix} 6 + 1 & 0 - 2 & -4 - 5\\ 2 - 0 & 8 + 3 & 4 - 1 \end{pmatrix} = \begin{pmatrix} 7 & -2 & -9\\ 2 & 11 & 3 \end{pmatrix}$.
3. **Transponierte:** Die erste Zeile $(3, 0, -2)$ wird erste Spalte, die zweite Zeile $(1, 4, 2)$ wird zweite Spalte:
   $A^T = \begin{pmatrix} 3 & 1\\ 0 & 4\\ -2 & 2 \end{pmatrix}$. Aus einer $2\times 3$-Matrix wird eine $3\times 2$-Matrix.
:::

### Matrix mal Vektor

Die Multiplikation ist **nicht** Eintrag für Eintrag festgelegt. Sie ist so gemacht, dass sie zu Gleichungssystemen
passt. Wir beginnen mit Matrix mal Vektor. Die linke Seite des Systems
$$\begin{aligned} 2x + 3y - z &= 4\\ x - 2y + 5z &= 1 \end{aligned}$$
soll das Produkt der Koeffizientenmatrix mit dem Vektor der Unbekannten sein:
$$\begin{pmatrix} 2 & 3 & -1\\ 1 & -2 & 5 \end{pmatrix}\begin{pmatrix} x\\ y\\ z \end{pmatrix} = \begin{pmatrix} 2x + 3y - z\\ x - 2y + 5z \end{pmatrix}.$$
Jeder Eintrag des Ergebnisses entsteht aus einer **Zeile der Matrix** und dem Vektor: Man multipliziert
entsprechende Einträge und addiert. So schreibt man jedes Gleichungssystem kurz als $A\vec x = \vec b$. Dabei ist $A$ die
Koeffizientenmatrix, $\vec x$ der Vektor der Unbekannten und $\vec b$ der Vektor der rechten Seiten.

:::beispiel[Ist ein Tripel eine Lösung? Mit Matrix mal Vektor prüfen]
Wir setzen $\vec x = (1, 2, 3)$ in die Matrixform des Systems ein:
$$\begin{pmatrix} 2 & 3 & -1\\ 1 & -2 & 5 \end{pmatrix}\begin{pmatrix} 1\\ 2\\ 3 \end{pmatrix} = \begin{pmatrix} 2\cdot 1 + 3\cdot 2 + (-1)\cdot 3\\ 1\cdot 1 + (-2)\cdot 2 + 5\cdot 3 \end{pmatrix} = \begin{pmatrix} 5\\ 12 \end{pmatrix}.$$
Verlangt ist aber $\vec b = (4, 1)$. Das Tripel $(1, 2, 3)$ ist also keine Lösung. Das Produkt $A\vec x$ ist genau die
Probe in allen Gleichungen auf einmal.
:::

### Matrix mal Matrix

Die Multiplikation zweier Matrizen macht dasselbe für **jede Spalte** der rechten Matrix.

:::definition[Matrixprodukt]
Es sei $A$ eine $m\times n$-Matrix und $B$ eine $n\times p$-Matrix. Das Produkt $C = A\cdot B$ ist die $m\times p$-Matrix mit
den Einträgen
$$c_{ij} = a_{i1}b_{1j} + a_{i2}b_{2j} + \dots + a_{in}b_{nj}.$$
In Worten: Der Eintrag $c_{ij}$ entsteht aus der **$i$-ten Zeile von $A$** und der **$j$-ten Spalte von $B$**. Man
multipliziert die Einträge paarweise und addiert. Das Produkt gibt es nur, wenn **$A$ so viele Spalten hat wie $B$
Zeilen**.
:::

:::beispiel[Ein Produkt Schritt für Schritt]
$$A = \begin{pmatrix} 1 & 0 & 2\\ -1 & 3 & 1 \end{pmatrix}\ (2\times 3), \qquad B = \begin{pmatrix} 2 & 1\\ 1 & -2\\ 0 & 4 \end{pmatrix}\ (3\times 2).$$
$A$ hat $3$ Spalten, $B$ hat $3$ Zeilen. Das Produkt existiert und hat das Format $2\times 2$.

- $c_{11}$, Zeile 1 mal Spalte 1: $1\cdot 2 + 0\cdot 1 + 2\cdot 0 = 2$.
- $c_{12}$, Zeile 1 mal Spalte 2: $1\cdot 1 + 0\cdot(-2) + 2\cdot 4 = 9$.
- $c_{21}$, Zeile 2 mal Spalte 1: $(-1)\cdot 2 + 3\cdot 1 + 1\cdot 0 = 1$.
- $c_{22}$, Zeile 2 mal Spalte 2: $(-1)\cdot 1 + 3\cdot(-2) + 1\cdot 4 = -3$.

$$AB = \begin{pmatrix} 2 & 9\\ 1 & -3 \end{pmatrix}.$$
Das Produkt in umgekehrter Reihenfolge existiert auch, denn $B$ hat $2$ Spalten und $A$ hat $2$ Zeilen. Es hat aber das
Format $3\times 3$:
$$BA = \begin{pmatrix} 1 & 3 & 5\\ 3 & -6 & 0\\ -4 & 12 & 4 \end{pmatrix}.$$
:::

:::merke[Formatregel und Rechenschema]
$$(m\times \boxed{n})\cdot(\boxed{n}\times p) = (m\times p)$$
Die inneren Zahlen müssen gleich sein. Die äußeren Zahlen geben das Format des Ergebnisses. Rechenschema: **Zeile mal
Spalte.** Fahre mit dem linken Zeigefinger die Zeile von $A$ entlang und mit dem rechten die Spalte von $B$ hinunter.
Multipliziere, was sich gegenübersteht, und addiere.
:::

```aufgabe
id: lm-check-format-produkt
titel: Welches Format hat das Produkt?
niveau: 1
art: check
angabe: |
  $A$ ist eine $3\times 2$-Matrix und $B$ eine $2\times 4$-Matrix. Welches Format hat $AB$?
teile:
  - typ: vektor
    namen: ["Zeilen", "Spalten"]
    loesung: ["3", "4"]
    fehler:
      - wert: ["2", "2"]
        meldung: |
          Die inneren Zahlen $2$ und $2$ müssen nur übereinstimmen. Das Format des Ergebnisses geben die **äußeren** Zahlen.
      - wert: ["4", "3"]
        meldung: |
          Zeilen kommen von der linken Matrix, Spalten von der rechten. $A$ hat $3$ Zeilen, $B$ hat $4$ Spalten.
hinweise:
  - 'Formatregel: $(m\times n)\cdot(n\times p) = (m\times p)$.'
loesung: |
  $(3\times \boxed{2})\cdot(\boxed{2}\times 4)$: Die inneren Zahlen stimmen überein, das Produkt existiert.
  ---
  Die äußeren Zahlen geben das Format: $AB$ ist eine $3\times 4$-Matrix.
```

### Rechengesetze und was nicht gilt

:::satz[Rechengesetze der Matrixmultiplikation]
Wenn die Formate passen, gilt:

- **Assoziativgesetz:** $(AB)C = A(BC)$. Man darf also Klammern weglassen.
- **Distributivgesetze:** $A(B + C) = AB + AC$ und $(A + B)C = AC + BC$.
- **Einheitsmatrix:** $AE = EA = A$ für jede quadratische Matrix $A$ passender Größe. $E$ spielt die Rolle der Zahl $1$.
- **Zahlen:** $r\,(AB) = (rA)B = A(rB)$.
- **Transponieren:** $(AB)^T = B^TA^T$. Die Reihenfolge dreht sich um.
:::

Nicht gilt dagegen das Kommutativgesetz.

:::achtung[Die Reihenfolge der Faktoren ist wichtig]
**Falsch:** „$AB$ und $BA$ sind dasselbe, wie bei Zahlen.“

**Richtig:** Im Allgemeinen ist $AB \neq BA$, selbst bei quadratischen Matrizen:
$$\begin{pmatrix} 1 & 2\\ 0 & 1 \end{pmatrix}\begin{pmatrix} 1 & 0\\ 3 & 1 \end{pmatrix} = \begin{pmatrix} 7 & 2\\ 3 & 1 \end{pmatrix}, \qquad
\begin{pmatrix} 1 & 0\\ 3 & 1 \end{pmatrix}\begin{pmatrix} 1 & 2\\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 2\\ 3 & 7 \end{pmatrix}.$$
Darum musst du beim Umformen von Matrixgleichungen immer sagen, ob du **von links** oder **von rechts** multiplizierst.
:::

:::achtung[Ein Produkt kann null sein, obwohl kein Faktor null ist]
**Falsch:** „Aus $AB = O$ folgt $A = O$ oder $B = O$, wie bei Zahlen.“

**Richtig:** Für Matrizen stimmt das nicht. Gegenbeispiel:
$$\begin{pmatrix} 1 & 1\\ 1 & 1 \end{pmatrix}\begin{pmatrix} 1 & -1\\ -1 & 1 \end{pmatrix} = \begin{pmatrix} 1 - 1 & -1 + 1\\ 1 - 1 & -1 + 1 \end{pmatrix} = \begin{pmatrix} 0 & 0\\ 0 & 0 \end{pmatrix}.$$
Keiner der beiden Faktoren ist die Nullmatrix, das Produkt aber schon.
:::

:::achtung[Nicht Eintrag für Eintrag multiplizieren]
**Falsch:** $\begin{pmatrix} 1 & 2\\ 3 & 4 \end{pmatrix}\cdot\begin{pmatrix} 2 & 0\\ 1 & 1 \end{pmatrix} = \begin{pmatrix} 2 & 0\\ 3 & 4 \end{pmatrix}$, indem man die Einträge an gleicher Stelle multipliziert.

**Richtig:** Zeile mal Spalte. Der erste Eintrag ist $1\cdot 2 + 2\cdot 1 = 4$, nicht $1\cdot 2 = 2$. Vollständig:
$\begin{pmatrix} 1\cdot 2 + 2\cdot 1 & 1\cdot 0 + 2\cdot 1\\ 3\cdot 2 + 4\cdot 1 & 3\cdot 0 + 4\cdot 1 \end{pmatrix} = \begin{pmatrix} 4 & 2\\ 10 & 4 \end{pmatrix}$.
:::

:::intuition
Eine Matrix beschreibt eine **Abbildung**: Sie nimmt einen Vektor und liefert einen neuen Vektor. $AB$ bedeutet „zuerst
$B$ anwenden, dann $A$“, wie bei verketteten Funktionen. Auch im Alltag ist „zuerst drehen, dann spiegeln“ etwas anderes
als „zuerst spiegeln, dann drehen“. Das ist der tiefere Grund, warum $AB$ und $BA$ verschieden sein können. Die Lektion
[3.7 Matrizen als Abbildungen](/lernen/mathe3/lgs-matrizen/matrizen-als-abbildungen-drehen-spiegeln-strecken-vertiefung)
zeigt das an Bildern.
:::

```reflexion
frage: Warum kann man eine $2\times 3$-Matrix nicht mit einer anderen $2\times 3$-Matrix multiplizieren? Erkläre es mit „Zeile mal Spalte“.
antwort: |
  Für jeden Eintrag des Produkts wird eine Zeile der linken Matrix mit einer Spalte der rechten Matrix verrechnet. Eine Zeile der
  linken Matrix hat $3$ Einträge. Eine Spalte der rechten Matrix hat aber nur $2$ Einträge. Man kann nicht paarweise multiplizieren,
  weil einem Eintrag der Partner fehlt. Darum muss die Anzahl der Spalten links gleich der Anzahl der Zeilen rechts sein.
```

### Übungen

```aufgabe
id: lm-matrix-linear
titel: Mit Matrizen rechnen wie mit Zahlen
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Für $A = \begin{pmatrix} 2 & -3\\ 1 & 4 \end{pmatrix}$ und $B = \begin{pmatrix} 0 & 1\\ -2 & 3 \end{pmatrix}$ berechne $3A - 2B$.
  Gib die Einträge zeilenweise an, also zuerst die erste Zeile von links nach rechts, dann die zweite.
teile:
  - typ: vektor
    label: '$3A - 2B$ zeilenweise'
    namen: ["c11", "c12", "c21", "c22"]
    loesung: ["3*2 - 2*0", "3*(-3) - 2*1", "3*1 - 2*(-2)", "3*4 - 2*3"]
    fehler:
      - wert: ["6", "-11", "-1", "6"]
        meldung: |
          Prüfe $c_{21}$: $3\cdot 1 - 2\cdot(-2) = 3 + 4$. Minus mal Minus ergibt Plus.
      - wert: ["6", "-7", "7", "6"]
        meldung: |
          Prüfe $c_{12}$: $3\cdot(-3) - 2\cdot 1 = -9 - 2$.
hinweise:
  - 'Rechne Eintrag für Eintrag: $c_{ij} = 3a_{ij} - 2b_{ij}$.'
loesung: |
  Ansatz: Vielfache und Summen von Matrizen rechnet man Eintrag für Eintrag.
  ---
  $3A = \begin{pmatrix} 6 & -9\\ 3 & 12 \end{pmatrix}$ und $2B = \begin{pmatrix} 0 & 2\\ -4 & 6 \end{pmatrix}$.
  ---
  $3A - 2B = \begin{pmatrix} 6 - 0 & -9 - 2\\ 3 + 4 & 12 - 6 \end{pmatrix} = \begin{pmatrix} 6 & -11\\ 7 & 6 \end{pmatrix}$.
```

```aufgabe
id: lm-format
titel: Welche Produkte existieren?
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  $A$ ist eine $3\times 2$-Matrix, $B$ eine $2\times 2$-Matrix und $\vec c$ ein Spaltenvektor mit $2$ Einträgen, also eine
  $2\times 1$-Matrix. Welche der folgenden Produkte sind definiert? Wähle alle passenden aus.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$AB$'
      - '$BA$'
      - '$B\vec c$'
      - '$A\vec c$'
      - '$\vec c A$'
      - '$\vec c^{\,T} B$'
    richtig: [0, 2, 3, 5]
    fehler:
      - wert: [0, 1, 2, 3, 5]
        meldung: |
          $BA$ hätte das Format $(2\times 2)(3\times 2)$. Die inneren Zahlen $2$ und $3$ sind verschieden.
      - wert: [0, 2, 3]
        meldung: |
          $\vec c^{\,T}$ ist ein Zeilenvektor, also $1\times 2$. Das Produkt $(1\times 2)(2\times 2)$ existiert und ist wieder ein Zeilenvektor.
      - wert: [0, 2, 3, 4, 5]
        meldung: |
          $\vec c A$ hätte das Format $(2\times 1)(3\times 2)$. Die inneren Zahlen $1$ und $3$ sind verschieden.
hinweise:
  - 'Formatregel: Die Spaltenzahl der linken Matrix muss gleich der Zeilenzahl der rechten sein.'
loesung: |
  Ansatz: Für jedes Produkt die Formate nebeneinanderschreiben und die inneren Zahlen vergleichen.
  ---
  $AB$: $(3\times 2)(2\times 2)$, existiert, Ergebnis $3\times 2$. $BA$: $(2\times 2)(3\times 2)$, $2 \neq 3$, existiert nicht.
  ---
  $B\vec c$: $(2\times 2)(2\times 1)$, Ergebnis $2\times 1$. $A\vec c$: $(3\times 2)(2\times 1)$, Ergebnis $3\times 1$.
  ---
  $\vec cA$: $(2\times 1)(3\times 2)$, existiert nicht. $\vec c^{\,T}B$: $(1\times 2)(2\times 2)$, Ergebnis $1\times 2$.
```

```aufgabe
id: lm-transponieren
titel: Eine Matrix transponieren
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Bestimme die Transponierte von $A = \begin{pmatrix} 1 & -2 & 0\\ 4 & 3 & -1 \end{pmatrix}$. Gib die Einträge von $A^T$ zeilenweise an.
teile:
  - typ: vektor
    label: '$A^T$ zeilenweise ($3\times 2$)'
    namen: ["c11", "c12", "c21", "c22", "c31", "c32"]
    loesung: ["1", "4", "-2", "3", "0", "-1"]
    fehler:
      - wert: ["1", "-2", "0", "4", "3", "-1"]
        meldung: |
          Das sind die Einträge von $A$ selbst. Beim Transponieren wird die erste **Zeile** von $A$ zur ersten **Spalte** von $A^T$.
          Die erste Zeile von $A^T$ besteht also aus den ersten Einträgen beider Zeilen von $A$.
hinweise:
  - 'Die erste Zeile $(1, -2, 0)$ von $A$ wird die erste Spalte von $A^T$.'
loesung: |
  Ansatz: Zeilen und Spalten vertauschen. Aus $2\times 3$ wird $3\times 2$.
  ---
  $A^T = \begin{pmatrix} 1 & 4\\ -2 & 3\\ 0 & -1 \end{pmatrix}$. Zeilenweise: $1, 4, -2, 3, 0, -1$.
```

```aufgabe
id: lm-matrixprodukt
titel: Matrixprodukt berechnen
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Berechne $AB$ für
  $$A = \begin{pmatrix} 1 & 2\\ -1 & 0\\ 3 & 1 \end{pmatrix}, \qquad B = \begin{pmatrix} 2 & -1\\ 1 & 4 \end{pmatrix}.$$
  Gib die Einträge zeilenweise an.
teile:
  - typ: vektor
    label: '$AB$ zeilenweise $(c_{11}, c_{12}, c_{21}, c_{22}, c_{31}, c_{32})$'
    namen: ["c11", "c12", "c21", "c22", "c31", "c32"]
    loesung: ["1*2 + 2*1", "1*(-1) + 2*4", "-1*2 + 0*1", "-1*(-1) + 0*4", "3*2 + 1*1", "3*(-1) + 1*4"]
    fehler:
      - wert: ["0", "9", "-2", "-1", "5", "7"]
        meldung: |
          Du hast Zeile mal **Zeile** gerechnet. Richtig ist Zeile von $A$ mal **Spalte** von $B$. Die erste Spalte von $B$
          ist $(2, 1)$, also $c_{11} = 1\cdot 2 + 2\cdot 1$.
      - wert: ["4", "7", "-2", "-1", "7", "1"]
        meldung: |
          Prüfe $c_{22}$: Zeile 2 von $A$ ist $(-1, 0)$, Spalte 2 von $B$ ist $(-1, 4)$. Also $(-1)\cdot(-1) + 0\cdot 4 = +1$.
hinweise:
  - '$AB$ hat das Format $(3\times 2)(2\times 2) = 3\times 2$.'
  - 'Eintrag $c_{ij}$: Zeile $i$ von $A$ mal Spalte $j$ von $B$, zum Beispiel $c_{12} = 1\cdot(-1) + 2\cdot 4$.'
gefuehrt:
  - text: 'Welches Format hat $AB$? Gib die Anzahl der Zeilen an.'
    teil:
      typ: zahl
      loesung: "3"
      fehler:
        - wert: "2"
          meldung: 'Die Zeilenzahl kommt von $A$, und $A$ hat $3$ Zeilen.'
    erklaerung: '$(3\times 2)(2\times 2) = 3\times 2$. Es gibt $3$ Zeilen und $2$ Spalten, also $6$ Einträge.'
  - text: 'Berechne $c_{11}$: Zeile 1 von $A$, also $(1, 2)$, mal Spalte 1 von $B$, also $(2, 1)$.'
    teil:
      typ: zahl
      loesung: "1*2 + 2*1"
      fehler:
        - wert: "2"
          meldung: 'Es sind zwei Produkte, die addiert werden: $1\cdot 2$ und $2\cdot 1$.'
    erklaerung: '$1\cdot 2 + 2\cdot 1 = 4$.'
  - text: 'Berechne $c_{12}$: Zeile 1 von $A$ mal Spalte 2 von $B$, also $(-1, 4)$.'
    teil:
      typ: zahl
      loesung: "1*(-1) + 2*4"
    erklaerung: '$-1 + 8 = 7$.'
  - text: 'Berechne $c_{32}$: Zeile 3 von $A$, also $(3, 1)$, mal Spalte 2 von $B$.'
    teil:
      typ: zahl
      loesung: "3*(-1) + 1*4"
      fehler:
        - wert: "-7"
          meldung: '$3\cdot(-1) = -3$ und $1\cdot 4 = +4$. Zusammen $-3 + 4$.'
    erklaerung: '$-3 + 4 = 1$. Die übrigen Einträge entstehen genauso.'
loesung: |
  Ansatz: Formatregel prüfen, dann jeden Eintrag als „Zeile mal Spalte“ berechnen.
  ---
  Format: $(3\times 2)(2\times 2) = 3\times 2$.
  ---
  Zeile 1: $c_{11} = 2 + 2 = 4$, $c_{12} = -1 + 8 = 7$. Zeile 2: $c_{21} = -2 + 0 = -2$, $c_{22} = 1 + 0 = 1$.
  ---
  Zeile 3: $c_{31} = 6 + 1 = 7$, $c_{32} = -3 + 4 = 1$.
  ---
  $$AB = \begin{pmatrix} 4 & 7\\ -2 & 1\\ 7 & 1 \end{pmatrix}$$
```

```aufgabe
id: lm-matrix-vektor
titel: Ein Gleichungssystem in Matrixform
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Das System $2x + y - z = 1$ und $x - 3y + 2z = 1$ wird als $A\vec x = \vec b$ geschrieben.

  a) Berechne $A\vec x$ für $\vec x = (1, 2, 3)$.

  b) Ist $(1, 2, 3)$ eine Lösung des Systems?
teile:
  - typ: vektor
    label: 'a) $A\vec x$'
    namen: ["1. Eintrag", "2. Eintrag"]
    loesung: ["2*1 + 1*2 - 1*3", "1*1 - 3*2 + 2*3"]
    fehler:
      - wert: ["7", "1"]
        meldung: |
          Prüfe das Vorzeichen beim dritten Summanden der ersten Zeile: $(-1)\cdot 3 = -3$.
      - wert: ["2", "-6"]
        meldung: |
          Jeder Eintrag ist eine Summe aus **drei** Produkten, eines für jede Unbekannte: $2\cdot 1 + 1\cdot 2 + (-1)\cdot 3$.
  - typ: auswahl
    label: 'b)'
    optionen: ['ja', 'nein']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Vergleiche $A\vec x$ mit $\vec b = (1, 1)$. Stimmen alle Einträge überein, ist das Tripel eine Lösung.
hinweise:
  - '$A = \begin{pmatrix} 2 & 1 & -1\\ 1 & -3 & 2 \end{pmatrix}$. Jede Zeile von $A$ wird mit dem Vektor verrechnet.'
  - 'Danach vergleichst du das Ergebnis mit der rechten Seite $\vec b = (1, 1)$.'
loesung: |
  Ansatz: $A\vec x$ ist die linke Seite aller Gleichungen auf einmal. Stimmt sie mit $\vec b$ überein, ist $\vec x$ eine Lösung.
  ---
  $A = \begin{pmatrix} 2 & 1 & -1\\ 1 & -3 & 2 \end{pmatrix}$, also $A\vec x = \begin{pmatrix} 2 + 2 - 3\\ 1 - 6 + 6 \end{pmatrix} = \begin{pmatrix} 1\\ 1 \end{pmatrix}$.
  ---
  Das ist genau $\vec b = (1, 1)$. Also ist $(1, 2, 3)$ eine Lösung des Systems.
```

```aufgabe
id: lm-nicht-kommutativ
titel: AB oder BA?
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  Berechne für $A = \begin{pmatrix} 0 & 1\\ 1 & 0 \end{pmatrix}$ und $B = \begin{pmatrix} 1 & 2\\ 3 & 4 \end{pmatrix}$ die Produkte $AB$ und
  $BA$. Was bewirkt die Multiplikation mit $A$ von links, was von rechts?
teile:
  - typ: vektor
    label: '$AB$ zeilenweise'
    namen: ["c11", "c12", "c21", "c22"]
    loesung: ["3", "4", "1", "2"]
    fehler:
      - wert: ["2", "1", "4", "3"]
        meldung: |
          Das ist $BA$. Bei $AB$ steht $A$ links: Zeilen von $A$ mal Spalten von $B$. Die erste Zeile von $A$ ist $(0, 1)$.
  - typ: vektor
    label: '$BA$ zeilenweise'
    namen: ["c11", "c12", "c21", "c22"]
    loesung: ["2", "1", "4", "3"]
    fehler:
      - wert: ["3", "4", "1", "2"]
        meldung: |
          Das ist $AB$. Bei $BA$ steht $B$ links: Zeilen von $B$ mal Spalten von $A$.
  - typ: text
    label: 'Was bewirkt $A$?'
    muster: |
      Von links multipliziert vertauscht $A$ die beiden **Zeilen** von $B$. Von rechts multipliziert vertauscht $A$ die beiden
      **Spalten** von $B$. Darum ist $AB \neq BA$: Die Multiplikation ist nicht kommutativ.
hinweise:
  - 'Zeile mal Spalte: $c_{11}$ von $AB$ ist $0\cdot 1 + 1\cdot 3$.'
  - 'Vergleiche $AB$ und $BA$ mit $B$. Was wurde vertauscht?'
loesung: |
  Ansatz: Beide Produkte nach „Zeile mal Spalte“ berechnen und mit $B$ vergleichen.
  ---
  $AB = \begin{pmatrix} 0\cdot 1 + 1\cdot 3 & 0\cdot 2 + 1\cdot 4\\ 1\cdot 1 + 0\cdot 3 & 1\cdot 2 + 0\cdot 4 \end{pmatrix} = \begin{pmatrix} 3 & 4\\ 1 & 2 \end{pmatrix}$. Die Zeilen von $B$ sind vertauscht.
  ---
  $BA = \begin{pmatrix} 1\cdot 0 + 2\cdot 1 & 1\cdot 1 + 2\cdot 0\\ 3\cdot 0 + 4\cdot 1 & 3\cdot 1 + 4\cdot 0 \end{pmatrix} = \begin{pmatrix} 2 & 1\\ 4 & 3 \end{pmatrix}$. Die Spalten von $B$ sind vertauscht.
  ---
  Ergebnis: $AB \neq BA$. Ob man von links oder von rechts multipliziert, macht einen echten Unterschied.
```

```aufgabe
id: lm-binom-matrix
titel: Gilt die binomische Formel für Matrizen?
niveau: 3
lernziel: 5
kompetenz: begruenden
angabe: |
  Es sei $A = \begin{pmatrix} 1 & 1\\ 0 & 1 \end{pmatrix}$ und $B = \begin{pmatrix} 1 & 0\\ 1 & 1 \end{pmatrix}$.

  a) Berechne $(A + B)^2$, also $(A + B)\cdot(A + B)$.

  b) Berechne $A^2 + 2AB + B^2$.

  c) Begründe, warum die Ergebnisse verschieden sind, und gib die richtige Formel für $(A + B)^2$ an.
teile:
  - typ: vektor
    label: 'a) $(A + B)^2$ zeilenweise'
    namen: ["c11", "c12", "c21", "c22"]
    loesung: ["5", "4", "4", "5"]
    fehler:
      - wert: ["4", "1", "1", "4"]
        meldung: |
          Du hast die Einträge einzeln quadriert. $(A + B)^2$ ist das Matrixprodukt $(A + B)(A + B)$ mit „Zeile mal Spalte“.
  - typ: vektor
    label: 'b) $A^2 + 2AB + B^2$ zeilenweise'
    namen: ["c11", "c12", "c21", "c22"]
    loesung: ["6", "4", "4", "4"]
    fehler:
      - wert: ["5", "4", "4", "5"]
        meldung: |
          Rechne die drei Summanden einzeln aus: $A^2 = \begin{pmatrix} 1 & 2\\ 0 & 1 \end{pmatrix}$, $AB = \begin{pmatrix} 2 & 1\\ 1 & 1 \end{pmatrix}$,
          $B^2 = \begin{pmatrix} 1 & 0\\ 2 & 1 \end{pmatrix}$. Dann $A^2 + 2AB + B^2$ addieren.
  - typ: text
    label: 'c) Begründung'
    muster: |
      Ausmultiplizieren mit dem Distributivgesetz ergibt $(A + B)(A + B) = A^2 + AB + BA + B^2$. Die binomische Formel fasst $AB + BA$
      zu $2AB$ zusammen. Das geht nur, wenn $AB = BA$ ist. Hier ist $AB = \begin{pmatrix} 2 & 1\\ 1 & 1 \end{pmatrix}$ und
      $BA = \begin{pmatrix} 1 & 1\\ 1 & 2 \end{pmatrix}$, also verschieden. Richtig ist $(A + B)^2 = A^2 + AB + BA + B^2$.
hinweise:
  - '$A + B = \begin{pmatrix} 2 & 1\\ 1 & 2 \end{pmatrix}$. Quadrieren heißt: diese Matrix mit sich selbst multiplizieren.'
  - 'Multipliziere $(A + B)(A + B)$ mit dem Distributivgesetz aus, ohne die Reihenfolge zu ändern. Vergleiche $AB$ und $BA$.'
loesung: |
  Ansatz: Quadrieren heißt mit sich selbst multiplizieren. Die binomische Formel benutzt $AB = BA$. Das prüfen wir.
  ---
  a) $A + B = \begin{pmatrix} 2 & 1\\ 1 & 2 \end{pmatrix}$, also $(A + B)^2 = \begin{pmatrix} 4 + 1 & 2 + 2\\ 2 + 2 & 1 + 4 \end{pmatrix} = \begin{pmatrix} 5 & 4\\ 4 & 5 \end{pmatrix}$.
  ---
  b) $A^2 = \begin{pmatrix} 1 & 2\\ 0 & 1 \end{pmatrix}$, $AB = \begin{pmatrix} 2 & 1\\ 1 & 1 \end{pmatrix}$, $B^2 = \begin{pmatrix} 1 & 0\\ 2 & 1 \end{pmatrix}$. Zusammen: $\begin{pmatrix} 1 + 4 + 1 & 2 + 2 + 0\\ 0 + 2 + 2 & 1 + 2 + 1 \end{pmatrix} = \begin{pmatrix} 6 & 4\\ 4 & 4 \end{pmatrix}$.
  ---
  c) Ausmultiplizieren: $(A + B)(A + B) = A^2 + AB + BA + B^2$. Hier ist $BA = \begin{pmatrix} 1 & 1\\ 1 & 2 \end{pmatrix} \neq AB$. Darum darf man $AB + BA$ nicht zu $2AB$ zusammenfassen.
  ---
  Kontrolle: $A^2 + AB + BA + B^2 = \begin{pmatrix} 1 + 2 + 1 + 1 & 2 + 1 + 1 + 0\\ 0 + 1 + 1 + 2 & 1 + 1 + 2 + 1 \end{pmatrix} = \begin{pmatrix} 5 & 4\\ 4 & 5 \end{pmatrix}$. Das stimmt mit a) überein.
```

## Matrizen als Abbildungen: drehen, spiegeln, strecken (Vertiefung)

```aufgabe
id: lm-check-erste-spalte
titel: Matrix mal Einheitsvektor
niveau: 1
art: check
angabe: |
  Berechne $\begin{pmatrix} 2 & 1\\ 0 & 3 \end{pmatrix}\begin{pmatrix} 1\\ 0 \end{pmatrix}$.
  Herkunft: [3.6 Matrizen und ihre Rechenregeln](/lernen/mathe3/lgs-matrizen/matrizen-und-ihre-rechenregeln).
teile:
  - typ: vektor
    namen: ["1. Eintrag", "2. Eintrag"]
    loesung: ["2", "0"]
    fehler:
      - wert: ["2", "1"]
        meldung: |
          Das ist die erste **Zeile** der Matrix. Rechne Zeile mal Vektor: Zeile 2 ergibt $0\cdot 1 + 3\cdot 0 = 0$.
      - wert: ["3", "3"]
        meldung: |
          Jede Zeile wird mit dem Vektor verrechnet, nicht aufsummiert. Zeile 1: $2\cdot 1 + 1\cdot 0 = 2$.
hinweise:
  - 'Zeile mal Vektor: $2\cdot 1 + 1\cdot 0$ und $0\cdot 1 + 3\cdot 0$.'
loesung: |
  Zeile 1: $2\cdot 1 + 1\cdot 0 = 2$. Zeile 2: $0\cdot 1 + 3\cdot 0 = 0$.
  ---
  Das Ergebnis $(2, 0)$ ist genau die **erste Spalte** der Matrix. Das ist kein Zufall, wie diese Lektion zeigt.
```

Diese Lektion geht über den Prüfungsstoff der Studienberechtigungsprüfung hinaus. Sie gehört zum Wahlbereich des
österreichischen Schullehrplans und ist im Informatikstudium und in der Computergrafik zentral. Sie zeigt außerdem
anschaulich, **warum** die Matrixmultiplikation nicht kommutativ ist.

### Eine Matrix bewegt Punkte

Eine $2\times 2$-Matrix $A$ macht aus jedem Punkt $P(x \mid y)$ der Ebene einen neuen Punkt $P'$, den **Bildpunkt**. Man
schreibt den Punkt als Spaltenvektor und rechnet $A\cdot\begin{pmatrix} x\\ y \end{pmatrix}$. So eine Zuordnung heißt
**Abbildung**. Wendet man die Matrix auf alle Punkte einer Figur an, bewegt sich die ganze Figur.

:::beispiel[Eine Streckung]
Die Matrix $S = \begin{pmatrix} 2 & 0\\ 0 & 0{,}5 \end{pmatrix}$ wird auf die Ecken des Einheitsquadrats angewendet.

1. $(0 \mid 0)$ bleibt $(0 \mid 0)$, denn eine Matrix bildet den Nullpunkt immer auf sich selbst ab.
2. $(1 \mid 0)$ wird zu $(2\cdot 1 + 0\cdot 0 \mid 0\cdot 1 + 0{,}5\cdot 0) = (2 \mid 0)$.
3. $(1 \mid 1)$ wird zu $(2 \mid 0{,}5)$, und $(0 \mid 1)$ wird zu $(0 \mid 0{,}5)$.

Das Quadrat wird zu einem Rechteck. Waagrecht wird alles auf das Doppelte gestreckt, senkrecht auf die Hälfte gestaucht.
:::

```plot
x: [-0.5, 2.5]
y: [-0.5, 1.5]
gleich: true
strecken:
  - { von: [0, 0], nach: [1, 0], gestrichelt: true, farbe: 4 }
  - { von: [1, 0], nach: [1, 1], gestrichelt: true, farbe: 4 }
  - { von: [1, 1], nach: [0, 1], gestrichelt: true, farbe: 4 }
  - { von: [0, 1], nach: [0, 0], gestrichelt: true, farbe: 4 }
  - { von: [0, 0], nach: [2, 0], farbe: 0 }
  - { von: [2, 0], nach: [2, 0.5], farbe: 0 }
  - { von: [2, 0.5], nach: [0, 0.5], farbe: 0 }
  - { von: [0, 0.5], nach: [0, 0], farbe: 0 }
punkte:
  - { x: 1, y: 1, label: "(1|1)", farbe: 4 }
  - { x: 2, y: 0.5, label: "(2|0,5)", farbe: 0 }
beschriftung: Die Streckungsmatrix mit den Diagonaleinträgen 2 und 0,5 macht aus dem gestrichelten Einheitsquadrat das blaue Rechteck mit Breite 2 und Höhe 0,5. Die Ecke (1|1) wandert nach (2|0,5).
```

Die Check-Frage am Anfang hat schon eine wichtige Regel gezeigt. Sie gilt für jede Matrix.

:::satz[Die Spalten sind die Bilder der Einheitsvektoren]
Es sei $A = \begin{pmatrix} a & b\\ c & d \end{pmatrix}$. Dann gilt
$$A\begin{pmatrix} 1\\ 0 \end{pmatrix} = \begin{pmatrix} a\\ c \end{pmatrix}, \qquad A\begin{pmatrix} 0\\ 1 \end{pmatrix} = \begin{pmatrix} b\\ d \end{pmatrix}.$$
Die erste Spalte ist das Bild von $(1, 0)$, die zweite Spalte das Bild von $(0, 1)$. Die Vektoren $(1, 0)$ und
$(0, 1)$ heißen **Einheitsvektoren**.
:::

Der Grund steht in der Rechnung: Bei $A\cdot(1, 0)$ wird jede Zeile mit $1$ und $0$ multipliziert. Übrig bleibt der
erste Eintrag jeder Zeile, also die erste Spalte. Daraus folgt ein praktisches Rezept: **Um die Matrix einer Abbildung
zu finden, bestimmt man die Bilder von $(1, 0)$ und $(0, 1)$ und schreibt sie als Spalten nebeneinander.**

### Spiegeln und drehen

Mit dem Rezept findet man die Matrizen der wichtigsten Abbildungen.

- **Spiegelung an der $x$-Achse:** $(1, 0)$ bleibt, $(0, 1)$ wird zu $(0, -1)$. Matrix $\begin{pmatrix} 1 & 0\\ 0 & -1 \end{pmatrix}$.
- **Spiegelung an der $y$-Achse:** $(1, 0)$ wird zu $(-1, 0)$, $(0, 1)$ bleibt. Matrix $\begin{pmatrix} -1 & 0\\ 0 & 1 \end{pmatrix}$.
- **Spiegelung an der Geraden $y = x$:** Die beiden Einheitsvektoren tauschen. Matrix $\begin{pmatrix} 0 & 1\\ 1 & 0 \end{pmatrix}$.
- **Drehung um $90°$** gegen den Uhrzeigersinn um den Nullpunkt: $(1, 0)$ wird zu $(0, 1)$, und $(0, 1)$ wird zu $(-1, 0)$.
  Matrix $\begin{pmatrix} 0 & -1\\ 1 & 0 \end{pmatrix}$.

Allgemein dreht man um den Winkel $\varphi$ (griechisch „phi“) gegen den Uhrzeigersinn. Der Punkt $(1, 0)$ landet
dann auf dem Einheitskreis beim Winkel $\varphi$, also bei $(\cos\varphi, \sin\varphi)$. Der Punkt $(0, 1)$ landet bei
$(-\sin\varphi, \cos\varphi)$. Der Grund: $(0, 1)$ liegt auf dem Einheitskreis beim Winkel $90°$ und landet beim Winkel
$\varphi + 90°$. Dort liegt der Punkt $(\cos(\varphi + 90°), \sin(\varphi + 90°)) = (-\sin\varphi, \cos\varphi)$. Sinus und Kosinus am Einheitskreis kennst du aus
[Kapitel 5, „Der Einheitskreis“](/lernen/mathe3/trigonometrie/der-einheitskreis). Also lautet die **Drehmatrix**
$$D_\varphi = \begin{pmatrix} \cos\varphi & -\sin\varphi\\ \sin\varphi & \cos\varphi \end{pmatrix}.$$
Für $\varphi = 90°$ ist $\cos 90° = 0$ und $\sin 90° = 1$. Es ergibt sich genau die Matrix aus der Liste.

:::beispiel[Ein Dreieck um 90° drehen]
Das Dreieck mit den Ecken $A(1 \mid 0)$, $B(3 \mid 0)$ und $C(1 \mid 2)$ wird mit $D = \begin{pmatrix} 0 & -1\\ 1 & 0 \end{pmatrix}$
gedreht.

1. $A' = D\cdot(1, 0) = (0\cdot 1 - 1\cdot 0,\ 1\cdot 1 + 0\cdot 0) = (0, 1)$.
2. $B' = D\cdot(3, 0) = (0, 3)$.
3. $C' = D\cdot(1, 2) = (0\cdot 1 - 1\cdot 2,\ 1\cdot 1 + 0\cdot 2) = (-2, 1)$.

Allgemein macht $D$ aus $(x, y)$ den Punkt $(-y, x)$. Das Bild zeigt: Das Dreieck hat sich um eine Vierteldrehung
gegen den Uhrzeigersinn um den Nullpunkt gedreht. Form und Größe bleiben gleich.
:::

```plot
x: [-3, 4]
y: [-1, 4]
gleich: true
strecken:
  - { von: [1, 0], nach: [3, 0], farbe: 4 }
  - { von: [3, 0], nach: [1, 2], farbe: 4 }
  - { von: [1, 2], nach: [1, 0], farbe: 4 }
  - { von: [0, 1], nach: [0, 3], farbe: 0 }
  - { von: [0, 3], nach: [-2, 1], farbe: 0 }
  - { von: [-2, 1], nach: [0, 1], farbe: 0 }
punkte:
  - { x: 1, y: 0, label: "A", farbe: 4 }
  - { x: 3, y: 0, label: "B", farbe: 4 }
  - { x: 1, y: 2, label: "C", farbe: 4 }
  - { x: 0, y: 1, label: "A'", farbe: 0 }
  - { x: 0, y: 3, label: "B'", farbe: 0 }
  - { x: -2, y: 1, label: "C'", farbe: 0 }
beschriftung: Das ockerfarbene Dreieck ABC wird mit der Drehmatrix für 90° auf das blaue Dreieck A'B'C' abgebildet. Jeder Punkt (x|y) wandert nach (−y|x), also eine Vierteldrehung gegen den Uhrzeigersinn um den Nullpunkt.
```

:::achtung[Das Vorzeichen in der Drehmatrix]
**Falsch:** Jemand schreibt die Drehmatrix als $\begin{pmatrix} \cos\varphi & \sin\varphi\\ -\sin\varphi & \cos\varphi \end{pmatrix}$.
Für $\varphi = 90°$ wird daraus $\begin{pmatrix} 0 & 1\\ -1 & 0 \end{pmatrix}$. Der Punkt $(1, 0)$ landet bei $(0, -1)$, also unten statt oben.
Diese Matrix dreht **im** Uhrzeigersinn.

**Richtig:** Das Minus steht **oben rechts**: $D_\varphi = \begin{pmatrix} \cos\varphi & -\sin\varphi\\ \sin\varphi & \cos\varphi \end{pmatrix}$.
Kontrolle mit dem Rezept: Die erste Spalte muss das Bild von $(1, 0)$ sein. Bei einer kleinen Drehung gegen den
Uhrzeigersinn liegt es **oberhalb** der $x$-Achse. Seine zweite Koordinate $\sin\varphi$ ist also positiv.
:::

### Hintereinander ausführen heißt multiplizieren

Führt man zuerst die Abbildung $B$ und danach die Abbildung $A$ aus, wird aus $\vec v$ zuerst $B\vec v$ und dann $A(B\vec v)$.
Nach dem Assoziativgesetz ist das $(AB)\vec v$. **Die Verkettung „zuerst $B$, dann $A$“ hat also die Matrix $AB$.** Die
zuerst ausgeführte Abbildung steht rechts, direkt neben dem Vektor.

:::beispiel[Drehen und Spiegeln in zwei Reihenfolgen]
Es sei $S = \begin{pmatrix} 1 & 0\\ 0 & -1 \end{pmatrix}$ die Spiegelung an der $x$-Achse und $D = \begin{pmatrix} 0 & -1\\ 1 & 0 \end{pmatrix}$ die
Drehung um $90°$.

1. **Zuerst spiegeln, dann drehen:** $D\cdot S = \begin{pmatrix} 0\cdot 1 + (-1)\cdot 0 & 0\cdot 0 + (-1)(-1)\\ 1\cdot 1 + 0\cdot 0 & 1\cdot 0 + 0\cdot(-1) \end{pmatrix} = \begin{pmatrix} 0 & 1\\ 1 & 0 \end{pmatrix}$.
   Das ist die Spiegelung an der Geraden $y = x$.
2. **Zuerst drehen, dann spiegeln:** $S\cdot D = \begin{pmatrix} 0 & -1\\ -1 & 0 \end{pmatrix}$. Das ist die Spiegelung an der Geraden $y = -x$.
3. **Probe mit dem Punkt $(1, 2)$:** $DS$ macht daraus $(2, 1)$, $SD$ macht daraus $(-2, -1)$.

Die beiden Reihenfolgen ergeben verschiedene Abbildungen. Das ist die anschauliche Erklärung dafür, dass $DS \neq SD$ ist.
:::

:::achtung[Die Reihenfolge beim Verketten]
**Falsch:** „Zuerst spiegeln, dann drehen“ wird als $S\cdot D$ geschrieben, weil man von links nach rechts liest. Für den
Punkt $(1, 2)$ ergibt sich dann $(-2, -1)$.

**Richtig:** Die zuerst ausgeführte Abbildung steht **rechts**, direkt beim Vektor: $D\cdot S\cdot\vec v$. Rechne zur
Kontrolle schrittweise: Spiegeln macht aus $(1, 2)$ den Punkt $(1, -2)$. Drehen macht daraus $(2, 1)$.
:::

Eine Matrix verändert im Allgemeinen auch Flächeninhalte. Die Streckung im ersten Beispiel ändert die Fläche zufällig
nicht: Aus dem Quadrat mit Fläche $1$ wird ein Rechteck mit Fläche $2\cdot 0{,}5 = 1$. Die Matrix
$\begin{pmatrix} 2 & 0\\ 0 & 3 \end{pmatrix}$ dagegen macht daraus ein Rechteck mit Fläche $2\cdot 3 = 6$. Um welchen
Faktor sich Flächen ändern, verrät die **Determinante**
aus der Lektion [3.9 Determinanten](/lernen/mathe3/lgs-matrizen/determinanten).

```reflexion
frage: Warum kennt man eine Abbildungsmatrix schon vollständig, wenn man weiß, wohin $(1, 0)$ und $(0, 1)$ abgebildet werden?
antwort: |
  Jeder Vektor $(x, y)$ lässt sich als $x\cdot(1, 0) + y\cdot(0, 1)$ schreiben. Eine Matrix verträgt sich mit Summen und Vielfachen:
  $A(x\vec e_1 + y\vec e_2) = x\,A\vec e_1 + y\,A\vec e_2$. Kennt man also die Bilder $A\vec e_1$ und $A\vec e_2$, so kennt man das Bild
  jedes Vektors. Rechnerisch sind diese beiden Bilder genau die Spalten der Matrix.
```

### Übungen

```aufgabe
id: lm-abb-bild
titel: Einen Bildpunkt berechnen
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Die Matrix $A = \begin{pmatrix} 2 & 1\\ 0 & 3 \end{pmatrix}$ bildet den Punkt $P(3 \mid -1)$ ab. Berechne den Bildpunkt $P'$.
teile:
  - typ: vektor
    label: "Bildpunkt $P'$"
    namen: ["x", "y"]
    loesung: ["2*3 + 1*(-1)", "0*3 + 3*(-1)"]
    fehler:
      - wert: ["6", "-3"]
        meldung: |
          Du hast nur die Diagonaleinträge verwendet. Jede Zeile wird ganz mit dem Vektor verrechnet: $2\cdot 3 + 1\cdot(-1)$.
      - wert: ["7", "-3"]
        meldung: |
          Prüfe das Vorzeichen: $1\cdot(-1) = -1$, also $6 - 1$.
hinweise:
  - 'Zeile mal Vektor: erste Koordinate $2\cdot 3 + 1\cdot(-1)$.'
loesung: |
  Ansatz: Den Punkt als Spaltenvektor schreiben und mit der Matrix multiplizieren.
  ---
  $A\begin{pmatrix} 3\\ -1 \end{pmatrix} = \begin{pmatrix} 6 - 1\\ 0 - 3 \end{pmatrix} = \begin{pmatrix} 5\\ -3 \end{pmatrix}$. Der Bildpunkt ist $P'(5 \mid -3)$.
```

```aufgabe
id: lm-abb-spiegel-erkennen
titel: Welche Matrix spiegelt?
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Welche Matrix beschreibt die Spiegelung an der $y$-Achse?
teile:
  - typ: auswahl
    optionen:
      - '$\begin{pmatrix} -1 & 0\\ 0 & 1 \end{pmatrix}$'
      - '$\begin{pmatrix} 1 & 0\\ 0 & -1 \end{pmatrix}$'
      - '$\begin{pmatrix} 0 & 1\\ 1 & 0 \end{pmatrix}$'
      - '$\begin{pmatrix} -1 & 0\\ 0 & -1 \end{pmatrix}$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Diese Matrix lässt $(1, 0)$ fest und macht aus $(0, 1)$ den Punkt $(0, -1)$. Das ist die Spiegelung an der $x$-Achse.
      - wert: 2
        meldung: |
          Diese Matrix vertauscht die Koordinaten. Das ist die Spiegelung an der Geraden $y = x$.
      - wert: 3
        meldung: |
          Diese Matrix dreht beide Vorzeichen um. Das ist die Spiegelung am Nullpunkt, also eine Drehung um $180°$.
hinweise:
  - 'Bei der Spiegelung an der $y$-Achse wechselt nur die $x$-Koordinate ihr Vorzeichen. Wohin gehen $(1, 0)$ und $(0, 1)$?'
loesung: |
  Ansatz: Die Spalten der Matrix sind die Bilder von $(1, 0)$ und $(0, 1)$.
  ---
  An der $y$-Achse gespiegelt wird $(1, 0)$ zu $(-1, 0)$, und $(0, 1)$ bleibt, weil der Punkt auf der Achse liegt.
  ---
  Die Matrix ist $\begin{pmatrix} -1 & 0\\ 0 & 1 \end{pmatrix}$. Sie macht aus $(x, y)$ den Punkt $(-x, y)$.
```

```aufgabe
id: lm-abb-drehung
titel: Um 60 Grad drehen
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Der Punkt $P(2 \mid 0)$ wird um $60°$ gegen den Uhrzeigersinn um den Nullpunkt gedreht. Berechne den Bildpunkt exakt oder auf drei
  Nachkommastellen gerundet.
teile:
  - typ: vektor
    label: 'Bildpunkt'
    namen: ["x", "y"]
    loesung: ["2*cos(inRad(60))", "2*sin(inRad(60))"]
    fehler:
      - wert: ["sqrt(3)", "1"]
        meldung: |
          Sinus und Kosinus sind vertauscht. Die erste Koordinate ist $2\cos 60° = 2\cdot\frac12$.
      - wert: ["1", "-sqrt(3)"]
        meldung: |
          Das wäre eine Drehung **im** Uhrzeigersinn. Gegen den Uhrzeigersinn landet der Punkt oberhalb der $x$-Achse.
hinweise:
  - 'Drehmatrix: $\begin{pmatrix} \cos 60° & -\sin 60°\\ \sin 60° & \cos 60° \end{pmatrix}$ mit $\cos 60° = \frac12$ und $\sin 60° = \frac{\sqrt3}{2}$.'
  - 'Weil die zweite Koordinate von $P$ null ist, zählt nur die erste Spalte der Matrix, mal $2$.'
loesung: |
  Ansatz: Drehung um $\varphi$ gegen den Uhrzeigersinn mit der Drehmatrix $D_\varphi$.
  ---
  $D_{60°} = \begin{pmatrix} \frac12 & -\frac{\sqrt3}{2}\\ \frac{\sqrt3}{2} & \frac12 \end{pmatrix}$.
  ---
  $D_{60°}\begin{pmatrix} 2\\ 0 \end{pmatrix} = \begin{pmatrix} 2\cdot\frac12\\ 2\cdot\frac{\sqrt3}{2} \end{pmatrix} = \begin{pmatrix} 1\\ \sqrt3 \end{pmatrix} \approx \begin{pmatrix} 1\\ 1{,}732 \end{pmatrix}$.
  ---
  Kontrolle: Der Abstand zum Nullpunkt bleibt $\sqrt{1 + 3} = 2$, wie es bei einer Drehung sein muss.
```

```aufgabe
id: lm-abb-verkettung
titel: Zwei Abbildungen hintereinander
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Ein Punkt wird **zuerst** an der $x$-Achse gespiegelt, $S = \begin{pmatrix} 1 & 0\\ 0 & -1 \end{pmatrix}$, und **danach** um $180°$ gedreht,
  $D = \begin{pmatrix} -1 & 0\\ 0 & -1 \end{pmatrix}$. Bestimme die Matrix der Verkettung und gib sie zeilenweise an. Welche einfache Abbildung ist das?
teile:
  - typ: vektor
    label: 'Matrix der Verkettung, zeilenweise'
    namen: ["c11", "c12", "c21", "c22"]
    loesung: ["-1", "0", "0", "1"]
    fehler:
      - wert: ["1", "0", "0", "-1"]
        meldung: |
          Das ist nur die Spiegelung $S$. Die Verkettung ist das Produkt $D\cdot S$.
  - typ: auswahl
    label: 'Die Verkettung ist'
    optionen:
      - 'die Spiegelung an der $y$-Achse'
      - 'die Spiegelung an der $x$-Achse'
      - 'die Drehung um $90°$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Prüfe mit dem Punkt $(1, 0)$: Spiegeln lässt ihn fest, Drehen um $180°$ macht $(-1, 0)$ daraus. Das passt nicht zur Spiegelung an der $x$-Achse.
      - wert: 2
        meldung: |
          Eine Drehung um $90°$ macht aus $(1, 0)$ den Punkt $(0, 1)$. Die Verkettung macht aber $(-1, 0)$ daraus.
hinweise:
  - 'Die zuerst ausgeführte Abbildung steht rechts: Gesucht ist $D\cdot S$.'
  - 'Rechne $D\cdot S$ mit Zeile mal Spalte und vergleiche das Ergebnis mit den Spiegelungsmatrizen.'
gefuehrt:
  - text: 'Welche Matrix steht rechts im Produkt, also beim Vektor?'
    teil:
      typ: auswahl
      optionen: ['$S$', '$D$']
      richtig: [0]
    erklaerung: 'Zuerst wird gespiegelt. Die zuerst ausgeführte Abbildung steht beim Vektor: $D\cdot S\cdot\vec v$.'
  - text: 'Berechne den Eintrag oben links von $D\cdot S$: Zeile 1 von $D$ mal Spalte 1 von $S$.'
    teil:
      typ: zahl
      loesung: "(-1)*1 + 0*0"
    erklaerung: '$(-1)\cdot 1 + 0\cdot 0 = -1$.'
  - text: 'Berechne den Eintrag unten rechts: Zeile 2 von $D$ mal Spalte 2 von $S$.'
    teil:
      typ: zahl
      loesung: "0*0 + (-1)*(-1)"
      fehler:
        - wert: "-1"
          meldung: 'Minus mal Minus: $(-1)\cdot(-1) = +1$.'
    erklaerung: '$0 + 1 = 1$. Die anderen beiden Einträge sind $0$. Also $D\cdot S = \begin{pmatrix} -1 & 0\\ 0 & 1 \end{pmatrix}$.'
loesung: |
  Ansatz: „Zuerst $S$, dann $D$“ hat die Matrix $D\cdot S$. Die zuerst ausgeführte Abbildung steht rechts.
  ---
  $D\cdot S = \begin{pmatrix} -1\cdot 1 + 0\cdot 0 & -1\cdot 0 + 0\cdot(-1)\\ 0\cdot 1 + (-1)\cdot 0 & 0\cdot 0 + (-1)(-1) \end{pmatrix} = \begin{pmatrix} -1 & 0\\ 0 & 1 \end{pmatrix}$.
  ---
  Diese Matrix macht aus $(x, y)$ den Punkt $(-x, y)$. Das ist die Spiegelung an der $y$-Achse.
  ---
  Probe mit $(2, 3)$: Spiegeln an der $x$-Achse ergibt $(2, -3)$, Drehen um $180°$ ergibt $(-2, 3)$. Die Spiegelung an der $y$-Achse liefert ebenfalls $(-2, 3)$.
```

```aufgabe
id: lm-abb-spalten
titel: Eine Matrix aus zwei Bildern bauen
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Eine Abbildung bildet $(1, 0)$ auf $(3, 1)$ und $(0, 1)$ auf $(-1, 2)$ ab.

  a) Gib ihre Matrix zeilenweise an.

  b) Berechne das Bild des Punktes $(2 \mid 3)$.
teile:
  - typ: vektor
    label: 'a) Matrix zeilenweise'
    namen: ["a11", "a12", "a21", "a22"]
    loesung: ["3", "-1", "1", "2"]
    fehler:
      - wert: ["3", "1", "-1", "2"]
        meldung: |
          Die Bilder gehören in die **Spalten**, nicht in die Zeilen. Die erste Spalte ist $(3, 1)$, also steht oben links $3$ und unten links $1$.
  - typ: vektor
    label: 'b) Bild von $(2 \mid 3)$'
    namen: ["x", "y"]
    loesung: ["3*2 - 1*3", "1*2 + 2*3"]
    fehler:
      - wert: ["9", "4"]
        meldung: |
          Das Ergebnis passt zur Matrix mit vertauschten Zeilen und Spalten. Prüfe zuerst Teil a).
hinweise:
  - 'Die Spalten der Matrix sind die Bilder von $(1, 0)$ und $(0, 1)$.'
  - 'Für b): $(2, 3) = 2\cdot(1, 0) + 3\cdot(0, 1)$, also ist das Bild $2\cdot(3, 1) + 3\cdot(-1, 2)$.'
loesung: |
  Ansatz: Die Bilder der Einheitsvektoren sind die Spalten der Matrix.
  ---
  a) $A = \begin{pmatrix} 3 & -1\\ 1 & 2 \end{pmatrix}$.
  ---
  b) $A\begin{pmatrix} 2\\ 3 \end{pmatrix} = \begin{pmatrix} 6 - 3\\ 2 + 6 \end{pmatrix} = \begin{pmatrix} 3\\ 8 \end{pmatrix}$. Kontrolle: $2\cdot(3, 1) + 3\cdot(-1, 2) = (6 - 3,\ 2 + 6) = (3, 8)$.
```

```aufgabe
id: lm-abb-zweimal-drehen
titel: Zweimal um 90 Grad drehen
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  Es sei $D = \begin{pmatrix} 0 & -1\\ 1 & 0 \end{pmatrix}$ die Drehung um $90°$.

  a) Berechne $D^2 = D\cdot D$ und gib die Einträge zeilenweise an.

  b) Welche Abbildung beschreibt $D^2$, und warum ist das anschaulich klar?
teile:
  - typ: vektor
    label: 'a) $D^2$ zeilenweise'
    namen: ["c11", "c12", "c21", "c22"]
    loesung: ["-1", "0", "0", "-1"]
    fehler:
      - wert: ["0", "1", "1", "0"]
        meldung: |
          Du hast die Einträge einzeln quadriert. $D^2$ ist das Matrixprodukt $D\cdot D$, Zeile mal Spalte. Der Eintrag oben links ist
          $0\cdot 0 + (-1)\cdot 1$.
  - typ: auswahl
    label: 'b) $D^2$ ist'
    optionen:
      - 'die Drehung um $180°$, also die Spiegelung am Nullpunkt'
      - 'die Spiegelung an der Geraden $y = x$'
      - 'die identische Abbildung, die nichts verändert'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Die Spiegelung an $y = x$ hat die Matrix $\begin{pmatrix} 0 & 1\\ 1 & 0 \end{pmatrix}$. Vergleiche mit deinem Ergebnis aus a).
      - wert: 2
        meldung: |
          Nichts verändern würde die Einheitsmatrix $E$. Zwei Vierteldrehungen ergeben aber eine halbe Drehung.
hinweise:
  - 'Zeile mal Spalte: $c_{11} = 0\cdot 0 + (-1)\cdot 1$.'
  - 'Zwei Vierteldrehungen hintereinander ergeben welche Drehung?'
loesung: |
  Ansatz: Zweimal dieselbe Abbildung ausführen heißt, die Matrix mit sich selbst multiplizieren.
  ---
  a) $D^2 = \begin{pmatrix} 0\cdot 0 + (-1)\cdot 1 & 0\cdot(-1) + (-1)\cdot 0\\ 1\cdot 0 + 0\cdot 1 & 1\cdot(-1) + 0\cdot 0 \end{pmatrix} = \begin{pmatrix} -1 & 0\\ 0 & -1 \end{pmatrix}$.
  ---
  b) Diese Matrix macht aus $(x, y)$ den Punkt $(-x, -y)$. Das ist die Drehung um $180°$, gleichbedeutend mit der Spiegelung am Nullpunkt.
  ---
  Anschaulich: Zwei Vierteldrehungen ergeben eine halbe Drehung. Kontrolle mit der Drehmatrix: $\cos 180° = -1$ und $\sin 180° = 0$ ergeben genau $D^2$.
```

```aufgabe
id: lm-abb-bestimmen
titel: Eine Matrix aus zwei Punktepaaren bestimmen
niveau: 3
lernziel: 5
kompetenz: modellieren
angabe: |
  Gesucht ist die Matrix $A = \begin{pmatrix} a & b\\ c & d \end{pmatrix}$, die $(1, 1)$ auf $(3, 1)$ und $(1, -1)$ auf $(1, 3)$ abbildet.

  a) Stelle für $a$ und $b$ ein Gleichungssystem auf und löse es. Verfahre ebenso für $c$ und $d$.

  b) Gib $A$ zeilenweise an.
teile:
  - typ: vektor
    label: 'b) $A$ zeilenweise'
    namen: ["a", "b", "c", "d"]
    loesung: ["2", "1", "2", "-1"]
    fehler:
      - wert: ["3", "1", "1", "3"]
        meldung: |
          Die Bilder von $(1, 1)$ und $(1, -1)$ sind nicht die Spalten der Matrix. Nur die Bilder von $(1, 0)$ und $(0, 1)$ sind Spalten.
          Stelle Gleichungen auf: $A\cdot(1, 1) = (a + b,\ c + d)$.
      - wert: ["2", "1", "-1", "2"]
        meldung: |
          $a$ und $b$ stimmen. Für die zweite Zeile gilt $c + d = 1$ und $c - d = 3$. Addieren ergibt $2c = 4$.
hinweise:
  - '$A\cdot(1, 1) = (a + b,\ c + d)$ und $A\cdot(1, -1) = (a - b,\ c - d)$.'
  - 'Es entstehen zwei kleine Systeme: $a + b = 3$, $a - b = 1$ und $c + d = 1$, $c - d = 3$. Löse jedes mit dem Additionsverfahren.'
loesung: |
  Ansatz: Die vier Einträge sind Unbekannte. Jede Bedingung „Punkt wird auf Punkt abgebildet“ liefert zwei lineare Gleichungen.
  ---
  $A\begin{pmatrix} 1\\ 1 \end{pmatrix} = \begin{pmatrix} a + b\\ c + d \end{pmatrix} = \begin{pmatrix} 3\\ 1 \end{pmatrix}$ und $A\begin{pmatrix} 1\\ -1 \end{pmatrix} = \begin{pmatrix} a - b\\ c - d \end{pmatrix} = \begin{pmatrix} 1\\ 3 \end{pmatrix}$.
  ---
  Erste Zeile: $a + b = 3$ und $a - b = 1$. Addieren: $2a = 4$, also $a = 2$ und $b = 1$.
  ---
  Zweite Zeile: $c + d = 1$ und $c - d = 3$. Addieren: $2c = 4$, also $c = 2$ und $d = -1$.
  ---
  $A = \begin{pmatrix} 2 & 1\\ 2 & -1 \end{pmatrix}$. Probe: $A(1, 1) = (3, 1)$ und $A(1, -1) = (2 - 1,\ 2 + 1) = (1, 3)$.
```

## Die inverse Matrix

```aufgabe
id: lm-check-einheitsmatrix
titel: Welche Matrix ändert nichts?
niveau: 1
art: check
angabe: |
  Welche $2\times 2$-Matrix $X$ erfüllt $A\cdot X = A$ für **jede** $2\times 2$-Matrix $A$?
  Herkunft: [3.6 Matrizen und ihre Rechenregeln](/lernen/mathe3/lgs-matrizen/matrizen-und-ihre-rechenregeln).
teile:
  - typ: auswahl
    optionen:
      - 'die Einheitsmatrix $E = \begin{pmatrix} 1 & 0\\ 0 & 1 \end{pmatrix}$'
      - 'die Matrix $\begin{pmatrix} 1 & 1\\ 1 & 1 \end{pmatrix}$'
      - 'die Nullmatrix $O$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Rechne mit $A = \begin{pmatrix} 1 & 2\\ 3 & 4 \end{pmatrix}$ nach: Der Eintrag oben links wäre $1\cdot 1 + 2\cdot 1 = 3$ statt $1$.
      - wert: 2
        meldung: |
          $A\cdot O$ ist immer die Nullmatrix, nicht $A$.
hinweise:
  - 'Welche Matrix spielt beim Multiplizieren die Rolle der Zahl $1$?'
loesung: |
  Die Einheitsmatrix hat Einsen auf der Hauptdiagonale und sonst Nullen. Für sie gilt $AE = EA = A$.
  ---
  Sie spielt beim Matrixprodukt die Rolle der Zahl $1$ beim gewöhnlichen Multiplizieren.
```

Die Gleichung $3x = 6$ löst man, indem man beide Seiten mit $\frac13$ multipliziert. Die Zahl $\frac13$ ist der
**Kehrwert** von $3$, denn $\frac13\cdot 3 = 1$. Für Matrizen gibt es keine Division. Es gibt aber oft ein Gegenstück zum
Kehrwert. Die Rolle der Zahl $1$ übernimmt dabei die Einheitsmatrix $E$.

### Was ist die inverse Matrix?

:::definition[Inverse Matrix]
Eine quadratische Matrix $A$ heißt **invertierbar**, wenn es eine Matrix $A^{-1}$ gibt mit
$$A\cdot A^{-1} = E \qquad\text{und}\qquad A^{-1}\cdot A = E.$$
$A^{-1}$ heißt **inverse Matrix** von $A$, kurz **Inverse**. Man liest $A^{-1}$ als „A hoch minus eins“. Gibt es keine
solche Matrix, heißt $A$ **singulär** (nicht invertierbar).
:::

Achtung: $A^{-1}$ bedeutet **nicht** „eins durch jeden Eintrag“. Das hochgestellte $-1$ ist nur ein Name für die
Matrix, die mit $A$ multipliziert $E$ ergibt.

:::beispiel[Eine Inverse prüfen]
Es sei $A = \begin{pmatrix} 2 & 1\\ 5 & 3 \end{pmatrix}$ und $B = \begin{pmatrix} 3 & -1\\ -5 & 2 \end{pmatrix}$. Wir multiplizieren in beiden Reihenfolgen.

1. $AB = \begin{pmatrix} 2\cdot 3 + 1\cdot(-5) & 2\cdot(-1) + 1\cdot 2\\ 5\cdot 3 + 3\cdot(-5) & 5\cdot(-1) + 3\cdot 2 \end{pmatrix} = \begin{pmatrix} 1 & 0\\ 0 & 1 \end{pmatrix} = E$.
2. $BA = \begin{pmatrix} 3\cdot 2 + (-1)\cdot 5 & 3\cdot 1 + (-1)\cdot 3\\ -5\cdot 2 + 2\cdot 5 & -5\cdot 1 + 2\cdot 3 \end{pmatrix} = \begin{pmatrix} 1 & 0\\ 0 & 1 \end{pmatrix} = E$.

Beide Produkte ergeben $E$. Also ist $B = A^{-1}$.

**Nichtbeispiel:** $C = \begin{pmatrix} 1 & 2\\ 2 & 4 \end{pmatrix}$ hat keine Inverse. Die zweite Zeile ist das Doppelte der ersten. In
jedem Produkt $C\cdot X$ ist deshalb auch die zweite Zeile das Doppelte der ersten. Bei $E$ ist das nicht so, denn
$(0, 1)$ ist nicht das Doppelte von $(1, 0)$.
:::

Eine Matrix hat **höchstens eine** Inverse. Wären $B$ und $C$ beide invers zu $A$, dann folgte mit dem
Assoziativgesetz $B = B\cdot E = B\cdot(A\cdot C) = (B\cdot A)\cdot C = E\cdot C = C$. Darum darf man von **der** Inversen sprechen.

### Die Formel für 2×2-Matrizen

Für $A = \begin{pmatrix} a & b\\ c & d \end{pmatrix}$ probieren wir die Matrix aus, in der die Diagonale getauscht und die
Nebendiagonale mit Minus versehen ist:
$$\begin{pmatrix} a & b\\ c & d \end{pmatrix}\begin{pmatrix} d & -b\\ -c & a \end{pmatrix} = \begin{pmatrix} ad - bc & -ab + ba\\ cd - dc & -cb + da \end{pmatrix} = (ad - bc)\begin{pmatrix} 1 & 0\\ 0 & 1 \end{pmatrix}.$$
Es kommt also das $(ad - bc)$-Fache von $E$ heraus. Ist $ad - bc \neq 0$, teilt man noch durch diese Zahl und ist fertig.

:::satz[Inverse einer 2×2-Matrix]
$A = \begin{pmatrix} a & b\\ c & d \end{pmatrix}$ ist genau dann invertierbar, wenn $ad - bc \neq 0$ ist. Dann gilt
$$A^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b\\ -c & a \end{pmatrix}.$$
:::

:::beispiel[Eine Inverse mit Brüchen]
$A = \begin{pmatrix} 3 & 4\\ 1 & 2 \end{pmatrix}$.

1. $ad - bc = 3\cdot 2 - 4\cdot 1 = 2 \neq 0$. Die Matrix ist invertierbar.
2. Diagonale tauschen, Nebendiagonale mit Minus versehen: $\begin{pmatrix} 2 & -4\\ -1 & 3 \end{pmatrix}$.
3. Durch $2$ teilen: $A^{-1} = \begin{pmatrix} 1 & -2\\ -\frac12 & \frac32 \end{pmatrix}$.
4. Probe: $A\cdot A^{-1} = \begin{pmatrix} 3 - 2 & -6 + 6\\ 1 - 1 & -2 + 3 \end{pmatrix} = E$.
:::

:::merke[Inverse einer 2×2-Matrix]
**Diagonale tauschen, Nebendiagonale mit Minus versehen, durch $ad - bc$ teilen.** Ist $ad - bc = 0$, gibt es keine
Inverse. Kontrolle immer mit $A\cdot A^{-1} = E$.
:::

:::achtung[Die Inverse ist nicht der Kehrwert der Einträge]
**Falsch:** Für $A = \begin{pmatrix} 2 & 1\\ 1 & 1 \end{pmatrix}$ schreibt jemand $A^{-1} = \begin{pmatrix} \frac12 & 1\\ 1 & 1 \end{pmatrix}$, also von jedem
Eintrag den Kehrwert. Die Probe zeigt den Fehler: $A\cdot\begin{pmatrix} \frac12 & 1\\ 1 & 1 \end{pmatrix} = \begin{pmatrix} 2 & 3\\ 1{,}5 & 2 \end{pmatrix} \neq E$.

**Richtig:** Mit der Formel ist $ad - bc = 2 - 1 = 1$ und $A^{-1} = \begin{pmatrix} 1 & -1\\ -1 & 2 \end{pmatrix}$. Probe:
$\begin{pmatrix} 2 - 1 & -2 + 2\\ 1 - 1 & -1 + 2 \end{pmatrix} = E$.
:::

### Das Gauß-Jordan-Verfahren für größere Matrizen

Gesucht ist $X$ mit $A\cdot X = E$. Spaltenweise gelesen sind das mehrere Gleichungssysteme mit derselben Matrix $A$. Ihre
rechten Seiten sind die Spalten von $E$. Man löst alle gleichzeitig, indem man $E$ rechts neben $A$ schreibt und wie beim
Gauß-Verfahren umformt.

:::beispiel[Inverse einer 3×3-Matrix]
$A = \begin{pmatrix} 1 & 0 & -1\\ 1 & 1 & 0\\ 0 & 1 & 2 \end{pmatrix}$. Wir schreiben $(A \mid E)$ auf:
$$\left(\begin{array}{rrr|rrr} 1 & 0 & -1 & 1 & 0 & 0\\ 1 & 1 & 0 & 0 & 1 & 0\\ 0 & 1 & 2 & 0 & 0 & 1 \end{array}\right)$$

1. **Unterhalb der Diagonale.** $\text{II} - \text{I}$ ergibt $(0,\ 1,\ 1 \mid -1,\ 1,\ 0)$. Dann $\text{III} - \text{II}$ mit der
   neuen Zeile II: $(0,\ 0,\ 1 \mid 1,\ -1,\ 1)$.
2. **Oberhalb der Diagonale.** $\text{II} - \text{III}$ ergibt $(0,\ 1,\ 0 \mid -2,\ 2,\ -1)$. $\text{I} + \text{III}$ ergibt
   $(1,\ 0,\ 0 \mid 2,\ -1,\ 1)$.
3. **Ablesen.** Links steht jetzt $E$. Rechts steht die Inverse:
   $$A^{-1} = \begin{pmatrix} 2 & -1 & 1\\ -2 & 2 & -1\\ 1 & -1 & 1 \end{pmatrix}.$$
4. **Probe**, erste Zeile von $A$ mal die Spalten von $A^{-1}$: $2 - 1 = 1$, dann $-1 + 1 = 0$, dann $1 - 1 = 0$.
:::

:::merke[Inverse mit dem Gauß-Jordan-Verfahren]
1. Schreib $(A \mid E)$ auf.
2. Forme mit Zeilenumformungen um, bis links $E$ steht: zuerst unterhalb der Diagonale Nullen erzeugen, dann oberhalb,
   zum Schluss jede Zeile durch ihr Pivotelement teilen.
3. Rechts steht dann $A^{-1}$. Kurz: $(A \mid E)$ wird zu $(E \mid A^{-1})$.
4. Entsteht links eine Nullzeile, ist $A$ **nicht** invertierbar.
:::

### Gleichungssysteme mit der Inversen lösen

Ist $A$ invertierbar, multipliziert man $A\vec x = \vec b$ **von links** mit $A^{-1}$:
$$A^{-1}A\vec x = A^{-1}\vec b, \qquad\text{also}\qquad \vec x = A^{-1}\vec b.$$
Links wurde $A^{-1}A = E$ und $E\vec x = \vec x$ verwendet. Das System hat dann für **jede** rechte Seite genau eine Lösung.
Für ein einzelnes System ist das Gauß-Verfahren schneller. Die Inverse lohnt sich, wenn man dasselbe System mit vielen
rechten Seiten lösen muss.

:::beispiel[Ein System mit der Inversen lösen]
Mit $A$ aus dem Gauß-Jordan-Beispiel lösen wir $A\vec x = \vec b$ für $\vec b = (1, 2, 3)$:
$$\vec x = A^{-1}\vec b = \begin{pmatrix} 2 & -1 & 1\\ -2 & 2 & -1\\ 1 & -1 & 1 \end{pmatrix}\begin{pmatrix} 1\\ 2\\ 3 \end{pmatrix} = \begin{pmatrix} 2 - 2 + 3\\ -2 + 4 - 3\\ 1 - 2 + 3 \end{pmatrix} = \begin{pmatrix} 3\\ -1\\ 2 \end{pmatrix}.$$
Probe: $A\vec x = (3 - 2,\ 3 - 1,\ -1 + 4) = (1, 2, 3)$. Das stimmt.
:::

:::satz[Rechenregeln für Inverse]
Sind $A$ und $B$ invertierbare Matrizen gleicher Größe, dann gilt
$$(A^{-1})^{-1} = A, \qquad (AB)^{-1} = B^{-1}A^{-1}, \qquad (A^T)^{-1} = (A^{-1})^T.$$
:::

Die mittlere Regel prüft man durch Nachrechnen: $(AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1} = AEA^{-1} = AA^{-1} = E$. Die Reihenfolge
dreht sich um. Ein Bild aus dem Alltag: Wer zuerst Socken und dann Schuhe anzieht, muss zuerst die Schuhe und dann die Socken
ausziehen.

```aufgabe
id: lm-check-produkt-inverse
titel: Die Inverse eines Produkts
niveau: 1
art: check
angabe: |
  $A$ und $B$ sind invertierbar. Welche Matrix ist die Inverse von $AB$?
teile:
  - typ: auswahl
    optionen:
      - '$B^{-1}A^{-1}$'
      - '$A^{-1}B^{-1}$'
      - '$\frac{1}{AB}$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Rechne $(AB)(A^{-1}B^{-1})$ aus. In der Mitte steht $BA^{-1}$, und das lässt sich nicht wegkürzen. Die Reihenfolge muss sich umdrehen.
      - wert: 2
        meldung: |
          Durch eine Matrix kann man nicht teilen. Die Schreibweise $\frac{1}{AB}$ hat keine Bedeutung.
hinweise:
  - 'Denk an Socken und Schuhe: Was zuletzt angezogen wurde, wird zuerst ausgezogen.'
loesung: |
  $(AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1} = AA^{-1} = E$.
  ---
  Also ist $(AB)^{-1} = B^{-1}A^{-1}$. Die Reihenfolge dreht sich um.
```

:::achtung[Matrixgleichungen von der richtigen Seite umformen]
**Falsch:** Aus $AX = B$ folgt „$X = BA^{-1}$“. Mit $A = \begin{pmatrix} 2 & 1\\ 1 & 1 \end{pmatrix}$ und $B = \begin{pmatrix} 1 & 0\\ 2 & 1 \end{pmatrix}$
ergibt das $\begin{pmatrix} 1 & -1\\ 1 & 0 \end{pmatrix}$. Die Probe $A\cdot\begin{pmatrix} 1 & -1\\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 3 & -2\\ 2 & -1 \end{pmatrix}$ ist aber nicht $B$.

**Richtig:** $A$ steht **links** von $X$. Also multipliziert man **von links** mit $A^{-1}$: $X = A^{-1}B = \begin{pmatrix} -1 & -1\\ 3 & 2 \end{pmatrix}$.
Steht $A$ rechts, wie bei $XA = B$, multipliziert man von rechts: $X = BA^{-1}$. Eine Schreibweise wie $\frac BA$ gibt es nicht.
:::

```reflexion
frage: Warum hat die Matrix $\begin{pmatrix} 1 & 2\\ 2 & 4 \end{pmatrix}$ keine Inverse? Gib zwei Begründungen, eine mit der Formel und eine mit einem Gleichungssystem.
antwort: |
  Mit der Formel: $ad - bc = 1\cdot 4 - 2\cdot 2 = 0$. Durch $0$ kann man nicht teilen, also gibt es keine Inverse.
  Mit einem Gleichungssystem: Hätte die Matrix eine Inverse, hätte $A\vec x = \vec b$ für jede rechte Seite genau eine Lösung.
  Das System $x + 2y = 1$, $2x + 4y = 3$ hat aber gar keine Lösung, denn das Doppelte der ersten Gleichung ergibt $2 \neq 3$.
  Geometrisch beschreiben beide Gleichungen parallele Geraden.
```

### Übungen

```aufgabe
id: lm-inverse-2x2
titel: Inverse einer 2×2-Matrix
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Berechne die Inverse von $A = \begin{pmatrix} 5 & 3\\ 3 & 2 \end{pmatrix}$. Gib die Einträge zeilenweise an.
teile:
  - typ: vektor
    label: '$A^{-1}$ zeilenweise'
    namen: ["a11", "a12", "a21", "a22"]
    loesung: ["2", "-3", "-3", "5"]
    fehler:
      - wert: ["5", "-3", "-3", "2"]
        meldung: |
          Die Einträge auf der Hauptdiagonale werden **getauscht**: oben links steht danach $2$, unten rechts $5$.
      - wert: ["2", "3", "3", "5"]
        meldung: |
          Die beiden Einträge der Nebendiagonale bekommen ein Minus: $-3$ und $-3$.
hinweise:
  - 'Berechne zuerst $ad - bc = 5\cdot 2 - 3\cdot 3$.'
loesung: |
  Ansatz: Formel für $2\times 2$-Matrizen. Zuerst $ad - bc$ prüfen.
  ---
  $ad - bc = 10 - 9 = 1 \neq 0$, also ist $A$ invertierbar.
  ---
  Diagonale tauschen, Nebendiagonale mit Minus, durch $1$ teilen: $A^{-1} = \begin{pmatrix} 2 & -3\\ -3 & 5 \end{pmatrix}$.
  ---
  Probe: $\begin{pmatrix} 5 & 3\\ 3 & 2 \end{pmatrix}\begin{pmatrix} 2 & -3\\ -3 & 5 \end{pmatrix} = \begin{pmatrix} 10 - 9 & -15 + 15\\ 6 - 6 & -9 + 10 \end{pmatrix} = E$.
```

```aufgabe
id: lm-inverse-pruefen
titel: Sind diese Matrizen invers zueinander?
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  Gegeben ist $A = \begin{pmatrix} 1 & 3\\ 1 & 4 \end{pmatrix}$.

  a) Ist $B = \begin{pmatrix} 4 & -3\\ -1 & 1 \end{pmatrix}$ die Inverse von $A$?

  b) Ist $C = \begin{pmatrix} 4 & 3\\ 1 & 1 \end{pmatrix}$ die Inverse von $A$?
teile:
  - typ: auswahl
    label: 'a)'
    optionen: ['ja', 'nein']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Rechne $A\cdot B$ mit Zeile mal Spalte aus. Oben links: $1\cdot 4 + 3\cdot(-1) = 1$. Prüfe die anderen drei Einträge genauso.
  - typ: auswahl
    label: 'b)'
    optionen: ['ja', 'nein']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Oben links ergibt $A\cdot C$ den Eintrag $1\cdot 4 + 3\cdot 1 = 7$, nicht $1$. Bei $C$ fehlen die Minuszeichen auf der Nebendiagonale.
hinweise:
  - 'Eine Matrix ist die Inverse, wenn das Produkt mit $A$ die Einheitsmatrix ergibt.'
loesung: |
  Ansatz: Produkt bilden und mit $E$ vergleichen.
  ---
  a) $AB = \begin{pmatrix} 4 - 3 & -3 + 3\\ 4 - 4 & -3 + 4 \end{pmatrix} = E$. Also ist $B = A^{-1}$.
  ---
  b) $AC = \begin{pmatrix} 4 + 3 & 3 + 3\\ 4 + 4 & 3 + 4 \end{pmatrix} = \begin{pmatrix} 7 & 6\\ 8 & 7 \end{pmatrix} \neq E$. $C$ ist nicht die Inverse.
```

```aufgabe
id: lm-inverse-3x3
titel: Gauß-Jordan für eine 3×3-Inverse
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Berechne mit dem Gauß-Jordan-Verfahren die Inverse von
  $$A = \begin{pmatrix} 1 & 0 & 1\\ 0 & 1 & 0\\ 1 & 1 & 2 \end{pmatrix}.$$
  Gib die drei Zeilen von $A^{-1}$ an.
teile:
  - typ: vektor
    label: '1. Zeile von $A^{-1}$'
    loesung: ["2", "1", "-1"]
    fehler:
      - wert: ["1", "0", "0"]
        meldung: |
          Das ist die erste Zeile von $E$. Lies die Inverse **rechts** vom Strich ab, nachdem links $E$ entstanden ist.
  - typ: vektor
    label: '2. Zeile von $A^{-1}$'
    loesung: ["0", "1", "0"]
  - typ: vektor
    label: '3. Zeile von $A^{-1}$'
    loesung: ["-1", "-1", "1"]
    fehler:
      - wert: ["-1", "0", "1"]
        meldung: |
          Nach $\text{III} - \text{I}$ musst du noch $\text{III} - \text{II}$ rechnen. Dabei wird auch rechts vom Strich die Zeile II abgezogen.
hinweise:
  - 'Starte mit $(A \mid E)$ und rechne $\text{III} - \text{I}$, danach $\text{III} - \text{II}$.'
  - 'Links steht dann eine obere Dreiecksmatrix mit Einsen auf der Diagonale. Mit $\text{I} - \text{III}$ wird die erste Zeile fertig.'
gefuehrt:
  - text: 'Rechne $\text{III} - \text{I}$ in $(A \mid E)$. Welcher Eintrag steht danach in Zeile III ganz rechts (letzte Spalte von $E$)?'
    teil:
      typ: zahl
      loesung: "1 - 0"
    erklaerung: 'Neue Zeile III: $(0,\ 1,\ 1 \mid -1,\ 0,\ 1)$.'
  - text: 'Jetzt $\text{III} - \text{II}$. Welcher Eintrag steht in Zeile III in der mittleren Spalte rechts vom Strich?'
    teil:
      typ: zahl
      loesung: "0 - 1"
      fehler:
        - wert: "1"
          meldung: 'Von der $0$ wird der entsprechende Eintrag von Zeile II abgezogen, also $1$.'
    erklaerung: 'Neue Zeile III: $(0,\ 0,\ 1 \mid -1,\ -1,\ 1)$. Links ist jetzt eine Dreiecksform mit Einsen auf der Diagonale.'
  - text: 'Rechne $\text{I} - \text{III}$. Welcher Eintrag steht in Zeile I ganz links rechts vom Strich?'
    teil:
      typ: zahl
      loesung: "1 - (-1)"
      fehler:
        - wert: "0"
          meldung: 'Abgezogen wird $-1$. Eine negative Zahl abziehen heißt sie addieren: $1 - (-1) = 1 + 1$.'
    erklaerung: 'Neue Zeile I: $(1,\ 0,\ 0 \mid 2,\ 1,\ -1)$. Zeile II ist schon fertig: $(0,\ 1,\ 0 \mid 0,\ 1,\ 0)$.'
loesung: |
  Ansatz: $(A \mid E)$ umformen, bis links $E$ steht. Rechts steht dann $A^{-1}$.
  ---
  $\text{III} - \text{I}$: $(0,\ 1,\ 1 \mid -1,\ 0,\ 1)$. Dann $\text{III} - \text{II}$: $(0,\ 0,\ 1 \mid -1,\ -1,\ 1)$.
  ---
  Nach oben: $\text{I} - \text{III}$ ergibt $(1,\ 0,\ 0 \mid 2,\ 1,\ -1)$. Zeile II ist bereits $(0,\ 1,\ 0 \mid 0,\ 1,\ 0)$.
  ---
  $$A^{-1} = \begin{pmatrix} 2 & 1 & -1\\ 0 & 1 & 0\\ -1 & -1 & 1 \end{pmatrix}$$
  ---
  Probe, dritte Zeile von $A$ mal die Spalten von $A^{-1}$: $2 + 0 - 2 = 0$, dann $1 + 1 - 2 = 0$, dann $-1 + 0 + 2 = 1$.
```

```aufgabe
id: lm-inverse-anwenden
titel: Zwei Systeme mit derselben Matrix
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Löse mithilfe von $A^{-1}$ für $A = \begin{pmatrix} 5 & 3\\ 3 & 2 \end{pmatrix}$ die beiden Systeme
  $$\text{(a)}\ \ A\vec x = \begin{pmatrix} 7\\ 4 \end{pmatrix}, \qquad \text{(b)}\ \ A\vec x = \begin{pmatrix} 2\\ 1 \end{pmatrix}.$$
teile:
  - typ: vektor
    label: 'Lösung (a)'
    namen: ["x", "y"]
    loesung: ["2", "-1"]
    fehler:
      - wert: ["47", "29"]
        meldung: |
          Du hast $A\cdot\vec b$ berechnet. Gesucht ist $A^{-1}\cdot\vec b$, denn aus $A\vec x = \vec b$ folgt $\vec x = A^{-1}\vec b$.
  - typ: vektor
    label: 'Lösung (b)'
    namen: ["x", "y"]
    loesung: ["1", "-1"]
    fehler:
      - wert: ["-1", "1"]
        meldung: |
          Prüfe die Vorzeichen: $2\cdot 2 + (-3)\cdot 1 = 1$ und $(-3)\cdot 2 + 5\cdot 1 = -1$.
hinweise:
  - 'Bestimme zuerst $A^{-1}$ mit der Formel für $2\times 2$-Matrizen. Es ist $ad - bc = 1$.'
  - 'Multipliziere dann $A^{-1}$ mit der jeweiligen rechten Seite: $\vec x = A^{-1}\vec b$.'
loesung: |
  Ansatz: Aus $A\vec x = \vec b$ folgt durch Multiplikation von links mit $A^{-1}$ die Lösung $\vec x = A^{-1}\vec b$.
  ---
  $A^{-1} = \begin{pmatrix} 2 & -3\\ -3 & 5 \end{pmatrix}$, denn $ad - bc = 1$.
  ---
  (a) $\vec x = (2\cdot 7 - 3\cdot 4,\ -3\cdot 7 + 5\cdot 4) = (2, -1)$. Probe: $10 - 3 = 7$ und $6 - 2 = 4$.
  ---
  (b) $\vec x = (2\cdot 2 - 3\cdot 1,\ -3\cdot 2 + 5\cdot 1) = (1, -1)$. Probe: $5 - 3 = 2$ und $3 - 2 = 1$.
```

```aufgabe
id: lm-inverse-singulaer
titel: Wann gibt es keine Inverse?
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Gegeben ist $A = \begin{pmatrix} k & 6\\ 2 & 3 \end{pmatrix}$ mit einer reellen Zahl $k$.

  a) Für welches $k$ ist $A$ nicht invertierbar?

  b) Berechne $A^{-1}$ für $k = 5$ und gib die Einträge zeilenweise an, exakt oder auf drei Nachkommastellen.
teile:
  - typ: zahl
    label: 'a) $k =$'
    loesung: "12/3"
    anzeige: '4'
    fehler:
      - wert: "-4"
        meldung: |
          $ad - bc = 3k - 6\cdot 2 = 3k - 12$. Null wird das für $3k = 12$.
      - wert: "1"
        meldung: |
          Multipliziere über Kreuz: $a\cdot d = k\cdot 3$ und $b\cdot c = 6\cdot 2 = 12$.
  - typ: vektor
    label: 'b) $A^{-1}$ für $k = 5$'
    namen: ["a11", "a12", "a21", "a22"]
    loesung: ["3/3", "-6/3", "-2/3", "5/3"]
    fehler:
      - wert: ["3", "-6", "-2", "5"]
        meldung: |
          Es fehlt noch das Teilen durch $ad - bc = 15 - 12 = 3$.
hinweise:
  - 'Eine $2\times 2$-Matrix ist genau dann nicht invertierbar, wenn $ad - bc = 0$.'
  - 'Für $k = 5$ ist $ad - bc = 15 - 12 = 3$. Diagonale tauschen, Nebendiagonale mit Minus, durch $3$ teilen.'
loesung: |
  Ansatz: Die Formel für $2\times 2$-Matrizen funktioniert genau dann, wenn $ad - bc \neq 0$ ist.
  ---
  a) $ad - bc = 3k - 12 = 0$ genau für $k = 4$. Dann ist die erste Zeile $(4, 6)$ das Doppelte der zweiten $(2, 3)$.
  ---
  b) $k = 5$: $ad - bc = 3$, also $A^{-1} = \frac13\begin{pmatrix} 3 & -6\\ -2 & 5 \end{pmatrix} = \begin{pmatrix} 1 & -2\\ -\frac23 & \frac53 \end{pmatrix}$.
  ---
  Probe: $\begin{pmatrix} 5 & 6\\ 2 & 3 \end{pmatrix}\begin{pmatrix} 1 & -2\\ -\frac23 & \frac53 \end{pmatrix} = \begin{pmatrix} 5 - 4 & -10 + 10\\ 2 - 2 & -4 + 5 \end{pmatrix} = E$.
```

```aufgabe
id: lm-inverse-fehler
titel: Fehler bei der Inversen finden
niveau: 2
lernziel: 6
kompetenz: begruenden
angabe: |
  Mira berechnet die Inverse von $A = \begin{pmatrix} 4 & 2\\ 3 & 2 \end{pmatrix}$ und erhält $\begin{pmatrix} 2 & -2\\ -3 & 4 \end{pmatrix}$.
  Bei der Probe kommt $\begin{pmatrix} 2 & 0\\ 0 & 2 \end{pmatrix}$ heraus.

  a) Welcher Schritt fehlt?

  b) Gib die richtige Inverse zeilenweise an.
teile:
  - typ: auswahl
    label: 'a)'
    optionen:
      - 'Sie hat vergessen, durch $ad - bc = 2$ zu teilen.'
      - 'Sie hat die Diagonale nicht getauscht.'
      - 'Die Matrix ist nicht invertierbar.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Die Diagonale ist getauscht: Oben links steht $2$, unten rechts $4$. Der fehlende Schritt kommt danach.
      - wert: 2
        meldung: |
          $ad - bc = 8 - 6 = 2 \neq 0$. Die Matrix ist invertierbar.
  - typ: vektor
    label: 'b) $A^{-1}$ zeilenweise'
    namen: ["a11", "a12", "a21", "a22"]
    loesung: ["1", "-1", "-3/2", "2"]
    fehler:
      - wert: ["2", "-2", "-3", "4"]
        meldung: |
          Das ist Miras Ergebnis. Teile jeden Eintrag noch durch $ad - bc = 2$.
hinweise:
  - 'Die Probe ergibt das Doppelte von $E$. Welche Zahl ist $ad - bc$?'
  - 'Merkregel: Diagonale tauschen, Nebendiagonale mit Minus, **durch $ad - bc$ teilen**.'
loesung: |
  Ansatz: Die Probe liefert $2E$ statt $E$. Das zeigt, dass ein Faktor $2$ zu viel im Ergebnis steckt.
  ---
  a) $ad - bc = 4\cdot 2 - 2\cdot 3 = 2$. Mira hat Diagonale und Vorzeichen richtig behandelt, aber nicht durch $2$ geteilt.
  ---
  b) $A^{-1} = \frac12\begin{pmatrix} 2 & -2\\ -3 & 4 \end{pmatrix} = \begin{pmatrix} 1 & -1\\ -\frac32 & 2 \end{pmatrix}$.
  ---
  Probe: $\begin{pmatrix} 4 - 3 & -4 + 4\\ 3 - 3 & -3 + 4 \end{pmatrix} = E$.
```

```aufgabe
id: lm-matrixgleichung
titel: Eine Matrixgleichung lösen
niveau: 3
lernziel: 6
kompetenz: anwenden
angabe: |
  Bestimme die Matrix $X$ mit $XA = B$ für
  $$A = \begin{pmatrix} 3 & 1\\ 2 & 1 \end{pmatrix}, \qquad B = \begin{pmatrix} 4 & 1\\ 1 & 0 \end{pmatrix}.$$
  Gib $X$ zeilenweise an.
teile:
  - typ: vektor
    label: '$X$ zeilenweise'
    namen: ["x11", "x12", "x21", "x22"]
    loesung: ["2", "-1", "1", "-1"]
    fehler:
      - wert: ["3", "1", "-5", "-2"]
        meldung: |
          Das ist $A^{-1}B$. In $XA = B$ steht $A$ **rechts** von $X$. Darum multipliziert man **von rechts** mit $A^{-1}$:
          $X = BA^{-1}$.
hinweise:
  - '$A$ steht rechts von $X$. Multipliziere beide Seiten **von rechts** mit $A^{-1}$.'
  - '$A^{-1} = \begin{pmatrix} 1 & -1\\ -2 & 3 \end{pmatrix}$, denn $ad - bc = 3 - 2 = 1$. Berechne dann $B\cdot A^{-1}$.'
loesung: |
  Ansatz: In $XA = B$ steht $A$ rechts. Multiplikation von rechts mit $A^{-1}$ ergibt $XAA^{-1} = BA^{-1}$, also $X = BA^{-1}$.
  ---
  $ad - bc = 3 - 2 = 1$, also $A^{-1} = \begin{pmatrix} 1 & -1\\ -2 & 3 \end{pmatrix}$.
  ---
  $X = BA^{-1} = \begin{pmatrix} 4 - 2 & -4 + 3\\ 1 - 0 & -1 + 0 \end{pmatrix} = \begin{pmatrix} 2 & -1\\ 1 & -1 \end{pmatrix}$.
  ---
  Probe: $XA = \begin{pmatrix} 6 - 2 & 2 - 1\\ 3 - 2 & 1 - 1 \end{pmatrix} = \begin{pmatrix} 4 & 1\\ 1 & 0 \end{pmatrix} = B$.
```

## Determinanten

```aufgabe
id: lm-check-ad-bc
titel: Die Zahl ad − bc
niveau: 1
art: check
angabe: |
  Berechne $ad - bc$ für die Matrix $\begin{pmatrix} 3 & 5\\ 1 & 2 \end{pmatrix}$.
  Herkunft: [3.8 Die inverse Matrix](/lernen/mathe3/lgs-matrizen/die-inverse-matrix).
teile:
  - typ: zahl
    label: '$ad - bc =$'
    loesung: "3*2 - 5*1"
    anzeige: '1'
    fehler:
      - wert: "11"
        meldung: |
          Die beiden Produkte werden **subtrahiert**, nicht addiert: $3\cdot 2 - 5\cdot 1$.
      - wert: "-1"
        meldung: |
          Die Reihenfolge ist $ad - bc$: zuerst die Hauptdiagonale $3\cdot 2$, dann die Nebendiagonale $5\cdot 1$ abziehen.
hinweise:
  - '$a$ und $d$ stehen auf der Hauptdiagonale (links oben, rechts unten), $b$ und $c$ auf der Nebendiagonale.'
loesung: |
  $a = 3$, $b = 5$, $c = 1$, $d = 2$.
  ---
  $ad - bc = 3\cdot 2 - 5\cdot 1 = 6 - 5 = 1$.
```

Die Zahl $ad - bc$ ist uns schon zweimal begegnet. In der Lektion
[3.2 Systeme mit zwei Unbekannten](/lernen/mathe3/lgs-matrizen/systeme-mit-zwei-unbekannten) entschied sie, ob ein System
genau eine Lösung hat. In der Lektion 3.8 stand sie im Nenner der Formel für die Inverse. Diese Zahl verdient einen Namen.
Sie heißt **Determinante**. Das Wort kommt vom lateinischen „determinare“, bestimmen: Die Determinante bestimmt, ob eine
Matrix invertierbar ist.

### Die Determinante einer 2×2-Matrix

:::definition[Determinante einer 2×2-Matrix]
$$\det\begin{pmatrix} a & b\\ c & d \end{pmatrix} = \begin{vmatrix} a & b\\ c & d \end{vmatrix} = ad - bc.$$
In Worten: **Produkt der Hauptdiagonale minus Produkt der Nebendiagonale.** Die Schreibweise mit senkrechten Strichen
ist üblich.
:::

:::beispiel[Determinanten berechnen]
1. $\begin{vmatrix} 4 & -2\\ 3 & 1 \end{vmatrix} = 4\cdot 1 - (-2)\cdot 3 = 4 + 6 = 10$.
2. $\begin{vmatrix} 2 & 3\\ 4 & 6 \end{vmatrix} = 12 - 12 = 0$. Die zweite Zeile ist das Doppelte der ersten. Die Matrix hat keine Inverse.
3. $\begin{vmatrix} 1 & 2\\ 3 & 4 \end{vmatrix} = 4 - 6 = -2$. Determinanten können also negativ sein.

**Nichtbeispiel:** Die senkrechten Striche bedeuten hier **keinen** Betrag. $\begin{vmatrix} 1 & 2\\ 3 & 4 \end{vmatrix}$ ist $-2$, nicht $2$.
:::

### Was die Determinante geometrisch bedeutet

Die beiden Spalten $\vec a = (a, c)$ und $\vec b = (b, d)$ der Matrix sind Vektoren. Sie spannen ein Parallelogramm auf.
**Der Flächeninhalt dieses Parallelogramms ist der Betrag der Determinante.** Das Vorzeichen gibt die Richtung an. Es
ist positiv, wenn man von $\vec a$ auf dem kürzeren Weg gegen den Uhrzeigersinn zu $\vec b$ dreht, sonst negativ.

```plot
x: [-0.5, 5]
y: [-0.5, 3.5]
gleich: true
vektoren:
  - { nach: [3, 1], label: "a = (3, 1)", farbe: 0 }
  - { nach: [1, 2], label: "b = (1, 2)", farbe: 1 }
strecken:
  - { von: [3, 1], nach: [4, 3], gestrichelt: true }
  - { von: [1, 2], nach: [4, 3], gestrichelt: true }
beschriftung: Die Vektoren a = (3, 1) und b = (1, 2) spannen ein Parallelogramm auf. Sein Flächeninhalt ist die Determinante 3·2 − 1·1 = 5. Sie ist positiv, weil man von a aus gegen den Uhrzeigersinn zu b gelangt.
```

Für ein Dreieck mit denselben zwei Seiten halbiert sich die Fläche. Daraus folgt eine praktische Formel: Das Dreieck mit den
Ecken $A$, $B$, $C$ hat den Flächeninhalt
$$F = \tfrac12\,\big|\det\big(\overrightarrow{AB},\ \overrightarrow{AC}\big)\big|.$$
Dabei ist $\overrightarrow{AB}$ der Vektor von $A$ nach $B$, also „Endpunkt minus Anfangspunkt“. Die beiden Vektoren werden
als Spalten in die Matrix geschrieben.

```aufgabe
id: lm-check-widget-flaeche
titel: Vorhersage für die Fläche
niveau: 1
art: check
angabe: |
  Im Werkzeug spannen $\vec a$ und $\vec b$ ein Parallelogramm auf. Was passiert mit der Determinante, wenn du $\vec b$ so ziehst,
  dass es genau in dieselbe Richtung zeigt wie $\vec a$?
teile:
  - typ: auswahl
    optionen:
      - 'Sie wird $0$.'
      - 'Sie wird besonders groß.'
      - 'Sie bleibt gleich.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Zeigen beide Vektoren in dieselbe Richtung, wird das Parallelogramm ganz flach. Wie groß ist dann seine Fläche?
      - wert: 2
        meldung: |
          Die Determinante ist die Fläche des Parallelogramms. Ändert sich die Form, ändert sich auch die Fläche.
hinweise:
  - 'Stell dir das Parallelogramm vor, wenn beide Seiten auf einer Linie liegen.'
loesung: |
  Zeigen $\vec a$ und $\vec b$ in dieselbe Richtung, liegt das Parallelogramm auf einer Linie. Es ist zu einer Strecke zusammengefallen.
  ---
  Seine Fläche ist $0$, also ist auch die Determinante $0$.
```

```widget
name: vektoren
titel: Determinante als Fläche
props:
  a: [3, 1]
  b: [1, 2]
  zeige: ["flaeche"]
```

Prüfe deine Vorhersage. Zieh $\vec b$ zuerst nach $(6, 2)$. Dann zeigt $\vec b$ in dieselbe Richtung wie $\vec a$, und die Fläche
ist $0$. Zieh $\vec b$ dann auf die andere Seite von $\vec a$, zum Beispiel nach $(2, -1)$. Jetzt dreht man im Uhrzeigersinn von $\vec a$
zu $\vec b$, und die Determinante wird negativ: $3\cdot(-1) - 2\cdot 1 = -5$. Die Fläche ist der Betrag $5$.

Daraus folgt der wichtigste Zusammenhang: **Die Determinante ist genau dann $0$, wenn die beiden Spalten auf einer gemeinsamen
Geraden durch den Nullpunkt liegen**. Sie zeigen dann in dieselbe oder in die genau entgegengesetzte Richtung, und eine
Spalte ist ein Vielfaches der anderen. Bei einem Gleichungssystem bedeutet das: Die beiden Geraden haben
dieselbe Steigung.

### Die Determinante einer 3×3-Matrix

Für $3\times 3$-Matrizen gibt es eine längere Formel mit sechs Produkten. Man muss sie nicht auswendig können. Zwei
Rechenverfahren liefern sie.

**Regel von Sarrus.** Man schreibt die ersten beiden Spalten noch einmal rechts neben die Matrix. Dann bildet man drei Produkte
entlang der Diagonalen von links oben nach rechts unten. Sie zählen mit Plus. Dann bildet man drei Produkte entlang der
Diagonalen von rechts oben nach links unten. Sie zählen mit Minus.
$$\begin{array}{ccc|cc} a_{11} & a_{12} & a_{13} & a_{11} & a_{12}\\ a_{21} & a_{22} & a_{23} & a_{21} & a_{22}\\ a_{31} & a_{32} & a_{33} & a_{31} & a_{32} \end{array}$$
$$\det A = a_{11}a_{22}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32} - a_{13}a_{22}a_{31} - a_{11}a_{23}a_{32} - a_{12}a_{21}a_{33}.$$

:::beispiel[Regel von Sarrus]
$$A = \begin{pmatrix} 1 & 2 & -1\\ 3 & 0 & 2\\ -1 & 4 & 1 \end{pmatrix}, \qquad
\begin{array}{rrr|rr} 1 & 2 & -1 & 1 & 2\\ 3 & 0 & 2 & 3 & 0\\ -1 & 4 & 1 & -1 & 4 \end{array}$$

1. **Plus-Diagonalen:** $1\cdot 0\cdot 1 + 2\cdot 2\cdot(-1) + (-1)\cdot 3\cdot 4 = 0 - 4 - 12 = -16$.
2. **Minus-Diagonalen:** $(-1)\cdot 0\cdot(-1) + 1\cdot 2\cdot 4 + 2\cdot 3\cdot 1 = 0 + 8 + 6 = 14$.
3. **Ergebnis:** $\det A = -16 - 14 = -30$.
:::

**Entwicklung nach einer Zeile oder Spalte.** Dieses Verfahren heißt auch Entwicklungssatz von Laplace. Man streicht in $A$ die
Zeile $i$ und die Spalte $j$. Übrig bleibt eine $2\times 2$-Matrix. Ihre Determinante heißt **Unterdeterminante** $D_{ij}$. Dann
gilt für jede Zeile $i$:
$$\det A = \pm\, a_{i1}D_{i1} \pm a_{i2}D_{i2} \pm a_{i3}D_{i3}.$$
Die Vorzeichen folgen einem Schachbrettmuster, links oben beginnt es mit Plus:
$$\begin{pmatrix} + & - & +\\ - & + & -\\ + & - & + \end{pmatrix}$$
Dasselbe geht mit einer Spalte statt einer Zeile.

:::beispiel[Entwicklung nach der zweiten Zeile]
Dieselbe Matrix wie im Sarrus-Beispiel. Die zweite Zeile $(3, 0, 2)$ enthält eine $0$. Das spart einen Summanden. Die Vorzeichen
der zweiten Zeile im Schachbrett sind $-$, $+$, $-$.

1. Eintrag $3$, Vorzeichen $-$. Zeile 2 und Spalte 1 streichen: $\begin{vmatrix} 2 & -1\\ 4 & 1 \end{vmatrix} = 2 + 4 = 6$.
2. Eintrag $0$, Vorzeichen $+$. Der Summand ist $0$, egal wie die Unterdeterminante lautet.
3. Eintrag $2$, Vorzeichen $-$. Zeile 2 und Spalte 3 streichen: $\begin{vmatrix} 1 & 2\\ -1 & 4 \end{vmatrix} = 4 + 2 = 6$.
4. Zusammen: $\det A = -3\cdot 6 + 0 - 2\cdot 6 = -18 - 12 = -30$. Dasselbe Ergebnis wie mit Sarrus.
:::

:::merke[Welches Verfahren für 3×3?]
- **Sarrus** ist ein festes Schema und gut für Matrizen ohne Nullen. Es gilt **nur für $3\times 3$-Matrizen**.
- **Entwicklung** lohnt sich, wenn eine Zeile oder Spalte viele Nullen enthält. Jede Null spart eine Unterdeterminante. Sie
  funktioniert für jede Größe.
:::

:::achtung[Das Schachbrett-Vorzeichen vergessen]
**Falsch:** Bei der Entwicklung nach der zweiten Zeile rechnet jemand $3\cdot 6 + 0 + 2\cdot 6 = 30$, also überall mit Plus.

**Richtig:** In der zweiten Zeile stehen die Vorzeichen $-$, $+$, $-$. Also $-3\cdot 6 + 0 - 2\cdot 6 = -30$. Das Vorzeichen hängt
nur von der **Position** ab, nicht vom Eintrag selbst. Zeichne das Schachbrettmuster immer kurz an den Rand.
:::

### Rechenregeln

:::satz[Rechenregeln für Determinanten]
Für quadratische Matrizen $A$ und $B$ mit $n$ Zeilen gilt:

1. $\det(A^T) = \det A$. Was für Zeilen gilt, gilt deshalb auch für Spalten.
2. Vertauscht man zwei Zeilen, ändert die Determinante ihr **Vorzeichen**.
3. Multipliziert man **eine** Zeile mit $r$, wird die Determinante mit $r$ multipliziert. Folglich ist $\det(rA) = r^n\det A$.
4. Addiert man ein Vielfaches einer Zeile zu einer anderen, **bleibt die Determinante gleich**.
5. Hat $A$ eine Nullzeile oder zwei gleiche Zeilen, ist $\det A = 0$.
6. Bei einer Dreiecksmatrix ist $\det A$ das **Produkt der Diagonaleinträge**. Insbesondere ist $\det E = 1$.
7. **Produktsatz:** $\det(AB) = \det A\cdot\det B$. Daraus folgt $\det(A^{-1}) = \frac{1}{\det A}$.
:::

:::beispiel[Regeln an einer 2×2-Matrix prüfen]
Es sei $A = \begin{pmatrix} 2 & 1\\ 4 & 3 \end{pmatrix}$ mit $\det A = 6 - 4 = 2$.

1. **Regel 4:** $\text{II} - 2\cdot\text{I}$ ergibt $\begin{pmatrix} 2 & 1\\ 0 & 1 \end{pmatrix}$ mit Determinante $2\cdot 1 - 1\cdot 0 = 2$. Unverändert.
2. **Regel 2:** Zeilen tauschen ergibt $\begin{pmatrix} 4 & 3\\ 2 & 1 \end{pmatrix}$ mit Determinante $4 - 6 = -2$. Vorzeichen gewechselt.
3. **Regel 3:** Die erste Zeile mal $3$ ergibt $\begin{pmatrix} 6 & 3\\ 4 & 3 \end{pmatrix}$ mit Determinante $18 - 12 = 6 = 3\cdot 2$.

Mit den Regeln 2 bis 4 kann man Determinanten auch mit dem Gauß-Verfahren berechnen. Man bringt die Matrix auf Dreiecksform und
multipliziert die Diagonale. Beim ersten Beispiel der Lektion [3.3 Das Gauß-Verfahren](/lernen/mathe3/lgs-matrizen/das-gauss-verfahren)
wurde nur Regel 4 verwendet. Die Determinante ist dort also das Produkt der Pivotelemente: $1\cdot 1\cdot 20 = 20$.
:::

:::achtung[Keine Summenregel und kein einfacher Faktor]
**Falsch:** „$\det(A + B) = \det A + \det B$“ und „$\det(2A) = 2\det A$“.

**Richtig:** Gegenbeispiel mit der $2\times 2$-Einheitsmatrix $E$: $\det E = 1$, aber $\det(E + E) = \det\begin{pmatrix} 2 & 0\\ 0 & 2 \end{pmatrix} = 4$
und nicht $1 + 1 = 2$. Beim Vielfachen wird **jede** der $n$ Zeilen mit $2$ multipliziert. Darum ist $\det(2A) = 2^n\det A$. Bei
$2\times 2$-Matrizen ist das $4\det A$, bei $3\times 3$-Matrizen $8\det A$.
:::

```aufgabe
id: lm-check-det-vielfaches
titel: Die Determinante des Doppelten
niveau: 1
art: check
angabe: |
  Eine $2\times 2$-Matrix $A$ hat $\det A = 3$. Wie groß ist $\det(2A)$?
teile:
  - typ: zahl
    label: '$\det(2A) =$'
    loesung: "2^2*3"
    anzeige: '12'
    fehler:
      - wert: "6"
        meldung: |
          Bei $2A$ wird **jede** Zeile mit $2$ multipliziert. Jede der zwei Zeilen bringt einen Faktor $2$, zusammen $2\cdot 2 = 4$.
      - wert: "24"
        meldung: |
          $2^3 = 8$ gilt für $3\times 3$-Matrizen. Hier hat $A$ nur zwei Zeilen, der Faktor ist $2^2 = 4$.
hinweise:
  - 'Regel 3: Eine Zeile mal $r$ multipliziert die Determinante mit $r$. Wie viele Zeilen werden bei $2A$ verdoppelt?'
loesung: |
  Bei $2A$ werden beide Zeilen mit $2$ multipliziert. Jede Zeile bringt den Faktor $2$.
  ---
  $\det(2A) = 2^2\cdot\det A = 4\cdot 3 = 12$.
```

### Determinante und Lösbarkeit

Jetzt fügt sich alles zusammen. Beim Gauß-Verfahren ändert sich die Determinante nur um Faktoren ungleich $0$. Sie ist also genau
dann $0$, wenn die Stufenform eine Nullzeile hat. Das heißt: wenn der Rang kleiner als $n$ ist.

:::satz[Hauptsatz für quadratische Systeme]
Für eine $n\times n$-Matrix $A$ sind folgende Aussagen gleichwertig, das heißt: Ist eine wahr, sind alle wahr.

1. $\det A \neq 0$.
2. $A$ ist invertierbar.
3. $\operatorname{rg}(A) = n$.
4. Das System $A\vec x = \vec b$ hat für **jede** rechte Seite $\vec b$ genau eine Lösung.
5. Das homogene System $A\vec x = \vec 0$ hat nur die Lösung $\vec x = \vec 0$.

Ist dagegen $\det A = 0$, hat $A\vec x = \vec b$ je nach rechter Seite **keine oder unendlich viele** Lösungen.
:::

**Beispiel:** Das System aus dem ersten Beispiel der Lektion 3.3 hat $\det A = 20 \neq 0$. Es hat genau eine Lösung, und es hätte
auch mit jeder anderen rechten Seite genau eine. **Gegenbeispiel:** Im System mit unendlich vielen Lösungen aus der Lektion 3.4 ist
die dritte Zeile von $A$ die Summe der ersten beiden. Darum ist dort $\det A = 0$, und je nach rechter Seite gab es unendlich viele
oder gar keine Lösungen.

Geometrisch im Raum: $|\det A|$ ist das Volumen des **Spats**, also des schiefen Quaders, den die drei Spalten aufspannen. In
[Kapitel 6, „Das Kreuzprodukt“](/lernen/mathe3/vektoren/das-kreuzprodukt-normalvektor-flaeche-und-volumen) berechnet man es als Betrag des Spatprodukts. Ist die Determinante $0$, liegen die drei Spalten in einer
Ebene, und der Spat ist flach.

:::pruefung[Parametersysteme mit der Determinante]
Bei einem quadratischen System **mit Parameter** ist die Determinante das schnellste Werkzeug. Berechne $\det A$ als Term im
Parameter und bestimme seine Nullstellen. Für alle anderen Parameterwerte gibt es genau eine Lösung. Die Nullstellen setzt du
einzeln ein und untersuchst sie mit dem Gauß-Verfahren. Die Determinante allein unterscheidet „keine Lösung“ und „unendlich
viele Lösungen“ **nicht**.
:::

```reflexion
frage: Warum ist die Determinante einer Matrix mit zwei gleichen Zeilen immer $0$? Begründe mit Regel 2 und auch geometrisch.
antwort: |
  Mit Regel 2: Vertauscht man die beiden gleichen Zeilen, ändert sich die Matrix nicht. Die Determinante muss aber ihr Vorzeichen
  wechseln. Also gilt $\det A = -\det A$. Das ist nur für $\det A = 0$ möglich.
  Geometrisch für $2\times 2$: Zwei gleiche Zeilen bedeuten, dass auch die Spalten in dieselbe Richtung zeigen. Das Parallelogramm ist
  flach und hat die Fläche $0$. Beim Gleichungssystem beschreiben zwei gleiche Zeilen dieselbe Bedingung zweimal, also gibt es
  nicht genug Information für genau eine Lösung.
```

### Übungen

```aufgabe
id: lm-det-2x2
titel: Eine 2×2-Determinante
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Berechne $\begin{vmatrix} -3 & 4\\ 2 & 5 \end{vmatrix}$.
teile:
  - typ: zahl
    loesung: "det([[-3,4],[2,5]])"
    anzeige: '-23'
    fehler:
      - wert: "-7"
        meldung: |
          Die beiden Produkte werden subtrahiert: $(-3)\cdot 5 - 4\cdot 2 = -15 - 8$.
      - wert: "23"
        meldung: |
          Prüfe das Vorzeichen: Hauptdiagonale $(-3)\cdot 5 = -15$, davon wird $4\cdot 2 = 8$ abgezogen.
hinweise:
  - 'Hauptdiagonale minus Nebendiagonale: $(-3)\cdot 5 - 4\cdot 2$.'
loesung: |
  Ansatz: Produkt der Hauptdiagonale minus Produkt der Nebendiagonale.
  ---
  $(-3)\cdot 5 - 4\cdot 2 = -15 - 8 = -23$.
```

```aufgabe
id: lm-det-sarrus
titel: Regel von Sarrus
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Berechne mit der Regel von Sarrus:
  $$\det\begin{pmatrix} 2 & 0 & 1\\ 1 & 3 & -2\\ 4 & 1 & 2 \end{pmatrix}$$
teile:
  - typ: zahl
    loesung: "det([[2,0,1],[1,3,-2],[4,1,2]])"
    anzeige: '5'
    fehler:
      - wert: "21"
        meldung: |
          Die Minus-Diagonalen werden **abgezogen**. Ihre Summe ist $12 - 4 + 0 = 8$, und $13 - 8 = 5$.
      - wert: "13"
        meldung: |
          Das sind nur die Plus-Diagonalen. Von ihnen wird noch die Summe der Minus-Diagonalen abgezogen.
hinweise:
  - 'Schreib die ersten beiden Spalten rechts daneben. Drei Produkte mit Plus, drei mit Minus.'
loesung: |
  Ansatz: Regel von Sarrus, erste beiden Spalten rechts anhängen.
  ---
  Plus-Diagonalen: $2\cdot 3\cdot 2 + 0\cdot(-2)\cdot 4 + 1\cdot 1\cdot 1 = 12 + 0 + 1 = 13$.
  ---
  Minus-Diagonalen: $1\cdot 3\cdot 4 + 2\cdot(-2)\cdot 1 + 0\cdot 1\cdot 2 = 12 - 4 + 0 = 8$.
  ---
  $\det = 13 - 8 = 5$.
```

```aufgabe
id: lm-dreieck-flaeche
titel: Dreiecksfläche mit der Determinante
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Berechne den Flächeninhalt des Dreiecks mit den Eckpunkten $A(-1 \mid 2)$, $B(3 \mid 1)$ und $C(1 \mid 5)$ in Flächeneinheiten.
teile:
  - typ: zahl
    label: 'Flächeninhalt $F$'
    loesung: "abs(det([[4,2],[-1,3]]))/2"
    anzeige: '7'
    fehler:
      - wert: "14"
        meldung: |
          $14$ ist die Fläche des Parallelogramms. Das Dreieck ist genau halb so groß.
      - wert: "4"
        meldung: |
          Prüfe die Vektoren: $\overrightarrow{AB} = (3 - (-1),\ 1 - 2) = (4, -1)$. Die Koordinate $-1$ wird abgezogen, also $3 + 1$.
hinweise:
  - 'Berechne $\overrightarrow{AB}$ und $\overrightarrow{AC}$ als „Endpunkt minus Anfangspunkt“.'
  - 'Schreib die beiden Vektoren als Spalten einer Matrix. Die Dreiecksfläche ist die Hälfte des Betrags der Determinante.'
loesung: |
  Ansatz: Die Determinante zweier Seitenvektoren ist die Fläche des Parallelogramms. Das Dreieck ist die Hälfte davon.
  ---
  $\overrightarrow{AB} = (3 + 1,\ 1 - 2) = (4, -1)$ und $\overrightarrow{AC} = (1 + 1,\ 5 - 2) = (2, 3)$.
  ---
  $\det\begin{pmatrix} 4 & 2\\ -1 & 3 \end{pmatrix} = 12 - (-2) = 14$. Das ist die Fläche des Parallelogramms.
  ---
  Dreieck: $F = \frac12\cdot 14 = 7$ Flächeneinheiten.
```

```aufgabe
id: lm-det-entwicklung
titel: Geschickt entwickeln
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Berechne
  $$\det\begin{pmatrix} 3 & 0 & 2\\ 1 & 0 & -1\\ 2 & 5 & 4 \end{pmatrix}$$
  durch Entwicklung nach einer geeigneten Spalte.
teile:
  - typ: zahl
    loesung: "det([[3,0,2],[1,0,-1],[2,5,4]])"
    anzeige: '25'
    fehler:
      - wert: "-25"
        meldung: |
          Prüfe das Schachbrett-Vorzeichen: Der Eintrag $5$ steht in Zeile $3$, Spalte $2$. Dort gilt das Vorzeichen $-$. Und die
          Unterdeterminante ist selbst negativ.
      - wert: "-5"
        meldung: |
          Das ist nur die Unterdeterminante. Sie wird noch mit dem Eintrag $5$ und dem Vorzeichen $-$ multipliziert.
hinweise:
  - 'Die zweite Spalte enthält zwei Nullen. Entwickle nach ihr.'
  - 'Der Eintrag $5$ steht an der Position Zeile 3, Spalte 2. Das Vorzeichen im Schachbrett ist dort $-$.'
gefuehrt:
  - text: 'Nach welcher Spalte entwickelst du am besten? Gib die Nummer an.'
    teil:
      typ: zahl
      loesung: "2"
    erklaerung: 'Die zweite Spalte $(0, 0, 5)$ enthält zwei Nullen. Nur ein Summand bleibt übrig.'
  - text: 'Streiche Zeile 3 und Spalte 2. Welchen Wert hat die übrige $2\times 2$-Determinante?'
    teil:
      typ: zahl
      loesung: "det([[3,2],[1,-1]])"
      fehler:
        - wert: "-1"
          meldung: 'Hauptdiagonale minus Nebendiagonale: $3\cdot(-1) - 2\cdot 1 = -3 - 2$.'
    erklaerung: '$\begin{vmatrix} 3 & 2\\ 1 & -1 \end{vmatrix} = -3 - 2 = -5$.'
  - text: 'Welches Vorzeichen hat die Position Zeile 3, Spalte 2 im Schachbrettmuster? Gib $1$ für Plus oder $-1$ für Minus ein.'
    teil:
      typ: zahl
      loesung: "-1"
      fehler:
        - wert: "1"
          meldung: 'Die dritte Zeile lautet $+, -, +$. In der Mitte steht ein Minus.'
    erklaerung: 'Das Vorzeichen ist $-$.'
  - text: 'Setze zusammen: Vorzeichen mal Eintrag mal Unterdeterminante. Welche Determinante ergibt sich?'
    teil:
      typ: zahl
      loesung: "-5*(-5)"
    erklaerung: '$-5\cdot(-5) = 25$.'
loesung: |
  Ansatz: Entwicklung nach der Spalte mit den meisten Nullen. Das ist die zweite Spalte.
  ---
  Nur der Eintrag $a_{32} = 5$ ist nicht $0$. Sein Vorzeichen im Schachbrett ist $-$.
  ---
  Zeile 3 und Spalte 2 streichen: $\begin{vmatrix} 3 & 2\\ 1 & -1 \end{vmatrix} = -3 - 2 = -5$.
  ---
  $\det = -5\cdot(-5) = 25$. Kontrolle mit Sarrus: Plus-Diagonalen $0 + 0 + 10 = 10$, Minus-Diagonalen $0 - 15 + 0 = -15$, also $10 - (-15) = 25$.
```

```aufgabe
id: lm-det-eigenschaften
titel: Rechenregeln anwenden
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Für eine $3\times 3$-Matrix $A$ gilt $\det A = -2$. Bestimme ohne weitere Information:
teile:
  - typ: zahl
    label: '$\det(3A)$'
    loesung: "3^3*(-2)"
    anzeige: '-54'
    fehler:
      - wert: "-6"
        meldung: |
          Bei $3A$ wird **jede** der drei Zeilen mit $3$ multipliziert. Jede Zeile bringt einen Faktor $3$, also $3^3 = 27$.
  - typ: zahl
    label: '$\det(A^T)$'
    loesung: "-2"
    fehler:
      - wert: "2"
        meldung: |
          Transponieren ändert die Determinante nicht, auch nicht ihr Vorzeichen.
  - typ: zahl
    label: '$\det(A^{-1})$'
    loesung: "1/(-2)"
    anzeige: '-\tfrac12'
    fehler:
      - wert: "2"
        meldung: |
          Es gilt $\det(A^{-1}) = \frac{1}{\det A}$, also der Kehrwert von $-2$. Das Vorzeichen bleibt.
  - typ: zahl
    label: '$\det(A^2)$'
    loesung: "(-2)^2"
    anzeige: '4'
    fehler:
      - wert: "-4"
        meldung: |
          Produktsatz: $\det(A\cdot A) = \det A\cdot\det A = (-2)\cdot(-2)$. Minus mal Minus ergibt Plus.
  - typ: zahl
    label: 'Determinante, nachdem die ersten beiden Zeilen von $A$ vertauscht wurden'
    loesung: "2"
    fehler:
      - wert: "-2"
        meldung: |
          Ein Zeilentausch kehrt das Vorzeichen um.
hinweise:
  - '$3A$ heißt: **jede** der drei Zeilen wird mit $3$ multipliziert.'
  - 'Produktsatz: $\det(AB) = \det A\cdot\det B$. Daraus folgen $\det(A^2)$ und $\det(A^{-1})$.'
loesung: |
  Ansatz: Rechenregeln für Determinanten. Man braucht dafür nur $\det A = -2$.
  ---
  $\det(3A) = 3^3\cdot\det A = 27\cdot(-2) = -54$, weil jede der drei Zeilen den Faktor $3$ beiträgt.
  ---
  $\det(A^T) = \det A = -2$. $\;\det(A^{-1}) = \frac{1}{-2} = -\frac12$.
  ---
  $\det(A^2) = (-2)^2 = 4$. Ein Zeilentausch kehrt das Vorzeichen um: $-(-2) = 2$.
```

```aufgabe
id: lm-det-loesbarkeit
titel: Genau eine Lösung oder nicht?
niveau: 2
lernziel: 7
kompetenz: verstehen
angabe: |
  Entscheide mit der Determinante, ob das System für **jede** rechte Seite genau eine Lösung hat.

  (i) $\;x + 2y + z = b_1,\quad 2x + y - z = b_2,\quad 3x + 3y = b_3$

  (ii) $\;x + 2y + z = b_1,\quad 2x + y - z = b_2,\quad x + 2z = b_3$
teile:
  - typ: zahl
    label: '(i) $\det A$'
    loesung: "det([[1,2,1],[2,1,-1],[3,3,0]])"
    anzeige: '0'
    fehler:
      - wert: "6"
        meldung: |
          Prüfe mit Sarrus. Einfacher: Die dritte Zeile $(3, 3, 0)$ ist die Summe der ersten beiden. Dann ist die Determinante $0$.
  - typ: auswahl
    label: '(i) Gibt es für jede rechte Seite genau eine Lösung?'
    optionen: ['ja', 'nein']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Bei $\det A = 0$ gibt es je nach rechter Seite keine oder unendlich viele Lösungen, nie genau eine.
  - typ: zahl
    label: '(ii) $\det A$'
    loesung: "det([[1,2,1],[2,1,-1],[1,0,2]])"
    anzeige: '-9'
    fehler:
      - wert: "9"
        meldung: |
          Prüfe das Vorzeichen. Plus-Diagonalen: $2 - 2 + 0 = 0$. Minus-Diagonalen: $1 + 0 + 8 = 9$. Also $0 - 9$.
  - typ: auswahl
    label: '(ii) Gibt es für jede rechte Seite genau eine Lösung?'
    optionen: ['ja', 'nein']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Ist $\det A \neq 0$, ist $A$ invertierbar, und $\vec x = A^{-1}\vec b$ ist für jedes $\vec b$ die einzige Lösung.
hinweise:
  - 'Berechne die Determinante der Koeffizientenmatrix mit Sarrus.'
  - 'Hauptsatz: genau eine Lösung für jede rechte Seite genau dann, wenn $\det A \neq 0$.'
loesung: |
  Ansatz: Nach dem Hauptsatz entscheidet allein $\det A$, ob es für jede rechte Seite genau eine Lösung gibt.
  ---
  (i) Plus-Diagonalen: $0 - 6 + 6 = 0$. Minus-Diagonalen: $3 - 3 + 0 = 0$. Also $\det A = 0$. Die dritte Zeile ist die Summe der ersten beiden. **Nein**: je nach rechter Seite keine oder unendlich viele Lösungen.
  ---
  (ii) Plus-Diagonalen: $1\cdot 1\cdot 2 + 2\cdot(-1)\cdot 1 + 1\cdot 2\cdot 0 = 0$. Minus-Diagonalen: $1\cdot 1\cdot 1 + 1\cdot(-1)\cdot 0 + 2\cdot 2\cdot 2 = 9$.
  ---
  Also $\det A = -9 \neq 0$. **Ja**: Für jede rechte Seite gibt es genau eine Lösung.
```

```aufgabe
id: lm-det-parameter
titel: Für welche k ist die Matrix singulär?
niveau: 3
lernziel: 7
kompetenz: anwenden
angabe: |
  Für welche reellen Zahlen $k$ ist die Matrix
  $$A = \begin{pmatrix} k & 1 & 0\\ 1 & k & 1\\ 0 & 1 & k \end{pmatrix}$$
  nicht invertierbar? Gib die Werte exakt an, zum Beispiel `sqrt(2)`.
teile:
  - typ: term
    label: '$\det A$ als Term in $k$'
    variable: k
    loesung: "k^3 - 2k"
    fehler:
      - wert: "k^3 - k"
        meldung: |
          Es gibt zwei Minus-Diagonalen, die nicht $0$ sind: $k\cdot 1\cdot 1$ und $1\cdot 1\cdot k$. Beide werden abgezogen.
      - wert: "k^3"
        meldung: |
          Das ist nur die Hauptdiagonale. Ziehe noch die Minus-Diagonalen $k\cdot 1\cdot 1$ und $1\cdot 1\cdot k$ ab.
  - typ: menge
    label: 'alle $k$ mit $\det A = 0$'
    loesung: ["0", "sqrt(2)", "-sqrt(2)"]
    fehler:
      - wert: ["sqrt(2)", "-sqrt(2)"]
        meldung: |
          $k^3 - 2k = k\,(k^2 - 2)$. Auch der Faktor $k$ kann $0$ sein. Das liefert eine dritte Lösung.
      - wert: ["0", "2", "-2"]
        meldung: |
          Aus $k^2 = 2$ folgt $k = \pm\sqrt2$, nicht $\pm 2$.
hinweise:
  - 'Sarrus: Plus-Diagonalen $k\cdot k\cdot k + 1\cdot 1\cdot 0 + 0\cdot 1\cdot 1$, Minus-Diagonalen $0\cdot k\cdot 0 + k\cdot 1\cdot 1 + 1\cdot 1\cdot k$.'
  - 'Hebe $k$ heraus: $k^3 - 2k = k\,(k^2 - 2)$. Ein Produkt ist $0$, wenn ein Faktor $0$ ist.'
loesung: |
  Ansatz: $A$ ist genau dann nicht invertierbar, wenn $\det A = 0$. Wir berechnen $\det A$ als Term in $k$.
  ---
  Sarrus: Plus-Diagonalen $k^3 + 0 + 0 = k^3$. Minus-Diagonalen $0 + k + k = 2k$. Also $\det A = k^3 - 2k$.
  ---
  Faktorisieren: $k^3 - 2k = k\,(k^2 - 2)$. Null genau dann, wenn $k = 0$ oder $k^2 = 2$, also $k = \sqrt2$ oder $k = -\sqrt2$.
  ---
  Ergebnis: $A$ ist für $k \in \{0,\ \sqrt2,\ -\sqrt2\}$ singulär und für alle anderen $k$ invertierbar. Kontrolle für $k = 0$: Die erste und die dritte Zeile $(0, 1, 0)$ sind gleich, also ist die Determinante $0$.
```

## Cramersche Regel und Gleichungssysteme mit Parameter

```aufgabe
id: lm-check-det-vorbereiten
titel: Eine Determinante zum Aufwärmen
niveau: 1
art: check
angabe: |
  Berechne $\begin{vmatrix} 2 & -1\\ 3 & 4 \end{vmatrix}$.
  Herkunft: [3.9 Determinanten](/lernen/mathe3/lgs-matrizen/determinanten).
teile:
  - typ: zahl
    loesung: "2*4 - (-1)*3"
    anzeige: '11'
    fehler:
      - wert: "5"
        meldung: |
          Abgezogen wird $(-1)\cdot 3 = -3$. Minus minus ergibt plus: $8 - (-3) = 8 + 3$.
hinweise:
  - 'Hauptdiagonale minus Nebendiagonale: $2\cdot 4 - (-1)\cdot 3$.'
loesung: |
  Hauptdiagonale: $2\cdot 4 = 8$. Nebendiagonale: $(-1)\cdot 3 = -3$.
  ---
  $8 - (-3) = 11$.
```

In der Lektion [3.2 Systeme mit zwei Unbekannten](/lernen/mathe3/lgs-matrizen/systeme-mit-zwei-unbekannten) haben wir die
Lösung eines Systems mit zwei Unbekannten als Formel hergeleitet. Mit Determinanten geschrieben sieht diese Formel sehr
regelmäßig aus. Genau so funktioniert sie auch für drei Unbekannte. Sie heißt **Cramersche Regel**, nach dem Schweizer
Mathematiker Gabriel Cramer. Im zweiten Teil der Lektion diskutieren wir Systeme, in denen statt einer Zahl ein Buchstabe
steht, ein **Parameter**.

### Die Cramersche Regel

:::satz[Cramersche Regel]
Gegeben ist ein System $A\vec x = \vec b$ mit gleich vielen Gleichungen wie Unbekannten, und es sei $D = \det A \neq 0$. Man
bildet für jede Unbekannte eine neue Matrix: Man **ersetzt die Spalte dieser Unbekannten durch die rechte Seite** $\vec b$. Ihre
Determinante heißt $D_x$, $D_y$ oder $D_z$. Dann ist die eindeutige Lösung
$$x = \frac{D_x}{D}, \qquad y = \frac{D_y}{D}, \qquad z = \frac{D_z}{D}.$$
:::

Bei zwei Unbekannten sind das genau die Formeln aus der Lektion 3.2. Dort hieß $D = a_1b_2 - a_2b_1$, und der Zähler von $x$ war
$c_1b_2 - c_2b_1$. Das ist die Determinante, in der die $x$-Spalte durch die rechten Seiten $c_1, c_2$ ersetzt wurde.

:::beispiel[Cramer für zwei Unbekannte]
Löse $3x + 2y = 7$ und $x - 4y = 7$.

1. $D = \begin{vmatrix} 3 & 2\\ 1 & -4 \end{vmatrix} = -12 - 2 = -14$. Weil $D \neq 0$ ist, gibt es genau eine Lösung.
2. Für $D_x$ wird die $x$-Spalte $(3, 1)$ durch die rechte Seite $(7, 7)$ ersetzt: $D_x = \begin{vmatrix} 7 & 2\\ 7 & -4 \end{vmatrix} = -28 - 14 = -42$.
3. Für $D_y$ wird die $y$-Spalte ersetzt: $D_y = \begin{vmatrix} 3 & 7\\ 1 & 7 \end{vmatrix} = 21 - 7 = 14$.
4. $x = \frac{-42}{-14} = 3$ und $y = \frac{14}{-14} = -1$. Probe: $9 - 2 = 7$ und $3 + 4 = 7$.
:::

:::achtung[Die falsche Spalte ersetzen]
**Falsch:** Für $D_x$ im Beispiel $3x + 2y = 7$, $x - 4y = 7$ ersetzt jemand die erste **Zeile** durch die rechte Seite:
$\begin{vmatrix} 7 & 7\\ 1 & -4 \end{vmatrix} = -35$. Dann ergibt sich $x = \frac{-35}{-14} = 2{,}5$, und die Probe schlägt fehl.

**Richtig:** Ersetzt wird die **Spalte**, die zur gesuchten Unbekannten gehört. Für $x$ ist das die erste Spalte $(3, 1)$:
$D_x = \begin{vmatrix} 7 & 2\\ 7 & -4 \end{vmatrix} = -42$.
:::

:::beispiel[Cramer für drei Unbekannte: Maschinenzeiten]
Drei Produkte $P_1, P_2, P_3$ laufen über drei Maschinen. Ein Stück von $P_1$, $P_2$, $P_3$ braucht auf Maschine 1 der Reihe
nach $1$, $2$ und $1$ Minute. Auf Maschine 2 sind es $3$, $1$ und $2$ Minuten, auf Maschine 3 sind es $2$, $1$ und $3$ Minuten.
Zur Verfügung stehen $65$, $80$ und $85$ Minuten. Wie viele Stück jedes Produkts kann man bei voller Auslastung fertigen?

1. **Ansatz:** $x, y, z$ seien die Stückzahlen. Jede Maschine liefert eine Gleichung:
   $x + 2y + z = 65$, $\;3x + y + 2z = 80$, $\;2x + y + 3z = 85$.
2. **$D$ mit Sarrus:** $D = \begin{vmatrix} 1 & 2 & 1\\ 3 & 1 & 2\\ 2 & 1 & 3 \end{vmatrix} = (3 + 8 + 3) - (2 + 2 + 18) = 14 - 22 = -8$.
3. **$D_x$**, erste Spalte durch $(65, 80, 85)$ ersetzt:
   $D_x = \begin{vmatrix} 65 & 2 & 1\\ 80 & 1 & 2\\ 85 & 1 & 3 \end{vmatrix} = (195 + 340 + 80) - (85 + 130 + 480) = 615 - 695 = -80$.
4. Genauso: $D_y = 755 - 915 = -160$ und $D_z = 600 - 720 = -120$.
5. **Lösung:** $x = \frac{-80}{-8} = 10$, $y = \frac{-160}{-8} = 20$, $z = \frac{-120}{-8} = 15$.
6. **Probe** auf Maschine 2: $3\cdot 10 + 20 + 2\cdot 15 = 80$. Antwort: $10$ Stück $P_1$, $20$ Stück $P_2$ und $15$ Stück $P_3$.
:::

```aufgabe
id: lm-check-cramer-spalte
titel: Welche Spalte wird ersetzt?
niveau: 1
art: check
angabe: |
  Im System $2x + 5y - z = 4$, $\;x - y + 3z = 1$, $\;4x + 2y + z = 0$ soll nur $z$ mit der Cramerschen Regel berechnet werden.
  Welche Matrix gehört zu $D_z$?
teile:
  - typ: auswahl
    optionen:
      - '$\begin{pmatrix} 2 & 5 & 4\\ 1 & -1 & 1\\ 4 & 2 & 0 \end{pmatrix}$'
      - '$\begin{pmatrix} 4 & 5 & -1\\ 1 & -1 & 3\\ 0 & 2 & 1 \end{pmatrix}$'
      - '$\begin{pmatrix} 2 & 5 & -1\\ 1 & -1 & 3\\ 4 & 1 & 0 \end{pmatrix}$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Hier wurde die **erste** Spalte ersetzt. Das gehört zu $D_x$. Für $D_z$ wird die dritte Spalte, die $z$-Spalte, ersetzt.
      - wert: 2
        meldung: |
          Hier wurde die **letzte Zeile** ersetzt. Bei Cramer ersetzt man immer eine **Spalte**.
hinweise:
  - 'Die $z$-Spalte ist die dritte Spalte der Koeffizientenmatrix: $(-1, 3, 1)$.'
loesung: |
  Für $D_z$ wird die $z$-Spalte $(-1, 3, 1)$ durch die rechte Seite $(4, 1, 0)$ ersetzt.
  ---
  Die erste und die zweite Spalte bleiben unverändert.
```

:::beweis[Warum die Cramersche Regel stimmt]
Wir zeigen es für $x$ bei drei Unbekannten. Die Spalten von $A$ heißen $\vec a_1, \vec a_2, \vec a_3$. Das System
$A\vec x = \vec b$ bedeutet spaltenweise gelesen $x\,\vec a_1 + y\,\vec a_2 + z\,\vec a_3 = \vec b$.

1. In $D_x$ steht $\vec b$ an der Stelle der ersten Spalte. Wir ersetzen $\vec b$ durch $x\,\vec a_1 + y\,\vec a_2 + z\,\vec a_3$.
2. Die Determinante verträgt sich in jeder Spalte mit Summen und Vielfachen. Das sieht man an der Entwicklung nach dieser Spalte:
   Jeder Summand enthält genau einen Eintrag der Spalte als Faktor. Also zerfällt $D_x$ in drei Teile:
   $x\cdot\det(\vec a_1, \vec a_2, \vec a_3) + y\cdot\det(\vec a_2, \vec a_2, \vec a_3) + z\cdot\det(\vec a_3, \vec a_2, \vec a_3)$.
3. Die letzten beiden Determinanten haben zwei gleiche Spalten. Sie sind deshalb $0$.
4. Es bleibt $D_x = x\cdot D$. Weil $D \neq 0$ ist, darf man teilen: $x = \frac{D_x}{D}$.
:::

Der Beweis zeigt nebenbei: **Wenn** das System eine Lösung hat, gilt $D_x = x\cdot D$, auch wenn $D = 0$ ist. Daraus folgt eine
nützliche Regel. Ist $D = 0$, aber eines der $D_x, D_y, D_z$ ungleich $0$, dann hat das System **keine** Lösung. Denn sonst wäre
dieses $D_x = x\cdot 0 = 0$.

:::achtung[Der Umkehrschluss ist falsch]
**Falsch:** „$D = D_x = D_y = D_z = 0$, also hat das System unendlich viele Lösungen.“

**Richtig:** Gegenbeispiel: die drei parallelen Ebenen $x + y + z = 1$, $x + y + z = 2$, $x + y + z = 3$. Alle vier Determinanten
sind $0$, denn jede Matrix hat mindestens zwei gleiche Spalten. Trotzdem gibt es keine Lösung. Ist $D = 0$, entscheidet immer das
Gauß-Verfahren.
:::

```aufgabe
id: lm-check-alle-null
titel: Alle Determinanten sind null
niveau: 1
art: check
angabe: |
  Bei einem System mit drei Unbekannten ist $D = D_x = D_y = D_z = 0$. Was weißt du sicher über die Lösungsmenge?
teile:
  - typ: auswahl
    optionen:
      - 'Es gibt nicht genau eine Lösung. Ob keine oder unendlich viele, entscheidet erst das Gauß-Verfahren.'
      - 'Es gibt sicher unendlich viele Lösungen.'
      - 'Es gibt sicher keine Lösung.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Gegenbeispiel: $x + y + z = 1$, $x + y + z = 2$, $x + y + z = 3$. Alle vier Determinanten sind $0$, aber es gibt keine Lösung.
      - wert: 2
        meldung: |
          Gegenbeispiel: $x + y + z = 1$, $2x + 2y + 2z = 2$, $3x + 3y + 3z = 3$. Alle Determinanten sind $0$, und jede Lösung der ersten
          Gleichung löst alle drei. Es gibt unendlich viele Lösungen.
hinweise:
  - 'Denk an drei parallele Ebenen und an drei gleiche Ebenen. Was ergeben dort die Determinanten?'
loesung: |
  Aus $D = 0$ folgt nur: Genau eine Lösung gibt es nicht.
  ---
  Bei drei parallelen, verschiedenen Ebenen und bei drei identischen Ebenen sind alle vier Determinanten $0$. Im ersten Fall gibt es keine, im zweiten unendlich viele Lösungen. Entscheiden kann nur das Gauß-Verfahren.
```

:::tipp[Cramer oder Gauß?]
Für ein konkretes System mit drei Unbekannten ist Gauß meist schneller. Cramer braucht vier Determinanten mit je sechs Produkten.
Cramer lohnt sich bei zwei Unbekannten, bei Systemen mit **Parameter** und wenn nur **eine** Unbekannte gefragt ist. Dann braucht
man nur $D$ und eine weitere Determinante.
:::

### Gleichungssysteme mit Parameter

In vielen Prüfungsaufgaben steht in einem System ein Buchstabe, etwa $a$. Er heißt **Parameter**. Für jeden Wert von $a$ ist es
ein anderes System. Gefragt ist: Für welche Werte von $a$ gibt es genau eine, keine oder unendlich viele Lösungen? So eine
vollständige Untersuchung heißt **Fallunterscheidung** oder **Diskussion** des Systems.

:::beispiel[Ein System mit Parameter und zwei Unbekannten]
Untersuche $a\,x + y = 2$ und $4x + a\,y = 4$.

1. **Determinante:** $D = a\cdot a - 1\cdot 4 = a^2 - 4 = (a - 2)(a + 2)$. Sie ist $0$ genau für $a = 2$ und $a = -2$.
2. **Allgemeiner Fall** $a \neq 2$ und $a \neq -2$: genau eine Lösung. Mit Cramer: $D_x = \begin{vmatrix} 2 & 1\\ 4 & a \end{vmatrix} = 2a - 4 = 2(a - 2)$
   und $D_y = \begin{vmatrix} a & 2\\ 4 & 4 \end{vmatrix} = 4a - 8 = 4(a - 2)$. Kürzen mit $a - 2$ ist erlaubt, weil $a \neq 2$:
   $x = \frac{2(a - 2)}{(a - 2)(a + 2)} = \frac{2}{a + 2}$ und $y = \frac{4}{a + 2}$.
3. **Sonderfall $a = 2$:** $2x + y = 2$ und $4x + 2y = 4$. Die zweite Gleichung ist das Doppelte der ersten. Es bleibt eine
   Gleichung für zwei Unbekannte: **unendlich viele** Lösungen. Geometrisch fallen die beiden Geraden zusammen.
4. **Sonderfall $a = -2$:** $-2x + y = 2$ und $4x - 2y = 4$. Die zweite Gleichung mal $-\frac12$ ergibt $-2x + y = -2$. Das
   widerspricht der ersten: **keine** Lösung. Geometrisch sind die Geraden parallel und verschieden.
5. **Kontrolle** für $a = 0$: Die Formel liefert $x = 1$ und $y = 2$. Im System: $0 + 2 = 2$ und $4 + 0 = 4$.
:::

:::merke[Systeme mit Parameter diskutieren]
1. $D = \det A$ als Term im Parameter berechnen und **faktorisieren**.
2. Die Nullstellen von $D$ sind die **Sonderwerte**. Für alle anderen Werte gibt es genau eine Lösung. Sie lässt sich mit
   Cramer als Formel angeben.
3. Jeden Sonderwert **einzeln** einsetzen und mit Gauß untersuchen: Widerspruch heißt keine Lösung, Nullzeile ohne Widerspruch
   heißt unendlich viele.
4. Geometrisch deuten: Geraden oder Ebenen schneiden sich, sind parallel oder fallen zusammen.
:::

:::beispiel[Ein System mit Parameter und drei Unbekannten]
Untersuche $x + y + z = 1$, $\;x + 2y + a\,z = 2$, $\;x + a\,y + 2z = 0$.

1. **Determinante** mit Sarrus: $D = (4 + a + a) - (2 + a^2 + 2) = 2a - a^2 = a\,(2 - a)$. Sonderwerte: $a = 0$ und $a = 2$.
2. **Allgemeiner Fall:** Für $a \neq 0$ und $a \neq 2$ gibt es genau eine Lösung. Die drei Ebenen schneiden sich in einem Punkt.
   Für $a = 1$ ist das zum Beispiel $(1, 1, -1)$. Probe: $1 + 1 - 1 = 1$, dann $1 + 2 - 1 = 2$, dann $1 + 1 - 2 = 0$.
3. **Sonderfall $a = 0$:** $\text{II} - \text{I}$ ergibt $(0,\ 1,\ -1 \mid 1)$, $\text{III} - \text{I}$ ergibt $(0,\ -1,\ 1 \mid -1)$.
   Die beiden Zeilen sind Gegenzeilen. Ihre Summe ist eine Nullzeile ohne Widerspruch: **unendlich viele** Lösungen, die Ebenen
   bilden ein Büschel um eine Gerade.
4. **Sonderfall $a = 2$:** Die zweite und die dritte Gleichung haben dieselbe linke Seite $x + 2y + 2z$, aber die rechten Seiten
   $2$ und $0$. Die beiden Ebenen sind parallel und verschieden: **keine** Lösung.
:::

:::achtung[Kürzen ohne Fallunterscheidung]
**Falsch:** Im Beispiel mit zwei Unbekannten kürzt jemand sofort $x = \frac{2(a - 2)}{(a - 2)(a + 2)} = \frac{2}{a + 2}$ und schließt:
„Für $a = 2$ ist $x = \frac12$. Es gibt eine eindeutige Lösung.“

**Richtig:** Kürzen durch $a - 2$ ist nur für $a \neq 2$ erlaubt, denn durch $0$ darf man nicht teilen. Für $a = 2$ muss man das
System getrennt untersuchen. Dort gibt es unendlich viele Lösungen, nicht nur eine.
:::

```reflexion
frage: Warum genügt die Determinante nicht, um bei einem Sonderwert zu entscheiden, ob es keine oder unendlich viele Lösungen gibt?
antwort: |
  Die Determinante hängt nur von der Koeffizientenmatrix $A$ ab, also von den linken Seiten. Ob es keine oder unendlich viele Lösungen
  gibt, hängt aber auch von den rechten Seiten ab. Im Bild: $D = 0$ heißt, dass die Geraden oder Ebenen eine besondere Lage haben,
  etwa parallel sind. Ob sie dann zusammenfallen oder getrennt liegen, entscheidet erst die rechte Seite. Darum setzt man den
  Sonderwert ein und rechnet mit Gauß weiter.
```

### Übungen

```aufgabe
id: lm-cramer-2x2
titel: Cramer für zwei Unbekannte
niveau: 1
lernziel: 8
kompetenz: rechnen
angabe: |
  Löse mit der Cramerschen Regel:
  $$\begin{aligned} 2x + 5y &= 1\\ 3x - 2y &= 11 \end{aligned}$$
teile:
  - typ: zahl
    label: '$D$'
    loesung: "det([[2,5],[3,-2]])"
    anzeige: '-19'
    fehler:
      - wert: "11"
        meldung: |
          Die Produkte werden subtrahiert: $2\cdot(-2) - 5\cdot 3 = -4 - 15$.
  - typ: vektor
    label: 'Lösung $(x, y)$'
    namen: ["x", "y"]
    loesung: ["det([[1,5],[11,-2]])/det([[2,5],[3,-2]])", "det([[2,1],[3,11]])/det([[2,5],[3,-2]])"]
    fehler:
      - wert: ["-3", "1"]
        meldung: |
          Prüfe die Vorzeichen: $D_x = -57$ und $D = -19$, also $x = \frac{-57}{-19} = +3$.
hinweise:
  - 'Für $D_x$ ersetzt du die $x$-Spalte $(2, 3)$ durch die rechte Seite $(1, 11)$.'
loesung: |
  Ansatz: Cramersche Regel. Zuerst $D$ berechnen, dann je eine Spalte durch die rechte Seite ersetzen.
  ---
  $D = 2\cdot(-2) - 5\cdot 3 = -19 \neq 0$, also gibt es genau eine Lösung.
  ---
  $D_x = \begin{vmatrix} 1 & 5\\ 11 & -2 \end{vmatrix} = -2 - 55 = -57$ und $D_y = \begin{vmatrix} 2 & 1\\ 3 & 11 \end{vmatrix} = 22 - 3 = 19$.
  ---
  $x = \frac{-57}{-19} = 3$ und $y = \frac{19}{-19} = -1$. Probe: $6 - 5 = 1$ und $9 + 2 = 11$.
```

```aufgabe
id: lm-cramer-eine-variable
titel: Nur eine Unbekannte berechnen
niveau: 1
lernziel: 8
kompetenz: rechnen
angabe: |
  Berechne für das System
  $$\begin{aligned} 2x + y - z &= 0\\ x + 3y + 2z &= 5\\ 3x - y + z &= 10 \end{aligned}$$
  nur die Unbekannte $z$ mit der Cramerschen Regel. Es gilt $D = 25$.
teile:
  - typ: zahl
    label: '$D_z$'
    loesung: "det([[2,1,0],[1,3,5],[3,-1,10]])"
    anzeige: '75'
    fehler:
      - wert: "50"
        meldung: |
          Das ist $D_x$. Für $D_z$ wird die **dritte** Spalte $(-1, 2, 1)$ durch $(0, 5, 10)$ ersetzt.
  - typ: zahl
    label: '$z$'
    loesung: "75/25"
    anzeige: '3'
    fehler:
      - wert: "1/3"
        meldung: |
          Es gilt $z = \frac{D_z}{D}$. Die Determinante mit der ersetzten Spalte steht im Zähler.
hinweise:
  - 'Ersetze in der Koeffizientenmatrix die $z$-Spalte $(-1, 2, 1)$ durch die rechte Seite $(0, 5, 10)$.'
loesung: |
  Ansatz: Für eine einzelne Unbekannte braucht man nur $D$ und die passende Determinante $D_z$.
  ---
  $D_z = \begin{vmatrix} 2 & 1 & 0\\ 1 & 3 & 5\\ 3 & -1 & 10 \end{vmatrix}$. Plus-Diagonalen: $60 + 15 + 0 = 75$. Minus-Diagonalen: $0 - 10 + 10 = 0$. Also $D_z = 75$.
  ---
  $z = \frac{75}{25} = 3$. Zur Kontrolle: Das ganze System hat die Lösung $(2, -1, 3)$, etwa $4 - 1 - 3 = 0$.
```

```aufgabe
id: lm-cramer-3x3
titel: Cramer für drei Unbekannte
niveau: 2
lernziel: 8
kompetenz: rechnen
angabe: |
  Löse mit der Cramerschen Regel:
  $$\begin{aligned} x + 2y - z &= 3\\ 2x - y + z &= 7\\ x + y + 2z &= 8 \end{aligned}$$
teile:
  - typ: zahl
    label: '$D$'
    loesung: "det([[1,2,-1],[2,-1,1],[1,1,2]])"
    anzeige: '-12'
    fehler:
      - wert: "8"
        meldung: |
          Die Minus-Diagonalen werden abgezogen. Plus-Diagonalen: $-2 + 2 - 2 = -2$. Minus-Diagonalen: $1 + 1 + 8 = 10$. Also $-2 - 10$.
  - typ: vektor
    label: 'Lösung $(x, y, z)$'
    namen: ["x", "y", "z"]
    loesung: ["3", "1", "2"]
    fehler:
      - wert: ["-3", "-1", "-2"]
        meldung: |
          Prüfe die Vorzeichen: Zähler und Nenner sind beide negativ, zum Beispiel $x = \frac{-36}{-12} = 3$.
hinweise:
  - 'Berechne $D$ mit Sarrus. Ersetze dann nacheinander die erste, zweite und dritte Spalte durch $(3, 7, 8)$.'
  - 'Zur Kontrolle: $D_x = -36$, $D_y = -12$ und $D_z = -24$.'
loesung: |
  Ansatz: Cramersche Regel mit vier $3\times 3$-Determinanten, jeweils mit Sarrus.
  ---
  $D$: Plus-Diagonalen $1\cdot(-1)\cdot 2 + 2\cdot 1\cdot 1 + (-1)\cdot 2\cdot 1 = -2$. Minus-Diagonalen $(-1)(-1)\cdot 1 + 1\cdot 1\cdot 1 + 2\cdot 2\cdot 2 = 10$. Also $D = -12$.
  ---
  $D_x = \begin{vmatrix} 3 & 2 & -1\\ 7 & -1 & 1\\ 8 & 1 & 2 \end{vmatrix} = 3 - 39 = -36$, $\;D_y = \begin{vmatrix} 1 & 3 & -1\\ 2 & 7 & 1\\ 1 & 8 & 2 \end{vmatrix} = 1 - 13 = -12$.
  ---
  $D_z = \begin{vmatrix} 1 & 2 & 3\\ 2 & -1 & 7\\ 1 & 1 & 8 \end{vmatrix} = 12 - 36 = -24$.
  ---
  $x = \frac{-36}{-12} = 3$, $y = \frac{-12}{-12} = 1$, $z = \frac{-24}{-12} = 2$. Probe: $3 + 2 - 2 = 3$, dann $6 - 1 + 2 = 7$, dann $3 + 1 + 4 = 8$.
```

```aufgabe
id: lm-cramer-d-null
titel: Wenn D gleich null ist
niveau: 2
lernziel: 8
kompetenz: begruenden
angabe: |
  Gegeben ist das System $2x + 3y = 5$ und $4x + 6y = 7$.

  a) Berechne $D$ und $D_x$.

  b) Was folgt daraus für die Lösungsmenge?
teile:
  - typ: zahl
    label: 'a) $D$'
    loesung: "det([[2,3],[4,6]])"
    anzeige: '0'
    fehler:
      - wert: "24"
        meldung: 'Die Produkte werden subtrahiert: $2\cdot 6 - 3\cdot 4 = 12 - 12$.'
  - typ: zahl
    label: 'a) $D_x$'
    loesung: "det([[5,3],[7,6]])"
    anzeige: '9'
    fehler:
      - wert: "51"
        meldung: 'Auch hier wird subtrahiert: $5\cdot 6 - 3\cdot 7 = 30 - 21$.'
  - typ: auswahl
    label: 'b)'
    optionen:
      - 'Das System hat keine Lösung.'
      - 'Das System hat unendlich viele Lösungen.'
      - 'Das System hat genau eine Lösung.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Hätte das System eine Lösung, müsste $D_x = x\cdot D = x\cdot 0 = 0$ sein. Es ist aber $D_x = 9 \neq 0$.
      - wert: 2
        meldung: |
          Genau eine Lösung gibt es nur bei $D \neq 0$. Hier ist $D = 0$.
hinweise:
  - 'Für $D_x$ ersetzt du die $x$-Spalte $(2, 4)$ durch die rechte Seite $(5, 7)$.'
  - 'Wenn das System eine Lösung hätte, gälte $D_x = x\cdot D$. Was folgt bei $D = 0$ und $D_x \neq 0$?'
loesung: |
  Ansatz: Für jede Lösung gilt $D_x = x\cdot D$. Damit prüfen wir, ob es überhaupt eine Lösung geben kann.
  ---
  a) $D = 12 - 12 = 0$ und $D_x = 30 - 21 = 9$.
  ---
  b) Wäre $(x, y)$ eine Lösung, müsste $9 = x\cdot 0 = 0$ gelten. Das ist unmöglich. Also gibt es **keine** Lösung.
  ---
  Kontrolle: Die erste Gleichung mal $2$ ergibt $4x + 6y = 10 \neq 7$. Die Geraden sind parallel und verschieden.
```

```aufgabe
id: lm-parameter-gauss
titel: Ein Parameter, mit Gauß untersucht
niveau: 2
lernziel: 8
kompetenz: anwenden
angabe: |
  Gegeben ist das System $x + 2y = 3$ und $2x + a\,y = 6$ mit einem reellen Parameter $a$.

  a) Für welchen Wert von $a$ hat das System unendlich viele Lösungen?

  b) Gib für alle anderen Werte von $a$ die Lösung an.
teile:
  - typ: zahl
    label: 'a) $a =$'
    loesung: "4"
    fehler:
      - wert: "2"
        meldung: |
          Rechne $\text{II} - 2\cdot\text{I}$: Vor $y$ steht dann $a - 2\cdot 2 = a - 4$. Null wird das für $a = 4$.
  - typ: vektor
    label: 'b) Lösung $(x, y)$ für $a \neq 4$'
    namen: ["x", "y"]
    loesung: ["3", "0"]
    fehler:
      - wert: ["0", "3/2"]
        meldung: |
          Aus $(a - 4)\,y = 0$ und $a \neq 4$ folgt $y = 0$. Setz $y = 0$ in die erste Gleichung ein.
hinweise:
  - 'Rechne $\text{II} - 2\cdot\text{I}$. Es entsteht $(a - 4)\,y = 0$.'
  - 'Unterscheide die Fälle $a = 4$ und $a \neq 4$. Durch $a - 4$ darf man nur teilen, wenn $a \neq 4$.'
loesung: |
  Ansatz: Gauß mit dem Parameter. Bevor man durch einen Ausdruck mit $a$ teilt, muss man den Fall „Ausdruck gleich $0$“ abtrennen.
  ---
  $\text{II} - 2\cdot\text{I}$: $(a - 4)\,y = 6 - 6 = 0$.
  ---
  a) Für $a = 4$ lautet diese Zeile $0 = 0$. Es bleibt nur $x + 2y = 3$: unendlich viele Lösungen, die beiden Geraden fallen zusammen.
  ---
  b) Für $a \neq 4$ darf man durch $a - 4$ teilen: $y = 0$. Dann $x = 3$. Die Lösung $(3, 0)$ hängt gar nicht von $a$ ab. Probe: $3 + 0 = 3$ und $6 + 0 = 6$.
```

```aufgabe
id: lm-cramer-parameter
titel: Ein System mit Parameter vollständig diskutieren
niveau: 3
lernziel: 8
kompetenz: anwenden
angabe: |
  Untersuche das System
  $$\begin{aligned} (a + 1)\,x + 2y &= 4\\ x + a\,y &= 2 \end{aligned}$$
  in Abhängigkeit vom reellen Parameter $a$.

  a) Für welche $a$ ist es nicht eindeutig lösbar?

  b) Gib für die übrigen $a$ die Lösung $x$ als Term in $a$ an.

  c) Was passiert für $a = 1$, was für $a = -2$?
teile:
  - typ: menge
    label: 'a) Sonderwerte von $a$'
    loesung: ["1", "-2"]
    fehler:
      - wert: ["-1", "2"]
        meldung: |
          Prüfe die Faktorisierung: $D = a^2 + a - 2 = (a + 2)(a - 1)$. Null wird das für $a = 1$ und $a = -2$.
  - typ: term
    label: 'b) $x$ für die übrigen $a$'
    variable: a
    bereich: [0, 5]
    loesung: "4/(a+2)"
    fehler:
      - wert: "4/(a-2)"
        meldung: |
          Prüfe die Faktorisierung des Nenners: $a^2 + a - 2 = (a - 1)(a + 2)$. Nach dem Kürzen mit $a - 1$ bleibt $a + 2$ im Nenner.
  - typ: auswahl
    label: 'c) Für $a = 1$ hat das System'
    optionen: ['genau eine Lösung', 'keine Lösung', 'unendlich viele Lösungen']
    richtig: [2]
    fehler:
      - wert: 1
        meldung: |
          Setz $a = 1$ ein: $2x + 2y = 4$ und $x + y = 2$. Die erste Gleichung ist das Doppelte der zweiten, auch rechts.
      - wert: 0
        meldung: |
          Für $a = 1$ ist $D = 0$. Dann gibt es nie genau eine Lösung.
  - typ: auswahl
    label: 'c) Für $a = -2$ hat das System'
    optionen: ['genau eine Lösung', 'keine Lösung', 'unendlich viele Lösungen']
    richtig: [1]
    fehler:
      - wert: 2
        meldung: |
          Setz $a = -2$ ein: $-x + 2y = 4$ und $x - 2y = 2$. Addieren ergibt $0 = 6$, einen Widerspruch.
      - wert: 0
        meldung: |
          Für $a = -2$ ist $D = 0$. Dann gibt es nie genau eine Lösung.
hinweise:
  - '$D = (a + 1)\cdot a - 2\cdot 1 = a^2 + a - 2$. Faktorisiere mit der Lösungsformel oder durch Probieren.'
  - '$D_x = \begin{vmatrix} 4 & 2\\ 2 & a \end{vmatrix} = 4a - 4$. Kürze $\frac{D_x}{D}$ durch den gemeinsamen Faktor.'
  - 'Für die Sonderwerte setze $a$ ein und vergleiche die beiden Gleichungen direkt.'
gefuehrt:
  - text: 'Berechne $D$ für $a = 3$ als Zahl, um die Formel $D = a^2 + a - 2$ zu prüfen.'
    teil:
      typ: zahl
      loesung: "4*3 - 2*1"
    erklaerung: 'Für $a = 3$: $(3 + 1)\cdot 3 - 2 = 10$, und $9 + 3 - 2 = 10$. Die Formel stimmt.'
  - text: 'Welche beiden Zahlen machen $D = a^2 + a - 2$ zu $0$? Gib die größere an.'
    teil:
      typ: zahl
      loesung: "1"
      fehler:
        - wert: "2"
          meldung: 'Setz $a = 2$ ein: $4 + 2 - 2 = 4 \neq 0$. Probiere $a = 1$.'
    erklaerung: '$a^2 + a - 2 = (a - 1)(a + 2)$. Die Nullstellen sind $1$ und $-2$.'
  - text: 'Berechne $D_x = \begin{vmatrix} 4 & 2\\ 2 & a \end{vmatrix}$ für $a = 3$.'
    teil:
      typ: zahl
      loesung: "4*3 - 2*2"
    erklaerung: 'Allgemein $D_x = 4a - 4 = 4(a - 1)$. Für $a = 3$ sind das $8$.'
  - text: 'Kürze $x = \frac{4(a - 1)}{(a - 1)(a + 2)}$. Welcher Term bleibt?'
    teil:
      typ: term
      variable: a
      bereich: [0, 5]
      loesung: "4/(a+2)"
    erklaerung: 'Kürzen mit $a - 1$ ist erlaubt, weil $a \neq 1$. Es bleibt $x = \frac{4}{a + 2}$.'
loesung: |
  Ansatz: Determinante als Term in $a$, Nullstellen sind die Sonderwerte. Für die übrigen Werte Cramer, für die Sonderwerte direkt einsetzen.
  ---
  a) $D = (a + 1)a - 2 = a^2 + a - 2 = (a - 1)(a + 2)$. Sonderwerte: $a = 1$ und $a = -2$.
  ---
  b) $D_x = 4a - 4 = 4(a - 1)$. Für $a \neq 1$ und $a \neq -2$: $x = \frac{4(a - 1)}{(a - 1)(a + 2)} = \frac{4}{a + 2}$. Ebenso ist $y = \frac{2}{a + 2}$.
  ---
  c) $a = 1$: $2x + 2y = 4$ und $x + y = 2$. Gleichwertig, also **unendlich viele** Lösungen. Die Geraden fallen zusammen.
  ---
  $a = -2$: $-x + 2y = 4$ und $x - 2y = 2$. Addieren ergibt $0 = 6$: **keine** Lösung. Die Geraden sind parallel und verschieden.
  ---
  Kontrolle für $a = 0$: Die Formel gibt $x = 2$ und $y = 1$. Im System: $2 + 2 = 4$ und $2 + 0 = 2$.
```

```aufgabe
id: lm-parameter-3x3
titel: Drei Ebenen mit einem Parameter
niveau: 3
lernziel: 8
kompetenz: anwenden
angabe: |
  Gegeben ist das System
  $$\begin{aligned} x + y - z &= 1\\ 2x + 3y + a\,z &= 3\\ x + a\,y + 3z &= 2 \end{aligned}$$
  a) Berechne $\det A$ als Term in $a$.

  b) Für welche $a$ ist das System nicht eindeutig lösbar?

  c) Untersuche die Sonderfälle.

  d) Löse das System für $a = 0$.
teile:
  - typ: term
    label: 'a) $\det A$'
    variable: a
    loesung: "6 - a - a^2"
    fehler:
      - wert: "6 + a - a^2"
        meldung: |
          Prüfe die Plus-Diagonale $1\cdot a\cdot 1 = a$ und die Minus-Diagonalen $(-1)\cdot 3\cdot 1 = -3$, $1\cdot a\cdot a = a^2$ und $1\cdot 2\cdot 3 = 6$.
  - typ: menge
    label: 'b) Sonderwerte'
    loesung: ["2", "-3"]
    fehler:
      - wert: ["-2", "3"]
        meldung: |
          $6 - a - a^2 = -(a^2 + a - 6) = -(a + 3)(a - 2)$. Die Nullstellen sind $2$ und $-3$.
  - typ: auswahl
    label: 'c) Für $a = 2$ hat das System'
    optionen: ['keine Lösung', 'unendlich viele Lösungen']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Rechne $\text{II} - 2\cdot\text{I}$ und $\text{III} - \text{I}$ für $a = 2$. Beide ergeben $(0,\ 1,\ 4 \mid 1)$, also eine Nullzeile ohne Widerspruch.
  - typ: auswahl
    label: 'c) Für $a = -3$ hat das System'
    optionen: ['keine Lösung', 'unendlich viele Lösungen']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Für $a = -3$ ergibt $\text{II} - 2\cdot\text{I}$ die Zeile $(0,\ 1,\ -1 \mid 1)$ und $\text{III} - \text{I}$ die Zeile $(0,\ -4,\ 4 \mid 1)$.
          Rechne $\text{III} + 4\cdot\text{II}$.
  - typ: vektor
    label: 'd) Lösung für $a = 0$'
    namen: ["x", "y", "z"]
    loesung: ["1", "1/3", "1/3"]
    fehler:
      - wert: ["1", "-1/3", "1/3"]
        meldung: |
          Prüfe mit der zweiten Gleichung: $2\cdot 1 + 3\cdot y + 0 = 3$, also $y = \frac13$.
hinweise:
  - 'Sarrus: Plus-Diagonalen $9 + a - 2a$, Minus-Diagonalen $-3 + a^2 + 6$.'
  - 'Für die Sonderwerte: $a$ einsetzen, dann $\text{II} - 2\cdot\text{I}$ und $\text{III} - \text{I}$ rechnen und die beiden neuen Zeilen vergleichen.'
loesung: |
  Ansatz: Determinante als Term in $a$. Ihre Nullstellen sind die Sonderwerte, die wir einzeln mit Gauß untersuchen.
  ---
  a) Sarrus: Plus-Diagonalen $1\cdot 3\cdot 3 + 1\cdot a\cdot 1 + (-1)\cdot 2\cdot a = 9 - a$. Minus-Diagonalen $(-1)\cdot 3\cdot 1 + 1\cdot a\cdot a + 1\cdot 2\cdot 3 = 3 + a^2$. Also $\det A = 9 - a - 3 - a^2 = 6 - a - a^2$.
  ---
  b) $6 - a - a^2 = -(a + 3)(a - 2)$. Sonderwerte: $a = 2$ und $a = -3$. Für alle anderen $a$ schneiden sich die drei Ebenen in genau einem Punkt.
  ---
  c) $a = 2$: $\text{II} - 2\cdot\text{I}$ und $\text{III} - \text{I}$ ergeben beide $(0,\ 1,\ 4 \mid 1)$. Nullzeile ohne Widerspruch: **unendlich viele** Lösungen, die Ebenen bilden ein Büschel.
  ---
  $a = -3$: $\text{II} - 2\cdot\text{I}$ ergibt $(0,\ 1,\ -1 \mid 1)$, $\text{III} - \text{I}$ ergibt $(0,\ -4,\ 4 \mid 1)$. Dann $\text{III} + 4\cdot\text{II}$: $(0,\ 0,\ 0 \mid 5)$, also **keine** Lösung. Die Normalvektoren $(1, 1, -1)$, $(2, 3, -3)$, $(1, -3, 3)$ sind paarweise keine Vielfachen: Die Ebenen bilden ein Prisma.
  ---
  d) $a = 0$: Aus $\text{II} - 2\cdot\text{I}$ folgt $(0,\ 1,\ 2 \mid 1)$, aus $\text{III} - \text{I}$ folgt $(0,\ -1,\ 4 \mid 1)$. Addiert: $6z = 2$, also $z = \frac13$. Dann $y = 1 - \frac23 = \frac13$ und $x = 1 - \frac13 + \frac13 = 1$. Probe: $2 + 1 = 3$ und $1 + 1 = 2$.
```

## Anwendungen: Mischungen, Bedarf und Übergänge

```aufgabe
id: lm-check-prozent
titel: Wie viel reiner Stoff ist darin?
niveau: 1
art: check
angabe: |
  Wie viele Liter reinen Alkohol enthalten $3$ Liter einer $40\,\%$-igen Lösung?
  Herkunft: [Kapitel 1, „Prozentrechnung“](/lernen/mathe3/zahlen/prozentrechnung).
teile:
  - typ: zahl
    label: 'reiner Alkohol'
    einheit: 'l'
    loesung: "0.4*3"
    anzeige: '1{,}2'
    fehler:
      - wert: "120"
        meldung: |
          $40\,\%$ ist der Bruchteil $\frac{40}{100} = 0{,}4$. Multipliziere mit $0{,}4$, nicht mit $40$.
      - wert: "7.5"
        meldung: |
          Du hast durch $0{,}4$ geteilt. $40\,\%$ **von** $3$ Litern heißt $0{,}4\cdot 3$.
hinweise:
  - '$40\,\%$ von $3$ Litern ist $0{,}4\cdot 3$ Liter.'
loesung: |
  $40\,\% = 0{,}4$. Der Anteil an reinem Alkohol ist $0{,}4\cdot 3 = 1{,}2$ Liter.
  ---
  Der Rest, $1{,}8$ Liter, ist Wasser.
```

In Textaufgaben steckt die eigentliche Arbeit im **Aufstellen** des Systems. Das Lösen ist danach Routine. Diese Lektion
zeigt typische Anwendungen: Mischungen, Kurven durch vorgegebene Punkte, Bedarfsrechnungen mit Matrizen und, als Vertiefung,
Übergänge zwischen Zuständen und die Verflechtung von Wirtschaftszweigen.

:::beispiel[Eine Mischung aus drei Sorten]
Aus drei Nusssorten zu $6$, $10$ und $16$ Euro pro Kilogramm soll eine Mischung von $20\,\text{kg}$ zum Gesamtpreis von $192$ Euro
entstehen. Von der billigsten Sorte soll doppelt so viel enthalten sein wie von der teuersten.

1. **Unbekannte festlegen:** $x$, $y$, $z$ sind die Massen der Sorten zu $6$, $10$ und $16$ Euro pro Kilogramm, jeweils in kg.
2. **Bedingungen sammeln:**
   - Gesamtmasse: $x + y + z = 20$.
   - Preis: $6x + 10y + 16z = 192$.
   - Doppelt so viel: $x = 2z$, also $x - 2z = 0$.
3. **Lösen:** Aus der dritten Gleichung ist $x = 2z$. Aus der ersten folgt $y = 20 - 3z$. In die zweite eingesetzt:
   $12z + 10(20 - 3z) + 16z = 192$, also $200 - 2z = 192$ und $z = 4$. Damit $x = 8$ und $y = 8$.
4. **Probe im Text:** $8 + 8 + 4 = 20\,\text{kg}$, Preis $48 + 80 + 64 = 192$ Euro, und $8$ ist das Doppelte von $4$.
5. **Antwort:** Man mischt $8\,\text{kg}$ der billigsten, $8\,\text{kg}$ der mittleren und $4\,\text{kg}$ der teuersten Sorte.
:::

:::merke[Textaufgaben in fünf Schritten]
1. **Unbekannte festlegen**, mit Bedeutung und Einheit: „$x$ ist die Masse der Sorte A in kg.“
2. **Bedingungen sammeln:** Jede Information im Text, die eine Zahl festlegt, wird eine Gleichung. Für $n$ Unbekannte braucht
   man in der Regel $n$ Gleichungen, die sich nicht auseinander ergeben.
3. **System lösen**, mit Gauß oder bei zwei Unbekannten auch mit Einsetzen.
4. **Probe im Text**, nicht nur im aufgestellten System. So fallen auch Fehler beim Aufstellen auf.
5. **Antwortsatz** mit Einheiten. Prüfe, ob das Ergebnis sinnvoll ist, etwa ob keine Menge negativ ist.
:::

:::achtung[Prozentsätze nicht einfach mitteln]
**Falsch:** Man mischt $2$ Liter einer $30\,\%$-igen und $3$ Liter einer $60\,\%$-igen Lösung und sagt: „Die Mischung hat
$\frac{30 + 60}{2} = 45\,\%$.“

**Richtig:** Man rechnet mit den **Mengen** des reinen Stoffs: $0{,}3\cdot 2 + 0{,}6\cdot 3 = 0{,}6 + 1{,}8 = 2{,}4$ Liter in insgesamt
$5$ Litern. Das sind $\frac{2{,}4}{5} = 0{,}48 = 48\,\%$. Weil mehr von der starken Lösung dabei ist, liegt das Ergebnis über $45\,\%$.
:::

### Kurven durch vorgegebene Punkte

:::beispiel[Eine Parabel durch drei Punkte]
Gesucht ist die quadratische Funktion $f(x) = ax^2 + bx + c$, deren Graph durch $P(-1 \mid 8)$, $Q(1 \mid 2)$ und $R(2 \mid 5)$ geht.

1. **Ansatz:** Jeder Punkt liefert eine Gleichung für die Unbekannten $a$, $b$, $c$. Liegt $P$ auf dem Graphen, gilt $f(-1) = 8$.
2. **Gleichungen:** $f(-1) = a - b + c = 8$, $\;f(1) = a + b + c = 2$, $\;f(2) = 4a + 2b + c = 5$.
3. **Lösen:** Zweite minus erste Gleichung: $2b = -6$, also $b = -3$. Dann bleibt $a + c = 5$ und $4a + c = 11$. Abziehen ergibt
   $3a = 6$, also $a = 2$ und $c = 3$.
4. **Ergebnis:** $f(x) = 2x^2 - 3x + 3$. Probe für $R$: $f(2) = 8 - 6 + 3 = 5$.
:::

```plot
x: [-2, 3]
y: [-1, 12]
graphen:
  - { f: "2*x^2 - 3*x + 3", label: "f(x) = 2x² − 3x + 3", farbe: 0 }
punkte:
  - { x: -1, y: 8, label: "P" }
  - { x: 1, y: 2, label: "Q" }
  - { x: 2, y: 5, label: "R" }
beschriftung: Die Parabel f(x) = 2x² − 3x + 3 geht durch die drei vorgegebenen Punkte P(−1 | 8), Q(1 | 2) und R(2 | 5). Drei Punkte mit verschiedenen x-Werten legen eine Parabel eindeutig fest.
```

Durch drei Punkte mit verschiedenen $x$-Werten geht immer genau eine Kurve der Form $ax^2 + bx + c$. Liegen die drei Punkte auf
einer Geraden, kommt $a = 0$ heraus, also eine lineare Funktion. Diese Idee heißt **Interpolation**. Schriftarten, Animationspfade
und Datenvisualisierungen verwenden solche Kurven ständig.

### Bedarfsrechnung mit Matrizen

Ein Betrieb stellt aus **Rohstoffen** $R_1, R_2$ zuerst **Zwischenprodukte** $Z_1, Z_2$ her und daraus **Endprodukte**
$E_1, E_2$. Die Matrix $A_{RZ}$ gibt an, wie viele Einheiten jedes Rohstoffs ein Zwischenprodukt braucht. Ihre Zeilen gehören zu
den Rohstoffen, ihre Spalten zu den Zwischenprodukten. Ebenso gibt $B_{ZE}$ an, wie viele Zwischenprodukte ein Endprodukt braucht.

:::beispiel[Zweistufige Bedarfsrechnung]
$$A_{RZ} = \begin{pmatrix} 1 & 2\\ 3 & 1 \end{pmatrix}, \qquad B_{ZE} = \begin{pmatrix} 2 & 1\\ 1 & 3 \end{pmatrix}.$$
Zum Beispiel braucht ein Stück $Z_2$ genau $2$ Einheiten $R_1$ (Zeile 1, Spalte 2 von $A_{RZ}$). Ein Stück $E_1$ braucht $2$ Stück
$Z_1$ und $1$ Stück $Z_2$ (Spalte 1 von $B_{ZE}$).

1. **Wie viel $R_1$ braucht ein Stück $E_1$?** Über $Z_1$: $2\cdot 1 = 2$ Einheiten. Über $Z_2$: $1\cdot 2 = 2$ Einheiten.
   Zusammen $1\cdot 2 + 2\cdot 1 = 4$. Das ist genau „Zeile 1 von $A_{RZ}$ mal Spalte 1 von $B_{ZE}$“.
2. **Alle Kombinationen auf einmal:** $C_{RE} = A_{RZ}\cdot B_{ZE} = \begin{pmatrix} 1\cdot 2 + 2\cdot 1 & 1\cdot 1 + 2\cdot 3\\ 3\cdot 2 + 1\cdot 1 & 3\cdot 1 + 1\cdot 3 \end{pmatrix} = \begin{pmatrix} 4 & 7\\ 7 & 6 \end{pmatrix}$.
3. **Ein Auftrag** über $10$ Stück $E_1$ und $5$ Stück $E_2$ braucht
   $\vec r = C_{RE}\begin{pmatrix} 10\\ 5 \end{pmatrix} = \begin{pmatrix} 40 + 35\\ 70 + 30 \end{pmatrix} = \begin{pmatrix} 75\\ 100 \end{pmatrix}$,
   also $75$ Einheiten $R_1$ und $100$ Einheiten $R_2$.
:::

:::merke[Bedarfsmatrix]
Die Matrix $C_{RE} = A_{RZ}\cdot B_{ZE}$ gibt an, wie viele Einheiten jedes Rohstoffs ein Stück jedes Endprodukts braucht. Für einen
Auftrag $\vec x$ (Stückzahlen der Endprodukte) ist der Rohstoffbedarf $\vec r = C_{RE}\,\vec x$. Die Reihenfolge erkennt man an den
Indizes: Die „inneren“ Buchstaben $Z$ müssen zusammenpassen.
:::

:::achtung[Die Reihenfolge der Bedarfsmatrizen]
**Falsch:** Jemand rechnet $B_{ZE}\cdot A_{RZ} = \begin{pmatrix} 5 & 5\\ 10 & 5 \end{pmatrix}$ und liest daraus „ein Stück $E_1$ braucht $5$ Einheiten $R_1$“.

**Richtig:** Das Produkt $B_{ZE}\cdot A_{RZ}$ hat keine Bedeutung, denn die Indizes passen nicht: Zwischen $ZE$ und $RZ$ treffen $E$
und $R$ aufeinander. Richtig ist $A_{RZ}\cdot B_{ZE}$, mit $Z$ in der Mitte. Dort braucht ein Stück $E_1$ genau $4$ Einheiten $R_1$.
:::

```aufgabe
id: lm-check-bedarf-reihenfolge
titel: Welches Produkt ist die Bedarfsmatrix?
niveau: 1
art: check
angabe: |
  $A_{RZ}$ beschreibt Rohstoffe pro Zwischenprodukt, $B_{ZE}$ Zwischenprodukte pro Endprodukt. Welches Produkt gibt an, wie viele
  Rohstoffe ein Endprodukt braucht?
teile:
  - typ: auswahl
    optionen:
      - '$A_{RZ}\cdot B_{ZE}$'
      - '$B_{ZE}\cdot A_{RZ}$'
      - '$A_{RZ} + B_{ZE}$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Bei $B_{ZE}\cdot A_{RZ}$ treffen in der Mitte $E$ und $R$ aufeinander. Die inneren Indizes müssen gleich sein.
      - wert: 2
        meldung: |
          Mengen aus zwei Stufen werden nicht addiert. Für jedes Zwischenprodukt multipliziert man „Rohstoff pro Zwischenprodukt“ mit „Zwischenprodukt pro Endprodukt“ und addiert dann.
hinweise:
  - 'Die inneren Indizes müssen zusammenpassen: $RZ$ mal $ZE$ ergibt $RE$.'
loesung: |
  In $A_{RZ}\cdot B_{ZE}$ stehen in der Mitte zweimal die Zwischenprodukte $Z$. Außen bleiben $R$ und $E$.
  ---
  Das Ergebnis $C_{RE}$ gibt die Rohstoffe pro Endprodukt an.
```

Muss man umgekehrt aus einem **Lagerbestand** die Stückzahlen bestimmen, löst man $C_{RE}\,\vec x = \vec r$. Ist $C_{RE}$
invertierbar, ist $\vec x = C_{RE}^{-1}\vec r$. Hier ist $\det C_{RE} = 24 - 49 = -25 \neq 0$.

:::achtung[Mathematisch richtig, praktisch unmöglich]
**Falsch:** Im Lager liegen $55$ Einheiten $R_1$ und $40$ Einheiten $R_2$. Die Rechnung liefert $\vec x = (-2, 9)$. Jemand schreibt:
„Man produziert $-2$ Stück $E_1$ und $9$ Stück $E_2$.“

**Richtig:** Probe: $4\cdot(-2) + 7\cdot 9 = 55$ und $7\cdot(-2) + 6\cdot 9 = 40$. Die Rechnung stimmt, aber eine negative Stückzahl
gibt es nicht. Weil die Lösung eindeutig ist, lässt sich dieses Lager mit **keiner** echten Produktion genau aufbrauchen. Das muss
im Antwortsatz stehen. Prüfe Ergebnisse immer auf Sinn im Sachzusammenhang.
:::

### Übergänge zwischen Zuständen (Vertiefung)

Viele Vorgänge laufen in Schritten ab, bei denen sich Anteile verschieben. In einer Stadt gibt es zwei Internetanbieter A und B.
Jedes Jahr bleiben $80\,\%$ der Kundschaft von A bei A, $20\,\%$ wechseln zu B. Von B wechseln $30\,\%$ zu A, $70\,\%$ bleiben.
Diese Anteile stehen in der **Übergangsmatrix**
$$M = \begin{pmatrix} 0{,}8 & 0{,}3\\ 0{,}2 & 0{,}7 \end{pmatrix}.$$
Die erste Spalte beschreibt, wohin die Kundschaft von A geht, die zweite, wohin die von B geht. Jede Spalte ergibt zusammen $1$,
denn niemand geht verloren.

:::beispiel[Kundschaft im nächsten Jahr und auf lange Sicht]
1. **Ein Schritt:** Heute haben A und B je $500$ Kundinnen und Kunden. Nach einem Jahr:
   $M\begin{pmatrix} 500\\ 500 \end{pmatrix} = \begin{pmatrix} 400 + 150\\ 100 + 350 \end{pmatrix} = \begin{pmatrix} 550\\ 450 \end{pmatrix}$.
2. **Noch ein Schritt:** $M\begin{pmatrix} 550\\ 450 \end{pmatrix} = \begin{pmatrix} 440 + 135\\ 110 + 315 \end{pmatrix} = \begin{pmatrix} 575\\ 425 \end{pmatrix}$.
3. **Gleichgewicht:** Gesucht ist eine Verteilung $(x, y)$, die sich nicht mehr ändert, also $M\begin{pmatrix} x\\ y \end{pmatrix} = \begin{pmatrix} x\\ y \end{pmatrix}$.
   Die erste Zeile ergibt $0{,}8x + 0{,}3y = x$, also $0{,}3y = 0{,}2x$. Dazu kommt $x + y = 1000$. Aus $x = 1{,}5y$ folgt
   $2{,}5y = 1000$, also $y = 400$ und $x = 600$.
4. **Probe:** $M\begin{pmatrix} 600\\ 400 \end{pmatrix} = \begin{pmatrix} 480 + 120\\ 120 + 280 \end{pmatrix} = \begin{pmatrix} 600\\ 400 \end{pmatrix}$.

Auf lange Sicht pendelt sich die Kundschaft bei $600$ zu $400$ ein. Die Folge $500, 550, 575, \dots$ nähert sich $600$.
:::

### Verflochtene Wirtschaftszweige (Vertiefung)

Zwei Wirtschaftszweige beliefern sich gegenseitig, etwa Energie und Landwirtschaft. Für jede Einheit, die der Zweig 1 herstellt,
verbraucht er selbst $0{,}2$ Einheiten aus Zweig 1 und $0{,}3$ Einheiten aus Zweig 2. Zweig 2 braucht je Einheit $0{,}4$ Einheiten
aus Zweig 1 und $0{,}1$ aus Zweig 2. Diese Zahlen bilden die **Verflechtungsmatrix** $A = \begin{pmatrix} 0{,}2 & 0{,}4\\ 0{,}3 & 0{,}1 \end{pmatrix}$.
Von der Produktion $\vec x$ wird also $A\vec x$ intern verbraucht. Für den Markt bleibt $\vec x - A\vec x = (E - A)\vec x$. Dieses
Modell heißt **Leontief-Modell**, nach dem Ökonomen Wassily Leontief.

:::beispiel[Wie viel muss produziert werden?]
Der Markt verlangt $\vec y = (60, 30)$ Einheiten. Gesucht ist die Produktion $\vec x$ mit $(E - A)\vec x = \vec y$.

1. $E - A = \begin{pmatrix} 0{,}8 & -0{,}4\\ -0{,}3 & 0{,}9 \end{pmatrix}$ mit $\det(E - A) = 0{,}72 - 0{,}12 = 0{,}6$.
2. Mit der Formel für die Inverse: $(E - A)^{-1} = \frac{1}{0{,}6}\begin{pmatrix} 0{,}9 & 0{,}4\\ 0{,}3 & 0{,}8 \end{pmatrix}$.
3. $\vec x = \frac{1}{0{,}6}\begin{pmatrix} 0{,}9\cdot 60 + 0{,}4\cdot 30\\ 0{,}3\cdot 60 + 0{,}8\cdot 30 \end{pmatrix} = \frac{1}{0{,}6}\begin{pmatrix} 66\\ 42 \end{pmatrix} = \begin{pmatrix} 110\\ 70 \end{pmatrix}$.
4. **Probe:** Zweig 1 verbraucht intern $0{,}2\cdot 110 + 0{,}4\cdot 70 = 22 + 28 = 50$. Für den Markt bleiben $110 - 50 = 60$.
:::

```reflexion
frage: Warum braucht man für drei Unbekannte in der Regel drei Gleichungen, und warum genügen drei Gleichungen manchmal trotzdem nicht?
antwort: |
  Jede Gleichung ist eine Bedingung. Mit weniger Gleichungen als Unbekannten ist der Rang kleiner als die Anzahl der Unbekannten,
  und es bleibt mindestens ein Parameter frei. Drei Gleichungen genügen aber nur, wenn keine davon aus den anderen folgt. Sagt eine
  Gleichung dasselbe wie die anderen zusammen, zum Beispiel weil sie ihre Summe ist, ist der Rang nur $2$. Dann ist die Lösung
  nicht eindeutig. In Textaufgaben passiert das, wenn eine Information im Text nichts Neues hinzufügt.
```

### Übungen

```aufgabe
id: lm-anw-ansatz
titel: Die passende Gleichung finden
niveau: 1
lernziel: 9
kompetenz: modellieren
angabe: |
  Man mischt $x$ Liter einer $20\,\%$-igen und $y$ Liter einer $50\,\%$-igen Säurelösung. Die Mischung soll genau $6$ Liter reine
  Säure enthalten. Welche Gleichung beschreibt diese Bedingung?
teile:
  - typ: auswahl
    optionen:
      - '$0{,}2x + 0{,}5y = 6$'
      - '$20x + 50y = 6$'
      - '$x + y = 6$'
      - '$0{,}2x + 0{,}5y = 0{,}35\,(x + y)$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          $20\,\%$ ist der Anteil $0{,}2$, nicht $20$. In $x$ Litern stecken $0{,}2x$ Liter Säure.
      - wert: 2
        meldung: |
          $x + y$ ist die Gesamtmenge der Mischung. Gefragt ist aber die Menge der reinen Säure.
      - wert: 3
        meldung: |
          Diese Gleichung beschreibt eine Mischung mit $35\,\%$. Im Text steht aber eine feste Menge von $6$ Litern reiner Säure.
hinweise:
  - 'In $x$ Litern einer $20\,\%$-igen Lösung stecken $0{,}2x$ Liter reine Säure.'
loesung: |
  Ansatz: Reine Säure aus beiden Lösungen zusammenzählen.
  ---
  Aus der ersten Lösung kommen $0{,}2x$ Liter, aus der zweiten $0{,}5y$ Liter. Zusammen sollen es $6$ Liter sein: $0{,}2x + 0{,}5y = 6$.
```

```aufgabe
id: lm-anw-muenzen
titel: Münzen in der Kassa
niveau: 1
lernziel: 9
kompetenz: modellieren
angabe: |
  In einer Kassa liegen nur $2$-Euro-Münzen und $50$-Cent-Münzen. Es sind $30$ Münzen mit zusammen $33$ Euro. Wie viele Münzen jeder Sorte
  sind es?
teile:
  - typ: zahl
    label: 'Anzahl der $2$-Euro-Münzen'
    loesung: "12"
    fehler:
      - wert: "18"
        meldung: |
          Das ist die Anzahl der $50$-Cent-Münzen. Probe mit $18$ Zwei-Euro-Münzen: $36$ Euro wären schon zu viel.
  - typ: zahl
    label: 'Anzahl der $50$-Cent-Münzen'
    loesung: "18"
    fehler:
      - wert: "12"
        meldung: |
          Das ist die Anzahl der $2$-Euro-Münzen. Kontrolliere, welche Unbekannte zu welcher Münzsorte gehört.
hinweise:
  - '$x$ = Anzahl der $2$-Euro-Münzen, $y$ = Anzahl der $50$-Cent-Münzen. Rechne alles in Euro: Eine $50$-Cent-Münze ist $0{,}5$ Euro.'
loesung: |
  Ansatz: $x + y = 30$ (Anzahl) und $2x + 0{,}5y = 33$ (Euro).
  ---
  Aus $y = 30 - x$: $2x + 15 - 0{,}5x = 33$, also $1{,}5x = 18$ und $x = 12$. Dann $y = 18$.
  ---
  Probe: $12\cdot 2 + 18\cdot 0{,}5 = 24 + 9 = 33$ Euro. Antwort: $12$ Zwei-Euro-Münzen und $18$ Fünfzig-Cent-Münzen.
```

```aufgabe
id: lm-anw-mischung
titel: Säure mischen
niveau: 2
lernziel: 9
kompetenz: modellieren
angabe: |
  Eine Laborantin hat eine $30\,\%$-ige und eine $75\,\%$-ige Säurelösung. Sie braucht $18$ Liter einer $45\,\%$-igen Lösung.
  Wie viele Liter jeder Lösung muss sie mischen?
teile:
  - typ: zahl
    label: '$30\,\%$-ige Lösung'
    einheit: 'l'
    loesung: "12"
    fehler:
      - wert: "6"
        meldung: |
          $6$ Liter sind es von der **starken** Lösung. Weil $45\,\%$ näher bei $30\,\%$ liegt, braucht man mehr von der schwachen Lösung.
      - wert: "9"
        meldung: |
          Halb und halb ergäbe $\frac{30 + 75}{2} = 52{,}5\,\%$, nicht $45\,\%$. Stelle zwei Gleichungen auf.
  - typ: zahl
    label: '$75\,\%$-ige Lösung'
    einheit: 'l'
    loesung: "6"
    fehler:
      - wert: "12"
        meldung: |
          Prüfe die Zuordnung: $12$ Liter der $75\,\%$-igen Lösung enthielten schon $9$ Liter Säure. Verlangt sind insgesamt nur $8{,}1$ Liter.
hinweise:
  - 'Eine Gleichung für das Volumen, eine für die reine Säure. In $18$ Litern einer $45\,\%$-igen Lösung stecken $0{,}45\cdot 18 = 8{,}1$ Liter Säure.'
  - 'Die Gleichungen lauten $x + y = 18$ und $0{,}3x + 0{,}75y = 8{,}1$. Setze $x = 18 - y$ ein.'
gefuehrt:
  - text: 'Wie viele Liter reine Säure enthalten $18$ Liter einer $45\,\%$-igen Lösung?'
    teil:
      typ: zahl
      loesung: "0.45*18"
      fehler:
        - wert: "810"
          meldung: '$45\,\%$ ist $0{,}45$, nicht $45$.'
    erklaerung: '$0{,}45\cdot 18 = 8{,}1$ Liter.'
  - text: 'Setze $x = 18 - y$ in $0{,}3x + 0{,}75y = 8{,}1$ ein. Welcher Faktor steht danach vor $y$?'
    teil:
      typ: zahl
      loesung: "0.75 - 0.3"
    erklaerung: '$0{,}3\cdot(18 - y) + 0{,}75y = 5{,}4 + 0{,}45y$. Vor $y$ steht $0{,}45$.'
  - text: 'Löse $5{,}4 + 0{,}45y = 8{,}1$. Wie groß ist $y$?'
    teil:
      typ: zahl
      loesung: "(8.1 - 5.4)/0.45"
    erklaerung: '$0{,}45y = 2{,}7$, also $y = 6$ Liter. Dann $x = 18 - 6 = 12$ Liter.'
loesung: |
  Ansatz: $x$ = Liter der $30\,\%$-igen, $y$ = Liter der $75\,\%$-igen Lösung. Volumen: $x + y = 18$. Reine Säure: $0{,}3x + 0{,}75y = 0{,}45\cdot 18 = 8{,}1$.
  ---
  Mit $x = 18 - y$: $5{,}4 - 0{,}3y + 0{,}75y = 8{,}1$, also $0{,}45y = 2{,}7$ und $y = 6$. Dann $x = 12$.
  ---
  Probe: $0{,}3\cdot 12 + 0{,}75\cdot 6 = 3{,}6 + 4{,}5 = 8{,}1$ Liter Säure in $18$ Litern, das sind $45\,\%$.
  ---
  Antwort: $12$ Liter der $30\,\%$-igen und $6$ Liter der $75\,\%$-igen Lösung.
```

```aufgabe
id: lm-anw-parabel
titel: Parabel durch drei Punkte
niveau: 2
lernziel: 9
kompetenz: modellieren
angabe: |
  Bestimme $a, b, c$ so, dass der Graph von $f(x) = ax^2 + bx + c$ durch $A(0 \mid -1)$, $B(2 \mid 3)$ und $C(-1 \mid 6)$ geht.
teile:
  - typ: vektor
    label: '$(a, b, c)$'
    namen: ["a", "b", "c"]
    loesung: ["3", "-4", "-1"]
    fehler:
      - wert: ["3", "4", "-1"]
        meldung: |
          Prüfe mit $C$: $f(-1) = a - b + c$. Das Minus vor $b$ kommt von $b\cdot(-1)$. Mit $b = 4$ wäre $f(-1) = 3 - 4 - 1 = -2 \neq 6$.
      - wert: ["1", "0", "-1"]
        meldung: |
          Prüfe mit $C$: $f(-1) = 1 + 0 - 1 = 0 \neq 6$. Stelle für jeden Punkt die Gleichung $f(x_P) = y_P$ auf.
hinweise:
  - 'Setze die Punkte ein. $f(0) = -1$ liefert sofort $c$.'
  - 'Es bleiben $4a + 2b = 4$ und $a - b = 7$.'
loesung: |
  Ansatz: Jeder Punkt liefert eine Gleichung $f(x_P) = y_P$, die in $a$, $b$, $c$ linear ist.
  ---
  $f(0) = c = -1$.
  ---
  $f(2) = 4a + 2b - 1 = 3$, also $2a + b = 2$. $\;f(-1) = a - b - 1 = 6$, also $a - b = 7$.
  ---
  Addieren: $3a = 9$, also $a = 3$ und $b = 2 - 6 = -4$. Ergebnis: $f(x) = 3x^2 - 4x - 1$.
  ---
  Probe: $f(2) = 12 - 8 - 1 = 3$ und $f(-1) = 3 + 4 - 1 = 6$.
```

```aufgabe
id: lm-bedarf
titel: Bedarfsrechnung in zwei Stufen
niveau: 2
lernziel: 9
kompetenz: anwenden
angabe: |
  Ein Betrieb fertigt aus drei Rohstoffen $R_1, R_2, R_3$ zwei Zwischenprodukte und daraus drei Endprodukte.
  Die Bedarfsmatrizen (Einheiten pro Stück) sind
  $$A_{RZ} = \begin{pmatrix} 2 & 1\\ 0 & 3\\ 1 & 1 \end{pmatrix}, \qquad B_{ZE} = \begin{pmatrix} 1 & 2 & 0\\ 3 & 1 & 2 \end{pmatrix}.$$
  a) Berechne $C_{RE}$ und gib den Eintrag in Zeile 2, Spalte 3 an. Was bedeutet er?

  b) Bestellt werden $10$ Stück $E_1$, $20$ Stück $E_2$ und $5$ Stück $E_3$. Wie viele Einheiten jedes Rohstoffs werden gebraucht?
teile:
  - typ: zahl
    label: 'a) Eintrag $c_{23}$ von $C_{RE}$'
    loesung: "0*0 + 3*2"
    anzeige: '6'
    fehler:
      - wert: "3"
        meldung: |
          Zeile 2 von $A_{RZ}$ ist $(0, 3)$, Spalte 3 von $B_{ZE}$ ist $(0, 2)$. Also $0\cdot 0 + 3\cdot 2$.
  - typ: vektor
    label: 'b) Rohstoffbedarf $(r_1, r_2, r_3)$'
    namen: ["R1", "R2", "R3"]
    loesung: ["160", "180", "110"]
    fehler:
      - wert: ["35", "35", "35"]
        meldung: |
          Du hast nur die Stückzahlen addiert. Jeder Rohstoffbedarf ist eine Zeile von $C_{RE}$ mal den Auftragsvektor $(10, 20, 5)$.
hinweise:
  - '$C_{RE} = A_{RZ}\cdot B_{ZE}$ hat das Format $(3\times 2)(2\times 3) = 3\times 3$.'
  - 'Rohstoffbedarf: $C_{RE}\cdot (10, 20, 5)$.'
loesung: |
  Ansatz: Erst die Bedarfsmatrix $C_{RE} = A_{RZ}\cdot B_{ZE}$, dann Matrix mal Auftragsvektor.
  ---
  $$C_{RE} = \begin{pmatrix} 2 & 1\\ 0 & 3\\ 1 & 1 \end{pmatrix}\begin{pmatrix} 1 & 2 & 0\\ 3 & 1 & 2 \end{pmatrix} = \begin{pmatrix} 5 & 5 & 2\\ 9 & 3 & 6\\ 4 & 3 & 2 \end{pmatrix}$$
  ---
  a) $c_{23} = 0\cdot 0 + 3\cdot 2 = 6$: Für ein Stück $E_3$ braucht man $6$ Einheiten des Rohstoffs $R_2$.
  ---
  b) $\vec r = (50 + 100 + 10,\ 90 + 60 + 30,\ 40 + 60 + 10) = (160, 180, 110)$.
  ---
  Antwort: $160$ Einheiten $R_1$, $180$ Einheiten $R_2$ und $110$ Einheiten $R_3$.
```

```aufgabe
id: lm-anw-uebergang
titel: Wanderung zwischen zwei Anbietern
niveau: 2
lernziel: 9
kompetenz: modellieren
angabe: |
  Vertiefung. In einem Ort mit $900$ Haushalten bleiben jedes Jahr $90\,\%$ der Haushalte von Anbieter A bei A, $10\,\%$ wechseln zu B.
  Von B wechseln $20\,\%$ zu A, $80\,\%$ bleiben. Die Übergangsmatrix ist $M = \begin{pmatrix} 0{,}9 & 0{,}2\\ 0{,}1 & 0{,}8 \end{pmatrix}$.

  a) Heute hat A $300$ und B $600$ Haushalte. Wie viele sind es nach einem Jahr?

  b) Welche Verteilung ändert sich nicht mehr?
teile:
  - typ: vektor
    label: 'a) nach einem Jahr $(A, B)$'
    namen: ["A", "B"]
    loesung: ["0.9*300 + 0.2*600", "0.1*300 + 0.8*600"]
    fehler:
      - wert: ["390", "30"]
        meldung: |
          Zeile 2 von $M$ mal $(300, 600)$ ergibt $0{,}1\cdot 300 + 0{,}8\cdot 600$. Der zweite Summand $0{,}8\cdot 600$ fehlt.
  - typ: vektor
    label: 'b) Gleichgewicht $(A, B)$'
    namen: ["A", "B"]
    loesung: ["600", "300"]
    fehler:
      - wert: ["300", "600"]
        meldung: |
          Das ist die heutige Verteilung. Nach einem Jahr hat sie sich schon geändert, sie ist also kein Gleichgewicht.
hinweise:
  - 'Für a): $M\cdot(300, 600)$ ausrechnen.'
  - 'Für b): Aus $M\vec x = \vec x$ folgt in der ersten Zeile $0{,}9x + 0{,}2y = x$, also $0{,}2y = 0{,}1x$. Dazu kommt $x + y = 900$.'
loesung: |
  Ansatz: Ein Jahr entspricht einer Multiplikation mit $M$. Ein Gleichgewicht ist eine Verteilung $\vec x$ mit $M\vec x = \vec x$.
  ---
  a) $M\begin{pmatrix} 300\\ 600 \end{pmatrix} = \begin{pmatrix} 270 + 120\\ 30 + 480 \end{pmatrix} = \begin{pmatrix} 390\\ 510 \end{pmatrix}$.
  ---
  b) $0{,}9x + 0{,}2y = x$ ergibt $0{,}2y = 0{,}1x$, also $x = 2y$. Mit $x + y = 900$: $3y = 900$, $y = 300$, $x = 600$.
  ---
  Probe: $M\begin{pmatrix} 600\\ 300 \end{pmatrix} = \begin{pmatrix} 540 + 60\\ 60 + 240 \end{pmatrix} = \begin{pmatrix} 600\\ 300 \end{pmatrix}$. Auf lange Sicht hat A doppelt so viele Haushalte wie B.
```

```aufgabe
id: lm-anw-geldanlage
titel: Geld auf drei Anlagen verteilen
niveau: 3
lernziel: 9
kompetenz: modellieren
angabe: |
  Frau Berger legt $10\,000$ Euro auf drei Anlagen mit $2\,\%$, $3\,\%$ und $5\,\%$ Jahreszinsen an. Nach einem Jahr erhält sie
  insgesamt $330$ Euro Zinsen. Auf der Anlage mit $3\,\%$ liegt doppelt so viel wie auf der mit $5\,\%$.
  Wie viel Euro liegen auf jeder Anlage?
teile:
  - typ: vektor
    label: 'Beträge in Euro $(2\,\%,\ 3\,\%,\ 5\,\%)$'
    namen: ["x", "y", "z"]
    loesung: ["2200", "5200", "2600"]
    fehler:
      - wert: ["2200", "2600", "5200"]
        meldung: |
          Doppelt so viel liegt auf der Anlage mit $3\,\%$. Also ist $y = 2z$, nicht $z = 2y$.
      - wert: ["4000", "4000", "2000"]
        meldung: |
          Prüfe die Zinsen: $0{,}02\cdot 4000 + 0{,}03\cdot 4000 + 0{,}05\cdot 2000 = 300$ Euro, nicht $330$.
hinweise:
  - '$x$, $y$, $z$ seien die Beträge auf den Anlagen mit $2\,\%$, $3\,\%$, $5\,\%$. Gleichungen: Summe, Zinsen und $y = 2z$.'
  - 'Setze $y = 2z$ in die anderen beiden Gleichungen ein: $x + 3z = 10\,000$ und $0{,}02x + 0{,}11z = 330$.'
loesung: |
  Ansatz: Drei Unbekannte, drei Bedingungen: $x + y + z = 10\,000$, $\;0{,}02x + 0{,}03y + 0{,}05z = 330$, $\;y - 2z = 0$.
  ---
  Mit $y = 2z$: $x + 3z = 10\,000$ und $0{,}02x + 0{,}06z + 0{,}05z = 330$, also $0{,}02x + 0{,}11z = 330$.
  ---
  Aus der ersten: $x = 10\,000 - 3z$. Eingesetzt: $200 - 0{,}06z + 0{,}11z = 330$, also $0{,}05z = 130$ und $z = 2600$.
  ---
  Dann $y = 5200$ und $x = 10\,000 - 7800 = 2200$.
  ---
  Probe: $2200 + 5200 + 2600 = 10\,000$, Zinsen $44 + 156 + 130 = 330$ Euro. Antwort: $2200$ Euro zu $2\,\%$, $5200$ Euro zu $3\,\%$ und $2600$ Euro zu $5\,\%$.
```

```aufgabe
id: lm-anw-leontief
titel: Produktion zweier verflochtener Zweige
niveau: 3
lernziel: 9
kompetenz: modellieren
angabe: |
  Vertiefung. Zwei Wirtschaftszweige haben die Verflechtungsmatrix $A = \begin{pmatrix} 0{,}1 & 0{,}3\\ 0{,}2 & 0{,}4 \end{pmatrix}$. Der Markt
  verlangt $\vec y = (48, 24)$ Einheiten. Bestimme die nötige Produktion $\vec x$ aus $(E - A)\vec x = \vec y$.
teile:
  - typ: zahl
    label: '$\det(E - A)$'
    loesung: "0.9*0.6 - 0.3*0.2"
    anzeige: '0{,}48'
    fehler:
      - wert: "0.6"
        meldung: |
          Die Nebendiagonale von $E - A$ ist $-0{,}3$ und $-0{,}2$. Ihr Produkt $+0{,}06$ wird abgezogen: $0{,}54 - 0{,}06$.
  - typ: vektor
    label: 'Produktion $\vec x$'
    namen: ["x1", "x2"]
    loesung: ["75", "65"]
    fehler:
      - wert: ["48", "24"]
        meldung: |
          Das ist nur die Nachfrage des Marktes. Die Zweige verbrauchen zusätzlich einen Teil ihrer eigenen Produktion. Löse $(E - A)\vec x = \vec y$.
hinweise:
  - '$E - A = \begin{pmatrix} 0{,}9 & -0{,}3\\ -0{,}2 & 0{,}6 \end{pmatrix}$.'
  - 'Mit der Formel für die Inverse: $(E - A)^{-1} = \frac{1}{0{,}48}\begin{pmatrix} 0{,}6 & 0{,}3\\ 0{,}2 & 0{,}9 \end{pmatrix}$.'
loesung: |
  Ansatz: Von der Produktion $\vec x$ bleibt $(E - A)\vec x$ für den Markt. Gesucht ist $\vec x$ mit $(E - A)\vec x = \vec y$.
  ---
  $E - A = \begin{pmatrix} 0{,}9 & -0{,}3\\ -0{,}2 & 0{,}6 \end{pmatrix}$, $\det(E - A) = 0{,}54 - 0{,}06 = 0{,}48$.
  ---
  $\vec x = \frac{1}{0{,}48}\begin{pmatrix} 0{,}6\cdot 48 + 0{,}3\cdot 24\\ 0{,}2\cdot 48 + 0{,}9\cdot 24 \end{pmatrix} = \frac{1}{0{,}48}\begin{pmatrix} 36\\ 31{,}2 \end{pmatrix} = \begin{pmatrix} 75\\ 65 \end{pmatrix}$.
  ---
  Probe: Zweig 1 verbraucht intern $0{,}1\cdot 75 + 0{,}3\cdot 65 = 27$, für den Markt bleiben $75 - 27 = 48$. Zweig 2: $0{,}2\cdot 75 + 0{,}4\cdot 65 = 41$, es bleiben $65 - 41 = 24$.
```

## Gemischte Wiederholung

In diesem Abschnitt sind Aufgaben aus dem ganzen Kapitel gemischt. Dazu kommen Aufgaben, die Stoff aus den Kapiteln 1 und 2 mit
Gleichungssystemen verbinden. Vor jeder Aufgabe steht die wichtigste Frage der Prüfung: **Welches Verfahren passt hier?** Nimm
dir diese Frage bewusst vor, bevor du zu rechnen beginnst. Genau dieses Erkennen übt man nicht, wenn man nur Aufgaben eines
einzigen Abschnitts hintereinander löst.

```aufgabe
id: lm-mix-verfahren-2x2
titel: "Welches Verfahren passt? Drei kleine Systeme"
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Ordne jedem System das bequemste Lösungsverfahren zu. Du musst nicht rechnen.

  a) $y = 3x - 2$ und $y = -x + 6$

  b) $x = 4 - 2y$ und $3x + 5y = 13$

  c) $7x + 4y = 1$ und $5x - 6y = 13$
teile:
  - typ: auswahl
    label: 'a)'
    optionen: ['Einsetzen', 'Gleichsetzen', 'Addieren']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Einsetzen geht auch, aber beide Gleichungen sind schon nach $y$ aufgelöst. Dann setzt man die rechten Seiten direkt gleich.'
      - wert: 2
        meldung: 'Addieren geht immer, ist hier aber ein Umweg. Beide Gleichungen haben bereits die Form $y = \dots$.'
  - typ: auswahl
    label: 'b)'
    optionen: ['Einsetzen', 'Gleichsetzen', 'Addieren']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Gleichsetzen braucht zwei Gleichungen, die nach derselben Unbekannten aufgelöst sind. Hier ist nur die erste nach $x$ aufgelöst.'
      - wert: 2
        meldung: 'Die erste Gleichung liefert schon einen fertigen Term für $x$. Setze ihn direkt in die zweite ein.'
  - typ: auswahl
    label: 'c)'
    optionen: ['Einsetzen', 'Gleichsetzen', 'Addieren']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: 'Keine Unbekannte hat den Koeffizienten $1$. Beim Auflösen entstünden Brüche.'
      - wert: 1
        meldung: 'Keine der Gleichungen ist nach einer Unbekannten aufgelöst.'
hinweise:
  - 'Achte darauf, ob eine Unbekannte schon allein steht oder ob beide Gleichungen nach derselben Unbekannten aufgelöst sind.'
loesung: |
  Ansatz: Die äußere Form der Gleichungen entscheidet über das bequemste Verfahren.
  ---
  a) Beide Gleichungen haben die Form $y = \dots$: Gleichsetzen. Zur Kontrolle: $3x - 2 = -x + 6$ ergibt $x = 2$, $y = 4$.
  ---
  b) $x$ steht schon allein: Einsetzen. Zur Kontrolle: $3(4 - 2y) + 5y = 13$ ergibt $y = -1$, $x = 6$.
  ---
  c) Keine bequeme Unbekannte: Addieren. Zur Kontrolle: $3\cdot\text{I} + 2\cdot\text{II}$ ergibt $31x = 29$. Hier entstehen also Brüche, aber nur einmal am Schluss.
```

```aufgabe
id: lm-mix-verfahren-werkzeug
titel: "Welches Verfahren passt? Drei Fragestellungen"
niveau: 1
lernziel: 7
kompetenz: verstehen
angabe: |
  Welches Werkzeug ist für die Frage am besten geeignet? Du musst nicht rechnen.

  a) Hat $A\vec x = \vec b$ für jede rechte Seite genau eine Lösung? $A$ ist eine konkrete $3\times 3$-Matrix.

  b) Dieselbe $3\times 3$-Matrix $A$ soll mit zehn verschiedenen rechten Seiten gelöst werden.

  c) Ein System mit vier Gleichungen und vier Unbekannten soll gelöst werden.
teile:
  - typ: auswahl
    label: 'a)'
    optionen: ['Gauß-Verfahren', 'Determinante', 'inverse Matrix']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Gauß ginge auch, aber man müsste es für jede rechte Seite neu rechnen. Eine einzige Zahl beantwortet die Frage für alle rechten Seiten.'
      - wert: 2
        meldung: 'Ob die Inverse existiert, ist genau die Frage. Das prüft man am schnellsten mit $\det A \neq 0$.'
  - typ: auswahl
    label: 'b)'
    optionen: ['Gauß-Verfahren', 'Determinante', 'inverse Matrix']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: 'Zehnmal Gauß ist viel Arbeit. Wer $A^{-1}$ einmal berechnet, bekommt jede Lösung mit $\vec x = A^{-1}\vec b$.'
      - wert: 1
        meldung: 'Die Determinante sagt nur, ob es eindeutige Lösungen gibt. Die Lösungen selbst liefert sie nicht.'
  - typ: auswahl
    label: 'c)'
    optionen: ['Gauß-Verfahren', 'Regel von Sarrus', 'Formel für 2×2-Inverse']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Die Regel von Sarrus gilt nur für $3\times 3$-Matrizen.'
      - wert: 2
        meldung: 'Die Formel $\frac{1}{ad - bc}\begin{pmatrix} d & -b\\ -c & a \end{pmatrix}$ gibt es nur für $2\times 2$-Matrizen.'
hinweise:
  - 'Frage dich jeweils: Ist eine Ja-Nein-Frage gestellt, sind viele rechte Seiten gegeben, oder ist das System groß?'
loesung: |
  Ansatz: Jedes Werkzeug hat seine Stärke. Die Determinante beantwortet Ja-Nein-Fragen, die Inverse lohnt sich bei vielen rechten Seiten, Gauß funktioniert immer.
  ---
  a) Determinante: $\det A \neq 0$ genau dann, wenn es für jede rechte Seite genau eine Lösung gibt.
  ---
  b) Inverse: einmal $A^{-1}$ berechnen, dann zehnmal $\vec x = A^{-1}\vec b$.
  ---
  c) Gauß-Verfahren: Es funktioniert für jede Größe. Sarrus und die $2\times 2$-Formel gelten nur für kleine Matrizen.
```

```aufgabe
id: lm-mix-nichtlinear
titel: Ein System, das nicht linear ist
niveau: 2
lernziel: 0
kompetenz: begruenden
angabe: |
  Rückblick auf quadratische Gleichungen in [Kapitel 2, „Quadratische Gleichungen“](/lernen/mathe3/gleichungen/quadratische-gleichungen).

  Gegeben ist das System $x + y = 7$ und $x\cdot y = 12$.

  a) Welche Werte kann $x$ annehmen? Gib alle an.

  b) Ein lineares System hat nie genau zwei Lösungen. Warum ist das hier kein Widerspruch?
teile:
  - typ: menge
    label: 'a) mögliche Werte von $x$'
    loesung: ["3", "4"]
    fehler:
      - wert: ["3"]
        meldung: |
          Die quadratische Gleichung $x^2 - 7x + 12 = 0$ hat zwei Lösungen. Auch $x = 4$ mit $y = 3$ erfüllt beide Gleichungen.
      - wert: ["-3", "-4"]
        meldung: |
          Prüfe mit der ersten Gleichung: $-3 + y = 7$ ergibt $y = 10$, und $(-3)\cdot 10 = -30 \neq 12$. Achte auf die Vorzeichen in $x^2 - 7x + 12$.
  - typ: text
    label: 'b) Begründung'
    muster: |
      Die Gleichung $x\cdot y = 12$ ist nicht linear, denn zwei Unbekannte werden miteinander multipliziert. Die Regel „keine, genau
      eine oder unendlich viele Lösungen“ gilt nur für lineare Systeme. Geometrisch ist $xy = 12$ keine Gerade, sondern eine gekrümmte
      Kurve (eine Hyperbel). Sie kann die Gerade $x + y = 7$ in zwei Punkten schneiden.
hinweise:
  - 'Löse die erste Gleichung nach $y$ auf und setze in die zweite ein.'
  - 'Es entsteht $x(7 - x) = 12$, also $x^2 - 7x + 12 = 0$. Löse diese quadratische Gleichung.'
loesung: |
  Ansatz: Einsetzen funktioniert auch bei nichtlinearen Systemen. Es entsteht aber keine lineare, sondern eine quadratische Gleichung.
  ---
  Aus $y = 7 - x$ folgt $x\,(7 - x) = 12$, also $x^2 - 7x + 12 = 0$.
  ---
  Lösungsformel oder Zerlegung: $(x - 3)(x - 4) = 0$, also $x = 3$ oder $x = 4$. Die Lösungspaare sind $(3, 4)$ und $(4, 3)$.
  ---
  b) Das System ist nicht linear, weil $x\cdot y$ vorkommt. Die Aussage über lineare Systeme gilt hier nicht. Eine Gerade und eine gekrümmte Kurve können sich in zwei Punkten schneiden.
```

```aufgabe
id: lm-mix-brueche
titel: Koeffizienten mit Brüchen
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Rückblick auf das Bruchrechnen in [Kapitel 1](/lernen/mathe3/zahlen/bruchrechnen).

  Löse das System
  $$\begin{aligned} \tfrac23 x - \tfrac14 y &= 1\\[2pt] \tfrac12 x + \tfrac13 y &= \tfrac{17}{6} \end{aligned}$$
teile:
  - typ: vektor
    label: 'Lösung $(x, y)$'
    namen: ["x", "y"]
    loesung: ["3", "4"]
    fehler:
      - wert: ["4", "3"]
        meldung: |
          Prüfe die Reihenfolge. Setz dein Paar in die erste Gleichung ein: $\frac23\cdot 4 - \frac14\cdot 3 = \frac{23}{12} \neq 1$.
hinweise:
  - 'Multipliziere die erste Gleichung mit $12$ und die zweite mit $6$. Das sind die Hauptnenner.'
  - 'Du erhältst $8x - 3y = 12$ und $3x + 2y = 17$. Rechne $2\cdot\text{I} + 3\cdot\text{II}$.'
loesung: |
  Ansatz: Zuerst die Brüche beseitigen, indem man jede Gleichung mit ihrem Hauptnenner multipliziert.
  ---
  Erste Gleichung mal $12$: $8x - 3y = 12$. Zweite Gleichung mal $6$: $3x + 2y = 17$.
  ---
  $2\cdot\text{I} + 3\cdot\text{II}$: $16x - 6y + 9x + 6y = 24 + 51$, also $25x = 75$ und $x = 3$.
  ---
  Aus $3\cdot 3 + 2y = 17$ folgt $y = 4$. Probe im Original: $2 - 1 = 1$ und $\frac32 + \frac43 = \frac{9 + 8}{6} = \frac{17}{6}$.
```

```aufgabe
id: lm-mix-zinsen
titel: Zwei Sparbücher
niveau: 2
lernziel: 9
kompetenz: modellieren
angabe: |
  Rückblick auf die Prozentrechnung in [Kapitel 1, „Prozentrechnung“](/lernen/mathe3/zahlen/prozentrechnung).

  Jonas hat $8000$ Euro auf zwei Sparbücher verteilt. Das eine bringt $1{,}5\,\%$, das andere $2{,}5\,\%$ Zinsen pro Jahr. Nach einem Jahr
  erhält er zusammen $150$ Euro Zinsen. Wie viel liegt auf jedem Sparbuch?
teile:
  - typ: zahl
    label: 'Betrag zu $1{,}5\,\%$'
    einheit: 'Euro'
    loesung: "5000"
    fehler:
      - wert: "3000"
        meldung: |
          $3000$ Euro liegen auf dem Sparbuch mit $2{,}5\,\%$. Probe: $0{,}015\cdot 3000 + 0{,}025\cdot 5000 = 45 + 125 = 170 \neq 150$.
  - typ: zahl
    label: 'Betrag zu $2{,}5\,\%$'
    einheit: 'Euro'
    loesung: "3000"
    fehler:
      - wert: "5000"
        meldung: |
          Kontrolliere die Zuordnung der Unbekannten zu den Zinssätzen.
hinweise:
  - '$x$ und $y$ seien die Beträge. Gleichungen: $x + y = 8000$ und $0{,}015x + 0{,}025y = 150$.'
  - 'Setze $x = 8000 - y$ in die Zinsgleichung ein.'
loesung: |
  Ansatz: $x$ = Betrag zu $1{,}5\,\%$, $y$ = Betrag zu $2{,}5\,\%$. Summe: $x + y = 8000$. Zinsen: $0{,}015x + 0{,}025y = 150$.
  ---
  Einsetzen: $0{,}015\,(8000 - y) + 0{,}025y = 150$, also $120 + 0{,}01y = 150$ und $y = 3000$.
  ---
  Dann $x = 5000$. Probe: $75 + 75 = 150$ Euro Zinsen.
  ---
  Antwort: $5000$ Euro zu $1{,}5\,\%$ und $3000$ Euro zu $2{,}5\,\%$.
```

```aufgabe
id: lm-mix-potenzen
titel: Unbekannte in den Hochzahlen
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Rückblick auf die Potenzregeln in [Kapitel 1, „Potenzen und Wurzeln“](/lernen/mathe3/zahlen/potenzen-und-wurzeln).

  Bestimme $x$ und $y$ aus
  $$2^x\cdot 4^y = 32 \qquad\text{und}\qquad \frac{3^x}{9^y} = \frac13.$$
teile:
  - typ: vektor
    label: 'Lösung $(x, y)$'
    namen: ["x", "y"]
    loesung: ["2", "3/2"]
    fehler:
      - wert: ["2", "3"]
        meldung: |
          $4^y = (2^2)^y = 2^{2y}$. Aus $x + 2y = 5$ und $x = 2$ folgt $2y = 3$, also $y = \frac32$.
      - wert: ["3", "1"]
        meldung: |
          $\frac13 = 3^{-1}$, nicht $3^{1}$. Die zweite Gleichung lautet $x - 2y = -1$.
hinweise:
  - 'Schreib alles als Potenzen derselben Basis: $4^y = 2^{2y}$, $32 = 2^5$, $9^y = 3^{2y}$, $\frac13 = 3^{-1}$.'
  - 'Gleiche Basen bedeuten gleiche Hochzahlen. Es entstehen $x + 2y = 5$ und $x - 2y = -1$.'
loesung: |
  Ansatz: Mit den Potenzregeln werden aus den Gleichungen lineare Gleichungen für die Hochzahlen.
  ---
  $2^x\cdot 2^{2y} = 2^{x + 2y} = 2^5$, also $x + 2y = 5$. $\;\frac{3^x}{3^{2y}} = 3^{x - 2y} = 3^{-1}$, also $x - 2y = -1$.
  ---
  Addieren: $2x = 4$, also $x = 2$. Dann $2y = 3$ und $y = \frac32$.
  ---
  Probe: $2^2\cdot 4^{1{,}5} = 4\cdot 8 = 32$ und $\frac{3^2}{9^{1{,}5}} = \frac{9}{27} = \frac13$.
```

```aufgabe
id: lm-mix-bruchgleichungen
titel: Unbekannte im Nenner
niveau: 3
lernziel: 1
kompetenz: anwenden
angabe: |
  Rückblick auf Bruchgleichungen in [Kapitel 2, „Bruchgleichungen“](/lernen/mathe3/gleichungen/bruchgleichungen).

  Löse das System
  $$\frac2x + \frac3y = 2 \qquad\text{und}\qquad \frac4x - \frac1y = \frac12.$$
teile:
  - typ: vektor
    label: 'Lösung $(x, y)$'
    namen: ["x", "y"]
    loesung: ["4", "2"]
    fehler:
      - wert: ["1/4", "1/2"]
        meldung: |
          Das sind die Werte der Hilfsgrößen $u = \frac1x$ und $v = \frac1y$. Gesucht sind $x$ und $y$ selbst, also die Kehrwerte.
hinweise:
  - 'Das System ist in $x$ und $y$ nicht linear. Setze $u = \frac1x$ und $v = \frac1y$. Dann wird es linear.'
  - 'Es entsteht $2u + 3v = 2$ und $4u - v = \frac12$. Löse es und bilde dann die Kehrwerte.'
loesung: |
  Ansatz: Eine **Substitution** macht das System linear. Mit $u = \frac1x$ und $v = \frac1y$ lautet es $2u + 3v = 2$ und $4u - v = \frac12$.
  ---
  Aus der zweiten Gleichung: $v = 4u - \frac12$. Eingesetzt: $2u + 12u - \frac32 = 2$, also $14u = \frac72$ und $u = \frac14$.
  ---
  Dann $v = 1 - \frac12 = \frac12$. Zurück zu $x$ und $y$: $x = \frac1u = 4$ und $y = \frac1v = 2$. Beide sind nicht $0$, die Brüche sind also definiert.
  ---
  Probe: $\frac24 + \frac32 = 2$ und $\frac44 - \frac12 = \frac12$.
```

```aufgabe
id: lm-mix-inverse-anwenden
titel: Determinante, Inverse und Lösung
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Gegeben ist $A = \begin{pmatrix} 2 & 1\\ 3 & 2 \end{pmatrix}$.

  a) Berechne $\det A$ und $A^{-1}$.

  b) Löse $A\vec x = \begin{pmatrix} 4\\ 7 \end{pmatrix}$ mit $A^{-1}$.
teile:
  - typ: zahl
    label: 'a) $\det A$'
    loesung: "2*2 - 1*3"
    anzeige: '1'
    fehler:
      - wert: "7"
        meldung: 'Hauptdiagonale **minus** Nebendiagonale: $4 - 3$.'
  - typ: vektor
    label: 'a) $A^{-1}$ zeilenweise'
    namen: ["a11", "a12", "a21", "a22"]
    loesung: ["2", "-1", "-3", "2"]
    fehler:
      - wert: ["2", "1", "3", "2"]
        meldung: 'Die Einträge der Nebendiagonale bekommen ein Minus: $-1$ und $-3$.'
  - typ: vektor
    label: 'b) Lösung $(x, y)$'
    namen: ["x", "y"]
    loesung: ["1", "2"]
    fehler:
      - wert: ["15", "26"]
        meldung: 'Das ist $A\cdot\vec b$. Gesucht ist $A^{-1}\vec b$.'
hinweise:
  - 'Formel für $2\times 2$: Diagonale tauschen, Nebendiagonale mit Minus, durch $\det A$ teilen.'
  - 'Dann $\vec x = A^{-1}\vec b$ mit Zeile mal Vektor.'
loesung: |
  Ansatz: Weil $\det A \neq 0$ ist, existiert $A^{-1}$, und $\vec x = A^{-1}\vec b$ ist die einzige Lösung.
  ---
  a) $\det A = 4 - 3 = 1$, also $A^{-1} = \begin{pmatrix} 2 & -1\\ -3 & 2 \end{pmatrix}$.
  ---
  b) $\vec x = (2\cdot 4 - 7,\ -3\cdot 4 + 2\cdot 7) = (1, 2)$.
  ---
  Probe: $2 + 2 = 4$ und $3 + 4 = 7$.
```

```aufgabe
id: lm-mix-deutung
titel: Von der Stufenform zum Bild
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: |
  Drei Ebenen im Raum werden durch ein System beschrieben. Nach dem Gauß-Verfahren lautet die Stufenform
  $$\left(\begin{array}{rrr|r} 1 & 2 & -1 & 3\\ 0 & 1 & 1 & 2\\ 0 & 0 & 0 & 0 \end{array}\right).$$
  Kein Normalvektor ist ein Vielfaches eines anderen. Wie liegen die drei Ebenen?
teile:
  - typ: auswahl
    optionen:
      - 'Sie haben eine gemeinsame Gerade (Ebenenbüschel).'
      - 'Sie schneiden sich in genau einem Punkt.'
      - 'Sie bilden ein Prisma.'
      - 'Alle drei Ebenen sind identisch.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Einen einzigen Schnittpunkt gibt es bei Rang $3$. Hier hat die Stufenform nur zwei Zeilen, die nicht null sind.
      - wert: 2
        meldung: |
          Beim Prisma gibt es keine Lösung, also einen Widerspruch $0 = c$. Hier lautet die letzte Zeile $0 = 0$.
      - wert: 3
        meldung: |
          Identische Ebenen hätten Rang $1$. Hier ist der Rang $2$, und die Normalvektoren sind keine Vielfachen.
hinweise:
  - 'Bestimme $\operatorname{rg}(A)$ und $\operatorname{rg}(A \mid b)$ aus der Stufenform.'
  - 'Rang $2$ ohne Widerspruch heißt: ein freier Parameter, die Lösungsmenge ist eine Gerade.'
loesung: |
  Ansatz: Ränge ablesen und mit der Liste der Lagen dreier Ebenen vergleichen.
  ---
  $\operatorname{rg}(A) = \operatorname{rg}(A \mid b) = 2 < 3$. Es gibt einen freien Parameter, die Lösungsmenge ist eine Gerade.
  ---
  Weil keine zwei Ebenen parallel oder gleich sind, gehen alle drei durch diese Gerade: ein **Ebenenbüschel**. Mit $z = t$ ist die Gerade $(-1 + 3t \mid 2 - t \mid t)$.
```

## Prüfungsaufgaben

Diese Aufgaben haben das Format der schriftlichen Prüfung: mehrteilig, mit Rechnung **und** Deutung. Jede hat einen
Zeitrichtwert. Rechne sie mit Stoppuhr und ohne Hilfen, so wie in der Prüfung. Erlaubt sind dort ein nicht grafikfähiger
Taschenrechner und die Formelsammlung. Schreib zu jedem Teil zuerst den Ansatz hin, denn dafür gibt es auch dann Punkte, wenn
sich später ein Rechenfehler einschleicht. Schreib Deutungen in ganzen Sätzen.

```aufgabe
id: lm-pr-karigl
titel: Ein Tripel für alle oder nur für eine Gleichung
niveau: 3
lernziel: 4
kompetenz: begruenden
punkte: 10
quelle: nach Musterprüfung Karigl, Aufgabe 1 (abgewandelt)
angabe: |
  Zeitrichtwert: 20 Minuten.

  Gegeben sind drei lineare Gleichungen in drei Variablen:
  $$\begin{aligned} x + 2y - z &= 0\\ 2x - y + 3z &= 5\\ -3x + y + 2z &= 11 \end{aligned}$$
  a) Finden Sie ein Tripel $(x, y, z)$, das alle drei Gleichungen erfüllt.

  b) Finden Sie ein Tripel, das nur die erste, nicht aber die zweite und die dritte Gleichung erfüllt.

  c) Finden Sie ein Tripel, das die ersten beiden, aber nicht die dritte Gleichung erfüllt.

  d) Wie können diese Fälle geometrisch interpretiert werden?
teile:
  - typ: vektor
    label: 'a) Lösung des Systems'
    namen: ["x", "y", "z"]
    loesung: ["-1", "2", "3"]
    fehler:
      - wert: ["1", "2", "3"]
        meldung: |
          Prüfe mit der ersten Gleichung: $1 + 4 - 3 = 2 \neq 0$. Kontrolliere beim Rückwärtseinsetzen das Vorzeichen von $x$.
  - typ: zahl
    label: 'b) Wähle $y = 1$ und $z = 0$. Welches $x$ erfüllt dann die erste Gleichung?'
    loesung: "-2"
    fehler:
      - wert: "2"
        meldung: |
          Aus $x + 2\cdot 1 - 0 = 0$ folgt $x = -2$.
  - typ: zahl
    label: 'c) Wähle $z = 0$. Welches $x$ erfüllt dann die ersten beiden Gleichungen?'
    loesung: "2"
    fehler:
      - wert: "-1"
        meldung: |
          $x = -1$ gehört zur Lösung aus a), dort ist aber $z = 3$. Löse mit $z = 0$ das System $x + 2y = 0$, $2x - y = 5$.
  - typ: text
    label: 'd) Geometrische Interpretation'
    muster: |
      Jede der drei Gleichungen beschreibt eine Ebene im Raum. a) $(-1, 2, 3)$ ist der einzige Punkt, der auf allen drei Ebenen liegt:
      Die Ebenen schneiden sich im Punkt $S(-1 \mid 2 \mid 3)$. Die Lösung ist eindeutig, weil $\det A = -30 \neq 0$.
      b) $(-2, 1, 0)$ liegt auf der ersten Ebene, aber auf keiner der beiden anderen. c) $(2, -1, 0)$ liegt auf der Schnittgeraden der
      ersten beiden Ebenen, aber nicht auf der dritten Ebene. Diese Schnittgerade geht durch $S$.
hinweise:
  - 'Für a): Gauß mit $\text{II} - 2\cdot\text{I}$ und $\text{III} + 3\cdot\text{I}$. Die neue Zeile II lautet $(0, -5, 5 \mid 5)$, teile sie durch $-5$.'
  - 'Für b): Zwei Variablen frei wählen, die dritte aus der ersten Gleichung berechnen und prüfen, dass die anderen beiden **nicht** erfüllt sind.'
  - 'Für c): Mit $z = 0$ bleiben $x + 2y = 0$ und $2x - y = 5$. Löse dieses kleine System und prüfe dann die dritte Gleichung.'
loesung: |
  Ansatz: a) mit dem Gauß-Verfahren. b) und c) durch geschicktes Wählen von Variablen. d) Jede Gleichung ist eine Ebene.
  ---
  **a)** $\text{II} - 2\cdot\text{I}$: $(0,\ -5,\ 5 \mid 5)$, geteilt durch $-5$: $(0,\ 1,\ -1 \mid -1)$. $\;\text{III} + 3\cdot\text{I}$: $(0,\ 7,\ -1 \mid 11)$.
  Dann $\text{III} - 7\cdot\text{II}$: $(0,\ 0,\ 6 \mid 18)$, also $z = 3$.
  ---
  Rückwärts: $y - 3 = -1$, also $y = 2$. $\;x + 4 - 3 = 0$, also $x = -1$. Probe: $-1 + 4 - 3 = 0$, $-2 - 2 + 9 = 5$, $3 + 2 + 6 = 11$.
  ---
  **b)** Mit $y = 1$, $z = 0$ verlangt die erste Gleichung $x = -2$. Kontrolle: zweite Gleichung $-4 - 1 + 0 = -5 \neq 5$, dritte $6 + 1 + 0 = 7 \neq 11$. Also erfüllt $(-2, 1, 0)$ nur die erste Gleichung.
  ---
  **c)** Mit $z = 0$: $x + 2y = 0$ und $2x - y = 5$. Aus der ersten $x = -2y$, eingesetzt $-5y = 5$, also $y = -1$ und $x = 2$. Kontrolle dritte Gleichung: $-6 - 1 + 0 = -7 \neq 11$. Also erfüllt $(2, -1, 0)$ die ersten beiden, aber nicht die dritte Gleichung.
  ---
  **d)** Jede Gleichung beschreibt eine Ebene im Raum. Fall a: Die drei Ebenen schneiden sich in genau einem Punkt $S(-1 \mid 2 \mid 3)$. Fall b: ein Punkt der ersten Ebene, der auf keiner anderen liegt. Fall c: ein Punkt der Schnittgeraden der ersten beiden Ebenen, der nicht auf der dritten liegt.
```

```aufgabe
id: lm-pr-schranz
titel: Lösbarkeit eines Systems mit zwei Gleichungen
niveau: 3
lernziel: 4
kompetenz: begruenden
punkte: 6
quelle: nach Musterprüfung Schranz-Kirlinger, Aufgabe 1.2 (abgewandelt)
angabe: |
  Zeitrichtwert: 10 Minuten.

  Untersuchen Sie das Gleichungssystem
  $$\begin{aligned} 3x - 6y + 9z &= 4\\ -x + 2y - 3z &= 2 \end{aligned}$$
  auf Lösbarkeit. Wie können das Gleichungssystem und seine Lösungsmenge geometrisch interpretiert werden?

  Zusatz: Für welchen Wert $c$ anstelle der rechten Seite $2$ in der zweiten Gleichung wäre das System lösbar? Wie viele freie
  Parameter hätte die Lösungsmenge dann?
teile:
  - typ: auswahl
    label: 'Das System hat'
    optionen: ['genau eine Lösung', 'keine Lösung', 'unendlich viele Lösungen mit einem Parameter', 'unendlich viele Lösungen mit zwei Parametern']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Zwei Gleichungen mit drei Unbekannten haben nie genau eine Lösung. Der Rang ist höchstens $2$.
      - wert: 2
        meldung: |
          Rechne $\text{I} + 3\cdot\text{II}$. Links bleibt nichts, rechts $4 + 6$. Das ist ein Widerspruch.
      - wert: 3
        meldung: |
          Die linken Seiten sind Vielfache, die rechten Seiten aber nicht im selben Verhältnis. Prüfe $\text{I} + 3\cdot\text{II}$.
  - typ: vektor
    label: '$\big(\operatorname{rg}(A),\ \operatorname{rg}(A \mid b)\big)$'
    namen: ["rg A", "rg (A|b)"]
    loesung: ["1", "2"]
    fehler:
      - wert: ["2", "2"]
        meldung: |
          Die zweite Zeile von $A$ ist das $\left(-\frac13\right)$-Fache der ersten. Nach dem Eliminieren ist sie links eine Nullzeile, also $\operatorname{rg}(A) = 1$.
  - typ: text
    label: 'Geometrische Interpretation'
    muster: |
      Jede Gleichung beschreibt eine Ebene im Raum. Die Normalvektoren $(3, -6, 9)$ und $(-1, 2, -3)$ sind Vielfache voneinander,
      denn $(3, -6, 9) = -3\cdot(-1, 2, -3)$. Die Ebenen sind also parallel. Multipliziert man die zweite Gleichung mit $-3$, erhält man
      $3x - 6y + 9z = -6 \neq 4$. Die Ebenen sind nicht identisch. Zwei parallele, verschiedene Ebenen haben keinen gemeinsamen
      Punkt, die Lösungsmenge ist leer.
  - typ: zahl
    label: 'Zusatz: Wert $c$'
    loesung: "-4/3"
    anzeige: '-\tfrac43'
    fehler:
      - wert: "4/3"
        meldung: |
          Damit die zweite Gleichung mal $-3$ genau die erste ergibt, muss $-3c = 4$ gelten. Achte auf das Vorzeichen.
      - wert: "-12"
        meldung: |
          Nicht $c = -3\cdot 4$, sondern $-3\cdot c = 4$. Löse nach $c$ auf.
  - typ: zahl
    label: 'Zusatz: Anzahl der freien Parameter'
    loesung: "2"
    fehler:
      - wert: "1"
        meldung: |
          Bei $c = -\frac43$ sind beide Gleichungen gleichwertig. Es bleibt **eine** Gleichung für drei Unbekannte: $3 - 1 = 2$ freie Parameter.
hinweise:
  - 'Vergleiche die linken Seiten. Was ergibt die zweite Gleichung mal $-3$?'
  - 'Zwei Gleichungen mit drei Unbekannten haben nie genau eine Lösung. Es bleiben also nur zwei Möglichkeiten.'
  - 'Zusatz: Lösbar ist das System nur, wenn auch die rechten Seiten im Verhältnis $-3 : 1$ stehen.'
loesung: |
  Ansatz: Linke Seiten vergleichen. Sind sie Vielfache, entscheiden die rechten Seiten zwischen „keine Lösung“ und „unendlich viele“.
  ---
  Die zweite Gleichung mal $-3$: $3x - 6y + 9z = -6$. Die erste sagt $3x - 6y + 9z = 4$. Widerspruch $4 = -6$. In Matrixform: $\text{I} + 3\cdot\text{II}$ ergibt $(0,\ 0,\ 0 \mid 10)$.
  ---
  Also $\operatorname{rg}(A) = 1$ und $\operatorname{rg}(A \mid b) = 2$: **keine Lösung**, $L = \{\,\}$.
  ---
  Geometrisch: Beide Gleichungen beschreiben Ebenen mit parallelen Normalvektoren $(3, -6, 9) = -3\cdot(-1, 2, -3)$. Die Ebenen sind parallel und verschieden. Sie schneiden sich nicht.
  ---
  Zusatz: Mit $-3c = 4$, also $c = -\frac43$, sind beide Gleichungen gleichwertig. Die Ebenen fallen zusammen, $\operatorname{rg}(A) = \operatorname{rg}(A \mid b) = 1$, und es gibt $3 - 1 = 2$ freie Parameter. Mit $y = s$ und $z = t$: $L = \{(\tfrac43 + 2s - 3t,\ s,\ t) \mid s, t \in \R\}$, die ganze Ebene.
```

```aufgabe
id: lm-pr-parameter
titel: Ein System mit drei Unbekannten und einem Parameter
niveau: 3
lernziel: 8
kompetenz: anwenden
punkte: 10
angabe: |
  Zeitrichtwert: 25 Minuten.

  Gegeben ist das System mit dem reellen Parameter $a$:
  $$\begin{aligned} x + y + z &= 2\\ x + 2y + a z &= 3\\ 2x + a y + 4z &= 5 \end{aligned}$$
  a) Berechnen Sie die Determinante der Koeffizientenmatrix in Abhängigkeit von $a$. Für welche $a$ ist das System eindeutig lösbar?

  b) Lösen Sie das System für $a = 1$.

  c) Untersuchen Sie die Fälle, in denen das System nicht eindeutig lösbar ist, und deuten Sie sie geometrisch.
teile:
  - typ: term
    label: 'a) $\det A$ als Term in $a$'
    variable: a
    loesung: "3a - a^2"
    fehler:
      - wert: "3a + a^2"
        meldung: |
          Die Minus-Diagonale $1\cdot a\cdot a = a^2$ wird abgezogen.
  - typ: menge
    label: 'a) Werte von $a$, für die das System **nicht** eindeutig lösbar ist'
    loesung: ["0", "3"]
    fehler:
      - wert: ["3"]
        meldung: |
          $3a - a^2 = a\,(3 - a)$. Auch der Faktor $a$ kann $0$ sein.
  - typ: vektor
    label: 'b) Lösung für $a = 1$'
    namen: ["x", "y", "z"]
    loesung: ["0", "1", "1"]
    fehler:
      - wert: ["1", "1", "0"]
        meldung: |
          Prüfe mit der dritten Gleichung: $2 + 1 + 0 = 3 \neq 5$. Aus $\text{III} - 2\cdot\text{I}$ folgt $-y + 2z = 1$.
  - typ: auswahl
    label: 'c) Für $a = 0$ hat das System'
    optionen: ['keine Lösung', 'unendlich viele Lösungen']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Für $a = 0$ ergibt $\text{II} - \text{I}$ die Zeile $(0, 1, -1 \mid 1)$ und $\text{III} - 2\cdot\text{I}$ die Zeile $(0, -2, 2 \mid 1)$. Rechne $\text{III} + 2\cdot\text{II}$.
  - typ: auswahl
    label: 'c) Für $a = 3$ hat das System'
    optionen: ['keine Lösung', 'unendlich viele Lösungen']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Für $a = 3$ ergeben $\text{II} - \text{I}$ und $\text{III} - 2\cdot\text{I}$ dieselbe Zeile $(0, 1, 2 \mid 1)$. Das gibt eine Nullzeile ohne Widerspruch.
  - typ: text
    label: 'c) Geometrische Deutung der Sonderfälle'
    muster: |
      Für $a = 0$ sind die Normalvektoren $(1, 1, 1)$, $(1, 2, 0)$, $(2, 0, 4)$ paarweise keine Vielfachen. Die drei Ebenen schneiden sich
      paarweise in drei parallelen Geraden ohne gemeinsamen Punkt (Prisma). Für $a = 3$ gehen alle drei Ebenen durch eine gemeinsame
      Gerade $(1 + t \mid 1 - 2t \mid t)$ (Ebenenbüschel).
hinweise:
  - 'Sarrus: Plus-Diagonalen $8 + 2a + a$, Minus-Diagonalen $4 + a^2 + 4$.'
  - '$\det A = a\,(3 - a)$. Setze die Nullstellen einzeln ein und rechne Gauß.'
  - 'Für $a = 3$: Nach $\text{II} - \text{I}$ und $\text{III} - 2\cdot\text{I}$ entstehen zwei gleiche Zeilen $(0, 1, 2 \mid 1)$.'
loesung: |
  Ansatz: Die Determinante als Term in $a$ liefert die Sonderwerte. Diese untersucht man einzeln mit Gauß.
  ---
  **a)** Sarrus: $\det A = (1\cdot 2\cdot 4 + 1\cdot a\cdot 2 + 1\cdot 1\cdot a) - (1\cdot 2\cdot 2 + 1\cdot a\cdot a + 1\cdot 1\cdot 4) = 8 + 3a - 8 - a^2 = a\,(3 - a)$.
  Eindeutig lösbar genau für $a \neq 0$ und $a \neq 3$.
  ---
  **b)** $a = 1$: $\text{II} - \text{I}$ ergibt $(0,\ 1,\ 0 \mid 1)$, also $y = 1$. $\text{III} - 2\cdot\text{I}$ ergibt $(0,\ -1,\ 2 \mid 1)$, also $-1 + 2z = 1$ und $z = 1$. Dann $x = 2 - 1 - 1 = 0$.
  Probe: $0 + 1 + 1 = 2$, $0 + 2 + 1 = 3$, $0 + 1 + 4 = 5$.
  ---
  **c)** $a = 0$: $\text{II} - \text{I}$: $(0,\ 1,\ -1 \mid 1)$. $\text{III} - 2\cdot\text{I}$: $(0,\ -2,\ 2 \mid 1)$. Dann $\text{III} + 2\cdot\text{II}$: $(0,\ 0,\ 0 \mid 3)$. **Keine Lösung.** Keine zwei Normalvektoren $(1, 1, 1)$, $(1, 2, 0)$, $(2, 0, 4)$ sind parallel: Die Ebenen bilden ein Prisma.
  ---
  $a = 3$: $\text{II} - \text{I}$ und $\text{III} - 2\cdot\text{I}$ ergeben beide $(0,\ 1,\ 2 \mid 1)$. Nullzeile, $\operatorname{rg}(A) = \operatorname{rg}(A \mid b) = 2$: **unendlich viele Lösungen**. Mit $z = t$: $y = 1 - 2t$ und $x = 2 - y - z = 1 + t$. Die drei Ebenen gehen durch die Gerade $(1 + t \mid 1 - 2t \mid t)$.
  ---
  Probe für $a = 3$ in Gleichung III: $2(1 + t) + 3(1 - 2t) + 4t = 2 + 3 + 2t - 6t + 4t = 5$.
```

```aufgabe
id: lm-pr-bedarf
titel: Bedarfsrechnung vorwärts und rückwärts
niveau: 3
lernziel: 9
kompetenz: modellieren
punkte: 10
angabe: |
  Zeitrichtwert: 20 Minuten.

  Ein Betrieb stellt aus den Rohstoffen $R_1, R_2$ die Zwischenprodukte $Z_1, Z_2$ und daraus die Endprodukte $E_1, E_2$ her.
  Die Bedarfsmatrizen (Einheiten pro Stück) sind
  $$A_{RZ} = \begin{pmatrix} 1 & 1\\ 1 & 2 \end{pmatrix}, \qquad B_{ZE} = \begin{pmatrix} 2 & 1\\ 1 & 1 \end{pmatrix}.$$
  a) Berechnen Sie die Rohstoff-Endprodukt-Matrix $C = A_{RZ}B_{ZE}$.

  b) Welcher Rohstoffbedarf entsteht für $20$ Stück $E_1$ und $10$ Stück $E_2$?

  c) Im Lager liegen $130$ Einheiten $R_1$ und $180$ Einheiten $R_2$. Wie viele Stück von $E_1$ und $E_2$ können produziert werden,
  wenn das Lager vollständig aufgebraucht werden soll? Verwenden Sie $C^{-1}$.

  d) Bei einem Lagerstand von $90$ Einheiten $R_1$ und $140$ Einheiten $R_2$ liefert dieselbe Rechnung $E_1 = -10$ und $E_2 = 60$.
  Interpretieren Sie dieses Ergebnis.
teile:
  - typ: vektor
    label: 'a) $C$ zeilenweise'
    namen: ["c11", "c12", "c21", "c22"]
    loesung: ["3", "2", "4", "3"]
    fehler:
      - wert: ["3", "4", "2", "3"]
        meldung: |
          Das ist $B_{ZE}A_{RZ}$. Die Reihenfolge muss $A_{RZ}\cdot B_{ZE}$ sein, damit die Indizes $Z$ in der Mitte zusammenpassen.
  - typ: vektor
    label: 'b) Bedarf $(R_1, R_2)$'
    namen: ["R1", "R2"]
    loesung: ["3*20 + 2*10", "4*20 + 3*10"]
    fehler:
      - wert: ["80", "70"]
        meldung: |
          Prüfe die zweite Zeile: $4\cdot 20 + 3\cdot 10 = 110$.
  - typ: vektor
    label: 'c) Stückzahlen $(E_1, E_2)$'
    namen: ["E1", "E2"]
    loesung: ["30", "20"]
    fehler:
      - wert: ["750", "1060"]
        meldung: |
          Das ist $C\cdot\vec r$. Gesucht ist $\vec x$ mit $C\vec x = \vec r$, also $\vec x = C^{-1}\vec r$.
  - typ: text
    label: 'd) Interpretation'
    muster: |
      Eine negative Stückzahl lässt sich nicht herstellen. Mathematisch ist $(-10, 60)$ die einzige Lösung von $C\vec x = \vec r$, weil $\det C \neq 0$.
      Das Lager lässt sich also mit keiner realisierbaren Produktion restlos aufbrauchen. Man muss auf vollständiges Aufbrauchen verzichten,
      zum Beispiel nur $E_2$ herstellen, bis ein Rohstoff ausgeht.
hinweise:
  - '$C = \begin{pmatrix} 1\cdot 2 + 1\cdot 1 & 1\cdot 1 + 1\cdot 1\\ 1\cdot 2 + 2\cdot 1 & 1\cdot 1 + 2\cdot 1 \end{pmatrix}$.'
  - '$\det C = 9 - 8 = 1$, also $C^{-1} = \begin{pmatrix} 3 & -2\\ -4 & 3 \end{pmatrix}$.'
loesung: |
  Ansatz: Vorwärts multipliziert man mit $C$, rückwärts löst man $C\vec x = \vec r$ mit der Inversen.
  ---
  **a)** $C = \begin{pmatrix} 1 & 1\\ 1 & 2 \end{pmatrix}\begin{pmatrix} 2 & 1\\ 1 & 1 \end{pmatrix} = \begin{pmatrix} 2 + 1 & 1 + 1\\ 2 + 2 & 1 + 2 \end{pmatrix} = \begin{pmatrix} 3 & 2\\ 4 & 3 \end{pmatrix}$.
  ---
  **b)** $C\begin{pmatrix} 20\\ 10 \end{pmatrix} = \begin{pmatrix} 60 + 20\\ 80 + 30 \end{pmatrix} = \begin{pmatrix} 80\\ 110 \end{pmatrix}$: $80$ Einheiten $R_1$ und $110$ Einheiten $R_2$.
  ---
  **c)** $\det C = 9 - 8 = 1$, $C^{-1} = \begin{pmatrix} 3 & -2\\ -4 & 3 \end{pmatrix}$. Dann $\vec x = C^{-1}\begin{pmatrix} 130\\ 180 \end{pmatrix} = \begin{pmatrix} 390 - 360\\ -520 + 540 \end{pmatrix} = \begin{pmatrix} 30\\ 20 \end{pmatrix}$.
  Probe: $3\cdot 30 + 2\cdot 20 = 130$ und $4\cdot 30 + 3\cdot 20 = 180$. Es können $30$ Stück $E_1$ und $20$ Stück $E_2$ produziert werden.
  ---
  **d)** $C^{-1}(90, 140) = (270 - 280,\ -360 + 420) = (-10, 60)$. Negative Stückzahlen sind nicht produzierbar. Weil die Lösung eindeutig ist, gibt es **keine** sinnvolle Produktion, die das Lager restlos aufbraucht. Das Modell liefert eine Lösung, die in der Anwendung nicht zulässig ist. Man muss Ergebnisse immer auf Plausibilität prüfen.
```

```aufgabe
id: lm-pr-ernaehrung
titel: Eine Futtermischung als Gleichungssystem
niveau: 3
lernziel: 2
kompetenz: modellieren
punkte: 8
angabe: |
  Zeitrichtwert: 15 Minuten.

  Ein Tierfutter wird aus drei Sorten $A$, $B$, $C$ gemischt. Ein Kilogramm enthält (in Gramm):

  - Sorte $A$: $200$ g Eiweiß, $50$ g Fett und $500$ g Kohlenhydrate.
  - Sorte $B$: $100$ g Eiweiß, $100$ g Fett und $600$ g Kohlenhydrate.
  - Sorte $C$: $300$ g Eiweiß, $50$ g Fett und $400$ g Kohlenhydrate.

  Die Mischung soll genau $1600$ g Eiweiß, $650$ g Fett und $4700$ g Kohlenhydrate enthalten.

  a) Stellen Sie das Gleichungssystem auf und bestimmen Sie, wie viele Kilogramm jeder Sorte nötig sind.

  b) Begründen Sie ohne neue Rechnung, welche Mengen man für die halben Nährstoffmengen ($800$ g, $325$ g, $2350$ g) braucht.
teile:
  - typ: vektor
    label: 'a) Kilogramm $(x_A, x_B, x_C)$'
    namen: ["A", "B", "C"]
    loesung: ["3", "4", "2"]
    fehler:
      - wert: ["4", "3", "2"]
        meldung: |
          Prüfe die Fettgleichung: $50\cdot 4 + 100\cdot 3 + 50\cdot 2 = 600 \neq 650$. Kontrolliere die Zuordnung der Unbekannten zu den Sorten.
  - typ: text
    label: 'b) Begründung'
    muster: |
      Es sei $K$ die Koeffizientenmatrix des Systems. Wird die rechte Seite halbiert, ist die halbe alte Lösung $(1{,}5;\ 2;\ 1)$ eine
      Lösung, weil $K\cdot(\tfrac12\vec x) = \tfrac12 K\vec x = \tfrac12\vec b$. Da $\det K \neq 0$ ist, ist das die einzige Lösung:
      also $1{,}5$ kg von $A$, $2$ kg von $B$ und $1$ kg von $C$.
hinweise:
  - 'Jede Nährstoffzeile gibt eine Gleichung, zum Beispiel Eiweiß: $200x + 100y + 300z = 1600$.'
  - 'Vereinfache zuerst: Eiweiß durch $100$, Fett durch $50$, Kohlenhydrate durch $100$. Nimm die Fettgleichung $x + 2y + z = 13$ als erste Zeile.'
loesung: |
  Ansatz: $x, y, z$ seien die Kilogramm der Sorten $A$, $B$, $C$. Jeder Nährstoff liefert eine Gleichung.
  ---
  **a)** $200x + 100y + 300z = 1600$, $\;50x + 100y + 50z = 650$, $\;500x + 600y + 400z = 4700$. Gekürzt: $2x + y + 3z = 16$, $\;x + 2y + z = 13$, $\;5x + 6y + 4z = 47$.
  ---
  Mit der Fettgleichung als Zeile I: $\text{II} - 2\cdot\text{I}$ ergibt $(0,\ -3,\ 1 \mid -10)$, $\;\text{III} - 5\cdot\text{I}$ ergibt $(0,\ -4,\ -1 \mid -18)$.
  Dann $3\cdot\text{III} - 4\cdot\text{II}$: $(0,\ 0,\ -7 \mid -14)$, also $z = 2$.
  ---
  Rückwärts: $-3y + 2 = -10$, also $y = 4$. $\;x = 13 - 8 - 2 = 3$.
  Probe: Eiweiß $600 + 400 + 600 = 1600$, Fett $150 + 400 + 100 = 650$, Kohlenhydrate $1500 + 2400 + 800 = 4700$. Also $3$ kg $A$, $4$ kg $B$, $2$ kg $C$.
  ---
  **b)** Das System ist linear. Halbiert man die rechte Seite, löst die halbierte Lösung $(1{,}5;\ 2;\ 1)$ das neue System. Weil die Lösung eindeutig ist (Rang $3$, die Determinante der Koeffizientenmatrix ist nicht $0$), ist sie die einzige.
```

```aufgabe
id: lm-pr-abbildung
titel: Ein Dreieck wird abgebildet
niveau: 3
lernziel: 7
kompetenz: anwenden
punkte: 8
angabe: |
  Zeitrichtwert: 15 Minuten.

  Die Matrix $M = \begin{pmatrix} 2 & 1\\ 0 & 1 \end{pmatrix}$ bildet das Dreieck mit den Ecken $A(1 \mid 1)$, $B(4 \mid 1)$ und $C(1 \mid 3)$ ab.

  a) Berechnen Sie die Bildpunkte $A'$, $B'$ und $C'$.

  b) Berechnen Sie den Flächeninhalt des ursprünglichen Dreiecks und des Bilddreiecks. Welcher Zusammenhang besteht mit $\det M$?

  c) Welcher Punkt wird auf $(7 \mid 2)$ abgebildet?
teile:
  - typ: vektor
    label: "a) $C'$"
    namen: ["x", "y"]
    loesung: ["2*1 + 1*3", "0*1 + 1*3"]
    fehler:
      - wert: ["2", "3"]
        meldung: |
          Zeile mal Vektor: erste Koordinate $2\cdot 1 + 1\cdot 3$. Du hast nur den Diagonaleintrag verwendet.
  - typ: zahl
    label: 'b) Fläche des ursprünglichen Dreiecks'
    loesung: "abs(det([[3,0],[0,2]]))/2"
    anzeige: '3'
    fehler:
      - wert: "6"
        meldung: |
          $6$ ist die Fläche des Parallelogramms aus $\overrightarrow{AB}$ und $\overrightarrow{AC}$. Das Dreieck ist halb so groß.
  - typ: zahl
    label: 'b) Fläche des Bilddreiecks'
    loesung: "abs(det([[6,2],[0,2]]))/2"
    anzeige: '6'
    fehler:
      - wert: "3"
        meldung: |
          Das ist die ursprüngliche Fläche. Die Abbildung ändert Flächen um den Faktor $|\det M| = 2$.
  - typ: vektor
    label: 'c) Urbild von $(7 \mid 2)$'
    namen: ["x", "y"]
    loesung: ["5/2", "2"]
    fehler:
      - wert: ["16", "2"]
        meldung: |
          Das ist $M\cdot(7, 2)$. Gesucht ist der Punkt $P$ mit $M\cdot P = (7, 2)$, also $P = M^{-1}\cdot(7, 2)$.
hinweise:
  - 'Bildpunkt: $M$ mal Spaltenvektor des Punktes, zum Beispiel $M\cdot(4, 1) = (9, 1)$.'
  - 'Dreiecksfläche: $\frac12\,|\det(\overrightarrow{AB}, \overrightarrow{AC})|$. Für c): $M^{-1} = \frac12\begin{pmatrix} 1 & -1\\ 0 & 2 \end{pmatrix}$.'
loesung: |
  Ansatz: Bildpunkte durch Matrix mal Vektor. Flächen mit der Determinante. Den Ausgangspunkt findet man mit der Inversen.
  ---
  **a)** $A' = M(1, 1) = (3, 1)$, $\;B' = M(4, 1) = (9, 1)$, $\;C' = M(1, 3) = (5, 3)$.
  ---
  **b)** Ursprünglich: $\overrightarrow{AB} = (3, 0)$, $\overrightarrow{AC} = (0, 2)$, Fläche $\frac12\cdot|3\cdot 2 - 0| = 3$.
  Bild: $\overrightarrow{A'B'} = (6, 0)$, $\overrightarrow{A'C'} = (2, 2)$, Fläche $\frac12\cdot|6\cdot 2 - 2\cdot 0| = 6$.
  ---
  Zusammenhang: $\det M = 2\cdot 1 - 1\cdot 0 = 2$. Die Abbildung verdoppelt jede Fläche. Allgemein ändert eine Matrix Flächen um den Faktor $|\det M|$.
  ---
  **c)** $\det M = 2$, also $M^{-1} = \frac12\begin{pmatrix} 1 & -1\\ 0 & 2 \end{pmatrix}$. Dann $M^{-1}\begin{pmatrix} 7\\ 2 \end{pmatrix} = \frac12\begin{pmatrix} 7 - 2\\ 4 \end{pmatrix} = \begin{pmatrix} 2{,}5\\ 2 \end{pmatrix}$.
  Probe: $M(2{,}5;\ 2) = (5 + 2,\ 2) = (7, 2)$.
```

```aufgabe
id: lm-pr-begruendung
titel: Begründen statt rechnen
niveau: 3
lernziel: 3
kompetenz: begruenden
punkte: 6
angabe: |
  Zeitrichtwert: 10 Minuten.

  Beantworten Sie mit Begründung:

  a) Kann ein lineares Gleichungssystem aus drei Gleichungen mit zwei Unbekannten genau eine Lösung haben?

  b) $A$ ist eine $3\times 3$-Matrix mit $\det A = 0$. Kann das homogene System $A\vec x = \vec 0$ nur die Lösung $\vec x = \vec 0$ haben?

  c) Für zwei $2\times 2$-Matrizen gilt $AB = O$ (Nullmatrix), und $A$ ist invertierbar. Was folgt für $B$?
teile:
  - typ: auswahl
    label: 'a)'
    optionen: ['ja', 'nein']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Drei Geraden können durch einen gemeinsamen Punkt gehen. Beispiel: $x + y = 5$, $x - y = 1$ und $2x + y = 8$ gehen alle durch $(3 \mid 2)$.
  - typ: auswahl
    label: 'b)'
    optionen: ['ja', 'nein']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          $\det A = 0$ heißt $\operatorname{rg}(A) < 3$. Ein homogenes System ist immer lösbar, und mit Rang kleiner $3$ bleibt mindestens ein Parameter frei.
  - typ: text
    label: 'Begründungen zu a), b) und c)'
    muster: |
      a) Ja. Drei Geraden in der Ebene können sich in genau einem Punkt schneiden, etwa $x + y = 5$, $x - y = 1$ und $2x + y = 8$ in $(3 \mid 2)$.
      Meistens haben drei Geraden aber keinen gemeinsamen Punkt.

      b) Nein. $\det A = 0$ bedeutet $\operatorname{rg}(A) < 3$. Das homogene System hat immer die Lösung $\vec 0$, ist also lösbar. Mit Rang kleiner
      als $3$ bleibt mindestens ein Parameter frei, es gibt unendlich viele Lösungen.

      c) $B = O$. Multipliziert man $AB = O$ von links mit $A^{-1}$, folgt $B = A^{-1}O = O$. Ohne Invertierbarkeit gilt das nicht. Es gibt
      Matrizen $A, B \neq O$ mit $AB = O$.
hinweise:
  - 'Denk für a) an drei Geraden, für b) an den Rang und das Lösbarkeitskriterium.'
  - 'Für c): Was passiert, wenn man $AB = O$ von links mit $A^{-1}$ multipliziert?'
loesung: |
  Ansatz: Rang, Lösbarkeitskriterium und Inverse liefern die Begründungen ohne Rechnung.
  ---
  **a)** Ja, das ist möglich. Drei Gleichungen mit zwei Unbekannten sind drei Geraden. Gehen alle drei durch einen Punkt, gibt es genau eine Lösung. Beispiel: $(3 \mid 2)$ liegt auf $x + y = 5$, $x - y = 1$ und $2x + y = 8$.
  ---
  **b)** Nein. $\det A = 0$ heißt $\operatorname{rg}(A) < 3$. Das homogene System ist lösbar, und es bleibt mindestens ein freier Parameter. Es gibt also auch Lösungen $\vec x \neq \vec 0$.
  ---
  **c)** $A^{-1}(AB) = (A^{-1}A)B = EB = B$ und $A^{-1}O = O$, also $B = O$. Die Voraussetzung „$A$ invertierbar“ ist nötig: $\begin{pmatrix} 1 & 1\\ 1 & 1 \end{pmatrix}\begin{pmatrix} 1 & -1\\ -1 & 1 \end{pmatrix} = O$, obwohl kein Faktor die Nullmatrix ist.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, ohne nachzuschauen. Vergleiche dann mit dem Kasten „Auf einen Blick“ direkt nach dieser Frage.
antwort: |
  Zum Beispiel:
  1. Ein lineares Gleichungssystem hat keine, genau eine oder unendlich viele Lösungen. Das Gauß-Verfahren findet sie, und der Rang entscheidet, welcher Fall vorliegt.
  2. Jede lineare Gleichung mit zwei Unbekannten ist eine Gerade, mit drei Unbekannten eine Ebene. Die Lösungsmenge ist der gemeinsame Schnitt.
  3. Für eine quadratische Matrix sind gleichwertig: $\det A \neq 0$, $A$ ist invertierbar, und $A\vec x = \vec b$ hat für jede rechte Seite genau eine Lösung.
```

:::zusammenfassung
1. Ein **lineares Gleichungssystem** besteht aus Gleichungen, in denen die Unbekannten nur mit Zahlen multipliziert und addiert werden. Eine **Lösung** ist ein Tupel, das **alle** Gleichungen erfüllt. Erlaubt sind nur Umformungen, die man rückgängig machen kann: vertauschen, mit $c \neq 0$ multiplizieren, ein Vielfaches einer anderen Gleichung addieren.
2. Bei zwei Unbekannten löst man durch **Einsetzen**, **Gleichsetzen** oder **Addieren**. Jede Gleichung ist eine **Gerade**. Zwei Geraden schneiden sich, sind parallel oder fallen zusammen.
3. Das **Gauß-Verfahren** bringt die erweiterte Koeffizientenmatrix auf **Zeilenstufenform**. Danach rechnet man rückwärts. Die Probe in allen ursprünglichen Gleichungen gehört immer dazu.
4. Der **Rang** zählt die Zeilen der Stufenform, die nicht nur Nullen enthalten. Ist $\operatorname{rg}(A) < \operatorname{rg}(A \mid b)$, gibt es keine Lösung. Sind beide gleich $n$, gibt es genau eine. Sind beide gleich $r < n$, gibt es unendlich viele mit $n - r$ freien **Parametern**.
5. Mit drei Unbekannten ist jede Gleichung eine **Ebene** mit dem Normalvektor aus ihren Koeffizienten. Drei Ebenen schneiden sich in einem Punkt, haben eine gemeinsame Gerade, fallen zusammen oder haben keinen gemeinsamen Punkt (parallele Ebenen oder Prisma).
6. **Matrizen** addiert man Eintrag für Eintrag. Multipliziert wird **Zeile mal Spalte**, und im Allgemeinen ist $AB \neq BA$. Eine Matrix ist auch eine **Abbildung**: Ihre Spalten sind die Bilder der Einheitsvektoren.
7. Die **Inverse** erfüllt $AA^{-1} = A^{-1}A = E$. Für $2\times 2$: Diagonale tauschen, Nebendiagonale mit Minus, durch $ad - bc$ teilen. Allgemein: $(A \mid E)$ wird mit Gauß-Jordan zu $(E \mid A^{-1})$.
8. Die **Determinante** ist für $2\times 2$ gleich $ad - bc$, für $3\times 3$ berechnet man sie mit **Sarrus** oder durch **Entwicklung**. $|\det A|$ ist eine Fläche oder ein Volumen. $\det A \neq 0$ heißt genau eine Lösung für jede rechte Seite. Dann gilt die **Cramersche Regel** $x_j = \frac{D_j}{D}$.
:::

### Die häufigsten Fehler

Jeder Fehler ist mit der Aufgabe verknüpft, in der du ihn gezielt üben kannst. Die Aufgaben geben dir eine Rückmeldung, wenn du
genau diesen Fehler machst.

1. **Zwei Gleichungen gleichzeitig ersetzen** oder **mit $0$ multiplizieren.** Dabei geht eine Bedingung verloren. Training: „Wo ist der Fehler?“ und „Welche Umformungen sind erlaubt?“ (in [3.1 Lineare Gleichungen und Gleichungssysteme](/lernen/mathe3/lgs-matrizen/lineare-gleichungen-und-gleichungssysteme)).
2. **Klammer beim Einsetzen vergessen:** $3x - 4\cdot 8 - 2x$ statt $3x - 4\cdot(8 - 2x)$. Training: „Einsetzungsverfahren“ und „Einen Term für y einsetzen“ (in [3.2 Systeme mit zwei Unbekannten](/lernen/mathe3/lgs-matrizen/systeme-mit-zwei-unbekannten)).
3. **$0 = 0$ als „$x = 0$“ lesen.** Die Zeile $0 = 0$ ist immer wahr und bedeutet unendlich viele Lösungen. Training: „Eine, keine oder unendlich viele?“ (in [3.2 Systeme mit zwei Unbekannten](/lernen/mathe3/lgs-matrizen/systeme-mit-zwei-unbekannten)).
4. **Rechte Seite beim Gauß-Verfahren vergessen** oder Vorzeichen beim Abziehen negativer Zahlen verlieren. Training: „Fehler in einer Gauß-Rechnung finden“ und „Gauß ohne bequemes Pivotelement“ (in [3.3 Das Gauß-Verfahren](/lernen/mathe3/lgs-matrizen/das-gauss-verfahren)).
5. **Rang falsch zählen:** Zeilen vor dem Umformen zählen oder bei $\operatorname{rg}(A)$ die rechte Seite mitzählen. Training: „Den Rang bestimmen“ und „Rang und Lösbarkeit“ (in [3.4 Lösbarkeit, Rang und Parameterdarstellung](/lernen/mathe3/lgs-matrizen/loesbarkeit-rang-und-parameterdarstellung)).
6. **„Zwei Ebenen schneiden sich in einem Punkt“** oder **„keine Lösung heißt parallel“.** Zwei Ebenen schneiden sich in einer Geraden, und auch ein Prisma hat keine Lösung. Training: „Wie liegen zwei Ebenen?“ und „Ein Prisma erkennen“ (in [3.5 Geometrische Deutung im Raum](/lernen/mathe3/lgs-matrizen/geometrische-deutung-im-raum)).
7. **Eintrag für Eintrag multiplizieren** oder **$AB = BA$ annehmen.** Training: „Matrixprodukt berechnen“ und „Gilt die binomische Formel für Matrizen?“ (in [3.6 Matrizen und ihre Rechenregeln](/lernen/mathe3/lgs-matrizen/matrizen-und-ihre-rechenregeln)).
8. **Reihenfolge beim Verketten vertauscht:** „zuerst $S$, dann $D$“ ist $D\cdot S$. Training: „Zwei Abbildungen hintereinander“ (in [3.7 Matrizen als Abbildungen](/lernen/mathe3/lgs-matrizen/matrizen-als-abbildungen-drehen-spiegeln-strecken-vertiefung)).
9. **Inverse als Kehrwerte der Einträge** oder **nicht durch $ad - bc$ geteilt.** Training: „Fehler bei der Inversen finden“ (in [3.8 Die inverse Matrix](/lernen/mathe3/lgs-matrizen/die-inverse-matrix)).
10. **Matrixgleichung von der falschen Seite umgeformt:** Aus $XA = B$ folgt $X = BA^{-1}$, nicht $A^{-1}B$. Training: „Eine Matrixgleichung lösen“ (in [3.8 Die inverse Matrix](/lernen/mathe3/lgs-matrizen/die-inverse-matrix)).
11. **Schachbrett-Vorzeichen vergessen** oder **$\det(2A) = 2\det A$ angenommen.** Training: „Geschickt entwickeln“ und „Rechenregeln anwenden“ (in [3.9 Determinanten](/lernen/mathe3/lgs-matrizen/determinanten)).
12. **Ohne Fallunterscheidung gekürzt** oder aus $D = D_x = D_y = D_z = 0$ auf unendlich viele Lösungen geschlossen. Training: „Ein System mit Parameter vollständig diskutieren“ und „Wenn D gleich null ist“ (in [3.10 Cramersche Regel und Gleichungssysteme mit Parameter](/lernen/mathe3/lgs-matrizen/cramersche-regel-und-gleichungssysteme-mit-parameter)).
13. **Prozentsätze einfach gemittelt** oder **negative Stückzahlen nicht hinterfragt.** Training: „Säure mischen“ (in [3.11 Anwendungen](/lernen/mathe3/lgs-matrizen/anwendungen-mischungen-bedarf-und-uebergaenge)) und die Prüfungsaufgabe „Bedarfsrechnung vorwärts und rückwärts“.

### Lernziel-Selbstcheck

Bewerte dich bei jedem Lernziel ehrlich mit $1$ (unsicher), $2$ (geht mit Nachschauen) oder $3$ (sicher, auch unter Zeitdruck).
Bei jeder $1$ oder $2$ gehst du zurück zur passenden Lektion und rechnest die Aufgaben auf Niveau 2 und 3 noch einmal.

1. Lineare Gleichungen erkennen, Lösungen prüfen, erlaubte Umformungen begründen. Lektion: [3.1 Lineare Gleichungen und Gleichungssysteme](/lernen/mathe3/lgs-matrizen/lineare-gleichungen-und-gleichungssysteme).
2. Systeme mit zwei Unbekannten lösen und als Geraden deuten. Lektion: [3.2 Systeme mit zwei Unbekannten](/lernen/mathe3/lgs-matrizen/systeme-mit-zwei-unbekannten).
3. Das Gauß-Verfahren für drei Unbekannte. Lektion: [3.3 Das Gauß-Verfahren](/lernen/mathe3/lgs-matrizen/das-gauss-verfahren).
4. Rang, Lösbarkeit und Parameterdarstellung. Lektion: [3.4 Lösbarkeit, Rang und Parameterdarstellung](/lernen/mathe3/lgs-matrizen/loesbarkeit-rang-und-parameterdarstellung).
5. Geometrische Deutung mit Ebenen. Lektion: [3.5 Geometrische Deutung im Raum](/lernen/mathe3/lgs-matrizen/geometrische-deutung-im-raum).
6. Mit Matrizen rechnen und Abbildungen deuten. Lektionen: [3.6 Matrizen und ihre Rechenregeln](/lernen/mathe3/lgs-matrizen/matrizen-und-ihre-rechenregeln) und [3.7 Matrizen als Abbildungen](/lernen/mathe3/lgs-matrizen/matrizen-als-abbildungen-drehen-spiegeln-strecken-vertiefung).
7. Inverse Matrizen berechnen und verwenden. Lektion: [3.8 Die inverse Matrix](/lernen/mathe3/lgs-matrizen/die-inverse-matrix).
8. Determinanten berechnen und deuten. Lektion: [3.9 Determinanten](/lernen/mathe3/lgs-matrizen/determinanten).
9. Cramersche Regel und Systeme mit Parameter. Lektion: [3.10 Cramersche Regel und Gleichungssysteme mit Parameter](/lernen/mathe3/lgs-matrizen/cramersche-regel-und-gleichungssysteme-mit-parameter).
10. Sachaufgaben modellieren. Lektion: [3.11 Anwendungen](/lernen/mathe3/lgs-matrizen/anwendungen-mischungen-bedarf-und-uebergaenge).

## Mündliche Prüfung

```karten
- id: lm-karte-lgs-loesung
  frage: Was ist ein lineares Gleichungssystem, und was ist eine Lösung?
  antwort: |
    Ein lineares Gleichungssystem besteht aus mehreren Gleichungen der Form $a_1x_1 + \dots + a_nx_n = b$. Die Unbekannten werden darin nur mit
    Zahlen multipliziert und addiert, es gibt keine Quadrate, Produkte von Unbekannten oder Unbekannte im Nenner. Eine Lösung ist ein Tupel,
    das **alle** Gleichungen gleichzeitig erfüllt. Ein Tupel, das nur einige Gleichungen erfüllt, ist keine Lösung des Systems.
  kernpunkte:
    - 'Unbekannte nur mit Zahlen multipliziert und addiert'
    - 'Lösung erfüllt alle Gleichungen gleichzeitig'
    - 'Prüfen durch Einsetzen in jede Gleichung'
- id: lm-karte-aequivalenz
  frage: Welche Umformungen ändern die Lösungsmenge nicht, und warum ist die Multiplikation mit null verboten?
  antwort: |
    Erlaubt sind: zwei Gleichungen vertauschen, eine Gleichung mit einer Zahl $c \neq 0$ multiplizieren und ein Vielfaches einer Gleichung zu einer
    anderen addieren, wobei die erste stehen bleibt. Jede dieser Umformungen lässt sich rückgängig machen. Darum hat das neue System genau dieselben
    Lösungen. Mit $c = 0$ wird eine Gleichung zu $0 = 0$, und die Bedingung ist verloren. Man kann das nicht rückgängig machen, weil $0$ keinen Kehrwert hat.
  kernpunkte:
    - 'vertauschen, mit c ≠ 0 multiplizieren, Vielfaches addieren'
    - 'Grund: jede Umformung ist umkehrbar'
    - 'bei 0 geht eine Bedingung verloren'
- id: lm-karte-zwei-unbekannte
  frage: Wie löst man ein System mit zwei Unbekannten, und wie deutet man es geometrisch?
  antwort: |
    Man beseitigt eine Unbekannte durch Einsetzen, Gleichsetzen oder Addieren. Jede Gleichung $ax + by = c$ beschreibt eine Gerade in der Ebene.
    Eine Lösung ist ein Schnittpunkt. Zwei Geraden schneiden sich in genau einem Punkt, sind parallel und verschieden (keine Lösung) oder fallen
    zusammen (unendlich viele Lösungen). Rechnerisch entscheidet die Zahl $D = a_1b_2 - a_2b_1$: Ist sie nicht $0$, gibt es genau eine Lösung.
  kernpunkte:
    - 'Einsetzen, Gleichsetzen, Addieren'
    - 'Gleichung = Gerade, Lösung = Schnittpunkt'
    - 'drei Fälle, Kriterium D ≠ 0'
- id: lm-karte-nie-zwei
  frage: Warum hat ein lineares Gleichungssystem nie genau zwei Lösungen?
  antwort: |
    Sind $\vec p$ und $\vec q$ zwei verschiedene Lösungen, so ist jeder Punkt $\vec p + t(\vec q - \vec p)$ ebenfalls eine Lösung. Setzt man ihn in
    eine linke Seite ein, ergibt sich wegen der Linearität $(1 - t)\,b + t\,b = b$. Also liegt die ganze Gerade durch $\vec p$ und $\vec q$ in der
    Lösungsmenge, und es gibt unendlich viele Lösungen. Bei nichtlinearen Systemen gilt das nicht: $x + y = 7$ und $xy = 12$ hat genau zwei Lösungen.
  kernpunkte:
    - 'mit p und q ist jeder Punkt p + t(q − p) Lösung'
    - 'Grund: Linearität der linken Seiten'
    - 'Gegenbeispiel nichtlineares System'
- id: lm-karte-gauss
  frage: Erkläre die Idee des Gauß-Verfahrens.
  antwort: |
    Man schreibt die erweiterte Koeffizientenmatrix auf und beseitigt mit Zeilenumformungen die Unbekannten der Reihe nach: zuerst $x$ in allen
    Zeilen außer der ersten, dann $y$ ab der dritten Zeile. So entsteht die Zeilenstufenform. Die letzte Zeile enthält nur noch eine Unbekannte,
    dann rechnet man rückwärts. Zeilenumformungen sind Äquivalenzumformungen, die Lösungsmenge bleibt also gleich. Am Ende macht man die Probe.
  kernpunkte:
    - 'erweiterte Matrix, Zeilenumformungen'
    - 'Zeilenstufenform, dann rückwärts einsetzen'
    - 'Probe in allen ursprünglichen Gleichungen'
- id: lm-karte-rang
  frage: Was ist der Rang, und wie entscheidet er über die Lösbarkeit?
  antwort: |
    Der Rang ist die Anzahl der Zeilen in der Zeilenstufenform, die nicht nur aus Nullen bestehen. Ist $\operatorname{rg}(A) < \operatorname{rg}(A \mid b)$,
    gibt es eine Zeile $0 = c$ mit $c \neq 0$ und keine Lösung. Sind beide gleich der Anzahl $n$ der Unbekannten, gibt es genau eine Lösung. Sind beide
    gleich $r < n$, gibt es unendlich viele Lösungen mit $n - r$ freien Parametern.
  kernpunkte:
    - 'Rang = Anzahl der Nicht-Nullzeilen der Stufenform'
    - 'rg(A) < rg(A|b): keine Lösung'
    - 'gleich n: genau eine, gleich r < n: n − r Parameter'
- id: lm-karte-unterbestimmt
  frage: Warum hat ein System aus zwei Gleichungen mit drei Unbekannten nie genau eine Lösung? Deute es auch geometrisch.
  antwort: |
    Der Rang ist höchstens so groß wie die Anzahl der Zeilen, hier also höchstens $2$. Für genau eine Lösung müsste er $3$ sein. Ist das System
    lösbar, bleibt deshalb mindestens ein Parameter frei. Geometrisch sind es zwei Ebenen im Raum. Sie sind parallel und verschieden (keine Lösung),
    identisch (eine ganze Ebene) oder schneiden sich in einer Geraden. Einen einzelnen Schnittpunkt haben zwei Ebenen nie.
  kernpunkte:
    - 'Rang höchstens 2 < 3'
    - 'keine oder unendlich viele Lösungen'
    - 'zwei Ebenen: parallel, identisch oder Schnittgerade'
- id: lm-karte-ebenen
  frage: Wie deutet man ein System mit drei Unbekannten geometrisch, und wie unterscheidet man ein Prisma von parallelen Ebenen?
  antwort: |
    Jede Gleichung $ax + by + cz = d$ beschreibt eine Ebene mit dem Normalvektor $(a, b, c)$. Die Lösungsmenge ist der Schnitt aller Ebenen: ein Punkt,
    eine Gerade, eine Ebene oder leer. Ist sie leer und $\operatorname{rg}(A) = 2$, vergleicht man die Normalvektoren. Sind zwei davon Vielfache, gibt es
    parallele Ebenen. Ist das bei keinem Paar so, schneiden sich die Ebenen paarweise in drei parallelen Geraden: ein Prisma.
  kernpunkte:
    - 'Gleichung = Ebene, Koeffizienten = Normalvektor'
    - 'Lösungsmenge: Punkt, Gerade, Ebene oder leer'
    - 'Prisma: keine zwei Normalvektoren parallel'
- id: lm-karte-homogen
  frage: Was ist ein homogenes System, und wie hängen seine Lösungen mit denen des inhomogenen Systems zusammen?
  antwort: |
    Ein homogenes System hat lauter Nullen als rechte Seiten. Es hat immer die triviale Lösung $\vec 0$ und weitere Lösungen genau dann, wenn
    $\operatorname{rg}(A) < n$. Kennt man eine spezielle Lösung $\vec x_p$ des Systems $A\vec x = \vec b$, so erhält man alle Lösungen als
    $\vec x_p + \vec x_h$, wobei $\vec x_h$ alle Lösungen von $A\vec x = \vec 0$ durchläuft. Das erklärt die Form „Punkt plus Vielfaches einer Richtung“.
  kernpunkte:
    - 'rechte Seiten 0, triviale Lösung immer da'
    - 'nichttriviale Lösungen genau bei rg(A) < n'
    - 'alle Lösungen = spezielle + homogene'
- id: lm-karte-matrixprodukt
  frage: Wie ist das Matrixprodukt definiert, wann existiert es, und ist es kommutativ?
  antwort: |
    Ist $A$ eine $m\times n$-Matrix und $B$ eine $n\times p$-Matrix, so ist $AB$ die $m\times p$-Matrix, deren Eintrag $c_{ij}$ aus Zeile $i$ von $A$ und
    Spalte $j$ von $B$ entsteht: paarweise multiplizieren und addieren. Es existiert nur, wenn $A$ so viele Spalten hat wie $B$ Zeilen. Es ist
    assoziativ, aber nicht kommutativ. Gegenbeispiel: $\begin{pmatrix} 0 & 1\\ 1 & 0 \end{pmatrix}$ vertauscht von links die Zeilen, von rechts die Spalten.
  kernpunkte:
    - 'Zeile mal Spalte'
    - 'Spaltenzahl links = Zeilenzahl rechts'
    - 'nicht kommutativ, mit Gegenbeispiel'
- id: lm-karte-abbildung
  frage: Wie kann man eine 2×2-Matrix als Abbildung verstehen, und wie sieht die Drehmatrix aus?
  antwort: |
    Eine Matrix ordnet jedem Vektor $\vec v$ den Vektor $A\vec v$ zu. Ihre erste Spalte ist das Bild von $(1, 0)$, die zweite das Bild von $(0, 1)$. Daraus
    folgt die Drehmatrix: Bei einer Drehung um $\varphi$ landet $(1, 0)$ bei $(\cos\varphi, \sin\varphi)$ und $(0, 1)$ bei $(-\sin\varphi, \cos\varphi)$,
    wie am Einheitskreis aus der Trigonometrie. Hintereinander ausführen heißt multiplizieren: „zuerst $B$, dann $A$“ hat die Matrix $AB$.
  kernpunkte:
    - 'Spalten = Bilder der Einheitsvektoren'
    - 'Drehmatrix mit cos und sin aus dem Einheitskreis'
    - 'Verkettung = Produkt, Reihenfolge wichtig'
- id: lm-karte-inverse
  frage: Was ist die inverse Matrix, wann existiert sie, und wie berechnet man sie?
  antwort: |
    Zu einer quadratischen Matrix $A$ ist $A^{-1}$ die Matrix mit $AA^{-1} = A^{-1}A = E$. Sie existiert genau dann, wenn $\det A \neq 0$, und ist dann
    eindeutig. Für $2\times 2$: $A^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b\\ -c & a \end{pmatrix}$. Allgemein schreibt man $(A \mid E)$ und formt mit
    Gauß-Jordan zu $(E \mid A^{-1})$ um. Damit löst man $A\vec x = \vec b$ durch $\vec x = A^{-1}\vec b$.
  kernpunkte:
    - 'A·A⁻¹ = A⁻¹·A = E'
    - 'existiert genau bei det A ≠ 0'
    - '2×2-Formel und Gauß-Jordan'
- id: lm-karte-determinante
  frage: Was bedeutet die Determinante geometrisch?
  antwort: |
    Für eine $2\times 2$-Matrix ist $|\det A|$ der Flächeninhalt des Parallelogramms, das die beiden Spalten aufspannen. Das Vorzeichen gibt die
    Drehrichtung an. Für $3\times 3$ ist $|\det A|$ das Volumen des Spats aus den drei Spalten, also der Betrag des Spatprodukts aus der
    Vektorrechnung. Ist die Determinante $0$, liegen bei $2\times 2$ die beiden Spalten auf einer gemeinsamen Geraden und bei $3\times 3$ die drei
    Spalten in einer gemeinsamen Ebene. Als Abbildung verändert $A$ Flächen um den Faktor $|\det A|$.
  kernpunkte:
    - 'Fläche des Parallelogramms oder Volumen des Spats'
    - 'Vorzeichen = Drehrichtung von der ersten zur zweiten Spalte'
    - 'det = 0: Spalten auf einer Geraden oder in einer Ebene'
- id: lm-karte-hauptsatz
  frage: Welcher Zusammenhang besteht zwischen Determinante, Rang, Inverse und Lösbarkeit?
  antwort: |
    Für eine $n\times n$-Matrix sind gleichwertig: $\det A \neq 0$, $A$ ist invertierbar, $\operatorname{rg}(A) = n$, und $A\vec x = \vec b$ ist für jede
    rechte Seite eindeutig lösbar. Ist $\det A = 0$, gibt es je nach $\vec b$ keine oder unendlich viele Lösungen. Welcher Fall vorliegt, entscheidet erst
    das Gauß-Verfahren, weil die Determinante nur von den linken Seiten abhängt.
  kernpunkte:
    - 'gleichwertig: det ≠ 0, invertierbar, Rang n, eindeutig lösbar'
    - 'det = 0: keine oder unendlich viele'
    - 'Unterscheidung nur mit Gauß'
- id: lm-karte-cramer
  frage: Wie lautet die Cramersche Regel, was ist ihre Voraussetzung, und was gilt bei D = 0?
  antwort: |
    Ist $D = \det A \neq 0$, so ist $x_j = \frac{D_j}{D}$. Dabei ist $D_j$ die Determinante der Matrix, in der die Spalte der $j$-ten Unbekannten durch die
    rechte Seite ersetzt wurde. Ist $D = 0$, aber ein $D_j \neq 0$, gibt es keine Lösung. Sind alle Determinanten $0$, kann man nichts schließen.
    Gegenbeispiel: $x + y + z = 1$, $x + y + z = 2$, $x + y + z = 3$ hat lauter Determinanten $0$, aber keine Lösung.
  kernpunkte:
    - 'x_j = D_j / D bei D ≠ 0'
    - 'Spalte der Unbekannten durch rechte Seite ersetzen'
    - 'D = 0 und alle D_j = 0: keine Aussage, Gegenbeispiel'
- id: lm-karte-parameter
  frage: Wie diskutiert man ein Gleichungssystem mit einem Parameter vollständig?
  antwort: |
    Man berechnet die Determinante als Term im Parameter und faktorisiert sie. Für alle Werte, an denen sie nicht $0$ ist, gibt es genau eine Lösung.
    Sie lässt sich mit Cramer als Formel angeben. Jeden Sonderwert setzt man einzeln ein und untersucht ihn mit Gauß: Widerspruch heißt keine Lösung,
    Nullzeile ohne Widerspruch heißt unendlich viele. Durch Ausdrücke wie $a - 1$ darf man nur teilen, wenn man den Fall $a = 1$ vorher abgetrennt hat.
  kernpunkte:
    - 'det als Term, Nullstellen = Sonderwerte'
    - 'sonst eindeutig, Formel mit Cramer'
    - 'Sonderwerte einzeln mit Gauß, nicht durch 0 teilen'
- id: lm-karte-modellieren
  frage: Wie stellt man zu einer Textaufgabe ein Gleichungssystem auf, und worauf achtet man beim Ergebnis?
  antwort: |
    Man legt die Unbekannten mit Bedeutung und Einheit fest und macht aus jeder zahlenmäßigen Information eine Gleichung. Für $n$ Unbekannte braucht
    man $n$ Gleichungen, die nicht auseinander folgen. Ein Beispiel ist die Parabel durch drei Punkte: Jeder Punkt liefert eine lineare Gleichung für
    die Koeffizienten der quadratischen Funktion. Am Ende macht man die Probe im Text und prüft, ob das Ergebnis sinnvoll ist, etwa keine negativen Stückzahlen.
  kernpunkte:
    - 'Unbekannte mit Bedeutung und Einheit'
    - 'jede Information eine Gleichung, n unabhängige für n Unbekannte'
    - 'Probe im Text, Plausibilität prüfen'
```
