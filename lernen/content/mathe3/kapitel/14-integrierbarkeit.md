---
nummer: 14
titel: Integrierbarkeit
kurz: Das Integral exakt definiert, mit Riemann-Summen, Ober- und Untersummen, Integrierbarkeit, Mittelwertsatz, Hauptsatz mit Beweis, uneigentlichen Integralen und numerischer Integration.
teil: B
stunden: 14
pruefungsgewicht: 2
voraussetzungen: [folgen-reihen, grenzwerte-folgen, grenzwerte-stetigkeit, differenzierbarkeit, integralrechnung]
lernziele:
  - eine Zerlegung mit ihrer Feinheit angeben und Riemann-Summen (Links-, Rechts-, Mittelsumme und beliebige Zwischenstellen) berechnen, auch mit Einheiten und als Grenzwert
  - Ober- und Untersummen mit Infimum und Supremum bestimmen, auch bei nicht monotonen Funktionen, und erklären, warum Verfeinern sie verbessert
  - die Definition der Riemann-Integrierbarkeit und das Riemannsche Kriterium mit „für jedes ε“ korrekt formulieren und auf einfache Funktionen anwenden
  - Integrale wie die von x, x² und x³ mit Summenformeln exakt als Grenzwert von Ober- und Untersummen berechnen
  - begründen, warum stetige, monotone und stückweise stetige Funktionen integrierbar sind, und an der Dirichlet-Funktion zeigen, warum eine Funktion nicht integrierbar sein kann
  - die Eigenschaften des Integrals (Linearität, Intervalladditivität, Monotonie, Dreiecksungleichung, Abschätzung) begründen und Integrale damit ohne Stammfunktion abschätzen
  - den Mittelwertsatz der Integralrechnung mit Voraussetzung formulieren, die Mittelwertstelle berechnen und ein Gegenbeispiel ohne Stetigkeit angeben
  - den Hauptsatz mit Integralfunktion formulieren, seine Beweisidee in Schritten erklären, Integralfunktionen ableiten und ihren Graphen aus dem Graphen des Integranden ablesen
  - uneigentliche Integrale als Grenzwerte berechnen und mit dem Vergleich mit 1/x hoch p Konvergenz von Divergenz unterscheiden
  - Integrale mit Trapez- und Simpsonregel näherungsweise berechnen, den Fehler abschätzen und aus Messwerten Größen mit Einheiten bestimmen
---

In [Kapitel 10, Der Hauptsatz](/lernen/mathe3/integralrechnung/der-hauptsatz-der-differential-und-integralrechnung) hast du das Integral als Werkzeug kennengelernt. Du
suchst eine Stammfunktion, setzt die Grenzen ein und bist fertig. Eine Frage blieb dort aber offen: Was
*ist* ein Integral eigentlich? Und gibt es Funktionen, für die es gar kein Integral gibt? Dieses Kapitel
beantwortet beide Fragen genau.

Ein Bild hilft beim Einstieg. Stell dir vor, du willst die Fläche eines unregelmäßigen Sees aus der Luft
bestimmen. Du legst ein Gitter aus Quadraten darüber. Du zählst einmal nur die Quadrate, die ganz im
Wasser liegen. Das ergibt eine Zahl, die sicher zu klein ist. Dann zählst du alle Quadrate, die das Wasser
auch nur berühren. Das ergibt eine Zahl, die sicher zu groß ist. Machst du das Gitter feiner, rücken beide
Zahlen zusammen. Genau so wird in diesem Kapitel das Integral definiert: als die eine Zahl, die von unten
und von oben beliebig genau eingeschlossen wird.

### Was in der Prüfung vorkommt

Der Stoffkatalog der Studienberechtigungsprüfung verlangt für Mathematik 3 die „Exaktifizierung der
Infinitesimalrechnung“. Gemeint ist: Die Begriffe Grenzwert, Stetigkeit, Ableitung und Integral werden genau
definiert. Die ersten Glieder dieser Kette kennst du aus
[Kapitel 11](/lernen/mathe3/grenzwerte-folgen/die-epsilon-n-definition-des-grenzwerts) (Grenzwerte von Folgen),
[Kapitel 12](/lernen/mathe3/grenzwerte-stetigkeit/stetigkeit-an-einer-stelle) (Grenzwerte von Funktionen und Stetigkeit) und
[Kapitel 13](/lernen/mathe3/differenzierbarkeit/die-ableitung-exakt-grenzwert-des-differenzenquotienten) (Differenzierbarkeit). Die Integrierbarkeit ist das letzte Glied.

- **Schriftlich** rechnest du Integrale meistens mit den Methoden aus Kapitel 10. Aus diesem Kapitel kommen
  Teilaufgaben wie „Berechne das Integral als Grenzwert von Obersummen“, „Ist diese Funktion integrierbar?
  Begründe.“ oder „Schätze das Integral mit der Trapezregel“.
- **Mündlich** ist dieses Kapitel zentral. Typische Fragen sind: „Wie ist das bestimmte Integral definiert?“,
  „Was ist eine Riemann-Summe?“, „Wie lautet der Hauptsatz, und warum gilt er?“ und „Gibt es Funktionen, die
  nicht integrierbar sind?“. Zu jeder Frage findest du eine Karte in
  [14.14 Mündliche Prüfung](/lernen/mathe3/integrierbarkeit/muendliche-pruefung).

Wer die Definition sauber aufsagen und die Beweisidee des Hauptsatzes in zwei Minuten erklären kann,
hinterlässt in der mündlichen Prüfung einen sehr guten Eindruck. Genau darauf bereitet dich dieses Kapitel vor.

:::vorwissen
Du brauchst vier Dinge aus früheren Kapiteln:

- **Das Summenzeichen und die Summenformeln** aus
  [Kapitel 8, Das Summenzeichen](/lernen/mathe3/folgen-reihen/das-summenzeichen). Riemann-Summen sind Summen
  mit vielen Gliedern, und für exakte Rechnungen brauchst du Formeln wie $1 + 2 + \dots + n = \frac{n(n+1)}{2}$.
- **Grenzwerte von Folgen**, vor allem von Brüchen mit $n$ im Zähler und Nenner, aus
  [Kapitel 11, Rationale Folgen](/lernen/mathe3/grenzwerte-folgen/rationale-folgen-wurzeltrick-und-standardgrenzwerte).
- **Stetigkeit und den Zwischenwertsatz** aus
  [Kapitel 12, Zwischenwertsatz](/lernen/mathe3/grenzwerte-stetigkeit/zwischenwertsatz-nullstellensatz-und-bisektion).
- **Stammfunktionen und den Hauptsatz als Rechenregel** aus
  [Kapitel 10, Der Hauptsatz](/lernen/mathe3/integralrechnung/der-hauptsatz-der-differential-und-integralrechnung).
:::

### Eingangsdiagnose

Teste dich mit den folgenden sieben Kurzfragen. Bist du bei einer Frage unsicher, wiederhole zuerst den
verlinkten Abschnitt. Jede Lücke von dort taucht in diesem Kapitel wieder auf.

```aufgabe
id: ib-ein-summenzeichen
titel: Eine Summe ausschreiben
art: check
niveau: 1
angabe: |
  Berechne $\displaystyle\sum_{k=1}^{4} (2k + 1)$. Zum Nachlesen:
  [Kapitel 8, Das Summenzeichen](/lernen/mathe3/folgen-reihen/das-summenzeichen).
teile:
  - typ: zahl
    loesung: "3 + 5 + 7 + 9"
    fehler:
      - wert: "20"
        meldung: Du hast nur $2k$ aufsummiert. Das $+1$ gehört zu **jedem** Summanden, es kommt also viermal vor.
      - wert: "25"
        meldung: Du hast bei $k = 0$ begonnen. Die Summe läuft von $k = 1$ bis $k = 4$, das sind genau vier Summanden.
loesung: |
  Wir setzen nacheinander $k = 1, 2, 3, 4$ in $2k + 1$ ein: $3$, $5$, $7$ und $9$.
  ---
  Summe: $3 + 5 + 7 + 9 = 24$.
```

```aufgabe
id: ib-ein-summenformel
titel: Die Summe der Quadratzahlen
art: check
niveau: 1
angabe: |
  Es gilt die Summenformel $\displaystyle\sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}$. Berechne damit
  $1^2 + 2^2 + \dots + 6^2$. Zum Nachlesen:
  [Kapitel 8, Vollständige Induktion](/lernen/mathe3/folgen-reihen/vollstaendige-induktion).
teile:
  - typ: zahl
    loesung: "6*7*13/6"
    fehler:
      - wert: "21"
        meldung: Das ist $1 + 2 + \dots + 6$, also die Summe der Zahlen selbst. Gesucht ist die Summe ihrer **Quadrate**.
      - wert: "441"
        meldung: Das ist $(1 + 2 + \dots + 6)^2 = 21^2$. Die Summe der Quadrate ist kleiner als das Quadrat der Summe.
loesung: |
  Wir setzen $n = 6$ in die Formel ein: $\frac{6\cdot 7\cdot 13}{6}$.
  ---
  Die $6$ kürzt sich: $7\cdot 13 = 91$. Probe durch Ausrechnen: $1 + 4 + 9 + 16 + 25 + 36 = 91$.
```

```aufgabe
id: ib-ein-grenzwert
titel: Grenzwert einer rationalen Folge
art: check
niveau: 1
angabe: |
  Berechne $\displaystyle\lim_{n\to\infty} \frac{(n+1)(2n+1)}{n^2}$. Zum Nachlesen:
  [Kapitel 11, Rationale Folgen](/lernen/mathe3/grenzwerte-folgen/rationale-folgen-wurzeltrick-und-standardgrenzwerte).
teile:
  - typ: zahl
    loesung: "2"
    fehler:
      - wert: "1"
        meldung: Zähler und Nenner gehen beide gegen unendlich. Das heißt aber nicht, dass der Bruch gegen $1$ geht. Multipliziere den Zähler aus und teile durch $n^2$.
      - wert: "0"
        meldung: Der Zähler wächst genauso schnell wie der Nenner, beide wie $n^2$. Der Bruch geht deshalb nicht gegen $0$.
loesung: |
  Wir multiplizieren den Zähler aus: $(n+1)(2n+1) = 2n^2 + 3n + 1$.
  ---
  Wir teilen jeden Summanden durch $n^2$: $2 + \frac3n + \frac{1}{n^2}$. Die beiden Brüche gehen gegen $0$, der Grenzwert ist $2$.
```

```aufgabe
id: ib-ein-supremum
titel: Kleinste obere Schranke
art: check
niveau: 1
angabe: |
  Betrachte die Menge $A = \{\,1 - \tfrac1n : n = 1, 2, 3, \dots\,\} = \{0;\ \tfrac12;\ \tfrac23;\ \tfrac34;\ \dots\}$.
  Welche Aussage stimmt? Zum Nachlesen:
  [Kapitel 11, Vollständigkeit](/lernen/mathe3/grenzwerte-folgen/monotoniekriterium-und-vollstaendigkeit-von).
teile:
  - typ: auswahl
    optionen:
      - 'Die kleinste obere Schranke von $A$ ist $1$, aber $1$ liegt nicht in $A$.'
      - 'Das größte Element von $A$ ist $1$.'
      - '$A$ hat keine obere Schranke, weil die Folge immer weiter wächst.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Für jedes $n$ ist $1 - \frac1n$ kleiner als $1$. Die Zahl $1$ wird also nie erreicht, und ein größtes Element gibt es nicht.'
      - wert: 2
        meldung: 'Die Glieder wachsen, aber sie bleiben alle unter $1$. Also ist $1$ eine obere Schranke.'
loesung: |
  Jedes Element $1 - \frac1n$ ist kleiner als $1$. Also ist $1$ eine obere Schranke. Eine kleinere Zahl wie $0{,}999$ ist keine, denn für große $n$ ist $1 - \frac1n$ größer.
  ---
  Die kleinste obere Schranke heißt **Supremum**. Hier ist das Supremum $1$, aber $1$ gehört nicht zu $A$. Ein größtes Element (Maximum) hat $A$ nicht.
```

```aufgabe
id: ib-ein-zws
titel: Zwischenwertsatz
art: check
niveau: 1
angabe: |
  Die Funktion $f$ ist auf $[0, 2]$ stetig, und es gilt $f(0) = -1$ und $f(2) = 3$. Welchen der Werte muss $f$
  sicher annehmen? Zum Nachlesen:
  [Kapitel 12, Zwischenwertsatz](/lernen/mathe3/grenzwerte-stetigkeit/zwischenwertsatz-nullstellensatz-und-bisektion).
teile:
  - typ: auswahl
    mehrfach: true
    optionen: ['$0$', '$2{,}5$', '$4$', '$-2$']
    richtig: [0, 1]
    fehler:
      - wert: [0, 1, 2]
        meldung: '$4$ liegt nicht zwischen $f(0) = -1$ und $f(2) = 3$. Der Zwischenwertsatz garantiert nur die Werte dazwischen.'
      - wert: [0]
        meldung: '$0$ stimmt. Aber auch $2{,}5$ liegt zwischen $-1$ und $3$ und wird deshalb sicher angenommen.'
loesung: |
  Zwischenwertsatz: Eine stetige Funktion auf $[a, b]$ nimmt jeden Wert zwischen $f(a)$ und $f(b)$ an.
  ---
  Hier also jeden Wert zwischen $-1$ und $3$. Das sind $0$ und $2{,}5$. Die Werte $4$ und $-2$ **kann** $f$ annehmen, muss es aber nicht.
```

```aufgabe
id: ib-ein-hauptsatz
titel: Ein bestimmtes Integral berechnen
art: check
niveau: 1
angabe: |
  Berechne $\displaystyle\int_1^2 3x^2\dd x$. Zum Nachlesen:
  [Kapitel 10, Der Hauptsatz](/lernen/mathe3/integralrechnung/der-hauptsatz-der-differential-und-integralrechnung).
teile:
  - typ: zahl
    loesung: "2^3 - 1^3"
    fehler:
      - wert: "8"
        meldung: Das ist nur $F(2)$. Der Hauptsatz verlangt „obere Grenze minus untere Grenze“, also $F(2) - F(1)$.
      - wert: "9"
        meldung: Du hast $F(2)$ und $F(1)$ addiert. Richtig ist die Differenz.
loesung: |
  Eine Stammfunktion von $3x^2$ ist $F(x) = x^3$, denn $(x^3)' = 3x^2$.
  ---
  $\int_1^2 3x^2\dd x = \big[x^3\big]_1^2 = 8 - 1 = 7$.
```

```aufgabe
id: ib-ein-mittelwertsatz
titel: Mittelwertsatz der Differentialrechnung
art: check
niveau: 1
angabe: |
  Für $f(x) = x^2$ auf $[0, 2]$ garantiert der Mittelwertsatz eine Stelle $\xi$ mit
  $f'(\xi) = \frac{f(2) - f(0)}{2 - 0}$. Wo liegt $\xi$? Zum Nachlesen:
  [Kapitel 13, Mittelwertsatz](/lernen/mathe3/differenzierbarkeit/satz-von-rolle-und-mittelwertsatz).
teile:
  - typ: zahl
    loesung: "1"
    fehler:
      - wert: "2"
        meldung: '$2$ ist die mittlere Steigung $\frac{4 - 0}{2}$. Gesucht ist aber die **Stelle** $\xi$, an der die Ableitung diesen Wert hat.'
loesung: |
  Mittlere Steigung: $\frac{f(2) - f(0)}{2 - 0} = \frac{4 - 0}{2} = 2$.
  ---
  Ableitung $f'(x) = 2x$. Aus $2\xi = 2$ folgt $\xi = 1$. Die Tangente bei $x = 1$ ist parallel zur Sekante.
```

**So ist das Kapitel aufgebaut.** Zuerst zerlegst du ein Intervall und bildest Riemann-Summen. Dann
schließt du die Fläche mit Ober- und Untersummen ein und definierst damit, was „integrierbar“ heißt. Du
rechnest Integrale exakt mit Summenformeln aus und lernst, welche Funktionen integrierbar sind und welche
nicht. Danach folgen die Eigenschaften des Integrals, der Mittelwertsatz und als Höhepunkt der Hauptsatz mit
Beweis. Uneigentliche Integrale und numerische Verfahren schließen den Stoff ab. Am Ende stehen eine
gemischte Wiederholung, Prüfungsaufgaben, eine Zusammenfassung und Karten für die mündliche Prüfung.

## Zerlegungen und Riemann-Summen

```aufgabe
id: ib-zr-vorwissen
titel: Wie breit ist ein Streifen?
art: check
niveau: 1
angabe: |
  In [Kapitel 10, Das bestimmte Integral](/lernen/mathe3/integralrechnung/das-bestimmte-integral-als-flaechenbilanz)
  hast du die Fläche unter einem Graphen mit gleich breiten Streifen angenähert. Das Intervall $[1, 4]$ wird in
  $n = 6$ gleich breite Streifen geteilt. Wie breit ist ein Streifen?
teile:
  - typ: zahl
    loesung: "(4 - 1)/6"
    fehler:
      - wert: "4/6"
        meldung: Du hast nur die rechte Grenze $4$ geteilt. Die Länge des Intervalls ist aber $4 - 1 = 3$.
      - wert: "2"
        meldung: 'Du hast $6 : 3$ gerechnet. Die Länge $3$ wird auf $6$ Streifen verteilt, also $3 : 6$.'
loesung: |
  Die Streifenbreite ist die Intervalllänge geteilt durch die Zahl der Streifen: $\Delta x = \frac{b - a}{n}$.
  ---
  Hier $\Delta x = \frac{4 - 1}{6} = \frac{3}{6} = 0{,}5$.
```

### Das Flächenproblem

Wie groß ist die Fläche unter der Parabel $y = x^2$ zwischen $x = 0$ und $x = 1$? Für Rechtecke, Dreiecke und
Kreise gibt es Formeln. Für ein Gebiet mit krummem Rand gibt es keine Formel, die man einfach einsetzen könnte.
Schon Archimedes hat um 250 vor Christus eine eng verwandte Fläche bestimmt, nämlich ein Stück der Parabel
unter einer Sehne (ein Parabelsegment). Er hat es mit immer feineren Dreiecken ausgefüllt, deren Fläche er kannte. Den Begriff „Grenzwert“ gab es damals noch nicht.

Die Idee ist bis heute dieselbe:

1. Zerlege das Intervall $[0, 1]$ in kleine Teilintervalle.
2. Ersetze die Fläche über jedem Teilintervall durch ein Rechteck.
3. Addiere die Rechteckflächen. Das ergibt einen Näherungswert.
4. Mache die Teilintervalle immer feiner. Streben die Näherungswerte gegen eine feste Zahl, dann *definiert*
   man diese Zahl als die Fläche, also als das Integral.

```plot
x: [-0.1, 1.15]
y: [-0.05, 1.1]
achsen: { x: "x", y: "y" }
graphen:
  - { f: "x^2", label: "y = x²", farbe: 0 }
flaechen:
  - { f: "0.0625", von: 0.25, bis: 0.5, farbe: 1 }
  - { f: "0.25", von: 0.5, bis: 0.75, farbe: 1 }
  - { f: "0.5625", von: 0.75, bis: 1, farbe: 1 }
  - { f: "x^2", von: 0, bis: 1, farbe: 0 }
strecken:
  - { von: [0.25, 0], nach: [0.25, 0.0625] }
  - { von: [0.5, 0], nach: [0.5, 0.25] }
  - { von: [0.75, 0], nach: [0.75, 0.5625] }
  - { von: [1, 0], nach: [1, 1] }
beschriftung: Die Fläche unter y = x² auf [0, 1] (blau) wird von unten durch vier Rechtecke (orange) angenähert. Jedes Rechteck hat als Höhe den kleinsten Funktionswert auf seinem Teilintervall.
```

Bei diesem Vorgehen tauchen sofort Fragen auf, die man ernst nehmen muss:

- Welche Höhe soll ein Rechteck haben? Den Funktionswert am linken Rand, am rechten Rand, in der Mitte, den
  kleinsten oder den größten?
- Müssen die Teilintervalle gleich lang sein?
- Kommt bei jeder Wahl derselbe Grenzwert heraus? Und gibt es überhaupt einen?

Würde das Ergebnis von solchen freien Entscheidungen abhängen, wäre „die Fläche“ kein sinnvoller Begriff. Die
Theorie der Integrierbarkeit beantwortet genau diese Fragen. Das Ergebnis vorweg: Für die Funktionen aus der
Prüfung ist alles in Ordnung. Jede vernünftige Wahl führt auf denselben Grenzwert. Es gibt aber Funktionen,
bei denen das schiefgeht. An ihnen siehst du in
[14.5 Welche Funktionen sind integrierbar?](/lernen/mathe3/integrierbarkeit/welche-funktionen-sind-integrierbar),
warum die Definition so sorgfältig gebaut ist.

### Zerlegung und Feinheit

Das erste Werkzeug ist die **Zerlegung**. In Alltagssprache: Du schneidest ein Intervall an einigen Stellen
durch, so wie man eine Stange Brot in Scheiben schneidet. Die Scheiben dürfen verschieden dick sein. Beispiel:
Das Intervall $[0, 4]$ wird an den Stellen $1$ und $3$ geschnitten. Es entstehen die Teile $[0, 1]$, $[1, 3]$
und $[3, 4]$.

:::definition[Zerlegung, Teilintervall, Feinheit]
Es sei $[a, b]$ ein abgeschlossenes Intervall mit $a < b$. Eine **Zerlegung** $Z$ von $[a, b]$ ist eine endliche
Menge von **Teilungspunkten**
$$a = x_0 < x_1 < x_2 < \dots < x_n = b.$$
Sie teilt $[a, b]$ in die $n$ **Teilintervalle** $[x_{k-1}, x_k]$ mit den Längen $\Delta x_k = x_k - x_{k-1}$
für $k = 1, \dots, n$. Die **Feinheit** von $Z$ ist die Länge des längsten Teilintervalls:
$$\|Z\| = \max_{1 \le k \le n} \Delta x_k.$$
:::

Dabei ist $n$ die Zahl der Teilintervalle, $x_0$ der linke Rand $a$ und $x_n$ der rechte Rand $b$. Der Index
$k$ zählt die Teilintervalle durch. Das Zeichen $\Delta$ (griechisch „Delta“) steht für „Differenz“. Die
doppelten Striche in $\|Z\|$ liest man „Feinheit von $Z$“, und $\max$ heißt „das Größte von“.

:::beispiel[Eine Zerlegung mit verschieden langen Teilen]
Gegeben ist $Z = \{1;\ 1{,}5;\ 3;\ 4;\ 5\}$ für das Intervall $[1, 5]$.

1. **Teilungspunkte ordnen:** $x_0 = 1$, $x_1 = 1{,}5$, $x_2 = 3$, $x_3 = 4$, $x_4 = 5$. Fünf Punkte ergeben
   $n = 4$ Teilintervalle.
2. **Längen:** $\Delta x_1 = 0{,}5$, $\Delta x_2 = 1{,}5$, $\Delta x_3 = 1$ und $\Delta x_4 = 1$.
3. **Kontrolle:** Die Längen ergeben zusammen $0{,}5 + 1{,}5 + 1 + 1 = 4 = 5 - 1$. Das muss immer so sein.
4. **Feinheit:** das längste Teilintervall, also $\|Z\| = 1{,}5$.

**Nichtbeispiel:** $\{1{,}5;\ 3;\ 5\}$ ist **keine** Zerlegung von $[1, 5]$. Der linke Rand $1$ fehlt, das
Stück $[1;\ 1{,}5]$ wäre also gar nicht erfasst.
:::

In der Praxis nimmt man oft die **äquidistante Zerlegung**. Äquidistant heißt „gleich weit voneinander
entfernt“. Alle $n$ Teile sind dann gleich lang:
$$h = \frac{b - a}{n}, \qquad x_k = a + k\,h \quad\text{für } k = 0, 1, \dots, n.$$
Dabei ist $h$ die gemeinsame Länge. Die Feinheit ist hier einfach $h$, und sie geht gegen $0$, wenn $n$
gegen unendlich geht. Für $[1, 5]$ und $n = 8$ ist zum Beispiel $h = \frac{4}{8} = 0{,}5$ mit den
Teilungspunkten $1;\ 1{,}5;\ 2;\ \dots;\ 5$.

**Warum zählt die Feinheit und nicht die Anzahl der Teile?** Ein Gedankenexperiment zeigt es. Teile $[0, 1]$
in $[0;\ 0{,}5]$ und $[0{,}5;\ 1]$. Schneide dann nur die rechte Hälfte in tausend winzige Stücke. Jetzt hast du
$1001$ Teilintervalle. Über $[0;\ 0{,}5]$ liegt aber immer noch ein einziges, breites Rechteck. Dort ist die Näherung
so schlecht wie am Anfang. Erst wenn das **längste** Teilintervall klein wird, wird die Näherung überall gut.

Ein zweiter Begriff: Eine Zerlegung $Z'$ heißt **Verfeinerung** von $Z$, wenn sie alle Teilungspunkte von $Z$
enthält und eventuell noch weitere. Man schreibt dafür $Z \subseteq Z'$ und liest „$Z$ ist Teilmenge von $Z'$“.
Beispiel: $Z' = \{0;\ 0{,}5;\ 1;\ 1{,}5;\ 2\}$ ist eine Verfeinerung von $Z = \{0;\ 1;\ 2\}$. Nichtbeispiel:
Die äquidistante Zerlegung von $[0, 1]$ mit drei Teilen, also $\{0;\ \tfrac13;\ \tfrac23;\ 1\}$, ist **keine**
Verfeinerung der Zerlegung mit zwei Teilen $\{0;\ \tfrac12;\ 1\}$. Ihr fehlt der Punkt $\tfrac12$.

```aufgabe
id: ib-zr-check-feinheit
titel: Feinheit einer äquidistanten Zerlegung
art: check
niveau: 1
angabe: |
  Das Intervall $[2, 8]$ wird äquidistant in $n = 12$ Teile zerlegt. Wie groß ist die Feinheit?
teile:
  - typ: zahl
    loesung: "(8 - 2)/12"
    fehler:
      - wert: "8/12"
        meldung: 'Die Intervalllänge ist $8 - 2 = 6$, nicht $8$.'
      - wert: "12"
        meldung: Das ist die Anzahl der Teile. Die Feinheit ist eine Länge, nämlich die Länge eines Teils.
loesung: |
  Bei einer äquidistanten Zerlegung sind alle Teile gleich lang. Die Feinheit ist diese gemeinsame Länge $h$.
  ---
  $h = \frac{8 - 2}{12} = 0{,}5$.
```

### Riemann-Summen

Jetzt kommt der zentrale Begriff dieses Kapitels. Er ist für fast alle beim ersten Lesen ungewohnt, weil viele
Buchstaben gleichzeitig auftreten. Geh ihn langsam durch.

**Worum geht es in einem Satz?** Eine Riemann-Summe addiert Rechtecke über den Teilintervallen einer
Zerlegung, und die Höhe jedes Rechtecks liest du an einer frei gewählten Stelle vom Graphen ab.

**Ein Bild:** Denk an ein Säulendiagramm. Jede Säule steht auf einem Teilintervall. Ihre Höhe ist ein
Funktionswert von irgendeiner Stelle in diesem Teilintervall. Du zeigst mit dem Finger auf eine Stelle,
liest den Funktionswert ab, und das ist die Höhe der Säule.

**In kleinen Schritten:**

1. Wähle eine Zerlegung $a = x_0 < x_1 < \dots < x_n = b$.
2. Wähle in jedem Teilintervall $[x_{k-1}, x_k]$ eine Stelle. Sie heißt **Zwischenstelle** und wird $\xi_k$
   geschrieben (griechisch „xi“, gesprochen „ksi“). Die Zwischenstelle darf auch ein Rand sein.
3. Das Rechteck über dem $k$-ten Teilintervall hat die Breite $\Delta x_k$ und die Höhe $f(\xi_k)$. Seine
   Fläche ist $f(\xi_k)\,\Delta x_k$.
4. Addiere alle $n$ Rechteckflächen.

```plot
x: [-0.2, 3.3]
y: [-0.5, 9.8]
achsen: { x: "x", y: "y" }
graphen:
  - { f: "9 - x^2", label: "y = 9 − x²", farbe: 0 }
flaechen:
  - { f: "8.91", von: 0, bis: 1, farbe: 1 }
  - { f: "6.44", von: 1, bis: 2, farbe: 1 }
  - { f: "2.75", von: 2, bis: 3, farbe: 1 }
strecken:
  - { von: [0.3, 0], nach: [0.3, 8.91], gestrichelt: true }
  - { von: [1.6, 0], nach: [1.6, 6.44], gestrichelt: true }
  - { von: [2.5, 0], nach: [2.5, 2.75], gestrichelt: true }
punkte:
  - { x: 0.3, y: 8.91, label: "ξ₁ = 0,3" }
  - { x: 1.6, y: 6.44, label: "ξ₂ = 1,6" }
  - { x: 2.5, y: 2.75, label: "ξ₃ = 2,5" }
beschriftung: Eine Riemann-Summe für y = 9 − x² mit der Zerlegung 0; 1; 2; 3. In jedem Teilintervall ist eine Zwischenstelle ξ gewählt. Die Höhe des Rechtecks ist der Funktionswert an dieser Stelle.
```

:::definition[Riemann-Summe]
Es sei $f$ auf $[a, b]$ definiert, $Z$ eine Zerlegung und $\xi_k \in [x_{k-1}, x_k]$ eine Zwischenstelle in
jedem Teilintervall. Dann heißt
$$R(f, Z, \xi) = \sum_{k=1}^{n} f(\xi_k)\,\Delta x_k = f(\xi_1)\,\Delta x_1 + f(\xi_2)\,\Delta x_2 + \dots + f(\xi_n)\,\Delta x_n$$
eine **Riemann-Summe** von $f$ zur Zerlegung $Z$.
:::

Dabei ist $R$ der Name der Summe, und in der Klammer steht, wovon sie abhängt: von der Funktion $f$, der
Zerlegung $Z$ und der Wahl der Zwischenstellen $\xi$. Das Zeichen $\in$ liest man „ist Element von“ oder
„liegt in“. Benannt ist die Summe nach Bernhard Riemann. Er gab 1854 als Erster eine Definition des Integrals,
die für sehr allgemeine Funktionen funktioniert.

Bei äquidistanter Zerlegung gibt es drei wichtige Sonderfälle. Sie unterscheiden sich nur darin, welche
Zwischenstelle man nimmt.

| Name | Zwischenstelle | Formel mit $h = \frac{b-a}{n}$ |
|---|---|---|
| Linkssumme $L_n$ | der linke Rand $\xi_k = x_{k-1}$. | $h\,\big(f(x_0) + f(x_1) + \dots + f(x_{n-1})\big)$. |
| Rechtssumme $R_n$ | der rechte Rand $\xi_k = x_k$. | $h\,\big(f(x_1) + f(x_2) + \dots + f(x_n)\big)$. |
| Mittelsumme $M_n$ | die Mitte $\xi_k = \frac{x_{k-1} + x_k}{2}$. | $h\,\big(f(\xi_1) + \dots + f(\xi_n)\big)$. |

:::beispiel[Links-, Rechts- und Mittelsumme für 9 − x² auf [0, 3]]
Gesucht sind $L_3$, $R_3$ und $M_3$ für $f(x) = 9 - x^2$ auf $[0, 3]$.

1. **Zerlegung:** $h = \frac{3 - 0}{3} = 1$. Die Teilungspunkte sind $0;\ 1;\ 2;\ 3$.
2. **Funktionswerte an den Teilungspunkten:** $f(0) = 9$, $f(1) = 8$, $f(2) = 5$ und $f(3) = 0$.
3. **Linkssumme:** Wir nehmen die linken Ränder $0;\ 1;\ 2$. Also $L_3 = 1\cdot(9 + 8 + 5) = 22$.
4. **Rechtssumme:** Wir nehmen die rechten Ränder $1;\ 2;\ 3$. Also $R_3 = 1\cdot(8 + 5 + 0) = 13$.
5. **Mittelsumme:** Die Mitten sind $0{,}5;\ 1{,}5;\ 2{,}5$ mit den Werten $8{,}75;\ 6{,}75;\ 2{,}75$. Also
   $M_3 = 1\cdot(8{,}75 + 6{,}75 + 2{,}75) = 18{,}25$.

Der exakte Wert ist $\int_0^3 (9 - x^2)\dd x = \big[9x - \tfrac{x^3}{3}\big]_0^3 = 27 - 9 = 18$. Die Mittelsumme
liegt mit drei Rechtecken nur um $0{,}25$ daneben. Die Linkssumme ist zu groß und die Rechtssumme zu klein,
weil $f$ auf $[0, 3]$ fällt: Der linke Rand ist jeweils die höchste Stelle eines Teilintervalls.
:::

```aufgabe
id: ib-zr-vorhersage
titel: Was passiert mit den Summen bei mehr Rechtecken?
art: check
niveau: 1
angabe: |
  Sag voraus, bevor du das Widget nach dieser Frage benutzt: Was passiert mit der Linkssumme $L_n$ von
  $f(x) = 9 - x^2$ auf $[0, 3]$, wenn du $n$ immer größer machst?
teile:
  - typ: auswahl
    optionen:
      - '$L_n$ wird kleiner und nähert sich $18$.'
      - '$L_n$ wird größer und nähert sich $18$.'
      - '$L_n$ bleibt gleich $22$, weil sich die Fläche nicht ändert.'
      - '$L_n$ wird immer kleiner, ohne Grenze.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Weil $f$ fällt, ragen die Rechtecke der Linkssumme über den Graphen hinaus. $L_n$ liegt also über $18$. Werden die Rechtecke schmaler, ragen sie weniger heraus.'
      - wert: 2
        meldung: 'Die wahre Fläche bleibt gleich, aber die Rechtecke ändern sich. Mit mehr Rechtecken passen sie sich dem Graphen besser an.'
      - wert: 3
        meldung: 'Die Rechtecke der Linkssumme liegen hier immer über dem Graphen. $L_n$ kann deshalb nie unter die wahre Fläche $18$ fallen.'
loesung: |
  $f$ fällt auf $[0, 3]$. Der linke Rand ist in jedem Teilintervall die höchste Stelle. Die Rechtecke der Linkssumme ragen deshalb über den Graphen hinaus, und $L_n$ ist größer als $18$.
  ---
  Mit mehr Rechtecken wird der überstehende Teil kleiner. $L_n$ fällt also und nähert sich dem exakten Wert $18$.
```

```widget
name: riemann
titel: Linkssumme von 9 − x² auf [0, 3]
props: { f: "9 - x^2", a: 0, b: 3, n: 3, art: links, x: [-0.3, 3.3], y: [-0.5, 9.8] }
```

Stell im Widget zuerst $n = 3$ ein und vergleiche mit dem Beispiel. Erhöhe dann $n$ und beobachte, wie die
Linkssumme fällt. Schalte dann mit dem Knopf „rechte Ränder“ auf die Rechtssumme um. Sie steigt und nähert sich
ebenfalls $18$. Dieses Zusammenrücken von zwei Seiten ist der Kern von
[14.2 Ober- und Untersummen](/lernen/mathe3/integrierbarkeit/ober-und-untersummen) und
[14.3 Definition der Integrierbarkeit](/lernen/mathe3/integrierbarkeit/definition-der-integrierbarkeit).

:::beispiel[Eine Riemann-Summe mit Einheiten: der Weg eines Zuges]
Ein Zug fährt an. Gemessen wurde nur zu einzelnen Zeitpunkten. Gesucht ist der Weg in den ersten $60$ s.

1. **Zerlegung der Zeit:** $0;\ 10;\ 30;\ 60$ (in s). Die Teile sind $10$ s, $20$ s und $30$ s lang. Die
   Feinheit ist $30$ s.
2. **Zwischenstellen mit Messwerten:** Bei $t = 5$ s war $v = 4\ \tfrac{\text{m}}{\text{s}}$, bei $t = 20$ s
   war $v = 10\ \tfrac{\text{m}}{\text{s}}$ und bei $t = 45$ s war $v = 16\ \tfrac{\text{m}}{\text{s}}$.
3. **Rechtecke:** Jedes Rechteck ist „Geschwindigkeit mal Zeitdauer“, also ein Weg:
   $4\ \tfrac{\text{m}}{\text{s}}\cdot 10\ \text{s} = 40$ m, $10\ \tfrac{\text{m}}{\text{s}}\cdot 20\ \text{s} = 200$ m
   und $16\ \tfrac{\text{m}}{\text{s}}\cdot 30\ \text{s} = 480$ m.
4. **Riemann-Summe:** $40 + 200 + 480 = 720$ m.

Der Zug legt also ungefähr $720$ m zurück. Die Zerlegung ist nicht äquidistant, und die Zwischenstellen
liegen weder am Rand noch genau in der Mitte. Trotzdem ist das eine echte Riemann-Summe. Die Einheit ist
„Einheit des Funktionswerts mal Einheit der Variablen“, hier m/s mal s, also m.
:::

Ist $f$ irgendwo negativ, so ist dort auch der Summand $f(\xi_k)\,\Delta x_k$ negativ. Eine Riemann-Summe ist
also wie das Integral eine **Flächenbilanz**: Rechtecke unter der $x$-Achse zählen negativ. Das kennst du aus
[Kapitel 10, Das bestimmte Integral](/lernen/mathe3/integralrechnung/das-bestimmte-integral-als-flaechenbilanz).

### Grenzwerte von Summen als Integral erkennen

Manchmal steht eine lange Summe da, und man fragt nach ihrem Grenzwert. Erkennt man in ihr eine Riemann-Summe,
ist der Grenzwert ein Integral. Das ist ein beliebter Trick in Prüfungen.

:::beispiel[Ein Grenzwert, der ein Integral ist]
Gesucht ist $\displaystyle\lim_{n\to\infty}\frac1n\sum_{k=1}^{n} e^{k/n}$.

1. **Breite erkennen:** Der Faktor $\frac1n$ ist die Breite $h$ einer äquidistanten Zerlegung mit $n$ Teilen.
   Die Intervalllänge ist also $1$.
2. **Teilungspunkte erkennen:** $\frac kn$ für $k = 1, \dots, n$ sind die rechten Ränder der Teilintervalle von
   $[0, 1]$. Das sind $\frac1n;\ \frac2n;\ \dots;\ \frac nn = 1$.
3. **Funktion erkennen:** An der Stelle $\frac kn$ steht $e^{k/n}$, also $f(x) = e^x$.
4. **Deuten:** Die Summe ist die Rechtssumme $R_n$ von $e^x$ auf $[0, 1]$.
5. **Grenzwert:** $e^x$ ist stetig und deshalb integrierbar. Das zeigt
   [14.5 Welche Funktionen sind integrierbar?](/lernen/mathe3/integrierbarkeit/welche-funktionen-sind-integrierbar).
   Bei einer integrierbaren Funktion strebt jede Folge von Riemann-Summen mit Feinheit gegen $0$ gegen das Integral.
   Das ist Fassung 3 des Satzes in
   [14.3 Definition der Integrierbarkeit](/lernen/mathe3/integrierbarkeit/definition-der-integrierbarkeit). Also
   $$\lim_{n\to\infty}\frac1n\sum_{k=1}^{n} e^{k/n} = \int_0^1 e^x\dd x = e - 1 \approx 1{,}718.$$

Zur Kontrolle: Für $n = 1000$ ergibt die Summe etwa $1{,}719$.
:::

**Was haben wir in dieser Lektion gezeigt?** Eine Riemann-Summe ist eine Rechtecksumme mit frei gewählter
Höhe aus jedem Teilintervall. Sie ist ein Näherungswert für das Integral. Wie gut die Näherung ist, hängt von
der Feinheit ab, nicht von der Anzahl der Teile.

```reflexion
frage: Warum verlangt man, dass die Feinheit gegen $0$ geht, und nicht einfach, dass die Anzahl der Teilintervalle gegen unendlich geht?
antwort: |
  Die Anzahl allein sagt nichts darüber, wie gut die Rechtecke an den Graphen passen. Man kann sehr viele
  Teilintervalle haben und trotzdem ein einziges breites Teilintervall behalten, etwa $[0;\ 0{,}5]$, wenn man nur
  die rechte Hälfte immer feiner zerlegt. Über diesem breiten Stück bleibt der Fehler groß. Die Feinheit ist die
  Länge des **längsten** Teilintervalls. Geht sie gegen $0$, dann werden **alle** Teilintervalle schmal, und die
  Rechtecke passen sich überall dem Graphen an.
```

:::achtung[Ein Rechteck zu viel]
Eine typische Fehlrechnung für die Linkssumme von $f(x) = x + 1$ auf $[0, 2]$ mit $n = 4$, also $h = 0{,}5$:
$$L_4 \overset{?}{=} 0{,}5\cdot\big(f(0) + f(0{,}5) + f(1) + f(1{,}5) + f(2)\big) = 0{,}5\cdot(1 + 1{,}5 + 2 + 2{,}5 + 3) = 5.$$
Hier wurden fünf Funktionswerte addiert, es gibt aber nur vier Teilintervalle. Das Ergebnis $5$ ist sogar
größer als die Rechtssumme. Richtig ist $L_4 = 0{,}5\cdot(1 + 1{,}5 + 2 + 2{,}5) = 3{,}5$ und
$R_4 = 0{,}5\cdot(1{,}5 + 2 + 2{,}5 + 3) = 4{,}5$. Merke: Bei $n$ Teilintervallen gibt es **genau $n$**
Summanden.
:::

:::achtung[Die falsche Breite]
Eine zweite typische Fehlrechnung: die Linkssumme von $9 - x^2$ auf $[0, 3]$ mit $n = 6$. Die Werte an den
linken Rändern $0;\ 0{,}5;\ \dots;\ 2{,}5$ ergeben zusammen $40{,}25$. Dann wird mit $h = \frac16$ multipliziert:
$$L_6 \overset{?}{=} \tfrac16\cdot 40{,}25 \approx 6{,}71.$$
Das kann nicht stimmen, denn die Fläche ist $18$. Der Fehler: $h = \frac1n$ gilt nur auf einem Intervall der
Länge $1$. Hier ist $h = \frac{3 - 0}{6} = 0{,}5$, also $L_6 = 0{,}5\cdot 40{,}25 = 20{,}125$.
:::

:::merke[Rezept: Riemann-Summe berechnen]
1. Teilungspunkte aufschreiben und die Längen $\Delta x_k$ bestimmen. Bei äquidistanter Zerlegung ist
   $h = \frac{b - a}{n}$.
2. In jedem Teilintervall die Zwischenstelle festlegen: linker Rand, rechter Rand, Mitte oder vorgegebener Wert.
3. Die Funktionswerte an den Zwischenstellen in einer Tabelle sammeln. Es sind genau $n$ Werte.
4. Jeden Wert mit der Breite seines Teilintervalls multiplizieren und alles addieren.
5. Plausibilität prüfen: Liegt das Ergebnis in der Nähe des erwarteten Integrals? Stimmt die Einheit?
:::

```aufgabe
id: ib-zerlegung-feinheit
titel: Zerlegung und Feinheit
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Gegeben ist die Zerlegung $Z = \{0;\ 0{,}5;\ 1{,}5;\ 2;\ 4\}$ des Intervalls $[0, 4]$.
  Wie viele Teilintervalle hat $Z$, und wie groß ist die Feinheit $\|Z\|$?
teile:
  - typ: zahl
    label: 'Anzahl der Teilintervalle $n$'
    loesung: "4"
    fehler:
      - wert: "5"
        meldung: Das ist die Zahl der Teilungspunkte. Zwischen fünf Punkten liegen nur vier Teilintervalle.
  - typ: zahl
    label: 'Feinheit $\|Z\|$'
    loesung: "2"
    fehler:
      - wert: "0.5"
        meldung: Das ist das **kürzeste** Teilintervall. Die Feinheit ist die Länge des längsten.
      - wert: "1"
        meldung: 'Das ist die mittlere Länge $4 : 4$. Die Feinheit ist aber die Länge des **längsten** Teilintervalls.'
hinweise:
  - Schreib die Teilintervalle einzeln auf und berechne ihre Längen. Die Feinheit ist die größte dieser Längen.
loesung: |
  **Ansatz:** Aus den geordneten Teilungspunkten lesen wir die Teilintervalle ab: $[0;\ 0{,}5]$, $[0{,}5;\ 1{,}5]$, $[1{,}5;\ 2]$ und $[2;\ 4]$. Fünf Punkte ergeben also $n = 4$ Teilintervalle.
  ---
  Längen: $0{,}5$, $1$, $0{,}5$ und $2$. Die größte ist $2$, also $\|Z\| = 2$.
  ---
  **Kontrolle:** $0{,}5 + 1 + 0{,}5 + 2 = 4$, das ist die Länge von $[0, 4]$.
```

```aufgabe
id: ib-zerlegung-verfeinerung
titel: Welche Zerlegung ist eine Verfeinerung?
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Gegeben ist die Zerlegung $Z = \{0;\ 1;\ 3\}$ von $[0, 3]$. Welche der folgenden Zerlegungen sind
  Verfeinerungen von $Z$? Wähle alle richtigen aus.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$\{0;\ 0{,}5;\ 1;\ 2;\ 3\}$'
      - '$\{0;\ 1{,}5;\ 3\}$'
      - '$\{0;\ 1;\ 3\}$'
      - '$\{0;\ 0{,}5;\ 2;\ 3\}$'
    richtig: [0, 2]
    fehler:
      - wert: [0]
        meldung: 'Diese stimmt. Es gibt aber eine zweite: Auch eine Zerlegung, die genau dieselben Punkte enthält, enthält **alle** Punkte von $Z$.'
      - wert: [0, 2, 3]
        meldung: 'Der Zerlegung $\{0;\ 0{,}5;\ 2;\ 3\}$ fehlt der Punkt $1$ aus $Z$. Mehr Punkte allein machen noch keine Verfeinerung.'
      - wert: [0, 1, 2]
        meldung: 'Der Zerlegung $\{0;\ 1{,}5;\ 3\}$ fehlt der Punkt $1$ aus $Z$. Sie hat zwar gleich viele Punkte, ist aber anders geschnitten.'
hinweise:
  - Eine Verfeinerung muss **jeden** Teilungspunkt von $Z$ enthalten. Prüfe für jede Option, ob $0$, $1$ und $3$ vorkommen.
loesung: |
  **Ansatz:** $Z'$ ist eine Verfeinerung von $Z$, wenn alle Punkte $0$, $1$ und $3$ in $Z'$ vorkommen.
  ---
  Option 1 enthält $0$, $1$ und $3$ und zusätzlich $0{,}5$ und $2$: Verfeinerung. Option 3 ist $Z$ selbst. Sie enthält alle Punkte von $Z$, also zählt sie als (unechte) Verfeinerung.
  ---
  Den Optionen 2 und 4 fehlt jeweils der Punkt $1$. Sie sind keine Verfeinerungen. Richtig sind also die Optionen 1 und 3.
```

```aufgabe
id: ib-riemann-links-rechts
titel: Links- und Rechtssumme
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Berechne für $f(x) = 4 - x^2$ auf $[0, 2]$ mit der äquidistanten Zerlegung in $n = 4$ Teile die
  Linkssumme $L_4$ und die Rechtssumme $R_4$.
teile:
  - typ: zahl
    label: '$L_4$'
    loesung: "0.5*(4 + 3.75 + 3 + 1.75)"
    anzeige: '6{,}25'
    fehler:
      - wert: "4 + 3.75 + 3 + 1.75"
        meldung: Du hast nur die Höhen addiert. Jede Höhe muss noch mit der Breite $h = 0{,}5$ multipliziert werden.
      - wert: "0.25*(4 + 3.75 + 3 + 1.75)"
        meldung: 'Die Breite ist $h = \frac{2 - 0}{4} = 0{,}5$, nicht $\frac14$. Das Intervall hat die Länge $2$.'
  - typ: zahl
    label: '$R_4$'
    loesung: "0.5*(3.75 + 3 + 1.75 + 0)"
    anzeige: '4{,}25'
    fehler:
      - wert: "0.5*(4 + 3.75 + 3 + 1.75)"
        meldung: Das ist die Linkssumme. Für die Rechtssumme nimmst du die rechten Ränder $0{,}5;\ 1;\ 1{,}5;\ 2$.
hinweise:
  - '$h = \frac{2 - 0}{4} = 0{,}5$. Berechne zuerst die Funktionswerte an $0;\ 0{,}5;\ 1;\ 1{,}5;\ 2$.'
loesung: |
  **Ansatz:** Äquidistante Zerlegung mit $h = \frac{2 - 0}{4} = 0{,}5$. Funktionswerte: $f(0) = 4$, $f(0{,}5) = 3{,}75$, $f(1) = 3$, $f(1{,}5) = 1{,}75$ und $f(2) = 0$.
  ---
  Linkssumme mit den linken Rändern: $L_4 = 0{,}5\cdot(4 + 3{,}75 + 3 + 1{,}75) = 0{,}5\cdot 12{,}5 = 6{,}25$.
  ---
  Rechtssumme mit den rechten Rändern: $R_4 = 0{,}5\cdot(3{,}75 + 3 + 1{,}75 + 0) = 0{,}5\cdot 8{,}5 = 4{,}25$.
  ---
  **Plausibilität:** Der exakte Wert $\int_0^2 (4 - x^2)\dd x = 8 - \frac83 = \frac{16}{3} \approx 5{,}33$ liegt dazwischen. Weil $f$ fällt, ist die Linkssumme zu groß und die Rechtssumme zu klein.
```

```aufgabe
id: ib-riemann-zufluss
titel: Wassermenge aus wenigen Messungen
niveau: 2
lernziel: 0
kompetenz: modellieren
angabe: |
  In einen Tank fließt Wasser. Die Zuflussrate $r(t)$ wurde nur dreimal gemessen: bei $t = 1$ min war sie
  $30$ L/min, bei $t = 4$ min $24$ L/min und bei $t = 9$ min $15$ L/min. Die Zeit $[0, 12]$ (in min) wird
  zerlegt in $0;\ 2;\ 6;\ 12$, und jede Messung gilt als Zwischenstelle ihres Teilintervalls.

  a) Wie groß ist die Feinheit der Zerlegung?

  b) Schätze mit der Riemann-Summe, wie viele Liter in $12$ Minuten zufließen.
teile:
  - typ: zahl
    label: 'a) Feinheit'
    einheit: min
    loesung: "6"
    fehler:
      - wert: "4"
        meldung: 'Das ist die mittlere Länge $12 : 3$. Die Teilintervalle sind aber $2$, $4$ und $6$ Minuten lang, und die Feinheit ist die größte Länge.'
      - wert: "2"
        meldung: Das ist das kürzeste Teilintervall. Die Feinheit ist die Länge des längsten.
  - typ: zahl
    label: 'b) Wassermenge'
    einheit: L
    loesung: "30*2 + 24*4 + 15*6"
    fehler:
      - wert: "(30 + 24 + 15)*4"
        meldung: Du hast so gerechnet, als wären alle Teilintervalle $4$ Minuten lang. Jede Rate gilt aber nur für die Länge **ihres** Teilintervalls.
      - wert: "30 + 24 + 15"
        meldung: Du hast nur die Raten addiert. Eine Rate in L/min ergibt erst mal eine Zeitdauer in min eine Menge in L.
hinweise:
  - 'Die Teilintervalle sind $[0, 2]$, $[2, 6]$ und $[6, 12]$. Berechne ihre Längen.'
  - 'Jedes Rechteck ist „Rate mal Dauer“. Die Rate $30$ L/min gehört zu $[0, 2]$, die Rate $24$ L/min zu $[2, 6]$ und die Rate $15$ L/min zu $[6, 12]$.'
loesung: |
  **Ansatz:** Die Wassermenge ist die Fläche unter der Zuflussrate. Mit nur drei Messwerten nähern wir sie durch eine Riemann-Summe an, bei der jede Messung die Höhe ihres Rechtecks liefert.
  ---
  Längen der Teilintervalle: $2$ min, $4$ min und $6$ min. Die Feinheit ist die größte Länge, also $6$ min.
  ---
  Riemann-Summe: $30\ \tfrac{\text{L}}{\text{min}}\cdot 2\ \text{min} + 24\ \tfrac{\text{L}}{\text{min}}\cdot 4\ \text{min} + 15\ \tfrac{\text{L}}{\text{min}}\cdot 6\ \text{min} = 60 + 96 + 90 = 246$ L.
  ---
  **Antwort:** In $12$ Minuten fließen ungefähr $246$ Liter zu. **Plausibilität:** Mit konstant $15$ L/min wären es $180$ L, mit konstant $30$ L/min $360$ L. Der Wert liegt dazwischen.
gefuehrt:
  - text: Wie lang ist das längste Teilintervall der Zerlegung $0;\ 2;\ 6;\ 12$?
    teil: { typ: zahl, loesung: "6", fehler: [ { wert: "4", meldung: 'Das ist der Durchschnitt. Gesucht ist die größte der Längen $2$, $4$ und $6$.' } ] }
    erklaerung: 'Die Längen sind $2$, $4$ und $6$ Minuten. Die Feinheit ist $6$ min.'
  - text: Wie viele Liter fließen im ersten Teilintervall $[0, 2]$ ungefähr zu?
    teil: { typ: zahl, loesung: "60" }
    erklaerung: 'Rate mal Dauer: $30\ \tfrac{\text{L}}{\text{min}}\cdot 2\ \text{min} = 60$ L.'
  - text: Berechne ebenso die Beiträge der Teilintervalle $[2, 6]$ und $[6, 12]$ und addiere alle drei.
    teil: { typ: zahl, loesung: "246" }
    erklaerung: '$24\cdot 4 = 96$ und $15\cdot 6 = 90$. Zusammen $60 + 96 + 90 = 246$ L.'
  - text: Überlege, ob das Ergebnis plausibel ist.
    erklaerung: 'Die kleinste Rate ergäbe $15\cdot 12 = 180$ L, die größte $30\cdot 12 = 360$ L. $246$ L liegt dazwischen.'
```

```aufgabe
id: ib-riemann-mittel
titel: Mittelsumme für 1/x
niveau: 2
lernziel: 0
kompetenz: rechnen
angabe: |
  Berechne die Mittelsumme $M_4$ für $f(x) = \frac1x$ auf $[1, 3]$ (äquidistant, $n = 4$) auf vier
  Nachkommastellen. Vergleiche mit dem exakten Wert $\int_1^3 \frac1x\dd x = \ln 3$ und gib den Fehler
  $\ln 3 - M_4$ an.
teile:
  - typ: zahl
    label: '$M_4$'
    loesung: "0.5*(1/1.25 + 1/1.75 + 1/2.25 + 1/2.75)"
    anzeige: '\approx 1{,}0898'
    toleranz: 0.0005
    fehler:
      - wert: "0.5*(1/1 + 1/1.5 + 1/2 + 1/2.5)"
        meldung: Das ist die Linkssumme. Bei der Mittelsumme nimmst du die **Mitten** der Teilintervalle, also $1{,}25;\ 1{,}75;\ 2{,}25;\ 2{,}75$.
      - wert: "0.25*(1/1.25 + 1/1.75 + 1/2.25 + 1/2.75)"
        meldung: 'Die Breite ist $h = \frac{3 - 1}{4} = 0{,}5$, nicht $\frac14$. Das Intervall hat die Länge $2$.'
  - typ: zahl
    label: 'Fehler $\ln 3 - M_4$'
    loesung: "ln(3) - 0.5*(1/1.25 + 1/1.75 + 1/2.25 + 1/2.75)"
    anzeige: '\approx 0{,}0089'
    toleranz: 0.0002
hinweise:
  - '$h = 0{,}5$. Die Mitten der Teilintervalle liegen jeweils $0{,}25$ rechts vom linken Rand.'
  - 'Die Mitten sind $1{,}25;\ 1{,}75;\ 2{,}25;\ 2{,}75$. Rechne die vier Funktionswerte auf vier Nachkommastellen.'
loesung: |
  **Ansatz:** Mittelsumme mit $h = \frac{3 - 1}{4} = 0{,}5$. Die Mitten der Teilintervalle sind $1{,}25;\ 1{,}75;\ 2{,}25;\ 2{,}75$.
  ---
  Funktionswerte: $\frac{1}{1{,}25} = 0{,}8$, $\frac{1}{1{,}75} \approx 0{,}5714$, $\frac{1}{2{,}25} \approx 0{,}4444$ und $\frac{1}{2{,}75} \approx 0{,}3636$. Summe $\approx 2{,}1795$.
  ---
  $M_4 \approx 0{,}5\cdot 2{,}1795 \approx 1{,}0898$.
  ---
  Mit $\ln 3 \approx 1{,}0986$ ist der Fehler etwa $0{,}0089$. Das sind weniger als $1\,\%$ des exakten Werts. Die Mittelsumme ist mit nur vier Rechtecken schon sehr genau.
```

```aufgabe
id: ib-riemann-fehler
titel: Wo steckt der Fehler in der Linkssumme?
niveau: 2
lernziel: 0
kompetenz: begruenden
angabe: |
  Ein Mitschüler berechnet die Linkssumme von $f(x) = 2x + 1$ auf $[1, 3]$ mit $n = 4$ so:
  $$L_4 = 0{,}5\cdot\big(f(1) + f(1{,}5) + f(2) + f(2{,}5) + f(3)\big) = 0{,}5\cdot(3 + 4 + 5 + 6 + 7) = 12{,}5.$$
  a) Was ist falsch?

  b) Berechne die richtige Linkssumme $L_4$.
teile:
  - typ: auswahl
    label: 'a) Der Fehler'
    optionen:
      - 'Er hat fünf Funktionswerte addiert, obwohl es nur vier Teilintervalle gibt.'
      - 'Die Breite müsste $h = \frac14$ sein.'
      - 'Bei einer Linkssumme muss man die Funktionswerte von rechts nach links addieren.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Die Breite $h = \frac{3 - 1}{4} = 0{,}5$ stimmt. Das Intervall hat die Länge $2$, nicht $1$.'
      - wert: 2
        meldung: Die Reihenfolge beim Addieren spielt keine Rolle. Zähle die Summanden und vergleiche mit der Zahl der Teilintervalle.
  - typ: zahl
    label: 'b) $L_4$'
    loesung: "0.5*(3 + 4 + 5 + 6)"
    fehler:
      - wert: "0.5*(4 + 5 + 6 + 7)"
        meldung: Das ist die Rechtssumme. Für die Linkssumme nimmst du die linken Ränder $1;\ 1{,}5;\ 2;\ 2{,}5$.
hinweise:
  - Zähle, wie viele Teilintervalle es gibt und wie viele Funktionswerte der Mitschüler addiert hat.
  - 'Die linken Ränder der vier Teilintervalle sind $1;\ 1{,}5;\ 2;\ 2{,}5$. Der Punkt $3$ ist nur ein rechter Rand.'
loesung: |
  **Ansatz:** Bei $n = 4$ Teilintervallen hat jede Riemann-Summe genau vier Summanden, einen pro Rechteck.
  ---
  a) Der Mitschüler hat fünf Werte addiert, also ein Rechteck zu viel. Sein Ergebnis $12{,}5$ ist sogar größer als die Rechtssumme. Das zeigt, dass etwas nicht stimmt.
  ---
  b) Die Linkssumme nimmt die linken Ränder $1;\ 1{,}5;\ 2;\ 2{,}5$: $L_4 = 0{,}5\cdot(3 + 4 + 5 + 6) = 0{,}5\cdot 18 = 9$.
  ---
  **Kontrolle:** Die Rechtssumme ist $0{,}5\cdot(4 + 5 + 6 + 7) = 11$. Der exakte Wert $\int_1^3 (2x + 1)\dd x = \big[x^2 + x\big]_1^3 = 12 - 2 = 10$ liegt zwischen $9$ und $11$, wie es bei einer wachsenden Funktion sein muss.
```

```aufgabe
id: ib-riemann-grenzwert
titel: Eine Summe als Integral erkennen
niveau: 3
lernziel: 0
kompetenz: verstehen
angabe: |
  Bestimme den Grenzwert
  $$\lim_{n\to\infty} \frac{1}{n}\sum_{k=1}^{n} \sqrt{\frac{k}{n}},$$
  indem du die Summe als Riemann-Summe eines Integrals deutest.
teile:
  - typ: zahl
    label: 'Grenzwert'
    loesung: "2/3"
    anzeige: '\tfrac23'
    fehler:
      - wert: "0"
        meldung: 'Jeder einzelne Summand geht gegen $0$, aber es werden immer mehr Summanden. Darum muss die Summe nicht gegen $0$ gehen. Deute sie als Rechtecksumme.'
      - wert: "1"
        meldung: 'Die Wurzeln sind alle höchstens $1$, aber die meisten sind deutlich kleiner. Der Grenzwert ist die Fläche unter $\sqrt x$ auf $[0, 1]$, und die ist kleiner als $1$.'
hinweise:
  - 'Welche Zerlegung von welchem Intervall hat die Teilungspunkte $x_k = \frac kn$ und die Breite $h = \frac1n$?'
  - 'Die Summe ist die Rechtssumme von $f(x) = \sqrt x$ auf $[0, 1]$. Berechne das Integral mit einer Stammfunktion.'
loesung: |
  **Ansatz:** Der Faktor $\frac1n$ ist die Breite $h$, und $\frac kn$ für $k = 1, \dots, n$ sind die rechten Ränder der äquidistanten Zerlegung von $[0, 1]$.
  ---
  Die Summe ist also die Rechtssumme $R_n$ von $f(x) = \sqrt x$ auf $[0, 1]$.
  ---
  $f$ ist stetig, also integrierbar. Das zeigt [14.5 Welche Funktionen sind integrierbar?](/lernen/mathe3/integrierbarkeit/welche-funktionen-sind-integrierbar). Dann strebt jede Folge von Riemann-Summen, deren Feinheit gegen $0$ geht, gegen das Integral. Das ist Fassung 3 in [14.3 Definition der Integrierbarkeit](/lernen/mathe3/integrierbarkeit/definition-der-integrierbarkeit).
  ---
  $$\lim_{n\to\infty}\frac1n\sum_{k=1}^n\sqrt{\tfrac kn} = \int_0^1 \sqrt x\dd x = \Big[\tfrac23 x^{3/2}\Big]_0^1 = \tfrac23.$$
  **Kontrolle:** Für $n = 1000$ ergibt die Summe etwa $0{,}667$.
```

```aufgabe
id: ib-riemann-grenzwert-ln
titel: Ein Grenzwert, der ein Logarithmus ist
niveau: 3
lernziel: 0
kompetenz: anwenden
angabe: |
  Bestimme
  $$\lim_{n\to\infty}\sum_{k=1}^{n}\frac{1}{n + k}$$
  auf vier Nachkommastellen. Tipp: Klammere zuerst $\frac1n$ aus.
teile:
  - typ: zahl
    label: 'Grenzwert'
    loesung: "ln(2)"
    anzeige: '\ln 2 \approx 0{,}6931'
    toleranz: 0.0005
    fehler:
      - wert: "0"
        meldung: 'Jeder Summand $\frac{1}{n + k}$ geht gegen $0$. Es sind aber $n$ Summanden, und $n$ wächst mit. Deute die Summe als Rechtecksumme.'
      - wert: "1"
        meldung: 'Der Grenzwert ist die Fläche unter $\frac{1}{1 + x}$ auf $[0, 1]$. Diese Funktion ist höchstens $1$ und fällt bis auf $\frac12$. Die Fläche ist deshalb echt kleiner als die des Quadrats mit Fläche $1$.'
hinweise:
  - 'Es ist $\frac{1}{n + k} = \frac1n\cdot\frac{1}{1 + \frac kn}$.'
  - 'Die Summe ist die Rechtssumme von $f(x) = \frac{1}{1 + x}$ auf $[0, 1]$. Eine Stammfunktion ist $\ln(1 + x)$.'
loesung: |
  **Ansatz:** Wir formen jeden Summanden so um, dass die Breite $\frac1n$ sichtbar wird: $\frac{1}{n + k} = \frac1n\cdot\frac{1}{1 + \frac kn}$.
  ---
  Damit ist $\sum_{k=1}^n \frac{1}{n+k} = \frac1n\sum_{k=1}^n \frac{1}{1 + \frac kn}$. Das ist die Rechtssumme von $f(x) = \frac{1}{1 + x}$ auf $[0, 1]$ mit den rechten Rändern $\frac kn$.
  ---
  $f$ ist auf $[0, 1]$ stetig, also strebt die Rechtssumme gegen das Integral: $\int_0^1 \frac{1}{1 + x}\dd x = \big[\ln(1 + x)\big]_0^1 = \ln 2 - \ln 1 = \ln 2$.
  ---
  **Ergebnis:** Der Grenzwert ist $\ln 2 \approx 0{,}6931$. **Plausibilität:** Er liegt zwischen den Schranken $\frac12$ und $1$, die sich aus dem kleinsten und größten Summanden ergeben.
```

## Ober- und Untersummen

```aufgabe
id: ib-ou-vorwissen
titel: Kleinster Wert auf einem Intervall
art: check
niveau: 1
angabe: |
  Welchen kleinsten Wert nimmt $f(x) = x^2$ auf dem Intervall $[-1, 2]$ an? Zum Nachlesen:
  [Kapitel 12, Satz vom Maximum und Minimum](/lernen/mathe3/grenzwerte-stetigkeit/satz-vom-maximum-und-minimum).
teile:
  - typ: zahl
    loesung: "0"
    fehler:
      - wert: "1"
        meldung: 'Das ist der Wert am linken Rand, $f(-1) = 1$. Im Inneren des Intervalls liegt aber die Stelle $0$, und dort ist $f(0) = 0$.'
      - wert: "4"
        meldung: Das ist der **größte** Wert, er liegt am rechten Rand.
loesung: |
  $f(x) = x^2$ fällt auf $[-1, 0]$ und wächst auf $[0, 2]$. Der Tiefpunkt liegt bei $x = 0$, und $0$ liegt im Intervall.
  ---
  Der kleinste Wert ist also $f(0) = 0$. Die Randwerte $f(-1) = 1$ und $f(2) = 4$ sind größer.
```

Riemann-Summen hängen von der Wahl der Zwischenstellen ab. Diese Freiheit ist unbequem: Welche Wahl ist die
richtige? Die Lösung ist überraschend einfach. Man nimmt in jedem Teilintervall die beiden **extremen**
Wahlen: einmal die kleinstmögliche Höhe und einmal die größtmögliche. Die erste Summe liegt sicher unter der
Fläche, die zweite sicher darüber. Jede andere Riemann-Summe liegt dazwischen.

### Infimum und Supremum: kleinster und größter Wert, wenn es ihn nicht gibt

Eine stetige Funktion nimmt auf einem abgeschlossenen Intervall einen kleinsten und einen größten Wert an. Das
ist der Satz vom Maximum und Minimum aus
[Kapitel 12, Satz vom Maximum und Minimum](/lernen/mathe3/grenzwerte-stetigkeit/satz-vom-maximum-und-minimum). Bei unstetigen
Funktionen kann ein größter Wert fehlen. Darum braucht man zwei Begriffe, die immer funktionieren.

**Worum geht es?** Das **Supremum** ist die kleinste obere Schranke, also die kleinste Zahl, über die die
Funktion nie hinauskommt. Das Wort kommt aus dem Lateinischen und heißt „das Oberste“. Das **Infimum** ist
die größte untere Schranke, lateinisch „das Unterste“. Man schreibt $\sup$ und $\inf$.

**Ein Bild:** Stell dir eine Zimmerdecke vor, die du so weit absenkst, bis sie den Graphen gerade berührt oder
ihm beliebig nahe kommt. Die Höhe dieser Decke ist das Supremum. Der Fußboden, den du so weit anhebst wie
möglich, ist das Infimum.

**Beispiel:** $f(x) = x$ auf $[0, 1)$, also ohne den rechten Rand. Die Werte kommen der $1$ beliebig nahe,
erreichen sie aber nie. Ein Maximum gibt es nicht, das Supremum ist trotzdem $1$. **Nichtbeispiel:** Die Zahl
$2$ ist zwar eine obere Schranke, aber nicht die kleinste. Sie ist also **nicht** das Supremum. Dass jede nach
oben beschränkte Menge reeller Zahlen ein Supremum hat, ist die Vollständigkeit von $\R$ aus
[Kapitel 11](/lernen/mathe3/grenzwerte-folgen/monotoniekriterium-und-vollstaendigkeit-von).

Für stetige Funktionen auf abgeschlossenen Intervallen ist alles einfacher: **Infimum ist Minimum, Supremum ist
Maximum.** Das ist der Normalfall in diesem Kapitel.

```aufgabe
id: ib-ou-check-supremum
titel: Supremum ohne Maximum
art: check
niveau: 1
angabe: |
  Betrachte $f(x) = x^2$ auf dem Intervall $[0, 2)$, also ohne den rechten Rand. Welche Aussage stimmt?
teile:
  - typ: auswahl
    optionen:
      - 'Das Supremum ist $4$, ein Maximum gibt es nicht.'
      - 'Das Maximum ist $4$.'
      - 'Das Supremum ist $2$.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Der Wert $4 = f(2)$ würde nur an der Stelle $2$ angenommen. Diese Stelle gehört aber nicht zum Intervall.'
      - wert: 2
        meldung: 'Gefragt ist nach den **Funktionswerten**, nicht nach den $x$-Werten. Die Funktionswerte kommen der $4$ beliebig nahe.'
loesung: |
  Für $x$ knapp unter $2$ ist $x^2$ knapp unter $4$. Die Werte kommen der $4$ also beliebig nahe.
  ---
  Erreicht wird $4$ aber nicht, weil $x = 2$ fehlt. Das Supremum ist $4$, ein Maximum gibt es nicht.
```

:::definition[Untersumme und Obersumme]
Es sei $f$ auf $[a, b]$ **beschränkt** und $Z = \{x_0, \dots, x_n\}$ eine Zerlegung. Für jedes Teilintervall setzt man
$$m_k = \inf_{x \in [x_{k-1}, x_k]} f(x), \qquad M_k = \sup_{x \in [x_{k-1}, x_k]} f(x).$$
Dann heißen
$$U(f, Z) = \sum_{k=1}^n m_k\,\Delta x_k \quad\text{(Untersumme)}, \qquad O(f, Z) = \sum_{k=1}^n M_k\,\Delta x_k \quad\text{(Obersumme)}.$$
:::

Dabei ist $m_k$ die kleinste und $M_k$ die größte Höhe auf dem $k$-ten Teilintervall, jeweils im Sinn von Infimum
und Supremum. **Beschränkt** heißt: Alle Funktionswerte liegen zwischen zwei festen Zahlen. Diese Bedingung ist
nötig, damit $m_k$ und $M_k$ echte Zahlen sind. Ein Nichtbeispiel: $f(x) = \frac1x$ für $0 < x \le 1$ mit
$f(0) = 0$ ist unbeschränkt. Auf dem ersten Teilintervall gibt es keine obere Schranke, und eine Obersumme
existiert nicht.

:::beispiel[Unter- und Obersumme einer Funktion mit Hochpunkt]
Gesucht sind $U$ und $O$ für $f(x) = 4x - x^2$ auf $[0, 4]$ mit $Z = \{0;\ 1;\ 2;\ 3;\ 4\}$.

1. **Monotonie klären:** $f'(x) = 4 - 2x$ ist null bei $x = 2$. Also wächst $f$ auf $[0, 2]$ und fällt auf
   $[2, 4]$. Der Hochpunkt liegt bei $x = 2$, genau auf einem Teilungspunkt.
2. **Funktionswerte:** $f(0) = 0$, $f(1) = 3$, $f(2) = 4$, $f(3) = 3$, $f(4) = 0$.
3. **Kleinste und größte Höhe je Teilintervall:** Weil $f$ auf jedem Teilintervall monoton ist, liegen sie an
   den Rändern.

| Teilintervall | $m_k$ | $M_k$ |
|---|---|---|
| $[0, 1]$ | $0$. | $3$. |
| $[1, 2]$ | $3$. | $4$. |
| $[2, 3]$ | $3$. | $4$. |
| $[3, 4]$ | $0$. | $3$. |

4. **Summen:** Alle Teilintervalle haben die Länge $1$. Also $U = 0 + 3 + 3 + 0 = 6$ und $O = 3 + 4 + 4 + 3 = 14$.
5. **Kontrolle:** Der exakte Wert ist $\int_0^4 (4x - x^2)\dd x = 32 - \frac{64}{3} = \frac{32}{3} \approx 10{,}67$. Er
   liegt zwischen $6$ und $14$.
:::

```plot
x: [-0.2, 4.3]
y: [-0.4, 4.6]
achsen: { x: "x", y: "y" }
graphen:
  - { f: "4*x - x^2", label: "y = 4x − x²", farbe: 0 }
flaechen:
  - { f: "3", von: 1, bis: 3, farbe: 2 }
strecken:
  - { von: [0, 3], nach: [1, 3], farbe: 1 }
  - { von: [1, 4], nach: [3, 4], farbe: 1 }
  - { von: [3, 3], nach: [4, 3], farbe: 1 }
  - { von: [1, 0], nach: [1, 4], gestrichelt: true }
  - { von: [2, 0], nach: [2, 4], gestrichelt: true }
  - { von: [3, 0], nach: [3, 4], gestrichelt: true }
beschriftung: Untersumme (grüne Fläche, Höhe 3 auf [1, 3], Höhe 0 außen) und Obersumme (orange Oberkanten) für y = 4x − x² mit vier Teilintervallen. Die Untersumme ist 6, die Obersumme 14. Das Integral 32/3 liegt dazwischen.
```

### Die Grundungleichung

Auf jedem Teilintervall gilt $m_k \le f(\xi_k) \le M_k$, egal welche Zwischenstelle $\xi_k$ man wählt. Denn
$m_k$ ist die kleinste und $M_k$ die größte Höhe. Wir multiplizieren mit der positiven Länge $\Delta x_k$.
Dabei bleiben die Ungleichheitszeichen erhalten. Dann addieren wir über alle $k$:

:::satz[Riemann-Summen liegen zwischen Unter- und Obersumme]
Für jede Zerlegung $Z$ und jede Wahl der Zwischenstellen gilt
$$U(f, Z) \;\le\; R(f, Z, \xi) \;\le\; O(f, Z).$$
:::

Für die Funktion aus dem Beispiel bedeutet das: Jede Riemann-Summe zur Zerlegung $\{0;\ 1;\ 2;\ 3;\ 4\}$ liegt
zwischen $6$ und $14$, egal welche Zwischenstellen du wählst.

```aufgabe
id: ib-ou-check-dazwischen
titel: Wo liegt eine Riemann-Summe?
art: check
niveau: 1
angabe: |
  Für eine Funktion $f$ und eine Zerlegung $Z$ gilt $U(f, Z) = 2{,}4$ und $O(f, Z) = 3{,}1$. Welche Zahl kann
  **keine** Riemann-Summe von $f$ zu dieser Zerlegung sein?
teile:
  - typ: auswahl
    optionen: ['$2{,}4$', '$2{,}9$', '$3{,}1$', '$3{,}3$']
    richtig: [3]
    fehler:
      - wert: 0
        meldung: 'Die Untersumme selbst kann eine Riemann-Summe sein, etwa wenn $f$ stetig ist und man jedes $\xi_k$ an die Stelle des Minimums legt.'
      - wert: 2
        meldung: 'Die Obersumme kann eine Riemann-Summe sein, wenn die Maxima angenommen werden. Gesucht ist eine Zahl **außerhalb** von $[2{,}4;\ 3{,}1]$.'
loesung: |
  Jede Riemann-Summe liegt zwischen Unter- und Obersumme, also in $[2{,}4;\ 3{,}1]$.
  ---
  $3{,}3$ ist größer als die Obersumme. Das ist unmöglich.
```

### Verfeinern verbessert die Einschließung

Der nächste Satz ist der Kern der ganzen Theorie. Er ist anschaulich, aber man muss ihn einmal sauber denken.

**Worum geht es?** Fügst du einen Teilungspunkt hinzu, kann die Untersumme nur größer werden oder gleich
bleiben, und die Obersumme kann nur kleiner werden oder gleich bleiben. Die Einschließung wird also nie
schlechter.

**Ein Bild:** Ein breites Rechteck unter dem Graphen muss so niedrig sein wie die tiefste Stelle des ganzen
Teilintervalls. Teilst du das Intervall, darf jede Hälfte ihre **eigene** tiefste Stelle nehmen. Mindestens
eine Hälfte kann dann höher stehen.

:::satz[Verfeinern verbessert]
Ist $Z'$ eine Verfeinerung von $Z$, so gilt
$$U(f, Z) \le U(f, Z') \le O(f, Z') \le O(f, Z).$$
Für **beliebige** Zerlegungen $Z_1$ und $Z_2$ gilt außerdem $U(f, Z_1) \le O(f, Z_2)$. Jede Untersumme ist also
kleiner oder gleich jeder Obersumme.
:::

:::beispiel[Verfeinern in Zahlen]
Wir nehmen wieder $f(x) = 4x - x^2$ auf $[0, 4]$ und vergleichen zwei Zerlegungen.

1. **Grobe Zerlegung** $Z = \{0;\ 2;\ 4\}$: Auf $[0, 2]$ ist die kleinste Höhe $f(0) = 0$ und die größte
   $f(2) = 4$. Auf $[2, 4]$ ebenso $0$ und $4$. Also $U(f, Z) = 2\cdot 0 + 2\cdot 0 = 0$ und
   $O(f, Z) = 2\cdot 4 + 2\cdot 4 = 16$.
2. **Verfeinerung** $Z' = \{0;\ 1;\ 2;\ 3;\ 4\}$: Aus dem ersten Beispiel kennen wir $U(f, Z') = 6$ und
   $O(f, Z') = 14$.
3. **Vergleich:** Die Untersumme ist von $0$ auf $6$ gestiegen, die Obersumme von $16$ auf $14$ gefallen. Die
   Lücke zwischen beiden ist von $16$ auf $8$ geschrumpft.
:::

:::beweis
**Schritt 1: ein einziger neuer Punkt.** Es genügt, einen Punkt $t$ in ein Teilintervall $[x_{k-1}, x_k]$
einzufügen. Mehrere Punkte fügt man einfach nacheinander ein.

**Schritt 2: Was ändert sich in der Untersumme?** Nur der Summand $m_k\,(x_k - x_{k-1})$ wird ersetzt, und
zwar durch $m'\,(t - x_{k-1}) + m''\,(x_k - t)$. Dabei sind $m'$ und $m''$ die Infima auf den beiden neuen Teilen.

**Schritt 3: Warum ist der neue Beitrag nicht kleiner?** Jedes neue Teil ist ein Stück des alten
Teilintervalls. Auf einem Stück können die Werte nicht tiefer liegen als auf dem Ganzen. Also gilt
$m' \ge m_k$ und $m'' \ge m_k$. Damit ist
$m'\,(t - x_{k-1}) + m''\,(x_k - t) \ge m_k\,(t - x_{k-1}) + m_k\,(x_k - t) = m_k\,(x_k - x_{k-1})$.

**Schritt 4: Obersumme.** Mit derselben Überlegung sind die Suprema auf den Teilen höchstens so groß wie
$M_k$. Die Obersumme kann also nur fallen oder gleich bleiben.

**Schritt 5: beliebige Zerlegungen.** Für $Z_1$ und $Z_2$ nimmt man die gemeinsame Verfeinerung
$Z = Z_1 \cup Z_2$, also alle Punkte aus beiden. Das Zeichen $\cup$ liest man „vereinigt mit“. Nach Schritt 1
bis 4 gilt $U(f, Z_1) \le U(f, Z) \le O(f, Z) \le O(f, Z_2)$.
:::

**Was haben wir gezeigt?** Untersummen wachsen beim Verfeinern von unten, Obersummen schrumpfen von oben,
und keine Untersumme kann je über eine Obersumme hinausschießen.

```aufgabe
id: ib-ou-check-verfeinerung
titel: Was kann eine Verfeinerung liefern?
art: check
niveau: 1
angabe: |
  Für eine Zerlegung $Z$ gilt $U(f, Z) = 3{,}2$ und $O(f, Z) = 5{,}0$. $Z'$ ist eine Verfeinerung von $Z$.
  Welcher Wert ist für $U(f, Z')$ möglich?
teile:
  - typ: auswahl
    optionen: ['$3{,}0$', '$3{,}6$', '$5{,}4$']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Beim Verfeinern kann die Untersumme nicht kleiner werden. $3{,}0$ liegt unter $3{,}2$.
      - wert: 2
        meldung: Keine Untersumme kann größer sein als eine Obersumme. $5{,}4$ liegt über $O(f, Z) = 5{,}0$.
loesung: |
  Beim Verfeinern wächst die Untersumme oder bleibt gleich. Also ist $U(f, Z') \ge 3{,}2$.
  ---
  Außerdem liegt jede Untersumme unter jeder Obersumme, also $U(f, Z') \le 5{,}0$. Nur $3{,}6$ passt.
```


### Monotone Funktionen: Ober- und Untersumme sofort ablesen

Ist $f$ auf $[a, b]$ **monoton wachsend**, also nie fallend, liegt in jedem Teilintervall der kleinste Wert am
linken Rand und der größte am rechten Rand. Dann ist die Untersumme gleich der Linkssumme und die Obersumme
gleich der Rechtssumme. Bei **monoton fallendem** $f$ ist es umgekehrt.

Bei äquidistanter Zerlegung gibt es für wachsendes $f$ eine schöne Formel für den Abstand:
$$O_n - U_n = h\big(f(x_1) + \dots + f(x_n)\big) - h\big(f(x_0) + \dots + f(x_{n-1})\big) = h\,\big(f(x_n) - f(x_0)\big) = \frac{b-a}{n}\,\big(f(b) - f(a)\big).$$
Alle mittleren Funktionswerte kommen in beiden Klammern vor und heben sich weg. Übrig bleiben nur $f(x_n)$ und
$f(x_0)$. So eine Summe, bei der sich fast alles weghebt, heißt **Teleskopsumme**, weil sie zusammenfällt wie
ein Fernrohr. Für fallendes $f$ steht $f(a) - f(b)$ statt $f(b) - f(a)$. Die Indizes $U_n$ und $O_n$ bedeuten:
Unter- und Obersumme der äquidistanten Zerlegung mit $n$ Teilen.

:::beispiel[Wurzelfunktion mit Teleskopformel]
Gesucht sind $U_4$ und $O_4$ für $f(x) = \sqrt x$ auf $[0, 4]$.

1. **Zerlegung:** $h = \frac{4 - 0}{4} = 1$, Teilungspunkte $0;\ 1;\ 2;\ 3;\ 4$.
2. **Monotonie:** $\sqrt x$ wächst. Also Untersumme gleich Linkssumme und Obersumme gleich Rechtssumme.
3. **Untersumme:** $U_4 = 1\cdot\big(\sqrt0 + \sqrt1 + \sqrt2 + \sqrt3\big) \approx 0 + 1 + 1{,}4142 + 1{,}7321 = 4{,}1463$.
4. **Obersumme:** $O_4 = 1\cdot\big(\sqrt1 + \sqrt2 + \sqrt3 + \sqrt4\big) \approx 6{,}1463$.
5. **Kontrolle mit der Teleskopformel:** $O_4 - U_4 = \frac{4 - 0}{4}\cdot(\sqrt4 - \sqrt0) = 1\cdot 2 = 2$. Das passt.

Der exakte Wert $\int_0^4 \sqrt x\dd x = \frac{16}{3} \approx 5{,}33$ liegt zwischen $4{,}15$ und $6{,}15$.
:::

:::merke[Rezept: Ober- und Untersumme berechnen]
1. Teilungspunkte $x_0, \dots, x_n$ und Längen $\Delta x_k$ aufschreiben.
2. Monotonie von $f$ auf jedem Teilintervall prüfen, mit der Ableitung oder einer Skizze.
3. Auf jedem Teilintervall die kleinste Höhe $m_k$ und die größte Höhe $M_k$ bestimmen. Bei monotonen Stücken
   liegen sie an den Rändern. Sonst auch Extremstellen im Inneren prüfen.
4. $U = \sum m_k\,\Delta x_k$ und $O = \sum M_k\,\Delta x_k$ berechnen.
5. Kontrolle: $U \le O$, und der exakte Wert liegt dazwischen, falls du ihn kennst.
:::

:::achtung[Nicht blind die Ränder nehmen]
Eine typische Fehlrechnung für $f(x) = x^2$ auf $[-1, 1]$ mit nur einem Teilintervall:
$$U \overset{?}{=} 2\cdot\min\big(f(-1), f(1)\big) = 2\cdot 1 = 2.$$
Das kann nicht stimmen: Die Fläche ist $\int_{-1}^{1} x^2\dd x = \frac23$, und eine Untersumme darf nie größer sein.
Der Fehler: Bei $x = 0$ liegt im Inneren ein Tiefpunkt mit $f(0) = 0$. Richtig ist $U = 2\cdot 0 = 0$. Prüfe deshalb
immer zuerst die Monotonie.
:::

:::achtung[Bei fallenden Funktionen ist die Untersumme rechts]
Eine typische Fehlrechnung für $f(x) = \frac1x$ auf $[1, 2]$ mit $n = 2$, also $h = 0{,}5$:
$$U_2 \overset{?}{=} 0{,}5\cdot\big(f(1) + f(1{,}5)\big) = 0{,}5\cdot\big(1 + \tfrac23\big) \approx 0{,}833.$$
Hier wurde die Linkssumme genommen. Weil $\frac1x$ fällt, liegt der kleinste Wert jedes Teilintervalls aber am
**rechten** Rand. Das Ergebnis $0{,}833$ ist größer als die Fläche $\ln 2 \approx 0{,}693$, also unmöglich für
eine Untersumme. Richtig: $U_2 = 0{,}5\cdot\big(\tfrac23 + \tfrac12\big) \approx 0{,}583$.
:::

```reflexion
frage: Warum muss eine Funktion beschränkt sein, damit man Ober- und Untersummen bilden kann? Was geht bei $f(x) = \frac1x$ auf $(0, 1]$ schief?
antwort: |
  Die Obersumme verwendet in jedem Teilintervall die größte Höhe $M_k$, also das Supremum. Ist $f$ nach oben
  unbeschränkt, gibt es auf mindestens einem Teilintervall keine obere Schranke. Dann ist $M_k$ keine Zahl, und
  die Summe ist nicht definiert. Bei $\frac1x$ wird der Graph nahe bei $0$ beliebig hoch. Auf dem ersten
  Teilintervall, egal wie schmal es ist, gibt es kein größtes Rechteck. Solche Integrale behandelt man als
  uneigentliche Integrale über einen Grenzwert, siehe
  [14.9 Uneigentliche Integrale](/lernen/mathe3/integrierbarkeit/uneigentliche-integrale).
```

```aufgabe
id: ib-ober-unter-monoton
titel: Ober- und Untersumme einer wachsenden Funktion
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Berechne für $f(x) = x^3$ auf $[0, 2]$ mit $n = 4$ gleich langen Teilintervallen die Untersumme $U_4$, die
  Obersumme $O_4$ und ihre Differenz.
teile:
  - typ: zahl
    label: '$U_4$'
    loesung: "0.5*(0 + 0.125 + 1 + 3.375)"
    anzeige: '2{,}25'
    fehler:
      - wert: "0.5*(0.125 + 1 + 3.375 + 8)"
        meldung: Das ist die Obersumme. Weil $x^3$ wächst, liegt der kleinste Wert jedes Teilintervalls am **linken** Rand.
      - wert: "0 + 0.125 + 1 + 3.375"
        meldung: Du hast die Höhen addiert, aber nicht mit der Breite $h = 0{,}5$ multipliziert.
  - typ: zahl
    label: '$O_4$'
    loesung: "0.5*(0.125 + 1 + 3.375 + 8)"
    anzeige: '6{,}25'
    fehler:
      - wert: "0.5*(0 + 0.125 + 1 + 3.375)"
        meldung: Das ist die Untersumme. Für die Obersumme brauchst du die rechten Ränder.
  - typ: zahl
    label: '$O_4 - U_4$'
    loesung: "0.5*(8 - 0)"
    anzeige: '4'
    fehler:
      - wert: "8"
        meldung: 'Die Teleskopformel lautet $O_n - U_n = h\,(f(b) - f(a))$. Der Faktor $h = 0{,}5$ fehlt.'
hinweise:
  - '$h = 0{,}5$. Die Funktionswerte an $0;\ 0{,}5;\ 1;\ 1{,}5;\ 2$ sind $0;\ 0{,}125;\ 1;\ 3{,}375;\ 8$.'
loesung: |
  **Ansatz:** $x^3$ wächst auf $[0, 2]$. Also liegt die kleinste Höhe jedes Teilintervalls links und die größte rechts: $U_4 = L_4$ und $O_4 = R_4$.
  ---
  $U_4 = 0{,}5\cdot(0 + 0{,}125 + 1 + 3{,}375) = 0{,}5\cdot 4{,}5 = 2{,}25$ und $O_4 = 0{,}5\cdot(0{,}125 + 1 + 3{,}375 + 8) = 0{,}5\cdot 12{,}5 = 6{,}25$.
  ---
  **Kontrolle** mit der Teleskopformel: $O_4 - U_4 = h\,\big(f(2) - f(0)\big) = 0{,}5\cdot 8 = 4$. Das passt zu $6{,}25 - 2{,}25 = 4$.
```

```aufgabe
id: ib-ober-unter-fallend
titel: Ober- und Untersumme einer fallenden Funktion
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Berechne für $f(x) = \frac6x$ auf $[1, 3]$ mit $n = 2$ gleich langen Teilintervallen $U_2$ und $O_2$.
teile:
  - typ: zahl
    label: '$U_2$'
    loesung: "1*(6/2 + 6/3)"
    fehler:
      - wert: "1*(6/1 + 6/2)"
        meldung: 'Das ist die Linkssumme. Weil $\frac6x$ fällt, ist sie hier die **Obersumme**. Der kleinste Wert liegt jeweils rechts.'
  - typ: zahl
    label: '$O_2$'
    loesung: "1*(6/1 + 6/2)"
    fehler:
      - wert: "1*(6/2 + 6/3)"
        meldung: Das ist die Rechtssumme. Bei einer fallenden Funktion liefert sie die **Untersumme**.
hinweise:
  - '$h = 1$. Die Funktion fällt, also liegt die größte Höhe jedes Teilintervalls am linken Rand.'
loesung: |
  **Ansatz:** $h = \frac{3 - 1}{2} = 1$, Teilungspunkte $1;\ 2;\ 3$ mit $f(1) = 6$, $f(2) = 3$ und $f(3) = 2$. Weil $f$ fällt, liegt die kleinste Höhe rechts und die größte links.
  ---
  $U_2 = 1\cdot(3 + 2) = 5$ und $O_2 = 1\cdot(6 + 3) = 9$.
  ---
  **Kontrolle:** Der exakte Wert $\int_1^3 \frac6x\dd x = 6\ln 3 \approx 6{,}59$ liegt zwischen $5$ und $9$.
```

```aufgabe
id: ib-ober-unter-nichtmonoton
titel: Ober- und Untersumme mit Extremum im Inneren
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Es sei $f(x) = 2x - x^2$ auf $[0, 3]$ und $Z = \{0;\ 1{,}5;\ 3\}$. Bestimme $U(f, Z)$ und $O(f, Z)$.
teile:
  - typ: zahl
    label: '$U(f, Z)$'
    loesung: "1.5*0 + 1.5*(-3)"
    anzeige: '-4{,}5'
    fehler:
      - wert: "1.5*0 + 1.5*0"
        meldung: 'Auf $[1{,}5;\ 3]$ fällt $f$ bis $f(3) = -3$. Die kleinste Höhe ist dort negativ.'
  - typ: zahl
    label: '$O(f, Z)$'
    loesung: "1.5*1 + 1.5*0.75"
    anzeige: '2{,}625'
    fehler:
      - wert: "1.5*0.75 + 1.5*0.75"
        meldung: 'Auf $[0;\ 1{,}5]$ hast du nur die Ränder verglichen. Im Inneren liegt bei $x = 1$ ein Hochpunkt mit $f(1) = 1$.'
hinweise:
  - '$f$ hat bei $x = 1$ ein Maximum. In welchem Teilintervall liegt diese Stelle?'
  - 'Werte: $f(0) = 0$, $f(1) = 1$, $f(1{,}5) = 0{,}75$, $f(3) = -3$. Auf $[0;\ 1{,}5]$ kommt das Maximum aus dem Inneren.'
loesung: |
  **Ansatz:** Erst die Monotonie klären. $f'(x) = 2 - 2x = 0$ bei $x = 1$. Also wächst $f$ auf $[0, 1]$ und fällt auf $[1, 3]$.
  ---
  Auf $[0;\ 1{,}5]$: Die größte Höhe ist $f(1) = 1$ aus dem Inneren. Die kleinste ist $\min\big(f(0), f(1{,}5)\big) = \min(0;\ 0{,}75) = 0$.
  ---
  Auf $[1{,}5;\ 3]$: $f$ fällt. Größte Höhe $f(1{,}5) = 0{,}75$, kleinste Höhe $f(3) = -3$.
  ---
  $U = 1{,}5\cdot 0 + 1{,}5\cdot(-3) = -4{,}5$ und $O = 1{,}5\cdot 1 + 1{,}5\cdot 0{,}75 = 2{,}625$. **Kontrolle:** $\int_0^3 (2x - x^2)\dd x = 9 - 9 = 0$ liegt dazwischen.
gefuehrt:
  - text: An welcher Stelle hat $f(x) = 2x - x^2$ einen Hochpunkt?
    teil: { typ: zahl, loesung: "1", fehler: [ { wert: "1.5", meldung: '$1{,}5$ ist nur ein Teilungspunkt. Setze $f''(x) = 2 - 2x$ gleich null.' } ] }
    erklaerung: '$f''(x) = 2 - 2x = 0$ ergibt $x = 1$. Diese Stelle liegt im Inneren von $[0;\ 1{,}5]$.'
  - text: Wie groß ist die größte Höhe $M_1$ auf $[0;\ 1{,}5]$?
    teil: { typ: zahl, loesung: "1", fehler: [ { wert: "0.75", meldung: 'Das ist der größere Randwert. Der Hochpunkt im Inneren ist höher.' } ] }
    erklaerung: 'Der Hochpunkt liefert $f(1) = 1$. Das ist mehr als beide Randwerte.'
  - text: Wie groß sind $m_1$, $m_2$ und $M_2$? Berechne damit die Untersumme.
    teil: { typ: zahl, loesung: "-4.5" }
    erklaerung: '$m_1 = 0$, $m_2 = f(3) = -3$, $M_2 = f(1{,}5) = 0{,}75$. Also $U = 1{,}5\cdot 0 + 1{,}5\cdot(-3) = -4{,}5$.'
  - text: Berechne die Obersumme.
    teil: { typ: zahl, loesung: "2.625" }
    erklaerung: '$O = 1{,}5\cdot 1 + 1{,}5\cdot 0{,}75 = 2{,}625$. Das Integral $0$ liegt dazwischen.'
```

```aufgabe
id: ib-ober-unter-genauigkeit
titel: Wie fein muss man zerlegen?
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Für $f(x) = e^x$ auf $[0, 1]$ werden Ober- und Untersummen mit $n$ gleich langen Teilintervallen gebildet.
  Gib $O_n - U_n$ als Term in $n$ an und bestimme das kleinste $n$ mit $O_n - U_n < 0{,}01$.
teile:
  - typ: term
    label: '$O_n - U_n$ als Term in $n$'
    variable: n
    bereich: [1, 50]
    loesung: "(e - 1)/n"
    fehler:
      - wert: "e/n"
        meldung: 'In der Teleskopformel steht $f(b) - f(a) = e^1 - e^0$. Es ist $e^0 = 1$, nicht $0$.'
  - typ: zahl
    label: 'kleinstes $n$'
    loesung: "172"
    toleranz: 0.1
    fehler:
      - wert: "171"
        meldung: 'Für $n = 171$ ist $\frac{e - 1}{171} \approx 0{,}01005$, also noch nicht kleiner als $0{,}01$. Runde bei „größer als“ immer auf die nächste ganze Zahl **auf**.'
      - wert: "101"
        meldung: 'Du hast $\frac1n < 0{,}01$ gelöst. Der Abstand ist aber $\frac{e - 1}{n}$, und $e - 1 \approx 1{,}718$.'
hinweise:
  - '$e^x$ ist monoton wachsend. Verwende $O_n - U_n = \frac{b-a}{n}\,\big(f(b) - f(a)\big)$.'
  - 'Löse $\frac{e - 1}{n} < 0{,}01$ nach $n$ auf. Beim Multiplizieren mit $n > 0$ bleibt das Zeichen.'
loesung: |
  **Ansatz:** $e^x$ wächst. Also gilt die Teleskopformel $O_n - U_n = \frac{b - a}{n}\,\big(f(b) - f(a)\big)$.
  ---
  Mit $a = 0$ und $b = 1$: $O_n - U_n = \frac{1}{n}\,(e - 1) = \frac{e - 1}{n}$.
  ---
  $\frac{e - 1}{n} < 0{,}01$ ist gleichwertig mit $n > 100\,(e - 1) \approx 171{,}83$. Das kleinste ganze $n$ ist $172$.
  ---
  **Deutung:** Mit $172$ Rechtecken ist $\int_0^1 e^x\dd x = e - 1$ zwischen zwei Zahlen eingeschlossen, die sich um weniger als $0{,}01$ unterscheiden.
```

```aufgabe
id: ib-ober-unter-umkehr
titel: Einen Faktor aus der Obersumme bestimmen
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Für $f(x) = k\,x^2$ mit einer Zahl $k > 0$ auf $[0, 3]$ und $n = 3$ gleich langen Teilintervallen ist die
  Obersumme $O_3 = 28$. Bestimme $k$ und danach die Untersumme $U_3$.
teile:
  - typ: zahl
    label: '$k$'
    loesung: "28/14"
    fehler:
      - wert: "28/5"
        meldung: 'Du hast die linken Ränder verwendet, also die Untersumme. Weil $kx^2$ für $k > 0$ wächst, nimmt die Obersumme die rechten Ränder $1;\ 2;\ 3$.'
      - wert: "28/9"
        meldung: 'Du hast nur $f(3) = 9k$ verwendet. Die Obersumme hat drei Summanden: $k\cdot 1 + k\cdot 4 + k\cdot 9$.'
  - typ: zahl
    label: '$U_3$'
    loesung: "2*(0 + 1 + 4)"
    fehler:
      - wert: "0 + 1 + 4"
        meldung: Die Untersumme enthält noch den Faktor $k = 2$.
hinweise:
  - '$h = 1$. Weil $f$ wächst, ist $O_3 = 1\cdot\big(f(1) + f(2) + f(3)\big)$.'
  - 'Schreibe $O_3$ als Vielfaches von $k$ und setze gleich $28$.'
loesung: |
  **Ansatz:** $h = \frac{3}{3} = 1$. Für $k > 0$ wächst $kx^2$ auf $[0, 3]$, also nimmt die Obersumme die rechten Ränder.
  ---
  $O_3 = k\cdot 1^2 + k\cdot 2^2 + k\cdot 3^2 = 14k$. Aus $14k = 28$ folgt $k = 2$.
  ---
  Die Untersumme nimmt die linken Ränder: $U_3 = 2\cdot(0^2 + 1^2 + 2^2) = 2\cdot 5 = 10$.
  ---
  **Kontrolle:** Der exakte Wert $\int_0^3 2x^2\dd x = \frac{2\cdot 27}{3} = 18$ liegt zwischen $10$ und $28$.
```

```aufgabe
id: ib-verfeinerung-text
titel: Warum Verfeinern die Untersumme vergrößert
niveau: 2
lernziel: 1
kompetenz: begruenden
angabe: |
  Begründe in eigenen Worten, warum eine Untersumme beim Einfügen eines zusätzlichen Teilungspunktes nicht
  kleiner werden kann. Was ist das Gegenstück für Obersummen?
teile:
  - typ: text
    muster: |
      Wird ein Teilintervall in zwei Teile geteilt, so ist auf jedem Teil die kleinste Höhe mindestens so groß
      wie auf dem ganzen Teilintervall. Auf weniger Punkten kann das Infimum nur steigen oder gleich bleiben. Das
      alte Rechteck wird also durch zwei Rechtecke ersetzt, die zusammen gleich breit und jeweils mindestens so hoch
      sind. Die Untersumme wächst oder bleibt gleich. Bei Obersummen ist das Supremum auf den Teilen höchstens so groß
      wie vorher. Die Obersumme fällt oder bleibt gleich.
hinweise:
  - Vergleiche den kleinsten Wert einer Funktion auf einem Intervall mit dem kleinsten Wert auf einem Teil davon.
  - Das alte Rechteck und die zwei neuen Rechtecke haben zusammen dieselbe Breite. Vergleiche nur noch die Höhen.
loesung: |
  **Ansatz:** Ein Teilintervall $I$ wird in zwei Teile $I_1$ und $I_2$ geteilt. Alle anderen Rechtecke bleiben gleich.
  ---
  Weil $I_1$ ein Teil von $I$ ist, gilt $\inf_{I_1} f \ge \inf_I f$, ebenso für $I_2$. Auf weniger Punkten kann der kleinste Wert nicht tiefer liegen.
  ---
  Das alte Rechteck mit Breite $|I|$ und Höhe $\inf_I f$ wird durch zwei Rechtecke ersetzt, die zusammen gleich breit und jeweils mindestens so hoch sind. Die Untersumme wächst also oder bleibt gleich.
  ---
  Für Obersummen gilt das Gegenstück: $\sup_{I_1} f \le \sup_I f$. Die Rechtecke werden niedriger oder bleiben gleich, die Obersumme fällt oder bleibt gleich.
```

```aufgabe
id: ib-ober-unter-supremum
titel: Wenn der größte Wert fehlt
niveau: 3
lernziel: 1
kompetenz: verstehen
angabe: |
  Die Funktion $g$ auf $[0, 1]$ ist definiert durch $g(x) = x$ für $0 \le x < 1$ und $g(1) = 0$. Sie springt also
  am rechten Rand auf $0$ herunter.

  a) Hat $g$ auf $[0, 1]$ ein Maximum? Wie groß ist das Supremum?

  b) Berechne $U(g, Z)$ und $O(g, Z)$ für $Z = \{0;\ 0{,}5;\ 1\}$.
teile:
  - typ: auswahl
    label: 'a) Maximum und Supremum'
    optionen:
      - 'Kein Maximum, Supremum $1$.'
      - 'Maximum $1$ an der Stelle $x = 1$.'
      - 'Maximum $0{,}999$.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'An der Stelle $x = 1$ ist $g(1) = 0$, nicht $1$. Der Wert $1$ wird nie angenommen.'
      - wert: 2
        meldung: 'Zum Beispiel ist $g(0{,}9999) = 0{,}9999 > 0{,}999$. Zu jedem Kandidaten gibt es einen größeren Wert.'
  - typ: zahl
    label: 'b) $U(g, Z)$'
    loesung: "0.5*0 + 0.5*0"
  - typ: zahl
    label: 'b) $O(g, Z)$'
    loesung: "0.5*0.5 + 0.5*1"
    fehler:
      - wert: "0.5*0.5 + 0.5*0.5"
        meldung: 'Auf $[0{,}5;\ 1]$ kommen die Werte der $1$ beliebig nahe. Das Supremum ist $1$, auch wenn es nicht angenommen wird.'
hinweise:
  - 'Für $x$ knapp unter $1$ ist $g(x)$ knapp unter $1$. Wird $1$ selbst angenommen?'
  - 'Auf $[0{,}5;\ 1]$ ist die kleinste Höhe $g(1) = 0$, die größte im Sinn des Supremums $1$. Auf $[0;\ 0{,}5]$ ist $g$ wachsend.'
loesung: |
  **Ansatz:** Bei einer unstetigen Funktion muss es keinen größten Wert geben. Dann nehmen wir in der Obersumme das Supremum, die kleinste obere Schranke.
  ---
  a) Für $x < 1$ ist $g(x) = x < 1$, und $g(1) = 0$. Der Wert $1$ wird nie erreicht, aber die Werte kommen ihm beliebig nahe. Also gibt es kein Maximum, und das Supremum ist $1$.
  ---
  b) Auf $[0;\ 0{,}5]$ wächst $g$: $m_1 = 0$ und $M_1 = 0{,}5$. Auf $[0{,}5;\ 1]$ ist $m_2 = g(1) = 0$ und $M_2 = \sup = 1$.
  ---
  $U = 0{,}5\cdot 0 + 0{,}5\cdot 0 = 0$ und $O = 0{,}5\cdot 0{,}5 + 0{,}5\cdot 1 = 0{,}75$. **Kontrolle:** Der Wert an der einzelnen Stelle $x = 1$ ändert das Integral nicht. Es ist also $\int_0^1 x\dd x = 0{,}5$, und das liegt zwischen $0$ und $0{,}75$.
```

## Definition der Integrierbarkeit

```aufgabe
id: ib-def-vorwissen
titel: Eine Zahl, die kleiner ist als jedes ε
art: check
niveau: 1
angabe: |
  Für eine Zahl $d \ge 0$ weiß man: $d < \varepsilon$ für **jede** positive Zahl $\varepsilon$, also $d < 0{,}1$,
  $d < 0{,}001$, $d < 10^{-100}$ und so weiter. Was folgt daraus? Zum Nachlesen:
  [Kapitel 11, Die ε-N-Definition](/lernen/mathe3/grenzwerte-folgen/die-epsilon-n-definition-des-grenzwerts).
teile:
  - typ: auswahl
    optionen:
      - '$d = 0$.'
      - '$d$ ist sehr klein, aber vielleicht nicht $0$.'
      - 'Darüber kann man nichts sagen.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Wäre $d > 0$, dann wähle $\varepsilon = \frac d2$. Dann wäre $d < \frac d2$, und das ist für positives $d$ falsch.'
      - wert: 2
        meldung: 'Die Bedingung gilt für **jedes** $\varepsilon > 0$. Das ist eine sehr starke Information. Probiere $\varepsilon = \frac d2$.'
loesung: |
  Angenommen, $d$ wäre positiv. Dann ist auch $\varepsilon = \frac d2$ positiv, und nach Voraussetzung gälte $d < \frac d2$. Das ist für $d > 0$ unmöglich.
  ---
  Also kann $d$ nicht positiv sein. Mit $d \ge 0$ folgt $d = 0$. Dieses Argument brauchst du in dieser Lektion.
```

Jetzt haben wir alle Bausteine für die genaue Definition. Bevor die Formeln kommen, hier die Idee in einem
Satz.

**Worum geht es?** Eine Funktion heißt integrierbar, wenn es genau eine Zahl gibt, die zwischen allen
Untersummen und allen Obersummen liegt. Diese Zahl ist dann das Integral.

**Ein Bild:** Denk an einen Schraubstock. Die Untersummen sind die untere Backe, die Obersummen die obere. Beim
Verfeinern drehst du die Spindel, und beide Backen rücken aufeinander zu. Passt am Ende kein Blatt Papier mehr
dazwischen, ist die Fläche eindeutig festgeklemmt.

### Unterintegral und Oberintegral

In [14.2 Ober- und Untersummen](/lernen/mathe3/integrierbarkeit/ober-und-untersummen) haben wir gesehen:
Jede Untersumme ist kleiner oder gleich jeder Obersumme. Die Menge aller Untersummen ist also nach oben
beschränkt, zum Beispiel durch irgendeine Obersumme. Nach der Vollständigkeit von $\R$ hat sie deshalb eine
kleinste obere Schranke, ein Supremum. Ebenso hat die Menge aller Obersummen eine größte untere Schranke, ein
Infimum.

:::definition[Unterintegral und Oberintegral]
Es sei $f$ auf $[a, b]$ beschränkt. Dann heißt
$$\underline{I}(f) = \sup_Z U(f, Z) \quad\text{das **Unterintegral**}, \qquad \overline{I}(f) = \inf_Z O(f, Z) \quad\text{das **Oberintegral**}.$$
Supremum und Infimum werden über **alle** Zerlegungen $Z$ von $[a, b]$ gebildet. Es gilt stets
$\underline{I}(f) \le \overline{I}(f)$.
:::

Dabei liest man $\underline{I}$ als „I unten“ und $\overline{I}$ als „I oben“. In Worten: Das Unterintegral ist
die beste Annäherung von unten, die man mit Untersummen überhaupt erreichen kann. Das Oberintegral ist die
beste Annäherung von oben.

:::definition[Riemann-Integrierbarkeit und bestimmtes Integral]
Eine beschränkte Funktion $f\colon [a, b] \to \R$ heißt **(Riemann-)integrierbar**, wenn Unter- und Oberintegral
übereinstimmen:
$$\underline{I}(f) = \overline{I}(f).$$
Dieser gemeinsame Wert heißt das **bestimmte Integral** von $f$ über $[a, b]$:
$$\int_a^b f(x)\dd x = \underline{I}(f) = \overline{I}(f).$$
:::

Die Schreibweise $f\colon [a, b] \to \R$ liest man „$f$ bildet $[a, b]$ nach $\R$ ab“. Sie heißt: $f$ ist auf
$[a, b]$ definiert und liefert reelle Zahlen.

:::beispiel[Eine konstante Funktion ist integrierbar]
Es sei $f(x) = 5$ auf $[2, 6]$. Wir prüfen die Definition direkt.

1. **Kleinste und größte Höhe:** Auf jedem Teilintervall ist $m_k = 5$ und $M_k = 5$, weil $f$ überall $5$ ist.
2. **Untersumme:** $U(f, Z) = \sum 5\,\Delta x_k = 5\cdot\sum \Delta x_k = 5\cdot(6 - 2) = 20$. Die Längen ergeben
   zusammen die Intervalllänge $4$.
3. **Obersumme:** ebenso $O(f, Z) = 20$, für **jede** Zerlegung.
4. **Unter- und Oberintegral:** Alle Untersummen sind $20$, also $\underline{I}(f) = 20$. Ebenso
   $\overline{I}(f) = 20$.
5. **Ergebnis:** Beide stimmen überein. $f$ ist integrierbar, und $\int_2^6 5\dd x = 20$. Das ist die Fläche des
   Rechtecks mit Breite $4$ und Höhe $5$.

**Nichtbeispiel:** Bei der Dirichlet-Funktion, die auf rationalen Zahlen $1$ und auf irrationalen Zahlen $0$
ist, ist jede Untersumme $0$ und jede Obersumme die Intervalllänge. Unter- und Oberintegral sind verschieden.
Sie ist **nicht** integrierbar. Den Beweis findest du in
[14.5 Welche Funktionen sind integrierbar?](/lernen/mathe3/integrierbarkeit/welche-funktionen-sind-integrierbar).
:::

### Das Riemannsche Kriterium

Die Definition verlangt Supremum und Infimum über **alle** Zerlegungen. Das sind unendlich viele, und man kann
sie nicht alle durchrechnen. Zum Glück gibt es eine handlichere Fassung. Diese Stelle ist für fast alle
ungewohnt. Lies sie in Ruhe zweimal.

:::satz[Kriterien für Integrierbarkeit]
Es sei $f$ auf $[a, b]$ beschränkt. Die folgenden Aussagen sind gleichwertig:

1. **Definition:** $\underline{I}(f) = \overline{I}(f)$.
2. **Riemannsches Kriterium:** Zu jedem $\varepsilon > 0$ gibt es eine Zerlegung $Z$ mit
   $$O(f, Z) - U(f, Z) < \varepsilon.$$
3. **Riemann-Summen:** Es gibt eine Zahl $I$ mit folgender Eigenschaft. Für jede Folge von Zerlegungen $Z_n$,
   deren Feinheit gegen $0$ geht, und für **jede** Wahl der Zwischenstellen strebt $R(f, Z_n, \xi)$ gegen $I$.
   Dann ist $I = \int_a^b f(x)\dd x$.
:::

```aufgabe
id: ib-def-check-fassung
titel: Welche Fassung erlaubt Mittelsummen?
art: check
niveau: 1
angabe: |
  Du willst ein Integral als Grenzwert von Mittelsummen $M_n$ berechnen. Welche Fassung des Satzes garantiert,
  dass dabei für eine integrierbare Funktion das richtige Integral herauskommt?
teile:
  - typ: auswahl
    optionen: ['Fassung 1', 'Fassung 2', 'Fassung 3']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Fassung 1 spricht nur von Unter- und Oberintegral, nicht von Riemann-Summen mit beliebigen Zwischenstellen.
      - wert: 1
        meldung: Fassung 2 vergleicht Ober- und Untersummen. Mittelsummen sind aber Riemann-Summen mit Zwischenstellen in der Mitte.
loesung: |
  Mittelsummen sind Riemann-Summen, deren Zwischenstellen die Mitten der Teilintervalle sind.
  ---
  Fassung 3 sagt: Bei einer integrierbaren Funktion streben **alle** Riemann-Summen mit Feinheit gegen $0$ gegen das Integral, also auch die Mittelsummen.
```

**Wie liest man Fassung 2?** Sie ist ein Spiel zwischen zwei Personen, wie die ε-N-Definition aus
[Kapitel 11](/lernen/mathe3/grenzwerte-folgen/die-epsilon-n-definition-des-grenzwerts).

1. Eine Gegnerin nennt eine Toleranz $\varepsilon > 0$, zum Beispiel $0{,}01$. Das Zeichen $\varepsilon$ ist das
   griechische „Epsilon“ und steht für eine kleine positive Zahl.
2. Du musst daraufhin **eine** Zerlegung finden, bei der Ober- und Untersumme weniger als $\varepsilon$
   auseinanderliegen.
3. Gelingt dir das für **jede** Toleranz, die sie nennen kann, ist $f$ integrierbar.

Die Reihenfolge ist wichtig: Zuerst kommt $\varepsilon$, dann darfst du die Zerlegung passend dazu wählen. Für
eine kleinere Toleranz darfst du also feiner zerlegen.

:::beispiel[Das Kriterium für f(x) = x auf [0, 1]]
Wir zeigen mit Fassung 2, dass $f(x) = x$ auf $[0, 1]$ integrierbar ist.

1. **Zerlegung wählen:** äquidistant mit $n$ Teilen, also $h = \frac1n$.
2. **Abstand berechnen:** $f$ wächst. Mit der Teleskopformel aus
   [14.2 Ober- und Untersummen](/lernen/mathe3/integrierbarkeit/ober-und-untersummen) ist
   $O_n - U_n = \frac{1 - 0}{n}\,\big(f(1) - f(0)\big) = \frac1n$.
3. **Auf die Toleranz reagieren:** Für $\varepsilon = 0{,}01$ brauchst du $\frac1n < 0{,}01$, also $n > 100$. Die
   Zerlegung mit $n = 101$ Teilen erfüllt die Forderung.
4. **Allgemein:** Für jedes $\varepsilon > 0$ wählst du eine ganze Zahl $n > \frac{1}{\varepsilon}$. Dann ist
   $O_n - U_n = \frac1n < \varepsilon$.
5. **Ergebnis:** Das gelingt für jede Toleranz. Also ist $f$ integrierbar.
:::

:::beweis[Warum aus Fassung 2 die Definition folgt]
**Schritt 1:** Für jede Zerlegung $Z$ gilt
$U(f, Z) \le \underline{I}(f) \le \overline{I}(f) \le O(f, Z)$. Denn das Unterintegral ist die kleinste obere
Schranke aller Untersummen, und das Oberintegral die größte untere Schranke aller Obersummen.

**Schritt 2:** Daraus folgt für den Abstand $d = \overline{I}(f) - \underline{I}(f)$:
$$0 \le d \le O(f, Z) - U(f, Z).$$

**Schritt 3:** Nach Fassung 2 gibt es zu jedem $\varepsilon > 0$ eine Zerlegung mit $O(f, Z) - U(f, Z) < \varepsilon$.
Also ist $d < \varepsilon$ für jedes $\varepsilon > 0$.

**Schritt 4:** Eine Zahl $d \ge 0$, die kleiner ist als jede positive Zahl, ist $0$. Das war die Frage zu Beginn
dieser Lektion. Also ist $\underline{I}(f) = \overline{I}(f)$.
:::

```reflexion
frage: Im Riemannschen Kriterium steht „zu **jedem** $\varepsilon > 0$ gibt es eine Zerlegung“. Warum genügt es nicht, eine einzige Zerlegung mit $O - U < 0{,}001$ zu finden?
antwort: |
  Eine einzige Zerlegung zeigt nur, dass Unter- und Oberintegral höchstens $0{,}001$ auseinanderliegen. Der
  Abstand könnte aber zum Beispiel $0{,}0005$ sein. Dann wäre die Funktion nicht integrierbar. Erst wenn man den
  Abstand unter **jede** positive Schranke drücken kann, folgt, dass er genau $0$ ist. Das „für jedes $\varepsilon$“
  ist also der Schritt von „fast gleich“ zu „gleich“.
```

**Was haben wir gezeigt?** Um Integrierbarkeit nachzuweisen, muss man nicht alle Zerlegungen kennen. Es genügt,
für jede Toleranz **eine** passende Zerlegung zu finden. Fassung 3 rechtfertigt außerdem, dass man in der Praxis
mit Links-, Rechts- oder Mittelsummen rechnen darf: Ist $f$ integrierbar, führen sie alle zum selben Grenzwert.

:::merke[Rezept: Integrierbarkeit mit dem Riemannschen Kriterium nachweisen]
1. Eine Familie von Zerlegungen wählen, meistens äquidistant mit $n$ Teilen.
2. $O_n - U_n$ als Term in $n$ berechnen. Bei monotonen Funktionen hilft die Teleskopformel.
3. Zeigen, dass $O_n - U_n$ gegen $0$ geht. Dann gibt es zu jedem $\varepsilon > 0$ ein $n$ mit
   $O_n - U_n < \varepsilon$.
4. Schluss: $f$ ist integrierbar. Falls verlangt, das Integral als gemeinsamen Grenzwert von $U_n$ und $O_n$
   berechnen.
:::

```aufgabe
id: ib-def-check-n
titel: Welche Zerlegung reicht?
art: check
niveau: 1
angabe: |
  Für eine wachsende Funktion gilt bei äquidistanter Zerlegung $O_n - U_n = \frac{5}{n}$. Die Toleranz ist
  $\varepsilon = 0{,}1$. Welches $n$ erfüllt $O_n - U_n < \varepsilon$?
teile:
  - typ: auswahl
    optionen: ['$n = 40$', '$n = 50$', '$n = 51$']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: '$\frac{5}{40} = 0{,}125$ ist größer als $0{,}1$.'
      - wert: 1
        meldung: '$\frac{5}{50} = 0{,}1$ ist gleich $\varepsilon$, aber nicht kleiner.'
loesung: |
  $\frac5n < 0{,}1$ ist gleichwertig mit $n > 50$.
  ---
  Von den drei Werten erfüllt nur $n = 51$ diese Bedingung: $\frac{5}{51} \approx 0{,}098$.
```

:::achtung[Eine einzige Folge von Riemann-Summen genügt nicht]
Ein falscher Schluss geht so. Die Linkssummen der Dirichlet-Funktion auf $[0, 1]$ sind
$L_n = \frac1n\big(D(0) + D(\tfrac1n) + \dots + D(\tfrac{n-1}{n})\big) = \frac1n\cdot n = 1$ für jedes $n$. Sie
konvergieren also gegen $1$. Daraus wird geschlossen, $D$ sei integrierbar mit Integral $1$. Der Fehler: Alle Teilungspunkte
$\frac kn$ sind rational, deshalb ist jeder Funktionswert $1$. Mit irrationalen Zwischenstellen wäre jede
Riemann-Summe $0$. Fassung 3 verlangt, dass **jede** Wahl der Zwischenstellen zum selben Grenzwert führt.
:::

:::achtung[„Der Abstand wird kleiner“ ist zu wenig]
Ein zweiter falscher Schluss lautet: Der Abstand $O_n - U_n$ wird mit wachsendem $n$ immer kleiner, also ist
$f$ integrierbar. Ein Gegenbeispiel zeigt den Fehler. Für die Funktion $g(x) = x^2$ bei rationalem $x$ und $g(x) = 0$ bei irrationalem $x$ auf $[0, 1]$ gilt
$O_n - U_n = \frac{(n + 1)(2n + 1)}{6n^2}$. Das ergibt $1$ für $n = 1$, dann $0{,}625$ für $n = 2$ und $0{,}385$ für $n = 10$.
Der Abstand fällt, aber er geht gegen $\frac13$ und nicht gegen $0$. Für $\varepsilon = 0{,}1$ findest du keine
passende Zerlegung. $g$ ist **nicht** integrierbar.
:::


```aufgabe
id: ib-definition-auswahl
titel: Die Definition richtig lesen
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Welche Aussagen über eine beschränkte Funktion $f$ auf $[a, b]$ sind richtig? Wähle alle richtigen aus.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - 'Jede Untersumme ist kleiner oder gleich jeder Obersumme.'
      - '$f$ ist integrierbar, wenn **eine** Folge von Linkssummen konvergiert.'
      - '$f$ ist integrierbar, wenn es zu jedem $\varepsilon > 0$ eine Zerlegung mit $O - U < \varepsilon$ gibt.'
      - 'Die Feinheit einer Zerlegung ist die Anzahl ihrer Teilintervalle.'
      - 'Jede Riemann-Summe liegt zwischen Unter- und Obersumme derselben Zerlegung.'
    richtig: [0, 2, 4]
    fehler:
      - wert: [0, 1, 2, 4]
        meldung: 'Eine einzige konvergente Folge von Linkssummen reicht nicht. Bei der Dirichlet-Funktion sind alle Linkssummen mit rationalen Teilungspunkten gleich, trotzdem ist sie nicht integrierbar.'
      - wert: [0, 2, 3, 4]
        meldung: Die Feinheit ist eine Länge, nämlich die des **längsten** Teilintervalls, nicht eine Anzahl.
      - wert: [0, 2]
        meldung: 'Auch die letzte Aussage stimmt. Auf jedem Teilintervall gilt $m_k \le f(\xi_k) \le M_k$.'
hinweise:
  - Bei der zweiten Aussage an die Dirichlet-Funktion denken.
loesung: |
  **Aussage 1 ist richtig:** Das folgt über die gemeinsame Verfeinerung zweier Zerlegungen. **Aussage 2 ist falsch:** Es müssen **alle** Riemann-Summen gegen denselben Wert gehen. Bei der Dirichlet-Funktion sind alle Linkssummen mit rationalen Teilungspunkten gleich der Intervalllänge, trotzdem ist sie nicht integrierbar.
  ---
  **Aussage 3 ist richtig:** Das ist das Riemannsche Kriterium. **Aussage 4 ist falsch:** Die Feinheit ist die Länge des längsten Teilintervalls.
  ---
  **Aussage 5 ist richtig:** Das gilt für jede beschränkte Funktion, wegen $m_k \le f(\xi_k) \le M_k$. Richtig sind also die Aussagen 1, 3 und 5.
```

```aufgabe
id: ib-def-konstante
titel: Integral einer konstanten Funktion nach Definition
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Es sei $f(x) = -3$ auf $[1, 5]$ und $Z$ eine **beliebige** Zerlegung. Bestimme $U(f, Z)$ und $O(f, Z)$.
teile:
  - typ: zahl
    label: '$U(f, Z)$'
    loesung: "-3*(5 - 1)"
    fehler:
      - wert: "12"
        meldung: 'Die Funktion ist negativ. Jedes Rechteck liegt unter der Achse und zählt negativ.'
      - wert: "-15"
        meldung: 'Du hast mit $5$ statt mit der Intervalllänge $5 - 1 = 4$ multipliziert.'
  - typ: zahl
    label: '$O(f, Z)$'
    loesung: "-3*(5 - 1)"
    fehler:
      - wert: "12"
        meldung: 'Auch die Obersumme ist hier negativ. Die größte Höhe auf jedem Teilintervall ist $-3$.'
hinweise:
  - 'Auf jedem Teilintervall ist die kleinste und die größte Höhe gleich $-3$. Die Längen $\Delta x_k$ ergeben zusammen $5 - 1$.'
loesung: |
  **Ansatz:** $f$ ist konstant. Auf jedem Teilintervall ist $m_k = M_k = -3$.
  ---
  $U(f, Z) = \sum (-3)\,\Delta x_k = -3\cdot\sum \Delta x_k = -3\cdot 4 = -12$. Ebenso $O(f, Z) = -12$.
  ---
  Das gilt für jede Zerlegung. Unter- und Oberintegral sind beide $-12$, also ist $f$ integrierbar mit $\int_1^5 (-3)\dd x = -12$. **Deutung:** Ein Rechteck der Fläche $12$ unter der $x$-Achse.
```

```aufgabe
id: ib-def-epsilon
titel: Zu ε die passende Zerlegung finden
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Für $f(x) = 3x + 1$ auf $[0, 2]$ werden äquidistante Zerlegungen mit $n$ Teilen betrachtet.

  a) Gib $O_n - U_n$ als Term in $n$ an.

  b) Die Gegnerin im Riemannschen Kriterium nennt $\varepsilon = 0{,}05$. Wie viele Teile brauchst du mindestens?
teile:
  - typ: term
    label: 'a) $O_n - U_n$'
    variable: n
    bereich: [1, 50]
    loesung: "12/n"
    fehler:
      - wert: "6/n"
        meldung: 'Der Faktor $b - a = 2$ fehlt. Die Teleskopformel lautet $\frac{b - a}{n}\,(f(b) - f(a))$.'
      - wert: "14/n"
        meldung: 'Du hast $f(b) = 7$ statt $f(b) - f(a) = 7 - 1 = 6$ verwendet.'
  - typ: zahl
    label: 'b) kleinstes $n$'
    loesung: "241"
    toleranz: 0.1
    fehler:
      - wert: "240"
        meldung: 'Für $n = 240$ ist $\frac{12}{240} = 0{,}05$, also nicht **kleiner** als $0{,}05$. Es muss $n > 240$ sein.'
hinweise:
  - '$f$ ist monoton wachsend. Verwende die Teleskopformel $O_n - U_n = \frac{b - a}{n}\,\big(f(b) - f(a)\big)$.'
  - 'Löse $\frac{12}{n} < 0{,}05$ nach $n$ auf. Achte darauf, dass „kleiner“ streng gemeint ist.'
loesung: |
  **Ansatz:** $f$ wächst, also gilt die Teleskopformel. Es ist $f(0) = 1$ und $f(2) = 7$.
  ---
  a) $O_n - U_n = \frac{2 - 0}{n}\,(7 - 1) = \frac{12}{n}$.
  ---
  b) $\frac{12}{n} < 0{,}05$ ist gleichwertig mit $n > \frac{12}{0{,}05} = 240$. Das kleinste ganze $n$ ist $241$.
  ---
  **Deutung:** Mit $241$ gleich langen Teilen liegen Ober- und Untersumme weniger als $0{,}05$ auseinander. Weil das für jedes $\varepsilon$ gelingt, nämlich mit $n > \frac{12}{\varepsilon}$, ist $f$ integrierbar.
gefuehrt:
  - text: Wie groß sind $f(0)$ und $f(2)$? Gib $f(2) - f(0)$ ein.
    teil: { typ: zahl, loesung: "6", fehler: [ { wert: "7", meldung: 'Das ist nur $f(2)$. Ziehe noch $f(0) = 1$ ab.' } ] }
    erklaerung: '$f(0) = 1$ und $f(2) = 7$, also $f(2) - f(0) = 6$.'
  - text: Setze in die Teleskopformel ein. Wie lautet $O_n - U_n$?
    teil: { typ: term, variable: n, bereich: [1, 50], loesung: "12/n" }
    erklaerung: '$\frac{2 - 0}{n}\cdot 6 = \frac{12}{n}$.'
  - text: Ab welcher Zahl muss $n$ größer sein, damit $\frac{12}{n} < 0{,}05$ gilt?
    teil: { typ: zahl, loesung: "240", toleranz: 0.1 }
    erklaerung: 'Mal $n$ und durch $0{,}05$: $n > 240$.'
  - text: Welches ist das kleinste passende $n$?
    teil: { typ: zahl, loesung: "241", toleranz: 0.1 }
    erklaerung: '$n = 240$ ergibt genau $0{,}05$, das ist nicht kleiner. Also $n = 241$.'
```

```aufgabe
id: ib-def-schranken
titel: Was verraten einzelne Summen über das Integral?
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Für eine integrierbare Funktion $f$ auf $[0, 3]$ wurden vier Summen zu verschiedenen Zerlegungen berechnet:
  $$U(f, Z_1) = 4{,}2, \quad U(f, Z_2) = 4{,}5, \quad O(f, Z_3) = 4{,}9, \quad O(f, Z_4) = 4{,}7.$$
  Gib die beste untere und die beste obere Schranke für $\int_0^3 f(x)\dd x$ an, die aus diesen Werten folgt.
teile:
  - typ: zahl
    label: 'beste untere Schranke'
    loesung: "4.5"
    fehler:
      - wert: "4.2"
        meldung: '$4{,}2$ ist zwar eine untere Schranke, aber nicht die beste. Jede Untersumme liegt unter dem Integral, also auch $4{,}5$.'
  - typ: zahl
    label: 'beste obere Schranke'
    loesung: "4.7"
    fehler:
      - wert: "4.9"
        meldung: 'Jede Obersumme liegt über dem Integral. Die kleinste der beiden Obersummen ist die beste Schranke.'
hinweise:
  - Für eine integrierbare Funktion liegt das Integral zwischen **jeder** Untersumme und **jeder** Obersumme.
  - Von den unteren Schranken nimmst du die größte, von den oberen die kleinste.
loesung: |
  **Ansatz:** Das Integral ist gleich dem Unterintegral und dem Oberintegral. Es liegt also über jeder Untersumme und unter jeder Obersumme.
  ---
  Untere Schranken sind $4{,}2$ und $4{,}5$. Die beste ist die größere, also $4{,}5$.
  ---
  Obere Schranken sind $4{,}9$ und $4{,}7$. Die beste ist die kleinere, also $4{,}7$. Ergebnis: $4{,}5 \le \int_0^3 f(x)\dd x \le 4{,}7$.
```

```aufgabe
id: ib-def-quantoren
titel: Die Reihenfolge von „für jedes“ und „es gibt“
niveau: 2
lernziel: 2
kompetenz: begruenden
angabe: |
  Welche Formulierung ist das Riemannsche Kriterium für eine beschränkte Funktion $f$ auf $[a, b]$?
teile:
  - typ: auswahl
    optionen:
      - 'Zu jedem $\varepsilon > 0$ gibt es eine Zerlegung $Z$ mit $O(f, Z) - U(f, Z) < \varepsilon$.'
      - 'Es gibt eine Zerlegung $Z$, sodass für jedes $\varepsilon > 0$ gilt: $O(f, Z) - U(f, Z) < \varepsilon$.'
      - 'Für jede Zerlegung $Z$ gilt $O(f, Z) - U(f, Z) < 1$.'
      - 'Es gibt ein $\varepsilon > 0$ und eine Zerlegung $Z$ mit $O(f, Z) - U(f, Z) < \varepsilon$.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Hier müsste **eine** feste Zerlegung für alle Toleranzen funktionieren. Dann wäre $O - U = 0$ für diese Zerlegung. Das schafft nicht einmal $f(x) = x$, deren Abstand $\frac1n$ nie null ist.'
      - wert: 2
        meldung: 'Diese Aussage spricht nur von einer festen Schranke $1$. Für die Integrierbarkeit muss der Abstand unter **jede** Toleranz gedrückt werden können.'
      - wert: 3
        meldung: 'Das gilt für jede beschränkte Funktion, man nimmt einfach ein großes $\varepsilon$. Es sagt deshalb nichts über Integrierbarkeit.'
hinweise:
  - 'Im Spiel nennt zuerst die Gegnerin eine Toleranz. Erst danach darfst du eine Zerlegung wählen.'
  - 'Prüfe jede Formulierung an $f(x) = x$ auf $[0, 1]$ mit $O_n - U_n = \frac1n$. Welche Aussage wäre dafür wahr?'
loesung: |
  **Ansatz:** Im Kriterium steht zuerst „zu jedem $\varepsilon$“ und dann „gibt es eine Zerlegung“. Die Zerlegung darf also von $\varepsilon$ abhängen.
  ---
  Option 2 vertauscht die Reihenfolge. Sie verlangt eine einzige Zerlegung für alle $\varepsilon$, also $O - U = 0$. Das ist viel zu stark. Option 3 und Option 4 sind zu schwach und gelten für jede beschränkte Funktion oder für viele nicht integrierbare.
  ---
  Richtig ist Option 1. **Probe an $f(x) = x$ auf $[0, 1]$:** Zu jedem $\varepsilon$ wählt man $n > \frac1\varepsilon$. Dann ist $\frac1n < \varepsilon$.
```

```aufgabe
id: ib-def-fehler-finden
titel: Ein zu schneller Schluss
niveau: 2
lernziel: 2
kompetenz: begruenden
angabe: |
  Eine Mitschülerin schreibt: „Für $f(x) = x^2$ auf $[0, 1]$ ist $O_{10} - U_{10} = 0{,}1$. Das ist kleiner als
  $0{,}5$. Nach dem Riemannschen Kriterium ist $f$ also integrierbar.“

  a) Was ist an diesem Schluss falsch?

  b) Mit äquidistanten Zerlegungen gilt $O_n - U_n = \frac1n$. Wie viele Teile braucht man für $\varepsilon = 0{,}001$?
teile:
  - typ: auswahl
    label: 'a) Der Fehler'
    optionen:
      - 'Sie hat das Kriterium nur für ein einziges $\varepsilon$ geprüft, nämlich $0{,}5$.'
      - 'Sie hätte statt $n = 10$ eine nicht äquidistante Zerlegung nehmen müssen.'
      - '$O - U$ darf nie kleiner als $0{,}5$ sein.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Äquidistante Zerlegungen sind erlaubt. Das Problem liegt bei der Toleranz.
      - wert: 2
        meldung: 'Ein kleiner Abstand ist gerade erwünscht. Das Problem: Es wurde nur **eine** Toleranz geprüft.'
  - typ: zahl
    label: 'b) kleinstes $n$'
    loesung: "1001"
    toleranz: 0.1
    fehler:
      - wert: "1000"
        meldung: 'Für $n = 1000$ ist $\frac1n = 0{,}001$, also nicht kleiner als $0{,}001$.'
hinweise:
  - 'Das Kriterium spricht von **jedem** $\varepsilon > 0$. Wie viele Toleranzen hat die Mitschülerin geprüft?'
  - 'Für b) löse $\frac1n < 0{,}001$ nach $n$ auf.'
loesung: |
  **Ansatz:** Das Riemannsche Kriterium verlangt eine passende Zerlegung für **jede** Toleranz $\varepsilon > 0$, nicht nur für eine.
  ---
  a) Die Mitschülerin hat nur $\varepsilon = 0{,}5$ geprüft. Damit ist nur gezeigt, dass Unter- und Oberintegral höchstens $0{,}1$ auseinanderliegen. Richtig wäre: Für jedes $\varepsilon$ wählt man $n > \frac1\varepsilon$, dann ist $O_n - U_n = \frac1n < \varepsilon$.
  ---
  b) $\frac1n < 0{,}001$ heißt $n > 1000$. Das kleinste passende $n$ ist $1001$. **Fazit:** $x^2$ ist tatsächlich integrierbar, aber erst das Argument für jedes $\varepsilon$ beweist es.
```

```aufgabe
id: ib-def-nachweis
titel: Integrierbarkeit nachweisen und das Integral bestimmen
niveau: 3
lernziel: 2
kompetenz: begruenden
angabe: |
  Zeige mit Ober- und Untersummen, dass $f(x) = 1 - x$ auf $[0, 1]$ integrierbar ist, und bestimme das Integral.
  Verwende $\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$.

  a) Gib $U_n$ und $O_n$ für die äquidistante Zerlegung mit $n$ Teilen an.

  b) Berechne $O_n - U_n$ und das Integral.
teile:
  - typ: term
    label: 'a) $U_n$'
    variable: n
    bereich: [1, 40]
    loesung: "(n - 1)/(2*n)"
    fehler:
      - wert: "(n + 1)/(2*n)"
        meldung: 'Das ist die Obersumme. Weil $1 - x$ fällt, liegt der kleinste Wert jedes Teilintervalls am **rechten** Rand.'
  - typ: term
    label: 'a) $O_n$'
    variable: n
    bereich: [1, 40]
    loesung: "(n + 1)/(2*n)"
  - typ: term
    label: 'b) $O_n - U_n$'
    variable: n
    bereich: [1, 40]
    loesung: "1/n"
  - typ: zahl
    label: 'b) $\int_0^1 (1 - x)\dd x$'
    loesung: "1/2"
hinweise:
  - '$h = \frac1n$ und $x_k = \frac kn$. Weil $f$ fällt, ist die Untersumme die Rechtssumme: $U_n = \sum_{k=1}^n \frac1n\big(1 - \frac kn\big)$.'
  - 'Zerlege $\sum_{k=1}^n \big(1 - \frac kn\big) = n - \frac1n\sum_{k=1}^n k$ und setze die Summenformel ein.'
loesung: |
  **Ansatz:** Äquidistante Zerlegung mit $h = \frac1n$ und $x_k = \frac kn$. Weil $f$ fällt, nimmt die Untersumme die rechten und die Obersumme die linken Ränder.
  ---
  $U_n = \frac1n\sum_{k=1}^n \Big(1 - \frac kn\Big) = \frac1n\Big(n - \frac1n\cdot\frac{n(n+1)}{2}\Big) = 1 - \frac{n + 1}{2n} = \frac{n - 1}{2n}$.
  ---
  $O_n = \frac1n\sum_{k=0}^{n-1} \Big(1 - \frac kn\Big)$. Gegenüber $U_n$ kommt der Summand für $k = 0$ dazu, also $\frac1n\cdot 1$, und der für $k = n$ fällt weg, er ist $0$. Damit ist $O_n = U_n + \frac1n = \frac{n + 1}{2n}$.
  ---
  $O_n - U_n = \frac1n \to 0$. Nach dem Riemannschen Kriterium ist $f$ integrierbar. Außerdem $U_n = \frac12 - \frac{1}{2n} \to \frac12$ und $O_n \to \frac12$.
  ---
  **Ergebnis:** $\int_0^1 (1 - x)\dd x = \frac12$. **Probe:** Die Fläche ist ein Dreieck mit Grundlinie $1$ und Höhe $1$, also $\frac12\cdot 1\cdot 1 = \frac12$.
```

## Exakte Integrale mit Summenformeln

```aufgabe
id: ib-ex-vorwissen
titel: Summenformel für Quadratzahlen
art: check
niveau: 1
angabe: |
  Welche Formel gibt $1^2 + 2^2 + \dots + n^2$ an? Zum Nachlesen:
  [Kapitel 8, Vollständige Induktion](/lernen/mathe3/folgen-reihen/vollstaendige-induktion).
teile:
  - typ: auswahl
    optionen:
      - '$\frac{n(n+1)(2n+1)}{6}$'
      - '$\frac{n(n+1)}{2}$'
      - '$\left(\frac{n(n+1)}{2}\right)^2$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Das ist die Summe $1 + 2 + \dots + n$ der Zahlen selbst, nicht ihrer Quadrate.
      - wert: 2
        meldung: Das ist die Summe der **Kubikzahlen** $1^3 + 2^3 + \dots + n^3$.
loesung: |
  Die drei wichtigen Summenformeln sind $\sum k = \frac{n(n+1)}{2}$, $\sum k^2 = \frac{n(n+1)(2n+1)}{6}$ und $\sum k^3 = \left(\frac{n(n+1)}{2}\right)^2$.
  ---
  Probe für $n = 2$: $1 + 4 = 5$ und $\frac{2\cdot 3\cdot 5}{6} = 5$.
```

Die Rechnung in dieser Lektion ist **das** klassische Beispiel der Integrationstheorie. Sie wird in der
mündlichen Prüfung gern verlangt, und in der schriftlichen Prüfung kann eine Teilaufgabe „Berechne das Integral
als Grenzwert von Obersummen“ lauten. Dann genügt die Stammfunktion nicht. Du musst das Integral aus der
Definition gewinnen, ohne Stammfunktion.

Dafür brauchst du Summenformeln. Die Formel für $\sum k$ steht in
[Kapitel 8, Das Summenzeichen](/lernen/mathe3/folgen-reihen/das-summenzeichen), die für $\sum k^2$ in
[Kapitel 8, Vollständige Induktion](/lernen/mathe3/folgen-reihen/vollstaendige-induktion). Dort wird sie mit
vollständiger Induktion bewiesen. Die Formel für $\sum k^3$ beweist man auf dieselbe Weise.

:::formel[Summenformeln]
$$\sum_{k=1}^n k = \frac{n(n+1)}{2}, \qquad \sum_{k=1}^n k^2 = \frac{n(n+1)(2n+1)}{6}, \qquad \sum_{k=1}^n k^3 = \left(\frac{n(n+1)}{2}\right)^2.$$
:::

:::beispiel[Kontrolle der Formel für n = 4]
Wir prüfen die mittlere Formel an einem kleinen Fall.

1. **Direkt ausgerechnet:** $1 + 4 + 9 + 16 = 30$.
2. **Mit der Formel:** $\frac{4\cdot 5\cdot 9}{6} = \frac{180}{6} = 30$.

Beide Wege ergeben $30$. Eine solche Probe an einem kleinen $n$ schützt in der Prüfung vor falsch erinnerten
Formeln.
:::

### Die Rechnung für x² auf [0, b]

**Worum geht es in einem Satz?** Wir schreiben Ober- und Untersumme von $x^2$ mit der Summenformel als Bruch in
$n$ und lassen dann $n$ gegen unendlich gehen.

**Ein Bild:** Die Rechtecke bilden eine Treppe unter und eine Treppe über der Parabel. Die Stufen werden immer
schmaler. Die Treppen schmiegen sich von beiden Seiten an die Kurve, und ihre Flächen rücken auf eine Zahl zu.

:::satz[Das Integral von x²]
Die Funktion $f(x) = x^2$ ist auf $[0, b]$ mit $b > 0$ integrierbar, und es gilt
$$\int_0^b x^2\dd x = \frac{b^3}{3}.$$
:::

:::beweis[Teil 1: die Summen aufstellen]
**Schritt 1: Zerlegung.** Wir zerlegen äquidistant mit $h = \frac bn$. Die Teilungspunkte sind $x_k = k\,h = \frac{kb}{n}$
für $k = 0, \dots, n$.

**Schritt 2: Monotonie nutzen.** $x^2$ wächst auf $[0, b]$. Auf $[x_{k-1}, x_k]$ liegt das Minimum also links
bei $x_{k-1}$ und das Maximum rechts bei $x_k$.

**Schritt 3: Obersumme als Summe.** Jedes Rechteck hat Breite $h = \frac bn$ und Höhe
$x_k^2 = \frac{k^2 b^2}{n^2}$. Wir ziehen die Faktoren, die nicht von $k$ abhängen, vor die Summe:
$$O_n = \sum_{k=1}^n \frac bn\cdot\frac{k^2 b^2}{n^2} = \frac{b^3}{n^3}\sum_{k=1}^n k^2.$$

**Schritt 4: Untersumme als Summe.** Die Höhen sind $x_{k-1}^2 = \frac{(k-1)^2 b^2}{n^2}$. Für $k = 1$ ist der
Summand $0$. Die übrigen Summanden sind $1^2, 2^2, \dots, (n-1)^2$:
$$U_n = \frac{b^3}{n^3}\sum_{k=1}^{n} (k-1)^2 = \frac{b^3}{n^3}\sum_{j=1}^{n-1} j^2.$$
Dabei ist $j = k - 1$ nur ein neuer Name für den Zählindex.
:::

```aufgabe
id: ib-ex-check-obergrenze
titel: Bis wohin läuft die Summe?
art: check
niveau: 1
angabe: |
  Denkpause im Beweis: Die Untersumme ist $U_n = \frac{b^3}{n^3}\big(0^2 + 1^2 + \dots + (n-1)^2\big)$. Welche Zahl musst du
  für $n$ in die Formel $\frac{n(n+1)(2n+1)}{6}$ einsetzen, um die Klammer zu berechnen?
teile:
  - typ: auswahl
    optionen: ['$n$', '$n - 1$', '$n + 1$']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Die Formel mit $n$ summiert bis $n^2$. In der Klammer ist das letzte Quadrat aber $(n-1)^2$.'
      - wert: 2
        meldung: 'Mit $n + 1$ würdest du sogar bis $(n+1)^2$ summieren. Das letzte Quadrat in der Klammer ist $(n-1)^2$.'
loesung: |
  Die Formel $\frac{m(m+1)(2m+1)}{6}$ summiert die Quadrate von $1$ bis $m$. Der Summand $0^2$ ändert nichts.
  ---
  Das letzte Quadrat ist $(n-1)^2$, also setzt man $m = n - 1$ ein.
```

:::beweis[Teil 2: ausrechnen und Grenzwert bilden]
**Schritt 5: Summenformel einsetzen.** Bei $U_n$ läuft die Summe nur bis $n - 1$. Deshalb setzen wir dort
$n - 1$ statt $n$ in die Formel ein:
$$O_n = \frac{b^3}{n^3}\cdot\frac{n(n+1)(2n+1)}{6} = \frac{b^3}{6}\cdot\frac{(n+1)(2n+1)}{n^2}, \qquad U_n = \frac{b^3}{n^3}\cdot\frac{(n-1)n(2n-1)}{6} = \frac{b^3}{6}\cdot\frac{(n-1)(2n-1)}{n^2}.$$

**Schritt 6: Grenzwert.** Wir multiplizieren aus und teilen jeden Summanden durch $n^2$:
$$\frac{(n+1)(2n+1)}{n^2} = 2 + \frac3n + \frac{1}{n^2} \;\to\; 2, \qquad \frac{(n-1)(2n-1)}{n^2} = 2 - \frac3n + \frac{1}{n^2} \;\to\; 2.$$
Also streben $O_n$ und $U_n$ beide gegen $\frac{b^3}{6}\cdot 2 = \frac{b^3}{3}$.

**Schritt 7: Schluss.** Der Abstand ist $O_n - U_n = \frac{b^3}{6}\cdot\frac6n = \frac{b^3}{n}$. Er geht gegen $0$. Nach dem
Riemannschen Kriterium ist $x^2$ integrierbar. Das Integral liegt für jedes $n$ zwischen $U_n$ und $O_n$. Weil beide
gegen $\frac{b^3}{3}$ streben, ist $\int_0^b x^2\dd x = \frac{b^3}{3}$.
:::

**Was haben wir gezeigt?** Ohne Stammfunktion, nur aus der Definition, kommt dasselbe heraus wie mit der
Stammfunktion: $\big[\frac{x^3}{3}\big]_0^b = \frac{b^3}{3}$. Für $b = 1$ ist die Fläche unter der Normalparabel
über $[0, 1]$ genau ein Drittel des umgebenden Einheitsquadrats. Gleichwertige Ergebnisse kannte schon Archimedes. Warum
Stammfunktion und Summen immer übereinstimmen, erklärt der Hauptsatz in
[14.8 Hauptsatz](/lernen/mathe3/integrierbarkeit/hauptsatz-der-differential-und-integralrechnung).

**Ein typisches Missverständnis:** „Man braucht nur die Obersumme, das reicht.“ Für den Wert stimmt das bei
integrierbaren Funktionen. Für den **Nachweis** der Integrierbarkeit braucht man aber beide Summen, denn erst
$O_n - U_n \to 0$ zeigt, dass es nur einen möglichen Wert gibt.

:::beispiel[Zahlenwerte für b = 1]
Mit $b = 1$ ist $U_n = \frac{(n-1)(2n-1)}{6n^2}$ und $O_n = \frac{(n+1)(2n+1)}{6n^2}$.

| $n$ | $U_n$ | $O_n$ | $O_n - U_n$ |
|---|---|---|---|
| $4$ | $\frac{3\cdot 7}{96} = 0{,}21875$. | $\frac{5\cdot 9}{96} = 0{,}46875$. | $0{,}25$. |
| $10$ | $\frac{9\cdot 19}{600} = 0{,}285$. | $\frac{11\cdot 21}{600} = 0{,}385$. | $0{,}1$. |
| $100$ | $0{,}32835$. | $0{,}33835$. | $0{,}01$. |

Mit jedem Faktor $10$ bei $n$ wird die Einschließung zehnmal enger, genau wie $O_n - U_n = \frac1n$ vorhersagt. Der
Wert $\frac13 = 0{,}333\ldots$ liegt immer dazwischen.
:::

```aufgabe
id: ib-ex-check-abstand
titel: Wie eng ist die Einschließung?
art: check
niveau: 1
angabe: |
  Sag voraus, bevor du das Widget nach dieser Frage benutzt: Wie groß ist $O_n - U_n$ für $x^2$ auf $[0, 1]$ bei
  $n = 20$ Teilintervallen?
teile:
  - typ: zahl
    loesung: "1/20"
    fehler:
      - wert: "1/400"
        meldung: 'Der Abstand ist $\frac{b^3}{n} = \frac1n$, nicht $\frac{1}{n^2}$. Er schrumpft nur so schnell wie $\frac1n$.'
      - wert: "20"
        meldung: 'Der Abstand wird mit wachsendem $n$ kleiner, nicht größer. Es ist $O_n - U_n = \frac1n$.'
loesung: |
  Aus der Rechnung folgt $O_n - U_n = \frac{b^3}{n}$, für $b = 1$ also $\frac1n$.
  ---
  Für $n = 20$ ergibt das $\frac{1}{20} = 0{,}05$.
```

```widget
name: riemann
titel: Ober- und Untersumme von x² auf [0, 1]
props: { f: "x^2", a: 0, b: 1, n: 20, art: ober, x: [-0.15, 1.15], y: [-0.1, 1.1] }
```

Vergleiche im Widget die Obersumme bei $n = 20$ mit der Untersumme. Ihre Differenz ist $0{,}05$. Verdopple $n$ auf
$40$: Der Abstand halbiert sich.

:::beispiel[Ein Intervall, das nicht bei 0 beginnt: x² auf [1, 2]]
Gesucht ist $\int_1^2 x^2\dd x$ als Grenzwert der Obersummen.

1. **Zerlegung:** $h = \frac{2 - 1}{n} = \frac1n$ und $x_k = 1 + \frac kn$.
2. **Obersumme:** $x^2$ wächst auf $[1, 2]$, also nehmen wir die rechten Ränder:
   $O_n = \sum_{k=1}^n \frac1n\Big(1 + \frac kn\Big)^2$.
3. **Ausmultiplizieren mit der binomischen Formel:** $\big(1 + \frac kn\big)^2 = 1 + \frac{2k}{n} + \frac{k^2}{n^2}$.
4. **Drei Summen getrennt:** $O_n = \frac1n\Big(n + \frac2n\sum_{k=1}^n k + \frac{1}{n^2}\sum_{k=1}^n k^2\Big)$.
5. **Summenformeln:** $O_n = 1 + \frac{2}{n^2}\cdot\frac{n(n+1)}{2} + \frac{1}{n^3}\cdot\frac{n(n+1)(2n+1)}{6} = 1 + \frac{n+1}{n} + \frac{(n+1)(2n+1)}{6n^2}$.
6. **Grenzwert:** Der zweite Summand geht gegen $1$, der dritte gegen $\frac26 = \frac13$. Also
   $O_n \to 1 + 1 + \frac13 = \frac73$.

**Probe** mit der Stammfunktion: $\frac{2^3}{3} - \frac{1^3}{3} = \frac73$. Für $n = 4$ ergibt die Formel
$O_4 = \frac{87}{32} \approx 2{,}72$, ein Wert über $\frac73 \approx 2{,}33$, wie es sein muss.
:::

:::pruefung[So schreibst du eine exakte Integralberechnung auf]
Steht in der Angabe „Berechnen Sie das Integral als Grenzwert von Ober- und Untersummen“, sollten vier
Schritte sichtbar sein. Erstens die Zerlegung mit $h$ und $x_k$. Zweitens die Summe, mit dem Satz
„Weil $f$ wächst, liegt das Maximum rechts.“ Drittens die Summenformel, ausdrücklich hingeschrieben. Viertens
der Grenzwert mit Kürzen durch die höchste Potenz. Am Ende vergleichst du mit der Stammfunktion und
schreibst ausdrücklich „Probe“ dazu. Wer nur $\big[\frac{x^3}{3}\big]_0^b$ hinschreibt, hat die verlangte
Methode nicht gezeigt und muss mit wenigen oder keinen Punkten für diese Teilaufgabe rechnen.
:::

```reflexion
frage: Warum ist es in der Prüfung nicht erlaubt, bei „Berechne als Grenzwert von Obersummen“ einfach die Stammfunktion zu verwenden, obwohl dieselbe Zahl herauskommt?
antwort: |
  Die Aufgabe prüft die Definition des Integrals, nicht das Rechenrezept. Dass die Stammfunktion das Integral
  liefert, ist der Inhalt des Hauptsatzes, und der wird mit der Definition erst bewiesen. Wer die Stammfunktion
  verwendet, setzt also voraus, was gezeigt werden soll. Als Probe am Ende ist die Stammfunktion dagegen sehr
  sinnvoll, weil sie Rechenfehler in der Summenrechnung aufdeckt.
```

:::achtung[Das Quadrat nur halb ausgeführt]
Eine typische Fehlrechnung bei $x_k = \frac{kb}{n}$:
$$x_k^2 \overset{?}{=} \frac{k^2 b}{n}, \qquad\text{also}\qquad O_n \overset{?}{=} \sum_{k=1}^n \frac bn\cdot\frac{k^2 b}{n} = \frac{b^2}{n^2}\sum_{k=1}^n k^2.$$
Für $b = 1$ ergibt das $O_n = \frac{(n+1)(2n+1)}{6n}$, und das geht gegen unendlich statt gegen $\frac13$. Der Fehler:
Das Quadrat wirkt auf den **ganzen** Bruch, also $\big(\frac{kb}{n}\big)^2 = \frac{k^2 b^2}{n^2}$. Zusammen mit
$h = \frac bn$ entsteht der Faktor $\frac{b^3}{n^3}$.
:::

:::achtung[Die Untersumme mit der falschen Obergrenze]
Eine zweite typische Fehlrechnung: Für die Untersumme wird ebenfalls $\frac{b^3}{n^3}\cdot\frac{n(n+1)(2n+1)}{6}$
eingesetzt. Dann wäre $U_n = O_n$ für jedes $n$, und der Abstand wäre immer $0$. Das kann bei einer echt wachsenden
Funktion nicht stimmen. Richtig: Die Untersumme enthält nur $1^2$ bis $(n-1)^2$. In die Summenformel gehört
deshalb $n - 1$ statt $n$, also $\frac{(n-1)n(2n-1)}{6}$.
:::

:::merke[Rezept: Integral exakt über Ober- und Untersummen]
1. Äquidistant zerlegen: $h = \frac{b - a}{n}$ und $x_k = a + k\,h$.
2. Monotonie klären und $O_n$ und $U_n$ als Summen aufschreiben.
3. Faktoren, die nicht von $k$ abhängen, vor die Summe ziehen. Bei $a \ne 0$ zuerst ausmultiplizieren.
4. Summenformeln einsetzen, bei der Untersumme mit $n - 1$ statt $n$.
5. Grenzwerte für $n \to \infty$ berechnen, dazu durch die höchste Potenz von $n$ kürzen.
6. Schluss: $O_n - U_n \to 0$, also integrierbar, und das Integral ist der gemeinsame Grenzwert. Zum Schluss die
   Probe mit der Stammfunktion.
:::

```aufgabe
id: ib-summenformel
titel: Summenformeln anwenden
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Berechne $\displaystyle\sum_{k=1}^{10} k^2$ und $\displaystyle\sum_{k=1}^{20} k$ mit den Summenformeln.
teile:
  - typ: zahl
    label: '$\sum_{k=1}^{10} k^2$'
    loesung: "10*11*21/6"
    anzeige: '385'
    fehler:
      - wert: "10*11/2"
        meldung: Das ist die Summe $1 + 2 + \dots + 10$ der Zahlen selbst. Für die Quadrate brauchst du die Formel mit dem Faktor $(2n + 1)$.
      - wert: "10*11*20/6"
        meldung: 'Im dritten Faktor steht $2n + 1 = 21$, nicht $2n = 20$.'
  - typ: zahl
    label: '$\sum_{k=1}^{20} k$'
    loesung: "20*21/2"
    anzeige: '210'
    fehler:
      - wert: "20*21"
        meldung: 'Die Formel enthält noch den Nenner $2$: $\frac{n(n+1)}{2}$.'
hinweise:
  - '$\sum_{k=1}^n k^2 = \frac{n(n+1)(2n+1)}{6}$ und $\sum_{k=1}^n k = \frac{n(n+1)}{2}$.'
loesung: |
  **Ansatz:** Statt zehn beziehungsweise zwanzig Zahlen einzeln zu addieren, setzen wir $n$ in die Summenformeln ein.
  ---
  $\sum_{k=1}^{10} k^2 = \frac{10\cdot 11\cdot 21}{6} = \frac{2310}{6} = 385$.
  ---
  $\sum_{k=1}^{20} k = \frac{20\cdot 21}{2} = 210$. **Probe** für den Anfang der ersten Summe: $1 + 4 + 9 = 14 = \frac{3\cdot 4\cdot 7}{6}$.
```

```aufgabe
id: ib-exakt-summe-erkennen
titel: Die richtige Obersumme aufschreiben
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  Für $f(x) = x^2$ auf $[0, 2]$ wird äquidistant in $n$ Teile zerlegt. Welcher Ausdruck ist die Obersumme $O_n$?
teile:
  - typ: auswahl
    optionen:
      - '$\frac{8}{n^3}\sum_{k=1}^n k^2$'
      - '$\frac{4}{n^2}\sum_{k=1}^n k^2$'
      - '$\frac{2}{n}\sum_{k=1}^n k^2$'
      - '$\frac{8}{n^3}\sum_{k=1}^{n-1} k^2$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Das ist nur $x_k^2 = \frac{4k^2}{n^2}$. Die Breite $h = \frac2n$ fehlt noch als Faktor.'
      - wert: 2
        meldung: 'Hier wurde $x_k = k$ statt $x_k = \frac{2k}{n}$ verwendet. Der Teilungspunkt hängt von $n$ ab.'
      - wert: 3
        meldung: Diese Summe läuft nur bis $n - 1$. Das ist die Untersumme, weil der Summand mit dem rechten Rand fehlt.
hinweise:
  - '$h = \frac2n$ und $x_k = \frac{2k}{n}$. Ein Rechteck der Obersumme hat die Fläche $h\cdot x_k^2$.'
loesung: |
  **Ansatz:** $x^2$ wächst, also nimmt die Obersumme die rechten Ränder $x_k = \frac{2k}{n}$ für $k = 1, \dots, n$.
  ---
  Ein Rechteck hat die Fläche $\frac2n\cdot\frac{4k^2}{n^2} = \frac{8k^2}{n^3}$. Den Faktor $\frac{8}{n^3}$ ziehen wir vor die Summe: $O_n = \frac{8}{n^3}\sum_{k=1}^n k^2$.
```

```aufgabe
id: ib-x2-obersumme
titel: Obersumme von x² auf [0, 3] als Term
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Für $f(x) = x^2$ auf $[0, 3]$ mit $n$ gleich langen Teilintervallen gilt $O_n = \frac{27}{n^3}\sum_{k=1}^n k^2$.
  Gib $O_n$ als geschlossenen Term in $n$ an und berechne $O_{10}$ sowie $\lim_{n\to\infty} O_n$.
teile:
  - typ: term
    label: '$O_n$'
    variable: n
    bereich: [1, 30]
    loesung: "9*(n+1)*(2*n+1)/(2*n^2)"
    fehler:
      - wert: "27*(n+1)*(2*n+1)/(6*n^3)"
        meldung: 'Beim Einsetzen der Summenformel kürzt sich ein $n$: $\frac{27}{n^3}\cdot\frac{n(n+1)(2n+1)}{6}$. Im Nenner bleibt $n^2$, nicht $n^3$.'
  - typ: zahl
    label: '$O_{10}$'
    loesung: "9*11*21/200"
    anzeige: '10{,}395'
    fehler:
      - wert: "27*385/100"
        meldung: 'Der Faktor ist $\frac{27}{n^3} = \frac{27}{1000}$, nicht $\frac{27}{100}$.'
  - typ: zahl
    label: '$\lim O_n$'
    loesung: "9"
    fehler:
      - wert: "4.5"
        meldung: 'Der Bruch $\frac{(n+1)(2n+1)}{n^2}$ geht gegen $2$, nicht gegen $1$. Es ist $(n+1)(2n+1) = 2n^2 + 3n + 1$.'
hinweise:
  - '$\sum_{k=1}^n k^2 = \frac{n(n+1)(2n+1)}{6}$. Nach dem Einsetzen kürzt sich ein $n$ und $\frac{27}{6} = \frac92$.'
  - 'Für den Grenzwert $(n+1)(2n+1) = 2n^2 + 3n + 1$ ausmultiplizieren und durch $n^2$ teilen.'
loesung: |
  **Ansatz:** Wir setzen die Summenformel ein und vereinfachen: $O_n = \frac{27}{n^3}\cdot\frac{n(n+1)(2n+1)}{6} = \frac{9(n+1)(2n+1)}{2n^2}$.
  ---
  $O_{10} = \frac{9\cdot 11\cdot 21}{200} = \frac{2079}{200} = 10{,}395$.
  ---
  $O_n = \frac92\Big(2 + \frac3n + \frac{1}{n^2}\Big) \to \frac92\cdot 2 = 9$.
  ---
  **Probe:** $\int_0^3 x^2\dd x = \frac{27}{3} = 9$. Das passt, und $O_{10} = 10{,}395$ liegt wie erwartet darüber.
gefuehrt:
  - text: Setze die Summenformel ein. Welcher Faktor steht nach dem Kürzen eines $n$ vor $\frac{(n+1)(2n+1)}{n^2}$?
    teil: { typ: zahl, loesung: "27/6", fehler: [ { wert: "27", meldung: 'Der Nenner $6$ der Summenformel gehört dazu: $\frac{27}{6}$.' } ] }
    erklaerung: '$\frac{27}{n^3}\cdot\frac{n(n+1)(2n+1)}{6} = \frac{27}{6}\cdot\frac{(n+1)(2n+1)}{n^2} = \frac92\cdot\frac{(n+1)(2n+1)}{n^2}$.'
  - text: Berechne damit $O_{10}$.
    teil: { typ: zahl, loesung: "10.395" }
    erklaerung: '$\frac92\cdot\frac{11\cdot 21}{100} = 4{,}5\cdot 2{,}31 = 10{,}395$.'
  - text: Gegen welche Zahl geht $\frac{(n+1)(2n+1)}{n^2}$?
    teil: { typ: zahl, loesung: "2" }
    erklaerung: 'Ausmultipliziert $2 + \frac3n + \frac{1}{n^2} \to 2$.'
  - text: Gib den Grenzwert von $O_n$ an und mache die Probe mit der Stammfunktion.
    teil: { typ: zahl, loesung: "9" }
    erklaerung: '$\frac92\cdot 2 = 9$, und $\big[\frac{x^3}{3}\big]_0^3 = 9$.'
```

```aufgabe
id: ib-x-exakt
titel: Integral von x exakt
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Berechne $\int_0^2 x\dd x$ als Grenzwert der Obersummen $O_n$ (äquidistante Zerlegung).
  Gib $O_n$ als Term in $n$ und den Grenzwert an.
teile:
  - typ: term
    label: '$O_n$'
    variable: n
    bereich: [1, 30]
    loesung: "2*(n+1)/n"
    fehler:
      - wert: "(n+1)/n"
        meldung: 'Prüfe den Vorfaktor. Es ist $h\cdot x_k = \frac2n\cdot\frac{2k}{n} = \frac{4k}{n^2}$, und $\frac{4}{n^2}\cdot\frac{n(n+1)}{2} = \frac{2(n+1)}{n}$.'
      - wert: "2*(n-1)/n"
        meldung: Das ist die Untersumme. Für die Obersumme nimmst du bei der wachsenden Funktion die rechten Ränder.
  - typ: zahl
    label: '$\int_0^2 x\dd x$'
    loesung: "2"
    fehler:
      - wert: "4"
        meldung: 'Das ist das Quadrat mit Seite $2$. Die Fläche unter $y = x$ ist nur das halbe Quadrat, ein Dreieck.'
hinweise:
  - '$h = \frac2n$ und $x_k = \frac{2k}{n}$. Weil $f$ wächst, nimmt man in der Obersumme den rechten Rand.'
  - '$\sum_{k=1}^n k = \frac{n(n+1)}{2}$. Danach durch $n$ kürzen.'
loesung: |
  **Ansatz:** $h = \frac2n$ und $x_k = \frac{2k}{n}$. $f(x) = x$ wächst, also $O_n = \sum_{k=1}^n h\,x_k = \sum_{k=1}^n \frac2n\cdot\frac{2k}{n} = \frac{4}{n^2}\sum_{k=1}^n k$.
  ---
  Summenformel einsetzen: $O_n = \frac{4}{n^2}\cdot\frac{n(n+1)}{2} = \frac{2(n+1)}{n} = 2 + \frac2n$.
  ---
  Für $n \to \infty$ geht $\frac2n \to 0$, also $\lim O_n = 2$. **Probe:** Die Fläche ist ein Dreieck mit Grundlinie $2$ und Höhe $2$, also $\frac12\cdot 2\cdot 2 = 2$.
```

```aufgabe
id: ib-exakt-fehler
titel: Fehlersuche in einer Untersumme
niveau: 2
lernziel: 3
kompetenz: begruenden
angabe: |
  Ein Mitschüler rechnet für $f(x) = x^2$ auf $[0, 2]$:
  $$U_n = \frac{8}{n^3}\sum_{k=1}^{n} k^2 = \frac{4(n+1)(2n+1)}{3n^2}.$$
  a) Was ist falsch?

  b) Gib die richtige Untersumme $U_n$ als Term an.
teile:
  - typ: auswahl
    label: 'a) Der Fehler'
    optionen:
      - 'Die Untersumme enthält nur die Quadrate $0^2$ bis $(n-1)^2$. Die Summe muss bis $n - 1$ laufen.'
      - 'Der Vorfaktor müsste $\frac{4}{n^2}$ sein.'
      - 'Bei einer Untersumme darf man keine Summenformel verwenden.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Der Vorfaktor $\frac{8}{n^3}$ stimmt: $h = \frac2n$ mal $x_k^2 = \frac{4k^2}{n^2}$.'
      - wert: 2
        meldung: Die Summenformel darf man verwenden, man muss aber die richtige Obergrenze einsetzen.
  - typ: term
    label: 'b) $U_n$'
    variable: n
    bereich: [1, 30]
    loesung: "4*(n-1)*(2*n-1)/(3*n^2)"
    fehler:
      - wert: "4*(n+1)*(2*n+1)/(3*n^2)"
        meldung: Das ist die Obersumme, also genau die Rechnung des Mitschülers.
hinweise:
  - 'Welche Höhe hat das Rechteck über $[x_{k-1}, x_k]$ bei einer wachsenden Funktion?'
  - 'Die Höhen sind $x_0^2, x_1^2, \dots, x_{n-1}^2$. Setze in die Summenformel $n - 1$ statt $n$ ein.'
loesung: |
  **Ansatz:** $x^2$ wächst. Die Untersumme nimmt die linken Ränder $x_0, \dots, x_{n-1}$, also die Höhen $\frac{4\cdot 0^2}{n^2}, \dots, \frac{4(n-1)^2}{n^2}$.
  ---
  a) Der Mitschüler hat die Summe bis $n$ laufen lassen. Das ergibt die Obersumme. Sein $U_n$ ist für jedes $n$ gleich $O_n$, das kann nicht stimmen.
  ---
  b) Richtig: $U_n = \frac{8}{n^3}\sum_{k=1}^{n-1} k^2 = \frac{8}{n^3}\cdot\frac{(n-1)n(2n-1)}{6} = \frac{4(n-1)(2n-1)}{3n^2}$. **Probe** mit $n = 2$: $U_2 = 1\cdot(0^2 + 1^2) = 1$, und die Formel ergibt $\frac{4\cdot 1\cdot 3}{12} = 1$.
```

```aufgabe
id: ib-exakt-umkehr
titel: Wie groß muss n sein?
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Für $f(x) = x^2$ auf $[0, 3]$ ist $O_n = \frac{9(n+1)(2n+1)}{2n^2}$ und das Integral ist $9$. Ab welchem $n$ weicht
  die Obersumme um weniger als $0{,}1$ vom Integral ab?

  a) Zeige, dass $O_n - 9 = \frac{9(3n + 1)}{2n^2}$ ist.

  b) Bestimme das kleinste $n$ mit $O_n - 9 < 0{,}1$.
teile:
  - typ: term
    label: 'a) $O_n - 9$'
    variable: n
    bereich: [1, 30]
    loesung: "9*(3*n + 1)/(2*n^2)"
  - typ: zahl
    label: 'b) kleinstes $n$'
    loesung: "136"
    toleranz: 0.1
    fehler:
      - wert: "135"
        meldung: 'Für $n = 135$ ist $O_n - 9 \approx 0{,}1002$, also noch nicht kleiner als $0{,}1$.'
      - wert: "271"
        meldung: 'Im Nenner steht $2n^2$, nicht $n^2$. Ohne den Faktor $2$ wird die Abweichung doppelt so groß geschätzt, und $n$ fällt viel zu groß aus.'
hinweise:
  - 'Multipliziere $(n+1)(2n+1)$ aus und ziehe $9 = \frac{9\cdot 2n^2}{2n^2}$ ab.'
  - 'Die Ungleichung $\frac{9(3n+1)}{2n^2} < 0{,}1$ führt auf $n^2 - 135n - 45 > 0$. Löse die zugehörige quadratische Gleichung.'
loesung: |
  **Ansatz:** Wir bringen $O_n$ und $9$ auf den gemeinsamen Nenner $2n^2$ und vereinfachen die Differenz.
  ---
  a) $O_n - 9 = \frac{9(2n^2 + 3n + 1) - 18n^2}{2n^2} = \frac{27n + 9}{2n^2} = \frac{9(3n + 1)}{2n^2}$.
  ---
  b) $\frac{9(3n + 1)}{2n^2} < 0{,}1$ ist gleichwertig mit $90(3n + 1) < 2n^2$, also $n^2 - 135n - 45 > 0$. Die positive Nullstelle ist $\frac{135 + \sqrt{135^2 + 180}}{2} \approx 135{,}33$.
  ---
  Also muss $n > 135{,}33$ sein, das kleinste $n$ ist $136$. **Probe:** $O_{136} - 9 \approx 0{,}0995 < 0{,}1$ und $O_{135} - 9 \approx 0{,}1002$.
```

```aufgabe
id: ib-x3-exakt
titel: Integral von x³ exakt
niveau: 3
lernziel: 3
kompetenz: begruenden
angabe: |
  Zeige mit Ober- und Untersummen, dass $f(x) = x^3$ auf $[0, 1]$ integrierbar ist, und berechne
  $\int_0^1 x^3\dd x$. Verwende $\sum_{k=1}^n k^3 = \big(\tfrac{n(n+1)}{2}\big)^2$.
  Gib $O_n$, $U_n$ und das Integral an.
teile:
  - typ: term
    label: '$O_n$'
    variable: n
    bereich: [1, 30]
    loesung: "(n+1)^2/(4*n^2)"
    fehler:
      - wert: "(n+1)^2/(4*n)"
        meldung: 'Der Vorfaktor ist $\frac{1}{n^4}$: Breite $\frac1n$ mal Höhe $\frac{k^3}{n^3}$. Nach dem Einsetzen bleibt $n^2$ im Nenner.'
  - typ: term
    label: '$U_n$'
    variable: n
    bereich: [1, 30]
    loesung: "(n-1)^2/(4*n^2)"
  - typ: zahl
    label: '$\int_0^1 x^3\dd x$'
    loesung: "1/4"
    anzeige: '\tfrac14'
hinweise:
  - '$O_n = \frac{1}{n^4}\sum_{k=1}^n k^3$ und $U_n = \frac{1}{n^4}\sum_{k=1}^{n-1} k^3$.'
  - 'Für $U_n$ die Summenformel mit $n - 1$ statt $n$ verwenden: $\big(\frac{(n-1)n}{2}\big)^2$.'
loesung: |
  **Ansatz:** $h = \frac1n$ und $x_k = \frac kn$. $f$ wächst, also nimmt die Obersumme die rechten und die Untersumme die linken Ränder. $O_n = \sum_{k=1}^n \frac1n\cdot\frac{k^3}{n^3} = \frac{1}{n^4}\sum_{k=1}^n k^3 = \frac{1}{n^4}\cdot\frac{n^2(n+1)^2}{4} = \frac{(n+1)^2}{4n^2}$.
  ---
  $U_n = \frac{1}{n^4}\sum_{k=1}^{n-1} k^3 = \frac{1}{n^4}\cdot\frac{(n-1)^2 n^2}{4} = \frac{(n-1)^2}{4n^2}$.
  ---
  Grenzwerte: $O_n = \frac14\left(1 + \frac1n\right)^2 \to \frac14$ und $U_n = \frac14\left(1 - \frac1n\right)^2 \to \frac14$.
  ---
  $O_n - U_n = \frac{(n+1)^2 - (n-1)^2}{4n^2} = \frac{4n}{4n^2} = \frac1n \to 0$. Also ist $x^3$ integrierbar und $\int_0^1 x^3\dd x = \frac14$. **Probe:** $\big[\frac{x^4}{4}\big]_0^1 = \frac14$.
```

## Welche Funktionen sind integrierbar?

```aufgabe
id: ib-wf-vorwissen
titel: Stetig oder nicht?
art: check
niveau: 1
angabe: |
  Die Funktion $f(x) = \lfloor x \rfloor$ ordnet jeder Zahl die größte ganze Zahl zu, die nicht größer ist. Zum
  Beispiel ist $\lfloor 1{,}7 \rfloor = 1$ und $\lfloor 2 \rfloor = 2$. Ist $f$ an der Stelle $x = 2$ stetig? Zum
  Nachlesen: [Kapitel 12, Stetigkeit an einer Stelle](/lernen/mathe3/grenzwerte-stetigkeit/stetigkeit-an-einer-stelle).
teile:
  - typ: auswahl
    optionen:
      - 'Nein, links von $2$ sind die Werte $1$, an der Stelle selbst ist der Wert $2$.'
      - 'Ja, weil $f(2) = 2$ definiert ist.'
      - 'Ja, weil $f$ monoton wachsend ist.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Definiert zu sein reicht nicht. Stetig heißt, dass die Funktionswerte nahe bei $2$ gegen $f(2)$ streben. Von links kommen aber nur Werte $1$.
      - wert: 2
        meldung: Monotone Funktionen können springen. Monotonie und Stetigkeit sind verschiedene Eigenschaften.
loesung: |
  Für $x$ knapp unter $2$, etwa $x = 1{,}999$, ist $f(x) = 1$. Der linksseitige Grenzwert ist also $1$.
  ---
  An der Stelle selbst ist $f(2) = 2$. Weil $1 \ne 2$, springt $f$ bei $x = 2$. Die Funktion ist dort nicht stetig.
```

Die exakte Rechnung in [14.4 Exakte Integrale](/lernen/mathe3/integrierbarkeit/exakte-integrale-mit-summenformeln)
war mühsam. Zum Glück muss man Integrierbarkeit nicht jedes Mal so nachweisen. Es gibt zwei große Klassen von
Funktionen, für die sie garantiert ist: die monotonen und die stetigen. Wer das weiß, kann in der Prüfung mit
einem Satz begründen, warum ein Integral existiert.

### Monotone Funktionen

:::satz[Monotone Funktionen sind integrierbar]
Jede auf $[a, b]$ monotone Funktion ist dort integrierbar.
:::

**Worum geht es?** Bei einer monotonen Funktion kann man den Abstand zwischen Ober- und Untersumme exakt
ausrechnen, und er geht gegen $0$.

**Ein Bild:** Bei einer wachsenden Funktion bilden die Lücken zwischen Ober- und Untersumme schmale Kästchen
entlang des Graphen. Schiebt man alle Kästchen nach rechts übereinander, entsteht eine einzige Säule. Sie hat
die Breite $h$ und die Höhe $f(b) - f(a)$.

:::beweis
**Schritt 1: Beschränktheit.** Es sei $f$ monoton wachsend. Für fallendes $f$ geht der Beweis genauso, nur mit
vertauschten Rändern. Dann gilt $f(a) \le f(x) \le f(b)$ für alle $x$, und $f$ ist beschränkt.

**Schritt 2: Abstand berechnen.** Für die äquidistante Zerlegung mit $n$ Teilen ist nach der Teleskopformel
aus [14.2 Ober- und Untersummen](/lernen/mathe3/integrierbarkeit/ober-und-untersummen)
$$O_n - U_n = \frac{b-a}{n}\,\big(f(b) - f(a)\big).$$

**Schritt 3: Riemannsches Kriterium.** Zu gegebenem $\varepsilon > 0$ wählt man $n$ so groß, dass dieser Ausdruck
kleiner als $\varepsilon$ ist. Das geht, weil $f(b) - f(a)$ eine feste Zahl ist und der Bruch mit wachsendem $n$
beliebig klein wird. Also ist $f$ integrierbar.
:::

**Bemerkenswert:** Der Beweis braucht **keine Stetigkeit**. Eine monotone Funktion darf springen, sogar
unendlich oft, und ist trotzdem integrierbar. Ein Beispiel ist eine Treppe mit immer kleineren Stufen, etwa
$f(x) = \frac1k$ für $\frac{1}{k+1} < x \le \frac1k$ und $f(0) = 0$ auf $[0, 1]$.

```aufgabe
id: ib-wf-check-monoton
titel: Braucht der Beweis Stetigkeit?
art: check
niveau: 1
angabe: |
  Die Funktion $f(x) = \lfloor x \rfloor$ springt auf $[0, 3]$ bei $1$, $2$ und $3$. Ist sie dort integrierbar?
teile:
  - typ: auswahl
    optionen:
      - 'Ja, sie ist monoton wachsend, und dafür braucht man keine Stetigkeit.'
      - 'Nein, eine Funktion mit Sprüngen ist nie integrierbar.'
      - 'Nur auf $[0, 1)$, weil sie dort konstant ist.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Der Beweis für monotone Funktionen verwendet nur die Teleskopformel. Sprünge stören ihn nicht.
      - wert: 2
        meldung: Integrierbarkeit ist eine Eigenschaft auf dem ganzen Intervall. Prüfe, ob $f$ auf $[0, 3]$ monoton ist.
loesung: |
  $\lfloor x \rfloor$ wird nie kleiner, wenn $x$ wächst. Sie ist also monoton wachsend.
  ---
  Monotone Funktionen sind integrierbar, auch mit Sprüngen. Ihr Integral über $[0, 3]$ ist $0 + 1 + 2 = 3$.
```

### Stetige Funktionen

:::satz[Stetige Funktionen sind integrierbar]
Jede auf dem **abgeschlossenen** Intervall $[a, b]$ stetige Funktion ist dort integrierbar.
:::

Dieser Satz ist der wichtigste dieses Kapitels für die Praxis. Polynome, $e^x$, $\sin x$, $\sqrt x$ und alle ihre
Verkettungen sind auf abgeschlossenen Intervallen ihres Definitionsbereichs stetig. Ihre Integrale existieren
also immer. Der Beweis ist schwieriger als bei monotonen Funktionen. Für die Prüfung genügt die Beweisidee.

**Worum geht es?** Stetigkeit sorgt dafür, dass auf genügend schmalen Teilintervallen größter und kleinster
Wert nahe beieinander liegen. Dann sind alle Kästchen zwischen Ober- und Untersumme niedrig.

**Ein Bild:** Lege über den Graphen ein waagrechtes Toleranzband der Höhe $\eta$ (griechisch „eta“). Bei einer
stetigen Funktion auf einem abgeschlossenen Intervall gibt es eine Breite $\delta$ (griechisch „delta“), die
überall gleich gut funktioniert. Auf jedem Stück der Breite $\delta$ passt der Graph ins Band.

:::beweis[Beweisidee]
**Schritt 1:** Eine stetige Funktion auf $[a, b]$ ist beschränkt und nimmt auf jedem Teilintervall ein Minimum
und ein Maximum an. Das ist der Satz vom Maximum und Minimum aus
[Kapitel 12, Satz vom Maximum und Minimum](/lernen/mathe3/grenzwerte-stetigkeit/satz-vom-maximum-und-minimum).

**Schritt 2:** Man braucht eine Verschärfung der Stetigkeit, die **gleichmäßige Stetigkeit**. Sie besagt: Zu jedem
$\eta > 0$ gibt es ein $\delta > 0$, sodass $|f(x) - f(y)| < \eta$ für **alle** $x, y$ mit $|x - y| < \delta$ gilt.
Dasselbe $\delta$ passt also für das ganze Intervall. Dass stetige Funktionen auf abgeschlossenen Intervallen
gleichmäßig stetig sind, ist ein eigener Satz, der Satz von Heine.

**Schritt 3:** Wähle eine Zerlegung mit Feinheit kleiner als $\delta$. Auf jedem Teilintervall liegen Maximum und
Minimum dann weniger als $\eta$ auseinander, also $M_k - m_k < \eta$.

**Schritt 4:** Damit ist
$$O(f, Z) - U(f, Z) = \sum_{k=1}^n (M_k - m_k)\,\Delta x_k < \eta \sum_{k=1}^n \Delta x_k = \eta\,(b - a).$$
Wählt man $\eta = \frac{\varepsilon}{b - a}$, wird der Abstand kleiner als $\varepsilon$. Nach dem Riemannschen Kriterium
ist $f$ integrierbar.
:::

**Was haben wir gezeigt?** Stetige Funktionen auf abgeschlossenen Intervallen sind immer integrierbar. Das Wort
„abgeschlossen“ ist wichtig. Auf $(0, 1]$ ist $\frac1x$ stetig, aber unbeschränkt, und dann versagt die Theorie.

```aufgabe
id: ib-wf-check-stetig
titel: Wann greift der Satz über stetige Funktionen?
art: check
niveau: 1
angabe: |
  Für welche Funktion garantiert der Satz über stetige Funktionen die Integrierbarkeit auf $[0, 1]$?
teile:
  - typ: auswahl
    optionen:
      - '$f(x) = \sin(x^2)$'
      - '$f(x) = \frac{1}{x - 0{,}5}$ für $x \ne 0{,}5$ und $f(0{,}5) = 0$'
      - '$f(x) = \frac1x$ für $x > 0$ und $f(0) = 0$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Bei $x = 0{,}5$ hat diese Funktion einen Pol. Sie ist dort nicht stetig und sogar unbeschränkt.'
      - wert: 2
        meldung: 'Bei $x = 0$ ist diese Funktion nicht stetig. Die Werte rechts davon werden beliebig groß.'
loesung: |
  $\sin(x^2)$ ist als Verkettung stetiger Funktionen auf ganz $[0, 1]$ stetig. Der Satz greift.
  ---
  Die beiden anderen Funktionen sind an einer Stelle unstetig und dort sogar unbeschränkt. Sie sind auf $[0, 1]$ nicht Riemann-integrierbar.
```

### Erweiterung: Sprungstellen und Treppenfunktionen

:::satz[Endlich viele Unstetigkeitsstellen]
Ist $f$ auf $[a, b]$ beschränkt und bis auf endlich viele Stellen stetig, so ist $f$ integrierbar. Ändert man eine
integrierbare Funktion an endlich vielen Stellen ab, bleibt sie integrierbar, und das Integral ändert sich **nicht**.
:::

Der Grund: Eine einzelne Problemstelle $x_0$ lässt sich in ein Teilintervall der Breite $\delta$ einpacken. Dort ist
$M_k - m_k$ höchstens $2S$, wenn $S$ eine Schranke für $|f|$ ist. Der Beitrag zu $O - U$ ist also höchstens
$2S\,\delta$, und das wird beliebig klein. Anschaulich: Ein einzelner Punkt hat keine Breite und trägt keine Fläche.

Das wichtigste Beispiel sind **Treppenfunktionen**. Das sind Funktionen, die auf endlich vielen Teilintervallen
jeweils konstant sind. Ihr Integral ist die Summe der Rechteckflächen mit Vorzeichen. Die Werte an den
Sprungstellen spielen keine Rolle.

:::beispiel[Integral einer Treppenfunktion]
Es sei $f(x) = 1$ auf $[0, 1)$, $f(x) = 3$ auf $[1, 2)$ und $f(x) = -1$ auf $[2, 4]$.

1. **Integrierbar?** $f$ ist beschränkt und hat nur zwei Sprungstellen, bei $1$ und $2$. Also ja.
2. **Rechtecke:** $1\cdot 1 = 1$ über der Achse, $3\cdot 1 = 3$ über der Achse und $(-1)\cdot 2 = -2$ unter der Achse.
3. **Bilanz:** $\int_0^4 f(x)\dd x = 1 + 3 - 2 = 2$.

Würde man $f(1)$ auf $100$ ändern, bliebe das Integral $2$.
:::

```plot
x: [-0.3, 4.3]
y: [-1.6, 3.6]
achsen: { x: "x", y: "y" }
flaechen:
  - { f: "1", von: 0, bis: 1, farbe: 0 }
  - { f: "3", von: 1, bis: 2, farbe: 0 }
  - { f: "-1", von: 2, bis: 4, farbe: 1 }
strecken:
  - { von: [0, 1], nach: [1, 1], farbe: 0 }
  - { von: [1, 3], nach: [2, 3], farbe: 0 }
  - { von: [2, -1], nach: [4, -1], farbe: 1 }
punkte:
  - { x: 1, y: 1, offen: true }
  - { x: 1, y: 3 }
  - { x: 2, y: 3, offen: true }
  - { x: 2, y: -1 }
beschriftung: Eine Treppenfunktion mit den Werten 1, 3 und −1. Das Integral über [0, 4] ist die Flächenbilanz 1·1 + 3·1 + (−1)·2 = 2. Die Werte an den Sprungstellen ändern nichts.
```

:::beispiel[Stückweise stetig mit einem Sprung]
Es sei $f(x) = x$ für $0 \le x \le 1$ und $f(x) = 3$ für $1 < x \le 2$.

1. **Integrierbar?** Auf $[0, 1]$ ist $f$ stetig, auf $(1, 2]$ auch. Bei $x = 1$ springt $f$ von $1$ auf $3$. Das
   ist eine einzige Unstetigkeitsstelle, und $f$ ist beschränkt. Also ist $f$ integrierbar.
2. **Aufteilen:** $\int_0^2 f(x)\dd x = \int_0^1 x\dd x + \int_1^2 3\dd x$. Der Wert an der Stelle $1$ spielt keine Rolle.
3. **Ausrechnen:** $\int_0^1 x\dd x = \frac12$ (ein Dreieck) und $\int_1^2 3\dd x = 3$ (ein Rechteck). Zusammen $3{,}5$.

Hier ist $f$ übrigens auch monoton wachsend. Schon das allein garantiert die Integrierbarkeit.
:::

### Ein Gegenbeispiel: die Dirichlet-Funktion

Gibt es überhaupt beschränkte Funktionen, die nicht integrierbar sind? Ja. Das berühmteste Beispiel stammt von
Peter Gustav Lejeune Dirichlet aus dem Jahr 1829.

:::definition[Dirichlet-Funktion]
$$D(x) = \begin{cases} 1, & \text{wenn } x \text{ rational ist}, \\ 0, & \text{wenn } x \text{ irrational ist}. \end{cases}$$
:::

Rational heißt: als Bruch ganzer Zahlen darstellbar, wie $\frac34$ oder $2$. Irrational heißt: nicht als Bruch
darstellbar, wie $\sqrt2$ oder $\pi$. Die Funktion ist beschränkt, denn ihre Werte liegen zwischen $0$ und $1$.
Sie ist aber an **keiner** Stelle stetig. Man kann sie nicht zeichnen. Zwischen zwei verschiedenen reellen Zahlen
liegen nämlich immer sowohl rationale als auch irrationale Zahlen. Warum? Ist der Abstand der beiden Zahlen größer
als $\frac1n$, dann fällt einer der Brüche $\frac kn$ dazwischen, denn diese Brüche liegen im Abstand $\frac1n$
nebeneinander. Die Zahlen $\frac{k + \sqrt2}{n}$ liegen ebenfalls im Abstand $\frac1n$ nebeneinander und sind alle
irrational. Also fällt auch eine von ihnen dazwischen. Was rational und irrational genau bedeuten, steht in
[Kapitel 1, Dezimaldarstellung](/lernen/mathe3/zahlen/dezimaldarstellung-rationale-und-irrationale-zahlen).

```aufgabe
id: ib-wf-check-dirichlet
titel: Werte der Dirichlet-Funktion
art: check
niveau: 1
angabe: |
  Berechne $D(0{,}25) + D(\sqrt2) + D(\pi)$.
teile:
  - typ: zahl
    loesung: "1"
    fehler:
      - wert: "3"
        meldung: 'Nur $0{,}25 = \frac14$ ist rational. $\sqrt2$ und $\pi$ sind irrational, dort ist $D = 0$.'
      - wert: "0"
        meldung: '$0{,}25 = \frac14$ ist ein Bruch, also rational. Dort ist $D = 1$.'
loesung: |
  $0{,}25 = \frac14$ ist rational, also $D(0{,}25) = 1$. $\sqrt2$ und $\pi$ sind irrational, also $D = 0$.
  ---
  Summe: $1 + 0 + 0 = 1$.
```

:::satz[Die Dirichlet-Funktion ist nicht integrierbar]
Auf jedem Intervall $[a, b]$ mit $a < b$ ist $D$ nicht Riemann-integrierbar.
:::

:::beweis
**Schritt 1:** Es sei $Z$ eine beliebige Zerlegung. Jedes Teilintervall $[x_{k-1}, x_k]$ hat eine positive Länge.
Es enthält deshalb rationale Zahlen, an denen $D = 1$ ist, und irrationale Zahlen, an denen $D = 0$ ist.

**Schritt 2:** Also ist auf jedem Teilintervall die größte Höhe $M_k = 1$ und die kleinste $m_k = 0$.

**Schritt 3:** Daraus folgt
$$O(D, Z) = \sum_{k=1}^n 1\cdot\Delta x_k = b - a, \qquad U(D, Z) = \sum_{k=1}^n 0\cdot\Delta x_k = 0.$$

**Schritt 4:** Das gilt für **jede** Zerlegung. Also ist das Oberintegral $b - a$ und das Unterintegral $0$. Wegen
$b - a \ne 0$ sind sie verschieden, und $D$ ist nicht integrierbar.
:::

Mit Riemann-Summen sieht man dasselbe. Wählt man alle Zwischenstellen rational, ist jede Riemann-Summe $b - a$.
Wählt man sie irrational, ist jede Riemann-Summe $0$. Einen gemeinsamen Grenzwert gibt es nicht.

**Was haben wir gezeigt?** Die Dirichlet-Funktion ist an jeder Stelle gleichzeitig nah an $0$ und nah an $1$.
Egal wie fein du zerlegst, jedes Rechteck sieht beide Werte, und die Lücke zwischen Ober- und Untersumme schließt
sich nie. Das modernere Lebesgue-Integral kann mit so wilden Funktionen umgehen und liefert $\int_0^1 D = 0$. Das
ist aber weit jenseits des Prüfungsstoffs.

```reflexion
frage: Der Beweis für monotone Funktionen braucht keine Stetigkeit, der Beweis für stetige Funktionen braucht keine Monotonie. Was ist in beiden Beweisen der gemeinsame Kern?
antwort: |
  In beiden Fällen zeigt man, dass der Abstand $O - U$ beliebig klein wird. Dieser Abstand ist die Summe der
  Kästchen $(M_k - m_k)\,\Delta x_k$ zwischen Ober- und Untersumme. Bei monotonen Funktionen ist die Summe der
  Höhen $M_k - m_k$ insgesamt höchstens $f(b) - f(a)$, und die Breiten werden klein. Bei stetigen Funktionen
  wird jede einzelne Höhe $M_k - m_k$ klein, und die Breiten ergeben zusammen $b - a$. Beide Wege führen zum
  Riemannschen Kriterium.
```

:::merke[Überblick: integrierbar oder nicht?]
| Funktion auf $[a, b]$ | integrierbar? | Grund |
|---|---|---|
| stetig, etwa Polynome, $e^x$, $\sin x$ | ja. | Satz über stetige Funktionen. |
| monoton, auch mit Sprüngen | ja. | Satz über monotone Funktionen. |
| beschränkt mit endlich vielen Sprüngen | ja. | Erweiterung, etwa Treppenfunktionen. |
| unbeschränkt, etwa $\frac1x$ auf $(0, 1]$ | nein, nicht im Riemann-Sinn. | Obersummen existieren nicht. Eventuell als uneigentliches Integral. |
| Dirichlet-Funktion | nein. | $U = 0$ und $O = b - a$ für jede Zerlegung. |
:::

:::achtung[Integrierbar heißt nicht stetig]
Ein falscher Schluss lautet: Das Integral $\int_0^4 f(x)\dd x = 2$ der Treppenfunktion aus dem Beispiel existiert,
also ist $f$ stetig. Die Treppenfunktion springt aber bei $1$ und bei $2$. Richtig ist nur die Richtung „stetig,
also integrierbar“. Zusammen mit
[Kapitel 13, Differenzierbar heißt stetig](/lernen/mathe3/differenzierbarkeit/differenzierbar-heisst-stetig-aber-nicht-umgekehrt)
ergibt sich die Kette
„differenzierbar, also stetig, also integrierbar“. Keine der Umkehrungen gilt.
:::

:::achtung[Überall definiert heißt nicht integrierbar]
Ein zweiter falscher Schluss: Die Funktion $f(x) = \frac{1}{x^2}$ für $x > 0$ mit $f(0) = 0$ ist auf ganz $[0, 1]$
definiert. Also sei sie dort integrierbar, und mit der Stammfunktion $-\frac1x$ ergebe sich ein Wert. Der Fehler:
$f$ ist unbeschränkt. Auf dem ersten Teilintervall $[0, x_1]$ gibt es kein Supremum, und die Obersumme existiert
nicht. Im Riemann-Sinn ist $f$ nicht integrierbar. Wie man solche Fälle über einen Grenzwert behandelt, zeigt
[14.9 Uneigentliche Integrale](/lernen/mathe3/integrierbarkeit/uneigentliche-integrale).
:::

```aufgabe
id: ib-treppenfunktion
titel: Integral einer Treppenfunktion
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Es sei $f(x) = 2$ für $0 \le x < 1$, $f(x) = -1$ für $1 \le x < 3$ und $f(x) = 4$ für $3 \le x \le 4$.
  Berechne $\int_0^4 f(x)\dd x$.
teile:
  - typ: zahl
    label: '$\int_0^4 f(x)\dd x$'
    loesung: "2*1 + (-1)*2 + 4*1"
    anzeige: '4'
    fehler:
      - wert: "2*1 + 1*2 + 4*1"
        meldung: Das Rechteck auf $[1, 3]$ liegt unter der $x$-Achse. Im Integral zählt es negativ.
      - wert: "2 - 1 + 4"
        meldung: Du hast nur die Höhen addiert. Jede Höhe gilt auf einem Stück mit eigener Breite, und $[1, 3]$ ist $2$ breit.
hinweise:
  - Auf jedem Stück ist $f$ konstant. Das Integral ist die Summe der Rechteckflächen „Höhe mal Breite“ mit Vorzeichen.
loesung: |
  **Ansatz:** $f$ ist eine Treppenfunktion, also integrierbar. Das Integral ist die Summe der Rechteckflächen mit Vorzeichen.
  ---
  Rechtecke: $2\cdot 1 = 2$, dann $(-1)\cdot 2 = -2$, dann $4\cdot 1 = 4$. Bilanz: $2 - 2 + 4 = 4$.
  ---
  **Deutung:** Das Rechteck unter der Achse hebt das erste genau auf. Übrig bleibt das letzte Rechteck mit Fläche $4$.
```

```aufgabe
id: ib-integrierbar-stueckweise
titel: Ein einzelner Ausreißer
niveau: 1
lernziel: 4
kompetenz: anwenden
angabe: |
  Es sei $f(x) = 3$ für $0 \le x < 2$, $f(2) = 50$ und $f(x) = 1$ für $2 < x \le 5$. Ist $f$ auf $[0, 5]$
  integrierbar? Berechne gegebenenfalls $\int_0^5 f(x)\dd x$.
teile:
  - typ: auswahl
    label: 'Integrierbar?'
    optionen: ['ja', 'nein']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$f$ ist beschränkt (alle Werte zwischen $1$ und $50$) und hat nur eine Unstetigkeitsstelle. Das genügt für die Integrierbarkeit.'
  - typ: zahl
    label: '$\int_0^5 f(x)\dd x$'
    loesung: "3*2 + 1*3"
    fehler:
      - wert: "3*2 + 1*3 + 50"
        meldung: Der Wert an einer einzelnen Stelle trägt keine Fläche bei. Ein Punkt hat die Breite $0$.
      - wert: "3*2 + 50*3"
        meldung: Der Wert $50$ gilt nur an der Stelle $2$. Auf $(2, 5]$ ist $f = 1$.
hinweise:
  - Ein einzelner Funktionswert ändert das Integral nicht. Rechne mit den beiden Rechtecken.
loesung: |
  **Ansatz:** $f$ ist beschränkt und nur bei $x = 2$ unstetig. Also ist $f$ integrierbar, und der Wert $f(2) = 50$ spielt keine Rolle.
  ---
  Rechtecke: $3\cdot 2 = 6$ auf $[0, 2]$ und $1\cdot 3 = 3$ auf $[2, 5]$. Zusammen $\int_0^5 f(x)\dd x = 9$.
```

```aufgabe
id: ib-integrierbar-auswahl
titel: Integrierbar oder nicht?
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: |
  Welche der folgenden Funktionen sind auf $[0, 2]$ Riemann-integrierbar? Wähle alle richtigen aus.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$f(x) = e^{-x^2}$'
      - '$f(x) = \lfloor x \rfloor$, die größte ganze Zahl kleiner oder gleich $x$'
      - '$f(x) = \frac1x$ für $x > 0$ und $f(0) = 0$'
      - 'die Dirichlet-Funktion'
      - '$f(x) = x^2$ für $x \ne 1$ und $f(1) = 100$'
    richtig: [0, 1, 4]
    fehler:
      - wert: [0, 1, 2, 4]
        meldung: '$\frac1x$ ist auf $(0, 2]$ unbeschränkt. Ohne Beschränktheit gibt es keine Obersummen, auch wenn $f(0)$ definiert ist.'
      - wert: [0, 4]
        meldung: '$\lfloor x \rfloor$ springt zwar, ist aber monoton wachsend. Monotone Funktionen sind integrierbar.'
      - wert: [0, 1]
        meldung: 'Eine einzige abgeänderte Stelle stört nicht. $x^2$ mit $f(1) = 100$ ist beschränkt und nur bei $1$ unstetig.'
hinweise:
  - Prüfe zuerst die Beschränktheit, dann Stetigkeit oder Monotonie.
  - 'Ein einzelner abgeänderter Funktionswert macht eine integrierbare Funktion nicht kaputt. Unbeschränktheit dagegen schon.'
loesung: |
  **Ansatz:** Zuerst Beschränktheit prüfen, dann eine der Klassen stetig, monoton oder endlich viele Unstetigkeitsstellen suchen.
  ---
  $e^{-x^2}$ ist stetig: integrierbar. $\lfloor x\rfloor$ ist monoton wachsend, also integrierbar, obwohl sie bei $1$ und $2$ springt.
  ---
  $\frac1x$ ist auf $(0, 2]$ unbeschränkt: im Riemann-Sinn **nicht** integrierbar. Die Dirichlet-Funktion ist nicht integrierbar, denn $U = 0$ und $O = 2$ für jede Zerlegung.
  ---
  $x^2$ mit abgeändertem Wert an einer Stelle ist beschränkt und hat nur eine Unstetigkeitsstelle. Sie ist integrierbar mit demselben Integral $\frac83$ wie $x^2$. Richtig sind also die Optionen 1, 2 und 5.
```

```aufgabe
id: ib-integrierbar-monoton-n
titel: Eine Treppe einschließen
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Für $f(x) = \lfloor x \rfloor$ auf $[0, 3]$ werden äquidistante Ober- und Untersummen gebildet.

  a) Gib $O_n - U_n$ als Term in $n$ an.

  b) Bestimme das kleinste $n$ mit $O_n - U_n < 0{,}01$.
teile:
  - typ: term
    label: 'a) $O_n - U_n$'
    variable: n
    bereich: [1, 50]
    loesung: "9/n"
    fehler:
      - wert: "3/n"
        meldung: 'Die Teleskopformel enthält zwei Faktoren: $b - a = 3$ und $f(b) - f(a) = 3$.'
  - typ: zahl
    label: 'b) kleinstes $n$'
    loesung: "901"
    toleranz: 0.1
    fehler:
      - wert: "900"
        meldung: 'Für $n = 900$ ist $\frac{9}{900} = 0{,}01$, also nicht kleiner als $0{,}01$.'
hinweise:
  - '$f$ ist monoton wachsend. Dann gilt die Teleskopformel $O_n - U_n = \frac{b-a}{n}\,\big(f(b) - f(a)\big)$, auch wenn $f$ springt.'
  - 'Es ist $f(0) = 0$ und $f(3) = 3$. Löse danach $\frac9n < 0{,}01$.'
loesung: |
  **Ansatz:** $\lfloor x\rfloor$ ist monoton wachsend. Auf jedem Teilintervall liegt der kleinste Wert links und der größte rechts, also gilt die Teleskopformel.
  ---
  a) $O_n - U_n = \frac{3 - 0}{n}\,\big(f(3) - f(0)\big) = \frac3n\cdot 3 = \frac9n$.
  ---
  b) $\frac9n < 0{,}01$ ist gleichwertig mit $n > 900$. Das kleinste $n$ ist $901$.
  ---
  **Deutung:** Der Abstand geht gegen $0$, also ist $f$ integrierbar, obwohl sie dreimal springt. Das Integral ist $0\cdot 1 + 1\cdot 1 + 2\cdot 1 = 3$.
gefuehrt:
  - text: Ist $\lfloor x \rfloor$ auf $[0, 3]$ monoton wachsend?
    teil: { typ: auswahl, optionen: ['ja', 'nein'], richtig: [0], fehler: [ { wert: 1, meldung: 'Wenn $x$ größer wird, kann $\lfloor x\rfloor$ gleich bleiben oder springen, aber nie kleiner werden.' } ] }
    erklaerung: 'Die Funktion wird nie kleiner. Deshalb gilt die Teleskopformel.'
  - text: Wie groß ist $f(3) - f(0)$?
    teil: { typ: zahl, loesung: "3" }
    erklaerung: '$f(3) = 3$ und $f(0) = 0$.'
  - text: Gib $O_n - U_n$ als Term in $n$ an.
    teil: { typ: term, variable: n, bereich: [1, 50], loesung: "9/n" }
    erklaerung: '$\frac{3 - 0}{n}\cdot 3 = \frac9n$.'
  - text: Welches ist das kleinste $n$ mit $\frac9n < 0{,}01$?
    teil: { typ: zahl, loesung: "901", toleranz: 0.1 }
    erklaerung: '$n > 900$, also $n = 901$.'
```

```aufgabe
id: ib-dirichlet
titel: Ober- und Untersumme der Dirichlet-Funktion
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: |
  Für die Dirichlet-Funktion $D$ auf $[0, 3]$ und eine **beliebige** Zerlegung $Z$: Bestimme $U(D, Z)$ und $O(D, Z)$.
teile:
  - typ: zahl
    label: '$U(D, Z)$'
    loesung: "0"
    fehler:
      - wert: "3"
        meldung: 'Jedes Teilintervall enthält auch irrationale Zahlen, an denen $D = 0$ ist. Die kleinste Höhe ist also $0$.'
  - typ: zahl
    label: '$O(D, Z)$'
    loesung: "3"
    fehler:
      - wert: "1"
        meldung: 'Die größte Höhe ist $1$ auf jedem Teilintervall. Die Obersumme ist aber $1$ mal die **gesamte** Länge $3$.'
      - wert: "0"
        meldung: 'Jedes Teilintervall enthält auch rationale Zahlen, an denen $D = 1$ ist.'
hinweise:
  - Enthält jedes Teilintervall rationale **und** irrationale Zahlen?
  - 'Wenn auf jedem Teilintervall $m_k = 0$ und $M_k = 1$ ist, kannst du die Summen über die Längen $\Delta x_k$ zusammenfassen.'
loesung: |
  **Ansatz:** Jedes Teilintervall hat eine positive Länge. Es enthält also rationale Zahlen mit $D = 1$ und irrationale Zahlen mit $D = 0$. Somit ist $m_k = 0$ und $M_k = 1$.
  ---
  $U = \sum 0\cdot\Delta x_k = 0$ und $O = \sum 1\cdot\Delta x_k = 3 - 0 = 3$.
  ---
  Das gilt für jede Zerlegung. Unter- und Oberintegral sind $0$ und $3$, also ist $D$ nicht integrierbar.
```

```aufgabe
id: ib-punkt-aendern
titel: Ein Punkt ändert nichts
niveau: 2
lernziel: 4
kompetenz: begruenden
angabe: |
  Die Funktion $f$ ist auf $[0, 1]$ integrierbar. Die Funktion $g$ stimmt mit $f$ überein, außer an der Stelle
  $x_0 = \frac12$. Dort gilt $g(x_0) = f(x_0) + 5$. Begründe mit Ober- und Untersummen, warum
  $\int_0^1 g\dd x = \int_0^1 f\dd x$ ist.
teile:
  - typ: text
    muster: |
      Man packt $x_0$ in ein Teilintervall der Breite höchstens $\delta$. Auf allen anderen Teilintervallen sind die
      Summanden von $f$ und $g$ gleich. Auf dem einen Teilintervall ändern sich $m_k$ und $M_k$ höchstens um $5$, der
      Beitrag zur Summe also höchstens um $5\delta$. Liegt $x_0$ auf einem Teilungspunkt, sind zwei Teilintervalle
      betroffen, also höchstens $10\delta$. Weil $\delta$ beliebig klein ist, hat $g$ dieselben Unter- und Oberintegrale
      wie $f$. Beide sind gleich $\int_0^1 f\dd x$.
hinweise:
  - Wie stark kann sich eine einzelne Rechteckfläche ändern, wenn das Teilintervall die Breite $\delta$ hat?
  - 'Alle Rechtecke, deren Teilintervall die Stelle $\frac12$ nicht enthält, sind für $f$ und $g$ gleich.'
loesung: |
  **Ansatz:** Wähle Zerlegungen, bei denen $x_0$ in einem Teilintervall der Breite höchstens $\delta$ liegt oder Randpunkt zweier solcher Teilintervalle ist.
  ---
  Nur dort können sich $m_k$ und $M_k$ von $f$ und $g$ unterscheiden, und zwar um höchstens $5$. Die Summen unterscheiden sich daher um höchstens $2\cdot 5\cdot\delta$.
  ---
  Da $\delta$ beliebig klein gewählt werden kann, stimmen Unter- und Oberintegral von $g$ mit denen von $f$ überein. $g$ ist integrierbar, und die Integrale sind gleich. **Kurz:** Ein einzelner Punkt hat keine Breite und trägt keine Fläche.
```

```aufgabe
id: ib-dirichlet-variante
titel: Eine Variante der Dirichlet-Funktion
niveau: 3
lernziel: 4
kompetenz: begruenden
angabe: |
  Es sei $g(x) = x$ für rationales $x$ und $g(x) = 0$ für irrationales $x$, betrachtet auf $[0, 1]$.
  Berechne für die äquidistante Zerlegung mit $n$ Teilen $U_n$ und $O_n$, bestimme $\lim O_n$ und
  entscheide, ob $g$ integrierbar ist.
teile:
  - typ: zahl
    label: '$U_n$ (für jedes $n$)'
    loesung: "0"
  - typ: term
    label: '$O_n$'
    variable: n
    bereich: [1, 30]
    loesung: "(n+1)/(2*n)"
    fehler:
      - wert: "(n-1)/(2*n)"
        meldung: 'Das Supremum auf $[x_{k-1}, x_k]$ ist der **rechte** Rand $x_k$, nicht der linke. Rationale Zahlen kommen $x_k$ beliebig nahe.'
  - typ: zahl
    label: '$\lim O_n$'
    loesung: "1/2"
    anzeige: '\tfrac12'
  - typ: auswahl
    label: 'Ist $g$ auf $[0, 1]$ integrierbar?'
    optionen: ['ja', 'nein']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Die Untersummen sind alle $0$, die Obersummen gehen gegen $\frac12$. Der Abstand geht also nicht gegen $0$.'
hinweise:
  - 'Auf $[x_{k-1}, x_k]$ ist das Infimum $0$ wegen der irrationalen Stellen. Das Supremum ist $x_k$, denn $x_k = \frac kn$ ist selbst rational.'
  - 'Untersummen sind immer $0$, Obersummen streben gegen $\int_0^1 x\dd x$.'
loesung: |
  **Ansatz:** Jedes Teilintervall enthält rationale und irrationale Zahlen. Wir bestimmen kleinste und größte Höhe.
  ---
  An irrationalen Stellen ist $g = 0$, und überall ist $g \ge 0$. Also $m_k = 0$ und $U_n = 0$.
  ---
  Das Supremum ist $M_k = x_k = \frac kn$, weil $x_k$ rational ist und $g(x) \le x \le x_k$ gilt. Damit $O_n = \sum_{k=1}^n \frac1n\cdot\frac kn = \frac{1}{n^2}\cdot\frac{n(n+1)}{2} = \frac{n+1}{2n}$.
  ---
  $O_n \to \frac12$. Das Unterintegral ist $0$. Das Oberintegral ist $\frac12$, denn jede Obersumme ist mindestens $\int_0^1 x\dd x = \frac12$.
  ---
  **Ergebnis:** Unterintegral $0 \ne \frac12 =$ Oberintegral. Also ist $g$ **nicht** integrierbar.
```

## Eigenschaften des Integrals

```aufgabe
id: ib-eig-vorwissen
titel: Grenzen vertauschen
art: check
niveau: 1
angabe: |
  Für eine stetige Funktion $f$ gilt $\int_2^5 f(x)\dd x = 3$. Wie groß ist $\int_5^2 f(x)\dd x$? Zum Nachlesen:
  [Kapitel 10, Das bestimmte Integral](/lernen/mathe3/integralrechnung/das-bestimmte-integral-als-flaechenbilanz).
teile:
  - typ: zahl
    loesung: "-3"
    fehler:
      - wert: "3"
        meldung: Vertauscht man die Grenzen, ändert sich das Vorzeichen des Integrals.
loesung: |
  Regel aus Kapitel 10: $\int_b^a f(x)\dd x = -\int_a^b f(x)\dd x$.
  ---
  Also $\int_5^2 f(x)\dd x = -3$.
```

In [Kapitel 10](/lernen/mathe3/integralrechnung/das-bestimmte-integral-als-flaechenbilanz) hast du die
Rechenregeln für Integrale aus der Anschauung als Flächenbilanz übernommen. Jetzt haben wir eine genaue
Definition, und die Regeln lassen sich **beweisen**. Alle Beweise laufen nach demselben Muster: Die Eigenschaft
gilt für jede einzelne Riemann-Summe, und der Grenzübergang erhält sie.

:::satz[Rechenregeln für bestimmte Integrale]
Es seien $f$ und $g$ auf $[a, b]$ integrierbar und $\lambda$ eine reelle Zahl.

1. **Linearität:** $f + g$ und $\lambda f$ sind integrierbar, und
   $$\int_a^b \big(f(x) + g(x)\big)\dd x = \int_a^b f(x)\dd x + \int_a^b g(x)\dd x, \qquad \int_a^b \lambda f(x)\dd x = \lambda\int_a^b f(x)\dd x.$$
2. **Intervalladditivität:** Für $a < c < b$ gilt $\int_a^b f(x)\dd x = \int_a^c f(x)\dd x + \int_c^b f(x)\dd x$.
3. **Monotonie:** Ist $f(x) \le g(x)$ für alle $x$ in $[a, b]$, so ist $\int_a^b f(x)\dd x \le \int_a^b g(x)\dd x$.
4. **Dreiecksungleichung:** $|f|$ ist integrierbar, und $\left|\int_a^b f(x)\dd x\right| \le \int_a^b |f(x)|\dd x$.
5. **Abschätzung:** Ist $m \le f(x) \le M$ auf $[a, b]$, so gilt $m\,(b - a) \le \int_a^b f(x)\dd x \le M\,(b - a)$.
:::

Dabei ist $\lambda$ (griechisch „lambda“) ein konstanter Faktor. Die senkrechten Striche $|\ldots|$ bedeuten den
Betrag. In allen fünf Regeln ist $a < b$ vorausgesetzt.

```aufgabe
id: ib-eig-check-abschaetzung
titel: Abschätzung in einem Schritt
art: check
niveau: 1
angabe: |
  Eine Funktion erfüllt $2 \le f(x) \le 5$ auf $[1, 3]$. Zwischen welchen Zahlen liegt $\int_1^3 f(x)\dd x$?
teile:
  - typ: auswahl
    optionen: ['zwischen $4$ und $10$', 'zwischen $2$ und $5$', 'zwischen $6$ und $15$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Das sind die Grenzen für die Funktionswerte. Für das Integral multiplizierst du noch mit der Intervalllänge $3 - 1 = 2$.'
      - wert: 2
        meldung: 'Du hast mit $3$ multipliziert. Die Intervalllänge ist aber $3 - 1 = 2$.'
loesung: |
  Abschätzung: $m\,(b - a) \le \int_a^b f \le M\,(b - a)$ mit $m = 2$, $M = 5$ und $b - a = 2$.
  ---
  Also $4 \le \int_1^3 f(x)\dd x \le 10$.
```

:::beweis[Beweis der Linearität für Summen]
**Schritt 1: eine einzelne Riemann-Summe.** Für jede Zerlegung und jede Wahl der Zwischenstellen darf man die
Summe aufteilen:
$$R(f + g, Z, \xi) = \sum_k \big(f(\xi_k) + g(\xi_k)\big)\Delta x_k = R(f, Z, \xi) + R(g, Z, \xi).$$

**Schritt 2: Grenzübergang.** Wir nehmen eine Folge von Zerlegungen, deren Feinheit gegen $0$ geht. Rechts streben
die beiden Summen gegen $\int f$ und $\int g$, weil $f$ und $g$ integrierbar sind.

**Schritt 3: Grenzwertsatz.** Nach dem Grenzwertsatz für Summen aus
[Kapitel 11](/lernen/mathe3/grenzwerte-folgen/grenzwertsaetze-und-einschliessungssatz) strebt die linke Seite
gegen $\int f + \int g$. Das gilt für jede Wahl der Zwischenstellen. Nach Fassung 3 des Kriteriums aus
[14.3 Definition der Integrierbarkeit](/lernen/mathe3/integrierbarkeit/definition-der-integrierbarkeit) ist
$f + g$ also integrierbar mit genau diesem Integral.
:::

:::beweis[Beweis der Monotonie]
**Schritt 1:** Aus $f \le g$ folgt für jede Riemann-Summe $R(f, Z, \xi) \le R(g, Z, \xi)$. Denn jeder Summand
$f(\xi_k)\,\Delta x_k$ ist höchstens $g(\xi_k)\,\Delta x_k$, weil $\Delta x_k > 0$ ist.

**Schritt 2:** Beim Grenzübergang bleibt das „kleiner oder gleich“ erhalten. Das ist der Satz „Ungleichungen bleiben
im Grenzwert erhalten“ aus
[Kapitel 11, Eindeutigkeit und Beschränktheit](/lernen/mathe3/grenzwerte-folgen/eindeutigkeit-und-beschraenktheit-die-ersten-beweise).
Also $\int_a^b f \le \int_a^b g$.

**Schritt 3:** Die Abschätzung (Regel 5) ist ein Sonderfall. Man vergleicht $f$ mit den konstanten Funktionen $m$
und $M$. Deren Integrale sind die Rechteckflächen $m\,(b - a)$ und $M\,(b - a)$.
:::

**Was haben wir gezeigt?** Die Rechenregeln aus
[Kapitel 10, Das bestimmte Integral](/lernen/mathe3/integralrechnung/das-bestimmte-integral-als-flaechenbilanz) sind
keine Erfahrungswerte, sondern folgen aus der
Definition über Summen. Die Abschätzung hat dabei eine besonders anschauliche Bedeutung: Die Fläche unter dem
Graphen liegt zwischen dem niedrigsten und dem höchsten Rechteck über $[a, b]$.

```aufgabe
id: ib-eig-check-monotonie
titel: Welches Integral ist größer?
art: check
niveau: 1
angabe: |
  Auf $[0, 2]$ gilt $f(x) \le g(x)$. Außerdem ist $\int_0^2 g(x)\dd x = 5$. Welcher Wert ist für $\int_0^2 f(x)\dd x$ möglich?
teile:
  - typ: auswahl
    optionen: ['$4{,}2$', '$5{,}3$', '$7$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Nach der Monotonie des Integrals ist $\int f \le \int g = 5$. $5{,}3$ ist zu groß.
      - wert: 2
        meldung: 'Eine Funktion, die überall darunter liegt, kann kein größeres Integral haben.'
loesung: |
  Monotonie: Aus $f \le g$ auf $[0, 2]$ folgt $\int_0^2 f \le \int_0^2 g = 5$.
  ---
  Nur $4{,}2$ ist höchstens $5$.
```

:::beweis[Beweisidee für Intervalladditivität und Dreiecksungleichung]
**Intervalladditivität:** Man nimmt nur Zerlegungen von $[a, b]$, die den Punkt $c$ als Teilungspunkt enthalten.
Jede solche Zerlegung besteht aus einer Zerlegung von $[a, c]$ und einer von $[c, b]$. Jede Untersumme und jede
Obersumme zerfällt deshalb in zwei Teile, einen links und einen rechts von $c$. Im Grenzübergang wird daraus
$\int_a^c f + \int_c^b f$.

**Dreiecksungleichung:** Für jede Zahl gilt $-|f(x)| \le f(x) \le |f(x)|$. Mit der Monotonie folgt
$-\int_a^b |f| \le \int_a^b f \le \int_a^b |f|$. Eine Zahl, die zwischen $-A$ und $A$ liegt, hat höchstens den Betrag
$A$. Also ist $\left|\int_a^b f\right| \le \int_a^b |f|$. Dass $|f|$ selbst integrierbar ist, zeigt man über
Ober- und Untersummen. Das sparen wir uns hier.
:::

:::beispiel[Ein Integral abschätzen, das man nicht ausrechnen kann]
Für $\int_0^1 \sqrt{1 + x^4}\dd x$ gibt es keine Stammfunktion aus bekannten Funktionen. Trotzdem können wir sagen,
wo der Wert liegt.

1. **Kleinster und größter Wert:** $1 + x^4$ wächst auf $[0, 1]$, und die Wurzel auch. Also ist der kleinste Wert
   $m = \sqrt{1} = 1$ bei $x = 0$ und der größte $M = \sqrt2 \approx 1{,}414$ bei $x = 1$.
2. **Abschätzung anwenden:** Die Intervalllänge ist $1$. Also $1\cdot 1 \le \int_0^1 \sqrt{1 + x^4}\dd x \le \sqrt2\cdot 1$.
3. **Ergebnis:** Der Wert liegt zwischen $1$ und $1{,}414$.

Numerisch ist der Wert etwa $1{,}089$. Die Abschätzung ist grob, aber in zwei Zeilen bewiesen.
:::

```plot
x: [-0.1, 1.15]
y: [-0.1, 1.6]
achsen: { x: "x", y: "y" }
graphen:
  - { f: "sqrt(1 + x^4)", label: "y = √(1 + x⁴)", farbe: 0 }
flaechen:
  - { f: "sqrt(1 + x^4)", von: 0, bis: 1, farbe: 0 }
strecken:
  - { von: [0, 1.4142], nach: [1, 1.4142], farbe: 1, gestrichelt: true }
  - { von: [0, 1], nach: [1, 1], farbe: 2, gestrichelt: true }
  - { von: [1, 0], nach: [1, 1.4142], gestrichelt: true }
beschriftung: Abschätzung von ∫ √(1 + x⁴) dx über [0, 1]. Die Fläche liegt zwischen dem Rechteck der Höhe 1 (grün) und dem Rechteck der Höhe √2 ≈ 1,414 (orange). Der wahre Wert ist etwa 1,089.
```

:::beispiel[Dreiecksungleichung beim Sinus]
Wir vergleichen $\int_0^{3\pi/2} \sin x\dd x$ mit $\int_0^{3\pi/2} |\sin x|\dd x$.

1. **Integral:** $\big[-\cos x\big]_0^{3\pi/2} = -\cos\frac{3\pi}{2} + \cos 0 = 0 + 1 = 1$.
2. **Integral des Betrags:** Auf $[0, \pi]$ ist $\sin x \ge 0$ mit Fläche $2$. Auf $[\pi, \frac{3\pi}{2}]$ ist $\sin x \le 0$.
   Dort ist $\int_\pi^{3\pi/2} |\sin x|\dd x = \big[\cos x\big]_\pi^{3\pi/2} = 0 - (-1) = 1$. Zusammen $2 + 1 = 3$.
3. **Vergleich:** $|1| \le 3$. Die Dreiecksungleichung gilt, und sie ist hier echt kleiner.

Der Grund: Im Integral heben sich die Fläche über der Achse und die Fläche unter der Achse teilweise auf. Im
Integral des Betrags zählt alles positiv. Bei einer stetigen Funktion gibt es Gleichheit nur, wenn $f$ das
Vorzeichen nie wechselt.
:::

### Orientierte Integrationsgrenzen

Bisher war immer $a < b$. Man vereinbart zusätzlich
$$\int_a^a f(x)\dd x = 0, \qquad \int_b^a f(x)\dd x = -\int_a^b f(x)\dd x.$$
Mit dieser Vereinbarung gilt die Intervalladditivität $\int_a^b = \int_a^c + \int_c^b$ für **jede** Lage von $a$,
$b$ und $c$, auch wenn $c$ außerhalb von $[a, b]$ liegt. Genau das braucht man bei der Integralfunktion in
[14.8 Hauptsatz](/lernen/mathe3/integrierbarkeit/hauptsatz-der-differential-und-integralrechnung).

Ein Zahlenbeispiel: $\int_0^2 x\dd x = 2$ und $\int_0^3 x\dd x = 4{,}5$. Dann ist
$\int_2^3 x\dd x = \int_2^0 x\dd x + \int_0^3 x\dd x = -2 + 4{,}5 = 2{,}5$. Das stimmt mit
$\big[\frac{x^2}{2}\big]_2^3 = 4{,}5 - 2 = 2{,}5$ überein.

:::beispiel[Monotonie liefert eine Ungleichung ohne Rechnen]
Für $x \ge 1$ gilt $\ln x \le x - 1$. Die Gerade $y = x - 1$ ist die Tangente an $\ln x$ bei $x = 1$. Der
Logarithmus ist nach unten gekrümmt, denn $(\ln x)'' = -\frac{1}{x^2} < 0$. Darum liegt sein Graph unter jeder
seiner Tangenten.

1. **Monotonie anwenden:** $\int_1^2 \ln x\dd x \le \int_1^2 (x - 1)\dd x$.
2. **Rechte Seite:** Die Fläche unter $x - 1$ auf $[1, 2]$ ist ein Dreieck mit Grundlinie $1$ und Höhe $1$, also $\frac12$.
3. **Ergebnis:** $\int_1^2 \ln x\dd x \le 0{,}5$.

Mit partieller Integration aus
[Kapitel 10, Partielle Integration](/lernen/mathe3/integralrechnung/partielle-integration-die-produktregel-rueckwaerts)
erhält man den genauen Wert $2\ln 2 - 1 \approx 0{,}386$. Die Schranke stimmt.
:::

:::achtung[Monotonie nur bei richtig orientierten Grenzen]
Eine typische Fehlrechnung lautet: Der Integrand $x^2$ ist nie negativ, also ist $\int_3^1 x^2\dd x \ge 0$. Tatsächlich ist
$\int_3^1 x^2\dd x = -\int_1^3 x^2\dd x = -\frac{26}{3}$, also negativ. Die Monotonie und die Abschätzung gelten nur,
wenn die untere Grenze kleiner ist als die obere. Bei vertauschten Grenzen dreht sich jedes Ungleichheitszeichen um.
:::

:::achtung[Betrag des Integrals ist nicht Integral des Betrags]
Eine zweite typische Fehlrechnung lautet: Es ist $\int_{-1}^{1} x^3\dd x = 0$, also ist auch
$\int_{-1}^1 |x^3|\dd x = 0$. Das Integral ist zwar $0$, weil sich die Stücke links und rechts der Null aufheben. Das Integral des Betrags ist
$2\int_0^1 x^3\dd x = 2\cdot\frac14 = \frac12$. Allgemein gilt nur $\left|\int f\right| \le \int|f|$, keine Gleichheit.
:::

```reflexion
frage: Warum gilt die Dreiecksungleichung $\left|\int_a^b f\right| \le \int_a^b |f|$ nur als „kleiner oder gleich“? Wann gilt Gleichheit?
antwort: |
  Im Integral zählen Stücke unter der $x$-Achse negativ. Sie heben einen Teil der positiven Stücke auf. Im
  Integral von $|f|$ zählt dagegen jedes Stück positiv. Deshalb ist der Betrag des Integrals höchstens so groß wie
  das Integral des Betrags. Gleichheit gilt, wenn nichts aufgehoben wird. Bei einer stetigen Funktion heißt das:
  $f$ wechselt auf $[a, b]$ das Vorzeichen nicht, etwa weil $f \ge 0$ überall gilt.
```

```aufgabe
id: ib-linearitaet
titel: Linearität und Additivität nutzen
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Es gilt $\int_0^3 f(x)\dd x = 4$, $\int_0^3 g(x)\dd x = -2$ und $\int_3^7 f(x)\dd x = 5$. Berechne die drei Integrale.
teile:
  - typ: zahl
    label: '$\int_0^3 \big(2f(x) - 3g(x)\big)\dd x$'
    loesung: "2*4 - 3*(-2)"
    anzeige: '14'
    fehler:
      - wert: "2*4 - 3*2"
        meldung: 'Achte auf das Vorzeichen: $-3\cdot(-2) = +6$.'
  - typ: zahl
    label: '$\int_0^7 f(x)\dd x$'
    loesung: "4 + 5"
    anzeige: '9'
    fehler:
      - wert: "5 - 4"
        meldung: 'Die Intervalle $[0, 3]$ und $[3, 7]$ schließen aneinander an. Ihre Integrale werden addiert.'
  - typ: zahl
    label: '$\int_7^0 f(x)\dd x$'
    loesung: "-(4 + 5)"
    anzeige: '-9'
    fehler:
      - wert: "9"
        meldung: Die Grenzen stehen verkehrt herum. Das ändert das Vorzeichen.
hinweise:
  - 'Linearität: $\int (\lambda f + \mu g) = \lambda\int f + \mu\int g$. Additivität: $\int_0^3 + \int_3^7 = \int_0^7$.'
loesung: |
  **Ansatz:** Wir kennen nur Zahlen, nicht die Funktionen. Mit den Rechenregeln setzen wir sie zusammen.
  ---
  Linearität: $2\cdot 4 - 3\cdot(-2) = 8 + 6 = 14$. Intervalladditivität: $\int_0^7 f = \int_0^3 f + \int_3^7 f = 4 + 5 = 9$.
  ---
  Vertauschte Grenzen: $\int_7^0 f = -\int_0^7 f = -9$.
```

```aufgabe
id: ib-additiv-luecke
titel: Fehlendes Teilintegral
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Gegeben sind $\int_1^6 h(x)\dd x = 10$ und $\int_1^4 h(x)\dd x = 13$. Berechne $\int_4^6 h(x)\dd x$ und
  $\int_6^4 h(x)\dd x$.
teile:
  - typ: zahl
    label: '$\int_4^6 h(x)\dd x$'
    loesung: "10 - 13"
    anzeige: '-3'
    fehler:
      - wert: "3"
        meldung: 'Aus $\int_1^4 h + \int_4^6 h = \int_1^6 h$ folgt $\int_4^6 h = 10 - 13$. Die Reihenfolge ist wichtig.'
      - wert: "23"
        meldung: Das Intervall $[1, 6]$ enthält das Stück $[1, 4]$ schon. Es muss abgezogen werden.
  - typ: zahl
    label: '$\int_6^4 h(x)\dd x$'
    loesung: "13 - 10"
    anzeige: '3'
    fehler:
      - wert: "-3"
        meldung: Die Grenzen sind gegenüber dem ersten Integral vertauscht. Das Vorzeichen dreht sich um.
hinweise:
  - 'Intervalladditivität: $\int_1^6 h = \int_1^4 h + \int_4^6 h$.'
loesung: |
  **Ansatz:** Intervalladditivität $\int_1^6 h = \int_1^4 h + \int_4^6 h$, nach dem gesuchten Teil aufgelöst.
  ---
  $\int_4^6 h = 10 - 13 = -3$.
  ---
  $\int_6^4 h = -\int_4^6 h = 3$. **Deutung:** Auf $[4, 6]$ liegt in der Bilanz mehr Fläche unter als über der $x$-Achse.
```

```aufgabe
id: ib-abschaetzung
titel: Integral abschätzen ohne Stammfunktion
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Für $\int_0^2 \sqrt{1 + x^3}\dd x$ gibt es keine Stammfunktion aus bekannten Funktionen. Gib mithilfe der
  Abschätzung $m\,(b - a) \le \int_a^b f \le M\,(b - a)$ eine untere und eine obere Schranke an.
teile:
  - typ: zahl
    label: 'untere Schranke'
    loesung: "1*2"
    anzeige: '2'
    fehler:
      - wert: "1"
        meldung: 'Der kleinste Wert ist $m = 1$, aber er wird noch mit der Intervalllänge $b - a = 2$ multipliziert.'
  - typ: zahl
    label: 'obere Schranke'
    loesung: "3*2"
    anzeige: '6'
    fehler:
      - wert: "3"
        meldung: 'Der größte Wert ist $M = 3$. Die Schranke ist $M\,(b - a) = 3\cdot 2$.'
      - wert: "9*2"
        meldung: 'Unter der Wurzel steht $1 + 8 = 9$. Der Funktionswert ist aber $\sqrt9 = 3$.'
hinweise:
  - Der Integrand ist auf $[0, 2]$ monoton wachsend. Wo liegen der kleinste und der größte Wert?
  - 'Der kleinste Wert ist $\sqrt{1 + 0} = 1$, der größte $\sqrt{1 + 8}$. Multipliziere beide mit der Intervalllänge $2$.'
loesung: |
  **Ansatz:** Ohne Stammfunktion bleibt die Abschätzung zwischen dem niedrigsten und dem höchsten Rechteck.
  ---
  $1 + x^3$ wächst auf $[0, 2]$, die Wurzel ebenfalls. Kleinster Wert $m = \sqrt{1} = 1$ bei $x = 0$, größter Wert $M = \sqrt{9} = 3$ bei $x = 2$.
  ---
  $1\cdot 2 \le \int_0^2 \sqrt{1 + x^3}\dd x \le 3\cdot 2$, also liegt das Integral zwischen $2$ und $6$.
  ---
  **Plausibilität:** Numerisch ist der Wert etwa $3{,}24$. Die Abschätzung ist grob, aber in einer Zeile beweisbar.
```

```aufgabe
id: ib-vergleich
titel: Integrale vergleichen
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  Welches Integral ist größer: $A = \int_0^1 x^2\dd x$ oder $B = \int_0^1 x^3\dd x$?
  Entscheide **ohne** zu rechnen und begründe mit einer Eigenschaft des Integrals.
teile:
  - typ: auswahl
    optionen: ['$A > B$', '$A = B$', '$A < B$']
    richtig: [0]
    fehler:
      - wert: 2
        meldung: 'Für Zahlen zwischen $0$ und $1$ wird eine Potenz mit größerer Hochzahl kleiner, zum Beispiel $0{,}5^3 = 0{,}125 < 0{,}25 = 0{,}5^2$.'
      - wert: 1
        meldung: 'Die Integranden sind nur bei $0$ und $1$ gleich. Dazwischen ist $x^3$ echt kleiner.'
  - typ: text
    label: 'Begründung'
    muster: |
      Für $0 \le x \le 1$ ist $x^3 = x\cdot x^2 \le x^2$, und für $0 < x < 1$ gilt sogar $<$. Nach der Monotonie des
      Integrals ist $\int_0^1 x^3 \le \int_0^1 x^2$. Weil $x^2 - x^3$ stetig, nicht negativ und nicht überall $0$ ist,
      ist die Ungleichung sogar echt. Kontrolle: $A = \frac13 > \frac14 = B$.
hinweise:
  - Vergleiche die Integranden auf $[0, 1]$.
  - 'Was passiert, wenn man eine Zahl mit einem Faktor $x \le 1$ multipliziert?'
loesung: |
  **Ansatz:** Monotonie des Integrals. Wir vergleichen zuerst die Integranden.
  ---
  Auf $[0, 1]$ ist $x^3 = x\cdot x^2 \le x^2$, weil man $x^2$ mit einer Zahl $x \le 1$ multipliziert.
  ---
  Nach der Monotonie ist $B \le A$. Weil $x^2 - x^3 > 0$ auf $(0, 1)$ gilt, ist die Ungleichung echt: $A > B$.
  ---
  **Kontrolle** mit Stammfunktionen: $A = \frac13$ und $B = \frac14$.
```

```aufgabe
id: ib-betrag
titel: Integral und Betrag
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Berechne $\int_{-1}^{2} x\dd x$ und $\int_{-1}^{2} |x|\dd x$ und prüfe die Dreiecksungleichung
  $\left|\int f\right| \le \int |f|$.
teile:
  - typ: zahl
    label: '$\int_{-1}^2 x\dd x$'
    loesung: "(4 - 1)/2"
    anzeige: '1{,}5'
    fehler:
      - wert: "2.5"
        meldung: Das ist das Integral des Betrags. Beim Integral von $x$ zählt das Dreieck links der Null negativ.
  - typ: zahl
    label: '$\int_{-1}^2 |x|\dd x$'
    loesung: "1/2 + 2"
    anzeige: '2{,}5'
    fehler:
      - wert: "1.5"
        meldung: 'Beim Betrag ist $|x| \ge 0$, das linke Dreieck zählt also positiv. Teile das Integral bei $0$.'
hinweise:
  - Für $|x|$ das Integral bei $0$ aufteilen. Beide Teile sind Dreiecke.
  - 'Links von $0$ ist $|x| = -x$. Das Dreieck auf $[-1, 0]$ hat die Fläche $\frac12$, das auf $[0, 2]$ die Fläche $2$.'
loesung: |
  **Ansatz:** Das erste Integral ist eine Bilanz, das zweite eine Fläche. Beide lassen sich mit Dreiecken berechnen.
  ---
  $\int_{-1}^2 x\dd x = \Big[\frac{x^2}{2}\Big]_{-1}^2 = 2 - \frac12 = 1{,}5$. Das Dreieck links mit Fläche $\frac12$ zählt negativ.
  ---
  $\int_{-1}^2 |x|\dd x = \int_{-1}^0 (-x)\dd x + \int_0^2 x\dd x = \frac12 + 2 = 2{,}5$.
  ---
  **Kontrolle:** $|1{,}5| \le 2{,}5$, die Dreiecksungleichung gilt. Gleichheit gibt es hier nicht, weil $x$ auf $[-1, 2]$ das Vorzeichen wechselt.
```

```aufgabe
id: ib-eig-fehler
titel: Ein negatives Integral trotz positivem Integranden?
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  Eine Mitschülerin behauptet: „Weil $\sqrt x \ge 0$ ist, muss $\int_4^1 \sqrt x\dd x \ge 0$ sein.“

  a) Stimmt die Behauptung?

  b) Berechne $\int_4^1 \sqrt x\dd x$.
teile:
  - typ: auswahl
    label: 'a)'
    optionen:
      - 'Nein, die Monotonie gilt nur, wenn die untere Grenze kleiner ist als die obere.'
      - 'Ja, ein Integral über eine positive Funktion ist immer positiv.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Hier läuft das Integral von $4$ nach $1$, also rückwärts. Vertauschte Grenzen ändern das Vorzeichen.'
  - typ: zahl
    label: 'b) $\int_4^1 \sqrt x\dd x$'
    loesung: "-(2/3)*(8 - 1)"
    anzeige: '-\tfrac{14}{3}'
    fehler:
      - wert: "(2/3)*(8 - 1)"
        meldung: 'Das ist $\int_1^4 \sqrt x\dd x$. Bei den Grenzen $4$ und $1$ rechnest du $F(1) - F(4)$.'
hinweise:
  - Achte auf die Reihenfolge der Grenzen. Welche ist die untere?
  - 'Eine Stammfunktion ist $\frac23 x^{3/2}$. Es gilt $4^{3/2} = 8$ und $1^{3/2} = 1$.'
loesung: |
  **Ansatz:** Die Regel „$f \ge 0$, also $\int f \ge 0$“ setzt voraus, dass die untere Grenze kleiner ist als die obere.
  ---
  a) Hier ist die untere Grenze $4$ größer als die obere $1$. Die Behauptung ist falsch.
  ---
  b) $\int_4^1 \sqrt x\dd x = \Big[\frac23 x^{3/2}\Big]_4^1 = \frac23 - \frac{16}{3} = -\frac{14}{3} \approx -4{,}67$. **Kontrolle:** Das ist genau $-\int_1^4 \sqrt x\dd x$.
```

```aufgabe
id: ib-eig-schranken
titel: Das Beste aus wenigen Informationen machen
niveau: 3
lernziel: 5
kompetenz: anwenden
angabe: |
  Eine stetige Funktion $f$ erfüllt $1 \le f(x) \le 3$ für alle $x$ in $[0, 4]$. Außerdem weiß man
  $\int_0^1 f(x)\dd x = 2{,}5$. Gib die bestmögliche untere und obere Schranke für $\int_0^4 f(x)\dd x$ an.
teile:
  - typ: zahl
    label: 'untere Schranke'
    loesung: "2.5 + 1*3"
    fehler:
      - wert: "4"
        meldung: 'Das ist die Abschätzung über ganz $[0, 4]$. Du kennst aber $\int_0^1 f = 2{,}5$ genau und musst nur noch $[1, 4]$ abschätzen.'
      - wert: "2.5 + 1*4"
        meldung: 'Das restliche Intervall $[1, 4]$ hat die Länge $3$, nicht $4$.'
  - typ: zahl
    label: 'obere Schranke'
    loesung: "2.5 + 3*3"
    fehler:
      - wert: "12"
        meldung: 'Das ist $3\cdot 4$, die grobe Schranke für ganz $[0, 4]$. Auf $[0, 1]$ ist der Wert aber genau $2{,}5$ und nicht $3$.'
hinweise:
  - 'Teile das Integral: $\int_0^4 f = \int_0^1 f + \int_1^4 f$.'
  - 'Schätze nur $\int_1^4 f$ mit $m\,(b - a) \le \int \le M\,(b - a)$ ab. Die Länge von $[1, 4]$ ist $3$.'
loesung: |
  **Ansatz:** Intervalladditivität und Abschätzung kombinieren. Den bekannten Teil übernehmen wir genau, nur den unbekannten Teil schätzen wir ab.
  ---
  $\int_0^4 f = \int_0^1 f + \int_1^4 f = 2{,}5 + \int_1^4 f$.
  ---
  Auf $[1, 4]$ gilt $1 \le f \le 3$ bei der Länge $3$. Also $3 \le \int_1^4 f \le 9$.
  ---
  **Ergebnis:** $5{,}5 \le \int_0^4 f(x)\dd x \le 11{,}5$. Das ist enger als die grobe Abschätzung $4 \le \int_0^4 f \le 12$, weil wir das Wissen über $[0, 1]$ genutzt haben.
gefuehrt:
  - text: Zerlege $\int_0^4 f$ mit der Intervalladditivität. Welcher Teil ist bekannt?
    erklaerung: '$\int_0^4 f = \int_0^1 f + \int_1^4 f$, und $\int_0^1 f = 2{,}5$ ist bekannt.'
  - text: Wie lang ist das Intervall $[1, 4]$?
    teil: { typ: zahl, loesung: "3", fehler: [ { wert: "4", meldung: 'Die Länge ist $4 - 1$.' } ] }
    erklaerung: 'Die Länge ist $4 - 1 = 3$.'
  - text: Welche untere Schranke ergibt die Abschätzung für $\int_1^4 f$?
    teil: { typ: zahl, loesung: "3" }
    erklaerung: '$m\cdot 3 = 1\cdot 3 = 3$. Ebenso ist die obere Schranke $3\cdot 3 = 9$.'
  - text: Gib die untere Schranke für $\int_0^4 f$ an.
    teil: { typ: zahl, loesung: "5.5" }
    erklaerung: '$2{,}5 + 3 = 5{,}5$. Die obere Schranke ist $2{,}5 + 9 = 11{,}5$.'
```

## Mittelwertsatz der Integralrechnung

```aufgabe
id: ib-mws-vorwissen
titel: Muss es eine Nullstelle geben?
art: check
niveau: 1
angabe: |
  Die Funktion $f$ ist auf $[1, 3]$ stetig, und es gilt $f(1) = 4$ und $f(3) = -2$. Muss $f$ in $[1, 3]$ eine Nullstelle
  haben? Zum Nachlesen:
  [Kapitel 12, Zwischenwertsatz](/lernen/mathe3/grenzwerte-stetigkeit/zwischenwertsatz-nullstellensatz-und-bisektion).
teile:
  - typ: auswahl
    optionen:
      - 'Ja, denn $0$ liegt zwischen $-2$ und $4$, und $f$ ist stetig.'
      - 'Nein, $f$ könnte die Achse überspringen.'
      - 'Nur wenn $f$ monoton ist.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Überspringen kann nur eine Funktion mit Sprung. Eine stetige Funktion hat keinen Sprung.'
      - wert: 2
        meldung: 'Der Zwischenwertsatz braucht keine Monotonie, nur Stetigkeit.'
loesung: |
  Zwischenwertsatz: Eine stetige Funktion auf $[a, b]$ nimmt jeden Wert zwischen $f(a)$ und $f(b)$ an.
  ---
  $0$ liegt zwischen $4$ und $-2$. Also gibt es eine Stelle in $[1, 3]$ mit $f(x) = 0$.
```

Was ist die durchschnittliche Höhe einer Funktion auf einem Intervall? In
[Kapitel 10, Mittelwert](/lernen/mathe3/integralrechnung/mittelwert-rotationsvolumen-und-arbeit) hast du die Antwort
kennengelernt: den **Mittelwert**
$$\bar f = \frac{1}{b - a}\int_a^b f(x)\dd x.$$
Dabei ist $b - a$ die Länge des Intervalls, und $\bar f$ liest man „f quer“. Geometrisch ist $\bar f$ die Höhe des
Rechtecks über $[a, b]$, das dieselbe Fläche hat wie die Fläche unter dem Graphen.

Diese Lektion stellt eine neue Frage: Wird dieser Durchschnittswert irgendwo **tatsächlich angenommen**? Gibt es also
eine Stelle $\xi$, an der die Funktion genau so hoch ist wie ihr Durchschnitt?

**Ein Bild aus dem Alltag:** Du fährst eine Stunde lang mit wechselnder Geschwindigkeit und legst $60$ km zurück.
Deine Durchschnittsgeschwindigkeit ist $60$ km/h. Hat dein Tacho irgendwann **genau** $60$ km/h angezeigt? Wenn du
nie ruckartig springst, sondern stetig beschleunigst und bremst, dann ja. Genau das sagt der folgende Satz.

:::satz[Mittelwertsatz der Integralrechnung]
Ist $f$ auf $[a, b]$ **stetig**, so gibt es mindestens eine Stelle $\xi$ in $[a, b]$ mit
$$\int_a^b f(x)\dd x = f(\xi)\,(b - a), \qquad\text{also}\qquad f(\xi) = \bar f.$$
:::

Dabei ist $\xi$ die gesuchte Stelle, die **Mittelwertstelle**. Der Satz sagt nur, dass es sie gibt. Wo sie liegt und
ob es mehrere gibt, sagt er nicht.

:::beispiel[Eine lineare Funktion]
Gesucht sind Mittelwert und Mittelwertstelle von $f(x) = 2x + 1$ auf $[0, 4]$.

1. **Integral:** $\int_0^4 (2x + 1)\dd x = \big[x^2 + x\big]_0^4 = 16 + 4 = 20$.
2. **Mittelwert:** $\bar f = \frac{20}{4 - 0} = 5$.
3. **Stelle:** $2\xi + 1 = 5$ ergibt $\xi = 2$.

Bei einer linearen Funktion liegt die Mittelwertstelle immer genau in der Mitte des Intervalls. Bei anderen Funktionen
ist das im Allgemeinen nicht so, wie das nächste Beispiel zeigt.
:::

:::beispiel[Die Wurzelfunktion]
Gesucht sind Mittelwert und Mittelwertstelle von $f(x) = \sqrt x$ auf $[0, 4]$.

1. **Integral:** $\int_0^4 x^{1/2}\dd x = \Big[\frac23 x^{3/2}\Big]_0^4 = \frac23\cdot 8 = \frac{16}{3}$.
2. **Mittelwert:** $\bar f = \frac{16/3}{4} = \frac43 \approx 1{,}33$.
3. **Stelle:** $\sqrt\xi = \frac43$, also $\xi = \frac{16}{9} \approx 1{,}78$.

Die Stelle liegt **links** von der Mitte $2$. Der Grund: Die Wurzel steigt am Anfang steil an und wird dann flach. Sie
erreicht ihren Durchschnitt deshalb früh.
:::

```plot
x: [-0.2, 4.3]
y: [-0.2, 2.3]
achsen: { x: "x", y: "y" }
graphen:
  - { f: "sqrt(x)", label: "y = √x", farbe: 0 }
flaechen:
  - { f: "sqrt(x)", von: 0, bis: 4, farbe: 0 }
strecken:
  - { von: [0, 1.3333], nach: [4, 1.3333], farbe: 1 }
  - { von: [4, 0], nach: [4, 2], gestrichelt: true }
  - { von: [1.7778, 0], nach: [1.7778, 1.3333], gestrichelt: true, farbe: 1 }
punkte:
  - { x: 1.7778, y: 1.3333, label: "ξ = 16/9", farbe: 1 }
beschriftung: Mittelwert von √x auf [0, 4]. Das Rechteck der Höhe 4/3 (orange Linie) hat dieselbe Fläche 16/3 wie das Gebiet unter dem Graphen. Der Mittelwert wird an der Stelle ξ = 16/9 angenommen, links von der Intervallmitte.
```

### Der Beweis

Der Beweis ist kurz und verbindet zwei Sätze, die du schon kennst. Diese Stelle ist für fast alle ungewohnt, weil
zwei Sätze ineinandergreifen. Geh sie Schritt für Schritt durch.

:::beweis
**Schritt 1: kleinster und größter Wert.** $f$ ist auf dem abgeschlossenen Intervall $[a, b]$ stetig. Nach dem Satz
vom Maximum und Minimum aus
[Kapitel 12, Satz vom Maximum und Minimum](/lernen/mathe3/grenzwerte-stetigkeit/satz-vom-maximum-und-minimum)
nimmt $f$ einen kleinsten Wert $m$ und
einen größten Wert $M$ an.

**Schritt 2: Abschätzung.** Nach der Abschätzung aus
[14.6 Eigenschaften des Integrals](/lernen/mathe3/integrierbarkeit/eigenschaften-des-integrals) ist
$m\,(b - a) \le \int_a^b f \le M\,(b - a)$. Wir teilen durch $b - a > 0$ und erhalten $m \le \bar f \le M$.

**Schritt 3: Zwischenwertsatz.** Der Mittelwert $\bar f$ liegt also zwischen zwei Funktionswerten, nämlich $m$ und $M$.
Eine stetige Funktion nimmt jeden Wert zwischen zweien ihrer Werte an. Also gibt es ein $\xi$ mit $f(\xi) = \bar f$.
:::

**Was haben wir gezeigt?** Der Durchschnitt einer stetigen Funktion liegt zwischen ihrem kleinsten und größten Wert.
Weil eine stetige Funktion keine Werte überspringt, trifft sie den Durchschnitt irgendwo genau. Die Stetigkeit wird
dabei **zweimal** gebraucht: für Minimum und Maximum und für den Zwischenwertsatz.

```aufgabe
id: ib-mws-check-voraussetzung
titel: Wo steckt die Stetigkeit im Beweis?
art: check
niveau: 1
angabe: |
  In welchen Schritten des Beweises wird die Stetigkeit von $f$ verwendet? Wähle alle aus.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - 'Schritt 1: Existenz von kleinstem und größtem Wert'
      - 'Schritt 2: Teilen durch $b - a$'
      - 'Schritt 3: Zwischenwertsatz'
    richtig: [0, 2]
    fehler:
      - wert: [2]
        meldung: 'Auch Schritt 1 braucht die Stetigkeit. Eine unstetige Funktion muss keinen größten Wert annehmen.'
      - wert: [0, 1, 2]
        meldung: 'Teilen durch $b - a$ ist reine Arithmetik. Dafür braucht man nur $b > a$.'
loesung: |
  Schritt 1 benutzt den Satz vom Maximum und Minimum, Schritt 3 den Zwischenwertsatz. Beide setzen Stetigkeit voraus.
  ---
  Schritt 2 braucht nur die Abschätzung des Integrals und $b - a > 0$.
```

### Verbindung zum Mittelwertsatz der Differentialrechnung

In [Kapitel 13, Mittelwertsatz](/lernen/mathe3/differenzierbarkeit/satz-von-rolle-und-mittelwertsatz) hast du den
Mittelwertsatz der Differentialrechnung kennengelernt:
Es gibt eine Stelle, an der die Tangente parallel zur Sekante ist. Beide Sätze sagen dasselbe, nur aus zwei Blickwinkeln.
Ist $F$ eine Stammfunktion von $f$, dann ist $\int_a^b f = F(b) - F(a)$. Der Integral-Mittelwertsatz lautet dann
$$F(b) - F(a) = f(\xi)\,(b - a) = F'(\xi)\,(b - a).$$
Das ist genau der Mittelwertsatz der Differentialrechnung für $F$. Beim Autofahren heißt das: Die
Durchschnittsgeschwindigkeit aus der Weg-Zeit-Funktion ist dieselbe wie der Mittelwert der Geschwindigkeitsfunktion.

:::beispiel[Durchschnittsgeschwindigkeit mit zwei Mittelwertstellen]
Ein Auto fährt $6$ Sekunden lang mit der Geschwindigkeit $v(t) = 20 + 6t - t^2$ in m/s.

1. **Weg:** $\int_0^6 (20 + 6t - t^2)\dd t = \Big[20t + 3t^2 - \frac{t^3}{3}\Big]_0^6 = 120 + 108 - 72 = 156$ m.
2. **Durchschnitt:** $\bar v = \frac{156\ \text{m}}{6\ \text{s}} = 26\ \tfrac{\text{m}}{\text{s}}$.
3. **Wann zeigt der Tacho genau $26$ m/s?** $20 + 6t - t^2 = 26$ führt auf $t^2 - 6t + 6 = 0$, also
   $t = 3 \pm \sqrt3$.
4. **Deutung:** Bei $t \approx 1{,}27$ s fährt das Auto genau $26$ m/s, dann schneller bis $29$ m/s bei $t = 3$ s, und bei
   $t \approx 4{,}73$ s wieder genau $26$ m/s.

Der Satz garantiert **mindestens** eine Stelle. Hier gibt es zwei.
:::

:::achtung[Ohne Stetigkeit gilt der Satz nicht]
Eine typische Fehlrechnung: Für die Treppenfunktion $f(x) = 0$ auf $[0, 1)$ und $f(x) = 2$ auf $[1, 2]$ ist
$\int_0^2 f = 2$ und $\bar f = 1$. Wer jetzt „nach dem Mittelwertsatz“ $f(\xi) = 1$ löst, findet nichts. Die Funktion
nimmt nur die Werte $0$ und $2$ an, **nie** den Wert $1$. Der Satz ist nicht falsch, er ist hier nicht anwendbar,
weil $f$ bei $x = 1$ springt. Ohne Stetigkeit fehlt im Beweis der Zwischenwertsatz.
:::

:::achtung[Die Mittelwertstelle ist nicht die Intervallmitte]
Eine zweite typische Fehlrechnung für $\sqrt x$ auf $[0, 4]$: „Die Mittelwertstelle ist die Mitte, also $\xi = 2$ und
$\bar f = \sqrt2 \approx 1{,}414$.“ Richtig ist $\bar f = \frac43 \approx 1{,}333$ und $\xi = \frac{16}{9} \approx 1{,}78$. Sicher
in der Mitte liegt die Mittelwertstelle nur bei linearen Funktionen. Ebenso falsch ist der Mittelwert der Randwerte,
$\frac{0 + 2}{2} = 1$.
:::

:::merke[Rezept: Mittelwert und Mittelwertstelle]
1. Voraussetzung prüfen: Ist $f$ auf $[a, b]$ stetig?
2. Integral $\int_a^b f(x)\dd x$ berechnen.
3. Durch die Intervalllänge teilen: $\bar f = \frac{1}{b - a}\int_a^b f(x)\dd x$.
4. Gleichung $f(\xi) = \bar f$ lösen und nur die Lösungen in $[a, b]$ behalten.
5. Plausibilität: $\bar f$ liegt zwischen kleinstem und größtem Funktionswert.
:::

```reflexion
frage: Warum liegt die Mittelwertstelle bei $x^2$ auf $[0, b]$ rechts von der Intervallmitte, bei $\sqrt x$ auf $[0, b]$ aber links davon?
antwort: |
  Bei $x^2$ sind die Werte am Anfang klein und steigen erst spät stark an. Der Durchschnitt wird von den großen Werten
  am Ende nach oben gezogen, aber die Funktion erreicht ihn erst spät, also rechts von der Mitte. Bei $\sqrt x$ ist es
  umgekehrt: Die Funktion steigt am Anfang steil und wird dann flach. Sie erreicht ihren Durchschnitt schon früh, also
  links von der Mitte. Bei einer Geraden ist der Anstieg gleichmäßig, und die Stelle liegt immer genau in der Mitte.
```

```aufgabe
id: ib-mittelwert
titel: Mittelwert und Mittelwertstelle
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Berechne den Mittelwert von $f(x) = x^2$ auf $[0, 6]$ und die Stelle $\xi$ in $[0, 6]$ mit $f(\xi) = \bar f$
  (auf drei Nachkommastellen).
teile:
  - typ: zahl
    label: '$\bar f$'
    loesung: "(216/3)/6"
    anzeige: '12'
    fehler:
      - wert: "18"
        meldung: 'Das ist der Mittelwert der Randwerte $\frac{0 + 36}{2}$. Der Mittelwert einer Funktion ist das Integral geteilt durch die Intervalllänge.'
      - wert: "72"
        meldung: Das ist das Integral. Es fehlt noch das Teilen durch die Intervalllänge $6$.
  - typ: zahl
    label: '$\xi$'
    loesung: "sqrt(12)"
    anzeige: '\sqrt{12} \approx 3{,}464'
    toleranz: 0.001
    fehler:
      - wert: "3"
        meldung: 'Die Intervallmitte ist nur bei linearen Funktionen sicher die Mittelwertstelle. Hier stimmt sie nicht, denn $3^2 = 9 \ne 12$. Löse $\xi^2 = 12$.'
hinweise:
  - '$\bar f = \frac{1}{6 - 0}\int_0^6 x^2\dd x$. Danach $\xi^2 = \bar f$ lösen.'
loesung: |
  **Ansatz:** $f$ ist stetig. Der Mittelwert ist das Integral geteilt durch die Intervalllänge.
  ---
  $\int_0^6 x^2\dd x = \frac{216}{3} = 72$, also $\bar f = \frac{72}{6} = 12$.
  ---
  $\xi^2 = 12$ ergibt $\xi = \sqrt{12} \approx 3{,}464$. Die negative Lösung liegt nicht im Intervall. **Plausibilität:** $\xi$ liegt rechts von der Mitte $3$, weil $x^2$ erst spät stark wächst.
```

```aufgabe
id: ib-mws-linear
titel: Mittelwertstelle einer Geraden
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Berechne den Mittelwert von $f(x) = 5 - 2x$ auf $[0, 2]$ und die Mittelwertstelle $\xi$.
teile:
  - typ: zahl
    label: '$\bar f$'
    loesung: "(10 - 4)/2"
    fehler:
      - wert: "6"
        meldung: Das ist das Integral. Teile noch durch die Intervalllänge $2$.
  - typ: zahl
    label: '$\xi$'
    loesung: "1"
    fehler:
      - wert: "3"
        meldung: '$3$ ist der Mittelwert, also ein Funktionswert. Gesucht ist die Stelle $\xi$ mit $f(\xi) = 3$.'
hinweise:
  - '$\int_0^2 (5 - 2x)\dd x = \big[5x - x^2\big]_0^2$. Danach $5 - 2\xi = \bar f$ lösen.'
loesung: |
  **Ansatz:** Integral berechnen, durch die Intervalllänge teilen, dann $f(\xi) = \bar f$ lösen.
  ---
  $\int_0^2 (5 - 2x)\dd x = 10 - 4 = 6$, also $\bar f = \frac62 = 3$.
  ---
  $5 - 2\xi = 3$ ergibt $\xi = 1$. **Kontrolle:** Bei einer Geraden liegt die Mittelwertstelle in der Mitte des Intervalls, und $1$ ist die Mitte von $[0, 2]$.
```

```aufgabe
id: ib-mws-x3
titel: Mittelwertstelle für x³
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Bestimme für $f(x) = x^3$ auf $[0, 2]$ den Mittelwert und die Stelle $\xi$ aus dem Mittelwertsatz
  (auf drei Nachkommastellen).
teile:
  - typ: zahl
    label: '$\bar f$'
    loesung: "(16/4)/2"
    anzeige: '2'
    fehler:
      - wert: "4"
        meldung: Das ist das Integral. Teile noch durch die Intervalllänge $2$.
      - wert: "1"
        meldung: 'Das ist $f(1)$, der Wert in der Intervallmitte. Der Mittelwert einer Funktion ist das Integral geteilt durch die Länge.'
  - typ: zahl
    label: '$\xi$'
    loesung: "nthRoot(2, 3)"
    anzeige: '\sqrt[3]{2} \approx 1{,}260'
    toleranz: 0.001
    fehler:
      - wert: "sqrt(2)"
        meldung: 'Die Gleichung lautet $\xi^3 = 2$. Du brauchst die **dritte** Wurzel.'
hinweise:
  - '$\int_0^2 x^3\dd x = \Big[\frac{x^4}{4}\Big]_0^2$.'
  - 'Löse $\xi^3 = \bar f$ mit der dritten Wurzel.'
loesung: |
  **Ansatz:** $x^3$ ist stetig, der Mittelwertsatz gilt. Erst den Mittelwert, dann die Stelle bestimmen.
  ---
  $\int_0^2 x^3\dd x = \frac{16}{4} = 4$, also $\bar f = \frac42 = 2$.
  ---
  $\xi^3 = 2$ ergibt $\xi = \sqrt[3]{2} \approx 1{,}260$. Die Stelle liegt in $[0, 2]$, rechts von der Mitte.
gefuehrt:
  - text: Berechne das Integral $\int_0^2 x^3\dd x$.
    teil: { typ: zahl, loesung: "4", fehler: [ { wert: "16", meldung: 'Das ist $2^4$. Die Stammfunktion ist $\frac{x^4}{4}$, also noch durch $4$ teilen.' } ] }
    erklaerung: '$\big[\frac{x^4}{4}\big]_0^2 = \frac{16}{4} = 4$.'
  - text: Teile durch die Intervalllänge. Wie groß ist $\bar f$?
    teil: { typ: zahl, loesung: "2" }
    erklaerung: '$\bar f = \frac{4}{2} = 2$.'
  - text: Löse $\xi^3 = 2$ auf drei Nachkommastellen.
    teil: { typ: zahl, loesung: "nthRoot(2, 3)", toleranz: 0.001 }
    erklaerung: '$\xi = \sqrt[3]{2} \approx 1{,}260$.'
```

```aufgabe
id: ib-mws-temperatur
titel: Mittlere Tagestemperatur
niveau: 2
lernziel: 6
kompetenz: modellieren
angabe: |
  Die Temperatur in den ersten zwölf Stunden nach Sonnenaufgang wird modelliert durch
  $T(t) = 10 + 6\sin\!\big(\tfrac{\pi t}{12}\big)$. Dabei ist $t$ die Zeit in Stunden mit $0 \le t \le 12$ und $T$ die
  Temperatur in °C. Berechne die mittlere Temperatur in diesem Zeitraum auf zwei Nachkommastellen.
teile:
  - typ: zahl
    label: '$\bar T$'
    einheit: "°C"
    loesung: "10 + 12/pi"
    anzeige: '10 + \tfrac{12}{\pi} \approx 13{,}82'
    toleranz: 0.01
    fehler:
      - wert: "13"
        meldung: 'Das ist der Mittelwert aus Tiefst- und Höchstwert $\frac{10 + 16}{2}$. Die Sinuskurve verweilt aber lange in der Nähe des Höchstwerts.'
      - wert: "120 + 144/pi"
        meldung: 'Das ist das Integral in °C mal h. Für den Mittelwert teilst du noch durch $12$ Stunden.'
hinweise:
  - 'Eine Stammfunktion von $\sin\big(\frac{\pi t}{12}\big)$ ist $-\frac{12}{\pi}\cos\big(\frac{\pi t}{12}\big)$. Das ist die lineare Substitution aus [Kapitel 10, Substitution](/lernen/mathe3/integralrechnung/substitution-die-kettenregel-rueckwaerts).'
  - 'Setze die Grenzen $0$ und $12$ ein. Es ist $\cos\pi = -1$ und $\cos 0 = 1$.'
loesung: |
  **Ansatz:** Mittlere Temperatur ist der Mittelwert $\bar T = \frac{1}{12}\int_0^{12} T(t)\dd t$.
  ---
  $\int_0^{12} T(t)\dd t = \Big[10t - \frac{72}{\pi}\cos\big(\tfrac{\pi t}{12}\big)\Big]_0^{12} = 120 - \frac{72}{\pi}(\cos\pi - \cos 0) = 120 + \frac{144}{\pi}$.
  ---
  $\bar T = \frac{1}{12}\Big(120 + \frac{144}{\pi}\Big) = 10 + \frac{12}{\pi} \approx 13{,}82$ °C.
  ---
  **Plausibilität:** Die Temperatur schwankt zwischen $10$ und $16$ °C. Der Mittelwert liegt dazwischen und über $13$, weil die Sinuskurve lange nahe am Höchstwert bleibt.
```

```aufgabe
id: ib-mws-umkehr
titel: Einen Faktor aus dem Mittelwert bestimmen
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Für $f(x) = c\,\sqrt x$ mit einer Zahl $c > 0$ ist der Mittelwert auf $[0, 9]$ gleich $8$.

  a) Bestimme $c$.

  b) Bestimme die Mittelwertstelle $\xi$.
teile:
  - typ: zahl
    label: 'a) $c$'
    loesung: "4"
    fehler:
      - wert: "8/3"
        meldung: 'Du hast vermutlich $c\cdot\sqrt9 = 8$ gesetzt. Das ist der Wert am rechten Rand, nicht der Mittelwert.'
      - wert: "8/18"
        meldung: 'Das Integral ist $18c$, aber der Mittelwert ist das Integral geteilt durch $9$, also $2c$.'
  - typ: zahl
    label: 'b) $\xi$'
    loesung: "4"
    fehler:
      - wert: "2"
        meldung: 'Aus $4\sqrt\xi = 8$ folgt $\sqrt\xi = 2$. Gesucht ist aber $\xi$ selbst, also quadrieren.'
hinweise:
  - '$\int_0^9 \sqrt x\dd x = \Big[\frac23 x^{3/2}\Big]_0^9 = 18$. Der Mittelwert von $c\sqrt x$ ist also $\frac{18c}{9}$.'
  - 'Setze den Mittelwert gleich $8$. Für b) löse $c\sqrt\xi = 8$.'
loesung: |
  **Ansatz:** Mittelwert als Term in $c$ aufstellen und gleich $8$ setzen. Das ist eine Umkehraufgabe.
  ---
  $\int_0^9 c\sqrt x\dd x = c\cdot\frac23\cdot 9^{3/2} = c\cdot\frac23\cdot 27 = 18c$. Der Mittelwert ist $\frac{18c}{9} = 2c$.
  ---
  a) $2c = 8$ ergibt $c = 4$.
  ---
  b) $4\sqrt\xi = 8$ ergibt $\sqrt\xi = 2$, also $\xi = 4$. **Kontrolle:** $f(4) = 4\cdot 2 = 8$, und $4$ liegt in $[0, 9]$.
```

```aufgabe
id: ib-mws-sinus
titel: Zwei Mittelwertstellen beim Sinusbogen
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Bestimme den Mittelwert von $f(x) = \sin x$ auf $[0, \pi]$ und **beide** Mittelwertstellen (Bogenmaß, auf drei
  Nachkommastellen). Gib zuerst die kleinere an.
teile:
  - typ: zahl
    label: '$\bar f$'
    loesung: "2/pi"
    anzeige: '\tfrac2\pi \approx 0{,}637'
    toleranz: 0.001
    fehler:
      - wert: "2"
        meldung: Das ist das Integral. Teile noch durch die Intervalllänge $\pi$.
      - wert: "0.5"
        meldung: 'Das ist der Mittelwert aus größtem und kleinstem Wert, $\frac{1 + 0}{2}$. Der Mittelwert einer Funktion ist das Integral geteilt durch die Länge.'
  - typ: zahl
    label: 'kleinere Stelle $\xi_1$'
    loesung: "asin(2/pi)"
    toleranz: 0.001
    fehler:
      - wert: "39.54"
        meldung: Der Taschenrechner steht auf Grad. Gefragt ist das Bogenmaß.
  - typ: zahl
    label: 'größere Stelle $\xi_2$'
    loesung: "pi - asin(2/pi)"
    toleranz: 0.001
    fehler:
      - wert: "asin(2/pi) + pi/2"
        meldung: 'Die zweite Lösung von $\sin x = c$ in $[0, \pi]$ ist $\pi - \xi_1$, denn der Sinusbogen ist symmetrisch zu $\frac\pi2$.'
hinweise:
  - '$\int_0^\pi \sin x\dd x = \big[-\cos x\big]_0^\pi = 2$.'
  - 'Löse $\sin\xi = \frac2\pi$. Wegen $\sin(\pi - x) = \sin x$ ist mit $\xi_1$ auch $\pi - \xi_1$ eine Lösung.'
loesung: |
  **Ansatz:** $\sin x$ ist stetig. Mittelwert berechnen, dann $\sin\xi = \bar f$ im Intervall $[0, \pi]$ lösen.
  ---
  $\int_0^\pi \sin x\dd x = (-\cos\pi) - (-\cos 0) = 1 + 1 = 2$. Also $\bar f = \frac{2}{\pi} \approx 0{,}637$.
  ---
  $\sin\xi = \frac2\pi$ ergibt $\xi_1 = \arcsin\frac2\pi \approx 0{,}690$. Wegen der Symmetrie des Bogens ist auch $\xi_2 = \pi - \xi_1 \approx 2{,}451$ eine Lösung.
  ---
  **Deutung:** Der Bogen erreicht seinen Durchschnitt einmal beim Aufstieg und einmal beim Abstieg. Der Satz garantiert mindestens eine Stelle, hier sind es zwei.
```

```aufgabe
id: ib-mws-unstetig
titel: Wenn der Mittelwertsatz versagt
niveau: 3
lernziel: 6
kompetenz: begruenden
angabe: |
  Es sei $f(x) = 1$ für $0 \le x < 2$ und $f(x) = 4$ für $2 \le x \le 3$.
  Berechne den Mittelwert $\bar f$ auf $[0, 3]$. Gibt es ein $\xi$ mit $f(\xi) = \bar f$? Welche
  Voraussetzung des Mittelwertsatzes ist verletzt?
teile:
  - typ: zahl
    label: '$\bar f$'
    loesung: "(1*2 + 4*1)/3"
    anzeige: '2'
    fehler:
      - wert: "2.5"
        meldung: 'Das ist der Mittelwert der beiden Höhen $1$ und $4$. Die Höhe $1$ gilt aber doppelt so lang wie die Höhe $4$.'
  - typ: text
    label: 'Gibt es $\xi$? Begründung'
    muster: |
      Nein. $f$ nimmt nur die Werte $1$ und $4$ an, den Mittelwert $2$ also nie. Der Mittelwertsatz verlangt,
      dass $f$ auf $[0, 3]$ stetig ist. Hier hat $f$ bei $x = 2$ eine Sprungstelle, deshalb kann der
      Zwischenwertsatz im Beweis nicht angewendet werden. Integrierbar ist $f$ trotzdem, denn es ist eine Treppenfunktion.
hinweise:
  - Das Integral einer Treppenfunktion ist die Summe der Rechteckflächen.
  - 'Welche Werte nimmt $f$ überhaupt an? Ist der Mittelwert einer dieser Werte?'
loesung: |
  **Ansatz:** $f$ ist eine Treppenfunktion und damit integrierbar. Der Mittelwert ist also definiert.
  ---
  $\int_0^3 f = 1\cdot 2 + 4\cdot 1 = 6$, also $\bar f = \frac63 = 2$.
  ---
  $f$ nimmt nur die Werte $1$ und $4$ an. Ein $\xi$ mit $f(\xi) = 2$ gibt es nicht.
  ---
  **Begründung:** Verletzt ist die Stetigkeit, denn $f$ springt bei $x = 2$. Ohne sie fehlt im Beweis der Zwischenwertsatz. Ein Widerspruch zum Satz ist das nicht, er ist hier nur nicht anwendbar.
```

## Hauptsatz der Differential- und Integralrechnung

```aufgabe
id: ib-hs-vorwissen
titel: Ableitung null auf einem Intervall
art: check
niveau: 1
angabe: |
  Für eine differenzierbare Funktion $D$ gilt $D'(x) = 0$ für alle $x$ im Intervall $[0, 5]$, und $D(0) = 7$. Was
  folgt daraus? Zum Nachlesen:
  [Kapitel 13, Folgerungen aus dem Mittelwertsatz](/lernen/mathe3/differenzierbarkeit/folgerungen-aus-dem-mittelwertsatz-konstanz-monotonie-ungleichungen).
teile:
  - typ: auswahl
    optionen:
      - '$D(x) = 7$ für alle $x$ in $[0, 5]$.'
      - '$D(x) = 0$ für alle $x$ in $[0, 5]$.'
      - '$D$ hat bei $x = 0$ ein Extremum, sonst weiß man nichts.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Die **Ableitung** ist null, nicht die Funktion. Eine Funktion mit Ableitung null ist konstant, und $D(0) = 7$ legt die Konstante fest.'
      - wert: 2
        meldung: 'Die Ableitung ist an **jeder** Stelle null, nicht nur an einer. Das ist eine viel stärkere Information.'
loesung: |
  Nach dem Mittelwertsatz der Differentialrechnung ist $D(x) - D(0) = D'(\xi)\,(x - 0) = 0$ für jedes $x$ im Intervall.
  ---
  Also ist $D$ konstant, und wegen $D(0) = 7$ gilt $D(x) = 7$. Diesen Schluss brauchst du im Beweis des Hauptsatzes.
```

Bisher stehen zwei ganz verschiedene Begriffe nebeneinander:

- die **Ableitung**, ein Grenzwert von Differenzenquotienten. Sie misst die momentane Änderungsrate.
- das **Integral**, ein Grenzwert von Riemann-Summen. Es misst eine Fläche oder eine Gesamtwirkung.

Der Hauptsatz sagt, dass das eine die Umkehrung des andern ist. Er ist der Grund, warum man Integrale mit
Stammfunktionen ausrechnen darf, statt mühsam Summenformeln zu verwenden wie in
[14.4 Exakte Integrale](/lernen/mathe3/integrierbarkeit/exakte-integrale-mit-summenformeln). Newton und Leibniz haben
ihn um 1670 unabhängig voneinander entdeckt. Die exakte Fassung stammt aus dem 19. Jahrhundert. In
[Kapitel 10](/lernen/mathe3/integralrechnung/der-hauptsatz-der-differential-und-integralrechnung) hast du ihn als
Rechenregel benutzt. Hier beweisen wir ihn.

### Die Integralfunktion

Halte die untere Grenze fest und lass die obere Grenze wandern. Dann hängt das Integral von der oberen Grenze ab.
So entsteht eine neue Funktion.

:::definition[Integralfunktion]
Es sei $f$ auf $[a, b]$ integrierbar. Die Funktion
$$F(x) = \int_a^x f(t)\dd t \qquad\text{für } x \text{ in } [a, b]$$
heißt **Integralfunktion** von $f$ zur unteren Grenze $a$.
:::

Die Integrationsvariable heißt hier $t$, weil der Buchstabe $x$ schon für die obere Grenze vergeben ist. $F(x)$ ist die
Flächenbilanz unter $f$ von $a$ bis $x$. Lässt man $x$ wandern, sammelt $F$ Fläche auf. Wo $f$ positiv ist, wächst $F$.
Wo $f$ negativ ist, fällt $F$. Und es ist immer $F(a) = 0$, weil von $a$ bis $a$ keine Fläche liegt.

:::beispiel[Eine Integralfunktion ausrechnen und deuten]
Es sei $F(x) = \int_0^x (2 - t)\dd t$.

1. **Ausrechnen:** Eine Stammfunktion von $2 - t$ ist $2t - \frac{t^2}{2}$. Also $F(x) = 2x - \frac{x^2}{2}$.
2. **Startwert:** $F(0) = 0$, wie bei jeder Integralfunktion an der unteren Grenze.
3. **Verlauf:** Für $t < 2$ ist der Integrand positiv, $F$ wächst. Für $t > 2$ ist er negativ, $F$ fällt.
4. **Hochpunkt:** bei $x = 2$ mit $F(2) = 4 - 2 = 2$. Das ist die Dreiecksfläche zwischen $f$ und der Achse auf $[0, 2]$.
5. **Nullstelle:** $F(4) = 8 - 8 = 0$. Auf $[2, 4]$ liegt ein gleich großes Dreieck unter der Achse und hebt das erste auf.

**Nichtbeispiel:** $G(x) = 2x - \frac{x^2}{2} + 1$ ist zwar eine Stammfunktion von $2 - x$, aber **keine**
Integralfunktion zur unteren Grenze $0$. Es ist $G(0) = 1$ und nicht $0$.
:::

```plot
x: [-0.3, 4.6]
y: [-2.8, 2.6]
achsen: { x: "x", y: "y" }
graphen:
  - { f: "2 - x", label: "f(t) = 2 − t", farbe: 0 }
  - { f: "2*x - x^2/2", label: "F(x) = 2x − x²/2", farbe: 1 }
flaechen:
  - { f: "2 - x", von: 0, bis: 4, farbe: 0 }
punkte:
  - { x: 2, y: 2, label: "Hochpunkt von F", farbe: 1 }
  - { x: 4, y: 0, label: "F(4) = 0", farbe: 1 }
beschriftung: Die Integralfunktion F(x) = ∫₀ˣ (2 − t) dt. Solange f positiv ist (bis x = 2), wächst F. Danach fällt F. Bei x = 4 heben sich positive und negative Fläche auf, F(4) = 0.
```

### Den Graphen von F aus dem Graphen von f ablesen

Oft kennst du $f$ nur als Graph, ohne Formel. Trotzdem kannst du viel über die Integralfunktion $F$ sagen. Die
Regeln folgen alle aus einem Gedanken: $F$ sammelt die Fläche unter $f$ auf, und nach dem Hauptsatz ist $F' = f$.
Den Hauptsatz und seinen Beweis findest du im Abschnitt „Der Satz“ weiter hinten in dieser Lektion.

| Eigenschaft von $f$ | Folge für $F$ |
|---|---|
| $f > 0$ auf einem Stück. | $F$ wächst dort. |
| $f < 0$ auf einem Stück. | $F$ fällt dort. |
| $f$ wechselt bei $x_0$ von plus nach minus. | $F$ hat bei $x_0$ einen Hochpunkt. |
| $f$ wechselt bei $x_0$ von minus nach plus. | $F$ hat bei $x_0$ einen Tiefpunkt. |
| $f$ hat bei $x_0$ einen Hoch- oder Tiefpunkt. | $F$ hat bei $x_0$ einen Wendepunkt. |
| Fläche unter $f$ von $a$ bis $x$. | Wert $F(x)$. |

:::beispiel[Werte von F aus einem Graphen]
Der Graph von $f$ besteht aus Strecken: waagrecht von $(0 \mid 2)$ nach $(1 \mid 2)$, dann gerade nach $(3 \mid -2)$ und
waagrecht weiter bis $(4 \mid -2)$. Gesucht sind Werte und Hochpunkt von $F(x) = \int_0^x f(t)\dd t$.

1. **$F(1)$:** Rechteck mit Breite $1$ und Höhe $2$, also $F(1) = 2$.
2. **Nullstelle von $f$:** Die schräge Strecke fällt von $2$ auf $-2$ und schneidet die Achse in der Mitte, bei $t = 2$.
3. **$F(2)$:** Dazu kommt ein Dreieck mit Grundlinie $1$ und Höhe $2$ über der Achse: $F(2) = 2 + 1 = 3$.
4. **$F(3)$:** Auf $[2, 3]$ liegt ein gleich großes Dreieck unter der Achse: $F(3) = 3 - 1 = 2$.
5. **$F(4)$:** Auf $[3, 4]$ liegt ein Rechteck mit Fläche $2$ unter der Achse: $F(4) = 2 - 2 = 0$.
6. **Hochpunkt:** $f$ wechselt bei $t = 2$ von plus nach minus. Dort hat $F$ den Hochpunkt $(2 \mid 3)$.
:::

```plot
x: [-0.3, 4.4]
y: [-2.5, 3.5]
achsen: { x: "x", y: "y" }
strecken:
  - { von: [0, 2], nach: [1, 2], farbe: 0 }
  - { von: [1, 2], nach: [3, -2], farbe: 0 }
  - { von: [3, -2], nach: [4, -2], farbe: 0 }
punkte:
  - { x: 0, y: 0, farbe: 1 }
  - { x: 1, y: 2, label: "F(1) = 2", farbe: 1 }
  - { x: 2, y: 3, label: "F(2) = 3", farbe: 1 }
  - { x: 3, y: 2, label: "F(3) = 2", farbe: 1 }
  - { x: 4, y: 0, label: "F(4) = 0", farbe: 1 }
beschriftung: Blau der Graph von f aus Strecken, orange einige Werte der Integralfunktion F. F wächst, solange f positiv ist, und hat seinen Hochpunkt bei x = 2, wo f das Vorzeichen von plus nach minus wechselt.
```

:::achtung[Hochpunkt von f mit Hochpunkt von F verwechselt]
Eine typische Fehlüberlegung zum Beispiel: „$f$ ist auf $[0, 1]$ am höchsten. Also hat $F$ dort seinen Hochpunkt.“
Falsch: Solange $f$ positiv ist, kommt Fläche dazu, und $F$ wächst weiter. Auf $[1, 2]$ ist $f$ kleiner, aber immer noch
positiv. $F$ steigt dort von $2$ auf $3$. Der Hochpunkt von $F$ liegt dort, wo $f$ **das Vorzeichen** von plus nach minus
wechselt, also bei $t = 2$ und nicht bei $t = 1$.
:::

### Der Satz

:::satz[Hauptsatz der Differential- und Integralrechnung]
Es sei $f$ auf $[a, b]$ **stetig**.

**Teil 1.** Die Integralfunktion $F(x) = \int_a^x f(t)\dd t$ ist auf $[a, b]$ differenzierbar, und es gilt
$$F'(x) = f(x).$$
Jede Integralfunktion einer stetigen Funktion ist also eine Stammfunktion.

**Teil 2.** Ist $G$ irgendeine Stammfunktion von $f$, also $G' = f$, so gilt
$$\int_a^b f(x)\dd x = G(b) - G(a) = \big[G(x)\big]_a^b.$$
:::

Jetzt kommt der Beweis von Teil 1. Das ist die wichtigste Beweisidee dieses Kapitels, und sie wird in der mündlichen
Prüfung oft verlangt. Lies sie langsam und mehr als einmal.

**Worum geht es in einem Satz?** Der Differenzenquotient der Flächenfunktion ist ein Mittelwert von $f$ auf einem
schmalen Streifen, und dieser Mittelwert geht gegen $f(x)$, wenn der Streifen schmal wird.

**Ein Bild:** Rückt die obere Grenze von $x$ ein kleines Stück $h$ nach rechts, kommt ein schmaler Streifen dazu. Er ist
$h$ breit und ungefähr $f(x)$ hoch. Seine Fläche ist also ungefähr $f(x)\cdot h$. Teilt man durch die Breite $h$, bleibt
ungefähr die Höhe $f(x)$ übrig.

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
  - { x: 2.9, y: 0, label: "x + h" }
beschriftung: Die blaue Fläche ist F(x). Rückt die obere Grenze um h weiter, kommt der orange Streifen dazu. Seine Fläche ist ungefähr f(x)·h, deshalb ist die Ableitung der Integralfunktion gleich f(x).
```

:::beweis[Beweis von Teil 1 in vier Schritten]
**Schritt 1: Differenzenquotient aufschreiben.** Wir untersuchen $\frac{F(x + h) - F(x)}{h}$ für ein kleines $h \ne 0$.
Mit der Intervalladditivität aus [14.6 Eigenschaften des Integrals](/lernen/mathe3/integrierbarkeit/eigenschaften-des-integrals)
ist $\int_a^{x+h} f - \int_a^x f = \int_x^{x+h} f$. Also
$$\frac{F(x + h) - F(x)}{h} = \frac1h\int_x^{x+h} f(t)\dd t.$$

**Schritt 2: als Mittelwert erkennen.** Rechts steht das Integral über ein Intervall der Länge $h$, geteilt durch $h$.
Das ist genau der Mittelwert von $f$ auf dem Streifen zwischen $x$ und $x + h$.

**Schritt 3: Mittelwertsatz anwenden.** $f$ ist stetig. Nach dem Mittelwertsatz der Integralrechnung aus
[14.7 Mittelwertsatz](/lernen/mathe3/integrierbarkeit/mittelwertsatz-der-integralrechnung) wird dieser Mittelwert an
einer Stelle $\xi_h$ zwischen $x$ und $x + h$ angenommen:
$$\frac{F(x + h) - F(x)}{h} = f(\xi_h).$$

**Schritt 4: Grenzübergang.** Lässt man $h$ gegen $0$ gehen, wird $\xi_h$ zwischen $x$ und $x + h$ eingeklemmt. Also
geht $\xi_h$ gegen $x$. Weil $f$ stetig ist, folgt $f(\xi_h) \to f(x)$. Der Differenzenquotient hat also den Grenzwert
$f(x)$. Das heißt $F'(x) = f(x)$.
:::

**Was haben wir gezeigt?** Die Fläche wächst an der Stelle $x$ genau so schnell, wie der Graph dort hoch ist.
Ableiten macht das Aufsummieren wieder rückgängig.

**Ein typisches Missverständnis:** Viele sagen „Der Hauptsatz besagt, dass man Integrale mit Stammfunktionen
ausrechnet.“ Das ist nur Teil 2, die Rechenregel. Der Kern ist Teil 1: Die Flächenfunktion **ist** eine Stammfunktion.
Daraus folgt sogar, dass jede stetige Funktion eine Stammfunktion hat, auch wenn man sie nicht mit bekannten Funktionen
hinschreiben kann. Ein Beispiel ist $\int_0^x e^{-t^2}\dd t$, die Grundlage der Normalverteilung aus
[Kapitel 16, Normalverteilung](/lernen/mathe3/wahrscheinlichkeit/normalverteilung-und-standardisieren).

```aufgabe
id: ib-hs-check-mittelwert
titel: Welcher Satz steckt in Schritt 3?
art: check
niveau: 1
angabe: |
  Im Beweis von Teil 1 wird $\frac1h\int_x^{x+h} f(t)\dd t$ durch $f(\xi_h)$ ersetzt. Welcher Satz erlaubt das?
teile:
  - typ: auswahl
    optionen:
      - 'der Mittelwertsatz der Integralrechnung'
      - 'der Mittelwertsatz der Differentialrechnung'
      - 'die Intervalladditivität'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Der Mittelwertsatz der Differentialrechnung würde eine Stammfunktion voraussetzen. Die wollen wir aber erst beweisen.'
      - wert: 2
        meldung: 'Die Intervalladditivität wurde in Schritt 1 benutzt, um $F(x + h) - F(x)$ als ein Integral zu schreiben.'
loesung: |
  $\frac1h\int_x^{x+h} f$ ist der Mittelwert von $f$ auf dem Streifen. Dass er an einer Stelle $\xi_h$ angenommen wird, sagt der Mittelwertsatz der Integralrechnung.
  ---
  Er braucht die Stetigkeit von $f$. Das ist einer der Gründe, warum der Hauptsatz Stetigkeit voraussetzt.
```

:::beweis[Beweis von Teil 2]
**Schritt 1:** Nach Teil 1 ist $F$ eine Stammfunktion von $f$. $G$ ist nach Voraussetzung auch eine.

**Schritt 2:** Die Differenz $D = G - F$ hat die Ableitung $f - f = 0$ auf dem ganzen Intervall. Eine Funktion mit
Ableitung $0$ auf einem Intervall ist konstant. Das ist die Folgerung aus dem Mittelwertsatz der Differentialrechnung
aus [Kapitel 13, Folgerungen aus dem Mittelwertsatz](/lernen/mathe3/differenzierbarkeit/folgerungen-aus-dem-mittelwertsatz-konstanz-monotonie-ungleichungen). Also ist $G(x) = F(x) + C$ mit einer Konstanten $C$.

**Schritt 3:** Damit ist
$$G(b) - G(a) = \big(F(b) + C\big) - \big(F(a) + C\big) = F(b) - F(a) = \int_a^b f(t)\dd t - 0.$$
Dabei ist $F(a) = 0$, weil von $a$ bis $a$ keine Fläche liegt. Die Konstante $C$ hebt sich heraus.
:::

:::pruefung[So erklärst du den Hauptsatz in zwei Minuten]
„Formulieren Sie den Hauptsatz und skizzieren Sie den Beweis“ ist eine Standardfrage der mündlichen Prüfung. Die
Prüferin achtet auf drei Dinge. Erstens nennst du **die Voraussetzung**: „Es sei $f$ stetig auf $[a, b]$.“ Zweitens
nennst du **beide Teile**: Die Integralfunktion ist differenzierbar mit $F' = f$, und jede Stammfunktion liefert
$\int_a^b f = G(b) - G(a)$. Drittens erzählst du die **Beweisidee in drei Sätzen**: „Der Differenzenquotient von $F$ ist der
Mittelwert von $f$ auf $[x, x + h]$. Nach dem Mittelwertsatz ist das $f(\xi_h)$. Für $h$ gegen $0$ geht $\xi_h$ gegen $x$, und
wegen der Stetigkeit geht $f(\xi_h)$ gegen $f(x)$.“

Wer die Stetigkeit nicht erwähnt, wird fast sicher gefragt: „Wo haben Sie die Stetigkeit gebraucht?“
:::

### Integrale mit variabler Grenze ableiten

Aus Teil 1 und der Kettenregel aus
[Kapitel 9, Kettenregel](/lernen/mathe3/differentialrechnung/kettenregel-hoehere-ableitungen-und-die-wahl-der-richtigen-regel)
ergeben sich zwei Regeln. Steht
eine Funktion $u(x)$ als obere Grenze, gilt
$$\frac{\dd}{\dd x}\int_a^{u(x)} f(t)\dd t = f\big(u(x)\big)\cdot u'(x).$$
Steht $x$ als **untere** Grenze, vertauscht man die Grenzen und erhält ein Minus:
$\frac{\dd}{\dd x}\int_x^{b} f(t)\dd t = -f(x)$. Dabei ist $\frac{\dd}{\dd x}$ das Zeichen für „ableiten nach $x$“.

:::beispiel[Ableiten, ohne das Integral auszurechnen]
1. **Untere Grenze variabel:** $H(x) = \int_x^3 \sqrt{1 + t^2}\dd t = -\int_3^x \sqrt{1 + t^2}\dd t$. Nach Teil 1 ist
   $H'(x) = -\sqrt{1 + x^2}$. Für $x = 0$ ergibt das $H'(0) = -1$.
2. **Obere Grenze $3x$:** $K(x) = \int_0^{3x} e^{-t^2}\dd t$. Mit $u(x) = 3x$ und $u'(x) = 3$ ist
   $K'(x) = e^{-(3x)^2}\cdot 3 = 3e^{-9x^2}$. Für $x = 0$ ergibt das $K'(0) = 3$.

Keines der beiden Integrale lässt sich mit bekannten Funktionen ausrechnen. Ableiten kann man sie trotzdem.
:::

```reflexion
frage: Warum ist der Hauptsatz eine Überraschung? Ableitung und Integral wurden doch völlig unabhängig voneinander definiert.
antwort: |
  Die Ableitung ist ein Grenzwert von Steigungen, also eine lokale Größe an einer Stelle. Das Integral ist ein
  Grenzwert von Flächensummen, also eine Größe über ein ganzes Intervall. Nichts in den Definitionen deutet darauf
  hin, dass das eine das andere rückgängig macht. Der Hauptsatz zeigt: Die Fläche wächst an jeder Stelle so schnell,
  wie der Graph dort hoch ist. Damit wird das schwierige Aufsummieren zu einer Suche nach einer Stammfunktion, und
  das ist meistens viel leichter.
```

:::achtung[Die Kettenregel vergessen]
Eine typische Fehlrechnung: $\frac{\dd}{\dd x}\int_0^{x^2}\sin t\dd t \overset{?}{=} \sin(x^2)$. Richtig ist
$\sin(x^2)\cdot 2x$, denn die obere Grenze ist die innere Funktion $u(x) = x^2$. Die Kontrolle zeigt es:
$\int_0^{x^2}\sin t\dd t = 1 - \cos(x^2)$, und die Ableitung davon ist $\sin(x^2)\cdot 2x$.
:::

:::achtung[Integralfunktion und Stammfunktion sind nicht dasselbe]
Ein falscher Schluss: Zu $f(t) = \cos t$ ist $G(x) = \sin x + 2$ eine Stammfunktion, also müsse $G$ auch eine
Integralfunktion sein. Prüfen wir es: Eine Integralfunktion $\int_a^x \cos t\dd t = \sin x - \sin a$ müsste
$-\sin a = 2$ erfüllen, also $\sin a = -2$. Das geht für keine reelle Zahl $a$, weil der Sinus nur Werte zwischen
$-1$ und $1$ annimmt. Jede Integralfunktion hat eine Nullstelle, nämlich bei $x = a$. $G$ hat keine, denn
$\sin x + 2 \ge 1$. Jede
Integralfunktion einer stetigen Funktion ist eine Stammfunktion, aber **nicht umgekehrt**.
:::

:::achtung[Ohne Stetigkeit kann F einen Knick haben]
Für die Treppenfunktion $f = 0$ auf $[0, 1)$ und $f = 1$ auf $[1, 2]$ ist $F(x) = 0$ für $x \le 1$ und $F(x) = x - 1$ für
$x \ge 1$. Wer blind „$F'(1) = f(1) = 1$“ schreibt, irrt. Die Ableitung von links ist $0$, von rechts $1$. $F$ ist bei
$x = 1$ stetig, hat aber einen Knick und ist dort **nicht** differenzierbar. Teil 1 braucht die Stetigkeit von $f$.
:::

```aufgabe
id: ib-hs-check-kette
titel: Ableiten mit der Grenze x³
art: check
niveau: 1
angabe: |
  Was ist die Ableitung von $F(x) = \int_1^{x^3}\cos t\dd t$?
teile:
  - typ: auswahl
    optionen: ['$3x^2\cos(x^3)$', '$\cos(x^3)$', '$\cos x$', '$-3x^2\sin(x^3)$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Die obere Grenze ist $u(x) = x^3$. Nach der Kettenregel kommt der Faktor $u''(x) = 3x^2$ dazu.'
      - wert: 2
        meldung: 'Der Integrand wird an der oberen Grenze $x^3$ ausgewertet, nicht an $x$.'
      - wert: 3
        meldung: 'Du hast den Integranden $\cos$ noch einmal abgeleitet. Nach dem Hauptsatz wird er nur eingesetzt.'
loesung: |
  Hauptsatz mit Kettenregel: $F'(x) = \cos\big(u(x)\big)\cdot u'(x)$ mit $u(x) = x^3$.
  ---
  Also $F'(x) = \cos(x^3)\cdot 3x^2$.
```

:::merke[Was der Hauptsatz leistet]
- **Rechnen:** Statt Summenformeln genügt eine Stammfunktion: $\int_a^b f = G(b) - G(a)$.
- **Existenz:** Jede stetige Funktion **hat** eine Stammfunktion, nämlich ihre Integralfunktion.
- **Ableiten von Integralen:** $\frac{\dd}{\dd x}\int_a^x f(t)\dd t = f(x)$, mit Kettenregel
  $\frac{\dd}{\dd x}\int_a^{u(x)} f(t)\dd t = f\big(u(x)\big)\cdot u'(x)$.
- **Graphen lesen:** $F$ wächst, wo $f > 0$ ist. Extremstellen von $F$ liegen bei Vorzeichenwechseln von $f$.
:::


```aufgabe
id: ib-integralfunktion
titel: Integralfunktion berechnen
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Bestimme die Integralfunktion $F(x) = \int_0^x (2t + 1)\dd t$ als Term in $x$ und berechne $F(3)$.
teile:
  - typ: term
    label: '$F(x)$'
    loesung: "x^2 + x"
    fehler:
      - wert: "x^2 + x + 1"
        meldung: 'Eine Integralfunktion zur unteren Grenze $0$ muss $F(0) = 0$ erfüllen. Die Konstante ist hier festgelegt.'
      - wert: "2"
        meldung: Du hast abgeleitet statt integriert. Gesucht ist eine Funktion, deren Ableitung $2x + 1$ ist.
  - typ: zahl
    label: '$F(3)$'
    loesung: "9 + 3"
    anzeige: '12'
    fehler:
      - wert: "7"
        meldung: 'Das ist $f(3) = 2\cdot 3 + 1$, also der Integrand. Gesucht ist die Fläche von $0$ bis $3$.'
hinweise:
  - 'Eine Stammfunktion von $2t + 1$ ist $t^2 + t$. Setze $x$ und $0$ als Grenzen ein.'
loesung: |
  **Ansatz:** Mit dem Hauptsatz Teil 2 rechnen wir das Integral mit oberer Grenze $x$ aus.
  ---
  Stammfunktion von $2t + 1$: $t^2 + t$. Also $F(x) = \big[t^2 + t\big]_0^x = x^2 + x - 0 = x^2 + x$.
  ---
  $F(3) = 9 + 3 = 12$. **Probe:** $F'(x) = 2x + 1 = f(x)$ und $F(0) = 0$.
```

```aufgabe
id: ib-hs-untere-grenze
titel: Die Variable steht unten
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Es sei $F(x) = \displaystyle\int_x^5 t^2\dd t$. Berechne $F'(2)$, ohne das Integral auszurechnen.
teile:
  - typ: zahl
    label: "$F'(2)$"
    loesung: "-4"
    fehler:
      - wert: "4"
        meldung: 'Die Variable $x$ steht als **untere** Grenze. Vertausche die Grenzen: $F(x) = -\int_5^x t^2\dd t$. Das bringt ein Minus.'
      - wert: "25"
        meldung: 'Die Ableitung hängt vom Integranden an der variablen Grenze ab, nicht an der festen Grenze $5$.'
hinweise:
  - 'Schreibe $\int_x^5 t^2\dd t = -\int_5^x t^2\dd t$ und wende dann den Hauptsatz an.'
loesung: |
  **Ansatz:** Der Hauptsatz gilt für die obere Grenze. Wir vertauschen die Grenzen: $F(x) = -\int_5^x t^2\dd t$.
  ---
  Nach Teil 1 ist $F'(x) = -x^2$, also $F'(2) = -4$.
  ---
  **Probe:** $F(x) = \frac{125}{3} - \frac{x^3}{3}$, also $F'(x) = -x^2$. Das passt. **Deutung:** Rückt die untere Grenze nach rechts, wird die Fläche kleiner.
```

```aufgabe
id: ib-hauptsatz-ableiten
titel: Integrale nach der oberen Grenze ableiten
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Bestimme die Ableitungen, **ohne** das Integral auszurechnen:
  $$F(x) = \int_1^x \sqrt{1 + t^4}\dd t, \qquad G(x) = \int_0^{x^2} \sin t\dd t.$$
teile:
  - typ: term
    label: "$F'(x)$"
    loesung: "sqrt(1 + x^4)"
    fehler:
      - wert: "sqrt(1 + x^4) - sqrt(2)"
        meldung: 'Die untere Grenze $1$ ist fest. Ihr Beitrag ist eine Konstante und fällt beim Ableiten weg.'
  - typ: term
    label: "$G'(x)$"
    loesung: "2*x*sin(x^2)"
    fehler:
      - wert: "sin(x^2)"
        meldung: 'Die obere Grenze ist $u(x) = x^2$. Nach der Kettenregel kommt der Faktor $u''(x) = 2x$ dazu.'
      - wert: "sin(x)"
        meldung: 'Der Integrand wird an der **oberen Grenze** $x^2$ ausgewertet, nicht an $x$.'
hinweise:
  - "Hauptsatz Teil 1: $\\frac{\\dd}{\\dd x}\\int_a^x f(t)\\dd t = f(x)$."
  - "Bei $G$ ist die obere Grenze $u(x) = x^2$. Kettenregel: $f(u(x))\\cdot u'(x)$."
loesung: |
  **Ansatz:** Hauptsatz Teil 1, bei $G$ zusammen mit der Kettenregel.
  ---
  Der Integrand $\sqrt{1 + t^4}$ ist stetig. Nach Teil 1 ist $F'(x) = \sqrt{1 + x^4}$.
  ---
  $G(x) = S(x^2)$ mit $S(u) = \int_0^u \sin t\dd t$ und $S'(u) = \sin u$. Kettenregel: $G'(x) = \sin(x^2)\cdot 2x$.
  ---
  **Kontrolle** für $G$: $G(x) = \big[-\cos t\big]_0^{x^2} = 1 - \cos(x^2)$, also $G'(x) = \sin(x^2)\cdot 2x$.
```

```aufgabe
id: ib-integralfunktion-extrema
titel: Extremstellen einer Integralfunktion
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Es sei $F(x) = \int_0^x (t - 1)\dd t$. Bestimme mit dem Hauptsatz die Extremstelle von $F$, ihre Art
  und den Funktionswert dort. Für welches $x > 0$ ist $F(x) = 0$?
plot:
  x: [-0.3, 3.3]
  y: [-1.3, 2.3]
  graphen:
    - { f: "x - 1", label: "f(t) = t − 1" }
teile:
  - typ: zahl
    label: 'Extremstelle $x_E$'
    loesung: "1"
    fehler:
      - wert: "0"
        meldung: 'Bei $x = 0$ ist $F$ zwar null, aber $F''(0) = -1 \ne 0$. Die Extremstelle liegt dort, wo $F'' = f$ das Vorzeichen wechselt.'
  - typ: auswahl
    label: 'Art'
    optionen: ['Minimum', 'Maximum', 'Sattelpunkt']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Links von $1$ ist $f$ negativ, $F$ fällt. Rechts von $1$ ist $f$ positiv, $F$ wächst. Das ist ein Tiefpunkt.'
  - typ: zahl
    label: '$F(x_E)$'
    loesung: "1/2 - 1"
    anzeige: '-\tfrac12'
    fehler:
      - wert: "1/2"
        meldung: 'Die Fläche des Dreiecks ist $\frac12$, aber es liegt **unter** der Achse. In der Bilanz zählt es negativ.'
  - typ: zahl
    label: 'Nullstelle $x > 0$'
    loesung: "2"
hinweise:
  - "$F'(x) = x - 1$. Wo wechselt $F'$ das Vorzeichen?"
  - 'Für $F(x_E)$ und die Nullstelle rechne $F(x) = \frac{x^2}{2} - x$ aus.'
loesung: |
  **Ansatz:** Nach dem Hauptsatz ist $F'(x) = x - 1$. Extremstellen von $F$ liegen bei Vorzeichenwechseln von $F'$.
  ---
  $F'(x) = 0$ genau für $x = 1$. Für $x < 1$ ist $F' < 0$, für $x > 1$ ist $F' > 0$. Also liegt bei $x = 1$ ein Minimum.
  ---
  $F(1) = \int_0^1 (t - 1)\dd t = \big[\tfrac{t^2}{2} - t\big]_0^1 = -\tfrac12$. Geometrisch: Das Dreieck zwischen $f$ und der Achse auf $[0, 1]$ hat Fläche $\frac12$ und liegt unter der Achse.
  ---
  $F(x) = \frac{x^2}{2} - x = x\big(\frac x2 - 1\big) = 0$ für $x = 2$. Dort hebt die positive Fläche auf $[1, 2]$ die negative auf $[0, 1]$ genau auf.
```

```aufgabe
id: ib-hs-graph
titel: Die Integralfunktion aus einem Graphen
niveau: 2
lernziel: 7
kompetenz: verstehen
angabe: |
  Der Graph von $f$ besteht aus zwei Strecken: waagrecht von $(0 \mid 1)$ nach $(2 \mid 1)$ und dann gerade von
  $(2 \mid 1)$ nach $(4 \mid -3)$. Es sei $F(x) = \int_0^x f(t)\dd t$.

  a) Berechne $F(2)$.

  b) An welcher Stelle hat $F$ seinen Hochpunkt, und wie groß ist $F$ dort?

  c) Berechne $F(4)$.
plot:
  x: [-0.3, 4.3]
  y: [-3.3, 1.8]
  strecken:
    - { von: [0, 1], nach: [2, 1] }
    - { von: [2, 1], nach: [4, -3] }
teile:
  - typ: zahl
    label: 'a) $F(2)$'
    loesung: "2"
    fehler:
      - wert: "1"
        meldung: 'Das ist $f(2)$, die Höhe des Graphen. $F(2)$ ist die **Fläche** unter $f$ von $0$ bis $2$.'
  - typ: zahl
    label: 'b) Stelle des Hochpunkts'
    loesung: "2.5"
    fehler:
      - wert: "2"
        meldung: 'Bei $t = 2$ beginnt $f$ zu fallen, ist aber noch positiv. Solange $f > 0$ ist, wächst $F$ weiter. Der Hochpunkt liegt bei der Nullstelle von $f$.'
      - wert: "0"
        meldung: 'Am Anfang ist $f$ positiv, also wächst $F$. Ein Hochpunkt liegt dort, wo $f$ von plus nach minus wechselt.'
  - typ: zahl
    label: 'b) Wert im Hochpunkt'
    loesung: "2 + 0.5*0.5*1"
    fehler:
      - wert: "2"
        meldung: 'Zwischen $2$ und $2{,}5$ kommt noch ein kleines Dreieck über der Achse dazu.'
  - typ: zahl
    label: 'c) $F(4)$'
    loesung: "2.25 - 0.5*1.5*3"
    fehler:
      - wert: "4.5"
        meldung: 'Das Dreieck auf $[2{,}5;\ 4]$ liegt unter der Achse. Es wird abgezogen, nicht addiert.'
hinweise:
  - 'Die schräge Strecke fällt um $4$ auf $2$ Einheiten, also um $2$ pro Einheit. Bei welchem $t$ ist sie null?'
  - 'Hochpunkt von $F$: dort, wo $f$ von plus nach minus wechselt. Die Flächen sind ein Rechteck und zwei Dreiecke.'
loesung: |
  **Ansatz:** $F(x)$ ist die Flächenbilanz unter $f$ von $0$ bis $x$. Nach dem Hauptsatz ist $F' = f$. Der Hochpunkt liegt also beim Vorzeichenwechsel von $f$ von plus nach minus.
  ---
  a) Rechteck mit Breite $2$ und Höhe $1$: $F(2) = 2$.
  ---
  b) Die schräge Strecke ist $f(t) = 1 - 2(t - 2) = 5 - 2t$ mit Nullstelle $t = 2{,}5$. Dort wechselt $f$ von plus nach minus. Dazu kommt das Dreieck mit Grundlinie $0{,}5$ und Höhe $1$, also Fläche $0{,}25$. Hochpunkt bei $x = 2{,}5$ mit $F(2{,}5) = 2{,}25$.
  ---
  c) Auf $[2{,}5;\ 4]$ liegt ein Dreieck mit Grundlinie $1{,}5$ und Höhe $3$ unter der Achse, Fläche $2{,}25$. Also $F(4) = 2{,}25 - 2{,}25 = 0$.
  ---
  **Deutung:** Bis $x = 4$ hebt die Fläche unter der Achse die Fläche darüber genau auf.
```

```aufgabe
id: ib-stamm-vs-integral
titel: Stammfunktion oder Integralfunktion?
niveau: 3
lernziel: 7
kompetenz: begruenden
angabe: |
  Es sei $f(t) = 2t$. Welche der folgenden Funktionen sind Integralfunktionen von $f$, also von der
  Form $\int_a^x 2t\dd t$ für eine geeignete Zahl $a$? Begründe.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$x^2$'
      - '$x^2 - 4$'
      - '$x^2 + 1$'
      - '$x^2 - 2$'
    richtig: [0, 1, 3]
    fehler:
      - wert: [0, 1, 2, 3]
        meldung: '$x^2 + 1$ hat keine Nullstelle. Jede Integralfunktion ist aber an ihrer unteren Grenze null.'
  - typ: text
    label: 'Begründung'
    muster: |
      $\int_a^x 2t\dd t = x^2 - a^2$. Integralfunktionen sind also genau die Funktionen $x^2 - c$ mit $c = a^2 \ge 0$:
      $x^2$ mit $a = 0$, $x^2 - 4$ mit $a = 2$ und $x^2 - 2$ mit $a = \sqrt2$. Die Stammfunktion $x^2 + 1$ ist keine
      Integralfunktion, denn $-a^2 = 1$ hat keine reelle Lösung. Jede Integralfunktion ist an der unteren Grenze null.
hinweise:
  - 'Berechne $\int_a^x 2t\dd t$ allgemein.'
  - 'Welche Werte kann $a^2$ annehmen? Vergleiche mit der Konstanten in jeder Option.'
loesung: |
  **Ansatz:** Wir berechnen die Integralfunktion allgemein: $\int_a^x 2t\dd t = \big[t^2\big]_a^x = x^2 - a^2$.
  ---
  Gesucht sind also Funktionen $x^2 - c$ mit $c = a^2 \ge 0$. Das sind $x^2$ mit $a = 0$, $x^2 - 4$ mit $a = 2$ und $x^2 - 2$ mit $a = \sqrt 2$.
  ---
  $x^2 + 1$ ist zwar eine Stammfunktion von $2t$, aber keine Integralfunktion. Dafür müsste $a^2 = -1$ sein. **Merksatz:** Jede Integralfunktion hat bei $x = a$ eine Nullstelle, $x^2 + 1$ hat keine.
```

```aufgabe
id: ib-hs-beweis
titel: Den Beweis des Hauptsatzes zusammensetzen
niveau: 3
lernziel: 7
kompetenz: begruenden
angabe: |
  Erkläre in eigenen Worten, warum für eine stetige Funktion $f$ die Integralfunktion $F(x) = \int_a^x f(t)\dd t$ die
  Ableitung $F'(x) = f(x)$ hat. Nenne die verwendeten Sätze und die Stelle, an der die Stetigkeit gebraucht wird.
  Löse die Aufgabe am besten geführt in Schritten.
teile:
  - typ: text
    muster: |
      Der Differenzenquotient ist $\frac{F(x+h) - F(x)}{h} = \frac1h\int_x^{x+h} f(t)\dd t$, wegen der Intervalladditivität.
      Das ist der Mittelwert von $f$ auf dem Streifen zwischen $x$ und $x + h$. Nach dem Mittelwertsatz der
      Integralrechnung, der die Stetigkeit von $f$ braucht, ist er gleich $f(\xi_h)$ mit $\xi_h$ zwischen $x$ und $x + h$.
      Für $h \to 0$ geht $\xi_h \to x$. Weil $f$ stetig ist, geht $f(\xi_h) \to f(x)$. Also ist $F'(x) = f(x)$.
hinweise:
  - 'Beginne mit dem Differenzenquotienten von $F$ und schreibe die Differenz zweier Integrale als ein Integral.'
  - 'Erkenne den Mittelwert auf dem Streifen und denk an den Mittelwertsatz der Integralrechnung. Die Stetigkeit kommt zweimal vor.'
loesung: |
  **Ansatz:** Wir zeigen, dass der Differenzenquotient von $F$ gegen $f(x)$ strebt.
  ---
  **Intervalladditivität:** $F(x + h) - F(x) = \int_x^{x+h} f(t)\dd t$. Also ist der Differenzenquotient $\frac1h\int_x^{x+h} f(t)\dd t$, der Mittelwert von $f$ auf dem Streifen.
  ---
  **Mittelwertsatz der Integralrechnung:** Weil $f$ stetig ist, gibt es $\xi_h$ zwischen $x$ und $x + h$ mit $\frac1h\int_x^{x+h} f = f(\xi_h)$.
  ---
  **Grenzübergang:** $\xi_h$ ist zwischen $x$ und $x + h$ eingeklemmt, also $\xi_h \to x$ für $h \to 0$. Wegen der Stetigkeit von $f$ gilt $f(\xi_h) \to f(x)$. Damit ist $F'(x) = f(x)$.
  ---
  **Antwort:** Verwendet werden Intervalladditivität, Mittelwertsatz der Integralrechnung und die Stetigkeit von $f$. Die Stetigkeit braucht man im Mittelwertsatz und im letzten Grenzübergang.
gefuehrt:
  - text: Womit schreibst du $F(x + h) - F(x)$ als ein einziges Integral?
    teil: { typ: auswahl, optionen: ['Intervalladditivität', 'Linearität', 'Dreiecksungleichung'], richtig: [0], fehler: [ { wert: 1, meldung: 'Linearität betrifft Summen von Funktionen. Hier werden zwei Integrale über verschiedene Intervalle verrechnet.' } ] }
    erklaerung: '$\int_a^{x+h} f - \int_a^x f = \int_x^{x+h} f$. Das ist die Intervalladditivität.'
  - text: 'Was ist $\frac1h\int_x^{x+h} f(t)\dd t$ anschaulich?'
    teil: { typ: auswahl, optionen: ['der Mittelwert von $f$ auf dem Streifen', 'die Steigung von $f$ bei $x$', 'die Fläche unter $f$ von $a$ bis $x$'], richtig: [0], fehler: [ { wert: 1, meldung: 'Es wird über $f$ integriert, nicht $f$ abgeleitet. Integral durch Intervalllänge ist ein Mittelwert.' } ] }
    erklaerung: 'Integral über ein Intervall der Länge $h$, geteilt durch $h$: der Mittelwert.'
  - text: Welcher Satz macht aus dem Mittelwert einen Funktionswert $f(\xi_h)$?
    teil: { typ: auswahl, optionen: ['Mittelwertsatz der Integralrechnung', 'Satz von Rolle', 'Zwischenwertsatz allein'], richtig: [0] }
    erklaerung: 'Der Mittelwertsatz der Integralrechnung. Er braucht die Stetigkeit von $f$.'
  - text: Warum folgt aus $\xi_h \to x$ auch $f(\xi_h) \to f(x)$?
    teil: { typ: auswahl, optionen: ['weil $f$ stetig ist', 'weil $f$ monoton ist', 'weil $h > 0$ ist'], richtig: [0], fehler: [ { wert: 1, meldung: 'Monotonie ist nicht vorausgesetzt. Gesucht ist die Eigenschaft, die Grenzwerte in Funktionswerte übersetzt.' } ] }
    erklaerung: 'Stetigkeit heißt genau: Strebt das Argument gegen $x$, strebt der Funktionswert gegen $f(x)$.'
```

## Uneigentliche Integrale

```aufgabe
id: ib-un-vorwissen
titel: Ein Grenzwert für b gegen unendlich
art: check
niveau: 1
angabe: |
  Berechne $\displaystyle\lim_{b\to\infty}\Big(1 - \frac{1}{b^2}\Big)$. Zum Nachlesen:
  [Kapitel 11, Nullfolgen](/lernen/mathe3/grenzwerte-folgen/nullfolgen-und-das-rechnen-mit-ihnen).
teile:
  - typ: zahl
    loesung: "1"
    fehler:
      - wert: "0"
        meldung: 'Nur der Bruch $\frac{1}{b^2}$ geht gegen $0$. Die $1$ davor bleibt stehen.'
loesung: |
  Für wachsendes $b$ wird $b^2$ beliebig groß, also geht $\frac{1}{b^2}$ gegen $0$.
  ---
  Damit geht $1 - \frac{1}{b^2}$ gegen $1 - 0 = 1$.
```

Das Riemann-Integral ist nur für **beschränkte** Funktionen auf **beschränkten** Intervallen $[a, b]$ definiert. In
Anwendungen braucht man aber auch Integrale wie
$$\int_1^\infty \frac{1}{x^2}\dd x \qquad\text{oder}\qquad \int_0^1 \frac{1}{\sqrt x}\dd x.$$
Beim ersten ist das Intervall unendlich lang. Beim zweiten wird der Integrand bei $x = 0$ beliebig groß. Beides ist
kein Riemann-Integral. Man erklärt solche Integrale als **Grenzwert** gewöhnlicher Integrale. Sie heißen
**uneigentliche Integrale**.

**Worum geht es in einem Satz?** Man integriert nur bis zu einer beweglichen Grenze und prüft dann, ob das Ergebnis
einen Grenzwert hat.

**Ein Bild:** Stell dir eine Wand bei $x = b$ vor. Links davon ist die Fläche endlich und gewöhnlich berechenbar. Jetzt
schiebst du die Wand immer weiter nach rechts. Wächst die Fläche über alle Grenzen, ist die Gesamtfläche unendlich.
Nähert sie sich einer festen Zahl, ist diese Zahl die Gesamtfläche.

:::definition[Uneigentliche Integrale]
**Typ 1, unbeschränktes Intervall.** Ist $f$ auf jedem Intervall $[a, b]$ mit $b > a$ integrierbar, so setzt man
$$\int_a^\infty f(x)\dd x = \lim_{b\to\infty}\int_a^b f(x)\dd x,$$
falls dieser Grenzwert als reelle Zahl existiert. Ebenso für $\int_{-\infty}^b$.

**Typ 2, unbeschränkter Integrand.** Ist $f$ auf jedem Intervall $[c, b]$ mit $a < c < b$ integrierbar, aber nahe bei $a$
unbeschränkt, so setzt man
$$\int_a^b f(x)\dd x = \lim_{c\to a^+}\int_c^b f(x)\dd x.$$

Existiert der Grenzwert, heißt das uneigentliche Integral **konvergent**, sonst **divergent**.
:::

Dabei ist $\infty$ das Zeichen für „unendlich“. Es ist keine Zahl, sondern eine Abkürzung für „die Grenze wächst über
alle Schranken“. Das Zeichen $c \to a^+$ liest man „$c$ geht von rechts gegen $a$“. Konvergent heißt
„zusammenlaufend“, also: Der Grenzwert existiert. Divergent heißt „auseinanderlaufend“.

:::beispiel[Konvergent: die Fläche unter 1/x² ab 1]
1. **Bis zur Wand integrieren:** $\int_1^b \frac{1}{x^2}\dd x = \Big[-\frac1x\Big]_1^b = -\frac1b + 1 = 1 - \frac1b$.
2. **Wand verschieben:** Für $b \to \infty$ geht $\frac1b \to 0$, also geht das Integral gegen $1$.
3. **Ergebnis:** $\int_1^\infty \frac{1}{x^2}\dd x = 1$.

Die unendlich lange Fläche hat den endlichen Inhalt $1$. Das ist auf den ersten Blick verblüffend. Der Graph kommt der
Achse aber so schnell nahe, dass die Streifen weit rechts kaum noch etwas beitragen.
:::

:::beispiel[Divergent: die Fläche unter 1/x ab 1]
1. **Bis zur Wand integrieren:** $\int_1^b \frac1x\dd x = \ln b - \ln 1 = \ln b$.
2. **Wand verschieben:** Für $b \to \infty$ wächst $\ln b$ über alle Grenzen.
3. **Ergebnis:** Das Integral divergiert, die Fläche ist unendlich.

Obwohl auch $\frac1x$ gegen $0$ geht, ist die Fläche unendlich. Der Graph fällt „zu langsam“. Das passt zur Divergenz
der harmonischen Reihe $1 + \frac12 + \frac13 + \dots$ aus
[Kapitel 11](/lernen/mathe3/grenzwerte-folgen/unendliche-reihen-partialsummen-geometrische-und-harmonische-reihe).
:::

```plot
x: [0, 6.2]
y: [-0.1, 1.6]
achsen: { x: "x", y: "y" }
graphen:
  - { f: "1/x^2", label: "1/x²", farbe: 0, von: 0.8 }
  - { f: "1/x", label: "1/x", farbe: 1, von: 0.65, gestrichelt: true }
flaechen:
  - { f: "1/x^2", von: 1, bis: 6.2, farbe: 0 }
beschriftung: Die Fläche unter 1/x² ab x = 1 (blau) ist endlich, nämlich 1, obwohl sie unendlich weit reicht. Unter 1/x (gestrichelt) ist die Fläche ab x = 1 unendlich groß.
```

### Der Vergleichsmaßstab 1/x hoch p

Die beiden Beispiele sind Sonderfälle eines allgemeinen Satzes über Potenzen. Er ist das wichtigste Werkzeug, um
schnell zu entscheiden, ob ein uneigentliches Integral konvergiert.

:::satz[Potenzfunktionen als Vergleichsmaßstab]
Für eine Zahl $p > 0$ gilt:
$$\int_1^\infty \frac{1}{x^p}\dd x \;\begin{cases} = \dfrac{1}{p-1}, & \text{wenn } p > 1, \\[1ex] \text{divergiert}, & \text{wenn } p \le 1,\end{cases} \qquad\qquad \int_0^1 \frac{1}{x^p}\dd x \;\begin{cases} = \dfrac{1}{1-p}, & \text{wenn } p < 1, \\[1ex] \text{divergiert}, & \text{wenn } p \ge 1.\end{cases}$$
:::

:::beweis
**Schritt 1: Stammfunktion.** Für $p \ne 1$ ist $\int x^{-p}\dd x = \frac{x^{1-p}}{1-p}$.

**Schritt 2: Typ 1.** Auf $[1, b]$ ergibt sich $\frac{b^{1-p} - 1}{1-p}$. Ist $p > 1$, so ist die Hochzahl $1 - p$
negativ, und $b^{1-p} = \frac{1}{b^{p-1}} \to 0$. Der Grenzwert ist $\frac{-1}{1-p} = \frac{1}{p-1}$. Ist $p < 1$, wächst
$b^{1-p}$ über alle Grenzen. Der Fall $p = 1$ ist das Beispiel mit $\ln b$.

**Schritt 3: Typ 2.** Auf $[c, 1]$ ergibt sich $\frac{1 - c^{1-p}}{1-p}$. Für $c \to 0^+$ geht $c^{1-p}$ genau dann gegen
$0$, wenn die Hochzahl $1 - p$ positiv ist, also für $p < 1$. Für $p = 1$ ist $\int_c^1 \frac1x\dd x = -\ln c \to \infty$.
:::

:::merke[Faustregel für Potenzen 1/xᵖ]
- **Bei unendlich** konvergiert das Integral genau dann, wenn $p > 1$ ist, wenn also $\frac{1}{x^p}$ **schneller** als $\frac1x$ gegen $0$ geht.
- **Bei null** konvergiert es genau dann, wenn $p < 1$ ist, wenn also $\frac{1}{x^p}$ **langsamer** als $\frac1x$ gegen unendlich geht.
- $\frac1x$ selbst ist in beiden Fällen die Grenze und divergiert.
- Die Regel gilt für Potenzen. Bei anderen Funktionen reicht „irgendwie schneller als $\frac1x$“ nicht immer. Dann vergleicht man mit einer passenden Potenz.
:::

```aufgabe
id: ib-un-check-vorhersage
titel: Konvergiert es für p = 0,5?
art: check
niveau: 1
angabe: |
  Sag voraus, bevor du das Widget nach dieser Frage benutzt: Konvergiert $\int_1^\infty \frac{1}{x^{0{,}5}}\dd x$?
teile:
  - typ: auswahl
    optionen:
      - 'Nein, $\frac{1}{\sqrt x}$ fällt langsamer als $\frac1x$.'
      - 'Ja, weil $\frac{1}{\sqrt x}$ gegen $0$ geht.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Gegen $0$ gehen reicht nicht, das tut auch $\frac1x$. Entscheidend ist, wie schnell. Hier ist $p = 0{,}5 \le 1$.'
loesung: |
  Mit $p = 0{,}5$ gilt $p \le 1$. Bei unendlich divergiert das Integral.
  ---
  Im Widget siehst du: Für $p < 1$ liegt der Graph rechts von $x = 1$ **über** $\frac1x$. Die Fläche ist also noch größer als die unendliche Fläche unter $\frac1x$.
```

```widget
name: parameter
titel: Die Potenzfunktion 1/x^p
props:
  f: "1/x^p"
  parameter:
    - { name: p, min: 0.3, max: 3, step: 0.1, wert: 0.5 }
  x: [0, 6]
  y: [0, 3]
  zusatz: ["1/x"]
```

Verschiebe den Regler $p$ und vergleiche mit der Kurve $\frac1x$. Für $p > 1$ liegt der Graph rechts von $x = 1$ unter
$\frac1x$ und fällt schneller. Für $p < 1$ liegt er links von $x = 1$ unter $\frac1x$. Dort, bei $0$, wird er langsamer
unendlich.

:::beispiel[Typ 2: die Wurzel im Nenner]
Gesucht ist $\int_0^1 \frac{1}{\sqrt x}\dd x$. Bei $x = 0$ ist der Integrand nicht definiert und wird beliebig groß.

1. **Von der Problemstelle wegrücken:** Für $0 < c < 1$ ist $\int_c^1 x^{-1/2}\dd x = \big[2\sqrt x\big]_c^1 = 2 - 2\sqrt c$.
2. **Grenzwert:** Für $c \to 0^+$ geht $2\sqrt c \to 0$. Also ist das Integral $2$.
3. **Kontrolle mit dem Satz:** $p = \frac12 < 1$, Wert $\frac{1}{1 - \frac12} = 2$.

Die Fläche reicht unendlich hoch und ist trotzdem endlich.
:::

:::beispiel[Exponentielles Abklingen mit Einheiten]
Ein undichter Behälter verliert Wasser mit der Rate $r(t) = 2\,e^{-0{,}1 t}$ in Liter pro Stunde. Dabei ist $t$ die Zeit in
Stunden. Wie viel Wasser verliert er insgesamt, wenn man unbegrenzt wartet?

1. **Bis zur Zeit $T$:** $\int_0^T 2e^{-0{,}1t}\dd t = \Big[-20\,e^{-0{,}1t}\Big]_0^T = 20\,\big(1 - e^{-0{,}1T}\big)$.
2. **Grenzwert:** Für $T \to \infty$ geht $e^{-0{,}1T} \to 0$. Das Integral geht gegen $20$.
3. **Antwort:** Insgesamt gehen $20$ Liter verloren. Die Einheit ist L/h mal h, also Liter.

Allgemein gilt $\int_0^\infty e^{-\lambda x}\dd x = \frac1\lambda$ für jedes $\lambda > 0$. Das braucht man etwa für die
mittlere Lebensdauer beim radioaktiven Zerfall.
:::

### Problemstellen im Inneren und an beiden Enden

Liegt die Problemstelle im **Inneren** des Intervalls, oder sind beide Grenzen unendlich, teilt man das Integral an
einer Stelle und verlangt, dass **beide** Teile einzeln konvergieren. Ein Beispiel ist die Rechnung aus
[Kapitel 10, Der Hauptsatz](/lernen/mathe3/integralrechnung/der-hauptsatz-der-differential-und-integralrechnung):
$\int_{-1}^1 \frac{1}{x^2}\dd x$ hat bei $x = 0$ einen Pol. Man teilt in $\int_{-1}^0 + \int_0^1$. Der rechte Teil ist vom
Typ 2 mit $p = 2 \ge 1$ und divergiert. Damit divergiert das ganze Integral, egal was der linke Teil macht.

:::beispiel[Vertiefung: Gabriels Horn]
Lässt man den Graphen von $\frac1x$ für $x \ge 1$ um die $x$-Achse rotieren, entsteht ein unendlich langer Trichter. Sein
Volumen ist nach der Formel für Rotationskörper aus
[Kapitel 10](/lernen/mathe3/integralrechnung/mittelwert-rotationsvolumen-und-arbeit)
$$V = \pi\int_1^\infty \frac{1}{x^2}\dd x = \pi\cdot 1 = \pi,$$
also endlich. Seine Oberfläche ist dagegen unendlich, denn sie ist größer als $2\pi\int_1^\infty\frac1x\dd x$. Misst man
die Längen in Dezimetern, könnte man den Trichter mit $\pi \approx 3{,}14$ Litern Farbe füllen, aber seine Innenwand nie
vollständig anstreichen.
:::

:::achtung[Symmetrisch abschneiden ist nicht erlaubt]
Eine typische Fehlrechnung für $\int_{-\infty}^{\infty} x\dd x$:
$$\int_{-b}^{b} x\dd x = \frac{b^2}{2} - \frac{b^2}{2} = 0 \;\xrightarrow{\;b\to\infty\;}\; 0.$$
Hier wurden beide Grenzen gleichzeitig und gleich schnell verschoben. Das verlangt die Definition nicht. Richtig: Man
teilt bei $0$. Schon $\int_0^\infty x\dd x = \lim \frac{b^2}{2}$ wächst über alle Grenzen. Das Integral **divergiert**.
:::

:::achtung[Gegen null gehen reicht nicht]
Ein falscher Schluss lautet: Der Integrand $\frac{1}{x}$ geht für $x \to \infty$ gegen $0$, also hat $\int_1^\infty \frac1x\dd x$
einen endlichen Wert. Die Rechnung zeigt das Gegenteil: $\int_1^b \frac1x\dd x = \ln b \to \infty$. Dass der Integrand
gegen $0$ geht, ist nötig, aber nicht genug. Er muss **schnell genug** gegen $0$ gehen, schneller als $\frac1x$.
:::

```reflexion
frage: Warum konvergiert $\int_1^\infty \frac{1}{x^2}\dd x$, aber $\int_1^\infty \frac1x\dd x$ nicht, obwohl beide Integranden gegen $0$ gehen?
antwort: |
  Entscheidend ist, wie schnell der Integrand gegen $0$ geht. Bei $\frac{1}{x^2}$ halbiert sich der Wert schon, wenn
  $x$ um den Faktor $\sqrt2$ wächst. Die Streifen weit rechts tragen so wenig bei, dass ihre Summe endlich bleibt:
  $\int_1^b \frac{1}{x^2} = 1 - \frac1b$ bleibt unter $1$. Bei $\frac1x$ trägt jede Verdopplung des Intervalls, etwa von
  $b$ bis $2b$, immer denselben Beitrag $\ln 2$ bei. Unendlich viele solche Beiträge ergeben eine unendliche Fläche.
```

```aufgabe
id: ib-uneig-potenz
titel: Uneigentliches Integral vom Typ 1
niveau: 1
lernziel: 8
kompetenz: rechnen
angabe: |
  Berechne $\displaystyle\int_1^\infty \frac{3}{x^4}\dd x$.
teile:
  - typ: zahl
    label: 'Wert'
    loesung: "3/3"
    anzeige: '1'
    fehler:
      - wert: "-1"
        meldung: 'Achte auf die Reihenfolge „oben minus unten“: $\Big[-\frac{1}{x^3}\Big]_1^b = -\frac{1}{b^3} - (-1)$.'
      - wert: "3/5"
        meldung: 'Beim Integrieren wird die Hochzahl $-4$ zu $-3$, nicht zu $-5$.'
hinweise:
  - 'Schreibe $\frac{3}{x^4} = 3x^{-4}$, integriere bis $b$ und lass dann $b$ gegen unendlich gehen.'
loesung: |
  **Ansatz:** Typ 1. Erst bis zu einer endlichen Grenze $b$ integrieren, dann $b \to \infty$.
  ---
  $\int_1^b 3x^{-4}\dd x = \Big[-\frac{1}{x^3}\Big]_1^b = 1 - \frac{1}{b^3}$.
  ---
  Für $b \to \infty$ geht $\frac{1}{b^3} \to 0$, also ist der Wert $1$. **Kontrolle** mit dem Satz: $3\cdot\frac{1}{4 - 1} = 1$.
```

```aufgabe
id: ib-uneig-wurzel
titel: Uneigentliches Integral vom Typ 2
niveau: 1
lernziel: 8
kompetenz: rechnen
angabe: |
  Berechne $\displaystyle\int_0^8 \frac{1}{\sqrt[3]{x}}\dd x$ als Grenzwert.
teile:
  - typ: zahl
    label: 'Wert'
    loesung: "1.5*8^(2/3)"
    anzeige: '6'
    fehler:
      - wert: "1.5*8^(2/3) - 1.5"
        meldung: 'An der unteren Grenze $c \to 0$ ist $\frac32 c^{2/3} \to 0$, nicht $\frac32$. Es wird also nichts abgezogen.'
      - wert: "(2/3)*8^(2/3)"
        meldung: 'Die neue Hochzahl ist $-\frac13 + 1 = \frac23$. Geteilt wird durch $\frac23$, das heißt mal $\frac32$.'
hinweise:
  - 'Der Integrand ist bei $x = 0$ unbeschränkt. Schreibe ihn als $x^{-1/3}$, integriere von $c$ bis $8$ und lass $c$ von rechts gegen $0$ gehen.'
loesung: |
  **Ansatz:** Typ 2, denn bei $x = 0$ wird der Integrand beliebig groß. Wir integrieren ab einer Stelle $c > 0$.
  ---
  $\int_c^8 x^{-1/3}\dd x = \Big[\frac32 x^{2/3}\Big]_c^8 = \frac32\cdot 4 - \frac32 c^{2/3} = 6 - \frac32 c^{2/3}$, denn $8^{2/3} = 2^2 = 4$.
  ---
  Für $c \to 0^+$ geht $c^{2/3} \to 0$, also ist der Wert $6$. **Kontrolle:** $p = \frac13 < 1$, das Integral muss konvergieren.
```

```aufgabe
id: ib-uneig-exp
titel: Exponentialfunktion bis unendlich
niveau: 1
lernziel: 8
kompetenz: rechnen
angabe: |
  Berechne $\displaystyle\int_0^\infty 5\,e^{-2x}\dd x$.
teile:
  - typ: zahl
    label: 'Wert'
    loesung: "5/2"
    anzeige: '2{,}5'
    fehler:
      - wert: "10"
        meldung: 'Beim Integrieren von $e^{-2x}$ teilt man durch die innere Ableitung $-2$, man multipliziert nicht.'
      - wert: "-5/2"
        meldung: 'Der Integrand ist positiv, also muss das Ergebnis positiv sein. Prüfe die Vorzeichen beim Einsetzen der unteren Grenze.'
hinweise:
  - 'Eine Stammfunktion von $e^{-2x}$ ist $-\frac12 e^{-2x}$.'
loesung: |
  **Ansatz:** Typ 1. Bis $b$ integrieren, dann $b \to \infty$.
  ---
  $\int_0^b 5e^{-2x}\dd x = \Big[-\frac52 e^{-2x}\Big]_0^b = \frac52\big(1 - e^{-2b}\big)$.
  ---
  Mit $e^{-2b} \to 0$ folgt der Wert $\frac52 = 2{,}5$. **Kontrolle** mit der Regel $\int_0^\infty e^{-\lambda x}\dd x = \frac1\lambda$: $5\cdot\frac12 = 2{,}5$.
```

```aufgabe
id: ib-uneig-auswahl
titel: Konvergent oder divergent?
niveau: 2
lernziel: 8
kompetenz: verstehen
angabe: |
  Welche der uneigentlichen Integrale konvergieren? Wähle alle aus.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$\int_1^\infty \frac1x\dd x$'
      - '$\int_1^\infty \frac{1}{x\sqrt x}\dd x$'
      - '$\int_0^1 \frac{1}{x^2}\dd x$'
      - '$\int_0^1 \frac{1}{\sqrt[3]{x}}\dd x$'
      - '$\int_0^\infty e^{-x}\dd x$'
    richtig: [1, 3, 4]
    fehler:
      - wert: [0, 1, 3, 4]
        meldung: '$\frac1x$ ist bei unendlich genau die Grenze $p = 1$. Dort divergiert das Integral.'
      - wert: [1, 2, 4]
        meldung: 'Bei $0$ ist es umgekehrt wie bei unendlich: Dort braucht man $p < 1$. $\frac{1}{x^2}$ hat $p = 2$, $\frac{1}{\sqrt[3]x}$ hat $p = \frac13$.'
      - wert: [1, 4]
        meldung: '$\frac{1}{\sqrt[3]x} = x^{-1/3}$ bei $0$: $p = \frac13 < 1$, das Integral konvergiert.'
hinweise:
  - 'Schreibe die Integranden als $x^{-p}$.'
  - 'Bei unendlich braucht man $p > 1$, bei $0$ braucht man $p < 1$. Die Exponentialfunktion fällt schneller als jede Potenz.'
loesung: |
  **Ansatz:** Jeden Integranden als $x^{-p}$ schreiben und mit dem Satz vergleichen.
  ---
  $\frac1x$ bei unendlich: $p = 1$, divergent. $\frac{1}{x\sqrt x} = x^{-3/2}$ bei unendlich: $p = \frac32 > 1$, konvergent mit Wert $2$.
  ---
  $\frac{1}{x^2}$ bei $0$: $p = 2 \ge 1$, divergent. $x^{-1/3}$ bei $0$: $p = \frac13 < 1$, konvergent mit Wert $\frac32$.
  ---
  $e^{-x}$: konvergent mit Wert $1$. Richtig sind also die Optionen 2, 4 und 5.
```

```aufgabe
id: ib-uneig-medikament
titel: Wie viel Wirkstoff gelangt ins Blut?
niveau: 2
lernziel: 8
kompetenz: modellieren
angabe: |
  Aus einer Retardtablette, die ihren Wirkstoff langsam abgibt, gelangt Wirkstoff mit der Rate $r(t) = 40\,e^{-0{,}2t}$
  ins Blut. Dabei ist $t$ die Zeit in Stunden seit der Einnahme und $r$ die Rate in mg pro Stunde.

  a) Wie viel Wirkstoff gelangt insgesamt ins Blut, wenn man unbegrenzt lange wartet?

  b) Nach wie vielen Stunden sind $90\,\%$ dieser Gesamtmenge abgegeben? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    label: 'a) Gesamtmenge'
    einheit: mg
    loesung: "40/0.2"
    fehler:
      - wert: "40*0.2"
        meldung: 'Beim Integrieren von $e^{-0{,}2t}$ teilt man durch $0{,}2$, man multipliziert nicht.'
      - wert: "40"
        meldung: '$40$ mg/h ist nur die Anfangsrate. Die Gesamtmenge ist das Integral der Rate über die ganze Zeit.'
  - typ: zahl
    label: 'b) Zeit'
    einheit: h
    loesung: "ln(10)/0.2"
    anzeige: '11{,}51'
    toleranz: 0.01
    fehler:
      - wert: "-ln(0.9)/0.2"
        meldung: 'Du hast die Zeit berechnet, nach der noch $90\,\%$ **übrig** sind. Gesucht ist, wann $90\,\%$ **abgegeben** sind, also $e^{-0{,}2T} = 0{,}1$.'
hinweise:
  - 'Die Gesamtmenge ist $\int_0^\infty r(t)\dd t$. Eine Stammfunktion von $40e^{-0{,}2t}$ ist $-200\,e^{-0{,}2t}$.'
  - 'Bis zur Zeit $T$ sind $200\,(1 - e^{-0{,}2T})$ mg abgegeben. Setze das gleich $0{,}9\cdot 200$.'
loesung: |
  **Ansatz:** Die abgegebene Menge ist das Integral der Rate. Für „unbegrenzt“ ist es ein uneigentliches Integral vom Typ 1.
  ---
  a) $\int_0^T 40e^{-0{,}2t}\dd t = \big[-200\,e^{-0{,}2t}\big]_0^T = 200\,\big(1 - e^{-0{,}2T}\big)$. Für $T \to \infty$ folgt $200$ mg.
  ---
  b) $200\,(1 - e^{-0{,}2T}) = 180$ ergibt $e^{-0{,}2T} = 0{,}1$, also $T = \frac{\ln 10}{0{,}2} \approx 11{,}51$ h.
  ---
  **Antwort:** Insgesamt gelangen $200$ mg ins Blut, $90\,\%$ davon in den ersten $11{,}51$ Stunden. **Einheiten:** mg/h mal h ergibt mg.
gefuehrt:
  - text: Gib eine Stammfunktion von $40\,e^{-0{,}2t}$ an.
    teil: { typ: term, variable: t, loesung: "-200*e^(-0.2*t)", plusC: true, fehler: [ { wert: "-8*e^(-0.2*t)", meldung: 'Durch die innere Ableitung $-0{,}2$ wird geteilt: $\frac{40}{-0{,}2} = -200$.' } ] }
    erklaerung: 'Lineare Substitution: $\int e^{-0{,}2t}\dd t = \frac{e^{-0{,}2t}}{-0{,}2}$. Mal $40$ ergibt $-200\,e^{-0{,}2t}$.'
  - text: Wie viel Wirkstoff ist bis zur Zeit $T$ abgegeben? Wie groß ist das für $T \to \infty$?
    teil: { typ: zahl, loesung: "200" }
    erklaerung: '$200\,(1 - e^{-0{,}2T})$ geht gegen $200$ mg.'
  - text: Welchen Wert muss $e^{-0{,}2T}$ haben, wenn $90\,\%$ abgegeben sind?
    teil: { typ: zahl, loesung: "0.1", fehler: [ { wert: "0.9", meldung: 'Abgegeben ist der Anteil $1 - e^{-0{,}2T}$. Er soll $0{,}9$ sein.' } ] }
    erklaerung: '$1 - e^{-0{,}2T} = 0{,}9$, also $e^{-0{,}2T} = 0{,}1$.'
  - text: Löse nach $T$ auf.
    teil: { typ: zahl, loesung: "ln(10)/0.2", toleranz: 0.01 }
    erklaerung: '$-0{,}2T = \ln 0{,}1 = -\ln 10$, also $T = \frac{\ln 10}{0{,}2} \approx 11{,}51$ h.'
```

```aufgabe
id: ib-uneig-symmetrisch
titel: Ein verlockender Kurzschluss
niveau: 2
lernziel: 8
kompetenz: begruenden
angabe: |
  Ein Mitschüler rechnet: „$\frac{x}{1 + x^2}$ ist ungerade. Also heben sich links und rechts alle Flächen auf, und
  $\int_{-\infty}^{\infty}\frac{x}{1 + x^2}\dd x = 0$.“

  a) Was ist richtig?

  b) Berechne $\int_0^b \frac{x}{1 + x^2}\dd x$ als Term in $b$.
teile:
  - typ: auswahl
    label: 'a)'
    optionen:
      - 'Das Integral divergiert, weil schon $\int_0^\infty \frac{x}{1+x^2}\dd x$ divergiert.'
      - 'Das Integral ist $0$, wie der Mitschüler sagt.'
      - 'Das Integral ist $\pi$.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Bei zwei unendlichen Grenzen muss **jeder** Teil einzeln konvergieren. Das Aufheben unendlicher Flächen ist nicht erlaubt.'
      - wert: 2
        meldung: '$\pi$ wäre der Wert von $\int_{-\infty}^\infty \frac{1}{1 + x^2}\dd x$. Hier steht aber $x$ im Zähler.'
  - typ: term
    label: 'b) $\int_0^b \frac{x}{1+x^2}\dd x$'
    variable: b
    bereich: [0.5, 5]
    loesung: "ln(1 + b^2)/2"
    fehler:
      - wert: "ln(1 + b^2)"
        meldung: 'Die Ableitung des Nenners ist $2x$, im Zähler steht nur $x$. Es fehlt der Faktor $\frac12$.'
hinweise:
  - 'Teile das Integral bei $0$. Beide Teile müssen einzeln konvergieren.'
  - 'Der Zähler ist bis auf den Faktor $\frac12$ die Ableitung des Nenners. Eine Stammfunktion ist $\frac12\ln(1 + x^2)$.'
loesung: |
  **Ansatz:** Bei zwei unendlichen Grenzen teilt man an einer Stelle, etwa bei $0$, und prüft jeden Teil einzeln.
  ---
  b) Der Zähler ist bis auf den Faktor $\frac12$ die Ableitung des Nenners: $\int_0^b \frac{x}{1+x^2}\dd x = \Big[\frac12\ln(1 + x^2)\Big]_0^b = \frac12\ln(1 + b^2)$.
  ---
  a) Für $b \to \infty$ wächst $\frac12\ln(1 + b^2)$ über alle Grenzen. Der rechte Teil divergiert, also divergiert das ganze Integral.
  ---
  **Der Fehler des Mitschülers:** Er hat beide Grenzen gleich schnell verschoben. Dabei heben sich zwei unendliche Flächen scheinbar auf. Die Definition verlangt aber, dass jeder Teil für sich einen endlichen Wert hat.
```

```aufgabe
id: ib-uneig-p
titel: Für welche Hochzahlen konvergiert es?
niveau: 3
lernziel: 8
kompetenz: begruenden
angabe: |
  a) Zeige durch Rechnung mit Grenzwert: $\int_1^\infty x^{-p}\dd x$ konvergiert genau für $p > 1$.

  b) Berechne den Wert für $p = 3$.

  c) Für welches $p > 1$ ist $\int_1^\infty x^{-p}\dd x = 4$?
teile:
  - typ: text
    label: 'a)'
    muster: |
      Für $p \ne 1$: $\int_1^b x^{-p}\dd x = \frac{b^{1-p} - 1}{1 - p}$. Für $p > 1$ ist die Hochzahl $1 - p$ negativ,
      $b^{1-p} \to 0$, und der Grenzwert ist $\frac{1}{p-1}$. Für $p < 1$ wächst $b^{1-p}$ über alle Grenzen, divergent.
      Für $p = 1$ ist $\int_1^b \frac1x = \ln b \to \infty$, divergent.
  - typ: zahl
    label: 'b) Wert für $p = 3$'
    loesung: "1/(3-1)"
    anzeige: '\tfrac12'
  - typ: zahl
    label: 'c) $p$'
    loesung: "1 + 1/4"
    anzeige: '1{,}25'
    fehler:
      - wert: "5"
        meldung: 'Aus $\frac{1}{p - 1} = 4$ folgt $p - 1 = \frac14$, nicht $p - 1 = 4$.'
hinweise:
  - 'Den Fall $p = 1$ getrennt behandeln, dort ist die Stammfunktion $\ln x$.'
  - 'c) $\frac{1}{p-1} = 4$ nach $p$ auflösen.'
loesung: |
  **Ansatz:** Bis $b$ integrieren und den Grenzwert $b \to \infty$ untersuchen. Der Fall $p = 1$ braucht eine andere Stammfunktion.
  ---
  a) Für $p \ne 1$: $\int_1^b x^{-p}\dd x = \Big[\frac{x^{1-p}}{1-p}\Big]_1^b = \frac{b^{1-p} - 1}{1-p}$. Für $p > 1$ ist $b^{1-p} = \frac{1}{b^{p-1}} \to 0$, der Grenzwert ist $\frac{1}{p-1}$. Für $p < 1$ wächst $b^{1-p}$ über alle Grenzen. Für $p = 1$ ist $\ln b \to \infty$.
  ---
  b) $\frac{1}{3 - 1} = \frac12$.
  ---
  c) $\frac{1}{p - 1} = 4$ ist gleichwertig mit $p - 1 = \frac14$, also $p = 1{,}25$. **Plausibilität:** Je näher $p$ an $1$ liegt, desto größer wird die Fläche.
```

```aufgabe
id: ib-uneig-ln
titel: Fläche unter dem Logarithmus bei null
niveau: 3
lernziel: 8
kompetenz: anwenden
angabe: |
  Der natürliche Logarithmus ist bei $x = 0$ nicht definiert und geht für $x \to 0^+$ gegen $-\infty$. Berechne trotzdem
  $\int_0^1 \ln x\dd x$ als uneigentliches Integral. Verwende die Stammfunktion $x\ln x - x$ aus der partiellen Integration
  in [Kapitel 10](/lernen/mathe3/integralrechnung/partielle-integration-die-produktregel-rueckwaerts) und den Grenzwert
  $\lim_{c\to 0^+} c\ln c = 0$.
teile:
  - typ: zahl
    label: '$\int_0^1 \ln x\dd x$'
    loesung: "-1"
    fehler:
      - wert: "1"
        meldung: 'Auf $(0, 1)$ ist $\ln x$ negativ. Die Fläche liegt unter der Achse, das Integral ist negativ.'
hinweise:
  - 'Integriere von $c$ bis $1$: $\big[x\ln x - x\big]_c^1$.'
  - 'Setze ein und lass $c$ gegen $0$ gehen. Der Summand $c\ln c$ geht gegen $0$, ebenso $c$.'
loesung: |
  **Ansatz:** Typ 2, die Problemstelle ist $x = 0$. Wir integrieren von $c > 0$ bis $1$ und lassen dann $c \to 0^+$.
  ---
  $\int_c^1 \ln x\dd x = \big[x\ln x - x\big]_c^1 = (0 - 1) - (c\ln c - c) = -1 - c\ln c + c$.
  ---
  Für $c \to 0^+$ geht $c\ln c \to 0$ und $c \to 0$. Also ist $\int_0^1 \ln x\dd x = -1$.
  ---
  **Deutung:** Die Fläche zwischen dem Graphen und der Achse reicht unendlich tief, ist aber endlich, nämlich $1$. Sie liegt unter der Achse, darum ist das Integral $-1$. **Probe der Stammfunktion:** $(x\ln x - x)' = \ln x + 1 - 1 = \ln x$.
```

## Numerische Integration

```aufgabe
id: ib-num-vorwissen
titel: Fläche eines Trapezes
art: check
niveau: 1
angabe: |
  Ein Trapez hat die parallelen Seiten $3$ cm und $5$ cm und die Höhe $2$ cm. Wie groß ist seine Fläche? Die
  Formel brauchst du gleich für die Trapezregel. Zur Erinnerung an Flächen unter Graphen:
  [Kapitel 10, Das bestimmte Integral](/lernen/mathe3/integralrechnung/das-bestimmte-integral-als-flaechenbilanz).
teile:
  - typ: zahl
    einheit: cm²
    loesung: "(3 + 5)/2*2"
    fehler:
      - wert: "30"
        meldung: 'Du hast alle drei Längen multipliziert. Die Trapezfläche ist „Mittelwert der parallelen Seiten mal Höhe“.'
      - wert: "16"
        meldung: 'Du hast die Summe der parallelen Seiten mit der Höhe multipliziert. Es fehlt das Halbieren.'
loesung: |
  Trapezfläche: $A = \frac{a + c}{2}\cdot h$, also Mittelwert der parallelen Seiten mal Höhe.
  ---
  $A = \frac{3 + 5}{2}\cdot 2 = 4\cdot 2 = 8$ cm².
```

Viele Integranden haben keine Stammfunktion aus bekannten Funktionen. Beispiele sind $e^{-x^2}$, die Grundlage der
Normalverteilung aus
[Kapitel 16, Normalverteilung](/lernen/mathe3/wahrscheinlichkeit/normalverteilung-und-standardisieren), oder $\sqrt{1 + x^3}$. Oft kennt man die Funktion
auch nur aus Messwerten, etwa aus einem Fahrtenschreiber. Dann berechnet man das Integral **näherungsweise**. Die
Theorie der Riemann-Summen garantiert, dass das bei integrierbaren Funktionen funktioniert: Mit feiner werdender
Zerlegung streben die Näherungen gegen das Integral. Gute Verfahren kommen mit wenigen Funktionswerten aus.

### Trapezregel

**Die Idee:** Statt Rechtecken nimmt man Trapeze. Auf jedem Teilintervall wird der Graph durch die Sehne ersetzt,
also durch die gerade Verbindung von $\big(x_{k-1} \mid f(x_{k-1})\big)$ und $\big(x_k \mid f(x_k)\big)$. Ein solches Trapez
hat die Fläche $h\cdot\frac{f(x_{k-1}) + f(x_k)}{2}$. Addiert man alle Trapeze, kommt jeder innere Funktionswert
zweimal vor, weil er zu zwei benachbarten Trapezen gehört.

:::formel[Trapezregel]
Mit $h = \frac{b-a}{n}$ und $y_k = f(a + kh)$ gilt
$$T_n = \frac h2\,\big(y_0 + 2y_1 + 2y_2 + \dots + 2y_{n-1} + y_n\big) = \frac{L_n + R_n}{2}.$$
:::

Dabei sind $y_0, \dots, y_n$ die Funktionswerte an den Teilungspunkten. Die Trapezsumme ist also der Mittelwert aus
Links- und Rechtssumme.

:::beispiel[Trapezregel für ln 2]
Wir nähern $\int_1^2 \frac1x\dd x = \ln 2$ mit $n = 4$ an.

1. **Breite:** $h = \frac{2 - 1}{4} = 0{,}25$. Teilungspunkte $1;\ 1{,}25;\ 1{,}5;\ 1{,}75;\ 2$.
2. **Werte:** $y_0 = 1$, $y_1 = 0{,}8$, $y_2 = \frac23 \approx 0{,}6667$, $y_3 = \frac47 \approx 0{,}5714$, $y_4 = 0{,}5$.
3. **Gewichte $1, 2, 2, 2, 1$:** $1 + 2\cdot(0{,}8 + 0{,}6667 + 0{,}5714) + 0{,}5 = 5{,}5762$.
4. **Faktor $\frac h2 = 0{,}125$:** $T_4 \approx 0{,}125\cdot 5{,}5762 \approx 0{,}6970$.
5. **Vergleich:** $\ln 2 \approx 0{,}6931$. Der Fehler ist etwa $0{,}0039$.

Die Trapezregel liefert hier einen etwas zu großen Wert. Warum, erklärt der nächste Absatz.
:::

```plot
x: [-0.1, 2.2]
y: [-0.3, 4.4]
achsen: { x: "x", y: "y" }
graphen:
  - { f: "x^2", label: "y = x²", farbe: 0 }
flaechen:
  - { f: "0.5*x", von: 0, bis: 0.5, farbe: 1 }
  - { f: "0.25 + 1.5*(x - 0.5)", von: 0.5, bis: 1, farbe: 1 }
  - { f: "1 + 2.5*(x - 1)", von: 1, bis: 1.5, farbe: 1 }
  - { f: "2.25 + 3.5*(x - 1.5)", von: 1.5, bis: 2, farbe: 1 }
strecken:
  - { von: [0.5, 0], nach: [0.5, 0.25], gestrichelt: true }
  - { von: [1, 0], nach: [1, 1], gestrichelt: true }
  - { von: [1.5, 0], nach: [1.5, 2.25], gestrichelt: true }
  - { von: [2, 0], nach: [2, 4], gestrichelt: true }
beschriftung: Trapezregel für eine nach oben gekrümmte Funktion mit vier Trapezen. Die Sehnen liegen über dem Graphen. Deshalb ist die Trapezsumme etwas zu groß.
```

**Über- oder Unterschätzung?** Ist $f$ **konvex**, also nach oben gekrümmt mit $f'' \ge 0$, liegen die Sehnen über dem
Graphen. Dann überschätzt die Trapezregel. Ist $f$ **konkav**, also nach unten gekrümmt mit $f'' \le 0$, unterschätzt
sie. Bei $\frac1x$ ist $f''(x) = \frac{2}{x^3} > 0$, also konvex. Das erklärt das zu große Ergebnis im Beispiel.

:::satz[Fehler der Trapezregel]
Ist $f$ zweimal stetig differenzierbar mit $|f''(x)| \le K$ auf $[a, b]$, so gilt
$$\left|\int_a^b f(x)\dd x - T_n\right| \le \frac{(b-a)\,K}{12}\,h^2.$$
:::

Dabei ist $K$ eine Schranke für die Krümmung. Halbiert man $h$, wird die Schranke viermal kleiner, weil $h$ im Quadrat
steht. Für lineare Funktionen ist $f'' = 0$, und die Trapezregel ist exakt. Für $\frac1x$ auf $[1, 2]$ ist
$|f''| \le 2$, die Schranke also $\frac{1\cdot 2}{12}\cdot 0{,}25^2 \approx 0{,}0104$. Der tatsächliche Fehler $0{,}0039$ liegt
darunter.

```aufgabe
id: ib-num-check-krummung
titel: Zu groß oder zu klein?
art: check
niveau: 1
angabe: |
  Die Trapezregel wird auf $\int_0^{\pi} \sin x\dd x$ angewendet. Auf $[0, \pi]$ ist $\sin x$ nach unten gekrümmt.
  Ist das Ergebnis zu groß oder zu klein?
teile:
  - typ: auswahl
    optionen: ['zu klein', 'zu groß', 'genau richtig']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Bei einer nach unten gekrümmten Funktion liegen die Sehnen **unter** dem Graphen. Die Trapeze schneiden Fläche ab.'
      - wert: 2
        meldung: 'Exakt ist die Trapezregel nur für lineare Funktionen. Der Sinus ist gekrümmt.'
loesung: |
  Nach unten gekrümmt heißt konkav. Die Sehnen liegen unter dem Bogen.
  ---
  Die Trapeze erfassen also weniger Fläche als der Graph. Die Trapezregel unterschätzt.
```

### Simpsonregel

Noch besser wird die Näherung, wenn man den Graphen stückweise durch **Parabeln** statt durch Strecken ersetzt. Man
fasst je zwei benachbarte Teilintervalle zusammen und legt durch die drei Punkte eine Parabel. Deshalb muss $n$ gerade
sein. Integriert man diese Parabeln, entsteht eine Formel mit den Gewichten $1, 4, 2, 4, \dots, 2, 4, 1$.

:::formel[Simpsonregel für gerades n]
$$S_n = \frac h3\,\big(y_0 + 4y_1 + 2y_2 + 4y_3 + 2y_4 + \dots + 2y_{n-2} + 4y_{n-1} + y_n\big).$$
Die Randwerte bekommen das Gewicht $1$, die Werte mit ungeradem Index das Gewicht $4$ und die inneren Werte mit geradem
Index das Gewicht $2$. Für $n = 2$ heißt sie **Keplersche Fassregel**:
$S_2 = \frac{b-a}{6}\Big(f(a) + 4f\big(\tfrac{a+b}{2}\big) + f(b)\Big)$.
:::

:::satz[Fehler der Simpsonregel]
Ist $f$ viermal stetig differenzierbar mit $|f^{(4)}(x)| \le K$, so gilt
$$\left|\int_a^b f(x)\dd x - S_n\right| \le \frac{(b-a)\,K}{180}\,h^4.$$
Halbiert man $h$, wird die Schranke sechzehnmal kleiner. Die Simpsonregel ist für Polynome bis zum Grad **drei** exakt,
denn dann ist $f^{(4)} = 0$.
:::

:::beispiel[Simpsonregel für ln 2 und Vergleich]
Dieselben Werte wie im Trapez-Beispiel, jetzt mit den Gewichten $1, 4, 2, 4, 1$:

1. **Gewichtete Summe:** $1 + 4\cdot 0{,}8 + 2\cdot 0{,}6667 + 4\cdot 0{,}5714 + 0{,}5 \approx 8{,}3190$.
2. **Faktor $\frac h3 = \frac{0{,}25}{3}$:** $S_4 \approx 0{,}6933$.
3. **Vergleich:** Der Fehler ist etwa $0{,}0001$. Die Schranke aus dem Satz ist mit $|f^{(4)}| = \frac{24}{x^5} \le 24$ gleich
   $\frac{1\cdot 24}{180}\cdot 0{,}25^4 \approx 0{,}0005$.

Bei denselben fünf Funktionswerten ist Simpson etwa $36$-mal genauer als die Trapezregel.
:::

:::beispiel[Fläche eines Grundstücks aus Messwerten]
Ein Grundstück liegt zwischen einer geraden Straße und einem Bach. Alle $10$ m entlang der Straße wurde die Breite
gemessen: $20$ m, $26$ m, $30$ m, $28$ m und $22$ m.

1. **Modell:** Die Fläche ist das Integral der Breite über die Länge $40$ m, mit $h = 10$ m und $n = 4$.
2. **Trapezregel:** $T_4 = \frac{10}{2}\cdot\big(20 + 2\cdot(26 + 30 + 28) + 22\big) = 5\cdot 210 = 1050$ m².
3. **Simpsonregel:** $S_4 = \frac{10}{3}\cdot\big(20 + 4\cdot 26 + 2\cdot 30 + 4\cdot 28 + 22\big) = \frac{10}{3}\cdot 318 = 1060$ m².
4. **Einheiten:** Breite in m mal Länge in m ergibt m².

Beide Verfahren liegen nahe beieinander. Die Fläche ist also etwa $1050$ bis $1060$ m².
:::

### Welches Verfahren wann?

In der Prüfung steht meistens dabei, welches Verfahren verlangt ist. Wenn nicht, helfen drei Überlegungen.

- **Simpson**, wenn die Zahl der Teilintervalle gerade ist und die Funktion glatt verläuft. Bei gleichem Aufwand ist
  Simpson fast immer am genauesten.
- **Trapez**, wenn die Zahl der Teilintervalle ungerade ist oder die Messpunkte verschieden weit auseinanderliegen. Die
  Trapezregel funktioniert auf jedem Teilintervall einzeln, also auch mit ungleichen Breiten.
- **Beide**, wenn du eine Kontrolle willst. Liegen Trapez- und Simpson-Wert nahe beieinander, ist das Ergebnis
  vertrauenswürdig. Weichen sie stark ab, sind die Messpunkte zu grob.

Ein Wort zur Genauigkeit: Messwerte sind selbst ungenau. Hat jede Breite im Grundstücks-Beispiel eine Unsicherheit von
einem halben Meter, ist der Unterschied zwischen $1050$ m² und $1060$ m² kleiner als die Messunsicherheit. Dann lohnt sich
kein noch genaueres Verfahren.

```reflexion
frage: Warum ist die Simpsonregel bei gleich vielen Funktionswerten fast immer genauer als die Trapezregel?
antwort: |
  Die Trapezregel ersetzt den Graphen durch Strecken. Strecken können keine Krümmung nachbilden, deshalb entsteht
  bei jeder gekrümmten Funktion ein Fehler, der wie $h^2$ schrumpft. Die Simpsonregel ersetzt den Graphen durch
  Parabeln, die sich der Krümmung anpassen. Ihr Fehler schrumpft wie $h^4$, also viel schneller. Sie ist sogar für
  kubische Polynome exakt, obwohl sie nur Parabeln verwendet, weil sich die Fehler links und rechts der Mitte aufheben.
```

:::achtung[Die Gewichte 4 und 2 vertauscht]
Eine typische Fehlrechnung für $\int_1^2 \frac1x\dd x$ mit $n = 4$:
$$S_4 \overset{?}{=} \frac{0{,}25}{3}\cdot\big(1 + 2\cdot 0{,}8 + 4\cdot 0{,}6667 + 2\cdot 0{,}5714 + 0{,}5\big) \approx 0{,}576.$$
Das liegt weit neben $\ln 2 \approx 0{,}693$. Der erste innere Punkt bekommt immer die $4$. Richtig sind die Gewichte
$1, 4, 2, 4, 1$, und das ergibt $0{,}6933$.
:::

:::achtung[Die inneren Werte nicht verdoppelt]
Eine zweite typische Fehlrechnung mit denselben Werten:
$$T_4 \overset{?}{=} \frac{0{,}25}{2}\cdot\big(1 + 0{,}8 + 0{,}6667 + 0{,}5714 + 0{,}5\big) \approx 0{,}442.$$
Jeder innere Punkt gehört zu zwei Trapezen und muss deshalb doppelt zählen. Richtig ist
$\frac{0{,}25}{2}\cdot\big(1 + 2\cdot 0{,}8 + 2\cdot 0{,}6667 + 2\cdot 0{,}5714 + 0{,}5\big) \approx 0{,}697$.
:::

:::merke[Rezept: numerische Integration]
1. $h = \frac{b-a}{n}$ festlegen. Für Simpson muss $n$ gerade sein.
2. Eine Tabelle mit $x_k$ und $y_k = f(x_k)$ anlegen, mit mindestens vier Nachkommastellen.
3. Gewichte notieren: Trapez $1, 2, 2, \dots, 2, 1$, Simpson $1, 4, 2, 4, \dots, 2, 4, 1$.
4. Gewichtete Summe bilden und mit $\frac h2$ beziehungsweise $\frac h3$ multiplizieren.
5. Plausibilität: Liegt das Ergebnis zwischen $m\,(b-a)$ und $M\,(b-a)$? Passt die Krümmung zur Über- oder Unterschätzung?
:::

```aufgabe
id: ib-trapez
titel: Trapezregel anwenden
niveau: 1
lernziel: 9
kompetenz: rechnen
angabe: |
  Berechne $\int_0^2 x^2\dd x$ näherungsweise mit der Trapezregel für $n = 4$ und gib den Fehler zum exakten Wert
  $\frac83$ an.
teile:
  - typ: zahl
    label: '$T_4$'
    loesung: "0.25*(0 + 2*(0.25 + 1 + 2.25) + 4)"
    anzeige: '2{,}75'
    fehler:
      - wert: "0.25*(0 + 0.25 + 1 + 2.25 + 4)"
        meldung: Die inneren Werte gehören zu je zwei Trapezen und zählen doppelt.
      - wert: "0.5*(0 + 2*(0.25 + 1 + 2.25) + 4)"
        meldung: 'Der Vorfaktor ist $\frac h2 = 0{,}25$, nicht $h = 0{,}5$.'
  - typ: zahl
    label: 'Fehler $T_4 - \tfrac83$'
    loesung: "2.75 - 8/3"
    anzeige: '\tfrac{1}{12} \approx 0{,}0833'
    fehler:
      - wert: "8/3 - 2.75"
        meldung: 'Gefragt ist $T_4 - \frac83$. Die Trapezregel überschätzt hier, der Fehler ist positiv.'
hinweise:
  - '$h = 0{,}5$, Werte $y_k$ an $0;\ 0{,}5;\ 1;\ 1{,}5;\ 2$. Gewichte $1, 2, 2, 2, 1$, Faktor $\frac h2$.'
loesung: |
  **Ansatz:** Trapezregel mit $h = 0{,}5$. Werte: $y_0 = 0$, $y_1 = 0{,}25$, $y_2 = 1$, $y_3 = 2{,}25$, $y_4 = 4$.
  ---
  $T_4 = \frac{0{,}5}{2}\big(0 + 2\cdot(0{,}25 + 1 + 2{,}25) + 4\big) = 0{,}25\cdot 11 = 2{,}75$.
  ---
  Fehler: $2{,}75 - 2{,}6\overline{6} = \frac{1}{12} \approx 0{,}083$. **Plausibilität:** Die Trapezregel überschätzt, weil $x^2$ konvex ist.
```

```aufgabe
id: ib-simpson-exakt
titel: Simpson ist für Polynome dritten Grades exakt
niveau: 1
lernziel: 9
kompetenz: rechnen
angabe: |
  Berechne $\int_0^2 x^3\dd x$ mit der Keplerschen Fassregel ($n = 2$) und vergleiche mit dem exakten Wert.
teile:
  - typ: zahl
    label: '$S_2$'
    loesung: "(2/6)*(0 + 4*1 + 8)"
    anzeige: '4'
    fehler:
      - wert: "(2/6)*(0 + 1 + 8)"
        meldung: 'Der Mittelwert $f(1)$ bekommt das Gewicht $4$.'
      - wert: "(2/3)*(0 + 4*1 + 8)"
        meldung: 'Der Faktor ist $\frac{b - a}{6} = \frac26$. Mit $h = 1$ ist das dasselbe wie $\frac h3 = \frac13$.'
  - typ: zahl
    label: 'exakter Wert'
    loesung: "16/4"
    anzeige: '4'
    fehler:
      - wert: "16"
        meldung: 'Die Stammfunktion ist $\frac{x^4}{4}$. Es fehlt das Teilen durch $4$.'
hinweise:
  - '$S_2 = \frac{b - a}{6}\big(f(a) + 4f(\frac{a+b}{2}) + f(b)\big)$ mit $a = 0$, $b = 2$ und Mitte $1$.'
loesung: |
  **Ansatz:** Keplersche Fassregel mit den Stellen $0$, $1$ und $2$.
  ---
  $S_2 = \frac{2 - 0}{6}\big(f(0) + 4f(1) + f(2)\big) = \frac13(0 + 4 + 8) = 4$.
  ---
  Exakt: $\big[\frac{x^4}{4}\big]_0^2 = 4$. **Kein Zufall:** Die Simpsonregel ist für alle Polynome bis zum Grad $3$ exakt.
```

```aufgabe
id: ib-simpson
titel: Simpsonregel für ln 3
niveau: 2
lernziel: 9
kompetenz: rechnen
angabe: |
  Berechne $\int_1^3 \frac{1}{x}\dd x$ mit der Simpsonregel für $n = 2$ und für $n = 4$ auf vier Nachkommastellen.
  Vergleiche mit $\ln 3 \approx 1{,}0986$.
teile:
  - typ: zahl
    label: '$S_2$'
    loesung: "(1/3)*(1 + 4/2 + 1/3)"
    anzeige: '\tfrac{10}{9} \approx 1{,}1111'
    toleranz: 0.0005
    fehler:
      - wert: "(1/3)*(1 + 1/2 + 1/3)"
        meldung: 'Der mittlere Wert $f(2) = \frac12$ bekommt das Gewicht $4$.'
  - typ: zahl
    label: '$S_4$'
    loesung: "(0.5/3)*(1 + 4/1.5 + 2/2 + 4/2.5 + 1/3)"
    anzeige: '1{,}1'
    toleranz: 0.0005
    fehler:
      - wert: "(0.5/3)*(1 + 2/1.5 + 4/2 + 2/2.5 + 1/3)"
        meldung: 'Die Gewichte $4$ und $2$ sind vertauscht. Der erste innere Punkt $1{,}5$ bekommt die $4$.'
hinweise:
  - 'Für $n = 2$ ist $h = 1$, und die Stützstellen sind $1, 2, 3$.'
  - 'Für $n = 4$: $h = 0{,}5$, Stützstellen $1;\ 1{,}5;\ 2;\ 2{,}5;\ 3$, Gewichte $1, 4, 2, 4, 1$.'
loesung: |
  **Ansatz:** Simpsonregel zweimal anwenden, einmal grob und einmal fein, und die Fehler vergleichen.
  ---
  $n = 2$, $h = 1$: $S_2 = \frac13\big(1 + 4\cdot\frac12 + \frac13\big) = \frac13\cdot\frac{10}{3} = \frac{10}{9} \approx 1{,}1111$.
  ---
  $n = 4$, $h = 0{,}5$: $S_4 = \frac16\big(1 + 4\cdot\frac23 + 2\cdot\frac12 + 4\cdot\frac25 + \frac13\big) = \frac16\cdot 6{,}6 = 1{,}1$.
  ---
  Fehler: etwa $0{,}0125$ und $0{,}0014$. Halbieren von $h$ hat den Fehler etwa um den Faktor $9$ verkleinert. Für sehr kleine $h$ wäre es der Faktor $16$.
```

```aufgabe
id: ib-trapez-konvex
titel: Über- oder Unterschätzung?
niveau: 2
lernziel: 9
kompetenz: begruenden
angabe: |
  Die Trapezregel wird auf $\int_0^1 e^{-x^2}\dd x$ mit $n = 2$ angewendet. Berechne $T_2$ auf vier
  Nachkommastellen. Der wahre Wert ist $\approx 0{,}7468$. Warum ist $T_2$ zu klein?
teile:
  - typ: zahl
    label: '$T_2$'
    loesung: "0.25*(1 + 2*exp(-0.25) + exp(-1))"
    anzeige: '\approx 0{,}7314'
    toleranz: 0.0005
    fehler:
      - wert: "0.25*(1 + exp(-0.25) + exp(-1))"
        meldung: Der innere Wert $e^{-0{,}25}$ gehört zu zwei Trapezen und zählt doppelt.
  - typ: text
    label: 'Begründung'
    muster: |
      Auf $[0, 1]$ ist $e^{-x^2}$ überwiegend konkav, also nach unten gekrümmt. Es gilt $f''(x) = (4x^2 - 2)e^{-x^2} < 0$
      für $x < \frac{1}{\sqrt2}$. Bei konkaven Funktionen liegen die Sehnen unter dem Graphen. Die Trapeze schneiden
      Fläche ab, und die Trapezregel unterschätzt.
hinweise:
  - '$h = 0{,}5$, Stützstellen $0;\ 0{,}5;\ 1$.'
  - 'Untersuche das Vorzeichen von $f''''(x) = (4x^2 - 2)e^{-x^2}$ auf $[0, 1]$.'
loesung: |
  **Ansatz:** Trapezregel mit $h = 0{,}5$, danach die Krümmung untersuchen.
  ---
  $T_2 = \frac{0{,}5}{2}\big(e^0 + 2e^{-0{,}25} + e^{-1}\big) = 0{,}25\cdot(1 + 1{,}5576 + 0{,}3679) \approx 0{,}7314$.
  ---
  $f''(x) = (4x^2 - 2)e^{-x^2}$ ist für $0 \le x < \frac{1}{\sqrt2} \approx 0{,}71$ negativ. Dort ist $f$ konkav, die Sehnen liegen unter dem Graphen.
  ---
  Dieser Effekt überwiegt, also ist $T_2$ zu klein. **Vergleich:** Die Simpsonregel mit denselben drei Werten liefert etwa $0{,}7472$.
```

```aufgabe
id: ib-num-fluss
titel: Querschnitt eines kleinen Flusses aus Messwerten
niveau: 2
lernziel: 9
kompetenz: modellieren
angabe: |
  Ein kleiner Fluss ist $8$ m breit. Alle $2$ m wurde die Wassertiefe gemessen:

  | Abstand vom Ufer in m | Tiefe in m |
  |---|---|
  | $0$ | $0$. |
  | $2$ | $1{,}2$. |
  | $4$ | $1{,}8$. |
  | $6$ | $1{,}4$. |
  | $8$ | $0$. |

  a) Schätze die Querschnittsfläche mit der Simpsonregel.

  b) Das Wasser fließt im Mittel mit $0{,}5$ m/s. Wie viele Kubikmeter fließen pro Sekunde durch den Querschnitt?
teile:
  - typ: zahl
    label: 'a) Querschnitt'
    einheit: m²
    loesung: "(2/3)*(0 + 4*1.2 + 2*1.8 + 4*1.4 + 0)"
    anzeige: '\approx 9{,}33'
    toleranz: 0.01
    fehler:
      - wert: "1*(0 + 2*(1.2 + 1.8 + 1.4) + 0)"
        meldung: 'Das ist die Trapezregel. Für Simpson brauchst du die Gewichte $1, 4, 2, 4, 1$ und den Faktor $\frac h3$.'
      - wert: "(2/3)*(0 + 2*1.2 + 4*1.8 + 2*1.4 + 0)"
        meldung: 'Die Gewichte $4$ und $2$ sind vertauscht. Der erste innere Punkt bekommt die $4$.'
  - typ: zahl
    label: 'b) Durchfluss'
    einheit: m³/s
    loesung: "0.5*(2/3)*(0 + 4*1.2 + 2*1.8 + 4*1.4 + 0)"
    toleranz: 0.01
    fehler:
      - wert: "(2/3)*(0 + 4*1.2 + 2*1.8 + 4*1.4 + 0)/0.5"
        meldung: 'Fläche mal Geschwindigkeit ergibt Volumen pro Zeit: m² mal m/s ist m³/s. Hier wird multipliziert, nicht geteilt.'
hinweise:
  - '$h = 2$ m. Die Querschnittsfläche ist das Integral der Tiefe über die Breite.'
  - 'Simpson: $\frac h3\,(y_0 + 4y_1 + 2y_2 + 4y_3 + y_4)$. Für b) die Fläche mit der Geschwindigkeit multiplizieren.'
loesung: |
  **Ansatz:** Die Querschnittsfläche ist das Integral der Tiefe über die Breite. Wir kennen nur fünf Messwerte, also rechnen wir numerisch mit $h = 2$ m und $n = 4$.
  ---
  a) $S_4 = \frac23\,\big(0 + 4\cdot 1{,}2 + 2\cdot 1{,}8 + 4\cdot 1{,}4 + 0\big) = \frac23\cdot 14 \approx 9{,}33$ m².
  ---
  b) Durchfluss $=$ Fläche mal Geschwindigkeit $\approx 9{,}33\ \text{m}^2\cdot 0{,}5\ \tfrac{\text{m}}{\text{s}} \approx 4{,}67\ \tfrac{\text{m}^3}{\text{s}}$.
  ---
  **Plausibilität:** Die Trapezregel ergibt $8{,}8$ m². Das Flussbett ist nach unten gewölbt, die Tiefe als Funktion des Abstands also konkav, und dann unterschätzt die Trapezregel. Der Simpson-Wert liegt darüber, das passt.
gefuehrt:
  - text: Wie groß ist die Schrittweite $h$, und ist $n$ gerade?
    teil: { typ: zahl, loesung: "2" }
    erklaerung: 'Die Messpunkte liegen $2$ m auseinander, also $h = 2$ m. Es gibt $n = 4$ Teilintervalle, das ist gerade.'
  - text: Berechne die gewichtete Summe $y_0 + 4y_1 + 2y_2 + 4y_3 + y_4$.
    teil: { typ: zahl, loesung: "0 + 4*1.2 + 2*1.8 + 4*1.4 + 0", fehler: [ { wert: "0 + 2*1.2 + 4*1.8 + 2*1.4 + 0", meldung: 'Der erste innere Wert $1{,}2$ bekommt das Gewicht $4$.' } ] }
    erklaerung: '$4{,}8 + 3{,}6 + 5{,}6 = 14$.'
  - text: Multipliziere mit $\frac h3$. Wie groß ist der Querschnitt?
    teil: { typ: zahl, loesung: "28/3", toleranz: 0.01 }
    erklaerung: '$\frac23\cdot 14 = \frac{28}{3} \approx 9{,}33$ m².'
  - text: Berechne den Durchfluss.
    teil: { typ: zahl, loesung: "14/3", toleranz: 0.01 }
    erklaerung: '$9{,}33\ \text{m}^2\cdot 0{,}5\ \tfrac{\text{m}}{\text{s}} \approx 4{,}67\ \tfrac{\text{m}^3}{\text{s}}$.'
```

```aufgabe
id: ib-num-fehler-finden
titel: Fehlersuche bei der Simpsonregel
niveau: 2
lernziel: 9
kompetenz: begruenden
angabe: |
  Eine Mitschülerin berechnet $\int_0^3 x^2\dd x$ mit der Simpsonregel und $n = 3$:
  $$S_3 = \frac13\,\big(0 + 4\cdot 1 + 2\cdot 4 + 9\big) = 7.$$
  a) Was ist falsch?

  b) Berechne $S_2$ korrekt mit $n = 2$.
teile:
  - typ: auswahl
    label: 'a) Der Fehler'
    optionen:
      - 'Die Simpsonregel verlangt eine gerade Anzahl $n$ von Teilintervallen.'
      - 'Der Faktor müsste $\frac h2$ sein.'
      - 'Die Randwerte müssten das Gewicht $4$ haben.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$\frac h2$ gehört zur Trapezregel. Bei Simpson ist der Faktor $\frac h3$.'
      - wert: 2
        meldung: Die Randwerte haben bei Simpson immer das Gewicht $1$.
  - typ: zahl
    label: 'b) $S_2$'
    loesung: "(1.5/3)*(0 + 4*2.25 + 9)"
    fehler:
      - wert: "(1.5/3)*(0 + 2.25 + 9)"
        meldung: 'Der mittlere Wert $f(1{,}5) = 2{,}25$ bekommt das Gewicht $4$.'
hinweise:
  - 'Simpson fasst je zwei Teilintervalle zu einer Parabel zusammen. Was bedeutet das für $n$?'
  - 'Für $n = 2$ ist $h = 1{,}5$, die Stützstellen sind $0;\ 1{,}5;\ 3$.'
loesung: |
  **Ansatz:** Die Simpsonregel legt durch je drei Punkte eine Parabel, sie braucht also Paare von Teilintervallen.
  ---
  a) Bei $n = 3$ bleibt ein Teilintervall übrig. Die Formel ist dann nicht anwendbar, und $7$ ist falsch. Der wahre Wert ist $9$.
  ---
  b) $n = 2$, $h = 1{,}5$: $S_2 = \frac{1{,}5}{3}\big(0 + 4\cdot 2{,}25 + 9\big) = 0{,}5\cdot 18 = 9$.
  ---
  **Kontrolle:** $\int_0^3 x^2\dd x = 9$. Simpson ist für Polynome bis Grad $3$ exakt, das passt.
```

```aufgabe
id: ib-num-fehler-n
titel: Wie viele Trapeze garantieren die Genauigkeit?
niveau: 3
lernziel: 9
kompetenz: anwenden
angabe: |
  $\int_0^1 e^x\dd x$ soll mit der Trapezregel so berechnet werden, dass der Fehler nach der Fehlerschranke sicher
  kleiner als $0{,}001$ ist.

  a) Gib eine Schranke $K$ für $|f''(x)|$ auf $[0, 1]$ an.

  b) Wie viele Teilintervalle $n$ braucht man mindestens?
teile:
  - typ: zahl
    label: 'a) $K$'
    loesung: "e"
    anzeige: 'e \approx 2{,}718'
    fehler:
      - wert: "1"
        meldung: '$f''''(x) = e^x$ ist auf $[0, 1]$ am größten bei $x = 1$. Dort ist der Wert $e$, nicht $1$.'
  - typ: zahl
    label: 'b) kleinstes $n$'
    loesung: "16"
    toleranz: 0.1
    fehler:
      - wert: "15"
        meldung: 'Für $n = 15$ ist die Schranke $\frac{e}{12\cdot 225} \approx 0{,}00101$, also noch nicht kleiner als $0{,}001$.'
hinweise:
  - 'Die zweite Ableitung von $e^x$ ist $e^x$. Wo ist sie auf $[0, 1]$ am größten?'
  - 'Löse $\frac{(b - a)K}{12}h^2 < 0{,}001$ mit $h = \frac1n$ nach $n$ auf.'
loesung: |
  **Ansatz:** Die Fehlerschranke $\frac{(b-a)K}{12}h^2$ soll kleiner als $0{,}001$ sein. Dazu brauchen wir $K$ und lösen dann nach $n$ auf. Das ist eine Umkehraufgabe.
  ---
  a) $f''(x) = e^x$ wächst, das Maximum auf $[0, 1]$ ist $e^1 = e$. Also $K = e$.
  ---
  b) Mit $h = \frac1n$: $\frac{e}{12n^2} < 0{,}001$ ist gleichwertig mit $n^2 > \frac{e}{0{,}012} \approx 226{,}5$, also $n > 15{,}05$. Das kleinste $n$ ist $16$.
  ---
  **Probe:** Für $n = 16$ ist die Schranke $\frac{e}{12\cdot 256} \approx 0{,}00088$. Der tatsächliche Fehler ist sogar nur etwa $0{,}00056$.
```

## Gemischte Wiederholung

In der Prüfung steht nicht dabei, aus welchem Kapitel eine Aufgabe stammt. Du musst selbst erkennen, welches Werkzeug
passt. Deshalb mischt diese Lektion Aufgaben aus diesem Kapitel mit Aufgaben aus früheren Kapiteln, die du hier immer
wieder brauchst. Dieses gemischte Üben fühlt sich schwerer an als Üben in Blöcken. Es verankert den Stoff aber
nachweislich besser. Löse jede Aufgabe zuerst ohne Hinweise.

```aufgabe
id: ib-wh-summe
titel: "Wiederholung Kapitel 8: Summe der ungeraden Zahlen"
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Berechne $\displaystyle\sum_{k=1}^{12} (2k - 1) = 1 + 3 + 5 + \dots + 23$ mit der Summenformel für $\sum k$. Solche
  Umformungen brauchst du bei exakten Integralen. Zum Nachlesen:
  [Kapitel 8, Das Summenzeichen](/lernen/mathe3/folgen-reihen/das-summenzeichen).
teile:
  - typ: zahl
    loesung: "2*12*13/2 - 12"
    fehler:
      - wert: "2*12*13/2 - 1"
        meldung: 'Die $-1$ steht in **jedem** der zwölf Summanden. Sie wird also zwölfmal abgezogen.'
      - wert: "12*13/2"
        meldung: 'Das ist nur $\sum k$. Den Faktor $2$ und die $-1$ in jedem Summanden musst du noch berücksichtigen.'
hinweise:
  - 'Zerlege: $\sum (2k - 1) = 2\sum k - \sum 1$. Die Summe $\sum_{k=1}^{12} 1$ hat zwölf Summanden.'
loesung: |
  **Ansatz:** Summen darf man gliedweise zerlegen und konstante Faktoren vorziehen: $\sum_{k=1}^{12}(2k - 1) = 2\sum_{k=1}^{12} k - \sum_{k=1}^{12} 1$.
  ---
  $2\cdot\frac{12\cdot 13}{2} - 12 = 156 - 12 = 144$. **Probe:** Die Summe der ersten $n$ ungeraden Zahlen ist $n^2$, und $12^2 = 144$.
```

```aufgabe
id: ib-wh-folge
titel: "Wiederholung Kapitel 11: Grenzwert einer rationalen Folge"
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Berechne $\displaystyle\lim_{n\to\infty}\frac{3n^2 + n}{2n^2 - 1}$. Zum Nachlesen:
  [Kapitel 11, Rationale Folgen](/lernen/mathe3/grenzwerte-folgen/rationale-folgen-wurzeltrick-und-standardgrenzwerte).
teile:
  - typ: zahl
    loesung: "3/2"
    fehler:
      - wert: "1"
        meldung: 'Zähler und Nenner gehen gegen unendlich, aber das ergibt nicht automatisch $1$. Kürze durch die höchste Potenz $n^2$.'
      - wert: "0"
        meldung: 'Zähler und Nenner wachsen gleich schnell, beide wie $n^2$. Der Grenzwert ist das Verhältnis der führenden Koeffizienten.'
hinweise:
  - 'Teile Zähler und Nenner durch $n^2$.'
loesung: |
  **Ansatz:** Zähler und Nenner durch die höchste Potenz $n^2$ teilen: $\frac{3 + \frac1n}{2 - \frac{1}{n^2}}$.
  ---
  Die Brüche $\frac1n$ und $\frac{1}{n^2}$ gehen gegen $0$. Der Grenzwert ist $\frac32$. Genau so rechnest du die Grenzwerte von Ober- und Untersummen.
```

```aufgabe
id: ib-wh-stetig
titel: "Wiederholung Kapitel 12: Stetig machen"
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Für welches $a$ ist $f(x) = x^2 + 1$ für $x \le 2$ und $f(x) = a\,x - 1$ für $x > 2$ an der Stelle $x = 2$ stetig?
  Zum Nachlesen:
  [Kapitel 12, Stückweise definierte Funktionen](/lernen/mathe3/grenzwerte-stetigkeit/stueckweise-definierte-funktionen).
teile:
  - typ: zahl
    label: '$a$'
    loesung: "3"
    fehler:
      - wert: "2"
        meldung: 'Vermutlich hast du aus $2a - 1 = 5$ den Schritt $2a = 5 - 1$ gemacht. Beim Umformen wandert die $-1$ als $+1$ auf die andere Seite.'
hinweise:
  - 'Stetig bei $2$ heißt: Der rechtsseitige Grenzwert $2a - 1$ ist gleich $f(2) = 5$.'
loesung: |
  **Ansatz:** Bei $x = 2$ müssen beide Teile denselben Wert liefern.
  ---
  $2^2 + 1 = 5$ und $2a - 1 = 5$ ergibt $a = 3$. **Bezug zu diesem Kapitel:** Auch ohne Stetigkeit wäre $f$ auf $[0, 4]$ integrierbar, weil nur eine Sprungstelle vorläge.
```

```aufgabe
id: ib-wh-mws-diff
titel: "Wiederholung Kapitel 13: Mittelwertsatz der Differentialrechnung"
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Bestimme für $f(x) = x^3$ auf $[0, 3]$ die Stelle $\xi$ aus dem Mittelwertsatz der Differentialrechnung, also mit
  $f'(\xi) = \frac{f(3) - f(0)}{3}$. Runde auf drei Nachkommastellen. Zum Nachlesen:
  [Kapitel 13, Mittelwertsatz](/lernen/mathe3/differenzierbarkeit/satz-von-rolle-und-mittelwertsatz).
teile:
  - typ: zahl
    label: '$\xi$'
    loesung: "sqrt(3)"
    toleranz: 0.001
    fehler:
      - wert: "9"
        meldung: '$9$ ist die mittlere Steigung. Gesucht ist die Stelle, an der die Ableitung $3\xi^2$ diesen Wert hat.'
      - wert: "nthRoot(9, 3)"
        meldung: 'Du hast $\xi^3 = 9$ gelöst. Die Bedingung betrifft aber die **Ableitung** $f''(\xi) = 3\xi^2$.'
hinweise:
  - 'Mittlere Steigung $\frac{27 - 0}{3} = 9$. Löse $3\xi^2 = 9$.'
loesung: |
  **Ansatz:** Mittlere Steigung berechnen und gleich der Ableitung setzen.
  ---
  $\frac{27 - 0}{3} = 9$ und $f'(\xi) = 3\xi^2 = 9$, also $\xi^2 = 3$ und $\xi = \sqrt3 \approx 1{,}732$. **Vergleich:** Der Integral-Mittelwertsatz für $f' = 3x^2$ auf $[0, 3]$ liefert dieselbe Stelle, denn der Mittelwert von $3x^2$ ist $\frac{27}{3} = 9$.
```

```aufgabe
id: ib-wh-substitution
titel: "Wiederholung Kapitel 10: Ein Integral mit Substitution"
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Berechne $\displaystyle\int_0^1 x\,e^{x^2}\dd x$ exakt und auf drei Nachkommastellen. Zum Nachlesen:
  [Kapitel 10, Substitution](/lernen/mathe3/integralrechnung/substitution-die-kettenregel-rueckwaerts).
teile:
  - typ: zahl
    loesung: "(e - 1)/2"
    anzeige: '\tfrac{e - 1}{2} \approx 0{,}859'
    toleranz: 0.001
    fehler:
      - wert: "e - 1"
        meldung: 'Die Ableitung von $x^2$ ist $2x$, im Integranden steht nur $x$. Es fehlt der Faktor $\frac12$.'
      - wert: "e/2"
        meldung: 'Setze auch die untere Grenze ein: $\frac12 e^{0} = \frac12$ muss abgezogen werden.'
hinweise:
  - 'Substituiere $u = x^2$, dann ist $\dd u = 2x\dd x$.'
  - 'Eine Stammfunktion ist $\frac12 e^{x^2}$. Prüfe sie durch Ableiten.'
loesung: |
  **Ansatz:** Im Integranden steht $x$, also bis auf den Faktor $2$ die Ableitung der inneren Funktion $x^2$. Das passt zur Substitution.
  ---
  Eine Stammfunktion ist $\frac12 e^{x^2}$, denn $\big(\frac12 e^{x^2}\big)' = \frac12 e^{x^2}\cdot 2x = x\,e^{x^2}$.
  ---
  Hauptsatz: $\Big[\frac12 e^{x^2}\Big]_0^1 = \frac12 e - \frac12 = \frac{e - 1}{2} \approx 0{,}859$.
```

```aufgabe
id: ib-wh-verfahren-integral
titel: Welches Verfahren passt bei diesen Integralen?
niveau: 1
lernziel: 9
kompetenz: verstehen
angabe: |
  Entscheide für jede Aufgabe, welches Verfahren passt. Rechne nichts aus.
teile:
  - typ: auswahl
    label: '$\int_0^2 (3x^2 - x)\dd x$ berechnen'
    optionen: ['Hauptsatz mit Stammfunktion', 'Grenzwert, weil uneigentlich', 'Trapez- oder Simpsonregel', 'Summenformel und Grenzwert von Obersummen']
    richtig: [0]
    fehler:
      - wert: 2
        meldung: 'Für ein Polynom gibt es eine einfache Stammfunktion. Eine Näherung ist unnötig.'
  - typ: auswahl
    label: '$\int_1^\infty e^{-x}\dd x$ berechnen'
    optionen: ['Hauptsatz mit Stammfunktion', 'Grenzwert, weil uneigentlich', 'Trapez- oder Simpsonregel', 'Summenformel und Grenzwert von Obersummen']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Die obere Grenze ist unendlich. Man kann $\infty$ nicht in die Stammfunktion einsetzen, sondern braucht einen Grenzwert.'
  - typ: auswahl
    label: '$\int_0^1 \sqrt{1 + x^5}\dd x$ auf drei Stellen'
    optionen: ['Hauptsatz mit Stammfunktion', 'Grenzwert, weil uneigentlich', 'Trapez- oder Simpsonregel', 'Summenformel und Grenzwert von Obersummen']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: 'Für $\sqrt{1 + x^5}$ gibt es keine Stammfunktion aus bekannten Funktionen.'
  - typ: auswahl
    label: '„Berechne $\int_0^3 x^2\dd x$ als Grenzwert von Obersummen“'
    optionen: ['Hauptsatz mit Stammfunktion', 'Grenzwert, weil uneigentlich', 'Trapez- oder Simpsonregel', 'Summenformel und Grenzwert von Obersummen']
    richtig: [3]
    fehler:
      - wert: 0
        meldung: 'Die Angabe verlangt ausdrücklich Obersummen. Die Stammfunktion ist nur als Probe erlaubt.'
hinweise:
  - 'Frage dich zuerst: Ist das Intervall endlich und der Integrand beschränkt? Gibt es eine bekannte Stammfunktion? Was verlangt die Angabe wörtlich?'
loesung: |
  **Ansatz:** Drei Fragen entscheiden. Gibt es eine unendliche Grenze oder einen Pol? Gibt es eine bekannte Stammfunktion? Schreibt die Angabe ein Verfahren vor?
  ---
  Polynom: Hauptsatz. Grenze unendlich: uneigentliches Integral mit Grenzwert. Keine Stammfunktion: numerisch.
  ---
  Ausdrücklich „als Grenzwert von Obersummen“: Summenformel und Grenzwert, die Stammfunktion nur als Probe.
```

```aufgabe
id: ib-wh-verfahren-integrierbar
titel: Welches Argument zeigt die Integrierbarkeit?
niveau: 2
lernziel: 4
kompetenz: begruenden
angabe: |
  Entscheide für jede Funktion, mit welchem Argument man am schnellsten begründet, ob sie auf dem Intervall
  integrierbar ist. Rechne nichts aus.
teile:
  - typ: auswahl
    label: '$e^x\sin x$ auf $[0, \pi]$'
    optionen: ['stetig', 'monoton', 'beschränkt mit endlich vielen Sprüngen', 'nicht integrierbar']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$e^x\sin x$ steigt und fällt auf $[0, \pi]$. Sie ist nicht monoton, aber stetig.'
  - typ: auswahl
    label: '$f(x) = \frac1k$ für $\frac{1}{k+1} < x \le \frac1k$ ($k = 1, 2, 3, \dots$) und $f(0) = 0$, auf $[0, 1]$'
    optionen: ['stetig', 'monoton', 'beschränkt mit endlich vielen Sprüngen', 'nicht integrierbar']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Die Funktion springt bei jeder Stelle $\frac12, \frac13, \frac14, \dots$ Sie ist nicht stetig, aber nie fallend.'
      - wert: 2
        meldung: 'Die Sprungstellen $\frac12, \frac13, \frac14, \dots$ sind unendlich viele. Der Satz über endlich viele Sprünge greift deshalb nicht.'
      - wert: 3
        meldung: 'Sprünge allein verhindern die Integrierbarkeit nicht. Diese Funktion ist monoton.'
  - typ: auswahl
    label: '$f(x) = 2$ auf $[0, 1)$, $f(x) = -1$ auf $[1, 2)$, $f(x) = 3$ auf $[2, 3]$'
    optionen: ['stetig', 'monoton', 'beschränkt mit endlich vielen Sprüngen', 'nicht integrierbar']
    richtig: [2]
    fehler:
      - wert: 1
        meldung: 'Die Funktion fällt erst von $2$ auf $-1$ und steigt dann auf $3$. Sie ist nicht monoton.'
  - typ: auswahl
    label: '$\frac{1}{x - 1}$ für $x \ne 1$ und $f(1) = 0$, auf $[0, 2]$'
    optionen: ['stetig', 'monoton', 'beschränkt mit endlich vielen Sprüngen', 'nicht integrierbar']
    richtig: [3]
    fehler:
      - wert: 2
        meldung: 'Bei $x = 1$ ist das kein Sprung, sondern ein Pol. Die Funktion ist unbeschränkt.'
hinweise:
  - 'Prüfe zuerst die Beschränktheit. Dann suche die stärkste Eigenschaft: stetig, monoton oder nur wenige Sprünge.'
  - 'Ein Pol macht eine Funktion unbeschränkt. Ein Sprung tut das nicht.'
loesung: |
  **Ansatz:** Beschränktheit ist die erste Hürde. Danach genügt eine der Klassen aus [14.5 Welche Funktionen sind integrierbar?](/lernen/mathe3/integrierbarkeit/welche-funktionen-sind-integrierbar).
  ---
  $e^x\sin x$ ist stetig. Die Treppe mit den Stufen $\frac1k$ ist monoton wachsend, hat aber unendlich viele Sprünge. Hier hilft also nur das Argument „monoton“. Die dritte Funktion ist nicht monoton, aber beschränkt mit zwei Sprüngen.
  ---
  $\frac{1}{x - 1}$ hat bei $x = 1$ einen Pol und ist unbeschränkt. Sie ist im Riemann-Sinn nicht integrierbar.
```

```aufgabe
id: ib-wh-integralfunktion
titel: Wendepunkt einer Integralfunktion
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Es sei $F(x) = \displaystyle\int_0^x (t^2 - 4t + 3)\dd t$. Die Kurvendiskussion kennst du aus
  [Kapitel 9, Die vollständige Kurvendiskussion](/lernen/mathe3/differentialrechnung/die-vollstaendige-kurvendiskussion).

  a) An welchen Stellen hat $F$ lokale Extrema?

  b) An welcher Stelle hat $F$ einen Wendepunkt?

  c) Berechne $F(3)$.
teile:
  - typ: menge
    label: 'a) Extremstellen'
    loesung: ["1", "3"]
    fehler:
      - wert: ["2"]
        meldung: 'Bei $x = 2$ hat der **Integrand** sein Minimum. Extremstellen von $F$ liegen aber bei den Nullstellen des Integranden.'
  - typ: zahl
    label: 'b) Wendestelle'
    loesung: "2"
    fehler:
      - wert: "1"
        meldung: 'Bei $x = 1$ ist $F'' = 0$, dort liegt ein Extremum. Für den Wendepunkt brauchst du $F'''' = 0$.'
  - typ: zahl
    label: 'c) $F(3)$'
    loesung: "27/3 - 2*9 + 9"
    fehler:
      - wert: "-18"
        meldung: 'Die Stammfunktion von $4t$ ist $2t^2$, nicht $4t^2$. Beim Integrieren wird durch die neue Hochzahl $2$ geteilt.'
hinweise:
  - "Nach dem Hauptsatz ist $F'(x) = x^2 - 4x + 3 = (x - 1)(x - 3)$."
  - "Wendepunkt: $F''(x) = 2x - 4 = 0$. Für c) die Stammfunktion $\\frac{x^3}{3} - 2x^2 + 3x$ verwenden."
loesung: |
  **Ansatz:** Nach dem Hauptsatz ist $F' = $ Integrand. Damit wird die Kurvendiskussion von $F$ zu einer Untersuchung des Integranden.
  ---
  a) $F'(x) = x^2 - 4x + 3 = (x - 1)(x - 3)$. Vorzeichenwechsel bei $1$ (von plus nach minus, Hochpunkt) und bei $3$ (von minus nach plus, Tiefpunkt).
  ---
  b) $F''(x) = 2x - 4 = 0$ bei $x = 2$. Dort hat der Integrand sein Minimum, und $F$ hat einen Wendepunkt.
  ---
  c) $F(3) = \frac{27}{3} - 2\cdot 9 + 3\cdot 3 = 9 - 18 + 9 = 0$. **Deutung:** Die Fläche über der Achse auf $[0, 1]$ wird durch die Fläche unter der Achse auf $[1, 3]$ genau aufgehoben.
```

```aufgabe
id: ib-wh-uneig-mittel
titel: Mittelwert auf einem wachsenden Intervall
niveau: 2
lernziel: 8
kompetenz: anwenden
angabe: |
  Berechne den Mittelwert von $f(x) = \frac{1}{x^2}$ auf $[1, b]$ als Term in $b$ und für $b = 4$. Was passiert mit dem
  Mittelwert für $b \to \infty$, obwohl $\int_1^\infty \frac{1}{x^2}\dd x = 1$ endlich ist?
teile:
  - typ: term
    label: 'Mittelwert auf $[1, b]$'
    variable: b
    bereich: [1.5, 10]
    loesung: "1/b"
    fehler:
      - wert: "1 - 1/b"
        meldung: 'Das ist das Integral. Der Mittelwert ist das Integral geteilt durch die Länge $b - 1$.'
  - typ: zahl
    label: 'Mittelwert für $b = 4$'
    loesung: "1/4"
    fehler:
      - wert: "3/4"
        meldung: 'Das ist das Integral $1 - \frac14$. Teile noch durch die Länge $3$.'
  - typ: zahl
    label: 'Grenzwert für $b \to \infty$'
    loesung: "0"
    fehler:
      - wert: "1"
        meldung: 'Das Integral geht gegen $1$, aber es wird durch die immer größere Länge $b - 1$ geteilt.'
hinweise:
  - '$\int_1^b \frac{1}{x^2}\dd x = 1 - \frac1b = \frac{b - 1}{b}$.'
  - 'Teile durch $b - 1$ und kürze.'
loesung: |
  **Ansatz:** Mittelwert ist Integral durch Intervalllänge, hier $\frac{1}{b - 1}\int_1^b \frac{1}{x^2}\dd x$.
  ---
  $\int_1^b \frac{1}{x^2}\dd x = 1 - \frac1b = \frac{b - 1}{b}$. Geteilt durch $b - 1$ ergibt das $\frac1b$. Für $b = 4$ ist der Mittelwert $\frac14$.
  ---
  Für $b \to \infty$ geht $\frac1b \to 0$. **Deutung:** Die Gesamtfläche bleibt endlich, sie verteilt sich aber auf ein immer längeres Intervall. Die durchschnittliche Höhe geht deshalb gegen $0$.
```

## Prüfungsaufgaben

Diese Aufgaben verbinden Rechnung und Begründung auf dem Niveau der schriftlichen Prüfung. Bei jeder Aufgabe steht ein
Zeitrichtwert. In der Prüfung hast du $120$ Minuten für etwa sechs solche Aufgaben. Erlaubt sind ein Taschenrechner ohne
Grafik und die Formelsammlung. Schreib bei jeder Teilaufgabe zuerst den Ansatz hin, dann die Rechnung, dann einen
Antwortsatz. Reine Rechenaufgaben zum Integral wie Flächen, Bremsweg oder gesuchte Grenze findest du in
[Kapitel 10, Prüfungsaufgaben](/lernen/mathe3/integralrechnung/pruefungsaufgaben). Hier geht es um den exakten Teil.

```aufgabe
id: ib-pruefung-x2-exakt
titel: Ein Integral über Ober- und Untersummen
niveau: 3
punkte: 10
lernziel: 3
kompetenz: begruenden
angabe: |
  Zeitrichtwert: $20$ Minuten.

  Gegeben ist $f(x) = x^2 + 1$ auf $[0, 2]$.

  a) Berechne für die äquidistante Zerlegung in $n = 4$ Teilintervalle die Untersumme $U_4$ und die Obersumme $O_4$.
  Fertige eine Skizze an.

  b) Zeige mit $\sum_{k=1}^n k^2 = \frac{n(n+1)(2n+1)}{6}$, dass für allgemeines $n$ gilt:
  $O_n = \frac{4(n+1)(2n+1)}{3n^2} + 2$.

  c) Es ist $U_n = \frac{4(n-1)(2n-1)}{3n^2} + 2$. Berechne $\lim_{n\to\infty} O_n$, $\lim_{n\to\infty} U_n$ und $O_n - U_n$.
  Was folgt daraus?

  d) Kontrolliere das Ergebnis mit dem Hauptsatz.
teile:
  - typ: zahl
    label: 'a) $U_4$'
    loesung: "0.5*(1 + 1.25 + 2 + 3.25)"
    anzeige: '3{,}75'
    fehler:
      - wert: "0.5*(1.25 + 2 + 3.25 + 5)"
        meldung: Das ist die Obersumme. Weil $f$ wächst, liegt die kleinste Höhe jedes Teilintervalls am linken Rand.
  - typ: zahl
    label: 'a) $O_4$'
    loesung: "0.5*(1.25 + 2 + 3.25 + 5)"
    anzeige: '5{,}75'
  - typ: text
    label: 'b) Herleitung'
    muster: |
      $h = \frac2n$, $x_k = \frac{2k}{n}$. $f$ wächst, also nimmt die Obersumme die rechten Ränder:
      $O_n = \sum_{k=1}^n \frac2n\Big(\frac{4k^2}{n^2} + 1\Big) = \frac{8}{n^3}\sum_{k=1}^n k^2 + \frac2n\cdot n
      = \frac{8}{n^3}\cdot\frac{n(n+1)(2n+1)}{6} + 2 = \frac{4(n+1)(2n+1)}{3n^2} + 2$.
  - typ: zahl
    label: 'c) gemeinsamer Grenzwert'
    loesung: "8/3 + 2"
    anzeige: '\tfrac{14}{3}'
    fehler:
      - wert: "8/3"
        meldung: 'Der Summand $+2$ aus dem Rechteck unter der $1$ fehlt. Er bleibt beim Grenzwert stehen.'
  - typ: term
    label: 'c) $O_n - U_n$'
    variable: n
    bereich: [1, 30]
    loesung: "8/n"
  - typ: text
    label: 'c) Folgerung'
    muster: |
      $O_n - U_n = \frac{4}{3n^2}\big((2n^2 + 3n + 1) - (2n^2 - 3n + 1)\big) = \frac{8}{n} \to 0$. Nach dem Riemannschen Kriterium ist $f$
      integrierbar. Das Integral liegt zwischen allen $U_n$ und $O_n$, also ist $\int_0^2 (x^2 + 1)\dd x = \frac{14}{3}$.
hinweise:
  - '$f$ wächst auf $[0, 2]$: Untersumme gleich Linkssumme, Obersumme gleich Rechtssumme.'
  - 'In b) zerfällt die Summe in $\sum \frac2n\cdot\frac{4k^2}{n^2}$ und $\sum \frac2n\cdot 1$. Die zweite Summe hat $n$ gleiche Summanden.'
  - 'In c) den Zähler ausmultiplizieren und durch $n^2$ kürzen.'
loesung: |
  **a)** $h = 0{,}5$. Werte an $0;\ 0{,}5;\ 1;\ 1{,}5;\ 2$: $1;\ 1{,}25;\ 2;\ 3{,}25;\ 5$. $U_4 = 0{,}5\,(1 + 1{,}25 + 2 + 3{,}25) = 3{,}75$ und $O_4 = 0{,}5\,(1{,}25 + 2 + 3{,}25 + 5) = 5{,}75$. Skizze: Parabel mit Scheitel $(0 \mid 1)$ und vier Rechtecken. Die unteren berühren den Graphen links, die oberen rechts.
  ---
  **b)** $h = \frac2n$ und $x_k = \frac{2k}{n}$. Die Obersumme nimmt die rechten Ränder: $O_n = \sum_{k=1}^n \frac2n\Big(\frac{4k^2}{n^2} + 1\Big) = \frac{8}{n^3}\sum_{k=1}^n k^2 + 2$. Mit der Summenformel: $\frac{8}{n^3}\cdot\frac{n(n+1)(2n+1)}{6} + 2 = \frac{4(n+1)(2n+1)}{3n^2} + 2$. **Probe** mit $n = 4$: $\frac{4\cdot 5\cdot 9}{48} + 2 = 3{,}75 + 2 = 5{,}75$.
  ---
  **c)** $O_n = \frac43\big(2 + \frac3n + \frac{1}{n^2}\big) + 2 \to \frac83 + 2 = \frac{14}{3}$ und ebenso $U_n = \frac43\big(2 - \frac3n + \frac{1}{n^2}\big) + 2 \to \frac{14}{3}$. Der Abstand ist $O_n - U_n = \frac{4}{3n^2}\cdot 6n = \frac8n \to 0$. Nach dem Riemannschen Kriterium ist $f$ integrierbar mit $\int_0^2 (x^2 + 1)\dd x = \frac{14}{3}$.
  ---
  **d)** Hauptsatz: $\big[\frac{x^3}{3} + x\big]_0^2 = \frac83 + 2 = \frac{14}{3}$. **Antwort:** Beide Wege ergeben $\frac{14}{3} \approx 4{,}67$.
```

```aufgabe
id: ib-pruefung-stueckweise
titel: Integrierbar, aber nicht stetig
niveau: 3
punkte: 10
lernziel: 4
kompetenz: begruenden
angabe: |
  Zeitrichtwert: $20$ Minuten.

  Gegeben ist die stückweise definierte Funktion
  $$f(x) = \begin{cases} x^2, & 0 \le x \le 1, \\ 2, & 1 < x \le 2. \end{cases}$$

  a) Skizziere $f$. Ist $f$ stetig? Ist $f$ auf $[0, 2]$ integrierbar? Begründe.

  b) Berechne $\int_0^2 f(x)\dd x$ und den Mittelwert $\bar f$.

  c) Gibt es ein $\xi$ in $[0, 2]$ mit $f(\xi) = \bar f$? Widerspricht das dem Mittelwertsatz?

  d) Bestimme die Integralfunktion $F(x) = \int_0^x f(t)\dd t$ für $1 < x \le 2$ und untersuche, ob $F$ bei $x = 1$
  differenzierbar ist.
teile:
  - typ: text
    label: 'a)'
    muster: |
      $f$ springt bei $x = 1$ von $1$ auf $2$, ist dort also nicht stetig. $f$ ist aber auf $[0, 2]$ monoton wachsend
      und beschränkt mit nur einer Sprungstelle, daher integrierbar.
  - typ: zahl
    label: 'b) $\int_0^2 f(x)\dd x$'
    loesung: "1/3 + 2"
    anzeige: '\tfrac73'
    fehler:
      - wert: "1/3 + 4"
        meldung: 'Auf $(1, 2]$ ist $f = 2$ über eine Breite von $1$, das Rechteck hat also die Fläche $2$.'
  - typ: zahl
    label: 'b) $\bar f$'
    loesung: "(1/3 + 2)/2"
    anzeige: '\tfrac76'
  - typ: auswahl
    label: 'c) Gibt es so ein $\xi$?'
    optionen: ['ja', 'nein']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Die Werte von $f$ liegen in $[0, 1]$ oder sind gleich $2$. Liegt $\frac76$ darin?'
  - typ: term
    label: 'd) $F(x)$ für $1 < x \le 2$'
    bereich: [1.1, 2]
    loesung: "2*x - 5/3"
    fehler:
      - wert: "2*x"
        meldung: 'Für $x > 1$ ist $F(x) = \int_0^1 t^2\dd t + \int_1^x 2\dd t$. Beide Teile müssen berücksichtigt werden.'
  - typ: text
    label: 'd) Differenzierbarkeit bei 1'
    muster: |
      Für $x \le 1$ ist $F(x) = \frac{x^3}{3}$, die linksseitige Ableitung bei $1$ ist $1^2 = 1$. Für $x > 1$ ist $F(x) = 2x - \frac53$
      mit rechtsseitiger Ableitung $2$. Beide Teile ergeben bei $1$ den Wert $\frac13$, also ist $F$ stetig. Wegen $1 \ne 2$ ist $F$
      dort aber nicht differenzierbar, der Graph hat einen Knick. Der Hauptsatz Teil 1 setzt Stetigkeit von $f$ voraus, die bei $x = 1$ fehlt.
hinweise:
  - 'Für die Integrierbarkeit: Ist $f$ monoton?'
  - 'Die Werte von $f$ liegen in $[0, 1]$ oder sind gleich $2$. Liegt $\frac76$ darin?'
  - 'd) $F(x) = \int_0^1 t^2\dd t + \int_1^x 2\dd t$ für $x > 1$.'
loesung: |
  **a)** Es ist $\lim_{x\to 1^+} f(x) = 2 \ne 1 = f(1)$, also ist $f$ bei $1$ unstetig. Aber $f$ ist monoton wachsend: Auf $[0, 1]$ wächst $x^2$ bis $1$, danach ist $f$ konstant $2$. Monotone Funktionen sind integrierbar. Alternativ: beschränkt mit nur einer Unstetigkeitsstelle.
  ---
  **b)** $\int_0^2 f = \int_0^1 x^2\dd x + \int_1^2 2\dd x = \frac13 + 2 = \frac73$. Der Wert bei $x = 1$ spielt keine Rolle. $\bar f = \frac{7/3}{2} = \frac76 \approx 1{,}17$.
  ---
  **c)** $f$ nimmt nur Werte aus $[0, 1]$ und den Wert $2$ an. $\frac76$ wird nicht angenommen, es gibt kein $\xi$. Kein Widerspruch: Der Mittelwertsatz verlangt Stetigkeit, und die fehlt hier.
  ---
  **d)** Für $x > 1$: $F(x) = \frac13 + 2(x - 1) = 2x - \frac53$. Für $x \le 1$: $F(x) = \frac{x^3}{3}$. Bei $x = 1$ ergeben beide $\frac13$, also ist $F$ stetig. Die linksseitige Ableitung ist $1$, die rechtsseitige $2$. **Antwort:** $F$ ist bei $1$ nicht differenzierbar.
```

```aufgabe
id: ib-pruefung-integralfunktion
titel: Kurvendiskussion einer Integralfunktion
niveau: 3
punkte: 10
lernziel: 7
kompetenz: anwenden
angabe: |
  Zeitrichtwert: $20$ Minuten.

  Gegeben ist $F(x) = \displaystyle\int_0^x (t^2 - 4)\dd t$ für alle reellen $x$.

  a) Berechne $F(3)$ und deute das Ergebnis als Flächenbilanz.

  b) Bestimme $F'(x)$ mit dem Hauptsatz, ohne $F$ explizit zu berechnen. Bestimme daraus die lokalen Extremstellen von $F$
  mit ihrer Art.

  c) Berechne die Funktionswerte an den Extremstellen und alle Nullstellen von $F$. Gib die Nullstellen getrennt durch
  Strichpunkte an.
teile:
  - typ: zahl
    label: 'a) $F(3)$'
    loesung: "27/3 - 12"
    anzeige: '-3'
    fehler:
      - wert: "5"
        meldung: 'Das ist der Integrand $3^2 - 4$ an der Stelle $3$. $F(3)$ ist die Flächenbilanz von $0$ bis $3$.'
  - typ: term
    label: "b) $F'(x)$"
    loesung: "x^2 - 4"
  - typ: zahl
    label: 'b) Stelle des lokalen Maximums'
    loesung: "-2"
  - typ: zahl
    label: 'b) Stelle des lokalen Minimums'
    loesung: "2"
  - typ: zahl
    label: 'c) Wert im Maximum'
    loesung: "-8/3 + 8"
    anzeige: '\tfrac{16}{3}'
  - typ: zahl
    label: 'c) Wert im Minimum'
    loesung: "8/3 - 8"
    anzeige: '-\tfrac{16}{3}'
  - typ: menge
    label: 'c) Nullstellen von $F$'
    loesung: ["-2*sqrt(3)", "0", "2*sqrt(3)"]
    fehler:
      - wert: ["-2", "2"]
        meldung: 'Das sind die Nullstellen von $F''$, also die Extremstellen. Gesucht sind die Nullstellen von $F$ selbst.'
hinweise:
  - "Hauptsatz: $F'(x) = x^2 - 4$, denn der Integrand ist stetig."
  - 'Für c) $F(x) = \frac{x^3}{3} - 4x$ berechnen und faktorisieren.'
loesung: |
  **a)** $F(3) = \big[\frac{t^3}{3} - 4t\big]_0^3 = 9 - 12 = -3$. Auf $[0, 2]$ liegt der Integrand unter der Achse, auf $[2, 3]$ darüber. Die Bilanz ist negativ: Die Fläche unter der Achse ist um $3$ größer.
  ---
  **b)** Der Integrand ist stetig, also $F'(x) = x^2 - 4$. $F'(x) = 0$ genau für $x = \pm 2$. Mit $F''(x) = 2x$ ist $F''(-2) = -4 < 0$, ein Maximum, und $F''(2) = 4 > 0$, ein Minimum.
  ---
  **c)** $F(x) = \frac{x^3}{3} - 4x$. $F(-2) = -\frac83 + 8 = \frac{16}{3}$ und $F(2) = \frac83 - 8 = -\frac{16}{3}$.
  ---
  Nullstellen: $x\big(\frac{x^2}{3} - 4\big) = 0$, also $x = 0$ oder $x^2 = 12$, das heißt $x = \pm 2\sqrt3 \approx \pm 3{,}46$. **Antwort:** Hochpunkt $(-2 \mid \frac{16}{3})$, Tiefpunkt $(2 \mid -\frac{16}{3})$, Nullstellen $-2\sqrt3$, $0$ und $2\sqrt3$.
```

```aufgabe
id: ib-pruefung-uneigentlich
titel: Unendlich lange Flächen und Körper
niveau: 3
punkte: 8
lernziel: 8
kompetenz: begruenden
angabe: |
  Zeitrichtwert: $15$ Minuten.

  Betrachte die Funktionen $g(x) = \frac{2}{x^3}$ und $f(x) = \frac{1}{x^{3/4}}$ für $x \ge 1$.

  a) Zeige durch Grenzwertrechnung, dass die Fläche unter $g$ über $[1, \infty)$ endlich ist, und gib ihren Inhalt an.

  b) Zeige, dass die Fläche unter $f$ über $[1, \infty)$ nicht endlich ist.

  c) Der Graph von $f$ rotiert für $x \ge 1$ um die $x$-Achse. Berechne das Volumen $V = \pi\int_1^\infty f(x)^2\dd x$.

  d) Ab welcher Grenze $b$ ist $\int_1^b g(x)\dd x$ um weniger als $0{,}01$ vom Grenzwert aus a) entfernt?
teile:
  - typ: zahl
    label: 'a) Flächeninhalt'
    loesung: "1"
    fehler:
      - wert: "2"
        meldung: 'Die Stammfunktion von $2x^{-3}$ ist $\frac{2x^{-2}}{-2} = -\frac{1}{x^2}$. Der Faktor $2$ kürzt sich.'
  - typ: text
    label: 'b)'
    muster: |
      $\int_1^b x^{-3/4}\dd x = \big[4x^{1/4}\big]_1^b = 4\big(b^{1/4} - 1\big)$, und $b^{1/4} \to \infty$ für $b \to \infty$. Der Grenzwert
      existiert nicht als reelle Zahl, das Integral divergiert. Das passt zu $p = \frac34 \le 1$.
  - typ: zahl
    label: 'c) $V$'
    loesung: "2*pi"
    anzeige: '2\pi \approx 6{,}283'
    fehler:
      - wert: "pi"
        meldung: '$\pi$ ist das Volumen von Gabriels Horn, also für $f(x) = \frac1x$. Hier ist aber $f(x)^2 = x^{-3/2}$, und dafür liefert der Vergleichssatz einen anderen Wert.'
  - typ: zahl
    label: 'd) $b$ größer als'
    loesung: "10"
    fehler:
      - wert: "100"
        meldung: 'Der Abstand ist $\int_b^\infty \frac{2}{x^3}\dd x = \frac{1}{b^2}$, nicht $\frac1b$.'
hinweise:
  - 'Erst bis $b$ integrieren, dann $b \to \infty$.'
  - 'c) $f(x)^2 = x^{-3/2}$. d) Der Abstand zum Grenzwert ist $1 - \int_1^b g = \frac{1}{b^2}$.'
loesung: |
  **a)** $\int_1^b \frac{2}{x^3}\dd x = \Big[-\frac{1}{x^2}\Big]_1^b = 1 - \frac{1}{b^2} \to 1$. Der Inhalt ist $1$.
  ---
  **b)** $\int_1^b x^{-3/4}\dd x = \big[4x^{1/4}\big]_1^b = 4\big(b^{1/4} - 1\big) \to \infty$. Das Integral divergiert, die Fläche ist unendlich.
  ---
  **c)** $V = \pi\int_1^\infty x^{-3/2}\dd x = \pi\cdot\lim_{b\to\infty}\Big[-2x^{-1/2}\Big]_1^b = \pi\cdot 2 = 2\pi \approx 6{,}28$. Der Körper hat ein endliches Volumen, obwohl die Fläche unter dem rotierenden Graphen unendlich ist.
  ---
  **d)** Abstand $1 - \big(1 - \frac{1}{b^2}\big) = \frac{1}{b^2} < 0{,}01$ ist gleichwertig mit $b^2 > 100$, also $b > 10$. **Antwort:** Für jedes $b > 10$ ist die Abweichung kleiner als $0{,}01$. Bei $b = 10$ ist sie genau $0{,}01$.
```

```aufgabe
id: ib-pruefung-messwerte
titel: Weg aus Messwerten
niveau: 3
punkte: 8
lernziel: 9
kompetenz: modellieren
angabe: |
  Zeitrichtwert: $15$ Minuten.

  Ein Fahrzeug beschleunigt aus dem Stand. Der Fahrtenschreiber liefert:

  | $t$ in s | $v$ in m/s |
  |---|---|
  | $0$ | $0$. |
  | $10$ | $12$. |
  | $20$ | $20$. |
  | $30$ | $24$. |
  | $40$ | $25$. |

  a) Begründe, warum der zurückgelegte Weg $s = \int_0^{40} v(t)\dd t$ ist, und schätze ihn mit der Trapezregel.

  b) Schätze $s$ mit der Simpsonregel.

  c) Berechne mit dem Simpson-Wert die Durchschnittsgeschwindigkeit in m/s.
teile:
  - typ: zahl
    label: 'a) Trapez'
    einheit: "m"
    loesung: "5*(0 + 2*(12 + 20 + 24) + 25)"
    anzeige: '685'
    fehler:
      - wert: "10*(0 + 2*(12 + 20 + 24) + 25)"
        meldung: 'Der Vorfaktor der Trapezregel ist $\frac h2 = 5$, nicht $h = 10$.'
  - typ: zahl
    label: 'b) Simpson'
    einheit: "m"
    loesung: "(10/3)*(0 + 4*12 + 2*20 + 4*24 + 25)"
    anzeige: '\approx 696{,}7'
    fehler:
      - wert: "(10/3)*(0 + 2*12 + 4*20 + 2*24 + 25)"
        meldung: 'Die Gewichte $4$ und $2$ sind vertauscht. Der erste innere Wert bekommt die $4$.'
  - typ: zahl
    label: 'c) $\bar v$'
    einheit: "m/s"
    loesung: "(10/3)*(0 + 4*12 + 2*20 + 4*24 + 25)/40"
    anzeige: '\approx 17{,}42'
    fehler:
      - wert: "(0 + 12 + 20 + 24 + 25)/5"
        meldung: 'Das einfache Mittel der fünf Messwerte ist eine gröbere Näherung. Verlangt ist der Weg aus b) geteilt durch die Fahrzeit.'
hinweise:
  - '$h = 10$ s. Trapezgewichte $1, 2, 2, 2, 1$, Simpsongewichte $1, 4, 2, 4, 1$.'
  - 'Durchschnitt ist Integral durch Intervalllänge.'
loesung: |
  **a)** Weg ist Geschwindigkeit mal Zeit. Bei veränderlicher Geschwindigkeit summiert man $v(t_k)\,\Delta t$ über kurze Zeitabschnitte, im Grenzwert ergibt das das Integral. $T_4 = \frac{10}{2}\,\big(0 + 2\cdot(12 + 20 + 24) + 25\big) = 5\cdot 137 = 685$ m.
  ---
  **b)** $S_4 = \frac{10}{3}\,(0 + 48 + 40 + 96 + 25) = \frac{10}{3}\cdot 209 = \frac{2090}{3} \approx 696{,}7$ m.
  ---
  **c)** $\bar v = \frac{696{,}7\ \text{m}}{40\ \text{s}} \approx 17{,}42$ m/s, das sind etwa $62{,}7$ km/h.
  ---
  **Plausibilität:** $v$ ist konkav, denn die Zuwächse $12, 8, 4, 1$ werden kleiner. Die Trapezregel unterschätzt dann, und Simpson liegt höher. Das passt.
```

```aufgabe
id: ib-pruefung-zufluss
titel: Ein Becken füllt sich
niveau: 3
punkte: 10
lernziel: 6
kompetenz: modellieren
angabe: |
  Zeitrichtwert: $20$ Minuten.

  In ein Rückhaltebecken fließt nach einem Gewitter Wasser mit der Rate $r(t) = 8t - t^2$. Dabei ist $t$ die Zeit in Stunden
  mit $0 \le t \le 8$ und $r$ die Rate in m³ pro Stunde. Das Becken ist zu Beginn leer.

  a) Wie viel Wasser fließt insgesamt in das Becken?

  b) Wie groß ist die mittlere Zuflussrate? Zu welchen Zeitpunkten ist die momentane Rate genau so groß wie die mittlere?
  Gib zuerst den früheren Zeitpunkt an, beide auf zwei Nachkommastellen.

  c) Die Wassermenge im Becken ist $V(t) = \int_0^t r(s)\dd s$. Zeige, dass das Becken nach $4$ Stunden genau die Hälfte der
  Gesamtmenge enthält. Begründe mit dem Hauptsatz, warum die Wassermenge im Becken zu diesem Zeitpunkt am schnellsten
  zunimmt.
teile:
  - typ: zahl
    label: 'a) Gesamtmenge'
    einheit: m³
    loesung: "4*64 - 512/3"
    anzeige: '\tfrac{256}{3} \approx 85{,}33'
    fehler:
      - wert: "16"
        meldung: 'Das ist die größte Rate $r(4)$ in m³/h. Die Gesamtmenge ist das Integral der Rate über die ganze Zeit.'
  - typ: zahl
    label: 'b) mittlere Rate'
    einheit: m³/h
    loesung: "(4*64 - 512/3)/8"
    anzeige: '\tfrac{32}{3} \approx 10{,}67'
    fehler:
      - wert: "8"
        meldung: 'Das ist der Mittelwert aus größter und kleinster Rate $\frac{16 + 0}{2}$. Die mittlere Rate ist die Gesamtmenge geteilt durch $8$ Stunden.'
  - typ: zahl
    label: 'b) früherer Zeitpunkt'
    einheit: h
    loesung: "4 - sqrt(16/3)"
    toleranz: 0.01
  - typ: zahl
    label: 'b) späterer Zeitpunkt'
    einheit: h
    loesung: "4 + sqrt(16/3)"
    toleranz: 0.01
  - typ: text
    label: 'c) Begründung'
    muster: |
      $V(t) = 4t^2 - \frac{t^3}{3}$, also $V(4) = 64 - \frac{64}{3} = \frac{128}{3}$. Das ist genau die Hälfte von $\frac{256}{3}$.
      Nach dem Hauptsatz ist $V'(t) = r(t)$. Die Wassermenge nimmt also am schnellsten zu, wenn die Rate $r(t) = 8t - t^2$ am
      größten ist. Wegen $r'(t) = 8 - 2t = 0$ ist das bei $t = 4$. Dort hat $V$ einen Wendepunkt.
hinweise:
  - 'Eine Stammfunktion von $8t - t^2$ ist $4t^2 - \frac{t^3}{3}$.'
  - 'Mittelwertstellen: Löse $8t - t^2 = \frac{32}{3}$ mit der Lösungsformel. c) Der Hauptsatz liefert $V'' = r$.'
loesung: |
  **Ansatz:** Die Wassermenge ist das Integral der Zuflussrate. Mittelwert, Mittelwertsatz und Hauptsatz liefern die übrigen Teile.
  ---
  **a)** $\int_0^8 (8t - t^2)\dd t = \Big[4t^2 - \frac{t^3}{3}\Big]_0^8 = 256 - \frac{512}{3} = \frac{256}{3} \approx 85{,}33$ m³.
  ---
  **b)** Mittlere Rate: $\frac{256/3}{8} = \frac{32}{3} \approx 10{,}67$ m³/h. Aus $8t - t^2 = \frac{32}{3}$ folgt $t^2 - 8t + \frac{32}{3} = 0$, also $t = 4 \pm \sqrt{16 - \frac{32}{3}} = 4 \pm \sqrt{\frac{16}{3}}$. Das ergibt $t_1 \approx 1{,}69$ h und $t_2 \approx 6{,}31$ h. Der Mittelwertsatz garantiert mindestens eine solche Stelle, hier sind es zwei.
  ---
  **c)** $V(4) = 4\cdot 16 - \frac{64}{3} = \frac{128}{3}$, die Hälfte von $\frac{256}{3}$. Nach dem Hauptsatz ist $V'(t) = r(t)$. Die Rate ist bei $t = 4$ am größten, denn $r'(t) = 8 - 2t = 0$ ergibt $t = 4$.
  ---
  **Antwort:** Nach $4$ Stunden enthält das Becken die Hälfte der Gesamtmenge, und dort nimmt die Wassermenge am schnellsten zu, mit $r(4) = 16$ m³/h. Die Hälfte liegt genau bei $4$, weil der Graph der Rate symmetrisch zu $t = 4$ ist.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, bevor du weiterliest. Was würdest du jemandem sagen, der wissen will, was ein Integral eigentlich ist?
antwort: |
  Eine mögliche Antwort mit drei Aussagen:
  1. Das Integral ist die eine Zahl, die zwischen allen Untersummen und allen Obersummen liegt. Gibt es genau eine
     solche Zahl, heißt die Funktion integrierbar. Das prüft man mit dem Riemannschen Kriterium.
  2. Stetige und monotone Funktionen sind immer integrierbar. Die Dirichlet-Funktion zeigt, dass es auch beschränkte
     Funktionen gibt, die nicht integrierbar sind.
  3. Der Hauptsatz verbindet Integral und Ableitung: Die Integralfunktion einer stetigen Funktion hat die Ableitung $f$.
     Deshalb darf man Integrale mit Stammfunktionen berechnen.

  Vergleiche mit dem Kasten „Zusammenfassung“ direkt nach dieser Frage. Fehlt dir eine Aussage, lies die zugehörige
  Lektion noch einmal.
```

:::zusammenfassung
1. **Riemann-Summe:** Zu einer Zerlegung wählt man in jedem Teilintervall eine Zwischenstelle und addiert die Rechtecke $f(\xi_k)\,\Delta x_k$. Wie gut die Näherung ist, bestimmt die Feinheit, also die Länge des längsten Teilintervalls.
2. **Ober- und Untersumme:** Mit der größten und der kleinsten Höhe je Teilintervall entstehen Obersumme und Untersumme. Jede Riemann-Summe liegt dazwischen. Verfeinern lässt die Untersumme wachsen und die Obersumme schrumpfen.
3. **Integrierbarkeit:** Eine beschränkte Funktion ist integrierbar, wenn Unterintegral und Oberintegral übereinstimmen. Gleichwertig: Zu jedem $\varepsilon > 0$ gibt es eine Zerlegung mit $O - U < \varepsilon$.
4. **Exakte Rechnung:** Mit Summenformeln lassen sich $O_n$ und $U_n$ als Terme in $n$ schreiben. Ihr gemeinsamer Grenzwert ist das Integral, zum Beispiel $\int_0^b x^2\dd x = \frac{b^3}{3}$.
5. **Welche Funktionen:** Stetige, monotone und beschränkte Funktionen mit endlich vielen Sprüngen sind integrierbar. Die Dirichlet-Funktion ist es nicht. Integrierbar heißt nicht stetig.
6. **Eigenschaften und Mittelwertsatz:** Das Integral ist linear, intervalladditiv und monoton. Daraus folgt $m\,(b - a) \le \int_a^b f \le M\,(b - a)$. Für stetiges $f$ wird der Mittelwert an einer Stelle $\xi$ angenommen.
7. **Hauptsatz:** Für stetiges $f$ ist $F(x) = \int_a^x f(t)\dd t$ differenzierbar mit $F' = f$, und $\int_a^b f = G(b) - G(a)$ für jede Stammfunktion $G$. Der Beweis verwendet den Mittelwertsatz und die Stetigkeit.
8. **Erweiterungen:** Uneigentliche Integrale sind Grenzwerte, $\int_1^\infty x^{-p}\dd x$ konvergiert genau für $p > 1$. Numerisch nähert man mit der Trapezregel (Fehler wie $h^2$) oder der Simpsonregel (Fehler wie $h^4$).
:::

### Die häufigsten Fehler

Jeder Fehler wird von mindestens einer Aufgabe im Kapitel trainiert. Kommt dir ein Fehler bekannt vor, löse die genannte
Aufgabe noch einmal.

1. **Ein Rechteck zu viel.** Bei $n$ Teilintervallen hat eine Riemann-Summe genau $n$ Summanden. Training: „Wo steckt der
   Fehler in der Linkssumme?“ in [14.1 Zerlegungen und Riemann-Summen](/lernen/mathe3/integrierbarkeit/zerlegungen-und-riemann-summen).
2. **Falsche Breite.** Die Breite ist $h = \frac{b - a}{n}$ und nur auf $[0, 1]$ gleich $\frac1n$. Training: „Mittelsumme für 1/x“
   in [14.1 Zerlegungen und Riemann-Summen](/lernen/mathe3/integrierbarkeit/zerlegungen-und-riemann-summen).
3. **Feinheit mit Anzahl verwechselt.** Die Feinheit ist die Länge des längsten Teilintervalls. Training: „Zerlegung und
   Feinheit“ in [14.1 Zerlegungen und Riemann-Summen](/lernen/mathe3/integrierbarkeit/zerlegungen-und-riemann-summen).
4. **Blind die Ränder genommen.** Liegt ein Extremum im Inneren eines Teilintervalls, liefert es die größte oder kleinste
   Höhe. Training: „Ober- und Untersumme mit Extremum im Inneren“ in
   [14.2 Ober- und Untersummen](/lernen/mathe3/integrierbarkeit/ober-und-untersummen).
5. **Unter- und Obersumme bei fallenden Funktionen vertauscht.** Bei fallendem $f$ liegt der kleinste Wert rechts. Training:
   „Ober- und Untersumme einer fallenden Funktion“ in [14.2 Ober- und Untersummen](/lernen/mathe3/integrierbarkeit/ober-und-untersummen).
6. **Das Kriterium nur für ein ε geprüft.** Integrierbar ist eine Funktion erst, wenn **jede** Toleranz erreichbar ist.
   Training: „Ein zu schneller Schluss“ und „Die Reihenfolge von für jedes und es gibt“ in
   [14.3 Definition der Integrierbarkeit](/lernen/mathe3/integrierbarkeit/definition-der-integrierbarkeit).
7. **Summenformel mit der falschen Obergrenze.** In der Untersumme läuft die Summe nur bis $n - 1$. Training: „Fehlersuche in
   einer Untersumme“ in [14.4 Exakte Integrale](/lernen/mathe3/integrierbarkeit/exakte-integrale-mit-summenformeln).
8. **Integrierbar mit stetig verwechselt.** Treppenfunktionen sind integrierbar, aber unstetig. Unbeschränkte Funktionen sind
   nicht integrierbar, auch wenn sie überall definiert sind. Training: „Integrierbar oder nicht?“ in
   [14.5 Welche Funktionen sind integrierbar?](/lernen/mathe3/integrierbarkeit/welche-funktionen-sind-integrierbar).
9. **Monotonie bei vertauschten Grenzen.** $\int_3^1 x^2\dd x$ ist negativ, obwohl $x^2 \ge 0$ ist. Training: „Ein negatives
   Integral trotz positivem Integranden?“ in [14.6 Eigenschaften des Integrals](/lernen/mathe3/integrierbarkeit/eigenschaften-des-integrals).
10. **Mittelwertstelle in der Intervallmitte gesucht.** Sicher stimmt das nur bei linearen Funktionen. Training: „Mittelwert und
    Mittelwertstelle“ in [14.7 Mittelwertsatz](/lernen/mathe3/integrierbarkeit/mittelwertsatz-der-integralrechnung).
11. **Kettenregel bei variabler Grenze vergessen.** $\frac{\dd}{\dd x}\int_0^{x^2}\sin t\dd t$ ist $2x\sin(x^2)$. Training:
    „Integrale nach der oberen Grenze ableiten“ in
    [14.8 Hauptsatz](/lernen/mathe3/integrierbarkeit/hauptsatz-der-differential-und-integralrechnung).
12. **Hochpunkt von f mit Hochpunkt von F verwechselt.** $F$ hat seinen Hochpunkt beim Vorzeichenwechsel von $f$. Training:
    „Die Integralfunktion aus einem Graphen“ in
    [14.8 Hauptsatz](/lernen/mathe3/integrierbarkeit/hauptsatz-der-differential-und-integralrechnung).
13. **Unendliche Flächen gegeneinander aufgehoben.** Bei zwei unendlichen Grenzen muss jeder Teil einzeln konvergieren.
    Training: „Ein verlockender Kurzschluss“ in [14.9 Uneigentliche Integrale](/lernen/mathe3/integrierbarkeit/uneigentliche-integrale).
14. **Simpson-Gewichte vertauscht oder n ungerade.** Die Gewichte sind $1, 4, 2, \dots, 4, 1$, und $n$ muss gerade sein. Training:
    „Fehlersuche bei der Simpsonregel“ in [14.10 Numerische Integration](/lernen/mathe3/integrierbarkeit/numerische-integration).

### Selbstcheck zu den Lernzielen

Schätze für jedes Lernziel ein, wie sicher du bist: **sicher**, **unsicher** oder **noch nicht**. Vergleiche dann mit
deinen Ergebnissen in den Aufgaben. Wo du dich überschätzt hast, lohnt sich eine Wiederholung am meisten.

1. Zerlegungen und Riemann-Summen angeben und berechnen.
2. Ober- und Untersummen bestimmen, auch bei nicht monotonen Funktionen.
3. Die Definition der Integrierbarkeit und das Riemannsche Kriterium korrekt formulieren.
4. Integrale mit Summenformeln exakt als Grenzwert berechnen.
5. Begründen, welche Funktionen integrierbar sind, und die Dirichlet-Funktion erklären.
6. Die Eigenschaften des Integrals begründen und Integrale abschätzen.
7. Den Mittelwertsatz formulieren, anwenden und ein Gegenbeispiel angeben.
8. Den Hauptsatz formulieren, die Beweisidee erklären und Integralfunktionen untersuchen.
9. Uneigentliche Integrale berechnen und Konvergenz entscheiden.
10. Trapez- und Simpsonregel anwenden und den Fehler abschätzen.

## Mündliche Prüfung

```karten
- id: ib-k-zerlegung
  frage: Was ist eine Zerlegung, was ist ihre Feinheit, und was ist eine Riemann-Summe?
  antwort: |
    Eine Zerlegung von $[a, b]$ ist eine endliche Menge von Punkten $a = x_0 < x_1 < \dots < x_n = b$. Sie teilt das
    Intervall in $n$ Teilintervalle. Die Feinheit ist die Länge des längsten Teilintervalls. Für eine Riemann-Summe wählt
    man in jedem Teilintervall eine Zwischenstelle $\xi_k$ und bildet $\sum_k f(\xi_k)\,(x_k - x_{k-1})$. Das ist die Summe von
    Rechteckflächen und eine Näherung für das Integral.
  kernpunkte:
    - Teilungspunkte von a bis b
    - Feinheit ist die längste Teillänge
    - Rechtecke mit Höhe f(ξk) aufsummieren
- id: ib-k-feinheit
  frage: Warum verlangt man, dass die Feinheit gegen null geht, und nicht nur, dass die Anzahl der Teile wächst?
  antwort: |
    Viele Teile garantieren nicht, dass alle Teile schmal sind. Zerlegt man zum Beispiel nur die rechte Hälfte von $[0, 1]$
    immer feiner, bleibt über $[0;\ 0{,}5]$ ein breites Rechteck mit großem Fehler. Erst wenn das längste Teilintervall
    schrumpft, passen sich die Rechtecke überall dem Graphen an.
  kernpunkte:
    - Gegenbeispiel mit einem breit bleibenden Teilintervall
    - Feinheit kontrolliert alle Teilintervalle zugleich
- id: ib-k-ober-unter
  frage: Wie sind Ober- und Untersumme definiert, und warum muss die Funktion beschränkt sein?
  antwort: |
    Auf jedem Teilintervall nimmt man die größte Höhe $M_k$ (Supremum) und die kleinste $m_k$ (Infimum). Dann ist
    $O = \sum M_k\,\Delta x_k$ und $U = \sum m_k\,\Delta x_k$. Jede Riemann-Summe liegt dazwischen. Ist $f$ unbeschränkt, gibt es
    auf einem Teilintervall kein endliches Supremum oder Infimum, und die Summen sind nicht definiert. Ein Beispiel ist
    $\frac1x$ auf $(0, 1]$.
  kernpunkte:
    - Supremum und Infimum je Teilintervall
    - U ≤ Riemann-Summe ≤ O
    - Beschränktheit, sonst kein endliches Supremum
- id: ib-k-verfeinerung
  frage: Warum wird die Untersumme beim Verfeinern nicht kleiner?
  antwort: |
    Fügt man einen Teilungspunkt ein, wird ein Rechteck durch zwei ersetzt, die zusammen gleich breit sind. Auf einem
    Teilstück kann die kleinste Höhe nicht tiefer liegen als auf dem ganzen Teilintervall. Die beiden neuen Rechtecke sind
    also mindestens so hoch wie das alte. Daraus folgt auch, dass jede Untersumme unter jeder Obersumme liegt: Man vergleicht
    beide mit ihrer gemeinsamen Verfeinerung.
  kernpunkte:
    - Infimum auf einer Teilmenge ist größer oder gleich
    - gleiche Gesamtbreite, mindestens gleiche Höhe
    - gemeinsame Verfeinerung zeigt U ≤ O
- id: ib-k-definition
  frage: Wann heißt eine Funktion Riemann-integrierbar?
  antwort: |
    Eine beschränkte Funktion $f$ auf $[a, b]$ ist integrierbar, wenn das Supremum aller Untersummen gleich dem Infimum aller
    Obersummen ist. Dieser gemeinsame Wert ist $\int_a^b f(x)\dd x$. Gleichwertig ist das Riemannsche Kriterium: Zu jedem
    $\varepsilon > 0$ gibt es eine Zerlegung mit $O - U < \varepsilon$. Beispiel: Jede konstante Funktion. Gegenbeispiel: die
    Dirichlet-Funktion.
  kernpunkte:
    - Unterintegral gleich Oberintegral
    - Riemannsches Kriterium mit für jedes ε
    - Beispiel und Gegenbeispiel
- id: ib-k-epsilon
  frage: Warum steht im Riemannschen Kriterium „zu jedem ε“? Würde nicht eine sehr feine Zerlegung reichen?
  antwort: |
    Eine einzige Zerlegung zeigt nur, dass Unter- und Oberintegral höchstens so weit auseinanderliegen wie $O - U$. Erst wenn
    man den Abstand unter jede positive Schranke drücken kann, folgt, dass er genau null ist. Eine Zahl $d \ge 0$, die kleiner
    als jedes $\varepsilon > 0$ ist, ist null. Die Zerlegung darf dabei von $\varepsilon$ abhängen.
  kernpunkte:
    - Eine Zerlegung liefert nur eine Schranke
    - d < ε für alle ε heißt d = 0
    - Reihenfolge der Quantoren
- id: ib-k-x2
  frage: Wie berechnet man das Integral von x² über [0, 1] ohne Stammfunktion?
  antwort: |
    Man zerlegt äquidistant mit $h = \frac1n$ und $x_k = \frac kn$. Weil $x^2$ wächst, nimmt die Obersumme die rechten Ränder:
    $O_n = \frac{1}{n^3}\sum_{k=1}^n k^2 = \frac{(n+1)(2n+1)}{6n^2}$ mit der Summenformel. Ebenso $U_n = \frac{(n-1)(2n-1)}{6n^2}$.
    Beide gehen gegen $\frac13$, und $O_n - U_n = \frac1n \to 0$. Also ist $x^2$ integrierbar mit Integral $\frac13$.
  kernpunkte:
    - Zerlegung und Monotonie
    - Summenformel für k²
    - Grenzwert und O − U → 0
- id: ib-k-klassen
  frage: Welche Funktionen sind sicher integrierbar, und wie begründet man das für monotone Funktionen?
  antwort: |
    Stetige Funktionen auf abgeschlossenen Intervallen, monotone Funktionen und beschränkte Funktionen mit endlich vielen
    Unstetigkeitsstellen. Für eine wachsende Funktion ist bei $n$ gleichen Teilen $O_n - U_n = \frac{b-a}{n}\,(f(b) - f(a))$,
    weil sich alle mittleren Werte wegheben. Das geht gegen null, also greift das Riemannsche Kriterium, auch wenn $f$ springt.
  kernpunkte:
    - stetig, monoton, endlich viele Sprünge
    - Teleskopformel bei monotonen Funktionen
    - keine Stetigkeit nötig
- id: ib-k-dirichlet
  frage: Nenne eine beschränkte Funktion, die nicht integrierbar ist, und begründe.
  antwort: |
    Die Dirichlet-Funktion ist $1$ für rationale und $0$ für irrationale Zahlen. Jedes Teilintervall enthält beide Sorten
    Zahlen. Also ist jede Untersumme $0$ und jede Obersumme $b - a$, egal wie fein man zerlegt. Unter- und Oberintegral sind
    verschieden, die Funktion ist nicht integrierbar.
  kernpunkte:
    - Definition der Dirichlet-Funktion
    - Jedes Teilintervall enthält rationale und irrationale Zahlen
    - U = 0, O = b − a für jede Zerlegung
- id: ib-k-kette
  frage: Wie hängen Differenzierbarkeit, Stetigkeit und Integrierbarkeit zusammen?
  antwort: |
    Es gilt die Kette: differenzierbar, also stetig, also integrierbar. Der erste Schritt stammt aus Kapitel 13, der zweite
    aus diesem Kapitel. Keine Umkehrung gilt. Die Betragsfunktion ist stetig, aber bei $0$ nicht differenzierbar. Eine
    Treppenfunktion ist integrierbar, aber nicht stetig.
  kernpunkte:
    - Kette differenzierbar, stetig, integrierbar
    - Gegenbeispiel Betragsfunktion aus Kapitel 13
    - Gegenbeispiel Treppenfunktion
- id: ib-k-eigenschaften
  frage: Welche Eigenschaften hat das bestimmte Integral, und wie begründet man sie?
  antwort: |
    Linearität, Intervalladditivität, Monotonie, die Dreiecksungleichung $|\int f| \le \int |f|$ und die Abschätzung
    $m\,(b - a) \le \int_a^b f \le M\,(b - a)$. Begründet werden sie über Riemann-Summen: Jede Eigenschaft gilt für jede einzelne
    Summe, und der Grenzübergang erhält sie. Monotonie und Abschätzung gelten nur, wenn die untere Grenze kleiner ist.
  kernpunkte:
    - fünf Eigenschaften nennen
    - Beweis über Riemann-Summen und Grenzwert
    - Vorsicht bei vertauschten Grenzen
- id: ib-k-mittelwertsatz
  frage: Wie lautet der Mittelwertsatz der Integralrechnung, wo braucht man die Stetigkeit, und wie hängt er mit Kapitel 13 zusammen?
  antwort: |
    Ist $f$ stetig auf $[a, b]$, gibt es $\xi$ mit $\int_a^b f = f(\xi)\,(b - a)$. Beweis: Mit Minimum $m$ und Maximum $M$ gilt
    $m \le \bar f \le M$, und der Zwischenwertsatz liefert $\xi$. Ohne Stetigkeit scheitert es, etwa bei einer Treppenfunktion
    mit den Werten $0$ und $2$. Mit einer Stammfunktion $F$ wird daraus $F(b) - F(a) = F'(\xi)\,(b - a)$, der Mittelwertsatz
    der Differentialrechnung aus Kapitel 13.
  kernpunkte:
    - Aussage mit Voraussetzung stetig
    - Beweis mit Max, Min und Zwischenwertsatz
    - Gegenbeispiel Treppenfunktion
    - Zusammenhang mit dem Mittelwertsatz aus Kapitel 13
- id: ib-k-hauptsatz
  frage: Formuliere den Hauptsatz der Differential- und Integralrechnung.
  antwort: |
    Es sei $f$ stetig auf $[a, b]$. Teil 1: Die Integralfunktion $F(x) = \int_a^x f(t)\dd t$ ist differenzierbar mit $F' = f$.
    Jede stetige Funktion hat also eine Stammfunktion. Teil 2: Für jede Stammfunktion $G$ gilt $\int_a^b f(x)\dd x = G(b) - G(a)$.
    Differenzieren und Integrieren sind also Umkehroperationen.
  kernpunkte:
    - Voraussetzung f stetig
    - "Teil 1: F' = f"
    - "Teil 2: Integral = G(b) − G(a)"
- id: ib-k-beweisidee
  frage: Skizziere die Beweisidee des Hauptsatzes. Wo wird die Stetigkeit gebraucht?
  antwort: |
    Der Differenzenquotient $\frac{F(x + h) - F(x)}{h}$ ist wegen der Intervalladditivität $\frac1h\int_x^{x+h} f(t)\dd t$, also der
    Mittelwert von $f$ auf dem schmalen Streifen. Nach dem Mittelwertsatz ist das $f(\xi_h)$ mit $\xi_h$ zwischen $x$ und $x + h$.
    Für $h \to 0$ geht $\xi_h \to x$, und wegen der Stetigkeit $f(\xi_h) \to f(x)$. Die Stetigkeit braucht man also im
    Mittelwertsatz und im letzten Grenzübergang. Teil 2 folgt, weil sich zwei Stammfunktionen nur um eine Konstante unterscheiden.
  kernpunkte:
    - Differenzenquotient als Mittelwert auf dem Streifen
    - Mittelwertsatz liefert f(ξh)
    - Stetigkeit für den Grenzübergang
- id: ib-k-integralfunktion
  frage: Was ist eine Integralfunktion, und warum ist nicht jede Stammfunktion eine Integralfunktion?
  antwort: |
    $F(x) = \int_a^x f(t)\dd t$ ist die Flächenbilanz von $a$ bis $x$. Für stetiges $f$ ist sie eine Stammfunktion. Jede
    Integralfunktion ist an ihrer unteren Grenze null. $x^2 + 1$ ist eine Stammfunktion von $2x$, hat aber keine Nullstelle.
    Also ist sie keine Integralfunktion, denn $\int_a^x 2t\dd t = x^2 - a^2$.
  kernpunkte:
    - Definition als Flächenbilanz mit fester unterer Grenze
    - F(a) = 0
    - Gegenbeispiel x² + 1
- id: ib-k-uneigentlich
  frage: Was ist ein uneigentliches Integral? Gib ein konvergentes und ein divergentes Beispiel und eine Verbindung zu Reihen.
  antwort: |
    Ein Integral über ein unbeschränktes Intervall oder mit unbeschränktem Integranden, definiert als Grenzwert, etwa
    $\int_1^\infty f = \lim_{b\to\infty}\int_1^b f$. Konvergent: $\int_1^\infty \frac{1}{x^2}\dd x = 1$. Divergent:
    $\int_1^\infty \frac1x\dd x$, weil $\ln b \to \infty$. Das passt zur harmonischen Reihe aus Kapitel 11, die ebenfalls divergiert.
    Faustregel: $\int_1^\infty x^{-p}$ konvergiert genau für $p > 1$.
  kernpunkte:
    - Definition als Grenzwert
    - Beispiele 1/x² und 1/x
    - Verbindung zur harmonischen Reihe in Kapitel 11
- id: ib-k-numerisch
  frage: Wie funktionieren Trapez- und Simpsonregel, und welche ist genauer?
  antwort: |
    Die Trapezregel ersetzt den Graphen auf jedem Teilintervall durch eine Sehne:
    $T_n = \frac h2\,(y_0 + 2y_1 + \dots + 2y_{n-1} + y_n)$. Ihr Fehler schrumpft wie $h^2$. Die Simpsonregel legt durch je drei
    Punkte eine Parabel: $S_n = \frac h3\,(y_0 + 4y_1 + 2y_2 + \dots + 4y_{n-1} + y_n)$ mit geradem $n$. Ihr Fehler schrumpft wie
    $h^4$, und sie ist für Polynome bis Grad drei exakt. Simpson ist meistens deutlich genauer.
  kernpunkte:
    - Sehnen gegen Parabeln
    - Gewichte und Vorfaktor
    - Fehler wie h² gegen h⁴
```
