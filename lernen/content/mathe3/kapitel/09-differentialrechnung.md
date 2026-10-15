---
nummer: 9
titel: Differentialrechnung
kurz: Änderungsraten, Ableitung und Ableitungsregeln, Tangenten, Kurvendiskussion, Extremwertaufgaben, Anwendungen in Physik und Wirtschaft und das Newton-Verfahren.
teil: A
stunden: 24
pruefungsgewicht: 3
voraussetzungen: [zahlen, gleichungen, funktionen, trigonometrie, analytische-geometrie]
lernziele:
  - absolute und relative Änderung, Änderungsfaktor sowie mittlere und momentane Änderungsrate berechnen und mit Einheit im Sachzusammenhang deuten
  - die Ableitung als Grenzwert des Differenzenquotienten erklären und mit der h-Methode an einer Stelle und als Funktion berechnen
  - aus dem Graphen von f den Verlauf von f′ ablesen und umgekehrt aus dem Graphen von f′ auf Monotonie, Extrema und Wendestellen von f schließen
  - Funktionen mit den Grundableitungen und der Summen-, Faktor-, Produkt-, Quotienten- und Kettenregel ableiten und die passende Regel begründet auswählen
  - Tangente und Normale aufstellen, auch bei vorgegebener Steigung oder von einem äußeren Punkt aus, und Funktionswerte mit der Tangente linear annähern
  - Monotonie, lokale und globale Extrema, Krümmung und Wendepunkte mit notwendigen und hinreichenden Bedingungen bestimmen und begründen
  - eine vollständige Kurvendiskussion durchführen, den Graphen skizzieren und Funktionen aus vorgegebenen Eigenschaften bestimmen
  - Extremwertaufgaben modellieren, auf einem sinnvollen Definitionsbereich lösen und die Randwerte prüfen
  - Ableitungen als Geschwindigkeit, Beschleunigung, Wachstumsrate, Grenzkosten und Grenzgewinn deuten und Gewinnmaxima berechnen
  - Nullstellen mit dem Newton-Verfahren näherungsweise bestimmen und beurteilen, wann das Verfahren versagt
---

Die **Differentialrechnung** ist das Werkzeug, mit dem man **Änderung** beschreibt. Wie schnell fährt
ein Auto genau in diesem Moment? Wie schnell wächst eine Bakterienkultur gerade? Bei welcher
Stückzahl verdient eine Firma am meisten? Wo hat eine Kurve ihren höchsten Punkt? Alle diese
Fragen beantwortet ein einziger Begriff: die **Ableitung**. Sie misst, wie stark sich eine Größe
ändert, wenn sich eine andere Größe ein klein wenig ändert.

Auch in der Informatik begegnet dir die Ableitung ständig. Lernverfahren der künstlichen
Intelligenz suchen mit Ableitungen das Minimum einer Fehlerfunktion. Numerische Programme lösen
Gleichungen mit dem Newton-Verfahren, das du in [9.17 Das Newton-Verfahren](/lernen/mathe3/differentialrechnung/das-newton-verfahren-gleichungen-naeherungsweise-loesen) kennenlernst.

:::pruefung[Was in der schriftlichen Prüfung dazu vorkommt]
Die Differentialrechnung kommt in allen drei Musterprüfungen der TU Wien vor. Typisch sind drei
Aufgabenarten:

1. **Eine vollständige Kurvendiskussion** eines Polynoms vierten Grades: Definitionsbereich,
   Nullstellen (mit einer Substitution), Monotonie, lokale und globale Extrema, Wendepunkte. Das
   allein ist etwa ein Viertel der Punkte.
2. **Eine Bewegung deuten:** Aus einer Geschwindigkeits-Zeit-Funktion bestimmt man Konstanten,
   Bremsdauer und Beschleunigung. Dabei muss man Einheiten umrechnen, etwa km/h in m/s.
3. **Eine Exponentialfunktion umschreiben und ableiten:** Eine Funktion mit Basis $2$ wird in die
   Form $\alpha\,e^{\lambda x}$ gebracht und mit der Kettenregel abgeleitet.

Die Originalaufgaben rechnest du in den Prüfungssimulationen. In diesem Kapitel übst du an
abgewandelten Aufgaben, damit die Simulation später ein ehrlicher Test bleibt.
:::

Dieses Kapitel baut die Differentialrechnung so auf, wie man sie in der Schule lernt: anschaulich,
mit Rechenregeln und vielen Anwendungen. Die **exakte Theorie** folgt in
[Kapitel 13](/lernen/mathe3/differenzierbarkeit). Dort stehen die genaue Grenzwertdefinition, die
Beweise der Regeln und der Mittelwertsatz. Grenzwerte von Funktionen behandelt
[Kapitel 12](/lernen/mathe3/grenzwerte-stetigkeit). Die Umkehrung des Ableitens, das Integrieren,
kommt in [Kapitel 10](/lernen/mathe3/integralrechnung).

:::vorwissen
Für dieses Kapitel brauchst du fünf Dinge aus früheren Kapiteln. Die Fragen darunter zeigen dir,
ob du sie noch sicher kannst.

- **Steigung einer Geraden:** $k = \frac{y_2 - y_1}{x_2 - x_1}$, also „Höhenunterschied durch
  Längenunterschied“. Siehe [Kapitel 4, Abschnitt „Lineare Funktionen“](/lernen/mathe3/funktionen).
- **Potenzen mit negativen und gebrochenen Hochzahlen**, zum Beispiel $\frac{1}{x^2} = x^{-2}$ und
  $\sqrt x = x^{1/2}$. Siehe [Kapitel 1, Abschnitt „Potenzen und Wurzeln“](/lernen/mathe3/zahlen).
- **Ausmultiplizieren mit binomischen Formeln** und **quadratische Gleichungen lösen**. Siehe
  [Kapitel 1](/lernen/mathe3/zahlen) und [Kapitel 2](/lernen/mathe3/gleichungen).
- **Bogenmaß:** Winkel als Länge eines Bogens am Einheitskreis, $180° = \pi$. Siehe
  [Kapitel 5](/lernen/mathe3/trigonometrie).
- **Normale Geraden:** Zwei Geraden stehen genau dann senkrecht aufeinander, wenn das Produkt
  ihrer Steigungen $-1$ ist. Siehe [Kapitel 7](/lernen/mathe3/analytische-geometrie).
:::

### Eingangsdiagnose

Beantworte die folgenden sieben Fragen, bevor du weiterliest. Jede falsche Antwort zeigt dir,
welchen Abschnitt eines früheren Kapitels du kurz wiederholen solltest.

```aufgabe
id: dr-diag-steigung
titel: Steigung aus zwei Punkten
niveau: 1
art: check
angabe: |
  Eine Gerade geht durch die Punkte $A(1 \mid 2)$ und $B(4 \mid 11)$. Wie groß ist ihre Steigung $k$?
  (Herkunft: [Kapitel 4, „Lineare Funktionen“](/lernen/mathe3/funktionen))
teile:
  - typ: zahl
    label: '$k$'
    loesung: "(11 - 2)/(4 - 1)"
    anzeige: '3'
    fehler:
      - wert: "1/3"
        meldung: |
          Du hast „Längenunterschied durch Höhenunterschied“ gerechnet. Die Steigung ist umgekehrt
          der **Höhenunterschied** (Unterschied der $y$-Werte) geteilt durch den **Längenunterschied**
          (Unterschied der $x$-Werte).
loesung: |
  Die Steigung ist der Höhenunterschied geteilt durch den Längenunterschied:
  $k = \dfrac{11 - 2}{4 - 1} = \dfrac{9}{3} = 3$.
  ---
  Geht man auf dieser Geraden $1$ nach rechts, geht man $3$ nach oben.
```

```aufgabe
id: dr-diag-potenz
titel: Wurzel als Potenz
niveau: 1
art: check
angabe: |
  Schreibe $\dfrac{2}{\sqrt x}$ in der Form $2\cdot x^r$. Wie groß ist die Hochzahl $r$?
  (Herkunft: [Kapitel 1, „Potenzen und Wurzeln“](/lernen/mathe3/zahlen))
teile:
  - typ: zahl
    label: '$r$'
    loesung: "-1/2"
    anzeige: '-\tfrac12'
    fehler:
      - wert: "1/2"
        meldung: |
          Die Wurzel ist zwar die Hochzahl $\tfrac12$. Sie steht hier aber **im Nenner**. Ein Faktor im
          Nenner bekommt beim Hinaufholen ein Minus in der Hochzahl: $\frac{1}{x^a} = x^{-a}$.
      - wert: "-2"
        meldung: |
          Die Quadratwurzel ist die Hochzahl $\tfrac12$, nicht $2$. Es gilt $\sqrt x = x^{1/2}$, denn
          $x^{1/2}\cdot x^{1/2} = x^1 = x$.
loesung: |
  Die Quadratwurzel ist eine Potenz mit Hochzahl $\tfrac12$: $\sqrt x = x^{1/2}$.
  ---
  Ein Faktor im Nenner wandert mit negativer Hochzahl in den Zähler: $\dfrac{2}{x^{1/2}} = 2\cdot x^{-1/2}$.
  Also ist $r = -\tfrac12$.
```

```aufgabe
id: dr-diag-quadratisch
titel: Quadratische Gleichung
niveau: 1
art: check
angabe: |
  Löse die Gleichung $x^2 - 2x - 8 = 0$. Gib beide Lösungen an, getrennt durch einen Strichpunkt.
  (Herkunft: [Kapitel 2, „Quadratische Gleichungen“](/lernen/mathe3/gleichungen))
teile:
  - typ: menge
    label: 'Lösungen'
    loesung: ["4", "-2"]
    fehler:
      - wert: ["-4", "2"]
        meldung: |
          Die Vorzeichen sind vertauscht. In der kleinen Lösungsformel steht
          $x = -\frac p2 \pm \sqrt{\left(\frac p2\right)^2 - q}$. Mit $p = -2$ ist $-\frac p2 = +1$.
          Setz zur Probe deine Werte in die Gleichung ein.
loesung: |
  Kleine Lösungsformel mit $p = -2$ und $q = -8$:
  $x = 1 \pm \sqrt{1 + 8} = 1 \pm 3$.
  ---
  Also $x_1 = 4$ und $x_2 = -2$. Probe: $16 - 8 - 8 = 0$ und $4 + 4 - 8 = 0$.
```

```aufgabe
id: dr-diag-binom
titel: Binomische Formel
niveau: 1
art: check
angabe: |
  Multipliziere $(2 + h)^2$ aus.
  (Herkunft: [Kapitel 1, „Terme umformen“](/lernen/mathe3/zahlen))
teile:
  - typ: term
    label: '$(2 + h)^2 = $'
    variable: h
    loesung: "4 + 4*h + h^2"
    fehler:
      - wert: "4 + h^2"
        meldung: |
          Das gemischte Glied fehlt. Ein Quadrat einer Summe ist **nicht** die Summe der Quadrate.
          Nach der ersten binomischen Formel gilt $(a + b)^2 = a^2 + 2ab + b^2$, hier also mit $2\cdot 2\cdot h = 4h$.
loesung: |
  Erste binomische Formel $(a + b)^2 = a^2 + 2ab + b^2$ mit $a = 2$ und $b = h$.
  ---
  $(2 + h)^2 = 4 + 4h + h^2$. Genau diese Rechnung brauchst du gleich bei der h-Methode.
```

```aufgabe
id: dr-diag-bogenmass
titel: Grad in Bogenmaß
niveau: 1
art: check
angabe: |
  Wie viel sind $90°$ im Bogenmaß?
  (Herkunft: [Kapitel 5, „Winkel in Grad und im Bogenmaß“](/lernen/mathe3/trigonometrie))
teile:
  - typ: zahl
    label: '$90°$ im Bogenmaß'
    loesung: "pi/2"
    anzeige: '\tfrac{\pi}{2} \approx 1{,}571'
    fehler:
      - wert: "pi"
        meldung: |
          $\pi$ entspricht $180°$, also einem halben Kreis. $90°$ ist ein Viertelkreis, also die Hälfte davon.
loesung: |
  Ein voller Kreis hat $360°$ oder $2\pi$, also entspricht $180°$ genau $\pi$.
  ---
  $90°$ ist die Hälfte von $180°$, im Bogenmaß also $\frac{\pi}{2} \approx 1{,}571$.
```

```aufgabe
id: dr-diag-normal
titel: Steigung einer normalen Geraden
niveau: 1
art: check
angabe: |
  Eine Gerade hat die Steigung $2$. Welche Steigung hat eine Gerade, die senkrecht auf sie steht?
  (Herkunft: [Kapitel 7, „Lage zweier Geraden in der Ebene“](/lernen/mathe3/analytische-geometrie))
teile:
  - typ: zahl
    label: 'Steigung der normalen Geraden'
    loesung: "-1/2"
    anzeige: '-\tfrac12'
    fehler:
      - wert: "-2"
        meldung: |
          Nur das Vorzeichen umzudrehen reicht nicht. Das Produkt der beiden Steigungen muss $-1$ sein:
          $2\cdot(-2) = -4$. Du brauchst den **negativen Kehrwert**.
      - wert: "1/2"
        meldung: |
          Der Kehrwert stimmt, aber das Vorzeichen fehlt. Das Produkt der Steigungen muss $-1$ sein,
          nicht $+1$.
loesung: |
  Zwei Geraden stehen senkrecht aufeinander, wenn das Produkt ihrer Steigungen $-1$ ist: $2\cdot k = -1$.
  ---
  Also $k = -\tfrac12$, der negative Kehrwert von $2$.
```

```aufgabe
id: dr-diag-expgleichung
titel: Exponentialgleichung
niveau: 1
art: check
angabe: |
  Löse die Gleichung $e^x = 5$.
  (Herkunft: [Kapitel 2, „Exponential- und Logarithmusgleichungen“](/lernen/mathe3/gleichungen))
teile:
  - typ: zahl
    label: '$x$'
    loesung: "ln(5)"
    anzeige: '\ln 5 \approx 1{,}609'
    fehler:
      - wert: "lg(5)"
        meldung: |
          Du hast den Zehnerlogarithmus $\lg$ verwendet. Zur Basis $e$ gehört der natürliche
          Logarithmus $\ln$: Er beantwortet die Frage „$e$ hoch wie viel ergibt $5$?“.
      - wert: "5/e"
        meldung: |
          Durch $e$ zu dividieren hebt eine Multiplikation mit $e$ auf, aber keine Potenz $e^x$.
          Die Umkehrung von „$e$ hoch“ ist der natürliche Logarithmus.
loesung: |
  Wir wenden auf beide Seiten den natürlichen Logarithmus an, weil er „$e$ hoch“ rückgängig macht.
  ---
  $x = \ln 5 \approx 1{,}609$. Probe: $e^{1{,}609} \approx 5{,}00$.
```

## Änderungen messen: absolute, relative und mittlere Änderung

```aufgabe
id: dr-check-prozent
titel: Prozentuelle Zunahme
niveau: 1
art: check
angabe: |
  Ein Preis steigt von $80$ Euro auf $92$ Euro. Um wie viel Prozent ist er gestiegen?
  (Herkunft: [Kapitel 1, „Prozentrechnung“](/lernen/mathe3/zahlen))
teile:
  - typ: zahl
    label: 'Zunahme'
    einheit: "%"
    loesung: "(92 - 80)/80*100"
    anzeige: '15'
    fehler:
      - wert: "12"
        meldung: |
          $12$ ist die Zunahme in **Euro**. Gefragt ist der Anteil dieser Zunahme am **alten** Preis,
          also $12$ von $80$.
      - wert: "(92 - 80)/92*100"
        meldung: |
          Du hast die Zunahme auf den **neuen** Preis bezogen. Prozentuelle Änderungen bezieht man
          immer auf den Ausgangswert, hier $80$ Euro.
loesung: |
  Zunahme in Euro: $92 - 80 = 12$.
  ---
  Bezogen auf den alten Preis: $\dfrac{12}{80} = 0{,}15 = 15\,\%$.
```

Bevor wir die „Geschwindigkeit einer Änderung“ in einem einzigen Moment messen, klären wir, wie man
Änderung **über einen Zeitraum** misst. Dafür gibt es vier verschiedene Zahlen. Sie beantworten vier
verschiedene Fragen. Wer sie verwechselt, verliert in der Prüfung Punkte, obwohl er richtig rechnet.

### Vier Maße für eine Änderung

Eine Größe $f$ hängt von $x$ ab, zum Beispiel der Wasserstand von der Uhrzeit. Am Anfang des
Zeitraums ist $x = a$, am Ende ist $x = b$. Dann gibt es vier Maße:

:::definition[Absolute Änderung, relative Änderung, Änderungsfaktor, mittlere Änderungsrate]
Für eine Funktion $f$ und zwei Stellen $a < b$ heißt

- $f(b) - f(a)$ die **absolute Änderung**: um wie viel sich $f$ geändert hat, in der Einheit von $f$.
- $\dfrac{f(b) - f(a)}{f(a)}$ die **relative Änderung** (für $f(a) \neq 0$): um welchen Anteil des
  Anfangswerts sich $f$ geändert hat. Mal $100$ ergibt das die prozentuelle Änderung.
- $\dfrac{f(b)}{f(a)}$ der **Änderungsfaktor**: mit welcher Zahl man den Anfangswert multiplizieren
  muss, um den Endwert zu erhalten.
- $\dfrac{f(b) - f(a)}{b - a}$ die **mittlere Änderungsrate** oder der **Differenzenquotient**: um
  wie viel sich $f$ im Durchschnitt pro Einheit von $x$ geändert hat.
:::

Das Wort **Differenz** bedeutet „Unterschied“, ein **Quotient** ist ein Bruch. Der
Differenzenquotient ist also ein Bruch aus zwei Unterschieden: Unterschied der Funktionswerte
geteilt durch Unterschied der Stellen. Man schreibt dafür auch kurz $\frac{\Delta f}{\Delta x}$. Das
griechische $\Delta$ (Delta) liest man „Änderung von“.

:::beispiel[Ein Wassertank leert sich]
Ein Tank enthält um 8 Uhr $1200$ Liter Wasser, um 11 Uhr nur noch $750$ Liter. Wir messen die
Zeit $x$ in Stunden und den Inhalt $f(x)$ in Litern. Dann ist $a = 8$ und $b = 11$.

1. **Absolute Änderung:** $f(11) - f(8) = 750 - 1200 = -450$ Liter. Das Minus sagt: Der Inhalt hat abgenommen.
2. **Relative Änderung:** $\dfrac{-450}{1200} = -0{,}375 = -37{,}5\,\%$. Der Tank hat also
   $37{,}5\,\%$ seines Anfangsinhalts verloren.
3. **Änderungsfaktor:** $\dfrac{750}{1200} = 0{,}625$. Am Ende ist noch das $0{,}625$-Fache da.
4. **Mittlere Änderungsrate:** $\dfrac{750 - 1200}{11 - 8} = \dfrac{-450}{3} = -150$ Liter pro Stunde.
   Im Durchschnitt flossen also $150$ Liter pro Stunde ab.

Zwischen Faktor und relativer Änderung gilt immer: Faktor $= 1 +$ relative Änderung. Hier ist
$1 + (-0{,}375) = 0{,}625$.
:::

Die Einheit der mittleren Änderungsrate ist immer „Einheit von $f$ pro Einheit von $x$“: Liter pro
Stunde, Meter pro Sekunde, Euro pro Stück. Die relative Änderung und der Faktor haben dagegen keine
Einheit, weil sich die Einheit im Bruch wegkürzt.

```reflexion
frage: Ein zweiter Tank verliert in denselben drei Stunden ebenfalls $450$ Liter, enthielt aber am Anfang $9000$ Liter. Welche der vier Maße sind gleich wie beim ersten Tank, welche nicht?
antwort: |
  Gleich sind die **absolute Änderung** ($-450$ Liter) und die **mittlere Änderungsrate** ($-150$
  Liter pro Stunde), denn beide hängen nur vom Unterschied der Inhalte und der Zeiten ab.

  Verschieden sind die **relative Änderung** und der **Faktor**, denn sie beziehen sich auf den
  Anfangsinhalt. Der große Tank verliert nur $\frac{450}{9000} = 5\,\%$, sein Faktor ist $0{,}95$.
  Absolute Maße sagen „wie viel“, relative Maße sagen „wie viel im Verhältnis zum Anfang“.
```

### Die mittlere Änderungsrate als Steigung einer Sekante

Den Differenzenquotienten kann man im Graphen sehen. Wir verbinden die zwei Punkte
$A = (a \mid f(a))$ und $B = (b \mid f(b))$ des Graphen durch eine Gerade. Eine solche Gerade, die den
Graphen in zwei Punkten schneidet, heißt **Sekante** (lateinisch *secare*, schneiden). Ihre
Steigung ist Höhenunterschied durch Längenunterschied, also genau
$$\frac{f(b) - f(a)}{b - a}.$$
Die mittlere Änderungsrate ist also die **Steigung der Sekante** durch $A$ und $B$.

:::beispiel[Sekanten an die Normalparabel]
Für $f(x) = x^2$ und das Intervall $[1, 3]$ ist $f(1) = 1$ und $f(3) = 9$. Die mittlere Änderungsrate ist
$$\frac{f(3) - f(1)}{3 - 1} = \frac{9 - 1}{2} = 4.$$
Die Sekante durch $(1 \mid 1)$ und $(3 \mid 9)$ hat also die Steigung $4$.

Auf dem Intervall $[-1, 1]$ ist $f(-1) = 1$ und $f(1) = 1$. Die mittlere Änderungsrate ist
$\frac{1 - 1}{2} = 0$. Die Sekante ist waagrecht, obwohl die Parabel dazwischen erst fällt und dann
wieder steigt. Die mittlere Änderungsrate sieht nur die beiden Endpunkte, nicht den Weg dazwischen.
:::

```plot
x: [-1.5, 3.5]
y: [-1, 10]
achsen: { x: "x", y: "y" }
graphen:
  - { f: "x^2", label: "f(x) = x²", farbe: 0 }
  - { f: "4*x - 3", label: "Sekante auf [1; 3], Steigung 4", farbe: 1, gestrichelt: true }
  - { f: "1", label: "Sekante auf [−1; 1], Steigung 0", farbe: 2, gestrichelt: true }
punkte:
  - { x: 1, y: 1, label: "(1|1)" }
  - { x: 3, y: 9, label: "(3|9)" }
  - { x: -1, y: 1, label: "(−1|1)", farbe: 2 }
strecken:
  - { von: [1, 1], nach: [3, 1], gestrichelt: true }
  - { von: [3, 1], nach: [3, 9], gestrichelt: true }
beschriftung: Die Normalparabel mit zwei Sekanten. Das Steigungsdreieck der Sekante durch (1|1) und (3|9) hat 2 Einheiten Länge und 8 Einheiten Höhe, also Steigung 4. Die Sekante durch (−1|1) und (1|1) ist waagrecht, ihre Steigung ist 0.
```

:::achtung[Prozente auf den falschen Wert bezogen]
Ein Preis steigt innerhalb von zwei Jahren von $40$ Euro auf $50$ Euro. Wir suchen die prozentuelle
Zunahme. Eine typische falsche Rechnung lautet
$$\frac{50 - 40}{50} = 0{,}2 = 20\,\% \qquad \text{(falsch).}$$
Hier wurde die Änderung auf den **neuen** Wert bezogen. Richtig ist der Bezug auf den **Anfangswert**:
$$\frac{50 - 40}{40} = 0{,}25 = 25\,\%.$$
Die mittlere Änderungsrate über zwei Jahre ist dagegen $\frac{10}{2} = 5$ Euro pro Jahr. Lies in der
Prüfung genau, ob eine Rate (mit Einheit) oder eine prozentuelle Änderung (ohne Einheit) gefragt ist.
:::

:::achtung[Zähler und Nenner in verschiedener Reihenfolge]
Beim Wassertank aus dem Beispiel (um 8 Uhr $1200$ Liter, um 11 Uhr $750$ Liter) rechnet jemand
$$\frac{1200 - 750}{11 - 8} = +150 \qquad \text{(falsch).}$$
Im Zähler steht „Anfang minus Ende“, im Nenner „Ende minus Anfang“. Dadurch kippt das Vorzeichen,
und aus einer Abnahme wird eine Zunahme. Rechne in Zähler **und** Nenner immer „Ende minus Anfang“.
Dann ist das Vorzeichen automatisch richtig: $\frac{750 - 1200}{11 - 8} = -150$.
:::

:::merke[Welches Maß beantwortet welche Frage?]
- „Um wie viel?“: absolute Änderung $f(b) - f(a)$, mit Einheit.
- „Um wie viel Prozent?“: relative Änderung $\frac{f(b) - f(a)}{f(a)}$, bezogen auf den Anfangswert.
- „Mit welcher Zahl multipliziert?“: Änderungsfaktor $\frac{f(b)}{f(a)}$, gleich $1 +$ relative Änderung.
- „Wie viel im Durchschnitt pro Einheit von $x$?“: mittlere Änderungsrate $\frac{f(b) - f(a)}{b - a}$.
  Sie ist die Steigung der Sekante.
:::

```aufgabe
id: dr-mittlere-rate
titel: Mittlere Änderungsrate eines Polynoms
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Berechne die mittlere Änderungsrate von $f(x) = x^3 - 2x$ im Intervall $[1, 3]$.
teile:
  - typ: zahl
    label: 'mittlere Änderungsrate'
    loesung: "((3^3 - 2*3) - (1^3 - 2*1)) / (3 - 1)"
    anzeige: '11'
    fehler:
      - wert: "22"
        meldung: |
          $22$ ist die **absolute** Änderung $f(3) - f(1)$. Für die mittlere Änderungsrate musst du
          noch durch die Länge des Intervalls teilen.
      - wert: "22/3"
        meldung: |
          Im Nenner steht die **Länge** des Intervalls, also $3 - 1$, nicht die rechte Grenze $3$.
hinweise:
  - Berechne zuerst die beiden Funktionswerte $f(3)$ und $f(1)$.
loesung: |
  Die mittlere Änderungsrate ist der Differenzenquotient $\dfrac{f(3) - f(1)}{3 - 1}$. Wir brauchen also zwei Funktionswerte.
  ---
  $f(3) = 27 - 6 = 21$ und $f(1) = 1 - 2 = -1$.
  ---
  Differenzenquotient: $\dfrac{21 - (-1)}{3 - 1} = \dfrac{22}{2} = 11$. Die Sekante durch $(1 \mid -1)$ und $(3 \mid 21)$ hat die Steigung $11$.
```

```aufgabe
id: dr-aenderung-strompreis
titel: Vier Maße für eine Preiserhöhung
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Der Strompreis steigt innerhalb von zwei Jahren von $0{,}25$ Euro pro kWh auf $0{,}32$ Euro pro kWh.
  Berechne die absolute Änderung (in Euro pro kWh), die relative Änderung (in Prozent) und den Änderungsfaktor.
teile:
  - typ: zahl
    label: 'absolute Änderung'
    einheit: Euro/kWh
    loesung: "0.32 - 0.25"
    anzeige: '0{,}07'
    fehler:
      - wert: "0.25 - 0.32"
        meldung: Rechne „Ende minus Anfang“. Der Preis ist gestiegen, die absolute Änderung ist also positiv.
  - typ: zahl
    label: 'relative Änderung'
    einheit: "%"
    loesung: "(0.32 - 0.25)/0.25*100"
    anzeige: '28'
    fehler:
      - wert: "(0.32 - 0.25)/0.32*100"
        meldung: |
          Du hast durch den **neuen** Preis geteilt. Die relative Änderung bezieht sich auf den
          **Anfangswert** $0{,}25$.
      - wert: "7"
        meldung: |
          $7$ Cent ist die absolute Änderung. Für die Prozentangabe teilst du sie durch den Anfangspreis.
  - typ: zahl
    label: 'Änderungsfaktor'
    loesung: "0.32/0.25"
    anzeige: '1{,}28'
    fehler:
      - wert: "0.28"
        meldung: |
          $0{,}28$ ist die relative Änderung. Der Faktor ist **Endwert durch Anfangswert**. Er ist um $1$ größer
          als die relative Änderung, weil der ursprüngliche Preis noch dazukommt.
hinweise:
  - Alle drei Maße vergleichen den Endwert $0{,}32$ mit dem Anfangswert $0{,}25$.
loesung: |
  **Absolute Änderung:** Ende minus Anfang, $0{,}32 - 0{,}25 = 0{,}07$ Euro pro kWh.
  ---
  **Relative Änderung:** absolute Änderung durch Anfangswert, $\dfrac{0{,}07}{0{,}25} = 0{,}28 = 28\,\%$.
  ---
  **Faktor:** Endwert durch Anfangswert, $\dfrac{0{,}32}{0{,}25} = 1{,}28$. Probe: $1 + 0{,}28 = 1{,}28$ passt.
```

```aufgabe
id: dr-bevoelkerung
titel: Wachstum einer Stadt in vier Maßen
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Eine Stadt hatte im Jahr 2010 genau $1{,}62$ Millionen Einwohner, im Jahr 2022 waren es $1{,}98$ Millionen.
  Berechne die absolute Änderung, die relative Änderung in Prozent (auf zwei Nachkommastellen), den Änderungsfaktor
  (auf vier Nachkommastellen) und die mittlere Änderungsrate in Personen pro Jahr.
teile:
  - typ: zahl
    label: 'absolute Änderung'
    einheit: Personen
    loesung: "1980000 - 1620000"
    anzeige: '360\,000'
    fehler:
      - wert: "0.36"
        meldung: Das ist die Änderung in **Millionen**. Gefragt ist die Anzahl der Personen.
  - typ: zahl
    label: 'relative Änderung'
    einheit: "%"
    loesung: "(1980000 - 1620000)/1620000*100"
    anzeige: '22{,}22'
    toleranz: 0.01
    fehler:
      - wert: "(1980000 - 1620000)/1980000*100"
        meldung: Du hast durch die Einwohnerzahl von 2022 geteilt. Prozente beziehen sich auf den Anfangswert von 2010.
  - typ: zahl
    label: 'Änderungsfaktor'
    loesung: "1.98/1.62"
    anzeige: '1{,}2222'
    toleranz: 0.0001
    fehler:
      - wert: "1.62/1.98"
        meldung: Der Faktor ist **Endwert durch Anfangswert**. Er muss größer als $1$ sein, weil die Stadt gewachsen ist.
  - typ: zahl
    label: 'mittlere Änderungsrate'
    einheit: Personen/Jahr
    loesung: "(1980000 - 1620000) / (2022 - 2010)"
    anzeige: '30\,000'
    fehler:
      - wert: "360000"
        meldung: Das ist die absolute Änderung. Die Rate gibt die Änderung **pro Jahr** an, du musst also noch durch die Anzahl der Jahre teilen.
hinweise:
  - Rechne die Millionen zuerst in Personen um, damit alle Ergebnisse die richtige Einheit haben.
  - Die Zeitspanne beträgt $2022 - 2010 = 12$ Jahre. Nur die mittlere Änderungsrate braucht sie.
gefuehrt:
  - text: Wie viele Personen kamen von 2010 bis 2022 dazu?
    teil: { typ: zahl, loesung: "1980000 - 1620000" }
    erklaerung: Absolute Änderung, Ende minus Anfang, $1\,980\,000 - 1\,620\,000 = 360\,000$ Personen.
  - text: Welcher Anteil der Einwohnerzahl von 2010 ist das? Gib die Antwort in Prozent an (zwei Nachkommastellen).
    teil: { typ: zahl, loesung: "360000/1620000*100", toleranz: 0.01 }
    erklaerung: Relative Änderung $\frac{360\,000}{1\,620\,000} \approx 0{,}2222$, also rund $22{,}22\,\%$.
  - text: Mit welchem Faktor muss man die Zahl von 2010 multiplizieren, um die Zahl von 2022 zu erhalten?
    teil: { typ: zahl, loesung: "1980000/1620000", toleranz: 0.0001 }
    erklaerung: Faktor $= \frac{1{,}98}{1{,}62} \approx 1{,}2222$, und das ist $1 +$ relative Änderung.
  - text: Wie viele Personen kamen im Durchschnitt pro Jahr dazu?
    teil: { typ: zahl, loesung: "360000/12" }
    erklaerung: Mittlere Änderungsrate $\frac{360\,000}{12} = 30\,000$ Personen pro Jahr.
loesung: |
  **Absolute Änderung:** $1\,980\,000 - 1\,620\,000 = 360\,000$ Personen.
  ---
  **Relative Änderung:** $\dfrac{360\,000}{1\,620\,000} = \dfrac{2}{9} \approx 0{,}2222$, also etwa $22{,}22\,\%$.
  **Faktor:** $\dfrac{1{,}98}{1{,}62} = \dfrac{11}{9} \approx 1{,}2222$.
  ---
  **Mittlere Änderungsrate:** Die Zeitspanne ist $12$ Jahre, also $\dfrac{360\,000}{12} = 30\,000$ Personen pro Jahr.
  ---
  Antwort: Die Stadt ist in zwölf Jahren um etwa $22\,\%$ gewachsen, im Durchschnitt um $30\,000$ Personen pro Jahr.
```

```aufgabe
id: dr-aenderung-kapital
titel: Anfangswert aus der prozentuellen Änderung
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Ein Sparguthaben ist in fünf Jahren um $18\,\%$ auf $11\,800$ Euro gewachsen.
  Wie hoch war das Anfangsguthaben, und wie groß war die mittlere Änderungsrate in Euro pro Jahr?
teile:
  - typ: zahl
    label: 'Anfangsguthaben'
    einheit: Euro
    loesung: "11800/1.18"
    anzeige: '10\,000'
    fehler:
      - wert: "11800*0.82"
        meldung: |
          Du hast $18\,\%$ vom **Endwert** abgezogen. Die $18\,\%$ beziehen sich aber auf den unbekannten
          **Anfangswert**. Es gilt: Anfangswert mal Faktor $1{,}18$ ergibt $11\,800$.
  - typ: zahl
    label: 'mittlere Änderungsrate'
    einheit: Euro/Jahr
    loesung: "(11800 - 11800/1.18)/5"
    anzeige: '360'
    fehler:
      - wert: "1800"
        meldung: Das ist die Änderung in fünf Jahren. Die Rate ist die Änderung **pro Jahr**.
hinweise:
  - Eine Zunahme um $18\,\%$ bedeutet den Änderungsfaktor $1{,}18$.
  - Stelle die Gleichung „Anfangswert mal $1{,}18$ gleich $11\,800$“ auf und löse nach dem Anfangswert.
loesung: |
  Ansatz: Eine Zunahme um $18\,\%$ heißt Faktor $1{,}18$. Mit dem unbekannten Anfangswert $K_0$ gilt $K_0\cdot 1{,}18 = 11\,800$.
  ---
  Wir dividieren beide Seiten durch $1{,}18$: $K_0 = \dfrac{11\,800}{1{,}18} = 10\,000$ Euro.
  ---
  Mittlere Änderungsrate: $\dfrac{11\,800 - 10\,000}{5} = \dfrac{1800}{5} = 360$ Euro pro Jahr.
  ---
  Probe: $10\,000$ Euro plus $18\,\%$ sind $10\,000 + 1800 = 11\,800$ Euro.
```

```aufgabe
id: dr-aenderung-graph
titel: Mittlere Änderungsrate aus einem Graphen
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  Die Abbildung zeigt den Temperaturverlauf $T(t)$ an einem Frühlingstag. Dabei ist $t$ die Zeit in Stunden nach 6 Uhr
  und $T$ die Temperatur in °C. Die markierten Punkte liegen genau auf ganzen Zahlen.

  Lies die nötigen Werte ab und berechne die mittlere Änderungsrate in °C pro Stunde

  a) für die ersten vier Stunden, also auf $[0, 4]$,

  b) auf dem Intervall $[2, 6]$.
plot:
  x: [-0.5, 8.5]
  y: [0, 20]
  achsen: { x: "t in h", y: "T in °C" }
  graphen:
    - { f: "-0.5*x^2 + 4*x + 10", farbe: 0, von: 0, bis: 8 }
  punkte:
    - { x: 0, y: 10, label: "(0|10)" }
    - { x: 2, y: 16, label: "(2|16)" }
    - { x: 4, y: 18, label: "(4|18)" }
    - { x: 6, y: 16, label: "(6|16)" }
teile:
  - typ: zahl
    label: 'a) mittlere Änderungsrate auf $[0, 4]$'
    einheit: °C/h
    loesung: "(18 - 10)/(4 - 0)"
    anzeige: '2'
    fehler:
      - wert: "8"
        meldung: $8$ °C ist die absolute Änderung in vier Stunden. Die Rate gibt die Änderung **pro Stunde** an.
  - typ: zahl
    label: 'b) mittlere Änderungsrate auf $[2, 6]$'
    einheit: °C/h
    loesung: "(16 - 16)/(6 - 2)"
    anzeige: '0'
    toleranz: 0.001
    fehler:
      - wert: "2"
        meldung: |
          Der Differenzenquotient verwendet nur die Werte an den **Rändern** des Intervalls, also $T(2)$ und $T(6)$.
          Was dazwischen passiert, geht nicht ein.
hinweise:
  - Lies $T(0)$, $T(2)$, $T(4)$ und $T(6)$ an den markierten Punkten ab.
  - Setze jeweils in $\frac{T(b) - T(a)}{b - a}$ ein.
loesung: |
  Abgelesen: $T(0) = 10$, $T(2) = 16$, $T(4) = 18$, $T(6) = 16$ (jeweils in °C).
  ---
  a) $\dfrac{T(4) - T(0)}{4 - 0} = \dfrac{18 - 10}{4} = 2$ °C pro Stunde. Am Vormittag wurde es im Mittel um $2$ °C pro Stunde wärmer.
  ---
  b) $\dfrac{T(6) - T(2)}{6 - 2} = \dfrac{16 - 16}{4} = 0$ °C pro Stunde.
  ---
  Deutung: Die mittlere Änderungsrate $0$ heißt nicht, dass sich nichts geändert hat. Die Temperatur stieg bis $t = 4$ und fiel danach wieder auf denselben Wert.
```

```aufgabe
id: dr-aenderung-fehler
titel: Prozent hinauf und hinunter
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  Ein Aktienkurs fällt an einem Tag von $50$ Euro auf $40$ Euro. Am nächsten Tag steigt er wieder auf $50$ Euro.
  Ein Mitschüler sagt: „Zuerst $-20\,\%$, dann $+20\,\%$, deshalb ist der Kurs wieder gleich.“

  Um wie viel Prozent ist der Kurs am zweiten Tag tatsächlich gestiegen?
teile:
  - typ: zahl
    label: 'Zunahme am zweiten Tag'
    einheit: "%"
    loesung: "(50 - 40)/40*100"
    anzeige: '25'
    fehler:
      - wert: "20"
        meldung: |
          Genau das ist der Fehler des Mitschülers. Die Zunahme am zweiten Tag bezieht sich auf den Kurs
          **zu Beginn des zweiten Tages**, also auf $40$ Euro, nicht auf $50$ Euro.
hinweise:
  - Jede prozentuelle Änderung bezieht sich auf den Wert am Anfang ihres eigenen Zeitraums.
  - Am Anfang des zweiten Tages steht der Kurs bei $40$ Euro.
loesung: |
  Erster Tag: $\dfrac{40 - 50}{50} = -0{,}2 = -20\,\%$. Bezugswert ist $50$ Euro.
  ---
  Zweiter Tag: $\dfrac{50 - 40}{40} = 0{,}25 = +25\,\%$. Bezugswert ist jetzt $40$ Euro.
  ---
  Mit Faktoren sieht man es sofort: $0{,}8\cdot 1{,}25 = 1$. Nach $-20\,\%$ und $+20\,\%$ wäre der Kurs dagegen $0{,}8\cdot 1{,}2 = 0{,}96$, also $48$ Euro.
```

```aufgabe
id: dr-aenderung-medikament
titel: Gleiche relative, verschiedene absolute Änderung
niveau: 3
lernziel: 0
kompetenz: modellieren
angabe: |
  Die Konzentration eines Medikaments im Blut ist $c(t) = 12\cdot 0{,}8^t$ (in mg pro Liter, $t$ in Stunden nach der Einnahme).

  a) Berechne die mittlere Änderungsrate in den ersten zwei Stunden und in den Stunden zwei bis vier.

  b) Berechne in beiden Zeiträumen die relative Änderung in Prozent.

  c) Erkläre, warum die Raten verschieden, die relativen Änderungen aber gleich sind.

  Runde auf vier Nachkommastellen.
teile:
  - typ: zahl
    label: 'a) mittlere Änderungsrate auf $[0, 2]$'
    einheit: mg/(l·h)
    loesung: "(12*0.8^2 - 12)/2"
    anzeige: '-2{,}16'
    fehler:
      - wert: "12*0.8^2 - 12"
        meldung: Das ist die absolute Änderung in zwei Stunden. Teile noch durch die Länge des Zeitraums.
  - typ: zahl
    label: 'a) mittlere Änderungsrate auf $[2, 4]$'
    einheit: mg/(l·h)
    loesung: "(12*0.8^4 - 12*0.8^2)/2"
    anzeige: '-1{,}3824'
    toleranz: 0.0001
  - typ: zahl
    label: 'b) relative Änderung auf $[0, 2]$'
    einheit: "%"
    loesung: "(0.8^2 - 1)*100"
    anzeige: '-36'
    fehler:
      - wert: "-40"
        meldung: |
          Zweimal $-20\,\%$ ergibt nicht $-40\,\%$. Die Faktoren werden multipliziert: $0{,}8\cdot 0{,}8 = 0{,}64$.
  - typ: zahl
    label: 'b) relative Änderung auf $[2, 4]$'
    einheit: "%"
    loesung: "(0.8^2 - 1)*100"
    anzeige: '-36'
  - typ: text
    label: 'c) Erklärung'
    muster: |
      Bei einer Exponentialfunktion ist der Änderungsfaktor für gleich lange Zeiträume immer gleich,
      hier $0{,}8^2 = 0{,}64$. Deshalb ist auch die relative Änderung immer $-36\,\%$. Die absolute
      Änderung ist aber ein Anteil des **aktuellen** Werts. Weil der Wert sinkt, wird auch die absolute
      Abnahme und damit die mittlere Änderungsrate dem Betrag nach kleiner.
hinweise:
  - Berechne $c(0)$, $c(2)$ und $c(4)$.
  - Die relative Änderung ist $\frac{c(b) - c(a)}{c(a)}$. Kürze dabei den Faktor $12$.
loesung: |
  Ansatz: Wir brauchen die Werte an den Intervallgrenzen. $c(0) = 12$, $c(2) = 12\cdot 0{,}64 = 7{,}68$, $c(4) = 12\cdot 0{,}4096 = 4{,}9152$ (mg pro Liter).
  ---
  a) $\dfrac{7{,}68 - 12}{2} = -2{,}16$ und $\dfrac{4{,}9152 - 7{,}68}{2} = -1{,}3824$ mg pro Liter und Stunde.
  ---
  b) $\dfrac{7{,}68 - 12}{12} = -0{,}36$ und $\dfrac{4{,}9152 - 7{,}68}{7{,}68} = -0{,}36$, also jeweils $-36\,\%$.
  ---
  c) Der Faktor für zwei Stunden ist immer $0{,}8^2 = 0{,}64$, egal wo der Zeitraum beginnt. Die absolute Abnahme ist $36\,\%$ des **aktuellen** Werts und wird deshalb kleiner, je weniger Medikament noch da ist. Das ist typisch für exponentielle Abnahme: konstante relative Änderung, abnehmende absolute Änderung.
```

## Von der Sekante zur Tangente: die Ableitung an einer Stelle

```aufgabe
id: dr-check-kuerzen
titel: Durch h kürzen
niveau: 1
art: check
angabe: |
  Vereinfache den Bruch $\dfrac{10h + 5h^2}{h}$ für $h \neq 0$.
  (Herkunft: [Kapitel 1, „Bruchrechnen“ und „Terme umformen“](/lernen/mathe3/zahlen))
teile:
  - typ: term
    label: 'vereinfacht'
    variable: h
    loesung: "10 + 5*h"
    fehler:
      - wert: "10 + 5*h^2"
        meldung: |
          Du hast nur den ersten Summanden durch $h$ geteilt. Ein Bruchstrich teilt den **ganzen** Zähler:
          $\frac{10h + 5h^2}{h} = \frac{10h}{h} + \frac{5h^2}{h}$.
loesung: |
  Wir heben im Zähler $h$ heraus: $10h + 5h^2 = h\,(10 + 5h)$.
  ---
  Dann kürzen wir $h$, was wegen $h \neq 0$ erlaubt ist: $\dfrac{h\,(10 + 5h)}{h} = 10 + 5h$.
```

Ein Tachometer zeigt nicht die Durchschnittsgeschwindigkeit der letzten Stunde. Er zeigt, wie schnell
das Auto **genau jetzt** fährt. Die mittlere Änderungsrate aus [9.1 Änderungen messen: absolute, relative und mittlere Änderung](/lernen/mathe3/differentialrechnung/aenderungen-messen-absolute-relative-und-mittlere-aenderung) braucht aber immer
zwei Zeitpunkte. Wie kann man dann eine Geschwindigkeit in einem einzigen Moment berechnen? Die
Antwort ist die wichtigste Idee dieses Kapitels. Diese Stelle ist für fast alle ungewohnt. Lies sie
in Ruhe und rechne die Tabellen nach.

### Die Idee: immer kürzere Zeiträume

:::beispiel[Ein fallender Stein]
Ein Stein fällt von einem Turm. Nach $t$ Sekunden hat er näherungsweise den Weg $s(t) = 5t^2$ Meter
zurückgelegt. (Das ist $\frac g2 t^2$ mit der Fallbeschleunigung $g \approx 10\ \text{m/s}^2$.)

Wie schnell ist der Stein **genau** zum Zeitpunkt $t = 1$? Wir berechnen Durchschnittsgeschwindigkeiten
auf immer kürzeren Zeiträumen $[1;\ 1 + h]$. Dabei ist $h$ die Länge des Zeitraums in Sekunden.

| Zeitraum | $h$ | $s(1 + h)$ | mittlere Geschwindigkeit $\frac{s(1 + h) - s(1)}{h}$ |
|---|---|---|---|
| $[1;\ 2]$ | $1$ | $20$ | $\frac{20 - 5}{1} = 15$. |
| $[1;\ 1{,}1]$ | $0{,}1$ | $6{,}05$ | $\frac{6{,}05 - 5}{0{,}1} = 10{,}5$. |
| $[1;\ 1{,}01]$ | $0{,}01$ | $5{,}1005$ | $\frac{5{,}1005 - 5}{0{,}01} = 10{,}05$. |
| $[1;\ 1{,}001]$ | $0{,}001$ | $5{,}010005$ | $10{,}005$. |

Je kürzer der Zeitraum, desto näher liegt die Durchschnittsgeschwindigkeit bei $10$ m/s.

Das können wir auch für ein allgemeines $h$ ausrechnen. Wir multiplizieren $(1 + h)^2$ mit der ersten
binomischen Formel aus und kürzen dann durch $h$:
$$\frac{s(1 + h) - s(1)}{h} = \frac{5(1 + 2h + h^2) - 5}{h} = \frac{10h + 5h^2}{h} = 10 + 5h.$$
Das Kürzen ist erlaubt, weil der Zeitraum eine echte Länge hat, also $h \neq 0$ ist. Wird $h$ jetzt
immer kleiner, wird auch $5h$ immer kleiner, und übrig bleibt $10$. Der Stein fällt nach einer
Sekunde mit der **momentanen Geschwindigkeit** $10$ m/s.
:::

Was haben wir gemacht? Wir haben eine Frage über **einen** Zeitpunkt in viele Fragen über **kurze
Zeiträume** übersetzt. Für jeden Zeitraum gibt es eine ganz gewöhnliche Durchschnittsgeschwindigkeit.
Dann haben wir beobachtet, welcher Zahl sich diese Durchschnitte nähern, wenn der Zeitraum
zusammenschrumpft. Diese Zahl nennen wir die momentane Geschwindigkeit.

```aufgabe
id: dr-check-mittel-moment
titel: Mittlere oder momentane Rate?
niveau: 1
art: check
angabe: |
  Welche der folgenden Angaben beschreibt eine **momentane** Änderungsrate?
teile:
  - typ: auswahl
    optionen:
      - 'Ein Zug fuhr von Wien nach Linz $185$ km in $1{,}25$ Stunden, also im Schnitt $148$ km/h.'
      - 'Der Tacho eines Autos zeigt um 14:03 Uhr genau $87$ km/h.'
      - 'Ein Kind ist in den letzten zwei Jahren um $11$ cm gewachsen.'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Das ist ein Durchschnitt über $1{,}25$ Stunden, also eine mittlere Änderungsrate.
      - wert: 2
        meldung: Das ist eine absolute Änderung über zwei Jahre, nicht einmal eine Rate pro Zeiteinheit.
loesung: |
  Nur der Tachowert gehört zu einem einzigen Zeitpunkt. Er ist eine momentane Änderungsrate des Wegs, also eine Momentangeschwindigkeit.
  ---
  Die Zugfahrt liefert eine mittlere Änderungsrate, das Wachstum des Kindes eine absolute Änderung.
```

### Der Grenzwert des Differenzenquotienten

Die Schreibweise $h \to 0$ liest man „$h$ geht gegen null“. Gemeint ist: $h$ wird beliebig klein,
ist aber nie genau $0$. Die Zahl, der sich ein Ausdruck dabei nähert, heißt **Grenzwert** oder
**Limes** (lateinisch für „Grenze“). Man schreibt $\lim\limits_{h \to 0}$. Im Beispiel ist
$\lim\limits_{h \to 0} (10 + 5h) = 10$. Genau definiert wird der Grenzwert in
[Kapitel 12](/lernen/mathe3/grenzwerte-stetigkeit). Hier genügt die anschauliche Vorstellung.

:::definition[Momentane Änderungsrate, Ableitung an einer Stelle]
Nähert sich der Differenzenquotient
$$\frac{f(x_0 + h) - f(x_0)}{h}$$
für $h \to 0$ einer festen Zahl, so heißt diese Zahl die **momentane Änderungsrate** von $f$ an der
Stelle $x_0$ oder die **Ableitung** von $f$ an der Stelle $x_0$. Man schreibt
$$f'(x_0) = \lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h}$$
und liest „$f$ Strich von $x_0$“. Existiert dieser Grenzwert, heißt $f$ an der Stelle $x_0$
**differenzierbar**.
:::

Dabei ist $x_0$ die Stelle, an der wir die Änderungsrate wissen wollen. $h$ ist der kleine Schritt
nach rechts (oder nach links, wenn $h < 0$ ist). $f(x_0 + h) - f(x_0)$ ist die Änderung des
Funktionswerts bei diesem Schritt. Beim Stein ist $f = s$, $x_0 = 1$ und $s'(1) = 10$.

**Ein Nichtbeispiel:** Der Bruch $\frac{s(3) - s(1)}{3 - 1} = 20$ ist **keine** momentane
Änderungsrate. Er ist ein Durchschnitt über zwei Sekunden mit festem Abstand $h = 2$. Erst der
Grenzwert für $h \to 0$ macht aus vielen Durchschnitten eine momentane Rate.

### Was man im Graphen sieht

Geometrisch ist der Differenzenquotient die Steigung der Sekante durch $(x_0 \mid f(x_0))$ und
$(x_0 + h \mid f(x_0 + h))$. Wird $h$ kleiner, rückt der zweite Punkt auf den ersten zu. Die Sekante
dreht sich dabei in eine Grenzlage. Diese Grenzgerade heißt **Tangente** (lateinisch *tangere*,
berühren). Die Ableitung $f'(x_0)$ ist also die **Steigung der Tangente** im Punkt
$(x_0 \mid f(x_0))$. Man sagt auch: die Steigung des Graphen an dieser Stelle.

```plot
x: [-1, 3]
y: [-2, 7]
achsen: { x: "x", y: "y" }
graphen:
  - { f: "x^2", label: "f(x) = x²", farbe: 0 }
  - { f: "3*x - 2", label: "Sekante, h = 1", farbe: 1, gestrichelt: true }
  - { f: "2.5*x - 1.5", label: "Sekante, h = 0,5", farbe: 3, gestrichelt: true }
  - { f: "2*x - 1", label: "Tangente in x₀ = 1", farbe: 2 }
punkte:
  - { x: 1, y: 1, label: "P(1|1)" }
  - { x: 2, y: 4, label: "h = 1" }
  - { x: 1.5, y: 2.25, label: "h = 0,5" }
beschriftung: Sekanten an die Parabel y = x² durch P(1|1). Mit h = 1 hat die Sekante die Steigung 3, mit h = 0,5 die Steigung 2,5. Für h gegen 0 dreht sich die Sekante in die Tangente mit Steigung 2.
```

Bevor du selbst mit $h$ spielst, triff eine Vorhersage.

```aufgabe
id: dr-check-sekante-vorhersage
titel: 'Vorhersage: Was passiert mit der Sekante?'
niveau: 1
art: check
angabe: |
  Am Graphen von $f(x) = x^2$ liegt die Sekante durch $P(1 \mid 1)$ und $Q(1 + h \mid (1 + h)^2)$.
  Ihre Steigung ist $\frac{(1 + h)^2 - 1}{h} = 2 + h$. Was passiert mit dieser Steigung, wenn du $h$ von $1{,}5$ langsam gegen $0$ schiebst?
  (Herkunft: Beispiel „Ein fallender Stein“ in dieser Lektion, dort wurde genauso $h$ gekürzt)
teile:
  - typ: auswahl
    optionen:
      - 'Sie wird immer größer, weil die Sekante immer steiler wird.'
      - 'Sie nähert sich $2$, der Steigung der Tangente in $P$.'
      - 'Sie nähert sich $0$, weil $h$ gegen $0$ geht.'
      - 'Sie ist bei $h = 0$ gleich $\frac00$ und deshalb nicht bestimmt.'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Setze Zahlen ein. Bei $h = 1$ ist die Steigung $3$, bei $h = 0{,}5$ nur $2{,}5$. Sie wird also kleiner.
      - wert: 2
        meldung: |
          Nur der Summand $h$ in $2 + h$ verschwindet. Die $2$ bleibt stehen. Die Steigung nähert sich also $2$, nicht $0$.
      - wert: 3
        meldung: |
          $h$ wird beliebig klein, ist aber nie genau $0$. Für jedes $h \neq 0$ ist die Steigung $2 + h$, eine gewöhnliche Zahl.
loesung: |
  Die Sekantensteigung ist $2 + h$. Wird $h$ kleiner, wird auch $2 + h$ kleiner und nähert sich $2$.
  ---
  $2$ ist die Steigung der Tangente in $P$, also $f'(1) = 2$.
```

Zieh jetzt $h$ im Widget gegen $0$ und beobachte den Differenzenquotienten. Probier auch negative
$h$. Die Sekante nähert sich dann von links derselben Tangente.

```widget
name: tangente
titel: Von der Sekante zur Tangente
props: { f: "x^2", x0: 1, h: 1.5, x: [-1, 3.5], y: [-2, 9], ableitung: "2*x" }
```

**Beobachtung und Erklärung:** Von rechts ($h > 0$) ist die Sekante steiler als die Tangente, von
links ($h < 0$) flacher. Beide Male nähert sich die Steigung $2$. Der Grund steht in der Formel
$2 + h$: Der Summand $h$ ist der „Fehler“ der Sekante gegenüber der Tangente, und er verschwindet.

:::intuition[Hineinzoomen]
Zoomt man in einen glatten Graphen immer weiter hinein, sieht er irgendwann aus wie eine Gerade.
Diese Gerade ist die Tangente, ihre Steigung ist die Ableitung. Die Ableitung beschreibt also, wie
sich die Funktion **im Kleinen** verhält: Ändert man $x$ um ein kleines $\Delta x$, ändert sich $f$
ungefähr um $f'(x_0)\cdot\Delta x$.
:::

### Die h-Methode

Das Rechenschema des Stein-Beispiels heißt **h-Methode**. Wir rechnen es noch einmal für eine
Funktion mit Bruch durch.

:::beispiel[h-Methode für eine Hyperbel]
Gesucht ist die Ableitung von $f(x) = \frac{1}{x}$ an der Stelle $x_0 = 2$.

1. Differenzenquotient aufschreiben: $\dfrac{f(2 + h) - f(2)}{h} = \dfrac{\frac{1}{2 + h} - \frac12}{h}$.
2. Die zwei Brüche im Zähler auf den gemeinsamen Nenner $2(2 + h)$ bringen:
   $\frac{1}{2 + h} - \frac12 = \frac{2 - (2 + h)}{2(2 + h)} = \frac{-h}{2(2 + h)}$.
3. Durch $h$ dividieren heißt mit $\frac1h$ multiplizieren. Dabei kürzt sich $h$:
   $\dfrac{-h}{2(2 + h)}\cdot\dfrac1h = \dfrac{-1}{2(2 + h)}$.
4. Jetzt $h \to 0$: Der Nenner geht gegen $2\cdot 2 = 4$. Also ist $f'(2) = -\frac14$.

Die Hyperbel fällt an der Stelle $2$ mit der Steigung $-\frac14$. Kontrolle mit einer kleinen Zahl:
Für $h = 0{,}01$ ist der Differenzenquotient $\frac{1/2{,}01 - 0{,}5}{0{,}01} \approx -0{,}2488$,
also fast $-0{,}25$.
:::

:::merke[Rezept: Ableitung an einer Stelle mit der h-Methode]
1. Differenzenquotient aufschreiben: $\dfrac{f(x_0 + h) - f(x_0)}{h}$.
2. Den Zähler ausrechnen und vereinfachen: ausmultiplizieren, Brüche auf gleichen Nenner bringen,
   bei Wurzeln mit der „Gegenwurzel“ erweitern (dritte binomische Formel).
3. Im Zähler $h$ herausheben und gegen das $h$ im Nenner kürzen. Das ist erlaubt, weil $h \neq 0$ ist.
4. Erst jetzt $h \to 0$ gehen lassen. Alle Summanden, die noch ein $h$ enthalten, verschwinden.
:::

:::achtung[Zu früh h = 0 eingesetzt]
Beim Stein setzt jemand sofort $h = 0$ ein:
$$\frac{s(1 + 0) - s(1)}{0} = \frac{5 - 5}{0} = \frac00 \qquad \text{(sinnlos).}$$
Durch $0$ darf man nicht dividieren. $\frac00$ ist keine Zahl. Der Ausdruck verrät also nichts über
die Geschwindigkeit. Richtig ist die Reihenfolge des Rezepts: **erst kürzen, dann** $h \to 0$.
:::

:::achtung[Binomische Formel vergessen]
Für $f(x) = x^2$ an der Stelle $3$ rechnet jemand $f(3 + h) = 9 + h^2$ und erhält
$$\frac{9 + h^2 - 9}{h} = h \;\to\; 0 \qquad \text{(falsch).}$$
Die Tangente wäre dann waagrecht, aber die Parabel steigt bei $x = 3$ deutlich. Richtig ist
$(3 + h)^2 = 9 + 6h + h^2$, also $\frac{6h + h^2}{h} = 6 + h \to 6$. Ein Quadrat einer Summe hat
immer das gemischte Glied $2ab$.
:::

```reflexion
frage: Im Stein-Beispiel kürzen wir durch $h$ und lassen danach $h$ gegen $0$ gehen. Ist das nicht ein Widerspruch? Erst darf $h$ nicht null sein, dann doch?
antwort: |
  Es ist kein Widerspruch. Für **jedes einzelne** $h \neq 0$ ist der Differenzenquotient eine gewöhnliche
  Zahl, und für diese $h$ ist das Kürzen erlaubt. So erhalten wir die Formel $10 + 5h$, die für alle
  $h \neq 0$ stimmt.

  Danach fragen wir nur noch: Welcher Zahl nähert sich $10 + 5h$, wenn $h$ immer kleiner wird? Wir setzen
  dabei nie $h = 0$ in den ursprünglichen Bruch ein. Wir beobachten nur, wohin die Werte laufen.
  Genau diese Unterscheidung zwischen „gleich null“ und „gegen null“ macht der Grenzwert.
```

```aufgabe
id: dr-h-methode-einstieg
titel: Ableitung einer Parabel an einer Stelle
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Gegeben ist $f(x) = 2x^2$. Vereinfache den Differenzenquotienten $\dfrac{f(1 + h) - f(1)}{h}$ für $h \neq 0$
  und bestimme damit $f'(1)$.
teile:
  - typ: term
    label: 'vereinfachter Differenzenquotient (Term in $h$)'
    variable: h
    loesung: "4 + 2*h"
    fehler:
      - wert: "2*h"
        meldung: |
          Hier fehlt das gemischte Glied. $(1 + h)^2 = 1 + 2h + h^2$, also $2(1 + h)^2 = 2 + 4h + 2h^2$.
  - typ: zahl
    label: '$f''(1)$'
    loesung: "4"
    fehler:
      - wert: "2"
        meldung: |
          $2$ ist der Funktionswert $f(1)$, also die **Höhe** des Punkts. Gefragt ist die **Steigung** der
          Tangente. Lass im vereinfachten Differenzenquotienten $h$ gegen $0$ gehen.
hinweise:
  - Berechne $f(1 + h) = 2(1 + h)^2$ mit der ersten binomischen Formel.
loesung: |
  Ansatz: Differenzenquotient an der Stelle $x_0 = 1$. Wir brauchen $f(1 + h) = 2(1 + 2h + h^2) = 2 + 4h + 2h^2$ und $f(1) = 2$.
  ---
  $\dfrac{2 + 4h + 2h^2 - 2}{h} = \dfrac{4h + 2h^2}{h} = 4 + 2h$ für $h \neq 0$.
  ---
  Für $h \to 0$ verschwindet $2h$, also ist $f'(1) = 4$. Die Parabel steigt im Punkt $(1 \mid 2)$ mit Steigung $4$.
```

```aufgabe
id: dr-h-tabelle
titel: Momentangeschwindigkeit mit einer Tabelle annähern
niveau: 1
lernziel: 1
kompetenz: anwenden
angabe: |
  Eine Kugel rollt eine schiefe Ebene hinunter. Nach $t$ Sekunden hat sie den Weg $s(t) = 4t^2$ Meter zurückgelegt.

  a) Berechne die mittlere Geschwindigkeit im Zeitraum $[2;\ 2{,}1]$.

  b) Die mittleren Geschwindigkeiten auf $[2;\ 2{,}01]$ und $[2;\ 2{,}001]$ sind $16{,}04$ m/s und $16{,}004$ m/s. Welche Momentangeschwindigkeit hat die Kugel nach $2$ Sekunden?
teile:
  - typ: zahl
    label: 'a) mittlere Geschwindigkeit auf $[2;\ 2{,}1]$'
    einheit: m/s
    loesung: "(4*2.1^2 - 4*2^2)/0.1"
    anzeige: '16{,}4'
    fehler:
      - wert: "4*2.1^2 - 4*2^2"
        meldung: |
          $1{,}64$ m ist der **Weg** in diesem Zeitraum. Für die Geschwindigkeit teilst du durch die Dauer $0{,}1$ s.
  - typ: zahl
    label: 'b) Momentangeschwindigkeit bei $t = 2$'
    einheit: m/s
    loesung: "16"
    toleranz: 0.001
    fehler:
      - wert: "16.004"
        meldung: |
          Das ist noch ein Durchschnitt über $0{,}001$ s. Gesucht ist die Zahl, der sich die Durchschnitte **nähern**.
hinweise:
  - Berechne $s(2{,}1)$ und $s(2)$ und teile ihre Differenz durch $0{,}1$.
loesung: |
  a) Mittlere Geschwindigkeit ist Weg durch Zeit: $s(2{,}1) = 4\cdot 4{,}41 = 17{,}64$ m und $s(2) = 16$ m, also $\dfrac{17{,}64 - 16}{0{,}1} = 16{,}4$ m/s.
  ---
  b) Die Durchschnitte $16{,}4$, dann $16{,}04$, dann $16{,}004$ nähern sich $16$. Die Momentangeschwindigkeit ist $16$ m/s.
  ---
  Kontrolle mit der h-Methode: $\dfrac{4(2 + h)^2 - 16}{h} = 16 + 4h \to 16$ m/s.
```

```aufgabe
id: dr-h-methode-quadrat
titel: h-Methode Schritt für Schritt
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Gegeben ist $f(x) = 3x^2 - x$. Vereinfache den Differenzenquotienten $\dfrac{f(2 + h) - f(2)}{h}$ für $h \neq 0$ so weit wie möglich
  und bestimme damit $f'(2)$.
teile:
  - typ: term
    label: 'vereinfachter Differenzenquotient (Term in $h$)'
    variable: h
    loesung: "11 + 3*h"
    fehler:
      - wert: "13 + 3*h"
        meldung: |
          Beim Ausmultiplizieren von $-(2 + h)$ ist ein Vorzeichen verloren gegangen. Das Minus gilt für
          **beide** Summanden in der Klammer: $-(2 + h) = -2 - h$.
  - typ: zahl
    label: '$f''(2)$'
    loesung: "11"
    fehler:
      - wert: "10"
        meldung: $10$ ist der Funktionswert $f(2)$. Gesucht ist die Steigung, also der Grenzwert des Differenzenquotienten.
hinweise:
  - Berechne zuerst $f(2 + h) = 3(2 + h)^2 - (2 + h)$ und multipliziere aus.
  - Es ist $f(2) = 10$. Nach dem Subtrahieren muss jeder Summand im Zähler ein $h$ enthalten. Sonst ist ein Rechenfehler passiert.
gefuehrt:
  - text: Multipliziere $f(2 + h) = 3(2 + h)^2 - (2 + h)$ aus. Gib das Ergebnis als Term in $h$ an.
    teil: { typ: term, variable: h, loesung: "10 + 11*h + 3*h^2" }
    erklaerung: $3(4 + 4h + h^2) - 2 - h = 12 + 12h + 3h^2 - 2 - h = 10 + 11h + 3h^2$.
  - text: Wie groß ist $f(2)$?
    teil: { typ: zahl, loesung: "3*4 - 2" }
    erklaerung: $f(2) = 3\cdot 4 - 2 = 10$. Die Konstante $10$ hebt sich gleich gegen die $10$ in $f(2 + h)$ weg.
  - text: Bilde den Differenzenquotienten und kürze durch $h$.
    teil: { typ: term, variable: h, loesung: "11 + 3*h" }
    erklaerung: $\frac{11h + 3h^2}{h} = 11 + 3h$. Das Kürzen ist erlaubt, weil $h \neq 0$ ist.
  - text: Lass $h$ gegen $0$ gehen. Wie groß ist $f'(2)$?
    teil: { typ: zahl, loesung: "11" }
    erklaerung: Der Summand $3h$ verschwindet, übrig bleibt $f'(2) = 11$.
loesung: |
  Ansatz: h-Methode an der Stelle $x_0 = 2$. $f(2 + h) = 3(4 + 4h + h^2) - 2 - h = 10 + 11h + 3h^2$, und $f(2) = 12 - 2 = 10$.
  ---
  Im Zähler hebt sich die $10$ weg: $$\frac{f(2 + h) - f(2)}{h} = \frac{11h + 3h^2}{h} = 11 + 3h \qquad (h \neq 0).$$
  ---
  Für $h \to 0$ verschwindet $3h$: $f'(2) = 11$.
  ---
  Kontrolle mit der Ableitungsregel aus [9.5 Grundregeln](/lernen/mathe3/differentialrechnung/grundregeln-potenz-faktor-und-summenregel-und-die-wichtigsten-ableitungen): $f'(x) = 6x - 1$, also $f'(2) = 11$.
```

```aufgabe
id: dr-h-methode-hyperbel
titel: h-Methode mit Bruch
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Gegeben ist $f(x) = \dfrac{3}{x}$. Vereinfache $\dfrac{f(1 + h) - f(1)}{h}$ für $h \neq 0$ und bestimme $f'(1)$.
teile:
  - typ: term
    label: 'vereinfachter Differenzenquotient (Term in $h$)'
    variable: h
    loesung: "-3/(1 + h)"
    bereich: [-0.5, 2]
    fehler:
      - wert: "3/(1 + h)"
        meldung: |
          Prüfe das Vorzeichen im Zähler: $\frac{3}{1 + h} - 3 = \frac{3 - 3(1 + h)}{1 + h} = \frac{-3h}{1 + h}$.
          Der Zähler ist negativ, weil die Hyperbel fällt.
  - typ: zahl
    label: '$f''(1)$'
    loesung: "-3"
    fehler:
      - wert: "3"
        meldung: |
          Die Hyperbel $\frac3x$ fällt für $x > 0$. Ihre Steigung muss also negativ sein. Prüfe den Zähler beim Zusammenfassen der Brüche.
hinweise:
  - Bring $\frac{3}{1 + h} - 3$ auf den gemeinsamen Nenner $1 + h$.
  - Durch $h$ zu dividieren heißt, mit $\frac1h$ zu multiplizieren. Danach kürzt sich $h$.
loesung: |
  Ansatz: h-Methode an der Stelle $1$ mit $f(1 + h) = \frac{3}{1 + h}$ und $f(1) = 3$.
  ---
  Gemeinsamer Nenner: $\dfrac{3}{1 + h} - 3 = \dfrac{3 - 3 - 3h}{1 + h} = \dfrac{-3h}{1 + h}$.
  ---
  Durch $h$ dividieren: $\dfrac{-3h}{(1 + h)\,h} = \dfrac{-3}{1 + h}$ für $h \neq 0$.
  ---
  Für $h \to 0$ geht der Nenner gegen $1$, also $f'(1) = -3$. Plausibel: Die Hyperbel fällt bei $x = 1$.
```

```aufgabe
id: dr-rate-deuten
titel: Änderungsraten deuten
niveau: 2
lernziel: 0
kompetenz: begruenden
angabe: |
  $W(t)$ ist der Wasserstand eines Stausees in Metern, $t$ die Zeit in Tagen ab dem 1. Mai, 0 Uhr.
  Es gilt $\dfrac{W(10) - W(0)}{10} = 0{,}3$ und $W'(10) = -0{,}05$.
  Dabei ist $W'(10)$ die momentane Änderungsrate zum Zeitpunkt $t = 10$.
  Deute beide Angaben im Sachzusammenhang und erkläre, warum sie sich nicht widersprechen.
teile:
  - typ: text
    muster: |
      In den ersten zehn Tagen ist der Wasserstand im Durchschnitt um $0{,}3$ m pro Tag gestiegen,
      insgesamt also um $3$ m. Am 11. Mai um 0 Uhr ($t = 10$) sinkt der Wasserstand in diesem Moment mit
      $0{,}05$ m, also $5$ cm, pro Tag. Das ist kein Widerspruch: Der See kann zuerst stark gestiegen
      sein und am Ende des Zeitraums schon wieder fallen.
hinweise:
  - Der Differenzenquotient ist ein Durchschnitt über zehn Tage, die momentane Rate eine Momentaufnahme.
  - Achte auf das Vorzeichen und auf die Einheit „Meter pro Tag“.
loesung: |
  Der Differenzenquotient ist eine **mittlere** Änderungsrate. Zwischen $t = 0$ und $t = 10$ stieg der Pegel durchschnittlich um $0{,}3$ m pro Tag, insgesamt also um $3$ m.
  ---
  $W'(10) = -0{,}05$ ist eine **momentane** Änderungsrate. Zum Zeitpunkt $t = 10$ sinkt der Pegel (negatives Vorzeichen) mit $5$ cm pro Tag.
  ---
  Beide Aussagen passen zusammen. Ein Durchschnitt sagt nichts über den Verlauf am Ende des Zeitraums. Der See kann zum Beispiel acht Tage lang gestiegen sein und seit zwei Tagen wieder fallen.
```

```aufgabe
id: dr-h-deuten
titel: Was der Differenzenquotient bedeutet
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Welche Aussagen über den Differenzenquotienten $D(h) = \dfrac{f(x_0 + h) - f(x_0)}{h}$ einer differenzierbaren Funktion $f$ sind richtig?
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$D(h)$ ist die Steigung der Sekante durch $(x_0 \mid f(x_0))$ und $(x_0 + h \mid f(x_0 + h))$.'
      - 'Für $h \to 0$ nähert sich $D(h)$ der Steigung der Tangente in $(x_0 \mid f(x_0))$.'
      - 'Man darf in $D(h)$ einfach $h = 0$ einsetzen, um $f''(x_0)$ zu erhalten.'
      - '$h$ darf auch negativ sein. Dann liegt der zweite Punkt links von $x_0$.'
      - '$D(h)$ ist für jedes $h$ gleich $f''(x_0)$.'
    richtig: [0, 1, 3]
    fehler:
      - wert: [0, 1, 2, 3]
        meldung: |
          Bei $h = 0$ steht im Differenzenquotienten $\frac00$, und das ist keine Zahl. Man muss zuerst
          vereinfachen und dann $h$ **gegen** $0$ gehen lassen.
      - wert: [0, 1, 3, 4]
        meldung: |
          Im Allgemeinen hängt die Sekantensteigung von $h$ ab, zum Beispiel $2 + h$ bei $x^2$ an der Stelle $1$.
          Nur bei Geraden sind alle Sekantensteigungen gleich.
      - wert: [0, 1]
        meldung: Auch negative $h$ sind erlaubt. Dann liegt der zweite Punkt links, und die Sekante nähert sich von links.
hinweise:
  - Denk an das Bild mit Sekanten und Tangente.
  - Teste jede Aussage an $f(x) = x^2$ und $x_0 = 1$, wo $D(h) = 2 + h$ ist.
loesung: |
  Ansatz: Wir prüfen jede Aussage am Beispiel $f(x) = x^2$, $x_0 = 1$ mit $D(h) = 2 + h$.
  ---
  Richtig sind die erste Aussage (Sekantensteigung), die zweite (Grenzlage ist die Tangente) und die vierte. Bei $h = -0{,}5$ liegt der zweite Punkt bei $x = 0{,}5$, also links.
  ---
  Falsch ist die dritte Aussage: $h = 0$ liefert $\frac00$. Falsch ist auch die fünfte: $D(h) = 2 + h$ hängt von $h$ ab, nur der Grenzwert ist $2$.
```

```aufgabe
id: dr-h-fehler-finden
titel: Wo steckt der Fehler?
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: |
  Ein Mitschüler bestimmt für $f(x) = x^2 + 3x$ die Ableitung an der Stelle $1$ so:
  $$\frac{f(1 + h) - f(1)}{h} = \frac{(1 + h)^2 + 3(1 + h) - 4}{h} = \frac{1 + h^2 + 3 + 3h - 4}{h} = h + 3 \;\to\; 3.$$
  Er erhält $f'(1) = 3$. Welcher Schritt ist falsch, und wie groß ist $f'(1)$ wirklich?
teile:
  - typ: auswahl
    label: 'Der Fehler steckt in'
    optionen:
      - 'der Berechnung von $f(1) = 4$.'
      - 'dem Ausmultiplizieren von $(1 + h)^2$.'
      - 'dem Kürzen durch $h$.'
      - 'dem Grenzübergang $h \to 0$.'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: '$f(1) = 1 + 3 = 4$ stimmt. Schau dir die Klammer $(1 + h)^2$ genauer an.'
      - wert: 2
        meldung: 'Das Kürzen ist an sich richtig gemacht. Der Fehler passiert einen Schritt früher.'
  - typ: zahl
    label: '$f''(1)$'
    loesung: "5"
    fehler:
      - wert: "3"
        meldung: Das ist das Ergebnis mit dem Fehler. Rechne $(1 + h)^2$ mit der ersten binomischen Formel neu.
hinweise:
  - Prüfe jeden Schritt einzeln, am besten mit der Zahl $h = 1$.
  - '$(1 + h)^2$ hat drei Summanden.'
loesung: |
  Ansatz: Wir prüfen jede Umformung. $f(1) = 1 + 3 = 4$ stimmt.
  ---
  Falsch ist $(1 + h)^2 = 1 + h^2$. Richtig ist $(1 + h)^2 = 1 + 2h + h^2$. Das gemischte Glied $2h$ fehlt.
  ---
  Richtig gerechnet: $\dfrac{1 + 2h + h^2 + 3 + 3h - 4}{h} = \dfrac{5h + h^2}{h} = 5 + h \to 5$. Also $f'(1) = 5$.
```

```aufgabe
id: dr-h-parameter
titel: Parameter aus der Steigung bestimmen
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Für eine Zahl $a$ ist $f(x) = a\,x^2 + x$.

  a) Vereinfache den Differenzenquotienten $\dfrac{f(2 + h) - f(2)}{h}$ für $h \neq 0$. Das Ergebnis enthält $a$ und $h$.

  b) Für welches $a$ hat der Graph an der Stelle $2$ die Steigung $9$?
teile:
  - typ: auswahl
    label: 'a) Der vereinfachte Differenzenquotient ist'
    optionen:
      - '$4a + 1 + a\,h$'
      - '$4a + a\,h$'
      - '$4a + 1$'
      - '$a\,h + 1$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Der Summand $x$ von $f$ liefert im Zähler $(2 + h) - 2 = h$, also nach dem Kürzen noch $+1$.'
      - wert: 2
        meldung: 'Das ist schon der Grenzwert für $h \to 0$. Vorher steht noch der Summand $a\,h$ da.'
  - typ: zahl
    label: 'b) $a$'
    loesung: "2"
    fehler:
      - wert: "9/4"
        meldung: |
          Du hast $4a = 9$ gelöst. Die Steigung ist aber $4a + 1$, denn auch der Summand $x$ trägt zur Steigung bei.
hinweise:
  - Rechne wie gewohnt, behandle $a$ wie eine feste Zahl.
  - Die Steigung an der Stelle $2$ ist der Grenzwert des Differenzenquotienten. Setze ihn gleich $9$.
loesung: |
  Ansatz: h-Methode mit dem Parameter $a$. $f(2 + h) = a(4 + 4h + h^2) + 2 + h$ und $f(2) = 4a + 2$.
  ---
  Zähler: $f(2 + h) - f(2) = 4ah + ah^2 + h$. Durch $h$ geteilt: $4a + a\,h + 1$.
  ---
  Für $h \to 0$ ist $f'(2) = 4a + 1$. Bedingung: $4a + 1 = 9$, also $4a = 8$ und $a = 2$.
  ---
  Probe: Mit $a = 2$ ist $f(x) = 2x^2 + x$, und $f'(2) = 4\cdot 2 + 1 = 9$.
```

```aufgabe
id: dr-h-methode-wurzel
titel: h-Methode mit einer Wurzel
niveau: 3
lernziel: 1
kompetenz: rechnen
angabe: |
  Bestimme mit der h-Methode die Ableitung von $f(x) = \sqrt{2x + 1}$ an der Stelle $x_0 = 4$.
teile:
  - typ: zahl
    label: '$f''(4)$'
    loesung: "1/3"
    anzeige: '\tfrac13'
    fehler:
      - wert: "1/6"
        meldung: |
          Prüfe den Zähler nach dem Erweitern: $(\sqrt{9 + 2h} - 3)(\sqrt{9 + 2h} + 3) = 9 + 2h - 9 = 2h$.
          Der Faktor $2$ kommt aus der $2x$ unter der Wurzel.
hinweise:
  - Es ist $f(4) = \sqrt 9 = 3$ und $f(4 + h) = \sqrt{9 + 2h}$. Direktes Kürzen ist nicht möglich.
  - Erweitere den Bruch mit $\sqrt{9 + 2h} + 3$. Dann hilft die dritte binomische Formel $(a - b)(a + b) = a^2 - b^2$.
loesung: |
  Ansatz: $\dfrac{f(4 + h) - f(4)}{h} = \dfrac{\sqrt{9 + 2h} - 3}{h}$. Hier kann man $h$ nicht herausheben, weil es unter der Wurzel steckt.
  ---
  Wir erweitern mit $\sqrt{9 + 2h} + 3$, damit die Wurzel im Zähler verschwindet (dritte binomische Formel):
  $$\frac{(\sqrt{9 + 2h} - 3)(\sqrt{9 + 2h} + 3)}{h\,(\sqrt{9 + 2h} + 3)} = \frac{9 + 2h - 9}{h\,(\sqrt{9 + 2h} + 3)} = \frac{2}{\sqrt{9 + 2h} + 3}.$$
  ---
  Für $h \to 0$ geht der Nenner gegen $\sqrt 9 + 3 = 6$. Also $f'(4) = \dfrac26 = \dfrac13$.
  ---
  Probe mit einer kleinen Zahl: $\dfrac{\sqrt{9{,}02} - 3}{0{,}01} \approx 0{,}3331$. Das passt zu $\frac13 \approx 0{,}3333$.
```

## Die Ableitungsfunktion: die Steigung an jeder Stelle

```aufgabe
id: dr-check-hmethode-stelle
titel: Ableitung an einer Stelle
niveau: 1
art: check
angabe: |
  Für $f(x) = x^2$ ergibt die h-Methode an der Stelle $x_0 = -1$ den vereinfachten Differenzenquotienten $-2 + h$.
  Wie groß ist $f'(-1)$?
  (Herkunft: [9.2 Von der Sekante zur Tangente](/lernen/mathe3/differentialrechnung/von-der-sekante-zur-tangente-die-ableitung-an-einer-stelle))
teile:
  - typ: zahl
    label: '$f''(-1)$'
    loesung: "-2"
    fehler:
      - wert: "1"
        meldung: |
          $1$ ist der Funktionswert $f(-1) = (-1)^2$, also die **Höhe** des Punkts. Gesucht ist die
          **Steigung**: Lass im Term $-2 + h$ die Zahl $h$ gegen $0$ gehen.
      - wert: "2"
        meldung: |
          Das Vorzeichen fehlt. Die Parabel fällt links vom Scheitel, die Steigung bei $x = -1$ ist also negativ.
loesung: |
  Für $h \to 0$ verschwindet der Summand $h$ im Term $-2 + h$.
  ---
  Also ist $f'(-1) = -2$. Die Parabel fällt an dieser Stelle mit Steigung $-2$.
```

Bisher hast du die Ableitung an **einer** Stelle berechnet, zum Beispiel $f'(1)$. Für jede neue Stelle
müsstest du die ganze h-Methode wiederholen. Das ist mühsam. Viel praktischer ist eine Formel, die
die Steigung an **jeder** Stelle auf einmal liefert. Dazu rechnen wir die h-Methode mit einem
allgemeinen $x$ statt mit einer bestimmten Zahl. Das $x$ behandeln wir dabei wie eine feste Zahl,
die wir nur noch nicht kennen.

### Die h-Methode mit allgemeinem x

:::beispiel[Die Steigung der Normalparabel an jeder Stelle]
Gesucht ist die Steigung von $f(x) = x^2$ an einer beliebigen Stelle $x$.

1. Differenzenquotient aufschreiben: $\dfrac{f(x + h) - f(x)}{h} = \dfrac{(x + h)^2 - x^2}{h}$.
2. Mit der ersten binomischen Formel ausmultiplizieren: $(x + h)^2 = x^2 + 2xh + h^2$. Dann hebt sich
   $x^2$ weg, und der Zähler ist $2xh + h^2$.
3. Im Zähler $h$ herausheben und kürzen: $\dfrac{h\,(2x + h)}{h} = 2x + h$. Das ist erlaubt, weil $h \neq 0$ ist.
4. $h$ gegen $0$ gehen lassen: Übrig bleibt $2x$.

Die Normalparabel hat also an jeder Stelle $x$ die Steigung $2x$. Ein paar Werte:

- An der Stelle $-3$ ist die Steigung $2\cdot(-3) = -6$. Die Parabel fällt dort steil.
- An der Stelle $0$ ist die Steigung $0$. Dort liegt der Scheitel mit waagrechter Tangente.
- An der Stelle $2{,}5$ ist die Steigung $5$. Die Parabel steigt dort steil.
:::

Aus einer Rechnung haben wir eine neue Funktion gewonnen. Sie ordnet jeder Stelle $x$ die Steigung
des Graphen an dieser Stelle zu.

:::definition[Ableitungsfunktion]
Die Funktion $f$ sei an jeder Stelle $x$ eines Intervalls $I$ differenzierbar. Die Funktion, die
jedem $x$ aus $I$ die Zahl $f'(x)$ zuordnet, heißt **Ableitungsfunktion** von $f$, kurz **Ableitung**.
Man schreibt sie $f'$ und sagt dann, $f$ ist **auf $I$ differenzierbar**.
:::

Dabei ist $I$ ein Intervall, also ein lückenloses Stück der Zahlengeraden, zum Beispiel $[0, 5]$ oder
ganz $\R$. **Beispiel:** Für $f(x) = x^2$ ist $f'(x) = 2x$ die Ableitungsfunktion. **Nichtbeispiel:**
$f'(1) = 2$ ist **keine** Ableitungsfunktion. Das ist eine einzelne Zahl, nämlich der Wert der
Ableitungsfunktion an der Stelle $1$.

Für die Ableitung gibt es drei Schreibweisen, die du alle lesen können musst:

- $f'(x)$, gelesen „$f$ Strich von $x$“. Das ist die Schulschreibweise.
- $\dfrac{\dd f}{\dd x}$ oder $\dfrac{\dd y}{\dd x}$, gelesen „d $f$ nach d $x$“. Diese Schreibweise stammt
  von Leibniz. Sie erinnert an den Differenzenquotienten $\frac{\Delta f}{\Delta x}$, bei dem die
  Unterschiede beliebig klein werden.
- $\dot s$, gelesen „$s$ Punkt“. So schreibt man in der Physik die Ableitung nach der Zeit, also
  $\dot s = s'(t)$.

```plot
x: [-3.2, 3.2]
y: [-6.5, 9.5]
achsen: { x: "x", y: "y" }
graphen:
  - { f: "x^2", label: "f(x) = x²", farbe: 0 }
  - { f: "2*x", label: "f'(x) = 2x", farbe: 1 }
punkte:
  - { x: 0, y: 0, label: "Scheitel: f'(0) = 0" }
  - { x: 2, y: 4, label: "Steigung 4", farbe: 0 }
  - { x: 2, y: 4, farbe: 1 }
strecken:
  - { von: [2, 0], nach: [2, 4], gestrichelt: true }
beschriftung: Die Normalparabel f(x) = x² und ihre Ableitungsfunktion f'(x) = 2x. Links von 0 fällt die Parabel, dort liegt der Graph von f' unter der x-Achse. An der Stelle 2 hat die Parabel die Steigung 4, und genau diesen Wert hat f' dort.
```

:::beispiel[Die Ableitungen von x³, 1/x und √x]
**Für $f(x) = x^3$** brauchen wir $(x + h)^3$. Wir rechnen $(x + h)^2\cdot(x + h) = (x^2 + 2xh + h^2)(x + h)$
und multiplizieren aus: $(x + h)^3 = x^3 + 3x^2h + 3xh^2 + h^3$. Nach dem Abziehen von $x^3$ und
Kürzen durch $h$ bleibt
$$\frac{(x + h)^3 - x^3}{h} = 3x^2 + 3xh + h^2.$$
Für $h \to 0$ verschwinden die beiden Summanden mit $h$. Also ist $f'(x) = 3x^2$.

**Für $f(x) = \frac1x$** mit $x \neq 0$ bringen wir die zwei Brüche im Zähler auf den gemeinsamen
Nenner $x(x + h)$:
$$\frac{\frac{1}{x + h} - \frac1x}{h} = \frac{x - (x + h)}{x(x + h)}\cdot\frac1h = \frac{-h}{x(x + h)\,h} = \frac{-1}{x(x + h)}.$$
Für $h \to 0$ wird der Nenner zu $x\cdot x = x^2$. Also ist $f'(x) = -\dfrac{1}{x^2}$.

**Für $f(x) = \sqrt x$** mit $x > 0$ erweitern wir mit der „Gegenwurzel“ $\sqrt{x + h} + \sqrt x$.
Die dritte binomische Formel macht den Zähler wurzelfrei:
$$\frac{\sqrt{x + h} - \sqrt x}{h}\cdot\frac{\sqrt{x + h} + \sqrt x}{\sqrt{x + h} + \sqrt x} = \frac{(x + h) - x}{h\,(\sqrt{x + h} + \sqrt x)} = \frac{1}{\sqrt{x + h} + \sqrt x}.$$
Für $h \to 0$ wird der Nenner zu $2\sqrt x$. Also ist $f'(x) = \dfrac{1}{2\sqrt x}$.
:::

Schreib die vier Ergebnisse als Potenzen. Dann siehst du ein Muster:

- $x^2$ hat die Ableitung $2x^1$.
- $x^3$ hat die Ableitung $3x^2$.
- $\frac1x = x^{-1}$ hat die Ableitung $-\frac{1}{x^2} = -1\cdot x^{-2}$.
- $\sqrt x = x^{1/2}$ hat die Ableitung $\frac{1}{2\sqrt x} = \frac12\cdot x^{-1/2}$.

Jedes Mal wandert die Hochzahl als Faktor nach vorne, und die neue Hochzahl ist um $1$ kleiner. Das
ist die **Potenzregel** $(x^n)' = n\cdot x^{n-1}$. Ab [9.5 Grundregeln](/lernen/mathe3/differentialrechnung/grundregeln-potenz-faktor-und-summenregel-und-die-wichtigsten-ableitungen) verwendest du sie
direkt, ohne h-Methode.

:::achtung[Erst einsetzen, dann ableiten]
Gesucht ist $f'(3)$ für $f(x) = x^2$. Jemand rechnet zuerst $f(3) = 9$ und leitet dann ab:
$$f'(3) = (9)' = 0 \qquad \text{(falsch).}$$
Die Zahl $9$ ist eine Konstante, und eine Konstante hat immer die Ableitung $0$. Damit hat man aber
die Steigung einer waagrechten Geraden berechnet, nicht die der Parabel. Richtig ist die umgekehrte
Reihenfolge: **zuerst ableiten, dann einsetzen**. $f'(x) = 2x$, also $f'(3) = 6$.
:::

```reflexion
frage: Bei der Herleitung von $(x^2)' = 2x$ behandeln wir $x$ wie eine feste Zahl und lassen nur $h$ gegen $0$ gehen. Warum darf man das, obwohl $x$ doch eine Variable ist?
antwort: |
  Für die h-Methode stellen wir uns vor, dass wir **eine** bestimmte Stelle $x$ festhalten, nur
  noch ohne sie zu nennen. An dieser festen Stelle ändert sich nur der Schritt $h$. Deshalb ist $x$
  während der ganzen Rechnung eine Konstante, und nur $h$ geht gegen $0$.

  Weil die Rechnung für jede feste Stelle gleich aussieht, gilt das Ergebnis $2x$ an jeder Stelle.
  Erst am Ende lesen wir $2x$ wieder als Funktion von $x$.
```

### Wo es keine Ableitung gibt

Nicht jede Funktion hat an jeder Stelle eine Ableitung. Die Ableitung existiert nur, wenn sich die
Sekantensteigungen von **beiden** Seiten **derselben endlichen Zahl** nähern. Das kann auf drei
typische Arten schiefgehen.

:::beispiel[Knick, Sprung und senkrechte Tangente in Zahlen]
**Knick:** Die Betragsfunktion $f(x) = |x|$ hat an der Stelle $0$ eine Ecke. Rechts von $0$ ist
$|x| = x$, links ist $|x| = -x$. Für $h = 0{,}1$ ist der Differenzenquotient
$\frac{|0{,}1| - 0}{0{,}1} = 1$. Für $h = -0{,}1$ ist er $\frac{|-0{,}1| - 0}{-0{,}1} = \frac{0{,}1}{-0{,}1} = -1$.
Von rechts ist jede Sekantensteigung $1$, von links jede $-1$. Es gibt keine gemeinsame Grenzlage.

**Sprung:** Die Funktion $g$ sei $g(x) = x$ für $x < 1$ und $g(x) = 2$ für $x \ge 1$. An der Stelle $1$
springt der Graph von der Höhe $1$ auf die Höhe $2$. Von links ($h < 0$) ist $g(1 + h) = 1 + h$ und
$g(1) = 2$. Für $h = -0{,}1$ ist der Differenzenquotient $\frac{0{,}9 - 2}{-0{,}1} = 11$, für $h = -0{,}01$
schon $\frac{0{,}99 - 2}{-0{,}01} = 101$. Die Sekanten werden beliebig steil.

**Senkrechte Tangente:** Für die Kubikwurzel $k(x) = \sqrt[3]{x}$ an der Stelle $0$ ist der
Differenzenquotient $\frac{\sqrt[3]{h}}{h}$. Für $h = 0{,}001$ ist das $\frac{0{,}1}{0{,}001} = 100$, für
$h = 0{,}000001$ schon $\frac{0{,}01}{0{,}000001} = 10\,000$. Die Werte wachsen über alle Grenzen.
:::

```plot
x: [-2, 2]
y: [-1.5, 2]
gleich: true
achsen: { x: "x", y: "y" }
graphen:
  - { f: "abs(x)", label: "|x|: Knick", farbe: 0 }
  - { f: "nthRoot(x, 3)", label: "∛x: senkrechte Tangente", farbe: 1 }
punkte:
  - { x: 0, y: 0, label: "keine Ableitung bei 0" }
beschriftung: Zwei Funktionen, die an der Stelle 0 stetig, aber nicht differenzierbar sind. Die Betragsfunktion hat dort einen Knick, die Kubikwurzel eine senkrechte Tangente.
```

Der Sprung zeigt einen allgemeinen Zusammenhang. Eine Funktion heißt an einer Stelle **stetig**, wenn
ihr Graph dort nicht abreißt (genau definiert in [Kapitel 12](/lernen/mathe3/grenzwerte-stetigkeit)).
Es gilt:

:::satz[Differenzierbar heißt auch stetig]
Ist $f$ an einer Stelle $x_0$ differenzierbar, dann ist $f$ an dieser Stelle auch stetig. Anders
gesagt: Wenn $f$ an einer Stelle nicht stetig ist, dann ist $f$ dort auch nicht differenzierbar.
:::

Der Beweis steht in [Kapitel 13](/lernen/mathe3/differenzierbarkeit). Die Umkehrung ist falsch. Das
Gegenbeispiel ist die Betragsfunktion: Sie ist bei $0$ stetig, denn ihr Graph reißt nicht ab, aber
sie hat dort einen Knick und keine Ableitung.

Für die Rechenpraxis in diesem Kapitel genügt eine Faustregel. Polynome, Exponentialfunktionen,
Logarithmen, Sinus und Kosinus sind überall differenzierbar, wo sie definiert sind. Das gilt auch für
alles, was man daraus durch Rechnen und Ineinander-Einsetzen baut. Vorsicht ist nur an zwei Arten von
Stellen nötig:

- An einer Wurzel, wo der Ausdruck unter der Wurzel null wird. Beispiel: $\sqrt x$ an der Stelle $0$.
- An einem Betrag, wo der Ausdruck im Betrag null wird. Beispiel: $|x - 3|$ an der Stelle $3$.

:::achtung[Tiefster Punkt heißt nicht Ableitung null]
Jemand argumentiert bei $f(x) = |x|$: „An der Stelle $0$ liegt der tiefste Punkt, dort ist die
Tangente waagrecht, also gilt $f'(0) = 0$.“ (falsch)

Eine waagrechte Tangente gibt es nur, wenn die Sekanten von beiden Seiten flach werden. Hier sind die
Sekantensteigungen aber $1$ von rechts und $-1$ von links, wie im Beispiel „Knick, Sprung und senkrechte Tangente in Zahlen“. Bei einem Knick gibt
es überhaupt keine Tangente. Richtig ist: $f'(0)$ existiert nicht.
:::

:::pruefung[„Was ist die Ableitung geometrisch?“]
Diese Frage kommt in der mündlichen Prüfung oft. Eine vollständige Antwort hat zwei Teile.

1. „Die Ableitung $f'(x_0)$ ist die **Steigung der Tangente** an den Graphen im Punkt $(x_0 \mid f(x_0))$.“
2. „Sie ist der **Grenzwert der Sekantensteigungen**: Man legt Sekanten durch diesen Punkt und einen
   zweiten Punkt, der immer näher rückt.“

Zeichne dazu eine Skizze mit einer Kurve, zwei Sekanten und der Tangente. Wer nur Teil 1 sagt, hört
meist die Nachfrage „Und was ist die Tangente?“.
:::

```aufgabe
id: dr-af-werte
titel: Werte der Ableitungsfunktion deuten
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Für $g(x) = x^2 - 6x$ ist die Ableitungsfunktion $g'(x) = 2x - 6$.

  a) Berechne die Steigung des Graphen an der Stelle $1$.

  b) An welcher Stelle hat der Graph eine waagrechte Tangente?

  c) Für welche $x$ steigt der Graph?
teile:
  - typ: zahl
    label: 'a) $g''(1)$'
    loesung: "2*1 - 6"
    anzeige: '-4'
    fehler:
      - wert: "-5"
        meldung: |
          $-5$ ist der Funktionswert $g(1) = 1 - 6$. Für die Steigung setzt du $1$ in die
          **Ableitungsfunktion** $g'(x) = 2x - 6$ ein.
  - typ: zahl
    label: 'b) Stelle mit waagrechter Tangente'
    loesung: "3"
    fehler:
      - wert: "6"
        meldung: |
          An der Stelle $6$ ist $g(6) = 0$, dort schneidet der Graph die $x$-Achse. Waagrechte Tangente
          heißt aber **Steigung** $0$, also $g'(x) = 0$.
  - typ: auswahl
    label: 'c) Der Graph steigt für'
    optionen: ['$x > 3$', '$x < 3$', '$x > 6$', '$0 < x < 6$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Für $x < 3$ ist $2x - 6$ negativ, dort fällt der Graph. Teste zum Beispiel $x = 0$.
      - wert: 3
        meldung: Zwischen $0$ und $6$ liegt der Graph **unter** der $x$-Achse. Ob er steigt, entscheidet aber das Vorzeichen von $g'$, nicht von $g$.
hinweise:
  - 'Steigung an einer Stelle: Stelle in $g''$ einsetzen. Waagrecht heißt Steigung $0$. Steigen heißt $g''(x) > 0$.'
loesung: |
  a) Wir setzen in die Ableitungsfunktion ein, weil sie die Steigung liefert: $g'(1) = 2 - 6 = -4$. Der Graph fällt dort.
  ---
  b) Waagrechte Tangente heißt Steigung $0$: $2x - 6 = 0$, also $x = 3$.
  ---
  c) Der Graph steigt, wo die Steigung positiv ist: $2x - 6 > 0$, also $x > 3$. Kontrolle: Bei $x = 4$ ist $g'(4) = 2 > 0$.
```

```aufgabe
id: dr-af-knick-sprung
titel: Wo hat der Graph keine Ableitung?
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Die Abbildung zeigt den Graphen einer Funktion $f$ auf $[-3, 3]$. An der Stelle $1$ springt der Graph.
  Der volle Punkt gehört zum Graphen, der leere nicht.
  An welchen der Stellen $-1$, $0$, $1$ und $2$ ist $f$ **nicht** differenzierbar?
plot:
  x: [-3, 3]
  y: [-0.5, 3]
  achsen: { x: "x", y: "y" }
  graphen:
    - { f: "abs(x + 1)", farbe: 0, von: -3, bis: 1 }
    - { f: "(x - 2)^2 + 0.5", farbe: 0, von: 1, bis: 3 }
  punkte:
    - { x: 1, y: 2, offen: true }
    - { x: 1, y: 1.5 }
    - { x: -1, y: 0, label: "x = −1" }
    - { x: 2, y: 0.5, label: "x = 2" }
teile:
  - typ: auswahl
    mehrfach: true
    optionen: ['an der Stelle $-1$', 'an der Stelle $0$', 'an der Stelle $1$', 'an der Stelle $2$']
    richtig: [0, 2]
    fehler:
      - wert: [0, 2, 3]
        meldung: |
          An der Stelle $2$ hat der Graph einen glatten Tiefpunkt mit **waagrechter** Tangente. Dort ist die
          Ableitung $0$, sie existiert also. „Ableitung $0$“ und „keine Ableitung“ sind verschiedene Dinge.
      - wert: [0]
        meldung: Der Knick bei $-1$ stimmt. Schau dir die Sprungstelle an. Wo der Graph abreißt, gibt es nie eine Ableitung.
      - wert: [2]
        meldung: Der Sprung bei $1$ stimmt. An welcher Stelle hat der Graph eine Ecke?
hinweise:
  - Suche Ecken (Knicke) und Stellen, an denen der Graph abreißt.
loesung: |
  Bei $x = -1$ hat der Graph eine Ecke. Die Sekantensteigungen sind von links $-1$ und von rechts $1$. Dort gibt es keine Ableitung.
  ---
  Bei $x = 1$ springt der Graph. Eine Funktion, die an einer Stelle nicht stetig ist, ist dort auch nicht differenzierbar.
  ---
  Bei $x = 0$ steigt der Graph glatt mit Steigung $1$, bei $x = 2$ liegt ein glatter Tiefpunkt mit Steigung $0$. Dort ist $f$ differenzierbar. Antwort: nicht differenzierbar nur an den Stellen $-1$ und $1$.
```

```aufgabe
id: dr-af-erst-ableiten
titel: Ein typischer Fehler beim Einsetzen
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Für $f(x) = x^2 + x$ liefert die h-Methode die Ableitungsfunktion $f'(x) = 2x + 1$.
  Ein Mitschüler soll $f'(2)$ berechnen und schreibt: „$f(2) = 4 + 2 = 6$, und die Ableitung von $6$ ist $0$. Also ist $f'(2) = 0$.“

  a) Was ist an seinem Vorgehen falsch?

  b) Wie groß ist $f'(2)$ wirklich?
teile:
  - typ: auswahl
    label: 'a) Der Fehler ist:'
    optionen:
      - 'Er hat $f(2)$ falsch berechnet.'
      - 'Er hat zuerst eingesetzt und dann abgeleitet. Die Zahl $6$ ist eine Konstante mit Ableitung $0$.'
      - 'Die Ableitung einer Konstanten ist nicht $0$.'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: '$f(2) = 4 + 2 = 6$ stimmt. Der Fehler liegt in der Reihenfolge der Schritte.'
      - wert: 2
        meldung: 'Eine Konstante hat tatsächlich die Ableitung $0$: Ihr Graph ist eine waagrechte Gerade. Der Fehler liegt woanders.'
  - typ: zahl
    label: 'b) $f''(2)$'
    loesung: "2*2 + 1"
    anzeige: '5'
    fehler:
      - wert: "6"
        meldung: '$6$ ist der Funktionswert $f(2)$. Setze $2$ in die Ableitungsfunktion $f''(x) = 2x + 1$ ein.'
hinweise:
  - Was beschreibt $f(2)$, was beschreibt $f'(2)$?
loesung: |
  a) $f(2) = 6$ ist eine Zahl, also eine Konstante. Ihre Ableitung ist $0$, aber das ist die Steigung einer waagrechten Geraden und hat mit der Parabel nichts zu tun.
  ---
  b) Richtig: zuerst ableiten, dann einsetzen. $f'(2) = 2\cdot 2 + 1 = 5$. Die Parabel steigt an der Stelle $2$ mit Steigung $5$.
```

```aufgabe
id: dr-ableitung-definition
titel: Ableitungsfunktion mit der h-Methode
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Bestimme mit der h-Methode die Ableitungsfunktion von $f(x) = 2x^2 + 5x$ und berechne damit $f'(-2)$.
teile:
  - typ: term
    label: '$f''(x)$'
    loesung: "4*x + 5"
    fehler:
      - wert: "4*x"
        meldung: |
          Der Summand $5x$ fehlt in deiner Ableitung. Im Zähler entsteht aus $5(x + h) - 5x$ der Term $5h$,
          und nach dem Kürzen durch $h$ bleibt $5$ übrig.
      - wert: "2*x + 5"
        meldung: |
          Prüfe das Ausmultiplizieren von $2(x + h)^2$. Das gemischte Glied ist $2\cdot 2xh = 4xh$, nicht $2xh$.
  - typ: zahl
    label: '$f''(-2)$'
    loesung: "4*(-2) + 5"
    anzeige: '-3'
    fehler:
      - wert: "-2"
        meldung: '$-2$ ist der Funktionswert $f(-2) = 8 - 10$. Gesucht ist die Steigung, also der Wert von $f''$.'
hinweise:
  - Berechne $f(x + h) = 2(x + h)^2 + 5(x + h)$ mit der ersten binomischen Formel.
  - Nach dem Abziehen von $f(x)$ muss jeder Summand im Zähler ein $h$ enthalten. Hebe $h$ heraus und kürze.
gefuehrt:
  - text: Welcher Term ist $f(x + h) - f(x)$ nach dem Ausmultiplizieren und Zusammenfassen?
    teil:
      typ: auswahl
      optionen: ['$4xh + 2h^2 + 5h$', '$2h^2 + 5h$', '$4xh + 2h^2 + 5x + 5h$', '$2xh + 2h^2 + 5h$']
      richtig: [0]
    erklaerung: $2(x^2 + 2xh + h^2) + 5x + 5h - 2x^2 - 5x = 4xh + 2h^2 + 5h$. Alle Summanden ohne $h$ heben sich weg.
  - text: Teile durch $h$. Welcher Term entsteht?
    teil:
      typ: auswahl
      optionen: ['$4x + 2h + 5$', '$4x + 2h^2 + 5$', '$4xh + 2h + 5$']
      richtig: [0]
    erklaerung: Jeder Summand verliert genau ein $h$. Aus $4xh$ wird $4x$, aus $2h^2$ wird $2h$, aus $5h$ wird $5$.
  - text: Lass $h$ gegen $0$ gehen. Wie lautet $f'(x)$?
    teil: { typ: term, loesung: "4*x + 5" }
    erklaerung: Nur der Summand $2h$ enthält noch $h$ und verschwindet. Also ist $f'(x) = 4x + 5$.
  - text: Setze $x = -2$ in die Ableitungsfunktion ein.
    teil: { typ: zahl, loesung: "-3" }
    erklaerung: $f'(-2) = -8 + 5 = -3$. Der Graph fällt an der Stelle $-2$.
loesung: |
  Ansatz: h-Methode mit allgemeinem $x$. Wir brauchen $f(x + h) = 2(x^2 + 2xh + h^2) + 5x + 5h = 2x^2 + 4xh + 2h^2 + 5x + 5h$.
  ---
  Differenz: $f(x + h) - f(x) = 4xh + 2h^2 + 5h$. Durch $h$ geteilt (erlaubt, weil $h \neq 0$): $4x + 2h + 5$.
  ---
  Für $h \to 0$ verschwindet $2h$: $f'(x) = 4x + 5$.
  ---
  Einsetzen: $f'(-2) = -8 + 5 = -3$. Probe mit einer kleinen Zahl: $\frac{f(-1{,}99) - f(-2)}{0{,}01} = \frac{-2{,}0298 - (-2)}{0{,}01} = -2{,}98$, also fast $-3$.
```

```aufgabe
id: dr-af-reziprok
titel: h-Methode mit Bruch und allgemeinem x
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Bestimme mit der h-Methode die Ableitungsfunktion von $f(x) = \dfrac{1}{x + 2}$ für $x > -2$ und berechne $f'(0)$.
teile:
  - typ: term
    label: '$f''(x)$'
    loesung: "-1/(x + 2)^2"
    bereich: [0, 3]
    fehler:
      - wert: "1/(x + 2)^2"
        meldung: |
          Das Vorzeichen fehlt. Im Zähler steht nach dem Zusammenfassen $(x + 2) - (x + h + 2) = -h$.
          Die Funktion fällt für $x > -2$, ihre Steigung ist also negativ.
      - wert: "-1/(x + 2)"
        meldung: |
          Im Nenner stehen zwei Faktoren: $(x + h + 2)(x + 2)$. Für $h \to 0$ werden **beide** zu $x + 2$, also $(x + 2)^2$.
  - typ: zahl
    label: '$f''(0)$'
    loesung: "-1/4"
    anzeige: '-\tfrac14'
    fehler:
      - wert: "1/2"
        meldung: '$\frac12$ ist der Funktionswert $f(0)$. Setze $0$ in die Ableitungsfunktion ein.'
hinweise:
  - Bring $\frac{1}{x + h + 2} - \frac{1}{x + 2}$ auf den gemeinsamen Nenner $(x + h + 2)(x + 2)$.
  - Durch $h$ teilen heißt mit $\frac1h$ multiplizieren. Dann kürzt sich das $h$ aus dem Zähler.
loesung: |
  Ansatz: h-Methode wie im Beispiel für $\frac1x$, nur mit $x + 2$ statt $x$. Zähler auf gemeinsamen Nenner:
  $$\frac{1}{x + h + 2} - \frac{1}{x + 2} = \frac{(x + 2) - (x + h + 2)}{(x + h + 2)(x + 2)} = \frac{-h}{(x + h + 2)(x + 2)}.$$
  ---
  Durch $h$ dividieren: $\dfrac{-1}{(x + h + 2)(x + 2)}$ für $h \neq 0$.
  ---
  Für $h \to 0$: $f'(x) = -\dfrac{1}{(x + 2)^2}$. Einsetzen: $f'(0) = -\dfrac14$.
  ---
  Plausibilität: Der Graph ist eine nach links verschobene Hyperbel. Sie fällt für $x > -2$, die Steigung ist also wie berechnet negativ.
```

```aufgabe
id: dr-af-sprung-zahlen
titel: Sekanten über einen Sprung
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: |
  Die Funktion $g$ ist gegeben durch $g(x) = 3$ für $x \ge 2$ und $g(x) = x$ für $x < 2$. An der Stelle $2$ springt der Graph.

  a) Berechne den Differenzenquotienten $\dfrac{g(2 + h) - g(2)}{h}$ für $h = -0{,}1$ und für $h = -0{,}01$.

  b) Was folgt daraus für die Ableitung an der Stelle $2$?
teile:
  - typ: zahl
    label: 'a) für $h = -0{,}1$'
    loesung: "(1.9 - 3)/(-0.1)"
    anzeige: '11'
    fehler:
      - wert: "(1.9 - 2)/(-0.1)"
        meldung: |
          Du hast $g(2) = 2$ verwendet. Für $x \ge 2$ gilt aber $g(x) = 3$, also ist $g(2) = 3$.
          Nur $g(1{,}9)$ wird mit der Vorschrift $g(x) = x$ berechnet.
  - typ: zahl
    label: 'a) für $h = -0{,}01$'
    loesung: "(1.99 - 3)/(-0.01)"
    anzeige: '101'
    fehler:
      - wert: "-101"
        meldung: Teile durch $h = -0{,}01$, also durch eine **negative** Zahl. Minus durch Minus ergibt Plus.
  - typ: auswahl
    label: 'b) Folgerung'
    optionen:
      - '$g''(2) = 1$, weil links vom Sprung die Steigung $1$ ist.'
      - 'Die Sekantensteigungen wachsen über alle Grenzen, deshalb existiert $g''(2)$ nicht.'
      - '$g''(2) = 0$, weil rechts vom Sprung die Steigung $0$ ist.'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Die Sekanten von links verbinden einen Punkt auf der unteren Geraden mit dem Punkt $(2 \mid 3)$ oben. Deshalb sind sie viel steiler als $1$, wie deine Zahlen zeigen.
      - wert: 2
        meldung: Für eine Ableitung müssen sich die Sekantensteigungen von **beiden** Seiten derselben Zahl nähern. Von links tun sie das nicht.
hinweise:
  - 'Es ist $g(2) = 3$ (die Vorschrift für $x \ge 2$). Für $h < 0$ ist $2 + h < 2$, also $g(2 + h) = 2 + h$.'
  - Setze die Zahlen in den Differenzenquotienten ein und achte auf das negative $h$.
loesung: |
  Ansatz: Wir berechnen Sekantensteigungen von links, denn dort liegt der untere Teil des Graphen. Es ist $g(2) = 3$.
  ---
  $h = -0{,}1$: $\dfrac{g(1{,}9) - 3}{-0{,}1} = \dfrac{1{,}9 - 3}{-0{,}1} = \dfrac{-1{,}1}{-0{,}1} = 11$. Und $h = -0{,}01$: $\dfrac{1{,}99 - 3}{-0{,}01} = 101$.
  ---
  Mit kleinerem $h$ werden die Sekanten immer steiler. Für $h = -0{,}001$ ergibt sich schon $1001$. Es gibt keinen Grenzwert, also existiert $g'(2)$ nicht. Das passt zum Satz: Wo $g$ nicht stetig ist, ist $g$ auch nicht differenzierbar.
```

```aufgabe
id: dr-af-betrag-begruenden
titel: Stetig, aber nicht differenzierbar
niveau: 2
lernziel: 1
kompetenz: begruenden
angabe: |
  Begründe mit Sekantensteigungen, warum $f(x) = |x - 3|$ an der Stelle $3$ nicht differenzierbar ist, obwohl der Graph dort nicht abreißt.
  Was zeigt dieses Beispiel über den Zusammenhang zwischen „stetig“ und „differenzierbar“?
teile:
  - typ: text
    muster: |
      Für $h > 0$ ist $f(3 + h) = |h| = h$ und $f(3) = 0$, die Sekantensteigung ist also $\frac{h}{h} = 1$.
      Für $h < 0$ ist $f(3 + h) = |h| = -h$, die Sekantensteigung ist $\frac{-h}{h} = -1$. Von rechts
      nähern sich die Steigungen also $1$, von links $-1$. Weil das verschiedene Zahlen sind, gibt es keinen
      gemeinsamen Grenzwert und keine Ableitung. Der Graph hat dort einen Knick.

      Trotzdem ist $f$ bei $3$ stetig. Das Beispiel zeigt: Aus „stetig“ folgt **nicht** „differenzierbar“.
      Nur umgekehrt gilt: Wer differenzierbar ist, ist auch stetig.
hinweise:
  - Unterscheide $h > 0$ und $h < 0$. Was ist jeweils $|h|$?
  - Für eine Ableitung müssen die Sekantensteigungen von beiden Seiten gegen dieselbe Zahl gehen.
loesung: |
  Ansatz: Differenzenquotient an der Stelle $3$. Es ist $f(3) = 0$ und $f(3 + h) = |h|$, also $\dfrac{|h|}{h}$.
  ---
  Für $h > 0$ ist $|h| = h$ und der Quotient $1$. Für $h < 0$ ist $|h| = -h$ und der Quotient $-1$. Die beiden Seiten liefern verschiedene Werte, also gibt es keinen Grenzwert.
  ---
  Ergebnis: $f$ ist bei $3$ stetig (kein Abreißen), aber nicht differenzierbar (Knick). „Stetig“ reicht also nicht für „differenzierbar“. Umgekehrt gilt der Satz: Differenzierbar heißt immer auch stetig.
```

```aufgabe
id: dr-af-wurzel-allgemein
titel: Ableitungsfunktion einer Wurzel
niveau: 3
lernziel: 1
kompetenz: rechnen
angabe: |
  Bestimme mit der h-Methode die Ableitungsfunktion von $f(x) = \sqrt{x + 1}$ für $x > -1$ und berechne $f'(3)$.
teile:
  - typ: term
    label: '$f''(x)$'
    loesung: "1/(2*sqrt(x + 1))"
    bereich: [0, 4]
    fehler:
      - wert: "1/sqrt(x + 1)"
        meldung: |
          Der Faktor $2$ im Nenner fehlt. Nach dem Erweitern steht im Nenner $\sqrt{x + h + 1} + \sqrt{x + 1}$.
          Für $h \to 0$ sind das **zwei** gleiche Wurzeln, also $2\sqrt{x + 1}$.
  - typ: zahl
    label: '$f''(3)$'
    loesung: "1/(2*sqrt(4))"
    anzeige: '\tfrac14'
    fehler:
      - wert: "1/2"
        meldung: 'Auch hier fehlt der Faktor $2$ im Nenner: $f''(3) = \frac{1}{2\sqrt 4}$.'
hinweise:
  - Direktes Kürzen geht nicht, weil $h$ unter der Wurzel steckt.
  - Erweitere mit $\sqrt{x + h + 1} + \sqrt{x + 1}$ und verwende im Zähler die dritte binomische Formel $(a - b)(a + b) = a^2 - b^2$.
loesung: |
  Ansatz: $\dfrac{\sqrt{x + h + 1} - \sqrt{x + 1}}{h}$. Wir erweitern mit der Gegenwurzel $\sqrt{x + h + 1} + \sqrt{x + 1}$, damit die Wurzeln im Zähler verschwinden.
  ---
  Dritte binomische Formel im Zähler: $(x + h + 1) - (x + 1) = h$. Also
  $$\frac{h}{h\,\big(\sqrt{x + h + 1} + \sqrt{x + 1}\big)} = \frac{1}{\sqrt{x + h + 1} + \sqrt{x + 1}}.$$
  ---
  Für $h \to 0$ wird der Nenner zu $2\sqrt{x + 1}$. Also ist $f'(x) = \dfrac{1}{2\sqrt{x + 1}}$.
  ---
  Einsetzen: $f'(3) = \dfrac{1}{2\sqrt 4} = \dfrac14$. Probe mit $h = 0{,}01$: $\dfrac{\sqrt{4{,}01} - 2}{0{,}01} \approx 0{,}2498$.
```

## Graphisch differenzieren: vom Graphen von f zum Graphen von f′ und zurück

```aufgabe
id: dr-check-steigen-vorzeichen
titel: Steigen und Vorzeichen der Steigung
niveau: 1
art: check
angabe: |
  Der Graph einer Funktion $f$ steigt auf dem ganzen Intervall $[1, 3]$. Was gilt dann für die Steigungen der Tangenten in diesem Intervall?
  (Herkunft: [9.2 Von der Sekante zur Tangente](/lernen/mathe3/differentialrechnung/von-der-sekante-zur-tangente-die-ableitung-an-einer-stelle) und [Kapitel 4, „Eigenschaften von Funktionen“](/lernen/mathe3/funktionen))
teile:
  - typ: auswahl
    optionen: ['Sie sind positiv oder null.', 'Sie sind negativ.', 'Sie sind alle gleich groß.']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Eine negative Steigung heißt, dass der Graph nach rechts **fällt**.
      - wert: 2
        meldung: Gleiche Steigungen überall hätte nur eine Gerade. Ein Graph kann steigen und dabei mal steiler, mal flacher werden.
loesung: |
  Steigt der Graph, zeigen die Tangenten nach rechts oben. Ihre Steigungen sind positiv.
  ---
  An einzelnen Stellen kann die Tangente kurz waagrecht sein (Steigung $0$), wie bei $x^3$ an der Stelle $0$.
```

In der Prüfung ist oft nur ein **Graph** gegeben, keine Formel. Trotzdem kann man viel über die
Ableitung sagen, und umgekehrt aus dem Graphen der Ableitung viel über die Funktion selbst. Dieses
Lesen ohne Rechnen heißt **graphisches Differenzieren**. Es beruht auf einer einzigen Idee: Der
Wert $f'(x)$ ist die Steigung von $f$ an der Stelle $x$. Wer sich die Tangente vorstellt, kennt das
Vorzeichen und ungefähr die Größe von $f'(x)$.

### Von f zu f′: vier Ableseregeln

:::merke[Was man am Graphen von f über f′ abliest]
1. Wo $f$ **steigt**, ist $f'(x) > 0$. Der Graph von $f'$ liegt dort **über** der $x$-Achse.
2. Wo $f$ **fällt**, ist $f'(x) < 0$. Der Graph von $f'$ liegt dort **unter** der $x$-Achse.
3. Wo $f$ eine **waagrechte Tangente** hat (Hochpunkt, Tiefpunkt oder Sattelpunkt), ist $f'(x) = 0$.
   Dort hat $f'$ eine **Nullstelle**.
4. Wo $f$ **am steilsten** steigt oder fällt, hat $f'$ einen **Hoch- oder Tiefpunkt**. Diese Stellen
   heißen **Wendestellen** von $f$ (genauer in [9.12 Krümmung und Wendepunkte](/lernen/mathe3/differentialrechnung/kruemmung-und-wendepunkte)).
:::

Eine fünfte Beobachtung ist genauso wichtig. Die **Höhe** des Graphen von $f$ spielt für $f'$ keine
Rolle. Verschiebt man den Graphen von $f$ um $5$ nach oben, bleiben alle Steigungen gleich, also
auch $f'$.

:::beispiel[Eine Funktion dritten Grades und ihre Ableitung]
Die Abbildung zeigt $f(x) = x^3 - 3x$ (blau) und ihre Ableitung $f'(x) = 3x^2 - 3$ (orange). Wir
prüfen die Ableseregeln Stelle für Stelle.

- Für $x < -1$ steigt $f$. Tatsächlich ist $f'$ dort positiv, zum Beispiel $f'(-2) = 12 - 3 = 9$.
- Bei $x = -1$ hat $f$ einen Hochpunkt mit waagrechter Tangente. Dort ist $f'(-1) = 3 - 3 = 0$.
- Zwischen $-1$ und $1$ fällt $f$. Dort ist $f'$ negativ, zum Beispiel $f'(0) = -3$.
- Bei $x = 0$ fällt $f$ am steilsten. Dort hat $f'$ seinen tiefsten Punkt, nämlich $-3$.
- Bei $x = 1$ hat $f$ einen Tiefpunkt, und $f'(1) = 0$. Rechts davon steigt $f$ wieder, und $f' > 0$.
:::

```plot
x: [-2.5, 2.5]
y: [-4, 8]
achsen: { x: "x", y: "y" }
graphen:
  - { f: "x^3 - 3*x", label: "f(x) = x³ − 3x", farbe: 0 }
  - { f: "3*x^2 - 3", label: "f'(x) = 3x² − 3", farbe: 1 }
punkte:
  - { x: -1, y: 2, label: "Hochpunkt" }
  - { x: 1, y: -2, label: "Tiefpunkt" }
  - { x: -1, y: 0, farbe: 1 }
  - { x: 1, y: 0, farbe: 1 }
  - { x: 0, y: -3, label: "f' am kleinsten", farbe: 1 }
strecken:
  - { von: [-1, -4], nach: [-1, 8], gestrichelt: true }
  - { von: [1, -4], nach: [1, 8], gestrichelt: true }
beschriftung: Die Funktion f(x) = x³ − 3x und ihre Ableitung. An den Stellen −1 und 1 hat f waagrechte Tangenten, dort hat f' Nullstellen. Zwischen −1 und 1 fällt f, dort liegt f' unter der x-Achse. Bei 0 fällt f am steilsten, dort hat f' seinen Tiefpunkt.
```

:::beispiel[Den Graphen von f′ skizzieren, ohne eine Formel zu kennen]
Gegeben ist nur der blaue Graph von $f$ in der Abbildung darunter. So skizzierst du $f'$ in vier Schritten.

1. **Waagrechte Tangenten suchen.** $f$ hat einen Tiefpunkt bei $x = -1$ und einen Hochpunkt bei
   $x = 3$. Dort zeichnest du Nullstellen von $f'$ ein.
2. **Vorzeichen eintragen.** Links von $-1$ fällt $f$, also liegt $f'$ unter der Achse. Zwischen
   $-1$ und $3$ steigt $f$, also liegt $f'$ darüber. Rechts von $3$ fällt $f$ wieder, also liegt $f'$ darunter.
3. **Steilste Stelle suchen.** Zwischen den beiden Extrempunkten steigt $f$ bei etwa $x = 1$ am
   steilsten. Dort hat $f'$ seinen Hochpunkt.
4. **Größe abschätzen.** Ein Steigungsdreieck an der Stelle $1$ zeigt: Geht man $1$ nach rechts,
   steigt $f$ um etwa $4$. Der Hochpunkt von $f'$ liegt also bei etwa $(1 \mid 4)$.

Verbinde die Punkte zu einer glatten Kurve. Es entsteht eine nach unten geöffnete Parabel. Zur
Kontrolle: Hier war $f(x) = -\frac13 x^3 + x^2 + 3x$, und die Rechnung ergibt $f'(x) = -x^2 + 2x + 3$
mit $f'(1) = 4$.
:::

```plot
x: [-2.5, 4.5]
y: [-9, 10]
achsen: { x: "x", y: "y" }
graphen:
  - { f: "-x^3/3 + x^2 + 3*x", label: "f (gegeben)", farbe: 0 }
  - { f: "-x^2 + 2*x + 3", label: "f' (skizziert)", farbe: 1, gestrichelt: true }
punkte:
  - { x: -1, y: "-5/3", label: "Tiefpunkt" }
  - { x: 3, y: 9, label: "Hochpunkt" }
  - { x: -1, y: 0, farbe: 1 }
  - { x: 3, y: 0, farbe: 1 }
  - { x: 1, y: 4, label: "(1|4)", farbe: 1 }
beschriftung: Ein Graph von f mit Tiefpunkt bei x = −1 und Hochpunkt bei x = 3. Der gestrichelte Graph von f' hat genau dort seine Nullstellen, liegt zwischen −1 und 3 über der x-Achse und hat bei x = 1 seinen Hochpunkt, weil f dort am steilsten steigt.
```

:::achtung[Nullstelle von f mit Nullstelle von f′ verwechselt]
Betrachte den Graphen aus dem Beispiel „Den Graphen von f′ skizzieren“. Jemand schreibt: „$f$ schneidet die $x$-Achse bei $x = 0$, also hat $f'$ bei $0$
eine Nullstelle.“ (falsch)

An der Stelle $0$ ist $f(0) = 0$, der Graph ist also auf **Höhe** null. Seine **Steigung** ist dort
aber $f'(0) = 3$, denn $f$ steigt kräftig. Die Höhe von $f$ und die Steigung von $f$ sind
verschiedene Dinge. Nullstellen von $f'$ liegen dort, wo $f$ waagrecht verläuft, nicht dort, wo $f$
die Achse schneidet.
:::

### Von f′ zurück zu f

Oft ist umgekehrt nur der Graph von $f'$ gegeben, zum Beispiel eine gemessene Zuflussrate. Dann
liest du die Regeln rückwärts. Am wichtigsten ist der **Vorzeichenwechsel**: Ein Graph wechselt das
Vorzeichen an einer Nullstelle, wenn er dort die $x$-Achse **durchquert**. Berührt er die Achse nur,
gibt es keinen Vorzeichenwechsel.

:::merke[Was man am Graphen von f′ über f abliest]
1. Wo $f'$ **über** der $x$-Achse liegt, **steigt** $f$. Wo $f'$ **unter** der Achse liegt, **fällt** $f$.
2. Wechselt $f'$ an einer Nullstelle von $+$ nach $-$, hat $f$ dort einen **Hochpunkt**.
3. Wechselt $f'$ an einer Nullstelle von $-$ nach $+$, hat $f$ dort einen **Tiefpunkt**.
4. Berührt $f'$ die Achse nur (kein Vorzeichenwechsel), hat $f$ dort einen **Sattelpunkt**, also eine
   waagrechte Tangente ohne Extremum.
5. Wo $f'$ einen Hoch- oder Tiefpunkt hat, hat $f$ eine **Wendestelle**.
6. Wie **hoch** der Graph von $f$ liegt, verrät $f'$ nicht. Dafür braucht man einen Funktionswert.
:::

:::beispiel[Vom Graphen von f′ auf Extrem- und Wendestellen von f schließen]
Die Abbildung zeigt den Graphen von $f'(x) = (x + 2)(x - 1)^2$. Wir lesen ab.

- **Nullstellen von $f'$:** bei $x = -2$ und bei $x = 1$.
- **Bei $x = -2$** durchquert $f'$ die Achse von unten nach oben, also von $-$ nach $+$. Dort hat
  $f$ einen **Tiefpunkt**.
- **Bei $x = 1$** berührt $f'$ die Achse nur und bleibt positiv. Dort hat $f$ einen **Sattelpunkt**:
  Der Graph wird kurz waagrecht und steigt dann weiter.
- **Monotonie:** Für $x < -2$ fällt $f$. Für $x > -2$ steigt $f$, abgesehen von der einen waagrechten
  Stelle bei $1$.
- **Extrempunkte von $f'$:** ein Hochpunkt bei $x = -1$ und ein Tiefpunkt bei $x = 1$. Also hat $f$
  Wendestellen bei $-1$ und bei $1$. Bei $x = -1$ steigt $f$ am steilsten, mit Steigung $f'(-1) = 1\cdot 4 = 4$.

**Ein Nichtbeispiel zur Warnung:** Der Hochpunkt von $f'$ bei $-1$ ist **kein** Hochpunkt von $f$.
Dort steigt $f$ sogar am stärksten.
:::

```plot
x: [-2.6, 2]
y: [-8, 5]
achsen: { x: "x", y: "f'(x)" }
graphen:
  - { f: "(x + 2)*(x - 1)^2", label: "f'(x) = (x + 2)(x − 1)²", farbe: 1 }
punkte:
  - { x: -2, y: 0, label: "− nach +: Tiefpunkt von f" }
  - { x: 1, y: 0, label: "Berührung: Sattelpunkt von f" }
  - { x: -1, y: 4, label: "Hochpunkt von f': Wendestelle von f", farbe: 2 }
beschriftung: Der Graph der Ableitung f'(x) = (x + 2)(x − 1)². Er durchquert die x-Achse bei −2 von unten nach oben und berührt sie bei 1 nur. Sein Hochpunkt bei −1 und sein Tiefpunkt bei 1 sind die Wendestellen von f.
```

:::achtung[„f′ fällt, also fällt f“]
Für $f'(x) = 4 - x$ auf $[0, 3]$ schreibt jemand: „Der Graph von $f'$ fällt, also fällt auch $f$.“ (falsch)

Der Graph von $f'$ fällt zwar von $f'(0) = 4$ auf $f'(3) = 1$. Alle diese Werte sind aber
**positiv**. Also steigt $f$ auf dem ganzen Intervall, nur immer langsamer. Ob $f$ steigt oder fällt,
entscheidet allein das **Vorzeichen** von $f'$, nicht die Richtung, in die der Graph von $f'$ läuft.
:::

```reflexion
frage: Warum kann man aus dem Graphen von $f'$ nicht ablesen, wie hoch der Graph von $f$ liegt?
antwort: |
  Weil eine Verschiebung nach oben oder unten keine einzige Steigung ändert. Die Funktionen
  $f(x)$ und $f(x) + 5$ haben an jeder Stelle dieselbe Tangentensteigung, also dieselbe Ableitung.

  Der Graph von $f'$ legt deshalb nur die **Form** von $f$ fest: wo $f$ steigt, fällt, Extrema und
  Wendestellen hat. Die **Lage** in $y$-Richtung bestimmt erst ein bekannter Punkt, zum Beispiel
  $f(0) = 2$. Diese Idee kehrt in [Kapitel 10](/lernen/mathe3/integralrechnung) wieder: Stammfunktionen
  unterscheiden sich um eine Konstante.
```

```aufgabe
id: dr-graph-ablesen
titel: Aussagen über die Ableitung am Graphen prüfen
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Die Abbildung zeigt den Graphen von $f(x) = -x^3 + 3x^2$. Welche Aussagen sind richtig?
plot:
  x: [-1.2, 3.3]
  y: [-4, 7]
  graphen:
    - { f: "-x^3 + 3*x^2", farbe: 0 }
  punkte:
    - { x: 0, y: 0, label: "(0|0)" }
    - { x: 2, y: 4, label: "(2|4)" }
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$f''(1) > 0$'
      - '$f''(0) = 0$'
      - '$f''(3) > 0$'
      - '$f''(-1) < 0$'
      - '$f''(x) < 0$ für alle $x$ zwischen $0$ und $2$'
    richtig: [0, 1, 3]
    fehler:
      - wert: [0, 1, 2, 3]
        meldung: |
          Bei $x = 3$ liegt der Graph auf der $x$-Achse, also $f(3) = 0$. Er **fällt** dort aber steil. Für das
          Vorzeichen von $f'$ zählt die Richtung, nicht die Höhe.
      - wert: [1, 3, 4]
        meldung: |
          Zwischen dem Tiefpunkt bei $0$ und dem Hochpunkt bei $2$ **steigt** der Graph. Dort ist $f'$ positiv.
hinweise:
  - Stell dir an jeder Stelle die Tangente vor. Zeigt sie nach rechts oben, rechts unten, oder ist sie waagrecht?
loesung: |
  Ansatz: Das Vorzeichen von $f'$ ist das Vorzeichen der Tangentensteigung. Zwischen $0$ und $2$ steigt der Graph, also ist $f'(1) > 0$. Aussage 1 ist richtig, Aussage 5 falsch.
  ---
  Bei $0$ liegt ein Tiefpunkt mit waagrechter Tangente: $f'(0) = 0$, richtig. Bei $3$ und bei $-1$ fällt der Graph: $f'(3) < 0$ und $f'(-1) < 0$. Aussage 3 ist falsch, Aussage 4 richtig.
  ---
  Kontrolle mit der Rechnung aus [9.5 Grundregeln](/lernen/mathe3/differentialrechnung/grundregeln-potenz-faktor-und-summenregel-und-die-wichtigsten-ableitungen): $f'(x) = -3x^2 + 6x$ ergibt $f'(1) = 3$, $f'(0) = 0$, $f'(3) = -9$ und $f'(-1) = -9$.
```

```aufgabe
id: dr-graph-punkte
titel: Steigung an markierten Punkten
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Auf dem Graphen der Funktion $f$ sind fünf Punkte markiert, an den Stellen $0, 1, 2, 3, 4$.

  a) An welchen Stellen ist $f'(x) = 0$?

  b) An welcher Stelle ist $f'$ negativ?
plot:
  x: [-0.5, 4.5]
  y: [-3, 9]
  graphen:
    - { f: "x^3 - 6*x^2 + 9*x + 1", farbe: 0, von: -0.3, bis: 4.3 }
  punkte:
    - { x: 0, y: 1, label: "A" }
    - { x: 1, y: 5, label: "B" }
    - { x: 2, y: 3, label: "C" }
    - { x: 3, y: 1, label: "D" }
    - { x: 4, y: 5, label: "E" }
teile:
  - typ: menge
    label: 'a) Stellen mit $f''(x) = 0$'
    loesung: ["1", "3"]
    fehler:
      - wert: ["1", "4"]
        meldung: |
          Bei $4$ liegt der Punkt E zwar genauso hoch wie B. Dort steigt der Graph aber steil. Gesucht sind
          Stellen mit **waagrechter** Tangente.
  - typ: zahl
    label: 'b) Stelle mit $f''(x) < 0$'
    loesung: "2"
    fehler:
      - wert: "3"
        meldung: Bei D ist die Tangente waagrecht, dort ist $f'(3) = 0$, nicht negativ. Wo **fällt** der Graph?
      - wert: "0"
        meldung: Bei A liegt der Graph tief, aber er steigt dort. Das Vorzeichen von $f'$ hängt von der Richtung ab, nicht von der Höhe.
hinweise:
  - Waagrechte Tangenten gibt es an Hoch- und Tiefpunkten.
loesung: |
  Ansatz: Für jeden Punkt die Tangente gedanklich einzeichnen.
  ---
  a) B ist ein Hochpunkt, D ein Tiefpunkt. Dort ist die Tangente waagrecht, also $f'(1) = f'(3) = 0$.
  ---
  b) Zwischen B und D fällt der Graph, also ist $f'(2) < 0$. An A und E steigt der Graph. Kontrolle: Für diese Funktion ist $f'(x) = 3x^2 - 12x + 9$ mit $f'(2) = -3$.
```

```aufgabe
id: dr-graph-verschoben
titel: Verschobener Graph, gleiche Ableitung
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Die Funktion $g$ entsteht aus $f$, indem man den Graphen um $5$ Einheiten nach oben verschiebt, also $g(x) = f(x) + 5$.
  Es ist $f'(2) = -3$. Wie groß ist $g'(2)$?
teile:
  - typ: zahl
    label: '$g''(2)$'
    loesung: "-3"
    fehler:
      - wert: "2"
        meldung: |
          Du hast die $5$ zur Steigung addiert. Beim Verschieben nach oben ändert sich nur die **Höhe** jedes Punkts,
          nicht die Richtung der Tangente.
hinweise:
  - Zeichne eine Kurve und dieselbe Kurve fünf Kästchen höher. Sind die Tangenten gleich steil?
loesung: |
  Beim Verschieben nach oben wird jeder Punkt um $5$ angehoben, auch die Nachbarpunkte. Die Steigungsdreiecke bleiben gleich.
  ---
  Also hat $g$ an jeder Stelle dieselbe Steigung wie $f$: $g'(2) = f'(2) = -3$. Rechnerisch: Die Konstante $5$ hat die Ableitung $0$.
```

```aufgabe
id: dr-graphisch-skizze
titel: Aus einer Beschreibung von f auf f′ schließen
niveau: 2
lernziel: 2
kompetenz: begruenden
angabe: |
  Eine Funktion $f$ ist auf ganz $\R$ differenzierbar. Sie fällt bis $x = -2$, hat dort einen Tiefpunkt, steigt bis $x = 3$,
  hat dort einen Hochpunkt und fällt danach wieder. Am steilsten steigt sie bei $x = 0{,}5$.

  a) Welcher der Terme kann die Ableitung $f'$ sein?

  b) Beschreibe den Graphen von $f'$ in Worten: Nullstellen, Vorzeichen, Extremum.
teile:
  - typ: auswahl
    label: 'a) mögliche Ableitung'
    optionen:
      - '$f''(x) = -(x + 2)(x - 3)$'
      - '$f''(x) = (x + 2)(x - 3)$'
      - '$f''(x) = -(x - 2)(x + 3)$'
      - '$f''(x) = (x + 2)(x - 3)^2$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Dieser Term ist zwischen $-2$ und $3$ **negativ** (teste $x = 0$). Dort soll $f$ aber steigen, also $f'$ positiv sein.
      - wert: 2
        meldung: Die Nullstellen dieses Terms liegen bei $2$ und $-3$. Die waagrechten Tangenten von $f$ liegen aber bei $-2$ und $3$.
      - wert: 3
        meldung: Bei $x = 3$ hätte dieser Term eine doppelte Nullstelle ohne Vorzeichenwechsel. Dann wäre bei $3$ ein Sattelpunkt, kein Hochpunkt.
  - typ: text
    label: 'b) Beschreibung von $f''$'
    muster: |
      $f'$ hat Nullstellen bei $x = -2$ und $x = 3$. Für $x < -2$ und für $x > 3$ ist $f' < 0$, zwischen
      $-2$ und $3$ ist $f' > 0$. Bei $x = 0{,}5$ hat $f'$ einen Hochpunkt, weil $f$ dort am steilsten steigt.
      Der Graph von $f'$ sieht also aus wie eine nach unten geöffnete Parabel mit Scheitel bei $x = 0{,}5$.
hinweise:
  - Waagrechte Tangente bei $f$ heißt Nullstelle bei $f'$. Steigt $f$, liegt $f'$ über der Achse.
  - Prüfe bei jedem Term das Vorzeichen an der Teststelle $x = 0$ und die Lage der Nullstellen.
loesung: |
  Ansatz: Die Beschreibung von $f$ wird mit den Ableseregeln in Eigenschaften von $f'$ übersetzt.
  ---
  Tiefpunkt bei $-2$ und Hochpunkt bei $3$: $f'$ hat dort Nullstellen. $f$ steigt dazwischen, also $f' > 0$ auf $(-2, 3)$, und $f' < 0$ außerhalb.
  ---
  Steilste Stelle bei $0{,}5$: Dort hat $f'$ sein Maximum. Das passt genau zu $-(x + 2)(x - 3)$: Nullstellen $-2$ und $3$, bei $x = 0$ der Wert $6 > 0$, und der Scheitel liegt in der Mitte der Nullstellen, bei $\frac{-2 + 3}{2} = 0{,}5$.
```

```aufgabe
id: dr-graph-welcher-graph
titel: Welcher Graph gehört zur Ableitung?
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  Die Abbildung zeigt den Graphen von $f$ (blau) und drei weitere Graphen A, B und C. Welcher davon ist der Graph von $f'$?
plot:
  x: [-2.5, 2.5]
  y: [-3, 5]
  graphen:
    - { f: "x^3/3 - x", label: "f", farbe: 0 }
    - { f: "x^2 - 1", label: "A", farbe: 1 }
    - { f: "1 - x^2", label: "B", farbe: 2 }
    - { f: "2*x", label: "C", farbe: 3 }
teile:
  - typ: auswahl
    optionen: ['A', 'B', 'C']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          B hat zwar die richtigen Nullstellen bei $-1$ und $1$. Aber zwischen $-1$ und $1$ liegt B über der Achse,
          obwohl $f$ dort **fällt**. Das Vorzeichen stimmt also nicht.
      - wert: 2
        meldung: |
          C hat nur eine Nullstelle bei $0$. Der Graph von $f$ hat aber **zwei** waagrechte Tangenten, bei $-1$ und bei $1$.
          C ist übrigens die Ableitung von A, also die Ableitung der Ableitung von $f$.
hinweise:
  - Wo hat $f$ waagrechte Tangenten? Dort muss der gesuchte Graph die $x$-Achse schneiden.
  - Wo fällt $f$? Dort muss der gesuchte Graph unter der Achse liegen.
loesung: |
  Ansatz: Wir prüfen die Ableseregeln. $f$ hat einen Hochpunkt bei $-1$ und einen Tiefpunkt bei $1$. Der Graph von $f'$ braucht also Nullstellen bei $-1$ und $1$. Das erfüllen A und B, aber nicht C.
  ---
  Zwischen $-1$ und $1$ fällt $f$, dort muss $f'$ negativ sein. A liegt dort unter der Achse, B darüber.
  ---
  Also ist A der Graph von $f'$. Kontrolle: $f(x) = \frac{x^3}{3} - x$ hat $f'(x) = x^2 - 1$, und das ist A.
```

```aufgabe
id: dr-fstrich-zu-f
titel: Aus dem Graphen von f′ Extrem- und Wendestellen bestimmen
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  Die Abbildung zeigt den Graphen der **Ableitung** $f'$ einer Funktion $f$. Lies ab:

  a) Stelle des Hochpunkts von $f$,

  b) Stelle des Tiefpunkts von $f$,

  c) Wendestelle von $f$.
plot:
  x: [-2, 4]
  y: [-3, 3]
  achsen: { x: "x", y: "f'(x)" }
  graphen:
    - { f: "-0.5*x^2 + x + 1.5", farbe: 1 }
  punkte:
    - { x: -1, y: 0 }
    - { x: 3, y: 0 }
    - { x: 1, y: 2 }
teile:
  - typ: zahl
    label: 'a) Hochpunkt von $f$ bei $x = $'
    loesung: "3"
    fehler:
      - wert: "1"
        meldung: |
          Bei $x = 1$ hat der Graph von $f'$ seinen Hochpunkt. Das ist aber eine **Wendestelle** von $f$: Dort steigt
          $f$ am steilsten. Ein Hochpunkt von $f$ liegt dort, wo $f'$ von $+$ nach $-$ wechselt.
      - wert: "-1"
        meldung: Bei $x = -1$ wechselt $f'$ von $-$ nach $+$. Vorher fällt $f$, danach steigt $f$. Was liegt dort also?
  - typ: zahl
    label: 'b) Tiefpunkt von $f$ bei $x = $'
    loesung: "-1"
    fehler:
      - wert: "3"
        meldung: Rechts von $3$ ist $f'$ negativ, $f$ fällt also danach. Ein Tiefpunkt braucht den Wechsel von $-$ nach $+$.
  - typ: zahl
    label: 'c) Wendestelle von $f$ bei $x = $'
    loesung: "1"
    fehler:
      - wert: "-1"
        meldung: Nullstellen von $f'$ sind Kandidaten für **Extremstellen** von $f$. Wendestellen von $f$ liegen dort, wo $f'$ ein Extremum hat.
hinweise:
  - Bestimme zuerst die Nullstellen von $f'$ und das Vorzeichen von $f'$ links und rechts davon.
  - Eine Wendestelle von $f$ ist eine Stelle, an der $f'$ einen Hoch- oder Tiefpunkt hat.
gefuehrt:
  - text: Wo hat der Graph von $f'$ Nullstellen? Gib beide Stellen getrennt durch Strichpunkt an.
    teil: { typ: menge, loesung: ["-1", "3"] }
    erklaerung: Der Graph schneidet die $x$-Achse bei $-1$ und bei $3$. Nur dort kann $f$ eine waagrechte Tangente haben.
  - text: An welcher der beiden Stellen wechselt $f'$ von $+$ nach $-$?
    teil: { typ: zahl, loesung: "3" }
    erklaerung: Links von $3$ liegt der Graph über der Achse, rechts darunter. Also steigt $f$ bis $3$ und fällt danach. Bei $3$ hat $f$ einen Hochpunkt.
  - text: Was liegt dann bei $x = -1$ vor? Denk nach, bevor du weitergehst.
    erklaerung: Bei $-1$ wechselt $f'$ von $-$ nach $+$. Also fällt $f$ zuerst und steigt danach. Das ist ein Tiefpunkt.
  - text: Wo hat der Graph von $f'$ seinen Hochpunkt?
    teil: { typ: zahl, loesung: "1" }
    erklaerung: Bei $x = 1$ ist $f'$ am größten, also steigt $f$ dort am steilsten. Das ist die Wendestelle von $f$.
loesung: |
  Ansatz: Nullstellen von $f'$ mit Vorzeichenwechsel sind Extremstellen von $f$. Extremstellen von $f'$ sind Wendestellen von $f$.
  ---
  Nullstellen von $f'$: $-1$ und $3$. Bei $3$ wechselt $f'$ von $+$ nach $-$, also Hochpunkt von $f$. Bei $-1$ wechselt $f'$ von $-$ nach $+$, also Tiefpunkt von $f$.
  ---
  Der Graph von $f'$ hat bei $x = 1$ seinen Hochpunkt. Also hat $f$ bei $1$ eine Wendestelle. Kontrolle: Der Scheitel einer Parabel liegt in der Mitte ihrer Nullstellen, bei $\frac{-1 + 3}{2} = 1$.
```

```aufgabe
id: dr-fstrich-sattel
titel: Sattelpunkt am Graphen der Ableitung erkennen
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  Die Abbildung zeigt den Graphen der Ableitung $f'(x) = \tfrac12 x\,(x - 3)^2$.

  a) Gib alle Wendestellen von $f$ an.

  b) Was hat der Graph von $f$ an der Stelle $3$?
plot:
  x: [-0.7, 4.3]
  y: [-5, 4]
  achsen: { x: "x", y: "f'(x)" }
  graphen:
    - { f: "0.5*x*(x - 3)^2", farbe: 1 }
  punkte:
    - { x: 0, y: 0 }
    - { x: 3, y: 0 }
    - { x: 1, y: 2 }
teile:
  - typ: menge
    label: 'a) Wendestellen von $f$'
    loesung: ["1", "3"]
    fehler:
      - wert: ["0", "3"]
        meldung: |
          $0$ und $3$ sind die **Nullstellen** von $f'$. Wendestellen von $f$ liegen dort, wo $f'$ einen Hoch- oder
          Tiefpunkt hat. Bei $3$ trifft beides zu, bei $0$ nicht.
      - wert: ["1"]
        meldung: Der Hochpunkt von $f'$ bei $1$ stimmt. Hat $f'$ noch einen Tiefpunkt? Schau dir die Berührstelle an.
  - typ: auswahl
    label: 'b) An der Stelle $3$ hat $f$'
    optionen: ['einen Hochpunkt', 'einen Tiefpunkt', 'einen Sattelpunkt', 'keine waagrechte Tangente']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Für einen Hochpunkt müsste $f'$ bei $3$ von $+$ nach $-$ wechseln. Hier bleibt $f'$ aber auf beiden Seiten positiv.
      - wert: 3
        meldung: Es ist $f'(3) = 0$, die Tangente ist dort also waagrecht.
hinweise:
  - Bei $x = 3$ berührt der Graph von $f'$ die Achse nur. Welches Vorzeichen hat $f'$ links und rechts davon?
  - Suche die Hoch- und Tiefpunkte des Graphen von $f'$. Die Berührstelle ist auch ein Tiefpunkt.
loesung: |
  Ansatz: Extremstellen von $f'$ sind Wendestellen von $f$. Nullstellen von $f'$ ohne Vorzeichenwechsel sind Sattelpunkte von $f$.
  ---
  Der Graph von $f'$ hat einen Hochpunkt bei $x = 1$ (Wert $f'(1) = \frac12\cdot 1\cdot 4 = 2$). Bei $x = 3$ berührt er die Achse von oben. Das ist ein Tiefpunkt von $f'$, denn ringsum ist $f' > 0$. Wendestellen von $f$: $1$ und $3$.
  ---
  Bei $3$ ist $f'(3) = 0$, aber $f'$ ist links und rechts positiv. $f$ steigt also vor und nach $3$ und ist bei $3$ kurz waagrecht. Das ist ein Sattelpunkt. Bei $x = 0$ dagegen wechselt $f'$ von $-$ nach $+$, dort hat $f$ einen Tiefpunkt.
```

```aufgabe
id: dr-fstrich-zufluss
titel: Zuflussrate eines Beckens deuten
niveau: 3
lernziel: 2
kompetenz: modellieren
angabe: |
  Die Abbildung zeigt die momentane Änderungsrate $V'(t)$ des Wasservolumens $V$ in einem Rückhaltebecken.
  Dabei ist $t$ die Zeit in Stunden ab Messbeginn und $V'(t)$ in Kubikmetern pro Stunde. Positive Werte bedeuten Zufluss,
  negative Abfluss.

  a) Zu welchem Zeitpunkt im Intervall $(0, 6)$ ist das Volumen lokal am kleinsten?

  b) Zu welchem Zeitpunkt im Intervall $(0, 6)$ ist das Volumen lokal am größten?

  c) Zu welchem Zeitpunkt nimmt das Volumen am schnellsten zu, und um wie viel pro Stunde?

  d) Kann man am Graphen ablesen, wie viel Wasser zum Zeitpunkt $t = 4$ im Becken ist? Begründe.
plot:
  x: [0, 6]
  y: [-10.5, 3]
  achsen: { x: "t in h", y: "V'(t) in m³/h" }
  graphen:
    - { f: "-x^2 + 5*x - 4", farbe: 1, von: 0, bis: 6 }
  punkte:
    - { x: 1, y: 0, label: "(1|0)" }
    - { x: 4, y: 0, label: "(4|0)" }
    - { x: 2.5, y: 2.25, label: "(2,5|2,25)" }
teile:
  - typ: zahl
    label: 'a) lokales Minimum von $V$ bei $t = $'
    einheit: h
    loesung: "1"
    fehler:
      - wert: "0"
        meldung: Gefragt ist ein Zeitpunkt **im Inneren** des Intervalls, an dem $V'$ das Vorzeichen von $-$ nach $+$ wechselt.
  - typ: zahl
    label: 'b) lokales Maximum von $V$ bei $t = $'
    einheit: h
    loesung: "4"
    fehler:
      - wert: "2.5"
        meldung: Bei $t = 2{,}5$ fließt am **meisten** Wasser zu. Das Volumen wächst aber danach weiter, solange $V' > 0$ ist.
  - typ: zahl
    label: 'c) Zeitpunkt der stärksten Zunahme'
    einheit: h
    loesung: "2.5"
    fehler:
      - wert: "4"
        meldung: Bei $t = 4$ ist das Volumen am größten, aber die Zunahme ist dort null. Die stärkste Zunahme liegt beim Hochpunkt von $V'$.
  - typ: zahl
    label: 'c) Zunahme zu diesem Zeitpunkt'
    einheit: m³/h
    loesung: "-2.5^2 + 5*2.5 - 4"
    anzeige: '2{,}25'
  - typ: text
    label: 'd) Begründung'
    muster: |
      Nein. Der Graph zeigt nur, wie schnell sich das Volumen ändert, nicht wie viel Wasser da ist.
      Zwei Becken mit verschiedenem Anfangsvolumen hätten denselben Graphen von $V'$. Man braucht einen
      bekannten Wert, zum Beispiel $V(0)$, und muss die Änderungen aufsummieren (Integral, Kapitel 10).
hinweise:
  - 'Übersetze: $V'' > 0$ heißt, das Volumen nimmt zu. Ein Vorzeichenwechsel von $V''$ ist ein lokales Extremum von $V$.'
  - Die schnellste Zunahme ist der größte Wert von $V'$, also der Hochpunkt des gezeichneten Graphen.
loesung: |
  Ansatz: Der gezeichnete Graph ist die Ableitung des Volumens. Wir lesen ihn mit den Regeln „von $f'$ zu $f$“.
  ---
  a) Bis $t = 1$ ist $V' < 0$: Es fließt mehr ab als zu, das Volumen sinkt. Ab $t = 1$ ist $V' > 0$, das Volumen steigt. Bei $t = 1$ h ist das Volumen also lokal am kleinsten.
  ---
  b) Bei $t = 4$ wechselt $V'$ von $+$ nach $-$. Das Volumen steigt bis $t = 4$ und sinkt danach: lokales Maximum bei $t = 4$ h.
  ---
  c) Der größte Wert von $V'$ liegt beim Hochpunkt $(2{,}5 \mid 2{,}25)$. Nach $2{,}5$ Stunden nimmt das Volumen am schnellsten zu, nämlich um $2{,}25$ m³ pro Stunde.
  ---
  d) Nein. $V'$ beschreibt nur Änderungen. Das Volumen selbst ergibt sich erst aus einem Anfangswert und der Summe aller Änderungen, wie in [Kapitel 10](/lernen/mathe3/integralrechnung) gezeigt wird.
```

## Grundregeln: Potenz-, Faktor- und Summenregel und die wichtigsten Ableitungen

```aufgabe
id: dr-check-wurzel-potenz
titel: Wurzel als Potenz schreiben
niveau: 1
art: check
angabe: |
  Schreibe $\sqrt[3]{x^2}$ als Potenz $x^r$. Wie groß ist $r$?
  (Herkunft: [Kapitel 1, „Potenzen und Wurzeln“](/lernen/mathe3/zahlen))
teile:
  - typ: zahl
    label: '$r$'
    loesung: "2/3"
    anzeige: '\tfrac23'
    fehler:
      - wert: "3/2"
        meldung: |
          Zähler und Nenner sind vertauscht. Die Hochzahl **unter** der Wurzel kommt in den Zähler,
          die Wurzelzahl in den Nenner: $\sqrt[n]{x^m} = x^{m/n}$.
loesung: |
  Allgemein gilt $\sqrt[n]{x^m} = x^{m/n}$. Die Wurzelzahl $3$ wird zum Nenner, die Hochzahl $2$ zum Zähler.
  ---
  Also $\sqrt[3]{x^2} = x^{2/3}$ und $r = \tfrac23$.
```

Die h-Methode funktioniert immer, ist aber für jede neue Funktion mühsam. Zum Glück muss man sie nur
für wenige **Grundfunktionen** durchführen. Alle anderen Ableitungen setzen sich mit wenigen
**Rechenregeln** daraus zusammen. In diesem Abschnitt lernst du die einfachen Regeln und die
Ableitungen der wichtigsten Funktionen. Produkte, Brüche und verschachtelte Funktionen folgen in
[9.6 Produktregel und Quotientenregel](/lernen/mathe3/differentialrechnung/produktregel-und-quotientenregel) und [9.7 Kettenregel und höhere Ableitungen](/lernen/mathe3/differentialrechnung/kettenregel-hoehere-ableitungen-und-die-wahl-der-richtigen-regel). Die Beweise aller Regeln stehen in [Kapitel 13](/lernen/mathe3/differenzierbarkeit).

### Vier Grundregeln

:::satz[Konstanten-, Potenz-, Faktor- und Summenregel]
Die Funktionen $f$ und $g$ seien differenzierbar, und $c$ sei eine feste reelle Zahl. Dann gilt:

1. **Konstantenregel:** $(c)' = 0$.
2. **Potenzregel:** $(x^r)' = r\cdot x^{r-1}$ für jede reelle Hochzahl $r$. Für natürliche Hochzahlen
   gilt das für alle $x$, sonst für $x > 0$.
3. **Faktorregel:** $(c\cdot f)' = c\cdot f'$.
4. **Summenregel:** $(f + g)' = f' + g'$ und $(f - g)' = f' - g'$.
:::

Was die Regeln bedeuten, in Worten und mit je einem Beispiel:

- **Konstantenregel:** Der Graph einer Konstanten ist eine waagrechte Gerade. Seine Steigung ist überall $0$. Beispiel: $(7)' = 0$.
- **Potenzregel:** Die Hochzahl wandert als Faktor nach vorne, die neue Hochzahl ist um $1$ kleiner. Beispiel: $(x^5)' = 5x^4$.
- **Faktorregel:** Ein konstanter Faktor bleibt beim Ableiten einfach stehen. Beispiel: $(7x^3)' = 7\cdot 3x^2 = 21x^2$.
- **Summenregel:** Eine Summe leitet man ab, indem man jeden Summanden einzeln ableitet. Beispiel: $(x^2 + x^5)' = 2x + 5x^4$.

Zwei **Nichtbeispiele** schützen vor häufigen Fehlern. Erstens gilt die Potenzregel nur, wenn die
**Hochzahl** fest ist und $x$ in der **Basis** steht. Bei $2^x$ ist es umgekehrt, das ist keine Potenz
im Sinn der Regel. Zweitens gilt die Faktorregel nur für **konstante** Faktoren. Bei $x\cdot\sin x$
sind beide Faktoren Funktionen, dafür braucht man die Produktregel.

Die Potenzregel gilt auch für negative und gebrochene Hochzahlen. Deshalb schreibt man Brüche und
Wurzeln vor dem Ableiten als Potenzen:
$$\frac{1}{x^3} = x^{-3}, \qquad \sqrt x = x^{1/2}, \qquad \sqrt[3]{x^2} = x^{2/3}.$$

:::beispiel[Polynome, Brüche und Wurzeln ableiten]
1. $f(x) = 4x^5 - 3x^2 + 7x - 2$. Summen- und Faktorregel erlauben, jeden Summanden einzeln
   abzuleiten: $4\cdot 5x^4 - 3\cdot 2x + 7 - 0$. Also $f'(x) = 20x^4 - 6x + 7$.
2. $g(x) = \dfrac{2}{x^3}$. Umschreiben: $g(x) = 2x^{-3}$. Potenzregel: $g'(x) = 2\cdot(-3)\,x^{-4} = -\dfrac{6}{x^4}$.
   Die neue Hochzahl ist $-3 - 1 = -4$, nicht $-2$.
3. $k(x) = 6\sqrt[3]{x}$. Umschreiben: $k(x) = 6x^{1/3}$. Potenzregel: $k'(x) = 6\cdot\tfrac13\,x^{-2/3} = 2x^{-2/3}$.
   Zurück in Wurzelschreibweise: $k'(x) = \dfrac{2}{\sqrt[3]{x^2}}$.
:::

:::intuition[Warum Potenz- und Faktorregel stimmen]
Für $x^n$ mit einer natürlichen Zahl $n$ beginnt das Ausmultiplizieren von $(x + h)^n$ immer mit
$x^n + n\,x^{n-1}h$. Alle weiteren Summanden enthalten $h^2$ oder höhere Potenzen von $h$. Im
Differenzenquotienten fällt $x^n$ weg, nach dem Kürzen durch $h$ bleibt $n\,x^{n-1}$ plus Summanden
mit $h$. Diese verschwinden für $h \to 0$.

Die Faktorregel sieht man am Graphen. Der Graph von $3f$ ist der Graph von $f$, dreimal so hoch
gestreckt. Dabei werden alle Steigungsdreiecke dreimal so hoch, also alle Steigungen verdreifacht.
:::

### Die wichtigsten Grundableitungen

:::formel[Grundableitungen]
- $(x^r)' = r\,x^{r-1}$. Das ist die Potenzregel.
- $(e^x)' = e^x$. Die e-Funktion ist ihre eigene Ableitung.
- $(a^x)' = a^x\cdot\ln a$ für jede Basis $a > 0$.
- $(\ln x)' = \dfrac1x$ für $x > 0$.
- $(\log_a x)' = \dfrac{1}{x\cdot\ln a}$ für $x > 0$, $a > 0$ und $a \neq 1$.
- $(\sin x)' = \cos x$, wenn $x$ im **Bogenmaß** gemessen wird.
- $(\cos x)' = -\sin x$, ebenfalls im Bogenmaß.
:::

**Die e-Funktion.** Die Eulersche Zahl $e \approx 2{,}71828$ ist genau so gewählt, dass $e^x$ an der
Stelle $0$ die Steigung $1$ hat. Ein Zahlentest: $\frac{e^{0{,}001} - 1}{0{,}001} \approx 1{,}0005$.
Daraus folgt, dass $e^x$ an **jeder** Stelle die Steigung $e^x$ hat. Denn wegen $e^{x + h} = e^x\cdot e^h$
ist $\frac{e^{x + h} - e^x}{h} = e^x\cdot\frac{e^h - 1}{h}$, und der zweite Faktor nähert sich $1$. Je größer der Funktionswert,
desto steiler der Graph. Genau das kennzeichnet exponentielles Wachstum.

**Andere Basen.** Für $a^x$ kommt der Faktor $\ln a$ dazu. Woher er kommt, zeigt
[9.7 Kettenregel und höhere Ableitungen](/lernen/mathe3/differentialrechnung/kettenregel-hoehere-ableitungen-und-die-wahl-der-richtigen-regel). Für den Logarithmus zur Basis $a$ hilft der Basiswechsel aus
[Kapitel 1](/lernen/mathe3/zahlen): $\log_a x = \frac{\ln x}{\ln a}$. Der Nenner $\ln a$ ist eine
Konstante, also liefert die Faktorregel $(\log_a x)' = \frac{1}{\ln a}\cdot\frac1x$.

**Sinus und Kosinus.** Die Steigung des Sinus ist an jeder Stelle der Kosinus. Das gilt aber nur im
Bogenmaß. Zahlentest an der Stelle $0$: Im Bogenmaß ist $\frac{\sin 0{,}001}{0{,}001} \approx 1$, und
$\cos 0 = 1$ passt. Misst man in Grad, ist die Steigung dort nur $\frac{\pi}{180} \approx 0{,}0175$,
denn ein Grad ist ein sehr kleiner Winkel.

:::beispiel[Grundableitungen kombinieren]
1. $f(x) = 2e^x + 5\cos x - 4\ln x + \pi$. Jeden Summanden einzeln ableiten. $(2e^x)' = 2e^x$,
   $(5\cos x)' = 5\cdot(-\sin x)$, $(4\ln x)' = \frac4x$, und $\pi$ ist eine Konstante. Also
   $f'(x) = 2e^x - 5\sin x - \dfrac4x$.
2. $g(x) = 10^x$. Mit der Regel für die Basis $a = 10$: $g'(x) = 10^x\cdot\ln 10 \approx 2{,}3026\cdot 10^x$.
3. $h(x) = 3\log_2 x$. Mit $\ln 2 \approx 0{,}693$: $h'(x) = \dfrac{3}{x\ln 2} \approx \dfrac{4{,}328}{x}$.
:::

:::achtung[Potenzregel auf eine Exponentialfunktion angewendet]
Jemand leitet ab:
$$(e^x)' = x\cdot e^{x-1} \qquad \text{(falsch).}$$
Die Potenzregel verlangt eine **feste Hochzahl** und $x$ in der Basis. Bei $e^x$ steht $x$ aber in der
Hochzahl. Richtig ist $(e^x)' = e^x$. Umgekehrt ist $x^e$ eine echte Potenz mit der festen Hochzahl
$e \approx 2{,}718$. Dort gilt die Potenzregel: $(x^e)' = e\cdot x^{e - 1}$. Und $e^2 \approx 7{,}39$ ist
eine Konstante mit $(e^2)' = 0$.
:::

:::achtung[Taschenrechner im Gradmodus]
Gesucht ist die Steigung von $\sin x$ an der Stelle $x = \frac{\pi}{6}$. Richtig ist
$\cos\frac{\pi}{6} = \frac{\sqrt3}{2} \approx 0{,}8660$. Steht der Taschenrechner auf DEG, rechnet er
$\cos(0{,}5236°) \approx 0{,}99996$ (falsch). Er hat $0{,}5236$ als Winkel in Grad gelesen, gemeint
waren $0{,}5236$ im Bogenmaß. Stell bei Ableitungen mit Winkelfunktionen den Rechner immer auf **RAD**.
:::

:::merke[Rezept: mit den Grundregeln ableiten]
1. Umschreiben: Brüche mit $x$ im Nenner und Wurzeln als Potenzen schreiben.
2. Konstanten erkennen. Zahlen wie $\pi$, $e^2$ oder $\ln 5$ haben die Ableitung $0$.
3. Jeden Summanden einzeln ableiten. Konstante Faktoren bleiben stehen.
4. Bei Bedarf negative Hochzahlen wieder als Bruch schreiben.
:::

```reflexion
frage: Warum ist die Ableitung von $\ln 5$ gleich $0$, die von $\ln x$ aber $\frac1x$?
antwort: |
  $\ln 5 \approx 1{,}609$ ist eine feste Zahl. Ihr Graph ist eine waagrechte Gerade, und deren Steigung
  ist überall $0$. Dass in der Zahl ein „ln“ steht, ändert daran nichts.

  $\ln x$ ist dagegen eine Funktion: Ihr Wert ändert sich, wenn sich $x$ ändert. Ihre Steigung an der
  Stelle $x$ ist $\frac1x$. Entscheidend ist also immer die Frage: Hängt der Ausdruck von $x$ ab oder nicht?
```

```aufgabe
id: dr-potenzregel
titel: Potenzregel mit Umschreiben
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Leite ab:
  $$f_1(x) = 3x^4 - 5x^3 + 2x - 9, \qquad f_2(x) = \frac{4}{x^2}, \qquad f_3(x) = 6\sqrt x.$$
teile:
  - typ: term
    label: '$f_1''(x)$'
    loesung: "12*x^3 - 15*x^2 + 2"
    fehler:
      - wert: "3*x^3 - 5*x^2 + 2"
        meldung: |
          Du hast die Hochzahl verkleinert, aber nicht als Faktor nach vorne geholt. Die Potenzregel
          lautet $(x^n)' = n\cdot x^{n-1}$, also $(3x^4)' = 3\cdot 4x^3 = 12x^3$.
  - typ: term
    label: '$f_2''(x)$'
    loesung: "-8/x^3"
    bereich: [0.5, 4]
    fehler:
      - wert: "-8/x"
        meldung: |
          Die neue Hochzahl ist um $1$ **kleiner**: Aus $x^{-2}$ wird $x^{-3}$, nicht $x^{-1}$.
          Bei negativen Hochzahlen heißt „kleiner“ weiter weg von null.
      - wert: "8/x^3"
        meldung: |
          Das Vorzeichen fehlt. Die Hochzahl $-2$ wandert als Faktor nach vorne: $4\cdot(-2) = -8$.
  - typ: term
    label: '$f_3''(x)$'
    loesung: "3/sqrt(x)"
    bereich: [0.5, 4]
    fehler:
      - wert: "3*sqrt(x)"
        meldung: |
          Du hast den Faktor $\frac12$ richtig nach vorne geholt, aber die Hochzahl nicht verkleinert.
          Aus $x^{1/2}$ wird $x^{1/2 - 1} = x^{-1/2} = \frac{1}{\sqrt x}$.
hinweise:
  - Schreibe zuerst $f_2(x) = 4x^{-2}$ und $f_3(x) = 6x^{1/2}$.
loesung: |
  $f_1$: Summen- und Faktorregel, jeder Summand einzeln mit der Potenzregel. $f_1'(x) = 3\cdot 4x^3 - 5\cdot 3x^2 + 2 - 0 = 12x^3 - 15x^2 + 2$.
  ---
  $f_2$: Umschreiben $f_2(x) = 4x^{-2}$. Potenzregel: $f_2'(x) = 4\cdot(-2)\,x^{-3} = -\dfrac{8}{x^3}$.
  ---
  $f_3$: Umschreiben $f_3(x) = 6x^{1/2}$. Potenzregel: $f_3'(x) = 6\cdot\tfrac12\,x^{-1/2} = \dfrac{3}{\sqrt x}$.
```

```aufgabe
id: dr-grundfunktionen
titel: Grundableitungen kombinieren
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Leite ab: $\;g_1(x) = 4e^x + 3\sin x - 2\ln x\;$ und $\;g_2(x) = 5\cos x - x^3 + \ln 2$.
teile:
  - typ: term
    label: '$g_1''(x)$'
    loesung: "4*e^x + 3*cos(x) - 2/x"
    bereich: [0.5, 4]
    fehler:
      - wert: "4*e^x - 3*cos(x) - 2/x"
        meldung: 'Die Ableitung des Sinus ist der Kosinus **ohne** Minus: $(\sin x)'' = \cos x$. Das Minus gehört zur Ableitung des Kosinus.'
  - typ: term
    label: '$g_2''(x)$'
    loesung: "-5*sin(x) - 3*x^2"
    fehler:
      - wert: "5*sin(x) - 3*x^2"
        meldung: 'Beim Kosinus kommt ein Minus dazu: $(\cos x)'' = -\sin x$, also $(5\cos x)'' = -5\sin x$.'
      - wert: "-5*sin(x) - 3*x^2 + 1/2"
        meldung: '$\ln 2 \approx 0{,}693$ ist eine feste Zahl, keine Funktion von $x$. Ihre Ableitung ist $0$.'
hinweise:
  - Summen- und Faktorregel, dann die Liste der Grundableitungen.
loesung: |
  Summen- und Faktorregel: Jeder Summand wird einzeln abgeleitet, konstante Faktoren bleiben stehen.
  ---
  $g_1'(x) = 4e^x + 3\cos x - \dfrac2x$.
  ---
  $g_2'(x) = -5\sin x - 3x^2 + 0$. Der Summand $\ln 2$ ist eine Konstante und fällt weg.
```

```aufgabe
id: dr-grund-steigung
titel: Steigungen von e-Funktion und Sinus
niveau: 1
lernziel: 3
kompetenz: anwenden
angabe: |
  a) Wie groß ist die Steigung von $f(x) = e^x$ an der Stelle $x = \ln 3$?

  b) Wie groß ist die Steigung von $s(x) = \sin x$ an der Stelle $x = \frac{\pi}{3}$ (Bogenmaß)?
teile:
  - typ: zahl
    label: 'a) $f''(\ln 3)$'
    loesung: "e^(ln(3))"
    anzeige: '3'
    fehler:
      - wert: "ln(3)"
        meldung: Du hast nur die Stelle angegeben. Die Steigung ist $f'(\ln 3) = e^{\ln 3}$, und $e$ hoch $\ln 3$ ergibt $3$.
  - typ: zahl
    label: 'b) $s''(\pi/3)$'
    loesung: "cos(pi/3)"
    anzeige: '\tfrac12'
    fehler:
      - wert: "sqrt(3)/2"
        meldung: Das ist $\sin\frac{\pi}{3}$, also die **Höhe** des Graphen. Die Steigung liefert die Ableitung $\cos x$.
hinweise:
  - Ableiten, dann einsetzen. $e^{\ln 3} = 3$, weil $\ln$ die Umkehrung von „$e$ hoch“ ist.
loesung: |
  a) $f'(x) = e^x$, also $f'(\ln 3) = e^{\ln 3} = 3$. Der Graph der e-Funktion ist an jeder Stelle so steil, wie er hoch ist.
  ---
  b) $s'(x) = \cos x$, also $s'(\frac{\pi}{3}) = \cos\frac{\pi}{3} = \frac12$. Der Sinus steigt dort mit Steigung $0{,}5$.
```

```aufgabe
id: dr-allgemeine-basis
titel: Exponential- und Logarithmusfunktion mit beliebiger Basis
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Leite ab: $\;f(x) = 5\cdot 3^x\;$ und $\;g(x) = \log_2 x$.
teile:
  - typ: term
    label: '$f''(x)$'
    loesung: "5*ln(3)*3^x"
    fehler:
      - wert: "5*x*3^(x-1)"
        meldung: |
          Das ist die Potenzregel, aber $3^x$ ist keine Potenz mit fester Hochzahl. Das $x$ steht in der Hochzahl.
          Verwende $(a^x)' = a^x\cdot\ln a$.
      - wert: "5*3^x"
        meldung: Nur die e-Funktion ist ihre eigene Ableitung. Bei der Basis $3$ kommt der Faktor $\ln 3 \approx 1{,}0986$ dazu.
  - typ: term
    label: '$g''(x)$'
    loesung: "1/(x*ln(2))"
    bereich: [0.5, 4]
    fehler:
      - wert: "1/x"
        meldung: '$\frac1x$ ist die Ableitung des **natürlichen** Logarithmus. Für die Basis $2$ gilt $\log_2 x = \frac{\ln x}{\ln 2}$, also kommt der Faktor $\frac{1}{\ln 2}$ dazu.'
      - wert: "ln(2)/x"
        meldung: 'Der Faktor $\ln 2$ steht im **Nenner**: $\log_2 x = \frac{\ln x}{\ln 2}$.'
hinweise:
  - 'Grundableitung: $(a^x)'' = a^x\cdot\ln a$.'
  - 'Basiswechsel: $\log_2 x = \frac{\ln x}{\ln 2}$. Der Nenner ist eine Konstante.'
loesung: |
  Ansatz: Beide Funktionen haben eine andere Basis als $e$. Wir verwenden $(a^x)' = a^x\ln a$ und den Basiswechsel.
  ---
  $f'(x) = 5\cdot 3^x\cdot\ln 3 \approx 5{,}493\cdot 3^x$.
  ---
  $g(x) = \dfrac{1}{\ln 2}\cdot\ln x$. Faktorregel: $g'(x) = \dfrac{1}{\ln 2}\cdot\dfrac1x = \dfrac{1}{x\ln 2} \approx \dfrac{1{,}4427}{x}$.
```

```aufgabe
id: dr-grund-umschreiben
titel: Erst umschreiben, dann ableiten
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Gegeben ist $f(x) = \dfrac{x^2 + 3}{\sqrt x}$ für $x > 0$. Teile den Bruch in zwei Summanden auf, schreibe sie als Potenzen
  und leite ab. Berechne dann $f'(1)$.
teile:
  - typ: term
    label: '$f''(x)$'
    loesung: "1.5*x^0.5 - 1.5*x^(-1.5)"
    bereich: [0.5, 4]
    fehler:
      - wert: "2*x/(1/(2*sqrt(x)))"
        meldung: |
          Du hast Zähler und Nenner einzeln abgeleitet und durcheinander geteilt. So funktioniert das Ableiten
          eines Bruchs nicht. Teile den Bruch zuerst auf: $\frac{x^2}{\sqrt x} + \frac{3}{\sqrt x}$.
  - typ: zahl
    label: '$f''(1)$'
    loesung: "1.5 - 1.5"
    anzeige: '0'
    toleranz: 0.0001
    fehler:
      - wert: "4"
        meldung: '$4$ ist der Funktionswert $f(1) = \frac{1 + 3}{1}$. Setze $1$ in $f''$ ein.'
hinweise:
  - '$\frac{x^2}{\sqrt x} = x^{2 - 1/2} = x^{3/2}$ und $\frac{3}{\sqrt x} = 3x^{-1/2}$.'
  - Leite beide Potenzen mit der Potenzregel ab.
gefuehrt:
  - text: 'Schreibe $\frac{x^2}{\sqrt x}$ als Potenz $x^r$. Wie groß ist $r$?'
    teil: { typ: zahl, loesung: "3/2" }
    erklaerung: '$\frac{x^2}{x^{1/2}} = x^{2 - 1/2} = x^{3/2}$. Beim Teilen von Potenzen werden die Hochzahlen subtrahiert.'
  - text: 'Schreibe $\frac{3}{\sqrt x}$ als $3\cdot x^s$. Wie groß ist $s$?'
    teil: { typ: zahl, loesung: "-1/2" }
    erklaerung: 'Die Wurzel im Nenner wird zur negativen Hochzahl: $\frac{3}{x^{1/2}} = 3x^{-1/2}$.'
  - text: 'Leite $f(x) = x^{3/2} + 3x^{-1/2}$ ab.'
    teil: { typ: term, loesung: "1.5*x^0.5 - 1.5*x^(-1.5)", bereich: [0.5, 4] }
    erklaerung: '$(x^{3/2})'' = \frac32 x^{1/2}$ und $(3x^{-1/2})'' = 3\cdot(-\frac12)\,x^{-3/2} = -\frac32 x^{-3/2}$.'
  - text: 'Setze $x = 1$ ein.'
    teil: { typ: zahl, loesung: "0", toleranz: 0.0001 }
    erklaerung: '$f''(1) = \frac32 - \frac32 = 0$. An der Stelle $1$ hat der Graph eine waagrechte Tangente.'
loesung: |
  Ansatz: Ein Bruch mit einer Summe im Zähler lässt sich in zwei Brüche teilen. Dann ist jeder Summand eine Potenz.
  ---
  Umschreiben: $f(x) = \dfrac{x^2}{x^{1/2}} + \dfrac{3}{x^{1/2}} = x^{3/2} + 3x^{-1/2}$.
  ---
  Potenzregel für beide Summanden: $f'(x) = \tfrac32\,x^{1/2} - \tfrac32\,x^{-3/2} = \tfrac32\sqrt x - \dfrac{3}{2\sqrt{x^3}}$.
  ---
  $f'(1) = \tfrac32 - \tfrac32 = 0$. Der Graph hat an der Stelle $1$ eine waagrechte Tangente. Probe: $f(0{,}99) \approx 4{,}0002$, $f(1) = 4$ und $f(1{,}01) \approx 4{,}0002$. Rund um $x = 1$ ändert sich der Wert kaum.
```

```aufgabe
id: dr-grund-fehler
titel: Konstante oder Funktion?
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: |
  Ein Mitschüler leitet $f(x) = 3e^x + x^e + e^2 + \ln 5$ so ab:
  $$f'(x) = 3x\,e^{x-1} + e\,x^{e-1} + 2e + \tfrac15.$$

  a) Welche der vier Summanden hat er richtig abgeleitet?

  b) Gib die richtige Ableitung an.
teile:
  - typ: auswahl
    label: 'a) richtig abgeleitet ist'
    mehrfach: true
    optionen: ['$3e^x$', '$x^e$', '$e^2$', '$\ln 5$']
    richtig: [1]
    fehler:
      - wert: [0, 1]
        meldung: 'Bei $3e^x$ steht $x$ in der Hochzahl. Die Potenzregel passt dort nicht, es gilt $(e^x)'' = e^x$.'
      - wert: [1, 2]
        meldung: '$e^2 \approx 7{,}39$ ist eine feste Zahl ohne $x$. Ihre Ableitung ist $0$, nicht $2e$.'
  - typ: term
    label: 'b) $f''(x)$'
    loesung: "3*e^x + e*x^(e-1)"
    bereich: [0.5, 3]
    fehler:
      - wert: "3*e^x + e*x^(e-1) + 1/5"
        meldung: '$\ln 5$ ist eine Konstante, ihre Ableitung ist $0$. Nur $\ln x$ hat die Ableitung $\frac1x$.'
hinweise:
  - Frage dich bei jedem Summanden, ob und wo $x$ vorkommt.
  - '$x^e$ ist eine Potenz mit der festen Hochzahl $e$. $e^2$ und $\ln 5$ enthalten kein $x$.'
loesung: |
  Ansatz: Wir prüfen jeden Summanden. Entscheidend ist, ob $x$ in der Basis, in der Hochzahl oder gar nicht vorkommt.
  ---
  $3e^x$: $x$ steht in der Hochzahl, also $(3e^x)' = 3e^x$. Falsch abgeleitet. $x^e$: Potenz mit fester Hochzahl, $(x^e)' = e\,x^{e-1}$. Richtig.
  ---
  $e^2$ und $\ln 5$ sind Konstanten mit Ableitung $0$. Beide falsch abgeleitet.
  ---
  Richtig: $f'(x) = 3e^x + e\,x^{e-1}$.
```

```aufgabe
id: dr-grund-parameter
titel: Stelle oder Parameter aus der Steigung
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  a) Für welche Zahl $a$ hat der Graph von $f(x) = a\,x^3 - 2x$ an der Stelle $2$ die Steigung $10$?

  b) An welcher Stelle hat der Graph von $g(x) = \ln x$ die Steigung $\frac14$?
teile:
  - typ: zahl
    label: 'a) $a$'
    loesung: "1"
    fehler:
      - wert: "10/12"
        meldung: Du hast $12a = 10$ gelöst. Der Summand $-2x$ trägt aber auch zur Steigung bei, nämlich $-2$.
      - wert: "14/8"
        meldung: Hast du statt der Steigung den Funktionswert $f(2) = 8a - 4$ gleich $10$ gesetzt? Gefragt ist $f'(2) = 10$.
  - typ: zahl
    label: 'b) Stelle $x$'
    loesung: "4"
    fehler:
      - wert: "1/4"
        meldung: 'Du hast die Steigung als Stelle angegeben. Gesucht ist das $x$ mit $g''(x) = \frac1x = \frac14$.'
hinweise:
  - Leite zuerst ab und setze dann die Ableitung gleich der verlangten Steigung.
  - 'a) $f''(x) = 3ax^2 - 2$. b) $g''(x) = \frac1x$.'
loesung: |
  Ansatz: „Steigung an einer Stelle“ heißt Wert der Ableitung. Wir stellen jeweils eine Gleichung für die Unbekannte auf.
  ---
  a) $f'(x) = 3ax^2 - 2$, also $f'(2) = 12a - 2$. Bedingung $12a - 2 = 10$, also $12a = 12$ und $a = 1$.
  ---
  b) $g'(x) = \frac1x = \frac14$, also $x = 4$.
  ---
  Probe: a) Für $f(x) = x^3 - 2x$ ist $f'(2) = 12 - 2 = 10$. b) $g'(4) = \frac14$.
```

```aufgabe
id: dr-grund-waagrecht
titel: Waagrechte Tangenten einer Funktion mit Kosinus
niveau: 3
lernziel: 3
kompetenz: rechnen
angabe: |
  Gegeben ist $f(x) = x + 2\cos x$ auf dem Intervall $[0, 2\pi]$ ($x$ im Bogenmaß).

  a) Bestimme alle Stellen, an denen der Graph eine waagrechte Tangente hat.

  b) An welcher Stelle ist die Steigung am größten? Wie groß ist sie dort?
teile:
  - typ: menge
    label: 'a) Stellen mit waagrechter Tangente'
    loesung: ["pi/6", "5*pi/6"]
    fehler:
      - wert: ["pi/6"]
        meldung: |
          Die Gleichung $\sin x = \frac12$ hat im Intervall $[0, 2\pi]$ **zwei** Lösungen. Der Sinus ist im ersten
          **und** im zweiten Quadranten positiv: $x = \frac{\pi}{6}$ und $x = \pi - \frac{\pi}{6}$.
      - wert: ["30", "150"]
        meldung: Das sind die Winkel in **Grad**. Gefragt ist das Bogenmaß, also $\frac{\pi}{6}$ und $\frac{5\pi}{6}$.
  - typ: zahl
    label: 'b) Stelle der größten Steigung'
    loesung: "3*pi/2"
    anzeige: '\tfrac{3\pi}{2} \approx 4{,}712'
    fehler:
      - wert: "pi/2"
        meldung: 'Bei $\frac{\pi}{2}$ ist $\sin x = 1$, also $f''(x) = 1 - 2 = -1$. Das ist die **kleinste** Steigung. Die Steigung ist am größten, wo $\sin x$ am kleinsten ist.'
  - typ: zahl
    label: 'b) größte Steigung'
    loesung: "1 - 2*sin(3*pi/2)"
    anzeige: '3'
hinweise:
  - '$f''(x) = 1 - 2\sin x$. Setze $f''(x) = 0$, also $\sin x = \frac12$. Denk an beide Lösungen im Intervall (Einheitskreis, [Kapitel 5](/lernen/mathe3/trigonometrie)).'
  - '$1 - 2\sin x$ ist am größten, wenn $\sin x$ am kleinsten ist, also $\sin x = -1$.'
loesung: |
  Ansatz: Waagrechte Tangente heißt $f'(x) = 0$. Ableiten: $f'(x) = 1 + 2\cdot(-\sin x) = 1 - 2\sin x$.
  ---
  a) $1 - 2\sin x = 0$, also $\sin x = \frac12$. Im Intervall $[0, 2\pi]$ gibt es zwei Lösungen: $x = \frac{\pi}{6} \approx 0{,}524$ und $x = \pi - \frac{\pi}{6} = \frac{5\pi}{6} \approx 2{,}618$.
  ---
  b) $f'(x) = 1 - 2\sin x$ wird am größten, wenn $\sin x$ am kleinsten ist. Der kleinste Wert des Sinus ist $-1$, er wird bei $x = \frac{3\pi}{2}$ angenommen.
  ---
  Dort ist $f'(\frac{3\pi}{2}) = 1 - 2\cdot(-1) = 3$. Kontrolle: Die Steigung liegt immer zwischen $1 - 2 = -1$ und $1 + 2 = 3$.
```

## Produktregel und Quotientenregel

```aufgabe
id: dr-check-produkt-falle
titel: Ist die Ableitung eines Produkts das Produkt der Ableitungen?
niveau: 1
art: check
angabe: |
  Es ist $x\cdot x = x^2$. Wie lautet die Ableitung von $x\cdot x$?
  (Herkunft: [9.5 Grundregeln](/lernen/mathe3/differentialrechnung/grundregeln-potenz-faktor-und-summenregel-und-die-wichtigsten-ableitungen))
teile:
  - typ: term
    label: '$(x\cdot x)'' = $'
    loesung: "2*x"
    fehler:
      - wert: "1"
        meldung: |
          Du hast die Ableitungen der Faktoren multipliziert: $1\cdot 1 = 1$. Das ergibt aber nicht die
          Ableitung von $x^2$. Ein Produkt leitet man nicht faktorweise ab.
loesung: |
  Wir schreiben das Produkt als Potenz: $x\cdot x = x^2$. Potenzregel: $(x^2)' = 2x$.
  ---
  Das Produkt der einzelnen Ableitungen wäre $1\cdot 1 = 1$. Das ist falsch. Für Produkte braucht man eine eigene Regel.
```

Die Summenregel erlaubt es, Summen Stück für Stück abzuleiten. Für Produkte und Brüche gilt das
**nicht**, wie die Eingangsfrage zu $x\cdot x$ zeigt. Wenn zwei Funktionen miteinander multipliziert oder durcheinander
geteilt werden, brauchst du die **Produktregel** oder die **Quotientenregel**. Ein **Quotient** ist
ein Bruch, also „Zähler durch Nenner“.

### Die Produktregel

:::satz[Produktregel]
Sind $u$ und $v$ differenzierbare Funktionen, dann gilt
$$(u\cdot v)' = u'\cdot v + u\cdot v'.$$
:::

In Worten: Ableitung des ersten Faktors mal zweiter Faktor, plus erster Faktor mal Ableitung des
zweiten Faktors. Jeder Faktor wird also einmal abgeleitet, während der andere unverändert bleibt.
Kontrolle an $x\cdot x$: $u = v = x$, $u' = v' = 1$, also $1\cdot x + x\cdot 1 = 2x$. Das passt.

:::intuition[Warum die Produktregel stimmt: die wachsende Rechteckfläche]
Stell dir $u\cdot v$ als Fläche eines Rechtecks mit den Seiten $u$ und $v$ vor, zum Beispiel $u = 3$
und $v = 5$. Wächst $x$ ein wenig, wachsen die Seiten ein wenig, etwa um $\Delta u = 0{,}1$ und
$\Delta v = 0{,}2$. Die Fläche wächst dann um drei Stücke:

- einen Streifen $\Delta u\cdot v = 0{,}1\cdot 5 = 0{,}5$,
- einen Streifen $u\cdot\Delta v = 3\cdot 0{,}2 = 0{,}6$,
- ein winziges Eckstück $\Delta u\cdot\Delta v = 0{,}02$.

Das Eckstück ist „doppelt klein“, denn es ist das Produkt zweier kleiner Zahlen. Teilt man durch
$\Delta x$ und lässt $\Delta x$ gegen $0$ gehen, verschwindet es. Übrig bleiben die zwei Streifen,
also $u'v + uv'$.
:::

:::beispiel[Drei Produkte ableiten]
Bei jeder Produktregel schreibst du zuerst die vier Bausteine $u$, $u'$, $v$, $v'$ auf.

1. $f(x) = x^2\sin x$. Bausteine: $u = x^2$, $u' = 2x$, $v = \sin x$, $v' = \cos x$. Einsetzen:
   $f'(x) = 2x\sin x + x^2\cos x$.
2. $g(x) = (x^2 - 1)\,e^x$. Bausteine: $u = x^2 - 1$, $u' = 2x$, $v = e^x$, $v' = e^x$. Einsetzen:
   $g'(x) = 2x\,e^x + (x^2 - 1)\,e^x$. Beide Summanden enthalten $e^x$. Herausheben ergibt
   $g'(x) = (x^2 + 2x - 1)\,e^x$.
3. $k(x) = x\ln x$ für $x > 0$. Bausteine: $u = x$, $u' = 1$, $v = \ln x$, $v' = \frac1x$. Einsetzen:
   $k'(x) = 1\cdot\ln x + x\cdot\frac1x = \ln x + 1$.
:::

:::achtung[Produkt der Ableitungen statt Produktregel]
Für $f(x) = x^2\,e^x$ rechnet jemand
$$f'(x) = 2x\cdot e^x \qquad \text{(falsch).}$$
Das ist nur das Produkt der beiden Einzelableitungen. Es fehlt der zweite Summand, in dem $e^x$
abgeleitet wird und $x^2$ stehen bleibt. Richtig ist
$f'(x) = 2x\,e^x + x^2\,e^x = (x^2 + 2x)\,e^x$. Zahlenprobe an der Stelle $1$: Richtig ist
$3e \approx 8{,}15$, die falsche Rechnung liefert nur $2e \approx 5{,}44$.
:::

### Die Quotientenregel

:::satz[Quotientenregel]
Sind $u$ und $v$ differenzierbar und ist $v(x) \neq 0$, dann gilt
$$\left(\frac uv\right)' = \frac{u'\cdot v - u\cdot v'}{v^2}.$$
:::

Dabei ist $u$ der Zähler und $v$ der Nenner. Eine bekannte Merkhilfe lautet „**NAZ minus ZAN durch
N-Quadrat**“. Sie steht für „Nenner mal Ableitung des Zählers, minus Zähler mal Ableitung des
Nenners, alles durch den Nenner zum Quadrat“. Anders als bei der Produktregel ist die Reihenfolge im
Zähler wichtig. Wegen des Minus ändert ein Vertauschen das Vorzeichen.

:::beispiel[Einen Bruch und den Tangens ableiten]
1. $f(x) = \dfrac{x^2 + 1}{x - 1}$ für $x \neq 1$. Bausteine: $u = x^2 + 1$, $u' = 2x$, $v = x - 1$, $v' = 1$.
   Einsetzen in die Regel:
   $$f'(x) = \frac{2x\,(x - 1) - (x^2 + 1)\cdot 1}{(x - 1)^2} = \frac{2x^2 - 2x - x^2 - 1}{(x - 1)^2} = \frac{x^2 - 2x - 1}{(x - 1)^2}.$$
   Den Nenner lässt man in Klammern stehen. Ausmultiplizieren bringt nichts.
2. $\tan x = \dfrac{\sin x}{\cos x}$. Bausteine: $u = \sin x$, $u' = \cos x$, $v = \cos x$, $v' = -\sin x$.
   $$(\tan x)' = \frac{\cos x\cdot\cos x - \sin x\cdot(-\sin x)}{\cos^2 x} = \frac{\cos^2 x + \sin^2 x}{\cos^2 x} = \frac{1}{\cos^2 x}.$$
   Im letzten Schritt haben wir $\sin^2 x + \cos^2 x = 1$ verwendet ([Kapitel 5](/lernen/mathe3/trigonometrie)).
:::

:::tipp[Konstanter Zähler: lieber die Potenzregel]
Steht im Zähler nur eine Zahl, ist die Quotientenregel unnötig umständlich. Schreib den Bruch als
Potenz. Beispiel: $\frac{5}{x^2} = 5x^{-2}$, also $\left(\frac{5}{x^2}\right)' = -10x^{-3} = -\frac{10}{x^3}$.
Mit der Quotientenregel käme dasselbe heraus, nur mit mehr Schreibarbeit.
:::

:::achtung[Zähler der Quotientenregel in falscher Reihenfolge]
Für $f(x) = \dfrac{x}{x + 1}$ rechnet jemand „Zähler mal Ableitung des Nenners minus Nenner mal
Ableitung des Zählers“:
$$f'(x) = \frac{x\cdot 1 - (x + 1)\cdot 1}{(x + 1)^2} = \frac{-1}{(x + 1)^2} \qquad \text{(falsch).}$$
Richtig ist die Reihenfolge NAZ minus ZAN:
$f'(x) = \dfrac{(x + 1)\cdot 1 - x\cdot 1}{(x + 1)^2} = \dfrac{1}{(x + 1)^2}$. Plausibilitätsprobe:
$f(0) = 0$ und $f(1) = \frac12$, die Funktion steigt also. Die Ableitung muss positiv sein.
:::

:::merke[Rezept: Produkt- und Quotientenregel]
1. Erkennen: Ist die Funktion ein Produkt oder ein Bruch aus **zwei Funktionen**? Ein konstanter
   Faktor oder ein konstanter Zähler braucht keine dieser Regeln.
2. Die vier Bausteine $u$, $u'$, $v$, $v'$ getrennt aufschreiben.
3. In die Regel einsetzen. Bei Brüchen die Reihenfolge NAZ minus ZAN beachten.
4. Vereinfachen: gemeinsame Faktoren wie $e^x$ herausheben, im Zähler zusammenfassen, den Nenner
   in Klammern lassen.
:::

```reflexion
frage: Bei der Produktregel darf man die zwei Summanden vertauschen, bei der Quotientenregel die zwei Teile des Zählers nicht. Warum?
antwort: |
  In der Produktregel werden die zwei Summanden **addiert**. Bei einer Summe ist die Reihenfolge
  egal, $u'v + uv'$ ist dasselbe wie $uv' + u'v$.

  In der Quotientenregel steht im Zähler eine **Differenz**. Vertauscht man die beiden Teile, ändert
  sich das Vorzeichen des Ergebnisses: $a - b = -(b - a)$. Dann zeigt die berechnete Steigung genau in
  die falsche Richtung.
```

```aufgabe
id: dr-produktregel
titel: Produktregel anwenden
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Leite mit der Produktregel ab: $\;p_1(x) = x^3\cos x\;$ und $\;p_2(x) = (2x + 1)\,e^x$. Hebe bei $p_2$ den Faktor $e^x$ heraus.
teile:
  - typ: term
    label: '$p_1''(x)$'
    loesung: "3*x^2*cos(x) - x^3*sin(x)"
    fehler:
      - wert: "-3*x^2*sin(x)"
        meldung: |
          Das ist das Produkt der beiden Einzelableitungen $3x^2$ und $-\sin x$. Die Produktregel hat
          zwei Summanden: $u'v + uv'$.
      - wert: "3*x^2*cos(x) + x^3*sin(x)"
        meldung: 'Die Ableitung des Kosinus hat ein Minus: $(\cos x)'' = -\sin x$.'
  - typ: term
    label: '$p_2''(x)$'
    loesung: "(2*x + 3)*e^x"
    fehler:
      - wert: "2*e^x"
        meldung: 'Das ist nur $u''\cdot v''$. Es fehlen beide Summanden der Produktregel: $u''v + uv'' = 2e^x + (2x + 1)e^x$.'
      - wert: "(2*x + 1)*e^x"
        meldung: Du hast nur $u\cdot v'$ berechnet. Der Summand $u'\cdot v = 2e^x$ fehlt.
hinweise:
  - Schreibe zuerst $u$, $u'$, $v$, $v'$ auf, dann $(uv)' = u'v + uv'$.
loesung: |
  $p_1$: $u = x^3$, $u' = 3x^2$, $v = \cos x$, $v' = -\sin x$. Produktregel: $p_1'(x) = 3x^2\cos x - x^3\sin x$.
  ---
  $p_2$: $u = 2x + 1$, $u' = 2$, $v = e^x$, $v' = e^x$. Produktregel: $p_2'(x) = 2e^x + (2x + 1)e^x$.
  ---
  $e^x$ herausheben: $p_2'(x) = (2 + 2x + 1)\,e^x = (2x + 3)\,e^x$.
```

```aufgabe
id: dr-produkt-ln
titel: Produkt mit Logarithmus
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Gegeben ist $p(x) = x^2\ln x$ für $x > 0$. Bestimme $p'(x)$ und die Steigung an der Stelle $x = e$.
teile:
  - typ: term
    label: '$p''(x)$'
    loesung: "2*x*ln(x) + x"
    bereich: [0.5, 4]
    fehler:
      - wert: "2"
        meldung: 'Das ist $2x\cdot\frac1x$, also das Produkt der Einzelableitungen. Verwende $u''v + uv''$.'
      - wert: "2*x*ln(x)"
        meldung: 'Der zweite Summand $u\cdot v'' = x^2\cdot\frac1x = x$ fehlt.'
  - typ: zahl
    label: '$p''(e)$'
    loesung: "2*e*ln(e) + e"
    anzeige: '3e \approx 8{,}155'
    fehler:
      - wert: "e^2"
        meldung: '$e^2$ ist der Funktionswert $p(e) = e^2\cdot\ln e$. Gesucht ist die Steigung $p''(e)$.'
hinweise:
  - '$u = x^2$, $v = \ln x$, $v'' = \frac1x$. Und $\ln e = 1$.'
loesung: |
  Bausteine: $u = x^2$, $u' = 2x$, $v = \ln x$, $v' = \frac1x$. Produktregel: $p'(x) = 2x\ln x + x^2\cdot\frac1x = 2x\ln x + x$.
  ---
  An der Stelle $e$: $p'(e) = 2e\cdot\ln e + e = 2e + e = 3e \approx 8{,}155$, denn $\ln e = 1$.
```

```aufgabe
id: dr-quotient-konstant
titel: Konstanter Zähler, zwei Wege
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Leite $f(x) = \dfrac{3}{x^4}$ ab. Verwende die Potenzregel. Wer möchte, kontrolliert mit der Quotientenregel.
teile:
  - typ: term
    label: '$f''(x)$'
    loesung: "-12/x^5"
    bereich: [0.5, 3]
    fehler:
      - wert: "-12/x^3"
        meldung: 'Aus $x^{-4}$ wird $x^{-5}$, nicht $x^{-3}$: Die Hochzahl wird um $1$ kleiner, also $-4 - 1 = -5$.'
      - wert: "12/x^5"
        meldung: 'Das Vorzeichen fehlt. Die Hochzahl $-4$ wandert als Faktor nach vorne: $3\cdot(-4) = -12$.'
hinweise:
  - Schreibe $f(x) = 3x^{-4}$.
loesung: |
  Potenzregel: $f(x) = 3x^{-4}$, also $f'(x) = 3\cdot(-4)\,x^{-5} = -\dfrac{12}{x^5}$.
  ---
  Kontrolle mit der Quotientenregel: $u = 3$, $u' = 0$, $v = x^4$, $v' = 4x^3$. $\dfrac{0\cdot x^4 - 3\cdot 4x^3}{x^8} = -\dfrac{12x^3}{x^8} = -\dfrac{12}{x^5}$. Beide Wege liefern dasselbe.
```

```aufgabe
id: dr-quotientenregel
titel: Quotientenregel anwenden
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Leite ab und fasse den Zähler zusammen: $\;q_1(x) = \dfrac{3x - 2}{x^2 + 2}\;$ und $\;q_2(x) = \dfrac{e^x}{x}$ für $x \neq 0$.
teile:
  - typ: term
    label: '$q_1''(x)$'
    loesung: "(-3*x^2 + 4*x + 6)/(x^2 + 2)^2"
    fehler:
      - wert: "(3*x^2 - 4*x - 6)/(x^2 + 2)^2"
        meldung: |
          Das Vorzeichen des ganzen Ergebnisses ist falsch. Du hast im Zähler „ZAN minus NAZ“ gerechnet.
          Richtig ist Nenner mal Ableitung des Zählers **zuerst**: $3(x^2 + 2) - (3x - 2)\cdot 2x$.
      - wert: "3/(2*x)"
        meldung: Das ist Ableitung des Zählers durch Ableitung des Nenners. Einen Bruch leitet man so nicht ab, sondern mit der Quotientenregel.
  - typ: term
    label: '$q_2''(x)$'
    loesung: "(x - 1)*e^x/x^2"
    bereich: [0.5, 4]
    fehler:
      - wert: "e^x"
        meldung: 'Das ist $\frac{(e^x)''}{(x)''} = \frac{e^x}{1}$. Verwende die Quotientenregel $\frac{u''v - uv''}{v^2}$.'
hinweise:
  - '„NAZ minus ZAN durch N-Quadrat“: $\left(\frac uv\right)'' = \frac{u''v - uv''}{v^2}$.'
  - 'Bei $q_1$: $u = 3x - 2$, $u'' = 3$, $v = x^2 + 2$, $v'' = 2x$. Multipliziere im Zähler aus und fasse zusammen.'
loesung: |
  Ansatz: Beide Funktionen sind Brüche aus zwei Funktionen, also Quotientenregel.
  ---
  $q_1$: $u = 3x - 2$, $u' = 3$, $v = x^2 + 2$, $v' = 2x$.
  $$q_1'(x) = \frac{3(x^2 + 2) - (3x - 2)\cdot 2x}{(x^2 + 2)^2} = \frac{3x^2 + 6 - 6x^2 + 4x}{(x^2 + 2)^2} = \frac{-3x^2 + 4x + 6}{(x^2 + 2)^2}.$$
  ---
  $q_2$: $u = e^x$, $u' = e^x$, $v = x$, $v' = 1$. $q_2'(x) = \dfrac{e^x\cdot x - e^x\cdot 1}{x^2} = \dfrac{(x - 1)\,e^x}{x^2}$.
  ---
  Kontrolle bei $q_2$: An der Stelle $x = 1$ ist $q_2'(1) = 0$. Tatsächlich hat $\frac{e^x}{x}$ für $x > 0$ dort seinen tiefsten Punkt mit dem Wert $e$.
```

```aufgabe
id: dr-quotient-schritte
titel: Quotientenregel Schritt für Schritt
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Gegeben ist $f(x) = \dfrac{x^2}{x + 1}$ für $x \neq -1$.

  a) Bestimme $f'(x)$ und fasse den Zähler zusammen.

  b) An welchen Stellen hat der Graph eine waagrechte Tangente?
teile:
  - typ: term
    label: 'a) $f''(x)$'
    loesung: "(x^2 + 2*x)/(x + 1)^2"
    bereich: [0, 3]
    fehler:
      - wert: "-(x^2 + 2*x)/(x + 1)^2"
        meldung: Das Vorzeichen ist umgedreht. Im Zähler kommt zuerst „Nenner mal Ableitung des Zählers“, also $(x + 1)\cdot 2x$.
      - wert: "2*x"
        meldung: Ableitung des Zählers durch Ableitung des Nenners ist $\frac{2x}{1}$. So leitet man einen Bruch nicht ab.
  - typ: menge
    label: 'b) Stellen mit waagrechter Tangente'
    loesung: ["0", "-2"]
    fehler:
      - wert: ["0"]
        meldung: 'Der Zähler $x^2 + 2x = x\,(x + 2)$ hat zwei Nullstellen. Vergiss die zweite nicht.'
hinweise:
  - '$u = x^2$, $u'' = 2x$, $v = x + 1$, $v'' = 1$.'
  - Ein Bruch ist null, wenn sein Zähler null ist und der Nenner nicht.
gefuehrt:
  - text: Wie lautet die Ableitung des Zählers $u = x^2$?
    teil: { typ: term, loesung: "2*x" }
    erklaerung: Potenzregel, $u' = 2x$.
  - text: Wie lautet die Ableitung des Nenners $v = x + 1$?
    teil: { typ: zahl, loesung: "1" }
    erklaerung: Die Konstante $1$ fällt weg, übrig bleibt $v' = 1$.
  - text: 'Berechne den Zähler der Quotientenregel, $u''v - uv'' = 2x\,(x + 1) - x^2\cdot 1$, und fasse zusammen.'
    teil: { typ: term, loesung: "x^2 + 2*x" }
    erklaerung: $2x^2 + 2x - x^2 = x^2 + 2x$. Der Nenner ist $(x + 1)^2$.
  - text: Berechne $f'(1)$.
    teil: { typ: zahl, loesung: "3/4" }
    erklaerung: $f'(1) = \frac{1 + 2}{2^2} = \frac34$.
loesung: |
  Ansatz: Bruch aus zwei Funktionen, also Quotientenregel mit $u = x^2$, $u' = 2x$, $v = x + 1$, $v' = 1$.
  ---
  a) $f'(x) = \dfrac{2x\,(x + 1) - x^2\cdot 1}{(x + 1)^2} = \dfrac{2x^2 + 2x - x^2}{(x + 1)^2} = \dfrac{x^2 + 2x}{(x + 1)^2}$.
  ---
  b) Waagrechte Tangente heißt $f'(x) = 0$. Ein Bruch ist null, wenn der Zähler null ist: $x^2 + 2x = x\,(x + 2) = 0$, also $x = 0$ oder $x = -2$. Der Nenner ist dort $1$, nicht null.
  ---
  Probe: $f'(0) = \frac{0}{1} = 0$ und $f'(-2) = \frac{4 - 4}{1} = 0$.
```

```aufgabe
id: dr-produkt-fehler-finden
titel: Fehler in einer Produktregel finden
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: |
  Eine Mitschülerin leitet $f(x) = x\sin x$ ab und schreibt: „$f'(x) = \sin x + \cos x$.“

  a) Was hat sie falsch gemacht?

  b) Berechne die richtige Steigung $f'(\pi)$.
teile:
  - typ: auswahl
    label: 'a) Der Fehler:'
    optionen:
      - 'Im zweiten Summanden fehlt der Faktor $x$. Richtig ist $x\cos x$.'
      - 'Die Ableitung von $\sin x$ ist $-\cos x$.'
      - 'Der erste Summand müsste $x\sin x$ heißen.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$(\sin x)'' = \cos x$ ohne Minus. Das Minus gehört zur Ableitung des Kosinus.'
      - wert: 2
        meldung: 'Der erste Summand ist $u''\cdot v = 1\cdot\sin x$. Der stimmt.'
  - typ: zahl
    label: 'b) $f''(\pi)$'
    loesung: "sin(pi) + pi*cos(pi)"
    anzeige: '-\pi \approx -3{,}142'
    fehler:
      - wert: "-1"
        meldung: 'Das ist der Wert der falschen Ableitung $\sin\pi + \cos\pi$. Mit dem fehlenden Faktor $x$ wird daraus $\sin\pi + \pi\cos\pi$.'
hinweise:
  - 'Schreibe die vier Bausteine auf: $u = x$, $u'' = 1$, $v = \sin x$, $v'' = \cos x$.'
  - '$\sin\pi = 0$ und $\cos\pi = -1$.'
loesung: |
  Ansatz: Produktregel mit $u = x$, $u' = 1$, $v = \sin x$, $v' = \cos x$.
  ---
  a) Richtig ist $f'(x) = 1\cdot\sin x + x\cdot\cos x$. Im zweiten Summanden muss der **unabgeleitete** erste Faktor $x$ stehen bleiben. Er fehlt bei der Mitschülerin.
  ---
  b) $f'(\pi) = \sin\pi + \pi\cos\pi = 0 + \pi\cdot(-1) = -\pi \approx -3{,}142$. Die falsche Formel liefert $-1$, also eine viel zu flache Steigung.
```

```aufgabe
id: dr-quotient-sekans
titel: Ableitung von 1/cos x
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Leite $f(x) = \dfrac{1}{\cos x}$ für $-\frac{\pi}{2} < x < \frac{\pi}{2}$ mit der Quotientenregel ab und berechne $f'\big(\frac{\pi}{4}\big)$.
teile:
  - typ: term
    label: '$f''(x)$'
    loesung: "sin(x)/cos(x)^2"
    bereich: [-1, 1]
    fehler:
      - wert: "-sin(x)/cos(x)^2"
        meldung: |
          Prüfe das Vorzeichen. Der Zähler ist $0\cdot\cos x - 1\cdot(-\sin x) = +\sin x$. Zwei Minus ergeben Plus.
      - wert: "-1/sin(x)"
        meldung: 'Das ist $\frac{1}{(\cos x)''}$. Der Kehrwert der Ableitung ist nicht die Ableitung des Kehrwerts.'
  - typ: zahl
    label: '$f''(\pi/4)$'
    loesung: "sin(pi/4)/cos(pi/4)^2"
    anzeige: '\sqrt2 \approx 1{,}414'
    fehler:
      - wert: "-sqrt(2)"
        meldung: 'Im ersten Quadranten ist $\sin x > 0$, die Ableitung ist dort also positiv.'
hinweise:
  - '$u = 1$, $u'' = 0$, $v = \cos x$, $v'' = -\sin x$.'
  - '$\sin\frac{\pi}{4} = \cos\frac{\pi}{4} = \frac{\sqrt2}{2}$, also $\cos^2\frac{\pi}{4} = \frac12$.'
loesung: |
  Ansatz: Quotientenregel mit $u = 1$, $u' = 0$, $v = \cos x$, $v' = -\sin x$.
  ---
  $f'(x) = \dfrac{0\cdot\cos x - 1\cdot(-\sin x)}{\cos^2 x} = \dfrac{\sin x}{\cos^2 x}$.
  ---
  $f'(\frac{\pi}{4}) = \dfrac{\frac{\sqrt2}{2}}{\frac12} = \sqrt2 \approx 1{,}414$.
  ---
  Plausibilität: $\frac{1}{\cos x}$ hat bei $0$ seinen kleinsten Wert $1$ und wächst nach rechts. Eine positive Steigung bei $\frac{\pi}{4}$ passt dazu.
```

```aufgabe
id: dr-quotient-medikament
titel: Konzentration eines Medikaments
niveau: 3
lernziel: 3
kompetenz: modellieren
angabe: |
  Die Konzentration eines Wirkstoffs im Blut wird durch $c(t) = \dfrac{20t}{t^2 + 4}$ beschrieben.
  Dabei ist $t$ die Zeit in Stunden nach der Einnahme und $c$ die Konzentration in Milligramm pro Liter.

  a) Bestimme $c'(t)$ und fasse den Zähler zusammen.

  b) Berechne $c'(1)$ und deute den Wert mit Einheit.

  c) Zu welchem Zeitpunkt ist die Konzentration am höchsten? Wie hoch ist sie dann?
teile:
  - typ: term
    label: 'a) $c''(t)$'
    variable: t
    loesung: "(80 - 20*t^2)/(t^2 + 4)^2"
    bereich: [0, 5]
    fehler:
      - wert: "(20*t^2 - 80)/(t^2 + 4)^2"
        meldung: Das Vorzeichen ist vertauscht. Im Zähler steht zuerst Nenner mal Ableitung des Zählers, $20\,(t^2 + 4)$.
      - wert: "10/t"
        meldung: 'Das ist $\frac{20}{2t}$, also Ableitung durch Ableitung. Verwende die Quotientenregel.'
  - typ: zahl
    label: 'b) $c''(1)$'
    einheit: mg/(l·h)
    loesung: "(80 - 20)/(1 + 4)^2"
    anzeige: '2{,}4'
    fehler:
      - wert: "4"
        meldung: '$4$ mg pro Liter ist die Konzentration $c(1) = \frac{20}{5}$. Gefragt ist die Änderungsrate $c''(1)$.'
  - typ: zahl
    label: 'c) Zeitpunkt der höchsten Konzentration'
    einheit: h
    loesung: "2"
    fehler:
      - wert: "4"
        meldung: 'Aus $80 - 20t^2 = 0$ folgt $t^2 = 4$. Das ist aber erst $t^2$. Zieh noch die Wurzel, um $t$ zu erhalten.'
  - typ: zahl
    label: 'c) höchste Konzentration'
    einheit: mg/l
    loesung: "20*2/(2^2 + 4)"
    anzeige: '5'
hinweise:
  - 'Quotientenregel mit $u = 20t$, $u'' = 20$, $v = t^2 + 4$, $v'' = 2t$.'
  - 'Höchste Konzentration: Dort ist die Tangente waagrecht, also $c''(t) = 0$. Prüfe, dass $c''$ dort von $+$ nach $-$ wechselt.'
loesung: |
  Ansatz: $c$ ist ein Bruch aus zwei Funktionen von $t$. Die Ableitung ist die Änderungsrate der Konzentration in mg pro Liter und Stunde.
  ---
  a) $c'(t) = \dfrac{20\,(t^2 + 4) - 20t\cdot 2t}{(t^2 + 4)^2} = \dfrac{20t^2 + 80 - 40t^2}{(t^2 + 4)^2} = \dfrac{80 - 20t^2}{(t^2 + 4)^2}$.
  ---
  b) $c'(1) = \dfrac{80 - 20}{25} = 2{,}4$. Eine Stunde nach der Einnahme steigt die Konzentration um etwa $2{,}4$ mg pro Liter und Stunde.
  ---
  c) $c'(t) = 0$ verlangt $80 - 20t^2 = 0$, also $t^2 = 4$ und $t = 2$ (nur $t \ge 0$ ist sinnvoll). Für $t < 2$ ist der Zähler positiv, für $t > 2$ negativ. Die Konzentration steigt also bis $t = 2$ und fällt danach.
  ---
  Höchste Konzentration: $c(2) = \dfrac{40}{8} = 5$ mg pro Liter, zwei Stunden nach der Einnahme.
```

## Kettenregel, höhere Ableitungen und die Wahl der richtigen Regel

```aufgabe
id: dr-check-innen-aussen
titel: Was wird zuerst berechnet?
niveau: 1
art: check
angabe: |
  Du berechnest $h(x) = (3x + 1)^4$ für $x = 2$ mit dem Taschenrechner. Was rechnest du zuerst?
  (Herkunft: [Kapitel 4, „Verkettung und Umkehrfunktion“](/lernen/mathe3/funktionen))
teile:
  - typ: auswahl
    optionen: ['$3\cdot 2 + 1 = 7$, danach $7^4$', '$2^4 = 16$, danach $3\cdot 16 + 1$', '$3\cdot 2^4$, danach $+1$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die Klammer wird zuerst ausgerechnet. Die Hochzahl $4$ gilt für die ganze Klammer, nicht nur für $x$.
      - wert: 2
        meldung: Die Hochzahl $4$ wirkt auf die ganze Klammer $(3x + 1)$, nicht nur auf $x$.
loesung: |
  Zuerst wird die Klammer berechnet: $3\cdot 2 + 1 = 7$. Das ist die **innere** Funktion.
  ---
  Danach wird das Ergebnis hoch $4$ genommen: $7^4 = 2401$. Das ist die **äußere** Funktion.
```

Viele Funktionen sind **verkettet**: Man setzt das Ergebnis einer Funktion in eine zweite ein. Bei
$h(x) = (3x^2 + 1)^5$ rechnet man zuerst $u = 3x^2 + 1$. Das heißt **innere Funktion**. Danach rechnet
man $u^5$. Das heißt **äußere Funktion**. Verkettungen erkennst du daran, dass statt eines einfachen
$x$ ein ganzer Ausdruck in einer Funktion steht. Dieser Ausdruck kann in einer Klammer mit Hochzahl
stehen, in einer Hochzahl, unter einer Wurzel oder im Argument von $\sin$, $\cos$ oder $\ln$.

### Die Kettenregel

:::satz[Kettenregel]
Ist $h(x) = f\big(g(x)\big)$ mit differenzierbaren Funktionen $f$ und $g$, dann gilt
$$h'(x) = f'\big(g(x)\big)\cdot g'(x).$$
:::

Dabei ist $g$ die innere und $f$ die äußere Funktion. In Worten: **äußere Ableitung mal innere
Ableitung**. Die äußere Ableitung $f'$ wird dabei an der Stelle $g(x)$ ausgewertet. Die innere
Funktion bleibt also in der äußeren Ableitung unverändert stehen.

:::intuition[Warum man die Änderungsraten multipliziert]
Stell dir drei Zahnräder vor. Das mittlere Rad dreht sich doppelt so schnell wie das erste. Das
letzte dreht sich dreimal so schnell wie das mittlere. Dann dreht sich das letzte sechsmal so schnell
wie das erste. Die Übersetzungen multiplizieren sich.

Genauso hier: Ändert sich die innere Funktion $u = g(x)$ mit der Rate $g'(x)$ und die äußere mit der
Rate $f'(u)$, dann ändert sich das Ganze mit der Rate $f'(u)\cdot g'(x)$. In der Leibniz-Schreibweise
sieht das aus wie Kürzen von Brüchen: $\dfrac{\dd y}{\dd x} = \dfrac{\dd y}{\dd u}\cdot\dfrac{\dd u}{\dd x}$.
:::

:::beispiel[Fünf Verkettungen ableiten]
Bei jeder Kettenregel bestimmst du zuerst innen und außen.

1. $h(x) = (3x^2 + 1)^5$. Innen $u = 3x^2 + 1$ mit $u' = 6x$, außen $u^5$ mit Ableitung $5u^4$.
   Also $h'(x) = 5\,(3x^2 + 1)^4\cdot 6x = 30x\,(3x^2 + 1)^4$.
2. $h(x) = e^{-0{,}5x^2}$. Innen $u = -0{,}5x^2$ mit $u' = -x$, außen $e^u$ mit Ableitung $e^u$.
   Also $h'(x) = e^{-0{,}5x^2}\cdot(-x) = -x\,e^{-0{,}5x^2}$.
3. $h(x) = \sin(2x + 1)$. Innen $u = 2x + 1$ mit $u' = 2$, außen $\sin u$ mit Ableitung $\cos u$.
   Also $h'(x) = 2\cos(2x + 1)$.
4. $h(x) = \ln(x^2 + 1)$. Innen $u = x^2 + 1$ mit $u' = 2x$, außen $\ln u$ mit Ableitung $\frac1u$.
   Also $h'(x) = \dfrac{2x}{x^2 + 1}$.
5. $h(x) = \sqrt{x^2 + 9}$. Innen $u = x^2 + 9$ mit $u' = 2x$, außen $\sqrt u$ mit Ableitung $\frac{1}{2\sqrt u}$.
   Also $h'(x) = \dfrac{2x}{2\sqrt{x^2 + 9}} = \dfrac{x}{\sqrt{x^2 + 9}}$.
:::

Ein Spezialfall kommt so oft vor, dass du ihn auswendig kennen solltest. Ist die innere Funktion
linear, also $kx + d$, dann ist die innere Ableitung einfach die Zahl $k$:
$$\big(e^{kx}\big)' = k\,e^{kx}, \qquad \big(\sin(kx)\big)' = k\cos(kx), \qquad \big(f(kx + d)\big)' = k\cdot f'(kx + d).$$

:::achtung[Innere Ableitung vergessen]
Jemand leitet ab:
$$\big(e^{3x}\big)' = e^{3x} \qquad\text{und}\qquad \big(\sin(x^2)\big)' = \cos(x^2) \qquad \text{(beide falsch).}$$
In beiden Fällen fehlt der Faktor „innere Ableitung“. Richtig ist $\big(e^{3x}\big)' = 3e^{3x}$ und
$\big(\sin(x^2)\big)' = 2x\cos(x^2)$. Zahlenprobe für die e-Funktion an der Stelle $0$: Der
Differenzenquotient $\frac{e^{0{,}003} - 1}{0{,}001} \approx 3{,}005$ zeigt die Steigung $3$, nicht $1$.
:::

:::achtung[Äußere Ableitung an der falschen Stelle ausgewertet]
Für $h(x) = (2x + 1)^3$ schreibt jemand
$$h'(x) = 3x^2\cdot 2 = 6x^2 \qquad \text{(falsch).}$$
Die äußere Funktion ist „hoch 3“. Ihre Ableitung $3u^2$ muss an der Stelle $u = 2x + 1$ ausgewertet
werden, nicht an der Stelle $x$. Richtig ist $h'(x) = 3\,(2x + 1)^2\cdot 2 = 6\,(2x + 1)^2$. Die
Klammer bleibt beim Ableiten erhalten.
:::

### Exponentialfunktionen mit beliebiger Basis: warum der Faktor ln a kommt

Jede positive Zahl $a$ lässt sich als Potenz von $e$ schreiben, nämlich $a = e^{\ln a}$. Das ist die
Definition des natürlichen Logarithmus. Damit wird
$$a^x = \big(e^{\ln a}\big)^x = e^{x\ln a}.$$
Jetzt ist $a^x$ eine Verkettung mit der inneren Funktion $x\cdot\ln a$. Deren Ableitung ist die
Konstante $\ln a$. Die Kettenregel liefert
$$\big(a^x\big)' = e^{x\ln a}\cdot\ln a = a^x\cdot\ln a.$$

:::beispiel[Eine Exponentialfunktion auf die Basis e umschreiben]
Gegeben ist $f(x) = 6\cdot 3^x$. Gesucht ist die Form $f(x) = \alpha\,e^{\lambda x}$ und die Ableitung.

1. Wegen $3 = e^{\ln 3}$ ist $3^x = e^{(\ln 3)\,x}$. Also ist $f(x) = 6\,e^{(\ln 3)\,x}$ mit $\alpha = 6$
   und $\lambda = \ln 3 \approx 1{,}0986$.
2. Kettenregel mit innerer Ableitung $\lambda$: $f'(x) = 6\cdot\ln 3\cdot e^{(\ln 3)\,x} = 6\ln 3\cdot 3^x$.
3. Probe an der Stelle $1$: $f'(1) = 18\ln 3 \approx 19{,}775$. Der Differenzenquotient
   $\frac{f(1{,}001) - f(1)}{0{,}001} \approx 19{,}786$ passt dazu.
:::

Mit demselben Gedanken folgt auch die Regel $(\log_a x)' = \frac{1}{x\ln a}$, die du in
[9.5 Grundregeln](/lernen/mathe3/differentialrechnung/grundregeln-potenz-faktor-und-summenregel-und-die-wichtigsten-ableitungen) schon über den Basiswechsel gesehen hast.

### Höhere Ableitungen

Die Ableitung $f'$ ist selbst wieder eine Funktion. Meist kann man sie noch einmal ableiten. So
entsteht die **zweite Ableitung** $f'' = (f')'$, gelesen „$f$ zwei Strich“. Leitet man weiter ab,
erhält man die dritte Ableitung $f'''$ und allgemein die $n$-te Ableitung $f^{(n)}$.

:::beispiel[Ableitungen bis null]
Für $f(x) = x^4 - 2x^3 + 5x$ ist

- $f'(x) = 4x^3 - 6x^2 + 5$,
- $f''(x) = 12x^2 - 12x$,
- $f'''(x) = 24x - 12$,
- $f^{(4)}(x) = 24$ und $f^{(5)}(x) = 0$.

Jede Ableitung senkt den Grad eines Polynoms um $1$. Ein Polynom vom Grad $n$ wird deshalb nach
$n + 1$ Ableitungen zu $0$. Bei der e-Funktion ist es anders: $(e^{2x})' = 2e^{2x}$, $(e^{2x})'' = 4e^{2x}$,
und die $n$-te Ableitung ist $2^n e^{2x}$. Sie wird nie null.
:::

Die zweite Ableitung beschreibt, wie sich die **Steigung** ändert. Bei einer Weg-Zeit-Funktion $s(t)$
ist $s'(t)$ die Geschwindigkeit und $s''(t)$ die Beschleunigung. Am Graphen beschreibt $f''$ die
**Krümmung**. Beides lernst du in [9.12 Krümmung und Wendepunkte](/lernen/mathe3/differentialrechnung/kruemmung-und-wendepunkte) und [9.15 Bewegung und Wachstum](/lernen/mathe3/differentialrechnung/anwendungen-in-physik-und-biologie-bewegung-und-wachstum) genauer kennen.

### Welche Regel passt?

:::merke[Rezept: eine zusammengesetzte Funktion ableiten]
1. **Umschreiben:** Wurzeln und Brüche mit $x$ im Nenner als Potenzen, Logarithmen mit den
   Rechenregeln zerlegen, zum Beispiel $\ln(x^3) = 3\ln x$.
2. **Die äußerste Struktur erkennen.** Frag dich: Was würde der Taschenrechner **zuletzt** rechnen?
   Ein Plus oder Minus heißt Summenregel. Ein Mal zwischen zwei Funktionen heißt Produktregel. Ein
   Bruchstrich zwischen zwei Funktionen heißt Quotientenregel. Eine Funktion von einem Ausdruck heißt Kettenregel.
3. **Die Regel anwenden** und für die Teile wieder bei Schritt 2 beginnen, von außen nach innen.
4. **Vereinfachen:** gemeinsame Faktoren wie $e^{kx}$ herausheben, Brüche zusammenfassen.
:::

Ein Beispiel für Schritt 2: Bei $x^2\,e^{3x}$ rechnet der Taschenrechner zuletzt das Mal zwischen
$x^2$ und $e^{3x}$. Außen steht also die Produktregel. Innerhalb davon braucht $e^{3x}$ noch die
Kettenregel. Ergebnis: $2x\,e^{3x} + x^2\cdot 3e^{3x} = (3x^2 + 2x)\,e^{3x}$.

**Ausblick:** Auch Umkehrfunktionen wie $\arcsin$ und $\arctan$ lassen sich ableiten. Das zeigt die Lektion
[9.8 Implizites Differenzieren und Umkehrfunktionen](/lernen/mathe3/differentialrechnung/implizites-differenzieren-und-umkehrfunktionen-vertiefung). Die exakte Begründung steht in
[Kapitel 13](/lernen/mathe3/differenzierbarkeit).

```reflexion
frage: Warum bleibt bei der Kettenregel die innere Funktion in der äußeren Ableitung stehen, zum Beispiel $(2x + 1)^2$ in $\big((2x + 1)^3\big)' = 3\,(2x + 1)^2\cdot 2$?
antwort: |
  Die äußere Funktion „hoch 3“ bekommt als Eingabe nicht $x$, sondern den Wert $u = 2x + 1$. Ihre
  Steigung hängt davon ab, **wo** sie gerade ausgewertet wird. Bei der Eingabe $u$ ist diese Steigung $3u^2$.

  Deshalb setzt man in die äußere Ableitung genau die Eingabe ein, die die äußere Funktion
  tatsächlich bekommt, also $u = 2x + 1$. Der Faktor $2$ berücksichtigt danach, dass sich $u$ doppelt
  so schnell ändert wie $x$.
```

```aufgabe
id: dr-kettenregel
titel: Kettenregel mit linearer innerer Funktion
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Leite ab:
  $$k_1(x) = (4x - 3)^5, \qquad k_2(x) = e^{-2x}, \qquad k_3(x) = \cos(3x).$$
teile:
  - typ: term
    label: '$k_1''(x)$'
    loesung: "20*(4*x - 3)^4"
    fehler:
      - wert: "5*(4*x - 3)^4"
        meldung: Die innere Ableitung fehlt. Die Klammer $4x - 3$ hat die Ableitung $4$, also kommt der Faktor $4$ dazu.
  - typ: term
    label: '$k_2''(x)$'
    loesung: "-2*e^(-2*x)"
    fehler:
      - wert: "e^(-2*x)"
        meldung: 'Die innere Funktion $-2x$ hat die Ableitung $-2$. Dieser Faktor fehlt: $\big(e^{kx}\big)'' = k\,e^{kx}$.'
  - typ: term
    label: '$k_3''(x)$'
    loesung: "-3*sin(3*x)"
    fehler:
      - wert: "-sin(3*x)"
        meldung: Die innere Ableitung $3$ fehlt.
      - wert: "3*sin(3*x)"
        meldung: 'Die Ableitung des Kosinus hat ein Minus: $(\cos u)'' = -\sin u$.'
hinweise:
  - 'Bei linearer innerer Funktion $kx + d$ ist die innere Ableitung einfach die Zahl $k$.'
loesung: |
  $k_1$: außen $u^5$, innen $u = 4x - 3$ mit $u' = 4$. Also $k_1'(x) = 5\,(4x - 3)^4\cdot 4 = 20\,(4x - 3)^4$.
  ---
  $k_2$: außen $e^u$, innen $u = -2x$ mit $u' = -2$. Also $k_2'(x) = -2e^{-2x}$.
  ---
  $k_3$: außen $\cos u$ mit Ableitung $-\sin u$, innen $u = 3x$ mit $u' = 3$. Also $k_3'(x) = -3\sin(3x)$.
```

```aufgabe
id: dr-welche-regel
titel: 'Welche Regel passt? Zuerst die Struktur erkennen'
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  Entscheide für jede Funktion, welche Regel du **als Erstes** anwendest. Du musst nichts ausrechnen.

  $f_1(x) = x^2\,e^x$, $\quad f_2(x) = e^{x^2}$, $\quad f_3(x) = \dfrac{x + 1}{x - 1}$, $\quad f_4(x) = \dfrac{5}{x^3}$.
teile:
  - typ: auswahl
    label: '$f_1(x) = x^2\,e^x$'
    optionen: ['Produktregel', 'Quotientenregel', 'Kettenregel', 'Potenzregel nach Umschreiben']
    richtig: [0]
    fehler:
      - wert: 2
        meldung: 'Bei $x^2\,e^x$ steht im Exponenten nur $x$. Zuletzt wird das Mal zwischen den zwei Funktionen $x^2$ und $e^x$ berechnet.'
  - typ: auswahl
    label: '$f_2(x) = e^{x^2}$'
    optionen: ['Produktregel', 'Quotientenregel', 'Kettenregel', 'Potenzregel nach Umschreiben']
    richtig: [2]
    fehler:
      - wert: 3
        meldung: '$e^{x^2}$ ist keine Potenz mit fester Hochzahl. Die e-Funktion hat hier den Ausdruck $x^2$ als Eingabe. Das ist eine Verkettung.'
      - wert: 0
        meldung: 'In $e^{x^2}$ wird nichts multipliziert. Das $x^2$ steht **in** der Hochzahl.'
  - typ: auswahl
    label: '$f_3(x) = \dfrac{x + 1}{x - 1}$'
    optionen: ['Produktregel', 'Quotientenregel', 'Kettenregel', 'Potenzregel nach Umschreiben']
    richtig: [1]
    fehler:
      - wert: 3
        meldung: Im Zähler steht eine Funktion, nicht eine Zahl. Deshalb lässt sich der Bruch nicht einfach als Potenz schreiben.
  - typ: auswahl
    label: '$f_4(x) = \dfrac{5}{x^3}$ (am wenigsten Arbeit)'
    optionen: ['Produktregel', 'Quotientenregel', 'Kettenregel', 'Potenzregel nach Umschreiben']
    richtig: [3]
    fehler:
      - wert: 1
        meldung: 'Die Quotientenregel funktioniert, ist hier aber unnötig umständlich. Mit konstantem Zähler ist $\frac{5}{x^3} = 5x^{-3}$ schneller.'
hinweise:
  - Frag dich, was der Taschenrechner bei der Berechnung eines Funktionswerts zuletzt rechnet.
loesung: |
  Ansatz: Die äußerste Struktur ist die Rechenoperation, die zuletzt ausgeführt wird.
  ---
  $f_1$: zuletzt das Mal zwischen $x^2$ und $e^x$, also Produktregel. $f_2$: zuletzt „$e$ hoch“, angewendet auf $x^2$, also Kettenregel.
  ---
  $f_3$: zuletzt der Bruchstrich zwischen zwei Funktionen, also Quotientenregel. $f_4$: konstanter Zähler, also umschreiben zu $5x^{-3}$ und Potenzregel. Ergebnis $f_4'(x) = -15x^{-4}$.
```

```aufgabe
id: dr-hoehere-ableitungen
titel: Höhere Ableitungen eines Polynoms
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Bestimme für $f(x) = 2x^5 - 3x^2 + x$ die zweite und die dritte Ableitung sowie den Wert $f''(-1)$.
teile:
  - typ: term
    label: '$f''''(x)$'
    loesung: "40*x^3 - 6"
    fehler:
      - wert: "10*x^4 - 6*x + 1"
        meldung: Das ist erst die **erste** Ableitung $f'(x)$. Leite sie noch einmal ab.
  - typ: term
    label: '$f''''''(x)$'
    loesung: "120*x^2"
    fehler:
      - wert: "120*x^2 - 6"
        meldung: Die Konstante $-6$ in $f''$ hat die Ableitung $0$ und fällt weg.
  - typ: zahl
    label: '$f''''(-1)$'
    loesung: "40*(-1)^3 - 6"
    anzeige: '-46'
    fehler:
      - wert: "17"
        meldung: '$17$ ist $f''(-1) = 10 + 6 + 1$, also der Wert der **ersten** Ableitung. Gesucht ist die zweite.'
hinweise:
  - Leite Schritt für Schritt ab, jedes Mal mit der Potenzregel.
loesung: |
  Erste Ableitung: $f'(x) = 10x^4 - 6x + 1$.
  ---
  Zweite Ableitung: $f''(x) = 40x^3 - 6$. Dritte Ableitung: $f'''(x) = 120x^2$.
  ---
  Einsetzen: $f''(-1) = 40\cdot(-1) - 6 = -46$.
```

```aufgabe
id: dr-kette-gemischt
titel: Kettenregel mit nichtlinearer innerer Funktion
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Leite ab:
  $$k_1(x) = \sqrt{2x^2 + 1}, \qquad k_2(x) = \sin^2 x, \qquad k_3(x) = e^{x^2 - x}.$$
teile:
  - typ: term
    label: '$k_1''(x)$'
    loesung: "2*x/sqrt(2*x^2 + 1)"
    fehler:
      - wert: "1/(2*sqrt(2*x^2 + 1))"
        meldung: 'Die innere Ableitung $(2x^2 + 1)'' = 4x$ fehlt. Zusammen mit $\frac{1}{2\sqrt u}$ ergibt sich $\frac{4x}{2\sqrt{2x^2 + 1}}$.'
  - typ: term
    label: '$k_2''(x)$'
    loesung: "2*sin(x)*cos(x)"
    fehler:
      - wert: "2*sin(x)"
        meldung: '$\sin^2 x$ bedeutet $(\sin x)^2$. Außen steht das Quadrieren mit Ableitung $2u$, innen der Sinus mit Ableitung $\cos x$. Dieser Faktor fehlt.'
      - wert: "2*cos(x)"
        meldung: 'Die äußere Ableitung $2u$ muss an der Stelle $u = \sin x$ ausgewertet werden. Richtig ist $2\sin x\cdot\cos x$.'
  - typ: term
    label: '$k_3''(x)$'
    loesung: "(2*x - 1)*e^(x^2 - x)"
    bereich: [-1.5, 2]
    fehler:
      - wert: "e^(x^2 - x)"
        meldung: Die innere Ableitung $(x^2 - x)' = 2x - 1$ fehlt.
hinweise:
  - 'Bestimme jeweils innen und außen. $\sin^2 x$ ist $(\sin x)^2$.'
  - 'Äußere Ableitungen: $(\sqrt u)'' = \frac{1}{2\sqrt u}$, $(u^2)'' = 2u$, $(e^u)'' = e^u$.'
loesung: |
  Ansatz: In allen drei Funktionen steht ein Ausdruck an der Stelle von $x$. Wir bestimmen innen und außen und multiplizieren die Ableitungen.
  ---
  $k_1$: innen $u = 2x^2 + 1$, $u' = 4x$, außen $\sqrt u$. $k_1'(x) = \dfrac{4x}{2\sqrt{2x^2 + 1}} = \dfrac{2x}{\sqrt{2x^2 + 1}}$.
  ---
  $k_2$: innen $u = \sin x$, $u' = \cos x$, außen $u^2$. $k_2'(x) = 2\sin x\cos x$. Das ist übrigens $\sin(2x)$.
  ---
  $k_3$: innen $u = x^2 - x$, $u' = 2x - 1$, außen $e^u$. $k_3'(x) = (2x - 1)\,e^{x^2 - x}$.
```

```aufgabe
id: dr-basis-umschreiben
titel: Auf die Basis e umschreiben und ableiten
niveau: 2
lernziel: 3
kompetenz: anwenden
quelle: nach Musterprüfung Winkler, Aufgabe 3 (abgewandelt)
angabe: |
  Gegeben ist $f(x) = \dfrac{3^x}{9}$.

  a) Schreibe $f$ in der Form $f(x) = \alpha\,e^{\lambda x}$. Gib $\alpha$ und $\lambda$ an ($\lambda$ auf vier Nachkommastellen).

  b) Berechne mit der Kettenregel $f'(2)$.
teile:
  - typ: zahl
    label: 'a) $\alpha$'
    loesung: "1/9"
    anzeige: '\tfrac19'
    fehler:
      - wert: "9"
        meldung: 'Durch $9$ teilen heißt mit $\frac19$ multiplizieren. Der Vorfaktor ist also $\frac19$.'
  - typ: zahl
    label: 'a) $\lambda$'
    loesung: "ln(3)"
    anzeige: '\ln 3 \approx 1{,}0986'
    toleranz: 0.0001
    fehler:
      - wert: "3"
        meldung: 'Die Basis $3$ selbst ist nicht $\lambda$. Wegen $3 = e^{\ln 3}$ ist $3^x = e^{(\ln 3)\,x}$, also $\lambda = \ln 3$.'
      - wert: "lg(3)"
        meldung: 'Zur Basis $e$ gehört der **natürliche** Logarithmus $\ln$, nicht der Zehnerlogarithmus.'
  - typ: zahl
    label: 'b) $f''(2)$'
    loesung: "ln(3)/9*3^2"
    anzeige: '\ln 3 \approx 1{,}0986'
    fehler:
      - wert: "1"
        meldung: '$1$ ist der Funktionswert $f(2) = \frac99$. Die Ableitung hat zusätzlich den Faktor $\lambda = \ln 3$.'
hinweise:
  - '$3 = e^{\ln 3}$, also $3^x = \big(e^{\ln 3}\big)^x = e^{x\ln 3}$.'
  - 'Kettenregel: $\big(\alpha\,e^{\lambda x}\big)'' = \alpha\lambda\,e^{\lambda x}$.'
loesung: |
  Ansatz: Jede Basis lässt sich als Potenz von $e$ schreiben. Hier ist $3 = e^{\ln 3}$.
  ---
  a) $f(x) = \frac19\cdot 3^x = \frac19\,e^{(\ln 3)\,x}$. Also $\alpha = \frac19$ und $\lambda = \ln 3 \approx 1{,}0986$.
  ---
  b) Kettenregel: $f'(x) = \frac19\cdot\ln 3\cdot e^{(\ln 3)\,x} = \frac{\ln 3}{9}\cdot 3^x$. Bei $x = 2$: $f'(2) = \frac{\ln 3}{9}\cdot 9 = \ln 3 \approx 1{,}0986$.
  ---
  Probe mit dem Differenzenquotienten: $\frac{f(2{,}01) - f(2)}{0{,}01} = \frac{3^{0{,}01} - 1}{0{,}01} \approx 1{,}105$. Das liegt nahe bei $1{,}0986$.
```

```aufgabe
id: dr-kette-produkt
titel: Produktregel und Kettenregel zusammen
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Gegeben ist $f(x) = x\,e^{-x^2}$.

  a) Bestimme $f'(x)$ und hebe $e^{-x^2}$ heraus.

  b) An welchen Stellen hat der Graph eine waagrechte Tangente?
teile:
  - typ: term
    label: 'a) $f''(x)$'
    loesung: "(1 - 2*x^2)*e^(-x^2)"
    bereich: [-1.5, 1.5]
    fehler:
      - wert: "(1 + x)*e^(-x^2)"
        meldung: 'Bei der Ableitung von $e^{-x^2}$ fehlt die innere Ableitung $-2x$. Richtig ist $\big(e^{-x^2}\big)'' = -2x\,e^{-x^2}$.'
      - wert: "-2*x*e^(-x^2)"
        meldung: 'Das ist nur $\big(e^{-x^2}\big)''$. Weil $f$ ein Produkt ist, brauchst du die Produktregel mit zwei Summanden.'
  - typ: menge
    label: 'b) Stellen mit waagrechter Tangente'
    loesung: ["-1/sqrt(2)", "1/sqrt(2)"]
    fehler:
      - wert: ["1/sqrt(2)"]
        meldung: 'Die Gleichung $x^2 = \frac12$ hat zwei Lösungen, eine positive und eine negative.'
hinweise:
  - 'Außen steht ein Produkt: $u = x$, $v = e^{-x^2}$. Für $v''$ brauchst du die Kettenregel.'
  - '$e^{-x^2}$ ist nie null. Also ist $f''(x) = 0$ genau dann, wenn der Vorfaktor null ist.'
gefuehrt:
  - text: Wie lautet die Ableitung von $v = e^{-x^2}$?
    teil: { typ: term, loesung: "-2*x*e^(-x^2)", bereich: [-1.5, 1.5] }
    erklaerung: 'Kettenregel: innen $-x^2$ mit Ableitung $-2x$, außen $e^u$. Also $v'' = -2x\,e^{-x^2}$.'
  - text: Setze in die Produktregel $u'v + uv'$ mit $u = x$ ein und hebe $e^{-x^2}$ heraus.
    teil: { typ: term, loesung: "(1 - 2*x^2)*e^(-x^2)", bereich: [-1.5, 1.5] }
    erklaerung: '$1\cdot e^{-x^2} + x\cdot(-2x)\,e^{-x^2} = (1 - 2x^2)\,e^{-x^2}$.'
  - text: Für welche positive Zahl $x$ ist der Vorfaktor $1 - 2x^2$ null?
    teil: { typ: zahl, loesung: "1/sqrt(2)" }
    erklaerung: '$x^2 = \frac12$, also $x = \frac{1}{\sqrt2} \approx 0{,}7071$. Die zweite Lösung ist $-\frac{1}{\sqrt2}$.'
loesung: |
  Ansatz: Die äußerste Struktur ist ein Produkt aus $u = x$ und $v = e^{-x^2}$. Für $v'$ brauchen wir die Kettenregel.
  ---
  $u' = 1$ und $v' = e^{-x^2}\cdot(-2x)$. Produktregel: $f'(x) = 1\cdot e^{-x^2} + x\cdot(-2x)\,e^{-x^2} = (1 - 2x^2)\,e^{-x^2}$.
  ---
  b) $e^{-x^2} > 0$ für alle $x$. Also ist $f'(x) = 0$ genau dann, wenn $1 - 2x^2 = 0$, also $x^2 = \frac12$ und $x = \pm\frac{1}{\sqrt2} \approx \pm 0{,}7071$.
  ---
  Probe: $f'\big(\frac{1}{\sqrt2}\big) = (1 - 2\cdot\frac12)\,e^{-1/2} = 0$.
```

```aufgabe
id: dr-hoehere-muster
titel: Muster bei höheren Ableitungen
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: |
  a) Bestimme die vierte Ableitung von $f(x) = e^{3x}$ an der Stelle $0$.

  b) Die Ableitungen des Sinus wiederholen sich: $\sin x$, $\cos x$, $-\sin x$, $-\cos x$, dann wieder $\sin x$.
  Bestimme damit den Wert der zehnten Ableitung von $\sin x$ an der Stelle $\frac{\pi}{2}$.
teile:
  - typ: zahl
    label: 'a) $f^{(4)}(0)$'
    loesung: "3^4"
    anzeige: '81'
    fehler:
      - wert: "12"
        meldung: 'Jede Ableitung bringt den Faktor $3$ **multiplikativ** dazu: $3\cdot 3\cdot 3\cdot 3 = 3^4$, nicht $3 + 3 + 3 + 3$.'
  - typ: zahl
    label: 'b) zehnte Ableitung an der Stelle $\frac{\pi}{2}$'
    loesung: "-sin(pi/2)"
    anzeige: '-1'
    fehler:
      - wert: "1"
        meldung: 'Nach vier Ableitungen ist man wieder beim Sinus. $10 = 8 + 2$, also ist die zehnte Ableitung gleich der zweiten, $-\sin x$.'
hinweise:
  - 'a) Jede Ableitung von $e^{3x}$ liefert einen weiteren Faktor $3$.'
  - 'b) Die Folge wiederholt sich alle vier Schritte. Welcher Rest bleibt bei $10 : 4$?'
loesung: |
  Ansatz: Wir suchen jeweils ein Muster, statt zehnmal abzuleiten.
  ---
  a) $f'(x) = 3e^{3x}$, $f''(x) = 9e^{3x}$, und allgemein $f^{(n)}(x) = 3^n e^{3x}$. Also $f^{(4)}(0) = 81\cdot e^0 = 81$.
  ---
  b) Die vierte Ableitung von $\sin x$ ist wieder $\sin x$, ebenso die achte. Die zehnte ist dann die zweite, also $-\sin x$.
  ---
  An der Stelle $\frac{\pi}{2}$: $-\sin\frac{\pi}{2} = -1$.
```

```aufgabe
id: dr-ableiten-gemischt
titel: Regeln kombinieren
niveau: 3
lernziel: 3
kompetenz: rechnen
angabe: |
  Leite ab und vereinfache so weit wie möglich:
  $$f(x) = x^2\,e^{-2x}, \qquad g(x) = \ln\!\left(\frac{x^2}{x + 1}\right) \quad (x > 0).$$
teile:
  - typ: term
    label: '$f''(x)$'
    loesung: "(2*x - 2*x^2)*e^(-2*x)"
    fehler:
      - wert: "(2*x + x^2)*e^(-2*x)"
        meldung: 'Die innere Ableitung von $e^{-2x}$ ist $-2$. Also ist $\big(e^{-2x}\big)'' = -2e^{-2x}$, nicht $e^{-2x}$.'
      - wert: "-4*x*e^(-2*x)"
        meldung: 'Das ist das Produkt der Einzelableitungen $2x$ und $-2e^{-2x}$. Ein Produkt braucht die Produktregel.'
  - typ: term
    label: '$g''(x)$'
    loesung: "2/x - 1/(x + 1)"
    bereich: [0.5, 4]
    fehler:
      - wert: "(x + 1)/x^2"
        meldung: 'Das ist nur die äußere Ableitung $\frac1u$ an der Stelle $u = \frac{x^2}{x + 1}$. Die innere Ableitung fehlt. Einfacher: zuerst mit den Logarithmusregeln zerlegen.'
hinweise:
  - 'Bei $f$ außen die Produktregel, für $e^{-2x}$ die Kettenregel.'
  - 'Bei $g$ zuerst mit den Logarithmusregeln zerlegen: $g(x) = 2\ln x - \ln(x + 1)$.'
loesung: |
  Ansatz: Bei $f$ ist die äußerste Struktur ein Produkt. Bei $g$ sparen wir uns Quotienten- und Kettenregel, indem wir zuerst umschreiben.
  ---
  $f$: $u = x^2$, $u' = 2x$, $v = e^{-2x}$, $v' = -2e^{-2x}$. Produktregel: $f'(x) = 2x\,e^{-2x} - 2x^2\,e^{-2x} = (2x - 2x^2)\,e^{-2x} = 2x\,(1 - x)\,e^{-2x}$.
  ---
  $g$: Für $x > 0$ ist $g(x) = \ln(x^2) - \ln(x + 1) = 2\ln x - \ln(x + 1)$. Dann $g'(x) = \dfrac2x - \dfrac{1}{x + 1}$.
  ---
  Auf gemeinsamen Nenner: $g'(x) = \dfrac{2(x + 1) - x}{x(x + 1)} = \dfrac{x + 2}{x(x + 1)}$. Probe an der Stelle $1$: $2 - \frac12 = 1{,}5$ und $\frac{3}{2} = 1{,}5$.
```

## Implizites Differenzieren und Umkehrfunktionen (Vertiefung)

Dieser Abschnitt geht über den Stoff der Studienberechtigungsprüfung hinaus. Er gehört zum
Schulstoff der Oberstufe und kommt im ersten Semester an der Universität sofort vor. Wenn du wenig
Zeit hast, kannst du ihn überspringen und später zurückkommen.

```aufgabe
id: dr-check-kreispunkt
titel: Liegt der Punkt auf dem Kreis?
niveau: 1
art: check
angabe: |
  Liegt der Punkt $P(3 \mid 4)$ auf dem Kreis mit der Gleichung $x^2 + y^2 = 25$?
  (Herkunft: [Kapitel 7, „Der Kreis“](/lernen/mathe3/analytische-geometrie))
teile:
  - typ: auswahl
    optionen: ['Ja, denn $3^2 + 4^2 = 25$.', 'Nein, denn $3 + 4 \neq 25$.', 'Nein, denn $3^2 + 4^2 = 49$.']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: In der Kreisgleichung stehen die **Quadrate** der Koordinaten, nicht die Koordinaten selbst.
      - wert: 2
        meldung: 'Rechne nach: $3^2 = 9$ und $4^2 = 16$, zusammen $25$.'
loesung: |
  Wir setzen die Koordinaten ein: $3^2 + 4^2 = 9 + 16 = 25$.
  ---
  Die Gleichung ist erfüllt, also liegt $P$ auf dem Kreis um den Ursprung mit Radius $5$.
```

### Wenn y nicht allein auf einer Seite steht

Nicht jede Kurve ist der Graph einer Funktion $y = f(x)$. Der Kreis $x^2 + y^2 = 25$ hat zu jedem $x$
zwischen $-5$ und $5$ **zwei** Punkte, einen oben und einen unten. Trotzdem hat er in jedem Punkt eine
Tangente. Wie berechnet man ihre Steigung?

**Erster Weg (explizit):** Man löst nach $y$ auf. Für die obere Hälfte ist $y = \sqrt{25 - x^2}$. Die
Kettenregel liefert $y' = \dfrac{-2x}{2\sqrt{25 - x^2}} = -\dfrac{x}{\sqrt{25 - x^2}}$. Das geht, ist aber
umständlich, und bei vielen Kurven kann man gar nicht nach $y$ auflösen.

**Zweiter Weg (implizit):** Man stellt sich $y$ als Funktion von $x$ vor, also $y = y(x)$, ohne die
Formel zu kennen. Dann leitet man **beide Seiten** der Gleichung nach $x$ ab. Wo $y$ vorkommt, braucht
man die Kettenregel. Zum Beispiel ist $(y^2)' = 2y\cdot y'$, weil $y$ die innere Funktion ist. Diese
Methode heißt **implizites Differenzieren**. „Implizit“ heißt „nicht ausdrücklich hingeschrieben“.

:::beispiel[Die Tangentensteigung am Kreis implizit]
Gesucht ist die Steigung des Kreises $x^2 + y^2 = 25$ im Punkt $P(3 \mid 4)$.

1. Beide Seiten nach $x$ ableiten: $2x + 2y\cdot y' = 0$. Die rechte Seite $25$ ist eine Konstante mit Ableitung $0$.
2. Nach $y'$ auflösen: $2y\cdot y' = -2x$, also $y' = -\dfrac{x}{y}$ für $y \neq 0$.
3. Punkt einsetzen: $y' = -\dfrac34$.

**Kontrolle explizit:** $-\dfrac{3}{\sqrt{25 - 9}} = -\dfrac34$. **Kontrolle geometrisch:** Der Radius vom
Mittelpunkt $(0 \mid 0)$ zu $P$ hat die Steigung $\frac43$. Die Tangente steht senkrecht auf dem Radius.
Das Produkt der Steigungen ist $\frac43\cdot\left(-\frac34\right) = -1$, wie es für senkrechte Geraden sein muss.
:::

:::merke[Rezept: implizites Differenzieren]
1. Beide Seiten der Gleichung nach $x$ ableiten.
2. Jeden Term mit $y$ mit der Kettenregel ableiten: $(y^n)' = n\,y^{n-1}\cdot y'$.
3. Produkte aus $x$ und $y$ mit der Produktregel ableiten: $(x\cdot y)' = 1\cdot y + x\cdot y'$.
4. Alle Terme mit $y'$ auf eine Seite bringen, $y'$ herausheben und dividieren.
5. Erst am Ende die Koordinaten des Punkts einsetzen.
:::

:::beispiel[Eine Kurve, die man nicht nach y auflösen will]
Die Kurve $x^2 + xy + y^2 = 7$ geht durch $P(1 \mid 2)$, denn $1 + 2 + 4 = 7$. Gesucht ist die Steigung in $P$.

1. Ableiten: $2x + (y + x\,y') + 2y\,y' = 0$. Der mittlere Term ist ein Produkt, deshalb die Produktregel.
2. Terme mit $y'$ zusammenfassen: $(x + 2y)\,y' = -(2x + y)$.
3. Auflösen: $y' = -\dfrac{2x + y}{x + 2y}$. Einsetzen: $y' = -\dfrac{2 + 2}{1 + 4} = -\dfrac45 = -0{,}8$.
:::

:::achtung[Das y′ beim Ableiten von y² vergessen]
Beim Kreis $x^2 + y^2 = 25$ leitet jemand so ab:
$$2x + 2y = 0, \qquad\text{also}\qquad y = -x \qquad \text{(falsch).}$$
Er hat $y$ wie eine Konstante oder wie $x$ behandelt. Aber $y$ hängt von $x$ ab. Nach der Kettenregel
ist $(y^2)' = 2y\cdot y'$. Richtig ist $2x + 2y\,y' = 0$ und damit $y' = -\frac xy$. Die falsche
Rechnung liefert sogar eine Gerade statt einer Steigung.
:::

### Die Ableitung einer Umkehrfunktion

Eine **Umkehrfunktion** macht eine Funktion rückgängig ([Kapitel 4](/lernen/mathe3/funktionen)).
Zum Beispiel ist $\ln$ die Umkehrfunktion von $e^x$, denn $e^{\ln x} = x$. Der Graph der
Umkehrfunktion entsteht durch Spiegeln an der Geraden $y = x$. Beim Spiegeln tauschen in jedem
Steigungsdreieck Breite und Höhe die Rollen. Aus einer Steigung $k$ wird deshalb die Steigung $\frac1k$.

:::satz[Ableitung der Umkehrfunktion]
Ist $g$ die Umkehrfunktion von $f$ und ist $f'\big(g(x)\big) \neq 0$, dann gilt
$$g'(x) = \frac{1}{f'\big(g(x)\big)}.$$
:::

Dabei ist $g(x)$ die Stelle, an der man $f$ ableiten muss. Herleitung mit der Kettenregel: Aus
$f\big(g(x)\big) = x$ folgt durch Ableiten beider Seiten $f'\big(g(x)\big)\cdot g'(x) = 1$. Nach $g'(x)$
auflösen ergibt den Satz. Die genaue Begründung, dass $g$ überhaupt differenzierbar ist, steht in
[Kapitel 13](/lernen/mathe3/differenzierbarkeit).

:::beispiel[Logarithmus, Arkussinus und Arkustangens]
1. **$\ln x$:** Mit $f(x) = e^x$ ist $f'(x) = e^x$. Also $(\ln x)' = \dfrac{1}{e^{\ln x}} = \dfrac1x$. Das ist die
   Grundableitung, die du schon kennst.
2. **$\arcsin x$** ist die Umkehrfunktion des Sinus auf $\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$. Mit
   $f'(x) = \cos x$ gilt $(\arcsin x)' = \dfrac{1}{\cos(\arcsin x)}$. Für einen Winkel $w$ gilt $\cos^2 w + \sin^2 w = 1$.
   Auf $\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$ ist der Kosinus nicht negativ, also $\cos w = \sqrt{1 - \sin^2 w}$.
   Mit $w = \arcsin x$ und $\sin(\arcsin x) = x$ ist der Nenner deshalb $\sqrt{1 - x^2}$. Also $(\arcsin x)' = \dfrac{1}{\sqrt{1 - x^2}}$ für $-1 < x < 1$.
3. **$\arctan x$** ist die Umkehrfunktion des Tangens auf $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$. Die
   Ableitung des Tangens ist $\frac{1}{\cos^2 x}$ ([9.6 Produktregel und Quotientenregel](/lernen/mathe3/differentialrechnung/produktregel-und-quotientenregel)).
   Wir schreiben sie um: $\frac{1}{\cos^2 x} = \frac{\cos^2 x + \sin^2 x}{\cos^2 x} = 1 + \tan^2 x$. Also ist
   $(\arctan x)' = \dfrac{1}{1 + \tan^2(\arctan x)}$. Wegen $\tan(\arctan x) = x$ folgt
   $(\arctan x)' = \dfrac{1}{1 + x^2}$. Beispiel: An der Stelle $1$ hat $\arctan$ die Steigung $\frac12$.
:::

**Ein Gegenbeispiel:** $f(x) = x^3$ hat die Umkehrfunktion $g(x) = \sqrt[3]{x}$. An der Stelle $0$
ist $f'(0) = 0$. Der Satz verlangt aber $f' \neq 0$. Tatsächlich hat $\sqrt[3]{x}$ bei $0$ eine
senkrechte Tangente und keine Ableitung. Aus der waagrechten Tangente wird beim Spiegeln eine senkrechte.

:::achtung[Die Ableitung von f an der falschen Stelle genommen]
Gesucht ist die Steigung von $g(x) = \sqrt[3]{x}$ an der Stelle $8$. Jemand rechnet mit $f(x) = x^3$:
$$g'(8) = \frac{1}{f'(8)} = \frac{1}{192} \qquad \text{(falsch).}$$
Man muss $f'$ an der Stelle $g(8) = 2$ auswerten, denn der Punkt $(8 \mid 2)$ auf dem Graphen von $g$
gehört zum Punkt $(2 \mid 8)$ auf dem Graphen von $f$. Richtig ist $g'(8) = \frac{1}{f'(2)} = \frac{1}{12}$.
Kontrolle mit der Potenzregel: $g'(x) = \frac13 x^{-2/3}$, also $g'(8) = \frac13\cdot\frac14 = \frac{1}{12}$.
:::

```reflexion
frage: Beim Kreis gilt $y' = -\frac{x}{y}$. Was passiert in den Punkten $(5 \mid 0)$ und $(-5 \mid 0)$, und wie sieht man das am Bild?
antwort: |
  Dort ist $y = 0$, und durch $0$ darf man nicht dividieren. Die Formel liefert keine Steigung.
  Das passt zum Bild: Ganz rechts und ganz links am Kreis ist die Tangente **senkrecht**. Eine
  senkrechte Gerade hat keine Steigung im Sinn von „Höhe durch Breite“, denn die Breite ist null.

  Die Formel $y' = -\frac xy$ zeigt das schon vorher: Je näher $y$ an $0$ kommt, desto größer wird
  der Betrag von $y'$. Die Tangente wird also immer steiler.
```

```aufgabe
id: dr-impl-kreis
titel: Tangentensteigung am Kreis
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Bestimme durch implizites Differenzieren die Steigung der Tangente an den Kreis $x^2 + y^2 = 169$ im Punkt $P(5 \mid 12)$.
teile:
  - typ: zahl
    label: 'Steigung $y''$ in $P$'
    loesung: "-5/12"
    anzeige: '-\tfrac{5}{12}'
    fehler:
      - wert: "12/5"
        meldung: Das ist die Steigung des **Radius** von $(0 \mid 0)$ nach $P$. Die Tangente steht senkrecht darauf.
      - wert: "5/12"
        meldung: 'Das Vorzeichen fehlt. Aus $2x + 2y\,y'' = 0$ folgt $y'' = -\frac xy$. Im ersten Quadranten fällt der Kreis nach rechts.'
hinweise:
  - 'Leite beide Seiten ab: $2x + 2y\cdot y'' = 0$.'
loesung: |
  Ableiten beider Seiten, mit der Kettenregel bei $y^2$: $2x + 2y\,y' = 0$. Die rechte Seite $169$ ist konstant.
  ---
  Auflösen: $y' = -\frac{x}{y}$. Einsetzen: $y' = -\frac{5}{12}$.
  ---
  Kontrolle: Radiussteigung $\frac{12}{5}$ mal Tangentensteigung $-\frac{5}{12}$ ergibt $-1$. Die beiden stehen also senkrecht aufeinander.
```

```aufgabe
id: dr-umkehr-arcus
titel: Steigungen von Arkussinus und Arkustangens
niveau: 1
lernziel: 3
kompetenz: anwenden
angabe: |
  Verwende $(\arcsin x)' = \dfrac{1}{\sqrt{1 - x^2}}$ und $(\arctan x)' = \dfrac{1}{1 + x^2}$.

  a) Berechne die Steigung von $\arcsin$ an der Stelle $0{,}6$.

  b) Berechne die Steigung von $\arctan$ an der Stelle $\sqrt3$.
teile:
  - typ: zahl
    label: 'a) Steigung von $\arcsin$ bei $0{,}6$'
    loesung: "1/sqrt(1 - 0.6^2)"
    anzeige: '1{,}25'
    fehler:
      - wert: "1/sqrt(1 - 0.6)"
        meldung: Unter der Wurzel steht $1 - x^2$, also $1 - 0{,}36$. Das Quadrieren fehlt.
  - typ: zahl
    label: 'b) Steigung von $\arctan$ bei $\sqrt3$'
    loesung: "1/(1 + 3)"
    anzeige: '\tfrac14'
    fehler:
      - wert: "1/(1 + sqrt(3))"
        meldung: 'Im Nenner steht $1 + x^2$. Mit $x = \sqrt3$ ist $x^2 = 3$.'
hinweise:
  - Setze die Stelle in die angegebene Ableitung ein. Rechne zuerst das Quadrat aus.
loesung: |
  a) $1 - 0{,}6^2 = 1 - 0{,}36 = 0{,}64$ und $\sqrt{0{,}64} = 0{,}8$. Also Steigung $\frac{1}{0{,}8} = 1{,}25$.
  ---
  b) $1 + (\sqrt3)^2 = 4$. Also Steigung $\frac14$. Der Arkustangens wird nach rechts immer flacher.
```

```aufgabe
id: dr-impl-kurve
titel: Tangente an eine implizit gegebene Kurve
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Die Kurve $x^2 + 2xy - y^2 = 7$ geht durch den Punkt $P(2 \mid 1)$.

  a) Bestimme die Steigung $y'$ der Kurve in $P$.

  b) Gib die Gleichung der Tangente in $P$ an.
teile:
  - typ: zahl
    label: 'a) $y''$ in $P$'
    loesung: "-(2 + 1)/(2 - 1)"
    anzeige: '-3'
    fehler:
      - wert: "3"
        meldung: 'Prüfe das Vorzeichen beim Auflösen. Aus $(2x - 2y)\,y'' = -(2x + 2y)$ folgt ein Minus vor dem Bruch.'
      - wert: "-1"
        meldung: 'Beim Ableiten von $-y^2$ fehlt vermutlich der Faktor $y''$. Weil $y$ von $x$ abhängt, gilt nach der Kettenregel $(y^2)'' = 2y\cdot y''$.'
      - wert: "-2"
        meldung: 'Bei $(2xy)''$ fehlt vermutlich ein Summand. Produktregel: $(2xy)'' = 2y + 2x\,y''$.'
  - typ: term
    label: 'b) Tangente: $y = $'
    loesung: "-3*x + 7"
    fehler:
      - wert: "3*x - 5"
        meldung: Hier wurde mit der Steigung $+3$ gerechnet. Die Steigung aus a) ist negativ.
hinweise:
  - 'Leite Term für Term ab. $(2xy)'' = 2y + 2x\,y''$ (Produktregel) und $(y^2)'' = 2y\,y''$ (Kettenregel).'
  - 'Sammle die Terme mit $y''$ links und den Rest rechts. Setze erst dann $x = 2$ und $y = 1$ ein.'
gefuehrt:
  - text: Welcher Term ist die Ableitung von $2xy$ nach $x$?
    teil:
      typ: auswahl
      optionen: ['$2y + 2x\,y''$', '$2y$', '$2x\,y''$', '$2\,y''$']
      richtig: [0]
    erklaerung: 'Produktregel mit $u = 2x$ und $v = y$: $u''v + uv'' = 2y + 2x\,y''$.'
  - text: Welcher Term ist die Ableitung von $-y^2$ nach $x$?
    teil:
      typ: auswahl
      optionen: ['$-2y\,y''$', '$-2y$', '$-2\,y''$']
      richtig: [0]
    erklaerung: 'Kettenregel, weil $y$ von $x$ abhängt: $(y^2)'' = 2y\cdot y''$.'
  - text: 'Die abgeleitete Gleichung lautet $2x + 2y + 2x\,y'' - 2y\,y'' = 0$. Setze $x = 2$, $y = 1$ ein und löse nach $y''$.'
    teil: { typ: zahl, loesung: "-3" }
    erklaerung: '$4 + 2 + 4y'' - 2y'' = 0$, also $2y'' = -6$ und $y'' = -3$.'
  - text: Stelle die Tangente durch $P(2 \mid 1)$ mit dieser Steigung auf.
    teil: { typ: term, loesung: "-3*x + 7" }
    erklaerung: '$y = 1 - 3(x - 2) = -3x + 7$.'
loesung: |
  Ansatz: Die Kurve lässt sich nur mühsam nach $y$ auflösen. Wir differenzieren implizit, mit $y = y(x)$.
  ---
  Ableiten: $2x + (2y + 2x\,y') - 2y\,y' = 0$. Terme mit $y'$ sammeln: $(2x - 2y)\,y' = -(2x + 2y)$, also $y' = -\dfrac{x + y}{x - y}$.
  ---
  a) In $P(2 \mid 1)$: $y' = -\dfrac{3}{1} = -3$.
  ---
  b) Tangente durch $P$ mit Steigung $-3$: $y = 1 - 3(x - 2) = -3x + 7$. Probe: Für $x = 2$ ergibt sich $y = 1$.
```

```aufgabe
id: dr-umkehr-stelle
titel: Steigung einer Umkehrfunktion
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Die Funktion $f(x) = x^3 + x$ ist streng monoton wachsend und hat deshalb eine Umkehrfunktion $g$.
  Eine Formel für $g$ ist schwer zu finden. Berechne trotzdem

  a) $g'(2)$, b) $g'(10)$.
teile:
  - typ: zahl
    label: 'a) $g''(2)$'
    loesung: "1/(3*1^2 + 1)"
    anzeige: '\tfrac14'
    fehler:
      - wert: "1/(3*2^2 + 1)"
        meldung: 'Du hast $f''$ an der Stelle $2$ genommen. Man braucht die Stelle $g(2)$, also das $x$ mit $f(x) = 2$. Das ist $x = 1$.'
      - wert: "4"
        meldung: '$4 = f''(1)$. Die Umkehrfunktion hat die **Kehrwert**-Steigung.'
  - typ: zahl
    label: 'b) $g''(10)$'
    loesung: "1/(3*2^2 + 1)"
    anzeige: '\tfrac{1}{13}'
    fehler:
      - wert: "1/(3*10^2 + 1)"
        meldung: 'Nicht $f''(10)$, sondern $f''\big(g(10)\big)$. Suche zuerst das $x$ mit $x^3 + x = 10$.'
hinweise:
  - 'Finde durch Probieren: Für welches $x$ ist $f(x) = 2$, für welches $f(x) = 10$?'
  - '$g''(y) = \frac{1}{f''(x)}$, wobei $x$ die Zahl mit $f(x) = y$ ist. Es ist $f''(x) = 3x^2 + 1$.'
loesung: |
  Ansatz: $g'(y) = \dfrac{1}{f'\big(g(y)\big)}$. Wir brauchen also zuerst $g(y)$, die Stelle $x$ mit $f(x) = y$.
  ---
  a) $f(1) = 1 + 1 = 2$, also $g(2) = 1$. Mit $f'(x) = 3x^2 + 1$ ist $f'(1) = 4$ und $g'(2) = \frac14$.
  ---
  b) $f(2) = 8 + 2 = 10$, also $g(10) = 2$. $f'(2) = 13$, also $g'(10) = \frac{1}{13}$.
  ---
  Plausibilität: $f$ wird nach rechts immer steiler. Die gespiegelte Kurve $g$ wird deshalb immer flacher, und tatsächlich ist $\frac{1}{13} < \frac14$.
```

```aufgabe
id: dr-impl-fehler
titel: Fehler beim impliziten Ableiten finden
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: |
  Ein Mitschüler soll die Tangentensteigung des Kreises $x^2 + y^2 = 25$ im Punkt $Q(-3 \mid 4)$ bestimmen.
  Er schreibt: „Ableiten ergibt $2x + 2y = 0$, also $y = -x$. Die Steigung ist $-1$.“

  a) Welcher Fehler steckt darin?

  b) Wie groß ist die Steigung in $Q$ wirklich?
teile:
  - typ: auswahl
    label: 'a) Der Fehler:'
    optionen:
      - 'Er hat beim Ableiten von $y^2$ den Faktor $y''$ vergessen. Richtig ist $(y^2)'' = 2y\,y''$.'
      - 'Die Ableitung von $25$ ist nicht $0$.'
      - 'Die Ableitung von $x^2$ ist nicht $2x$.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$25$ ist eine Konstante. Ihre Ableitung ist tatsächlich $0$.'
  - typ: zahl
    label: 'b) Steigung in $Q$'
    loesung: "3/4"
    anzeige: '\tfrac34'
    fehler:
      - wert: "-3/4"
        meldung: 'In $y'' = -\frac xy$ ist $x = -3$ negativ. Minus mal Minus ergibt Plus. Im zweiten Quadranten steigt der obere Kreisbogen.'
hinweise:
  - Hängt $y$ von $x$ ab? Welche Regel braucht man dann für $y^2$?
  - 'Richtig: $y'' = -\frac{x}{y}$. Setze $x = -3$ und $y = 4$ ein.'
loesung: |
  Ansatz: Beim impliziten Differenzieren ist $y$ eine Funktion von $x$. Jeder Term mit $y$ braucht deshalb die Kettenregel.
  ---
  a) $(y^2)' = 2y\cdot y'$, nicht $2y$. Der Mitschüler hat $y'$ vergessen und dadurch statt einer Steigung eine Geradengleichung erhalten.
  ---
  b) Richtig: $2x + 2y\,y' = 0$, also $y' = -\frac xy = -\frac{-3}{4} = \frac34$. Probe: Radiussteigung $\frac{4}{-3}$ mal $\frac34$ ergibt $-1$.
```

```aufgabe
id: dr-umkehr-begruenden
titel: Warum die Kubikwurzel bei 0 keine Ableitung hat
niveau: 2
lernziel: 3
kompetenz: begruenden
angabe: |
  Begründe mit der Regel für die Ableitung der Umkehrfunktion, warum $g(x) = \sqrt[3]{x}$ an der Stelle $0$ nicht differenzierbar ist.
  Beschreibe auch, was man am Graphen sieht.
teile:
  - typ: text
    muster: |
      $g$ ist die Umkehrfunktion von $f(x) = x^3$. Die Regel lautet $g'(x) = \frac{1}{f'(g(x))}$.
      An der Stelle $0$ ist $g(0) = 0$ und $f'(0) = 3\cdot 0^2 = 0$. Man müsste also durch $0$ dividieren.
      Das geht nicht, die Regel liefert keine Steigung. Am Graphen: $x^3$ hat bei $0$ eine waagrechte
      Tangente. Spiegelt man an der Geraden $y = x$, wird daraus eine senkrechte Tangente. Eine senkrechte
      Gerade hat keine endliche Steigung, deshalb hat $\sqrt[3]{x}$ bei $0$ keine Ableitung.
hinweise:
  - Welche Funktion kehrt $\sqrt[3]{x}$ um? Wie groß ist deren Ableitung an der Stelle $0$?
  - Was wird beim Spiegeln an $y = x$ aus einer waagrechten Geraden?
loesung: |
  Ansatz: $g(x) = \sqrt[3]{x}$ ist die Umkehrfunktion von $f(x) = x^3$. Die Regel verlangt $f'(g(x)) \neq 0$.
  ---
  An der Stelle $0$ ist $g(0) = 0$ und $f'(0) = 0$. Die Formel $\frac{1}{f'(0)}$ würde eine Division durch null verlangen. Die Voraussetzung der Regel ist verletzt.
  ---
  Am Graphen: Die waagrechte Tangente von $x^3$ im Ursprung wird beim Spiegeln an $y = x$ zur senkrechten Tangente. Das passt zu [9.3 Die Ableitungsfunktion](/lernen/mathe3/differentialrechnung/die-ableitungsfunktion-die-steigung-an-jeder-stelle): Die Sekantensteigungen wachsen über alle Grenzen.
```

```aufgabe
id: dr-impl-ellipse
titel: Tangente an eine Ellipse
niveau: 3
lernziel: 3
kompetenz: anwenden
angabe: |
  Eine Ellipse mit Mittelpunkt im Ursprung hat die Gleichung $\dfrac{x^2}{16} + \dfrac{y^2}{9} = 1$.
  Sie ist $8$ Einheiten breit und $6$ Einheiten hoch.

  a) Berechne die $y$-Koordinate des Ellipsenpunkts $P$ mit $x = 2$ und $y > 0$ (auf drei Nachkommastellen).

  b) Bestimme die Tangentensteigung in $P$ (auf vier Nachkommastellen).

  c) Wo schneidet die Tangente in $P$ die $x$-Achse?
teile:
  - typ: zahl
    label: 'a) $y$-Koordinate von $P$'
    loesung: "3*sqrt(1 - 4/16)"
    anzeige: '\tfrac{3\sqrt3}{2} \approx 2{,}598'
    toleranz: 0.001
    fehler:
      - wert: "9*(1 - 4/16)"
        meldung: Das ist $y^2$. Zieh noch die Wurzel.
  - typ: zahl
    label: 'b) Tangentensteigung in $P$'
    loesung: "-9*2/(16*3*sqrt(1 - 4/16))"
    anzeige: '-\tfrac{\sqrt3}{4} \approx -0{,}4330'
    toleranz: 0.0001
    fehler:
      - wert: "-2/(3*sqrt(1 - 4/16))"
        meldung: 'Die Nenner $16$ und $9$ der Ellipsengleichung fehlen in deiner Steigung. Aus $\frac{2x}{16} + \frac{2y\,y''}{9} = 0$ folgt $y'' = -\frac{9x}{16y}$.'
  - typ: zahl
    label: 'c) Schnittstelle mit der $x$-Achse'
    loesung: "2 + (3*sqrt(1 - 4/16))/(9*2/(16*3*sqrt(1 - 4/16)))"
    anzeige: '8'
hinweise:
  - 'a) Setze $x = 2$ in die Gleichung ein und löse nach $y$.'
  - 'b) Implizit ableiten: $\frac{2x}{16} + \frac{2y\,y''}{9} = 0$. c) Tangente $y = y_P + k(x - 2)$ gleich $0$ setzen.'
loesung: |
  Ansatz: Die Ellipse ist kein Funktionsgraph. Wir bestimmen den Punkt, differenzieren implizit und stellen dann die Tangente auf.
  ---
  a) $\frac{4}{16} + \frac{y^2}{9} = 1$, also $y^2 = 9\cdot\frac34 = \frac{27}{4}$ und $y = \frac{3\sqrt3}{2} \approx 2{,}598$.
  ---
  b) Ableiten: $\frac{2x}{16} + \frac{2y\,y'}{9} = 0$, also $y' = -\frac{9x}{16y}$. In $P$: $y' = -\frac{18}{16\cdot 2{,}598} = -\frac{\sqrt3}{4} \approx -0{,}4330$.
  ---
  c) Tangente: $y = 2{,}598 - 0{,}4330\,(x - 2)$. Nullsetzen: $x - 2 = \frac{2{,}598}{0{,}4330} = 6$, also $x = 8$.
  ---
  Kontrolle: Für Ellipsen dieser Form schneidet die Tangente im Punkt mit der Koordinate $x_0$ die $x$-Achse bei $\frac{16}{x_0}$. Mit $x_0 = 2$ ergibt das $8$.
```

## Tangente und Normale aufstellen

```aufgabe
id: dr-check-punkt-steigung
titel: Gerade aus Punkt und Steigung
niveau: 1
art: check
angabe: |
  Eine Gerade hat die Steigung $3$ und geht durch den Punkt $P(2 \mid 5)$. Gib ihre Gleichung in der Form $y = kx + d$ an.
  (Herkunft: [Kapitel 4, „Lineare Funktionen“](/lernen/mathe3/funktionen))
teile:
  - typ: term
    label: '$y = $'
    loesung: "3*x - 1"
    fehler:
      - wert: "3*x + 5"
        meldung: |
          Die $5$ ist die $y$-Koordinate von $P$, nicht der Achsenabschnitt $d$. Der Achsenabschnitt ist die Höhe bei
          $x = 0$. Setze $P$ in $y = 3x + d$ ein: $5 = 6 + d$.
loesung: |
  Ansatz $y = 3x + d$. Der Punkt $P$ muss die Gleichung erfüllen: $5 = 3\cdot 2 + d$, also $d = -1$.
  ---
  Die Gerade lautet $y = 3x - 1$. Probe: $3\cdot 2 - 1 = 5$.
```

Die Ableitung liefert die **Steigung** der Tangente. Zusammen mit dem **Berührpunkt** ist die
Tangente damit vollständig bestimmt, denn eine Gerade ist durch einen Punkt und eine Steigung
festgelegt. Tangenten braucht man ständig: als beste gerade Näherung einer Kurve, für Steigungswinkel
von Straßen und Rampen und im Newton-Verfahren ([9.17 Das Newton-Verfahren](/lernen/mathe3/differentialrechnung/das-newton-verfahren-gleichungen-naeherungsweise-loesen)).

### Die Tangentengleichung

:::satz[Tangente und Normale]
Die **Tangente** an den Graphen von $f$ im Punkt $P\big(x_0 \mid f(x_0)\big)$ hat die Gleichung
$$t\colon\ y = f(x_0) + f'(x_0)\cdot(x - x_0).$$
Die **Normale** steht in $P$ senkrecht auf die Tangente. Für $f'(x_0) \neq 0$ hat sie die Gleichung
$$n\colon\ y = f(x_0) - \frac{1}{f'(x_0)}\cdot(x - x_0).$$
:::

Dabei ist $x_0$ die **Berührstelle**, $f(x_0)$ die Höhe des Berührpunkts und $f'(x_0)$ die Steigung
der Tangente. Warum stimmt die Formel? Sie beschreibt eine Gerade mit Steigung $f'(x_0)$, denn $x$
kommt nur im Summanden $f'(x_0)\cdot(x - x_0)$ vor. Setzt man $x = x_0$ ein, wird die Klammer null und
es bleibt $y = f(x_0)$. Die Gerade geht also durch $P$. Diese Form heißt **Punkt-Steigungs-Form**.

Für die Normale verwenden wir eine Regel aus [Kapitel 7](/lernen/mathe3/analytische-geometrie):
Zwei Geraden stehen genau dann senkrecht aufeinander, wenn das Produkt ihrer Steigungen $-1$ ist. Die
Normale hat deshalb die Steigung $-\frac{1}{f'(x_0)}$, den **negativen Kehrwert**. Ist $f'(x_0) = 0$, ist
die Tangente waagrecht und die Normale die senkrechte Gerade $x = x_0$.

:::beispiel[Tangente, Normale und Steigungswinkel an einer Parabel]
Gegeben ist $f(x) = x^2 - 2x + 3$ und die Berührstelle $x_0 = 2$.

1. **Berührpunkt:** $f(2) = 4 - 4 + 3 = 3$, also $P(2 \mid 3)$.
2. **Steigung:** $f'(x) = 2x - 2$, also $f'(2) = 2$.
3. **Tangente:** $y = 3 + 2\,(x - 2) = 2x - 1$.
4. **Normale:** Steigung $-\frac12$, also $y = 3 - \frac12\,(x - 2) = -\frac12 x + 4$.
5. **Probe:** Beide Geraden gehen durch $P$, denn $2\cdot 2 - 1 = 3$ und $-1 + 4 = 3$.

Der **Steigungswinkel** $\alpha$ ist der Winkel zwischen Tangente und positiver $x$-Achse. Im
Steigungsdreieck ist die Steigung „Gegenkathete durch Ankathete“, also gilt $\tan\alpha = f'(x_0) = 2$.
Mit dem Taschenrechner im Gradmodus: $\alpha = \arctan 2 \approx 63{,}43°$.
:::

```plot
x: [-1, 5]
y: [-1, 7]
gleich: true
achsen: { x: "x", y: "y" }
graphen:
  - { f: "x^2 - 2*x + 3", label: "f", farbe: 0 }
  - { f: "2*x - 1", label: "Tangente t", farbe: 1 }
  - { f: "-0.5*x + 4", label: "Normale n", farbe: 2 }
punkte:
  - { x: 2, y: 3, label: "P(2|3)" }
beschriftung: Die Parabel f(x) = x² − 2x + 3 mit der Tangente y = 2x − 1 und der Normale y = −0,5x + 4 im Punkt P(2|3). Bei gleicher Achsenskalierung sieht man den rechten Winkel zwischen Tangente und Normale.
```

:::merke[Rezept: Tangente und Normale aufstellen]
1. Berührpunkt: $y_0 = f(x_0)$ mit der **Funktion** $f$ berechnen.
2. Steigung: $k = f'(x_0)$ mit der **Ableitung** berechnen.
3. In $y = y_0 + k\,(x - x_0)$ einsetzen und zu $y = kx + d$ vereinfachen.
4. Normale: Steigung $-\frac1k$, derselbe Punkt.
5. Probe: Beide Geraden müssen durch $P$ gehen.
:::

:::achtung[Die Steigung als Höhe des Punkts verwendet]
Für $f(x) = x^2 - 2x + 3$ an der Stelle $2$ schreibt jemand
$$y = 2 + 2\,(x - 2) = 2x - 2 \qquad \text{(falsch).}$$
Als Höhe des Punkts hat er $f'(2) = 2$ eingesetzt statt $f(2) = 3$. Die Gerade hat zwar die richtige
Steigung, geht aber nicht durch den Berührpunkt: Bei $x = 2$ liefert sie $y = 2$, die Parabel aber $3$.
Die Probe „geht die Gerade durch $P$?“ deckt diesen Fehler sofort auf.
:::

:::achtung[Normale mit dem falschen Kehrwert]
Bei Tangentensteigung $2$ schreibt jemand für die Normale die Steigung $-2$ (falsch). Das Produkt
$2\cdot(-2) = -4$ ist nicht $-1$, die Geraden stehen also nicht senkrecht. Richtig ist der negative
**Kehrwert** $-\frac12$, denn $2\cdot\left(-\frac12\right) = -1$.
:::

### Umgekehrte Fragestellungen

Oft ist nicht die Berührstelle gegeben, sondern eine Eigenschaft der Tangente. Dann ist die
Berührstelle die Unbekannte, und man stellt eine Gleichung für sie auf.

- **Vorgegebene Steigung $k$**, zum Beispiel „parallel zur Geraden $y = 9x$“ oder „Steigungswinkel $45°$“:
  Löse die Gleichung $f'(x) = k$.
- **Tangente durch einen Punkt $Q$, der nicht auf dem Graphen liegt:** Nenne die unbekannte
  Berührstelle $u$. Stelle die Tangente in $u$ allgemein auf, setze $Q$ ein und löse nach $u$.

:::beispiel[Tangenten parallel zu einer Geraden]
An welchen Stellen ist die Tangente an $f(x) = x^3 - 3x$ parallel zur Geraden $y = 9x$?

1. Parallel heißt gleiche Steigung. Also $f'(x) = 3x^2 - 3 = 9$.
2. Lösen: $3x^2 = 12$, $x^2 = 4$, also $x = 2$ oder $x = -2$.
3. Berührpunkte: $f(2) = 8 - 6 = 2$ und $f(-2) = -8 + 6 = -2$.
4. Tangenten: $y = 2 + 9\,(x - 2) = 9x - 16$ und $y = -2 + 9\,(x + 2) = 9x + 16$.

Es gibt also zwei parallele Tangenten mit Steigung $9$.
:::

:::beispiel[Tangenten von einem Punkt außerhalb der Parabel]
Gesucht sind alle Tangenten an $f(x) = x^2$, die durch $Q(1 \mid -3)$ gehen. $Q$ liegt unter der Parabel.

1. Tangente an einer unbekannten Stelle $u$: Berührpunkt $(u \mid u^2)$, Steigung $f'(u) = 2u$. Also
   $y = u^2 + 2u\,(x - u) = 2ux - u^2$.
2. $Q$ soll auf der Tangente liegen: $-3 = 2u\cdot 1 - u^2$. Umgeformt: $u^2 - 2u - 3 = 0$.
3. Lösungsformel: $u = 1 \pm \sqrt{1 + 3} = 1 \pm 2$, also $u = 3$ oder $u = -1$.
4. Tangenten: Für $u = 3$ ist $y = 6x - 9$, für $u = -1$ ist $y = -2x - 1$.
5. Probe mit $Q$: $6 - 9 = -3$ und $-2 - 1 = -3$.
:::

```reflexion
frage: Warum muss man bei einer Tangente durch einen äußeren Punkt $Q$ mit einer unbekannten Berührstelle $u$ rechnen? Man könnte doch einfach $f'$ an der Stelle von $Q$ ausrechnen.
antwort: |
  Die Ableitung an der $x$-Koordinate von $Q$ ist die Steigung der Tangente **an genau dieser Stelle**
  des Graphen. Diese Tangente geht durch den Kurvenpunkt über oder unter $Q$, aber nicht durch $Q$
  selbst, weil $Q$ nicht auf dem Graphen liegt.

  Die gesuchte Tangente berührt den Graphen irgendwo anders. Diese Stelle kennen wir nicht, deshalb
  nennen wir sie $u$. Die Bedingung „$Q$ liegt auf der Tangente“ liefert dann eine Gleichung für $u$.
```

```aufgabe
id: dr-tangente-normale
titel: Tangente und Normale an ein Polynom
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Bestimme die Gleichungen der Tangente und der Normale an den Graphen von $f(x) = x^3 - 2x$ an der Stelle $x_0 = 2$.
teile:
  - typ: term
    label: 'Tangente $t$: $y = $'
    loesung: "10*x - 16"
    fehler:
      - wert: "10*x + 4"
        meldung: |
          Du hast $f(2) = 4$ als Achsenabschnitt verwendet. Die Höhe $4$ gilt aber an der Stelle $2$, nicht bei $x = 0$.
          Verwende $y = f(2) + f'(2)\,(x - 2)$.
      - wert: "10*x"
        meldung: Diese Gerade hat die richtige Steigung, geht aber nicht durch den Berührpunkt $(2 \mid 4)$.
  - typ: term
    label: 'Normale $n$: $y = $'
    loesung: "-0.1*x + 4.2"
    fehler:
      - wert: "-10*x + 24"
        meldung: 'Die Normale hat den negativen **Kehrwert** der Tangentensteigung, also $-\frac{1}{10}$, nicht $-10$.'
      - wert: "0.1*x + 3.8"
        meldung: 'Das Minus fehlt. Das Produkt der Steigungen muss $-1$ sein: $10\cdot\left(-\frac{1}{10}\right) = -1$.'
hinweise:
  - 'Berechne $f(2)$ und $f''(2)$ mit $f''(x) = 3x^2 - 2$.'
loesung: |
  Berührpunkt: $f(2) = 8 - 4 = 4$, also $P(2 \mid 4)$. Steigung: $f'(x) = 3x^2 - 2$, also $f'(2) = 10$.
  ---
  Tangente: $y = 4 + 10\,(x - 2) = 10x - 16$.
  ---
  Normale: Steigung $-\frac{1}{10}$. $y = 4 - \frac{1}{10}\,(x - 2) = -0{,}1x + 4{,}2$. Probe: $-0{,}2 + 4{,}2 = 4$.
```

```aufgabe
id: dr-steigungswinkel
titel: Steigungswinkel einer Kurve
niveau: 1
lernziel: 4
kompetenz: anwenden
angabe: |
  a) Unter welchem Winkel (in Grad, auf zwei Nachkommastellen) steigt der Graph von $f(x) = \tfrac12 x^2$ an der Stelle $x = 1{,}5$?

  b) An welcher Stelle beträgt der Steigungswinkel genau $45°$?
teile:
  - typ: zahl
    label: 'a) Steigungswinkel bei $x = 1{,}5$'
    einheit: "°"
    loesung: "inGrad(atan(1.5))"
    anzeige: '56{,}31'
    toleranz: 0.01
    fehler:
      - wert: "atan(1.5)"
        meldung: 'Das ist der Winkel im **Bogenmaß**. Stell den Taschenrechner auf DEG, dann ergibt $\arctan 1{,}5$ den Winkel in Grad.'
      - wert: "1.5"
        meldung: '$1{,}5$ ist die Steigung, nicht der Winkel. Es gilt $\tan\alpha = 1{,}5$, also $\alpha = \arctan 1{,}5$.'
  - typ: zahl
    label: 'b) Stelle mit Steigungswinkel $45°$'
    loesung: "1"
    fehler:
      - wert: "45"
        meldung: 'Der Winkel $45°$ entspricht der Steigung $\tan 45° = 1$. Gesucht ist das $x$ mit $f''(x) = 1$.'
hinweise:
  - 'Es gilt $\tan\alpha = f''(x_0)$. Hier ist $f''(x) = x$.'
loesung: |
  Ansatz: Der Steigungswinkel $\alpha$ erfüllt $\tan\alpha = f'(x_0)$. Hier ist $f'(x) = x$, also $f'(1{,}5) = 1{,}5$.
  ---
  a) $\alpha = \arctan 1{,}5 \approx 56{,}31°$ (Taschenrechner auf DEG).
  ---
  b) $45°$ heißt Steigung $\tan 45° = 1$. Aus $f'(x) = x = 1$ folgt $x = 1$.
```

```aufgabe
id: dr-tangente-exp
titel: Tangente an eine Exponentialfunktion
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Gegeben ist $f(x) = e^{2x}$.

  a) Bestimme die Tangente im Punkt $(0 \mid 1)$.

  b) An welcher Stelle schneidet diese Tangente die $x$-Achse?
teile:
  - typ: term
    label: 'a) Tangente: $y = $'
    loesung: "2*x + 1"
    fehler:
      - wert: "x + 1"
        meldung: 'Die innere Ableitung fehlt: $\big(e^{2x}\big)'' = 2e^{2x}$, also $f''(0) = 2$.'
  - typ: zahl
    label: 'b) Schnittstelle mit der $x$-Achse'
    loesung: "-1/2"
    anzeige: '-\tfrac12'
    fehler:
      - wert: "1/2"
        meldung: 'Prüfe das Vorzeichen: $2x + 1 = 0$ ergibt $2x = -1$.'
hinweise:
  - 'Kettenregel: $(e^{2x})'' = 2e^{2x}$.'
  - Schnitt mit der $x$-Achse heißt $y = 0$.
loesung: |
  Ansatz: Tangentengleichung mit $x_0 = 0$ und $f(0) = 1$. Steigung mit der Kettenregel: $f'(x) = 2e^{2x}$, also $f'(0) = 2$.
  ---
  a) $y = 1 + 2\,(x - 0) = 2x + 1$.
  ---
  b) $2x + 1 = 0$, also $x = -\frac12$. Die Tangente schneidet die $x$-Achse im Punkt $\left(-\frac12 \mid 0\right)$.
```

```aufgabe
id: dr-tangente-parallel
titel: Tangenten mit vorgegebener Steigung
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  An welchen Stellen ist die Tangente an den Graphen von $f(x) = x^3 - 3x^2$ parallel zur Geraden $g\colon y = 9x + 1$?
  Gib die Stellen und die zugehörigen Tangentengleichungen an.
teile:
  - typ: menge
    label: 'Stellen $x$'
    loesung: ["3", "-1"]
    fehler:
      - wert: ["3"]
        meldung: 'Die quadratische Gleichung $x^2 - 2x - 3 = 0$ hat zwei Lösungen.'
  - typ: term
    label: 'Tangente an der größeren Stelle: $y = $'
    loesung: "9*x - 27"
    fehler:
      - wert: "9*x + 1"
        meldung: Das ist die gegebene Gerade $g$ selbst. Die Tangente hat dieselbe Steigung, muss aber durch den Berührpunkt $(3 \mid 0)$ gehen.
  - typ: term
    label: 'Tangente an der kleineren Stelle: $y = $'
    loesung: "9*x + 5"
hinweise:
  - Parallel heißt gleiche Steigung. Löse $f'(x) = 9$.
  - '$3x^2 - 6x = 9$ ist gleichbedeutend mit $x^2 - 2x - 3 = 0$.'
loesung: |
  Ansatz: Parallele Geraden haben dieselbe Steigung. Wir lösen $f'(x) = 9$ mit $f'(x) = 3x^2 - 6x$.
  ---
  $3x^2 - 6x = 9$, durch $3$ geteilt $x^2 - 2x - 3 = 0$, also $(x - 3)(x + 1) = 0$ und $x = 3$ oder $x = -1$.
  ---
  $x = 3$: $f(3) = 27 - 27 = 0$, Tangente $y = 0 + 9\,(x - 3) = 9x - 27$.
  ---
  $x = -1$: $f(-1) = -1 - 3 = -4$, Tangente $y = -4 + 9\,(x + 1) = 9x + 5$.
```

```aufgabe
id: dr-tangente-wurzel
titel: Tangente und Normale an die Wurzelfunktion
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Gegeben ist $f(x) = \sqrt x$. Bestimme die Tangente und die Normale an der Stelle $x_0 = 4$.
teile:
  - typ: term
    label: 'Tangente: $y = $'
    loesung: "0.25*x + 1"
    fehler:
      - wert: "0.25*x + 2"
        meldung: 'Die Höhe $f(4) = 2$ gilt an der Stelle $4$, nicht bei $x = 0$. Rechne $y = 2 + \frac14\,(x - 4)$ aus.'
  - typ: term
    label: 'Normale: $y = $'
    loesung: "-4*x + 18"
    fehler:
      - wert: "-0.25*x + 3"
        meldung: 'Die Normale hat den negativen **Kehrwert** der Tangentensteigung. Der Kehrwert von $\frac14$ ist $4$.'
hinweise:
  - '$f''(x) = \frac{1}{2\sqrt x}$.'
  - Berechne Berührpunkt und Steigung, dann Punkt-Steigungs-Form.
gefuehrt:
  - text: Wie hoch liegt der Berührpunkt, also wie groß ist $f(4)$?
    teil: { typ: zahl, loesung: "2" }
    erklaerung: $f(4) = \sqrt4 = 2$. Der Berührpunkt ist $P(4 \mid 2)$.
  - text: Wie groß ist die Steigung $f'(4)$?
    teil: { typ: zahl, loesung: "1/4" }
    erklaerung: $f'(4) = \frac{1}{2\sqrt4} = \frac14$.
  - text: Stelle die Tangente auf.
    teil: { typ: term, loesung: "0.25*x + 1" }
    erklaerung: $y = 2 + \frac14\,(x - 4) = \frac14 x + 1$.
  - text: Welche Steigung hat die Normale?
    teil: { typ: zahl, loesung: "-4" }
    erklaerung: Negativer Kehrwert von $\frac14$ ist $-4$. Normale $y = 2 - 4\,(x - 4) = -4x + 18$.
loesung: |
  Ansatz: Tangente in Punkt-Steigungs-Form, Normale mit dem negativen Kehrwert der Steigung.
  ---
  Berührpunkt $f(4) = 2$, Steigung $f'(4) = \frac{1}{2\cdot 2} = \frac14$.
  ---
  Tangente: $y = 2 + \frac14\,(x - 4) = \frac14 x + 1$. Normale: $y = 2 - 4\,(x - 4) = -4x + 18$.
  ---
  Probe: Beide gehen durch $P(4 \mid 2)$, denn $1 + 1 = 2$ und $-16 + 18 = 2$. Das Produkt der Steigungen ist $\frac14\cdot(-4) = -1$.
```

```aufgabe
id: dr-tangente-fehler-finden
titel: Fehler in einer Tangentengleichung finden
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: |
  Für $f(x) = x^2 - 4x + 1$ soll die Tangente an der Stelle $x_0 = 3$ bestimmt werden. Ein Mitschüler schreibt:
  „$f'(x) = 2x - 4$, also $f'(3) = 2$. Tangente: $y = 2 + 2\,(x - 3) = 2x - 4$.“

  a) Was ist falsch?

  b) Gib die richtige Tangente an.
teile:
  - typ: auswahl
    label: 'a) Der Fehler:'
    optionen:
      - 'Die Ableitung ist falsch.'
      - 'Als Höhe des Berührpunkts wurde $f''(3) = 2$ statt $f(3)$ eingesetzt.'
      - 'In der Klammer müsste $(x + 3)$ stehen.'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: '$f''(x) = 2x - 4$ und $f''(3) = 2$ stimmen.'
      - wert: 2
        meldung: 'In der Klammer steht $x - x_0$, mit $x_0 = 3$ also $x - 3$. Das ist richtig.'
  - typ: term
    label: 'b) Tangente: $y = $'
    loesung: "2*x - 8"
    fehler:
      - wert: "2*x - 4"
        meldung: 'Das ist die falsche Tangente des Mitschülers. Berechne zuerst $f(3) = 9 - 12 + 1$.'
hinweise:
  - Prüfe, ob die angegebene Tangente durch den Berührpunkt geht.
  - 'Die Höhe des Berührpunkts ist $f(3)$, nicht $f''(3)$.'
loesung: |
  Ansatz: Probe „geht die Gerade durch den Berührpunkt?“. Es ist $f(3) = 9 - 12 + 1 = -2$, also $P(3 \mid -2)$.
  ---
  a) Die Gerade des Mitschülers liefert bei $x = 3$ den Wert $2\cdot 3 - 4 = 2$, nicht $-2$. Er hat $f'(3)$ als Höhe eingesetzt.
  ---
  b) Richtig: $y = -2 + 2\,(x - 3) = 2x - 8$. Probe: $6 - 8 = -2$.
```

```aufgabe
id: dr-tangente-aeusserer-punkt
titel: Tangenten durch einen Punkt außerhalb des Graphen
niveau: 3
lernziel: 4
kompetenz: anwenden
angabe: |
  Vom Punkt $Q(2 \mid 1)$ aus werden Tangenten an die Parabel $f(x) = x^2 + 1$ gelegt.

  a) Bestimme alle Berührstellen.

  b) Gib die Gleichung der Tangente mit der größeren Steigung an.
teile:
  - typ: menge
    label: 'a) Berührstellen $u$'
    loesung: ["0", "4"]
    fehler:
      - wert: ["4"]
        meldung: |
          Auch $u = 0$ löst die Gleichung $u^2 - 4u = 0$. Die Tangente im Scheitel ist waagrecht, $y = 1$, und geht ebenfalls durch $Q$.
      - wert: ["2"]
        meldung: 'An der Stelle $2$ liegt der Kurvenpunkt $(2 \mid 5)$, nicht $Q$. Die Berührstelle ist unbekannt, nenne sie $u$.'
  - typ: term
    label: 'b) Tangente mit der größeren Steigung: $y = $'
    loesung: "8*x - 15"
    fehler:
      - wert: "4*x - 3"
        meldung: 'Diese Gerade ist die Tangente an der Stelle $2$. Sie geht durch $(2 \mid 5)$, aber nicht durch $Q(2 \mid 1)$.'
hinweise:
  - Nenne die unbekannte Berührstelle $u$. Stelle die Tangente in $u$ allgemein auf.
  - 'Tangente in $u$: $y = u^2 + 1 + 2u\,(x - u) = 2ux - u^2 + 1$. Setze $Q$ ein.'
loesung: |
  Ansatz: $Q$ liegt nicht auf dem Graphen, denn $f(2) = 5 \neq 1$. Die Berührstelle $u$ ist unbekannt.
  ---
  Tangente in $u$: Berührpunkt $(u \mid u^2 + 1)$, Steigung $2u$. Also $y = u^2 + 1 + 2u\,(x - u) = 2ux - u^2 + 1$.
  ---
  $Q$ einsetzen: $1 = 4u - u^2 + 1$, also $u^2 - 4u = 0$ und $u\,(u - 4) = 0$. Berührstellen: $u = 0$ und $u = 4$.
  ---
  b) $u = 4$: Steigung $8$, Tangente $y = 8x - 16 + 1 = 8x - 15$. Die andere Tangente ($u = 0$) ist die waagrechte Gerade $y = 1$.
  ---
  Probe mit $Q$: $8\cdot 2 - 15 = 1$, und $y = 1$ geht ebenfalls durch $Q$.
```

## Die Tangente als Näherung: Linearisierung und Fehlerfortpflanzung

```aufgabe
id: dr-check-relativer-fehler
titel: Fehler in Prozent
niveau: 1
art: check
angabe: |
  Eine Länge von $10$ cm wird mit einer Unsicherheit von $0{,}2$ cm gemessen. Wie viel Prozent der Länge sind das?
  (Herkunft: [Kapitel 1, „Prozentrechnung“](/lernen/mathe3/zahlen))
teile:
  - typ: zahl
    label: 'relative Unsicherheit'
    einheit: "%"
    loesung: "0.2/10*100"
    anzeige: '2'
    fehler:
      - wert: "0.2"
        meldung: '$0{,}2$ cm ist die absolute Unsicherheit. In Prozent heißt: Anteil an der gemessenen Länge, also $\frac{0{,}2}{10}$.'
loesung: |
  Relative Unsicherheit ist absolute Unsicherheit durch Messwert: $\frac{0{,}2}{10} = 0{,}02$.
  ---
  Das sind $2\,\%$.
```

Zoomt man in einen glatten Graphen hinein, sieht er immer mehr wie seine Tangente aus. Diese
Beobachtung ist sehr nützlich. In der Nähe des Berührpunkts kann man die schwierige Funktion durch
die einfache Tangente ersetzen. So berechnet man Näherungswerte ohne Taschenrechner und schätzt ab,
wie sich Messfehler auf ein Ergebnis auswirken. Physik und Technik verwenden diese Idee ständig.

### Linearisierung

Die Tangente an der Stelle $x_0$ ist $y = f(x_0) + f'(x_0)\cdot(x - x_0)$. Wir schreiben den kleinen
Schritt nach rechts als $\Delta x = x - x_0$. In der Nähe von $x_0$ liegt die Tangente fast auf dem
Graphen. Daraus folgt:

:::satz[Lineare Näherung]
Ist $f$ an der Stelle $x_0$ differenzierbar und $\Delta x$ klein, dann gilt
$$f(x_0 + \Delta x) \approx f(x_0) + f'(x_0)\cdot\Delta x.$$
Gleichwertig: Die Änderung $\Delta f = f(x_0 + \Delta x) - f(x_0)$ ist ungefähr $f'(x_0)\cdot\Delta x$.
:::

Dabei ist $x_0$ eine Stelle, an der man $f$ und $f'$ leicht ausrechnen kann. $\Delta x$ ist der
Abstand zur Stelle, die man eigentlich braucht. Das Zeichen $\approx$ liest man „ungefähr gleich“.
Diese Näherung heißt **Linearisierung**, weil man die Funktion durch eine Gerade ersetzt, also durch
eine **lineare** Funktion.

:::beispiel[Eine Wurzel ohne Taschenrechner]
Gesucht ist $\sqrt{4{,}1}$. Die Wurzel aus $4$ kennen wir, also wählen wir $f(x) = \sqrt x$, $x_0 = 4$ und $\Delta x = 0{,}1$.

1. Funktionswert: $f(4) = 2$.
2. Steigung: $f'(x) = \frac{1}{2\sqrt x}$, also $f'(4) = \frac14$.
3. Näherung: $\sqrt{4{,}1} \approx 2 + \frac14\cdot 0{,}1 = 2{,}025$.

Der genaue Wert ist $2{,}02485\ldots$ Der Fehler ist kleiner als $0{,}0002$. Zum Vergleich ein weiter
entfernter Wert: $\sqrt5 \approx 2 + \frac14\cdot 1 = 2{,}25$, genau ist $2{,}2361$. Der Fehler ist
jetzt fast $0{,}014$. Je weiter man sich vom Berührpunkt entfernt, desto schlechter wird die Näherung.
:::

```plot
x: [0, 9]
y: [0, 4]
achsen: { x: "x", y: "y" }
graphen:
  - { f: "sqrt(x)", label: "f(x) = √x", farbe: 0, von: 0, bis: 9 }
  - { f: "0.25*x + 1", label: "Tangente in x₀ = 4", farbe: 1, gestrichelt: true }
punkte:
  - { x: 4, y: 2, label: "(4|2)" }
  - { x: 5, y: 2.25, label: "Näherung 2,25", farbe: 1 }
  - { x: 5, y: "sqrt(5)", label: "√5 ≈ 2,236", farbe: 0 }
beschriftung: Die Wurzelfunktion und ihre Tangente an der Stelle 4. Nahe bei 4 liegen beide fast aufeinander. Bei x = 5 liegt die Tangente schon sichtbar über dem Graphen, die Näherung 2,25 ist etwas zu groß.
```

### Fehlerfortpflanzung

Jede Messung hat eine Unsicherheit. Rechnet man mit einem Messwert weiter, wird auch das Ergebnis
unsicher. Die Linearisierung sagt, wie stark: Ist der Messwert $x_0$ um höchstens $\Delta x$ unsicher,
dann ist das Ergebnis $f(x_0)$ um ungefähr $|f'(x_0)|\cdot\Delta x$ unsicher. Die Ableitung ist also
der **Verstärkungsfaktor** für den Fehler.

:::beispiel[Messfehler beim Würfelvolumen]
Die Kante eines Würfels wird mit $a = 10$ cm gemessen, auf $\pm 0{,}2$ cm genau. Wie genau ist das Volumen $V(a) = a^3$?

1. Volumen: $V(10) = 1000$ cm³.
2. Verstärkungsfaktor: $V'(a) = 3a^2$, also $V'(10) = 300$ cm³ pro cm.
3. Absoluter Fehler: $\Delta V \approx 300\cdot 0{,}2 = 60$ cm³.
4. Relativer Fehler: $\frac{60}{1000} = 6\,\%$. Die Kante war nur auf $\frac{0{,}2}{10} = 2\,\%$ unsicher.

Der relative Fehler hat sich verdreifacht. Das ist kein Zufall. Allgemein gilt
$\frac{\Delta V}{V} \approx \frac{3a^2\,\Delta a}{a^3} = 3\cdot\frac{\Delta a}{a}$. Die Hochzahl $3$ wird zum Faktor.
:::

:::beispiel[Schwingungsdauer eines Pendels]
Ein Fadenpendel der Länge $l$ (in Metern) schwingt mit der Periodendauer $T(l) = 2\pi\sqrt{\frac{l}{9{,}81}}$
Sekunden. Die Länge wird mit $l = 1{,}00$ m gemessen, auf $\pm 0{,}01$ m genau.

1. Periodendauer: $T(1) = 2\pi\sqrt{\frac{1}{9{,}81}} \approx 2{,}006$ s.
2. Ableitung mit der Kettenregel: $T(l) = \frac{2\pi}{\sqrt{9{,}81}}\cdot l^{1/2}$, also
   $T'(l) = \frac{2\pi}{\sqrt{9{,}81}}\cdot\frac{1}{2\sqrt l}$. An der Stelle $1$ ist das $\frac{T(1)}{2} \approx 1{,}003$ s pro m.
3. Unsicherheit: $\Delta T \approx 1{,}003\cdot 0{,}01 \approx 0{,}010$ s.

Relativ ist die Länge auf $1\,\%$ genau, die Periodendauer auf $0{,}5\,\%$. Bei einer Wurzel, also
der Hochzahl $\frac12$, halbiert sich der relative Fehler.
:::

:::merke[Faustregeln zur Fehlerfortpflanzung]
1. Absolute Unsicherheit des Ergebnisses: $\Delta f \approx |f'(x_0)|\cdot\Delta x$.
2. Für Potenzen $f(x) = c\,x^n$ gilt für die relativen Fehler: $\frac{\Delta f}{f} \approx |n|\cdot\frac{\Delta x}{x}$.
3. Die Näherung ist nur für **kleine** Unsicherheiten gut. Bei großen Abweichungen weicht die Tangente zu weit vom Graphen ab.
:::

:::achtung[Den Messfehler selbst in die Formel eingesetzt]
Beim Würfel mit $a = 10$ cm und $\Delta a = 0{,}2$ cm rechnet jemand
$$\Delta V = (\Delta a)^3 = 0{,}2^3 = 0{,}008 \text{ cm}^3 \qquad \text{(falsch).}$$
Das ist das Volumen eines winzigen Würfels mit Kante $0{,}2$ cm und hat mit der Unsicherheit nichts zu
tun. Die Unsicherheit entsteht, weil sich ein **großer** Würfel ein wenig ändert. Richtig ist
$\Delta V \approx V'(10)\cdot 0{,}2 = 60$ cm³. Zur Kontrolle: $10{,}2^3 - 10^3 = 61{,}208$ cm³.
:::

:::achtung[Zu weit vom Berührpunkt linearisiert]
Jemand nähert $\sqrt9$ mit der Tangente an der Stelle $4$ an:
$$\sqrt9 \approx 2 + \tfrac14\cdot 5 = 3{,}25 \qquad \text{(zu ungenau).}$$
Richtig ist $3$. Der Fehler von $0{,}25$ entsteht, weil $\Delta x = 5$ nicht klein ist. Wähle den
Berührpunkt immer so nah wie möglich an der gesuchten Stelle. Hier wäre $x_0 = 9$ selbst am besten,
und für $\sqrt{9{,}2}$ nimmt man $x_0 = 9$.
:::

```reflexion
frage: Warum wird die lineare Näherung umso besser, je kleiner $\Delta x$ ist, und zwar schneller, als $\Delta x$ selbst schrumpft?
antwort: |
  Die Tangente hat im Berührpunkt dieselbe Höhe **und** dieselbe Steigung wie der Graph. Der Graph
  weicht nur deshalb von ihr ab, weil er sich krümmt. Diese Abweichung wächst ungefähr mit dem
  **Quadrat** des Abstands.

  Halbiert man $\Delta x$, wird der Fehler deshalb ungefähr geviertelt. Bei der Wurzel war der Fehler
  für $\Delta x = 1$ etwa $0{,}014$ und für $\Delta x = 0{,}1$ nur noch etwa $0{,}00015$, also rund
  hundertmal kleiner. Genauer untersucht wird das mit dem Taylorpolynom in
  [Kapitel 13](/lernen/mathe3/differenzierbarkeit).
```

```aufgabe
id: dr-lin-wurzel
titel: Eine Wurzel linear annähern
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Berechne einen Näherungswert für $\sqrt{25{,}3}$ mit der Tangente an $f(x) = \sqrt x$ an der Stelle $x_0 = 25$.
teile:
  - typ: zahl
    label: 'Näherung für $\sqrt{25{,}3}$'
    loesung: "5 + 0.3/(2*5)"
    anzeige: '5{,}03'
    toleranz: 0.0001
    fehler:
      - wert: "5 + 0.3/5"
        meldung: 'Die Ableitung von $\sqrt x$ ist $\frac{1}{2\sqrt x}$. Der Faktor $2$ im Nenner fehlt, also $f''(25) = \frac{1}{10}$.'
      - wert: "5.3"
        meldung: 'Du hast $\Delta x = 0{,}3$ einfach addiert. Die Wurzel wächst aber viel langsamer als $x$: Die Änderung ist $f''(25)\cdot 0{,}3$.'
hinweise:
  - '$f(25) = 5$ und $f''(25) = \frac{1}{2\sqrt{25}}$. Verwende $f(x_0 + \Delta x) \approx f(x_0) + f''(x_0)\,\Delta x$.'
loesung: |
  Ansatz: Linearisierung an der Stelle $25$ mit $\Delta x = 0{,}3$. $f(25) = 5$ und $f'(25) = \frac{1}{2\cdot 5} = \frac{1}{10}$.
  ---
  $\sqrt{25{,}3} \approx 5 + \frac{1}{10}\cdot 0{,}3 = 5{,}03$. Der genaue Wert ist $5{,}02991\ldots$, die Näherung ist also auf $0{,}0001$ genau.
```

```aufgabe
id: dr-lin-exp-ln
titel: Kleine Werte von e-Funktion und Logarithmus
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Nähere mit der Tangente an der jeweils passenden Stelle an:

  a) $e^{0{,}1}$ (Tangente an $e^x$ bei $x_0 = 0$),

  b) $\ln 1{,}02$ (Tangente an $\ln x$ bei $x_0 = 1$).
teile:
  - typ: zahl
    label: 'a) $e^{0{,}1} \approx$'
    loesung: "1 + 0.1"
    anzeige: '1{,}1'
    toleranz: 0.0001
    fehler:
      - wert: "0.1"
        meldung: 'Der Funktionswert $e^0 = 1$ fehlt. Die Näherung ist $f(0) + f''(0)\cdot 0{,}1$.'
  - typ: zahl
    label: 'b) $\ln 1{,}02 \approx$'
    loesung: "0 + 1*0.02"
    anzeige: '0{,}02'
    toleranz: 0.0001
    fehler:
      - wert: "1.02"
        meldung: 'An der Stelle $1$ ist $\ln 1 = 0$, nicht $1$. Die Näherung beginnt also bei $0$.'
hinweise:
  - 'a) $f(0) = 1$ und $f''(0) = 1$. b) $\ln 1 = 0$ und $(\ln x)'' = \frac1x$, also Steigung $1$ bei $x = 1$.'
loesung: |
  a) Für $f(x) = e^x$ ist $f(0) = 1$ und $f'(0) = e^0 = 1$. Also $e^{0{,}1} \approx 1 + 1\cdot 0{,}1 = 1{,}1$. Genau: $1{,}1052$.
  ---
  b) Für $g(x) = \ln x$ ist $g(1) = 0$ und $g'(1) = 1$. Also $\ln 1{,}02 \approx 0 + 1\cdot 0{,}02 = 0{,}02$. Genau: $0{,}0198$.
```

```aufgabe
id: dr-lin-fehler-finden
titel: Wie genau ist das Würfelvolumen?
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Die Kante eines Würfels wird mit $a = 5$ cm gemessen, auf $\pm 0{,}1$ cm genau. Ein Mitschüler sagt:
  „Die Unsicherheit des Volumens ist $0{,}1^3 = 0{,}001$ cm³, also winzig.“
  Wie groß ist die Unsicherheit des Volumens nach der linearen Näherung wirklich?
teile:
  - typ: zahl
    label: '$\Delta V$'
    einheit: cm³
    loesung: "3*5^2*0.1"
    anzeige: '7{,}5'
    fehler:
      - wert: "0.001"
        meldung: |
          Das ist der Fehler des Mitschülers: Er hat das Volumen eines winzigen Würfels mit Kante $0{,}1$ cm berechnet.
          Die Unsicherheit ist die **Änderung** des großen Würfels, also ungefähr $V'(5)\cdot 0{,}1$.
      - wert: "5^3*0.1"
        meldung: 'Der Verstärkungsfaktor ist die **Ableitung** $V''(5) = 3\cdot 5^2$, nicht das Volumen $V(5)$.'
hinweise:
  - '$\Delta V \approx V''(a)\cdot\Delta a$ mit $V(a) = a^3$.'
loesung: |
  Ansatz: Fehlerfortpflanzung mit $\Delta V \approx V'(a)\cdot\Delta a$. Es ist $V'(a) = 3a^2$, also $V'(5) = 75$ cm³ pro cm.
  ---
  $\Delta V \approx 75\cdot 0{,}1 = 7{,}5$ cm³. Bei einem Volumen von $125$ cm³ sind das $6\,\%$, dreimal so viel wie die $2\,\%$ der Kante.
```

```aufgabe
id: dr-lin-kugel
titel: Unsicherheit des Kugelvolumens
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Der Radius einer Kugel wird mit $r = 6{,}0$ cm gemessen, auf $\pm 0{,}1$ cm genau. Das Volumen ist $V(r) = \frac43\pi r^3$.

  a) Schätze die absolute Unsicherheit $\Delta V$ mit der linearen Näherung (auf zwei Nachkommastellen).

  b) Wie groß ist die relative Unsicherheit des Volumens in Prozent?
teile:
  - typ: zahl
    label: 'a) $\Delta V$'
    einheit: cm³
    loesung: "4*pi*6^2*0.1"
    anzeige: '14{,}4\pi \approx 45{,}24'
    toleranz: 0.01
    fehler:
      - wert: "4/3*pi*0.1^3"
        meldung: Das ist das Volumen einer winzigen Kugel mit Radius $0{,}1$ cm. Die Unsicherheit ist die Ableitung mal $\Delta r$.
      - wert: "4/3*pi*3*6*0.1"
        meldung: 'Die Ableitung von $r^3$ ist $3r^2$, nicht $3r$. Also $V''(r) = 4\pi r^2$.'
  - typ: zahl
    label: 'b) relative Unsicherheit'
    einheit: "%"
    loesung: "3*0.1/6*100"
    anzeige: '5'
    fehler:
      - wert: "0.1/6*100"
        meldung: 'Das ist die relative Unsicherheit des **Radius**. Beim Volumen geht der Radius hoch $3$ ein, also verdreifacht sich der relative Fehler.'
hinweise:
  - '$V''(r) = 4\pi r^2$. Berechne $V''(6)$ und multipliziere mit $0{,}1$.'
  - 'Relativ: $\frac{\Delta V}{V}$ mit $V(6) = \frac43\pi\cdot 216 = 288\pi$.'
gefuehrt:
  - text: Wie groß ist $V'(6)$? Gib den Wert als Zahl an (auf zwei Nachkommastellen).
    teil: { typ: zahl, loesung: "4*pi*36", toleranz: 0.01 }
    erklaerung: '$V''(r) = \frac43\pi\cdot 3r^2 = 4\pi r^2$, also $V''(6) = 144\pi \approx 452{,}39$ cm³ pro cm.'
  - text: Multipliziere mit $\Delta r = 0{,}1$. Wie groß ist $\Delta V$?
    teil: { typ: zahl, loesung: "14.4*pi", toleranz: 0.01 }
    erklaerung: '$\Delta V \approx 14{,}4\pi \approx 45{,}24$ cm³.'
  - text: Welcher Anteil von $V(6) = 288\pi \approx 904{,}78$ cm³ ist das, in Prozent?
    teil: { typ: zahl, loesung: "5", toleranz: 0.01 }
    erklaerung: '$\frac{14{,}4\pi}{288\pi} = 0{,}05 = 5\,\%$. Das ist dreimal die relative Unsicherheit des Radius, $\frac{0{,}1}{6} \approx 1{,}67\,\%$.'
loesung: |
  Ansatz: Fehlerfortpflanzung $\Delta V \approx V'(r)\cdot\Delta r$. Ableitung: $V'(r) = \frac43\pi\cdot 3r^2 = 4\pi r^2$.
  ---
  a) $V'(6) = 144\pi$, also $\Delta V \approx 144\pi\cdot 0{,}1 = 14{,}4\pi \approx 45{,}24$ cm³.
  ---
  b) $V(6) = 288\pi \approx 904{,}78$ cm³. Relativ: $\frac{14{,}4\pi}{288\pi} = 0{,}05$, also $5\,\%$.
  ---
  Kontrolle mit der Faustregel: Radius auf $\frac{0{,}1}{6} \approx 1{,}67\,\%$ genau, Hochzahl $3$, also $3\cdot 1{,}67\,\% = 5\,\%$.
```

```aufgabe
id: dr-lin-faustregel
titel: Relative Fehler bei Potenzen
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: |
  a) Der Radius eines Kreises ist auf $3\,\%$ genau bekannt. Wie genau ist die Kreisfläche $A = \pi r^2$ ungefähr?

  b) Die Fläche eines quadratischen Grundstücks ist auf $4\,\%$ genau bekannt. Wie genau ist die Seitenlänge $s = \sqrt A$ ungefähr?
teile:
  - typ: zahl
    label: 'a) relative Unsicherheit der Fläche'
    einheit: "%"
    loesung: "2*3"
    anzeige: '6'
    fehler:
      - wert: "3"
        meldung: 'Die Fläche hängt vom **Quadrat** des Radius ab. Die Hochzahl $2$ verdoppelt den relativen Fehler.'
      - wert: "9"
        meldung: 'Die Prozente werden nicht quadriert, sondern mit der Hochzahl **multipliziert**: $2\cdot 3\,\%$.'
  - typ: zahl
    label: 'b) relative Unsicherheit der Seite'
    einheit: "%"
    loesung: "0.5*4"
    anzeige: '2'
    fehler:
      - wert: "4"
        meldung: 'Die Wurzel ist die Hochzahl $\frac12$. Sie halbiert den relativen Fehler.'
hinweise:
  - 'Für $f(x) = c\,x^n$ gilt $\frac{\Delta f}{f} \approx |n|\cdot\frac{\Delta x}{x}$.'
  - '$\sqrt A = A^{1/2}$.'
loesung: |
  Ansatz: Faustregel für Potenzen. Die relative Unsicherheit wird mit dem Betrag der Hochzahl multipliziert.
  ---
  a) $A = \pi r^2$, Hochzahl $2$: $2\cdot 3\,\% = 6\,\%$. Begründung: $\frac{\Delta A}{A} \approx \frac{2\pi r\,\Delta r}{\pi r^2} = 2\,\frac{\Delta r}{r}$.
  ---
  b) $s = A^{1/2}$, Hochzahl $\frac12$: $\frac12\cdot 4\,\% = 2\,\%$. Wurzelziehen macht ein Ergebnis also relativ genauer.
```

```aufgabe
id: dr-lin-fallhoehe
titel: Turmhöhe aus der Fallzeit
niveau: 2
lernziel: 4
kompetenz: modellieren
angabe: |
  Um die Höhe eines Turms zu bestimmen, lässt man einen Stein fallen und misst die Fallzeit $t = 3{,}0$ s, auf $\pm 0{,}1$ s genau.
  Im einfachen Modell ohne Luftwiderstand gilt $h(t) = 5t^2$ ($h$ in Metern, $t$ in Sekunden).

  a) Berechne die Höhe.

  b) Schätze die Unsicherheit der Höhe mit der linearen Näherung.
teile:
  - typ: zahl
    label: 'a) $h(3)$'
    einheit: m
    loesung: "5*3^2"
    anzeige: '45'
    fehler:
      - wert: "5*3*2"
        meldung: 'Das ist $5\cdot 3\cdot 2$. Das Quadrat bedeutet $3\cdot 3 = 9$, also $h(3) = 5\cdot 9$.'
  - typ: zahl
    label: 'b) $\Delta h$'
    einheit: m
    loesung: "10*3*0.1"
    anzeige: '3'
    fehler:
      - wert: "5*0.1^2"
        meldung: 'Du hast den Messfehler selbst in die Formel eingesetzt. Die Unsicherheit ist $h''(3)\cdot\Delta t$.'
      - wert: "10*0.1"
        meldung: 'Die Ableitung $h''(t) = 10t$ muss an der Stelle $t = 3$ ausgewertet werden: $h''(3) = 30$ m/s.'
hinweise:
  - '$h''(t) = 10t$ ist die Fallgeschwindigkeit in m/s.'
  - '$\Delta h \approx h''(3)\cdot\Delta t$.'
loesung: |
  Ansatz: Höhe aus dem Modell, Unsicherheit über die Ableitung. Die Ableitung $h'(t) = 10t$ ist die Fallgeschwindigkeit.
  ---
  a) $h(3) = 5\cdot 9 = 45$ m.
  ---
  b) $h'(3) = 30$ m/s. Also $\Delta h \approx 30\ \text{m/s}\cdot 0{,}1\ \text{s} = 3$ m. Das Ergebnis lautet $h = (45 \pm 3)$ m.
  ---
  Deutung: Eine Zehntelsekunde Messfehler wirkt sich stark aus, weil der Stein am Ende schon $30$ m/s schnell ist. Relativ: Zeit $3{,}3\,\%$, Höhe $6{,}7\,\%$, also doppelt so viel wegen des Quadrats.
```

```aufgabe
id: dr-lin-grenzen
titel: Wann die Linearisierung versagt
niveau: 3
lernziel: 4
kompetenz: begruenden
angabe: |
  Nähere die Kubikwurzel $f(x) = \sqrt[3]{x}$ mit der Tangente an der Stelle $x_0 = 8$ an. Es ist $f'(8) = \frac{1}{12}$.

  a) Berechne die Näherung für $\sqrt[3]{8{,}5}$ (auf vier Nachkommastellen).

  b) Berechne die Näherung für $\sqrt[3]{12}$ (auf vier Nachkommastellen).

  c) Die genauen Werte sind $2{,}0408$ und $2{,}2894$. Vergleiche die Fehler und erkläre den Unterschied.
teile:
  - typ: zahl
    label: 'a) Näherung für $\sqrt[3]{8{,}5}$'
    loesung: "2 + 0.5/12"
    anzeige: '2{,}0417'
    toleranz: 0.0001
    fehler:
      - wert: "2 + 0.5/3"
        meldung: 'Verwende die angegebene Steigung $f''(8) = \frac{1}{12}$, nicht $\frac13$.'
  - typ: zahl
    label: 'b) Näherung für $\sqrt[3]{12}$'
    loesung: "2 + 4/12"
    anzeige: '2{,}3333'
    toleranz: 0.0001
  - typ: text
    label: 'c) Vergleich und Erklärung'
    muster: |
      Bei a) ist der Fehler etwa $2{,}0417 - 2{,}0408 \approx 0{,}0008$, bei b) etwa $2{,}3333 - 2{,}2894 \approx 0{,}044$.
      Der Abstand $\Delta x$ ist bei b) achtmal so groß ($4$ statt $0{,}5$), der Fehler aber etwa fünfzigmal so groß.
      Die Tangente passt nur in der Nähe des Berührpunkts. Weiter weg krümmt sich der Graph immer mehr von
      der Geraden weg, und der Fehler wächst ungefähr mit dem Quadrat des Abstands. Die Tangente liegt hier
      über dem Graphen, weil die Kubikwurzel für $x > 0$ rechtsgekrümmt ist.
hinweise:
  - '$f(8) = 2$. Näherung: $2 + \frac{1}{12}\cdot\Delta x$.'
  - 'Wie viel größer ist $\Delta x$ bei b) als bei a)? Wie viel größer ist der Fehler?'
loesung: |
  Ansatz: Lineare Näherung $f(8 + \Delta x) \approx 2 + \frac{1}{12}\,\Delta x$, einmal mit $\Delta x = 0{,}5$ und einmal mit $\Delta x = 4$.
  ---
  a) $2 + \frac{0{,}5}{12} \approx 2{,}0417$. Fehler gegenüber $2{,}0408$: etwa $0{,}0008$.
  ---
  b) $2 + \frac{4}{12} \approx 2{,}3333$. Fehler gegenüber $2{,}2894$: etwa $0{,}044$.
  ---
  c) Der Abstand ist achtmal so groß, der Fehler etwa $52$-mal so groß. Das passt zur Regel „Fehler wächst ungefähr mit dem Quadrat des Abstands“, denn $8^2 = 64$. Die Linearisierung ist nur für kleine $\Delta x$ brauchbar.
```

## Monotonie und Extremstellen

```aufgabe
id: dr-check-vorzeichen-produkt
titel: Vorzeichen eines Produkts
niveau: 1
art: check
angabe: |
  Welches Vorzeichen hat $(x + 1)(x - 3)$ an der Stelle $x = 0$, und welches an der Stelle $x = 5$?
  (Herkunft: [Kapitel 2, „Quadratische Ungleichungen“](/lernen/mathe3/gleichungen))
teile:
  - typ: auswahl
    optionen: ['bei $0$ negativ, bei $5$ positiv', 'bei $0$ positiv, bei $5$ negativ', 'an beiden Stellen positiv']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Setze ein: Bei $x = 0$ ist $(0 + 1)(0 - 3) = 1\cdot(-3) = -3$.'
      - wert: 2
        meldung: 'Bei $x = 0$ ist der zweite Faktor $0 - 3 = -3$ negativ, der erste positiv. Plus mal Minus ergibt Minus.'
loesung: |
  Bei $x = 0$: $(+1)\cdot(-3) = -3$, also negativ.
  ---
  Bei $x = 5$: $(+6)\cdot(+2) = 12$, also positiv. Ein Produkt ist negativ, wenn genau ein Faktor negativ ist.
```

Mit der Ableitung kann man den Verlauf eines Graphen beschreiben, ohne ihn zu zeichnen. Wo
steigt er, wo fällt er, wo liegen seine höchsten und tiefsten Punkte? Das sind die zentralen
Fragen jeder Kurvendiskussion und jeder Optimierungsaufgabe. In diesem Abschnitt geht es um die
**erste** Ableitung. Die zweite Ableitung kommt dazu, wenn es um Krümmung geht.

### Monotonie

:::definition[Monotonie]
Eine Funktion $f$ heißt auf einem Intervall $I$ **streng monoton wachsend**, wenn für alle Stellen
$x_1$ und $x_2$ aus $I$ gilt: Ist $x_1 < x_2$, dann ist auch $f(x_1) < f(x_2)$. Sie heißt **streng
monoton fallend**, wenn aus $x_1 < x_2$ immer $f(x_1) > f(x_2)$ folgt.
:::

In Alltagssprache: Streng monoton wachsend heißt „geht man nach rechts, geht es immer echt nach
oben“. **Monoton** bedeutet „gleichförmig in eine Richtung“. **Beispiel:** $f(x) = x^2$ ist auf
$[0, \infty)$ streng monoton wachsend. **Nichtbeispiel:** Auf ganz $\R$ ist $x^2$ **nicht** monoton.
Für $x_1 = -2$ und $x_2 = 1$ ist zwar $x_1 < x_2$, aber $f(-2) = 4 > f(1) = 1$.

Ob eine Funktion steigt, zeigen die Tangenten. Zeigen alle nach rechts oben, kann der Graph nur steigen.

:::satz[Monotoniekriterium]
Die Funktion $f$ sei auf einem Intervall $I$ differenzierbar.
- Ist $f'(x) > 0$ für alle $x$ im Inneren von $I$, dann ist $f$ auf $I$ streng monoton wachsend.
- Ist $f'(x) < 0$ für alle $x$ im Inneren von $I$, dann ist $f$ auf $I$ streng monoton fallend.
:::

Das **Innere** von $I$ sind alle Stellen außer den Randpunkten. Den Beweis mit dem Mittelwertsatz
findest du in [Kapitel 13](/lernen/mathe3/differenzierbarkeit). Die Umkehrung gilt nicht ganz:
$f(x) = x^3$ ist auf ganz $\R$ streng monoton wachsend, aber $f'(0) = 0$. Einzelne Stellen mit
waagrechter Tangente stören die strenge Monotonie nicht.

:::beispiel[Monotonieintervalle mit einer Vorzeichenliste]
Gesucht sind die Monotonieintervalle von $f(x) = x^3 - 3x^2 - 9x + 1$.

1. **Ableiten und faktorisieren:** $f'(x) = 3x^2 - 6x - 9 = 3\,(x^2 - 2x - 3) = 3\,(x + 1)(x - 3)$.
2. **Nullstellen von $f'$:** $x = -1$ und $x = 3$. Nur dort kann $f'$ das Vorzeichen wechseln.
3. **Vorzeichen auf jedem Teilintervall** mit einer Teststelle:
   - Für $x < -1$, Teststelle $-2$: $f'(-2) = 12 + 12 - 9 = 15 > 0$. Also steigt $f$.
   - Für $-1 < x < 3$, Teststelle $0$: $f'(0) = -9 < 0$. Also fällt $f$.
   - Für $x > 3$, Teststelle $4$: $f'(4) = 48 - 24 - 9 = 15 > 0$. Also steigt $f$.
4. **Ergebnis:** $f$ ist streng monoton wachsend auf $(-\infty, -1]$ und auf $[3, \infty)$. Auf $[-1, 3]$ ist $f$ streng monoton fallend.

Die Randpunkte $-1$ und $3$ darf man zu beiden Intervallen dazunehmen, weil eine einzelne Stelle mit
$f' = 0$ die Monotonie nicht stört.
:::

### Lokale und globale Extremstellen

:::definition[Lokale und globale Extrema]
Die Funktion $f$ hat an der Stelle $x_0$ ein **lokales Maximum**, wenn in einem kleinen offenen
Intervall um $x_0$ kein Funktionswert größer ist als $f(x_0)$. Der Punkt
$\big(x_0 \mid f(x_0)\big)$ heißt dann **Hochpunkt**. Ist $f(x_0)$ sogar der größte Wert auf dem ganzen
Definitionsbereich, heißt es **globales Maximum**. Für **Minimum** und **Tiefpunkt** gilt alles
entsprechend mit „kleiner“. Maxima und Minima heißen zusammen **Extrema**.
:::

Ein lokales Maximum ist eine Bergspitze, von der es in der näheren Umgebung nur bergab geht. Ein
globales Maximum ist der höchste Gipfel überhaupt. **Beispiel:** Im Beispiel „Monotonieintervalle mit einer Vorzeichenliste“ ist $(-1 \mid 6)$ ein
Hochpunkt. **Nichtbeispiel:** Er ist kein globales Maximum, denn für große $x$ wird $f(x)$ beliebig groß.

:::satz[Notwendige Bedingung für ein Extremum]
Hat $f$ an einer Stelle $x_0$ im Inneren des Definitionsbereichs ein lokales Extremum und ist $f$ dort
differenzierbar, dann ist $f'(x_0) = 0$.
:::

Anschaulich: Auf einer Bergspitze oder in einer Talsohle ist die Tangente waagrecht. **Notwendig**
heißt: Ohne diese Bedingung gibt es kein Extremum. Sie reicht aber nicht aus. Das Gegenbeispiel ist
$f(x) = x^3$: Es gilt $f'(0) = 0$, aber $f$ steigt links und rechts von $0$, also gibt es dort kein
Extremum. Stellen mit $f'(x_0) = 0$ heißen deshalb nur **Kandidaten** oder **stationäre Stellen**.
Ob dort wirklich ein Extremum liegt, entscheidet eine **hinreichende** Bedingung.

```aufgabe
id: dr-check-terrasse
titel: Waagrechte Tangente, aber kein Extremum?
niveau: 1
art: check
angabe: |
  Die Funktion $f(x) = x^3 + 2$ hat $f'(0) = 0$. Hat $f$ an der Stelle $0$ ein Extremum?
teile:
  - typ: auswahl
    optionen: ['Ja, einen Tiefpunkt.', 'Ja, einen Hochpunkt.', 'Nein, $f$ steigt links und rechts von $0$.']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: 'Teste Werte: $f(-0{,}1) = 1{,}999$ ist **kleiner** als $f(0) = 2$. Ein Tiefpunkt müsste der kleinste Wert in der Umgebung sein.'
      - wert: 1
        meldung: 'Teste Werte: $f(0{,}1) = 2{,}001$ ist **größer** als $f(0) = 2$. Ein Hochpunkt müsste der größte Wert in der Umgebung sein.'
loesung: |
  $f'(x) = 3x^2$ ist links und rechts von $0$ positiv. $f$ steigt also vor und nach der Stelle $0$.
  ---
  Es gibt keinen Vorzeichenwechsel und deshalb kein Extremum. Bei $0$ liegt ein Sattelpunkt mit waagrechter Tangente.
```

:::satz[Hinreichende Bedingungen für ein Extremum]
Es sei $f'(x_0) = 0$.
1. **Vorzeichenwechsel:** Wechselt $f'$ an der Stelle $x_0$ von $+$ nach $-$, liegt ein lokales Maximum
   vor. Wechselt $f'$ von $-$ nach $+$, liegt ein lokales Minimum vor. Hat $f'$ in einer kleinen
   Umgebung links und rechts von $x_0$ dasselbe Vorzeichen, liegt kein Extremum vor.
2. **Zweite Ableitung:** Ist $f''(x_0) < 0$, liegt ein lokales Maximum vor. Ist $f''(x_0) > 0$, liegt
   ein lokales Minimum vor. Ist $f''(x_0) = 0$, entscheidet dieses Kriterium nichts.
:::

Warum funktioniert das zweite Kriterium? Ist $f''(x_0) < 0$, dann **fällt** die Steigung $f'$ an der
Stelle $x_0$. Sie ist also links davon positiv und rechts davon negativ. Das ist genau der
Vorzeichenwechsel von $+$ nach $-$ aus Kriterium 1.

:::beispiel[Extrempunkte mit der zweiten Ableitung]
Wir setzen das Beispiel $f(x) = x^3 - 3x^2 - 9x + 1$ fort. Kandidaten sind $x = -1$ und $x = 3$.

1. Zweite Ableitung: $f''(x) = 6x - 6$.
2. $f''(-1) = -12 < 0$, also lokales Maximum. Die Höhe berechnen wir mit $f$: $f(-1) = -1 - 3 + 9 + 1 = 6$. Hochpunkt $H(-1 \mid 6)$.
3. $f''(3) = 12 > 0$, also lokales Minimum. $f(3) = 27 - 27 - 27 + 1 = -26$. Tiefpunkt $T(3 \mid -26)$.

Das passt zur Vorzeichenliste: Bei $-1$ wechselt $f'$ von $+$ nach $-$, bei $3$ von $-$ nach $+$.
:::

Das zweite Kriterium versagt manchmal. Bei $f(x) = x^4$ ist $f'(0) = 0$ und $f''(0) = 0$. Trotzdem
hat $x^4$ bei $0$ ein Minimum, denn $f'(x) = 4x^3$ wechselt dort von $-$ nach $+$. Bei $x^3$ dagegen
gilt ebenfalls $f'(0) = f''(0) = 0$, aber es gibt kein Extremum. In solchen Fällen hilft nur das
Vorzeichenkriterium.

```plot
x: [-1.6, 1.6]
y: [-1.5, 2]
achsen: { x: "x", y: "y" }
graphen:
  - { f: "x^3", label: "x³: kein Extremum bei 0", farbe: 0 }
  - { f: "x^4", label: "x⁴: Minimum bei 0", farbe: 1 }
punkte:
  - { x: 0, y: 0, label: "f'(0) = f''(0) = 0" }
beschriftung: Bei x³ und bei x⁴ sind an der Stelle 0 die erste und die zweite Ableitung null. Trotzdem hat x⁴ dort ein Minimum, x³ dagegen keines. Das Kriterium mit der zweiten Ableitung entscheidet hier nichts, der Vorzeichenwechsel von f' schon.
```

:::beispiel[Globale Extrema auf einem abgeschlossenen Intervall]
Gesucht sind die globalen Extrema von $f(x) = x^3 - 3x$ auf dem Intervall $[-2, 3]$.

1. Kandidaten im Inneren: $f'(x) = 3x^2 - 3 = 0$ ergibt $x = -1$ und $x = 1$.
   Werte: $f(-1) = 2$ (Hochpunkt) und $f(1) = -2$ (Tiefpunkt).
2. Randwerte: $f(-2) = -8 + 6 = -2$ und $f(3) = 27 - 9 = 18$.
3. Vergleich aller vier Werte $2$, $-2$, $-2$, $18$: Der größte ist $18$, der kleinste $-2$.

Das **globale Maximum** ist $18$ und liegt am **Rand** $x = 3$, nicht beim Hochpunkt. Das globale
Minimum $-2$ wird zweimal angenommen, bei $x = -2$ und bei $x = 1$. An einem Rand ist meist
$f' \neq 0$, hier zum Beispiel $f'(3) = 24$. Deshalb findet die Bedingung $f'(x) = 0$ solche Randextrema
in der Regel nicht. Die Randwerte musst du immer eigens berechnen und vergleichen.
:::

:::achtung[Die Höhe des Extrempunkts mit f′ berechnet]
Für $f(x) = x^3 - 3x^2 - 9x + 1$ schreibt jemand: „Hochpunkt bei $x = -1$, also $H(-1 \mid f'(-1)) = H(-1 \mid 0)$.“ (falsch)

$f'(-1) = 0$ ist die **Steigung** im Hochpunkt, sie ist dort immer $0$. Die **Höhe** des Punkts ist
der Funktionswert $f(-1) = 6$. Richtig ist $H(-1 \mid 6)$. Die $y$-Koordinate eines Punkts auf dem
Graphen kommt immer aus der Ausgangsfunktion $f$.
:::

:::achtung[Randwert vergessen]
Für $f(x) = x^3 - 3x$ auf $[-2, 3]$ schreibt jemand: „Das globale Maximum ist $2$ beim Hochpunkt $(-1 \mid 2)$.“ (falsch)

Der Hochpunkt ist nur ein **lokales** Maximum. Am rechten Rand ist $f(3) = 18$, also viel größer.
Richtig ist: globales Maximum $18$ bei $x = 3$. Prüfe bei einem abgeschlossenen Intervall immer auch
die Randwerte.
:::

:::merke[Rezept: Monotonie und Extremstellen]
1. $f'$ berechnen und möglichst in Faktoren zerlegen.
2. Kandidaten: Lösungen von $f'(x) = 0$, außerdem Randpunkte und Stellen, an denen $f$ nicht differenzierbar ist.
3. Art bestimmen: mit $f''$ ($< 0$ Hochpunkt, $> 0$ Tiefpunkt) oder mit dem Vorzeichenwechsel von $f'$.
   Bei $f''(x_0) = 0$ immer den Vorzeichenwechsel prüfen.
4. $y$-Koordinaten mit der **Ausgangsfunktion** $f$ berechnen.
5. Monotonie aus dem Vorzeichen von $f'$ zwischen den Kandidaten ablesen.
6. Für globale Extrema alle Kandidaten und die Randwerte vergleichen.
:::

```reflexion
frage: Warum ist $f'(x_0) = 0$ notwendig, aber nicht hinreichend für ein Extremum? Erkläre es an einem Bild.
antwort: |
  **Notwendig:** An einer glatten Bergspitze kann die Tangente weder nach oben noch nach unten zeigen.
  Zeigte sie nach oben, ginge es rechts davon noch höher, und es wäre keine Spitze. Also ist sie waagrecht.

  **Nicht hinreichend:** Eine waagrechte Tangente gibt es auch an einer „Terrasse“. Der Graph von
  $x^3$ steigt, wird bei $0$ kurz waagrecht und steigt dann weiter. Dort ist $f'(0) = 0$, aber weder ein
  Hoch- noch ein Tiefpunkt. Erst ein Vorzeichenwechsel von $f'$ garantiert ein Extremum.
```

```aufgabe
id: dr-extrema-basis
titel: Scheitel einer Parabel mit der Ableitung
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Bestimme den Extrempunkt von $f(x) = x^2 - 6x + 5$ und entscheide, ob es ein Hoch- oder Tiefpunkt ist.
teile:
  - typ: vektor
    label: 'Extrempunkt'
    namen: ["x", "y"]
    loesung: ["3", "-4"]
    fehler:
      - wert: ["3", "0"]
        meldung: '$0$ ist die Steigung $f''(3)$. Die $y$-Koordinate ist der Funktionswert $f(3) = 9 - 18 + 5$.'
  - typ: auswahl
    label: 'Art'
    optionen: ['Hochpunkt', 'Tiefpunkt']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: '$f''''(x) = 2 > 0$. Positive zweite Ableitung heißt Tiefpunkt. Die Parabel ist nach oben offen.'
hinweise:
  - '$f''(x) = 2x - 6 = 0$ lösen, dann mit $f''''$ die Art bestimmen.'
loesung: |
  Kandidat: $f'(x) = 2x - 6 = 0$, also $x = 3$.
  ---
  Art: $f''(x) = 2 > 0$, also Tiefpunkt. Höhe: $f(3) = 9 - 18 + 5 = -4$. Ergebnis $T(3 \mid -4)$, der Scheitel der nach oben offenen Parabel.
```

```aufgabe
id: dr-mono-ablesen
titel: Monotonie aus der faktorisierten Ableitung
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Für eine Funktion $f$ gilt $f'(x) = (x - 2)(x + 4)$. Auf welchem Intervall ist $f$ streng monoton fallend?
teile:
  - typ: auswahl
    optionen: ['$[-4, 2]$', '$(-\infty, -4]$ und $[2, \infty)$', '$[-2, 4]$', '$(-\infty, 2]$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Teste $x = 5$: $(5 - 2)(5 + 4) = 27 > 0$. Dort steigt $f$. Gesucht ist, wo $f'' < 0$ ist.'
      - wert: 2
        meldung: 'Die Nullstellen von $(x - 2)(x + 4)$ sind $2$ und $-4$, nicht $-2$ und $4$. Ein Faktor $x - a$ ist null bei $x = a$.'
hinweise:
  - Bestimme die Nullstellen von $f'$ und teste das Vorzeichen zwischen ihnen, zum Beispiel bei $x = 0$.
loesung: |
  Nullstellen von $f'$: $x = 2$ und $x = -4$.
  ---
  Teststelle $0$ zwischen ihnen: $f'(0) = (-2)\cdot 4 = -8 < 0$. Also fällt $f$ auf $[-4, 2]$. Außerhalb sind beide Faktoren gleichen Vorzeichens, dort steigt $f$.
```

```aufgabe
id: dr-extrema-kubisch
titel: Hoch- und Tiefpunkt eines Polynoms dritten Grades
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Bestimme Hochpunkt und Tiefpunkt von $f(x) = 2x^3 - 9x^2 + 12x$. Begründe die Art jeweils mit der zweiten Ableitung.
teile:
  - typ: vektor
    label: 'Hochpunkt $H$'
    namen: ["x", "y"]
    loesung: ["1", "5"]
    fehler:
      - wert: ["2", "4"]
        meldung: 'Prüfe mit $f''''$: $f''''(2) = 24 - 18 = 6 > 0$. Bei $x = 2$ liegt also der **Tief**punkt.'
      - wert: ["1", "0"]
        meldung: 'Die $y$-Koordinate ist $f(1)$, nicht $f''(1)$.'
  - typ: vektor
    label: 'Tiefpunkt $T$'
    namen: ["x", "y"]
    loesung: ["2", "4"]
    fehler:
      - wert: ["2", "0"]
        meldung: 'Die $y$-Koordinate ist $f(2) = 16 - 36 + 24$, nicht die Steigung.'
hinweise:
  - '$f''(x) = 6x^2 - 18x + 12 = 6\,(x^2 - 3x + 2)$. Zerlege den Klammerausdruck in Faktoren.'
  - '$f''''(x) = 12x - 18$. Setze beide Kandidaten ein.'
loesung: |
  Ansatz: Kandidaten aus $f'(x) = 0$, Art mit $f''$, Höhe mit $f$.
  ---
  $f'(x) = 6x^2 - 18x + 12 = 6\,(x - 1)(x - 2)$. Kandidaten: $x = 1$ und $x = 2$.
  ---
  $f''(x) = 12x - 18$. $f''(1) = -6 < 0$, also Hochpunkt. $f''(2) = 6 > 0$, also Tiefpunkt.
  ---
  Höhen: $f(1) = 2 - 9 + 12 = 5$ und $f(2) = 16 - 36 + 24 = 4$. Ergebnis $H(1 \mid 5)$ und $T(2 \mid 4)$. Plausibel: Der Hochpunkt liegt höher als der Tiefpunkt.
```

```aufgabe
id: dr-monotonie
titel: Aussagen über Monotonie prüfen
niveau: 2
lernziel: 5
kompetenz: verstehen
angabe: |
  Untersuche $f(x) = -x^3 + 3x^2 + 9x - 2$ auf Monotonie. Welche Aussagen sind richtig?
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$f$ ist auf $(-\infty, -1]$ streng monoton fallend.'
      - '$f$ ist auf $[-1, 3]$ streng monoton wachsend.'
      - '$f$ ist auf $[0, \infty)$ streng monoton fallend.'
      - '$f$ hat bei $x = 3$ einen Hochpunkt.'
      - '$f$ hat bei $x = -1$ einen Hochpunkt.'
    richtig: [0, 1, 3]
    fehler:
      - wert: [0, 1, 2, 3]
        meldung: 'Auf $[0, \infty)$ steigt $f$ zuerst bis $3$ und fällt erst danach. Monoton auf einem Intervall heißt: auf dem **ganzen** Intervall in eine Richtung.'
      - wert: [0, 1, 4]
        meldung: 'Bei $-1$ wechselt $f''$ von $-$ nach $+$. Vorher fällt $f$, danach steigt $f$. Das ist ein Tiefpunkt.'
hinweise:
  - '$f''(x) = -3x^2 + 6x + 9 = -3\,(x + 1)(x - 3)$.'
  - Bestimme das Vorzeichen auf den drei Teilintervallen. Achtung, der Vorfaktor $-3$ dreht alles um.
loesung: |
  Ansatz: Vorzeichen von $f'(x) = -3\,(x + 1)(x - 3)$ auf den Teilintervallen.
  ---
  Teststellen: $f'(-2) = -3\cdot(-1)\cdot(-5) = -15 < 0$, $f'(0) = 9 > 0$, $f'(4) = -3\cdot 5\cdot 1 = -15 < 0$.
  ---
  Also fallend auf $(-\infty, -1]$, wachsend auf $[-1, 3]$, fallend auf $[3, \infty)$. Aussagen 1 und 2 sind richtig, Aussage 3 ist falsch.
  ---
  Bei $3$ wechselt $f'$ von $+$ nach $-$, also Hochpunkt (Aussage 4 richtig). Bei $-1$ wechselt $f'$ von $-$ nach $+$, also Tiefpunkt (Aussage 5 falsch).
```

```aufgabe
id: dr-extrema-viertgrad
titel: Extrema eines Polynoms vierten Grades
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Bestimme alle Extrempunkte von $f(x) = x^4 - 8x^2$.
teile:
  - typ: vektor
    label: 'Hochpunkt'
    namen: ["x", "y"]
    loesung: ["0", "0"]
  - typ: menge
    label: '$x$-Koordinaten der Tiefpunkte'
    loesung: ["-2", "2"]
    fehler:
      - wert: ["2"]
        meldung: '$x^2 = 4$ hat zwei Lösungen. Die Funktion ist symmetrisch zur $y$-Achse.'
      - wert: ["-2", "0", "2"]
        meldung: 'Bei $x = 0$ ist $f''''(0) = -16 < 0$. Dort liegt der **Hoch**punkt, nicht ein Tiefpunkt.'
  - typ: zahl
    label: '$y$-Koordinate der Tiefpunkte'
    loesung: "2^4 - 8*2^2"
    anzeige: '-16'
    fehler:
      - wert: "32"
        meldung: '$32$ ist $f''''(2)$. Die Höhe ist $f(2) = 16 - 32$.'
hinweise:
  - '$f''(x) = 4x^3 - 16x$. Hebe $4x$ heraus.'
  - '$f''''(x) = 12x^2 - 16$. Setze jeden Kandidaten ein.'
gefuehrt:
  - text: Zerlege $f'(x) = 4x^3 - 16x$ und gib alle Nullstellen an.
    teil: { typ: menge, loesung: ["-2", "0", "2"] }
    erklaerung: '$f''(x) = 4x\,(x^2 - 4) = 4x\,(x - 2)(x + 2)$. Nullstellen $-2$, $0$ und $2$.'
  - text: Berechne $f''(0)$. Was liegt bei $x = 0$ vor?
    teil: { typ: zahl, loesung: "-16" }
    erklaerung: '$f''''(x) = 12x^2 - 16$, $f''''(0) = -16 < 0$, also Hochpunkt. Höhe $f(0) = 0$.'
  - text: Berechne $f''(2)$.
    teil: { typ: zahl, loesung: "32" }
    erklaerung: '$f''''(2) = 48 - 16 = 32 > 0$, also Tiefpunkt. Wegen der Symmetrie gilt dasselbe bei $-2$.'
  - text: Wie hoch liegen die Tiefpunkte?
    teil: { typ: zahl, loesung: "-16" }
    erklaerung: '$f(2) = 16 - 32 = -16$. Tiefpunkte $(\pm 2 \mid -16)$.'
loesung: |
  Ansatz: Kandidaten aus $f'(x) = 0$, Art mit $f''$. Es kommen nur gerade Hochzahlen vor, also ist der Graph symmetrisch zur $y$-Achse.
  ---
  $f'(x) = 4x^3 - 16x = 4x\,(x - 2)(x + 2)$. Kandidaten $-2$, $0$, $2$.
  ---
  $f''(x) = 12x^2 - 16$. $f''(0) = -16 < 0$: Hochpunkt $(0 \mid 0)$. $f''(\pm 2) = 32 > 0$: Tiefpunkte.
  ---
  $f(\pm 2) = 16 - 32 = -16$. Ergebnis: Hochpunkt $H(0 \mid 0)$, Tiefpunkte $T_{1,2}(\pm 2 \mid -16)$.
```

```aufgabe
id: dr-notwendig-hinreichend
titel: Notwendig und hinreichend unterscheiden
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  Eine Mitschülerin sagt: „Wenn $f'(x_0) = 0$ ist, hat $f$ an der Stelle $x_0$ immer einen Hoch- oder Tiefpunkt.“
  Nimm Stellung und gib ein Gegenbeispiel an. Erkläre, welche Rolle die Bedingung $f'(x_0) = 0$ wirklich spielt.
teile:
  - typ: text
    muster: |
      Die Aussage ist falsch. Gegenbeispiel: $f(x) = x^3$ hat $f'(0) = 0$. Aber $f$ ist überall streng
      monoton wachsend und hat bei $0$ nur einen Sattelpunkt, kein Extremum. Die Bedingung $f'(x_0) = 0$
      ist **notwendig**: Jedes Extremum an einer inneren Stelle, an der $f$ differenzierbar ist, erfüllt sie.
      Sie ist aber nicht **hinreichend**. Hinreichend ist zum Beispiel ein Vorzeichenwechsel von $f'$ bei $x_0$
      oder $f'(x_0) = 0$ zusammen mit $f''(x_0) \neq 0$.
hinweise:
  - Denk an eine Funktion, die überall steigt, aber an einer Stelle kurz waagrecht ist.
  - Was bedeutet „notwendig“, was „hinreichend“?
loesung: |
  Ansatz: Eine Allaussage widerlegt man mit einem einzigen Gegenbeispiel.
  ---
  Gegenbeispiel $f(x) = x^3$: $f'(0) = 0$, aber $f(x) < 0$ für $x < 0$ und $f(x) > 0$ für $x > 0$. Bei $0$ ist also weder ein Maximum noch ein Minimum.
  ---
  $f'(x_0) = 0$ ist **notwendig**: Ohne sie gibt es kein Extremum an einer inneren, differenzierbaren Stelle. Sie ist nicht **hinreichend**. Erst ein Vorzeichenwechsel von $f'$ oder $f''(x_0) \neq 0$ sichert ein Extremum.
```

```aufgabe
id: dr-rand-extremum
titel: Globale Extrema mit Randwerten
niveau: 3
lernziel: 5
kompetenz: anwenden
angabe: |
  Gegeben ist $f(x) = x^3 - 6x^2 + 9x$ auf dem Intervall $[0, 5]$.

  a) Bestimme die lokalen Extrempunkte im Inneren des Intervalls.

  b) Bestimme das globale Maximum (Stelle und Wert) und alle Stellen des globalen Minimums.
teile:
  - typ: vektor
    label: 'a) Hochpunkt'
    namen: ["x", "y"]
    loesung: ["1", "4"]
  - typ: vektor
    label: 'a) Tiefpunkt'
    namen: ["x", "y"]
    loesung: ["3", "0"]
  - typ: zahl
    label: 'b) Stelle des globalen Maximums'
    loesung: "5"
    fehler:
      - wert: "1"
        meldung: 'Der Hochpunkt bei $1$ ist nur lokal. Vergleiche mit dem Randwert $f(5)$.'
  - typ: zahl
    label: 'b) globales Maximum'
    loesung: "5^3 - 6*5^2 + 9*5"
    anzeige: '20'
    fehler:
      - wert: "4"
        meldung: '$4$ ist der Wert im Hochpunkt. Am rechten Rand ist $f(5) = 125 - 150 + 45$ größer.'
  - typ: menge
    label: 'b) Stellen des globalen Minimums'
    loesung: ["0", "3"]
    fehler:
      - wert: ["3"]
        meldung: 'Auch am linken Rand ist $f(0) = 0$. Der kleinste Wert $0$ wird an zwei Stellen angenommen.'
hinweise:
  - '$f''(x) = 3x^2 - 12x + 9 = 3\,(x - 1)(x - 3)$.'
  - 'Vergleiche die Funktionswerte an allen Kandidaten im Inneren **und** an den Rändern $0$ und $5$.'
loesung: |
  Ansatz: Auf einem abgeschlossenen Intervall kommen als globale Extremstellen die stationären Stellen im Inneren und die Ränder in Frage.
  ---
  a) $f'(x) = 3\,(x - 1)(x - 3)$, Kandidaten $1$ und $3$. $f''(x) = 6x - 12$: $f''(1) = -6 < 0$ Hochpunkt, $f''(3) = 6 > 0$ Tiefpunkt. Höhen $f(1) = 1 - 6 + 9 = 4$ und $f(3) = 27 - 54 + 27 = 0$.
  ---
  Randwerte: $f(0) = 0$ und $f(5) = 125 - 150 + 45 = 20$.
  ---
  b) Vergleich der Werte $4$, $0$, $0$, $20$: Globales Maximum $20$ am Rand $x = 5$. Globales Minimum $0$ bei $x = 0$ und bei $x = 3$.
```

## Krümmung und Wendepunkte

```aufgabe
id: dr-check-zweite-ableitung
titel: Zweite Ableitung berechnen
niveau: 1
art: check
angabe: |
  Wie lautet die zweite Ableitung von $f(x) = x^3$?
  (Herkunft: [9.7 Kettenregel und höhere Ableitungen](/lernen/mathe3/differentialrechnung/kettenregel-hoehere-ableitungen-und-die-wahl-der-richtigen-regel))
teile:
  - typ: term
    label: '$f''''(x)$'
    loesung: "6*x"
    fehler:
      - wert: "3*x^2"
        meldung: 'Das ist die **erste** Ableitung. Leite $3x^2$ noch einmal ab.'
loesung: |
  Erste Ableitung: $f'(x) = 3x^2$.
  ---
  Zweite Ableitung: $f''(x) = 3\cdot 2x = 6x$.
```

Die erste Ableitung sagt, **ob** ein Graph steigt oder fällt. Die zweite Ableitung sagt, **wie sich
die Steigung ändert**. Daraus liest man ab, in welche Richtung der Graph sich biegt. Diese Biegung
heißt **Krümmung**. Die Stellen, an denen die Biegerichtung wechselt, heißen **Wendestellen**. Sie
sind oft die interessantesten Stellen einer Anwendung: Dort wächst etwas am schnellsten.

### Links- und rechtsgekrümmt

Stell dir vor, du fährst mit dem Fahrrad den Graphen entlang, von links nach rechts.

- Musst du nach **links** lenken, ist der Graph **linksgekrümmt**. Die Steigung nimmt zu, der Graph
  biegt sich nach oben wie eine Talsohle. Dann ist $f''(x) > 0$.
- Musst du nach **rechts** lenken, ist der Graph **rechtsgekrümmt**. Die Steigung nimmt ab, der Graph
  biegt sich nach unten wie eine Bergkuppe. Dann ist $f''(x) < 0$.

Statt linksgekrümmt sagt man auch **konvex**, statt rechtsgekrümmt **konkav**. **Beispiel:** Die
Normalparabel $x^2$ hat $f''(x) = 2 > 0$, sie ist überall linksgekrümmt. **Nichtbeispiel:** Eine Gerade
wie $y = 3x + 1$ hat $f'' = 0$. Sie ist weder links- noch rechtsgekrümmt, sie biegt sich gar nicht.

:::definition[Wendepunkt, Wendetangente, Sattelpunkt]
Eine Stelle $x_0$, an der der Graph von $f$ seine Krümmung wechselt (von links nach rechts oder
umgekehrt), heißt **Wendestelle**. Der Punkt $\big(x_0 \mid f(x_0)\big)$ heißt **Wendepunkt**, die
Tangente dort **Wendetangente**. Ein Wendepunkt mit waagrechter Tangente heißt **Sattelpunkt** oder
**Terrassenpunkt**.
:::

:::satz[Kriterien für Wendestellen]
Die Funktion $f$ sei dreimal differenzierbar.
- **Notwendig:** Ist $x_0$ eine Wendestelle, dann ist $f''(x_0) = 0$.
- **Hinreichend:** Ist $f''(x_0) = 0$ und $f'''(x_0) \neq 0$, dann ist $x_0$ eine Wendestelle. Ebenso
  reicht es, wenn $f''$ an der Stelle $x_0$ das Vorzeichen wechselt.
:::

Das ist dieselbe Logik wie bei den Extremstellen, nur eine Ableitungsstufe höher. Eine Wendestelle
von $f$ ist eine Stelle, an der $f'$ einen Hoch- oder Tiefpunkt hat. Dort ist die **Steigung** von $f$
also in der näheren Umgebung am größten oder am kleinsten. Oft heißt das: Der Graph steigt oder fällt
dort am steilsten. Das kennst du schon aus [9.4 Graphisch differenzieren](/lernen/mathe3/differentialrechnung/graphisch-differenzieren-vom-graphen-von-f-zum-graphen-von-f-und-zurueck).

:::beispiel[Krümmung, Wendepunkt und Wendetangente]
Gegeben ist $f(x) = x^3 - 3x^2 + 2$.

1. Ableitungen: $f'(x) = 3x^2 - 6x$, $f''(x) = 6x - 6$, $f'''(x) = 6$.
2. Krümmung: $f''(x) < 0$ für $x < 1$, also rechtsgekrümmt. $f''(x) > 0$ für $x > 1$, also linksgekrümmt.
3. Wendestelle: $f''(x) = 0$ ergibt $x = 1$. Wegen $f'''(1) = 6 \neq 0$ ist das wirklich eine Wendestelle.
4. Wendepunkt: $f(1) = 1 - 3 + 2 = 0$, also $W(1 \mid 0)$.
5. Wendetangente: Steigung $f'(1) = 3 - 6 = -3$. Also $y = 0 - 3\,(x - 1) = -3x + 3$.

An der Stelle $1$ fällt der Graph am steilsten. Links davon wird er immer steiler, rechts davon wieder flacher.
:::

:::beispiel[Ein Sattelpunkt und ein gewöhnlicher Wendepunkt]
Gegeben ist $f(x) = x^4 - 4x^3$.

1. Ableitungen: $f'(x) = 4x^3 - 12x^2 = 4x^2\,(x - 3)$, $f''(x) = 12x^2 - 24x = 12x\,(x - 2)$, $f'''(x) = 24x - 24$.
2. Stationäre Stellen: $x = 0$ und $x = 3$. Bei $3$ ist $f''(3) = 36 > 0$, also Tiefpunkt $T(3 \mid -27)$.
3. Bei $0$ ist $f''(0) = 0$, das zweite Kriterium versagt. Vorzeichen von $f' = 4x^2\,(x - 3)$ nahe $0$:
   Der Faktor $4x^2$ ist positiv, der Faktor $x - 3$ negativ. Also ist $f' < 0$ links **und** rechts von $0$.
   Kein Vorzeichenwechsel, also kein Extremum.
4. Wendestellen: $f''(x) = 0$ ergibt $x = 0$ und $x = 2$. Es ist $f'''(0) = -24 \neq 0$ und $f'''(2) = 24 \neq 0$.
5. Bei $0$ ist die Tangente waagrecht, also **Sattelpunkt** $S(0 \mid 0)$. Bei $2$ ist $f(2) = 16 - 32 = -16$,
   also gewöhnlicher **Wendepunkt** $W(2 \mid -16)$ mit Steigung $f'(2) = -16$.
:::

```plot
x: [-1.5, 4.2]
y: [-30, 12]
achsen: { x: "x", y: "y" }
graphen:
  - { f: "x^4 - 4*x^3", label: "f(x) = x⁴ − 4x³", farbe: 0 }
punkte:
  - { x: 0, y: 0, label: "Sattelpunkt S(0|0)" }
  - { x: 2, y: -16, label: "Wendepunkt W(2|−16)", farbe: 2 }
  - { x: 3, y: -27, label: "Tiefpunkt T(3|−27)", farbe: 1 }
beschriftung: Der Graph von f(x) = x⁴ − 4x³. Im Ursprung ist die Tangente waagrecht, aber der Graph fällt weiter. Das ist ein Sattelpunkt. Bei x = 2 wechselt die Krümmung ein zweites Mal, bei x = 3 liegt der Tiefpunkt.
```

:::achtung[„f″(x₀) = 0, also Wendepunkt“]
Für $f(x) = x^4$ schreibt jemand: „$f''(x) = 12x^2$, $f''(0) = 0$, also hat $f$ bei $0$ einen Wendepunkt.“ (falsch)

$f''(x_0) = 0$ ist nur **notwendig**. Hier ist $f''(x) = 12x^2$ links und rechts von $0$ positiv. Der
Graph ist auf beiden Seiten linksgekrümmt, die Krümmung wechselt also nicht. Bei $0$ liegt sogar ein
Tiefpunkt. Prüfe immer $f'''(x_0) \neq 0$ oder einen Vorzeichenwechsel von $f''$. Hier ist $f'''(0) = 0$,
also hilft nur der Vorzeichenwechsel, und den gibt es nicht.
:::

:::achtung[Steigen mit Linkskrümmung verwechselt]
Jemand argumentiert: „$f(x) = \sqrt x$ hat $f'(x) = \frac{1}{2\sqrt x} > 0$, also ist der Graph linksgekrümmt.“ (falsch)

$f' > 0$ heißt nur, dass der Graph **steigt**. Über die Krümmung entscheidet $f''$. Hier ist
$f''(x) = -\frac{1}{4\sqrt{x^3}} < 0$, der Graph ist also rechtsgekrümmt. Man sieht es am Bild: Die
Wurzel steigt immer langsamer. Ihre Steigung nimmt ab.
:::

:::merke[Rezept: Krümmung und Wendepunkte]
1. $f''$ und $f'''$ berechnen.
2. Kandidaten: Lösungen von $f''(x) = 0$.
3. Prüfen: $f'''(x_0) \neq 0$ oder Vorzeichenwechsel von $f''$. Ist $f'''(x_0) = 0$, unbedingt den Vorzeichenwechsel prüfen.
4. $y$-Koordinate mit $f$ berechnen. Ist zusätzlich $f'(x_0) = 0$, ist es ein Sattelpunkt.
5. Krümmung aus dem Vorzeichen von $f''$ zwischen den Kandidaten ablesen.
:::

```reflexion
frage: Warum hat die Steigung $f'$ an einer Wendestelle einen Hoch- oder Tiefpunkt?
antwort: |
  Links von einer Wendestelle, an der die Krümmung von rechts nach links wechselt, ist $f'' < 0$. Die
  Steigung $f'$ nimmt dort also ab. Rechts davon ist $f'' > 0$, die Steigung nimmt wieder zu.

  Die Steigung fällt also bis zur Wendestelle und steigt danach. An der Wendestelle selbst hat $f'$
  deshalb einen Tiefpunkt. Beim anderen Wechsel hat $f'$ entsprechend einen Hochpunkt. In Anwendungen
  heißt das: Am Wendepunkt ändert sich die Größe am schnellsten oder am langsamsten.
```

```aufgabe
id: dr-kruemmung
titel: Krümmungsverhalten und Wendestelle
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Gegeben ist $f(x) = x^3 - 6x^2 + 1$. Bestimme die Wendestelle und gib an, für welche $x$ der Graph linksgekrümmt ist.
teile:
  - typ: zahl
    label: 'Wendestelle $x_W$'
    loesung: "2"
    fehler:
      - wert: "4"
        meldung: '$4$ ist eine Nullstelle von $f''(x) = 3x^2 - 12x$, also eine **Extrem**stelle. Wendestellen sind Nullstellen von $f''''$.'
  - typ: auswahl
    label: 'Der Graph ist linksgekrümmt für'
    optionen: ['$x < 2$', '$x > 2$', '$0 < x < 4$']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Teste $x = 0$: $f''''(0) = -12 < 0$. Dort ist der Graph **rechts**gekrümmt.'
      - wert: 2
        meldung: 'Zwischen $0$ und $4$ ist $f''$ negativ, der Graph fällt dort. Die Krümmung hängt aber vom Vorzeichen von $f''''$ ab.'
hinweise:
  - '$f''''(x) = 6x - 12$. Linksgekrümmt heißt $f''''(x) > 0$.'
loesung: |
  Ableitungen: $f'(x) = 3x^2 - 12x$, $f''(x) = 6x - 12$, $f'''(x) = 6$.
  ---
  $f''(x) = 0$ ergibt $x = 2$. Wegen $f'''(2) = 6 \neq 0$ ist das eine Wendestelle.
  ---
  $f''(x) > 0$ genau für $x > 2$. Dort ist der Graph linksgekrümmt, für $x < 2$ rechtsgekrümmt.
```

```aufgabe
id: dr-kruemmung-zuordnen
titel: Welche Funktionen sind linksgekrümmt?
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Welche der folgenden Funktionen sind auf dem ganzen Intervall $(0, \infty)$ linksgekrümmt?
teile:
  - typ: auswahl
    mehrfach: true
    optionen: ['$e^x$', '$\ln x$', '$x^2$', '$\sqrt x$', '$\frac1x$']
    richtig: [0, 2, 4]
    fehler:
      - wert: [0, 2]
        meldung: '$\frac1x$ fällt zwar, aber immer langsamer. Seine Steigung $-\frac{1}{x^2}$ nimmt also zu. Das ist Linkskrümmung: $\left(\frac1x\right)'''' = \frac{2}{x^3} > 0$.'
      - wert: [0, 2, 3, 4]
        meldung: '$\sqrt x$ steigt, aber immer langsamer. Seine Steigung nimmt ab, also ist der Graph rechtsgekrümmt.'
      - wert: [0, 1, 2]
        meldung: '$\ln x$ steigt immer langsamer, denn $(\ln x)'''' = -\frac{1}{x^2} < 0$. Der Graph ist rechtsgekrümmt.'
hinweise:
  - Linksgekrümmt heißt, die Steigung nimmt zu. Stell dir jeden Graphen vor oder berechne $f''$.
loesung: |
  Ansatz: Vorzeichen von $f''$ auf $(0, \infty)$.
  ---
  $(e^x)'' = e^x > 0$, $(x^2)'' = 2 > 0$ und $\left(\frac1x\right)'' = \frac{2}{x^3} > 0$: linksgekrümmt.
  ---
  $(\ln x)'' = -\frac{1}{x^2} < 0$ und $(\sqrt x)'' = -\frac{1}{4\sqrt{x^3}} < 0$: rechtsgekrümmt. Richtig sind also $e^x$, $x^2$ und $\frac1x$.
```

```aufgabe
id: dr-wende-tangente
titel: Wendepunkt und Wendetangente
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Bestimme den Wendepunkt von $f(x) = -x^3 + 6x^2 - 9x + 4$ und die Gleichung der Wendetangente.
teile:
  - typ: vektor
    label: 'Wendepunkt'
    namen: ["x", "y"]
    loesung: ["2", "2"]
    fehler:
      - wert: ["2", "3"]
        meldung: '$3$ ist die Steigung $f''(2)$. Die $y$-Koordinate ist $f(2) = -8 + 24 - 18 + 4$.'
  - typ: term
    label: 'Wendetangente: $y = $'
    loesung: "3*x - 4"
    fehler:
      - wert: "3*x + 2"
        meldung: 'Die Höhe $2$ gilt an der Stelle $2$, nicht bei $x = 0$. Rechne $y = 2 + 3\,(x - 2)$ aus.'
hinweise:
  - '$f''(x) = -3x^2 + 12x - 9$ und $f''''(x) = -6x + 12$.'
  - 'Die Wendetangente ist die Tangente im Wendepunkt, mit Steigung $f''(x_W)$.'
loesung: |
  Ansatz: Wendestelle aus $f''(x) = 0$, Wendetangente wie jede Tangente mit Punkt und Steigung.
  ---
  $f''(x) = -6x + 12 = 0$ ergibt $x = 2$. $f'''(x) = -6 \neq 0$, also Wendestelle. Höhe $f(2) = -8 + 24 - 18 + 4 = 2$, also $W(2 \mid 2)$.
  ---
  Steigung $f'(2) = -12 + 24 - 9 = 3$. Wendetangente $y = 2 + 3\,(x - 2) = 3x - 4$.
  ---
  Deutung: An der Stelle $2$ steigt der Graph am stärksten, mit Steigung $3$. Probe: $3\cdot 2 - 4 = 2$.
```

```aufgabe
id: dr-wende-verkauf
titel: Wann wächst der Absatz am schnellsten?
niveau: 2
lernziel: 5
kompetenz: modellieren
angabe: |
  Ein neues Produkt wird eingeführt. Die Zahl der bis zum Zeitpunkt $t$ insgesamt verkauften Stück ist
  $N(t) = -t^3 + 9t^2$ (in tausend Stück, $t$ in Monaten, $0 \le t \le 6$).

  a) Zu welchem Zeitpunkt wächst die Verkaufszahl am schnellsten?

  b) Wie viele Stück pro Monat werden zu diesem Zeitpunkt verkauft?
teile:
  - typ: zahl
    label: 'a) Zeitpunkt'
    einheit: Monate
    loesung: "3"
    fehler:
      - wert: "6"
        meldung: 'Bei $t = 6$ ist $N''(6) = 0$: Dort wächst die Zahl gar nicht mehr. Gesucht ist der **größte** Wert von $N''$, also die Wendestelle von $N$.'
  - typ: zahl
    label: 'b) Verkaufsrate'
    einheit: tausend Stück/Monat
    loesung: "-3*3^2 + 18*3"
    anzeige: '27'
    fehler:
      - wert: "54"
        meldung: '$54$ tausend Stück ist $N(3)$, die **Gesamtzahl** bis dahin. Gefragt ist die Rate $N''(3)$.'
hinweise:
  - 'Die Verkaufsrate ist $N''(t)$. Sie ist am größten, wo ihre Ableitung $N''''(t)$ null ist.'
  - '$N''(t) = -3t^2 + 18t$ und $N''''(t) = -6t + 18$.'
gefuehrt:
  - text: Wie lautet die Verkaufsrate $N'(t)$?
    teil: { typ: term, variable: t, loesung: "-3*t^2 + 18*t" }
    erklaerung: 'Potenzregel: $N''(t) = -3t^2 + 18t$, in tausend Stück pro Monat.'
  - text: Wie lautet $N''(t)$?
    teil: { typ: term, variable: t, loesung: "-6*t + 18" }
    erklaerung: '$N''''(t) = -6t + 18$. Das ist die Änderung der Verkaufsrate.'
  - text: Wann ist $N''(t) = 0$?
    teil: { typ: zahl, loesung: "3" }
    erklaerung: '$-6t + 18 = 0$, also $t = 3$. Wegen $N'''''' = -6 < 0$ hat $N''$ dort ein Maximum.'
  - text: Wie groß ist die Verkaufsrate zu diesem Zeitpunkt?
    teil: { typ: zahl, loesung: "27" }
    erklaerung: '$N''(3) = -27 + 54 = 27$, also $27\,000$ Stück pro Monat.'
loesung: |
  Ansatz: „Am schnellsten wachsen“ heißt: Die Rate $N'$ ist maximal. Das ist eine Wendestelle von $N$.
  ---
  $N'(t) = -3t^2 + 18t$ und $N''(t) = -6t + 18$. $N''(t) = 0$ ergibt $t = 3$. Da $N'''(t) = -6 < 0$, ist das ein Maximum der Rate.
  ---
  a) Nach $3$ Monaten wächst die Verkaufszahl am schnellsten.
  ---
  b) $N'(3) = -27 + 54 = 27$. Zu diesem Zeitpunkt werden etwa $27\,000$ Stück pro Monat verkauft. Danach wächst die Gesamtzahl langsamer.
```

```aufgabe
id: dr-wende-nicht
titel: Zweite Ableitung null, aber kein Wendepunkt
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  Gegeben ist $f(x) = x^4 + x$.

  a) Hat der Graph an der Stelle $0$ einen Wendepunkt?

  b) Begründe deine Antwort mit der zweiten Ableitung.
teile:
  - typ: auswahl
    label: 'a)'
    optionen: ['Ja, weil $f''''(0) = 0$ ist.', 'Nein, weil $f''''$ bei $0$ das Vorzeichen nicht wechselt.', 'Ja, weil $f''(0) = 1 \neq 0$ ist.']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: '$f''''(0) = 0$ ist nur **notwendig**. Für einen Wendepunkt muss die Krümmung tatsächlich wechseln.'
      - wert: 2
        meldung: 'Die erste Ableitung sagt etwas über Steigen und Fallen, nicht über die Krümmung.'
  - typ: text
    label: 'b) Begründung'
    muster: |
      $f'(x) = 4x^3 + 1$ und $f''(x) = 12x^2$. Es ist $f''(0) = 0$, aber $f''(x) = 12x^2 > 0$ für alle $x \neq 0$.
      Der Graph ist also links und rechts von $0$ linksgekrümmt. Die Krümmung wechselt nicht, deshalb ist $0$
      keine Wendestelle. Auch $f'''(0) = 24\cdot 0 = 0$ liefert keine Bestätigung.
hinweise:
  - Berechne $f''(x)$. Welches Vorzeichen hat $f''$ für $x = -0{,}1$ und für $x = 0{,}1$?
  - Notwendig ist $f''(x_0) = 0$. Hinreichend ist ein Vorzeichenwechsel von $f''$.
loesung: |
  Ansatz: Kandidat aus $f''(x) = 0$, dann prüfen, ob die Krümmung wirklich wechselt.
  ---
  $f''(x) = 12x^2$, also $f''(0) = 0$. Der Kandidat ist $0$. Außerdem ist $f'''(x) = 24x$ und $f'''(0) = 0$. Dieses Kriterium entscheidet also nichts.
  ---
  Vorzeichen: $f''(-0{,}1) = 0{,}12 > 0$ und $f''(0{,}1) = 0{,}12 > 0$. Kein Vorzeichenwechsel, also kein Wendepunkt. Der Graph ist überall linksgekrümmt.
```

```aufgabe
id: dr-kruemmung-fehler
titel: Steigen ist nicht Linkskrümmung
niveau: 2
lernziel: 5
kompetenz: verstehen
angabe: |
  Ein Mitschüler sagt: „$f(x) = \sqrt x$ hat $f'(x) > 0$ für alle $x > 0$. Also ist der Graph linksgekrümmt.“

  a) Stimmt das?

  b) Berechne $f''(4)$.
teile:
  - typ: auswahl
    label: 'a)'
    optionen: ['Ja.', 'Nein. $f'' > 0$ heißt nur, dass der Graph steigt. Für die Krümmung zählt das Vorzeichen von $f''''$.']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Die Wurzel steigt, aber immer langsamer. Eine abnehmende Steigung bedeutet Rechtskrümmung.'
  - typ: zahl
    label: 'b) $f''''(4)$'
    loesung: "-1/(4*4^1.5)"
    anzeige: '-\tfrac{1}{32}'
    fehler:
      - wert: "1/4"
        meldung: 'Das ist $f''(4) = \frac{1}{2\sqrt4}$. Leite $f''(x) = \frac12 x^{-1/2}$ noch einmal ab.'
      - wert: "1/32"
        meldung: 'Das Vorzeichen fehlt. Die Hochzahl $-\frac12$ kommt als Faktor nach vorne.'
hinweise:
  - '$f(x) = x^{1/2}$, $f''(x) = \frac12 x^{-1/2}$. Leite noch einmal mit der Potenzregel ab.'
  - '$4^{3/2} = \sqrt{4^3} = 8$.'
loesung: |
  Ansatz: Über die Krümmung entscheidet $f''$, nicht $f'$.
  ---
  $f'(x) = \frac12 x^{-1/2}$, $f''(x) = \frac12\cdot\left(-\frac12\right)x^{-3/2} = -\frac{1}{4\sqrt{x^3}}$.
  ---
  $f''(4) = -\frac{1}{4\cdot 8} = -\frac{1}{32} < 0$. Der Graph ist also rechtsgekrümmt. Die Aussage des Mitschülers ist falsch.
```

```aufgabe
id: dr-sattelpunkt
titel: Wenn die zweite Ableitung versagt
niveau: 3
lernziel: 5
kompetenz: rechnen
angabe: |
  Untersuche $f(x) = 3x^4 - 8x^3$ auf Extrem-, Sattel- und Wendepunkte.
teile:
  - typ: vektor
    label: 'Tiefpunkt'
    namen: ["x", "y"]
    loesung: ["2", "-16"]
  - typ: vektor
    label: 'Sattelpunkt'
    namen: ["x", "y"]
    loesung: ["0", "0"]
    fehler:
      - wert: ["4/3", "-256/27"]
        meldung: 'An der Stelle $\frac43$ ist $f''(\frac43) \neq 0$, die Tangente ist dort nicht waagrecht. Ein Sattelpunkt braucht $f'' = 0$ **und** einen Krümmungswechsel.'
  - typ: vektor
    label: 'Wendepunkt, der kein Sattelpunkt ist'
    namen: ["x", "y"]
    loesung: ["4/3", "-256/27"]
hinweise:
  - '$f''(x) = 12x^3 - 24x^2 = 12x^2\,(x - 2)$. Bei $x = 0$ ist $f''''(0) = 0$.'
  - 'Prüfe bei $0$ das Vorzeichen von $f''$ links und rechts. $f''''(x) = 36x^2 - 48x = 12x\,(3x - 4)$.'
loesung: |
  Ansatz: Kandidaten für Extrema aus $f' = 0$, für Wendestellen aus $f'' = 0$.
  ---
  $f'(x) = 12x^3 - 24x^2 = 12x^2\,(x - 2)$. Stationäre Stellen $0$ und $2$. $f''(x) = 36x^2 - 48x$, $f''(2) = 144 - 96 = 48 > 0$: Tiefpunkt. $f(2) = 48 - 64 = -16$, also $T(2 \mid -16)$.
  ---
  Bei $0$ ist $f''(0) = 0$. Vorzeichen von $f' = 12x^2\,(x - 2)$ nahe $0$: $12x^2 > 0$ und $x - 2 < 0$, also $f' < 0$ auf beiden Seiten. Kein Extremum.
  ---
  Wendestellen: $f''(x) = 12x\,(3x - 4) = 0$ ergibt $x = 0$ und $x = \frac43$. $f'''(x) = 72x - 48$, $f'''(0) = -48 \neq 0$ und $f'''(\frac43) = 48 \neq 0$.
  ---
  Bei $0$ ist die Tangente waagrecht, also Sattelpunkt $S(0 \mid 0)$. Bei $\frac43$: $f(\frac43) = 3\cdot\frac{256}{81} - 8\cdot\frac{64}{27} = -\frac{256}{27} \approx -9{,}48$. Wendepunkt $W\big(\frac43 \mid -\frac{256}{27}\big)$.
```

## Die vollständige Kurvendiskussion

```aufgabe
id: dr-check-biquadratisch
titel: Gleichung vierten Grades mit Substitution
niveau: 1
art: check
angabe: |
  Löse $x^4 - 5x^2 + 4 = 0$. Gib alle reellen Lösungen getrennt durch Strichpunkte an.
  (Herkunft: [Kapitel 2, „Gleichungen höheren Grades“](/lernen/mathe3/gleichungen))
teile:
  - typ: menge
    label: 'Lösungen'
    loesung: ["-2", "-1", "1", "2"]
    fehler:
      - wert: ["1", "4"]
        meldung: '$1$ und $4$ sind die Lösungen für $u = x^2$. Du musst noch zurückrechnen: $x^2 = 1$ und $x^2 = 4$.'
      - wert: ["1", "2"]
        meldung: 'Jede Gleichung $x^2 = c$ mit $c > 0$ hat **zwei** Lösungen, $\sqrt c$ und $-\sqrt c$.'
loesung: |
  Substitution $u = x^2$: $u^2 - 5u + 4 = 0$, also $(u - 1)(u - 4) = 0$ und $u = 1$ oder $u = 4$.
  ---
  Rücksubstitution: $x^2 = 1$ ergibt $x = \pm 1$, $x^2 = 4$ ergibt $x = \pm 2$. Vier Lösungen.
```

In einer **Kurvendiskussion** untersucht man eine Funktion systematisch, bis man ihren Graphen
zuverlässig skizzieren kann. Sie verbindet alles aus [9.11 Monotonie und Extremstellen](/lernen/mathe3/differentialrechnung/monotonie-und-extremstellen) und [9.12 Krümmung und Wendepunkte](/lernen/mathe3/differentialrechnung/kruemmung-und-wendepunkte): Nullstellen,
Ableitungen, Monotonie, Extrema, Krümmung. In der schriftlichen Prüfung ist eine vollständige
Kurvendiskussion eines Polynoms vierten Grades ein typischer Prüfungsteil, der rund ein Viertel der
Punkte bringen kann. Zwei Begriffe kommen neu dazu: Symmetrie und Verhalten im Unendlichen.

### Symmetrie und Verhalten im Unendlichen

Ein Graph ist **symmetrisch zur $y$-Achse**, wenn $f(-x) = f(x)$ für alle $x$ gilt. Dann ist die linke
Hälfte das Spiegelbild der rechten. Er ist **punktsymmetrisch zum Ursprung**, wenn $f(-x) = -f(x)$ gilt.
Dann geht der Graph durch eine halbe Drehung um den Ursprung in sich über. Bei Polynomen sieht man
das sofort an den Hochzahlen:

- Nur gerade Hochzahlen (auch die Konstante zählt, sie ist $c\cdot x^0$): symmetrisch zur $y$-Achse. Beispiel: $x^4 - 3x^2 + 1$.
- Nur ungerade Hochzahlen: punktsymmetrisch zum Ursprung. Beispiel: $x^3 - 2x$.
- Gemischt: keine dieser Symmetrien. Nichtbeispiel: $x^3 + 1$, denn $f(-1) = 0$, aber $f(1) = 2$.

Für sehr große $|x|$ bestimmt bei einem Polynom der Summand mit der **höchsten Hochzahl** das
Verhalten. Bei $-x^4 + 4x^2 + 5$ gewinnt $-x^4$. Für $x = 10$ ist $-x^4 = -10\,000$, die anderen
Summanden zusammen nur $405$. Deshalb geht $f(x)$ gegen $-\infty$, wenn $x$ gegen $+\infty$ oder
gegen $-\infty$ geht. Genauer behandelt das [Kapitel 12](/lernen/mathe3/grenzwerte-stetigkeit).

### Ein vollständiges Beispiel im Prüfungsformat

:::beispiel[Kurvendiskussion eines Polynoms vierten Grades]
**Angabe:** Untersuche $f(x) = -x^4 + 4x^2 + 5$ auf Definitionsbereich, Symmetrie, Nullstellen,
Monotonie, lokale und globale Extrema sowie Wendepunkte.

**1. Definitionsbereich.** $f$ ist ein Polynom, also $D = \R$.

**2. Symmetrie.** Nur gerade Hochzahlen, also $f(-x) = f(x)$. Der Graph ist symmetrisch zur $y$-Achse.

**3. Nullstellen.** Mit $u = x^2$ wird $-u^2 + 4u + 5 = 0$, also $u^2 - 4u - 5 = 0$ und $(u - 5)(u + 1) = 0$.
Für $u = 5$ ist $x^2 = 5$, also $x = \pm\sqrt5 \approx \pm 2{,}236$. Für $u = -1$ hat $x^2 = -1$ keine
reelle Lösung. Der $y$-Achsenabschnitt ist $f(0) = 5$.

**4. Ableitungen.** $f'(x) = -4x^3 + 8x = -4x\,(x^2 - 2)$, $f''(x) = -12x^2 + 8$, $f'''(x) = -24x$.

**5. Extrema.** $f'(x) = 0$ ergibt $x = 0$ und $x = \pm\sqrt2$.
- $f''(0) = 8 > 0$, also Tiefpunkt $T(0 \mid 5)$.
- $f''(\pm\sqrt2) = -24 + 8 = -16 < 0$, also Hochpunkte. $f(\pm\sqrt2) = -4 + 8 + 5 = 9$, also $H_{1,2}(\pm\sqrt2 \mid 9)$.

**6. Monotonie** aus dem Vorzeichen von $f'(x) = -4x\,(x^2 - 2)$, Teststellen $-2$, $-1$, $1$, $2$:
- $f'(-2) = 16 > 0$: wachsend auf $(-\infty, -\sqrt2]$.
- $f'(-1) = -4 < 0$: fallend auf $[-\sqrt2, 0]$.
- $f'(1) = 4 > 0$: wachsend auf $[0, \sqrt2]$.
- $f'(2) = -16 < 0$: fallend auf $[\sqrt2, \infty)$.

**7. Wendepunkte.** $f''(x) = 0$ ergibt $x^2 = \frac23$, also $x = \pm\sqrt{\frac23} \approx \pm 0{,}816$.
Dort ist $f''' \neq 0$. Höhe: $f = -\frac49 + \frac83 + 5 = \frac{65}{9} \approx 7{,}22$. Wendepunkte
$W_{1,2}\big(\pm 0{,}816 \mid \frac{65}{9}\big)$.

**8. Global.** Für $x \to \pm\infty$ geht $f(x) \to -\infty$. Also gibt es **kein globales Minimum**, und
$T(0 \mid 5)$ ist nur lokal. Die Hochpunkte sind **globale Maxima** mit dem Wert $9$. Der
Wertebereich ist $(-\infty, 9]$.
:::

```plot
x: [-2.6, 2.6]
y: [-4, 10.5]
achsen: { x: "x", y: "y" }
graphen:
  - { f: "-x^4 + 4*x^2 + 5", label: "f(x) = −x⁴ + 4x² + 5", farbe: 0 }
punkte:
  - { x: "-sqrt(2)", y: 9, label: "H₁" }
  - { x: "sqrt(2)", y: 9, label: "H₂" }
  - { x: 0, y: 5, label: "T(0|5)" }
  - { x: "-sqrt(2/3)", y: "65/9", label: "W₁", farbe: 2 }
  - { x: "sqrt(2/3)", y: "65/9", label: "W₂", farbe: 2 }
  - { x: "-sqrt(5)", y: 0, label: "−√5", farbe: 1 }
  - { x: "sqrt(5)", y: 0, label: "√5", farbe: 1 }
beschriftung: Graph von f(x) = −x⁴ + 4x² + 5 mit den Hochpunkten (±√2 | 9), dem Tiefpunkt (0 | 5), den Wendepunkten bei x ≈ ±0,816 und den Nullstellen ±√5. Der Graph ist symmetrisch zur y-Achse und fällt für große |x| gegen minus unendlich.
```

:::merke[Rezept: Kurvendiskussion]
1. **Definitionsbereich** $D$: Nenner nicht null, unter einer Wurzel nicht negativ, im Logarithmus positiv.
2. **Symmetrie:** $f(-x)$ berechnen und mit $f(x)$ und $-f(x)$ vergleichen.
3. **Achsenschnittpunkte:** Nullstellen aus $f(x) = 0$, $y$-Achsenabschnitt $f(0)$.
4. **Ableitungen** $f'$, $f''$, $f'''$, möglichst in Faktoren.
5. **Extrema und Monotonie** (siehe [9.11 Monotonie und Extremstellen](/lernen/mathe3/differentialrechnung/monotonie-und-extremstellen)).
6. **Wendepunkte und Krümmung** (siehe [9.12 Krümmung und Wendepunkte](/lernen/mathe3/differentialrechnung/kruemmung-und-wendepunkte)).
7. **Verhalten am Rand** von $D$: für $x \to \pm\infty$ und an Definitionslücken.
8. **Global:** globale Extrema und Wertebereich.
9. **Skizze** mit allen berechneten Punkten.
:::

:::pruefung[So holst du in einer Kurvendiskussion alle Punkte]
- **Begründe jede Art.** Schreib „$f''(\sqrt2) = -16 < 0$, also Hochpunkt“. Nur „Hochpunkt bei $\sqrt2$“ gibt Abzug.
- **Unterscheide lokal und global ausdrücklich.** Genau das fragt die Musterprüfung. Sag zum Beispiel, dass der Tiefpunkt nur lokal ist, weil $f$ gegen $-\infty$ geht.
- **Lies genau, ob Punkte oder Stellen verlangt sind.** Bei „Hoch-, Tief- und Wendepunkte“ gibst du beide Koordinaten an. Bei „Extremstellen“ genügen die $x$-Werte.
- **Verwirf negative Lösungen bei der Substitution ausdrücklich.** Schreib zum Beispiel dazu, dass $x^2 = -1$ keine reelle Lösung hat.
- **Kontrolliere mit einer Skizze.** Liegt ein Tiefpunkt höher als der benachbarte Hochpunkt, stimmt etwas nicht.
:::

:::achtung[Bei der Rücksubstitution eine Lösung verloren]
Bei $-x^4 + 4x^2 + 5 = 0$ rechnet jemand: „$u = 5$, also $x = \sqrt5$.“ (unvollständig)

Die Gleichung $x^2 = 5$ hat **zwei** Lösungen, $x = \sqrt5$ und $x = -\sqrt5$. Die Symmetrie zur
$y$-Achse bestätigt das: Jede Nullstelle rechts hat ein Spiegelbild links. Richtig sind die
Nullstellen $\pm\sqrt5$.
:::

:::achtung[Lokales Minimum als globales Minimum ausgegeben]
Im Beispiel schreibt jemand: „Globales Minimum bei $T(0 \mid 5)$.“ (falsch)

Rechne einen weiteren Wert aus: $f(3) = -81 + 36 + 5 = -40$. Das ist viel kleiner als $5$. Der
Tiefpunkt ist nur der tiefste Punkt **in seiner Umgebung**. Weil $f$ für große $|x|$ gegen $-\infty$
geht, gibt es überhaupt kein globales Minimum.
:::

Wie hängen die Extrema von der Form der Funktion ab? Triff zuerst eine Vorhersage.

```aufgabe
id: dr-check-parameter-vorhersage
titel: 'Vorhersage: Wie viele Extrempunkte?'
niveau: 1
art: check
angabe: |
  Betrachte $f(x) = 5 + a\,x^2 - x^4$. Für $a = 4$ ist das die Funktion aus dem Beispiel, sie hat drei Extrempunkte.
  Wie viele Extrempunkte hat sie für $a = -1$?
teile:
  - typ: auswahl
    optionen: ['drei', 'zwei', 'einen']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: 'Setze $a = -1$ in $f''(x) = 2ax - 4x^3 = 2x\,(a - 2x^2)$ ein. Die Klammer $-1 - 2x^2$ ist nie null.'
      - wert: 1
        meldung: 'Wegen der Symmetrie zur $y$-Achse kommen Extremstellen außerhalb von $0$ immer paarweise vor. Prüfe, ob es sie hier überhaupt gibt.'
loesung: |
  $f'(x) = 2ax - 4x^3 = 2x\,(a - 2x^2)$. Die Klammer wird null bei $x^2 = \frac a2$.
  ---
  Für $a = -1$ wäre $x^2 = -\frac12$, das hat keine reelle Lösung. Es bleibt nur $x = 0$, also ein einziger Extrempunkt.
```

Prüfe deine Vorhersage im Widget. Verändere $a$ zwischen $-2$ und $6$ und beobachte die Extrempunkte.

```widget
name: parameter
titel: Wie der Parameter a die Extrema verändert
props:
  f: "5 + a*x^2 - x^4"
  parameter:
    - { name: a, min: -2, max: 6, step: 0.5, wert: 4 }
  x: [-2.5, 2.5]
  y: [-4, 15]
```

**Beobachtung und Erklärung:** Für $a > 0$ gibt es zwei Hochpunkte und dazwischen einen Tiefpunkt.
Für $a \le 0$ bleibt nur ein Hochpunkt bei $x = 0$. Die Rechnung erklärt das: Die zusätzlichen
Nullstellen $\pm\sqrt{a/2}$ von $f'$ gibt es nur für $a > 0$. Je größer $a$, desto weiter außen und
desto höher liegen die beiden Hochpunkte.

### Ein Beispiel mit der e-Funktion

:::beispiel[Kurvendiskussion von f(x) = x·e^(−x)]
**Definitionsbereich:** $D = \R$. **Symmetrie:** $f(-x) = -x\,e^{x}$ ist weder $f(x)$ noch $-f(x)$, also keine.

**Nullstellen:** Ein Produkt ist genau dann null, wenn ein Faktor null ist. Der Faktor $e^{-x}$ ist nie
null. Also ist $x = 0$ die einzige Nullstelle.

**Ableitungen** mit Produkt- und Kettenregel, jeweils $e^{-x}$ herausgehoben:
$f'(x) = e^{-x} - x\,e^{-x} = (1 - x)\,e^{-x}$ und $f''(x) = -e^{-x} - (1 - x)\,e^{-x} = (x - 2)\,e^{-x}$.

**Extrema:** $f'(x) = 0$ ergibt $x = 1$. $f''(1) = -e^{-1} < 0$, also Hochpunkt $H\big(1 \mid \frac1e\big) \approx (1 \mid 0{,}368)$.
Monotonie: Für $x < 1$ ist $f' > 0$ (wachsend), für $x > 1$ ist $f' < 0$ (fallend).

**Wendepunkt:** $f''(x) = 0$ ergibt $x = 2$. Dort wechselt der Faktor $x - 2$ das Vorzeichen. Also
$W\big(2 \mid \frac{2}{e^2}\big) \approx (2 \mid 0{,}271)$.

**Verhalten im Unendlichen:** Für $x \to -\infty$ wird $|x|$ groß und $e^{-x}$ riesig, also $f(x) \to -\infty$.
Für $x \to \infty$ gilt $f(x) = \frac{x}{e^x} \to 0$, weil $e^x$ schneller wächst als jede Potenz von $x$.
Die $x$-Achse ist waagrechte **Asymptote**, eine Gerade, der sich der Graph immer weiter nähert.

**Global:** Das globale Maximum ist $\frac1e$ bei $x = 1$, der Wertebereich $\big(-\infty, \frac1e\big]$.
:::

```plot
x: [-1, 6]
y: [-1.5, 0.6]
achsen: { x: "x", y: "y" }
graphen:
  - { f: "x*e^(-x)", label: "f(x) = x·e^(−x)", farbe: 0 }
punkte:
  - { x: 1, y: "1/e", label: "H(1|1/e)" }
  - { x: 2, y: "2/e^2", label: "W(2|2/e²)", farbe: 2 }
  - { x: 0, y: 0, label: "N(0|0)", farbe: 1 }
beschriftung: Graph von f(x) = x·e^(−x) mit Nullstelle im Ursprung, Hochpunkt (1 | 1/e) und Wendepunkt (2 | 2/e²). Für große x nähert sich der Graph der x-Achse.
```

### Funktionen aus Eigenschaften bestimmen

Manchmal ist es umgekehrt: Man kennt Eigenschaften des Graphen und sucht die Funktion. Solche
Aufgaben heißen **Steckbriefaufgaben**. Jede Eigenschaft wird zu einer Gleichung für die unbekannten
Koeffizienten:

- „Der Graph geht durch $(2 \mid 5)$“ heißt $f(2) = 5$.
- „Hochpunkt, Tiefpunkt oder waagrechte Tangente bei $x = 1$“ heißt $f'(1) = 0$.
- „Wendepunkt bei $x = 3$“ heißt $f''(3) = 0$.
- „Steigung $4$ bei $x = 0$“ heißt $f'(0) = 4$.

Ein Polynom dritten Grades $ax^3 + bx^2 + cx + d$ hat vier Unbekannte und braucht deshalb vier
Gleichungen. Das entstehende lineare Gleichungssystem löst man wie in [Kapitel 3](/lernen/mathe3/lgs-matrizen).

:::beispiel[Ein Polynom dritten Grades aus Hochpunkt und Wendepunkt]
Gesucht ist $f(x) = ax^3 + bx^2 + cx + d$ mit Hochpunkt $H(0 \mid 2)$ und Wendepunkt $W(1 \mid 0)$.

1. Ableitungen: $f'(x) = 3ax^2 + 2bx + c$, $f''(x) = 6ax + 2b$.
2. Vier Bedingungen: $f(0) = 2$ ergibt $d = 2$. $f'(0) = 0$ ergibt $c = 0$. $f''(1) = 0$ ergibt $6a + 2b = 0$,
   also $b = -3a$. $f(1) = 0$ ergibt $a + b + c + d = 0$.
3. Einsetzen: $a - 3a + 0 + 2 = 0$, also $a = 1$ und $b = -3$.
4. Ergebnis: $f(x) = x^3 - 3x^2 + 2$.
5. Probe: $f''(0) = -6 < 0$, also ist $(0 \mid 2)$ wirklich ein Hochpunkt. $f'''(1) = 6 \neq 0$, also ist $(1 \mid 0)$ wirklich ein Wendepunkt.

Die Probe ist wichtig. Die Bedingung $f'(0) = 0$ garantiert nur eine waagrechte Tangente, nicht schon einen Hochpunkt.
:::

```reflexion
frage: Warum kann ein Polynom vierten Grades mit negativem Vorzeichen vor $x^4$ kein globales Minimum haben, aber immer ein globales Maximum?
antwort: |
  Für große $|x|$ bestimmt der Summand $-x^4$ das Verhalten. Er wird beliebig stark negativ, egal ob
  $x$ nach rechts oder nach links wandert. Es gibt also immer noch kleinere Funktionswerte, und damit
  keinen kleinsten.

  Weil der Graph an beiden Enden nach unten geht, muss er dazwischen einen höchsten Punkt haben. Der
  größte der lokalen Hochpunkte ist deshalb das globale Maximum. Genau so war es im Beispiel mit dem
  Wert $9$.
```

```aufgabe
id: dr-kd-symmetrie
titel: Symmetrie erkennen
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  Welche Funktionen sind symmetrisch zur $y$-Achse?
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$f_1(x) = x^4 - 3x^2$'
      - '$f_2(x) = x^3 - x$'
      - '$f_3(x) = x^3 + 1$'
      - '$f_4(x) = x\sin x$'
      - '$f_5(x) = e^{-x^2}$'
    richtig: [0, 3, 4]
    fehler:
      - wert: [0, 1, 3, 4]
        meldung: '$f_2$ hat nur ungerade Hochzahlen. Es gilt $f_2(-x) = -f_2(x)$. Das ist Punktsymmetrie zum Ursprung, nicht Achsensymmetrie.'
      - wert: [0, 4]
        meldung: 'Prüfe $f_4(-x) = (-x)\cdot\sin(-x)$. Der Sinus ist ungerade, $\sin(-x) = -\sin x$. Minus mal Minus ergibt Plus.'
hinweise:
  - Berechne jeweils $f(-x)$ und vergleiche mit $f(x)$.
  - '$\sin(-x) = -\sin x$ und $(-x)^2 = x^2$.'
loesung: |
  Ansatz: Symmetrisch zur $y$-Achse heißt $f(-x) = f(x)$ für alle $x$.
  ---
  $f_1(-x) = x^4 - 3x^2 = f_1(x)$: symmetrisch. $f_2(-x) = -x^3 + x = -f_2(x)$: punktsymmetrisch, nicht achsensymmetrisch.
  ---
  $f_3(-x) = -x^3 + 1$ ist weder $f_3(x)$ noch $-f_3(x)$: keine Symmetrie.
  ---
  $f_4(-x) = (-x)(-\sin x) = x\sin x$: symmetrisch. $f_5(-x) = e^{-(-x)^2} = e^{-x^2}$: symmetrisch. Richtig sind $f_1$, $f_4$ und $f_5$.
```

```aufgabe
id: dr-kd-unendlich
titel: Verhalten im Unendlichen
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  Wie verhält sich $f(x) = -2x^3 + 5x^2 + 1$ für sehr große und für sehr kleine $x$?
teile:
  - typ: auswahl
    optionen:
      - 'Für $x \to \infty$ gilt $f(x) \to -\infty$, für $x \to -\infty$ gilt $f(x) \to +\infty$.'
      - 'Für $x \to \pm\infty$ gilt $f(x) \to -\infty$.'
      - 'Für $x \to \infty$ gilt $f(x) \to +\infty$, weil $5x^2$ positiv ist.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Das gilt bei geraden Hochzahlen wie $-x^4$. Bei $-2x^3$ ist für negative $x$ die dritte Potenz negativ, mal $-2$ also positiv.'
      - wert: 2
        meldung: 'Für große $x$ gewinnt der Summand mit der höchsten Hochzahl, hier $-2x^3$. Beispiel $x = 10$: $-2000 + 500 + 1$.'
hinweise:
  - Nur der Summand mit der höchsten Hochzahl zählt. Setze probeweise $x = 10$ und $x = -10$ ein.
loesung: |
  Ansatz: Für große $|x|$ bestimmt $-2x^3$ das Vorzeichen.
  ---
  $x = 10$: $f(10) = -2000 + 500 + 1 = -1499$. Also $f(x) \to -\infty$ für $x \to \infty$.
  ---
  $x = -10$: $f(-10) = 2000 + 500 + 1 = 2501$. Also $f(x) \to +\infty$ für $x \to -\infty$.
```

```aufgabe
id: dr-kd-kubisch
titel: Kurvendiskussion eines Polynoms dritten Grades
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Gegeben ist $f(x) = x^3 - 3x^2$. Bestimme die Nullstellen, die Extrempunkte und den Wendepunkt.
teile:
  - typ: menge
    label: 'Nullstellen'
    loesung: ["0", "3"]
    fehler:
      - wert: ["3"]
        meldung: 'Hebe $x^2$ heraus: $f(x) = x^2\,(x - 3)$. Auch $x = 0$ ist eine Nullstelle.'
  - typ: vektor
    label: 'Hochpunkt'
    namen: ["x", "y"]
    loesung: ["0", "0"]
  - typ: vektor
    label: 'Tiefpunkt'
    namen: ["x", "y"]
    loesung: ["2", "-4"]
    fehler:
      - wert: ["2", "0"]
        meldung: 'Die $y$-Koordinate ist $f(2) = 8 - 12$, nicht die Steigung $f''(2) = 0$.'
  - typ: vektor
    label: 'Wendepunkt'
    namen: ["x", "y"]
    loesung: ["1", "-2"]
    fehler:
      - wert: ["1", "-3"]
        meldung: '$-3$ ist die Steigung $f''(1)$. Die Höhe ist $f(1) = 1 - 3$.'
hinweise:
  - '$f(x) = x^2\,(x - 3)$ und $f''(x) = 3x^2 - 6x = 3x\,(x - 2)$.'
  - '$f''''(x) = 6x - 6$.'
loesung: |
  Nullstellen: $f(x) = x^2\,(x - 3) = 0$ ergibt $x = 0$ (doppelt) und $x = 3$. Bei der doppelten Nullstelle berührt der Graph die $x$-Achse.
  ---
  $f'(x) = 3x\,(x - 2)$, Kandidaten $0$ und $2$. $f''(x) = 6x - 6$. $f''(0) = -6 < 0$: Hochpunkt $H(0 \mid 0)$. $f''(2) = 6 > 0$: Tiefpunkt $T(2 \mid 8 - 12) = T(2 \mid -4)$.
  ---
  $f''(x) = 0$ ergibt $x = 1$, $f'''(x) = 6 \neq 0$. $f(1) = 1 - 3 = -2$, also Wendepunkt $W(1 \mid -2)$.
  ---
  Kontrolle: Bei Polynomen dritten Grades liegt der Wendepunkt genau in der Mitte zwischen den Extrempunkten, $\frac{0 + 2}{2} = 1$ und $\frac{0 + (-4)}{2} = -2$.
```

```aufgabe
id: dr-kd-biquadratisch
titel: Ein biquadratisches Polynom untersuchen
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Untersuche $f(x) = x^4 - 10x^2 + 9$ auf Nullstellen, Extrempunkte und Wendestellen.
teile:
  - typ: menge
    label: 'Nullstellen'
    loesung: ["-3", "-1", "1", "3"]
    fehler:
      - wert: ["1", "9"]
        meldung: '$1$ und $9$ sind die Lösungen für $u = x^2$. Rechne zurück: $x^2 = 1$ und $x^2 = 9$.'
      - wert: ["1", "3"]
        meldung: 'Jede Gleichung $x^2 = c$ mit $c > 0$ hat zwei Lösungen. Der Graph ist symmetrisch zur $y$-Achse.'
  - typ: vektor
    label: 'Hochpunkt'
    namen: ["x", "y"]
    loesung: ["0", "9"]
  - typ: menge
    label: '$x$-Koordinaten der Tiefpunkte'
    loesung: ["-sqrt(5)", "sqrt(5)"]
    fehler:
      - wert: ["-5", "5"]
        meldung: 'Aus $x^2 = 5$ folgt $x = \pm\sqrt5$, nicht $\pm 5$.'
  - typ: zahl
    label: '$y$-Koordinate der Tiefpunkte'
    loesung: "25 - 50 + 9"
    anzeige: '-16'
    fehler:
      - wert: "40"
        meldung: '$40$ ist $f''''(\sqrt5)$. Die Höhe des Tiefpunkts ist $f(\sqrt5) = 25 - 50 + 9$.'
  - typ: menge
    label: 'Wendestellen'
    loesung: ["-sqrt(5/3)", "sqrt(5/3)"]
    fehler:
      - wert: ["-sqrt(5)", "sqrt(5)"]
        meldung: 'Das sind die Nullstellen von $f''$, also Extremstellen. Wendestellen sind Nullstellen von $f''''(x) = 12x^2 - 20$.'
hinweise:
  - 'Nullstellen: Setze $u = x^2$.'
  - '$f''(x) = 4x^3 - 20x = 4x\,(x^2 - 5)$ und $f''''(x) = 12x^2 - 20$.'
loesung: |
  Nullstellen: Mit $u = x^2$ wird $u^2 - 10u + 9 = (u - 1)(u - 9) = 0$. Also $x^2 = 1$ oder $x^2 = 9$, und $x \in \{-3, -1, 1, 3\}$.
  ---
  $f'(x) = 4x\,(x^2 - 5)$, Kandidaten $0$ und $\pm\sqrt5$. $f''(x) = 12x^2 - 20$.
  ---
  $f''(0) = -20 < 0$: Hochpunkt $(0 \mid 9)$. $f''(\pm\sqrt5) = 60 - 20 = 40 > 0$: Tiefpunkte $(\pm\sqrt5 \mid 25 - 50 + 9) = (\pm\sqrt5 \mid -16)$.
  ---
  Wendestellen: $12x^2 - 20 = 0$ ergibt $x^2 = \frac53$, also $x = \pm\sqrt{\frac53} \approx \pm 1{,}291$. Dort ist $f'''(x) = 24x \neq 0$. Die Höhe ist $f = \frac{25}{9} - \frac{50}{3} + 9 = -\frac{44}{9} \approx -4{,}89$.
```

```aufgabe
id: dr-kd-parabel-steckbrief
titel: Eine Parabel aus Scheitel und Punkt bestimmen
niveau: 2
lernziel: 6
kompetenz: modellieren
angabe: |
  Eine quadratische Funktion $f(x) = ax^2 + bx + c$ hat ihren Scheitel bei $S(2 \mid -1)$ und schneidet die $y$-Achse bei $3$.
  Bestimme $a$, $b$ und $c$.
teile:
  - typ: vektor
    label: 'Koeffizienten'
    namen: ["a", "b", "c"]
    loesung: ["1", "-4", "3"]
    fehler:
      - wert: ["1", "4", "3"]
        meldung: 'Prüfe das Vorzeichen von $b$. Aus $f''(2) = 4a + b = 0$ folgt $b = -4a$.'
      - wert: ["-1", "4", "3"]
        meldung: 'Mit $a = -1$ wäre die Parabel nach unten offen, der Scheitel wäre ein Hochpunkt. Er liegt aber tiefer als der Punkt $(0 \mid 3)$, also ist die Parabel nach oben offen.'
hinweise:
  - 'Scheitel heißt waagrechte Tangente: $f''(2) = 0$. Außerdem $f(2) = -1$ und $f(0) = 3$.'
  - 'Drei Bedingungen, drei Unbekannte. Beginne mit $f(0) = 3$, das liefert $c$ sofort.'
gefuehrt:
  - text: Welchen Wert hat $c$? Verwende $f(0) = 3$.
    teil: { typ: zahl, loesung: "3" }
    erklaerung: '$f(0) = a\cdot 0 + b\cdot 0 + c = c$, also $c = 3$.'
  - text: Der Scheitel hat eine waagrechte Tangente, also $f'(2) = 0$. Welche Gleichung entsteht?
    teil:
      typ: auswahl
      optionen: ['$4a + b = 0$', '$4a + 2b + c = 0$', '$2a + b = 0$']
      richtig: [0]
    erklaerung: '$f''(x) = 2ax + b$, also $f''(2) = 4a + b = 0$ und $b = -4a$.'
  - text: Setze $b = -4a$ und $c = 3$ in $f(2) = 4a + 2b + c = -1$ ein. Wie groß ist $a$?
    teil: { typ: zahl, loesung: "1" }
    erklaerung: '$4a - 8a + 3 = -1$, also $-4a = -4$ und $a = 1$. Damit $b = -4$.'
loesung: |
  Ansatz: Jede Eigenschaft liefert eine Gleichung. Scheitel heißt $f(2) = -1$ und $f'(2) = 0$. Schnitt mit der $y$-Achse heißt $f(0) = 3$.
  ---
  $f(0) = c = 3$. $f'(x) = 2ax + b$, also $f'(2) = 4a + b = 0$ und $b = -4a$.
  ---
  $f(2) = 4a + 2b + 3 = -1$. Mit $b = -4a$: $4a - 8a = -4$, also $a = 1$ und $b = -4$.
  ---
  Ergebnis $f(x) = x^2 - 4x + 3$. Probe: $f(2) = 4 - 8 + 3 = -1$, $f'(2) = 4 - 4 = 0$, $f(0) = 3$.
```

```aufgabe
id: dr-kd-exp
titel: Kurvendiskussion mit e-Funktion
niveau: 3
lernziel: 6
kompetenz: rechnen
angabe: |
  Gegeben ist $f(x) = (x + 1)\,e^{-x}$.

  a) Bestimme die Nullstelle.

  b) Berechne $f'$ und $f''$ und hebe jeweils $e^{-x}$ heraus.

  c) Bestimme den Hochpunkt und den Wendepunkt.

  d) Wie verhält sich $f$ für $x \to \infty$?
teile:
  - typ: zahl
    label: 'a) Nullstelle'
    loesung: "-1"
  - typ: term
    label: 'b) $f''(x)$'
    loesung: "-x*e^(-x)"
  - typ: term
    label: 'b) $f''''(x)$'
    loesung: "(x - 1)*e^(-x)"
  - typ: vektor
    label: 'c) Hochpunkt'
    namen: ["x", "y"]
    loesung: ["0", "1"]
  - typ: vektor
    label: 'c) Wendepunkt'
    namen: ["x", "y"]
    loesung: ["1", "2/e"]
  - typ: text
    label: 'd) Verhalten für große $x$'
    muster: |
      $f(x) = \frac{x + 1}{e^x}$. Die e-Funktion im Nenner wächst schneller als jedes Polynom im Zähler.
      Also geht $f(x) \to 0$, die $x$-Achse ist waagrechte Asymptote.
hinweise:
  - 'Produktregel mit $u = x + 1$ und $v = e^{-x}$, $v'' = -e^{-x}$.'
  - '$e^{-x}$ ist nie null. Nullstellen von $f''$ und $f''''$ kommen nur aus dem Vorfaktor.'
loesung: |
  a) $e^{-x} > 0$ für alle $x$. Also ist $f(x) = 0$ genau dann, wenn $x + 1 = 0$, das heißt $x = -1$.
  ---
  b) $f'(x) = 1\cdot e^{-x} + (x + 1)\cdot(-e^{-x}) = (1 - x - 1)\,e^{-x} = -x\,e^{-x}$. Dann $f''(x) = -e^{-x} + (-x)\cdot(-e^{-x}) = (x - 1)\,e^{-x}$.
  ---
  c) $f'(x) = 0$ ergibt $x = 0$. $f''(0) = -1 < 0$, also Hochpunkt $(0 \mid 1)$.
  ---
  $f''(x) = 0$ ergibt $x = 1$. Dort wechselt der Faktor $x - 1$ das Vorzeichen, der Faktor $e^{-x}$ bleibt positiv. $f(1) = 2e^{-1} \approx 0{,}736$, also Wendepunkt $\big(1 \mid \frac2e\big)$.
  ---
  d) $f(x) = \frac{x + 1}{e^x} \to 0$ für $x \to \infty$, weil die e-Funktion schneller wächst als $x + 1$. Die $x$-Achse ist waagrechte Asymptote.
```

```aufgabe
id: dr-kd-rational
titel: Gebrochen rationale Funktion untersuchen
niveau: 3
lernziel: 6
kompetenz: rechnen
angabe: |
  Gegeben ist $f(x) = \dfrac{4x}{x^2 + 1}$.

  a) Gib den Definitionsbereich an und untersuche die Symmetrie.

  b) Bestimme $f'$ und die Extrempunkte.

  c) Bestimme $f''$ selbst und daraus alle Wendestellen.

  d) Wie verhält sich $f$ für $x \to \pm\infty$?
teile:
  - typ: term
    label: 'b) $f''(x)$'
    loesung: "4*(1 - x^2)/(x^2 + 1)^2"
    fehler:
      - wert: "4*(x^2 - 1)/(x^2 + 1)^2"
        meldung: 'Vorzeichen vertauscht. Quotientenregel: zuerst Nenner mal Ableitung des Zählers, $4\,(x^2 + 1) - 4x\cdot 2x$.'
  - typ: vektor
    label: 'b) Hochpunkt'
    namen: ["x", "y"]
    loesung: ["1", "2"]
  - typ: vektor
    label: 'b) Tiefpunkt'
    namen: ["x", "y"]
    loesung: ["-1", "-2"]
  - typ: term
    label: 'c) $f''''(x)$'
    loesung: "8*x*(x^2 - 3)/(x^2 + 1)^3"
  - typ: menge
    label: 'c) Wendestellen'
    loesung: ["-sqrt(3)", "0", "sqrt(3)"]
  - typ: text
    label: 'a) und d)'
    muster: |
      $D = \R$, weil $x^2 + 1 > 0$ ist. $f(-x) = -f(x)$, also punktsymmetrisch zum Ursprung.
      Für $x \to \pm\infty$ geht $f(x) \to 0$, weil der Nenner den höheren Grad hat. Die $x$-Achse ist waagrechte Asymptote.
hinweise:
  - 'Quotientenregel: $f''(x) = \dfrac{4\,(x^2 + 1) - 4x\cdot 2x}{(x^2 + 1)^2} = \dfrac{4\,(1 - x^2)}{(x^2 + 1)^2}$.'
  - 'Für $f''''$: Zähler $u = 4 - 4x^2$, Nenner $v = (x^2 + 1)^2$ mit $v'' = 4x\,(x^2 + 1)$ (Kettenregel). Kürze danach einmal durch $x^2 + 1$. Das Ergebnis lässt sich als $\frac{8x\,(x^2 - 3)}{(x^2 + 1)^3}$ schreiben.'
loesung: |
  a) Der Nenner $x^2 + 1$ ist nie null, also $D = \R$. $f(-x) = \frac{-4x}{x^2 + 1} = -f(x)$: punktsymmetrisch zum Ursprung.
  ---
  b) $f'(x) = \dfrac{4\,(1 - x^2)}{(x^2 + 1)^2}$. Null für $x = \pm 1$. Für $|x| < 1$ ist $f' > 0$, für $|x| > 1$ ist $f' < 0$. Bei $1$ Wechsel von $+$ nach $-$: Hochpunkt $(1 \mid 2)$. Bei $-1$ Wechsel von $-$ nach $+$: Tiefpunkt $(-1 \mid -2)$.
  ---
  c) Quotientenregel mit $u = 4 - 4x^2$, $u' = -8x$, $v = (x^2 + 1)^2$, $v' = 4x\,(x^2 + 1)$:
  $$f''(x) = \frac{-8x\,(x^2 + 1)^2 - (4 - 4x^2)\cdot 4x\,(x^2 + 1)}{(x^2 + 1)^4} = \frac{-8x\,(x^2 + 1) - 16x\,(1 - x^2)}{(x^2 + 1)^3} = \frac{8x^3 - 24x}{(x^2 + 1)^3}.$$
  ---
  Also $f''(x) = \dfrac{8x\,(x^2 - 3)}{(x^2 + 1)^3}$. Null für $x = 0$ und $x = \pm\sqrt3$. An allen drei Stellen wechselt der Zähler das Vorzeichen, der Nenner ist positiv. Wendepunkte $(0 \mid 0)$ und $(\pm\sqrt3 \mid \pm\sqrt3)$.
  ---
  d) $f(x) = \dfrac{4/x}{1 + 1/x^2} \to \dfrac{0}{1} = 0$ für $x \to \pm\infty$. Damit ist der Hochpunkt globales Maximum und der Tiefpunkt globales Minimum, der Wertebereich ist $[-2, 2]$.
```

```aufgabe
id: dr-kd-steckbrief
titel: Polynom dritten Grades aus Eigenschaften bestimmen
niveau: 3
lernziel: 6
kompetenz: modellieren
angabe: |
  Der Graph eines Polynoms dritten Grades $f(x) = ax^3 + bx^2 + cx + d$ hat den Wendepunkt $W(0 \mid 2)$ und den Tiefpunkt $T(1 \mid 0)$.
  Bestimme die Koeffizienten und prüfe, dass die Bedingungen wirklich erfüllt sind.
teile:
  - typ: vektor
    label: 'Koeffizienten'
    namen: ["a", "b", "c", "d"]
    loesung: ["1", "0", "-3", "2"]
    fehler:
      - wert: ["-1", "0", "3", "2"]
        meldung: 'Mit diesen Werten wäre $f''''(1) = -6 < 0$, also bei $x = 1$ ein **Hoch**punkt. Prüfe die Vorzeichen.'
hinweise:
  - 'Vier Bedingungen: $f(0) = 2$, $f''''(0) = 0$, $f(1) = 0$, $f''(1) = 0$.'
  - '$f''(x) = 3ax^2 + 2bx + c$ und $f''''(x) = 6ax + 2b$.'
loesung: |
  Ansatz: Jede Eigenschaft wird zu einer Gleichung. Wendepunkt in $(0 \mid 2)$: $f(0) = 2$ und $f''(0) = 0$. Tiefpunkt in $(1 \mid 0)$: $f(1) = 0$ und $f'(1) = 0$.
  ---
  $f(0) = d = 2$. $f''(0) = 2b = 0$, also $b = 0$.
  ---
  $f'(1) = 3a + c = 0$, also $c = -3a$. $f(1) = a + c + d = a - 3a + 2 = 0$, also $a = 1$ und $c = -3$.
  ---
  Ergebnis $f(x) = x^3 - 3x + 2$. Probe: $f''(1) = 6 > 0$, also ist $(1 \mid 0)$ wirklich ein Tiefpunkt. $f'''(0) = 6 \neq 0$, also ist $(0 \mid 2)$ wirklich ein Wendepunkt.
```

## Extremwertaufgaben: das Beste unter vielen Möglichkeiten finden

```aufgabe
id: dr-check-nebenbedingung
titel: Eine Größe durch die andere ausdrücken
niveau: 1
art: check
angabe: |
  Ein Rechteck hat den Umfang $40$ cm. Eine Seite ist $x$ cm lang. Wie lang ist die andere Seite $y$, ausgedrückt durch $x$?
  (Herkunft: [Kapitel 2, „Formeln umstellen“](/lernen/mathe3/gleichungen))
teile:
  - typ: term
    label: '$y = $'
    loesung: "20 - x"
    fehler:
      - wert: "40 - x"
        meldung: 'Der Umfang enthält **jede** Seite zweimal: $2x + 2y = 40$. Teile durch $2$, bevor du nach $y$ auflöst.'
      - wert: "40 - 2*x"
        meldung: 'Auch $y$ kommt im Umfang zweimal vor. Aus $2x + 2y = 40$ folgt $2y = 40 - 2x$, also $y = 20 - x$.'
loesung: |
  Umfang: $2x + 2y = 40$. Durch $2$ teilen: $x + y = 20$.
  ---
  Also $y = 20 - x$. Probe mit $x = 5$: $y = 15$ und $2\cdot 5 + 2\cdot 15 = 40$.
```

Bei **Extremwertaufgaben** sucht man unter vielen Möglichkeiten die beste: die größte Fläche, den
geringsten Materialverbrauch, den höchsten Gewinn. Mathematisch läuft es immer auf dasselbe hinaus:
Man sucht das Maximum oder Minimum einer Funktion **einer** Variablen. Die eigentliche Arbeit ist,
diese Funktion aus dem Text aufzustellen. Das Ableiten danach ist meist der leichte Teil.

:::beispiel[Größte Rechteckfläche bei gegebenem Umfang]
Ein rechteckiges Beet soll mit $40$ m Zaun umgeben werden. Wie lang müssen die Seiten sein, damit die Fläche möglichst groß wird?

1. **Skizze und Variablen:** Seitenlängen $x$ und $y$ in Metern.
2. **Hauptbedingung**, also die Größe, die extremal werden soll: $A = x\cdot y$.
3. **Nebenbedingung**, also der Zusammenhang zwischen den Variablen: $2x + 2y = 40$, also $y = 20 - x$.
4. **Zielfunktion** in einer Variablen: $A(x) = x\,(20 - x) = 20x - x^2$.
5. **Definitionsbereich:** Beide Seiten müssen positiv sein, also $0 < x < 20$.
6. **Ableiten:** $A'(x) = 20 - 2x = 0$ ergibt $x = 10$. $A''(x) = -2 < 0$, also Maximum.
7. **Alle Größen:** $y = 20 - 10 = 10$ m, $A = 100$ m².

Antwort: Das Quadrat mit $10$ m Seitenlänge hat bei $40$ m Umfang die größte Fläche, nämlich $100$ m².
:::

Diese sieben Schritte funktionieren bei allen Extremwertaufgaben. Wir fassen sie als Rezept zusammen.

:::merke[Rezept: Extremwertaufgabe]
1. **Skizze** machen und Variablen mit Einheiten benennen.
2. **Hauptbedingung:** die Größe, die maximal oder minimal werden soll, als Formel. Sie hat oft zwei Variablen.
3. **Nebenbedingung:** der Zusammenhang zwischen den Variablen, zum Beispiel ein gegebener Umfang oder ein gegebenes Volumen.
4. Nebenbedingung nach einer Variablen auflösen und einsetzen. Es entsteht die **Zielfunktion** mit nur einer Variablen.
5. **Definitionsbereich** aus der Sachsituation: Längen sind positiv, Material reicht nur für bestimmte Werte.
6. Ableiten, $f'(x) = 0$ lösen, Art des Extremums prüfen.
7. **Randwerte** des Definitionsbereichs vergleichen, falls er Randpunkte hat.
8. Alle gesuchten Größen berechnen und einen **Antwortsatz** schreiben.
:::

:::beispiel[Offene Schachtel aus einem Karton]
Aus einem Karton von $16$ cm mal $10$ cm werden an den Ecken vier gleich große Quadrate mit der
Seitenlänge $x$ ausgeschnitten. Dann biegt man die Ränder zu einer offenen Schachtel hoch. Für welches
$x$ wird das Volumen maximal?

1. Die Grundfläche hat die Seiten $16 - 2x$ und $10 - 2x$, die Höhe ist $x$. Zielfunktion:
   $V(x) = x\,(16 - 2x)(10 - 2x) = 4x^3 - 52x^2 + 160x$.
2. Definitionsbereich: Die kürzere Seite $10 - 2x$ muss positiv sein, also $0 < x < 5$.
3. $V'(x) = 12x^2 - 104x + 160 = 4\,(3x^2 - 26x + 40) = 0$. Lösungsformel: $x = \frac{26 \pm \sqrt{676 - 480}}{6} = \frac{26 \pm 14}{6}$,
   also $x_1 = 2$ und $x_2 = \frac{20}{3} \approx 6{,}67$.
4. $x_2$ liegt nicht im Definitionsbereich. $V''(x) = 24x - 104$, $V''(2) = -56 < 0$, also Maximum bei $x = 2$.
5. $V(2) = 2\cdot 12\cdot 6 = 144$ cm³.

Antwort: Schneidet man Quadrate mit $2$ cm Seitenlänge aus, hat die Schachtel das größte Volumen, $144$ cm³.
:::

:::beispiel[Materialsparende Dose]
Eine zylindrische Dose soll $1$ Liter $= 1000$ cm³ fassen. Bei welchem Radius braucht man am wenigsten Blech?

1. Hauptbedingung: Oberfläche aus Boden, Deckel und Mantel, $O = 2\pi r^2 + 2\pi r h$.
2. Nebenbedingung: Volumen $\pi r^2 h = 1000$, also $h = \frac{1000}{\pi r^2}$.
3. Zielfunktion: $O(r) = 2\pi r^2 + 2\pi r\cdot\frac{1000}{\pi r^2} = 2\pi r^2 + \frac{2000}{r}$ für $r > 0$.
4. $O'(r) = 4\pi r - \frac{2000}{r^2} = 0$ ergibt $r^3 = \frac{500}{\pi}$, also $r = \sqrt[3]{\frac{500}{\pi}} \approx 5{,}42$ cm.
5. $O''(r) = 4\pi + \frac{4000}{r^3} > 0$, also Minimum. Die Höhe ist $h = \frac{1000}{\pi r^2} \approx 10{,}84$ cm.

Bemerkenswert: $h = 2r$. Die sparsamste Dose ist genau so hoch wie breit. Das folgt allgemein aus
$\pi r^3 = 500$, denn dann ist $h = \frac{1000}{\pi r^2} = \frac{2\pi r^3}{\pi r^2} = 2r$.
:::

### Wenn das Extremum am Rand liegt

Die Bedingung $f'(x) = 0$ findet nur Extrema **im Inneren** des Definitionsbereichs. Hat der
Definitionsbereich Randpunkte, kann das Optimum genau dort liegen. Das passiert, wenn die Sache selbst
eine Grenze setzt.

:::beispiel[Ein Gehege an einer kurzen Mauer]
Ein rechteckiges Gehege wird an eine $12$ m lange Mauer gebaut. Die Seite an der Mauer braucht keinen
Zaun, sie darf aber höchstens $12$ m lang sein. Für die drei anderen Seiten stehen $40$ m Zaun zur Verfügung.

1. Seiten: $x$ senkrecht zur Mauer (zweimal), $y$ entlang der Mauer. Nebenbedingung $2x + y = 40$, also $y = 40 - 2x$.
2. Zielfunktion: $A(x) = x\,(40 - 2x) = 40x - 2x^2$.
3. Ohne Mauer-Grenze wäre $A'(x) = 40 - 4x = 0$ bei $x = 10$. Dann wäre aber $y = 20$ m, länger als die Mauer.
4. Definitionsbereich mit Grenze: $y \le 12$ heißt $40 - 2x \le 12$, also $x \ge 14$. Außerdem $x < 20$. Also $14 \le x < 20$.
5. Auf diesem Bereich ist $A'(x) = 40 - 4x < 0$. $A$ fällt also, und das Maximum liegt am linken Rand $x = 14$.
6. Ergebnis: $x = 14$ m, $y = 12$ m, $A = 168$ m².

Die Mauer wird also ganz ausgenützt. Die Lösung $x = 10$ von $A'(x) = 0$ ist hier unbrauchbar.
:::

:::achtung[Eine Lösung außerhalb des Definitionsbereichs verwendet]
Bei der Schachtel aus dem $16$ cm mal $10$ cm Karton nimmt jemand die zweite Lösung $x = \frac{20}{3}$ und rechnet
$$V\Big(\tfrac{20}{3}\Big) = \tfrac{20}{3}\cdot\Big(16 - \tfrac{40}{3}\Big)\Big(10 - \tfrac{40}{3}\Big) \approx -59{,}3 \text{ cm}^3 \qquad \text{(sinnlos).}$$
Ein negatives Volumen gibt es nicht. Bei $x = \frac{20}{3}$ wäre die kürzere Seite $10 - \frac{40}{3}$
negativ. Prüfe jede Lösung von $V'(x) = 0$ gegen den Definitionsbereich, bevor du weiterrechnest.
:::

:::achtung[Die Grenze aus der Sachsituation übersehen]
Beim Gehege an der $12$ m langen Mauer rechnet jemand ohne Grenze: „$x = 10$, $y = 20$, $A = 200$ m².“ (falsch)

Eine $20$ m lange Seite passt nicht an eine $12$ m lange Mauer. Die Zahl $200$ m² ist also gar
nicht erreichbar. Der Definitionsbereich ist $14 \le x < 20$, und dort liegt das Maximum am Rand mit
$A = 168$ m². Lies deshalb jede Einschränkung im Text als Grenze des Definitionsbereichs.
:::

```reflexion
frage: Warum braucht man bei Extremwertaufgaben fast immer eine Nebenbedingung? Was würde ohne sie passieren?
antwort: |
  Die Hauptbedingung hat meist zwei Variablen, zum Beispiel $A = x\cdot y$. Ohne Zusatzinformation
  könnte man $x$ und $y$ beliebig groß wählen, und die Fläche hätte kein Maximum.

  Erst die Nebenbedingung, etwa der gegebene Zaun, verbindet die Variablen. Sie sagt: Wird $x$
  größer, muss $y$ kleiner werden. Erst dadurch entsteht ein Zielkonflikt und ein bester Kompromiss.
  Mathematisch macht die Nebenbedingung aus zwei Variablen eine, und nur Funktionen einer Variablen
  kannst du mit den Methoden dieses Kapitels optimieren.
```

```aufgabe
id: dr-ew-zaun
titel: Weide am Fluss
niveau: 1
lernziel: 7
kompetenz: modellieren
angabe: |
  Eine rechteckige Weide grenzt an einen geraden Fluss. Die drei anderen Seiten werden mit insgesamt $120$ m Zaun eingezäunt.
  Sei $x$ die Länge der beiden Seiten senkrecht zum Fluss. Wie lang müssen die Seiten sein, damit die Weide möglichst groß wird?
teile:
  - typ: zahl
    label: '$x$ (senkrecht zum Fluss)'
    einheit: m
    loesung: "30"
    fehler:
      - wert: "40"
        meldung: 'Drei gleich lange Seiten sind nicht optimal. Stelle die Zielfunktion $A(x) = x\,(120 - 2x)$ auf und leite ab.'
  - typ: zahl
    label: 'Seite parallel zum Fluss'
    einheit: m
    loesung: "120 - 2*30"
    anzeige: '60'
    fehler:
      - wert: "30"
        meldung: 'Am Fluss ist kein Zaun nötig. Die Seite am Fluss ist $120 - 2x$ lang, nicht gleich $x$.'
  - typ: zahl
    label: 'maximale Fläche'
    einheit: m²
    loesung: "30*60"
    anzeige: '1800'
    fehler:
      - wert: "900"
        meldung: '$900$ m² wäre ein Quadrat mit $30$ m Seite. Die Seite am Fluss ist aber $60$ m lang.'
hinweise:
  - 'Nebenbedingung: $2x + y = 120$. Hauptbedingung: $A = x\cdot y$.'
loesung: |
  Nebenbedingung: Nur drei Seiten brauchen Zaun, $2x + y = 120$, also $y = 120 - 2x$. Hauptbedingung $A = x\cdot y$.
  ---
  Zielfunktion $A(x) = x\,(120 - 2x) = 120x - 2x^2$ mit $0 < x < 60$.
  ---
  $A'(x) = 120 - 4x = 0$ ergibt $x = 30$. $A''(x) = -4 < 0$, also Maximum.
  ---
  $y = 60$ m und $A = 1800$ m². Antwort: Die Seite am Fluss ist doppelt so lang wie die beiden anderen.
```

```aufgabe
id: dr-ew-zahlen
titel: Kleinstes Produkt bei fester Differenz
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Zwei reelle Zahlen unterscheiden sich um $10$. Welches ist das kleinste mögliche Produkt der beiden Zahlen?
  Nenne die größere Zahl $x$, dann ist die kleinere $x - 10$.
teile:
  - typ: zahl
    label: 'größere Zahl $x$'
    loesung: "5"
    fehler:
      - wert: "10"
        meldung: 'Mit $x = 10$ ist das Produkt $10\cdot 0 = 0$. Es geht aber noch kleiner, nämlich negativ.'
  - typ: zahl
    label: 'kleinstes Produkt'
    loesung: "5*(5 - 10)"
    anzeige: '-25'
    fehler:
      - wert: "0"
        meldung: 'Null ist nicht das Kleinste. Ist eine Zahl positiv und die andere negativ, wird das Produkt negativ.'
hinweise:
  - 'Zielfunktion $P(x) = x\,(x - 10) = x^2 - 10x$ für alle reellen $x$.'
loesung: |
  Zielfunktion: $P(x) = x\,(x - 10) = x^2 - 10x$. Ableiten: $P'(x) = 2x - 10 = 0$ ergibt $x = 5$.
  ---
  $P''(x) = 2 > 0$, also Minimum. Die Zahlen sind $5$ und $-5$, das kleinste Produkt ist $-25$.
```

```aufgabe
id: dr-ew-schachtel
titel: Schachtel mit maximalem Volumen
niveau: 2
lernziel: 7
kompetenz: modellieren
angabe: |
  Aus einem Karton von $24$ cm mal $15$ cm werden an den Ecken Quadrate der Seitenlänge $x$ ausgeschnitten und die Ränder zu einer offenen Schachtel hochgebogen.
  Bestimme $x$ so, dass das Volumen maximal wird, und gib das maximale Volumen an.
teile:
  - typ: zahl
    label: '$x$'
    einheit: cm
    loesung: "3"
    fehler:
      - wert: "10"
        meldung: 'Bei $x = 10$ wäre die Seite $15 - 2x$ negativ. Diese Lösung von $V''(x) = 0$ liegt außerhalb des Definitionsbereichs $0 < x < 7{,}5$.'
  - typ: zahl
    label: '$V_{\max}$'
    einheit: cm³
    loesung: "3*(24 - 6)*(15 - 6)"
    anzeige: '486'
    fehler:
      - wert: "3*24*15"
        meldung: 'Durch das Ausschneiden werden beide Seiten der Grundfläche um $2x$ kürzer: $(24 - 6)$ und $(15 - 6)$.'
hinweise:
  - '$V(x) = x\,(24 - 2x)(15 - 2x)$ mit $0 < x < 7{,}5$.'
  - '$V''(x) = 12x^2 - 156x + 360 = 12\,(x^2 - 13x + 30)$.'
loesung: |
  Zielfunktion: $V(x) = x\,(24 - 2x)(15 - 2x) = 4x^3 - 78x^2 + 360x$. Definitionsbereich $0 < x < 7{,}5$, weil $15 - 2x > 0$ sein muss.
  ---
  $V'(x) = 12x^2 - 156x + 360 = 12\,(x - 3)(x - 10) = 0$ ergibt $x = 3$ oder $x = 10$. Nur $x = 3$ liegt im Definitionsbereich.
  ---
  $V''(x) = 24x - 156$, $V''(3) = -84 < 0$, also Maximum.
  ---
  $V(3) = 3\cdot 18\cdot 9 = 486$ cm³. Antwort: Bei $3$ cm Einschnitt fasst die Schachtel am meisten, nämlich $486$ cm³.
```

```aufgabe
id: dr-ew-parabel-rechteck
titel: Größtes Rechteck unter einer Parabel
niveau: 2
lernziel: 7
kompetenz: modellieren
angabe: |
  Unter dem Graphen von $f(x) = 12 - x^2$ und über der $x$-Achse liegt ein Rechteck. Zwei Ecken liegen auf der $x$-Achse,
  die beiden oberen Ecken $(\pm u \mid f(u))$ liegen auf der Parabel, mit $u > 0$. Für welches $u$ ist die Fläche am größten?
teile:
  - typ: zahl
    label: '$u$'
    loesung: "2"
    fehler:
      - wert: "sqrt(12)"
        meldung: 'Bei $u = \sqrt{12}$ liegt die Ecke auf der $x$-Achse, das Rechteck hat die Höhe $0$. Das ist ein Rand, kein Maximum.'
  - typ: zahl
    label: 'maximale Fläche'
    loesung: "2*2*(12 - 4)"
    anzeige: '32'
    fehler:
      - wert: "2*(12 - 4)"
        meldung: 'Die Breite des Rechtecks ist $2u$, nicht $u$. Es reicht von $-u$ bis $u$.'
hinweise:
  - 'Breite $2u$, Höhe $f(u) = 12 - u^2$. Zielfunktion $A(u) = 2u\,(12 - u^2)$.'
  - 'Definitionsbereich $0 < u < \sqrt{12}$.'
gefuehrt:
  - text: Wie breit ist das Rechteck, ausgedrückt durch $u$?
    teil: { typ: term, variable: u, loesung: "2*u" }
    erklaerung: 'Es reicht von $-u$ bis $u$, also ist es $2u$ breit.'
  - text: Wie hoch ist das Rechteck?
    teil: { typ: term, variable: u, loesung: "12 - u^2", bereich: [0, 3] }
    erklaerung: 'Die oberen Ecken liegen auf der Parabel, also Höhe $f(u) = 12 - u^2$.'
  - text: Stelle $A(u)$ auf, leite ab und löse $A'(u) = 0$ für $u > 0$.
    teil: { typ: zahl, loesung: "2" }
    erklaerung: '$A(u) = 24u - 2u^3$, $A''(u) = 24 - 6u^2 = 0$, also $u^2 = 4$ und $u = 2$.'
  - text: Wie groß ist die Fläche?
    teil: { typ: zahl, loesung: "32" }
    erklaerung: '$A(2) = 4\cdot 8 = 32$. Wegen $A''''(u) = -12u < 0$ ist das ein Maximum.'
loesung: |
  Ansatz: Hauptbedingung Fläche $=$ Breite mal Höhe. Die Nebenbedingung steckt darin, dass die Ecke auf der Parabel liegt.
  ---
  Breite $2u$, Höhe $12 - u^2$. Zielfunktion $A(u) = 2u\,(12 - u^2) = 24u - 2u^3$ mit $0 < u < \sqrt{12}$.
  ---
  $A'(u) = 24 - 6u^2 = 0$ ergibt $u = 2$. $A''(u) = -12u$, $A''(2) = -24 < 0$, also Maximum.
  ---
  $A(2) = 4\cdot 8 = 32$ Flächeneinheiten. Das Rechteck ist $4$ breit und $8$ hoch.
```

```aufgabe
id: dr-ew-randmaximum
titel: Optimum am Rand des Definitionsbereichs
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Ein rechteckiges Beet soll den Umfang $36$ m haben. Wegen eines Weges darf die Seite $x$ höchstens $7$ m lang sein.
  Wie lang muss $x$ sein, damit die Fläche möglichst groß wird, und wie groß ist sie dann?
teile:
  - typ: zahl
    label: '$x$'
    einheit: m
    loesung: "7"
    fehler:
      - wert: "9"
        meldung: 'Die Lösung von $A''(x) = 0$ ist $9$. Sie verletzt aber die Bedingung $x \le 7$. Untersuche, wie sich $A$ auf $0 < x \le 7$ verhält.'
  - typ: zahl
    label: 'maximale Fläche'
    einheit: m²
    loesung: "7*(18 - 7)"
    anzeige: '77'
    fehler:
      - wert: "81"
        meldung: '$81$ m² wäre das Quadrat mit $9$ m Seite. Das ist wegen des Weges nicht erlaubt.'
hinweise:
  - 'Zielfunktion $A(x) = x\,(18 - x)$. Definitionsbereich $0 < x \le 7$.'
  - 'Welches Vorzeichen hat $A''(x) = 18 - 2x$ auf diesem Bereich? Wo liegt dann das Maximum?'
loesung: |
  Ansatz: Umfang $2x + 2y = 36$ ergibt $y = 18 - x$. Zielfunktion $A(x) = x\,(18 - x) = 18x - x^2$.
  ---
  Definitionsbereich aus der Sachsituation: $0 < x \le 7$. Die Lösung $x = 9$ von $A'(x) = 18 - 2x = 0$ liegt außerhalb.
  ---
  Für $0 < x \le 7$ ist $A'(x) = 18 - 2x \ge 4 > 0$. $A$ steigt also auf dem ganzen Bereich, das Maximum liegt am Rand $x = 7$.
  ---
  $y = 11$ m und $A = 77$ m². Antwort: Die Seite am Weg wird voll ausgenützt, das Beet ist $7$ m mal $11$ m groß.
```

```aufgabe
id: dr-ew-fehler-finden
titel: Welche Lösung ist die richtige?
niveau: 2
lernziel: 7
kompetenz: verstehen
angabe: |
  Aus einem Karton von $20$ cm mal $12$ cm entsteht eine offene Schachtel wie im Beispiel. Eine Mitschülerin erhält aus $V'(x) = 0$
  die Lösungen $x_1 \approx 2{,}43$ und $x_2 \approx 8{,}24$. Sie wählt $x_2$, „weil größere Einschnitte eine höhere Schachtel ergeben“.

  a) Was ist an ihrer Wahl falsch?

  b) Gib das richtige $x$ an (auf zwei Nachkommastellen).
teile:
  - typ: auswahl
    label: 'a)'
    optionen:
      - '$x_2$ liegt außerhalb des Definitionsbereichs $0 < x < 6$. Dort wäre eine Seite negativ.'
      - 'An der Stelle $x_2$ ist $V''(x) \neq 0$.'
      - 'Man muss immer die kleinere Lösung nehmen.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Beide Zahlen sind Lösungen von $V''(x) = 0$. Das Problem ist ein anderes.'
      - wert: 2
        meldung: 'Eine solche Regel gibt es nicht. Entscheidend ist der Definitionsbereich aus der Sachsituation.'
  - typ: zahl
    label: 'b) $x$'
    einheit: cm
    loesung: "(32 - sqrt(304))/6"
    anzeige: '2{,}43'
    toleranz: 0.01
    fehler:
      - wert: "(32 + sqrt(304))/6"
        meldung: 'Das ist die Lösung der Mitschülerin. Bei $x = 8{,}24$ wäre die Seite $12 - 2x$ negativ.'
hinweise:
  - Die kürzere Seite der Grundfläche ist $12 - 2x$. Wann ist sie positiv?
  - 'Prüfe außerdem mit $V''''(x) = 24x - 128$, welche Art von Extremum bei $x_1$ vorliegt.'
loesung: |
  Ansatz: Jede Lösung von $V'(x) = 0$ muss zum Definitionsbereich passen. Die Grundfläche hat die Seiten $20 - 2x$ und $12 - 2x$, also muss $0 < x < 6$ gelten.
  ---
  a) $x_2 \approx 8{,}24$ liegt außerhalb. Die Seite $12 - 2\cdot 8{,}24$ wäre negativ, eine solche Schachtel gibt es nicht.
  ---
  b) Richtig ist $x_1 = \frac{32 - \sqrt{304}}{6} \approx 2{,}43$ cm. Kontrolle: $V(x) = 4x^3 - 64x^2 + 240x$, $V''(x) = 24x - 128$, $V''(2{,}43) \approx -69{,}7 < 0$, also Maximum. Das Volumen ist etwa $262{,}7$ cm³.
```

```aufgabe
id: dr-ew-dose
titel: Getränkedose mit minimalem Material
niveau: 3
lernziel: 7
kompetenz: modellieren
angabe: |
  Eine zylindrische Dose soll $500$ cm³ fassen. Bestimme Radius und Höhe so, dass die Oberfläche minimal ist
  (auf drei Nachkommastellen), und gib die minimale Oberfläche an (auf zwei Nachkommastellen).
teile:
  - typ: zahl
    label: '$r$'
    einheit: cm
    loesung: "(250/pi)^(1/3)"
    anzeige: '\sqrt[3]{250/\pi} \approx 4{,}301'
    toleranz: 0.001
    fehler:
      - wert: "(500/pi)^(1/3)"
        meldung: 'Prüfe die Ableitung: $O(r) = 2\pi r^2 + \frac{1000}{r}$, also $O''(r) = 4\pi r - \frac{1000}{r^2}$. Daraus folgt $r^3 = \frac{250}{\pi}$.'
  - typ: zahl
    label: '$h$'
    einheit: cm
    loesung: "2*(250/pi)^(1/3)"
    anzeige: '8{,}603'
    toleranz: 0.001
  - typ: zahl
    label: '$O_{\min}$'
    einheit: cm²
    loesung: "6*pi*(250/pi)^(2/3)"
    anzeige: '348{,}73'
    toleranz: 0.01
hinweise:
  - 'Nebenbedingung $\pi r^2 h = 500$, also $h = \frac{500}{\pi r^2}$.'
  - 'Zielfunktion $O(r) = 2\pi r^2 + \frac{1000}{r}$.'
loesung: |
  Hauptbedingung $O = 2\pi r^2 + 2\pi r h$. Nebenbedingung $\pi r^2 h = 500$, also $h = \dfrac{500}{\pi r^2}$.
  ---
  Zielfunktion: $O(r) = 2\pi r^2 + 2\pi r\cdot\dfrac{500}{\pi r^2} = 2\pi r^2 + \dfrac{1000}{r}$ für $r > 0$.
  ---
  $O'(r) = 4\pi r - \dfrac{1000}{r^2} = 0$ ergibt $r^3 = \dfrac{250}{\pi}$, also $r \approx 4{,}301$ cm. $O''(r) = 4\pi + \dfrac{2000}{r^3} > 0$, also Minimum.
  ---
  $h = \dfrac{500}{\pi r^2} = 2r \approx 8{,}603$ cm, weil $\pi r^3 = 250$ ist. Oberfläche $O = 2\pi r^2 + 2\pi r\cdot 2r = 6\pi r^2 \approx 348{,}73$ cm².
  ---
  Antwort: Die sparsamste Dose hat etwa $4{,}30$ cm Radius und $8{,}60$ cm Höhe, also ist sie so hoch wie breit.
```

```aufgabe
id: dr-ew-abstand
titel: Kürzester Abstand zu einer Kurve
niveau: 3
lernziel: 7
kompetenz: anwenden
angabe: |
  Welcher Punkt auf dem Graphen von $f(x) = \sqrt x$ liegt dem Punkt $P(3 \mid 0)$ am nächsten? Wie groß ist dieser kleinste Abstand
  (auf drei Nachkommastellen)?
teile:
  - typ: zahl
    label: '$x$-Koordinate des nächsten Punkts'
    loesung: "2.5"
    fehler:
      - wert: "3"
        meldung: 'Der Kurvenpunkt direkt über $P$ ist $(3 \mid \sqrt3)$ mit Abstand $\sqrt3 \approx 1{,}732$. Ein Punkt etwas weiter links liegt näher.'
  - typ: zahl
    label: 'kleinster Abstand'
    loesung: "sqrt(0.25 + 2.5)"
    anzeige: '\sqrt{2{,}75} \approx 1{,}658'
    toleranz: 0.001
hinweise:
  - 'Abstand von $(x \mid \sqrt x)$ zu $(3 \mid 0)$: $d(x) = \sqrt{(x - 3)^2 + x}$.'
  - 'Die Wurzel ist wachsend. Deshalb ist $d$ genau dort am kleinsten, wo $d^2 = (x - 3)^2 + x$ am kleinsten ist. Leite $d^2$ ab, das ist einfacher.'
loesung: |
  Ansatz: Ein Kurvenpunkt ist $Q(x \mid \sqrt x)$ mit $x \ge 0$. Nach Pythagoras ist sein Abstand zu $P$: $d(x) = \sqrt{(x - 3)^2 + (\sqrt x)^2} = \sqrt{(x - 3)^2 + x}$.
  ---
  Trick: Die Wurzel wächst mit ihrem Inhalt. Also hat $d$ sein Minimum dort, wo $g(x) = (x - 3)^2 + x = x^2 - 5x + 9$ minimal ist.
  ---
  $g'(x) = 2x - 5 = 0$ ergibt $x = 2{,}5$. $g''(x) = 2 > 0$, also Minimum. Am Rand $x = 0$ ist $g(0) = 9$, größer als $g(2{,}5) = 2{,}75$.
  ---
  Nächster Punkt: $(2{,}5 \mid \sqrt{2{,}5}) \approx (2{,}5 \mid 1{,}581)$. Kleinster Abstand $d = \sqrt{2{,}75} \approx 1{,}658$.
```

## Anwendungen in Physik und Biologie: Bewegung und Wachstum

```aufgabe
id: dr-check-kmh
titel: Kilometer pro Stunde in Meter pro Sekunde
niveau: 1
art: check
angabe: |
  Ein Auto fährt $72$ km/h. Wie viele Meter pro Sekunde sind das?
  (Herkunft: [Physik, Kapitel 1, „Größen, Einheiten, Messen“](/lernen/physik1/groessen-einheiten-messen))
teile:
  - typ: zahl
    label: 'Geschwindigkeit'
    einheit: m/s
    loesung: "72/3.6"
    anzeige: '20'
    fehler:
      - wert: "72*3.6"
        meldung: 'Meter pro Sekunde sind die **kleinere** Zahl. Eine Stunde hat $3600$ Sekunden, ein Kilometer $1000$ Meter. Also teilst du durch $3{,}6$.'
loesung: |
  $72$ km in einer Stunde sind $72\,000$ m in $3600$ s.
  ---
  $\frac{72\,000}{3600} = 20$ m/s. Merkregel: km/h durch $3{,}6$ ergibt m/s.
```

Die Ableitung ist überall dort nützlich, wo eine Größe von einer anderen abhängt und man wissen
will, **wie schnell** sie sich ändert. In jeder Anwendung musst du zwei Dinge können: die Ableitung
**berechnen** und sie mit **Einheit deuten**. Die Einheit der Ableitung ist immer „Einheit von $f$
pro Einheit von $x$“.

- Weg $s(t)$ in m, Zeit in s: Die Ableitung $v(t) = s'(t)$ ist die **Geschwindigkeit** in m/s.
- Geschwindigkeit $v(t)$ in m/s: Die Ableitung $a(t) = v'(t) = s''(t)$ ist die **Beschleunigung** in m/s².
- Bestand $N(t)$, Zeit in Tagen: Die Ableitung $N'(t)$ ist die **Wachstumsgeschwindigkeit** in Individuen pro Tag.
- Temperatur $T(t)$ in °C, Zeit in Minuten: Die Ableitung $T'(t)$ ist die **Erwärmungs- oder Abkühlungsrate** in °C pro Minute.

Kosten und Gewinn in der Wirtschaft folgen in [9.16 Kosten, Erlös und Gewinn](/lernen/mathe3/differentialrechnung/anwendungen-in-der-wirtschaft-kosten-erloes-und-gewinn).

### Weg, Geschwindigkeit und Beschleunigung

Ist $s(t)$ der zurückgelegte Weg, dann ist $v(t) = s'(t)$ die **momentane Geschwindigkeit**, also das,
was der Tacho zeigt. Ihre Ableitung $a(t) = v'(t)$ ist die **Beschleunigung**. Positives $a$ heißt: Die
Geschwindigkeit nimmt zu. Ist $v > 0$ und $a < 0$, wird das Fahrzeug langsamer, es bremst.

:::beispiel[Ein Auto bremst]
Ein Auto fährt mit $72$ km/h und bremst. Seine Geschwindigkeit $t$ Sekunden nach Bremsbeginn ist
$v(t) = c - 0{,}8\,t^2$ (in m/s).

1. **Einheiten angleichen:** $72$ km/h $= 72 : 3{,}6 = 20$ m/s.
2. **Konstante:** Zu Bremsbeginn ist $v(0) = c$. Also $c = 20$ und $v(t) = 20 - 0{,}8\,t^2$.
3. **Bremsdauer:** Stillstand heißt $v(t) = 0$. Aus $0{,}8\,t^2 = 20$ folgt $t^2 = 25$ und $t = 5$ s. Die negative
   Lösung $t = -5$ ist physikalisch sinnlos. Das Modell gilt also nur für $0 \le t \le 5$.
4. **Beschleunigung:** $a(t) = v'(t) = -1{,}6\,t$ in m/s². Am Anfang ist $a(0) = 0$, am Ende $a(5) = -8$ m/s².
   In diesem Modell setzt die Bremswirkung allmählich ein und wird immer stärker.
5. **Bremsweg** (mit Integralrechnung aus [Kapitel 10](/lernen/mathe3/integralrechnung)):
   $s = \int_0^5 (20 - 0{,}8\,t^2)\,\dd t = 100 - \frac{100}{3} \approx 66{,}7$ m.
:::

```plot
x: [0, 6]
y: [-10, 24]
achsen: { x: "t in s", y: "v in m/s oder a in m/s²" }
graphen:
  - { f: "20 - 0.8*x^2", label: "v(t) = 20 − 0,8t²", farbe: 0, von: 0, bis: 5 }
  - { f: "-1.6*x", label: "a(t) = −1,6t", farbe: 1, von: 0, bis: 5, gestrichelt: true }
punkte:
  - { x: 0, y: 20, label: "72 km/h = 20 m/s" }
  - { x: 5, y: 0, label: "Stillstand nach 5 s" }
  - { x: 5, y: -8, label: "a(5) = −8", farbe: 1 }
beschriftung: Geschwindigkeit v(t) = 20 − 0,8t² und Beschleunigung a(t) = −1,6t beim Bremsen eines Autos. Die Geschwindigkeitskurve fällt immer steiler, weil die Verzögerung mit der Zeit zunimmt. Nach 5 Sekunden steht das Auto.
```

:::beispiel[Senkrechter Wurf]
Ein Ball wird aus $2$ m Höhe senkrecht nach oben geworfen. Seine Höhe ist $h(t) = 2 + 20t - 5t^2$
(in m, $t$ in s).

1. **Geschwindigkeit:** $v(t) = h'(t) = 20 - 10t$. Die Abwurfgeschwindigkeit ist $v(0) = 20$ m/s.
2. **Höchster Punkt:** Dort steigt der Ball nicht mehr und fällt noch nicht, also $v(t) = 0$. Aus $20 - 10t = 0$ folgt $t = 2$ s. Höhe $h(2) = 2 + 40 - 20 = 22$ m.
3. **Beschleunigung:** $a(t) = v'(t) = -10$ m/s². Das ist die Fallbeschleunigung, gerundet auf $10$ m/s².
4. **Deutung des Vorzeichens:** Für $t > 2$ ist $v(t) < 0$. Der Ball bewegt sich nach unten.
:::

:::achtung[Mit km/h statt m/s gerechnet]
Beim bremsenden Auto setzt jemand $c = 72$ und rechnet mit Sekunden weiter:
$$0{,}8\,t^2 = 72 \quad\Rightarrow\quad t = \sqrt{90} \approx 9{,}5 \text{ s} \qquad \text{(falsch).}$$
Die Formel $v(t) = c - 0{,}8\,t^2$ liefert Meter pro Sekunde. Dann muss auch $c$ in m/s stehen.
Richtig ist $c = 20$ und eine Bremsdauer von $5$ s. Rechne alle Größen **vor** dem Einsetzen in
zueinander passende Einheiten um.
:::

:::achtung[„Negative Beschleunigung heißt bremsen“]
Beim senkrechten Wurf sagt jemand nach $3$ s: „$a(3) = -10 < 0$, also wird der Ball langsamer.“ (falsch)

Nach $3$ s ist $v(3) = 20 - 30 = -10$ m/s. Der Ball fliegt nach unten. Geschwindigkeit und
Beschleunigung zeigen beide nach unten, deshalb wird er **schneller**: Der Betrag der Geschwindigkeit
wächst von $10$ m/s auf $20$ m/s bei $t = 4$. Bremsen bedeutet, dass $v$ und $a$ **verschiedene**
Vorzeichen haben.
:::

### Diagramme ohne Formel lesen

In Physik und Technik sind Bewegungen oft nur als **Diagramm** gegeben. Dann liest du die Ableitung
als Steigung ab. Im Weg-Zeit-Diagramm ist die Steigung die Geschwindigkeit. Im
Geschwindigkeit-Zeit-Diagramm ist die Steigung die Beschleunigung. Bei geraden Stücken liefert ein
Steigungsdreieck den genauen Wert.

:::beispiel[Beschleunigung aus einem Geschwindigkeit-Zeit-Diagramm]
Die Abbildung zeigt eine Radfahrt. Wir lesen die drei Phasen ab.

1. **Anfahren** von $0$ bis $4$ s: $v$ steigt von $0$ auf $8$ m/s. Steigung $a = \frac{8 - 0}{4 - 0} = 2$ m/s².
2. **Gleichmäßige Fahrt** von $4$ bis $10$ s: $v$ bleibt $8$ m/s. Die Steigung ist $0$, also $a = 0$.
3. **Bremsen** von $10$ bis $14$ s: $v$ fällt von $8$ auf $0$ m/s. Steigung $a = \frac{0 - 8}{14 - 10} = -2$ m/s².

An den Knickstellen $4$ s und $10$ s springt die Beschleunigung. Dort hat der Graph von $v$ keine
Ableitung, wie bei der Betragsfunktion in [9.3 Die Ableitungsfunktion](/lernen/mathe3/differentialrechnung/die-ableitungsfunktion-die-steigung-an-jeder-stelle).
:::

```plot
x: [0, 15]
y: [0, 10]
achsen: { x: "t in s", y: "v in m/s" }
strecken:
  - { von: [0, 0], nach: [4, 8] }
  - { von: [4, 8], nach: [10, 8] }
  - { von: [10, 8], nach: [14, 0] }
punkte:
  - { x: 4, y: 8, label: "(4|8)" }
  - { x: 10, y: 8, label: "(10|8)" }
  - { x: 14, y: 0, label: "(14|0)" }
beschriftung: Geschwindigkeit-Zeit-Diagramm einer Radfahrt. Von 0 bis 4 s steigt die Geschwindigkeit gleichmäßig auf 8 m/s, bleibt bis 10 s konstant und fällt bis 14 s gleichmäßig auf 0. Die Steigungen sind 2, 0 und −2 m/s².
```

### Wachstumsprozesse

Für exponentielles Wachstum $N(t) = N_0\,e^{kt}$ liefert die Kettenregel
$$N'(t) = N_0\cdot k\,e^{kt} = k\cdot N(t).$$
Dabei ist $N_0$ der Anfangsbestand und $k$ die **Wachstumskonstante**. Die Gleichung $N' = k\cdot N$
sagt: Die Wachstumsgeschwindigkeit ist **proportional zum aktuellen Bestand**. Doppelt so viele
Bakterien vermehren sich doppelt so schnell. Der Quotient $\frac{N'(t)}{N(t)} = k$ heißt **relative
Wachstumsrate**. Er ist bei exponentiellem Wachstum konstant.

:::beispiel[Eine Bakterienkultur]
Eine Bakterienkultur wächst nach $N(t) = 500\,e^{0{,}2t}$ ($t$ in Stunden).

1. Wachstumsgeschwindigkeit: $N'(t) = 100\,e^{0{,}2t}$. Nach $5$ Stunden ist $N'(5) = 100\,e \approx 272$ Bakterien pro Stunde.
2. Relative Wachstumsrate: $\frac{N'(t)}{N(t)} = 0{,}2$, also $20\,\%$ pro Stunde, und zwar in **jedem** Moment.
3. Zunahme in einer ganzen Stunde: $\frac{N(t + 1)}{N(t)} = e^{0{,}2} \approx 1{,}2214$, also etwa $22{,}14\,\%$.

Warum ist die Zunahme pro Stunde größer als $20\,\%$? Die neu entstandenen Bakterien vermehren sich
im Lauf der Stunde sofort mit. Das ist wie bei Zinseszinsen, die laufend gutgeschrieben werden.
:::

```reflexion
frage: Bei der Bakterienkultur ist die relative Wachstumsrate $20\,\%$ pro Stunde, aber in einer Stunde wächst die Kultur um $22{,}14\,\%$. Widerspricht sich das?
antwort: |
  Nein. Die relative Wachstumsrate $k = 0{,}2$ ist eine **momentane** Rate. Sie gilt in jedem
  Augenblick für den gerade vorhandenen Bestand.

  Weil der Bestand während der Stunde wächst, wächst auch die Zunahme pro Minute mit. Über eine ganze
  Stunde summiert sich das zum Faktor $e^{0{,}2} \approx 1{,}2214$. Das ist der Unterschied zwischen einer
  momentanen Änderungsrate und einer Änderung über einen Zeitraum, wie in [9.1 Änderungen messen: absolute, relative und mittlere Änderung](/lernen/mathe3/differentialrechnung/aenderungen-messen-absolute-relative-und-mittlere-aenderung).
```

```aufgabe
id: dr-anw-wurf
titel: Senkrechter Wurf
niveau: 1
lernziel: 8
kompetenz: anwenden
angabe: |
  Ein Ball wird senkrecht nach oben geworfen. Seine Höhe nach $t$ Sekunden ist $h(t) = 1{,}5 + 15t - 5t^2$ (in Metern).
  Bestimme die Abwurfgeschwindigkeit, den Zeitpunkt des höchsten Punkts und die maximale Höhe.
teile:
  - typ: zahl
    label: '$v(0)$'
    einheit: m/s
    loesung: "15"
    fehler:
      - wert: "1.5"
        meldung: '$1{,}5$ m ist die Abwurf**höhe** $h(0)$. Die Geschwindigkeit ist $v(0) = h''(0)$.'
  - typ: zahl
    label: 'Zeitpunkt des höchsten Punkts'
    einheit: s
    loesung: "15/10"
    anzeige: '1{,}5'
    fehler:
      - wert: "3"
        meldung: 'Nach $3$ s ist der Ball wieder auf der Abwurfhöhe. Der höchste Punkt liegt dort, wo $v(t) = 0$ ist.'
  - typ: zahl
    label: 'maximale Höhe'
    einheit: m
    loesung: "1.5 + 15*1.5 - 5*1.5^2"
    anzeige: '12{,}75'
    fehler:
      - wert: "15*1.5 - 5*1.5^2"
        meldung: 'Die Abwurfhöhe $1{,}5$ m fehlt. Setze $t = 1{,}5$ in die ganze Funktion $h$ ein.'
hinweise:
  - '$v(t) = h''(t)$. Am höchsten Punkt ist $v(t) = 0$.'
loesung: |
  $v(t) = h'(t) = 15 - 10t$, also $v(0) = 15$ m/s.
  ---
  Am höchsten Punkt ist die Geschwindigkeit null: $15 - 10t = 0$, also $t = 1{,}5$ s.
  ---
  $h(1{,}5) = 1{,}5 + 22{,}5 - 11{,}25 = 12{,}75$ m. Wegen $h''(t) = -10 < 0$ ist das wirklich ein Maximum.
```

```aufgabe
id: dr-anw-st-diagramm
titel: Geschwindigkeit aus einem Weg-Zeit-Diagramm
niveau: 1
lernziel: 8
kompetenz: verstehen
angabe: |
  Das Diagramm zeigt den Weg $s$ (in km) eines Busses in Abhängigkeit von der Zeit $t$ (in Stunden).

  a) Wie schnell fährt der Bus zwischen $t = 3$ und $t = 5$?

  b) Wie groß ist die Durchschnittsgeschwindigkeit für die ganze Fahrt von $t = 0$ bis $t = 5$?
plot:
  x: [0, 5.5]
  y: [0, 300]
  achsen: { x: "t in h", y: "s in km" }
  strecken:
    - { von: [0, 0], nach: [2, 120] }
    - { von: [2, 120], nach: [3, 120] }
    - { von: [3, 120], nach: [5, 280] }
  punkte:
    - { x: 2, y: 120, label: "(2|120)" }
    - { x: 3, y: 120, label: "(3|120)" }
    - { x: 5, y: 280, label: "(5|280)" }
teile:
  - typ: zahl
    label: 'a) Geschwindigkeit auf $[3, 5]$'
    einheit: km/h
    loesung: "(280 - 120)/(5 - 3)"
    anzeige: '80'
    fehler:
      - wert: "280/5"
        meldung: 'Das ist der Durchschnitt über die **ganze** Fahrt. Gefragt ist nur die Steigung des letzten Stücks.'
      - wert: "280/2"
        meldung: 'In diesen zwei Stunden fährt der Bus nicht $280$ km, sondern $280 - 120 = 160$ km.'
  - typ: zahl
    label: 'b) Durchschnittsgeschwindigkeit'
    einheit: km/h
    loesung: "280/5"
    anzeige: '56'
    fehler:
      - wert: "(60 + 80)/2"
        meldung: 'Den Mittelwert der Geschwindigkeiten zu bilden, ist falsch. Die Pause und die unterschiedlichen Dauern zählen mit. Rechne Gesamtweg durch Gesamtzeit.'
hinweise:
  - 'Im Weg-Zeit-Diagramm ist die Geschwindigkeit die Steigung: Höhenunterschied durch Zeitunterschied.'
loesung: |
  Ansatz: Im Weg-Zeit-Diagramm ist die Steigung die Geschwindigkeit. Auf geraden Stücken ist sie konstant.
  ---
  a) Steigungsdreieck von $(3 \mid 120)$ nach $(5 \mid 280)$: $\frac{160\ \text{km}}{2\ \text{h}} = 80$ km/h.
  ---
  b) Mittlere Änderungsrate über die ganze Fahrt: $\frac{280\ \text{km}}{5\ \text{h}} = 56$ km/h. Die Stunde Pause von $t = 2$ bis $t = 3$ (waagrechtes Stück, Geschwindigkeit $0$) drückt den Durchschnitt.
```

```aufgabe
id: dr-anw-vt-diagramm
titel: Beschleunigung aus einem Geschwindigkeit-Zeit-Diagramm
niveau: 2
lernziel: 8
kompetenz: verstehen
angabe: |
  Das Diagramm zeigt die Geschwindigkeit $v$ (in m/s) eines Autos zwischen zwei Ampeln.

  a) Wie groß ist die Beschleunigung in den ersten $5$ Sekunden?

  b) Wie groß ist die Beschleunigung beim Bremsen?

  c) In welchem Zeitraum ist die Beschleunigung null?
plot:
  x: [0, 28]
  y: [0, 18]
  achsen: { x: "t in s", y: "v in m/s" }
  strecken:
    - { von: [0, 0], nach: [5, 15] }
    - { von: [5, 15], nach: [20, 15] }
    - { von: [20, 15], nach: [26, 0] }
  punkte:
    - { x: 5, y: 15, label: "(5|15)" }
    - { x: 20, y: 15, label: "(20|15)" }
    - { x: 26, y: 0, label: "(26|0)" }
teile:
  - typ: zahl
    label: 'a) Beschleunigung beim Anfahren'
    einheit: m/s²
    loesung: "15/5"
    anzeige: '3'
    fehler:
      - wert: "15"
        meldung: '$15$ m/s ist die erreichte **Geschwindigkeit**. Die Beschleunigung ist die Steigung: Geschwindigkeitsänderung durch Zeit.'
  - typ: zahl
    label: 'b) Beschleunigung beim Bremsen'
    einheit: m/s²
    loesung: "(0 - 15)/(26 - 20)"
    anzeige: '-2{,}5'
    fehler:
      - wert: "2.5"
        meldung: 'Die Geschwindigkeit nimmt ab. Die Steigung und damit die Beschleunigung ist negativ.'
  - typ: auswahl
    label: 'c) Beschleunigung null'
    optionen: ['von $5$ s bis $20$ s', 'nur bei $t = 26$ s', 'von $0$ s bis $5$ s']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Bei $26$ s ist die **Geschwindigkeit** null. Die Beschleunigung ist null, wo sich die Geschwindigkeit nicht ändert.'
hinweise:
  - 'Im Geschwindigkeit-Zeit-Diagramm ist die Beschleunigung die Steigung.'
  - 'Steigung eines geraden Stücks: $\frac{v_{\text{Ende}} - v_{\text{Anfang}}}{t_{\text{Ende}} - t_{\text{Anfang}}}$.'
loesung: |
  Ansatz: $a = v'$, also lesen wir Steigungen ab.
  ---
  a) $\frac{15 - 0}{5 - 0} = 3$ m/s². b) $\frac{0 - 15}{26 - 20} = -2{,}5$ m/s². Das Minus zeigt: Das Auto wird langsamer.
  ---
  c) Von $5$ s bis $20$ s ist die Geschwindigkeit konstant $15$ m/s, die Steigung ist $0$. Dort ist $a = 0$.
```

```aufgabe
id: dr-anw-bremsen
titel: Ein Auto bremst aus 54 km/h
niveau: 2
lernziel: 8
kompetenz: anwenden
quelle: nach Musterprüfung Karigl, Aufgabe 4 (abgewandelt)
angabe: |
  Ein Auto fährt mit $54$ km/h und bremst. Seine Geschwindigkeit $t$ Sekunden nach Bremsbeginn ist $v(t) = c - 0{,}6\,t^2$ (in m/s).

  a) Bestimme $c$ und die Bremsdauer. Achte auf die Einheiten.

  b) Wie groß ist die Beschleunigung im Moment des Stillstands?

  c) Wie groß ist die mittlere Beschleunigung während des Bremsens?
teile:
  - typ: zahl
    label: 'a) $c$'
    einheit: m/s
    loesung: "54/3.6"
    anzeige: '15'
    fehler:
      - wert: "54"
        meldung: 'Die Formel liefert m/s. $54$ km/h musst du zuerst umrechnen: durch $3{,}6$.'
  - typ: zahl
    label: 'a) Bremsdauer'
    einheit: s
    loesung: "sqrt(15/0.6)"
    anzeige: '5'
    fehler:
      - wert: "sqrt(54/0.6)"
        meldung: 'Mit $c = 54$ wurden km/h und m/s vermischt. Rechne mit $c = 15$ m/s.'
  - typ: zahl
    label: 'b) Beschleunigung bei Stillstand'
    einheit: m/s²
    loesung: "-1.2*5"
    anzeige: '-6'
    fehler:
      - wert: "-0.6*5^2"
        meldung: 'Das ist $-0{,}6\cdot 25 = -15$, also die Geschwindigkeits**änderung** bis $t = 5$. Die Beschleunigung ist die Ableitung $a(t) = -1{,}2\,t$.'
  - typ: zahl
    label: 'c) mittlere Beschleunigung'
    einheit: m/s²
    loesung: "(0 - 15)/5"
    anzeige: '-3'
    fehler:
      - wert: "-6"
        meldung: '$-6$ m/s² ist die **momentane** Beschleunigung am Ende. Die mittlere Beschleunigung ist der Differenzenquotient $\frac{v(5) - v(0)}{5 - 0}$.'
hinweise:
  - '$54$ km/h $: 3{,}6$ ergibt m/s. Zu Beginn ist $v(0) = c$. Stillstand heißt $v(t) = 0$.'
  - 'Beschleunigung $a(t) = v''(t)$. Die mittlere Beschleunigung ist ein Differenzenquotient von $v$.'
gefuehrt:
  - text: Wie groß ist $c$ in m/s?
    teil: { typ: zahl, loesung: "15" }
    erklaerung: '$54 : 3{,}6 = 15$. Zu Beginn ist $v(0) = c = 15$ m/s.'
  - text: Nach wie vielen Sekunden steht das Auto?
    teil: { typ: zahl, loesung: "5" }
    erklaerung: '$15 - 0{,}6\,t^2 = 0$ ergibt $t^2 = 25$, also $t = 5$ s.'
  - text: Wie lautet $a(t) = v'(t)$?
    teil: { typ: term, variable: t, loesung: "-1.2*t" }
    erklaerung: 'Potenzregel: $(0{,}6\,t^2)'' = 1{,}2\,t$, mit Minus davor.'
  - text: Wie groß ist $a(5)$?
    teil: { typ: zahl, loesung: "-6" }
    erklaerung: '$a(5) = -6$ m/s². Im letzten Moment bremst das Auto am stärksten.'
loesung: |
  Ansatz: Zuerst die Einheiten angleichen, dann Anfangsbedingung, Stillstand und Ableitung.
  ---
  a) $54$ km/h $= 15$ m/s, und $v(0) = c$, also $c = 15$. Stillstand: $15 - 0{,}6\,t^2 = 0$, $t^2 = 25$, $t = 5$ s.
  ---
  b) $a(t) = v'(t) = -1{,}2\,t$, also $a(5) = -6$ m/s².
  ---
  c) Mittlere Beschleunigung $\frac{v(5) - v(0)}{5 - 0} = \frac{0 - 15}{5} = -3$ m/s². Die momentane Verzögerung wächst von $0$ auf $6$ m/s², im Mittel beträgt sie $3$ m/s².
```

```aufgabe
id: dr-anw-wachstum
titel: Wachstumsgeschwindigkeit einer Algenpopulation
niveau: 2
lernziel: 8
kompetenz: anwenden
angabe: |
  Eine Algenpopulation in einem Teich wächst nach $N(t) = 2000\,e^{0{,}08t}$ ($t$ in Tagen).

  a) Mit welcher Geschwindigkeit (Algen pro Tag) wächst sie nach $10$ Tagen? Runde auf eine Nachkommastelle.

  b) Um wie viel Prozent nimmt die Population pro Tag zu (auf zwei Nachkommastellen)?

  c) Zeige, dass $N'(t) = 0{,}08\cdot N(t)$ gilt, und deute diese Gleichung.
teile:
  - typ: zahl
    label: 'a) $N''(10)$'
    einheit: Algen/Tag
    loesung: "160*e^(0.8)"
    anzeige: '160\,e^{0{,}8} \approx 356{,}1'
    toleranz: 0.1
    fehler:
      - wert: "2000*e^(0.8)"
        meldung: 'Das ist der Bestand $N(10)$, nicht die Wachstumsgeschwindigkeit. Die Kettenregel liefert den Faktor $0{,}08$.'
  - typ: zahl
    label: 'b) tägliche Zunahme'
    einheit: "%"
    loesung: "(e^(0.08) - 1)*100"
    anzeige: '8{,}33'
    toleranz: 0.01
    fehler:
      - wert: "8"
        meldung: '$8\,\%$ ist die momentane relative Wachstumsrate $k$. Über einen ganzen Tag wächst die Population um den Faktor $e^{0{,}08}$, das ist etwas mehr.'
  - typ: text
    label: 'c) Nachweis und Deutung'
    muster: |
      Kettenregel: $N'(t) = 2000\cdot 0{,}08\,e^{0{,}08t} = 0{,}08\cdot 2000\,e^{0{,}08t} = 0{,}08\,N(t)$.
      Die Wachstumsgeschwindigkeit ist in jedem Moment $8\,\%$ des aktuellen Bestands. Je mehr Algen da sind,
      desto schneller vermehren sie sich.
hinweise:
  - '$N''(t) = 2000\cdot 0{,}08\,e^{0{,}08t} = 160\,e^{0{,}08t}$.'
  - 'Tägliche Zunahme: Faktor $\frac{N(t + 1)}{N(t)} = e^{0{,}08}$.'
loesung: |
  Ansatz: Kettenregel mit innerer Ableitung $0{,}08$.
  ---
  a) $N'(t) = 160\,e^{0{,}08t}$, also $N'(10) = 160\,e^{0{,}8} \approx 356{,}1$ Algen pro Tag.
  ---
  b) $\frac{N(t + 1)}{N(t)} = e^{0{,}08} \approx 1{,}0833$, also Zunahme um etwa $8{,}33\,\%$ pro Tag.
  ---
  c) $N'(t) = 0{,}08\cdot 2000\,e^{0{,}08t} = 0{,}08\,N(t)$. Die momentane Zunahme ist proportional zum Bestand. Das ist das Kennzeichen exponentiellen Wachstums.
```

```aufgabe
id: dr-anw-abkuehlung
titel: Abkühlung eines Getränks
niveau: 2
lernziel: 8
kompetenz: modellieren
angabe: |
  Eine Tasse Tee kühlt in einem Raum mit $20$ °C ab. Ihre Temperatur ist $T(t) = 20 + 70\,e^{-0{,}1t}$ (in °C, $t$ in Minuten).

  a) Wie schnell kühlt der Tee zu Beginn ab?

  b) Wie schnell kühlt er nach $10$ Minuten ab (auf zwei Nachkommastellen)?

  c) Welche Gleichung beschreibt den Zusammenhang zwischen $T'(t)$ und $T(t)$?
teile:
  - typ: zahl
    label: 'a) $T''(0)$'
    einheit: °C/min
    loesung: "-7"
    fehler:
      - wert: "7"
        meldung: 'Der Tee wird kälter. Die Änderungsrate ist deshalb negativ.'
      - wert: "90"
        meldung: '$90$ °C ist die Anfangstemperatur $T(0)$. Gefragt ist die Änderungsrate $T''(0)$.'
  - typ: zahl
    label: 'b) $T''(10)$'
    einheit: °C/min
    loesung: "-7*e^(-1)"
    anzeige: '-2{,}58'
    toleranz: 0.01
    fehler:
      - wert: "-0.7"
        meldung: 'Hast du $e^{-1}$ als $0{,}1$ gerechnet? Es ist $e^{-1} \approx 0{,}368$.'
  - typ: auswahl
    label: 'c)'
    optionen: ['$T''(t) = -0{,}1\cdot\big(T(t) - 20\big)$', '$T''(t) = -0{,}1\cdot T(t)$', '$T''(t) = 70\cdot T(t)$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Teste mit $t = 0$: $-0{,}1\cdot 90 = -9$, aber $T''(0) = -7$. Die Abkühlung hängt vom Abstand zur Raumtemperatur ab, nicht von der Temperatur selbst.'
hinweise:
  - '$T''(t) = 70\cdot(-0{,}1)\,e^{-0{,}1t} = -7\,e^{-0{,}1t}$.'
  - 'Für c): Drücke $70\,e^{-0{,}1t}$ durch $T(t)$ aus.'
loesung: |
  Ansatz: Die Konstante $20$ fällt beim Ableiten weg. Für den Rest gilt die Kettenregel.
  ---
  a) $T'(t) = -7\,e^{-0{,}1t}$, also $T'(0) = -7$ °C pro Minute. Zu Beginn kühlt der Tee um $7$ °C pro Minute ab.
  ---
  b) $T'(10) = -7\,e^{-1} \approx -2{,}58$ °C pro Minute. Je näher der Tee der Raumtemperatur kommt, desto langsamer kühlt er ab.
  ---
  c) $T(t) - 20 = 70\,e^{-0{,}1t}$, also $T'(t) = -0{,}1\cdot 70\,e^{-0{,}1t} = -0{,}1\,\big(T(t) - 20\big)$. Die Abkühlrate ist proportional zum Temperaturunterschied zum Raum. Das heißt **beschränktes Wachstum** beziehungsweise beschränkte Abnahme.
```

```aufgabe
id: dr-anw-beschleunigung-deuten
titel: Wann bremst ein Körper?
niveau: 2
lernziel: 8
kompetenz: begruenden
angabe: |
  Ein Ball wird senkrecht nach oben geworfen, $h(t) = 2 + 20t - 5t^2$. Ein Mitschüler sagt: „Die Beschleunigung ist immer $-10$ m/s²,
  also wird der Ball die ganze Zeit langsamer.“ Nimm Stellung und begründe mit $v(1)$, $v(3)$ und $a$.
teile:
  - typ: text
    muster: |
      Die Aussage stimmt nur für die erste Phase. Es ist $v(t) = 20 - 10t$ und $a = -10$ m/s².
      Bei $t = 1$ ist $v(1) = 10$ m/s, der Ball steigt. Geschwindigkeit und Beschleunigung haben verschiedene
      Vorzeichen, der Ball wird langsamer. Bei $t = 3$ ist $v(3) = -10$ m/s, der Ball fällt. Jetzt haben beide
      dasselbe Vorzeichen, und der Ball wird schneller: Sein Tempo $|v|$ wächst. „Langsamer werden“ heißt,
      dass $v$ und $a$ verschiedene Vorzeichen haben, nicht einfach $a < 0$.
hinweise:
  - Berechne $v(1)$ und $v(3)$. In welche Richtung fliegt der Ball jeweils?
  - Vergleiche jeweils das Vorzeichen von $v$ mit dem von $a$.
loesung: |
  Ansatz: Ob ein Körper langsamer wird, hängt vom Zusammenspiel von $v$ und $a$ ab. $v(t) = 20 - 10t$ und $a(t) = -10$.
  ---
  $t = 1$: $v = 10 > 0$, $a < 0$, verschiedene Vorzeichen, der Ball wird langsamer (er steigt noch).
  ---
  $t = 3$: $v = -10 < 0$, $a < 0$, gleiche Vorzeichen, der Ball wird schneller (er fällt). Die Aussage des Mitschülers gilt also nur bis $t = 2$.
```

```aufgabe
id: dr-anw-turmwurf
titel: Wurf von einem Turm
niveau: 3
lernziel: 8
kompetenz: modellieren
angabe: |
  Von einem $25$ m hohen Turm wird ein Ball senkrecht nach oben geworfen. Seine Höhe über dem Boden ist $h(t) = 25 + 20t - 5t^2$ (in m, $t$ in s).

  a) Wie hoch steigt der Ball?

  b) Wann schlägt er am Boden auf?

  c) Mit welcher Geschwindigkeit schlägt er auf? Gib sie auch in km/h an.

  d) Wie groß ist die mittlere Geschwindigkeit zwischen Abwurf und Aufprall?
teile:
  - typ: zahl
    label: 'a) maximale Höhe'
    einheit: m
    loesung: "25 + 20*2 - 5*2^2"
    anzeige: '45'
    fehler:
      - wert: "20"
        meldung: '$20$ m ist nur der Höhengewinn über dem Turm. Gefragt ist die Höhe über dem Boden, $h(2)$.'
  - typ: zahl
    label: 'b) Aufprallzeit'
    einheit: s
    loesung: "5"
    fehler:
      - wert: "4"
        meldung: 'Nach $4$ s ist der Ball wieder auf Turmhöhe $25$ m. Am Boden ist $h(t) = 0$.'
  - typ: zahl
    label: 'c) Aufprallgeschwindigkeit'
    einheit: m/s
    loesung: "20 - 10*5"
    anzeige: '-30'
    fehler:
      - wert: "30"
        meldung: 'Der Betrag stimmt. Weil der Ball nach unten fliegt, ist $v$ negativ.'
  - typ: zahl
    label: 'c) Tempo beim Aufprall'
    einheit: km/h
    loesung: "30*3.6"
    anzeige: '108'
    fehler:
      - wert: "30/3.6"
        meldung: 'Von m/s nach km/h **multipliziert** man mit $3{,}6$.'
  - typ: zahl
    label: 'd) mittlere Geschwindigkeit'
    einheit: m/s
    loesung: "(0 - 25)/(5 - 0)"
    anzeige: '-5'
    fehler:
      - wert: "5"
        meldung: 'Der Ball endet tiefer, als er gestartet ist. Die mittlere Geschwindigkeit $\frac{h(5) - h(0)}{5}$ ist deshalb negativ.'
hinweise:
  - '$v(t) = h''(t) = 20 - 10t$. Höchster Punkt: $v = 0$. Boden: $h(t) = 0$.'
  - '$5t^2 - 20t - 25 = 0$ ist gleichbedeutend mit $t^2 - 4t - 5 = 0$.'
loesung: |
  Ansatz: $v(t) = h'(t) = 20 - 10t$. Höchster Punkt bei $v = 0$, Aufprall bei $h = 0$.
  ---
  a) $v(t) = 0$ ergibt $t = 2$ s. $h(2) = 25 + 40 - 20 = 45$ m.
  ---
  b) $h(t) = 0$: $25 + 20t - 5t^2 = 0$, durch $-5$ geteilt $t^2 - 4t - 5 = 0$, also $(t - 5)(t + 1) = 0$. Nur $t = 5$ s ist sinnvoll.
  ---
  c) $v(5) = 20 - 50 = -30$ m/s. Das Minus heißt „nach unten“. Tempo $30\cdot 3{,}6 = 108$ km/h.
  ---
  d) $\frac{h(5) - h(0)}{5 - 0} = \frac{0 - 25}{5} = -5$ m/s. Insgesamt ist der Ball also um $25$ m gesunken, im Mittel $5$ m pro Sekunde.
```

## Anwendungen in der Wirtschaft: Kosten, Erlös und Gewinn

```aufgabe
id: dr-check-quadratisch-gewinn
titel: Nullstellen einer nach unten offenen Parabel
niveau: 1
art: check
angabe: |
  Löse $-x^2 + 12x - 20 = 0$. Gib beide Lösungen getrennt durch einen Strichpunkt an.
  (Herkunft: [Kapitel 2, „Quadratische Gleichungen“](/lernen/mathe3/gleichungen))
teile:
  - typ: menge
    label: 'Lösungen'
    loesung: ["2", "10"]
    fehler:
      - wert: ["-2", "-10"]
        meldung: 'Multipliziere zuerst mit $-1$: $x^2 - 12x + 20 = 0$. Dann ist $p = -12$ und $-\frac p2 = +6$.'
loesung: |
  Mit $-1$ multiplizieren: $x^2 - 12x + 20 = 0$. Kleine Lösungsformel: $x = 6 \pm \sqrt{36 - 20} = 6 \pm 4$.
  ---
  Also $x_1 = 2$ und $x_2 = 10$. Probe: $-4 + 24 - 20 = 0$.
```

Auch in der Wirtschaft beschreibt die Ableitung, wie stark eine Größe auf eine kleine Änderung
reagiert. Dort heißt das „**Grenz**“-Größe: Grenzkosten, Grenzerlös, Grenzgewinn. Sie geben ungefähr an,
was **ein zusätzliches Stück** an Kosten, Erlös oder Gewinn bringt. Damit lassen sich die wichtigsten
Fragen eines Betriebs beantworten: Ab welcher Stückzahl macht man Gewinn, und bei welcher Stückzahl ist er am größten?

### Die Grundbegriffe

Ein Betrieb stellt $x$ Stück eines Produkts her und verkauft sie.

- Die **Kostenfunktion** $K(x)$ gibt die Gesamtkosten in Euro an. $K(0)$ sind die **Fixkosten**, die
  auch ohne Produktion anfallen, zum Beispiel Miete.
- Die **Erlösfunktion** $E(x)$ gibt die Einnahmen an. Bei festem Stückpreis $p$ ist $E(x) = p\cdot x$.
- Die **Gewinnfunktion** ist $G(x) = E(x) - K(x)$.
- Die Ableitungen heißen **Grenzkosten** $K'(x)$, **Grenzerlös** $E'(x)$ und **Grenzgewinn** $G'(x)$,
  jeweils in Euro pro Stück.

Warum gibt $K'(x)$ ungefähr die Kosten des nächsten Stücks an? Nach der Linearisierung aus
[9.10 Linearisierung und Fehlerfortpflanzung](/lernen/mathe3/differentialrechnung/die-tangente-als-naeherung-linearisierung-und-fehlerfortpflanzung)
gilt $K(x + 1) - K(x) \approx K'(x)\cdot 1$.

:::beispiel[Grenzkosten und Kostenkehre]
Die Kosten einer Produktion sind $K(x) = 0{,}01x^3 - 0{,}6x^2 + 15x + 200$ Euro.

1. Fixkosten: $K(0) = 200$ Euro.
2. Grenzkosten: $K'(x) = 0{,}03x^2 - 1{,}2x + 15$. Bei $10$ Stück ist $K'(10) = 3 - 12 + 15 = 6$ Euro pro Stück.
3. Vergleich mit den genauen Mehrkosten für das elfte Stück: $K(11) - K(10) = 305{,}71 - 300 = 5{,}71$ Euro. Die Näherung $6$ Euro liegt nahe dran.
4. Die Grenzkosten sind am kleinsten, wo ihre Ableitung null ist: $K''(x) = 0{,}06x - 1{,}2 = 0$ bei $x = 20$.
   Das ist der Wendepunkt von $K$ und heißt **Kostenkehre**.

Bis $20$ Stück steigen die Kosten immer langsamer, weil sich zum Beispiel Maschinen besser auslasten.
Danach steigen sie immer schneller, etwa wegen Überstunden.
:::

### Gewinnschwelle und Gewinnmaximum

Die Nullstellen der Gewinnfunktion trennen Verlust und Gewinn. Die kleinere heißt **Gewinnschwelle**
(englisch *break-even point*), die größere **Gewinngrenze**. Dazwischen liegt die **Gewinnzone**. Den
größten Gewinn findet man mit $G'(x) = 0$. Wegen $G' = E' - K'$ ist das gleichbedeutend mit
$$E'(x) = K'(x).$$
In Worten: Im Gewinnmaximum ist der Grenzerlös gleich den Grenzkosten.

:::beispiel[Gewinnzone und größter Gewinn bei festem Preis]
Ein Betrieb verkauft jedes Stück um $20$ Euro. Die Kosten sind $K(x) = 0{,}5x^2 + 4x + 30$.

1. Erlös: $E(x) = 20x$. Gewinn: $G(x) = 20x - 0{,}5x^2 - 4x - 30 = -0{,}5x^2 + 16x - 30$.
2. Gewinnzone: $G(x) = 0$. Mit $-2$ multiplizieren: $x^2 - 32x + 60 = 0$, also $x = 16 \pm \sqrt{256 - 60} = 16 \pm 14$.
   Gewinnschwelle bei $2$ Stück, Gewinngrenze bei $30$ Stück.
3. Gewinnmaximum: $G'(x) = -x + 16 = 0$ ergibt $x = 16$. $G''(x) = -1 < 0$, also Maximum.
   Größter Gewinn $G(16) = -128 + 256 - 30 = 98$ Euro.
4. Kontrolle mit Grenzerlös gleich Grenzkosten: $E'(x) = 20$ und $K'(x) = x + 4$. Aus $20 = x + 4$ folgt ebenfalls $x = 16$.
:::

```plot
x: [0, 34]
y: [-40, 700]
achsen: { x: "x in Stück", y: "Euro" }
graphen:
  - { f: "20*x", label: "Erlös E(x) = 20x", farbe: 1, von: 0, bis: 34 }
  - { f: "0.5*x^2 + 4*x + 30", label: "Kosten K(x)", farbe: 0, von: 0, bis: 34 }
  - { f: "-0.5*x^2 + 16*x - 30", label: "Gewinn G(x)", farbe: 2, von: 0, bis: 34 }
punkte:
  - { x: 2, y: 0, label: "Gewinnschwelle" }
  - { x: 30, y: 0, label: "Gewinngrenze" }
  - { x: 16, y: 98, label: "größter Gewinn 98", farbe: 2 }
beschriftung: Erlös, Kosten und Gewinn eines Betriebs mit Stückpreis 20 Euro. Zwischen 2 und 30 Stück liegt der Erlös über den Kosten, dort ist der Gewinn positiv. Am größten ist er bei 16 Stück mit 98 Euro.
```

:::beispiel[Ein Monopol und der Cournot-Punkt]
Ein Anbieter ohne Konkurrenz kann den Preis selbst festlegen. Je höher der Preis, desto weniger wird
verkauft. Die **Preis-Absatz-Funktion** sei $p(x) = 50 - 0{,}5x$, die Kosten $K(x) = 10x + 200$.

1. Erlös: $E(x) = p(x)\cdot x = 50x - 0{,}5x^2$. Gewinn: $G(x) = -0{,}5x^2 + 40x - 200$.
2. $G'(x) = -x + 40 = 0$ ergibt $x = 40$. Der zugehörige Preis ist $p(40) = 30$ Euro.
3. Größter Gewinn: $G(40) = -800 + 1600 - 200 = 600$ Euro.

Der Punkt $C(40 \mid 30)$ aus gewinnoptimaler Menge und Preis heißt **Cournot-Punkt**, nach dem
französischen Mathematiker Augustin Cournot.
:::

:::achtung[Erlösmaximum mit Gewinnmaximum verwechselt]
Beim Monopol rechnet jemand: „$E'(x) = 50 - x = 0$, also ist der Gewinn bei $50$ Stück am größten.“ (falsch)

Bei $50$ Stück ist der **Erlös** am größten. Die Kosten steigen aber mit jedem Stück weiter. Der Gewinn
ist dort nur $G(50) = -1250 + 2000 - 200 = 550$ Euro, bei $40$ Stück dagegen $600$ Euro. Für das
Gewinnmaximum musst du $G$ ableiten, nicht $E$.
:::

:::achtung[Grenzkosten mit Stückkosten verwechselt]
Für $K(x) = 0{,}01x^3 - 0{,}6x^2 + 15x + 200$ schreibt jemand: „Bei $10$ Stück kostet ein weiteres Stück
$\frac{K(10)}{10} = 30$ Euro.“ (falsch)

$\frac{K(x)}{x}$ sind die **Stückkosten**, also die Durchschnittskosten aller bisherigen Stücke samt
Fixkosten. Was ein **zusätzliches** Stück kostet, geben die Grenzkosten an: $K'(10) = 6$ Euro. Die
Fixkosten von $200$ Euro fallen ja nicht noch einmal an.
:::

```reflexion
frage: Warum ist im Gewinnmaximum der Grenzerlös gleich den Grenzkosten? Erkläre es ohne Formel, mit „dem nächsten Stück“.
antwort: |
  Solange ein zusätzliches Stück mehr Erlös bringt, als es kostet ($E' > K'$), lohnt es sich, mehr zu
  produzieren. Der Gewinn steigt dann noch.

  Bringt ein zusätzliches Stück weniger ein, als es kostet ($E' < K'$), sinkt der Gewinn mit jedem
  weiteren Stück. Man sollte also weniger produzieren. Genau dazwischen, wo Grenzerlös und Grenzkosten
  gleich sind, kann man den Gewinn nicht mehr steigern. Das ist das Maximum.
```

```aufgabe
id: dr-wi-begriffe
titel: Fixkosten und Gewinn bestimmen
niveau: 1
lernziel: 8
kompetenz: anwenden
angabe: |
  Die Kosten für $x$ Stück sind $K(x) = 0{,}5x^2 + 6x + 80$ Euro, der Verkaufspreis beträgt $26$ Euro pro Stück.

  a) Wie hoch sind die Fixkosten?

  b) Wie groß ist der Gewinn bei $10$ Stück?
teile:
  - typ: zahl
    label: 'a) Fixkosten'
    einheit: Euro
    loesung: "80"
    fehler:
      - wert: "0"
        meldung: 'Fixkosten fallen auch ohne Produktion an. Setze $x = 0$ in $K$ ein.'
  - typ: zahl
    label: 'b) $G(10)$'
    einheit: Euro
    loesung: "26*10 - (0.5*100 + 60 + 80)"
    anzeige: '70'
    fehler:
      - wert: "260"
        meldung: '$260$ Euro ist der **Erlös**. Vom Erlös musst du noch die Kosten $K(10)$ abziehen.'
hinweise:
  - 'Fixkosten sind $K(0)$. Gewinn ist Erlös minus Kosten, $G(x) = 26x - K(x)$.'
loesung: |
  a) $K(0) = 80$ Euro.
  ---
  b) $E(10) = 260$ Euro, $K(10) = 50 + 60 + 80 = 190$ Euro. Gewinn $G(10) = 260 - 190 = 70$ Euro.
```

```aufgabe
id: dr-wi-grenzkosten-deuten
titel: Grenzkosten deuten
niveau: 1
lernziel: 8
kompetenz: verstehen
angabe: |
  Die Kosten sind $K(x) = 0{,}04x^2 + 8x + 500$ Euro für $x$ Stück.

  a) Berechne die Grenzkosten bei $50$ Stück.

  b) Wie viel kostet das 51. Stück genau, also $K(51) - K(50)$?
teile:
  - typ: zahl
    label: 'a) $K''(50)$'
    einheit: Euro/Stück
    loesung: "0.08*50 + 8"
    anzeige: '12'
    fehler:
      - wert: "20"
        meldung: '$20$ Euro sind die **Stückkosten** $\frac{K(50)}{50} = \frac{1000}{50}$. Die Grenzkosten sind die Ableitung $K''(50)$.'
  - typ: zahl
    label: 'b) $K(51) - K(50)$'
    einheit: Euro
    loesung: "0.04*51^2 + 8*51 - 0.04*50^2 - 8*50"
    anzeige: '12{,}04'
    toleranz: 0.001
    fehler:
      - wert: "0.04*51^2 + 8*51 + 500"
        meldung: 'Das sind die **Gesamt**kosten für $51$ Stück. Gefragt ist der Unterschied zu den Kosten für $50$ Stück.'
hinweise:
  - '$K''(x) = 0{,}08x + 8$.'
loesung: |
  a) $K'(x) = 0{,}08x + 8$, also $K'(50) = 4 + 8 = 12$ Euro pro Stück. Das 51. Stück kostet also ungefähr $12$ Euro.
  ---
  b) $K(51) = 104{,}04 + 408 + 500 = 1012{,}04$ und $K(50) = 100 + 400 + 500 = 1000$. Unterschied $12{,}04$ Euro. Die Grenzkosten sind eine gute Näherung.
```

```aufgabe
id: dr-anw-grenzkosten
titel: Grenzkosten und Kostenkehre
niveau: 2
lernziel: 8
kompetenz: anwenden
angabe: |
  Die Gesamtkosten einer Produktion sind $K(x) = 0{,}002x^3 - 0{,}3x^2 + 20x + 500$ Euro für $x$ Stück.

  a) Berechne die Grenzkosten bei $x = 30$.

  b) Bei welcher Stückzahl sind die Grenzkosten am kleinsten (Kostenkehre), und wie groß sind sie dort?
teile:
  - typ: zahl
    label: 'a) $K''(30)$'
    einheit: Euro/Stück
    loesung: "0.006*30^2 - 0.6*30 + 20"
    anzeige: '7{,}4'
    fehler:
      - wert: "884"
        meldung: '$884$ Euro sind die Gesamtkosten $K(30)$. Die Grenzkosten sind die Ableitung $K''(30)$.'
  - typ: zahl
    label: 'b) Kostenkehre bei $x = $'
    einheit: Stück
    loesung: "0.6/0.012"
    anzeige: '50'
    fehler:
      - wert: "100"
        meldung: 'Prüfe $K''''$: Die Ableitung von $0{,}006x^2$ ist $0{,}012x$, nicht $0{,}006x$.'
  - typ: zahl
    label: 'b) minimale Grenzkosten'
    einheit: Euro/Stück
    loesung: "0.006*50^2 - 0.6*50 + 20"
    anzeige: '5'
hinweise:
  - '$K''(x) = 0{,}006x^2 - 0{,}6x + 20$.'
  - 'Die Grenzkosten sind am kleinsten, wo ihre Ableitung $K''''(x)$ null ist.'
loesung: |
  Ansatz: Grenzkosten sind $K'$. Ihr Minimum liegt dort, wo $K'' = 0$ ist, also an der Wendestelle von $K$.
  ---
  a) $K'(x) = 0{,}006x^2 - 0{,}6x + 20$, $K'(30) = 5{,}4 - 18 + 20 = 7{,}4$ Euro pro Stück. Das 31. Stück kostet also ungefähr $7{,}40$ Euro.
  ---
  b) $K''(x) = 0{,}012x - 0{,}6 = 0$ ergibt $x = 50$. Wegen $K'''(x) = 0{,}012 > 0$ ist das ein Minimum von $K'$.
  ---
  $K'(50) = 15 - 30 + 20 = 5$ Euro pro Stück. Bei $50$ Stück ist der Kostenzuwachs pro Stück am geringsten.
```

```aufgabe
id: dr-wi-breakeven
titel: Gewinnzone und Gewinnmaximum
niveau: 2
lernziel: 8
kompetenz: modellieren
angabe: |
  Ein Produkt wird um $30$ Euro pro Stück verkauft. Die Kosten sind $K(x) = x^2 + 6x + 80$ Euro.

  a) Bestimme Gewinnschwelle und Gewinngrenze.

  b) Bei welcher Stückzahl ist der Gewinn am größten, und wie groß ist er?
teile:
  - typ: menge
    label: 'a) Gewinnschwelle und Gewinngrenze'
    loesung: ["4", "20"]
    fehler:
      - wert: ["-4", "-20"]
        meldung: 'Vorzeichenfehler in der Lösungsformel. Aus $x^2 - 24x + 80 = 0$ folgt $x = 12 \pm 8$.'
  - typ: zahl
    label: 'b) gewinnoptimale Stückzahl'
    loesung: "12"
    fehler:
      - wert: "15"
        meldung: 'Hast du $G''(x) = -2x + 30$ gerechnet? Im Gewinn steht $30x - 6x = 24x$, also $G''(x) = -2x + 24$.'
  - typ: zahl
    label: 'b) größter Gewinn'
    einheit: Euro
    loesung: "30*12 - (144 + 72 + 80)"
    anzeige: '64'
    fehler:
      - wert: "360"
        meldung: '$360$ Euro ist der Erlös bei $12$ Stück. Zieh die Kosten $K(12)$ ab.'
hinweise:
  - '$G(x) = 30x - (x^2 + 6x + 80) = -x^2 + 24x - 80$.'
  - 'Gewinnzone: $G(x) = 0$. Maximum: $G''(x) = 0$.'
gefuehrt:
  - text: Stelle die Gewinnfunktion $G(x) = E(x) - K(x)$ auf.
    teil: { typ: term, loesung: "-x^2 + 24*x - 80" }
    erklaerung: '$30x - x^2 - 6x - 80 = -x^2 + 24x - 80$. Achte auf die Klammer: Alle Kosten werden abgezogen.'
  - text: Wo ist der Gewinn null? Gib beide Stückzahlen an.
    teil: { typ: menge, loesung: ["4", "20"] }
    erklaerung: '$x^2 - 24x + 80 = 0$, also $x = 12 \pm \sqrt{144 - 80} = 12 \pm 8$.'
  - text: Wo ist $G'(x) = 0$?
    teil: { typ: zahl, loesung: "12" }
    erklaerung: '$G''(x) = -2x + 24 = 0$ ergibt $x = 12$. Wegen $G'''' = -2 < 0$ ist das ein Maximum.'
  - text: Wie groß ist der Gewinn dort?
    teil: { typ: zahl, loesung: "64" }
    erklaerung: '$G(12) = -144 + 288 - 80 = 64$ Euro.'
loesung: |
  Ansatz: Gewinn ist Erlös minus Kosten. $G(x) = 30x - (x^2 + 6x + 80) = -x^2 + 24x - 80$.
  ---
  a) $G(x) = 0$ heißt $x^2 - 24x + 80 = 0$, also $x = 12 \pm 8$. Gewinnschwelle $4$ Stück, Gewinngrenze $20$ Stück.
  ---
  b) $G'(x) = -2x + 24 = 0$ ergibt $x = 12$, $G''(x) = -2 < 0$, also Maximum. $G(12) = 64$ Euro.
  ---
  Kontrolle: Grenzerlös $30$ gleich Grenzkosten $K'(x) = 2x + 6$ ergibt ebenfalls $x = 12$. Die optimale Menge liegt genau in der Mitte der Gewinnzone, wie bei jeder Parabel.
```

```aufgabe
id: dr-wi-fehler-erloes
titel: Maximaler Erlös ist nicht maximaler Gewinn
niveau: 2
lernziel: 8
kompetenz: verstehen
angabe: |
  Ein Anbieter hat den Erlös $E(x) = 80x - x^2$ und die Kosten $K(x) = 20x + 300$ (in Euro, $x$ in Stück).
  Ein Mitschüler sagt: „$E'(x) = 80 - 2x = 0$ bei $x = 40$. Also ist der Gewinn bei $40$ Stück am größten.“

  a) Was ist falsch daran?

  b) Bei welcher Stückzahl ist der Gewinn wirklich am größten?
teile:
  - typ: auswahl
    label: 'a)'
    optionen:
      - 'Er hat das Erlösmaximum berechnet. Die Kosten fehlen, man muss $G = E - K$ ableiten.'
      - 'Die Ableitung von $80x - x^2$ ist falsch.'
      - 'Ein Maximum gibt es hier nicht.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$E''(x) = 80 - 2x$ stimmt. Das Problem ist, welche Funktion abgeleitet wurde.'
  - typ: zahl
    label: 'b) gewinnoptimale Stückzahl'
    loesung: "30"
    fehler:
      - wert: "40"
        meldung: 'Das ist das Erlösmaximum. Der Gewinn $G(x) = -x^2 + 60x - 300$ hat sein Maximum woanders.'
hinweise:
  - '$G(x) = E(x) - K(x)$. Leite $G$ ab.'
  - 'Vergleiche zur Kontrolle $G(30)$ und $G(40)$.'
loesung: |
  Ansatz: Gewinn ist Erlös minus Kosten, $G(x) = 80x - x^2 - 20x - 300 = -x^2 + 60x - 300$.
  ---
  a) Der Mitschüler hat nur $E$ maximiert. Jedes weitere Stück verursacht aber Kosten von $20$ Euro. Deshalb lohnt sich das Erlösmaximum nicht.
  ---
  b) $G'(x) = -2x + 60 = 0$ ergibt $x = 30$. Vergleich: $G(30) = -900 + 1800 - 300 = 600$ Euro, aber $G(40) = -1600 + 2400 - 300 = 500$ Euro.
```

```aufgabe
id: dr-wi-begruenden
titel: Grenzerlös und Grenzkosten im Gewinnmaximum
niveau: 2
lernziel: 8
kompetenz: begruenden
angabe: |
  Begründe, warum für eine differenzierbare Gewinnfunktion $G = E - K$ im Gewinnmaximum (an einer inneren Stelle) $E'(x) = K'(x)$ gilt.
  Erkläre außerdem in Worten, was geschieht, wenn bei der aktuellen Stückzahl $E'(x) > K'(x)$ ist.
teile:
  - typ: text
    muster: |
      Im Gewinnmaximum an einer inneren Stelle hat $G$ eine waagrechte Tangente, also $G'(x) = 0$. Wegen der
      Summenregel ist $G'(x) = E'(x) - K'(x)$. Aus $E'(x) - K'(x) = 0$ folgt $E'(x) = K'(x)$.
      Ist $E'(x) > K'(x)$, dann bringt ein zusätzliches Stück ungefähr mehr Erlös, als es kostet. Der
      Gewinn steigt noch, wenn man mehr produziert. Das Maximum ist also noch nicht erreicht.
hinweise:
  - Was gilt für $G'$ an einer inneren Extremstelle? Wie hängen $G'$, $E'$ und $K'$ zusammen?
  - '$E''(x)$ und $K''(x)$ geben ungefähr Erlös und Kosten des nächsten Stücks an.'
loesung: |
  Ansatz: notwendige Bedingung für ein Extremum an einer inneren Stelle, $G'(x) = 0$.
  ---
  Summenregel: $G'(x) = E'(x) - K'(x)$. Also bedeutet $G'(x) = 0$ genau $E'(x) = K'(x)$.
  ---
  Ist $E' > K'$, dann ist $G' > 0$: Der Gewinn wächst noch mit der Stückzahl. Man sollte mehr produzieren, bis Grenzerlös und Grenzkosten gleich sind.
```

```aufgabe
id: dr-wi-cournot
titel: Gewinnoptimaler Preis eines Monopols
niveau: 3
lernziel: 8
kompetenz: modellieren
angabe: |
  Für ein Produkt ohne Konkurrenz gilt die Preis-Absatz-Funktion $p(x) = 120 - 2x$ (Preis in Euro, $x$ in Stück).
  Die Kosten sind $K(x) = 20x + 600$ Euro.

  a) Bestimme die gewinnoptimale Stückzahl und den zugehörigen Preis (Cournot-Punkt).

  b) Wie groß ist der maximale Gewinn?

  c) Ab welcher Stückzahl macht der Anbieter Gewinn (auf zwei Nachkommastellen)?
teile:
  - typ: zahl
    label: 'a) gewinnoptimale Stückzahl'
    loesung: "25"
    fehler:
      - wert: "30"
        meldung: 'Bei $30$ Stück ist der **Erlös** $E(x) = 120x - 2x^2$ am größten. Für den Gewinn musst du die Kosten abziehen.'
  - typ: zahl
    label: 'a) Preis im Cournot-Punkt'
    einheit: Euro
    loesung: "120 - 2*25"
    anzeige: '70'
    fehler:
      - wert: "60"
        meldung: '$60$ Euro ist der Preis bei $30$ Stück. Setze die gewinnoptimale Stückzahl in $p(x)$ ein.'
  - typ: zahl
    label: 'b) maximaler Gewinn'
    einheit: Euro
    loesung: "120*25 - 2*25^2 - (20*25 + 600)"
    anzeige: '650'
  - typ: zahl
    label: 'c) Gewinnschwelle'
    einheit: Stück
    loesung: "25 - sqrt(325)"
    anzeige: '6{,}97'
    toleranz: 0.01
hinweise:
  - 'Erlös $E(x) = p(x)\cdot x = 120x - 2x^2$. Gewinn $G(x) = -2x^2 + 100x - 600$.'
  - 'Gewinnschwelle: $G(x) = 0$, durch $-2$ geteilt $x^2 - 50x + 300 = 0$.'
loesung: |
  Ansatz: Der Erlös ist Preis mal Menge, wobei der Preis von der Menge abhängt. $E(x) = (120 - 2x)\,x = 120x - 2x^2$.
  ---
  Gewinn $G(x) = 120x - 2x^2 - 20x - 600 = -2x^2 + 100x - 600$. $G'(x) = -4x + 100 = 0$ ergibt $x = 25$, $G'' = -4 < 0$, also Maximum.
  ---
  a) Preis $p(25) = 120 - 50 = 70$ Euro. Cournot-Punkt $C(25 \mid 70)$.
  ---
  b) $G(25) = -1250 + 2500 - 600 = 650$ Euro.
  ---
  c) $x^2 - 50x + 300 = 0$, also $x = 25 \pm \sqrt{625 - 300} = 25 \pm \sqrt{325}$. Gewinnschwelle $x \approx 6{,}97$, Gewinngrenze $x \approx 43{,}03$. Ab $7$ Stück macht der Anbieter Gewinn.
```

## Das Newton-Verfahren: Gleichungen näherungsweise lösen

```aufgabe
id: dr-check-tangente-nullstelle
titel: Wo schneidet eine Gerade die x-Achse?
niveau: 1
art: check
angabe: |
  Wo schneidet die Gerade $y = 2x - 3$ die $x$-Achse?
  (Herkunft: [9.9 Tangente und Normale aufstellen](/lernen/mathe3/differentialrechnung/tangente-und-normale-aufstellen) und [Kapitel 4, „Lineare Funktionen“](/lernen/mathe3/funktionen))
teile:
  - typ: zahl
    label: '$x$'
    loesung: "3/2"
    anzeige: '1{,}5'
    fehler:
      - wert: "-3"
        meldung: '$-3$ ist der Schnitt mit der $y$-Achse. Für den Schnitt mit der $x$-Achse setzt du $y = 0$.'
loesung: |
  Schnitt mit der $x$-Achse heißt $y = 0$: $2x - 3 = 0$.
  ---
  Also $x = 1{,}5$.
```

Viele Gleichungen lassen sich nicht mit einer Formel lösen, zum Beispiel $x^3 - 2x - 5 = 0$ oder
$\cos x = x$. Taschenrechner und Computer bestimmen solche Lösungen trotzdem auf viele Stellen genau.
Eine der wichtigsten Methoden dafür ist das **Newton-Verfahren**. Es zeigt besonders schön, wozu
Tangenten gut sind. Ein **Verfahren**, das man immer wieder auf das eigene Ergebnis anwendet, heißt
**iterativ** (lateinisch *iterare*, wiederholen).

### Die Idee: der Kurve entlang der Tangente folgen

Gesucht ist eine Nullstelle von $f$. Du startest mit einem Schätzwert $x_0$ in ihrer Nähe. Statt der
Kurve, deren Nullstelle du nicht kennst, nimmst du die **Tangente** in $x_0$. Ihre Nullstelle kannst du
leicht berechnen. Weil die Tangente die Kurve in der Nähe gut annähert, liegt diese Nullstelle $x_1$
meist näher an der gesuchten. Dann wiederholst du das Ganze mit $x_1$.

Die Tangente in $x_n$ ist $y = f(x_n) + f'(x_n)\cdot(x - x_n)$. Wir setzen $y = 0$ und lösen nach $x$:
$f'(x_n)\cdot(x - x_n) = -f(x_n)$, also $x = x_n - \frac{f(x_n)}{f'(x_n)}$. Das ist die neue Näherung.

:::satz[Newton-Verfahren]
Ist $f$ differenzierbar und $x_0$ ein Startwert, dann berechnet man nacheinander
$$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)} \qquad \text{für } n = 0, 1, 2, \dots$$
Das geht, solange $f'(x_n) \neq 0$ ist. Bei gutem Startwert nähern sich die $x_n$ sehr schnell einer Nullstelle von $f$.
:::

Dabei ist $x_n$ die aktuelle Näherung und $x_{n+1}$ die nächste. Der Bruch $\frac{f(x_n)}{f'(x_n)}$ ist die
**Korrektur**: Höhe durch Steigung ergibt, wie weit man nach links oder rechts gehen muss.

```plot
x: [0.8, 2.2]
y: [-1.5, 3]
achsen: { x: "x", y: "y" }
graphen:
  - { f: "x^2 - 2", label: "f(x) = x² − 2", farbe: 0 }
  - { f: "2*x - 3", label: "Tangente in x₀ = 1", farbe: 1, gestrichelt: true }
  - { f: "3*x - 4.25", label: "Tangente in x₁ = 1,5", farbe: 2, gestrichelt: true }
punkte:
  - { x: 1, y: -1, label: "(x₀|f(x₀))" }
  - { x: 1.5, y: 0, label: "x₁ = 1,5", farbe: 1 }
  - { x: 1.5, y: 0.25, farbe: 2 }
  - { x: "17/12", y: 0, label: "x₂", farbe: 2 }
  - { x: "sqrt(2)", y: 0, label: "√2", farbe: 3 }
beschriftung: Newton-Verfahren für f(x) = x² − 2 mit Startwert 1. Die Tangente in x₀ schneidet die x-Achse bei 1,5, die Tangente dort bei 17/12 ≈ 1,4167. Die Näherungen nähern sich schnell √2 ≈ 1,4142.
```

:::beispiel[Die Wurzel aus 2 mit dem Newton-Verfahren]
Gesucht ist $\sqrt2$, also die positive Nullstelle von $f(x) = x^2 - 2$. Es ist $f'(x) = 2x$. Startwert $x_0 = 1$.

1. $x_1 = 1 - \frac{1 - 2}{2} = 1 + 0{,}5 = 1{,}5$.
2. $x_2 = 1{,}5 - \frac{2{,}25 - 2}{3} = 1{,}5 - 0{,}08\overline{3} \approx 1{,}416667$.
3. $x_3 = 1{,}416667 - \frac{0{,}006944}{2{,}833333} \approx 1{,}414216$.

Der genaue Wert ist $\sqrt2 = 1{,}4142136\ldots$ Nach drei Schritten stimmen schon fünf Nachkommastellen.
Die Zahl der richtigen Stellen verdoppelt sich ungefähr mit jedem Schritt. Für $f(x) = x^2 - a$ wird die
Formel übrigens zu $x_{n+1} = \frac12\big(x_n + \frac{a}{x_n}\big)$. Das ist das uralte **Heron-Verfahren**.
:::

:::beispiel[Newtons eigenes Beispiel]
Gesucht ist eine Lösung von $x^3 - 2x - 5 = 0$. Es ist $f'(x) = 3x^2 - 2$.

1. **Startwert finden:** $f(2) = -1 < 0$ und $f(3) = 16 > 0$. Weil $f$ stetig ist und das Vorzeichen
   wechselt, liegt zwischen $2$ und $3$ eine Nullstelle (Nullstellensatz, [Kapitel 12](/lernen/mathe3/grenzwerte-stetigkeit)).
   Weil $f(2)$ näher bei $0$ liegt, starten wir mit $x_0 = 2$.
2. $x_1 = 2 - \frac{-1}{10} = 2{,}1$.
3. $x_2 = 2{,}1 - \frac{0{,}061}{11{,}23} \approx 2{,}094568$.
4. $x_3 \approx 2{,}094551$.

**Wann aufhören?** Wenn sich zwei aufeinanderfolgende Näherungen in den verlangten Stellen nicht
mehr unterscheiden. Auf vier Nachkommastellen stimmen $x_2$ und $x_3$ überein, die Lösung ist $x \approx 2{,}0946$.
:::

:::achtung[Ein Startwert, bei dem das Verfahren hin- und herspringt]
Für $f(x) = x^3 - 2x + 2$ mit $f'(x) = 3x^2 - 2$ startet jemand bei $x_0 = 0$:
$$x_1 = 0 - \frac{2}{-2} = 1, \qquad x_2 = 1 - \frac{1}{1} = 0, \qquad x_3 = 1, \ \dots \qquad \text{(keine Annäherung).}$$
Die Folge springt ewig zwischen $0$ und $1$ hin und her. Die einzige Nullstelle liegt aber bei etwa
$-1{,}77$. Das Verfahren funktioniert nur zuverlässig, wenn der Startwert nahe an der Nullstelle liegt.
Bestimme den Startwert deshalb aus einer Skizze oder einer Wertetabelle mit Vorzeichenwechsel.
:::

:::achtung[Waagrechte Tangente oder Gradmodus]
Zwei weitere Fallen:

- Ist $f'(x_n) = 0$, ist die Tangente waagrecht und schneidet die $x$-Achse nie. In der Formel stünde
  eine Division durch $0$. Bei $f(x) = x^2 - 2$ mit Startwert $x_0 = 0$ passiert genau das. Ist $f'(x_n)$
  nur sehr klein, springt $x_{n+1}$ weit weg.
- Bei Gleichungen mit Winkelfunktionen muss der Taschenrechner auf RAD stehen. Für $\cos x = x$ mit
  $x_0 = 1$ liefert der Gradmodus $x_1 \approx 0{,}99985$ statt richtig $x_1 \approx 0{,}7504$.
:::

:::merke[Rezept: Newton-Verfahren]
1. Die Gleichung in die Form $f(x) = 0$ bringen, zum Beispiel $\cos x = x$ zu $f(x) = x - \cos x$.
2. $f'(x)$ bestimmen.
3. Startwert $x_0$ aus Skizze oder Vorzeichenwechsel wählen.
4. $x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$ berechnen. Zwischenergebnisse **nicht runden**, im Taschenrechner weiterrechnen.
5. Aufhören, wenn sich die verlangten Stellen nicht mehr ändern. Probe: $f(x_n)$ ist fast $0$.
:::

```reflexion
frage: Warum ist eine einzige Tangente meist so viel besser als der Startwert? Und warum wird es mit jedem Schritt noch besser?
antwort: |
  Die Tangente ersetzt die Kurve durch die beste Gerade in der Nähe des Startwerts. Der Fehler dieser
  Näherung wächst nur mit dem **Quadrat** des Abstands, wie in
  [9.10 Linearisierung und Fehlerfortpflanzung](/lernen/mathe3/differentialrechnung/die-tangente-als-naeherung-linearisierung-und-fehlerfortpflanzung) gezeigt.

  Ist der Startwert zum Beispiel $0{,}1$ von der Nullstelle entfernt, ist der neue Fehler ungefähr von
  der Größe $0{,}1^2 = 0{,}01$, dann $0{,}0001$ und so weiter. Deshalb verdoppelt sich die Zahl der
  richtigen Stellen ungefähr mit jedem Schritt. Das gilt aber nur, wenn man schon nahe an der Nullstelle ist.
```

```aufgabe
id: dr-newton-wurzel
titel: Die Wurzel aus 3 mit Newton
niveau: 1
lernziel: 9
kompetenz: rechnen
angabe: |
  Berechne mit dem Newton-Verfahren für $f(x) = x^2 - 3$ und dem Startwert $x_0 = 2$ die Näherungen $x_1$ und $x_2$ (auf sechs Nachkommastellen).
teile:
  - typ: zahl
    label: '$x_1$'
    loesung: "2 - (2^2 - 3)/(2*2)"
    anzeige: '1{,}75'
    fehler:
      - wert: "2 + (2^2 - 3)/(2*2)"
        meldung: 'In der Formel steht ein **Minus**: $x_1 = x_0 - \frac{f(x_0)}{f''(x_0)}$. Weil $f(2) = 1 > 0$ ist, muss man nach links gehen.'
  - typ: zahl
    label: '$x_2$'
    loesung: "1.75 - (1.75^2 - 3)/(2*1.75)"
    anzeige: '1{,}732143'
    toleranz: 0.00001
    fehler:
      - wert: "1.75 - (1.75^2 - 3)/(2*2)"
        meldung: 'Im zweiten Schritt brauchst du die **neue** Steigung $f''(1{,}75) = 3{,}5$, nicht noch einmal $f''(2) = 4$.'
hinweise:
  - '$f''(x) = 2x$. Setze in $x_{n+1} = x_n - \frac{f(x_n)}{f''(x_n)}$ ein.'
loesung: |
  $f'(x) = 2x$. Schritt 1: $x_1 = 2 - \dfrac{4 - 3}{4} = 1{,}75$.
  ---
  Schritt 2: $f(1{,}75) = 3{,}0625 - 3 = 0{,}0625$ und $f'(1{,}75) = 3{,}5$. Also $x_2 = 1{,}75 - \dfrac{0{,}0625}{3{,}5} \approx 1{,}732143$.
  ---
  Vergleich: $\sqrt3 = 1{,}7320508\ldots$ Nach zwei Schritten ist der Fehler kleiner als $0{,}0001$.
```

```aufgabe
id: dr-newton-schritt
titel: Ein Newton-Schritt für eine Kubikwurzel
niveau: 1
lernziel: 9
kompetenz: rechnen
angabe: |
  Gesucht ist $\sqrt[3]{5}$, die Nullstelle von $f(x) = x^3 - 5$. Berechne einen Newton-Schritt mit dem Startwert $x_0 = 2$.
teile:
  - typ: zahl
    label: '$x_1$'
    loesung: "2 - (8 - 5)/(3*4)"
    anzeige: '1{,}75'
    fehler:
      - wert: "2 - (8 - 5)/(3*8)"
        meldung: 'Die Ableitung von $x^3$ ist $3x^2$, nicht $3x^3$. Also $f''(2) = 3\cdot 4 = 12$.'
      - wert: "2 + (8 - 5)/(3*4)"
        meldung: 'Das Vorzeichen der Korrektur stimmt nicht. Die Formel hat ein Minus.'
hinweise:
  - '$f(2) = 3$ und $f''(x) = 3x^2$.'
loesung: |
  $f(2) = 8 - 5 = 3$, $f'(x) = 3x^2$, also $f'(2) = 12$.
  ---
  $x_1 = 2 - \frac{3}{12} = 1{,}75$. Zum Vergleich: $\sqrt[3]{5} \approx 1{,}710$. Schon ein Schritt bringt viel.
```

```aufgabe
id: dr-newton-cos
titel: Eine Gleichung mit Kosinus
niveau: 2
lernziel: 9
kompetenz: rechnen
angabe: |
  Die Gleichung $\cos x = x$ ($x$ im Bogenmaß) hat genau eine Lösung. Bestimme sie näherungsweise mit dem Newton-Verfahren:
  Berechne ausgehend von $x_0 = 1$ die Werte $x_1$ und $x_2$ auf vier Nachkommastellen.
teile:
  - typ: zahl
    label: '$x_1$'
    loesung: "1 - (1 - cos(1))/(1 + sin(1))"
    anzeige: '0{,}7504'
    toleranz: 0.0001
    fehler:
      - wert: "1 - (1 - cos(pi/180))/(1 + sin(pi/180))"
        meldung: 'Dein Taschenrechner steht auf DEG. Die Gleichung ist im **Bogenmaß** gemeint, stell auf RAD um.'
      - wert: "1 - (1 - cos(1))/(1 - sin(1))"
        meldung: 'Prüfe die Ableitung von $f(x) = x - \cos x$: $(-\cos x)'' = +\sin x$, also $f''(x) = 1 + \sin x$.'
  - typ: zahl
    label: '$x_2$'
    loesung: "0.7503638678 - (0.7503638678 - cos(0.7503638678))/(1 + sin(0.7503638678))"
    anzeige: '0{,}7391'
    toleranz: 0.0001
    fehler:
      - wert: "0.7504 - (0.7504 - cos(0.7504))/(1 + sin(1))"
        meldung: 'Im zweiten Schritt gehört in den Nenner $f''(x_1) = 1 + \sin(0{,}7504)$, nicht mehr $1 + \sin 1$.'
hinweise:
  - Bring die Gleichung auf die Form $f(x) = 0$ mit $f(x) = x - \cos x$.
  - '$f''(x) = 1 + \sin x$. Taschenrechner auf RAD.'
loesung: |
  Ansatz: $f(x) = x - \cos x$ hat genau dort eine Nullstelle, wo $\cos x = x$ ist. $f'(x) = 1 + \sin x$.
  ---
  $x_1 = 1 - \dfrac{1 - \cos 1}{1 + \sin 1} = 1 - \dfrac{0{,}459698}{1{,}841471} \approx 0{,}7504$.
  ---
  $x_2 = 0{,}7504 - \dfrac{f(0{,}7504)}{f'(0{,}7504)} \approx 0{,}7504 - \dfrac{0{,}018923}{1{,}681905} \approx 0{,}7391$.
  ---
  Probe: $\cos 0{,}7391 \approx 0{,}7391$. Die Lösung ist $x \approx 0{,}739085$.
```

```aufgabe
id: dr-newton-kubisch
titel: Eine Nullstelle eines Polynoms dritten Grades
niveau: 2
lernziel: 9
kompetenz: anwenden
angabe: |
  Die Funktion $f(x) = x^3 + x - 1$ hat genau eine Nullstelle.

  a) Zeige mit $f(0)$ und $f(1)$, dass sie zwischen $0$ und $1$ liegt.

  b) Berechne mit dem Startwert $x_0 = 1$ die Näherungen $x_1$ und $x_2$ (auf vier Nachkommastellen).

  c) Gib die Nullstelle auf drei Nachkommastellen an.
teile:
  - typ: zahl
    label: 'b) $x_1$'
    loesung: "1 - 1/4"
    anzeige: '0{,}75'
    fehler:
      - wert: "1 - 1/3"
        meldung: 'Die Ableitung ist $f''(x) = 3x^2 + 1$. Die $+1$ kommt von der Ableitung des Summanden $x$, also $f''(1) = 4$.'
  - typ: zahl
    label: 'b) $x_2$'
    loesung: "0.75 - (0.75^3 + 0.75 - 1)/(3*0.75^2 + 1)"
    anzeige: '0{,}6860'
    toleranz: 0.0001
    fehler:
      - wert: "0.75 - (0.75^3 + 0.75 - 1)/4"
        meldung: 'Verwende die Steigung an der **neuen** Stelle: $f''(0{,}75) = 3\cdot 0{,}5625 + 1 = 2{,}6875$.'
  - typ: zahl
    label: 'c) Nullstelle'
    loesung: "0.6823278"
    anzeige: '0{,}682'
    toleranz: 0.0005
    fehler:
      - wert: "0.686"
        meldung: 'Nach zwei Schritten stimmt die dritte Nachkommastelle noch nicht. Rechne einen weiteren Schritt, bis sich die ersten drei Stellen nicht mehr ändern.'
hinweise:
  - 'Vorzeichenwechsel: $f(0) = -1$ und $f(1) = 1$.'
  - '$f''(x) = 3x^2 + 1$. Rechne so lange weiter, bis sich drei Nachkommastellen nicht mehr ändern.'
gefuehrt:
  - text: Wie groß sind $f(1)$ und $f'(1)$? Gib $f'(1)$ an.
    teil: { typ: zahl, loesung: "4" }
    erklaerung: '$f(1) = 1 + 1 - 1 = 1$ und $f''(1) = 3 + 1 = 4$.'
  - text: Berechne $x_1$.
    teil: { typ: zahl, loesung: "0.75" }
    erklaerung: '$x_1 = 1 - \frac14 = 0{,}75$.'
  - text: Berechne $x_2$ auf vier Nachkommastellen.
    teil: { typ: zahl, loesung: "0.686047", toleranz: 0.0001 }
    erklaerung: '$f(0{,}75) = 0{,}171875$ und $f''(0{,}75) = 2{,}6875$. Also $x_2 = 0{,}75 - 0{,}063953 \approx 0{,}6860$.'
  - text: Ein weiterer Schritt ergibt $x_3 \approx 0{,}68234$ und dann $x_4 \approx 0{,}68233$. Wie lautet die Nullstelle auf drei Nachkommastellen?
    teil: { typ: zahl, loesung: "0.682", toleranz: 0.0005 }
    erklaerung: 'Die ersten drei Nachkommastellen ändern sich nicht mehr. Die Nullstelle ist $x \approx 0{,}682$.'
loesung: |
  a) $f(0) = -1 < 0$ und $f(1) = 1 > 0$. Weil $f$ stetig ist, liegt dazwischen eine Nullstelle.
  ---
  b) $f'(x) = 3x^2 + 1$. $x_1 = 1 - \frac{1}{4} = 0{,}75$. Dann $x_2 = 0{,}75 - \frac{0{,}171875}{2{,}6875} \approx 0{,}6860$.
  ---
  c) $x_3 \approx 0{,}682340$, $x_4 \approx 0{,}682328$. Auf drei Nachkommastellen: $x \approx 0{,}682$. Probe: $f(0{,}682) \approx -0{,}0008$, also fast $0$.
```

```aufgabe
id: dr-newton-versagen
titel: Wenn das Newton-Verfahren nicht ankommt
niveau: 2
lernziel: 9
kompetenz: verstehen
angabe: |
  Für $f(x) = x^3 - 2x + 2$ wird das Newton-Verfahren mit $x_0 = 0$ gestartet.

  a) Berechne $x_1$ und $x_2$.

  b) Was folgt daraus?
teile:
  - typ: zahl
    label: 'a) $x_1$'
    loesung: "0 - 2/(-2)"
    anzeige: '1'
    fehler:
      - wert: "-1"
        meldung: 'Beachte das Vorzeichen von $f''(0) = -2$. Minus durch Minus: $0 - \frac{2}{-2} = 0 + 1$.'
  - typ: zahl
    label: 'a) $x_2$'
    loesung: "1 - 1/1"
    anzeige: '0'
    toleranz: 0.0001
    fehler:
      - wert: "1 - 1/(-2)"
        meldung: 'In $x_1 = 1$ brauchst du die neue Steigung $f''(1) = 3 - 2 = 1$, nicht $f''(0) = -2$.'
  - typ: auswahl
    label: 'b)'
    optionen:
      - 'Die Näherungen springen zwischen $0$ und $1$ hin und her und nähern sich keiner Nullstelle. Ein anderer Startwert ist nötig.'
      - 'Die Nullstelle liegt zwischen $0$ und $1$.'
      - 'Die Funktion hat keine Nullstelle.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$f(0) = 2$ und $f(1) = 1$ sind beide positiv. Dazwischen gibt es keinen Vorzeichenwechsel.'
      - wert: 2
        meldung: 'Jedes Polynom dritten Grades hat mindestens eine Nullstelle. Hier liegt sie bei etwa $-1{,}77$, weit weg vom Startwert.'
hinweise:
  - '$f''(x) = 3x^2 - 2$. Es ist $f(0) = 2$, $f''(0) = -2$, $f(1) = 1$, $f''(1) = 1$.'
  - Vergleiche $x_2$ mit $x_0$.
loesung: |
  Ansatz: Newton-Formel mit $f'(x) = 3x^2 - 2$.
  ---
  a) $x_1 = 0 - \frac{2}{-2} = 1$, $x_2 = 1 - \frac{1}{1} = 0$.
  ---
  b) $x_2 = x_0$, also wiederholt sich alles: $0, 1, 0, 1, \dots$ Das Verfahren kommt nie an. Die Nullstelle liegt bei etwa $-1{,}77$. Mit einem Startwert wie $x_0 = -2$ (dort ist $f(-2) = -2$, und $f(-1) = 3$) funktioniert es.
```

```aufgabe
id: dr-newton-begruenden
titel: Warum braucht das Verfahren eine Steigung ungleich null?
niveau: 2
lernziel: 9
kompetenz: begruenden
angabe: |
  Erkläre geometrisch und mit der Formel, warum das Newton-Verfahren abbricht, wenn $f'(x_n) = 0$ ist.
  Was passiert, wenn $f'(x_n)$ nicht null, aber sehr klein ist?
teile:
  - typ: text
    muster: |
      Geometrisch: Das Verfahren schneidet die Tangente in $x_n$ mit der $x$-Achse. Ist $f'(x_n) = 0$, ist die
      Tangente waagrecht und parallel zur $x$-Achse. Sie hat keinen Schnittpunkt mit ihr (außer wenn $f(x_n) = 0$
      schon gilt). Mit der Formel: In $x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$ müsste man durch $0$ teilen.
      Ist $f'(x_n)$ sehr klein, ist die Tangente fast waagrecht. Sie schneidet die Achse dann weit entfernt,
      die Korrektur $\frac{f(x_n)}{f'(x_n)}$ wird riesig, und $x_{n+1}$ springt weit weg, oft zu einer ganz
      anderen Nullstelle oder ins Leere.
hinweise:
  - Was macht das Verfahren mit der Tangente in $x_n$?
  - Wie groß wird ein Bruch, wenn der Nenner sehr klein ist?
loesung: |
  Ansatz: Jeder Newton-Schritt ist der Schnitt der Tangente mit der $x$-Achse.
  ---
  Bei $f'(x_n) = 0$ ist die Tangente waagrecht und schneidet die $x$-Achse nicht. In der Formel stünde eine Division durch $0$.
  ---
  Bei sehr kleinem $f'(x_n)$ ist die Tangente fast waagrecht. Ihr Schnitt mit der Achse liegt weit weg, und das Verfahren springt unkontrolliert. Deshalb wählt man Startwerte nicht in der Nähe von Extremstellen.
```

```aufgabe
id: dr-newton-schnittpunkt
titel: Schnittpunkt zweier Kurven numerisch bestimmen
niveau: 3
lernziel: 9
kompetenz: anwenden
angabe: |
  Die Graphen von $g(x) = e^x$ und $h(x) = 3 - x$ schneiden sich in genau einem Punkt.

  a) Stelle eine Funktion $f$ auf, deren Nullstelle die $x$-Koordinate des Schnittpunkts ist.

  b) Berechne mit dem Newton-Verfahren und $x_0 = 1$ die Näherungen $x_1$ und $x_2$ (auf vier Nachkommastellen).

  c) Gib den Schnittpunkt auf vier Nachkommastellen an.
teile:
  - typ: term
    label: 'a) $f(x) = $'
    loesung: "e^x + x - 3"
    fehler:
      - wert: "e^x - x + 3"
        meldung: 'Beim Abziehen von $h(x) = 3 - x$ ändern sich **beide** Vorzeichen: $e^x - (3 - x) = e^x + x - 3$.'
  - typ: zahl
    label: 'b) $x_1$'
    loesung: "1 - (e + 1 - 3)/(e + 1)"
    anzeige: '0{,}8068'
    toleranz: 0.0001
  - typ: zahl
    label: 'b) $x_2$'
    loesung: "0.8068242641 - (e^0.8068242641 + 0.8068242641 - 3)/(e^0.8068242641 + 1)"
    anzeige: '0{,}7921'
    toleranz: 0.0001
  - typ: zahl
    label: 'c) $x$-Koordinate'
    loesung: "0.7920599684"
    anzeige: '0{,}7921'
    toleranz: 0.0001
  - typ: zahl
    label: 'c) $y$-Koordinate'
    loesung: "3 - 0.7920599684"
    anzeige: '2{,}2079'
    toleranz: 0.0001
hinweise:
  - 'Schnittpunkt heißt $g(x) = h(x)$, also $e^x - (3 - x) = 0$.'
  - '$f''(x) = e^x + 1$. Die $y$-Koordinate erhältst du durch Einsetzen in $h$ oder $g$.'
loesung: |
  a) Schnittpunkt heißt $e^x = 3 - x$. Alles auf eine Seite: $f(x) = e^x + x - 3 = 0$.
  ---
  b) $f'(x) = e^x + 1$. $x_1 = 1 - \frac{e - 2}{e + 1} = 1 - \frac{0{,}71828}{3{,}71828} \approx 0{,}8068$.
  ---
  $x_2 = 0{,}8068 - \frac{f(0{,}8068)}{f'(0{,}8068)} \approx 0{,}7921$. Ein weiterer Schritt ergibt $x_3 \approx 0{,}79206$, die vierte Nachkommastelle ändert sich nicht mehr.
  ---
  c) Schnittpunkt $S(0{,}7921 \mid 2{,}2079)$, denn $h(0{,}7921) = 3 - 0{,}7921 = 2{,}2079$. Probe: $e^{0{,}7921} \approx 2{,}2080$.
```

## Gemischte Wiederholung

Hier sind Aufgaben aus diesem und aus früheren Kapiteln bunt gemischt. Das ist Absicht. In der
Prüfung steht nicht dabei, welches Verfahren gefragt ist. Du musst es selbst erkennen. Die ersten
beiden Aufgaben verlangen deshalb nur die Wahl des Verfahrens, ohne Rechnung.

```aufgabe
id: dr-wh-verfahren-tangente
titel: 'Welches Verfahren passt? Tangenten und Steigungen'
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Ordne jeder Frage zu $f(x) = x^3 - x$ den passenden ersten Rechenschritt zu. Du musst nichts ausrechnen.

  a) An welchen Stellen ist die Tangente parallel zur Geraden $y = 2x + 7$?

  b) Wie lautet die Tangente an der Stelle $x_0 = 2$?

  c) Welche Tangenten gehen durch den Punkt $Q(0 \mid 2)$, der nicht auf dem Graphen liegt?
teile:
  - typ: auswahl
    label: 'a)'
    optionen: ['$f''(x) = 2$ lösen', '$f(2)$ und $f''(2)$ berechnen', 'Tangente an einer unbekannten Stelle $u$ aufstellen und $Q$ einsetzen', '$f(x) = 2x + 7$ lösen']
    richtig: [0]
    fehler:
      - wert: 3
        meldung: '$f(x) = 2x + 7$ liefert Schnittpunkte von Graph und Gerade. Parallel heißt aber **gleiche Steigung**.'
  - typ: auswahl
    label: 'b)'
    optionen: ['$f''(x) = 2$ lösen', '$f(2)$ und $f''(2)$ berechnen', 'Tangente an einer unbekannten Stelle $u$ aufstellen und $Q$ einsetzen', '$f(x) = 2x + 7$ lösen']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Hier ist die Berührstelle $2$ bekannt. Du brauchst Höhe $f(2)$ und Steigung $f''(2)$.'
  - typ: auswahl
    label: 'c)'
    optionen: ['$f''(x) = 2$ lösen', '$f(2)$ und $f''(2)$ berechnen', 'Tangente an einer unbekannten Stelle $u$ aufstellen und $Q$ einsetzen', '$f(x) = 2x + 7$ lösen']
    richtig: [2]
    fehler:
      - wert: 1
        meldung: '$Q$ liegt nicht auf dem Graphen. Die Berührstelle ist unbekannt.'
hinweise:
  - Frag dich jedes Mal, ob die Berührstelle bekannt ist oder eine Eigenschaft der Tangente.
loesung: |
  a) Vorgegeben ist die Steigung $2$, gesucht die Stelle: $f'(x) = 2$ lösen.
  ---
  b) Die Stelle ist bekannt: Punkt-Steigungs-Form mit $f(2)$ und $f'(2)$.
  ---
  c) Der Punkt liegt außerhalb: Berührstelle $u$ als Unbekannte, Tangente in $u$ aufstellen, $Q$ einsetzen, nach $u$ lösen. Siehe [9.9 Tangente und Normale aufstellen](/lernen/mathe3/differentialrechnung/tangente-und-normale-aufstellen).
```

```aufgabe
id: dr-wh-verfahren-optimieren
titel: 'Welches Verfahren passt? Extrema, Wendestellen, Nullstellen'
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  Welches Verfahren beantwortet die Frage? Du musst nichts ausrechnen.

  a) Bei welcher Zeit wächst eine Population $N(t)$ am schnellsten?

  b) Welche Lösung hat die Gleichung $e^x = 4 - x^2$ mit $x > 0$?

  c) Welches Rechteck mit $60$ m Umfang hat die größte Fläche?
teile:
  - typ: auswahl
    label: 'a)'
    optionen: ['$N''(t) = 0$ lösen', '$N''''(t) = 0$ lösen (Wendestelle von $N$)', 'Newton-Verfahren', 'Hauptbedingung und Nebenbedingung aufstellen']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: '$N''(t) = 0$ liefert Stellen, an denen $N$ gar nicht wächst. „Am schnellsten“ heißt: $N''$ ist maximal, also $N''''(t) = 0$.'
  - typ: auswahl
    label: 'b)'
    optionen: ['$N''(t) = 0$ lösen', '$N''''(t) = 0$ lösen (Wendestelle von $N$)', 'Newton-Verfahren', 'Hauptbedingung und Nebenbedingung aufstellen']
    richtig: [2]
    fehler:
      - wert: 3
        meldung: 'Hier wird nichts optimiert. Die Gleichung lässt sich nicht nach $x$ auflösen, also braucht man ein Näherungsverfahren.'
  - typ: auswahl
    label: 'c)'
    optionen: ['$N''(t) = 0$ lösen', '$N''''(t) = 0$ lösen (Wendestelle von $N$)', 'Newton-Verfahren', 'Hauptbedingung und Nebenbedingung aufstellen']
    richtig: [3]
    fehler:
      - wert: 2
        meldung: 'Das ist eine Extremwertaufgabe. Zuerst braucht man eine Zielfunktion in einer Variablen.'
hinweise:
  - '„Am schnellsten“ betrifft die Änderungsrate. „Größte Fläche“ ist eine Optimierung. Eine Gleichung ohne Lösungsformel braucht ein Näherungsverfahren.'
loesung: |
  a) Die Wachstumsgeschwindigkeit $N'$ soll maximal sein, also Wendestelle von $N$: $N''(t) = 0$.
  ---
  b) $e^x + x^2 - 4 = 0$ hat keine Lösungsformel. Newton-Verfahren mit $f(x) = e^x + x^2 - 4$.
  ---
  c) Extremwertaufgabe: $A = x\cdot y$ mit $2x + 2y = 60$. Das ergibt ein Quadrat mit $15$ m Seite.
```

```aufgabe
id: dr-wh-prozent-faktor
titel: Preissteigerung über mehrere Jahre
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Ein Preis steigt drei Jahre lang um jeweils $4\,\%$ pro Jahr. Um wie viel Prozent ist er insgesamt gestiegen (auf zwei Nachkommastellen)?
  (Wiederholung aus [Kapitel 1, „Prozentrechnung“](/lernen/mathe3/zahlen))
teile:
  - typ: zahl
    label: 'Gesamtzunahme'
    einheit: "%"
    loesung: "(1.04^3 - 1)*100"
    anzeige: '12{,}49'
    toleranz: 0.01
    fehler:
      - wert: "12"
        meldung: 'Prozente addiert man nicht. Jede Erhöhung bezieht sich auf den schon erhöhten Preis. Die Faktoren werden multipliziert: $1{,}04^3$.'
hinweise:
  - 'Der Änderungsfaktor für ein Jahr ist $1{,}04$.'
loesung: |
  Faktor für drei Jahre: $1{,}04\cdot 1{,}04\cdot 1{,}04 = 1{,}04^3 \approx 1{,}1249$.
  ---
  Gesamtzunahme $1{,}1249 - 1 = 0{,}1249$, also etwa $12{,}49\,\%$. Etwas mehr als $3\cdot 4\,\% = 12\,\%$, weil auch die Erhöhungen mitwachsen.
```

```aufgabe
id: dr-wh-quadratisch-extrema
titel: Extremstellen mit der Lösungsformel
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Bestimme die Extremstellen von $f(x) = \frac13 x^3 - \frac12 x^2 - 6x$.
  (Wiederholung der quadratischen Gleichungen aus [Kapitel 2](/lernen/mathe3/gleichungen))
teile:
  - typ: menge
    label: 'Extremstellen'
    loesung: ["3", "-2"]
    fehler:
      - wert: ["-3", "2"]
        meldung: 'Vorzeichenfehler in der Lösungsformel. Für $x^2 - x - 6 = 0$ ist $p = -1$, also $-\frac p2 = +\frac12$.'
hinweise:
  - '$f''(x) = x^2 - x - 6$. Löse $f''(x) = 0$.'
loesung: |
  $f'(x) = x^2 - x - 6 = 0$. Kleine Lösungsformel: $x = \frac12 \pm \sqrt{\frac14 + 6} = \frac12 \pm \frac52$, also $x = 3$ oder $x = -2$.
  ---
  $f''(x) = 2x - 1$: $f''(3) = 5 > 0$ (Tiefpunkt), $f''(-2) = -5 < 0$ (Hochpunkt). Beide Stellen sind Extremstellen.
```

```aufgabe
id: dr-wh-exponential
titel: Verdopplungszeit und Wachstumsgeschwindigkeit
niveau: 2
lernziel: 8
kompetenz: anwenden
angabe: |
  Eine Bakterienkultur wächst nach $N(t) = 500\,e^{0{,}2t}$ ($t$ in Stunden).

  a) Nach welcher Zeit hat sich die Kultur verdoppelt (auf zwei Nachkommastellen)?

  b) Wie schnell wächst sie zu diesem Zeitpunkt (Bakterien pro Stunde)?

  (Wiederholung aus [Kapitel 4, „Wachstums- und Zerfallsmodelle“](/lernen/mathe3/funktionen))
teile:
  - typ: zahl
    label: 'a) Verdopplungszeit'
    einheit: h
    loesung: "ln(2)/0.2"
    anzeige: '3{,}47'
    toleranz: 0.01
    fehler:
      - wert: "2/0.2"
        meldung: 'Aus $e^{0{,}2t} = 2$ folgt $0{,}2t = \ln 2$, nicht $0{,}2t = 2$. Logarithmiere beide Seiten.'
  - typ: zahl
    label: 'b) $N''$ zu diesem Zeitpunkt'
    einheit: Bakterien/h
    loesung: "0.2*1000"
    anzeige: '200'
    fehler:
      - wert: "1000"
        meldung: '$1000$ ist der Bestand zu diesem Zeitpunkt. Die Wachstumsgeschwindigkeit ist $N'' = 0{,}2\cdot N$.'
hinweise:
  - 'a) $500\,e^{0{,}2t} = 1000$, also $e^{0{,}2t} = 2$.'
  - 'b) $N''(t) = 0{,}2\cdot N(t)$. Zum Verdopplungszeitpunkt ist $N = 1000$.'
loesung: |
  a) $e^{0{,}2t} = 2$, logarithmieren: $0{,}2t = \ln 2$, also $t = \frac{\ln 2}{0{,}2} \approx 3{,}47$ h.
  ---
  b) Kettenregel: $N'(t) = 100\,e^{0{,}2t} = 0{,}2\cdot N(t)$. Bei $N = 1000$ ist $N' = 200$ Bakterien pro Stunde.
  ---
  Deutung: Die Kultur wächst dann doppelt so schnell wie am Anfang, denn $N'(0) = 100$.
```

```aufgabe
id: dr-wh-trigonometrie
titel: Steigung in Prozent und Ableitung des Sinus
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  a) Eine Straße hat $12\,\%$ Steigung. Unter welchem Winkel steigt sie an (in Grad, auf zwei Nachkommastellen)?

  b) Wie groß ist die Steigung von $f(x) = 2\sin(3x)$ an der Stelle $x = \frac{\pi}{9}$?

  (Wiederholung aus [Kapitel 5, „Steigung, Höhenwinkel und Vermessung“](/lernen/mathe3/trigonometrie))
teile:
  - typ: zahl
    label: 'a) Steigungswinkel'
    einheit: "°"
    loesung: "inGrad(atan(0.12))"
    anzeige: '6{,}84'
    toleranz: 0.01
    fehler:
      - wert: "12"
        meldung: 'Prozent ist kein Winkel. $12\,\%$ heißt $\tan\alpha = 0{,}12$.'
  - typ: zahl
    label: 'b) $f''(\pi/9)$'
    loesung: "6*cos(pi/3)"
    anzeige: '3'
    fehler:
      - wert: "2*cos(pi/3)"
        meldung: 'Die innere Ableitung $3$ fehlt: $f''(x) = 2\cdot 3\cos(3x)$.'
hinweise:
  - 'a) $\tan\alpha = 0{,}12$. b) Kettenregel, dann $3\cdot\frac{\pi}{9} = \frac{\pi}{3}$.'
loesung: |
  a) $\alpha = \arctan 0{,}12 \approx 6{,}84°$.
  ---
  b) $f'(x) = 6\cos(3x)$, also $f'(\frac{\pi}{9}) = 6\cos\frac{\pi}{3} = 6\cdot\frac12 = 3$.
```

```aufgabe
id: dr-wh-lgs-steckbrief
titel: Parabel durch drei Punkte
niveau: 2
lernziel: 6
kompetenz: modellieren
angabe: |
  Eine Parabel $f(x) = ax^2 + bx + c$ geht durch $(0 \mid 1)$, $(1 \mid 0)$ und $(2 \mid 3)$.

  a) Bestimme $a$, $b$, $c$.

  b) Wie groß ist die Steigung der Parabel an der Stelle $1$?

  (Wiederholung der linearen Gleichungssysteme aus [Kapitel 3](/lernen/mathe3/lgs-matrizen))
teile:
  - typ: vektor
    label: 'a) Koeffizienten'
    namen: ["a", "b", "c"]
    loesung: ["2", "-3", "1"]
    fehler:
      - wert: ["2", "3", "1"]
        meldung: 'Prüfe mit dem Punkt $(1 \mid 0)$: $2 + 3 + 1 \neq 0$. Das Vorzeichen von $b$ stimmt nicht.'
  - typ: zahl
    label: 'b) $f''(1)$'
    loesung: "4 - 3"
    anzeige: '1'
    fehler:
      - wert: "0"
        meldung: '$0$ ist der Funktionswert $f(1)$. Die Steigung ist $f''(1) = 2a + b$.'
hinweise:
  - 'Jeder Punkt liefert eine Gleichung: $c = 1$, $a + b + c = 0$, $4a + 2b + c = 3$.'
loesung: |
  Gleichungen: $c = 1$, $a + b + 1 = 0$ und $4a + 2b + 1 = 3$.
  ---
  Aus der zweiten: $b = -1 - a$. Eingesetzt in die dritte: $4a - 2 - 2a = 2$, also $a = 2$ und $b = -3$. Damit $f(x) = 2x^2 - 3x + 1$.
  ---
  $f'(x) = 4x - 3$, also $f'(1) = 1$. Probe: $f(2) = 8 - 6 + 1 = 3$.
```

```aufgabe
id: dr-wh-ableiten-gemischt
titel: Produkt mit e-Funktion und Sinus
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Leite $f(x) = e^{-x}\sin x$ ab und bestimme die kleinste positive Stelle mit waagrechter Tangente.
teile:
  - typ: term
    label: '$f''(x)$'
    loesung: "e^(-x)*(cos(x) - sin(x))"
    fehler:
      - wert: "e^(-x)*(cos(x) + sin(x))"
        meldung: 'Die Ableitung von $e^{-x}$ ist $-e^{-x}$ (innere Ableitung $-1$). Dadurch entsteht ein Minus vor $\sin x$.'
  - typ: zahl
    label: 'kleinste positive Stelle mit $f''(x) = 0$'
    loesung: "pi/4"
    anzeige: '\tfrac{\pi}{4}'
    fehler:
      - wert: "45"
        meldung: 'Gefragt ist das Bogenmaß: $45° = \frac{\pi}{4}$.'
hinweise:
  - 'Produktregel mit $u = e^{-x}$, $u'' = -e^{-x}$, $v = \sin x$, $v'' = \cos x$.'
  - '$e^{-x}$ ist nie null. Löse $\cos x = \sin x$.'
loesung: |
  Produktregel: $f'(x) = -e^{-x}\sin x + e^{-x}\cos x = e^{-x}(\cos x - \sin x)$.
  ---
  $f'(x) = 0$ verlangt $\cos x = \sin x$, also $\tan x = 1$. Kleinste positive Lösung $x = \frac{\pi}{4}$.
```

```aufgabe
id: dr-wh-schnittwinkel
titel: Schnittwinkel zweier Kurven
niveau: 3
lernziel: 4
kompetenz: anwenden
angabe: |
  Die Graphen von $f(x) = x^2$ und $g(x) = \sqrt x$ schneiden sich im Punkt $(1 \mid 1)$.
  Unter welchem Winkel schneiden sie sich dort (in Grad, auf zwei Nachkommastellen)? Der Schnittwinkel zweier Kurven ist der Winkel zwischen ihren Tangenten.
  (Wiederholung des Schnittwinkels zweier Geraden aus [Kapitel 7](/lernen/mathe3/analytische-geometrie))
teile:
  - typ: zahl
    label: 'Schnittwinkel'
    einheit: "°"
    loesung: "inGrad(atan(2)) - inGrad(atan(0.5))"
    anzeige: '36{,}87'
    toleranz: 0.01
    fehler:
      - wert: "inGrad(atan(2 - 0.5))"
        meldung: 'Man subtrahiert nicht die Steigungen, sondern die **Steigungswinkel**: $\arctan 2 - \arctan\frac12$.'
hinweise:
  - 'Steigungen in $(1 \mid 1)$: $f''(1) = 2$ und $g''(1) = \frac{1}{2\sqrt1} = \frac12$.'
  - 'Steigungswinkel mit $\arctan$, dann die Differenz bilden.'
loesung: |
  Ansatz: Der Schnittwinkel der Kurven ist der Winkel zwischen den Tangenten im Schnittpunkt.
  ---
  Steigungen: $f'(1) = 2$ und $g'(1) = \frac12$. Steigungswinkel: $\arctan 2 \approx 63{,}43°$ und $\arctan\frac12 \approx 26{,}57°$.
  ---
  Schnittwinkel: $63{,}43° - 26{,}57° \approx 36{,}87°$. Die beiden Kurven sind Spiegelbilder an der Geraden $y = x$, deshalb liegt der Winkel symmetrisch zu $45°$.
```

```aufgabe
id: dr-wh-graph-fstrich
titel: Vom Graphen der Ableitung zur Funktion
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  Der Graph von $f'$ ist eine nach oben offene Parabel mit den Nullstellen $-1$ und $4$. Welche Aussagen über $f$ sind richtig?
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$f$ hat bei $-1$ einen Hochpunkt.'
      - '$f$ hat bei $4$ einen Tiefpunkt.'
      - '$f$ fällt auf $(-1, 4)$.'
      - '$f$ hat bei $1{,}5$ eine Wendestelle.'
      - '$f$ hat bei $1{,}5$ einen Tiefpunkt.'
    richtig: [0, 1, 2, 3]
    fehler:
      - wert: [0, 1, 2, 4]
        meldung: 'Bei $1{,}5$ hat **$f''$** seinen Tiefpunkt. Für $f$ ist das eine Wendestelle: Dort fällt $f$ am steilsten.'
hinweise:
  - 'Nach oben offen heißt: $f'' > 0$ außerhalb von $[-1, 4]$, $f'' < 0$ dazwischen.'
loesung: |
  Vorzeichen von $f'$: positiv für $x < -1$, negativ zwischen $-1$ und $4$, positiv für $x > 4$.
  ---
  Bei $-1$ Wechsel $+$ nach $-$: Hochpunkt. Bei $4$ Wechsel $-$ nach $+$: Tiefpunkt. Dazwischen fällt $f$.
  ---
  Der Scheitel von $f'$ liegt bei $\frac{-1 + 4}{2} = 1{,}5$. Dort hat $f'$ ein Minimum, also hat $f$ eine Wendestelle. Alle Aussagen außer der letzten sind richtig.
```

## Prüfungsaufgaben

Diese Aufgaben haben das Format der schriftlichen Prüfung: mehrere Teilaufgaben, Anwendungsbezug und
Begründungen. Drei sind abgewandelte Varianten von Musterprüfungsaufgaben, die Originale rechnest du
in den Prüfungssimulationen. Rechne mit Stoppuhr, der Zeitrichtwert steht jeweils in der Angabe.
Schreib den Lösungsweg so auf wie in der Prüfung: Ansatz, Rechnung, Begründung, Antwortsatz.

```aufgabe
id: dr-pruefung-kurvendiskussion
titel: Kurvendiskussion eines Polynoms vierten Grades
niveau: 3
lernziel: 6
kompetenz: rechnen
punkte: 10
quelle: nach Musterprüfung Schranz-Kirlinger (24.2.2023), Aufgabe 3.1 (abgewandelt)
angabe: |
  *Zeitrichtwert: 25 Minuten.*

  Gib den Definitionsbereich der Polynomfunktion
  $$f(x) = 8 + 2x^2 - x^4$$
  an und untersuche die Funktion in Hinblick auf Nullstellen, Monotonie, lokale und globale Extremstellen sowie Wendestellen.
  Gib vorhandene Hoch-, Tief- und Wendepunkte an.

  *Hinweis:* Setze für die Berechnung der Nullstellen $u = x^2$.
teile:
  - typ: text
    label: 'Definitionsbereich und Symmetrie'
    muster: |
      $D = \R$, weil $f$ ein Polynom ist. Es kommen nur gerade Hochzahlen vor, also $f(-x) = f(x)$: Der Graph ist symmetrisch zur $y$-Achse.
  - typ: menge
    label: 'Nullstellen'
    loesung: ["-2", "2"]
    fehler:
      - wert: ["-2", "2", "-sqrt(2)", "sqrt(2)"]
        meldung: 'Die Lösung $u = -2$ führt auf $x^2 = -2$. Das hat keine reelle Lösung und muss verworfen werden.'
  - typ: term
    label: '$f''(x)$'
    loesung: "4*x - 4*x^3"
  - typ: menge
    label: 'Stellen der lokalen Maxima'
    loesung: ["-1", "1"]
  - typ: zahl
    label: 'Stelle des lokalen Minimums'
    loesung: "0"
  - typ: zahl
    label: 'globales Maximum (Funktionswert)'
    loesung: "8 + 2 - 1"
    anzeige: '9'
  - typ: menge
    label: 'Wendestellen'
    loesung: ["-1/sqrt(3)", "1/sqrt(3)"]
  - typ: zahl
    label: '$y$-Koordinate der Wendepunkte'
    loesung: "77/9"
    anzeige: '\tfrac{77}{9} \approx 8{,}556'
  - typ: auswahl
    label: 'Welche Aussagen sind richtig?'
    mehrfach: true
    optionen:
      - '$f$ ist auf $[0, 1]$ streng monoton wachsend.'
      - '$f$ ist auf $[-1, 1]$ streng monoton fallend.'
      - '$f$ hat ein globales Minimum bei $x = 0$.'
      - '$f$ hat kein globales Minimum.'
      - '$f$ ist auf $[1, \infty)$ streng monoton fallend.'
    richtig: [0, 3, 4]
    fehler:
      - wert: [0, 2, 4]
        meldung: 'Der Tiefpunkt $(0 \mid 8)$ ist nur lokal. Für große $|x|$ geht $f(x) \to -\infty$, zum Beispiel $f(3) = -55$.'
hinweise:
  - 'Mit $u = x^2$: $-u^2 + 2u + 8 = 0$. Verwirf negative Lösungen für $u$.'
  - '$f''(x) = 4x(1 - x)(1 + x)$. Bestimme das Vorzeichen auf den vier Teilintervallen.'
  - '$f''''(x) = 4 - 12x^2$. Was passiert mit $f(x)$ für $x \to \pm\infty$?'
loesung: |
  **Definitionsbereich:** $D = \R$ (Polynom). **Symmetrie:** $f(-x) = f(x)$, symmetrisch zur $y$-Achse.
  ---
  **Nullstellen:** Mit $u = x^2$: $-u^2 + 2u + 8 = 0$, also $u^2 - 2u - 8 = (u - 4)(u + 2) = 0$. $u = 4$ ergibt $x = \pm 2$. $u = -2$: $x^2 = -2$ hat keine reelle Lösung. Nullstellen $\pm 2$.
  ---
  **Ableitungen:** $f'(x) = 4x - 4x^3 = 4x(1 - x)(1 + x)$, $f''(x) = 4 - 12x^2$, $f'''(x) = -24x$.
  ---
  **Extrema:** $f'(x) = 0$ für $x \in \{-1, 0, 1\}$. $f''(0) = 4 > 0$: lokales Minimum, $T(0 \mid 8)$. $f''(\pm 1) = -8 < 0$: lokale Maxima, $H_{1,2}(\pm 1 \mid 9)$.
  ---
  **Monotonie:** Vorzeichen von $4x(1 - x)(1 + x)$ mit Teststellen $-2$, $-\frac12$, $\frac12$, $2$: $+$, $-$, $+$, $-$. Wachsend auf $(-\infty, -1]$ und $[0, 1]$, fallend auf $[-1, 0]$ und $[1, \infty)$.
  ---
  **Global:** Für $x \to \pm\infty$ dominiert $-x^4$, also $f(x) \to -\infty$. Kein globales Minimum, $T$ ist nur lokal. Die Hochpunkte sind globale Maxima mit Wert $9$. Wertebereich $(-\infty, 9]$.
  ---
  **Wendestellen:** $4 - 12x^2 = 0$ ergibt $x = \pm\frac{1}{\sqrt3} \approx \pm 0{,}577$, dort $f''' \neq 0$. $f\big(\pm\frac{1}{\sqrt3}\big) = 8 + \frac23 - \frac19 = \frac{77}{9}$. Wendepunkte $W_{1,2}\big(\pm\frac{\sqrt3}{3} \mid \frac{77}{9}\big)$.
  ---
  **Kontrolle:** Der Tiefpunkt bei $8$ liegt unter den Hochpunkten bei $9$, die Wendepunkte bei $8{,}56$ dazwischen.
```

```aufgabe
id: dr-pruefung-bremsen
titel: Ein Auto bremst im Ortsgebiet
niveau: 3
lernziel: 8
kompetenz: modellieren
punkte: 8
quelle: nach Musterprüfung Karigl, Aufgabe 4 (abgewandelt)
angabe: |
  *Zeitrichtwert: 20 Minuten.*

  Ein Auto fährt im Ortsgebiet mit $36$ km/h und bremst. Seine Geschwindigkeit $t$ Sekunden nach Bremsbeginn sei
  $$v(t) = c - 0{,}625\,t^2 \quad (v \text{ in m/s}).$$

  a) Bestimme die Konstante $c$ und skizziere die Geschwindigkeits-Zeit-Funktion. Wie lange dauert der Bremsvorgang? (Achte auf die Einheiten!)

  b) Bestimme die Beschleunigung $a(t)$ und ihren Wert am Ende des Bremsvorgangs. Wie groß ist die mittlere Beschleunigung während des Bremsens?

  c) Berechne den Bremsweg $s = \int_a^b v(t)\,\dd t$ mit passenden Grenzen (benötigt [Kapitel 10](/lernen/mathe3/integralrechnung)).
teile:
  - typ: zahl
    label: '$c$'
    einheit: m/s
    loesung: "36/3.6"
    anzeige: '10'
    fehler:
      - wert: "36"
        meldung: '$v$ wird in m/s angegeben. Rechne $36$ km/h zuerst um: durch $3{,}6$.'
  - typ: zahl
    label: 'Bremsdauer'
    einheit: s
    loesung: "sqrt(10/0.625)"
    anzeige: '4'
  - typ: term
    label: '$a(t)$'
    variable: t
    loesung: "-1.25*t"
    fehler:
      - wert: "-0.625*t"
        meldung: 'Die Hochzahl $2$ wandert als Faktor nach vorne: $(0{,}625\,t^2)'' = 1{,}25\,t$.'
  - typ: zahl
    label: '$a$ am Ende des Bremsvorgangs'
    einheit: m/s²
    loesung: "-1.25*4"
    anzeige: '-5'
  - typ: zahl
    label: 'mittlere Beschleunigung'
    einheit: m/s²
    loesung: "(0 - 10)/4"
    anzeige: '-2{,}5'
  - typ: zahl
    label: 'Bremsweg'
    einheit: m
    loesung: "10*4 - 0.625*4^3/3"
    anzeige: '\tfrac{80}{3} \approx 26{,}7'
    toleranz: 0.05
  - typ: text
    label: 'Skizze von $v(t)$'
    muster: |
      Nach unten geöffnetes Parabelstück von $(0 \mid 10)$ bis $(4 \mid 0)$, bei $t = 0$ waagrecht, dann immer steiler fallend.
      Das Modell gilt nur für $0 \le t \le 4$.
hinweise:
  - '$36$ km/h $: 3{,}6 = 10$ m/s. Zu Beginn ist $v(0) = c$. Stillstand heißt $v(t) = 0$.'
  - 'Mittlere Beschleunigung ist ein Differenzenquotient von $v$.'
  - 'Bremsweg: Fläche unter $v$ von $0$ bis zum Stillstand.'
loesung: |
  **a)** $36$ km/h $= 10$ m/s. Zu Bremsbeginn ist $v(0) = c$, also $c = 10$ und $v(t) = 10 - 0{,}625\,t^2$.
  ---
  Stillstand: $0{,}625\,t^2 = 10$, $t^2 = 16$, $t = 4$ s ($t = -4$ ist sinnlos). Skizze: Parabelstück von $(0 \mid 10)$ nach $(4 \mid 0)$.
  ---
  **b)** $a(t) = v'(t) = -1{,}25\,t$ (m/s²). Am Ende: $a(4) = -5$ m/s². Mittlere Beschleunigung: $\frac{v(4) - v(0)}{4 - 0} = \frac{-10}{4} = -2{,}5$ m/s².
  ---
  **c)** $s = \int_0^4 (10 - 0{,}625\,t^2)\,\dd t = \Big[10t - \frac{0{,}625\,t^3}{3}\Big]_0^4 = 40 - \frac{40}{3} = \frac{80}{3} \approx 26{,}7$ m.
  ---
  **Antwort:** Das Auto steht nach $4$ s und $26{,}7$ m. Die Verzögerung nimmt dabei von $0$ auf $5$ m/s² zu.
```

```aufgabe
id: dr-pruefung-winkler
titel: Eine Exponentialfunktion zur Basis 5
niveau: 3
lernziel: 3
kompetenz: rechnen
punkte: 8
quelle: nach Musterprüfung Winkler, Aufgabe 3 (abgewandelt)
angabe: |
  *Zeitrichtwert: 15 Minuten.*

  Gegeben ist die reelle Funktion $f(x) = \dfrac{5^x}{25}$, die nur positive Werte annimmt.

  a) Berechne die Funktionswerte an den Stellen $x = -1, 0, 1, 2, 3$.

  b) Für $c = 5^{1/2}$ gilt $c^2 = 5^{1/2}\cdot 5^{1/2} = 5$, wegen $c > 0$ also $c = \sqrt5$. Berechne damit $f\big(\tfrac12\big)^2$.

  c) Gib $f\big(\tfrac52\big)$ auf eine Nachkommastelle gerundet an.

  d) Wegen $5 = e^{\ln 5}$ kann man $f$ in der Form $f(x) = \alpha\,e^{\lambda x}$ schreiben. Bestimme $\alpha$ und $\lambda$.

  e) Wie lautet die Ableitung $f'$?
teile:
  - typ: vektor
    label: 'a) $f(-1), f(0), f(1), f(2), f(3)$'
    loesung: ["1/125", "1/25", "1/5", "1", "5"]
  - typ: zahl
    label: 'b) $f(\tfrac12)^2$'
    loesung: "(sqrt(5)/25)^2"
    anzeige: '\tfrac{1}{125}'
  - typ: zahl
    label: 'c) $f(\tfrac52)$, gerundet'
    loesung: "5^(5/2)/25"
    anzeige: '\sqrt5 \approx 2{,}2'
    toleranz: 0.05
  - typ: zahl
    label: 'd) $\alpha$'
    loesung: "1/25"
    anzeige: '\tfrac{1}{25}'
  - typ: zahl
    label: 'd) $\lambda$'
    loesung: "ln(5)"
    anzeige: '\ln 5 \approx 1{,}609'
    fehler:
      - wert: "5"
        meldung: 'Wegen $5 = e^{\ln 5}$ ist $5^x = e^{(\ln 5)\,x}$. Also ist $\lambda = \ln 5$, nicht die Basis selbst.'
  - typ: term
    label: 'e) $f''(x)$'
    loesung: "ln(5)/25 * 5^x"
    fehler:
      - wert: "x*5^(x-1)/25"
        meldung: 'Die Potenzregel gilt nicht, weil $x$ in der Hochzahl steht. Verwende die Darstellung aus d) und die Kettenregel.'
hinweise:
  - '$f(x) = 5^x : 25 = 5^{x - 2}$.'
  - '$f(\tfrac12) = \frac{\sqrt5}{25}$.'
  - '$5^x = \big(e^{\ln 5}\big)^x = e^{x\ln 5}$.'
loesung: |
  **a)** $f(x) = 5^{x - 2}$: $f(-1) = \frac{1}{125}$, $f(0) = \frac{1}{25}$, $f(1) = \frac15$, $f(2) = 1$, $f(3) = 5$. Jeder Schritt nach rechts verfünffacht den Wert.
  ---
  **b)** $f(\frac12) = \frac{\sqrt5}{25}$, also $f(\frac12)^2 = \frac{5}{625} = \frac{1}{125}$.
  ---
  **c)** $f(\frac52) = \frac{5^{5/2}}{25} = \frac{5^2\cdot 5^{1/2}}{25} = \sqrt5 \approx 2{,}2$.
  ---
  **d)** $5^x = e^{(\ln 5)\,x}$, also $f(x) = \frac{1}{25}\,e^{(\ln 5)\,x}$: $\alpha = \frac{1}{25}$, $\lambda = \ln 5 \approx 1{,}609$.
  ---
  **e)** Kettenregel mit innerer Ableitung $\lambda$: $f'(x) = \alpha\lambda\,e^{\lambda x} = \frac{\ln 5}{25}\cdot 5^x$.
  ---
  **Kontrolle:** $f'(x) = \ln 5\cdot f(x)$. Die Ableitung ist proportional zur Funktion, wie bei jeder Exponentialfunktion.
```

```aufgabe
id: dr-pruefung-tangentendreieck
titel: Kleinstes Tangentendreieck
niveau: 3
lernziel: 7
kompetenz: modellieren
punkte: 10
angabe: |
  *Zeitrichtwert: 25 Minuten.*

  Gegeben ist die Parabel $f(x) = 4 - x^2$. Für $u > 0$ schneidet die Tangente im Punkt $P(u \mid f(u))$ die Koordinatenachsen
  und bildet mit ihnen im ersten Quadranten ein Dreieck.

  a) Bestimme die Tangente für $u = 1$ und den Flächeninhalt des zugehörigen Dreiecks.

  b) Zeige, dass die Tangente in $P$ allgemein die Gleichung $y = -2ux + u^2 + 4$ hat, und stelle den Flächeninhalt $A(u)$ des Dreiecks auf.

  c) Für welches $u$ ist der Flächeninhalt minimal? Wie groß ist er dann?
teile:
  - typ: term
    label: 'a) Tangente für $u = 1$: $y = $'
    loesung: "-2*x + 5"
    fehler:
      - wert: "-2*x + 3"
        meldung: 'Die Tangente muss durch $P(1 \mid 3)$ gehen. $y = 3 - 2(x - 1)$ ergibt beim Ausmultiplizieren $-2x + 5$.'
  - typ: zahl
    label: 'a) Fläche für $u = 1$'
    loesung: "1/2 * 2.5 * 5"
    anzeige: '6{,}25'
  - typ: term
    label: 'b) $A(u)$'
    variable: u
    loesung: "(u^2 + 4)^2/(4*u)"
    bereich: [0.3, 4]
  - typ: zahl
    label: 'c) $u$ mit minimaler Fläche'
    loesung: "2/sqrt(3)"
    anzeige: '\tfrac{2}{\sqrt3} \approx 1{,}155'
  - typ: zahl
    label: 'c) minimale Fläche'
    loesung: "32*sqrt(3)/9"
    anzeige: '\tfrac{32\sqrt3}{9} \approx 6{,}158'
hinweise:
  - '$f''(u) = -2u$. Tangente: $y = f(u) + f''(u)(x - u)$.'
  - 'Achsenabschnitte: $y$-Achse bei $u^2 + 4$, $x$-Achse bei $\frac{u^2 + 4}{2u}$. Das Dreieck ist rechtwinklig.'
  - '$A''(u) = \dfrac{(u^2 + 4)(3u^2 - 4)}{4u^2}$.'
loesung: |
  **a)** $f(1) = 3$, $f'(1) = -2$, Tangente $y = 3 - 2(x - 1) = -2x + 5$. Achsenabschnitte $y = 5$ und $x = 2{,}5$. Fläche $\frac12\cdot 2{,}5\cdot 5 = 6{,}25$.
  ---
  **b)** $y = (4 - u^2) - 2u(x - u) = -2ux + 2u^2 + 4 - u^2 = -2ux + u^2 + 4$.
  Achsenabschnitte: Für $x = 0$ ist $y = u^2 + 4$, für $y = 0$ ist $x = \frac{u^2 + 4}{2u}$. Rechtwinkliges Dreieck:
  $$A(u) = \frac12\cdot\frac{u^2 + 4}{2u}\cdot(u^2 + 4) = \frac{(u^2 + 4)^2}{4u}, \qquad u > 0.$$
  ---
  **c)** Quotientenregel: $A'(u) = \dfrac{2(u^2 + 4)\cdot 2u\cdot 4u - (u^2 + 4)^2\cdot 4}{16u^2} = \dfrac{(u^2 + 4)(3u^2 - 4)}{4u^2}$.
  ---
  $A'(u) = 0$ ergibt $3u^2 = 4$, also $u = \frac{2}{\sqrt3} \approx 1{,}155$. Für kleinere $u$ ist $A' < 0$, für größere $A' > 0$: Minimum. Weil $A \to \infty$ für $u \to 0$ und $u \to \infty$, ist es sogar das globale Minimum.
  ---
  $A\big(\frac{2}{\sqrt3}\big) = \dfrac{\big(\frac43 + 4\big)^2}{\frac{8}{\sqrt3}} = \dfrac{256}{9}\cdot\dfrac{\sqrt3}{8} = \dfrac{32\sqrt3}{9} \approx 6{,}158$. Etwas kleiner als bei $u = 1$, das passt.
```

```aufgabe
id: dr-pruefung-gewinn
titel: Gewinnzone einer Produktion
niveau: 3
lernziel: 8
kompetenz: modellieren
punkte: 10
angabe: |
  *Zeitrichtwert: 25 Minuten.*

  Ein Betrieb stellt einen Rohstoff her. Für $x$ Tonnen betragen die Kosten
  $$K(x) = 0{,}1x^3 - 2{,}4x^2 + 24{,}5x + 100$$
  (in tausend Euro, $0 \le x \le 25$). Eine Tonne wird um $20$ tausend Euro verkauft.

  a) Bestimme die Fixkosten und die Grenzkosten bei $10$ Tonnen. Deute die Grenzkosten.

  b) Bei welcher Menge sind die Grenzkosten am kleinsten (Kostenkehre)?

  c) Stelle die Gewinnfunktion auf und bestimme die gewinnmaximale Menge und den größten Gewinn.

  d) Zeige, dass die Gewinnschwelle zwischen $10$ und $11$ Tonnen liegt, und berechne sie mit einem Newton-Schritt ab $x_0 = 10$ (auf zwei Nachkommastellen).
teile:
  - typ: zahl
    label: 'a) Fixkosten'
    einheit: tausend Euro
    loesung: "100"
  - typ: zahl
    label: 'a) $K''(10)$'
    einheit: tausend Euro/t
    loesung: "0.3*100 - 4.8*10 + 24.5"
    anzeige: '6{,}5'
    fehler:
      - wert: "100 - 240 + 245 + 100"
        meldung: 'Das sind die Gesamtkosten $K(10)$. Die Grenzkosten sind die Ableitung $K''(10)$.'
  - typ: zahl
    label: 'b) Kostenkehre bei'
    einheit: t
    loesung: "4.8/0.6"
    anzeige: '8'
  - typ: zahl
    label: 'c) gewinnmaximale Menge'
    einheit: t
    loesung: "15"
    fehler:
      - wert: "1"
        meldung: 'Bei $x = 1$ hat $G$ ebenfalls eine waagrechte Tangente, dort liegt aber das **Minimum** ($G''''(1) > 0$).'
  - typ: zahl
    label: 'c) größter Gewinn'
    einheit: tausend Euro
    loesung: "-0.1*15^3 + 2.4*15^2 - 4.5*15 - 100"
    anzeige: '35'
  - typ: zahl
    label: 'd) Gewinnschwelle nach einem Newton-Schritt'
    einheit: t
    loesung: "10 + 5/13.5"
    anzeige: '10{,}37'
    toleranz: 0.01
hinweise:
  - '$K''(x) = 0{,}3x^2 - 4{,}8x + 24{,}5$ und $K''''(x) = 0{,}6x - 4{,}8$.'
  - '$G(x) = 20x - K(x) = -0{,}1x^3 + 2{,}4x^2 - 4{,}5x - 100$, $G''(x) = -0{,}3x^2 + 4{,}8x - 4{,}5 = -0{,}3\,(x - 1)(x - 15)$.'
  - 'd) $G(10) = -5$ und $G(11) = 7{,}8$. Newton: $x_1 = x_0 - \frac{G(x_0)}{G''(x_0)}$.'
loesung: |
  **a)** Fixkosten $K(0) = 100$ tausend Euro. $K'(x) = 0{,}3x^2 - 4{,}8x + 24{,}5$, also $K'(10) = 30 - 48 + 24{,}5 = 6{,}5$. Die elfte Tonne kostet ungefähr $6{,}5$ tausend Euro zusätzlich.
  ---
  **b)** $K''(x) = 0{,}6x - 4{,}8 = 0$ ergibt $x = 8$. Wegen $K''' = 0{,}6 > 0$ sind die Grenzkosten dort minimal: Kostenkehre bei $8$ Tonnen.
  ---
  **c)** $G(x) = 20x - K(x) = -0{,}1x^3 + 2{,}4x^2 - 4{,}5x - 100$. $G'(x) = -0{,}3x^2 + 4{,}8x - 4{,}5 = 0$, durch $-0{,}3$ geteilt $x^2 - 16x + 15 = 0$, also $x = 1$ oder $x = 15$.
  ---
  $G''(x) = -0{,}6x + 4{,}8$: $G''(15) = -4{,}2 < 0$, also Maximum. $G(15) = -337{,}5 + 540 - 67{,}5 - 100 = 35$ tausend Euro. Randwerte: $G(0) = -100$ und $G(25) = -275$, also ist $35$ auch das globale Maximum.
  ---
  **d)** $G(10) = -100 + 240 - 45 - 100 = -5 < 0$ und $G(11) = 7{,}8 > 0$. Dazwischen liegt die Gewinnschwelle. $G'(10) = -30 + 48 - 4{,}5 = 13{,}5$. Newton: $x_1 = 10 - \frac{-5}{13{,}5} \approx 10{,}37$ Tonnen.
  ---
  **Antwort:** Ab etwa $10{,}4$ Tonnen arbeitet der Betrieb mit Gewinn. Am meisten verdient er bei $15$ Tonnen, nämlich $35\,000$ Euro.
```

```aufgabe
id: dr-pruefung-medikament
titel: Wirkstoffkonzentration im Blut
niveau: 3
lernziel: 6
kompetenz: modellieren
punkte: 10
angabe: |
  *Zeitrichtwert: 25 Minuten.*

  Nach der Einnahme einer Tablette wird die Konzentration eines Wirkstoffs im Blut durch
  $$c(t) = 8t\,e^{-0{,}5t}$$
  beschrieben ($t$ in Stunden nach der Einnahme, $c$ in Milligramm pro Liter, $t \ge 0$).

  a) Zeige, dass $c'(t) = (8 - 4t)\,e^{-0{,}5t}$ gilt.

  b) Wann ist die Konzentration am höchsten, und wie hoch ist sie dann (auf drei Nachkommastellen)?

  c) Zu welchem Zeitpunkt nimmt die Konzentration am stärksten ab? Wie groß ist die Abnahmerate dann (auf drei Nachkommastellen)?

  d) Deute $c'(1)$ im Sachzusammenhang.
teile:
  - typ: term
    label: 'a) $c''(t)$'
    variable: t
    loesung: "(8 - 4*t)*e^(-0.5*t)"
    bereich: [0, 6]
    fehler:
      - wert: "(8 - 8*t)*e^(-0.5*t)"
        meldung: 'Die innere Ableitung von $e^{-0{,}5t}$ ist $-0{,}5$. Also $8t\cdot(-0{,}5)\,e^{-0{,}5t} = -4t\,e^{-0{,}5t}$.'
  - typ: zahl
    label: 'b) Zeitpunkt der höchsten Konzentration'
    einheit: h
    loesung: "2"
  - typ: zahl
    label: 'b) höchste Konzentration'
    einheit: mg/l
    loesung: "16*e^(-1)"
    anzeige: '\tfrac{16}{e} \approx 5{,}886'
    toleranz: 0.001
  - typ: zahl
    label: 'c) Zeitpunkt der stärksten Abnahme'
    einheit: h
    loesung: "4"
    fehler:
      - wert: "2"
        meldung: 'Bei $t = 2$ ändert sich die Konzentration gar nicht. Die stärkste Abnahme liegt an der Wendestelle von $c$, also bei $c''''(t) = 0$.'
  - typ: zahl
    label: 'c) Abnahmerate'
    einheit: mg/(l·h)
    loesung: "-8*e^(-2)"
    anzeige: '-1{,}083'
    toleranz: 0.001
  - typ: text
    label: 'd) Deutung von $c''(1)$'
    muster: |
      $c'(1) = 4\,e^{-0{,}5} \approx 2{,}43$. Eine Stunde nach der Einnahme steigt die Konzentration um etwa
      $2{,}43$ Milligramm pro Liter und Stunde.
hinweise:
  - 'Produktregel mit $u = 8t$ und $v = e^{-0{,}5t}$, $v'' = -0{,}5\,e^{-0{,}5t}$.'
  - '$c''''(t) = (2t - 8)\,e^{-0{,}5t}$. Die stärkste Abnahme liegt dort, wo $c''$ am kleinsten ist.'
loesung: |
  **a)** Produktregel: $c'(t) = 8\,e^{-0{,}5t} + 8t\cdot(-0{,}5)\,e^{-0{,}5t} = (8 - 4t)\,e^{-0{,}5t}$.
  ---
  **b)** $e^{-0{,}5t} > 0$, also $c'(t) = 0$ genau für $8 - 4t = 0$, $t = 2$. Für $t < 2$ ist $c' > 0$, für $t > 2$ ist $c' < 0$: Maximum. $c(2) = 16\,e^{-1} \approx 5{,}886$ mg/l.
  ---
  **c)** $c''(t) = -4\,e^{-0{,}5t} + (8 - 4t)(-0{,}5)\,e^{-0{,}5t} = (2t - 8)\,e^{-0{,}5t}$. Null bei $t = 4$, dort wechselt $c''$ von $-$ nach $+$. Also hat $c'$ bei $t = 4$ ein Minimum.
  ---
  $c'(4) = (8 - 16)\,e^{-2} = -8\,e^{-2} \approx -1{,}083$ mg pro Liter und Stunde. Vier Stunden nach der Einnahme sinkt die Konzentration am schnellsten.
  ---
  **d)** $c'(1) = 4\,e^{-0{,}5} \approx 2{,}43$: Eine Stunde nach der Einnahme steigt die Konzentration momentan um etwa $2{,}43$ mg/l pro Stunde.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, ohne nachzusehen. Vergleiche danach mit der Zusammenfassung darunter.
antwort: |
  Eine mögliche Auswahl: (1) Die Ableitung $f'(x_0)$ ist der Grenzwert der Differenzenquotienten,
  also die momentane Änderungsrate und die Steigung der Tangente. (2) Mit Potenz-, Faktor-, Summen-,
  Produkt-, Quotienten- und Kettenregel lässt sich jede Funktion aus den Grundfunktionen ableiten.
  (3) Das Vorzeichen von $f'$ entscheidet über Steigen und Fallen, das von $f''$ über die Krümmung.
  Damit findet man Extrema, Wendepunkte und Optima in Anwendungen.
```

:::zusammenfassung
1. **Änderungsmaße:** absolute Änderung $f(b) - f(a)$, relative Änderung $\frac{f(b) - f(a)}{f(a)}$, Änderungsfaktor $\frac{f(b)}{f(a)}$ und mittlere Änderungsrate $\frac{f(b) - f(a)}{b - a}$, die Steigung der Sekante.
2. **Ableitung:** $f'(x_0) = \lim\limits_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h}$ ist die momentane Änderungsrate und die Steigung der Tangente. Erst kürzen, dann $h \to 0$. Differenzierbar heißt auch stetig, aber nicht umgekehrt.
3. **Regeln:** $(x^r)' = r\,x^{r-1}$, $(e^x)' = e^x$, $(\ln x)' = \frac1x$, $(\sin x)' = \cos x$, $(\cos x)' = -\sin x$; Produktregel $u'v + uv'$, Quotientenregel $\frac{u'v - uv'}{v^2}$, Kettenregel „äußere mal innere Ableitung“.
4. **Tangente und Näherung:** $y = f(x_0) + f'(x_0)(x - x_0)$. In der Nähe von $x_0$ gilt $f(x_0 + \Delta x) \approx f(x_0) + f'(x_0)\,\Delta x$, damit schätzt man Messfehler ab.
5. **Kurvenverlauf:** $f' > 0$ heißt steigend, $f'' > 0$ heißt linksgekrümmt. $f'(x_0) = 0$ ist für ein Extremum nur notwendig; hinreichend ist ein Vorzeichenwechsel von $f'$ oder $f''(x_0) \neq 0$. Wendestellen sind Extremstellen von $f'$.
6. **Optimieren:** Hauptbedingung, Nebenbedingung, Zielfunktion in einer Variablen, Definitionsbereich, Ableitung null, **Randwerte vergleichen**, Antwortsatz.
7. **Anwendungen:** $v = s'$, $a = v' = s''$, $N' = kN$ bei exponentiellem Wachstum, Grenzkosten $K'$, im Gewinnmaximum Grenzerlös gleich Grenzkosten.
8. **Newton-Verfahren:** $x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$, sehr schnell bei gutem Startwert, versagt bei $f'(x_n) = 0$ oder schlechtem Startwert.
:::

### Die häufigsten Fehler

1. **Prozente auf den neuen statt auf den alten Wert bezogen.** Trainiert in [9.1 Änderungen messen: absolute, relative und mittlere Änderung](/lernen/mathe3/differentialrechnung/aenderungen-messen-absolute-relative-und-mittlere-aenderung), Aufgabe „Prozent hinauf und hinunter“.
2. **Bei der h-Methode zu früh $h = 0$ eingesetzt** und $\frac00$ erhalten. Trainiert in [9.2 Von der Sekante zur Tangente](/lernen/mathe3/differentialrechnung/von-der-sekante-zur-tangente-die-ableitung-an-einer-stelle), Aufgaben „Was der Differenzenquotient bedeutet“ und „h-Methode Schritt für Schritt“.
3. **Erst eingesetzt, dann abgeleitet:** $(f(3))' = 0$ statt $f'(3)$. Trainiert in [9.3 Die Ableitungsfunktion](/lernen/mathe3/differentialrechnung/die-ableitungsfunktion-die-steigung-an-jeder-stelle), Aufgabe „Ein typischer Fehler beim Einsetzen“.
4. **Höhe und Steigung verwechselt**, also Nullstellen von $f$ mit Nullstellen von $f'$. Trainiert in [9.4 Graphisch differenzieren](/lernen/mathe3/differentialrechnung/graphisch-differenzieren-vom-graphen-von-f-zum-graphen-von-f-und-zurueck), Aufgabe „Steigung an markierten Punkten“.
5. **Potenzregel auf $e^x$ oder $a^x$ angewendet** oder Konstanten wie $\ln 5$ abgeleitet. Trainiert in [9.5 Grundregeln](/lernen/mathe3/differentialrechnung/grundregeln-potenz-faktor-und-summenregel-und-die-wichtigsten-ableitungen), Aufgabe „Konstante oder Funktion?“.
6. **Produkt der Ableitungen statt Produktregel**, Reihenfolge in der Quotientenregel vertauscht. Trainiert in [9.6 Produktregel und Quotientenregel](/lernen/mathe3/differentialrechnung/produktregel-und-quotientenregel), Aufgaben „Produktregel anwenden“ und „Quotientenregel anwenden“.
7. **Innere Ableitung vergessen**, zum Beispiel $(e^{3x})' = e^{3x}$. Trainiert in [9.7 Kettenregel und höhere Ableitungen](/lernen/mathe3/differentialrechnung/kettenregel-hoehere-ableitungen-und-die-wahl-der-richtigen-regel), Aufgabe „Kettenregel mit linearer innerer Funktion“.
8. **In der Tangentengleichung $f'(x_0)$ statt $f(x_0)$ als Höhe eingesetzt**, bei der Normale $-k$ statt $-\frac1k$. Trainiert in [9.9 Tangente und Normale aufstellen](/lernen/mathe3/differentialrechnung/tangente-und-normale-aufstellen), Aufgabe „Fehler in einer Tangentengleichung finden“.
9. **$y$-Koordinate eines Extrempunkts mit $f'$ berechnet** oder $f''(x_0) = 0$ für einen Wendepunkt gehalten. Trainiert in [9.11 Monotonie und Extremstellen](/lernen/mathe3/differentialrechnung/monotonie-und-extremstellen) und [9.12 Krümmung und Wendepunkte](/lernen/mathe3/differentialrechnung/kruemmung-und-wendepunkte).
10. **Randwerte und Definitionsbereich vergessen**, zum Beispiel ein negatives Schachtelvolumen. Trainiert in [9.14 Extremwertaufgaben](/lernen/mathe3/differentialrechnung/extremwertaufgaben-das-beste-unter-vielen-moeglichkeiten-finden), Aufgaben „Optimum am Rand des Definitionsbereichs“ und „Welche Lösung ist die richtige?“.
11. **km/h und m/s vermischt.** Trainiert in [9.15 Bewegung und Wachstum](/lernen/mathe3/differentialrechnung/anwendungen-in-physik-und-biologie-bewegung-und-wachstum), Aufgabe „Ein Auto bremst aus 54 km/h“.
12. **Erlösmaximum für Gewinnmaximum gehalten.** Trainiert in [9.16 Kosten, Erlös und Gewinn](/lernen/mathe3/differentialrechnung/anwendungen-in-der-wirtschaft-kosten-erloes-und-gewinn), Aufgabe „Maximaler Erlös ist nicht maximaler Gewinn“.

### Lernziel-Selbstcheck

Schätze für jedes Lernziel ein, wie sicher du bist: **1** = noch unsicher, **2** = mit Hilfe, **3** = sicher
ohne Hilfe. Bei einer 1 oder 2 wiederholst du die genannte Lektion und rechnest dort die Aufgaben auf Niveau 3.

- Änderungsmaße berechnen und deuten: [9.1 Änderungen messen: absolute, relative und mittlere Änderung](/lernen/mathe3/differentialrechnung/aenderungen-messen-absolute-relative-und-mittlere-aenderung).
- Ableitung als Grenzwert, h-Methode: [9.2 Von der Sekante zur Tangente](/lernen/mathe3/differentialrechnung/von-der-sekante-zur-tangente-die-ableitung-an-einer-stelle) und [9.3 Die Ableitungsfunktion](/lernen/mathe3/differentialrechnung/die-ableitungsfunktion-die-steigung-an-jeder-stelle).
- Graph von $f$ und Graph von $f'$ ineinander übersetzen: [9.4 Graphisch differenzieren](/lernen/mathe3/differentialrechnung/graphisch-differenzieren-vom-graphen-von-f-zum-graphen-von-f-und-zurueck).
- Ableitungsregeln sicher anwenden: [9.5 Grundregeln](/lernen/mathe3/differentialrechnung/grundregeln-potenz-faktor-und-summenregel-und-die-wichtigsten-ableitungen), [9.6 Produktregel und Quotientenregel](/lernen/mathe3/differentialrechnung/produktregel-und-quotientenregel), [9.7 Kettenregel und höhere Ableitungen](/lernen/mathe3/differentialrechnung/kettenregel-hoehere-ableitungen-und-die-wahl-der-richtigen-regel).
- Tangente, Normale, Linearisierung: [9.9 Tangente und Normale aufstellen](/lernen/mathe3/differentialrechnung/tangente-und-normale-aufstellen) und [9.10 Linearisierung und Fehlerfortpflanzung](/lernen/mathe3/differentialrechnung/die-tangente-als-naeherung-linearisierung-und-fehlerfortpflanzung).
- Monotonie, Extrema, Krümmung: [9.11 Monotonie und Extremstellen](/lernen/mathe3/differentialrechnung/monotonie-und-extremstellen) und [9.12 Krümmung und Wendepunkte](/lernen/mathe3/differentialrechnung/kruemmung-und-wendepunkte).
- Kurvendiskussion und Steckbriefaufgaben: [9.13 Die vollständige Kurvendiskussion](/lernen/mathe3/differentialrechnung/die-vollstaendige-kurvendiskussion).
- Extremwertaufgaben: [9.14 Extremwertaufgaben](/lernen/mathe3/differentialrechnung/extremwertaufgaben-das-beste-unter-vielen-moeglichkeiten-finden).
- Anwendungen in Physik, Biologie und Wirtschaft: [9.15 Bewegung und Wachstum](/lernen/mathe3/differentialrechnung/anwendungen-in-physik-und-biologie-bewegung-und-wachstum) und [9.16 Kosten, Erlös und Gewinn](/lernen/mathe3/differentialrechnung/anwendungen-in-der-wirtschaft-kosten-erloes-und-gewinn).
- Newton-Verfahren: [9.17 Das Newton-Verfahren](/lernen/mathe3/differentialrechnung/das-newton-verfahren-gleichungen-naeherungsweise-loesen).

## Mündliche Prüfung

```karten
- id: dr-k-aenderungsmasse
  frage: Welche Maße für eine Änderung gibt es, und was unterscheidet sie?
  antwort: |
    Die absolute Änderung $f(b) - f(a)$ sagt, um wie viel sich eine Größe geändert hat, mit Einheit. Die relative
    Änderung $\frac{f(b) - f(a)}{f(a)}$ bezieht das auf den Anfangswert, oft in Prozent. Der Änderungsfaktor
    $\frac{f(b)}{f(a)}$ ist $1$ plus relative Änderung. Die mittlere Änderungsrate $\frac{f(b) - f(a)}{b - a}$ ist die
    Änderung pro Einheit von $x$ und geometrisch die Steigung der Sekante.
  kernpunkte: ["absolute Änderung mit Einheit", "relative Änderung bezogen auf den Anfangswert", "Faktor = 1 + relative Änderung", "mittlere Änderungsrate = Sekantensteigung"]
- id: dr-k-ableitung
  frage: Was ist die Ableitung f′(x₀), und was bedeutet sie geometrisch?
  antwort: |
    $f'(x_0)$ ist der Grenzwert der Differenzenquotienten $\frac{f(x_0 + h) - f(x_0)}{h}$ für $h \to 0$, falls er
    existiert. Sie ist die momentane Änderungsrate von $f$ an der Stelle $x_0$. Geometrisch ist sie die Steigung
    der Tangente im Punkt $(x_0 \mid f(x_0))$, also die Grenzlage der Sekantensteigungen.
  kernpunkte: ["Grenzwert des Differenzenquotienten", "momentane Änderungsrate", "Steigung der Tangente als Grenzlage der Sekanten"]
- id: dr-k-h-null
  frage: Warum darf man bei der h-Methode nicht einfach h = 0 einsetzen?
  antwort: |
    Weil dann $\frac00$ entsteht, und das ist keine Zahl. Man formt den Differenzenquotienten zuerst für $h \neq 0$
    um, bis sich $h$ kürzen lässt. Erst danach fragt man, welcher Zahl sich der Ausdruck nähert, wenn $h$ gegen $0$
    geht. „Gegen null gehen“ ist etwas anderes als „gleich null sein“.
  kernpunkte: ["0/0 ist nicht definiert", "erst kürzen, dann h gegen 0", "Grenzwert statt Einsetzen"]
- id: dr-k-stetig-diff
  frage: Wie hängen Stetigkeit und Differenzierbarkeit zusammen? Nenne ein Gegenbeispiel.
  antwort: |
    Ist $f$ an einer Stelle differenzierbar, dann ist $f$ dort auch stetig. Die Umkehrung ist falsch: $f(x) = |x|$
    ist bei $0$ stetig, hat dort aber einen Knick. Die Sekantensteigungen sind von rechts $1$ und von links $-1$, es
    gibt keinen gemeinsamen Grenzwert. Die exakte Behandlung steht in Kapitel 13.
  kernpunkte: ["differenzierbar heißt auch stetig", "Umkehrung falsch", "Gegenbeispiel |x| bei 0, Knick", "Verbindung zu Kapitel 12 und 13"]
- id: dr-k-graph-fstrich
  frage: Was kann man am Graphen von f′ über den Graphen von f ablesen?
  antwort: |
    Wo $f'$ über der $x$-Achse liegt, steigt $f$, wo es darunter liegt, fällt $f$. Ein Vorzeichenwechsel von $+$ nach
    $-$ bei einer Nullstelle von $f'$ ist ein Hochpunkt von $f$, von $-$ nach $+$ ein Tiefpunkt. Berührt $f'$ die Achse
    nur, ist es ein Sattelpunkt. Extremstellen von $f'$ sind Wendestellen von $f$. Die Höhe von $f$ verrät $f'$ nicht.
  kernpunkte: ["Vorzeichen von f′ = Steigen/Fallen", "Vorzeichenwechsel = Extremum", "Extremum von f′ = Wendestelle von f", "Höhe von f nicht ablesbar"]
- id: dr-k-regeln
  frage: Wie lauten Produkt-, Quotienten- und Kettenregel?
  antwort: |
    Produktregel $(uv)' = u'v + uv'$. Quotientenregel $\left(\frac uv\right)' = \frac{u'v - uv'}{v^2}$ für $v \neq 0$,
    „Nenner mal Ableitung des Zählers minus Zähler mal Ableitung des Nenners, durch Nenner zum Quadrat“.
    Kettenregel $\big(f(g(x))\big)' = f'(g(x))\cdot g'(x)$, äußere Ableitung an der Stelle der inneren Funktion mal innere Ableitung.
  kernpunkte: ["Produktregel mit zwei Summanden", "Quotientenregel, Reihenfolge im Zähler", "Kettenregel: äußere mal innere Ableitung"]
- id: dr-k-ax
  frage: Warum ist die Ableitung von aˣ gleich aˣ · ln a?
  antwort: |
    Wegen $a = e^{\ln a}$ ist $a^x = e^{x\ln a}$. Das ist eine Verkettung mit der inneren Funktion $x\ln a$ und der
    inneren Ableitung $\ln a$. Die Kettenregel liefert $(a^x)' = e^{x\ln a}\cdot\ln a = a^x\ln a$. Für $a = e$ ist
    $\ln e = 1$, deshalb ist $e^x$ seine eigene Ableitung. Die Umrechnung auf die Basis $e$ kennt man aus Kapitel 1 und 4.
  kernpunkte: ["a = e^(ln a)", "Kettenregel mit innerer Ableitung ln a", "Sonderfall e^x", "Verbindung zu Kapitel 4"]
- id: dr-k-tangente
  frage: Wie stellt man Tangente und Normale auf, und wie die Tangente durch einen Punkt außerhalb des Graphen?
  antwort: |
    Tangente: $y = f(x_0) + f'(x_0)(x - x_0)$. Normale: Steigung $-\frac{1}{f'(x_0)}$ durch denselben Punkt, weil
    senkrechte Geraden Steigungen mit Produkt $-1$ haben. Liegt der Punkt $Q$ nicht auf dem Graphen, nennt man die
    Berührstelle $u$, stellt die Tangente in $u$ allgemein auf, setzt $Q$ ein und löst nach $u$.
  kernpunkte: ["Punkt-Steigungs-Form", "Normale mit negativem Kehrwert", "äußerer Punkt: unbekannte Berührstelle u"]
- id: dr-k-linearisierung
  frage: Was ist die Linearisierung, und wozu verwendet man sie?
  antwort: |
    In der Nähe von $x_0$ ersetzt man $f$ durch die Tangente: $f(x_0 + \Delta x) \approx f(x_0) + f'(x_0)\,\Delta x$.
    Damit berechnet man Näherungswerte, etwa $\sqrt{4{,}1} \approx 2{,}025$, und schätzt Messfehler ab:
    $\Delta f \approx |f'(x_0)|\,\Delta x$. Bei Potenzen $x^n$ wird der relative Fehler mit $|n|$ multipliziert. Die
    Näherung ist nur für kleine $\Delta x$ gut.
  kernpunkte: ["Tangente als Näherung", "Fehlerfortpflanzung mit f′", "relativer Fehler bei Potenzen mal n", "nur für kleine Δx"]
- id: dr-k-extremum
  frage: Was ist die notwendige, was eine hinreichende Bedingung für ein lokales Extremum? Warum reicht die notwendige nicht?
  antwort: |
    Notwendig ist $f'(x_0) = 0$, an einer inneren Stelle, an der $f$ differenzierbar ist. Hinreichend ist ein
    Vorzeichenwechsel von $f'$ bei $x_0$ oder $f'(x_0) = 0$ zusammen mit $f''(x_0) \neq 0$. Die notwendige Bedingung reicht
    nicht: $x^3$ hat $f'(0) = 0$, aber bei $0$ einen Sattelpunkt und kein Extremum.
  kernpunkte: ["notwendig f′(x₀) = 0", "hinreichend: Vorzeichenwechsel oder f″ ≠ 0", "Gegenbeispiel x³"]
- id: dr-k-lokal-global
  frage: Was ist der Unterschied zwischen einem lokalen und einem globalen Extremum?
  antwort: |
    Ein lokales Maximum ist der größte Wert in einer kleinen Umgebung der Stelle, ein globales der größte auf dem
    ganzen Definitionsbereich. Bei $f(x) = -x^4 + 4x^2 + 5$ ist $(0 \mid 5)$ ein lokales Minimum, aber kein globales,
    weil $f$ gegen $-\infty$ geht. Auf abgeschlossenen Intervallen muss man zusätzlich die Randwerte vergleichen.
  kernpunkte: ["lokal: in einer Umgebung", "global: auf ganz D", "Beispiel ohne globales Minimum", "Randwerte prüfen"]
- id: dr-k-kruemmung
  frage: Was beschreibt die zweite Ableitung, und was ist ein Wendepunkt?
  antwort: |
    $f''$ ist die Änderungsrate der Steigung. $f'' > 0$ heißt linksgekrümmt, $f'' < 0$ rechtsgekrümmt. Ein Wendepunkt
    ist ein Punkt, an dem die Krümmung wechselt; notwendig ist $f''(x_0) = 0$, hinreichend zusätzlich $f'''(x_0) \neq 0$
    oder ein Vorzeichenwechsel von $f''$. An einer Wendestelle hat die Steigung $f'$ einen Hoch- oder Tiefpunkt. Ein Wendepunkt mit
    waagrechter Tangente heißt Sattelpunkt. Bei Weg-Zeit-Funktionen ist $s''$ die Beschleunigung.
  kernpunkte: ["f″ = Änderung der Steigung", "Vorzeichen von f″ = Krümmungsrichtung", "Wendepunkt: Krümmungswechsel, x⁴ als Gegenbeispiel", "Sattelpunkt"]
- id: dr-k-kurvendiskussion
  frage: Wie gehst du bei einer Kurvendiskussion vor?
  antwort: |
    Definitionsbereich, Symmetrie, Nullstellen und $y$-Achsenabschnitt, Ableitungen, Extrema mit Begründung,
    Monotonie aus dem Vorzeichen von $f'$, Wendepunkte und Krümmung, Verhalten am Rand von $D$, globale Extrema und
    Wertebereich, Skizze zur Kontrolle. Bei biquadratischen Polynomen substituiert man $u = x^2$ und verwirft negative $u$.
  kernpunkte: ["feste Reihenfolge der Schritte", "jede Art begründen", "lokal und global unterscheiden", "Skizze als Kontrolle"]
- id: dr-k-extremwert
  frage: Wie löst man eine Extremwertaufgabe, und warum muss man die Ränder prüfen?
  antwort: |
    Skizze, Hauptbedingung für die zu optimierende Größe, Nebenbedingung, daraus eine Zielfunktion in einer Variablen,
    Definitionsbereich aus der Sachsituation, Ableitung null setzen, Art prüfen, Randwerte vergleichen, Antwortsatz.
    Die Bedingung $f'(x) = 0$ findet nur Extrema im Inneren. Setzt die Sache eine Grenze, etwa eine kurze Mauer,
    kann das Optimum genau am Rand liegen.
  kernpunkte: ["Haupt- und Nebenbedingung", "Zielfunktion in einer Variablen", "Definitionsbereich", "Randwerte vergleichen"]
- id: dr-k-anwendungen
  frage: Was bedeuten die Ableitungen von Weg, Bestand und Kosten?
  antwort: |
    $s'(t)$ ist die Momentangeschwindigkeit, $s''(t)$ die Beschleunigung. $N'(t)$ ist die Wachstumsgeschwindigkeit;
    bei exponentiellem Wachstum gilt $N' = kN$, das Wachstum ist proportional zum Bestand. $K'(x)$ sind die Grenzkosten,
    ungefähr die Kosten des nächsten Stücks. Im Gewinnmaximum ist der Grenzerlös gleich den Grenzkosten.
  kernpunkte: ["v = s′, a = s″", "N′ = kN", "Grenzkosten ≈ Kosten des nächsten Stücks", "Gewinnmaximum: E′ = K′"]
- id: dr-k-newton
  frage: Erkläre das Newton-Verfahren. Wann versagt es?
  antwort: |
    Man ersetzt $f$ in der Nähe eines Schätzwerts $x_n$ durch die Tangente und nimmt deren Nullstelle als neue Näherung:
    $x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$. Bei gutem Startwert verdoppelt sich die Zahl der richtigen Stellen
    ungefähr mit jedem Schritt. Es versagt, wenn $f'(x_n) = 0$ oder sehr klein ist oder der Startwert zu weit weg liegt.
    Einen Startwert findet man mit dem Nullstellensatz aus Kapitel 12.
  kernpunkte: ["Tangente statt Kurve", "Iterationsformel", "schnelle Konvergenz bei gutem Start", "Versagen bei f′ = 0 oder schlechtem Start"]
```
