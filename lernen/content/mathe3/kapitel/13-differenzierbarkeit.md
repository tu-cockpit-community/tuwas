---
nummer: 13
titel: Differenzierbarkeit
kurz: Die Ableitung als exakter Grenzwert, einseitige Ableitungen, differenzierbar heißt stetig, Beweise der Ableitungsregeln, Nahtstellen, Mittelwertsatz, de l'Hospital, Linearisierung und Taylorpolynom.
teil: B
stunden: 16
pruefungsgewicht: 3
voraussetzungen: [differentialrechnung, grenzwerte-stetigkeit, grenzwerte-folgen, funktionen, trigonometrie]
lernziele:
  - die Ableitung an einer Stelle als Grenzwert des Differenzenquotienten definieren und für Polynome, Brüche und Wurzeln mit der h-Methode aus der Definition berechnen
  - einseitige Ableitungen berechnen, Knickstellen und senkrechte Tangenten erkennen und begründen, warum die Betragsfunktion bei 0 nicht differenzierbar ist
  - den Satz „Wer differenzierbar ist, ist auch stetig“ beweisen, seine Kontraposition anwenden und mit einem Gegenbeispiel zeigen, dass die Umkehrung falsch ist
  - Summen-, Produkt-, Quotienten-, Ketten- und Umkehrregel aus der Definition begründen und damit die Ableitungen von e^x, a^x, ln x, sin, cos, arcsin und arctan herleiten
  - stückweise definierte Funktionen an der Nahtstelle auf Stetigkeit und Differenzierbarkeit untersuchen und Parameter so bestimmen, dass beides gilt
  - Satz von Rolle und Mittelwertsatz mit allen Voraussetzungen formulieren, geometrisch und physikalisch deuten, die Zwischenstelle berechnen und Abschätzungen damit beweisen
  - Konstanz-, Monotonie-, Extremwert- und Krümmungskriterien exakt begründen, anwenden und ihre Grenzen an Gegenbeispielen zeigen
  - Grenzwerte vom Typ 0/0, ∞/∞ und 0·∞ mit der Regel von de l'Hospital berechnen und vorher ihre Voraussetzungen prüfen
  - Funktionen linearisieren, Taylorpolynome aufstellen und den Fehler einer Näherung mit dem Restglied abschätzen
---

In [Kapitel 9](/lernen/mathe3/differentialrechnung) hast du die Ableitung als **Steigung der Tangente**
kennengelernt. Du hast mit Rechenregeln abgeleitet, Kurven diskutiert und Extremwertaufgaben gelöst. Dort
haben wir uns beim Grenzübergang mit einer anschaulichen Vorstellung begnügt: „Die Sekante dreht sich in die
Tangente.“ Dieses Kapitel macht daraus exakte Mathematik.

Die Studienberechtigungsprüfung Mathematik 3 verlangt ausdrücklich den **Ausbau und die Exaktifizierung** der
Differentialrechnung. „Exaktifizierung“ heißt: Jeder Begriff bekommt eine genaue Definition, und jede Regel wird
begründet. Drei Fragen ziehen sich durch das ganze Kapitel.

1. **Was genau ist eine Ableitung?** Antwort: ein Grenzwert, so wie in [12.1 Vom Folgengrenzwert zum Funktionsgrenzwert](/lernen/mathe3/grenzwerte-stetigkeit/vom-folgengrenzwert-zum-funktionsgrenzwert).
2. **Wann gibt es keine Ableitung?** Antwort: an Knickstellen, an Sprüngen, bei senkrechten Tangenten und bei wildem Schwingen.
3. **Warum gelten die Regeln?** Antwort: Sie folgen aus der Definition und aus wenigen Sätzen, vor allem aus dem Mittelwertsatz.

**Was kommt in der Prüfung?** In einer Musterprüfung gibt es eine Aufgabe „nur für Mathematik 3“ genau zu diesem
Stoff. Sie dreht sich um stückweise definierte Funktionen. Gefragt wird zum Beispiel, warum die Betragsfunktion an
der Stelle $0$ keine Ableitung hat. Außerdem soll man den Wert an einer Nahtstelle so wählen, dass die Funktion
stetig wird, und dann die Ableitung dort angeben. Das sind keine Rechenaufgaben im üblichen Sinn. Gefragt ist
sauberes Arbeiten mit Definitionen.

In der **mündlichen Prüfung** ist dieses Kapitel besonders beliebt. Typische Fragen sind:

- „Definieren Sie die Ableitung an einer Stelle.“
- „Ist jede stetige Funktion differenzierbar? Geben Sie ein Gegenbeispiel.“
- „Beweisen Sie, dass jede differenzierbare Funktion stetig ist.“
- „Was sagt der Mittelwertsatz, und welche Voraussetzungen braucht er?“

Wer hier die Voraussetzungen eines Satzes vollständig aufzählen und ein Gegenbeispiel nennen kann, hat einen großen
Vorteil. Jede dieser Fragen bekommt in diesem Kapitel eine Antwort, die du in ganzen Sätzen vortragen kannst.

**Wie dieses Kapitel aufgebaut ist:** Zuerst definieren wir die Ableitung exakt und rechnen sie aus der Definition
aus. Dann untersuchen wir, wo sie fehlt, und beweisen den Zusammenhang mit der Stetigkeit. Danach begründen wir alle
Ableitungsregeln und behandeln Nahtstellen von stückweise definierten Funktionen. Der zweite Teil gehört dem
Mittelwertsatz und seinen Folgerungen: Monotonie, Extremstellen, Krümmung. Den Abschluss bilden die Regel von de
l'Hospital für schwierige Grenzwerte und das Taylorpolynom als Näherung.

:::vorwissen
Du brauchst aus früheren Kapiteln:

- den **Differenzenquotienten** als Sekantensteigung und die anschauliche Ableitung
  ([Kapitel 9, Lektion „Von der Sekante zur Tangente“](/lernen/mathe3/differentialrechnung/von-der-sekante-zur-tangente-die-ableitung-an-einer-stelle)).
- die **Ableitungsregeln** als Rechenwerkzeug: Potenz-, Summen-, Produkt-, Quotienten- und Kettenregel
  ([Kapitel 9, Lektion „Grundregeln“](/lernen/mathe3/differentialrechnung/grundregeln-potenz-faktor-und-summenregel-und-die-wichtigsten-ableitungen)
  und [Lektion „Kettenregel“](/lernen/mathe3/differentialrechnung/kettenregel-hoehere-ableitungen-und-die-wahl-der-richtigen-regel)).
- **Grenzwerte von Funktionen**, einseitige Grenzwerte und **Stetigkeit**
  ([Kapitel 12, „Einseitige Grenzwerte“](/lernen/mathe3/grenzwerte-stetigkeit/einseitige-grenzwerte) und
  [„Stetigkeit an einer Stelle“](/lernen/mathe3/grenzwerte-stetigkeit/stetigkeit-an-einer-stelle)).
- die **Grenzwertsätze**, also: Der Grenzwert einer Summe oder eines Produkts ist die Summe oder das Produkt der Grenzwerte
  ([Kapitel 11, Lektion „Grenzwertsätze“](/lernen/mathe3/grenzwerte-folgen/grenzwertsaetze-und-einschliessungssatz)).
- **Monotonie und Extremstellen** aus der Kurvendiskussion
  ([Kapitel 9, Lektion „Monotonie und Extremstellen“](/lernen/mathe3/differentialrechnung/monotonie-und-extremstellen)).

Die folgende Eingangsdiagnose prüft genau diese Dinge. Wenn du bei einer Frage danebenliegst, lies den verlinkten
Abschnitt noch einmal, bevor du weitermachst.
:::

:::anwendung
Die exakte Ableitung ist das Fundament der ganzen Analysis im Studium. In der Informatik steckt sie in jedem
Optimierungsverfahren: Ein neuronales Netz lernt, indem es Ableitungen berechnet und „bergab“ läuft. Dafür muss man
wissen, wo eine Funktion differenzierbar ist. Die Funktion $\max(0, x)$, die in fast jedem Netz vorkommt, hat zum
Beispiel bei $0$ einen Knick. Die Regel von de l'Hospital und das Taylorpolynom braucht man, wenn ein Rechner $\sin$,
$e^x$ oder $\ln$ berechnen soll. Er kennt nur die vier Grundrechnungsarten und nähert alles andere durch Polynome an.
:::

### Eingangsdiagnose

```aufgabe
id: db-diag-sekante
titel: Eine Sekantensteigung
niveau: 1
art: check
angabe: |
  Berechne für $f(x) = x^2$ die Steigung der Sekante durch die Punkte mit $x = 1$ und $x = 3$.
  Herkunft: [Kapitel 9, „Von der Sekante zur Tangente“](/lernen/mathe3/differentialrechnung/von-der-sekante-zur-tangente-die-ableitung-an-einer-stelle).
teile:
  - typ: zahl
    label: 'Sekantensteigung'
    loesung: "(3^2 - 1^2)/(3 - 1)"
    anzeige: '4'
    fehler:
      - wert: "8"
        meldung: |
          $8$ ist nur der Höhenunterschied $f(3) - f(1) = 9 - 1$. Die Steigung ist Höhenunterschied **durch**
          Breitenunterschied. Teile noch durch $3 - 1$.
      - wert: "5"
        meldung: |
          Du hast vermutlich $\frac{9 + 1}{2}$ gerechnet. Im Zähler steht die **Differenz** der Funktionswerte, nicht ihre Summe.
hinweise:
  - 'Sekantensteigung = $\dfrac{f(3) - f(1)}{3 - 1}$.'
loesung: |
  Die Sekante geht durch $(1 \mid 1)$ und $(3 \mid 9)$. Ihre Steigung ist Höhenunterschied durch Breitenunterschied.
  ---
  $\dfrac{9 - 1}{3 - 1} = \dfrac{8}{2} = 4$.
```

```aufgabe
id: db-diag-regel
titel: Mit den Regeln ableiten
niveau: 1
art: check
angabe: |
  Gegeben ist $f(x) = x^3 - 4x$. Berechne $f'(2)$.
  Herkunft: [Kapitel 9, „Grundregeln“](/lernen/mathe3/differentialrechnung/grundregeln-potenz-faktor-und-summenregel-und-die-wichtigsten-ableitungen).
teile:
  - typ: zahl
    label: "$f'(2)$"
    loesung: "3*2^2 - 4"
    anzeige: '8'
    fehler:
      - wert: "0"
        meldung: |
          $0$ ist der Funktionswert $f(2) = 8 - 8$. Gesucht ist die Ableitung. Leite zuerst ab, dann setze $2$ ein.
      - wert: "4"
        meldung: |
          Bei $x^3$ wandert die Hochzahl als Faktor nach vorne: $(x^3)' = 3x^2$, nicht $x^2$.
hinweise:
  - "Potenzregel: $(x^3)' = 3x^2$, und $(4x)' = 4$."
loesung: |
  Mit der Potenz- und Summenregel: $f'(x) = 3x^2 - 4$.
  ---
  Einsetzen: $f'(2) = 3\cdot 4 - 4 = 8$.
```

```aufgabe
id: db-diag-kette
titel: Die Kettenregel
niveau: 1
art: check
angabe: |
  Leite $g(x) = \sin(3x)$ ab.
  Herkunft: [Kapitel 9, „Kettenregel“](/lernen/mathe3/differentialrechnung/kettenregel-hoehere-ableitungen-und-die-wahl-der-richtigen-regel).
teile:
  - typ: term
    label: "$g'(x)$"
    loesung: "3*cos(3x)"
    fehler:
      - wert: "cos(3x)"
        meldung: |
          Die äußere Ableitung $\cos(3x)$ stimmt. Es fehlt die **innere Ableitung**: Die Ableitung von $3x$ ist $3$.
      - wert: "-3*cos(3x)"
        meldung: |
          Das Vorzeichen stimmt nicht. Die Ableitung des Sinus ist der Kosinus, ohne Minus. Das Minus gehört zur Ableitung des Kosinus.
hinweise:
  - 'Äußere Funktion $\sin u$, innere Funktion $u = 3x$.'
loesung: |
  Kettenregel: äußere Ableitung an der inneren Stelle mal innere Ableitung.
  ---
  $g'(x) = \cos(3x)\cdot 3 = 3\cos(3x)$.
```

```aufgabe
id: db-diag-einseitig
titel: Einseitige Grenzwerte
niveau: 1
art: check
angabe: |
  Gegeben ist
  $$f(x) = \begin{cases} x + 2, & x < 1 \\ 5 - x^2, & x \ge 1. \end{cases}$$
  Berechne den linksseitigen Grenzwert $\lim_{x \to 1^-} f(x)$. Das Zeichen $x \to 1^-$ liest man „$x$ geht von links gegen $1$“.
  Herkunft: [Kapitel 12, „Einseitige Grenzwerte“](/lernen/mathe3/grenzwerte-stetigkeit/einseitige-grenzwerte).
teile:
  - typ: zahl
    label: '$\lim_{x \to 1^-} f(x)$'
    loesung: "1 + 2"
    anzeige: '3'
    fehler:
      - wert: "4"
        meldung: |
          $4 = 5 - 1^2$ ist der Funktionswert $f(1)$, berechnet mit dem unteren Stück. Von links, also für $x < 1$,
          gilt aber das obere Stück.
hinweise:
  - 'Von links, also für $x < 1$, gilt das obere Stück $x + 2$.'
loesung: |
  Für $x < 1$ gilt $f(x) = x + 2$. Dieses Stück ist eine Gerade, also stetig.
  ---
  Darum darf man $1$ einsetzen: $\lim_{x \to 1^-}(x + 2) = 3$. Der Funktionswert ist dagegen $f(1) = 5 - 1 = 4$. Die Funktion springt also bei $1$.
```

```aufgabe
id: db-diag-stetig
titel: Was heißt stetig?
niveau: 1
art: check
angabe: |
  Wann heißt eine Funktion $f$ **stetig an der Stelle** $x_0$?
  Herkunft: [Kapitel 12, „Stetigkeit an einer Stelle“](/lernen/mathe3/grenzwerte-stetigkeit/stetigkeit-an-einer-stelle).
teile:
  - typ: auswahl
    optionen:
      - 'wenn $\lim_{x \to x_0} f(x)$ existiert und gleich $f(x_0)$ ist'
      - 'wenn $f(x_0)$ definiert ist'
      - 'wenn $\lim_{x \to x_0} f(x)$ existiert'
      - 'wenn man den Graphen in einem Zug zeichnen kann, auch wenn $f(x_0)$ nicht definiert ist'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Ein Funktionswert allein reicht nicht. Auch eine Sprungfunktion hat an der Sprungstelle einen Funktionswert.'
      - wert: 2
        meldung: |
          Der Grenzwert kann existieren und trotzdem vom Funktionswert abweichen. Dann hat der Graph ein „Loch“
          mit einem einzelnen Punkt daneben. Die Funktion ist dort nicht stetig.
      - wert: 3
        meldung: 'Ohne Funktionswert an der Stelle $x_0$ kann $f$ dort weder stetig noch unstetig sein. Die Stelle gehört gar nicht zum Definitionsbereich.'
hinweise:
  - 'Es müssen drei Dinge zusammenpassen: Funktionswert, Grenzwert und ihre Gleichheit.'
loesung: |
  Stetig in $x_0$ heißt: $f(x_0)$ ist definiert, der Grenzwert $\lim_{x\to x_0} f(x)$ existiert, und beide sind gleich.
  ---
  Kurz: $\lim_{x \to x_0} f(x) = f(x_0)$. Das ist die erste Option.
```

```aufgabe
id: db-diag-kuerzen
titel: Ein Grenzwert vom Typ 0/0
niveau: 1
art: check
angabe: |
  Berechne $\displaystyle\lim_{x \to 2} \frac{x^2 - 4}{x - 2}$.
  Herkunft: [Kapitel 12, „Grenzwerte berechnen: Einsetzen, Kürzen, Erweitern“](/lernen/mathe3/grenzwerte-stetigkeit/grenzwerte-berechnen-einsetzen-kuerzen-erweitern).
teile:
  - typ: zahl
    label: 'Grenzwert'
    loesung: "2 + 2"
    anzeige: '4'
    fehler:
      - wert: "0"
        meldung: |
          Einsetzen ergibt $\frac{0}{0}$. Das ist kein Ergebnis und auch nicht $0$, sondern ein Zeichen, dass man noch umformen muss.
      - wert: "1"
        meldung: '$\frac00$ ist nicht $1$. Der Ausdruck ist unbestimmt. Kürze zuerst den gemeinsamen Faktor.'
hinweise:
  - 'Dritte binomische Formel: $x^2 - 4 = (x - 2)(x + 2)$.'
loesung: |
  Einsetzen gibt $\frac00$. Wir faktorisieren den Zähler mit der dritten binomischen Formel: $x^2 - 4 = (x - 2)(x + 2)$.
  ---
  Für $x \ne 2$ dürfen wir kürzen: $\frac{x^2 - 4}{x - 2} = x + 2$. Für $x \to 2$ geht das gegen $4$.
```

```aufgabe
id: db-diag-produktsatz
titel: Grenzwert eines Produkts
niveau: 1
art: check
angabe: |
  Es gelte $a_n \to 5$ und $b_n \to 0$. Wogegen konvergiert die Folge $a_n\cdot b_n$?
  Herkunft: [Kapitel 11, „Grenzwertsätze und Einschließungssatz“](/lernen/mathe3/grenzwerte-folgen/grenzwertsaetze-und-einschliessungssatz).
teile:
  - typ: zahl
    label: '$\lim (a_n b_n)$'
    loesung: "5*0"
    anzeige: '0'
    fehler:
      - wert: "5"
        meldung: 'Der Grenzwertsatz für Produkte sagt: Der Grenzwert des Produkts ist das Produkt der Grenzwerte, hier $5\cdot 0$.'
hinweise:
  - 'Grenzwert eines Produkts = Produkt der Grenzwerte, wenn beide Grenzwerte existieren.'
loesung: |
  Beide Folgen konvergieren, also gilt der Grenzwertsatz für Produkte.
  ---
  $\lim(a_n b_n) = 5\cdot 0 = 0$. Genau diesen Satz brauchen wir beim Beweis „differenzierbar, also stetig“.
```

## Die Ableitung exakt: Grenzwert des Differenzenquotienten

```aufgabe
id: db-check-nullnull
titel: Einfach h = 0 einsetzen?
niveau: 1
art: check
angabe: |
  Für $f(x) = x^2$ betrachten wir den Ausdruck $\dfrac{f(1 + h) - f(1)}{h}$. Was entsteht, wenn man direkt $h = 0$ einsetzt?
  Herkunft: [Kapitel 9, „Von der Sekante zur Tangente“](/lernen/mathe3/differentialrechnung/von-der-sekante-zur-tangente-die-ableitung-an-einer-stelle).
teile:
  - typ: auswahl
    optionen:
      - 'der Ausdruck $\frac00$, der keinen Wert hat'
      - 'die Zahl $0$'
      - 'die Zahl $2$, die Ableitung'
      - 'die Zahl $1$, weil man $\frac00$ kürzen kann'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Im Nenner steht dann ebenfalls $0$. Durch $0$ darf man nicht teilen, also entsteht keine Zahl.'
      - wert: 2
        meldung: |
          $2$ ist tatsächlich die Ableitung, aber man erhält sie **nicht** durch Einsetzen. Einsetzen ergibt $\frac{1 - 1}{0}$.
          Man muss zuerst umformen und dann einen Grenzwert bilden.
      - wert: 3
        meldung: '$\frac00$ kann man nicht kürzen. Kürzen darf man nur durch eine Zahl, die nicht $0$ ist.'
hinweise:
  - 'Setze $h = 0$ in Zähler und Nenner getrennt ein.'
loesung: |
  Zähler: $f(1) - f(1) = 0$. Nenner: $0$.
  ---
  Es entsteht $\frac00$. Das ist keine Zahl. Genau deshalb braucht man für die Ableitung einen **Grenzwert**.
```

**Worum geht es in einem Satz?** Wir machen aus der Vorstellung „die Sekante dreht sich in die Tangente“ eine
exakte Definition: Die Ableitung ist ein **Grenzwert**.

Der Kern des Problems steht in der Frage, die du gerade beantwortet hast. Die Steigung einer Geraden berechnet man
aus **zwei** Punkten. Eine Tangente berührt den Graphen aber nur in **einem** Punkt. Setzt man beide Punkte
gleich, entsteht $\frac00$. Der Ausweg: Wir nehmen zwei verschiedene Punkte, rücken sie immer näher zusammen und
beobachten, wohin die Sekantensteigung strebt.

### Der Differenzenquotient

Es sei $f$ eine Funktion, und $x_0$ und $x$ seien zwei verschiedene Stellen ihres Definitionsbereichs. Der Ausdruck
$$\frac{f(x) - f(x_0)}{x - x_0}$$
heißt **Differenzenquotient**. Das Wort sagt, was er ist: ein Quotient (Bruch) aus zwei Differenzen. Oben steht der
Höhenunterschied der Punkte $(x_0 \mid f(x_0))$ und $(x \mid f(x))$, unten ihr Breitenunterschied. Der Bruch ist
also die Steigung der **Sekante** durch beide Punkte. Eine Sekante ist eine Gerade, die den Graphen in zwei Punkten
schneidet.

Meist setzt man $x = x_0 + h$. Dabei ist $h$ der kleine Schritt von $x_0$ nach $x$. Er darf positiv oder negativ
sein, aber nicht $0$. Dann wird der Nenner $x - x_0 = h$, und der Differenzenquotient lautet
$$\frac{f(x_0 + h) - f(x_0)}{h}.$$

:::beispiel[Sekantensteigungen von x² bei x₀ = 1, mit Zahlen]
Wir berechnen für $f(x) = x^2$ und $x_0 = 1$ den Differenzenquotienten für immer kleinere Schritte $h$.

1. $h = 1$: $\dfrac{f(2) - f(1)}{1} = \dfrac{4 - 1}{1} = 3$.
2. $h = 0{,}1$: $\dfrac{f(1{,}1) - f(1)}{0{,}1} = \dfrac{1{,}21 - 1}{0{,}1} = 2{,}1$.
3. $h = 0{,}01$: $\dfrac{1{,}0201 - 1}{0{,}01} = 2{,}01$.
4. $h = -0{,}1$, also ein Schritt nach links: $\dfrac{f(0{,}9) - f(1)}{-0{,}1} = \dfrac{0{,}81 - 1}{-0{,}1} = \dfrac{-0{,}19}{-0{,}1} = 1{,}9$.
5. $h = -0{,}01$: $\dfrac{0{,}9801 - 1}{-0{,}01} = 1{,}99$.

Von rechts kommen die Werte $3;\ 2{,}1;\ 2{,}01$, von links $1{,}9;\ 1{,}99$. Beide Reihen streben gegen $2$. Die Zahl
$2$ selbst erreicht keine Sekante. Sie ist der **Grenzwert**, dem sich die Sekantensteigungen beliebig nähern.
:::

Zahlen können aber täuschen. Wer nur fünf Werte ausrechnet, weiß nicht sicher, was bei $h = 0{,}000\,001$ passiert.
Deshalb rechnen wir den Grenzwert exakt aus. Dazu brauchen wir die Definition.

### Die exakte Definition

:::definition[Differenzierbarkeit an einer Stelle]
Es sei $f$ auf einem offenen Intervall $I$ definiert, und $x_0$ sei ein Punkt von $I$. Die Funktion $f$ heißt
**differenzierbar an der Stelle $x_0$**, wenn der Grenzwert
$$f'(x_0) = \lim_{h \to 0}\frac{f(x_0 + h) - f(x_0)}{h}$$
existiert und eine reelle Zahl ist. Diese Zahl heißt **Ableitung** oder **Differentialquotient** von $f$ an der
Stelle $x_0$.

Ist $f$ an jeder Stelle von $I$ differenzierbar, heißt $f$ **differenzierbar auf $I$**. Die Funktion, die jedem $x$
die Zahl $f'(x)$ zuordnet, heißt **Ableitungsfunktion** $f'$.
:::

Zu den Zeichen: $\lim_{h \to 0}$ liest man „Limes für $h$ gegen null“. Gemeint ist der Grenzwert einer Funktion aus
[12.1 Vom Folgengrenzwert zum Funktionsgrenzwert](/lernen/mathe3/grenzwerte-stetigkeit/vom-folgengrenzwert-zum-funktionsgrenzwert). Ein **offenes Intervall** ist ein Intervall ohne Randpunkte,
etwa $(0, 5)$. Es sorgt dafür, dass man von $x_0$ aus ein Stück nach links **und** nach rechts gehen kann. Statt
$f'(x_0)$ schreibt man auch $\dfrac{\mathrm{d}f}{\mathrm{d}x}(x_0)$, gelesen „d $f$ nach d $x$ an der Stelle $x_0$“.

Man kann denselben Grenzwert auch ohne $h$ schreiben. Setzt man $x = x_0 + h$, dann geht $x$ gegen $x_0$, wenn $h$
gegen $0$ geht. Darum gilt gleichwertig
$$f'(x_0) = \lim_{x \to x_0}\frac{f(x) - f(x_0)}{x - x_0}.$$
Das ist die **$x$-Schreibweise** der Definition. Beide Formen liefern dieselbe Zahl.

```aufgabe
id: db-check-definition
titel: Was verlangt die Definition?
niveau: 1
art: check
angabe: |
  Für eine Funktion $f$ gilt an der Stelle $x_0 = 0$: Der Differenzenquotient $\frac{f(h) - f(0)}{h}$ strebt für
  $h \to 0$ gegen $+\infty$. Ist $f$ an der Stelle $0$ differenzierbar?
teile:
  - typ: auswahl
    optionen:
      - 'Nein, denn der Grenzwert muss eine reelle Zahl sein.'
      - 'Ja, mit $f''(0) = \infty$.'
      - 'Das kann man ohne die Funktionsgleichung nicht sagen.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$\infty$ ist keine reelle Zahl. Die Definition verlangt einen **endlichen** Grenzwert.'
      - wert: 2
        meldung: 'Die Angabe genügt. Ein Grenzwert $+\infty$ ist nie eine Ableitung, egal wie $f$ aussieht.'
hinweise:
  - 'Lies in der Definition nach, was für den Grenzwert verlangt wird.'
loesung: |
  Die Definition verlangt, dass der Grenzwert existiert **und eine reelle Zahl ist**.
  ---
  $+\infty$ ist keine reelle Zahl. Also ist $f$ bei $0$ nicht differenzierbar. Ist $f$ bei $0$ stetig, hat der Graph dort geometrisch eine senkrechte Tangente.
```

Drei Details dieser Definition sind wichtig. Jedes davon wird später in einer Prüfungsfrage gebraucht.

1. **Es ist ein Grenzwert einer Funktion von $h$.** Der Differenzenquotient ist für $h = 0$ gar nicht definiert. Man
   fragt nur, wohin er strebt, wenn $h$ sich der $0$ nähert. Mit Folgen gesagt: Für **jede** Folge $h_n \to 0$ mit
   $h_n \ne 0$ müssen die Differenzenquotienten gegen dieselbe Zahl gehen.
2. **Von beiden Seiten.** $h$ darf positiv oder negativ sein. Beide Seiten müssen denselben Grenzwert liefern. Daran
   scheitert die Betragsfunktion, wie du in [13.2 Einseitige Ableitungen](/lernen/mathe3/differenzierbarkeit/einseitige-ableitungen-knick-senkrechte-tangente-oszillation) siehst.
3. **Endlich.** Strebt der Differenzenquotient gegen $+\infty$ oder $-\infty$, ist $f$ dort **nicht** differenzierbar.
   Ist $f$ dort stetig, hat der Graph dann eine senkrechte Tangente, und eine senkrechte Gerade hat keine Steigung.

**Ein Beispiel und ein Nichtbeispiel:** $f(x) = x^2$ ist bei $x_0 = 1$ differenzierbar mit $f'(1) = 2$. Das zeigt das
folgende Beispiel exakt. Dagegen ist $g(x) = |x|$ bei $0$ **nicht** differenzierbar: Der Differenzenquotient
$\frac{|h|}{h}$ ist für positive $h$ immer $1$ und für negative $h$ immer $-1$.

### Rechnen mit der h-Methode

Um den Grenzwert exakt zu bestimmen, formen wir den Differenzenquotienten so um, dass der Faktor $h$ im Nenner
verschwindet. Erst dann lassen wir $h$ gegen $0$ gehen.

:::beispiel[Ableitung von x² an jeder Stelle]
Wir berechnen $f'(x_0)$ für $f(x) = x^2$ an einer beliebigen Stelle $x_0$.

1. **$f(x_0 + h)$ ausrechnen.** Mit der ersten binomischen Formel: $f(x_0 + h) = (x_0 + h)^2 = x_0^2 + 2x_0h + h^2$.
2. **Differenz bilden.** $f(x_0 + h) - f(x_0) = x_0^2 + 2x_0h + h^2 - x_0^2 = 2x_0h + h^2$. Der Term ohne $h$ hebt sich weg.
3. **$h$ herausheben und kürzen.** $\dfrac{2x_0h + h^2}{h} = \dfrac{h\,(2x_0 + h)}{h} = 2x_0 + h$. Kürzen ist erlaubt, weil $h \ne 0$ ist.
4. **Grenzübergang.** $\lim_{h \to 0}(2x_0 + h) = 2x_0$, denn $2x_0 + h$ ist ein Polynom in $h$, und man darf $h = 0$ einsetzen.

Ergebnis: $f$ ist an jeder Stelle differenzierbar, und $f'(x_0) = 2x_0$. An der Stelle $x_0 = 1$ ergibt das $2$, genau
den Wert, den die Zahlentabelle vermuten ließ.
:::

:::beispiel[Ableitung von 1/x]
Für $f(x) = \frac1x$ und $x_0 \ne 0$ bringen wir die Brüche im Zähler auf den gemeinsamen Nenner $x_0(x_0 + h)$.

1. **Differenz:** $\dfrac{1}{x_0 + h} - \dfrac{1}{x_0} = \dfrac{x_0 - (x_0 + h)}{x_0(x_0 + h)} = \dfrac{-h}{x_0(x_0 + h)}$.
2. **Durch $h$ teilen:** $\dfrac{-h}{h\,x_0(x_0 + h)} = \dfrac{-1}{x_0(x_0 + h)}$.
3. **Grenzübergang:** Für $h \to 0$ geht der Nenner gegen $x_0\cdot x_0 = x_0^2$. Das ist nicht $0$, weil $x_0 \ne 0$.
   Nach dem Grenzwertsatz für Quotienten ist $f'(x_0) = -\dfrac{1}{x_0^2}$.

Probe an einer Stelle: Bei $x_0 = 2$ ist $f'(2) = -\frac14$. Die Hyperbel fällt dort also mit Steigung $-0{,}25$.
:::

:::beispiel[Ableitung von √x mit dem Erweiterungstrick]
Für $f(x) = \sqrt x$ und $x_0 > 0$ steht im Zähler eine Differenz von Wurzeln. Sie verschwindet, wenn man mit der
Summe $\sqrt{x_0 + h} + \sqrt{x_0}$ erweitert. Grund ist die dritte binomische Formel $(a - b)(a + b) = a^2 - b^2$.

1. **Erweitern:** $\dfrac{\sqrt{x_0 + h} - \sqrt{x_0}}{h}\cdot\dfrac{\sqrt{x_0 + h} + \sqrt{x_0}}{\sqrt{x_0 + h} + \sqrt{x_0}} = \dfrac{(x_0 + h) - x_0}{h\,\big(\sqrt{x_0 + h} + \sqrt{x_0}\big)}$.
2. **Kürzen:** Im Zähler bleibt $h$. Also ist der Quotient $\dfrac{1}{\sqrt{x_0 + h} + \sqrt{x_0}}$.
3. **Grenzübergang:** Die Wurzelfunktion ist stetig, also $\sqrt{x_0 + h} \to \sqrt{x_0}$. Damit $f'(x_0) = \dfrac{1}{2\sqrt{x_0}}$.

Für $x_0 = 0$ klappt das nicht: Dort ist der Quotient $\frac{\sqrt h}{h} = \frac{1}{\sqrt h}$, und der wächst für
$h \to 0^+$ über alle Grenzen. Die Wurzelfunktion ist bei $0$ nicht differenzierbar. Ihr Graph startet senkrecht.
:::

:::merke[Rezept: Ableitung aus der Definition (h-Methode)]
1. $f(x_0 + h)$ aufschreiben und vereinfachen (ausmultiplizieren, gemeinsamer Nenner).
2. Die Differenz $f(x_0 + h) - f(x_0)$ bilden. Alle Terme ohne $h$ müssen sich wegheben. Tun sie das nicht, steckt ein Rechenfehler drin.
3. Durch $h$ dividieren: $h$ herausheben und kürzen. Das ist erlaubt, weil $h \ne 0$.
4. Erst **jetzt** $h \to 0$ gehen lassen.

Bei Wurzeln erweitert man mit der Summe der Wurzeln, bei Brüchen bringt man auf einen gemeinsamen Nenner.
:::

:::achtung[Zu früh h = 0 gesetzt]
**Falsch:** Für $f(x) = x^2$ rechnet jemand „$\dfrac{(3 + h)^2 - 9}{h}$, mit $h = 0$ ergibt das $\dfrac{9 - 9}{0} = 0$, also $f'(3) = 0$.“

**Richtig:** Mit $h = 0$ entsteht $\frac00$, und das ist keine Zahl, schon gar nicht $0$. Zuerst wird umgeformt:
$\dfrac{9 + 6h + h^2 - 9}{h} = \dfrac{h(6 + h)}{h} = 6 + h$. Erst danach der Grenzübergang: $f'(3) = 6$.

Ebenso falsch ist es, am Ende „$6 + h = 6$“ zu schreiben. Für $h \ne 0$ ist $6 + h$ nicht $6$. Richtig ist
$\lim_{h \to 0}(6 + h) = 6$. Das Limes-Zeichen bleibt stehen, bis der Grenzübergang ausgeführt ist.
:::

```reflexion
frage: Im Rezept dürfen wir durch $h$ kürzen. Warum ist das erlaubt, obwohl $h$ am Ende „gegen null geht“?
antwort: |
  Der Grenzwert $\lim_{h\to 0}$ fragt nur nach den Werten des Bruchs für $h \ne 0$, also für Schritte, die zwar klein,
  aber nie genau null sind. Für jedes solche $h$ ist Kürzen eine erlaubte Umformung. Die gekürzte Form, etwa $2x_0 + h$,
  stimmt für alle $h \ne 0$ mit dem Differenzenquotienten überein. Deshalb haben beide denselben Grenzwert. Die gekürzte
  Form ist aber stetig in $h$, also darf man bei ihr $h = 0$ einsetzen. Beim ursprünglichen Bruch durfte man das nicht.
```

:::achtung[Die Klammer bei f(x₀ + h) vergessen]
**Falsch:** Für $f(x) = x^2$ rechnet jemand „$f(3 + h) = 3^2 + h = 9 + h$“ und erhält den Differenzenquotienten
$\frac{9 + h - 9}{h} = 1$.

**Richtig:** $f(3 + h)$ heißt: Man setzt den **ganzen** Ausdruck $3 + h$ für $x$ ein. Also
$f(3 + h) = (3 + h)^2 = 9 + 6h + h^2$. Das Quadrat wirkt auf die ganze Klammer. Der Fehler „$f(x_0) + h$ statt
$f(x_0 + h)$“ verwechselt „den Funktionswert verschieben“ mit „die Stelle verschieben“.
:::

### Die Sekante dreht sich: im Widget beobachten

```aufgabe
id: db-check-widget-sekante
titel: Vorhersage für das Widget
niveau: 1
art: check
angabe: |
  Im folgenden Widget ist $f(x) = x^3 - 2x$ und $x_0 = 1$. Gegen welche Zahl streben die Sekantensteigungen, wenn du
  $h$ immer kleiner machst? Sag es voraus, bevor du den Regler bewegst.
teile:
  - typ: zahl
    label: "Grenzwert der Sekantensteigungen"
    loesung: "3*1^2 - 2"
    anzeige: '1'
    fehler:
      - wert: "-1"
        meldung: '$-1$ ist der Funktionswert $f(1) = 1 - 2$. Gesucht ist die Steigung, also $f''(1)$.'
      - wert: "3"
        meldung: 'Du hast $(x^3)'' = 3x^2$ richtig abgeleitet, aber den Summanden $-2x$ vergessen. Seine Ableitung ist $-2$.'
hinweise:
  - "Der Grenzwert ist $f'(1)$. Mit den Regeln aus Kapitel 9: $f'(x) = 3x^2 - 2$."
loesung: |
  Die Sekantensteigungen streben gegen die Ableitung $f'(1)$.
  ---
  $f'(x) = 3x^2 - 2$, also $f'(1) = 3 - 2 = 1$.
```

```widget
name: tangente
titel: Die Sekante dreht sich in die Tangente
props: { f: "x^3 - 2*x", x0: 1, h: 1.5, x: [-2.5, 3], y: [-4, 8], ableitung: "3*x^2 - 2" }
```

**So gehst du vor:** Verkleinere $h$ schrittweise. Beobachte die angezeigte Sekantensteigung. Sie nähert sich der
Zahl $1$, die du vorhergesagt hast. Stelle danach negative $h$ ein. Die Sekante nähert sich der Tangente jetzt von
links, und die Steigung strebt wieder gegen $1$. **Erklärung:** Bei einer differenzierbaren Funktion liefern beide
Seiten denselben Grenzwert. Das ist Detail 2 der Definition.

### Übungen

```aufgabe
id: db-def-quadrat
titel: Ableitung aus der Definition
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Gegeben ist $f(x) = 3x^2$. Vereinfache den Differenzenquotienten $\dfrac{f(2 + h) - f(2)}{h}$ für
  $h \neq 0$ so weit wie möglich. Bestimme damit $f'(2)$.
teile:
  - typ: term
    label: 'Differenzenquotient als Term in $h$'
    variable: h
    loesung: "12 + 3*h"
    fehler:
      - wert: "12 + 3*h^2"
        meldung: |
          Du hast den Zähler $12h + 3h^2$ richtig, aber nur den ersten Summanden durch $h$ geteilt.
          Beim Kürzen wird **jeder** Summand durch $h$ geteilt: $\frac{3h^2}{h} = 3h$.
      - wert: "6 + 3*h"
        meldung: |
          Das gemischte Glied von $(2 + h)^2$ ist $2\cdot 2\cdot h = 4h$, nicht $2h$. Also $f(2 + h) = 3\,(4 + 4h + h^2)$, und der lineare Term ist $12h$, nicht $6h$.
  - typ: zahl
    label: "$f'(2)$"
    loesung: "12"
    fehler:
      - wert: "0"
        meldung: 'Vermutlich hast du $h = 0$ vor dem Kürzen eingesetzt. Kürze zuerst durch $h$, dann erst den Grenzwert bilden.'
hinweise:
  - 'Multipliziere $f(2 + h) = 3(2 + h)^2$ mit der ersten binomischen Formel aus.'
loesung: |
  Ansatz: h-Methode, weil die Ableitung aus der Definition verlangt ist. Zuerst $f(2 + h)$ ausrechnen:
  $f(2 + h) = 3(4 + 4h + h^2) = 12 + 12h + 3h^2$. Außerdem ist $f(2) = 12$.
  ---
  Differenz: $f(2 + h) - f(2) = 12h + 3h^2 = h(12 + 3h)$. Durch $h$ teilen ist erlaubt, weil $h \ne 0$: $\dfrac{f(2+h) - f(2)}{h} = 12 + 3h$.
  ---
  Grenzübergang: $f'(2) = \lim_{h\to 0}(12 + 3h) = 12$. Probe mit der Regel aus Kapitel 9: $f'(x) = 6x$, also $f'(2) = 12$.
```

```aufgabe
id: db-def-numerisch
titel: Sekantensteigungen mit dem Taschenrechner
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Gegeben ist $f(x) = x^3$ und $x_0 = 2$.

  a) Berechne den Differenzenquotienten $\dfrac{f(2 + h) - f(2)}{h}$ für $h = 0{,}1$.

  b) Berechne ihn für $h = -0{,}1$.

  c) Gegen welche ganze Zahl streben die Werte vermutlich für $h \to 0$?
teile:
  - typ: zahl
    label: 'a) $h = 0{,}1$'
    loesung: "(2.1^3 - 8)/0.1"
    anzeige: '12{,}61'
    fehler:
      - wert: "1.261"
        meldung: 'Das ist nur der Zähler $9{,}261 - 8$. Teile noch durch $h = 0{,}1$.'
      - wert: "92.61"
        meldung: 'Du hast $9{,}261$ durch $0{,}1$ geteilt und $f(2) = 8$ vergessen. Im Zähler steht die **Differenz** $f(2{,}1) - f(2)$.'
  - typ: zahl
    label: 'b) $h = -0{,}1$'
    loesung: "(1.9^3 - 8)/(-0.1)"
    anzeige: '11{,}41'
    fehler:
      - wert: "-11.41"
        meldung: 'Zähler und Nenner sind beide negativ: $\frac{6{,}859 - 8}{-0{,}1} = \frac{-1{,}141}{-0{,}1}$. Minus durch Minus ergibt plus.'
  - typ: zahl
    label: 'c) vermuteter Grenzwert'
    loesung: "12"
    fehler:
      - wert: "8"
        meldung: '$8 = f(2)$ ist der Funktionswert. Die Sekantensteigungen liegen bei $12{,}61$ und $11{,}41$.'
hinweise:
  - '$2{,}1^3 = 9{,}261$ und $1{,}9^3 = 6{,}859$.'
loesung: |
  Ansatz: Wir setzen die Zahlen direkt in den Differenzenquotienten ein. $f(2) = 8$.
  ---
  a) $\dfrac{9{,}261 - 8}{0{,}1} = \dfrac{1{,}261}{0{,}1} = 12{,}61$. b) $\dfrac{6{,}859 - 8}{-0{,}1} = \dfrac{-1{,}141}{-0{,}1} = 11{,}41$.
  ---
  c) Die Werte liegen von rechts über $12$ und von links unter $12$. Vermutung: $f'(2) = 12$. Kontrolle mit der Potenzregel: $f'(x) = 3x^2$, also $f'(2) = 12$.
```

```aufgabe
id: db-def-kehrwert
titel: Ableitung von 2/x aus der Definition
niveau: 2
lernziel: 0
kompetenz: rechnen
angabe: |
  Bestimme die Ableitungsfunktion von $f(x) = \dfrac{2}{x}$ für $x \neq 0$ mit der h-Methode.
teile:
  - typ: term
    label: "$f'(x)$"
    loesung: "-2/x^2"
    bereich: [0.5, 4]
    fehler:
      - wert: "2/x^2"
        meldung: |
          Das Vorzeichen fehlt. Im Zähler entsteht $2x - 2(x + h) = -2h$. Das Minus bleibt nach dem Kürzen stehen.
          Anschaulich: Die Hyperbel fällt für $x > 0$, also muss die Steigung negativ sein.
      - wert: "-1/x^2"
        meldung: 'Der Faktor $2$ ist verloren gegangen. Der Zähler ist $-2h$, nicht $-h$.'
      - wert: "-2/x"
        meldung: |
          Nach dem Kürzen steht $\frac{-2}{x(x + h)}$. Für $h \to 0$ geht der Nenner gegen $x\cdot x = x^2$, nicht gegen $x$.
hinweise:
  - 'Bring $\frac{2}{x+h} - \frac{2}{x}$ auf den gemeinsamen Nenner $x(x+h)$.'
  - 'Der Zähler wird $2x - 2(x + h) = -2h$. Danach durch $h$ teilen.'
loesung: |
  Ansatz: h-Methode mit gemeinsamem Nenner, weil im Zähler zwei Brüche stehen.
  $$f(x + h) - f(x) = \frac{2}{x + h} - \frac{2}{x} = \frac{2x - 2(x + h)}{x(x + h)} = \frac{-2h}{x(x + h)}$$
  ---
  Durch $h$ teilen ($h \ne 0$): $\dfrac{f(x+h) - f(x)}{h} = \dfrac{-2}{x(x + h)}$.
  ---
  Für $h \to 0$ geht der Nenner gegen $x^2 \neq 0$, also $f'(x) = -\dfrac{2}{x^2}$. Probe mit der Potenzregel: $2x^{-1}$ abgeleitet gibt $-2x^{-2}$.
```

```aufgabe
id: db-def-wurzel
titel: Eine verschobene Wurzel aus der Definition
niveau: 2
lernziel: 0
kompetenz: rechnen
angabe: |
  Berechne $f'(4)$ für $f(x) = \sqrt{2x + 1}$ direkt aus der Definition, also als
  $$f'(4) = \lim_{h\to 0}\frac{\sqrt{9 + 2h} - 3}{h}.$$
teile:
  - typ: zahl
    label: "$f'(4)$"
    loesung: "2/(3 + 3)"
    anzeige: '\tfrac13'
    fehler:
      - wert: "1/6"
        meldung: |
          Nach dem Erweitern steht im Zähler $(9 + 2h) - 9 = 2h$, nicht $h$. Der Faktor $2$ aus $2x$ bleibt erhalten.
      - wert: "2/3"
        meldung: 'Im Nenner steht nach dem Erweitern die **Summe** $\sqrt{9 + 2h} + 3$. Für $h \to 0$ geht sie gegen $3 + 3 = 6$, nicht gegen $3$.'
hinweise:
  - 'Woher kommt $\sqrt{9 + 2h}$? Es ist $f(4 + h) = \sqrt{2(4 + h) + 1}$.'
  - 'Erweitere mit $\sqrt{9 + 2h} + 3$ und verwende die dritte binomische Formel.'
loesung: |
  Ansatz: Im Zähler steht eine Wurzeldifferenz. Wir erweitern mit der Summe $\sqrt{9 + 2h} + 3$, damit die Wurzel verschwindet.
  ---
  $$\frac{\sqrt{9 + 2h} - 3}{h}\cdot\frac{\sqrt{9 + 2h} + 3}{\sqrt{9 + 2h} + 3} = \frac{(9 + 2h) - 9}{h(\sqrt{9 + 2h} + 3)} = \frac{2}{\sqrt{9 + 2h} + 3}$$
  ---
  Die Wurzelfunktion ist stetig, also $\sqrt{9 + 2h} \to 3$. Damit $f'(4) = \dfrac{2}{3 + 3} = \dfrac13$.
  Probe mit der Kettenregel: $f'(x) = \dfrac{2}{2\sqrt{2x + 1}}$, also $f'(4) = \dfrac{1}{3}$.
```

```aufgabe
id: db-def-kubisch
titel: Schritt für Schritt zur Ableitung von x³ + 2x
niveau: 2
lernziel: 0
kompetenz: rechnen
angabe: |
  Bestimme $f'(1)$ für $f(x) = x^3 + 2x$ mit der h-Methode.
teile:
  - typ: zahl
    label: "$f'(1)$"
    loesung: "3*1 + 2"
    anzeige: '5'
    fehler:
      - wert: "3"
        meldung: |
          $3$ entsteht auf zwei Arten, beide falsch. Entweder ist es der Funktionswert $f(1) = 1 + 2$, gesucht ist aber der
          Grenzwert des Differenzenquotienten. Oder du hast den Summanden $2x$ vergessen. Er liefert im Differenzenquotienten
          den Beitrag $\frac{2h}{h} = 2$.
hinweise:
  - '$(1 + h)^3 = 1 + 3h + 3h^2 + h^3$.'
  - 'Fasse $f(1 + h)$ zusammen, ziehe $f(1) = 3$ ab und hebe $h$ heraus.'
gefuehrt:
  - text: 'Berechne $f(1)$.'
    teil:
      typ: zahl
      loesung: "1 + 2"
      fehler:
        - wert: "1"
          meldung: 'Auch der Summand $2x$ gehört dazu: $f(1) = 1^3 + 2\cdot 1$.'
    erklaerung: '$f(1) = 1 + 2 = 3$.'
  - text: 'Schreibe $f(1 + h)$ als Polynom in $h$.'
    teil:
      typ: term
      variable: h
      loesung: "3 + 5*h + 3*h^2 + h^3"
      fehler:
        - wert: "1 + h^3 + 2 + 2*h"
          meldung: '$(1 + h)^3$ ist nicht $1 + h^3$. Es fehlen die gemischten Glieder $3h + 3h^2$.'
    erklaerung: '$(1 + h)^3 + 2(1 + h) = 1 + 3h + 3h^2 + h^3 + 2 + 2h = 3 + 5h + 3h^2 + h^3$.'
  - text: 'Bilde die Differenz $f(1 + h) - f(1)$ und teile durch $h$. Welcher Term in $h$ bleibt?'
    teil:
      typ: term
      variable: h
      loesung: "5 + 3*h + h^2"
    erklaerung: 'Die $3$ hebt sich weg: $5h + 3h^2 + h^3$. Durch $h$ geteilt bleibt $5 + 3h + h^2$.'
  - text: 'Lass jetzt $h$ gegen $0$ gehen. Was ist $f''(1)$?'
    teil:
      typ: zahl
      loesung: "5"
    erklaerung: 'Für $h \to 0$ verschwinden $3h$ und $h^2$. Also $f''(1) = 5$.'
loesung: |
  Ansatz: h-Methode, also $f(1 + h)$ ausrechnen, $f(1)$ abziehen, durch $h$ kürzen und dann den Grenzwert bilden.
  ---
  $f(1 + h) = (1 + h)^3 + 2(1 + h) = 3 + 5h + 3h^2 + h^3$ und $f(1) = 3$. Differenz: $5h + 3h^2 + h^3 = h(5 + 3h + h^2)$.
  ---
  Kürzen: $\dfrac{f(1 + h) - f(1)}{h} = 5 + 3h + h^2 \to 5$. Probe mit den Regeln: $f'(x) = 3x^2 + 2$, also $f'(1) = 5$.
```

```aufgabe
id: db-def-fehlersuche
titel: Wo steckt der Fehler?
niveau: 2
lernziel: 0
kompetenz: begruenden
angabe: |
  Eine Mitschülerin soll $f'(3)$ für $f(x) = x^2 + 1$ aus der Definition berechnen. Sie schreibt:
  $$\frac{f(3 + h) - f(3)}{h} = \frac{9 + h^2 + 1 - 10}{h} = \frac{h^2}{h} = h \to 0, \quad\text{also } f'(3) = 0.$$
  a) Welcher Schritt ist falsch?

  b) Berechne $f'(3)$ richtig.
teile:
  - typ: auswahl
    label: 'a) Der Fehler'
    optionen:
      - '$(3 + h)^2$ wurde zu $9 + h^2$ vereinfacht. Das gemischte Glied $6h$ fehlt.'
      - 'Man darf nicht durch $h$ kürzen.'
      - '$f(3)$ ist nicht $10$.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Kürzen durch $h$ ist erlaubt, weil $h \ne 0$ ist. Der Fehler liegt früher, beim Ausmultiplizieren.'
      - wert: 2
        meldung: '$f(3) = 3^2 + 1 = 10$ stimmt. Prüfe den Term $(3 + h)^2$.'
  - typ: zahl
    label: "b) $f'(3)$"
    loesung: "2*3"
    anzeige: '6'
    fehler:
      - wert: "0"
        meldung: 'Das ist das Ergebnis der fehlerhaften Rechnung. Multipliziere $(3 + h)^2$ mit der binomischen Formel aus.'
hinweise:
  - 'Prüfe jeden Gleichheitsschritt einzeln. Stimmt $(3 + h)^2 = 9 + h^2$?'
  - 'Erste binomische Formel: $(a + b)^2 = a^2 + 2ab + b^2$.'
loesung: |
  Ansatz: Wir prüfen jede Umformung einzeln. Der erste Schritt setzt $(3 + h)^2 = 9 + h^2$. Das ist falsch, es fehlt das gemischte Glied $2\cdot 3\cdot h = 6h$.
  ---
  Richtig: $f(3 + h) - f(3) = 9 + 6h + h^2 + 1 - 10 = 6h + h^2$. Durch $h$ geteilt: $6 + h$.
  ---
  Grenzübergang: $f'(3) = \lim_{h\to 0}(6 + h) = 6$. Plausibilität: Die Parabel steigt bei $x = 3$, also kann die Steigung nicht $0$ sein.
```

```aufgabe
id: db-def-welche-ableitung
titel: Welcher Grenzwert ist welche Ableitung?
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  Jeder der folgenden Grenzwerte ist die Ableitung einer bekannten Funktion an einer bestimmten Stelle.
  Erkenne Funktion und Stelle und gib den Wert des Grenzwerts an.

  a) $\displaystyle\lim_{h\to 0}\frac{(2 + h)^4 - 16}{h}$

  b) $\displaystyle\lim_{x\to 3}\frac{\frac1x - \frac13}{x - 3}$
teile:
  - typ: zahl
    label: 'a)'
    loesung: "4*2^3"
    anzeige: '32'
    fehler:
      - wert: "16"
        meldung: '$16 = 2^4$ ist der Funktionswert. Gesucht ist die Ableitung von $x^4$ an der Stelle $2$, also $4\cdot 2^3$.'
      - wert: "4*2^4"
        meldung: 'Potenzregel: $(x^4)'' = 4x^3$. Die Hochzahl sinkt um eins.'
  - typ: zahl
    label: 'b)'
    loesung: "-1/9"
    anzeige: '-\tfrac19'
    fehler:
      - wert: "1/9"
        meldung: 'Die Hyperbel $\frac1x$ fällt für $x > 0$. Die Ableitung $-\frac{1}{x^2}$ ist negativ.'
      - wert: "-1/3"
        meldung: 'Die Ableitung von $\frac1x$ ist $-\frac{1}{x^2}$, an der Stelle $3$ also $-\frac19$, nicht $-\frac13$.'
hinweise:
  - 'Vergleiche mit $\lim_{h\to 0}\frac{f(x_0 + h) - f(x_0)}{h}$ beziehungsweise mit $\lim_{x\to x_0}\frac{f(x) - f(x_0)}{x - x_0}$.'
  - 'In a) ist $16 = 2^4$, in b) ist $\frac13 = f(3)$ für $f(x) = \frac1x$.'
loesung: |
  Ansatz: Wir lesen die Definition rückwärts. Was hinter $f(x_0 + h)$ beziehungsweise $f(x)$ steht, verrät die Funktion; der abgezogene Wert verrät die Stelle.
  ---
  a) $f(x) = x^4$, $x_0 = 2$, denn $f(2) = 16$. Also ist der Grenzwert $f'(2) = 4\cdot 2^3 = 32$.
  ---
  b) Das ist die Definition in der $x$-Schreibweise mit $f(x) = \frac1x$ und $x_0 = 3$. Der Grenzwert ist $f'(3) = -\frac{1}{3^2} = -\frac19$. Kontrolle: Beide Ergebnisse passen zu den Regeln aus Kapitel 9.
```

```aufgabe
id: db-def-allgemein
titel: Die Ableitung von 1/x² aus der Definition
niveau: 3
lernziel: 0
kompetenz: rechnen
angabe: |
  Zeige mit der h-Methode, dass $f(x) = \dfrac{1}{x^2}$ an jeder Stelle $x \ne 0$ differenzierbar ist, und bestimme $f'(x)$.
  Gib zur Kontrolle auch $f'(1)$ an.
teile:
  - typ: term
    label: "$f'(x)$"
    loesung: "-2/x^3"
    bereich: [0.5, 3]
    fehler:
      - wert: "-1/x^4"
        meldung: |
          Du hast vermutlich das Muster von $\left(\frac1x\right)' = -\frac{1}{x^2}$ übertragen und $-\frac{1}{(x^2)^2}$ geschrieben.
          Rechne wirklich mit der h-Methode: Im Zähler entsteht $x^2 - (x + h)^2 = -2xh - h^2$. Der Faktor $2x$ geht dabei nicht verloren.
      - wert: "-2/x^4"
        meldung: 'Das gemischte Glied liefert $-2x$ im Zähler. $\frac{-2x}{x^4}$ lässt sich zu $-\frac{2}{x^3}$ kürzen.'
  - typ: zahl
    label: "$f'(1)$"
    loesung: "-2"
hinweise:
  - 'Gemeinsamer Nenner von $\frac{1}{(x+h)^2} - \frac{1}{x^2}$ ist $x^2(x + h)^2$.'
  - 'Der Zähler ist $x^2 - (x + h)^2 = -2xh - h^2 = -h(2x + h)$.'
loesung: |
  Ansatz: h-Methode mit gemeinsamem Nenner, weil $f$ ein Bruch ist.
  $$f(x + h) - f(x) = \frac{1}{(x + h)^2} - \frac{1}{x^2} = \frac{x^2 - (x + h)^2}{x^2(x + h)^2} = \frac{-h(2x + h)}{x^2(x + h)^2}$$
  ---
  Durch $h$ teilen ($h \ne 0$): $\dfrac{f(x+h) - f(x)}{h} = \dfrac{-(2x + h)}{x^2(x + h)^2}$.
  ---
  Grenzübergang: Zähler gegen $-2x$, Nenner gegen $x^2\cdot x^2 = x^4 \ne 0$. Also $f'(x) = \dfrac{-2x}{x^4} = -\dfrac{2}{x^3}$. Der Grenzwert existiert für jedes $x \ne 0$, also ist $f$ dort differenzierbar.
  ---
  Kontrolle: $f'(1) = -2$. Die Potenzregel mit $x^{-2}$ gibt ebenfalls $-2x^{-3}$.
```

## Einseitige Ableitungen: Knick, senkrechte Tangente, Oszillation

```aufgabe
id: db-check-betragsquotient
titel: Ein einseitiger Grenzwert
niveau: 1
art: check
angabe: |
  Berechne den rechtsseitigen Grenzwert $\displaystyle\lim_{h \to 0^+}\frac{|h|}{h}$. Das Zeichen $h \to 0^+$ heißt: $h$ nähert sich der $0$ nur mit positiven Werten.
  Herkunft: [Kapitel 12, „Einseitige Grenzwerte“](/lernen/mathe3/grenzwerte-stetigkeit/einseitige-grenzwerte).
teile:
  - typ: zahl
    label: 'Grenzwert'
    loesung: "1"
    fehler:
      - wert: "-1"
        meldung: 'Für positive $h$ ist $|h| = h$, also $\frac{|h|}{h} = \frac{h}{h} = +1$. Den Wert $-1$ erhält man nur von links.'
      - wert: "0"
        meldung: 'Zähler und Nenner gehen zwar beide gegen $0$, aber ihr Quotient ist für jedes positive $h$ genau $1$.'
hinweise:
  - 'Für $h > 0$ ist $|h| = h$.'
loesung: |
  Für $h > 0$ gilt $|h| = h$, also ist der Bruch $\frac{h}{h} = 1$ für jedes positive $h$.
  ---
  Eine Funktion, die konstant $1$ ist, hat den Grenzwert $1$. Also $\lim_{h \to 0^+}\frac{|h|}{h} = 1$.
```

**Worum geht es in einem Satz?** Wir untersuchen die Stellen, an denen es **keine** Ableitung gibt, und lernen dafür
ein Werkzeug: die einseitigen Ableitungen.

Stell dir einen Wanderweg vor, der bergab bis zu einem Bach führt und auf der anderen Seite sofort wieder bergauf.
Am Bach knickt der Weg. Kommst du von links, zeigt deine Fußspitze nach unten. Gehst du nach rechts weiter, zeigt sie
nach oben. **Eine** Richtung für genau diesen Punkt gibt es nicht. Genau das passiert bei der Betragsfunktion an der
Stelle $0$.

### Links- und rechtsseitige Ableitung

So wie es einseitige Grenzwerte gibt, gibt es einseitige Ableitungen. Man lässt $h$ nur von einer Seite gegen $0$ gehen.

:::definition[Einseitige Ableitungen]
Die **rechtsseitige Ableitung** und die **linksseitige Ableitung** von $f$ an der Stelle $x_0$ sind
$$f'_+(x_0) = \lim_{h \to 0^+}\frac{f(x_0 + h) - f(x_0)}{h}, \qquad f'_-(x_0) = \lim_{h \to 0^-}\frac{f(x_0 + h) - f(x_0)}{h},$$
falls diese Grenzwerte existieren und reelle Zahlen sind. Dabei heißt $h \to 0^+$ „von rechts“, also nur positive
$h$, und $h \to 0^-$ „von links“, also nur negative $h$.
:::

:::satz[Differenzierbar heißt: beide Seiten stimmen überein]
$f$ ist an der Stelle $x_0$ genau dann differenzierbar, wenn beide einseitigen Ableitungen existieren und
**gleich** sind. Dann ist $f'(x_0) = f'_+(x_0) = f'_-(x_0)$.
:::

Das folgt aus dem entsprechenden Satz für Grenzwerte aus [12.4 Einseitige Grenzwerte](/lernen/mathe3/grenzwerte-stetigkeit/einseitige-grenzwerte): Ein
Grenzwert existiert genau dann, wenn beide einseitigen Grenzwerte existieren und übereinstimmen. Einseitige Ableitungen
braucht man außerdem an **Randpunkten**. Ist $f$ nur auf $[a, b]$ definiert, gibt es in $a$ nur Punkte rechts davon.
Dort spricht man von der rechtsseitigen Ableitung, im Randpunkt $b$ von der linksseitigen.

### Der Knick: die Betragsfunktion

:::beispiel[Die Betragsfunktion an der Stelle 0]
Wir untersuchen $f(x) = |x|$ an der Stelle $x_0 = 0$. Es ist $f(0) = 0$, also lautet der Differenzenquotient $\frac{|h|}{h}$.

1. **Von rechts ($h > 0$):** Dann ist $|h| = h$, und der Quotient ist $\frac{h}{h} = 1$. Also $f'_+(0) = 1$.
2. **Von links ($h < 0$):** Dann ist $|h| = -h$. Zum Beispiel ist $|-3| = 3 = -(-3)$. Der Quotient ist $\frac{-h}{h} = -1$. Also $f'_-(0) = -1$.
3. **Vergleich:** Beide einseitigen Ableitungen existieren, sind aber verschieden: $1 \ne -1$. Nach dem Satz ist $f$ bei $0$ **nicht** differenzierbar.

Mit einer Folge gesagt: Für $h_n = \frac{(-1)^n}{n}$ gilt $h_n \to 0$. Die Quotienten $\frac{|h_n|}{h_n}$ springen aber
zwischen $-1$ und $1$ hin und her und haben keinen Grenzwert.
:::

An allen anderen Stellen ist die Betragsfunktion differenzierbar. Für $x_0 > 0$ ist $f(x) = x$ auf einer ganzen
Umgebung von $x_0$, also auf einem kleinen Intervall um $x_0$. Dort ist $f'(x_0) = 1$. Für $x_0 < 0$ ist $f(x) = -x$ in der Nähe, also $f'(x_0) = -1$.

```plot
x: [-3, 3]
y: [-1.5, 3]
gleich: true
graphen:
  - { f: "abs(x)", label: "f(x) = |x|", farbe: 0 }
  - { f: "x", label: "Steigung +1 von rechts", farbe: 1, von: 0, bis: 2.5, gestrichelt: true }
  - { f: "-x", label: "Steigung −1 von links", farbe: 2, von: -2.5, bis: 0, gestrichelt: true }
punkte:
  - { x: 0, y: 0, label: "Knick" }
beschriftung: Die Betragsfunktion hat bei 0 einen Knick. Von rechts haben alle Sekanten die Steigung +1, von links die Steigung −1. Es gibt keine gemeinsame Grenzlage, also keine Tangente.
```

Eine Stelle, an der beide einseitigen Ableitungen existieren, aber verschieden sind, heißt **Knickstelle** oder
**Ecke**. Der Graph hat dort keine Lücke und keinen Sprung, aber zwei verschiedene Richtungen. Eine Tangente müsste
beide Richtungen zugleich haben. Das geht nicht.

:::beispiel[Die Rampenfunktion aus neuronalen Netzen]
Die Funktion $r(x) = \max(0, x)$ ist $0$ für $x \le 0$ und $x$ für $x > 0$. Sie heißt in der Informatik
„ReLU“ und steckt in fast jedem neuronalen Netz. Wir untersuchen sie bei $0$. Es ist $r(0) = 0$.

1. **Von rechts:** Für $h > 0$ ist $r(h) = h$, also $\frac{r(h) - 0}{h} = 1$. Damit $r'_+(0) = 1$.
2. **Von links:** Für $h < 0$ ist $r(h) = 0$, also $\frac{0 - 0}{h} = 0$. Damit $r'_-(0) = 0$.
3. **Ergebnis:** $1 \ne 0$, also hat $r$ bei $0$ einen Knick und ist dort nicht differenzierbar. Für Programme legt man
   deshalb per Vereinbarung einen Ersatzwert fest, meist $0$.
:::

:::achtung[Eine Formel für f′ ist kein Beweis]
**Falsch:** „Für $f(x) = |x|$ ist $f'(x) = \frac{x}{|x|}$. Bei $0$ steht dann $\frac00$. Also ist $f$ dort nicht differenzierbar.“

**Richtig:** Die Formel $\frac{x}{|x|}$ gilt nur für $x \ne 0$. Über die Stelle $0$ sagt sie gar nichts. Dass eine
Formel an einer Stelle nicht auswertbar ist, beweist keine Nicht-Differenzierbarkeit. Gegenbeispiel: Für
$g(x) = x\,|x|$ liefert die Ableitung abseits von $0$ den Ausdruck $\frac{2x^2}{|x|}$, der bei $0$ ebenfalls
$\frac00$ ergibt. Trotzdem ist $g$ bei $0$ differenzierbar, denn $\frac{g(h) - 0}{h} = |h| \to 0$. Entscheidend ist immer
der Differenzenquotient an genau dieser Stelle.
:::

:::achtung[Nur eine Seite geprüft]
**Falsch:** „Für $f(x) = |x - 2|$ ist $\frac{f(2 + h) - f(2)}{h} = \frac{|h|}{h} = \frac{h}{h} = 1$, also $f'(2) = 1$.“

**Richtig:** Die Umformung $|h| = h$ gilt nur für $h > 0$. Für $h < 0$ ist $|h| = -h$, und der Quotient ist $-1$.
Also ist $f'_+(2) = 1$ und $f'_-(2) = -1$, und $f$ ist bei $2$ nicht differenzierbar. Wer einen Betrag auflöst,
muss immer beide Fälle getrennt anschreiben.
:::

```aufgabe
id: db-check-widget-knick
titel: Vorhersage für das Knick-Widget
niveau: 1
art: check
angabe: |
  Im folgenden Widget ist $f(x) = |x|$ und $x_0 = 0$. Welchen Wert zeigt das Widget als Sekantensteigung, wenn du
  $h = 0{,}5$, dann $h = 0{,}1$ und dann $h = 0{,}01$ einstellst?
teile:
  - typ: auswahl
    optionen:
      - 'jedes Mal genau $1$'
      - 'Werte, die immer kleiner werden und gegen $0$ gehen'
      - 'abwechselnd $1$ und $-1$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Der Quotient ist $\frac{|h|}{h}$. Für positive $h$ ist das immer genau $\frac{h}{h} = 1$, egal wie klein $h$ ist.'
      - wert: 2
        meldung: 'Alle drei Werte von $h$ sind positiv. Den Wert $-1$ gibt es nur für negative $h$.'
hinweise:
  - 'Berechne $\frac{|0{,}5|}{0{,}5}$.'
loesung: |
  Für $h > 0$ ist $\frac{|h|}{h} = 1$.
  ---
  Das Widget zeigt also dreimal $1$. Erst bei negativen $h$ springt der Wert auf $-1$.
```

```widget
name: tangente
titel: Sekanten an |x| bei 0, von links und von rechts
props: { f: "abs(x)", x0: 0, h: 1, x: [-3, 3], y: [-1, 3] }
```

**So gehst du vor:** Stelle $h$ positiv ein und verkleinere es. Der Differenzenquotient bleibt konstant $1$, wie
vorhergesagt. Stelle dann negative $h$ ein. Jetzt bleibt er konstant $-1$. **Erklärung:** Von jeder Seite ist der
Grenzwert sofort erreicht, aber es sind zwei verschiedene Grenzwerte. Deshalb gibt es keine Ableitung.

### Die senkrechte Tangente

Es gibt auch Stellen ohne Knick, an denen trotzdem keine Ableitung existiert.

:::beispiel[Die Kubikwurzel an der Stelle 0]
Wir untersuchen $f(x) = \sqrt[3]{x}$ bei $x_0 = 0$. Das ist die Zahl, deren dritte Potenz $x$ ergibt. Der Graph ist
glatt und hat keinen Knick. Der Differenzenquotient ist
$$\frac{\sqrt[3]{h} - 0}{h} = \frac{h^{1/3}}{h} = h^{-2/3} = \frac{1}{\sqrt[3]{h^2}}.$$

1. Für $h = 0{,}001$ ist $\sqrt[3]{h^2} = \sqrt[3]{0{,}000\,001} = 0{,}01$, der Quotient also $100$.
2. Für $h = -0{,}001$ ist $h^2$ dasselbe, also ebenfalls $100$.
3. Für $h \to 0$ geht der Nenner gegen $0^+$, der Quotient also gegen $+\infty$.

Der Grenzwert ist uneigentlich. Die Sekanten werden immer steiler, ihre Grenzlage ist die senkrechte Gerade $x = 0$.
Eine senkrechte Gerade hat keine Steigung. Darum ist $f$ bei $0$ **nicht differenzierbar**.
:::

```plot
x: [-3, 3]
y: [-1.8, 1.8]
gleich: true
graphen:
  - { f: "cbrt(x)", label: "f(x) = ∛x", farbe: 0 }
strecken:
  - { von: [0, -1.6], nach: [0, 1.6], gestrichelt: true, farbe: 1 }
beschriftung: Die Kubikwurzel hat bei 0 eine senkrechte Tangente (gestrichelt). Der Differenzenquotient wächst über alle Grenzen, die Ableitung existiert dort nicht.
```

### Wildes Schwingen (Vertiefung)

Eine vierte Art, an der Differenzierbarkeit scheitern kann, ist für die Prüfung kein Pflichtstoff. Sie zeigt aber
schön, dass man mit der Definition weiterkommt als mit dem Bild. Setze $f(x) = x\sin\frac1x$ für $x \ne 0$ und
$f(0) = 0$. Wegen $|\sin| \le 1$ ist $|f(x)| \le |x|$, also ist $f$ bei $0$ stetig. Der Differenzenquotient ist aber
$\frac{f(h)}{h} = \sin\frac1h$. Er pendelt für $h \to 0$ unendlich oft zwischen $-1$ und $1$ und hat keinen Grenzwert.

Bei $g(x) = x^2\sin\frac1x$ mit $g(0) = 0$ ist es anders. Hier ist $\frac{g(h)}{h} = h\sin\frac1h$, und wegen
$\big|h\sin\frac1h\big| \le |h|$ geht das gegen $0$. Also ist $g$ bei $0$ differenzierbar mit $g'(0) = 0$, obwohl der
Graph dort unendlich oft hin- und herschwingt.

:::merke[Vier Arten, wie Differenzierbarkeit scheitert]
| Situation | Beispiel | Differenzenquotient |
|---|---|---|
| Knick oder Ecke | $\lvert x\rvert$ bei $0$ | Zwei verschiedene einseitige Grenzwerte. |
| senkrechte Tangente | $\sqrt[3]{x}$ bei $0$ | Er strebt gegen $+\infty$ oder $-\infty$. |
| Sprung | $\operatorname{sgn}(x)$ bei $0$ | Er wird unbeschränkt. |
| Oszillation | $x\sin\frac1x$ bei $0$ | Er pendelt ohne Grenzwert. |

Dabei ist $\operatorname{sgn}(x)$ die Vorzeichenfunktion: $1$ für positive, $-1$ für negative $x$ und $0$ bei $0$.
Die Sprungstellen behandelt [13.3 Differenzierbar heißt stetig](/lernen/mathe3/differenzierbarkeit/differenzierbar-heisst-stetig-aber-nicht-umgekehrt).
:::

```reflexion
frage: Die Betragsfunktion hat bei $0$ ein Minimum. Aus Kapitel 9 weißt du, dass an einem Minimum die Tangente waagrecht ist. Wo steckt hier der Denkfehler?
antwort: |
  Die Regel „Minimum, also waagrechte Tangente“ gilt nur, wenn die Funktion an dieser Stelle **differenzierbar** ist.
  Bei $|x|$ ist das an der Stelle $0$ nicht der Fall: Die einseitigen Ableitungen sind $-1$ und $1$. Es gibt also gar
  keine Tangente, auch keine waagrechte. Extremstellen können an Knicken liegen. Bei der Suche nach Extrema muss man
  solche Stellen deshalb zusätzlich prüfen. Das wird in [13.9 Extremstellen und Krümmung exakt begründen](/lernen/mathe3/differenzierbarkeit/extremstellen-und-kruemmung-exakt-begruenden) wichtig.
```

### Übungen

```aufgabe
id: db-einseitig-betrag
titel: Ein gestreckter, verschobener Betrag
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Bestimme für $f(x) = 2\,|x - 3|$ die einseitigen Ableitungen an der Stelle $x_0 = 3$. Ist $f$ dort differenzierbar?
teile:
  - typ: zahl
    label: "$f'_-(3)$"
    loesung: "-2"
    fehler:
      - wert: "2"
        meldung: 'Von links ist $h < 0$, also $|h| = -h$. Der Quotient $\frac{2|h|}{h}$ ist dann negativ.'
      - wert: "-1"
        meldung: 'Der Faktor $2$ vor dem Betrag fehlt. Er bleibt im Differenzenquotienten stehen: $\frac{2|h|}{h}$.'
  - typ: zahl
    label: "$f'_+(3)$"
    loesung: "2"
    fehler:
      - wert: "1"
        meldung: 'Der Faktor $2$ vor dem Betrag fehlt. Für $h > 0$ ist $\frac{2|h|}{h} = \frac{2h}{h} = 2$.'
  - typ: auswahl
    label: 'Ist $f$ bei $x_0 = 3$ differenzierbar?'
    optionen: ["ja", "nein"]
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Differenzierbar heißt: Beide einseitigen Ableitungen stimmen überein. Vergleiche deine beiden Werte.'
hinweise:
  - '$f(3 + h) - f(3) = 2|h| - 0$. Unterscheide $h > 0$ und $h < 0$.'
loesung: |
  Ansatz: einseitige Ableitungen über den Differenzenquotienten, weil der Betrag zwei Fälle verlangt. $f(3 + h) - f(3) = 2|3 + h - 3| - 0 = 2|h|$.
  ---
  Für $h > 0$: $\frac{2h}{h} = 2$, also $f'_+(3) = 2$. Für $h < 0$: $\frac{-2h}{h} = -2$, also $f'_-(3) = -2$.
  ---
  Die einseitigen Ableitungen sind verschieden. $f$ hat bei $3$ einen Knick und ist dort nicht differenzierbar.
```

```aufgabe
id: db-einseitig-abseits
titel: Abseits des Knicks
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Ist $f(x) = |x|$ an der Stelle $x_0 = -2$ differenzierbar? Wenn ja, gib $f'(-2)$ an.
teile:
  - typ: auswahl
    label: 'differenzierbar bei $-2$?'
    optionen: ['ja', 'nein']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Der Knick liegt nur bei $0$. In der Nähe von $-2$ ist $|x| = -x$, also eine Gerade.'
  - typ: zahl
    label: "$f'(-2)$"
    loesung: "-1"
    fehler:
      - wert: "1"
        meldung: 'Für negative $x$ ist $|x| = -x$. Die Gerade $-x$ hat die Steigung $-1$.'
      - wert: "2"
        meldung: '$2 = |-2|$ ist der Funktionswert, nicht die Steigung.'
hinweise:
  - 'Für $x$ in der Nähe von $-2$, etwa zwischen $-3$ und $-1$, ist $x$ negativ. Wie sieht $|x|$ dort aus?'
loesung: |
  Ansatz: In einer ganzen Umgebung von $-2$ sind alle $x$ negativ. Dort gilt $|x| = -x$.
  ---
  Die Funktion stimmt bei $-2$ mit der Geraden $-x$ überein. Diese ist differenzierbar mit Steigung $-1$. Also $f'(-2) = -1$.
```

```aufgabe
id: db-einseitig-quadrat
titel: Knick bei |x² − 4|
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Untersuche $f(x) = |x^2 - 4|$ an der Stelle $x_0 = 2$. Berechne die einseitigen Ableitungen.
plot:
  x: [-3.5, 3.5]
  y: [-1, 6]
  graphen:
    - { f: "abs(x^2 - 4)" }
teile:
  - typ: zahl
    label: "$f'_-(2)$"
    loesung: "-4"
    fehler:
      - wert: "4"
        meldung: 'Links von $2$ (zwischen $0$ und $2$) ist $x^2 - 4 < 0$. Dort ist $f(x) = 4 - x^2$, und das fällt.'
      - wert: "-2"
        meldung: 'Die Ableitung von $4 - x^2$ ist $-2x$. An der Stelle $2$ ist das $-4$.'
  - typ: zahl
    label: "$f'_+(2)$"
    loesung: "4"
    fehler:
      - wert: "2"
        meldung: '$(x^2 - 4)'' = 2x$, an der Stelle $2$ also $4$.'
hinweise:
  - 'Für $x > 2$ ist $x^2 - 4 > 0$, für $0 < x < 2$ ist $x^2 - 4 < 0$. Schreib $f$ in der Nähe von $2$ ohne Betrag.'
  - 'Rechts: $f(x) = x^2 - 4$. Links: $f(x) = 4 - x^2$. Bilde jeweils den Differenzenquotienten.'
loesung: |
  Ansatz: Betrag in der Nähe von $2$ auflösen. Für $x \ge 2$ ist $f(x) = x^2 - 4$, für $0 < x < 2$ ist $f(x) = 4 - x^2$. Außerdem $f(2) = 0$.
  ---
  Rechts ($h > 0$): $\dfrac{(2 + h)^2 - 4}{h} = \dfrac{4h + h^2}{h} = 4 + h \to 4$.
  ---
  Links ($h < 0$): $\dfrac{4 - (2 + h)^2}{h} = \dfrac{-4h - h^2}{h} = -4 - h \to -4$.
  ---
  $f'_+(2) = 4 \neq -4 = f'_-(2)$: Knick. Im Bild klappt der Betrag den Teil der Parabel unter der $x$-Achse nach oben. An den Nullstellen $\pm 2$ entstehen Ecken.
```

```aufgabe
id: db-auswahl-diffbar
titel: Welche Funktionen sind bei 0 differenzierbar?
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: |
  Welche der folgenden Funktionen sind an der Stelle $x_0 = 0$ differenzierbar? Kreuze alle an.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$f_1(x) = x^2$'
      - '$f_2(x) = x\,|x|$'
      - '$f_3(x) = |x|$'
      - '$f_4(x) = \sqrt[3]{x}$'
      - '$f_5(x) = |x| + x$'
    richtig: [0, 1]
    fehler:
      - wert: [0]
        meldung: 'Untersuche $f_2$ genauer: $\frac{h\,|h|}{h} = |h|$, und das geht von beiden Seiten gegen $0$. Ein Betrag allein macht noch keinen Knick.'
      - wert: [0, 1, 3]
        meldung: '$f_4$ ist glatt, aber der Differenzenquotient $h^{-2/3}$ strebt gegen $+\infty$. Eine senkrechte Tangente hat keine Steigung.'
      - wert: [0, 1, 4]
        meldung: 'Bei $f_5$ ist der Quotient rechts $\frac{2h}{h} = 2$ und links $\frac{0}{h} = 0$. Das sind zwei verschiedene Werte.'
hinweise:
  - 'Berechne jeweils $\frac{f(h) - f(0)}{h}$ und untersuche $h \to 0^+$ und $h \to 0^-$ getrennt.'
  - 'Bei $f_2$ ist $\frac{h|h|}{h} = |h|$. Bei $f_5$ ist $|h| + h$ für $h < 0$ gleich $0$.'
loesung: |
  Ansatz: Für jede Funktion den Differenzenquotienten $\frac{f(h) - f(0)}{h}$ von beiden Seiten untersuchen.
  ---
  $f_1$: $\frac{h^2}{h} = h \to 0$. Differenzierbar, $f_1'(0) = 0$. $f_2$: $\frac{h|h|}{h} = |h| \to 0$ von beiden Seiten. Differenzierbar mit $f_2'(0) = 0$, obwohl ein Betrag vorkommt.
  ---
  $f_3$: einseitige Ableitungen $\pm 1$, nicht differenzierbar. $f_4$: $\frac{\sqrt[3]h}{h} = h^{-2/3} \to +\infty$, senkrechte Tangente, nicht differenzierbar.
  ---
  $f_5$: für $h > 0$ ist der Quotient $2$, für $h < 0$ ist er $0$. Verschieden, also nicht differenzierbar. Richtig sind genau $f_1$ und $f_2$.
```

```aufgabe
id: db-senkrecht
titel: Die Wurzel am Rand
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Die Funktion $f(x) = 2\sqrt{x}$ ist nur für $x \ge 0$ definiert. An der Stelle $0$ kann man also nur die rechtsseitige
  Ableitung untersuchen.

  a) Berechne den Differenzenquotienten $\frac{f(h) - f(0)}{h}$ für $h = 0{,}01$.

  b) Berechne ihn für $h = 0{,}0001$.

  c) Was folgt daraus für die rechtsseitige Ableitung $f'_+(0)$?
teile:
  - typ: zahl
    label: 'a) $h = 0{,}01$'
    loesung: "2*sqrt(0.01)/0.01"
    anzeige: '20'
    fehler:
      - wert: "0.2"
        meldung: '$0{,}2 = 2\sqrt{0{,}01}$ ist nur der Zähler. Teile noch durch $h = 0{,}01$.'
      - wert: "10"
        meldung: 'Der Faktor $2$ fehlt. Es ist $f(0{,}01) = 2\sqrt{0{,}01} = 2\cdot 0{,}1 = 0{,}2$.'
  - typ: zahl
    label: 'b) $h = 0{,}0001$'
    loesung: "2*sqrt(0.0001)/0.0001"
    anzeige: '200'
    fehler:
      - wert: "0.02"
        meldung: '$0{,}02 = 2\sqrt{0{,}0001}$ ist nur der Zähler. Teile noch durch $h = 0{,}0001$.'
  - typ: auswahl
    label: 'c) Folgerung'
    optionen:
      - '$f''_+(0)$ existiert nicht, denn der Quotient $\frac{2}{\sqrt h}$ strebt gegen $+\infty$. Der Graph startet senkrecht.'
      - '$f''_+(0) = 0$, denn $2\sqrt h \to 0$.'
      - '$f''_+(0) = 2$, denn der Faktor vor der Wurzel ist $2$.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Der Zähler geht gegen $0$, aber der Nenner $h$ noch schneller. Die Zahlen aus a) und b) wachsen.'
      - wert: 2
        meldung: 'Der Faktor $2$ sagt nichts über die Steigung an der Stelle $0$. Sieh dir die Werte aus a) und b) an: Sie wachsen.'
hinweise:
  - '$\sqrt{0{,}01} = 0{,}1$ und $\sqrt{0{,}0001} = 0{,}01$. Vergiss den Faktor $2$ nicht.'
  - 'Allgemein ist $\frac{2\sqrt h}{h} = \frac{2}{\sqrt h}$. Was passiert damit für $h \to 0^+$?'
loesung: |
  Ansatz: Der Differenzenquotient an der Stelle $0$ ist $\frac{2\sqrt h - 0}{h} = \frac{2}{\sqrt h}$ für $h > 0$.
  ---
  a) $\frac{2\cdot 0{,}1}{0{,}01} = \frac{0{,}2}{0{,}01} = 20$. b) $\frac{2\cdot 0{,}01}{0{,}0001} = \frac{0{,}02}{0{,}0001} = 200$.
  ---
  c) Für $h \to 0^+$ geht $\sqrt h \to 0^+$, also $\frac{2}{\sqrt h} \to +\infty$. Ein uneigentlicher Grenzwert ist keine Ableitung. Der Graph von $f$ beginnt bei $0$ mit einer senkrechten Tangente, der $y$-Achse.
```

```aufgabe
id: db-einseitig-produkt
titel: Schritt für Schritt einen Betrag auflösen
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Bestimme für $f(x) = |x^2 - 2x|$ die einseitigen Ableitungen an der Stelle $x_0 = 0$.
teile:
  - typ: zahl
    label: "$f'_-(0)$"
    loesung: "-2"
    fehler:
      - wert: "2"
        meldung: 'Für $x < 0$ ist $x^2 - 2x = x(x - 2)$ positiv (beide Faktoren negativ). Dort ist $f(x) = x^2 - 2x$ mit Ableitung $2x - 2$, bei $0$ also $-2$.'
  - typ: zahl
    label: "$f'_+(0)$"
    loesung: "2"
    fehler:
      - wert: "-2"
        meldung: 'Für $0 < x < 2$ ist $x^2 - 2x < 0$. Der Betrag dreht das Vorzeichen um: $f(x) = 2x - x^2$ mit Ableitung $2 - 2x$.'
hinweise:
  - 'Zerlege $x^2 - 2x = x\,(x - 2)$ und bestimme das Vorzeichen links und rechts von $0$.'
  - 'Links von $0$ gilt $f(x) = x^2 - 2x$, rechts davon (bis $2$) gilt $f(x) = 2x - x^2$.'
gefuehrt:
  - text: 'Welches Vorzeichen hat $x^2 - 2x = x(x - 2)$ für $x = -0{,}1$, also links von $0$?'
    teil:
      typ: auswahl
      optionen: ['positiv', 'negativ']
      richtig: [0]
      fehler:
        - wert: 1
          meldung: 'Beide Faktoren $x = -0{,}1$ und $x - 2 = -2{,}1$ sind negativ. Minus mal minus ist plus.'
    erklaerung: '$(-0{,}1)\cdot(-2{,}1) = 0{,}21 > 0$. Links von $0$ ist also $f(x) = x^2 - 2x$, der Betrag ändert nichts.'
  - text: 'Welches Vorzeichen hat $x(x - 2)$ für $x = 0{,}1$?'
    teil:
      typ: auswahl
      optionen: ['positiv', 'negativ']
      richtig: [1]
    erklaerung: '$0{,}1\cdot(-1{,}9) < 0$. Rechts von $0$ gilt also $f(x) = -(x^2 - 2x) = 2x - x^2$.'
  - text: 'Berechne die linksseitige Ableitung, also die Steigung von $x^2 - 2x$ bei $0$.'
    teil:
      typ: zahl
      loesung: "-2"
    erklaerung: '$(x^2 - 2x)'' = 2x - 2$, bei $0$ also $-2$.'
  - text: 'Berechne die rechtsseitige Ableitung, also die Steigung von $2x - x^2$ bei $0$.'
    teil:
      typ: zahl
      loesung: "2"
    erklaerung: '$(2x - x^2)'' = 2 - 2x$, bei $0$ also $2$. Die Werte $-2$ und $2$ sind verschieden: Knick.'
loesung: |
  Ansatz: Den Betrag auflösen, indem wir das Vorzeichen von $x(x - 2)$ links und rechts von $0$ bestimmen.
  ---
  Links von $0$ sind beide Faktoren negativ, das Produkt also positiv: $f(x) = x^2 - 2x$. Rechts von $0$ (bis $2$) ist das Produkt negativ: $f(x) = 2x - x^2$. Beide Stücke haben bei $0$ den Wert $0 = f(0)$.
  ---
  Links: $f'_-(0) = (2x - 2)\big|_{x=0} = -2$. Rechts: $f'_+(0) = (2 - 2x)\big|_{x=0} = 2$.
  ---
  Ergebnis: $-2 \ne 2$, also hat $f$ bei $0$ einen Knick und ist dort nicht differenzierbar. Kontrolle mit dem Differenzenquotienten von rechts: $\frac{2h - h^2}{h} = 2 - h \to 2$.
```

```aufgabe
id: db-einseitig-parameter
titel: Den Knick wegbekommen
niveau: 3
lernziel: 1
kompetenz: begruenden
angabe: |
  Gegeben ist $f(x) = |x - 1|\cdot(x - c)$ mit einer reellen Zahl $c$.

  a) Berechne die einseitigen Ableitungen bei $x_0 = 1$ in Abhängigkeit von $c$.

  b) Für welchen Wert von $c$ ist $f$ bei $1$ differenzierbar? Gib dann $f'(1)$ an.
teile:
  - typ: term
    label: "a) $f'_+(1)$ als Term in $c$"
    variable: c
    loesung: "1 - c"
  - typ: term
    label: "a) $f'_-(1)$ als Term in $c$"
    variable: c
    loesung: "c - 1"
  - typ: zahl
    label: 'b) $c$'
    loesung: "1"
  - typ: zahl
    label: "b) $f'(1)$"
    loesung: "0"
hinweise:
  - '$f(1) = 0$. Also ist der Differenzenquotient $\frac{|h|\,(1 + h - c)}{h}$.'
  - 'Für $h > 0$ ist $\frac{|h|}{h} = 1$, für $h < 0$ ist er $-1$. Danach $h \to 0$ gehen lassen und beide Ergebnisse gleichsetzen.'
loesung: |
  Ansatz: Differenzenquotient an der Stelle $1$. Es ist $f(1) = 0\cdot(1 - c) = 0$ und $f(1 + h) = |h|\,(1 + h - c)$.
  ---
  Von rechts ($h > 0$): $\frac{h(1 + h - c)}{h} = 1 + h - c \to 1 - c$. Von links ($h < 0$): $\frac{-h(1 + h - c)}{h} = -(1 + h - c) \to c - 1$.
  ---
  Differenzierbar genau dann, wenn $1 - c = c - 1$, also $2 = 2c$ und $c = 1$. Dann sind beide einseitigen Ableitungen $0$, also $f'(1) = 0$.
  ---
  Deutung: Für $c = 1$ ist $f(x) = |x - 1|\,(x - 1)$. Der Faktor $x - 1$ wird an der Knickstelle selbst null und „glättet“ den Knick, so wie bei $x\,|x|$. Für jedes andere $c$ bleibt ein Knick.
```

```aufgabe
id: db-oszillation
titel: Zwei schwingende Funktionen (Vertiefung)
niveau: 3
lernziel: 1
kompetenz: begruenden
angabe: |
  Es sei $f(x) = x\sin\frac1x$ und $g(x) = x^2\sin\frac1x$ für $x \ne 0$, und $f(0) = g(0) = 0$. Welche der beiden
  Funktionen ist an der Stelle $0$ differenzierbar?
teile:
  - typ: auswahl
    optionen:
      - 'nur $g$'
      - 'nur $f$'
      - 'beide'
      - 'keine von beiden, weil beide unendlich oft schwingen'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Bei $f$ ist der Differenzenquotient $\frac{f(h)}{h} = \sin\frac1h$. Hat das für $h \to 0$ einen Grenzwert?'
      - wert: 2
        meldung: 'Beide sind bei $0$ stetig. Für die Ableitung zählt aber der Differenzenquotient. Bei $f$ ist er $\sin\frac1h$ und pendelt.'
      - wert: 3
        meldung: 'Schwingen allein verhindert die Ableitung nicht. Bei $g$ ist $\frac{g(h)}{h} = h\sin\frac1h$, und das wird durch $|h|$ eingeschlossen.'
hinweise:
  - 'Bilde für beide Funktionen $\frac{f(h) - f(0)}{h}$ und vereinfache.'
  - 'Für $g$ hilft die Abschätzung $\left|h\sin\frac1h\right| \le |h|$ und der Einschließungssatz.'
loesung: |
  Ansatz: Für beide Funktionen den Differenzenquotienten an der Stelle $0$ bilden. Wegen $f(0) = g(0) = 0$ ist er $\frac{f(h)}{h}$ beziehungsweise $\frac{g(h)}{h}$.
  ---
  $f$: $\frac{h\sin(1/h)}{h} = \sin\frac1h$. Für $h_n = \frac{1}{\pi/2 + 2\pi n}$ ist das $1$, für $h_n = \frac{1}{3\pi/2 + 2\pi n}$ ist es $-1$. Kein Grenzwert, also nicht differenzierbar.
  ---
  $g$: $\frac{h^2\sin(1/h)}{h} = h\sin\frac1h$, und $\left|h\sin\frac1h\right| \le |h| \to 0$. Nach dem Einschließungssatz geht der Quotient gegen $0$. Also ist $g$ differenzierbar mit $g'(0) = 0$. Richtig ist „nur $g$“.
```

## Differenzierbar heißt stetig, aber nicht umgekehrt

```aufgabe
id: db-check-stetig-differenz
titel: Stetigkeit anders geschrieben
niveau: 1
art: check
angabe: |
  Welche Aussage ist gleichwertig dazu, dass $f$ an der Stelle $x_0$ stetig ist?
  Herkunft: [Kapitel 12, „Stetigkeit an einer Stelle“](/lernen/mathe3/grenzwerte-stetigkeit/stetigkeit-an-einer-stelle).
teile:
  - typ: auswahl
    optionen:
      - '$\lim_{x \to x_0}\big(f(x) - f(x_0)\big) = 0$'
      - '$f(x_0) = 0$'
      - '$\lim_{x \to x_0} f(x) = 0$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Der Funktionswert darf beliebig sein. Stetigkeit verlangt nur, dass die Funktionswerte in der Nähe gegen $f(x_0)$ gehen.'
      - wert: 2
        meldung: 'Der Grenzwert soll gleich $f(x_0)$ sein, nicht gleich $0$. Das ist nur dann dasselbe, wenn zufällig $f(x_0) = 0$ ist.'
hinweise:
  - 'Stetig heißt $\lim_{x \to x_0} f(x) = f(x_0)$. Bring $f(x_0)$ auf die linke Seite.'
loesung: |
  Stetigkeit bedeutet $\lim_{x\to x_0} f(x) = f(x_0)$.
  ---
  Zieht man auf beiden Seiten die Konstante $f(x_0)$ ab, erhält man $\lim_{x\to x_0}(f(x) - f(x_0)) = 0$. Die Abstände der Funktionswerte von $f(x_0)$ werden also beliebig klein.
```

**Worum geht es in einem Satz?** Wir beweisen: Wo eine Funktion eine Ableitung hat, kann sie keinen Sprung haben.
Das ist einer der wichtigsten Sätze des Kapitels. Er gehört zu den Standardfragen der mündlichen Prüfung,
**einschließlich Beweis**.

Zuerst ein Bild. An einem Sprung liegen die Punkte links und rechts der Sprungstelle auf verschiedenen Höhen. Eine
Sekante, die über den Sprung hinwegführt, muss den Höhenunterschied auf einer winzigen Breite überwinden. Sie wird
also immer steiler, je näher man herangeht. Eine endliche Ableitung kann so nicht entstehen.

:::beispiel[Sekanten über einen Sprung hinweg]
Wir nehmen die Sprungfunktion $s(x) = 0$ für $x < 0$ und $s(x) = 1$ für $x \ge 0$. Der Funktionswert an der
Sprungstelle ist $s(0) = 1$. Wir berechnen Differenzenquotienten von links, also mit negativem $h$.

1. $h = -0{,}1$: $\dfrac{s(-0{,}1) - s(0)}{-0{,}1} = \dfrac{0 - 1}{-0{,}1} = 10$.
2. $h = -0{,}01$: $\dfrac{0 - 1}{-0{,}01} = 100$.
3. $h = -0{,}001$: $\dfrac{0 - 1}{-0{,}001} = 1000$.

Allgemein ist der Quotient $\frac{-1}{h}$, und der wächst für $h \to 0^-$ über alle Grenzen. Von links gibt es also
keine endliche Ableitung. Der Sprung zerstört die Differenzierbarkeit.
:::

### Der Satz und sein Beweis

:::satz[Differenzierbarkeit impliziert Stetigkeit]
Ist $f$ an der Stelle $x_0$ differenzierbar, so ist $f$ an der Stelle $x_0$ stetig.
:::

Das Wort „impliziert“ heißt „hat zur Folge“. In Formelschreibweise schreibt man
$$f \text{ differenzierbar in } x_0 \;\Longrightarrow\; f \text{ stetig in } x_0 .$$
Den Pfeil $\Longrightarrow$ liest man „daraus folgt“.

Das folgende Bild zeigt noch einmal die Sprungfunktion aus dem Beispiel. Genau so ein Verhalten schließt der Satz aus.

```plot
x: [-1.5, 1.5]
y: [-0.5, 1.5]
graphen:
  - { f: "0", label: "s(x) = 0 für x < 0", farbe: 0, von: -1.5, bis: 0 }
  - { f: "1", label: "s(x) = 1 für x ≥ 0", farbe: 0, von: 0, bis: 1.5 }
strecken:
  - { von: [-1, 0], nach: [0, 1], farbe: 1, gestrichelt: true }
  - { von: [-0.5, 0], nach: [0, 1], farbe: 1, gestrichelt: true }
  - { von: [-0.2, 0], nach: [0, 1], farbe: 1, gestrichelt: true }
punkte:
  - { x: 0, y: 0, offen: true }
  - { x: 0, y: 1, label: "s(0) = 1" }
beschriftung: Die Sprungfunktion s und drei Sekanten von links zum Punkt (0 | 1). Je näher der linke Punkt an 0 rückt, desto steiler wird die Sekante. Ihre Steigungen 1, 2 und 5 wachsen über alle Grenzen.
```

Diese Stelle ist für fast alle ungewohnt. Lies den Beweis langsam, Schritt für Schritt. Jeder Schritt hat einen Grund.

:::beweis
**Ziel:** Wir müssen zeigen, dass $\lim_{x\to x_0}\big(f(x) - f(x_0)\big) = 0$ ist. Das ist gleichwertig zur
Stetigkeit $\lim_{x\to x_0} f(x) = f(x_0)$: Man zieht auf beiden Seiten die Konstante $f(x_0)$ ab.

**Schritt 1, ein Trick mit einer nahrhaften Eins.** Für $x \ne x_0$ ist $\frac{x - x_0}{x - x_0} = 1$. Mit dieser Eins
multiplizieren wir die Differenz:
$$f(x) - f(x_0) = \frac{f(x) - f(x_0)}{x - x_0}\cdot(x - x_0).$$
Der erste Faktor ist der Differenzenquotient, der zweite der Abstand $x - x_0$.

**Schritt 2, der erste Faktor.** Für $x \to x_0$ geht der Differenzenquotient nach Voraussetzung gegen $f'(x_0)$. Das
ist eine **reelle Zahl**, also endlich. Genau hier steckt die Voraussetzung „differenzierbar“.

**Schritt 3, der zweite Faktor.** Für $x \to x_0$ geht $x - x_0$ gegen $0$.

**Schritt 4, Grenzwertsatz für Produkte.** Beide Faktoren haben einen endlichen Grenzwert. Also hat auch das Produkt
einen, nämlich das Produkt der Grenzwerte:
$$\lim_{x\to x_0}\big(f(x) - f(x_0)\big) = f'(x_0)\cdot 0 = 0 .$$

**Schritt 5, Schluss.** Daraus folgt $\lim_{x\to x_0} f(x) = f(x_0)$. Das ist die Definition der Stetigkeit in $x_0$.
:::

```aufgabe
id: db-check-endlich
titel: Wo braucht der Beweis die Voraussetzung?
niveau: 1
art: check
angabe: |
  An welcher Stelle des Beweises wird verwendet, dass $f$ an der Stelle $x_0$ differenzierbar ist?
teile:
  - typ: auswahl
    optionen:
      - 'Der Differenzenquotient hat den endlichen Grenzwert $f''(x_0)$, also darf man den Grenzwertsatz für Produkte anwenden.'
      - 'Der Faktor $x - x_0$ geht gegen $0$.'
      - 'Man darf mit $\frac{x - x_0}{x - x_0}$ multiplizieren.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Dass $x - x_0 \to 0$ geht, gilt für jede Funktion. Dafür braucht man keine Voraussetzung.'
      - wert: 2
        meldung: 'Diese Erweiterung ist für jedes $x \ne x_0$ erlaubt, unabhängig von $f$.'
hinweise:
  - 'Welcher Schritt würde für die Sprungfunktion aus dem Beispiel scheitern?'
loesung: |
  Nur der erste Faktor hängt von $f$ ab. Er muss einen **endlichen** Grenzwert haben.
  ---
  Das ist genau die Differenzierbarkeit. Erst damit ist der Grenzwertsatz für Produkte anwendbar.
```

**Was haben wir gezeigt?** Wenn die Sekantensteigungen gegen eine feste Zahl streben, dann müssen die Höhenunterschiede
$f(x) - f(x_0)$ beim Zusammenrücken verschwinden. Denn Höhenunterschied ist Steigung mal Breite, und die Breite geht
gegen $0$. Einen Sprung gibt es also nicht.

**Ein typisches Missverständnis:** „Im Beweis steht $f'(x_0)\cdot 0$, das ist doch immer $0$. Wozu braucht man dann
die Differenzierbarkeit?“ Ohne sie hätte der erste Faktor womöglich gar keinen Grenzwert oder strebte gegen
$\infty$. Ein Ausdruck vom Typ „$\infty\cdot 0$“ ist unbestimmt, und der Grenzwertsatz für Produkte gilt nur für
endliche Grenzwerte. Im Beispiel mit der Sprungfunktion strebt der Quotient gegen $\infty$, und die Differenzen
$s(x) - s(0)$ gehen tatsächlich **nicht** gegen $0$.

### Die Umkehrung ist falsch

Gilt auch umgekehrt: „Wer stetig ist, ist differenzierbar“? Nein. Das Standard-Gegenbeispiel kennst du aus
[13.2 Einseitige Ableitungen](/lernen/mathe3/differenzierbarkeit/einseitige-ableitungen-knick-senkrechte-tangente-oszillation):
Die Betragsfunktion $|x|$ ist bei $0$ stetig, denn $|x| \to 0 = |0|$. Sie ist dort aber nicht differenzierbar, denn
die einseitigen Ableitungen sind $-1$ und $1$.

```aufgabe
id: db-check-umkehrung
titel: Stetig und doch ohne Ableitung
niveau: 1
art: check
angabe: |
  Welche Eigenschaften hat $f(x) = |x + 1|$ an der Stelle $x_0 = -1$?
teile:
  - typ: auswahl
    optionen:
      - 'stetig, aber nicht differenzierbar'
      - 'stetig und differenzierbar'
      - 'weder stetig noch differenzierbar'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Der Differenzenquotient an der Stelle $-1$ ist $\frac{|h|}{h}$, also $1$ von rechts und $-1$ von links.'
      - wert: 2
        meldung: 'Der Graph springt nicht: Für $x \to -1$ geht $|x + 1|$ gegen $0 = f(-1)$.'
hinweise:
  - 'Der Graph ist ein um $1$ nach links verschobenes „V“.'
loesung: |
  Stetig: $|x + 1| \to 0 = f(-1)$ für $x \to -1$.
  ---
  Nicht differenzierbar: Der Differenzenquotient $\frac{|h|}{h}$ hat von rechts den Grenzwert $1$ und von links $-1$. Das ist ein Knick, wie bei $|x|$ an der Stelle $0$.
```

Differenzierbarkeit ist also die **stärkere** Eigenschaft. Jede differenzierbare Funktion ist stetig, aber nicht jede
stetige Funktion ist differenzierbar. Es gibt sogar Funktionen, die überall stetig und **nirgends** differenzierbar
sind. Die bekannteste ist die Weierstraß-Funktion. Ihr Graph besteht, grob gesagt, nur aus Knicken. Das ist eine
Vertiefung und kein Prüfungsstoff.

:::achtung[Die Umkehrung benutzt]
**Falsch:** „$f(x) = |x - 4|$ ist überall stetig. Nach dem Satz ist $f$ also überall differenzierbar, insbesondere bei $4$.“

**Richtig:** Der Satz sagt nur „differenzierbar, also stetig“, nicht umgekehrt. Bei $4$ rechnet man nach:
$\frac{f(4 + h) - f(4)}{h} = \frac{|h|}{h}$, und das ist $1$ für $h > 0$ und $-1$ für $h < 0$. Also ist $f$ bei $4$
stetig, aber nicht differenzierbar.
:::

### Die Kontraposition: unstetig, also nicht differenzierbar

Jeder Satz der Form „Aus A folgt B“ hat eine **Kontraposition**: „Wenn B nicht gilt, dann gilt auch A nicht.“ Die
Kontraposition ist logisch gleichwertig. Ein Alltagsbeispiel: „Wenn es regnet, ist die Straße nass“ ist gleichwertig
zu „Wenn die Straße trocken ist, regnet es nicht.“ Für unseren Satz heißt das:

:::merke[Kontraposition des Satzes]
Ist $f$ an der Stelle $x_0$ **nicht stetig**, so ist $f$ dort auch **nicht differenzierbar**.
:::

In der Praxis ist das die nützlichere Form. Bei stückweise definierten Funktionen prüft man deshalb **zuerst die
Stetigkeit**. Ist sie verletzt, ist man fertig: keine Ableitung.

:::beispiel[Gleiche Steigungen, trotzdem keine Ableitung]
$$f(x) = \begin{cases} 2x + 1, & x < 1 \\ x^2 + 1, & x \ge 1 \end{cases}$$
1. **Stetigkeit prüfen.** Von links: $\lim_{x\to 1^-}(2x + 1) = 3$. Funktionswert: $f(1) = 1 + 1 = 2$. Es ist $3 \ne 2$,
   also springt $f$ bei $1$ und ist dort unstetig.
2. **Folgerung.** Nach der Kontraposition ist $f$ bei $1$ nicht differenzierbar. Fertig.
3. **Die Falle.** Die Stücke haben bei $1$ dieselbe Steigung: $(2x + 1)' = 2$ und $(x^2 + 1)' = 2x = 2$. Wer nur die
   Steigungen vergleicht, hält $f$ für differenzierbar. Der Differenzenquotient von links zeigt aber das wahre Bild:
   $\frac{f(1 + h) - f(1)}{h} = \frac{2 + 2h + 1 - 2}{h} = \frac{1 + 2h}{h} = 2 + \frac1h$, und das geht für $h \to 0^-$ gegen $-\infty$.
:::

```plot
x: [-1, 3]
y: [-1, 8]
graphen:
  - { f: "2*x + 1", label: "2x + 1 (x < 1)", farbe: 0, von: -1, bis: 1 }
  - { f: "x^2 + 1", label: "x² + 1 (x ≥ 1)", farbe: 1, von: 1, bis: 2.6 }
punkte:
  - { x: 1, y: 3, offen: true }
  - { x: 1, y: 2, label: "f(1) = 2" }
beschriftung: Zwei Stücke mit derselben Steigung 2 an der Stelle 1, aber mit einem Sprung von 3 auf 2. Die Funktion ist bei 1 unstetig und daher nicht differenzierbar.
```

:::achtung[Nur Steigungen verglichen]
**Falsch:** „$f(x) = x + 1$ für $x < 0$ und $f(x) = x$ für $x \ge 0$. Beide Stücke haben die Steigung $1$, also ist
$f'(0) = 1$.“

**Richtig:** Zuerst die Stetigkeit: Von links geht $f(x)$ gegen $1$, aber $f(0) = 0$. Die Funktion springt, also ist
sie bei $0$ nicht differenzierbar. Gleiche Steigungen der Stücke reichen nur dann, wenn die Stücke an der Nahtstelle
auch dieselbe Höhe haben.
:::

:::merke[Die Logik der beiden Begriffe]
| Aussage | Wahr? | Begründung |
|---|---|---|
| differenzierbar in $x_0$, also stetig in $x_0$ | ja | Satz dieser Lektion. |
| stetig in $x_0$, also differenzierbar in $x_0$ | nein | Gegenbeispiel $\lvert x\rvert$ bei $0$. |
| nicht stetig, also nicht differenzierbar | ja | Kontraposition des Satzes. |
| nicht differenzierbar, also nicht stetig | nein | Gegenbeispiel $\lvert x\rvert$ bei $0$. |
:::

```reflexion
frage: Die Kubikwurzel $\sqrt[3]{x}$ ist bei $0$ stetig, obwohl ihr Differenzenquotient gegen $+\infty$ strebt. Widerspricht das dem Satz?
antwort: |
  Nein. Der Satz sagt nur: **Wenn** $f$ differenzierbar ist, **dann** ist $f$ stetig. Über nicht differenzierbare
  Funktionen sagt er nichts. Eine Funktion ohne Ableitung kann stetig sein (wie $\sqrt[3]{x}$ oder $|x|$) oder
  unstetig (wie die Sprungfunktion). Im Beweis würde bei $\sqrt[3]{x}$ der Schritt mit dem Grenzwertsatz scheitern,
  weil der erste Faktor gegen $\infty$ geht. Dass $\sqrt[3]{x}$ trotzdem stetig ist, muss man auf anderem Weg zeigen.
```

### Übungen

```aufgabe
id: db-sprung
titel: Stetig? Differenzierbar?
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Gegeben ist
  $$f(x) = \begin{cases} 2x + 3, & x < 1 \\ 4x, & x \ge 1. \end{cases}$$
  Welche Aussage über $f$ an der Stelle $x_0 = 1$ ist richtig?
teile:
  - typ: auswahl
    optionen:
      - 'stetig und differenzierbar'
      - 'stetig, aber nicht differenzierbar'
      - 'nicht stetig und daher nicht differenzierbar'
      - 'nicht stetig, aber differenzierbar'
    richtig: [2]
    fehler:
      - wert: 0
        meldung: 'Prüfe zuerst die Stetigkeit: Der linksseitige Grenzwert ist $2 + 3 = 5$, der Funktionswert $f(1) = 4$.'
      - wert: 1
        meldung: 'Vergleiche den linksseitigen Grenzwert $5$ mit dem Funktionswert $4$. Ist $f$ wirklich stetig?'
      - wert: 3
        meldung: 'Diese Kombination gibt es nie. Jede differenzierbare Funktion ist stetig.'
hinweise:
  - 'Berechne $\lim_{x\to 1^-}(2x + 3)$ und vergleiche mit $f(1)$.'
loesung: |
  Ansatz: Zuerst die Stetigkeit prüfen, weil eine unstetige Funktion nach der Kontraposition nie differenzierbar ist. Linksseitiger Grenzwert: $\lim_{x\to 1^-}(2x + 3) = 5$. Funktionswert: $f(1) = 4$.
  ---
  Es ist $5 \neq 4$, also springt $f$ bei $1$. Daher ist $f$ dort nicht stetig und nach der Kontraposition auch nicht differenzierbar. Die letzte Option ist nie möglich.
```

```aufgabe
id: db-gegenbeispiel
titel: Ein Gegenbeispiel auswählen
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Welche Funktion ist an der Stelle $x_0 = 3$ stetig, aber **nicht** differenzierbar?
teile:
  - typ: auswahl
    optionen:
      - '$f(x) = |x - 3|$'
      - '$f(x) = (x - 3)^2$'
      - '$f(x) = \frac{1}{x - 3}$ mit $f(3) = 0$'
      - '$f(x) = x^3 - 3$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Eine Parabel ist überall differenzierbar. Ihre Ableitung $2(x - 3)$ ist bei $3$ gleich $0$.'
      - wert: 2
        meldung: 'Diese Funktion hat bei $3$ einen Pol, sie ist dort nicht einmal stetig.'
      - wert: 3
        meldung: 'Polynome sind überall differenzierbar. Hier ist $f''(3) = 3\cdot 3^2 = 27$.'
hinweise:
  - 'Gesucht ist ein Knick bei $3$, ohne Sprung.'
loesung: |
  Ansatz: Ein Knick ohne Sprung entsteht, wenn man die Betragsfunktion so verschiebt, dass der Knick bei $3$ liegt.
  ---
  $f(x) = |x - 3|$ ist stetig, weil $|x - 3| \to 0 = f(3)$. Der Differenzenquotient $\frac{|h|}{h}$ ist $\pm 1$ je nach Vorzeichen von $h$. Also gibt es keine Ableitung. Die anderen Optionen sind differenzierbar oder nicht stetig.
```

```aufgabe
id: db-sprung-quotient
titel: Wie steil werden die Sekanten?
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Gegeben ist $f(x) = x$ für $x < 0$ und $f(x) = x + 3$ für $x \ge 0$.

  a) Berechne den Differenzenquotienten $\frac{f(h) - f(0)}{h}$ für $h = -0{,}1$.

  b) Berechne ihn für $h = -0{,}01$.

  c) Was zeigt das über die linksseitige Ableitung an der Stelle $0$?
teile:
  - typ: zahl
    label: 'a) $h = -0{,}1$'
    loesung: "(-0.1 - 3)/(-0.1)"
    anzeige: '31'
    fehler:
      - wert: "1"
        meldung: 'Du hast $f(0) = 0$ gesetzt. Für $x \ge 0$ gilt aber das zweite Stück $x + 3$, also $f(0) = 0 + 3 = 3$.'
      - wert: "-31"
        meldung: 'Zähler $-0{,}1 - 3 = -3{,}1$ und Nenner $-0{,}1$ sind beide negativ. Der Quotient ist positiv.'
  - typ: zahl
    label: 'b) $h = -0{,}01$'
    loesung: "(-0.01 - 3)/(-0.01)"
    anzeige: '301'
    fehler:
      - wert: "1"
        meldung: 'Du hast $f(0) = 0$ gesetzt. Der Funktionswert an der Nahtstelle ist $f(0) = 3$, denn für $x \ge 0$ gilt das zweite Stück $x + 3$.'
  - typ: auswahl
    label: 'c) Folgerung'
    optionen:
      - 'Der Quotient strebt gegen $+\infty$. Es gibt keine linksseitige Ableitung, weil $f$ bei $0$ springt.'
      - 'Die linksseitige Ableitung ist $1$, wie die Steigung des linken Stücks.'
      - 'Die linksseitige Ableitung ist $301$.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Die Steigung des Stücks wäre nur dann die einseitige Ableitung, wenn das Stück bei $0$ die Höhe $f(0)$ erreicht. Hier fehlt der Anschluss.'
      - wert: 2
        meldung: '$301$ ist nur ein Wert für ein bestimmtes $h$. Für kleinere $h$ wird der Quotient noch größer.'
hinweise:
  - 'Für $h < 0$ ist $f(h) = h$, und es ist $f(0) = 3$.'
  - 'Der Quotient ist $\frac{h - 3}{h} = 1 - \frac{3}{h}$. Was passiert mit $-\frac{3}{h}$ für negative $h$ nahe $0$?'
loesung: |
  Ansatz: Für $h < 0$ ist $f(h) = h$, und $f(0) = 3$. Der Quotient ist also $\frac{h - 3}{h} = 1 - \frac3h$.
  ---
  a) $1 - \frac{3}{-0{,}1} = 1 + 30 = 31$. b) $1 - \frac{3}{-0{,}01} = 1 + 300 = 301$.
  ---
  c) Für $h \to 0^-$ wird $-\frac3h$ beliebig groß, der Quotient strebt gegen $+\infty$. Keine linksseitige Ableitung. Das passt zum Satz: $f$ springt bei $0$ von $0$ auf $3$, ist also unstetig und damit nicht differenzierbar.
```

```aufgabe
id: db-logik
titel: Was folgt, was nicht?
niveau: 2
lernziel: 2
kompetenz: begruenden
angabe: |
  Über eine Funktion $f$ und die Stelle $x_0 = 2$ ist jeweils nur eine Information bekannt. Welche der Schlüsse sind
  **immer** richtig? Kreuze alle an.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$f''(2) = 5$ existiert. Also ist $f$ bei $2$ stetig.'
      - '$f$ ist bei $2$ stetig. Also existiert $f''(2)$.'
      - '$f$ springt bei $2$. Also existiert $f''(2)$ nicht.'
      - '$f''(2)$ existiert nicht. Also springt $f$ bei $2$.'
    richtig: [0, 2]
    fehler:
      - wert: [0, 1, 2]
        meldung: 'Der zweite Schluss ist die Umkehrung des Satzes. Gegenbeispiel: $|x - 2|$ ist bei $2$ stetig, hat dort aber keine Ableitung.'
      - wert: [0, 2, 3]
        meldung: 'Der vierte Schluss ist falsch. Auch ein Knick wie bei $|x - 2|$ verhindert die Ableitung, ohne dass ein Sprung vorliegt.'
      - wert: [0]
        meldung: 'Der dritte Schluss ist die Kontraposition des Satzes und damit ebenfalls immer richtig.'
hinweise:
  - 'Der Satz lautet: differenzierbar, also stetig. Welche Aussagen sind der Satz selbst oder seine Kontraposition?'
  - 'Für die falschen Schlüsse genügt ein Gegenbeispiel mit einem Knick bei $2$.'
loesung: |
  Ansatz: Wir vergleichen jeden Schluss mit dem Satz „differenzierbar, also stetig“ und seiner Kontraposition „unstetig, also nicht differenzierbar“.
  ---
  Schluss 1 ist der Satz selbst, also richtig. Schluss 3 ist die Kontraposition, also ebenfalls richtig.
  ---
  Schluss 2 ist die Umkehrung, Schluss 4 die Umkehrung der Kontraposition. Beide widerlegt $f(x) = |x - 2|$: stetig, ohne Sprung, aber ohne Ableitung bei $2$. Richtig sind also genau 1 und 3.
```

```aufgabe
id: db-stetig-parameter
titel: Erst stetig machen, dann prüfen
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Gegeben ist
  $$f(x) = \begin{cases} a x + 1, & x < 2 \\ x^2, & x \ge 2. \end{cases}$$
  a) Bestimme $a$ so, dass $f$ bei $2$ stetig ist.

  b) Ist $f$ mit diesem $a$ bei $2$ auch differenzierbar?
teile:
  - typ: zahl
    label: 'a) $a$'
    loesung: "3/2"
    anzeige: '\tfrac32'
    fehler:
      - wert: "2"
        meldung: 'Du hast vermutlich das $+1$ im linken Stück vergessen und $2a = 4$ gelöst. Mit $a = 2$ ist der linksseitige Grenzwert aber $2\cdot 2 + 1 = 5$, nicht $f(2) = 4$. Die Gleichung lautet $2a + 1 = 4$.'
      - wert: "4"
        meldung: 'Du hast vermutlich die Steigungen gleichgesetzt. Für die Stetigkeit müssen die **Höhen** übereinstimmen: $2a + 1 = 2^2$.'
  - typ: auswahl
    label: 'b) differenzierbar bei $2$?'
    optionen: ['ja', 'nein']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Stetigkeit allein reicht nicht. Vergleiche die Steigung $a$ des linken Stücks mit der Steigung $2x = 4$ des rechten Stücks.'
hinweise:
  - 'Stetigkeit: linksseitiger Grenzwert $2a + 1$ gleich Funktionswert $f(2) = 4$.'
  - 'Steigung links ist $a$, Steigung rechts ist $(x^2)'' = 2x$ an der Stelle $2$.'
loesung: |
  Ansatz: Stetigkeit heißt, dass die beiden Stücke an der Nahtstelle dieselbe Höhe haben. Links: $\lim_{x\to 2^-}(ax + 1) = 2a + 1$. Rechts und Funktionswert: $f(2) = 4$.
  ---
  a) $2a + 1 = 4$ ergibt $a = \frac32$.
  ---
  b) Steigungen: links $a = \frac32$, rechts $2\cdot 2 = 4$. Weil $f$ stetig ist, sind das die einseitigen Ableitungen. Sie sind verschieden, also hat $f$ einen Knick und ist bei $2$ nicht differenzierbar. Stetig ja, differenzierbar nein: genau die Situation, die zeigt, dass die Umkehrung des Satzes falsch ist.
```

```aufgabe
id: db-beweis-stetig
titel: Den Beweis selbst führen
niveau: 2
lernziel: 2
kompetenz: begruenden
angabe: |
  Beweise: Ist $f$ an der Stelle $x_0$ differenzierbar, so ist $f$ dort stetig. Schreib jeden Schritt mit Begründung auf.
teile:
  - typ: auswahl
    label: 'Mit welchem Faktor multipliziert man $f(x) - f(x_0)$ zu Beginn?'
    optionen:
      - '$\dfrac{x - x_0}{x - x_0}$, also mit $1$'
      - '$\dfrac{f(x)}{f(x)}$'
      - '$h$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Damit entsteht kein Differenzenquotient. Außerdem könnte $f(x) = 0$ sein.'
      - wert: 2
        meldung: 'Mit $h$ zu multiplizieren ändert den Wert. Man darf nur mit $1$ multiplizieren, geschickt geschrieben.'
  - typ: text
    label: 'Beweis'
    muster: |
      Für $x \neq x_0$ ist $f(x) - f(x_0) = \frac{f(x) - f(x_0)}{x - x_0}\cdot(x - x_0)$. Der erste Faktor geht nach
      Voraussetzung gegen die reelle Zahl $f'(x_0)$, der zweite gegen $0$. Nach dem Grenzwertsatz für Produkte geht das
      Produkt gegen $f'(x_0)\cdot 0 = 0$. Also $f(x) \to f(x_0)$, das heißt, $f$ ist stetig in $x_0$. Die Differenzierbarkeit
      wird gebraucht, damit der erste Faktor einen endlichen Grenzwert hat.
hinweise:
  - 'Ziel: $\lim_{x\to x_0}(f(x) - f(x_0)) = 0$.'
  - 'Schreibe $f(x) - f(x_0)$ als Produkt aus Differenzenquotient und $(x - x_0)$ und wende den Grenzwertsatz für Produkte an.'
gefuehrt:
  - text: 'Was genau ist zu zeigen? Formuliere die Stetigkeit als Grenzwert einer Differenz.'
    erklaerung: 'Zu zeigen ist $\lim_{x\to x_0}(f(x) - f(x_0)) = 0$. Das ist gleichwertig zu $\lim_{x\to x_0} f(x) = f(x_0)$.'
  - text: 'Welcher Ausdruck entsteht, wenn man $f(x) - f(x_0)$ mit $\frac{x - x_0}{x - x_0}$ multipliziert und umsortiert?'
    teil:
      typ: auswahl
      optionen:
        - '$\dfrac{f(x) - f(x_0)}{x - x_0}\cdot(x - x_0)$'
        - '$\dfrac{f(x) - f(x_0)}{x - x_0} + (x - x_0)$'
      richtig: [0]
      fehler:
        - wert: 1
          meldung: 'Multiplizieren erzeugt ein **Produkt**, keine Summe.'
    erklaerung: 'Differenzenquotient mal Abstand. Für $x \ne x_0$ ist das genau $f(x) - f(x_0)$.'
  - text: 'Gegen welchen Wert geht das Produkt für $x \to x_0$, wenn $f''(x_0) = 7$ ist?'
    teil:
      typ: zahl
      loesung: "7*0"
      fehler:
        - wert: "7"
          meldung: 'Der zweite Faktor $x - x_0$ geht gegen $0$. Das Produkt geht gegen $7\cdot 0$.'
    erklaerung: 'Grenzwertsatz für Produkte: $7\cdot 0 = 0$. Allgemein $f''(x_0)\cdot 0 = 0$.'
  - text: 'Ziehe den Schluss und benenne, wo die Voraussetzung gebraucht wurde.'
    erklaerung: 'Also $f(x) \to f(x_0)$, $f$ ist stetig. Die Voraussetzung sichert, dass der erste Faktor einen **endlichen** Grenzwert hat. Nur dann gilt der Grenzwertsatz für Produkte.'
loesung: |
  Ansatz: Stetigkeit heißt $\lim_{x\to x_0}(f(x) - f(x_0)) = 0$. Wir bringen den Differenzenquotienten ins Spiel, weil nur über ihn etwas bekannt ist.
  ---
  Für $x \ne x_0$ gilt $f(x) - f(x_0) = \dfrac{f(x) - f(x_0)}{x - x_0}\cdot (x - x_0)$, denn wir haben nur mit $1 = \frac{x - x_0}{x - x_0}$ multipliziert.
  ---
  Der erste Faktor geht gegen die reelle Zahl $f'(x_0)$, der zweite gegen $0$. Grenzwertsatz für Produkte: Das Produkt geht gegen $f'(x_0)\cdot 0 = 0$.
  ---
  Also $\lim_{x\to x_0} f(x) = f(x_0)$: $f$ ist stetig. Die Differenzierbarkeit wird genau dafür gebraucht, dass $f'(x_0)$ als **endlicher** Grenzwert existiert.
```

```aufgabe
id: db-stetig-hilfsfunktion
titel: Eine Lücke stetig schließen
niveau: 3
lernziel: 2
kompetenz: begruenden
angabe: |
  Es sei $f$ an der Stelle $0$ differenzierbar mit $f(0) = 0$. Wir setzen
  $$g(x) = \frac{f(x)}{x} \text{ für } x \ne 0 .$$
  a) Welchen Wert muss man für $g(0)$ wählen, damit $g$ bei $0$ stetig ist? Antworte allgemein und zeige, dass das funktioniert.

  b) Gib diesen Wert konkret für $f(x) = \sin(2x)$ an.
teile:
  - typ: text
    label: 'a) Wert und Begründung'
    muster: |
      Man wählt $g(0) = f'(0)$. Begründung: Für $x \ne 0$ ist $g(x) = \frac{f(x) - f(0)}{x - 0}$, also genau der
      Differenzenquotient an der Stelle $0$. Weil $f$ bei $0$ differenzierbar ist, geht er für $x \to 0$ gegen $f'(0)$.
      Mit $g(0) = f'(0)$ gilt also $\lim_{x\to 0} g(x) = g(0)$, und $g$ ist stetig.
  - typ: zahl
    label: 'b) $g(0)$ für $f(x) = \sin(2x)$'
    loesung: "2*cos(0)"
    anzeige: '2'
hinweise:
  - 'Wegen $f(0) = 0$ kann man $\frac{f(x)}{x}$ als $\frac{f(x) - f(0)}{x - 0}$ schreiben. Was ist das?'
  - 'Der Grenzwert dieses Ausdrucks ist die Ableitung. In b) hilft die Kettenregel: $(\sin(2x))'' = 2\cos(2x)$.'
loesung: |
  Ansatz: Wir erkennen in $\frac{f(x)}{x}$ einen Differenzenquotienten. Wegen $f(0) = 0$ ist $\frac{f(x)}{x} = \frac{f(x) - f(0)}{x - 0}$.
  ---
  Weil $f$ bei $0$ differenzierbar ist, gilt $\lim_{x\to 0} g(x) = f'(0)$. Stetig ist $g$ genau dann, wenn $g(0)$ gleich diesem Grenzwert ist. Also $g(0) = f'(0)$.
  ---
  b) $f'(x) = 2\cos(2x)$, also $g(0) = f'(0) = 2$. Kontrolle mit Zahlen: $\frac{\sin(0{,}02)}{0{,}01} \approx 1{,}9999$.
  ---
  Diese Idee, einen Differenzenquotienten durch seinen Grenzwert stetig zu ergänzen, ist genau der Kern des Beweises der Kettenregel in [13.4 Ableitungsregeln beweisen](/lernen/mathe3/differenzierbarkeit/ableitungsregeln-beweisen-summe-produkt-quotient-kette).
```

## Ableitungsregeln beweisen: Summe, Produkt, Quotient, Kette

```aufgabe
id: db-check-produktregel
titel: Die Produktregel anwenden
niveau: 1
art: check
angabe: |
  Berechne für $p(x) = x^2\,(x + 1)$ die Ableitung an der Stelle $x = 1$ mit der Produktregel.
  Herkunft: [Kapitel 9, „Produktregel und Quotientenregel“](/lernen/mathe3/differentialrechnung/produktregel-und-quotientenregel).
teile:
  - typ: zahl
    label: "$p'(1)$"
    loesung: "2*1*(1 + 1) + 1^2*1"
    anzeige: '5'
    fehler:
      - wert: "2"
        meldung: |
          Du hast die Ableitungen multipliziert: $2x\cdot 1 = 2$. Die Produktregel lautet aber
          $(uv)' = u'v + uv'$, also zwei Summanden.
hinweise:
  - "$(uv)' = u'v + uv'$ mit $u = x^2$ und $v = x + 1$."
loesung: |
  Produktregel mit $u = x^2$, $v = x + 1$: $p'(x) = 2x\,(x + 1) + x^2\cdot 1$.
  ---
  $p'(1) = 2\cdot 2 + 1 = 5$. Kontrolle: $p(x) = x^3 + x^2$, also $p'(x) = 3x^2 + 2x$ und $p'(1) = 5$.
```

**Worum geht es in einem Satz?** In Kapitel 9 hast du die Ableitungsregeln angewendet. Hier zeigen wir, **warum** sie
gelten. Jede Herleitung beginnt beim Differenzenquotienten und benutzt nur Grenzwertsätze aus
[12.5 Grenzwerte berechnen](/lernen/mathe3/grenzwerte-stetigkeit/grenzwerte-berechnen-einsetzen-kuerzen-erweitern).
Diese Sätze sagen: Existieren beide Grenzwerte, so ist der Grenzwert einer Summe die Summe der Grenzwerte. Für
Produkte gilt dasselbe, und für Quotienten auch, wenn der Grenzwert im Nenner nicht $0$ ist.

In der mündlichen Prüfung wird gern eine dieser Herleitungen verlangt, am häufigsten die Produktregel. Im Folgenden
seien $f$ und $g$ an der Stelle $x$ differenzierbar. Wir schreiben $h$ wieder für den kleinen Schritt.

### Summen- und Faktorregel

:::satz[Summen- und Faktorregel]
Die Funktionen $f + g$ und $c\cdot f$ (für eine Zahl $c$) sind an der Stelle $x$ differenzierbar, und es gilt
$$(f + g)'(x) = f'(x) + g'(x), \qquad (c\,f)'(x) = c\,f'(x).$$
:::

:::beweis
Der Differenzenquotient der Summe zerfällt in zwei Differenzenquotienten:
$$\frac{(f + g)(x + h) - (f + g)(x)}{h} = \frac{f(x + h) - f(x)}{h} + \frac{g(x + h) - g(x)}{h}.$$
Der erste Summand geht gegen $f'(x)$, der zweite gegen $g'(x)$. Nach dem Grenzwertsatz für Summen geht die Summe
gegen $f'(x) + g'(x)$. Genauso ist $\frac{c f(x + h) - c f(x)}{h} = c\cdot\frac{f(x + h) - f(x)}{h} \to c\,f'(x)$.
:::

Die Summe ist also harmlos. Beim Produkt ist es anders, und das zeigt schon ein Zahlenbeispiel.

:::beispiel[Die Ableitung eines Produkts ist nicht das Produkt der Ableitungen]
Nimm $f(x) = x$ und $g(x) = x^2$. Ihr Produkt ist $f(x)g(x) = x^3$.

1. **Die richtige Ableitung des Produkts:** $(x^3)' = 3x^2$. An der Stelle $2$ ist das $12$.
2. **Das Produkt der Ableitungen:** $f'(x)\,g'(x) = 1\cdot 2x = 2x$. An der Stelle $2$ ist das $4$. Falsch.
3. **Die Produktregel:** $f'g + fg' = 1\cdot x^2 + x\cdot 2x = 3x^2$. An der Stelle $2$ ist das $4 + 8 = 12$. Richtig.

Die Regel hat also zwei Summanden. Warum genau diese beiden, zeigt das nächste Beispiel.
:::

:::beispiel[Ein wachsendes Rechteck]
Ein Rechteck hat die Seiten $f = 3$ cm und $g = 5$ cm, also die Fläche $15\text{ cm}^2$. Jetzt wachsen beide Seiten
ein wenig: $f$ um $\Delta f = 0{,}1$ cm und $g$ um $\Delta g = 0{,}2$ cm. Das Zeichen $\Delta$ (Delta) steht für
„Änderung“.

1. Neue Fläche: $3{,}1\cdot 5{,}2 = 16{,}12\text{ cm}^2$. Zuwachs: $1{,}12\text{ cm}^2$.
2. Der Zuwachs besteht aus drei Stücken. Ein Streifen $\Delta f\cdot g = 0{,}1\cdot 5 = 0{,}5$. Ein Streifen
   $f\cdot\Delta g = 3\cdot 0{,}2 = 0{,}6$. Ein kleines Eckstück $\Delta f\cdot\Delta g = 0{,}1\cdot 0{,}2 = 0{,}02$.
3. Probe: $0{,}5 + 0{,}6 + 0{,}02 = 1{,}12$.

Die beiden Streifen sind die Summanden $f'g$ und $fg'$ der Produktregel. Das Eckstück ist ein Produkt zweier kleiner
Größen. Es wird viel schneller klein als die Streifen und fällt im Grenzwert weg.
:::

### Die Produktregel

:::satz[Produktregel]
$f\cdot g$ ist an der Stelle $x$ differenzierbar, und es gilt
$$(f\,g)'(x) = f'(x)\,g(x) + f(x)\,g'(x).$$
:::

**Die Idee des Beweises:** Im Zähler des Differenzenquotienten ändern sich beide Faktoren gleichzeitig. Wir zerlegen
die Änderung in zwei Schritte: zuerst ändert sich nur $f$, dann nur $g$. Dazu schieben wir einen Zwischenterm ein,
der einmal abgezogen und einmal addiert wird. So ein Term heißt scherzhaft **nahrhafte Null**: Er ändert den Wert
nicht, aber er macht die Rechnung möglich.

:::beweis
**Schritt 1, die nahrhafte Null einfügen.** Wir ziehen $f(x)\,g(x + h)$ ab und addieren es wieder:
$$f(x + h)g(x + h) - f(x)g(x) = \big[f(x + h) - f(x)\big]\,g(x + h) + f(x)\,\big[g(x + h) - g(x)\big].$$
Ausmultiplizieren der rechten Seite zeigt: Die Zwischenterme $\pm f(x)g(x + h)$ heben sich weg.

**Schritt 2, durch $h$ teilen.**
$$\frac{f(x + h)g(x + h) - f(x)g(x)}{h} = \frac{f(x + h) - f(x)}{h}\cdot g(x + h) + f(x)\cdot\frac{g(x + h) - g(x)}{h}.$$

**Schritt 3, die vier Bausteine.** Für $h \to 0$ geht der erste Quotient gegen $f'(x)$ und der zweite gegen $g'(x)$.
Der Faktor $f(x)$ hängt nicht von $h$ ab. Und $g(x + h)$ geht gegen $g(x)$, **weil $g$ differenzierbar und damit
stetig ist**. Das ist der Satz aus [13.3 Differenzierbar heißt stetig](/lernen/mathe3/differenzierbarkeit/differenzierbar-heisst-stetig-aber-nicht-umgekehrt).

**Schritt 4, Grenzwertsätze.** Summe und Produkte der Grenzwerte ergeben $f'(x)\,g(x) + f(x)\,g'(x)$.
:::

```aufgabe
id: db-check-rechteck
titel: Das Rechteck wächst
niveau: 1
art: check
angabe: |
  Ein Rechteck hat die Seiten $4$ cm und $2$ cm. Beide Seiten wachsen um $0{,}1$ cm. Um wie viel $\text{cm}^2$ wächst die Fläche?
teile:
  - typ: zahl
    label: 'Flächenzuwachs in $\text{cm}^2$'
    loesung: "4.1*2.1 - 8"
    anzeige: '0{,}61'
    fehler:
      - wert: "0.01"
        meldung: 'Das ist nur das kleine Eckstück $0{,}1\cdot 0{,}1$. Dazu kommen die zwei Streifen $0{,}1\cdot 2$ und $4\cdot 0{,}1$.'
      - wert: "0.6"
        meldung: 'Die beiden Streifen ergeben $0{,}2 + 0{,}4 = 0{,}6$. Das kleine Eckstück $0{,}01$ fehlt noch.'
hinweise:
  - 'Neue Fläche $4{,}1\cdot 2{,}1$ minus alte Fläche $8$.'
loesung: |
  Neue Fläche: $4{,}1\cdot 2{,}1 = 8{,}61\text{ cm}^2$. Zuwachs: $0{,}61\text{ cm}^2$.
  ---
  Zerlegt: Streifen $0{,}1\cdot 2 = 0{,}2$ und $4\cdot 0{,}1 = 0{,}4$, Eckstück $0{,}01$. Die Streifen entsprechen $f'g$ und $fg'$.
```

**Was haben wir gezeigt?** Die Änderung eines Produkts setzt sich aus zwei Anteilen zusammen: Änderung des ersten
Faktors mal zweiter Faktor, plus erster Faktor mal Änderung des zweiten. Das sind die beiden Streifen am Rechteck.

**Ein typisches Missverständnis:** „Warum muss man begründen, dass $g(x + h) \to g(x)$ geht? Das ist doch klar.“ Es
ist nur klar, weil $g$ stetig ist. Für eine Sprungfunktion stimmt es nicht. Wer in der Prüfung diesen Satz nennt,
zeigt, dass er den Beweis wirklich verstanden hat.

:::achtung[Produkt der Ableitungen]
**Falsch:** „$(x^2\cdot\sin x)' = 2x\cdot\cos x$.“

**Richtig:** Die Ableitung eines Produkts ist nicht das Produkt der Ableitungen. Mit der Produktregel ist
$(x^2\sin x)' = 2x\sin x + x^2\cos x$. Probe an der Stelle $x = \frac{\pi}{2}$: Die falsche Formel gibt
$\pi\cdot 0 = 0$, die richtige $\pi\cdot 1 + \frac{\pi^2}{4}\cdot 0 = \pi$.
:::

### Die Quotientenregel

Zuerst leiten wir den Kehrwert ab. Ist $g(x) \ne 0$, so ist wegen der Stetigkeit von $g$ auch $g(x + h) \ne 0$ für
kleine $h$. Mit dem gemeinsamen Nenner $g(x + h)\,g(x)$ gilt
$$\frac{\frac{1}{g(x + h)} - \frac{1}{g(x)}}{h} = -\frac{g(x + h) - g(x)}{h}\cdot\frac{1}{g(x + h)\,g(x)} \xrightarrow{h\to 0} -\frac{g'(x)}{g(x)^2}.$$
Schreibt man $\frac fg = f\cdot\frac1g$, liefert die Produktregel die Quotientenregel.

:::satz[Quotientenregel]
Ist zusätzlich $g(x) \neq 0$, so ist $\frac{f}{g}$ an der Stelle $x$ differenzierbar mit
$$\left(\frac fg\right)'(x) = \frac{f'(x)\,g(x) - f(x)\,g'(x)}{g(x)^2}.$$
:::

```aufgabe
id: db-check-quotient
titel: Die Quotientenregel an 1/x prüfen
niveau: 1
art: check
angabe: |
  Wende die Quotientenregel auf $\frac{1}{x}$ an, also mit Zähler $f(x) = 1$ und Nenner $g(x) = x$. Welcher Term entsteht?
teile:
  - typ: term
    label: "$\\left(\\tfrac1x\\right)'$"
    loesung: "-1/x^2"
    bereich: [0.5, 3]
    fehler:
      - wert: "1/x^2"
        meldung: 'Im Zähler steht $f''g - fg'' = 0\cdot x - 1\cdot 1 = -1$. Das Minus bleibt.'
hinweise:
  - "$f' = 0$ und $g' = 1$."
loesung: |
  $\dfrac{0\cdot x - 1\cdot 1}{x^2} = -\dfrac{1}{x^2}$.
  ---
  Das stimmt mit dem Ergebnis der h-Methode aus [13.1 Die Ableitung exakt](/lernen/mathe3/differenzierbarkeit/die-ableitung-exakt-grenzwert-des-differenzenquotienten) überein. Die Regel ist also mit der Definition verträglich.
```

:::achtung[Die Reihenfolge im Zähler]
**Falsch:** „$\left(\frac{x}{x + 1}\right)' = \frac{x\cdot 1 - 1\cdot(x + 1)}{(x + 1)^2} = \frac{-1}{(x + 1)^2}$.“

**Richtig:** Im Zähler steht zuerst „Ableitung oben mal unten“, dann „minus oben mal Ableitung unten“:
$\frac{1\cdot(x + 1) - x\cdot 1}{(x + 1)^2} = \frac{1}{(x + 1)^2}$. Wegen des Minuszeichens ändert eine vertauschte
Reihenfolge das Vorzeichen. Plausibilitätsprobe: $\frac{x}{x + 1}$ wächst für $x > 0$, also muss die Ableitung dort
positiv sein.
:::

### Die Kettenregel

:::satz[Kettenregel]
Ist $f$ an der Stelle $x_0$ differenzierbar und $g$ an der Stelle $y_0 = f(x_0)$ differenzierbar, so ist die
Verkettung $g \circ f$ an der Stelle $x_0$ differenzierbar mit
$$(g \circ f)'(x_0) = g'\big(f(x_0)\big)\cdot f'(x_0).$$
:::

Dabei ist $g \circ f$ (gelesen „$g$ nach $f$“) die Funktion $x \mapsto g(f(x))$: Erst wird $f$ angewendet, dann $g$.
In Worten lautet die Regel: **äußere Ableitung an der inneren Stelle mal innere Ableitung**.

:::beispiel[Die Kettenregel mit Zahlen nachgeprüft]
Wir leiten $k(x) = (x^2 + 1)^3$ auf zwei Arten ab und vergleichen an der Stelle $x = 1$.

1. **Kettenregel:** Innere Funktion $f(x) = x^2 + 1$ mit $f'(x) = 2x$, äußere $g(y) = y^3$ mit $g'(y) = 3y^2$. Also
   $k'(x) = 3(x^2 + 1)^2\cdot 2x$. An der Stelle $1$: $3\cdot 4\cdot 2 = 24$.
2. **Ausmultiplizieren:** $k(x) = x^6 + 3x^4 + 3x^2 + 1$, also $k'(x) = 6x^5 + 12x^3 + 6x$. An der Stelle $1$: $6 + 12 + 6 = 24$.

Beide Wege liefern $24$. Ohne den Faktor $2x$, die innere Ableitung, käme $12$ heraus.
:::

**Die naheliegende Beweisidee** ist, den Differenzenquotienten mit $f(x) - f(x_0)$ zu erweitern:
$$\frac{g(f(x)) - g(f(x_0))}{x - x_0} = \frac{g(f(x)) - g(f(x_0))}{f(x) - f(x_0)}\cdot\frac{f(x) - f(x_0)}{x - x_0}.$$
Der erste Bruch sieht aus wie ein Differenzenquotient von $g$, der zweite ist einer von $f$. Das ist fast ein Beweis.
Es gibt aber ein Loch: $f(x) - f(x_0)$ kann für $x \ne x_0$ gleich $0$ sein. Ist $f$ zum Beispiel konstant, teilt man
durch $0$. Der saubere Beweis stopft dieses Loch mit einer Hilfsfunktion.

```aufgabe
id: db-check-loch
titel: Wo ist das Loch?
niveau: 1
art: check
angabe: |
  Für welche innere Funktion $f$ scheitert der naive Beweis der Kettenregel an der Stelle $x_0 = 0$ schon von Anfang an,
  weil $f(x) - f(0)$ für alle $x$ gleich $0$ ist?
teile:
  - typ: auswahl
    optionen:
      - '$f(x) = 5$'
      - '$f(x) = x^2$'
      - '$f(x) = 2x + 1$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Für $x \ne 0$ ist $x^2 - 0 \ne 0$. Hier entsteht keine Division durch $0$.'
      - wert: 2
        meldung: 'Für $x \ne 0$ ist $(2x + 1) - 1 = 2x \ne 0$.'
hinweise:
  - 'Für welche Funktion ist $f(x) = f(0)$ für jedes $x$?'
loesung: |
  Bei einer konstanten Funktion ist $f(x) - f(0) = 5 - 5 = 0$ für jedes $x$.
  ---
  Dann teilt der naive Beweis durch $0$. Auch Funktionen wie $x^2\sin\frac1x$ treffen den Wert $f(0)$ unendlich oft in der Nähe von $0$.
```

:::beweis[Beweis der Kettenregel]
**Schritt 1, eine Hilfsfunktion.** Wir ersetzen den gefährlichen Bruch durch eine Funktion $\varphi$ (gelesen „phi“),
die auch an der Stelle $y_0$ einen Wert hat:
$$\varphi(y) = \begin{cases} \dfrac{g(y) - g(y_0)}{y - y_0}, & y \neq y_0 \\[2mm] g'(y_0), & y = y_0. \end{cases}$$

**Schritt 2, $\varphi$ ist stetig in $y_0$.** Für $y \to y_0$ geht der Bruch gegen $g'(y_0)$, weil $g$ in $y_0$
differenzierbar ist. Das ist genau der Wert $\varphi(y_0)$. Also ist $\varphi$ in $y_0$ stetig.

**Schritt 3, eine Gleichung ohne Bruch.** Für **alle** $y$ gilt
$$g(y) - g(y_0) = \varphi(y)\,(y - y_0).$$
Für $y \ne y_0$ ist das die Definition von $\varphi$, mit $y - y_0$ multipliziert. Für $y = y_0$ sind beide Seiten $0$.

**Schritt 4, $y = f(x)$ einsetzen und durch $x - x_0$ teilen.**
$$\frac{g(f(x)) - g(f(x_0))}{x - x_0} = \varphi\big(f(x)\big)\cdot\frac{f(x) - f(x_0)}{x - x_0}.$$
Hier wird nur noch durch $x - x_0 \ne 0$ geteilt. Das Loch ist gestopft.

**Schritt 5, Grenzübergang.** $f$ ist in $x_0$ differenzierbar, also stetig: $f(x) \to y_0$. Weil $\varphi$ in $y_0$
stetig ist, folgt $\varphi(f(x)) \to \varphi(y_0) = g'(y_0)$. Der zweite Faktor geht gegen $f'(x_0)$. Also
$(g\circ f)'(x_0) = g'(f(x_0))\cdot f'(x_0)$.
:::

**Was haben wir gezeigt?** Die naive Idee „erweitern und kürzen“ ist richtig, sobald man den Differenzenquotienten
von $g$ an der kritischen Stelle durch seinen Grenzwert $g'(y_0)$ ersetzt. Dieselbe Idee steckt in der Übung
„Eine Lücke stetig schließen“ in der vorigen Lektion
[13.3 Differenzierbar heißt stetig](/lernen/mathe3/differenzierbarkeit/differenzierbar-heisst-stetig-aber-nicht-umgekehrt).

### Die Potenzregel durch Induktion

:::satz[Potenzregel für natürliche Hochzahlen]
Für jede natürliche Zahl $n \ge 1$ gilt $(x^n)' = n\,x^{n - 1}$.
:::

:::beweis[Beweis durch vollständige Induktion]
Die vollständige Induktion kennst du aus [Kapitel 8, „Vollständige Induktion“](/lernen/mathe3/folgen-reihen/vollstaendige-induktion). Man zeigt die Aussage für $n = 1$
und zeigt dann: Gilt sie für ein $n$, so gilt sie auch für $n + 1$.

**Anfang $n = 1$:** $\frac{(x + h) - x}{h} = \frac hh = 1 = 1\cdot x^0$.

**Schritt von $n$ nach $n + 1$:** Angenommen, $(x^n)' = n x^{n - 1}$. Mit der Produktregel ist
$$(x^{n + 1})' = (x^n\cdot x)' = n x^{n - 1}\cdot x + x^n\cdot 1 = n x^n + x^n = (n + 1)\,x^n .$$
:::

:::merke[Was aus was folgt]
| Ergebnis | benötigt |
|---|---|
| Summen- und Faktorregel | Grenzwertsätze. |
| Produkt- und Quotientenregel | Grenzwertsätze und „differenzierbar, also stetig“. |
| Kettenregel | Hilfsfunktion $\varphi$ und Stetigkeit von $f$. |
| Potenzregel $(x^n)' = n x^{n-1}$ | Induktion und Produktregel. |
:::

```reflexion
frage: Im Beweis der Produktregel haben wir $f(x)\,g(x + h)$ als nahrhafte Null eingefügt. Hätte man auch $f(x + h)\,g(x)$ nehmen können?
antwort: |
  Ja. Dann zerfällt der Zähler in $f(x + h)\,[g(x + h) - g(x)] + [f(x + h) - f(x)]\,g(x)$. Nach dem Teilen durch $h$
  braucht man jetzt $f(x + h) \to f(x)$, also die Stetigkeit von $f$ statt der von $g$. Das Ergebnis ist dasselbe:
  $f(x)g'(x) + f'(x)g(x)$. Welchen Zwischenterm man wählt, ist Geschmackssache. Wichtig ist nur, dass man begründet,
  warum der verschobene Faktor gegen seinen Wert an der Stelle $x$ geht.
```

### Übungen

```aufgabe
id: db-regel-produkt
titel: Produktregel an einer Stelle
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Berechne für $m(x) = (x^2 + 1)(3x - 1)$ die Ableitung $m'(1)$ mit der Produktregel.
teile:
  - typ: zahl
    label: "$m'(1)$"
    loesung: "2*1*(3*1 - 1) + (1^2 + 1)*3"
    anzeige: '10'
    fehler:
      - wert: "6"
        meldung: 'Das ist das Produkt der Ableitungen $2x\cdot 3$ an der Stelle $1$. Die Produktregel hat zwei Summanden: $u''v + uv''$.'
      - wert: "4"
        meldung: 'Du hast nur den ersten Summanden $u''v = 2\cdot 2$ berechnet. Es fehlt $uv'' = 2\cdot 3$.'
hinweise:
  - "$u = x^2 + 1$, $v = 3x - 1$, also $u' = 2x$ und $v' = 3$."
loesung: |
  Ansatz: Produktregel $(uv)' = u'v + uv'$ mit $u = x^2 + 1$ und $v = 3x - 1$. An der Stelle $1$ ist $u = 2$, $u' = 2$, $v = 2$, $v' = 3$.
  ---
  $m'(1) = 2\cdot 2 + 2\cdot 3 = 4 + 6 = 10$. Probe durch Ausmultiplizieren: $m(x) = 3x^3 - x^2 + 3x - 1$, $m'(x) = 9x^2 - 2x + 3$, $m'(1) = 10$.
```

```aufgabe
id: db-regel-quotient
titel: Quotientenregel mit Vorzeichenprobe
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Leite $q(x) = \dfrac{x}{x + 2}$ ab und gib $q'(0)$ an.
teile:
  - typ: term
    label: "$q'(x)$"
    loesung: "2/(x + 2)^2"
    bereich: [0, 3]
    fehler:
      - wert: "-2/(x + 2)^2"
        meldung: 'Vorzeichen falsch, vermutlich die Reihenfolge im Zähler vertauscht. Richtig: Ableitung oben mal unten **minus** oben mal Ableitung unten.'
      - wert: "1"
        meldung: 'Zähler und Nenner einzeln abgeleitet ergibt $\frac11$. Für einen Quotienten braucht man die Quotientenregel.'
  - typ: zahl
    label: "$q'(0)$"
    loesung: "2/4"
    anzeige: '\tfrac12'
    fehler:
      - wert: "-1/2"
        meldung: 'Das Vorzeichen stimmt nicht. Der Quotient $\frac{x}{x + 2}$ wächst bei $0$, also ist die Ableitung positiv.'
hinweise:
  - "$\\left(\\frac fg\\right)' = \\frac{f'g - fg'}{g^2}$ mit $f = x$, $g = x + 2$."
loesung: |
  Ansatz: Quotientenregel mit $f = x$, $f' = 1$, $g = x + 2$, $g' = 1$.
  ---
  $q'(x) = \dfrac{1\cdot(x + 2) - x\cdot 1}{(x + 2)^2} = \dfrac{2}{(x + 2)^2}$. Also $q'(0) = \frac24 = \frac12$. Plausibel: Der Quotient wächst bei $0$.
```

```aufgabe
id: db-regel-kehrwert
titel: Den Kehrwert aus der Definition ableiten
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Es sei $g(x) = x^2 + 1$. Berechne die Ableitung von $\dfrac{1}{g}$ an der Stelle $x = 1$

  a) mit der Kehrwertformel $\left(\frac1g\right)' = -\frac{g'}{g^2}$,

  b) zur Kontrolle direkt mit dem Differenzenquotienten $\dfrac{\frac{1}{g(1 + h)} - \frac{1}{g(1)}}{h}$.
teile:
  - typ: zahl
    label: "$\\left(\\tfrac1g\\right)'(1)$"
    loesung: "-2/4"
    anzeige: '-\tfrac12'
    fehler:
      - wert: "1/2"
        meldung: |
          Das Minuszeichen fehlt. Wenn $g$ wächst, wird $\frac1g$ kleiner, also ist die Ableitung negativ.
          Vorsicht auch vor einer zweiten Verwechslung: $\frac{1}{g'(1)} = \frac12$ ist der Kehrwert der Ableitung, nicht die Ableitung des Kehrwerts.
      - wert: "-2/2"
        meldung: 'Im Nenner steht $g(1)^2 = 2^2 = 4$, nicht $g(1) = 2$.'
hinweise:
  - '$g(1) = 2$ und $g''(x) = 2x$, also $g''(1) = 2$.'
  - 'Für b): $\frac{1}{2 + 2h + h^2} - \frac12 = \frac{2 - (2 + 2h + h^2)}{2\,(2 + 2h + h^2)}$.'
loesung: |
  Ansatz: Kehrwertformel, weil $\frac1g$ ein Kehrwert ist. Zur Kontrolle rechnen wir den Grenzwert direkt aus.
  ---
  a) $g(1) = 2$, $g'(1) = 2$. Also $\left(\frac1g\right)'(1) = -\frac{2}{2^2} = -\frac12$.
  ---
  b) $g(1 + h) = 2 + 2h + h^2$. Der Zähler des Differenzenquotienten ist $\frac{-2h - h^2}{2(2 + 2h + h^2)}$. Durch $h$ geteilt: $\frac{-2 - h}{2(2 + 2h + h^2)} \to \frac{-2}{4} = -\frac12$. Beide Wege stimmen überein.
```

```aufgabe
id: db-regel-kette-wurzel
titel: Kettenregel mit einer Wurzel
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Leite $k(x) = \sqrt{x^2 + 9}$ ab und berechne $k'(4)$.
teile:
  - typ: term
    label: "$k'(x)$"
    loesung: "x/sqrt(x^2 + 9)"
    fehler:
      - wert: "1/(2*sqrt(x^2 + 9))"
        meldung: 'Die äußere Ableitung stimmt, aber die innere Ableitung $2x$ fehlt.'
      - wert: "2*x/sqrt(x^2 + 9)"
        meldung: 'Die Ableitung von $\sqrt u$ ist $\frac{1}{2\sqrt u}$. Der Faktor $\frac12$ fehlt.'
  - typ: zahl
    label: "$k'(4)$"
    loesung: "4/5"
    anzeige: '\tfrac45'
    fehler:
      - wert: "1/10"
        meldung: 'Das ist nur die äußere Ableitung $\frac{1}{2\cdot 5}$. Multipliziere noch mit der inneren Ableitung $2\cdot 4 = 8$.'
hinweise:
  - 'Innere Funktion $u = x^2 + 9$, äußere Funktion $\sqrt u$.'
  - "$(\\sqrt u)' = \\frac{1}{2\\sqrt u}$ und $u' = 2x$. Multiplizieren."
gefuehrt:
  - text: 'Welche Funktion ist die innere Funktion $u(x)$?'
    teil:
      typ: term
      loesung: "x^2 + 9"
      fehler:
        - wert: "sqrt(x)"
          meldung: 'Die Wurzel ist die äußere Funktion: Sie wird zuletzt angewendet. Innen steht, was unter der Wurzel steht.'
    erklaerung: 'Innen steht $u = x^2 + 9$, außen die Wurzel.'
  - text: 'Wie lautet die innere Ableitung $u''(x)$?'
    teil:
      typ: term
      loesung: "2*x"
    erklaerung: '$(x^2 + 9)'' = 2x$, die Konstante $9$ fällt weg.'
  - text: 'Wie lautet die äußere Ableitung, an der inneren Stelle ausgewertet?'
    teil:
      typ: term
      loesung: "1/(2*sqrt(x^2 + 9))"
      fehler:
        - wert: "1/(2*sqrt(x))"
          meldung: 'Die äußere Ableitung wird an der **inneren Stelle** $u = x^2 + 9$ ausgewertet, nicht an $x$.'
    erklaerung: '$(\sqrt u)'' = \frac{1}{2\sqrt u}$ mit $u = x^2 + 9$.'
  - text: 'Multipliziere beide Ableitungen und setze $x = 4$ ein. Was ist $k''(4)$?'
    teil:
      typ: zahl
      loesung: "4/5"
    erklaerung: '$k''(x) = \frac{2x}{2\sqrt{x^2 + 9}} = \frac{x}{\sqrt{x^2 + 9}}$, also $k''(4) = \frac{4}{5}$.'
loesung: |
  Ansatz: Kettenregel, weil eine Funktion in eine andere eingesetzt ist. Innen $u = x^2 + 9$ mit $u' = 2x$, außen $\sqrt u$ mit Ableitung $\frac{1}{2\sqrt u}$.
  ---
  $k'(x) = \dfrac{1}{2\sqrt{x^2 + 9}}\cdot 2x = \dfrac{x}{\sqrt{x^2 + 9}}$.
  ---
  $k'(4) = \dfrac{4}{\sqrt{25}} = \dfrac45$. Plausibel: Für große $x$ ist $\sqrt{x^2 + 9} \approx x$ mit Steigung fast $1$.
```

```aufgabe
id: db-regel-produkt-beweis
titel: Den Beweis der Produktregel ergänzen
niveau: 2
lernziel: 3
kompetenz: begruenden
angabe: |
  Im Beweis der Produktregel steht der Ausdruck
  $$\frac{f(x + h) - f(x)}{h}\cdot g(x + h) + f(x)\cdot\frac{g(x + h) - g(x)}{h}.$$
  a) Welche nahrhafte Null wurde eingefügt?

  b) Mit welchem Satz begründet man, dass $g(x + h) \to g(x)$ geht?
teile:
  - typ: auswahl
    label: 'a) eingefügter Term'
    optionen:
      - '$-f(x)\,g(x + h) + f(x)\,g(x + h)$'
      - '$-f(x + h)\,g(x) + f(x + h)\,g(x)$'
      - '$-f(x)\,g(x) + f(x)\,g(x)$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Mit diesem Zwischenterm entsteht eine andere, ebenfalls richtige Zerlegung. Im gegebenen Ausdruck steht aber $g(x + h)$ beim ersten Quotienten. Vergleiche genau.'
      - wert: 2
        meldung: 'Dieser Term steht schon im Zähler. Er hilft nicht, die gleichzeitige Änderung beider Faktoren zu trennen.'
  - typ: auswahl
    label: 'b) Begründung'
    optionen:
      - '$g$ ist an der Stelle $x$ differenzierbar und daher stetig.'
      - 'Jede Funktion erfüllt $g(x + h) \to g(x)$.'
      - 'Das folgt aus der Produktregel.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Für eine Sprungfunktion an der Sprungstelle stimmt das nicht. Man braucht Stetigkeit.'
      - wert: 2
        meldung: 'Das wäre ein Zirkelschluss: Wir beweisen die Produktregel gerade erst.'
hinweise:
  - 'Multipliziere den Ausdruck mit $h$ aus. Welche zwei Terme heben sich dabei weg?'
  - 'Welcher Satz verbindet Differenzierbarkeit und Stetigkeit?'
loesung: |
  Ansatz: Wir multiplizieren den Ausdruck mit $h$ aus und sehen, welche Terme sich aufheben.
  ---
  a) Ausmultipliziert entsteht $f(x + h)g(x + h) - f(x)g(x + h) + f(x)g(x + h) - f(x)g(x)$. Die mittleren Terme $\mp f(x)g(x + h)$ sind die nahrhafte Null.
  ---
  b) $g$ ist an der Stelle $x$ differenzierbar. Nach dem Satz „differenzierbar, also stetig“ ist $g$ dort stetig, also $g(x + h) \to g(x)$. Ohne diesen Schritt wäre der Beweis unvollständig.
```

```aufgabe
id: db-regel-tabelle
titel: Regeln mit einer Wertetabelle
niveau: 3
lernziel: 3
kompetenz: anwenden
angabe: |
  Von zwei differenzierbaren Funktionen $f$ und $g$ kennt man nur diese Werte:

  - An der Stelle $2$: $f(2) = 3$, $f'(2) = -1$, $g(2) = 4$, $g'(2) = 5$.
  - An der Stelle $3$: $f(3) = 0$, $f'(3) = 2$, $g(3) = 1$, $g'(3) = 6$.

  Berechne a) $(f\cdot g)'(2)$, b) $\left(\dfrac fg\right)'(2)$, c) $(g\circ f)'(2)$, also die Ableitung von $g(f(x))$ an der Stelle $2$.
teile:
  - typ: zahl
    label: "a) $(f g)'(2)$"
    loesung: "(-1)*4 + 3*5"
    anzeige: '11'
    fehler:
      - wert: "-5"
        meldung: 'Das ist $f''(2)\cdot g''(2)$, das Produkt der Ableitungen. Die Produktregel lautet $f''g + fg''$.'
  - typ: zahl
    label: "b) $(f/g)'(2)$"
    loesung: "((-1)*4 - 3*5)/4^2"
    anzeige: '-\tfrac{19}{16}'
    fehler:
      - wert: "(3*5 - (-1)*4)/16"
        meldung: 'Die Reihenfolge im Zähler ist vertauscht. Es heißt $f''g - fg''$, nicht $fg'' - f''g$.'
      - wert: "((-1)*4 - 3*5)/4"
        meldung: 'Im Nenner steht $g(2)^2 = 16$, nicht $g(2) = 4$.'
  - typ: zahl
    label: "c) $(g\\circ f)'(2)$"
    loesung: "6*(-1)"
    anzeige: '-6'
    fehler:
      - wert: "5*(-1)"
        meldung: 'Die äußere Ableitung muss an der **inneren Stelle** $f(2) = 3$ ausgewertet werden, also $g''(3) = 6$, nicht $g''(2)$.'
      - wert: "6"
        meldung: 'Die innere Ableitung $f''(2) = -1$ fehlt als Faktor.'
hinweise:
  - 'Verwende die Werte an der Stelle $2$. Für c) brauchst du zusätzlich $f(2) = 3$.'
  - 'Kettenregel: $(g\circ f)''(2) = g''\big(f(2)\big)\cdot f''(2) = g''(3)\cdot f''(2)$. $g''(3)$ steht bei den Werten an der Stelle $3$.'
loesung: |
  Ansatz: Ohne Funktionsterme genügen die Regeln, denn sie brauchen nur Funktionswerte und Ableitungen an den richtigen Stellen.
  ---
  a) $(fg)'(2) = f'(2)g(2) + f(2)g'(2) = (-1)\cdot 4 + 3\cdot 5 = 11$.
  ---
  b) $\left(\frac fg\right)'(2) = \dfrac{f'(2)g(2) - f(2)g'(2)}{g(2)^2} = \dfrac{-4 - 15}{16} = -\dfrac{19}{16}$.
  ---
  c) Innere Stelle: $f(2) = 3$. Also $(g\circ f)'(2) = g'(3)\cdot f'(2) = 6\cdot(-1) = -6$. Die häufigste Falle ist, $g'(2)$ statt $g'(3)$ zu nehmen.
```

```aufgabe
id: db-potenz-induktion
titel: Die Potenzregel mit Induktion
niveau: 3
lernziel: 3
kompetenz: begruenden
angabe: |
  Beweise mit vollständiger Induktion und der Produktregel, dass $(x^n)' = n\,x^{n-1}$ für alle natürlichen Zahlen
  $n \ge 1$ gilt. Wo genau wird die Induktionsannahme verwendet?
teile:
  - typ: auswahl
    label: 'Wo wird die Induktionsannahme verwendet?'
    optionen:
      - 'beim Ableiten des Faktors $x^n$ in der Produktregel für $x^n\cdot x$'
      - 'beim Induktionsanfang $n = 1$'
      - 'beim Ableiten des Faktors $x$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Der Anfang wird direkt mit dem Differenzenquotienten gezeigt, ohne Annahme.'
      - wert: 2
        meldung: '$(x)'' = 1$ ist der Induktionsanfang, nicht die Annahme.'
  - typ: text
    label: 'Beweis'
    muster: |
      Anfang $n = 1$: $\frac{(x+h) - x}{h} = 1$, also $(x)' = 1 = 1\cdot x^0$.
      Schritt: Es gelte $(x^n)' = n x^{n-1}$ für ein $n \ge 1$. Dann ist nach der Produktregel
      $(x^{n+1})' = (x^n \cdot x)' = (x^n)'\cdot x + x^n\cdot (x)' = n x^{n-1}\cdot x + x^n = (n+1)x^n$.
      Die Induktionsannahme steckt in $(x^n)' = n x^{n-1}$.
hinweise:
  - 'Schreibe $x^{n+1} = x^n\cdot x$.'
  - 'Wende die Produktregel an. Für die Ableitung von $x^n$ setzt du die Annahme ein, für die Ableitung von $x$ den Anfang.'
loesung: |
  Ansatz: Vollständige Induktion, weil die Aussage für alle natürlichen $n \ge 1$ gelten soll. **Induktionsanfang** $n = 1$: Differenzenquotient $\frac{(x + h) - x}{h} = 1$, also $(x^1)' = 1 = 1\cdot x^0$.
  ---
  **Induktionsannahme:** Für ein $n \ge 1$ gelte $(x^n)' = n x^{n-1}$.
  ---
  **Induktionsschritt:** Produktregel mit $u = x^n$ und $v = x$: $(x^{n+1})' = u'v + uv' = n x^{n-1}\cdot x + x^n\cdot 1 = (n + 1)x^n$. Die Annahme steckt in $u' = n x^{n-1}$. Damit gilt die Regel für alle $n \ge 1$.
```

## Grundfunktionen ableiten: e-Funktion, Logarithmus, sin, cos, arcsin, arctan

```aufgabe
id: db-check-potenzgesetz
titel: Ein Potenzgesetz
niveau: 1
art: check
angabe: |
  Welche Umformung ist für alle reellen Zahlen $x$ und $h$ richtig?
  Herkunft: [Kapitel 4, „Exponentialfunktionen“](/lernen/mathe3/funktionen/exponentialfunktionen).
teile:
  - typ: auswahl
    optionen:
      - '$e^{x + h} = e^x\cdot e^h$'
      - '$e^{x + h} = e^x + e^h$'
      - '$e^{x + h} = e^{x\cdot h}$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Probe mit $x = h = 0$: links $e^0 = 1$, rechts $1 + 1 = 2$. Hochzahlen werden addiert, wenn man Potenzen **multipliziert**.'
      - wert: 2
        meldung: 'Probe mit $x = 1$, $h = 0$: links $e^1 = e$, rechts $e^0 = 1$. Eine Summe in der Hochzahl wird nicht zu einem Produkt.'
hinweise:
  - 'Potenzgesetz: $a^m\cdot a^n = a^{m + n}$.'
loesung: |
  Nach dem Potenzgesetz $a^m a^n = a^{m+n}$ gilt $e^x\cdot e^h = e^{x + h}$.
  ---
  Genau diese Umformung macht die Ableitung der e-Funktion möglich.
```

**Worum geht es in einem Satz?** Mit der Definition und den Regeln aus
[13.4 Ableitungsregeln beweisen](/lernen/mathe3/differenzierbarkeit/ableitungsregeln-beweisen-summe-produkt-quotient-kette)
leiten wir die Ableitungen der wichtigsten Grundfunktionen her. Bei der e-Funktion und beim Sinus braucht man je einen
besonderen Grenzwert. Logarithmus, Arcussinus und Arcustangens bekommt man dann geschenkt, und zwar mit der Regel für
Umkehrfunktionen.

### Die e-Funktion

Für $f(x) = e^x$ gilt wegen $e^{x + h} = e^x\,e^h$:
$$\frac{e^{x + h} - e^x}{h} = \frac{e^x\,e^h - e^x}{h} = e^x\cdot\frac{e^h - 1}{h}.$$
Der Faktor $e^x$ hängt nicht von $h$ ab. Alles hängt also am Grenzwert von $\frac{e^h - 1}{h}$. Das ist der
Differenzenquotient der e-Funktion an der Stelle $0$, also ihre Steigung dort.

:::beispiel[Die Steigung an der Stelle 0 für drei Basen]
Wir berechnen $\frac{a^h - 1}{h}$ für kleine $h$ mit dem Taschenrechner.

1. Basis $e$: Für $h = 0{,}1$ ergibt sich $1{,}0517$, für $h = 0{,}01$ ergibt sich $1{,}0050$, für $h = 0{,}001$ ergibt sich $1{,}0005$.
2. Basis $2$: Für $h = 0{,}001$ ergibt sich $\frac{2^{0{,}001} - 1}{0{,}001} \approx 0{,}6934$.
3. Basis $3$: Für $h = 0{,}001$ ergibt sich $\frac{3^{0{,}001} - 1}{0{,}001} \approx 1{,}0992$.

Bei der Basis $2$ ist die Steigung an der Stelle $0$ kleiner als $1$, bei der Basis $3$ größer. Die Zahl
$e \approx 2{,}718$ liegt dazwischen: Ihre Exponentialfunktion schneidet die $y$-Achse mit Steigung **genau**
$1$. Man kann mit $e = \lim_{n\to\infty}\left(1 + \frac1n\right)^n$ aus [11.11 Monotoniekriterium und Vollständigkeit von ℝ](/lernen/mathe3/grenzwerte-folgen/monotoniekriterium-und-vollstaendigkeit-von)
beweisen, dass
$$\lim_{h\to 0}\frac{e^h - 1}{h} = 1 .$$
:::

Damit folgt $(e^x)' = e^x\cdot 1 = e^x$. Die e-Funktion ist ihre eigene Ableitung. Für eine andere Basis $a > 0$
schreibt man $a = e^{\ln a}$, also $a^x = e^{x\ln a}$, und verwendet die Kettenregel:
$$(a^x)' = e^{x\ln a}\cdot\ln a = \ln a\cdot a^x .$$
Die Zahlen aus dem Beispiel passen dazu: $\ln 2 \approx 0{,}6931$ und $\ln 3 \approx 1{,}0986$.

:::achtung[Die Potenzregel bei einer Exponentialfunktion]
**Falsch:** „$(2^x)' = x\cdot 2^{x - 1}$.“

**Richtig:** Die Potenzregel $(x^n)' = n x^{n-1}$ gilt, wenn die **Variable unten** steht und die Hochzahl fest ist.
Bei $2^x$ steht die Variable **oben**. Richtig ist $(2^x)' = \ln 2\cdot 2^x$. Probe an der Stelle $0$: Die falsche
Formel gibt $0$, die richtige $\ln 2 \approx 0{,}69$. Der Graph von $2^x$ steigt bei $0$ sichtbar, also kann $0$ nicht stimmen.
:::

```aufgabe
id: db-check-basis
titel: Steigung von 5 hoch x bei 0
niveau: 1
art: check
angabe: |
  Welche Steigung hat der Graph von $f(x) = 5^x$ an der Stelle $0$? Runde auf drei Nachkommastellen.
teile:
  - typ: zahl
    label: "$f'(0)$"
    loesung: "ln(5)"
    anzeige: '\ln 5 \approx 1{,}609'
    fehler:
      - wert: "0"
        meldung: 'Das liefert die falsche Potenzregel $x\cdot 5^{x - 1}$. Bei $5^x$ steht die Variable aber oben.'
      - wert: "1"
        meldung: 'Unter den Exponentialfunktionen $a^x$ hat nur $e^x$ an der Stelle $0$ die Steigung $1$. Bei Basis $5$ ist es $\ln 5$.'
hinweise:
  - "$(a^x)' = \\ln a\\cdot a^x$, und $5^0 = 1$."
loesung: |
  $(5^x)' = \ln 5\cdot 5^x$.
  ---
  An der Stelle $0$: $\ln 5\cdot 1 \approx 1{,}609$. Weil $5 > e$ ist, ist die Steigung größer als $1$.
```

### Die Ableitung der Umkehrfunktion

Eine Funktion $f$ heißt **umkehrbar**, wenn jeder Funktionswert nur einmal angenommen wird. Die Umkehrfunktion $f^{-1}$
macht $f$ rückgängig: Aus $y = f(x)$ wird $x = f^{-1}(y)$. Mehr dazu steht in [Kapitel 4, „Verkettung und Umkehrfunktion“](/lernen/mathe3/funktionen/verkettung-und-umkehrfunktion).
Ihr Graph ist der an der Geraden $y = x$ gespiegelte Graph von $f$.

Beim Spiegeln an $y = x$ werden $x$- und $y$-Richtung vertauscht. Aus einem Steigungsdreieck mit Breite $1$ und Höhe
$k$ wird eines mit Breite $k$ und Höhe $1$. Aus der Steigung $k$ wird also die Steigung $\frac1k$.

:::satz[Ableitung der Umkehrfunktion]
Es sei $f$ auf einem Intervall stetig und streng monoton, also umkehrbar, und an der Stelle $x_0$ differenzierbar mit
$f'(x_0) \neq 0$. Dann ist $f^{-1}$ an der Stelle $y_0 = f(x_0)$ differenzierbar, und
$$(f^{-1})'(y_0) = \frac{1}{f'(x_0)} = \frac{1}{f'\big(f^{-1}(y_0)\big)}.$$
:::

:::beweis[Beweisidee]
Für $y \neq y_0$ sei $x = f^{-1}(y)$. Weil $f$ streng monoton ist, ist dann auch $x \neq x_0$. Also
$$\frac{f^{-1}(y) - f^{-1}(y_0)}{y - y_0} = \frac{x - x_0}{f(x) - f(x_0)} = \frac{1}{\dfrac{f(x) - f(x_0)}{x - x_0}} .$$
Die Umkehrfunktion einer stetigen, streng monotonen Funktion ist stetig. Für $y \to y_0$ gilt deshalb $x \to x_0$. Der
Nenner geht gegen $f'(x_0) \neq 0$, der ganze Ausdruck also gegen $\frac{1}{f'(x_0)}$.
:::

Warum braucht man $f'(x_0) \ne 0$? Eine waagrechte Tangente, also Steigung $0$, wird beim Spiegeln zu einer
senkrechten. Beispiel: $x^3$ hat bei $0$ eine waagrechte Tangente, also hat die Umkehrfunktion $\sqrt[3]{x}$ dort eine
senkrechte. Das passt zu [13.2 Einseitige Ableitungen](/lernen/mathe3/differenzierbarkeit/einseitige-ableitungen-knick-senkrechte-tangente-oszillation).

:::beispiel[Ableitung des natürlichen Logarithmus]
$\ln$ ist die Umkehrfunktion von $f(x) = e^x$. Es ist $f'(x) = e^x$, und das ist nie $0$.

1. Nach dem Satz ist $(\ln)'(y) = \dfrac{1}{f'(\ln y)} = \dfrac{1}{e^{\ln y}}$.
2. Weil $e^{\ln y} = y$ ist, folgt $(\ln)'(y) = \dfrac1y$ für $y > 0$.
3. Mit $x$ als Variable geschrieben: $(\ln x)' = \dfrac1x$. Probe an der Stelle $1$: Steigung $1$. Die e-Funktion hat
   bei $(0 \mid 1)$ Steigung $1$, gespiegelt hat $\ln$ bei $(1 \mid 0)$ Steigung $\frac11 = 1$.
:::

```plot
x: [-2.5, 4]
y: [-2.5, 4]
gleich: true
graphen:
  - { f: "exp(x)", label: "eˣ", farbe: 0, von: -2.5, bis: 1.35 }
  - { f: "ln(x)", label: "ln x", farbe: 1, von: 0.08, bis: 4 }
  - { f: "x", label: "y = x", farbe: 4, gestrichelt: true }
  - { f: "x + 1", label: "Tangente Steigung 1", farbe: 0, gestrichelt: true, von: -2, bis: 1 }
  - { f: "x - 1", label: "Tangente Steigung 1", farbe: 1, gestrichelt: true, von: 0, bis: 3 }
punkte:
  - { x: 0, y: 1, label: "(0 | 1)" }
  - { x: 1, y: 0, label: "(1 | 0)" }
beschriftung: Die e-Funktion und der Logarithmus sind Spiegelbilder an der Geraden y = x. Die Tangente an eˣ bei (0 | 1) hat Steigung 1, ihr Spiegelbild ist die Tangente an ln x bei (1 | 0), ebenfalls mit Steigung 1.
```

:::beispiel[Ableitung des Arcussinus]
Der **Arcussinus** $\arcsin$ ist die Umkehrfunktion des Sinus auf dem Intervall $\left[-\frac\pi2, \frac\pi2\right]$.
Dort wächst der Sinus streng von $-1$ bis $1$. Der Name heißt „Bogen des Sinus“: $\arcsin y$ ist der Winkel im
Bogenmaß, dessen Sinus $y$ ist. Zum Beispiel ist $\arcsin\frac12 = \frac\pi6$.

1. Für $-\frac\pi2 < x < \frac\pi2$ ist $(\sin x)' = \cos x > 0$. Der Satz ist also anwendbar.
2. $(\arcsin)'(y) = \dfrac{1}{\cos(\arcsin y)}$.
3. Aus $\sin^2 + \cos^2 = 1$ folgt $\cos x = \sqrt{1 - \sin^2 x}$, denn auf diesem Intervall ist $\cos x \ge 0$. Mit
   $x = \arcsin y$ ist $\sin x = y$, also $\cos(\arcsin y) = \sqrt{1 - y^2}$.
4. Ergebnis: $(\arcsin y)' = \dfrac{1}{\sqrt{1 - y^2}}$ für $-1 < y < 1$.

An den Rändern $y = \pm 1$ ist $\cos x = 0$. Dort hat der Arcussinus eine senkrechte Tangente.
:::

### Sinus und Kosinus

Hier braucht man den **Standardgrenzwert** $\lim_{h\to 0}\frac{\sin h}{h} = 1$, mit $h$ im Bogenmaß. Er wird in
[12.6 Einschließungssatz und Standardgrenzwerte](/lernen/mathe3/grenzwerte-stetigkeit/einschliessungssatz-und-standardgrenzwerte) mit dem Einschließungssatz bewiesen. Daraus folgt ein zweiter
Grenzwert. Wir erweitern mit $\cos h + 1$ und verwenden $\cos^2 h - 1 = -\sin^2 h$:
$$\frac{\cos h - 1}{h} = \frac{\cos^2 h - 1}{h(\cos h + 1)} = -\frac{\sin h}{h}\cdot\frac{\sin h}{\cos h + 1} \xrightarrow{h\to 0} -1\cdot\frac{0}{2} = 0 .$$
Mit dem Additionstheorem $\sin(x + h) = \sin x\cos h + \cos x\sin h$ aus [Kapitel 5, „Trigonometrische Identitäten“](/lernen/mathe3/trigonometrie/trigonometrische-identitaeten) folgt
$$\frac{\sin(x + h) - \sin x}{h} = \sin x\cdot\frac{\cos h - 1}{h} + \cos x\cdot\frac{\sin h}{h} \xrightarrow{h\to 0} \sin x\cdot 0 + \cos x\cdot 1 = \cos x .$$

:::satz[Ableitungen der Winkelfunktionen]
$(\sin x)' = \cos x$ und $(\cos x)' = -\sin x$, jeweils mit $x$ im **Bogenmaß**.
:::

Die Ableitung des Kosinus leitest du in den Übungen selbst her. Die Ableitung des Tangens folgt mit der
Quotientenregel aus $\tan x = \frac{\sin x}{\cos x}$.

:::achtung[Ableiten im Gradmaß]
**Falsch:** Jemand stellt den Taschenrechner auf DEG und berechnet die Steigung des Sinus bei $0$ als
$\frac{\sin(0{,}001) - \sin 0}{0{,}001} \approx 0{,}0175$. Er schließt: „$(\sin x)'$ ist bei $0$ ungefähr $0{,}0175$, nicht $1$.“

**Richtig:** Im Gradmaß ist $\sin(x°) = \sin\left(\frac{\pi}{180}x\right)$, und die Kettenregel liefert den Faktor
$\frac{\pi}{180} \approx 0{,}0175$. Die Formel $(\sin x)' = \cos x$ gilt nur im Bogenmaß. Deshalb rechnet man in der
Analysis immer im Bogenmaß. Stelle den Taschenrechner bei Ableitungen und Grenzwerten auf RAD.
:::

```reflexion
frage: Warum ist gerade $e$ die „natürliche“ Basis und nicht etwa $2$ oder $10$?
antwort: |
  Für jede Basis $a$ gilt $(a^x)' = \ln a\cdot a^x$. Die Ableitung ist also immer ein Vielfaches der Funktion selbst.
  Nur bei $a = e$ ist der Faktor $\ln e = 1$, und die Funktion ist exakt ihre eigene Ableitung. Gleichwertig: Nur die
  e-Funktion schneidet die $y$-Achse mit Steigung $1$. Deshalb werden alle Formeln mit $e$ am einfachsten, und man
  schreibt andere Basen über $a^x = e^{x\ln a}$ auf $e$ um.
```

### Übungen

```aufgabe
id: db-regel-ax
titel: Exponentialfunktion mit Basis 10
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Schreibe $f(x) = 10^x$ in der Form $e^{\lambda x}$ und bestimme damit $f'(x)$. Das Zeichen $\lambda$ heißt „Lambda“
  und steht hier für eine feste Zahl. Gib $\lambda$ auf vier Nachkommastellen an.
teile:
  - typ: zahl
    label: '$\lambda$'
    loesung: "ln(10)"
    anzeige: '\ln 10 \approx 2{,}3026'
    fehler:
      - wert: "10"
        meldung: '$e^{10x}$ ist nicht $10^x$. Probe mit $x = 1$: $e^{10} \approx 22\,026$, aber $10^1 = 10$. Gesucht ist die Zahl $\lambda$ mit $e^\lambda = 10$.'
      - wert: "1"
        meldung: '$\lg 10 = 1$ ist der Logarithmus zur Basis $10$. Gesucht ist der **natürliche** Logarithmus, also zur Basis $e$.'
  - typ: term
    label: "$f'(x)$"
    loesung: "ln(10)*10^x"
    fehler:
      - wert: "x*10^(x - 1)"
        meldung: 'Die Potenzregel gilt nur, wenn die Variable unten steht. Bei $10^x$ steht sie in der Hochzahl.'
      - wert: "10^x"
        meldung: 'Nur $e^x$ ist seine eigene Ableitung. Bei der Basis $10$ kommt der Faktor $\ln 10$ dazu.'
hinweise:
  - '$10 = e^{\ln 10}$. Potenziere beide Seiten mit $x$.'
loesung: |
  Ansatz: Jede Basis lässt sich auf $e$ umschreiben, weil $10 = e^{\ln 10}$. Also $10^x = \big(e^{\ln 10}\big)^x = e^{x\ln 10}$ und $\lambda = \ln 10 \approx 2{,}3026$.
  ---
  Kettenregel: äußere Funktion $e^u$ mit Ableitung $e^u$, innere $u = x\ln 10$ mit Ableitung $\ln 10$. Also $f'(x) = e^{x\ln 10}\cdot\ln 10 = \ln 10\cdot 10^x$. Probe: $f'(0) = \ln 10 \approx 2{,}30$. Der Graph von $10^x$ steigt bei $0$ steiler als der von $e^x$, passend zu $10 > e$.
```

```aufgabe
id: db-kette-ln
titel: Kettenregel mit Logarithmus
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Leite $f(x) = \ln(x^2 + 3)$ ab und gib $f'(1)$ an.
teile:
  - typ: term
    label: "$f'(x)$"
    loesung: "2*x/(x^2 + 3)"
    fehler:
      - wert: "1/(x^2 + 3)"
        meldung: 'Die äußere Ableitung $\frac1u$ stimmt. Es fehlt die innere Ableitung $2x$.'
      - wert: "2*x"
        meldung: 'Das ist nur die innere Ableitung. Die äußere Ableitung $\frac{1}{x^2 + 3}$ fehlt als Faktor.'
  - typ: zahl
    label: "$f'(1)$"
    loesung: "2/4"
    anzeige: '\tfrac12'
    fehler:
      - wert: "1/4"
        meldung: 'Das ist nur die äußere Ableitung $\frac{1}{1 + 3}$. Multipliziere mit der inneren Ableitung $2\cdot 1$.'
hinweise:
  - 'Äußere Funktion $\ln u$ mit $(\ln u)'' = \frac1u$, innere Funktion $u = x^2 + 3$.'
loesung: |
  Ansatz: Kettenregel, weil $x^2 + 3$ in den Logarithmus eingesetzt wird. Außen $\ln u$ mit Ableitung $\frac1u$, innen $u = x^2 + 3$ mit $u' = 2x$.
  ---
  $f'(x) = \dfrac{1}{x^2 + 3}\cdot 2x = \dfrac{2x}{x^2 + 3}$. Also $f'(1) = \frac{2}{4} = \frac12$.
```

```aufgabe
id: db-regel-kosinus
titel: Die Ableitung des Kosinus herleiten
niveau: 2
lernziel: 3
kompetenz: begruenden
angabe: |
  Leite $(\cos x)' = -\sin x$ aus der Definition her. Verwende das Additionstheorem
  $\cos(x + h) = \cos x\cos h - \sin x\sin h$ und die Grenzwerte $\frac{\sin h}{h} \to 1$ und
  $\frac{\cos h - 1}{h} \to 0$. Gib zur Kontrolle den Wert der Ableitung an der Stelle $x = \frac{\pi}{3}$ an.
teile:
  - typ: zahl
    label: "Ableitung des Kosinus bei $\\tfrac{\\pi}{3}$"
    loesung: "-sin(pi/3)"
    anzeige: '-\tfrac{\sqrt3}{2} \approx -0{,}866'
    fehler:
      - wert: "sin(pi/3)"
        meldung: 'Das Vorzeichen fehlt. Der Kosinus fällt zwischen $0$ und $\pi$, also ist seine Ableitung dort negativ.'
      - wert: "-cos(pi/3)"
        meldung: 'Die Ableitung des Kosinus ist $-\sin x$, nicht $-\cos x$. An der Stelle $\frac\pi3$ ist das $-\frac{\sqrt3}{2}$.'
  - typ: text
    label: 'Herleitung'
    muster: |
      $\frac{\cos(x + h) - \cos x}{h} = \cos x\cdot\frac{\cos h - 1}{h} - \sin x\cdot\frac{\sin h}{h} \to \cos x\cdot 0 - \sin x\cdot 1 = -\sin x$.
hinweise:
  - 'Setze das Additionstheorem in den Zähler ein: $\cos x\cos h - \sin x\sin h - \cos x$.'
  - 'Sortiere nach $\cos x$ und $\sin x$ und teile durch $h$. Dann die beiden Standardgrenzwerte einsetzen.'
loesung: |
  Ansatz: Differenzenquotient bilden und mit dem Additionstheorem so umformen, dass die beiden bekannten Grenzwerte auftauchen.
  $$\frac{\cos(x + h) - \cos x}{h} = \frac{\cos x(\cos h - 1) - \sin x\sin h}{h} = \cos x\cdot\frac{\cos h - 1}{h} - \sin x\cdot\frac{\sin h}{h}$$
  ---
  Grenzwertsätze für $h \to 0$: $\cos x \cdot 0 - \sin x\cdot 1 = -\sin x$.
  ---
  An der Stelle $\frac\pi3$: $-\sin\frac{\pi}{3} = -\frac{\sqrt3}{2} \approx -0{,}866$. Plausibel: Der Kosinus fällt bei $\frac\pi3$.
```

```aufgabe
id: db-umkehr-wurzel
titel: Die Wurzel über die Umkehrregel
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  $g(y) = \sqrt y$ ist auf $(0, \infty)$ die Umkehrfunktion von $f(x) = x^2$ mit $x > 0$. Bestimme $g'(y)$ mit der
  Ableitungsregel für Umkehrfunktionen.
teile:
  - typ: term
    label: "$g'(y)$"
    variable: y
    loesung: "1/(2*sqrt(y))"
    bereich: [0.5, 4]
    fehler:
      - wert: "1/(2*y)"
        meldung: 'Die Formel verlangt $f''$ an der Stelle $g(y) = \sqrt y$, nicht an der Stelle $y$. Also $\frac{1}{2\sqrt y}$.'
      - wert: "2*sqrt(y)"
        meldung: 'Das ist $f''(\sqrt y)$ selbst. Die Ableitung der Umkehrfunktion ist der **Kehrwert** davon.'
hinweise:
  - "$(f^{-1})'(y) = \\frac{1}{f'(f^{-1}(y))}$ mit $f'(x) = 2x$."
  - 'Setze $f^{-1}(y) = \sqrt y$ in $f''(x) = 2x$ ein und bilde den Kehrwert.'
loesung: |
  Ansatz: Umkehrregel. Voraussetzung prüfen: $f'(x) = 2x \neq 0$ für $x > 0$.
  ---
  $g'(y) = \dfrac{1}{f'(g(y))} = \dfrac{1}{2\sqrt y}$.
  ---
  Bei $y = 0$ wäre $f'(0) = 0$, und genau dort ist $\sqrt y$ nicht differenzierbar, weil der Graph senkrecht startet. Das Ergebnis stimmt mit der h-Methode aus [13.1 Die Ableitung exakt](/lernen/mathe3/differenzierbarkeit/die-ableitung-exakt-grenzwert-des-differenzenquotienten) überein.
```

```aufgabe
id: db-arctan
titel: Die Ableitung des Arcustangens
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Der Arcustangens $\arctan$ ist die Umkehrfunktion des Tangens auf $\left(-\frac\pi2, \frac\pi2\right)$. Leite seine
  Ableitung mit der Umkehrregel her und berechne $(\arctan)'(1)$.
teile:
  - typ: term
    label: "$(\\arctan y)'$"
    variable: y
    loesung: "1/(1 + y^2)"
    fehler:
      - wert: "1 + y^2"
        meldung: 'Das ist die Ableitung des Tangens, ausgedrückt in $y = \tan x$. Die Umkehrfunktion hat den **Kehrwert** als Ableitung.'
      - wert: "1/(1 - y^2)"
        meldung: 'Es gilt $1 + \tan^2 x = \frac{1}{\cos^2 x}$, mit Plus. Ein Minus steht erst beim Arcussinus, und dort unter einer Wurzel: $\frac{1}{\sqrt{1 - y^2}}$.'
  - typ: zahl
    label: "$(\\arctan)'(1)$"
    loesung: "1/2"
    anzeige: '\tfrac12'
    fehler:
      - wert: "2"
        meldung: 'Das ist $(\tan)''$ an der Stelle $\frac\pi4$. Die Umkehrfunktion hat den Kehrwert als Ableitung.'
hinweise:
  - "Mit der Quotientenregel ist $(\\tan x)' = \\frac{1}{\\cos^2 x} = 1 + \\tan^2 x$."
  - 'Umkehrregel: $(\arctan)''(y) = \frac{1}{1 + \tan^2(\arctan y)}$, und $\tan(\arctan y) = y$.'
gefuehrt:
  - text: 'Berechne die Ableitung des Tangens an der Stelle $x = \frac\pi4$. Es ist $\tan\frac\pi4 = 1$ und $(\tan x)'' = 1 + \tan^2 x$.'
    teil:
      typ: zahl
      loesung: "1 + 1^2"
      fehler:
        - wert: "1"
          meldung: '$1$ ist $\tan\frac\pi4$, der Funktionswert. Die Ableitung ist $1 + \tan^2\frac\pi4$.'
    erklaerung: '$(\tan)''\left(\tfrac\pi4\right) = 1 + 1^2 = 2$.'
  - text: 'An welcher Stelle $y_0$ des Arcustangens entspricht das? Es gilt $y_0 = \tan\frac\pi4$.'
    teil:
      typ: zahl
      loesung: "1"
    erklaerung: 'Die Stelle $x_0 = \frac\pi4$ des Tangens entspricht der Stelle $y_0 = 1$ des Arcustangens.'
  - text: 'Wende die Umkehrregel an. Was ist $(\arctan)''(1)$?'
    teil:
      typ: zahl
      loesung: "1/2"
      fehler:
        - wert: "2"
          meldung: 'Die Umkehrfunktion hat den **Kehrwert** der Steigung: aus $2$ wird $\frac12$.'
    erklaerung: '$(\arctan)''(1) = \frac{1}{2}$.'
  - text: 'Allgemein: Drücke $1 + \tan^2 x$ mit $y = \tan x$ aus. Wie lautet $(\arctan y)''$?'
    teil:
      typ: term
      variable: y
      loesung: "1/(1 + y^2)"
    erklaerung: 'Mit $\tan x = y$ wird $1 + \tan^2 x = 1 + y^2$. Also $(\arctan y)'' = \frac{1}{1 + y^2}$.'
loesung: |
  Ansatz: Umkehrregel, weil $\arctan$ die Umkehrfunktion von $\tan$ ist. Zuerst die Ableitung des Tangens: Mit der Quotientenregel ist $(\tan x)' = \frac{\cos^2 x + \sin^2 x}{\cos^2 x} = \frac{1}{\cos^2 x} = 1 + \tan^2 x$. Sie ist nie $0$.
  ---
  Umkehrregel: $(\arctan)'(y) = \dfrac{1}{1 + \tan^2(\arctan y)} = \dfrac{1}{1 + y^2}$, denn $\tan(\arctan y) = y$.
  ---
  An der Stelle $1$: $(\arctan)'(1) = \frac{1}{1 + 1} = \frac12$. Probe über das Spiegelbild: Der Tangens hat bei $\frac\pi4$ die Steigung $2$, der Arcustangens bei $1$ also $\frac12$.
```

```aufgabe
id: db-arcsin-wert
titel: Steigung des Arcussinus
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Berechne die Steigung des Graphen von $\arcsin$ an der Stelle $y = 0{,}6$.
teile:
  - typ: zahl
    label: "$(\\arcsin)'(0{,}6)$"
    loesung: "1/sqrt(1 - 0.6^2)"
    anzeige: '1{,}25'
    fehler:
      - wert: "0.8"
        meldung: '$0{,}8 = \sqrt{1 - 0{,}36}$ ist der Kosinus des Winkels. Die Ableitung ist der **Kehrwert** davon.'
      - wert: "1/sqrt(1 + 0.6^2)"
        meldung: 'Unter der Wurzel steht $1 - y^2$, denn $\cos^2 = 1 - \sin^2$.'
hinweise:
  - "$(\\arcsin y)' = \\frac{1}{\\sqrt{1 - y^2}}$."
  - '$0{,}6^2 = 0{,}36$, also $1 - 0{,}36 = 0{,}64$.'
loesung: |
  Ansatz: Die Formel $(\arcsin y)' = \frac{1}{\sqrt{1 - y^2}}$ aus dem Beispiel dieser Lektion, gültig für $-1 < y < 1$.
  ---
  $1 - 0{,}6^2 = 0{,}64$ und $\sqrt{0{,}64} = 0{,}8$. Also $(\arcsin)'(0{,}6) = \frac{1}{0{,}8} = 1{,}25$.
  ---
  Kontrolle über die Umkehrregel: Zum Winkel $x = \arcsin 0{,}6$ gehört $\cos x = 0{,}8$, also hat der Sinus dort die Steigung $0{,}8$. Gespiegelt ergibt das $\frac{1}{0{,}8} = 1{,}25$.
```

```aufgabe
id: db-umkehr-ohne-formel
titel: Umkehrfunktion ohne Formel ableiten
niveau: 3
lernziel: 3
kompetenz: anwenden
angabe: |
  Die Funktion $f(x) = x^3 + x$ ist auf ganz $\R$ streng monoton wachsend und daher umkehrbar. Eine Formel für $f^{-1}$
  lässt sich nicht leicht angeben.

  a) Bestimme $f^{-1}(2)$.

  b) Bestimme $(f^{-1})'(2)$.
teile:
  - typ: zahl
    label: 'a) $f^{-1}(2)$'
    loesung: "1"
    fehler:
      - wert: "10"
        meldung: '$10 = f(2)$. Gesucht ist umgekehrt das $x$ mit $f(x) = 2$.'
  - typ: zahl
    label: "b) $(f^{-1})'(2)$"
    loesung: "1/(3*1^2 + 1)"
    anzeige: '\tfrac14'
    fehler:
      - wert: "1/13"
        meldung: 'Du hast $f''$ an der Stelle $2$ ausgewertet: $3\cdot 4 + 1 = 13$. Die Formel verlangt $f''$ an der Stelle $f^{-1}(2) = 1$.'
      - wert: "4"
        meldung: '$4 = f''(1)$ ist die Steigung von $f$. Die Umkehrfunktion hat den Kehrwert.'
hinweise:
  - 'Für a): Probiere kleine ganze Zahlen. Für welches $x$ ist $x^3 + x = 2$?'
  - 'Für b): $(f^{-1})''(2) = \frac{1}{f''(f^{-1}(2))}$ mit $f''(x) = 3x^2 + 1$.'
loesung: |
  Ansatz: Die Umkehrregel braucht keine Formel für $f^{-1}$, nur die Stelle $f^{-1}(2)$ und die Ableitung von $f$ dort.
  ---
  a) $f(1) = 1 + 1 = 2$, also $f^{-1}(2) = 1$.
  ---
  b) $f'(x) = 3x^2 + 1$, also $f'(1) = 4 \neq 0$. Umkehrregel: $(f^{-1})'(2) = \frac{1}{f'(1)} = \frac14$.
  ---
  Deutung: $f$ steigt bei $(1 \mid 2)$ mit Steigung $4$. Der gespiegelte Graph steigt bei $(2 \mid 1)$ mit Steigung $\frac14$.
```

```aufgabe
id: db-xhochx
titel: Die Funktion x hoch x
niveau: 3
lernziel: 3
kompetenz: anwenden
angabe: |
  Leite $f(x) = x^x$ für $x > 0$ ab. Hier steht die Variable unten **und** oben, also passt weder die Potenzregel noch
  die Regel für $a^x$. Berechne auch $f'(2)$ auf vier Nachkommastellen.
teile:
  - typ: term
    label: "$f'(x)$"
    loesung: "x^x*(ln(x) + 1)"
    bereich: [0.5, 3]
    fehler:
      - wert: "x*x^(x - 1)"
        meldung: 'Die Potenzregel setzt eine feste Hochzahl voraus. Hier ändert sich die Hochzahl mit $x$.'
      - wert: "ln(x)*x^x"
        meldung: 'Die Regel für $a^x$ setzt eine feste Basis voraus. Schreibe $x^x = e^{x\ln x}$ und leite mit Ketten- und Produktregel ab.'
  - typ: zahl
    label: "$f'(2)$"
    loesung: "4*(ln(2) + 1)"
    anzeige: '6{,}7726'
hinweise:
  - 'Schreibe $x = e^{\ln x}$, also $x^x = e^{x\ln x}$.'
  - 'Kettenregel mit innerer Funktion $u = x\ln x$. Deren Ableitung bekommst du mit der Produktregel: $u'' = \ln x + 1$.'
loesung: |
  Ansatz: Auf die Basis $e$ umschreiben, weil man $e^u$ sicher ableiten kann: $x^x = \left(e^{\ln x}\right)^x = e^{x\ln x}$.
  ---
  Kettenregel: $f'(x) = e^{x\ln x}\cdot(x\ln x)'$. Produktregel für die innere Ableitung: $(x\ln x)' = 1\cdot\ln x + x\cdot\frac1x = \ln x + 1$.
  ---
  Also $f'(x) = x^x(\ln x + 1)$. An der Stelle $2$: $f'(2) = 4(\ln 2 + 1) \approx 4\cdot 1{,}6931 = 6{,}7726$.
  ---
  Probe mit dem Differenzenquotienten: $\frac{2{,}001^{2{,}001} - 4}{0{,}001} \approx 6{,}78$. Das passt.
```

## Stückweise definierte Funktionen an der Nahtstelle

```aufgabe
id: db-check-nahtstelle-stetig
titel: Passen die Stücke zusammen?
niveau: 1
art: check
angabe: |
  Ist die Funktion
  $$f(x) = \begin{cases} 3 - x, & x < 2 \\ x^2 - 3, & x \ge 2 \end{cases}$$
  an der Stelle $2$ stetig?
  Herkunft: [Kapitel 12, „Stückweise definierte Funktionen“](/lernen/mathe3/grenzwerte-stetigkeit/stueckweise-definierte-funktionen).
teile:
  - typ: auswahl
    optionen: ['ja', 'nein']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Rechne beide Werte aus: von links $3 - 2 = 1$, Funktionswert $f(2) = 4 - 3 = 1$. Sie stimmen überein.'
hinweise:
  - 'Vergleiche $\lim_{x \to 2^-}(3 - x)$ mit $f(2)$.'
loesung: |
  Von links: $\lim_{x\to 2^-}(3 - x) = 1$. Von rechts und als Funktionswert: $f(2) = 2^2 - 3 = 1$.
  ---
  Beide Werte sind $1$, also ist $f$ bei $2$ stetig. Ob $f$ dort auch differenzierbar ist, klärt diese Lektion.
```

**Worum geht es in einem Satz?** Wir lernen ein sicheres Rezept für die Nahtstelle einer stückweise definierten
Funktion. Damit prüfen wir Stetigkeit und Differenzierbarkeit und bestimmen Parameter so, dass beides gilt.

Solche Funktionen kommen in Anwendungen ständig vor. Ein Handytarif kostet bis zu einer Datenmenge einen festen Betrag
und danach mehr. Eine Straße geht aus einem geraden Stück in eine Kurve über. Ein Auto beschleunigt erst und fährt dann
gleichmäßig. An den **Nahtstellen**, also dort, wo die Vorschrift wechselt, muss man genau hinschauen. Eine Aufgabe der
Musterprüfungen „nur für Mathematik 3“ dreht sich vollständig um dieses Thema.

### Die allgemeine Form

Wir betrachten eine Funktion, die links und rechts einer Stelle $x_0$ durch zwei verschiedene Terme gegeben ist:
$$f(x) = \begin{cases} f_-(x), & x < x_0 \\ c, & x = x_0 \\ f_+(x), & x > x_0. \end{cases}$$
Dabei sind $f_-$ („f minus“, das linke Stück) und $f_+$ („f plus“, das rechte Stück) „schöne“ Funktionen wie
Polynome, $e^x$, $\sin$ oder $\ln$. Sie sind auch an der Stelle $x_0$ selbst definiert und differenzierbar. Die Zahl $c$
ist der Funktionswert an der Nahtstelle. Oft gehört er zu einem der beiden Stücke, etwa wenn „$x \le x_0$“ statt
„$x < x_0$“ dasteht.

Abseits von $x_0$ stimmt $f$ auf einer ganzen Umgebung mit $f_-$ oder mit $f_+$ überein und ist dort differenzierbar.
Interessant ist nur die Nahtstelle selbst.

:::beispiel[Ein glatter Übergang von der e-Funktion in eine Gerade]
$$g(x) = \begin{cases} e^x, & x < 0 \\ 1 + x, & x \ge 0 \end{cases}$$
1. **Stetigkeit:** Von links $\lim_{x\to 0^-}e^x = e^0 = 1$. Funktionswert $g(0) = 1 + 0 = 1$. Gleich, also stetig.
2. **Einseitige Ableitungen:** Links ist $(e^x)' = e^x$, an der Stelle $0$ also $1$. Rechts ist $(1 + x)' = 1$.
3. **Vergleich:** Beide sind $1$. Also ist $g$ bei $0$ differenzierbar mit $g'(0) = 1$.

Die Gerade $1 + x$ ist genau die Tangente der e-Funktion an der Stelle $0$. Deshalb geht der Graph ohne Knick über.
Die **zweite** Ableitung springt allerdings: links $e^0 = 1$, rechts $0$. Am Graphen sieht man das kaum. Fährt man so
eine Kurve mit dem Auto, spürt man es aber als Ruck im Lenkrad.
:::

:::beispiel[Stetig, aber mit Knick]
$$f(x) = \begin{cases} x^3, & x < 1 \\ 2x - 1, & x \ge 1 \end{cases}$$
1. **Stetigkeit:** Von links $\lim_{x\to 1^-}x^3 = 1$. Funktionswert $f(1) = 2 - 1 = 1$. Stetig.
2. **Einseitige Ableitungen:** Links $(x^3)' = 3x^2$, an der Stelle $1$ also $3$. Rechts $(2x - 1)' = 2$.
3. **Vergleich:** $3 \ne 2$. Die Stücke treffen sich zwar, aber mit verschiedenen Steigungen. $f$ hat bei $1$ einen
   Knick und ist dort nicht differenzierbar.
:::

:::merke[Rezept: Nahtstelle untersuchen]
1. **Stetigkeit prüfen.** Berechne $\lim_{x\to x_0^-} f(x) = f_-(x_0)$ und $\lim_{x\to x_0^+} f(x) = f_+(x_0)$.
   $f$ ist genau dann stetig in $x_0$, wenn $f_-(x_0) = f_+(x_0) = f(x_0)$ gilt.
   Ist das verletzt, ist $f$ **nicht stetig, also nicht differenzierbar. Fertig.**
2. **Einseitige Ableitungen.** Ist $f$ stetig in $x_0$, so gilt $f'_-(x_0) = f_-'(x_0)$ und $f'_+(x_0) = f_+'(x_0)$.
   Man leitet also die Stücke ab und setzt $x_0$ ein.
3. **Vergleichen.** $f$ ist genau dann differenzierbar in $x_0$, wenn $f_-'(x_0) = f_+'(x_0)$. Dann ist $f'(x_0)$
   dieser gemeinsame Wert.
:::

```aufgabe
id: db-check-wert-c
titel: Der Wert an der Nahtstelle zählt
niveau: 1
art: check
angabe: |
  Es sei $f(x) = x^2$ für $x < 1$, $f(1) = 5$ und $f(x) = 2x - 1$ für $x > 1$. Ist $f$ bei $1$ stetig?
teile:
  - typ: auswahl
    optionen: ['ja', 'nein']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Beide Stücke streben gegen $1$. Der Funktionswert ist aber $f(1) = 5$. Stetigkeit verlangt, dass alle drei Zahlen gleich sind.'
hinweise:
  - 'Vergleiche $f_-(1)$, $f_+(1)$ und $f(1)$.'
loesung: |
  $f_-(1) = 1^2 = 1$ und $f_+(1) = 2 - 1 = 1$, aber $f(1) = 5$.
  ---
  Der Funktionswert passt nicht, also ist $f$ bei $1$ unstetig und damit auch nicht differenzierbar. Mit $f(1) = 1$ wäre $f$ stetig.
```

**Warum gilt Schritt 2 nur bei Stetigkeit?** Für $h < 0$ ist $f(x_0 + h) = f_-(x_0 + h)$. Wegen der Stetigkeit ist
$f(x_0) = f_-(x_0)$. Also
$$\frac{f(x_0 + h) - f(x_0)}{h} = \frac{f_-(x_0 + h) - f_-(x_0)}{h} \xrightarrow{h\to 0^-} f_-'(x_0).$$
Ohne Stetigkeit stünde im Zähler $f_-(x_0 + h) - c$ mit $c \neq f_-(x_0)$. Der Zähler ginge dann nicht gegen $0$,
und der Quotient strebte gegen $\pm\infty$. Deshalb **muss** man mit Schritt 1 beginnen.

:::achtung[Den Funktionswert mit dem falschen Stück berechnet]
**Falsch:** „$f(x) = 3x$ für $x < 1$ und $f(x) = x^2 + 1$ für $x \ge 1$. Es ist $f(1) = 3\cdot 1 = 3$, und von links
kommt auch $3$. Also ist $f$ stetig.“

**Richtig:** Wegen „$x \ge 1$“ gehört der Wert an der Stelle $1$ zum **rechten** Stück: $f(1) = 1 + 1 = 2$. Von links
kommt $3$. Es ist $3 \ne 2$, also springt $f$ und ist bei $1$ weder stetig noch differenzierbar. Lies bei jeder
Nahtstelle zuerst, bei welchem Stück das Gleichheitszeichen steht.
:::

:::pruefung[So schreibst du die Nahtstelle in der Prüfung auf]
Schreib die drei Schritte mit Überschrift auf: „Stetigkeit:“, „Einseitige Ableitungen:“, „Vergleich:“. Das zeigt der
Prüferin, dass du weißt, warum die Reihenfolge zählt. Rechne außerdem **einmal** eine einseitige Ableitung direkt mit
dem Differenzenquotienten aus. Ist zum Beispiel das rechte Stück $\cos x$ und die Nahtstelle $0$ mit $f(0) = 1$, dann ist
$f'_+(0) = \lim_{h\to 0^+}\frac{\cos h - 1}{h} = 0$. Das klingt dann so:
„Die rechtsseitige Ableitung ist der Grenzwert des Differenzenquotienten für positive $h$, und der ist $0$“. Am Ende
schreibst du einen Satz dazu, warum $f$ abseits der Nahtstelle ohnehin differenzierbar ist, etwa: „Die Stücke sind
Polynome und damit überall differenzierbar.“
:::

### Parameter bestimmen

Eine typische Aufgabe: Die Stücke enthalten unbekannte Zahlen, sogenannte **Parameter**. Man soll sie so wählen, dass
$f$ stetig und differenzierbar ist. Jede Bedingung liefert eine Gleichung. Zwei Bedingungen bestimmen zwei Parameter.

:::beispiel[Eine Parabel geht in eine Gerade über]
$$f(x) = \begin{cases} x^2, & x \le 1 \\ a x + b, & x > 1 \end{cases}$$
Gesucht sind $a$ und $b$, sodass $f$ auf ganz $\R$ differenzierbar ist.

1. **Stetigkeit bei $1$:** Linkes Stück $1^2 = 1$, rechtes Stück $a\cdot 1 + b$. Also $a + b = 1$.
2. **Gleiche Steigung:** Links $(x^2)' = 2x$, an der Stelle $1$ also $2$. Rechts ist die Steigung $a$. Also $a = 2$.
3. **Einsetzen:** $b = 1 - 2 = -1$. Die Gerade ist $y = 2x - 1$, die Tangente an die Parabel bei $x = 1$.
:::

```aufgabe
id: db-check-widget-naht
titel: Vorhersage für das Parameter-Widget
niveau: 1
art: check
angabe: |
  Im folgenden Widget ist $f(x) = x^2$ für $x \le 1$ und $f(x) = ax + b$ für $x > 1$. Der Regler $a$ steht auf $1$.
  Auf welchen Wert musst du $b$ stellen, damit der Graph bei $x = 1$ keinen Sprung mehr hat?
teile:
  - typ: zahl
    label: '$b$'
    loesung: "1 - 1"
    anzeige: '0'
    fehler:
      - wert: "-1"
        meldung: '$b = -1$ gehört zu $a = 2$. Bei $a = 1$ lautet die Stetigkeitsbedingung $1 + b = 1$.'
hinweise:
  - 'Stetigkeit: $a\cdot 1 + b = 1^2$.'
loesung: |
  Die Stetigkeitsbedingung lautet $a + b = 1$. Mit $a = 1$ folgt $b = 0$.
  ---
  Dann ist der Graph stetig, hat aber noch einen Knick: links Steigung $2$, rechts Steigung $1$.
```

```widget
name: parameter
titel: Parabel und Gerade an der Nahtstelle x = 1
props:
  f: "(x <= 1)*x^2 + (x > 1)*(a*x + b)"
  parameter:
    - { name: a, min: -2, max: 4, step: 0.5, wert: 1 }
    - { name: b, min: -3, max: 3, step: 0.5, wert: 1 }
  x: [-2, 3]
  y: [-2, 6]
```

Das Widget schreibt die Funktion als $(x \le 1)\cdot x^2 + (x > 1)\cdot(ax + b)$. Eine Bedingung in Klammern zählt
dabei als $1$, wenn sie erfüllt ist, und sonst als $0$. So steht links von $1$ nur $x^2$ und rechts davon nur $ax + b$.

**So gehst du vor:** Stelle bei $a = 1$ den Wert $b = 0$ ein, wie vorhergesagt. Der Sprung verschwindet, aber am
Punkt $(1 \mid 1)$ bleibt ein Knick. Stelle dann $a = 2$ ein. Jetzt springt der Graph wieder. Erst mit $b = -1$
verschwinden Sprung und Knick gleichzeitig. **Erklärung:** Stetigkeit legt $a + b$ fest, Differenzierbarkeit legt $a$
fest. Erst beide Bedingungen zusammen bestimmen beide Parameter.

:::beispiel[Eine Rampe mit knickfreiem Übergang]
Eine Skateboard-Rampe hat im Querschnitt das Profil $h(x) = 0{,}02\,x^2$ für $0 \le x \le 10$. Dabei sind $x$ und $h$
in Metern gemessen. Ab $x = 10$ soll die Rampe geradlinig weitergehen: $h(x) = a x + b$. Damit niemand stürzt, darf am
Übergang weder eine Stufe noch ein Knick sein.

1. **Höhe am Übergang:** $h(10) = 0{,}02\cdot 100 = 2$ m. Stetigkeit verlangt $10a + b = 2$.
2. **Steigung am Übergang:** $h'(x) = 0{,}04\,x$, also $h'(10) = 0{,}4$. Knickfrei heißt $a = 0{,}4$.
3. **Einsetzen:** $b = 2 - 10\cdot 0{,}4 = -2$. Die Gerade lautet $h(x) = 0{,}4\,x - 2$.

Die Rampe steigt danach mit $40\,\%$ weiter. Probe: Bei $x = 10$ liefert die Gerade $4 - 2 = 2$ m, passend zur Parabel.
:::

:::achtung[Nur die Steigungsbedingung verwendet]
**Falsch:** „Für $x^2$ bei $x \le 1$ und $ax + b$ bei $x > 1$ verlange ich gleiche Steigung: $a = 2$. Das $b$ ist egal,
ich nehme $b = 0$.“

**Richtig:** Mit $a = 2$ und $b = 0$ ist das rechte Stück $2x$. Es beginnt bei $x = 1$ auf der Höhe $2$, die Parabel
endet auf der Höhe $1$. Die Funktion springt, ist also nicht stetig und damit nach
[13.3 Differenzierbar heißt stetig](/lernen/mathe3/differenzierbarkeit/differenzierbar-heisst-stetig-aber-nicht-umgekehrt)
auch nicht differenzierbar. Die Stetigkeit liefert die zweite Gleichung $a + b = 1$, also $b = -1$.
:::

```reflexion
frage: Warum genügt es an einer Nahtstelle nicht, die Ableitungen der beiden Stücke zu vergleichen?
antwort: |
  Die Ableitung von $f_-$ an der Stelle $x_0$ ist nur dann die linksseitige Ableitung von $f$, wenn $f$ dort stetig ist.
  Ohne Stetigkeit steht im Zähler des Differenzenquotienten $f_-(x_0 + h) - f(x_0)$, und das geht nicht gegen $0$,
  sondern gegen die Sprunghöhe. Der Quotient strebt dann gegen $\pm\infty$. Gleiche Steigungen der Stücke helfen also
  nichts, wenn die Stücke auf verschiedenen Höhen enden. Erst Stetigkeit, dann Steigungen.
```

### Übungen

```aufgabe
id: db-stueck-knick
titel: Stetig mit Knick
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  $$f(x) = \begin{cases} x^2, & x \le 1 \\ 3x - 2, & x > 1 \end{cases}$$
  Zeige, dass $f$ bei $1$ stetig ist, und bestimme die einseitigen Ableitungen.
teile:
  - typ: zahl
    label: "$f'_-(1)$"
    loesung: "2"
    fehler:
      - wert: "1"
        meldung: '$1 = 1^2$ ist der Funktionswert. Die Steigung des linken Stücks ist $(x^2)'' = 2x$, an der Stelle $1$ also $2$.'
  - typ: zahl
    label: "$f'_+(1)$"
    loesung: "3"
    fehler:
      - wert: "1"
        meldung: '$1 = 3\cdot 1 - 2$ ist die Höhe der Geraden bei $1$. Ihre Steigung ist der Faktor vor $x$.'
hinweise:
  - 'Vergleiche zuerst $f(1)$ mit $\lim_{x\to 1^+}(3x - 2)$. Dann die Stücke einzeln ableiten.'
loesung: |
  Ansatz: Rezept für Nahtstellen, also zuerst die Stetigkeit. $f(1) = 1$ und $\lim_{x\to 1^+}(3x - 2) = 1$. Stetig.
  ---
  Weil $f$ stetig ist, sind die Ableitungen der Stücke die einseitigen Ableitungen. Links $(x^2)' = 2x$, bei $1$ also $2$. Rechts $(3x - 2)' = 3$.
  ---
  $2 \neq 3$: Knick. $f$ ist bei $1$ stetig, aber nicht differenzierbar.
```

```aufgabe
id: db-stueck-glatt
titel: Ableitung an der Nahtstelle und daneben
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  $$f(x) = \begin{cases} x^2, & x < 0 \\ x^3, & x \ge 0 \end{cases}$$
  Ist $f$ bei $0$ differenzierbar? Gib $f'(0)$, $f'(-1)$ und $f'(2)$ an.
teile:
  - typ: zahl
    label: "$f'(0)$"
    loesung: "0"
    fehler:
      - wert: "1"
        meldung: 'Beide Stücke haben bei $0$ die Steigung $0$: $2\cdot 0 = 0$ und $3\cdot 0^2 = 0$.'
  - typ: zahl
    label: "$f'(-1)$"
    loesung: "-2"
    fehler:
      - wert: "3"
        meldung: 'Bei $x = -1 < 0$ gilt das linke Stück $x^2$, nicht $x^3$.'
      - wert: "1"
        meldung: '$1 = (-1)^2$ ist der Funktionswert. Die Ableitung ist $2x$, an der Stelle $-1$ also $-2$.'
  - typ: zahl
    label: "$f'(2)$"
    loesung: "3*2^2"
    anzeige: '12'
    fehler:
      - wert: "4"
        meldung: 'Bei $x = 2 > 0$ gilt das rechte Stück $x^3$ mit Ableitung $3x^2$.'
hinweise:
  - 'Stetigkeit bei $0$: Beide Stücke haben dort den Wert $0$. Abseits von $0$ gilt jeweils nur ein Stück.'
loesung: |
  Ansatz: An der Nahtstelle das Rezept, abseits davon einfach das gültige Stück ableiten. Stetigkeit bei $0$: $\lim_{x\to 0^-}x^2 = 0 = f(0)$.
  ---
  Links $2x \to 0$, rechts $3x^2 \to 0$. Gleich, also $f'(0) = 0$.
  ---
  Abseits der Nahtstelle: $f'(-1) = 2\cdot(-1) = -2$ und $f'(2) = 3\cdot 4 = 12$.
```

```aufgabe
id: db-stueck-wurzel
titel: Übergang zur Wurzel
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  $$f(x) = \begin{cases} \sqrt{x}, & x \ge 4 \\ \tfrac14 x + 1, & x < 4 \end{cases}$$
  Untersuche $f$ bei $x_0 = 4$ auf Stetigkeit und Differenzierbarkeit und gib gegebenenfalls $f'(4)$ an.
teile:
  - typ: auswahl
    optionen: ['nicht stetig', 'stetig, nicht differenzierbar', 'differenzierbar']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: 'Rechne nach: $\sqrt4 = 2$ und $\frac14\cdot 4 + 1 = 2$. Die Stücke treffen sich.'
      - wert: 1
        meldung: 'Vergleiche die Steigungen: $\frac{1}{2\sqrt4} = \frac14$ und die Steigung der Geraden $\frac14$.'
  - typ: zahl
    label: "$f'(4)$"
    loesung: "1/(2*sqrt(4))"
    anzeige: '\tfrac14'
    fehler:
      - wert: "1/2"
        meldung: 'Die Ableitung der Wurzel ist $\frac{1}{2\sqrt x}$. Bei $4$ ist das $\frac{1}{2\cdot 2} = \frac14$.'
hinweise:
  - 'Zuerst $f(4)$ und den linksseitigen Grenzwert vergleichen.'
  - "$(\\sqrt x)' = \\frac{1}{2\\sqrt x}$. Vergleiche mit der Steigung $\\frac14$ der Geraden."
loesung: |
  Ansatz: Rezept für Nahtstellen. Stetigkeit: $f(4) = \sqrt 4 = 2$ und $\lim_{x\to 4^-}(\tfrac14 x + 1) = 1 + 1 = 2$. Stetig.
  ---
  Einseitige Ableitungen: rechts $\frac{1}{2\sqrt 4} = \frac14$, links die Steigung der Geraden $\frac14$.
  ---
  Gleich, also differenzierbar mit $f'(4) = \frac14$. Die Gerade ist die Tangente an $\sqrt x$ bei $4$.
```

```aufgabe
id: db-stueck-ab
titel: Zwei Parameter für einen glatten Übergang
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Bestimme $a, b \in \R$ so, dass
  $$f(x) = \begin{cases} x^3, & x \le 2 \\ a x + b, & x > 2 \end{cases}$$
  auf ganz $\R$ differenzierbar ist.
teile:
  - typ: zahl
    label: '$a$'
    loesung: "3*2^2"
    anzeige: '12'
    fehler:
      - wert: "8"
        meldung: '$8 = 2^3$ ist die Höhe. Für $a$ braucht man die Steigung $(x^3)'' = 3x^2$ bei $2$.'
      - wert: "4"
        meldung: 'Die Ableitung von $x^3$ ist $3x^2$, nicht $x^2$.'
  - typ: zahl
    label: '$b$'
    loesung: "8 - 2*12"
    anzeige: '-16'
    fehler:
      - wert: "0"
        meldung: 'Die Stetigkeit liefert eine Gleichung für $b$: $2a + b = 8$.'
      - wert: "-4"
        meldung: 'Du hast vermutlich $a + b = 8$ statt $2a + b = 8$ verwendet. Das rechte Stück ist bei $x = 2$ gleich $a\cdot 2 + b$. Mit $a = 12$ gilt also $24 + b = 8$.'
hinweise:
  - 'Stetigkeit liefert $8 = 2a + b$.'
  - 'Gleiche Steigung: $3\cdot 2^2 = a$. Danach $b$ aus der ersten Gleichung.'
gefuehrt:
  - text: 'Welche Höhe hat das linke Stück an der Nahtstelle?'
    teil:
      typ: zahl
      loesung: "8"
      fehler:
        - wert: "6"
          meldung: '$2^3 = 2\cdot 2\cdot 2 = 8$, nicht $2\cdot 3$.'
    erklaerung: '$f(2) = 2^3 = 8$. Stetigkeit verlangt also $2a + b = 8$.'
  - text: 'Welche Steigung hat das linke Stück bei $x = 2$?'
    teil:
      typ: zahl
      loesung: "12"
    erklaerung: '$(x^3)'' = 3x^2$, bei $2$ also $12$. Differenzierbarkeit verlangt $a = 12$.'
  - text: 'Bestimme $b$ aus $2a + b = 8$.'
    teil:
      typ: zahl
      loesung: "-16"
    erklaerung: '$24 + b = 8$, also $b = -16$.'
loesung: |
  Ansatz: Zwei Bedingungen für zwei Parameter. Stetigkeit bei $2$: $2^3 = 2a + b$, also $2a + b = 8$.
  ---
  Differenzierbarkeit: links $3x^2 = 12$ bei $x = 2$, rechts $a$. Also $a = 12$.
  ---
  $b = 8 - 24 = -16$. Probe: $12\cdot 2 - 16 = 8$. Abseits von $2$ sind beide Stücke Polynome, also differenzierbar.
```

```aufgabe
id: db-stueck-sinus
titel: Ein Wert für die Nahtstelle
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Die Funktion $f$ ist gegeben durch $f(x) = 1 + \sin x$ für $x < 0$ und $f(x) = e^x$ für $x > 0$. Der Wert $f(0) = c$
  ist noch frei.

  a) Wie muss $c$ gewählt werden, damit $f$ bei $0$ stetig ist?

  b) Ist $f$ mit diesem $c$ bei $0$ differenzierbar? Gib gegebenenfalls $f'(0)$ an.
teile:
  - typ: zahl
    label: 'a) $c$'
    loesung: "1 + sin(0)"
    anzeige: '1'
    fehler:
      - wert: "0"
        meldung: '$\sin 0 = 0$, aber das linke Stück ist $1 + \sin x$. Sein Grenzwert ist $1 + 0 = 1$.'
      - wert: "2"
        meldung: 'Die beiden Grenzwerte werden nicht addiert. Beide sind $1$, und $c$ muss mit ihnen übereinstimmen.'
  - typ: zahl
    label: "b) $f'(0)$"
    loesung: "cos(0)"
    anzeige: '1'
    fehler:
      - wert: "0"
        meldung: 'Die Ableitung von $1 + \sin x$ ist $\cos x$, und $\cos 0 = 1$, nicht $0$.'
hinweise:
  - 'Berechne $\lim_{x\to 0^-}(1 + \sin x)$ und $\lim_{x\to 0^+}e^x$.'
  - "Links $(1 + \\sin x)' = \\cos x$, rechts $(e^x)' = e^x$. Beide an der Stelle $0$ auswerten."
loesung: |
  Ansatz: Rezept für Nahtstellen, wobei die Stetigkeit hier den freien Wert $c$ festlegt.
  ---
  a) Von links $1 + \sin 0 = 1$, von rechts $e^0 = 1$. Beide Grenzwerte sind $1$, also muss $c = 1$ sein.
  ---
  b) Mit $c = 1$ ist $f$ stetig. Einseitige Ableitungen: links $\cos 0 = 1$, rechts $e^0 = 1$. Gleich, also ist $f$ differenzierbar mit $f'(0) = 1$. Beide Stücke haben bei $0$ dieselbe Tangente $y = 1 + x$.
```

```aufgabe
id: db-stueck-ln
titel: Den Logarithmus anstückeln
niveau: 3
lernziel: 4
kompetenz: rechnen
angabe: |
  Bestimme $a, b \in \R$ so, dass
  $$f(x) = \begin{cases} a x^2 + b, & x \le 1 \\ \ln x, & x > 1 \end{cases}$$
  bei $x_0 = 1$ differenzierbar ist.
teile:
  - typ: zahl
    label: '$a$'
    loesung: "1/2"
    anzeige: '\tfrac12'
    fehler:
      - wert: "1"
        meldung: 'Die Ableitung des linken Stücks ist $2ax$, bei $1$ also $2a$. Die Gleichung lautet $2a = 1$.'
  - typ: zahl
    label: '$b$'
    loesung: "-1/2"
    anzeige: '-\tfrac12'
    fehler:
      - wert: "1/2"
        meldung: 'Stetigkeit verlangt $a + b = \ln 1 = 0$, also $b = -a$.'
hinweise:
  - "$\\ln 1 = 0$, und $(\\ln x)' = \\frac1x$ hat bei $x = 1$ den Wert $1$."
  - 'Stetigkeit: $a + b = 0$. Steigung: $2a = 1$.'
loesung: |
  Ansatz: zwei Bedingungen für zwei Parameter. Stetigkeit: $a\cdot 1^2 + b = \ln 1 = 0$, also $a + b = 0$.
  ---
  Steigungen: links $(ax^2 + b)' = 2ax$, bei $1$ also $2a$. Rechts $(\ln x)' = \frac1x$, bei $1$ also $1$. Damit $2a = 1$ und $a = \frac12$.
  ---
  $b = -\frac12$. Probe: Die Parabel $\frac12x^2 - \frac12$ hat bei $1$ den Wert $0 = \ln 1$ und die Steigung $1 = (\ln)'(1)$. Sie schmiegt sich ohne Knick an den Logarithmus.
```

```aufgabe
id: db-stueck-achterbahn
titel: Eine Achterbahn ohne Knick
niveau: 3
lernziel: 4
kompetenz: modellieren
angabe: |
  Eine Achterbahn steigt zuerst geradlinig an: $h(x) = 0{,}5\,x$ für $0 \le x \le 4$. Danach folgt ein Bogen
  $h(x) = -0{,}0625\,x^2 + p\,x + q$ für $x > 4$. Dabei sind $x$ die waagrechte Entfernung und $h$ die Höhe, beide in Metern.

  a) Bestimme $p$ und $q$ so, dass der Übergang bei $x = 4$ weder Stufe noch Knick hat.

  b) Wie hoch ist der höchste Punkt des Bogens?
teile:
  - typ: zahl
    label: 'a) $p$'
    loesung: "0.5 + 0.125*4"
    anzeige: '1'
    fehler:
      - wert: "0.5"
        meldung: 'Die Ableitung des Bogens ist $-0{,}125x + p$. Bei $x = 4$ muss sie $0{,}5$ ergeben: $-0{,}5 + p = 0{,}5$.'
  - typ: zahl
    label: 'a) $q$'
    loesung: "2 + 0.0625*16 - 1*4"
    anzeige: '-1'
    fehler:
      - wert: "2"
        meldung: '$2$ m ist die Höhe am Übergang. Setze sie in den Bogen ein: $-0{,}0625\cdot 16 + 4p + q = 2$.'
  - typ: zahl
    label: 'b) höchster Punkt in m'
    einheit: m
    loesung: "-0.0625*8^2 + 8 - 1"
    anzeige: '3'
hinweise:
  - 'Höhe am Übergang: $h(4) = 0{,}5\cdot 4 = 2$ m. Steigung der Geraden: $0{,}5$.'
  - 'Bedingungen: $-0{,}0625\cdot 16 + 4p + q = 2$ und $-0{,}125\cdot 4 + p = 0{,}5$. Für b) die Ableitung des Bogens null setzen.'
loesung: |
  Ansatz: Knickfrei heißt stetig **und** differenzierbar am Übergang. Das sind zwei Gleichungen für $p$ und $q$. Die Gerade hat bei $4$ die Höhe $2$ m und die Steigung $0{,}5$.
  ---
  Steigung: $h'(x) = -0{,}125\,x + p$, also $-0{,}5 + p = 0{,}5$ und $p = 1$.
  ---
  Höhe: $-0{,}0625\cdot 16 + 4\cdot 1 + q = 2$, also $-1 + 4 + q = 2$ und $q = -1$.
  ---
  b) Hochpunkt: $h'(x) = -0{,}125\,x + 1 = 0$ ergibt $x = 8$ m. Höhe: $h(8) = -0{,}0625\cdot 64 + 8 - 1 = -4 + 7 = 3$ m. Antwort: Der Bogen erreicht $3$ m Höhe bei $8$ m Entfernung. Plausibel, denn die Bahn steigt nach dem Übergang noch weiter, nur immer flacher.
```

## Satz von Rolle und Mittelwertsatz

```aufgabe
id: db-check-maximum
titel: Wann gibt es ein Maximum?
niveau: 1
art: check
angabe: |
  Der Satz vom Maximum und Minimum sagt: Unter bestimmten Voraussetzungen nimmt eine Funktion auf einem Intervall einen
  größten und einen kleinsten Wert an. Welche Voraussetzungen sind das?
  Herkunft: [Kapitel 12, „Satz vom Maximum und Minimum“](/lernen/mathe3/grenzwerte-stetigkeit/satz-vom-maximum-und-minimum).
teile:
  - typ: auswahl
    optionen:
      - '$f$ ist stetig auf einem **abgeschlossenen** Intervall $[a, b]$.'
      - '$f$ ist stetig auf einem offenen Intervall $(a, b)$.'
      - '$f$ ist differenzierbar auf $(a, b)$.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Gegenbeispiel: $f(x) = x$ auf $(0, 1)$ ist stetig, kommt der $1$ beliebig nahe, erreicht sie aber nie. Es gibt kein Maximum.'
      - wert: 2
        meldung: 'Auch $f(x) = x$ auf $(0, 1)$ ist differenzierbar und hat kein Maximum. Entscheidend sind die Randpunkte.'
hinweise:
  - 'Denk an $f(x) = x$ auf $(0, 1)$ und auf $[0, 1]$.'
loesung: |
  Der Satz verlangt Stetigkeit auf einem **abgeschlossenen** Intervall $[a, b]$, also einschließlich der Randpunkte.
  ---
  Auf $[0, 1]$ hat $f(x) = x$ das Maximum $1$ bei $x = 1$. Auf $(0, 1)$ fehlt der Randpunkt, und es gibt kein Maximum.
```

**Worum geht es in einem Satz?** Der Mittelwertsatz verbindet die Ableitung an **einer** Stelle mit dem Verhalten der
Funktion auf einem **ganzen Intervall**. Er ist das wichtigste Bindeglied der Differentialrechnung. Fast alles, was du
in Kapitel 9 einfach benutzt hast, wird mit ihm bewiesen, zum Beispiel: „Ist $f' > 0$, dann steigt $f$.“

Ein Bild vorweg: Ein Auto fährt $120$ km in einer Stunde. Dann hat der Tacho irgendwann genau $120$ km/h angezeigt.
Es kann nicht die ganze Zeit langsamer oder die ganze Zeit schneller gefahren sein. Diese Alltagsbeobachtung ist der
Mittelwertsatz.

### Vorbereitung: An einem inneren Extremum ist die Ableitung null

:::satz[Notwendige Bedingung für Extrema (Satz von Fermat)]
Hat $f$ an einer **inneren** Stelle $\xi$ eines Intervalls ein lokales Maximum oder Minimum und ist $f$ dort
**differenzierbar**, so gilt $f'(\xi) = 0$.
:::

Dabei ist $\xi$ (gelesen „xi“) einfach der Name der Stelle. Eine **innere** Stelle ist keine Randstelle: Man kann von
ihr ein Stück nach links und nach rechts gehen, ohne das Intervall zu verlassen.

:::beweis
Es sei $\xi$ eine lokale Maximumstelle. Dann ist $f(\xi + h) \le f(\xi)$ für alle kleinen $|h|$, also ist der Zähler
$f(\xi + h) - f(\xi) \le 0$.

1. **Für $h > 0$** ist der Differenzenquotient „nicht positiv durch positiv“, also $\le 0$. Sein Grenzwert ist dann
   ebenfalls $\le 0$: $f'(\xi) \le 0$.
2. **Für $h < 0$** ist er „nicht positiv durch negativ“, also $\ge 0$. Sein Grenzwert ist $\ge 0$: $f'(\xi) \ge 0$.
3. Beides zusammen geht nur mit $f'(\xi) = 0$.

Für ein Minimum dreht man alle Ungleichungen um.
:::

Beide Voraussetzungen sind nötig. Die Betragsfunktion hat bei $0$ ein Minimum, ist dort aber nicht differenzierbar.
Die Funktion $f(x) = x$ auf $[0, 1]$ hat bei $1$ ein Maximum, aber am **Rand**, und dort ist $f'(1) = 1 \neq 0$.

### Der Satz von Rolle

:::satz[Satz von Rolle]
Es sei $f$
1. **stetig** auf dem abgeschlossenen Intervall $[a, b]$,
2. **differenzierbar** auf dem offenen Intervall $(a, b)$, und
3. es gelte $f(a) = f(b)$.

Dann gibt es mindestens eine Stelle $\xi$ zwischen $a$ und $b$, also $\xi \in (a, b)$, mit $f'(\xi) = 0$.
:::

Das Zeichen $\in$ liest man „ist Element von“ oder einfach „liegt in“.

:::beispiel[Rolle für den Sinus]
$f(x) = \sin x$ auf $[0, \pi]$. Der Sinus ist überall stetig und differenzierbar. Außerdem ist $f(0) = 0 = f(\pi)$.

1. Alle drei Voraussetzungen sind erfüllt.
2. Gesucht ist $\xi$ mit $f'(\xi) = \cos\xi = 0$ im Inneren $(0, \pi)$.
3. Das ist $\xi = \frac{\pi}{2} \approx 1{,}571$. Dort liegt der Hochpunkt des Sinusbogens, und die Tangente ist waagrecht.
:::

:::beweis[Beweis des Satzes von Rolle]
Wir verwenden den **Satz vom Maximum und Minimum** aus [12.12 Satz vom Maximum und Minimum](/lernen/mathe3/grenzwerte-stetigkeit/satz-vom-maximum-und-minimum). Danach
nimmt die auf $[a, b]$ stetige Funktion dort einen größten Wert $M$ und einen kleinsten Wert $m$ an.

*Fall 1:* $M = m$. Dann ist $f$ konstant, und $f'(\xi) = 0$ gilt für jedes $\xi \in (a, b)$.

*Fall 2:* $M > m$. Weil $f(a) = f(b)$ ist, können nicht beide Werte $M$ und $m$ nur am Rand liegen. Mindestens einer
wird also an einer inneren Stelle $\xi$ angenommen. Dort hat $f$ ein Extremum und ist differenzierbar. Nach Fermat ist
$f'(\xi) = 0$.
:::

Anschaulich: Wer auf derselben Höhe startet und ankommt und dazwischen auf- oder absteigt, muss irgendwo umkehren. An
der Umkehrstelle ist die Tangente waagrecht.

### Der Mittelwertsatz

:::satz[Mittelwertsatz der Differentialrechnung]
Es sei $f$ **stetig** auf $[a, b]$ und **differenzierbar** auf $(a, b)$. Dann gibt es mindestens eine Stelle
$\xi \in (a, b)$ mit
$$f'(\xi) = \frac{f(b) - f(a)}{b - a}.$$
:::

**Geometrische Deutung:** Die rechte Seite ist die Steigung der Sekante durch die Randpunkte $(a \mid f(a))$ und
$(b \mid f(b))$. Es gibt also eine Zwischenstelle, an der die Tangente **parallel zur Sekante** ist.

**Physikalische Deutung:** Ist $f(t)$ der zurückgelegte Weg zur Zeit $t$, so ist die rechte Seite die
Durchschnittsgeschwindigkeit. $f'(\xi)$ ist die Momentangeschwindigkeit zur Zeit $\xi$. Der Satz sagt: Irgendwann
fährt man genau mit der Durchschnittsgeschwindigkeit.

:::beispiel[Die Zwischenstelle für x³ berechnen]
$f(x) = x^3$ auf $[0, 3]$.

1. **Voraussetzungen:** $f$ ist ein Polynom, also überall stetig und differenzierbar.
2. **Sekantensteigung:** $\dfrac{f(3) - f(0)}{3 - 0} = \dfrac{27 - 0}{3} = 9$.
3. **Gleichung:** $f'(\xi) = 3\xi^2 = 9$, also $\xi^2 = 3$ und $\xi = \pm\sqrt3$.
4. **Auswahl:** Nur $\xi = \sqrt3 \approx 1{,}732$ liegt in $(0, 3)$. Die Lösung $-\sqrt3$ zählt nicht.
:::

```plot
x: [-0.5, 3.5]
y: [-3, 30]
achsen: { x: "x", y: "y" }
graphen:
  - { f: "x^3", label: "f(x) = x³", farbe: 0 }
  - { f: "9*x", label: "Sekante, Steigung 9", farbe: 1, von: 0, bis: 3 }
  - { f: "9*x - 6*sqrt(3)", label: "Tangente bei ξ = √3", farbe: 2, gestrichelt: true, von: 0.6, bis: 3.3 }
punkte:
  - { x: 0, y: 0, label: "a" }
  - { x: 3, y: 27, label: "b" }
  - { x: "sqrt(3)", y: "3*sqrt(3)", label: "ξ" }
beschriftung: Mittelwertsatz für x³ auf [0, 3]. Die Tangente an der Stelle ξ = √3 ist parallel zur Sekante durch die Randpunkte.
```

**Die Beweisidee:** Wir „stellen die Sekante waagrecht“. Zieht man von $f$ die Sekante ab, entsteht eine Funktion,
die an beiden Rändern den Wert $0$ hat. Auf sie passt der Satz von Rolle.

:::beweis[Beweis des Mittelwertsatzes]
**Schritt 1, Hilfsfunktion.** Es sei $m = \frac{f(b) - f(a)}{b - a}$ die Sekantensteigung. Wir setzen
$$g(x) = f(x) - \big(f(a) + m\,(x - a)\big).$$
Der Ausdruck in der Klammer ist die Sekante. $g(x)$ ist also der senkrechte Abstand zwischen Graph und Sekante.

**Schritt 2, Voraussetzungen von Rolle.** $g$ ist stetig auf $[a, b]$ und differenzierbar auf $(a, b)$, denn das gilt
für $f$ und für die Gerade. Außerdem ist $g(a) = f(a) - f(a) = 0$ und
$g(b) = f(b) - f(a) - m(b - a) = f(b) - f(a) - \big(f(b) - f(a)\big) = 0$.

**Schritt 3, Rolle anwenden.** Es gibt $\xi \in (a, b)$ mit $g'(\xi) = 0$. Wegen $g'(x) = f'(x) - m$ heißt das
$f'(\xi) = m$.
:::

**Was haben wir gezeigt?** Dort, wo der Abstand zwischen Graph und Sekante am größten ist, verläuft die Tangente
parallel zur Sekante. Der Satz von Rolle ist dabei genau der Spezialfall $f(a) = f(b)$ des Mittelwertsatzes, also eine
waagrechte Sekante.

**Ein typisches Missverständnis:** „Der Mittelwertsatz sagt mir, wo $\xi$ liegt.“ Nein. Er garantiert nur, dass es
mindestens ein solches $\xi$ gibt. Oft kann man $\xi$ gar nicht ausrechnen. Für Beweise genügt aber schon das Wissen,
dass $\xi$ irgendwo zwischen $a$ und $b$ liegt.

```aufgabe
id: db-check-mws-deutung
titel: Was garantiert der Mittelwertsatz?
niveau: 1
art: check
angabe: |
  Eine Läuferin legt $10$ km in $50$ Minuten zurück. Ihre Weg-Zeit-Funktion ist differenzierbar. Was folgt aus dem Mittelwertsatz?
teile:
  - typ: auswahl
    optionen:
      - 'Zu mindestens einem Zeitpunkt lief sie genau $12$ km/h.'
      - 'Sie lief die ganze Zeit genau $12$ km/h.'
      - 'Sie lief nach $25$ Minuten genau $12$ km/h.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Der Satz sagt nichts über die ganze Zeit. Sie kann zwischendurch schneller und langsamer gewesen sein.'
      - wert: 2
        meldung: 'Der Satz sagt nicht, **wann**. Er garantiert nur, dass es mindestens einen solchen Zeitpunkt gibt.'
hinweise:
  - '$50$ Minuten sind $\frac56$ Stunden. Durchschnittsgeschwindigkeit $= 10 : \frac56$.'
loesung: |
  Durchschnitt: $10\text{ km} : \frac56\text{ h} = 12$ km/h.
  ---
  Der Mittelwertsatz garantiert einen Zeitpunkt, zu dem die Momentangeschwindigkeit genau $12$ km/h war. Wann das war, sagt er nicht.
```

:::beispiel[Abschnittskontrolle auf der Autobahn]
Ein Auto passiert zwei Messpunkte einer Abschnittskontrolle im Abstand von $6$ km in $3$ Minuten. Erlaubt sind $100$ km/h.

1. **Zeit in Stunden:** $3$ min $= \frac{3}{60}$ h $= 0{,}05$ h.
2. **Durchschnittsgeschwindigkeit:** $\frac{6\text{ km}}{0{,}05\text{ h}} = 120$ km/h.
3. **Mittelwertsatz:** Der Ort $s(t)$ eines Autos hängt stetig und differenzierbar von der Zeit ab. Ein Auto springt
   nicht und hat immer eine Geschwindigkeit $s'(t)$. Also gab es einen Zeitpunkt $\tau$ mit $s'(\tau) = 120$ km/h.

Das Zeichen $\tau$ heißt „tau“ und bezeichnet hier einen Zeitpunkt. Die Strafe ist also mathematisch begründet, auch
wenn niemand diesen Moment gemessen hat.
:::

### Warum alle Voraussetzungen nötig sind

:::achtung[Rolle bei einem Knick angewendet]
**Falsch:** „$f(x) = |x|$ auf $[-1, 1]$ hat $f(-1) = 1 = f(1)$. Nach Rolle gibt es also ein $\xi$ mit $f'(\xi) = 0$.“

**Richtig:** $f$ ist bei $0$ nicht differenzierbar, die zweite Voraussetzung ist verletzt. Tatsächlich ist $f'(x) = -1$
für $x < 0$ und $f'(x) = 1$ für $x > 0$, also nirgends $0$. Ohne geprüfte Voraussetzungen darf man den Satz nicht
anwenden.
:::

:::achtung[Mittelwertsatz über eine Definitionslücke hinweg]
**Falsch:** „$f(x) = \frac1x$ auf $[-1, 1]$: Sekantensteigung $\frac{1 - (-1)}{1 - (-1)} = 1$. Nach dem Mittelwertsatz
gibt es $\xi$ mit $-\frac{1}{\xi^2} = 1$.“

**Richtig:** Diese Gleichung hat keine reelle Lösung, denn $-\frac{1}{\xi^2}$ ist immer negativ. Der Fehler: $f$ ist
bei $0$ gar nicht definiert, also auf $[-1, 1]$ nicht stetig. Die erste Voraussetzung ist verletzt.
:::

Ein drittes Gegenbeispiel betrifft den Rand: $f(x) = x$ für $0 \le x < 1$ und $f(1) = 0$. Dann ist $f(0) = f(1) = 0$,
und $f$ ist auf $(0, 1)$ differenzierbar mit $f' = 1$. Trotzdem ist $f'$ nirgends $0$. Der Sprung am rechten Rand
verletzt die Stetigkeit auf dem **abgeschlossenen** Intervall.

:::pruefung[So nennst du den Mittelwertsatz in der mündlichen Prüfung]
Zähle **zuerst** die Voraussetzungen auf: „stetig auf dem abgeschlossenen Intervall $[a, b]$, differenzierbar auf dem
offenen Intervall $(a, b)$“. Dann die Aussage: „Es gibt ein $\xi$ dazwischen mit $f'(\xi)$ gleich der
Sekantensteigung.“ Dann die Deutung: „Die Tangente ist parallel zur Sekante.“ Zum Schluss ein Gegenbeispiel, etwa
$|x|$ auf $[-1, 1]$. Das ist eine vollständige Antwort, und genau nach diesem Muster wird gefragt.
:::

```reflexion
frage: Warum verlangt der Mittelwertsatz Stetigkeit auf dem **abgeschlossenen** Intervall, Differenzierbarkeit aber nur auf dem **offenen**?
antwort: |
  Die Stetigkeit an den Rändern braucht man, damit die Funktion dort keinen Sprung macht. Sonst hätte die Sekante mit dem
  Verlauf im Inneren nichts zu tun, wie das Gegenbeispiel mit $f(1) = 0$ zeigt. Differenzierbarkeit an den Rändern braucht
  man dagegen nicht, weil die Zwischenstelle $\xi$ immer im Inneren liegt. Deshalb darf zum Beispiel $\sqrt{x}$ auf
  $[0, 4]$ verwendet werden, obwohl die Wurzel bei $0$ eine senkrechte Tangente hat.
```

### Übungen

```aufgabe
id: db-rolle-stelle
titel: Eine Rolle-Stelle finden
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Prüfe für $f(x) = x^2 - 6x + 2$ auf $[1, 5]$ die Voraussetzungen des Satzes von Rolle und bestimme die Stelle $\xi$
  mit $f'(\xi) = 0$.
teile:
  - typ: zahl
    label: '$\xi$'
    loesung: "3"
    fehler:
      - wert: "-3"
        meldung: 'Aus $2\xi - 6 = 0$ folgt $\xi = +3$. Außerdem muss $\xi$ im Intervall $(1, 5)$ liegen.'
      - wert: "6"
        meldung: 'Die Ableitung ist $2x - 6$. Null wird sie bei $x = 3$, nicht bei $6$.'
hinweise:
  - 'Berechne $f(1)$ und $f(5)$. Dann löse $f''(\xi) = 0$.'
loesung: |
  Ansatz: Zuerst die drei Voraussetzungen, dann die Gleichung $f'(\xi) = 0$. $f$ ist ein Polynom, also stetig und differenzierbar. $f(1) = 1 - 6 + 2 = -3$ und $f(5) = 25 - 30 + 2 = -3$. Gleich.
  ---
  $f'(x) = 2x - 6 = 0$ ergibt $\xi = 3 \in (1, 5)$. Das ist der Scheitel der Parabel, genau in der Mitte, wie es die Symmetrie erwarten lässt.
```

```aufgabe
id: db-mws-pol
titel: Darf man den Mittelwertsatz anwenden?
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Erfüllt $f(x) = \dfrac{1}{x - 2}$ auf dem Intervall $[0, 3]$ die Voraussetzungen des Mittelwertsatzes?
teile:
  - typ: auswahl
    optionen:
      - 'Nein, denn $f$ ist bei $x = 2$ nicht definiert und damit auf $[0, 3]$ nicht stetig.'
      - 'Ja, denn $f$ ist ein Bruch aus Polynomen.'
      - 'Ja, denn $f(0)$ und $f(3)$ existieren.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Brüche aus Polynomen sind nur dort stetig, wo der Nenner nicht $0$ ist. Bei $x = 2$ ist er $0$.'
      - wert: 2
        meldung: 'Die Randwerte allein genügen nicht. Die Funktion muss auf dem **ganzen** Intervall stetig sein.'
hinweise:
  - 'Wo wird der Nenner $x - 2$ null? Liegt diese Stelle im Intervall?'
loesung: |
  Ansatz: Voraussetzung 1 verlangt Stetigkeit auf ganz $[0, 3]$. Der Nenner $x - 2$ ist bei $x = 2$ null, und $2$ liegt im Intervall.
  ---
  Dort hat $f$ einen Pol. Also ist $f$ auf $[0, 3]$ nicht stetig, und der Mittelwertsatz ist nicht anwendbar.
```

```aufgabe
id: db-mws-stelle
titel: Mittelwertsatz für eine Parabel
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  Bestimme für $f(x) = x^2 + 2x$ auf $[1, 5]$ die Zwischenstelle $\xi$ aus dem Mittelwertsatz. Zeige dann allgemein:
  Für jede quadratische Funktion $f(x) = px^2 + qx + r$ mit $p \ne 0$ liegt $\xi$ genau in der Mitte des Intervalls.
teile:
  - typ: zahl
    label: '$\xi$'
    loesung: "3"
    fehler:
      - wert: "8"
        meldung: '$8$ ist die Sekantensteigung. Gesucht ist die Stelle $\xi$ mit $f''(\xi) = 8$.'
      - wert: "4"
        meldung: 'Prüfe die Sekantensteigung: $f(5) = 35$, $f(1) = 3$, also $\frac{32}{4} = 8$. Dann $2\xi + 2 = 8$.'
  - typ: text
    label: 'Allgemeiner Nachweis'
    muster: |
      Für $f(x) = px^2 + qx + r$ ist $\frac{f(b) - f(a)}{b - a} = \frac{p(b^2 - a^2) + q(b - a)}{b - a} = p(a + b) + q$.
      Aus $f'(\xi) = 2p\xi + q = p(a + b) + q$ folgt $\xi = \frac{a + b}{2}$, denn $p \neq 0$.
hinweise:
  - 'Sekantensteigung: $\frac{f(5) - f(1)}{5 - 1}$.'
  - 'Für den allgemeinen Teil: $b^2 - a^2 = (b - a)(b + a)$, dann durch $b - a$ kürzen.'
loesung: |
  Ansatz: Sekantensteigung berechnen und mit $f'(\xi)$ gleichsetzen, weil das genau die Aussage des Mittelwertsatzes ist. $f(5) = 35$, $f(1) = 3$, Sekantensteigung $\frac{35 - 3}{4} = 8$.
  ---
  $f'(\xi) = 2\xi + 2 = 8$ ergibt $\xi = 3$, genau die Mitte von $[1, 5]$.
  ---
  Allgemein: Mit der dritten binomischen Formel ist $\frac{p(b^2 - a^2) + q(b - a)}{b - a} = p(a + b) + q$. Gleichsetzen mit $2p\xi + q$ ergibt $\xi = \frac{a + b}{2}$. Bei Parabeln liegt die Zwischenstelle also immer in der Intervallmitte.
```

```aufgabe
id: db-mws-voraussetzung
titel: Wann darf man den Mittelwertsatz anwenden?
niveau: 2
lernziel: 5
kompetenz: verstehen
angabe: |
  Für welche Funktionen sind auf dem Intervall $[-1, 1]$ **alle** Voraussetzungen des Mittelwertsatzes erfüllt? Kreuze alle an.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$f(x) = |x|$'
      - '$f(x) = x^3 - x$'
      - '$f(x) = \frac{1}{x}$'
      - '$f(x) = \sqrt{x + 1}$'
      - '$f(x) = \sqrt[3]{x}$'
    richtig: [1, 3]
    fehler:
      - wert: [1]
        meldung: '$\sqrt{x + 1}$ hat zwar bei $x = -1$ eine senkrechte Tangente, aber das ist ein **Randpunkt**. Differenzierbar muss $f$ nur im Inneren sein.'
      - wert: [1, 3, 4]
        meldung: '$\sqrt[3]{x}$ hat bei $0$, also im Inneren, eine senkrechte Tangente. Dort ist sie nicht differenzierbar.'
      - wert: [0, 1, 3]
        meldung: '$|x|$ hat bei $0$ einen Knick, mitten im Intervall.'
hinweise:
  - 'Stetig auf $[-1, 1]$ und differenzierbar auf $(-1, 1)$, also nur im **Inneren**. Am Rand darf die Ableitung fehlen.'
  - 'Suche bei jeder Funktion nach Knicken, Polen und senkrechten Tangenten und prüfe, ob sie im Inneren liegen.'
loesung: |
  Ansatz: Für jede Funktion getrennt prüfen: stetig auf $[-1, 1]$? Differenzierbar auf $(-1, 1)$?
  ---
  $|x|$: Knick bei $0 \in (-1, 1)$, nicht differenzierbar. $x^3 - x$: Polynom, erfüllt. $\frac1x$: bei $0$ nicht einmal definiert.
  ---
  $\sqrt{x + 1}$: stetig auf $[-1, 1]$ und differenzierbar für $x > -1$, also auf $(-1, 1)$. Dass bei $x = -1$ die Ableitung fehlt, stört nicht, weil das ein Randpunkt ist. Erfüllt.
  ---
  $\sqrt[3]{x}$: senkrechte Tangente bei $0$, also im Inneren nicht differenzierbar. Richtig sind genau $x^3 - x$ und $\sqrt{x + 1}$.
```

```aufgabe
id: db-mws-kubisch
titel: Liegt die Stelle wirklich im Inneren?
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Bestimme für $f(x) = x^3$ auf $[-1, 2]$ alle Zwischenstellen $\xi$, deren Existenz der Mittelwertsatz garantiert.
teile:
  - typ: menge
    label: 'alle $\xi$ im Inneren'
    loesung: ["1"]
    fehler:
      - wert: ["1", "-1"]
        meldung: '$\xi = -1$ ist der linke **Randpunkt**. Der Mittelwertsatz liefert Stellen im offenen Intervall $(-1, 2)$.'
      - wert: ["sqrt(3)"]
        meldung: 'Prüfe die Sekantensteigung: $\frac{f(2) - f(-1)}{2 - (-1)} = \frac{8 - (-1)}{3} = 3$.'
hinweise:
  - 'Sekantensteigung $\frac{f(2) - f(-1)}{2 - (-1)}$. Achte auf die Minuszeichen.'
  - 'Löse $3\xi^2 = 3$ und prüfe für jede Lösung, ob sie echt zwischen $-1$ und $2$ liegt.'
gefuehrt:
  - text: 'Berechne die Sekantensteigung $\frac{f(2) - f(-1)}{2 - (-1)}$.'
    teil:
      typ: zahl
      loesung: "(8 - (-1))/3"
      fehler:
        - wert: "7/3"
          meldung: '$f(-1) = (-1)^3 = -1$. Im Zähler steht also $8 - (-1) = 9$, nicht $8 - 1$.'
        - wert: "9"
          meldung: 'Der Zähler ist $9$, aber du musst noch durch die Intervallbreite $2 - (-1) = 3$ teilen.'
    erklaerung: '$\frac{8 + 1}{3} = 3$.'
  - text: 'Löse $f''(\xi) = 3\xi^2 = 3$. Gib die positive Lösung an.'
    teil:
      typ: zahl
      loesung: "1"
    erklaerung: '$\xi^2 = 1$, also $\xi = 1$ oder $\xi = -1$.'
  - text: 'Liegt die Lösung $\xi = -1$ im offenen Intervall $(-1, 2)$?'
    teil:
      typ: auswahl
      optionen: ['ja', 'nein']
      richtig: [1]
      fehler:
        - wert: 0
          meldung: 'Das offene Intervall enthält seine Randpunkte nicht. $-1$ ist ein Randpunkt.'
    erklaerung: 'Nein, $-1$ ist der linke Rand. Es bleibt nur $\xi = 1$.'
loesung: |
  Ansatz: Mittelwertsatz, also Sekantensteigung mit $f'(\xi)$ gleichsetzen. $f$ ist ein Polynom, die Voraussetzungen sind erfüllt.
  ---
  Sekantensteigung: $\frac{8 - (-1)}{3} = 3$. Gleichung: $3\xi^2 = 3$, also $\xi = \pm 1$.
  ---
  Nur $\xi = 1$ liegt im offenen Intervall $(-1, 2)$. Die Lösung $-1$ ist ein Randpunkt und zählt nicht. Probe: Die Tangente bei $1$ hat Steigung $3$, genau wie die Sekante.
```

```aufgabe
id: db-mws-maut
titel: Abschnittskontrolle im Tunnel
niveau: 2
lernziel: 5
kompetenz: modellieren
angabe: |
  Ein Auto durchfährt einen $10$ km langen Tunnel mit Abschnittskontrolle in $4{,}5$ Minuten. Erlaubt sind $100$ km/h.

  a) Berechne die Durchschnittsgeschwindigkeit in km/h, gerundet auf eine Nachkommastelle.

  b) Begründe mit dem Mittelwertsatz, dass das Auto im Tunnel zu einem Zeitpunkt genau diese Geschwindigkeit hatte.
  Welche Voraussetzung an die Weg-Zeit-Funktion $s(t)$ brauchst du?
teile:
  - typ: zahl
    label: 'a) Durchschnittsgeschwindigkeit'
    einheit: km/h
    loesung: "10/(4.5/60)"
    anzeige: '133{,}3'
    fehler:
      - wert: "10/4.5"
        meldung: 'Das sind Kilometer pro **Minute**. Rechne die Zeit zuerst in Stunden um: $4{,}5$ min $= 0{,}075$ h.'
      - wert: "10*4.5/60"
        meldung: 'Geschwindigkeit ist Weg **durch** Zeit, nicht Weg mal Zeit.'
  - typ: text
    label: 'b) Begründung'
    muster: |
      $s(t)$ ist auf $[0;\ 0{,}075]$ (Stunden) stetig und im Inneren differenzierbar mit $s'(t) = v(t)$. Nach dem
      Mittelwertsatz gibt es einen Zeitpunkt $\tau$ mit $v(\tau) = s'(\tau) = \frac{s(0{,}075) - s(0)}{0{,}075} \approx 133{,}3$ km/h.
      Zu diesem Zeitpunkt war das Auto um über $33$ km/h zu schnell.
hinweise:
  - '$4{,}5$ min $= \frac{4{,}5}{60}$ h $= 0{,}075$ h.'
  - 'Für b): Welche Eigenschaft hat die Weg-Zeit-Funktion eines echten Autos? Kann es springen, kann es keine Geschwindigkeit haben?'
loesung: |
  Ansatz: Durchschnittsgeschwindigkeit ist die Sekantensteigung der Weg-Zeit-Funktion. Zeit umrechnen: $4{,}5$ min $= \frac{4{,}5}{60}$ h $= 0{,}075$ h.
  ---
  a) $\frac{10\text{ km}}{0{,}075\text{ h}} \approx 133{,}3$ km/h.
  ---
  b) Die Weg-Zeit-Funktion $s$ eines Autos ist stetig und differenzierbar, weil es keine Sprünge im Ort gibt und immer eine endliche Geschwindigkeit $s' = v$.
  ---
  Mittelwertsatz auf $[0;\ 0{,}075]$: Es gibt einen Zeitpunkt $\tau$ mit $v(\tau) = \frac{s(0{,}075) - s(0)}{0{,}075 - 0} \approx 133{,}3$ km/h. Das liegt über den erlaubten $100$ km/h.
```

```aufgabe
id: db-rolle-nullstellen
titel: Höchstens eine Nullstelle
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  Zeige mit dem Satz von Rolle, dass $f(x) = x^3 + x - 1$ höchstens eine reelle Nullstelle hat.
teile:
  - typ: auswahl
    label: 'Welcher Gedanke trägt den Beweis?'
    optionen:
      - 'Hätte $f$ zwei Nullstellen $a < b$, gäbe es nach Rolle ein $\xi$ dazwischen mit $f''(\xi) = 0$. Aber $f''(x) = 3x^2 + 1 > 0$.'
      - '$f(0) = -1$ ist negativ, also gibt es höchstens eine Nullstelle.'
      - 'Ein Polynom dritten Grades hat immer genau eine Nullstelle.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Ein einzelner Funktionswert sagt nichts über die Anzahl der Nullstellen.'
      - wert: 2
        meldung: 'Falsch: $x^3 - x = x(x - 1)(x + 1)$ hat drei Nullstellen. Es kommt auf die Ableitung an.'
  - typ: text
    label: 'Beweis'
    muster: |
      Angenommen, $f$ hätte zwei Nullstellen $a < b$. Dann ist $f(a) = f(b) = 0$, und $f$ ist als Polynom stetig und
      differenzierbar. Nach Rolle gibt es $\xi \in (a, b)$ mit $f'(\xi) = 0$. Aber $f'(x) = 3x^2 + 1 \ge 1 > 0$ für alle
      $x$. Widerspruch. Also hat $f$ höchstens eine Nullstelle.
hinweise:
  - 'Nimm an, es gäbe zwei verschiedene Nullstellen $a < b$. Was liefert dann der Satz von Rolle?'
  - 'Kann $f''(x) = 3x^2 + 1$ jemals $0$ sein?'
loesung: |
  Ansatz: Widerspruchsbeweis. Wir nehmen an, $f$ hätte zwei Nullstellen $a < b$, und führen das mit Rolle zu einem Widerspruch.
  ---
  Dann ist $f(a) = f(b) = 0$. $f$ ist ein Polynom, also stetig und differenzierbar. Nach Rolle gibt es $\xi \in (a, b)$ mit $f'(\xi) = 0$.
  ---
  Aber $f'(x) = 3x^2 + 1$, und wegen $3x^2 \ge 0$ ist $f'(x) \ge 1$ für alle $x$. Das kann nie $0$ sein. Widerspruch, also hat $f$ höchstens eine Nullstelle. Zusammen mit $f(0) = -1 < 0 < 1 = f(1)$ und dem Zwischenwertsatz hat $f$ sogar genau eine.
```

```aufgabe
id: db-mws-abschaetzung
titel: Eine Wurzel mit dem Mittelwertsatz einschließen
niveau: 3
lernziel: 5
kompetenz: begruenden
angabe: |
  Wende den Mittelwertsatz auf $f(x) = \sqrt x$ und das Intervall $[100, 101]$ an und folgere
  $$10 + \frac{1}{2\sqrt{101}} < \sqrt{101} < 10 + \frac{1}{20}.$$
  Gib die obere Schranke als Dezimalzahl an.
teile:
  - typ: zahl
    label: 'obere Schranke'
    loesung: "10 + 1/20"
    anzeige: '10{,}05'
    toleranz: 0.001
    fehler:
      - wert: "10 + 1/10"
        meldung: 'Die Ableitung ist $\frac{1}{2\sqrt x}$. An der Stelle $100$ ist das $\frac{1}{2\cdot 10} = \frac{1}{20}$, nicht $\frac{1}{10}$.'
  - typ: text
    label: 'Begründung'
    muster: |
      Mittelwertsatz: $\sqrt{101} - \sqrt{100} = \frac{1}{2\sqrt\xi}\cdot 1$ für ein $\xi \in (100, 101)$. Wegen
      $10 < \sqrt\xi < \sqrt{101}$ ist $\frac{1}{2\sqrt{101}} < \frac{1}{2\sqrt\xi} < \frac{1}{20}$. Addition von $10$
      liefert die Ungleichungskette.
hinweise:
  - "$f'(x) = \\frac{1}{2\\sqrt x}$ wird kleiner, wenn $x$ wächst."
  - 'Der Mittelwertsatz liefert $\sqrt{101} - 10 = \frac{1}{2\sqrt\xi}$ mit $100 < \xi < 101$. Schätze $\sqrt\xi$ nach oben und unten ab.'
loesung: |
  Ansatz: Der Mittelwertsatz macht aus einer Differenz von Funktionswerten einen Ableitungswert an einer unbekannten Stelle. Den schätzen wir ab. $\sqrt x$ ist auf $[100, 101]$ stetig und differenzierbar.
  ---
  $\sqrt{101} - 10 = f'(\xi)\cdot(101 - 100) = \frac{1}{2\sqrt\xi}$ mit $100 < \xi < 101$.
  ---
  Aus $10 < \sqrt\xi < \sqrt{101}$ folgt $\frac{1}{2\sqrt{101}} < \frac{1}{2\sqrt\xi} < \frac{1}{20}$, denn ein größerer Nenner macht den Bruch kleiner.
  ---
  Ergebnis: $10{,}0497 < \sqrt{101} < 10{,}05$. Kontrolle mit dem Taschenrechner: $\sqrt{101} \approx 10{,}04988$.
```

```aufgabe
id: db-mws-ln-schranke
titel: Den Logarithmus einschließen
niveau: 3
lernziel: 5
kompetenz: begruenden
angabe: |
  Zeige mit dem Mittelwertsatz für $f(t) = \ln(1 + t)$ auf $[0, x]$: Für alle $x > 0$ gilt
  $$\frac{x}{1 + x} < \ln(1 + x) < x .$$
  Berechne zur Kontrolle beide Schranken für $x = 0{,}5$ und gib die untere Schranke an.
teile:
  - typ: zahl
    label: 'untere Schranke für $x = 0{,}5$'
    loesung: "0.5/1.5"
    anzeige: '\tfrac13 \approx 0{,}333'
    fehler:
      - wert: "0.5"
        meldung: '$0{,}5$ ist die **obere** Schranke $x$. Die untere ist $\frac{x}{1 + x} = \frac{0{,}5}{1{,}5}$.'
  - typ: text
    label: 'Beweis'
    muster: |
      $f(t) = \ln(1 + t)$ ist auf $[0, x]$ stetig und differenzierbar mit $f'(t) = \frac{1}{1 + t}$. Nach dem
      Mittelwertsatz gibt es $\xi \in (0, x)$ mit $\ln(1 + x) - \ln 1 = \frac{x}{1 + \xi}$. Wegen $0 < \xi < x$ ist
      $1 < 1 + \xi < 1 + x$, also $\frac{x}{1 + x} < \frac{x}{1 + \xi} < x$.
hinweise:
  - "$f(0) = \\ln 1 = 0$ und $f'(t) = \\frac{1}{1 + t}$."
  - 'Der Mittelwertsatz liefert $\ln(1 + x) = \frac{x}{1 + \xi}$. Schätze den Nenner $1 + \xi$ mit $0 < \xi < x$ ab.'
loesung: |
  Ansatz: Mittelwertsatz auf $[0, x]$, weil dann $\ln(1 + x)$ als Differenz $f(x) - f(0)$ auftritt. $f$ ist dort stetig und differenzierbar, $f'(t) = \frac{1}{1 + t}$.
  ---
  Es gibt $\xi \in (0, x)$ mit $\ln(1 + x) - 0 = \frac{1}{1 + \xi}\cdot x$.
  ---
  Aus $0 < \xi < x$ folgt $1 < 1 + \xi < 1 + x$ und damit $\frac{x}{1 + x} < \frac{x}{1 + \xi} < \frac{x}{1} = x$. Das ist die Behauptung.
  ---
  Kontrolle für $x = 0{,}5$: $\frac{0{,}5}{1{,}5} \approx 0{,}333 < \ln 1{,}5 \approx 0{,}405 < 0{,}5$. Die Ungleichung stimmt.
```

## Folgerungen aus dem Mittelwertsatz: Konstanz, Monotonie, Ungleichungen

```aufgabe
id: db-check-monoton
titel: Was heißt streng monoton wachsend?
niveau: 1
art: check
angabe: |
  Eine Funktion $f$ heißt auf einem Intervall **streng monoton wachsend**, wenn …
  Herkunft: [Kapitel 9, „Monotonie und Extremstellen“](/lernen/mathe3/differentialrechnung/monotonie-und-extremstellen).
teile:
  - typ: auswahl
    optionen:
      - '… für alle $x_1 < x_2$ aus dem Intervall $f(x_1) < f(x_2)$ gilt.'
      - '… $f''(x) > 0$ für alle $x$ aus dem Intervall gilt.'
      - '… für alle $x_1 < x_2$ aus dem Intervall $f(x_1) \le f(x_2)$ gilt.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Das ist ein **Kriterium**, mit dem man Monotonie oft nachweist, aber nicht die Definition. Die Definition
          vergleicht nur Funktionswerte, ganz ohne Ableitung.
      - wert: 2
        meldung: 'Mit $\le$ heißt $f$ monoton wachsend. „Streng“ verlangt das echte Kleinerzeichen $<$.'
hinweise:
  - 'Die Definition vergleicht zwei Funktionswerte miteinander.'
loesung: |
  Streng monoton wachsend heißt: Ein größeres $x$ liefert immer einen echt größeren Funktionswert.
  ---
  Formal: $x_1 < x_2$ hat $f(x_1) < f(x_2)$ zur Folge. Die Ableitung kommt in der Definition nicht vor. Dass $f' > 0$ reicht, beweisen wir in dieser Lektion.
```

**Worum geht es in einem Satz?** Mit dem Mittelwertsatz beweisen wir drei Werkzeuge, die du aus Kapitel 9 schon
kennst. Ableitung null heißt konstant. Positive Ableitung heißt wachsend. Und mit Monotonie kann man Ungleichungen
beweisen.

Der Trick ist jedes Mal derselbe. Für zwei Stellen $x_1 < x_2$ liefert der Mittelwertsatz ein $\xi$ dazwischen mit
$$f(x_2) - f(x_1) = f'(\xi)\,(x_2 - x_1).$$
Aus dem Vorzeichen der Ableitung folgt das Vorzeichen der Differenz. Wichtig: Dafür muss das ganze Stück $[x_1, x_2]$ im
Definitionsbereich liegen. Deshalb verlangen alle Sätze dieser Lektion ein **Intervall**.

### Funktionen mit Ableitung null

:::satz[Konstanzkriterium]
Ist $f$ auf einem **Intervall** $I$ differenzierbar und gilt $f'(x) = 0$ für alle $x \in I$, so ist $f$ auf $I$ konstant.
:::

:::beweis
Es seien $x_1 < x_2$ zwei beliebige Stellen aus $I$. Weil $I$ ein Intervall ist, liegt $[x_1, x_2]$ ganz in $I$. Dort ist
$f$ differenzierbar und damit auch stetig. Der Mittelwertsatz liefert ein $\xi$ mit
$$f(x_2) - f(x_1) = f'(\xi)\,(x_2 - x_1) = 0\cdot(x_2 - x_1) = 0 .$$
Also ist $f(x_1) = f(x_2)$ für alle Paare von Stellen, und $f$ ist konstant.
:::

Daraus folgt sofort: Haben $f$ und $g$ auf einem Intervall dieselbe Ableitung, so ist $(f - g)' = 0$, also
$f - g$ konstant. Die beiden Funktionen unterscheiden sich nur um eine Konstante: $f = g + C$. Das ist die Grundlage
der Integralrechnung aus [Kapitel 10](/lernen/mathe3/integralrechnung/stammfunktionen-ableiten-rueckwaerts): Zwei
Stammfunktionen derselben Funktion unterscheiden sich nur um eine Konstante. Deshalb schreibt man „$+\,C$“.

:::beispiel[Eine Identität mit dem Konstanzkriterium beweisen]
Wir zeigen: $\sin^2 x + \cos^2 x = 1$ für alle $x$.

1. **Hilfsfunktion:** $f(x) = \sin^2 x + \cos^2 x$.
2. **Ableiten** mit der Kettenregel: $f'(x) = 2\sin x\cos x + 2\cos x\cdot(-\sin x) = 0$.
3. **Konstanz:** $f' = 0$ auf dem Intervall $\R$, also ist $f$ konstant.
4. **Wert bestimmen:** $f(0) = 0^2 + 1^2 = 1$. Also ist $f(x) = 1$ für alle $x$.
:::

:::beispiel[Arcustangens: Konstanz nur stückweise]
Für $x \ne 0$ sei $f(x) = \arctan x + \arctan\frac1x$.

1. **Ableiten** mit $(\arctan y)' = \frac{1}{1 + y^2}$ und der Kettenregel:
   $f'(x) = \frac{1}{1 + x^2} + \frac{1}{1 + \frac{1}{x^2}}\cdot\left(-\frac{1}{x^2}\right) = \frac{1}{1 + x^2} - \frac{1}{x^2 + 1} = 0$.
2. **Konstanz auf jedem Intervall:** Der Definitionsbereich $\R\setminus\{0\}$ besteht aus zwei Intervallen. Auf jedem
   ist $f$ konstant, aber die Konstanten dürfen verschieden sein.
3. **Werte:** $f(1) = \frac\pi4 + \frac\pi4 = \frac\pi2$ und $f(-1) = -\frac\pi4 - \frac\pi4 = -\frac\pi2$.

Also ist $f(x) = \frac\pi2$ für $x > 0$ und $f(x) = -\frac\pi2$ für $x < 0$. Probe mit dem Taschenrechner im Bogenmaß:
$\arctan 2 + \arctan 0{,}5 \approx 1{,}1071 + 0{,}4636 = 1{,}5707$, und $\frac\pi2 \approx 1{,}5708$. Die letzte Stelle
weicht nur durch Rundung ab.
:::

:::achtung[Konstanz über eine Lücke hinweg]
**Falsch:** „$f(x) = 1$ für $x > 0$ und $f(x) = -1$ für $x < 0$ hat überall die Ableitung $0$. Also ist $f$ konstant.“

**Richtig:** Der Definitionsbereich $\R\setminus\{0\}$ ist kein Intervall. Für $x_1 = -1$ und $x_2 = 1$ liegt die Lücke
bei $0$ dazwischen, und der Mittelwertsatz lässt sich nicht anwenden. $f$ ist nur auf $(-\infty, 0)$ und auf
$(0, \infty)$ jeweils konstant, mit verschiedenen Werten.
:::

### Das Monotoniekriterium

:::satz[Monotoniekriterium]
Es sei $f$ auf einem Intervall $I$ stetig und im Inneren von $I$ differenzierbar.
- Ist $f'(x) \ge 0$ für alle inneren $x$, so ist $f$ auf $I$ monoton wachsend.
- Ist $f'(x) > 0$ für alle inneren $x$, so ist $f$ auf $I$ **streng** monoton wachsend.

Entsprechend folgt aus $f' \le 0$ beziehungsweise $f' < 0$, dass $f$ monoton fallend beziehungsweise streng monoton fallend ist.
:::

:::beweis
Für $x_1 < x_2$ in $I$ liefert der Mittelwertsatz ein $\xi \in (x_1, x_2)$ mit $f(x_2) - f(x_1) = f'(\xi)\,(x_2 - x_1)$.
Der Faktor $x_2 - x_1$ ist positiv. Ist $f'(\xi) > 0$, so ist das Produkt positiv, also $f(x_2) > f(x_1)$. Ist
$f'(\xi) \ge 0$, so ist es mindestens $0$, also $f(x_2) \ge f(x_1)$.
:::

```aufgabe
id: db-check-x3
titel: Ist x³ streng monoton?
niveau: 1
art: check
angabe: |
  Die Funktion $f(x) = x^3$ hat bei $0$ die Ableitung $f'(0) = 0$. Ist $f$ auf ganz $\R$ streng monoton wachsend?
teile:
  - typ: auswahl
    optionen:
      - 'ja'
      - 'nein, wegen $f''(0) = 0$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Prüfe die Definition: Aus $x_1 < x_2$ folgt $x_1^3 < x_2^3$, auch wenn $0$ zwischen den Stellen liegt. Eine einzelne Nullstelle der Ableitung stört nicht.'
hinweise:
  - 'Vergleiche zum Beispiel $f(-0{,}1)$, $f(0)$ und $f(0{,}1)$.'
loesung: |
  $f(-0{,}1) = -0{,}001 < 0 = f(0) < 0{,}001 = f(0{,}1)$. Allgemein folgt aus $x_1 < x_2$ immer $x_1^3 < x_2^3$.
  ---
  Also ist $x^3$ streng monoton wachsend, obwohl $f'(0) = 0$. Das Kriterium $f' > 0$ ist hinreichend, aber nicht notwendig.
```

Es gibt eine teilweise Umkehrung. Ist $f$ differenzierbar und monoton wachsend, so sind alle Differenzenquotienten
$\ge 0$, also auch ihr Grenzwert: $f'(x) \ge 0$. Aus „streng wachsend“ folgt aber nur $f' \ge 0$, nicht $f' > 0$. Das
zeigt $x^3$. Die Bedingung $f' > 0$ ist also **hinreichend**, aber nicht **notwendig**. Hinreichend heißt: Sie reicht
aus, um auf Monotonie zu schließen. Notwendig hieße: Ohne sie geht es nicht.

:::achtung[Monotonie über eine Polstelle hinweg]
**Falsch:** „$f(x) = \frac1x$ hat $f'(x) = -\frac{1}{x^2} < 0$ für alle $x \ne 0$. Also ist $f$ auf $\R\setminus\{0\}$
streng monoton fallend.“

**Richtig:** Es ist $-1 < 1$, aber $f(-1) = -1 < 1 = f(1)$. Das ist kein Fallen. Der Definitionsbereich ist kein
Intervall. $f$ ist auf $(-\infty, 0)$ und auf $(0, \infty)$ jeweils für sich streng fallend, aber nicht über den Pol
hinweg.
:::

### Ungleichungen beweisen

Das Monotoniekriterium ist ein starkes Werkzeug für Ungleichungen. Die Idee: Man bildet die Differenz beider Seiten und
zeigt, dass sie an einer Stelle den Wert $0$ hat und von dort aus nur wachsen kann.

:::beispiel[Die e-Funktion liegt über ihrer Tangente]
Behauptung: $e^x \ge 1 + x$ für alle $x$.

1. **Differenz:** $g(x) = e^x - 1 - x$. Zu zeigen ist $g(x) \ge 0$.
2. **Ableitung:** $g'(x) = e^x - 1$. Für $x < 0$ ist $e^x < 1$, also $g' < 0$. Für $x > 0$ ist $g' > 0$.
3. **Monotonie:** $g$ fällt auf $(-\infty, 0]$ und wächst auf $[0, \infty)$. Also hat $g$ bei $0$ seinen kleinsten
   Wert, nämlich $g(0) = 1 - 1 - 0 = 0$.
4. **Schluss:** $g(x) \ge 0$, also $e^x \ge 1 + x$. Gleichheit gilt nur bei $x = 0$.

Probe mit $x = 1$: $e \approx 2{,}718 \ge 2$. Geometrisch liegt die e-Funktion überall über ihrer Tangente $y = 1 + x$
an der Stelle $0$.
:::

```plot
x: [-2.5, 2]
y: [-1.5, 5]
graphen:
  - { f: "exp(x)", label: "eˣ", farbe: 0 }
  - { f: "1 + x", label: "Tangente y = 1 + x", farbe: 1, gestrichelt: true }
punkte:
  - { x: 0, y: 1, label: "Berührpunkt (0 | 1)" }
beschriftung: Die e-Funktion liegt überall über ihrer Tangente y = 1 + x an der Stelle 0 und berührt sie nur dort. Das ist die Ungleichung eˣ ≥ 1 + x.
```

```reflexion
frage: Warum braucht man beim Monotoniekriterium den Mittelwertsatz? Reicht es nicht, dass jede Tangente nach oben zeigt?
antwort: |
  Die Ableitung an einer Stelle sagt nur etwas über das Verhalten **ganz nahe** bei dieser Stelle. Monotonie ist dagegen
  eine Aussage über **zwei beliebige** Stellen, die weit auseinanderliegen können. Der Mittelwertsatz schlägt die Brücke:
  Er verwandelt die Differenz $f(x_2) - f(x_1)$ in eine Ableitung an einer Zwischenstelle. Ohne ihn hätte man keinen
  sauberen Weg vom Lokalen zum Globalen. Das Beispiel $\frac1x$ zeigt, dass das auch wirklich schiefgehen kann, sobald
  das Intervall fehlt.
```

### Übungen

```aufgabe
id: db-konstant-stamm
titel: Eine Funktion aus ihrer Ableitung
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Die Funktion $f$ ist auf $\R$ differenzierbar mit $f'(x) = 3x^2$ für alle $x$, und es ist $f(2) = 5$. Bestimme $f(x)$.
teile:
  - typ: term
    label: '$f(x)$'
    loesung: "x^3 - 3"
    fehler:
      - wert: "x^3"
        meldung: 'Auch $x^3 + C$ hat die Ableitung $3x^2$. Die Konstante $C$ bestimmst du aus $f(2) = 5$.'
      - wert: "x^3 + 5"
        meldung: 'Probe: $2^3 + 5 = 13 \ne 5$. Die Bedingung lautet $8 + C = 5$.'
hinweise:
  - '$g(x) = x^3$ hat dieselbe Ableitung. Nach dem Konstanzkriterium ist $f = g + C$.'
loesung: |
  Ansatz: $g(x) = x^3$ hat $g' = 3x^2 = f'$ auf dem Intervall $\R$. Nach dem Konstanzkriterium ist $f - g$ konstant, also $f(x) = x^3 + C$.
  ---
  $f(2) = 8 + C = 5$ ergibt $C = -3$. Also $f(x) = x^3 - 3$. Eine andere Lösung gibt es nicht, weil $\R$ ein Intervall ist.
```

```aufgabe
id: db-x3-monoton
titel: Aussagen über Monotonie
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  Welche Aussagen sind richtig? Kreuze alle an.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - 'Ist $f^{\prime}(x) > 0$ auf einem Intervall, so ist $f$ dort streng monoton wachsend.'
      - 'Ist $f$ streng monoton wachsend und differenzierbar, so ist $f^{\prime}(x) > 0$ für alle $x$.'
      - '$f(x) = x^3$ ist auf $\R$ streng monoton wachsend.'
      - '$f(x) = -\frac1x$ ist auf $\R\setminus\{0\}$ streng monoton wachsend.'
    richtig: [0, 2]
    fehler:
      - wert: [0, 1, 2]
        meldung: 'Aussage 2 ist falsch: $x^3$ ist streng wachsend, hat aber $f^{\prime}(0) = 0$.'
      - wert: [0, 2, 3]
        meldung: 'Aussage 4 ist falsch: $f(-1) = 1$ und $f(1) = -1$. Über die Lücke bei $0$ hinweg wächst $f$ nicht.'
      - wert: [0]
        meldung: 'Aussage 3 stimmt: Aus $x_1 < x_2$ folgt $x_1^3 < x_2^3$.'
hinweise:
  - 'Prüfe jede Aussage an $x^3$ und an der Lücke bei $0$.'
loesung: |
  Ansatz: Jede Aussage einzeln mit dem Monotoniekriterium und mit Gegenbeispielen prüfen.
  ---
  (1) richtig: Monotoniekriterium über den Mittelwertsatz. (2) falsch: $x^3$ ist streng wachsend, aber $f'(0) = 0$. Man kann nur $f' \ge 0$ folgern.
  ---
  (3) richtig: Aus $x_1 < x_2$ folgt $x_1^3 < x_2^3$. (4) falsch: Zwar ist $f'(x) = \frac{1}{x^2} > 0$, aber $f(-1) = 1 > -1 = f(1)$. $\R\setminus\{0\}$ ist kein Intervall.
```

```aufgabe
id: db-monotonie-intervalle
titel: Monotoniebereiche bestimmen
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Gegeben ist $f(x) = x^3 - 12x$.

  a) An welchen Stellen wechselt das Monotonieverhalten?

  b) Auf welchem Intervall ist $f$ streng monoton fallend?
teile:
  - typ: menge
    label: 'a) Stellen'
    loesung: ["-2", "2"]
    fehler:
      - wert: ["2"]
        meldung: '$x^2 = 4$ hat zwei Lösungen: $2$ und $-2$.'
      - wert: ["-sqrt(12)", "0", "sqrt(12)"]
        meldung: 'Das sind die Nullstellen von $f$. Das Monotonieverhalten hängt aber vom Vorzeichen von $f''$ ab.'
  - typ: auswahl
    label: 'b) fallend auf'
    optionen: ['$[-2, 2]$', '$(-\infty, -2]$', '$[2, \infty)$', '$\R$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Teste $x = -3$: $f''(-3) = 27 - 12 = 15 > 0$. Dort wächst $f$.'
      - wert: 2
        meldung: 'Teste $x = 3$: $f''(3) = 15 > 0$. Dort wächst $f$.'
      - wert: 3
        meldung: 'Für große $|x|$ ist $f''(x) = 3x^2 - 12$ positiv. $f$ fällt nicht überall.'
hinweise:
  - "$f'(x) = 3x^2 - 12$. Wo ist das null, wo positiv, wo negativ?"
  - 'Teste das Vorzeichen von $f''$ zum Beispiel bei $x = 0$ und $x = 3$.'
gefuehrt:
  - text: 'Bilde die Ableitung $f''(x)$.'
    teil:
      typ: term
      loesung: "3*x^2 - 12"
      fehler:
        - wert: "3*x^2"
          meldung: 'Der Summand $-12x$ hat die Ableitung $-12$. Sie darf nicht fehlen.'
    erklaerung: '$f''(x) = 3x^2 - 12 = 3(x^2 - 4) = 3(x - 2)(x + 2)$.'
  - text: 'Berechne $f''(0)$.'
    teil:
      typ: zahl
      loesung: "-12"
    erklaerung: '$f''(0) = -12 < 0$. Zwischen $-2$ und $2$ fällt $f$ also.'
  - text: 'Berechne $f''(3)$.'
    teil:
      typ: zahl
      loesung: "15"
    erklaerung: '$f''(3) = 27 - 12 = 15 > 0$. Rechts von $2$ wächst $f$, und wegen der Symmetrie von $3x^2 - 12$ ebenso links von $-2$.'
  - text: 'Fasse zusammen: Wo wechselt das Monotonieverhalten?'
    erklaerung: 'Bei $x = -2$ (von wachsend zu fallend) und bei $x = 2$ (von fallend zu wachsend).'
loesung: |
  Ansatz: Monotoniekriterium, also das Vorzeichen von $f'(x) = 3x^2 - 12 = 3(x - 2)(x + 2)$ untersuchen.
  ---
  a) $f' = 0$ bei $x = \pm 2$. Für $|x| > 2$ ist $f' > 0$, für $|x| < 2$ ist $f' < 0$. Das Monotonieverhalten wechselt bei $-2$ und $2$.
  ---
  b) Auf $[-2, 2]$ ist $f' \le 0$ und nur an den Rändern $0$. Also ist $f$ dort streng monoton fallend. Probe: $f(-2) = 16 > -16 = f(2)$.
```

```aufgabe
id: db-monoton-intervall
titel: Warum das Intervall zählt
niveau: 2
lernziel: 6
kompetenz: begruenden
angabe: |
  Die Funktion $f(x) = \frac{2}{x}$ hat auf $\R\setminus\{0\}$ die Ableitung $f'(x) = -\frac{2}{x^2} < 0$. Jemand
  folgert: „$f$ ist auf $\R\setminus\{0\}$ streng monoton fallend.“

  a) Berechne $f(-2)$ und $f(2)$.

  b) Widerlege die Aussage und erkläre, welche Voraussetzung des Monotoniekriteriums verletzt ist.
teile:
  - typ: zahl
    label: 'a) $f(-2)$'
    loesung: "2/(-2)"
    anzeige: '-1'
    fehler:
      - wert: "1"
        meldung: 'Eine positive Zahl durch eine negative ergibt eine negative Zahl.'
  - typ: zahl
    label: 'a) $f(2)$'
    loesung: "2/2"
    anzeige: '1'
    fehler:
      - wert: "-1"
        meldung: '$f(2) = \frac{2}{2} = 1$. Das Minuszeichen gehört nur zu $f(-2)$.'
  - typ: text
    label: 'b) Begründung'
    muster: |
      Es ist $-2 < 2$, aber $f(-2) = -1 < 1 = f(2)$, also fällt $f$ hier nicht. Das Monotoniekriterium setzt ein
      Intervall voraus, weil es den Mittelwertsatz auf $[x_1, x_2]$ anwendet. $\R\setminus\{0\}$ ist kein Intervall,
      und auf $[-2, 2]$ ist $f$ bei $0$ nicht definiert. Richtig ist: $f$ ist auf $(-\infty, 0)$ und auf $(0, \infty)$
      jeweils streng fallend.
hinweise:
  - 'Vergleiche $f(-2)$ und $f(2)$. Was müsste für „fallend“ gelten?'
  - 'Der Beweis des Kriteriums wendet den Mittelwertsatz auf $[x_1, x_2]$ an. Ist das hier möglich?'
loesung: |
  Ansatz: Ein einziges Gegenbeispiel widerlegt eine Allaussage. Wir vergleichen zwei Stellen auf verschiedenen Seiten des Pols.
  ---
  a) $f(-2) = -1$ und $f(2) = 1$. Für $-2 < 2$ ist $f(-2) < f(2)$, also kein Fallen.
  ---
  b) Der Beweis des Monotoniekriteriums wendet den Mittelwertsatz auf $[-2, 2]$ an. Dort ist $f$ bei $0$ nicht definiert, also nicht stetig. Korrekt: streng fallend auf $(-\infty, 0)$ und auf $(0, \infty)$, jeweils einzeln.
```

```aufgabe
id: db-konstant-arcus
titel: Arcussinus plus Arcuskosinus
niveau: 2
lernziel: 6
kompetenz: begruenden
angabe: |
  Für $-1 < x < 1$ gilt $(\arcsin x)' = \frac{1}{\sqrt{1 - x^2}}$ und $(\arccos x)' = -\frac{1}{\sqrt{1 - x^2}}$.
  Zeige, dass $f(x) = \arcsin x + \arccos x$ auf $(-1, 1)$ konstant ist, und bestimme den Wert der Konstante.
teile:
  - typ: zahl
    label: 'Wert von $f$'
    loesung: "pi/2"
    anzeige: '\tfrac{\pi}{2} \approx 1{,}5708'
    fehler:
      - wert: "0"
        meldung: 'Die **Ableitung** ist $0$. Der Funktionswert selbst ist $f(0) = \arcsin 0 + \arccos 0$.'
      - wert: "90"
        meldung: 'Die Arcusfunktionen liefern Winkel im **Bogenmaß**. $90°$ entsprechen $\frac\pi2$.'
hinweise:
  - "Berechne $f'(x)$. Was sagt das Konstanzkriterium?"
  - 'Den Wert der Konstante liefert eine bequeme Stelle, etwa $x = 0$: $\arcsin 0 = 0$ und $\arccos 0 = \frac\pi2$.'
loesung: |
  Ansatz: Konstanzkriterium, weil eine verschwindende Ableitung auf einem Intervall Konstanz erzwingt.
  ---
  $f'(x) = \frac{1}{\sqrt{1 - x^2}} - \frac{1}{\sqrt{1 - x^2}} = 0$ auf dem Intervall $(-1, 1)$. Also ist $f$ dort konstant.
  ---
  Wert: $f(0) = 0 + \frac\pi2 = \frac\pi2$. Probe mit $x = 0{,}5$: $\arcsin 0{,}5 + \arccos 0{,}5 = \frac\pi6 + \frac\pi3 = \frac\pi2$.
```

```aufgabe
id: db-ungleichung-ln
titel: Eine Ungleichung beweisen
niveau: 3
lernziel: 6
kompetenz: begruenden
angabe: |
  Zeige mit Differentialrechnung: Für alle $x > 0$ gilt $\ln x \le x - 1$. Wann gilt Gleichheit?
teile:
  - typ: zahl
    label: 'Gleichheit bei $x =$'
    loesung: "1"
    fehler:
      - wert: "0"
        meldung: '$\ln 0$ ist nicht definiert. Probiere $x = 1$: $\ln 1 = 0 = 1 - 1$.'
  - typ: text
    label: 'Beweis'
    muster: |
      $g(x) = x - 1 - \ln x$ auf $(0, \infty)$, $g'(x) = 1 - \frac1x$. Für $0 < x < 1$ ist $g' < 0$, für $x > 1$ ist $g' > 0$.
      Also fällt $g$ auf $(0, 1]$ und wächst auf $[1, \infty)$, mit kleinstem Wert $g(1) = 0$. Daher $g(x) \ge 0$, also
      $\ln x \le x - 1$, mit Gleichheit nur bei $x = 1$.
hinweise:
  - 'Betrachte die Differenz $g(x) = x - 1 - \ln x$ und suche ihren kleinsten Wert.'
  - "$g'(x) = 1 - \\frac1x = \\frac{x - 1}{x}$. Bestimme das Vorzeichen links und rechts von $1$."
loesung: |
  Ansatz: Ungleichung über die Differenz beider Seiten beweisen, wie im Beispiel $e^x \ge 1 + x$. Hilfsfunktion $g(x) = x - 1 - \ln x$ für $x > 0$, mit $g'(x) = 1 - \frac{1}{x} = \frac{x - 1}{x}$.
  ---
  Vorzeichen: $g' < 0$ auf $(0, 1)$ und $g' > 0$ auf $(1, \infty)$. Nach dem Monotoniekriterium fällt $g$ bis $1$ und wächst danach.
  ---
  Kleinster Wert bei $x = 1$: $g(1) = 0$. Also $g(x) \ge 0$ für alle $x > 0$, das heißt $\ln x \le x - 1$, Gleichheit genau für $x = 1$. Geometrisch liegt der Logarithmus unter seiner Tangente bei $1$.
```

```aufgabe
id: db-ungleichung-sin
titel: Der Sinus bleibt unter der Winkelhalbierenden
niveau: 3
lernziel: 6
kompetenz: begruenden
angabe: |
  Zeige: Für alle $x > 0$ gilt $\sin x < x$. Berechne zur Kontrolle die Differenz $x - \sin x$ für $x = 0{,}5$ auf vier Nachkommastellen (Bogenmaß).
teile:
  - typ: zahl
    label: '$0{,}5 - \sin 0{,}5$'
    loesung: "0.5 - sin(0.5)"
    anzeige: '0{,}0206'
    fehler:
      - wert: "0.5 - sin(inRad(0.5))"
        meldung: 'Der Taschenrechner stand auf DEG. Hier ist $x = 0{,}5$ im **Bogenmaß** gemeint.'
  - typ: text
    label: 'Beweis'
    muster: |
      $g(x) = x - \sin x$, $g'(x) = 1 - \cos x \ge 0$, und $g' = 0$ nur an einzelnen Stellen $x = 2k\pi$. Also ist $g$
      auf $[0, \infty)$ streng monoton wachsend. Mit $g(0) = 0$ folgt $g(x) > 0$ für $x > 0$, also $\sin x < x$.
hinweise:
  - 'Untersuche $g(x) = x - \sin x$ mit $g(0) = 0$.'
  - '$g''(x) = 1 - \cos x$ ist nie negativ. Es ist nur an einzelnen Stellen null. Was folgt daraus für die Monotonie auf $[0, \infty)$?'
loesung: |
  Ansatz: Differenz beider Seiten bilden und zeigen, dass sie bei $0$ startet und danach wächst. $g(x) = x - \sin x$, $g(0) = 0$.
  ---
  $g'(x) = 1 - \cos x \ge 0$, weil $\cos x \le 1$. Null ist $g'$ nur an einzelnen Stellen $x = 2\pi, 4\pi, \dots$. Auf jedem Stück dazwischen ist $g' > 0$, also wächst $g$ dort streng, und damit wächst $g$ auf ganz $[0, \infty)$ streng.
  ---
  Also $g(x) > g(0) = 0$ für $x > 0$, das heißt $\sin x < x$. Kontrolle: $0{,}5 - \sin 0{,}5 \approx 0{,}5 - 0{,}4794 = 0{,}0206 > 0$.
```

## Extremstellen und Krümmung exakt begründen

```aufgabe
id: db-check-extremstelle
titel: Eine Extremstelle aus Kapitel 9
niveau: 1
art: check
angabe: |
  An welcher Stelle hat $f(x) = x^2 - 4x + 1$ ihren Tiefpunkt?
  Herkunft: [Kapitel 9, „Monotonie und Extremstellen“](/lernen/mathe3/differentialrechnung/monotonie-und-extremstellen).
teile:
  - typ: zahl
    label: '$x =$'
    loesung: "2"
    fehler:
      - wert: "-3"
        meldung: '$-3 = f(2)$ ist der Funktionswert, also die $y$-Koordinate des Tiefpunkts. Gefragt ist die Stelle $x$.'
      - wert: "4"
        meldung: 'Die Ableitung ist $2x - 4$. Sie wird null bei $x = 2$.'
hinweise:
  - "Setze $f'(x) = 2x - 4$ gleich $0$."
loesung: |
  $f'(x) = 2x - 4 = 0$ ergibt $x = 2$.
  ---
  Weil $f''(x) = 2 > 0$, liegt ein Tiefpunkt vor. Er hat die Koordinaten $(2 \mid -3)$.
```

**Worum geht es in einem Satz?** Die Kriterien für Hoch-, Tief- und Wendepunkte aus Kapitel 9 werden hier exakt
begründet, und wir sehen genau, wo ihre Grenzen liegen.

In Kapitel 9 hast du gelernt: Extremstellen findet man mit $f'(x) = 0$, und das Vorzeichen von $f''$ entscheidet über
Hoch- oder Tiefpunkt. Das stimmt meistens. In der mündlichen Prüfung wird aber gern nach den Ausnahmen gefragt: „Ist
$f' = 0$ notwendig oder hinreichend?“ Auf diese Frage gibt diese Lektion eine vollständige Antwort.

### Was ist ein Extremum genau?

:::definition[Lokale und globale Extrema]
$f$ hat an der Stelle $x_0$ ein **lokales Maximum**, wenn es eine Umgebung $U$ von $x_0$ gibt, in der kein
Funktionswert größer ist. Genauer: Für alle $x$ aus $U$ im Definitionsbereich gilt $f(x) \le f(x_0)$. Eine **Umgebung** ist ein kleines offenes Intervall
um $x_0$, etwa $(x_0 - 0{,}1;\ x_0 + 0{,}1)$.

Ein **globales Maximum** liegt vor, wenn $f(x) \le f(x_0)$ für **alle** $x$ des Definitionsbereichs gilt. Für ein
Minimum dreht man die Ungleichung um. Maximum und Minimum heißen zusammen **Extremum**.
:::

**Beispiel:** $f(x) = x^3 - 12x$ hat bei $x = -2$ ein lokales Maximum mit $f(-2) = -8 + 24 = 16$. Es ist aber **nicht**
global, denn $f(5) = 125 - 60 = 65 > 16$. **Nichtbeispiel:** $g(x) = x$ hat auf $\R$ kein Extremum, weder lokal noch global. Zu jeder Stelle
gibt es rechts davon größere und links kleinere Werte.

```aufgabe
id: db-check-lokal-global
titel: Lokal oder global?
niveau: 1
art: check
angabe: |
  Die Funktion $f(x) = \cos x$ hat bei $x = 0$ den Wert $1$. Welche Art von Extremum liegt dort vor?
teile:
  - typ: auswahl
    optionen:
      - 'ein lokales und zugleich globales Maximum'
      - 'nur ein lokales Maximum'
      - 'ein globales Minimum'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Der Kosinus ist nie größer als $1$. Also ist $f(0) = 1$ sogar der größte Wert auf ganz $\R$.'
      - wert: 2
        meldung: '$1$ ist der **größte** Wert des Kosinus, nicht der kleinste.'
hinweise:
  - 'Welche Werte kann $\cos x$ überhaupt annehmen?'
loesung: |
  Für alle $x$ gilt $\cos x \le 1 = \cos 0$. Also ist $f(0)$ ein globales Maximum.
  ---
  Jedes globale Maximum ist auch ein lokales. Übrigens wird es auch bei $\pm 2\pi, \pm 4\pi, \dots$ angenommen.
```

### Die drei Kriterien

:::satz[Extremwertkriterien]
Es sei $f$ in einer Umgebung der inneren Stelle $x_0$ differenzierbar.
1. **Notwendig (Fermat):** Hat $f$ in $x_0$ ein lokales Extremum, dann ist $f'(x_0) = 0$.
2. **Hinreichend (Vorzeichenwechsel):** Ist $f'(x_0) = 0$ und wechselt $f'$ bei $x_0$ das Vorzeichen von $+$ nach $-$,
   so liegt ein lokales Maximum vor. Bei einem Wechsel von $-$ nach $+$ liegt ein lokales Minimum vor.
3. **Hinreichend (zweite Ableitung):** Ist $f$ zweimal differenzierbar, $f'(x_0) = 0$ und $f''(x_0) < 0$, so liegt ein
   lokales Maximum vor. Bei $f''(x_0) > 0$ liegt ein lokales Minimum vor.
:::

**Notwendig** heißt: Ohne diese Bedingung gibt es kein Extremum. **Hinreichend** heißt: Wenn die Bedingung erfüllt ist,
gibt es sicher eines. Punkt 1 wurde in [13.7 Satz von Rolle und Mittelwertsatz](/lernen/mathe3/differenzierbarkeit/satz-von-rolle-und-mittelwertsatz)
als Satz von Fermat bewiesen.

**Begründung von Punkt 2:** Links von $x_0$ ist $f' > 0$. Nach dem Monotoniekriterium steigt $f$ dort bis $x_0$.
Rechts ist $f' < 0$, also fällt $f$ ab $x_0$. Damit ist $f(x_0)$ der größte Wert in der Umgebung.

**Begründung von Punkt 3:** Wegen $f'(x_0) = 0$ ist
$$f''(x_0) = \lim_{x\to x_0}\frac{f'(x) - f'(x_0)}{x - x_0} = \lim_{x\to x_0}\frac{f'(x)}{x - x_0} < 0 .$$
Für $x$ nahe $x_0$ ist der Bruch $\frac{f'(x)}{x - x_0}$ also negativ. Dann hat $f'(x)$ das entgegengesetzte Vorzeichen
von $x - x_0$: links positiv, rechts negativ. Das ist ein Vorzeichenwechsel von $+$ nach $-$, und Punkt 2 liefert ein Maximum.

:::beispiel[Beide Kriterien an einer Funktion]
$f(x) = x^3 - 3x^2$.

1. **Kandidaten:** $f'(x) = 3x^2 - 6x = 3x(x - 2) = 0$ ergibt $x = 0$ und $x = 2$.
2. **Zweite Ableitung:** $f''(x) = 6x - 6$. Es ist $f''(0) = -6 < 0$, also lokales Maximum bei $0$ mit $f(0) = 0$.
   Und $f''(2) = 6 > 0$, also lokales Minimum bei $2$ mit $f(2) = 8 - 12 = -4$.
3. **Kontrolle mit Vorzeichenwechsel:** $f'(-1) = 9 > 0$, $f'(1) = -3 < 0$, $f'(3) = 9 > 0$. Bei $0$ wechselt $f'$ von
   $+$ nach $-$, bei $2$ von $-$ nach $+$. Beide Kriterien stimmen überein.
:::

:::achtung[Waagrechte Tangente, aber kein Extremum]
**Falsch:** „$f(x) = x^3$ hat $f'(0) = 0$. Also hat $f$ bei $0$ ein Extremum.“

**Richtig:** $f'(x_0) = 0$ ist nur **notwendig**, nicht hinreichend. Bei $x^3$ ist $f'(x) = 3x^2 \ge 0$ links und
rechts von $0$. Es gibt keinen Vorzeichenwechsel. Der Punkt $(0 \mid 0)$ ist ein **Sattelpunkt**, auch Terrassenpunkt
genannt: Die Tangente ist waagrecht, aber der Graph steigt durch.
:::

:::achtung[Zweite Ableitung null heißt nicht „kein Extremum“]
**Falsch:** „$f(x) = x^4$ hat $f'(0) = 0$ und $f''(0) = 0$. Also liegt bei $0$ kein Extremum vor.“

**Richtig:** Das $f''$-Kriterium versagt bei $f''(x_0) = 0$, es sagt dann gar nichts. Man nimmt den Vorzeichenwechsel:
$f'(x) = 4x^3$ ist links von $0$ negativ und rechts positiv. Also hat $x^4$ bei $0$ ein Minimum, und zwar sogar ein globales.
:::

```plot
x: [-1.6, 1.6]
y: [-1.5, 2]
graphen:
  - { f: "x^3", label: "x³: f'(0) = 0, kein Extremum", farbe: 0 }
  - { f: "x^4", label: "x⁴: f''(0) = 0, trotzdem Minimum", farbe: 1 }
punkte:
  - { x: 0, y: 0 }
beschriftung: Zwei Funktionen mit waagrechter Tangente bei 0. Die kubische hat dort einen Sattelpunkt, die vierte Potenz ein Minimum, obwohl auch ihre zweite Ableitung bei 0 verschwindet.
```

### Globale Extrema auf einem abgeschlossenen Intervall

Extrema können auch **ohne** waagrechte Tangente auftreten: an Knickstellen wie bei $|x|$ und an den Rändern eines
Intervalls. Die drei Kriterien dieser Lektion gelten nur an **inneren** Stellen, an denen $f$ **differenzierbar** ist.

:::beispiel[Das größte Extremum liegt am Rand]
Gesucht sind das globale Maximum und Minimum von $f(x) = x^3 - 6x^2 + 9x$ auf $[0, 5]$.

1. **Innere Kandidaten:** $f'(x) = 3x^2 - 12x + 9 = 3(x - 1)(x - 3) = 0$ ergibt $x = 1$ und $x = 3$. Beide liegen in $(0, 5)$.
2. **Randkandidaten:** $x = 0$ und $x = 5$. Knickstellen gibt es keine, weil $f$ ein Polynom ist.
3. **Werte vergleichen:** $f(0) = 0$, $f(1) = 1 - 6 + 9 = 4$, $f(3) = 27 - 54 + 27 = 0$, $f(5) = 125 - 150 + 45 = 20$.

Das globale Maximum ist $20$ am **Rand** $x = 5$, obwohl dort $f'(5) = 24 \ne 0$ ist. Das lokale Maximum bei $1$ mit dem
Wert $4$ ist nicht global. Das globale Minimum $0$ wird zweimal angenommen, bei $x = 0$ und bei $x = 3$.
:::

:::merke[Rezept: Globale Extrema auf [a, b]]
Ist $f$ auf $[a, b]$ stetig, gibt es nach dem Satz vom Maximum ein globales Maximum und Minimum. Kandidaten sind:
1. innere Stellen mit $f'(x) = 0$,
2. innere Stellen, an denen $f$ nicht differenzierbar ist,
3. die Randpunkte $a$ und $b$.

Alle Kandidaten einsetzen und die Funktionswerte vergleichen. Der größte Wert ist das globale Maximum, der kleinste das globale Minimum.
:::

### Krümmung exakt (Vertiefung)

In Kapitel 9 heißt ein Graph **linksgekrümmt**, wenn er sich wie eine nach oben offene Schüssel biegt. Die exakte
Fassung dieses Bildes heißt **konvex**: Jede Sehne liegt über dem Graphen. Eine **Sehne** ist die Strecke zwischen zwei
Punkten des Graphen.

:::definition[Konvex und konkav]
$f$ heißt auf einem Intervall $I$ **konvex**, wenn für alle $a, b \in I$ und alle $t$ mit $0 \le t \le 1$ gilt:
$$f\big((1 - t)\,a + t\,b\big) \le (1 - t)\,f(a) + t\,f(b).$$
$f$ heißt **konkav**, wenn $-f$ konvex ist, also wenn jede Sehne unter dem Graphen liegt.
:::

Die Formel liest sich so: Links steht der Funktionswert an einer Stelle zwischen $a$ und $b$. Rechts steht die Höhe
der Sehne über derselben Stelle. Für $t = \frac12$ ist die Stelle die Mitte $\frac{a + b}{2}$.

:::beispiel[Die Normalparabel ist konvex, die Wurzel konkav]
**Beispiel:** $f(x) = x^2$ mit $a = 0$, $b = 2$, $t = \frac12$. Mitte: $x = 1$, Funktionswert $f(1) = 1$. Sehnenhöhe:
$\frac12\cdot 0 + \frac12\cdot 4 = 2$. Es ist $1 \le 2$, der Graph liegt unter der Sehne.

**Nichtbeispiel:** $g(x) = \sqrt x$ mit $a = 0$, $b = 4$, $t = \frac12$. Mitte $x = 2$, Funktionswert
$\sqrt2 \approx 1{,}414$. Sehnenhöhe $\frac12\cdot 0 + \frac12\cdot 2 = 1$. Hier liegt der Graph **über** der Sehne:
$\sqrt x$ ist nicht konvex, sondern konkav.
:::

:::satz[Krümmungskriterium]
Ist $f$ auf einem Intervall zweimal differenzierbar und $f''(x) \ge 0$ für alle $x$, so ist $f$ dort konvex. Bei
$f'' \le 0$ ist $f$ konkav.
:::

**Begründungsidee:** Aus $f'' \ge 0$ folgt mit dem Monotoniekriterium, angewandt auf $f'$, dass die Steigung $f'$
wächst. Für eine Stelle $x$ zwischen $a$ und $b$ liefert der Mittelwertsatz zwei Zwischenstellen: $\xi_1$ zwischen $a$
und $x$ und $\xi_2$ zwischen $x$ und $b$. Wegen $\xi_1 < \xi_2$ ist $f'(\xi_1) \le f'(\xi_2)$. Der Graph steigt also
links von $x$ höchstens so stark wie rechts davon. Genau das heißt, dass er unter der Sehne bleibt.

Ein **Wendepunkt** ist ein Punkt, an dem die Krümmung wechselt, von konvex nach konkav oder umgekehrt. Wie bei den
Extrema ist $f''(x_0) = 0$ nur notwendig. Bei $x^4$ ist $f''(0) = 0$, aber $f''(x) = 12x^2 \ge 0$ auf beiden Seiten.
Die Krümmung wechselt nicht, und $(0 \mid 0)$ ist kein Wendepunkt.

```reflexion
frage: Warum ist $f''(x_0) < 0$ zusammen mit $f'(x_0) = 0$ hinreichend für ein Maximum, aber $f''(x_0) = 0$ lässt die Frage offen?
antwort: |
  $f''(x_0) < 0$ heißt: Die Steigung $f'$ fällt bei $x_0$. Weil sie bei $x_0$ gerade $0$ ist, muss sie links davon positiv
  und rechts davon negativ sein. Das ist ein Vorzeichenwechsel von $+$ nach $-$, also ein Maximum. Bei $f''(x_0) = 0$
  weiß man nur, dass die Steigung an dieser Stelle momentan nicht wächst und nicht fällt. Ob sie links und rechts
  verschiedene Vorzeichen hat, entscheidet erst ein genauerer Blick. Bei $x^3$ hat sie dasselbe Vorzeichen, bei $x^4$
  verschiedene. Deshalb muss man dann den Vorzeichenwechsel von $f'$ direkt prüfen.
```

### Übungen

```aufgabe
id: db-extrem-kandidat
titel: Kandidat und Art des Extremums
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Gegeben ist $f(x) = x^2 - 6x + 5$. Bestimme die Stelle mit waagrechter Tangente und entscheide mit der zweiten Ableitung, welche Art von Extremum vorliegt.
teile:
  - typ: zahl
    label: 'Stelle $x_0$'
    loesung: "3"
    fehler:
      - wert: "-4"
        meldung: '$-4 = f(3)$ ist der Funktionswert. Gesucht ist die Stelle.'
  - typ: auswahl
    label: 'Art'
    optionen: ['lokales Minimum', 'lokales Maximum', 'Sattelpunkt']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$f''''(x) = 2 > 0$. Positive zweite Ableitung bedeutet Linkskrümmung, also ein Minimum.'
      - wert: 2
        meldung: 'Ein Sattelpunkt hätte $f''''(x_0) = 0$. Hier ist $f''''(3) = 2$.'
hinweise:
  - "$f'(x) = 2x - 6$ und $f''(x) = 2$."
loesung: |
  Ansatz: Notwendige Bedingung $f'(x_0) = 0$, dann hinreichende Bedingung mit $f''$. $f'(x) = 2x - 6 = 0$ ergibt $x_0 = 3$.
  ---
  $f''(3) = 2 > 0$, also lokales Minimum. Wert: $f(3) = 9 - 18 + 5 = -4$. Der Tiefpunkt ist $(3 \mid -4)$, der Scheitel der Parabel.
```

```aufgabe
id: db-konvex-auswahl
titel: Welche Funktionen sind konvex?
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  Welche Funktionen sind auf ganz $\R$ konvex? Kreuze alle an.
teile:
  - typ: auswahl
    mehrfach: true
    optionen: ['$x^2$', '$x^3$', '$-x^2$', '$e^x$']
    richtig: [0, 3]
    fehler:
      - wert: [0, 1, 3]
        meldung: '$x^3$ hat $f''''(x) = 6x$, und das ist für $x < 0$ negativ. Links von $0$ ist $x^3$ konkav.'
      - wert: [0]
        meldung: '$e^x$ hat $f''''(x) = e^x > 0$ überall. Sie ist also auf ganz $\R$ konvex.'
      - wert: [0, 2, 3]
        meldung: '$-x^2$ ist eine nach unten offene Parabel mit $f''''= -2 < 0$. Jede Sehne liegt unter dem Graphen, sie ist konkav.'
hinweise:
  - 'Berechne jeweils $f''''(x)$ und prüfe, ob es für alle $x$ mindestens $0$ ist.'
loesung: |
  Ansatz: Krümmungskriterium, also das Vorzeichen der zweiten Ableitung auf ganz $\R$ prüfen.
  ---
  $(x^2)'' = 2 > 0$ und $(e^x)'' = e^x > 0$: konvex. $(x^3)'' = 6x$ wechselt das Vorzeichen: weder konvex noch konkav auf $\R$. $(-x^2)'' = -2$: konkav. Richtig sind $x^2$ und $e^x$.
```

```aufgabe
id: db-extrem-x4
titel: Sattelpunkt oder Extremum?
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Untersuche $f(x) = x^4 - 4x^3$ auf lokale Extrema. Gib alle lokalen Extremstellen und den Funktionswert dort an.
  Was liegt bei $x = 0$ vor?
teile:
  - typ: menge
    label: 'lokale Extremstellen'
    loesung: ["3"]
    fehler:
      - wert: ["0", "3"]
        meldung: 'Bei $0$ ist zwar $f''(0) = 0$, aber $f''$ wechselt dort nicht das Vorzeichen. Prüfe $f''(-1)$ und $f''(1)$.'
  - typ: zahl
    label: '$f(3)$'
    loesung: "3^4 - 4*3^3"
    anzeige: '-27'
    fehler:
      - wert: "27"
        meldung: '$3^4 - 4\cdot 3^3 = 81 - 108$. Das Ergebnis ist negativ.'
  - typ: auswahl
    label: 'Bei $x = 0$ liegt vor:'
    optionen: ['lokales Maximum', 'lokales Minimum', 'Sattelpunkt (kein Extremum)']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: 'Für ein Maximum müsste $f''$ von $+$ nach $-$ wechseln. Hier ist $f''$ links und rechts von $0$ negativ.'
      - wert: 1
        meldung: 'Für ein Minimum müsste $f''$ von $-$ nach $+$ wechseln. Hier ist $f''$ links und rechts von $0$ negativ.'
hinweise:
  - "$f'(x) = 4x^3 - 12x^2 = 4x^2(x - 3)$."
  - "$f''(0) = 0$: Das zweite Kriterium versagt. Untersuche das Vorzeichen von $f'$ links und rechts von $0$."
loesung: |
  Ansatz: Kandidaten aus $f'(x) = 0$, dann je nach Lage das $f''$-Kriterium oder den Vorzeichenwechsel. $f'(x) = 4x^2(x - 3) = 0$ ergibt $x = 0$ oder $x = 3$.
  ---
  $f''(x) = 12x^2 - 24x$. $f''(3) = 108 - 72 = 36 > 0$: lokales Minimum, $f(3) = 81 - 108 = -27$.
  ---
  $f''(0) = 0$, also das Vorzeichen von $f'$ prüfen: $4x^2 \ge 0$ und $x - 3 < 0$ in der Nähe von $0$. $f'$ ist links und rechts von $0$ negativ, es gibt **keinen** Vorzeichenwechsel. Bei $0$ liegt ein Sattelpunkt.
```

```aufgabe
id: db-randextrem
titel: Globale Extrema auf einem Intervall
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Bestimme das globale Maximum und Minimum von $f(x) = x^3 - 3x$ auf $[0, 2]$ und die Stellen, an denen sie angenommen werden.
teile:
  - typ: zahl
    label: 'globales Maximum (Wert)'
    loesung: "2^3 - 3*2"
    anzeige: '2'
    fehler:
      - wert: "0"
        meldung: 'Vergiss die Randpunkte nicht. Berechne $f(2)$.'
  - typ: zahl
    label: 'Stelle des Maximums'
    loesung: "2"
    fehler:
      - wert: "1"
        meldung: 'Bei $1$ liegt das Minimum. Das Maximum liegt am Rand.'
  - typ: zahl
    label: 'globales Minimum (Wert)'
    loesung: "1 - 3"
    anzeige: '-2'
    fehler:
      - wert: "0"
        meldung: '$f(0) = 0$, aber $f(1) = 1 - 3 = -2$ ist kleiner.'
  - typ: zahl
    label: 'Stelle des Minimums'
    loesung: "1"
    fehler:
      - wert: "-1"
        meldung: '$x = -1$ liegt nicht im Intervall $[0, 2]$.'
hinweise:
  - 'Kandidaten: innere Nullstellen von $f^{\prime}$ und die Randpunkte.'
  - "$f'(x) = 3x^2 - 3$ ist null bei $\\pm 1$. Welche dieser Stellen liegt in $(0, 2)$?"
gefuehrt:
  - text: 'Welche Nullstelle von $f''(x) = 3x^2 - 3$ liegt im Inneren von $[0, 2]$?'
    teil:
      typ: zahl
      loesung: "1"
      fehler:
        - wert: "-1"
          meldung: '$-1$ ist zwar eine Nullstelle von $f''$, liegt aber nicht in $[0, 2]$.'
    erklaerung: '$3x^2 = 3$ ergibt $x = \pm 1$. Nur $1$ liegt im Intervall.'
  - text: 'Berechne $f(0)$, $f(1)$ und $f(2)$. Welcher Wert ist der größte?'
    teil:
      typ: zahl
      loesung: "2"
    erklaerung: '$f(0) = 0$, $f(1) = -2$, $f(2) = 8 - 6 = 2$. Der größte Wert ist $2$.'
  - text: 'Welcher Wert ist der kleinste?'
    teil:
      typ: zahl
      loesung: "-2"
    erklaerung: 'Der kleinste ist $-2$ bei $x = 1$.'
loesung: |
  Ansatz: Rezept für globale Extrema, also innere Nullstellen von $f'$ und Randpunkte vergleichen. $f'(x) = 3x^2 - 3 = 0$ ergibt $x = \pm 1$. Im Inneren von $[0, 2]$ liegt nur $x = 1$.
  ---
  Kandidaten: $f(0) = 0$, $f(1) = 1 - 3 = -2$, $f(2) = 8 - 6 = 2$.
  ---
  Globales Maximum $2$ am **Rand** $x = 2$, obwohl dort $f'(2) = 9 \neq 0$ ist. Globales Minimum $-2$ bei $x = 1$.
```

```aufgabe
id: db-extrem-betrag
titel: Ein Extremum an einer Knickstelle
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Bestimme globales Maximum und Minimum von $f(x) = |x^2 - 4|$ auf $[-1, 3]$.
teile:
  - typ: zahl
    label: 'globales Maximum'
    loesung: "abs(3^2 - 4)"
    anzeige: '5'
    fehler:
      - wert: "4"
        meldung: '$4 = f(0)$ ist nur ein lokales Maximum. Der Randpunkt $x = 3$ liefert mehr.'
  - typ: zahl
    label: 'globales Minimum'
    loesung: "0"
    fehler:
      - wert: "3"
        meldung: 'Du hast die Knickstelle $x = 2$ übersehen. Dort ist $f$ nicht differenzierbar, aber $f(2) = 0$.'
  - typ: zahl
    label: 'Stelle des Minimums'
    loesung: "2"
    fehler:
      - wert: "0"
        meldung: 'Bei $0$ hat $f$ ein lokales **Maximum** mit dem Wert $4$.'
hinweise:
  - 'Kandidaten: Nullstellen von $f''$ im Inneren, Knickstellen im Inneren, Randpunkte.'
  - 'Für $-2 < x < 2$ ist $f(x) = 4 - x^2$. Der Knick liegt bei $x = 2$, wo $x^2 - 4 = 0$ ist.'
loesung: |
  Ansatz: Rezept für globale Extrema. Wegen des Betrags gibt es auch eine Knickstelle als Kandidaten.
  ---
  Im Inneren: Für $-1 < x < 2$ ist $f(x) = 4 - x^2$ mit $f'(x) = -2x = 0$ bei $x = 0$. Für $2 < x < 3$ ist $f(x) = x^2 - 4$ mit $f' = 2x \neq 0$. Knickstelle bei $x = 2$.
  ---
  Werte: $f(-1) = 3$, $f(0) = 4$, $f(2) = 0$, $f(3) = 5$.
  ---
  Globales Maximum $5$ am Rand $x = 3$. Globales Minimum $0$ an der Knickstelle $x = 2$. Dort gibt es keine waagrechte Tangente: Das Rezept braucht die Knickstellen als eigene Kandidaten.
```

```aufgabe
id: db-wendepunkt
titel: Wendestellen nachweisen
niveau: 3
lernziel: 6
kompetenz: begruenden
angabe: |
  Gegeben ist $f(x) = x^4 - 6x^2$.

  a) Bestimme alle Wendestellen und begründe, warum dort wirklich ein Krümmungswechsel stattfindet.

  b) Ist $x = 0$ eine Wendestelle von $g(x) = x^4$?
teile:
  - typ: menge
    label: 'a) Wendestellen von $f$'
    loesung: ["-1", "1"]
    fehler:
      - wert: ["-sqrt(3)", "0", "sqrt(3)"]
        meldung: 'Das sind die Nullstellen von $f''$, also Kandidaten für Extrema. Wendestellen sind Nullstellen von $f''''$ mit Vorzeichenwechsel.'
  - typ: auswahl
    label: 'b) $x = 0$ bei $g(x) = x^4$'
    optionen:
      - 'keine Wendestelle, denn $g''''(x) = 12x^2$ wechselt bei $0$ das Vorzeichen nicht'
      - 'eine Wendestelle, denn $g''''(0) = 0$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$g''''(0) = 0$ ist nur notwendig. Für einen Wendepunkt muss die Krümmung wechseln. Aber $12x^2 \ge 0$ links und rechts.'
hinweise:
  - "$f''(x) = 12x^2 - 12 = 12(x - 1)(x + 1)$."
  - 'Prüfe das Vorzeichen von $f''''$ links, zwischen und rechts der Nullstellen, zum Beispiel bei $-2$, $0$ und $2$.'
loesung: |
  Ansatz: Wendestelle heißt Krümmungswechsel, also Vorzeichenwechsel von $f''$. $f'(x) = 4x^3 - 12x$ und $f''(x) = 12x^2 - 12$.
  ---
  $f''(x) = 12(x - 1)(x + 1) = 0$ ergibt $x = \pm 1$. Vorzeichen: $f''(-2) = 36 > 0$, $f''(0) = -12 < 0$, $f''(2) = 36 > 0$.
  ---
  Bei $-1$ wechselt $f''$ von $+$ nach $-$, bei $1$ von $-$ nach $+$. Beide sind also Wendestellen. Die Wendepunkte sind $(\pm 1 \mid -5)$.
  ---
  b) $g''(x) = 12x^2$ ist bei $0$ null, aber links und rechts positiv. Kein Krümmungswechsel, also keine Wendestelle. $g$ ist auf ganz $\R$ konvex.
```

```aufgabe
id: db-extrem-parameter
titel: Wann gibt es keine Extremstellen?
niveau: 3
lernziel: 6
kompetenz: begruenden
angabe: |
  Für welche Werte des Parameters $a$ hat $f(x) = x^3 + a x^2 + 3x$ **keine** lokalen Extremstellen? Gib die größte
  solche Zahl $a$ an und begründe, warum auch dieser Grenzfall dazugehört.
teile:
  - typ: zahl
    label: 'größtes $a$'
    loesung: "3"
    fehler:
      - wert: "9"
        meldung: 'Die Bedingung lautet $4a^2 - 36 \le 0$, also $a^2 \le 9$ und $|a| \le 3$. Gesucht ist $a$, nicht $a^2$.'
  - typ: text
    label: 'Begründung'
    muster: |
      $f'(x) = 3x^2 + 2ax + 3$. Lokale Extrema brauchen einen Vorzeichenwechsel von $f'$. Ist die Diskriminante
      $4a^2 - 36 < 0$, hat $f'$ keine Nullstelle und ist immer positiv. Bei $a = \pm 3$ ist $f'(x) = 3(x \pm 1)^2 \ge 0$
      mit einer doppelten Nullstelle, aber ohne Vorzeichenwechsel: ein Sattelpunkt, kein Extremum. Also keine Extrema
      genau für $-3 \le a \le 3$, die größte Zahl ist $a = 3$.
hinweise:
  - "Extrema brauchen eine Nullstelle von $f'(x) = 3x^2 + 2ax + 3$ **mit** Vorzeichenwechsel."
  - 'Betrachte die Diskriminante $D = (2a)^2 - 4\cdot 3\cdot 3$. Was passiert bei $D = 0$?'
loesung: |
  Ansatz: Extrema gibt es nur, wo $f'$ das Vorzeichen wechselt. Wir untersuchen deshalb die Nullstellen der quadratischen Funktion $f'(x) = 3x^2 + 2ax + 3$ mit der Diskriminante.
  ---
  $D = 4a^2 - 36$. Für $D > 0$, also $|a| > 3$, hat $f'$ zwei einfache Nullstellen mit Vorzeichenwechsel: Es gibt ein Maximum und ein Minimum.
  ---
  Für $D < 0$, also $|a| < 3$, hat $f'$ keine Nullstelle und ist überall positiv: keine Extrema.
  ---
  Grenzfall $a = 3$: $f'(x) = 3x^2 + 6x + 3 = 3(x + 1)^2 \ge 0$. Die doppelte Nullstelle bei $-1$ hat keinen Vorzeichenwechsel, dort liegt ein Sattelpunkt. Also gehört $a = 3$ dazu. Ergebnis: keine Extrema für $-3 \le a \le 3$, größtes $a = 3$.
```

## Die Regel von de l'Hospital

```aufgabe
id: db-check-unbestimmt
titel: Welcher Ausdruck ist unbestimmt?
niveau: 1
art: check
angabe: |
  Beim Einsetzen in einen Grenzwert entsteht einer der folgenden Ausdrücke. Bei welchem kann man **ohne weitere Umformung** nichts über den Grenzwert sagen?
  Herkunft: [Kapitel 12, „Grenzwerte berechnen: Einsetzen, Kürzen, Erweitern“](/lernen/mathe3/grenzwerte-stetigkeit/grenzwerte-berechnen-einsetzen-kuerzen-erweitern).
teile:
  - typ: auswahl
    optionen:
      - '$\frac00$'
      - '$\frac{0}{5}$'
      - '$\frac{5}{\infty}$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Zähler gegen $0$ und Nenner gegen $5$: Der Bruch geht sicher gegen $0$. Das ist bestimmt.'
      - wert: 2
        meldung: 'Ein fester Zähler durch einen immer größeren Nenner geht sicher gegen $0$. Das ist bestimmt.'
hinweise:
  - 'Unbestimmt heißt: Je nach Funktion kann jeder Wert herauskommen.'
loesung: |
  Bei $\frac00$ kämpfen zwei Effekte gegeneinander: Der Zähler macht den Bruch klein, der Nenner groß.
  ---
  Je nach Funktion kann jeder Grenzwert herauskommen, zum Beispiel $\frac{2x}{x} \to 2$ und $\frac{x^2}{x} \to 0$. Das heißt unbestimmt.
```

**Worum geht es in einem Satz?** Bei einem Grenzwert vom Typ $\frac00$ oder $\frac\infty\infty$ darf man Zähler und
Nenner **getrennt** ableiten und den Grenzwert des neuen Bruchs berechnen.

In [12.5 Grenzwerte berechnen](/lernen/mathe3/grenzwerte-stetigkeit/grenzwerte-berechnen-einsetzen-kuerzen-erweitern) hast du solche Fälle durch Kürzen, Erweitern oder Abschätzen
gelöst. Das klappt nicht immer. Wie kürzt man etwa $\frac{e^x - 1}{2x}$? Die Differentialrechnung liefert ein
allgemeines Werkzeug. Benannt ist es nach dem französischen Mathematiker Guillaume de l'Hospital, der es 1696 in seinem
Lehrbuch veröffentlicht hat.

**Ein Bild vorweg:** Gehen Zähler und Nenner beide gegen $0$, schneiden ihre Graphen die $x$-Achse an derselben Stelle.
In der Nähe dieser Stelle sehen beide Graphen aus wie Geraden, nämlich wie ihre Tangenten. Das Verhältnis zweier
Geraden durch denselben Nullpunkt ist aber einfach das Verhältnis ihrer Steigungen.

:::beispiel[Das Verhältnis zweier Tangenten]
Wir untersuchen $\frac{e^x - 1}{2x}$ für $x \to 0$. Einsetzen ergibt $\frac00$.

1. **Zähler:** $f(x) = e^x - 1$ hat bei $0$ den Wert $0$ und die Steigung $f'(0) = e^0 = 1$. In der Nähe von $0$ ist
   $f(x) \approx 1\cdot x$.
2. **Nenner:** $g(x) = 2x$ hat bei $0$ den Wert $0$ und die Steigung $2$.
3. **Verhältnis:** $\frac{f(x)}{g(x)} \approx \frac{1\cdot x}{2\cdot x} = \frac12$.
4. **Zahlenprobe:** Für $x = 0{,}01$ ist $\frac{e^{0{,}01} - 1}{0{,}02} \approx \frac{0{,}010\,050}{0{,}02} \approx 0{,}5025$.

Der Grenzwert ist $\frac12$, das Verhältnis der Steigungen $\frac{f'(0)}{g'(0)}$.
:::

### Die Regel

:::satz[Regel von de l'Hospital]
Die Funktionen $f$ und $g$ seien in einer Umgebung von $x_0$ differenzierbar, außer eventuell in $x_0$ selbst, und dort
sei $g'(x) \neq 0$. Weiter gelte entweder
$$\lim_{x\to x_0} f(x) = \lim_{x\to x_0} g(x) = 0 \qquad\text{oder}\qquad \lim_{x\to x_0} |f(x)| = \lim_{x\to x_0} |g(x)| = \infty .$$
Wenn der Grenzwert $\lim\limits_{x\to x_0}\dfrac{f'(x)}{g'(x)}$ existiert, wobei auch $\pm\infty$ erlaubt ist, dann gilt
$$\lim_{x\to x_0}\frac{f(x)}{g(x)} = \lim_{x\to x_0}\frac{f'(x)}{g'(x)} .$$
Dasselbe gilt für einseitige Grenzwerte und für $x \to +\infty$ oder $x \to -\infty$.
:::

Wichtig: Abgeleitet werden Zähler und Nenner **einzeln**. Das ist **nicht** die Quotientenregel.

:::beweis[Beweis eines einfachen Spezialfalls]
Wir nehmen zusätzlich an: $f(x_0) = g(x_0) = 0$, beide sind in $x_0$ differenzierbar, und $g'(x_0) \neq 0$.

**Schritt 1, die Nullen ausnutzen.** Wegen $f(x_0) = g(x_0) = 0$ darf man sie abziehen, ohne etwas zu ändern:
$$\frac{f(x)}{g(x)} = \frac{f(x) - f(x_0)}{g(x) - g(x_0)}.$$

**Schritt 2, mit $\frac{1}{x - x_0}$ erweitern.** Zähler und Nenner werden zu Differenzenquotienten:
$$\frac{f(x) - f(x_0)}{g(x) - g(x_0)} = \frac{\dfrac{f(x) - f(x_0)}{x - x_0}}{\dfrac{g(x) - g(x_0)}{x - x_0}} .$$

**Schritt 3, Grenzübergang.** Oben steht ein Differenzenquotient von $f$, er geht gegen $f'(x_0)$. Unten steht einer von
$g$, er geht gegen $g'(x_0) \ne 0$. Der Grenzwertsatz für Quotienten liefert $\frac{f'(x_0)}{g'(x_0)}$.
:::

**Was haben wir gezeigt?** In diesem Spezialfall ist die Regel einfach „Verhältnis der Tangentensteigungen“. Der
allgemeine Fall, etwa wenn $f'(x_0)$ und $g'(x_0)$ selbst $0$ sind, braucht eine Erweiterung des Mittelwertsatzes. Sie
heißt Satz von Cauchy und ist kein Prüfungsstoff.

**Ein typisches Missverständnis:** „Ich darf jeden Bruch so ableiten.“ Nein. Die Regel gilt nur für $\frac00$ und
$\frac{\infty}{\infty}$. Bei einem bestimmten Ausdruck liefert sie in aller Regel falsche Zahlen. Das zeigt der Kasten
„Regel ohne unbestimmten Ausdruck angewendet“ in dieser Lektion.

### Beispiele für die drei typischen Fälle

:::beispiel[Typ 0/0, zweimal angewendet]
$$\lim_{x\to 0}\frac{e^x - 1 - x}{x^2}$$
1. **Einsetzen:** Zähler $1 - 1 - 0 = 0$, Nenner $0$. Typ $\frac00$.
2. **Ableiten:** $\lim_{x\to 0}\frac{e^x - 1}{2x}$. Einsetzen gibt wieder $\frac00$.
3. **Noch einmal ableiten:** $\lim_{x\to 0}\frac{e^x}{2} = \frac{e^0}{2} = \frac12$.

Man darf die Regel wiederholen, solange jedes Mal wieder $\frac00$ oder $\frac\infty\infty$ vorliegt.
:::

:::beispiel[Typ ∞/∞: Die e-Funktion schlägt jede Potenz]
$$\lim_{x\to\infty}\frac{x^2}{e^x} \overset{\infty/\infty}{=} \lim_{x\to\infty}\frac{2x}{e^x} \overset{\infty/\infty}{=} \lim_{x\to\infty}\frac{2}{e^x} = 0 .$$
Das Zeichen über dem Gleichheitszeichen erinnert daran, welcher Typ vorlag. Genauso ist $\lim_{x\to\infty}\frac{x^n}{e^x} = 0$
für jedes $n$, nach $n$ Schritten. Und es ist $\lim_{x\to\infty}\frac{\ln x}{x} = \lim_{x\to\infty}\frac{1/x}{1} = 0$:
Der Logarithmus wächst langsamer als jede Potenz.
:::

:::beispiel[Typ 0 · ∞: erst in einen Bruch umformen]
$\lim_{x\to 0^+} x\ln x$ ist vom Typ $0\cdot(-\infty)$, denn $\ln x \to -\infty$ für $x \to 0^+$.

1. **Als Bruch schreiben:** $x\ln x = \dfrac{\ln x}{1/x}$. Das ist vom Typ $\frac{-\infty}{\infty}$.
2. **Ableiten:** $\dfrac{1/x}{-1/x^2} = \dfrac1x\cdot\left(-\dfrac{x^2}{1}\right) = -x$.
3. **Grenzwert:** $\lim_{x\to 0^+}(-x) = 0$.

Also ist $\lim_{x\to 0^+} x\ln x = 0$. Faustregel: Den Faktor, der beim Ableiten einfacher wird, hier $\ln x$, lässt man
im Zähler.
:::

```aufgabe
id: db-check-lh-typ
titel: Ist die Regel hier erlaubt?
niveau: 1
art: check
angabe: |
  Darf man auf $\displaystyle\lim_{x\to 0}\frac{\cos x}{x + 1}$ die Regel von de l'Hospital anwenden?
teile:
  - typ: auswahl
    optionen:
      - 'Nein, Einsetzen ergibt $\frac11$, also keinen unbestimmten Ausdruck.'
      - 'Ja, die Regel gilt für jeden Bruch.'
      - 'Ja, weil Zähler und Nenner differenzierbar sind.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Die Regel gilt nur für $\frac00$ und $\frac\infty\infty$. Sonst liefert sie in aller Regel falsche Werte, hier $0$ statt $1$.'
      - wert: 2
        meldung: 'Differenzierbarkeit allein genügt nicht. Zuerst muss ein unbestimmter Ausdruck vorliegen.'
hinweise:
  - 'Setze $x = 0$ in Zähler und Nenner ein.'
loesung: |
  Einsetzen: $\frac{\cos 0}{0 + 1} = \frac11 = 1$. Das ist der Grenzwert, fertig.
  ---
  „Abgeleitet“ käme $\frac{-\sin 0}{1} = 0$ heraus, und das ist falsch.
```

:::achtung[Regel ohne unbestimmten Ausdruck angewendet]
**Falsch:** „$\displaystyle\lim_{x\to 0}\frac{x + 1}{x + 2} = \lim_{x\to 0}\frac{1}{1} = 1$.“

**Richtig:** Einsetzen ergibt $\frac12$, und das ist schon der Grenzwert. Es liegt weder $\frac00$ noch
$\frac\infty\infty$ vor, also ist die Regel nicht anwendbar. Wer sie trotzdem benutzt, bekommt eine falsche Zahl.
:::

:::achtung[Quotientenregel statt getrennt ableiten]
**Falsch:** „$\displaystyle\lim_{x\to 0}\frac{\sin x}{x}$: Mit der Quotientenregel ist die Ableitung
$\frac{x\cos x - \sin x}{x^2}$, und davon nehme ich den Grenzwert.“

**Richtig:** Bei de l'Hospital wird **nicht** der Bruch als Ganzes abgeleitet, sondern Zähler und Nenner jeweils für
sich: $\frac{(\sin x)'}{(x)'} = \frac{\cos x}{1} \to 1$. Die Quotientenregel berechnet etwas ganz anderes, nämlich die
Steigung des Bruchs.
:::

Zwei weitere Fallen sind seltener, kommen aber in der mündlichen Prüfung vor.

- **Die Regel ist nur eine Richtung.** Existiert $\lim\frac{f'}{g'}$ nicht, kann $\lim\frac fg$ trotzdem existieren.
  Beispiel: $\lim_{x\to\infty}\frac{x + \sin x}{x} = 1$, wenn man durch $x$ kürzt. Aber $\frac{1 + \cos x}{1}$ pendelt
  und hat keinen Grenzwert.
- **Zirkelschluss.** $\lim_{x\to 0}\frac{\sin x}{x} = \lim\frac{\cos x}{1} = 1$ ist als Rechnung richtig, aber kein
  **Beweis** dieses Grenzwerts. Die Ableitung $(\sin x)' = \cos x$ wurde ja in
  [13.5 Grundfunktionen ableiten](/lernen/mathe3/differenzierbarkeit/grundfunktionen-ableiten-e-funktion-logarithmus-sin-cos-arcsin-arctan)
  gerade mit diesem Grenzwert hergeleitet.

:::merke[Rezept: de l'Hospital]
1. **Einsetzen.** Ist es wirklich $\frac00$ oder $\frac{\pm\infty}{\pm\infty}$? Sonst ist man fertig, oder die Regel ist unzulässig.
2. **Zähler und Nenner getrennt ableiten** und vereinfachen.
3. **Neuen Grenzwert berechnen**, notfalls Schritt 1 und 2 wiederholen.
4. **Produkte** vom Typ $0\cdot\infty$ vorher in einen Bruch umschreiben.
:::

```reflexion
frage: Warum zeigt die Regel von de l'Hospital, dass $e^x$ schneller wächst als jede Potenz $x^n$?
antwort: |
  Bei $\frac{x^n}{e^x}$ sinkt mit jedem Ableiten die Hochzahl im Zähler um eins, während der Nenner $e^x$ unverändert
  bleibt. Nach $n$ Schritten steht $\frac{n!}{e^x}$ da, also eine feste Zahl durch etwas, das gegen $\infty$ geht. Der
  Grenzwert ist $0$. Anschaulich: Die Wachstumsrate von $e^x$ ist $e^x$ selbst und wird immer größer. Die Wachstumsrate
  einer Potenz ist eine Potenz mit kleinerer Hochzahl. Auf lange Sicht gewinnt die e-Funktion deshalb immer.
```

### Übungen

```aufgabe
id: db-lh-poly
titel: Ein erster Grenzwert mit l'Hospital
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Berechne $\displaystyle\lim_{x\to 2}\frac{x^3 - 8}{x - 2}$ mit der Regel von de l'Hospital.
teile:
  - typ: zahl
    label: 'Grenzwert'
    loesung: "3*2^2"
    anzeige: '12'
    fehler:
      - wert: "0"
        meldung: 'Einsetzen gibt $\frac00$, und das ist nicht $0$. Leite Zähler und Nenner getrennt ab.'
      - wert: "4"
        meldung: 'Die Ableitung von $x^3$ ist $3x^2$, an der Stelle $2$ also $12$, nicht $x^2 = 4$.'
hinweise:
  - "Zähler abgeleitet: $(x^3 - 8)' = 3x^2$. Nenner abgeleitet: $(x - 2)' = 1$."
loesung: |
  Ansatz: Zuerst den Typ prüfen. Einsetzen ergibt $\frac{8 - 8}{0} = \frac00$, die Regel ist anwendbar.
  ---
  Getrennt ableiten: $\lim_{x\to 2}\frac{3x^2}{1} = 12$. Kontrolle durch Faktorisieren: $x^3 - 8 = (x - 2)(x^2 + 2x + 4)$, gekürzt bleibt $x^2 + 2x + 4 \to 4 + 4 + 4 = 12$.
```

```aufgabe
id: db-lh-falle
titel: Wo ist der Fehler?
niveau: 1
lernziel: 7
kompetenz: begruenden
angabe: |
  Jemand rechnet: $\displaystyle\lim_{x\to 1}\frac{x^2 + 1}{x + 1} = \lim_{x\to 1}\frac{2x}{1} = 2$.
  Berechne den richtigen Grenzwert und erkläre den Fehler.
teile:
  - typ: zahl
    label: 'richtiger Grenzwert'
    loesung: "(1 + 1)/(1 + 1)"
    anzeige: '1'
    fehler:
      - wert: "2"
        meldung: 'Das ist das Ergebnis der falschen Rechnung. Setze $x = 1$ direkt ein.'
  - typ: text
    label: 'Fehler'
    muster: |
      Einsetzen liefert $\frac{2}{2} = 1$, also keinen unbestimmten Ausdruck. Die Regel von de l'Hospital gilt nur für
      $\frac00$ oder $\frac{\infty}{\infty}$. Hier war ihre Voraussetzung verletzt, und sie liefert einen falschen Wert.
hinweise:
  - 'Setze zuerst $x = 1$ ein. Was ergibt sich?'
loesung: |
  Ansatz: Rezept Schritt 1, also einsetzen. Zähler und Nenner sind stetig, der Nenner ist bei $1$ nicht null: Grenzwert $= \frac{1 + 1}{1 + 1} = 1$.
  ---
  Der Fehler: l'Hospital wurde ohne die Voraussetzung $\frac00$ beziehungsweise $\frac\infty\infty$ angewandt. Die richtige Antwort ist $1$, nicht $2$.
```

```aufgabe
id: db-lh-exp
titel: Exponentialfunktion im Zähler
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Berechne $\displaystyle\lim_{x\to 0}\frac{e^{2x} - 1}{x}$.
teile:
  - typ: zahl
    label: 'Grenzwert'
    loesung: "2*exp(0)"
    anzeige: '2'
    fehler:
      - wert: "1"
        meldung: 'Die Kettenregel liefert den Faktor $2$: $(e^{2x})'' = 2e^{2x}$.'
      - wert: "0"
        meldung: 'Einsetzen gibt $\frac00$, nicht $0$. Zähler und Nenner getrennt ableiten.'
hinweise:
  - 'Prüfe zuerst den Typ: $\frac{e^0 - 1}{0}$.'
  - "Kettenregel: $(e^{2x})' = 2e^{2x}$. Der Nenner $x$ hat die Ableitung $1$."
loesung: |
  Ansatz: Typ prüfen. Einsetzen: $\frac{e^0 - 1}{0} = \frac00$.
  ---
  l'Hospital: $\lim_{x\to 0}\frac{2e^{2x}}{1} = 2$.
  ---
  Deutung: Der Bruch ist genau der Differenzenquotient von $e^{2x}$ an der Stelle $0$. Der Grenzwert ist also deren Ableitung dort, und die ist $2$.
```

```aufgabe
id: db-lh-cos
titel: Zweimal anwenden
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Berechne $\displaystyle\lim_{x\to 0}\frac{1 - \cos x}{x^2}$.
teile:
  - typ: zahl
    label: 'Grenzwert'
    loesung: "cos(0)/2"
    anzeige: '\tfrac12'
    fehler:
      - wert: "-1/2"
        meldung: 'Vorzeichen prüfen: $(1 - \cos x)'' = -(-\sin x) = +\sin x$.'
      - wert: "0"
        meldung: 'Nach dem ersten Ableiten steht $\frac{\sin x}{2x}$, wieder $\frac00$ und nicht $0$. Wende die Regel ein zweites Mal an.'
hinweise:
  - 'Nach dem ersten Ableiten steht $\frac{\sin x}{2x}$ da, wieder vom Typ $\frac00$.'
  - "Noch einmal getrennt ableiten: $(\\sin x)' = \\cos x$ und $(2x)' = 2$."
loesung: |
  Ansatz: Typ $\frac00$, denn $1 - \cos 0 = 0$. Ableiten: $\lim_{x\to 0}\frac{\sin x}{2x}$, wieder $\frac00$.
  ---
  Nochmals: $\lim_{x\to 0}\frac{\cos x}{2} = \frac12$.
  ---
  Bedeutung: Für kleine $x$ ist $\cos x \approx 1 - \frac{x^2}{2}$. Das ist das Taylorpolynom aus [13.11 Linearisierung und Taylorpolynome](/lernen/mathe3/differenzierbarkeit/linearisierung-und-taylorpolynome).
```

```aufgabe
id: db-lh-xlnx
titel: Produkt vom Typ 0 · ∞
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Berechne $\displaystyle\lim_{x\to 0^+} x^2 \ln x$.
teile:
  - typ: zahl
    label: 'Grenzwert'
    loesung: "0"
    fehler:
      - wert: "-1/2"
        meldung: 'Nach dem Ableiten steht $-\frac{x^2}{2}$. Das muss man noch für $x \to 0^+$ auswerten.'
hinweise:
  - 'Schreibe $x^2\ln x = \dfrac{\ln x}{x^{-2}}$. Das ist vom Typ $\frac{-\infty}{\infty}$.'
  - "Ableiten: $(\\ln x)' = \\frac1x$ und $(x^{-2})' = -2x^{-3}$."
gefuehrt:
  - text: 'Welcher Typ liegt bei $x^2\ln x$ für $x \to 0^+$ vor?'
    teil:
      typ: auswahl
      optionen: ['$0\cdot(-\infty)$', '$\frac00$', '$0\cdot 0$']
      richtig: [0]
      fehler:
        - wert: 2
          meldung: '$\ln x$ geht für $x \to 0^+$ nicht gegen $0$, sondern gegen $-\infty$.'
    erklaerung: '$x^2 \to 0$ und $\ln x \to -\infty$. Ein Produkt vom Typ $0\cdot\infty$ muss man erst in einen Bruch umschreiben.'
  - text: 'Wir schreiben $x^2\ln x = \frac{\ln x}{1/x^2}$. Leite Zähler und Nenner getrennt ab. Welcher vereinfachte Term entsteht?'
    teil:
      typ: term
      loesung: "-x^2/2"
      bereich: [0.1, 2]
      fehler:
        - wert: "-2/x^3"
          meldung: 'Das ist nur der Nenner nach dem Ableiten. Der Bruch ist $\frac{1/x}{-2/x^3} = \frac1x\cdot\frac{x^3}{-2}$.'
    erklaerung: '$\frac{1/x}{-2/x^3} = \frac{1}{x}\cdot\left(-\frac{x^3}{2}\right) = -\frac{x^2}{2}$.'
  - text: 'Wogegen geht $-\frac{x^2}{2}$ für $x \to 0^+$?'
    teil:
      typ: zahl
      loesung: "0"
    erklaerung: 'Gegen $0$. Also ist $\lim_{x\to 0^+}x^2\ln x = 0$.'
loesung: |
  Ansatz: Typ $0\cdot(-\infty)$, also erst in einen Bruch umschreiben: $x^2 \ln x = \dfrac{\ln x}{1/x^2}$, Typ $\frac{-\infty}{\infty}$.
  ---
  Getrennt ableiten: $\dfrac{1/x}{-2/x^3} = -\dfrac{x^2}{2}$.
  ---
  $\lim_{x\to 0^+}\left(-\frac{x^2}{2}\right) = 0$. Zahlenprobe: $x = 0{,}01$ ergibt $0{,}0001\cdot\ln 0{,}01 \approx -0{,}00046$, sehr nahe bei $0$.
```

```aufgabe
id: db-lh-ln-wurzel
titel: Logarithmus gegen Wurzel
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Berechne $\displaystyle\lim_{x\to\infty}\frac{\ln x}{\sqrt x}$.
teile:
  - typ: zahl
    label: 'Grenzwert'
    loesung: "0"
    fehler:
      - wert: "1"
        meldung: 'Beide gehen gegen $\infty$, aber unterschiedlich schnell. Leite getrennt ab und vereinfache.'
      - wert: "2"
        meldung: 'Nach dem Ableiten steht $\frac{2}{\sqrt x}$, und das geht für $x \to \infty$ noch gegen $0$.'
hinweise:
  - 'Typ $\frac\infty\infty$. Ableitungen: $(\ln x)'' = \frac1x$ und $(\sqrt x)'' = \frac{1}{2\sqrt x}$.'
  - 'Vereinfache $\dfrac{1/x}{1/(2\sqrt x)} = \dfrac{2\sqrt x}{x}$.'
loesung: |
  Ansatz: Zähler und Nenner gehen gegen $\infty$, Typ $\frac\infty\infty$. Die Regel ist anwendbar.
  ---
  Getrennt ableiten: $\dfrac{1/x}{1/(2\sqrt x)} = \dfrac{2\sqrt x}{x} = \dfrac{2}{\sqrt x}$.
  ---
  Für $x \to \infty$ geht $\frac{2}{\sqrt x} \to 0$. Der Logarithmus wächst also langsamer als die Wurzel. Zahlenprobe: $x = 10\,000$ ergibt $\frac{9{,}21}{100} \approx 0{,}09$.
```

```aufgabe
id: db-lh-dreifach
titel: Dreimal l'Hospital
niveau: 3
lernziel: 7
kompetenz: rechnen
angabe: |
  Berechne $\displaystyle\lim_{x\to 0}\frac{x - \sin x}{x^3}$.
teile:
  - typ: zahl
    label: 'Grenzwert'
    loesung: "1/6"
    anzeige: '\tfrac16'
    fehler:
      - wert: "0"
        meldung: 'Nach dem ersten oder zweiten Ableiten liegt immer noch $\frac00$ vor. Erst nach dem dritten Mal ist der Ausdruck bestimmt.'
      - wert: "1/3"
        meldung: 'Prüfe den Nenner: $(x^3)'' = 3x^2$, $(3x^2)'' = 6x$, $(6x)'' = 6$. Am Ende steht $\frac{\cos x}{6}$.'
hinweise:
  - 'Nach jedem Schritt prüfen, ob wieder $\frac00$ vorliegt.'
  - 'Die Schritte lauten $\frac{1 - \cos x}{3x^2}$, dann $\frac{\sin x}{6x}$, dann noch einmal ableiten.'
loesung: |
  Ansatz: Typ $\frac00$, denn $0 - \sin 0 = 0$. Ableiten ergibt $\dfrac{1 - \cos x}{3x^2}$, wieder $\frac00$.
  ---
  Ableiten: $\dfrac{\sin x}{6x}$, wieder $\frac00$.
  ---
  Ableiten: $\dfrac{\cos x}{6} \to \dfrac16$.
  ---
  Kontrolle mit Zahlen: Für $x = 0{,}1$ ist $\frac{0{,}1 - \sin 0{,}1}{0{,}001} \approx \frac{0{,}000\,166\,6}{0{,}001} \approx 0{,}1666$. Das passt zu $\frac16 \approx 0{,}1667$.
```

```aufgabe
id: db-lh-xhochx
titel: Was ist 0 hoch 0?
niveau: 3
lernziel: 7
kompetenz: anwenden
angabe: |
  Berechne $\displaystyle\lim_{x\to 0^+} x^x$. Hinweis: Schreibe $x^x = e^{x\ln x}$.
teile:
  - typ: zahl
    label: 'Grenzwert'
    loesung: "exp(0)"
    anzeige: '1'
    fehler:
      - wert: "0"
        meldung: 'Der Exponent $x\ln x$ geht gegen $0$. Der Grenzwert ist aber $e^0$, nicht $0$.'
      - wert: "0.6922"
        meldung: 'Das ist der kleinste Wert von $x^x$ (bei $x = \frac1e$), nicht der Grenzwert bei $0$.'
hinweise:
  - 'Bestimme zuerst den Grenzwert des Exponenten $x\ln x$ für $x \to 0^+$ mit der Regel von de l''Hospital.'
  - 'Die e-Funktion ist stetig. Also ist $\lim e^{u(x)} = e^{\lim u(x)}$.'
loesung: |
  Ansatz: Eine Potenz mit variabler Basis und Hochzahl schreibt man mit $e$: $x^x = e^{x\ln x}$. Dann reicht der Grenzwert des Exponenten.
  ---
  Exponent: $\lim_{x\to 0^+}x\ln x = 0$, wie im Beispiel vom Typ $0\cdot\infty$ dieser Lektion gezeigt.
  ---
  Weil die e-Funktion stetig ist, folgt $\lim_{x\to 0^+}x^x = e^0 = 1$.
  ---
  Zahlenprobe: $0{,}01^{0{,}01} \approx 0{,}955$ und $0{,}0001^{0{,}0001} \approx 0{,}9991$. Die Werte nähern sich $1$.
```

## Linearisierung und Taylorpolynome

```aufgabe
id: db-check-tangente
titel: Eine Tangente aufstellen
niveau: 1
art: check
angabe: |
  Wie lautet die Gleichung der Tangente an $f(x) = x^2$ an der Stelle $x_0 = 3$?
  Herkunft: [Kapitel 9, „Tangente und Normale aufstellen“](/lernen/mathe3/differentialrechnung/tangente-und-normale-aufstellen).
teile:
  - typ: term
    label: '$t(x)$'
    loesung: "6*x - 9"
    fehler:
      - wert: "6*x"
        meldung: 'Die Steigung $6$ stimmt, aber die Gerade muss durch den Punkt $(3 \mid 9)$ gehen. Bei $6x$ ist $t(3) = 18$.'
      - wert: "6*x + 9"
        meldung: 'Probe: $t(3) = 18 + 9 = 27 \ne 9$. Setze in $t(x) = f(3) + f''(3)(x - 3)$ ein.'
hinweise:
  - "$t(x) = f(x_0) + f'(x_0)(x - x_0)$ mit $f(3) = 9$ und $f'(3) = 6$."
loesung: |
  $f(3) = 9$ und $f'(x) = 2x$, also $f'(3) = 6$.
  ---
  $t(x) = 9 + 6(x - 3) = 6x - 9$. Probe: $t(3) = 18 - 9 = 9$.
```

**Worum geht es in einem Satz?** Die Ableitung liefert die beste Gerade, die eine Funktion in der Nähe einer Stelle
annähert. Mit höheren Ableitungen bekommt man noch bessere Näherungen durch Polynome, die **Taylorpolynome**.

Die Linearisierung gehört zum Prüfungsstoff. Das Taylorpolynom höheren Grades und die Fehlerabschätzung mit dem
Restglied sind eine Vertiefung. In der mündlichen Prüfung kommen sie aber gut an, etwa als Antwort auf die Frage „Wozu
braucht man Ableitungen noch?“.

### Die Tangente als beste Gerade

Ist $f$ an der Stelle $x_0$ differenzierbar, so definieren wir den **Fehler der Tangente** als
$$r(h) = f(x_0 + h) - f(x_0) - f'(x_0)\,h .$$
Das ist der senkrechte Abstand zwischen Graph und Tangente, wenn man von $x_0$ um $h$ weitergeht. Teilt man durch $h$,
entsteht
$$\frac{r(h)}{h} = \frac{f(x_0 + h) - f(x_0)}{h} - f'(x_0) \xrightarrow{h \to 0} f'(x_0) - f'(x_0) = 0 .$$
Der Fehler geht also nicht nur gegen $0$. Er geht sogar **schneller als $h$** gegen $0$.

:::beispiel[Der Fehler der Tangente bei x²]
$f(x) = x^2$ und $x_0 = 3$. Es ist $f(3 + h) = 9 + 6h + h^2$.

1. Der Teil ohne $h$ ist $f(3) = 9$.
2. Der in $h$ lineare Teil ist $6h$, also $f'(3) = 6$.
3. Was übrig bleibt, ist der Fehler: $r(h) = h^2$.

Für $h = 0{,}1$ ist der Fehler $0{,}01$, für $h = 0{,}01$ nur $0{,}0001$. Teilt man durch $h$, erhält man $0{,}1$ und
$0{,}01$: Auch $\frac{r(h)}{h} = h$ geht gegen $0$.
:::

:::satz[Differenzierbarkeit als lineare Näherbarkeit]
$f$ ist genau dann an der Stelle $x_0$ differenzierbar, wenn es eine Zahl $k$ gibt, sodass
$$f(x_0 + h) = f(x_0) + k\,h + r(h) \qquad\text{mit}\qquad \lim_{h\to 0}\frac{r(h)}{h} = 0 .$$
Dann ist $k = f'(x_0)$, und die Gerade $t(x) = f(x_0) + f'(x_0)(x - x_0)$ ist die **Tangente** in $x_0$.
:::

Die Rückrichtung ist kurz: Gilt die Darstellung, so ist $\frac{f(x_0 + h) - f(x_0)}{h} = k + \frac{r(h)}{h} \to k$.
Dieser Satz ist eine zweite, gleichwertige Definition der Ableitung. Er sagt: **Differenzierbar heißt „im Kleinen
linear“.** Zoomt man in den Graphen einer differenzierbaren Funktion immer weiter hinein, sieht er irgendwann aus wie
eine Gerade. Bei $|x|$ an der Stelle $0$ klappt das nicht: Egal wie weit man hineinzoomt, man sieht immer denselben Knick.

Unter allen Geraden durch $(x_0 \mid f(x_0))$ ist die Tangente die beste. Jede andere Steigung $k' \neq f'(x_0)$ hätte
den Fehler $(f'(x_0) - k')\,h + r(h)$. Der geht nur so schnell wie $h$ gegen $0$, nicht schneller.

### Linearisierung in der Praxis

Lässt man den kleinen Fehler weg, erhält man die **lineare Näherung** oder **Linearisierung**
$$f(x) \approx f(x_0) + f'(x_0)\,(x - x_0) \qquad\text{für } x \text{ nahe } x_0 .$$

:::beispiel[Eine Wurzel ohne Taschenrechner]
Gesucht ist ein Näherungswert für $\sqrt{4{,}1}$.

1. **Bekannte Stelle in der Nähe wählen:** $x_0 = 4$, weil man $\sqrt4 = 2$ kennt.
2. **Ableitung dort:** $f(x) = \sqrt x$, $f'(x) = \frac{1}{2\sqrt x}$, also $f'(4) = \frac14$.
3. **Linearisieren:** $\sqrt{4{,}1} \approx 2 + \frac14\cdot 0{,}1 = 2{,}025$.

Der genaue Wert ist $2{,}024\,846\ldots$ Der Fehler beträgt also nur etwa $0{,}000\,15$.
:::

:::beispiel[Zinsen über mehrere Jahre linear geschätzt]
Ein Kapital wächst vier Jahre lang mit $2\,\%$ Zinsen pro Jahr. Der Wachstumsfaktor ist $1{,}02^4$.

1. **Funktion:** $f(x) = (1 + x)^4$ mit $x_0 = 0$. Es ist $f(0) = 1$ und $f'(x) = 4(1 + x)^3$, also $f'(0) = 4$.
2. **Linearisieren:** $(1 + x)^4 \approx 1 + 4x$, also $1{,}02^4 \approx 1 + 4\cdot 0{,}02 = 1{,}08$.
3. **Vergleich:** Genau ist $1{,}02^4 = 1{,}082\,432\ldots$ Aus $1000$ Euro werden also etwa $1082{,}43$ Euro, die
   Näherung gibt $1080$ Euro.

Die Faustregel „vier Jahre zu $2\,\%$ ergeben etwa $8\,\%$“ ist genau diese Linearisierung. Sie unterschätzt den
Zinseszins, weil $(1 + x)^4$ konvex ist und über seiner Tangente liegt.
:::

Technik und Physik leben von solchen Näherungen. Beispiele sind $\sin x \approx x$ für kleine Winkel beim Pendel,
$(1 + x)^n \approx 1 + nx$ bei Zinsen und relativen Fehlern und $e^x \approx 1 + x$. Die Fehlerfortpflanzung in
[Kapitel 9](/lernen/mathe3/differentialrechnung/die-tangente-als-naeherung-linearisierung-und-fehlerfortpflanzung)
beruht ebenfalls darauf.

:::achtung[Zu weit weg linearisiert]
**Falsch:** „$\sqrt{10} \approx \sqrt4 + \frac{1}{2\sqrt4}\cdot(10 - 4) = 2 + 1{,}5 = 3{,}5$.“

**Richtig:** Die Linearisierung ist nur **nahe** bei $x_0$ gut. Von $4$ bis $10$ ist es zu weit, der Fehler ist hier
größer als $0{,}3$, denn $\sqrt{10} \approx 3{,}162$. Wähle eine bekannte Stelle möglichst nahe: Mit $x_0 = 9$ ist
$\sqrt{10} \approx 3 + \frac{1}{6}\cdot 1 \approx 3{,}167$. Der Fehler beträgt jetzt nur noch etwa $0{,}004$.
:::

```aufgabe
id: db-check-linear
titel: Kleine Winkel
niveau: 1
art: check
angabe: |
  Welchen Näherungswert liefert die Linearisierung von $\sin x$ an der Stelle $0$ für $\sin 0{,}05$ (Bogenmaß)?
teile:
  - typ: zahl
    label: '$\sin 0{,}05 \approx$'
    loesung: "0.05"
    fehler:
      - wert: "1"
        meldung: '$1 = \cos 0$ ist die Steigung der Tangente. Die Näherung lautet $\sin x \approx 0 + 1\cdot x$.'
      - wert: "0"
        meldung: '$\sin 0 = 0$ ist nur der Startwert. Dazu kommt die Steigung mal Abstand: $1\cdot 0{,}05$.'
hinweise:
  - "$\\sin 0 = 0$ und $(\\sin)'(0) = \\cos 0 = 1$."
loesung: |
  Linearisierung: $\sin x \approx \sin 0 + \cos 0\cdot x = x$.
  ---
  Also $\sin 0{,}05 \approx 0{,}05$. Genau ist $\sin 0{,}05 \approx 0{,}049\,98$.
```

### Taylorpolynome

Die Tangente stimmt mit $f$ an der Stelle $x_0$ im Funktionswert und in der ersten Ableitung überein. Will man eine
bessere Näherung, verlangt man Übereinstimmung auch in höheren Ableitungen. Die zweite Ableitung beschreibt die
Krümmung, die dritte deren Änderung, und so weiter.

:::definition[Taylorpolynom]
Ist $f$ an der Stelle $x_0$ mindestens $n$-mal differenzierbar, so heißt
$$T_n(x) = f(x_0) + f'(x_0)(x - x_0) + \frac{f''(x_0)}{2!}(x - x_0)^2 + \dots + \frac{f^{(n)}(x_0)}{n!}(x - x_0)^n$$
das **Taylorpolynom $n$-ten Grades** von $f$ an der Stelle $x_0$.
:::

Dabei ist $f^{(n)}$ die $n$-te Ableitung, und $n! = 1\cdot 2\cdot\ldots\cdot n$ ist die Fakultät, etwa $3! = 6$. Der
Name kommt vom englischen Mathematiker Brook Taylor (1715). Für $n = 1$ ist $T_1$ genau die Tangente.

Warum die Fakultäten? Leitet man $(x - x_0)^k$ genau $k$-mal ab, erhält man $k\cdot(k - 1)\cdot\ldots\cdot 1 = k!$.
Die Division durch $k!$ sorgt dafür, dass die $k$-te Ableitung von $T_n$ an der Stelle $x_0$ genau $f^{(k)}(x_0)$ ist.
Zum Beispiel ist $\left(\frac{f''(x_0)}{2}(x - x_0)^2\right)'' = \frac{f''(x_0)}{2}\cdot 2 = f''(x_0)$.

:::beispiel[Taylorpolynome an der Stelle 0]
1. **$e^x$:** Alle Ableitungen sind $e^x$, an der Stelle $0$ also $1$. Damit $T_3(x) = 1 + x + \frac{x^2}{2} + \frac{x^3}{6}$.
2. **$\sin x$:** Die Ableitungen sind $\sin, \cos, -\sin, -\cos$, an der Stelle $0$ also $0, 1, 0, -1$. Damit
   $T_3(x) = x - \frac{x^3}{6}$.
3. **$\cos x$:** $T_2(x) = 1 - \frac{x^2}{2}$. Das erklärt den Grenzwert $\frac{1 - \cos x}{x^2} \to \frac12$ aus
   [13.10 Die Regel von de l'Hospital](/lernen/mathe3/differenzierbarkeit/die-regel-von-de-l-hospital).

Zahlenprobe für $e^{0{,}5}$: $T_3(0{,}5) = 1 + 0{,}5 + 0{,}125 + 0{,}020\,833 = 1{,}645\,833$. Genau ist
$e^{0{,}5} = 1{,}648\,721\ldots$
:::

```plot
x: [-2.5, 2.5]
y: [-1, 8]
graphen:
  - { f: "exp(x)", label: "eˣ", farbe: 0 }
  - { f: "1 + x", label: "T₁ (Tangente)", farbe: 1, gestrichelt: true }
  - { f: "1 + x + x^2/2", label: "T₂", farbe: 2, gestrichelt: true }
  - { f: "1 + x + x^2/2 + x^3/6", label: "T₃", farbe: 3 }
beschriftung: Die e-Funktion und ihre Taylorpolynome vom Grad 1, 2 und 3 an der Stelle 0. Je höher der Grad, desto länger schmiegt sich das Polynom an die Kurve an.
```

:::achtung[Die Fakultät vergessen]
**Falsch:** „Das Taylorpolynom zweiten Grades von $e^x$ an der Stelle $0$ ist $1 + x + x^2$, also $e^{0{,}1} \approx 1{,}11$.“

**Richtig:** Der Koeffizient von $x^2$ ist $\frac{f''(0)}{2!} = \frac12$. Also $T_2(x) = 1 + x + \frac{x^2}{2}$ und
$e^{0{,}1} \approx 1 + 0{,}1 + 0{,}005 = 1{,}105$. Der genaue Wert ist $1{,}105\,17\ldots$ Probe für das richtige
Polynom: $T_2''(x) = 1 = f''(0)$. Beim falschen Polynom wäre die zweite Ableitung $2$.
:::

### Wie groß ist der Fehler? Das Restglied (Vertiefung)

Der Fehler $R_n(x) = f(x) - T_n(x)$ heißt **Restglied**. Für ihn gibt es eine genaue Formel. Sie verallgemeinert den
Mittelwertsatz, der genau der Fall $n = 0$ ist.

:::satz[Restglied nach Lagrange]
Ist $f$ auf einem Intervall um $x_0$ insgesamt $(n + 1)$-mal differenzierbar, so gibt es zu jedem $x$ eine Stelle
$\xi$ zwischen $x_0$ und $x$ mit
$$f(x) - T_n(x) = \frac{f^{(n+1)}(\xi)}{(n + 1)!}\,(x - x_0)^{n + 1}.$$
:::

Wie beim Mittelwertsatz kennt man $\xi$ nicht genau. Man weiß aber, zwischen welchen Grenzen es liegt, und kann den
Fehler damit nach oben abschätzen.

:::beispiel[Den Fehler von T₃ für e hoch 0,5 abschätzen]
Für $f(x) = e^x$, $x_0 = 0$, $n = 3$ und $x = 0{,}5$ ist $f^{(4)}(\xi) = e^\xi$ mit $0 < \xi < 0{,}5$.

1. **Schranke für die Ableitung:** $e^\xi < e^{0{,}5} < 2$, denn $e^{0{,}5} \approx 1{,}65$.
2. **Restglied abschätzen:** $|R_3(0{,}5)| < \frac{2}{4!}\cdot 0{,}5^4 = \frac{2}{24}\cdot 0{,}0625 \approx 0{,}0052$.
3. **Vergleich:** Der tatsächliche Fehler ist $1{,}648\,721 - 1{,}645\,833 \approx 0{,}0029$. Er liegt unter der Schranke.

Die Abschätzung garantiert also, dass $T_3(0{,}5)$ um weniger als $0{,}006$ vom wahren Wert abweicht. Dafür muss man
den genauen Wert gar nicht kennen.
:::

```reflexion
frage: Warum wird das Taylorpolynom in der Nähe von $x_0$ immer besser, je höher der Grad ist, aber weit weg davon nicht unbedingt?
antwort: |
  Das Restglied enthält den Faktor $(x - x_0)^{n + 1}$. Ist $|x - x_0| < 1$, wird dieser Faktor mit jedem weiteren Grad
  kleiner, und die Fakultät im Nenner wächst zusätzlich. Ist $x$ dagegen weit weg, wächst $(x - x_0)^{n + 1}$ schnell.
  Ob das Restglied dann klein wird, hängt davon ab, wie stark die Ableitungen $f^{(n+1)}$ wachsen. Bei $e^x$ gewinnt am
  Ende immer die Fakultät. Bei $\ln(1 + x)$ dagegen helfen höhere Grade für $x > 1$ gar nicht mehr. Ein Taylorpolynom
  ist also eine **lokale** Näherung, genau wie die Tangente.
```

### Übungen

```aufgabe
id: db-lin-wurzel
titel: Näherung mit der Tangente
niveau: 1
lernziel: 8
kompetenz: rechnen
angabe: |
  Berechne mit der linearen Näherung von $f(x) = \sqrt{x}$ an der Stelle $x_0 = 25$ einen Näherungswert für $\sqrt{26}$.
teile:
  - typ: zahl
    label: '$\sqrt{26} \approx$'
    loesung: "5 + 1/10"
    anzeige: '5{,}1'
    fehler:
      - wert: "5 + 1/5"
        meldung: 'Die Ableitung der Wurzel ist $\frac{1}{2\sqrt x}$. Bei $25$ ist das $\frac{1}{10}$, nicht $\frac15$.'
      - wert: "5"
        meldung: 'Das ist nur $\sqrt{25}$. Dazu kommt der Zuwachs $f''(25)\cdot(26 - 25)$.'
hinweise:
  - "$f(25) = 5$ und $f'(25) = \\frac{1}{2\\cdot 5}$."
loesung: |
  Ansatz: Linearisierung an der bekannten Stelle $25$, weil $26$ ganz nahe liegt. $f(25) = 5$, $f'(x) = \frac{1}{2\sqrt x}$, $f'(25) = \frac{1}{10}$.
  ---
  $\sqrt{26} \approx 5 + \frac{1}{10}\cdot(26 - 25) = 5{,}1$. Kontrolle: Der genaue Wert ist $5{,}0990\ldots$, der Fehler also etwa $0{,}001$.
```

```aufgabe
id: db-def-fehler
titel: Der Fehler der Tangente
niveau: 1
lernziel: 8
kompetenz: verstehen
angabe: |
  Für $f(x) = x^2 - x$ und $x_0 = 2$ gilt $f(2 + h) = f(2) + f'(2)\,h + r(h)$. Bestimme $f'(2)$ und den Fehlerterm $r(h)$.
teile:
  - typ: zahl
    label: "$f'(2)$"
    loesung: "2*2 - 1"
    anzeige: '3'
    fehler:
      - wert: "2"
        meldung: '$2 = f(2)$ ist der Funktionswert. Gesucht ist der Faktor vor $h$.'
  - typ: term
    label: '$r(h)$'
    variable: h
    loesung: "h^2"
    fehler:
      - wert: "3*h + h^2"
        meldung: 'Der lineare Teil $3h$ gehört zu $f''(2)\,h$. Der Fehler ist nur das, was danach übrig bleibt.'
hinweise:
  - 'Multipliziere $f(2 + h) = (2 + h)^2 - (2 + h)$ aus und sortiere nach Potenzen von $h$.'
loesung: |
  Ansatz: $f(2 + h)$ nach Potenzen von $h$ sortieren und mit $f(2) + k\,h + r(h)$ vergleichen. $f(2 + h) = 4 + 4h + h^2 - 2 - h = 2 + 3h + h^2$.
  ---
  Vergleich: $f(2) = 2$, der lineare Teil ist $3h$, also $f'(2) = 3$, und es bleibt $r(h) = h^2$. Probe: $\frac{r(h)}{h} = h \to 0$.
```

```aufgabe
id: db-taylor-exp
titel: Taylorpolynom einer verketteten e-Funktion
niveau: 2
lernziel: 8
kompetenz: rechnen
angabe: |
  Bestimme das Taylorpolynom zweiten Grades $T_2$ von $f(x) = e^{2x}$ an der Stelle $0$ und berechne damit einen
  Näherungswert für $e^{0{,}4} = f(0{,}2)$.
teile:
  - typ: term
    label: '$T_2(x)$'
    loesung: "1 + 2*x + 2*x^2"
    fehler:
      - wert: "1 + 2*x + 4*x^2"
        meldung: 'Der Koeffizient vor $x^2$ ist $\frac{f''''(0)}{2!} = \frac42$. Die Fakultät fehlt.'
      - wert: "1 + x + x^2/2"
        meldung: 'Das ist das Taylorpolynom von $e^x$. Bei $e^{2x}$ liefert die Kettenregel bei jeder Ableitung einen Faktor $2$.'
  - typ: zahl
    label: '$e^{0{,}4} \approx$'
    loesung: "1 + 2*0.2 + 2*0.2^2"
    anzeige: '1{,}48'
    fehler:
      - wert: "1 + 2*0.2 + 4*0.2^2"
        meldung: 'Im Polynom steht $2x^2$, nicht $4x^2$. Die Fakultät $2! = 2$ teilt $f''''(0) = 4$.'
      - wert: "1 + 2*0.4 + 2*0.4^2"
        meldung: 'Gesucht ist $f(0{,}2) = e^{2\cdot 0{,}2}$. Setze also $x = 0{,}2$ ein, nicht $0{,}4$.'
hinweise:
  - "$f'(x) = 2e^{2x}$ und $f''(x) = 4e^{2x}$. An der Stelle $0$: $1, 2, 4$."
  - 'Setze in $T_2(x) = f(0) + f''(0)\,x + \frac{f''''(0)}{2}\,x^2$ ein, dann $x = 0{,}2$.'
loesung: |
  Ansatz: Definition des Taylorpolynoms. Mit der Kettenregel: $f(0) = 1$, $f'(0) = 2e^0 = 2$, $f''(0) = 4e^0 = 4$.
  ---
  $T_2(x) = 1 + 2x + \frac{4}{2!}x^2 = 1 + 2x + 2x^2$.
  ---
  $T_2(0{,}2) = 1 + 0{,}4 + 0{,}08 = 1{,}48$. Kontrolle: $e^{0{,}4} = 1{,}4918\ldots$, der Fehler ist also etwa $0{,}012$. Er ist größer als bei kleineren $x$, weil $0{,}2$ hier wegen des Faktors $2$ wie $0{,}4$ wirkt.
```

```aufgabe
id: db-lin-zinsen
titel: Zinsen linear geschätzt
niveau: 2
lernziel: 8
kompetenz: modellieren
angabe: |
  Ein Kapital von $5000$ Euro wird vier Jahre lang mit $3\,\%$ pro Jahr verzinst.

  a) Schätze das Endkapital mit der Linearisierung $(1 + x)^4 \approx 1 + 4x$.

  b) Berechne das genaue Endkapital, gerundet auf Cent.
teile:
  - typ: zahl
    label: 'a) Näherung in Euro'
    einheit: Euro
    loesung: "5000*(1 + 4*0.03)"
    anzeige: '5600'
    fehler:
      - wert: "5000*(1 + 0.03)"
        meldung: 'Das ist nur ein Jahr. Die Linearisierung von $(1 + x)^4$ ist $1 + 4x$.'
      - wert: "5000*4*0.03"
        meldung: 'Das sind nur die Zinsen. Gefragt ist das Endkapital, also Kapital plus Zinsen.'
  - typ: zahl
    label: 'b) genau in Euro'
    einheit: Euro
    loesung: "5000*1.03^4"
    anzeige: '5627{,}54'
    toleranz: 0.01
    fehler:
      - wert: "5600"
        meldung: 'Das ist die Näherung aus a). Genau ist $5000\cdot 1{,}03^4$.'
hinweise:
  - 'Für a): $x = 0{,}03$, also $1 + 4\cdot 0{,}03 = 1{,}12$.'
  - 'Für b): $1{,}03^4$ mit dem Taschenrechner, dann mal $5000$.'
loesung: |
  Ansatz: Der Wachstumsfaktor $(1 + x)^4$ wird an der Stelle $x_0 = 0$ linearisiert: $f(0) = 1$ und $f'(0) = 4$.
  ---
  a) $5000\cdot(1 + 4\cdot 0{,}03) = 5000\cdot 1{,}12 = 5600$ Euro.
  ---
  b) $5000\cdot 1{,}03^4 = 5000\cdot 1{,}125\,508\,81 \approx 5627{,}54$ Euro.
  ---
  Die Näherung unterschätzt um etwa $27{,}54$ Euro. Grund: Die Zinseszinsen fehlen in der linearen Näherung, und $(1 + x)^4$ ist konvex, liegt also über seiner Tangente.
```

```aufgabe
id: db-lin-stelle-waehlen
titel: Die richtige Stelle zum Linearisieren
niveau: 2
lernziel: 8
kompetenz: begruenden
angabe: |
  Ein Mitschüler nähert $\sqrt{17}$ mit der Tangente an $\sqrt x$ bei $x_0 = 1$ und erhält $1 + \frac12\cdot 16 = 9$.

  a) Welche bekannte Stelle $x_0$ ist besser geeignet?

  b) Berechne damit die Näherung als Dezimalzahl.
teile:
  - typ: auswahl
    label: 'a) bessere Stelle'
    optionen: ['$x_0 = 16$', '$x_0 = 9$', '$x_0 = 25$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$9$ ist näher als $1$, aber $16$ liegt noch näher an $17$. Je näher, desto kleiner der Fehler.'
      - wert: 2
        meldung: '$25$ ist $8$ von $17$ entfernt, $16$ nur $1$.'
  - typ: zahl
    label: 'b) Näherung'
    loesung: "4 + 1/8"
    anzeige: '4{,}125'
    fehler:
      - wert: "4 + 1/4"
        meldung: 'Die Ableitung bei $16$ ist $\frac{1}{2\sqrt{16}} = \frac18$, nicht $\frac14$.'
hinweise:
  - 'Die Linearisierung ist nur nahe bei $x_0$ gut. Welche Quadratzahl liegt am nächsten an $17$?'
  - "$\\sqrt{16} = 4$ und $f'(16) = \\frac{1}{8}$."
loesung: |
  Ansatz: Der Fehler der Tangente wächst mit dem Abstand von $x_0$. Wir wählen deshalb die nächstgelegene Quadratzahl.
  ---
  a) $x_0 = 16$, denn $|17 - 16| = 1$ ist der kleinste Abstand zu einer Quadratzahl.
  ---
  b) $\sqrt{17} \approx 4 + \frac18\cdot 1 = 4{,}125$. Genau ist $\sqrt{17} \approx 4{,}1231$. Der Fehler ist etwa $0{,}0019$, statt mehr als $4{,}8$ beim Mitschüler.
```

```aufgabe
id: db-taylor-cos
titel: Taylorpolynom des Kosinus
niveau: 2
lernziel: 8
kompetenz: rechnen
angabe: |
  Bestimme das Taylorpolynom vierten Grades $T_4$ von $f(x) = \cos x$ an der Stelle $0$ und berechne damit $\cos 0{,}5$
  auf fünf Nachkommastellen.
teile:
  - typ: term
    label: '$T_4(x)$'
    loesung: "1 - x^2/2 + x^4/24"
    fehler:
      - wert: "1 - x^2/2 + x^4/4"
        meldung: 'Im Nenner steht $4! = 24$, nicht $4$.'
      - wert: "1 + x^2/2 + x^4/24"
        meldung: 'Die zweite Ableitung des Kosinus ist $-\cos x$, an der Stelle $0$ also $-1$. Das Vorzeichen bei $x^2$ ist negativ.'
  - typ: zahl
    label: '$\cos 0{,}5 \approx$'
    loesung: "1 - 0.25/2 + 0.0625/24"
    anzeige: '0{,}87760'
    toleranz: 0.00001
    fehler:
      - wert: "1 - 0.25/2 + 0.0625/4"
        meldung: 'Im letzten Summanden steht $4! = 24$ im Nenner, nicht $4$.'
      - wert: "1 - 0.5/2 + 0.5/24"
        meldung: 'Setze $x = 0{,}5$ in die **Potenzen** ein: $x^2 = 0{,}25$ und $x^4 = 0{,}0625$.'
hinweise:
  - 'Ableitungen: $\cos, -\sin, -\cos, \sin, \cos$. An der Stelle $0$: $1, 0, -1, 0, 1$.'
  - 'Nur die geraden Potenzen bleiben. Teile jeweils durch $k!$.'
gefuehrt:
  - text: 'Welchen Wert hat $f''''(0) = -\cos 0$?'
    teil:
      typ: zahl
      loesung: "-1"
      fehler:
        - wert: "1"
          meldung: 'Die zweite Ableitung von $\cos x$ ist $-\cos x$. Mit $\cos 0 = 1$ ist das $-1$.'
    erklaerung: '$f''''(0) = -1$. Der Summand ist also $\frac{-1}{2!}x^2 = -\frac{x^2}{2}$.'
  - text: 'Welchen Wert hat $f^{(4)}(0) = \cos 0$?'
    teil:
      typ: zahl
      loesung: "1"
    erklaerung: 'Nach vier Ableitungen ist man wieder beim Kosinus. Der Summand ist $\frac{1}{4!}x^4 = \frac{x^4}{24}$.'
  - text: 'Die ungeraden Ableitungen $-\sin 0$ und $\sin 0$ sind $0$. Berechne $T_4(0{,}5) = 1 - \frac{0{,}25}{2} + \frac{0{,}0625}{24}$.'
    teil:
      typ: zahl
      loesung: "1 - 0.125 + 0.0625/24"
      toleranz: 0.00001
    erklaerung: '$1 - 0{,}125 + 0{,}002\,604 = 0{,}877\,604$.'
loesung: |
  Ansatz: Taylorpolynom nach Definition. Die Ableitungen von $\cos$ wiederholen sich mit Periode $4$: $\cos, -\sin, -\cos, \sin, \cos$. An der Stelle $0$ ergeben sie $1, 0, -1, 0, 1$.
  ---
  $T_4(x) = 1 + 0\cdot x - \frac{1}{2!}x^2 + 0\cdot x^3 + \frac{1}{4!}x^4 = 1 - \frac{x^2}{2} + \frac{x^4}{24}$.
  ---
  $T_4(0{,}5) = 1 - 0{,}125 + 0{,}002\,604 \approx 0{,}87760$. Kontrolle mit dem Taschenrechner im Bogenmaß: $\cos 0{,}5 \approx 0{,}877\,583$. Der Fehler ist etwa $0{,}000\,02$.
```

```aufgabe
id: db-taylor-ln
titel: Taylorpolynom des Logarithmus mit Fehlerschranke
niveau: 3
lernziel: 8
kompetenz: rechnen
angabe: |
  Gegeben ist $f(x) = \ln(1 + x)$.

  a) Bestimme das Taylorpolynom $T_3$ an der Stelle $0$.

  b) Berechne $T_3(0{,}2)$ als Näherung für $\ln 1{,}2$.

  c) Schätze den Fehler mit dem Restglied nach Lagrange ab. Verwende $f^{(4)}(x) = -\frac{6}{(1 + x)^4}$.
teile:
  - typ: term
    label: 'a) $T_3(x)$'
    loesung: "x - x^2/2 + x^3/3"
    bereich: [-0.5, 0.5]
    fehler:
      - wert: "x - x^2/2 + x^3/6"
        meldung: '$f''''''(0) = 2$, und $\frac{2}{3!} = \frac{2}{6} = \frac13$. Vergiss nicht, den Ableitungswert in den Zähler zu schreiben.'
      - wert: "x + x^2/2 + x^3/3"
        meldung: '$f''''(x) = -\frac{1}{(1 + x)^2}$, an der Stelle $0$ also $-1$. Der Summand mit $x^2$ ist negativ.'
  - typ: zahl
    label: 'b) $T_3(0{,}2)$'
    loesung: "0.2 - 0.04/2 + 0.008/3"
    anzeige: '0{,}18267'
    toleranz: 0.00001
  - typ: zahl
    label: 'c) Fehlerschranke'
    loesung: "6/24*0.2^4"
    anzeige: '0{,}0004'
hinweise:
  - "$f'(x) = \\frac{1}{1 + x}$, $f''(x) = -\\frac{1}{(1 + x)^2}$, $f'''(x) = \\frac{2}{(1 + x)^3}$. An der Stelle $0$: $1, -1, 2$."
  - 'Restglied: $|R_3(0{,}2)| = \frac{|f^{(4)}(\xi)|}{4!}\cdot 0{,}2^4$ mit $0 < \xi < 0{,}2$. Schätze $\frac{6}{(1 + \xi)^4}$ durch $6$ ab.'
loesung: |
  Ansatz: Ableitungen an der Stelle $0$ bestimmen und in die Definition einsetzen. $f(0) = \ln 1 = 0$, $f'(0) = 1$, $f''(0) = -1$, $f'''(0) = 2$.
  ---
  a) $T_3(x) = 0 + x - \frac{1}{2}x^2 + \frac{2}{6}x^3 = x - \frac{x^2}{2} + \frac{x^3}{3}$.
  ---
  b) $T_3(0{,}2) = 0{,}2 - 0{,}02 + 0{,}002\,667 \approx 0{,}18267$.
  ---
  c) Für $0 < \xi < 0{,}2$ ist $(1 + \xi)^4 > 1$, also $|f^{(4)}(\xi)| < 6$. Damit $|R_3(0{,}2)| < \frac{6}{24}\cdot 0{,}2^4 = 0{,}25\cdot 0{,}0016 = 0{,}0004$.
  ---
  Kontrolle: $\ln 1{,}2 \approx 0{,}182\,32$. Der tatsächliche Fehler ist etwa $0{,}000\,35$ und liegt unter der Schranke $0{,}0004$.
```

```aufgabe
id: db-taylor-e-stellen
titel: Wie viele Summanden für e?
niveau: 3
lernziel: 8
kompetenz: anwenden
angabe: |
  Die Zahl $e = e^1$ soll mit dem Taylorpolynom $T_n$ von $e^x$ an der Stelle $0$ so genau berechnet werden, dass der
  Fehler kleiner als $0{,}0005$ ist. Verwende die Restgliedabschätzung $|R_n(1)| < \frac{3}{(n + 1)!}$, die aus
  $e^\xi < e < 3$ folgt. Welches ist der kleinste Grad $n$, der das garantiert?
teile:
  - typ: zahl
    label: 'kleinster Grad $n$'
    loesung: "7"
    fehler:
      - wert: "6"
        meldung: 'Für $n = 6$ ist $(n + 1)! = 7! = 5040$, und $\frac{3}{5040} \approx 0{,}000\,595$. Das ist noch größer als $0{,}0005$.'
      - wert: "8"
        meldung: 'Für $n = 7$ ist $\frac{3}{8!} = \frac{3}{40\,320} \approx 0{,}000\,074$. Das reicht schon.'
hinweise:
  - 'Gesucht ist das kleinste $n$ mit $\frac{3}{(n + 1)!} < 0{,}0005$, also $(n + 1)! > 6000$.'
  - 'Berechne $6! = 720$, $7! = 5040$, $8! = 40\,320$.'
loesung: |
  Ansatz: Die Restgliedschranke muss unter $0{,}0005$ liegen: $\frac{3}{(n + 1)!} < 0{,}0005$, also $(n + 1)! > 6000$.
  ---
  $7! = 5040 < 6000$, aber $8! = 40\,320 > 6000$. Also $n + 1 = 8$ und $n = 7$.
  ---
  Kontrolle: $T_7(1) = 1 + 1 + \frac12 + \frac16 + \frac1{24} + \frac1{120} + \frac1{720} + \frac1{5040} \approx 2{,}718\,25$. Genau ist $e \approx 2{,}718\,28$. Der Fehler von etwa $0{,}000\,03$ liegt deutlich unter $0{,}0005$.
```

## Gemischte Wiederholung

In diesem Abschnitt sind Aufgaben aus dem ganzen Kapitel gemischt, dazu Aufgaben, die Stoff aus früheren Kapiteln
aufgreifen. Vor jeder Aufgabe steht die wichtigste Frage der Prüfung: **Welches Werkzeug passt hier?** Nimm dir diese
Frage bewusst vor, bevor du zu rechnen beginnst. Genau dieses Erkennen trainiert man nicht, wenn man nur Aufgaben eines
einzigen Abschnitts hintereinander löst.

```aufgabe
id: db-mix-verfahren-naht
titel: "Welches Verfahren passt? Eine Nahtstelle"
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Du sollst prüfen, ob
  $$f(x) = \begin{cases} x^2 + 2, & x < 1 \\ 2x, & x \ge 1 \end{cases}$$
  an der Stelle $1$ differenzierbar ist. Du musst nicht rechnen. Womit beginnst du?
teile:
  - typ: auswahl
    optionen:
      - 'mit der Stetigkeit: linksseitigen Grenzwert und $f(1)$ vergleichen'
      - 'mit den Ableitungen der Stücke: $2x$ und $2$ an der Stelle $1$ vergleichen'
      - 'mit der Regel von de l''Hospital'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Gleiche Steigungen helfen nichts, wenn die Stücke auf verschiedenen Höhen enden. Hier ist das sogar der Fall: von links $3$, aber $f(1) = 2$.'
      - wert: 2
        meldung: 'Die Regel von de l''Hospital ist für Grenzwerte vom Typ $\frac00$ gedacht, nicht für Nahtstellen.'
hinweise:
  - 'Was ist der erste Schritt im Rezept für Nahtstellen, und warum?'
loesung: |
  Zuerst die Stetigkeit, denn eine unstetige Funktion ist nie differenzierbar. Das ist die Kontraposition von „differenzierbar, also stetig“.
  ---
  Hier: von links $1 + 2 = 3$, aber $f(1) = 2$. Also springt $f$ und ist bei $1$ nicht differenzierbar, obwohl beide Stücke dort die Steigung $2$ haben.
```

```aufgabe
id: db-mix-verfahren-satz
titel: "Welches Verfahren passt? Drei Fragen, drei Sätze"
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Ordne jeder Frage den passenden Satz zu. Du musst nicht rechnen.

  a) Hat $x^3 + x - 1 = 0$ eine Lösung zwischen $0$ und $1$?

  b) Gab es auf einer Fahrt von $150$ km in $2$ Stunden einen Moment mit genau $75$ km/h?

  c) Wie groß ist $\displaystyle\lim_{x\to 0}\frac{\sin(3x)}{x}$?
teile:
  - typ: auswahl
    label: 'a)'
    optionen: ['Zwischenwertsatz', 'Mittelwertsatz', 'Regel von de l''Hospital']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Der Mittelwertsatz liefert eine Stelle mit bestimmter **Steigung**. Für eine Nullstelle braucht man einen Vorzeichenwechsel der Funktionswerte, also den Zwischenwertsatz aus Kapitel 12.'
      - wert: 2
        meldung: 'Hier ist kein Grenzwert gesucht, sondern eine Nullstelle.'
  - typ: auswahl
    label: 'b)'
    optionen: ['Zwischenwertsatz', 'Mittelwertsatz', 'Regel von de l''Hospital']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Gesucht ist eine Momentangeschwindigkeit, also eine Ableitung, die gleich dem Durchschnitt ist. Das ist die Aussage des Mittelwertsatzes.'
      - wert: 2
        meldung: 'Hier ist kein Grenzwert gesucht.'
  - typ: auswahl
    label: 'c)'
    optionen: ['Zwischenwertsatz', 'Mittelwertsatz', 'Regel von de l''Hospital']
    richtig: [2]
    fehler:
      - wert: 1
        meldung: 'Gesucht ist ein Grenzwert vom Typ $\frac00$. Dafür ist de l''Hospital gemacht.'
      - wert: 0
        meldung: 'Der Zwischenwertsatz liefert Stellen mit vorgegebenem Funktionswert, keine Grenzwerte.'
hinweise:
  - 'Frage dich jeweils: Wird eine Nullstelle, eine Steigung oder ein Grenzwert gesucht?'
loesung: |
  a) Nullstelle zwischen $0$ und $1$: Zwischenwertsatz, denn $f(0) = -1 < 0 < 1 = f(1)$ und $f$ ist stetig.
  ---
  b) Durchschnitt $75$ km/h, gesucht eine Momentangeschwindigkeit gleich dem Durchschnitt: Mittelwertsatz.
  ---
  c) Typ $\frac00$: de l'Hospital liefert $\lim\frac{3\cos(3x)}{1} = 3$.
```

```aufgabe
id: db-mix-folge
titel: Ein Folgengrenzwert zum Vergleich
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Berechne den Grenzwert der Folge $a_n = \dfrac{2n^2 + 1}{n^2 + 3}$ für $n \to \infty$.
  Aus [Kapitel 11, „Rationale Folgen, Wurzeltrick und Standardgrenzwerte“](/lernen/mathe3/grenzwerte-folgen/rationale-folgen-wurzeltrick-und-standardgrenzwerte).
teile:
  - typ: zahl
    label: '$\lim a_n$'
    loesung: "2"
    fehler:
      - wert: "1/3"
        meldung: 'Das ist $a_0 = \frac13$, also der Wert bei $n = 0$. Gesucht ist das Verhalten für sehr große $n$.'
      - wert: "0"
        meldung: 'Zähler und Nenner wachsen beide wie $n^2$. Der Bruch geht gegen das Verhältnis der Leitkoeffizienten.'
hinweise:
  - 'Klammere im Zähler und im Nenner die höchste Potenz $n^2$ aus.'
loesung: |
  Ansatz wie in Kapitel 11: höchste Potenz ausklammern. $a_n = \dfrac{n^2(2 + \frac{1}{n^2})}{n^2(1 + \frac{3}{n^2})} = \dfrac{2 + \frac{1}{n^2}}{1 + \frac{3}{n^2}}$.
  ---
  Für $n \to \infty$ gehen $\frac{1}{n^2}$ und $\frac{3}{n^2}$ gegen $0$, also $a_n \to \frac21 = 2$. Zum Vergleich: Für die Funktion $\frac{2x^2 + 1}{x^2 + 3}$ würde de l'Hospital zweimal angewendet ebenfalls $\frac{4}{2} = 2$ liefern.
```

```aufgabe
id: db-mix-kurve
titel: Hochpunkt aus Kapitel 9
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Bestimme den Hochpunkt von $f(x) = x^3 - 3x$. Gib die beiden Koordinaten an.
  Aus [Kapitel 9, „Monotonie und Extremstellen“](/lernen/mathe3/differentialrechnung/monotonie-und-extremstellen).
teile:
  - typ: zahl
    label: '$x$-Koordinate'
    loesung: "-1"
    fehler:
      - wert: "1"
        meldung: 'Bei $x = 1$ ist $f''''(1) = 6 > 0$, dort liegt der Tiefpunkt.'
  - typ: zahl
    label: '$y$-Koordinate'
    loesung: "(-1)^3 - 3*(-1)"
    anzeige: '2'
    fehler:
      - wert: "-2"
        meldung: '$-2 = f(1)$ gehört zum Tiefpunkt. Setze $x = -1$ ein: $-1 + 3 = 2$.'
hinweise:
  - "$f'(x) = 3x^2 - 3$ und $f''(x) = 6x$."
loesung: |
  Ansatz: notwendige Bedingung $f'(x) = 0$, dann $f''$. $f'(x) = 3x^2 - 3 = 0$ ergibt $x = \pm 1$.
  ---
  $f''(-1) = -6 < 0$, also Hochpunkt bei $x = -1$ mit $f(-1) = -1 + 3 = 2$. Der Hochpunkt ist $(-1 \mid 2)$. Exakt begründet ist das Kriterium in [13.9 Extremstellen und Krümmung](/lernen/mathe3/differenzierbarkeit/extremstellen-und-kruemmung-exakt-begruenden).
```

```aufgabe
id: db-mix-stamm
titel: Eine Stammfunktion festlegen
niveau: 1
lernziel: 6
kompetenz: anwenden
angabe: |
  $F$ ist eine Stammfunktion von $f(x) = 2x$, also $F' = f$, und es gilt $F(0) = 1$. Berechne $F(3)$.
  Aus [Kapitel 10, „Stammfunktionen: Ableiten rückwärts“](/lernen/mathe3/integralrechnung/stammfunktionen-ableiten-rueckwaerts).
teile:
  - typ: zahl
    label: '$F(3)$'
    loesung: "3^2 + 1"
    anzeige: '10'
    fehler:
      - wert: "9"
        meldung: 'Das ist $3^2$ ohne Konstante. Wegen $F(0) = 1$ ist $F(x) = x^2 + 1$.'
      - wert: "6"
        meldung: 'Das ist $f(3) = 2\cdot 3$. Gesucht ist der Wert der Stammfunktion.'
hinweise:
  - 'Alle Stammfunktionen von $2x$ haben die Form $x^2 + C$.'
loesung: |
  Ansatz: Nach dem Konstanzkriterium unterscheiden sich zwei Stammfunktionen auf einem Intervall nur um eine Konstante. Also $F(x) = x^2 + C$.
  ---
  $F(0) = C = 1$, also $F(x) = x^2 + 1$ und $F(3) = 10$.
```

```aufgabe
id: db-mix-fortsetzung
titel: Eine Lücke stetig füllen
niveau: 1
lernziel: 7
kompetenz: anwenden
angabe: |
  Die Funktion $g(x) = \dfrac{e^x - 1}{x}$ ist bei $x = 0$ nicht definiert. Welchen Wert muss man für $g(0)$ wählen,
  damit $g$ dort stetig wird?
  Aus [Kapitel 12, „Unstetigkeitsstellen und stetige Fortsetzung“](/lernen/mathe3/grenzwerte-stetigkeit/unstetigkeitsstellen-und-stetige-fortsetzung).
teile:
  - typ: zahl
    label: '$g(0)$'
    loesung: "exp(0)"
    anzeige: '1'
    fehler:
      - wert: "0"
        meldung: 'Einsetzen gibt $\frac00$, nicht $0$. Bestimme den Grenzwert, etwa mit de l''Hospital.'
      - wert: "e"
        meldung: 'Nach dem Ableiten steht $\frac{e^x}{1}$. An der Stelle $0$ ist das $e^0 = 1$, nicht $e$.'
hinweise:
  - 'Stetig fortsetzen heißt: $g(0)$ gleich dem Grenzwert $\lim_{x\to 0} g(x)$ setzen.'
loesung: |
  Ansatz: Eine stetige Fortsetzung bekommt als Funktionswert den Grenzwert. Typ $\frac00$, also de l'Hospital: $\lim_{x\to 0}\frac{e^x}{1} = 1$.
  ---
  Mit $g(0) = 1$ ist $g$ stetig. Das ist kein Zufall: $\frac{e^x - 1}{x}$ ist der Differenzenquotient der e-Funktion an der Stelle $0$, und deren Ableitung dort ist $1$.
```

```aufgabe
id: db-mix-trig
titel: Ableitung mit einem exakten Winkelwert
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Gib die Steigung von $f(x) = \sin x$ an der Stelle $x = \frac{\pi}{3}$ exakt an.
  Aus [Kapitel 5, „Besondere Werte und Quadrantenbeziehungen“](/lernen/mathe3/trigonometrie/besondere-werte-und-quadrantenbeziehungen).
teile:
  - typ: zahl
    label: "$f'\\left(\\tfrac\\pi3\\right)$"
    loesung: "cos(pi/3)"
    anzeige: '\tfrac12'
    fehler:
      - wert: "sqrt(3)/2"
        meldung: '$\frac{\sqrt3}{2} = \sin\frac\pi3$ ist der Funktionswert. Die Steigung ist $\cos\frac\pi3$.'
      - wert: "cos(inRad(pi/3))"
        meldung: 'Der Taschenrechner stand auf DEG. $\frac\pi3$ ist ein Winkel im Bogenmaß, also $60°$.'
hinweise:
  - "$(\\sin x)' = \\cos x$, und $\\frac\\pi3$ entspricht $60°$."
loesung: |
  Ansatz: $(\sin x)' = \cos x$, gültig im Bogenmaß.
  ---
  $f'\left(\frac\pi3\right) = \cos\frac\pi3 = \cos 60° = \frac12$.
```

```aufgabe
id: db-mix-wachstum
titel: Momentane Wachstumsrate
niveau: 1
lernziel: 3
kompetenz: anwenden
angabe: |
  Eine Bakterienkultur wächst nach $N(t) = 200\,e^{0{,}03\,t}$. Dabei ist $t$ die Zeit in Stunden. Berechne die
  momentane Wachstumsrate $N'(10)$ in Bakterien pro Stunde, gerundet auf eine Nachkommastelle.
  Aus [Kapitel 4, „Wachstums- und Zerfallsmodelle“](/lernen/mathe3/funktionen/wachstums-und-zerfallsmodelle).
teile:
  - typ: zahl
    label: "$N'(10)$"
    einheit: Bakterien pro Stunde
    loesung: "200*0.03*exp(0.3)"
    anzeige: '8{,}1'
    fehler:
      - wert: "200*exp(0.3)"
        meldung: 'Das ist $N(10)$, der Bestand. Die Wachstumsrate ist die Ableitung, mit dem Faktor $0{,}03$ aus der Kettenregel.'
      - wert: "200*0.03"
        meldung: 'Das ist die Rate zur Zeit $0$. Zur Zeit $10$ kommt der Faktor $e^{0{,}3}$ dazu.'
hinweise:
  - "Kettenregel: $(e^{0{,}03t})' = 0{,}03\\,e^{0{,}03t}$."
loesung: |
  Ansatz: Die momentane Wachstumsrate ist die Ableitung. Mit der Kettenregel: $N'(t) = 200\cdot 0{,}03\,e^{0{,}03t} = 6\,e^{0{,}03t}$.
  ---
  $N'(10) = 6\,e^{0{,}3} \approx 6\cdot 1{,}3499 \approx 8{,}1$ Bakterien pro Stunde. Deutung: Zur Zeit $10$ h kommen gerade etwa $8$ Bakterien pro Stunde dazu.
```

```aufgabe
id: db-mix-zwei-betraege
titel: Zwei Beträge, zwei Knicke?
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: |
  Gegeben ist $f(x) = |x - 1| + |x + 1|$.

  a) Ist $f$ an der Stelle $0$ differenzierbar? Gib gegebenenfalls $f'(0)$ an.

  b) Bestimme die einseitigen Ableitungen an der Stelle $1$.
teile:
  - typ: zahl
    label: "a) $f'(0)$"
    loesung: "0"
    fehler:
      - wert: "2"
        meldung: 'Zwischen $-1$ und $1$ ist $|x - 1| = 1 - x$ und $|x + 1| = x + 1$. Die Summe ist konstant $2$, ihre Ableitung also $0$.'
  - typ: zahl
    label: "b) $f'_-(1)$"
    loesung: "0"
    fehler:
      - wert: "-1"
        meldung: 'Links von $1$ (bis $-1$) ist $f(x) = 2$, eine Konstante. Ihre Steigung ist $0$.'
  - typ: zahl
    label: "b) $f'_+(1)$"
    loesung: "2"
    fehler:
      - wert: "1"
        meldung: 'Rechts von $1$ sind beide Beträge positiv: $f(x) = (x - 1) + (x + 1) = 2x$. Die Steigung ist $2$.'
hinweise:
  - 'Löse beide Beträge in den drei Bereichen $x < -1$, $-1 \le x \le 1$ und $x > 1$ auf.'
  - 'Zwischen $-1$ und $1$ ist $f(x) = 2$, rechts von $1$ ist $f(x) = 2x$.'
loesung: |
  Ansatz: Beträge bereichsweise auflösen. Für $-1 \le x \le 1$ ist $f(x) = (1 - x) + (x + 1) = 2$. Für $x > 1$ ist $f(x) = 2x$, für $x < -1$ ist $f(x) = -2x$.
  ---
  a) In der Nähe von $0$ ist $f$ konstant $2$. Also ist $f$ dort differenzierbar mit $f'(0) = 0$.
  ---
  b) An der Stelle $1$ ist $f$ stetig, denn beide Stücke haben den Wert $2$. Links ist die Steigung $0$, rechts $2$. Also hat $f$ bei $1$ einen Knick. Ebenso bei $-1$.
```

## Prüfungsaufgaben

Die folgenden Aufgaben entsprechen dem Niveau der schriftlichen Prüfung. Jede hat einen Zeitrichtwert. Rechne sie mit
Stoppuhr und ohne Hilfen, so wie in der Prüfung: Ein nicht grafikfähiger Taschenrechner und die Formelsammlung sind
erlaubt. Bei Theorieteilen zählt die saubere Begründung: Definition hinschreiben, Voraussetzungen prüfen, Schluss
ziehen. Schreib zu jedem Teil zuerst den Ansatz hin, denn dafür gibt es auch dann Punkte, wenn sich später ein
Rechenfehler einschleicht.

```aufgabe
id: db-pruefung-winkler
titel: Funktionen aus zwei Stücken
niveau: 3
lernziel: 4
kompetenz: begruenden
punkte: 10
quelle: nach Musterprüfung Winkler, Aufgabe 5 (abgewandelt)
angabe: |
  Zeitrichtwert: $20$ Minuten.

  Eine Funktion $f$ wird durch zwei Funktionen $f_-$ und $f_+$ festgelegt: $f(x) = f_-(x)$ für $x < 2$ und
  $f(x) = f_+(x)$ für $x > 2$. Der Wert $f(2)$ wird eigens angegeben.

  a) Die Funktion $f(x) = |x - 2|$ lässt sich so schreiben, mit $f_-(x) = 2 - x$, $f_+(x) = x - 2$ und $f(2) = 0$.
  Die Ableitungen von $f_-$ und $f_+$ sind konstant. Mit welchen Werten?

  b) Erkläre mit einer Skizze, warum $f$ bei $x = 2$ keine Ableitung hat.

  c) Gib Funktionen $g_-$ und $g_+$ an, sodass die zusammengesetzte Funktion $g$ bei $2$ nicht stetig sein kann, egal
  wie man $g(2)$ wählt.

  d) Nun sei $h_-(x) = e^{2x - 4}$ und $h_+(x) = 2x - 3 + (x - 2)^3$. Wie muss $h(2)$ gewählt werden, damit $h$ bei $2$ stetig ist?

  e) Mit dieser Wahl ist $h$ bei $2$ sogar differenzierbar. Welchen Wert hat $h'(2)$?
teile:
  - typ: zahl
    label: "a) $f_-'(x)$"
    loesung: "-1"
    fehler:
      - wert: "1"
        meldung: 'Das linke Stück ist $2 - x$. Seine Ableitung ist $-1$.'
  - typ: zahl
    label: "a) $f_+'(x)$"
    loesung: "1"
  - typ: text
    label: 'b) Skizze und Deutung'
    muster: |
      Der Graph ist ein „V“ mit der Spitze im Punkt $(2 \mid 0)$: links die Halbgerade mit Steigung $-1$, rechts die mit
      Steigung $+1$. An der Spitze ist ein Knick. Sekanten von rechts haben immer Steigung $1$, von links immer $-1$.
      Es gibt keine gemeinsame Grenzlage, also keine Tangente und keine Ableitung. Formal: $f'_+(2) = 1 \ne -1 = f'_-(2)$.
  - typ: text
    label: 'c) Beispiel'
    muster: |
      Zum Beispiel $g_-(x) = 0$ und $g_+(x) = 1$. Dann ist $\lim_{x\to 2^-}g(x) = 0 \ne 1 = \lim_{x\to 2^+}g(x)$. Die
      einseitigen Grenzwerte sind verschieden, der Grenzwert existiert nicht, und kein Wert $g(2)$ macht $g$ stetig.
      Allgemein funktioniert jede Wahl mit $g_-(2) \ne g_+(2)$, wenn beide Stücke stetig sind.
  - typ: zahl
    label: 'd) $h(2)$'
    loesung: "exp(0)"
    anzeige: '1'
    fehler:
      - wert: "e^2"
        meldung: 'An der Stelle $2$ ist die Hochzahl $2\cdot 2 - 4 = 0$. Also $e^0 = 1$.'
  - typ: zahl
    label: "e) $h'(2)$"
    loesung: "2*exp(0)"
    anzeige: '2'
    fehler:
      - wert: "1"
        meldung: 'Kettenregel: $(e^{2x - 4})'' = 2e^{2x - 4}$, an der Stelle $2$ also $2$.'
hinweise:
  - 'Zu c): Die beiden Stücke müssen bei $2$ verschiedenen Werten zustreben.'
  - 'Zu d): Berechne $\lim_{x\to 2^-}e^{2x - 4}$ und $\lim_{x\to 2^+}\big(2x - 3 + (x - 2)^3\big)$.'
  - 'Zu e): Vergleiche $h_-''(2)$ und $h_+''(2)$. Beim rechten Stück verschwindet die Ableitung von $(x - 2)^3$ an der Stelle $2$.'
loesung: |
  **a)** Ansatz: die Stücke ableiten. $f_-'(x) = (2 - x)' = -1$ und $f_+'(x) = (x - 2)' = 1$.
  ---
  **b)** Skizze: „V“ mit Spitze bei $(2 \mid 0)$. Rechts von $2$ hat der Graph Steigung $1$, links Steigung $-1$. An der Spitze müsste die Tangente beide Steigungen gleichzeitig haben. Formal: $f'_+(2) = \lim_{h\to 0^+}\frac{|h|}{h} = 1 \ne -1 = f'_-(2)$.
  ---
  **c)** $g_-(x) = 0$, $g_+(x) = 1$. Die einseitigen Grenzwerte $0$ und $1$ sind verschieden. Welcher Wert $g(2)$ auch gewählt wird, er kann nicht mit beiden übereinstimmen.
  ---
  **d)** $\lim_{x\to 2^-}e^{2x - 4} = e^0 = 1$ und $\lim_{x\to 2^+}\big(2x - 3 + (x - 2)^3\big) = 4 - 3 + 0 = 1$. Beide sind gleich, also mit $h(2) = 1$ stetig.
  ---
  **e)** Links: $h_-'(x) = 2e^{2x - 4}$, also $h_-'(2) = 2$. Rechts: $h_+'(x) = 2 + 3(x - 2)^2$, also $h_+'(2) = 2$. Weil $h$ stetig ist, sind das die einseitigen Ableitungen. Sie stimmen überein, also $h'(2) = 2$. Beide Stücke haben bei $(2 \mid 1)$ dieselbe Tangente $y = 2x - 3$.
```

```aufgabe
id: db-pruefung-parameter
titel: Glatter Übergang zu einer Wurzelfunktion
niveau: 3
lernziel: 4
kompetenz: rechnen
punkte: 10
angabe: |
  Zeitrichtwert: $15$ Minuten.

  Ein Bauteil hat im Querschnitt das Profil
  $$f(x) = \begin{cases} x^2 + a, & x \le 1 \\ b\sqrt{x}, & x > 1 \end{cases}$$
  mit reellen Parametern $a$ und $b$. Dabei sind $x$ und $f(x)$ in Zentimetern gemessen.

  a) Bestimme $a$ und $b$ so, dass $f$ bei $x = 1$ differenzierbar ist. Begründe, warum dafür zwei Bedingungen nötig sind.

  b) Gib $f'(1)$ an.

  c) Bestimme mit diesen Werten die Gleichung der Tangente an den Graphen von $f$ an der Stelle $x = 4$.
teile:
  - typ: zahl
    label: '$a$'
    loesung: "3"
    fehler:
      - wert: "1"
        meldung: 'Aus der Stetigkeit folgt $1 + a = b$. Mit $b = 4$ ist $a = 3$.'
  - typ: zahl
    label: '$b$'
    loesung: "4"
    fehler:
      - wert: "1"
        meldung: 'Die Ableitung von $b\sqrt x$ ist $\frac{b}{2\sqrt x}$. Bei $1$ ist das $\frac b2$, und das muss gleich $2$ sein.'
  - typ: zahl
    label: "$f'(1)$"
    loesung: "2"
  - typ: term
    label: 'Tangente $t(x)$ bei $x = 4$'
    loesung: "x + 4"
    fehler:
      - wert: "2*x"
        meldung: 'Bei $x = 4$ gilt das rechte Stück $4\sqrt x$. Seine Steigung dort ist $\frac{2}{\sqrt4} = 1$, nicht $2$.'
hinweise:
  - 'Differenzierbar setzt stetig voraus. Also zuerst die Stetigkeitsbedingung $1 + a = b$.'
  - "$(b\\sqrt x)' = \\frac{b}{2\\sqrt x}$, bei $x = 1$ also $\\frac b2$. Gleichsetzen mit der Steigung $2$ des linken Stücks."
  - 'Für c) gilt bei $x = 4$ das rechte Stück.'
loesung: |
  **a)** Ansatz: Differenzierbarkeit setzt Stetigkeit voraus, sonst gäbe es einen Sprung und keine Ableitung. Deshalb braucht man zwei Bedingungen. Stetigkeit bei $1$: $1^2 + a = b\sqrt1$, also $1 + a = b$.
  ---
  Gleiche einseitige Ableitungen: links $2x\big|_{x=1} = 2$, rechts $\frac{b}{2\sqrt x}\big|_{x=1} = \frac b2$. Also $\frac b2 = 2$, $b = 4$, und $a = b - 1 = 3$.
  ---
  **b)** $f'(1) = 2$.
  ---
  **c)** Für $x > 1$ ist $f(x) = 4\sqrt x$, also $f(4) = 8$, $f'(x) = \frac{2}{\sqrt x}$ und $f'(4) = 1$. Tangente: $t(x) = 8 + 1\cdot(x - 4) = x + 4$. Probe: $t(4) = 8 = f(4)$.
```

```aufgabe
id: db-pruefung-mws
titel: Mittelwertsatz und Satz von Rolle
niveau: 3
lernziel: 5
kompetenz: begruenden
punkte: 8
angabe: |
  Zeitrichtwert: $15$ Minuten.

  Gegeben ist $f(x) = x^3 - 6x$.

  a) Begründe, dass $f$ auf $[-3, 3]$ die Voraussetzungen des Mittelwertsatzes erfüllt, und bestimme alle
  Zwischenstellen $\xi \in (-3, 3)$, deren Existenz der Satz garantiert.

  b) Zeige, dass auf $[-\sqrt6, \sqrt6]$ der Satz von Rolle anwendbar ist, und bestimme die positive Rolle-Stelle.

  c) Deute das Ergebnis von a) geometrisch.
teile:
  - typ: menge
    label: 'a) alle $\xi$'
    loesung: ["sqrt(3)", "-sqrt(3)"]
    fehler:
      - wert: ["sqrt(3)"]
        meldung: '$\xi^2 = 3$ hat zwei Lösungen, und beide liegen in $(-3, 3)$.'
      - wert: ["sqrt(2)", "-sqrt(2)"]
        meldung: 'Das sind die Nullstellen von $f''$, also die Rolle-Stellen. Beim Mittelwertsatz ist $f''(\xi)$ gleich der Sekantensteigung $3$.'
  - typ: zahl
    label: 'b) positive Rolle-Stelle'
    loesung: "sqrt(2)"
    anzeige: '\sqrt2 \approx 1{,}414'
    fehler:
      - wert: "sqrt(6)"
        meldung: '$\sqrt6$ ist der Rand des Intervalls und eine Nullstelle von $f$. Gesucht ist die Stelle mit $f''(\xi) = 0$.'
  - typ: text
    label: 'c) Deutung'
    muster: |
      Die Sekante durch $(-3 \mid -9)$ und $(3 \mid 9)$ hat die Steigung $3$. An den Stellen $\xi = \pm\sqrt3 \approx \pm 1{,}732$
      ist die Tangente parallel zu dieser Sekante. Der Satz garantiert mindestens eine solche Stelle, hier gibt es zwei.
hinweise:
  - '$f(3) = 27 - 18 = 9$ und $f(-3) = -9$.'
  - 'Mittelwertsatz: $3\xi^2 - 6 = 3$. Rolle: $3\xi^2 - 6 = 0$.'
loesung: |
  **a)** Ansatz: Polynome sind überall stetig und differenzierbar, also sind die Voraussetzungen erfüllt. Sekantensteigung: $\frac{f(3) - f(-3)}{6} = \frac{9 - (-9)}{6} = 3$.
  ---
  $f'(\xi) = 3\xi^2 - 6 = 3$ ergibt $\xi^2 = 3$, also $\xi = \pm\sqrt3 \approx \pm 1{,}732$. Beide liegen in $(-3, 3)$.
  ---
  **b)** $f(\pm\sqrt6) = \pm\sqrt6\,(6 - 6) = 0$, also $f(-\sqrt6) = f(\sqrt6)$. Stetigkeit und Differenzierbarkeit wie in a). $f'(\xi) = 3\xi^2 - 6 = 0$ ergibt $\xi = \pm\sqrt2$. Die positive Stelle ist $\xi = \sqrt2 \approx 1{,}414$.
  ---
  **c)** Die Tangenten in $\xi = \pm\sqrt3$ sind parallel zur Sekante durch die Randpunkte $(-3 \mid -9)$ und $(3 \mid 9)$. Der Satz garantiert mindestens eine solche Stelle, hier gibt es zwei.
```

```aufgabe
id: db-pruefung-lhospital
titel: Grenzwerte mit de l'Hospital
niveau: 3
lernziel: 7
kompetenz: rechnen
punkte: 8
angabe: |
  Zeitrichtwert: $15$ Minuten.

  a) Berechne $\displaystyle\lim_{x\to 0}\frac{e^{3x} - 1 - 3x}{x^2}$.

  b) Berechne $\displaystyle\lim_{x\to\infty}\frac{x^3}{e^{2x}}$.

  c) Berechne $\displaystyle\lim_{x\to 0^+}\sqrt{x}\,\ln x$.

  d) Nenne die Voraussetzungen der Regel von de l'Hospital und zeige an einem Beispiel, was bei Missachtung passiert.
teile:
  - typ: zahl
    label: 'a)'
    loesung: "9/2"
    anzeige: '\tfrac92'
    fehler:
      - wert: "3/2"
        meldung: 'Beim zweiten Ableiten gibt die Kettenregel noch einmal den Faktor $3$: $(3e^{3x})'' = 9e^{3x}$.'
      - wert: "0"
        meldung: 'Nach dem ersten Ableiten steht $\frac{3e^{3x} - 3}{2x}$, wieder $\frac00$. Noch einmal ableiten.'
  - typ: zahl
    label: 'b)'
    loesung: "0"
  - typ: zahl
    label: 'c)'
    loesung: "0"
    fehler:
      - wert: "-1/2"
        meldung: 'Nach dem Ableiten steht $-2\sqrt x$. Das muss man noch für $x \to 0^+$ auswerten.'
  - typ: text
    label: 'd)'
    muster: |
      $f$ und $g$ sind in einer Umgebung von $x_0$ differenzierbar, außer eventuell in $x_0$ selbst, dort ist $g' \neq 0$, der Bruch $\frac fg$ ist vom
      Typ $\frac00$ oder $\frac\infty\infty$, und $\lim\frac{f'}{g'}$ existiert. Dann ist $\lim\frac fg = \lim\frac{f'}{g'}$.
      Beispiel für Missachtung: $\lim_{x\to 0}\frac{x + 3}{x + 1} = 3$ durch Einsetzen, „abgeleitet“ käme $\frac11 = 1$ heraus.
hinweise:
  - 'a) zweimal anwenden, b) dreimal anwenden.'
  - 'c) $\sqrt x\,\ln x = \frac{\ln x}{x^{-1/2}}$, Typ $\frac{-\infty}{\infty}$.'
loesung: |
  **a)** Ansatz: Typ prüfen, dann getrennt ableiten. Typ $\frac00$: $\lim\frac{3e^{3x} - 3}{2x}$, wieder $\frac00$: $\lim\frac{9e^{3x}}{2} = \frac92$.
  ---
  **b)** Typ $\frac\infty\infty$: $\frac{3x^2}{2e^{2x}} \to \frac{6x}{4e^{2x}} \to \frac{6}{8e^{2x}} \to 0$.
  ---
  **c)** Als Bruch $\frac{\ln x}{x^{-1/2}}$, Typ $\frac{-\infty}{\infty}$. Ableiten: $\frac{1/x}{-\frac12 x^{-3/2}} = -2x^{1/2} = -2\sqrt x \to 0$.
  ---
  **d)** Voraussetzungen: unbestimmter Ausdruck $\frac00$ oder $\frac{\infty}{\infty}$, Differenzierbarkeit nahe $x_0$, $g' \ne 0$ dort, und $\lim\frac{f'}{g'}$ existiert. Ohne unbestimmten Ausdruck liefert die Regel in aller Regel falsche Werte, siehe Musterantwort.
```

```aufgabe
id: db-pruefung-bremsweg
titel: Ein Bremsvorgang
niveau: 3
lernziel: 8
kompetenz: modellieren
punkte: 10
angabe: |
  Zeitrichtwert: $20$ Minuten.

  Ein Auto bremst gleichmäßig. Der zurückgelegte Weg ist $s(t) = 30\,t - 1{,}5\,t^2$ für $0 \le t \le 10$. Dabei ist
  $t$ in Sekunden und $s$ in Metern gemessen.

  a) Berechne die Durchschnittsgeschwindigkeit im Zeitraum von $0$ bis $10$ Sekunden.

  b) Zu welchem Zeitpunkt hatte das Auto nach dem Mittelwertsatz genau diese Geschwindigkeit? Berechne ihn.

  c) Schätze $s(4{,}2)$ mit der Linearisierung an der Stelle $t_0 = 4$ und vergleiche mit dem genauen Wert.
teile:
  - typ: zahl
    label: 'a) Durchschnittsgeschwindigkeit'
    einheit: m/s
    loesung: "(30*10 - 1.5*100)/10"
    anzeige: '15'
    fehler:
      - wert: "30"
        meldung: '$30$ m/s ist die Anfangsgeschwindigkeit $s''(0)$. Der Durchschnitt ist Gesamtweg durch Gesamtzeit.'
      - wert: "150"
        meldung: '$150$ m ist der Gesamtweg. Teile noch durch $10$ s.'
  - typ: zahl
    label: 'b) Zeitpunkt'
    einheit: s
    loesung: "(30 - 15)/3"
    anzeige: '5'
    fehler:
      - wert: "10"
        meldung: 'Bei $t = 10$ ist $s''(10) = 0$, das Auto steht. Löse $30 - 3t = 15$.'
  - typ: zahl
    label: 'c) Näherung für $s(4{,}2)$'
    einheit: m
    loesung: "(30*4 - 1.5*16) + (30 - 3*4)*0.2"
    anzeige: '99{,}6'
    fehler:
      - wert: "96"
        meldung: '$96$ m ist $s(4)$. Dazu kommt die Geschwindigkeit mal Zeitspanne: $18\cdot 0{,}2$.'
  - typ: zahl
    label: 'c) genauer Wert $s(4{,}2)$'
    einheit: m
    loesung: "30*4.2 - 1.5*4.2^2"
    anzeige: '99{,}54'
hinweise:
  - 'a) Durchschnittsgeschwindigkeit $= \frac{s(10) - s(0)}{10 - 0}$.'
  - "b) Momentangeschwindigkeit $v(t) = s'(t) = 30 - 3t$. Setze sie gleich dem Durchschnitt."
  - "c) $s(4{,}2) \\approx s(4) + s'(4)\\cdot 0{,}2$."
loesung: |
  **a)** Ansatz: Durchschnittsgeschwindigkeit ist die Sekantensteigung der Weg-Zeit-Funktion. $s(10) = 300 - 150 = 150$ m, $s(0) = 0$. Also $\frac{150\text{ m}}{10\text{ s}} = 15$ m/s.
  ---
  **b)** $s$ ist ein Polynom, also gilt der Mittelwertsatz. $v(t) = s'(t) = 30 - 3t = 15$ ergibt $t = 5$ s. Nach genau der halben Bremszeit fährt das Auto mit der Durchschnittsgeschwindigkeit. Bei einer Parabel liegt die Zwischenstelle immer in der Mitte.
  ---
  **c)** $s(4) = 120 - 24 = 96$ m und $s'(4) = 30 - 12 = 18$ m/s. Linearisierung: $s(4{,}2) \approx 96 + 18\cdot 0{,}2 = 99{,}6$ m.
  ---
  Genau: $s(4{,}2) = 126 - 1{,}5\cdot 17{,}64 = 126 - 26{,}46 = 99{,}54$ m. Die Näherung ist um $6$ cm zu groß. Das passt, denn das Auto wird langsamer, und die Tangente überschätzt deshalb den Weg.
```

```aufgabe
id: db-pruefung-theorie
titel: Richtig oder falsch?
niveau: 3
lernziel: 2
kompetenz: begruenden
punkte: 6
angabe: |
  Zeitrichtwert: $10$ Minuten.

  Welche Aussagen sind richtig? Überlege dir für jede falsche Aussage ein Gegenbeispiel.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - 'Jede stetige Funktion ist differenzierbar.'
      - 'Ist $f$ in $x_0$ differenzierbar, so ist $f$ in $x_0$ stetig.'
      - 'Ist $f^{\prime}(x_0) = 0$, so hat $f$ in $x_0$ ein lokales Extremum.'
      - 'Ist $f^{\prime}(x) > 0$ für alle $x$ eines Intervalls $I$, so ist $f$ auf $I$ streng monoton wachsend.'
      - 'Ist $f$ auf $[a, b]$ differenzierbar und $f(a) = f(b)$, so gibt es $\xi \in (a, b)$ mit $f^{\prime}(\xi) = 0$.'
      - 'Hat $f$ in $x_0$ ein lokales Extremum, so ist $f^{\prime}(x_0) = 0$.'
    richtig: [1, 3, 4]
    fehler:
      - wert: [1, 2, 3, 4]
        meldung: 'Aussage 3 ist falsch: $x^3$ hat bei $0$ eine waagrechte Tangente, aber einen Sattelpunkt.'
      - wert: [1, 3, 4, 5]
        meldung: 'Aussage 6 ist falsch: $|x|$ hat bei $0$ ein Minimum ohne Ableitung, und Randextrema haben oft $f^{\prime} \ne 0$.'
      - wert: [1, 3]
        meldung: 'Aussage 5 stimmt: Differenzierbar auf $[a, b]$ schließt Stetigkeit auf $[a, b]$ und Differenzierbarkeit auf $(a, b)$ ein. Das ist der Satz von Rolle.'
hinweise:
  - 'Differenzierbar auf $[a, b]$ schließt Stetigkeit auf $[a, b]$ ein.'
  - 'Typische Gegenbeispiele: $|x|$ bei $0$, $x^3$ bei $0$, $f(x) = x$ auf $[0, 1]$.'
loesung: |
  Ansatz: jede Aussage mit dem passenden Satz oder einem Standard-Gegenbeispiel prüfen. (1) falsch: $|x|$ ist bei $0$ stetig, aber nicht differenzierbar.
  ---
  (2) richtig: Satz „differenzierbar, also stetig“. (3) falsch: $x^3$ bei $0$ ist ein Sattelpunkt.
  ---
  (4) richtig: Monotoniekriterium über den Mittelwertsatz. (5) richtig: Differenzierbar auf $[a, b]$ liefert Stetigkeit auf $[a, b]$ und Differenzierbarkeit auf $(a, b)$, also gilt der Satz von Rolle.
  ---
  (6) falsch: $|x|$ hat bei $0$ ein Minimum ohne Ableitung, und $f(x) = x$ auf $[0, 1]$ hat am Rand $x = 1$ ein Maximum mit $f'(1) = 1$. Richtig wäre: an einer inneren Stelle, an der $f$ differenzierbar ist. Ergebnis: richtig sind genau 2, 4 und 5.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, ohne nachzuschauen. Vergleiche dann mit dem Kasten „Auf einen Blick“ direkt nach dieser Frage.
antwort: |
  Zum Beispiel:
  1. Die Ableitung ist der Grenzwert des Differenzenquotienten. Sie existiert nur, wenn beide Seiten denselben endlichen Wert liefern.
  2. Jede differenzierbare Funktion ist stetig, aber nicht umgekehrt. Das Standard-Gegenbeispiel ist $|x|$ bei $0$.
  3. Der Mittelwertsatz verbindet die Ableitung mit dem Verhalten auf einem Intervall. Aus ihm folgen Monotonie- und Konstanzkriterium.
```

:::zusammenfassung[Auf einen Blick]
1. **Ableitung:** $f'(x_0) = \lim_{h\to 0}\frac{f(x_0 + h) - f(x_0)}{h}$, falls dieser Grenzwert existiert und eine reelle Zahl ist. Man berechnet ihn mit der h-Methode: ausrechnen, Differenz bilden, durch $h$ kürzen, erst dann $h \to 0$.
2. **Einseitige Ableitungen:** $f$ ist genau dann differenzierbar, wenn die rechts- und die linksseitige Ableitung existieren und gleich sind. Differenzierbarkeit scheitert an Knicken ($|x|$), Sprüngen, senkrechten Tangenten ($\sqrt[3]{x}$) und wildem Schwingen.
3. **Differenzierbar heißt stetig**, Beweis: $f(x) - f(x_0) = \frac{f(x) - f(x_0)}{x - x_0}\cdot(x - x_0) \to f'(x_0)\cdot 0 = 0$. Die Umkehrung ist falsch. Die Kontraposition sagt: unstetig, also nicht differenzierbar.
4. **Die Ableitungsregeln folgen aus der Definition:** Produktregel mit einer nahrhaften Null, Kettenregel mit einer Hilfsfunktion, Umkehrregel $(f^{-1})'(y_0) = \frac{1}{f'(x_0)}$ für $f'(x_0) \ne 0$. Daraus folgen die Ableitungen von $\ln$, $\arcsin$ und $\arctan$.
5. **Nahtstellen:** zuerst Stetigkeit, dann die Ableitungen der Stücke vergleichen. Parameter bestimmt man aus zwei Gleichungen: gleiche Höhe und gleiche Steigung.
6. **Rolle und Mittelwertsatz:** stetig auf $[a, b]$, differenzierbar auf $(a, b)$. Dann gibt es $\xi$ mit $f'(\xi) = \frac{f(b) - f(a)}{b - a}$, die Tangente ist parallel zur Sekante. Daraus folgen Konstanz- und Monotoniekriterium, aber nur auf Intervallen.
7. **Extrema und Krümmung:** $f'(x_0) = 0$ ist an inneren, differenzierbaren Stellen notwendig, aber nicht hinreichend ($x^3$). Hinreichend ist zusätzlich ein Vorzeichenwechsel von $f'$ oder $f''(x_0) \ne 0$. Globale Extrema auf $[a, b]$ liegen auch an Rändern und Knicken.
8. **De l'Hospital und Taylor:** Bei $\frac00$ oder $\frac\infty\infty$ darf man Zähler und Nenner getrennt ableiten. Das Taylorpolynom $T_n$ nähert $f$ nahe $x_0$ an, der Fehler ist $\frac{f^{(n+1)}(\xi)}{(n+1)!}(x - x_0)^{n+1}$.
:::

### Die häufigsten Fehler

Jeder Fehler ist mit der Aufgabe verknüpft, in der du ihn gezielt üben kannst. Die Aufgaben geben dir eine Rückmeldung,
wenn du genau diesen Fehler machst.

1. **$h = 0$ vor dem Kürzen eingesetzt:** $\frac{0}{0}$ ist kein Ergebnis. Training: „Ableitung aus der Definition“ (in [13.1 Die Ableitung exakt](/lernen/mathe3/differenzierbarkeit/die-ableitung-exakt-grenzwert-des-differenzenquotienten)).
2. **$f(x_0 + h)$ falsch ausgerechnet**, etwa $(3 + h)^2 = 9 + h^2$. Training: „Wo steckt der Fehler?“ (in [13.1 Die Ableitung exakt](/lernen/mathe3/differenzierbarkeit/die-ableitung-exakt-grenzwert-des-differenzenquotienten)).
3. **Betrag nur für eine Seite aufgelöst:** $\frac{|h|}{h} = 1$ gilt nur für $h > 0$. Training: „Ein gestreckter, verschobener Betrag“ (in [13.2 Einseitige Ableitungen](/lernen/mathe3/differenzierbarkeit/einseitige-ableitungen-knick-senkrechte-tangente-oszillation)).
4. **Senkrechte Tangente als Ableitung $\infty$ gewertet.** Training: „Die Wurzel am Rand“ (in [13.2 Einseitige Ableitungen](/lernen/mathe3/differenzierbarkeit/einseitige-ableitungen-knick-senkrechte-tangente-oszillation)).
5. **Umkehrung benutzt:** „stetig, also differenzierbar“. Training: „Was folgt, was nicht?“ (in [13.3 Differenzierbar heißt stetig](/lernen/mathe3/differenzierbarkeit/differenzierbar-heisst-stetig-aber-nicht-umgekehrt)).
6. **Produkt der Ableitungen statt Produktregel** und **äußere Ableitung an der falschen Stelle.** Training: „Regeln mit einer Wertetabelle“ (in [13.4 Ableitungsregeln beweisen](/lernen/mathe3/differenzierbarkeit/ableitungsregeln-beweisen-summe-produkt-quotient-kette)).
7. **Potenzregel bei $a^x$:** $(10^x)' \ne x\cdot 10^{x-1}$. Training: „Exponentialfunktion mit Basis 10“ (in [13.5 Grundfunktionen ableiten](/lernen/mathe3/differenzierbarkeit/grundfunktionen-ableiten-e-funktion-logarithmus-sin-cos-arcsin-arctan)).
8. **Bei der Umkehrfunktion vergessen, den Kehrwert zu nehmen** oder an der falschen Stelle ausgewertet. Training: „Umkehrfunktion ohne Formel ableiten“ (in [13.5 Grundfunktionen ableiten](/lernen/mathe3/differenzierbarkeit/grundfunktionen-ableiten-e-funktion-logarithmus-sin-cos-arcsin-arctan)).
9. **An der Nahtstelle nur die Steigungen verglichen**, ohne Stetigkeit. Training: „Erst stetig machen, dann prüfen“ (in [13.3 Differenzierbar heißt stetig](/lernen/mathe3/differenzierbarkeit/differenzierbar-heisst-stetig-aber-nicht-umgekehrt)) und „Zwei Parameter für einen glatten Übergang“ (in [13.6 Stückweise definierte Funktionen](/lernen/mathe3/differenzierbarkeit/stueckweise-definierte-funktionen-an-der-nahtstelle)).
10. **Mittelwertsatz ohne Prüfung der Voraussetzungen** oder mit einer Stelle am Rand. Training: „Wann darf man den Mittelwertsatz anwenden?“ und „Liegt die Stelle wirklich im Inneren?“ (in [13.7 Satz von Rolle und Mittelwertsatz](/lernen/mathe3/differenzierbarkeit/satz-von-rolle-und-mittelwertsatz)).
11. **Monotonie über eine Lücke hinweg** gefolgert. Training: „Warum das Intervall zählt“ (in [13.8 Folgerungen aus dem Mittelwertsatz](/lernen/mathe3/differenzierbarkeit/folgerungen-aus-dem-mittelwertsatz-konstanz-monotonie-ungleichungen)).
12. **$f'(x_0) = 0$ für hinreichend gehalten** oder **Randpunkte und Knicke vergessen.** Training: „Sattelpunkt oder Extremum?“ und „Ein Extremum an einer Knickstelle“ (in [13.9 Extremstellen und Krümmung](/lernen/mathe3/differenzierbarkeit/extremstellen-und-kruemmung-exakt-begruenden)).
13. **De l'Hospital ohne $\frac00$ angewendet** oder mit der Quotientenregel verwechselt. Training: „Wo ist der Fehler?“ (in [13.10 Die Regel von de l'Hospital](/lernen/mathe3/differenzierbarkeit/die-regel-von-de-l-hospital)).
14. **Fakultät im Taylorpolynom vergessen** oder zu weit weg linearisiert. Training: „Taylorpolynom des Kosinus“ und „Die richtige Stelle zum Linearisieren“ (in [13.11 Linearisierung und Taylorpolynome](/lernen/mathe3/differenzierbarkeit/linearisierung-und-taylorpolynome)).

### Lernziel-Selbstcheck

Bewerte dich bei jedem Lernziel ehrlich mit $1$ (unsicher), $2$ (geht mit Nachschauen) oder $3$ (sicher, auch unter
Zeitdruck). Bei jeder $1$ oder $2$ gehst du zurück zur passenden Lektion und rechnest die Aufgaben auf Niveau 2 und 3
noch einmal.

1. Ableitung als Grenzwert, h-Methode. Lektion: [13.1 Die Ableitung exakt](/lernen/mathe3/differenzierbarkeit/die-ableitung-exakt-grenzwert-des-differenzenquotienten).
2. Einseitige Ableitungen, Knick und senkrechte Tangente. Lektion: [13.2 Einseitige Ableitungen](/lernen/mathe3/differenzierbarkeit/einseitige-ableitungen-knick-senkrechte-tangente-oszillation).
3. Differenzierbar heißt stetig, Beweis und Gegenbeispiel. Lektion: [13.3 Differenzierbar heißt stetig](/lernen/mathe3/differenzierbarkeit/differenzierbar-heisst-stetig-aber-nicht-umgekehrt).
4. Ableitungsregeln begründen und Grundfunktionen ableiten. Lektionen: [13.4 Ableitungsregeln beweisen](/lernen/mathe3/differenzierbarkeit/ableitungsregeln-beweisen-summe-produkt-quotient-kette) und [13.5 Grundfunktionen ableiten](/lernen/mathe3/differenzierbarkeit/grundfunktionen-ableiten-e-funktion-logarithmus-sin-cos-arcsin-arctan).
5. Nahtstellen und Parameter. Lektion: [13.6 Stückweise definierte Funktionen](/lernen/mathe3/differenzierbarkeit/stueckweise-definierte-funktionen-an-der-nahtstelle).
6. Rolle und Mittelwertsatz. Lektion: [13.7 Satz von Rolle und Mittelwertsatz](/lernen/mathe3/differenzierbarkeit/satz-von-rolle-und-mittelwertsatz).
7. Konstanz, Monotonie, Extrema und Krümmung exakt. Lektionen: [13.8 Folgerungen aus dem Mittelwertsatz](/lernen/mathe3/differenzierbarkeit/folgerungen-aus-dem-mittelwertsatz-konstanz-monotonie-ungleichungen) und [13.9 Extremstellen und Krümmung](/lernen/mathe3/differenzierbarkeit/extremstellen-und-kruemmung-exakt-begruenden).
8. Grenzwerte mit de l'Hospital. Lektion: [13.10 Die Regel von de l'Hospital](/lernen/mathe3/differenzierbarkeit/die-regel-von-de-l-hospital).
9. Linearisierung und Taylorpolynom. Lektion: [13.11 Linearisierung und Taylorpolynome](/lernen/mathe3/differenzierbarkeit/linearisierung-und-taylorpolynome).

## Mündliche Prüfung

```karten
- id: db-karte-definition
  frage: Wie ist die Ableitung einer Funktion an einer Stelle definiert?
  antwort: |
    $f$ heißt an der Stelle $x_0$ differenzierbar, wenn der Grenzwert des Differenzenquotienten
    $f'(x_0) = \lim_{h\to 0}\frac{f(x_0 + h) - f(x_0)}{h}$ existiert und eine reelle Zahl ist. Geometrisch ist das die
    Steigung der Tangente, also die Grenzlage der Sekanten. Physikalisch ist es eine momentane Änderungsrate, etwa die
    Momentangeschwindigkeit.
  kernpunkte:
    - 'Grenzwert des Differenzenquotienten für $h \to 0$'
    - 'muss existieren und endlich sein'
    - 'Deutung: Tangentensteigung, momentane Änderungsrate'
- id: db-karte-h-methode
  frage: Wie berechnen Sie eine Ableitung direkt aus der Definition? Zeigen Sie es an $x^2$.
  antwort: |
    Mit der h-Methode: $f(x_0 + h)$ ausrechnen, $f(x_0)$ abziehen, durch $h$ kürzen und erst dann $h \to 0$ gehen lassen.
    Für $x^2$: $\frac{(x_0 + h)^2 - x_0^2}{h} = \frac{2x_0h + h^2}{h} = 2x_0 + h \to 2x_0$. Kürzen ist erlaubt, weil im
    Grenzwert nur $h \ne 0$ vorkommt.
  kernpunkte:
    - 'Differenz bilden, Terme ohne $h$ heben sich weg'
    - 'durch $h$ kürzen, weil $h \ne 0$'
    - 'erst danach $h \to 0$'
- id: db-karte-einseitig
  frage: Was sind einseitige Ableitungen, und wie hängen sie mit der Differenzierbarkeit zusammen?
  antwort: |
    Das sind die Grenzwerte des Differenzenquotienten für $h \to 0^+$ (nur positive $h$) und für $h \to 0^-$ (nur
    negative $h$). $f$ ist an der Stelle $x_0$ genau dann differenzierbar, wenn beide existieren und gleich sind. Man
    braucht sie an Knickstellen, an Nahtstellen und an Randpunkten eines Intervalls.
  kernpunkte:
    - 'Grenzwert nur von rechts beziehungsweise nur von links'
    - 'differenzierbar genau dann, wenn beide existieren und gleich sind'
    - 'Anwendung: Knick, Nahtstelle, Randpunkt'
- id: db-karte-betrag
  frage: Warum ist die Betragsfunktion bei 0 nicht differenzierbar?
  antwort: |
    Der Differenzenquotient ist $\frac{|h|}{h}$. Er ist $1$ für $h > 0$ und $-1$ für $h < 0$. Die einseitigen
    Ableitungen $1$ und $-1$ sind verschieden, also existiert der Grenzwert nicht. Der Graph hat dort einen Knick, es gibt
    keine eindeutige Tangente. Stetig ist $|x|$ bei $0$ trotzdem.
  kernpunkte:
    - '$\frac{|h|}{h} = \pm 1$ je nach Vorzeichen von $h$'
    - 'einseitige Ableitungen $1$ und $-1$ verschieden'
    - 'Knick, aber stetig'
- id: db-karte-scheitern
  frage: Nennen Sie Arten, auf die Differenzierbarkeit an einer Stelle scheitern kann, jeweils mit Beispiel.
  antwort: |
    Erstens ein Sprung, also Unstetigkeit, etwa die Vorzeichenfunktion bei $0$. Zweitens ein Knick mit verschiedenen
    einseitigen Ableitungen, etwa $|x|$ bei $0$. Drittens eine senkrechte Tangente, bei der der Differenzenquotient
    gegen $\infty$ geht, etwa $\sqrt[3]{x}$ bei $0$. Viertens wildes Schwingen ohne Grenzwert, etwa $x\sin\frac1x$ bei $0$.
  kernpunkte:
    - 'Sprung (Unstetigkeit)'
    - 'Knick: $|x|$'
    - 'senkrechte Tangente: $\sqrt[3]{x}$'
    - 'Oszillation: $x\sin\frac1x$'
- id: db-karte-stetig-beweis
  frage: Beweisen Sie, dass jede differenzierbare Funktion stetig ist. Gilt die Umkehrung?
  antwort: |
    Für $x \ne x_0$ ist $f(x) - f(x_0) = \frac{f(x) - f(x_0)}{x - x_0}\cdot(x - x_0)$. Der erste Faktor geht gegen die
    reelle Zahl $f'(x_0)$, der zweite gegen $0$. Nach dem Grenzwertsatz für Produkte geht das Produkt gegen $0$, also
    $f(x) \to f(x_0)$. Das ist Stetigkeit. Die Umkehrung ist falsch: $|x|$ ist bei $0$ stetig, aber nicht differenzierbar.
  kernpunkte:
    - 'Differenz als Differenzenquotient mal $(x - x_0)$ schreiben'
    - 'Grenzwertsatz: $f''(x_0)\cdot 0 = 0$, dafür muss $f''(x_0)$ endlich sein'
    - 'Umkehrung falsch, Gegenbeispiel $|x|$'
- id: db-karte-produktregel
  frage: Wie beweist man die Produktregel, und wo braucht man dabei die Stetigkeit?
  antwort: |
    Man fügt im Zähler die nahrhafte Null $-f(x)g(x + h) + f(x)g(x + h)$ ein. Dann zerfällt der Quotient in
    $\frac{f(x+h) - f(x)}{h}\,g(x+h) + f(x)\,\frac{g(x+h) - g(x)}{h}$. Für $h \to 0$ gehen die Quotienten gegen $f'(x)$
    und $g'(x)$. Außerdem geht $g(x + h) \to g(x)$, weil $g$ differenzierbar und damit stetig ist. Das ergibt $f'g + fg'$.
  kernpunkte:
    - 'nahrhafte Null einfügen'
    - 'zwei Differenzenquotienten entstehen'
    - '$g(x + h) \to g(x)$ wegen differenzierbar, also stetig'
- id: db-karte-kettenregel
  frage: Was sagt die Kettenregel, und wo liegt die Schwierigkeit im Beweis?
  antwort: |
    $(g\circ f)'(x_0) = g'(f(x_0))\cdot f'(x_0)$, wenn $f$ in $x_0$ und $g$ in $f(x_0)$ differenzierbar sind. Das
    naive Erweitern mit $f(x) - f(x_0)$ scheitert, wenn dieser Ausdruck für $x \ne x_0$ null wird, etwa bei konstantem
    $f$. Man umgeht das mit einer Hilfsfunktion, die den Differenzenquotienten von $g$ an der kritischen Stelle durch
    $g'(f(x_0))$ ersetzt und dort stetig ist.
  kernpunkte:
    - 'äußere Ableitung an der inneren Stelle mal innere Ableitung'
    - 'naiver Beweis teilt eventuell durch $0$'
    - 'Hilfsfunktion $\varphi$, stetig in $f(x_0)$'
- id: db-karte-umkehr
  frage: Wie leitet man eine Umkehrfunktion ab? Zeigen Sie es am Arcustangens.
  antwort: |
    Ist $f$ streng monoton, stetig und an der Stelle $x_0$ differenzierbar mit $f'(x_0) \ne 0$, so gilt
    $(f^{-1})'(y_0) = \frac{1}{f'(x_0)}$ mit $y_0 = f(x_0)$. Geometrisch: Beim Spiegeln an $y = x$ wird aus der Steigung
    $k$ die Steigung $\frac1k$. Beim Arcustangens ist $(\tan x)' = 1 + \tan^2 x$, also
    $(\arctan y)' = \frac{1}{1 + y^2}$.
  kernpunkte:
    - '$(f^{-1})''(y_0) = \frac{1}{f''(x_0)}$'
    - 'Voraussetzung $f''(x_0) \ne 0$, sonst senkrechte Tangente'
    - 'Beispiel: $(\arctan y)'' = \frac{1}{1 + y^2}$'
- id: db-karte-nahtstelle
  frage: Wie untersuchen Sie eine stückweise definierte Funktion an der Nahtstelle auf Differenzierbarkeit?
  antwort: |
    Zuerst die Stetigkeit: linker Grenzwert, rechter Grenzwert und Funktionswert müssen übereinstimmen. Ist das nicht
    der Fall, ist die Funktion nicht differenzierbar, denn unstetige Funktionen sind nie differenzierbar. Ist sie stetig,
    vergleiche ich die Ableitungen der beiden Stücke an der Nahtstelle. Sind sie gleich, ist das die Ableitung. Wer nur
    die Steigungen vergleicht, fällt bei Sprüngen herein.
  kernpunkte:
    - 'erst Stetigkeit prüfen'
    - 'dann Ableitungen der Stücke vergleichen'
    - 'Begründung: Kontraposition von „differenzierbar, also stetig“'
- id: db-karte-rolle
  frage: Wie lautet der Satz von Rolle, und wie beweist man ihn?
  antwort: |
    Ist $f$ stetig auf $[a, b]$, differenzierbar auf $(a, b)$ und gilt $f(a) = f(b)$, so gibt es $\xi \in (a, b)$ mit
    $f'(\xi) = 0$. Beweis: Nach dem Satz vom Maximum nimmt $f$ auf $[a, b]$ einen größten und einen kleinsten Wert an.
    Ist $f$ nicht konstant, liegt einer davon im Inneren, und dort ist nach dem Satz von Fermat die Ableitung $0$.
  kernpunkte:
    - 'drei Voraussetzungen: stetig auf $[a, b]$, differenzierbar auf $(a, b)$, $f(a) = f(b)$'
    - 'Satz vom Maximum und Minimum'
    - 'Fermat: inneres Extremum hat $f'' = 0$'
- id: db-karte-mws
  frage: Formulieren Sie den Mittelwertsatz, deuten Sie ihn und nennen Sie ein Gegenbeispiel für fehlende Voraussetzungen.
  antwort: |
    Ist $f$ stetig auf $[a, b]$ und differenzierbar auf $(a, b)$, so gibt es $\xi \in (a, b)$ mit
    $f'(\xi) = \frac{f(b) - f(a)}{b - a}$. Geometrisch ist die Tangente bei $\xi$ parallel zur Sekante. Physikalisch ist
    die Momentangeschwindigkeit irgendwann gleich der Durchschnittsgeschwindigkeit. Gegenbeispiel: $|x|$ auf $[-1, 1]$
    hat waagrechte Sekante, aber nirgends $f' = 0$, weil der Knick bei $0$ die Differenzierbarkeit verletzt.
  kernpunkte:
    - 'Voraussetzungen zuerst nennen'
    - 'Tangente parallel zur Sekante'
    - 'Gegenbeispiel $|x|$ auf $[-1, 1]$'
- id: db-karte-monotonie
  frage: Wie folgt aus dem Mittelwertsatz das Monotoniekriterium, und warum braucht man ein Intervall?
  antwort: |
    Für $x_1 < x_2$ im Intervall ist $f(x_2) - f(x_1) = f'(\xi)(x_2 - x_1)$. Ist $f' > 0$, so ist die rechte Seite
    positiv, also $f(x_2) > f(x_1)$. Das Intervall braucht man, damit der Mittelwertsatz auf $[x_1, x_2]$ anwendbar ist.
    Gegenbeispiel: $\frac1x$ hat überall negative Ableitung, ist auf $\R\setminus\{0\}$ aber nicht fallend, denn
    $f(-1) < f(1)$. Die Umkehrung gilt nur mit $\ge$: $x^3$ ist streng wachsend, hat aber $f'(0) = 0$.
  kernpunkte:
    - 'Mittelwertsatz auf $[x_1, x_2]$'
    - 'Vorzeichen von $f''$ bestimmt Vorzeichen der Differenz'
    - 'nur auf Intervallen, Gegenbeispiel $\frac1x$'
- id: db-karte-stammfunktion
  frage: Welcher Zusammenhang besteht zwischen dem Mittelwertsatz und der Integrationskonstante „+ C“?
  antwort: |
    Aus dem Mittelwertsatz folgt das Konstanzkriterium: Ist $f' = 0$ auf einem Intervall, so ist $f$ dort konstant. Haben
    zwei Funktionen $F$ und $G$ dieselbe Ableitung, so ist $(F - G)' = 0$, also $F = G + C$. Deshalb unterscheiden sich
    zwei Stammfunktionen derselben Funktion nur um eine Konstante, und man schreibt beim unbestimmten Integral „$+\,C$“.
    Auf Mengen, die keine Intervalle sind, kann die Konstante auf jedem Stück anders sein.
  kernpunkte:
    - 'Konstanzkriterium aus dem Mittelwertsatz'
    - '$(F - G)'' = 0$, also $F = G + C$'
    - 'Verbindung zu Kapitel 10 (Stammfunktionen)'
- id: db-karte-extrem
  frage: Ist $f'(x_0) = 0$ notwendig oder hinreichend für ein Extremum?
  antwort: |
    Notwendig, aber nur an inneren Stellen, an denen $f$ differenzierbar ist. Das ist der Satz von Fermat. Nicht
    hinreichend: $x^3$ hat bei $0$ eine waagrechte Tangente, aber einen Sattelpunkt. Hinreichend ist zusätzlich ein
    Vorzeichenwechsel von $f'$ oder $f''(x_0) \ne 0$. Randextrema und Extrema an Knickstellen erfüllen $f' = 0$ im
    Allgemeinen nicht, etwa $|x|$ bei $0$.
  kernpunkte:
    - 'notwendig an inneren, differenzierbaren Stellen'
    - 'nicht hinreichend: $x^3$'
    - 'Rand und Knick extra prüfen'
- id: db-karte-lhospital
  frage: Was besagt die Regel von de l'Hospital, und welche Voraussetzungen hat sie?
  antwort: |
    Liegt ein unbestimmter Ausdruck $\frac00$ oder $\frac\infty\infty$ vor und sind $f, g$ nahe $x_0$ differenzierbar mit
    $g' \ne 0$, so gilt $\lim\frac fg = \lim\frac{f'}{g'}$, sofern der rechte Grenzwert existiert. Zähler und Nenner werden
    getrennt abgeleitet, nicht mit der Quotientenregel. Ohne unbestimmten Ausdruck liefert die Regel in aller Regel falsche Werte.
    Im Spezialfall $f(x_0) = g(x_0) = 0$ ist sie einfach das Verhältnis der Tangentensteigungen.
  kernpunkte:
    - 'nur bei $\frac00$ oder $\frac\infty\infty$'
    - 'Zähler und Nenner getrennt ableiten'
    - 'Idee: Verhältnis der Tangentensteigungen'
- id: db-karte-taylor
  frage: Was ist die Linearisierung, und wie verallgemeinert das Taylorpolynom sie?
  antwort: |
    Die Linearisierung ist die Näherung durch die Tangente: $f(x) \approx f(x_0) + f'(x_0)(x - x_0)$. Ihr Fehler geht
    schneller als $x - x_0$ gegen $0$. Das ist sogar eine gleichwertige Definition der Differenzierbarkeit. Das
    Taylorpolynom stimmt zusätzlich in höheren Ableitungen überein:
    $T_n(x) = \sum_{k=0}^n \frac{f^{(k)}(x_0)}{k!}(x - x_0)^k$. Der Fehler ist nach Lagrange
    $\frac{f^{(n+1)}(\xi)}{(n+1)!}(x - x_0)^{n+1}$. Beispiel: $\sqrt{4{,}1} \approx 2 + \frac14\cdot 0{,}1 = 2{,}025$.
  kernpunkte:
    - 'Tangente als beste lineare Näherung'
    - 'Taylorpolynom: Übereinstimmung bis zur $n$-ten Ableitung, Fakultät im Nenner'
    - 'Restglied nach Lagrange schätzt den Fehler ab'
```
