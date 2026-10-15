---
nummer: 10
titel: Integralrechnung
kurz: Stammfunktionen, das bestimmte Integral als Flächenbilanz, der Hauptsatz, Flächen, Substitution, partielle Integration und Anwendungen wie Bremsweg, Bestand aus Änderungsrate, Volumen und Mittelwert.
teil: A
stunden: 18
pruefungsgewicht: 3
voraussetzungen: [zahlen, gleichungen, funktionen, differentialrechnung]
lernziele:
  - zu einer Funktion mit Grundintegralen, Summen- und Faktorregel und linearer Substitution eine Stammfunktion bestimmen, eine Anfangsbedingung einarbeiten und das Ergebnis durch Ableiten kontrollieren
  - das bestimmte Integral als Flächenbilanz deuten, es mit Rechtecksummen annähern und mit den Integralregeln aus bekannten Integralen neue berechnen
  - bestimmte Integrale mit dem Hauptsatz berechnen und an einer Integralfunktion erklären, warum ihre Ableitung der Integrand ist
  - Flächen zwischen einem Graphen und der x-Achse sowie zwischen zwei Graphen berechnen, auch wenn das Vorzeichen wechselt
  - eine Gleichung mit gesuchter Integrationsgrenze oder gesuchtem Parameter aufstellen, lösen und die Lösungen auf Zulässigkeit prüfen
  - Integrale mit Substitution oder partieller Integration berechnen und begründet entscheiden, welche Technik passt
  - aus einer Änderungsrate (als Term oder als Graph) einen Bestand rekonstruieren, insbesondere Weg und Bremsweg aus der Geschwindigkeit
  - Mittelwerte von Funktionen, Volumen von Rotationskörpern und Arbeit als Integrale aufstellen und mit Einheiten berechnen
  - (Vertiefung) mit der Dichte einer stetigen Zufallsvariablen normieren, Wahrscheinlichkeiten und den Erwartungswert berechnen
  - (Vertiefung) einfache Differentialgleichungen für Wachstum, Zerfall und Abkühlung aufstellen, lösen und deuten
---

Die Integralrechnung ist das Gegenstück zur Differentialrechnung aus
[Kapitel 9](/lernen/mathe3/differentialrechnung). Beim **Ableiten** fragst du: Wie schnell ändert sich
eine Größe gerade? Beim **Integrieren** fragst du umgekehrt: Wie viel hat sich insgesamt
angesammelt, wenn ich zu jedem Zeitpunkt weiß, wie schnell es sich geändert hat?

Ein Bild aus dem Alltag hilft. Der Tacho im Auto zeigt dir in jedem Augenblick die Geschwindigkeit.
Der Kilometerzähler zeigt, wie weit du insgesamt gefahren bist. Ableiten macht aus dem
Kilometerzähler den Tacho. Integrieren macht aus dem Tacho den Kilometerzähler. Genauso wird aus
einer Zuflussrate eine Wassermenge, aus einer Kraft eine Arbeit und aus einer Randkurve eine Fläche
oder ein Volumen.

### Was in der Prüfung vorkommt

Integrale kommen in zwei der drei Musterprüfungen vor, jeweils als Teil einer größeren Aufgabe:

- In der Musterprüfung von Karigl bremst ein Auto. Seine Geschwindigkeit ist eine nach unten
  offene Parabel in der Zeit. Gesucht sind eine Konstante, die Bremsdauer und der Bremsweg als
  Integral.
- In der Prüfung von Schranz-Kirlinger soll eine Stelle $c$ so bestimmt werden, dass zwei Integrale
  über benachbarte Intervalle gleich groß sind.

Beide Aufgabentypen übst du in diesem Kapitel an abgewandelten Varianten mit anderen Zahlen. Die
Originale sind für die [Prüfungssimulationen](/lernen/mathe3/pruefung) reserviert. Dort kannst du dann
ehrlich testen, ob du die Aufgaben ohne Vorlage lösen kannst.

Für die mündliche Prüfung gibt es keine veröffentlichte Fragenliste. Naheliegend sind aber drei Fragen. Erstens: Was ist der Unterschied zwischen Integral
und Fläche? Zweitens: Was besagt der Hauptsatz? Drittens: Warum unterscheiden sich zwei Stammfunktionen
nur um eine Konstante? Zu jeder dieser Fragen findest du eine Karte in [10.15 Mündliche Prüfung](/lernen/mathe3/integralrechnung/muendliche-pruefung).

Dieses Kapitel ist **rechen- und anwendungsorientiert**. Die exakte Theorie folgt in
[Kapitel 14](/lernen/mathe3/integrierbarkeit): Ober- und Untersummen, die genaue Definition der
Integrierbarkeit, der Beweis des Hauptsatzes und uneigentliche Integrale. Zwei Lektionen sind als
**Vertiefung** gekennzeichnet:
[10.10 Dichtefunktionen](/lernen/mathe3/integralrechnung/wahrscheinlichkeiten-als-flaechen-dichtefunktionen-vertiefung)
und [10.11 Differentialgleichungen](/lernen/mathe3/integralrechnung/wachstum-zerfall-abkuehlung-einfache-differentialgleichungen-vertiefung).
Sie gehen über den Stoff der
Studienberechtigungsprüfung hinaus, gehören aber zum Schulstoff der Oberstufe.

:::vorwissen
Du brauchst vor allem drei Dinge aus früheren Kapiteln:

- **Ableitungsregeln** (Potenz-, Faktor-, Summen-, Produkt- und Kettenregel) aus
  [9.5 Ableitungsregeln](/lernen/mathe3/differentialrechnung/grundregeln-potenz-faktor-und-summenregel-und-die-wichtigsten-ableitungen). Jede
  Integrationsregel ist eine rückwärts gelesene Ableitungsregel.
- **Potenzen mit negativen und gebrochenen Hochzahlen**, etwa $\frac{1}{x^2} = x^{-2}$ und
  $\sqrt x = x^{1/2}$, aus [Kapitel 1, Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln) und
  [Kapitel 1, Potenzen mit rationalen Hochzahlen](/lernen/mathe3/zahlen/potenzen-mit-rationalen-hochzahlen).
- **Quadratische Gleichungen lösen** aus
  [Kapitel 2, Quadratische Gleichungen](/lernen/mathe3/gleichungen/quadratische-gleichungen). Damit
  findest du Nullstellen und Schnittstellen.
:::

### Eingangsdiagnose

Teste dich mit den folgenden sieben Kurzfragen. Wenn du bei einer Frage unsicher bist, wiederhole
zuerst den verlinkten Abschnitt. Das spart dir später viel Zeit, denn jede Lücke von dort taucht hier
wieder auf.

```aufgabe
id: ir-ein-potenzregel
titel: Potenzregel beim Ableiten
art: check
niveau: 1
angabe: |
  Was ist die Ableitung von $f(x) = x^5$? Zum Nachlesen:
  [9.5 Ableitungsregeln](/lernen/mathe3/differentialrechnung/grundregeln-potenz-faktor-und-summenregel-und-die-wichtigsten-ableitungen).
teile:
  - typ: auswahl
    optionen:
      - '$f''(x) = 5x^4$'
      - '$f''(x) = x^4$'
      - '$f''(x) = \frac{x^6}{6}$'
      - '$f''(x) = 5x^6$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die Hochzahl wird um $1$ kleiner, das stimmt. Aber die alte Hochzahl wandert als Faktor nach vorne. Dieser Faktor fehlt.
      - wert: 2
        meldung: Hier ist die Hochzahl größer geworden. Das ist die Rückwärtsrichtung, also genau das Integrieren aus diesem Kapitel. Beim Ableiten wird die Hochzahl kleiner.
      - wert: 3
        meldung: Der Faktor $5$ stimmt, aber beim Ableiten wird die Hochzahl um $1$ kleiner, nicht größer.
loesung: |
  Potenzregel: $(x^n)' = n\,x^{n-1}$. Die Hochzahl wandert als Faktor nach vorne, und die neue Hochzahl ist um $1$ kleiner.
  ---
  Für $n = 5$: $(x^5)' = 5x^4$.
```

```aufgabe
id: ir-ein-sinus
titel: Ableitung von Sinus und Kosinus
art: check
niveau: 1
angabe: |
  Welche Aussage stimmt? Zum Nachlesen:
  [9.5 Ableitungsregeln](/lernen/mathe3/differentialrechnung/grundregeln-potenz-faktor-und-summenregel-und-die-wichtigsten-ableitungen).
teile:
  - typ: auswahl
    optionen:
      - '$(\sin x)'' = \cos x$ und $(\cos x)'' = -\sin x$'
      - '$(\sin x)'' = -\cos x$ und $(\cos x)'' = \sin x$'
      - '$(\sin x)'' = \cos x$ und $(\cos x)'' = \sin x$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Das Minus steht an der falschen Stelle. Denk an den Graphen des Sinus bei $x = 0$. Er steigt dort mit Steigung $1$, und $\cos 0 = 1$.
      - wert: 2
        meldung: Ein Minuszeichen fehlt. Der Kosinus fällt kurz nach $x = 0$, seine Ableitung muss dort also negativ sein.
loesung: |
  Der Sinus steigt bei $x = 0$ mit Steigung $1 = \cos 0$. Also ist $(\sin x)' = \cos x$.
  ---
  Der Kosinus fällt kurz nach $x = 0$. Seine Ableitung ist dort negativ, und es gilt $(\cos x)' = -\sin x$.
```

```aufgabe
id: ir-ein-kettenregel
titel: Kettenregel bei einer linearen inneren Funktion
art: check
niveau: 1
angabe: |
  Was ist die Ableitung von $f(x) = e^{3x}$? Zum Nachlesen:
  [9.5 Ableitungsregeln](/lernen/mathe3/differentialrechnung/grundregeln-potenz-faktor-und-summenregel-und-die-wichtigsten-ableitungen).
teile:
  - typ: auswahl
    optionen:
      - '$3e^{3x}$'
      - '$e^{3x}$'
      - '$\frac13 e^{3x}$'
      - '$3x\,e^{3x - 1}$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die äußere Ableitung stimmt, aber die innere Ableitung fehlt. Die innere Funktion ist $3x$, und ihre Ableitung ist $3$.
      - wert: 2
        meldung: Hier wurde durch die innere Ableitung geteilt statt mit ihr multipliziert. Teilen gehört zum Integrieren, nicht zum Ableiten.
      - wert: 3
        meldung: Die Potenzregel gilt nur, wenn die Variable in der Basis steht. Bei $e^{3x}$ steht sie in der Hochzahl.
loesung: |
  Kettenregel: äußere Ableitung mal innere Ableitung. Die äußere Funktion ist $e^u$ mit Ableitung $e^u$, die innere ist $u = 3x$ mit Ableitung $3$.
  ---
  Also $\left(e^{3x}\right)' = e^{3x}\cdot 3 = 3e^{3x}$.
```

```aufgabe
id: ir-ein-produktregel
titel: Produktregel
art: check
niveau: 1
angabe: |
  Was ist die Ableitung von $f(x) = x\,e^x$? Zum Nachlesen:
  [9.5 Ableitungsregeln](/lernen/mathe3/differentialrechnung/grundregeln-potenz-faktor-und-summenregel-und-die-wichtigsten-ableitungen).
teile:
  - typ: auswahl
    optionen:
      - '$e^x + x\,e^x$'
      - '$e^x$'
      - '$x\,e^x$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Du hast die Ableitungen der beiden Faktoren multipliziert ($1 \cdot e^x$). Bei einem Produkt gilt aber die Produktregel mit zwei Summanden.
      - wert: 2
        meldung: Das ist nur einer der beiden Summanden der Produktregel. Der Summand „Ableitung des ersten Faktors mal zweiter Faktor“ fehlt.
loesung: |
  Produktregel: $(u\cdot v)' = u'\cdot v + u\cdot v'$ mit $u = x$ und $v = e^x$.
  ---
  $u' = 1$ und $v' = e^x$, also $(x\,e^x)' = 1\cdot e^x + x\cdot e^x = e^x + x\,e^x$.
```

```aufgabe
id: ir-ein-potenzschreibweise
titel: Wurzeln und Brüche als Potenzen
art: check
niveau: 1
angabe: |
  Welche Umformungen sind richtig? Wähle alle richtigen aus. Zum Nachlesen:
  [Kapitel 1, Potenzen mit rationalen Hochzahlen](/lernen/mathe3/zahlen/potenzen-mit-rationalen-hochzahlen).
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$\frac{1}{x^3} = x^{-3}$'
      - '$\sqrt{x} = x^{1/2}$'
      - '$\sqrt[3]{x^2} = x^{3/2}$'
      - '$\frac{1}{\sqrt x} = x^{-2}$'
    richtig: [0, 1]
    fehler:
      - wert: [0, 1, 2]
        meldung: Bei $\sqrt[3]{x^2}$ steht der Wurzelexponent $3$ im **Nenner** der Hochzahl und die $2$ im Zähler. Prüfe die Reihenfolge.
      - wert: [0, 1, 3]
        meldung: Eine Wurzel im Nenner wird zu einer negativen Hochzahl. Die Wurzel selbst ist aber die Hochzahl $\frac12$, nicht $2$.
loesung: |
  Ein Kehrwert ergibt eine negative Hochzahl: $\frac{1}{x^3} = x^{-3}$. Eine Wurzel ergibt eine Bruch-Hochzahl: $\sqrt x = x^{1/2}$.
  ---
  Richtig wäre außerdem $\sqrt[3]{x^2} = x^{2/3}$ und $\frac{1}{\sqrt x} = x^{-1/2}$. Die Optionen 3 und 4 sind also falsch.
```

```aufgabe
id: ir-ein-quadratisch
titel: Eine quadratische Gleichung lösen
art: check
niveau: 1
angabe: |
  Löse $x^2 - x - 6 = 0$. Gib beide Lösungen an, getrennt durch einen Strichpunkt. Zum Nachlesen:
  [Kapitel 2, Quadratische Gleichungen](/lernen/mathe3/gleichungen/quadratische-gleichungen).
teile:
  - typ: menge
    label: 'Lösungen'
    loesung: ["-2", "3"]
    fehler:
      - wert: ["2", "-3"]
        meldung: Die Vorzeichen sind vertauscht. Setze zur Probe ein. Für $x = 2$ ergibt sich $4 - 2 - 6 = -4$, also nicht $0$.
loesung: |
  Kleine Lösungsformel mit $p = -1$ und $q = -6$: $x = \frac12 \pm \sqrt{\frac14 + 6} = \frac12 \pm \frac52$.
  ---
  Also $x_1 = -2$ und $x_2 = 3$. Probe: $(-2)^2 + 2 - 6 = 0$ und $9 - 3 - 6 = 0$.
```

```aufgabe
id: ir-ein-logarithmus
titel: e und ln heben sich auf
art: check
niveau: 1
angabe: |
  Berechne $\ln\left(e^3\right) + e^{\ln 2}$ ohne Taschenrechner. Zum Nachlesen:
  [Kapitel 4, Logarithmusfunktionen](/lernen/mathe3/funktionen/logarithmusfunktionen).
teile:
  - typ: zahl
    loesung: "3 + 2"
    fehler:
      - wert: "exp(3) + 2"
        meldung: Der natürliche Logarithmus macht die $e$-Funktion rückgängig. $\ln\left(e^3\right)$ ist also die Hochzahl $3$, nicht $e^3$.
      - wert: "6"
        meldung: Die beiden Summanden werden addiert, nicht multipliziert.
loesung: |
  $\ln$ und $e^{(\ldots)}$ sind Umkehrfunktionen. Deshalb ist $\ln\left(e^3\right) = 3$ und $e^{\ln 2} = 2$.
  ---
  Summe: $3 + 2 = 5$.
```

**So ist das Kapitel aufgebaut.** Zuerst lernst du Stammfunktionen kennen. Dann kommt das bestimmte
Integral als Flächenbilanz, und der Hauptsatz verbindet beides. Darauf bauen Flächen, Gleichungen mit
Integralen, die beiden Integrationstechniken und die Anwendungen auf. Am Ende stehen eine gemischte
Wiederholung, Prüfungsaufgaben, eine Zusammenfassung und Karten für die mündliche Prüfung.

## Stammfunktionen: Ableiten rückwärts

```aufgabe
id: ir-stamm-vorwissen
titel: Welche Funktion hat diese Ableitung?
art: check
niveau: 1
angabe: |
  Welche Funktionen haben die Ableitung $4x^3$? Wähle alle passenden aus. Wenn du unsicher bist, wiederhole die
  Potenzregel in [9.5 Ableitungsregeln](/lernen/mathe3/differentialrechnung/grundregeln-potenz-faktor-und-summenregel-und-die-wichtigsten-ableitungen).
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$x^4$'
      - '$12x^2$'
      - '$4x^4$'
      - '$x^4 + 1$'
    richtig: [0, 3]
    fehler:
      - wert: [0]
        meldung: $x^4$ passt. Es gibt aber noch eine zweite passende Funktion. Leite jede Möglichkeit ab und vergleiche mit $4x^3$.
      - wert: [1]
        meldung: $12x^2$ ist die Ableitung **von** $4x^3$. Gesucht ist umgekehrt eine Funktion, deren Ableitung $4x^3$ ist.
loesung: |
  Leite jede Möglichkeit ab: $(x^4)' = 4x^3$, $(12x^2)' = 24x$, $(4x^4)' = 16x^3$ und $(x^4 + 1)' = 4x^3 + 0 = 4x^3$.
  ---
  Passend sind also $x^4$ und $x^4 + 1$. Die Konstante $1$ fällt beim Ableiten weg. Genau das ist der Kern dieser Lektion.
```

Beim Ableiten gehst du von einer Funktion $F$ zu ihrer Ableitung $F'$. Sehr oft kennst du aber nur
die Ableitung und suchst die Funktion selbst. Zwei Beispiele:

- Du kennst die Geschwindigkeit eines Autos zu jedem Zeitpunkt und willst wissen, wo es ist.
- Du kennst, wie schnell eine Population pro Tag wächst, und willst die Größe der Population.

Dieses Rückwärtsrechnen heißt **Integrieren**. Das Ergebnis heißt Stammfunktion.

### Was eine Stammfunktion ist

Eine **Stammfunktion** von $f$ ist eine Funktion $F$, aus der $f$ durch Ableiten „stammt“. Ein
Beispiel: Die Ableitung von $x^3$ ist $3x^2$. Also ist $x^3$ eine Stammfunktion von $3x^2$.

:::definition[Stammfunktion]
Es sei $f$ eine Funktion, die auf einem Intervall $I$ definiert ist. Eine differenzierbare Funktion $F$
heißt **Stammfunktion** von $f$ auf $I$, wenn
$$F'(x) = f(x) \qquad \text{für alle } x \in I.$$
Dabei ist ein **Intervall** ein lückenloses Stück der Zahlengeraden, etwa $[0, 5]$ oder ganz $\R$. Das
Zeichen $\in$ liest man „ist Element von“ oder einfach „liegt in“.
:::

:::beispiel[Eine Funktion, viele Stammfunktionen]
Gesucht sind Stammfunktionen von $f(x) = 3x^2$.

- $F(x) = x^3$ passt, denn $F'(x) = 3x^2$.
- $F_1(x) = x^3 + 7$ passt auch, denn die Ableitung der Konstanten $7$ ist $0$. Also ist $F_1'(x) = 3x^2$.
- Ebenso passt $F_2(x) = x^3 - \pi$.

**Nichtbeispiel:** $G(x) = 6x$ ist **keine** Stammfunktion von $3x^2$. Es gilt $G'(x) = 6 \neq 3x^2$.
Die Funktion $6x$ ist die **Ableitung** von $3x^2$. Wer sie hinschreibt, hat in die falsche Richtung
gerechnet.
:::

Eine Funktion hat also nie nur *eine* Stammfunktion. Man kann jede beliebige Konstante dazuzählen. Der
folgende Satz sagt, dass das auch schon alle sind.

:::satz[Stammfunktionen unterscheiden sich nur um eine Konstante]
Sind $F$ und $G$ zwei Stammfunktionen derselben Funktion $f$ auf einem Intervall $I$, so gibt es eine
Konstante $C \in \R$ mit
$$G(x) = F(x) + C \qquad \text{für alle } x \in I.$$
Umgekehrt ist mit $F$ auch jede Funktion $F + C$ eine Stammfunktion von $f$.
:::

**Worum geht es?** Zwei Funktionen mit derselben Ableitung können sich nur durch eine Verschiebung
nach oben oder unten unterscheiden.

**Ein Bild dazu:** Zwei Autos fahren auf einer Straße. Zu jedem Zeitpunkt sind sie genau gleich
schnell. Dann bleibt ihr Abstand immer gleich. Die Geschwindigkeit ist die Ableitung des Ortes. Gleiche
Ableitung bedeutet also: Die Orte unterscheiden sich um einen festen Betrag.

:::beweis
Wir betrachten die Differenz $D = G - F$. Ihre Ableitung ist $D' = G' - F' = f - f = 0$ auf ganz $I$.

Nun brauchen wir eine Tatsache aus [Kapitel 13](/lernen/mathe3/differenzierbarkeit/satz-von-rolle-und-mittelwertsatz),
den **Mittelwertsatz**. Er sagt: Für zwei Stellen $x_1 < x_2$ in $I$ gibt es eine Stelle $\xi$ (griechisch
„xi“) dazwischen mit
$$D(x_2) - D(x_1) = D'(\xi)\cdot(x_2 - x_1).$$
Weil $D'$ überall null ist, steht rechts $0$. Also ist $D(x_2) = D(x_1)$ für je zwei Stellen. $D$ hat
überall denselben Wert, wir nennen ihn $C$. Damit ist $G = F + C$.

Die Umkehrung folgt direkt aus der Summenregel: $(F + C)' = F' + 0 = f$.
:::

**Was haben wir gezeigt?** Kennst du eine einzige Stammfunktion $F$, kennst du alle. Sie lauten $F + C$
mit einer beliebigen Konstanten $C$.

```aufgabe
id: ir-stamm-check-konstante
titel: Noch eine Stammfunktion
art: check
niveau: 1
angabe: |
  $F(x) = x^2 + 3x$ ist eine Stammfunktion von $f(x) = 2x + 3$. Welche Funktion ist **ebenfalls** eine Stammfunktion von $f$?
teile:
  - typ: auswahl
    optionen:
      - '$G(x) = x^2 + 3x - 10$'
      - '$G(x) = 2x^2 + 3x$'
      - '$G(x) = x^2 + 3$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Hier wurde nicht nur eine Konstante addiert. Leite $G$ ab: $G''(x) = 4x + 3 \neq 2x + 3$.'
      - wert: 2
        meldung: 'Hier fehlt der Summand $3x$. Die Ableitung ist $2x$, nicht $2x + 3$.'
loesung: |
  Nach dem Satz unterscheiden sich alle Stammfunktionen nur um eine Konstante. $x^2 + 3x - 10$ ist $F$ minus $10$.
  ---
  Probe: $G'(x) = 2x + 3 = f(x)$. Die anderen beiden unterscheiden sich von $F$ um einen Ausdruck mit $x$.
```

:::achtung[Nur auf Intervallen: ein Gegenbeispiel]
Die Voraussetzung „Intervall“ ist wichtig. Die Funktion $f(x) = \frac{1}{x^2}$ ist für alle $x \neq 0$
definiert. Diese Menge hat bei $0$ eine Lücke, sie ist also kein Intervall.

Eine Stammfunktion ist $F(x) = -\frac1x$. Nun nehmen wir die Funktion $G$, die für $x > 0$ gleich
$-\frac1x$ ist und für $x < 0$ gleich $-\frac1x + 5$. Auch $G$ hat überall die Ableitung $\frac{1}{x^2}$.
Rechts von $0$ ist aber $G - F = 0$ und links davon $G - F = 5$. Das ist nicht *eine* Konstante.

Falsch wäre also der Schluss „$G = F + C$ mit einem einzigen $C$“. Auf jedem der beiden Teilintervalle
für sich gilt der Satz aber.
:::

### Die Schreibweise: unbestimmtes Integral

Die Menge aller Stammfunktionen schreibt man als **unbestimmtes Integral**:
$$\int f(x)\,\dd x = F(x) + C, \qquad C \in \R.$$
Dabei gilt:

- Das Zeichen $\int$ ist ein langgezogenes S. Es steht für „Summe“. Warum, siehst du in [10.2 Das bestimmte Integral als Flächenbilanz](/lernen/mathe3/integralrechnung/das-bestimmte-integral-als-flaechenbilanz).
- $f(x)$ heißt **Integrand**. Das ist die Funktion, die integriert wird.
- $\dd x$ sagt, nach welcher Variablen integriert wird. Hier ist es $x$.
- $C$ heißt **Integrationskonstante**. Sie steht für eine beliebige reelle Zahl.

Ein Beispiel: $\int 3x^2\,\dd x = x^3 + C$. Man liest: „Das Integral von $3x^2$ nach $x$ ist $x^3 + C$.“

:::merke[Probe durch Ableiten]
Ob $\int f(x)\,\dd x = F(x) + C$ stimmt, prüfst du **immer** durch Ableiten. Es muss $F'(x) = f(x)$
herauskommen. Ableiten ist reine Routine, Integrieren nicht. Die Probe kostet zehn Sekunden und fängt
fast jeden Fehler ab.
:::

```aufgabe
id: ir-stamm-check-probe
titel: Eine Behauptung durch Ableiten prüfen
art: check
niveau: 1
angabe: |
  Jemand behauptet: $\int 4x^3\,\dd x = x^4 + 4x + C$. Stimmt das? Prüfe durch Ableiten.
teile:
  - typ: auswahl
    optionen:
      - 'Nein, denn die Ableitung von $x^4 + 4x$ ist $4x^3 + 4$.'
      - 'Ja, denn $x^4$ hat die Ableitung $4x^3$.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Der Summand $4x$ hat die Ableitung $4$. Die ganze Ableitung ist also $4x^3 + 4$, nicht $4x^3$.'
loesung: |
  Ableiten: $(x^4 + 4x)' = 4x^3 + 4$. Das ist nicht $4x^3$.
  ---
  Die Behauptung ist falsch. Richtig ist $\int 4x^3\,\dd x = x^4 + C$. Der Summand $4x$ gehört nicht dazu.
```

### Grundintegrale

Wie findet man eine Stammfunktion von $x^2$? Wir raten zuerst $x^3$, weil beim Ableiten die Hochzahl um
$1$ kleiner wird. Die Probe ergibt $(x^3)' = 3x^2$. Das ist dreimal zu viel. Also teilen wir durch $3$:
$\left(\frac{x^3}{3}\right)' = \frac{3x^2}{3} = x^2$. Es passt.

Dasselbe Muster gilt für jede Hochzahl $n$: **Hochzahl um $1$ erhöhen, dann durch die neue Hochzahl
teilen.** Liest man auf diese Weise jede Ableitungsregel rückwärts, entsteht die folgende Tabelle. Sie
steht in der Schulformelsammlung. Du solltest sie trotzdem können und jede Zeile durch Ableiten
begründen können.

| Funktion $f(x)$ | Stammfunktion $F(x)$ | Probe durch Ableiten |
|---|---|---|
| $x^n$ mit $n \neq -1$ | $\dfrac{x^{n+1}}{n+1}$ | $\left(\frac{x^{n+1}}{n+1}\right)' = \frac{(n+1)\,x^n}{n+1} = x^n$. |
| $\dfrac{1}{x}$ | $\ln\lvert x\rvert$ | Für $x > 0$ ist $(\ln x)' = \frac1x$. |
| $e^x$ | $e^x$ | $(e^x)' = e^x$. |
| $a^x$ mit $a > 0$, $a \ne 1$ | $\dfrac{a^x}{\ln a}$ | $(a^x)' = a^x \ln a$, also passt das Teilen durch $\ln a$. |
| $\sin x$ | $-\cos x$ | $(-\cos x)' = -(-\sin x) = \sin x$. |
| $\cos x$ | $\sin x$ | $(\sin x)' = \cos x$. |
| $\dfrac{1}{\cos^2 x}$ | $\tan x$ | $(\tan x)' = \frac{1}{\cos^2 x}$. |

Zwei Zeilen brauchen eine Erklärung:

- **Warum steht bei $\frac1x$ ein Betrag?** Der Betrag $\lvert x\rvert$ ist der Abstand von $x$ zur $0$,
  also immer positiv. Der Logarithmus ist nur für positive Zahlen definiert. Für $x < 0$ gilt
  $(\ln(-x))' = \frac{1}{-x}\cdot(-1) = \frac1x$ nach der Kettenregel. Mit dem Betrag deckt eine Formel
  beide Fälle ab.
- **Warum gilt die Potenzregel nicht für $n = -1$?** Dann stünde $\frac{x^0}{0}$ da, und durch $0$ darf
  man nicht teilen. Genau diese Lücke füllt der Logarithmus.

```aufgabe
id: ir-stamm-check-tabelle
titel: Die Tabelle rückwärts lesen
art: check
niveau: 1
angabe: |
  Welche Funktion ist eine Stammfunktion von $\cos x$?
teile:
  - typ: auswahl
    optionen:
      - '$\sin x$'
      - '$-\sin x$'
      - '$-\cos x$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Leite $-\sin x$ ab: Das ergibt $-\cos x$. Das Vorzeichen stimmt nicht.'
      - wert: 2
        meldung: '$-\cos x$ ist die Stammfunktion des **Sinus**. Leite $-\cos x$ zur Probe ab.'
loesung: |
  Gesucht ist eine Funktion mit Ableitung $\cos x$. Aus der Tabelle: $(\sin x)' = \cos x$.
  ---
  Also ist $\sin x$ eine Stammfunktion von $\cos x$. Das Minus gehört nur zur Stammfunktion des Sinus.
```

Die Potenzregel deckt auch Wurzeln und Brüche ab, wenn man sie vorher als Potenz schreibt. Zum Beispiel
ist $\sqrt{x} = x^{1/2}$, $\sqrt[3]{x^2} = x^{2/3}$ und $\frac{1}{x^3} = x^{-3}$.

:::beispiel[Potenzregel mit Wurzeln und Brüchen]
**Erstes Integral:** $\int \sqrt{x}\,\dd x$.

Wir schreiben die Wurzel als Potenz, $\sqrt x = x^{1/2}$. Dann erhöhen wir die Hochzahl um $1$ auf
$\frac32$ und teilen durch $\frac32$. Teilen durch $\frac32$ ist dasselbe wie Malnehmen mit $\frac23$:
$$\int x^{1/2}\,\dd x = \frac{x^{3/2}}{3/2} + C = \frac{2}{3}\,x^{3/2} + C = \frac23\,x\sqrt{x} + C.$$

**Zweites Integral:** $\int \frac{1}{x^3}\,\dd x$.

Wir schreiben den Bruch als Potenz, $\frac{1}{x^3} = x^{-3}$. Die Hochzahl $-3$ wird um $1$ erhöht, das
ergibt $-2$. Dann teilen wir durch $-2$:
$$\int x^{-3}\,\dd x = \frac{x^{-2}}{-2} + C = -\frac{1}{2x^2} + C.$$
**Probe:** $\left(-\tfrac12 x^{-2}\right)' = -\tfrac12\cdot(-2)\,x^{-3} = x^{-3}$. Es stimmt.
:::

### Summen- und Faktorregel

Ableiten darf man gliedweise, und Faktoren bleiben stehen. Deshalb gilt dasselbe beim Integrieren.

:::satz[Summen- und Faktorregel]
Haben $f$ und $g$ Stammfunktionen und ist $k$ eine reelle Zahl, dann gilt
$$\int \big(f(x) + g(x)\big)\,\dd x = \int f(x)\,\dd x + \int g(x)\,\dd x \quad\text{und}\quad \int k\, f(x)\,\dd x = k\int f(x)\,\dd x.$$
:::

Damit integrierst du jedes Polynom Summand für Summand.

:::beispiel[Ein Polynom gliedweise]
Gesucht ist $\int \left(4x^3 - 6x^2 + 2x - 5\right)\dd x$.

- $\int 4x^3\,\dd x = 4\cdot\frac{x^4}{4} = x^4$.
- $\int 6x^2\,\dd x = 6\cdot\frac{x^3}{3} = 2x^3$.
- $\int 2x\,\dd x = 2\cdot\frac{x^2}{2} = x^2$.
- $\int 5\,\dd x = 5x$, denn die Ableitung von $5x$ ist $5$.

Zusammen ergibt das $x^4 - 2x^3 + x^2 - 5x + C$. Die Konstante schreibt man nur einmal an. **Probe:**
$(x^4 - 2x^3 + x^2 - 5x)' = 4x^3 - 6x^2 + 2x - 5$. Es stimmt.
:::

### Lineare Substitution: durch die innere Ableitung teilen

Wie integriert man $e^{3x}$? Wir raten $e^{3x}$ und machen die Probe mit der Kettenregel:
$\left(e^{3x}\right)' = 3e^{3x}$. Das ist dreimal zu viel. Also teilen wir durch $3$ und erhalten
$\frac13 e^{3x}$. Die Probe ergibt jetzt $\frac13\cdot 3e^{3x} = e^{3x}$.

Das Muster: Steht im Argument eine **lineare** Funktion $ax + b$, dann teilst du durch die innere
Ableitung $a$. „Linear“ heißt, dass $x$ nur mit der Hochzahl $1$ vorkommt.

:::satz[Lineare Substitution]
Ist $F$ eine Stammfunktion von $f$ und $a \neq 0$, dann gilt
$$\int f(ax + b)\,\dd x = \frac{1}{a}\,F(ax + b) + C.$$
:::

Der Grund ist die Kettenregel. Leitet man $\frac1a F(ax + b)$ ab, kommt die innere Ableitung $a$ als
Faktor dazu: $\frac1a \cdot F'(ax + b)\cdot a = f(ax + b)$. Das $\frac1a$ hebt diesen Faktor genau auf.

:::beispiel[Vier Integrale mit linearer innerer Funktion]
- $\int e^{3x}\,\dd x = \frac{1}{3}e^{3x} + C$. Die innere Ableitung ist $3$.
- $\int \cos(2x - 1)\,\dd x = \frac12 \sin(2x - 1) + C$. Die innere Ableitung ist $2$.
- $\int (5x + 2)^4\,\dd x = \frac{1}{5}\cdot\frac{(5x + 2)^5}{5} + C = \frac{(5x + 2)^5}{25} + C$. Erst
  die Potenzregel, dann durch die innere Ableitung $5$ teilen.
- $\int \frac{1}{2x + 1}\,\dd x = \frac12 \ln\lvert 2x + 1\rvert + C$. Die innere Ableitung ist $2$.
:::

:::achtung[Keine Produkt- oder Quotientenregel beim Integrieren]
Für Produkte und Quotienten gibt es **keine** so einfache Regel. Eine typische Fehlrechnung:
$$\int x \cdot e^x\,\dd x \overset{?}{=} \frac{x^2}{2}\cdot e^x.$$
Die Probe deckt den Fehler auf. Nach der Produktregel ist
$\left(\frac{x^2}{2}e^x\right)' = x\,e^x + \frac{x^2}{2}e^x$. Das ist nicht $x\,e^x$.

Was stattdessen hilft: erst **umformen** (ausmultiplizieren oder einen Bruch aufteilen), dann gliedweise
integrieren. Bei echten Produkten wie $x\,e^x$ helfen [10.6 Substitution](/lernen/mathe3/integralrechnung/substitution-die-kettenregel-rueckwaerts) und
[10.7 Partielle Integration](/lernen/mathe3/integralrechnung/partielle-integration-die-produktregel-rueckwaerts). Ein Beispiel für das Umformen:
$\frac{x^2 + 1}{x} = \frac{x^2}{x} + \frac1x = x + \frac1x$, also
$\int \frac{x^2 + 1}{x}\,\dd x = \frac{x^2}{2} + \ln\lvert x\rvert + C$.
:::

:::achtung[Vier häufige Einzelfehler]
- **Falsch:** $\int \frac{1}{x^2}\,\dd x = \ln(x^2)$. **Richtig:** Schreib $\frac{1}{x^2} = x^{-2}$. Die
  Potenzregel mit $n = -2$ ergibt $\frac{x^{-1}}{-1} = -\frac{1}{x} + C$. Der Logarithmus gehört nur zu $\frac1x$.
- **Falsch:** $\int \sin x\,\dd x = \cos x$. **Richtig:** $-\cos x + C$, denn $(-\cos x)' = \sin x$. Das
  Minus gehört zur Stammfunktion des **Sinus**.
- **Falsch:** $\int e^{2x}\,\dd x = 2e^{2x}$. Das ist die Ableitung. **Richtig:** $\frac12 e^{2x} + C$.
  Beim Integrieren teilt man durch die innere Ableitung.
- **Falsch:** $\int 7\,\dd x = 0$. **Richtig:** $7x + C$, denn die Ableitung von $7x$ ist $7$.
:::

### Stammfunktion mit Anfangsbedingung

Oft ist nicht irgendeine Stammfunktion gesucht, sondern genau die eine, die einen bestimmten Wert hat.
Diese Zusatzbedingung heißt **Anfangsbedingung**. Sie legt die Konstante $C$ fest.

:::beispiel[Ort aus Geschwindigkeit]
Ein Körper bewegt sich mit der Geschwindigkeit $v(t) = 6t - 2$ (in Meter pro Sekunde, $t$ in
Sekunden). Zur Zeit $t = 1$ s ist er am Ort $s(1) = 5$ m. Wo ist er zur Zeit $t$?

1. **Ansatz:** Der Ort $s$ ist eine Stammfunktion der Geschwindigkeit, denn $s'(t) = v(t)$. Also ist
   $s(t) = 3t^2 - 2t + C$.
2. **Konstante bestimmen:** Wir setzen $t = 1$ ein: $s(1) = 3 - 2 + C = 1 + C$. Das soll $5$ sein. Also
   ist $C = 4$.
3. **Ergebnis:** $s(t) = 3t^2 - 2t + 4$ (in Meter).
4. **Probe:** $s'(t) = 6t - 2 = v(t)$, und $s(1) = 3 - 2 + 4 = 5$. Beides stimmt.
:::

:::merke[Rezept: Stammfunktion bestimmen]
1. Den Integranden in eine Summe von Grundfunktionen umformen. Wurzeln und Brüche werden zu Potenzen,
   Produkte werden ausmultipliziert, Brüche aufgeteilt.
2. Gliedweise mit den Grundintegralen, der Faktorregel und der linearen Substitution integrieren.
3. $+\,C$ anhängen. Bei einer Anfangsbedingung $C$ durch Einsetzen bestimmen.
4. **Probe durch Ableiten.**
:::

```reflexion
frage: Beim Ableiten von $x^3 + 7$ verschwindet die $7$. Warum muss man deshalb beim Integrieren „$+\,C$“ schreiben, beim Ableiten aber nie?
antwort: |
  Ableiten ist eindeutig: Zu jeder Funktion gibt es genau eine Ableitung. Beim Ableiten geht aber Information
  verloren, nämlich jede additive Konstante. Wer nur die Ableitung $3x^2$ kennt, kann nicht wissen, ob die
  ursprüngliche Funktion $x^3$, $x^3 + 7$ oder $x^3 - \pi$ war. Das „$+\,C$“ sagt ehrlich: Alle diese Funktionen
  kommen in Frage. Erst eine Zusatzinformation, etwa eine Anfangsbedingung, legt $C$ fest.
```

```aufgabe
id: ir-stamm-erkennen
titel: Welche Funktionen sind Stammfunktionen?
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Welche der folgenden Funktionen sind Stammfunktionen von $f(x) = 6x^2$ auf $\R$? Wähle alle richtigen aus.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$F_1(x) = 2x^3$'
      - '$F_2(x) = 2x^3 + 5$'
      - '$F_3(x) = 12x$'
      - '$F_4(x) = 2x^3 - \pi$'
      - '$F_5(x) = 6x^3$'
    richtig: [0, 1, 3]
    fehler:
      - wert: [0]
        meldung: $F_1$ passt. Es gibt aber noch weitere Stammfunktionen. Denk daran, was beim Ableiten mit einer Konstanten passiert.
      - wert: [0, 1, 2, 3]
        meldung: $F_3$ ist die **Ableitung** von $6x^2$, keine Stammfunktion. Leite $F_3$ ab und vergleiche mit $6x^2$.
      - wert: [0, 1, 3, 4]
        meldung: Bei $F_5$ wurde die Hochzahl erhöht, aber nicht durch die neue Hochzahl geteilt. Leite $F_5$ zur Probe ab.
hinweise:
  - Leite jede Funktion ab und vergleiche das Ergebnis mit $6x^2$.
loesung: |
  **Ansatz:** $F$ ist genau dann eine Stammfunktion, wenn $F'(x) = 6x^2$ gilt. Wir leiten also jede Funktion ab.
  ---
  $F_1' = 6x^2$, $F_2' = 6x^2$ und $F_4' = 6x^2$. Diese drei sind Stammfunktionen. Sie unterscheiden sich nur um Konstanten.
  ---
  $F_3' = 12 \neq 6x^2$. $F_3$ ist die Ableitung von $f$, also die falsche Richtung. $F_5' = 18x^2 \neq 6x^2$, hier fehlt das Teilen durch $3$. Richtig sind $F_1$, $F_2$ und $F_4$.
```

```aufgabe
id: ir-polynom
titel: Polynom integrieren
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Bestimme $\displaystyle\int \left(3x^2 - 4x + 5\right)\dd x$. Die Konstante $C$ darfst du bei der Eingabe weglassen.
teile:
  - typ: term
    label: 'Eine Stammfunktion $F(x)$'
    loesung: "x^3 - 2x^2 + 5x"
    plusC: true
    fehler:
      - wert: "6x - 4"
        meldung: Du hast abgeleitet statt integriert. Beim Integrieren wird die Hochzahl größer, nicht kleiner.
      - wert: "3x^3 - 4x^2 + 5x"
        meldung: Die Hochzahl ist richtig erhöht, aber du musst danach noch durch die **neue** Hochzahl teilen.
      - wert: "x^3 - 2x^2"
        meldung: Die Zahl $5$ ist auch ein Summand. Ihre Stammfunktion ist nicht $0$. Welche Funktion hat die Ableitung $5$?
hinweise:
  - 'Integriere Summand für Summand: Hochzahl um $1$ erhöhen, durch die neue Hochzahl teilen. Die Stammfunktion einer Zahl $k$ ist $kx$.'
loesung: |
  **Ansatz:** Summen- und Faktorregel erlauben es, jeden Summanden einzeln zu integrieren.
  ---
  Potenzregel für jeden Summanden: $\int 3x^2\,\dd x = 3\cdot\frac{x^3}{3} = x^3$, $\int 4x\,\dd x = 4\cdot\frac{x^2}{2} = 2x^2$ und $\int 5\,\dd x = 5x$.
  ---
  Ergebnis: $\displaystyle\int \left(3x^2 - 4x + 5\right)\dd x = x^3 - 2x^2 + 5x + C$. **Probe:** $(x^3 - 2x^2 + 5x)' = 3x^2 - 4x + 5$. Es stimmt.
```

```aufgabe
id: ir-wurzel-bruch
titel: Wurzeln und Brüche als Potenzen
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Bestimme eine Stammfunktion von $f(x) = \sqrt[3]{x} + \dfrac{2}{x^2}$ für $x > 0$.
teile:
  - typ: term
    label: '$F(x)$'
    loesung: "3/4*x^(4/3) - 2/x"
    plusC: true
    bereich: [0.5, 4]
    fehler:
      - wert: "3/4*x^(4/3) + 2/x"
        meldung: Beim zweiten Summanden fehlt ein Minus. Die neue Hochzahl ist $-1$, und durch $-1$ zu teilen dreht das Vorzeichen um.
      - wert: "1/3*x^(-2/3) - 4/x^3"
        meldung: Das ist die Ableitung von $f$, nicht eine Stammfunktion. Beim Integrieren wird die Hochzahl um $1$ größer.
      - wert: "x^(4/3)/(1/3) - 2/x"
        meldung: Du hast durch die alte Hochzahl $\frac13$ geteilt. Teilen musst du durch die **neue** Hochzahl.
hinweise:
  - 'Schreibe $\sqrt[3]{x} = x^{1/3}$ und $\frac{2}{x^2} = 2x^{-2}$.'
  - 'Potenzregel: $\frac13 + 1 = \frac43$ und $-2 + 1 = -1$. Teilen durch $\frac43$ ist Malnehmen mit $\frac34$.'
loesung: |
  **Ansatz:** Wurzel und Bruch zuerst als Potenzen schreiben, damit die Potenzregel greift: $f(x) = x^{1/3} + 2x^{-2}$.
  ---
  Erster Summand: Die Hochzahl $\frac13$ wird zu $\frac43$. Wir teilen durch $\frac43$, also mal $\frac34$: $\int x^{1/3}\,\dd x = \frac34 x^{4/3}$.
  ---
  Zweiter Summand: Die Hochzahl $-2$ wird zu $-1$. Wir teilen durch $-1$: $\int 2x^{-2}\,\dd x = 2\cdot\frac{x^{-1}}{-1} = -\frac{2}{x}$.
  ---
  Ergebnis: $F(x) = \frac34 x^{4/3} - \frac2x + C$. **Probe:** $\left(\frac34 x^{4/3}\right)' = x^{1/3}$ und $\left(-2x^{-1}\right)' = 2x^{-2}$. Es stimmt.
gefuehrt:
  - text: 'Schreibe $\sqrt[3]{x}$ als Potenz $x^k$. Welche Hochzahl $k$ hat die dritte Wurzel?'
    teil: { typ: zahl, loesung: "1/3", fehler: [ { wert: "3", meldung: 'Die Wurzel wird zu einer Bruch-Hochzahl. Der Wurzelexponent $3$ steht im Nenner.' } ] }
    erklaerung: 'Die $n$-te Wurzel ist die Hochzahl $\frac1n$. Also $\sqrt[3]{x} = x^{1/3}$.'
  - text: 'Schreibe $\frac{2}{x^2}$ als $2\cdot x^k$. Welche Hochzahl $k$?'
    teil: { typ: zahl, loesung: "-2", fehler: [ { wert: "2", meldung: 'Ein Kehrwert ergibt eine **negative** Hochzahl.' } ] }
    erklaerung: 'Ein Kehrwert macht die Hochzahl negativ: $\frac{2}{x^2} = 2x^{-2}$.'
  - text: 'Welche neue Hochzahl entsteht beim Integrieren von $x^{1/3}$?'
    teil: { typ: zahl, loesung: "4/3" }
    erklaerung: '$\frac13 + 1 = \frac43$. Danach teilen wir durch $\frac43$, das heißt, wir nehmen mal $\frac34$. Ergebnis $\frac34 x^{4/3}$.'
  - text: 'Bestimme nun eine Stammfunktion von $2x^{-2}$.'
    teil: { typ: term, loesung: "-2/x", plusC: true, bereich: [0.5, 4] }
    erklaerung: 'Die Hochzahl $-2$ wird zu $-1$, Teilen durch $-1$ ergibt $2\cdot\frac{x^{-1}}{-1} = -\frac2x$.'
  - text: Setze beide Teile zusammen und mache die Probe durch Ableiten.
    erklaerung: '$F(x) = \frac34 x^{4/3} - \frac2x + C$. Ableiten ergibt wieder $x^{1/3} + 2x^{-2}$.'
```

```aufgabe
id: ir-exp-trig
titel: Exponential- und Winkelfunktionen
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Bestimme $\displaystyle\int \left(2e^x - 3\cos x + \sin x\right)\dd x$.
teile:
  - typ: term
    label: '$F(x)$'
    loesung: "2*e^x - 3*sin(x) - cos(x)"
    plusC: true
    fehler:
      - wert: "2*e^x - 3*sin(x) + cos(x)"
        meldung: Beim Sinus fehlt ein Minus. Leite $\cos x$ ab, dann siehst du, dass $-\cos x$ die Stammfunktion von $\sin x$ ist.
      - wert: "2*e^x + 3*sin(x) - cos(x)"
        meldung: Die Stammfunktion von $\cos x$ ist $+\sin x$. Mit dem Faktor $-3$ davor bleibt das Vorzeichen also minus.
hinweise:
  - Achte auf das Vorzeichen bei der Stammfunktion des Sinus. Mach am Ende die Probe durch Ableiten.
loesung: |
  **Ansatz:** gliedweise mit den Grundintegralen aus der Tabelle.
  ---
  $\int 2e^x\,\dd x = 2e^x$, $\int 3\cos x\,\dd x = 3\sin x$ und $\int \sin x\,\dd x = -\cos x$.
  ---
  Ergebnis: $F(x) = 2e^x - 3\sin x - \cos x + C$. **Probe:** $(2e^x - 3\sin x - \cos x)' = 2e^x - 3\cos x + \sin x$. Es stimmt.
```

```aufgabe
id: ir-umformen
titel: Erst umformen, dann integrieren
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Bestimme für $x > 0$ eine Stammfunktion von
  $$f(x) = \frac{(x^2 + 1)^2}{x^2}.$$
teile:
  - typ: term
    label: '$F(x)$'
    loesung: "x^3/3 + 2x - 1/x"
    plusC: true
    bereich: [0.5, 4]
    fehler:
      - wert: "x^3/3 + 2x + 1/x"
        meldung: Beim letzten Summanden stimmt das Vorzeichen nicht. Die Stammfunktion von $x^{-2}$ ist $\frac{x^{-1}}{-1}$.
      - wert: "x^3/3 + 2x + ln(x^2)"
        meldung: Der Logarithmus gehört nur zu $\frac1x$. Für $\frac{1}{x^2} = x^{-2}$ gilt die Potenzregel.
hinweise:
  - Den Zähler mit der binomischen Formel ausmultiplizieren und dann jeden Summanden einzeln durch $x^2$ teilen.
loesung: |
  **Ansatz:** Für einen Bruch gibt es keine Quotientenregel. Wir formen deshalb zuerst in eine Summe von Potenzen um.
  ---
  Binomische Formel: $(x^2 + 1)^2 = x^4 + 2x^2 + 1$. Jeder Summand wird durch $x^2$ geteilt: $f(x) = x^2 + 2 + x^{-2}$.
  ---
  Gliedweise integrieren: $F(x) = \frac{x^3}{3} + 2x - \frac1x + C$. **Probe:** $\left(\frac{x^3}{3} + 2x - x^{-1}\right)' = x^2 + 2 + x^{-2}$. Es stimmt.
```

```aufgabe
id: ir-linear-subst
titel: Lineare Substitution
niveau: 2
lernziel: 0
kompetenz: rechnen
angabe: |
  Bestimme eine Stammfunktion von
  $$f(x) = e^{2x} + \sin(3x) + (4x + 1)^5.$$
teile:
  - typ: term
    label: '$F(x)$'
    loesung: "e^(2x)/2 - cos(3x)/3 + (4x+1)^6/24"
    plusC: true
    bereich: [-0.5, 0.5]
    fehler:
      - wert: "2*e^(2x) - 3*cos(3x) + 4*(4x+1)^6/6"
        meldung: Du hast mit der inneren Ableitung multipliziert. Das macht man beim Ableiten. Beim Integrieren teilt man durch die innere Ableitung.
      - wert: "e^(2x)/2 + cos(3x)/3 + (4x+1)^6/24"
        meldung: Beim Sinus fehlt das Minus. Die Stammfunktion von $\sin u$ ist $-\cos u$.
      - wert: "e^(2x)/2 - cos(3x)/3 + (4x+1)^6/6"
        meldung: Beim letzten Summanden fehlt das Teilen durch die innere Ableitung $4$.
hinweise:
  - 'Regel: $\int f(ax + b)\,\dd x = \frac1a F(ax + b)$. Du teilst durch die innere Ableitung $a$.'
  - 'Beim letzten Summanden zuerst die Potenzregel, also $\frac{(4x+1)^6}{6}$, und dann noch durch $4$ teilen.'
loesung: |
  **Ansatz:** Jeder Summand ist eine Grundfunktion von einem linearen Ausdruck $ax + b$. Wir verwenden die lineare Substitution und teilen jeweils durch $a$.
  ---
  $\int e^{2x}\,\dd x = \frac12 e^{2x}$, weil die innere Ableitung $2$ ist. $\int \sin(3x)\,\dd x = -\frac13\cos(3x)$, weil die innere Ableitung $3$ ist.
  ---
  $\int (4x + 1)^5\,\dd x = \frac14\cdot\frac{(4x + 1)^6}{6} = \frac{(4x + 1)^6}{24}$. Hier kommt zuerst die Potenzregel, dann das Teilen durch $4$.
  ---
  Ergebnis: $F(x) = \frac12 e^{2x} - \frac13\cos(3x) + \frac{(4x + 1)^6}{24} + C$. **Probe** mit der Kettenregel: Beim Ableiten kommen die Faktoren $2$, $3$ und $4$ dazu und heben die Brüche genau auf.
```

```aufgabe
id: ir-logarithmus
titel: Wenn ln herauskommt
niveau: 2
lernziel: 0
kompetenz: rechnen
angabe: |
  Bestimme für $x > \tfrac12$ eine Stammfunktion von
  $$f(x) = \frac{5}{x} + \frac{2}{2x - 1}.$$
teile:
  - typ: term
    label: '$F(x)$'
    loesung: "5*ln(x) + ln(2x-1)"
    plusC: true
    bereich: [1, 4]
    fehler:
      - wert: "5*ln(x) + 2*ln(2x-1)"
        meldung: Beim zweiten Bruch fehlt das Teilen durch die innere Ableitung $2$.
      - wert: "5*ln(x) + ln(2x-1)/2"
        meldung: Durch die innere Ableitung $2$ hast du richtig geteilt. Aber der Zähler $2$ ist ein Faktor, der stehen bleibt.
      - wert: "-5/x^2 - 4/(2x-1)^2"
        meldung: Das ist die Ableitung von $f$. Gesucht ist eine Funktion, deren Ableitung $f$ ist.
hinweise:
  - 'Für den ersten Bruch gilt $\int \frac1x\,\dd x = \ln\lvert x\rvert$, und die $5$ bleibt als Faktor stehen.'
  - 'Für den zweiten Bruch: Faktor $2$ herausziehen, dann lineare Substitution mit $a = 2$.'
loesung: |
  **Ansatz:** Beide Brüche haben die Form „Zahl durch linearen Ausdruck“. Ihre Stammfunktion ist ein Logarithmus.
  ---
  $\int \frac5x\,\dd x = 5\ln\lvert x\rvert$. Für den zweiten Bruch ziehen wir den Faktor $2$ heraus und teilen durch die innere Ableitung $2$: $\int \frac{2}{2x - 1}\,\dd x = 2\cdot\frac12\ln\lvert 2x - 1\rvert = \ln\lvert 2x - 1\rvert$.
  ---
  Für $x > \frac12$ sind $x$ und $2x - 1$ positiv. Die Betragsstriche dürfen also weg: $F(x) = 5\ln x + \ln(2x - 1) + C$.
  ---
  **Probe:** $(5\ln x)' = \frac5x$ und $\left(\ln(2x-1)\right)' = \frac{1}{2x - 1}\cdot 2 = \frac{2}{2x - 1}$. Es stimmt.
```

```aufgabe
id: ir-anfangsbedingung
titel: Stammfunktion durch einen Punkt
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Bestimme die Stammfunktion $F$ von $f(x) = 6x^2 - 2x$, deren Graph durch den Punkt $P(1 \mid 4)$ geht.
teile:
  - typ: term
    label: '$F(x)$'
    loesung: "2x^3 - x^2 + 3"
    fehler:
      - wert: "2x^3 - x^2 + 4"
        meldung: 'Die Konstante $C$ ist nicht einfach der $y$-Wert des Punktes. Setze $x = 1$ in $F(x) = 2x^3 - x^2 + C$ ein und löse $F(1) = 4$ nach $C$.'
      - wert: "2x^3 - x^2"
        meldung: Das ist eine Stammfunktion, aber ihr Graph geht nicht durch $P$. Die Konstante $C$ musst du noch aus der Bedingung bestimmen.
hinweise:
  - 'Bestimme zuerst alle Stammfunktionen in der Form $F(x) = \ldots + C$.'
  - 'Der Punkt $P(1 \mid 4)$ bedeutet $F(1) = 4$. Setze ein und löse nach $C$.'
loesung: |
  **Ansatz:** Alle Stammfunktionen haben die Form $F(x) = 2x^3 - x^2 + C$. Die Bedingung „Graph geht durch $P$“ legt $C$ fest.
  ---
  Bedingung $F(1) = 4$: $2\cdot 1^3 - 1^2 + C = 1 + C = 4$. Also ist $C = 3$.
  ---
  Ergebnis: $F(x) = 2x^3 - x^2 + 3$. **Probe:** $F'(x) = 6x^2 - 2x$ und $F(1) = 2 - 1 + 3 = 4$. Beides stimmt.
```

```aufgabe
id: ir-stamm-fehler
titel: Wo steckt der Fehler?
niveau: 2
lernziel: 0
kompetenz: begruenden
angabe: |
  Eine Mitschülerin rechnet:
  $$\int x\,(x + 1)\,\dd x = \frac{x^2}{2}\cdot\left(\frac{x^2}{2} + x\right) + C.$$
  a) Welcher Fehler steckt in dieser Rechnung?

  b) Gib eine richtige Stammfunktion an.
teile:
  - typ: auswahl
    label: 'a) Der Fehler'
    optionen:
      - Sie hat jeden Faktor einzeln integriert und die Ergebnisse multipliziert. Für Produkte gibt es so eine Regel nicht.
      - Sie hat die Integrationskonstante falsch gesetzt.
      - Sie hätte die Faktoren ableiten statt integrieren müssen.
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Das $+\,C$ ist in Ordnung. Leite den Ausdruck vor dem $+\,C$ ab. Kommt $x(x+1)$ heraus?
      - wert: 2
        meldung: Gesucht ist eine Stammfunktion, also wird schon integriert. Das Problem liegt beim Produkt.
  - typ: term
    label: 'b) $F(x)$'
    loesung: "x^3/3 + x^2/2"
    plusC: true
    fehler:
      - wert: "(x^2/2)*(x^2/2 + x)"
        meldung: Das ist genau die Rechnung der Mitschülerin. Multipliziere zuerst aus, dann integriere gliedweise.
hinweise:
  - Leite das Ergebnis der Mitschülerin zur Probe ab. Stimmt es mit $x(x + 1)$ überein?
  - 'Multipliziere zuerst aus: $x(x + 1) = x^2 + x$.'
loesung: |
  **Probe der falschen Rechnung:** Ausmultipliziert ist ihr Ergebnis $\frac{x^4}{4} + \frac{x^3}{2}$. Die Ableitung davon ist $x^3 + \frac32 x^2$. Das ist nicht $x^2 + x$. Die Rechnung ist also falsch.
  ---
  **Der Fehler:** Sie hat jeden Faktor einzeln integriert und multipliziert. Eine solche Produktregel gibt es beim Integrieren nicht.
  ---
  **Richtig:** zuerst ausmultiplizieren, $x(x + 1) = x^2 + x$. Dann gliedweise integrieren: $F(x) = \frac{x^3}{3} + \frac{x^2}{2} + C$. Probe: $F'(x) = x^2 + x$. Es stimmt.
```

```aufgabe
id: ir-stamm-tiefpunkt
titel: Funktion aus ihrer Steigung und einem Tiefpunkt
niveau: 3
lernziel: 0
kompetenz: anwenden
angabe: |
  Der Graph einer Funktion $F$ hat an jeder Stelle $x$ die Steigung $f(x) = 3x^2 - 6x$. Außerdem hat er einen
  Tiefpunkt, der auf der $x$-Achse liegt.

  a) An welcher Stelle liegt der Tiefpunkt?

  b) Bestimme $F(x)$.
teile:
  - typ: zahl
    label: 'a) Stelle des Tiefpunkts $x_T$'
    loesung: "2"
    fehler:
      - wert: "0"
        meldung: 'Bei $x = 0$ wechselt die Steigung $f$ von plus nach minus. Dort liegt also ein Hochpunkt, kein Tiefpunkt.'
  - typ: term
    label: 'b) $F(x)$'
    loesung: "x^3 - 3x^2 + 4"
    fehler:
      - wert: "x^3 - 3x^2"
        meldung: Dieser Graph hat seinen Hochpunkt bei $(0 \mid 0)$ auf der $x$-Achse, nicht seinen Tiefpunkt. Bestimme $C$ aus der Bedingung am Tiefpunkt.
hinweise:
  - 'Die Steigung des Graphen ist die Ableitung. Also ist $F''(x) = 3x^2 - 6x$, und $F$ ist eine Stammfunktion davon.'
  - 'Extremstellen liegen dort, wo $F''(x) = 0$ ist. Prüfe mit dem Vorzeichenwechsel, welche ein Tiefpunkt ist. Dann gilt dort $F(x_T) = 0$.'
loesung: |
  **Ansatz:** Die Steigung des Graphen ist die Ableitung, also $F'(x) = 3x^2 - 6x$. Alle Kandidaten sind $F(x) = x^3 - 3x^2 + C$.
  ---
  **Extremstellen** (siehe [9.11 Monotonie und Extremstellen](/lernen/mathe3/differentialrechnung/monotonie-und-extremstellen)): $F'(x) = 3x(x - 2) = 0$ für $x = 0$ und $x = 2$. Für $x < 0$ ist $F' > 0$, zwischen $0$ und $2$ ist $F' < 0$, für $x > 2$ wieder $F' > 0$.
  ---
  Bei $x = 2$ wechselt $F'$ von minus nach plus. Dort liegt der Tiefpunkt, also $x_T = 2$.
  ---
  **Bedingung** „Tiefpunkt auf der $x$-Achse“: $F(2) = 8 - 12 + C = 0$, also $C = 4$. Ergebnis: $F(x) = x^3 - 3x^2 + 4$.
  ---
  **Probe:** $F'(x) = 3x^2 - 6x$ und $F(2) = 8 - 12 + 4 = 0$. Der Hochpunkt liegt bei $(0 \mid 4)$, also über der Achse. Alles passt.
```

## Das bestimmte Integral als Flächenbilanz

```aufgabe
id: ir-bilanz-vorwissen
titel: Weg bei konstanter Geschwindigkeit
art: check
niveau: 1
angabe: |
  Ein Auto fährt $2{,}5$ Stunden lang mit konstant $60$ km/h. Wie weit fährt es? Den Zusammenhang zwischen
  Weg, Zeit und Geschwindigkeit findest du in
  [Kapitel 9, Änderungen messen](/lernen/mathe3/differentialrechnung/aenderungen-messen-absolute-relative-und-mittlere-aenderung).
teile:
  - typ: zahl
    label: 'Weg'
    einheit: km
    loesung: "60*2.5"
    fehler:
      - wert: "60/2.5"
        meldung: Bei konstanter Geschwindigkeit gilt „Weg gleich Geschwindigkeit mal Zeit“. Du hast geteilt.
loesung: |
  Bei konstanter Geschwindigkeit gilt: Weg $=$ Geschwindigkeit $\cdot$ Zeit.
  ---
  $s = 60\ \tfrac{\text{km}}{\text{h}} \cdot 2{,}5\ \text{h} = 150$ km. Die Einheit h kürzt sich weg.
```

Jetzt kommt eine zweite, scheinbar ganz andere Frage: Wie groß ist die Fläche unter einem
Funktionsgraphen? Dass diese Frage mit den Stammfunktionen zusammenhängt, ist der Inhalt des
Hauptsatzes in [10.3 Der Hauptsatz](/lernen/mathe3/integralrechnung/der-hauptsatz-der-differential-und-integralrechnung). Hier bauen wir zuerst die Idee der Fläche auf.

### Von der Geschwindigkeit zum Weg

Fährt ein Auto $3$ Stunden lang mit konstant $80$ km/h, legt es $80 \cdot 3 = 240$ km zurück. Im
Diagramm mit der Zeit $t$ nach rechts und der Geschwindigkeit $v$ nach oben ist das die **Fläche eines
Rechtecks**: Breite $3$ h mal Höhe $80$ km/h. Fährt es danach noch $2$ Stunden mit $50$ km/h, kommt ein
zweites Rechteck mit $100$ km dazu.

```plot
x: [0, 5.5]
y: [0, 100]
achsen: { x: "t in h", y: "v in km/h" }
flaechen:
  - { f: "80", von: 0, bis: 3, farbe: 0 }
  - { f: "50", von: 3, bis: 5, farbe: 1 }
strecken:
  - { von: [0, 80], nach: [3, 80] }
  - { von: [3, 50], nach: [5, 50] }
  - { von: [3, 80], nach: [3, 50], gestrichelt: true }
beschriftung: Bei stückweise konstanter Geschwindigkeit ist der Weg die Summe der Rechtecksflächen unter dem Geschwindigkeitsgraphen, hier 240 km plus 100 km.
```

Ändert sich die Geschwindigkeit laufend, zerlegst du die Zeit in viele kurze Abschnitte. Auf jedem
Abschnitt ist die Geschwindigkeit fast konstant. Jeder Abschnitt liefert also ein schmales Rechteck
„Geschwindigkeit mal Zeitdauer“. Die Summe dieser Rechtecke nähert den Weg an. Je feiner du zerlegst,
desto besser wird die Näherung. Der Weg ist deshalb **die Fläche unter dem Geschwindigkeitsgraphen**.

### Rechtecksummen (Riemann-Summen)

Diese Idee funktioniert für jede Funktion $f$ auf einem Intervall $[a, b]$. Du gehst so vor:

1. Zerlege $[a, b]$ in $n$ gleich breite Streifen. Jeder hat die Breite $\Delta x = \frac{b - a}{n}$.
   Das Zeichen $\Delta$ (griechisch „Delta“) steht für „Differenz“ oder „kleines Stück“.
2. Wähle in jedem Streifen eine Stelle. Im $k$-ten Streifen heißt sie $\xi_k$ (griechisch „xi“).
3. Jeder Streifen ergibt ein Rechteck mit Höhe $f(\xi_k)$ und Breite $\Delta x$.
4. Addiere alle Rechtecksflächen.

Die Summe schreibt man kurz mit dem Summenzeichen $\sum$ aus
[Kapitel 8](/lernen/mathe3/folgen-reihen/das-summenzeichen):
$$S_n = \sum_{k=1}^{n} f(\xi_k)\,\Delta x = f(\xi_1)\,\Delta x + f(\xi_2)\,\Delta x + \dots + f(\xi_n)\,\Delta x.$$
Man liest: „Summe über $k$ von $1$ bis $n$“. Eine solche Summe heißt **Riemann-Summe**, nach dem
Mathematiker Bernhard Riemann. Nimmst du in jedem Streifen den kleinsten Funktionswert, entsteht die
**Untersumme**. Mit dem größten Funktionswert entsteht die **Obersumme**. Die gesuchte Fläche liegt
dazwischen.

:::beispiel[Fläche unter der Normalparabel, grob angenähert]
Gesucht ist die Fläche unter $f(x) = x^2$ auf $[0, 2]$. Wir nehmen $n = 4$ Streifen.

1. **Streifenbreite:** $\Delta x = \frac{2 - 0}{4} = 0{,}5$. Die Teilungspunkte sind $0;\ 0{,}5;\ 1;\ 1{,}5;\ 2$.
2. **Funktionswerte:** $f(0) = 0$, $f(0{,}5) = 0{,}25$, $f(1) = 1$, $f(1{,}5) = 2{,}25$ und $f(2) = 4$.
3. **Wo ist der kleinste Wert?** Die Parabel wächst auf $[0, 2]$. Der kleinste Wert in jedem Streifen
   liegt deshalb am linken Rand, der größte am rechten Rand.
4. **Untersumme** (linke Ränder): $U_4 = 0{,}5\cdot(0 + 0{,}25 + 1 + 2{,}25) = 0{,}5\cdot 3{,}5 = 1{,}75$.
5. **Obersumme** (rechte Ränder): $O_4 = 0{,}5\cdot(0{,}25 + 1 + 2{,}25 + 4) = 0{,}5\cdot 7{,}5 = 3{,}75$.

Die Fläche liegt also zwischen $1{,}75$ und $3{,}75$. In [10.3 Der Hauptsatz](/lernen/mathe3/integralrechnung/der-hauptsatz-der-differential-und-integralrechnung) berechnen wir den exakten
Wert $\frac83 \approx 2{,}667$.
:::

```aufgabe
id: ir-bilanz-vorhersage
titel: Was passiert bei mehr Streifen?
art: check
niveau: 1
angabe: |
  Sag voraus, bevor du das Widget nach dieser Frage benutzt: Was passiert mit Untersumme und Obersumme von $x^2$ auf $[0, 2]$,
  wenn du die Zahl $n$ der Streifen verdoppelst?
teile:
  - typ: auswahl
    optionen:
      - Die Untersumme wird größer, die Obersumme kleiner. Beide rücken näher zusammen.
      - Beide werden größer.
      - Beide werden kleiner.
      - Es ändert sich nichts, die Fläche bleibt ja gleich.
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die Obersumme liegt immer über der wahren Fläche. Bei feineren Streifen ragen die Rechtecke weniger weit über den Graphen hinaus.
      - wert: 2
        meldung: Die Untersumme liegt immer unter der wahren Fläche. Bei feineren Streifen bleiben unter dem Graphen kleinere Lücken.
      - wert: 3
        meldung: Die wahre Fläche bleibt gleich, aber die Rechtecke ändern sich. Sie passen sich dem Graphen besser an.
loesung: |
  Bei feineren Streifen ragen die Rechtecke der Obersumme weniger über den Graphen hinaus. Die Obersumme wird also kleiner.
  ---
  Die Rechtecke der Untersumme füllen die Fläche besser aus. Die Untersumme wird größer. Beide rücken auf die wahre Fläche zu.
```

```widget
name: riemann
titel: Rechtecke unter der Parabel
props:
  f: "x^2"
  a: 0
  b: 2
  n: 4
  x: [-0.3, 2.3]
  y: [-0.5, 4.5]
```

Erhöhe im Widget die Zahl $n$ der Streifen und beobachte beide Summen. Unter- und Obersumme rücken
zusammen und nähern sich demselben Wert. Die Erklärung: Der Unterschied zwischen beiden besteht aus
schmalen Streifen entlang des Graphen. Je schmaler die Streifen, desto kleiner wird dieser Unterschied.
Der gemeinsame Grenzwert heißt **bestimmtes Integral**.

:::definition[Bestimmtes Integral (anschaulich)]
Es sei $f$ auf $[a, b]$ stetig. Der gemeinsame Grenzwert der Riemann-Summen für immer feinere
Zerlegungen heißt **bestimmtes Integral** von $f$ über $[a, b]$:
$$\int_a^b f(x)\,\dd x = \lim_{n\to\infty} \sum_{k=1}^{n} f(\xi_k)\,\Delta x.$$
Dabei heißt $a$ die **untere** und $b$ die **obere Integrationsgrenze**. Das Zeichen $\lim_{n\to\infty}$
liest man „Grenzwert für $n$ gegen unendlich“.
:::

Die Schreibweise erinnert an die Konstruktion. Das $\int$ ist das S der Summe. Der Ausdruck $f(x)\,\dd x$
bedeutet „Höhe mal unendlich schmale Breite“. Dass dieser Grenzwert für stetige Funktionen existiert und
nicht von der Wahl der $\xi_k$ abhängt, zeigt [Kapitel 14](/lernen/mathe3/integrierbarkeit/ober-und-untersummen)
exakt. Hier genügt die Anschauung.

**Unterschied zum unbestimmten Integral:** $\int f(x)\,\dd x$ ohne Grenzen ist eine Menge von **Funktionen**,
nämlich alle Stammfunktionen. $\int_a^b f(x)\,\dd x$ mit Grenzen ist eine **Zahl**.

### Das Integral ist eine Flächenbilanz, keine Fläche

Liegt der Graph unter der $x$-Achse, ist $f(\xi_k)$ negativ. Dann ist auch das Produkt $f(\xi_k)\,\Delta x$
negativ. Flächenstücke unter der $x$-Achse werden also **abgezogen**.

:::merke[Orientierte Fläche]
$$\int_a^b f(x)\,\dd x = (\text{Fläche oberhalb der } x\text{-Achse}) - (\text{Fläche unterhalb der } x\text{-Achse})$$
Das Integral ist eine **Flächenbilanz**: Es verrechnet Gewinne und Verluste wie ein Kontostand. Es kann
null oder negativ sein. Eine Fläche ist dagegen nie negativ.
:::

```plot
x: [-0.3, 6.6]
y: [-1.3, 1.3]
achsen: { x: "x", y: "y" }
graphen:
  - { f: "sin(x)", label: "sin x", farbe: 0 }
flaechen:
  - { f: "sin(x)", von: 0, bis: "pi", farbe: 2 }
  - { f: "sin(x)", von: "pi", bis: "2*pi", farbe: 1 }
beschriftung: Über eine volle Periode heben sich die positive Fläche (grün) und die negative Fläche (orange) des Sinus auf. Das Integral von 0 bis 2π ist 0, die Fläche zwischen Graph und Achse ist 4.
```

:::beispiel[Flächenbilanz ohne Rechnung]
Für $f(x) = \sin x$ gilt $\int_0^{2\pi} \sin x\,\dd x = 0$.

Der Grund ist die Symmetrie. Der Bogen von $0$ bis $\pi$ liegt über der Achse. Der Bogen von $\pi$ bis
$2\pi$ ist genau gleich groß und liegt darunter. In der Bilanz heben sich beide auf.

Die **Fläche** zwischen Graph und $x$-Achse ist dagegen $2 + 2 = 4$. Dass jeder Bogen die Fläche $2$
hat, rechnen wir in [10.3 Der Hauptsatz](/lernen/mathe3/integralrechnung/der-hauptsatz-der-differential-und-integralrechnung) nach.
:::

:::beispiel[Ein Tank mit Zu- und Abfluss]
In einen Tank fließen $3$ Minuten lang $20$ Liter pro Minute hinein. Danach fließen $2$ Minuten lang
$5$ Liter pro Minute hinaus. Die Zuflussrate ist also zuerst $+20$ L/min und dann $-5$ L/min.

- **Rechteck über der Achse:** $20\ \tfrac{\text{L}}{\text{min}}\cdot 3\ \text{min} = 60$ L.
- **Rechteck unter der Achse:** $(-5)\ \tfrac{\text{L}}{\text{min}}\cdot 2\ \text{min} = -10$ L.
- **Bilanz:** $60 - 10 = 50$ L.

Nach $5$ Minuten sind also $50$ Liter mehr im Tank als am Anfang. Hier ist die Bilanz genau die richtige
Größe. Ein Abfluss soll ja abgezogen werden. Die Einheit des Integrals ist „L/min mal min“, also Liter.
:::

### Rechenregeln für bestimmte Integrale

Aus der Deutung als Flächenbilanz folgen einige Regeln. Dabei seien $f$ und $g$ stetig.

:::satz[Rechenregeln für bestimmte Integrale]
1. **Linearität:** $\int_a^b \big(k\,f(x) + l\,g(x)\big)\dd x = k\int_a^b f(x)\,\dd x + l\int_a^b g(x)\,\dd x$ für Zahlen $k$ und $l$.
2. **Intervalladditivität:** $\int_a^b f(x)\,\dd x + \int_b^c f(x)\,\dd x = \int_a^c f(x)\,\dd x$.
3. **Gleiche Grenzen:** $\int_a^a f(x)\,\dd x = 0$.
4. **Grenzen vertauschen:** $\int_b^a f(x)\,\dd x = -\int_a^b f(x)\,\dd x$.
5. **Monotonie:** Ist $f(x) \le g(x)$ auf $[a, b]$ mit $a < b$, so ist $\int_a^b f(x)\,\dd x \le \int_a^b g(x)\,\dd x$.
:::

Zu jeder Regel ein Gedanke:

- Regel 2 sagt: Zwei aneinanderstoßende Flächenstücke ergeben zusammen das große Stück.
- Regel 3 sagt: Über einem Intervall der Breite $0$ liegt keine Fläche.
- Regel 4 ist eine Festlegung. Sie sorgt dafür, dass Regel 2 auch gilt, wenn $c$ zwischen $a$ und $b$ liegt.
- Regel 5 sagt: Eine höhere Kurve hat mehr Fläche darunter.

Ein Zahlenbeispiel zu Regel 2: Ist $\int_0^2 f\,\dd x = 3$ und $\int_2^5 f\,\dd x = 4$, dann ist
$\int_0^5 f\,\dd x = 3 + 4 = 7$. Und nach Regel 4 ist $\int_5^0 f\,\dd x = -7$.

```aufgabe
id: ir-bilanz-check-regeln
titel: Ein Stück herausrechnen
art: check
niveau: 1
angabe: |
  Für eine stetige Funktion $f$ gilt $\int_0^4 f(x)\,\dd x = 6$ und $\int_0^1 f(x)\,\dd x = 2$. Wie groß ist $\int_1^4 f(x)\,\dd x$?
teile:
  - typ: zahl
    loesung: "6 - 2"
    fehler:
      - wert: "8"
        meldung: 'Das Intervall $[0, 4]$ enthält das Stück $[0, 1]$ schon. Du musst es abziehen, nicht addieren.'
      - wert: "-4"
        meldung: 'Die Reihenfolge ist vertauscht. Aus $\int_0^1 f + \int_1^4 f = \int_0^4 f$ folgt $\int_1^4 f = 6 - 2$.'
loesung: |
  Intervalladditivität: $\int_0^1 f\,\dd x + \int_1^4 f\,\dd x = \int_0^4 f\,\dd x$.
  ---
  Also $\int_1^4 f\,\dd x = 6 - 2 = 4$.
```

Aus Regel 5 folgt eine nützliche **Abschätzung**. Liegt $f$ auf $[a, b]$ zwischen einem kleinsten Wert $m$
und einem größten Wert $M$, dann gilt $m\,(b - a) \le \int_a^b f(x)\,\dd x \le M\,(b - a)$. Die Fläche
liegt also zwischen einem niedrigen und einem hohen Rechteck. Mehr dazu in
[Kapitel 14](/lernen/mathe3/integrierbarkeit).

:::achtung[Keine Produktregel für Integrale]
Viele rechnen falsch:
$$\int_0^1 x\cdot x\,\dd x \overset{?}{=} \int_0^1 x\,\dd x \cdot \int_0^1 x\,\dd x = \frac12\cdot\frac12 = \frac14.$$
Richtig ist $\int_0^1 x^2\,\dd x = \frac13$, wie du in [10.3 Der Hauptsatz](/lernen/mathe3/integralrechnung/der-hauptsatz-der-differential-und-integralrechnung) nachrechnen kannst. Für Summen
darf man das Integral aufteilen. Für Produkte darf man es **nicht**.
:::

:::achtung[Bilanz null heißt nicht Fläche null]
Ein falscher Schluss lautet so. Es gilt $\int_0^{2\pi}\sin x\,\dd x = 0$. Also schließe der Sinus auf
$[0, 2\pi]$ keine Fläche mit der Achse ein. Tatsächlich ist die Bilanz $0$, weil sich $+2$ und $-2$
aufheben. Die Fläche ist $4$. Wer
eine Fläche sucht, muss an den Nullstellen aufteilen. Wie das geht, zeigt die Lektion
[10.4 Flächen berechnen](/lernen/mathe3/integralrechnung/flaechen-berechnen).
:::

```reflexion
frage: Ein Integral über $[a, b]$ hat den Wert $0$, obwohl der Graph nicht die $x$-Achse selbst ist. Wie kann das sein? Erkläre es mit einem Beispiel.
antwort: |
  Das Integral ist eine Flächenbilanz. Flächen über der Achse zählen positiv, Flächen darunter negativ. Sind beide
  gleich groß, heben sie sich auf. Beispiel: $f(x) = x$ auf $[-1, 1]$. Links liegt ein Dreieck mit Fläche $\frac12$
  unter der Achse, rechts ein gleich großes darüber. Die Bilanz ist $-\frac12 + \frac12 = 0$, die Fläche aber $1$.
```

```aufgabe
id: ir-weg-rechtecke
titel: Weg aus stückweise konstanter Geschwindigkeit
niveau: 1
lernziel: 1
kompetenz: anwenden
angabe: |
  Ein Radfahrer fährt $4$ s lang mit $10$ m/s, dann $6$ s lang mit $25$ m/s (bergab) und schließlich $2$ s lang mit $15$ m/s.
  Welchen Weg legt er in diesen $12$ Sekunden zurück?
teile:
  - typ: zahl
    label: 'Weg $s$'
    einheit: m
    loesung: "10*4 + 25*6 + 15*2"
    fehler:
      - wert: "10 + 25 + 15"
        meldung: Du hast die Geschwindigkeiten addiert. Jede Geschwindigkeit gilt aber für eine bestimmte Zeitdauer. Jedes Teilstück liefert „Geschwindigkeit mal Zeit“.
      - wert: "(10 + 25 + 15)/3*12"
        meldung: Das einfache Mittel der drei Geschwindigkeiten passt nicht, weil sie verschieden lange gelten. Die $25$ m/s gelten am längsten.
hinweise:
  - Der Weg ist die Fläche unter dem Geschwindigkeitsgraphen. Hier besteht sie aus drei Rechtecken.
loesung: |
  **Ansatz:** Der Weg ist die Fläche unter dem Geschwindigkeitsgraphen. Der Graph ist treppenförmig, also besteht die Fläche aus drei Rechtecken „Geschwindigkeit mal Zeit“.
  ---
  $10\ \tfrac{\text{m}}{\text{s}}\cdot 4\ \text{s} = 40$ m, $25\ \tfrac{\text{m}}{\text{s}}\cdot 6\ \text{s} = 150$ m und $15\ \tfrac{\text{m}}{\text{s}}\cdot 2\ \text{s} = 30$ m.
  ---
  Summe: $s = 40 + 150 + 30 = 220$ m. **Plausibilität:** Mit konstant $25$ m/s wären es in $12$ s genau $300$ m, mit konstant $10$ m/s genau $120$ m. Der Wert liegt dazwischen.
```

```aufgabe
id: ir-bilanz-geometrisch
titel: Flächenbilanz mit Dreiecken
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Berechne ohne Stammfunktion, nur mit Dreiecksflächen:

  a) $\displaystyle\int_{-2}^{4} (x - 1)\,\dd x$

  b) die Fläche, die der Graph von $f(x) = x - 1$ auf $[-2, 4]$ mit der $x$-Achse einschließt.
plot:
  x: [-2.5, 4.5]
  y: [-3.5, 3.5]
  graphen:
    - { f: "x - 1", farbe: 0 }
  flaechen:
    - { f: "x - 1", von: -2, bis: 1, farbe: 1 }
    - { f: "x - 1", von: 1, bis: 4, farbe: 2 }
teile:
  - typ: zahl
    label: 'a) Integral'
    loesung: "-(1/2)*3*3 + (1/2)*3*3"
    fehler:
      - wert: "9"
        meldung: Das ist die Fläche. Beim Integral zählt das Dreieck unter der Achse **negativ**.
  - typ: zahl
    label: 'b) Fläche'
    loesung: "(1/2)*3*3 + (1/2)*3*3"
    anzeige: '9'
    fehler:
      - wert: "0"
        meldung: Das ist die Bilanz. Eine Fläche ist nie negativ, beide Dreiecke zählen also positiv.
      - wert: "4.5"
        meldung: Das ist nur eines der beiden Dreiecke. Die Fläche besteht aus beiden.
hinweise:
  - Die Nullstelle liegt bei $x = 1$. Links davon liegt ein Dreieck unter der Achse, rechts davon eines darüber.
loesung: |
  **Ansatz:** Der Graph ist eine Gerade. Die Flächenstücke sind Dreiecke, deren Fläche man mit „Grundlinie mal Höhe durch zwei“ berechnet.
  ---
  Links: Dreieck mit Grundlinie von $-2$ bis $1$ (Länge $3$) und Höhe $\lvert f(-2)\rvert = 3$. Fläche $\frac12\cdot 3\cdot 3 = 4{,}5$, **unterhalb** der Achse.
  ---
  Rechts: Dreieck mit Grundlinie von $1$ bis $4$ (Länge $3$) und Höhe $f(4) = 3$. Fläche $4{,}5$, **oberhalb** der Achse.
  ---
  a) Bilanz: $-4{,}5 + 4{,}5 = 0$. b) Fläche: $4{,}5 + 4{,}5 = 9$. Das Integral ist null, obwohl eine Fläche von $9$ eingeschlossen wird.
```

```aufgabe
id: ir-riemann-summen
titel: Unter- und Obersumme berechnen
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Berechne für $f(x) = x^2$ auf $[1, 3]$ mit $n = 4$ gleich breiten Streifen die Untersumme $U_4$ und die Obersumme $O_4$.
  Der exakte Wert des Integrals ist $\frac{26}{3}$. Um wie viel weicht der Mittelwert $\frac{U_4 + O_4}{2}$ davon ab?
teile:
  - typ: zahl
    label: '$U_4$'
    loesung: "0.5*(1 + 2.25 + 4 + 6.25)"
    fehler:
      - wert: "0.5*(2.25 + 4 + 6.25 + 9)"
        meldung: Das ist die Obersumme. Für die Untersumme brauchst du in jedem Streifen den **kleinsten** Funktionswert.
      - wert: "1 + 2.25 + 4 + 6.25"
        meldung: Du hast nur die Höhen addiert. Jede Höhe muss noch mit der Streifenbreite $\Delta x$ multipliziert werden.
  - typ: zahl
    label: '$O_4$'
    loesung: "0.5*(2.25 + 4 + 6.25 + 9)"
    fehler:
      - wert: "0.5*(1 + 2.25 + 4 + 6.25)"
        meldung: Das ist die Untersumme. Für die Obersumme brauchst du in jedem Streifen den **größten** Funktionswert.
  - typ: zahl
    label: 'Abweichung $\frac{U_4+O_4}{2} - \frac{26}{3}$'
    loesung: "8.75 - 26/3"
    anzeige: '\tfrac{1}{12} \approx 0{,}083'
hinweise:
  - 'Die Streifenbreite ist $\Delta x = \frac{3 - 1}{4} = 0{,}5$. Bestimme die Funktionswerte an allen fünf Teilungspunkten.'
  - 'Weil $x^2$ auf $[1, 3]$ wächst, liefert der linke Rand jedes Streifens den kleinsten und der rechte Rand den größten Wert.'
loesung: |
  **Ansatz:** Rechtecksummen mit $\Delta x = 0{,}5$. Weil $f$ auf $[1, 3]$ wächst, nimmt die Untersumme die linken Ränder und die Obersumme die rechten Ränder.
  ---
  Teilungspunkte $1;\ 1{,}5;\ 2;\ 2{,}5;\ 3$ mit den Funktionswerten $1;\ 2{,}25;\ 4;\ 6{,}25;\ 9$.
  ---
  $U_4 = 0{,}5\cdot(1 + 2{,}25 + 4 + 6{,}25) = 0{,}5\cdot 13{,}5 = 6{,}75$. $O_4 = 0{,}5\cdot(2{,}25 + 4 + 6{,}25 + 9) = 0{,}5\cdot 21{,}5 = 10{,}75$.
  ---
  Mittelwert: $\frac{6{,}75 + 10{,}75}{2} = 8{,}75$. Abweichung: $8{,}75 - \frac{26}{3} = \frac{105}{12} - \frac{104}{12} = \frac{1}{12} \approx 0{,}083$. Der Mittelwert aus Unter- und Obersumme ist schon sehr genau. Er ist die Trapezregel aus [Kapitel 14](/lernen/mathe3/integrierbarkeit/numerische-integration).
gefuehrt:
  - text: Wie breit ist jeder der vier Streifen?
    teil: { typ: zahl, loesung: "0.5", fehler: [ { wert: "0.75", meldung: 'Die Breite ist die Intervalllänge $3 - 1 = 2$ geteilt durch die Zahl der Streifen.' } ] }
    erklaerung: '$\Delta x = \frac{3 - 1}{4} = 0{,}5$. Die Teilungspunkte sind $1;\ 1{,}5;\ 2;\ 2{,}5;\ 3$.'
  - text: Welche Funktionswerte gehören zu den Teilungspunkten? Überlege, welcher Rand jeweils den kleinsten Wert liefert.
    erklaerung: 'Die Werte sind $1;\ 2{,}25;\ 4;\ 6{,}25;\ 9$. Weil $x^2$ hier wächst, ist der linke Rand der kleinste Wert.'
  - text: Berechne die Untersumme $U_4$.
    teil: { typ: zahl, loesung: "6.75" }
    erklaerung: '$U_4 = 0{,}5\cdot(1 + 2{,}25 + 4 + 6{,}25) = 6{,}75$.'
  - text: Berechne die Obersumme $O_4$.
    teil: { typ: zahl, loesung: "10.75" }
    erklaerung: '$O_4 = 0{,}5\cdot(2{,}25 + 4 + 6{,}25 + 9) = 10{,}75$. Die exakte Fläche $\frac{26}{3} \approx 8{,}667$ liegt dazwischen.'
```

```aufgabe
id: ir-regeln-anwenden
titel: Mit Integralregeln rechnen
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Für stetige Funktionen $f$ und $g$ ist bekannt:
  $$\int_0^3 f(x)\,\dd x = 5, \qquad \int_0^7 f(x)\,\dd x = 2, \qquad \int_0^3 g(x)\,\dd x = -1.$$
  Berechne $\displaystyle\int_3^7 f(x)\,\dd x$ und $\displaystyle\int_3^0 \big(2f(x) - 4g(x)\big)\,\dd x$.
teile:
  - typ: zahl
    label: '$\int_3^7 f(x)\,\dd x$'
    loesung: "2 - 5"
    fehler:
      - wert: "5 - 2"
        meldung: Die Reihenfolge ist vertauscht. Aus $\int_0^3 f + \int_3^7 f = \int_0^7 f$ folgt, dass du $\int_0^3 f$ von $\int_0^7 f$ abziehen musst.
      - wert: "5 + 2"
        meldung: Das große Intervall $[0, 7]$ enthält schon $[0, 3]$. Du musst das Stück $[0, 3]$ abziehen, nicht addieren.
  - typ: zahl
    label: '$\int_3^0 (2f - 4g)\,\dd x$'
    loesung: "-(2*5 - 4*(-1))"
    fehler:
      - wert: "2*5 - 4*(-1)"
        meldung: Die Grenzen stehen verkehrt herum, von $3$ nach $0$. Vertauschen der Grenzen ändert das Vorzeichen.
      - wert: "-(2*5 + 4*(-1))"
        meldung: Achte auf das Vorzeichen bei $g$. Es ist $-4\cdot(-1) = +4$.
hinweise:
  - 'Intervalladditivität: $\int_0^3 f + \int_3^7 f = \int_0^7 f$.'
  - Beim zweiten Integral zuerst die Linearität für die Grenzen $0$ bis $3$ anwenden. Danach die Grenzen vertauschen und dabei das Vorzeichen ändern.
loesung: |
  **Ansatz:** Wir kennen die Integrale nur als Zahlen. Mit den Rechenregeln setzen wir sie zusammen, ohne $f$ oder $g$ zu kennen.
  ---
  Intervalladditivität: $\int_0^3 f\,\dd x + \int_3^7 f\,\dd x = \int_0^7 f\,\dd x$. Also $\int_3^7 f\,\dd x = 2 - 5 = -3$.
  ---
  Linearität: $\int_0^3 (2f - 4g)\,\dd x = 2\cdot 5 - 4\cdot(-1) = 10 + 4 = 14$.
  ---
  Grenzen vertauschen ändert das Vorzeichen: $\int_3^0 (2f - 4g)\,\dd x = -14$. **Deutung:** $\int_3^7 f = -3$ heißt, dass auf $[3, 7]$ mehr Fläche unter als über der Achse liegt.
```

```aufgabe
id: ir-bilanz-graph
titel: Integral aus einem Graphen ablesen
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: |
  Der Graph von $f$ besteht aus Strecken (siehe Bild). Er verläuft von $(0 \mid 2)$ nach $(2 \mid 2)$, dann geradlinig
  nach $(4 \mid -2)$ und schließlich waagrecht bis $(5 \mid -2)$.

  a) Berechne $\displaystyle\int_0^5 f(x)\,\dd x$.

  b) Berechne die Fläche zwischen dem Graphen und der $x$-Achse über $[0, 5]$.
plot:
  x: [-0.5, 5.5]
  y: [-3, 3]
  strecken:
    - { von: [0, 2], nach: [2, 2] }
    - { von: [2, 2], nach: [4, -2] }
    - { von: [4, -2], nach: [5, -2] }
teile:
  - typ: zahl
    label: 'a) Integral'
    loesung: "2*2 + (1/2)*1*2 - (1/2)*1*2 - 2*1"
    fehler:
      - wert: "8"
        meldung: Das ist die Fläche. Im Integral zählen die Stücke unter der Achse negativ.
      - wert: "6"
        meldung: Das Rechteck auf $[4, 5]$ liegt unter der Achse und muss abgezogen werden.
  - typ: zahl
    label: 'b) Fläche'
    loesung: "2*2 + (1/2)*1*2 + (1/2)*1*2 + 2*1"
    fehler:
      - wert: "2"
        meldung: Das ist die Bilanz aus a). Für die Fläche zählen alle Stücke positiv.
hinweise:
  - 'Die schräge Strecke schneidet die $x$-Achse in der Mitte, also bei $x = 3$.'
  - 'Zerlege in ein Rechteck auf $[0, 2]$, zwei Dreiecke auf $[2, 3]$ und $[3, 4]$ und ein Rechteck auf $[4, 5]$.'
loesung: |
  **Ansatz:** Der Graph besteht aus Strecken. Die Flächenstücke sind Rechtecke und Dreiecke, die man ohne Stammfunktion berechnen kann.
  ---
  Rechteck auf $[0, 2]$: $2\cdot 2 = 4$ (über der Achse). Die schräge Strecke fällt von $2$ auf $-2$ und schneidet die Achse bei $x = 3$.
  ---
  Dreieck auf $[2, 3]$: $\frac12\cdot 1\cdot 2 = 1$ (über der Achse). Dreieck auf $[3, 4]$: $1$ (unter der Achse). Rechteck auf $[4, 5]$: $1\cdot 2 = 2$ (unter der Achse).
  ---
  a) Bilanz: $4 + 1 - 1 - 2 = 2$. b) Fläche: $4 + 1 + 1 + 2 = 8$.
```

```aufgabe
id: ir-bilanz-abschaetzen
titel: Ein Integral ohne Stammfunktion abschätzen
niveau: 3
lernziel: 1
kompetenz: begruenden
angabe: |
  Die Funktion $f(x) = e^{-x^2}$ hat keine Stammfunktion, die man mit bekannten Funktionen hinschreiben kann.
  Sie ist aber die Grundform der Glockenkurve aus [Kapitel 16, Normalverteilung](/lernen/mathe3/wahrscheinlichkeit/normalverteilung-und-standardisieren).
  Wir schätzen $I = \displaystyle\int_0^1 e^{-x^2}\,\dd x$ ab.

  a) Auf $[0, 1]$ fällt $f$. Berechne mit $n = 2$ Streifen die Untersumme $U_2$ (auf drei Dezimalstellen).

  b) Berechne ebenso die Obersumme $O_2$.

  c) Begründe mit der Monotonie des Integrals, warum $e^{-1} \le I \le 1$ gilt.
teile:
  - typ: zahl
    label: 'a) $U_2$'
    loesung: "0.5*(exp(-0.25) + exp(-1))"
    anzeige: '0{,}573'
    fehler:
      - wert: "0.5*(1 + exp(-0.25))"
        meldung: Das ist die Obersumme. Weil $f$ fällt, liegt der kleinste Wert jedes Streifens am **rechten** Rand.
  - typ: zahl
    label: 'b) $O_2$'
    loesung: "0.5*(1 + exp(-0.25))"
    anzeige: '0{,}889'
    fehler:
      - wert: "0.5*(exp(-0.25) + exp(-1))"
        meldung: Das ist die Untersumme. Weil $f$ fällt, liegt der größte Wert jedes Streifens am **linken** Rand.
  - typ: text
    label: 'c) Begründung'
    muster: |
      Auf $[0, 1]$ fällt $f$ von $f(0) = 1$ auf $f(1) = e^{-1}$. Es gilt also $e^{-1} \le f(x) \le 1$. Nach der Monotonieregel
      liegt das Integral zwischen den Integralen der konstanten Funktionen $e^{-1}$ und $1$. Diese sind Rechtecke der Breite $1$,
      also $e^{-1}\cdot 1 \le I \le 1\cdot 1$.
hinweise:
  - 'Die Streifen sind $[0;\ 0{,}5]$ und $[0{,}5;\ 1]$. Berechne $f(0) = 1$, $f(0{,}5) = e^{-0{,}25}$ und $f(1) = e^{-1}$.'
  - Bei einer fallenden Funktion liefert der linke Rand den größten und der rechte Rand den kleinsten Wert. Für c) vergleiche $f$ mit einem niedrigen und einem hohen Rechteck.
loesung: |
  **Ansatz:** Ohne Stammfunktion bleibt die Grundidee des Integrals: Rechtecke darunter und darüber legen. Die Breite ist $\Delta x = 0{,}5$.
  ---
  Funktionswerte: $f(0) = 1$, $f(0{,}5) = e^{-0{,}25} \approx 0{,}7788$ und $f(1) = e^{-1} \approx 0{,}3679$.
  ---
  a) $f$ fällt, also kommen die kleinsten Werte von den rechten Rändern: $U_2 = 0{,}5\cdot(0{,}7788 + 0{,}3679) \approx 0{,}573$.
  ---
  b) Die größten Werte kommen von den linken Rändern: $O_2 = 0{,}5\cdot(1 + 0{,}7788) \approx 0{,}889$.
  ---
  c) Es gilt $e^{-1} \le f(x) \le 1$ auf $[0, 1]$. Nach der Monotonieregel folgt $0{,}368 \le I \le 1$. Die Rechtecksummen grenzen das genauer ein: $0{,}573 \le I \le 0{,}889$. Der wahre Wert ist etwa $0{,}747$.
```

## Der Hauptsatz der Differential- und Integralrechnung

```aufgabe
id: ir-hs-vorwissen
titel: Eine Stammfunktion ableiten
art: check
niveau: 1
angabe: |
  Leite $F(x) = \frac{x^3}{3} - 4x$ ab. Zum Nachlesen:
  [9.5 Ableitungsregeln](/lernen/mathe3/differentialrechnung/grundregeln-potenz-faktor-und-summenregel-und-die-wichtigsten-ableitungen).
teile:
  - typ: auswahl
    optionen:
      - '$x^2 - 4$'
      - '$x^2 - 4x$'
      - '$\frac{x^4}{12} - 2x^2$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die Ableitung von $4x$ ist $4$, nicht $4x$. Das $x$ verschwindet beim Ableiten.
      - wert: 2
        meldung: Hier wurde integriert statt abgeleitet. Beim Ableiten wird die Hochzahl kleiner.
loesung: |
  Gliedweise ableiten: $\left(\frac{x^3}{3}\right)' = \frac{3x^2}{3} = x^2$ und $(4x)' = 4$.
  ---
  Also $F'(x) = x^2 - 4$. $F$ ist damit eine Stammfunktion von $x^2 - 4$. Diese Funktion kommt in [10.4 Flächen berechnen](/lernen/mathe3/integralrechnung/flaechen-berechnen) wieder vor.
```

Riemann-Summen auszurechnen ist mühsam. Der Hauptsatz verbindet das bestimmte Integral mit den
Stammfunktionen. Danach ist die Flächenberechnung reine Routine.

### Die Integralfunktion

Wir halten die untere Grenze fest und lassen die obere Grenze wandern. Die Flächenbilanz hängt dann von
der oberen Grenze ab. Zwei Zahlenbeispiele zeigen ein Muster.

:::beispiel[Zwei Integralfunktionen, die man ohne Rechnung kennt]
**Konstante Funktion** $f(t) = 2$, untere Grenze $0$, obere Grenze $x$. Die Fläche ist ein Rechteck mit
Breite $x$ und Höhe $2$. Also ist $\int_0^x 2\,\dd t = 2x$. Die Ableitung von $2x$ ist $2$, also genau $f$.

**Lineare Funktion** $f(t) = t$, untere Grenze $0$, obere Grenze $x > 0$. Die Fläche ist ein Dreieck mit
Grundlinie $x$ und Höhe $x$. Also ist $\int_0^x t\,\dd t = \frac{x^2}{2}$. Die Ableitung von $\frac{x^2}{2}$
ist $x$, also wieder genau $f$.

In beiden Fällen ergibt das Ableiten der Fläche wieder die Ausgangsfunktion. Das ist kein Zufall.
:::

:::definition[Integralfunktion]
Für eine stetige Funktion $f$ auf einem Intervall $I$ und eine feste Stelle $a$ in $I$ heißt
$$I_a(x) = \int_a^x f(t)\,\dd t$$
die **Integralfunktion** von $f$ zur unteren Grenze $a$. Sie gibt die Flächenbilanz von $a$ bis $x$ an.
:::

Die Integrationsvariable heißt jetzt $t$, weil der Buchstabe $x$ schon für die obere Grenze vergeben ist.
Der Name der Integrationsvariablen spielt keine Rolle. Es gilt $\int_a^x f(t)\,\dd t = \int_a^x f(u)\,\dd u$.

**Warum ist die Ableitung von $I_a$ gleich $f$?** Diese Stelle ist für fast alle ungewohnt. Lies sie in
Ruhe zweimal.

1. **Die Frage:** Wie stark wächst $I_a$, wenn die obere Grenze $x$ ein kleines Stück $h$ nach rechts rückt?
2. **Das Bild:** Es kommt ein schmaler Streifen dazu. Er ist $h$ breit und ungefähr $f(x)$ hoch.
3. **Als Formel:** $I_a(x + h) - I_a(x) = \int_x^{x+h} f(t)\,\dd t \approx f(x)\cdot h$.
4. **Durch $h$ teilen:** $\frac{I_a(x + h) - I_a(x)}{h} \approx f(x)$. Links steht der Differenzenquotient aus
   [Kapitel 9](/lernen/mathe3/differentialrechnung/von-der-sekante-zur-tangente-die-ableitung-an-einer-stelle).
5. **Grenzübergang:** Lässt man $h$ gegen $0$ gehen, wird der Streifen immer schmaler. Weil $f$ stetig ist,
   ist $f$ auf dem Streifen fast konstant. Aus dem „ungefähr gleich“ wird ein „gleich“: $I_a'(x) = f(x)$.

```plot
x: [-0.2, 4.2]
y: [-0.3, 3.3]
achsen: { x: "t", y: "f(t)" }
graphen:
  - { f: "1 + 0.5*x + 0.3*sin(2*x)", label: "f", farbe: 0 }
flaechen:
  - { f: "1 + 0.5*x + 0.3*sin(2*x)", von: 0.5, bis: 2.5, farbe: 0 }
  - { f: "1 + 0.5*x + 0.3*sin(2*x)", von: 2.5, bis: 2.9, farbe: 1 }
punkte:
  - { x: 0.5, y: 0, label: "a" }
  - { x: 2.5, y: 0, label: "x" }
  - { x: 2.9, y: 0, label: "x+h" }
beschriftung: Die blaue Fläche ist I_a(x). Rückt die obere Grenze um h weiter, kommt der orange Streifen dazu. Seine Fläche ist ungefähr f(x)·h, deshalb ist die Ableitung der Integralfunktion gleich f(x).
```

**In Worten:** Die Fläche wächst an der Stelle $x$ genau so schnell, wie der Graph dort hoch ist. Ein
hoher Graph lässt die Fläche schnell wachsen. Liegt der Graph unter der Achse, nimmt die Bilanz ab.

:::satz[Hauptsatz der Differential- und Integralrechnung]
Es sei $f$ auf dem Intervall $I$ **stetig** und $a$ eine Stelle in $I$.

1. Die Integralfunktion $I_a(x) = \int_a^x f(t)\,\dd t$ ist differenzierbar, und es gilt $I_a'(x) = f(x)$.
   Jede stetige Funktion besitzt also eine Stammfunktion.
2. Ist $F$ **irgendeine** Stammfunktion von $f$ auf $I$, so gilt für alle $a, b$ in $I$:
$$\int_a^b f(x)\,\dd x = F(b) - F(a).$$
Für die Differenz $F(b) - F(a)$ schreibt man kurz $\Big[F(x)\Big]_a^b$.
:::

:::beweis
Teil 1 ist die Überlegung mit dem schmalen Streifen vor dem Satz. Der exakte Grenzübergang benutzt den Mittelwertsatz der
Integralrechnung und steht in [Kapitel 14](/lernen/mathe3/integrierbarkeit/hauptsatz-der-differential-und-integralrechnung).

Teil 2 folgt aus Teil 1. Nach Teil 1 ist $I_a$ eine Stammfunktion von $f$. $F$ ist auch eine. Auf einem
Intervall unterscheiden sich zwei Stammfunktionen nur um eine Konstante. Also ist $F(x) = I_a(x) + C$.
Damit gilt
$$F(b) - F(a) = \big(I_a(b) + C\big) - \big(I_a(a) + C\big) = I_a(b) - I_a(a) = \int_a^b f(t)\,\dd t - 0.$$
Dabei ist $I_a(a) = 0$, weil von $a$ bis $a$ keine Fläche liegt. Die Konstante $C$ hebt sich heraus.
:::

**Was haben wir gezeigt?** Integrieren und Differenzieren sind Umkehroperationen. Für die Praxis heißt
das: Um eine Fläche zu berechnen, brauchst du keine Grenzwerte von Summen. Du brauchst nur eine
Stammfunktion. Und weil sich $C$ heraushebt, ist es egal, welche Stammfunktion du nimmst.

:::beispiel[Die Parabelfläche exakt]
In [10.2 Das bestimmte Integral als Flächenbilanz](/lernen/mathe3/integralrechnung/das-bestimmte-integral-als-flaechenbilanz) lag die Fläche unter $x^2$ auf $[0, 2]$ zwischen $1{,}75$ und $3{,}75$. Jetzt
rechnen wir sie exakt aus. Eine Stammfunktion von $x^2$ ist $F(x) = \frac{x^3}{3}$:
$$\int_0^2 x^2\,\dd x = \left[\frac{x^3}{3}\right]_0^2 = \frac{8}{3} - \frac{0}{3} = \frac83 \approx 2{,}667.$$
Das liegt wie erwartet zwischen Untersumme und Obersumme.
:::

:::beispiel[Ein Bogen des Sinus]
Eine Stammfunktion von $\sin x$ ist $-\cos x$. Also ist
$$\int_0^{\pi} \sin x\,\dd x = \Big[-\cos x\Big]_0^{\pi} = (-\cos\pi) - (-\cos 0) = (-(-1)) - (-1) = 1 + 1 = 2.$$
Jeder Sinusbogen hat also die Fläche $2$. Über $[0, 2\pi]$ ist die Bilanz $2 - 2 = 0$.
:::

:::beispiel[Klammern bei der unteren Grenze]
Gesucht ist $\int_1^3 \left(x^2 - 2x + 3\right)\dd x$. Eine Stammfunktion ist $F(x) = \frac{x^3}{3} - x^2 + 3x$.

- Obere Grenze: $F(3) = 9 - 9 + 9 = 9$.
- Untere Grenze: $F(1) = \frac13 - 1 + 3 = \frac73$.
- Differenz: $F(3) - F(1) = 9 - \frac73 = \frac{27}{3} - \frac73 = \frac{20}{3} \approx 6{,}667$.

Wichtig ist die Klammer um $F(1)$. Ohne sie würde man nur das erste Glied abziehen.
:::

:::beispiel[Wasser aus einem Hahn]
Ein Hahn wird langsam zugedreht. Die Durchflussrate ist $r(t) = 12 - 2t$ in Liter pro Minute, für
$0 \le t \le 6$ Minuten. Wie viel Wasser fließt insgesamt?

1. **Ansatz:** Die Wassermenge ist die Fläche unter der Rate: $\int_0^6 (12 - 2t)\,\dd t$.
2. **Stammfunktion:** $F(t) = 12t - t^2$.
3. **Einsetzen:** $F(6) - F(0) = (72 - 36) - 0 = 36$.
4. **Einheit:** Liter pro Minute mal Minuten ergibt Liter. Es fließen $36$ Liter.

Probe mit Geometrie: Die Fläche ist ein Dreieck mit Grundlinie $6$ und Höhe $12$, also $\frac12\cdot 6\cdot 12 = 36$.
:::

:::merke[Rezept: bestimmtes Integral]
1. Eine Stammfunktion $F$ von $f$ bestimmen. Das $+\,C$ lässt du weg, es hebt sich ohnehin heraus.
2. Die Zeile mit der eckigen Klammer hinschreiben: $\big[F(x)\big]_a^b$.
3. Obere Grenze einsetzen **minus** untere Grenze einsetzen: $F(b) - F(a)$.
4. Den Wert $F(a)$ in Klammern setzen: $F(b) - \big(F(a)\big)$.
:::

:::achtung[Die Klammer um F(a) vergessen]
Eine typische Fehlrechnung zu $\int_1^3 (x^2 - 2x + 3)\,\dd x$ lautet:
$$\left[\frac{x^3}{3} - x^2 + 3x\right]_1^3 \overset{?}{=} 9 - \frac13 - 1 + 3 = \frac{32}{3}.$$
Hier wurde nur $\frac13$ abgezogen. Die übrigen Glieder $-1$ und $+3$ von $F(1)$ wurden mit ihrem
eigenen Vorzeichen übernommen. Richtig ist
$9 - \left(\frac13 - 1 + 3\right) = 9 - \frac13 + 1 - 3 = 9 - \frac73 = \frac{20}{3}$. Die Klammer kehrt
jedes Vorzeichen im abgezogenen Teil um: Aus Plus wird Minus, aus Minus wird Plus.
:::

:::achtung[Stetigkeit ist Voraussetzung]
Der Hauptsatz verlangt, dass $f$ auf dem **ganzen** Intervall zwischen den Grenzen stetig ist. Wer blind
rechnet, erhält
$$\int_{-1}^{1}\frac{1}{x^2}\,\dd x \overset{?}{=} \left[-\frac1x\right]_{-1}^{1} = -1 - 1 = -2.$$
Das kann nicht stimmen, denn der Integrand ist überall positiv. Der Fehler: $\frac{1}{x^2}$ hat bei
$x = 0$ einen Pol. Dort wird der Graph beliebig hoch, die Voraussetzung ist verletzt. Solche Integrale
heißen *uneigentlich*. Sie werden in
[Kapitel 14](/lernen/mathe3/integrierbarkeit/uneigentliche-integrale) behandelt. Dieses hier existiert nicht.
:::

:::pruefung[Die Zeile mit der eckigen Klammer zählt]
Schreib bei jedem bestimmten Integral zuerst die Zeile $\big[F(x)\big]_a^b$ hin und setze erst dann ein.
Warum? Die Prüferin sieht so, dass deine Stammfunktion stimmt. Passiert dir danach beim Einsetzen ein
Rechenfehler, verlierst du nur einen kleinen Teil der Punkte. Konkret sieht das so aus:
„$\int_0^2 x^2\,\dd x = \left[\frac{x^3}{3}\right]_0^2 = \frac83 - 0$“. Den Taschenrechner nimmst du erst
ganz am Schluss.
:::

```reflexion
frage: Beim unbestimmten Integral schreibt man immer „$+\,C$“, beim bestimmten Integral nie. Warum ist das kein Widerspruch?
antwort: |
  Beim bestimmten Integral setzt man dieselbe Stammfunktion zweimal ein und bildet die Differenz. Nimmt man $F + C$
  statt $F$, erhält man $\big(F(b) + C\big) - \big(F(a) + C\big) = F(b) - F(a)$. Die Konstante hebt sich heraus. Jede
  Stammfunktion liefert also dieselbe Zahl, und deshalb darf man einfach $C = 0$ nehmen.
```

```aufgabe
id: ir-hauptsatz-polynom
titel: Bestimmtes Integral eines Polynoms
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Berechne $\displaystyle\int_{-1}^{2} \left(x^2 + 2x - 1\right)\dd x$ exakt.
teile:
  - typ: zahl
    loesung: "(8/3 + 4 - 2) - (-1/3 + 1 + 1)"
    anzeige: '3'
    fehler:
      - wert: "7"
        meldung: Du hast vermutlich die Klammer um $F(-1)$ vergessen. Es gilt $F(2) - F(-1)$, und **ganz** $F(-1)$ wird abgezogen.
      - wert: "19/3"
        meldung: Du hast $F(2)$ und $F(-1)$ addiert. Der Hauptsatz verlangt die Differenz „oben minus unten“.
hinweise:
  - 'Eine Stammfunktion ist $F(x) = \frac{x^3}{3} + x^2 - x$. Berechne dann $F(2) - F(-1)$ mit Klammern.'
loesung: |
  **Ansatz:** Hauptsatz. Eine Stammfunktion ist $F(x) = \frac{x^3}{3} + x^2 - x$.
  ---
  $F(2) = \frac83 + 4 - 2 = \frac{14}{3}$ und $F(-1) = -\frac13 + 1 + 1 = \frac53$.
  ---
  $\int_{-1}^{2} (x^2 + 2x - 1)\,\dd x = \frac{14}{3} - \frac53 = \frac93 = 3$.
gefuehrt:
  - text: Bestimme eine Stammfunktion $F$ des Integranden.
    teil: { typ: term, loesung: "x^3/3 + x^2 - x", plusC: true, fehler: [ { wert: "2x + 2", meldung: 'Das ist die Ableitung. Beim Integrieren wird die Hochzahl größer.' } ] }
    erklaerung: 'Gliedweise mit der Potenzregel: $F(x) = \frac{x^3}{3} + x^2 - x$.'
  - text: Setze die obere Grenze ein. Was ist $F(2)$?
    teil: { typ: zahl, loesung: "14/3" }
    erklaerung: '$F(2) = \frac83 + 4 - 2 = \frac{14}{3}$.'
  - text: Setze die untere Grenze ein. Was ist $F(-1)$?
    teil: { typ: zahl, loesung: "5/3", fehler: [ { wert: "-1/3 - 1 + 1", meldung: 'Achte auf $(-1)^2 = +1$ und $-(-1) = +1$.' } ] }
    erklaerung: '$F(-1) = \frac{(-1)^3}{3} + (-1)^2 - (-1) = -\frac13 + 1 + 1 = \frac53$.'
  - text: Bilde die Differenz „oben minus unten“.
    teil: { typ: zahl, loesung: "3" }
    erklaerung: '$\frac{14}{3} - \frac53 = \frac93 = 3$.'
```

```aufgabe
id: ir-hauptsatz-mix
titel: Drei kurze Integrale
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Berechne exakt:
  $$\text{a) } \int_0^{\pi/2} \cos x\,\dd x \qquad \text{b) } \int_1^{e^2} \frac{1}{x}\,\dd x \qquad \text{c) } \int_0^{\ln 3} e^x\,\dd x$$
teile:
  - typ: zahl
    label: 'a)'
    loesung: "sin(pi/2) - sin(0)"
    fehler:
      - wert: "-1"
        meldung: 'Die Stammfunktion von $\cos x$ ist $+\sin x$, nicht $-\sin x$. Das Minus gehört zur Stammfunktion des Sinus.'
  - typ: zahl
    label: 'b)'
    loesung: "ln(e^2) - ln(1)"
    fehler:
      - wert: "e^2 - 1"
        meldung: Die Stammfunktion von $\frac1x$ ist $\ln\lvert x\rvert$, nicht $x$.
  - typ: zahl
    label: 'c)'
    loesung: "exp(ln(3)) - exp(0)"
    fehler:
      - wert: "3"
        meldung: 'Die untere Grenze liefert $e^0$. Das ist $1$, nicht $0$.'
hinweise:
  - 'Stammfunktionen: $\sin x$, $\ln x$ und $e^x$. Danach jeweils „oben minus unten“ einsetzen.'
loesung: |
  **Ansatz:** Bei allen drei Integralen kennst du die Stammfunktion aus der Tabelle der Grundintegrale. Dann gilt der Hauptsatz.
  ---
  a) $\big[\sin x\big]_0^{\pi/2} = \sin\frac\pi2 - \sin 0 = 1 - 0 = 1$. b) $\big[\ln x\big]_1^{e^2} = \ln\left(e^2\right) - \ln 1 = 2 - 0 = 2$.
  ---
  c) $\big[e^x\big]_0^{\ln 3} = e^{\ln 3} - e^0 = 3 - 1 = 2$. Alle drei Ergebnisse sind positiv. Das passt, denn alle drei Integranden sind auf ihrem Intervall positiv.
```

```aufgabe
id: ir-integralfunktion
titel: Integralfunktion berechnen
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  Gegeben ist $I(x) = \displaystyle\int_2^x \left(3t^2 - 1\right)\dd t$.

  a) Bestimme $I(x)$ als Term in $x$.

  b) Berechne $I'(2)$.

  c) Welchen Wert hat $I(2)$?
teile:
  - typ: term
    label: 'a) $I(x)$'
    loesung: "x^3 - x - 6"
    fehler:
      - wert: "x^3 - x"
        meldung: Du hast die untere Grenze $2$ nicht eingesetzt. Zu $\big[t^3 - t\big]_2^x$ gehört auch „minus $F(2)$“.
  - typ: zahl
    label: "b) $I'(2)$"
    loesung: "3*2^2 - 1"
    fehler:
      - wert: "0"
        meldung: 'Das ist $I(2)$, nicht $I''(2)$. Nach dem Hauptsatz ist $I''(x)$ der Integrand an der Stelle $x$.'
  - typ: zahl
    label: 'c) $I(2)$'
    loesung: "0"
hinweise:
  - '$I(x) = \big[t^3 - t\big]_2^x$. Setze die obere Grenze $x$ und die untere Grenze $2$ ein.'
  - "Nach dem Hauptsatz ist $I'(x)$ einfach der Integrand an der Stelle $x$."
loesung: |
  **Ansatz:** Eine Stammfunktion von $3t^2 - 1$ ist $t^3 - t$. Wir setzen die Grenzen $2$ und $x$ ein.
  ---
  a) $I(x) = \big[t^3 - t\big]_2^x = (x^3 - x) - (8 - 2) = x^3 - x - 6$.
  ---
  b) Hauptsatz: $I'(x) = 3x^2 - 1$, also $I'(2) = 12 - 1 = 11$. Kontrolle über a): $(x^3 - x - 6)' = 3x^2 - 1$. Gleiches Ergebnis.
  ---
  c) $I(2) = 8 - 2 - 6 = 0$. Das muss so sein: Von $2$ bis $2$ liegt keine Fläche. Jede Integralfunktion $I_a$ hat bei $x = a$ eine Nullstelle.
```

```aufgabe
id: ir-integralfunktion-extrema
titel: Extremstellen einer Integralfunktion
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  Es sei $I(x) = \displaystyle\int_0^x (t - 2)(t - 5)\,\dd t$. Bestimme, ohne eine Stammfunktion auszurechnen, die Stellen,
  an denen $I$ ein lokales Maximum und ein lokales Minimum hat.
teile:
  - typ: zahl
    label: 'lokales Maximum bei $x =$'
    loesung: "2"
    fehler:
      - wert: "5"
        meldung: Bei $x = 5$ wechselt $I'$ von minus nach plus. Die Funktion fällt erst und steigt dann. Das ist ein Minimum.
  - typ: zahl
    label: 'lokales Minimum bei $x =$'
    loesung: "5"
    fehler:
      - wert: "2"
        meldung: Bei $x = 2$ wechselt $I'$ von plus nach minus. Die Funktion steigt erst und fällt dann. Das ist ein Maximum.
hinweise:
  - "Nach dem Hauptsatz ist $I'(x) = (x - 2)(x - 5)$."
  - "Bestimme das Vorzeichen von $I'$ links, zwischen und rechts der Nullstellen."
loesung: |
  **Ansatz:** Extremstellen findet man über die Ableitung. Der Hauptsatz liefert sie ohne Rechnung: $I'(x) = (x - 2)(x - 5)$.
  ---
  Kandidaten sind die Nullstellen $x = 2$ und $x = 5$. Vorzeichen von $I'$: für $x < 2$ positiv, zwischen $2$ und $5$ negativ, für $x > 5$ positiv.
  ---
  Bei $x = 2$ wechselt $I'$ von plus nach minus: lokales Maximum. Bei $x = 5$ von minus nach plus: lokales Minimum.
  ---
  **Anschaulich:** Bis $x = 2$ liegt der Integrand über der Achse, die Bilanz wächst. Zwischen $2$ und $5$ liegt er darunter, die Bilanz nimmt ab.
```

```aufgabe
id: ir-hauptsatz-fehler
titel: Fehlersuche beim Einsetzen
niveau: 2
lernziel: 2
kompetenz: begruenden
angabe: |
  Ein Mitschüler rechnet:
  $$\int_{-1}^{2} \left(3x^2 - 2x\right)\dd x = \Big[x^3 - x^2\Big]_{-1}^{2} = 8 - 4 - (-1)^3 - (-1)^2 = 4.$$
  a) Was ist schiefgelaufen?

  b) Berechne den richtigen Wert.
teile:
  - typ: auswahl
    label: 'a) Der Fehler'
    optionen:
      - Die Stammfunktion ist falsch.
      - Um $F(-1)$ fehlt die Klammer. Dadurch wird $(-1)^2$ abgezogen statt addiert.
      - Man darf über $x = 0$ nicht hinweg integrieren.
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Leite $x^3 - x^2$ ab. Du erhältst $3x^2 - 2x$, die Stammfunktion stimmt also.'
      - wert: 2
        meldung: Der Integrand ist ein Polynom und überall stetig. Der Hauptsatz gilt auf jedem Intervall.
  - typ: zahl
    label: 'b) richtiger Wert'
    loesung: "(8 - 4) - ((-1)^3 - (-1)^2)"
    fehler:
      - wert: "4"
        meldung: Das ist das Ergebnis des Mitschülers. Setze $F(-1)$ in Klammern.
      - wert: "2"
        meldung: Du hast $F(2) + F(-1)$ gerechnet. Der Hauptsatz verlangt die Differenz.
hinweise:
  - Leite zuerst $x^3 - x^2$ ab, um die Stammfunktion zu prüfen.
  - 'Berechne $F(-1)$ getrennt und setze den Wert dann in Klammern ein: $F(2) - \big(F(-1)\big)$.'
loesung: |
  **Ansatz:** Wir prüfen zuerst die Stammfunktion, dann das Einsetzen. $(x^3 - x^2)' = 3x^2 - 2x$, die Stammfunktion stimmt.
  ---
  $F(2) = 8 - 4 = 4$ und $F(-1) = (-1)^3 - (-1)^2 = -1 - 1 = -2$.
  ---
  Richtig ist $F(2) - F(-1) = 4 - (-2) = 6$. Der Mitschüler hat ohne Klammer gerechnet. Dadurch hat er den Summanden $(-1)^2 = 1$ abgezogen statt addiert, und sein Ergebnis ist um $2$ zu klein. **Ergebnis:** $6$.
```

```aufgabe
id: ir-hauptsatz-graph
titel: Vom Graphen der Funktion zur Integralfunktion
niveau: 3
lernziel: 2
kompetenz: verstehen
angabe: |
  Der Graph von $f(t) = 2 - t$ ist eine fallende Gerade (siehe Bild). Es sei $I(x) = \displaystyle\int_0^x f(t)\,\dd t$.

  a) Berechne $I(2)$ und $I(4)$ mit Dreiecksflächen, ohne Stammfunktion.

  b) An welcher Stelle hat $I$ auf $[0, 6]$ ihr Maximum?

  c) Begründe mit dem Hauptsatz, warum $I$ dort ein Maximum hat.
plot:
  x: [-0.5, 6.5]
  y: [-4.5, 2.5]
  graphen:
    - { f: "2 - x", farbe: 0, von: 0, bis: 6 }
teile:
  - typ: zahl
    label: 'a) $I(2)$'
    loesung: "(1/2)*2*2"
  - typ: zahl
    label: 'a) $I(4)$'
    loesung: "(1/2)*2*2 - (1/2)*2*2"
  - typ: zahl
    label: 'b) Maximumstelle'
    loesung: "2"
  - typ: text
    label: 'c) Begründung'
    muster: |
      Nach dem Hauptsatz ist $I'(x) = f(x) = 2 - x$. Für $x < 2$ ist $I' > 0$, die Bilanz wächst, weil Fläche über der Achse
      dazukommt. Für $x > 2$ ist $I' < 0$, die Bilanz nimmt ab, weil Fläche unter der Achse dazukommt. Bei $x = 2$ wechselt
      $I'$ von plus nach minus, also hat $I$ dort ein Maximum.
hinweise:
  - '$I(2)$ ist das Dreieck zwischen Graph und Achse von $0$ bis $2$. Bei $I(4)$ kommt ein Dreieck unter der Achse dazu.'
  - "Nach dem Hauptsatz ist $I'(x) = f(x)$. Wo wechselt $f$ das Vorzeichen?"
loesung: |
  **Ansatz:** $I(x)$ ist die Flächenbilanz von $0$ bis $x$. Weil der Graph eine Gerade ist, genügen Dreiecke.
  ---
  a) Von $0$ bis $2$ liegt ein Dreieck mit Grundlinie $2$ und Höhe $2$ über der Achse: $I(2) = 2$. Von $2$ bis $4$ kommt ein gleich großes Dreieck unter der Achse dazu: $I(4) = 2 - 2 = 0$.
  ---
  b) und c) Nach dem Hauptsatz ist $I'(x) = 2 - x$. Für $x < 2$ ist $I' > 0$, für $x > 2$ ist $I' < 0$. Also hat $I$ bei $x = 2$ ein Maximum, mit $I(2) = 2$.
  ---
  **Kontrolle mit der Stammfunktion:** $I(x) = 2x - \frac{x^2}{2}$. Das ergibt $I(2) = 4 - 2 = 2$, $I(4) = 8 - 8 = 0$ und $I(6) = 12 - 18 = -6$. Das Maximum auf $[0, 6]$ liegt also wirklich bei $x = 2$.
```

## Flächen berechnen

```aufgabe
id: ir-flaeche-vorwissen
titel: Nullstellen im Intervall
art: check
niveau: 1
angabe: |
  Welche Nullstellen hat $f(x) = x^2 - 9$ im Intervall $[0, 5]$? Zum Nachlesen:
  [Kapitel 2, Quadratische Gleichungen](/lernen/mathe3/gleichungen/quadratische-gleichungen).
teile:
  - typ: menge
    label: 'Nullstellen in $[0, 5]$'
    loesung: ["3"]
    fehler:
      - wert: ["-3", "3"]
        meldung: $-3$ ist auch eine Nullstelle von $f$, liegt aber nicht im Intervall $[0, 5]$.
loesung: |
  $x^2 - 9 = 0$ gilt für $x = 3$ und $x = -3$.
  ---
  Nur $x = 3$ liegt in $[0, 5]$. Gerade solche Nullstellen im Intervall sind bei Flächen wichtig.
```

Der Hauptsatz liefert Flächen*bilanzen*. In Aufgaben ist aber fast immer die **Fläche** gefragt, also eine
positive Zahl. Der Unterschied spielt genau dann eine Rolle, wenn der Graph im Intervall die $x$-Achse
schneidet. Dann musst du aufteilen.

### Fläche zwischen Graph und x-Achse

:::beispiel[Eine Parabel, die die Achse schneidet]
Gesucht ist die Fläche zwischen $f(x) = x^2 - 4$ und der $x$-Achse auf dem Intervall $[0, 3]$.

1. **Nullstelle im Intervall:** $x^2 - 4 = 0$ für $x = \pm 2$. Im Intervall liegt nur $x = 2$.
2. **Vorzeichen:** Auf $[0, 2]$ ist $f \le 0$, zum Beispiel $f(0) = -4$. Auf $[2, 3]$ ist $f \ge 0$.
3. **Stammfunktion:** $F(x) = \frac{x^3}{3} - 4x$.
4. **Erstes Teilintegral:** $\int_0^2 (x^2 - 4)\,\dd x = F(2) - F(0) = \frac83 - 8 = -\frac{16}{3}$. Es ist negativ, weil das Stück unter der Achse liegt.
5. **Zweites Teilintegral:** $\int_2^3 (x^2 - 4)\,\dd x = F(3) - F(2) = (9 - 12) - \left(\frac83 - 8\right) = -3 + \frac{16}{3} = \frac73$.
6. **Beträge addieren:** $A = \frac{16}{3} + \frac73 = \frac{23}{3} \approx 7{,}667$.

Das Integral über das ganze Intervall $[0, 3]$ wäre dagegen $-\frac{16}{3} + \frac73 = -3$. Das ist keine Fläche.
:::

```plot
x: [-0.4, 3.4]
y: [-4.5, 5.5]
achsen: { x: "x", y: "y" }
graphen:
  - { f: "x^2 - 4", label: "f(x) = x² − 4", farbe: 0 }
flaechen:
  - { f: "x^2 - 4", von: 0, bis: 2, farbe: 1 }
  - { f: "x^2 - 4", von: 2, bis: 3, farbe: 2 }
punkte:
  - { x: 2, y: 0, label: "Nullstelle 2" }
beschriftung: Zwischen 0 und 2 liegt die Fläche unterhalb der x-Achse (Integral −16/3), zwischen 2 und 3 oberhalb (Integral 7/3). Die Gesamtfläche ist 16/3 + 7/3 = 23/3.
```

:::beispiel[Ein Gartenbeet in Metern]
Ein Beet wird von der $x$-Achse und dem Bogen $f(x) = 4 - \frac{x^2}{4}$ begrenzt (alle Längen in Meter).
Wie groß ist das Beet?

1. **Nullstellen:** $4 - \frac{x^2}{4} = 0$ ergibt $x^2 = 16$, also $x = -4$ und $x = 4$.
2. **Vorzeichen:** Dazwischen ist $f \ge 0$, zum Beispiel $f(0) = 4$. Das ganze Stück liegt über der Achse.
3. **Integral:** $A = \int_{-4}^{4}\left(4 - \frac{x^2}{4}\right)\dd x = \left[4x - \frac{x^3}{12}\right]_{-4}^{4}$.
4. **Einsetzen:** $\left(16 - \frac{64}{12}\right) - \left(-16 + \frac{64}{12}\right) = 32 - \frac{32}{3} = \frac{64}{3} \approx 21{,}33$.
5. **Einheit:** Meter mal Meter ergibt Quadratmeter. Das Beet ist rund $21{,}3$ m² groß.

**Plausibilität:** Das umschließende Rechteck ist $8$ m breit und $4$ m hoch, also $32$ m² groß. Der
Parabelbogen füllt davon genau zwei Drittel.
:::

:::merke[Rezept: Fläche zwischen Graph und x-Achse auf einem Intervall]
1. Die **Nullstellen** von $f$ im Intervall bestimmen.
2. Das Intervall an den Nullstellen in Teilintervalle zerlegen. Auf jedem Teilintervall hat $f$ ein festes Vorzeichen.
3. Auf jedem Teilintervall das Integral berechnen.
4. Die **Beträge** der Teilintegrale addieren. Der Betrag $\lvert z\rvert$ macht aus einer negativen Zahl eine positive.
5. Eine Skizze machen. Sie zeigt, welche Teile unter der Achse liegen, und fängt Vorzeichenfehler ab.
:::

:::achtung[Nicht über Nullstellen hinweg integrieren]
Eine typische Fehlrechnung für die Fläche von $x^2 - 4$ auf $[0, 3]$:
$$A \overset{?}{=} \left|\int_0^3 (x^2 - 4)\,\dd x\right| = \lvert -3\rvert = 3.$$
Hier wurden die Teilflächen $\frac{16}{3}$ und $\frac73$ erst gegeneinander verrechnet und dann wurde der
Betrag genommen. Richtig ist $\frac{23}{3}$. Der Betrag gehört um **jedes Teilintegral einzeln**, nicht
um das Gesamtintegral.
:::

### Fläche zwischen zwei Kurven

Liegt auf $[a, b]$ der Graph von $f$ oberhalb des Graphen von $g$, dann ist die Fläche dazwischen
$$A = \int_a^b \big(f(x) - g(x)\big)\,\dd x.$$
Die Differenz $f(x) - g(x)$ ist an jeder Stelle die Höhe des Flächenstreifens zwischen den Kurven.

Das gilt sogar dann, wenn beide Graphen ganz oder teilweise unter der $x$-Achse liegen. Warum? Schiebe
beide Graphen um dieselbe Zahl nach oben, bis sie über der Achse liegen. Dabei ändert sich weder die
Fläche zwischen ihnen noch die Differenz $f - g$. Es kommt also nur darauf an, **welche Kurve oben liegt**.

:::beispiel[Parabel und Gerade]
Gesucht ist die Fläche zwischen $f(x) = x^2$ und $g(x) = x + 2$.

1. **Schnittstellen:** $x^2 = x + 2$ ist gleichwertig mit $x^2 - x - 2 = 0$, also $(x - 2)(x + 1) = 0$. Die Schnittstellen sind $x = -1$ und $x = 2$.
2. **Welche Kurve liegt oben?** Testwert $x = 0$ zwischen den Schnittstellen: $g(0) = 2$ und $f(0) = 0$. Die Gerade liegt oben.
3. **Integral der Differenz:** $A = \int_{-1}^{2} \left(x + 2 - x^2\right)\dd x = \left[\frac{x^2}{2} + 2x - \frac{x^3}{3}\right]_{-1}^{2}$.
4. **Einsetzen:** $\left(2 + 4 - \frac83\right) - \left(\frac12 - 2 + \frac13\right) = \frac{10}{3} - \left(-\frac76\right) = \frac{20}{6} + \frac76 = \frac{27}{6} = \frac92$.
:::

```plot
x: [-2, 3]
y: [-0.5, 5.5]
achsen: { x: "x", y: "y" }
graphen:
  - { f: "x^2", label: "f(x) = x²", farbe: 0 }
  - { f: "x + 2", label: "g(x) = x + 2", farbe: 1 }
flaechen:
  - { f: "x + 2", g: "x^2", von: -1, bis: 2, farbe: 2 }
punkte:
  - { x: -1, y: 1 }
  - { x: 2, y: 4 }
beschriftung: Die Fläche zwischen Gerade und Parabel liegt zwischen den Schnittstellen −1 und 2 und hat den Inhalt 9/2.
```

:::merke[Rezept: Fläche zwischen zwei Kurven]
1. Die Schnittstellen aus $f(x) = g(x)$ bestimmen. Sie sind meist die Integrationsgrenzen.
2. Die Differenzfunktion $d(x) = f(x) - g(x)$ bilden.
3. Zwischen je zwei benachbarten Schnittstellen $\int d(x)\,\dd x$ berechnen.
4. Die Beträge addieren. Schneiden sich die Graphen nur an den Rändern, genügt ein einziges Integral.
:::

:::achtung[Untere minus obere Kurve]
Wer die Reihenfolge vertauscht, rechnet beim Beispiel „Parabel und Gerade“
$$\int_{-1}^{2} \left(x^2 - x - 2\right)\dd x = -\frac92$$
und schreibt dann „Fläche $= -\frac92$“. Eine Fläche ist nie negativ. Das Minus zeigt dir nur, dass du
„unten minus oben“ gerechnet hast. Prüfe deshalb mit einem Testwert, welche Kurve oben liegt.
:::

```aufgabe
id: ir-flaeche-vorhersage
titel: Was passiert mit der Fläche?
art: check
niveau: 1
angabe: |
  Die Gerade $y = kx$ mit $k > 0$ und die Parabel $y = x^2$ schließen eine Fläche ein. Sag voraus, bevor du das Widget
  benutzt: Was passiert mit dieser Fläche, wenn du $k$ verdoppelst?
teile:
  - typ: auswahl
    optionen:
      - Sie verdoppelt sich.
      - Sie vervierfacht sich.
      - Sie wird achtmal so groß.
      - Sie bleibt gleich.
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Mit $k$ wächst nicht nur die Breite der Fläche, sondern auch ihre Höhe. Beides zusammen wirkt stärker als eine Verdopplung.
      - wert: 1
        meldung: Breite und Höhe wachsen beide. Die Höhe wächst aber schneller als die Breite, weil die Parabel quadratisch steigt. Probiere es im Widget aus.
      - wert: 3
        meldung: Die zweite Schnittstelle liegt bei $x = k$. Wandert sie nach rechts, wird das Flächenstück größer.
loesung: |
  Die Schnittstellen sind $x = 0$ und $x = k$. Bei doppeltem $k$ wird die Fläche doppelt so breit. Die Höhe in der Mitte ist $\frac{k^2}{4}$, sie wird viermal so groß.
  ---
  Zusammen ergibt das den Faktor $2\cdot 4 = 8$. Im Widget kannst du das nachprüfen. Die genaue Rechnung ist die Aufgabe „Parabel und Gerade mit Parameter“ in [10.13 Prüfungsaufgaben](/lernen/mathe3/integralrechnung/pruefungsaufgaben).
```

```widget
name: parameter
titel: Fläche zwischen Parabel und Ursprungsgerade
props:
  f: "k*x"
  parameter:
    - { name: k, min: 0.5, max: 4, step: 0.5, wert: 2 }
  zusatz: ["x^2"]
  x: [-1, 5]
  y: [-1, 17]
```

Im Widget schneidet die Gerade $y = kx$ die Parabel $y = x^2$ bei $x = 0$ und $x = k$. Stelle $k = 1$
und dann $k = 2$ ein und vergleiche die eingeschlossenen Flächen. Die rechte Schnittstelle wandert
mit $k$ nach rechts, und gleichzeitig wird das Flächenstück höher. Deshalb wächst die Fläche viel
schneller als $k$.

```reflexion
frage: Warum darf man bei der Fläche zwischen zwei Kurven ignorieren, ob die Kurven über oder unter der $x$-Achse liegen, bei der Fläche zwischen einer Kurve und der $x$-Achse aber nicht?
antwort: |
  Bei zwei Kurven zählt nur die Differenz $f(x) - g(x)$, also der senkrechte Abstand der Kurven. Schiebt man beide um
  dieselbe Zahl nach oben, ändert sich dieser Abstand nicht. Die Lage zur Achse spielt also keine Rolle, nur welche Kurve
  oben liegt. Bei einer einzigen Kurve ist die zweite „Kurve“ die $x$-Achse selbst. Dort entscheidet das Vorzeichen von
  $f$, welche der beiden oben liegt. Deshalb muss man an den Nullstellen aufteilen.
```

```aufgabe
id: ir-flaeche-parabel
titel: Fläche unter einem Parabelbogen
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Berechne die Fläche, die der Graph von $f(x) = -x^2 + 4x$ mit der $x$-Achse einschließt.
teile:
  - typ: zahl
    label: 'Fläche $A$'
    loesung: "-64/3 + 2*16"
    anzeige: '\tfrac{32}{3} \approx 10{,}667'
    fehler:
      - wert: "-64/3 + 4*16"
        meldung: Die Stammfunktion von $4x$ ist $2x^2$, nicht $4x^2$. Nach dem Erhöhen der Hochzahl musst du durch $2$ teilen.
      - wert: "-64 + 32"
        meldung: Die Stammfunktion von $-x^2$ ist $-\frac{x^3}{3}$. Das Teilen durch $3$ fehlt.
hinweise:
  - 'Die Nullstellen sind die Grenzen: $-x^2 + 4x = -x(x - 4) = 0$.'
loesung: |
  **Ansatz:** Die Fläche liegt zwischen den beiden Nullstellen. Dort hat $f$ ein festes Vorzeichen.
  ---
  Nullstellen: $-x(x - 4) = 0$ für $x = 0$ und $x = 4$. Dazwischen ist $f \ge 0$, denn die Parabel ist nach unten offen. Ein Integral genügt.
  ---
  $A = \int_0^4 (-x^2 + 4x)\,\dd x = \left[-\frac{x^3}{3} + 2x^2\right]_0^4 = -\frac{64}{3} + 32 = \frac{32}{3} \approx 10{,}667$. **Plausibilität:** Das Rechteck mit Breite $4$ und Scheitelhöhe $f(2) = 4$ hat $16$, der Bogen füllt zwei Drittel davon.
```

```aufgabe
id: ir-flaeche-gerade-achsen
titel: Dreieck unter einer Geraden
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Die Gerade $g(x) = 6 - 2x$ schließt mit den beiden Koordinatenachsen ein Dreieck ein. Berechne seine Fläche mit einem
  Integral und kontrolliere mit der Dreiecksformel.
teile:
  - typ: zahl
    label: 'Fläche $A$'
    loesung: "6*3 - 3^2"
    fehler:
      - wert: "0"
        meldung: Die Stammfunktion von $2x$ ist $x^2$, nicht $2x^2$. Prüfe sie durch Ableiten.
      - wert: "18"
        meldung: Du hast nur $6x$ eingesetzt. Auch der Summand $-x^2$ der Stammfunktion gehört dazu.
hinweise:
  - Die Nullstelle von $g$ ist die rechte Grenze. Die linke Grenze ist die $y$-Achse, also $x = 0$.
loesung: |
  **Ansatz:** Das Dreieck liegt zwischen $x = 0$ und der Nullstelle von $g$. Dort ist $g \ge 0$.
  ---
  Nullstelle: $6 - 2x = 0$ für $x = 3$. Integral: $A = \int_0^3 (6 - 2x)\,\dd x = \big[6x - x^2\big]_0^3 = 18 - 9 = 9$.
  ---
  **Kontrolle:** Das Dreieck hat die Katheten $3$ (auf der $x$-Achse) und $6$ (auf der $y$-Achse). Fläche $\frac12\cdot 3\cdot 6 = 9$. Beide Wege stimmen überein.
```

```aufgabe
id: ir-flaeche-vorzeichenwechsel
titel: Integral oder Fläche?
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: |
  Gegeben ist $f(x) = x^2 - 1$ auf dem Intervall $[0, 2]$.

  a) Berechne $\displaystyle\int_0^2 f(x)\,\dd x$.

  b) Berechne die Fläche zwischen dem Graphen von $f$ und der $x$-Achse über $[0, 2]$.
teile:
  - typ: zahl
    label: 'a) Integral'
    loesung: "8/3 - 2"
    anzeige: '\tfrac23'
    fehler:
      - wert: "2"
        meldung: Das ist die Fläche. Das Integral ist die Bilanz, in der das Stück unter der Achse negativ zählt.
  - typ: zahl
    label: 'b) Fläche'
    loesung: "abs(1/3 - 1) + abs((8/3 - 2) - (1/3 - 1))"
    anzeige: '2'
    fehler:
      - wert: "2/3"
        meldung: Das ist die Bilanz aus a). Bei der Fläche darfst du nicht über die Nullstelle hinweg integrieren.
hinweise:
  - Für die Fläche brauchst du die Nullstelle im Intervall.
  - 'Berechne die Teilintegrale auf $[0, 1]$ und $[1, 2]$ getrennt und addiere ihre Beträge.'
loesung: |
  **Ansatz:** Das Integral ist eine Bilanz. Für die Fläche teilen wir an der Nullstelle auf. Stammfunktion: $F(x) = \frac{x^3}{3} - x$.
  ---
  a) $\int_0^2 f\,\dd x = F(2) - F(0) = \frac83 - 2 = \frac23$.
  ---
  b) Nullstelle im Intervall: $x = 1$. $\int_0^1 f\,\dd x = \frac13 - 1 = -\frac23$ und $\int_1^2 f\,\dd x = \frac23 - \left(-\frac23\right) = \frac43$.
  ---
  $A = \frac23 + \frac43 = 2$. **Kontrolle:** Die Bilanz aus a) ist $-\frac23 + \frac43 = \frac23$. Sie passt zu den Teilintegralen.
gefuehrt:
  - text: Bestimme die Nullstelle von $f$ im Intervall $[0, 2]$.
    teil: { typ: zahl, loesung: "1", fehler: [ { wert: "-1", meldung: '$-1$ ist auch eine Nullstelle, liegt aber nicht in $[0, 2]$.' } ] }
    erklaerung: '$x^2 - 1 = 0$ für $x = \pm 1$. Im Intervall liegt nur $x = 1$.'
  - text: Berechne das Teilintegral $\int_0^1 (x^2 - 1)\,\dd x$.
    teil: { typ: zahl, loesung: "-2/3" }
    erklaerung: '$\left[\frac{x^3}{3} - x\right]_0^1 = \frac13 - 1 = -\frac23$. Negativ, weil das Stück unter der Achse liegt.'
  - text: Berechne das Teilintegral $\int_1^2 (x^2 - 1)\,\dd x$.
    teil: { typ: zahl, loesung: "4/3" }
    erklaerung: '$\left(\frac83 - 2\right) - \left(\frac13 - 1\right) = \frac23 + \frac23 = \frac43$.'
  - text: Addiere die Beträge. Wie groß ist die Fläche?
    teil: { typ: zahl, loesung: "2", fehler: [ { wert: "2/3", meldung: 'Das ist die Bilanz. Nimm von jedem Teilintegral den Betrag.' } ] }
    erklaerung: '$A = \frac23 + \frac43 = 2$.'
```

```aufgabe
id: ir-flaeche-kubisch
titel: Symmetrische kubische Funktion
niveau: 2
lernziel: 3
kompetenz: begruenden
angabe: |
  Gegeben ist $f(x) = x^3 - 4x$.

  a) Berechne $\displaystyle\int_{-2}^{2} f(x)\,\dd x$ und begründe das Ergebnis mit einer Symmetrie.

  b) Berechne die gesamte Fläche, die der Graph mit der $x$-Achse einschließt.
plot:
  x: [-2.6, 2.6]
  y: [-4, 4]
  graphen:
    - { f: "x^3 - 4x", farbe: 0 }
teile:
  - typ: zahl
    label: 'a) Integral'
    loesung: "0"
    fehler:
      - wert: "8"
        meldung: Das ist die Fläche. Im Integral heben sich die beiden gleich großen Stücke über und unter der Achse auf.
  - typ: zahl
    label: 'b) Fläche'
    loesung: "2*(2*4 - 16/4)"
    fehler:
      - wert: "0"
        meldung: Das ist die Bilanz. Für die Fläche musst du bei $x = 0$ aufteilen.
      - wert: "4"
        meldung: Das ist nur ein Flächenstück. Das zweite Stück auf der anderen Seite des Ursprungs ist gleich groß.
hinweise:
  - '$f$ ist ungerade: $f(-x) = -f(x)$. Die Nullstellen folgen aus $x(x^2 - 4) = 0$.'
  - 'Auf $[0, 2]$ ist $f \le 0$. Rechne dort mit $\int_0^2 (4x - x^3)\,\dd x$ und verdopple wegen der Symmetrie.'
loesung: |
  **Ansatz:** Nullstellen und Symmetrie zuerst. $f(-x) = -x^3 + 4x = -f(x)$, also ist der Graph punktsymmetrisch zum Ursprung. Nullstellen: $-2$, $0$ und $2$.
  ---
  a) $\left[\frac{x^4}{4} - 2x^2\right]_{-2}^{2} = (4 - 8) - (4 - 8) = 0$. Das Stück links über der Achse und das Stück rechts unter der Achse sind gleich groß und heben sich auf.
  ---
  b) Auf $[0, 2]$ liegt $f$ unter der Achse. Dort ist $\int_0^2 (4x - x^3)\,\dd x = \left[2x^2 - \frac{x^4}{4}\right]_0^2 = 8 - 4 = 4$.
  ---
  Wegen der Symmetrie hat das Stück auf $[-2, 0]$ ebenfalls die Fläche $4$. Gesamtfläche $A = 8$.
```

```aufgabe
id: ir-flaeche-zwei-kurven
titel: Fläche zwischen Parabel und Gerade
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Berechne die Fläche, die die Graphen von $f(x) = x^2$ und $g(x) = 2x + 3$ einschließen.
teile:
  - typ: zahl
    label: 'Fläche $A$'
    loesung: "(9 + 9 - 9) - (1 - 3 + 1/3)"
    anzeige: '\tfrac{32}{3} \approx 10{,}667'
    fehler:
      - wert: "9"
        meldung: Du hast nur die obere Grenze eingesetzt. Die untere Grenze $-1$ liefert einen Wert ungleich $0$, und der muss abgezogen werden.
      - wert: "-32/3"
        meldung: Das Vorzeichen zeigt, dass du „unten minus oben“ gerechnet hast. Prüfe mit einem Testwert, welche Kurve oben liegt.
hinweise:
  - 'Die Schnittstellen folgen aus $x^2 = 2x + 3$, also $x^2 - 2x - 3 = 0$.'
  - 'Teste mit $x = 0$, welche Kurve zwischen den Schnittstellen oben liegt. Integriere dann „obere minus untere Kurve“.'
loesung: |
  **Ansatz:** Die Fläche liegt zwischen den Schnittstellen. Wir integrieren dort die Differenz „obere minus untere Kurve“.
  ---
  Schnittstellen: $x^2 - 2x - 3 = (x - 3)(x + 1) = 0$, also $x = -1$ und $x = 3$. Testwert $x = 0$: $g(0) = 3 > f(0) = 0$. Die Gerade liegt oben.
  ---
  $A = \int_{-1}^{3} \left(2x + 3 - x^2\right)\dd x = \left[x^2 + 3x - \frac{x^3}{3}\right]_{-1}^{3} = (9 + 9 - 9) - \left(1 - 3 + \frac13\right) = 9 + \frac53 = \frac{32}{3}$.
  ---
  **Ergebnis:** $A = \frac{32}{3} \approx 10{,}667$. **Kontrolle:** Steht vor $x^2$ der Faktor $1$ (wie hier), gilt für die Fläche zwischen Parabel und Gerade die Formel $\frac{(x_2 - x_1)^3}{6}$. Dabei sind $x_1$ und $x_2$ die beiden Schnittstellen. Hier ergibt das $\frac{4^3}{6} = \frac{64}{6} = \frac{32}{3}$.
```

```aufgabe
id: ir-flaeche-fehler
titel: Fehlersuche bei einer Fläche
niveau: 2
lernziel: 3
kompetenz: begruenden
angabe: |
  Gesucht ist die Fläche zwischen dem Graphen von $f(x) = x^3$ und der $x$-Achse auf $[-1, 2]$. Jemand rechnet:
  $$A = \int_{-1}^{2} x^3\,\dd x = \left[\frac{x^4}{4}\right]_{-1}^{2} = 4 - \frac14 = \frac{15}{4}.$$
  a) Was ist falsch?

  b) Wie groß ist die Fläche wirklich?
teile:
  - typ: auswahl
    label: 'a) Der Fehler'
    optionen:
      - Die Stammfunktion ist falsch.
      - Es wurde über die Nullstelle $x = 0$ hinweg integriert. Das Stück auf $[-1, 0]$ liegt unter der Achse und wurde abgezogen.
      - Die Grenzen sind vertauscht.
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Leite $\frac{x^4}{4}$ ab. Du erhältst $x^3$, die Stammfunktion stimmt also.'
      - wert: 2
        meldung: Die Grenzen stehen richtig, untere Grenze $-1$, obere Grenze $2$. Schau dir das Vorzeichen von $x^3$ auf $[-1, 0]$ an.
  - typ: zahl
    label: 'b) Fläche'
    loesung: "1/4 + 4"
    anzeige: '\tfrac{17}{4} = 4{,}25'
    fehler:
      - wert: "15/4"
        meldung: Das ist die Bilanz. Teile an der Nullstelle $x = 0$ auf und addiere die Beträge.
hinweise:
  - Welches Vorzeichen hat $x^3$ für negative $x$?
  - 'Berechne $\int_{-1}^{0} x^3\,\dd x$ und $\int_0^2 x^3\,\dd x$ getrennt.'
loesung: |
  **Ansatz:** Für eine Fläche muss man an Nullstellen aufteilen. $x^3$ hat die Nullstelle $x = 0$, und sie liegt im Intervall.
  ---
  a) Für $x < 0$ ist $x^3 < 0$. Das Stück auf $[-1, 0]$ liegt unter der Achse. Im Gesamtintegral wurde es deshalb abgezogen statt addiert.
  ---
  b) $\int_{-1}^{0} x^3\,\dd x = 0 - \frac14 = -\frac14$ und $\int_0^2 x^3\,\dd x = 4$.
  ---
  $A = \frac14 + 4 = \frac{17}{4} = 4{,}25$. Die falsche Rechnung lag um $2\cdot\frac14 = \frac12$ zu niedrig.
```

```aufgabe
id: ir-flaeche-sin-cos
titel: Fläche zwischen Sinus und Kosinus
niveau: 3
lernziel: 3
kompetenz: rechnen
angabe: |
  Berechne die Fläche, die die Graphen von $\sin x$ und $\cos x$ über dem Intervall $[0, \pi]$ miteinander einschließen.
  Gib das Ergebnis exakt und auf drei Dezimalstellen an.
plot:
  x: [0, "pi"]
  y: [-1.2, 1.2]
  graphen:
    - { f: "sin(x)", farbe: 0 }
    - { f: "cos(x)", farbe: 1 }
  flaechen:
    - { f: "cos(x)", g: "sin(x)", von: 0, bis: "pi/4", farbe: 2 }
    - { f: "sin(x)", g: "cos(x)", von: "pi/4", bis: "pi", farbe: 3 }
teile:
  - typ: zahl
    label: 'Fläche $A$'
    loesung: "(sin(pi/4) + cos(pi/4) - 1) + ((1 - 0) - (-cos(pi/4) - sin(pi/4)))"
    anzeige: '2\sqrt2 \approx 2{,}828'
    fehler:
      - wert: "2"
        meldung: Das ist die Bilanz über das ganze Intervall. Die Kurven kreuzen sich bei $\frac\pi4$, dort musst du aufteilen.
hinweise:
  - 'Schnittstelle in $[0, \pi]$: $\sin x = \cos x$ ist gleichwertig mit $\tan x = 1$.'
  - 'Auf $\left[0, \frac\pi4\right]$ liegt der Kosinus oben, auf $\left[\frac\pi4, \pi\right]$ der Sinus. Integriere jeweils „oben minus unten“.'
loesung: |
  **Ansatz:** Fläche zwischen zwei Kurven. Wir brauchen die Schnittstellen im Intervall und müssen dort aufteilen.
  ---
  Schnittstelle: $\tan x = 1$ hat in $[0, \pi]$ nur die Lösung $x = \frac\pi4$. Dort ist $\sin\frac\pi4 = \cos\frac\pi4 = \frac{\sqrt2}{2}$.
  ---
  Erstes Stück, Kosinus oben: $\int_0^{\pi/4} (\cos x - \sin x)\,\dd x = \big[\sin x + \cos x\big]_0^{\pi/4} = \sqrt2 - 1$.
  ---
  Zweites Stück, Sinus oben: $\int_{\pi/4}^{\pi} (\sin x - \cos x)\,\dd x = \big[-\cos x - \sin x\big]_{\pi/4}^{\pi} = (1 - 0) - (-\sqrt2) = 1 + \sqrt2$.
  ---
  $A = (\sqrt2 - 1) + (1 + \sqrt2) = 2\sqrt2 \approx 2{,}828$. **Plausibilität:** Die Fläche passt in ein Rechteck der Breite $\pi$ und der Höhe $2$, also unter $6{,}3$.
```

## Integrale mit gesuchter Grenze oder gesuchtem Parameter

```aufgabe
id: ir-grenze-vorwissen
titel: Eine Potenzgleichung lösen
art: check
niveau: 1
angabe: |
  Löse $\frac{c^3}{3} = 9$ für $c > 0$. Zum Nachlesen:
  [Kapitel 1, Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln).
teile:
  - typ: zahl
    label: '$c$'
    loesung: "3"
    fehler:
      - wert: "27"
        meldung: '$c^3 = 27$ ist ein Zwischenschritt. Danach musst du noch die dritte Wurzel ziehen.'
      - wert: "nthRoot(9, 3)"
        meldung: Zuerst beide Seiten mit $3$ multiplizieren, damit der Bruch verschwindet. Erst dann die Wurzel ziehen.
loesung: |
  Beide Seiten mit $3$ multiplizieren, damit der Bruch verschwindet: $c^3 = 27$.
  ---
  Die dritte Wurzel ziehen: $c = \sqrt[3]{27} = 3$. Probe: $\frac{27}{3} = 9$.
```

Bisher waren Grenzen und Funktion gegeben, und gesucht war der Wert des Integrals. Prüfungsaufgaben
drehen das gern um. Der Wert ist bekannt, oder es ist eine Beziehung zwischen zwei Integralen
vorgegeben. Gesucht ist eine **Grenze** oder ein **Parameter**. Ein Parameter ist eine Zahl im
Funktionsterm, die noch nicht festgelegt ist, etwa das $a$ in $f_a(x) = a\,x(3 - x)$.

Das Vorgehen ist immer gleich:

1. Das Integral allgemein ausrechnen. Das Ergebnis ist ein Term, in dem die Unbekannte vorkommt.
2. Diesen Term gleich dem vorgegebenen Wert setzen.
3. Die entstehende Gleichung lösen. Das ist Stoff aus [Kapitel 2](/lernen/mathe3/gleichungen).
4. Prüfen, welche Lösungen zulässig sind.

:::beispiel[Wann sind 60 Liter im Tank?]
Ein Tank wird gefüllt. Die Zuflussrate ist $r(t) = 4 + 2t$ in Liter pro Minute. Nach wie vielen Minuten
sind $60$ Liter zugeflossen?

1. **Integral als Term:** Die Wassermenge bis zur Zeit $T$ ist $\int_0^T (4 + 2t)\,\dd t = \big[4t + t^2\big]_0^T = 4T + T^2$.
2. **Gleichung:** $4T + T^2 = 60$, also $T^2 + 4T - 60 = 0$.
3. **Lösen:** Die Gleichung lässt sich zerlegen: $(T + 10)(T - 6) = 0$. Also $T = -10$ oder $T = 6$.
4. **Zulässigkeit:** Eine Zeit nach dem Start ist positiv. $T = -10$ fällt weg.

**Antwort:** Nach $6$ Minuten sind $60$ Liter im Tank. Probe: $4\cdot 6 + 36 = 60$.
:::

:::beispiel[Fläche halbieren, nach dem Typ einer Musterprüfung]
Für $f(x) = x^3$ auf $[0, 2]$ ist $c$ zwischen $0$ und $2$ gesucht mit
$$\int_0^c x^3\,\dd x = \int_c^2 x^3\,\dd x.$$
**Bedeutung:** Die senkrechte Gerade $x = c$ teilt die Fläche unter dem Graphen in zwei gleich große Teile.

1. **Linke Seite:** $\left[\frac{x^4}{4}\right]_0^c = \frac{c^4}{4}$.
2. **Rechte Seite:** $\left[\frac{x^4}{4}\right]_c^2 = 4 - \frac{c^4}{4}$.
3. **Gleichsetzen:** $\frac{c^4}{4} = 4 - \frac{c^4}{4}$. Wir addieren $\frac{c^4}{4}$ auf beiden Seiten: $\frac{c^4}{2} = 4$, also $c^4 = 8$.
4. **Lösen:** $c = \sqrt[4]{8} \approx 1{,}682$. Die negative vierte Wurzel liegt nicht in $[0, 2]$.

**Kontrolle:** $c \approx 1{,}682$ liegt in $[0, 2]$. Der Graph ist rechts viel höher. Die Teilungsstelle muss also
rechts von der Intervallmitte $1$ liegen. Das passt.

**Kürzerer Weg:** Die Gesamtfläche ist $\int_0^2 x^3\,\dd x = 4$. Jede Hälfte hat $2$. Also gilt $\frac{c^4}{4} = 2$.
Das ergibt dasselbe Ergebnis mit einer Zeile weniger.
:::

```plot
x: [-0.2, 2.2]
y: [-0.5, 8.5]
achsen: { x: "x", y: "y" }
graphen:
  - { f: "x^3", label: "f(x) = x³", farbe: 0, von: 0, bis: 2 }
flaechen:
  - { f: "x^3", von: 0, bis: "nthRoot(8, 4)", farbe: 0 }
  - { f: "x^3", von: "nthRoot(8, 4)", bis: 2, farbe: 1 }
strecken:
  - { von: ["nthRoot(8, 4)", 0], nach: ["nthRoot(8, 4)", "nthRoot(8, 4)^3"], gestrichelt: true }
punkte:
  - { x: "nthRoot(8, 4)", y: 0, label: "c ≈ 1,682" }
beschriftung: Die Gerade x = c teilt die Fläche unter x³ auf [0, 2] in zwei Teile mit je 2 Flächeneinheiten. Der linke Teil ist viel breiter, weil der Graph dort niedrig ist.
```

:::beispiel[Ein Parameter im Funktionsterm]
Für $a > 0$ sei $f_a(x) = a - x^2$. Für welches $a$ schließt der Graph mit der $x$-Achse die Fläche $36$ ein?

1. **Nullstellen:** $a - x^2 = 0$ für $x = \pm\sqrt a$. Dazwischen ist $f_a \ge 0$.
2. **Fläche als Term:** Der Graph ist symmetrisch zur $y$-Achse. Also ist
   $A(a) = 2\int_0^{\sqrt a} (a - x^2)\,\dd x = 2\left[a x - \frac{x^3}{3}\right]_0^{\sqrt a}$.
3. **Vereinfachen:** Es gilt $\left(\sqrt a\right)^3 = a\sqrt a$. Damit ist
   $A(a) = 2\left(a\sqrt a - \frac{a\sqrt a}{3}\right) = \frac43\,a\sqrt a$.
4. **Gleichung:** $\frac43\,a\sqrt a = 36$, also $a\sqrt a = a^{3/2} = 27$.
5. **Lösen:** Beide Seiten hoch $\frac23$: $a = 27^{2/3} = 9$.

**Probe:** Für $a = 9$ liegen die Nullstellen bei $\pm 3$. $A = 2\left(27 - 9\right) = 36$. Es stimmt.
:::

:::achtung[Lösungen auf Zulässigkeit prüfen]
Beim Auflösen entstehen oft mehrere Lösungen. Eine typische Fehlrechnung zum Tank-Beispiel:
„$T^2 + 4T - 60 = 0$, also $T = -10$ **und** $T = 6$.“ Eine negative Zeit liegt vor dem Füllbeginn. Nur
Lösungen im zulässigen Bereich gelten: im Intervall, positive Zeit, positive Länge. Schreib ausdrücklich
dazu, welche Lösung du verwirfst und warum.
:::

:::achtung[Halbieren heißt nicht: Intervallmitte]
Eine verbreitete Abkürzung lautet: „Die Fläche unter $x^3$ auf $[0, 2]$ wird bei der Mitte $c = 1$ halbiert.“
Die Probe widerlegt das: $\int_0^1 x^3\,\dd x = \frac14$, aber $\int_1^2 x^3\,\dd x = 4 - \frac14 = \frac{15}{4}$.
Die Mitte des Intervalls halbiert die Fläche zum Beispiel dann, wenn der Graph spiegelsymmetrisch zur
Mitte verläuft, etwa bei einer konstanten Funktion. Bei einem wachsenden Graphen wie $x^3$ liegt rechts
mehr Fläche als links. Darauf ist kein Verlass, du musst rechnen.
:::

:::merke[Rezept: Integralgleichung]
1. Das Integral mit der Unbekannten als Term ausrechnen.
2. Die Bedingung als Gleichung hinschreiben. Beim Halbieren ist ein Teil gleich der halben Gesamtfläche.
3. Die Gleichung lösen.
4. Jede Lösung auf Zulässigkeit prüfen und eine Plausibilitätskontrolle machen.
:::

```reflexion
frage: Warum liegt die Stelle, die die Fläche unter einer wachsenden Funktion halbiert, immer rechts von der Intervallmitte?
antwort: |
  Bei einer wachsenden Funktion ist der Graph rechts höher als links. Die rechte Hälfte des Intervalls enthält deshalb
  mehr Fläche als die linke. Damit beide Teile gleich groß werden, muss der linke Teil breiter sein. Die Trennstelle
  rutscht also nach rechts. Bei einer fallenden Funktion ist es genau umgekehrt.
```

```aufgabe
id: ir-grenze-gesucht
titel: Obere Grenze gesucht
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Bestimme $b > 0$ so, dass $\displaystyle\int_0^b (2x + 1)\,\dd x = 12$ gilt.
teile:
  - typ: zahl
    label: '$b$'
    loesung: "3"
    fehler:
      - wert: "-4"
        meldung: '$-4$ löst die Gleichung, aber in der Angabe steht $b > 0$. Diese Lösung musst du verwerfen.'
hinweise:
  - 'Das Integral ergibt $b^2 + b$. Löse dann die quadratische Gleichung $b^2 + b = 12$.'
loesung: |
  **Ansatz:** Integral als Term in $b$, dann gleich $12$ setzen. $\int_0^b (2x + 1)\,\dd x = \big[x^2 + x\big]_0^b = b^2 + b$.
  ---
  $b^2 + b = 12$, also $b^2 + b - 12 = 0$ und zerlegt $(b + 4)(b - 3) = 0$.
  ---
  $b = -4$ ist wegen $b > 0$ ausgeschlossen. Also $b = 3$. **Probe:** $9 + 3 = 12$.
```

```aufgabe
id: ir-grenze-potenz
titel: Grenze unter der Normalparabel
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Bestimme $b > 0$ so, dass die Fläche unter $f(x) = x^2$ von $0$ bis $b$ genau $9$ beträgt.
teile:
  - typ: zahl
    label: '$b$'
    loesung: "3"
    fehler:
      - wert: "nthRoot(9, 3)"
        meldung: Die Stammfunktion von $x^2$ ist $\frac{x^3}{3}$. Das Teilen durch $3$ fehlt in deiner Gleichung.
      - wert: "27"
        meldung: '$b^3 = 27$ ist richtig. Danach musst du noch die dritte Wurzel ziehen.'
hinweise:
  - 'Die Fläche ist $\int_0^b x^2\,\dd x = \frac{b^3}{3}$. Setze das gleich $9$.'
loesung: |
  **Ansatz:** $x^2 \ge 0$, also ist die Fläche gleich dem Integral. $\int_0^b x^2\,\dd x = \frac{b^3}{3}$.
  ---
  $\frac{b^3}{3} = 9$ ergibt $b^3 = 27$ und $b = 3$. **Probe:** $\frac{27}{3} = 9$.
```

```aufgabe
id: ir-parameter-flaeche
titel: Parameter aus der Fläche bestimmen
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Für $a > 0$ sei $f_a(x) = a\,x\,(3 - x)$. Bestimme $a$ so, dass der Graph von $f_a$ mit der $x$-Achse eine Fläche von
  $18$ Flächeneinheiten einschließt.
teile:
  - typ: zahl
    label: '$a$'
    loesung: "18/(27/2 - 9)"
    fehler:
      - wert: "4/3"
        meldung: In deiner Rechnung fehlt der Summand $-\frac{x^3}{3}$ der Stammfunktion. Multipliziere zuerst aus und integriere jeden Summanden.
      - wert: "1"
        meldung: Prüfe die Stammfunktion von $3x$. Nach dem Erhöhen der Hochzahl musst du noch durch $2$ teilen.
hinweise:
  - 'Die Nullstellen $0$ und $3$ hängen nicht von $a$ ab. Ziehe $a$ als Faktor vor das Integral.'
  - 'Multipliziere $x(3 - x) = 3x - x^2$ aus und integriere von $0$ bis $3$.'
loesung: |
  **Ansatz:** Fläche als Term in $a$, dann gleich $18$ setzen. Die Nullstellen sind $x = 0$ und $x = 3$. Für $a > 0$ ist $f_a \ge 0$ dazwischen.
  ---
  $A(a) = a\int_0^3 (3x - x^2)\,\dd x = a\left[\frac{3x^2}{2} - \frac{x^3}{3}\right]_0^3 = a\left(\frac{27}{2} - 9\right) = \frac92\,a$.
  ---
  $\frac92\,a = 18$ ergibt $a = 4$. **Probe:** $\frac92\cdot 4 = 18$.
```

```aufgabe
id: ir-grenze-zwei-loesungen
titel: Zwei zulässige Grenzen
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: |
  Bestimme alle $b > 0$, für die $\displaystyle\int_0^b (6 - 2x)\,\dd x = 8$ gilt. Gib alle Lösungen an, getrennt durch einen
  Strichpunkt.
teile:
  - typ: menge
    label: 'alle $b$'
    loesung: ["2", "4"]
    fehler:
      - wert: ["2"]
        meldung: '$b = 2$ stimmt. Prüfe aber auch die zweite Lösung der quadratischen Gleichung. Sie ist ebenfalls positiv.'
      - wert: ["-2", "-4"]
        meldung: Prüfe die Vorzeichen in der Zerlegung. Setze deine Werte zur Probe in $6b - b^2$ ein.
hinweise:
  - 'Das Integral ergibt $6b - b^2$. Die Gleichung $6b - b^2 = 8$ hat zwei Lösungen.'
  - Prüfe beide Lösungen mit der Bedingung $b > 0$. Überlege mit der Flächenbilanz, warum beide passen können.
loesung: |
  **Ansatz:** $\int_0^b (6 - 2x)\,\dd x = \big[6x - x^2\big]_0^b = 6b - b^2$. Diesen Term setzen wir gleich $8$.
  ---
  $6b - b^2 = 8$ ist gleichwertig mit $b^2 - 6b + 8 = 0$, zerlegt $(b - 2)(b - 4) = 0$. Also $b = 2$ oder $b = 4$.
  ---
  Beide Lösungen sind positiv, also beide zulässig. **Deutung:** Der Graph schneidet die Achse bei $x = 3$. Bis $b = 3$ wächst die Bilanz auf $9$. Danach wird Fläche abgezogen, und bei $b = 4$ ist sie wieder auf $8$ gesunken.
gefuehrt:
  - text: Bestimme eine Stammfunktion von $6 - 2x$.
    teil: { typ: term, loesung: "6x - x^2", plusC: true, fehler: [ { wert: "6x - 2x^2", meldung: 'Die Stammfunktion von $2x$ ist $x^2$, denn $(x^2)'' = 2x$.' } ] }
    erklaerung: '$F(x) = 6x - x^2$. Das Integral von $0$ bis $b$ ist also $6b - b^2$.'
  - text: Stelle die Gleichung auf und bringe sie in die Form $b^2 + p\,b + q = 0$.
    erklaerung: '$6b - b^2 = 8$ ergibt $b^2 - 6b + 8 = 0$.'
  - text: Löse die Gleichung. Gib beide Lösungen an.
    teil: { typ: menge, loesung: ["2", "4"] }
    erklaerung: '$(b - 2)(b - 4) = 0$, also $b = 2$ oder $b = 4$.'
  - text: Beide Lösungen sind positiv. Warum ergibt auch $b = 4$ die Bilanz $8$, obwohl bei $b = 3$ schon $9$ erreicht ist?
    erklaerung: 'Ab $x = 3$ liegt der Graph unter der Achse. Von $3$ bis $4$ kommt die Bilanz $-1$ dazu. Also $9 - 1 = 8$.'
```

```aufgabe
id: ir-grenze-speicher
titel: Wann ist der Speicher gefüllt?
niveau: 2
lernziel: 4
kompetenz: modellieren
angabe: |
  In einen Speicher fließt Wasser mit der Rate $r(t) = 30 - 3t$ (in m³ pro Stunde, $0 \le t \le 10$). Nach welcher Zeit
  sind $100$ m³ zugeflossen? Runde auf zwei Dezimalstellen.
teile:
  - typ: zahl
    label: 'Zeit $T$'
    einheit: h
    loesung: "10 - sqrt(100 - 200/3)"
    anzeige: '4{,}23'
    fehler:
      - wert: "10 + sqrt(100 - 200/3)"
        meldung: 'Diese Lösung liegt außerhalb des Modellbereichs $0 \le t \le 10$. Nach $t = 10$ wäre die Rate negativ.'
      - wert: "100/30"
        meldung: Du hast mit der Anfangsrate $30$ gerechnet. Die Rate nimmt aber ab. Die Menge ist das Integral der Rate.
hinweise:
  - 'Die zugeflossene Menge bis $T$ ist $\int_0^T (30 - 3t)\,\dd t = 30T - 1{,}5\,T^2$.'
  - 'Löse $30T - 1{,}5\,T^2 = 100$ mit der Lösungsformel und prüfe, welche Lösung in $[0, 10]$ liegt.'
loesung: |
  **Ansatz:** Die zugeflossene Menge ist das Integral der Rate. $\int_0^T (30 - 3t)\,\dd t = \big[30t - 1{,}5\,t^2\big]_0^T = 30T - 1{,}5\,T^2$. Einheit: m³/h mal h ergibt m³.
  ---
  $30T - 1{,}5\,T^2 = 100$. Wir teilen durch $-1{,}5$: $T^2 - 20T + \frac{200}{3} = 0$.
  ---
  Lösungsformel: $T = 10 \pm \sqrt{100 - \frac{200}{3}} = 10 \pm \sqrt{33{,}33} \approx 10 \pm 5{,}77$. Also $T \approx 4{,}23$ oder $T \approx 15{,}77$.
  ---
  Nur $T \approx 4{,}23$ liegt im Modellbereich. **Antwort:** Nach etwa $4{,}23$ Stunden sind $100$ m³ zugeflossen. **Plausibilität:** Bei konstant $30$ m³/h wären es $3{,}33$ h. Weil die Rate sinkt, dauert es länger.
```

```aufgabe
id: ir-grenze-schranz
titel: Fläche gerecht teilen
niveau: 3
lernziel: 4
kompetenz: anwenden
quelle: nach Musterprüfung Schranz-Kirlinger, Beispiel 3.2 (abgewandelt)
angabe: |
  Gegeben ist $f\colon [1, 4] \to \R$ mit $f(x) = x^2$. Bestimme $c \in [1, 4]$ so, dass gilt
  $$\int_1^c f(x)\,\dd x = \int_c^4 f(x)\,\dd x.$$
  Gib $c$ exakt und auf drei Dezimalstellen an.
teile:
  - typ: zahl
    label: '$c$'
    loesung: "nthRoot(65/2, 3)"
    anzeige: '\sqrt[3]{32{,}5} \approx 3{,}191'
    fehler:
      - wert: "2.5"
        meldung: Die Intervallmitte halbiert die Fläche hier nicht. $x^2$ ist rechts viel höher, also liegt rechts der Mitte mehr Fläche als links.
      - wert: "nthRoot(32, 3)"
        meldung: 'Die untere Grenze ist $1$, nicht $0$. Beim linken Integral bleibt deshalb ein $-\frac13$ stehen.'
hinweise:
  - 'Berechne beide Integrale in Abhängigkeit von $c$. Achte darauf, dass die untere Grenze $1$ ist.'
  - 'Links erhältst du $\frac{c^3 - 1}{3}$, rechts $\frac{64 - c^3}{3}$. Setze gleich und löse nach $c^3$.'
loesung: |
  **Ansatz:** Beide Integrale als Term in $c$ ausrechnen und gleichsetzen. Eine Stammfunktion ist $\frac{x^3}{3}$.
  ---
  $\int_1^c x^2\,\dd x = \frac{c^3}{3} - \frac13 = \frac{c^3 - 1}{3}$ und $\int_c^4 x^2\,\dd x = \frac{64}{3} - \frac{c^3}{3} = \frac{64 - c^3}{3}$.
  ---
  Gleichsetzen und mit $3$ multiplizieren: $c^3 - 1 = 64 - c^3$, also $2c^3 = 65$ und $c^3 = 32{,}5$.
  ---
  $c = \sqrt[3]{32{,}5} \approx 3{,}191$. Diese Zahl liegt in $[1, 4]$.
  ---
  **Probe:** Die Gesamtfläche ist $\frac{64 - 1}{3} = 21$. Links ergibt sich $\frac{32{,}5 - 1}{3} = 10{,}5$, also genau die Hälfte. **Plausibilität:** $c$ liegt rechts der Mitte $2{,}5$, weil der Graph rechts höher ist.
```

```aufgabe
id: ir-grenze-wurzel
titel: Teilungsgerade unter der Wurzelfunktion
niveau: 3
lernziel: 4
kompetenz: anwenden
angabe: |
  Die Fläche unter dem Graphen von $f(x) = \sqrt{x}$ über $[0, 4]$ soll durch eine senkrechte Gerade $x = c$ halbiert werden.
  Bestimme $c$ exakt und auf drei Dezimalstellen.
teile:
  - typ: zahl
    label: '$c$'
    loesung: "4^(2/3)"
    anzeige: '\sqrt[3]{16} \approx 2{,}520'
    fehler:
      - wert: "2"
        meldung: Die Intervallmitte halbiert die Fläche nicht, weil $\sqrt x$ rechts höher ist als links.
      - wert: "4^(3/2)"
        meldung: 'Aus $c^{3/2} = 4$ folgt $c = 4^{2/3}$. Du musst mit dem Kehrwert $\frac23$ potenzieren, nicht mit $\frac32$.'
hinweise:
  - 'Gesamtfläche: $\int_0^4 x^{1/2}\,\dd x = \frac23\cdot 4^{3/2} = \frac{16}{3}$. Die Hälfte ist $\frac83$.'
  - 'Löse $\frac23 c^{3/2} = \frac83$ nach $c$ auf. Potenziere dafür beide Seiten mit $\frac23$.'
loesung: |
  **Ansatz:** Die linke Teilfläche muss die halbe Gesamtfläche sein. Eine Stammfunktion von $\sqrt x = x^{1/2}$ ist $\frac23 x^{3/2}$.
  ---
  Gesamtfläche: $\int_0^4 \sqrt x\,\dd x = \frac23\cdot 4^{3/2} = \frac23\cdot 8 = \frac{16}{3}$. Die Hälfte ist $\frac83$.
  ---
  $\frac23 c^{3/2} = \frac83$ ergibt $c^{3/2} = 4$. Potenzieren mit $\frac23$: $c = 4^{2/3} = \sqrt[3]{16} \approx 2{,}520$.
  ---
  **Plausibilität:** $\sqrt x$ wächst, also liegt $c$ rechts der Mitte $2$. Der Graph steigt aber flach, deshalb liegt $c$ nur wenig rechts der Mitte.
```

## Substitution: die Kettenregel rückwärts

```aufgabe
id: ir-subst-vorwissen
titel: Kettenregel beim Ableiten
art: check
niveau: 1
angabe: |
  Was ist die Ableitung von $F(x) = \left(x^2 + 1\right)^4$? Zum Nachlesen:
  [9.7 Kettenregel](/lernen/mathe3/differentialrechnung/kettenregel-hoehere-ableitungen-und-die-wahl-der-richtigen-regel).
teile:
  - typ: auswahl
    optionen:
      - '$8x\left(x^2 + 1\right)^3$'
      - '$4\left(x^2 + 1\right)^3$'
      - '$\frac{\left(x^2 + 1\right)^5}{5}$'
      - '$4\cdot(2x)^3$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die äußere Ableitung stimmt. Es fehlt aber der Faktor „innere Ableitung“. Die innere Funktion ist $x^2 + 1$, ihre Ableitung ist $2x$.
      - wert: 2
        meldung: Hier wurde die Hochzahl erhöht. Das ist Integrieren, nicht Ableiten.
      - wert: 3
        meldung: Abgeleitet wird die äußere Potenz, und die innere Funktion bleibt dabei stehen. Erst danach kommt die innere Ableitung als Faktor dazu.
loesung: |
  Kettenregel: äußere Ableitung mal innere Ableitung. Die äußere Funktion ist $u^4$ mit Ableitung $4u^3$. Die innere Funktion ist $u = x^2 + 1$ mit Ableitung $2x$.
  ---
  Also $F'(x) = 4\left(x^2 + 1\right)^3\cdot 2x = 8x\left(x^2 + 1\right)^3$. Merk dir das Muster: Beim Ableiten entsteht der Faktor $2x$. In dieser Lektion suchst du genau diesen Faktor im Integranden.
```

In [10.1 Stammfunktionen](/lernen/mathe3/integralrechnung/stammfunktionen-ableiten-rueckwaerts) hast du schon gesehen, wie man $e^{3x}$ oder $(5x + 2)^4$ integriert. Dort war der
innere Ausdruck **linear**, also von der Form $ax + b$. Was aber, wenn innen $x^2 + 1$ oder $\sin x$
steht? Dafür gibt es die **Substitution**. Das Wort bedeutet „Ersetzung“: Man ersetzt einen
unbequemen Ausdruck durch eine neue Variable.

**Worum geht es in einem Satz?** Wenn im Integranden ein innerer Ausdruck steht **und** dessen
Ableitung als Faktor daneben, dann ist der Integrand das Ergebnis einer Kettenregel. Man kann ihn
deshalb rückwärts integrieren.

Die Vorwissensfrage am Anfang dieser Lektion zeigt das Muster. Die Ableitung von $\left(x^2 + 1\right)^4$ ist
$4\left(x^2 + 1\right)^3\cdot 2x$. Liest man das rückwärts, ist $\left(x^2 + 1\right)^4$ eine
Stammfunktion von $8x\left(x^2 + 1\right)^3$. Die Substitution macht aus dieser Beobachtung ein
Verfahren.

:::satz[Substitutionsregel]
Es sei $g$ eine differenzierbare Funktion mit stetiger Ableitung $g'$. Weiter sei $f$ stetig mit
Stammfunktion $F$. Dann gilt
$$\int f\big(g(x)\big)\,g'(x)\,\dd x = F\big(g(x)\big) + C.$$
Für bestimmte Integrale gilt
$$\int_a^b f\big(g(x)\big)\,g'(x)\,\dd x = \int_{g(a)}^{g(b)} f(u)\,\dd u.$$
Dabei ist $g$ die **innere Funktion**, $g'$ ihre Ableitung, $f$ die **äußere Funktion** und $u$ die
neue Variable, die für $g(x)$ steht.
:::

:::beweis
Wir leiten die rechte Seite mit der Kettenregel ab: $\big(F(g(x))\big)' = F'(g(x))\cdot g'(x)$. Weil $F$
eine Stammfunktion von $f$ ist, gilt $F' = f$. Also ist die Ableitung $f(g(x))\cdot g'(x)$, genau der
Integrand. Damit ist $F(g(x))$ eine Stammfunktion.

Für das bestimmte Integral setzen wir die Grenzen ein: $F(g(b)) - F(g(a))$. Das ist nach dem Hauptsatz
genau $\int_{g(a)}^{g(b)} f(u)\,\dd u$.
:::

### Die Praxis: u ersetzen und du mitnehmen

In der Rechnung führst du eine neue Variable ein, meistens $u = g(x)$. Ihre Ableitung ist
$\frac{\dd u}{\dd x} = g'(x)$. Daraus entsteht die Merkregel
$$\dd u = g'(x)\,\dd x.$$
Sie ist kein Bruchrechnen im strengen Sinn, liefert aber immer das richtige Ergebnis. Mit ihr ersetzt
du den ganzen Ausdruck $g'(x)\,\dd x$ durch $\dd u$. Ein Zahlenbeispiel: Für $u = x^2 + 1$ ist
$\dd u = 2x\,\dd x$.

:::beispiel[Der innere Ausdruck und seine Ableitung stehen da]
Gesucht ist $\int 2x\left(x^2 + 1\right)^4\dd x$.

1. **Innerer Ausdruck:** In der Klammer steht $x^2 + 1$. Wir setzen $u = x^2 + 1$.
2. **Ableitung:** $\dd u = 2x\,\dd x$. Genau der Ausdruck $2x\,\dd x$ steht im Integral.
3. **Ersetzen:** Aus dem Integral wird $\int u^4\,\dd u$. Es ist kein $x$ mehr übrig.
4. **Integrieren:** $\int u^4\,\dd u = \frac{u^5}{5} + C$.
5. **Zurückersetzen:** Wir setzen wieder $u = x^2 + 1$ ein und erhalten $\frac{\left(x^2 + 1\right)^5}{5} + C$.

**Probe:** Nach der Kettenregel ist $\left(\frac{(x^2 + 1)^5}{5}\right)' = \frac{5(x^2 + 1)^4\cdot 2x}{5} = 2x\left(x^2 + 1\right)^4$. Es stimmt.
:::

:::beispiel[Ein konstanter Faktor fehlt: ausgleichen]
Gesucht ist $\int x\,e^{x^2}\,\dd x$.

1. **Innerer Ausdruck:** Im Exponenten steht $x^2$. Wir setzen $u = x^2$.
2. **Ableitung:** $\dd u = 2x\,\dd x$. Im Integral steht aber nur $x\,\dd x$, also die Hälfte davon:
   $x\,\dd x = \frac12\,\dd u$.
3. **Ersetzen:** $\int e^{u}\cdot\frac12\,\dd u$.
4. **Integrieren und zurückersetzen:** $\frac12 e^u + C = \frac12 e^{x^2} + C$.

Ein fehlender **konstanter** Faktor wie die $2$ ist also kein Problem. Man gleicht ihn mit $\frac12$ aus.
:::

:::beispiel[Bestimmtes Integral: die Grenzen gleich mit ersetzen]
Gesucht ist $\int_0^2 x\sqrt{2x^2 + 1}\,\dd x$.

1. **Substitution:** $u = 2x^2 + 1$ und $\dd u = 4x\,\dd x$, also $x\,\dd x = \frac14\,\dd u$.
2. **Neue Grenzen:** Für $x = 0$ ist $u = 2\cdot 0 + 1 = 1$. Für $x = 2$ ist $u = 2\cdot 4 + 1 = 9$.
3. **Integral in $u$:** $\int_1^9 \frac14\sqrt u\,\dd u = \frac14\left[\frac23 u^{3/2}\right]_1^9$.
4. **Einsetzen:** $9^{3/2} = 27$ und $1^{3/2} = 1$. Also $\frac14\cdot\frac23\cdot(27 - 1) = \frac{26}{6} = \frac{13}{3} \approx 4{,}333$.

Weil wir die Grenzen mit ersetzt haben, müssen wir nicht mehr zurück zu $x$.
:::

:::achtung[Alte Grenzen beim neuen Integral]
Eine typische Fehlrechnung zum Beispiel „Bestimmtes Integral: die Grenzen gleich mit ersetzen“:
$$\int_0^2 x\sqrt{2x^2 + 1}\,\dd x \overset{?}{=} \frac14\left[\frac23 u^{3/2}\right]_0^2 = \frac16\cdot 2^{3/2} \approx 0{,}471.$$
Hier wurde auf $u$ umgestellt, aber die $x$-Grenzen $0$ und $2$ blieben stehen. Richtig ist
$\frac{13}{3} \approx 4{,}333$. Du hast zwei saubere Wege: Entweder du ersetzt die Grenzen durch $g(a)$
und $g(b)$. Oder du schreibst die Stammfunktion zuerst wieder in $x$ und setzt dann die alten Grenzen
ein. Mischen ist der Fehler.
:::

:::achtung[Ein Faktor mit x lässt sich nicht ausgleichen]
Eine verlockende Fehlrechnung lautet
$$\int e^{x^2}\,\dd x \overset{?}{=} \frac{e^{x^2}}{2x} + C.$$
Hier wurde durch die innere Ableitung $2x$ geteilt, als wäre sie eine Zahl. Die Probe mit der
Quotientenregel zeigt: Die Ableitung von $\frac{e^{x^2}}{2x}$ ist $e^{x^2} - \frac{e^{x^2}}{2x^2}$, nicht $e^{x^2}$.
Teilen darf man nur durch **konstante** Faktoren. Fehlt ein Faktor, der von $x$ abhängt, hilft die
Substitution nicht. Für $e^{x^2}$ gibt es übrigens gar keine Stammfunktion aus bekannten Funktionen.
:::

:::merke[Rezept: Substitution]
1. Einen **inneren Ausdruck** $u = g(x)$ wählen, dessen Ableitung bis auf einen konstanten Faktor als Faktor im Integranden steht.
2. $\dd u = g'(x)\,\dd x$ berechnen und den passenden Teil des Integranden ersetzen.
3. Alles in $u$ ausdrücken. **Es darf kein $x$ übrig bleiben.** Sonst war die Wahl von $u$ ungünstig.
4. Nach $u$ integrieren.
5. Zurückersetzen, oder beim bestimmten Integral gleich die **Grenzen mit ersetzen**.
6. Probe durch Ableiten.
:::

### Ein wichtiger Sonderfall: Zähler ist die Ableitung des Nenners

Steht im Zähler eines Bruchs genau die Ableitung des Nenners, dann führt die Substitution
$u = \text{Nenner}$ sofort auf $\int \frac1u\,\dd u = \ln\lvert u\rvert$.

:::satz[Logarithmische Integration]
Ist $f$ differenzierbar und $f(x) \ne 0$ auf dem betrachteten Intervall, dann gilt
$$\int \frac{f'(x)}{f(x)}\,\dd x = \ln\lvert f(x)\rvert + C.$$
:::

Ein Zahlenbeispiel: $\int \frac{2x + 3}{x^2 + 3x + 5}\,\dd x = \ln\left(x^2 + 3x + 5\right) + C$. Der
Zähler $2x + 3$ ist genau die Ableitung des Nenners. Den Betrag darfst du weglassen. Der Nenner hat
nämlich keine Nullstelle, denn seine Diskriminante $9 - 20$ ist negativ. Er ist also immer positiv.

:::beispiel[Eine Infusion mit abnehmender Rate]
Ein Medikament fließt über eine Infusion ins Blut. Die Rate ist $r(t) = \frac{6t}{t^2 + 1}$ in
Milligramm pro Stunde, $t$ in Stunden. Wie viel Wirkstoff fließt in den ersten $3$ Stunden?

1. **Ansatz:** Die Menge ist das Integral der Rate: $\int_0^3 \frac{6t}{t^2 + 1}\,\dd t$.
2. **Muster erkennen:** Die Ableitung des Nenners $t^2 + 1$ ist $2t$. Im Zähler steht $6t = 3\cdot 2t$.
3. **Integrieren:** $\int \frac{6t}{t^2 + 1}\,\dd t = 3\ln\left(t^2 + 1\right) + C$.
4. **Einsetzen:** $3\ln 10 - 3\ln 1 = 3\ln 10 \approx 6{,}91$.
5. **Einheit:** Milligramm pro Stunde mal Stunden ergibt Milligramm.

**Antwort:** In den ersten drei Stunden fließen rund $6{,}91$ mg Wirkstoff.
:::

:::tipp[Woran du Substitution erkennst]
Suche einen „inneren“ Ausdruck: in einer Klammer, unter einer Wurzel, im Exponenten oder im Nenner.
Steht seine Ableitung bis auf einen Zahlenfaktor daneben, passt die Substitution. Typische Muster sind
$x\cdot\left(x^2 + c\right)^n$, $x\cdot e^{x^2}$, $\frac{x}{x^2 + c}$, $\sin x\cdot\cos^n x$ und $\frac{\ln x}{x}$.
:::

```reflexion
frage: Warum darf beim Substituieren ein konstanter Faktor im Integranden fehlen, ein Faktor mit $x$ aber nicht?
antwort: |
  Ein konstanter Faktor lässt sich vor das Integral ziehen und mit seinem Kehrwert ausgleichen. Aus $x\,\dd x$ wird
  so $\frac12\cdot 2x\,\dd x = \frac12\,\dd u$. Ein Faktor wie $2x$ hängt dagegen von $x$ ab. Nach dem Ersetzen bliebe
  ein $x$ im Integral stehen, das sich nicht in $u$ ausdrücken lässt. Vor das Integral ziehen darf man ihn auch nicht,
  denn das geht nur mit Zahlen. Deshalb klappt die Substitution bei $\int x\,e^{x^2}\,\dd x$, aber nicht bei
  $\int e^{x^2}\,\dd x$.
```

```aufgabe
id: ir-subst-potenz
titel: Substitution mit Potenz
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Bestimme $\displaystyle\int 3x^2\left(x^3 + 1\right)^4\dd x$.
teile:
  - typ: term
    label: '$F(x)$'
    loesung: "(x^3 + 1)^5/5"
    plusC: true
    bereich: [-1, 1]
    fehler:
      - wert: "(x^3 + 1)^5/15"
        meldung: Der Faktor $3x^2$ ist schon genau $\dd u$. Du hast zusätzlich durch $3$ geteilt. Das ist einmal zu viel.
      - wert: "x^3*(x^3 + 1)^5/5"
        meldung: Du hast den Faktor $3x^2$ getrennt integriert und multipliziert. Er verschwindet aber ganz im $\dd u$.
hinweise:
  - 'Setze $u = x^3 + 1$. Was ist $\dd u$? Vergleiche mit dem Faktor vor der Klammer.'
loesung: |
  **Ansatz:** In der Klammer steht der innere Ausdruck $x^3 + 1$. Seine Ableitung $3x^2$ steht als Faktor davor. Also passt die Substitution $u = x^3 + 1$ mit $\dd u = 3x^2\,\dd x$.
  ---
  Ersetzen: $\int u^4\,\dd u = \frac{u^5}{5} + C$. Zurückersetzen: $F(x) = \frac{\left(x^3 + 1\right)^5}{5} + C$.
  ---
  **Probe** mit der Kettenregel: $\left(\frac{(x^3 + 1)^5}{5}\right)' = (x^3 + 1)^4\cdot 3x^2$. Es stimmt.
```

```aufgabe
id: ir-subst-erkennen
titel: Den inneren Ausdruck finden
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Gesucht ist $\displaystyle\int x\cos\left(x^2\right)\dd x$.

  a) Welche Substitution passt?

  b) Bestimme eine Stammfunktion.
teile:
  - typ: auswahl
    label: 'a) Substitution'
    optionen:
      - '$u = x^2$'
      - '$u = \cos x$'
      - '$u = x$'
      - '$u = \cos\left(x^2\right)$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Im Integranden steht nicht $\cos x$, sondern $\cos\left(x^2\right)$. Der innere Ausdruck ist das Argument des Kosinus.
      - wert: 2
        meldung: Mit $u = x$ ändert sich nichts. Gesucht ist ein innerer Ausdruck, dessen Ableitung als Faktor danebensteht.
      - wert: 3
        meldung: Die Ableitung von $\cos\left(x^2\right)$ ist $-2x\sin\left(x^2\right)$. Ein Sinus steht aber nicht im Integranden.
  - typ: term
    label: 'b) $F(x)$'
    loesung: "sin(x^2)/2"
    plusC: true
    bereich: [-1.5, 1.5]
    fehler:
      - wert: "sin(x^2)"
        meldung: Die Ableitung von $\sin\left(x^2\right)$ ist $2x\cos\left(x^2\right)$. Das ist doppelt so viel wie gesucht. Gleiche den Faktor $2$ aus.
      - wert: "x^2/2*sin(x^2)"
        meldung: Den Faktor $x$ integriert man nicht getrennt. Er wird zusammen mit $\dd x$ zu $\frac12\,\dd u$.
hinweise:
  - Der Kosinus hat das Argument $x^2$. Seine Ableitung $2x$ steht bis auf den Faktor $2$ als Faktor daneben.
loesung: |
  **Ansatz:** Der innere Ausdruck ist das Argument $x^2$ des Kosinus. Seine Ableitung ist $2x$, und $x$ steht als Faktor im Integranden.
  ---
  a) $u = x^2$, $\dd u = 2x\,\dd x$, also $x\,\dd x = \frac12\,\dd u$.
  ---
  b) $\int \cos u\cdot\frac12\,\dd u = \frac12\sin u + C = \frac12\sin\left(x^2\right) + C$. **Probe:** $\left(\frac12\sin(x^2)\right)' = \frac12\cos(x^2)\cdot 2x = x\cos(x^2)$. Es stimmt.
```

```aufgabe
id: ir-subst-exp
titel: Fehlenden Faktor ausgleichen
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Bestimme $\displaystyle\int x\,e^{-x^2}\,\dd x$ und $\displaystyle\int x^2\left(x^3 - 2\right)^3\dd x$.
teile:
  - typ: term
    label: '$\int x\,e^{-x^2}\,\dd x$'
    loesung: "-e^(-x^2)/2"
    plusC: true
    bereich: [-2, 2]
    fehler:
      - wert: "e^(-x^2)/2"
        meldung: Das Vorzeichen fehlt. Für $u = -x^2$ ist $\dd u = -2x\,\dd x$, also $x\,\dd x = -\frac12\,\dd u$.
      - wert: "-2*x*e^(-x^2)"
        meldung: Das ist die Ableitung von $e^{-x^2}$. Beim Integrieren teilt man durch die innere Ableitung, statt mit ihr zu multiplizieren.
  - typ: term
    label: '$\int x^2 \left(x^3 - 2\right)^3\,\dd x$'
    loesung: "(x^3 - 2)^4/12"
    plusC: true
    bereich: [-2, 2]
    fehler:
      - wert: "(x^3 - 2)^4/4"
        meldung: Für $u = x^3 - 2$ ist $\dd u = 3x^2\,\dd x$. Im Integral steht nur $x^2\,\dd x = \frac13\,\dd u$. Der Faktor $\frac13$ fehlt.
hinweise:
  - 'Erstes Integral: $u = -x^2$. Zweites Integral: $u = x^3 - 2$.'
  - 'Rechne jeweils $\dd u$ aus und drücke $x\,\dd x$ beziehungsweise $x^2\,\dd x$ durch $\dd u$ aus.'
loesung: |
  **Ansatz:** In beiden Integralen steht ein innerer Ausdruck, dessen Ableitung bis auf einen Zahlenfaktor als Faktor danebensteht. Den Zahlenfaktor gleichen wir aus.
  ---
  Erstes Integral: $u = -x^2$, $\dd u = -2x\,\dd x$, also $x\,\dd x = -\frac12\,\dd u$. Damit $\int e^u\cdot\left(-\frac12\right)\dd u = -\frac12 e^{-x^2} + C$.
  ---
  Zweites Integral: $u = x^3 - 2$, $\dd u = 3x^2\,\dd x$, also $x^2\,\dd x = \frac13\,\dd u$. Damit $\int u^3\cdot\frac13\,\dd u = \frac13\cdot\frac{u^4}{4} = \frac{\left(x^3 - 2\right)^4}{12} + C$.
  ---
  **Probe** für das zweite Integral: $\left(\frac{(x^3 - 2)^4}{12}\right)' = \frac{4(x^3 - 2)^3\cdot 3x^2}{12} = x^2(x^3 - 2)^3$. Es stimmt.
```

```aufgabe
id: ir-subst-log
titel: Zähler ist Ableitung des Nenners
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Bestimme eine Stammfunktion von
  $$f(x) = \frac{4x - 2}{x^2 - x + 3} + \frac{x}{x^2 + 9}.$$
teile:
  - typ: term
    label: '$F(x)$'
    loesung: "2*ln(x^2 - x + 3) + ln(x^2 + 9)/2"
    plusC: true
    fehler:
      - wert: "ln(x^2 - x + 3) + ln(x^2 + 9)/2"
        meldung: 'Im ersten Zähler steht $4x - 2 = 2\cdot(2x - 1)$, also das **Doppelte** der Ableitung des Nenners. Der Faktor $2$ fehlt.'
      - wert: "2*ln(x^2 - x + 3) + ln(x^2 + 9)"
        meldung: 'Die Ableitung von $x^2 + 9$ ist $2x$. Im Zähler steht nur $x$, also die Hälfte. Gleiche mit $\frac12$ aus.'
hinweise:
  - 'Die Ableitung von $x^2 - x + 3$ ist $2x - 1$. Vergleiche mit dem Zähler $4x - 2$.'
  - 'Schreibe $\frac{x}{x^2 + 9} = \frac12\cdot\frac{2x}{x^2 + 9}$. Prüfe am Ende, ob du die Betragsstriche weglassen darfst.'
loesung: |
  **Ansatz:** Beide Brüche haben die Form „Vielfaches der Ableitung des Nenners durch Nenner“. Dann ist die Stammfunktion ein Logarithmus des Nenners.
  ---
  Erster Bruch: $(x^2 - x + 3)' = 2x - 1$ und $4x - 2 = 2(2x - 1)$. Also $\int \frac{4x - 2}{x^2 - x + 3}\,\dd x = 2\ln\lvert x^2 - x + 3\rvert$.
  ---
  Zweiter Bruch: $\int \frac{x}{x^2 + 9}\,\dd x = \frac12\int \frac{2x}{x^2 + 9}\,\dd x = \frac12\ln\left(x^2 + 9\right)$.
  ---
  Beide Nenner sind immer positiv. Beim ersten ist die Diskriminante $1 - 12 < 0$, beim zweiten gilt $x^2 + 9 \ge 9$. Die Beträge entfallen: $F(x) = 2\ln\left(x^2 - x + 3\right) + \frac12\ln\left(x^2 + 9\right) + C$.
```

```aufgabe
id: ir-subst-bestimmt
titel: Bestimmtes Integral mit Substitution
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Berechne $\displaystyle\int_0^1 x\left(x^2 + 1\right)^3\dd x$ exakt.
teile:
  - typ: zahl
    loesung: "(1/2)*(2^4 - 1^4)/4"
    anzeige: '\tfrac{15}{8} = 1{,}875'
    fehler:
      - wert: "1/8"
        meldung: Du hast mit $u$ gerechnet, aber die alten $x$-Grenzen $0$ und $1$ eingesetzt. Für $u = x^2 + 1$ werden die Grenzen zu $1$ und $2$.
      - wert: "15/4"
        meldung: 'Es ist $\dd u = 2x\,\dd x$, im Integral steht aber nur $x\,\dd x = \frac12\,\dd u$. Der Faktor $\frac12$ fehlt.'
hinweise:
  - '$u = x^2 + 1$ und $\dd u = 2x\,\dd x$, also $x\,\dd x = \frac12\,\dd u$.'
  - 'Neue Grenzen: $u(0) = 1$ und $u(1) = 2$.'
loesung: |
  **Ansatz:** Der innere Ausdruck $x^2 + 1$ hat die Ableitung $2x$, und $x$ steht als Faktor davor. Wir substituieren und ersetzen die Grenzen gleich mit.
  ---
  $u = x^2 + 1$, $x\,\dd x = \frac12\,\dd u$. Grenzen: $x = 0$ ergibt $u = 1$, $x = 1$ ergibt $u = 2$.
  ---
  $\int_1^2 \frac12 u^3\,\dd u = \frac12\left[\frac{u^4}{4}\right]_1^2 = \frac12\cdot\frac{16 - 1}{4} = \frac{15}{8}$.
  ---
  **Plausibilität:** Auf $[0, 1]$ liegt der Integrand zwischen $0$ und $1\cdot 2^3 = 8$. Das Ergebnis $1{,}875$ liegt zwischen $0$ und $8$.
gefuehrt:
  - text: Welcher innere Ausdruck bietet sich als $u$ an?
    erklaerung: 'Der Ausdruck in der Klammer, $u = x^2 + 1$. Seine Ableitung $2x$ steht bis auf den Faktor $2$ davor.'
  - text: 'Drücke $x\,\dd x$ durch $\dd u$ aus. Welcher Faktor steht vor $\dd u$?'
    teil: { typ: zahl, loesung: "1/2", fehler: [ { wert: "2", meldung: 'Aus $\dd u = 2x\,\dd x$ folgt $x\,\dd x = \frac{\dd u}{2}$. Du musst durch $2$ teilen.' } ] }
    erklaerung: '$\dd u = 2x\,\dd x$, also $x\,\dd x = \frac12\,\dd u$.'
  - text: Welche obere Grenze hat das neue Integral in $u$?
    teil: { typ: zahl, loesung: "2", fehler: [ { wert: "1", meldung: 'Die alte Grenze $x = 1$ wird in $u = x^2 + 1$ eingesetzt.' } ] }
    erklaerung: 'Für $x = 1$ ist $u = 1 + 1 = 2$. Die untere Grenze wird $u = 0 + 1 = 1$.'
  - text: Berechne $\int_1^2 \frac12 u^3\,\dd u$.
    teil: { typ: zahl, loesung: "15/8" }
    erklaerung: '$\frac12\left[\frac{u^4}{4}\right]_1^2 = \frac12\cdot\frac{16 - 1}{4} = \frac{15}{8}$.'
```

```aufgabe
id: ir-subst-trig
titel: Potenz einer Winkelfunktion
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Berechne $\displaystyle\int_0^{\pi/2} \sin x\,\cos^2 x\,\dd x$ exakt. Dabei bedeutet $\cos^2 x$ dasselbe wie $(\cos x)^2$.
teile:
  - typ: zahl
    loesung: "1/3"
    anzeige: '\tfrac13'
    fehler:
      - wert: "-1/3"
        meldung: 'Das Vorzeichen stimmt nicht. Aus $\dd u = -\sin x\,\dd x$ entsteht ein Minus, und das Vertauschen der Grenzen $1$ und $0$ erzeugt ein zweites. Zwei Minus heben sich auf.'
      - wert: "-(pi/2)^3/3"
        meldung: Du hast vermutlich die alten Grenzen $0$ und $\frac\pi2$ in $-\frac{u^3}{3}$ eingesetzt. Die Grenzen gehören aber zu $x$, nicht zu $u$. Ersetze sie durch $u = \cos 0$ und $u = \cos\frac\pi2$.
hinweise:
  - '$u = \cos x$, dann ist $\dd u = -\sin x\,\dd x$.'
  - 'Neue Grenzen: $\cos 0 = 1$ und $\cos\frac\pi2 = 0$. Achte auf das Minuszeichen.'
loesung: |
  **Ansatz:** Der innere Ausdruck ist $\cos x$, denn er wird quadriert. Seine Ableitung $-\sin x$ steht bis auf das Vorzeichen als Faktor daneben.
  ---
  $u = \cos x$, $\dd u = -\sin x\,\dd x$, also $\sin x\,\dd x = -\dd u$. Grenzen: $x = 0$ ergibt $u = 1$, $x = \frac\pi2$ ergibt $u = 0$.
  ---
  $\int_1^0 u^2\,(-\dd u) = \int_0^1 u^2\,\dd u = \frac13$. Beim Vertauschen der Grenzen hebt sich das Minus auf.
  ---
  **Kontrolle** über die Stammfunktion in $x$: $\int \sin x\cos^2 x\,\dd x = -\frac{\cos^3 x}{3}$. Also $\left[-\frac{\cos^3 x}{3}\right]_0^{\pi/2} = 0 - \left(-\frac13\right) = \frac13$. Es stimmt.
```

```aufgabe
id: ir-subst-fehler
titel: Wo steckt der Fehler beim Logarithmus?
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  Ein Mitschüler rechnet:
  $$\int \frac{x}{x^2 + 1}\,\dd x = \ln\left(x^2 + 1\right) + C.$$
  a) Was ist falsch?

  b) Gib eine richtige Stammfunktion an.
teile:
  - typ: auswahl
    label: 'a) Der Fehler'
    optionen:
      - 'Der Zähler ist nur die Hälfte der Ableitung des Nenners. Der Faktor $\frac12$ fehlt.'
      - Der Betrag um $x^2 + 1$ fehlt.
      - Für Brüche gibt es keine Stammfunktion.
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$x^2 + 1$ ist immer positiv. Der Betrag darf deshalb wegbleiben. Leite das Ergebnis zur Probe ab.'
      - wert: 2
        meldung: Viele Brüche haben eine Stammfunktion. Hier hilft die Substitution $u = x^2 + 1$.
  - typ: term
    label: 'b) $F(x)$'
    loesung: "ln(x^2 + 1)/2"
    plusC: true
    fehler:
      - wert: "ln(x^2 + 1)"
        meldung: 'Das ist die Rechnung des Mitschülers. Ihre Ableitung ist $\frac{2x}{x^2 + 1}$, also das Doppelte des Integranden.'
hinweise:
  - Leite das Ergebnis des Mitschülers ab. Kommt genau $\frac{x}{x^2 + 1}$ heraus?
  - 'Die Ableitung des Nenners ist $2x$. Schreibe $\frac{x}{x^2 + 1} = \frac12\cdot\frac{2x}{x^2 + 1}$.'
loesung: |
  **Probe der Rechnung:** $\left(\ln(x^2 + 1)\right)' = \frac{2x}{x^2 + 1}$. Das ist doppelt so viel wie der Integrand $\frac{x}{x^2 + 1}$. Die Rechnung ist also falsch.
  ---
  **Der Fehler:** Die Regel $\int \frac{f'}{f}\,\dd x = \ln\lvert f\rvert$ verlangt, dass **genau** die Ableitung im Zähler steht. Hier steht nur die Hälfte davon.
  ---
  **Richtig:** $\int \frac{x}{x^2 + 1}\,\dd x = \frac12\int\frac{2x}{x^2 + 1}\,\dd x = \frac12\ln\left(x^2 + 1\right) + C$. Probe: Die Ableitung ist $\frac12\cdot\frac{2x}{x^2 + 1} = \frac{x}{x^2 + 1}$. Es stimmt.
```

```aufgabe
id: ir-subst-wurzel
titel: Substitution, bei der x übrig bleibt
niveau: 3
lernziel: 5
kompetenz: rechnen
angabe: |
  Berechne $\displaystyle\int_0^3 x\sqrt{x + 1}\,\dd x$ exakt und auf drei Dezimalstellen.

  Hinweis zur Methode: Mit $u = x + 1$ bleibt zunächst ein $x$ übrig. Drücke es durch $u$ aus.
teile:
  - typ: zahl
    loesung: "(2/5*4^(5/2) - 2/3*4^(3/2)) - (2/5 - 2/3)"
    anzeige: '\tfrac{116}{15} \approx 7{,}733'
    fehler:
      - wert: "(2/5*3^(5/2) - 2/3*3^(3/2))"
        meldung: Du hast die alten Grenzen $0$ und $3$ eingesetzt. Für $u = x + 1$ werden sie zu $1$ und $4$.
hinweise:
  - 'Aus $u = x + 1$ folgt $x = u - 1$ und $\dd u = \dd x$. Damit wird der Integrand zu $(u - 1)\sqrt u = u^{3/2} - u^{1/2}$.'
  - 'Neue Grenzen: $u = 1$ und $u = 4$. Integriere $u^{3/2} - u^{1/2}$ mit der Potenzregel.'
loesung: |
  **Ansatz:** Der innere Ausdruck unter der Wurzel ist $x + 1$. Wir setzen $u = x + 1$, also $\dd u = \dd x$. Das übrige $x$ drücken wir mit $x = u - 1$ ebenfalls durch $u$ aus.
  ---
  Grenzen: $x = 0$ ergibt $u = 1$, $x = 3$ ergibt $u = 4$. Integrand: $(u - 1)\sqrt u = u^{3/2} - u^{1/2}$.
  ---
  Stammfunktion: $\frac{u^{5/2}}{5/2} - \frac{u^{3/2}}{3/2} = \frac25 u^{5/2} - \frac23 u^{3/2}$.
  ---
  Einsetzen: $4^{5/2} = 32$ und $4^{3/2} = 8$. Oben: $\frac{64}{5} - \frac{16}{3} = \frac{112}{15}$. Unten: $\frac25 - \frac23 = -\frac{4}{15}$. Differenz: $\frac{112}{15} + \frac{4}{15} = \frac{116}{15} \approx 7{,}733$.
  ---
  **Plausibilität:** Der Integrand wächst auf $[0, 3]$ von $0$ bis $3\cdot 2 = 6$. Die Fläche liegt also zwischen $0$ und $3\cdot 6 = 18$, eher bei der Hälfte. $7{,}733$ passt.
```

```aufgabe
id: ir-subst-ausbreitung
titel: Ausbreitung eines Ölfilms
niveau: 3
lernziel: 5
kompetenz: modellieren
angabe: |
  Aus einem Leck fließt Öl. Die Ausflussrate ist $r(t) = 50\,t\,e^{-t^2/20}$ in Liter pro Minute, $t$ in Minuten nach
  Beginn des Lecks.

  a) Wie viel Öl fließt in den ersten $4$ Minuten aus? Runde auf eine Dezimalstelle.

  b) Zeige, dass insgesamt nie mehr als $500$ Liter ausfließen können.

  c) Nach welcher Zeit sind $250$ Liter ausgeflossen? Runde auf zwei Dezimalstellen.
teile:
  - typ: zahl
    label: 'a) Menge in 4 min'
    einheit: L
    loesung: "500*(1 - exp(-16/20))"
    anzeige: '275{,}3'
    fehler:
      - wert: "50*(1 - exp(-16/20))"
        meldung: 'Für $u = \frac{t^2}{20}$ ist $\dd u = \frac{t}{10}\,\dd t$, also $t\,\dd t = 10\,\dd u$. Der Faktor $10$ fehlt.'
  - typ: text
    label: 'b) Begründung'
    muster: |
      Die Menge bis zur Zeit $T$ ist $M(T) = 500\left(1 - e^{-T^2/20}\right)$. Weil $e^{-T^2/20}$ immer positiv ist, ist
      $1 - e^{-T^2/20}$ immer kleiner als $1$. Also ist $M(T) < 500$ für jedes $T$. Für sehr große $T$ nähert sich $M(T)$
      der Grenze $500$ L an.
  - typ: zahl
    label: 'c) Zeit'
    einheit: min
    loesung: "sqrt(20*ln(2))"
    anzeige: '3{,}72'
hinweise:
  - 'Substituiere $u = \frac{t^2}{20}$. Dann ist $\dd u = \frac{t}{10}\,\dd t$, also $t\,\dd t = 10\,\dd u$.'
  - 'Die Menge bis zur Zeit $T$ ist $M(T) = 500\left(1 - e^{-T^2/20}\right)$. Für c) setze $M(T) = 250$ und löse mit dem Logarithmus.'
loesung: |
  **Ansatz:** Die ausgeflossene Menge ist das Integral der Rate. Im Exponenten steht der innere Ausdruck $\frac{t^2}{20}$, seine Ableitung $\frac{t}{10}$ steht bis auf einen Faktor als $t$ davor.
  ---
  Substitution: $u = \frac{t^2}{20}$, $t\,\dd t = 10\,\dd u$. Damit $\int 50\,t\,e^{-t^2/20}\,\dd t = 500\int e^{-u}\,\dd u = -500\,e^{-u} = -500\,e^{-t^2/20}$.
  ---
  Menge bis $T$: $M(T) = \left[-500\,e^{-t^2/20}\right]_0^T = 500 - 500\,e^{-T^2/20} = 500\left(1 - e^{-T^2/20}\right)$.
  ---
  a) $M(4) = 500\left(1 - e^{-0{,}8}\right) \approx 500\cdot 0{,}5507 \approx 275{,}3$ L.
  ---
  b) $e^{-T^2/20}$ ist immer positiv. Deshalb ist $M(T)$ immer kleiner als $500$ L. Die Grenze $500$ L wird nie ganz erreicht. Einheitencheck: L/min mal min ergibt L.
  ---
  c) $500\left(1 - e^{-T^2/20}\right) = 250$ ergibt $e^{-T^2/20} = \frac12$. Logarithmieren: $\frac{T^2}{20} = \ln 2$, also $T = \sqrt{20\ln 2} \approx 3{,}72$ min. **Antwort:** Nach rund $3{,}72$ Minuten ist die Hälfte der möglichen Menge ausgeflossen.
```

## Partielle Integration: die Produktregel rückwärts

```aufgabe
id: ir-partiell-vorwissen
titel: Produktregel beim Ableiten
art: check
niveau: 1
angabe: |
  Was ist die Ableitung von $F(x) = x\sin x$? Zum Nachlesen:
  [9.6 Produktregel und Quotientenregel](/lernen/mathe3/differentialrechnung/produktregel-und-quotientenregel).
teile:
  - typ: auswahl
    optionen:
      - '$\sin x + x\cos x$'
      - '$\cos x$'
      - '$x\cos x$'
      - '$\sin x - x\cos x$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Du hast die Ableitungen der beiden Faktoren multipliziert, also $1\cdot\cos x$. Die Produktregel hat aber zwei Summanden.
      - wert: 2
        meldung: Das ist nur einer der beiden Summanden. Es fehlt „Ableitung des ersten Faktors mal zweiter Faktor“, also $1\cdot\sin x$.
      - wert: 3
        meldung: Die Produktregel hat ein Plus zwischen den Summanden. Ein Minus steht nur in der Quotientenregel.
loesung: |
  Produktregel: $(u\cdot v)' = u'\cdot v + u\cdot v'$ mit $u = x$ und $v = \sin x$.
  ---
  $u' = 1$ und $v' = \cos x$. Also $(x\sin x)' = 1\cdot\sin x + x\cos x = \sin x + x\cos x$. Diese Regel liest du gleich rückwärts.
```

Für Produkte wie $x\,e^x$ oder $x\cos x$ hilft die Substitution nicht. Keiner der beiden Faktoren ist
die Ableitung eines inneren Ausdrucks im anderen Faktor. Hier hilft die Produktregel, rückwärts
gelesen. Das Verfahren heißt **partielle Integration**. „Partiell“ bedeutet „teilweise“: Man
integriert zuerst nur einen der beiden Faktoren.

**Worum geht es in einem Satz?** Man tauscht ein schwieriges Integral gegen ein leichteres, indem man
einen Faktor ableitet und den anderen integriert.

:::satz[Partielle Integration]
Sind $u$ und $v$ auf $[a, b]$ differenzierbar mit stetigen Ableitungen, dann gilt
$$\int u(x)\,v'(x)\,\dd x = u(x)\,v(x) - \int u'(x)\,v(x)\,\dd x$$
und
$$\int_a^b u(x)\,v'(x)\,\dd x = \Big[u(x)\,v(x)\Big]_a^b - \int_a^b u'(x)\,v(x)\,\dd x.$$
Dabei ist $u$ der Faktor, der **abgeleitet** wird, und $v'$ der Faktor, der **integriert** wird. $v$ ist
eine Stammfunktion von $v'$.
:::

:::beweis
Die Produktregel lautet $(uv)' = u'v + uv'$. Wir integrieren beide Seiten. Links steht die Ableitung
von $uv$, ihr Integral ist $uv$. Rechts dürfen wir summandenweise integrieren:
$uv = \int u'v\,\dd x + \int uv'\,\dd x$. Jetzt ziehen wir $\int u'v\,\dd x$ auf beiden Seiten ab und
erhalten die Formel. Die Version mit Grenzen folgt mit dem Hauptsatz.
:::

**Was bringt das?** Die Formel ersetzt das Integral $\int u\,v'\,\dd x$ durch ein anderes, nämlich
$\int u'\,v\,\dd x$. Das lohnt sich, wenn das neue Integral **einfacher** ist. Entscheidend ist also die
Wahl: Welcher Faktor wird $u$, welcher wird $v'$?

:::beispiel[Polynom mal e-Funktion]
Gesucht ist $\int x\,e^x\,\dd x$.

1. **Wahl:** $u = x$, denn beim Ableiten wird daraus die Zahl $1$. $v' = e^x$, denn diese Funktion lässt sich leicht integrieren.
2. **Ableiten und integrieren:** $u' = 1$ und $v = e^x$.
3. **Formel:** $\int x\,e^x\,\dd x = x\,e^x - \int 1\cdot e^x\,\dd x$.
4. **Restintegral:** $\int e^x\,\dd x = e^x$. Also $\int x\,e^x\,\dd x = x\,e^x - e^x + C = (x - 1)\,e^x + C$.

**Probe** mit der Produktregel: $\big((x - 1)e^x\big)' = 1\cdot e^x + (x - 1)e^x = x\,e^x$. Es stimmt.

**Gegenprobe der anderen Wahl:** Mit $u = e^x$ und $v' = x$ entstünde
$\frac{x^2}{2}e^x - \int \frac{x^2}{2}e^x\,\dd x$. Das neue Integral ist schwieriger als das alte. Dann
war die Wahl falsch, und man tauscht die Rollen.
:::

:::beispiel[Der Trick mit dem Faktor 1: ln x]
Für $\ln x$ steht keine Stammfunktion in der Tabelle der Grundintegrale. Man schreibt $\ln x = 1\cdot\ln x$.

1. **Wahl:** $u = \ln x$, denn seine Ableitung $\frac1x$ ist einfacher. $v' = 1$, also $v = x$.
2. **Formel:** $\int \ln x\,\dd x = x\ln x - \int x\cdot\frac1x\,\dd x = x\ln x - \int 1\,\dd x$.
3. **Ergebnis:** $\int \ln x\,\dd x = x\ln x - x + C$ für $x > 0$.

**Probe:** $(x\ln x - x)' = 1\cdot\ln x + x\cdot\frac1x - 1 = \ln x$. Es stimmt.
:::

:::beispiel[Zweimal partiell integrieren]
Gesucht ist $\int_0^1 x^2\,e^x\,\dd x$.

1. **Erster Schritt:** $u = x^2$, $v' = e^x$, also $u' = 2x$ und $v = e^x$. Das ergibt $\int x^2 e^x\,\dd x = x^2 e^x - \int 2x\,e^x\,\dd x$.
2. **Zweiter Schritt:** Das Restintegral hat noch ein $x$. Nach dem ersten Beispiel ist $\int x\,e^x\,\dd x = (x - 1)e^x$. Also ist $\int 2x\,e^x\,\dd x = 2(x - 1)e^x$.
3. **Zusammensetzen:** $\int x^2 e^x\,\dd x = x^2 e^x - 2(x - 1)e^x + C = \left(x^2 - 2x + 2\right)e^x + C$.
4. **Grenzen:** $\left[\left(x^2 - 2x + 2\right)e^x\right]_0^1 = (1 - 2 + 2)\,e - 2\cdot e^0 = e - 2 \approx 0{,}718$.

Bei jedem Schritt sinkt die Hochzahl des Polynoms um $1$. Nach zwei Schritten ist sie verschwunden.
:::

:::beispiel[Wirkstoffmenge im Blut]
Die Konzentration eines Medikaments im Blut ist $c(t) = 4t\,e^{-0{,}5t}$ in Milligramm pro Liter, $t$ in
Stunden. In der Pharmazie misst man die Gesamtbelastung durch die Fläche unter der Kurve,
$\int_0^4 c(t)\,\dd t$.

1. **Wahl:** $u = t$, $v' = e^{-0{,}5t}$. Also $u' = 1$ und $v = -2\,e^{-0{,}5t}$ (lineare Substitution: durch $-0{,}5$ teilen).
2. **Formel:** $\int t\,e^{-0{,}5t}\,\dd t = -2t\,e^{-0{,}5t} - \int\left(-2\,e^{-0{,}5t}\right)\dd t = -2t\,e^{-0{,}5t} - 4\,e^{-0{,}5t}$.
3. **Grenzen:** Oben ergibt sich $-8e^{-2} - 4e^{-2} = -12e^{-2}$, unten $-4$. Differenz: $4 - 12e^{-2}$.
4. **Faktor 4:** $\int_0^4 c(t)\,\dd t = 4\left(4 - 12e^{-2}\right) = 16 - 48e^{-2} \approx 9{,}50$.
5. **Einheit:** mg/L mal h ergibt mg·h/L.

**Antwort:** Die Fläche unter der Konzentrationskurve beträgt in den ersten vier Stunden rund $9{,}50$ mg·h/L.
:::

:::merke[Rezept: partielle Integration]
1. Als $u$ den Faktor wählen, der durch **Ableiten einfacher** wird: Polynome (aus $x$ wird $1$) und $\ln x$ (wird zu $\frac1x$).
2. Als $v'$ den Faktor wählen, den man **leicht integrieren** kann und der dabei nicht komplizierter wird: $e^x$, $\sin x$, $\cos x$.
3. $u'$ und $v$ berechnen und in die Formel einsetzen. Das Minus vor dem neuen Integral nicht vergessen.
4. Das neue Integral berechnen, wenn nötig noch einmal partiell.
5. Probe durch Ableiten mit der Produktregel.
:::

:::achtung[Das Minus vor dem neuen Integral]
Eine typische Fehlrechnung:
$$\int x\cos x\,\dd x \overset{?}{=} x\sin x + \int \sin x\,\dd x = x\sin x - \cos x + C.$$
Hier wurde aus dem Minus der Formel ein Plus. Die Probe zeigt es: $(x\sin x - \cos x)' = \sin x + x\cos x + \sin x$.
Das ist nicht $x\cos x$. Richtig ist $x\sin x - \int\sin x\,\dd x = x\sin x + \cos x + C$. Probe:
$(x\sin x + \cos x)' = \sin x + x\cos x - \sin x = x\cos x$.
:::

:::achtung[Beim bestimmten Integral den Randterm vergessen]
Eine zweite typische Fehlrechnung zu $\int_0^1 x\,e^x\,\dd x$:
$$\int_0^1 x\,e^x\,\dd x \overset{?}{=} -\int_0^1 e^x\,\dd x = -(e - 1) \approx -1{,}718.$$
Hier fehlt der Randterm $\big[x\,e^x\big]_0^1 = e$. Ein negatives Ergebnis kann auch nicht stimmen, denn
der Integrand ist auf $[0, 1]$ nicht negativ. Richtig ist $e - (e - 1) = 1$.
:::

```reflexion
frage: Warum wählt man bei $\int x\,e^x\,\dd x$ das Polynom $x$ als $u$ und nicht $e^x$? Was würde bei der anderen Wahl passieren?
antwort: |
  Der Faktor $u$ wird abgeleitet. Aus $x$ wird dabei $1$, das Polynom verschwindet also. Der Faktor $e^x$ bleibt beim
  Integrieren unverändert. Das neue Integral $\int 1\cdot e^x\,\dd x$ ist deshalb leichter als das alte. Wählt man
  umgekehrt $u = e^x$ und $v' = x$, wird aus $x$ beim Integrieren $\frac{x^2}{2}$. Das neue Integral
  $\int \frac{x^2}{2}e^x\,\dd x$ hat dann eine höhere Potenz und ist schwerer als das alte.
```

### Welche Technik passt? Ein Überblick

Integrieren ist, anders als Ableiten, kein fester Ablauf. Es gibt sogar Funktionen wie $e^{x^2}$ oder
$\frac{\sin x}{x}$, deren Stammfunktion sich nicht mit bekannten Funktionen hinschreiben lässt. In der
Prüfung kommen aber nur Integrale vor, die mit den Techniken dieses Kapitels gehen. Prüfe die Zeilen der
folgenden Tabelle von oben nach unten.

| Der Integrand sieht so aus | Technik | Beispiel |
|---|---|---|
| Summe von Potenzen, $e^x$, $\sin x$, $\cos x$, $\frac1x$ | Grundintegrale gliedweise. | $\int \left(x^3 - \frac2x\right)\dd x = \frac{x^4}{4} - 2\ln\lvert x\rvert$. |
| Produkt oder Bruch, der sich ausmultiplizieren oder aufteilen lässt | Erst umformen. | $\frac{x^2 + 1}{x} = x + \frac1x$. |
| Grundfunktion von $ax + b$ | Lineare Substitution: durch $a$ teilen. | $\int e^{5x - 1}\,\dd x = \frac15 e^{5x - 1}$. |
| Innerer Ausdruck und seine Ableitung als Faktor | Substitution. | $\int 2x\sin\left(x^2\right)\dd x = -\cos\left(x^2\right)$. |
| Zähler ist ein Vielfaches der Ableitung des Nenners | Logarithmus des Nenners. | $\int \frac{3x^2}{x^3 + 1}\,\dd x = \ln\lvert x^3 + 1\rvert$. |
| Polynom mal $e^x$, $\sin x$ oder $\cos x$ | Partielle Integration mit Polynom als $u$. | $\int x\cos x\,\dd x = x\sin x + \cos x$. |
| $\ln x$ allein oder mal Polynom | Partielle Integration mit $\ln x$ als $u$. | $\int \ln x\,\dd x = x\ln x - x$. |

Die Integrationskonstante $+\,C$ ist in der Spalte „Beispiel“ weggelassen.

```aufgabe
id: ir-partiell-xe2x
titel: Polynom mal e-Funktion
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Bestimme $\displaystyle\int x\,e^{2x}\,\dd x$ mit partieller Integration.
teile:
  - typ: term
    label: '$F(x)$'
    loesung: "(x/2 - 1/4)*e^(2x)"
    plusC: true
    bereich: [-1, 1]
    fehler:
      - wert: "x*e^(2x) - e^(2x)/2"
        meldung: 'Die Stammfunktion von $e^{2x}$ ist $\frac12 e^{2x}$, nicht $e^{2x}$. Bei $v$ fehlt das Teilen durch die innere Ableitung $2$.'
      - wert: "x/2*e^(2x) + e^(2x)/4"
        meldung: Das Vorzeichen des zweiten Summanden stimmt nicht. Vor dem neuen Integral steht in der Formel ein Minus.
      - wert: "x^2/2*e^(2x)/2"
        meldung: Du hast beide Faktoren einzeln integriert und multipliziert. Für Produkte gibt es keine solche Regel.
hinweise:
  - '$u = x$ und $v'' = e^{2x}$. Für $v$ teilst du durch die innere Ableitung $2$.'
loesung: |
  **Ansatz:** Polynom mal e-Funktion, also partielle Integration. Das Polynom $x$ wird beim Ableiten einfacher, deshalb $u = x$ und $v' = e^{2x}$.
  ---
  $u' = 1$ und $v = \frac12 e^{2x}$. Formel: $\int x\,e^{2x}\,\dd x = \frac{x}{2}e^{2x} - \int \frac12 e^{2x}\,\dd x = \frac{x}{2}e^{2x} - \frac14 e^{2x} + C$.
  ---
  **Probe:** $\left(\frac{x}{2}e^{2x} - \frac14 e^{2x}\right)' = \frac12 e^{2x} + x\,e^{2x} - \frac12 e^{2x} = x\,e^{2x}$. Es stimmt.
```

```aufgabe
id: ir-partiell-wahl
titel: u und v′ richtig wählen
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Für die partielle Integration von $\displaystyle\int x^2\ln x\,\dd x$ muss man festlegen, welcher Faktor $u$ und welcher $v'$ ist.
  Welche Wahl führt zum Ziel?
teile:
  - typ: auswahl
    optionen:
      - '$u = \ln x$ und $v'' = x^2$'
      - '$u = x^2$ und $v'' = \ln x$'
      - 'Beide Wahlen sind gleich gut.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Dann müsstest du $\ln x$ integrieren. Das geht nur mit einer eigenen partiellen Integration, und es entsteht ein komplizierteres Integral. $\ln x$ wird immer abgeleitet.'
      - wert: 2
        meldung: Die Wahl entscheidet, ob das neue Integral leichter oder schwerer wird. Probiere beide Wahlen im Kopf aus.
hinweise:
  - Welcher der beiden Faktoren wird beim Ableiten einfacher? Für welchen kennst du sofort eine Stammfunktion?
loesung: |
  **Ansatz:** $u$ soll beim Ableiten einfacher werden, $v'$ soll sich leicht integrieren lassen.
  ---
  $\ln x$ hat die einfache Ableitung $\frac1x$, aber keine einfache Stammfunktion. Also $u = \ln x$ und $v' = x^2$ mit $v = \frac{x^3}{3}$. Das neue Integral ist $\int \frac{x^3}{3}\cdot\frac1x\,\dd x = \int\frac{x^2}{3}\,\dd x$, also sehr einfach.
```

```aufgabe
id: ir-technik-zuordnen
titel: Welche Technik passt?
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Ordne jedem Integral die passende Technik zu. Du musst nichts ausrechnen.
teile:
  - typ: auswahl
    label: '$\int x\,e^{x^2}\,\dd x$'
    optionen: ['Grundintegrale gliedweise', 'Substitution', 'partielle Integration', 'erst umformen']
    richtig: [1]
    fehler:
      - wert: 2
        meldung: 'Im Exponenten steht der innere Ausdruck $x^2$, und seine Ableitung $2x$ steht bis auf den Faktor $2$ davor. Das ist das Muster der Substitution.'
  - typ: auswahl
    label: '$\int x\,e^{x}\,\dd x$'
    optionen: ['Grundintegrale gliedweise', 'Substitution', 'partielle Integration', 'erst umformen']
    richtig: [2]
    fehler:
      - wert: 1
        meldung: 'Der Exponent ist nur $x$. Es gibt keinen inneren Ausdruck, dessen Ableitung als Faktor dasteht. Polynom mal e-Funktion ist der Fall für partielle Integration.'
  - typ: auswahl
    label: '$\int \frac{x^3 + 2x}{x}\,\dd x$'
    optionen: ['Grundintegrale gliedweise', 'Substitution', 'partielle Integration', 'erst umformen']
    richtig: [3]
    fehler:
      - wert: 1
        meldung: 'Der Bruch lässt sich viel einfacher aufteilen: $\frac{x^3 + 2x}{x} = x^2 + 2$.'
  - typ: auswahl
    label: '$\int \left(3\cos x - \frac{4}{x}\right)\dd x$'
    optionen: ['Grundintegrale gliedweise', 'Substitution', 'partielle Integration', 'erst umformen']
    richtig: [0]
    fehler:
      - wert: 3
        meldung: Hier gibt es nichts umzuformen. Beide Summanden stehen schon in der Tabelle der Grundintegrale.
hinweise:
  - Geh die Tabelle „Welche Technik passt?“ von oben nach unten durch. Die erste passende Zeile gewinnt.
loesung: |
  **Ansatz:** Für jedes Integral prüfen wir, welches Muster vorliegt.
  ---
  $\int x\,e^{x^2}\,\dd x$: innerer Ausdruck $x^2$ mit Ableitung $2x$ als Faktor, also **Substitution**. $\int x\,e^x\,\dd x$: Polynom mal e-Funktion, also **partielle Integration**.
  ---
  $\int \frac{x^3 + 2x}{x}\,\dd x$: Bruch aufteilen zu $x^2 + 2$, also **erst umformen**. $\int \left(3\cos x - \frac4x\right)\dd x$: zwei Grundintegrale, also **gliedweise**.
```

```aufgabe
id: ir-partiell-xsin
titel: Polynom mal Sinus
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  a) Bestimme $\displaystyle\int x\sin x\,\dd x$.

  b) Berechne damit $\displaystyle\int_0^{\pi} x\sin x\,\dd x$ exakt.
teile:
  - typ: term
    label: 'a) $F(x)$'
    loesung: "-x*cos(x) + sin(x)"
    plusC: true
    fehler:
      - wert: "-x*cos(x) - sin(x)"
        meldung: 'Mit $v = -\cos x$ steht in der Formel $-\int 1\cdot(-\cos x)\,\dd x = +\int\cos x\,\dd x = +\sin x$. Zwei Minus ergeben Plus.'
      - wert: "x*cos(x) - sin(x)"
        meldung: 'Du hast mit $v = \cos x$ gerechnet. Die Stammfunktion von $\sin x$ ist aber $-\cos x$, denn $(-\cos x)'' = \sin x$. Mit $v = -\cos x$ ändern sich beide Vorzeichen.'
  - typ: zahl
    label: 'b) Integral'
    loesung: "(-pi*cos(pi) + sin(pi)) - (0 + sin(0))"
    anzeige: '\pi \approx 3{,}142'
    fehler:
      - wert: "-pi"
        meldung: 'Achte auf $\cos\pi = -1$. Dann ist $-\pi\cos\pi = +\pi$.'
hinweise:
  - '$u = x$ und $v'' = \sin x$, also $v = -\cos x$.'
  - 'Setze in $-x\cos x + \sin x$ die Grenzen ein. Es gilt $\cos\pi = -1$ und $\sin\pi = 0$.'
loesung: |
  **Ansatz:** Polynom mal Sinus, also partielle Integration mit $u = x$ und $v' = \sin x$.
  ---
  $u' = 1$ und $v = -\cos x$. Formel: $\int x\sin x\,\dd x = -x\cos x - \int 1\cdot(-\cos x)\,\dd x = -x\cos x + \sin x + C$.
  ---
  b) $\big[-x\cos x + \sin x\big]_0^{\pi} = (-\pi\cdot(-1) + 0) - (0 + 0) = \pi \approx 3{,}142$.
  ---
  **Plausibilität:** Auf $[0, \pi]$ ist $x\sin x \ge 0$, das Integral muss also positiv sein. Es ist positiv.
gefuehrt:
  - text: Welcher Faktor wird $u$, also abgeleitet?
    erklaerung: 'Das Polynom $x$, denn es wird beim Ableiten zur Zahl $1$. Also $u = x$ und $v'' = \sin x$.'
  - text: 'Bestimme $v$, eine Stammfunktion von $\sin x$.'
    teil: { typ: term, loesung: "-cos(x)", plusC: true, fehler: [ { wert: "cos(x)", meldung: 'Leite $\cos x$ ab: Das ergibt $-\sin x$. Das Vorzeichen fehlt.' } ] }
    erklaerung: '$v = -\cos x$, denn $(-\cos x)'' = \sin x$.'
  - text: 'Setze in die Formel $uv - \int u''v\,\dd x$ ein und vereinfache. Wie lautet die Stammfunktion?'
    teil: { typ: term, loesung: "-x*cos(x) + sin(x)", plusC: true, fehler: [ { wert: "-x*cos(x) - sin(x)", meldung: 'Es ist $-\int 1\cdot(-\cos x)\,\dd x = +\int\cos x\,\dd x$. Zwei Minus ergeben Plus.' } ] }
    erklaerung: '$x\cdot(-\cos x) - \int 1\cdot(-\cos x)\,\dd x = -x\cos x + \sin x$.'
  - text: 'Setze die Grenzen $0$ und $\pi$ ein.'
    teil: { typ: zahl, loesung: "pi", fehler: [ { wert: "-pi", meldung: 'Es ist $\cos\pi = -1$, also $-\pi\cos\pi = +\pi$.' } ] }
    erklaerung: '$(-\pi\cdot(-1) + 0) - (0 + 0) = \pi$.'
```

```aufgabe
id: ir-partiell-ln
titel: Logarithmus mal Polynom
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  a) Bestimme $\displaystyle\int x\ln x\,\dd x$ für $x > 0$.

  b) Berechne $\displaystyle\int_1^e x\ln x\,\dd x$ exakt und auf drei Dezimalstellen.
teile:
  - typ: term
    label: 'a) $F(x)$'
    loesung: "x^2/2*ln(x) - x^2/4"
    plusC: true
    bereich: [0.5, 4]
    fehler:
      - wert: "x^2/2*ln(x) - x^2/2"
        meldung: 'Das neue Integral ist $\int\frac{x^2}{2}\cdot\frac1x\,\dd x = \int\frac{x}{2}\,\dd x = \frac{x^2}{4}$. Beim Integrieren von $\frac x2$ fehlt das Teilen durch $2$.'
      - wert: "x^2/2*(x*ln(x) - x)"
        meldung: Du hast beide Faktoren einzeln integriert und multipliziert. Verwende die Formel der partiellen Integration mit $u = \ln x$.
  - typ: zahl
    label: 'b) Integral'
    loesung: "(e^2/2 - e^2/4) - (0 - 1/4)"
    anzeige: '\tfrac{e^2 + 1}{4} \approx 2{,}097'
    fehler:
      - wert: "e^2/4"
        meldung: 'Die untere Grenze liefert nicht $0$. Es ist $F(1) = \frac12\ln 1 - \frac14 = -\frac14$, und das wird abgezogen.'
hinweise:
  - '$u = \ln x$ (wird abgeleitet) und $v'' = x$, also $v = \frac{x^2}{2}$.'
  - 'Setze in b) die Grenzen in $\frac{x^2}{2}\ln x - \frac{x^2}{4}$ ein. Es gilt $\ln e = 1$ und $\ln 1 = 0$.'
loesung: |
  **Ansatz:** $\ln x$ wird immer abgeleitet, weil es keine einfache Stammfunktion hat. Also $u = \ln x$ und $v' = x$.
  ---
  $u' = \frac1x$ und $v = \frac{x^2}{2}$. Formel: $\int x\ln x\,\dd x = \frac{x^2}{2}\ln x - \int\frac{x^2}{2}\cdot\frac1x\,\dd x = \frac{x^2}{2}\ln x - \frac{x^2}{4} + C$.
  ---
  b) Oben: $\frac{e^2}{2}\cdot 1 - \frac{e^2}{4} = \frac{e^2}{4}$. Unten: $\frac12\cdot 0 - \frac14 = -\frac14$.
  ---
  Differenz: $\frac{e^2}{4} + \frac14 = \frac{e^2 + 1}{4} \approx 2{,}097$. **Probe** für a): $\left(\frac{x^2}{2}\ln x - \frac{x^2}{4}\right)' = x\ln x + \frac{x}{2} - \frac{x}{2} = x\ln x$. Es stimmt.
```

```aufgabe
id: ir-partiell-fehler
titel: Die ungünstige Wahl
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  Eine Mitschülerin will $\displaystyle\int x\,e^{-x}\,\dd x$ berechnen. Sie wählt $u = e^{-x}$ und $v' = x$ und erhält
  $$\int x\,e^{-x}\,\dd x = \frac{x^2}{2}e^{-x} + \int\frac{x^2}{2}e^{-x}\,\dd x.$$
  a) Warum kommt sie so nicht weiter?

  b) Bestimme eine Stammfunktion mit der besseren Wahl.
teile:
  - typ: auswahl
    label: 'a) Begründung'
    optionen:
      - 'Das neue Integral enthält $x^2$ statt $x$ und ist schwerer als das alte.'
      - Die Formel der partiellen Integration ist falsch angewendet worden.
      - 'Für $e^{-x}$ gibt es keine Stammfunktion.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Rechne nach: $u'' = -e^{-x}$ und $v = \frac{x^2}{2}$. Damit ist $-\int u''v\,\dd x = +\int\frac{x^2}{2}e^{-x}\,\dd x$. Die Formel stimmt. Das Problem ist die Wahl.'
      - wert: 2
        meldung: 'Die Stammfunktion von $e^{-x}$ ist $-e^{-x}$. Daran liegt es nicht.'
  - typ: term
    label: 'b) $F(x)$'
    loesung: "-(x + 1)*e^(-x)"
    plusC: true
    bereich: [-1, 2]
    fehler:
      - wert: "(x + 1)*e^(-x)"
        meldung: 'Die Stammfunktion von $e^{-x}$ ist $-e^{-x}$. Prüfe die Vorzeichen bei $v$ und im Restintegral.'
      - wert: "(-x + 1)*e^(-x)"
        meldung: 'Das Restintegral ist $-\int 1\cdot(-e^{-x})\,\dd x = \int e^{-x}\,\dd x = -e^{-x}$. Das zweite Vorzeichen stimmt nicht.'
hinweise:
  - Welcher Faktor wird beim Ableiten einfacher? Diesen Faktor solltest du als $u$ nehmen.
  - '$u = x$ und $v'' = e^{-x}$, also $v = -e^{-x}$.'
loesung: |
  **a)** Ihre Formel ist richtig angewendet. Aber das neue Integral enthält $x^2$ statt $x$. Es ist schwerer als das alte. Die Wahl von $u$ und $v'$ war ungünstig.
  ---
  **b)** Bessere Wahl: $u = x$ (wird zu $1$) und $v' = e^{-x}$, also $u' = 1$ und $v = -e^{-x}$.
  ---
  $\int x\,e^{-x}\,\dd x = -x\,e^{-x} - \int\left(-e^{-x}\right)\dd x = -x\,e^{-x} - e^{-x} + C = -(x + 1)\,e^{-x} + C$.
  ---
  **Probe:** $\left(-(x + 1)e^{-x}\right)' = -e^{-x} + (x + 1)e^{-x} = x\,e^{-x}$. Es stimmt.
```

```aufgabe
id: ir-partiell-zweimal
titel: Zweimal partiell integrieren
niveau: 3
lernziel: 5
kompetenz: rechnen
angabe: |
  Berechne $\displaystyle\int_0^{\pi} x^2\cos x\,\dd x$ exakt und auf drei Dezimalstellen.
teile:
  - typ: zahl
    loesung: "-2*pi"
    anzeige: '-2\pi \approx -6{,}283'
    fehler:
      - wert: "2*pi"
        meldung: 'Das Vorzeichen stimmt nicht. Prüfe die zweite partielle Integration: $\int 2x\sin x\,\dd x = -2x\cos x + 2\sin x$, und davor steht ein Minus.'
hinweise:
  - 'Erster Schritt: $u = x^2$, $v'' = \cos x$. Es bleibt $-\int 2x\sin x\,\dd x$ übrig.'
  - 'Zweiter Schritt für $\int 2x\sin x\,\dd x$: $u = 2x$, $v'' = \sin x$, also $v = -\cos x$.'
loesung: |
  **Ansatz:** Das Polynom $x^2$ muss zweimal abgeleitet werden, bis es verschwindet. Also zweimal partiell integrieren, jeweils mit dem Polynom als $u$.
  ---
  Erster Schritt: $u = x^2$, $v' = \cos x$, also $u' = 2x$, $v = \sin x$. Das ergibt $\int x^2\cos x\,\dd x = x^2\sin x - \int 2x\sin x\,\dd x$.
  ---
  Zweiter Schritt: $u = 2x$, $v' = \sin x$, also $u' = 2$, $v = -\cos x$. Das ergibt $\int 2x\sin x\,\dd x = -2x\cos x + \int 2\cos x\,\dd x = -2x\cos x + 2\sin x$.
  ---
  Zusammen: $\int x^2\cos x\,\dd x = x^2\sin x + 2x\cos x - 2\sin x + C$.
  ---
  Grenzen: Oben $\pi^2\cdot 0 + 2\pi\cdot(-1) - 0 = -2\pi$. Unten ist alles $0$. Ergebnis: $-2\pi \approx -6{,}283$. **Plausibilität:** Auf $\left[\frac\pi2, \pi\right]$ ist $\cos x < 0$, und dort ist $x^2$ groß. Ein negativer Wert ist plausibel.
```

```aufgabe
id: ir-partiell-kreis
titel: Wenn das Integral zurückkehrt
niveau: 3
lernziel: 5
kompetenz: begruenden
angabe: |
  Berechne $I = \displaystyle\int_0^{\pi} e^x\sin x\,\dd x$ exakt und auf drei Dezimalstellen.

  Tipp zur Methode: Integriere zweimal partiell, jedes Mal mit $u = \sin x$ beziehungsweise $u = \cos x$. Nach zwei
  Schritten taucht das gesuchte Integral $I$ wieder auf. Löse dann nach $I$ auf wie eine Gleichung.
teile:
  - typ: zahl
    label: '$I$'
    loesung: "(exp(pi) + 1)/2"
    anzeige: '\tfrac{e^{\pi} + 1}{2} \approx 12{,}070'
    fehler:
      - wert: "exp(pi) + 1"
        meldung: 'Am Ende steht $2I = e^{\pi} + 1$. Du musst noch durch $2$ teilen.'
hinweise:
  - 'Erster Schritt mit $u = \sin x$ und $v'' = e^x$: $I = \big[e^x\sin x\big]_0^{\pi} - \int_0^{\pi} e^x\cos x\,\dd x$. Der Randterm ist $0$.'
  - 'Zweiter Schritt mit $u = \cos x$ und $v'' = e^x$: $\int_0^{\pi} e^x\cos x\,\dd x = \big[e^x\cos x\big]_0^{\pi} + I$. Setze ein und sammle $I$ auf einer Seite.'
loesung: |
  **Ansatz:** Weder $e^x$ noch $\sin x$ wird beim Ableiten einfacher. Beide wiederholen sich aber nach zwei Ableitungen. Deshalb kehrt das Integral nach zwei Schritten zurück, und wir lösen eine Gleichung.
  ---
  Erster Schritt: $u = \sin x$, $v' = e^x$. Dann $I = \big[e^x\sin x\big]_0^{\pi} - \int_0^{\pi} e^x\cos x\,\dd x$. Der Randterm ist $0$, weil $\sin\pi = \sin 0 = 0$.
  ---
  Zweiter Schritt: $u = \cos x$, $v' = e^x$, also $u' = -\sin x$. Dann $\int_0^{\pi} e^x\cos x\,\dd x = \big[e^x\cos x\big]_0^{\pi} + \int_0^{\pi} e^x\sin x\,\dd x = \left(-e^{\pi} - 1\right) + I$.
  ---
  Einsetzen: $I = 0 - \left(-e^{\pi} - 1 + I\right) = e^{\pi} + 1 - I$. Also $2I = e^{\pi} + 1$ und $I = \frac{e^{\pi} + 1}{2} \approx 12{,}070$.
  ---
  **Plausibilität:** Auf $[0, \pi]$ ist $e^x\sin x \ge 0$, das Ergebnis muss positiv sein. Außerdem ist $e^x\sin x \le e^{\pi} \approx 23{,}1$. Die Fläche liegt also unter $\pi\cdot 23{,}1 \approx 72{,}7$. Beides passt.
```

## Bestand aus Änderungsrate: Weg und Bremsweg

```aufgabe
id: ir-bestand-vorwissen
titel: Geschwindigkeit ist die Ableitung des Ortes
art: check
niveau: 1
angabe: |
  Ein Körper ist zur Zeit $t$ (in Sekunden) am Ort $s(t) = 2t^2 + 3t$ (in Metern). Wie groß ist seine Geschwindigkeit
  zur Zeit $t = 2$ s? Zum Nachlesen:
  [9.15 Anwendungen in Physik und Biologie](/lernen/mathe3/differentialrechnung/anwendungen-in-physik-und-biologie-bewegung-und-wachstum).
teile:
  - typ: zahl
    label: '$v(2)$'
    einheit: m/s
    loesung: "4*2 + 3"
    fehler:
      - wert: "2*4 + 3*2"
        meldung: Das ist der Ort $s(2)$. Die Geschwindigkeit ist die Ableitung des Ortes, $v(t) = s'(t)$.
      - wert: "(2*4 + 3*2)/2"
        meldung: Das ist die mittlere Geschwindigkeit von $0$ bis $2$ s. Gefragt ist die momentane Geschwindigkeit, also die Ableitung.
loesung: |
  Die Geschwindigkeit ist die Ableitung des Ortes: $v(t) = s'(t) = 4t + 3$.
  ---
  $v(2) = 4\cdot 2 + 3 = 11$ m/s. In dieser Lektion gehst du den umgekehrten Weg: von $v$ zurück zu $s$.
```

In der Anwendung beantwortet das Integral immer wieder dieselbe Frage: **Wie viel sammelt sich an, wenn
man zu jedem Zeitpunkt die Rate kennt**? Eine **Rate** ist eine Änderung pro Zeiteinheit, etwa Liter
pro Minute oder Meter pro Sekunde. Die angesammelte Größe nennt man **Bestand**. Beispiele sind die
Wassermenge in einem Tank oder der Ort eines Autos.

Mathematisch steckt der Hauptsatz dahinter. Ist $B$ ein Bestand und $B'$ seine Änderungsrate, dann ist
$B$ eine Stammfunktion von $B'$. Der Hauptsatz liefert
$$B(t_1) = B(t_0) + \int_{t_0}^{t_1} B'(t)\,\dd t.$$
Dabei ist $t_0$ der Anfangszeitpunkt, $B(t_0)$ der Anfangsbestand und $t_1$ der Endzeitpunkt. In Worten:
**Endbestand gleich Anfangsbestand plus Integral der Änderungsrate.** Ein Zahlenbeispiel: Ein Tank
enthält $50$ Liter, und in einer Stunde fließen laut Integral $30$ Liter zu. Dann enthält er danach
$80$ Liter.

| Änderungsrate | Das Integral liefert | Einheit des Integrals |
|---|---|---|
| Geschwindigkeit $v(t)$ in m/s | die Ortsänderung, also den Weg bei $v \ge 0$. | m/s $\cdot$ s $=$ m. |
| Zuflussrate $r(t)$ in L/min | die zugeflossene Menge. | L/min $\cdot$ min $=$ L. |
| Wachstumsrate in Bakterien pro Stunde | den Zuwachs der Population. | Bakterien. |
| Leistung $P(t)$ in W | die Energie. | W $\cdot$ s $=$ J. |

Die Einheit des Integrals ist immer **Einheit des Integranden mal Einheit der Integrationsvariablen**.
Das ist dieselbe Rechnung wie „Höhe mal Breite“ bei einem Rechteck. Sie ist eine gute Kontrolle.

:::beispiel[Wann ist der Speicher am vollsten?]
In einem Regenrückhaltebecken sind am Anfang $20$ m³ Wasser. Die Änderungsrate ist $r(t) = 8 - 2t$ in m³
pro Stunde, für $0 \le t \le 6$. Positive Werte bedeuten Zufluss, negative Abfluss.

1. **Bestand als Term:** $V(t) = 20 + \int_0^t (8 - 2s)\,\dd s = 20 + \big[8s - s^2\big]_0^t = 20 + 8t - t^2$. Die Integrationsvariable heißt $s$, weil $t$ schon die obere Grenze ist.
2. **Wann am meisten?** Solange $r(t) > 0$ ist, wächst der Bestand. Die Rate wird bei $8 - 2t = 0$, also bei $t = 4$ h, null und danach negativ. Bei $t = 4$ h ist das Becken am vollsten.
3. **Maximaler Inhalt:** $V(4) = 20 + 32 - 16 = 36$ m³.
4. **Am Ende:** $V(6) = 20 + 48 - 36 = 32$ m³. Zwischen $t = 4$ und $t = 6$ sind $4$ m³ abgeflossen.

Das Maximum des Bestands liegt also dort, wo die Rate von plus nach minus wechselt. Das ist der Hauptsatz
in Aktion: $V' = r$.
:::

```plot
x: [-0.3, 6.5]
y: [-5, 9]
achsen: { x: "t in h", y: "r in m³/h" }
graphen:
  - { f: "8 - 2*x", label: "r(t) = 8 − 2t", farbe: 0, von: 0, bis: 6 }
flaechen:
  - { f: "8 - 2*x", von: 0, bis: 4, farbe: 2 }
  - { f: "8 - 2*x", von: 4, bis: 6, farbe: 1 }
punkte:
  - { x: 4, y: 0, label: "Maximum des Bestands" }
beschriftung: Änderungsrate eines Rückhaltebeckens. Die grüne Fläche (16 m³) fließt zu, die orange Fläche (4 m³) fließt wieder ab. Der Bestand ist bei t = 4 h am größten.
```

### Bestand aus einem Diagramm ablesen

Oft ist die Rate nicht als Term gegeben, sondern als Diagramm. Dann zerlegst du die Fläche in
Rechtecke, Dreiecke und Trapeze. Ein **Trapez** ist ein Viereck mit zwei parallelen Seiten. Seine Fläche
ist „Mittelwert der parallelen Seiten mal Abstand“.

:::beispiel[Eine Fahrt mit dem Lift]
Ein Aufzug fährt nach oben. Sein Geschwindigkeits-Zeit-Diagramm besteht aus drei Strecken. In den ersten
$4$ s beschleunigt er gleichmäßig von $0$ auf $6$ m/s. Dann fährt er $10$ s lang mit $6$ m/s. Zuletzt
bremst er in $3$ s gleichmäßig auf $0$.

1. **Anfahren:** Dreieck mit Grundlinie $4$ s und Höhe $6$ m/s, Fläche $\frac12\cdot 4\cdot 6 = 12$ m.
2. **Gleichmäßige Fahrt:** Rechteck $10\cdot 6 = 60$ m.
3. **Bremsen:** Dreieck $\frac12\cdot 3\cdot 6 = 9$ m.
4. **Gesamt:** $12 + 60 + 9 = 81$ m.

Der Aufzug ist $81$ m gestiegen, etwa $27$ Stockwerke zu je $3$ m. Die Einheit stimmt: m/s mal s ergibt m.
:::

```plot
x: [-0.5, 18]
y: [-0.5, 7.5]
achsen: { x: "t in s", y: "v in m/s" }
strecken:
  - { von: [0, 0], nach: [4, 6] }
  - { von: [4, 6], nach: [14, 6] }
  - { von: [14, 6], nach: [17, 0] }
flaechen:
  - { f: "1.5*x", von: 0, bis: 4, farbe: 0 }
  - { f: "6", von: 4, bis: 14, farbe: 2 }
  - { f: "6 - 2*(x - 14)", von: 14, bis: 17, farbe: 0 }
beschriftung: Geschwindigkeit eines Aufzugs. Die Fläche unter dem Graphen besteht aus zwei Dreiecken (12 m und 9 m) und einem Rechteck (60 m), zusammen 81 m Höhenunterschied.
```

### Der Bremsweg

Ist $v(t)$ die Geschwindigkeit und $s(t)$ der Ort, dann gilt $s' = v$. Also ist
$$s(t_1) - s(t_0) = \int_{t_0}^{t_1} v(t)\,\dd t.$$
Solange $v(t) \ge 0$ ist, fährt das Fahrzeug nur vorwärts. Dann ist das Integral genau der
**zurückgelegte Weg**. Beim Bremsen ist $t_0$ der Bremsbeginn und $t_1$ der Zeitpunkt des Stillstands.

:::beispiel[Vollbremsung aus 108 km/h]
Ein Auto fährt mit $108$ km/h und bremst. Seine Geschwindigkeit in m/s ist $t$ Sekunden nach Bremsbeginn
$v(t) = c - 1{,}2\,t^2$.

1. **Einheiten angleichen:** $1$ m/s sind $3{,}6$ km/h. Also $108$ km/h $= \frac{108}{3{,}6}$ m/s $= 30$ m/s.
2. **Konstante $c$:** Zu Beginn ist $t = 0$ und $v(0) = c$. Also $c = 30$.
3. **Bremsdauer:** Stillstand heißt $v(t) = 0$: $30 - 1{,}2\,t^2 = 0$, also $t^2 = 25$ und $t = 5$ s. Die Lösung $t = -5$ liegt vor dem Bremsbeginn und fällt weg.
4. **Bremsweg:** $s = \int_0^5 \left(30 - 1{,}2\,t^2\right)\dd t = \big[30t - 0{,}4\,t^3\big]_0^5 = 150 - 50 = 100$ m.
5. **Plausibilität:** Mit konstant $30$ m/s wären es in $5$ s genau $150$ m. Das Auto wird langsamer, also muss es weniger sein. Bei gleichmäßiger Abbremsung wäre die Fläche ein Dreieck mit $\frac12\cdot 30\cdot 5 = 75$ m. Hier bremst das Auto anfangs schwach und erst später stark. Deshalb liegt der Weg zwischen $75$ m und $150$ m.
:::

```plot
x: [-0.3, 5.6]
y: [-3, 33]
achsen: { x: "t in s", y: "v in m/s" }
graphen:
  - { f: "30 - 1.2*x^2", label: "v(t) = 30 − 1,2t²", farbe: 0, von: 0, bis: 5 }
flaechen:
  - { f: "30 - 1.2*x^2", von: 0, bis: 5, farbe: 0 }
punkte:
  - { x: 0, y: 30, label: "30 m/s = 108 km/h" }
  - { x: 5, y: 0, label: "Stillstand" }
beschriftung: Geschwindigkeit beim Bremsen aus 108 km/h. Die Fläche unter dem Graphen von 0 bis 5 Sekunden ist der Bremsweg von 100 m.
```

```aufgabe
id: ir-bremsweg-vorhersage
titel: Rechtecke unter einer fallenden Kurve
art: check
niveau: 1
angabe: |
  Sag voraus, bevor du das Widget benutzt: Im Widget wird die Fläche unter $v(t) = 30 - 1{,}2\,t^2$ mit $5$ Rechtecken
  angenähert. Jedes Rechteck ist so hoch wie der Graph am **linken** Rand seines Streifens. Liegt diese Rechtecksumme
  über oder unter dem wahren Bremsweg von $100$ m?
teile:
  - typ: auswahl
    optionen:
      - Darüber, weil der Graph fällt und der linke Rand deshalb der höchste Punkt jedes Streifens ist.
      - Darunter, weil linke Ränder immer zu wenig liefern.
      - Genau gleich, weil sich Fehler aufheben.
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Das gilt nur für wachsende Funktionen. Die Geschwindigkeit beim Bremsen fällt. Wo ist der Graph in einem Streifen am höchsten?
      - wert: 2
        meldung: Bei einer fallenden Funktion ragen alle Rechtecke mit linkem Rand über den Graphen hinaus. Die Fehler haben also alle dasselbe Vorzeichen.
loesung: |
  Die Geschwindigkeit fällt. In jedem Streifen liegt der höchste Wert deshalb am linken Rand. Jedes Rechteck ragt über den Graphen hinaus.
  ---
  Die Summe liegt also über $100$ m. Für $n = 5$ ergibt sich $30 + 28{,}8 + 25{,}2 + 19{,}2 + 10{,}8 = 114$ m. Mit wachsendem $n$ sinkt die Summe und nähert sich den $100$ m.
```

```widget
name: riemann
titel: Bremsweg als Fläche unter v(t) = 30 − 1,2t²
props:
  f: "30 - 1.2*x^2"
  a: 0
  b: 5
  n: 5
  art: links
  x: [-0.3, 5.5]
  y: [-2, 33]
```

Erhöhe im Widget die Zahl $n$ der Streifen. Jedes Rechteck steht für die Überlegung „In dieser Sekunde
fährt das Auto ungefähr so schnell wie am Anfang der Sekunde“. Mit wachsendem $n$ wird diese Annahme
immer genauer. Die Summe nähert sich von größeren Werten her dem exakten Bremsweg $100$ m.

:::achtung[Einheiten mischen]
Eine typische Fehlrechnung zum Beispiel „Vollbremsung aus 108 km/h“ setzt $c = 108$, also die Zahl in km/h:
$$s \overset{?}{=} \int_0^5 \left(108 - 1{,}2\,t^2\right)\dd t = 540 - 50 = 490.$$
Hier werden km/h mit Sekunden multipliziert. Das ergibt keine sinnvolle Einheit. Außerdem passt die
Bremsdauer nicht mehr, denn $108 - 1{,}2\,t^2$ ist bei $t = 5$ noch lange nicht null. Rechne **vor** dem
Ansatz alle Geschwindigkeiten in m/s um, indem du durch $3{,}6$ teilst.
:::

:::achtung[Weg ist nicht dasselbe wie Verschiebung]
Ein Ball wird mit $10$ m/s senkrecht hochgeworfen. Mit der gerundeten Fallbeschleunigung $10$ m/s² ist
seine Geschwindigkeit $v(t) = 10 - 10t$ in m/s für $0 \le t \le 2$. Falsch ist:
$$\text{Weg} \overset{?}{=} \int_0^2 (10 - 10t)\,\dd t = \big[10t - 5t^2\big]_0^2 = 20 - 20 = 0.$$
Das Integral ist die **Verschiebung**, also die Ortsänderung. Nach $2$ s ist der Ball wieder am Start.
Zurückgelegt hat er aber $5$ m nach oben und $5$ m nach unten, also $10$ m. Für den Weg teilst du an der
Nullstelle $t = 1$ von $v$ auf und addierst die Beträge, genau wie bei Flächen.
:::

:::merke[Rezept: Bestand aus Rate]
1. Prüfen, ob alle Einheiten zusammenpassen. Wenn nicht, zuerst umrechnen.
2. Ansatz hinschreiben: Bestand $=$ Anfangsbestand $+ \int$ Rate.
3. Bei der Frage nach einem Weg prüfen, ob die Geschwindigkeit ihr Vorzeichen wechselt. Wenn ja, an der Nullstelle aufteilen.
4. Integral berechnen, Einheit dazuschreiben, Antwortsatz formulieren.
5. Plausibilität prüfen, etwa mit einem Rechteck „größte Rate mal Zeit“.
:::

:::pruefung[Einheiten zuerst]
In Bremsaufgaben ist die Geschwindigkeit meist in km/h gegeben, die Zeit aber in Sekunden. Schreib als
**erste** Zeile die Umrechnung hin, zum Beispiel „$72$ km/h $= 72 : 3{,}6 = 20$ m/s“. Warum? Die Prüferin sieht
sofort, dass du die Einheiten im Blick hast. Und alle weiteren Zahlen passen zusammen. Am Ende schreibst du
den Bremsweg mit Einheit in einem Antwortsatz, etwa: „Der Bremsweg beträgt rund $100$ m.“
:::

```reflexion
frage: Warum liegt das Maximum eines Bestands genau dort, wo die Änderungsrate von positiv nach negativ wechselt?
antwort: |
  Solange die Rate positiv ist, kommt in jedem kleinen Zeitstück etwas dazu. Der Bestand wächst also. Ist die Rate
  negativ, geht in jedem Zeitstück etwas weg, und der Bestand sinkt. Am Wechsel von plus nach minus hört das Wachsen
  auf, und das Abnehmen beginnt. Dort ist der Bestand am größten. Mathematisch ist das die Regel zum Vorzeichenwechsel der Ableitung aus
  [9.11 Monotonie und Extremstellen](/lernen/mathe3/differentialrechnung/monotonie-und-extremstellen):
  $B' = r$ wechselt das Vorzeichen von plus nach minus, also hat $B$ ein Maximum. Ein Maximum kann aber auch am Rand des
  Zeitraums liegen. Deshalb vergleicht man zusätzlich mit den Randwerten.
```

```aufgabe
id: ir-weg-aus-v
titel: Weg in den ersten Sekunden
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Ein Fahrzeug beschleunigt aus dem Stand mit der Geschwindigkeit $v(t) = 3t^2 + 2t$ (in m/s, $t$ in s).
  Welchen Weg legt es in den ersten $4$ Sekunden zurück?
teile:
  - typ: zahl
    label: 'Weg $s$'
    einheit: m
    loesung: "4^3 + 4^2"
    fehler:
      - wert: "(3*16 + 2*4)*4"
        meldung: Du hast die Endgeschwindigkeit mal die Zeit gerechnet. Das stimmt nur bei konstanter Geschwindigkeit. Hier wird das Fahrzeug immer schneller.
      - wert: "6*4 + 2"
        meldung: Das ist die Beschleunigung $v'(4)$. Den Weg erhältst du durch Integrieren, nicht durch Ableiten.
hinweise:
  - 'Der Weg ist $s = \int_0^4 v(t)\,\dd t$, weil $v \ge 0$ ist.'
loesung: |
  **Ansatz:** Für $t \ge 0$ ist $v(t) \ge 0$, das Fahrzeug fährt nur vorwärts. Der Weg ist also das Integral der Geschwindigkeit: $s = \int_0^4 (3t^2 + 2t)\,\dd t$.
  ---
  $s = \big[t^3 + t^2\big]_0^4 = 64 + 16 = 80$ m. **Antwort:** In den ersten vier Sekunden legt das Fahrzeug $80$ m zurück. Einheit: m/s mal s ergibt m.
```

```aufgabe
id: ir-bestand-diagramm
titel: Zufluss aus einem Diagramm
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  Das Diagramm zeigt die Zuflussrate $r$ (in Liter pro Minute) in ein Aquarium. Sie ist $2$ Minuten lang konstant
  $30$ L/min. Dann sinkt sie in $3$ Minuten gleichmäßig auf $0$. In der letzten Minute ist sie negativ. Dort sinkt sie
  gleichmäßig von $0$ auf $-15$ L/min, das Aquarium verliert also Wasser.

  Um wie viel Liter hat sich der Inhalt nach $6$ Minuten insgesamt verändert?
plot:
  x: [-0.3, 6.5]
  y: [-18, 34]
  achsen: { x: "t in min", y: "r in L/min" }
  strecken:
    - { von: [0, 30], nach: [2, 30] }
    - { von: [2, 30], nach: [5, 0] }
    - { von: [5, 0], nach: [6, -15] }
teile:
  - typ: zahl
    label: 'Änderung des Inhalts'
    einheit: L
    loesung: "30*2 + (1/2)*3*30 - (1/2)*1*15"
    fehler:
      - wert: "30*2 + (1/2)*3*30 + (1/2)*1*15"
        meldung: Das letzte Dreieck liegt unter der Achse. Dort fließt Wasser ab. Es muss abgezogen werden.
      - wert: "30*2 + 3*30 - 15"
        meldung: Die schrägen Stücke sind Dreiecke, keine Rechtecke. Ihre Fläche ist „Grundlinie mal Höhe durch zwei“.
hinweise:
  - Zerlege die Fläche in ein Rechteck auf $[0, 2]$, ein Dreieck auf $[2, 5]$ und ein Dreieck unter der Achse auf $[5, 6]$.
loesung: |
  **Ansatz:** Die Änderung des Inhalts ist die Flächenbilanz unter dem Graphen der Rate. Stücke unter der Achse zählen negativ, denn dort fließt Wasser ab.
  ---
  Rechteck: $30\cdot 2 = 60$ L. Dreieck auf $[2, 5]$: $\frac12\cdot 3\cdot 30 = 45$ L. Dreieck auf $[5, 6]$: $\frac12\cdot 1\cdot 15 = 7{,}5$ L, unter der Achse.
  ---
  Bilanz: $60 + 45 - 7{,}5 = 97{,}5$ L. **Antwort:** Nach $6$ Minuten enthält das Aquarium $97{,}5$ Liter mehr als am Anfang.
```

```aufgabe
id: ir-bestand-zufluss
titel: Wasserstand aus der Zuflussrate
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  In einen Tank, der zu Beginn $100$ Liter enthält, fließt Wasser mit der Rate $r(t) = 40 - 2t$ (Liter pro Minute,
  $0 \le t \le 20$).

  a) Wie viel Wasser ist nach $20$ Minuten im Tank?

  b) Nach wie vielen Minuten sind $400$ Liter im Tank?
teile:
  - typ: zahl
    label: 'a) Inhalt nach 20 min'
    einheit: L
    loesung: "100 + 40*20 - 20^2"
    fehler:
      - wert: "40*20 - 20^2"
        meldung: Das ist nur die zugeflossene Menge. Der Anfangsbestand von $100$ Litern war schon im Tank und kommt dazu.
      - wert: "100 + 40*20 - 2*20^2"
        meldung: 'Die Stammfunktion von $2t$ ist $t^2$, nicht $2t^2$.'
  - typ: zahl
    label: 'b) Zeitpunkt'
    einheit: min
    loesung: "10"
    fehler:
      - wert: "30"
        meldung: '$t = 30$ löst die Gleichung, liegt aber außerhalb des Modellbereichs $0 \le t \le 20$.'
hinweise:
  - 'Inhalt zur Zeit $t$: $W(t) = 100 + \int_0^t (40 - 2s)\,\dd s$.'
  - 'Für b) ist $W(t) = 400$ eine quadratische Gleichung. Welche Lösung liegt in $[0, 20]$?'
loesung: |
  **Ansatz:** Bestand $=$ Anfangsbestand $+$ Integral der Rate. $W(t) = 100 + \big[40s - s^2\big]_0^t = 100 + 40t - t^2$.
  ---
  a) $W(20) = 100 + 800 - 400 = 500$ L.
  ---
  b) $100 + 40t - t^2 = 400$ ist gleichwertig mit $t^2 - 40t + 300 = 0$, zerlegt $(t - 10)(t - 30) = 0$.
  ---
  $t = 30$ liegt außerhalb des Modellbereichs $[0, 20]$. **Antwort:** Nach $10$ Minuten sind $400$ Liter im Tank. Probe: $100 + 400 - 100 = 400$.
```

```aufgabe
id: ir-weg-verschiebung
titel: Hin und zurück
niveau: 2
lernziel: 6
kompetenz: verstehen
angabe: |
  Ein Roboter fährt auf einer Schiene. Seine Geschwindigkeit ist $v(t) = t^2 - 4t + 3$ in m/s für $0 \le t \le 4$ s.
  Negative Werte bedeuten, dass er rückwärts fährt.

  a) Wie weit ist er nach $4$ s vom Startpunkt entfernt (Verschiebung)?

  b) Welchen Weg hat er insgesamt zurückgelegt?
teile:
  - typ: zahl
    label: 'a) Verschiebung'
    einheit: m
    loesung: "64/3 - 32 + 12"
    anzeige: '\tfrac43 \approx 1{,}333'
    fehler:
      - wert: "4"
        meldung: Das ist der Weg. Bei der Verschiebung heben sich Vorwärts- und Rückwärtsfahrt teilweise auf.
  - typ: zahl
    label: 'b) Weg'
    einheit: m
    loesung: "abs(1/3 - 2 + 3) + abs((9 - 18 + 9) - (1/3 - 2 + 3)) + abs((64/3 - 32 + 12) - (9 - 18 + 9))"
    anzeige: '4'
    fehler:
      - wert: "4/3"
        meldung: Das ist die Verschiebung. Für den Weg musst du an den Nullstellen von $v$ aufteilen und die Beträge addieren.
hinweise:
  - 'Die Nullstellen von $v$ sind $t = 1$ und $t = 3$. Dazwischen fährt der Roboter rückwärts.'
  - 'Stammfunktion: $s(t) = \frac{t^3}{3} - 2t^2 + 3t$. Berechne die Teilintegrale auf $[0, 1]$, $[1, 3]$ und $[3, 4]$.'
loesung: |
  **Ansatz:** Das Integral von $v$ ist die Verschiebung. Für den Weg teilen wir an den Nullstellen von $v$ auf und addieren die Beträge. Stammfunktion: $s(t) = \frac{t^3}{3} - 2t^2 + 3t$.
  ---
  a) $s(4) - s(0) = \frac{64}{3} - 32 + 12 = \frac43 \approx 1{,}333$ m.
  ---
  b) $v(t) = (t - 1)(t - 3)$ hat die Nullstellen $1$ und $3$. Teilintegrale: $s(1) - s(0) = \frac43$, $s(3) - s(1) = 0 - \frac43 = -\frac43$ und $s(4) - s(3) = \frac43 - 0 = \frac43$.
  ---
  Weg: $\frac43 + \frac43 + \frac43 = 4$ m. **Deutung:** Der Roboter fährt $\frac43$ m vor, $\frac43$ m zurück und wieder $\frac43$ m vor.
gefuehrt:
  - text: Bei welchen Zeiten wechselt die Fahrtrichtung? Gib die kleinere Zeit an.
    teil: { typ: zahl, loesung: "1", fehler: [ { wert: "3", meldung: 'Das ist die zweite Nullstelle. Gefragt ist die kleinere.' } ] }
    erklaerung: '$t^2 - 4t + 3 = (t - 1)(t - 3)$, also wechselt die Richtung bei $t = 1$ und $t = 3$.'
  - text: 'Berechne die Verschiebung von $0$ bis $1$ s.'
    teil: { typ: zahl, loesung: "4/3" }
    erklaerung: '$s(1) - s(0) = \frac13 - 2 + 3 = \frac43$ m.'
  - text: 'Berechne die Verschiebung von $1$ bis $3$ s. Welches Vorzeichen erwartest du?'
    teil: { typ: zahl, loesung: "-4/3", fehler: [ { wert: "4/3", meldung: 'Zwischen $1$ und $3$ ist $v < 0$, der Roboter fährt rückwärts. Die Verschiebung ist negativ.' } ] }
    erklaerung: '$s(3) - s(1) = 0 - \frac43 = -\frac43$ m.'
  - text: 'Berechne die Verschiebung von $3$ bis $4$ s und addiere die Beträge aller drei Stücke.'
    teil: { typ: zahl, loesung: "4" }
    erklaerung: '$s(4) - s(3) = \frac43$. Weg: $\frac43 + \frac43 + \frac43 = 4$ m.'
```

```aufgabe
id: ir-bestand-maximum
titel: Wann ist das Becken am vollsten?
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Ein Schwimmbecken enthält am Anfang $20$ m³ Wasser. Die Änderungsrate des Inhalts ist $r(t) = 12 - 3t$ in m³ pro
  Stunde, für $0 \le t \le 8$.

  a) Zu welchem Zeitpunkt ist am meisten Wasser im Becken?

  b) Wie viel Wasser ist dann im Becken?

  c) Wie viel Wasser ist nach $8$ Stunden im Becken?
teile:
  - typ: zahl
    label: 'a) Zeitpunkt'
    einheit: h
    loesung: "4"
    fehler:
      - wert: "8"
        meldung: Nach $t = 4$ ist die Rate negativ. Ab dann fließt Wasser ab, der Inhalt wird kleiner.
  - typ: zahl
    label: 'b) größter Inhalt'
    einheit: m³
    loesung: "20 + 12*4 - 1.5*16"
    fehler:
      - wert: "12*4 - 1.5*16"
        meldung: Das ist nur der Zuwachs. Die $20$ m³ vom Anfang kommen noch dazu.
  - typ: zahl
    label: 'c) Inhalt nach 8 h'
    einheit: m³
    loesung: "20 + 12*8 - 1.5*64"
    fehler:
      - wert: "0"
        meldung: Das ist nur die Bilanz der Änderung. Zu- und Abfluss heben sich auf, aber der Anfangsbestand von $20$ m³ bleibt.
hinweise:
  - Der Inhalt wächst, solange die Rate positiv ist. Wann wird $r(t) = 0$?
  - 'Inhalt: $V(t) = 20 + \int_0^t (12 - 3s)\,\dd s = 20 + 12t - 1{,}5\,t^2$.'
loesung: |
  **Ansatz:** Der Bestand ist $V(t) = 20 + \int_0^t r(s)\,\dd s$. Sein Maximum liegt dort, wo $V' = r$ von plus nach minus wechselt.
  ---
  a) $12 - 3t = 0$ für $t = 4$. Vorher ist $r > 0$, danach $r < 0$. Am meisten Wasser ist bei $t = 4$ h im Becken.
  ---
  b) $V(t) = 20 + 12t - 1{,}5\,t^2$, also $V(4) = 20 + 48 - 24 = 44$ m³.
  ---
  c) $V(8) = 20 + 96 - 96 = 20$ m³. Zwischen $4$ und $8$ h fließen genau die $24$ m³ wieder ab, die vorher zugeflossen sind.
```

```aufgabe
id: ir-bremsweg-linear
titel: Bremsen mit gleichmäßiger Verzögerung
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Ein Motorrad fährt mit $72$ km/h und bremst gleichmäßig. Seine Geschwindigkeit in m/s ist $v(t) = c - 4t$, $t$ in
  Sekunden nach Bremsbeginn.

  a) Bestimme $c$.

  b) Berechne den Bremsweg.
teile:
  - typ: zahl
    label: 'a) $c$'
    einheit: m/s
    loesung: "72/3.6"
    fehler:
      - wert: "72"
        meldung: Das ist die Geschwindigkeit in km/h. Die Formel rechnet in m/s. Teile durch $3{,}6$.
  - typ: zahl
    label: 'b) Bremsweg'
    einheit: m
    loesung: "20*5 - 2*25"
    fehler:
      - wert: "100"
        meldung: Das wäre der Weg bei konstant $20$ m/s. Die Geschwindigkeit nimmt aber ab. Die Fläche unter dem Graphen ist ein Dreieck.
hinweise:
  - '$72$ km/h $= 72 : 3{,}6$ m/s. Zu Beginn gilt $v(0) = c$.'
  - 'Stillstand bei $v(t) = 0$. Integriere $v$ von $0$ bis zu diesem Zeitpunkt.'
loesung: |
  **Ansatz:** Zuerst Einheiten angleichen, dann Bremsdauer aus $v = 0$, dann den Weg als Integral.
  ---
  a) $72 : 3{,}6 = 20$ m/s. Wegen $v(0) = c$ ist $c = 20$.
  ---
  b) Stillstand: $20 - 4t = 0$ für $t = 5$ s. Bremsweg: $\int_0^5 (20 - 4t)\,\dd t = \big[20t - 2t^2\big]_0^5 = 100 - 50 = 50$ m.
  ---
  **Kontrolle:** Der Graph ist eine Gerade. Die Fläche ist ein Dreieck mit $\frac12\cdot 5\cdot 20 = 50$ m.
```

```aufgabe
id: ir-bremsweg-umkehr
titel: Bremsverzögerung aus dem Bremsweg
niveau: 3
lernziel: 6
kompetenz: modellieren
angabe: |
  Ein Zug fährt mit $144$ km/h. Beim Bremsen ist seine Geschwindigkeit in m/s $v(t) = 40 - k\,t^2$ mit einer Konstanten
  $k > 0$. Gemessen wird ein Bremsweg von $800$ m.

  a) Zeige: Ist $T$ die Bremsdauer, dann ist der Bremsweg $s = \frac23\cdot 40\cdot T$.

  b) Bestimme die Bremsdauer $T$.

  c) Bestimme $k$ (auf vier Dezimalstellen).
teile:
  - typ: text
    label: 'a) Herleitung'
    muster: |
      Stillstand bei $40 - kT^2 = 0$, also $k = \frac{40}{T^2}$. Bremsweg:
      $s = \int_0^T (40 - kt^2)\,\dd t = 40T - \frac{kT^3}{3} = 40T - \frac{40}{T^2}\cdot\frac{T^3}{3} = 40T - \frac{40T}{3} = \frac23\cdot 40\cdot T$.
  - typ: zahl
    label: 'b) $T$'
    einheit: s
    loesung: "800/(2/3*40)"
  - typ: zahl
    label: 'c) $k$'
    loesung: "40/30^2"
    anzeige: '\tfrac{2}{45} \approx 0{,}0444'
hinweise:
  - 'Aus $v(T) = 0$ folgt $k = \frac{40}{T^2}$. Setze das in $\int_0^T v(t)\,\dd t$ ein.'
  - 'Löse $\frac23\cdot 40\cdot T = 800$ nach $T$ auf. Danach ist $k = \frac{40}{T^2}$.'
loesung: |
  **Ansatz:** Es gibt zwei Unbekannte, $T$ und $k$. Die Bedingung „Stillstand bei $T$“ verbindet sie. Damit lässt sich der Bremsweg nur durch $T$ ausdrücken.
  ---
  a) $v(T) = 0$ heißt $40 - kT^2 = 0$, also $k = \frac{40}{T^2}$. Dann $s = \left[40t - \frac{k t^3}{3}\right]_0^T = 40T - \frac{40}{T^2}\cdot\frac{T^3}{3} = 40T - \frac{40T}{3} = \frac23\cdot 40\cdot T$.
  ---
  b) $\frac{80}{3}T = 800$ ergibt $T = 30$ s.
  ---
  c) $k = \frac{40}{30^2} = \frac{40}{900} = \frac{2}{45} \approx 0{,}0444$. Die Einheit von $k$ ist m/s³, damit $k\,t^2$ in m/s herauskommt.
  ---
  **Probe:** $\int_0^{30}\left(40 - \frac{2}{45}t^2\right)\dd t = 1200 - \frac{2}{45}\cdot\frac{27000}{3} = 1200 - 400 = 800$ m. **Plausibilität:** Der Faktor $\frac23$ liegt zwischen $\frac12$ (gleichmäßiges Bremsen) und $1$ (gar nicht bremsen).
```

```aufgabe
id: ir-bestand-drohne
titel: Steigflug einer Drohne
niveau: 3
lernziel: 6
kompetenz: modellieren
angabe: |
  Eine Drohne startet vom Boden. Ihre senkrechte Geschwindigkeit ist $v(t) = 3t - 0{,}3\,t^2$ in m/s, $t$ in Sekunden,
  für $0 \le t \le 15$. Positive Werte bedeuten Steigen, negative Sinken.

  a) Wann erreicht die Drohne ihre größte Höhe, und wie hoch ist sie dann?

  b) Wo ist die Drohne nach $15$ s?

  c) Welchen Weg hat sie in den $15$ s insgesamt zurückgelegt?
teile:
  - typ: zahl
    label: 'a) Zeitpunkt'
    einheit: s
    loesung: "10"
    fehler:
      - wert: "5"
        meldung: 'Bei $t = 5$ ist die Steiggeschwindigkeit am größten. Die Höhe wächst aber weiter, solange $v > 0$ ist.'
  - typ: zahl
    label: 'a) größte Höhe'
    einheit: m
    loesung: "1.5*100 - 0.1*1000"
  - typ: zahl
    label: 'b) Höhe nach 15 s'
    einheit: m
    loesung: "1.5*225 - 0.1*3375"
  - typ: zahl
    label: 'c) Weg'
    einheit: m
    loesung: "2*(1.5*100 - 0.1*1000)"
hinweise:
  - 'Die Höhe ist $h(t) = \int_0^t v(s)\,\dd s = 1{,}5\,t^2 - 0{,}1\,t^3$. Sie ist am größten, wo $v$ von plus nach minus wechselt.'
  - 'Für den Weg teilst du bei der Nullstelle von $v$ auf: Steigstrecke plus Sinkstrecke.'
loesung: |
  **Ansatz:** Die Höhe ist ein Bestand mit der Rate $v$ und dem Anfangsbestand $0$. Also $h(t) = \int_0^t (3s - 0{,}3\,s^2)\,\dd s = 1{,}5\,t^2 - 0{,}1\,t^3$.
  ---
  a) $v(t) = 0{,}3\,t\,(10 - t) = 0$ für $t = 0$ und $t = 10$. Zwischen $0$ und $10$ ist $v > 0$, danach $v < 0$. Größte Höhe bei $t = 10$ s: $h(10) = 150 - 100 = 50$ m.
  ---
  b) $h(15) = 1{,}5\cdot 225 - 0{,}1\cdot 3375 = 337{,}5 - 337{,}5 = 0$ m. Die Drohne ist wieder am Boden.
  ---
  c) Sie steigt $50$ m und sinkt $50$ m. Der Weg ist $100$ m, die Verschiebung dagegen $0$ m.
  ---
  **Plausibilität:** Die größte Steiggeschwindigkeit ist $v(5) = 15 - 7{,}5 = 7{,}5$ m/s. In $10$ s könnte die Drohne höchstens $75$ m steigen. Die $50$ m liegen darunter.
```

## Mittelwert, Rotationsvolumen und Arbeit

```aufgabe
id: ir-mittel-vorwissen
titel: Das arithmetische Mittel
art: check
niveau: 1
angabe: |
  An vier Tagen wurden mittags $12$ °C, $15$ °C, $18$ °C und $19$ °C gemessen. Wie groß ist das arithmetische Mittel?
  Zum Nachlesen: [17.4 Mittelwert, Median und Modus](/lernen/mathe3/statistik/mittelwert-median-und-modus).
teile:
  - typ: zahl
    einheit: °C
    loesung: "(12 + 15 + 18 + 19)/4"
    fehler:
      - wert: "(12 + 19)/2"
        meldung: Das ist der Mittelwert aus kleinstem und größtem Wert. Das arithmetische Mittel berücksichtigt alle vier Werte.
      - wert: "12 + 15 + 18 + 19"
        meldung: Das ist die Summe. Für das Mittel teilst du noch durch die Anzahl der Werte.
loesung: |
  Arithmetisches Mittel: alle Werte addieren und durch ihre Anzahl teilen.
  ---
  $\frac{12 + 15 + 18 + 19}{4} = \frac{64}{4} = 16$ °C. Gleich ersetzt ein Integral die Summe.
```

In dieser Lektion kommen drei weitere Anwendungen. Alle drei folgen demselben Muster wie bisher:
**Zerlegen in kleine Stücke, jedes Stück näherungsweise ausrechnen, aufsummieren, verfeinern.** Am Ende
steht jedes Mal ein Integral.

### Mittelwert einer Funktion

Welche Durchschnittstemperatur hatte ein Tag, wenn man den ganzen Temperaturverlauf kennt? Bei endlich
vielen Messwerten bildest du das arithmetische Mittel. Bei einem lückenlosen Verlauf gibt es unendlich
viele Werte. Dann ersetzt das Integral die Summe.

:::definition[Mittelwert einer Funktion]
Der **Mittelwert** (auch Durchschnittswert) einer stetigen Funktion $f$ auf $[a, b]$ ist
$$\bar f = \frac{1}{b - a}\int_a^b f(x)\,\dd x.$$
Dabei ist $b - a$ die Länge des Intervalls. Das Zeichen $\bar f$ liest man „f quer“.
:::

**Warum diese Formel?** Zerlege $[a, b]$ in $n$ gleich breite Streifen und mittle die Funktionswerte
$f(\xi_1), \dots, f(\xi_n)$ an je einer Stelle pro Streifen. Das arithmetische Mittel ist
$$\frac{f(\xi_1) + \dots + f(\xi_n)}{n} = \frac{1}{b - a}\sum_{k=1}^{n} f(\xi_k)\,\frac{b - a}{n}.$$
Rechts steht $\frac{1}{b-a}$ mal eine Riemann-Summe, denn $\frac{b - a}{n} = \Delta x$ ist die Streifenbreite. Für
immer mehr Streifen wird daraus $\frac{1}{b - a}\int_a^b f(x)\,\dd x$.

**Geometrisch:** Das Rechteck mit Breite $b - a$ und Höhe $\bar f$ hat dieselbe Fläche wie die Fläche unter
dem Graphen. Was über die Höhe $\bar f$ hinausragt, füllt genau die Lücken darunter.

```plot
x: [-0.3, 3.3]
y: [-0.5, 9.5]
achsen: { x: "x", y: "y" }
graphen:
  - { f: "x^2", label: "f(x) = x²", farbe: 0 }
  - { f: "3", label: "Mittelwert 3", farbe: 1, gestrichelt: true, von: 0, bis: 3 }
flaechen:
  - { f: "3", von: 0, bis: 3, farbe: 1 }
beschriftung: Der Mittelwert von x² auf [0, 3] ist 9 geteilt durch 3, also 3. Das Rechteck mit Höhe 3 und Breite 3 hat dieselbe Fläche 9 wie die Fläche unter der Parabel.
```

:::beispiel[Mittelwert der Normalparabel]
Gesucht ist der Mittelwert von $f(x) = x^2$ auf $[0, 3]$.

1. **Integral:** $\int_0^3 x^2\,\dd x = \left[\frac{x^3}{3}\right]_0^3 = 9$.
2. **Teilen durch die Intervalllänge:** $\bar f = \frac{9}{3 - 0} = 3$.
3. **Deutung:** Die Werte von $x^2$ reichen auf $[0, 3]$ von $0$ bis $9$. „Im Durchschnitt“ ist die Funktion $3$.
:::

:::beispiel[Durchschnittsgeschwindigkeit beim Bremsen]
In [10.8 Bestand aus Änderungsrate](/lernen/mathe3/integralrechnung/bestand-aus-aenderungsrate-weg-und-bremsweg) bremste ein Auto in $5$ s aus $30$ m/s bis zum Stillstand und legte dabei $100$ m zurück.
Der Mittelwert der Geschwindigkeit ist
$$\bar v = \frac{1}{5 - 0}\int_0^5 v(t)\,\dd t = \frac{100\text{ m}}{5\text{ s}} = 20\ \tfrac{\text{m}}{\text{s}} = 72\ \tfrac{\text{km}}{\text{h}}.$$
Das ist genau „Gesamtweg durch Gesamtzeit“. Der Mittelwert einer Funktion verallgemeinert also die
bekannte Durchschnittsgeschwindigkeit.
:::

:::achtung[Mittelwert ist nicht der Mittelwert der Randwerte]
Eine typische Fehlrechnung für den Mittelwert von $x^2$ auf $[0, 3]$:
$$\bar f \overset{?}{=} \frac{f(0) + f(3)}{2} = \frac{0 + 9}{2} = 4{,}5.$$
Richtig ist $3$. Die Randwerte zeigen nur zwei Zeitpunkte. Die Parabel liegt aber die meiste Zeit weit
unter $4{,}5$. Bei linearen Funktionen stimmen beide Rechnungen überein. Bei gekrümmten Graphen wie
dieser Parabel darfst du dich darauf nicht verlassen.
:::

### Volumen von Rotationskörpern

Dreht man den Graphen einer Funktion $f \ge 0$ über $[a, b]$ um die $x$-Achse, entsteht ein
**Rotationskörper**. Das ist ein Körper, der um die $x$-Achse herum rund ist, wie ein gedrechseltes
Stück Holz. Aus einer Strecke durch den Ursprung wird ein Kegel. Aus einem Halbkreis wird eine Kugel. Aus
dem Graphen von $\sqrt x$ wird ein **Paraboloid**, die Form einer Satellitenschüssel.

Das Volumen findest du wieder mit der Zerlegungsidee. Schneide den Körper senkrecht zur $x$-Achse in dünne
Scheiben der Dicke $\Delta x$. Eine Scheibe an der Stelle $x$ ist fast ein Zylinder mit Radius $f(x)$. Sie
hat also das Volumen „Kreisfläche mal Dicke“, $\pi f(x)^2\,\Delta x$. Summieren und Verfeinern ergibt:

:::satz[Volumen eines Rotationskörpers]
Rotiert der Graph der stetigen Funktion $f$ über $[a, b]$ um die $x$-Achse, so hat der entstehende Körper das Volumen
$$V = \pi\int_a^b f(x)^2\,\dd x.$$
Dabei ist $f(x)$ der Radius des Körpers an der Stelle $x$.
:::

```plot
x: [-0.5, 4.5]
y: [-2.6, 2.6]
gleich: true
achsen: { x: "x", y: "y" }
graphen:
  - { f: "sqrt(x)", label: "y = √x", farbe: 0 }
  - { f: "-sqrt(x)", farbe: 0, gestrichelt: true }
flaechen:
  - { f: "sqrt(x)", g: "-sqrt(x)", von: 0, bis: 4, farbe: 0 }
strecken:
  - { von: [2.5, "-sqrt(2.5)"], nach: [2.5, "sqrt(2.5)"], farbe: 1 }
  - { von: [2.7, "-sqrt(2.7)"], nach: [2.7, "sqrt(2.7)"], farbe: 1 }
beschriftung: Längsschnitt durch das Paraboloid, das bei Rotation von √x über [0, 4] um die x-Achse entsteht. Die orange markierte Scheibe hat ungefähr das Volumen π·f(x)²·Δx.
```

:::beispiel[Paraboloid]
Der Graph von $f(x) = \sqrt x$ über $[0, 4]$ rotiert um die $x$-Achse.

1. **Quadrat des Radius:** $f(x)^2 = \left(\sqrt x\right)^2 = x$. Die Wurzel verschwindet.
2. **Integral:** $V = \pi\int_0^4 x\,\dd x = \pi\left[\frac{x^2}{2}\right]_0^4 = 8\pi \approx 25{,}13$.
3. **Vergleich:** Der umschließende Zylinder hat Radius $f(4) = 2$ und Höhe $4$, also das Volumen $\pi\cdot 2^2\cdot 4 = 16\pi$. Das Paraboloid füllt genau die Hälfte davon.
:::

:::beispiel[Kegel und Kugel hergeleitet]
**Kegel** mit Radius $r$ und Höhe $h$: Er entsteht durch Rotation der Strecke $f(x) = \frac{r}{h}\,x$ über $[0, h]$.
$$V = \pi\int_0^h \frac{r^2}{h^2}\,x^2\,\dd x = \pi\,\frac{r^2}{h^2}\cdot\frac{h^3}{3} = \frac13\,\pi r^2 h.$$

**Kugel** mit Radius $r$: Sie entsteht durch Rotation des Halbkreises $f(x) = \sqrt{r^2 - x^2}$ über $[-r, r]$.
Wegen $f(x)^2 = r^2 - x^2$ verschwindet die Wurzel:
$$V = \pi\int_{-r}^{r}\left(r^2 - x^2\right)\dd x = \pi\left[r^2x - \frac{x^3}{3}\right]_{-r}^{r} = \pi\left(\frac{2r^3}{3} + \frac{2r^3}{3}\right) = \frac43\,\pi r^3.$$
Das sind die bekannten Formeln aus der Formelsammlung, jetzt mit Begründung.
:::

:::achtung[Das Quadrat vergessen]
Eine typische Fehlrechnung für das Paraboloid:
$$V \overset{?}{=} \pi\int_0^4 \sqrt x\,\dd x = \pi\cdot\frac23\cdot 8 = \frac{16\pi}{3} \approx 16{,}76.$$
Im Integral steht $f(x)^2$, nicht $f(x)$. Die Einheitenkontrolle deckt den Fehler auf. Misst man $f$ und
$x$ in cm, dann hat $f(x)\,\dd x$ die Einheit cm², also eine Fläche. Erst $f(x)^2\,\dd x$ hat die Einheit cm³.
:::

### Arbeit

Wirkt eine konstante Kraft $F$ längs eines Weges $s$, verrichtet sie die **Arbeit** $W = F\cdot s$. Ein
Zahlenbeispiel: $50$ N über $3$ m ergeben $150$ J. Hängt die Kraft vom Ort ab, zerlegst du den Weg wieder in
kleine Stücke. Auf jedem ist die Kraft fast konstant. Summieren und Verfeinern ergibt
$$W = \int_{s_0}^{s_1} F(s)\,\dd s.$$
Dabei ist $F(s)$ die Kraft am Ort $s$ in Newton, und $s_0$ und $s_1$ sind Anfangs- und Endort in Metern. Die
Einheit ist N mal m, also Joule.

:::beispiel[Eine Feder spannen]
Eine Feder gehorcht dem **Hookeschen Gesetz** $F(s) = k\,s$. Dabei ist $s$ die Dehnung aus der Ruhelage und $k$
die **Federkonstante**, ein Maß für die Härte der Feder. Um sie aus der Ruhelage um $s_1$ zu dehnen, braucht
man die Arbeit
$$W = \int_0^{s_1} k\,s\,\dd s = \left[\frac{k s^2}{2}\right]_0^{s_1} = \frac12\,k\,s_1^2.$$
Ein Zahlenbeispiel: Für $k = 500$ N/m und $s_1 = 0{,}2$ m ist $W = \frac12\cdot 500\cdot 0{,}04 = 10$ J. Die
Arbeit wächst quadratisch. Doppelte Dehnung kostet vierfache Arbeit, weil die Kraft unterwegs immer größer wird.
:::

:::merke[Rezept: Anwendungsintegral aufstellen]
1. Die Größe in kleine Stücke zerlegen: Zeitstücke, Streifen, Scheiben oder Wegstücke.
2. Für ein Stück die Näherung hinschreiben: Rate mal Zeit, $\pi f(x)^2\,\Delta x$, Kraft mal Wegstück.
3. Daraus das Integral bilden, mit den richtigen Grenzen.
4. Die Einheit des Ergebnisses als Kontrolle bestimmen.
:::

```reflexion
frage: Beim Mittelwert, beim Volumen und bei der Arbeit steht jedes Mal ein Integral. Welcher gemeinsame Gedanke steckt dahinter?
antwort: |
  In allen drei Fällen wäre die Rechnung einfach, wenn eine Größe konstant wäre. Bei konstantem $f$ ist der Mittelwert
  $f$ selbst. Bei konstantem Radius ist der Körper ein Zylinder. Bei konstanter Kraft ist die Arbeit Kraft mal Weg.
  Weil sich die Größe ändert, zerlegt man in so kleine Stücke, dass sie auf jedem Stück fast konstant ist. Dann summiert
  man die einfachen Teilergebnisse auf. Der Grenzwert dieser Summen ist das Integral.
```

```aufgabe
id: ir-mittelwert-einfach
titel: Mittelwert einer Parabel
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Berechne den Mittelwert von $f(x) = 3x^2$ auf dem Intervall $[0, 2]$.
teile:
  - typ: zahl
    label: '$\bar f$'
    loesung: "(2^3)/2"
    fehler:
      - wert: "6"
        meldung: 'Das ist der Mittelwert aus $f(0) = 0$ und $f(2) = 12$. Für eine Parabel stimmt das nicht. Verwende das Integral.'
      - wert: "8"
        meldung: Das ist das Integral. Du musst noch durch die Länge des Intervalls teilen.
hinweise:
  - '$\bar f = \frac{1}{2 - 0}\int_0^2 3x^2\,\dd x$.'
loesung: |
  **Ansatz:** Mittelwert $=$ Integral geteilt durch die Intervalllänge. $\int_0^2 3x^2\,\dd x = \big[x^3\big]_0^2 = 8$.
  ---
  $\bar f = \frac{8}{2} = 4$. **Plausibilität:** Die Werte reichen von $0$ bis $12$. Weil die Parabel lange flach bleibt, liegt der Mittelwert unter der Mitte $6$.
```

```aufgabe
id: ir-rotation-kegel
titel: Kegel als Rotationskörper
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Die Strecke $f(x) = \frac{x}{2}$ für $0 \le x \le 6$ rotiert um die $x$-Achse. Berechne das Volumen des entstehenden
  Kegels mit dem Integral. Kontrolliere mit der Formel $V = \frac13\pi r^2 h$.
teile:
  - typ: zahl
    label: '$V$'
    loesung: "pi*6^3/12"
    anzeige: '18\pi \approx 56{,}55'
    fehler:
      - wert: "9*pi"
        meldung: Im Integral steht $f(x)^2$, nicht $f(x)$. Du hast nicht quadriert.
      - wert: "18"
        meldung: Das Integral stimmt, aber der Faktor $\pi$ vor dem Integral fehlt.
hinweise:
  - '$V = \pi\int_0^6 \left(\frac x2\right)^2\dd x = \pi\int_0^6 \frac{x^2}{4}\,\dd x$.'
loesung: |
  **Ansatz:** Volumen eines Rotationskörpers, $V = \pi\int_0^6 f(x)^2\,\dd x$ mit $f(x)^2 = \frac{x^2}{4}$.
  ---
  $V = \frac{\pi}{4}\left[\frac{x^3}{3}\right]_0^6 = \frac{\pi}{4}\cdot 72 = 18\pi \approx 56{,}55$.
  ---
  **Kontrolle:** Radius $r = f(6) = 3$, Höhe $h = 6$. Also $\frac13\pi\cdot 9\cdot 6 = 18\pi$. Beide Wege stimmen überein.
```

```aufgabe
id: ir-arbeit-feder
titel: Arbeit beim Dehnen einer Feder
niveau: 1
lernziel: 7
kompetenz: anwenden
angabe: |
  Eine Feder hat die Federkonstante $k = 200$ N/m. Die Kraft ist $F(s) = 200\,s$ (in N, $s$ in m).
  Wie viel Arbeit ist nötig, um sie von $s = 0{,}1$ m auf $s = 0{,}3$ m zu dehnen?
teile:
  - typ: zahl
    label: '$W$'
    einheit: J
    loesung: "100*(0.3^2 - 0.1^2)"
    fehler:
      - wert: "200*0.3*0.2"
        meldung: Du hast die Endkraft mal den Weg gerechnet. Die Kraft ist aber nicht konstant, sie wächst von $20$ N auf $60$ N.
      - wert: "100*0.2^2"
        meldung: 'Die Grenzen werden einzeln eingesetzt: $100\cdot 0{,}3^2 - 100\cdot 0{,}1^2$. Die Differenz der Dehnungen zu quadrieren ist etwas anderes.'
hinweise:
  - '$W = \int_{0{,}1}^{0{,}3} 200\,s\,\dd s$.'
loesung: |
  **Ansatz:** Die Kraft hängt vom Ort ab, also $W = \int_{0{,}1}^{0{,}3} 200\,s\,\dd s$.
  ---
  $W = \big[100\,s^2\big]_{0{,}1}^{0{,}3} = 100\cdot(0{,}09 - 0{,}01) = 8$ J.
  ---
  **Vergleich:** Von $0$ auf $0{,}1$ m sind es nur $100\cdot 0{,}01 = 1$ J. Je weiter die Feder schon gedehnt ist, desto mehr kostet jeder weitere Zentimeter.
```

```aufgabe
id: ir-mittelwert-temperatur
titel: Mittlere Tagestemperatur
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Der Temperaturverlauf eines Sommertages wird von Mitternacht ($t = 0$) bis Mitternacht ($t = 24$) modelliert durch
  $$T(t) = -0{,}1\,t^2 + 2{,}4\,t + 8 \quad (T \text{ in °C}, t \text{ in Stunden}).$$

  a) Berechne die mittlere Tagestemperatur.

  b) Berechne den Mittelwert aus Tiefst- und Höchsttemperatur und erkläre, warum er sich von a) unterscheidet.
teile:
  - typ: zahl
    label: 'a) $\bar T$'
    einheit: °C
    loesung: "(-0.1*24^3/3 + 1.2*24^2 + 8*24)/24"
    anzeige: '17{,}6'
    fehler:
      - wert: "422.4"
        meldung: Das ist das Integral. Für den Mittelwert teilst du noch durch die Länge des Zeitraums, also $24$ Stunden.
  - typ: zahl
    label: 'b) $\frac{T_{\min} + T_{\max}}{2}$'
    einheit: °C
    loesung: "(8 + (-0.1*144 + 2.4*12 + 8))/2"
    anzeige: '15{,}2'
    fehler:
      - wert: "17.6"
        meldung: Das ist der Integralmittelwert aus a). Hier ist nur der Mittelwert aus kleinstem und größtem Wert gefragt.
  - typ: text
    label: 'b) Erklärung'
    muster: |
      Der Mittelwert aus Minimum und Maximum berücksichtigt nur zwei Zeitpunkte. Die Parabel ist „bauchig“: Sie liegt
      die meiste Zeit deutlich über dem Tiefstwert $8$ °C, der nur um Mitternacht erreicht wird. Der Integralmittelwert
      gewichtet jeden Zeitpunkt gleich und ist deshalb größer.
hinweise:
  - '$\bar T = \frac{1}{24}\int_0^{24} T(t)\,\dd t$.'
  - "Das Maximum liegt am Scheitel der Parabel, also dort, wo $T'(t) = -0{,}2t + 2{,}4 = 0$ ist."
loesung: |
  **Ansatz:** Mittelwert einer Funktion über $[0, 24]$. Stammfunktion: $-\frac{0{,}1}{3}t^3 + 1{,}2\,t^2 + 8t$.
  ---
  $\int_0^{24} T(t)\,\dd t = -460{,}8 + 691{,}2 + 192 = 422{,}4$. a) $\bar T = \frac{422{,}4}{24} = 17{,}6$ °C.
  ---
  b) Tiefstwert $T(0) = T(24) = 8$ °C. Höchstwert am Scheitel $t = 12$: $T(12) = -14{,}4 + 28{,}8 + 8 = 22{,}4$ °C. Mittel daraus: $\frac{8 + 22{,}4}{2} = 15{,}2$ °C.
  ---
  Der Unterschied von $2{,}4$ °C entsteht, weil die Temperatur lange nahe am Maximum bleibt und nur kurz nahe am Minimum ist. Das Integral erfasst den ganzen Verlauf.
```

```aufgabe
id: ir-rotation-trompete
titel: Ein trompetenförmiger Körper
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Der Graph von $f(x) = \frac1x$ über $[1, 3]$ rotiert um die $x$-Achse. Es entsteht ein Körper, der wie das Ende einer
  Trompete aussieht. Berechne sein Volumen exakt und auf drei Dezimalstellen.
teile:
  - typ: zahl
    label: '$V$'
    loesung: "pi*(1 - 1/3)"
    anzeige: '\tfrac{2\pi}{3} \approx 2{,}094'
    fehler:
      - wert: "pi*ln(3)"
        meldung: Das ist $\pi\int_1^3 \frac1x\,\dd x$. Im Volumen steht aber $f(x)^2 = \frac{1}{x^2}$.
      - wert: "pi*(1/3 - 1)"
        meldung: Ein Volumen ist positiv. Prüfe die Stammfunktion $-\frac1x$ und die Reihenfolge „oben minus unten“.
hinweise:
  - '$f(x)^2 = \frac{1}{x^2} = x^{-2}$. Eine Stammfunktion ist $-\frac1x$.'
  - 'Setze $3$ und $1$ in $-\frac1x$ ein: oben minus unten.'
loesung: |
  **Ansatz:** $V = \pi\int_1^3 f(x)^2\,\dd x = \pi\int_1^3 x^{-2}\,\dd x$.
  ---
  Stammfunktion von $x^{-2}$: $\frac{x^{-1}}{-1} = -\frac1x$. Also $V = \pi\left[-\frac1x\right]_1^3 = \pi\left(-\frac13 + 1\right) = \frac{2\pi}{3}$.
  ---
  $V = \frac{2\pi}{3} \approx 2{,}094$. **Plausibilität:** Der Körper passt in einen Zylinder mit Radius $f(1) = 1$ und Länge $2$, also mit Volumen $2\pi \approx 6{,}28$. Das Ergebnis ist kleiner.
gefuehrt:
  - text: 'Was steht im Volumenintegral statt $f(x)$? Schreibe $f(x)^2$ als Potenz von $x$. Welche Hochzahl hat sie?'
    teil: { typ: zahl, loesung: "-2", fehler: [ { wert: "-1", meldung: 'Das ist $f(x)$ selbst. Im Volumen steht das Quadrat $\left(\frac1x\right)^2$.' } ] }
    erklaerung: '$f(x)^2 = \frac{1}{x^2} = x^{-2}$.'
  - text: 'Bestimme eine Stammfunktion von $x^{-2}$.'
    teil: { typ: term, loesung: "-1/x", plusC: true, bereich: [0.5, 4], fehler: [ { wert: "ln(x)", meldung: 'Der Logarithmus gehört nur zu $x^{-1}$. Für $x^{-2}$ gilt die Potenzregel.' } ] }
    erklaerung: 'Die Hochzahl $-2$ wird zu $-1$, Teilen durch $-1$ ergibt $-x^{-1} = -\frac1x$.'
  - text: 'Berechne $\int_1^3 x^{-2}\,\dd x$.'
    teil: { typ: zahl, loesung: "2/3", fehler: [ { wert: "-2/3", meldung: 'Rechne oben minus unten: $-\frac13 - (-1)$.' } ] }
    erklaerung: '$\left[-\frac1x\right]_1^3 = -\frac13 + 1 = \frac23$.'
  - text: Multipliziere mit $\pi$. Das ist das Volumen.
    erklaerung: '$V = \frac{2\pi}{3} \approx 2{,}094$.'
```

```aufgabe
id: ir-arbeit-seil
titel: Ein Seil hochziehen
niveau: 2
lernziel: 7
kompetenz: modellieren
angabe: |
  Ein $20$ m langes Seil hängt senkrecht von einem Dach herab. Jeder Meter wiegt $2$ kg. Das Seil wird ganz nach oben
  gezogen. Rechne mit $g = 9{,}81$ m/s².

  Wenn schon $s$ Meter oben sind, hängen noch $20 - s$ Meter. Die nötige Kraft ist dann $F(s) = 2\cdot 9{,}81\cdot(20 - s)$ in N.
  Berechne die gesamte Arbeit.
teile:
  - typ: zahl
    label: '$W$'
    einheit: J
    loesung: "2*9.81*(20*20 - 20^2/2)"
    fehler:
      - wert: "2*20*9.81*20"
        meldung: Du hast so gerechnet, als müsste das ganze Seil die ganzen $20$ m hochgehoben werden. Die hängende Masse wird aber laufend kleiner.
hinweise:
  - '$W = \int_0^{20} 2\cdot 9{,}81\cdot(20 - s)\,\dd s$.'
  - 'Eine Stammfunktion von $20 - s$ ist $20s - \frac{s^2}{2}$.'
loesung: |
  **Ansatz:** Die Kraft hängt vom bereits hochgezogenen Stück $s$ ab. Also ist die Arbeit ein Integral über $s$ von $0$ bis $20$ m.
  ---
  $W = 19{,}62\int_0^{20}(20 - s)\,\dd s = 19{,}62\left[20s - \frac{s^2}{2}\right]_0^{20} = 19{,}62\cdot(400 - 200) = 19{,}62\cdot 200$.
  ---
  $W = 3924$ J. **Plausibilität:** Mit der vollen Kraft $392{,}4$ N auf $20$ m wären es $7848$ J. Die Kraft nimmt gleichmäßig auf $0$ ab, deshalb ist es genau die Hälfte.
```

```aufgabe
id: ir-mittelwert-fehler
titel: Der Mittelwert des Sinus
niveau: 2
lernziel: 7
kompetenz: begruenden
angabe: |
  Ein Mitschüler behauptet: „Der Mittelwert von $\sin x$ auf $[0, \pi]$ ist $\frac{\sin 0 + \sin\pi}{2} = 0$.“

  a) Warum kann das nicht stimmen?

  b) Berechne den richtigen Mittelwert exakt und auf drei Dezimalstellen.
teile:
  - typ: auswahl
    label: 'a) Begründung'
    optionen:
      - 'Auf $(0, \pi)$ ist $\sin x > 0$. Ein Mittelwert positiver Werte kann nicht $0$ sein.'
      - Der Sinus hat auf $[0, \pi]$ keine Nullstellen.
      - 'Man muss den Mittelwert im Gradmaß berechnen.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Der Sinus hat bei $0$ und bei $\pi$ Nullstellen. Genau deshalb sind die Randwerte $0$. Das Problem ist, dass nur die Randwerte verwendet wurden.'
      - wert: 2
        meldung: 'In der Analysis rechnet man im Bogenmaß. Der Fehler liegt woanders: Es wurden nur die Randwerte gemittelt.'
  - typ: zahl
    label: 'b) $\bar f$'
    loesung: "2/pi"
    anzeige: '\tfrac{2}{\pi} \approx 0{,}637'
    fehler:
      - wert: "2"
        meldung: Das ist das Integral. Teile noch durch die Intervalllänge $\pi$.
hinweise:
  - Welche Werte nimmt der Sinus zwischen $0$ und $\pi$ an?
  - '$\bar f = \frac{1}{\pi}\int_0^{\pi}\sin x\,\dd x$, und $\int_0^{\pi}\sin x\,\dd x = 2$.'
loesung: |
  **Ansatz:** Der Mittelwert einer Funktion braucht alle Werte, nicht nur die Randwerte.
  ---
  a) Zwischen $0$ und $\pi$ ist $\sin x$ positiv, bis hin zu $1$. Der Mittelwert muss also positiv sein. Die Randwerte $0$ sind nicht typisch für den Verlauf.
  ---
  b) $\bar f = \frac{1}{\pi}\big[-\cos x\big]_0^{\pi} = \frac{1}{\pi}\cdot 2 = \frac{2}{\pi} \approx 0{,}637$. **Plausibilität:** Der Wert liegt zwischen $0$ und dem Maximum $1$.
```

```aufgabe
id: ir-rotation-vase
titel: Füllhöhe einer Vase
niveau: 3
lernziel: 7
kompetenz: modellieren
angabe: |
  Der Innenraum einer Vase entsteht durch Rotation des Graphen von $f(x) = \sqrt{x + 1}$ um die $x$-Achse. Dabei ist $x$
  die Höhe über dem Boden in cm, und auch $f(x)$ ist in cm angegeben. Die Vase ist $20$ cm hoch.

  a) Zeige, dass bis zur Höhe $h$ das Volumen $V(h) = \pi\left(\frac{h^2}{2} + h\right)$ cm³ hineinpasst.

  b) Wie viel passt in die ganze Vase? Runde auf ganze cm³.

  c) Bis zu welcher Höhe stehen $0{,}5$ Liter Wasser? Runde auf zwei Dezimalstellen.
teile:
  - typ: text
    label: 'a) Herleitung'
    muster: |
      $V(h) = \pi\int_0^h f(x)^2\,\dd x = \pi\int_0^h (x + 1)\,\dd x = \pi\left[\frac{x^2}{2} + x\right]_0^h = \pi\left(\frac{h^2}{2} + h\right)$.
  - typ: zahl
    label: 'b) Volumen'
    einheit: cm³
    loesung: "pi*(200 + 20)"
    anzeige: '220\pi \approx 691'
  - typ: zahl
    label: 'c) Füllhöhe'
    einheit: cm
    loesung: "-1 + sqrt(1 + 1000/pi)"
    anzeige: '16{,}87'
hinweise:
  - '$f(x)^2 = x + 1$. Integriere von $0$ bis $h$.'
  - '$0{,}5$ Liter sind $500$ cm³. Löse $\pi\left(\frac{h^2}{2} + h\right) = 500$ als quadratische Gleichung in $h$.'
loesung: |
  **Ansatz:** Volumen eines Rotationskörpers mit variabler Obergrenze $h$. Die Wurzel verschwindet beim Quadrieren: $f(x)^2 = x + 1$.
  ---
  a) $V(h) = \pi\int_0^h (x + 1)\,\dd x = \pi\left[\frac{x^2}{2} + x\right]_0^h = \pi\left(\frac{h^2}{2} + h\right)$.
  ---
  b) $V(20) = \pi(200 + 20) = 220\pi \approx 691$ cm³, also rund $0{,}69$ Liter.
  ---
  c) $0{,}5$ L $= 500$ cm³. $\pi\left(\frac{h^2}{2} + h\right) = 500$ ergibt nach Multiplikation mit $\frac2\pi$: $h^2 + 2h - \frac{1000}{\pi} = 0$.
  ---
  Lösungsformel: $h = -1 \pm\sqrt{1 + \frac{1000}{\pi}}$. Nur die positive Lösung passt: $h \approx -1 + 17{,}869 = 16{,}87$ cm. **Plausibilität:** $500$ cm³ sind etwa $72\,\%$ von $691$ cm³. Die Vase wird nach oben breiter, deshalb stehen sie bei $84\,\%$ der Höhe.
```

## Wahrscheinlichkeiten als Flächen: Dichtefunktionen (Vertiefung)

```aufgabe
id: ir-dichte-vorwissen
titel: Was eine Wahrscheinlichkeit sein kann
art: check
niveau: 1
angabe: |
  Welche Aussagen über Wahrscheinlichkeiten sind richtig? Wähle alle richtigen aus. Zum Nachlesen:
  [Kapitel 16, Grundregeln](/lernen/mathe3/wahrscheinlichkeit/zufallsexperimente-ereignisse-und-die-grundregeln).
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - 'Jede Wahrscheinlichkeit liegt zwischen $0$ und $1$.'
      - 'Die Wahrscheinlichkeiten aller möglichen Ergebnisse ergeben zusammen $1$.'
      - 'Eine Wahrscheinlichkeit kann auch $1{,}5$ sein, wenn ein Ereignis sehr sicher ist.'
    richtig: [0, 1]
    fehler:
      - wert: [0]
        meldung: Das stimmt. Es gibt aber noch eine zweite richtige Aussage. Was ergibt die Summe über alle möglichen Ergebnisse?
      - wert: [0, 1, 2]
        meldung: 'Ein sicheres Ereignis hat die Wahrscheinlichkeit $1$. Mehr als $1$ ist nicht möglich.'
loesung: |
  Eine Wahrscheinlichkeit ist ein Anteil. Sie liegt zwischen $0$ (unmöglich) und $1$ (sicher).
  ---
  Irgendein Ergebnis tritt sicher ein. Deshalb ergeben alle Wahrscheinlichkeiten zusammen $1$. Diese Regel wird gleich zu „Gesamtfläche $1$“.
```

Diese Lektion geht über den Stoff der Studienberechtigungsprüfung hinaus. Er gehört aber zum
Schulstoff der Oberstufe und zum Studienbeginn. Er zeigt eine überraschende Anwendung des Integrals:
**Wahrscheinlichkeiten als Flächen.** Ausführlicher, mit der Normalverteilung, kommt das Thema in
[Kapitel 16, Stetige Zufallsvariablen](/lernen/mathe3/wahrscheinlichkeit/stetige-zufallsvariablen-wahrscheinlichkeit-als-flaeche) wieder.

Beim Würfeln gibt es nur sechs mögliche Ergebnisse. Viele Größen können aber **jeden** Wert in einem
Intervall annehmen: eine Wartezeit, die Lebensdauer eines Geräts oder ein Messfehler. Eine solche Größe
heißt **stetige Zufallsvariable**. „Stetig“ heißt hier: Zwischen zwei möglichen Werten liegen lückenlos
alle anderen. Ein Beispiel ist die Wartezeit $X$ auf einen Bus, der alle $10$ Minuten fährt. $X$ kann
$3$ Minuten sein, aber auch $3{,}1$ oder $3{,}14159$ Minuten.

Für eine stetige Zufallsvariable ist die Wahrscheinlichkeit für einen **einzelnen** exakten Wert null.
Dass du genau $3{,}000\ldots$ Minuten wartest, ist praktisch ausgeschlossen. Sinnvoll sind nur Fragen wie
„Wie wahrscheinlich warte ich höchstens $3$ Minuten?“ Die Antwort liefert eine Fläche.

:::definition[Dichtefunktion]
Eine Funktion $f$ heißt **Dichtefunktion** (kurz Dichte) auf dem Intervall $[a, b]$, wenn gilt:

1. $f(x) \ge 0$ für alle $x$ in $[a, b]$.
2. $\int_a^b f(x)\,\dd x = 1$. Die Gesamtfläche unter dem Graphen ist $1$.

Eine stetige Zufallsvariable $X$ mit dieser Dichte hat die Wahrscheinlichkeiten
$$P(c \le X \le d) = \int_c^d f(x)\,\dd x \qquad\text{für } a \le c \le d \le b.$$
Dabei ist $P(c \le X \le d)$ die Wahrscheinlichkeit, dass $X$ zwischen $c$ und $d$ liegt.
:::

**In Worten:** Die Wahrscheinlichkeit ist die Fläche unter der Dichte über dem gefragten Bereich. Die
Gesamtfläche ist $1$, so wie beim Würfel alle Wahrscheinlichkeiten zusammen $1$ ergeben. Die Bedingung
$\int_a^b f = 1$ nennt man **Normierung**.

:::beispiel[Wartezeit auf den Bus]
Ein Bus fährt alle $10$ Minuten. Du kommst zu einer zufälligen Zeit an der Haltestelle an. Jede Wartezeit
zwischen $0$ und $10$ Minuten ist gleich wahrscheinlich. Die Dichte ist deshalb konstant:
$f(x) = \frac{1}{10}$ auf $[0, 10]$.

1. **Normierung prüfen:** $\int_0^{10}\frac{1}{10}\,\dd x = \frac{10}{10} = 1$. Es passt.
2. **Höchstens $3$ Minuten warten:** $P(X \le 3) = \int_0^3 \frac{1}{10}\,\dd x = \frac{3}{10} = 0{,}3$.
3. **Deutung:** In $30\,\%$ der Fälle wartest du höchstens $3$ Minuten. Das passt zur Anschauung, denn $3$ Minuten sind drei Zehntel der $10$ Minuten.

Eine konstante Dichte heißt **Gleichverteilung**. Ihr Graph ist ein Rechteck mit Fläche $1$.
:::

:::beispiel[Eine lineare Dichte normieren]
Eine Größe $X$ nimmt Werte in $[0, 2]$ an. Größere Werte sind wahrscheinlicher, und zwar proportional zu $x$.
Die Dichte hat also die Form $f(x) = c\,x$ mit einer Konstanten $c > 0$.

1. **$c$ bestimmen:** $\int_0^2 c\,x\,\dd x = c\left[\frac{x^2}{2}\right]_0^2 = 2c$. Die Normierung verlangt $2c = 1$, also $c = \frac12$.
2. **Wahrscheinlichkeit:** $P(X \le 1) = \int_0^1 \frac{x}{2}\,\dd x = \left[\frac{x^2}{4}\right]_0^1 = \frac14$.
3. **Deutung:** Obwohl $1$ die Mitte des Intervalls ist, liegt nur ein Viertel der Wahrscheinlichkeit links davon. Die Dichte ist links niedrig.
:::

```plot
x: [-0.2, 2.3]
y: [-0.1, 1.15]
achsen: { x: "x", y: "f(x)" }
graphen:
  - { f: "x/2", label: "f(x) = x/2", farbe: 0, von: 0, bis: 2 }
flaechen:
  - { f: "x/2", von: 0, bis: 1, farbe: 1 }
  - { f: "x/2", von: 1, bis: 2, farbe: 2 }
beschriftung: Die Dichte f(x) = x/2 auf [0, 2]. Die orange Fläche links von 1 ist 1/4, die grüne Fläche rechts davon 3/4. Zusammen ergeben sie 1.
```

### Der Erwartungswert

Der **Erwartungswert** $E(X)$ ist der Wert, den $X$ „im Durchschnitt“ annimmt. Beim Würfel rechnest du
$\sum x_i\cdot P(X = x_i)$, also jeden Wert mal seine Wahrscheinlichkeit. Bei einer stetigen
Zufallsvariablen wird die Summe zum Integral:
$$E(X) = \int_a^b x\cdot f(x)\,\dd x.$$
Ein Zahlenbeispiel mit der Bus-Wartezeit: $E(X) = \int_0^{10} x\cdot\frac{1}{10}\,\dd x = \frac{1}{10}\cdot\frac{100}{2} = 5$
Minuten. Im Durchschnitt wartest du $5$ Minuten, wie erwartet die Mitte. Für die lineare Dichte $\frac{x}{2}$
auf $[0, 2]$ ist $E(X) = \int_0^2 \frac{x^2}{2}\,\dd x = \frac{8}{6} = \frac43$. Der Erwartungswert liegt
rechts der Mitte $1$, weil große Werte wahrscheinlicher sind.

:::beispiel[Lebensdauer eines Bauteils]
Die Lebensdauer $T$ eines Bauteils in Jahren hat die Dichte $f(t) = 0{,}5\,e^{-0{,}5t}$ für $t \ge 0$. Wie
wahrscheinlich fällt es in den ersten $2$ Jahren aus?

1. **Ansatz:** $P(T \le 2) = \int_0^2 0{,}5\,e^{-0{,}5t}\,\dd t$.
2. **Stammfunktion** mit linearer Substitution: $\int 0{,}5\,e^{-0{,}5t}\,\dd t = -e^{-0{,}5t}$.
3. **Einsetzen:** $\left[-e^{-0{,}5t}\right]_0^2 = -e^{-1} + 1 \approx 0{,}632$.

**Antwort:** Mit rund $63\,\%$ Wahrscheinlichkeit fällt das Bauteil in den ersten zwei Jahren aus. Diese Dichte
heißt **Exponentialverteilung**. Dass ihre Gesamtfläche über $[0, \infty)$ gleich $1$ ist, zeigt man mit einem
uneigentlichen Integral, siehe [Kapitel 14](/lernen/mathe3/integrierbarkeit/uneigentliche-integrale).
:::

:::achtung[Der Funktionswert ist keine Wahrscheinlichkeit]
Eine Größe $X$ hat auf $\left[0, \frac12\right]$ die Dichte $f(x) = 2$. Falsch ist:
$$P(X = 0{,}3) \overset{?}{=} f(0{,}3) = 2.$$
Eine Wahrscheinlichkeit von $2$ gibt es nicht. Der Wert $f(x)$ ist eine **Dichte**, also Wahrscheinlichkeit pro
Längeneinheit. Wahrscheinlichkeiten sind Flächen: $P(X = 0{,}3) = \int_{0{,}3}^{0{,}3} 2\,\dd x = 0$, aber zum
Beispiel $P(0{,}2 \le X \le 0{,}3) = 2\cdot 0{,}1 = 0{,}2$. Eine Dichte darf also größer als $1$ sein.
:::

:::achtung[Die Normierung vergessen]
Eine typische Fehlrechnung zur Dichte $f(x) = c\,x$ auf $[0, 2]$:
$$P(X \le 1) \overset{?}{=} \int_0^1 x\,\dd x = \frac12.$$
Hier wurde $c$ einfach weggelassen. Ohne Normierung ist die Gesamtfläche $\int_0^2 x\,\dd x = 2$ und nicht $1$.
Dann sind alle „Wahrscheinlichkeiten“ doppelt so groß. Richtig ist mit $c = \frac12$ der Wert $\frac14$.
Bestimme deshalb immer **zuerst** $c$.
:::

:::merke[Rezept: Rechnen mit einer Dichte]
1. Prüfen, ob $f \ge 0$ ist. Unbekannte Konstante $c$ aus der Normierung $\int_a^b f(x)\,\dd x = 1$ bestimmen.
2. Wahrscheinlichkeit als Fläche: $P(c \le X \le d) = \int_c^d f(x)\,\dd x$.
3. Erwartungswert: $E(X) = \int_a^b x\,f(x)\,\dd x$.
4. Plausibilität: Jede Wahrscheinlichkeit liegt zwischen $0$ und $1$, der Erwartungswert liegt in $[a, b]$.
:::

```reflexion
frage: Für eine stetige Zufallsvariable ist $P(X = 1) = 0$. Trotzdem nimmt $X$ bei jedem Versuch irgendeinen Wert an. Wie passt das zusammen?
antwort: |
  Es gibt unendlich viele mögliche Werte. Jeder einzelne hat die Fläche null, denn über einem Punkt liegt kein
  Streifen mit Breite. Eine positive Wahrscheinlichkeit entsteht erst über einem Intervall, das eine Breite hat.
  „Wahrscheinlichkeit null“ heißt bei stetigen Größen also nicht „unmöglich“, sondern „ein einzelner Punkt hat
  keine Fläche“. Das ist wie bei einer Strecke: Sie hat eine Länge, obwohl jeder einzelne Punkt die Länge null hat.
```

```aufgabe
id: ir-dichte-gleich
titel: Wartezeit auf die U-Bahn
niveau: 1
lernziel: 8
kompetenz: anwenden
angabe: |
  Eine U-Bahn fährt alle $15$ Minuten. Du kommst zu einer zufälligen Zeit an. Die Wartezeit $X$ ist gleichverteilt auf
  $[0, 15]$, hat also die Dichte $f(x) = \frac{1}{15}$.

  a) Wie wahrscheinlich wartest du höchstens $6$ Minuten?

  b) Wie lange wartest du im Durchschnitt?
teile:
  - typ: zahl
    label: 'a) $P(X \le 6)$'
    loesung: "6/15"
    fehler:
      - wert: "6"
        meldung: Eine Wahrscheinlichkeit liegt zwischen $0$ und $1$. Die Fläche ist Breite mal Höhe, also $6\cdot\frac{1}{15}$.
      - wert: "9/15"
        meldung: Das ist die Wahrscheinlichkeit, **länger** als $6$ Minuten zu warten.
  - typ: zahl
    label: 'b) $E(X)$'
    einheit: min
    loesung: "15/2"
    fehler:
      - wert: "1"
        meldung: 'Das ist die Gesamtfläche $\int_0^{15} f(x)\,\dd x$. Für den Erwartungswert brauchst du $\int_0^{15} x\,f(x)\,\dd x$.'
hinweise:
  - 'Die Wahrscheinlichkeit ist eine Rechteckfläche: $\int_0^6 \frac{1}{15}\,\dd x$.'
loesung: |
  **Ansatz:** Wahrscheinlichkeit ist Fläche unter der Dichte, Erwartungswert ist $\int x\,f(x)\,\dd x$.
  ---
  a) $P(X \le 6) = \int_0^6 \frac{1}{15}\,\dd x = \frac{6}{15} = 0{,}4$, also $40\,\%$.
  ---
  b) $E(X) = \int_0^{15} \frac{x}{15}\,\dd x = \frac{1}{15}\cdot\frac{225}{2} = 7{,}5$ Minuten. Bei einer Gleichverteilung liegt der Erwartungswert in der Mitte.
```

```aufgabe
id: ir-dichte-pruefen
titel: Ist das eine Dichte?
niveau: 1
lernziel: 8
kompetenz: verstehen
angabe: |
  Welche der folgenden Funktionen sind Dichtefunktionen auf dem Intervall $[0, 1]$? Wähle alle richtigen aus.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$f(x) = 2x$'
      - '$f(x) = x$'
      - '$f(x) = 3x^2$'
      - '$f(x) = 1 - 2x$'
    richtig: [0, 2]
    fehler:
      - wert: [0, 1, 2]
        meldung: 'Prüfe bei $f(x) = x$ die Gesamtfläche. Es ist $\int_0^1 x\,\dd x = \frac12$, nicht $1$.'
      - wert: [0, 2, 3]
        meldung: '$1 - 2x$ hat zwar die Gesamtfläche $0$, ist aber für $x > \frac12$ negativ. Eine Dichte darf nie negativ sein, und ihre Fläche muss $1$ sein.'
hinweise:
  - 'Prüfe zwei Bedingungen: $f(x) \ge 0$ auf ganz $[0, 1]$, und $\int_0^1 f(x)\,\dd x = 1$.'
loesung: |
  **Ansatz:** Eine Dichte braucht zwei Eigenschaften: nirgends negativ und Gesamtfläche $1$.
  ---
  $2x$: nicht negativ, $\int_0^1 2x\,\dd x = 1$. Dichte. $x$: Fläche $\frac12$, keine Dichte. $3x^2$: nicht negativ, Fläche $\big[x^3\big]_0^1 = 1$. Dichte.
  ---
  $1 - 2x$: für $x > \frac12$ negativ und Fläche $0$. Keine Dichte. Richtig sind also $2x$ und $3x^2$.
```

```aufgabe
id: ir-dichte-normieren
titel: Eine Dichte normieren
niveau: 2
lernziel: 8
kompetenz: rechnen
angabe: |
  Eine Zufallsvariable $X$ hat auf $[0, 3]$ die Dichte $f(x) = c\,x^2$.

  a) Bestimme $c$.

  b) Berechne $P(1 \le X \le 2)$ auf drei Dezimalstellen.

  c) Berechne den Erwartungswert $E(X)$.
teile:
  - typ: zahl
    label: 'a) $c$'
    loesung: "1/9"
    fehler:
      - wert: "9"
        meldung: 'Die Fläche ohne $c$ ist $9$. Damit $c\cdot 9 = 1$ gilt, muss $c$ der Kehrwert sein.'
      - wert: "1/27"
        meldung: 'Die Stammfunktion von $x^2$ ist $\frac{x^3}{3}$. Das Teilen durch $3$ fehlt in deiner Normierung.'
  - typ: zahl
    label: 'b) $P(1 \le X \le 2)$'
    loesung: "(8 - 1)/27"
    anzeige: '\tfrac{7}{27} \approx 0{,}259'
    fehler:
      - wert: "7/3"
        meldung: Eine Wahrscheinlichkeit kann nicht größer als $1$ sein. Du hast den Faktor $c$ vergessen.
  - typ: zahl
    label: 'c) $E(X)$'
    loesung: "81/36"
    anzeige: '\tfrac94 = 2{,}25'
    fehler:
      - wert: "1.5"
        meldung: 'Das ist die Intervallmitte. Bei dieser Dichte sind große Werte wahrscheinlicher. Rechne $\int_0^3 x\cdot\frac{x^2}{9}\,\dd x$.'
hinweise:
  - 'Normierung: $\int_0^3 c\,x^2\,\dd x = 9c$ muss $1$ sein.'
  - 'Für b) integrierst du $\frac{x^2}{9}$ von $1$ bis $2$, für c) integrierst du $x\cdot\frac{x^2}{9} = \frac{x^3}{9}$ von $0$ bis $3$.'
loesung: |
  **Ansatz:** Zuerst die Konstante aus der Normierung, dann Wahrscheinlichkeit und Erwartungswert als Integrale.
  ---
  a) $\int_0^3 c\,x^2\,\dd x = c\left[\frac{x^3}{3}\right]_0^3 = 9c = 1$, also $c = \frac19$.
  ---
  b) $P(1 \le X \le 2) = \int_1^2 \frac{x^2}{9}\,\dd x = \left[\frac{x^3}{27}\right]_1^2 = \frac{8 - 1}{27} = \frac{7}{27} \approx 0{,}259$.
  ---
  c) $E(X) = \int_0^3 \frac{x^3}{9}\,\dd x = \left[\frac{x^4}{36}\right]_0^3 = \frac{81}{36} = \frac94 = 2{,}25$. **Plausibilität:** Der Wert liegt in $[0, 3]$ und rechts der Mitte $1{,}5$, weil die Dichte rechts größer ist.
gefuehrt:
  - text: 'Berechne die Fläche unter $x^2$ (ohne $c$) auf $[0, 3]$.'
    teil: { typ: zahl, loesung: "9", fehler: [ { wert: "27", meldung: 'Die Stammfunktion ist $\frac{x^3}{3}$. Teile $27$ noch durch $3$.' } ] }
    erklaerung: '$\left[\frac{x^3}{3}\right]_0^3 = \frac{27}{3} = 9$.'
  - text: Welcher Wert von $c$ macht die Gesamtfläche zu $1$?
    teil: { typ: zahl, loesung: "1/9" }
    erklaerung: '$9c = 1$, also $c = \frac19$. Die Dichte ist $f(x) = \frac{x^2}{9}$.'
  - text: 'Berechne $P(1 \le X \le 2) = \int_1^2 \frac{x^2}{9}\,\dd x$.'
    teil: { typ: zahl, loesung: "7/27" }
    erklaerung: '$\left[\frac{x^3}{27}\right]_1^2 = \frac{8}{27} - \frac{1}{27} = \frac{7}{27} \approx 0{,}259$.'
  - text: 'Berechne $E(X) = \int_0^3 x\cdot\frac{x^2}{9}\,\dd x$.'
    teil: { typ: zahl, loesung: "9/4" }
    erklaerung: '$\left[\frac{x^4}{36}\right]_0^3 = \frac{81}{36} = \frac94$.'
```

```aufgabe
id: ir-dichte-median
titel: Der Median einer Dichte
niveau: 2
lernziel: 8
kompetenz: rechnen
angabe: |
  Eine Zufallsvariable $X$ hat auf $[0, 4]$ die Dichte $f(x) = \frac{x}{8}$. Der **Median** $m$ ist die Stelle, links von der
  genau die Hälfte der Wahrscheinlichkeit liegt: $P(X \le m) = \frac12$.

  a) Prüfe, dass $f$ eine Dichte ist, und berechne $m$ auf drei Dezimalstellen.

  b) Berechne den Erwartungswert $E(X)$.
teile:
  - typ: zahl
    label: 'a) Median $m$'
    loesung: "sqrt(8)"
    anzeige: '2\sqrt2 \approx 2{,}828'
    fehler:
      - wert: "2"
        meldung: Die Intervallmitte teilt die Fläche hier nicht. Die Dichte ist rechts größer, also liegt rechts der Mitte mehr als die Hälfte der Wahrscheinlichkeit.
      - wert: "8"
        meldung: '$m^2 = 8$ ist ein Zwischenschritt. Ziehe noch die Wurzel.'
  - typ: zahl
    label: 'b) $E(X)$'
    loesung: "64/24"
    anzeige: '\tfrac83 \approx 2{,}667'
hinweise:
  - '$\int_0^4 \frac{x}{8}\,\dd x = \left[\frac{x^2}{16}\right]_0^4 = 1$. Setze $\frac{m^2}{16} = \frac12$.'
  - '$E(X) = \int_0^4 x\cdot\frac{x}{8}\,\dd x = \int_0^4 \frac{x^2}{8}\,\dd x$.'
loesung: |
  **Ansatz:** Der Median ist eine gesuchte obere Grenze, genau wie in [10.5 Integrale mit gesuchter Grenze](/lernen/mathe3/integralrechnung/integrale-mit-gesuchter-grenze-oder-gesuchtem-parameter).
  ---
  a) Normierung: $\int_0^4 \frac{x}{8}\,\dd x = \frac{16}{16} = 1$, und $f \ge 0$. Es ist eine Dichte. Median: $\int_0^m \frac{x}{8}\,\dd x = \frac{m^2}{16} = \frac12$, also $m^2 = 8$ und $m = \sqrt8 \approx 2{,}828$.
  ---
  b) $E(X) = \left[\frac{x^3}{24}\right]_0^4 = \frac{64}{24} = \frac83 \approx 2{,}667$.
  ---
  **Vergleich:** Median und Erwartungswert sind verschieden. Beide liegen rechts der Mitte $2$, weil die Dichte rechts größer ist.
```

```aufgabe
id: ir-dichte-lebensdauer
titel: Lebensdauer von Leuchtdioden
niveau: 2
lernziel: 8
kompetenz: anwenden
angabe: |
  Die Lebensdauer $T$ einer Leuchtdiode in $10\,000$ Stunden hat die Dichte $f(t) = 0{,}4\,e^{-0{,}4t}$ für $t \ge 0$.

  a) Wie wahrscheinlich fällt sie in den ersten $10\,000$ Stunden aus ($T \le 1$)? Runde auf drei Dezimalstellen.

  b) Wie wahrscheinlich fällt sie zwischen $10\,000$ und $30\,000$ Stunden aus? Runde auf drei Dezimalstellen.
teile:
  - typ: zahl
    label: 'a) $P(T \le 1)$'
    loesung: "1 - exp(-0.4)"
    anzeige: '0{,}330'
    fehler:
      - wert: "exp(-0.4)"
        meldung: 'Das ist $P(T > 1)$. Setze die Grenzen in $-e^{-0{,}4t}$ ein: oben minus unten.'
      - wert: "0.4*exp(-0.4)"
        meldung: 'Das ist der Funktionswert $f(1)$. Eine Wahrscheinlichkeit ist aber eine Fläche, also ein Integral.'
  - typ: zahl
    label: 'b) $P(1 \le T \le 3)$'
    loesung: "exp(-0.4) - exp(-1.2)"
    anzeige: '0{,}369'
    fehler:
      - wert: "1 - exp(-1.2)"
        meldung: 'Das ist $P(T \le 3)$. Ziehe noch $P(T \le 1)$ ab.'
hinweise:
  - 'Eine Stammfunktion von $0{,}4\,e^{-0{,}4t}$ ist $-e^{-0{,}4t}$ (lineare Substitution).'
  - 'Achte auf die Einheit: $T = 1$ bedeutet $10\,000$ Stunden, $T = 3$ bedeutet $30\,000$ Stunden.'
loesung: |
  **Ansatz:** Wahrscheinlichkeiten sind Flächen unter der Dichte. Stammfunktion: $-e^{-0{,}4t}$, denn $\left(-e^{-0{,}4t}\right)' = 0{,}4\,e^{-0{,}4t}$.
  ---
  a) $P(T \le 1) = \left[-e^{-0{,}4t}\right]_0^1 = -e^{-0{,}4} + 1 \approx 1 - 0{,}6703 = 0{,}330$.
  ---
  b) $P(1 \le T \le 3) = \left[-e^{-0{,}4t}\right]_1^3 = e^{-0{,}4} - e^{-1{,}2} \approx 0{,}6703 - 0{,}3012 = 0{,}369$.
  ---
  **Antwort:** Rund $33\,\%$ der Dioden fallen in den ersten $10\,000$ Stunden aus, rund $37\,\%$ zwischen $10\,000$ und $30\,000$ Stunden.
```

```aufgabe
id: ir-dichte-fehler
titel: Eine Dichte größer als 1?
niveau: 2
lernziel: 8
kompetenz: begruenden
angabe: |
  Eine Größe $X$ ist auf $\left[0, \frac13\right]$ gleichverteilt, ihre Dichte ist also $f(x) = 3$. Eine Mitschülerin sagt:
  „Das kann keine Dichte sein. Sonst wäre $P(X = 0{,}1) = 3$, und Wahrscheinlichkeiten sind höchstens $1$.“

  a) Was ist an ihrer Begründung falsch?

  b) Berechne $P(X \le 0{,}1)$.
teile:
  - typ: auswahl
    label: 'a) Der Fehler'
    optionen:
      - 'Sie hält den Funktionswert für eine Wahrscheinlichkeit. Wahrscheinlichkeiten sind Flächen, und die Gesamtfläche ist $3\cdot\frac13 = 1$.'
      - 'Sie hat recht. Eine Dichte muss immer kleiner als $1$ sein.'
      - 'Die Gesamtfläche ist $3$, deshalb ist es keine Dichte.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Rechne die Gesamtfläche aus: Breite $\frac13$ mal Höhe $3$. Eine Dichte muss nur Fläche $1$ haben und darf dabei größer als $1$ sein.'
      - wert: 2
        meldung: 'Die Breite des Intervalls ist nur $\frac13$. Die Fläche ist deshalb $3\cdot\frac13 = 1$.'
  - typ: zahl
    label: 'b) $P(X \le 0{,}1)$'
    loesung: "3*0.1"
    fehler:
      - wert: "3"
        meldung: Das ist der Funktionswert. Die Wahrscheinlichkeit ist die Fläche von $0$ bis $0{,}1$.
hinweise:
  - Was ist die Gesamtfläche unter der Dichte?
  - '$P(X \le 0{,}1)$ ist ein Rechteck mit Breite $0{,}1$ und Höhe $3$.'
loesung: |
  **Ansatz:** Eine Dichte braucht $f \ge 0$ und Gesamtfläche $1$. Ihre Werte selbst sind keine Wahrscheinlichkeiten.
  ---
  a) Die Gesamtfläche ist $3\cdot\frac13 = 1$. Also ist $f$ eine Dichte. Für einen einzelnen Wert gilt $P(X = 0{,}1) = 0$, denn über einem Punkt liegt keine Fläche.
  ---
  b) $P(X \le 0{,}1) = \int_0^{0{,}1} 3\,\dd x = 0{,}3$. Das liegt zwischen $0$ und $1$, wie es sein muss.
```

```aufgabe
id: ir-dichte-anteil
titel: Anteil eines Rohstoffs in Proben
niveau: 3
lernziel: 8
kompetenz: modellieren
angabe: |
  Der Anteil $X$ eines Rohstoffs in einer Gesteinsprobe liegt zwischen $0$ und $1$. Er wird durch die Dichte
  $f(x) = 6x(1 - x)$ auf $[0, 1]$ beschrieben.

  a) Zeige, dass $f$ eine Dichte ist.

  b) Eine Probe ist „reich“, wenn der Anteil über $0{,}8$ liegt. Wie wahrscheinlich ist eine reiche Probe?

  c) Wie wahrscheinlich liegt der Anteil zwischen $0{,}4$ und $0{,}6$?

  d) Welchen Anteil erwartet man im Durchschnitt? Begründe auch mit dem Graphen.
teile:
  - typ: text
    label: 'a) Nachweis'
    muster: |
      Für $0 \le x \le 1$ sind $x \ge 0$ und $1 - x \ge 0$, also $f(x) \ge 0$. Gesamtfläche:
      $\int_0^1 (6x - 6x^2)\,\dd x = \big[3x^2 - 2x^3\big]_0^1 = 3 - 2 = 1$.
  - typ: zahl
    label: 'b) $P(X > 0{,}8)$'
    loesung: "1 - (3*0.64 - 2*0.512)"
    anzeige: '0{,}104'
  - typ: zahl
    label: 'c) $P(0{,}4 \le X \le 0{,}6)$'
    loesung: "(3*0.36 - 2*0.216) - (3*0.16 - 2*0.064)"
    anzeige: '0{,}296'
  - typ: zahl
    label: 'd) $E(X)$'
    loesung: "1/2"
hinweise:
  - 'Eine Stammfunktion von $6x - 6x^2$ ist $F(x) = 3x^2 - 2x^3$. Sie ist zugleich $P(X \le x)$.'
  - 'Für b) gilt $P(X > 0{,}8) = 1 - F(0{,}8)$. Für d) hilft die Symmetrie des Graphen zur Stelle $0{,}5$.'
loesung: |
  **Ansatz:** Alle Wahrscheinlichkeiten sind Flächen. Wir brauchen nur die Stammfunktion $F(x) = 3x^2 - 2x^3$ mit $F(0) = 0$. Sie ist die Integralfunktion der Dichte, also $F(x) = P(X \le x)$.
  ---
  a) $f(x) = 6x(1 - x) \ge 0$ auf $[0, 1]$, und $F(1) - F(0) = 3 - 2 = 1$. Also ist $f$ eine Dichte.
  ---
  b) $F(0{,}8) = 3\cdot 0{,}64 - 2\cdot 0{,}512 = 1{,}92 - 1{,}024 = 0{,}896$. Also $P(X > 0{,}8) = 1 - 0{,}896 = 0{,}104$, rund $10\,\%$.
  ---
  c) $F(0{,}6) = 1{,}08 - 0{,}432 = 0{,}648$ und $F(0{,}4) = 0{,}48 - 0{,}128 = 0{,}352$. Also $P = 0{,}648 - 0{,}352 = 0{,}296$.
  ---
  d) $E(X) = \int_0^1 x\cdot 6x(1 - x)\,\dd x = \left[2x^3 - \frac{3x^4}{2}\right]_0^1 = 2 - 1{,}5 = 0{,}5$. **Begründung mit dem Graphen:** Die Parabel $6x(1 - x)$ ist spiegelsymmetrisch zur Geraden $x = 0{,}5$. Ein Anteil $0{,}5 + d$ ist deshalb genauso wahrscheinlich wie $0{,}5 - d$. Die Abweichungen nach oben und nach unten gleichen sich im Durchschnitt aus, also ist die Mitte $0{,}5$ der Erwartungswert.
```

## Wachstum, Zerfall, Abkühlung: einfache Differentialgleichungen (Vertiefung)

```aufgabe
id: ir-dgl-vorwissen
titel: Die Ableitung der e-Funktion
art: check
niveau: 1
angabe: |
  Was ist die Ableitung von $y(t) = 5\,e^{0{,}2t}$? Zum Nachlesen:
  [9.7 Kettenregel](/lernen/mathe3/differentialrechnung/kettenregel-hoehere-ableitungen-und-die-wahl-der-richtigen-regel).
teile:
  - typ: auswahl
    optionen:
      - '$e^{0{,}2t}$'
      - '$5\,e^{0{,}2t}$'
      - '$0{,}2\,t\cdot 5\,e^{0{,}2t - 1}$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Die innere Ableitung $0{,}2$ fehlt. Nach der Kettenregel ist $\left(e^{0{,}2t}\right)'' = 0{,}2\,e^{0{,}2t}$.'
      - wert: 2
        meldung: 'Die Potenzregel gilt nur, wenn die Variable in der Basis steht. Hier steht $t$ im Exponenten.'
loesung: |
  Kettenregel: $\left(e^{0{,}2t}\right)' = e^{0{,}2t}\cdot 0{,}2$. Also $y'(t) = 5\cdot 0{,}2\,e^{0{,}2t} = e^{0{,}2t}$.
  ---
  Beachte: $y'(t) = 0{,}2\cdot y(t)$. Die Ableitung ist ein fester Bruchteil der Funktion selbst. Genau diese Eigenschaft beschreibt gleich eine Differentialgleichung.
```

Diese Lektion geht über den Stoff der Studienberechtigungsprüfung hinaus. Er gehört zum Schulstoff
der achten Klasse und ist für Physik und Technik wichtig. Du kennst Wachstums- und Zerfallsmodelle schon
aus [Kapitel 4, Wachstums- und Zerfallsmodelle](/lernen/mathe3/funktionen/wachstums-und-zerfallsmodelle).
Dort waren die Formeln gegeben. Hier siehst du, **woher** sie kommen.

### Was ist eine Differentialgleichung?

Eine **Differentialgleichung** ist eine Gleichung, in der eine unbekannte **Funktion** und ihre
**Ableitung** vorkommen. Gesucht ist also keine Zahl, sondern eine ganze Funktion. Ein Beispiel ist
$$y'(t) = 0{,}2\cdot y(t).$$
In Worten: Die Änderungsrate von $y$ ist zu jedem Zeitpunkt $0{,}2$-mal so groß wie $y$ selbst. So wächst
eine Bakterienkultur. Je mehr Bakterien da sind, desto mehr teilen sich pro Stunde. Man schreibt kürzer
$y' = 0{,}2\,y$.

Eine **Lösung** ist eine Funktion, die die Gleichung für alle $t$ erfüllt. Ob eine Funktion eine Lösung
ist, prüfst du durch **Einsetzen**: Du berechnest beide Seiten und vergleichst. Die Vorwissensfrage am Anfang dieser Lektion hat
gezeigt, dass $y(t) = 5\,e^{0{,}2t}$ die Gleichung $y' = 0{,}2\,y$ erfüllt.

**Die einfachste Sorte kennst du schon.** Bei $y'(t) = f(t)$ steht rechts nur eine Funktion von $t$. Dann ist
$y$ eine Stammfunktion von $f$. Jede Aufgabe „Bestand aus Rate“ war also schon eine Differentialgleichung.

### Exponentielles Wachstum und exponentieller Zerfall

:::satz[Lösung von y′ = k·y]
Es sei $k$ eine reelle Zahl. Die Lösungen der Differentialgleichung $y' = k\,y$ sind genau die Funktionen
$$y(t) = y_0\,e^{kt}.$$
Dabei ist $y_0 = y(0)$ der **Anfangswert**. Für $k > 0$ beschreibt das Wachstum, für $k < 0$ Zerfall. Die
Zahl $k$ heißt **Wachstumskonstante** beziehungsweise Zerfallskonstante.
:::

:::beweis
**Die Funktionen sind Lösungen.** Nach der Kettenregel ist $\left(y_0\,e^{kt}\right)' = y_0\,k\,e^{kt} = k\cdot y_0\,e^{kt}$.
Das ist genau $k\,y$.

**Es gibt keine anderen.** Es sei $y$ irgendeine Lösung. Wir betrachten $D(t) = y(t)\,e^{-kt}$. Mit der
Produktregel und $y' = ky$ gilt
$$D'(t) = y'(t)\,e^{-kt} - k\,y(t)\,e^{-kt} = k\,y\,e^{-kt} - k\,y\,e^{-kt} = 0.$$
Eine Funktion mit Ableitung null ist auf einem Intervall konstant. Das ist derselbe Satz wie bei den
Stammfunktionen in [10.1 Stammfunktionen](/lernen/mathe3/integralrechnung/stammfunktionen-ableiten-rueckwaerts). Also ist $D(t) = D(0) = y_0$, und damit $y(t) = y_0\,e^{kt}$.
:::

:::beispiel[Eine Bakterienkultur]
Eine Kultur enthält zu Beginn $500$ Bakterien. Ihre Wachstumsrate ist $y' = 0{,}2\,y$ in Bakterien pro Stunde.

1. **Lösung:** $y(t) = 500\,e^{0{,}2t}$, $t$ in Stunden.
2. **Nach 10 Stunden:** $y(10) = 500\,e^{2} \approx 3695$ Bakterien.
3. **Verdopplungszeit:** $500\,e^{0{,}2t} = 1000$ ergibt $e^{0{,}2t} = 2$, also $t = \frac{\ln 2}{0{,}2} \approx 3{,}47$ h.

**Probe:** $y'(t) = 500\cdot 0{,}2\,e^{0{,}2t} = 0{,}2\cdot y(t)$. Es stimmt.
:::

### Beschränktes Wachstum und Abkühlung

Ein heißer Kaffee kühlt ab. Er kühlt umso schneller ab, je größer der Unterschied zur Raumtemperatur ist.
Das beschreibt die Differentialgleichung
$$T' = -k\,(T - S) \quad\text{oder gleichwertig}\quad T' = k\,(S - T).$$
Dabei ist $T(t)$ die Temperatur zur Zeit $t$, $S$ die Raumtemperatur und $k > 0$ eine Konstante. Dasselbe Muster
gilt für **beschränktes Wachstum** mit einer Sättigungsgrenze $S$. Ein Beispiel ist die Zahl der Haushalte,
die ein neues Gerät besitzen.

:::satz[Lösung von y′ = k·(S − y)]
Die Lösung der Differentialgleichung $y' = k\,(S - y)$ mit dem Anfangswert $y(0) = y_0$ ist
$$y(t) = S - (S - y_0)\,e^{-kt}.$$
Dabei ist $S$ die Grenze, der sich $y$ für große $t$ annähert, und $S - y_0$ der Abstand zur Grenze am Anfang.
:::

**Warum?** Setze $D(t) = S - y(t)$, also den Abstand zur Grenze. Dann ist $D' = -y' = -k\,(S - y) = -k\,D$. Der
Abstand erfüllt also die Zerfallsgleichung $D' = -k\,D$, einen Fall des Satzes zu $y' = k\,y$. Nach dem ersten Satz ist $D(t) = (S - y_0)\,e^{-kt}$.
Daraus folgt $y = S - D$.

:::beispiel[Ein Kaffee kühlt ab]
Ein Kaffee hat $90$ °C, der Raum hat $20$ °C. Es gilt $T' = 0{,}1\,(20 - T)$, $t$ in Minuten.

1. **Lösung:** $T(t) = 20 - (20 - 90)\,e^{-0{,}1t} = 20 + 70\,e^{-0{,}1t}$.
2. **Nach 10 Minuten:** $T(10) = 20 + 70\,e^{-1} \approx 45{,}8$ °C.
3. **Trinkbar bei 50 °C:** $20 + 70\,e^{-0{,}1t} = 50$ ergibt $e^{-0{,}1t} = \frac{30}{70} = \frac37$. Logarithmieren: $t = -10\ln\frac37 = 10\ln\frac73 \approx 8{,}47$ min.

**Probe:** $T'(t) = -7\,e^{-0{,}1t}$ und $0{,}1\,(20 - T) = 0{,}1\cdot(-70\,e^{-0{,}1t}) = -7\,e^{-0{,}1t}$. Beide Seiten stimmen überein.
:::

```plot
x: [-1, 40]
y: [0, 100]
achsen: { x: "t in min", y: "T in °C" }
graphen:
  - { f: "20 + 70*exp(-0.1*x)", label: "Start 90 °C", farbe: 0, von: 0, bis: 40 }
  - { f: "20 + 30*exp(-0.1*x)", label: "Start 50 °C", farbe: 1, von: 0, bis: 40 }
  - { f: "20 - 15*exp(-0.1*x)", label: "Start 5 °C", farbe: 2, von: 0, bis: 40 }
  - { f: "20", label: "Raumtemperatur", farbe: 3, gestrichelt: true }
beschriftung: Lösungen von T′ = 0,1·(20 − T) für drei Anfangstemperaturen. Alle nähern sich der Raumtemperatur 20 °C. Ein kaltes Getränk erwärmt sich nach demselben Gesetz.
```

:::achtung[Die Funktion wie eine Zahl integrieren]
Eine typische Fehlrechnung zu $y' = 0{,}2\,y$:
$$y \overset{?}{=} \int 0{,}2\,y\,\dd t = 0{,}2\,y\,t + C.$$
Hier wurde $y$ behandelt, als wäre es eine Konstante. Aber $y$ hängt von $t$ ab, und genau diese Funktion ist
gesucht. Die Probe zeigt den Fehler: Auf der rechten Seite steht wieder das unbekannte $y$. Das Ergebnis ist
also gar keine Formel für $y$. Richtig ist $y = y_0\,e^{0{,}2t}$, und das prüfst du durch Einsetzen.
:::

:::achtung[Die Umgebungstemperatur vergessen]
Eine zweite typische Fehlrechnung zum Kaffee lautet $T(t) = 90\,e^{-0{,}1t}$. Das ergibt
$T(10) = 90\,e^{-1} \approx 33{,}1$ °C statt richtig $45{,}8$ °C. Diese Formel würde den Kaffee auf $0$ °C abkühlen
lassen, obwohl der Raum $20$ °C hat. Exponentiell zerfällt nur der **Abstand** zur Raumtemperatur, nicht die
Temperatur selbst.
:::

:::merke[Rezept: einfache Differentialgleichung]
1. Typ erkennen: $y' = f(t)$ (integrieren), $y' = k\,y$ (exponentiell) oder $y' = k\,(S - y)$ (beschränkt).
2. Die passende Lösungsformel hinschreiben und den Anfangswert einsetzen.
3. Gesuchte Zeiten mit dem Logarithmus bestimmen.
4. Probe durch Einsetzen in die Differentialgleichung.
:::

```reflexion
frage: Warum ist die Annahme „Die Änderungsrate ist proportional zum Bestand“ für Bakterien sinnvoll, für einen abkühlenden Kaffee aber nicht?
antwort: |
  Bakterien vermehren sich durch Teilung. Doppelt so viele Bakterien erzeugen pro Stunde doppelt so viele neue. Die
  Rate ist also proportional zum Bestand, $y' = k\,y$. Beim Kaffee hängt die Wärmeabgabe nicht von der Temperatur
  selbst ab, sondern vom **Unterschied** zur Umgebung. Hätte der Raum auch $90$ °C, würde der Kaffee gar nicht
  abkühlen. Deshalb ist die Rate proportional zu $S - T$ und nicht zu $T$.
```

```aufgabe
id: ir-dgl-loesung-pruefen
titel: Lösungen durch Einsetzen erkennen
niveau: 1
lernziel: 9
kompetenz: verstehen
angabe: |
  Welche Funktionen sind Lösungen der Differentialgleichung $y' = 3y$? Wähle alle richtigen aus.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$y(t) = e^{3t}$'
      - '$y(t) = 5\,e^{3t}$'
      - '$y(t) = e^{3t} + 1$'
      - '$y(t) = 3\,e^{t}$'
    richtig: [0, 1]
    fehler:
      - wert: [0]
        meldung: 'Das stimmt. Prüfe auch $5\,e^{3t}$. Ein konstanter Faktor stört beim Ableiten nicht.'
      - wert: [0, 1, 2]
        meldung: 'Bei $e^{3t} + 1$ ist $y'' = 3e^{3t}$, aber $3y = 3e^{3t} + 3$. Die $+1$ macht den Unterschied.'
      - wert: [0, 1, 3]
        meldung: 'Bei $3e^t$ ist $y'' = 3e^t$, aber $3y = 9e^t$. Die Wachstumskonstante steht im Exponenten, nicht davor.'
hinweise:
  - 'Berechne für jede Funktion $y''$ und $3y$ und vergleiche.'
loesung: |
  **Ansatz:** Eine Lösung erkennt man durch Einsetzen: $y'$ und $3y$ müssen für alle $t$ gleich sein.
  ---
  $e^{3t}$: $y' = 3e^{3t} = 3y$. Lösung. $5e^{3t}$: $y' = 15e^{3t} = 3y$. Lösung. $e^{3t} + 1$: $y' = 3e^{3t}$, aber $3y = 3e^{3t} + 3$. Keine Lösung. $3e^t$: $y' = 3e^t$, aber $3y = 9e^t$. Keine Lösung.
```

```aufgabe
id: ir-dgl-wachstum
titel: Kontinuierliches Wachstum
niveau: 1
lernziel: 9
kompetenz: rechnen
angabe: |
  Eine Population wächst nach $y' = 0{,}05\,y$ ($t$ in Jahren). Am Anfang sind es $200$ Tiere. Wie viele sind es nach
  $10$ Jahren? Runde auf ganze Tiere.
teile:
  - typ: zahl
    label: '$y(10)$'
    loesung: "200*exp(0.5)"
    anzeige: '330'
    toleranz: 0.6
    fehler:
      - wert: "300"
        meldung: Du hast mit linearem Wachstum gerechnet, also jedes Jahr $10$ Tiere dazu. Bei $y' = 0{,}05\,y$ wächst der Zuwachs mit der Population.
      - wert: "200*1.05^10"
        meldung: 'Das ist das Modell mit $5\,\%$ Zuwachs einmal pro Jahr. Die Differentialgleichung beschreibt laufendes Wachstum, also $y = 200\,e^{0{,}05t}$.'
hinweise:
  - 'Die Lösung von $y'' = k\,y$ ist $y(t) = y_0\,e^{kt}$.'
loesung: |
  **Ansatz:** Die Gleichung hat den Typ $y' = k\,y$ mit $k = 0{,}05$. Lösung: $y(t) = 200\,e^{0{,}05t}$.
  ---
  $y(10) = 200\,e^{0{,}5} \approx 329{,}7$, also rund $330$ Tiere. **Vergleich:** Mit $5\,\%$ einmal pro Jahr wären es $200\cdot 1{,}05^{10} \approx 326$. Laufendes Wachstum liefert etwas mehr.
```

```aufgabe
id: ir-dgl-zerfall
titel: Abbau eines Medikaments
niveau: 2
lernziel: 9
kompetenz: anwenden
angabe: |
  Ein Medikament wird im Körper nach $m' = -0{,}25\,m$ abgebaut ($t$ in Stunden, $m$ in mg). Am Anfang sind $80$ mg im Blut.

  a) Bestimme die Halbwertszeit auf zwei Dezimalstellen.

  b) Nach welcher Zeit sind nur noch $10$ mg vorhanden? Runde auf zwei Dezimalstellen.
teile:
  - typ: zahl
    label: 'a) Halbwertszeit'
    einheit: h
    loesung: "ln(2)/0.25"
    anzeige: '2{,}77'
    fehler:
      - wert: "0.5/0.25"
        meldung: 'Die Halbwertszeit ist $\frac{\ln 2}{k}$, nicht $\frac{0{,}5}{k}$. Löse $e^{-0{,}25t} = \frac12$ mit dem Logarithmus.'
  - typ: zahl
    label: 'b) Zeit bis 10 mg'
    einheit: h
    loesung: "ln(8)/0.25"
    anzeige: '8{,}32'
    fehler:
      - wert: "70/0.25/80"
        meldung: Der Abbau ist nicht linear. Die Menge sinkt jede Stunde um denselben **Anteil**, nicht um dieselbe Menge.
hinweise:
  - 'Die Lösung ist $m(t) = 80\,e^{-0{,}25t}$.'
  - '$10$ mg sind ein Achtel von $80$ mg. Löse $e^{-0{,}25t} = \frac18$.'
loesung: |
  **Ansatz:** Typ $m' = k\,m$ mit $k = -0{,}25$. Lösung: $m(t) = 80\,e^{-0{,}25t}$.
  ---
  a) Halbe Menge: $e^{-0{,}25t} = \frac12$, also $-0{,}25t = \ln\frac12 = -\ln 2$ und $t = \frac{\ln 2}{0{,}25} \approx 2{,}77$ h.
  ---
  b) $80\,e^{-0{,}25t} = 10$ ergibt $e^{-0{,}25t} = \frac18$, also $t = \frac{\ln 8}{0{,}25} \approx 8{,}32$ h.
  ---
  **Kontrolle:** $\frac18 = \left(\frac12\right)^3$, also drei Halbwertszeiten: $3\cdot 2{,}7726 \approx 8{,}32$ h. Beide Wege stimmen überein.
```

```aufgabe
id: ir-dgl-abkuehlung
titel: Eine Pizza kühlt ab
niveau: 2
lernziel: 9
kompetenz: anwenden
angabe: |
  Eine Pizza kommt mit $200$ °C aus dem Ofen. Die Küche hat $22$ °C. Für die Temperatur gilt $T' = 0{,}08\,(22 - T)$, $t$ in Minuten.

  a) Wie heiß ist die Pizza nach $10$ Minuten? Runde auf eine Dezimalstelle.

  b) Nach welcher Zeit hat sie $60$ °C? Runde auf zwei Dezimalstellen.
teile:
  - typ: zahl
    label: 'a) $T(10)$'
    einheit: °C
    loesung: "22 + 178*exp(-0.8)"
    anzeige: '102{,}0'
    fehler:
      - wert: "200*exp(-0.8)"
        meldung: Die Pizza kühlt nicht auf $0$ °C ab, sondern auf die Küchentemperatur. Exponentiell zerfällt nur der Abstand zu $22$ °C.
      - wert: "22 + 200*exp(-0.8)"
        meldung: 'Der Abstand zur Küchentemperatur ist am Anfang $200 - 22 = 178$ °C, nicht $200$ °C.'
  - typ: zahl
    label: 'b) Zeit bis 60 °C'
    einheit: min
    loesung: "ln(178/38)/0.08"
    anzeige: '19{,}30'
hinweise:
  - 'Lösung: $T(t) = S - (S - T_0)\,e^{-kt}$ mit $S = 22$, $T_0 = 200$ und $k = 0{,}08$.'
  - 'Für b) setze $T(t) = 60$. Dann ist $178\,e^{-0{,}08t} = 38$.'
loesung: |
  **Ansatz:** Typ $y' = k\,(S - y)$, also beschränktes Abklingen zur Grenze $S = 22$ °C. Lösung: $T(t) = 22 + 178\,e^{-0{,}08t}$.
  ---
  a) $T(10) = 22 + 178\,e^{-0{,}8} \approx 22 + 79{,}98 = 102{,}0$ °C.
  ---
  b) $22 + 178\,e^{-0{,}08t} = 60$ ergibt $e^{-0{,}08t} = \frac{38}{178}$. Logarithmieren: $t = \frac{\ln(178/38)}{0{,}08} \approx 19{,}30$ min.
  ---
  **Plausibilität:** Nach $10$ Minuten hat sich der Abstand zu $22$ °C mehr als halbiert. Für $60$ °C muss er auf etwa ein Fünftel sinken. Das dauert etwa doppelt so lange.
gefuehrt:
  - text: Welchen Wert hat die Differenz $S - T_0$ aus Küchentemperatur und Anfangstemperatur? Achte auf das Vorzeichen.
    teil: { typ: zahl, loesung: "-178", fehler: [ { wert: "178", meldung: 'Gefragt ist $S - T_0 = 22 - 200$. Das Vorzeichen ist negativ, weil die Pizza heißer als die Küche ist.' } ] }
    erklaerung: '$S - T_0 = 22 - 200 = -178$. Damit $T(t) = 22 - (-178)\,e^{-0{,}08t} = 22 + 178\,e^{-0{,}08t}$.'
  - text: Berechne $T(10)$ auf eine Dezimalstelle.
    teil: { typ: zahl, loesung: "22 + 178*exp(-0.8)", toleranz: 0.06 }
    erklaerung: '$e^{-0{,}8} \approx 0{,}4493$, also $T(10) \approx 22 + 79{,}98 = 102{,}0$ °C.'
  - text: 'Für $T = 60$: Welchen Wert muss $e^{-0{,}08t}$ haben? Gib ihn als Bruch an.'
    teil: { typ: zahl, loesung: "38/178" }
    erklaerung: '$178\,e^{-0{,}08t} = 60 - 22 = 38$, also $e^{-0{,}08t} = \frac{38}{178}$.'
  - text: Löse nach $t$ auf.
    teil: { typ: zahl, loesung: "ln(178/38)/0.08", toleranz: 0.01 }
    erklaerung: '$-0{,}08t = \ln\frac{38}{178}$, also $t = \frac{\ln(178/38)}{0{,}08} \approx 19{,}30$ min.'
```

```aufgabe
id: ir-dgl-lernkurve
titel: Vokabeln lernen
niveau: 2
lernziel: 9
kompetenz: anwenden
angabe: |
  Eine Lernende will $500$ Vokabeln lernen. Die Zahl $N(t)$ der gelernten Vokabeln nach $t$ Tagen wächst nach
  $N' = 0{,}1\,(500 - N)$ mit $N(0) = 0$. Je mehr noch fehlen, desto schneller lernt sie.

  a) Wie viele Vokabeln kann sie nach $10$ Tagen? Runde auf ganze Vokabeln.

  b) Nach wie vielen Tagen kann sie $400$ Vokabeln? Runde auf zwei Dezimalstellen.
teile:
  - typ: zahl
    label: 'a) $N(10)$'
    loesung: "500*(1 - exp(-1))"
    anzeige: '316'
    toleranz: 0.6
    fehler:
      - wert: "500*exp(-1)"
        meldung: 'Das ist die Zahl der Vokabeln, die nach $10$ Tagen noch **fehlen**. Gelernt sind $500$ minus diese Zahl.'
  - typ: zahl
    label: 'b) Zeit'
    einheit: Tage
    loesung: "10*ln(5)"
    anzeige: '16{,}09'
    fehler:
      - wert: "10*ln(5/4)"
        meldung: 'Bei $400$ gelernten Vokabeln fehlen noch $100$, also ein Fünftel. Löse $e^{-0{,}1t} = \frac15$.'
hinweise:
  - 'Lösung: $N(t) = 500 - 500\,e^{-0{,}1t} = 500\left(1 - e^{-0{,}1t}\right)$.'
  - 'Für b) gilt $500\,e^{-0{,}1t} = 100$.'
loesung: |
  **Ansatz:** Typ $y' = k\,(S - y)$ mit $S = 500$, $k = 0{,}1$ und $y_0 = 0$. Lösung: $N(t) = 500 - 500\,e^{-0{,}1t}$.
  ---
  a) $N(10) = 500\left(1 - e^{-1}\right) \approx 500\cdot 0{,}632 \approx 316$ Vokabeln.
  ---
  b) $500 - 500\,e^{-0{,}1t} = 400$ ergibt $e^{-0{,}1t} = \frac15$. Also $t = 10\ln 5 \approx 16{,}09$ Tage.
  ---
  **Deutung:** Die erste Hälfte geht schnell, danach wird es immer langsamer. Ganz $500$ erreicht das Modell nie, es nähert sich nur an.
```

```aufgabe
id: ir-dgl-typ
titel: Welche Differentialgleichung passt?
niveau: 2
lernziel: 9
kompetenz: modellieren
angabe: |
  Ordne jeder Situation die passende Differentialgleichung zu. Dabei ist $k > 0$ eine Konstante.
teile:
  - typ: auswahl
    label: 'Ein Guthaben wird laufend mit festem Zinssatz verzinst.'
    optionen: ['$y'' = k\,y$', '$y'' = -k\,y$', '$y'' = k\,(S - y)$', '$y'' = c$ (konstant)']
    richtig: [0]
    fehler:
      - wert: 2
        meldung: Ein verzinstes Guthaben hat keine Obergrenze. Die Zinsen wachsen mit dem Guthaben selbst.
  - typ: auswahl
    label: 'Ein Glas kalte Limonade erwärmt sich im Zimmer.'
    optionen: ['$y'' = k\,y$', '$y'' = -k\,y$', '$y'' = k\,(S - y)$', '$y'' = c$ (konstant)']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Die Limonade wird nicht beliebig warm. Sie nähert sich der Zimmertemperatur $S$.
  - typ: auswahl
    label: 'Radioaktives Material zerfällt.'
    optionen: ['$y'' = k\,y$', '$y'' = -k\,y$', '$y'' = k\,(S - y)$', '$y'' = c$ (konstant)']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Beim Zerfall nimmt die Menge ab. Die Ableitung muss also negativ sein.
  - typ: auswahl
    label: 'Ein Tank wird mit konstant $5$ Litern pro Minute gefüllt.'
    optionen: ['$y'' = k\,y$', '$y'' = -k\,y$', '$y'' = k\,(S - y)$', '$y'' = c$ (konstant)']
    richtig: [3]
    fehler:
      - wert: 0
        meldung: Der Zufluss hängt nicht davon ab, wie viel schon im Tank ist. Die Rate ist einfach konstant.
hinweise:
  - Frage dich jeweils, wovon die Änderungsrate abhängt. Vom Bestand selbst, vom Abstand zu einer Grenze oder von gar nichts?
  - 'Wächst oder schrumpft der Bestand? Gibt es eine Grenze, der er sich nähert? Ein Minus vor $k$ bedeutet Abnahme, $S - y$ bedeutet Annäherung an $S$.'
loesung: |
  **Ansatz:** Entscheidend ist, wovon die Änderungsrate abhängt.
  ---
  Guthaben: Die Zinsen sind proportional zum Guthaben, also $y' = k\,y$. Zerfall: Pro Zeit zerfällt ein fester Anteil, also $y' = -k\,y$.
  ---
  Limonade: Die Erwärmung hängt vom Abstand zur Zimmertemperatur ab, also $y' = k\,(S - y)$. Tank: konstante Rate, also $y' = c$ und $y(t) = y_0 + c\,t$.
```

```aufgabe
id: ir-dgl-messung
titel: Abkühlkonstante aus einer Messung
niveau: 3
lernziel: 9
kompetenz: begruenden
angabe: |
  Ein Tee hat $90$ °C, der Raum $20$ °C. Nach $5$ Minuten misst man $60$ °C. Es gilt $T' = k\,(20 - T)$.

  a) Zeige durch Einsetzen, dass $T(t) = 20 + 70\,e^{-kt}$ die Differentialgleichung und den Anfangswert erfüllt.

  b) Bestimme $k$ aus der Messung auf vier Dezimalstellen.

  c) Welche Temperatur hat der Tee nach $15$ Minuten? Runde auf zwei Dezimalstellen.
teile:
  - typ: text
    label: 'a) Nachweis'
    muster: |
      Linke Seite: $T'(t) = -70k\,e^{-kt}$. Rechte Seite: $k\,(20 - T) = k\,(20 - 20 - 70\,e^{-kt}) = -70k\,e^{-kt}$. Beide Seiten
      sind gleich. Anfangswert: $T(0) = 20 + 70 = 90$ °C.
  - typ: zahl
    label: 'b) $k$'
    loesung: "ln(7/4)/5"
    anzeige: '0{,}1119'
  - typ: zahl
    label: 'c) $T(15)$'
    einheit: °C
    loesung: "20 + 70*(4/7)^3"
    anzeige: '33{,}06'
hinweise:
  - 'Für b): $20 + 70\,e^{-5k} = 60$ ergibt $e^{-5k} = \frac47$.'
  - 'Für c) brauchst du $k$ gar nicht als Dezimalzahl. Es ist $e^{-15k} = \left(e^{-5k}\right)^3 = \left(\frac47\right)^3$.'
loesung: |
  **Ansatz:** Erst zeigen, dass die Formel passt. Dann die unbekannte Konstante aus einer Messung bestimmen, wie bei einer Umkehraufgabe.
  ---
  a) $T'(t) = -70k\,e^{-kt}$ und $k\,(20 - T(t)) = -70k\,e^{-kt}$. Beide Seiten sind gleich. Außerdem ist $T(0) = 90$.
  ---
  b) $20 + 70\,e^{-5k} = 60$ ergibt $e^{-5k} = \frac{40}{70} = \frac47$. Logarithmieren: $-5k = \ln\frac47$, also $k = \frac{\ln(7/4)}{5} \approx 0{,}1119$ pro Minute.
  ---
  c) $T(15) = 20 + 70\,e^{-15k} = 20 + 70\cdot\left(\frac47\right)^3 = 20 + \frac{70\cdot 64}{343} \approx 20 + 13{,}06 = 33{,}06$ °C.
  ---
  **Deutung:** Alle $5$ Minuten schrumpft der Abstand zur Raumtemperatur auf $\frac47$: von $70$ auf $40$, dann auf etwa $22{,}9$ und dann auf etwa $13{,}1$ Grad.
```

## Gemischte Wiederholung

In der Prüfung steht nicht dabei, aus welchem Kapitel eine Aufgabe stammt. Du musst selbst erkennen, welches
Werkzeug passt. Deshalb mischt diese Lektion Aufgaben aus diesem Kapitel mit Aufgaben aus früheren
Kapiteln. Dieses gemischte Üben fühlt sich schwerer an als Üben in Blöcken. Es verankert den Stoff aber
nachweislich besser. Löse jede Aufgabe zuerst ohne Hinweise.

```aufgabe
id: ir-wh-tangente
titel: "Wiederholung Kapitel 9: Tangente"
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Bestimme die Gleichung der Tangente an den Graphen von $f(x) = x^3 - 3x$ an der Stelle $x_0 = 2$. Gib sie in der Form
  $y = kx + d$ an. Zum Nachlesen: [9.9 Tangente und Normale](/lernen/mathe3/differentialrechnung/tangente-und-normale-aufstellen).
teile:
  - typ: term
    label: '$y =$'
    loesung: "9x - 16"
    fehler:
      - wert: "9x + 2"
        meldung: 'Die Steigung $9$ stimmt. Aber die Tangente muss durch den Punkt $(2 \mid 2)$ gehen. Setze ein: $2 = 9\cdot 2 + d$.'
      - wert: "2x - 2"
        meldung: 'Als Steigung hast du den Funktionswert $f(2) = 2$ genommen. Die Steigung ist die Ableitung $f''(2)$.'
hinweise:
  - 'Berechne $f(2)$ und $f''(2)$. Die Tangente hat die Steigung $f''(2)$ und geht durch $(2 \mid f(2))$.'
loesung: |
  **Ansatz:** Die Tangente hat die Steigung $k = f'(x_0)$ und geht durch den Punkt $(x_0 \mid f(x_0))$.
  ---
  $f(2) = 8 - 6 = 2$ und $f'(x) = 3x^2 - 3$, also $k = f'(2) = 9$.
  ---
  $2 = 9\cdot 2 + d$ ergibt $d = -16$. Tangente: $y = 9x - 16$. **Probe:** Bei $x = 2$ ist $9\cdot 2 - 16 = 2 = f(2)$.
```

```aufgabe
id: ir-wh-biquadratisch
titel: "Wiederholung Kapitel 2: Nullstellen eines Polynoms vierten Grades"
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Bestimme alle Nullstellen von $f(x) = x^4 - 5x^2 + 4$. Gib sie getrennt durch Strichpunkte an. Solche Nullstellen
  brauchst du als Grenzen bei Flächenaufgaben. Zum Nachlesen:
  [Kapitel 2, Substitution bei biquadratischen Gleichungen](/lernen/mathe3/gleichungen/gleichungen-hoeheren-grades).
teile:
  - typ: menge
    label: 'Nullstellen'
    loesung: ["-2", "-1", "1", "2"]
    fehler:
      - wert: ["1", "4"]
        meldung: 'Das sind die Lösungen für $u = x^2$. Jetzt musst du noch $x^2 = 1$ und $x^2 = 4$ lösen.'
      - wert: ["1", "2"]
        meldung: Beim Wurzelziehen gibt es jeweils zwei Lösungen, eine positive und eine negative.
hinweise:
  - 'Setze $u = x^2$. Dann entsteht die quadratische Gleichung $u^2 - 5u + 4 = 0$.'
loesung: |
  **Ansatz:** Es kommen nur $x^4$ und $x^2$ vor. Mit $u = x^2$ wird daraus eine quadratische Gleichung.
  ---
  $u^2 - 5u + 4 = (u - 1)(u - 4) = 0$, also $u = 1$ oder $u = 4$.
  ---
  Zurück zu $x$: $x^2 = 1$ ergibt $x = \pm 1$, und $x^2 = 4$ ergibt $x = \pm 2$. Die Nullstellen sind $-2$, $-1$, $1$ und $2$.
```

```aufgabe
id: ir-wh-verdopplung
titel: "Wiederholung Kapitel 4: Verdopplungszeit"
niveau: 1
lernziel: 9
kompetenz: rechnen
angabe: |
  Ein Guthaben wächst jedes Jahr um $3\,\%$. Nach wie vielen Jahren hat es sich verdoppelt? Runde auf zwei Dezimalstellen.
  Zum Nachlesen: [Kapitel 4, Verdopplungszeit und Halbwertszeit](/lernen/mathe3/funktionen/wachstums-und-zerfallsmodelle).
teile:
  - typ: zahl
    label: 'Verdopplungszeit'
    einheit: Jahre
    loesung: "ln(2)/ln(1.03)"
    anzeige: '23{,}45'
    fehler:
      - wert: "100/3"
        meldung: 'Das wäre richtig bei linearem Wachstum um $3$ Prozent des **Anfangs**betrags. Bei Zinseszins wächst der Zuwachs mit, also geht es schneller.'
      - wert: "ln(2)/0.03"
        meldung: 'Das ist die Verdopplungszeit für laufendes Wachstum $e^{0{,}03t}$. Bei $3\,\%$ pro Jahr ist der Wachstumsfaktor $1{,}03$.'
hinweise:
  - 'Löse $1{,}03^t = 2$ mit dem Logarithmus.'
loesung: |
  **Ansatz:** Exponentielles Wachstum mit Faktor $1{,}03$ pro Jahr. Gesucht ist $t$ mit $1{,}03^t = 2$.
  ---
  Logarithmieren: $t\cdot\ln 1{,}03 = \ln 2$, also $t = \frac{\ln 2}{\ln 1{,}03} \approx 23{,}45$ Jahre.
```

```aufgabe
id: ir-wh-welches-integral
titel: Welches Verfahren passt bei diesen Integralen?
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Entscheide für jedes Integral, mit welcher Technik du es am schnellsten löst. Rechne nichts aus.
teile:
  - typ: auswahl
    label: '$\int \frac{2x}{x^2 + 7}\,\dd x$'
    optionen: ['Grundintegrale', 'lineare Substitution', 'Zähler ist Ableitung des Nenners', 'partielle Integration']
    richtig: [2]
    fehler:
      - wert: 3
        meldung: 'Leite den Nenner $x^2 + 7$ ab. Was steht im Zähler?'
  - typ: auswahl
    label: '$\int (3x - 1)^7\,\dd x$'
    optionen: ['Grundintegrale', 'lineare Substitution', 'Zähler ist Ableitung des Nenners', 'partielle Integration']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Ausmultiplizieren der siebten Potenz wäre sehr mühsam. Innen steht der lineare Ausdruck $3x - 1$. Dafür gibt es eine Abkürzung.'
  - typ: auswahl
    label: '$\int x^2\,e^{3x}\,\dd x$'
    optionen: ['Grundintegrale', 'lineare Substitution', 'Zähler ist Ableitung des Nenners', 'partielle Integration']
    richtig: [3]
    fehler:
      - wert: 1
        meldung: 'Die lineare Substitution hilft nur für $e^{3x}$ allein. Hier steht noch der Faktor $x^2$ davor: Polynom mal e-Funktion.'
  - typ: auswahl
    label: '$\int \left(\sqrt x + \frac{1}{x}\right)\dd x$'
    optionen: ['Grundintegrale', 'lineare Substitution', 'Zähler ist Ableitung des Nenners', 'partielle Integration']
    richtig: [0]
    fehler:
      - wert: 2
        meldung: 'Der Bruch $\frac1x$ steht direkt in der Tabelle der Grundintegrale. Dazu braucht es keine eigene Technik.'
hinweise:
  - 'Prüfe der Reihe nach: Grundintegral? Linearer innerer Ausdruck? Ableitung des Nenners im Zähler? Produkt aus Polynom und e-Funktion?'
loesung: |
  **Ansatz:** Für jedes Integral prüfen wir das Muster.
  ---
  $\frac{2x}{x^2 + 7}$: Der Zähler $2x$ ist die Ableitung des Nenners, also $\ln(x^2 + 7)$. $(3x - 1)^7$: linearer innerer Ausdruck, also lineare Substitution mit Ergebnis $\frac{(3x - 1)^8}{24}$.
  ---
  $x^2 e^{3x}$: Polynom mal e-Funktion, also zweimal partiell. $\sqrt x + \frac1x$: zwei Grundintegrale, $\frac23 x^{3/2} + \ln\lvert x\rvert$.
```

```aufgabe
id: ir-wh-welcher-ansatz
titel: Welcher Ansatz passt zur Situation?
niveau: 2
lernziel: 7
kompetenz: modellieren
angabe: |
  Ordne jeder Frage den passenden Ansatz zu. Rechne nichts aus.
teile:
  - typ: auswahl
    label: 'Eine Pumpe fördert $p(t)$ Liter pro Minute. Wie viel fördert sie in einer Stunde?'
    optionen: ['$\int_0^{60} p(t)\,\dd t$', '$\frac{1}{60}\int_0^{60} p(t)\,\dd t$', '$\pi\int_0^{60} p(t)^2\,\dd t$', '$p''(60)$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Das ist die durchschnittliche Förderrate, also Liter pro Minute. Gefragt ist die geförderte Menge in Litern.
      - wert: 3
        meldung: Die Ableitung beschreibt, wie schnell sich die Förderrate ändert. Die Menge ist ein Bestand und entsteht durch Integrieren.
  - typ: auswahl
    label: 'Wie hoch ist die durchschnittliche Förderrate in dieser Stunde?'
    optionen: ['$\int_0^{60} p(t)\,\dd t$', '$\frac{1}{60}\int_0^{60} p(t)\,\dd t$', '$\pi\int_0^{60} p(t)^2\,\dd t$', '$p''(60)$']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Das ist die Gesamtmenge. Für den Durchschnitt teilst du noch durch die Zeitdauer.
  - typ: auswahl
    label: 'Eine Schale entsteht durch Rotation von $f(x)$ über $[0, 8]$. Wie viel passt hinein?'
    optionen: ['$\int_0^{8} f(x)\,\dd x$', '$\frac18\int_0^{8} f(x)\,\dd x$', '$\pi\int_0^{8} f(x)^2\,\dd x$', '$f''(8)$']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Das ist eine Fläche im Längsschnitt, kein Volumen. Für das Volumen eines Rotationskörpers brauchst du Kreisscheiben.
  - typ: auswahl
    label: 'Wie schnell ändert sich die Förderrate genau nach einer Stunde?'
    optionen: ['$\int_0^{60} p(t)\,\dd t$', '$\frac{1}{60}\int_0^{60} p(t)\,\dd t$', '$\pi\int_0^{60} p(t)^2\,\dd t$', '$p''(60)$']
    richtig: [3]
    fehler:
      - wert: 1
        meldung: Das ist ein Durchschnitt über die ganze Stunde. „Wie schnell ändert sich etwas in einem Augenblick“ fragt nach der Ableitung.
hinweise:
  - Frage dich bei jeder Situation, ob ein Bestand, ein Durchschnitt, ein Volumen oder eine momentane Änderung gesucht ist.
loesung: |
  **Ansatz:** Bestand aus Rate heißt integrieren. Durchschnitt heißt integrieren und durch die Länge teilen. Volumen eines Rotationskörpers heißt $\pi\int f^2$. Momentane Änderung heißt ableiten.
  ---
  Fördermenge: $\int_0^{60} p(t)\,\dd t$ in Litern. Durchschnittsrate: $\frac{1}{60}\int_0^{60} p(t)\,\dd t$ in Liter pro Minute.
  ---
  Volumen der Schale: $\pi\int_0^8 f(x)^2\,\dd x$. Änderung der Förderrate: $p'(60)$, zum Beispiel in Liter pro Minute pro Minute.
```

```aufgabe
id: ir-wh-summenzeichen
titel: "Wiederholung Kapitel 8: Summenzeichen und Obersumme"
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: |
  a) Berechne $\displaystyle\sum_{k=1}^{4} k^2$. Zum Nachlesen: [Kapitel 8, Das Summenzeichen](/lernen/mathe3/folgen-reihen/das-summenzeichen).

  b) Diese Summe ist eine Obersumme für $\int_0^4 x^2\,\dd x$. Wie viele Streifen hat sie, und wie breit ist jeder?
  Gib die Streifenbreite an.

  c) Um wie viel ist die Obersumme größer als das exakte Integral? Runde auf zwei Dezimalstellen.
teile:
  - typ: zahl
    label: 'a) Summe'
    loesung: "1 + 4 + 9 + 16"
    fehler:
      - wert: "1 + 2 + 3 + 4"
        meldung: 'Summiert werden die Quadrate $k^2$, nicht die Zahlen $k$ selbst.'
  - typ: zahl
    label: 'b) Streifenbreite'
    loesung: "1"
  - typ: zahl
    label: 'c) Unterschied'
    loesung: "30 - 64/3"
    anzeige: '8{,}67'
    fehler:
      - wert: "64/3"
        meldung: 'Das ist das exakte Integral. Gefragt ist der Unterschied $30 - \frac{64}{3}$.'
hinweise:
  - 'Setze $k = 1, 2, 3, 4$ ein und addiere die Quadrate.'
  - 'Bei $4$ Streifen auf $[0, 4]$ ist jeder Streifen $1$ breit. Die rechten Ränder sind $1, 2, 3, 4$.'
loesung: |
  **Ansatz:** Das Summenzeichen ist eine Kurzschrift für eine Summe. Rechtecksummen aus diesem Kapitel sind genau solche Summen.
  ---
  a) $1 + 4 + 9 + 16 = 30$.
  ---
  b) Vier Streifen der Breite $\Delta x = 1$. Jeder Summand $k^2\cdot 1$ ist ein Rechteck mit der Höhe am rechten Rand. Weil $x^2$ wächst, ist das die Obersumme.
  ---
  c) Exakt: $\int_0^4 x^2\,\dd x = \frac{64}{3} \approx 21{,}33$. Unterschied: $30 - 21{,}33 \approx 8{,}67$. Mit nur vier Streifen ist die Näherung noch grob.
```

```aufgabe
id: ir-wh-subst-bestimmt
titel: Substitution mit e-Funktion
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Berechne $\displaystyle\int_0^1 2x\,e^{x^2}\,\dd x$ exakt und auf drei Dezimalstellen.
teile:
  - typ: zahl
    loesung: "e - 1"
    anzeige: 'e - 1 \approx 1{,}718'
    fehler:
      - wert: "e"
        meldung: 'Die untere Grenze liefert $e^{0} = 1$, nicht $0$. Ziehe sie ab.'
      - wert: "(e - 1)/2"
        meldung: 'Der Faktor $2x$ ist schon genau $\dd u$ für $u = x^2$. Ein Ausgleich mit $\frac12$ ist hier nicht nötig.'
hinweise:
  - '$u = x^2$, $\dd u = 2x\,\dd x$. Die Grenzen werden zu $0$ und $1$.'
  - 'Danach bleibt $\int_0^1 e^u\,\dd u$.'
loesung: |
  **Ansatz:** Im Exponenten steht der innere Ausdruck $x^2$. Seine Ableitung $2x$ steht genau als Faktor davor. Also Substitution.
  ---
  $u = x^2$, $\dd u = 2x\,\dd x$. Grenzen: $x = 0$ ergibt $u = 0$, $x = 1$ ergibt $u = 1$.
  ---
  $\int_0^1 e^u\,\dd u = e^1 - e^0 = e - 1 \approx 1{,}718$.
```

```aufgabe
id: ir-wh-integralfunktion
titel: Integralfunktion des Logarithmus
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  Es sei $I(x) = \displaystyle\int_1^x \ln t\,\dd t$ für $x > 0$.

  a) Berechne $I'(e)$ ohne Stammfunktion.

  b) Berechne $I(e)$. Eine Stammfunktion von $\ln t$ ist $t\ln t - t$.
teile:
  - typ: zahl
    label: "a) $I'(e)$"
    loesung: "ln(e)"
    fehler:
      - wert: "0"
        meldung: "Nach dem Hauptsatz ist $I'(x) = \\ln x$. An der Stelle $e$ ist das $\\ln e = 1$."
  - typ: zahl
    label: 'b) $I(e)$'
    loesung: "(e*ln(e) - e) - (1*ln(1) - 1)"
    fehler:
      - wert: "0"
        meldung: 'Die untere Grenze $1$ liefert $1\cdot\ln 1 - 1 = -1$. Das wird abgezogen.'
hinweise:
  - "Hauptsatz: Die Ableitung einer Integralfunktion ist der Integrand an der oberen Grenze."
  - 'Für b): $\big[t\ln t - t\big]_1^e$, mit $\ln e = 1$ und $\ln 1 = 0$.'
loesung: |
  **Ansatz:** Teil a) ist der Hauptsatz, Teil b) ein bestimmtes Integral mit gegebener Stammfunktion.
  ---
  a) $I'(x) = \ln x$, also $I'(e) = 1$.
  ---
  b) $I(e) = \big[t\ln t - t\big]_1^e = (e - e) - (0 - 1) = 1$.
```

```aufgabe
id: ir-wh-flaeche-zwei
titel: Fläche zwischen Parabel und Ursprungsgerade
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Berechne die Fläche, die die Graphen von $f(x) = x^2 - 2x$ und $g(x) = x$ einschließen.
teile:
  - typ: zahl
    label: 'Fläche'
    loesung: "(3/2*9 - 9) - 0"
    anzeige: '\tfrac92 = 4{,}5'
    fehler:
      - wert: "-9/2"
        meldung: 'Du hast „Parabel minus Gerade“ gerechnet. Zwischen den Schnittstellen liegt die Gerade oben, zum Beispiel ist $g(1) = 1 > f(1) = -1$.'
hinweise:
  - 'Schnittstellen: $x^2 - 2x = x$, also $x^2 - 3x = 0$.'
  - 'Integriere $g - f = 3x - x^2$ von $0$ bis $3$.'
loesung: |
  **Ansatz:** Fläche zwischen zwei Kurven: Schnittstellen bestimmen, dann „obere minus untere Kurve“ integrieren.
  ---
  $x^2 - 3x = x(x - 3) = 0$ ergibt $x = 0$ und $x = 3$. Testwert $x = 1$: $g(1) = 1$, $f(1) = -1$. Die Gerade liegt oben.
  ---
  $A = \int_0^3 (3x - x^2)\,\dd x = \left[\frac32 x^2 - \frac{x^3}{3}\right]_0^3 = \frac{27}{2} - 9 = \frac92$. **Kontrolle** mit der Formel $\frac{(x_2 - x_1)^3}{6} = \frac{27}{6} = \frac92$. Sie gilt hier, weil in der Differenz $3x - x^2$ vor $x^2$ der Faktor $-1$ steht, also der Betrag $1$.
```

```aufgabe
id: ir-wh-trig-flaeche
titel: "Wiederholung Kapitel 5: Sinusbogen über einer Geraden"
niveau: 3
lernziel: 3
kompetenz: anwenden
angabe: |
  a) Löse $\sin x = \frac12$ im Intervall $[0, 2\pi]$. Gib die Lösungen im Bogenmaß an. Zum Nachlesen:
  [Kapitel 5, Trigonometrische Gleichungen](/lernen/mathe3/trigonometrie/trigonometrische-gleichungen).

  b) Berechne die Fläche, die der Graph von $\sin x$ mit der waagrechten Geraden $y = \frac12$ einschließt. Gib das
  Ergebnis exakt und auf drei Dezimalstellen an.
teile:
  - typ: menge
    label: 'a) Lösungen'
    loesung: ["pi/6", "5*pi/6"]
    fehler:
      - wert: ["pi/6"]
        meldung: 'Der Sinus ist im ersten und im zweiten Quadranten positiv. Es gibt also eine zweite Lösung $\pi - \frac\pi6$.'
      - wert: ["30", "150"]
        meldung: Das sind Gradzahlen. Gefragt ist das Bogenmaß.
  - typ: zahl
    label: 'b) Fläche'
    loesung: "sqrt(3) - pi/3"
    anzeige: '\sqrt3 - \tfrac{\pi}{3} \approx 0{,}685'
hinweise:
  - 'Für a): Der Grundwinkel ist $\frac\pi6$. Die zweite Lösung ist $\pi - \frac\pi6$.'
  - 'Für b): Zwischen den Schnittstellen liegt der Sinus oben. Integriere $\sin x - \frac12$ von $\frac\pi6$ bis $\frac{5\pi}{6}$.'
loesung: |
  **Ansatz:** Die Schnittstellen sind die Lösungen von a). Dazwischen liegt der Sinus über der Geraden.
  ---
  a) $\sin\frac\pi6 = \frac12$. Wegen $\sin(\pi - x) = \sin x$ ist auch $\frac{5\pi}{6}$ eine Lösung. Weitere gibt es in $[0, 2\pi]$ nicht, denn dort ist der Sinus nur in den ersten beiden Quadranten positiv.
  ---
  b) $A = \int_{\pi/6}^{5\pi/6}\left(\sin x - \frac12\right)\dd x = \left[-\cos x - \frac{x}{2}\right]_{\pi/6}^{5\pi/6}$.
  ---
  Oben: $-\cos\frac{5\pi}{6} - \frac{5\pi}{12} = \frac{\sqrt3}{2} - \frac{5\pi}{12}$. Unten: $-\frac{\sqrt3}{2} - \frac{\pi}{12}$. Differenz: $\sqrt3 - \frac{4\pi}{12} = \sqrt3 - \frac\pi3 \approx 0{,}685$.
  ---
  **Plausibilität:** Das Flächenstück ist etwa $2{,}1$ breit und höchstens $0{,}5$ hoch. Ein Wert unter $1{,}05$ passt.
```

## Prüfungsaufgaben

Diese Aufgaben haben das Format der schriftlichen Prüfung: mehrere Teilaufgaben, ein Sachkontext, Skizzen und
Begründungen. Bei jeder Aufgabe steht ein Zeitrichtwert. In den Musterprüfungen hast du $120$ Minuten für vier
bis sechs solche Aufgaben. Erlaubt sind ein Taschenrechner ohne Grafik und die Formelsammlung. Schreib bei jeder Teilaufgabe
zuerst den Ansatz hin, dann die Rechnung, dann einen Antwortsatz mit Einheit.

```aufgabe
id: ir-pruefung-bremsweg
titel: Bremsen vor dem Zebrastreifen
niveau: 3
punkte: 10
lernziel: 6
kompetenz: modellieren
quelle: nach Musterprüfung Karigl, Aufgabe 4 (abgewandelt)
angabe: |
  Zeitrichtwert: $20$ Minuten.

  Ein Auto fährt mit $72$ km/h auf einen Zebrastreifen zu und bremst voll. Die Geschwindigkeit $t$ Sekunden nach
  Beginn des Bremsvorgangs ist $v(t) = c - 0{,}8\,t^2$ (in m/s).

  a) Bestimme die Konstante $c$. Wie lange dauert der Bremsvorgang? Skizziere die Geschwindigkeits-Zeit-Funktion.
  Achte auf die verschiedenen Einheiten.

  b) Berechne den Bremsweg $s$ als Integral $s = \int_a^b v(t)\,\dd t$ mit passenden Grenzen $a$ und $b$.

  c) Wie groß ist die mittlere Geschwindigkeit während des Bremsens, in m/s und in km/h?
teile:
  - typ: zahl
    label: 'a) $c$'
    einheit: m/s
    loesung: "72/3.6"
    fehler:
      - wert: "72"
        meldung: Das ist die Geschwindigkeit in km/h. Die Formel für $v(t)$ rechnet in m/s. Teile durch $3{,}6$.
  - typ: zahl
    label: 'a) Bremsdauer'
    einheit: s
    loesung: "sqrt(20/0.8)"
  - typ: text
    label: 'a) Skizze'
    muster: |
      Nach unten offener Parabelbogen $v(t) = 20 - 0{,}8\,t^2$, gezeichnet nur für $0 \le t \le 5$. Er beginnt bei
      $(0 \mid 20)$ mit waagrechter Tangente, fällt immer steiler und erreicht bei $(5 \mid 0)$ die $t$-Achse. Die Achsen
      sind mit $t$ in s und $v$ in m/s beschriftet. Die Fläche unter dem Bogen ist der Bremsweg.
  - typ: zahl
    label: 'b) Bremsweg'
    einheit: m
    loesung: "20*5 - 0.8*5^3/3"
    anzeige: '\tfrac{200}{3} \approx 66{,}67'
    fehler:
      - wert: "20*5"
        meldung: Das wäre der Weg bei konstanter Geschwindigkeit. Die Geschwindigkeit sinkt aber auf null.
  - typ: zahl
    label: 'c) mittlere Geschwindigkeit'
    einheit: m/s
    loesung: "(200/3)/5"
    anzeige: '\tfrac{40}{3} \approx 13{,}33'
hinweise:
  - '$72$ km/h in m/s umrechnen: durch $3{,}6$ teilen. Zu Beginn ist $t = 0$, also $v(0) = c$.'
  - 'Der Bremsvorgang endet bei $v(t) = 0$. Das liefert die obere Grenze $b$. Die untere Grenze ist der Bremsbeginn.'
  - 'Mittlere Geschwindigkeit $= \frac{1}{b - a}\int_a^b v(t)\,\dd t$, also Bremsweg durch Bremsdauer.'
loesung: |
  **a)** $72$ km/h $= \frac{72}{3{,}6}$ m/s $= 20$ m/s. Zu Beginn gilt $v(0) = c$, also $c = 20$ und $v(t) = 20 - 0{,}8\,t^2$.
  ---
  Bremsdauer: $20 - 0{,}8\,t^2 = 0$ ergibt $t^2 = 25$, also $t = 5$ s. Die Lösung $t = -5$ liegt vor dem Bremsbeginn und entfällt. Skizze: Parabelbogen von $(0 \mid 20)$ nach $(5 \mid 0)$. Nur dieses Stück ist physikalisch sinnvoll.
  ---
  **b)** Grenzen: $a = 0$ (Bremsbeginn) und $b = 5$ (Stillstand). Auf $[0, 5]$ ist $v \ge 0$, das Integral ist also der Weg.
  $$s = \int_0^5 \left(20 - 0{,}8\,t^2\right)\dd t = \left[20t - \frac{0{,}8\,t^3}{3}\right]_0^5 = 100 - \frac{100}{3} = \frac{200}{3} \approx 66{,}67\text{ m}.$$
  ---
  **c)** $\bar v = \frac{1}{5}\cdot\frac{200}{3} = \frac{40}{3} \approx 13{,}33$ m/s. In km/h: $13{,}33\cdot 3{,}6 = 48$ km/h.
  ---
  **Antwort:** Das Auto steht nach $5$ s und rund $67$ m. **Plausibilität:** Mit konstant $20$ m/s wären es $100$ m, bei gleichmäßiger Abbremsung $50$ m. Der Wert liegt dazwischen.
```

```aufgabe
id: ir-pruefung-flaechen-polynom
titel: Flächen bei einem Polynom vierten Grades
niveau: 3
punkte: 10
lernziel: 3
kompetenz: rechnen
angabe: |
  Zeitrichtwert: $20$ Minuten.

  Gegeben ist $f(x) = 8 + 2x^2 - x^4$. Die Hochpunkte des Graphen liegen bei $H_{1,2}(\pm 1 \mid 9)$.

  a) Bestimme die Nullstellen von $f$.

  b) Berechne die Fläche, die der Graph von $f$ mit der $x$-Achse einschließt. Gib das Ergebnis exakt und auf zwei
  Dezimalstellen an.

  c) Berechne die Fläche, die der Graph mit der waagrechten Tangente durch die beiden Hochpunkte einschließt.
plot:
  x: [-2.4, 2.4]
  y: [-2, 10]
  graphen:
    - { f: "8 + 2x^2 - x^4", farbe: 0 }
    - { f: "9", farbe: 1, gestrichelt: true }
teile:
  - typ: menge
    label: 'a) Nullstellen'
    loesung: ["-2", "2"]
    fehler:
      - wert: ["2"]
        meldung: 'Aus $x^2 = 4$ folgen zwei Lösungen, $x = 2$ und $x = -2$.'
      - wert: ["4"]
        meldung: '$u = x^2 = 4$ ist ein Zwischenschritt. Daraus folgen zwei Werte für $x$.'
  - typ: zahl
    label: 'b) Fläche mit der $x$-Achse'
    loesung: "2*(8*2 + 2*8/3 - 32/5)"
    anzeige: '\tfrac{448}{15} \approx 29{,}87'
    fehler:
      - wert: "8*2 + 2*8/3 - 32/5"
        meldung: Das ist nur die Fläche rechts der $y$-Achse. Wegen der Symmetrie ist die gesamte Fläche doppelt so groß.
  - typ: zahl
    label: 'c) Fläche mit der Tangente $y = 9$'
    loesung: "2*(1 - 2/3 + 1/5)"
    anzeige: '\tfrac{16}{15} \approx 1{,}07'
hinweise:
  - 'a) Setze $u = x^2$. Dann ist $u^2 - 2u - 8 = 0$. Nur $u \ge 0$ ergibt reelle $x$.'
  - 'b) $f$ ist gerade, der Graph also symmetrisch zur $y$-Achse: $A = 2\int_0^2 f(x)\,\dd x$.'
  - 'c) Die Differenz ist $9 - f(x) = 1 - 2x^2 + x^4 = \left(1 - x^2\right)^2 \ge 0$. Integriere von $-1$ bis $1$.'
loesung: |
  **a)** $8 + 2x^2 - x^4 = 0$ ist gleichwertig mit $x^4 - 2x^2 - 8 = 0$. Mit $u = x^2$: $u^2 - 2u - 8 = (u - 4)(u + 2) = 0$. $u = -2$ ergibt keine reelle Lösung, $u = 4$ ergibt $x = \pm 2$.
  ---
  **b)** Zwischen $-2$ und $2$ ist $f \ge 0$, zum Beispiel $f(0) = 8$. Wegen der Symmetrie:
  $$A = 2\int_0^2\left(8 + 2x^2 - x^4\right)\dd x = 2\left[8x + \frac{2x^3}{3} - \frac{x^5}{5}\right]_0^2 = 2\left(16 + \frac{16}{3} - \frac{32}{5}\right).$$
  ---
  Hauptnenner $15$: $16 + \frac{16}{3} - \frac{32}{5} = \frac{240 + 80 - 96}{15} = \frac{224}{15}$. Also $A = \frac{448}{15} \approx 29{,}87$.
  ---
  **c)** Die Tangente $y = 9$ berührt den Graphen bei $x = \pm 1$. Dazwischen liegt $f$ darunter, denn $9 - f(x) = \left(1 - x^2\right)^2 \ge 0$.
  ---
  $$A = \int_{-1}^{1}\left(1 - 2x^2 + x^4\right)\dd x = 2\left[x - \frac{2x^3}{3} + \frac{x^5}{5}\right]_0^1 = 2\left(1 - \frac23 + \frac15\right) = 2\cdot\frac{8}{15} = \frac{16}{15} \approx 1{,}07.$$
  **Antwort:** Die Fläche mit der $x$-Achse ist etwa $29{,}87$, die Fläche mit der Tangente etwa $1{,}07$ Flächeneinheiten.
```

```aufgabe
id: ir-pruefung-sektglas
titel: Volumen eines großen Weinglases
niveau: 3
punkte: 8
lernziel: 7
kompetenz: modellieren
angabe: |
  Zeitrichtwert: $15$ Minuten.

  Der Innenraum eines großen Rotweinglases entsteht durch Rotation des Graphen von $f(x) = 2\sqrt{x}$ ($0 \le x \le 9$, alle Längen
  in cm) um die $x$-Achse. Dabei ist $x$ die Höhe über dem tiefsten Punkt des Kelchs.

  a) Berechne das Fassungsvermögen des Glases in cm³ und in Litern.

  b) Bis zu welcher Höhe $h$ muss man einschenken, damit das Glas genau halb voll ist? Warum ist $h$ nicht $4{,}5$ cm?
teile:
  - typ: zahl
    label: 'a) Volumen'
    einheit: cm³
    loesung: "pi*2*9^2"
    anzeige: '162\pi \approx 508{,}9'
    fehler:
      - wert: "pi*2*sqrt(9)^3*2/3"
        meldung: Im Volumenintegral steht $f(x)^2 = 4x$, nicht $f(x)$.
  - typ: zahl
    label: 'b) Füllhöhe $h$'
    einheit: cm
    loesung: "sqrt(40.5)"
    anzeige: '\sqrt{40{,}5} \approx 6{,}36'
  - typ: text
    label: 'b) Begründung'
    muster: |
      Das Glas wird nach oben hin breiter. Die untere Hälfte der Höhe enthält deshalb weniger als die Hälfte des Volumens,
      genau ein Viertel, denn $V(h) = 2\pi h^2$ wächst quadratisch. Für das halbe Volumen muss man höher als $4{,}5$ cm füllen.
hinweise:
  - '$V(h) = \pi\int_0^h \left(2\sqrt x\right)^2\dd x = \pi\int_0^h 4x\,\dd x$.'
  - 'Für b): $V(h) = \frac12 V(9)$ nach $h$ auflösen.'
loesung: |
  **a)** Volumen bis zur Höhe $h$: $V(h) = \pi\int_0^h 4x\,\dd x = \pi\big[2x^2\big]_0^h = 2\pi h^2$.
  ---
  Für $h = 9$: $V = 162\pi \approx 508{,}9$ cm³. Wegen $1$ L $= 1000$ cm³ sind das rund $0{,}51$ Liter.
  ---
  **b)** Halbe Füllung: $2\pi h^2 = 81\pi$ ergibt $h^2 = 40{,}5$ und $h = \sqrt{40{,}5} \approx 6{,}36$ cm.
  ---
  Bei halber Höhe $4{,}5$ cm wäre $V = 2\pi\cdot 4{,}5^2 = 40{,}5\pi$, also nur ein Viertel des Gesamtvolumens. Das Glas ist oben breiter, deshalb steckt dort mehr Volumen. **Antwort:** Man muss bis etwa $6{,}4$ cm einschenken.
```

```aufgabe
id: ir-pruefung-downloads
titel: Downloads einer App
niveau: 3
punkte: 10
lernziel: 5
kompetenz: modellieren
angabe: |
  Zeitrichtwert: $20$ Minuten.

  Nach dem Start einer App wird die Zahl der Downloads pro Tag modelliert durch
  $$r(t) = 500\,t\,e^{-0{,}1t} \qquad (t \text{ in Tagen nach dem Start}).$$

  a) Zu welchem Zeitpunkt ist die Downloadrate maximal, und wie groß ist sie dann?

  b) Berechne die Gesamtzahl der Downloads in den ersten $30$ Tagen. Runde auf ganze Downloads.

  c) Erkläre, warum man für b) integrieren muss und nicht einfach $30\cdot r(30)$ rechnen darf.
teile:
  - typ: zahl
    label: 'a) Zeitpunkt'
    einheit: Tage
    loesung: "10"
  - typ: zahl
    label: 'a) maximale Rate'
    einheit: Downloads/Tag
    loesung: "500*10*exp(-1)"
    anzeige: '\tfrac{5000}{e} \approx 1839'
  - typ: zahl
    label: 'b) Downloads in 30 Tagen'
    loesung: "500*(100 - 400*exp(-3))"
    anzeige: '50000 - 200000\,e^{-3} \approx 40043'
    toleranz: 1
    fehler:
      - wert: "30*500*30*exp(-3)"
        meldung: Das ist „Rate am Tag 30 mal 30 Tage“. Die Rate ändert sich aber laufend. Die Gesamtzahl ist das Integral der Rate.
  - typ: text
    label: 'c) Begründung'
    muster: |
      Die Rate ist nicht konstant: Sie steigt zuerst bis $t = 10$ und fällt dann. „Rate mal Zeit“ gilt nur bei konstanter Rate.
      Die Gesamtzahl ist die Summe sehr vieler kleiner Beiträge $r(t)\,\Delta t$, im Grenzwert also das Integral
      $\int_0^{30} r(t)\,\dd t$, die Fläche unter dem Graphen der Rate.
hinweise:
  - 'a) Produktregel: $r''(t) = 500\,e^{-0{,}1t}\,(1 - 0{,}1t)$.'
  - 'b) Partielle Integration mit $u = t$ und $v'' = e^{-0{,}1t}$, also $v = -10\,e^{-0{,}1t}$.'
loesung: |
  **a)** Produktregel: $r'(t) = 500\left(e^{-0{,}1t} - 0{,}1t\,e^{-0{,}1t}\right) = 500\,e^{-0{,}1t}(1 - 0{,}1t)$. Weil $e^{-0{,}1t} > 0$ ist, gilt $r'(t) = 0$ genau für $t = 10$.
  ---
  Für $t < 10$ ist $r' > 0$, danach $r' < 0$. Also liegt bei $t = 10$ ein Maximum. $r(10) = 5000\,e^{-1} \approx 1839$ Downloads pro Tag.
  ---
  **b)** Partielle Integration: $\int t\,e^{-0{,}1t}\,\dd t = -10t\,e^{-0{,}1t} - \int(-10)\,e^{-0{,}1t}\,\dd t = -10t\,e^{-0{,}1t} - 100\,e^{-0{,}1t}$.
  ---
  Grenzen: $\int_0^{30} t\,e^{-0{,}1t}\,\dd t = \left(-300e^{-3} - 100e^{-3}\right) - (0 - 100) = 100 - 400e^{-3} \approx 80{,}085$. Mal $500$ ergibt rund $40\,043$ Downloads.
  ---
  **c)** Die Rate ändert sich ständig. $30\cdot r(30) = 30\cdot 15\,000\,e^{-3} \approx 22\,404$ würde so tun, als hätte an jedem Tag die Rate von Tag $30$ gegolten. Das unterschätzt die Downloads um fast die Hälfte. Das Integral summiert die Beiträge $r(t)\,\dd t$ aller Zeitpunkte.
```

```aufgabe
id: ir-pruefung-parameter-k
titel: Parabel und Gerade mit Parameter
niveau: 3
punkte: 6
lernziel: 4
kompetenz: begruenden
angabe: |
  Zeitrichtwert: $12$ Minuten.

  Für $k > 0$ schließen die Parabel $f(x) = x^2$ und die Gerade $g_k(x) = kx$ eine Fläche $A(k)$ ein.

  a) Zeige, dass $A(k) = \frac{k^3}{6}$ gilt.

  b) Für welches $k$ beträgt die Fläche $36$ Flächeneinheiten?

  c) Um welchen Faktor wächst die Fläche, wenn man $k$ verdoppelt?
teile:
  - typ: text
    label: 'a) Herleitung'
    muster: |
      Schnittstellen aus $x^2 = kx$, also $x(x - k) = 0$: $x = 0$ und $x = k$. Dazwischen liegt die Gerade oben, zum Beispiel ist
      bei $x = \frac k2$ der Wert $\frac{k^2}{2}$ größer als $\frac{k^2}{4}$.
      $A(k) = \int_0^k (kx - x^2)\,\dd x = \left[\frac{kx^2}{2} - \frac{x^3}{3}\right]_0^k = \frac{k^3}{2} - \frac{k^3}{3} = \frac{k^3}{6}$.
  - typ: zahl
    label: 'b) $k$'
    loesung: "nthRoot(6*36, 3)"
    fehler:
      - wert: "216"
        meldung: '$k^3 = 216$ ist ein Zwischenschritt. Ziehe noch die dritte Wurzel.'
  - typ: zahl
    label: 'c) Faktor'
    loesung: "2^3"
    fehler:
      - wert: "2"
        meldung: Mit $k$ wachsen sowohl die Breite als auch die Höhe des Flächenstücks. Setze $2k$ in $\frac{k^3}{6}$ ein.
hinweise:
  - 'Schnittstellen aus $x^2 = kx$. Teste, welche Kurve dazwischen oben liegt.'
  - 'b) $\frac{k^3}{6} = 36$ ergibt $k^3 = 216$. c) Vergleiche $A(2k)$ mit $A(k)$.'
loesung: |
  **a)** Schnittstellen: $x^2 = kx$ ergibt $x(x - k) = 0$, also $x = 0$ und $x = k$. Die Gerade liegt dazwischen oben.
  $A(k) = \int_0^k (kx - x^2)\,\dd x = \frac{k^3}{2} - \frac{k^3}{3} = \frac{k^3}{6}$.
  ---
  **b)** $\frac{k^3}{6} = 36$ ergibt $k^3 = 216$, also $k = 6$. **Probe:** $\frac{216}{6} = 36$.
  ---
  **c)** $A(2k) = \frac{(2k)^3}{6} = \frac{8k^3}{6} = 8\,A(k)$. Doppeltes $k$ ergibt die achtfache Fläche. Breite und Höhe des Flächenstücks wachsen beide mit.
```

```aufgabe
id: ir-pruefung-rueckhaltebecken
titel: Ein Rückhaltebecken bei Starkregen
niveau: 3
punkte: 10
lernziel: 6
kompetenz: modellieren
angabe: |
  Zeitrichtwert: $20$ Minuten.

  Ein Rückhaltebecken enthält zu Beginn eines Starkregens $50\,000$ m³ Wasser. Die Änderungsrate des Inhalts (Zufluss
  minus Abfluss) wird für die nächsten $10$ Stunden modelliert durch
  $$r(t) = 0{,}3\,t^2 - 3\,t + 6 \qquad (r \text{ in } 1000\,\text{m}^3 \text{ pro Stunde}, t \text{ in Stunden}).$$

  a) In welchem Zeitraum nimmt der Inhalt ab? Gib Anfang und Ende auf zwei Dezimalstellen an.

  b) Stelle eine Formel für den Inhalt $V(t)$ in $1000$ m³ auf und berechne den Inhalt nach $10$ Stunden.

  c) Wann ist der Inhalt im Zeitraum $[0, 10]$ am größten? Begründe, warum nicht die Stelle aus a) die Antwort ist.
teile:
  - typ: zahl
    label: 'a) Beginn der Abnahme'
    einheit: h
    loesung: "5 - sqrt(5)"
    anzeige: '2{,}76'
  - typ: zahl
    label: 'a) Ende der Abnahme'
    einheit: h
    loesung: "5 + sqrt(5)"
    anzeige: '7{,}24'
  - typ: zahl
    label: 'b) Inhalt nach 10 h (in 1000 m³)'
    loesung: "50 + 0.1*1000 - 1.5*100 + 6*10"
    fehler:
      - wert: "10"
        meldung: Das ist nur die Änderung. Die $50$ Tausend m³ vom Anfang kommen noch dazu.
  - typ: text
    label: 'c) Zeitpunkt und Begründung'
    muster: |
      $V(t) = 50 + 0{,}1\,t^3 - 1{,}5\,t^2 + 6t$. Bei $t = 5 - \sqrt5 \approx 2{,}76$ h hat $V$ ein lokales Maximum mit
      $V \approx 57{,}24$, also rund $57\,240$ m³. Danach nimmt der Inhalt bis $t \approx 7{,}24$ h ab und steigt dann wieder.
      Am Rand $t = 10$ ist $V(10) = 60$, also $60\,000$ m³. Das ist mehr als das lokale Maximum. Der größte Inhalt wird also
      am Ende des Zeitraums erreicht, bei $t = 10$ h. Ein lokales Maximum ist nicht automatisch das größte im ganzen Intervall.
hinweise:
  - 'a) Der Inhalt nimmt ab, wo $r(t) < 0$ ist. Löse $0{,}3\,t^2 - 3\,t + 6 = 0$, also $t^2 - 10t + 20 = 0$.'
  - 'b) $V(t) = 50 + \int_0^t r(s)\,\dd s$. c) Vergleiche das lokale Maximum mit dem Wert am Rand $t = 10$.'
loesung: |
  **a)** Abnahme bei $r(t) < 0$. Nullstellen: $0{,}3\,t^2 - 3t + 6 = 0$, nach Teilen durch $0{,}3$: $t^2 - 10t + 20 = 0$. Lösungsformel: $t = 5 \pm\sqrt{25 - 20} = 5 \pm\sqrt5$.
  ---
  Die Parabel $r$ ist nach oben offen. Zwischen den Nullstellen ist sie negativ. Der Inhalt nimmt also von $t \approx 2{,}76$ h bis $t \approx 7{,}24$ h ab.
  ---
  **b)** $V(t) = 50 + \int_0^t\left(0{,}3\,s^2 - 3s + 6\right)\dd s = 50 + 0{,}1\,t^3 - 1{,}5\,t^2 + 6t$. Nach $10$ h: $V(10) = 50 + 100 - 150 + 60 = 60$, also $60\,000$ m³.
  ---
  **c)** Bei $t_1 = 5 - \sqrt5$ wechselt $r$ von plus nach minus, dort hat $V$ ein lokales Maximum. $V(t_1) = 50 + 5 + \sqrt5 \approx 57{,}24$. Bei $t_2 = 5 + \sqrt5$ liegt ein lokales Minimum mit $V(t_2) = 50 + 5 - \sqrt5 \approx 52{,}76$.
  ---
  Am Rand ist $V(10) = 60 > 57{,}24$. **Antwort:** Am meisten Wasser enthält das Becken am Ende, nach $10$ Stunden, mit $60\,000$ m³. Das lokale Maximum bei $2{,}76$ h ist nicht das größte im Zeitraum, weil der Inhalt nach $7{,}24$ h wieder stark steigt.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, bevor du weiterliest. Was würdest du jemandem sagen, der wissen will, worum es in der Integralrechnung geht?
antwort: |
  Eine mögliche Antwort mit drei Aussagen:
  1. Integrieren ist Ableiten rückwärts. Eine Stammfunktion $F$ von $f$ erfüllt $F' = f$, und alle Stammfunktionen
     unterscheiden sich nur um eine Konstante.
  2. Das bestimmte Integral ist eine Flächenbilanz, der Grenzwert von Rechtecksummen. Der Hauptsatz verbindet beides:
     $\int_a^b f(x)\,\dd x = F(b) - F(a)$.
  3. In Anwendungen gilt: Endbestand gleich Anfangsbestand plus Integral der Änderungsrate. So erhält man Wege,
     Mengen, Volumen, Mittelwerte und Arbeit.

  Vergleiche mit dem Kasten „Zusammenfassung“ direkt nach dieser Frage. Fehlt dir eine Aussage, lies die zugehörige Lektion noch einmal.
```

:::zusammenfassung
1. **Stammfunktion:** $F$ ist eine Stammfunktion von $f$, wenn $F' = f$ gilt. Auf einem Intervall unterscheiden sich alle Stammfunktionen nur um eine Konstante $C$. Jede Stammfunktion prüfst du durch Ableiten.
2. **Bestimmtes Integral:** $\int_a^b f(x)\,\dd x$ ist der Grenzwert von Rechtecksummen. Es ist eine Flächenbilanz: Stücke unter der $x$-Achse zählen negativ.
3. **Hauptsatz:** Für stetiges $f$ ist die Integralfunktion $I_a(x) = \int_a^x f(t)\,\dd t$ eine Stammfunktion, und es gilt $\int_a^b f(x)\,\dd x = F(b) - F(a)$.
4. **Flächen:** Für eine Fläche teilst du an den Nullstellen beziehungsweise Schnittstellen auf und addierst die Beträge. Zwischen zwei Kurven integrierst du „obere minus untere Kurve“.
5. **Techniken:** Substitution ist die rückwärts gelesene Kettenregel, partielle Integration die rückwärts gelesene Produktregel. Welche passt, entscheidet die Form des Integranden.
6. **Bestand aus Rate:** Endbestand $=$ Anfangsbestand $+ \int$ Änderungsrate. Der Weg ist das Integral der Geschwindigkeit, solange sie nicht negativ ist.
7. **Weitere Anwendungen:** Mittelwert $\bar f = \frac{1}{b - a}\int_a^b f\,\dd x$, Rotationsvolumen $V = \pi\int_a^b f^2\,\dd x$ und Arbeit $W = \int F\,\dd s$. Die Einheit ist immer „Integrand mal Variable“.
8. **Vertiefung:** Wahrscheinlichkeiten stetiger Größen sind Flächen unter einer Dichte mit Gesamtfläche $1$. Die Differentialgleichung $y' = k\,y$ hat die Lösungen $y_0\,e^{kt}$, und $y' = k\,(S - y)$ hat die Lösungen $S - (S - y_0)\,e^{-kt}$.
:::

### Die häufigsten Fehler

Jeder Fehler wird von mindestens einer Aufgabe im Kapitel trainiert. Wenn dir ein Fehler bekannt vorkommt, löse die
genannte Aufgabe noch einmal.

1. **Abgeleitet statt integriert.** Wer bei $\int 3x^2\,\dd x$ das Ergebnis $6x$ hinschreibt, hat in die falsche Richtung gerechnet. Die Probe durch Ableiten deckt das sofort auf. Training: „Polynom integrieren“ und „Welche Funktionen sind Stammfunktionen?“ in [10.1 Stammfunktionen](/lernen/mathe3/integralrechnung/stammfunktionen-ableiten-rueckwaerts).
2. **Produkt faktorweise integriert.** $\int x\,(x + 1)\,\dd x$ ist nicht $\frac{x^2}{2}\cdot\left(\frac{x^2}{2} + x\right)$. Erst ausmultiplizieren. Training: „Wo steckt der Fehler?“ in [10.1 Stammfunktionen](/lernen/mathe3/integralrechnung/stammfunktionen-ableiten-rueckwaerts).
3. **Konstante falsch bestimmt.** Bei einer Anfangsbedingung ist $C$ nicht einfach der $y$-Wert des Punktes. Man setzt den Punkt in $F(x) = \ldots + C$ ein. Training: „Stammfunktion durch einen Punkt“ in [10.1 Stammfunktionen](/lernen/mathe3/integralrechnung/stammfunktionen-ableiten-rueckwaerts).
4. **Klammer um F(a) vergessen.** In $F(b) - F(a)$ wird **ganz** $F(a)$ abgezogen. Training: „Fehlersuche beim Einsetzen“ und „Bestimmtes Integral eines Polynoms“ in [10.3 Der Hauptsatz](/lernen/mathe3/integralrechnung/der-hauptsatz-der-differential-und-integralrechnung).
5. **Über Nullstellen hinweg integriert.** Das Integral über einen Vorzeichenwechsel ist eine Bilanz, keine Fläche. Training: „Fehlersuche bei einer Fläche“ und „Integral oder Fläche?“ in [10.4 Flächen berechnen](/lernen/mathe3/integralrechnung/flaechen-berechnen).
6. **Unten minus oben gerechnet.** Ein negatives Ergebnis bei einer Fläche zwischen zwei Kurven zeigt eine vertauschte Reihenfolge. Training: „Fläche zwischen Parabel und Gerade“ in [10.4 Flächen berechnen](/lernen/mathe3/integralrechnung/flaechen-berechnen).
7. **Unzulässige Lösung nicht verworfen.** Negative Zeiten oder Grenzen außerhalb des Intervalls müssen ausdrücklich gestrichen werden. Training: „Obere Grenze gesucht“ und „Wann ist der Speicher gefüllt?“ in [10.5 Integrale mit gesuchter Grenze](/lernen/mathe3/integralrechnung/integrale-mit-gesuchter-grenze-oder-gesuchtem-parameter).
8. **Intervallmitte als Halbierungsstelle.** Die Mitte halbiert eine Fläche im Allgemeinen nicht, zum Beispiel nicht unter einem wachsenden Graphen. Training: „Fläche gerecht teilen“ in [10.5 Integrale mit gesuchter Grenze](/lernen/mathe3/integralrechnung/integrale-mit-gesuchter-grenze-oder-gesuchtem-parameter).
9. **Grenzen bei der Substitution nicht ersetzt.** Wer auf $u$ umstellt, braucht auch $u$-Grenzen. Training: „Bestimmtes Integral mit Substitution“ in [10.6 Substitution](/lernen/mathe3/integralrechnung/substitution-die-kettenregel-rueckwaerts).
10. **Minus bei der partiellen Integration verloren.** Vor dem neuen Integral steht ein Minus, und mit $v = -\cos x$ entsteht oft ein zweites. Training: „Polynom mal Sinus“ in [10.7 Partielle Integration](/lernen/mathe3/integralrechnung/partielle-integration-die-produktregel-rueckwaerts).
11. **Mit km/h statt m/s gerechnet.** Vor dem Ansatz alle Größen in passende Einheiten umrechnen. Training: „Bremsen mit gleichmäßiger Verzögerung“ in [10.8 Bestand aus Änderungsrate](/lernen/mathe3/integralrechnung/bestand-aus-aenderungsrate-weg-und-bremsweg) und die Prüfungsaufgabe „Bremsen vor dem Zebrastreifen“ in [10.13 Prüfungsaufgaben](/lernen/mathe3/integralrechnung/pruefungsaufgaben).
12. **Weg mit Verschiebung verwechselt.** Fährt etwas rückwärts, ist $\int v\,\dd t$ nur die Ortsänderung. Training: „Hin und zurück“ in [10.8 Bestand aus Änderungsrate](/lernen/mathe3/integralrechnung/bestand-aus-aenderungsrate-weg-und-bremsweg).
13. **Beim Volumen nicht quadriert.** Im Rotationsvolumen steht $f(x)^2$. Training: „Kegel als Rotationskörper“ und „Ein trompetenförmiger Körper“ in [10.9 Mittelwert, Rotationsvolumen und Arbeit](/lernen/mathe3/integralrechnung/mittelwert-rotationsvolumen-und-arbeit).

### Selbstcheck zu den Lernzielen

Schätze für jedes Lernziel ein, wie sicher du bist: **sicher**, **unsicher** oder **noch nicht**. Vergleiche dann mit
deinen Ergebnissen in den Aufgaben. Wo du dich überschätzt hast, lohnt sich eine Wiederholung am meisten.

1. Stammfunktionen bestimmen und durch Ableiten prüfen.
2. Das bestimmte Integral als Flächenbilanz deuten und mit Rechtecken annähern.
3. Bestimmte Integrale mit dem Hauptsatz berechnen und die Integralfunktion erklären.
4. Flächen mit Vorzeichenwechseln und zwischen zwei Kurven berechnen.
5. Gleichungen mit gesuchter Grenze oder gesuchtem Parameter lösen.
6. Substitution und partielle Integration anwenden und die passende Technik wählen.
7. Einen Bestand aus einer Änderungsrate rekonstruieren, etwa einen Bremsweg.
8. Mittelwerte, Rotationsvolumen und Arbeit berechnen.
9. Mit Dichtefunktionen rechnen (Vertiefung).
10. Einfache Differentialgleichungen lösen und deuten (Vertiefung).

## Mündliche Prüfung

```karten
- id: ir-k-stammfunktion
  frage: Was ist eine Stammfunktion? Gib ein Beispiel und ein Nichtbeispiel.
  antwort: |
    Eine differenzierbare Funktion $F$ heißt Stammfunktion von $f$ auf einem Intervall $I$, wenn $F'(x) = f(x)$ für alle
    $x$ in $I$ gilt. Beispiel: $x^3$ ist eine Stammfunktion von $3x^2$, ebenso $x^3 + 7$. Nichtbeispiel: $6x$ ist keine
    Stammfunktion von $3x^2$, sondern seine Ableitung.
  kernpunkte:
    - "Definition: F' = f auf einem Intervall"
    - Beispiel mit Probe durch Ableiten
    - Nichtbeispiel, das in die falsche Richtung rechnet
- id: ir-k-konstante
  frage: Warum unterscheiden sich zwei Stammfunktionen derselben Funktion nur um eine Konstante?
  antwort: |
    Sind $F$ und $G$ Stammfunktionen von $f$ auf einem Intervall, dann hat $D = G - F$ die Ableitung $f - f = 0$. Nach dem
    Mittelwertsatz aus Kapitel 13 ist eine Funktion mit Ableitung null auf einem Intervall konstant. Also ist $G = F + C$.
    Auf Mengen, die kein Intervall sind, etwa alle $x \ne 0$, kann die Konstante auf den Teilstücken verschieden sein.
  kernpunkte:
    - Die Differenz hat Ableitung null
    - Mittelwertsatz liefert Konstanz auf einem Intervall
    - Gegenbeispiel ohne Intervall, etwa 1/x² auf R ohne 0
- id: ir-k-bestimmt-unbestimmt
  frage: Was ist der Unterschied zwischen unbestimmtem und bestimmtem Integral?
  antwort: |
    Das unbestimmte Integral $\int f(x)\,\dd x = F(x) + C$ ist die Menge aller Stammfunktionen, also eine Menge von
    Funktionen. Das bestimmte Integral $\int_a^b f(x)\,\dd x$ ist eine Zahl: der Grenzwert der Rechtecksummen, anschaulich
    die Flächenbilanz über $[a, b]$. Der Hauptsatz verbindet beides: $\int_a^b f(x)\,\dd x = F(b) - F(a)$.
  kernpunkte:
    - Unbestimmt heißt Menge von Funktionen mit +C
    - Bestimmt heißt eine Zahl, Grenzwert von Rechtecksummen
    - Verbindung über den Hauptsatz
- id: ir-k-riemann
  frage: Wie ist das bestimmte Integral anschaulich definiert, und wo wird das exakt gemacht?
  antwort: |
    Man zerlegt $[a, b]$ in $n$ Streifen der Breite $\Delta x$, wählt in jedem eine Stelle $\xi_k$ und bildet die
    Rechtecksumme $\sum f(\xi_k)\,\Delta x$. Für stetige $f$ nähern sich diese Summen bei immer feinerer Zerlegung
    demselben Grenzwert, dem Integral. Die exakte Fassung mit Ober- und Untersummen und der Begriff „integrierbar“ stehen
    in Kapitel 14.
  kernpunkte:
    - Zerlegen in Streifen, Höhe mal Breite
    - Grenzwert für immer feinere Zerlegung
    - Ober- und Untersumme schließen das Integral ein (Kapitel 14)
- id: ir-k-flaechenbilanz
  frage: Ist das bestimmte Integral eine Fläche? Begründe mit einem Gegenbeispiel.
  antwort: |
    Nicht im Allgemeinen. Es ist eine Flächenbilanz: Stücke unter der $x$-Achse zählen negativ. Zum Beispiel ist
    $\int_0^{2\pi}\sin x\,\dd x = 0$, die Fläche zwischen Graph und Achse aber $4$. Für eine Fläche teilt man an den
    Nullstellen auf und addiert die Beträge der Teilintegrale.
  kernpunkte:
    - Integral ist Flächenbilanz
    - Gegenbeispiel Sinus über eine volle Periode
    - Fläche durch Aufteilen an Nullstellen und Beträge
- id: ir-k-hauptsatz
  frage: Was besagt der Hauptsatz der Differential- und Integralrechnung, und welche Voraussetzung hat er?
  antwort: |
    Ist $f$ auf einem Intervall stetig, dann ist die Integralfunktion $I_a(x) = \int_a^x f(t)\,\dd t$ differenzierbar
    mit $I_a' = f$. Für jede Stammfunktion $F$ gilt außerdem $\int_a^b f(x)\,\dd x = F(b) - F(a)$. Voraussetzung ist die
    Stetigkeit auf dem ganzen Intervall zwischen den Grenzen. Kurz: Integrieren und Differenzieren sind Umkehroperationen.
  kernpunkte:
    - "Teil 1: I_a' = f"
    - "Teil 2: Integral = F(b) − F(a)"
    - Voraussetzung Stetigkeit auf dem ganzen Intervall
- id: ir-k-integralfunktion
  frage: Warum ist die Ableitung der Integralfunktion gleich dem Integranden?
  antwort: |
    Rückt die obere Grenze von $x$ nach $x + h$, kommt ein schmaler Streifen dazu. Er ist $h$ breit und ungefähr $f(x)$
    hoch, seine Fläche ist also ungefähr $f(x)\cdot h$. Damit ist der Differenzenquotient $\frac{I(x + h) - I(x)}{h}$
    ungefähr $f(x)$. Weil $f$ stetig ist, wird das für $h \to 0$ exakt: $I'(x) = f(x)$. In Worten: Die Fläche wächst so
    schnell, wie der Graph hoch ist.
  kernpunkte:
    - Zuwachs ist ein Streifen der Breite h und Höhe etwa f(x)
    - Differenzenquotient geht gegen f(x)
    - Stetigkeit macht den Grenzübergang exakt
- id: ir-k-konstante-bestimmt
  frage: Warum spielt die Integrationskonstante beim bestimmten Integral keine Rolle?
  antwort: |
    Mit $F + C$ statt $F$ erhält man $(F(b) + C) - (F(a) + C) = F(b) - F(a)$. Die Konstante hebt sich bei der Differenz
    heraus. Deshalb darf man beim bestimmten Integral jede Stammfunktion verwenden und einfach $C = 0$ setzen.
  kernpunkte:
    - Dieselbe Stammfunktion wird zweimal eingesetzt
    - C hebt sich in der Differenz auf
- id: ir-k-zwei-kurven
  frage: Wie berechnet man die Fläche zwischen zwei Kurven, und warum ist die Lage zur x-Achse egal?
  antwort: |
    Man bestimmt die Schnittstellen aus $f(x) = g(x)$. Zwischen je zwei benachbarten Schnittstellen integriert man
    „obere minus untere Kurve“ und addiert die Beträge. Die Lage zur $x$-Achse ist egal, weil nur der senkrechte Abstand
    $f(x) - g(x)$ zählt. Verschiebt man beide Kurven gleich weit nach oben, ändert er sich nicht.
  kernpunkte:
    - Schnittstellen als Grenzen
    - Obere minus untere Kurve, Beträge addieren
    - Nur der Abstand zählt, deshalb ist die Achse egal
- id: ir-k-gesuchte-grenze
  frage: Wie löst man eine Aufgabe, bei der eine Integrationsgrenze gesucht ist? Worauf musst du achten?
  antwort: |
    Man berechnet das Integral allgemein, sodass ein Term in der Unbekannten entsteht. Diesen setzt man gleich dem
    vorgegebenen Wert und löst die Gleichung. Dann prüft man jede Lösung auf Zulässigkeit, zum Beispiel ob sie im
    Intervall liegt oder ob eine Zeit positiv ist. Beim Halbieren einer Fläche liegt die Grenze bei einer wachsenden
    Funktion rechts von der Intervallmitte.
  kernpunkte:
    - Integral als Term in der Unbekannten
    - Gleichung lösen
    - Zulässigkeit prüfen und Plausibilität
- id: ir-k-techniken
  frage: Aus welchen Ableitungsregeln entstehen Substitution und partielle Integration?
  antwort: |
    Die Substitutionsregel $\int f(g(x))\,g'(x)\,\dd x = F(g(x)) + C$ ist die rückwärts gelesene Kettenregel aus Kapitel 9.
    Die partielle Integration $\int u\,v'\,\dd x = uv - \int u'\,v\,\dd x$ ist die integrierte Produktregel
    $(uv)' = u'v + uv'$. Eine Quotientenregel oder eine einfache Produktregel für Integrale gibt es dagegen nicht.
  kernpunkte:
    - Substitution ist Kettenregel rückwärts
    - Partielle Integration ist Produktregel rückwärts
    - Keine Produktregel für Integrale
- id: ir-k-wahl-u
  frage: Wie wählt man bei der partiellen Integration u und v′?
  antwort: |
    $u$ soll durch Ableiten einfacher werden, etwa ein Polynom oder $\ln x$. $v'$ soll sich leicht integrieren lassen,
    ohne komplizierter zu werden, etwa $e^x$, $\sin x$ oder $\cos x$. Wird das neue Integral schwieriger, war die Wahl
    falsch. Bei $\int\ln x\,\dd x$ schreibt man $1\cdot\ln x$ und nimmt $u = \ln x$.
  kernpunkte:
    - u wird abgeleitet und soll einfacher werden
    - v′ wird integriert und soll einfach bleiben
    - Trick 1·ln x
- id: ir-k-bremsweg
  frage: Wie berechnet man einen Bremsweg aus der Geschwindigkeit?
  antwort: |
    Der Ort ist eine Stammfunktion der Geschwindigkeit. Deshalb ist der Bremsweg $s = \int_a^b v(t)\,\dd t$. Dabei ist $a$
    der Bremsbeginn und $b$ der Zeitpunkt des Stillstands mit $v(b) = 0$. Vorher gleicht man die Einheiten an, zum Beispiel
    km/h durch $3{,}6$ in m/s. Solange $v \ge 0$ ist, ist das Integral der zurückgelegte Weg.
  kernpunkte:
    - Bremsweg als Integral der Geschwindigkeit
    - Grenzen Bremsbeginn und v = 0
    - Einheiten zuerst angleichen
- id: ir-k-weg-verschiebung
  frage: Was ist der Unterschied zwischen Weg und Verschiebung? Gib ein Beispiel.
  antwort: |
    Das Integral der Geschwindigkeit ist die Verschiebung, also die Ortsänderung. Fährt ein Körper zeitweise rückwärts,
    heben sich Vor- und Rückwärtsfahrt darin teilweise auf. Der Weg ist das Integral von $\lvert v\rvert$. Beispiel: Ein senkrecht
    hochgeworfener Ball mit $v(t) = 10 - 10t$ (in m/s) auf $[0, 2]$ hat die Verschiebung $0$, aber den Weg $10$ m.
  kernpunkte:
    - Integral von v ist Verschiebung
    - Weg ist Integral von |v|, Aufteilen an Nullstellen
    - Beispiel mit Hin- und Rückweg
- id: ir-k-mittelwert
  frage: Wie ist der Mittelwert einer Funktion definiert, und was bedeutet er geometrisch?
  antwort: |
    $\bar f = \frac{1}{b - a}\int_a^b f(x)\,\dd x$. Das Rechteck mit Breite $b - a$ und Höhe $\bar f$ hat dieselbe Fläche wie
    die Fläche unter dem Graphen. Es ist die kontinuierliche Version des arithmetischen Mittels. Ein Beispiel ist die
    Durchschnittsgeschwindigkeit, also Gesamtweg durch Gesamtzeit. Der Mittelwert ist im Allgemeinen nicht der Mittelwert
    der Randwerte.
  kernpunkte:
    - Formel mit Teilen durch die Intervalllänge
    - Rechteck gleicher Fläche
    - Nicht der Mittelwert der Randwerte
- id: ir-k-rotation
  frage: Wie berechnet man das Volumen eines Rotationskörpers, und warum stimmt die Formel?
  antwort: |
    Rotiert der Graph von $f$ über $[a, b]$ um die $x$-Achse, ist $V = \pi\int_a^b f(x)^2\,\dd x$. Man zerlegt den Körper
    in dünne Scheiben. Eine Scheibe an der Stelle $x$ ist fast ein Zylinder mit Radius $f(x)$ und Volumen $\pi f(x)^2\,\Delta x$.
    Summieren und Verfeinern ergibt das Integral. Damit lassen sich die Formeln für Kegel und Kugel herleiten.
  kernpunkte:
    - Formel mit f(x)² und π
    - Scheiben als dünne Zylinder
    - Anwendung Kegel oder Kugel
- id: ir-k-dichte
  frage: Wie hängen Integrale mit Wahrscheinlichkeiten zusammen?
  antwort: |
    Bei einer stetigen Zufallsvariablen beschreibt eine Dichte $f$ die Verteilung. Sie ist nicht negativ und hat die
    Gesamtfläche $1$. Wahrscheinlichkeiten sind Flächen: $P(c \le X \le d) = \int_c^d f(x)\,\dd x$. Ein einzelner Wert hat
    die Wahrscheinlichkeit $0$. Der Erwartungswert ist $\int x\,f(x)\,\dd x$. Die Normalverteilung aus Kapitel 16 ist das
    wichtigste Beispiel.
  kernpunkte:
    - Dichte nicht negativ mit Fläche 1
    - Wahrscheinlichkeit als Fläche
    - Verbindung zur Normalverteilung in Kapitel 16
- id: ir-k-dgl
  frage: Was ist eine Differentialgleichung, und wie lauten die Lösungen von y′ = k·y?
  antwort: |
    Eine Differentialgleichung verknüpft eine unbekannte Funktion mit ihrer Ableitung. Die Lösungen von $y' = k\,y$ sind
    $y(t) = y_0\,e^{kt}$. Das erklärt die Wachstums- und Zerfallsmodelle aus Kapitel 4. Dass es keine anderen Lösungen
    gibt, zeigt man mit $D = y\,e^{-kt}$: Seine Ableitung ist null, also ist $D$ konstant.
  kernpunkte:
    - Gleichung für eine Funktion und ihre Ableitung
    - Lösung y₀·e^(kt), Probe durch Einsetzen
    - Verbindung zu Wachstum und Zerfall in Kapitel 4
- id: ir-k-pol
  frage: Warum ist die Rechnung „Integral von −1 bis 1 über 1/x² gleich −2“ falsch?
  antwort: |
    Der Hauptsatz setzt Stetigkeit auf dem ganzen Intervall voraus. $\frac{1}{x^2}$ hat aber bei $x = 0$ einen Pol. Dass
    das Ergebnis nicht stimmen kann, sieht man auch ohne Rechnung: Der Integrand ist überall positiv, das Integral müsste
    also positiv sein. Als uneigentliches Integral aus Kapitel 14 betrachtet, divergiert es, das heißt: Es hat keinen
    endlichen Wert, denn die Fläche nahe dem Pol wird beliebig groß.
  kernpunkte:
    - Voraussetzung Stetigkeit verletzt, Pol bei 0
    - Plausibilität über das Vorzeichen
    - Uneigentliches Integral divergiert (Kapitel 14)
```
