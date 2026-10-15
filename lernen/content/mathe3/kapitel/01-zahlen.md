---
nummer: 1
titel: Zahlen und Terme
kurz: Rechenregeln, Mengen und Aussagen, die Zahlenmengen N, Z, Q und R, Teilbarkeit, Brüche, Prozente, Irrationalität und Beweise, Potenzen, Wurzeln, Logarithmen, Termumformungen, Ungleichungen, Betrag, Runden und Zahlensysteme.
teil: A
stunden: 18
pruefungsgewicht: 2
lernziele:
  - Ausdrücke mit Vorzeichen, Klammern, Potenzen und Bruchstrichen in der richtigen Reihenfolge ausrechnen und dabei das Kommutativ-, Assoziativ- und Distributivgesetz benennen und anwenden
  - Mengen- und Logikzeichen (∈, ⊂, ∪, ∩, ∖, ⇒, ⇔, ∀, ∃) lesen, Mengen verknüpfen, Aussagen verneinen und einfache Beweise direkt, durch Kontraposition oder durch Widerspruch führen, insbesondere den Beweis, dass √2 irrational ist
  - die Zahlenmengen N, Z, Q und R beschreiben, ihre Abgeschlossenheit bezüglich der vier Grundrechnungsarten mit Begründung oder Gegenbeispiel entscheiden, periodische Dezimalzahlen in Brüche umwandeln und rationale von irrationalen Zahlen unterscheiden
  - natürliche Zahlen in Primfaktoren zerlegen, ggT und kgV bestimmen, Teilbarkeitsregeln anwenden und Zahlen zwischen Dezimal-, Binär- und Hexadezimalsystem umrechnen
  - Brüche kürzen, erweitern, addieren, subtrahieren, multiplizieren und dividieren und Doppelbrüche vereinfachen
  - Prozentaufgaben mit Änderungsfaktoren lösen (auch mehrere Änderungen und Rückrechnen), Prozent und Prozentpunkte unterscheiden, Ergebnisse sinnvoll runden und Zahlen in Zehnerpotenzen schreiben
  - Potenzen mit ganzen und rationalen Hochzahlen und Wurzeln mit den Rechengesetzen vereinfachen, teilweise die Wurzel ziehen und Nenner rational machen
  - Logarithmen über die Definition berechnen, die Logarithmengesetze anwenden, die Basis wechseln und Exponentialterme auf die Basis e umschreiben
  - Terme ausmultiplizieren, mit binomischen Formeln, Herausheben und quadratischer Ergänzung umformen und faktorisieren sowie Bruchterme mit Definitionsmenge kürzen und zusammenfassen
  - Ungleichungen regelgerecht umformen, Beträge als Abstand deuten und berechnen und Lösungsmengen als Intervalle und Umgebungen angeben
---

Dieses Kapitel ist das Fundament für alles, was danach kommt. Hier lernst du die Werkzeuge, mit denen du in
jedem späteren Kapitel rechnest: Brüche, Prozente, Potenzen, Wurzeln, Logarithmen, Klammern auflösen und Terme
vereinfachen. Wir fangen ganz vorne an. Du musst dich an nichts aus der Schule erinnern, außer an das Einmaleins
und an schriftliches Rechnen mit ganzen Zahlen.

**Was kommt in der Prüfung?** In der schriftlichen Prüfung gibt es selten eine Aufgabe, die nur nach diesem Stoff
fragt. Trotzdem scheitern sehr viele Aufgaben genau hier. Typische Stolpersteine sind ein falsch aufgelöster
Doppelbruch, die Rechnung $\sqrt{a^2} = a$ ohne Betrag oder ein Logarithmusgesetz, das es gar nicht gibt. Direkt
abgefragt wird der Stoff auch: In einer Musterprüfung ist eine ganze Aufgabe den Zahlenmengen gewidmet. Dort
fragt man, welche Grundrechnungsarten in welcher Zahlenmenge immer möglich sind, und ob $\pi$ ein Bruch ist.
Eine andere Musterprüfung beginnt mit einer Ankreuzfrage, welche Terme gleich einer Zahl $a$ sind.

In der **mündlichen Prüfung** zählt vor allem die Begründung. Typische Fragen sind:

- „Warum kann man in den ganzen Zahlen nicht immer dividieren?“
- „Wie beweist man, dass $\sqrt2$ kein Bruch ist?“
- „Warum ist $\log(a + b)$ nicht dasselbe wie $\log a + \log b$?“

Auf jede dieser Fragen bekommst du hier eine Antwort, die du in ganzen Sätzen vortragen kannst.

**Wie dieses Kapitel aufgebaut ist:** Zuerst wiederholen wir die Grundrechenarten und die Sprache der Mathematik,
also Mengen und Aussagen. Dann bauen wir die Zahlen Schritt für Schritt auf: natürliche Zahlen, ganze Zahlen,
Brüche, Dezimalzahlen und schließlich die reellen Zahlen. Danach kommen die Rechenwerkzeuge: Potenzen, Wurzeln,
Logarithmen, Termumformungen, Ungleichungen und Beträge. Am Ende stehen Runden und, als Vertiefung, das
Binärsystem. Lies die Lektionen in dieser Reihenfolge, denn jede baut auf den vorigen auf.

:::vorwissen
Für dieses Kapitel brauchst du nur:

- das **Einmaleins** und schriftliches Addieren, Subtrahieren, Multiplizieren und Dividieren ganzer Zahlen.
- eine ungefähre Vorstellung von **Brüchen** wie „ein halber Kuchen“ oder „drei Viertel“.

Alles andere wird hier aufgebaut. Die folgende Eingangsdiagnose zeigt dir, wo du schon sicher bist. Jede Frage
nennt die Lektion, in der das Thema erklärt wird. Wenn du danebenliegst, ist das kein Problem: Genau dafür gibt
es diese Lektion. Wenn du alles richtig hast, kannst du die ersten Lektionen zügiger lesen.
:::

:::anwendung
Du wirst diese Werkzeuge überall brauchen. In der Informatik rechnet man mit Zweierpotenzen und Logarithmen
(wie viele Bit braucht eine Zahl?), in der Physik mit Zehnerpotenzen und Einheiten, in der Wirtschaft mit
Prozenten und Zinsen. Und in jedem Mathematikkapitel dieses Kurses formst du Terme um.
:::

### Eingangsdiagnose

```aufgabe
id: za-diag-punkt-vor-strich
titel: Punkt vor Strich
niveau: 1
art: check
angabe: |
  Berechne $3 + 4\cdot 5$.
  Hier wird es erklärt: [1.1 Grundrechenarten](/lernen/mathe3/zahlen/grundrechenarten-vorzeichen-klammern-und-rechenreihenfolge).
teile:
  - typ: zahl
    label: '$3 + 4\cdot 5 =$'
    loesung: "3 + 4*5"
    fehler:
      - wert: "35"
        meldung: |
          Du hast von links nach rechts gerechnet: erst $3 + 4 = 7$, dann $7\cdot 5$. Mal und geteilt
          („Punktrechnung“) kommen aber vor plus und minus („Strichrechnung“).
hinweise:
  - Welche Rechnung kommt zuerst, das Malnehmen oder das Addieren?
loesung: |
  Punktrechnung vor Strichrechnung: Zuerst wird multipliziert, $4\cdot 5 = 20$.
  ---
  Dann wird addiert: $3 + 20 = 23$.
```

```aufgabe
id: za-diag-vorzeichen
titel: Minus mal minus
niveau: 1
art: check
angabe: |
  Berechne $(-3)\cdot(-4)$.
  Hier wird es erklärt: [1.1 Grundrechenarten](/lernen/mathe3/zahlen/grundrechenarten-vorzeichen-klammern-und-rechenreihenfolge).
teile:
  - typ: zahl
    label: '$(-3)\cdot(-4) =$'
    loesung: "(-3)*(-4)"
    fehler:
      - wert: "-12"
        meldung: |
          Der Betrag $12$ stimmt, das Vorzeichen nicht. Das Produkt zweier negativer Zahlen ist positiv.
      - wert: "-7"
        meldung: 'Hier wird multipliziert, nicht addiert. $3\cdot 4 = 12$, dann kommt das Vorzeichen dazu.'
hinweise:
  - Welches Vorzeichen hat ein Produkt aus zwei negativen Zahlen?
loesung: |
  Zuerst die Beträge multiplizieren: $3\cdot 4 = 12$.
  ---
  Zwei negative Faktoren ergeben ein positives Produkt. Also $(-3)\cdot(-4) = 12$.
```

```aufgabe
id: za-diag-dezimal-bruch
titel: Eine Kommazahl als Bruch
niveau: 1
art: check
angabe: |
  Welcher Bruch ist gleich $0{,}25$?
  Hier wird es erklärt: [1.5 Bruchrechnen](/lernen/mathe3/zahlen/bruchrechnen).
teile:
  - typ: auswahl
    optionen:
      - '$\tfrac14$'
      - '$\tfrac{1}{25}$'
      - '$\tfrac25$'
      - '$\tfrac{25}{10}$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$\tfrac{1}{25} = 0{,}04$. Die Ziffern nach dem Komma bedeuten Hundertstel: $0{,}25 = \tfrac{25}{100}$.'
      - wert: 2
        meldung: '$\tfrac25 = 0{,}4$. Schreib $0{,}25$ zuerst als Hundertstel und kürze dann.'
      - wert: 3
        meldung: '$\tfrac{25}{10} = 2{,}5$, also zehnmal zu groß. Zwei Nachkommastellen bedeuten Hundertstel.'
hinweise:
  - 'Zwei Stellen nach dem Komma sind Hundertstel: $0{,}25 = \tfrac{25}{100}$. Kann man das kürzen?'
loesung: |
  Zwei Nachkommastellen bedeuten Hundertstel: $0{,}25 = \tfrac{25}{100}$.
  ---
  Zähler und Nenner durch $25$ teilen: $\tfrac{25}{100} = \tfrac14$.
```

```aufgabe
id: za-diag-bruch-addieren
titel: Zwei Brüche addieren
niveau: 1
art: check
angabe: |
  Berechne $\dfrac12 + \dfrac13$.
  Hier wird es erklärt: [1.5 Bruchrechnen](/lernen/mathe3/zahlen/bruchrechnen).
teile:
  - typ: zahl
    label: '$\tfrac12 + \tfrac13 =$'
    loesung: "1/2 + 1/3"
    anzeige: '\tfrac56'
    fehler:
      - wert: "2/5"
        meldung: |
          Du hast Zähler plus Zähler und Nenner plus Nenner gerechnet. So addiert man Brüche nicht:
          Ein halber plus ein drittel Kuchen ist mehr als ein halber Kuchen, aber $\tfrac25$ ist weniger.
hinweise:
  - 'Bring beide Brüche zuerst auf denselben Nenner, zum Beispiel Sechstel.'
loesung: |
  Gemeinsamer Nenner $6$: $\tfrac12 = \tfrac36$ und $\tfrac13 = \tfrac26$.
  ---
  Gleichnamige Brüche addiert man über die Zähler: $\tfrac36 + \tfrac26 = \tfrac56$.
```

```aufgabe
id: za-diag-prozent
titel: Zehn Prozent
niveau: 1
art: check
angabe: |
  Wie viel sind $10\,\%$ von $250$?
  Hier wird es erklärt: [1.6 Prozentrechnung](/lernen/mathe3/zahlen/prozentrechnung).
teile:
  - typ: zahl
    loesung: "250*10/100"
    fehler:
      - wert: "2500"
        meldung: 'Du hast mit $10$ multipliziert. Prozent heißt „von Hundert“: $10\,\% = \tfrac{10}{100}$.'
      - wert: "2.5"
        meldung: 'Du hast durch $100$ geteilt, aber das Malnehmen mit $10$ vergessen. $1\,\%$ von $250$ ist $2{,}5$.'
hinweise:
  - '$10\,\%$ ist ein Zehntel.'
loesung: |
  $10\,\%$ bedeutet $\tfrac{10}{100} = \tfrac{1}{10}$, also ein Zehntel.
  ---
  Ein Zehntel von $250$ ist $250 : 10 = 25$.
```

```aufgabe
id: za-diag-quadrat
titel: Eine Zahl quadrieren
niveau: 1
art: check
angabe: |
  Was bedeutet $7^2$, und welchen Wert hat es?
  Hier wird es erklärt: [1.9 Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln).
teile:
  - typ: zahl
    label: '$7^2 =$'
    loesung: "7^2"
    fehler:
      - wert: "14"
        meldung: '$7^2$ ist nicht $7\cdot 2$. Die kleine $2$ sagt, wie oft die $7$ als **Faktor** vorkommt.'
      - wert: "9"
        meldung: '$7^2$ ist nicht $7 + 2$. Die hochgestellte $2$ bedeutet „zweimal mit sich selbst malnehmen“.'
hinweise:
  - 'Die hochgestellte Zahl sagt, wie oft die Grundzahl mit sich selbst multipliziert wird.'
loesung: |
  $7^2$ heißt „sieben mal sieben“.
  ---
  $7\cdot 7 = 49$.
```

```aufgabe
id: za-diag-negativ-vergleichen
titel: Welche Zahl ist größer?
niveau: 1
art: check
angabe: |
  Welche der beiden Zahlen ist größer: $-5$ oder $-2$?
  Hier wird es erklärt: [1.14 Ungleichungen und ihre Rechenregeln](/lernen/mathe3/zahlen/ungleichungen-und-ihre-rechenregeln).
teile:
  - typ: auswahl
    optionen:
      - '$-2$ ist größer.'
      - '$-5$ ist größer.'
      - 'Beide sind gleich groß.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          $5$ ist zwar größer als $2$, aber bei negativen Zahlen kehrt sich das um. Auf der Zahlengeraden liegt
          $-5$ weiter links als $-2$. Weiter links heißt kleiner.
      - wert: 2
        meldung: 'Die beiden Zahlen sind verschieden: $-5$ liegt fünf Schritte links von $0$, $-2$ nur zwei Schritte.'
hinweise:
  - 'Stell dir die Zahlengerade vor. Was weiter rechts liegt, ist größer.'
loesung: |
  Auf der Zahlengeraden liegt $-5$ fünf Schritte links von $0$, und $-2$ liegt zwei Schritte links von $0$.
  ---
  $-2$ liegt also weiter rechts und ist größer: $-5 < -2$. Bei Schulden ist es genauso: $2$ Euro Schulden sind weniger schlimm als $5$ Euro Schulden.
```

## Grundrechenarten: Vorzeichen, Klammern und Rechenreihenfolge

```aufgabe
id: za-check-links-nach-rechts
titel: Zweimal minus
niveau: 1
art: check
angabe: |
  Was ergibt $12 - 4 - 3$? Rechne so, wie du es aus der Schule im Gefühl hast.
teile:
  - typ: zahl
    loesung: "12 - 4 - 3"
    fehler:
      - wert: "11"
        meldung: |
          Du hast zuerst $4 - 3 = 1$ gerechnet und dann $12 - 1$. Gleichrangige Rechnungen ohne Klammern rechnet man
          aber **von links nach rechts**: zuerst $12 - 4$.
hinweise:
  - Beginne links und gehe Schritt für Schritt nach rechts.
loesung: |
  Von links nach rechts: $12 - 4 = 8$.
  ---
  Dann $8 - 3 = 5$. Die Regel dahinter lernst du in dieser Lektion.
```

Rechnen kannst du. Trotzdem lohnt sich ein genauer Blick auf die Regeln, nach denen man rechnet. In späteren
Kapiteln stehen in einer Zeile oft Klammern, Minuszeichen, Potenzen und Brüche gleichzeitig. Wer dort die
Reihenfolge verwechselt, bekommt ein falsches Ergebnis, obwohl jede einzelne Rechnung stimmt. In dieser Lektion
legen wir die Regeln einmal sauber fest: Vorzeichen, Rechenreihenfolge und die drei Rechengesetze.

### Die vier Grundrechenarten und ihre Namen

Die vier **Grundrechenarten** sind Addieren, Subtrahieren, Multiplizieren und Dividieren. Für die Zahlen und
Ergebnisse gibt es feste Namen. Du brauchst sie, weil Aufgaben und Regeln sie verwenden.

- **Addition** $7 + 3 = 10$: $7$ und $3$ heißen **Summanden**, das Ergebnis $10$ heißt **Summe**.
- **Subtraktion** $7 - 3 = 4$: Das Ergebnis $4$ heißt **Differenz**.
- **Multiplikation** $7\cdot 3 = 21$: $7$ und $3$ heißen **Faktoren**, das Ergebnis $21$ heißt **Produkt**.
- **Division** $21 : 3 = 7$: $21$ ist der **Dividend**, $3$ der **Divisor**, das Ergebnis $7$ heißt **Quotient**.

Statt $21 : 3$ schreibt man oft den Bruch $\tfrac{21}{3}$. Der **Bruchstrich** bedeutet also „geteilt durch“.
Der Malpunkt wird häufig weggelassen: $3x$ bedeutet $3\cdot x$, und $2(x + 1)$ bedeutet $2\cdot(x + 1)$.

### Negative Zahlen und Vorzeichen

Stell dir die Zahlen auf einer Geraden vor: rechts von $0$ die positiven Zahlen $1, 2, 3, \dots$, links von $0$
die negativen Zahlen $-1, -2, -3, \dots$. Negative Zahlen kennst du aus dem Alltag. Ein Kontostand von $-50$ Euro
bedeutet $50$ Euro Schulden, und $-5\,°\text{C}$ liegen fünf Grad unter dem Gefrierpunkt.

```plot
x: [-6.5, 6.5]
y: [-1, 1]
hoehe: 120
strecken:
  - { von: [-6, 0], nach: [6, 0] }
punkte:
  - { x: -5, y: 0, label: "−5", farbe: 1 }
  - { x: -2, y: 0, label: "−2", farbe: 1 }
  - { x: 0, y: 0, label: "0", farbe: 0 }
  - { x: 3, y: 0, label: "3", farbe: 2 }
  - { x: 5, y: 0, label: "5", farbe: 2 }
beschriftung: Die Zahlengerade. Positive Zahlen (grün) liegen rechts von 0, negative Zahlen (orange) links. Je weiter rechts eine Zahl liegt, desto größer ist sie. Darum ist −2 größer als −5.
```

**Addieren** heißt auf der Zahlengeraden nach rechts gehen, **Subtrahieren** nach links. So ist $-7 + 3 = -4$:
Von $-7$ gehst du drei Schritte nach rechts. Und $2 - 6 = -4$: Von $2$ gehst du sechs Schritte nach links.

Eine **negative Zahl abziehen** ist dasselbe wie die positive Zahl addieren: $5 - (-3) = 5 + 3 = 8$. Im Alltag:
Wenn dir jemand $3$ Euro Schulden erlässt, hast du danach $3$ Euro mehr.

Beim **Multiplizieren und Dividieren** gelten die Vorzeichenregeln:

- Gleiche Vorzeichen ergeben ein positives Ergebnis: $3\cdot 4 = 12$ und $(-3)\cdot(-4) = 12$.
- Verschiedene Vorzeichen ergeben ein negatives Ergebnis: $(-3)\cdot 4 = -12$ und $12 : (-4) = -3$.

Warum ist „minus mal minus“ plus? Betrachte die Reihe $3\cdot(-2) = -6$, $2\cdot(-2) = -4$, $1\cdot(-2) = -2$,
$0\cdot(-2) = 0$. Mit jedem Schritt wird der erste Faktor um $1$ kleiner, und das Ergebnis wächst um $2$. Setzt man
das Muster fort, folgt $(-1)\cdot(-2) = 2$ und $(-2)\cdot(-2) = 4$. Nur so bleibt das Muster erhalten, und nur so gilt das Distributivgesetz auch für negative Zahlen.

:::beispiel[Ein Kontostand]
Ein Konto steht auf $-80$ Euro. Es werden dreimal $25$ Euro abgebucht, danach werden $200$ Euro eingezahlt.

1. Drei Abbuchungen zu je $25$ Euro sind zusammen $3\cdot 25 = 75$ Euro. Abbuchen heißt abziehen.
2. Nach den Abbuchungen: $-80 - 75 = -155$. Von $-80$ gehst du $75$ Schritte nach links. Das Konto steht auf $-155$ Euro.
3. Nach der Einzahlung: $-155 + 200 = 45$. Das Konto steht auf $45$ Euro.

Als eine einzige Rechnung: $-80 - 3\cdot 25 + 200 = 45$ Euro.
:::

### Die Rechenreihenfolge

Wenn mehrere Rechenzeichen in einer Zeile stehen, braucht man eine feste Reihenfolge. Sonst könnte jeder etwas
anderes ausrechnen. Die Regel lautet:

:::merke[Rechenreihenfolge]
1. **Klammern** zuerst, von innen nach außen.
2. Dann **Potenzen** (zum Beispiel $4^2$, mehr dazu in [1.9 Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln)).
3. Dann **Punktrechnung**: Multiplizieren und Dividieren.
4. Zuletzt **Strichrechnung**: Addieren und Subtrahieren.
5. Gleichrangige Rechnungen ohne Klammer werden **von links nach rechts** ausgeführt.

Ein Bruchstrich wirkt wie eine Klammer um den ganzen Zähler und um den ganzen Nenner.
:::

:::beispiel[Schritt für Schritt]
Berechne $20 - 2\cdot(7 - 3)^2 : 8$.

1. Klammer: $7 - 3 = 4$. Es bleibt $20 - 2\cdot 4^2 : 8$.
2. Potenz: $4^2 = 16$. Es bleibt $20 - 2\cdot 16 : 8$.
3. Punktrechnung von links nach rechts: $2\cdot 16 = 32$, dann $32 : 8 = 4$. Es bleibt $20 - 4$.
4. Strichrechnung: $20 - 4 = 16$.
:::

:::achtung[Von links nach rechts, nicht von rechts]
**Falsch:** $40 : 4\cdot 2 = 40 : 8 = 5$.

**Richtig:** Division und Multiplikation sind gleichrangig. Man rechnet von links nach rechts:
$40 : 4 = 10$, dann $10\cdot 2 = 20$. Wer $40 : (4\cdot 2)$ meint, muss die Klammer hinschreiben.
:::

:::achtung[Minus zweimal hintereinander]
**Falsch:** $30 - 10 - 5 = 30 - 5 = 25$. Hier wurde zuerst $10 - 5$ gerechnet.

**Richtig:** $30 - 10 = 20$, dann $20 - 5 = 15$. Zweimal abziehen heißt, beide Zahlen abzuziehen:
$30 - 10 - 5 = 30 - (10 + 5) = 15$.
:::

### Division durch null gibt es nicht

$12 : 3 = 4$ bedeutet: $4$ ist die Zahl, die mit $3$ multipliziert $12$ ergibt. Probiere das mit $0$ als Divisor.
Für $6 : 0$ bräuchte man eine Zahl, die mit $0$ multipliziert $6$ ergibt. Jede Zahl mal $0$ ist aber $0$. Es gibt
also keine solche Zahl. Für $0 : 0$ würde dagegen **jede** Zahl passen, das Ergebnis wäre nicht eindeutig.
Deshalb ist die Division durch $0$ nicht erklärt. Umgekehrt ist $0 : 6 = 0$ völlig in Ordnung, denn $0\cdot 6 = 0$.

```reflexion
frage: 'Erkläre mit eigenen Worten, warum $0 : 5$ erlaubt ist, $5 : 0$ aber nicht.'
antwort: |
  $0 : 5$ fragt: Welche Zahl ergibt mal $5$ genau $0$? Antwort: die $0$, und nur sie. Also ist $0 : 5 = 0$.
  $5 : 0$ fragt: Welche Zahl ergibt mal $0$ genau $5$? Jede Zahl mal $0$ ergibt aber $0$, nie $5$.
  Es gibt also keine Antwort, und deshalb ist die Division durch null nicht erklärt.
```

### Die drei Rechengesetze

Drei Gesetze erlauben es dir, Rechnungen umzustellen. Du verwendest sie ständig, oft ohne es zu merken.

:::satz[Rechengesetze]
Für alle Zahlen $a$, $b$, $c$ gilt:

1. **Kommutativgesetz** (Vertauschungsgesetz): $a + b = b + a$ und $a\cdot b = b\cdot a$.
2. **Assoziativgesetz** (Verbindungsgesetz): $(a + b) + c = a + (b + c)$ und $(a\cdot b)\cdot c = a\cdot(b\cdot c)$.
3. **Distributivgesetz** (Verteilungsgesetz): $a\cdot(b + c) = a\cdot b + a\cdot c$.
:::

Die Buchstaben $a$, $b$, $c$ stehen hier für beliebige Zahlen. Das Gesetz gilt, egal welche Zahlen man einsetzt.
Zum Beispiel ist $3 + 8 = 8 + 3$ und $5\cdot(2 + 4) = 5\cdot 2 + 5\cdot 4$, denn beide Seiten ergeben $30$.

**Nichtbeispiel:** Für Subtraktion und Division gilt das Kommutativgesetz **nicht**. $7 - 3 = 4$, aber $3 - 7 = -4$.
$8 : 2 = 4$, aber $2 : 8 = 0{,}25$. Auch das Assoziativgesetz gilt dort nicht: $(12 - 4) - 3 = 5$, aber $12 - (4 - 3) = 11$.

Das **Distributivgesetz** sagt: Ein Faktor vor einer Klammer wird mit **jedem** Summanden in der Klammer
multipliziert. Das Bild zeigt, warum. Ein Rechteck mit der Höhe $a$ und der Breite $b + c$ hat die Fläche
$a\cdot(b + c)$. Man kann es aber auch in zwei Rechtecke zerlegen, mit den Flächen $a\cdot b$ und $a\cdot c$.

```plot
x: [-0.5, 7]
y: [-0.5, 3.5]
gleich: true
hoehe: 220
strecken:
  - { von: [0, 0], nach: [6.5, 0] }
  - { von: [6.5, 0], nach: [6.5, 3] }
  - { von: [6.5, 3], nach: [0, 3] }
  - { von: [0, 3], nach: [0, 0] }
  - { von: [4, 0], nach: [4, 3], gestrichelt: true }
punkte:
  - { x: 2, y: 1.5, label: "a·b", farbe: 0 }
  - { x: 5.25, y: 1.5, label: "a·c", farbe: 1 }
  - { x: 2, y: 0, label: "b", farbe: 0 }
  - { x: 5.25, y: 0, label: "c", farbe: 1 }
  - { x: 0, y: 1.5, label: "a", farbe: 2 }
beschriftung: Ein Rechteck mit Höhe a und Breite b + c (hier a = 3, b = 4, c = 2,5). Seine Fläche a·(b + c) ist die Summe der beiden Teilflächen a·b und a·c. Das ist das Distributivgesetz.
```

:::beispiel[Kopfrechnen mit dem Distributivgesetz]
Berechne $7\cdot 13$ im Kopf.

1. Zerlege den zweiten Faktor in eine bequeme Summe: $13 = 10 + 3$.
2. Distributivgesetz: $7\cdot(10 + 3) = 7\cdot 10 + 7\cdot 3$. Jeder Summand wird mit $7$ multipliziert.
3. Ausrechnen: $70 + 21 = 91$.

Rückwärts gelesen heißt das Gesetz **Herausheben**: $7\cdot 10 + 7\cdot 3 = 7\cdot(10 + 3)$. Das brauchst du in
[1.12 Terme umformen](/lernen/mathe3/zahlen/terme-umformen-binomische-formeln-und-faktorisieren) ständig.
:::

:::achtung[Den Faktor nur auf den ersten Summanden angewendet]
**Falsch:** $5\cdot(4 + 2) = 20 + 2 = 22$.

**Richtig:** $5\cdot(4 + 2) = 5\cdot 4 + 5\cdot 2 = 20 + 10 = 30$. Kontrolle über die Klammer: $5\cdot 6 = 30$.
Der Faktor vor der Klammer gilt für **jeden** Summanden in der Klammer.
:::

### Übungen

```aufgabe
id: za-rechenreihenfolge
titel: Rechenreihenfolge
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Berechne ohne Taschenrechner:

  a) $18 - 6 : 3$, b) $(18 - 6) : 3$, c) $2 + 3\cdot 4^2$, d) $36 : 6\cdot 2$
teile:
  - typ: zahl
    label: 'a)'
    loesung: "18 - 6/3"
    fehler:
      - wert: "4"
        meldung: 'Du hast zuerst subtrahiert. Punktrechnung kommt vor Strichrechnung: Erst $6 : 3$, dann abziehen.'
  - typ: zahl
    label: 'b)'
    loesung: "(18 - 6)/3"
    fehler:
      - wert: "16"
        meldung: 'Hier steht eine Klammer. Was in Klammern steht, wird **zuerst** ausgerechnet.'
  - typ: zahl
    label: 'c)'
    loesung: "2 + 3*4^2"
    fehler:
      - wert: "146"
        meldung: 'Du hast $(3\cdot 4)^2$ gerechnet. Die Potenz gehört nur zur $4$, und Potenzen kommen vor dem Malnehmen.'
      - wert: "196"
        meldung: 'Du hast $(2 + 3\cdot 4)^2$ gerechnet. Die Hochzahl $2$ gehört nur zur $4$.'
  - typ: zahl
    label: 'd)'
    loesung: "36/6*2"
    fehler:
      - wert: "3"
        meldung: 'Du hast $36 : (6\cdot 2)$ gerechnet. Ohne Klammer rechnet man Gleichrangiges von links nach rechts.'
hinweise:
  - 'Reihenfolge: Klammern, Potenzen, Punktrechnung, Strichrechnung.'
  - 'Bei d) sind $:$ und $\cdot$ gleichrangig. Dann gilt: von links nach rechts.'
loesung: |
  Ansatz: Wir halten die Reihenfolge Klammer, Potenz, Punkt, Strich ein. Gleichrangiges geht von links nach rechts.
  ---
  a) Punkt vor Strich: $6 : 3 = 2$, dann $18 - 2 = 16$.
  b) Klammer zuerst: $18 - 6 = 12$, dann $12 : 3 = 4$.
  ---
  c) Potenz zuerst: $4^2 = 16$. Dann Punkt: $3\cdot 16 = 48$. Zuletzt Strich: $2 + 48 = 50$.
  ---
  d) Von links nach rechts: $36 : 6 = 6$, dann $6\cdot 2 = 12$.
  Vergleich a) und b): Dieselben Zahlen ergeben $16$ oder $4$, je nachdem, ob eine Klammer steht.
```

```aufgabe
id: za-vorzeichen-rechnen
titel: Rechnen mit Vorzeichen
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Berechne:

  a) $-7 + 3$, b) $5 - (-8)$, c) $(-6)\cdot(-2)\cdot(-1)$, d) $-20 : (-4)$
teile:
  - typ: zahl
    label: 'a)'
    loesung: "-7 + 3"
    fehler:
      - wert: "-10"
        meldung: 'Du bist nach links gegangen. Plus $3$ heißt auf der Zahlengeraden drei Schritte nach **rechts**.'
      - wert: "4"
        meldung: 'Der Betrag stimmt, das Vorzeichen nicht. Von $-7$ aus drei Schritte nach rechts landest du noch links von $0$.'
  - typ: zahl
    label: 'b)'
    loesung: "5 - (-8)"
    fehler:
      - wert: "-3"
        meldung: 'Eine negative Zahl abziehen heißt die positive Zahl addieren: $-(-8) = +8$.'
  - typ: zahl
    label: 'c)'
    loesung: "(-6)*(-2)*(-1)"
    fehler:
      - wert: "12"
        meldung: 'Zähl die Minuszeichen: Es sind drei. Die ersten beiden ergeben plus, das dritte macht das Ergebnis wieder negativ.'
  - typ: zahl
    label: 'd)'
    loesung: "-20/(-4)"
    fehler:
      - wert: "-5"
        meldung: 'Beide Zahlen sind negativ. Gleiche Vorzeichen ergeben auch beim Dividieren ein positives Ergebnis.'
hinweise:
  - 'Addieren heißt nach rechts gehen, Subtrahieren nach links. Minus mal minus ergibt plus.'
  - 'Bei mehreren Faktoren: Eine gerade Anzahl von Minuszeichen ergibt plus, eine ungerade Anzahl minus.'
loesung: |
  Ansatz: Plus und Minus deuten wir auf der Zahlengeraden. Bei Mal und Geteilt verwenden wir die Vorzeichenregeln.
  ---
  a) Von $-7$ drei Schritte nach rechts: $-4$.
  b) $5 - (-8) = 5 + 8 = 13$, denn eine negative Zahl abziehen heißt die positive addieren.
  ---
  c) $(-6)\cdot(-2) = 12$, dann $12\cdot(-1) = -12$. Drei Minuszeichen, also ist das Ergebnis negativ.
  d) $20 : 4 = 5$, und gleiche Vorzeichen ergeben plus: $-20 : (-4) = 5$. Probe: $5\cdot(-4) = -20$.
```

```aufgabe
id: za-fehler-reihenfolge
titel: Fehler finden in einer Rechnung
niveau: 2
lernziel: 0
kompetenz: begruenden
angabe: |
  Ein Mitschüler rechnet:
  $$48 - 12 - 6 + 2 = 48 - 18 + 2 = 48 - 20 = 28.$$
  a) Welcher Schritt ist falsch?

  b) Welchen Wert hat der Ausdruck wirklich?
teile:
  - typ: auswahl
    label: 'a) Der Fehler'
    optionen:
      - 'Der zweite Schritt: Er hat $18 + 2$ zusammengefasst, obwohl die $18$ abgezogen und die $2$ addiert wird.'
      - 'Der erste Schritt: $12 + 6$ darf man nie zu $18$ zusammenfassen.'
      - 'Die Rechnung ist richtig.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Der erste Schritt ist richtig: Erst $12$ und dann $6$ abziehen ist dasselbe, wie $12 + 6 = 18$ abzuziehen.
          Schau dir an, was mit der $+2$ passiert.
      - wert: 2
        meldung: 'Rechne einmal streng von links nach rechts nach und vergleiche mit $28$.'
  - typ: zahl
    label: 'b) Richtiger Wert'
    loesung: "48 - 12 - 6 + 2"
    fehler:
      - wert: "28"
        meldung: 'Das ist das Ergebnis der fehlerhaften Rechnung. Rechne von links nach rechts.'
hinweise:
  - 'Rechne den Ausdruck streng von links nach rechts und vergleiche jeden Zwischenschritt.'
  - 'Achte darauf, welche Zahl abgezogen und welche addiert wird. $-18 + 2$ ist nicht dasselbe wie $-(18 + 2)$.'
loesung: |
  Ansatz: Plus und Minus sind gleichrangig. Also rechnen wir von links nach rechts und prüfen jeden Schritt.
  ---
  Richtig gerechnet: $48 - 12 = 36$, $36 - 6 = 30$, $30 + 2 = 32$.
  ---
  Der erste Schritt $48 - 12 - 6 = 48 - 18$ stimmt, denn zweimal abziehen heißt die Summe abziehen.
  Im zweiten Schritt hat er $-18 + 2$ wie $-(18 + 2) = -20$ behandelt. Richtig ist $-18 + 2 = -16$, also $48 - 16 = 32$.
```

```aufgabe
id: za-distributiv-kopfrechnen
titel: Geschickt rechnen mit dem Distributivgesetz
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Berechne ohne Taschenrechner und nutze dabei das Distributivgesetz $a(b + c) = ab + ac$ (auch rückwärts):

  a) $99\cdot 37$, b) $13\cdot 8 + 13\cdot 2$
teile:
  - typ: zahl
    label: 'a)'
    loesung: "99*37"
    fehler:
      - wert: "3699"
        meldung: |
          Du hast $99 = 100 - 1$ richtig zerlegt, dann aber nur die $100$ mit $37$ multipliziert. Auch die $1$ muss
          mit $37$ multipliziert werden.
  - typ: zahl
    label: 'b)'
    loesung: "13*8 + 13*2"
    fehler:
      - wert: "106"
        meldung: 'Du hast $13\cdot 8 + 2$ gerechnet. Auch der zweite Summand enthält den Faktor $13$.'
hinweise:
  - 'Bei a) hilft $99 = 100 - 1$. Das Distributivgesetz gilt auch mit Minus: $a(b - c) = ab - ac$.'
  - 'Bei b) kommt der Faktor $13$ in beiden Summanden vor. Hebe ihn heraus.'
loesung: |
  Ansatz: Wir zerlegen so, dass bequeme Zahlen wie $100$ oder $10$ entstehen.
  ---
  a) $99\cdot 37 = (100 - 1)\cdot 37 = 100\cdot 37 - 1\cdot 37 = 3700 - 37 = 3663$.
  ---
  b) Herausheben: $13\cdot 8 + 13\cdot 2 = 13\cdot(8 + 2) = 13\cdot 10 = 130$.
  ---
  Probe für b) ohne Trick: $104 + 26 = 130$. Probe für a): $99\cdot 37$ ist etwas weniger als $100\cdot 37 = 3700$, das passt zu $3663$.
```

```aufgabe
id: za-ausdruck-gefuehrt
titel: Ein Ausdruck mit allem
niveau: 2
lernziel: 0
kompetenz: rechnen
angabe: |
  Berechne $-2\cdot(3 - 5)^2 + 12 : (-4)$.
teile:
  - typ: zahl
    loesung: "-2*(3 - 5)^2 + 12/(-4)"
    fehler:
      - wert: "5"
        meldung: |
          Du hast $(3 - 5)^2$ als $-4$ gerechnet. Das Quadrat einer negativen Zahl ist positiv:
          $(-2)\cdot(-2) = +4$.
      - wert: "-5"
        meldung: '$12 : (-4)$ ist negativ, weil die Vorzeichen verschieden sind.'
      - wert: "-19"
        meldung: 'Du hast $-2\cdot(-2)$ vor dem Quadrieren gerechnet. Die Potenz kommt vor dem Malnehmen und gehört nur zur Klammer.'
hinweise:
  - 'Zuerst die Klammer, dann die Potenz, dann Punkt-, zuletzt Strichrechnung.'
  - 'Die Hochzahl $2$ gehört zur Klammer $(3 - 5)$, nicht zur $-2$ davor.'
gefuehrt:
  - text: Rechne zuerst die Klammer aus. Was ist $3 - 5$?
    teil:
      typ: zahl
      loesung: "3 - 5"
      fehler:
        - wert: "2"
          meldung: 'Von $3$ fünf Schritte nach links landest du links von $0$.'
    erklaerung: '$3 - 5 = -2$.'
  - text: Jetzt die Potenz. Was ist $(-2)^2$?
    teil:
      typ: zahl
      loesung: "(-2)^2"
      fehler:
        - wert: "-4"
          meldung: '$(-2)^2 = (-2)\cdot(-2)$, und minus mal minus ergibt plus.'
    erklaerung: '$(-2)^2 = (-2)\cdot(-2) = 4$.'
  - text: Punktrechnung, erster Teil. Was ist $-2\cdot 4$?
    teil:
      typ: zahl
      loesung: "-2*4"
    erklaerung: '$-2\cdot 4 = -8$.'
  - text: 'Punktrechnung, zweiter Teil. Was ist $12 : (-4)$?'
    teil:
      typ: zahl
      loesung: "12/(-4)"
      fehler:
        - wert: "3"
          meldung: 'Verschiedene Vorzeichen ergeben ein negatives Ergebnis.'
    erklaerung: '$12 : (-4) = -3$.'
  - text: Zuletzt die Strichrechnung. Was ist $-8 + (-3)$?
    teil:
      typ: zahl
      loesung: "-8 + (-3)"
    erklaerung: 'Plus eine negative Zahl heißt nach links gehen: $-8 - 3 = -11$.'
loesung: |
  Ansatz: Wir arbeiten die Rechenreihenfolge ab: Klammer, Potenz, Punkt, Strich.
  ---
  Klammer: $3 - 5 = -2$. Potenz: $(-2)^2 = 4$.
  ---
  Punktrechnung: $-2\cdot 4 = -8$ und $12 : (-4) = -3$.
  ---
  Strichrechnung: $-8 + (-3) = -11$. Das Ergebnis ist $-11$.
```

```aufgabe
id: za-division-null
titel: Wann darf man dividieren?
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Welche der folgenden Ausdrücke haben einen Wert? Kreuze alle an.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$0 : 5$'
      - '$5 : 0$'
      - '$0 : 0$'
      - '$(3 - 3) : 7$'
      - '$7 : (3 - 3)$'
    richtig: [0, 3]
    fehler:
      - wert: [3]
        meldung: '$0 : 5$ ist erlaubt. Gefragt ist: Welche Zahl ergibt mal $5$ genau $0$? Die gibt es.'
      - wert: [0]
        meldung: 'Rechne zuerst die Klammer aus: $3 - 3 = 0$. Ist dann der Dividend oder der Divisor null?'
      - wert: [0, 2, 3]
        meldung: |
          $0 : 0$ hat keinen Wert. Jede Zahl mal $0$ ergibt $0$, das Ergebnis wäre also nicht eindeutig.
hinweise:
  - 'Rechne zuerst Klammern aus. Dann frag dich: Steht die $0$ vor oder nach dem Geteiltzeichen?'
  - 'Durch $0$ darf man nie dividieren. Die $0$ selbst darf man aber durch jede andere Zahl teilen.'
loesung: |
  Ansatz: Ein Quotient hat nur dann einen Wert, wenn der Divisor (die Zahl nach dem Geteiltzeichen) nicht $0$ ist.
  ---
  $0 : 5 = 0$, denn $0\cdot 5 = 0$. Ebenso $(3 - 3) : 7 = 0 : 7 = 0$.
  ---
  $5 : 0$ und $7 : (3 - 3) = 7 : 0$ haben keinen Wert, weil keine Zahl mal $0$ etwas anderes als $0$ ergibt.
  $0 : 0$ hat ebenfalls keinen Wert, weil jede Zahl passen würde. Richtig sind also nur $0 : 5$ und $(3 - 3) : 7$.
```

```aufgabe
id: za-klammern-setzen
titel: Klammern so setzen, dass es stimmt
niveau: 3
lernziel: 0
kompetenz: verstehen
angabe: |
  Ohne Klammern ist $2 + 3\cdot 4 - 1 = 13$. Setze Klammern so, dass der Ausdruck den Wert $19$ hat. Welche Variante ist richtig?
teile:
  - typ: auswahl
    optionen:
      - '$(2 + 3)\cdot 4 - 1$'
      - '$2 + 3\cdot(4 - 1)$'
      - '$(2 + 3)\cdot(4 - 1)$'
      - '$2 + (3\cdot 4 - 1)$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Rechne nach: $4 - 1 = 3$, $3\cdot 3 = 9$, $2 + 9 = 11$. Das ist nicht $19$.'
      - wert: 2
        meldung: 'Rechne nach: $5\cdot 3 = 15$. Das ist nicht $19$.'
      - wert: 3
        meldung: 'Diese Klammer ändert nichts, denn Punkt vor Strich gilt ohnehin. Der Wert bleibt $13$.'
hinweise:
  - 'Rechne jede Variante aus. Klammern zuerst.'
  - '$19$ ist $20 - 1$. Wie bekommst du aus $2$, $3$ und $4$ den Wert $20$?'
loesung: |
  Ansatz: Wir rechnen jede Variante nach der Rechenreihenfolge aus und vergleichen mit $19$.
  ---
  $(2 + 3)\cdot 4 - 1 = 5\cdot 4 - 1 = 20 - 1 = 19$. Das passt.
  ---
  Die anderen: $2 + 3\cdot 3 = 11$, $5\cdot 3 = 15$, und $2 + (12 - 1) = 13$.
  Klammern können den Wert eines Ausdrucks also stark verändern. Die Antwort ist $(2 + 3)\cdot 4 - 1$.
```

```aufgabe
id: za-temperatur-modell
titel: Temperatur in der Nacht
niveau: 3
lernziel: 0
kompetenz: modellieren
angabe: |
  Um 18 Uhr hat es $4\,°\text{C}$. Bis Mitternacht sinkt die Temperatur jede Stunde um $1{,}5\,°\text{C}$.
  Nach Mitternacht steigt sie bis 8 Uhr jede Stunde um $0{,}5\,°\text{C}$.

  a) Welche Temperatur herrscht um Mitternacht?

  b) Welche Temperatur herrscht um 8 Uhr früh?

  c) Schreib die Temperatur um 8 Uhr als **einen** Rechenausdruck.
teile:
  - typ: zahl
    label: 'a) Mitternacht'
    einheit: "°C"
    loesung: "4 - 6*1.5"
    fehler:
      - wert: "2.5"
        meldung: 'Von 18 Uhr bis Mitternacht vergehen $6$ Stunden, nicht eine. Die Temperatur sinkt sechsmal um $1{,}5\,°\text{C}$.'
      - wert: "5"
        meldung: 'Der Betrag stimmt, aber die Temperatur ist unter den Gefrierpunkt gefallen. Achte auf das Vorzeichen.'
  - typ: zahl
    label: 'b) 8 Uhr'
    einheit: "°C"
    loesung: "4 - 6*1.5 + 8*0.5"
    fehler:
      - wert: "-9"
        meldung: 'Die Temperatur **steigt** nach Mitternacht. Du musst die $8\cdot 0{,}5\,°\text{C}$ addieren, nicht abziehen.'
  - typ: text
    label: 'c) Rechenausdruck'
    muster: |
      $4 - 6\cdot 1{,}5 + 8\cdot 0{,}5$. Wegen Punkt vor Strich braucht man keine Klammern.
hinweise:
  - 'Zähle zuerst die Stunden: von 18 Uhr bis 24 Uhr und von 0 Uhr bis 8 Uhr.'
  - 'Sinken heißt abziehen, steigen heißt addieren. Jede Stunde zählt einmal.'
loesung: |
  Ansatz: Wir zählen die Stunden und multiplizieren sie mit der Änderung pro Stunde. Sinken ziehen wir ab, Steigen addieren wir.
  ---
  a) Von 18 bis 24 Uhr sind es $6$ Stunden. Die Temperatur sinkt um $6\cdot 1{,}5 = 9\,°\text{C}$. Also $4 - 9 = -5\,°\text{C}$.
  ---
  b) Von 0 bis 8 Uhr sind es $8$ Stunden. Sie steigt um $8\cdot 0{,}5 = 4\,°\text{C}$. Also $-5 + 4 = -1\,°\text{C}$.
  ---
  c) $4 - 6\cdot 1{,}5 + 8\cdot 0{,}5 = 4 - 9 + 4 = -1$. Punkt vor Strich sorgt dafür, dass zuerst die Änderungen ausgerechnet werden.
  Plausibel: Um 8 Uhr ist es noch knapp unter null, weil die Nacht länger kälter wurde, als sie danach wärmer wurde.
```

## Mengen und Aussagen: die Sprache der Mathematik

```aufgabe
id: za-check-gerade-zahlen
titel: Gerade Zahlen erkennen
niveau: 1
art: check
angabe: |
  Eine Zahl heißt **gerade**, wenn man sie ohne Rest durch $2$ teilen kann. Welche der Zahlen $3$, $8$, $0$, $-6$ sind gerade?
teile:
  - typ: auswahl
    mehrfach: true
    optionen: ['$3$', '$8$', '$0$', '$-6$']
    richtig: [1, 2, 3]
    fehler:
      - wert: [1, 3]
        meldung: 'Prüfe die $0$: $0 : 2 = 0$ ohne Rest. Also ist auch $0$ gerade.'
      - wert: [1]
        meldung: 'Auch negative Zahlen können gerade sein: $-6 : 2 = -3$ ohne Rest. Und $0 : 2 = 0$.'
hinweise:
  - Teile jede Zahl durch $2$ und schau, ob ein Rest bleibt.
loesung: |
  $8 : 2 = 4$, $0 : 2 = 0$ und $-6 : 2 = -3$ gehen ohne Rest auf. Diese drei Zahlen sind gerade.
  ---
  $3 : 2 = 1$ Rest $1$. Die $3$ ist ungerade. Solche genauen Festlegungen sind das Thema dieser Lektion.
```

Mathematik hat eine eigene, sehr knappe Sprache. Sie besteht aus **Mengen** und **Aussagen**. Prüfungsangaben
und Lehrbücher verwenden sie ständig, zum Beispiel in $\{x \in \Z \mid x > 0\}$ (dabei steht $\Z$ für die ganzen Zahlen) oder in „für alle $n \in \N$ gilt“.
In dieser Lektion lernst du, solche Zeilen laut vorzulesen und zu verstehen. Danach kannst du jedes Symbol in
diesem Kurs in ganze Sätze übersetzen.

### Mengen

:::definition[Menge und Element]
Eine **Menge** ist eine Zusammenfassung von Objekten zu einem Ganzen. Die Objekte heißen **Elemente** der Menge.
Man schreibt die Elemente in geschweifte Klammern, zum Beispiel $A = \{1, 2, 3\}$.

- $x \in A$ liest man „$x$ ist Element von $A$“ oder kurz „$x$ liegt in $A$“.
- $x \notin A$ liest man „$x$ ist kein Element von $A$“.
- Die **leere Menge** $\emptyset = \{\}$ enthält kein einziges Element.
:::

Für $A = \{1, 2, 3\}$ gilt also $2 \in A$ und $5 \notin A$. Bei einer Menge zählt nur, **welche** Elemente sie
enthält. Reihenfolge und Wiederholungen spielen keine Rolle: $\{3, 1, 2\}$ und $\{1, 1, 2, 3\}$ sind dieselbe
Menge wie $\{1, 2, 3\}$.

Es gibt zwei Arten, eine Menge anzugeben:

- **Aufzählend:** Man schreibt alle Elemente hin, etwa $\{1, 2, 3, 4\}$.
- **Beschreibend:** Man nennt eine Eigenschaft, etwa $\{x \in \N \mid x < 5\}$.

:::beispiel[Eine beschriebene Menge vorlesen und aufzählen]
Gegeben ist $\{x \in \N \mid x < 5\}$.

1. Vorlesen: „die Menge aller $x$ aus $\N$, für die gilt: $x < 5$“. Der senkrechte Strich $\mid$ bedeutet „für die gilt“.
2. $\N$ steht für die natürlichen Zahlen $0, 1, 2, 3, \dots$. Genauer lernst du sie in [1.3 Die Zahlenmengen](/lernen/mathe3/zahlen/die-zahlenmengen-n-z-q-und-r) kennen.
3. Davon sind $0, 1, 2, 3, 4$ kleiner als $5$. Aufgezählt ist die Menge also $\{0, 1, 2, 3, 4\}$.
:::

:::definition[Teilmenge]
$A$ heißt **Teilmenge** von $B$, geschrieben $A \subset B$, wenn jedes Element von $A$ auch in $B$ liegt.
Manche Bücher schreiben dafür $A \subseteq B$.
:::

**Beispiel:** $\{2, 4\} \subset \{1, 2, 3, 4\}$, denn $2$ und $4$ liegen beide in der größeren Menge.
**Nichtbeispiel:** $\{2, 5\}$ ist **keine** Teilmenge von $\{1, 2, 3, 4\}$, denn $5$ liegt nicht darin.
Ein einziges Element, das fehlt, genügt.

### Mengen verknüpfen

Aus zwei Mengen $A$ und $B$ kann man neue Mengen bilden:

- **Durchschnitt** $A \cap B$ (lies „$A$ geschnitten $B$“): alle Elemente, die in $A$ **und** in $B$ liegen.
- **Vereinigung** $A \cup B$ (lies „$A$ vereinigt $B$“): alle Elemente, die in $A$ **oder** in $B$ liegen, also in mindestens einer der beiden.
- **Differenz** $A \setminus B$ (lies „$A$ ohne $B$“): alle Elemente von $A$, die **nicht** in $B$ liegen.

```plot
x: [-3.3, 3.3]
y: [-2, 2]
gleich: true
hoehe: 240
kurven:
  - { x: "-0.8 + 1.5*cos(t)", y: "1.5*sin(t)", t: [0, "2*pi"], label: "A", farbe: 0 }
  - { x: "0.8 + 1.5*cos(t)", y: "1.5*sin(t)", t: [0, "2*pi"], label: "B", farbe: 1 }
punkte:
  - { x: -1.6, y: 0.4, label: "1", farbe: 0 }
  - { x: -1.6, y: -0.5, label: "2", farbe: 0 }
  - { x: 0, y: 0.4, label: "3", farbe: 2 }
  - { x: 0, y: -0.5, label: "4", farbe: 2 }
  - { x: 1.6, y: 0, label: "5", farbe: 1 }
beschriftung: Mengenbild (Venn-Diagramm) für A = {1, 2, 3, 4} und B = {3, 4, 5}. Im überlappenden Teil liegen 3 und 4, das ist der Durchschnitt. Alle fünf Zahlen zusammen bilden die Vereinigung.
```

:::beispiel[Drei Verknüpfungen]
Es sei $A = \{1, 2, 3, 4\}$ und $B = \{3, 4, 5\}$, wie im Bild.

1. **Durchschnitt:** In beiden Mengen liegen $3$ und $4$. Also $A \cap B = \{3, 4\}$.
2. **Vereinigung:** In mindestens einer Menge liegen $1, 2, 3, 4, 5$. Also $A \cup B = \{1, 2, 3, 4, 5\}$. Die $3$ und die $4$ schreibt man nur einmal.
3. **Differenz:** Aus $A$ streichen wir alles, was auch in $B$ liegt, also $3$ und $4$. Es bleibt $A \setminus B = \{1, 2\}$.

Umgekehrt ist $B \setminus A = \{5\}$. Bei der Differenz kommt es also auf die Reihenfolge an.
:::

:::achtung[Vereinigung ist nicht „nur in einer der beiden“]
**Falsch:** Für $A = \{1, 2, 3\}$ und $B = \{2, 3, 4\}$ ist $A \cup B = \{1, 4\}$.

**Richtig:** $A \cup B = \{1, 2, 3, 4\}$. Die Vereinigung enthält alles, was in **mindestens einer** Menge liegt.
Die gemeinsamen Elemente $2$ und $3$ gehören dazu. Das mathematische „oder“ schließt „beides“ immer mit ein.
:::

:::beispiel[Zählen mit Mengen: ein Sprachkurs]
In einer Gruppe von $40$ Personen sprechen $25$ Englisch und $12$ Französisch. $8$ Personen sprechen beides.
Wie viele Personen sprechen mindestens eine der beiden Sprachen, und wie viele keine?

1. Zählt man $25 + 12 = 37$, hat man die $8$ Personen, die beides sprechen, **doppelt** gezählt. Einmal steckt
   jede von ihnen in den $25$, einmal in den $12$.
2. Also einmal abziehen: $25 + 12 - 8 = 29$ Personen sprechen mindestens eine Sprache.
3. Keine der beiden Sprachen sprechen $40 - 29 = 11$ Personen.

Allgemein gilt für die Anzahl der Elemente: $|A \cup B| = |A| + |B| - |A \cap B|$. Dabei bedeutet $|A|$ hier die
Anzahl der Elemente von $A$.
:::

### Aussagen

:::definition[Aussage]
Eine **Aussage** ist ein Satz, der entweder wahr oder falsch ist. Etwas Drittes gibt es nicht.
:::

**Beispiele:** „$7$ ist ungerade“ ist eine wahre Aussage. „$2 + 2 = 5$“ ist eine falsche Aussage. Auch eine falsche
Aussage ist eine Aussage.

**Nichtbeispiele:** „Ist $7$ ungerade?“ ist eine Frage, keine Aussage. „$x > 3$“ ist ebenfalls keine Aussage, denn
ob sie stimmt, hängt von $x$ ab. Man nennt so etwas eine **Aussageform**. Setzt man eine Zahl für $x$ ein, wird
daraus eine Aussage: „$5 > 3$“ ist wahr, „$1 > 3$“ ist falsch.

Aussagen kann man verknüpfen. Für $A$ und $B$ stehen hier zwei beliebige Aussagen.

- **Verneinung** „nicht $A$“, Zeichen $\neg A$: wahr genau dann, wenn $A$ falsch ist.
- **Und** „$A$ und $B$“, Zeichen $A \wedge B$: wahr, wenn beide wahr sind.
- **Oder** „$A$ oder $B$“, Zeichen $A \vee B$: wahr, wenn mindestens eine wahr ist. Wie bei der Vereinigung ist „beide“ eingeschlossen.
- **Folgerung** „wenn $A$, dann $B$“, Zeichen $A \Rightarrow B$, gelesen „aus $A$ folgt $B$“.
- **Äquivalenz** „$A$ genau dann, wenn $B$“, Zeichen $A \Leftrightarrow B$, gelesen „$A$ ist gleichwertig mit $B$“.

```aufgabe
id: za-check-aussage
titel: Ist das eine Aussage?
niveau: 1
art: check
angabe: |
  Welcher der folgenden Sätze ist eine **Aussage**, also entweder wahr oder falsch?
teile:
  - typ: auswahl
    optionen:
      - '$3 + 4 = 8$'
      - 'Ist $9$ eine Quadratzahl?'
      - '$x + 4 = 8$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Eine Frage ist weder wahr noch falsch. Man kann sie nur beantworten.'
      - wert: 2
        meldung: 'Ob $x + 4 = 8$ stimmt, hängt davon ab, welche Zahl $x$ ist. Das ist eine Aussageform, keine Aussage.'
hinweise:
  - 'Frag dich bei jedem Satz: Kann ich ohne weitere Angaben sagen, ob er wahr oder falsch ist?'
loesung: |
  „$3 + 4 = 8$“ ist eine Aussage. Sie ist falsch, aber eindeutig falsch.
  ---
  Die Frage ist keine Aussage. Bei $x + 4 = 8$ hängt die Wahrheit von $x$ ab: Für $x = 4$ ist sie wahr, sonst falsch.
```

### Wenn-dann-Sätze und ihre Umkehrung

Die Aussage „Wenn eine Zahl durch $10$ teilbar ist, dann ist sie durch $5$ teilbar“ ist wahr. Jede Zahl, die auf $0$
endet, kann man auch durch $5$ ohne Rest teilen. Man sagt: „durch $10$ teilbar“ ist **hinreichend** für „durch $5$
teilbar“. Und „durch $5$ teilbar“ ist **notwendig** für „durch $10$ teilbar“.

Die **Umkehrung** lautet: „Wenn eine Zahl durch $5$ teilbar ist, dann ist sie durch $10$ teilbar.“ Sie ist
**falsch**. Ein Gegenbeispiel ist $15$: durch $5$ teilbar, aber nicht durch $10$. Eine wahre Wenn-dann-Aussage
kann also eine falsche Umkehrung haben. Wenn beide Richtungen stimmen, schreibt man $A \Leftrightarrow B$.

### Für alle und es gibt

Zwei Zeichen kommen in Definitionen und Sätzen besonders oft vor. Man nennt sie **Quantoren**, weil sie angeben,
für wie viele Objekte etwas gilt.

- $\forall$ liest man „für alle“. Beispiel: $\forall x \in \N:\ x + 1 > x$, gelesen „für alle natürlichen Zahlen $x$ gilt $x + 1 > x$“. Wahr.
- $\exists$ liest man „es gibt (mindestens ein)“. Beispiel: $\exists x \in \N:\ x^2 = 9$, gelesen „es gibt eine natürliche Zahl $x$ mit $x^2 = 9$“. Wahr, nämlich $x = 3$.

:::beispiel[Eine Für-alle-Aussage widerlegen]
Ist die Aussage $\forall x \in \N:\ x^2 > x$ wahr?

1. Sie behauptet etwas für **jede** natürliche Zahl. Für $x = 2$ stimmt es: $4 > 2$. Für $x = 5$ auch: $25 > 5$.
2. Das beweist aber nichts. Wir testen die Randfälle: Für $x = 1$ ist $x^2 = 1$, und $1 > 1$ ist falsch.
3. Damit ist die Aussage widerlegt. Ein **einziges Gegenbeispiel** genügt. Auch $x = 0$ wäre ein Gegenbeispiel.

Beweisen kann man eine Für-alle-Aussage dagegen nicht mit Beispielen. Auch tausend passende Beispiele schließen
nicht aus, dass irgendwo eine Ausnahme wartet.
:::

:::merke[Verneinen]
- Die Verneinung von „**alle** haben die Eigenschaft“ ist „**es gibt mindestens einen**, der sie nicht hat“.
- Die Verneinung von „**es gibt einen** mit der Eigenschaft“ ist „**keiner** hat sie“, also „jeder hat sie nicht“.
- Die Verneinung von „$A$ und $B$“ ist „nicht $A$ oder nicht $B$“.
:::

:::achtung[Falsch verneint]
**Falsch:** Die Verneinung von „Alle Busse sind pünktlich“ ist „Alle Busse sind unpünktlich“.

**Richtig:** „Es gibt mindestens einen Bus, der unpünktlich ist.“ Um zu zeigen, dass die ursprüngliche Aussage
falsch ist, reicht ein einziger verspäteter Bus. Es müssen nicht alle verspätet sein.
:::

```reflexion
frage: 'Warum genügt ein einziges Gegenbeispiel, um eine Für-alle-Aussage zu widerlegen, aber kein noch so großer Stapel von Beispielen, um sie zu beweisen?'
antwort: |
  Eine Für-alle-Aussage behauptet etwas über jedes einzelne Objekt. Ein Gegenbeispiel ist ein Objekt, für das es nicht stimmt.
  Damit ist die Behauptung „für jedes“ erledigt. Beispiele zeigen dagegen nur, dass es für diese Objekte stimmt.
  Über die unendlich vielen anderen sagen sie nichts. Zum Beweis braucht man ein Argument, das für alle Objekte gleichzeitig funktioniert.
  Wie solche Argumente aussehen, zeigt die Lektion [1.8 Beweisen](/lernen/mathe3/zahlen/beweisen-direkt-durch-kontraposition-und-durch-widerspruch).
```

### Übungen

```aufgabe
id: za-mengen-verknuepfen
titel: Mengen verknüpfen
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Es sei $A = \{2, 4, 6, 8, 10\}$ und $B = \{3, 6, 9\}$. Gib die Mengen aufzählend an (Elemente mit Strichpunkt trennen, die leere Menge als `leer`).
teile:
  - typ: menge
    label: '$A \cap B$'
    loesung: ["6"]
    fehler:
      - wert: ["2", "3", "4", "6", "8", "9", "10"]
        meldung: 'Das ist die Vereinigung. Beim Durchschnitt bleiben nur die Elemente, die in **beiden** Mengen liegen.'
  - typ: menge
    label: '$A \cup B$'
    loesung: ["2", "3", "4", "6", "8", "9", "10"]
    fehler:
      - wert: ["2", "3", "4", "8", "9", "10"]
        meldung: 'Die $6$ liegt in beiden Mengen. Sie gehört deshalb auch zur Vereinigung, denn „oder“ schließt „beides“ ein.'
  - typ: menge
    label: '$A \setminus B$'
    loesung: ["2", "4", "8", "10"]
    fehler:
      - wert: ["3", "9"]
        meldung: 'Das ist $B \setminus A$. Bei $A \setminus B$ startest du mit $A$ und streichst, was auch in $B$ liegt.'
hinweise:
  - 'Markiere zuerst die Elemente, die in beiden Mengen vorkommen.'
  - 'Durchschnitt: in beiden. Vereinigung: in mindestens einer. Differenz $A \setminus B$: in $A$, aber nicht in $B$.'
loesung: |
  Ansatz: Wir suchen zuerst die gemeinsamen Elemente. Nur die $6$ liegt in beiden Mengen.
  ---
  $A \cap B = \{6\}$, weil nur die $6$ in beiden liegt. $A \cup B = \{2, 3, 4, 6, 8, 9, 10\}$, die $6$ nur einmal geschrieben.
  ---
  $A \setminus B = \{2, 4, 8, 10\}$: Aus $A$ wird nur die $6$ gestrichen. Kontrolle: $A \cap B$ und $A \setminus B$ zusammen ergeben wieder ganz $A$.
```

```aufgabe
id: za-menge-beschreibend
titel: Beschreibende Form aufzählen
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Zähle alle Elemente der Menge $M = \{x \in \Z \mid -2 \le x < 3\}$ auf. Dabei ist $\Z$ die Menge der ganzen Zahlen $\dots, -2, -1, 0, 1, 2, \dots$, und $\le$ bedeutet „kleiner oder gleich“.
teile:
  - typ: menge
    label: '$M$'
    loesung: ["-2", "-1", "0", "1", "2"]
    fehler:
      - wert: ["-2", "-1", "0", "1", "2", "3"]
        meldung: 'Rechts steht $x < 3$, also echt kleiner. Die $3$ selbst gehört nicht dazu.'
      - wert: ["-1", "0", "1", "2"]
        meldung: 'Links steht $-2 \le x$. Das Gleichheitszeichen unter dem Kleinerzeichen bedeutet: $-2$ gehört dazu.'
hinweise:
  - 'Lies die Zeile laut: „alle ganzen Zahlen $x$, für die gilt: $x$ ist mindestens $-2$ und kleiner als $3$“.'
  - 'Prüfe die Randzahlen $-2$ und $3$ besonders genau.'
loesung: |
  Ansatz: Wir lesen die Bedingung in Worten. Gesucht sind ganze Zahlen von $-2$ an (einschließlich) bis unter $3$.
  ---
  Die ganzen Zahlen mit dieser Eigenschaft sind $-2, -1, 0, 1, 2$.
  ---
  Randkontrolle: $-2 \le -2$ ist wahr, also gehört $-2$ dazu. $3 < 3$ ist falsch, also gehört $3$ nicht dazu. $M = \{-2, -1, 0, 1, 2\}$.
```

```aufgabe
id: za-aussagen-quantoren
titel: Wahr oder falsch?
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: |
  Welche der folgenden Aussagen sind **wahr**? Dabei ist $\N = \{0, 1, 2, \dots\}$ und $\Z = \{\dots, -1, 0, 1, \dots\}$.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$\forall x \in \N:\ x + 1 > x$'
      - '$\exists x \in \Z:\ x^2 = -1$'
      - '$\exists n \in \N:\ n^2 = 2n$'
      - '$\forall x \in \Z:\ x^2 > 0$'
      - 'Wenn $n$ durch $6$ teilbar ist, dann ist $n$ gerade.'
    richtig: [0, 2, 4]
    fehler:
      - wert: [0, 2, 3, 4]
        meldung: 'Teste bei „für alle“ auch die $0$. Ist $0^2 > 0$?'
      - wert: [0, 4]
        meldung: 'Für „es gibt“ genügt ein einziges passendes Beispiel. Probiere bei $n^2 = 2n$ kleine Zahlen wie $0$, $1$, $2$.'
hinweise:
  - 'Bei „für alle“ suchst du ein Gegenbeispiel. Bei „es gibt“ suchst du ein Beispiel.'
  - 'Teste die Randfälle $0$ und $1$ und überlege, welches Vorzeichen ein Quadrat hat.'
loesung: |
  Ansatz: Eine Für-alle-Aussage ist falsch, sobald es ein Gegenbeispiel gibt. Eine Es-gibt-Aussage ist wahr, sobald es ein Beispiel gibt.
  ---
  $x + 1 > x$ gilt für jede Zahl: wahr. $x^2 = -1$: Kein Quadrat einer ganzen Zahl ist negativ, also falsch.
  ---
  $n^2 = 2n$: Für $n = 2$ ist $4 = 4$. Ein Beispiel reicht, also wahr. $x^2 > 0$ für alle $x$: Gegenbeispiel $x = 0$, denn $0 > 0$ ist falsch.
  ---
  Ist $n$ durch $6$ teilbar, so ist $n = 6k = 2\cdot(3k)$ für eine ganze Zahl $k$, also gerade: wahr. Richtig sind die erste, dritte und fünfte Aussage.
```

```aufgabe
id: za-verneinen
titel: Eine Aussage verneinen
niveau: 2
lernziel: 1
kompetenz: begruenden
angabe: |
  Gegeben ist die Aussage: „Jede durch $3$ teilbare Zahl ist ungerade.“

  a) Welche Formulierung ist ihre Verneinung?

  b) Welche der beiden ist wahr, die Aussage oder ihre Verneinung?
teile:
  - typ: auswahl
    label: 'a) Verneinung'
    optionen:
      - 'Jede durch $3$ teilbare Zahl ist gerade.'
      - 'Es gibt eine durch $3$ teilbare Zahl, die gerade ist.'
      - 'Keine durch $3$ teilbare Zahl ist ungerade.'
      - 'Es gibt eine ungerade Zahl, die nicht durch $3$ teilbar ist.'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Das behauptet zu viel. Damit „jede ist ungerade“ falsch wird, genügt **eine** gerade Zahl. Es müssen nicht alle gerade sein.'
      - wert: 2
        meldung: '„Keine ist ungerade“ heißt „alle sind gerade“. Das ist mehr als die Verneinung. Ein einziges Gegenbeispiel reicht.'
      - wert: 3
        meldung: 'Hier hast du die Rollen vertauscht. Die Aussage spricht über durch $3$ teilbare Zahlen, die Verneinung muss das auch tun.'
  - typ: auswahl
    label: 'b) Was ist wahr?'
    optionen:
      - 'die ursprüngliche Aussage'
      - 'die Verneinung'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Probiere die Zahl $6$. Sie ist durch $3$ teilbar. Ist sie ungerade?'
hinweise:
  - 'Die Verneinung von „alle haben die Eigenschaft“ lautet „es gibt mindestens einen, der sie nicht hat“.'
  - 'Für b) such unter den Zahlen $3, 6, 9, 12$ eine, die nicht ungerade ist.'
loesung: |
  Ansatz: Eine Für-alle-Aussage verneint man mit „es gibt mindestens einen, für den es nicht gilt“.
  ---
  a) Verneinung: „Es gibt eine durch $3$ teilbare Zahl, die nicht ungerade ist“, also „die gerade ist“.
  ---
  b) Die Zahl $6$ ist durch $3$ teilbar und gerade. Damit ist die Verneinung wahr und die ursprüngliche Aussage falsch.
  Die $6$ ist das Gegenbeispiel, das die Für-alle-Aussage widerlegt.
```

```aufgabe
id: za-venn-verein
titel: Mitglieder im Sportverein
niveau: 2
lernziel: 1
kompetenz: modellieren
angabe: |
  Ein Sportverein hat $50$ Mitglieder. $31$ spielen Fußball, $22$ spielen Tennis, $9$ spielen beides.

  a) Wie viele Mitglieder spielen mindestens eine der beiden Sportarten?

  b) Wie viele spielen keine der beiden?

  c) Wie viele spielen nur Tennis?
teile:
  - typ: zahl
    label: 'a) mindestens eine'
    einheit: Personen
    loesung: "31 + 22 - 9"
    fehler:
      - wert: "53"
        meldung: 'Das sind mehr als $50$ Mitglieder. Die $9$ Personen, die beides spielen, hast du doppelt gezählt.'
  - typ: zahl
    label: 'b) keine'
    einheit: Personen
    loesung: "50 - (31 + 22 - 9)"
    fehler:
      - wert: "-3"
        meldung: 'Eine negative Anzahl ist unmöglich. Du hast die doppelt gezählten Personen nicht abgezogen.'
  - typ: zahl
    label: 'c) nur Tennis'
    einheit: Personen
    loesung: "22 - 9"
    fehler:
      - wert: "22"
        meldung: 'Unter den $22$ Tennisspielern sind auch die $9$, die zusätzlich Fußball spielen. „Nur Tennis“ schließt sie aus.'
hinweise:
  - 'Zeichne zwei überlappende Kreise. In den Überlappungsbereich gehören die $9$ Personen, die beides spielen.'
  - 'Wer beides spielt, steckt in den $31$ und in den $22$. Ziehe diese Personen einmal ab.'
gefuehrt:
  - text: 'Wie viele Personen spielen nur Fußball, also Fußball, aber nicht Tennis?'
    teil:
      typ: zahl
      loesung: "31 - 9"
      fehler:
        - wert: "31"
          meldung: 'In den $31$ stecken auch die $9$, die zusätzlich Tennis spielen.'
    erklaerung: '$31 - 9 = 22$ Personen spielen nur Fußball.'
  - text: 'Wie viele spielen nur Tennis?'
    teil:
      typ: zahl
      loesung: "22 - 9"
    erklaerung: '$22 - 9 = 13$ Personen spielen nur Tennis.'
  - text: 'Wie viele spielen mindestens eine Sportart? Addiere die drei Bereiche des Mengenbilds.'
    teil:
      typ: zahl
      loesung: "22 + 13 + 9"
    erklaerung: 'Nur Fußball, nur Tennis und beides: $22 + 13 + 9 = 44$. Das ist dasselbe wie $31 + 22 - 9$.'
  - text: 'Wie viele spielen keine der beiden Sportarten?'
    teil:
      typ: zahl
      loesung: "50 - 44"
    erklaerung: 'Von $50$ Mitgliedern spielen $44$ mindestens eine Sportart, also $50 - 44 = 6$ keine.'
loesung: |
  Ansatz: Wir teilen die Mitglieder in die Bereiche des Mengenbilds ein. Wer beides spielt, darf nur einmal gezählt werden.
  ---
  a) $|F \cup T| = |F| + |T| - |F \cap T| = 31 + 22 - 9 = 44$ Personen.
  ---
  b) $50 - 44 = 6$ Personen spielen keine der beiden Sportarten.
  ---
  c) Nur Tennis: $22 - 9 = 13$ Personen. Kontrolle: nur Fußball $22$, nur Tennis $13$, beides $9$, keines $6$. Zusammen $50$.
```

```aufgabe
id: za-umkehrung
titel: Aussage, Umkehrung und Gegenbeispiel
niveau: 3
lernziel: 1
kompetenz: begruenden
angabe: |
  Gegeben ist die Aussage: „Wenn eine ganze Zahl durch $4$ teilbar ist, dann ist sie gerade.“

  a) Ist die Aussage wahr?

  b) Formuliere die Umkehrung. Welche Zahl ist ein Gegenbeispiel zur Umkehrung?

  c) Begründe in einem Satz, warum die ursprüngliche Aussage für **alle** durch $4$ teilbaren Zahlen stimmt.
teile:
  - typ: auswahl
    label: 'a)'
    optionen: ['wahr', 'falsch']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Probiere $4$, $8$, $-12$. Findest du eine durch $4$ teilbare Zahl, die ungerade ist?'
  - typ: auswahl
    label: 'b) Gegenbeispiel zur Umkehrung'
    optionen: ['$8$', '$6$', '$7$', '$12$']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: '$8$ ist gerade **und** durch $4$ teilbar. Das passt zur Umkehrung, widerlegt sie also nicht.'
      - wert: 2
        meldung: 'Die Umkehrung spricht nur über gerade Zahlen. $7$ ist ungerade und kommt in ihr gar nicht vor.'
      - wert: 3
        meldung: '$12$ ist gerade und durch $4$ teilbar. Gesucht ist eine gerade Zahl, die **nicht** durch $4$ teilbar ist.'
  - typ: text
    label: 'c) Begründung'
    muster: |
      Ist $n$ durch $4$ teilbar, dann ist $n = 4k$ mit einer ganzen Zahl $k$. Also $n = 2\cdot(2k)$, und $n$ ist durch $2$ teilbar, das heißt gerade.
hinweise:
  - 'Die Umkehrung vertauscht Voraussetzung und Folgerung. Sie lautet „Wenn gerade, dann durch $4$ teilbar“.'
  - 'Für c) schreib eine durch $4$ teilbare Zahl als $n = 4k$ und forme so um, dass ein Faktor $2$ sichtbar wird.'
loesung: |
  Ansatz: Wir prüfen die Aussage allgemein und die Umkehrung mit einem Gegenbeispiel.
  ---
  a) Wahr. Jede durch $4$ teilbare Zahl ist auch durch $2$ teilbar.
  ---
  b) Umkehrung: „Wenn eine ganze Zahl gerade ist, dann ist sie durch $4$ teilbar.“ Gegenbeispiel: $6$ ist gerade, aber $6 : 4 = 1{,}5$. Die Umkehrung ist also falsch.
  ---
  c) Ist $n = 4k$ mit ganzem $k$, dann ist $n = 2\cdot(2k)$. Weil $2k$ eine ganze Zahl ist, ist $n$ gerade.
  Diese Begründung funktioniert für jedes $k$ gleichzeitig. Deshalb beweist sie die Aussage für alle durch $4$ teilbaren Zahlen.
```

```aufgabe
id: za-mengen-teiler
titel: Zwei beschriebene Mengen verknüpfen
niveau: 3
lernziel: 1
kompetenz: rechnen
angabe: |
  Gegeben sind
  $$A = \{x \in \Z \mid x^2 \le 9\} \qquad\text{und}\qquad B = \{x \in \N \mid x \text{ ist ein Teiler von } 12\}.$$
  Ein Teiler von $12$ ist eine Zahl, durch die man $12$ ohne Rest teilen kann. Bestimme $A \cap B$ und $A \setminus B$.
teile:
  - typ: menge
    label: '$A \cap B$'
    loesung: ["1", "2", "3"]
    fehler:
      - wert: ["0", "1", "2", "3"]
        meldung: 'Die $0$ liegt in $A$, aber man kann $12$ nicht durch $0$ teilen. Also ist $0$ kein Teiler von $12$.'
      - wert: ["1", "2"]
        meldung: 'Prüfe die $3$ noch einmal: $3^2 = 9 \le 9$, und $12 : 3 = 4$.'
  - typ: menge
    label: '$A \setminus B$'
    loesung: ["-3", "-2", "-1", "0"]
    fehler:
      - wert: ["-3", "-2", "-1"]
        meldung: 'Die $0$ liegt in $A$, denn $0^2 = 0 \le 9$. In $B$ liegt sie nicht. Also gehört sie zu $A \setminus B$.'
      - wert: ["4", "6", "12"]
        meldung: 'Das ist $B \setminus A$. Gefragt sind die Elemente von $A$, die nicht in $B$ liegen.'
hinweise:
  - 'Zähle beide Mengen zuerst auf. Für $A$: Welche ganzen Zahlen haben ein Quadrat von höchstens $9$? Denk auch an negative Zahlen.'
  - 'Für $B$: Teste $1, 2, 3, \dots, 12$ einzeln. Danach vergleichst du die beiden Listen.'
loesung: |
  Ansatz: Wir schreiben beide Mengen aufzählend hin und vergleichen dann Element für Element.
  ---
  $A$: Es ist $(\pm 3)^2 = 9$, $(\pm 4)^2 = 16 > 9$. Also $A = \{-3, -2, -1, 0, 1, 2, 3\}$.
  ---
  $B$: $12$ ist ohne Rest durch $1, 2, 3, 4, 6, 12$ teilbar. Also $B = \{1, 2, 3, 4, 6, 12\}$.
  ---
  Gemeinsam sind $1, 2, 3$: $A \cap B = \{1, 2, 3\}$. In $A$, aber nicht in $B$: $A \setminus B = \{-3, -2, -1, 0\}$.
  Kontrolle: $A \cap B$ und $A \setminus B$ ergeben zusammen genau $A$ mit seinen $7$ Elementen.
```

## Die Zahlenmengen N, Z, Q und R

```aufgabe
id: za-check-natuerlich-minus
titel: Reichen die Zählzahlen?
niveau: 1
art: check
angabe: |
  Die Zählzahlen $0, 1, 2, 3, \dots$ heißen natürliche Zahlen. Gibt es eine natürliche Zahl $x$ mit $x + 5 = 2$?
  Vorwissen: Vorzeichen aus [1.1 Grundrechenarten](/lernen/mathe3/zahlen/grundrechenarten-vorzeichen-klammern-und-rechenreihenfolge).
teile:
  - typ: auswahl
    optionen:
      - 'Ja, $x = 3$.'
      - 'Ja, $x = -3$.'
      - 'Nein, die Lösung $-3$ ist keine natürliche Zahl.'
    richtig: [2]
    fehler:
      - wert: 0
        meldung: 'Probe: $3 + 5 = 8$, nicht $2$.'
      - wert: 1
        meldung: '$-3 + 5 = 2$ stimmt. Aber ist $-3$ eine der Zählzahlen $0, 1, 2, 3, \dots$?'
hinweise:
  - 'Welche Zahl muss man zu $5$ addieren, um $2$ zu erhalten? Ist sie eine Zählzahl?'
loesung: |
  Die Gleichung verlangt $x = 2 - 5 = -3$. Probe: $-3 + 5 = 2$.
  ---
  $-3$ ist aber keine Zählzahl. Mit natürlichen Zahlen allein ist die Gleichung also unlösbar. Genau deshalb erweitert man die Zahlen.
```

Die Zahlen, mit denen wir rechnen, sind in mehreren Stufen entstanden. Jede Stufe hat eine Lücke der vorigen
geschlossen. Mit den Zählzahlen kann man zählen, aber $x + 5 = 2$ nicht lösen: Dafür braucht man negative Zahlen.
Mit ganzen Zahlen kann man $3x = 2$ nicht lösen: Dafür braucht man Brüche. Und die Gleichung $x^2 = 2$ hat nicht
einmal unter den Brüchen eine Lösung. Für sie braucht man die reellen Zahlen. Bei jeder Erweiterung bleiben alle
alten Zahlen und alle alten Rechenregeln erhalten.

### Die vier Zahlenmengen

:::definition[Die vier Zahlenmengen]
- **Natürliche Zahlen:** $\N = \{0, 1, 2, 3, \dots\}$, die Zählzahlen einschließlich der $0$.
- **Ganze Zahlen:** $\Z = \{\dots, -2, -1, 0, 1, 2, \dots\}$. Das sind alle Differenzen $m - n$ zweier natürlicher Zahlen $m$ und $n$.
- **Rationale Zahlen:** $\Q = \left\{ \tfrac{a}{b} \;\middle|\; a, b \in \Z,\ b \neq 0 \right\}$, also alle Brüche aus ganzen Zahlen mit einem Nenner, der nicht null ist.
- **Reelle Zahlen:** $\R$ enthält die rationalen Zahlen und zusätzlich die **irrationalen** Zahlen. Das sind Zahlen auf der Zahlengeraden, die sich nicht als Bruch ganzer Zahlen schreiben lassen, zum Beispiel $\sqrt2$.

Es gilt die Kette von Teilmengen $\N \subset \Z \subset \Q \subset \R$.
:::

Die Buchstaben merkt man sich so: $\N$ für **n**atürlich, $\Z$ für **Z**ahlen (von der ganzen Zahlenreihe), $\Q$
für **Q**uotient (Bruch) und $\R$ für **r**eell. Das Zeichen $\subset$ bedeutet „ist Teilmenge von“, wie in
[1.2 Mengen und Aussagen](/lernen/mathe3/zahlen/mengen-und-aussagen-die-sprache-der-mathematik).

In Österreich zählt man die $0$ zu den natürlichen Zahlen. Manche Bücher beginnen bei $1$ und schreiben für
$\{0, 1, 2, \dots\}$ dann $\N_0$. Wenn es in einer Aufgabe darauf ankommt, sag dazu, welche Festlegung du verwendest.
Die natürlichen Zahlen ohne die Null schreibt man $\N^*$ oder $\N_{>0}$.

```plot
x: [-3, 3]
y: [-2.2, 2.2]
gleich: true
hoehe: 260
kurven:
  - { x: "2.8*cos(t)", y: "2*sin(t)", t: [0, "2*pi"], label: "R", farbe: 3 }
  - { x: "-0.5 + 2.1*cos(t)", y: "1.55*sin(t)", t: [0, "2*pi"], label: "Q", farbe: 1 }
  - { x: "-1 + 1.45*cos(t)", y: "1.1*sin(t)", t: [0, "2*pi"], label: "Z", farbe: 2 }
  - { x: "-1.4 + 0.8*cos(t)", y: "0.65*sin(t)", t: [0, "2*pi"], label: "N", farbe: 0 }
punkte:
  - { x: -1.4, y: 0, label: "3", farbe: 0 }
  - { x: -0.25, y: 0.3, label: "−2", farbe: 2 }
  - { x: 1, y: 0.4, label: "3/4", farbe: 1 }
  - { x: 2.1, y: 0, label: "√2", farbe: 3 }
beschriftung: Jede Zahlenmenge steckt in der nächstgrößeren. Die 3 liegt schon in N, die −2 erst ab Z, der Bruch 3/4 erst ab Q und √2 erst in R.
```

Ein Bruch hat viele Schreibweisen: $\tfrac12 = \tfrac24 = \tfrac{-3}{-6}$. Woran erkennt man, dass zwei Brüche
dieselbe Zahl bezeichnen? Man multipliziert „über Kreuz“:
$$\frac{a}{b} = \frac{c}{d} \quad\text{genau dann, wenn}\quad a\cdot d = b\cdot c \qquad (b \neq 0,\ d \neq 0).$$
Dabei sind $a$ und $c$ die Zähler, $b$ und $d$ die Nenner. Zum Beispiel ist $\tfrac{6}{8} = \tfrac{9}{12}$, denn
$6\cdot 12 = 72$ und $8\cdot 9 = 72$. Dagegen ist $\tfrac{2}{3} \neq \tfrac{3}{4}$, denn $2\cdot 4 = 8$, aber $3\cdot 3 = 9$.

Jede ganze Zahl ist auch ein Bruch: $5 = \tfrac51$ und $-2 = \tfrac{-2}{1}$. Deshalb ist $\Z \subset \Q$. Die
irrationalen Zahlen lernst du in [1.7 Dezimaldarstellung](/lernen/mathe3/zahlen/dezimaldarstellung-rationale-und-irrationale-zahlen)
genauer kennen. Das bekannteste Beispiel ist $\sqrt2$, die Zahl, deren Quadrat $2$ ergibt.

```plot
x: [-2.6, 3.6]
y: [-1, 1]
hoehe: 150
punkte:
  - { x: -2, y: 0, label: "−2", farbe: 0 }
  - { x: -0.75, y: 0, label: "−3/4", farbe: 1 }
  - { x: 0, y: 0, label: "0", farbe: 0 }
  - { x: 1, y: 0, label: "1", farbe: 0 }
  - { x: "sqrt(2)", y: 0, label: "√2", farbe: 2 }
  - { x: "1/3+2", y: 0, label: "7/3", farbe: 1 }
  - { x: "pi", y: 0, label: "π", farbe: 2 }
beschriftung: Die Zahlengerade mit ganzen Zahlen (blau), Brüchen (orange) und irrationalen Zahlen (grün). Jede reelle Zahl entspricht genau einem Punkt der Geraden, und jeder Punkt genau einer reellen Zahl.
```

### Abgeschlossenheit

Wenn man zwei natürliche Zahlen addiert, kommt immer wieder eine natürliche Zahl heraus. Beim Subtrahieren stimmt das
nicht: $2 - 5 = -3$. Diese Beobachtung bekommt einen Namen.

:::definition[Abgeschlossenheit]
Eine Zahlenmenge $M$ heißt **abgeschlossen** bezüglich einer Rechenart, wenn für **alle** Zahlen $a$ und $b$ aus $M$
auch das Ergebnis wieder in $M$ liegt. Bei der Division verlangt man das nur für $b \neq 0$, weil man durch $0$
nie teilen darf.
:::

**Beispiel:** $\N$ ist abgeschlossen bezüglich der Addition. Die Summe zweier Zählzahlen ist wieder eine Zählzahl.
**Nichtbeispiel:** $\N$ ist **nicht** abgeschlossen bezüglich der Subtraktion, denn $2 - 5 = -3 \notin \N$.

Aus der Definition folgt, wie man vorgeht. Das Wort „alle“ ist dabei der Schlüssel, siehe
[1.2 Mengen und Aussagen](/lernen/mathe3/zahlen/mengen-und-aussagen-die-sprache-der-mathematik).

- **Nicht abgeschlossen** zeigt man mit **einem einzigen Gegenbeispiel**: konkrete Zahlen $a$, $b$ aus $M$, deren Ergebnis nicht in $M$ liegt.
- **Abgeschlossen** zeigt man mit einem **allgemeinen Argument**, das für alle $a$ und $b$ funktioniert. Beispiele genügen hier nicht.

:::beispiel[Gerade Zahlen und Addition]
Ist die Menge der geraden Zahlen $G = \{\dots, -4, -2, 0, 2, 4, \dots\}$ bezüglich der Addition abgeschlossen?

1. Vermutung durch Probieren: $2 + 4 = 6$, $-2 + 8 = 6$. Das Ergebnis ist jedes Mal gerade.
2. Allgemeines Argument: Jede gerade Zahl hat die Form $2k$ mit einer ganzen Zahl $k$. Seien also $a = 2k$ und $b = 2l$.
3. Dann ist $a + b = 2k + 2l = 2\cdot(k + l)$ nach dem Distributivgesetz. Weil $k + l$ eine ganze Zahl ist, ist $a + b$ gerade.

Damit ist $G$ bezüglich der Addition abgeschlossen. Schritt 1 allein wäre kein Beweis gewesen.
:::

:::beispiel[Gutscheine zu 5 Euro]
Ein Geschäft verkauft nur Gutscheine im Wert von $5$, $10$, $15$, $20, \dots$ Euro, also Vielfache von $5$ Euro.

1. **Addition:** Zwei Gutscheine zu $5k$ Euro und $5l$ Euro sind zusammen $5k + 5l = 5(k + l)$ Euro wert. Das ist wieder ein Vielfaches von $5$ Euro. Abgeschlossen.
2. **Subtraktion:** $5 - 10 = -5$. Einen Gutschein über $-5$ Euro gibt es nicht. Nicht abgeschlossen.
3. **Division:** $5 : 10 = 0{,}5$. Auch das ist kein Gutscheinwert. Nicht abgeschlossen.
:::

### Welche Zahlenmenge ist wobei abgeschlossen?

Die folgende Tabelle beantwortet die Frage für alle vier Mengen und alle vier Grundrechenarten. Für jedes „nein“
steht ein Gegenbeispiel dabei.

| | $+$ | $-$ | $\cdot$ | $:$ (nicht durch $0$) |
|---|---|---|---|---|
| $\N$ | ja | nein, $2 - 5 = -3$ | ja | nein, $1 : 2 = \tfrac12$. |
| $\Z$ | ja | ja | ja | nein, $1 : 2 = \tfrac12$. |
| $\Q$ | ja | ja | ja | ja. |
| $\R$ | ja | ja | ja | ja. |

```aufgabe
id: za-check-tabelle-lesen
titel: Die Tabelle lesen
niveau: 1
art: check
angabe: |
  In welcher der Mengen $\N$, $\Z$, $\Q$ kann man $7 - 9$ **und** $7 : 2$ ausrechnen, ohne die Menge zu verlassen?
teile:
  - typ: auswahl
    optionen: ['in $\N$', 'in $\Z$', 'in $\Q$']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: '$7 - 9 = -2$ ist keine natürliche Zahl.'
      - wert: 1
        meldung: '$7 - 9 = -2$ ist ganz, aber $7 : 2 = 3{,}5$ nicht.'
hinweise:
  - 'Rechne beide Ergebnisse aus und prüfe, in welcher Menge sie zuerst vorkommen.'
loesung: |
  $7 - 9 = -2$ liegt in $\Z$, aber nicht in $\N$. $7 : 2 = \tfrac72$ liegt in $\Q$, aber nicht in $\Z$.
  ---
  Beide Ergebnisse liegen erst in $\Q$. Das passt zur Tabelle: Nur in $\Q$ und $\R$ sind alle vier Rechenarten möglich.
```

Warum ist $\Q$ bezüglich aller vier Grundrechenarten abgeschlossen? Seien $\tfrac ab$ und $\tfrac cd$ zwei Brüche mit
ganzen Zahlen $a, b, c, d$ und $b \neq 0$, $d \neq 0$. Die Regeln aus [1.5 Bruchrechnen](/lernen/mathe3/zahlen/bruchrechnen) ergeben
$$\frac ab + \frac cd = \frac{ad + bc}{bd}, \qquad \frac ab - \frac cd = \frac{ad - bc}{bd}, \qquad \frac ab \cdot \frac cd = \frac{ac}{bd}, \qquad \frac ab : \frac cd = \frac{ad}{bc}\ \ (c \neq 0).$$
Zähler und Nenner der Ergebnisse sind wieder ganze Zahlen, weil $\Z$ bezüglich $+$, $-$ und $\cdot$ abgeschlossen ist.
Kein Nenner ist null, denn ein Produkt ganzer Zahlen ist nur dann null, wenn ein Faktor null ist. Also ist jedes
Ergebnis wieder ein Bruch. Für $\R$ gehört die Abgeschlossenheit zu dem, was man unter den reellen Zahlen versteht.

:::merke[Abgeschlossenheit prüfen]
1. Vermutung aufstellen: Wo könnte man aus der Menge „herausfallen“? Minus kann negative Zahlen erzeugen, Division kann Brüche erzeugen.
2. Wenn nicht abgeschlossen: **ein** konkretes Gegenbeispiel angeben und zeigen, dass das Ergebnis nicht in der Menge liegt.
3. Wenn abgeschlossen: allgemein mit Variablen argumentieren, zum Beispiel $a = 2k$, $b = 2l$.
:::

:::achtung[Ein Beispiel ist kein Beweis]
**Falsch:** „$\Z$ ist bezüglich der Division abgeschlossen, denn $12 : 4 = 3$ ist ganz.“

**Richtig:** Ein passendes Beispiel beweist nichts über **alle** Zahlenpaare. Ein einziges Gegenbeispiel genügt
zum Widerlegen: $1 : 2 = \tfrac12 \notin \Z$. Also ist $\Z$ bezüglich der Division **nicht** abgeschlossen.
:::

:::achtung[Durch null zählt nicht als Gegenbeispiel]
**Falsch:** „$\Q$ ist bezüglich der Division nicht abgeschlossen, denn $1 : 0$ liegt nicht in $\Q$.“

**Richtig:** Die Division durch $0$ ist in der Definition der Abgeschlossenheit ausdrücklich ausgenommen. Sie ist
überhaupt nicht erklärt, siehe [1.1 Grundrechenarten](/lernen/mathe3/zahlen/grundrechenarten-vorzeichen-klammern-und-rechenreihenfolge).
Für jeden Divisor ungleich $0$ ist der Quotient zweier Brüche wieder ein Bruch.
:::

```reflexion
frage: 'Warum ist $\Z$ bezüglich der Subtraktion abgeschlossen, $\N$ aber nicht? Was hat das mit der Gleichung $x + 5 = 2$ zu tun?'
antwort: |
  In $\N$ fehlen die negativen Zahlen. Zieht man eine größere von einer kleineren Zahl ab, fällt man aus $\N$ heraus, etwa $2 - 5 = -3$.
  In $\Z$ sind die negativen Zahlen dabei, also landet jede Differenz wieder in $\Z$.
  Die Gleichung $x + 5 = 2$ fragt genau nach der Differenz $2 - 5$. Dass sie in $\N$ unlösbar ist, ist also dieselbe Lücke.
  Die ganzen Zahlen wurden gerade dafür eingeführt, diese Lücke zu schließen.
```

### Übungen

```aufgabe
id: za-abgeschlossen
titel: Abgeschlossenheit erkennen
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Welche der folgenden Aussagen sind wahr? (Division jeweils nur durch Zahlen ungleich $0$.)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$\N$ ist bezüglich der Multiplikation abgeschlossen.'
      - '$\N$ ist bezüglich der Subtraktion abgeschlossen.'
      - '$\Z$ ist bezüglich der Division abgeschlossen.'
      - '$\Q$ ist bezüglich der Division abgeschlossen.'
      - 'Die Menge der ungeraden Zahlen ist bezüglich der Addition abgeschlossen.'
    richtig: [0, 3]
    fehler:
      - wert: [0, 3, 4]
        meldung: 'Teste die ungeraden Zahlen: $1 + 3 = 4$. Ist $4$ ungerade?'
      - wert: [0, 2, 3]
        meldung: '$1 : 2 = \tfrac12$ ist keine ganze Zahl. Ein solches Gegenbeispiel genügt.'
      - wert: [0, 1, 3]
        meldung: '$2 - 5 = -3$ ist keine natürliche Zahl.'
hinweise:
  - Suche für jede Aussage zuerst ein Gegenbeispiel. Findest du keines, überlege eine allgemeine Begründung.
  - 'Typische Gegenbeispiele: eine kleinere minus eine größere Zahl, $1 : 2$, zwei ungerade Zahlen addieren.'
loesung: |
  Ansatz: Für jedes „nein“ suchen wir ein Gegenbeispiel. Für jedes „ja“ brauchen wir eine allgemeine Begründung.
  ---
  Produkt zweier natürlicher Zahlen ist natürlich: wahr. $\N$ und Subtraktion: $2 - 5 = -3 \notin \N$, falsch.
  ---
  $\Z$ und Division: $1 : 2 = \tfrac12 \notin \Z$, falsch. $\Q$ und Division: $\tfrac ab : \tfrac cd = \tfrac{ad}{bc}$ ist wieder ein Bruch, wahr.
  ---
  Ungerade plus ungerade: $1 + 3 = 4$ ist gerade, also falsch. Wahr sind nur die erste und die vierte Aussage.
```

```aufgabe
id: za-mengen-zuordnen
titel: In welchen Mengen liegt die Zahl?
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Kreuze jeweils **alle** Zahlenmengen an, in denen die Zahl liegt.
teile:
  - typ: auswahl
    label: '$-4$ liegt in'
    mehrfach: true
    optionen: ['$\N$', '$\Z$', '$\Q$', '$\R$']
    richtig: [1, 2, 3]
    fehler:
      - wert: [1]
        meldung: 'Die Mengen sind ineinander geschachtelt: $\Z \subset \Q \subset \R$. Was in $\Z$ liegt, liegt auch in den größeren Mengen.'
  - typ: auswahl
    label: '$\tfrac34$ liegt in'
    mehrfach: true
    optionen: ['$\N$', '$\Z$', '$\Q$', '$\R$']
    richtig: [2, 3]
    fehler:
      - wert: [2]
        meldung: 'Jede rationale Zahl ist auch reell, denn $\Q \subset \R$.'
  - typ: auswahl
    label: '$0$ liegt in'
    mehrfach: true
    optionen: ['$\N$', '$\Z$', '$\Q$', '$\R$']
    richtig: [0, 1, 2, 3]
    fehler:
      - wert: [1, 2, 3]
        meldung: 'In diesem Kurs gilt $\N = \{0, 1, 2, \dots\}$. Die $0$ ist also eine natürliche Zahl.'
hinweise:
  - 'Suche zuerst die kleinste Menge, in der die Zahl liegt.'
  - 'Wegen $\N \subset \Z \subset \Q \subset \R$ liegt die Zahl dann auch in allen größeren Mengen.'
loesung: |
  Ansatz: Wir bestimmen die kleinste passende Menge und nehmen alle größeren dazu.
  ---
  $-4$ ist ganz, aber nicht natürlich: $\Z$, $\Q$, $\R$. $\tfrac34$ ist ein Bruch, aber nicht ganz: $\Q$, $\R$.
  ---
  $0$ ist eine natürliche Zahl: $\N$, $\Z$, $\Q$, $\R$.
```

```aufgabe
id: za-gegenbeispiele
titel: Das passende Gegenbeispiel
niveau: 2
lernziel: 2
kompetenz: begruenden
angabe: |
  Jede Behauptung ist falsch. Wähle jeweils die Rechnung, die sie widerlegt.

  a) „Die Differenz zweier natürlicher Zahlen ist eine natürliche Zahl.“

  b) „Der Quotient zweier ganzer Zahlen (Divisor ungleich $0$) ist eine ganze Zahl.“

  c) „Die Summe zweier ungerader Zahlen ist ungerade.“
teile:
  - typ: auswahl
    label: 'a)'
    optionen: ['$7 - 3 = 4$', '$3 - 7 = -4$', '$5 - 5 = 0$']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: '$4$ ist natürlich. Dieses Beispiel bestätigt die Behauptung, es widerlegt sie nicht.'
      - wert: 2
        meldung: '$0$ gehört zu $\N$. Gesucht ist ein Ergebnis, das nicht in $\N$ liegt.'
  - typ: auswahl
    label: 'b)'
    optionen: ['$8 : 4 = 2$', '$-6 : 3 = -2$', '$4 : 8 = \tfrac12$']
    richtig: [2]
    fehler:
      - wert: 1
        meldung: '$-2$ ist eine ganze Zahl. Negative Zahlen gehören zu $\Z$.'
      - wert: 0
        meldung: '$2$ ist ganz. Das Beispiel passt zur Behauptung.'
  - typ: auswahl
    label: 'c)'
    optionen: ['$3 + 5 = 8$', '$2 + 4 = 6$', '$3\cdot 5 = 15$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$2$ und $4$ sind gerade. Die Behauptung spricht aber über zwei **ungerade** Zahlen.'
      - wert: 2
        meldung: 'Das ist ein Produkt. Die Behauptung spricht über die **Summe**.'
hinweise:
  - 'Ein Gegenbeispiel muss alle Voraussetzungen der Behauptung erfüllen, aber ein anderes Ergebnis liefern.'
  - 'Prüfe bei jeder Option zwei Dinge: Passen die Ausgangszahlen und die Rechenart? Liegt das Ergebnis außerhalb?'
loesung: |
  Ansatz: Ein Gegenbeispiel erfüllt alle Voraussetzungen der Behauptung, aber nicht ihre Folgerung.
  ---
  a) $3$ und $7$ sind natürlich, $3 - 7 = -4$ ist es nicht. b) $4$ und $8$ sind ganz, $\tfrac12$ ist es nicht.
  ---
  c) $3$ und $5$ sind ungerade, ihre Summe $8$ ist gerade. Allgemein ist $(2k + 1) + (2l + 1) = 2(k + l + 1)$ immer gerade.
```

```aufgabe
id: za-bruch-gleich
titel: Gleiche Brüche erkennen und ergänzen
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  a) Bestimme $x$ so, dass $\dfrac46 = \dfrac{x}{15}$ gilt.

  b) Welche Brüche sind gleich $-\dfrac34$?
teile:
  - typ: zahl
    label: 'a) $x =$'
    loesung: "4*15/6"
    fehler:
      - wert: "13"
        meldung: |
          Du hast zum Zähler dasselbe addiert wie zum Nenner ($15 - 6 = 9$). Brüche bleiben aber nur gleich,
          wenn man Zähler und Nenner mit derselben Zahl **multipliziert**. Prüfe mit der Kreuzprobe.
  - typ: auswahl
    label: 'b)'
    mehrfach: true
    optionen: ['$\dfrac{3}{-4}$', '$\dfrac{-6}{8}$', '$\dfrac{3}{4}$', '$\dfrac{-4}{3}$', '$\dfrac{-3}{-4}$']
    richtig: [0, 1]
    fehler:
      - wert: [0, 1, 4]
        meldung: '$\tfrac{-3}{-4}$ hat zwei Minuszeichen. Minus durch minus ergibt plus, also ist das $+\tfrac34$.'
      - wert: [1]
        meldung: '$\tfrac{3}{-4}$: Plus durch minus ergibt minus. Auch dieser Bruch ist negativ.'
hinweise:
  - 'Kreuzprobe: $\tfrac ab = \tfrac cd$ genau dann, wenn $ad = bc$.'
  - 'Bei a) gilt $4\cdot 15 = 6\cdot x$. Bei b) achte auf die Anzahl der Minuszeichen.'
loesung: |
  Ansatz: Zwei Brüche sind gleich, wenn die Kreuzprodukte gleich sind.
  ---
  a) $4\cdot 15 = 6\cdot x$, also $60 = 6x$ und $x = 10$. Probe: $\tfrac{10}{15}$ und $\tfrac46$ sind beide gleich $\tfrac23$.
  ---
  b) $\tfrac{3}{-4} = -\tfrac34$ (ein Minuszeichen). $\tfrac{-6}{8} = -\tfrac34$ (mit $2$ gekürzt).
  ---
  $\tfrac34$ ist positiv, $\tfrac{-4}{3}$ hat Zähler und Nenner vertauscht und ist eine andere Zahl, und $\tfrac{-3}{-4} = \tfrac34$ ist positiv. Richtig sind die ersten beiden.
```

```aufgabe
id: za-vielfache-drei
titel: Die Vielfachen von 3
niveau: 2
lernziel: 2
kompetenz: begruenden
angabe: |
  $V = \{\dots, -6, -3, 0, 3, 6, 9, \dots\}$ ist die Menge aller ganzzahligen Vielfachen von $3$, also aller Zahlen $3k$ mit $k \in \Z$.
  Bezüglich welcher Rechenarten ist $V$ abgeschlossen? (Division nur durch Zahlen ungleich $0$.)
teile:
  - typ: auswahl
    mehrfach: true
    optionen: ['$+$', '$-$', '$\cdot$', '$:$']
    richtig: [0, 1, 2]
    fehler:
      - wert: [0, 1, 2, 3]
        meldung: 'Teste die Division mit zwei Zahlen aus $V$: $3 : 6 = ?$ Liegt das Ergebnis in $V$?'
      - wert: [0, 2]
        meldung: 'Teste die Subtraktion: $3 - 9 = -6$. Negative Vielfache von $3$ gehören zu $V$.'
hinweise:
  - 'Schreib zwei beliebige Elemente als $a = 3k$ und $b = 3l$ mit ganzen Zahlen $k$, $l$.'
  - 'Forme $a + b$, $a - b$ und $a\cdot b$ so um, dass vorne ein Faktor $3$ steht. Für die Division such ein Gegenbeispiel.'
gefuehrt:
  - text: 'Die Zahl $12$ liegt in $V$. Für welches $k$ ist $12 = 3k$?'
    teil: { typ: zahl, loesung: "12/3" }
    erklaerung: '$12 = 3\cdot 4$, also $k = 4$.'
  - text: 'Auch $21$ liegt in $V$. Es ist $12 + 21 = 3\cdot m$. Wie groß ist $m$?'
    teil:
      typ: zahl
      loesung: "(12 + 21)/3"
      fehler:
        - wert: "33"
          meldung: 'Das ist die Summe selbst. Gesucht ist die Zahl $m$, mit der $3$ multipliziert $33$ ergibt.'
    erklaerung: '$12 + 21 = 33 = 3\cdot 11$. Und $11 = 4 + 7$ ist die Summe der beiden $k$-Werte.'
  - text: 'Allgemein: Für $a = 3k$ und $b = 3l$ ist $a + b = 3k + 3l = 3(k + l)$. Überlege, warum das ein Vielfaches von $3$ ist.'
    erklaerung: '$k + l$ ist eine ganze Zahl, also ist $3(k + l)$ ein Vielfaches von $3$. Genauso $a - b = 3(k - l)$ und $a\cdot b = 3\cdot(3kl)$.'
  - text: 'Jetzt die Division. Was ergibt $3 : 6$?'
    teil:
      typ: zahl
      loesung: "3/6"
    erklaerung: '$3 : 6 = \tfrac12$. Das ist nicht einmal eine ganze Zahl, also kein Vielfaches von $3$. Die Division führt aus $V$ heraus.'
loesung: |
  Ansatz: Wir schreiben zwei beliebige Elemente als $a = 3k$ und $b = 3l$ mit ganzen Zahlen $k$, $l$.
  ---
  $a + b = 3(k + l)$, $a - b = 3(k - l)$ und $a\cdot b = 3\cdot(3kl)$. Jedes Mal steht vorne der Faktor $3$ und dahinter eine ganze Zahl. Also abgeschlossen.
  ---
  Division: $3 : 6 = \tfrac12 \notin V$. Ein Gegenbeispiel genügt, also nicht abgeschlossen.
  Antwort: abgeschlossen bezüglich $+$, $-$ und $\cdot$, nicht bezüglich $:$.
```

```aufgabe
id: za-kleinste-zahlenmenge
titel: Welche Zahlenmenge reicht für die Lösung?
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Gib für jede Gleichung die **kleinste** der Mengen $\N$, $\Z$, $\Q$, $\R$ an, in der sie eine Lösung hat.

  a) $2x + 1 = 9$, b) $x + 7 = 3$, c) $4x = 6$, d) $x^2 = 5$
teile:
  - typ: auswahl
    label: 'a)'
    optionen: ['$\N$', '$\Z$', '$\Q$', '$\R$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Rechne die Lösung aus. Ist sie negativ?'
  - typ: auswahl
    label: 'b)'
    optionen: ['$\N$', '$\Z$', '$\Q$', '$\R$']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Die Lösung ist $3 - 7$. Ist das eine natürliche Zahl?'
      - wert: 2
        meldung: '$\Q$ reicht, aber gesucht ist die **kleinste** passende Menge. Die Lösung ist eine ganze Zahl.'
  - typ: auswahl
    label: 'c)'
    optionen: ['$\N$', '$\Z$', '$\Q$', '$\R$']
    richtig: [2]
    fehler:
      - wert: 1
        meldung: '$x = 6 : 4$. Geht diese Division ohne Rest auf?'
  - typ: auswahl
    label: 'd)'
    optionen: ['$\N$', '$\Z$', '$\Q$', '$\R$']
    richtig: [3]
    fehler:
      - wert: 2
        meldung: 'Die Lösungen sind $\sqrt5$ und $-\sqrt5$, also die Zahl, deren Quadrat $5$ ist, und ihr Negatives. Wie $\sqrt2$ ist $\sqrt5$ kein Bruch.'
hinweise:
  - 'Löse jede Gleichung zuerst und schau dir dann die Lösung an.'
  - 'Für d): $\sqrt5$ ist wie $\sqrt2$ irrational, weil $5$ keine Quadratzahl ist.'
loesung: |
  Ansatz: Wir lösen jede Gleichung und prüfen, in welcher Menge die Lösung zuerst vorkommt.
  ---
  a) $2x = 8$, $x = 4 \in \N$. b) $x = 3 - 7 = -4$, also $\Z$.
  ---
  c) $x = \tfrac64 = \tfrac32$, keine ganze Zahl, also $\Q$. d) $x = \sqrt5$ oder $x = -\sqrt5$, kein Bruch, also erst $\R$. Dass $\sqrt5$ kein Bruch ist, zeigt [1.8 Beweisen](/lernen/mathe3/zahlen/beweisen-direkt-durch-kontraposition-und-durch-widerspruch).
  Jede Erweiterung schließt also genau eine Art von Lücke.
```

```aufgabe
id: za-quadratzahlen-abgeschlossen
titel: Quadratzahlen und Abgeschlossenheit
niveau: 3
lernziel: 2
kompetenz: begruenden
angabe: |
  $Q_2 = \{0, 1, 4, 9, 16, 25, \dots\}$ ist die Menge der Quadratzahlen, also aller Zahlen $n^2$ mit $n \in \N$.

  a) Ist $Q_2$ bezüglich der Addition abgeschlossen?

  b) Ist $Q_2$ bezüglich der Multiplikation abgeschlossen?

  c) Begründe deine Antwort zu b) allgemein.
teile:
  - typ: auswahl
    label: 'a) Addition'
    optionen: ['abgeschlossen', 'nicht abgeschlossen']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Probiere $1 + 4$. Ist das Ergebnis eine Quadratzahl?'
  - typ: auswahl
    label: 'b) Multiplikation'
    optionen: ['abgeschlossen', 'nicht abgeschlossen']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Probiere $4\cdot 9 = 36$ und $9\cdot 16 = 144$. Erkennst du ein Muster?'
  - typ: text
    label: 'c) Begründung'
    muster: |
      Zwei Quadratzahlen sind $a = m^2$ und $b = n^2$ mit $m, n \in \N$. Dann ist $a\cdot b = m^2 n^2 = (mn)^2$.
      Weil $mn$ wieder eine natürliche Zahl ist, ist $a\cdot b$ eine Quadratzahl.
hinweise:
  - 'Für a) genügt ein Gegenbeispiel aus kleinen Quadratzahlen.'
  - 'Für c) schreib $a = m^2$ und $b = n^2$ und fasse $m^2\cdot n^2$ zu einem einzigen Quadrat zusammen.'
loesung: |
  Ansatz: Für „nein“ ein Gegenbeispiel, für „ja“ ein allgemeines Argument mit Variablen.
  ---
  a) $1 + 4 = 5$ ist keine Quadratzahl, denn $2^2 = 4 < 5 < 9 = 3^2$. Nicht abgeschlossen.
  ---
  b) und c) Seien $a = m^2$ und $b = n^2$. Dann gilt $a\cdot b = m\cdot m\cdot n\cdot n = (m\cdot n)\cdot(m\cdot n) = (mn)^2$.
  Dabei haben wir nur das Kommutativ- und das Assoziativgesetz benutzt.
  ---
  Weil $mn \in \N$ gilt, ist $a\cdot b$ eine Quadratzahl. Also ist $Q_2$ bezüglich der Multiplikation abgeschlossen.
  Probe mit Zahlen: $4\cdot 9 = 36 = 6^2 = (2\cdot 3)^2$.
```

## Teilbarkeit, Primzahlen, ggT und kgV

```aufgabe
id: za-check-rest
titel: Division mit Rest
niveau: 1
art: check
angabe: |
  Du verteilst $17$ Äpfel gleichmäßig auf $5$ Körbe. Wie viele Äpfel bleiben übrig?
  Vorwissen: Division aus [1.1 Grundrechenarten](/lernen/mathe3/zahlen/grundrechenarten-vorzeichen-klammern-und-rechenreihenfolge).
teile:
  - typ: zahl
    label: 'Rest'
    loesung: "17 - 3*5"
    fehler:
      - wert: "3"
        meldung: '$3$ Äpfel kommen in jeden Korb. Gefragt ist aber, wie viele danach **übrig** bleiben.'
      - wert: "3.4"
        meldung: 'Äpfel teilt man hier nicht. Jeder Korb bekommt eine ganze Zahl von Äpfeln, und der Rest bleibt übrig.'
hinweise:
  - 'Wie viele Äpfel passen höchstens in jeden Korb, wenn alle gleich viele bekommen?'
loesung: |
  Jeder Korb bekommt $3$ Äpfel, denn $3\cdot 5 = 15 \le 17$, aber $4\cdot 5 = 20 > 17$.
  ---
  Übrig bleiben $17 - 15 = 2$ Äpfel. Man schreibt $17 = 3\cdot 5 + 2$.
```

Diese Lektion behandelt die ganzen Zahlen genauer: Wann geht eine Division ohne Rest auf? Aus welchen „Bausteinen“
ist eine Zahl zusammengesetzt? Du brauchst das an vielen Stellen. Beim Kürzen und beim Hauptnenner in
[1.5 Bruchrechnen](/lernen/mathe3/zahlen/bruchrechnen), beim Beweis, dass $\sqrt2$ kein Bruch ist, und in der
Informatik bei Resten, Prüfsummen und Verschlüsselung.

### Teiler und Division mit Rest

:::definition[Teiler]
Eine ganze Zahl $d$ **teilt** eine ganze Zahl $n$, wenn es eine ganze Zahl $k$ gibt mit $n = k\cdot d$.
Man schreibt $d \mid n$ und liest „$d$ teilt $n$“ oder „$d$ ist ein Teiler von $n$“.
:::

**Beispiel:** $3 \mid 12$, denn $12 = 4\cdot 3$. **Nichtbeispiel:** $5$ teilt $12$ nicht, denn $12 : 5 = 2{,}4$ ist
keine ganze Zahl. Man schreibt dafür $5 \nmid 12$. Jede Zahl $n$ hat die Teiler $1$ und $n$ selbst.

Geht eine Division nicht auf, bleibt ein **Rest**. Für natürliche Zahlen $n$ und $d \ge 1$ gibt es genau eine
Darstellung
$$n = q\cdot d + r \qquad\text{mit}\qquad 0 \le r < d.$$
Dabei ist $q$ der ganzzahlige Quotient und $r$ der Rest. Zum Beispiel ist $17 = 3\cdot 5 + 2$, also Quotient $3$ und
Rest $2$. In vielen Programmiersprachen liefert `17 % 5` genau diesen Rest $2$.

Eine Zahl heißt **gerade**, wenn sie durch $2$ teilbar ist, also die Form $n = 2k$ hat. Sonst lässt sie bei Division
durch $2$ den Rest $1$, hat also die Form $n = 2k + 1$, und heißt **ungerade**. Dabei ist $k$ eine ganze Zahl.

### Teilbarkeitsregeln

Für große Zahlen gibt es Abkürzungen, mit denen man ohne Division sieht, ob sie aufgeht.

:::merke[Teilbarkeitsregeln]
- Durch **2**: die letzte Ziffer ist gerade ($0, 2, 4, 6, 8$).
- Durch **5**: die letzte Ziffer ist $0$ oder $5$. Durch **10**: die letzte Ziffer ist $0$.
- Durch **4**: die aus den letzten beiden Ziffern gebildete Zahl ist durch $4$ teilbar.
- Durch **3**: die **Quersumme** (Summe aller Ziffern) ist durch $3$ teilbar.
- Durch **9**: die Quersumme ist durch $9$ teilbar.
:::

:::beispiel[Quersummenregel]
Ist $471$ durch $3$ teilbar? Durch $9$?

1. Quersumme: $4 + 7 + 1 = 12$.
2. $12$ ist durch $3$ teilbar, also ist $471$ durch $3$ teilbar. Kontrolle: $471 = 157\cdot 3$.
3. $12$ ist nicht durch $9$ teilbar, also ist $471$ nicht durch $9$ teilbar.

Warum funktioniert das? Es ist $471 = 4\cdot 100 + 7\cdot 10 + 1 = 4\cdot 99 + 7\cdot 9 + (4 + 7 + 1)$.
Die Teile $4\cdot 99$ und $7\cdot 9$ sind sicher durch $9$ und durch $3$ teilbar. Es kommt also nur auf die
Quersumme $4 + 7 + 1$ an.
:::

:::achtung[Die Quersummenregel gilt nicht für jede Zahl]
**Falsch:** „$31$ hat die Quersumme $4$, also ist $31$ durch $4$ teilbar.“

**Richtig:** Die Quersummenregel gilt nur für $3$ und $9$, weil $10 = 9 + 1$ ist. Für $4$ schaut man auf die letzten
beiden Ziffern. $31 : 4 = 7{,}75$, also ist $31$ nicht durch $4$ teilbar.
:::

### Primzahlen und Primfaktorzerlegung

:::definition[Primzahl]
Eine natürliche Zahl $p$ heißt **Primzahl**, wenn sie genau zwei verschiedene Teiler in $\N$ hat, nämlich $1$ und $p$.
:::

**Beispiele:** $2, 3, 5, 7, 11, 13, 17, 19, 23, 29$ sind die ersten zehn Primzahlen. $2$ ist die einzige gerade
Primzahl. **Nichtbeispiele:** $9$ ist keine Primzahl, denn $9 = 3\cdot 3$ hat den Teiler $3$. Die $1$ ist keine
Primzahl, denn sie hat nur einen einzigen Teiler. Auch $0$ ist keine Primzahl.

Zahlen ab $2$, die keine Primzahlen sind, heißen **zusammengesetzt**. Sie lassen sich in kleinere Faktoren zerlegen.
Zerlegt man so lange weiter, bis nur noch Primzahlen übrig sind, erhält man die **Primfaktorzerlegung**.

:::satz[Hauptsatz über die Primfaktorzerlegung]
Jede natürliche Zahl $n \ge 2$ lässt sich als Produkt von Primzahlen schreiben. Diese Zerlegung ist bis auf die
Reihenfolge der Faktoren eindeutig.
:::

:::beispiel[Die Primfaktorzerlegung von 360]
Man teilt immer wieder durch die kleinste Primzahl, die noch aufgeht.

1. $360 : 2 = 180$, $180 : 2 = 90$, $90 : 2 = 45$. Durch $2$ geht es jetzt nicht mehr, denn $45$ ist ungerade.
2. $45 : 3 = 15$, $15 : 3 = 5$. Die $5$ ist selbst eine Primzahl.
3. Gesammelt: dreimal die $2$, zweimal die $3$, einmal die $5$. Also $360 = 2\cdot 2\cdot 2\cdot 3\cdot 3\cdot 5 = 2^3\cdot 3^2\cdot 5$.

Die Hochzahl gibt an, wie oft ein Faktor vorkommt: $2^3 = 2\cdot 2\cdot 2$. Probe: $8\cdot 9\cdot 5 = 360$.
:::

:::achtung[Eine Zahl vorschnell für prim halten]
**Falsch:** „$51$ ist ungerade und endet nicht auf $5$, also ist $51$ eine Primzahl.“

**Richtig:** Die Quersumme von $51$ ist $5 + 1 = 6$, also ist $51$ durch $3$ teilbar: $51 = 3\cdot 17$.
Um zu prüfen, ob $n$ prim ist, testet man alle Primzahlen $p$ mit $p\cdot p \le n$. Bei $51$ sind das $2$, $3$, $5$ und $7$.
:::

### Größter gemeinsamer Teiler und kleinstes gemeinsames Vielfaches

Der **größte gemeinsame Teiler** $\operatorname{ggT}(a, b)$ ist die größte Zahl, die $a$ und $b$ beide teilt. Das
**kleinste gemeinsame Vielfache** $\operatorname{kgV}(a, b)$ ist die kleinste positive Zahl, die von $a$ und von $b$
geteilt wird. Zum Beispiel sind die Teiler von $12$: $1, 2, 3, 4, 6, 12$, und die von $18$: $1, 2, 3, 6, 9, 18$.
Gemeinsam sind $1, 2, 3, 6$, also $\operatorname{ggT}(12, 18) = 6$. Die Vielfachen von $12$ sind $12, 24, 36, 48, \dots$,
die von $18$ sind $18, 36, 54, \dots$. Das erste gemeinsame ist $36$, also $\operatorname{kgV}(12, 18) = 36$.

Für große Zahlen geht es schneller mit der Primfaktorzerlegung.

:::beispiel[ggT und kgV über die Primfaktoren]
Bestimme $\operatorname{ggT}(84, 90)$ und $\operatorname{kgV}(84, 90)$.

1. Zerlegen: $84 = 2^2\cdot 3\cdot 7$ und $90 = 2\cdot 3^2\cdot 5$.
2. Der ggT nimmt jede Primzahl, die in **beiden** vorkommt, mit der **kleineren** Hochzahl: $2^1$ und $3^1$. Also $\operatorname{ggT} = 2\cdot 3 = 6$.
3. Das kgV nimmt jede Primzahl, die in **mindestens einer** vorkommt, mit der **größeren** Hochzahl: $2^2$, $3^2$, $5$, $7$. Also $\operatorname{kgV} = 4\cdot 9\cdot 5\cdot 7 = 1260$.
4. Kontrolle: $\operatorname{ggT}\cdot\operatorname{kgV} = 6\cdot 1260 = 7560$ und $84\cdot 90 = 7560$. Das gilt für je zwei positive Zahlen.
:::

:::beispiel[Zwei Buslinien]
Linie A fährt alle $12$ Minuten von der Haltestelle ab, Linie B alle $18$ Minuten. Um 7:00 Uhr fahren beide gleichzeitig.
Wann fahren sie das nächste Mal gleichzeitig?

1. Linie A fährt nach $12, 24, 36, \dots$ Minuten, Linie B nach $18, 36, \dots$ Minuten. Gesucht ist das kleinste gemeinsame Vielfache.
2. $\operatorname{kgV}(12, 18) = 36$ Minuten.
3. Antwort: um 7:36 Uhr fahren beide wieder gleichzeitig.
:::

:::achtung[ggT und kgV verwechselt oder einfach multipliziert]
**Falsch:** $\operatorname{kgV}(4, 6) = 4\cdot 6 = 24$.

**Richtig:** Das Produkt ist zwar ein gemeinsames Vielfaches, aber nicht immer das kleinste. Die Vielfachen von $4$
sind $4, 8, 12, \dots$, die von $6$ sind $6, 12, \dots$. Also $\operatorname{kgV}(4, 6) = 12$. Das Produkt ist nur dann
das kgV, wenn der ggT gleich $1$ ist.
:::

```reflexion
frage: 'Warum zählt man die $1$ nicht zu den Primzahlen? Denk an den Satz über die Eindeutigkeit der Primfaktorzerlegung.'
antwort: |
  Wäre $1$ eine Primzahl, dann wäre die Zerlegung nicht mehr eindeutig. Man könnte $6 = 2\cdot 3 = 1\cdot 2\cdot 3 = 1\cdot 1\cdot 2\cdot 3$ schreiben, und alle wären „Primfaktorzerlegungen“.
  Der Faktor $1$ ändert ein Produkt nicht und ist deshalb als Baustein nutzlos.
  Damit der Satz einfach und eindeutig bleibt, verlangt man für eine Primzahl genau zwei verschiedene Teiler. Die $1$ hat nur einen.
```

### Übungen

```aufgabe
id: za-teilbarkeitsregeln
titel: Teilbarkeitsregeln anwenden
niveau: 1
lernziel: 3
kompetenz: anwenden
angabe: |
  a) Welche Zahlen sind durch $3$ teilbar?

  b) Welche Zahlen sind durch $4$ teilbar?
teile:
  - typ: auswahl
    label: 'a) durch 3 teilbar'
    mehrfach: true
    optionen: ['$123$', '$245$', '$1011$', '$7776$']
    richtig: [0, 2, 3]
    fehler:
      - wert: [0, 3]
        meldung: 'Bilde bei $1011$ die Quersumme: $1 + 0 + 1 + 1$. Ist sie durch $3$ teilbar?'
      - wert: [0, 1, 2, 3]
        meldung: 'Die Quersumme von $245$ ist $2 + 4 + 5 = 11$. Ist $11$ durch $3$ teilbar?'
  - typ: auswahl
    label: 'b) durch 4 teilbar'
    mehrfach: true
    optionen: ['$316$', '$522$', '$1000$', '$734$']
    richtig: [0, 2]
    fehler:
      - wert: [0, 1, 2, 3]
        meldung: 'Alle vier Zahlen sind gerade. Für die $4$ reicht das nicht: Prüfe die Zahl aus den letzten beiden Ziffern, etwa $22$ bei $522$.'
hinweise:
  - 'Für $3$: Quersumme bilden. Für $4$: nur die letzten beiden Ziffern ansehen.'
loesung: |
  Ansatz: Wir verwenden die Quersumme für die $3$ und die letzten zwei Ziffern für die $4$.
  ---
  a) Quersummen: $123 \to 6$, $245 \to 11$, $1011 \to 3$, $7776 \to 27$. Durch $3$ teilbar sind $6$, $3$ und $27$, also $123$, $1011$ und $7776$.
  ---
  b) Letzte zwei Ziffern: $16$, $22$, $00$, $34$. Durch $4$ teilbar sind $16$ und $0$, also $316$ und $1000$.
  Probe: $316 = 79\cdot 4$ und $522 : 4 = 130{,}5$.
```

```aufgabe
id: za-primfaktoren
titel: Primfaktorzerlegung
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Zerlege $252$ in Primfaktoren. Gib die Hochzahlen $a$, $b$, $c$ an, für die $252 = 2^a\cdot 3^b\cdot 7^c$ gilt.
teile:
  - typ: vektor
    namen: ['a', 'b', 'c']
    loesung: ["2", "2", "1"]
    fehler:
      - wert: ["2", "1", "1"]
        meldung: '$2^2\cdot 3\cdot 7 = 84$, nicht $252$. Nach dem ersten Teilen durch $3$ bleibt eine Zahl, die noch einmal durch $3$ teilbar ist.'
      - wert: ["1", "2", "1"]
        meldung: '$2\cdot 9\cdot 7 = 126$. Die $252$ ist zweimal durch $2$ teilbar: $252 : 2 = 126$ und $126 : 2 = 63$.'
hinweise:
  - 'Teile so oft wie möglich durch $2$, dann durch $3$, dann durch die nächsten Primzahlen.'
  - 'Zähle am Ende, wie oft jede Primzahl vorkam. Probe durch Ausmultiplizieren.'
loesung: |
  Ansatz: Wir teilen immer durch die kleinste Primzahl, die noch aufgeht.
  ---
  $252 : 2 = 126$, $126 : 2 = 63$. Die $63$ ist ungerade. $63 : 3 = 21$, $21 : 3 = 7$, und $7$ ist prim.
  ---
  Also $252 = 2^2\cdot 3^2\cdot 7$, das heißt $a = 2$, $b = 2$, $c = 1$. Probe: $4\cdot 9\cdot 7 = 252$.
```

```aufgabe
id: za-ggt-kgv
titel: ggT und kgV großer Zahlen
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Bestimme $\operatorname{ggT}(48, 180)$ und $\operatorname{kgV}(48, 180)$ mit der Primfaktorzerlegung.
teile:
  - typ: zahl
    label: 'ggT'
    loesung: "12"
    fehler:
      - wert: "720"
        meldung: 'Das ist das kgV. Der ggT ist ein **Teiler**, also höchstens so groß wie die kleinere Zahl $48$.'
      - wert: "6"
        meldung: '$6$ ist ein gemeinsamer Teiler, aber nicht der größte. Die $2$ kommt in beiden Zahlen mindestens zweimal vor.'
  - typ: zahl
    label: 'kgV'
    loesung: "48*180/12"
    fehler:
      - wert: "8640"
        meldung: 'Das ist das Produkt $48\cdot 180$. Es ist ein gemeinsames Vielfaches, aber nicht das kleinste.'
hinweise:
  - 'Zerlege beide Zahlen: $48$ und $180$ jeweils durch $2$, $3$, $5$ teilen.'
  - 'ggT: gemeinsame Primzahlen mit der kleineren Hochzahl. kgV: alle Primzahlen mit der größeren Hochzahl.'
gefuehrt:
  - text: 'Zerlege $48$. Wie oft kommt die $2$ als Faktor vor, wenn $48 = 2^m\cdot 3$ ist?'
    teil:
      typ: zahl
      loesung: "4"
      fehler:
        - wert: "3"
          meldung: '$2^3\cdot 3 = 24$. Teile weiter: $48 : 2 = 24$, $24 : 2 = 12$, $12 : 2 = 6$, $6 : 2 = 3$.'
    erklaerung: '$48 = 2^4\cdot 3 = 16\cdot 3$.'
  - text: 'Zerlege $180$. Es ist $180 = 2^2\cdot 3^2\cdot 5$. Welche Primzahlen kommen in **beiden** Zerlegungen vor?'
    erklaerung: 'In beiden kommen $2$ und $3$ vor. Die $5$ steckt nur in $180$.'
  - text: 'ggT: Nimm $2$ und $3$ jeweils mit der kleineren Hochzahl. Was ergibt das?'
    teil: { typ: zahl, loesung: "2^2*3" }
    erklaerung: 'Kleinere Hochzahlen: $2^2$ (statt $2^4$) und $3^1$ (statt $3^2$). Also $\operatorname{ggT} = 4\cdot 3 = 12$.'
  - text: 'kgV: Nimm alle Primzahlen mit der größeren Hochzahl. Was ergibt das?'
    teil: { typ: zahl, loesung: "2^4*3^2*5" }
    erklaerung: '$2^4\cdot 3^2\cdot 5 = 16\cdot 9\cdot 5 = 720$.'
loesung: |
  Ansatz: Wir zerlegen beide Zahlen in Primfaktoren und vergleichen die Hochzahlen.
  ---
  $48 = 2^4\cdot 3$ und $180 = 2^2\cdot 3^2\cdot 5$.
  ---
  ggT: kleinere Hochzahlen der gemeinsamen Primzahlen, $2^2\cdot 3 = 12$. kgV: größere Hochzahlen aller Primzahlen, $2^4\cdot 3^2\cdot 5 = 720$.
  ---
  Kontrolle: $12\cdot 720 = 8640 = 48\cdot 180$. Außerdem teilt $12$ beide Zahlen: $48 = 4\cdot 12$ und $180 = 15\cdot 12$.
```

```aufgabe
id: za-ggt-kgv-anwendung
titel: Bretter zuschneiden und Leuchtfeuer
niveau: 2
lernziel: 3
kompetenz: modellieren
angabe: |
  a) Zwei Bretter sind $96\,\text{cm}$ und $120\,\text{cm}$ lang. Beide sollen ohne Rest in gleich lange Stücke zersägt werden. Die Stücke sollen möglichst lang sein. Wie lang wird ein Stück?

  b) Zwei Leuchtfeuer blitzen alle $14$ Sekunden und alle $21$ Sekunden. Gerade blitzen beide gleichzeitig. Nach wie vielen Sekunden blitzen sie das nächste Mal gleichzeitig?
teile:
  - typ: zahl
    label: 'a) Stücklänge'
    einheit: cm
    loesung: "24"
    fehler:
      - wert: "480"
        meldung: 'Ein Stück kann nicht länger sein als das kürzere Brett. Gesucht ist ein gemeinsamer **Teiler**, kein Vielfaches.'
      - wert: "12"
        meldung: '$12$ teilt beide Längen, aber es geht noch länger. Gesucht ist der **größte** gemeinsame Teiler.'
  - typ: zahl
    label: 'b) Zeit'
    einheit: s
    loesung: "42"
    fehler:
      - wert: "294"
        meldung: 'Nach $14\cdot 21 = 294$ Sekunden blitzen sie zwar gleichzeitig, aber schon vorher. Gesucht ist das **kleinste** gemeinsame Vielfache.'
      - wert: "7"
        meldung: 'Nach $7$ Sekunden hat noch keines der beiden Feuer wieder geblitzt. Hier ist ein Vielfaches gesucht, kein Teiler.'
hinweise:
  - 'Frag dich jeweils: Suche ich eine Zahl, die in beide Angaben hineinpasst (Teiler), oder eine, in die beide hineinpassen (Vielfaches)?'
  - 'a) führt auf den ggT, b) auf das kgV. Zerlege dafür in Primfaktoren.'
loesung: |
  Ansatz: Gleiche Stücke ohne Rest heißt, die Stücklänge teilt beide Längen: ggT. Gemeinsames Wiederholen heißt Vielfaches: kgV.
  ---
  a) $96 = 2^5\cdot 3$ und $120 = 2^3\cdot 3\cdot 5$. $\operatorname{ggT} = 2^3\cdot 3 = 24$. Jedes Stück ist $24\,\text{cm}$ lang: $4$ Stücke aus dem ersten, $5$ aus dem zweiten Brett.
  ---
  b) $14 = 2\cdot 7$ und $21 = 3\cdot 7$. $\operatorname{kgV} = 2\cdot 3\cdot 7 = 42$. Nach $42$ Sekunden blitzen beide wieder gleichzeitig.
  ---
  Kontrolle: $4\cdot 24 = 96$ und $5\cdot 24 = 120$. Für b): $42 = 3\cdot 14 = 2\cdot 21$.
```

```aufgabe
id: za-wochentag-rest
titel: Welcher Wochentag?
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Heute ist Montag. Welcher Wochentag ist in $100$ Tagen?

  a) Welchen Rest lässt $100$ bei Division durch $7$?

  b) Welcher Wochentag ist es?
teile:
  - typ: zahl
    label: 'a) Rest'
    loesung: "100 - 14*7"
    fehler:
      - wert: "14"
        meldung: '$14$ ist der Quotient, also die Zahl der vollen Wochen. Gesucht ist, was danach übrig bleibt.'
  - typ: auswahl
    label: 'b) Wochentag'
    optionen: ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag']
    richtig: [2]
    fehler:
      - wert: 1
        meldung: 'Zwei Tage nach Montag ist nicht Dienstag. Zähle: Montag, dann $1$ Tag später, dann $2$ Tage später.'
      - wert: 0
        meldung: 'Nach $98$ Tagen, also $14$ vollen Wochen, ist wieder Montag. Es fehlen aber noch $2$ Tage.'
hinweise:
  - 'Nach je $7$ Tagen ist wieder Montag. Volle Wochen spielen keine Rolle.'
  - 'Schreibe $100 = q\cdot 7 + r$ und gehe vom Montag $r$ Tage weiter.'
loesung: |
  Ansatz: Der Wochentag wiederholt sich alle $7$ Tage. Es zählt also nur der Rest von $100$ bei Division durch $7$.
  ---
  a) $100 = 14\cdot 7 + 2$, denn $14\cdot 7 = 98$. Der Rest ist $2$.
  ---
  b) Nach $14$ vollen Wochen ist wieder Montag. Noch $2$ Tage weiter: Dienstag, Mittwoch. In $100$ Tagen ist Mittwoch.
```

```aufgabe
id: za-neunerregel-begruenden
titel: Warum funktioniert die Neunerregel?
niveau: 3
lernziel: 3
kompetenz: begruenden
angabe: |
  Eine dreistellige Zahl mit den Ziffern $a$, $b$, $c$ hat den Wert $100a + 10b + c$. Zum Beispiel ist $735 = 100\cdot 7 + 10\cdot 3 + 5$.

  a) Welche Umformung erklärt die Neunerregel?

  b) Welchen Rest lässt $735$ bei Division durch $9$? Verwende die Quersumme.

  c) Begründe die Neunerregel in zwei bis drei Sätzen.
teile:
  - typ: auswahl
    label: 'a)'
    optionen:
      - '$100a + 10b + c = 99a + 9b + (a + b + c)$'
      - '$100a + 10b + c = 9\cdot(11a + b) + c$'
      - '$100a + 10b + c = (a + b + c)\cdot 111$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Multipliziere aus: $9\cdot(11a + b) = 99a + 9b$. Dann fehlen $a$ und $b$ auf der rechten Seite. Die Gleichung stimmt nicht.'
      - wert: 2
        meldung: 'Teste mit $735$: $(7 + 3 + 5)\cdot 111 = 1665$. Die Gleichung ist falsch.'
  - typ: zahl
    label: 'b) Rest'
    loesung: "735 - 81*9"
    fehler:
      - wert: "15"
        meldung: 'Die Quersumme ist $15$. Ein Rest bei Division durch $9$ ist aber kleiner als $9$. Teile also auch die $15$ noch durch $9$.'
  - typ: text
    label: 'c) Begründung'
    muster: |
      Es ist $100a + 10b + c = 99a + 9b + (a + b + c)$. Die Teile $99a$ und $9b$ sind immer durch $9$ teilbar.
      Deshalb lässt die Zahl bei Division durch $9$ denselben Rest wie ihre Quersumme $a + b + c$.
      Insbesondere ist die Zahl genau dann durch $9$ teilbar, wenn ihre Quersumme durch $9$ teilbar ist.
hinweise:
  - 'Schreibe $100 = 99 + 1$ und $10 = 9 + 1$ und multipliziere aus.'
  - 'Welche Teile der Summe sind sicher durch $9$ teilbar? Was bleibt übrig?'
loesung: |
  Ansatz: Wir zerlegen $100 = 99 + 1$ und $10 = 9 + 1$, weil $99$ und $9$ durch $9$ teilbar sind.
  ---
  a) $100a + 10b + c = (99 + 1)a + (9 + 1)b + c = 99a + 9b + (a + b + c)$.
  ---
  b) Quersumme von $735$: $7 + 3 + 5 = 15 = 1\cdot 9 + 6$. Also lässt $735$ den Rest $6$. Kontrolle: $735 = 81\cdot 9 + 6$, denn $81\cdot 9 = 729$.
  ---
  c) $99a$ und $9b$ sind durch $9$ teilbar. Der Rest der ganzen Zahl kommt also nur von $a + b + c$. Ist die Quersumme durch $9$ teilbar, dann auch die Zahl, und umgekehrt.
```

```aufgabe
id: za-primzahl-pruefen
titel: Ist 221 eine Primzahl?
niveau: 3
lernziel: 3
kompetenz: verstehen
angabe: |
  a) Ist $221$ eine Primzahl?

  b) Gib die Primfaktoren von $221$ an.

  c) Welche Primzahlen muss man höchstens als Teiler testen, um zu entscheiden, ob $221$ prim ist?
teile:
  - typ: auswahl
    label: 'a)'
    optionen: ['ja', 'nein']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: '$221$ ist weder durch $2$, $3$, $5$, $7$ noch durch $11$ teilbar. Teste auch noch die $13$.'
  - typ: menge
    label: 'b) Primfaktoren'
    loesung: ["13", "17"]
    fehler:
      - wert: ["221"]
        meldung: 'Wenn $221$ keine Primzahl ist, besteht die Zerlegung aus mindestens zwei kleineren Primzahlen.'
  - typ: auswahl
    label: 'c)'
    optionen:
      - 'alle Primzahlen bis $13$, weil $13\cdot 13 = 169 \le 221$ und $17\cdot 17 = 289 > 221$'
      - 'alle Primzahlen bis $110$, also bis zur Hälfte von $221$'
      - 'nur $2$, $3$ und $5$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Das würde funktionieren, ist aber viel zu aufwendig. Hat $221 = p\cdot q$ zwei Faktoren, dann ist einer davon
          höchstens so groß wie die Zahl, deren Quadrat $221$ ist.
      - wert: 2
        meldung: 'Mit $2$, $3$ und $5$ findest du nur diese Teiler. $221$ könnte, wie $49 = 7\cdot 7$, auch einen größeren Primteiler haben.'
hinweise:
  - 'Teste der Reihe nach $2$, $3$, $5$, $7$, $11$, $13$. Bei welcher Primzahl geht die Division auf?'
  - 'Wenn $n = p\cdot q$ mit $p \le q$ ist, dann ist $p\cdot p \le p\cdot q = n$. Was folgt daraus für den kleineren Faktor?'
loesung: |
  Ansatz: Wir testen die Primzahlen der Reihe nach. Wir hören auf, sobald $p\cdot p$ größer als $221$ wird.
  ---
  $221$ ist ungerade, hat die Quersumme $5$, endet nicht auf $0$ oder $5$. $221 : 7 = 31{,}57\ldots$ und $221 : 11 = 20{,}09\ldots$ gehen nicht auf.
  ---
  $221 : 13 = 17$ geht auf. Also ist $221 = 13\cdot 17$ und keine Primzahl. Beide Faktoren $13$ und $17$ sind prim.
  ---
  c) Ist $n = p\cdot q$ mit $p \le q$, dann gilt $p\cdot p \le n$. Der kleinere Faktor ist also höchstens so groß wie die Zahl, deren Quadrat $n$ ist.
  Für $221$ genügt es deshalb, die Primzahlen bis $13$ zu testen, denn $17\cdot 17 = 289$ ist schon größer als $221$.
```

## Bruchrechnen

```aufgabe
id: za-check-kgv-nenner
titel: Ein gemeinsamer Nenner
niveau: 1
art: check
angabe: |
  Welche Zahl ist das kleinste gemeinsame Vielfache von $4$ und $6$?
  Vorwissen: [1.4 Teilbarkeit, Primzahlen, ggT und kgV](/lernen/mathe3/zahlen/teilbarkeit-primzahlen-ggt-und-kgv).
teile:
  - typ: zahl
    loesung: "12"
    fehler:
      - wert: "24"
        meldung: '$24$ ist ein gemeinsames Vielfaches, aber nicht das kleinste. Schreib die Vielfachen von $6$ auf: $6, 12, \dots$'
      - wert: "2"
        meldung: '$2$ ist der größte gemeinsame **Teiler**. Gesucht ist ein Vielfaches, also eine Zahl, in die $4$ und $6$ hineinpassen.'
hinweise:
  - 'Schreib die Vielfachen von $4$ und von $6$ nebeneinander und such die erste Zahl, die in beiden Listen steht.'
loesung: |
  Vielfache von $4$: $4, 8, 12, 16, \dots$ Vielfache von $6$: $6, 12, 18, \dots$
  ---
  Das erste gemeinsame ist $12$. Genau diese Zahl brauchst du gleich als gemeinsamen Nenner von Vierteln und Sechsteln.
```

Brüche sind in der Prüfung allgegenwärtig: als Ergebnisse, in Lösungsformeln, in Wahrscheinlichkeiten und in
Formeln aus der Physik. Der Taschenrechner hilft bei Zahlenbrüchen. Sobald Variablen vorkommen, musst du die
Regeln aber selbst anwenden können. Deshalb lohnt sich hier besondere Sorgfalt. In dieser Lektion rechnen wir mit
Zahlenbrüchen. Brüche mit Variablen folgen in [1.13 Bruchterme](/lernen/mathe3/zahlen/bruchterme).

### Was ein Bruch bedeutet

Ein **Bruch** $\tfrac{a}{b}$ besteht aus dem **Zähler** $a$ über dem Bruchstrich und dem **Nenner** $b$ darunter.
Der Nenner sagt, in wie viele gleiche Teile ein Ganzes zerlegt wird. Der Zähler sagt, wie viele dieser Teile man
nimmt. $\tfrac34$ heißt also: ein Ganzes in $4$ gleiche Teile zerlegen und $3$ davon nehmen. Zugleich ist
$\tfrac34 = 3 : 4 = 0{,}75$, denn der Bruchstrich bedeutet „geteilt durch“.

```plot
x: [-0.3, 4.3]
y: [-0.5, 1.5]
gleich: true
hoehe: 140
flaechen:
  - { f: "1", g: "0", von: 0, bis: 3, farbe: 1 }
strecken:
  - { von: [0, 0], nach: [4, 0] }
  - { von: [4, 0], nach: [4, 1] }
  - { von: [4, 1], nach: [0, 1] }
  - { von: [0, 1], nach: [0, 0] }
  - { von: [1, 0], nach: [1, 1] }
  - { von: [2, 0], nach: [2, 1] }
  - { von: [3, 0], nach: [3, 1] }
beschriftung: Der Bruch 3/4. Ein Streifen ist in 4 gleiche Teile geteilt (Nenner 4), davon sind 3 gefärbt (Zähler 3).
```

Ist der Zähler kleiner als der Nenner, ist der Bruch kleiner als $1$. Ist er größer, ist der Bruch größer als $1$,
zum Beispiel $\tfrac73 = 2\tfrac13$, also zwei Ganze und ein Drittel. In der Mathematik schreibt man lieber $\tfrac73$,
weil $2\tfrac13$ leicht als $2\cdot\tfrac13$ missverstanden wird.

### Kürzen und Erweitern

**Erweitern** heißt Zähler und Nenner mit derselben Zahl $k \neq 0$ multiplizieren. **Kürzen** heißt Zähler und
Nenner durch denselben Teiler dividieren. Der Wert des Bruchs ändert sich dabei nicht. Im Bild: Teilt man jedes
Viertel noch einmal in zwei Hälften, werden aus $3$ von $4$ Teilen eben $6$ von $8$ Teilen, also
$\tfrac34 = \tfrac68$. Ein Bruch ist **vollständig gekürzt**, wenn Zähler und Nenner den ggT $1$ haben.

:::beispiel[Vollständig kürzen]
Kürze $\tfrac{18}{24}$ vollständig.

1. Gemeinsame Teiler suchen: $\operatorname{ggT}(18, 24) = 6$, siehe [1.4 Teilbarkeit](/lernen/mathe3/zahlen/teilbarkeit-primzahlen-ggt-und-kgv).
2. Zähler und Nenner durch $6$ teilen: $\tfrac{18 : 6}{24 : 6} = \tfrac34$.
3. Kontrolle: $\operatorname{ggT}(3, 4) = 1$, weiter kürzen geht nicht. Man darf auch in Etappen kürzen, etwa erst durch $2$, dann durch $3$.
:::

### Addieren und Subtrahieren

Brüche mit **gleichem Nenner** addiert man, indem man die Zähler addiert und den Nenner beibehält:
$\tfrac27 + \tfrac37 = \tfrac57$. Zwei Siebtel plus drei Siebtel sind fünf Siebtel. Bei **verschiedenen Nennern** bringt
man die Brüche zuerst durch Erweitern auf einen gemeinsamen Nenner. Am wenigsten Arbeit macht der **Hauptnenner**,
das ist das kgV der Nenner.

:::beispiel[Addition mit Hauptnenner]
Berechne $\tfrac{5}{12} + \tfrac{7}{18}$.

1. Hauptnenner: $\operatorname{kgV}(12, 18) = 36$.
2. Erweitern: $\tfrac{5}{12} = \tfrac{5\cdot 3}{12\cdot 3} = \tfrac{15}{36}$ und $\tfrac{7}{18} = \tfrac{7\cdot 2}{18\cdot 2} = \tfrac{14}{36}$.
3. Zähler addieren: $\tfrac{15}{36} + \tfrac{14}{36} = \tfrac{29}{36}$. Kürzen geht nicht, denn $29$ ist eine Primzahl.

Mit dem Produkt $12\cdot 18 = 216$ als Nenner ginge es auch, man müsste am Ende aber kürzen:
$\tfrac{90 + 84}{216} = \tfrac{174}{216} = \tfrac{29}{36}$.
:::

:::achtung[Zähler plus Zähler, Nenner plus Nenner]
**Falsch:** $\tfrac12 + \tfrac13 = \tfrac{1 + 1}{2 + 3} = \tfrac25$.

**Richtig:** $\tfrac12 + \tfrac13 = \tfrac36 + \tfrac26 = \tfrac56$. Die falsche Rechnung kann gar nicht stimmen: Ein halber
Kuchen plus ein Drittel Kuchen ist mehr als ein halber Kuchen, aber $\tfrac25$ ist weniger als $\tfrac12$.
:::

### Multiplizieren und Dividieren

**Multiplizieren:** Zähler mal Zähler, Nenner mal Nenner. Ein gemeinsamer Nenner ist hier nicht nötig. Kürze
möglichst **vor** dem Ausmultiplizieren, das hält die Zahlen klein. „$\tfrac23$ von $450$ Euro“ bedeutet
$\tfrac23\cdot 450$ Euro $= 300$ Euro. Das Wort „von“ steht in Anteilsaufgaben also für „mal“.

**Dividieren:** Man multipliziert mit dem **Kehrwert**. Der Kehrwert von $\tfrac cd$ ist $\tfrac dc$, Zähler und
Nenner werden vertauscht. Warum? $6 : \tfrac12$ fragt: Wie oft passt ein Halbes in $6$? In jedes Ganze passen zwei
Halbe, also $12$-mal. Und tatsächlich ist $6\cdot\tfrac21 = 12$.

:::formel[Rechenregeln für Brüche]
Für Zahlen $a, b, c, d$ mit $b \neq 0$ und $d \neq 0$ gilt:
$$\frac ab = \frac{a\cdot k}{b\cdot k}\ (k \neq 0), \qquad \frac ab \pm \frac cd = \frac{ad \pm bc}{bd}, \qquad \frac ab\cdot\frac cd = \frac{ac}{bd}, \qquad \frac ab : \frac cd = \frac ab\cdot\frac dc\ \ (c \neq 0).$$
:::

Das Zeichen $\pm$ liest man „plus oder minus“: Die Regel gilt für die Addition und für die Subtraktion.

:::beispiel[Multiplizieren und Dividieren]
1. $\tfrac49\cdot\tfrac{15}{8}$: Vor dem Ausmultiplizieren kürzen, $4$ mit $8$ (durch $4$) und $15$ mit $9$ (durch $3$). Es bleibt $\tfrac13\cdot\tfrac52 = \tfrac56$.
2. $\tfrac34 : \tfrac{9}{10}$: Mit dem Kehrwert multiplizieren, $\tfrac34\cdot\tfrac{10}{9} = \tfrac{30}{36} = \tfrac56$.
3. Probe zu 2.: $\tfrac56\cdot\tfrac{9}{10} = \tfrac{45}{60} = \tfrac34$. Das Ergebnis mal Divisor ergibt wieder den Dividenden.
:::

### Doppelbrüche

Ein **Doppelbruch** hat Brüche im Zähler oder im Nenner. Man vereinfacht zuerst Zähler und Nenner getrennt zu je
einem einzigen Bruch und dividiert dann. Der lange Hauptbruchstrich wirkt wie eine Klammer um den ganzen Zähler und
um den ganzen Nenner.

:::beispiel[Doppelbruch]
$$\frac{\tfrac12 + \tfrac13}{\tfrac14 - \tfrac16} = \frac{\tfrac{3 + 2}{6}}{\tfrac{3 - 2}{12}} = \frac56 : \frac{1}{12} = \frac56\cdot 12 = 10.$$
1. Zähler: $\tfrac12 + \tfrac13 = \tfrac56$ mit dem Hauptnenner $6$.
2. Nenner: $\tfrac14 - \tfrac16 = \tfrac{1}{12}$ mit dem Hauptnenner $12$.
3. Dividieren heißt mit dem Kehrwert $\tfrac{12}{1}$ multiplizieren: $\tfrac56\cdot 12 = \tfrac{60}{6} = 10$.

Ein wichtiger Sonderfall: $\dfrac{1}{\tfrac1a} = 1 : \tfrac1a = 1\cdot\tfrac a1 = a$ für jede Zahl $a \neq 0$.
:::

:::achtung[Aus Summen kürzt man nicht]
**Falsch:** $\dfrac{3 + 5}{3} = \dfrac{\cancel3 + 5}{\cancel3} = 5$.

**Richtig:** $\dfrac{3 + 5}{3} = \dfrac83$. Kürzen darf man nur **Faktoren**, also Zahlen, mit denen der ganze Zähler und
der ganze Nenner multipliziert werden. Hier ist die $3$ im Zähler ein Summand. Richtig ist auch
$\tfrac{3 + 5}{3} = \tfrac33 + \tfrac53 = 1 + \tfrac53$.
:::

:::merke[Mit Brüchen rechnen]
1. **Plus und minus:** auf den Hauptnenner erweitern, dann nur die Zähler addieren oder subtrahieren.
2. **Mal:** Zähler mal Zähler, Nenner mal Nenner, vorher kürzen.
3. **Geteilt:** mit dem Kehrwert des zweiten Bruchs multiplizieren.
4. **Doppelbruch:** Zähler und Nenner getrennt zu einem Bruch machen, dann dividieren.
5. Am Ende vollständig kürzen und die Größenordnung prüfen.
:::

```reflexion
frage: 'Erkläre einem Freund ohne Formel, warum $3 : \tfrac14 = 12$ ist und nicht $\tfrac34$.'
antwort: |
  $3 : \tfrac14$ fragt: Wie oft passt ein Viertel in $3$ Ganze? In jedes Ganze passen vier Viertel, in drei Ganze also $3\cdot 4 = 12$ Viertel.
  Teilen durch eine Zahl kleiner als $1$ macht das Ergebnis deshalb **größer**. $\tfrac34$ wäre das Ergebnis von $3\cdot\tfrac14$, also „ein Viertel von $3$“.
  Die Regel „mit dem Kehrwert multiplizieren“ fasst genau diese Überlegung zusammen: $3 : \tfrac14 = 3\cdot 4 = 12$.
```

### Übungen

```aufgabe
id: za-bruch-addieren
titel: Brüche addieren und subtrahieren
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Berechne und kürze vollständig: $\dfrac{7}{12} + \dfrac{5}{18} - \dfrac14$
teile:
  - typ: zahl
    loesung: "7/12 + 5/18 - 1/4"
    anzeige: '\tfrac{11}{18}'
    fehler:
      - wert: "11/26"
        meldung: 'Du hast Zähler und Nenner jeweils für sich verrechnet. Bring die Brüche zuerst auf einen gemeinsamen Nenner.'
      - wert: "10/9"
        meldung: 'Fast: Du hast den letzten Bruch addiert statt subtrahiert. Vor $\tfrac14$ steht ein Minus.'
hinweise:
  - 'Der Hauptnenner von $12$, $18$ und $4$ ist $\operatorname{kgV}(12, 18, 4) = 36$.'
loesung: |
  Ansatz: Hauptnenner $36$, denn $36$ ist das kleinste Vielfache von $12$, $18$ und $4$.
  ---
  Erweitern: $\tfrac{7}{12} = \tfrac{21}{36}$, $\tfrac{5}{18} = \tfrac{10}{36}$, $\tfrac14 = \tfrac{9}{36}$.
  ---
  $\tfrac{21 + 10 - 9}{36} = \tfrac{22}{36} = \tfrac{11}{18}$, gekürzt durch $2$. Größenordnung: etwa $0{,}58 + 0{,}28 - 0{,}25 \approx 0{,}61$, und $\tfrac{11}{18} \approx 0{,}61$.
```

```aufgabe
id: za-kuerzen-erweitern
titel: Kürzen und Erweitern
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  a) Kürze $\dfrac{42}{56}$ vollständig. Gib Zähler und Nenner an.

  b) Erweitere $\dfrac58$ auf den Nenner $40$. Wie heißt der neue Zähler?
teile:
  - typ: vektor
    label: 'a)'
    namen: ['Zähler', 'Nenner']
    loesung: ["3", "4"]
    fehler:
      - wert: ["21", "28"]
        meldung: 'Richtig gekürzt, aber nicht vollständig: $21$ und $28$ haben noch den gemeinsamen Teiler $7$.'
      - wert: ["6", "8"]
        meldung: '$6$ und $8$ haben noch den gemeinsamen Teiler $2$. Vollständig gekürzt heißt: ggT von Zähler und Nenner ist $1$.'
  - typ: zahl
    label: 'b) neuer Zähler'
    loesung: "5*40/8"
    fehler:
      - wert: "37"
        meldung: 'Du hast $32$ addiert, weil $8 + 32 = 40$. Erweitern heißt aber **multiplizieren**: Mit welcher Zahl wird aus $8$ die $40$?'
hinweise:
  - 'Für a) suche $\operatorname{ggT}(42, 56)$. Für b) frag dich, womit man $8$ multiplizieren muss, um $40$ zu erhalten.'
loesung: |
  Ansatz: Kürzen heißt durch den ggT teilen, erweitern heißt Zähler und Nenner mit derselben Zahl multiplizieren.
  ---
  a) $42 = 2\cdot 3\cdot 7$ und $56 = 2^3\cdot 7$, also $\operatorname{ggT} = 14$. $\tfrac{42 : 14}{56 : 14} = \tfrac34$.
  ---
  b) $8\cdot 5 = 40$, also auch den Zähler mal $5$: $\tfrac{5\cdot 5}{8\cdot 5} = \tfrac{25}{40}$. Der neue Zähler ist $25$.
```

```aufgabe
id: za-bruch-mal-geteilt
titel: Multiplizieren und dividieren
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Berechne und kürze vollständig:

  a) $\dfrac{4}{15}\cdot\dfrac{25}{12}$, b) $\dfrac67 : \dfrac{9}{14}$
teile:
  - typ: zahl
    label: 'a)'
    loesung: "4/15*25/12"
    anzeige: '\tfrac59'
    fehler:
      - wert: "16/125"
        meldung: 'Du hast den zweiten Bruch umgedreht. Den Kehrwert braucht man nur beim **Dividieren**, nicht beim Multiplizieren.'
  - typ: zahl
    label: 'b)'
    loesung: "(6/7)/(9/14)"
    anzeige: '\tfrac43'
    fehler:
      - wert: "27/49"
        meldung: 'Du hast multipliziert statt dividiert. Dividieren heißt mit dem **Kehrwert** $\tfrac{14}{9}$ multiplizieren.'
      - wert: "3/4"
        meldung: 'Du hast den Kehrwert des **ersten** Bruchs genommen. Umgedreht wird nur der Divisor, also der Bruch nach dem Geteiltzeichen.'
hinweise:
  - 'Bei a): Kürze $4$ gegen $12$ und $25$ gegen $15$, bevor du multiplizierst.'
  - 'Bei b): Ersetze $: \tfrac{9}{14}$ durch $\cdot\tfrac{14}{9}$ und kürze dann.'
loesung: |
  Ansatz: Multiplizieren geht direkt. Dividieren verwandeln wir in eine Multiplikation mit dem Kehrwert.
  ---
  a) Kürzen: $4$ und $12$ durch $4$, $25$ und $15$ durch $5$. Es bleibt $\tfrac13\cdot\tfrac53 = \tfrac59$.
  ---
  b) $\tfrac67\cdot\tfrac{14}{9}$. Kürzen: $14$ und $7$ durch $7$, $6$ und $9$ durch $3$. Es bleibt $\tfrac21\cdot\tfrac23 = \tfrac43$.
  ---
  Probe zu b): $\tfrac43\cdot\tfrac{9}{14} = \tfrac{36}{42} = \tfrac67$. Das passt.
```

```aufgabe
id: za-doppelbruch
titel: Doppelbruch
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Vereinfache: $$\frac{\tfrac23 - \tfrac14}{1 + \tfrac16}$$
teile:
  - typ: zahl
    loesung: "(2/3 - 1/4)/(1 + 1/6)"
    anzeige: '\tfrac{5}{14}'
    fehler:
      - wert: "35/72"
        meldung: 'Du hast Zähler und Nenner multipliziert. Der Hauptbruchstrich bedeutet aber „geteilt durch“.'
      - wert: "14/5"
        meldung: 'Das ist der Kehrwert des Ergebnisses. Dividiert wird der Zähler **durch** den Nenner, nicht umgekehrt.'
hinweise:
  - 'Zähler und Nenner zuerst getrennt zu je einem Bruch zusammenfassen.'
  - 'Danach den Zählerbruch mit dem Kehrwert des Nennerbruchs multiplizieren.'
loesung: |
  Ansatz: Wir machen Zähler und Nenner getrennt zu je einem Bruch und dividieren dann.
  ---
  Zähler: $\tfrac23 - \tfrac14 = \tfrac{8 - 3}{12} = \tfrac{5}{12}$. Nenner: $1 + \tfrac16 = \tfrac66 + \tfrac16 = \tfrac76$.
  ---
  $\tfrac{5}{12} : \tfrac76 = \tfrac{5}{12}\cdot\tfrac67 = \tfrac{30}{84} = \tfrac{5}{14}$.
  ---
  Größenordnung: Der Zähler ist etwa $0{,}42$, der Nenner etwa $1{,}17$. Der Quotient ist etwa $0{,}36$, und $\tfrac{5}{14} \approx 0{,}357$.
```

```aufgabe
id: za-anteile-erbschaft
titel: Ein Erbe wird aufgeteilt
niveau: 2
lernziel: 4
kompetenz: modellieren
angabe: |
  Ein Erbe von $36\,000$ Euro wird aufgeteilt. Anna bekommt $\tfrac13$ des Erbes. Ben bekommt $\tfrac25$ von dem, was danach übrig ist. Clara bekommt den Rest.

  a) Wie viel bekommt Ben?

  b) Welcher Bruchteil des ganzen Erbes geht an Clara?
teile:
  - typ: zahl
    label: 'a) Ben'
    einheit: Euro
    loesung: "2/5*(36000 - 36000/3)"
    fehler:
      - wert: "14400"
        meldung: 'Das sind $\tfrac25$ des **ganzen** Erbes. Ben bekommt aber $\tfrac25$ vom Rest, der nach Anna übrig ist.'
  - typ: zahl
    label: 'b) Anteil von Clara'
    loesung: "(36000 - 12000 - 9600)/36000"
    anzeige: '\tfrac25'
    fehler:
      - wert: "4/15"
        meldung: 'Du hast $1 - \tfrac13 - \tfrac25$ gerechnet. Bens $\tfrac25$ beziehen sich aber nicht auf das ganze Erbe, sondern auf den Rest.'
hinweise:
  - 'Berechne zuerst Annas Anteil und den Rest, der danach übrig bleibt.'
  - 'Das Wort „von“ bedeutet „mal“. Ben bekommt also $\tfrac25$ mal den Rest.'
gefuehrt:
  - text: 'Wie viel Euro bekommt Anna?'
    teil:
      typ: zahl
      loesung: "36000/3"
    erklaerung: '$\tfrac13\cdot 36\,000 = 12\,000$ Euro.'
  - text: 'Wie viel Euro bleiben nach Annas Anteil übrig?'
    teil:
      typ: zahl
      loesung: "36000 - 12000"
    erklaerung: '$36\,000 - 12\,000 = 24\,000$ Euro.'
  - text: 'Ben bekommt $\tfrac25$ von diesem Rest. Wie viel ist das?'
    teil:
      typ: zahl
      loesung: "2/5*24000"
      fehler:
        - wert: "14400"
          meldung: 'Das wären $\tfrac25$ von $36\,000$ Euro. Ben bekommt $\tfrac25$ von $24\,000$ Euro.'
    erklaerung: '$\tfrac25\cdot 24\,000 = 9600$ Euro.'
  - text: 'Clara bekommt den Rest. Welcher Bruchteil von $36\,000$ ist das?'
    teil:
      typ: zahl
      loesung: "(24000 - 9600)/36000"
    erklaerung: 'Clara bekommt $24\,000 - 9600 = 14\,400$ Euro. Das ist $\tfrac{14\,400}{36\,000} = \tfrac25$ des Erbes.'
loesung: |
  Ansatz: Wir rechnen der Reihe nach. „Von“ bedeutet mal, und Bens Anteil bezieht sich auf den Rest.
  ---
  Anna: $\tfrac13\cdot 36\,000 = 12\,000$ Euro. Rest: $24\,000$ Euro.
  ---
  a) Ben: $\tfrac25\cdot 24\,000 = 9600$ Euro.
  ---
  b) Clara: $24\,000 - 9600 = 14\,400$ Euro, also $\tfrac{14\,400}{36\,000} = \tfrac25$ des Erbes.
  Kontrolle: $12\,000 + 9600 + 14\,400 = 36\,000$ Euro. Ohne Geldbeträge: $\tfrac23\cdot\tfrac35 = \tfrac25$, denn Clara bekommt $\tfrac35$ von den $\tfrac23$, die Anna übrig lässt.
```

```aufgabe
id: za-bruch-fehler-finden
titel: Zwei Bruchfehler
niveau: 3
lernziel: 4
kompetenz: begruenden
angabe: |
  Eine Mitschülerin rechnet:

  (1) $\dfrac23 + \dfrac34 = \dfrac57$ und (2) $\dfrac{6 + 9}{6} = 9$.

  a) Welche Fehlvorstellung steckt in (1)?

  b) Berechne beide Ausdrücke richtig.
teile:
  - typ: auswahl
    label: 'a)'
    optionen:
      - 'Sie addiert Zähler und Nenner getrennt, statt einen gemeinsamen Nenner zu bilden.'
      - 'Sie hat die Brüche vorher nicht gekürzt.'
      - 'Sie hätte die Nenner multiplizieren und die Zähler addieren müssen: $\tfrac{5}{12}$.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$\tfrac23$ und $\tfrac34$ sind bereits vollständig gekürzt. Der Fehler liegt woanders.'
      - wert: 2
        meldung: 'Auch $\tfrac{5}{12}$ ist falsch. Beim gemeinsamen Nenner muss man auch die Zähler erweitern.'
  - typ: zahl
    label: 'b) (1) richtig'
    loesung: "2/3 + 3/4"
    anzeige: '\tfrac{17}{12}'
    fehler:
      - wert: "5/12"
        meldung: 'Den Nenner $12$ hast du richtig gewählt. Die Zähler müssen aber mit erweitert werden: $\tfrac23 = \tfrac{8}{12}$.'
  - typ: zahl
    label: 'b) (2) richtig'
    loesung: "(6 + 9)/6"
    anzeige: '\tfrac52'
    fehler:
      - wert: "9"
        meldung: 'Das ist das Ergebnis der falschen Rechnung. Rechne zuerst den Zähler aus, dann teile.'
hinweise:
  - 'Prüfe (1) mit einer Abschätzung: Ist $\tfrac57$ größer oder kleiner als $\tfrac34$ allein?'
  - 'Bei (2): Darf man eine $6$ wegkürzen, die im Zähler nur ein Summand ist?'
loesung: |
  Ansatz: Wir prüfen jede Rechnung mit den Regeln und mit einer Größenabschätzung.
  ---
  a) In (1) wurden Zähler und Nenner einzeln addiert. Das kann nicht stimmen: Das Ergebnis $\tfrac57 \approx 0{,}71$ ist kleiner als $\tfrac34$ allein.
  ---
  b) (1) Hauptnenner $12$: $\tfrac{8}{12} + \tfrac{9}{12} = \tfrac{17}{12}$. Das ist etwas mehr als $1$, und das passt zu $0{,}67 + 0{,}75$.
  ---
  (2) Die $6$ im Zähler ist ein Summand, kein Faktor. Darum darf man sie nicht kürzen. Richtig: $\tfrac{15}{6} = \tfrac52$.
```

```aufgabe
id: za-bruch-umkehr
titel: Den fehlenden Bruch finden
niveau: 3
lernziel: 4
kompetenz: verstehen
angabe: |
  a) Welche Zahl muss man zu $\dfrac38$ addieren, um $\dfrac56$ zu erhalten?

  b) Mit welcher Zahl muss man $\dfrac34$ multiplizieren, um $\dfrac{9}{10}$ zu erhalten?
teile:
  - typ: zahl
    label: 'a)'
    loesung: "5/6 - 3/8"
    anzeige: '\tfrac{11}{24}'
    fehler:
      - wert: "-1"
        meldung: 'Zähler und Nenner getrennt abzuziehen ist keine Bruchrechnung. Bring beide Brüche auf den Nenner $24$.'
      - wert: "29/24"
        meldung: 'Du hast addiert. Gesucht ist, was zu $\tfrac38$ **noch dazukommt**, also die Differenz $\tfrac56 - \tfrac38$.'
  - typ: zahl
    label: 'b)'
    loesung: "(9/10)/(3/4)"
    anzeige: '\tfrac65'
    fehler:
      - wert: "27/40"
        meldung: 'Das ist $\tfrac{9}{10}\cdot\tfrac34$. Gesucht ist die Zahl, mit der $\tfrac34$ multipliziert $\tfrac{9}{10}$ ergibt. Das ist eine Division.'
hinweise:
  - 'Übersetze in eine Gleichung: $\tfrac38 + x = \tfrac56$ und $\tfrac34\cdot y = \tfrac{9}{10}$.'
  - 'Löse durch die Gegenrechnung: Minus macht Plus rückgängig, Geteilt macht Mal rückgängig.'
loesung: |
  Ansatz: Gesuchte Zahl als Unbekannte schreiben und mit der Umkehrrechnung bestimmen.
  ---
  a) $x = \tfrac56 - \tfrac38$. Hauptnenner $24$: $\tfrac{20}{24} - \tfrac{9}{24} = \tfrac{11}{24}$.
  ---
  b) $y = \tfrac{9}{10} : \tfrac34 = \tfrac{9}{10}\cdot\tfrac43 = \tfrac{36}{30} = \tfrac65$.
  ---
  Proben: $\tfrac38 + \tfrac{11}{24} = \tfrac{9}{24} + \tfrac{11}{24} = \tfrac{20}{24} = \tfrac56$. Und $\tfrac34\cdot\tfrac65 = \tfrac{18}{20} = \tfrac{9}{10}$.
```

## Prozentrechnung

```aufgabe
id: za-check-bruch-dezimal
titel: Ein Bruch als Kommazahl
niveau: 1
art: check
angabe: |
  Schreibe $\tfrac34$ als Kommazahl.
  Vorwissen: [1.5 Bruchrechnen](/lernen/mathe3/zahlen/bruchrechnen).
teile:
  - typ: zahl
    loesung: "3/4"
    fehler:
      - wert: "0.34"
        meldung: 'Zähler und Nenner hintereinander geschrieben ergeben keine Kommazahl. Der Bruchstrich bedeutet $3 : 4$.'
      - wert: "1.33"
        meldung: 'Das ist ungefähr $4 : 3$. Der Zähler wird durch den Nenner geteilt, nicht umgekehrt.'
hinweise:
  - 'Der Bruchstrich bedeutet „geteilt durch“. Rechne $3 : 4$, oder erweitere auf Hundertstel.'
loesung: |
  $\tfrac34 = \tfrac{75}{100}$, wenn man mit $25$ erweitert.
  ---
  $75$ Hundertstel sind $0{,}75$. Hundertstel sind genau das, was „Prozent“ bedeutet: $\tfrac34 = 75\,\%$.
```

**Prozent** heißt „von Hundert“. $p\,\%$ ist nur eine andere Schreibweise für den Bruch $\tfrac{p}{100}$. Also ist
$1\,\% = \tfrac{1}{100} = 0{,}01$, $25\,\% = \tfrac{25}{100} = \tfrac14 = 0{,}25$ und $150\,\% = 1{,}5$. In der Prüfung
stecken Prozente meist in Anwendungen: ein Wachstum um einige Prozent pro Stunde, ein Anteil an einer Gesamtzahl,
eine Preisänderung. Wer mit **Faktoren** rechnet, löst solche Aufgaben in einer Zeile. Das zeigt diese Lektion.

### Grundwert, Prozentsatz und Prozentwert

:::definition[Grundbegriffe der Prozentrechnung]
Der **Grundwert** $G$ ist das Ganze, also $100\,\%$. Der **Prozentsatz** $p\,\%$ gibt den Anteil an. Der
**Prozentwert** $W$ ist der Teil, der diesem Anteil entspricht. Es gilt
$$W = G\cdot\frac{p}{100}.$$
Umgestellt: $p = \dfrac{W}{G}\cdot 100$ und $G = \dfrac{W}{p/100}$.
:::

**Beispiel:** $20\,\%$ von $50$ Euro sind $50\cdot 0{,}2 = 10$ Euro. Hier ist $G = 50$ Euro, $p = 20$ und $W = 10$ Euro.
**Nichtbeispiel:** $20\,\%$ von $50$ Euro sind **nicht** $50 \cdot 20 = 1000$ Euro und nicht $50 : 20 = 2{,}5$ Euro.
Das Prozentzeichen bedeutet „geteilt durch $100$“ und darf nicht weggelassen werden.

:::beispiel[Die drei Grundaufgaben]
1. **Prozentwert gesucht:** Wie viel sind $35\,\%$ von $120$ Euro? $W = 120\cdot 0{,}35 = 42$ Euro.
2. **Prozentsatz gesucht:** Wie viel Prozent sind $18$ Euro von $72$ Euro? $p = \tfrac{18}{72}\cdot 100 = 25$, also $25\,\%$.
3. **Grundwert gesucht:** $21$ Euro sind $7\,\%$ von welchem Betrag? $G = \tfrac{21}{0{,}07} = 300$ Euro.

Probe zu 3.: $7\,\%$ von $300$ Euro sind $300\cdot 0{,}07 = 21$ Euro.
:::

### Änderungsfaktoren

Steigt ein Wert um $p\,\%$, dann hat er danach $100\,\% + p\,\%$ des alten Werts. Man multipliziert ihn also mit dem
**Wachstumsfaktor** $1 + \tfrac{p}{100}$. Sinkt er um $p\,\%$, multipliziert man mit dem **Abnahmefaktor**
$1 - \tfrac{p}{100}$. Eine Erhöhung um $15\,\%$ bedeutet den Faktor $1{,}15$, eine Senkung um $15\,\%$ den Faktor $0{,}85$.

:::beispiel[Faktoren statt Dreisatz]
1. Ein Preis von $80$ Euro steigt um $15\,\%$: $80\cdot 1{,}15 = 92$ Euro.
2. Erst $+20\,\%$, dann $-20\,\%$: Die Faktoren werden multipliziert, $1{,}2\cdot 0{,}8 = 0{,}96$. Insgesamt sinkt der Wert also um $4\,\%$, er kommt nicht auf den alten Wert zurück.
3. Eine Population sinkt $10$ Jahre lang jedes Jahr um $4\,\%$: Faktor $0{,}96^{10} \approx 0{,}665$. Sie ist um etwa $33{,}5\,\%$ geschrumpft, nicht um $40\,\%$.

Die Hochzahl in Punkt 3 bedeutet „zehnmal mit sich selbst multiplizieren“, siehe [1.9 Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln).
:::

Warum ist die Abnahme in Punkt 2 nicht null? Die $20\,\%$ Abzug beziehen sich auf den **erhöhten** Wert. Aus $100$
werden $120$, und $20\,\%$ von $120$ sind $24$. Es bleiben $96$.

:::achtung[Prozente addiert statt Faktoren multipliziert]
**Falsch:** Zweimal hintereinander $+10\,\%$ ergibt $+20\,\%$.

**Richtig:** $1{,}1\cdot 1{,}1 = 1{,}21$, also $+21\,\%$. Die zweite Erhöhung rechnet mit dem schon erhöhten Wert. Aus
$100$ werden $110$, und $10\,\%$ von $110$ sind $11$. Das ergibt $121$.
:::

:::achtung[Rückrechnen vom veränderten Wert]
**Falsch:** Ein Preis von $144$ Euro enthält $20\,\%$ Umsatzsteuer. Ohne Steuer kostet er $144\cdot 0{,}8 = 115{,}20$ Euro.

**Richtig:** Die $20\,\%$ beziehen sich auf den Preis **ohne** Steuer, den Nettopreis $N$. Es gilt $N\cdot 1{,}2 = 144$,
also $N = \tfrac{144}{1{,}2} = 120$ Euro. Zurück kommt man durch **Division** durch den Faktor, nicht durch
Multiplikation mit dem „Gegenfaktor“.
:::

### Prozent und Prozentpunkte

Steigt ein Zinssatz von $2\,\%$ auf $3\,\%$, ist er um **einen Prozentpunkt** gestiegen. Bezogen auf den alten Wert
$2\,\%$ ist das aber eine Steigerung um **$50$ Prozent**, denn $\tfrac{3 - 2}{2} = 0{,}5$. **Prozentpunkte** sind die
Differenz zweier Prozentsätze. **Prozent** beschreibt die relative Änderung, also die Änderung im Verhältnis zum
alten Wert. Zeitungen verwechseln das regelmäßig.

### Anteile mehrerer Gruppen zusammenfassen

Kennt man von mehreren Gruppen jeweils die Größe und den Prozentsatz eines Merkmals, dann addiert man die
**Prozentwerte**, also die Anzahlen. Den Mittelwert der Prozentsätze darf man nur nehmen, wenn alle Gruppen gleich
groß sind.

:::beispiel[Gewichteter Anteil]
In Klasse A ($20$ Personen) tragen $30\,\%$ eine Brille, in Klasse B ($30$ Personen) $10\,\%$.

1. Anzahlen: In A sind es $20\cdot 0{,}3 = 6$ Personen, in B $30\cdot 0{,}1 = 3$ Personen.
2. Zusammen: $9$ von $50$ Personen, also $\tfrac{9}{50} = 18\,\%$.
3. Der Mittelwert $\tfrac{30 + 10}{2} = 20\,\%$ ist falsch, weil Klasse B größer ist und deshalb stärker zählt.
:::

:::merke[Prozentrechnung mit Faktoren]
1. $p\,\%$ von $G$: $G\cdot\tfrac{p}{100}$.
2. Zunahme um $p\,\%$: mal $\left(1 + \tfrac{p}{100}\right)$. Abnahme um $p\,\%$: mal $\left(1 - \tfrac{p}{100}\right)$.
3. Mehrere Änderungen: Faktoren multiplizieren. Gesamtänderung in Prozent: $(\text{Gesamtfaktor} - 1)\cdot 100$.
4. Rückrechnen: durch den Faktor dividieren.
5. $n$-mal dieselbe Änderung: Faktor hoch $n$. Das ist der Ansatz für exponentielles Wachstum in [Kapitel 4](/lernen/mathe3/funktionen).
:::

```reflexion
frage: 'Ein Preis wird um $20\,\%$ gesenkt und danach um $20\,\%$ erhöht. Warum ist er am Ende niedriger als am Anfang? Erkläre es ohne Faktoren, nur mit einem Zahlenbeispiel.'
antwort: |
  Nimm $100$ Euro. Nach der Senkung um $20\,\%$ sind es $80$ Euro. Die Erhöhung um $20\,\%$ bezieht sich jetzt auf $80$ Euro, nicht mehr auf $100$ Euro.
  $20\,\%$ von $80$ Euro sind nur $16$ Euro. Am Ende stehen $96$ Euro. Die beiden Prozentangaben haben verschiedene Grundwerte und heben sich deshalb nicht auf.
  Mit Faktoren: $0{,}8\cdot 1{,}2 = 0{,}96$.
```

### Übungen

```aufgabe
id: za-prozent-grund
titel: Die drei Grundaufgaben
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  a) Wie viel sind $18\,\%$ von $450$?

  b) Wie viel Prozent sind $63$ von $840$?

  c) $30$ sind $12\,\%$ von welchem Grundwert?
teile:
  - typ: zahl
    label: 'a)'
    loesung: "450*0.18"
    fehler:
      - wert: "8100"
        meldung: 'Du hast mit $18$ statt mit $0{,}18$ multipliziert. $18\,\%$ bedeutet $\tfrac{18}{100}$.'
  - typ: zahl
    label: 'b)'
    einheit: "%"
    loesung: "63/840*100"
    fehler:
      - wert: "0.075"
        meldung: 'Das ist der Anteil als Dezimalzahl. In Prozent musst du noch mit $100$ multiplizieren.'
      - wert: "1333.33"
        meldung: 'Du hast $840 : 63$ gerechnet. Der Prozentsatz ist Teil durch Ganzes, also $63 : 840$.'
  - typ: zahl
    label: 'c)'
    loesung: "30/0.12"
    fehler:
      - wert: "3.6"
        meldung: 'Das sind $12\,\%$ **von** $30$. Hier ist $30$ aber der Teil, und das Ganze ist gesucht.'
hinweise:
  - 'Grundformel: $W = G\cdot\tfrac{p}{100}$. Überlege bei jeder Teilaufgabe, welche der drei Größen gesucht ist.'
loesung: |
  Ansatz: Wir ordnen $G$ (Ganzes), $p$ (Prozentsatz) und $W$ (Teil) zu und stellen $W = G\cdot\tfrac{p}{100}$ nach der gesuchten Größe um.
  ---
  a) $W = 450\cdot 0{,}18 = 81$. b) $p = \tfrac{63}{840}\cdot 100 = 7{,}5$, also $7{,}5\,\%$.
  ---
  c) $G = \tfrac{30}{0{,}12} = 250$. Probe: $12\,\%$ von $250$ sind $250\cdot 0{,}12 = 30$.
```

```aufgabe
id: za-ust-rueckrechnen
titel: Nettopreis zurückrechnen
niveau: 1
lernziel: 5
kompetenz: anwenden
angabe: |
  Ein Laptop kostet inklusive $20\,\%$ Umsatzsteuer $1079{,}40$ Euro. Wie hoch ist der Nettopreis, also der Preis ohne Steuer? Wie viel Steuer ist enthalten?
teile:
  - typ: zahl
    label: 'Nettopreis'
    einheit: "Euro"
    loesung: "1079.40/1.2"
    fehler:
      - wert: "863.52"
        meldung: 'Du hast $20\,\%$ vom Bruttopreis abgezogen. Die $20\,\%$ beziehen sich aber auf den Nettopreis. Zurück kommst du durch Division durch $1{,}2$.'
  - typ: zahl
    label: 'Steuer'
    einheit: "Euro"
    loesung: "1079.40 - 1079.40/1.2"
    fehler:
      - wert: "215.88"
        meldung: 'Das sind $20\,\%$ vom Bruttopreis. Die Steuer beträgt $20\,\%$ vom Nettopreis.'
hinweise:
  - 'Der Bruttopreis ist Nettopreis mal $1{,}2$.'
loesung: |
  Ansatz: Bruttopreis $=$ Nettopreis $\cdot 1{,}2$. Zum Zurückrechnen dividieren wir durch $1{,}2$.
  ---
  $N = \tfrac{1079{,}40}{1{,}2} = 899{,}50$ Euro.
  ---
  Steuer: $1079{,}40 - 899{,}50 = 179{,}90$ Euro. Probe: $20\,\%$ von $899{,}50$ Euro sind $179{,}90$ Euro. Vom Bruttopreis sind das nur etwa $16{,}7\,\%$.
```

```aufgabe
id: za-prozent-folge
titel: Aufeinanderfolgende Änderungen
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Gib jeweils die Gesamtänderung in Prozent an (Zunahme positiv, Abnahme negativ):

  a) erst $+25\,\%$, dann $-20\,\%$

  b) zweimal hintereinander $+10\,\%$

  c) dreimal hintereinander $-10\,\%$
teile:
  - typ: zahl
    label: 'a)'
    einheit: "%"
    loesung: "(1.25*0.8 - 1)*100"
    toleranz: 0.01
    fehler:
      - wert: "5"
        meldung: 'Du hast die Prozentsätze addiert: $25 - 20 = 5$. Multipliziere stattdessen die Faktoren $1{,}25$ und $0{,}8$.'
  - typ: zahl
    label: 'b)'
    einheit: "%"
    loesung: "(1.1^2 - 1)*100"
    fehler:
      - wert: "20"
        meldung: 'Die zweite Erhöhung rechnet mit dem schon erhöhten Wert. Multipliziere $1{,}1\cdot 1{,}1$.'
  - typ: zahl
    label: 'c)'
    einheit: "%"
    loesung: "(0.9^3 - 1)*100"
    fehler:
      - wert: "-30"
        meldung: 'Jede Senkung rechnet mit dem schon gesenkten Wert. Der Gesamtfaktor ist $0{,}9^3$, nicht $1 - 3\cdot 0{,}1$.'
hinweise:
  - 'Faktoren multiplizieren, nicht Prozentsätze addieren.'
  - 'Gesamtänderung in Prozent: $(\text{Gesamtfaktor} - 1)\cdot 100$.'
loesung: |
  Ansatz: Jede Änderung ist ein Faktor. Mehrere Änderungen ergeben das Produkt der Faktoren.
  ---
  a) $1{,}25\cdot 0{,}8 = 1$: Gesamtänderung $0\,\%$. Der Wert ist wieder der alte.
  ---
  b) $1{,}1^2 = 1{,}21$: $+21\,\%$. c) $0{,}9^3 = 0{,}729$: $-27{,}1\,\%$.
  ---
  Kontrolle c) mit $100$: $100 \to 90 \to 81 \to 72{,}9$. Es fehlen $27{,}1$, also $27{,}1\,\%$.
```

```aufgabe
id: za-prozent-gewichtet
titel: Teilzeit in zwei Filialen
niveau: 2
lernziel: 5
kompetenz: modellieren
angabe: |
  Filiale A hat $120$ Beschäftigte, davon arbeiten $25\,\%$ in Teilzeit. Filiale B hat $80$ Beschäftigte, davon $40\,\%$ in Teilzeit.
  Wie viel Prozent aller Beschäftigten beider Filialen arbeiten in Teilzeit?
teile:
  - typ: zahl
    einheit: "%"
    loesung: "(120*0.25 + 80*0.4)/(120 + 80)*100"
    fehler:
      - wert: "32.5"
        meldung: 'Das ist der Mittelwert der beiden Prozentsätze. Er stimmt nur, wenn beide Filialen gleich groß sind. Rechne mit den Anzahlen.'
      - wert: "65"
        meldung: 'Du hast die Prozentsätze addiert. Gesucht ist ein Anteil an allen $200$ Beschäftigten.'
hinweise:
  - 'Berechne für jede Filiale die Anzahl der Teilzeitkräfte.'
  - 'Teile die Gesamtzahl der Teilzeitkräfte durch die Gesamtzahl der Beschäftigten.'
gefuehrt:
  - text: 'Wie viele Beschäftigte in Filiale A arbeiten in Teilzeit?'
    teil: { typ: zahl, loesung: "120*0.25" }
    erklaerung: '$120\cdot 0{,}25 = 30$ Personen.'
  - text: 'Wie viele in Filiale B?'
    teil: { typ: zahl, loesung: "80*0.4" }
    erklaerung: '$80\cdot 0{,}4 = 32$ Personen.'
  - text: 'Wie viele Beschäftigte gibt es insgesamt, und wie viele davon in Teilzeit?'
    erklaerung: 'Insgesamt $120 + 80 = 200$ Beschäftigte, davon $30 + 32 = 62$ in Teilzeit.'
  - text: 'Welcher Prozentsatz ist das?'
    teil: { typ: zahl, loesung: "62/200*100" }
    erklaerung: '$\tfrac{62}{200} = 0{,}31 = 31\,\%$.'
loesung: |
  Ansatz: Prozentsätze verschieden großer Gruppen darf man nicht mitteln. Wir zählen die Personen.
  ---
  A: $120\cdot 0{,}25 = 30$ Personen. B: $80\cdot 0{,}4 = 32$ Personen.
  ---
  Zusammen $62$ von $200$ Beschäftigten: $\tfrac{62}{200}\cdot 100 = 31\,\%$.
  ---
  Plausibel: Das Ergebnis liegt zwischen $25\,\%$ und $40\,\%$, aber näher bei $25\,\%$, weil Filiale A größer ist.
```

```aufgabe
id: za-rabatt-skonto
titel: Rabatt und Skonto
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Ein Fahrrad kostet $250$ Euro. Das Geschäft gewährt $10\,\%$ Rabatt. Wer sofort zahlt, bekommt auf den reduzierten Preis noch $2\,\%$ Skonto.

  a) Wie viel zahlt man bei sofortiger Zahlung?

  b) Wie viel Prozent Nachlass sind das insgesamt?
teile:
  - typ: zahl
    label: 'a)'
    einheit: Euro
    loesung: "250*0.9*0.98"
    toleranz: 0.01
    fehler:
      - wert: "220"
        meldung: 'Du hast $12\,\%$ von $250$ Euro abgezogen. Das Skonto bezieht sich aber auf den schon reduzierten Preis.'
  - typ: zahl
    label: 'b)'
    einheit: "%"
    loesung: "(1 - 0.9*0.98)*100"
    fehler:
      - wert: "12"
        meldung: 'Die beiden Nachlässe haben verschiedene Grundwerte. Multipliziere die Faktoren $0{,}9$ und $0{,}98$.'
hinweise:
  - 'Rabatt $10\,\%$ heißt Faktor $0{,}9$, Skonto $2\,\%$ heißt Faktor $0{,}98$.'
  - 'Gesamtnachlass in Prozent: $(1 - \text{Gesamtfaktor})\cdot 100$.'
loesung: |
  Ansatz: Beide Nachlässe sind Abnahmefaktoren. Nacheinander angewandt werden sie multipliziert.
  ---
  a) $250\cdot 0{,}9 = 225$ Euro nach Rabatt, dann $225\cdot 0{,}98 = 220{,}50$ Euro.
  ---
  b) Gesamtfaktor $0{,}9\cdot 0{,}98 = 0{,}882$. Nachlass $1 - 0{,}882 = 0{,}118$, also $11{,}8\,\%$.
  ---
  Kontrolle: $250\cdot 0{,}882 = 220{,}50$ Euro. Der Nachlass ist etwas kleiner als $12\,\%$, weil das Skonto vom kleineren Betrag berechnet wird.
```

```aufgabe
id: za-prozentpunkte
titel: Prozent oder Prozentpunkte?
niveau: 3
lernziel: 5
kompetenz: begruenden
angabe: |
  Der Anteil fehlerhafter Programmversionen in einem Softwareprojekt sinkt von $8\,\%$ auf $6\,\%$.

  a) Um wie viele Prozentpunkte ist der Anteil gesunken?

  b) Gib die relative Änderung des Anteils in Prozent an (Abnahme negativ).

  c) Ein Bericht schreibt: „Fehlerquote um $2\,\%$ gesenkt.“ Erkläre, was daran irreführend ist.
teile:
  - typ: zahl
    label: 'a)'
    einheit: "Prozentpunkte"
    loesung: "8 - 6"
    fehler:
      - wert: "25"
        meldung: 'Das ist die relative Änderung in Prozent. Prozentpunkte sind einfach die Differenz der beiden Prozentsätze.'
  - typ: zahl
    label: 'b)'
    einheit: "%"
    loesung: "(6 - 8)/8*100"
    fehler:
      - wert: "-2"
        meldung: '$2$ ist die Differenz in Prozentpunkten. Die relative Änderung bezieht diese Differenz auf den alten Wert $8\,\%$.'
      - wert: "25"
        meldung: 'Der Betrag stimmt. Gib eine Abnahme negativ an.'
  - typ: text
    label: 'c)'
    muster: |
      Gesunken ist der Anteil um $2$ Prozent**punkte**, relativ aber um $25\,\%$. „Um $2\,\%$“ würde bedeuten, dass die neue Quote
      $8\,\% \cdot 0{,}98 = 7{,}84\,\%$ beträgt. Die Formulierung unterschätzt die Verbesserung also deutlich.
hinweise:
  - 'Prozentpunkte sind die Differenz der Prozentsätze.'
  - 'Die relative Änderung ist $\tfrac{\text{neu} - \text{alt}}{\text{alt}}$, hier mit dem alten Wert $8\,\%$.'
loesung: |
  Ansatz: Wir unterscheiden die absolute Differenz der Prozentsätze (Prozentpunkte) von der relativen Änderung (Prozent).
  ---
  a) $8\,\% - 6\,\% = 2$ Prozentpunkte.
  ---
  b) $\tfrac{6 - 8}{8} = -0{,}25$, also ein Rückgang um $25\,\%$.
  ---
  c) „Um $2\,\%$“ hieße relativ zu $8\,\%$, also nur auf $8\cdot 0{,}98 = 7{,}84\,\%$. Richtig wäre „um $2$ Prozentpunkte“ oder „um $25\,\%$“.
```

```aufgabe
id: za-prozent-zurueck
titel: Zurück zum Ausgangswert
niveau: 3
lernziel: 5
kompetenz: verstehen
angabe: |
  a) Ein Aktienkurs fällt um $20\,\%$. Um wie viel Prozent muss er danach steigen, um wieder den Anfangswert zu erreichen?

  b) Nach einer Preissenkung um $15\,\%$ kostet ein Artikel $68$ Euro. Wie viel hat er vorher gekostet?
teile:
  - typ: zahl
    label: 'a)'
    einheit: "%"
    loesung: "(1/0.8 - 1)*100"
    fehler:
      - wert: "20"
        meldung: 'Nach dem Fall ist der Kurs kleiner. $20\,\%$ von diesem kleineren Wert reichen nicht, um den Verlust auszugleichen.'
  - typ: zahl
    label: 'b)'
    einheit: Euro
    loesung: "68/0.85"
    fehler:
      - wert: "78.2"
        meldung: 'Du hast $15\,\%$ auf $68$ Euro aufgeschlagen. Die $15\,\%$ beziehen sich aber auf den alten Preis. Dividiere durch den Faktor $0{,}85$.'
hinweise:
  - 'a) Nach dem Fall hat der Kurs den Faktor $0{,}8$. Welcher Faktor $q$ erfüllt $0{,}8\cdot q = 1$?'
  - 'b) Alter Preis mal $0{,}85$ ergibt $68$ Euro. Löse nach dem alten Preis auf.'
loesung: |
  Ansatz: Wir schreiben beide Änderungen als Faktoren und machen sie durch Division rückgängig.
  ---
  a) Gesucht ist $q$ mit $0{,}8\cdot q = 1$, also $q = \tfrac{1}{0{,}8} = 1{,}25$. Der Kurs muss um $25\,\%$ steigen.
  Mit Zahlen: $100 \to 80$, und $25\,\%$ von $80$ sind $20$. So kommt man zurück auf $100$.
  ---
  b) $P\cdot 0{,}85 = 68$, also $P = \tfrac{68}{0{,}85} = 80$ Euro.
  ---
  Probe zu b): $80\cdot 0{,}85 = 68$ Euro. Merke: Ein Verlust in Prozent braucht einen größeren prozentualen Gewinn zum Ausgleich.
```

## Dezimaldarstellung, rationale und irrationale Zahlen

```aufgabe
id: za-check-ein-drittel
titel: Ein Drittel als Kommazahl
niveau: 1
art: check
angabe: |
  Welche Kommazahl ist **genau** gleich $\tfrac13$?
  Vorwissen: [1.5 Bruchrechnen](/lernen/mathe3/zahlen/bruchrechnen).
teile:
  - typ: auswahl
    optionen: ['$0{,}3$', '$0{,}33$', '$0{,}333$', '$0{,}333\ldots$ mit unendlich vielen Dreiern']
    richtig: [3]
    fehler:
      - wert: 0
        meldung: '$0{,}3 = \tfrac{3}{10}$, und $3\cdot\tfrac{3}{10} = 0{,}9$, nicht $1$. Das ist nur eine Näherung.'
      - wert: 1
        meldung: '$3\cdot 0{,}33 = 0{,}99$, nicht $1$. Jede abbrechende Kommazahl ist hier nur eine Näherung.'
      - wert: 2
        meldung: '$3\cdot 0{,}333 = 0{,}999$. Es fehlt immer noch etwas zu $1$.'
hinweise:
  - 'Prüfe jede Zahl: Ergibt sie mal $3$ genau $1$?'
loesung: |
  Bei der Division $1 : 3$ bleibt bei jedem Schritt der Rest $1$, und es kommt immer wieder die Ziffer $3$.
  ---
  Die Division bricht nie ab: $\tfrac13 = 0{,}333\ldots$ Man schreibt $0{,}\overline{3}$. Jede abgebrochene Kommazahl ist nur eine Näherung.
```

In dieser Lektion geht es um die Frage, welche Kommazahlen Brüche sind. Die Antwort führt zu einer großen
Entdeckung: Es gibt Zahlen auf der Zahlengeraden, die **kein** Bruch sind. Man nennt sie **irrational**. Das
bekannteste Beispiel ist $\sqrt2$. Den Beweis dafür führen wir in
[1.8 Beweisen](/lernen/mathe3/zahlen/beweisen-direkt-durch-kontraposition-und-durch-widerspruch).

### Abbrechende Dezimalzahlen

Die Stellen nach dem Komma bedeuten Zehntel, Hundertstel, Tausendstel und so weiter. So ist
$0{,}375 = \tfrac{3}{10} + \tfrac{7}{100} + \tfrac{5}{1000} = \tfrac{375}{1000}$. Jede **abbrechende** Dezimalzahl,
also eine mit endlich vielen Nachkommastellen, ist deshalb ein Bruch mit einer Zehnerpotenz im Nenner.

:::beispiel[Eine Küchenwaage]
Eine Waage zeigt $0{,}125\,\text{kg}$ an. Welcher Bruchteil eines Kilogramms ist das?

1. Drei Nachkommastellen bedeuten Tausendstel: $0{,}125 = \tfrac{125}{1000}$.
2. Kürzen durch $\operatorname{ggT}(125, 1000) = 125$: $\tfrac{125}{1000} = \tfrac18$.
3. Antwort: Auf der Waage liegt $\tfrac18\,\text{kg}$, also $125\,\text{g}$.
:::

Welche Brüche ergeben eine abbrechende Dezimalzahl? Der Nenner muss in eine Zehnerpotenz $10^k = 2^k\cdot 5^k$
passen. Ein **vollständig gekürzter** Bruch bricht deshalb genau dann ab, wenn sein Nenner nur die Primfaktoren $2$
und $5$ enthält. So bricht $\tfrac{3}{8}$ ab ($8 = 2^3$), aber $\tfrac13$ nicht.

### Periodische Dezimalzahlen

Dividiert man schriftlich $3 : 7$, so entstehen der Reihe nach Reste. Jeder Rest liegt zwischen $0$ und $6$, denn er
ist kleiner als $7$. Kommt der Rest $0$, bricht die Division ab. Sonst bleiben nur die sechs Reste $1$ bis $6$, also
wiederholt sich spätestens nach $7$ Schritten ein Rest. Ab dort wiederholt sich alles. Daher kommt
$$\frac37 = 0{,}428571\,428571\ldots = 0{,}\overline{428571}.$$
Der Strich über den Ziffern markiert die **Periode**, also den Block, der sich unendlich oft wiederholt. Die
Periode eines gekürzten Bruchs $\tfrac ab$ ist höchstens $b - 1$ Stellen lang.

:::satz[Dezimaldarstellung rationaler Zahlen]
Eine reelle Zahl ist genau dann **rational**, wenn ihre Dezimaldarstellung **abbricht** oder ab einer Stelle
**periodisch** ist.
:::

Die eine Richtung zeigt das Argument mit den Resten: Jeder Bruch bricht ab oder wird periodisch. Die andere Richtung
zeigt das folgende Verfahren: Jede periodische Zahl lässt sich als Bruch schreiben.

:::beispiel[Reine und gemischte Periode]
**Rein periodisch:** $x = 0{,}\overline{36}$. Die Periode hat $2$ Stellen.

1. Mit $100$ multiplizieren, damit die Periode um zwei Stellen nach links rutscht: $100x = 36{,}\overline{36}$.
2. Die ursprüngliche Zahl abziehen. Die unendlichen Nachkommastellen sind gleich und fallen weg: $100x - x = 36$.
3. Auflösen und kürzen: $99x = 36$, also $x = \tfrac{36}{99} = \tfrac{4}{11}$.

**Mit Vorperiode:** $y = 0{,}1\overline{6}$. Hier steht vor der Periode noch die Ziffer $1$. Zuerst schiebt man sie vor
das Komma: $10y = 1{,}\overline{6}$. Dann noch eine Stelle für die Periode: $100y = 16{,}\overline{6}$. Subtrahieren
ergibt $100y - 10y = 15$, also $90y = 15$ und $y = \tfrac{15}{90} = \tfrac16$.
:::

:::merke[Periodische Dezimalzahl in einen Bruch umwandeln]
1. $x$ ist die Dezimalzahl. Hat sie eine Vorperiode, multipliziere so, dass die Vorperiode vor dem Komma steht.
2. Multipliziere zusätzlich mit $10^k$, wobei $k$ die Länge der Periode ist.
3. Ziehe die beiden Zahlen voneinander ab: Die Periode fällt weg.
4. Nach $x$ auflösen und vollständig kürzen.

Kurzform für reine Perioden: $0{,}\overline{z_1 \dots z_k} = \dfrac{z_1\dots z_k}{99\dots9}$ mit $k$ Neunern im Nenner. Dabei ist $z_1\dots z_k$ die Zahl aus den Ziffern der Periode, zum Beispiel $0{,}\overline{36} = \tfrac{36}{99}$.
:::

:::intuition[Ist 0,999… gleich 1?]
Ja. Mit dem Verfahren: $x = 0{,}\overline{9}$, $10x = 9{,}\overline9$, also $9x = 9$ und $x = 1$. Anschaulich: Zwischen
$0{,}\overline 9$ und $1$ passt keine andere Zahl. Der Abstand ist kleiner als jede positive Zahl, also null. Manche
Zahlen haben eben zwei Dezimaldarstellungen. Genauer begründet wird das in [Kapitel 11](/lernen/mathe3/grenzwerte-folgen)
mit der geometrischen Reihe.
:::

:::achtung[Eine Näherung ist kein exakter Wert]
**Falsch:** $\tfrac13 = 0{,}33$, also $3\cdot\tfrac13 = 0{,}99$.

**Richtig:** $\tfrac13 = 0{,}\overline{3}$ exakt, und $3\cdot\tfrac13 = 1$. Der Wert $0{,}33$ ist nur eine Näherung, man
schreibt $\tfrac13 \approx 0{,}33$. In exakten Rechnungen bleibt der Bruch $\tfrac13$ stehen.
:::

```aufgabe
id: za-check-periodisch-bruch
titel: Abbrechend, periodisch oder keins von beiden?
niveau: 1
art: check
angabe: |
  Ist die Zahl $0{,}12\overline{7}$ (also $0{,}12777\ldots$) ein Bruch?
teile:
  - typ: auswahl
    optionen:
      - 'Ja, denn ab einer Stelle ist sie periodisch.'
      - 'Nein, denn sie hat unendlich viele Nachkommastellen.'
      - 'Nein, denn die Periode beginnt nicht direkt nach dem Komma.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Auch $\tfrac13 = 0{,}333\ldots$ hat unendlich viele Stellen. Entscheidend ist, ob sich ein Block wiederholt.'
      - wert: 2
        meldung: 'Eine Vorperiode ist erlaubt. Der Satz verlangt nur, dass die Zahl **ab einer Stelle** periodisch ist.'
hinweise:
  - 'Lies den Satz über die Dezimaldarstellung rationaler Zahlen noch einmal genau.'
loesung: |
  Die Zahl ist ab der dritten Nachkommastelle periodisch. Nach dem Satz ist sie rational.
  ---
  Mit dem Verfahren: $1000x - 100x = 127{,}\overline7 - 12{,}\overline7 = 115$, also $x = \tfrac{115}{900} = \tfrac{23}{180}$.
```

### Irrationale Zahlen

Es gibt Dezimalzahlen, die weder abbrechen noch periodisch werden. Ein einfaches Beispiel ist
$$0{,}1\,01\,001\,0001\,00001\ldots$$
Nach jeder $1$ kommt eine Null mehr. Die Nullblöcke werden immer länger, also kann sich kein fester Block
wiederholen. Nach dem Satz ist diese Zahl **kein Bruch**. Solche Zahlen heißen **irrational**.

Die wichtigsten irrationalen Zahlen sind:

- $\sqrt2 = 1{,}41421356\ldots$, die Zahl, deren Quadrat $2$ ist. Sie ist die Länge der Diagonale eines Quadrats mit der Seitenlänge $1$.
- Allgemein $\sqrt n$ für jede natürliche Zahl $n$, die keine Quadratzahl ist, also $\sqrt3$, $\sqrt5$, $\sqrt6$ und so weiter.
- Die Kreiszahl $\pi = 3{,}14159\ldots$ und die eulersche Zahl $e = 2{,}71828\ldots$, die du in [1.11 Logarithmen](/lernen/mathe3/zahlen/logarithmen) kennenlernst.

**Nichtbeispiel:** $\sqrt{49} = 7$ ist rational, denn $49$ ist eine Quadratzahl. Auch $\tfrac{22}{7} = 3{,}\overline{142857}$
ist rational. Es ist nur eine gute Näherung für $\pi$, nicht $\pi$ selbst.

:::satz[Rational und irrational gemischt]
Ist $r$ rational und $x$ irrational, dann ist $r + x$ irrational. Ist zusätzlich $r \neq 0$, dann ist auch $r\cdot x$ irrational.
:::

:::beispiel[Warum ist 3 + √2 irrational?]
1. Angenommen, $s = 3 + \sqrt2$ wäre ein Bruch.
2. Dann wäre auch $\sqrt2 = s - 3$ ein Bruch, denn die Differenz zweier Brüche ist ein Bruch. Das ist die Abgeschlossenheit von $\Q$ bezüglich der Subtraktion.
3. $\sqrt2$ ist aber kein Bruch. Die Annahme war also falsch, und $3 + \sqrt2$ ist irrational.

Für ein Produkt geht es genauso: Wäre $t = 5\sqrt2$ ein Bruch, dann wäre auch $\sqrt2 = t : 5$ ein Bruch. Dafür braucht man, dass der rationale Faktor nicht $0$ ist.
Solche Begründungen heißen Widerspruchsbeweise. Sie werden in [1.8 Beweisen](/lernen/mathe3/zahlen/beweisen-direkt-durch-kontraposition-und-durch-widerspruch) genau erklärt.
:::

:::achtung[Irrational plus irrational ist nicht immer irrational]
**Falsch:** „$1 + \sqrt2$ und $1 - \sqrt2$ sind irrational, also ist auch ihre Summe irrational.“

**Richtig:** $(1 + \sqrt2) + (1 - \sqrt2) = 2$ ist rational. Auch $\sqrt2\cdot\sqrt2 = 2$ und $\sqrt2 - \sqrt2 = 0$ sind
rational. Die Menge der irrationalen Zahlen ist bezüglich keiner der vier Grundrechenarten abgeschlossen. Der Satz
„Rational und irrational gemischt“ gilt nur, wenn **eine** der beiden Zahlen rational ist.
:::

### Annähern durch Brüche

Zwischen zwei verschiedenen Brüchen liegt immer ein weiterer, zum Beispiel liegt zwischen $r$ und $s$ ihr Mittelwert $\tfrac{r + s}{2}$. Trotzdem
hat $\Q$ „Löcher“, etwa an der Stelle $\sqrt2$. Jede irrationale Zahl lässt sich aber beliebig genau durch Brüche
annähern, zum Beispiel durch ihre abgeschnittenen Dezimaldarstellungen:
$$1 < 1{,}4 < 1{,}41 < 1{,}414 < \dots < \sqrt2 < \dots < 1{,}415 < 1{,}42 < 1{,}5 < 2.$$
Die Intervalle werden immer kleiner und enthalten alle $\sqrt2$. Man nennt das eine **Intervallschachtelung**. Dass
jede solche Schachtelung genau eine reelle Zahl trifft, heißt **Vollständigkeit** von $\R$. Das ist der Inhalt von
[Kapitel 11](/lernen/mathe3/grenzwerte-folgen).

```aufgabe
id: za-check-naeherung-vorhersage
titel: Was passiert mit dem Abstand?
niveau: 1
art: check
angabe: |
  Schneidet man $\sqrt2 = 1{,}41421356\ldots$ nach $n$ Nachkommastellen ab, erhält man $a_1 = 1{,}4$, $a_2 = 1{,}41$, $a_3 = 1{,}414$ und so weiter.
  Sag vorher, bevor du das Widget darunter benutzt: Was passiert mit dem Abstand zwischen $a_n$ und $\sqrt2$, wenn $n$ wächst?
teile:
  - typ: auswahl
    optionen:
      - 'Er wird kleiner und ist ab einem $n$ genau null.'
      - 'Er wird beliebig klein, aber nie genau null.'
      - 'Er bleibt ungefähr gleich groß.'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Wäre der Abstand einmal null, wäre $\sqrt2$ gleich einer abbrechenden Dezimalzahl, also ein Bruch. Das ist $\sqrt2$ aber nicht.'
      - wert: 2
        meldung: 'Jede weitere Stelle macht die Näherung ungefähr zehnmal genauer.'
hinweise:
  - 'Jedes $a_n$ ist ein Bruch. Kann ein Bruch genau gleich $\sqrt2$ sein?'
loesung: |
  Mit jeder weiteren Stelle wird der Abstand ungefähr zehnmal kleiner, er ist kleiner als $10^{-n}$.
  ---
  Er ist kleiner als $0{,}1$, dann $0{,}01$, dann $0{,}001$ und so weiter.
  ---
  Er wird aber nie null, denn jedes $a_n$ ist ein Bruch und $\sqrt2$ ist keiner. Prüfe das im Widget.
```

```widget
name: folge
titel: Dezimalnäherungen von √2
props:
  a: "floor(sqrt(2) * 10^n) / 10^n"
  grenzwert: 1.41421356
  n_max: 8
  epsilon: 0.001
```

Im Widget ist $a_n$ die nach $n$ Nachkommastellen abgeschnittene Dezimalzahl von $\sqrt2$. **Beobachte:** Ab welchem
$n$ liegen alle Punkte im Band der Breite $0{,}001$ um $\sqrt2$? **Erkläre:** Jedes $a_n$ ist ein Bruch, zum Beispiel
$a_2 = 1{,}41 = \tfrac{141}{100}$. Der Abstand zu $\sqrt2$ wird kleiner als jede Schranke, erreicht aber nie null.

:::achtung[Der Taschenrechner kennt keine irrationalen Zahlen]
**Falsch:** „Der Taschenrechner zeigt $\sqrt2 = 1{,}414213562$. Also ist $\sqrt2 = \tfrac{1414213562}{1000000000}$ ein Bruch.“

**Richtig:** Der Taschenrechner rechnet mit endlich vielen Stellen und zeigt nur eine Näherung:
$1{,}414213562^2 \approx 1{,}9999999989$, nicht genau $2$. In exakten Rechnungen bleibt $\sqrt2$ stehen.
:::

```reflexion
frage: 'Warum muss sich die Dezimaldarstellung eines Bruchs $\tfrac{a}{b}$ spätestens nach $b - 1$ Schritten wiederholen, wenn sie nicht abbricht?'
antwort: |
  Bei der schriftlichen Division durch $b$ ist jeder Rest eine der Zahlen $0, 1, \dots, b - 1$. Kommt der Rest $0$, bricht die Division ab.
  Sonst stehen nur die $b - 1$ Reste $1, \dots, b - 1$ zur Verfügung. Nach höchstens $b - 1$ Schritten muss deshalb ein Rest zum zweiten Mal auftreten.
  Von da an rechnet man genau dasselbe wie beim ersten Mal. Die Ziffern wiederholen sich, und es entsteht eine Periode.
```

### Übungen

```aufgabe
id: za-dezimal-bruch
titel: Abbrechende Dezimalzahlen als Bruch
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Schreibe als vollständig gekürzten Bruch: a) $0{,}45$, b) $2{,}4$
teile:
  - typ: zahl
    label: 'a)'
    loesung: "45/100"
    anzeige: '\tfrac{9}{20}'
    fehler:
      - wert: "45/10"
        meldung: 'Zwei Nachkommastellen bedeuten Hundertstel, nicht Zehntel. $\tfrac{45}{10}$ wäre $4{,}5$.'
  - typ: zahl
    label: 'b)'
    loesung: "24/10"
    anzeige: '\tfrac{12}{5}'
    fehler:
      - wert: "24/100"
        meldung: 'Eine Nachkommastelle bedeutet Zehntel. $\tfrac{24}{100}$ wäre $0{,}24$.'
hinweise:
  - 'Zähle die Nachkommastellen: eine Stelle heißt Zehntel, zwei Stellen heißen Hundertstel.'
loesung: |
  Ansatz: Wir schreiben die Zahl als Bruch mit einer Zehnerpotenz im Nenner und kürzen.
  ---
  a) $0{,}45 = \tfrac{45}{100}$. Kürzen durch $5$: $\tfrac{9}{20}$. b) $2{,}4 = \tfrac{24}{10}$. Kürzen durch $2$: $\tfrac{12}{5}$.
  ---
  Probe: $9 : 20 = 0{,}45$ und $12 : 5 = 2{,}4$.
```

```aufgabe
id: za-periode-bruch
titel: Periodische Zahlen als Bruch
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Schreibe als vollständig gekürzten Bruch:

  a) $0{,}\overline{45}$, b) $2{,}\overline{142857}$, c) $0{,}8\overline{3}$
teile:
  - typ: zahl
    label: 'a)'
    loesung: "45/99"
    anzeige: '\tfrac{5}{11}'
    fehler:
      - wert: "9/20"
        meldung: 'Das ist $0{,}45$ ohne Periode. Bei einer Periode mit zwei Stellen steht im Nenner $99$, nicht $100$.'
  - typ: zahl
    label: 'b)'
    loesung: "2 + 142857/999999"
    anzeige: '\tfrac{15}{7}'
    fehler:
      - wert: "1/7"
        meldung: 'Das ist nur der Nachkommaanteil. Die $2$ vor dem Komma gehört auch dazu.'
  - typ: zahl
    label: 'c)'
    loesung: "(83-8)/90"
    anzeige: '\tfrac{5}{6}'
    fehler:
      - wert: "83/99"
        meldung: 'Die $8$ wiederholt sich nicht, nur die $3$. Das ist eine Vorperiode. Verwende $100x - 10x$.'
hinweise:
  - 'Bei einer Periode mit $k$ Stellen mit $10^k$ multiplizieren und die ursprüngliche Zahl abziehen.'
  - 'Bei c) gibt es eine Vorperiode: Bilde $10x$ und $100x$ und ziehe sie voneinander ab.'
loesung: |
  Ansatz: Wir multiplizieren so mit Zehnerpotenzen, dass die Periode beim Subtrahieren wegfällt.
  ---
  a) $100x - x = 45$, also $x = \tfrac{45}{99} = \tfrac{5}{11}$, gekürzt durch $9$.
  ---
  b) $0{,}\overline{142857} = \tfrac{142857}{999999} = \tfrac17$, denn $7\cdot 142857 = 999999$. Also $2 + \tfrac17 = \tfrac{15}{7}$.
  ---
  c) $x = 0{,}8\overline3$: $100x = 83{,}\overline3$ und $10x = 8{,}\overline3$. Subtraktion: $90x = 75$, also $x = \tfrac{75}{90} = \tfrac56$.
  Probe c): $5 : 6 = 0{,}8333\ldots$
```

```aufgabe
id: za-zahlen-zuordnen
titel: Welche Zahlen sind rational?
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  Welche der folgenden Zahlen sind **rational**?
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$-17$'
      - '$\sqrt{49}$'
      - '$\sqrt{8}$'
      - '$0{,}\overline{3}$'
      - '$\pi$'
      - '$\dfrac{\sqrt{12}}{\sqrt{3}}$'
      - '$1{,}010010001\ldots$ (nach jeder $1$ eine Null mehr)'
    richtig: [0, 1, 3, 5]
    fehler:
      - wert: [0, 1, 3]
        meldung: 'Vereinfache $\tfrac{\sqrt{12}}{\sqrt3}$: Es ist $\sqrt{12} = \sqrt{4\cdot 3} = 2\sqrt3$. Was bleibt nach dem Kürzen?'
      - wert: [0, 1, 2, 3, 5]
        meldung: '$8$ ist keine Quadratzahl, also ist $\sqrt8$ irrational. $\sqrt8 = 2\sqrt2$ ist rational mal irrational.'
      - wert: [0, 1, 3, 5, 6]
        meldung: 'Die letzte Zahl hat unendlich viele Stellen, aber keine Periode: Die Nullblöcke werden immer länger.'
hinweise:
  - 'Vereinfache zuerst: $\sqrt{49}$ ist eine ganze Zahl. Und $\sqrt{12} = \sqrt{4\cdot 3} = \sqrt4\cdot\sqrt3 = 2\sqrt3$, denn die Wurzel eines Produkts ist das Produkt der Wurzeln, siehe [1.9 Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln).'
  - 'Eine Dezimalzahl ist genau dann rational, wenn sie abbricht oder periodisch ist.'
loesung: |
  Ansatz: Wir vereinfachen jede Zahl und prüfen, ob ein Bruch herauskommt.
  ---
  $-17 = \tfrac{-17}{1}$ ist rational. $\sqrt{49} = 7$ ist rational. $\tfrac{\sqrt{12}}{\sqrt3} = \tfrac{2\sqrt3}{\sqrt3} = 2$ ist rational.
  ---
  $0{,}\overline{3} = \tfrac13$ ist periodisch, also rational.
  ---
  $\sqrt8 = 2\sqrt2$ ist irrational, ebenso $\pi$. Die letzte Zahl ist weder abbrechend noch periodisch, also irrational.
```

```aufgabe
id: za-irrational-erkennen
titel: Rational oder irrational?
niveau: 2
lernziel: 2
kompetenz: begruenden
angabe: |
  Welche der folgenden Zahlen sind **irrational**?
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$\sqrt{2{,}25}$'
      - '$3 - \sqrt5$'
      - '$\dfrac{22}{7}$'
      - '$\dfrac{\pi}{2}$'
      - '$\sqrt2\cdot\sqrt2$'
      - '$\sqrt2 + (1 - \sqrt2)$'
    richtig: [1, 3]
    fehler:
      - wert: [1, 2, 3]
        meldung: '$\tfrac{22}{7}$ ist ein Bruch ganzer Zahlen und damit rational. Es ist nur eine Näherung für $\pi$.'
      - wert: [0, 1, 3]
        meldung: 'Prüfe $1{,}5^2$. Ist $2{,}25$ vielleicht ein Quadrat?'
      - wert: [1, 3, 5]
        meldung: 'Fasse $\sqrt2 + (1 - \sqrt2)$ zusammen. Die beiden Wurzeln heben sich auf.'
hinweise:
  - 'Rechne jeden Ausdruck so weit wie möglich aus.'
  - 'Rational plus irrational ist irrational. Rational (ungleich $0$) mal irrational ist irrational. Zwei irrationale Zahlen können sich aber aufheben.'
loesung: |
  Ansatz: Wir vereinfachen und wenden dann den Satz über rationale und irrationale Zahlen an.
  ---
  $\sqrt{2{,}25} = 1{,}5 = \tfrac32$, denn $1{,}5^2 = 2{,}25$: rational. $\tfrac{22}{7}$ ist ein Bruch: rational.
  ---
  $3 - \sqrt5$: rational minus irrational, also irrational. $\tfrac\pi2 = \tfrac12\cdot\pi$: rational ungleich $0$ mal irrational, also irrational.
  ---
  $\sqrt2\cdot\sqrt2 = 2$ und $\sqrt2 + 1 - \sqrt2 = 1$ sind rational. Irrational sind also nur $3 - \sqrt5$ und $\tfrac\pi2$.
```

```aufgabe
id: za-periode-vorperiode
titel: Eine Periode mit Vorperiode
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Schreibe $y = 0{,}1\overline{36}$ als vollständig gekürzten Bruch. Dabei ist die $1$ die Vorperiode, und $36$ wiederholt sich: $0{,}1363636\ldots$
teile:
  - typ: zahl
    loesung: "(136 - 1)/990"
    anzeige: '\tfrac{3}{22}'
    toleranz: 0.0001
    fehler:
      - wert: "136/999"
        meldung: 'Die $1$ wiederholt sich nicht. Du musst zuerst die Vorperiode vor das Komma schieben.'
hinweise:
  - 'Multipliziere mit $10$, um die Vorperiode vor das Komma zu bringen, und zusätzlich mit $100$ für die zweistellige Periode.'
  - 'Ziehe $10y$ von $1000y$ ab. Dann fallen die Nachkommastellen weg.'
gefuehrt:
  - text: 'Schiebe die Vorperiode vor das Komma. Welche Zahl ist $10y$?'
    teil:
      typ: zahl
      loesung: "1 + 36/99"
      anzeige: '1{,}\overline{36}'
    erklaerung: '$10y = 1{,}\overline{36} = 1{,}363636\ldots$'
  - text: 'Die Periode hat zwei Stellen. Was ist $1000y$, also $100\cdot 10y$?'
    teil:
      typ: zahl
      loesung: "136 + 36/99"
      anzeige: '136{,}\overline{36}'
    erklaerung: '$1000y = 136{,}\overline{36}$. Die Nachkommastellen sind dieselben wie bei $10y$.'
  - text: 'Ziehe ab: Was ist $1000y - 10y$?'
    teil:
      typ: zahl
      loesung: "135"
      fehler:
        - wert: "136"
          meldung: 'Von $136{,}\overline{36}$ wird $1{,}\overline{36}$ abgezogen, nicht nur der Nachkommaanteil.'
    erklaerung: '$136{,}\overline{36} - 1{,}\overline{36} = 135$. Also $990y = 135$.'
  - text: 'Löse nach $y$ auf und kürze vollständig.'
    teil:
      typ: zahl
      loesung: "135/990"
      anzeige: '\tfrac{3}{22}'
    erklaerung: '$y = \tfrac{135}{990}$. Kürzen durch $45$: $\tfrac{3}{22}$.'
loesung: |
  Ansatz: Zuerst die Vorperiode vor das Komma schieben, dann um die Periodenlänge weiterschieben und subtrahieren.
  ---
  $10y = 1{,}\overline{36}$ und $1000y = 136{,}\overline{36}$.
  ---
  $1000y - 10y = 990y = 135$, also $y = \tfrac{135}{990} = \tfrac{3}{22}$, gekürzt durch $45$.
  ---
  Probe: $3 : 22 = 0{,}13636\ldots$ Das ist genau $0{,}1\overline{36}$.
```

```aufgabe
id: za-abbrechend-welche
titel: Welche Brüche brechen ab?
niveau: 3
lernziel: 2
kompetenz: begruenden
angabe: |
  Welche der folgenden Brüche haben eine **abbrechende** Dezimaldarstellung? Entscheide ohne Taschenrechner, nur mit den Primfaktoren der Nenner.
teile:
  - typ: auswahl
    mehrfach: true
    optionen: ['$\dfrac{7}{20}$', '$\dfrac{5}{12}$', '$\dfrac{11}{40}$', '$\dfrac{3}{14}$', '$\dfrac{9}{15}$']
    richtig: [0, 2, 4]
    fehler:
      - wert: [0, 2]
        meldung: 'Kürze $\tfrac{9}{15}$ zuerst. Das Kriterium gilt nur für vollständig gekürzte Brüche.'
      - wert: [0, 2, 3]
        meldung: '$14 = 2\cdot 7$ enthält die $7$. Mit einer $7$ im Nenner passt der Bruch in keine Zehnerpotenz.'
hinweise:
  - 'Kürze jeden Bruch vollständig und zerlege dann den Nenner in Primfaktoren.'
  - 'Abbrechend heißt: Der gekürzte Nenner enthält nur die Primfaktoren $2$ und $5$, denn $10^k = 2^k\cdot 5^k$.'
loesung: |
  Ansatz: Ein vollständig gekürzter Bruch bricht genau dann ab, wenn sein Nenner nur die Primfaktoren $2$ und $5$ hat. Dann kann man ihn auf eine Zehnerpotenz erweitern.
  ---
  $20 = 2^2\cdot 5$: abbrechend, $\tfrac{7}{20} = \tfrac{35}{100} = 0{,}35$. $40 = 2^3\cdot 5$: abbrechend, $\tfrac{11}{40} = \tfrac{275}{1000} = 0{,}275$.
  ---
  $\tfrac{9}{15} = \tfrac35$ nach dem Kürzen durch $3$: abbrechend, $0{,}6$.
  ---
  $12 = 2^2\cdot 3$ und $14 = 2\cdot 7$ enthalten die Primfaktoren $3$ und $7$, also sind diese Brüche periodisch. Zum Beispiel $\tfrac{5}{12} = 0{,}41\overline{6}$.
```

```aufgabe
id: za-hundertste-stelle
titel: Die hundertste Nachkommastelle
niveau: 3
lernziel: 2
kompetenz: anwenden
angabe: |
  Es ist $\tfrac17 = 0{,}\overline{142857}$. Welche Ziffer steht an der $100$. Stelle nach dem Komma?
teile:
  - typ: zahl
    loesung: "8"
    fehler:
      - wert: "5"
        meldung: 'Prüfe den Rest: $100 = 16\cdot 6 + 4$. Die gesuchte Ziffer ist die vierte der Periode, nicht die fünfte.'
      - wert: "4"
        meldung: 'Du hast durch den Nenner $7$ statt durch die Periodenlänge $6$ geteilt. Entscheidend ist, nach wie vielen Ziffern sich die Periode wiederholt.'
hinweise:
  - 'Die Periode hat $6$ Ziffern. Nach je $6$ Stellen beginnt sie von vorne.'
  - 'Teile $100$ mit Rest durch $6$ wie in [1.4 Teilbarkeit](/lernen/mathe3/zahlen/teilbarkeit-primzahlen-ggt-und-kgv). Der Rest sagt, welche Ziffer der Periode gemeint ist.'
loesung: |
  Ansatz: Die Ziffern wiederholen sich mit der Periodenlänge $6$. Es zählt nur der Rest von $100$ bei Division durch $6$.
  ---
  $100 = 16\cdot 6 + 4$. Nach $16$ vollen Perioden sind $96$ Stellen vergeben. Die $100$. Stelle ist die $4$. Ziffer der Periode.
  ---
  Periode $1, 4, 2, 8, 5, 7$: Die vierte Ziffer ist $8$. Kontrolle mit einer kleinen Stelle: Die $10$. Stelle ist wegen $10 = 6 + 4$ ebenfalls die vierte Ziffer, und tatsächlich ist $\tfrac17 = 0{,}142857\,142\mathbf{8}\ldots$
```

## Beweisen: direkt, durch Kontraposition und durch Widerspruch

```aufgabe
id: za-check-verneinung-alle
titel: Eine Für-alle-Aussage verneinen
niveau: 1
art: check
angabe: |
  Was ist die Verneinung von „Alle Zahlen in der Menge $M$ sind gerade“?
  Vorwissen: [1.2 Mengen und Aussagen](/lernen/mathe3/zahlen/mengen-und-aussagen-die-sprache-der-mathematik).
teile:
  - typ: auswahl
    optionen:
      - 'Alle Zahlen in $M$ sind ungerade.'
      - 'Mindestens eine Zahl in $M$ ist ungerade.'
      - 'Keine Zahl in $M$ ist gerade.'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Das behauptet zu viel. Damit „alle sind gerade“ falsch ist, genügt eine einzige ungerade Zahl.'
      - wert: 2
        meldung: '„Keine ist gerade“ heißt „alle sind ungerade“. Das ist mehr als nötig.'
hinweise:
  - 'Was muss passieren, damit „alle sind gerade“ nicht stimmt?'
loesung: |
  Die Aussage „alle sind gerade“ ist falsch, sobald es **eine** ungerade Zahl in $M$ gibt.
  ---
  Die Verneinung lautet: „Mindestens eine Zahl in $M$ ist ungerade.“ Genau dieses Verneinen brauchst du für den Widerspruchsbeweis.
```

In der mündlichen Prüfung wirst du mindestens einen kurzen Beweis vortragen müssen. Der Klassiker ist der Beweis,
dass $\sqrt2$ kein Bruch ist. Diese Lektion zeigt dir drei Arten zu beweisen. Sie ist für fast alle Lernenden
ungewohnt. Lies sie langsam, am besten zweimal, und schreib die Beweise selbst mit.

### Was ist ein Beweis?

Ein **Beweis** ist eine lückenlose Kette von Begründungen. Sie führt von dem, was man weiß, zu dem, was man
behauptet. Jedes Glied der Kette muss für sich stimmen: eine Definition, eine Rechenregel oder etwas schon
Bewiesenes. Stell dir eine Reihe Dominosteine vor. Der erste fällt, weil du ihn anstößt (das ist die Voraussetzung).
Jeder weitere fällt, weil der vorige ihn umwirft (das sind die Begründungen). Der letzte fällt, und das ist die
Behauptung.

Ein Beweis muss für **alle** Fälle funktionieren. Wie in
[1.2 Mengen und Aussagen](/lernen/mathe3/zahlen/mengen-und-aussagen-die-sprache-der-mathematik) genügen Beispiele
dafür nicht. Deshalb arbeitet man mit Variablen. „Eine beliebige gerade Zahl“ schreibt man als $2k$ mit einer ganzen
Zahl $k$. „Eine beliebige ungerade Zahl“ schreibt man als $2k + 1$.

:::achtung[Viele Beispiele sind kein Beweis]
**Falsch:** „$n^2 + n + 41$ ist für $n = 0, 1, 2, \dots, 39$ eine Primzahl. Also ist es für jede natürliche Zahl $n$ eine Primzahl.“

**Richtig:** Für $n = 40$ ergibt sich $40^2 + 40 + 41 = 1681 = 41\cdot 41$. Das ist keine Primzahl. Vierzig passende
Beispiele haben nichts bewiesen. Ein einziges Gegenbeispiel hat die Behauptung widerlegt.
:::

### Der direkte Beweis

Beim **direkten Beweis** geht man von der Voraussetzung aus und rechnet oder schließt Schritt für Schritt, bis die
Behauptung dasteht.

:::satz[Quadrate ungerader Zahlen]
Ist $p$ eine ungerade ganze Zahl, dann ist auch $p^2$ ungerade.
:::

:::beweis
**Voraussetzung:** $p$ ist ungerade. Nach Definition gibt es also eine ganze Zahl $k$ mit $p = 2k + 1$.

**Rechnung:** Wir quadrieren und multiplizieren mit dem Distributivgesetz aus:
$p^2 = (2k + 1)(2k + 1) = 4k^2 + 2k + 2k + 1 = 4k^2 + 4k + 1$.

**Umformen:** Wir heben aus den ersten beiden Summanden $2$ heraus: $p^2 = 2\cdot(2k^2 + 2k) + 1$.

**Schluss:** $2k^2 + 2k$ ist eine ganze Zahl. Also hat $p^2$ die Form „$2$ mal ganze Zahl plus $1$“ und ist ungerade.
:::

:::beispiel[Den Beweis an einer Zahl nachvollziehen]
Nimm $p = 7$, also $k = 3$, denn $7 = 2\cdot 3 + 1$.

1. Die Formel sagt: $p^2 = 2\cdot(2\cdot 9 + 2\cdot 3) + 1 = 2\cdot 24 + 1 = 49$.
2. Tatsächlich ist $7^2 = 49$ ungerade.
3. Das Zahlenbeispiel ist **kein** Beweis. Es hilft aber zu verstehen, was die Variablen im Beweis tun.
:::

### Der Beweis durch Kontraposition

Manchmal ist die Behauptung „Wenn $A$, dann $B$“ schwer direkt zu zeigen. Dann hilft ein Trick aus der Logik.

:::satz[Kontraposition]
Die Aussage „Wenn $A$, dann $B$“ ist gleichwertig mit der Aussage „Wenn nicht $B$, dann nicht $A$“.
Die zweite Form heißt **Kontraposition** der ersten.
:::

Ein Alltagsbeispiel ist der Satz „Wenn es regnet, ist die Straße nass“. Er ist gleichwertig mit dem Satz „Wenn die
Straße nicht nass ist, regnet es nicht“. Beide Sätze schließen genau dieselbe Situation aus. Sie lautet: Es regnet,
aber die Straße ist trocken. **Nicht** gleichwertig ist die Umkehrung „Wenn die Straße nass ist, regnet es“. Die Straße könnte auch
von einem Sprühwagen nass sein.

:::beispiel[Wenn p² gerade ist, ist p gerade]
**Behauptung:** Für jede ganze Zahl $p$ gilt: Wenn $p^2$ gerade ist, dann ist $p$ gerade.

1. Direkt ist das unbequem. Aus „$p^2 = 2m$ mit einer ganzen Zahl $m$“ sieht man nicht sofort, wie $p$ aussieht.
2. Kontraposition: „Wenn $p$ **nicht** gerade ist, dann ist $p^2$ **nicht** gerade.“ Anders gesagt: Wenn $p$ ungerade ist, dann ist $p^2$ ungerade.
3. Genau das haben wir im Satz über Quadrate ungerader Zahlen schon direkt bewiesen. Also gilt auch die Behauptung.
:::

Zusammen mit der leichten Richtung ($p = 2k$ ergibt $p^2 = 2\cdot 2k^2$, also gerade) gilt sogar:
**$p^2$ ist genau dann gerade, wenn $p$ gerade ist.** Diesen Satz brauchen wir gleich für $\sqrt2$.

:::achtung[Umkehrung statt Kontraposition]
**Falsch:** „Wir haben bewiesen: Wenn $n$ durch $4$ teilbar ist, dann ist $n$ gerade. Also gilt auch: Wenn $n$ gerade ist, dann ist $n$ durch $4$ teilbar.“

**Richtig:** Das ist die Umkehrung, und die folgt nicht. Gegenbeispiel: $6$ ist gerade, aber nicht durch $4$ teilbar.
Gleichwertig ist nur die Kontraposition: „Wenn $n$ ungerade ist, dann ist $n$ nicht durch $4$ teilbar.“
:::

### Der Widerspruchsbeweis

Beim **Widerspruchsbeweis** (auch **indirekter Beweis**) nimmt man das Gegenteil der Behauptung an. Daraus folgert man
so lange, bis etwas Unmögliches herauskommt, ein **Widerspruch**. Dann kann die Annahme nicht stimmen, und die
Behauptung ist bewiesen. Das ist wie bei einem Detektiv: „Angenommen, der Gärtner war der Täter. Dann hätte er um
21 Uhr gleichzeitig im Garten und im Kino sein müssen. Das ist unmöglich, also war es nicht der Gärtner.“

### Der Klassiker: √2 ist kein Bruch

**Worum geht es?** Die Diagonale eines Quadrats mit der Seitenlänge $1$ hat die Länge $d$.
Der Satz des Pythagoras sagt: Im rechtwinkligen Dreieck ist das Quadrat der längsten Seite gleich der Summe der
Quadrate der beiden anderen Seiten, mehr in [Kapitel 5](/lernen/mathe3/trigonometrie). Hier gilt also
$d^2 = 1^2 + 1^2 = 2$, und damit ist $d = \sqrt2$. Wir zeigen: Diese Länge ist kein Bruch ganzer Zahlen. Es gibt
Strecken, die man mit Brüchen nicht genau messen kann.

```plot
x: [-0.3, 1.5]
y: [-0.3, 1.3]
gleich: true
hoehe: 220
strecken:
  - { von: [0, 0], nach: [1, 0] }
  - { von: [1, 0], nach: [1, 1] }
  - { von: [1, 1], nach: [0, 1] }
  - { von: [0, 1], nach: [0, 0] }
  - { von: [0, 0], nach: [1, 1], farbe: 1 }
punkte:
  - { x: 0.5, y: 0, label: "1", farbe: 0 }
  - { x: 1, y: 0.5, label: "1", farbe: 0 }
  - { x: 0.45, y: 0.6, label: "√2", farbe: 1 }
beschriftung: Ein Quadrat mit Seitenlänge 1. Die Diagonale (orange) hat die Länge √2, denn nach Pythagoras ist ihr Quadrat 1² + 1² = 2.
```

:::satz[√2 ist irrational]
Es gibt keinen Bruch $\tfrac pq$ ganzer Zahlen, dessen Quadrat $2$ ist. Also ist $\sqrt2 \notin \Q$.
:::

:::beweis
**Annahme (das Gegenteil):** $\sqrt2$ wäre doch ein Bruch, also $\sqrt2 = \tfrac pq$ mit natürlichen Zahlen $p$ und
$q \neq 0$. Wir verlangen außerdem, dass der Bruch **vollständig gekürzt** ist. Dann haben $p$ und $q$ keinen
gemeinsamen Teiler außer $1$. Das dürfen wir verlangen, denn jeden Bruch kann man vollständig kürzen.

**Schritt 1:** Wir quadrieren beide Seiten: $2 = \tfrac{p^2}{q^2}$. Multiplizieren mit $q^2$ ergibt $p^2 = 2q^2$.

**Schritt 2:** $p^2 = 2q^2$ ist das Doppelte einer ganzen Zahl, also gerade. Nach dem Satz von eben ist dann auch
$p$ gerade. Es gibt also eine natürliche Zahl $k$ mit $p = 2k$.

**Schritt 3:** Wir setzen $p = 2k$ in $p^2 = 2q^2$ ein: $(2k)^2 = 2q^2$, also $4k^2 = 2q^2$. Teilen durch $2$ ergibt
$q^2 = 2k^2$. Damit ist auch $q^2$ gerade, und nach demselben Satz ist $q$ gerade.

**Widerspruch:** Jetzt sind $p$ und $q$ beide gerade. Sie haben also den gemeinsamen Teiler $2$. Das widerspricht der
Annahme, dass der Bruch vollständig gekürzt war. Die Annahme war falsch, und $\sqrt2$ ist irrational.
:::

**Was haben wir gezeigt?** Jeder Versuch, $\sqrt2$ als gekürzten Bruch zu schreiben, führt dazu, dass Zähler und Nenner
beide gerade sein müssten. Ein gekürzter Bruch kann das nicht. Also gibt es keinen solchen Bruch. Insbesondere gibt
es keine natürliche Zahl $m$ mit $m^2 = 2$, denn jede natürliche Zahl ist auch ein Bruch $\tfrac m1$.

```aufgabe
id: za-check-warum-gekuerzt
titel: Wozu „vollständig gekürzt“?
niveau: 1
art: check
angabe: |
  Im Beweis verlangen wir, dass $\tfrac pq$ vollständig gekürzt ist. An welcher Stelle wird diese Annahme gebraucht?
teile:
  - typ: auswahl
    optionen:
      - 'Beim Quadrieren von $\sqrt2 = \tfrac pq$.'
      - 'Am Schluss: Erst durch sie wird „$p$ und $q$ sind beide gerade“ unmöglich.'
      - 'Nirgends, sie macht den Beweis nur übersichtlicher.'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Quadrieren darf man jeden Bruch, gekürzt oder nicht.'
      - wert: 2
        meldung: 'Ohne die Annahme wäre „beide gerade“ kein Widerspruch. Der Bruch $\tfrac46$ hat auch geraden Zähler und Nenner.'
hinweise:
  - 'Wo im Beweis steht das Wort „Widerspruch“? Was genau widerspricht dort wem?'
loesung: |
  Der Widerspruch lautet: $p$ und $q$ haben den gemeinsamen Teiler $2$.
  ---
  Das ist nur deshalb unmöglich, weil wir vorher verlangt haben, dass $p$ und $q$ keinen gemeinsamen Teiler außer $1$ haben.
```

:::pruefung[So erklärst du den Beweis „√2 ist keine Bruchzahl“ in der mündlichen Prüfung]

Der Beweis ist ein **Widerspruchsbeweis**: Man nimmt das Gegenteil der Behauptung an und zeigt, dass daraus etwas
Unmögliches folgt. Die Prüferin achtet auf drei Stellen.

1. **Sag laut, was du annimmst:** „Angenommen, $\sqrt2$ wäre doch ein Bruch, also $\sqrt2 = \tfrac pq$ mit ganzen Zahlen $p$ und $q$.“
2. **Verlange, dass der Bruch vollständig gekürzt ist**, also dass $p$ und $q$ keinen gemeinsamen Teiler außer $1$ haben. Warum? Am Ende zeigst du, dass $p$ und $q$ *beide* gerade sind, also den Teiler $2$ gemeinsam haben. Das ist nur deshalb ein Widerspruch, weil du vorher „vollständig gekürzt“ verlangt hast.
3. **Begründe, warum aus „$p^2$ ist gerade“ folgt „$p$ ist gerade“.** Diesen Schritt überspringen viele. Die Begründung: Wäre $p$ ungerade, also $p = 2k + 1$ für eine ganze Zahl $k$, dann wäre $p^2 = 4k^2 + 4k + 1 = 2\cdot(2k^2 + 2k) + 1$, also ebenfalls ungerade. Eine ungerade Zahl hat immer ein ungerades Quadrat. Wenn $p^2$ gerade ist, kann $p$ also nicht ungerade sein. Somit ist $p$ gerade.

Wer bei Punkt 3 nur „also ist $p$ gerade“ sagt, bekommt fast sicher die Nachfrage „Warum?“.
:::

:::achtung[Ohne „gekürzt“ gibt es keinen Widerspruch]
**Falsch:** „Angenommen $\sqrt2 = \tfrac pq$. … Also sind $p$ und $q$ gerade. Widerspruch.“

**Richtig:** Ohne Zusatz ist „$p$ und $q$ sind beide gerade“ gar nicht unmöglich: $\tfrac{4}{6}$ ist ein Bruch mit
geradem Zähler und Nenner. Erst die Annahme „vollständig gekürzt“ macht daraus einen Widerspruch.
:::

:::beispiel[Dasselbe Muster für √5]
1. Annahme: $\sqrt5 = \tfrac pq$, vollständig gekürzt. Quadrieren ergibt $p^2 = 5q^2$.
2. Also ist $p^2$ durch $5$ teilbar. Dann ist auch $p$ durch $5$ teilbar: $p = 5k$. Die Begründung geht wie bei $\sqrt3$ in der Übung „Beweis für √3“ über die Reste. Lässt $p$ bei Division durch $5$ den Rest $1$, $2$, $3$ oder $4$, dann lässt $p^2$ den Rest $1$, $4$, $4$ oder $1$, nie $0$.
3. Einsetzen: $25k^2 = 5q^2$, also $q^2 = 5k^2$. Damit ist auch $q$ durch $5$ teilbar.
4. Gemeinsamer Teiler $5$, Widerspruch zur Kürzung. Also ist $\sqrt5$ irrational.

Statt „gerade“ heißt es hier „durch $5$ teilbar“. Allgemein gilt: Für eine natürliche Zahl $n$ ist $\sqrt n$ entweder
selbst eine natürliche Zahl (wenn $n$ eine Quadratzahl ist) oder irrational.
:::

:::merke[Drei Arten zu beweisen]
1. **Direkt:** Von der Voraussetzung über Umformungen zur Behauptung. Allgemeine Zahlen als $2k$, $2k + 1$, $3k$ und so weiter schreiben.
2. **Kontraposition:** Statt „wenn $A$, dann $B$“ beweist man „wenn nicht $B$, dann nicht $A$“.
3. **Widerspruch:** Das Gegenteil annehmen, folgern bis zu etwas Unmöglichem, dann die Annahme verwerfen.
4. **Widerlegen** einer Für-alle-Aussage: ein einziges Gegenbeispiel genügt.
:::

```reflexion
frage: 'Erzähle den Beweis für $\sqrt2$ in fünf Sätzen nach, ohne eine einzige Formel zu verwenden.'
antwort: |
  Ich nehme an, die Wurzel aus zwei wäre ein vollständig gekürzter Bruch.
  Dann wäre das Quadrat des Zählers doppelt so groß wie das Quadrat des Nenners, also gerade.
  Wenn das Quadrat einer Zahl gerade ist, ist auch die Zahl gerade, denn ungerade Zahlen haben ungerade Quadrate. Also ist der Zähler gerade.
  Setzt man das ein, sieht man genauso, dass auch der Nenner gerade ist.
  Zähler und Nenner hätten dann den Teiler zwei gemeinsam, obwohl der Bruch gekürzt war. Das ist unmöglich, also ist die Wurzel aus zwei kein Bruch.
```

### Übungen

```aufgabe
id: za-kontraposition-bilden
titel: Die Kontraposition bilden
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Gegeben ist die wahre Aussage: „Wenn eine Zahl durch $6$ teilbar ist, dann ist sie durch $3$ teilbar.“ Welche Formulierung ist ihre Kontraposition?
teile:
  - typ: auswahl
    optionen:
      - 'Wenn eine Zahl durch $3$ teilbar ist, dann ist sie durch $6$ teilbar.'
      - 'Wenn eine Zahl nicht durch $3$ teilbar ist, dann ist sie nicht durch $6$ teilbar.'
      - 'Wenn eine Zahl nicht durch $6$ teilbar ist, dann ist sie nicht durch $3$ teilbar.'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Das ist die **Umkehrung**. Sie ist sogar falsch: $9$ ist durch $3$ teilbar, aber nicht durch $6$.'
      - wert: 2
        meldung: 'Hier wurde verneint, aber nicht vertauscht. Gegenbeispiel: $9$ ist nicht durch $6$ teilbar, aber durch $3$.'
hinweise:
  - 'Kontraposition: Aus „wenn $A$, dann $B$“ wird „wenn nicht $B$, dann nicht $A$“. Beide Teile werden verneint **und** vertauscht.'
loesung: |
  Ansatz: $A$ ist „durch $6$ teilbar“, $B$ ist „durch $3$ teilbar“. Die Kontraposition lautet „wenn nicht $B$, dann nicht $A$“.
  ---
  Also: „Wenn eine Zahl nicht durch $3$ teilbar ist, dann ist sie nicht durch $6$ teilbar.“ Sie ist wahr, weil die ursprüngliche Aussage wahr ist.
```

```aufgabe
id: za-beweisart-erkennen
titel: Welche Beweisart ist das?
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Ordne jedem Beweisanfang die Beweisart zu.

  a) „Seien $a = 2k$ und $b = 2l$ gerade. Dann ist $a\cdot b = 4kl = 2\cdot(2kl)$ …“

  b) „Angenommen, es gäbe eine größte natürliche Zahl $N$. Dann wäre $N + 1$ …“

  c) „Statt ‚wenn $n^2$ durch $3$ teilbar ist, ist $n$ durch $3$ teilbar‘ zeigen wir: Wenn $n$ nicht durch $3$ teilbar ist, ist $n^2$ nicht durch $3$ teilbar …“
teile:
  - typ: auswahl
    label: 'a)'
    optionen: ['direkt', 'Kontraposition', 'Widerspruch']
    richtig: [0]
    fehler:
      - wert: 2
        meldung: 'Hier wird nichts Gegenteiliges angenommen. Man rechnet von der Voraussetzung „gerade“ aus vorwärts.'
  - typ: auswahl
    label: 'b)'
    optionen: ['direkt', 'Kontraposition', 'Widerspruch']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: 'Achte auf das Wort „angenommen“. Hier wird das Gegenteil der Behauptung „es gibt keine größte natürliche Zahl“ angenommen.'
  - typ: auswahl
    label: 'c)'
    optionen: ['direkt', 'Kontraposition', 'Widerspruch']
    richtig: [1]
    fehler:
      - wert: 2
        meldung: 'Es wird kein Widerspruch gesucht. Die Aussage wird durch ihre gleichwertige Form „wenn nicht $B$, dann nicht $A$“ ersetzt.'
hinweise:
  - 'Direkt: vorwärts von der Voraussetzung. Kontraposition: „wenn nicht $B$, dann nicht $A$“. Widerspruch: „angenommen, das Gegenteil …“.'
loesung: |
  Ansatz: Wir schauen, womit der Beweis beginnt und welche Aussage er tatsächlich zeigt.
  ---
  a) direkt: von „$a$ und $b$ gerade“ vorwärts zu „$ab$ gerade“. b) Widerspruch: Er nimmt das Gegenteil an. Dann wäre $N + 1$ eine noch größere natürliche Zahl, und das ist unmöglich.
  ---
  c) Kontraposition: Aus „wenn $A$, dann $B$“ wird „wenn nicht $B$, dann nicht $A$“.
```

```aufgabe
id: za-drei-aufeinanderfolgende
titel: Summe dreier aufeinanderfolgender Zahlen
niveau: 2
lernziel: 1
kompetenz: begruenden
angabe: |
  Behauptung: Die Summe dreier aufeinanderfolgender ganzer Zahlen ist immer durch $3$ teilbar. Zum Beispiel ist $4 + 5 + 6 = 15$.

  a) Die kleinste der drei Zahlen sei $n$. Schreibe die Summe als vereinfachten Term in $n$.

  b) Beweise die Behauptung.
teile:
  - typ: term
    label: 'a) Summe ='
    variable: n
    loesung: "3n + 3"
    fehler:
      - wert: "3n"
        meldung: 'Die drei Zahlen sind $n$, $n + 1$ und $n + 2$. Auch die $1$ und die $2$ werden addiert.'
      - wert: "n + 3"
        meldung: 'Es gibt drei Summanden mit je einem $n$. Zusammen ergeben sie $3n$, nicht $n$.'
  - typ: text
    label: 'b) Beweis'
    muster: |
      Die Zahlen sind $n$, $n + 1$, $n + 2$. Ihre Summe ist $3n + 3 = 3\cdot(n + 1)$. Weil $n + 1$ eine ganze Zahl ist,
      ist die Summe ein Vielfaches von $3$, also durch $3$ teilbar. Das gilt für jedes ganze $n$.
hinweise:
  - 'Die drei Zahlen heißen $n$, $n + 1$ und $n + 2$.'
  - 'Fasse zusammen und hebe dann die $3$ heraus. Was bedeutet es, wenn eine Zahl die Form $3\cdot(\text{ganze Zahl})$ hat?'
gefuehrt:
  - text: 'Die kleinste Zahl ist $n$. Wie heißen die beiden nächsten?'
    erklaerung: 'Die nächsten sind $n + 1$ und $n + 2$, denn aufeinanderfolgende ganze Zahlen unterscheiden sich jeweils um $1$.'
  - text: 'Fasse $n + (n + 1) + (n + 2)$ zu einem Term zusammen.'
    teil:
      typ: term
      variable: n
      loesung: "3n + 3"
    erklaerung: 'Drei $n$ und die Zahlen $1 + 2 = 3$: zusammen $3n + 3$.'
  - text: 'Hebe die $3$ heraus: $3n + 3 = 3\cdot(\ \ldots\ )$. Was steht in der Klammer?'
    teil:
      typ: term
      variable: n
      loesung: "n + 1"
      fehler:
        - wert: "n"
          meldung: 'Probe: $3\cdot n = 3n$. Es fehlt noch der Summand $3$, also braucht die Klammer noch eine $1$.'
    erklaerung: '$3n + 3 = 3\cdot(n + 1)$ nach dem Distributivgesetz.'
  - text: 'Warum ist damit die Behauptung für jede ganze Zahl $n$ bewiesen?'
    erklaerung: '$n + 1$ ist eine ganze Zahl. Also ist die Summe $3$ mal eine ganze Zahl und damit durch $3$ teilbar. Wir haben kein Beispiel verwendet, sondern ein beliebiges $n$.'
loesung: |
  Ansatz: Direkter Beweis mit einer Variablen für die kleinste Zahl.
  ---
  a) $n + (n + 1) + (n + 2) = 3n + 3$.
  ---
  b) $3n + 3 = 3\cdot(n + 1)$. Weil $n + 1$ ganz ist, ist die Summe ein Vielfaches von $3$.
  ---
  Kontrolle mit dem Beispiel: $n = 4$ ergibt $3\cdot 5 = 15$. Die Summe ist übrigens immer das Dreifache der mittleren Zahl $n + 1$.
```

```aufgabe
id: za-luecke-wurzel2
titel: Lücken im Beweis für √2
niveau: 2
lernziel: 1
kompetenz: begruenden
angabe: |
  Im Beweis „$\sqrt2$ ist irrational“ stehen drei Lücken. Wähle jeweils die richtige Begründung.

  a) „Wir nehmen an, $\sqrt2 = \tfrac pq$ ist **vollständig gekürzt**. Das dürfen wir, weil …“

  b) „Aus $p^2 = 2q^2$ folgt, dass $p$ gerade ist, weil …“

  c) „Am Ende entsteht ein Widerspruch, weil …“
teile:
  - typ: auswahl
    label: 'a)'
    optionen:
      - '… man jeden Bruch vollständig kürzen kann, ohne seinen Wert zu ändern.'
      - '… $\sqrt2$ kleiner als $2$ ist.'
      - '… $p$ und $q$ Primzahlen sind.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Die Größe von $\sqrt2$ spielt hier keine Rolle. Es geht darum, ob man jeden Bruch in gekürzter Form schreiben darf.'
      - wert: 2
        meldung: 'Über $p$ und $q$ wissen wir am Anfang nur, dass sie ganze Zahlen sind. Primzahlen werden nicht verlangt.'
  - typ: auswahl
    label: 'b)'
    optionen:
      - '… $p^2$ gerade ist und ungerade Zahlen ungerade Quadrate haben.'
      - '… $2q^2$ größer als $p$ ist.'
      - '… jede Quadratzahl gerade ist.'
    richtig: [0]
    fehler:
      - wert: 2
        meldung: 'Gegenbeispiel: $9 = 3^2$ ist eine ungerade Quadratzahl.'
      - wert: 1
        meldung: 'Ein Größenvergleich sagt nichts darüber, ob $p$ gerade ist.'
  - typ: auswahl
    label: 'c)'
    optionen:
      - '… $p$ und $q$ beide gerade sind, also den Teiler $2$ gemeinsam haben, obwohl der Bruch gekürzt war.'
      - '… $p^2 = 2q^2$ keine Lösung hat.'
      - '… $\sqrt2$ unendlich viele Nachkommastellen hat.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Genau das wollen wir zeigen. Man darf das Ergebnis nicht als Begründung benutzen.'
      - wert: 2
        meldung: 'Auch $\tfrac13$ hat unendlich viele Nachkommastellen und ist trotzdem ein Bruch.'
hinweise:
  - 'Geh den Beweis in [1.8 Beweisen](/lernen/mathe3/zahlen/beweisen-direkt-durch-kontraposition-und-durch-widerspruch) Schritt für Schritt durch.'
  - 'Jede Begründung muss eine Regel oder einen schon bewiesenen Satz benutzen, nicht das Ergebnis selbst.'
loesung: |
  Ansatz: Jede Lücke braucht eine Begründung, die schon vorher feststeht.
  ---
  a) Jeden Bruch kann man vollständig kürzen, ohne den Wert zu ändern. b) Ungerade Zahlen haben ungerade Quadrate. Ist $p^2$ gerade, kann $p$ also nicht ungerade sein.
  ---
  c) Am Ende sind $p$ und $q$ beide gerade. Ein vollständig gekürzter Bruch hat aber keinen gemeinsamen Teiler $2$. Darum liegt der Widerspruch genau an der Annahme „gekürzt“.
```

```aufgabe
id: za-gegenbeispiel-primformel
titel: Eine Primzahlformel widerlegen
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Jemand behauptet: „$n^2 - n + 11$ ist für jede natürliche Zahl $n$ eine Primzahl.“
  Für $n = 0, 1, 2, 3$ ergeben sich $11, 11, 13, 17$, alles Primzahlen. Finde das **kleinste** $n$, für das die Behauptung falsch ist.
teile:
  - typ: zahl
    label: 'kleinstes Gegenbeispiel $n =$'
    loesung: "11"
    fehler:
      - wert: "10"
        meldung: 'Für $n = 10$ ergibt sich $100 - 10 + 11 = 101$. Ist $101$ wirklich keine Primzahl? Prüfe die Teiler $2$, $3$, $5$, $7$.'
      - wert: "12"
        meldung: '$n = 12$ ist ein Gegenbeispiel, aber nicht das kleinste. Probiere auch die Zahl direkt davor.'
hinweise:
  - 'Rechne die Werte für $n = 4, 5, 6, \dots$ aus und prüfe jeweils, ob sie prim sind.'
  - 'Schau dir den Fall $n = 11$ besonders an: Was passiert mit $n^2 - n$, wenn $n = 11$ ist?'
loesung: |
  Ansatz: Eine Für-alle-Aussage widerlegt man mit einem Gegenbeispiel. Wir rechnen die Werte der Reihe nach aus.
  ---
  $n = 4$ bis $10$ ergibt $23, 31, 41, 53, 67, 83, 101$. Das sind alles Primzahlen.
  ---
  $n = 11$: $121 - 11 + 11 = 121 = 11\cdot 11$. Keine Primzahl. Man sieht es auch ohne Rechnen: $n^2 - n + 11 = 11\cdot 11 - 11 + 11$.
  ---
  Das kleinste Gegenbeispiel ist $n = 11$. Elf passende Fälle hatten also nichts bewiesen.
```

```aufgabe
id: za-wurzel3-beweis
titel: Beweis für √3
niveau: 3
lernziel: 1
kompetenz: begruenden
angabe: |
  a) Welche Reste kann eine Quadratzahl $a^2$ bei Division durch $3$ haben? Gehe die drei möglichen Formen $a = 3k$, $a = 3k + 1$, $a = 3k + 2$ durch.

  b) Folgere: Ist $a^2$ durch $3$ teilbar, dann ist auch $a$ durch $3$ teilbar.

  c) Beweise, dass $\sqrt3$ irrational ist.
teile:
  - typ: menge
    label: 'a) mögliche Reste'
    loesung: ["0", "1"]
    fehler:
      - wert: ["0", "1", "2"]
        meldung: 'Rechne $(3k + 2)^2 = 9k^2 + 12k + 4$. Welchen Rest lässt das bei Division durch $3$?'
  - typ: text
    label: 'b) und c)'
    muster: |
      b) Nach a) hat $a^2$ nur dann den Rest $0$, wenn $a = 3k$ ist. Ist also $a^2$ durch $3$ teilbar, dann ist $a$ durch $3$ teilbar.

      c) Annahme: $\sqrt3 = \tfrac pq$ mit vollständig gekürztem Bruch. Dann $p^2 = 3q^2$, also ist $p^2$ durch $3$ teilbar und nach b) auch $p$: $p = 3k$.
      Einsetzen: $9k^2 = 3q^2$, also $q^2 = 3k^2$. Damit ist $q^2$ und nach b) auch $q$ durch $3$ teilbar.
      Dann haben $p$ und $q$ den gemeinsamen Teiler $3$. Das widerspricht der Kürzung, also ist $\sqrt3$ irrational.
hinweise:
  - 'Quadriere $3k + 1$ und $3k + 2$ und schreibe das Ergebnis in der Form $3\cdot(\ldots) + r$.'
  - 'Für c): Übertrage den Beweis für $\sqrt2$ und ersetze „gerade“ durch „durch $3$ teilbar“.'
loesung: |
  Ansatz: Zuerst eine Hilfsaussage über Reste beweisen, dann den Widerspruchsbeweis wie bei $\sqrt2$ führen.
  ---
  a) $(3k)^2 = 9k^2 = 3\cdot 3k^2$: Rest $0$. $(3k + 1)^2 = 9k^2 + 6k + 1 = 3\cdot(3k^2 + 2k) + 1$: Rest $1$.
  $(3k + 2)^2 = 9k^2 + 12k + 4 = 3\cdot(3k^2 + 4k + 1) + 1$: Rest $1$. Mögliche Reste: $0$ und $1$.
  ---
  b) Nur bei $a = 3k$ ist der Rest $0$. Wenn $a^2$ durch $3$ teilbar ist, muss also $a = 3k$ sein.
  ---
  c) Annahme: $\sqrt3 = \tfrac pq$, vollständig gekürzt. Quadrieren: $p^2 = 3q^2$. Nach b) ist $p = 3k$.
  ---
  Einsetzen: $9k^2 = 3q^2$, also $q^2 = 3k^2$. Nach b) ist auch $q$ durch $3$ teilbar.
  $p$ und $q$ haben den gemeinsamen Teiler $3$, Widerspruch zur Kürzung. Also ist $\sqrt3$ irrational.
```

```aufgabe
id: za-kehrwert-irrational
titel: Der Kehrwert einer irrationalen Zahl
niveau: 3
lernziel: 1
kompetenz: begruenden
angabe: |
  Es sei $x$ eine irrationale Zahl. Zeige, dass auch $\tfrac1x$ irrational ist.

  a) Welche Beweisart passt am besten?

  b) Führe den Beweis.
teile:
  - typ: auswahl
    label: 'a)'
    optionen: ['direkter Beweis mit einem Zahlenbeispiel', 'Widerspruchsbeweis', 'ein Gegenbeispiel angeben']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Ein Zahlenbeispiel wie $x = \sqrt2$ zeigt nur diesen einen Fall. Behauptet ist es für jede irrationale Zahl.'
      - wert: 2
        meldung: 'Ein Gegenbeispiel würde die Aussage widerlegen. Wir wollen sie aber beweisen.'
  - typ: text
    label: 'b) Beweis'
    muster: |
      Angenommen, $\tfrac1x$ wäre rational, also $\tfrac1x = \tfrac pq$ mit ganzen Zahlen $p, q$ und $q \neq 0$.
      Weil $\tfrac1x$ nie $0$ ist, ist auch $p \neq 0$. Dann ist $x = \tfrac qp$ ein Bruch ganzer Zahlen, also rational.
      Das widerspricht der Voraussetzung, dass $x$ irrational ist. Also ist $\tfrac1x$ irrational.
hinweise:
  - 'Nimm das Gegenteil an: $\tfrac1x = \tfrac pq$. Was folgt dann für $x$ selbst?'
  - 'Achte darauf, dass du am Ende durch $p$ teilst. Warum ist $p \neq 0$?'
loesung: |
  Ansatz: Die Aussage betrifft alle irrationalen Zahlen. Ein Widerspruchsbeweis ist hier am kürzesten.
  ---
  Annahme: $\tfrac1x = \tfrac pq$ mit ganzen Zahlen $p$, $q$ und $q \neq 0$.
  ---
  Ein Kehrwert ist nie $0$, also ist $p \neq 0$. Nimmt man auf beiden Seiten den Kehrwert, folgt $x = \tfrac qp$.
  ---
  Dann wäre $x$ ein Bruch ganzer Zahlen, also rational. Das widerspricht der Voraussetzung. Die Annahme war falsch, und $\tfrac1x$ ist irrational.
  Beispiel: Weil $\sqrt2$ irrational ist, ist auch $\tfrac{1}{\sqrt2}$ irrational.
```

## Potenzen und Wurzeln

```aufgabe
id: za-check-hoch-drei
titel: Eine negative Zahl hoch drei
niveau: 1
art: check
angabe: |
  Berechne $(-2)^3 = (-2)\cdot(-2)\cdot(-2)$.
  Vorwissen: Vorzeichenregeln aus [1.1 Grundrechenarten](/lernen/mathe3/zahlen/grundrechenarten-vorzeichen-klammern-und-rechenreihenfolge).
teile:
  - typ: zahl
    loesung: "(-2)^3"
    fehler:
      - wert: "8"
        meldung: 'Zähle die Minuszeichen: Es sind drei. Zwei ergeben plus, das dritte macht das Ergebnis wieder negativ.'
      - wert: "-6"
        meldung: 'Hoch $3$ heißt dreimal mit sich selbst **multiplizieren**, nicht mit $3$ malnehmen.'
hinweise:
  - 'Rechne von links: zuerst $(-2)\cdot(-2)$, dann noch einmal mal $(-2)$.'
loesung: |
  $(-2)\cdot(-2) = 4$, denn minus mal minus ergibt plus.
  ---
  $4\cdot(-2) = -8$. Eine negative Zahl hoch einer ungeraden Zahl ist negativ.
```

Potenzen sind eine Kurzschrift für wiederholtes Multiplizieren. Wurzeln machen das Quadrieren und das Potenzieren
rückgängig. Beide brauchst du überall: bei Flächen und Volumen, bei Zehnerpotenzen in der Physik, bei Wachstum und
Zinsen, bei Bitbreiten in der Informatik. In dieser Lektion lernst du die Rechengesetze und die typischen Fallen.

### Potenzen mit natürlichen Hochzahlen

:::definition[Potenz]
Für eine Zahl $a$ und eine natürliche Zahl $n \ge 1$ ist
$$a^n = \underbrace{a\cdot a\cdots a}_{n\ \text{Faktoren}}.$$
$a$ heißt **Basis** (Grundzahl), $n$ heißt **Exponent** (Hochzahl), und $a^n$ liest man „$a$ hoch $n$“.
:::

**Beispiele:** $2^5 = 2\cdot 2\cdot 2\cdot 2\cdot 2 = 32$, $10^3 = 1000$ und $(-3)^2 = (-3)\cdot(-3) = 9$. Für $a^2$ sagt
man auch „$a$ Quadrat“, für $a^3$ „$a$ hoch drei“. **Nichtbeispiel:** $2^5$ ist **nicht** $2\cdot 5 = 10$. Die Hochzahl
zählt Faktoren, sie ist selbst kein Faktor.

Aus der Definition folgen die Rechengesetze, man muss nur Faktoren zählen. Zum Beispiel ist
$2^3\cdot 2^2 = (2\cdot 2\cdot 2)\cdot(2\cdot 2) = 2^5$, denn es sind $3 + 2$ Faktoren. Und $(2^3)^2 = 2^3\cdot 2^3 = 2^6$,
denn es sind zweimal drei Faktoren.

:::formel[Potenzgesetze]
Für Zahlen $a, b$ und Hochzahlen $m, n$ gilt:
$$a^m\cdot a^n = a^{m+n}, \qquad \frac{a^m}{a^n} = a^{m-n}, \qquad (a^m)^n = a^{m\cdot n}, \qquad (a\cdot b)^n = a^n\cdot b^n, \qquad \left(\frac ab\right)^n = \frac{a^n}{b^n}.$$
Bei Brüchen muss der Nenner ungleich $0$ sein.
:::

In Worten: Gleiche Basis beim Multiplizieren heißt Hochzahlen addieren, beim Dividieren Hochzahlen subtrahieren. Eine
Potenz einer Potenz heißt Hochzahlen multiplizieren. Ein Produkt oder Quotient wird Faktor für Faktor potenziert.

### Hochzahl null und negative Hochzahlen

Was soll $2^0$ oder $2^{-1}$ bedeuten? „Null Faktoren“ oder „minus einen Faktor“ ergibt keinen Sinn. Man legt die
Bedeutung deshalb so fest, dass die Rechengesetze weiter gelten. Schau dir die Reihe an:
$$2^3 = 8, \quad 2^2 = 4, \quad 2^1 = 2, \quad 2^0 = \ ?, \quad 2^{-1} = \ ?$$
Bei jedem Schritt nach rechts wird die Hochzahl um $1$ kleiner, und der Wert halbiert sich. Setzt man das fort, folgt
$2^0 = 1$, $2^{-1} = \tfrac12$ und $2^{-2} = \tfrac14$. Dieses Fortsetzen nennt man **Permanenzprinzip**.

:::definition[Hochzahl null und negative Hochzahlen]
Für $a \neq 0$ und eine natürliche Zahl $n$ ist
$$a^0 = 1, \qquad a^{-n} = \frac{1}{a^n}.$$
:::

Die Potenzgesetze gelten dann für alle ganzen Hochzahlen. **Beispiel:** $10^{-3} = \tfrac{1}{1000} = 0{,}001$ und
$\left(\tfrac23\right)^{-2} = \left(\tfrac32\right)^2 = \tfrac94$. **Nichtbeispiel:** $0^{-1} = \tfrac10$ ist nicht erklärt,
weil man nicht durch $0$ teilen darf. Auch $0^0$ ist nicht festgelegt.

:::beispiel[Einen Potenzterm vereinfachen]
Vereinfache $\dfrac{(2x^3y^{-1})^2}{4x^{-1}y^3}$ für $x, y \neq 0$.

1. Klammer potenzieren, jeder Faktor einzeln: $(2x^3y^{-1})^2 = 2^2\cdot x^{3\cdot 2}\cdot y^{-1\cdot 2} = 4x^6y^{-2}$.
2. Gleiche Basen zusammenfassen, Hochzahlen subtrahieren: $\dfrac{4x^6y^{-2}}{4x^{-1}y^3} = x^{6 - (-1)}\,y^{-2 - 3} = x^7y^{-5}$.
3. Ohne negative Hochzahl: $x^7y^{-5} = \dfrac{x^7}{y^5}$.
:::

:::beispiel[Flächen in anderen Einheiten]
Wie viele Quadratzentimeter hat ein Quadratmeter?

1. $1\,\text{m} = 100\,\text{cm} = 10^2\,\text{cm}$.
2. Ein Quadratmeter ist ein Quadrat mit $1\,\text{m}$ Seitenlänge: $1\,\text{m}^2 = (10^2\,\text{cm})^2 = 10^{2\cdot 2}\,\text{cm}^2 = 10^4\,\text{cm}^2$.
3. Ein Quadratmeter hat also $10\,000$ Quadratzentimeter, nicht $100$. Auch die Einheit wird quadriert.
:::

:::achtung[Typische Potenzfehler]
**Falsch:** $-2^4 = 16$. **Richtig:** $-2^4 = -(2^4) = -16$. Die Potenz bindet stärker als das Minus davor. Nur $(-2)^4 = 16$.

**Falsch:** $2^2\cdot 2^3 = 2^6$. **Richtig:** $2^2\cdot 2^3 = 2^{2 + 3} = 2^5 = 32$. Beim Multiplizieren werden die Hochzahlen addiert, nicht multipliziert.
:::

:::achtung[Potenzen verteilen sich nicht auf Summen]
**Falsch:** $(3 + 4)^2 = 3^2 + 4^2 = 25$.

**Richtig:** $(3 + 4)^2 = 7^2 = 49$. Das Gesetz $(ab)^n = a^nb^n$ gilt für **Produkte**, nicht für Summen. Wie man $(a + b)^2$
richtig ausrechnet, lernst du in [1.12 Terme umformen](/lernen/mathe3/zahlen/terme-umformen-binomische-formeln-und-faktorisieren).
:::

### Wurzeln

Die **Quadratwurzel** macht das Quadrieren rückgängig. $\sqrt{49}$ fragt: Welche Zahl ergibt quadriert $49$? Zwei Zahlen
kommen in Frage, nämlich $7$ und $-7$. Man hat festgelegt, dass das Wurzelzeichen immer die **nicht negative** Zahl meint.

:::definition[Quadratwurzel und n-te Wurzel]
Für $a \ge 0$ ist $\sqrt a$ die nicht negative Zahl $b$ mit $b^2 = a$. Allgemein ist für $n \ge 2$ die **$n$-te Wurzel**
$\sqrt[n]{a}$ die nicht negative Zahl $b$ mit $b^n = a$. Die Zahl $a$ unter der Wurzel heißt **Radikand**.
:::

**Beispiele:** $\sqrt{49} = 7$, $\sqrt[3]{8} = 2$ (denn $2^3 = 8$) und $\sqrt[4]{81} = 3$ (denn $3^4 = 81$).
**Nichtbeispiele:** $\sqrt{9}$ ist **nicht** $-3$, obwohl $(-3)^2 = 9$. Und $\sqrt{-4}$ gibt es in $\R$ nicht, weil kein
Quadrat einer reellen Zahl negativ ist.

```aufgabe
id: za-check-wurzel-16
titel: Wurzel oder Lösungen?
niveau: 1
art: check
angabe: |
  Welche Aussage stimmt?
teile:
  - typ: auswahl
    optionen:
      - '$\sqrt{16} = 4$, und die Gleichung $x^2 = 16$ hat die Lösungen $4$ und $-4$.'
      - '$\sqrt{16} = \pm 4$.'
      - '$\sqrt{16} = 8$, denn $16 : 2 = 8$.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Das Wurzelzeichen meint immer nur die nicht negative Zahl. Das $\pm$ entsteht erst beim Lösen einer Gleichung.'
      - wert: 2
        meldung: 'Wurzelziehen ist nicht Halbieren. Prüfe: $8^2 = 64$, nicht $16$.'
hinweise:
  - 'Lies die Definition der Quadratwurzel noch einmal: Welche Zahl ist gemeint, die positive oder beide?'
loesung: |
  $\sqrt{16} = 4$, denn $4 \ge 0$ und $4^2 = 16$.
  ---
  Die Gleichung $x^2 = 16$ hat trotzdem zwei Lösungen, nämlich $x = 4$ und $x = -4$, denn auch $(-4)^2 = 16$.
```

Die Gleichung $x^2 = 9$ hat zwei Lösungen, $x = 3$ und $x = -3$. Das Symbol $\sqrt9$ bezeichnet aber nur die positive
davon. Daraus folgt eine Regel, nach der in Prüfungen gern gefragt wird.

:::satz[Wurzel aus einem Quadrat]
Für jede reelle Zahl $a$ gilt $\sqrt{a^2} = |a|$.
:::

Dabei ist $|a|$ der **Betrag** von $a$, also die Zahl ohne ihr Vorzeichen: $|5| = 5$ und $|-5| = 5$. Genauer wird er in
[1.15 Betrag und Intervalle](/lernen/mathe3/zahlen/betrag-und-intervalle) erklärt. Beispiel: $\sqrt{(-5)^2} = \sqrt{25} = 5 = |-5|$, nicht $-5$.

Für ungerade $n$ kann man die Wurzel auch für negative Zahlen erklären: $\sqrt[3]{-8} = -2$, weil $(-2)^3 = -8$. Viele
Schulbücher und Taschenrechner tun das. Mit rationalen Hochzahlen schreibt man solche Wurzeln aber nicht, wie
[1.10 Potenzen mit rationalen Hochzahlen](/lernen/mathe3/zahlen/potenzen-mit-rationalen-hochzahlen) zeigt.

### Rechnen mit Wurzeln

:::formel[Wurzelgesetze]
Für $a, b \ge 0$ (beim Bruch $b > 0$) gilt:
$$\sqrt[n]{a}\cdot\sqrt[n]{b} = \sqrt[n]{a\cdot b}, \qquad \frac{\sqrt[n]a}{\sqrt[n]b} = \sqrt[n]{\frac ab}, \qquad \sqrt[n]{a^m} = \left(\sqrt[n]{a}\right)^m.$$
Dabei ist $n \ge 2$ eine natürliche Zahl und $m$ eine natürliche Zahl.
:::

Zum Beispiel ist $\sqrt2\cdot\sqrt8 = \sqrt{16} = 4$ und $\tfrac{\sqrt{50}}{\sqrt2} = \sqrt{25} = 5$.

**Teilweise Wurzel ziehen:** Man zerlegt den Radikanden in eine Quadratzahl mal einen Rest, zum Beispiel
$\sqrt{72} = \sqrt{36\cdot 2} = \sqrt{36}\cdot\sqrt2 = 6\sqrt2$. So erkennt man gleichartige Wurzeln und kann sie wie
gleiche Variablen zusammenfassen: $\sqrt{12} + \sqrt{27} = 2\sqrt3 + 3\sqrt3 = 5\sqrt3$.

:::achtung[Wurzeln verteilen sich nicht auf Summen]
**Falsch:** $\sqrt{9 + 16} = \sqrt9 + \sqrt{16} = 3 + 4 = 7$.

**Richtig:** $\sqrt{9 + 16} = \sqrt{25} = 5$. Das Wurzelgesetz gilt nur für Produkte und Quotienten. Aus demselben Grund
ist $\sqrt2 + \sqrt3$ **nicht** gleich $\sqrt5$, sondern lässt sich gar nicht weiter vereinfachen.
:::

:::beispiel[Den Nenner rational machen]
Wurzeln im Nenner beseitigt man durch geschicktes Erweitern. Man nennt das „Nenner rational machen“.

1. $\dfrac{1}{\sqrt2}$: Mit $\sqrt2$ erweitern. Weil $\sqrt2\cdot\sqrt2 = 2$ ist, wird der Nenner wurzelfrei: $\dfrac{1}{\sqrt2} = \dfrac{\sqrt2}{\sqrt2\cdot\sqrt2} = \dfrac{\sqrt2}{2}$.
2. $\dfrac{1}{\sqrt3 - 1}$: Mit $\sqrt3 + 1$ erweitern. Der Nenner wird $(\sqrt3 - 1)(\sqrt3 + 1) = 3 + \sqrt3 - \sqrt3 - 1 = 2$.
3. Ergebnis von 2.: $\dfrac{1}{\sqrt3 - 1} = \dfrac{\sqrt3 + 1}{2}$. Probe mit dem Taschenrechner: beide Seiten $\approx 1{,}366$.

Derselbe Trick wird bei der Division komplexer Zahlen in [Kapitel 15](/lernen/mathe3/komplexe-zahlen) verwendet.
:::

:::merke[Wurzelausdrücke vereinfachen]
1. Jeden Radikanden in „Quadratzahl mal Rest“ zerlegen und die Wurzel aus der Quadratzahl ziehen.
2. Gleiche Wurzeln wie gleiche Variablen zusammenfassen: $2\sqrt3 + 3\sqrt3 = 5\sqrt3$.
3. Wurzeln im Nenner durch Erweitern beseitigen: bei $\sqrt a$ mit $\sqrt a$, bei $\sqrt a - b$ mit $\sqrt a + b$.
4. Nie Wurzeln aus Summen summandenweise ziehen.
:::

```reflexion
frage: 'Warum legt man $2^0 = 1$ fest und nicht $2^0 = 0$? Begründe mit einem Potenzgesetz.'
antwort: |
  Es soll weiterhin $\tfrac{a^m}{a^n} = a^{m - n}$ gelten. Für $m = n$ steht links $\tfrac{2^3}{2^3} = 1$ und rechts $2^{3 - 3} = 2^0$.
  Damit das Gesetz stimmt, muss $2^0 = 1$ sein. Mit $2^0 = 0$ wäre das Gesetz kaputt.
  Genauso folgt aus der Reihe $8, 4, 2, \dots$, in der sich der Wert bei jedem Schritt halbiert, dass nach der $2$ die $1$ kommt.
```

### Übungen

```aufgabe
id: za-potenz-ganz
titel: Potenzen ohne Taschenrechner
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Berechne: a) $3^4$, b) $(-2)^5$, c) $-2^4$, d) $5^{-2}$, e) $7^0$
teile:
  - typ: zahl
    label: 'a)'
    loesung: "3^4"
    fehler:
      - wert: "12"
        meldung: '$3^4$ ist nicht $3\cdot 4$. Es bedeutet $3\cdot 3\cdot 3\cdot 3$.'
  - typ: zahl
    label: 'b)'
    loesung: "(-2)^5"
    fehler:
      - wert: "32"
        meldung: 'Fünf negative Faktoren: Eine ungerade Anzahl von Minuszeichen ergibt ein negatives Ergebnis.'
  - typ: zahl
    label: 'c)'
    loesung: "-(2^4)"
    fehler:
      - wert: "16"
        meldung: 'Ohne Klammer gehört die Hochzahl nur zur $2$. Das Minus kommt erst danach: $-2^4 = -(2^4)$.'
  - typ: zahl
    label: 'd)'
    loesung: "5^(-2)"
    anzeige: '\tfrac{1}{25}'
    fehler:
      - wert: "-25"
        meldung: 'Eine negative Hochzahl macht die Zahl nicht negativ. Sie bedeutet den Kehrwert: $5^{-2} = \tfrac{1}{5^2}$.'
      - wert: "-10"
        meldung: 'Eine negative Hochzahl bedeutet den Kehrwert der Potenz, nicht „mal minus zwei“.'
  - typ: zahl
    label: 'e)'
    loesung: "7^0"
    fehler:
      - wert: "0"
        meldung: 'Jede Zahl ungleich $0$ hoch $0$ ergibt $1$. Das folgt aus $\tfrac{7^n}{7^n} = 7^0$.'
hinweise:
  - 'Die Hochzahl gibt an, wie oft die Basis als Faktor vorkommt. Klammern entscheiden, was zur Basis gehört.'
  - 'Negative Hochzahl bedeutet Kehrwert. Hochzahl $0$ ergibt $1$.'
loesung: |
  Ansatz: Wir wenden die Definition an und achten genau darauf, was die Basis ist.
  ---
  a) $3\cdot 3\cdot 3\cdot 3 = 81$. b) $(-2)^5 = -32$, fünf Minuszeichen. c) $-2^4 = -(2\cdot 2\cdot 2\cdot 2) = -16$.
  ---
  d) $5^{-2} = \tfrac{1}{5^2} = \tfrac{1}{25}$. e) $7^0 = 1$.
```

```aufgabe
id: za-potenz-variablen
titel: Potenzterm vereinfachen
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Vereinfache für $a, b \neq 0$ zu einem Term der Form $a^m b^n$:
  $$(a^3 b^{-2})^2\cdot a^{-4} b^5$$
  Gib die Exponenten $m$ und $n$ an.
teile:
  - typ: zahl
    label: '$m$'
    loesung: "3*2 - 4"
    fehler:
      - wert: "1"
        meldung: 'Bei $(a^3)^2$ werden die Hochzahlen **multipliziert**, nicht addiert: $a^{3\cdot 2}$.'
  - typ: zahl
    label: '$n$'
    loesung: "-2*2 + 5"
    fehler:
      - wert: "5"
        meldung: '$(b^{-2})^2 = b^{-4}$, nicht $b^0$. Potenz einer Potenz heißt Hochzahlen multiplizieren.'
      - wert: "9"
        meldung: 'Das Minus vor der $2$ ist verloren gegangen: $(b^{-2})^2 = b^{-4}$.'
hinweise:
  - 'Zuerst die Klammer mit $(x^p)^q = x^{p\cdot q}$ auflösen.'
  - 'Dann gleiche Basen zusammenfassen: $x^p\cdot x^q = x^{p + q}$.'
loesung: |
  Ansatz: Zuerst die Klammer potenzieren, dann gleiche Basen zusammenfassen.
  ---
  $(a^3b^{-2})^2 = a^{3\cdot 2}\,b^{-2\cdot 2} = a^6 b^{-4}$.
  ---
  $a^6 b^{-4}\cdot a^{-4} b^5 = a^{6 - 4}\, b^{-4 + 5} = a^2 b$. Also $m = 2$, $n = 1$.
```

```aufgabe
id: za-wurzeln-zusammenfassen
titel: Wurzeln zusammenfassen
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Vereinfache so weit wie möglich: $\sqrt{98} + \sqrt{50} - \sqrt{18}$.
teile:
  - typ: zahl
    loesung: "sqrt(98) + sqrt(50) - sqrt(18)"
    anzeige: '9\sqrt2 \approx 12{,}728'
    fehler:
      - wert: "sqrt(130)"
        meldung: 'Du hast die Radikanden zusammengerechnet. Wurzeln aus Summen und Differenzen darf man nicht so verbinden.'
hinweise:
  - 'Zerlege jeden Radikanden in eine Quadratzahl mal $2$.'
  - 'Danach hast du drei Vielfache von $\sqrt2$, die du wie $7x + 5x - 3x$ zusammenfasst.'
loesung: |
  Ansatz: Teilweise Wurzel ziehen, dann gleichartige Wurzeln zusammenfassen.
  ---
  $\sqrt{98} = \sqrt{49\cdot 2} = 7\sqrt2$, $\sqrt{50} = \sqrt{25\cdot 2} = 5\sqrt2$, $\sqrt{18} = \sqrt{9\cdot 2} = 3\sqrt2$.
  ---
  $7\sqrt2 + 5\sqrt2 - 3\sqrt2 = 9\sqrt2 \approx 12{,}728$.
  Kontrolle mit dem Taschenrechner: $9{,}899 + 7{,}071 - 4{,}243 \approx 12{,}727$. Die kleine Abweichung kommt vom Runden der Summanden.
```

```aufgabe
id: za-nenner-rational
titel: Nenner rational machen
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Schreibe ohne Wurzel im Nenner und vereinfache: $\dfrac{4}{\sqrt5 - 1}$.
teile:
  - typ: zahl
    loesung: "4/(sqrt(5) - 1)"
    anzeige: '\sqrt5 + 1 \approx 3{,}236'
    fehler:
      - wert: "2*(sqrt(5)+1)/3"
        meldung: 'Prüfe den Nenner: $(\sqrt5 - 1)(\sqrt5 + 1) = 5 + \sqrt5 - \sqrt5 - 1 = 4$, nicht $6$.'
hinweise:
  - 'Erweitere mit $\sqrt5 + 1$. Dann fallen im Nenner die Wurzeln weg.'
  - 'Multipliziere den Nenner mit dem Distributivgesetz aus: Jeder Summand mal jeder Summand.'
gefuehrt:
  - text: 'Mit welchem Ausdruck erweiterst du, damit die Wurzel im Nenner verschwindet?'
    erklaerung: 'Mit $\sqrt5 + 1$, also dem Nenner mit umgedrehtem Vorzeichen in der Mitte.'
  - text: 'Berechne den neuen Nenner $(\sqrt5 - 1)(\sqrt5 + 1)$.'
    teil:
      typ: zahl
      loesung: "(sqrt(5) - 1)*(sqrt(5) + 1)"
      fehler:
        - wert: "6"
          meldung: 'Das letzte Produkt ist $(-1)\cdot(+1) = -1$. Also $5 - 1$, nicht $5 + 1$.'
    erklaerung: '$\sqrt5\cdot\sqrt5 + \sqrt5 - \sqrt5 - 1 = 5 - 1 = 4$.'
  - text: 'Der Zähler wird $4(\sqrt5 + 1)$. Kürze mit dem Nenner. Was bleibt?'
    teil:
      typ: zahl
      loesung: "sqrt(5) + 1"
      anzeige: '\sqrt5 + 1'
    erklaerung: '$\tfrac{4(\sqrt5 + 1)}{4} = \sqrt5 + 1$.'
loesung: |
  Ansatz: Erweitern mit $\sqrt5 + 1$, damit im Nenner die Wurzeln wegfallen.
  ---
  $$\frac{4}{\sqrt5 - 1}\cdot\frac{\sqrt5 + 1}{\sqrt5 + 1} = \frac{4(\sqrt5 + 1)}{5 - 1} = \frac{4(\sqrt5 + 1)}{4}$$
  ---
  $= \sqrt5 + 1 \approx 3{,}236$. Probe: $4 : (2{,}236 - 1) = 4 : 1{,}236 \approx 3{,}236$.
```

```aufgabe
id: za-wurzel-quadrat
titel: Die Wurzel aus einem Quadrat
niveau: 2
lernziel: 6
kompetenz: verstehen
angabe: |
  Welche Aussagen gelten für **alle** reellen Zahlen $x$?
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$\sqrt{x^2} = x$'
      - '$\sqrt{x^2} = |x|$'
      - '$(\sqrt{x})^2 = x$'
      - '$\sqrt{x^4} = x^2$'
      - '$\sqrt{x^2 + 9} = x + 3$'
    richtig: [1, 3]
    fehler:
      - wert: [0, 1, 3]
        meldung: 'Teste $\sqrt{x^2} = x$ mit $x = -2$: links steht $\sqrt4 = 2$, rechts $-2$.'
      - wert: [1, 2, 3]
        meldung: '$(\sqrt x)^2$ ist für negative $x$ gar nicht erklärt, etwa für $x = -4$. Es gilt also nicht für alle $x$.'
      - wert: [1]
        meldung: 'Prüfe $\sqrt{x^4}$: $x^4 = (x^2)^2$, und $x^2$ ist nie negativ.'
hinweise:
  - 'Teste jede Aussage mit $x = -2$ und mit $x = 1$.'
  - 'Die Wurzel ist nie negativ. Ist die rechte Seite für jedes $x$ ebenfalls nicht negativ?'
loesung: |
  Ansatz: Wir testen mit einer negativen Zahl, denn Wurzeln und gerade Potenzen verschlucken Vorzeichen.
  ---
  $\sqrt{x^2} = x$ ist für $x = -2$ falsch ($\sqrt4 = 2 \neq -2$). Richtig ist $\sqrt{x^2} = |x|$.
  ---
  $(\sqrt x)^2$ ist für $x < 0$ nicht definiert. $\sqrt{x^4} = |x^2| = x^2$, weil $x^2 \ge 0$ ist. Das gilt immer.
  ---
  $\sqrt{x^2 + 9} = x + 3$ ist falsch, etwa für $x = 1$: $\sqrt{10} \approx 3{,}16$, aber $1 + 3 = 4$.
```

```aufgabe
id: za-einheiten-potenzen
titel: Volumen und Seitenlängen
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  a) Wie viele Kubikzentimeter ($\text{cm}^3$) hat ein Kubikdezimeter ($\text{dm}^3$)? Es gilt $1\,\text{dm} = 10\,\text{cm}$.

  b) Ein quadratisches Fenster hat die Fläche $50\,\text{cm}^2$. Wie lang ist eine Seite? Gib das Ergebnis auf zwei Nachkommastellen an.
teile:
  - typ: zahl
    label: 'a)'
    einheit: "cm^3"
    loesung: "10^3"
    fehler:
      - wert: "10"
        meldung: 'Ein Kubikdezimeter ist ein Würfel. Alle drei Kanten werden in Zentimeter umgerechnet: $(10\,\text{cm})^3$.'
      - wert: "30"
        meldung: 'Hoch $3$ heißt dreimal multiplizieren, nicht mal $3$.'
  - typ: zahl
    label: 'b)'
    einheit: cm
    loesung: "sqrt(50)"
    toleranz: 0.01
    fehler:
      - wert: "25"
        meldung: 'Die Seitenlänge ist nicht die Hälfte der Fläche. Gesucht ist die Zahl, deren Quadrat $50$ ist.'
hinweise:
  - 'Bei Einheiten wird die Einheit mitpotenziert: $(10\,\text{cm})^3 = 10^3\,\text{cm}^3$.'
  - 'Fläche eines Quadrats ist Seite mal Seite. Die Seite ist also die Wurzel aus der Fläche.'
loesung: |
  Ansatz: Einheiten werden wie Faktoren behandelt und mitpotenziert. Die Wurzel macht das Quadrieren rückgängig.
  ---
  a) $1\,\text{dm}^3 = (10\,\text{cm})^3 = 10^3\,\text{cm}^3 = 1000\,\text{cm}^3$.
  ---
  b) $s^2 = 50\,\text{cm}^2$, also $s = \sqrt{50}\,\text{cm} = 5\sqrt2\,\text{cm} \approx 7{,}07\,\text{cm}$.
  ---
  Probe zu b): $7{,}07^2 \approx 49{,}98$, das passt zu $50$. Ein Liter ist übrigens genau $1\,\text{dm}^3 = 1000\,\text{cm}^3$.
```

```aufgabe
id: za-potenz-wurzel-fehler
titel: Zwei Fehler finden
niveau: 3
lernziel: 6
kompetenz: begruenden
angabe: |
  Ein Mitschüler rechnet:

  (1) $\sqrt{16 + 9} = \sqrt{16} + \sqrt9 = 7$ und (2) $(2^3)^2 = 2^{3^2} = 2^9 = 512$.

  a) Welche Regel hat er in (1) falsch angewendet?

  b) Berechne beide Ausdrücke richtig.
teile:
  - typ: auswahl
    label: 'a)'
    optionen:
      - 'Er hat die Wurzel auf eine Summe verteilt. Das Wurzelgesetz gilt nur für Produkte.'
      - 'Er hat $\sqrt{16}$ falsch berechnet.'
      - 'Er hätte $\sqrt{16} - \sqrt9$ rechnen müssen.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$\sqrt{16} = 4$ stimmt. Der Fehler liegt einen Schritt früher.'
      - wert: 2
        meldung: 'Auch das wäre falsch. Unter der Wurzel steht eine Summe, und die rechnet man zuerst aus.'
  - typ: zahl
    label: 'b) (1) richtig'
    loesung: "sqrt(16 + 9)"
    fehler:
      - wert: "7"
        meldung: 'Rechne zuerst unter der Wurzel: $16 + 9 = 25$.'
  - typ: zahl
    label: 'b) (2) richtig'
    loesung: "(2^3)^2"
    fehler:
      - wert: "512"
        meldung: 'Bei $(a^m)^n$ werden die Hochzahlen multipliziert: $3\cdot 2$, nicht $3^2$.'
      - wert: "32"
        meldung: 'Bei $(a^m)^n$ werden die Hochzahlen multipliziert, nicht addiert.'
hinweise:
  - 'Bei (1): Was gilt zuerst, die Wurzel oder die Summe darunter?'
  - 'Bei (2): $(2^3)^2 = 2^3\cdot 2^3$. Wie viele Faktoren $2$ sind das?'
loesung: |
  Ansatz: Wir prüfen, welche Gesetze verwendet wurden und ob sie hier gelten.
  ---
  a) In (1) wurde $\sqrt{a + b} = \sqrt a + \sqrt b$ benutzt. Dieses Gesetz gibt es nicht. Wurzeln verteilen sich nur auf Produkte.
  ---
  b) (1) $\sqrt{16 + 9} = \sqrt{25} = 5$.
  ---
  (2) $(2^3)^2 = 2^3\cdot 2^3 = 2^{3\cdot 2} = 2^6 = 64$. Die Schreibweise $2^{3^2}$ bedeutet etwas anderes, nämlich $2^9$.
```

```aufgabe
id: za-potenz-vergleich
titel: Welche Potenz ist größer?
niveau: 3
lernziel: 6
kompetenz: verstehen
angabe: |
  Welche Zahl ist größer, $2^{30}$ oder $3^{20}$? Entscheide **ohne** Taschenrechner und begründe mit den Potenzgesetzen.
teile:
  - typ: auswahl
    optionen: ['$2^{30}$ ist größer.', '$3^{20}$ ist größer.', 'Beide sind gleich groß.']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Die größere Hochzahl allein entscheidet nicht. Bring beide Potenzen auf dieselbe Hochzahl $10$.'
      - wert: 2
        meldung: 'Schreibe $2^{30} = (2^3)^{10}$ und $3^{20} = (3^2)^{10}$ und vergleiche die Basen.'
hinweise:
  - 'Beide Hochzahlen sind Vielfache von $10$. Schreibe $2^{30}$ und $3^{20}$ als Potenzen mit der Hochzahl $10$.'
  - 'Verwende $(a^m)^n = a^{m\cdot n}$ rückwärts.'
loesung: |
  Ansatz: Wir bringen beide Zahlen auf dieselbe Hochzahl. Dann muss man nur noch die Basen vergleichen.
  ---
  $2^{30} = 2^{3\cdot 10} = (2^3)^{10} = 8^{10}$ und $3^{20} = 3^{2\cdot 10} = (3^2)^{10} = 9^{10}$.
  ---
  Weil $9 > 8$ ist und beide Basen positiv sind, ist $9^{10} > 8^{10}$. Also ist $3^{20}$ größer.
  ---
  Kontrolle mit dem Taschenrechner: $2^{30} \approx 1{,}07\cdot 10^9$ und $3^{20} \approx 3{,}49\cdot 10^9$.
```

## Potenzen mit rationalen Hochzahlen

```aufgabe
id: za-check-dritte-wurzel
titel: Eine dritte Wurzel
niveau: 1
art: check
angabe: |
  Berechne $\sqrt[3]{27}$.
  Vorwissen: [1.9 Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln).
teile:
  - typ: zahl
    loesung: "27^(1/3)"
    fehler:
      - wert: "9"
        meldung: 'Gesucht ist die Zahl, die **dreimal** mit sich selbst multipliziert $27$ ergibt. Prüfe: $9\cdot 9\cdot 9 = 729$.'
      - wert: "13.5"
        meldung: 'Wurzelziehen ist nicht Halbieren oder Dritteln. Gesucht ist $b$ mit $b\cdot b\cdot b = 27$.'
hinweise:
  - 'Welche Zahl ergibt hoch drei genau $27$? Probiere $2$, $3$, $4$.'
loesung: |
  $3^3 = 3\cdot 3\cdot 3 = 27$.
  ---
  Also ist $\sqrt[3]{27} = 3$.
```

Bisher stehen in der Hochzahl ganze Zahlen. In Wachstumsformeln, in der Physik und in der Differentialrechnung
kommen aber auch Brüche als Hochzahlen vor, zum Beispiel $x^{1/2}$ oder $1{,}04^{1/12}$. In dieser Lektion klären
wir, was das bedeutet. Die Antwort ist überraschend einfach: Eine Bruch-Hochzahl ist eine Wurzel in anderer Schreibweise.

### Was soll a hoch ein halb bedeuten?

Wir verlangen wieder, dass die Potenzgesetze aus [1.9 Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln)
weiter gelten. Das ist dasselbe Permanenzprinzip, das zu $a^0 = 1$ geführt hat. Nehmen wir $c = 3^{1/2}$. Nach dem
Gesetz $a^m\cdot a^n = a^{m + n}$ müsste gelten:
$$c^2 = 3^{\frac12}\cdot 3^{\frac12} = 3^{\frac12 + \frac12} = 3^1 = 3.$$
Die Zahl $c$ ergibt also quadriert $3$. Wenn $c$ außerdem positiv ist, muss $c = \sqrt3$ sein. Genauso ergibt
$\left(a^{1/n}\right)^n = a^{\frac1n\cdot n} = a$. Also muss $a^{1/n}$ die $n$-te Wurzel von $a$ sein.

:::definition[Rationale Hochzahlen]
Für $a > 0$, eine ganze Zahl $m$ und eine natürliche Zahl $n \ge 2$ ist
$$a^{\frac1n} = \sqrt[n]{a}, \qquad a^{\frac mn} = \sqrt[n]{a^m} = \left(\sqrt[n]a\right)^m.$$
Der Nenner der Hochzahl gibt die Wurzel an, der Zähler die Potenz. Alle Potenzgesetze gelten weiter.
:::

**Beispiele:** $9^{1/2} = \sqrt9 = 3$ und $8^{2/3} = \left(\sqrt[3]8\right)^2 = 2^2 = 4$. Auch Dezimalzahlen als Hochzahl
sind Brüche: $10^{0{,}5} = 10^{1/2} = \sqrt{10} \approx 3{,}162$. **Nichtbeispiel:** $16^{1/2}$ ist **nicht** $16\cdot\tfrac12 = 8$,
sondern $\sqrt{16} = 4$.

:::beispiel[Drei Potenzen ohne Taschenrechner]
1. $16^{3/4}$: Zuerst die Wurzel, weil sie die Zahl klein macht. $\sqrt[4]{16} = 2$, denn $2^4 = 16$. Dann hoch $3$: $2^3 = 8$.
2. $27^{-1/3}$: Die negative Hochzahl bedeutet den Kehrwert. $27^{-1/3} = \dfrac{1}{27^{1/3}} = \dfrac{1}{\sqrt[3]{27}} = \dfrac13$.
3. $4^{1{,}5}$: Es ist $1{,}5 = \tfrac32$. Also $4^{3/2} = \left(\sqrt4\right)^3 = 2^3 = 8$.
:::

:::achtung[Die Hochzahl ein halb heißt Wurzel, nicht Hälfte]
**Falsch:** $16^{1/2} = 8$ und $27^{1/3} = 9$.

**Richtig:** $16^{1/2} = \sqrt{16} = 4$ und $27^{1/3} = \sqrt[3]{27} = 3$. Die Hochzahl wird nie mit der Basis
multipliziert. Probe: $4^2 = 16$ und $3^3 = 27$.
:::

### Warum nur für positive Basen?

:::achtung[Negative Basis und Bruch-Hochzahl]
**Falsch:** Man legt $(-8)^{1/3} = -2$ fest, weil $(-2)^3 = -8$ ist.

**Richtig:** Das führt zu einem Widerspruch. Wegen $\tfrac13 = \tfrac26$ müsste $(-8)^{1/3} = (-8)^{2/6}$ sein. Nach der
Definition wäre aber $(-8)^{2/6} = \sqrt[6]{(-8)^2} = \sqrt[6]{64} = 2$. Ein und dieselbe Potenz hätte zwei Werte. Deshalb
sind Potenzen mit Bruch-Hochzahlen nur für **positive** Basen erklärt. Für $a = 0$ und positive Hochzahlen setzt man $0^{m/n} = 0$.
:::

Die dritte Wurzel aus einer negativen Zahl darfst du als Wurzel schreiben, $\sqrt[3]{-8} = -2$. Nur die Schreibweise
mit Bruch-Hochzahl ist für negative Basen verboten.

### Wurzeln als Potenzen schreiben

Ausdrücke mit mehreren Wurzeln werden fast immer einfacher, wenn man jede Wurzel als Potenz schreibt. Dann muss man nur
noch Brüche in den Hochzahlen addieren, subtrahieren und multiplizieren.

:::beispiel[Mehrere Wurzeln zu einer Potenz zusammenfassen]
Schreibe $\dfrac{\sqrt[3]{x^2}\cdot\sqrt x}{x}$ für $x > 0$ als eine einzige Potenz.

1. Jede Wurzel als Potenz: $\sqrt[3]{x^2} = x^{2/3}$ und $\sqrt x = x^{1/2}$. Im Nenner steht $x = x^1$.
2. Hochzahlen verrechnen, beim Multiplizieren addieren, beim Dividieren subtrahieren: $\tfrac23 + \tfrac12 - 1 = \tfrac{4 + 3 - 6}{6} = \tfrac16$.
3. Ergebnis: $x^{1/6} = \sqrt[6]{x}$.
:::

:::beispiel[Monatszins aus Jahreszins]
Ein Konto bringt $4\,\%$ Zinsen pro Jahr. Welcher gleichbleibende Monatsfaktor ergibt nach $12$ Monaten genau den Jahresfaktor $1{,}04$?

1. Gesucht ist $q$ mit $q^{12} = 1{,}04$, denn zwölf Monate hintereinander heißt zwölfmal mit $q$ multiplizieren.
2. Also $q = 1{,}04^{1/12} = \sqrt[12]{1{,}04} \approx 1{,}003274$.
3. Pro Monat wächst das Guthaben um etwa $0{,}327\,\%$. Das ist etwas weniger als $\tfrac{4\,\%}{12} \approx 0{,}333\,\%$, weil sich die Monatszinsen selbst verzinsen.
:::

:::merke[Rechnen mit rationalen Hochzahlen]
1. Wurzeln umschreiben: $\sqrt[n]{a^m} = a^{m/n}$, insbesondere $\sqrt a = a^{1/2}$ und $\tfrac{1}{\sqrt a} = a^{-1/2}$.
2. Mit den Potenzgesetzen die Hochzahlen verrechnen (Bruchrechnen).
3. Zum Ausrechnen von Zahlen zuerst die Wurzel ziehen, dann potenzieren.
4. Nur für positive Basen verwenden.
:::

```reflexion
frage: 'Jemand sagt: „$8^{1/3}$ ist ein Drittel von $8$.“ Wie überzeugst du ihn mit einem Potenzgesetz vom Gegenteil?'
antwort: |
  Wenn das Gesetz $(a^m)^n = a^{m\cdot n}$ gelten soll, dann ist $\left(8^{1/3}\right)^3 = 8^{1} = 8$.
  Die Zahl $8^{1/3}$ muss also hoch drei genau $8$ ergeben. Das tut die $2$, denn $2^3 = 8$.
  Ein Drittel von $8$ ist $\tfrac83$, und $\left(\tfrac83\right)^3 \approx 19$ ist nicht $8$. Also ist $8^{1/3} = \sqrt[3]{8} = 2$.
```

### Übungen

```aufgabe
id: za-potenz-zahlen
titel: Bruch-Hochzahlen ohne Taschenrechner
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Berechne ohne Taschenrechner: a) $125^{\frac23}$, b) $81^{-\frac34}$, c) $32^{0{,}4}$
teile:
  - typ: zahl
    label: 'a)'
    loesung: "125^(2/3)"
    fehler:
      - wert: "250/3"
        meldung: 'Die Hochzahl wird nicht mit der Basis multipliziert. $\tfrac23$ heißt: dritte Wurzel ziehen, dann quadrieren.'
  - typ: zahl
    label: 'b)'
    loesung: "81^(-3/4)"
    anzeige: '\tfrac{1}{27}'
    fehler:
      - wert: "-27"
        meldung: 'Eine negative Hochzahl bedeutet den Kehrwert, nicht ein negatives Ergebnis.'
      - wert: "27"
        meldung: 'Das ist $81^{3/4}$. Das Minus in der Hochzahl verlangt noch den Kehrwert.'
  - typ: zahl
    label: 'c)'
    loesung: "32^0.4"
    fehler:
      - wert: "12.8"
        meldung: 'Du hast $32\cdot 0{,}4$ gerechnet. Schreibe $0{,}4 = \tfrac25$: fünfte Wurzel, dann quadrieren.'
hinweise:
  - 'Schreibe jede Basis als Potenz: $125 = 5^3$, $81 = 3^4$, $32 = 2^5$.'
  - 'Zuerst die Wurzel (Nenner der Hochzahl), dann die Potenz (Zähler). Bei negativer Hochzahl am Ende den Kehrwert nehmen.'
loesung: |
  Ansatz: Nenner der Hochzahl heißt Wurzel, Zähler heißt Potenz, Minus heißt Kehrwert.
  ---
  a) $\sqrt[3]{125} = 5$, dann $5^2 = 25$.
  ---
  b) $\sqrt[4]{81} = 3$, dann $3^3 = 27$, wegen des Minus der Kehrwert: $\tfrac{1}{27}$.
  ---
  c) $0{,}4 = \tfrac25$: $\sqrt[5]{32} = 2$, dann $2^2 = 4$.
```

```aufgabe
id: za-wurzel-potenz-umschreiben
titel: Wurzeln als Potenzen
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  Schreibe für $x > 0$ jeweils als Potenz $x^k$ und gib $k$ an:

  a) $\sqrt[5]{x^3}$, b) $\dfrac{1}{\sqrt x}$
teile:
  - typ: zahl
    label: 'a) $k =$'
    loesung: "3/5"
    fehler:
      - wert: "5/3"
        meldung: 'Zähler und Nenner sind vertauscht. Die Wurzel gibt den **Nenner** der Hochzahl, die Potenz unter der Wurzel den Zähler.'
  - typ: zahl
    label: 'b) $k =$'
    loesung: "-1/2"
    fehler:
      - wert: "1/2"
        meldung: 'Der Bruchstrich $\tfrac{1}{\ldots}$ bedeutet Kehrwert. Das ergibt ein Minus in der Hochzahl.'
hinweise:
  - '$\sqrt[n]{x^m} = x^{m/n}$ und $\tfrac{1}{x^r} = x^{-r}$.'
loesung: |
  Ansatz: Wurzel heißt Nenner der Hochzahl, Kehrwert heißt negative Hochzahl.
  ---
  a) $\sqrt[5]{x^3} = x^{3/5}$, also $k = \tfrac35$.
  ---
  b) $\tfrac{1}{\sqrt x} = \tfrac{1}{x^{1/2}} = x^{-1/2}$, also $k = -\tfrac12$.
```

```aufgabe
id: za-wurzel-als-potenz
titel: Mehrere Wurzeln zusammenfassen
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Schreibe für $x > 0$ als eine Potenz $x^k$:
  $$\frac{\sqrt[4]{x^3}\cdot\sqrt{x}}{\sqrt[3]{x}}$$
teile:
  - typ: zahl
    label: '$k$'
    loesung: "3/4 + 1/2 - 1/3"
    anzeige: '\tfrac{11}{12}'
    fehler:
      - wert: "19/12"
        meldung: 'Die Wurzel im Nenner wird **dividiert**. Ihre Hochzahl musst du abziehen, nicht addieren.'
      - wert: "1/3"
        meldung: 'Du hast die Brüche umgedreht, etwa $\sqrt[4]{x^3} = x^{4/3}$. Die Wurzel steht im Nenner der Hochzahl.'
hinweise:
  - 'Schreibe jede Wurzel als Potenz mit Bruch-Hochzahl.'
  - 'Beim Multiplizieren werden Hochzahlen addiert, beim Dividieren subtrahiert. Rechne mit dem Hauptnenner $12$.'
loesung: |
  Ansatz: Jede Wurzel als Potenz schreiben, dann nur noch Hochzahlen verrechnen.
  ---
  $\sqrt[4]{x^3} = x^{3/4}$, $\sqrt x = x^{1/2}$, $\sqrt[3]x = x^{1/3}$.
  ---
  $k = \tfrac34 + \tfrac12 - \tfrac13 = \tfrac{9 + 6 - 4}{12} = \tfrac{11}{12}$.
  ---
  Probe mit $x = 4096 = 2^{12}$: $\sqrt[4]{2^{36}} \cdot\sqrt{2^{12}} : \sqrt[3]{2^{12}} = 2^{9}\cdot 2^{6} : 2^{4} = 2^{11}$, und $(2^{12})^{11/12} = 2^{11}$.
```

```aufgabe
id: za-hochzahl-gesucht
titel: Die passende Hochzahl
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Bestimme die Hochzahl $r$:

  a) $4^r = 8$, b) $9^r = \tfrac{1}{27}$
teile:
  - typ: zahl
    label: 'a) $r =$'
    loesung: "3/2"
    fehler:
      - wert: "2"
        meldung: 'Probe: $4^2 = 16$, nicht $8$. Schreibe beide Seiten als Potenz von $2$.'
      - wert: "2/3"
        meldung: 'Probe: $4^{2/3} = \sqrt[3]{16} \approx 2{,}52$. Vergleiche die Hochzahlen von $2^{2r}$ und $2^3$ noch einmal.'
  - typ: zahl
    label: 'b) $r =$'
    loesung: "-3/2"
    fehler:
      - wert: "3/2"
        meldung: 'Das ergibt $27$. Für den Kehrwert $\tfrac{1}{27}$ braucht die Hochzahl ein Minus.'
hinweise:
  - 'Schreibe beide Seiten als Potenz derselben Basis: $4 = 2^2$, $8 = 2^3$, $9 = 3^2$, $\tfrac{1}{27} = 3^{-3}$.'
  - 'Gleiche Basen, gleiche Werte: Dann müssen auch die Hochzahlen gleich sein.'
gefuehrt:
  - text: 'Schreibe $4^r$ als Potenz von $2$. Welche Hochzahl hat $2$ dann?'
    teil:
      typ: term
      variable: r
      loesung: "2r"
      fehler:
        - wert: "r + 2"
          meldung: '$(2^2)^r$: Potenz einer Potenz heißt Hochzahlen multiplizieren.'
    erklaerung: '$4^r = (2^2)^r = 2^{2r}$.'
  - text: 'Es soll $2^{2r} = 8 = 2^3$ gelten. Welche Gleichung muss dann für $r$ gelten?'
    erklaerung: 'Gleiche Basis, also gleiche Hochzahlen: $2r = 3$.'
  - text: 'Löse $2r = 3$.'
    teil: { typ: zahl, loesung: "3/2" }
    erklaerung: '$r = \tfrac32$. Probe: $4^{3/2} = (\sqrt4)^3 = 2^3 = 8$.'
  - text: 'Jetzt b): $9^r = 3^{2r}$ und $\tfrac{1}{27} = 3^{-3}$. Wie groß ist $r$?'
    teil: { typ: zahl, loesung: "-3/2" }
    erklaerung: '$2r = -3$, also $r = -\tfrac32$.'
loesung: |
  Ansatz: Beide Seiten als Potenz derselben Basis schreiben und dann die Hochzahlen vergleichen.
  ---
  a) $4^r = 2^{2r}$ und $8 = 2^3$. Also $2r = 3$ und $r = \tfrac32$.
  ---
  b) $9^r = 3^{2r}$ und $\tfrac{1}{27} = 3^{-3}$. Also $2r = -3$ und $r = -\tfrac32$.
  ---
  Proben: $4^{3/2} = 2^3 = 8$ und $9^{-3/2} = \tfrac{1}{(\sqrt9)^3} = \tfrac{1}{27}$. Wenn sich die Basen nicht so umschreiben lassen, braucht man den Logarithmus aus [1.11 Logarithmen](/lernen/mathe3/zahlen/logarithmen).
```

```aufgabe
id: za-zins-monat
titel: Monatlicher Zinsfaktor
niveau: 2
lernziel: 6
kompetenz: modellieren
angabe: |
  Ein Kredit kostet $6\,\%$ Zinsen pro Jahr. Die Bank rechnet monatlich mit einem gleichbleibenden Faktor $q$, so dass sich nach $12$ Monaten genau der Jahresfaktor $1{,}06$ ergibt.

  a) Berechne $q$ auf sechs Nachkommastellen.

  b) Wie viel Prozent sind das pro Monat? (Auf drei Nachkommastellen.)
teile:
  - typ: zahl
    label: 'a) $q$'
    loesung: "1.06^(1/12)"
    toleranz: 0.00001
    fehler:
      - wert: "1.005"
        meldung: 'Das ist $1 + \tfrac{0{,}06}{12}$. Zwölf Monatsfaktoren werden aber **multipliziert**: Gesucht ist $q$ mit $q^{12} = 1{,}06$.'
  - typ: zahl
    label: 'b) Prozent pro Monat'
    einheit: "%"
    loesung: "(1.06^(1/12) - 1)*100"
    toleranz: 0.001
    fehler:
      - wert: "0.5"
        meldung: 'Durch $12$ teilen wäre zu viel: Die Zinsen jedes Monats werden in den Folgemonaten mitverzinst.'
hinweise:
  - 'Zwölf Monate hintereinander bedeutet zwölfmal mit $q$ multiplizieren: $q^{12} = 1{,}06$.'
  - 'Löse mit einer Bruch-Hochzahl: $q = 1{,}06^{1/12}$.'
loesung: |
  Ansatz: Mehrere gleiche Änderungen hintereinander ergeben den Faktor hoch der Anzahl. Hier gilt $q^{12} = 1{,}06$.
  ---
  a) $q = 1{,}06^{1/12} = \sqrt[12]{1{,}06} \approx 1{,}004868$.
  ---
  b) $(q - 1)\cdot 100 \approx 0{,}487\,\%$ pro Monat.
  ---
  Kontrolle: $1{,}004868^{12} \approx 1{,}0600$. Der Monatssatz ist etwas kleiner als $\tfrac{6}{12} = 0{,}5\,\%$, weil sich die Zinsen verzinsen.
```

```aufgabe
id: za-negative-basis
titel: Warum keine negative Basis?
niveau: 3
lernziel: 6
kompetenz: begruenden
angabe: |
  Jemand möchte $(-27)^{1/3} = -3$ festlegen, weil $(-3)^3 = -27$ ist.

  a) Welchen Wert hätte nach der Definition $a^{m/n} = \sqrt[n]{a^m}$ die Potenz $(-27)^{2/6}$?

  b) Begründe, warum die Festlegung zu einem Widerspruch führt.
teile:
  - typ: zahl
    label: 'a) $(-27)^{2/6} =$'
    loesung: "729^(1/6)"
    fehler:
      - wert: "-3"
        meldung: 'Rechne nach der Definition: zuerst $(-27)^2 = 729$, dann die sechste Wurzel. Eine sechste Wurzel ist nie negativ.'
  - typ: text
    label: 'b)'
    muster: |
      Es ist $\tfrac13 = \tfrac26$, also müsste $(-27)^{1/3} = (-27)^{2/6}$ sein. Nach der Definition ist aber
      $(-27)^{2/6} = \sqrt[6]{729} = 3$, während $(-27)^{1/3} = -3$ sein soll. Dieselbe Potenz hätte zwei verschiedene Werte.
      Deshalb erklärt man Bruch-Hochzahlen nur für positive Basen.
hinweise:
  - 'Rechne $(-27)^2$ aus und ziehe dann die sechste Wurzel.'
  - 'Vergleiche die Hochzahlen $\tfrac13$ und $\tfrac26$. Sind sie gleich?'
loesung: |
  Ansatz: Wir rechnen dieselbe Hochzahl in zwei Schreibweisen und vergleichen.
  ---
  a) $(-27)^2 = 729$ und $\sqrt[6]{729} = 3$, denn $3^6 = 729$. Also wäre $(-27)^{2/6} = 3$.
  ---
  b) Weil $\tfrac13 = \tfrac26$ ist, müssten $(-27)^{1/3}$ und $(-27)^{2/6}$ gleich sein. Die eine ist $-3$, die andere $3$.
  ---
  Eine Rechenvorschrift, die für gleiche Zahlen verschiedene Werte liefert, ist unbrauchbar. Darum gilt $a^{m/n}$ nur für $a > 0$. Die Wurzel $\sqrt[3]{-27} = -3$ darf man trotzdem schreiben.
```

```aufgabe
id: za-wuerfel-verdoppeln
titel: Einen Würfel verdoppeln
niveau: 3
lernziel: 6
kompetenz: modellieren
angabe: |
  Ein Würfel hat die Kantenlänge $a$. Ein neuer Würfel soll das **doppelte Volumen** haben.

  a) Mit welchem Faktor muss man die Kantenlänge multiplizieren? (Auf drei Nachkommastellen.)

  b) Um wie viel Prozent wird die Kante länger? (Auf eine Nachkommastelle.)

  c) Ein Würfel hat das Volumen $343\,\text{cm}^3$. Wie lang ist seine Kante?
teile:
  - typ: zahl
    label: 'a) Faktor'
    loesung: "2^(1/3)"
    toleranz: 0.001
    fehler:
      - wert: "2"
        meldung: 'Doppelte Kante gäbe $2^3 = 8$-faches Volumen. Gesucht ist $k$ mit $k^3 = 2$.'
      - wert: "1.414"
        meldung: 'Das ist $\sqrt2$. Beim Volumen geht die Kante dreimal als Faktor ein, also brauchst du die dritte Wurzel.'
  - typ: zahl
    label: 'b) Verlängerung'
    einheit: "%"
    loesung: "(2^(1/3) - 1)*100"
    toleranz: 0.1
    fehler:
      - wert: "100"
        meldung: 'Die Kante wird nicht verdoppelt. Rechne aus dem Faktor aus a) die prozentuale Zunahme.'
  - typ: zahl
    label: 'c) Kante'
    einheit: cm
    loesung: "343^(1/3)"
    fehler:
      - wert: "114.33"
        meldung: 'Das Volumen eines Würfels ist Kante mal Kante mal Kante, nicht dreimal die Kante.'
hinweise:
  - 'Das Volumen eines Würfels ist $V = a^3$. Wird die Kante mit $k$ multipliziert, wird das Volumen mit $k^3$ multipliziert.'
  - 'Gesucht ist $k$ mit $k^3 = 2$, also $k = 2^{1/3}$.'
loesung: |
  Ansatz: Das Volumen ist $V = a^3$. Mit der Kante $k\cdot a$ wird $V$ zu $(ka)^3 = k^3a^3$.
  ---
  a) Doppeltes Volumen heißt $k^3 = 2$, also $k = 2^{1/3} = \sqrt[3]2 \approx 1{,}260$.
  ---
  b) $(1{,}260 - 1)\cdot 100 \approx 26{,}0\,\%$. Schon gut ein Viertel längere Kanten verdoppeln das Volumen.
  ---
  c) $a = 343^{1/3} = 7\,\text{cm}$, denn $7^3 = 343$. Probe: $7\cdot 7\cdot 7 = 49\cdot 7 = 343$.
```

## Logarithmen

```aufgabe
id: za-check-hochzahl-suchen
titel: Die gesuchte Hochzahl
niveau: 1
art: check
angabe: |
  Für welche Zahl $x$ gilt $2^x = 32$?
  Vorwissen: [1.9 Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln).
teile:
  - typ: zahl
    loesung: "5"
    fehler:
      - wert: "16"
        meldung: 'Gesucht ist die Hochzahl, nicht $32 : 2$. Wie oft muss man $2$ mit sich selbst multiplizieren, um $32$ zu erhalten?'
hinweise:
  - 'Zähle: $2$, $4$, $8$, $16$, $32$. Wie viele Faktoren $2$ sind das?'
loesung: |
  $2^1 = 2$, $2^2 = 4$, $2^3 = 8$, $2^4 = 16$, $2^5 = 32$.
  ---
  Also $x = 5$. Genau diese Frage „Welche Hochzahl?“ beantwortet der Logarithmus.
```

Wann hat sich ein Guthaben bei $3\,\%$ Zinsen verdoppelt? Wie viele Bit braucht man, um eine Million verschiedener
Werte zu speichern? Beide Fragen führen auf Gleichungen, in denen die Unbekannte **in der Hochzahl** steht. Bei
$2^x = 32$ sieht man $x = 5$ noch durch Probieren. Bei $2^x = 10$ geht das nicht mehr: $2^3 = 8$ ist zu klein und
$2^4 = 16$ zu groß. Für solche Fragen braucht man ein neues Werkzeug, den **Logarithmus**.

### Die Definition

:::definition[Logarithmus]
Es sei $a > 0$, $a \neq 1$ und $b > 0$. Der **Logarithmus von $b$ zur Basis $a$** ist die Hochzahl, mit der man $a$
potenzieren muss, um $b$ zu erhalten:
$$\log_a b = x \quad\text{genau dann, wenn}\quad a^x = b.$$
Drei Basen haben eigene Namen:

- $\lg b = \log_{10} b$ heißt **dekadischer Logarithmus**. Auf dem Taschenrechner ist das die Taste **log**.
- $\ln b = \log_e b$ heißt **natürlicher Logarithmus**, Taste **ln**. Dabei ist $e \approx 2{,}71828$ die eulersche Zahl.
- $\operatorname{ld} b = \log_2 b$ heißt **Zweierlogarithmus** (lies „logarithmus dualis“). Er ist in der Informatik wichtig.
:::

Die Zahl $e$ ist, ähnlich wie $\pi$, eine irrationale Zahl mit besonderen Eigenschaften. Warum gerade sie als Basis so
nützlich ist, siehst du in [Kapitel 4](/lernen/mathe3/funktionen) bei Wachstum und in
[Kapitel 9](/lernen/mathe3/differentialrechnung) beim Ableiten.

:::beispiel[Logarithmen über die Definition]
Die Frage lautet jedes Mal: Welche Hochzahl macht aus der Basis die Zahl dahinter?

1. $\log_2 32 = 5$, weil $2^5 = 32$.
2. $\log_3 \tfrac19 = -2$, weil $3^{-2} = \tfrac{1}{3^2} = \tfrac19$.
3. $\lg 0{,}001 = -3$, weil $10^{-3} = 0{,}001$.
4. $\log_5\sqrt5 = \tfrac12$, weil $5^{1/2} = \sqrt5$.
5. $\ln e^4 = 4$ und $e^{\ln 7} = 7$.
:::

Warum die Einschränkungen? Für $a = 1$ ist $1^x = 1$ für jedes $x$. Dann gäbe es für $\log_1 5$ keine Antwort und für
$\log_1 1$ unendlich viele. Für negative Basen ist $a^x$ bei vielen Hochzahlen gar nicht erklärt, wie
[1.10 Potenzen mit rationalen Hochzahlen](/lernen/mathe3/zahlen/potenzen-mit-rationalen-hochzahlen) zeigt. Und weil
$a^x$ für $a > 0$ **immer positiv** ist, gibt es keinen Logarithmus von $0$ oder von negativen Zahlen.

Aus der Definition folgen vier Regeln, die man oft braucht:
$$\log_a 1 = 0, \qquad \log_a a = 1, \qquad \log_a(a^x) = x, \qquad a^{\log_a b} = b.$$
Die letzten beiden sagen: Potenzieren zur Basis $a$ und Logarithmieren zur Basis $a$ heben einander auf, so wie Plus
und Minus. In der Sprache von [Kapitel 4](/lernen/mathe3/funktionen) ist der Logarithmus zur Basis $a$ die
**Umkehrfunktion** der Potenz $a^x$: Die eine macht rückgängig, was die andere tut.

```aufgabe
id: za-check-exponential-vorhersage
titel: Was passiert, wenn die Basis kleiner als 1 wird?
niveau: 1
art: check
angabe: |
  Sag vorher, bevor du das Widget darunter benutzt: Wie sieht der Graph von $y = a^x$ für $a = 0{,}5$ aus?
teile:
  - typ: auswahl
    optionen:
      - 'Er fällt von links nach rechts und bleibt immer über der $x$-Achse.'
      - 'Er steigt, aber langsamer als bei $a = 2$.'
      - 'Er schneidet die $x$-Achse bei $x = 0{,}5$.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Rechne zwei Werte aus: $0{,}5^1 = 0{,}5$ und $0{,}5^2 = 0{,}25$. Wird der Wert größer oder kleiner?'
      - wert: 2
        meldung: 'Eine Potenz mit positiver Basis ist nie $0$. Also kann der Graph die $x$-Achse gar nicht treffen.'
hinweise:
  - 'Berechne $0{,}5^x$ für $x = -1, 0, 1, 2$.'
loesung: |
  $0{,}5^{-1} = 2$, $0{,}5^0 = 1$, $0{,}5^1 = 0{,}5$, $0{,}5^2 = 0{,}25$. Der Graph fällt.
  ---
  Alle Werte sind positiv. Der Graph kommt der $x$-Achse beliebig nahe, berührt sie aber nie.
```

```widget
name: parameter
titel: Exponentialfunktion zur Basis a
props:
  f: "a^x"
  parameter:
    - { name: a, min: 0.2, max: 4, step: 0.1, wert: 2 }
  x: [-4, 4]
  y: [-1, 8]
```

**Beobachte:** Stell $a$ auf $0{,}5$, dann auf $1$, dann auf $3$. Für $a > 1$ steigt der Graph von $a^x$, für $0 < a < 1$ fällt er,
und bei $a = 1$ ist der Graph waagrecht. Alle Graphen gehen durch den Punkt $(0 \mid 1)$, und alle liegen über der
$x$-Achse. **Erkläre:** Deshalb hat $a^x = b$ für jedes $b > 0$ genau eine Lösung $x = \log_a b$, für $b \le 0$ aber keine.

### Die Logarithmengesetze

:::satz[Logarithmengesetze]
Für $a > 0$, $a \neq 1$, positive Zahlen $u$, $v$ und jede reelle Zahl $r$ gilt:
$$\log_a(u\cdot v) = \log_a u + \log_a v, \qquad \log_a\frac uv = \log_a u - \log_a v, \qquad \log_a(u^r) = r\cdot\log_a u.$$
:::

:::beweis
Wir setzen $x = \log_a u$ und $y = \log_a v$. Nach der Definition heißt das $u = a^x$ und $v = a^y$.

Dann ist $u\cdot v = a^x\cdot a^y = a^{x + y}$ nach dem Potenzgesetz. Nach der Definition des Logarithmus bedeutet das
$\log_a(uv) = x + y = \log_a u + \log_a v$. Genauso folgt aus $\tfrac uv = a^{x - y}$ das zweite Gesetz und aus
$u^r = (a^x)^r = a^{rx}$ das dritte: $\log_a(u^r) = rx = r\log_a u$.
:::

Die Logarithmengesetze sind also die Potenzgesetze, von der Seite der Hochzahlen aus gelesen. Ein Logarithmus macht
aus einem Produkt eine Summe und aus einer Potenz ein Produkt. Genau das macht ihn zum Werkzeug für Gleichungen
wie $2^x = 10$: Das $x$ wandert aus der Hochzahl nach vorne.

:::beispiel[Gesetze anwenden]
1. $\lg 2 + \lg 5 = \lg(2\cdot 5) = \lg 10 = 1$.
2. $\log_3 54 - \log_3 2 = \log_3\tfrac{54}{2} = \log_3 27 = 3$.
3. $\ln(e^5) = 5\cdot\ln e = 5\cdot 1 = 5$.
4. Rückwärts zusammenfassen: $2\lg x - \lg y = \lg x^2 - \lg y = \lg\tfrac{x^2}{y}$ für $x, y > 0$.
:::

:::achtung[Gesetze, die es nicht gibt]
**Falsch:** $\lg(10 + 10) = \lg 10 + \lg 10 = 2$.

**Richtig:** $\lg(10 + 10) = \lg 20 \approx 1{,}301$. Für den Logarithmus einer **Summe** gibt es keine Regel. Ebenso falsch
sind $\dfrac{\log u}{\log v} = \log\dfrac uv$ und $(\log u)^2 = 2\log u$. Nur $\log(u^2) = 2\log u$ stimmt. Dabei steht
$\log$ ohne Basis für einen Logarithmus mit beliebiger, fester Basis.
:::

### Basiswechsel

Der Taschenrechner kennt meist nur $\lg$ und $\ln$. Wie berechnet man dann $\log_3 50$?

:::satz[Basiswechsel]
Für $a, c > 0$ mit $a, c \neq 1$ und $b > 0$ gilt:
$$\log_a b = \frac{\log_c b}{\log_c a}, \qquad\text{insbesondere}\qquad \log_a b = \frac{\ln b}{\ln a} = \frac{\lg b}{\lg a}.$$
:::

:::beweis
Sei $x = \log_a b$, also $a^x = b$. Wir logarithmieren beide Seiten zur Basis $c$ und verwenden das dritte Gesetz:
$\log_c(a^x) = x\log_c a = \log_c b$. Weil $a \neq 1$ ist, ist $\log_c a \neq 0$. Also dürfen wir dividieren:
$x = \tfrac{\log_c b}{\log_c a}$.
:::

:::beispiel[Basiswechsel und Verdopplungszeit]
1. $\log_3 50 = \dfrac{\ln 50}{\ln 3} \approx \dfrac{3{,}9120}{1{,}0986} \approx 3{,}561$. Probe: $3^{3{,}561} \approx 50{,}0$.
2. Ein Guthaben wächst mit $3\,\%$ Zinsen pro Jahr. Es verdoppelt sich, wenn $1{,}03^t = 2$ ist. Also $t = \log_{1{,}03} 2 = \dfrac{\ln 2}{\ln 1{,}03} \approx 23{,}45$.
3. Antwort zu 2.: Nach etwa $23{,}5$ Jahren hat sich das Guthaben verdoppelt, gezählt in ganzen Jahren also im $24$. Jahr.
:::

:::achtung[Beim Basiswechsel falsch zusammengefasst]
**Falsch:** $\log_3 50 = \dfrac{\ln 50}{\ln 3} = \ln\dfrac{50}{3} \approx \ln 16{,}67 \approx 2{,}81$.

**Richtig:** Ein Quotient von zwei Logarithmen ist **kein** Logarithmus eines Quotienten. Man rechnet Zähler und Nenner
einzeln aus und teilt dann: $\tfrac{3{,}9120}{1{,}0986} \approx 3{,}561$. Auf dem Taschenrechner tippt man `ln(50) ÷ ln(3)`.
:::

### Exponentialterme auf die Basis e umschreiben

Wegen $a = e^{\ln a}$ (das ist die Regel $a^{\log_a b} = b$ mit der Basis $e$) gilt für jede Basis $a > 0$:
$$a^x = \left(e^{\ln a}\right)^x = e^{(\ln a)\cdot x}.$$
Zum Beispiel ist $10^x = e^{(\ln 10)x} \approx e^{2{,}3026\,x}$. Diese Umformung braucht man in der Differentialrechnung,
weil $e^x$ die einfachste Ableitung hat, und bei Wachstumsmodellen der Form $N_0\,e^{\lambda t}$. Dabei ist $\lambda$
(lies „lambda“) eine feste Zahl, die das Tempo des Wachstums angibt.

:::merke[Logarithmen sicher verwenden]
1. Definition: $\log_a b$ ist die Hochzahl $x$ mit $a^x = b$. Es gibt nur Logarithmen positiver Zahlen.
2. Produkt wird Summe, Quotient wird Differenz, Hochzahl wird Faktor. Für Summen gibt es keine Regel.
3. Andere Basen mit dem Taschenrechner: $\log_a b = \tfrac{\ln b}{\ln a}$. Schreib den Quotienten in die Lösung.
4. Basis $e$: $a^x = e^{(\ln a)x}$.
:::

:::pruefung
Der Taschenrechner hat zwei Logarithmus-Tasten: **log** ist $\lg$ mit der Basis $10$, **ln** hat die Basis $e$. Für jede
andere Basis rechnest du mit dem Basiswechsel. Schreib den Quotienten, zum Beispiel $\tfrac{\ln 2}{\ln 1{,}03}$, immer
in die Lösung und nicht nur das Ergebnis. Dann ist der Lösungsweg nachvollziehbar, und ein Tippfehler kostet nur
wenige Punkte.
:::

```reflexion
frage: 'Warum gibt es für $\log(u + v)$ keine Rechenregel, für $\log(u\cdot v)$ aber schon? Denk an die Potenzgesetze.'
antwort: |
  Die Logarithmengesetze sind übersetzte Potenzgesetze. Für ein Produkt gibt es das Gesetz $a^x\cdot a^y = a^{x + y}$, daraus wird $\log(uv) = \log u + \log v$.
  Für eine Summe $a^x + a^y$ gibt es dagegen kein Potenzgesetz, sie lässt sich nicht als eine einzige Potenz schreiben.
  Deshalb gibt es auch für den Logarithmus einer Summe keine Regel. Ein Gegenbeispiel: $\lg(10 + 10) = \lg 20 \approx 1{,}3$, aber $\lg 10 + \lg 10 = 2$.
```

### Übungen

```aufgabe
id: za-log-definition
titel: Logarithmen über die Definition
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Berechne ohne Taschenrechner:

  a) $\log_2 64$, b) $\log_4\tfrac{1}{16}$, c) $\lg 10\,000$, d) $\log_9 3$
teile:
  - typ: zahl
    label: 'a)'
    loesung: "log(64, 2)"
    fehler:
      - wert: "32"
        meldung: 'Der Logarithmus ist eine Hochzahl, nicht $64 : 2$. Welche Hochzahl macht aus $2$ die Zahl $64$?'
  - typ: zahl
    label: 'b)'
    loesung: "log(1/16, 4)"
    fehler:
      - wert: "2"
        meldung: '$4^2 = 16$, nicht $\tfrac{1}{16}$. Für den Kehrwert braucht die Hochzahl ein Minus.'
      - wert: "1/2"
        meldung: 'Gesucht ist $x$ mit $4^x = \tfrac{1}{16}$. Die Antwort ist eine negative Zahl.'
  - typ: zahl
    label: 'c)'
    loesung: "lg(10000)"
    fehler:
      - wert: "1000"
        meldung: '$\lg$ fragt nach der Hochzahl zur Basis $10$. $10\,000$ hat vier Nullen.'
  - typ: zahl
    label: 'd)'
    loesung: "log(3, 9)"
    anzeige: '\tfrac12'
    fehler:
      - wert: "2"
        meldung: 'Das ist $\log_3 9$. Hier ist die Basis $9$: Welche Hochzahl macht aus $9$ die kleinere Zahl $3$?'
hinweise:
  - 'Frag dich jeweils: Mit welcher Hochzahl muss man die Basis potenzieren, um die Zahl dahinter zu erhalten?'
  - 'Bei b): $\tfrac{1}{16} = 4^{-2}$. Bei d): Eine Wurzel ist eine Hochzahl $\tfrac12$.'
loesung: |
  Ansatz: $\log_a b$ ist die Hochzahl $x$ mit $a^x = b$.
  ---
  a) $2^6 = 64$, also $\log_2 64 = 6$. b) $4^{-2} = \tfrac{1}{16}$, also $\log_4\tfrac{1}{16} = -2$.
  ---
  c) $10^4 = 10\,000$, also $\lg 10\,000 = 4$.
  ---
  d) $9^{1/2} = \sqrt9 = 3$, also $\log_9 3 = \tfrac12$.
```

```aufgabe
id: za-log-gesetze
titel: Logarithmengesetze anwenden
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Berechne ohne Taschenrechner:

  a) $\lg 25 + \lg 4$, b) $\log_2 48 - \log_2 3$, c) $\ln\left(e^3\sqrt e\right)$
teile:
  - typ: zahl
    label: 'a)'
    loesung: "lg(25) + lg(4)"
    fehler:
      - wert: "lg(29)"
        meldung: 'Aus einer Summe von Logarithmen wird der Logarithmus des **Produkts**, nicht der Summe.'
  - typ: zahl
    label: 'b)'
    loesung: "log(48, 2) - log(3, 2)"
    fehler:
      - wert: "log(45, 2)"
        meldung: 'Aus einer Differenz von Logarithmen wird der Logarithmus des **Quotienten**: $\log_2\tfrac{48}{3}$.'
  - typ: zahl
    label: 'c)'
    loesung: "ln(e^3 * sqrt(e))"
    anzeige: '\tfrac72'
    fehler:
      - wert: "3/2"
        meldung: 'Beim Produkt $e^3\cdot e^{1/2}$ werden die Hochzahlen addiert, nicht multipliziert.'
hinweise:
  - 'Summe von Logarithmen = Logarithmus des Produkts. Differenz = Logarithmus des Quotienten.'
  - 'Bei c): $\sqrt e = e^{1/2}$. Fasse zuerst $e^3\cdot e^{1/2}$ zu einer Potenz zusammen.'
loesung: |
  Ansatz: Wir fassen mit den Gesetzen zu einem einzigen Logarithmus zusammen und lesen dann die Hochzahl ab.
  ---
  a) $\lg 25 + \lg 4 = \lg(25\cdot 4) = \lg 100 = 2$.
  ---
  b) $\log_2 48 - \log_2 3 = \log_2\tfrac{48}{3} = \log_2 16 = 4$.
  ---
  c) $e^3\sqrt e = e^{3 + 1/2} = e^{7/2}$, also $\ln e^{7/2} = \tfrac72 = 3{,}5$.
```

```aufgabe
id: za-basiswechsel
titel: Basiswechsel mit dem Taschenrechner
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Berechne auf drei Nachkommastellen: a) $\log_7 100$, b) $\log_{1{,}05} 2$
teile:
  - typ: zahl
    label: 'a)'
    loesung: "ln(100)/ln(7)"
    toleranz: 0.001
    fehler:
      - wert: "ln(7)/ln(100)"
        meldung: 'Zähler und Nenner sind vertauscht. Oben steht der Logarithmus der Zahl, unten der Logarithmus der Basis.'
  - typ: zahl
    label: 'b)'
    loesung: "ln(2)/ln(1.05)"
    toleranz: 0.001
    fehler:
      - wert: "ln(2/1.05)"
        meldung: 'Ein Quotient von Logarithmen ist **nicht** der Logarithmus des Quotienten. Rechne $\ln 2$ und $\ln 1{,}05$ einzeln aus und teile dann.'
hinweise:
  - '$\log_a b = \tfrac{\ln b}{\ln a}$. Oben die Zahl, unten die Basis.'
loesung: |
  Ansatz: Basiswechsel auf $\ln$, weil der Taschenrechner $\ln$ kennt.
  ---
  a) $\log_7 100 = \tfrac{\ln 100}{\ln 7} \approx \tfrac{4{,}6052}{1{,}9459} \approx 2{,}367$. Plausibel: $7^2 = 49$ und $7^3 = 343$, also liegt das Ergebnis zwischen $2$ und $3$.
  ---
  b) $\log_{1{,}05}2 = \tfrac{\ln 2}{\ln 1{,}05} \approx \tfrac{0{,}6931}{0{,}04879} \approx 14{,}207$.
  Deutung: Bei $5\,\%$ Wachstum pro Jahr verdoppelt sich ein Betrag nach gut $14$ Jahren.
```

```aufgabe
id: za-log-zusammenfassen
titel: Zu einem Logarithmus zusammenfassen
niveau: 2
lernziel: 7
kompetenz: verstehen
angabe: |
  Welcher Term ist für $a, b, c > 0$ gleich $2\ln a + 3\ln b - \tfrac12\ln c$?
teile:
  - typ: auswahl
    optionen:
      - '$\ln\left(6ab - \tfrac{c}{2}\right)$'
      - '$\ln\dfrac{a^2b^3}{\sqrt c}$'
      - '$\dfrac{\ln(a^2b^3)}{\ln\sqrt c}$'
      - '$\ln(a^2 + b^3 - \sqrt c)$'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Die Faktoren $2$ und $3$ werden zu Hochzahlen, nicht zu Faktoren im Logarithmus: $2\ln a = \ln a^2$.'
      - wert: 2
        meldung: 'Eine Differenz von Logarithmen wird zum Logarithmus eines **Quotienten**, nicht zu einem Quotienten von Logarithmen.'
      - wert: 3
        meldung: 'Eine Summe von Logarithmen wird zum Logarithmus eines **Produkts**, nicht einer Summe.'
hinweise:
  - 'Zuerst die Faktoren als Hochzahlen hineinziehen: $r\ln u = \ln u^r$.'
  - 'Dann Summe zu Produkt und Differenz zu Quotient machen.'
loesung: |
  Ansatz: Wir wenden die drei Gesetze rückwärts an.
  ---
  Drittes Gesetz rückwärts: $2\ln a = \ln a^2$, $3\ln b = \ln b^3$, $\tfrac12\ln c = \ln c^{1/2} = \ln\sqrt c$.
  ---
  Erstes und zweites Gesetz rückwärts: $\ln a^2 + \ln b^3 - \ln\sqrt c = \ln\dfrac{a^2b^3}{\sqrt c}$.
```

```aufgabe
id: za-log-aus-bekannten
titel: Logarithmen aus bekannten Werten
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Es ist $\lg 2 \approx 0{,}301$ und $\lg 3 \approx 0{,}477$. Berechne damit **ohne** die log-Taste:

  a) $\lg 12$, b) $\lg 1{,}5$, c) $\lg 5$
teile:
  - typ: zahl
    label: 'a)'
    loesung: "2*0.301 + 0.477"
    toleranz: 0.002
    fehler:
      - wert: "0.301*0.301*0.477"
        meldung: 'Der Logarithmus eines Produkts ist die **Summe** der Logarithmen, nicht ihr Produkt.'
  - typ: zahl
    label: 'b)'
    loesung: "0.477 - 0.301"
    toleranz: 0.002
    fehler:
      - wert: "0.477/0.301"
        meldung: 'Der Logarithmus eines Quotienten ist die **Differenz** der Logarithmen: $\lg\tfrac32 = \lg 3 - \lg 2$.'
  - typ: zahl
    label: 'c)'
    loesung: "1 - 0.301"
    toleranz: 0.002
    fehler:
      - wert: "1/0.301"
        meldung: 'Schreibe $5 = \tfrac{10}{2}$. Dann wird aus dem Quotienten eine Differenz, $\lg 10 - \lg 2$.'
hinweise:
  - 'Zerlege die Zahlen in Faktoren $2$, $3$ und $10$: $12 = 2\cdot 2\cdot 3$, $1{,}5 = \tfrac32$, $5 = \tfrac{10}{2}$.'
  - 'Verwende $\lg 10 = 1$ und die Gesetze für Produkt und Quotient.'
loesung: |
  Ansatz: Jede Zahl als Produkt oder Quotient von $2$, $3$ und $10$ schreiben und dann die Gesetze anwenden.
  ---
  a) $\lg 12 = \lg(2^2\cdot 3) = 2\lg 2 + \lg 3 \approx 0{,}602 + 0{,}477 = 1{,}079$.
  ---
  b) $\lg 1{,}5 = \lg\tfrac32 = \lg 3 - \lg 2 \approx 0{,}176$.
  ---
  c) $\lg 5 = \lg\tfrac{10}{2} = \lg 10 - \lg 2 \approx 1 - 0{,}301 = 0{,}699$. Probe mit der log-Taste: $\lg 5 \approx 0{,}69897$.
```

```aufgabe
id: za-verdopplung
titel: Wann verdoppelt sich das Guthaben?
niveau: 2
lernziel: 7
kompetenz: modellieren
angabe: |
  Ein Guthaben wird mit $2{,}5\,\%$ pro Jahr verzinst, und die Zinsen bleiben auf dem Konto. Nach wie vielen Jahren hat es sich verdoppelt? Gib $t$ auf zwei Nachkommastellen an.
teile:
  - typ: zahl
    label: '$t$'
    einheit: Jahre
    loesung: "ln(2)/ln(1.025)"
    toleranz: 0.01
    fehler:
      - wert: "40"
        meldung: 'Du hast mit $2{,}5$ Prozentpunkten pro Jahr linear gerechnet ($100 : 2{,}5$). Die Zinsen werden aber mitverzinst, es wächst mit dem Faktor $1{,}025$.'
      - wert: "ln(2)/ln(2.5)"
        meldung: 'Der Wachstumsfaktor bei $2{,}5\,\%$ ist $1{,}025$, nicht $2{,}5$.'
hinweise:
  - 'Nach $t$ Jahren ist das Guthaben $K\cdot 1{,}025^t$. Verdoppelt heißt $1{,}025^t = 2$.'
  - 'Die Unbekannte steht in der Hochzahl. Löse mit dem Logarithmus und dem Basiswechsel.'
gefuehrt:
  - text: 'Mit welchem Faktor wächst das Guthaben in einem Jahr?'
    teil:
      typ: zahl
      loesung: "1.025"
      fehler:
        - wert: "2.5"
          meldung: '$2{,}5\,\%$ sind $0{,}025$. Der Faktor ist $1 + 0{,}025$.'
    erklaerung: 'Wachstumsfaktor $1 + \tfrac{2{,}5}{100} = 1{,}025$.'
  - text: 'Das Anfangsguthaben $K$ soll sich verdoppeln: $K\cdot 1{,}025^t = 2K$. Welche Gleichung bleibt nach dem Teilen durch $K$?'
    erklaerung: '$1{,}025^t = 2$. Das Anfangsguthaben spielt keine Rolle.'
  - text: 'Schreibe $t$ als Logarithmus und rechne mit dem Basiswechsel aus.'
    teil:
      typ: zahl
      loesung: "ln(2)/ln(1.025)"
      toleranz: 0.01
    erklaerung: '$t = \log_{1{,}025} 2 = \tfrac{\ln 2}{\ln 1{,}025} \approx 28{,}07$.'
loesung: |
  Ansatz: Zinseszins bedeutet jedes Jahr mal $1{,}025$. Verdopplung heißt $1{,}025^t = 2$.
  ---
  Nach der Definition ist $t = \log_{1{,}025} 2$.
  ---
  Basiswechsel: $t = \tfrac{\ln 2}{\ln 1{,}025} \approx \tfrac{0{,}6931}{0{,}02469} \approx 28{,}07$ Jahre.
  ---
  Antwort: Nach etwa $28$ Jahren hat sich das Guthaben verdoppelt. Kontrolle: $1{,}025^{28} \approx 1{,}996$, also knapp $2$.
```

```aufgabe
id: za-basis-e
titel: Auf die Basis e umschreiben
niveau: 2
lernziel: 7
kompetenz: rechnen
quelle: nach Musterprüfung Winkler, Aufgabe 3 (abgewandelt)
angabe: |
  Schreibe $f(x) = 3\cdot 5^x$ in der Form $f(x) = \alpha\, e^{\lambda x}$. Gib $\alpha$ (lies „alpha“) und $\lambda$ (lies „lambda“) an, $\lambda$ exakt oder auf vier Nachkommastellen.
teile:
  - typ: zahl
    label: '$\alpha$'
    loesung: "3"
    fehler:
      - wert: "15"
        meldung: 'Der Faktor $3$ bleibt vorne stehen. Er wird nicht mit der Basis $5$ verrechnet.'
  - typ: zahl
    label: '$\lambda$'
    loesung: "ln(5)"
    anzeige: '\ln 5 \approx 1{,}6094'
    fehler:
      - wert: "5"
        meldung: '$e^{5x}$ ist viel größer als $5^x$. Die Basis $5$ muss erst als Potenz von $e$ geschrieben werden: $5 = e^{\ln 5}$.'
      - wert: "lg(5)"
        meldung: 'Für die Basis $e$ braucht man den natürlichen Logarithmus $\ln$, nicht $\lg$.'
hinweise:
  - '$5 = e^{\ln 5}$.'
  - 'Dann das Potenzgesetz $(e^u)^x = e^{u\cdot x}$ anwenden.'
loesung: |
  Ansatz: Wir schreiben die Basis $5$ als Potenz von $e$. Nach der Definition des Logarithmus ist $5 = e^{\ln 5}$.
  ---
  $5^x = (e^{\ln 5})^x = e^{(\ln 5)x}$, also $f(x) = 3\,e^{(\ln 5)x}$.
  ---
  $\alpha = 3$, $\lambda = \ln 5 \approx 1{,}6094$. Probe bei $x = 1$: $3e^{1{,}6094} \approx 3\cdot 5{,}000 = 15 = 3\cdot 5^1$.
```

```aufgabe
id: za-log-fehler
titel: Logarithmusfehler finden
niveau: 3
lernziel: 7
kompetenz: begruenden
angabe: |
  Eine Mitschülerin rechnet:

  (1) $\lg(100 + 1000) = \lg 100 + \lg 1000 = 2 + 3 = 5$

  (2) $\ln(x^2) = (\ln x)^2$ für $x > 0$

  a) Berechne $\lg(100 + 1000)$ richtig auf drei Nachkommastellen.

  b) Welche Aussage über (2) ist richtig?
teile:
  - typ: zahl
    label: 'a)'
    loesung: "lg(1100)"
    toleranz: 0.001
    fehler:
      - wert: "5"
        meldung: 'Das ist das Ergebnis der fehlerhaften Rechnung. Rechne zuerst die Summe in der Klammer aus.'
  - typ: auswahl
    label: 'b)'
    optionen:
      - '(2) ist falsch. Richtig ist $\ln(x^2) = 2\ln x$, denn die Hochzahl wird zum Faktor.'
      - '(2) ist richtig, weil sich das Quadrat auf den Logarithmus überträgt.'
      - '(2) ist falsch. Richtig ist $\ln(x^2) = \ln 2 + \ln x$.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Teste mit $x = e$: $\ln(e^2) = 2$, aber $(\ln e)^2 = 1$.'
      - wert: 2
        meldung: '$x^2$ ist $x\cdot x$, nicht $2\cdot x$. Also $\ln(x\cdot x) = \ln x + \ln x$.'
hinweise:
  - 'Für den Logarithmus einer Summe gibt es kein Gesetz. Rechne die Klammer zuerst aus.'
  - 'Teste (2) mit einer Zahl, deren Logarithmus du kennst, etwa $x = e$ oder $x = 10$ mit $\lg$.'
loesung: |
  Ansatz: Wir prüfen jede Umformung gegen die drei Gesetze und testen mit Zahlen.
  ---
  a) Für Summen gibt es keine Regel. Richtig: $\lg(1100) \approx 3{,}041$. Plausibel, denn $1100$ liegt knapp über $1000 = 10^3$.
  ---
  b) Das dritte Gesetz lautet $\ln(x^r) = r\ln x$. Also ist $\ln(x^2) = 2\ln x$.
  ---
  Gegenbeispiel zu (2): $x = e$ ergibt links $\ln(e^2) = 2$ und rechts $(\ln e)^2 = 1^2 = 1$.
```

```aufgabe
id: za-log-stellenzahl
titel: Wie viele Stellen hat eine riesige Zahl?
niveau: 3
lernziel: 7
kompetenz: anwenden
angabe: |
  Wie viele Ziffern hat die Zahl $3^{50}$ im Dezimalsystem? Verwende $\lg 3 \approx 0{,}47712$.
teile:
  - typ: zahl
    label: 'Anzahl der Ziffern'
    loesung: "floor(50*lg(3)) + 1"
    fehler:
      - wert: "23"
        meldung: 'Eine Zahl zwischen $10^{23}$ und $10^{24}$ hat $24$ Ziffern, nicht $23$. Denk an $10^1 = 10$: Das hat schon zwei Ziffern.'
      - wert: "50"
        meldung: 'Die Hochzahl $50$ ist nicht die Stellenzahl. Bestimme mit $\lg$, zwischen welchen Zehnerpotenzen $3^{50}$ liegt.'
hinweise:
  - 'Eine natürliche Zahl $N$ hat $d$ Ziffern, wenn $10^{d - 1} \le N < 10^d$ gilt.'
  - 'Berechne $\lg 3^{50} = 50\cdot\lg 3$. Zwischen welchen ganzen Zahlen liegt das Ergebnis?'
loesung: |
  Ansatz: Der dekadische Logarithmus zählt, zwischen welchen Zehnerpotenzen eine Zahl liegt.
  ---
  $\lg 3^{50} = 50\cdot\lg 3 \approx 50\cdot 0{,}47712 = 23{,}856$.
  ---
  Also $10^{23} \le 3^{50} < 10^{24}$. Zahlen von $10^{23}$ bis unter $10^{24}$ haben $24$ Ziffern.
  ---
  Kontrolle: $3^{50} = 717\,897\,987\,691\,852\,588\,770\,249$ hat tatsächlich $24$ Ziffern.
```

## Terme umformen: binomische Formeln und Faktorisieren

```aufgabe
id: za-check-distributiv
titel: Eine Klammer auflösen
niveau: 1
art: check
angabe: |
  Löse die Klammer auf: $3(x + 4)$.
  Vorwissen: Distributivgesetz aus [1.1 Grundrechenarten](/lernen/mathe3/zahlen/grundrechenarten-vorzeichen-klammern-und-rechenreihenfolge).
teile:
  - typ: term
    label: '$3(x + 4) =$'
    loesung: "3x + 12"
    fehler:
      - wert: "3x + 4"
        meldung: 'Die $3$ vor der Klammer gilt für **jeden** Summanden, also auch für die $4$.'
      - wert: "7x"
        meldung: '$x$ und $4$ sind keine gleichartigen Summanden und lassen sich nicht zusammenfassen.'
hinweise:
  - 'Distributivgesetz: $a(b + c) = ab + ac$.'
loesung: |
  Jeder Summand in der Klammer wird mit $3$ multipliziert: $3\cdot x + 3\cdot 4$.
  ---
  Ergebnis: $3x + 12$. Probe mit $x = 1$: $3\cdot 5 = 15$ und $3 + 12 = 15$.
```

In fast jeder Prüfungsaufgabe musst du einen Term umbauen. Man multipliziert aus, um zusammenzufassen. Man faktorisiert,
um zu kürzen oder um **Nullstellen** zu finden, also die Zahlen, für die der Term den Wert $0$ hat. Und man bringt Terme
in eine besondere Form, um etwas abzulesen. Diese Lektion zeigt die Werkzeuge dafür. Das wichtigste ist das Distributivgesetz, das du schon kennst.

### Terme und äquivalente Terme

Ein **Term** ist ein sinnvoller Rechenausdruck aus Zahlen, Variablen, Rechenzeichen und Klammern, zum Beispiel
$2(x + 3)$ oder $\tfrac{a^2}{b}$. Eine **Variable** wie $x$ ist ein Platzhalter für eine Zahl. Setzt man für die
Variable eine Zahl ein, bekommt man den **Wert** des Terms: Für $x = 4$ hat $2(x + 3)$ den Wert $2\cdot 7 = 14$.

Zwei Terme heißen **äquivalent** (gleichwertig), wenn sie für **jede** erlaubte Zahl denselben Wert haben.
**Beispiel:** $2(x + 3)$ und $2x + 6$ sind äquivalent, das sagt das Distributivgesetz. **Nichtbeispiel:** $(x + 3)^2$ und
$x^2 + 9$ sind nicht äquivalent. Für $x = 1$ ergibt der erste $16$, der zweite $10$. Ein Gegenbeispiel genügt.

**Gleichartige Summanden** haben denselben Variablenteil und lassen sich zusammenfassen: $3x + 5x = 8x$ und
$4x^2 - x^2 = 3x^2$. Dagegen sind $x^2$ und $x$ **nicht** gleichartig, $x^2 + x$ bleibt so stehen.

### Ausmultiplizieren und Herausheben

Das **Distributivgesetz** $a(b + c) = ab + ac$ von links nach rechts gelesen heißt **Ausmultiplizieren**. Von rechts
nach links gelesen heißt es **Herausheben** oder **Ausklammern**. Bei zwei Klammern multipliziert man **jeden**
Summanden der ersten Klammer mit **jedem** Summanden der zweiten:
$$(a + b)(c + d) = ac + ad + bc + bd.$$

:::beispiel[Zwei Klammern ausmultiplizieren]
Multipliziere $(x + 4)(2x - 3)$ aus.

1. Jeder mit jedem: $x\cdot 2x + x\cdot(-3) + 4\cdot 2x + 4\cdot(-3)$.
2. Ausrechnen: $2x^2 - 3x + 8x - 12$.
3. Gleichartige Summanden zusammenfassen: $2x^2 + 5x - 12$.

Probe mit $x = 1$: links $5\cdot(-1) = -5$, rechts $2 + 5 - 12 = -5$.
:::

:::achtung[Minus vor der Klammer]
**Falsch:** $5 - (2x - 3) = 5 - 2x - 3 = 2 - 2x$.

**Richtig:** Ein Minus vor einer Klammer dreht **jedes** Vorzeichen in der Klammer um: $5 - (2x - 3) = 5 - 2x + 3 = 8 - 2x$.
Denn $-(2x - 3) = (-1)\cdot(2x - 3) = -2x + 3$. Setz beim Abziehen im Zweifel immer eine Klammer.
:::

### Die binomischen Formeln

Drei Produkte kommen so oft vor, dass man ihr Ergebnis auswendig kennt.

:::formel[Binomische Formeln]
$$(a + b)^2 = a^2 + 2ab + b^2, \qquad (a - b)^2 = a^2 - 2ab + b^2, \qquad (a + b)(a - b) = a^2 - b^2.$$
:::

Sie folgen durch Ausmultiplizieren: $(a + b)^2 = (a + b)(a + b) = a^2 + ab + ba + b^2 = a^2 + 2ab + b^2$. Bei der
dritten Formel heben sich die gemischten Summanden auf: $(a + b)(a - b) = a^2 - ab + ba - b^2 = a^2 - b^2$.
Das Bild zeigt die erste Formel. Ein Quadrat mit der Seite $a + b$ zerfällt in ein Quadrat $a^2$, ein Quadrat $b^2$ und
**zwei** Rechtecke $ab$.

```plot
x: [-0.5, 5]
y: [-0.5, 5]
gleich: true
hoehe: 300
strecken:
  - { von: [0, 0], nach: [4.5, 0] }
  - { von: [4.5, 0], nach: [4.5, 4.5] }
  - { von: [4.5, 4.5], nach: [0, 4.5] }
  - { von: [0, 4.5], nach: [0, 0] }
  - { von: [3, 0], nach: [3, 4.5], gestrichelt: true }
  - { von: [0, 3], nach: [4.5, 3], gestrichelt: true }
punkte:
  - { x: 1.5, y: 1.5, label: "a²", farbe: 0 }
  - { x: 3.75, y: 1.5, label: "a·b", farbe: 1 }
  - { x: 1.5, y: 3.75, label: "a·b", farbe: 1 }
  - { x: 3.75, y: 3.75, label: "b²", farbe: 2 }
beschriftung: Ein Quadrat mit Seitenlänge a + b (hier a = 3, b = 1,5) zerfällt in a², b² und zwei Rechtecke a·b. Daher ist (a + b)² = a² + 2ab + b².
```

:::achtung[Das gemischte Glied vergessen]
**Falsch:** $(x + 5)^2 = x^2 + 25$.

**Richtig:** $(x + 5)^2 = x^2 + 2\cdot x\cdot 5 + 25 = x^2 + 10x + 25$. Die zwei Rechtecke im Bild fehlen sonst.
Probe mit $x = 1$: $(1 + 5)^2 = 36$, aber $1 + 25 = 26$. Nur mit dem gemischten Glied stimmt es: $1 + 10 + 25 = 36$.
:::

:::beispiel[Binomische Formeln vorwärts und rückwärts]
1. Vorwärts: $(3x - 2y)^2 = (3x)^2 - 2\cdot 3x\cdot 2y + (2y)^2 = 9x^2 - 12xy + 4y^2$.
2. Rückwärts mit der dritten Formel: $49a^2 - 25 = (7a)^2 - 5^2 = (7a - 5)(7a + 5)$.
3. Rückwärts mit der ersten Formel: $x^2 + 10x + 25 = (x + 5)^2$, denn $25 = 5^2$ und $10x = 2\cdot x\cdot 5$.
4. Kein vollständiges Quadrat: $x^2 + 10x + 20$, denn $20$ ist nicht $5^2$.
5. Rechentrick: $49\cdot 51 = (50 - 1)(50 + 1) = 2500 - 1 = 2499$.
:::

Für höhere Potenzen liefert das **Pascalsche Dreieck** die Vorfaktoren. Seine ersten Zeilen lauten $1$, dann $1\ 1$, dann
$1\ 2\ 1$, dann $1\ 3\ 3\ 1$. Jede Zahl darin ist die Summe der beiden Zahlen darüber, und die Zeile $1\ 3\ 3\ 1$ liefert: $(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$. Diese Zahlen heißen Binomialkoeffizienten und spielen in der
Wahrscheinlichkeitsrechnung in [Kapitel 16](/lernen/mathe3/wahrscheinlichkeit) eine Hauptrolle.

### Faktorisieren

**Faktorisieren** heißt, eine Summe als Produkt zu schreiben. Das braucht man zum Kürzen von Bruchtermen in
[1.13 Bruchterme](/lernen/mathe3/zahlen/bruchterme) und zum Lösen von Gleichungen. Ein Produkt ist nämlich genau dann
null, wenn einer der Faktoren null ist. Das heißt **Satz vom Nullprodukt**, mehr dazu in [Kapitel 2](/lernen/mathe3/gleichungen).

:::beispiel[Vollständig faktorisieren]
Faktorisiere $2x^3 - 8x$ vollständig.

1. Herausheben, was alle Summanden gemeinsam haben, hier $2x$: $2x^3 - 8x = 2x(x^2 - 4)$.
2. In der Klammer steht eine Differenz zweier Quadrate. Dritte binomische Formel: $x^2 - 4 = (x - 2)(x + 2)$.
3. Ergebnis: $2x(x - 2)(x + 2)$. „Vollständig“ heißt, dass sich kein Faktor weiter zerlegen lässt.
:::

:::merke[Faktorisieren: Reihenfolge der Versuche]
1. **Herausheben**, was alle Summanden gemeinsam haben: $6x^3 - 9x^2 = 3x^2(2x - 3)$.
2. **Binomische Formel** rückwärts: zwei Quadrate mit Minus dazwischen, oder drei Summanden mit Quadraten außen.
3. **Gruppieren** bei vier Summanden: $ax + ay + bx + by = a(x + y) + b(x + y) = (a + b)(x + y)$.
4. Quadratischer Term $x^2 + px + q$ mit den Nullstellen $x_1$ und $x_2$: $x^2 + px + q = (x - x_1)(x - x_2)$, siehe [Kapitel 2](/lernen/mathe3/gleichungen).
:::

### Quadratische Ergänzung

Manchmal fehlt zum vollständigen Quadrat nur eine Zahl. Dann **ergänzt** man sie und zieht sie sofort wieder ab. Der
Wert des Terms ändert sich dabei nicht, denn man addiert insgesamt null.

:::beispiel[Quadratische Ergänzung]
Schreibe $x^2 + 6x + 2$ in der Form $(x + d)^2 + e$.

1. Den Vorfaktor von $x$ halbieren: $\tfrac62 = 3$. Diese Zahl quadrieren: $3^2 = 9$.
2. Die $9$ addieren und wieder abziehen: $x^2 + 6x + 9 - 9 + 2$.
3. Die ersten drei Summanden sind ein vollständiges Quadrat: $(x + 3)^2 - 9 + 2 = (x + 3)^2 - 7$.

Steht vor $x^2$ ein Faktor ungleich $1$, hebt man ihn zuerst aus den ersten beiden Summanden heraus:
$2x^2 + 12x + 5 = 2(x^2 + 6x) + 5 = 2\big((x + 3)^2 - 9\big) + 5 = 2(x + 3)^2 - 13$.
:::

Allgemein gilt $x^2 + px + q = \left(x + \tfrac p2\right)^2 + q - \tfrac{p^2}{4}$. Die quadratische Ergänzung liefert die
**Scheitelform** einer Parabel: $y = (x + 3)^2 - 7$ hat den tiefsten Punkt bei $S(-3 \mid -7)$, siehe
[Kapitel 4](/lernen/mathe3/funktionen). Außerdem steckt sie hinter der Lösungsformel für quadratische Gleichungen in
[Kapitel 2](/lernen/mathe3/gleichungen).

### Äquivalente Terme erkennen

In Prüfungen gibt es gern Ankreuzfragen der Art „Welche dieser Terme sind für jedes $a \neq 0$ gleich $a$?“. Die
Strategie lautet: Jeden Term mit den Regeln vereinfachen **und** mit einer negativen Zahl testen. Wurzeln und gerade Potenzen
verschlucken nämlich Vorzeichen, wie $\sqrt{a^2} = |a|$ aus [1.9 Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln) zeigt.

:::pruefung
Ein einziges Gegenbeispiel genügt, um „ist gleich $a$“ zu widerlegen. Wähle Testzahlen, bei denen Fehler sichtbar
werden: $a = -2$ für Vorzeichenfehler und $a = 3$ statt $1$ oder $2$. Bei $2$ ist nämlich $2\cdot 2 = 2^2 = 2 + 2$, und
das verdeckt viele Fehler. Bei $1$ ist $1^2 = 1$, auch das verdeckt Fehler. Für „ist gleich“ brauchst du dagegen eine Umformung, ein Beispiel reicht nicht.
:::

```reflexion
frage: 'Warum ist $(a + b)^2 = a^2 + b^2$ falsch, obwohl $(ab)^2 = a^2b^2$ richtig ist?'
antwort: |
  $(ab)^2 = ab\cdot ab$ ist ein Produkt aus vier Faktoren, die man beliebig umordnen darf: $a\cdot a\cdot b\cdot b = a^2b^2$.
  $(a + b)^2 = (a + b)(a + b)$ ist ein Produkt zweier **Summen**. Beim Ausmultiplizieren entstehen vier Produkte, darunter zweimal $ab$.
  Im Bild sind das die zwei Rechtecke. Potenzgesetze gelten für Produkte, nicht für Summen.
```

### Übungen

```aufgabe
id: za-ausmultiplizieren
titel: Ausmultiplizieren und zusammenfassen
niveau: 1
lernziel: 8
kompetenz: rechnen
angabe: |
  Multipliziere aus und fasse zusammen:

  a) $4(2x - 3) - (x - 5)$, b) $(x + 2)(x - 5)$
teile:
  - typ: term
    label: 'a)'
    loesung: "7x - 7"
    fehler:
      - wert: "7x - 17"
        meldung: 'Das Minus vor $(x - 5)$ dreht **beide** Vorzeichen um: $-(x - 5) = -x + 5$.'
      - wert: "7x + 2"
        meldung: 'Die $4$ gilt für beide Summanden in der ersten Klammer: $4\cdot(-3) = -12$.'
  - typ: term
    label: 'b)'
    loesung: "x^2 - 3x - 10"
    fehler:
      - wert: "x^2 - 10"
        meldung: 'Die gemischten Produkte $x\cdot(-5)$ und $2\cdot x$ fehlen. Jeder Summand wird mit jedem multipliziert.'
hinweise:
  - 'Bei a) zuerst beide Klammern auflösen, auf das Minus vor der zweiten Klammer achten.'
  - 'Bei b) jeder mit jedem: vier Produkte, dann zusammenfassen.'
loesung: |
  Ansatz: Distributivgesetz anwenden, dann gleichartige Summanden zusammenfassen.
  ---
  a) $8x - 12 - x + 5 = 7x - 7$.
  ---
  b) $x\cdot x - 5x + 2x - 10 = x^2 - 3x - 10$. Probe mit $x = 1$: $3\cdot(-4) = -12$ und $1 - 3 - 10 = -12$.
```

```aufgabe
id: za-binomisch
titel: Binomische Formeln anwenden
niveau: 1
lernziel: 8
kompetenz: rechnen
angabe: |
  a) Multipliziere aus: $(2x - 5)^2$

  b) Multipliziere aus: $(3x + 4)(3x - 4)$

  c) Vereinfache für $a, b \neq 0$: $\dfrac{(a + b)^2 - (a - b)^2}{4ab}$
teile:
  - typ: term
    label: 'a)'
    loesung: "4x^2 - 20x + 25"
    fehler:
      - wert: "4x^2 + 25"
        meldung: 'Das gemischte Glied $-2\cdot 2x\cdot 5$ fehlt.'
      - wert: "4x^2 - 25"
        meldung: 'Das ist die dritte Formel. Hier steht aber ein Quadrat $(a - b)^2$, und das hat ein gemischtes Glied.'
      - wert: "2x^2 - 20x + 25"
        meldung: 'Auch die $2$ vor dem $x$ wird quadriert: $(2x)^2 = 4x^2$.'
  - typ: term
    label: 'b)'
    loesung: "9x^2 - 16"
    fehler:
      - wert: "3x^2 - 16"
        meldung: 'Quadriert wird der ganze erste Summand $3x$: $(3x)^2 = 9x^2$.'
  - typ: zahl
    label: 'c)'
    loesung: "1"
    fehler:
      - wert: "0"
        meldung: 'Die gemischten Glieder heben sich nicht auf: $+2ab - (-2ab) = 4ab$.'
hinweise:
  - 'Bei a) die zweite binomische Formel, bei b) die dritte, bei c) die erste und die zweite.'
  - 'Mittelglied nicht vergessen: $2\cdot 2x\cdot 5$. Bei c) auf das Minus vor der zweiten Klammer achten.'
loesung: |
  Ansatz: Jede Klammer mit der passenden binomischen Formel ausmultiplizieren.
  ---
  a) $(2x - 5)^2 = (2x)^2 - 2\cdot 2x\cdot 5 + 5^2 = 4x^2 - 20x + 25$.
  ---
  b) Dritte binomische Formel: $(3x)^2 - 4^2 = 9x^2 - 16$.
  ---
  c) Zähler: $(a^2 + 2ab + b^2) - (a^2 - 2ab + b^2) = 4ab$. Also $\tfrac{4ab}{4ab} = 1$.
```

```aufgabe
id: za-faktorisieren
titel: Vollständig faktorisieren
niveau: 2
lernziel: 8
kompetenz: verstehen
angabe: |
  Welche Darstellung ist die **vollständige** Faktorisierung von $4x^3 - 36x$?
teile:
  - typ: auswahl
    optionen:
      - '$4(x^3 - 9x)$'
      - '$4x(x^2 - 9)$'
      - '$4x(x - 3)(x + 3)$'
      - '$4x(x - 3)^2$'
      - '$4(x - 3)(x + 3)$'
    richtig: [2]
    fehler:
      - wert: 0
        meldung: 'Richtig umgeformt, aber nicht vollständig. Auch $x$ lässt sich noch herausheben.'
      - wert: 1
        meldung: 'Richtig, aber nicht vollständig: $x^2 - 9$ ist eine Differenz zweier Quadrate.'
      - wert: 3
        meldung: '$(x - 3)^2 = x^2 - 6x + 9$, nicht $x^2 - 9$. Hier braucht man die dritte binomische Formel.'
      - wert: 4
        meldung: 'Probe mit $x = 2$: Der ursprüngliche Term ergibt $32 - 72 = -40$, dieser aber $4\cdot(-1)\cdot 5 = -20$. Ein Faktor $x$ fehlt.'
hinweise:
  - 'Erst den größten gemeinsamen Faktor herausheben, dann prüfen, ob eine binomische Formel passt.'
  - 'Vollständig heißt: Kein Faktor lässt sich weiter zerlegen.'
loesung: |
  Ansatz: Zuerst herausheben, dann die Klammer mit einer binomischen Formel zerlegen.
  ---
  Herausheben: $4x^3 - 36x = 4x(x^2 - 9)$.
  ---
  $x^2 - 9 = (x - 3)(x + 3)$, also $4x(x - 3)(x + 3)$.
  ---
  Probe mit $x = 2$: $4\cdot 8 - 72 = -40$ und $8\cdot(-1)\cdot 5 = -40$.
```

```aufgabe
id: za-quadratische-ergaenzung
titel: Quadratische Ergänzung
niveau: 2
lernziel: 8
kompetenz: rechnen
angabe: |
  a) Schreibe $x^2 - 8x + 7$ in der Form $(x - d)^2 + e$.

  b) Schreibe $3x^2 - 12x + 1$ in der Form $3(x - 2)^2 + e$.
teile:
  - typ: zahl
    label: 'a) $d$'
    loesung: "4"
    fehler:
      - wert: "8"
        meldung: 'Der Vorfaktor von $x$ wird **halbiert**: $\tfrac82 = 4$.'
  - typ: zahl
    label: 'a) $e$'
    loesung: "7 - 16"
    fehler:
      - wert: "23"
        meldung: 'Die ergänzte $16$ muss wieder **abgezogen** werden, nicht addiert.'
  - typ: zahl
    label: 'b) $e$'
    loesung: "1 - 3*4"
    fehler:
      - wert: "-3"
        meldung: 'Die abgezogene $4$ steht innerhalb der Klammer mit dem Faktor $3$ davor. Sie wird also mit $3$ multipliziert.'
hinweise:
  - 'Halber Vorfaktor von $x$, quadriert, addieren und wieder abziehen.'
  - 'Bei b) zuerst $3$ aus den ersten beiden Summanden herausheben: $3(x^2 - 4x) + 1$.'
gefuehrt:
  - text: 'a) Halbiere den Vorfaktor $-8$ von $x$ und quadriere ihn. Welche Zahl wird ergänzt?'
    teil:
      typ: zahl
      loesung: "16"
      fehler:
        - wert: "64"
          meldung: 'Erst halbieren, dann quadrieren: $(-4)^2$.'
    erklaerung: '$\tfrac{-8}{2} = -4$ und $(-4)^2 = 16$.'
  - text: 'Schreibe $x^2 - 8x + 16 - 16 + 7$ als $(x - 4)^2 + e$. Wie groß ist $e$?'
    teil: { typ: zahl, loesung: "-16 + 7" }
    erklaerung: '$(x - 4)^2 - 16 + 7 = (x - 4)^2 - 9$.'
  - text: 'b) Hebe $3$ aus $3x^2 - 12x$ heraus. Was steht in der Klammer?'
    teil:
      typ: term
      loesung: "x^2 - 4x"
      fehler:
        - wert: "x^2 - 12x"
          meldung: 'Auch $-12x$ wird durch $3$ geteilt.'
    erklaerung: '$3x^2 - 12x + 1 = 3(x^2 - 4x) + 1$.'
  - text: 'Ergänze in der Klammer: $x^2 - 4x = (x - 2)^2 - 4$. Multipliziere aus und bestimme $e$ in $3(x - 2)^2 + e$.'
    teil: { typ: zahl, loesung: "-12 + 1" }
    erklaerung: '$3\big((x - 2)^2 - 4\big) + 1 = 3(x - 2)^2 - 12 + 1 = 3(x - 2)^2 - 11$.'
loesung: |
  Ansatz: Halben Vorfaktor von $x$ quadrieren, addieren und wieder abziehen. Bei einem Faktor vor $x^2$ zuerst herausheben.
  ---
  a) $x^2 - 8x + 7 = (x^2 - 8x + 16) - 16 + 7 = (x - 4)^2 - 9$. Also $d = 4$, $e = -9$.
  ---
  b) $3x^2 - 12x + 1 = 3(x^2 - 4x) + 1 = 3\big((x - 2)^2 - 4\big) + 1 = 3(x - 2)^2 - 11$, also $e = -11$.
  ---
  Proben bei $x = 0$: a) $(0 - 4)^2 - 9 = 7$. b) $3\cdot 4 - 11 = 1$. Beide stimmen mit dem ursprünglichen Term überein.
```

```aufgabe
id: za-terme-gleich-a
titel: Welche Darstellung ist gleich b?
niveau: 2
lernziel: 8
kompetenz: begruenden
quelle: nach Musterprüfung Schranz-Kirlinger (24. 2. 2023), Beispiel 1.1 (abgewandelt)
angabe: |
  Gegeben ist eine reelle Zahl $b \neq 0$. Welche der folgenden Darstellungen sind für **jedes** solche $b$ gleich $b$?
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '(a) $\dfrac{(3b)^2}{9b}$'
      - '(b) $(\sqrt b)^2$'
      - '(c) $(b^{-1})^{-1}$'
      - '(d) $\dfrac{\sqrt{b^4}}{b}$'
      - '(e) $\dfrac{b + 3}{3}$'
      - '(f) $\dfrac{\sqrt{9b^2}}{3}$'
    richtig: [0, 2, 3]
    fehler:
      - wert: [0, 2, 3, 5]
        meldung: 'Teste (f) mit $b = -2$: $\sqrt{9\cdot 4} : 3 = 6 : 3 = 2$, nicht $-2$. Es gilt $\sqrt{9b^2} = 3|b|$.'
      - wert: [0, 1, 2, 3]
        meldung: '$(\sqrt b)^2$ ist für negative $b$ gar nicht erklärt, denn $\sqrt b$ gibt es dann nicht.'
      - wert: [0, 2]
        meldung: 'Prüfe (d) genauer: $\sqrt{b^4} = b^2$, denn $b^2$ ist nie negativ. Und $\tfrac{b^2}{b} = b$.'
hinweise:
  - 'Vereinfache jeden Term mit den Potenz- und Wurzelgesetzen.'
  - 'Teste zusätzlich mit $b = -2$, denn Wurzeln verschlucken Vorzeichen: $\sqrt{b^2} = |b|$.'
loesung: |
  Ansatz: Jeder Term wird vereinfacht und mit einer negativen Zahl getestet.
  ---
  (a) $\tfrac{9b^2}{9b} = b$, richtig. (b) Für $b < 0$ ist $\sqrt b$ nicht definiert, also nicht für jedes $b$.
  ---
  (c) $(b^{-1})^{-1} = b^{(-1)\cdot(-1)} = b^1 = b$, richtig. (d) $\sqrt{b^4} = b^2$, also $\tfrac{b^2}{b} = b$, richtig.
  ---
  (e) $\tfrac{b + 3}{3} = \tfrac b3 + 1$, für $b = 3$ ist das $2 \neq 3$. Aus Summen kürzt man nicht.
  (f) $\tfrac{\sqrt{9b^2}}{3} = \tfrac{3|b|}{3} = |b|$, für $b = -2$ ist das $2 \neq -2$. Gleich $b$ sind also (a), (c) und (d).
```

```aufgabe
id: za-faktorisieren-gruppen
titel: Gruppieren und Nullstellen
niveau: 3
lernziel: 8
kompetenz: rechnen
angabe: |
  Faktorisiere $p(x) = x^3 + 2x^2 - 9x - 18$ vollständig, indem du jeweils zwei Summanden zusammenfasst.
  Gib anschließend alle Zahlen $x$ an, für die $p(x) = 0$ ist.
teile:
  - typ: menge
    label: 'Nullstellen'
    loesung: ["-2", "3", "-3"]
    fehler:
      - wert: ["3", "-3"]
        meldung: 'Auch der Faktor $(x + 2)$ kann null werden. Für welches $x$ passiert das?'
      - wert: ["2", "3", "-3"]
        meldung: 'Der Faktor $x + 2$ wird null für $x = -2$, nicht für $x = 2$.'
hinweise:
  - 'Gruppiere $(x^3 + 2x^2) + (-9x - 18)$ und hebe in jeder Gruppe heraus.'
  - 'Ein Produkt ist genau dann null, wenn ein Faktor null ist.'
loesung: |
  Ansatz: Gruppieren, in jeder Gruppe herausheben, dann den gemeinsamen Faktor herausheben.
  ---
  $x^3 + 2x^2 - 9x - 18 = x^2(x + 2) - 9(x + 2)$.
  ---
  Gemeinsamer Faktor $(x + 2)$: $(x + 2)(x^2 - 9) = (x + 2)(x - 3)(x + 3)$.
  ---
  Satz vom Nullprodukt: $x = -2$, $x = 3$ oder $x = -3$. Probe $x = 3$: $27 + 18 - 27 - 18 = 0$.
```

```aufgabe
id: za-binom-beweis
titel: Rechentricks begründen
niveau: 3
lernziel: 8
kompetenz: begruenden
angabe: |
  a) Berechne $101^2 - 99^2$ ohne Taschenrechner mit einer binomischen Formel.

  b) Vereinfache $(n + 1)^2 - n^2$.

  c) Begründe mit b): Für jede natürliche Zahl $n$ ist der Abstand der aufeinanderfolgenden Quadratzahlen $n^2$ und $(n + 1)^2$ ungerade.
teile:
  - typ: zahl
    label: 'a)'
    loesung: "101^2 - 99^2"
    fehler:
      - wert: "4"
        meldung: 'Du hast $(101 - 99)^2$ gerechnet. Die dritte Formel lautet $a^2 - b^2 = (a - b)(a + b)$.'
  - typ: term
    label: 'b)'
    variable: n
    loesung: "2n + 1"
    fehler:
      - wert: "1"
        meldung: 'Das gemischte Glied fehlt: $(n + 1)^2 = n^2 + 2n + 1$.'
  - typ: text
    label: 'c)'
    muster: |
      Nach b) ist $(n + 1)^2 - n^2 = 2n + 1$. Das ist das Doppelte einer ganzen Zahl plus $1$, also ungerade.
      Beispiele: $4 - 1 = 3$, $9 - 4 = 5$, $16 - 9 = 7$.
hinweise:
  - 'a): $a^2 - b^2 = (a - b)(a + b)$ mit $a = 101$ und $b = 99$.'
  - 'b): Erste binomische Formel für $(n + 1)^2$, dann $n^2$ abziehen. c): Wie sieht eine ungerade Zahl allgemein aus?'
loesung: |
  Ansatz: Die dritte und die erste binomische Formel machen große Rechnungen klein und liefern allgemeine Begründungen.
  ---
  a) $101^2 - 99^2 = (101 - 99)(101 + 99) = 2\cdot 200 = 400$.
  ---
  b) $(n + 1)^2 - n^2 = n^2 + 2n + 1 - n^2 = 2n + 1$.
  ---
  c) $2n + 1$ hat die Form einer ungeraden Zahl. Also ist der Abstand zweier aufeinanderfolgender Quadratzahlen immer ungerade: $3, 5, 7, 9, \dots$
```

## Bruchterme

```aufgabe
id: za-check-faktorisieren-quadrate
titel: Eine Differenz von Quadraten zerlegen
niveau: 1
art: check
angabe: |
  Welches Produkt ist gleich $x^2 - 9$?
  Vorwissen: [1.12 Terme umformen](/lernen/mathe3/zahlen/terme-umformen-binomische-formeln-und-faktorisieren).
teile:
  - typ: auswahl
    optionen: ['$(x - 3)(x + 3)$', '$(x - 3)^2$', '$(x - 9)(x + 9)$', '$x(x - 9)$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$(x - 3)^2 = x^2 - 6x + 9$. Da steht ein gemischtes Glied und $+9$.'
      - wert: 2
        meldung: '$(x - 9)(x + 9) = x^2 - 81$. Die Zahl in der Klammer ist die Wurzel aus $9$.'
      - wert: 3
        meldung: '$x(x - 9) = x^2 - 9x$. Das ist etwas anderes als $x^2 - 9$.'
hinweise:
  - 'Dritte binomische Formel: $a^2 - b^2 = (a - b)(a + b)$.'
loesung: |
  $x^2 - 9 = x^2 - 3^2$ ist eine Differenz zweier Quadrate.
  ---
  Mit der dritten binomischen Formel: $(x - 3)(x + 3)$. Dieses Zerlegen brauchst du gleich zum Kürzen.
```

Ein **Bruchterm** ist ein Bruch, in dessen Nenner eine Variable vorkommt, zum Beispiel $\tfrac{x}{x - 1}$ oder
$\tfrac{3}{x^2 - 4}$. Solche Terme entstehen bei Geschwindigkeiten, Mischungen, Widerständen in der Physik und bei
rationalen Funktionen in [Kapitel 4](/lernen/mathe3/funktionen). Gerechnet wird genau wie mit Zahlenbrüchen aus
[1.5 Bruchrechnen](/lernen/mathe3/zahlen/bruchrechnen). Neu ist nur eines: Man muss aufpassen, dass kein Nenner null wird.

### Die Definitionsmenge

Weil man nicht durch $0$ dividieren darf, gehört zu jedem Bruchterm eine **Definitionsmenge** $D$. Das ist die Menge aller
Zahlen, die man für die Variable einsetzen darf. Man erhält sie, indem man alle Zahlen ausschließt, für die ein Nenner
null wird.

:::beispiel[Definitionsmengen bestimmen]
1. $\dfrac{x}{x - 1}$: Der Nenner $x - 1$ ist null für $x = 1$. Also $D = \R \setminus \{1\}$, gelesen „alle reellen Zahlen ohne die $1$“.
2. $\dfrac{3}{x^2 - 4}$: Der Nenner $x^2 - 4 = (x - 2)(x + 2)$ ist null für $x = 2$ und für $x = -2$. Also $D = \R \setminus \{-2, 2\}$.
3. $\dfrac{x + 1}{5}$: Im Nenner steht keine Variable, er ist nie null. Also $D = \R$. Das ist gar kein Bruchterm im engeren Sinn.
:::

Für die Definitionsmenge zählen nur die **Nenner**. Wird der Zähler null, ist das erlaubt: Der Bruch hat dann den Wert $0$.

### Kürzen durch Faktorisieren

Kürzen darf man nur gemeinsame **Faktoren** von Zähler und Nenner. Deshalb faktorisiert man zuerst beide mit den Werkzeugen
aus [1.12 Terme umformen](/lernen/mathe3/zahlen/terme-umformen-binomische-formeln-und-faktorisieren).

:::beispiel[Kürzen durch Faktorisieren]
Vereinfache $\dfrac{x^2 - 4}{x^2 + 2x}$.

1. Definitionsmenge: Der Nenner $x^2 + 2x = x(x + 2)$ ist null für $x = 0$ und $x = -2$. Also $x \neq 0$ und $x \neq -2$.
2. Faktorisieren: Zähler $x^2 - 4 = (x - 2)(x + 2)$ mit der dritten binomischen Formel, Nenner $x(x + 2)$ durch Herausheben.
3. Den gemeinsamen Faktor $(x + 2)$ kürzen: $\dfrac{(x - 2)(x + 2)}{x(x + 2)} = \dfrac{x - 2}{x}$.

Die Einschränkung $x \neq -2$ bleibt bestehen, auch wenn man dem gekürzten Term nicht mehr ansieht, dass $-2$ verboten war.
:::

:::achtung[Aus Summen kürzt man nicht]
**Falsch:** $\dfrac{x + 3}{x} = 3$ und $\dfrac{x^2 + 4}{x + 2} = x + 2$.

**Richtig:** Kürzen darf man nur Faktoren. Prüfe mit einer Zahl: $x = 1$ ergibt $\tfrac{1 + 3}{1} = 4 \neq 3$. Beim
zweiten Term passt $x = 0$ zufällig, aber $x = 2$ ergibt $\tfrac{8}{4} = 2 \neq 4$. Richtig umgeformt ist
$\tfrac{x + 3}{x} = \tfrac xx + \tfrac3x = 1 + \tfrac3x$. Der Term $\tfrac{x^2 + 4}{x + 2}$ lässt sich gar nicht kürzen.
:::

### Addieren und Subtrahieren

Den Hauptnenner bildet man aus den **faktorisierten** Nennern: Jeder Faktor kommt so oft vor, wie er höchstens in einem
Nenner vorkommt. Dann erweitert man jeden Bruch und fasst die Zähler zusammen.

:::beispiel[Bruchterme subtrahieren]
Fasse $\dfrac{x}{x - 1} - \dfrac{1}{x + 1}$ zusammen, für $x \neq 1$ und $x \neq -1$.

1. Hauptnenner: $(x - 1)(x + 1)$, denn die beiden Nenner haben keinen gemeinsamen Faktor.
2. Erweitern: den ersten Bruch mit $(x + 1)$, den zweiten mit $(x - 1)$:
   $\dfrac{x(x + 1)}{(x - 1)(x + 1)} - \dfrac{x - 1}{(x - 1)(x + 1)}$.
3. Zähler zusammenfassen, mit Klammer um den abgezogenen Zähler: $x^2 + x - (x - 1) = x^2 + x - x + 1 = x^2 + 1$.
4. Ergebnis: $\dfrac{x^2 + 1}{(x - 1)(x + 1)} = \dfrac{x^2 + 1}{x^2 - 1}$.
:::

:::achtung[Die Klammer um den abgezogenen Zähler vergessen]
**Falsch:** $\dfrac{x(x + 1) - x - 1}{x^2 - 1} = \dfrac{x^2 - 1}{x^2 - 1} = 1$.

**Richtig:** Das Minus vor dem zweiten Bruch gilt für seinen **ganzen** Zähler $x - 1$. Also
$x(x + 1) - (x - 1) = x^2 + x - x + 1 = x^2 + 1$. Probe mit $x = 2$: Der ursprüngliche Term ergibt
$\tfrac21 - \tfrac13 = \tfrac53$, und $\tfrac{4 + 1}{4 - 1} = \tfrac53$ stimmt damit überein. Die falsche Rechnung liefert $1$.
:::

### Multiplizieren und Dividieren

Wie bei Zahlenbrüchen: Zähler mal Zähler, Nenner mal Nenner. Dividieren heißt mit dem Kehrwert multiplizieren. Vor dem
Ausmultiplizieren faktorisiert und kürzt man, das spart viel Arbeit.

:::beispiel[Durchschnittsgeschwindigkeit hin und zurück]
Ein Auto fährt eine Strecke von $s$ Kilometern mit $60\,\tfrac{\text{km}}{\text{h}}$ hin und mit $40\,\tfrac{\text{km}}{\text{h}}$ zurück. Wie groß ist die
Durchschnittsgeschwindigkeit?

1. Zeit ist Weg durch Geschwindigkeit: Hinweg $\tfrac{s}{60}$ Stunden, Rückweg $\tfrac{s}{40}$ Stunden.
2. Gesamtzeit mit Hauptnenner $120$: $\tfrac{s}{60} + \tfrac{s}{40} = \tfrac{2s}{120} + \tfrac{3s}{120} = \tfrac{5s}{120} = \tfrac{s}{24}$ Stunden.
3. Durchschnitt ist Gesamtweg durch Gesamtzeit: $\dfrac{2s}{\tfrac{s}{24}} = 2s\cdot\dfrac{24}{s} = 48\,\tfrac{\text{km}}{\text{h}}$. Das $s$ kürzt sich weg.

Es sind also $48\,\tfrac{\text{km}}{\text{h}}$ und nicht der Mittelwert $50\,\tfrac{\text{km}}{\text{h}}$. Auf dem langsamen Rückweg ist das Auto länger unterwegs, deshalb zählt er stärker.
:::

:::merke[Bruchterme vereinfachen]
1. Alle Zähler und Nenner faktorisieren (Herausheben, binomische Formeln).
2. Definitionsmenge notieren: Nullstellen aller Nenner ausschließen.
3. Zum Addieren: Hauptnenner aus allen verschiedenen Faktoren bilden, jeden Bruch passend erweitern, abgezogene Zähler in Klammern setzen.
4. Zähler zusammenfassen, dann gemeinsame **Faktoren** kürzen.
:::

```reflexion
frage: 'Nach dem Kürzen ist $\tfrac{x^2 - 4}{x^2 + 2x} = \tfrac{x - 2}{x}$. Warum darf man trotzdem nicht $x = -2$ einsetzen, obwohl der gekürzte Term dort einen Wert hätte?'
antwort: |
  Die Gleichung zwischen den beiden Termen gilt nur dort, wo der ursprüngliche Term überhaupt einen Wert hat.
  Für $x = -2$ steht im ursprünglichen Term $\tfrac{0}{0}$, und das ist nicht erklärt. Beim Kürzen haben wir durch $(x + 2)$ geteilt, und das ist nur erlaubt, wenn $x + 2 \neq 0$ ist.
  Der gekürzte Term ist also eine bequemere Schreibweise für denselben Term, aber nur auf derselben Definitionsmenge.
```

### Übungen

```aufgabe
id: za-definitionsmenge
titel: Definitionsmengen bestimmen
niveau: 1
lernziel: 8
kompetenz: verstehen
angabe: |
  Welche Zahlen muss man aus $\R$ ausschließen? Gib sie als Menge an.

  a) $\dfrac{x + 5}{x^2 - 9}$, b) $\dfrac{2}{x(x - 4)}$
teile:
  - typ: menge
    label: 'a) ausgeschlossen'
    loesung: ["-3", "3"]
    fehler:
      - wert: ["3"]
        meldung: 'Auch $(-3)^2 = 9$. Der Nenner wird an zwei Stellen null.'
      - wert: ["-5", "-3", "3"]
        meldung: 'Für $x = -5$ wird nur der **Zähler** null. Das ist erlaubt, der Bruch hat dann den Wert $0$.'
  - typ: menge
    label: 'b) ausgeschlossen'
    loesung: ["0", "4"]
    fehler:
      - wert: ["4"]
        meldung: 'Auch der Faktor $x$ im Nenner kann null werden.'
      - wert: ["0", "-4"]
        meldung: 'Der Faktor $x - 4$ wird null für $x = 4$, nicht für $x = -4$.'
hinweise:
  - 'Nur die Nenner zählen. Setze jeden Nenner gleich null.'
  - 'Bei a) hilft $x^2 - 9 = (x - 3)(x + 3)$. Ein Produkt ist null, wenn ein Faktor null ist.'
loesung: |
  Ansatz: Wir suchen alle Zahlen, für die ein Nenner null wird.
  ---
  a) $x^2 - 9 = (x - 3)(x + 3) = 0$ für $x = 3$ oder $x = -3$. Also $D = \R \setminus \{-3, 3\}$.
  ---
  b) $x(x - 4) = 0$ für $x = 0$ oder $x = 4$. Also $D = \R \setminus \{0, 4\}$.
```

```aufgabe
id: za-bruchterm-kuerzen
titel: Bruchterm kürzen
niveau: 1
lernziel: 8
kompetenz: rechnen
angabe: |
  Vereinfache für $x \notin \{0, -3\}$: $$\frac{x^2 - 9}{x^2 + 3x}$$
teile:
  - typ: term
    label: 'vereinfachter Term'
    loesung: "(x - 3)/x"
    bereich: [0.5, 4]
    fehler:
      - wert: "-3/x"
        meldung: 'Du hast $x^2$ gegen $x^2$ gekürzt. $x^2$ ist aber ein **Summand**, kein Faktor. Faktorisiere zuerst.'
      - wert: "(x + 3)/x"
        meldung: 'Gekürzt wird der gemeinsame Faktor $(x + 3)$. Übrig bleibt im Zähler der andere Faktor $(x - 3)$.'
hinweise:
  - 'Zähler mit der dritten binomischen Formel faktorisieren, im Nenner $x$ herausheben.'
  - 'Kürze nur einen Faktor, der in Zähler **und** Nenner vorkommt.'
loesung: |
  Ansatz: Zuerst faktorisieren, dann gemeinsame Faktoren kürzen.
  ---
  Zähler: $x^2 - 9 = (x - 3)(x + 3)$. Nenner: $x^2 + 3x = x(x + 3)$.
  ---
  Den gemeinsamen Faktor $(x + 3)$ kürzen: $\dfrac{(x - 3)(x + 3)}{x(x + 3)} = \dfrac{x - 3}{x}$.
  ---
  Probe mit $x = 1$: links $\tfrac{1 - 9}{1 + 3} = -2$, rechts $\tfrac{1 - 3}{1} = -2$.
```

```aufgabe
id: za-bruchterm-addieren
titel: Bruchterme zusammenfassen
niveau: 2
lernziel: 8
kompetenz: rechnen
angabe: |
  Fasse zu einem Bruch zusammen und kürze so weit wie möglich ($x \neq \pm 2$):
  $$\frac{1}{x - 2} - \frac{4}{x^2 - 4}$$
teile:
  - typ: term
    label: 'Ergebnis'
    loesung: "1/(x + 2)"
    bereich: [2.5, 6]
    fehler:
      - wert: "-3/(x^2 - 4)"
        meldung: 'Beim Erweitern auf den Hauptnenner muss auch der **Zähler** des ersten Bruchs mit $(x + 2)$ multipliziert werden.'
      - wert: "(x + 6)/(x^2 - 4)"
        meldung: 'Vorzeichenfehler: Der zweite Bruch wird abgezogen, im Zähler steht also $x + 2 - 4$, nicht $x + 2 + 4$.'
hinweise:
  - '$x^2 - 4 = (x - 2)(x + 2)$ ist schon der Hauptnenner.'
  - 'Nach dem Zusammenfassen lässt sich noch ein Faktor kürzen.'
loesung: |
  Ansatz: Den Hauptnenner aus den faktorisierten Nennern bilden.
  ---
  Hauptnenner $(x - 2)(x + 2)$. Den ersten Bruch mit $(x + 2)$ erweitern:
  $$\frac{x + 2}{(x-2)(x+2)} - \frac{4}{(x-2)(x+2)} = \frac{x + 2 - 4}{(x-2)(x+2)} = \frac{x - 2}{(x-2)(x+2)}$$
  ---
  Faktor $(x - 2)$ kürzen: $\dfrac{1}{x + 2}$.
  ---
  Probe mit $x = 3$: $\tfrac11 - \tfrac45 = \tfrac15$ und $\tfrac{1}{3 + 2} = \tfrac15$.
```

```aufgabe
id: za-bruchterm-mal-geteilt
titel: Bruchterme dividieren
niveau: 2
lernziel: 8
kompetenz: rechnen
angabe: |
  Vereinfache für $x \neq 0$ und $x \neq -1$:
  $$\frac{x^2 - 1}{2x} : \frac{x + 1}{4x^2}$$
  Gib das Ergebnis ausmultipliziert ein, also ohne Klammern.
teile:
  - typ: term
    loesung: "2*x*(x - 1)"
    bereich: [1.5, 4]
    fehler:
      - wert: "(x^2 - 1)*(x + 1)/(8x^3)"
        meldung: 'Du hast multipliziert, ohne den zweiten Bruch umzudrehen. Dividieren heißt mit dem **Kehrwert** multiplizieren.'
      - wert: "2*x*(x + 1)"
        meldung: 'Beim Kürzen ist der falsche Faktor verschwunden. Es ist $x^2 - 1 = (x - 1)(x + 1)$, und gekürzt wird $(x + 1)$.'
hinweise:
  - 'Ersetze $: \tfrac{x + 1}{4x^2}$ durch $\cdot\tfrac{4x^2}{x + 1}$.'
  - 'Faktorisiere $x^2 - 1$ und kürze dann $(x + 1)$ sowie $2x$.'
loesung: |
  Ansatz: Division in Multiplikation mit dem Kehrwert verwandeln, dann faktorisieren und kürzen.
  ---
  $$\frac{x^2 - 1}{2x}\cdot\frac{4x^2}{x + 1} = \frac{(x - 1)(x + 1)\cdot 4x^2}{2x\cdot(x + 1)}$$
  ---
  Kürzen: $(x + 1)$ fällt weg, und $\tfrac{4x^2}{2x} = 2x$. Es bleibt $2x(x - 1) = 2x^2 - 2x$.
  ---
  Probe mit $x = 2$: links $\tfrac34 : \tfrac{3}{16} = \tfrac34\cdot\tfrac{16}{3} = 4$, rechts $2\cdot 2\cdot 1 = 4$.
```

```aufgabe
id: za-durchschnittsgeschwindigkeit
titel: Mit dem Rad hin und zurück
niveau: 2
lernziel: 8
kompetenz: modellieren
angabe: |
  Eine Radfahrerin fährt eine Strecke von $s$ Kilometern mit $20\,\tfrac{\text{km}}{\text{h}}$ bergauf und auf demselben Weg mit $30\,\tfrac{\text{km}}{\text{h}}$ zurück.
  Wie groß ist ihre Durchschnittsgeschwindigkeit für Hin- und Rückweg zusammen?
teile:
  - typ: zahl
    einheit: km/h
    loesung: "2/(1/20 + 1/30)"
    fehler:
      - wert: "25"
        meldung: 'Das ist der Mittelwert der Geschwindigkeiten. Bergauf ist sie aber länger unterwegs, deshalb zählt der langsame Teil stärker.'
hinweise:
  - 'Durchschnittsgeschwindigkeit ist Gesamtweg durch Gesamtzeit. Die Zeit für einen Weg ist $\tfrac{s}{v}$.'
  - 'Addiere $\tfrac{s}{20} + \tfrac{s}{30}$ mit dem Hauptnenner $60$. Am Ende kürzt sich $s$.'
gefuehrt:
  - text: 'Wie viele Stunden braucht sie bergauf, als Term in $s$?'
    teil:
      typ: term
      variable: s
      loesung: "s/20"
      fehler:
        - wert: "20s"
          meldung: 'Zeit ist Weg **durch** Geschwindigkeit: $t = \tfrac sv$.'
    erklaerung: '$t_1 = \tfrac{s}{20}$ Stunden.'
  - text: 'Wie lange ist sie insgesamt unterwegs? Fasse $\tfrac{s}{20} + \tfrac{s}{30}$ zusammen.'
    teil:
      typ: term
      variable: s
      loesung: "s/12"
    erklaerung: 'Hauptnenner $60$: $\tfrac{3s}{60} + \tfrac{2s}{60} = \tfrac{5s}{60} = \tfrac{s}{12}$.'
  - text: 'Teile den Gesamtweg $2s$ durch die Gesamtzeit. Was kommt heraus?'
    teil:
      typ: zahl
      loesung: "24"
    erklaerung: '$\tfrac{2s}{s/12} = 2s\cdot\tfrac{12}{s} = 24$. Das $s$ kürzt sich, also $24\,\tfrac{\text{km}}{\text{h}}$.'
loesung: |
  Ansatz: Durchschnittsgeschwindigkeit $=$ Gesamtweg durch Gesamtzeit. Die Zeiten stellen wir als Bruchterme in $s$ dar.
  ---
  Zeiten: $\tfrac{s}{20}$ und $\tfrac{s}{30}$ Stunden. Zusammen $\tfrac{3s + 2s}{60} = \tfrac{s}{12}$ Stunden.
  ---
  Durchschnitt: $\dfrac{2s}{s/12} = 2s\cdot\dfrac{12}{s} = 24\,\tfrac{\text{km}}{\text{h}}$.
  ---
  Kontrolle mit $s = 60\,\text{km}$: bergauf $3\,\text{h}$, zurück $2\,\text{h}$, zusammen $120\,\text{km}$ in $5\,\text{h}$, also $24\,\tfrac{\text{km}}{\text{h}}$.
```

```aufgabe
id: za-bruchterm-fehler
titel: Wo steckt der Fehler?
niveau: 3
lernziel: 8
kompetenz: begruenden
angabe: |
  Ein Mitschüler rechnet für $x \neq -1$:
  $$\frac{x}{x + 1} - \frac{x - 1}{x + 1} = \frac{x - x - 1}{x + 1} = \frac{-1}{x + 1}.$$
  a) Was ist falsch?

  b) Gib das richtige Ergebnis an.
teile:
  - typ: auswahl
    label: 'a)'
    optionen:
      - 'Das Minus vor dem zweiten Bruch wurde nur auf das $x$ angewendet, nicht auf die $-1$.'
      - 'Man darf Brüche mit gleichem Nenner nicht so zusammenfassen.'
      - 'Der Hauptnenner müsste $(x + 1)^2$ sein.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Bei gleichen Nennern fasst man tatsächlich die Zähler zusammen. Der Fehler liegt im Zähler.'
      - wert: 2
        meldung: 'Beide Nenner sind gleich. Das Produkt $(x + 1)^2$ wäre unnötig groß.'
  - typ: term
    label: 'b)'
    loesung: "1/(x + 1)"
    bereich: [0.5, 4]
    fehler:
      - wert: "-1/(x + 1)"
        meldung: 'Das ist das Ergebnis der fehlerhaften Rechnung. Setze den abgezogenen Zähler in eine Klammer.'
hinweise:
  - 'Schreibe den Zähler mit Klammer: $x - (x - 1)$.'
  - 'Ein Minus vor der Klammer dreht jedes Vorzeichen in der Klammer um.'
loesung: |
  Ansatz: Bei gleichen Nennern fasst man die Zähler zusammen. Der abgezogene Zähler kommt dabei in eine Klammer.
  ---
  a) Richtig ist $x - (x - 1)$. Der Mitschüler hat $x - x - 1$ geschrieben und das Vorzeichen der $1$ nicht umgedreht.
  ---
  b) $x - (x - 1) = x - x + 1 = 1$. Also $\dfrac{1}{x + 1}$.
  ---
  Probe mit $x = 1$: $\tfrac12 - \tfrac02 = \tfrac12$ und $\tfrac{1}{1 + 1} = \tfrac12$. Die falsche Rechnung hätte $-\tfrac12$ ergeben.
```

```aufgabe
id: za-doppelbruch-term
titel: Ein Doppelbruch mit Variablen
niveau: 3
lernziel: 8
kompetenz: rechnen
angabe: |
  Vereinfache für $x \notin \{-1, 0, 1\}$:
  $$\frac{1 - \tfrac1x}{1 - \tfrac{1}{x^2}}$$
teile:
  - typ: term
    loesung: "x/(x + 1)"
    bereich: [1.5, 4]
    fehler:
      - wert: "x"
        meldung: 'Beim Dividieren hast du vermutlich $(x - 1)$ gekürzt, aber $(x + 1)$ vergessen. Faktorisiere $x^2 - 1$ vollständig.'
      - wert: "(x + 1)/x"
        meldung: 'Das ist der Kehrwert des Ergebnisses. Der Zählerbruch wird **durch** den Nennerbruch dividiert.'
hinweise:
  - 'Mach Zähler und Nenner zuerst zu je einem Bruch: $1 - \tfrac1x = \tfrac{x - 1}{x}$ und $1 - \tfrac{1}{x^2} = \tfrac{x^2 - 1}{x^2}$.'
  - 'Dann mit dem Kehrwert multiplizieren und $x^2 - 1 = (x - 1)(x + 1)$ verwenden.'
loesung: |
  Ansatz: Wie beim Zahlen-Doppelbruch: Zähler und Nenner getrennt zusammenfassen, dann dividieren.
  ---
  Zähler: $1 - \tfrac1x = \tfrac{x - 1}{x}$. Nenner: $1 - \tfrac{1}{x^2} = \tfrac{x^2 - 1}{x^2} = \tfrac{(x - 1)(x + 1)}{x^2}$.
  ---
  Dividieren: $\dfrac{x - 1}{x}\cdot\dfrac{x^2}{(x - 1)(x + 1)}$. Kürzen von $(x - 1)$ und von einem $x$ ergibt $\dfrac{x}{x + 1}$.
  ---
  Probe mit $x = 2$: links $\tfrac{1/2}{3/4} = \tfrac23$, rechts $\tfrac{2}{3}$.
```

## Ungleichungen und ihre Rechenregeln

```aufgabe
id: za-check-negativ-dezimal
titel: Zwei negative Dezimalzahlen vergleichen
niveau: 1
art: check
angabe: |
  Welche Zahl ist kleiner, $-0{,}5$ oder $-0{,}25$?
  Vorwissen: Zahlengerade aus [1.1 Grundrechenarten](/lernen/mathe3/zahlen/grundrechenarten-vorzeichen-klammern-und-rechenreihenfolge).
teile:
  - typ: auswahl
    optionen: ['$-0{,}5$', '$-0{,}25$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$0{,}25$ ist zwar kleiner als $0{,}5$, aber bei negativen Zahlen kehrt sich das um. $-0{,}5$ liegt weiter links.'
hinweise:
  - 'Zeichne beide Zahlen auf der Zahlengeraden ein. Links ist kleiner.'
loesung: |
  $-0{,}5$ liegt eine halbe Einheit links von $0$, $-0{,}25$ nur ein Viertel einer Einheit.
  ---
  $-0{,}5$ liegt weiter links und ist deshalb kleiner: $-0{,}5 < -0{,}25$.
```

Gleichungen sagen „ist gleich“. **Ungleichungen** sagen „ist kleiner“ oder „ist größer“. Sie beschreiben Grenzen: Ein
Tarif ist ab einer bestimmten Nutzung günstiger, ein Messwert darf eine Toleranz nicht überschreiten, ein Wert soll
eine Obergrenze nicht überschreiten. In dieser Lektion lernst du die Zeichen und die Rechenregeln. Mit ihnen kannst du einfache
Ungleichungen umformen. Schwierigere Ungleichungen löst du in [Kapitel 2](/lernen/mathe3/gleichungen).

### Die Zeichen

Die reellen Zahlen sind der Größe nach geordnet. $a < b$ bedeutet: $a$ liegt auf der Zahlengeraden **links** von $b$.

- $a < b$ liest man „$a$ ist kleiner als $b$“, und $a > b$ liest man „$a$ ist größer als $b$“.
- $a \le b$ liest man „$a$ ist kleiner oder gleich $b$“, also „$a$ ist höchstens $b$“.
- $a \ge b$ liest man „$a$ ist größer oder gleich $b$“, also „$a$ ist mindestens $b$“.

**Beispiele:** $-5 < -2$ ist wahr, denn $-5$ liegt links von $-2$. Auch $3 \le 3$ ist wahr, denn „oder gleich“ ist erfüllt.
**Nichtbeispiel:** $3 < 3$ ist falsch, denn eine Zahl ist nicht echt kleiner als sie selbst. Eine **Doppelungleichung**
wie $2 < x \le 5$ fasst zwei Bedingungen zusammen: $x$ ist größer als $2$ **und** höchstens $5$.

### Die Rechenregeln

Mit Ungleichungen rechnet man fast wie mit Gleichungen. Es gibt aber eine wichtige Ausnahme.

:::satz[Rechenregeln für Ungleichungen]
Für reelle Zahlen $a$, $b$, $c$ mit $a < b$ gilt:

1. **Addieren und Subtrahieren:** $a + c < b + c$ und $a - c < b - c$. Die Richtung bleibt.
2. **Multiplizieren mit einer positiven Zahl** $c > 0$: $a\cdot c < b\cdot c$. Die Richtung bleibt. Für Division durch $c > 0$ gilt dasselbe.
3. **Multiplizieren mit einer negativen Zahl** $c < 0$: $a\cdot c > b\cdot c$. Das Zeichen **dreht sich um**. Für Division durch $c < 0$ gilt dasselbe.
4. **Kehrwert:** Sind $a$ und $b$ beide positiv, dann ist $\tfrac1a > \tfrac1b$. Das Zeichen dreht sich um.
:::

Warum dreht sich das Zeichen bei negativen Zahlen um? Multiplizieren mit $-1$ spiegelt jede Zahl an der $0$. Was vorher
links lag, liegt danach rechts. Aus $2 < 5$ wird $-2 > -5$. Das Bild zeigt es.

```plot
x: [-6, 6]
y: [-1.5, 1.5]
hoehe: 160
strecken:
  - { von: [-6, 0], nach: [6, 0] }
  - { von: [2, 0.3], nach: [-2, 0.3], gestrichelt: true, farbe: 0 }
  - { von: [5, -0.3], nach: [-5, -0.3], gestrichelt: true, farbe: 1 }
punkte:
  - { x: 2, y: 0, label: "2", farbe: 0 }
  - { x: 5, y: 0, label: "5", farbe: 1 }
  - { x: -2, y: 0, label: "−2", farbe: 0 }
  - { x: -5, y: 0, label: "−5", farbe: 1 }
  - { x: 0, y: 0, label: "0", farbe: 2 }
beschriftung: Multiplizieren mit −1 spiegelt an der 0. Die 2 liegt links von der 5, aber −2 liegt rechts von −5. Deshalb wird aus 2 < 5 nach dem Spiegeln −2 > −5.
```

Auch die Kehrwert-Regel lässt sich mit Zahlen prüfen: $2 < 4$, aber $\tfrac12 > \tfrac14$. Ein halber Kuchen ist mehr als ein
viertel Kuchen.

:::beispiel[Eine Ungleichung umformen]
Für welche $x$ gilt $3 - 2x > 7$?

1. Auf beiden Seiten $3$ abziehen (Regel 1, Richtung bleibt): $-2x > 4$.
2. Durch $-2$ teilen (Regel 3, negative Zahl, Zeichen dreht sich um): $x < -2$.
3. Probe mit einer Zahl, die die Lösung erfüllt, etwa $x = -3$: $3 - 2\cdot(-3) = 9 > 7$. Und mit einer, die sie nicht erfüllt, etwa $x = 0$: $3 > 7$ ist falsch.

Die Lösung sind also alle Zahlen kleiner als $-2$. Die Zahl $-2$, an der die Lösungsmenge beginnt oder endet, nennen wir **Randzahl**. Wie man das als Intervall schreibt, zeigt [1.15 Betrag und Intervalle](/lernen/mathe3/zahlen/betrag-und-intervalle).
:::

:::achtung[Das Umdrehen vergessen]
**Falsch:** $-3x < 12$, also $x < -4$.

**Richtig:** Beim Teilen durch $-3$ dreht sich das Zeichen um: $x > -4$. Probe mit $x = 0$: $-3\cdot 0 = 0 < 12$ ist wahr,
und $0$ ist tatsächlich größer als $-4$. Die falsche Lösung $x < -4$ hätte die $0$ ausgeschlossen.
:::

:::beispiel[Welcher Tarif ist günstiger?]
Tarif A kostet $10$ Euro Grundgebühr pro Monat und $0{,}05$ Euro pro Gesprächsminute. Tarif B hat keine Grundgebühr und kostet
$0{,}15$ Euro pro Minute. Ab wie vielen Minuten $t$ pro Monat ist Tarif A günstiger?

1. Ansatz: A ist günstiger, wenn $10 + 0{,}05t < 0{,}15t$ gilt.
2. Auf beiden Seiten $0{,}05t$ abziehen: $10 < 0{,}1t$.
3. Durch $0{,}1$ teilen, eine positive Zahl, also bleibt die Richtung: $100 < t$.

Antwort: Bei mehr als $100$ Minuten pro Monat ist Tarif A günstiger. Kontrolle bei $t = 200$: A kostet $20$ Euro, B $30$ Euro.
:::

:::achtung[Mit einer Variablen multiplizieren]
**Falsch:** $\tfrac1x < 2$, also $1 < 2x$ (beide Seiten mal $x$).

**Richtig:** Man weiß nicht, ob $x$ positiv oder negativ ist, also auch nicht, ob sich das Zeichen umdreht. Test mit $x = -1$:
$\tfrac{1}{-1} = -1 < 2$ ist wahr, aber $1 < 2\cdot(-1) = -2$ ist falsch. Man muss zwei Fälle unterscheiden, $x > 0$ und
$x < 0$. Wie das geht, zeigt [Kapitel 2](/lernen/mathe3/gleichungen).
:::

:::merke[Ungleichungen umformen]
1. Auf beiden Seiten dieselbe Zahl addieren oder abziehen: Das Zeichen bleibt.
2. Mit einer **positiven** Zahl multiplizieren oder durch sie teilen: Das Zeichen bleibt.
3. Mit einer **negativen** Zahl multiplizieren oder durch sie teilen: Das Zeichen **dreht sich um**.
4. Nie mit einem Term multiplizieren, dessen Vorzeichen unbekannt ist, ohne Fälle zu unterscheiden.
5. Probe mit einer Zahl, die die Lösung erfüllt, und mit einer, die sie nicht erfüllt.
:::

```reflexion
frage: 'Erkläre ohne Formel, warum aus $2 < 5$ nach Multiplizieren mit $-1$ die Ungleichung $-2 > -5$ wird. Denk an Schulden.'
antwort: |
  $2$ Euro sind weniger als $5$ Euro. Dreht man das Vorzeichen um, werden daraus $2$ Euro Schulden und $5$ Euro Schulden.
  $5$ Euro Schulden sind schlimmer, also ist der Kontostand $-5$ kleiner als $-2$.
  Auf der Zahlengeraden heißt das: Das Spiegeln an der $0$ vertauscht links und rechts. Deshalb dreht sich das Zeichen um.
```

### Übungen

```aufgabe
id: za-ungleichung-wahr
titel: Welche Ungleichungen stimmen?
niveau: 1
lernziel: 9
kompetenz: verstehen
angabe: |
  Welche der folgenden Ungleichungen sind wahr?
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$-7 < -3$'
      - '$0{,}5 \le \tfrac12$'
      - '$-2 > 1$'
      - '$3 \ge -3$'
      - '$-\tfrac13 < -\tfrac14$'
    richtig: [0, 1, 3, 4]
    fehler:
      - wert: [0, 3, 4]
        meldung: '$0{,}5$ und $\tfrac12$ sind gleich. Das Zeichen $\le$ erlaubt Gleichheit, also ist die Aussage wahr.'
      - wert: [0, 1, 3]
        meldung: 'Vergleiche $-\tfrac13 \approx -0{,}33$ und $-\tfrac14 = -0{,}25$. Welche Zahl liegt weiter links?'
hinweise:
  - 'Kleiner heißt: weiter links auf der Zahlengeraden.'
  - 'Bei $\le$ und $\ge$ ist auch Gleichheit erlaubt.'
loesung: |
  Ansatz: Wir ordnen jede Zahl auf der Zahlengeraden ein und beachten, ob Gleichheit erlaubt ist.
  ---
  $-7$ liegt links von $-3$: wahr. $0{,}5 = \tfrac12$, und $\le$ erlaubt Gleichheit: wahr. $-2 > 1$: falsch.
  ---
  $3 \ge -3$: wahr. $-\tfrac13 \approx -0{,}333$ liegt links von $-0{,}25$: wahr.
```

```aufgabe
id: za-ungleichung-linear
titel: Eine lineare Ungleichung
niveau: 1
lernziel: 9
kompetenz: rechnen
angabe: |
  Löse $5x - 3 \le 2x + 9$. Gib die Randzahl an und wähle die richtige Lösung.
teile:
  - typ: zahl
    label: 'Randzahl'
    loesung: "12/3"
    fehler:
      - wert: "2"
        meldung: 'Prüfe das Zusammenfassen: $+3$ auf beiden Seiten macht aus $9$ die Zahl $12$, nicht $6$.'
  - typ: auswahl
    label: 'Lösung'
    optionen: ['$x \le 4$', '$x \ge 4$', '$x < 4$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Du hast durch die **positive** Zahl $3$ geteilt. Dabei dreht sich das Zeichen nicht um.'
      - wert: 2
        meldung: 'In der Angabe steht $\le$. Die Randzahl selbst gehört dazu.'
hinweise:
  - 'Bring alle $x$ auf die linke Seite und alle Zahlen auf die rechte.'
  - 'Teilst du am Ende durch eine positive oder durch eine negative Zahl?'
loesung: |
  Ansatz: Umformen wie bei einer Gleichung. Nur beim Teilen durch eine negative Zahl müsste sich das Zeichen umdrehen.
  ---
  $2x$ abziehen: $3x - 3 \le 9$. $3$ addieren: $3x \le 12$.
  ---
  Durch die positive Zahl $3$ teilen, das Zeichen bleibt: $x \le 4$.
  ---
  Probe mit $x = 4$: $17 \le 17$ stimmt. Mit $x = 5$: $22 \le 19$ ist falsch, wie erwartet.
```

```aufgabe
id: za-ungleichung-negativ
titel: Durch eine negative Zahl teilen
niveau: 2
lernziel: 9
kompetenz: rechnen
angabe: |
  Löse $4 - 3x < 10$.
teile:
  - typ: auswahl
    optionen: ['$x > -2$', '$x < -2$', '$x > 2$', '$x < 2$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Beim Teilen durch $-3$ dreht sich das Zeichen um. Teste $x = 0$: $4 < 10$ ist wahr, also muss $0$ zur Lösung gehören.'
      - wert: 2
        meldung: 'Das Vorzeichen der Randzahl stimmt nicht: $6 : (-3) = -2$.'
      - wert: 3
        meldung: 'Sowohl das Vorzeichen der Randzahl als auch die Richtung stimmen nicht. Rechne Schritt für Schritt.'
hinweise:
  - 'Ziehe zuerst auf beiden Seiten $4$ ab.'
  - 'Danach teilst du durch $-3$. Was passiert dabei mit dem Zeichen?'
gefuehrt:
  - text: 'Ziehe auf beiden Seiten $4$ ab. Welche Zahl steht dann rechts in $-3x < \ \ldots$?'
    teil: { typ: zahl, loesung: "10 - 4" }
    erklaerung: '$-3x < 6$.'
  - text: 'Teile durch $-3$. Welche Randzahl entsteht?'
    teil:
      typ: zahl
      loesung: "6/(-3)"
      fehler:
        - wert: "2"
          meldung: 'Verschiedene Vorzeichen: $6 : (-3)$ ist negativ.'
    erklaerung: '$6 : (-3) = -2$.'
  - text: 'Bleibt das Zeichen $<$, oder wird es zu $>$? Überlege, durch welche Art von Zahl du geteilt hast.'
    erklaerung: 'Durch eine negative Zahl geteilt, also dreht sich das Zeichen um: $x > -2$.'
loesung: |
  Ansatz: Umformen nach den Rechenregeln. Beim Teilen durch eine negative Zahl dreht sich das Zeichen um.
  ---
  $4$ abziehen: $-3x < 6$.
  ---
  Durch $-3$ teilen, Zeichen umdrehen: $x > -2$.
  ---
  Probe: $x = 0$ erfüllt $x > -2$, und $4 - 0 = 4 < 10$ stimmt. $x = -3$ erfüllt es nicht, und tatsächlich ist $4 + 9 = 13 < 10$ falsch.
```

```aufgabe
id: za-tarif-vergleich
titel: Welches Taxi ist günstiger?
niveau: 2
lernziel: 9
kompetenz: modellieren
angabe: |
  Taxi A verlangt $4$ Euro Grundgebühr und $1{,}50$ Euro pro Kilometer. Taxi B verlangt keine Grundgebühr, aber $2{,}50$ Euro pro Kilometer.
  Für welche Fahrstrecken $s$ (in km) ist Taxi A günstiger?
teile:
  - typ: zahl
    label: 'Randzahl'
    einheit: km
    loesung: "4/(2.5 - 1.5)"
    fehler:
      - wert: "1.6"
        meldung: 'Du hast $4 : 2{,}5$ gerechnet. Ziehe zuerst die $1{,}5s$ auf beiden Seiten ab.'
  - typ: auswahl
    label: 'Taxi A ist günstiger, wenn die Strecke'
    optionen: ['länger als die Randzahl ist', 'kürzer als die Randzahl ist']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Bei kurzen Fahrten fällt die Grundgebühr von A stark ins Gewicht. Teste $s = 1$: A kostet $5{,}50$ Euro, B nur $2{,}50$ Euro.'
hinweise:
  - 'Stelle die Kosten beider Taxis als Term in $s$ auf und verlange „Kosten A < Kosten B“.'
  - 'Bring alle $s$ auf eine Seite. Teilst du am Ende durch eine positive Zahl?'
loesung: |
  Ansatz: Kosten A $= 4 + 1{,}5s$, Kosten B $= 2{,}5s$. A ist günstiger, wenn $4 + 1{,}5s < 2{,}5s$.
  ---
  $1{,}5s$ abziehen: $4 < 2{,}5s - 1{,}5s = 1\cdot s$, also $4 < s$. Die Richtung bleibt, weil wir nur abgezogen haben.
  ---
  Antwort: Für Strecken über $4\,\text{km}$ ist Taxi A günstiger. Bei genau $4\,\text{km}$ kosten beide $10$ Euro.
  ---
  Kontrolle mit $s = 10$: A kostet $19$ Euro, B $25$ Euro.
```

```aufgabe
id: za-ungleichung-fehler
titel: Zwei falsche Schlüsse
niveau: 2
lernziel: 9
kompetenz: begruenden
angabe: |
  Welche der beiden Folgerungen sind falsch?

  (1) „Aus $-2x \ge 8$ folgt $x \ge -4$.“

  (2) „Aus $2 < 5$ folgt $\tfrac12 < \tfrac15$.“
teile:
  - typ: auswahl
    mehrfach: true
    optionen: ['(1) ist falsch.', '(2) ist falsch.']
    richtig: [0, 1]
    fehler:
      - wert: [1]
        meldung: 'Prüfe (1) mit $x = 0$: Es ist $0 \ge -4$, aber $-2\cdot 0 = 0 \ge 8$ ist falsch.'
      - wert: [0]
        meldung: 'Prüfe (2) mit Kuchen: Ist ein halber Kuchen weniger als ein fünftel Kuchen?'
hinweise:
  - 'Teste jede Folgerung mit einer Zahl.'
  - 'Bei (1) wird durch eine negative Zahl geteilt. Bei (2) wird der Kehrwert genommen. Was passiert dabei jeweils mit dem Zeichen?'
loesung: |
  Ansatz: Wir prüfen, ob die verwendete Regel die Richtung erhält oder umdreht.
  ---
  (1) Teilen durch $-2$ dreht das Zeichen um. Richtig ist $x \le -4$. Die Folgerung ist falsch.
  ---
  (2) Beim Kehrwert positiver Zahlen dreht sich das Zeichen um: $\tfrac12 > \tfrac15$, denn $0{,}5 > 0{,}2$. Auch diese Folgerung ist falsch.
```

```aufgabe
id: za-doppelungleichung
titel: Eine Doppelungleichung
niveau: 2
lernziel: 9
kompetenz: rechnen
angabe: |
  Löse $-4 \le 2x + 2 < 8$ und gib alle **ganzen** Zahlen an, die die Ungleichung erfüllen.
teile:
  - typ: menge
    loesung: ["-3", "-2", "-1", "0", "1", "2"]
    fehler:
      - wert: ["-3", "-2", "-1", "0", "1", "2", "3"]
        meldung: 'Rechts steht $<$. Prüfe $x = 3$: $2\cdot 3 + 2 = 8 < 8$ ist falsch.'
      - wert: ["-2", "-1", "0", "1", "2"]
        meldung: 'Links steht $\le$. Prüfe $x = -3$: $-4 \le -4$ ist wahr.'
hinweise:
  - 'Forme alle drei Teile gleichzeitig um: zuerst überall $2$ abziehen, dann überall durch $2$ teilen.'
  - 'Achte an beiden Rändern darauf, ob $<$ oder $\le$ steht.'
loesung: |
  Ansatz: Eine Doppelungleichung formt man in allen drei Teilen gleichzeitig um.
  ---
  $2$ abziehen: $-6 \le 2x < 6$. Durch die positive Zahl $2$ teilen: $-3 \le x < 3$.
  ---
  Ganze Zahlen: $-3$ gehört dazu (wegen $\le$), $3$ nicht (wegen $<$). Also $-3, -2, -1, 0, 1, 2$.
```

```aufgabe
id: za-ungleichung-kehrwert
titel: Wann ist der Kehrwert klein?
niveau: 3
lernziel: 9
kompetenz: verstehen
angabe: |
  Für welche reellen Zahlen $x \neq 0$ gilt $\dfrac1x < \dfrac12$?
teile:
  - typ: auswahl
    optionen:
      - '$x > 2$'
      - '$x < 0$ oder $x > 2$'
      - '$0 < x < 2$'
      - '$x < 2$'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Teste eine negative Zahl, etwa $x = -1$: $\tfrac{1}{-1} = -1 < \tfrac12$ ist wahr. Negative $x$ gehören also auch dazu.'
      - wert: 2
        meldung: 'Teste $x = 1$: $\tfrac11 = 1 < \tfrac12$ ist falsch.'
      - wert: 3
        meldung: 'Du hast auf beiden Seiten den Kehrwert genommen, ohne das Zeichen umzudrehen. Teste $x = 1$: $1 < \tfrac12$ ist falsch.'
hinweise:
  - 'Unterscheide zwei Fälle: $x > 0$ und $x < 0$.'
  - 'Für $x < 0$ ist $\tfrac1x$ negativ, also sicher kleiner als $\tfrac12$. Für $x > 0$ hilft die Kehrwert-Regel.'
loesung: |
  Ansatz: Das Vorzeichen von $x$ ist unbekannt. Darum unterscheiden wir zwei Fälle.
  ---
  Fall $x < 0$: Dann ist $\tfrac1x$ negativ und damit kleiner als $\tfrac12$. Alle negativen $x$ erfüllen die Ungleichung.
  ---
  Fall $x > 0$: Beide Seiten sind positiv. Nach der Kehrwert-Regel dreht sich das Zeichen um, wenn man auf beiden Seiten den Kehrwert nimmt: $x > 2$.
  ---
  Zusammen: $x < 0$ oder $x > 2$. Probe: $x = 4$ ergibt $\tfrac14 < \tfrac12$, $x = 1$ ergibt $1 < \tfrac12$, das ist falsch.
```

## Betrag und Intervalle

```aufgabe
id: za-check-abstand
titel: Ein Abstand auf der Zahlengeraden
niveau: 1
art: check
angabe: |
  Wie weit liegen die Zahlen $-2$ und $5$ auf der Zahlengeraden auseinander?
  Vorwissen: Zahlengerade aus [1.1 Grundrechenarten](/lernen/mathe3/zahlen/grundrechenarten-vorzeichen-klammern-und-rechenreihenfolge).
teile:
  - typ: zahl
    loesung: "5 - (-2)"
    fehler:
      - wert: "3"
        meldung: 'Von $-2$ bis $0$ sind es schon $2$ Schritte, von $0$ bis $5$ noch einmal $5$. Ein Abstand wird nicht kleiner, nur weil eine der Zahlen negativ ist.'
      - wert: "-7"
        meldung: 'Ein Abstand ist nie negativ. Die Richtung spielt keine Rolle.'
hinweise:
  - 'Zähle die Schritte von $-2$ bis $0$ und von $0$ bis $5$.'
loesung: |
  Von $-2$ bis $0$ sind es $2$ Einheiten, von $0$ bis $5$ sind es $5$ Einheiten.
  ---
  Zusammen $7$. Das ist $5 - (-2) = 7$. Abstände misst der Betrag, das Thema dieser Lektion.
```

Der **Betrag** misst, wie weit eine Zahl von $0$ entfernt ist, ohne auf die Richtung zu achten. **Intervalle** sind
lückenlose Abschnitte der Zahlengeraden, zum Beispiel „alle Zahlen zwischen $2$ und $5$“. Beide braucht man ständig: für
Toleranzen und Messunsicherheiten, für Definitionsmengen, für Lösungsmengen von Ungleichungen und für die genaue
Definition des Grenzwerts in [Kapitel 11](/lernen/mathe3/grenzwerte-folgen).

### Der Betrag

:::definition[Betrag]
Der **Betrag** (Absolutbetrag) einer reellen Zahl $a$ ist
$$|a| = \begin{cases} a & \text{für } a \ge 0,\\ -a & \text{für } a < 0.\end{cases}$$
Geometrisch ist $|a|$ der Abstand von $a$ zu $0$ auf der Zahlengeraden. Allgemein ist $|a - b|$ der **Abstand** zwischen $a$ und $b$.
:::

Die geschweifte Klammer bedeutet „je nach Fall“: Ist $a$ positiv oder null, bleibt es, wie es ist. Ist $a$ negativ, nimmt man
$-a$. Das Minus in der zweiten Zeile irritiert oft. Für negatives $a$ ist $-a$ aber positiv: $|-5| = -(-5) = 5$.

**Beispiele:** $|7| = 7$, $|-7| = 7$, $|0| = 0$. Der Abstand von $3$ und $8$ ist $|3 - 8| = |-5| = 5$, und genauso
$|8 - 3| = 5$. **Nichtbeispiel:** Der Betrag „macht nicht einfach das Minus weg“, wenn Variablen im Spiel sind. $|x - 3|$
ist **nicht** immer $x + 3$ oder $x - 3$. Es ist $x - 3$ für $x \ge 3$ und $3 - x$ für $x < 3$. Für $x = 1$ ist
$|1 - 3| = 2 = 3 - 1$.

:::beispiel[Beträge Schritt für Schritt]
Berechne $|4 - 11| - |-3|\cdot|2|$.

1. Innen zuerst: $4 - 11 = -7$, also $|4 - 11| = |-7| = 7$.
2. $|-3| = 3$ und $|2| = 2$, also $|-3|\cdot|2| = 6$.
3. Zusammen: $7 - 6 = 1$.

Ein Betragsstrich wirkt wie eine Klammer: Was zwischen den Strichen steht, wird zuerst ausgerechnet.
:::

:::satz[Eigenschaften des Betrags]
Für alle reellen Zahlen $a$ und $b$ gilt:

1. $|a| \ge 0$, und $|a| = 0$ nur für $a = 0$.
2. $|a\cdot b| = |a|\cdot|b|$ und $\left|\tfrac ab\right| = \tfrac{|a|}{|b|}$ für $b \neq 0$.
3. $\sqrt{a^2} = |a|$ und $|a|^2 = a^2$.
4. **Dreiecksungleichung:** $|a + b| \le |a| + |b|$.
:::

:::beweis[Dreiecksungleichung]
Für jede Zahl gilt $-|a| \le a \le |a|$, denn $a$ ist entweder $|a|$ (für $a \ge 0$) oder $-|a|$ (für $a < 0$). Ebenso gilt $-|b| \le b \le |b|$. Addiert man die beiden Ungleichungsketten Teil für
Teil, erhält man $-(|a| + |b|) \le a + b \le |a| + |b|$. Die Zahl $a + b$ liegt also zwischen $-c$ und $c$ mit
$c = |a| + |b|$. Eine solche Zahl ist höchstens $c$ von $0$ entfernt: $|a + b| \le |a| + |b|$.
:::

Gleichheit gilt genau dann, wenn $a$ und $b$ nicht entgegengesetzte Vorzeichen haben. Bei $a = 3$ und $b = -5$ ist dagegen
$|a + b| = 2$, aber $|a| + |b| = 8$. Der Name kommt aus der Geometrie: Der Umweg über eine dritte Ecke eines Dreiecks ist
nie kürzer als der direkte Weg.

:::achtung[Den Betrag einer Summe aufgeteilt]
**Falsch:** $|3 + (-5)| = |3| + |-5| = 8$.

**Richtig:** Zuerst innen rechnen: $|3 + (-5)| = |-2| = 2$. Den Betrag darf man auf Produkte verteilen, $|ab| = |a|\,|b|$, aber
nicht auf Summen. Für Summen gilt nur die Ungleichung $|a + b| \le |a| + |b|$.
:::

### Intervalle

Lückenlose Teilmengen der Zahlengeraden heißen **Intervalle**. Eine **eckige Klammer**, die zur Zahl hin zeigt, bedeutet:
Der Randpunkt gehört dazu. Eine nach außen gedrehte Klammer bedeutet: Er gehört nicht dazu. Für $a < b$ gilt:

| Schreibweise | bedeutet | Name |
|---|---|---|
| $[a;\ b]$ | $a \le x \le b$. | abgeschlossen |
| $]a;\ b[$ | $a < x < b$. | offen |
| $[a;\ b[$ | $a \le x < b$. | halboffen |
| $[a;\ \infty[$ | $x \ge a$. | unbeschränkt |
| $]-\infty;\ b[$ | $x < b$. | unbeschränkt |

Das Zeichen $\infty$ liest man „unendlich“. Es ist keine Zahl, sondern sagt: Das Intervall hört auf dieser Seite nie auf.
Deshalb ist die Klammer bei $\infty$ immer offen. International schreibt man statt $]a;\ b[$ oft $(a, b)$, beide
Schreibweisen sind richtig. Zum Beispiel ist $[2;\ 5[$ die Menge aller Zahlen von $2$ (einschließlich) bis $5$ (ausschließlich).

```plot
x: [-1, 7]
y: [-1, 1]
hoehe: 130
strecken:
  - { von: [2, 0], nach: [5, 0], farbe: 2 }
punkte:
  - { x: 2, y: 0, label: "2 (gehört dazu)", farbe: 2 }
  - { x: 5, y: 0, label: "5 (gehört nicht dazu)", offen: true, farbe: 2 }
beschriftung: Das halboffene Intervall [2; 5[. Der volle Punkt bei 2 gehört dazu, der leere Kreis bei 5 nicht.
```

Mit Intervallen rechnet man wie mit Mengen aus [1.2 Mengen und Aussagen](/lernen/mathe3/zahlen/mengen-und-aussagen-die-sprache-der-mathematik):
**Durchschnitt** $\cap$ (in beiden), **Vereinigung** $\cup$ (in mindestens einem), **Differenz** $\setminus$ (im ersten, aber
nicht im zweiten).

```aufgabe
id: za-check-intervall-lesen
titel: Gehört der Randpunkt dazu?
niveau: 1
art: check
angabe: |
  Liegt die Zahl $3$ im Intervall $]1;\ 3[$?
teile:
  - typ: auswahl
    optionen: ['ja', 'nein']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Die Klammer bei $3$ zeigt nach außen. Das heißt: Der Randpunkt $3$ gehört nicht dazu.'
hinweise:
  - 'Zeigt die Klammer zur Zahl hin oder von ihr weg?'
loesung: |
  $]1;\ 3[$ bedeutet $1 < x < 3$. Für $x = 3$ ist $3 < 3$ falsch.
  ---
  Also liegt $3$ nicht im Intervall. Zahlen wie $2{,}9$ oder $2{,}999$ liegen aber darin.
```

:::beispiel[Zwei Intervalle verknüpfen]
Es sei $A = [0;\ 4]$ und $B = \,]2;\ 6[$.

1. **Durchschnitt:** In beiden liegen die Zahlen größer als $2$ und höchstens $4$. Also $A \cap B = \,]2;\ 4]$. Die $2$ fehlt, weil sie nicht in $B$ liegt.
2. **Vereinigung:** Weil sich die Intervalle überlappen, entsteht ein einziges Intervall von $0$ bis unter $6$: $A \cup B = [0;\ 6[$.
3. **Differenz:** $A \setminus B$ sind die Zahlen aus $A$, die nicht in $B$ liegen, also von $0$ bis einschließlich $2$: $[0;\ 2]$.
:::

### Betrag und Intervall: Umgebungen

Die Ungleichung $|x - a| < r$ sagt: Der Abstand von $x$ zu $a$ ist kleiner als $r$. Das sind genau die Zahlen im offenen
Intervall um $a$ mit dem Radius $r$:
$$|x - a| < r \quad\text{genau dann, wenn}\quad a - r < x < a + r, \quad\text{also}\quad x \in\ ]a - r;\ a + r[.$$
Man nennt das Intervall eine **$r$-Umgebung** von $a$. Diese Übersetzung ist das Herzstück der exakten Grenzwertdefinition
in [Kapitel 11](/lernen/mathe3/grenzwerte-folgen). Dort heißt „$|a_n - a| < \varepsilon$“, dass die Zahl $a_n$ im
$\varepsilon$-Schlauch um $a$ liegt. Das Zeichen $\varepsilon$ ist der griechische Buchstabe Epsilon und steht für eine kleine positive Zahl.

```plot
x: [-3, 5]
y: [-0.5, 4]
graphen:
  - { f: "abs(x - 1)", label: "y = |x − 1|", farbe: 0 }
  - { f: "2", label: "y = 2", farbe: 1, gestrichelt: true }
strecken:
  - { von: [-1, 0], nach: [3, 0], farbe: 2 }
punkte:
  - { x: -1, y: 0, label: "−1", offen: true, farbe: 2 }
  - { x: 3, y: 0, label: "3", offen: true, farbe: 2 }
  - { x: 1, y: 0, label: "Mitte 1", farbe: 0 }
beschriftung: Die Zahlen x mit |x − 1| < 2 sind genau die, deren Abstand zu 1 kleiner als 2 ist. Das ist das offene Intervall von −1 bis 3 (grün). Dort liegt der Graph von |x − 1| unterhalb der Geraden y = 2.
```

:::beispiel[Eine Fertigungstoleranz]
Ein Bolzen soll $25{,}0\,\text{mm}$ lang sein. Erlaubt ist eine Abweichung von höchstens $0{,}2\,\text{mm}$ nach oben oder unten.

1. Als Betragsungleichung: Für die Länge $L$ muss $|L - 25{,}0| \le 0{,}2$ gelten. Der Abstand zum Sollwert ist höchstens $0{,}2$.
2. Ohne Betrag: $25{,}0 - 0{,}2 \le L \le 25{,}0 + 0{,}2$, also $24{,}8 \le L \le 25{,}2$.
3. Als Intervall: $L \in [24{,}8;\ 25{,}2]$ in Millimetern. Die Klammern sind geschlossen, weil $\le$ die Ränder erlaubt.

Ein Bolzen mit $25{,}3\,\text{mm}$ ist Ausschuss, denn $|25{,}3 - 25{,}0| = 0{,}3 > 0{,}2$.
:::

:::achtung[Nur eine Seite der Umgebung]
**Falsch:** $|x - 3| < 2$, also $x - 3 < 2$, also $x < 5$.

**Richtig:** Der Abstand zu $3$ ist kleiner als $2$ in **beide** Richtungen: $3 - 2 < x < 3 + 2$, also $1 < x < 5$.
Die Zahl $x = 0$ erfüllt $x < 5$, aber $|0 - 3| = 3$ ist nicht kleiner als $2$.
:::

:::merke[Betrag und Intervall übersetzen]
1. $|a - b|$ ist der Abstand zwischen $a$ und $b$.
2. $|x - a| < r$ bedeutet $a - r < x < a + r$, also das offene Intervall $]a - r;\ a + r[$.
3. $|x - a| \le r$ bedeutet das geschlossene Intervall $[a - r;\ a + r]$.
4. Umgekehrt: Ein Intervall von $p$ bis $q$ hat den Mittelpunkt $\tfrac{p + q}{2}$ und den Radius $\tfrac{q - p}{2}$.
:::

```reflexion
frage: 'Warum beschreibt $|x - 2| \le 1$ alle Zahlen zwischen $1$ und $3$? Erkläre es mit dem Wort „Abstand“.'
antwort: |
  $|x - 2|$ ist der Abstand der Zahl $x$ von der Zahl $2$. Die Ungleichung verlangt, dass dieser Abstand höchstens $1$ ist.
  Von $2$ aus darf man also höchstens einen Schritt nach links oder nach rechts gehen. Das führt zu allen Zahlen von $1$ bis $3$.
  Weil „höchstens“ die Gleichheit erlaubt, gehören die Ränder $1$ und $3$ dazu: Das ist das Intervall $[1;\ 3]$.
```

### Übungen

```aufgabe
id: za-betrag-rechnen
titel: Beträge berechnen
niveau: 1
lernziel: 9
kompetenz: rechnen
angabe: |
  Berechne: a) $|-7| + |3 - 8| - |-2|\cdot|4|$, b) $\big|\,|2 - 9| - 10\,\big|$
teile:
  - typ: zahl
    label: 'a)'
    loesung: "abs(-7) + abs(3 - 8) - abs(-2)*abs(4)"
    fehler:
      - wert: "-6"
        meldung: '$|3 - 8|$ ist $5$, nicht $-5$. Ein Betrag ist nie negativ.'
  - typ: zahl
    label: 'b)'
    loesung: "abs(abs(2 - 9) - 10)"
    fehler:
      - wert: "17"
        meldung: 'Der innere Betrag $|2 - 9|$ ist $+7$. Erst danach wird $10$ abgezogen.'
      - wert: "-3"
        meldung: 'Um alles steht noch ein äußerer Betrag. Er macht das Ergebnis nicht negativ.'
hinweise:
  - 'Rechne zuerst das Innere jedes Betrags aus. Betragsstriche wirken wie Klammern.'
loesung: |
  Ansatz: Von innen nach außen rechnen. Jeder Betrag liefert eine nicht negative Zahl.
  ---
  a) $7 + |-5| - 2\cdot 4 = 7 + 5 - 8 = 4$.
  ---
  b) $|2 - 9| = |-7| = 7$, dann $|7 - 10| = |-3| = 3$.
```

```aufgabe
id: za-intervalle
titel: Intervalle verknüpfen
niveau: 1
lernziel: 9
kompetenz: verstehen
angabe: |
  Es sei $A = [-2;\ 5[$ und $B = \,]1;\ 7]$. Welche Aussagen sind richtig?
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$A \cap B = \,]1;\ 5[$'
      - '$A \cap B = [1;\ 5]$'
      - '$A \cup B = [-2;\ 7]$'
      - '$A \setminus B = [-2;\ 1]$'
      - '$5 \in A$'
    richtig: [0, 2, 3]
    fehler:
      - wert: [1, 2, 3]
        meldung: 'Die $1$ gehört nicht zu $B$, und die $5$ gehört nicht zu $A$. Also gehören beide Ränder nicht zum Durchschnitt.'
      - wert: [0, 2, 3, 4]
        meldung: 'Bei $5$ ist $A$ offen: $[-2;\ 5[$ heißt $x < 5$. Also liegt $5$ nicht in $A$.'
      - wert: [0, 2]
        meldung: 'Prüfe $A \setminus B$: Die $1$ liegt in $A$, aber nicht in $B$, weil $B$ bei $1$ offen ist. Also gehört sie zur Differenz.'
hinweise:
  - 'Zeichne beide Intervalle übereinander auf eine Zahlengerade und achte genau auf die Randpunkte.'
  - 'Für jeden Randpunkt einzeln prüfen: In welcher Menge liegt er?'
loesung: |
  Ansatz: Wir zeichnen beide Intervalle und prüfen jeden Randpunkt einzeln.
  ---
  Durchschnitt: Er beginnt bei $1$ (aus $B$, ausgeschlossen) und endet bei $5$ (aus $A$, ausgeschlossen): $]1;\ 5[$.
  ---
  Vereinigung: von $-2$ (eingeschlossen) bis $7$ (eingeschlossen), lückenlos, weil sich die Intervalle überlappen: $[-2;\ 7]$.
  ---
  $A \setminus B$: Zahlen aus $A$ mit $x \le 1$, also $[-2;\ 1]$. Die $1$ gehört dazu, weil $1 \notin B$. Und $5 \notin A$, weil $A$ rechts offen ist.
```

```aufgabe
id: za-umgebung
titel: Betrag als Intervall
niveau: 2
lernziel: 9
kompetenz: rechnen
angabe: |
  a) Schreibe $\{x \in \R \mid |x - 3| \le 0{,}5\}$ als Intervall. Gib die Randpunkte an.

  b) Das offene Intervall $]1;\ 9[$ soll als $\{x \mid |x - m| < r\}$ geschrieben werden. Bestimme $m$ und $r$.
teile:
  - typ: vektor
    label: 'a) Randpunkte'
    namen: ["links", "rechts"]
    loesung: ["2.5", "3.5"]
    fehler:
      - wert: ["-3.5", "3.5"]
        meldung: 'Die Umgebung liegt um die Mitte $3$, nicht um $0$. Links ist $3 - 0{,}5$.'
  - typ: zahl
    label: 'b) $m$'
    loesung: "(1 + 9)/2"
    fehler:
      - wert: "1"
        meldung: 'Gesucht ist der **Mittelpunkt** des Intervalls, nicht sein linker Rand.'
  - typ: zahl
    label: 'b) $r$'
    loesung: "(9 - 1)/2"
    fehler:
      - wert: "8"
        meldung: 'Das ist die ganze Länge des Intervalls. Der Radius ist der Abstand vom Mittelpunkt zum Rand, also die halbe Länge.'
hinweise:
  - '$|x - a| \le r$ heißt: Abstand zu $a$ höchstens $r$.'
  - 'Der Mittelpunkt ist der Mittelwert der Randpunkte, der Radius die halbe Länge.'
gefuehrt:
  - text: 'a) Der Abstand zu $3$ ist höchstens $0{,}5$. Welche Zahl ist der linke Rand?'
    teil: { typ: zahl, loesung: "3 - 0.5" }
    erklaerung: '$3 - 0{,}5 = 2{,}5$.'
  - text: 'Welche Zahl ist der rechte Rand?'
    teil: { typ: zahl, loesung: "3 + 0.5" }
    erklaerung: '$3 + 0{,}5 = 3{,}5$. Wegen $\le$ gehören beide Ränder dazu: $[2{,}5;\ 3{,}5]$.'
  - text: 'b) Wo liegt die Mitte zwischen $1$ und $9$?'
    teil: { typ: zahl, loesung: "5" }
    erklaerung: '$\tfrac{1 + 9}{2} = 5$.'
  - text: 'Wie weit ist es von der Mitte bis zu einem Rand?'
    teil: { typ: zahl, loesung: "4" }
    erklaerung: '$9 - 5 = 4$. Also $]1;\ 9[\, = \{x \mid |x - 5| < 4\}$.'
loesung: |
  Ansatz: $|x - a| \le r$ bedeutet „höchstens $r$ von $a$ entfernt“. Rückwärts sind Mittelpunkt und halbe Länge gesucht.
  ---
  a) $|x - 3| \le 0{,}5$ heißt $3 - 0{,}5 \le x \le 3 + 0{,}5$, also $[2{,}5;\ 3{,}5]$, abgeschlossen wegen $\le$.
  ---
  b) Mittelpunkt $m = \tfrac{1 + 9}{2} = 5$, Radius $r = \tfrac{9 - 1}{2} = 4$.
  ---
  Kontrolle b): $5 - 4 = 1$ und $5 + 4 = 9$. Also $]1;\ 9[\, = \{x \mid |x - 5| < 4\}$.
```

```aufgabe
id: za-toleranz-widerstand
titel: Ein Widerstand mit Toleranz
niveau: 2
lernziel: 9
kompetenz: modellieren
angabe: |
  Auf einem elektrischen Widerstand steht $470\,\Omega$ mit einer Toleranz von $\pm 5\,\%$. Das Zeichen $\Omega$ (lies „Ohm“) ist die Einheit des Widerstands.

  a) Schreibe die erlaubten Werte $R$ als Betragsungleichung $|R - 470| \le t$. Wie groß ist $t$?

  b) Gib das Intervall der erlaubten Werte an.
teile:
  - typ: zahl
    label: 'a) $t$'
    einheit: Ω
    loesung: "470*0.05"
    fehler:
      - wert: "5"
        meldung: 'Die Toleranz ist in Prozent angegeben. $5\,\%$ von $470$ sind nicht $5$.'
  - typ: vektor
    label: 'b) Randpunkte'
    namen: ["links", "rechts"]
    loesung: ["470 - 23.5", "470 + 23.5"]
    fehler:
      - wert: ["465", "475"]
        meldung: 'Du hast $\pm 5$ statt $\pm 5\,\%$ gerechnet. Berechne zuerst, wie viel Ohm $5\,\%$ von $470\,\Omega$ sind.'
hinweise:
  - 'Berechne die erlaubte Abweichung: $5\,\%$ von $470$.'
  - 'Das Intervall reicht vom Sollwert minus Abweichung bis Sollwert plus Abweichung.'
loesung: |
  Ansatz: Die Toleranz ist die größte erlaubte Abweichung vom Sollwert. Abweichung heißt Abstand, also Betrag.
  ---
  a) $5\,\%$ von $470\,\Omega$: $470\cdot 0{,}05 = 23{,}5\,\Omega$. Also $|R - 470| \le 23{,}5$.
  ---
  b) $470 - 23{,}5 \le R \le 470 + 23{,}5$, also $R \in [446{,}5;\ 493{,}5]$ in Ohm.
  ---
  Kontrolle: Ein gemessener Wert von $480\,\Omega$ ist in Ordnung, denn $|480 - 470| = 10 \le 23{,}5$.
```

```aufgabe
id: za-betrag-faelle
titel: Den Betrag in Fällen schreiben
niveau: 2
lernziel: 9
kompetenz: verstehen
angabe: |
  a) Berechne $|x - 3|$ für $x = 1$ und für $x = 7$.

  b) Welcher Term ist für alle $x < 3$ gleich $|x - 3|$?
teile:
  - typ: zahl
    label: 'a) für $x = 1$'
    loesung: "abs(1 - 3)"
    fehler:
      - wert: "-2"
        meldung: 'Ein Betrag ist nie negativ. $|1 - 3| = |-2|$.'
  - typ: zahl
    label: 'a) für $x = 7$'
    loesung: "abs(7 - 3)"
    fehler:
      - wert: "10"
        meldung: 'Der Betrag macht nicht aus jedem Minus ein Plus. Rechne zuerst innen: $7 - 3$.'
  - typ: auswahl
    label: 'b)'
    optionen: ['$x - 3$', '$3 - x$', '$x + 3$', '$-x - 3$']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Für $x = 1$ ergäbe das $-2$. Für $x < 3$ ist $x - 3$ negativ, der Betrag dreht das Vorzeichen um.'
      - wert: 2
        meldung: 'Für $x = 1$ ergäbe das $4$, aber $|1 - 3| = 2$. Der Betrag macht nicht einfach aus Minus ein Plus.'
      - wert: 3
        meldung: 'Für $x = 1$ ergäbe das $-4$. Ein Betrag ist nie negativ.'
hinweise:
  - 'Ist $x - 3$ für $x < 3$ positiv oder negativ?'
  - 'Nach der Definition ist $|a| = -a$, wenn $a$ negativ ist. Setze $a = x - 3$.'
loesung: |
  Ansatz: Wir verwenden die Definition mit den zwei Fällen. Entscheidend ist das Vorzeichen von $x - 3$.
  ---
  a) $|1 - 3| = |-2| = 2$ und $|7 - 3| = |4| = 4$.
  ---
  b) Für $x < 3$ ist $x - 3 < 0$. Dann gilt $|x - 3| = -(x - 3) = 3 - x$.
  ---
  Kontrolle mit $x = 1$: $3 - 1 = 2$, passt zu a). Für $x \ge 3$ ist dagegen $|x - 3| = x - 3$, zum Beispiel $7 - 3 = 4$.
```

```aufgabe
id: za-dreiecksungleichung
titel: Wann gilt Gleichheit?
niveau: 3
lernziel: 9
kompetenz: begruenden
angabe: |
  a) Prüfe die Dreiecksungleichung $|a + b| \le |a| + |b|$ für $a = 4$ und $b = -7$: Berechne beide Seiten.

  b) Für welche Paare $(a, b)$ gilt sogar $|a + b| = |a| + |b|$?

  c) Begründe deine Antwort zu b).
teile:
  - typ: zahl
    label: 'a) $|a + b|$'
    loesung: "abs(4 - 7)"
    fehler:
      - wert: "11"
        meldung: 'Das ist die rechte Seite. Links wird zuerst addiert, dann der Betrag genommen: $|4 + (-7)|$.'
  - typ: zahl
    label: 'a) $|a| + |b|$'
    loesung: "abs(4) + abs(-7)"
    fehler:
      - wert: "-3"
        meldung: 'Beträge sind nie negativ: $|-7| = 7$.'
  - typ: auswahl
    label: 'b)'
    optionen:
      - 'genau dann, wenn $a\cdot b \ge 0$ ist, also wenn $a$ und $b$ nicht entgegengesetzte Vorzeichen haben'
      - 'nur für $a = b$'
      - 'genau dann, wenn $a\cdot b \le 0$ ist'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Teste $a = 2$, $b = 5$: $|7| = 7 = 2 + 5$. Gleichheit gilt also auch für verschiedene Zahlen.'
      - wert: 2
        meldung: 'Teste $a = 4$, $b = -7$ aus a): Dort ist $ab < 0$, aber $3 \neq 11$.'
  - typ: text
    label: 'c)'
    muster: |
      Beide Seiten sind nicht negativ, also darf man quadrieren: $(a + b)^2 = (|a| + |b|)^2$ heißt
      $a^2 + 2ab + b^2 = a^2 + 2|a|\,|b| + b^2$, also $ab = |ab|$. Das gilt genau dann, wenn $ab \ge 0$ ist.
hinweise:
  - 'Beide Seiten sind nicht negativ. Quadriere sie und vergleiche.'
  - '$|a|^2 = a^2$ und $|a|\,|b| = |ab|$. Wann ist eine Zahl gleich ihrem Betrag?'
loesung: |
  Ansatz: Für a) einsetzen. Für b) quadrieren wir, weil beide Seiten nicht negativ sind und Quadrieren die Gleichheit dann nicht verändert.
  ---
  a) $|4 + (-7)| = |-3| = 3$ und $|4| + |-7| = 11$. Es ist $3 < 11$, also echt kleiner.
  ---
  b) und c) $(a + b)^2 = (|a| + |b|)^2$ heißt $a^2 + 2ab + b^2 = a^2 + 2|ab| + b^2$.
  ---
  Das ist gleichwertig mit $ab = |ab|$, und das gilt genau dann, wenn $ab \ge 0$ ist. Die beiden Zahlen haben also dasselbe Vorzeichen, oder eine von ihnen ist $0$.
```

```aufgabe
id: za-betragsungleichung-intervall
titel: Eine Betragsungleichung als Intervall
niveau: 3
lernziel: 9
kompetenz: rechnen
angabe: |
  Gib die Lösungsmenge von $|2x - 4| < 6$ als Intervall an.
teile:
  - typ: vektor
    label: 'Randpunkte'
    namen: ["links", "rechts"]
    loesung: ["-1", "5"]
    fehler:
      - wert: ["-2", "10"]
        meldung: 'Du hast vergessen, durch $2$ zu teilen. Aus $-6 < 2x - 4 < 6$ folgt zuerst $-2 < 2x < 10$, dann noch durch $2$.'
      - wert: ["-10", "2"]
        meldung: 'Prüfe die Vorzeichen: Auf allen drei Seiten wird $4$ **addiert**. Danach wird noch durch $2$ geteilt.'
  - typ: auswahl
    label: 'Art des Intervalls'
    optionen: ['offen', 'abgeschlossen', 'halboffen']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'In der Ungleichung steht $<$, nicht $\le$. Die Randpunkte gehören nicht dazu.'
hinweise:
  - 'Schreibe $|2x - 4| = 2\cdot|x - 2|$. Dann heißt die Ungleichung $|x - 2| < 3$.'
  - 'Oder: $|u| < 6$ heißt $-6 < u < 6$. Setze $u = 2x - 4$ und forme alle drei Teile um.'
loesung: |
  Ansatz: Der Betrag kleiner $6$ bedeutet, dass der Inhalt zwischen $-6$ und $6$ liegt.
  ---
  $-6 < 2x - 4 < 6$. Überall $4$ addieren: $-2 < 2x < 10$. Durch die positive Zahl $2$ teilen: $-1 < x < 5$.
  ---
  Lösungsmenge $]-1;\ 5[$, offen wegen $<$.
  ---
  Deutung: $|2x - 4| = 2|x - 2| < 6$ heißt $|x - 2| < 3$. Gesucht sind also alle Zahlen mit Abstand kleiner als $3$ von der Mitte $2$. Probe: $x = 5$ ergibt $|6| = 6$, nicht kleiner als $6$.
```

## Runden, signifikante Stellen und Zehnerpotenzen

```aufgabe
id: za-check-zehnerpotenz-negativ
titel: Eine negative Zehnerpotenz
niveau: 1
art: check
angabe: |
  Schreibe $10^{-3}$ als Dezimalzahl.
  Vorwissen: [1.9 Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln).
teile:
  - typ: zahl
    loesung: "10^(-3)"
    fehler:
      - wert: "-1000"
        meldung: 'Eine negative Hochzahl macht die Zahl nicht negativ, sondern bedeutet den Kehrwert: $10^{-3} = \tfrac{1}{10^3}$.'
      - wert: "-30"
        meldung: 'Die Hochzahl ist kein Faktor. $10^{-3}$ ist der Kehrwert von $10^3 = 1000$.'
hinweise:
  - '$10^{-3} = \tfrac{1}{10^3}$.'
loesung: |
  $10^{-3} = \tfrac{1}{10^3} = \tfrac{1}{1000}$.
  ---
  Als Dezimalzahl: $0{,}001$. Die Hochzahl $-3$ sagt, dass die $1$ an der dritten Stelle nach dem Komma steht.
```

Fast jedes Ergebnis in Physik und Technik ist gerundet, und fast jede Größe ist sehr groß oder sehr klein. Diese Lektion
zeigt, wie man richtig rundet, wie viele Stellen sinnvoll sind und wie man mit Zehnerpotenzen rechnet. Für die Prüfung
ist das wichtig: Ein zu früh gerundetes Zwischenergebnis kann ein ganzes Endergebnis verfälschen.

### Runden

Beim **Runden** auf eine bestimmte Stelle schaut man auf die **nächste** Ziffer dahinter. Ist sie $0$ bis $4$, wird
abgerundet, die letzte behaltene Ziffer bleibt. Ist sie $5$ bis $9$, wird aufgerundet, die letzte behaltene Ziffer wird um
$1$ größer. So ist $3{,}14159$ auf zwei Nachkommastellen $3{,}14$, denn die nächste Ziffer ist $1$. Auf drei
Nachkommastellen ist es $3{,}142$, denn die nächste Ziffer ist $5$.

Es gibt zwei Arten, die Genauigkeit anzugeben.

- **Nachkommastellen** zählen ab dem Komma. Sie sind sinnvoll bei Geldbeträgen, die man auf zwei Nachkommastellen rundet.
- **Signifikante Stellen** (geltende Ziffern) zählen ab der ersten Ziffer, die nicht $0$ ist. Nullen davor zählen nicht, Nullen danach schon. $0{,}004050$ hat vier signifikante Stellen, nämlich $4$, $0$, $5$, $0$.

Signifikante Stellen sind bei Messwerten sinnvoll. Sie beschreiben die **relative** Genauigkeit, also die Genauigkeit im
Verhältnis zur Größe der Zahl. Eine Länge von $2{,}0\,\text{m}$ und eine von $2{,}0\,\text{mm}$ sind beide auf zwei signifikante
Stellen genau.

:::beispiel[Runden auf signifikante Stellen]
1. $0{,}0045678$ auf drei signifikante Stellen: Die ersten drei geltenden Ziffern sind $4$, $5$, $6$. Die nächste ist $7$, also aufrunden: $0{,}00457$.
2. $123\,456$ auf zwei signifikante Stellen: Die ersten beiden sind $1$, $2$. Die nächste ist $3$, also abrunden: $120\,000$.
3. $9{,}996$ auf drei signifikante Stellen: Aufrunden der $9$ ergibt einen Übertrag, also $10{,}0$. Die Null am Ende zeigt, dass auf drei Stellen genau gerundet wurde.
:::

:::achtung[Nullen und Genauigkeit]
**Falsch:** „$0{,}0050$ hat fünf signifikante Stellen, weil dort fünf Ziffern stehen.“

**Richtig:** Führende Nullen zählen nicht. Signifikant sind nur die $5$ und die $0$ danach, also zwei Stellen. Die Null am
Ende gehört dazu: Sie sagt, dass auch die vierte Nachkommastelle gemessen wurde. $0{,}005$ und $0{,}0050$ sind deshalb als
Messwerte nicht dasselbe.
:::

### Die wissenschaftliche Schreibweise

Sehr große und sehr kleine Zahlen schreibt man als $a\cdot 10^k$. Dabei ist $1 \le |a| < 10$, und $k$ ist eine ganze Zahl. Hier ist $|a|$ der Betrag, also $a$ ohne Vorzeichen.
Die Zahl $a$ heißt **Mantisse**, die Hochzahl $k$ gibt an, um wie viele Stellen das Komma verschoben wird.

- $384\,000 = 3{,}84\cdot 10^5$: Das Komma wandert $5$ Stellen nach links, also $k = 5$.
- $0{,}00052 = 5{,}2\cdot 10^{-4}$: Das Komma wandert $4$ Stellen nach rechts, also $k = -4$.

Gerechnet wird mit den Potenzgesetzen aus [1.9 Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln): Mantissen
und Zehnerpotenzen getrennt behandeln.
$$(3{,}2\cdot 10^5)\cdot(4\cdot 10^{-8}) = 12{,}8\cdot 10^{-3} = 1{,}28\cdot 10^{-2}.$$
Im letzten Schritt wurde die Mantisse $12{,}8$ wieder zwischen $1$ und $10$ gebracht: $12{,}8 = 1{,}28\cdot 10^1$.

Die Vorsilben der Einheiten sind Zehnerpotenzen: kilo $10^3$, mega $10^6$, giga $10^9$, tera $10^{12}$, milli $10^{-3}$, mikro
$10^{-6}$, nano $10^{-9}$. In der Informatik gibt es eine Falle. Ein **Kibibyte** hat $2^{10} = 1024$ Byte, ein **Kilobyte** genau
$1000$ Byte. Bei Terabyte beträgt der Unterschied schon rund $10\,\%$.

:::beispiel[Wie weit ist ein Lichtjahr?]
Ein Lichtjahr ist die Strecke, die Licht in einem Jahr zurücklegt. Licht ist etwa $3{,}0\cdot 10^5\,\tfrac{\text{km}}{\text{s}}$ schnell.

1. Ein Jahr in Sekunden: $365{,}25\cdot 24\cdot 3600\,\text{s} \approx 3{,}16\cdot 10^7\,\text{s}$.
2. Strecke ist Geschwindigkeit mal Zeit: $3{,}0\cdot 10^5\cdot 3{,}16\cdot 10^7 = 9{,}48\cdot 10^{12}$ in Kilometern.
3. Die Geschwindigkeit war nur auf zwei Stellen genau. Also runden wir auf zwei Stellen: Ein Lichtjahr sind etwa $9{,}5\cdot 10^{12}\,\text{km}$.
:::

:::achtung[Falsch normiert]
**Falsch:** $0{,}00052 = 5{,}2\cdot 10^{-3}$.

**Richtig:** $5{,}2\cdot 10^{-3} = 0{,}0052$. Für $0{,}00052$ muss das Komma vier Stellen wandern: $5{,}2\cdot 10^{-4}$.
Kontrolle: Eine kleine Zahl hat eine negative Hochzahl, und $10^{-4} = 0{,}0001$.
:::

### Zwischenergebnisse nicht runden

:::achtung[Rundungsfehler pflanzen sich fort]
**Falsch:** „$\sqrt2 \approx 1{,}41$, also $(\sqrt2)^{10} \approx 1{,}41^{10} \approx 31{,}06$.“

**Richtig:** Exakt ist $(\sqrt2)^{10} = 2^5 = 32$. Der kleine Rundungsfehler von etwa $0{,}3\,\%$ in $\sqrt2$ wird durch die
zehnte Potenz zu fast $3\,\%$. Speichere Zwischenergebnisse im Taschenrechner (Taste **Ans** oder Speicher) und runde erst
das Endergebnis.
:::

:::merke[Sinnvoll runden]
1. Mit vollen Zwischenergebnissen weiterrechnen, erst das Endergebnis runden.
2. Das Ergebnis nicht genauer angeben als die ungenaueste Angabe. Bei Messwerten zählen die signifikanten Stellen.
3. Geld auf Cent, Anzahlen auf ganze Zahlen, sonst so, wie es die Angabe verlangt.
4. Beim gerundeten Wert $\approx$ schreiben, nicht $=$.
:::

:::pruefung
Runde das Endergebnis passend zur Genauigkeit der Angaben und zum Zusammenhang. Geld rundet man auf Cent, Zeiten in Stunden
auf ein bis zwei Nachkommastellen, Anzahlen auf ganze Zahlen. Formuliere dann sinnvoll: „$36{,}7$ Stunden“ heißt „nach knapp
$37$ Stunden“. Wenn die Angabe eine bestimmte Rundung verlangt, etwa „auf eine Nachkommastelle“, halte dich genau daran.
:::

```reflexion
frage: 'Warum ist die Angabe „Länge $10{,}0\,\text{cm}$“ etwas anderes als „Länge $10\,\text{cm}$“, obwohl beide Zahlen gleich sind?'
antwort: |
  Als Zahlen sind $10{,}0$ und $10$ gleich. Als Messwerte sagen sie aber etwas über die Genauigkeit.
  $10{,}0\,\text{cm}$ hat drei signifikante Stellen: Es wurde auf einen Millimeter genau gemessen.
  $10\,\text{cm}$ sagt nur, dass die Länge ungefähr $10$ Zentimeter beträgt. Die Null am Ende ist also eine Information, keine Verzierung.
```

### Übungen

```aufgabe
id: za-runden
titel: Runden und signifikante Stellen
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  a) Runde $0{,}0038261$ auf drei signifikante Stellen.

  b) Runde $\tfrac57$ auf drei Nachkommastellen.

  c) Runde $987\,654$ auf zwei signifikante Stellen.

  d) Wie viele signifikante Stellen hat $0{,}07060$?
teile:
  - typ: zahl
    label: 'a)'
    loesung: "0.00383"
    toleranz: 0.0000001
    fehler:
      - wert: "0.004"
        meldung: 'Du hast auf drei **Nachkommastellen** gerundet. Signifikante Stellen zählen erst ab der ersten Ziffer, die nicht null ist.'
      - wert: "0.00382"
        meldung: 'Die nächste Ziffer nach $3$, $8$, $2$ ist eine $6$. Ab $5$ wird aufgerundet.'
  - typ: zahl
    label: 'b)'
    loesung: "0.714"
    toleranz: 0.0001
    fehler:
      - wert: "0.715"
        meldung: '$\tfrac57 = 0{,}714285\ldots$ Die vierte Nachkommastelle ist $2$, also wird abgerundet.'
  - typ: zahl
    label: 'c)'
    loesung: "990000"
    toleranz: 1
    fehler:
      - wert: "98"
        meldung: 'Beim Runden bleibt die Größenordnung erhalten. Aus fast einer Million wird nicht $98$.'
      - wert: "980000"
        meldung: 'Die dritte Ziffer ist $7$, also wird die zweite aufgerundet: aus $98$ wird $99$.'
  - typ: zahl
    label: 'd)'
    loesung: "4"
    fehler:
      - wert: "6"
        meldung: 'Führende Nullen zählen nicht. Gezählt wird ab der ersten Ziffer, die nicht null ist.'
      - wert: "3"
        meldung: 'Die Null am Ende zählt mit. Sie zeigt, dass auch diese Stelle gemessen wurde.'
hinweise:
  - 'Signifikante Stellen beginnen bei der ersten Ziffer, die nicht $0$ ist.'
  - 'Zum Runden immer nur auf die Ziffer direkt hinter der letzten behaltenen Stelle schauen.'
loesung: |
  Ansatz: Zuerst festlegen, welche Ziffer die letzte behaltene ist. Dann entscheidet die Ziffer danach.
  ---
  a) Geltende Ziffern $3, 8, 2$, danach $6$: aufrunden zu $0{,}00383$. b) $\tfrac57 = 0{,}714285\ldots$, vierte Nachkommastelle $2$: $0{,}714$.
  ---
  c) Ziffern $9, 8$, danach $7$: aufrunden, $98 \to 99$, also $990\,000 = 9{,}9\cdot 10^5$.
  ---
  d) $0{,}07060$: signifikant sind $7, 0, 6, 0$, also $4$ Stellen. Die Null zwischen $7$ und $6$ und die Null am Ende zählen mit.
```

```aufgabe
id: za-zehnerpotenzen
titel: Rechnen mit Zehnerpotenzen
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Berechne und gib als Dezimalzahl an:

  a) $(2{,}5\cdot 10^4)\cdot(6\cdot 10^{-7})$, b) $\dfrac{9\cdot 10^5}{3\cdot 10^{-2}}$
teile:
  - typ: zahl
    label: 'a)'
    loesung: "2.5e4 * 6e-7"
    anzeige: '1{,}5\cdot 10^{-2} = 0{,}015'
    fehler:
      - wert: "15e-28"
        meldung: 'Beim Multiplizieren werden die Hochzahlen **addiert**: $10^4\cdot 10^{-7} = 10^{4 + (-7)}$.'
  - typ: zahl
    label: 'b)'
    loesung: "9e5 / 3e-2"
    anzeige: '3\cdot 10^{7}'
    fehler:
      - wert: "3e3"
        meldung: 'Beim Dividieren werden die Hochzahlen subtrahiert: $5 - (-2) = 7$, nicht $5 - 2$.'
hinweise:
  - 'Mantissen und Zehnerpotenzen getrennt behandeln.'
  - 'Multiplizieren: Hochzahlen addieren. Dividieren: Hochzahlen subtrahieren, Vorzeichen beachten.'
loesung: |
  Ansatz: Wir rechnen die Vorzahlen und die Zehnerpotenzen getrennt mit den Potenzgesetzen.
  ---
  a) $2{,}5\cdot 6 = 15$ und $10^4\cdot 10^{-7} = 10^{-3}$. Also $15\cdot 10^{-3} = 1{,}5\cdot 10^{-2} = 0{,}015$.
  ---
  b) $\tfrac93 = 3$ und $\tfrac{10^5}{10^{-2}} = 10^{5 - (-2)} = 10^7$. Also $3\cdot 10^7 = 30\,000\,000$.
```

```aufgabe
id: za-wissenschaftlich
titel: In wissenschaftlicher Schreibweise
niveau: 2
lernziel: 5
kompetenz: verstehen
angabe: |
  Schreibe in der Form $a\cdot 10^k$ mit $1 \le a < 10$. Gib jeweils $a$ und $k$ an.

  a) $0{,}000\,73$ (die Dicke eines Haares in Metern, ungefähr)

  b) $5\,970\,000\,000\,000\,000\,000\,000\,000$ (die Masse der Erde in Kilogramm, ungefähr)
teile:
  - typ: vektor
    label: 'a)'
    namen: ['a', 'k']
    loesung: ["7.3", "-4"]
    fehler:
      - wert: ["7.3", "-3"]
        meldung: '$7{,}3\cdot 10^{-3} = 0{,}0073$. Zähle die Stellen, um die das Komma bis hinter die $7$ wandert.'
      - wert: ["73", "-5"]
        meldung: 'Der Wert stimmt, aber $73$ liegt nicht zwischen $1$ und $10$. Die Mantisse hat genau eine Ziffer vor dem Komma.'
  - typ: vektor
    label: 'b)'
    namen: ['a', 'k']
    loesung: ["5.97", "24"]
    fehler:
      - wert: ["5.97", "25"]
        meldung: 'Zähle noch einmal: Das Komma wandert um so viele Stellen, wie hinter der ersten Ziffer $5$ noch Ziffern stehen.'
hinweise:
  - 'Verschiebe das Komma, bis genau eine Ziffer ungleich $0$ davor steht. Zähle die Schritte.'
  - 'Komma nach rechts geschoben ergibt eine negative Hochzahl, nach links eine positive.'
loesung: |
  Ansatz: Das Komma so verschieben, dass die Mantisse zwischen $1$ und $10$ liegt, und die Schritte als Hochzahl notieren.
  ---
  a) $0{,}00073$: Das Komma wandert $4$ Stellen nach rechts zu $7{,}3$. Also $7{,}3\cdot 10^{-4}$.
  ---
  b) Hinter der $5$ stehen $24$ weitere Ziffern. Also $5{,}97\cdot 10^{24}$.
  ---
  Kontrolle a): $7{,}3\cdot 0{,}0001 = 0{,}00073$.
```

```aufgabe
id: za-zwischenrunden
titel: Was Zwischenrunden anrichtet
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  a) Berechne $1{,}73^8$ auf zwei Nachkommastellen.

  b) Berechne $(\sqrt3)^8$ exakt.

  c) Wie groß ist der relative Fehler von a) gegenüber b) in Prozent? (Auf zwei Nachkommastellen.)
teile:
  - typ: zahl
    label: 'a)'
    loesung: "1.73^8"
    toleranz: 0.01
    fehler:
      - wert: "13.84"
        meldung: 'Das ist $1{,}73\cdot 8$. Hoch $8$ heißt achtmal mit sich selbst multiplizieren.'
  - typ: zahl
    label: 'b)'
    loesung: "sqrt(3)^8"
    fehler:
      - wert: "27"
        meldung: '$(\sqrt3)^8 = \big((\sqrt3)^2\big)^4 = 3^4$, nicht $3^3$.'
  - typ: zahl
    label: 'c)'
    einheit: "%"
    loesung: "(81 - 1.73^8)/81*100"
    toleranz: 0.02
    fehler:
      - wert: "0.76"
        meldung: 'Das ist die Abweichung absolut. Der relative Fehler teilt sie durch den exakten Wert $81$ und rechnet in Prozent.'
hinweise:
  - '$(\sqrt3)^8 = \big((\sqrt3)^2\big)^4$.'
  - 'Relativer Fehler: Abweichung geteilt durch den exakten Wert, mal $100$ für Prozent.'
loesung: |
  Ansatz: Wir vergleichen das Ergebnis mit gerundeter Basis mit dem exakten Wert.
  ---
  a) $1{,}73^8 \approx 80{,}24$ mit dem Taschenrechner.
  ---
  b) $(\sqrt3)^8 = \big((\sqrt3)^2\big)^4 = 3^4 = 81$.
  ---
  c) $\tfrac{81 - 80{,}24}{81} \approx 0{,}0094$, also etwa $0{,}94\,\%$. Der Fehler von $1{,}73$ gegenüber $\sqrt3$ beträgt nur etwa $0{,}12\,\%$. Die achte Potenz hat ihn ungefähr verachtfacht.
```

```aufgabe
id: za-sonne-erde
titel: Wie weit ist die Sonne entfernt?
niveau: 2
lernziel: 5
kompetenz: modellieren
angabe: |
  Licht braucht von der Sonne zur Erde etwa $8{,}3$ Minuten. Licht ist $3{,}0\cdot 10^8\,\tfrac{\text{m}}{\text{s}}$ schnell.
  Berechne die Entfernung Sonne–Erde in Metern. Gib das Ergebnis in wissenschaftlicher Schreibweise mit zwei signifikanten Stellen an.
teile:
  - typ: zahl
    einheit: m
    loesung: "1.5e11"
    toleranz: 0.06e11
    fehler:
      - wert: "2.49e9"
        meldung: 'Du hast mit $8{,}3$ Sekunden gerechnet. Die Zeit ist in Minuten angegeben und muss zuerst in Sekunden umgerechnet werden.'
      - wert: "1.5e8"
        meldung: 'Das ist die Entfernung in Kilometern. Gefragt sind Meter.'
hinweise:
  - 'Rechne zuerst die Zeit in Sekunden um: $1$ Minute hat $60$ Sekunden.'
  - 'Strecke ist Geschwindigkeit mal Zeit. Rechne Mantisse und Zehnerpotenz getrennt.'
gefuehrt:
  - text: 'Wie viele Sekunden sind $8{,}3$ Minuten?'
    teil:
      typ: zahl
      einheit: s
      loesung: "8.3*60"
      fehler:
        - wert: "8.3"
          meldung: 'Jede Minute hat $60$ Sekunden.'
    erklaerung: '$8{,}3\cdot 60 = 498$ Sekunden, also etwa $4{,}98\cdot 10^2\,\text{s}$.'
  - text: 'Multipliziere mit $3{,}0\cdot 10^8\,\tfrac{\text{m}}{\text{s}}$. Welche Zahl ergibt sich in Metern?'
    teil:
      typ: zahl
      einheit: m
      loesung: "498*3e8"
    erklaerung: '$4{,}98\cdot 3{,}0 = 14{,}94$ und $10^2\cdot 10^8 = 10^{10}$. Also $14{,}94\cdot 10^{10} = 1{,}494\cdot 10^{11}\,\text{m}$.'
  - text: 'Auf wie viele signifikante Stellen darfst du das Ergebnis angeben, und wie lautet es dann?'
    erklaerung: 'Beide Angaben haben zwei signifikante Stellen. Also etwa $1{,}5\cdot 10^{11}\,\text{m}$.'
loesung: |
  Ansatz: Strecke $=$ Geschwindigkeit $\cdot$ Zeit. Vorher die Zeit in Sekunden umrechnen, damit die Einheiten passen.
  ---
  $t = 8{,}3\cdot 60\,\text{s} = 498\,\text{s} = 4{,}98\cdot 10^2\,\text{s}$.
  ---
  $s = 3{,}0\cdot 10^8\,\tfrac{\text{m}}{\text{s}}\cdot 4{,}98\cdot 10^2\,\text{s} = 14{,}94\cdot 10^{10}\,\text{m} = 1{,}494\cdot 10^{11}\,\text{m}$.
  ---
  Mit zwei signifikanten Stellen wie die Angaben: $s \approx 1{,}5\cdot 10^{11}\,\text{m}$, also rund $150$ Millionen Kilometer.
```

```aufgabe
id: za-speicher-einheiten
titel: Terabyte und Tebibyte
niveau: 3
lernziel: 5
kompetenz: anwenden
angabe: |
  Eine Festplatte wird mit $2\,\text{TB}$ verkauft, das sind $2\cdot 10^{12}$ Byte. Das Betriebssystem zeigt die Größe in Tebibyte an. Ein Tebibyte sind $2^{40}$ Byte.

  a) Wie viele Tebibyte zeigt das Betriebssystem an? (Auf zwei Nachkommastellen.)

  b) Um wie viel Prozent ist die angezeigte Zahl kleiner als $2$? (Auf eine Nachkommastelle.)
teile:
  - typ: zahl
    label: 'a)'
    loesung: "2e12/2^40"
    toleranz: 0.005
    fehler:
      - wert: "2"
        meldung: 'Ein Tebibyte ist größer als ein Terabyte, denn $2^{40} \approx 1{,}0995\cdot 10^{12}$. Die Zahl muss also kleiner werden.'
      - wert: "2.2"
        meldung: 'Du hast multipliziert statt dividiert. Gesucht ist, wie oft $2^{40}$ Byte in $2\cdot 10^{12}$ Byte hineinpassen.'
  - typ: zahl
    label: 'b)'
    einheit: "%"
    loesung: "(1 - 2e12/2^40/2)*100"
    toleranz: 0.1
    fehler:
      - wert: "0.18"
        meldung: 'Das ist die Differenz in Tebibyte, nicht in Prozent. Teile sie durch $2$ und rechne in Prozent um.'
hinweise:
  - 'Berechne $2^{40}$ mit dem Taschenrechner oder über $2^{10} = 1024$: $2^{40} = 1024^4$.'
  - 'Anzahl der Tebibyte $= \tfrac{\text{Byte}}{2^{40}}$. Für b) die relative Abweichung von $2$ berechnen.'
loesung: |
  Ansatz: Die Bytezahl bleibt gleich, nur die Einheit ändert sich. Umrechnen heißt durch die Größe der neuen Einheit teilen.
  ---
  $2^{40} = 1\,099\,511\,627\,776 \approx 1{,}0995\cdot 10^{12}$ Byte.
  ---
  a) $\tfrac{2\cdot 10^{12}}{1{,}0995\cdot 10^{12}} \approx 1{,}82$ Tebibyte.
  ---
  b) $\tfrac{2 - 1{,}81899}{2} \approx 0{,}09051$, also etwa $9{,}1\,\%$ weniger. Die Platte ist nicht kleiner, sie wird nur in einer größeren Einheit gemessen.
```

```aufgabe
id: za-sinnvolle-genauigkeit
titel: Wie genau ist eine Fläche?
niveau: 3
lernziel: 5
kompetenz: begruenden
angabe: |
  Ein Blatt wird auf Millimeter genau gemessen: $4{,}3\,\text{cm}$ mal $2{,}7\,\text{cm}$. Der Taschenrechner zeigt für die Fläche $11{,}61$.
  Welche Angabe der Fläche ist sinnvoll?
teile:
  - typ: auswahl
    optionen:
      - '$12\,\text{cm}^2$, also zwei signifikante Stellen wie die Messwerte'
      - '$11{,}61\,\text{cm}^2$, weil der Taschenrechner das so anzeigt'
      - '$11{,}6100\,\text{cm}^2$, damit nichts verloren geht'
      - '$10\,\text{cm}^2$, weil man auf Zehner runden soll'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Die Messwerte sind nur auf zwei signifikante Stellen genau. $4{,}3$ könnte auch $4{,}26$ oder $4{,}34$ sein.
          Damit schwankt die Fläche zwischen etwa $11{,}3$ und $12{,}0$. Die Stellen $61$ sind also nicht gesichert.
      - wert: 2
        meldung: 'Zusätzliche Nullen behaupten eine Genauigkeit, die es nicht gibt.'
      - wert: 3
        meldung: 'Das wirft gesicherte Information weg. Die Messwerte erlauben zwei signifikante Stellen.'
hinweise:
  - 'Wie viele signifikante Stellen haben die beiden Messwerte?'
  - 'Rechne die kleinste und die größte mögliche Fläche aus, wenn jede Länge um bis zu $0{,}05\,\text{cm}$ abweichen kann.'
loesung: |
  Ansatz: Ein Ergebnis kann nicht genauer sein als die ungenaueste Angabe. Beide Längen haben zwei signifikante Stellen.
  ---
  Die wahren Längen liegen zwischen $4{,}25$ und $4{,}35$ beziehungsweise zwischen $2{,}65$ und $2{,}75$ Zentimetern.
  ---
  Kleinste Fläche $4{,}25\cdot 2{,}65 \approx 11{,}26$, größte $4{,}35\cdot 2{,}75 \approx 11{,}96$, jeweils in $\text{cm}^2$. Schon die erste Nachkommastelle ist unsicher.
  ---
  Sinnvoll sind also zwei signifikante Stellen: Die Fläche beträgt etwa $12\,\text{cm}^2$. Diese Faustregel wird in der Physik genauer begründet.
```

## Zahlensysteme: binär und hexadezimal (Vertiefung)

```aufgabe
id: za-check-zweierpotenz
titel: Zweierpotenzen
niveau: 1
art: check
angabe: |
  Berechne $2^6$.
  Vorwissen: [1.9 Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln).
teile:
  - typ: zahl
    loesung: "2^6"
    fehler:
      - wert: "12"
        meldung: '$2^6$ ist nicht $2\cdot 6$, sondern sechsmal die $2$ als Faktor.'
      - wert: "32"
        meldung: 'Das ist $2^5$. Verdopple noch einmal.'
hinweise:
  - 'Verdopple von $1$ aus sechsmal: $2, 4, 8, \dots$'
loesung: |
  $2, 4, 8, 16, 32, 64$.
  ---
  Also $2^6 = 64$. Die Zweierpotenzen $1, 2, 4, 8, 16, 32, 64, \dots$ sind die Stellenwerte im Binärsystem.
```

Diese Lektion geht über den Prüfungsstoff hinaus. Sie gehört zum Lehrplan der Oberstufe und ist für die Informatik
grundlegend: Computer rechnen im **Binärsystem** mit nur zwei Ziffern. Wer Informatik studiert, begegnet Binär- und
Hexadezimalzahlen in der ersten Woche. Die Idee dahinter ist dieselbe wie bei unseren gewohnten Dezimalzahlen.

### Stellenwertsysteme

Im **Dezimalsystem** hat jede Stelle den zehnfachen Wert der Stelle rechts von ihr. Die Zahl $3074$ bedeutet
$$3074 = 3\cdot 10^3 + 0\cdot 10^2 + 7\cdot 10^1 + 4\cdot 10^0 = 3000 + 0 + 70 + 4.$$
Die Zahl $10$ heißt **Basis**. Man braucht genau zehn Ziffern, $0$ bis $9$. Die $0$ ist wichtig: Sie zeigt, dass eine Stelle
besetzt, aber leer ist. Ohne sie könnte man $3074$ nicht von $374$ unterscheiden.

Dasselbe funktioniert mit jeder anderen natürlichen Zahl $b \ge 2$ als Basis. Dann hat jede Stelle den $b$-fachen Wert der
Stelle rechts davon, und man braucht die Ziffern $0$ bis $b - 1$. Die Basis schreibt man klein unten an die Zahl:
$1011_2$ ist eine Zahl im **Binärsystem** (Basis $2$, auch Dualsystem genannt).

### Das Binärsystem

Im Binärsystem gibt es nur die Ziffern $0$ und $1$. Eine solche Ziffer heißt **Bit**. Die Stellenwerte sind von rechts nach
links $2^0 = 1$, $2^1 = 2$, $2^2 = 4$, $2^3 = 8$ und so weiter.

:::beispiel[Von binär nach dezimal]
Welche Zahl ist $101101_2$?

1. Stellenwerte von rechts nach links notieren: $1, 2, 4, 8, 16, 32$.
2. Die Ziffern von rechts nach links lauten $1, 0, 1, 1, 0, 1$. Man addiert die Stellenwerte, unter denen eine $1$ steht: $32 + 8 + 4 + 1$.
3. Ergebnis: $101101_2 = 45$.

Kurz: $101101_2 = 1\cdot 2^5 + 0\cdot 2^4 + 1\cdot 2^3 + 1\cdot 2^2 + 0\cdot 2^1 + 1\cdot 2^0 = 45$.
:::

Für den umgekehrten Weg teilt man immer wieder durch $2$ und notiert die Reste, wie bei der Division mit Rest aus
[1.4 Teilbarkeit](/lernen/mathe3/zahlen/teilbarkeit-primzahlen-ggt-und-kgv). Der erste Rest ist die letzte Ziffer.

:::beispiel[Von dezimal nach binär]
Schreibe $45$ im Binärsystem.

1. $45 : 2 = 22$ Rest $1$. Dann $22 : 2 = 11$ Rest $0$. Dann $11 : 2 = 5$ Rest $1$.
2. $5 : 2 = 2$ Rest $1$. Dann $2 : 2 = 1$ Rest $0$. Dann $1 : 2 = 0$ Rest $1$. Jetzt ist der Quotient $0$, wir hören auf.
3. Die Reste **von unten nach oben** gelesen: $1, 0, 1, 1, 0, 1$. Also $45 = 101101_2$, passend zum vorigen Beispiel.

Warum von unten nach oben? Der erste Rest sagt, ob $45$ gerade ist. Das ist die Einerstelle, also die letzte Ziffer.
:::

:::achtung[Die Reste in der falschen Reihenfolge gelesen]
**Falsch:** $6 : 2 = 3$ Rest $0$, $3 : 2 = 1$ Rest $1$, $1 : 2 = 0$ Rest $1$, also $6 = 011_2$.

**Richtig:** Die Reste werden von unten nach oben gelesen: $6 = 110_2$. Probe: $1\cdot 4 + 1\cdot 2 + 0\cdot 1 = 6$.
Die falsche Zahl $011_2 = 3$ ist die Hälfte. Den ersten Rest liefert die Einerstelle.
:::

### Bits, Bytes und wie viele Werte es gibt

Mit $n$ Bits kann man $2^n$ verschiedene Werte darstellen, nämlich die Zahlen von $0$ bis $2^n - 1$. Ein **Byte** hat $8$ Bit,
also $2^8 = 256$ Werte von $0$ bis $255$. Umgekehrt braucht man für $N$ verschiedene Werte das kleinste $n$ mit $2^n \ge N$.
Mit dem Zweierlogarithmus aus [1.11 Logarithmen](/lernen/mathe3/zahlen/logarithmen) ist das $\log_2 N$, aufgerundet.

### Das Hexadezimalsystem

Lange Binärzahlen sind unübersichtlich. Darum fasst man je $4$ Bits zu einer Ziffer zusammen. $4$ Bits haben $2^4 = 16$
Werte. Das ergibt das **Hexadezimalsystem** mit der Basis $16$. Es braucht $16$ Ziffern: $0$ bis $9$ und dann die Buchstaben
$\text{A} = 10$, $\text{B} = 11$, $\text{C} = 12$, $\text{D} = 13$, $\text{E} = 14$, $\text{F} = 15$.

:::beispiel[Hexadezimal, binär und dezimal]
1. $2\text{F}_{16} = 2\cdot 16 + 15 = 47$.
2. Dieselbe Zahl binär: Jede Hexziffer wird zu $4$ Bits, $2 = 0010_2$ und $\text{F} = 1111_2$. Also $2\text{F}_{16} = 0010\,1111_2 = 101111_2$.
3. Das größte Byte ist $1111\,1111_2 = \text{FF}_{16} = 15\cdot 16 + 15 = 255$. Farben im Web werden so angegeben, etwa `#FF8000` für Orange.
:::

:::achtung[Hexziffern wie Dezimalziffern gelesen]
**Falsch:** $1\text{A}_{16} = 110$, weil $\text{A} = 10$ ist und man „1 und 10“ hintereinanderschreibt.

**Richtig:** $1\text{A}_{16} = 1\cdot 16 + 10 = 26$. Jede Stelle wird mit ihrem Stellenwert multipliziert. Hintereinanderschreiben
funktioniert nur im Dezimalsystem.
:::

:::merke[Umrechnen zwischen Zahlensystemen]
1. Von Basis $b$ nach dezimal: jede Ziffer mit ihrem Stellenwert $b^k$ multiplizieren und alles addieren.
2. Von dezimal nach Basis $b$: immer wieder durch $b$ teilen, die Reste von unten nach oben lesen.
3. Binär und hexadezimal: je $4$ Bits ergeben eine Hexziffer.
4. Mit $n$ Bits lassen sich $2^n$ Werte darstellen.
:::

```reflexion
frage: 'Warum ist eine Binärzahl genau dann gerade, wenn ihre letzte Ziffer $0$ ist?'
antwort: |
  Alle Stellenwerte außer dem letzten sind $2, 4, 8, \dots$ und damit gerade. Ihr Beitrag zur Zahl ist also immer gerade.
  Ob die ganze Zahl gerade ist, entscheidet nur die letzte Stelle mit dem Wert $2^0 = 1$. Steht dort $0$, kommt nichts dazu, und die Zahl ist gerade.
  Steht dort $1$, kommt $1$ dazu, und die Zahl ist ungerade. Im Dezimalsystem ist es mit der Teilbarkeit durch $10$ genauso.
```

### Übungen

```aufgabe
id: za-binaer-dezimal
titel: Binärzahlen lesen
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Rechne ins Dezimalsystem um: a) $11010_2$, b) $1111111_2$
teile:
  - typ: zahl
    label: 'a)'
    loesung: "16 + 8 + 2"
    fehler:
      - wert: "11"
        meldung: 'Du hast die Stellenwerte von links statt von rechts gezählt. Die rechte Stelle hat den Wert $1$.'
      - wert: "3"
        meldung: 'Du hast nur die Einsen gezählt. Jede $1$ steht für ihren Stellenwert $1, 2, 4, 8, 16, \dots$'
  - typ: zahl
    label: 'b)'
    loesung: "2^7 - 1"
    fehler:
      - wert: "128"
        meldung: 'Sieben Einsen ergeben $1 + 2 + 4 + 8 + 16 + 32 + 64$. Das ist um $1$ weniger als $2^7$.'
hinweise:
  - 'Schreib über jede Ziffer ihren Stellenwert, von rechts beginnend mit $1$.'
  - 'Addiere die Stellenwerte über den Einsen.'
loesung: |
  Ansatz: Jede Ziffer mal ihrem Stellenwert, dann addieren. Die Stellenwerte sind von rechts $1, 2, 4, 8, \dots$
  ---
  a) $11010_2$: Einsen an den Stellen $16$, $8$, $2$. Also $16 + 8 + 2 = 26$.
  ---
  b) Sieben Einsen: $1 + 2 + 4 + 8 + 16 + 32 + 64 = 127$. Das ist $2^7 - 1 = 128 - 1$.
```

```aufgabe
id: za-dezimal-binaer
titel: Eine Zahl binär schreiben
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Schreibe $37$ im Binärsystem. Gib die Ziffernfolge ein, zum Beispiel `1011`.
teile:
  - typ: zahl
    label: '$37 =$ (binär)'
    loesung: "100101"
    fehler:
      - wert: "101001"
        meldung: 'Die Reste müssen von unten nach oben gelesen werden. Der erste Rest ist die letzte Ziffer.'
      - wert: "10010"
        meldung: 'Probe: $10010_2 = 16 + 2 = 18$. Eine Ziffer fehlt. Teile so lange, bis der Quotient $0$ ist.'
hinweise:
  - 'Teile immer wieder durch $2$ und schreibe die Reste auf.'
  - 'Lies die Reste von unten nach oben. Probe: Stellenwerte addieren.'
loesung: |
  Ansatz: Wiederholt durch $2$ teilen, Reste notieren, von unten nach oben lesen.
  ---
  $37 : 2 = 18$ R $1$, $18 : 2 = 9$ R $0$, $9 : 2 = 4$ R $1$, $4 : 2 = 2$ R $0$, $2 : 2 = 1$ R $0$, $1 : 2 = 0$ R $1$.
  ---
  Von unten nach oben: $100101_2$. Probe: $32 + 4 + 1 = 37$.
```

```aufgabe
id: za-hexadezimal
titel: Hexadezimalzahlen
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  a) Rechne $3\text{C}_{16}$ ins Dezimalsystem um.

  b) Wie lautet $200$ im Hexadezimalsystem?
teile:
  - typ: zahl
    label: 'a)'
    loesung: "3*16 + 12"
    fehler:
      - wert: "312"
        meldung: 'Die Ziffern werden nicht hintereinandergeschrieben. $3$ steht an der Sechzehnerstelle, $\text{C} = 12$ an der Einerstelle.'
      - wert: "15"
        meldung: 'Du hast die Ziffern addiert. Die $3$ zählt aber $3\cdot 16$.'
  - typ: auswahl
    label: 'b)'
    optionen: ['$\text{C8}_{16}$', '$\text{8C}_{16}$', '$128_{16}$', '$\text{CB}_{16}$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Probe: $\text{8C}_{16} = 8\cdot 16 + 12 = 140$. Die Reste werden von unten nach oben gelesen.'
      - wert: 2
        meldung: '$128_{16} = 1\cdot 256 + 2\cdot 16 + 8 = 296$. Teile $200$ durch $16$ mit Rest.'
      - wert: 3
        meldung: 'Probe: $\text{CB}_{16} = 12\cdot 16 + 11 = 203$. Prüfe den Rest von $200 : 16$.'
hinweise:
  - 'Hexadezimal: Stellenwerte $1$, $16$, $256$. $\text{A} = 10$ bis $\text{F} = 15$.'
  - 'Für b) teile $200$ mit Rest durch $16$. Der Rest ist die letzte Ziffer.'
gefuehrt:
  - text: 'a) Welchen Wert hat die Ziffer $\text{C}$?'
    teil: { typ: zahl, loesung: "12" }
    erklaerung: '$\text{A} = 10$, $\text{B} = 11$, $\text{C} = 12$.'
  - text: 'Welchen Wert hat die Zahl $3\text{C}_{16}$?'
    teil: { typ: zahl, loesung: "3*16 + 12" }
    erklaerung: '$3\cdot 16 + 12 = 48 + 12 = 60$.'
  - text: 'b) Teile $200$ mit Rest durch $16$. Wie groß ist der Rest?'
    teil:
      typ: zahl
      loesung: "200 - 12*16"
      fehler:
        - wert: "12"
          meldung: '$12$ ist der Quotient, denn $12\cdot 16 = 192$. Gefragt ist, was übrig bleibt.'
    erklaerung: '$200 = 12\cdot 16 + 8$. Der Rest $8$ ist die letzte Ziffer, der Quotient $12 = \text{C}$ die Ziffer davor.'
loesung: |
  Ansatz: Stellenwerte $16^1 = 16$ und $16^0 = 1$. In die andere Richtung mit Rest durch $16$ teilen.
  ---
  a) $3\text{C}_{16} = 3\cdot 16 + 12 = 60$.
  ---
  b) $200 : 16 = 12$ Rest $8$, und $12 : 16 = 0$ Rest $12$. Von unten nach oben: $12, 8$, also $\text{C8}_{16}$.
  ---
  Probe b): $12\cdot 16 + 8 = 192 + 8 = 200$.
```

```aufgabe
id: za-bits-anzahl
titel: Wie viele Bits?
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  a) Wie viele verschiedene Werte kann man mit $12$ Bits darstellen?

  b) Ein Sensor liefert $500$ verschiedene Messstufen. Wie viele Bits braucht man mindestens, um jede Stufe zu speichern?
teile:
  - typ: zahl
    label: 'a)'
    loesung: "2^12"
    toleranz: 0.5
    fehler:
      - wert: "24"
        meldung: 'Jedes Bit verdoppelt die Anzahl der Möglichkeiten. Es ist $2^{12}$, nicht $2\cdot 12$.'
      - wert: "4095"
        meldung: '$4095$ ist der größte darstellbare Wert. Mit der $0$ sind es einer mehr.'
  - typ: zahl
    label: 'b)'
    loesung: "9"
    fehler:
      - wert: "8"
        meldung: 'Mit $8$ Bits gibt es nur $2^8 = 256$ Werte. Das reicht für $500$ Stufen nicht.'
      - wert: "250"
        meldung: 'Du hast $500 : 2$ gerechnet. Gesucht ist die Hochzahl $n$ mit $2^n \ge 500$, denn jedes Bit verdoppelt die Anzahl der Werte.'
hinweise:
  - 'Mit $n$ Bits gibt es $2^n$ Werte.'
  - 'Für b): Suche das kleinste $n$ mit $2^n \ge 500$. Probiere $2^8$ und $2^9$.'
loesung: |
  Ansatz: Jedes Bit hat zwei Möglichkeiten. Mit $n$ Bits gibt es deshalb $2\cdot 2\cdots 2 = 2^n$ Werte.
  ---
  a) $2^{12} = 4096$ Werte, nämlich die Zahlen $0$ bis $4095$.
  ---
  b) $2^8 = 256 < 500$, aber $2^9 = 512 \ge 500$. Man braucht also $9$ Bits.
  ---
  Mit dem Logarithmus: $\log_2 500 = \tfrac{\ln 500}{\ln 2} \approx 8{,}97$. Aufgerundet ergibt das $9$.
```

```aufgabe
id: za-binaer-addieren
titel: Binär addieren
niveau: 3
lernziel: 3
kompetenz: verstehen
angabe: |
  Addiere schriftlich im Binärsystem: $1011_2 + 110_2$. Gib das Ergebnis als Binärzahl ein und prüfe es im Dezimalsystem.
teile:
  - typ: zahl
    label: 'Summe (binär)'
    loesung: "10001"
    fehler:
      - wert: "1121"
        meldung: 'Im Binärsystem gibt es keine Ziffer $2$. Aus $1 + 1$ wird $10_2$: Man schreibt $0$ und überträgt $1$.'
      - wert: "1111"
        meldung: 'Probe: $1111_2 = 15$, aber $11 + 6 = 17$. Du hast einen Übertrag vergessen.'
  - typ: zahl
    label: 'Summe (dezimal)'
    loesung: "11 + 6"
    fehler:
      - wert: "1121"
        meldung: 'Rechne beide Binärzahlen zuerst ins Dezimalsystem um: $1011_2 = 11$ und $110_2 = 6$.'
hinweise:
  - 'Addiere stellenweise von rechts wie im Dezimalsystem. Es gilt $1 + 1 = 10_2$: $0$ hinschreiben, $1$ übertragen.'
  - 'Bei $1 + 1 + 1$ (zwei Einsen und ein Übertrag) ergibt sich $11_2$: $1$ hinschreiben, $1$ übertragen.'
loesung: |
  Ansatz: Schriftlich addieren wie gewohnt, nur dass der Übertrag schon bei $2$ entsteht.
  ---
  Einerstelle: $1 + 0 = 1$. Zweierstelle: $1 + 1 = 10_2$, schreibe $0$, Übertrag $1$.
  ---
  Viererstelle: $0 + 1 + 1 = 10_2$, schreibe $0$, Übertrag $1$. Achterstelle: $1 + 0 + 1 = 10_2$, schreibe $0$, Übertrag $1$. Der letzte Übertrag ergibt eine neue Stelle.
  ---
  Ergebnis $10001_2 = 16 + 1 = 17$. Probe: $1011_2 = 11$ und $110_2 = 6$, und $11 + 6 = 17$.
```

```aufgabe
id: za-binaer-gerade
titel: Durch 4 teilbare Binärzahlen
niveau: 3
lernziel: 3
kompetenz: begruenden
angabe: |
  a) Welche der Binärzahlen sind durch $4$ teilbar?

  b) Begründe allgemein, woran man eine durch $4$ teilbare Binärzahl erkennt.
teile:
  - typ: auswahl
    label: 'a)'
    mehrfach: true
    optionen: ['$1100_2$', '$1010_2$', '$10000_2$', '$111_2$']
    richtig: [0, 2]
    fehler:
      - wert: [0, 1, 2]
        meldung: '$1010_2 = 10$ ist gerade, aber nicht durch $4$ teilbar. Schau auf die letzten **zwei** Ziffern.'
      - wert: [0]
        meldung: 'Rechne $10000_2$ um: $16$. Ist $16$ durch $4$ teilbar?'
  - typ: text
    label: 'b)'
    muster: |
      Alle Stellenwerte ab der dritten Stelle von rechts sind $4, 8, 16, \dots$ und damit durch $4$ teilbar.
      Ob die Zahl durch $4$ teilbar ist, entscheiden also nur die letzten beiden Stellen mit den Werten $2$ und $1$.
      Sie liefern $0$, $1$, $2$ oder $3$. Nur bei $00$ ist der Beitrag durch $4$ teilbar. Die Zahl muss also auf $00$ enden.
hinweise:
  - 'Rechne die Zahlen ins Dezimalsystem um und prüfe.'
  - 'Welche Stellenwerte sind sicher durch $4$ teilbar? Welche Stellen bleiben übrig?'
loesung: |
  Ansatz: Stellenwerte ab $4$ sind durch $4$ teilbar. Es kommt nur auf die letzten beiden Ziffern an.
  ---
  a) $1100_2 = 12$ und $10000_2 = 16$ sind durch $4$ teilbar. $1010_2 = 10$ und $111_2 = 7$ sind es nicht.
  ---
  b) Die Stellen ab der dritten von rechts tragen Vielfache von $4$ bei. Die letzten beiden Stellen tragen $0$ bis $3$ bei.
  ---
  Also ist eine Binärzahl genau dann durch $4$ teilbar, wenn sie auf $00$ endet. Das entspricht der Regel „durch $100$ teilbar, wenn die Zahl auf $00$ endet“ im Dezimalsystem.
```

## Gemischte Wiederholung

In diesem Abschnitt sind Aufgaben aus dem ganzen Kapitel gemischt. Weil dies das erste Kapitel des Kurses ist, kommen
alle Aufgaben aus seinen eigenen Lektionen. Manche verbinden zwei Lektionen miteinander. Vor jeder Aufgabe steht die
wichtigste Frage der Prüfung: **Welches Werkzeug passt hier?** Nimm dir diese Frage bewusst vor, bevor du zu rechnen
beginnst. Genau dieses Erkennen übt man nicht, wenn man nur Aufgaben einer einzigen Lektion hintereinander löst.

```aufgabe
id: za-mix-verfahren-exponent
titel: "Welches Werkzeug passt? Die Unbekannte in der Hochzahl"
niveau: 1
lernziel: 7
kompetenz: verstehen
angabe: |
  Du sollst die Gleichung $3^x = 20$ lösen. Du musst nicht rechnen. Welches Werkzeug brauchst du?
teile:
  - typ: auswahl
    optionen:
      - 'den Logarithmus, denn die Unbekannte steht in der Hochzahl'
      - 'die Wurzel, denn es kommt eine Potenz vor'
      - 'die quadratische Ergänzung'
      - 'Kürzen durch $3$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Die Wurzel hilft, wenn die Unbekannte in der **Basis** steht, wie bei $x^3 = 20$. Hier steht sie in der Hochzahl.'
      - wert: 2
        meldung: 'Die quadratische Ergänzung braucht man bei Termen mit $x^2$ und $x$. Hier steht $x$ in der Hochzahl.'
      - wert: 3
        meldung: 'Kürzen setzt einen Bruch mit gemeinsamem Faktor voraus. Hier gibt es keinen Bruch, und die Unbekannte steht in der Hochzahl.'
hinweise:
  - 'Wo steht die Unbekannte, in der Basis oder in der Hochzahl?'
loesung: |
  Die Unbekannte steht in der Hochzahl. Genau dafür ist der Logarithmus gemacht: $x = \log_3 20$.
  ---
  Zur Kontrolle: $x = \tfrac{\ln 20}{\ln 3} \approx 2{,}727$. Plausibel, denn $3^2 = 9$ und $3^3 = 27$.
```

```aufgabe
id: za-mix-verfahren-drei
titel: "Welches Werkzeug passt? Drei Aufgaben"
niveau: 1
lernziel: 8
kompetenz: verstehen
angabe: |
  Ordne jeder Aufgabe das passende Werkzeug zu. Du musst nicht rechnen.

  a) $\dfrac{x^2 - 25}{x + 5}$ vereinfachen.

  b) Den alten Preis bestimmen, wenn ein Artikel nach $15\,\%$ Rabatt $34$ Euro kostet.

  c) $\sqrt{48} + \sqrt{27}$ zusammenfassen.
teile:
  - typ: auswahl
    label: 'a)'
    optionen: ['faktorisieren und kürzen', 'durch einen Änderungsfaktor dividieren', 'teilweise Wurzel ziehen']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Hier gibt es keine Prozentangabe. Es ist ein Bruchterm.'
      - wert: 2
        meldung: 'Hier kommt keine Wurzel vor. Der Zähler ist eine Differenz zweier Quadrate.'
  - typ: auswahl
    label: 'b)'
    optionen: ['faktorisieren und kürzen', 'durch einen Änderungsfaktor dividieren', 'teilweise Wurzel ziehen']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Gesucht ist ein Ausgangswert vor einer Prozentänderung. Dafür macht man die Änderung rückgängig.'
      - wert: 2
        meldung: 'Hier gibt es keine Wurzel. Es geht um einen Preis vor einer Prozentänderung.'
  - typ: auswahl
    label: 'c)'
    optionen: ['faktorisieren und kürzen', 'durch einen Änderungsfaktor dividieren', 'teilweise Wurzel ziehen']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: 'Es gibt keinen Bruch. Zwei Wurzeln sollen zusammengefasst werden, und dafür müssen sie gleichartig gemacht werden.'
      - wert: 1
        meldung: 'Hier gibt es keine Prozentänderung. Es sind zwei Wurzeln.'
hinweise:
  - 'Schau auf die Form: Bruch mit Variablen, Prozentänderung, Wurzeln.'
loesung: |
  a) Bruchterm: faktorisieren und kürzen. $\tfrac{(x - 5)(x + 5)}{x + 5} = x - 5$ für $x \neq -5$.
  ---
  b) Prozent rückwärts: durch den Faktor $0{,}85$ dividieren, $\tfrac{34}{0{,}85} = 40$ Euro.
  ---
  c) Teilweise Wurzel ziehen: $\sqrt{48} = 4\sqrt3$ und $\sqrt{27} = 3\sqrt3$, zusammen $7\sqrt3$.
```

```aufgabe
id: za-mix-verfahren-widerlegen
titel: "Welches Werkzeug passt? Eine Behauptung prüfen"
niveau: 1
lernziel: 1
kompetenz: begruenden
angabe: |
  Jemand behauptet: „Für jede natürliche Zahl $n$ ist $n^2 + 1$ ungerade.“ Wie zeigst du am schnellsten, ob das stimmt?
teile:
  - typ: auswahl
    optionen:
      - 'Ein Gegenbeispiel suchen. Für $n = 1$ ist $n^2 + 1 = 2$ gerade, also ist die Behauptung falsch.'
      - 'Zehn Beispiele ausrechnen. Wenn alle ungerade sind, stimmt die Behauptung.'
      - 'Einen Widerspruchsbeweis führen, weil die Behauptung sicher stimmt.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Beispiele beweisen eine Für-alle-Aussage nie. Hier wäre schon das zweite Beispiel $n = 1$ ein Gegenbeispiel.'
      - wert: 2
        meldung: 'Teste zuerst kleine Zahlen. Für $n = 1$ ergibt sich $2$, und das ist gerade.'
hinweise:
  - 'Eine Für-alle-Aussage widerlegt man mit einem einzigen Gegenbeispiel. Teste $n = 0, 1, 2$.'
loesung: |
  $n = 0$ ergibt $1$ (ungerade), $n = 1$ ergibt $2$ (gerade). Das ist ein Gegenbeispiel.
  ---
  Die Behauptung ist falsch. Genauer: $n^2 + 1$ ist genau dann ungerade, wenn $n$ gerade ist.
```

```aufgabe
id: za-mix-bruch-prozent
titel: Miete und Betriebskosten
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Von einem Monatseinkommen von $960$ Euro gehen $\tfrac38$ an die Miete. Von der Miete sind $12\,\%$ Betriebskosten.
  Wie viel Euro Betriebskosten zahlt die Person im Monat?
teile:
  - typ: zahl
    einheit: Euro
    loesung: "960*3/8*0.12"
    fehler:
      - wert: "115.2"
        meldung: 'Das sind $12\,\%$ vom ganzen Einkommen. Die Betriebskosten sind $12\,\%$ der **Miete**.'
      - wert: "4320"
        meldung: 'Du hast mit $12$ statt mit $0{,}12$ multipliziert. $12\,\%$ sind $\tfrac{12}{100}$.'
hinweise:
  - 'Berechne zuerst die Miete: $\tfrac38$ von $960$ Euro.'
  - '„Von“ bedeutet „mal“. Die $12\,\%$ beziehen sich auf die Miete.'
loesung: |
  Ansatz: Zwei Anteile hintereinander. „Von“ heißt mal, und der zweite Anteil bezieht sich auf das Ergebnis des ersten.
  ---
  Miete: $\tfrac38\cdot 960 = 360$ Euro.
  ---
  Betriebskosten: $360\cdot 0{,}12 = 43{,}20$ Euro. Kurz: $960\cdot\tfrac38\cdot 0{,}12 = 43{,}20$ Euro, das sind $4{,}5\,\%$ des Einkommens.
```

```aufgabe
id: za-mix-potenz-log
titel: Potenz im Logarithmus
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Berechne ohne Taschenrechner: $\log_2\left(8^5\right)$.
teile:
  - typ: zahl
    loesung: "log(8^5, 2)"
    fehler:
      - wert: "243"
        meldung: 'Du hast $(\log_2 8)^5 = 3^5$ gerechnet. Die Hochzahl $5$ steht im Logarithmus und wird zum **Faktor**: $5\cdot\log_2 8$.'
      - wert: "40"
        meldung: 'Der Logarithmus von $8$ zur Basis $2$ ist nicht $8$. Welche Hochzahl macht aus $2$ die $8$?'
hinweise:
  - 'Drittes Logarithmengesetz: $\log_a(u^r) = r\cdot\log_a u$.'
  - 'Oder: $8^5 = (2^3)^5$. Schreibe alles als Potenz von $2$.'
loesung: |
  Ansatz: Die Hochzahl wird zum Faktor vor dem Logarithmus.
  ---
  $\log_2(8^5) = 5\cdot\log_2 8 = 5\cdot 3 = 15$.
  ---
  Kontrolle über Potenzen: $8^5 = (2^3)^5 = 2^{15}$, also $\log_2 2^{15} = 15$.
```

```aufgabe
id: za-mix-periode-wurzel
titel: Die Wurzel einer periodischen Zahl
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Ist $\sqrt{0{,}\overline{4}}$ rational? Berechne den Wert exakt als Bruch.
teile:
  - typ: zahl
    label: '$\sqrt{0{,}\overline{4}} =$'
    loesung: "sqrt(4/9)"
    anzeige: '\tfrac23'
    fehler:
      - wert: "0.2"
        meldung: '$0{,}\overline{4}$ ist nicht $0{,}04$. Schreibe die periodische Zahl zuerst als Bruch: Eine einstellige Periode kommt über $9$.'
      - wert: "sqrt(0.4)"
        meldung: 'Die Periode ist kein abbrechendes $0{,}4$. Es gilt $0{,}\overline4 = \tfrac49$.'
hinweise:
  - 'Wandle $0{,}\overline4$ in einen Bruch um: $10x - x = 4$.'
  - 'Die Wurzel aus einem Bruch ist die Wurzel aus dem Zähler durch die Wurzel aus dem Nenner.'
loesung: |
  Ansatz: Zuerst die periodische Zahl als Bruch schreiben, dann das Wurzelgesetz für Quotienten anwenden.
  ---
  $x = 0{,}\overline4$: $10x - x = 4$, also $x = \tfrac49$.
  ---
  $\sqrt{\tfrac49} = \tfrac{\sqrt4}{\sqrt9} = \tfrac23$. Die Zahl ist also rational. Probe: $\left(\tfrac23\right)^2 = \tfrac49 = 0{,}444\ldots$
```

```aufgabe
id: za-mix-abo
titel: Lohnt sich das Monatsabo?
niveau: 2
lernziel: 9
kompetenz: modellieren
angabe: |
  Ein Monatsabo kostet $33$ Euro. Ein Einzelticket kostet $2{,}40$ Euro. Ab wie vielen Fahrten im Monat ist das Abo günstiger als Einzeltickets?
teile:
  - typ: zahl
    label: 'ab'
    einheit: Fahrten
    loesung: "14"
    fehler:
      - wert: "13.75"
        meldung: 'Fahrten kann man nur ganz zählen. Bei $13$ Fahrten sind Einzeltickets noch billiger. Runde passend.'
      - wert: "13"
        meldung: 'Rechne nach: $13\cdot 2{,}40 = 31{,}20$ Euro, das ist weniger als $33$ Euro. Das Abo lohnt sich erst später.'
hinweise:
  - 'Stelle die Ungleichung „Kosten für $n$ Einzeltickets > Abopreis“ auf.'
  - 'Löse nach $n$ auf und überlege, welche ganze Zahl die kleinste passende ist.'
loesung: |
  Ansatz: Das Abo ist günstiger, wenn $2{,}40\cdot n > 33$ gilt.
  ---
  Durch die positive Zahl $2{,}40$ teilen, das Zeichen bleibt: $n > 13{,}75$.
  ---
  Die kleinste ganze Zahl über $13{,}75$ ist $14$. Ab $14$ Fahrten lohnt sich das Abo. Kontrolle: $14\cdot 2{,}40 = 33{,}60$ Euro $> 33$ Euro.
```

```aufgabe
id: za-mix-zahlenmenge-rechnen
titel: Zuerst rechnen, dann einordnen
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  In welcher **kleinsten** der Mengen $\N$, $\Z$, $\Q$, $\R$ liegt die Zahl $\sqrt8\cdot\sqrt2 - \tfrac72$?
teile:
  - typ: auswahl
    optionen: ['$\N$', '$\Z$', '$\Q$', '$\R$']
    richtig: [2]
    fehler:
      - wert: 3
        meldung: 'Fasse $\sqrt8\cdot\sqrt2$ zuerst zusammen: $\sqrt{16}$. Die Wurzeln verschwinden dabei.'
      - wert: 1
        meldung: 'Rechne fertig: $4 - 3{,}5$. Ist das ganz?'
hinweise:
  - 'Wurzelgesetz: $\sqrt a\cdot\sqrt b = \sqrt{ab}$.'
  - 'Rechne den Ausdruck vollständig aus, bevor du die Zahl einordnest.'
loesung: |
  Ansatz: Erst vereinfachen, dann einordnen. Wurzeln im Ausdruck heißen noch nicht, dass das Ergebnis irrational ist.
  ---
  $\sqrt8\cdot\sqrt2 = \sqrt{16} = 4$. Dann $4 - \tfrac72 = \tfrac12$.
  ---
  $\tfrac12$ ist ein Bruch, aber keine ganze Zahl. Die kleinste Menge ist $\Q$.
```

```aufgabe
id: za-mix-binaerstellen
titel: Wie viele Binärstellen?
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Wie viele Stellen hat die Zahl $1000$ im Binärsystem?
teile:
  - typ: zahl
    loesung: "10"
    fehler:
      - wert: "9"
        meldung: 'Mit $9$ Stellen kommt man nur bis $2^9 - 1 = 511$.'
      - wert: "4"
        meldung: 'Das ist die Stellenzahl im Dezimalsystem. Im Binärsystem braucht man viel mehr Stellen.'
hinweise:
  - 'Eine Binärzahl mit $d$ Stellen liegt zwischen $2^{d - 1}$ und $2^d - 1$.'
  - 'Zwischen welchen Zweierpotenzen liegt $1000$?'
loesung: |
  Ansatz: Wir suchen die Zweierpotenzen, zwischen denen $1000$ liegt.
  ---
  $2^9 = 512 \le 1000 < 1024 = 2^{10}$.
  ---
  Also hat $1000$ im Binärsystem $10$ Stellen, so wie Zahlen von $100$ bis $999$ im Dezimalsystem $3$ Stellen haben. Mit dem Logarithmus: $\log_2 1000 \approx 9{,}97$, abgerundet plus $1$ ergibt $10$.
```

```aufgabe
id: za-mix-wurzel-betrag
titel: Eine Wurzel aus einem Quadrat
niveau: 3
lernziel: 8
kompetenz: rechnen
angabe: |
  Vereinfache $\sqrt{x^2 - 6x + 9}$ für $x < 3$ zu einem Term ohne Wurzel und ohne Betrag.
teile:
  - typ: term
    loesung: "3 - x"
    bereich: [-3, 2.5]
    fehler:
      - wert: "x - 3"
        meldung: 'Teste mit $x = 0$: $\sqrt9 = 3$, aber $0 - 3 = -3$. Die Wurzel ist nie negativ, es gilt $\sqrt{a^2} = |a|$.'
      - wert: "x + 3"
        meldung: 'Die Wurzel aus einer Summe ist nicht die Summe der Wurzeln. Erkenne zuerst ein vollständiges Quadrat.'
hinweise:
  - 'Unter der Wurzel steht eine binomische Formel. Welche?'
  - 'Dann $\sqrt{a^2} = |a|$ verwenden und überlegen, welches Vorzeichen $x - 3$ für $x < 3$ hat.'
loesung: |
  Ansatz: Den Radikanden als vollständiges Quadrat erkennen, dann die Regel $\sqrt{a^2} = |a|$ anwenden.
  ---
  Zweite binomische Formel rückwärts: $x^2 - 6x + 9 = (x - 3)^2$.
  ---
  $\sqrt{(x - 3)^2} = |x - 3|$. Für $x < 3$ ist $x - 3$ negativ, also $|x - 3| = 3 - x$.
  ---
  Probe mit $x = 1$: $\sqrt{1 - 6 + 9} = \sqrt4 = 2$ und $3 - 1 = 2$.
```

## Prüfungsaufgaben

Die folgenden Aufgaben haben das Format der schriftlichen Prüfung: mehrere Teilaufgaben, Begründungen in ganzen Sätzen,
nicht-grafikfähiger Taschenrechner erlaubt. Jede Aufgabe hat einen Zeitrichtwert. Rechne sie mit Stoppuhr und ohne Hilfen.
Schreib zu jedem Teil zuerst den Ansatz hin, denn dafür gibt es auch dann Punkte, wenn sich später ein Rechenfehler einschleicht.

```aufgabe
id: za-pruefung-zahlenmengen
titel: Zahlenmengen und Abgeschlossenheit
niveau: 3
lernziel: 2
kompetenz: begruenden
punkte: 10
quelle: nach Musterprüfung Winkler, Aufgabe 1 (abgewandelt)
angabe: |
  Zeitrichtwert: 15 Minuten. Es gilt $\N = \{0, 1, 2, \dots\}$ und $\N \subset \Z \subset \Q \subset \R$.

  a) $\Q_{>0}$ ist die Menge der positiven Bruchzahlen, $U$ die Menge der ungeraden ganzen Zahlen. Bezüglich welcher Grundrechnungsarten (Division nicht durch $0$) sind sie abgeschlossen?

  b) Für welche der Zahlen $n = 9$, $27$, $64$, $100$ gibt es **keine** natürliche Zahl $m$ mit $m^3 = n$?

  c) Für $m, n \in \N$ sei $r = \dfrac{m + 2}{2n + 1}$. Muss $r$ in $\Z$ liegen? Welches Zahlenpaar ist ein Gegenbeispiel?

  d) Muss $r$ aus c) in $\Q$ liegen? Begründe.

  e) Die Zahl $\sqrt7$ löst die Gleichung $x^2 - 7 = 0$. In welchen der Mengen $\N$, $\Z$, $\Q$, $\R$ liegt sie?
teile:
  - typ: auswahl
    label: 'a) $\Q_{>0}$ ist abgeschlossen bezüglich'
    mehrfach: true
    optionen: ['$+$', '$-$', '$\cdot$', '$:$']
    richtig: [0, 2, 3]
    fehler:
      - wert: [0, 1, 2, 3]
        meldung: 'Teste die Subtraktion: $1 - 2 = -1$ ist nicht positiv.'
  - typ: auswahl
    label: 'a) $U$ ist abgeschlossen bezüglich'
    mehrfach: true
    optionen: ['$+$', '$-$', '$\cdot$', '$:$']
    richtig: [2]
    fehler:
      - wert: [0, 2]
        meldung: '$1 + 3 = 4$ ist gerade. Die Summe zweier ungerader Zahlen ist immer gerade.'
      - wert: [2, 3]
        meldung: '$1 : 3 = \tfrac13$ ist nicht einmal ganz.'
  - typ: auswahl
    label: 'b) keine Kubikzahl'
    mehrfach: true
    optionen: ['$9$', '$27$', '$64$', '$100$']
    richtig: [0, 3]
    fehler:
      - wert: [0]
        meldung: 'Prüfe auch $100$: $4^3 = 64$ und $5^3 = 125$. Dazwischen gibt es keine Kubikzahl.'
      - wert: [0, 2, 3]
        meldung: '$64 = 4\cdot 4\cdot 4 = 4^3$ ist eine Kubikzahl.'
  - typ: auswahl
    label: 'c) Gegenbeispiel $(m, n)$'
    optionen: ['$(1, 1)$', '$(0, 1)$', '$(4, 1)$', '$(1, 0)$']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: '$\tfrac{1 + 2}{2 + 1} = 1$ ist ganz. Das ist kein Gegenbeispiel.'
      - wert: 2
        meldung: '$\tfrac{4 + 2}{3} = 2$ ist ganz. Das ist kein Gegenbeispiel.'
      - wert: 3
        meldung: '$\tfrac{1 + 2}{0 + 1} = 3$ ist ganz. Das ist kein Gegenbeispiel.'
  - typ: text
    label: 'a) und d) Begründungen'
    muster: |
      a) $\Q_{>0}$: Summe, Produkt und Quotient positiver Brüche sind positive Brüche. Gegenbeispiel Subtraktion: $1 - 2 = -1$.
      $U$: $(2k + 1)(2l + 1) = 2(2kl + k + l) + 1$ ist ungerade. Gegenbeispiele: $1 + 1 = 2$, $3 - 1 = 2$, $1 : 3 = \tfrac13$.

      d) Ja. $m + 2$ und $2n + 1$ sind ganze Zahlen, weil $\Z$ bezüglich $+$ und $\cdot$ abgeschlossen ist.
      Der Nenner ist mindestens $1$, also nie $0$. Damit ist $r$ ein Bruch ganzer Zahlen, also $r \in \Q$.
  - typ: auswahl
    label: 'e) $\sqrt7$ liegt in'
    mehrfach: true
    optionen: ['$\N$', '$\Z$', '$\Q$', '$\R$']
    richtig: [3]
    fehler:
      - wert: [2, 3]
        meldung: '$7$ ist keine Quadratzahl. Die Wurzel einer natürlichen Zahl, die keine Quadratzahl ist, ist irrational.'
hinweise:
  - 'Für jedes „nein“ in a) genügt ein Gegenbeispiel. Für jedes „ja“ brauchst du ein allgemeines Argument.'
  - 'Für c) setze kleine Zahlen ein. Für d) verwende die Definition von $\Q$.'
  - 'Für e) erinnere dich an den Beweis für $\sqrt2$ und seine Verallgemeinerung.'
loesung: |
  Ansatz: Abgeschlossenheit mit Gegenbeispiel oder allgemeinem Argument, Zugehörigkeit über die Definitionen der Zahlenmengen.
  ---
  **a)** $\Q_{>0}$: $+$, $\cdot$, $:$ ja, denn Summe, Produkt und Quotient positiver Brüche sind positive Brüche. $-$ nein: $1 - 2 = -1$.
  $U$: nur $\cdot$, denn $(2k + 1)(2l + 1) = 2(2kl + k + l) + 1$. Gegenbeispiele: $1 + 1 = 2$, $3 - 1 = 2$, $1 : 3 = \tfrac13$.
  ---
  **b)** Kubikzahlen sind $0, 1, 8, 27, 64, 125, \dots$ Für $9$ und $100$ gibt es kein natürliches $m$ mit $m^3 = n$.
  ---
  **c)** Nein. $m = 0$, $n = 1$ ergibt $r = \tfrac23 \notin \Z$.
  ---
  **d)** Ja. Zähler und Nenner sind ganze Zahlen, und der Nenner $2n + 1 \ge 1$ ist nie null. Also ist $r$ ein Bruch ganzer Zahlen.
  ---
  **e)** $7$ ist keine Quadratzahl, also ist $\sqrt7$ irrational. Es liegt nur in $\R$, nicht in $\Q$, $\Z$ oder $\N$.
```

```aufgabe
id: za-pruefung-terme
titel: Termdarstellungen vergleichen
niveau: 3
lernziel: 6
kompetenz: begruenden
punkte: 4
quelle: nach Musterprüfung Schranz-Kirlinger (24. 2. 2023), Beispiel 1.1 (abgewandelt)
angabe: |
  Zeitrichtwert: 6 Minuten.

  Es sei $x \in \R$, $x \neq 0$. Welche der folgenden Darstellungen sind für **alle** solchen $x$ gleich $x^2$?
  Begründe jede Entscheidung kurz.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$(-x)^2$'
      - '$(\sqrt x)^4$'
      - '$|x|^2$'
      - '$\dfrac{(2x)^2}{2}$'
      - '$\dfrac{x^3}{x}$'
      - '$\dfrac{1}{x^{-2}}$'
      - '$x^{\frac23}\cdot x^{\frac43}$'
    richtig: [0, 2, 4, 5]
    fehler:
      - wert: [0, 1, 2, 4, 5, 6]
        meldung: '$(\sqrt x)^4$ und $x^{2/3}$ sind für negative $x$ nicht erklärt. Sie gelten also nicht für **alle** $x \neq 0$.'
      - wert: [0, 2, 3, 4, 5]
        meldung: '$\tfrac{(2x)^2}{2} = \tfrac{4x^2}{2} = 2x^2$. Der Faktor $2$ wird mitquadriert.'
      - wert: [2, 4, 5]
        meldung: 'Auch $(-x)^2 = (-x)\cdot(-x) = x^2$. Minus mal minus ergibt plus.'
hinweise:
  - 'Achte darauf, welche Ausdrücke für negative $x$ überhaupt definiert sind.'
  - 'Potenzen mit Bruch-Hochzahlen sind nur für positive Basen erklärt.'
loesung: |
  Ansatz: Jeden Term vereinfachen und prüfen, ob er für negative $x$ überhaupt erklärt ist.
  ---
  $(-x)^2 = x^2$, weil die Hochzahl gerade ist. $|x|^2 = x^2$.
  ---
  $\tfrac{x^3}{x} = x^{3 - 1} = x^2$ für $x \neq 0$. $\tfrac{1}{x^{-2}} = \tfrac{1}{1/x^2} = x^2$.
  ---
  $(\sqrt x)^4$ ist für $x < 0$ nicht definiert. Ebenso $x^{2/3}\cdot x^{4/3}$: Bruch-Hochzahlen gibt es nur für $x > 0$, dort wäre es $x^2$.
  ---
  $\tfrac{(2x)^2}{2} = \tfrac{4x^2}{2} = 2x^2 \neq x^2$. Richtig sind also $(-x)^2$, $|x|^2$, $\tfrac{x^3}{x}$ und $\tfrac{1}{x^{-2}}$.
```

```aufgabe
id: za-pruefung-exponential
titel: Potenzen mit Bruch-Hochzahlen und die Basis e
niveau: 3
lernziel: 7
kompetenz: rechnen
punkte: 10
quelle: nach Musterprüfung Winkler, Aufgabe 3 (abgewandelt)
angabe: |
  Zeitrichtwert: 15 Minuten.

  Gegeben ist die reelle Funktion $f(x) = \dfrac{3^x}{9}$. Sie nimmt nur positive Werte an.

  a) Berechne die Funktionswerte an den Stellen $x = -1, 0, 1, 2, 3$.

  b) Wegen $3^{a + b} = 3^a\cdot 3^b$ gilt für $c = 3^{1/2}$ die Gleichung $c^2 = 3$, und wegen $c > 0$ ist $c = \sqrt3$. Berechne damit $\big(f(\tfrac12)\big)^2$ exakt.

  c) Gib $f\!\left(\tfrac52\right)$ auf eine Nachkommastelle gerundet an.

  d) Wegen $3 = e^{\ln 3}$ lässt sich $f$ als $f(x) = \alpha\, e^{\lambda x}$ schreiben. Bestimme $\alpha$ und $\lambda$.

  e) Um wie viel muss $x$ wachsen, damit sich der Funktionswert verdoppelt? Gib das Ergebnis auf drei Nachkommastellen an.
teile:
  - typ: vektor
    label: 'a) $f(-1), f(0), f(1), f(2), f(3)$'
    loesung: ["1/27", "1/9", "1/3", "1", "3"]
    fehler:
      - wert: ["-1/3", "0", "1/3", "1", "3"]
        meldung: '$3^0 = 1$, nicht $0$, und $3^{-1} = \tfrac13$, nicht $-3$. Eine negative Hochzahl bedeutet den Kehrwert.'
  - typ: zahl
    label: 'b) $\big(f(\tfrac12)\big)^2$'
    loesung: "(3^(1/2)/9)^2"
    anzeige: '\tfrac{1}{27}'
    fehler:
      - wert: "3/9"
        meldung: 'Auch der Nenner wird quadriert: $\left(\tfrac{\sqrt3}{9}\right)^2 = \tfrac{3}{81}$.'
  - typ: zahl
    label: 'c) $f(\tfrac52)$'
    loesung: "1.7"
    toleranz: 0.05
    fehler:
      - wert: "7.5/9"
        meldung: 'Du hast $3\cdot 2{,}5 = 7{,}5$ gerechnet. Die Hochzahl ist kein Faktor: $3^{5/2} = 3^2\cdot 3^{1/2} = 9\sqrt3$.'
  - typ: zahl
    label: 'd) $\alpha$'
    loesung: "1/9"
    fehler:
      - wert: "3"
        meldung: 'Der Faktor vor der Potenz ist $\tfrac19$. Die Basis $3$ steckt im $\lambda$.'
  - typ: zahl
    label: 'd) $\lambda$'
    loesung: "ln(3)"
    anzeige: '\ln 3 \approx 1{,}0986'
    fehler:
      - wert: "3"
        meldung: 'Die Basis muss als Potenz von $e$ geschrieben werden: $3 = e^{\ln 3}$. Also $\lambda = \ln 3$.'
  - typ: zahl
    label: 'e) Zunahme von $x$'
    loesung: "ln(2)/ln(3)"
    toleranz: 0.001
    fehler:
      - wert: "2"
        meldung: 'Der Funktionswert verdreifacht sich schon, wenn $x$ um $1$ wächst. Für eine Verdopplung braucht es weniger. Gesucht ist $d$ mit $3^d = 2$.'
hinweise:
  - '$3^{-1} = \tfrac13$ und $3^0 = 1$.'
  - '$f(\tfrac12) = \tfrac{\sqrt3}{9}$ und $3^{5/2} = 3^2\cdot 3^{1/2} = 9\sqrt3$.'
  - 'Für e): $f(x + d) = 2f(x)$ führt auf $3^d = 2$. Löse mit dem Logarithmus.'
loesung: |
  Ansatz: Potenzgesetze für die Funktionswerte, die Definition des Logarithmus für die Basis $e$ und für die Verdopplung.
  ---
  **a)** $f(-1) = \tfrac{1/3}{9} = \tfrac{1}{27}$, $f(0) = \tfrac19$, $f(1) = \tfrac13$, $f(2) = 1$, $f(3) = 3$. Jeder Schritt um $1$ nach rechts verdreifacht den Wert.
  ---
  **b)** $f(\tfrac12) = \tfrac{3^{1/2}}{9} = \tfrac{\sqrt3}{9}$, also $\big(f(\tfrac12)\big)^2 = \tfrac{3}{81} = \tfrac{1}{27}$.
  ---
  **c)** $f(\tfrac52) = \tfrac{3^{5/2}}{9} = \tfrac{3^2\cdot 3^{1/2}}{9} = \sqrt3 \approx 1{,}7$.
  ---
  **d)** $3^x = (e^{\ln 3})^x = e^{(\ln 3)x}$, also $f(x) = \tfrac19\, e^{(\ln 3)x}$ mit $\alpha = \tfrac19$ und $\lambda = \ln 3 \approx 1{,}099$. Probe bei $x = 0$: $\alpha e^0 = \tfrac19 = f(0)$.
  ---
  **e)** $f(x + d) = \tfrac{3^x\cdot 3^d}{9} = 3^d\cdot f(x)$. Verdopplung heißt $3^d = 2$, also $d = \log_3 2 = \tfrac{\ln 2}{\ln 3} \approx 0{,}631$.
```

```aufgabe
id: za-pruefung-bits
titel: Logarithmen in der Informatik
niveau: 3
lernziel: 7
kompetenz: modellieren
punkte: 8
angabe: |
  Zeitrichtwert: 12 Minuten.

  a) Wie viele Bit braucht man mindestens, um $1\,000\,000$ verschiedene Werte binär zu speichern? Begründe mit einem Logarithmus.

  b) Ein Datenbestand umfasst $2\,\text{TB}$ und wächst jährlich um $35\,\%$. Nach wie vielen Jahren sind es $10\,\text{TB}$? (Auf zwei Nachkommastellen.)

  c) Informatiker rechnen oft mit der Faustregel $2^{10} \approx 10^3$. Wie groß ist der relative Fehler dieser Näherung in Prozent, bezogen auf den exakten Wert $2^{10}$? (Auf eine Nachkommastelle.)
teile:
  - typ: zahl
    label: 'a) Anzahl Bit'
    loesung: "ceil(log(10^6, 2))"
    fehler:
      - wert: "19"
        meldung: 'Mit $19$ Bit gibt es nur $2^{19} = 524\,288$ Werte. Das reicht nicht. Runde $\log_2 10^6 \approx 19{,}93$ **auf**.'
      - wert: "6"
        meldung: 'Das ist die Hochzahl zur Basis $10$. Gefragt ist die Hochzahl zur Basis $2$.'
  - typ: zahl
    label: 'b) Jahre'
    loesung: "ln(5)/ln(1.35)"
    toleranz: 0.01
    fehler:
      - wert: "11.43"
        meldung: 'Du hast linear gerechnet ($8 : 0{,}7$). Bei $35\,\%$ pro Jahr wird jedes Jahr mit $1{,}35$ multipliziert.'
      - wert: "ln(10)/ln(1.35)"
        meldung: 'Die Gleichung lautet $2\cdot 1{,}35^t = 10$. Teile zuerst durch $2$: $1{,}35^t = 5$.'
  - typ: zahl
    label: 'c) relativer Fehler'
    einheit: "%"
    loesung: "(1024 - 1000)/1024*100"
    toleranz: 0.05
    fehler:
      - wert: "24"
        meldung: 'Das ist der absolute Fehler. Teile ihn durch den exakten Wert $1024$ und rechne in Prozent um.'
hinweise:
  - 'Mit $k$ Bit lassen sich $2^k$ Werte darstellen. Gesucht ist das kleinste $k$ mit $2^k \ge 10^6$.'
  - 'b): $2\cdot 1{,}35^t = 10$, also $1{,}35^t = 5$. Logarithmieren.'
  - 'c): relativer Fehler $= \tfrac{\text{exakter Wert} - \text{Näherung}}{\text{exakter Wert}}$.'
loesung: |
  Ansatz: Zweierpotenzen zählen Bits, Logarithmen holen die Hochzahl herunter, und Wachstum heißt Faktor hoch Zeit.
  ---
  **a)** Gesucht ist das kleinste $k$ mit $2^k \ge 10^6$, also $k \ge \log_2 10^6 = \tfrac{6}{\lg 2} \approx 19{,}93$. Damit $k = 20$.
  Kontrolle: $2^{20} = 1\,048\,576 \ge 10^6$, aber $2^{19} = 524\,288 < 10^6$.
  ---
  **b)** $2\cdot 1{,}35^t = 10$, also $1{,}35^t = 5$ und $t = \tfrac{\ln 5}{\ln 1{,}35} \approx \tfrac{1{,}6094}{0{,}3001} \approx 5{,}36$ Jahre, also im Lauf des sechsten Jahres.
  ---
  **c)** $2^{10} = 1024$. Relativer Fehler: $\tfrac{1024 - 1000}{1024} \approx 0{,}0234$, also etwa $2{,}3\,\%$.
```

```aufgabe
id: za-pruefung-irrational
titel: Ist √2 + √3 rational?
niveau: 3
lernziel: 1
kompetenz: begruenden
punkte: 6
angabe: |
  Zeitrichtwert: 12 Minuten.

  a) Zeige, dass $\sqrt6$ irrational ist.

  b) Berechne $(\sqrt2 + \sqrt3)^2$ exakt in der Form $p + q\sqrt6$. Gib $p$ und $q$ an.

  c) Beweise mit a) und b), dass $\sqrt2 + \sqrt3$ irrational ist.
teile:
  - typ: vektor
    label: 'b) $p$ und $q$'
    namen: ['p', 'q']
    loesung: ["5", "2"]
    fehler:
      - wert: ["5", "0"]
        meldung: 'Das gemischte Glied $2\cdot\sqrt2\cdot\sqrt3 = 2\sqrt6$ fehlt. Es ist eine binomische Formel.'
      - wert: ["5", "1"]
        meldung: 'Das gemischte Glied der binomischen Formel lautet $2ab$, hier also $2\sqrt6$.'
  - typ: text
    label: 'a) und c)'
    muster: |
      a) Annahme $\sqrt6 = \tfrac pq$ vollständig gekürzt. Dann $p^2 = 6q^2$, also $p^2$ gerade und damit $p = 2k$. Einsetzen: $4k^2 = 6q^2$,
      also $2k^2 = 3q^2$. Dann ist $3q^2$ gerade, also $q^2$ gerade (weil $3$ ungerade ist) und damit $q$ gerade. Widerspruch zur Kürzung.

      c) Angenommen $r = \sqrt2 + \sqrt3 \in \Q$. Nach b) ist $r^2 = 5 + 2\sqrt6$, also $\sqrt6 = \tfrac{r^2 - 5}{2}$.
      Rechts steht eine rationale Zahl (Abgeschlossenheit von $\Q$), links eine irrationale. Widerspruch, also ist $r$ irrational.
hinweise:
  - 'Für a) wie bei $\sqrt2$: Aus $p^2 = 6q^2$ folgt, dass $p$ gerade ist.'
  - 'Für b) die erste binomische Formel mit $a = \sqrt2$ und $b = \sqrt3$.'
  - 'Für c) die Gleichung aus b) nach $\sqrt6$ auflösen.'
loesung: |
  Ansatz: Zwei Widerspruchsbeweise. Der zweite stützt sich auf den ersten und auf die Abgeschlossenheit von $\Q$.
  ---
  **a)** Annahme: $\sqrt6 = \tfrac pq$, vollständig gekürzt. Dann ist $p^2 = 6q^2 = 2\cdot 3q^2$ gerade, also $p = 2k$.
  ---
  Einsetzen: $4k^2 = 6q^2$, also $2k^2 = 3q^2$. Somit ist $3q^2$ gerade. Da $3$ ungerade ist, muss $q^2$ gerade sein (ungerade mal ungerade ist ungerade), also ist $q$ gerade. Gemeinsamer Teiler $2$, Widerspruch.
  ---
  **b)** $(\sqrt2 + \sqrt3)^2 = 2 + 2\sqrt2\sqrt3 + 3 = 5 + 2\sqrt6$. Also $p = 5$ und $q = 2$.
  ---
  **c)** Annahme: $r = \sqrt2 + \sqrt3 \in \Q$. Dann $\sqrt6 = \tfrac{r^2 - 5}{2}$. Da $\Q$ bezüglich $\cdot$, $-$ und $:$ abgeschlossen ist, wäre $\sqrt6$ rational. Widerspruch zu a).
```

```aufgabe
id: za-pruefung-preise
titel: Preisänderungen mit Steuer
niveau: 3
lernziel: 5
kompetenz: anwenden
punkte: 6
angabe: |
  Zeitrichtwert: 10 Minuten.

  Ein Gerät kostet netto $80$ Euro, dazu kommen $20\,\%$ Umsatzsteuer. Der Händler erhöht den Nettopreis zuerst um $15\,\%$
  und gewährt dann auf den neuen Nettopreis $20\,\%$ Rabatt. Die Steuer wird zuletzt aufgeschlagen.

  a) Wie hoch ist der neue Bruttopreis?

  b) Um wie viel Prozent hat sich der Bruttopreis gegenüber dem ursprünglichen Bruttopreis verändert? (Abnahme negativ.)

  c) Um wie viel Prozent müsste der neue Bruttopreis steigen, damit wieder der ursprüngliche Bruttopreis erreicht wird? (Auf zwei Nachkommastellen.)
teile:
  - typ: zahl
    label: 'a)'
    einheit: "Euro"
    loesung: "80*1.15*0.8*1.2"
    fehler:
      - wert: "91.2"
        meldung: 'Du hast $+15\,\%$ und $-20\,\%$ zu $-5\,\%$ zusammengezählt. Faktoren werden multipliziert: $1{,}15\cdot 0{,}8 = 0{,}92$.'
  - typ: zahl
    label: 'b)'
    einheit: "%"
    loesung: "(1.15*0.8 - 1)*100"
    fehler:
      - wert: "-5"
        meldung: 'Prozentsätze darf man nicht addieren. Multipliziere die Faktoren.'
  - typ: zahl
    label: 'c)'
    einheit: "%"
    loesung: "(1/(1.15*0.8) - 1)*100"
    toleranz: 0.01
    fehler:
      - wert: "8"
        meldung: 'Die $8\,\%$ beziehen sich auf den alten, größeren Preis. Vom kleineren neuen Preis aus braucht man mehr als $8\,\%$.'
hinweise:
  - 'Alle Änderungen sind Faktoren. Die Reihenfolge der Multiplikation spielt keine Rolle.'
  - 'Für c): Gesucht ist der Faktor $q$ mit $88{,}32\cdot q = 96$.'
loesung: |
  Ansatz: Jede Änderung ist ein Faktor. Erhöhung $1{,}15$, Rabatt $0{,}8$, Steuer $1{,}2$.
  ---
  **a)** $80\cdot 1{,}15\cdot 0{,}8\cdot 1{,}2 = 88{,}32$ Euro.
  ---
  **b)** Ursprünglicher Bruttopreis $80\cdot 1{,}2 = 96$ Euro. Faktor $\tfrac{88{,}32}{96} = 1{,}15\cdot 0{,}8 = 0{,}92$, also $-8\,\%$. Die Steuer ändert den Prozentsatz nicht, weil sie in beiden Preisen derselbe Faktor ist.
  ---
  **c)** $q = \tfrac{96}{88{,}32} = \tfrac{1}{0{,}92} \approx 1{,}0870$, also eine Erhöhung um etwa $8{,}70\,\%$. Mehr als $8\,\%$, weil sich die Prozente auf den kleineren Wert beziehen.
```

```aufgabe
id: za-pruefung-abfuellung
titel: Toleranz einer Abfüllanlage
niveau: 3
lernziel: 9
kompetenz: modellieren
punkte: 8
angabe: |
  Zeitrichtwert: 12 Minuten.

  Eine Anlage füllt Packungen mit dem Sollgewicht $500\,\text{g}$. Erlaubt ist eine Abweichung von höchstens $1{,}5\,\%$ des Sollgewichts nach oben oder unten.

  a) Schreibe die Bedingung für das Gewicht $m$ (in Gramm) als Betragsungleichung $|m - 500| \le t$. Wie groß ist $t$?

  b) Gib die erlaubten Gewichte als Intervall an.

  c) Welche der gemessenen Packungen sind in Ordnung?

  d) Bei einer Kontrolle liegen $3$ von $80$ Packungen außerhalb der Toleranz. Wie viel Prozent sind das?
teile:
  - typ: zahl
    label: 'a) $t$'
    einheit: g
    loesung: "500*0.015"
    fehler:
      - wert: "1.5"
        meldung: 'Die Toleranz ist in Prozent angegeben. $1{,}5\,\%$ von $500\,\text{g}$ sind nicht $1{,}5\,\text{g}$.'
  - typ: vektor
    label: 'b) Randpunkte'
    namen: ["links", "rechts"]
    loesung: ["492.5", "507.5"]
    fehler:
      - wert: ["498.5", "501.5"]
        meldung: 'Du hast mit $1{,}5\,\text{g}$ statt mit $1{,}5\,\%$ gerechnet.'
  - typ: auswahl
    label: 'c) in Ordnung'
    mehrfach: true
    optionen: ['$491{,}8\,\text{g}$', '$503{,}2\,\text{g}$', '$507{,}5\,\text{g}$', '$508{,}0\,\text{g}$']
    richtig: [1, 2]
    fehler:
      - wert: [1]
        meldung: 'Die Ungleichung enthält $\le$. Ein Gewicht genau am Rand, $507{,}5\,\text{g}$, ist also noch erlaubt.'
      - wert: [0, 1, 2]
        meldung: '$|491{,}8 - 500| = 8{,}2$ ist größer als die erlaubte Abweichung.'
  - typ: zahl
    label: 'd)'
    einheit: "%"
    loesung: "3/80*100"
    fehler:
      - wert: "0.0375"
        meldung: 'Das ist der Anteil als Dezimalzahl. In Prozent noch mit $100$ multiplizieren.'
      - wert: "26.67"
        meldung: 'Du hast $80 : 3$ gerechnet. Der Anteil ist Teil durch Ganzes.'
hinweise:
  - 'Berechne zuerst die erlaubte Abweichung in Gramm.'
  - '$|m - 500| \le t$ bedeutet $500 - t \le m \le 500 + t$.'
  - 'Für c) berechne bei jeder Packung den Abstand zu $500\,\text{g}$.'
loesung: |
  Ansatz: Abweichung vom Sollwert ist ein Abstand, also ein Betrag. Die Toleranz rechnen wir mit Prozentrechnung in Gramm um.
  ---
  **a)** $t = 500\cdot 0{,}015 = 7{,}5\,\text{g}$. Also $|m - 500| \le 7{,}5$.
  ---
  **b)** $500 - 7{,}5 \le m \le 500 + 7{,}5$, also $m \in [492{,}5;\ 507{,}5]$ in Gramm, geschlossen wegen $\le$.
  ---
  **c)** Abstände: $8{,}2$, $3{,}2$, $7{,}5$, $8{,}0$. In Ordnung sind $503{,}2\,\text{g}$ und $507{,}5\,\text{g}$, denn nur dort ist der Abstand höchstens $7{,}5$.
  ---
  **d)** $\tfrac{3}{80} = 0{,}0375$, also $3{,}75\,\%$ Ausschuss.
```

## Zusammenfassung

```reflexion
frage: 'Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, ohne nachzuschauen. Vergleiche dann mit dem Kasten „Auf einen Blick“ direkt nach dieser Frage.'
antwort: |
  Zum Beispiel:
  1. Die Zahlenmengen $\N \subset \Z \subset \Q \subset \R$ entstehen, weil Gleichungen in der kleineren Menge unlösbar sind. $\sqrt2$ ist kein Bruch, das zeigt ein Widerspruchsbeweis.
  2. Potenz-, Wurzel- und Logarithmengesetze gelten für Produkte und Quotienten, nie für Summen. $\sqrt{a^2} = |a|$.
  3. Prozentänderungen sind Faktoren. Mehrere Änderungen werden multipliziert, Rückrechnen heißt dividieren.
```

:::zusammenfassung
1. **Rechenreihenfolge:** Klammern, Potenzen, Punkt vor Strich, sonst von links nach rechts. Durch $0$ darf man nie teilen. Das Distributivgesetz $a(b + c) = ab + ac$ ist die Grundlage jeder Termumformung.
2. **Zahlenmengen:** $\N \subset \Z \subset \Q \subset \R$. Nur $\Q$ und $\R$ sind bezüglich aller vier Grundrechnungsarten abgeschlossen. Nicht abgeschlossen zeigt man mit einem Gegenbeispiel, abgeschlossen mit einem allgemeinen Argument.
3. **Rational oder irrational:** Eine Zahl ist genau dann rational, wenn ihre Dezimaldarstellung abbricht oder periodisch wird. $\sqrt2$ ist irrational, bewiesen durch Widerspruch mit einem vollständig gekürzten Bruch.
4. **Brüche:** Addieren nur über den Hauptnenner, Dividieren heißt mit dem Kehrwert multiplizieren, kürzen nur Faktoren, nie Summanden. Bruchterme haben eine Definitionsmenge.
5. **Potenzen, Wurzeln, Logarithmen:** $a^{-n} = \tfrac{1}{a^n}$, $a^{m/n} = \sqrt[n]{a^m}$ für $a > 0$, $\sqrt{a^2} = |a|$. $\log_a b$ ist die Hochzahl $x$ mit $a^x = b$. Die Gesetze gelten für Produkte, Quotienten und Potenzen, nicht für Summen. Basiswechsel: $\log_a b = \tfrac{\ln b}{\ln a}$.
6. **Terme:** Binomische Formeln vorwärts und rückwärts, Herausheben, Gruppieren und quadratische Ergänzung. Ein Minus vor der Klammer dreht jedes Vorzeichen um.
7. **Prozent:** Änderungen sind Faktoren $1 \pm \tfrac{p}{100}$. Mehrere Änderungen multiplizieren, zurückrechnen durch Division. Prozentpunkte sind Differenzen von Prozentsätzen.
8. **Ungleichungen, Betrag, Intervalle:** Beim Multiplizieren mit einer negativen Zahl dreht sich das Zeichen um. $|x - a| < r$ heißt $a - r < x < a + r$. Endergebnisse rundet man erst am Schluss und passend zur Genauigkeit der Angaben.
:::

### Die häufigsten Fehler

Jeder Fehler ist mit der Aufgabe verknüpft, in der du ihn gezielt üben kannst. Die Aufgaben geben dir eine Rückmeldung,
wenn du genau diesen Fehler machst.

1. **Von rechts statt von links gerechnet:** $30 - 10 - 5$ ist $15$, nicht $25$. Training: „Fehler finden in einer Rechnung“ in [1.1 Grundrechenarten](/lernen/mathe3/zahlen/grundrechenarten-vorzeichen-klammern-und-rechenreihenfolge).
2. **Falsch verneint:** Das Gegenteil von „alle“ ist „mindestens einer nicht“, nicht „keiner“. Training: „Eine Aussage verneinen“ in [1.2 Mengen und Aussagen](/lernen/mathe3/zahlen/mengen-und-aussagen-die-sprache-der-mathematik).
3. **Beispiel statt Beweis:** Ein passendes Beispiel beweist keine Abgeschlossenheit. Training: „Das passende Gegenbeispiel“ in [1.3 Die Zahlenmengen](/lernen/mathe3/zahlen/die-zahlenmengen-n-z-q-und-r) und „Eine Primzahlformel widerlegen“ in [1.8 Beweisen](/lernen/mathe3/zahlen/beweisen-direkt-durch-kontraposition-und-durch-widerspruch).
4. **Zähler plus Zähler, Nenner plus Nenner:** $\tfrac12 + \tfrac13 \neq \tfrac25$. Training: „Zwei Bruchfehler“ in [1.5 Bruchrechnen](/lernen/mathe3/zahlen/bruchrechnen).
5. **Prozente addiert statt Faktoren multipliziert:** Zweimal $+10\,\%$ ergibt $+21\,\%$. Training: „Aufeinanderfolgende Änderungen“ in [1.6 Prozentrechnung](/lernen/mathe3/zahlen/prozentrechnung).
6. **Vom Endwert falsch zurückgerechnet:** Den Nettopreis erhält man durch Division durch $1{,}2$, nicht durch Multiplikation mit $0{,}8$. Training: „Nettopreis zurückrechnen“ in [1.6 Prozentrechnung](/lernen/mathe3/zahlen/prozentrechnung).
7. **„Gekürzt“ im Beweis für $\sqrt2$ vergessen:** Ohne diese Annahme gibt es keinen Widerspruch. Training: „Lücken im Beweis für √2“ in [1.8 Beweisen](/lernen/mathe3/zahlen/beweisen-direkt-durch-kontraposition-und-durch-widerspruch).
8. **Potenzen und Wurzeln auf Summen verteilt:** $\sqrt{16 + 9} \neq 4 + 3$ und $(a + b)^2 \neq a^2 + b^2$. Training: „Zwei Fehler finden“ in [1.9 Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln).
9. **$\sqrt{a^2} = a$ ohne Betrag:** Für $a = -2$ ist $\sqrt{a^2} = 2$. Training: „Die Wurzel aus einem Quadrat“ in [1.9 Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln).
10. **Hochzahl ein halb als Hälfte gelesen:** $16^{1/2} = 4$, nicht $8$. Training: „Bruch-Hochzahlen ohne Taschenrechner“ in [1.10 Potenzen mit rationalen Hochzahlen](/lernen/mathe3/zahlen/potenzen-mit-rationalen-hochzahlen).
11. **Logarithmusgesetze erfunden:** $\lg(u + v) \neq \lg u + \lg v$ und $\tfrac{\ln b}{\ln a} \neq \ln\tfrac ba$. Training: „Logarithmusfehler finden“ und „Basiswechsel mit dem Taschenrechner“ in [1.11 Logarithmen](/lernen/mathe3/zahlen/logarithmen).
12. **Minus vor der Klammer nur halb angewendet:** $-(x - 5) = -x + 5$. Training: „Ausmultiplizieren und zusammenfassen“ in [1.12 Terme umformen](/lernen/mathe3/zahlen/terme-umformen-binomische-formeln-und-faktorisieren) und „Wo steckt der Fehler?“ in [1.13 Bruchterme](/lernen/mathe3/zahlen/bruchterme).
13. **Aus Summen gekürzt:** $\tfrac{x^2 - 9}{x^2 + 3x} \neq \tfrac{-9}{3x}$. Training: „Bruchterm kürzen“ in [1.13 Bruchterme](/lernen/mathe3/zahlen/bruchterme).
14. **Zeichen beim Teilen durch eine negative Zahl nicht umgedreht:** Aus $-3x < 12$ folgt $x > -4$. Training: „Durch eine negative Zahl teilen“ in [1.14 Ungleichungen](/lernen/mathe3/zahlen/ungleichungen-und-ihre-rechenregeln).
15. **Zu früh gerundet:** Rundungsfehler wachsen beim Potenzieren. Training: „Was Zwischenrunden anrichtet“ in [1.16 Runden](/lernen/mathe3/zahlen/runden-signifikante-stellen-und-zehnerpotenzen).

### Lernziel-Selbstcheck

Bewerte dich bei jedem Lernziel ehrlich mit $1$ (unsicher), $2$ (geht mit Nachschauen) oder $3$ (sicher, auch unter
Zeitdruck). Bei jeder $1$ oder $2$ gehst du zurück zur passenden Lektion und rechnest die Aufgaben auf Niveau 2 und 3 noch einmal.

1. Rechenreihenfolge, Vorzeichen und Rechengesetze. Lektion: [1.1 Grundrechenarten](/lernen/mathe3/zahlen/grundrechenarten-vorzeichen-klammern-und-rechenreihenfolge).
2. Mengen, Aussagen und Beweise. Lektionen: [1.2 Mengen und Aussagen](/lernen/mathe3/zahlen/mengen-und-aussagen-die-sprache-der-mathematik) und [1.8 Beweisen](/lernen/mathe3/zahlen/beweisen-direkt-durch-kontraposition-und-durch-widerspruch).
3. Zahlenmengen, Abgeschlossenheit, rationale und irrationale Zahlen. Lektionen: [1.3 Die Zahlenmengen](/lernen/mathe3/zahlen/die-zahlenmengen-n-z-q-und-r) und [1.7 Dezimaldarstellung](/lernen/mathe3/zahlen/dezimaldarstellung-rationale-und-irrationale-zahlen).
4. Teilbarkeit, ggT, kgV und Zahlensysteme. Lektionen: [1.4 Teilbarkeit](/lernen/mathe3/zahlen/teilbarkeit-primzahlen-ggt-und-kgv) und [1.17 Zahlensysteme](/lernen/mathe3/zahlen/zahlensysteme-binaer-und-hexadezimal-vertiefung).
5. Bruchrechnen. Lektion: [1.5 Bruchrechnen](/lernen/mathe3/zahlen/bruchrechnen).
6. Prozente, Runden und Zehnerpotenzen. Lektionen: [1.6 Prozentrechnung](/lernen/mathe3/zahlen/prozentrechnung) und [1.16 Runden](/lernen/mathe3/zahlen/runden-signifikante-stellen-und-zehnerpotenzen).
7. Potenzen und Wurzeln. Lektionen: [1.9 Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln) und [1.10 Potenzen mit rationalen Hochzahlen](/lernen/mathe3/zahlen/potenzen-mit-rationalen-hochzahlen).
8. Logarithmen. Lektion: [1.11 Logarithmen](/lernen/mathe3/zahlen/logarithmen).
9. Terme und Bruchterme. Lektionen: [1.12 Terme umformen](/lernen/mathe3/zahlen/terme-umformen-binomische-formeln-und-faktorisieren) und [1.13 Bruchterme](/lernen/mathe3/zahlen/bruchterme).
10. Ungleichungen, Betrag und Intervalle. Lektionen: [1.14 Ungleichungen](/lernen/mathe3/zahlen/ungleichungen-und-ihre-rechenregeln) und [1.15 Betrag und Intervalle](/lernen/mathe3/zahlen/betrag-und-intervalle).

## Mündliche Prüfung

```karten
- id: za-karte-rechengesetze
  frage: Welche Rechengesetze gelten für Addition und Multiplikation, und warum gelten sie nicht für Subtraktion und Division?
  antwort: |
    Für Addition und Multiplikation gelten das Kommutativgesetz ($a + b = b + a$, $ab = ba$), das Assoziativgesetz ($(a + b) + c = a + (b + c)$) und das Distributivgesetz $a(b + c) = ab + ac$.
    Für Subtraktion und Division gelten Kommutativ- und Assoziativgesetz nicht. Gegenbeispiele: $7 - 3 = 4$, aber $3 - 7 = -4$. Und $(12 - 4) - 3 = 5$, aber $12 - (4 - 3) = 11$. Ebenso $8 : 4 = 2$, aber $4 : 8 = 0{,}5$.
  kernpunkte:
    - 'Kommutativ-, Assoziativ-, Distributivgesetz nennen'
    - 'Gegenbeispiel für die Subtraktion'
    - 'Distributivgesetz als Grundlage für Ausmultiplizieren und Herausheben'
- id: za-karte-division-null
  frage: Warum darf man nicht durch null dividieren?
  antwort: |
    $a : b = c$ bedeutet $c\cdot b = a$. Für $6 : 0$ bräuchte man eine Zahl, die mit $0$ multipliziert $6$ ergibt. Die gibt es nicht, denn jede Zahl mal $0$ ist $0$.
    Für $0 : 0$ würde jede Zahl passen, das Ergebnis wäre nicht eindeutig. Deshalb ist die Division durch $0$ nicht erklärt. $0 : 6 = 0$ ist dagegen erlaubt.
  kernpunkte:
    - 'Division als Umkehrung der Multiplikation'
    - '$6 : 0$ hat keine Lösung, $0 : 0$ keine eindeutige'
    - '$0 : 6 = 0$ ist erlaubt'
- id: za-karte-zahlenmengen
  frage: Wie sind die Mengen N, Z, Q und R definiert, und wie hängen sie zusammen?
  antwort: |
    $\N = \{0, 1, 2, \dots\}$ sind die natürlichen Zahlen, $\Z$ die ganzen Zahlen (alle Differenzen natürlicher Zahlen), $\Q$ die rationalen Zahlen,
    also Brüche $\tfrac ab$ mit $a, b \in \Z$ und $b \neq 0$. $\R$ enthält zusätzlich die irrationalen Zahlen und füllt die Zahlengerade lückenlos.
    Es gilt $\N \subset \Z \subset \Q \subset \R$. Jede Erweiterung macht eine Gleichung lösbar: $x + 5 = 2$, dann $3x = 2$, dann $x^2 = 2$.
  kernpunkte:
    - 'Definition jeder Menge'
    - 'Teilmengenkette'
    - 'Erweiterung, weil Gleichungen unlösbar sind'
- id: za-karte-abgeschlossenheit
  frage: Was bedeutet es, dass eine Menge bezüglich einer Rechenart abgeschlossen ist? Wie zeigt man es, und wie widerlegt man es?
  antwort: |
    Für alle $a, b$ aus der Menge liegt auch das Ergebnis wieder in der Menge, bei der Division nur für $b \neq 0$. $\Z$ ist bezüglich der Subtraktion abgeschlossen, $\N$ nicht: $2 - 5 = -3 \notin \N$.
    Zum Widerlegen genügt ein Gegenbeispiel. Zum Beweisen braucht man ein allgemeines Argument, zum Beispiel $2k + 2l = 2(k + l)$ für gerade Zahlen.
  kernpunkte:
    - 'Definition mit „für alle“'
    - 'ein Gegenbeispiel widerlegt'
    - 'Beweis allgemein mit Variablen, nicht mit Beispielen'
- id: za-karte-q-division
  frage: Warum ist Q bezüglich der Division (außer durch 0) abgeschlossen, Z aber nicht?
  antwort: |
    $\tfrac ab : \tfrac cd = \tfrac{ad}{bc}$ ist wieder ein Bruch ganzer Zahlen. Der Nenner $bc$ ist nicht null, weil $b$ und $c$ nicht null sind.
    In $\Z$ dagegen ist $1 : 2 = \tfrac12$ keine ganze Zahl.
  kernpunkte:
    - 'Rechnung mit allgemeinen Brüchen'
    - 'Nenner ungleich null begründen'
    - 'Gegenbeispiel $1 : 2$ für $\Z$'
- id: za-karte-wurzel2
  frage: Beweise, dass √2 irrational ist.
  antwort: |
    Widerspruchsbeweis: Angenommen $\sqrt2 = \tfrac pq$ mit vollständig gekürztem Bruch. Dann ist $p^2 = 2q^2$, also $p^2$ gerade und damit $p$ gerade.
    Das gilt, weil ungerade Zahlen ungerade Quadrate haben: $(2k + 1)^2 = 2(2k^2 + 2k) + 1$. Mit $p = 2k$ folgt $q^2 = 2k^2$, also ist auch $q$ gerade.
    Dann haben $p$ und $q$ den gemeinsamen Teiler $2$, im Widerspruch zur Kürzung. Also ist $\sqrt2$ irrational.
  kernpunkte:
    - 'Annahme mit vollständig gekürztem Bruch'
    - 'Begründung „$p^2$ gerade, also $p$ gerade“'
    - 'Widerspruch zur Kürzung'
- id: za-karte-beweisarten
  frage: Welche Beweisarten kennst du? Erkläre den Unterschied zwischen Umkehrung und Kontraposition.
  antwort: |
    Direkter Beweis: von der Voraussetzung zur Behauptung. Kontraposition: Statt „wenn $A$, dann $B$“ zeigt man „wenn nicht $B$, dann nicht $A$“; beide sind gleichwertig.
    Widerspruchsbeweis: das Gegenteil annehmen und zu etwas Unmöglichem führen. Die Umkehrung „wenn $B$, dann $A$“ ist dagegen eine andere Aussage.
    Beispiel: „Durch $4$ teilbar, also gerade“ ist wahr, die Umkehrung ist falsch (Gegenbeispiel $6$).
  kernpunkte:
    - 'direkt, Kontraposition, Widerspruch'
    - 'Kontraposition gleichwertig, Umkehrung nicht'
    - 'Beispiel mit Gegenbeispiel'
- id: za-karte-dezimaldarstellung
  frage: Woran erkennt man an der Dezimaldarstellung, ob eine Zahl rational ist?
  antwort: |
    Eine Zahl ist genau dann rational, wenn ihre Dezimaldarstellung abbricht oder ab einer Stelle periodisch wird. Bei der Division $a : b$ gibt es nur endlich viele mögliche Reste,
    also wiederholt sich spätestens nach $b - 1$ Schritten alles. Umgekehrt lässt sich jede periodische Zahl mit dem Trick $10^k x - x$ als Bruch schreiben, etwa $0{,}\overline{36} = \tfrac{4}{11}$.
  kernpunkte:
    - 'abbrechend oder periodisch'
    - 'Argument mit den Resten'
    - 'Umwandlung periodisch in Bruch'
- id: za-karte-irrational-summe
  frage: Ist die Summe zweier irrationaler Zahlen irrational? Und die Summe einer rationalen und einer irrationalen Zahl?
  antwort: |
    Nicht unbedingt: $\sqrt2 + (-\sqrt2) = 0$ ist rational. Rational plus irrational ist aber immer irrational. Wäre $q + x = s$ rational, dann auch $x = s - q$,
    weil $\Q$ bezüglich der Subtraktion abgeschlossen ist. Das widerspricht der Irrationalität von $x$.
  kernpunkte:
    - 'Gegenbeispiel $\sqrt2 + (-\sqrt2)$'
    - 'Widerspruchsbeweis für rational plus irrational'
    - 'Abgeschlossenheit von $\Q$ verwenden'
- id: za-karte-ggt-kgv
  frage: Wie bestimmt man ggT und kgV zweier Zahlen, und wozu braucht man sie?
  antwort: |
    Man zerlegt beide Zahlen in Primfaktoren. Der ggT nimmt die gemeinsamen Primfaktoren mit der kleineren Hochzahl, das kgV alle Primfaktoren mit der größeren.
    Beispiel: $84 = 2^2\cdot 3\cdot 7$, $90 = 2\cdot 3^2\cdot 5$, also $\operatorname{ggT} = 6$ und $\operatorname{kgV} = 1260$. Es gilt $\operatorname{ggT}\cdot\operatorname{kgV} = 84\cdot 90$.
    Den ggT braucht man zum vollständigen Kürzen, das kgV als Hauptnenner.
  kernpunkte:
    - 'Primfaktorzerlegung'
    - 'kleinere Hochzahlen für den ggT, größere für das kgV'
    - 'Anwendung beim Kürzen und beim Hauptnenner'
- id: za-karte-potenzen-null-negativ
  frage: Warum gilt a hoch 0 gleich 1 und a hoch minus n gleich 1 durch a hoch n?
  antwort: |
    Das sind Festlegungen, die so gewählt sind, dass das Potenzgesetz $\tfrac{a^m}{a^n} = a^{m - n}$ weiter gilt (Permanenzprinzip).
    Für $m = n$ folgt $a^0 = \tfrac{a^n}{a^n} = 1$, und $a^{-n} = \tfrac{a^0}{a^n} = \tfrac{1}{a^n}$, jeweils für $a \neq 0$. Auch die Reihe $8, 4, 2, 1, \tfrac12$ für $2^3, 2^2, 2^1, 2^0, 2^{-1}$ zeigt es.
  kernpunkte:
    - 'Festlegung, keine Rechnung'
    - 'Potenzgesetz soll weiter gelten'
    - 'Beispiel mit Zweierpotenzen'
- id: za-karte-rationale-hochzahl
  frage: Was bedeutet a hoch m durch n, und warum nur für positive Basen?
  antwort: |
    $a^{m/n} = \sqrt[n]{a^m}$, denn nur so bleibt $(a^{1/n})^n = a$ gültig. Für negative Basen wäre der Wert nicht eindeutig:
    $(-8)^{1/3}$ wäre $-2$, aber wegen $\tfrac13 = \tfrac26$ müsste auch $(-8)^{2/6} = \sqrt[6]{64} = 2$ gelten.
  kernpunkte:
    - 'Nenner Wurzel, Zähler Potenz'
    - 'Begründung über die Potenzgesetze'
    - 'Widerspruch bei negativer Basis'
- id: za-karte-wurzel-quadrat
  frage: Ist die Wurzel aus a Quadrat gleich a? Wo spielt das später eine Rolle?
  antwort: |
    Nur für $a \ge 0$. Allgemein gilt $\sqrt{a^2} = |a|$, weil die Quadratwurzel als nicht negative Zahl definiert ist. Beispiel: $\sqrt{(-3)^2} = 3$.
    Deshalb hat $x^2 = 9$ die zwei Lösungen $x = \pm 3$, wie bei den quadratischen Gleichungen in Kapitel 2. Und deshalb ist eine Ankreuzfrage „$\sqrt{a^2} = a$?“ eine Falle.
  kernpunkte:
    - '$\sqrt{a^2} = |a|$ mit Gegenbeispiel'
    - 'Wurzel ist nie negativ'
    - 'Verbindung zu $x^2 = 9$ und Kapitel 2'
- id: za-karte-logarithmus
  frage: Was ist der Logarithmus, und warum gibt es keinen Logarithmus von 0 oder von negativen Zahlen? Wie hängt er mit der Exponentialfunktion zusammen?
  antwort: |
    $\log_a b$ ist die Hochzahl $x$ mit $a^x = b$, für $a > 0$, $a \neq 1$ und $b > 0$. Da $a^x$ für $a > 0$ immer positiv ist, gibt es kein $x$ mit $a^x = 0$ oder $a^x < 0$.
    Logarithmieren und Potenzieren zur selben Basis heben sich auf: $\log_a(a^x) = x$ und $a^{\log_a b} = b$. In Kapitel 4 heißt das: $\log_a$ ist die Umkehrfunktion von $a^x$.
  kernpunkte:
    - 'Definition als Hochzahl'
    - '$a^x$ ist immer positiv'
    - 'Umkehrfunktion von $a^x$ (Kapitel 4)'
- id: za-karte-log-gesetze
  frage: Wie lauten die Logarithmengesetze, woher kommen sie, und warum gibt es kein Gesetz für log(u + v)?
  antwort: |
    $\log(uv) = \log u + \log v$, $\log\tfrac uv = \log u - \log v$, $\log(u^r) = r\log u$. Sie sind die Potenzgesetze, auf die Hochzahlen übersetzt:
    Mit $u = a^x$ und $v = a^y$ ist $uv = a^{x + y}$. Für eine Summe $a^x + a^y$ gibt es kein Potenzgesetz, also auch kein Logarithmusgesetz. Gegenbeispiel: $\lg 20 \neq \lg 10 + \lg 10$.
  kernpunkte:
    - 'drei Gesetze nennen'
    - 'Herleitung aus den Potenzgesetzen'
    - 'Gegenbeispiel für Summen'
- id: za-karte-binomisch
  frage: Warum ist (a + b) zum Quadrat nicht a Quadrat plus b Quadrat?
  antwort: |
    $(a + b)^2 = (a + b)(a + b) = a^2 + ab + ba + b^2 = a^2 + 2ab + b^2$. Geometrisch zerfällt ein Quadrat mit der Seite $a + b$ in $a^2$, $b^2$ und zwei Rechtecke $ab$.
    Gegenbeispiel: $(3 + 4)^2 = 49$, aber $3^2 + 4^2 = 25$. Potenzgesetze gelten für Produkte, nicht für Summen.
  kernpunkte:
    - 'Ausmultiplizieren mit dem Distributivgesetz'
    - 'Bild mit den zwei Rechtecken'
    - 'Zahlen-Gegenbeispiel'
- id: za-karte-ungleichung-negativ
  frage: Warum dreht sich das Ungleichheitszeichen um, wenn man mit einer negativen Zahl multipliziert?
  antwort: |
    Multiplizieren mit $-1$ spiegelt jede Zahl an der $0$. Was vorher links lag, liegt danach rechts. Aus $2 < 5$ wird $-2 > -5$.
    Multiplizieren mit einer beliebigen negativen Zahl ist Spiegeln und Strecken, also dreht sich die Richtung ebenfalls um. Bei einem Term mit unbekanntem Vorzeichen muss man deshalb Fälle unterscheiden.
  kernpunkte:
    - 'Spiegelung an der $0$'
    - 'Zahlenbeispiel'
    - 'Fallunterscheidung bei unbekanntem Vorzeichen'
- id: za-karte-betrag-umgebung
  frage: Was bedeutet |x − a| < r, und wo braucht man das später?
  antwort: |
    $|x - a|$ ist der Abstand von $x$ zu $a$. Die Ungleichung sagt: Dieser Abstand ist kleiner als $r$. Das sind genau die Zahlen mit $a - r < x < a + r$,
    also das offene Intervall $]a - r;\ a + r[$, eine $r$-Umgebung von $a$. In Kapitel 11 heißt $|a_n - a| < \varepsilon$, dass die Folgenglieder im $\varepsilon$-Schlauch um den Grenzwert liegen.
  kernpunkte:
    - 'Betrag als Abstand'
    - 'Übersetzung in eine Doppelungleichung und ein Intervall'
    - 'Verbindung zur Grenzwertdefinition in Kapitel 11'
- id: za-karte-prozentpunkte
  frage: Was ist der Unterschied zwischen Prozent und Prozentpunkten? Warum ergibt plus 20 Prozent und dann minus 20 Prozent nicht den alten Wert?
  antwort: |
    Prozentpunkte sind die Differenz zweier Prozentsätze, Prozent beschreibt die relative Änderung. Von $2\,\%$ auf $3\,\%$ ist ein Plus von einem Prozentpunkt, aber von $50$ Prozent.
    Änderungen sind Faktoren: $1{,}2\cdot 0{,}8 = 0{,}96$. Die zweite Änderung bezieht sich auf den schon veränderten Wert, deshalb bleibt ein Minus von $4\,\%$.
  kernpunkte:
    - 'Differenz gegen relative Änderung'
    - 'Änderungsfaktoren multiplizieren'
    - 'verschiedene Grundwerte'
```
