---
nummer: 8
titel: Folgen und Reihen
kurz: Explizite und rekursive Folgen, arithmetische und geometrische Folgen, das Summenzeichen, endliche Reihen, Zinsen, Renten und Kredite, vollständige Induktion, Monotonie und Beschränktheit sowie rekursive Modelle.
teil: A
stunden: 16
pruefungsgewicht: 2
voraussetzungen: [zahlen, gleichungen, funktionen]
lernziele:
  - Folgen explizit und rekursiv angeben, Glieder berechnen, zu gegebenen Gliedern eine passende Formel finden und Folgen als Punktgraph darstellen
  - arithmetische und geometrische Folgen erkennen, aus zwei Angaben vollständig bestimmen und den Index zu einem gegebenen Wert berechnen, auch mit dem Logarithmus
  - Summen mit dem Summenzeichen auswerten und aufschreiben sowie die Rechenregeln und die Indexverschiebung korrekt anwenden
  - die Summenformeln für endliche arithmetische und geometrische Reihen herleiten und in Sachaufgaben anwenden, auch wenn die Anzahl der Glieder gesucht ist
  - Zinseszins, Barwert und unterjährige Verzinsung berechnen und Zahlungen zu verschiedenen Zeitpunkten vergleichen
  - Renten und Kredite mit geometrischen Reihen berechnen und einen Tilgungsplan aufstellen und deuten
  - Aussagen über natürliche Zahlen mit vollständiger Induktion beweisen und fehlerhafte Induktionsbeweise beurteilen
  - Monotonie und Beschränktheit einer Folge an Gliedern, Graph und einfachen Rechnungen erkennen, begründen und Schranken angeben
  - (Vertiefung) rekursive Modelle für Wachstum und Abnahme aufstellen, schrittweise auswerten und ihr Langzeitverhalten deuten
---

Eine **Folge** ist eine durchnummerierte Liste von Zahlen: ein erster Wert, ein zweiter, ein dritter und so
weiter. Solche Listen entstehen überall, wo etwas Schritt für Schritt passiert. Dein Kontostand am Ende jedes
Monats ist eine Folge. Die Anzahl der Bakterien zu jeder vollen Stunde ist eine Folge. Der Wert einer Variablen
nach jedem Durchlauf einer Schleife ist ebenfalls eine Folge.

In diesem Kapitel lernst du, Folgen zu beschreiben und mit ihnen zu rechnen. Die zwei wichtigsten Arten sind die
**arithmetischen** Folgen (es kommt immer derselbe Betrag dazu) und die **geometrischen** Folgen (es wird immer mit
demselben Faktor multipliziert). Addiert man die Glieder einer Folge, entsteht eine **Reihe**. Für die beiden
wichtigsten Reihen gibt es Summenformeln. Mit ihnen rechnen Banken Sparpläne und Kredite.

### Wozu brauchst du das?

- **In der schriftlichen Prüfung** kommen Folgen direkt vor. Eine typische Aufgabe lautet: Gib die ersten Glieder
  einer Folge an, stelle eine Vermutung über die Monotonie auf, begründe, ob die Folge beschränkt ist, und bestimme
  den Grenzwert. Die anschaulichen Grundlagen dafür legst du hier. Die exakten Beweise folgen in
  [Kapitel 11](/lernen/mathe3/grenzwerte-folgen).
- **Wachstums- und Zinsaufgaben** kommen in allen Musterprüfungen vor. Geometrische Folgen lösen sie genauso gut
  wie die Exponentialfunktionen aus [4.12 Wachstums- und Zerfallsmodelle](/lernen/mathe3/funktionen/wachstums-und-zerfallsmodelle).
- **In der mündlichen Prüfung** fragt man gern nach der Herleitung der geometrischen Summenformel. Ebenso beliebt
  ist die Frage, wie vollständige Induktion funktioniert und warum man den Induktionsanfang braucht.
- **Später im Kurs** brauchst du das Summenzeichen für Riemann-Summen in
  [14.1 Zerlegungen und Riemann-Summen](/lernen/mathe3/integrierbarkeit/zerlegungen-und-riemann-summen) und die Begriffe
  Monotonie und Beschränktheit in
  [11.10 Monotonie und Beschränktheit beweisen](/lernen/mathe3/grenzwerte-folgen/monotonie-und-beschraenktheit-beweisen).

### Wie dieses Kapitel aufgebaut ist

Die ersten sechs Lektionen bauen das Handwerkszeug auf: Folgen, arithmetische und geometrische Folgen, das
Summenzeichen und die beiden Summenformeln. Die Lektionen 8.7 und 8.8 wenden es auf Geld an. Die Lektionen 8.9
und 8.10 erklären die vollständige Induktion, eine Beweismethode für Aussagen über alle natürlichen Zahlen. Sie
ist für fast alle Lernenden neu und ungewohnt. Nimm dir dafür Zeit. Lektion 8.11 führt Monotonie und
Beschränktheit anschaulich ein. Lektion 8.12 ist eine **Vertiefung** über rekursive Modelle. Sie gehört zum
Schulstoff der Oberstufe, geht aber über den Prüfungsstoff hinaus.

:::vorwissen
Du brauchst aus früheren Kapiteln vor allem vier Dinge:

- **Potenzrechenregeln**, etwa $2^3 \cdot 2^5 = 2^8$, aus
  [Kapitel 1, Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln).
- **Prozente als Faktoren**, etwa „plus $4\,\%$“ als Multiplikation mit $1{,}04$, aus
  [Kapitel 1, Prozentrechnung](/lernen/mathe3/zahlen/prozentrechnung).
- **Exponentialgleichungen mit dem Logarithmus lösen** aus
  [Kapitel 2, Exponential- und Logarithmusgleichungen](/lernen/mathe3/gleichungen/exponential-und-logarithmusgleichungen).
- **Lineare und quadratische Gleichungen und Ungleichungen** aus
  [Kapitel 2, Quadratische Gleichungen](/lernen/mathe3/gleichungen/quadratische-gleichungen) und
  [Kapitel 2, Ungleichungen](/lernen/mathe3/gleichungen/ungleichungen).

Die folgende Eingangsdiagnose prüft genau diese Dinge. Liegst du bei einer Frage daneben, lies zuerst den
verlinkten Abschnitt. Jede Lücke von dort taucht in diesem Kapitel wieder auf.
:::

:::anwendung
In der Informatik begegnen dir Folgen ständig. Eine Schleife, die einen Wert immer wieder neu berechnet, erzeugt
eine rekursive Folge. Die Laufzeit eines Algorithmus ist oft eine Summe, etwa $1 + 2 + \dots + n$ Vergleiche bei
einem einfachen Sortierverfahren. Und mit vollständiger Induktion beweist man, dass ein Algorithmus für jede
Eingabegröße das Richtige tut.
:::

### Eingangsdiagnose

```aufgabe
id: fr-diag-potenzen
titel: Potenzen multiplizieren
niveau: 1
art: check
angabe: |
  Berechne $2^3 \cdot 2^5$ als Zahl.
  Herkunft: [Kapitel 1, Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln).
teile:
  - typ: zahl
    loesung: "2^3 * 2^5"
    anzeige: '2^8 = 256'
    fehler:
      - wert: "2^15"
        meldung: |
          Du hast die Hochzahlen multipliziert. Bei gleicher Basis werden die Hochzahlen **addiert**:
          $2^3 \cdot 2^5$ sind drei Zweier mal fünf Zweier, also acht Zweier.
      - wert: "4^8"
        meldung: |
          Du hast die Basen multipliziert. Die Basis bleibt $2$. Nur die Hochzahlen werden addiert.
hinweise:
  - 'Schreib aus: $2^3 = 2 \cdot 2 \cdot 2$ und $2^5 = 2 \cdot 2 \cdot 2 \cdot 2 \cdot 2$. Wie viele Zweier sind es zusammen?'
loesung: |
  Bei gleicher Basis addiert man die Hochzahlen: $2^3 \cdot 2^5 = 2^{3 + 5} = 2^8$.
  ---
  $2^8 = 256$. Probe: $8 \cdot 32 = 256$ ✓.
```

```aufgabe
id: fr-diag-prozentfaktor
titel: Prozent als Faktor
niveau: 1
art: check
angabe: |
  Ein Preis steigt um $4\,\%$. Mit welcher Zahl musst du den alten Preis multiplizieren, um den neuen zu erhalten?
  Herkunft: [Kapitel 1, Prozentrechnung](/lernen/mathe3/zahlen/prozentrechnung).
teile:
  - typ: zahl
    label: 'Faktor'
    loesung: "1 + 4/100"
    anzeige: '1{,}04'
    fehler:
      - wert: "0.04"
        meldung: |
          Mit $0{,}04$ erhältst du nur den **Zuwachs**, also $4\,\%$ des alten Preises. Der neue Preis ist der alte
          Preis **plus** dieser Zuwachs.
      - wert: "1.4"
        meldung: |
          $1{,}4$ bedeutet eine Zunahme um $40\,\%$. Für $4\,\%$ ist der Zuwachs $\frac{4}{100} = 0{,}04$.
hinweise:
  - 'Neuer Preis $=$ alter Preis $+$ $4\,\%$ des alten Preises. Hebe den alten Preis heraus.'
loesung: |
  Neuer Preis $= P + 0{,}04\,P = P\cdot(1 + 0{,}04)$, wobei $P$ der alte Preis ist.
  ---
  Der Faktor ist $1{,}04$. Probe: $100$ Euro werden zu $104$ Euro ✓.
```

```aufgabe
id: fr-diag-expgleichung
titel: Eine Exponentialgleichung lösen
niveau: 1
art: check
angabe: |
  Löse $3^x = 50$. Runde auf zwei Nachkommastellen.
  Herkunft: [Kapitel 2, Exponential- und Logarithmusgleichungen](/lernen/mathe3/gleichungen/exponential-und-logarithmusgleichungen).
teile:
  - typ: zahl
    label: '$x$'
    loesung: "ln(50)/ln(3)"
    anzeige: '3{,}56'
    toleranz: 0.01
    fehler:
      - wert: "50/3"
        meldung: |
          $3^x$ heißt nicht $3 \cdot x$. Die Unbekannte steht in der Hochzahl. Um sie herunterzuholen, brauchst du den
          Logarithmus.
      - wert: "ln(50/3)"
        meldung: |
          Du hast $\ln\left(\frac{50}{3}\right)$ berechnet. Gemeint ist aber der Quotient zweier Logarithmen, und
          $\frac{\ln 50}{\ln 3}$ ist etwas anderes als $\ln\left(\frac{50}{3}\right)$. Richtig ist
          $x \cdot \ln 3 = \ln 50$, also $x = \frac{\ln 50}{\ln 3}$.
hinweise:
  - 'Logarithmiere beide Seiten: $\ln(3^x) = x \cdot \ln 3$.'
loesung: |
  Beide Seiten logarithmieren: $x \cdot \ln 3 = \ln 50$. Die Regel $\ln(a^x) = x \ln a$ holt $x$ aus der Hochzahl.
  ---
  Durch $\ln 3$ dividieren: $x = \frac{\ln 50}{\ln 3} \approx 3{,}56$. Probe: $3^{3{,}56} \approx 50{,}0$ ✓.
```

```aufgabe
id: fr-diag-ungleichung
titel: Ungleichung mit negativem Faktor
niveau: 1
art: check
angabe: |
  Löse die Ungleichung $-3x < 12$.
  Herkunft: [Kapitel 2, Ungleichungen](/lernen/mathe3/gleichungen/ungleichungen).
teile:
  - typ: auswahl
    optionen:
      - '$x > -4$'
      - '$x < -4$'
      - '$x > 4$'
      - '$x < 4$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Beim Dividieren durch die **negative** Zahl $-3$ dreht sich das Ungleichheitszeichen um. Probe mit
          $x = -5$: $-3 \cdot (-5) = 15$, und $15 < 12$ ist falsch.
      - wert: 3
        meldung: |
          Das Vorzeichen der Grenze stimmt nicht: $12 : (-3) = -4$. Außerdem dreht sich das Zeichen um.
      - wert: 2
        meldung: |
          Die Richtung stimmt, aber $12 : (-3)$ ist $-4$, nicht $4$.
hinweise:
  - 'Dividiere durch $-3$. Was passiert dabei mit dem Zeichen $<$?'
loesung: |
  Wir dividieren beide Seiten durch $-3$. Weil $-3$ negativ ist, wird aus $<$ ein $>$.
  ---
  Ergebnis: $x > -4$. Probe mit $x = 0$: $0 < 12$ ✓.
```

```aufgabe
id: fr-diag-quadratisch
titel: Eine quadratische Gleichung
niveau: 1
art: check
angabe: |
  Bestimme die **positive** Lösung von $n^2 + n - 30 = 0$.
  Herkunft: [Kapitel 2, Quadratische Gleichungen](/lernen/mathe3/gleichungen/quadratische-gleichungen).
teile:
  - typ: zahl
    label: '$n$'
    loesung: "(-1 + sqrt(1 + 120))/2"
    anzeige: '5'
    fehler:
      - wert: "6"
        meldung: |
          $6$ ist der Betrag der **negativen** Lösung $-6$. Probe: $36 + 6 - 30 = 12 \ne 0$.
      - wert: "-6"
        meldung: |
          $-6$ löst die Gleichung, ist aber negativ. Gefragt ist die positive Lösung.
hinweise:
  - 'Kleine Lösungsformel mit $p = 1$ und $q = -30$, oder zerlegen: Welche zwei Zahlen haben das Produkt $-30$ und die Summe $1$?'
loesung: |
  Zerlegen: $n^2 + n - 30 = (n + 6)(n - 5)$, denn $6 \cdot (-5) = -30$ und $6 + (-5) = 1$.
  ---
  Die Lösungen sind $n = -6$ und $n = 5$. Positiv ist $n = 5$. Probe: $25 + 5 - 30 = 0$ ✓.
```

```aufgabe
id: fr-diag-steigung
titel: Steigung einer Geraden
niveau: 1
art: check
angabe: |
  Eine Gerade geht durch die Punkte $(1 \mid 5)$ und $(3 \mid 11)$. Wie groß ist ihre Steigung $k$?
  Herkunft: [Kapitel 4, Lineare Funktionen](/lernen/mathe3/funktionen/lineare-funktionen).
teile:
  - typ: zahl
    label: '$k$'
    loesung: "(11 - 5)/(3 - 1)"
    anzeige: '3'
    fehler:
      - wert: "6"
        meldung: |
          $6$ ist der Höhenunterschied. Die Steigung ist der Höhenunterschied **pro Schritt nach rechts**. Hier
          geht es $2$ nach rechts.
      - wert: "1/3"
        meldung: |
          Du hast den Kehrwert berechnet. Die Steigung ist „hinauf durch hinüber“, also $\frac{6}{2}$.
hinweise:
  - 'Steigung $=$ Unterschied der $y$-Werte geteilt durch Unterschied der $x$-Werte.'
loesung: |
  Steigung $k = \frac{\Delta y}{\Delta x}$. Dabei ist $\Delta y$ (lies „Delta y“) der Unterschied der $y$-Werte und $\Delta x$ der Unterschied der $x$-Werte.
  ---
  $k = \frac{11 - 5}{3 - 1} = \frac{6}{2} = 3$. Pro Schritt nach rechts geht es $3$ nach oben.
```

```aufgabe
id: fr-diag-einsetzen
titel: Einen Term einsetzen
niveau: 1
art: check
angabe: |
  Für $f(x) = x^2 - 2x$ ist $f(a + 1)$ gesucht. Vereinfache so weit wie möglich.
  Herkunft: [Kapitel 1, Terme umformen](/lernen/mathe3/zahlen/terme-umformen-binomische-formeln-und-faktorisieren).
teile:
  - typ: term
    label: '$f(a + 1) =$'
    variable: a
    loesung: "a^2 - 1"
    fehler:
      - wert: "a^2 - 2a - 1"
        meldung: |
          Beim Quadrieren fehlt das Mittelglied: $(a + 1)^2 = a^2 + 2a + 1$, nicht $a^2 + 1$.
      - wert: "a^2 - 2a + 1"
        meldung: |
          Du hast $f(a) + 1$ berechnet. Gemeint ist: Überall, wo $x$ steht, setzt du $(a + 1)$ ein.
hinweise:
  - 'Ersetze **jedes** $x$ durch $(a + 1)$ mit Klammer: $(a + 1)^2 - 2(a + 1)$.'
loesung: |
  Jedes $x$ durch $(a + 1)$ ersetzen: $f(a + 1) = (a + 1)^2 - 2(a + 1)$.
  ---
  Ausmultiplizieren mit der binomischen Formel: $a^2 + 2a + 1 - 2a - 2 = a^2 - 1$. Probe mit $a = 2$: $f(3) = 9 - 6 = 3$ und $2^2 - 1 = 3$ ✓.
```

## Was ist eine Folge?

```aufgabe
id: fr-v-funktionswert
titel: Einen Funktionswert berechnen
niveau: 1
art: check
angabe: |
  Gegeben ist $f(x) = x^2 - 1$. Berechne $f(-3)$.
  (Vorwissen aus [Kapitel 4, Was ist eine Funktion?](/lernen/mathe3/funktionen/was-ist-eine-funktion))
teile:
  - typ: zahl
    loesung: "(-3)^2 - 1"
    anzeige: '8'
    fehler:
      - wert: "-10"
        meldung: |
          Du hast $-3^2 = -9$ gerechnet. Setzt man $-3$ ein, gehört die Klammer dazu: $(-3)^2 = 9$.
hinweise:
  - 'Setze $(-3)$ **mit Klammer** für $x$ ein.'
loesung: |
  Einsetzen mit Klammer: $f(-3) = (-3)^2 - 1$.
  ---
  $(-3)^2 = 9$, also $f(-3) = 9 - 1 = 8$.
```

**Worum geht es?** Wir lernen, was eine Folge ist, wie man sie aufschreibt und wie man sie zeichnet.

Stell dir vor, du notierst jeden Morgen die Temperatur. Am ersten Tag $12$ Grad, am zweiten $14$ Grad, am dritten
$11$ Grad. Du bekommst eine **durchnummerierte Liste von Zahlen**. Jede Zahl hat eine Nummer: Die $14$ ist der
Wert Nummer $2$. Genau das ist eine Folge.

:::definition[Folge]
Eine **Folge** ordnet jeder natürlichen Zahl $n = 1, 2, 3, \dots$ genau eine reelle Zahl $a_n$ zu.

- Die Zahlen $a_1, a_2, a_3, \dots$ heißen **Glieder** der Folge. Man liest $a_n$ als „a n“ oder „a Index n“.
- Die Nummer $n$ heißt **Index**. Sie sagt, an welcher Stelle das Glied steht.
- Die ganze Folge schreibt man kurz $(a_n)$ oder $(a_n)_{n \ge 1}$. Manche Prüfungsangaben schreiben $\{a_n\}_{n \in \N}$.
:::

Eine Folge ist also eine **Funktion**, deren Eingaben nur die Zahlen $1, 2, 3, \dots$ sind. Statt $f(3)$ schreibt
man $a_3$. Das Zeichen $\N$ steht für die natürlichen Zahlen. In diesem Kurs beginnen Folgen bei $n = 1$, wenn
nichts anderes dasteht. In der Informatik zählt man oft ab $0$. Ist eine Angabe unklar, schreib in der Prüfung
dazu, womit du beginnst.

**Beispiel und Nichtbeispiel.** Die Liste $2, 4, 6, 8, \dots$ mit $a_n = 2n$ ist eine Folge. Dagegen ist
$b_n = \frac{1}{n - 3}$ **keine** Folge ab $n = 1$, denn für $n = 3$ steht im Nenner $0$. Dann fehlt das dritte
Glied, und jede Nummer muss ein Glied haben.

:::achtung[Eine Folge ist mehr als die Menge ihrer Werte]
Falsch: „Die Folge $1, -1, 1, -1, \dots$ ist dasselbe wie die Menge $\{-1, 1\}$.“

Richtig: Bei einer Folge zählen **Reihenfolge und Wiederholungen**. Die Folge $-1, 1, -1, 1, \dots$ hat dieselbe
Wertemenge $\{-1, 1\}$, ist aber eine andere Folge, denn schon ihr erstes Glied ist anders.
:::

### Explizite Darstellung

Bei der **expliziten** Darstellung gibt eine Formel jedes Glied direkt aus seinem Index an. Explizit heißt
„ausdrücklich“. Du setzt den Index ein und rechnest aus, genau wie bei einem Funktionsterm.

:::beispiel[Glieder aus einer expliziten Formel]
Gegeben ist $a_n = \dfrac{2n + 1}{n + 3}$. Wir setzen der Reihe nach ein:

- $a_1 = \frac{2 \cdot 1 + 1}{1 + 3} = \frac34$,
- $a_2 = \frac{5}{5} = 1$,
- $a_3 = \frac{7}{6} \approx 1{,}17$,
- $a_4 = \frac{9}{7} \approx 1{,}29$.

Auch ein weit entferntes Glied geht sofort: $a_{50} = \frac{101}{53} \approx 1{,}91$. Man muss die Glieder davor
nicht kennen. Das ist der große Vorteil der expliziten Form.
:::

Einige Folgen begegnen dir immer wieder. Lies jede Zeile und überlege, ob du die Glieder selbst so berechnet hättest.

- $a_n = \frac1n$ hat die Glieder $1;\ \frac12;\ \frac13;\ \frac14$. Sie werden kleiner und nähern sich $0$.
- $a_n = n^2$ hat die Glieder $1;\ 4;\ 9;\ 16$. Sie wachsen über jede Grenze.
- $a_n = (-1)^n$ hat die Glieder $-1;\ 1;\ -1;\ 1$. Sie springen hin und her.
- $a_n = \frac{n}{n + 1}$ hat die Glieder $\frac12;\ \frac23;\ \frac34;\ \frac45$. Sie werden größer und nähern sich $1$.

```aufgabe
id: fr-glieder-explizit
titel: Glieder einer expliziten Folge
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Gegeben ist die Folge $a_n = \dfrac{n^2 - 1}{2n}$. Berechne $a_1$, $a_4$ und $a_{10}$.
teile:
  - typ: zahl
    label: '$a_1$'
    loesung: "(1^2 - 1)/(2*1)"
  - typ: zahl
    label: '$a_4$'
    loesung: "(4^2 - 1)/(2*4)"
    anzeige: '\tfrac{15}{8} = 1{,}875'
    fehler:
      - wert: "4^2 - 1/(2*4)"
        meldung: |
          Der Bruchstrich wirkt wie eine Klammer um den ganzen Zähler. Rechne zuerst $4^2 - 1 = 15$ und teile dann durch $2 \cdot 4 = 8$.
  - typ: zahl
    label: '$a_{10}$'
    loesung: "(10^2 - 1)/(2*10)"
    anzeige: '\tfrac{99}{20} = 4{,}95'
    fehler:
      - wert: "(10^2 - 1)/2"
        meldung: |
          Im Nenner steht $2n$, also $2 \cdot 10 = 20$. Du hast nur durch $2$ geteilt.
hinweise:
  - 'Setze den Index für $n$ ein, im Zähler **und** im Nenner.'
loesung: |
  Ansatz: Bei einer expliziten Formel setzt man den Index direkt ein. Für $n = 1$: $a_1 = \frac{1 - 1}{2} = 0$.
  ---
  Für $n = 4$: $a_4 = \frac{16 - 1}{8} = \frac{15}{8} = 1{,}875$.
  ---
  Für $n = 10$: $a_{10} = \frac{100 - 1}{20} = \frac{99}{20} = 4{,}95$. Kontrolle: Die Werte wachsen, weil der Zähler schneller wächst als der Nenner.
```

### Rekursive Darstellung

Bei der **rekursiven** Darstellung gibt man ein Startglied an und eine Vorschrift, wie aus einem Glied das
nächste entsteht. Rekursiv heißt „zurückgreifend“: Jedes Glied greift auf das vorige zurück. Für
Programmierer ist das eine Schleife:

```
a = 3
wiederhole:
    a = 2*a - 1
```

:::beispiel[Eine rekursiv gegebene Folge]
Gegeben ist $a_1 = 3$ und $a_{n+1} = 2a_n - 1$. Die Vorschrift liest man so: „Das nächste Glied ist das Doppelte
des aktuellen Glieds minus $1$.“ Wir gehen Schritt für Schritt:

- $a_2 = 2 \cdot a_1 - 1 = 2 \cdot 3 - 1 = 5$,
- $a_3 = 2 \cdot 5 - 1 = 9$,
- $a_4 = 2 \cdot 9 - 1 = 17$,
- $a_5 = 2 \cdot 17 - 1 = 33$.

Jedes Glied ist um $1$ größer als eine Zweierpotenz: $3 = 2 + 1$, $5 = 4 + 1$, $9 = 8 + 1$. Man **vermutet**
deshalb $a_n = 2^n + 1$. Ob das für **alle** $n$ stimmt, kann man mit der vollständigen Induktion beweisen. Das
lernst du in [8.10 Induktion bei Teilbarkeit, Ungleichungen und Rekursionen](/lernen/mathe3/folgen-reihen/induktion-bei-teilbarkeit-ungleichungen-und-rekursionen).
:::

Rekursionen sind natürlich, wenn ein Zustand vom vorigen abhängt. Der Kontostand im nächsten Jahr ergibt sich
aus dem heutigen Kontostand. Der Nachteil: Für $a_{100}$ musst du ohne explizite Formel alle $99$ Glieder davor
berechnen. Die berühmteste rekursive Folge ist die **Fibonacci-Folge**. Sie braucht zwei Startwerte:
$f_1 = f_2 = 1$ und $f_{n+2} = f_{n+1} + f_n$. Jedes Glied ist die Summe der beiden vorigen: $1, 1, 2, 3, 5, 8, 13, \dots$

:::achtung[Index erhöhen heißt nicht Glied erhöhen]
Falsch: „Bei $a_n = n^2$ ist $a_{n+1} = n^2 + 1$.“

Richtig: $a_{n+1}$ ist das **nächste Glied**. Man ersetzt jedes $n$ durch $(n + 1)$: $a_{n+1} = (n + 1)^2 = n^2 + 2n + 1$.
Probe mit $n = 2$: Das Glied nach $a_2 = 4$ ist $a_3 = 9$, und $2^2 + 1 = 5$ wäre falsch.
:::

```reflexion
frage: Warum braucht eine rekursiv gegebene Folge immer einen Startwert? Was passiert bei $a_{n+1} = 2a_n - 1$ ohne Angabe von $a_1$?
antwort: |
  Die Vorschrift sagt nur, wie man vom einen Glied zum nächsten kommt. Ohne Startwert weiß man nicht, wo man
  beginnt. Mit $a_1 = 3$ entsteht $3, 5, 9, 17, \dots$, mit $a_1 = 1$ dagegen $1, 1, 1, \dots$, mit $a_1 = 0$
  die Folge $0, -1, -3, -7, \dots$ Dieselbe Vorschrift liefert also ganz verschiedene Folgen. Erst Startwert und
  Vorschrift zusammen legen die Folge fest.
```

```aufgabe
id: fr-rekursiv-glieder
titel: Rekursiv gegebene Folge
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Eine Folge ist rekursiv gegeben durch $a_1 = 2$ und $a_{n+1} = 3a_n - 2$. Berechne $a_5$.
teile:
  - typ: zahl
    label: '$a_5$'
    loesung: "3*(3*(3*(3*2 - 2) - 2) - 2) - 2"
    anzeige: '82'
    fehler:
      - wert: "28"
        meldung: |
          $28$ ist $a_4$. Zähle die Schritte: Von $a_1$ nach $a_5$ brauchst du vier Anwendungen der Vorschrift.
      - wert: "3*5 - 2"
        meldung: |
          In der Vorschrift steht das **vorige Glied** $a_n$, nicht der Index $n$. Du musst die Glieder der Reihe nach berechnen.
hinweise:
  - 'Berechne der Reihe nach $a_2$, $a_3$, $a_4$ und $a_5$. Jedes Mal: vorheriges Glied mal $3$, dann minus $2$.'
loesung: |
  Ansatz: Eine Rekursion wertet man Schritt für Schritt aus, weil jedes Glied das vorige braucht.
  $a_2 = 3 \cdot 2 - 2 = 4$ und $a_3 = 3 \cdot 4 - 2 = 10$.
  ---
  $a_4 = 3 \cdot 10 - 2 = 28$ und $a_5 = 3 \cdot 28 - 2 = 82$.
  ---
  Kontrolle: Die Glieder $2, 4, 10, 28, 82$ sind jeweils um $1$ größer als $1, 3, 9, 27, 81$. Das passt zu einem Muster mit Dreierpotenzen.
```

```aufgabe
id: fr-schleife-folge
titel: Was berechnet die Schleife?
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Ein Programm startet mit $x = 1$ und führt dann wiederholt den Befehl `x = x/2 + 3` aus.
  Der Startwert und die Werte nach jedem Durchlauf bilden eine Folge. Der Startwert ist das erste Glied $a_1 = 1$.

  a) Gib die Rekursionsvorschrift an. Welche Formel für $a_{n+1}$ passt?

  b) Welchen Wert hat $x$ nach dem dritten Durchlauf, also $a_4$?
teile:
  - typ: auswahl
    label: 'a)'
    optionen:
      - '$a_{n+1} = \frac{a_n}{2} + 3$'
      - '$a_{n+1} = \frac{n}{2} + 3$'
      - '$a_{n+1} = \frac{a_n + 3}{2}$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Im Programm wird der **alte Wert von x** verwendet, nicht die Nummer des Durchlaufs.
      - wert: 2
        meldung: |
          `x/2 + 3` heißt: zuerst halbieren, dann $3$ addieren. Die $3$ wird nicht mit halbiert.
  - typ: zahl
    label: 'b) $a_4$'
    loesung: "((1/2 + 3)/2 + 3)/2 + 3"
    anzeige: '5{,}375'
    fehler:
      - wert: "4.75"
        meldung: |
          $4{,}75$ ist $a_3$, der Wert nach dem zweiten Durchlauf. Der Startwert $a_1 = 1$ zählt als erstes Glied.
hinweise:
  - 'Der neue Wert entsteht aus dem alten: halbieren, dann $3$ addieren.'
  - 'Rechne $a_2$, $a_3$, $a_4$ der Reihe nach aus.'
loesung: |
  Ansatz: Jeder Durchlauf macht aus dem alten Wert den neuen. Das ist eine Rekursion: $a_{n+1} = \frac{a_n}{2} + 3$.
  ---
  $a_2 = \frac12 + 3 = 3{,}5$ und $a_3 = \frac{3{,}5}{2} + 3 = 4{,}75$.
  ---
  $a_4 = \frac{4{,}75}{2} + 3 = 2{,}375 + 3 = 5{,}375$. Beobachtung: Die Werte wachsen, aber immer langsamer. Sie nähern sich der $6$, denn $\frac{6}{2} + 3 = 6$.
```

### Folgen zeichnen

Weil eine Folge nur an den Stellen $n = 1, 2, 3, \dots$ Werte hat, besteht ihr Graph aus **einzelnen Punkten**
$(n \mid a_n)$. Man nennt ihn **Punktgraph**. Verbinde die Punkte nicht zu einer Linie. Sonst sieht es so aus,
als gäbe es auch einen Wert bei $n = 1{,}5$.

```plot
x: [0, 10.5]
y: [-1.2, 2.2]
achsen: { x: "n", y: "aₙ" }
punkte:
  - { x: 1, y: 0.75, farbe: 0 }
  - { x: 2, y: 1, farbe: 0 }
  - { x: 3, y: 1.1667, farbe: 0 }
  - { x: 4, y: 1.2857, farbe: 0 }
  - { x: 5, y: 1.375, farbe: 0 }
  - { x: 6, y: 1.4444, farbe: 0 }
  - { x: 7, y: 1.5, farbe: 0 }
  - { x: 8, y: 1.5455, farbe: 0 }
  - { x: 9, y: 1.5833, farbe: 0 }
  - { x: 10, y: 1.6154, label: "(2n+1)/(n+3)", farbe: 0 }
  - { x: 1, y: -1, farbe: 1 }
  - { x: 2, y: 0.5, farbe: 1 }
  - { x: 3, y: -0.3333, farbe: 1 }
  - { x: 4, y: 0.25, farbe: 1 }
  - { x: 5, y: -0.2, farbe: 1 }
  - { x: 6, y: 0.1667, farbe: 1 }
  - { x: 7, y: -0.1429, farbe: 1 }
  - { x: 8, y: 0.125, farbe: 1 }
  - { x: 9, y: -0.1111, farbe: 1 }
  - { x: 10, y: 0.1, label: "(−1)ⁿ/n", farbe: 1 }
strecken:
  - { von: [0, 2], nach: [10.5, 2], gestrichelt: true, farbe: 0 }
beschriftung: Punktgraphen zweier Folgen. Die blauen Punkte der Folge (2n+1)/(n+3) steigen und bleiben unter der gestrichelten Linie y = 2. Die orangen Punkte der Folge (−1)ⁿ/n springen abwechselnd unter und über die Achse und kommen ihr immer näher.
```

Eine zweite Darstellung ist der **Zahlenstrahl**. Man markiert die Werte $a_1, a_2, \dots$ auf einer Zahlengeraden.
Dort sieht man gut, ob sich die Glieder an einer Stelle drängen. Die Folge $\frac1n$ drängt sich zum Beispiel
immer dichter an die $0$.

```aufgabe
id: fr-punktgraph-lesen
titel: Welche Formel passt zum Punktgraphen?
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Der Punktgraph zeigt die ersten fünf Glieder einer Folge: $4;\ 2{,}5;\ 2;\ 1{,}75;\ 1{,}6$.
  Welche Formel passt?
plot:
  x: [0, 6]
  y: [0, 4.5]
  achsen: { x: "n", y: "aₙ" }
  punkte:
    - { x: 1, y: 4 }
    - { x: 2, y: 2.5 }
    - { x: 3, y: 2 }
    - { x: 4, y: 1.75 }
    - { x: 5, y: 1.6 }
teile:
  - typ: auswahl
    optionen:
      - '$a_n = 1 + \frac{3}{n}$'
      - '$a_n = \frac{4}{n}$'
      - '$a_n = 4 - 1{,}5\,(n - 1)$'
      - '$a_n = 3 + \frac{1}{n}$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Bei $n = 1$ passt es, aber $a_2 = \frac42 = 2$ statt $2{,}5$. Prüfe immer mehr als ein Glied.
      - wert: 2
        meldung: |
          Das ist eine Gerade mit konstanter Abnahme $1{,}5$. Die Punkte fallen aber immer langsamer: von $4$ auf $2{,}5$, dann nur noch auf $2$.
      - wert: 3
        meldung: |
          Diese Folge beginnt bei $4$, aber $a_2 = 3{,}5$. Die Glieder nähern sich der $3$, nicht der $1$.
hinweise:
  - 'Setze in jede Formel $n = 1$ und $n = 2$ ein und vergleiche mit $4$ und $2{,}5$.'
loesung: |
  Ansatz: Eine Formel passt nur, wenn sie **alle** gezeigten Glieder liefert. Wir prüfen $n = 1$ und $n = 2$.
  ---
  Nur $1 + \frac3n$ liefert $4$ und $2{,}5$. Kontrolle der restlichen Punkte: $1 + \frac33 = 2$, $1 + \frac34 = 1{,}75$, $1 + \frac35 = 1{,}6$ ✓.
```

### Eine Formel zu gegebenen Gliedern finden

Oft sind die ersten Glieder gegeben, und du sollst eine explizite Formel angeben. Diese Strategien helfen:

1. **Konstante Differenz?** Bei $3, 7, 11, 15$ kommt immer $4$ dazu. Dann ist $a_n = 4n + c$, hier $a_n = 4n - 1$.
2. **Konstanter Quotient?** Bei $5, 10, 20, 40$ verdoppelt sich jedes Glied. Dann passt $a_n = 5 \cdot 2^{n-1}$.
3. **Zähler und Nenner getrennt** betrachten. Bei $\frac12, \frac23, \frac34$ ist der Zähler $n$ und der Nenner $n + 1$.
4. **Wechselndes Vorzeichen** erzeugt der Faktor $(-1)^n$, wenn das erste Glied negativ ist. Ist es positiv, nimmt man $(-1)^{n+1}$.
5. **Bekannte Folgen** wiedererkennen: Quadratzahlen $1, 4, 9, 16$ oder Zweierpotenzen $2, 4, 8, 16$.

:::beispiel[Eine Formel finden und prüfen]
Gesucht ist eine Formel für $2, 5, 10, 17, 26, \dots$

**Schritt 1, Differenzen bilden.** Die Abstände sind $3, 5, 7, 9$. Sie sind nicht konstant, also ist die Folge
nicht arithmetisch.

**Schritt 2, bekannte Folge suchen.** Zieht man von jedem Glied $1$ ab, entsteht $1, 4, 9, 16, 25$. Das sind die
Quadratzahlen $n^2$.

**Schritt 3, Formel aufschreiben.** $a_n = n^2 + 1$.

**Schritt 4, Probe.** $a_1 = 2$ ✓, $a_5 = 26$ ✓.
:::

:::achtung[Endlich viele Glieder legen keine Folge fest]
„Setze fort: $1, 2, 4, 8, 16, \dots$“ hat keine eindeutige Antwort. Naheliegend ist $32$ mit $a_n = 2^{n-1}$. Es gibt
aber ein bekanntes Problem mit der Antwort $1, 2, 4, 8, 16, 31$. Man setzt $n$ Punkte auf einen Kreis und verbindet
jeden Punkt mit jedem durch eine gerade Linie. Gezählt wird, in wie viele Teile die Kreisfläche höchstens zerfällt. Eine Folge ist erst durch eine **Vorschrift** festgelegt. Gefragt ist darum immer die
„naheliegende“ Formel.
:::

:::achtung[Falsches Vorzeichen-Muster]
Falsch: „Für $1, -\frac12, \frac13, -\frac14, \dots$ passt $a_n = \frac{(-1)^n}{n}$.“

Richtig: Diese Formel liefert $a_1 = \frac{-1}{1} = -1$. Das erste Glied soll aber positiv sein. Richtig ist
$a_n = \frac{(-1)^{n+1}}{n}$. Mach bei jeder Formel die Probe mit $n = 1$.
:::

```aufgabe
id: fr-formel-finden
titel: Explizite Formel finden
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  Gib jeweils eine explizite Formel $a_n$ (mit $n \ge 1$) für die naheliegende Fortsetzung an.

  a) $5,\ 8,\ 11,\ 14,\ 17,\ \dots$

  b) $\frac13,\ \frac25,\ \frac37,\ \frac49,\ \dots$
teile:
  - typ: term
    label: 'a) $a_n =$'
    variable: n
    bereich: [1, 10]
    loesung: "3n + 2"
    fehler:
      - wert: "3n + 5"
        meldung: |
          Probe mit $n = 1$: $3 + 5 = 8$. Das ist das **zweite** Glied. Du hast so gerechnet, als würde die Folge bei $n = 0$ beginnen.
  - typ: term
    label: 'b) $a_n =$'
    variable: n
    bereich: [1, 10]
    loesung: "n/(2n + 1)"
    fehler:
      - wert: "n/(n + 2)"
        meldung: |
          Der Nenner wächst um $2$ pro Schritt ($3, 5, 7, 9$), nicht um $1$. Probe mit $n = 2$: $\frac{2}{4}$ statt $\frac25$.
hinweise:
  - 'Bei a) ist die Differenz aufeinanderfolgender Glieder konstant. Setze $a_n = 3n + c$ an.'
  - 'Bei b) Zähler und Nenner getrennt betrachten. Der Nenner wächst jedes Mal um $2$.'
loesung: |
  Ansatz: Wir suchen in a) eine konstante Differenz und betrachten in b) Zähler und Nenner getrennt.
  ---
  a) Die Differenz ist immer $3$, also $a_n = 3n + c$. Bei $n = 1$ soll $5$ herauskommen: $3 + c = 5$, also $c = 2$ und $a_n = 3n + 2$.
  ---
  b) Zähler: $1, 2, 3, 4$, also $n$. Nenner: $3, 5, 7, 9$, also $2n + 1$. Damit $a_n = \frac{n}{2n + 1}$.
  ---
  Probe: $a_5 = 3 \cdot 5 + 2 = 17$ ✓ und $a_4 = \frac{4}{9}$ ✓.
```

```aufgabe
id: fr-vorzeichen
titel: Wechselndes Vorzeichen
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  Die Folge beginnt mit $-2,\ 4,\ -8,\ 16,\ -32,\ \dots$ Berechne für die naheliegende Fortsetzung $a_9$
  und gib an, welche Formel passt.
teile:
  - typ: zahl
    label: '$a_9$'
    loesung: "(-2)^9"
    anzeige: '-512'
    fehler:
      - wert: "512"
        meldung: |
          Das Vorzeichen stimmt nicht. Bei ungeradem Index ist das Glied negativ: $a_1 = -2$, $a_3 = -8$.
  - typ: auswahl
    label: 'Passende Formel'
    optionen:
      - '$a_n = -2^n$'
      - '$a_n = (-2)^n$'
      - '$a_n = (-1)^{n+1}\, 2^n$'
      - '$a_n = -2n$'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          $-2^n$ bedeutet $-(2^n)$. Das Minus steht außerhalb der Potenz, also ist jedes Glied negativ. $a_2$ wäre $-4$.
      - wert: 2
        meldung: |
          Mit $(-1)^{n+1}$ ist das erste Glied positiv: $a_1 = 2$. Gegeben ist aber $a_1 = -2$.
      - wert: 3
        meldung: |
          $-2n$ ändert sich immer um $-2$: $-2, -4, -6$. Hier verdoppelt sich aber der Betrag.
hinweise:
  - 'Betrachte Betrag und Vorzeichen getrennt. Der Betrag verdoppelt sich.'
  - 'Bei $n = 1$ ist das Glied negativ, bei $n = 2$ positiv. Welcher Faktor erzeugt das?'
loesung: |
  Ansatz: Betrag und Vorzeichen getrennt untersuchen. Betrag: $2, 4, 8, 16$, also $2^n$.
  ---
  Vorzeichen: negativ bei ungeradem $n$. Das liefert der Faktor $(-1)^n$. Zusammen $a_n = (-1)^n\,2^n = (-2)^n$.
  ---
  $a_9 = (-2)^9 = -512$. Kontrolle: $9$ ist ungerade, also muss das Glied negativ sein ✓.
```

```aufgabe
id: fr-rekursion-vermutung
titel: Von der Rekursion zur Vermutung
niveau: 3
lernziel: 0
kompetenz: begruenden
angabe: |
  Eine Folge ist gegeben durch $a_1 = 1$ und $a_{n+1} = a_n + 2n + 1$.

  a) Berechne $a_5$.

  b) Stelle eine Vermutung für eine explizite Formel auf.

  c) Berechne mit deiner Formel $a_{20}$.
teile:
  - typ: zahl
    label: 'a) $a_5$'
    loesung: "1 + 3 + 5 + 7 + 9"
    anzeige: '25'
    fehler:
      - wert: "16"
        meldung: |
          $16$ ist $a_4$. Von $a_1$ bis $a_5$ sind es vier Schritte.
  - typ: term
    label: 'b) $a_n =$'
    variable: n
    bereich: [1, 10]
    loesung: "n^2"
    fehler:
      - wert: "2n + 1"
        meldung: |
          $2n + 1$ ist der **Zuwachs** von einem Glied zum nächsten, nicht das Glied selbst.
  - typ: zahl
    label: 'c) $a_{20}$'
    loesung: "20^2"
    anzeige: '400'
hinweise:
  - 'Achte auf das $n$ in der Vorschrift: Für $a_2$ ist $n = 1$, also kommt $2 \cdot 1 + 1 = 3$ dazu.'
  - 'Vergleiche die Glieder $1, 4, 9, \dots$ mit bekannten Zahlen.'
loesung: |
  Ansatz: Zuerst die Rekursion Schritt für Schritt auswerten. Dabei ändert sich auch der Zuwachs $2n + 1$.
  ---
  a) $a_2 = 1 + 3 = 4$, $a_3 = 4 + 5 = 9$, $a_4 = 9 + 7 = 16$, $a_5 = 16 + 9 = 25$.
  ---
  b) Die Glieder $1, 4, 9, 16, 25$ sind die Quadratzahlen. Vermutung: $a_n = n^2$. Das ist plausibel, denn $(n + 1)^2 = n^2 + 2n + 1$ ist genau die Vorschrift.
  ---
  c) $a_{20} = 20^2 = 400$. Ohne Formel müsstest du $19$ Schritte rechnen. Bewiesen ist die Vermutung erst mit vollständiger Induktion.
gefuehrt:
  - text: Berechne $a_2$. Für $n = 1$ kommt $2 \cdot 1 + 1$ dazu.
    teil: { typ: zahl, loesung: "1 + 3" }
    erklaerung: '$a_2 = a_1 + 3 = 4$.'
  - text: Berechne $a_3$. Jetzt ist $n = 2$.
    teil:
      typ: zahl
      loesung: "4 + 5"
      fehler:
        - wert: "7"
          meldung: 'Der Zuwachs hängt von $n$ ab. Für $n = 2$ ist er $2 \cdot 2 + 1 = 5$, nicht wieder $3$.'
    erklaerung: '$a_3 = 4 + 5 = 9$.'
  - text: Vergleiche $1, 4, 9$ mit bekannten Zahlen. Welches Muster siehst du?
    erklaerung: 'Es sind die Quadratzahlen $1^2, 2^2, 3^2$.'
  - text: Gib die vermutete Formel an.
    teil: { typ: term, variable: n, bereich: [1, 10], loesung: "n^2" }
    erklaerung: 'Vermutung $a_n = n^2$. Sie passt zur Vorschrift, weil $(n + 1)^2 - n^2 = 2n + 1$ ist.'
```

## Arithmetische Folgen

```aufgabe
id: fr-v-lineare-gleichung
titel: Eine lineare Gleichung lösen
niveau: 1
art: check
angabe: |
  Löse $4 + (n - 1) \cdot 3 = 31$ nach $n$.
  (Vorwissen aus [Kapitel 2, Lineare Gleichungen](/lernen/mathe3/gleichungen/lineare-gleichungen))
teile:
  - typ: zahl
    label: '$n$'
    loesung: "(31 - 4)/3 + 1"
    anzeige: '10'
    fehler:
      - wert: "9"
        meldung: |
          $9$ ist der Wert von $n - 1$. Du musst am Ende noch $1$ addieren.
hinweise:
  - 'Zuerst $4$ abziehen, dann durch $3$ teilen, dann $1$ addieren.'
loesung: |
  $4$ auf beiden Seiten abziehen: $(n - 1) \cdot 3 = 27$. Durch $3$ teilen: $n - 1 = 9$.
  ---
  $1$ addieren: $n = 10$. Probe: $4 + 9 \cdot 3 = 31$ ✓.
```

**Worum geht es?** Wir untersuchen die einfachste Art, eine Folge zu bauen: Man beginnt bei einer Zahl und addiert
immer **denselben** Betrag.

Solche Folgen kennst du aus dem Alltag. Du wirfst jede Woche $5$ Euro in ein Sparschwein. Im Kino hat jede
Sitzreihe drei Plätze mehr als die Reihe davor. Ein Stapel wächst mit jeder Kiste um dieselbe Höhe.

:::definition[Arithmetische Folge]
Eine Folge $(a_n)$ heißt **arithmetisch**, wenn die Differenz aufeinanderfolgender Glieder immer gleich ist:
$$a_{n+1} - a_n = d \qquad \text{für alle } n \ge 1.$$
Die feste Zahl $d$ heißt **Differenz** der Folge. Das Wort „arithmetisch“ kommt vom **arithmetischen Mittel**,
also dem gewöhnlichen Mittelwert. Warum, siehst du weiter in dieser Lektion.
:::

**Beispiel und Nichtbeispiel.** $10, 7, 4, 1, -2, \dots$ ist arithmetisch mit $d = -3$. Die Quadratzahlen
$1, 4, 9, 16$ sind **nicht** arithmetisch. Ihre Differenzen $3, 5, 7$ sind verschieden.

### Die explizite Formel

Beginnen wir konkret mit $a_1 = 5$ und $d = 4$:

- $a_2 = 5 + 4$, das ist ein Schritt.
- $a_3 = 5 + 2 \cdot 4$, das sind zwei Schritte.
- $a_4 = 5 + 3 \cdot 4$, das sind drei Schritte.

Bis zum Glied Nummer $n$ macht man also $n - 1$ Schritte. Das ist wie bei einem Zaun: Zwischen dem ersten und dem
$n$-ten Pfahl liegen $n - 1$ Zwischenräume. Daraus folgt die Formel.

:::satz[Explizite Formel der arithmetischen Folge]
Für eine arithmetische Folge mit erstem Glied $a_1$ und Differenz $d$ gilt
$$a_n = a_1 + (n - 1)\,d.$$
Allgemeiner gilt für zwei beliebige Indizes $m$ und $n$: $a_n = a_m + (n - m)\,d$. Denn von Nummer $m$ bis Nummer
$n$ sind es $n - m$ Schritte.
:::

Im Beispiel ist $a_n = 5 + (n - 1) \cdot 4 = 4n + 1$. Der Term $4n + 1$ ist **linear** in $n$. Die Punkte
$(n \mid a_n)$ liegen deshalb auf einer Geraden mit Steigung $d$. Arithmetische Folgen sind die Treppenstufen-Version
der linearen Funktionen aus [4.3 Lineare Funktionen](/lernen/mathe3/funktionen/lineare-funktionen). Ist $d > 0$, wächst die Folge.
Ist $d < 0$, fällt sie. Ist $d = 0$, ist sie konstant.

:::beispiel[Sitzreihen im Kino]
Ein Kinosaal hat in der ersten Reihe $18$ Plätze. Jede weitere Reihe hat $3$ Plätze mehr. Wie viele Plätze hat
Reihe $12$?

**Ansatz:** Arithmetische Folge mit $a_1 = 18$ und $d = 3$.

**Rechnung:** Von Reihe $1$ bis Reihe $12$ sind es $11$ Schritte: $a_{12} = 18 + 11 \cdot 3 = 51$.

**Formel für jede Reihe:** $a_n = 18 + (n - 1) \cdot 3 = 3n + 15$. Probe: $a_1 = 18$ ✓.

**Antwort:** Reihe $12$ hat $51$ Plätze.
:::

```plot
x: [0, 7]
y: [0, 27]
achsen: { x: "n", y: "aₙ" }
graphen:
  - { f: "4*x - 1", von: 0.5, bis: 6.5, farbe: 0, gestrichelt: true }
punkte:
  - { x: 1, y: 3, farbe: 0 }
  - { x: 2, y: 7, farbe: 0 }
  - { x: 3, y: 11, farbe: 0 }
  - { x: 4, y: 15, farbe: 0 }
  - { x: 5, y: 19, farbe: 0 }
  - { x: 6, y: 23, label: "aₙ = 4n − 1", farbe: 0 }
beschriftung: Punktgraph der arithmetischen Folge 3, 7, 11, 15, … Alle Punkte liegen auf der gestrichelten Geraden y = 4x − 1. Von Punkt zu Punkt geht es einen Schritt nach rechts und d = 4 nach oben.
```

:::beispiel[Die Folge aus zwei Gliedern bestimmen]
Von einer arithmetischen Folge kennt man $a_3 = 11$ und $a_9 = 35$. Gesucht sind $d$, $a_1$ und die Formel.

**Schritt 1, Schritte zählen.** Von Nummer $3$ bis Nummer $9$ sind es $9 - 3 = 6$ Schritte.

**Schritt 2, $d$ bestimmen.** In $6$ Schritten wächst die Folge um $35 - 11 = 24$. Also ist $6d = 24$ und $d = 4$.

**Schritt 3, $a_1$ bestimmen.** Von $a_1$ bis $a_3$ sind es $2$ Schritte: $a_1 = a_3 - 2d = 11 - 8 = 3$.

**Schritt 4, Formel und Probe.** $a_n = 3 + (n - 1) \cdot 4 = 4n - 1$. Probe: $a_9 = 36 - 1 = 35$ ✓.
:::

:::merke[Rezept: arithmetische Folge bestimmen]
1. Aus zwei Gliedern $a_m$ und $a_k$: $d = \dfrac{a_k - a_m}{k - m}$, also Unterschied der Werte durch Anzahl der Schritte.
2. Erstes Glied: $a_1 = a_m - (m - 1)\,d$.
3. Formel $a_n = a_1 + (n - 1)\,d$ aufschreiben und mit einem gegebenen Glied prüfen.
4. Ist der Index zum Wert $w$ gesucht, löse $a_1 + (n - 1)\,d = w$. Ist $n$ keine natürliche Zahl, kommt $w$ in der Folge nicht vor.
:::

:::achtung[n Schritte statt n − 1]
Falsch: „$a_1 = 5$, $d = 4$, also $a_n = 5 + 4n$.“

Richtig: Diese Formel liefert $a_1 = 9$ statt $5$. Bis zum ersten Glied macht man **keinen** Schritt. Richtig ist
$a_n = 5 + (n - 1) \cdot 4$. Prüfe jede Formel mit $n = 1$.
:::

:::achtung[Schritte zwischen zwei Gliedern falsch gezählt]
Falsch: „$a_3 = 11$ und $a_9 = 35$. Dazwischen liegen die Glieder $a_3$ bis $a_9$, also $7$ Stück. Darum ist
$d = \frac{24}{7}$.“

Richtig: Gezählt werden die **Schritte**, nicht die Glieder. Sieben Zaunpfähle haben sechs Zwischenräume.
Also $d = \frac{24}{6} = 4$.
:::

Warum heißt die Folge „arithmetisch“? Jedes Glied ist der Mittelwert seiner beiden Nachbarn. Das Glied davor ist
um $d$ kleiner, das Glied danach um $d$ größer. Im Mittel heben sich $-d$ und $+d$ auf:
$$\frac{a_{n-1} + a_{n+1}}{2} = \frac{(a_n - d) + (a_n + d)}{2} = a_n.$$
Zahlenbeispiel: Bei $3, 7, 11$ ist $\frac{3 + 11}{2} = 7$.

```aufgabe
id: fr-arith-glied
titel: Glied einer arithmetischen Folge
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Eine arithmetische Folge hat $a_1 = 7$ und $d = -3$. Berechne $a_{20}$.
teile:
  - typ: zahl
    label: '$a_{20}$'
    loesung: "7 + 19*(-3)"
    anzeige: '-50'
    fehler:
      - wert: "7 + 20*(-3)"
        meldung: |
          Du hast $20$ Schritte gemacht. Von $a_1$ bis $a_{20}$ sind es aber nur $19$ Schritte.
      - wert: "7 + 19*3"
        meldung: |
          Die Differenz ist **negativ**. Die Folge wird kleiner: $7, 4, 1, \dots$
hinweise:
  - 'Formel $a_n = a_1 + (n - 1)\,d$ mit $n = 20$.'
loesung: |
  Ansatz: Formel $a_n = a_1 + (n - 1)\,d$, weil $a_1$ und $d$ bekannt sind. Mit $n = 20$ sind es $19$ Schritte.
  ---
  $a_{20} = 7 + 19 \cdot (-3) = 7 - 57 = -50$. Kontrolle: Die Folge fällt, und $-50 < 7$ ✓.
```

```aufgabe
id: fr-arith-welcher-index
titel: Welches Glied hat diesen Wert?
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Eine arithmetische Folge beginnt mit $12;\ 12{,}75;\ 13{,}5;\ \dots$
  Das wievielte Glied hat den Wert $87$?
teile:
  - typ: zahl
    label: '$n$'
    loesung: "(87 - 12)/0.75 + 1"
    anzeige: '101'
    fehler:
      - wert: "100"
        meldung: |
          $100$ ist die Anzahl der **Schritte** $n - 1$. Das gesuchte Glied hat die Nummer $n = 100 + 1$.
hinweise:
  - 'Bestimme zuerst $d$ und setze dann $a_n = 87$.'
loesung: |
  Ansatz: $a_1 = 12$ und $d = 12{,}75 - 12 = 0{,}75$. Wir lösen $12 + (n - 1) \cdot 0{,}75 = 87$.
  ---
  $(n - 1) \cdot 0{,}75 = 75$, also $n - 1 = 100$ und $n = 101$.
  ---
  Probe: $12 + 100 \cdot 0{,}75 = 87$ ✓. Das $101$. Glied hat den Wert $87$.
```

```aufgabe
id: fr-arith-aus-graph
titel: Vom Punktgraphen zur Formel
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Die Punkte $(1 \mid 2)$, $(2 \mid 3{,}5)$, $(3 \mid 5)$ und $(4 \mid 6{,}5)$ gehören zu einer arithmetischen Folge.
  Gib eine explizite Formel an.
plot:
  x: [0, 5]
  y: [0, 7]
  achsen: { x: "n", y: "aₙ" }
  punkte:
    - { x: 1, y: 2 }
    - { x: 2, y: 3.5 }
    - { x: 3, y: 5 }
    - { x: 4, y: 6.5 }
teile:
  - typ: term
    label: '$a_n =$'
    variable: n
    bereich: [1, 10]
    loesung: "1.5n + 0.5"
    fehler:
      - wert: "1.5n + 2"
        meldung: |
          Probe mit $n = 1$: $1{,}5 + 2 = 3{,}5$. Das ist $a_2$. Der Wert $2$ ist $a_1$, nicht der Achsenabschnitt bei $n = 0$.
hinweise:
  - 'Lies $d$ als Zuwachs von Punkt zu Punkt ab. Dann $a_n = a_1 + (n - 1)\,d$.'
loesung: |
  Ansatz: Von Punkt zu Punkt geht es um $1{,}5$ nach oben, also $d = 1{,}5$. Das erste Glied ist $a_1 = 2$.
  ---
  $a_n = 2 + (n - 1) \cdot 1{,}5 = 1{,}5n + 0{,}5$. Probe: $a_4 = 6 + 0{,}5 = 6{,}5$ ✓.
```

```aufgabe
id: fr-arith-zwei-glieder
titel: Arithmetische Folge aus zwei Gliedern
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Von einer arithmetischen Folge kennt man $a_5 = 23$ und $a_{12} = 58$.
  Bestimme $d$, $a_1$ und $a_{100}$.
teile:
  - typ: zahl
    label: '$d$'
    loesung: "(58 - 23)/(12 - 5)"
    anzeige: '5'
    fehler:
      - wert: "35/8"
        meldung: |
          Du hast die Glieder von $a_5$ bis $a_{12}$ gezählt ($8$ Stück). Entscheidend sind die **Schritte**: $12 - 5 = 7$.
  - typ: zahl
    label: '$a_1$'
    loesung: "23 - 4*5"
    anzeige: '3'
    fehler:
      - wert: "23 - 5*5"
        meldung: |
          Von $a_1$ bis $a_5$ sind es $4$ Schritte, nicht $5$.
  - typ: zahl
    label: '$a_{100}$'
    loesung: "3 + 99*5"
    anzeige: '498'
    fehler:
      - wert: "3 + 100*5"
        meldung: |
          Bis $a_{100}$ sind es $99$ Schritte. Prüfe deine Formel mit $n = 1$.
hinweise:
  - 'Von $a_5$ nach $a_{12}$ sind es $7$ Schritte.'
  - 'Vom ersten Glied zu $a_5$ sind es $4$ Schritte, also $a_1 = a_5 - 4d$.'
loesung: |
  Ansatz: Zwischen zwei bekannten Gliedern zählen wir die Schritte. Von Nummer $5$ bis $12$ sind es $7$. Also $7d = 58 - 23 = 35$ und $d = 5$.
  ---
  $a_1 = a_5 - 4d = 23 - 20 = 3$.
  ---
  $a_{100} = 3 + 99 \cdot 5 = 498$. Probe: $a_{12} = 3 + 11 \cdot 5 = 58$ ✓.
```

```aufgabe
id: fr-arith-kommt-vor
titel: Kommt die Zahl in der Folge vor?
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Gegeben ist die arithmetische Folge $4,\ 11,\ 18,\ 25,\ \dots$

  a) Das wievielte Glied ist $641$?

  b) Kommt die Zahl $500$ in der Folge vor?
teile:
  - typ: zahl
    label: 'a) $n$'
    loesung: "(641 - 4)/7 + 1"
    anzeige: '92'
    fehler:
      - wert: "91"
        meldung: |
          $91$ ist die Anzahl der Schritte $n - 1$. Addiere noch $1$.
  - typ: auswahl
    label: 'b)'
    optionen:
      - 'ja'
      - 'nein'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Löse $4 + (n - 1) \cdot 7 = 500$. Du erhältst $n - 1 = \frac{496}{7} \approx 70{,}9$. Das ist keine ganze Zahl.
hinweise:
  - 'Bestimme $d$ und löse $4 + (n - 1) \cdot 7 = w$ für den jeweiligen Wert $w$.'
  - 'Ein Glied gibt es nur, wenn $n$ eine natürliche Zahl ist.'
loesung: |
  Ansatz: $a_1 = 4$ und $d = 7$, also $a_n = 4 + (n - 1) \cdot 7 = 7n - 3$. Für einen Wert $w$ lösen wir $7n - 3 = w$.
  ---
  a) $7n - 3 = 641$ ergibt $7n = 644$ und $n = 92$. Probe: $7 \cdot 92 - 3 = 641$ ✓.
  ---
  b) $7n - 3 = 500$ ergibt $n = \frac{503}{7} \approx 71{,}86$. Das ist keine natürliche Zahl, also kommt $500$ nicht vor. Kontrolle: $a_{71} = 494$ und $a_{72} = 501$. Die $500$ wird übersprungen.
```

```aufgabe
id: fr-arith-sparen
titel: Steigende Sparbeträge
niveau: 2
lernziel: 1
kompetenz: modellieren
angabe: |
  Lena legt im ersten Monat $20$ Euro zur Seite. In jedem weiteren Monat legt sie $5$ Euro mehr zur Seite als im
  Monat davor.

  a) Wie viel Euro legt sie im 12. Monat zur Seite?

  b) In welchem Monat legt sie zum ersten Mal **mehr als** $100$ Euro zur Seite?
teile:
  - typ: zahl
    label: 'a)'
    einheit: Euro
    loesung: "20 + 11*5"
    anzeige: '75'
    fehler:
      - wert: "20 + 12*5"
        meldung: |
          Im ersten Monat sind es $20$ Euro ohne Erhöhung. Bis zum 12. Monat gibt es $11$ Erhöhungen.
  - typ: zahl
    label: 'b) Monat'
    loesung: "18"
    fehler:
      - wert: "17"
        meldung: |
          Im 17. Monat sind es genau $20 + 16 \cdot 5 = 100$ Euro. Gefragt ist aber **mehr als** $100$ Euro.
hinweise:
  - 'Arithmetische Folge mit $a_1 = 20$ und $d = 5$.'
  - 'Löse die Ungleichung $20 + (n - 1) \cdot 5 > 100$ und nimm die kleinste natürliche Zahl.'
loesung: |
  Ansatz: Jeden Monat kommt derselbe Betrag dazu. Das ist eine arithmetische Folge mit $a_1 = 20$ und $d = 5$.
  ---
  a) $a_{12} = 20 + 11 \cdot 5 = 75$ Euro.
  ---
  b) $20 + (n - 1) \cdot 5 > 100$ ergibt $(n - 1) \cdot 5 > 80$, also $n - 1 > 16$ und $n > 17$. Die kleinste natürliche Zahl ist $n = 18$.
  ---
  Kontrolle: $a_{17} = 100$ (nicht mehr als $100$) und $a_{18} = 105$ ✓. Antwort: im 18. Monat.
```

```aufgabe
id: fr-arith-einschieben
titel: Zahlen gleichmäßig einschieben
niveau: 3
lernziel: 1
kompetenz: begruenden
angabe: |
  Zwischen $5$ und $47$ sollen $6$ Zahlen so eingeschoben werden, dass insgesamt eine arithmetische Folge entsteht.

  a) Welche Differenz $d$ hat die Folge?

  b) Wie heißt die vierte eingeschobene Zahl?

  c) Wie viele Zahlen muss man **mindestens** einschieben, damit $d \le 1{,}5$ ist?
teile:
  - typ: zahl
    label: 'a) $d$'
    loesung: "(47 - 5)/7"
    anzeige: '6'
    fehler:
      - wert: "42/6"
        meldung: |
          Mit $6$ eingeschobenen Zahlen hat die Folge $8$ Glieder und damit $7$ Schritte, nicht $6$.
      - wert: "42/8"
        meldung: |
          Du hast durch die Anzahl der **Glieder** geteilt. Geteilt wird durch die Anzahl der Schritte.
  - typ: zahl
    label: 'b)'
    loesung: "5 + 4*6"
    anzeige: '29'
    fehler:
      - wert: "5 + 3*6"
        meldung: |
          Die erste eingeschobene Zahl ist $a_2$. Die vierte eingeschobene ist also $a_5$, vier Schritte nach $5$.
  - typ: zahl
    label: 'c) mindestens'
    loesung: "27"
    fehler:
      - wert: "28"
        meldung: |
          $28$ ist die nötige Anzahl der **Schritte**. Bei $k$ eingeschobenen Zahlen gibt es $k + 1$ Schritte.
hinweise:
  - 'Zähle alle Glieder: $5$, sechs neue Zahlen und $47$. Wie viele Schritte liegen zwischen dem ersten und dem letzten Glied?'
  - 'Bei $k$ eingeschobenen Zahlen gibt es $k + 1$ Schritte. Setze $\frac{42}{k + 1} \le 1{,}5$ an.'
loesung: |
  Ansatz: Die Folge beginnt mit $a_1 = 5$ und endet mit $47$. Mit $6$ eingeschobenen Zahlen hat sie $8$ Glieder, also $47 = a_8$ und $7$ Schritte.
  ---
  a) $7d = 47 - 5 = 42$, also $d = 6$. Die Folge lautet $5, 11, 17, 23, 29, 35, 41, 47$.
  ---
  b) Die eingeschobenen Zahlen sind $a_2$ bis $a_7$. Die vierte davon ist $a_5 = 5 + 4 \cdot 6 = 29$.
  ---
  c) Bei $k$ eingeschobenen Zahlen gibt es $k + 1$ Schritte, also $d = \frac{42}{k + 1}$. Aus $\frac{42}{k + 1} \le 1{,}5$ folgt $k + 1 \ge 28$, also $k \ge 27$. Kontrolle: $\frac{42}{28} = 1{,}5$ ✓ und $\frac{42}{27} \approx 1{,}56 > 1{,}5$.
gefuehrt:
  - text: Wie viele Glieder hat die Folge insgesamt, wenn man $6$ Zahlen einschiebt?
    teil: { typ: zahl, loesung: "8" }
    erklaerung: 'Die $5$, sechs neue Zahlen und die $47$: zusammen $8$ Glieder.'
  - text: Wie viele Schritte liegen zwischen dem ersten und dem letzten Glied?
    teil:
      typ: zahl
      loesung: "7"
      fehler:
        - wert: "8"
          meldung: 'Acht Zaunpfähle haben sieben Zwischenräume.'
    erklaerung: 'Zwischen $8$ Gliedern liegen $7$ Schritte.'
  - text: Berechne $d$.
    teil: { typ: zahl, loesung: "42/7" }
    erklaerung: '$7d = 47 - 5 = 42$, also $d = 6$.'
  - text: Überlege, welche Nummer die vierte eingeschobene Zahl in der Folge hat.
    erklaerung: 'Die erste eingeschobene Zahl ist $a_2$. Die vierte ist $a_5 = 5 + 4 \cdot 6 = 29$.'
```

## Geometrische Folgen

```aufgabe
id: fr-v-abnahmefaktor
titel: Abnahme als Faktor
niveau: 1
art: check
angabe: |
  Ein Wert sinkt um $15\,\%$. Mit welcher Zahl multiplizierst du den alten Wert, um den neuen zu erhalten?
  (Vorwissen aus [Kapitel 1, Prozentrechnung](/lernen/mathe3/zahlen/prozentrechnung))
teile:
  - typ: zahl
    label: 'Faktor'
    loesung: "1 - 15/100"
    anzeige: '0{,}85'
    fehler:
      - wert: "0.15"
        meldung: |
          $0{,}15$ liefert den **Verlust**. Übrig bleiben $100\,\% - 15\,\% = 85\,\%$ des alten Werts.
      - wert: "1.15"
        meldung: |
          $1{,}15$ gehört zu einer **Zunahme** um $15\,\%$. Bei einer Abnahme wird der Faktor kleiner als $1$.
hinweise:
  - 'Wie viel Prozent des alten Werts bleiben übrig?'
loesung: |
  Neuer Wert $= W - 0{,}15\,W = W \cdot (1 - 0{,}15)$, wobei $W$ der alte Wert ist.
  ---
  Der Faktor ist $0{,}85$. Probe: $200 \cdot 0{,}85 = 170$, und $200 - 30 = 170$ ✓.
```

**Worum geht es?** Statt immer denselben Betrag zu **addieren**, kann man auch immer mit demselben Faktor
**multiplizieren**. So entstehen geometrische Folgen.

Beispiele aus dem Alltag: Ein Guthaben wächst jedes Jahr um $3\,\%$, wird also mit $1{,}03$ multipliziert. Von einem
Medikament baut der Körper täglich $20\,\%$ ab. Es bleibt also der Faktor $0{,}8$. Faltet man ein Blatt Papier, wird
der Stapel doppelt so dick.

:::definition[Geometrische Folge]
Eine Folge $(a_n)$, deren Glieder alle von $0$ verschieden sind, heißt **geometrisch**, wenn der Quotient
aufeinanderfolgender Glieder immer gleich ist:
$$\frac{a_{n+1}}{a_n} = q \qquad \text{für alle } n \ge 1.$$
Die feste Zahl $q$ heißt **Quotient** oder **Wachstumsfaktor**. Jedes Glied entsteht aus dem vorigen durch
Multiplikation mit $q$.
:::

**Beispiel und Nichtbeispiel.** $3, 6, 12, 24, \dots$ ist geometrisch mit $q = 2$. Die Folge $2, 4, 6, 8$ ist
**nicht** geometrisch, denn $\frac42 = 2$, aber $\frac64 = 1{,}5$. Auch $0, 0, 0, \dots$ zählt nicht. Mit einem Glied
$0$ kann man den Quotienten nicht bilden.

### Die explizite Formel

Konkret mit $a_1 = 3$ und $q = 2$: $a_2 = 3 \cdot 2$, $a_3 = 3 \cdot 2^2$, $a_4 = 3 \cdot 2^3$. Bis zum Glied
Nummer $n$ multipliziert man $n - 1$ Mal mit $q$. Der Gedanke ist derselbe wie bei arithmetischen Folgen, nur
multiplikativ.

:::satz[Explizite Formel der geometrischen Folge]
Für eine geometrische Folge mit erstem Glied $a_1$ und Quotient $q$ gilt
$$a_n = a_1 \cdot q^{\,n-1}.$$
Allgemeiner gilt $a_n = a_m \cdot q^{\,n-m}$ für zwei beliebige Indizes $m$ und $n$.
:::

Das Verhalten hängt stark von $q$ ab. Für ein positives erstes Glied gilt:

- Für $q > 1$ wächst die Folge immer schneller, etwa $2, 4, 8, 16$.
- Für $q = 1$ ist sie konstant, etwa $3, 3, 3$.
- Für $0 < q < 1$ fällt sie und nähert sich $0$, etwa $8, 4, 2, 1$.
- Für $-1 < q < 0$ wechselt das Vorzeichen, und der Betrag nähert sich $0$, etwa $8, -4, 2, -1$.
- Für $q = -1$ springt sie zwischen zwei Werten, etwa $1, -1, 1, -1$.
- Für $q < -1$ wechselt das Vorzeichen, und der Betrag wächst, etwa $1, -2, 4, -8$.

```plot
x: [0, 9.5]
y: [-3, 6]
achsen: { x: "n", y: "aₙ" }
graphen:
  - { f: "1.5^(x-1)", von: 1, bis: 5.3, farbe: 0, gestrichelt: true }
  - { f: "5*0.6^(x-1)", von: 1, bis: 9, farbe: 2, gestrichelt: true }
punkte:
  - { x: 1, y: 1, farbe: 0 }
  - { x: 2, y: 1.5, farbe: 0 }
  - { x: 3, y: 2.25, farbe: 0 }
  - { x: 4, y: 3.375, farbe: 0 }
  - { x: 5, y: 5.0625, label: "q = 1,5", farbe: 0 }
  - { x: 1, y: 5, label: "q = 0,6", farbe: 2 }
  - { x: 2, y: 3, farbe: 2 }
  - { x: 3, y: 1.8, farbe: 2 }
  - { x: 4, y: 1.08, farbe: 2 }
  - { x: 5, y: 0.648, farbe: 2 }
  - { x: 6, y: 0.3888, farbe: 2 }
  - { x: 7, y: 0.2333, farbe: 2 }
  - { x: 8, y: 0.14, farbe: 2 }
  - { x: 9, y: 0.084, farbe: 2 }
  - { x: 1, y: -2.5, farbe: 1 }
  - { x: 2, y: 2, farbe: 1 }
  - { x: 3, y: -1.6, farbe: 1 }
  - { x: 4, y: 1.28, farbe: 1 }
  - { x: 5, y: -1.024, farbe: 1 }
  - { x: 6, y: 0.8192, farbe: 1 }
  - { x: 7, y: -0.6554, farbe: 1 }
  - { x: 8, y: 0.5243, farbe: 1 }
  - { x: 9, y: -0.4194, label: "q = −0,8", farbe: 1 }
beschriftung: Drei geometrische Folgen. Blau mit q = 1,5 wächst immer schneller. Grün mit q = 0,6 fällt gegen 0. Orange mit q = −0,8 springt mit kleiner werdendem Betrag um die Achse. Die gestrichelten Kurven sind die passenden Exponentialfunktionen, auf denen die Punkte liegen.
```

Geometrische Folgen sind die Treppenstufen-Version der **Exponentialfunktionen** aus
[4.10 Exponentialfunktionen](/lernen/mathe3/funktionen/exponentialfunktionen). Für $q > 0$ liegen die Punkte $(n \mid a_1 q^{n-1})$ auf
dem Graphen von $f(x) = a_1 q^{x-1}$. Wachstum um $p\,\%$ pro Schritt bedeutet $q = 1 + \frac{p}{100}$. Abnahme um
$p\,\%$ bedeutet $q = 1 - \frac{p}{100}$.

```aufgabe
id: fr-v-vorhersage-q
titel: Was passiert, wenn q kleiner als 1 wird?
niveau: 1
art: check
angabe: |
  Eine geometrische Folge beginnt mit $a_1 = 2$. Zuerst ist $q = 1{,}2$. Was passiert mit den Gliedern, wenn du $q$
  auf $0{,}8$ verkleinerst? Entscheide zuerst, dann prüfe im Widget darunter.
teile:
  - typ: auswahl
    optionen:
      - 'Die Glieder werden kleiner und nähern sich $0$, werden aber nie negativ.'
      - 'Die Glieder werden kleiner und irgendwann negativ.'
      - 'Die Glieder wachsen weiter, nur langsamer.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Multipliziert man eine positive Zahl mit $0{,}8$, bleibt sie positiv. Sie wird nur kleiner.
      - wert: 2
        meldung: |
          Mit einem Faktor kleiner als $1$ wird jedes Glied **kleiner** als das vorige: $2 \cdot 0{,}8 = 1{,}6$.
hinweise:
  - 'Rechne zwei Glieder aus: $2 \cdot 0{,}8$ und dann noch einmal $\cdot\, 0{,}8$.'
loesung: |
  Mit $q = 0{,}8$: $2;\ 1{,}6;\ 1{,}28;\ 1{,}024;\ \dots$ Jedes Glied ist $80\,\%$ des vorigen.
  ---
  Die Glieder bleiben positiv und nähern sich $0$. Im Widget schmiegt sich die Kurve an die waagrechte Achse. Die Folgenglieder sind ihre Werte an den Stellen $x = 1, 2, 3, \dots$
```

```widget
name: parameter
titel: Startwert und Quotient einer geometrischen Folge
props:
  f: "a*q^(x-1)"
  parameter:
    - { name: a, min: 0.5, max: 5, step: 0.5, wert: 2 }
    - { name: q, min: 0.2, max: 2, step: 0.05, wert: 1.2 }
  x: [0, 10]
  y: [-1, 12]
```

Verändere $q$ im Widget und beobachte. Für $q > 1$ steigt die Kurve immer steiler. Für $q = 1$ ist sie waagrecht.
Für $q < 1$ fällt sie und schmiegt sich an die Achse. Die Folgenglieder sind die Funktionswerte an den Stellen
$x = 1, 2, 3, \dots$ **Erklärung:** Ein Faktor kleiner als $1$ nimmt jedes Mal einen festen Anteil weg. Dadurch
werden die Glieder kleiner, erreichen die $0$ aber nie.

:::beispiel[Die Folge aus zwei Gliedern bestimmen]
Gegeben sind $a_2 = 6$ und $a_5 = 162$.

**Schritt 1, Schritte zählen.** Von Nummer $2$ bis Nummer $5$ sind es $3$ Schritte. Also gilt $a_5 = a_2 \cdot q^3$.

**Schritt 2, $q$ bestimmen.** $q^3 = \frac{162}{6} = 27$. Die dritte Wurzel liefert $q = 3$.

**Schritt 3, $a_1$ bestimmen.** Ein Schritt zurück heißt durch $q$ teilen: $a_1 = \frac{a_2}{q} = \frac63 = 2$.

**Schritt 4, Formel und Probe.** $a_n = 2 \cdot 3^{n-1}$. Probe: $a_5 = 2 \cdot 81 = 162$ ✓.
:::

:::achtung[Bei geradem Abstand gibt es zwei Quotienten]
Falsch: „$a_1 = 2$ und $a_3 = 18$. Also $q^2 = 9$ und $q = 3$.“

Richtig: Auch $(-3)^2 = 9$. Es gibt zwei Folgen: $2, 6, 18, \dots$ und $2, -6, 18, \dots$ Bei einer geraden
Anzahl von Schritten musst du beide Vorzeichen prüfen. Bei einer ungeraden Anzahl ist $q$ eindeutig.
:::

Ist der **Index** gesucht, steht $n$ in der Hochzahl. Dann brauchst du den Logarithmus, wie bei den
Exponentialgleichungen aus [2.9 Exponential- und Logarithmusgleichungen](/lernen/mathe3/gleichungen/exponential-und-logarithmusgleichungen).

:::beispiel[Wann wird eine Schwelle unterschritten?]
Von einem Medikament sind anfangs $100$ mg im Körper. Pro Tag werden $20\,\%$ abgebaut. Nach $k$ Tagen sind noch
$M_k = 100 \cdot 0{,}8^k$ mg vorhanden. Hier zählen wir ab $k = 0$, denn $M_0 = 100$ ist der Anfangswert. Wann sind
es erstmals weniger als $10$ mg?

**Schritt 1, Ungleichung aufstellen.** $100 \cdot 0{,}8^k < 10$, also $0{,}8^k < 0{,}1$.

**Schritt 2, logarithmieren.** $k \cdot \ln 0{,}8 < \ln 0{,}1$.

**Schritt 3, durch $\ln 0{,}8$ teilen.** $\ln 0{,}8 \approx -0{,}223$ ist negativ. Deshalb dreht sich das Zeichen um:
$k > \frac{\ln 0{,}1}{\ln 0{,}8} \approx 10{,}32$.

**Schritt 4, Antwort und Kontrolle.** Die kleinste ganze Zahl ist $k = 11$. Kontrolle: $M_{10} \approx 10{,}7$ mg und
$M_{11} \approx 8{,}6$ mg ✓.
:::

:::achtung[Zeichen beim Teilen durch einen negativen Logarithmus nicht gedreht]
Falsch: „$0{,}8^k < 0{,}1$, also $k < \frac{\ln 0{,}1}{\ln 0{,}8} \approx 10{,}3$. Nach höchstens $10$ Tagen sind es
weniger als $10$ mg.“

Richtig: Für $0 < q < 1$ ist $\ln q < 0$. Beim Teilen durch eine negative Zahl dreht sich das
Ungleichheitszeichen um: $k > 10{,}3$. Die Kontrolle zeigt den Fehler sofort: Nach $5$ Tagen sind noch
$100 \cdot 0{,}8^5 \approx 32{,}8$ mg da.
:::

:::merke[Rezept: geometrische Folge]
1. Aus zwei Gliedern $a_m$ und $a_k$: $q^{\,k-m} = \dfrac{a_k}{a_m}$, dann Wurzel ziehen. Bei geradem $k - m$ beide Vorzeichen prüfen.
2. Erstes Glied: $a_1 = \dfrac{a_m}{q^{\,m-1}}$.
3. Ist der Index gesucht: Ungleichung aufstellen, logarithmieren, beim Teilen durch einen negativen Logarithmus das Zeichen umdrehen.
4. Kontrolle mit dem gefundenen Index und dem Index davor.
:::

```reflexion
frage: Warum verlangt die Definition, dass kein Glied einer geometrischen Folge gleich $0$ ist?
antwort: |
  Der Quotient $\frac{a_{n+1}}{a_n}$ ist nur definiert, wenn $a_n \ne 0$ ist. Außerdem wäre mit einem Glied $0$ jedes
  weitere Glied ebenfalls $0$, denn $0 \cdot q = 0$. Dann ließe sich $q$ gar nicht mehr bestimmen: Die Folge
  $0, 0, 0, \dots$ entsteht aus dem Startwert $0$ mit jedem beliebigen $q$. Die Bedingung sorgt also dafür, dass
  $q$ eindeutig ist.
```

```aufgabe
id: fr-geo-glied
titel: Glied einer geometrischen Folge
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Eine geometrische Folge hat $a_1 = 3$ und $q = 2$. Berechne $a_{10}$.
teile:
  - typ: zahl
    label: '$a_{10}$'
    loesung: "3*2^9"
    anzeige: '1536'
    fehler:
      - wert: "3*2^10"
        meldung: |
          Bis $a_{10}$ multipliziert man nur $9$ Mal mit $q$. Prüfe deine Formel mit $n = 1$.
      - wert: "6^9"
        meldung: |
          $3 \cdot 2^9$ ist nicht $(3 \cdot 2)^9$. Die Potenz gehört nur zu $q$. Rechne zuerst $2^9$ aus.
hinweise:
  - 'Formel $a_n = a_1 \cdot q^{n-1}$ mit $n = 10$.'
loesung: |
  Ansatz: $a_n = a_1 \cdot q^{n-1}$, also $a_{10} = 3 \cdot 2^9$.
  ---
  $2^9 = 512$, daher $a_{10} = 3 \cdot 512 = 1536$.
```

```aufgabe
id: fr-geo-stadt
titel: Wachsende Stadt
niveau: 1
lernziel: 1
kompetenz: anwenden
angabe: |
  Eine Stadt hat heute $40\,000$ Einwohner. Die Zahl wächst jedes Jahr um $1{,}5\,\%$. Wie viele Einwohner hat sie
  nach $8$ Jahren? Runde auf ganze Einwohner.
teile:
  - typ: zahl
    label: 'Einwohner'
    loesung: "40000*1.015^8"
    toleranz: 1
    fehler:
      - wert: "40000*(1 + 8*0.015)"
        meldung: |
          Du hast jedes Jahr denselben Zuwachs von $600$ Einwohnern genommen. Bei Prozentwachstum wächst aber auch der Zuwachs mit. Multipliziere $8$ Mal mit $1{,}015$.
      - wert: "40000*1.15^8"
        meldung: |
          $1{,}15$ wäre ein Wachstum um $15\,\%$. Für $1{,}5\,\%$ ist der Faktor $1 + 0{,}015 = 1{,}015$.
hinweise:
  - 'Faktor pro Jahr $q = 1{,}015$. Nach $8$ Jahren wurde $8$ Mal multipliziert.'
loesung: |
  Ansatz: Gleiches prozentuelles Wachstum heißt geometrische Folge mit $q = 1{,}015$. Heute ist der Anfangswert, nach $8$ Jahren wurde $8$ Mal multipliziert.
  ---
  $40\,000 \cdot 1{,}015^8 \approx 40\,000 \cdot 1{,}12649 \approx 45\,060$ Einwohner.
  ---
  Kontrolle: Linear mit $600$ pro Jahr wären es $44\,800$. Mit Zinseszins-Effekt ist es etwas mehr ✓.
```

```aufgabe
id: fr-arith-oder-geo
titel: Welche Folgen sind geometrisch?
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Welche der Folgen sind **geometrisch**? Wähle alle passenden aus.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$2,\ 6,\ 18,\ 54,\ \dots$'
      - '$2,\ 6,\ 10,\ 14,\ \dots$'
      - '$1,\ -\tfrac12,\ \tfrac14,\ -\tfrac18,\ \dots$'
      - '$1,\ 4,\ 9,\ 16,\ \dots$'
      - '$5,\ 5,\ 5,\ 5,\ \dots$'
    richtig: [0, 2, 4]
    fehler:
      - wert: [0, 2]
        meldung: |
          Auch die konstante Folge $5, 5, 5$ ist geometrisch, nämlich mit $q = 1$. Jedes Glied ist das vorige mal $1$.
      - wert: [0, 4]
        meldung: |
          Ein negativer Quotient ist erlaubt. Bei $1, -\frac12, \frac14$ ist der Quotient immer $-\frac12$.
hinweise:
  - 'Bilde bei jeder Folge die Quotienten $\frac{a_2}{a_1}$ und $\frac{a_3}{a_2}$.'
loesung: |
  Ansatz: Eine Folge ist geometrisch, wenn alle Quotienten aufeinanderfolgender Glieder gleich sind.
  ---
  $2, 6, 18, 54$: Quotient immer $3$, geometrisch. $2, 6, 10, 14$: Quotienten $3$ und $\frac53$, nicht geometrisch. Diese Folge ist arithmetisch.
  ---
  $1, -\frac12, \frac14, -\frac18$: Quotient immer $-\frac12$, geometrisch. $1, 4, 9, 16$: Quotienten $4$ und $\frac94$, nicht geometrisch.
  ---
  $5, 5, 5$: geometrisch mit $q = 1$ und zugleich arithmetisch mit $d = 0$.
```

```aufgabe
id: fr-geo-zwei-glieder
titel: Geometrische Folge aus zwei Gliedern
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Von einer geometrischen Folge kennt man $a_3 = 12$ und $a_6 = -96$. Bestimme $q$, $a_1$ und $a_8$.
teile:
  - typ: zahl
    label: '$q$'
    loesung: "nthRoot(-96/12, 3)"
    anzeige: '-2'
    fehler:
      - wert: "2"
        meldung: |
          $2^3 = 8$, aber gesucht ist $q^3 = -8$. Die dritte Wurzel einer negativen Zahl ist negativ.
  - typ: zahl
    label: '$a_1$'
    loesung: "12/(-2)^2"
    anzeige: '3'
    fehler:
      - wert: "12/(-2)^3"
        meldung: |
          Von $a_1$ bis $a_3$ sind es zwei Schritte, nicht drei. Teile also durch $q^2$.
  - typ: zahl
    label: '$a_8$'
    loesung: "3*(-2)^7"
    anzeige: '-384'
    fehler:
      - wert: "3*(-2)^8"
        meldung: |
          Bis $a_8$ sind es $7$ Schritte. Mit $8$ Schritten erhältst du $a_9$.
hinweise:
  - 'Von $a_3$ nach $a_6$ sind es $3$ Schritte, also $a_6 = a_3 \cdot q^3$.'
  - 'Die dritte Wurzel einer negativen Zahl ist negativ. Für $a_1$ gehst du zwei Schritte zurück.'
loesung: |
  Ansatz: Zwischen zwei Gliedern zählen wir die Schritte. $q^3 = \frac{a_6}{a_3} = \frac{-96}{12} = -8$, also $q = -2$. Bei ungerader Hochzahl ist das eindeutig.
  ---
  $a_1 = \frac{a_3}{q^2} = \frac{12}{4} = 3$.
  ---
  $a_8 = 3 \cdot (-2)^7 = 3 \cdot (-128) = -384$. Probe: $a_6 = 3 \cdot (-2)^5 = -96$ ✓.
```

```aufgabe
id: fr-geo-ball
titel: Springender Ball
niveau: 2
lernziel: 1
kompetenz: modellieren
angabe: |
  Ein Ball fällt aus $1{,}8$ m Höhe und springt nach jedem Aufprall auf $75\,\%$ der vorigen Höhe zurück.
  Die Sprunghöhe nach dem $n$-ten Aufprall ist $h_n = 1{,}8 \cdot 0{,}75^n$ (in m).

  a) Wie hoch springt der Ball nach dem 4. Aufprall (in cm, zwei Nachkommastellen)?

  b) Nach dem wievielten Aufprall ist die Sprunghöhe erstmals kleiner als $10$ cm?
teile:
  - typ: zahl
    label: 'a) $h_4$'
    einheit: cm
    loesung: "180*0.75^4"
    anzeige: '56{,}95'
    toleranz: 0.1
    fehler:
      - wert: "180*0.75^3"
        meldung: |
          Das ist die Höhe nach dem dritten Aufprall. In der Formel steht $0{,}75^n$ mit $n = 4$.
  - typ: zahl
    label: 'b) $n$'
    loesung: "11"
    fehler:
      - wert: "10"
        meldung: |
          Die Rechnung liefert $n > 10{,}05$. Die $10$ erfüllt das nicht: $h_{10} \approx 10{,}14$ cm ist noch nicht kleiner als $10$ cm.
hinweise:
  - 'b) Ungleichung $1{,}8 \cdot 0{,}75^n < 0{,}1$ in Metern aufstellen und mit dem Logarithmus lösen.'
  - 'Beim Teilen durch $\ln 0{,}75 < 0$ dreht sich das Ungleichheitszeichen um.'
loesung: |
  Ansatz: Die Höhen bilden eine geometrische Folge mit $q = 0{,}75$. In cm ist $h_n = 180 \cdot 0{,}75^n$.
  ---
  a) $h_4 = 180 \cdot 0{,}75^4 = 180 \cdot 0{,}31640625 \approx 56{,}95$ cm.
  ---
  b) $1{,}8 \cdot 0{,}75^n < 0{,}1$ ergibt $0{,}75^n < \frac{1}{18}$. Logarithmieren und durch $\ln 0{,}75 < 0$ teilen: $n > \frac{\ln(1/18)}{\ln 0{,}75} \approx 10{,}05$.
  ---
  Die kleinste natürliche Zahl darüber ist $n = 11$. Kontrolle: $h_{10} \approx 10{,}14$ cm und $h_{11} \approx 7{,}60$ cm ✓.
```

```aufgabe
id: fr-geo-schwelle
titel: Ab welchem Glied über 1000?
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Gegeben ist die geometrische Folge $a_n = 5 \cdot 1{,}4^{\,n-1}$. Ab welchem Index $n$ ist $a_n > 1000$?
teile:
  - typ: zahl
    label: '$n$'
    loesung: "17"
    fehler:
      - wert: "16"
        meldung: |
          Die Rechnung liefert $n - 1 > 15{,}75$, also $n - 1 \ge 16$. Gesucht ist aber $n$, nicht $n - 1$.
      - wert: "15"
        meldung: |
          Du hast abgerundet. Gesucht ist die kleinste Zahl, die **größer** als die berechnete Grenze ist.
hinweise:
  - 'Teile zuerst durch $5$: $1{,}4^{n-1} > 200$.'
  - 'Logarithmiere. Die Unbekannte ist zunächst $n - 1$.'
loesung: |
  Ansatz: Ungleichung $5 \cdot 1{,}4^{n-1} > 1000$ aufstellen. Teilen durch $5$: $1{,}4^{n-1} > 200$.
  ---
  Logarithmieren: $(n - 1) \cdot \ln 1{,}4 > \ln 200$. Weil $\ln 1{,}4 > 0$ ist, bleibt das Zeichen: $n - 1 > \frac{\ln 200}{\ln 1{,}4} \approx 15{,}75$.
  ---
  Also $n - 1 \ge 16$ und $n \ge 17$. Kontrolle: $a_{16} \approx 777{,}8$ und $a_{17} \approx 1089{,}0$ ✓.
gefuehrt:
  - text: Teile beide Seiten von $5 \cdot 1{,}4^{n-1} > 1000$ durch $5$. Welche Zahl steht dann rechts?
    teil: { typ: zahl, loesung: "1000/5" }
    erklaerung: '$1{,}4^{n-1} > 200$.'
  - text: Logarithmiere und berechne die Grenze für $n - 1$ auf zwei Nachkommastellen.
    teil: { typ: zahl, loesung: "ln(200)/ln(1.4)", toleranz: 0.01 }
    erklaerung: '$n - 1 > \frac{\ln 200}{\ln 1{,}4} \approx 15{,}75$. Das Zeichen bleibt, weil $\ln 1{,}4$ positiv ist.'
  - text: Welches ist der kleinste passende Index $n$?
    teil:
      typ: zahl
      loesung: "17"
      fehler:
        - wert: "16"
          meldung: '$16$ ist der kleinste Wert für $n - 1$. Addiere noch $1$.'
    erklaerung: '$n - 1 \ge 16$, also $n = 17$.'
  - text: Überlege, wie du das Ergebnis kontrollierst.
    erklaerung: 'Man berechnet $a_{16} \approx 777{,}8$ (noch zu klein) und $a_{17} \approx 1089{,}0$ (groß genug).'
```

```aufgabe
id: fr-geo-papier
titel: Papier bis zum Mond falten
niveau: 3
lernziel: 1
kompetenz: modellieren
angabe: |
  Ein Blatt Papier ist $0{,}1$ mm dick. Bei jedem Falten verdoppelt sich die Dicke des Stapels. Angenommen, man
  könnte beliebig oft falten: Nach wie vielen Faltungen wäre der Stapel erstmals dicker als die Entfernung zum Mond,
  also $384\,400$ km?
teile:
  - typ: zahl
    label: 'Faltungen'
    loesung: "42"
    fehler:
      - wert: "22"
        meldung: |
          Du hast mm und km gemischt. Rechne die Entfernung zuerst in mm um: $384\,400$ km $= 3{,}844 \cdot 10^{11}$ mm.
      - wert: "41"
        meldung: |
          Die Grenze liegt bei etwa $41{,}8$. Nach $41$ Faltungen ist der Stapel noch zu dünn. Rechne zur Kontrolle $0{,}1 \cdot 2^{41}$ mm aus.
hinweise:
  - 'Nach $n$ Faltungen ist die Dicke $0{,}1 \cdot 2^n$ mm. Rechne die Mondentfernung in mm um.'
  - '$1$ km $= 1000$ m $= 10^6$ mm. Löse dann $2^n > 3{,}844 \cdot 10^{12}$ mit dem Logarithmus.'
loesung: |
  Ansatz: Die Dicke nach $n$ Faltungen ist eine geometrische Folge: $D_n = 0{,}1 \cdot 2^n$ mm. Zuerst alles in dieselbe Einheit bringen.
  ---
  $384\,400$ km $= 384\,400 \cdot 10^6$ mm $= 3{,}844 \cdot 10^{11}$ mm. Bedingung: $0{,}1 \cdot 2^n > 3{,}844 \cdot 10^{11}$, also $2^n > 3{,}844 \cdot 10^{12}$.
  ---
  Logarithmieren: $n > \frac{\ln(3{,}844 \cdot 10^{12})}{\ln 2} \approx 41{,}8$. Also $n = 42$.
  ---
  Kontrolle: $0{,}1 \cdot 2^{42}$ mm $\approx 4{,}4 \cdot 10^{11}$ mm $= 440\,000$ km ✓. Schon $42$ Verdopplungen reichen bis zum Mond. So schnell wächst eine geometrische Folge.
```

## Das Summenzeichen

```aufgabe
id: fr-v-zaehlen
titel: Zahlen in einem Bereich zählen
niveau: 1
art: check
angabe: |
  Wie viele ganze Zahlen liegen von $4$ bis $11$, wenn beide Grenzen mitzählen?
  (Vorwissen aus [8.2 Arithmetische Folgen](/lernen/mathe3/folgen-reihen/arithmetische-folgen), Zaunpfahl-Überlegung)
teile:
  - typ: zahl
    loesung: "11 - 4 + 1"
    anzeige: '8'
    fehler:
      - wert: "7"
        meldung: |
          $11 - 4 = 7$ zählt die **Schritte** zwischen den Zahlen. Die Zahlen selbst sind eine mehr: $4, 5, 6, 7, 8, 9, 10, 11$.
hinweise:
  - 'Schreib die Zahlen einfach hin und zähle.'
loesung: |
  Die Zahlen sind $4, 5, 6, 7, 8, 9, 10, 11$.
  ---
  Das sind $8$ Zahlen. Allgemein: von $m$ bis $n$ sind es $n - m + 1$ Zahlen.
```

**Worum geht es?** Wir lernen eine Kurzschrift für lange Summen. Sie spart Platz und zeigt auf einen Blick, wie die
Summanden gebaut sind.

Eine Summe wie $1 + 4 + 9 + 16 + \dots + 400$ ist mühsam zu schreiben. Mathematikerinnen schreiben sie kompakt mit
dem großen griechischen Buchstaben **Sigma** $\Sigma$. Er entspricht dem lateinischen S und steht für „Summe“. Für
Programmierer ist das eine Schleife, die einen Wert aufsammelt:

```
s = 0
für k von m bis n:
    s = s + a(k)
```

:::definition[Summenzeichen]
$$\sum_{k=m}^{n} a_k = a_m + a_{m+1} + \dots + a_n \qquad (m \le n).$$
Man liest: „Summe über $a_k$ für $k$ von $m$ bis $n$“.

- $k$ heißt **Laufindex**. Er läuft in Einerschritten von $m$ bis $n$.
- $m$ heißt **untere Grenze**, $n$ heißt **obere Grenze**.
- $a_k$ ist der **Summand**. Er sagt, was für jedes $k$ addiert wird.
- Die Summe hat $n - m + 1$ Summanden.
:::

**Beispiel und Nichtbeispiel.** $\sum_{k=1}^{3} 5k = 5 + 10 + 15 = 30$ ist eine korrekt gebildete Summe. Dagegen ist
„$\sum_{k=1}^{n} 2$ mit $n = 2{,}5$“ **keine** sinnvolle Summe. Die Grenzen müssen ganze Zahlen sein, denn $k$ läuft
in Einerschritten.

:::beispiel[Summen auswerten]
Wir schreiben jede Summe aus, indem wir für $k$ der Reihe nach alle Werte einsetzen.

- $\sum_{k=1}^{5} (2k + 1) = 3 + 5 + 7 + 9 + 11 = 35$.
- $\sum_{k=0}^{3} 3^k = 1 + 3 + 9 + 27 = 40$. Achtung: $3^0 = 1$.
- $\sum_{j=2}^{4} j^2 = 4 + 9 + 16 = 29$.

Der Name des Laufindex ist egal. $\sum_{k=2}^{4} k^2$ und $\sum_{j=2}^{4} j^2$ bedeuten dieselbe Summe, genau wie
der Name einer Schleifenvariablen im Programm.
:::

```aufgabe
id: fr-summe-auswerten
titel: Summen ausrechnen
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Berechne
  $$\text{a) } \sum_{k=2}^{5} k\,(k - 1) \qquad\qquad \text{b) } \sum_{i=1}^{6} (-1)^i\, i$$
teile:
  - typ: zahl
    label: 'a)'
    loesung: "2*1 + 3*2 + 4*3 + 5*4"
    anzeige: '40'
    fehler:
      - wert: "2*1 + 3*2 + 4*3"
        meldung: |
          Die obere Grenze gehört dazu. Auch für $k = 5$ wird addiert: $5 \cdot 4 = 20$.
  - typ: zahl
    label: 'b)'
    loesung: "-1 + 2 - 3 + 4 - 5 + 6"
    anzeige: '3'
    fehler:
      - wert: "-3"
        meldung: |
          Das Vorzeichen ist vertauscht. Für $i = 1$ ist $(-1)^1 = -1$, also beginnt die Summe mit $-1$.
hinweise:
  - 'Setze für den Laufindex nacheinander alle Werte von der unteren bis zur oberen Grenze ein.'
loesung: |
  Ansatz: Wir schreiben jede Summe aus, indem wir alle Werte des Laufindex einsetzen.
  ---
  a) $k = 2, 3, 4, 5$ liefert $2 \cdot 1 + 3 \cdot 2 + 4 \cdot 3 + 5 \cdot 4 = 2 + 6 + 12 + 20 = 40$.
  ---
  b) $i = 1, \dots, 6$ liefert $-1 + 2 - 3 + 4 - 5 + 6 = 3$. Kontrolle: Die Paare $(-1 + 2)$, $(-3 + 4)$, $(-5 + 6)$ ergeben je $1$.
```

```aufgabe
id: fr-summe-anzahl
titel: Wie viele Summanden?
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Wie viele Summanden hat $\displaystyle\sum_{k=7}^{30} \frac{1}{k}$?
teile:
  - typ: zahl
    loesung: "30 - 7 + 1"
    anzeige: '24'
    fehler:
      - wert: "23"
        meldung: |
          $30 - 7$ zählt die Schritte. Beide Grenzen zählen mit, also kommt $1$ dazu.
hinweise:
  - 'Formel: Von $m$ bis $n$ gibt es $n - m + 1$ Summanden.'
loesung: |
  Ansatz: Der Laufindex nimmt alle ganzen Zahlen von $7$ bis $30$ an.
  ---
  Anzahl $= 30 - 7 + 1 = 24$. Kontrolle im Kleinen: Von $7$ bis $8$ sind es $8 - 7 + 1 = 2$ Summanden ✓.
```

### Rechenregeln

Eine Summe ist nur eine abgekürzte Addition. Deshalb gelten die bekannten Rechengesetze. Zuerst konkret:
$\sum_{k=1}^{3} 5k = 5 + 10 + 15 = 5 \cdot (1 + 2 + 3)$. Der Faktor $5$ lässt sich herausheben.

:::satz[Rechenregeln für Summen]
1. **Konstanten herausheben:** $\displaystyle\sum_{k=1}^{n} c\,a_k = c\sum_{k=1}^{n} a_k$.
2. **Summen aufteilen:** $\displaystyle\sum_{k=1}^{n} (a_k + b_k) = \sum_{k=1}^{n} a_k + \sum_{k=1}^{n} b_k$.
3. **Konstante summieren:** $\displaystyle\sum_{k=1}^{n} c = n\cdot c$, denn es sind $n$ gleiche Summanden.
4. **Bereich teilen:** $\displaystyle\sum_{k=1}^{n} a_k = \sum_{k=1}^{m} a_k + \sum_{k=m+1}^{n} a_k$ für $1 \le m < n$.

Dabei ist $c$ eine feste Zahl, die nicht von $k$ abhängt.
:::

In den Beispielen brauchen wir die **Gauß-Summe** $\sum_{k=1}^{n} k = \frac{n(n + 1)}{2}$. Sie wird in
[8.5 Endliche arithmetische Reihen](/lernen/mathe3/folgen-reihen/endliche-arithmetische-reihen) hergeleitet. Zum
Beispiel ist $1 + 2 + \dots + 12 = \frac{12 \cdot 13}{2} = 78$.

:::beispiel[Rechenregeln anwenden]
Gesucht ist $\sum_{k=1}^{12} (2k - 3)$.

**Schritt 1, aufteilen.** $\sum_{k=1}^{12} 2k + \sum_{k=1}^{12} (-3)$.

**Schritt 2, Konstante herausheben.** $\sum_{k=1}^{12} 2k = 2 \sum_{k=1}^{12} k = 2 \cdot 78 = 156$.

**Schritt 3, Konstante summieren.** $\sum_{k=1}^{12} (-3) = 12 \cdot (-3) = -36$. Die $-3$ kommt zwölfmal vor.

**Schritt 4, zusammenfassen.** $156 - 36 = 120$. Kontrolle: Die Summanden $-1, 1, 3, \dots, 21$ sind $12$ Stück mit
Mittelwert $10$, und $12 \cdot 10 = 120$ ✓.
:::

:::achtung[Eine Konstante nur einmal gezählt]
Falsch: „$\sum_{k=1}^{6} 4 = 4$, denn es steht ja nur eine $4$ da.“

Richtig: Die $4$ wird für **jedes** $k$ von $1$ bis $6$ addiert: $4 + 4 + 4 + 4 + 4 + 4 = 6 \cdot 4 = 24$.
:::

:::achtung[Produkte aufgeteilt]
Falsch: „$\sum_{k=1}^{2} (k \cdot k) = \left(\sum_{k=1}^{2} k\right) \cdot \left(\sum_{k=1}^{2} k\right) = 3 \cdot 3 = 9$.“

Richtig: Ausschreiben zeigt $1 \cdot 1 + 2 \cdot 2 = 5$. Summen darf man aufteilen, wenn Summanden **addiert**
werden. Bei Produkten geht das nicht.
:::

```aufgabe
id: fr-summe-regeln
titel: Summe mit den Rechenregeln
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Berechne $\displaystyle\sum_{k=1}^{20} (4k - 5)$. Verwende $\displaystyle\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$.
teile:
  - typ: zahl
    loesung: "4*20*21/2 - 5*20"
    anzeige: '740'
    fehler:
      - wert: "4*20*21/2 - 5"
        meldung: |
          Die $-5$ steht in **jedem** Summanden. Sie kommt also $20$ Mal vor: $\sum_{k=1}^{20} (-5) = -100$.
      - wert: "4*20*21/2"
        meldung: |
          Du hast den konstanten Teil $-5$ ganz weggelassen. Teile die Summe in zwei Summen auf.
hinweise:
  - 'Teile die Summe auf: $4\sum k$ und $\sum(-5)$.'
  - '$\sum_{k=1}^{20} (-5) = 20 \cdot (-5)$.'
loesung: |
  Ansatz: Summe aufteilen und die Konstante $4$ herausheben: $4\sum_{k=1}^{20} k + \sum_{k=1}^{20} (-5)$.
  ---
  $\sum_{k=1}^{20} k = \frac{20 \cdot 21}{2} = 210$, also $4 \cdot 210 = 840$. Und $\sum_{k=1}^{20} (-5) = 20 \cdot (-5) = -100$.
  ---
  Ergebnis: $840 - 100 = 740$. Kontrolle: erster Summand $-1$, letzter $75$, Mittelwert $37$, und $20 \cdot 37 = 740$ ✓.
```

```aufgabe
id: fr-summe-fehler
titel: Wo steckt der Fehler?
niveau: 2
lernziel: 2
kompetenz: begruenden
angabe: |
  Ein Mitschüler rechnet:
  $$\sum_{k=1}^{5} (k + 2) = \sum_{k=1}^{5} k + 2 = 15 + 2 = 17.$$

  a) Berechne den richtigen Wert.

  b) Erkläre den Fehler in einem Satz.
teile:
  - typ: zahl
    label: 'a)'
    loesung: "3 + 4 + 5 + 6 + 7"
    anzeige: '25'
    fehler:
      - wert: "17"
        meldung: |
          Das ist das Ergebnis des Mitschülers. Schreib die Summe aus: $(1 + 2) + (2 + 2) + \dots + (5 + 2)$.
  - typ: text
    label: 'b)'
    muster: |
      Die $2$ gehört zu jedem Summanden und wird deshalb fünfmal addiert, nicht nur einmal.
      Richtig ist $\sum_{k=1}^{5} k + \sum_{k=1}^{5} 2 = 15 + 10 = 25$.
hinweise:
  - 'Schreib die Summe aus. Wie oft kommt die $2$ vor?'
  - 'Teile richtig auf: $\sum (k + 2) = \sum k + \sum 2$.'
loesung: |
  Ansatz: Ausschreiben zeigt, was die Summe bedeutet: $(1 + 2) + (2 + 2) + (3 + 2) + (4 + 2) + (5 + 2)$.
  ---
  a) Das sind $3 + 4 + 5 + 6 + 7 = 25$.
  ---
  b) Die Klammer um $k + 2$ zeigt: Die $2$ gehört zu jedem Summanden. Richtig aufgeteilt ist es $15 + 5 \cdot 2 = 25$. Der Mitschüler hat die $2$ nur einmal gezählt.
```

### Summen aufschreiben und den Index verschieben

Oft ist eine Summe ausgeschrieben gegeben, und du sollst sie mit $\Sigma$ schreiben. Dafür brauchst du einen Term
für den $k$-ten Summanden und die Grenzen.

:::beispiel[Eine Summe mit dem Summenzeichen schreiben]
Gegeben ist $4 + 7 + 10 + \dots + 31$.

**Schritt 1, Bauart erkennen.** Es kommt immer $3$ dazu. Die Summanden bilden eine arithmetische Folge mit
$a_1 = 4$ und $d = 3$, also $a_k = 4 + (k - 1) \cdot 3 = 3k + 1$.

**Schritt 2, letzte Nummer bestimmen.** $3k + 1 = 31$ ergibt $k = 10$.

**Schritt 3, aufschreiben.** $4 + 7 + \dots + 31 = \sum_{k=1}^{10} (3k + 1)$.

**Schritt 4, Probe.** $k = 1$ liefert $4$ und $k = 10$ liefert $31$ ✓.
:::

Manchmal will man den Laufindex an einer anderen Stelle beginnen lassen. Das heißt **Indexverschiebung**. Konkret:
$$\sum_{k=1}^{4} k^2 = 1 + 4 + 9 + 16 = \sum_{j=0}^{3} (j + 1)^2.$$
Rechts setzt man $j = k - 1$. Wenn $k$ von $1$ bis $4$ läuft, läuft $j$ von $0$ bis $3$. Gleichzeitig wird im Term
jedes $k$ durch $j + 1$ ersetzt. **Grenzen und Term ändern sich gemeinsam**, sodass dieselben Summanden entstehen.

:::satz[Indexverschiebung]
Ersetzt man $k = j + s$ mit einer festen ganzen Zahl $s$, so gilt
$$\sum_{k=m}^{n} a_k = \sum_{j=m-s}^{n-s} a_{j+s}.$$
:::

:::achtung[Nur die Grenzen verschoben]
Falsch: „$\sum_{k=3}^{6} k = \sum_{k=1}^{4} k$“, also $18 = 10$.

Richtig: Wer die Grenzen um $2$ verkleinert, muss mit dem neuen Laufindex $j = k - 2$ im Term $j + 2$ schreiben: $\sum_{k=3}^{6} k = \sum_{j=1}^{4} (j + 2) = 3 + 4 + 5 + 6 = 18$ ✓.
:::

:::merke[Rezept: Summen mit dem Summenzeichen]
1. **Auswerten:** Für jeden Wert des Laufindex den Summanden aufschreiben und addieren. Anzahl $n - m + 1$.
2. **Aufschreiben:** Term $a_k$ für den $k$-ten Summanden finden, letzte Nummer aus $a_k = $ letzter Summand berechnen.
3. **Umformen:** Aufteilen, Konstanten herausheben, $\sum c = n \cdot c$.
4. **Verschieben:** Grenzen und Term immer gemeinsam ändern. Probe mit dem ersten und dem letzten Summanden.
:::

```aufgabe
id: fr-summe-schreiben
titel: Mit dem Summenzeichen schreiben
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Schreibe $3 + 6 + 9 + \dots + 60$ mit dem Summenzeichen als $\sum_{k=1}^{n} a_k$.
  Wie viele Summanden sind es, wie lautet der Term $a_k$, und welchen Wert hat die Summe?
  Verwende $\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$.
teile:
  - typ: zahl
    label: 'Anzahl der Summanden $n$'
    loesung: "60/3"
    anzeige: '20'
    fehler:
      - wert: "19"
        meldung: |
          $\frac{60 - 3}{3} = 19$ zählt die Schritte. Die Summanden sind $3 \cdot 1$ bis $3 \cdot 20$, also $20$ Stück.
  - typ: term
    label: '$a_k =$'
    variable: k
    bereich: [1, 20]
    loesung: "3k"
    fehler:
      - wert: "k + 3"
        meldung: |
          Probe mit $k = 2$: $2 + 3 = 5$, der zweite Summand ist aber $6$. Die Summanden sind Vielfache von $3$.
  - typ: zahl
    label: 'Wert der Summe'
    loesung: "3*20*21/2"
    anzeige: '630'
hinweise:
  - 'Jeder Summand ist ein Vielfaches von $3$: $3 \cdot 1$, $3 \cdot 2$, …'
loesung: |
  Ansatz: Die Summanden sind $3 \cdot 1, 3 \cdot 2, \dots, 3 \cdot 20$. Also $a_k = 3k$ mit $k$ von $1$ bis $20$, das sind $20$ Summanden.
  ---
  Konstante herausheben: $\sum_{k=1}^{20} 3k = 3 \sum_{k=1}^{20} k = 3 \cdot \frac{20 \cdot 21}{2} = 3 \cdot 210 = 630$.
  ---
  Kontrolle: $20$ Summanden mit Mittelwert $\frac{3 + 60}{2} = 31{,}5$ ergeben $20 \cdot 31{,}5 = 630$ ✓.
```

```aufgabe
id: fr-indexverschiebung
titel: Indexverschiebung erkennen
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  Welche Ausdrücke haben denselben Wert wie $\displaystyle\sum_{k=1}^{10} 2^k$? Wähle alle passenden aus.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$\displaystyle\sum_{j=0}^{9} 2^{j+1}$'
      - '$\displaystyle\sum_{j=0}^{9} 2^{j}$'
      - '$\displaystyle 2\sum_{k=0}^{9} 2^{k}$'
      - '$\displaystyle\sum_{k=2}^{11} 2^{k-1}$'
      - '$\displaystyle\sum_{k=1}^{10} 2k$'
    richtig: [0, 2, 3]
    fehler:
      - wert: [0, 1, 2, 3]
        meldung: |
          Bei $\sum_{j=0}^{9} 2^j$ wurden nur die Grenzen verschoben, nicht der Term. Der erste Summand ist $2^0 = 1$ statt $2$.
      - wert: [0, 2, 3, 4]
        meldung: |
          $2k$ ist nicht $2^k$. $\sum_{k=1}^{10} 2k = 2 + 4 + 6 + \dots + 20$ ist eine ganz andere Summe.
hinweise:
  - 'Schreib bei jedem Ausdruck den ersten und den letzten Summanden auf.'
  - 'Die Originalsumme beginnt mit $2$ und endet mit $2^{10} = 1024$.'
loesung: |
  Ansatz: Zwei Summen sind gleich, wenn sie dieselben Summanden haben. Die Originalsumme ist $2 + 4 + \dots + 1024$.
  ---
  Option 1: $j = 0$ liefert $2^1$, $j = 9$ liefert $2^{10}$ ✓. Option 2: beginnt mit $2^0 = 1$, falsch.
  ---
  Option 3: $2 \cdot (2^0 + \dots + 2^9) = 2^1 + \dots + 2^{10}$ ✓. Option 4: $k = 2$ liefert $2^1$, $k = 11$ liefert $2^{10}$ ✓.
  ---
  Option 5: $2 + 4 + 6 + \dots + 20 = 110$, die Originalsumme ist dagegen $2046$. Falsch.
```

```aufgabe
id: fr-summe-verschieben
titel: Eine Summe umschreiben und berechnen
niveau: 3
lernziel: 2
kompetenz: anwenden
angabe: |
  Schreibe $\displaystyle\sum_{k=3}^{12} (k - 2)^2$ mit dem neuen Laufindex $j = k - 2$ als $\displaystyle\sum_{j=1}^{N} j^2$.

  a) Wie lautet die obere Grenze $N$?

  b) Berechne die Summe mit der Formel $\displaystyle\sum_{j=1}^{N} j^2 = \frac{N(N+1)(2N+1)}{6}$.
teile:
  - typ: zahl
    label: 'a) $N$'
    loesung: "12 - 2"
    anzeige: '10'
    fehler:
      - wert: "12"
        meldung: |
          Mit dem Term ändern sich auch die Grenzen. Für $k = 12$ ist $j = 12 - 2 = 10$.
  - typ: zahl
    label: 'b) Wert'
    loesung: "10*11*21/6"
    anzeige: '385'
    fehler:
      - wert: "12*13*25/6"
        meldung: |
          Das ist $\sum_{j=1}^{12} j^2$. Die Summe hat nur $10$ Summanden: $1^2$ bis $10^2$.
hinweise:
  - 'Setze $k = 3$ und $k = 12$ in $j = k - 2$ ein. Das liefert die neuen Grenzen.'
  - 'Schreib die ersten Summanden aus: $(3 - 2)^2 = 1^2$, $(4 - 2)^2 = 2^2$, …'
loesung: |
  Ansatz: Mit $j = k - 2$ wird der Term zu $j^2$. Die Grenzen verschieben sich mit: $k = 3$ wird zu $j = 1$, und $k = 12$ wird zu $j = 10$.
  ---
  a) $\sum_{k=3}^{12} (k - 2)^2 = \sum_{j=1}^{10} j^2$, also $N = 10$.
  ---
  b) $\frac{10 \cdot 11 \cdot 21}{6} = \frac{2310}{6} = 385$.
  ---
  Kontrolle: Es sind $12 - 3 + 1 = 10$ Summanden, genau wie $j = 1, \dots, 10$ ✓. Die ersten Summanden $1 + 4 + 9$ passen ebenfalls.
gefuehrt:
  - text: Welchen Wert hat $j$, wenn $k = 3$ ist?
    teil: { typ: zahl, loesung: "1" }
    erklaerung: '$j = 3 - 2 = 1$. Das ist die neue untere Grenze.'
  - text: Welchen Wert hat $j$, wenn $k = 12$ ist?
    teil:
      typ: zahl
      loesung: "10"
      fehler:
        - wert: "12"
          meldung: 'Auch die obere Grenze wird umgerechnet: $j = 12 - 2$.'
    erklaerung: '$j = 10$. Die Summe läuft also von $j = 1$ bis $j = 10$.'
  - text: Überlege, warum die Anzahl der Summanden gleich bleibt.
    erklaerung: 'Vorher $12 - 3 + 1 = 10$ Summanden, nachher $10 - 1 + 1 = 10$. Verschieben ändert nur die Nummerierung.'
  - text: Berechne $\sum_{j=1}^{10} j^2$ mit der Formel.
    teil: { typ: zahl, loesung: "10*11*21/6" }
    erklaerung: '$\frac{10 \cdot 11 \cdot 21}{6} = 385$.'
```

## Endliche arithmetische Reihen

```aufgabe
id: fr-v-summe-aufteilen
titel: Eine kurze Summe auswerten
niveau: 1
art: check
angabe: |
  Berechne $\displaystyle\sum_{k=1}^{4} (5k + 1)$.
  (Vorwissen aus [8.4 Das Summenzeichen](/lernen/mathe3/folgen-reihen/das-summenzeichen))
teile:
  - typ: zahl
    loesung: "6 + 11 + 16 + 21"
    anzeige: '54'
    fehler:
      - wert: "5*10 + 1"
        meldung: |
          Die $+1$ steht in jedem Summanden und kommt deshalb viermal vor, nicht nur einmal.
hinweise:
  - 'Schreib die vier Summanden für $k = 1, 2, 3, 4$ aus.'
loesung: |
  Ausschreiben: $6 + 11 + 16 + 21$.
  ---
  Ergebnis $54$. Mit den Regeln: $5 \cdot 10 + 4 \cdot 1 = 54$ ✓.
```

**Worum geht es?** Wir addieren die Glieder einer arithmetischen Folge, ohne jedes einzeln hinzuschreiben. Dafür
gibt es eine kurze Formel.

Eine **Reihe** ist in der Mathematik die Summe der Glieder einer Folge. Die Summe der ersten $n$ Glieder heißt
**Partialsumme** (Teilsumme) und wird $s_n$ geschrieben:
$$s_n = a_1 + a_2 + \dots + a_n = \sum_{k=1}^{n} a_k.$$
Beispiel: Für die Folge $2, 4, 6, 8, \dots$ ist $s_3 = 2 + 4 + 6 = 12$. In diesem Kapitel geht es nur um **endliche**
Reihen, also um $s_n$ für ein festes $n$. Was eine Summe mit unendlich vielen Gliedern bedeutet, klärt
[11.13 Unendliche Reihen](/lernen/mathe3/grenzwerte-folgen/unendliche-reihen-partialsummen-geometrische-und-harmonische-reihe).

### Der Trick des jungen Gauß

Eine bekannte Geschichte: Der Lehrer des neunjährigen Carl Friedrich Gauß ließ die Klasse die Zahlen von $1$ bis
$100$ addieren. Gauß hatte nach kurzer Zeit das Ergebnis $5050$. Sein Trick: Er schrieb die Summe einmal vorwärts
und einmal rückwärts untereinander.
$$\begin{aligned}
s &= \;\;1 \;+\;\; 2 \;+\;\; 3 \;+ \dots +\; 99 \;+\; 100\\
s &= 100 + \;99 \;+\; 98 \;+ \dots +\;\; 2 \;\;+\;\;\; 1
\end{aligned}$$
Jede Spalte ergibt $101$. Es gibt $100$ Spalten. Also ist $2s = 100 \cdot 101$ und $s = 5050$.

Warum ergibt jede Spalte dasselbe? Oben wird jede Zahl um $1$ größer, unten um $1$ kleiner. Die beiden Änderungen
heben sich auf. Das klappt bei **jeder** arithmetischen Folge: Oben kommt jeweils $d$ dazu, unten geht $d$ weg.

:::satz[Summenformel für arithmetische Reihen]
Für eine arithmetische Folge mit erstem Glied $a_1$ und Differenz $d$ gilt
$$s_n = \sum_{k=1}^{n} a_k = \frac{n}{2}\,\big(a_1 + a_n\big) = n\,a_1 + \frac{n(n-1)}{2}\,d.$$
In Worten: **Anzahl der Glieder mal Mittelwert aus erstem und letztem Glied.**
:::

:::beweis
Wir schreiben $s_n$ vorwärts und rückwärts:
$$\begin{aligned}
s_n &= a_1 + (a_1 + d) + \dots + (a_n - d) + a_n,\\
s_n &= a_n + (a_n - d) + \dots + (a_1 + d) + a_1.
\end{aligned}$$
Wir addieren die Zeilen spaltenweise. In jeder Spalte heben sich $+d$ und $-d$ auf, es bleibt $a_1 + a_n$. Es gibt
$n$ Spalten, also ist $2 s_n = n\,(a_1 + a_n)$. Teilen durch $2$ liefert die erste Form. Setzt man
$a_n = a_1 + (n - 1)d$ ein, entsteht die zweite Form: $s_n = \frac{n}{2}\,(2a_1 + (n - 1)d) = n a_1 + \frac{n(n - 1)}{2} d$.
:::

Zwei Sonderfälle solltest du auswendig kennen:
$$\sum_{k=1}^{n} k = \frac{n(n+1)}{2} \qquad\text{und}\qquad \sum_{k=1}^{n} (2k - 1) = 1 + 3 + 5 + \dots + (2n - 1) = n^2.$$
Die zweite Formel kann man sehen: Ein Quadrat aus $n \cdot n$ Punkten zerfällt in Winkelhaken aus $1, 3, 5, \dots$
Punkten. Zahlenbeispiel: $1 + 3 + 5 + 7 = 16 = 4^2$.

:::beispiel[Alle Plätze im Kinosaal]
Der Kinosaal aus [8.2 Arithmetische Folgen](/lernen/mathe3/folgen-reihen/arithmetische-folgen) hat $25$ Reihen. Die
erste hat $18$ Plätze, jede weitere $3$ mehr. Wie viele Plätze gibt es insgesamt?

**Schritt 1, letztes Glied.** $a_{25} = 18 + 24 \cdot 3 = 90$.

**Schritt 2, Summenformel.** $s_{25} = \frac{25}{2}\,(18 + 90) = 12{,}5 \cdot 108 = 1350$.

**Schritt 3, Kontrolle mit der zweiten Form.** $25 \cdot 18 + \frac{25 \cdot 24}{2} \cdot 3 = 450 + 900 = 1350$ ✓.

**Antwort:** Der Saal hat $1350$ Plätze.
:::

```aufgabe
id: fr-gauss-summen
titel: Gauß-Summen
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  a) Berechne $1 + 2 + 3 + \dots + 200$.

  b) Berechne die Summe aller ungeraden Zahlen von $1$ bis $99$.
teile:
  - typ: zahl
    label: 'a)'
    loesung: "200*201/2"
    anzeige: '20100'
    fehler:
      - wert: "200*201"
        meldung: |
          Das ist $2s$, die Summe der vorwärts und rückwärts geschriebenen Zeile. Teile noch durch $2$.
  - typ: zahl
    label: 'b)'
    loesung: "50^2"
    anzeige: '2500'
    fehler:
      - wert: "99*100/2"
        meldung: |
          Das ist die Summe **aller** Zahlen von $1$ bis $99$. Gesucht sind nur die ungeraden.
hinweise:
  - 'Bei b) zuerst zählen, wie viele ungerade Zahlen von $1$ bis $99$ es gibt.'
loesung: |
  Ansatz: Beide Summen sind arithmetische Reihen. Wir nutzen die Sonderfälle $\sum k = \frac{n(n+1)}{2}$ und $\sum (2k - 1) = n^2$.
  ---
  a) $\sum_{k=1}^{200} k = \frac{200 \cdot 201}{2} = 20\,100$.
  ---
  b) Die ungeraden Zahlen $1, 3, \dots, 99$ sind $2k - 1$ für $k = 1, \dots, 50$. Also ist die Summe $50^2 = 2500$. Kontrolle mit der allgemeinen Formel: $\frac{50}{2}\,(1 + 99) = 2500$ ✓.
```

```aufgabe
id: fr-arith-reihe-basis
titel: Summe der ersten 30 Glieder
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Berechne die Summe der ersten $30$ Glieder der Folge $6,\ 11,\ 16,\ 21,\ \dots$
teile:
  - typ: zahl
    loesung: "30/2*(6 + 6 + 29*5)"
    anzeige: '2355'
    fehler:
      - wert: "30*(6 + 151)"
        meldung: |
          Die Formel verlangt den **Mittelwert** aus erstem und letztem Glied, also $\frac{6 + 151}{2}$. Du hast die Halbierung vergessen.
      - wert: "30/2*(6 + 6 + 30*5)"
        meldung: |
          Das letzte Glied ist $a_{30} = 6 + 29 \cdot 5 = 151$. Bis dorthin sind es $29$ Schritte, nicht $30$.
hinweise:
  - 'Bestimme zuerst $d$ und das letzte Glied $a_{30}$.'
loesung: |
  Ansatz: Arithmetische Folge mit $a_1 = 6$ und $d = 5$. Für die Summenformel brauchen wir das letzte Glied $a_{30} = 6 + 29 \cdot 5 = 151$.
  ---
  $s_{30} = \frac{30}{2}\,(6 + 151) = 15 \cdot 157 = 2355$.
  ---
  Kontrolle mit der zweiten Form: $30 \cdot 6 + \frac{30 \cdot 29}{2} \cdot 5 = 180 + 2175 = 2355$ ✓.
```

### Wenn die Anzahl der Glieder gesucht ist

Manchmal ist die Summe gegeben, und die Anzahl $n$ ist gesucht. Dann entsteht eine **quadratische** Gleichung oder
Ungleichung in $n$, denn in $s_n = n a_1 + \frac{n(n - 1)}{2} d$ kommt $n^2$ vor.

:::beispiel[Wie viele Glieder braucht man?]
Ab wie vielen Gliedern überschreitet $5 + 9 + 13 + 17 + \dots$ den Wert $1000$?

**Schritt 1, $s_n$ als Term in $n$.** Mit $a_1 = 5$ und $d = 4$:
$s_n = 5n + \frac{n(n - 1)}{2} \cdot 4 = 5n + 2n^2 - 2n = 2n^2 + 3n$.

**Schritt 2, Gleichung lösen.** Die Grenze liefert $2n^2 + 3n - 1000 = 0$. Die positive Lösung ist
$$n = \frac{-3 + \sqrt{9 + 8000}}{4} \approx \frac{-3 + 89{,}49}{4} \approx 21{,}62.$$

**Schritt 3, auf eine natürliche Zahl kommen.** $n$ muss eine ganze Zahl über $21{,}62$ sein, also $n = 22$.

**Schritt 4, Kontrolle.** $s_{21} = 2 \cdot 441 + 63 = 945$ (noch zu wenig), $s_{22} = 968 + 66 = 1034$ ✓.
:::

:::achtung[Halbierung vergessen]
Falsch: „$1 + 2 + \dots + 10 = 10 \cdot (1 + 10) = 110$.“

Richtig: In der Formel steht der **Mittelwert** $\frac{a_1 + a_n}{2}$. Also $10 \cdot \frac{11}{2} = 55$. Eine schnelle
Plausibilitätsprüfung: Zehn Zahlen, die alle höchstens $10$ sind, können zusammen nicht $110$ ergeben.
:::

:::achtung[Anzahl der Glieder um eins zu klein]
Falsch: „Die Vielfachen von $6$ von $12$ bis $96$ sind $\frac{96 - 12}{6} = 14$ Zahlen.“

Richtig: $14$ ist die Anzahl der **Schritte**. Die Anzahl der Zahlen ist eins mehr, also $15$. Zehn Meter Zaun mit
einem Pfahl pro Meter brauchen elf Pfähle. Die Summe ist darum $\frac{15}{2}\,(12 + 96) = 810$.
:::

:::merke[Rezept: arithmetische Reihe]
1. $a_1$, $d$ und die **Anzahl** $n$ der Glieder bestimmen. Ist das letzte Glied bekannt: $n = \frac{a_n - a_1}{d} + 1$.
2. Ist das letzte Glied bekannt, nimm $s_n = \frac{n}{2}(a_1 + a_n)$. Sonst nimm $s_n = n a_1 + \frac{n(n - 1)}{2} d$.
3. Ist $n$ gesucht: quadratische Gleichung aufstellen, die positive Lösung nehmen, zur nächsten passenden natürlichen Zahl übergehen und mit $s_{n-1}$ und $s_n$ kontrollieren.
:::

```aufgabe
id: fr-arith-reihe-siebener
titel: Dreistellige Vielfache von 7
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Wie viele dreistellige natürliche Zahlen sind durch $7$ teilbar, und wie groß ist ihre Summe?
teile:
  - typ: zahl
    label: 'Anzahl'
    loesung: "(994 - 105)/7 + 1"
    anzeige: '128'
    fehler:
      - wert: "127"
        meldung: |
          $\frac{994 - 105}{7} = 127$ zählt die Schritte. Die Anzahl der Zahlen ist eins größer.
  - typ: zahl
    label: 'Summe'
    loesung: "128*(105 + 994)/2"
    anzeige: '70336'
    fehler:
      - wert: "127*(105 + 994)/2"
        meldung: |
          Mit $127$ hast du die Anzahl der Schritte statt der Anzahl der Zahlen eingesetzt.
hinweise:
  - 'Bestimme das kleinste und das größte dreistellige Vielfache von $7$.'
  - 'Anzahl der Glieder: $\frac{a_n - a_1}{d} + 1$. Dann Summenformel mit erstem und letztem Glied.'
loesung: |
  Ansatz: Die Vielfachen von $7$ bilden eine arithmetische Folge mit $d = 7$. Kleinstes dreistelliges: $7 \cdot 15 = 105$. Größtes: $7 \cdot 142 = 994$, denn $7 \cdot 143 = 1001$ ist vierstellig.
  ---
  Anzahl $n = \frac{994 - 105}{7} + 1 = 127 + 1 = 128$.
  ---
  Summe $s_{128} = \frac{128}{2}\,(105 + 994) = 64 \cdot 1099 = 70\,336$. Kontrolle: Auch $142 - 15 + 1 = 128$ Faktoren ✓.
gefuehrt:
  - text: Welches ist das kleinste dreistellige Vielfache von $7$?
    teil:
      typ: zahl
      loesung: "105"
      fehler:
        - wert: "98"
          meldung: '$98$ ist zweistellig. Dreistellig beginnt bei $100$.'
    erklaerung: '$7 \cdot 14 = 98$ ist zu klein, $7 \cdot 15 = 105$ ist das erste dreistellige.'
  - text: Welches ist das größte dreistellige Vielfache von $7$?
    teil: { typ: zahl, loesung: "994" }
    erklaerung: '$7 \cdot 142 = 994$. Das nächste, $1001$, ist schon vierstellig.'
  - text: Wie viele Vielfache sind es?
    teil:
      typ: zahl
      loesung: "128"
      fehler:
        - wert: "127"
          meldung: 'Das sind die Schritte. Die Anzahl der Zahlen ist eins mehr.'
    erklaerung: '$\frac{994 - 105}{7} + 1 = 128$.'
  - text: Berechne die Summe.
    teil: { typ: zahl, loesung: "128*(105 + 994)/2" }
    erklaerung: '$64 \cdot 1099 = 70\,336$.'
```

```aufgabe
id: fr-rohrstapel
titel: Rohrstapel
niveau: 2
lernziel: 3
kompetenz: modellieren
angabe: |
  Auf einem Lagerplatz liegen Rohre in einem Stapel. Die unterste Lage hat $25$ Rohre, jede Lage darüber ein Rohr
  weniger. Die oberste Lage hat $8$ Rohre. Wie viele Lagen und wie viele Rohre sind es insgesamt?
teile:
  - typ: zahl
    label: 'Anzahl der Lagen'
    loesung: "25 - 8 + 1"
    anzeige: '18'
    fehler:
      - wert: "17"
        meldung: |
          $25 - 8 = 17$ ist die Anzahl der Schritte. Beide Lagen, die unterste und die oberste, zählen mit.
  - typ: zahl
    label: 'Rohre insgesamt'
    loesung: "18*(25 + 8)/2"
    anzeige: '297'
    fehler:
      - wert: "18*(25 + 8)"
        meldung: |
          Du hast mit der Summe aus erster und letzter Lage statt mit ihrem Mittelwert multipliziert. Teile noch durch $2$.
hinweise:
  - 'Von unten gezählt ist das eine arithmetische Folge mit $a_1 = 25$ und $d = -1$.'
  - 'Anzahl der Lagen: $\frac{a_n - a_1}{d} + 1$. Dann Anzahl mal Mittelwert.'
loesung: |
  Ansatz: Von unten nach oben nimmt die Zahl der Rohre um $1$ ab. Das ist eine arithmetische Folge mit $a_1 = 25$, $d = -1$ und letztem Glied $8$.
  ---
  Anzahl der Lagen: $n = \frac{8 - 25}{-1} + 1 = 17 + 1 = 18$.
  ---
  Rohre: $s_{18} = \frac{18}{2}\,(25 + 8) = 9 \cdot 33 = 297$.
  ---
  Kontrolle: Der Mittelwert pro Lage ist $16{,}5$ Rohre, und $18 \cdot 16{,}5 = 297$ ✓. Antwort: $18$ Lagen mit zusammen $297$ Rohren.
```

```aufgabe
id: fr-arith-reihe-umkehr
titel: Wie viele Glieder ergeben 800?
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Die Summe $2 + 6 + 10 + 14 + \dots$ der ersten $n$ Glieder ist $800$. Bestimme $n$.
teile:
  - typ: zahl
    label: '$n$'
    loesung: "sqrt(800/2)"
    anzeige: '20'
    fehler:
      - wert: "sqrt(800)"
        meldung: |
          Stell $s_n$ zuerst als Term auf: $s_n = 2n^2$. Dann teilst du durch $2$, bevor du die Wurzel ziehst.
      - wert: "-20"
        meldung: |
          $n$ ist eine Anzahl von Gliedern und damit positiv. Die negative Lösung der Gleichung fällt weg.
hinweise:
  - 'Setze in $s_n = n a_1 + \frac{n(n - 1)}{2} d$ ein und vereinfache.'
  - 'Mit $a_1 = 2$ und $d = 4$ wird $s_n = 2n^2$.'
loesung: |
  Ansatz: Die Anzahl ist gesucht, also stellen wir $s_n$ als Term in $n$ auf. Hier ist $a_1 = 2$ und $d = 4$.
  ---
  $s_n = 2n + \frac{n(n - 1)}{2} \cdot 4 = 2n + 2n^2 - 2n = 2n^2$.
  ---
  $2n^2 = 800$ ergibt $n^2 = 400$ und $n = 20$. Die Lösung $-20$ fällt weg, weil eine Anzahl positiv ist.
  ---
  Kontrolle: $a_{20} = 2 + 19 \cdot 4 = 78$ und $\frac{20}{2}\,(2 + 78) = 800$ ✓.
```

```aufgabe
id: fr-arith-reihe-fehlersuche
titel: Die falsche Anzahl
niveau: 2
lernziel: 3
kompetenz: begruenden
angabe: |
  Eine Mitschülerin berechnet $3 + 8 + 13 + \dots + 98$ so: „Es gibt $\frac{98 - 3}{5} = 19$ Glieder, also ist die
  Summe $\frac{19}{2} \cdot (3 + 98) = 959{,}5$.“

  a) Berechne die richtige Summe.

  b) Woran hätte sie schon am Ergebnis merken können, dass etwas nicht stimmt?
teile:
  - typ: zahl
    label: 'a)'
    loesung: "20/2*(3 + 98)"
    anzeige: '1010'
    fehler:
      - wert: "959.5"
        meldung: |
          Das ist das Ergebnis der Mitschülerin. Prüfe die Anzahl der Glieder: Sie hat die Schritte gezählt.
  - typ: text
    label: 'b)'
    muster: |
      Alle Summanden sind ganze Zahlen. Ihre Summe muss deshalb auch eine ganze Zahl sein. $959{,}5$ kann also
      nicht stimmen. Der Fehler: $19$ ist die Anzahl der Schritte, die Anzahl der Glieder ist $20$.
hinweise:
  - 'Zähle die Glieder mit $\frac{a_n - a_1}{d} + 1$.'
  - 'Kann eine Summe ganzer Zahlen eine Kommazahl sein?'
loesung: |
  Ansatz: Die Glieder bilden eine arithmetische Folge mit $a_1 = 3$ und $d = 5$. Zuerst die Anzahl richtig bestimmen.
  ---
  $n = \frac{98 - 3}{5} + 1 = 19 + 1 = 20$. Die Mitschülerin hat die Schritte gezählt.
  ---
  a) $s_{20} = \frac{20}{2}\,(3 + 98) = 10 \cdot 101 = 1010$.
  ---
  b) Eine Summe ganzer Zahlen ist immer ganz. Das Ergebnis $959{,}5$ hätte sofort misstrauisch machen müssen. Solche Plausibilitätsprüfungen kosten Sekunden und retten Punkte.
```

```aufgabe
id: fr-arith-reihe-ungleichung
titel: Trainingsplan
niveau: 3
lernziel: 3
kompetenz: modellieren
angabe: |
  Eine Läuferin trainiert für einen Wettkampf. In der ersten Woche läuft sie insgesamt $12$ km, in jeder weiteren
  Woche $1{,}5$ km mehr als in der Woche davor.

  a) Wie viele Kilometer läuft sie in der 10. Woche?

  b) Wie viele Kilometer hat sie nach 10 Wochen insgesamt zurückgelegt?

  c) Nach wie vielen Wochen hat sie insgesamt erstmals mindestens $300$ km zurückgelegt?
teile:
  - typ: zahl
    label: 'a)'
    einheit: km
    loesung: "12 + 9*1.5"
    anzeige: '25{,}5'
    fehler:
      - wert: "12 + 10*1.5"
        meldung: |
          In der ersten Woche gibt es noch keine Steigerung. Bis zur 10. Woche sind es $9$ Steigerungen.
  - typ: zahl
    label: 'b)'
    einheit: km
    loesung: "10/2*(12 + 25.5)"
    anzeige: '187{,}5'
    fehler:
      - wert: "25.5*10"
        meldung: |
          Sie läuft nicht jede Woche $25{,}5$ km. Das ist nur die letzte Woche. Nimm den Mittelwert aus erster und letzter Woche.
  - typ: zahl
    label: 'c) Wochen'
    loesung: "14"
    fehler:
      - wert: "13"
        meldung: |
          Die Lösung der Gleichung ist $13{,}86$. Nach $13$ Wochen sind es erst $273$ km. Du musst aufrunden.
hinweise:
  - '$s_n = n a_1 + \frac{n(n - 1)}{2}\,d$ aufstellen und $s_n \ge 300$ setzen.'
  - 'Es entsteht $0{,}75 n^2 + 11{,}25 n - 300 \ge 0$. Teile durch $0{,}75$ und löse die quadratische Gleichung.'
loesung: |
  Ansatz: Die Wochenkilometer bilden eine arithmetische Folge mit $a_1 = 12$ und $d = 1{,}5$. Die Gesamtstrecke ist die Partialsumme $s_n$.
  ---
  a) $a_{10} = 12 + 9 \cdot 1{,}5 = 25{,}5$ km.
  ---
  b) $s_{10} = \frac{10}{2}\,(12 + 25{,}5) = 187{,}5$ km.
  ---
  c) $s_n = 12n + \frac{n(n - 1)}{2} \cdot 1{,}5 = 0{,}75 n^2 + 11{,}25 n$. Aus $0{,}75 n^2 + 11{,}25 n = 300$ wird nach Teilen durch $0{,}75$ die Gleichung $n^2 + 15n - 400 = 0$. Positive Lösung: $n = \frac{-15 + \sqrt{1825}}{2} \approx 13{,}86$.
  ---
  Also $n = 14$. Kontrolle: $s_{13} = 273$ km und $s_{14} = 304{,}5$ km ✓. Antwort: Nach $14$ Wochen sind es erstmals mindestens $300$ km.
```

## Endliche geometrische Reihen

```aufgabe
id: fr-v-geo-glied
titel: Ein Glied einer geometrischen Folge
niveau: 1
art: check
angabe: |
  Die Folge $3,\ 6,\ 12,\ \dots$ ist geometrisch. Berechne $a_6$.
  (Vorwissen aus [8.3 Geometrische Folgen](/lernen/mathe3/folgen-reihen/geometrische-folgen))
teile:
  - typ: zahl
    loesung: "3*2^5"
    anzeige: '96'
    fehler:
      - wert: "3*2^6"
        meldung: |
          Das ist $a_7$. Bis $a_6$ multipliziert man nur $5$ Mal mit $q = 2$.
hinweise:
  - '$a_n = a_1 \cdot q^{n-1}$ mit $q = 2$.'
loesung: |
  $a_1 = 3$ und $q = 2$, also $a_6 = 3 \cdot 2^5$.
  ---
  $a_6 = 3 \cdot 32 = 96$. Kontrolle durch Weiterzählen: $3, 6, 12, 24, 48, 96$ ✓.
```

**Worum geht es?** Wir addieren die Glieder einer geometrischen Folge. Auch dafür gibt es eine kurze Formel, und
ihre Herleitung ist eine beliebte Prüfungsfrage.

Der Legende nach wünschte sich der Erfinder des Schachspiels eine Belohnung in Reiskörnern: eines auf das erste
Feld, zwei auf das zweite, vier auf das dritte. Auf jedes weitere Feld sollten doppelt so viele Körner kommen wie
auf das vorige. Der König hielt das für bescheiden. Wie viele Körner sind es auf allen $64$ Feldern?
$$s = 1 + 2 + 4 + \dots + 2^{63} = \sum_{k=0}^{63} 2^k.$$

### Herleitung der Summenformel

Der Gauß-Trick hilft hier nicht, denn die Glieder wachsen nicht gleichmäßig. Es gibt einen anderen Trick:
**Multipliziere die Summe mit $q$ und ziehe die ursprüngliche Summe ab.** Dann heben sich fast alle Glieder auf.

:::beispiel[Der Trick an Zahlen]
Gesucht ist $s = 1 + 3 + 9 + 27 + 81$. Hier ist $q = 3$.

**Schritt 1, mit $q$ multiplizieren.** $3s = 3 + 9 + 27 + 81 + 243$. Jedes Glied wandert eine Stelle weiter.

**Schritt 2, abziehen.** In $3s - s$ kommen $3, 9, 27, 81$ einmal mit Plus und einmal mit Minus vor. Übrig bleiben
nur $243$ und $-1$: $3s - s = 243 - 1 = 242$.

**Schritt 3, nach $s$ auflösen.** $2s = 242$, also $s = 121$.

**Schritt 4, Kontrolle.** $1 + 3 + 9 + 27 + 81 = 121$ ✓.
:::

:::satz[Summenformel für geometrische Reihen]
Für eine geometrische Folge mit erstem Glied $a_1$ und Quotient $q \neq 1$ gilt
$$s_n = a_1 + a_1 q + \dots + a_1 q^{n-1} = a_1 \cdot \frac{q^n - 1}{q - 1} = a_1 \cdot \frac{1 - q^n}{1 - q}.$$
Dabei ist $n$ die **Anzahl der Summanden**. Für $q = 1$ sind alle Summanden gleich, dann ist $s_n = n\, a_1$.
:::

:::beweis
Wir schreiben $s_n$ und $q\, s_n$ untereinander:
$$\begin{aligned}
s_n &= a_1 + a_1 q + a_1 q^2 + \dots + a_1 q^{n-1},\\
q\, s_n &= \phantom{a_1 + {}} a_1 q + a_1 q^2 + \dots + a_1 q^{n-1} + a_1 q^n.
\end{aligned}$$
Wir ziehen die erste Zeile von der zweiten ab. Alle mittleren Glieder heben sich auf. Es bleiben das letzte Glied
der zweiten Zeile und das erste Glied der ersten Zeile:
$$q\,s_n - s_n = a_1 q^n - a_1, \qquad\text{also}\qquad s_n\,(q - 1) = a_1\,(q^n - 1).$$
Für $q \neq 1$ ist $q - 1 \neq 0$, und wir dürfen dadurch dividieren. Die zweite Form entsteht, wenn man Zähler und
Nenner mit $-1$ multipliziert.
:::

Welche Form du nimmst, ist Geschmackssache. Für $q > 1$ ist $\frac{q^n - 1}{q - 1}$ bequemer, weil Zähler und Nenner
positiv sind. Für $0 < q < 1$ ist $\frac{1 - q^n}{1 - q}$ bequemer.

```aufgabe
id: fr-geo-reihe-herleiten
titel: Den Trick selbst anwenden
niveau: 1
lernziel: 3
kompetenz: begruenden
angabe: |
  Berechne $s = 1 + 5 + 25 + 125 + 625$ mit dem Trick „mit $q$ multiplizieren und abziehen“.
  Gib den Wert von $s$ an.
teile:
  - typ: zahl
    label: '$s$'
    loesung: "(5^5 - 1)/(5 - 1)"
    anzeige: '781'
    fehler:
      - wert: "(5^4 - 1)/(5 - 1)"
        meldung: |
          Es sind $5$ Summanden, nicht $4$. In der Formel steht $q^n$ mit $n$ gleich der Anzahl der Summanden.
hinweise:
  - 'Hier ist $q = 5$. Schreib $5s$ aus. Welches Glied kommt neu dazu?'
  - 'In $5s - s$ heben sich alle Glieder bis auf das neue letzte und das alte erste auf.'
loesung: |
  Ansatz: Der Quotient ist $q = 5$. Wir multiplizieren mit $5$: $5s = 5 + 25 + 125 + 625 + 3125$.
  ---
  Abziehen: $5s - s = 3125 - 1 = 3124$. Alle anderen Glieder heben sich auf.
  ---
  $4s = 3124$, also $s = 781$. Kontrolle durch Addieren: $1 + 5 + 25 + 125 + 625 = 781$ ✓.
gefuehrt:
  - text: Multipliziere die Summe mit $q = 5$. Welches Glied steht in $5s$ ganz am Ende?
    teil: { typ: zahl, loesung: "5*625" }
    erklaerung: '$5s = 5 + 25 + 125 + 625 + 3125$. Das neue letzte Glied ist $3125$.'
  - text: Welchen Wert hat $5s - s$?
    teil:
      typ: zahl
      loesung: "3125 - 1"
      fehler:
        - wert: "3125"
          meldung: 'Das erste Glied $1$ von $s$ hat in $5s$ keinen Partner. Es wird abgezogen.'
    erklaerung: 'Übrig bleiben $3125 - 1 = 3124$.'
  - text: Überlege, wie du von $5s - s$ zu $s$ kommst.
    erklaerung: '$5s - s = 4s$. Man teilt also durch $4 = q - 1$.'
  - text: Berechne $s$.
    teil: { typ: zahl, loesung: "3124/4" }
    erklaerung: '$s = \frac{3124}{4} = 781$.'
```

:::merke[Was in die Formel gehört]
In der Formel steht $q^n$ mit $n$ gleich der **Anzahl der Summanden**. Das ist nicht die Hochzahl des letzten
Summanden. Bei $1 + 2 + \dots + 2^{63}$ sind es $64$ Summanden, also $s = \frac{2^{64} - 1}{2 - 1} = 2^{64} - 1$.
:::

:::beispiel[Die Reiskörner]
**Ansatz:** geometrische Reihe mit $a_1 = 1$, $q = 2$ und $n = 64$ Summanden.

**Rechnung:** $s = 2^{64} - 1 = 18\,446\,744\,073\,709\,551\,615 \approx 1{,}8 \cdot 10^{19}$ Körner.

**Deutung:** Ein Reiskorn wiegt etwa $25$ mg. Das sind rund $4{,}6 \cdot 10^{11}$ Tonnen Reis. Die Welternte liegt bei
etwa $8 \cdot 10^8$ Tonnen im Jahr. Der Erfinder hätte also mehr als $500$ Jahresernten verlangt.
:::

:::beispiel[Eine Summe mit Summenzeichen]
Gesucht ist $\sum_{k=1}^{10} 3 \cdot 2^{k-1} = 3 + 6 + 12 + \dots + 1536$.

**Schritt 1, Bausteine ablesen.** Erstes Glied $a_1 = 3$, Quotient $q = 2$, Anzahl $n = 10$.

**Schritt 2, Formel.** $s_{10} = 3 \cdot \frac{2^{10} - 1}{2 - 1} = 3 \cdot 1023 = 3069$.
:::

:::achtung[Hochzahl des letzten Glieds statt Anzahl]
Falsch: „$1 + 2 + 4 + \dots + 2^9 = \frac{2^9 - 1}{2 - 1} = 511$.“

Richtig: Die Summanden sind $2^0$ bis $2^9$, das sind $10$ Stück. Also $s = 2^{10} - 1 = 1023$. Zähle immer zuerst
die Summanden.
:::

:::achtung[Erstes Glied falsch abgelesen]
Falsch: „$\sum_{k=2}^{6} 3^k = 3 \cdot \frac{3^5 - 1}{3 - 1} = 363$.“

Richtig: Das erste Glied ist $3^2 = 9$, nicht $3$. Mit $5$ Summanden ist
$s = 9 \cdot \frac{3^5 - 1}{2} = 9 \cdot 121 = 1089$. Kontrolle: $9 + 27 + 81 + 243 + 729 = 1089$ ✓.
:::

:::merke[Rezept: geometrische Reihe]
1. **Erstes Glied** $a_1$ bestimmen. Bei $\sum_{k=m}^{n} q^k$ ist es $q^m$.
2. **Quotient** $q$ bestimmen und die **Anzahl** der Summanden zählen, bei $\sum_{k=m}^{n}$ also $n - m + 1$.
3. Formel $s = a_1 \cdot \frac{q^{\text{Anzahl}} - 1}{q - 1}$ anwenden.
4. Ist die Anzahl gesucht: Ungleichung aufstellen, nach $q^n$ auflösen, logarithmieren.
:::

Lässt man $n$ immer größer werden und ist $|q| < 1$, wird $q^n$ winzig. Dann nähert sich $s_n$ dem Wert
$\frac{a_1}{1 - q}$. Zum Beispiel ist $1 + \frac12 + \frac14 + \dots + \frac{1}{2^{n-1}} = 2 - \frac{1}{2^{n-1}}$. Das
nähert sich $2$, erreicht es aber nie. Was eine „unendliche Summe“ genau bedeutet, klärt
[11.13 Unendliche Reihen](/lernen/mathe3/grenzwerte-folgen/unendliche-reihen-partialsummen-geometrische-und-harmonische-reihe).

```aufgabe
id: fr-geo-reihe-basis
titel: Geometrische Summe
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Berechne die Summe der ersten $8$ Glieder der Folge $2,\ 6,\ 18,\ 54,\ \dots$
teile:
  - typ: zahl
    label: '$s_8$'
    loesung: "2*(3^8 - 1)/(3 - 1)"
    anzeige: '6560'
    fehler:
      - wert: "2*(3^7 - 1)/(3 - 1)"
        meldung: |
          In der Formel steht $q^n$ mit der **Anzahl** $n = 8$, nicht mit der Hochzahl $7$ des letzten Glieds.
      - wert: "(3^8 - 1)/(3 - 1)"
        meldung: |
          Der Faktor $a_1 = 2$ fehlt. Die Folge beginnt nicht mit $1$.
hinweise:
  - 'Lies $a_1$, $q$ und $n$ ab und setze in $s_n = a_1 \frac{q^n - 1}{q - 1}$ ein.'
loesung: |
  Ansatz: Geometrische Reihe mit $a_1 = 2$, $q = 3$ und $n = 8$ Summanden.
  ---
  $s_8 = 2 \cdot \frac{3^8 - 1}{3 - 1} = 2 \cdot \frac{6561 - 1}{2} = 6560$.
```

```aufgabe
id: fr-geo-reihe-index
titel: Summe mit verschobenem Index
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Berechne $\displaystyle\sum_{k=3}^{8} 2^k$.
teile:
  - typ: zahl
    label: 'Summe'
    loesung: "2^3*(2^6 - 1)/(2 - 1)"
    anzeige: '504'
    fehler:
      - wert: "2*(2^6 - 1)"
        meldung: |
          Das erste Glied ist nicht $2$, sondern $2^3 = 8$, denn der Laufindex beginnt bei $3$.
      - wert: "2^3*(2^5 - 1)"
        meldung: |
          Von $3$ bis $8$ sind es $8 - 3 + 1 = 6$ Summanden, nicht $5$.
hinweise:
  - 'Erstes Glied $2^3 = 8$. Anzahl der Summanden $8 - 3 + 1$.'
loesung: |
  Ansatz: Erstes Glied $2^3 = 8$, Quotient $2$, Anzahl $8 - 3 + 1 = 6$.
  ---
  $s = 8 \cdot \frac{2^6 - 1}{2 - 1} = 8 \cdot 63 = 504$.
  ---
  Kontrolle: $8 + 16 + 32 + 64 + 128 + 256 = 504$ ✓.
```

```aufgabe
id: fr-geo-reihe-halbe
titel: Halbieren und addieren
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Berechne $\displaystyle\sum_{k=0}^{5} \left(\frac12\right)^k$ exakt als Bruch.
teile:
  - typ: zahl
    loesung: "(1 - (1/2)^6)/(1 - 1/2)"
    anzeige: '\tfrac{63}{32}'
    fehler:
      - wert: "2"
        meldung: |
          $2$ ist der Wert der **unendlichen** Summe. Hier sind es nur endlich viele Summanden. Die endliche Formel hat zusätzlich $1 - q^n$ im Zähler.
      - wert: "(1 - (1/2)^5)/(1 - 1/2)"
        meldung: |
          Von $k = 0$ bis $k = 5$ sind es $6$ Summanden, nicht $5$.
hinweise:
  - 'Erstes Glied $\left(\frac12\right)^0 = 1$, Quotient $\frac12$, Anzahl $6$.'
loesung: |
  Ansatz: Erstes Glied $1$, $q = \frac12$ und $5 - 0 + 1 = 6$ Summanden. Für $q < 1$ ist die Form $\frac{1 - q^n}{1 - q}$ bequem.
  ---
  $s = \frac{1 - \frac{1}{64}}{\frac12} = \frac{63}{64} \cdot 2 = \frac{63}{32}$.
  ---
  Kontrolle: $1 + \frac12 + \frac14 + \frac18 + \frac{1}{16} + \frac{1}{32} = \frac{32 + 16 + 8 + 4 + 2 + 1}{32} = \frac{63}{32}$ ✓.
```

```aufgabe
id: fr-geo-reihe-alternierend
titel: Alternierende geometrische Summe
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Berechne exakt als Bruch:
  $$1 - \frac12 + \frac14 - \frac18 + \dots + \frac{1}{256} - \frac{1}{512}$$
teile:
  - typ: zahl
    label: 'Summe'
    loesung: "(1 - (-1/2)^10)/(1 + 1/2)"
    anzeige: '\tfrac{341}{512}'
    fehler:
      - wert: "(1 - (1/2)^10)/(1 - 1/2)"
        meldung: |
          Das Vorzeichen wechselt, also ist $q = -\frac12$. Dann steht im Nenner $1 - \left(-\frac12\right) = \frac32$.
hinweise:
  - '$q = -\tfrac12$. Der letzte Summand ist $-\frac{1}{512} = \left(-\frac12\right)^9$.'
  - 'Von $\left(-\frac12\right)^0$ bis $\left(-\frac12\right)^9$ sind es $10$ Summanden.'
loesung: |
  Ansatz: Jedes Glied ist das vorige mal $-\frac12$. Also $a_1 = 1$ und $q = -\frac12$. Der letzte Summand ist $\left(-\frac12\right)^9$, also gibt es $n = 10$ Summanden.
  ---
  $s_{10} = \frac{1 - \left(-\frac12\right)^{10}}{1 - \left(-\frac12\right)} = \frac{1 - \frac{1}{1024}}{\frac32} = \frac{1023}{1024} \cdot \frac23 = \frac{341}{512}$.
  ---
  Dezimal ist das etwa $0{,}666$. Die Summe liegt schon sehr nahe bei $\frac23 = \frac{1}{1 - (-1/2)}$, dem Wert der unendlichen Reihe.
```

```aufgabe
id: fr-geo-reihe-anzahl
titel: Wie viele Glieder?
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Wie viele Glieder der Folge $1;\ 1{,}5;\ 2{,}25;\ \dots$ muss man mindestens addieren, damit die Summe größer als
  $100$ wird?
teile:
  - typ: zahl
    label: '$n$'
    loesung: "10"
    fehler:
      - wert: "9"
        meldung: |
          Die Grenze liegt bei $9{,}70$. Mit $9$ Gliedern ist die Summe erst etwa $74{,}9$.
hinweise:
  - '$s_n = \frac{1{,}5^n - 1}{0{,}5} = 2\,(1{,}5^n - 1)$.'
  - 'Ungleichung $1{,}5^n > 51$ logarithmieren.'
loesung: |
  Ansatz: Die Anzahl ist gesucht. Wir stellen $s_n$ als Term auf: $a_1 = 1$, $q = 1{,}5$, also $s_n = \frac{1{,}5^n - 1}{1{,}5 - 1} = 2\,(1{,}5^n - 1)$.
  ---
  $2\,(1{,}5^n - 1) > 100$ ergibt $1{,}5^n > 51$. Logarithmieren: $n > \frac{\ln 51}{\ln 1{,}5} \approx 9{,}70$.
  ---
  Also $n = 10$. Kontrolle: $s_9 \approx 74{,}9$ und $s_{10} \approx 113{,}3$ ✓.
```

```aufgabe
id: fr-geo-reihe-kunden
titel: Neue Kundschaft
niveau: 2
lernziel: 3
kompetenz: modellieren
angabe: |
  Ein junges Unternehmen gewinnt im ersten Monat $200$ neue Kunden. In jedem weiteren Monat gewinnt es $10\,\%$ mehr
  neue Kunden als im Monat davor. Wie viele neue Kunden gewinnt es in den ersten $12$ Monaten insgesamt? Runde auf
  ganze Kunden.
teile:
  - typ: zahl
    loesung: "200*(1.1^12 - 1)/0.1"
    anzeige: '4277'
    toleranz: 1
    fehler:
      - wert: "200*1.1^11"
        meldung: |
          Das ist nur die Zahl der neuen Kunden im **12. Monat**. Gefragt ist die Summe über alle $12$ Monate.
      - wert: "200*(1.1^11 - 1)/0.1"
        meldung: |
          Es sind $12$ Monate, also $12$ Summanden. In der Formel steht $1{,}1^{12}$.
hinweise:
  - 'Die monatlichen Neukunden bilden eine geometrische Folge mit $a_1 = 200$ und $q = 1{,}1$.'
  - 'Gesucht ist die Summe der ersten $12$ Glieder.'
loesung: |
  Ansatz: Jeden Monat sind es $10\,\%$ mehr als im Vormonat. Das ist eine geometrische Folge mit $a_1 = 200$ und $q = 1{,}1$. Gesucht ist $s_{12}$.
  ---
  $s_{12} = 200 \cdot \frac{1{,}1^{12} - 1}{1{,}1 - 1} \approx 200 \cdot \frac{3{,}13843 - 1}{0{,}1} \approx 4276{,}9$.
  ---
  Antwort: rund $4277$ neue Kunden. Plausibel: Im 12. Monat sind es etwa $571$, im Mittel also gut $350$ pro Monat ✓.
```

```aufgabe
id: fr-geo-reihe-grenze
titel: Eine Summe, die nie 15 erreicht
niveau: 3
lernziel: 3
kompetenz: begruenden
angabe: |
  Betrachte die Summe $3 + 3 \cdot 0{,}8 + 3 \cdot 0{,}8^2 + \dots$ der ersten $n$ Glieder.

  a) Zeige, dass $s_n = 15\,(1 - 0{,}8^n)$ gilt, und bestimme die kleinste Anzahl $n$, für die $s_n > 14$ ist.

  b) Kann die Summe jemals $15$ übersteigen? Begründe.
teile:
  - typ: zahl
    label: 'a) kleinstes $n$'
    loesung: "13"
    fehler:
      - wert: "12"
        meldung: |
          Die Grenze liegt bei $12{,}14$. Mit $12$ Gliedern ist $s_{12} \approx 13{,}97$, also noch nicht über $14$.
  - typ: text
    label: 'b) Begründung'
    muster: |
      Nein. Für jedes $n$ ist $0{,}8^n > 0$, also $1 - 0{,}8^n < 1$ und damit $s_n = 15\,(1 - 0{,}8^n) < 15$. Die Summe
      kommt der $15$ beliebig nahe, weil $0{,}8^n$ beliebig klein wird, erreicht sie aber nie.
hinweise:
  - 'Setze $a_1 = 3$ und $q = 0{,}8$ in $s_n = a_1 \frac{1 - q^n}{1 - q}$ ein.'
  - 'Für a) löse $0{,}8^n < \frac{1}{15}$ mit dem Logarithmus. Achtung: $\ln 0{,}8 < 0$.'
loesung: |
  Ansatz: Geometrische Reihe mit $a_1 = 3$ und $q = 0{,}8$. Weil $q < 1$ ist, nehmen wir die Form $\frac{1 - q^n}{1 - q}$.
  ---
  $s_n = 3 \cdot \frac{1 - 0{,}8^n}{0{,}2} = 15\,(1 - 0{,}8^n)$.
  ---
  a) $15\,(1 - 0{,}8^n) > 14$ ergibt $1 - 0{,}8^n > \frac{14}{15}$, also $0{,}8^n < \frac{1}{15}$. Logarithmieren und durch $\ln 0{,}8 < 0$ teilen: $n > \frac{\ln(1/15)}{\ln 0{,}8} \approx 12{,}14$. Also $n = 13$. Kontrolle: $s_{12} \approx 13{,}97$ und $s_{13} \approx 14{,}18$ ✓.
  ---
  b) Nein. $0{,}8^n$ ist immer positiv. Deshalb ist $1 - 0{,}8^n < 1$ und $s_n < 15$. Die Partialsummen nähern sich $15 = \frac{3}{1 - 0{,}8}$. Diese Zahl ist der Wert der unendlichen Reihe aus [11.13 Unendliche Reihen](/lernen/mathe3/grenzwerte-folgen/unendliche-reihen-partialsummen-geometrische-und-harmonische-reihe).
```

## Zinseszins, Barwert und unterjährige Verzinsung

```aufgabe
id: fr-v-zinsen-einmal
titel: Einmal verzinsen
niveau: 1
art: check
angabe: |
  Ein Guthaben von $2000$ Euro wird ein Jahr lang mit $2{,}5\,\%$ verzinst. Wie hoch ist das Guthaben danach?
  (Vorwissen aus [Kapitel 1, Prozentrechnung](/lernen/mathe3/zahlen/prozentrechnung))
teile:
  - typ: zahl
    einheit: Euro
    loesung: "2000*1.025"
    anzeige: '2050'
    fehler:
      - wert: "2000*0.025"
        meldung: |
          $50$ Euro sind nur die **Zinsen**. Das neue Guthaben ist das alte Guthaben plus die Zinsen.
      - wert: "2000*1.25"
        meldung: |
          $1{,}25$ entspricht $25\,\%$. Für $2{,}5\,\%$ ist der Faktor $1{,}025$.
hinweise:
  - 'Faktor für $+2{,}5\,\%$: $1 + 0{,}025$.'
loesung: |
  Zinsen: $2000 \cdot 0{,}025 = 50$ Euro. Neues Guthaben: $2000 + 50 = 2050$ Euro.
  ---
  Kürzer mit dem Faktor: $2000 \cdot 1{,}025 = 2050$ Euro.
```

**Worum geht es?** Wir berechnen, wie Geld auf einem Konto wächst, wenn Zinsen mitverzinst werden. Und wir fragen
umgekehrt: Was ist eine spätere Zahlung heute wert?

Ein paar Begriffe zuerst. Das **Kapital** ist der angelegte Geldbetrag. Der **Zinssatz** $p\,\%$ sagt, wie viel
Prozent pro Jahr dazukommen. Die Abkürzung „p. a.“ heißt „pro Jahr“ (lateinisch „per annum“). Wir schreiben den
Zinssatz als Dezimalzahl $i = \frac{p}{100}$. Bei $3\,\%$ ist also $i = 0{,}03$.

### Zinseszins

Konkret: $1000$ Euro werden mit $3\,\%$ p. a. angelegt. Die Zinsen bleiben auf dem Konto.

- Nach einem Jahr: $1000 \cdot 1{,}03 = 1030$ Euro.
- Nach zwei Jahren: $1030 \cdot 1{,}03 = 1060{,}90$ Euro. Jetzt werden auch die $30$ Euro Zinsen des ersten Jahres verzinst.
- Nach drei Jahren: $1060{,}90 \cdot 1{,}03 \approx 1092{,}73$ Euro.

Zinsen auf Zinsen heißen **Zinseszinsen**. Die Kontostände $1000, 1030, 1060{,}90, \dots$ bilden eine geometrische
Folge mit $q = 1{,}03$.

:::satz[Zinseszinsformel]
Bei jährlicher Verzinsung mit dem Zinssatz $i$ wächst ein Kapital $K_0$ in $n$ Jahren auf
$$K_n = K_0\,(1 + i)^n = K_0 \cdot q^n.$$
Dabei ist $K_0$ das Anfangskapital, $K_n$ das Kapital nach $n$ Jahren und $q = 1 + i$ der **Aufzinsungsfaktor**.
:::

**Nichtbeispiel:** Bei **einfacher Verzinsung** werden die Zinsen jedes Jahr ausbezahlt und nicht mitverzinst. Dann
kommt jedes Jahr derselbe Betrag $K_0 \cdot i$ dazu, und $K_n = K_0\,(1 + n\,i)$. Das ist eine arithmetische Folge,
keine geometrische.

:::beispiel[Zinseszins und Verdopplungszeit]
$5000$ Euro werden $10$ Jahre lang mit $3\,\%$ p. a. angelegt.

**Endkapital:** $K_{10} = 5000 \cdot 1{,}03^{10} \approx 6719{,}58$ Euro. Bei einfacher Verzinsung wären es nur
$5000 \cdot (1 + 10 \cdot 0{,}03) = 6500$ Euro.

**Verdopplung:** Gesucht ist $n$ mit $1{,}03^n = 2$. Logarithmieren liefert $n = \frac{\ln 2}{\ln 1{,}03} \approx 23{,}45$.
Weil die Zinsen nur einmal im Jahr gutgeschrieben werden, ist das Kapital nach $24$ Jahren erstmals doppelt so groß.

**Kontrolle mit einer Faustregel:** „Verdopplungszeit $\approx 72 : p$“ liefert $72 : 3 = 24$ ✓.
:::

:::achtung[Einfache Verzinsung statt Zinseszins]
Falsch: „$8000$ Euro, $2{,}75\,\%$, $12$ Jahre: $8000 \cdot (1 + 12 \cdot 0{,}0275) = 10\,640$ Euro.“

Richtig: Bleiben die Zinsen auf dem Konto, wird jedes Jahr mit $1{,}0275$ **multipliziert**:
$8000 \cdot 1{,}0275^{12} \approx 11\,078{,}27$ Euro. Die einfache Verzinsung vergisst die Zinsen auf die Zinsen.
:::

Aus der Zinseszinsformel lässt sich jede der vier Größen berechnen:

- **Endwert:** $K_n = K_0 \cdot q^n$.
- **Barwert:** $K_0 = \dfrac{K_n}{q^n}$. Das heißt **Abzinsen**.
- **Zinssatz:** $q = \sqrt[n]{\dfrac{K_n}{K_0}}$, dann $i = q - 1$.
- **Laufzeit:** $n = \dfrac{\ln(K_n / K_0)}{\ln q}$.

```aufgabe
id: fr-zinseszins
titel: Zinseszins
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  $8000$ Euro werden $12$ Jahre lang zu $2{,}75\,\%$ p. a. mit jährlicher Verzinsung angelegt. Die Zinsen bleiben auf
  dem Konto. Wie hoch ist das Endkapital (auf Cent)?
teile:
  - typ: zahl
    label: '$K_{12}$'
    einheit: Euro
    loesung: "8000*1.0275^12"
    anzeige: '11078{,}27'
    toleranz: 0.05
    fehler:
      - wert: "8000*(1 + 12*0.0275)"
        meldung: |
          Das ist einfache Verzinsung. Weil die Zinsen auf dem Konto bleiben, werden sie mitverzinst. Multipliziere $12$ Mal mit $1{,}0275$.
      - wert: "8000*1.275^12"
        meldung: |
          $1{,}275$ gehört zu $27{,}5\,\%$. Der Faktor für $2{,}75\,\%$ ist $1{,}0275$.
hinweise:
  - '$K_n = K_0 \cdot q^n$ mit $q = 1{,}0275$ und $n = 12$.'
loesung: |
  Ansatz: Zinseszins, also $K_n = K_0 \cdot q^n$ mit $q = 1{,}0275$ und $n = 12$.
  ---
  $K_{12} = 8000 \cdot 1{,}0275^{12} \approx 8000 \cdot 1{,}384784 \approx 11\,078{,}27$ Euro.
```

### Der Barwert: Was ist späteres Geld heute wert?

Würdest du lieber heute $1000$ Euro bekommen oder in fünf Jahren $1000$ Euro? Heute ist besser. Du könntest das Geld
anlegen, und in fünf Jahren hättest du mehr. Geld zu verschiedenen Zeitpunkten darf man deshalb **nicht einfach
addieren oder vergleichen**. Man rechnet zuerst alles auf denselben Zeitpunkt um.

Der **Barwert** einer späteren Zahlung ist der Betrag, den man heute anlegen müsste, um später genau diese Zahlung
zu haben. Man erhält ihn, indem man die Zinseszinsformel rückwärts liest: Man teilt durch $q^n$.

:::beispiel[Barwert einer späteren Zahlung]
In $6$ Jahren brauchst du $12\,000$ Euro. Dein Konto bringt $2{,}5\,\%$ p. a. Wie viel musst du heute einzahlen?

**Ansatz:** $K_6 = 12\,000$ ist gegeben, $K_0$ ist gesucht. Aus $K_0 \cdot 1{,}025^6 = 12\,000$ folgt
$K_0 = \frac{12\,000}{1{,}025^6}$.

**Rechnung:** $K_0 \approx \frac{12\,000}{1{,}159693} \approx 10\,347{,}56$ Euro.

**Kontrolle:** $10\,347{,}56 \cdot 1{,}025^6 \approx 12\,000$ ✓. Der Barwert ist kleiner als der spätere Betrag, weil
die Zinsen den Rest beisteuern.
:::

:::achtung[Aufgezinst statt abgezinst]
Falsch: „Der Barwert von $12\,000$ Euro in $6$ Jahren ist $12\,000 \cdot 1{,}025^6 \approx 13\,916$ Euro.“

Richtig: Der Barwert liegt **früher**, also wird abgezinst: geteilt durch $1{,}025^6$. Plausibilitätsprüfung: Wer
heute mehr als $12\,000$ Euro anlegt, hat später erst recht mehr als $12\,000$ Euro. Der Barwert muss kleiner sein.
:::

```aufgabe
id: fr-barwert
titel: Barwert eines Sparziels
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  In $8$ Jahren sollen $15\,000$ Euro auf einem Konto sein. Die Bank zahlt $3\,\%$ p. a. Wie viel muss man heute
  einmalig einzahlen (auf Cent)?
teile:
  - typ: zahl
    einheit: Euro
    loesung: "15000/1.03^8"
    anzeige: '11841{,}14'
    toleranz: 0.05
    fehler:
      - wert: "15000*1.03^8"
        meldung: |
          Du hast aufgezinst. Der heutige Betrag liegt **vor** dem Sparziel, also wird durch $1{,}03^8$ geteilt.
hinweise:
  - 'Löse $K_0 \cdot 1{,}03^8 = 15\,000$ nach $K_0$.'
loesung: |
  Ansatz: Gesucht ist der Barwert. Aus $K_0 \cdot 1{,}03^8 = 15\,000$ folgt $K_0 = \frac{15\,000}{1{,}03^8}$.
  ---
  $K_0 \approx \frac{15\,000}{1{,}266770} \approx 11\,841{,}14$ Euro.
  ---
  Kontrolle: Der Barwert ist kleiner als $15\,000$ Euro, und $11\,841{,}14 \cdot 1{,}03^8 \approx 15\,000$ ✓.
```

### Unterjährige Verzinsung und effektiver Jahreszins

Oft schreibt die Bank Zinsen monatlich oder vierteljährlich gut. „Unterjährig“ heißt: mehrmals innerhalb eines
Jahres. Die Bank nennt dann einen **nominellen** Jahreszinssatz $i$ und verzinst pro Monat mit $\frac{i}{12}$. Die
Zinsen eines Monats werden in den folgenden Monaten mitverzinst. Deshalb wächst das Kapital in einem Jahr um etwas
mehr als $i$.

:::satz[Effektiver Jahreszins]
Wird $m$-mal pro Jahr mit $\frac{i}{m}$ verzinst, ist der **effektive Jahreszinssatz**
$$i_{\text{eff}} = \left(1 + \frac{i}{m}\right)^m - 1.$$
Er sagt, um wie viel Prozent das Kapital in einem ganzen Jahr tatsächlich wächst. Umgekehrt heißt der Monatszinssatz
$i_{12} = \sqrt[12]{1 + i} - 1$ **konform** zum Jahreszinssatz $i$. Mit ihm wächst das Kapital in zwölf Monaten genau
um $i$.
:::

:::beispiel[Monatlich verzinst]
Nominell $6\,\%$ p. a., monatlich verzinst. Der Monatszinssatz ist $\frac{0{,}06}{12} = 0{,}005$.

**Effektiver Jahreszins:** $i_{\text{eff}} = 1{,}005^{12} - 1 \approx 0{,}06168 = 6{,}168\,\%$. Das ist etwas mehr als $6\,\%$.

**Endwert über mehrere Jahre:** $10\,000$ Euro, nominell $3\,\%$, monatlich verzinst, $5$ Jahre. Die Periode ist
der Monat. Also ist $q = 1 + \frac{0{,}03}{12} = 1{,}0025$ und $n = 5 \cdot 12 = 60$:
$K_{60} = 10\,000 \cdot 1{,}0025^{60} \approx 11\,616{,}17$ Euro. Jährlich verzinst wären es $11\,592{,}74$ Euro.
:::

:::achtung[Jahreszins und Monate gemischt]
Falsch: „$10\,000$ Euro, $3\,\%$ p. a., monatliche Verzinsung, $5$ Jahre: $10\,000 \cdot 1{,}03^{60}$.“

Richtig: Wer $60$ Perioden rechnet, braucht den Zinssatz **pro Monat**, also $1{,}0025$. Mit $1{,}03^{60} \approx 5{,}9$
würde das Geld fast versechsfacht. Das ist bei $3\,\%$ in fünf Jahren unmöglich. Periode und Zinssatz müssen immer
zusammenpassen.
:::

:::merke[Rezept: Zinsaufgaben]
1. **Periode festlegen** (Jahr, Quartal, Monat). Zinssatz pro Periode $i$ und $q = 1 + i$ bestimmen.
2. **Anzahl der Perioden** $n$ bestimmen, zum Beispiel $n = 12 \cdot$ Jahre bei Monaten.
3. **Aufzinsen** (in die Zukunft): $\cdot\, q^n$. **Abzinsen** (in die Vergangenheit): $:\, q^n$.
4. Zahlungen zu verschiedenen Zeitpunkten erst auf **denselben Zeitpunkt** umrechnen, dann vergleichen oder addieren.
5. Antwortsatz mit Cent-Betrag und Plausibilitätsprüfung.
:::

```reflexion
frage: Warum ist der effektive Jahreszinssatz bei monatlicher Gutschrift größer als der nominelle Zinssatz? Wann wären beide gleich?
antwort: |
  Bei monatlicher Gutschrift liegen die Zinsen der ersten Monate schon auf dem Konto und bringen in den restlichen
  Monaten selbst Zinsen. Diese Zinseszinsen innerhalb des Jahres kommen zum nominellen Zinssatz dazu. Beide Sätze
  sind nur gleich, wenn einmal im Jahr verzinst wird. Dann gibt es innerhalb des Jahres keine Zinsen auf Zinsen.
```

```aufgabe
id: fr-unterjaehrig
titel: Vierteljährlich verzinst
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  $6000$ Euro werden $5$ Jahre lang angelegt. Der nominelle Zinssatz ist $2{,}4\,\%$ p. a., die Zinsen werden
  vierteljährlich gutgeschrieben. Wie hoch ist das Endkapital (auf Cent)?
teile:
  - typ: zahl
    einheit: Euro
    loesung: "6000*(1 + 0.024/4)^20"
    anzeige: '6762{,}56'
    toleranz: 0.05
    fehler:
      - wert: "6000*1.024^5"
        meldung: |
          Das ist jährliche Verzinsung. Vierteljährlich heißt: $4$ Perioden pro Jahr mit je $\frac{2{,}4\,\%}{4} = 0{,}6\,\%$.
      - wert: "6000*1.006^5"
        meldung: |
          Der Zinssatz pro Quartal stimmt, aber in $5$ Jahren gibt es $5 \cdot 4 = 20$ Quartale.
hinweise:
  - 'Periode ist das Quartal. Zinssatz pro Quartal $\frac{0{,}024}{4}$.'
  - 'Anzahl der Perioden: $5 \cdot 4 = 20$.'
loesung: |
  Ansatz: Die Periode ist das Quartal. Zinssatz pro Quartal $\frac{0{,}024}{4} = 0{,}006$, also $q = 1{,}006$. In $5$ Jahren gibt es $n = 20$ Quartale.
  ---
  $K_{20} = 6000 \cdot 1{,}006^{20} \approx 6000 \cdot 1{,}127093 \approx 6762{,}56$ Euro.
  ---
  Kontrolle: Jährlich verzinst wären es $6755{,}40$ Euro. Vierteljährlich muss etwas mehr herauskommen ✓.
```

```aufgabe
id: fr-verdopplung
titel: Verdopplungszeit
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Ein Kapital wird zu $4{,}5\,\%$ p. a. verzinst. Berechne die theoretische Verdopplungszeit in Jahren auf zwei
  Nachkommastellen. Nach wie vielen vollen Jahren ist das Kapital erstmals mindestens doppelt so groß?
teile:
  - typ: zahl
    label: 'Verdopplungszeit'
    einheit: Jahre
    loesung: "ln(2)/ln(1.045)"
    anzeige: '15{,}75'
    toleranz: 0.01
    fehler:
      - wert: "100/4.5"
        meldung: |
          Das wäre die Zeit bei einfacher Verzinsung. Mit Zinseszins wächst das Kapital schneller.
  - typ: zahl
    label: 'volle Jahre'
    loesung: "16"
    fehler:
      - wert: "15"
        meldung: |
          Nach $15$ Jahren ist das Kapital erst das $1{,}045^{15} \approx 1{,}935$-Fache. Das reicht noch nicht.
hinweise:
  - '$K_0 \cdot 1{,}045^n = 2K_0$. Das Startkapital kürzt sich weg.'
  - 'Logarithmieren. Für die vollen Jahre aufrunden und kontrollieren.'
loesung: |
  Ansatz: Verdoppeln heißt $K_n = 2K_0$. Das Startkapital kürzt sich: $1{,}045^n = 2$.
  ---
  Logarithmieren: $n \ln 1{,}045 = \ln 2$, also $n = \frac{\ln 2}{\ln 1{,}045} \approx 15{,}75$ Jahre.
  ---
  Zinsen kommen einmal im Jahr. Nach $15$ Jahren ist der Faktor $1{,}045^{15} \approx 1{,}935 < 2$, nach $16$ Jahren $1{,}045^{16} \approx 2{,}022$. Also nach $16$ Jahren. Faustregel zur Kontrolle: $72 : 4{,}5 = 16$ ✓.
```

```aufgabe
id: fr-zinssatz
titel: Zinssatz berechnen
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Aus $10\,000$ Euro sind in $6$ Jahren bei jährlicher Verzinsung $12\,500$ Euro geworden. Welcher Zinssatz (in
  Prozent, auf zwei Nachkommastellen) wurde gewährt?
teile:
  - typ: zahl
    label: '$p$'
    einheit: "%"
    loesung: "100*(nthRoot(1.25, 6) - 1)"
    anzeige: '3{,}79'
    toleranz: 0.01
    fehler:
      - wert: "25/6"
        meldung: |
          Du hast die $25\,\%$ Zuwachs gleichmäßig auf $6$ Jahre verteilt. Das wäre einfache Verzinsung. Mit Zinseszins genügt ein kleinerer Zinssatz.
hinweise:
  - '$10\,000 \cdot q^6 = 12\,500$ nach $q$ auflösen.'
  - 'Die sechste Wurzel aus $1{,}25$ liefert $q$. Dann $p = 100\,(q - 1)$.'
loesung: |
  Ansatz: Zinseszinsformel mit unbekanntem $q$: $10\,000 \cdot q^6 = 12\,500$, also $q^6 = 1{,}25$.
  ---
  Sechste Wurzel ziehen: $q = \sqrt[6]{1{,}25} \approx 1{,}03789$. Also $i \approx 0{,}03789$ und $p \approx 3{,}79\,\%$.
  ---
  Probe: $10\,000 \cdot 1{,}0379^6 \approx 12\,500$ ✓.
```

```aufgabe
id: fr-effektivzins
titel: Effektiver Jahreszins
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Eine Bank wirbt mit $4{,}8\,\%$ p. a., verzinst aber monatlich mit $\frac{4{,}8\,\%}{12}$.
  Wie hoch ist der effektive Jahreszinssatz in Prozent, auf drei Nachkommastellen?
teile:
  - typ: zahl
    label: '$i_{\text{eff}}$'
    einheit: "%"
    loesung: "100*((1 + 0.048/12)^12 - 1)"
    anzeige: '4{,}907'
    toleranz: 0.001
    fehler:
      - wert: "4.8"
        meldung: |
          $4{,}8\,\%$ ist der nominelle Satz. Weil die Monatszinsen mitverzinst werden, ist der tatsächliche Zuwachs größer.
hinweise:
  - 'Monatszinssatz $\frac{0{,}048}{12} = 0{,}004$.'
  - 'Ein Jahr entspricht $12$ Verzinsungen: Faktor $1{,}004^{12}$.'
loesung: |
  Ansatz: Wir berechnen den Wachstumsfaktor eines ganzen Jahres. Monatszinssatz $\frac{0{,}048}{12} = 0{,}004$.
  ---
  Zwölf Monate: $1{,}004^{12} \approx 1{,}049070$.
  ---
  $i_{\text{eff}} \approx 0{,}049070 = 4{,}907\,\%$. Das ist etwas mehr als die beworbenen $4{,}8\,\%$, wie erwartet.
```

```aufgabe
id: fr-zahlungen-vergleichen
titel: Zwei Angebote vergleichen
niveau: 3
lernziel: 4
kompetenz: modellieren
angabe: |
  Du verkaufst ein Grundstück und hast zwei Angebote:

  - Angebot A: heute $10\,000$ Euro.
  - Angebot B: in $2$ Jahren $5000$ Euro und in $4$ Jahren weitere $6000$ Euro.

  Rechne mit $4\,\%$ p. a.

  a) Wie groß ist der Barwert von Angebot B (auf Cent)?

  b) Welches Angebot ist besser?
teile:
  - typ: zahl
    label: 'a) Barwert B'
    einheit: Euro
    loesung: "5000/1.04^2 + 6000/1.04^4"
    anzeige: '9751{,}61'
    toleranz: 0.05
    fehler:
      - wert: "11000"
        meldung: |
          Du hast die Beträge einfach addiert. Geld zu verschiedenen Zeitpunkten muss man zuerst auf heute abzinsen.
      - wert: "(5000 + 6000)/1.04^4"
        meldung: |
          Die $5000$ Euro fließen schon nach $2$ Jahren. Sie werden nur über $2$ Jahre abgezinst, nicht über $4$.
  - typ: auswahl
    label: 'b)'
    optionen:
      - 'Angebot A'
      - 'Angebot B'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          B bringt zwar nominell $11\,000$ Euro, ist heute aber nur gut $9750$ Euro wert. Vergleiche die Barwerte.
hinweise:
  - 'Jede Zahlung einzeln auf heute abzinsen: durch $1{,}04^{\text{Jahre}}$.'
  - 'Vergleiche dann die Summe der Barwerte mit $10\,000$ Euro.'
loesung: |
  Ansatz: Zahlungen zu verschiedenen Zeitpunkten vergleicht man nur auf demselben Zeitpunkt. Wir rechnen alles auf heute um.
  ---
  Barwert der $5000$ Euro: $\frac{5000}{1{,}04^2} \approx 4622{,}78$ Euro. Barwert der $6000$ Euro: $\frac{6000}{1{,}04^4} \approx 5128{,}83$ Euro.
  ---
  a) Barwert von B: $4622{,}78 + 5128{,}83 \approx 9751{,}61$ Euro.
  ---
  b) $9751{,}61 < 10\,000$. Angebot A ist besser. Probe der Idee: Legt man die $10\,000$ Euro an, hätte man nach $4$ Jahren mehr als bei Angebot B.
gefuehrt:
  - text: Zinse die $5000$ Euro aus Jahr $2$ auf heute ab.
    teil: { typ: zahl, loesung: "5000/1.04^2", toleranz: 0.05 }
    erklaerung: '$\frac{5000}{1{,}04^2} \approx 4622{,}78$ Euro.'
  - text: Zinse die $6000$ Euro aus Jahr $4$ auf heute ab.
    teil:
      typ: zahl
      loesung: "6000/1.04^4"
      toleranz: 0.05
      fehler:
        - wert: "6000/1.04^2"
          meldung: 'Diese Zahlung kommt erst nach $4$ Jahren. Teile durch $1{,}04^4$.'
    erklaerung: '$\frac{6000}{1{,}04^4} \approx 5128{,}83$ Euro.'
  - text: Wie groß ist der Barwert von Angebot B insgesamt?
    teil: { typ: zahl, loesung: "5000/1.04^2 + 6000/1.04^4", toleranz: 0.05 }
    erklaerung: 'Erst jetzt, auf demselben Zeitpunkt, darf man addieren: $9751{,}61$ Euro.'
  - text: Überlege, welches Angebot du wählst.
    erklaerung: 'A ist heute $10\,000$ Euro wert, B nur $9751{,}61$ Euro. Also A.'
```

## Renten, Kredite und Tilgungspläne

```aufgabe
id: fr-v-drei-zahlungen
titel: Drei verzinste Beträge addieren
niveau: 1
art: check
angabe: |
  Berechne $100 + 100 \cdot 1{,}02 + 100 \cdot 1{,}02^2$ mit der geometrischen Summenformel oder direkt.
  (Vorwissen aus [8.6 Endliche geometrische Reihen](/lernen/mathe3/folgen-reihen/endliche-geometrische-reihen))
teile:
  - typ: zahl
    loesung: "100*(1.02^3 - 1)/(1.02 - 1)"
    anzeige: '306{,}04'
    toleranz: 0.005
    fehler:
      - wert: "300"
        meldung: |
          Die Faktoren $1{,}02$ und $1{,}02^2$ fehlen. Zwei der drei Beträge sind größer als $100$.
      - wert: "100*1.02^3"
        meldung: |
          Das ist nur ein einzelnes Glied. Gefragt ist die Summe von drei Gliedern.
hinweise:
  - 'Erstes Glied $100$, Quotient $1{,}02$, Anzahl $3$.'
loesung: |
  Direkt: $100 + 102 + 104{,}04 = 306{,}04$.
  ---
  Mit der Formel: $100 \cdot \frac{1{,}02^3 - 1}{0{,}02} = 306{,}04$ ✓.
```

Diese Lektion ist für viele die schwierigste Anwendung im Kapitel. Lies sie langsam und rechne jedes Zahlenbeispiel
mit.

**Worum geht es in einem Satz?** Fließen viele gleich hohe Zahlungen zu verschiedenen Zeitpunkten, rechnen wir jede
auf **denselben Zeitpunkt** um und addieren sie. Diese Summe ist eine geometrische Reihe.

**Ein Bild dazu.** Stell dir vor, jede Einzahlung bekommt ihr eigenes kleines Sparbuch. Das Sparbuch der ersten
Einzahlung liegt am längsten und wächst am meisten. Das Sparbuch der letzten Einzahlung ist gerade erst eröffnet. Am
Ende legst du alle Sparbücher zusammen.

Eine **Rente** ist in der Finanzmathematik eine Folge gleich hoher Zahlungen $R$ in gleichen Abständen. Das kann ein
Sparplan sein oder eine monatliche Auszahlung. Zahlt man am **Ende** jeder Periode, heißt die Rente
**nachschüssig**. Zahlt man am **Anfang**, heißt sie **vorschüssig**.

### In kleinen Schritten: der Endwert eines Sparplans

Konkret: Du zahlst drei Jahre lang am Ende jedes Jahres $1000$ Euro ein. Das Konto bringt $5\,\%$ p. a. Was ist am
Ende von Jahr $3$ auf dem Konto?

- Die Einzahlung am Ende von Jahr $1$ liegt noch zwei Jahre: $1000 \cdot 1{,}05^2 = 1102{,}50$ Euro.
- Die Einzahlung am Ende von Jahr $2$ liegt noch ein Jahr: $1000 \cdot 1{,}05 = 1050$ Euro.
- Die Einzahlung am Ende von Jahr $3$ ist gerade erst gemacht: $1000$ Euro.

Zusammen sind es $3152{,}50$ Euro. Von hinten gelesen steht da $1000 + 1000 \cdot 1{,}05 + 1000 \cdot 1{,}05^2$, also eine
geometrische Reihe mit erstem Glied $1000$ und Quotient $1{,}05$. Der **Zeitstrahl** zeigt dasselbe für $n$ Zahlungen:

```plot
x: [-0.5, 6.5]
y: [-1, 5]
hoehe: 260
achsen: { x: "Jahr", y: "" }
strecken:
  - { von: [0, 0], nach: [6, 0] }
  - { von: [1, 0], nach: [1, 4], gestrichelt: true, farbe: 0 }
  - { von: [2, 0], nach: [2, 3.2], gestrichelt: true, farbe: 0 }
  - { von: [3, 0], nach: [3, 2.4], gestrichelt: true, farbe: 0 }
  - { von: [5, 0], nach: [5, 0.8], gestrichelt: true, farbe: 0 }
punkte:
  - { x: 1, y: 0, label: "R", farbe: 1 }
  - { x: 2, y: 0, label: "R", farbe: 1 }
  - { x: 3, y: 0, label: "R", farbe: 1 }
  - { x: 5, y: 0, label: "R (n-te Zahlung)", farbe: 1 }
  - { x: 1, y: 4, label: "R·qⁿ⁻¹", farbe: 0 }
  - { x: 2, y: 3.2, label: "R·qⁿ⁻²", farbe: 0 }
  - { x: 3, y: 2.4, label: "R·qⁿ⁻³", farbe: 0 }
  - { x: 5, y: 0.8, label: "R·q⁰", farbe: 0 }
beschriftung: Zeitstrahl einer nachschüssigen Rente. Jede Zahlung R am Ende eines Jahres wird bis zum Ende von Jahr n aufgezinst. Die erste Zahlung wächst n − 1 Jahre lang, die letzte gar nicht. Die aufgezinsten Werte bilden eine geometrische Folge.
```

Allgemein: Die erste Zahlung liegt $n - 1$ Jahre, die letzte gar nicht. Der Endwert ist eine geometrische Reihe mit
erstem Glied $R$, Quotient $q = 1 + i$ und $n$ Gliedern:
$$E = R + R q + R q^2 + \dots + R q^{n-1} = R \cdot \frac{q^n - 1}{q - 1}.$$

:::satz[Rentenformeln]
Für $n$ Zahlungen der Höhe $R$ mit Zinssatz $i$ pro Periode und $q = 1 + i$ gilt:
$$\begin{aligned}
\text{Endwert, nachschüssig:}\quad & E = R \cdot \frac{q^n - 1}{q - 1}\\
\text{Endwert, vorschüssig:}\quad & E' = R\,q \cdot \frac{q^n - 1}{q - 1}\\
\text{Barwert, nachschüssig:}\quad & B = \frac{E}{q^n} = R \cdot \frac{1 - q^{-n}}{q - 1}
\end{aligned}$$
Bei der vorschüssigen Rente liegt jede Zahlung eine Periode länger auf dem Konto. Daher kommt der Extrafaktor $q$.
:::

**In Worten zurückübersetzt:** Der Endwert ist alles, was am Ende auf dem Konto liegt. Der **Barwert** ist der eine
Betrag, den man heute anlegen müsste, um dieselben Zahlungen zu ersetzen. Man erhält ihn, indem man den Endwert über
$n$ Perioden abzinst.

:::beispiel[Sparplan]
Jemand zahlt $15$ Jahre lang am Ende jedes Jahres $1200$ Euro auf ein Konto mit $2{,}5\,\%$ p. a. ein.

**Ansatz:** nachschüssige Rente mit $R = 1200$, $q = 1{,}025$ und $n = 15$.

**Rechnung:** $E = 1200 \cdot \frac{1{,}025^{15} - 1}{0{,}025} \approx 21\,518{,}31$ Euro.

**Deutung:** Eingezahlt wurden $15 \cdot 1200 = 18\,000$ Euro. Rund $3518$ Euro sind Zinsen. Bei Einzahlung am
Jahresanfang wären es $1{,}025 \cdot 21\,518{,}31 \approx 22\,056{,}27$ Euro.
:::

:::achtung[Endwert als Anzahl mal Rate mal Endfaktor]
Falsch: „$3$ Zahlungen zu $1000$ Euro bei $5\,\%$: $E = 3 \cdot 1000 \cdot 1{,}05^3 \approx 3472{,}88$ Euro.“

Richtig: Nicht jede Zahlung liegt drei Jahre auf dem Konto. Die letzte liegt gar nicht, die erste nur zwei Jahre.
Jede Zahlung wird einzeln aufgezinst. Das ergibt $3152{,}50$ Euro. Dieses **typische Missverständnis** behandelt alle
Zahlungen so, als wären sie am Anfang geflossen.
:::

:::achtung[Monatsraten mit dem Jahreszins gerechnet]
Falsch: „$150$ Euro am Ende jedes Monats, $3\,\%$ p. a., $10$ Jahre: $E = 150 \cdot \frac{1{,}03^{120} - 1}{0{,}03}$.“
Das ergibt rund $168\,555$ Euro.

Richtig: Bei $120$ Perioden braucht man den **Monatszinssatz** $\frac{0{,}03}{12} = 0{,}0025$. Damit ist
$E = 150 \cdot \frac{1{,}0025^{120} - 1}{0{,}0025} \approx 20\,961{,}21$ Euro. Eingezahlt wurden $18\,000$ Euro. Ein
Ergebnis von $168\,555$ Euro wäre absurd.
:::

```aufgabe
id: fr-rente-endwert
titel: Endwert einer Rente
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Jemand zahlt $5$ Jahre lang am Ende jedes Jahres $2000$ Euro auf ein Konto mit $3\,\%$ p. a. ein. Wie hoch ist das
  Guthaben direkt nach der letzten Einzahlung (auf Cent)?
teile:
  - typ: zahl
    einheit: Euro
    loesung: "2000*(1.03^5 - 1)/0.03"
    anzeige: '10618{,}27'
    toleranz: 0.05
    fehler:
      - wert: "10000"
        meldung: |
          Das ist nur die Summe der Einzahlungen. Die ersten vier Zahlungen haben aber Zinsen gebracht.
      - wert: "2000*1.03^5"
        meldung: |
          Das ist eine einzelne Zahlung, fünf Jahre verzinst. Gefragt ist der Wert aller fünf Zahlungen zusammen.
hinweise:
  - 'Nachschüssige Rente: $E = R \cdot \frac{q^n - 1}{q - 1}$ mit $R = 2000$, $q = 1{,}03$, $n = 5$.'
loesung: |
  Ansatz: Die fünf Zahlungen werden unterschiedlich lange verzinst. Ihr Endwert ist eine geometrische Reihe, also die nachschüssige Rentenformel.
  ---
  $E = 2000 \cdot \frac{1{,}03^5 - 1}{0{,}03} \approx 2000 \cdot 5{,}309136 \approx 10\,618{,}27$ Euro.
  ---
  Plausibel: etwas mehr als die eingezahlten $10\,000$ Euro ✓.
```

```aufgabe
id: fr-rente-vorschuessig
titel: Einzahlung am Jahresanfang
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Jemand zahlt $8$ Jahre lang am **Anfang** jedes Jahres $800$ Euro auf ein Konto mit $2\,\%$ p. a. ein. Wie hoch ist
  das Guthaben am Ende des 8. Jahres (auf Cent)?
teile:
  - typ: zahl
    einheit: Euro
    loesung: "800*1.02*(1.02^8 - 1)/0.02"
    anzeige: '7003{,}70'
    toleranz: 0.05
    fehler:
      - wert: "800*(1.02^8 - 1)/0.02"
        meldung: |
          Das ist die nachschüssige Rente. Bei Einzahlung am Jahresanfang liegt jede Zahlung ein Jahr länger auf dem Konto. Es fehlt der Faktor $q$.
hinweise:
  - 'Vorschüssig: $E'' = R\,q \cdot \frac{q^n - 1}{q - 1}$.'
loesung: |
  Ansatz: Die Zahlungen fließen am Jahresanfang. Jede liegt also ein Jahr länger als bei der nachschüssigen Rente. Wir nehmen die vorschüssige Formel.
  ---
  $E' = 800 \cdot 1{,}02 \cdot \frac{1{,}02^8 - 1}{0{,}02} \approx 816 \cdot 8{,}582969 \approx 7003{,}70$ Euro.
  ---
  Kontrolle: Nachschüssig wären es $6866{,}38$ Euro. Vorschüssig muss mehr herauskommen ✓.
```

```aufgabe
id: fr-sparplan-monatlich
titel: Monatlicher Sparplan
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Jemand zahlt $10$ Jahre lang am Ende jedes Monats $150$ Euro auf ein Sparkonto ein. Die Bank verzinst monatlich mit
  $0{,}25\,\%$.

  a) Wie hoch ist das Guthaben nach der letzten Einzahlung (auf Cent)?

  b) Wie viel davon sind Zinsen?
teile:
  - typ: zahl
    label: 'a) Endwert'
    einheit: Euro
    loesung: "150*(1.0025^120 - 1)/0.0025"
    anzeige: '20961{,}21'
    toleranz: 0.05
    fehler:
      - wert: "150*(1.03^10 - 1)/0.03"
        meldung: |
          Du hast mit Jahren gerechnet, die Raten fließen aber monatlich. Periode ist der Monat: $n = 120$ und $q = 1{,}0025$.
      - wert: "150*1.0025^120"
        meldung: |
          Das ist nur eine einzige Einzahlung, $120$ Monate verzinst. Gefragt ist der Wert aller $120$ Einzahlungen.
  - typ: zahl
    label: 'b) Zinsen'
    einheit: Euro
    loesung: "150*(1.0025^120 - 1)/0.0025 - 120*150"
    anzeige: '2961{,}21'
    toleranz: 0.05
    fehler:
      - wert: "150*(1.0025^120 - 1)/0.0025 - 150"
        meldung: |
          Eingezahlt wurde nicht einmal $150$ Euro, sondern $120$ Mal.
hinweise:
  - 'Periode ist der Monat, also $n = 120$ und $q = 1{,}0025$.'
  - 'Nachschüssige Rente $E = R\frac{q^n - 1}{q - 1}$. Zinsen sind Endwert minus Einzahlungen.'
loesung: |
  Ansatz: Raten und Zinsen laufen monatlich. Also ist die Periode der Monat: $R = 150$, $q = 1{,}0025$, $n = 120$.
  ---
  a) $E = 150 \cdot \frac{1{,}0025^{120} - 1}{0{,}0025} \approx 150 \cdot \frac{1{,}349354 - 1}{0{,}0025} \approx 20\,961{,}21$ Euro.
  ---
  b) Eingezahlt: $120 \cdot 150 = 18\,000$ Euro. Zinsen: $20\,961{,}21 - 18\,000 = 2961{,}21$ Euro.
```

```aufgabe
id: fr-rente-barwert
titel: Barwert einer Rente
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Wie viel Geld muss heute auf einem Konto mit $2\,\%$ p. a. liegen, damit man $20$ Jahre lang jeweils am Jahresende
  $1000$ Euro abheben kann und das Konto danach leer ist? Gib den Betrag auf Cent an.
teile:
  - typ: zahl
    label: 'Barwert'
    einheit: Euro
    loesung: "1000*(1 - 1.02^(-20))/0.02"
    anzeige: '16351{,}43'
    toleranz: 0.05
    fehler:
      - wert: "20000"
        meldung: |
          Ohne Zinsen bräuchte man $20\,000$ Euro. Das Restguthaben bringt aber laufend Zinsen, also genügt weniger.
      - wert: "1000*(1.02^20 - 1)/0.02"
        meldung: |
          Das ist der **Endwert**. Gefragt ist der Betrag **heute**. Zinse den Endwert über $20$ Jahre ab.
hinweise:
  - 'Gesucht ist der Barwert einer nachschüssigen Rente.'
  - '$B = R \cdot \frac{1 - q^{-n}}{q - 1}$.'
loesung: |
  Ansatz: Jede Abhebung von $1000$ Euro nach $k$ Jahren hat heute den Wert $1000 \cdot 1{,}02^{-k}$. Die Summe für $k = 1$ bis $20$ ist der Barwert der Rente.
  ---
  $B = 1000 \cdot \frac{1 - 1{,}02^{-20}}{0{,}02} \approx 1000 \cdot \frac{1 - 0{,}672971}{0{,}02} \approx 16\,351{,}43$ Euro.
  ---
  Plausibel: Ohne Zinsen bräuchte man $20\,000$ Euro. Die Zinsen finanzieren den Rest ✓.
```

### Kredite: die Rente rückwärts

Ein Kredit über $K_0$ wird in $n$ gleich hohen Raten $A$ am Ende jeder Periode zurückgezahlt. Die Rate heißt
**Annuität**. Die Bank verlangt: Der **Barwert aller Raten ist gleich der Kreditsumme**. Gleichwertig damit ist:
Am Ende ist der Endwert der Raten gleich der aufgezinsten Kreditsumme. Aus
$$K_0\,q^n = A \cdot \frac{q^n - 1}{q - 1}$$
folgt die Annuitätenformel.

:::satz[Annuität und Restschuld]
Ein Kredit $K_0$ mit Zinssatz $i$ pro Periode und $q = 1 + i$ wird durch $n$ nachschüssige Raten
$$A = K_0 \cdot \frac{q^n\,(q - 1)}{q^n - 1}$$
vollständig getilgt. Die **Restschuld** nach $k$ Raten ist die aufgezinste Schuld minus Endwert der bisherigen Raten:
$$K_k = K_0\,q^k - A \cdot \frac{q^k - 1}{q - 1}.$$
:::

Jede Rate besteht aus zwei Teilen. Der **Zinsanteil** sind die Zinsen auf die aktuelle Restschuld. Der
**Tilgungsanteil** ist der Rest der Rate. Er verringert die Schuld. Weil die Schuld sinkt, sinken die Zinsen, und
der Tilgungsanteil steigt. Das zeigt ein **Tilgungsplan**.

:::beispiel[Tilgungsplan eines Annuitätenkredits]
Kredit $20\,000$ Euro, $4\,\%$ p. a., $5$ Jahresraten.

**Annuität:** $A = 20\,000 \cdot \frac{1{,}04^5 \cdot 0{,}04}{1{,}04^5 - 1} \approx 4492{,}54$ Euro.

**Tilgungsplan.** In jedem Jahr berechnen wir die Zinsen auf die Restschuld. Die Tilgung ist Rate minus Zinsen.

- Jahr 1: Zinsen $800{,}00$, Tilgung $3692{,}54$, Restschuld $16\,307{,}46$ Euro.
- Jahr 2: Zinsen $652{,}30$, Tilgung $3840{,}24$, Restschuld $12\,467{,}22$ Euro.
- Jahr 3: Zinsen $498{,}69$, Tilgung $3993{,}85$, Restschuld $8473{,}37$ Euro.
- Jahr 4: Zinsen $338{,}93$, Tilgung $4153{,}61$, Restschuld $4319{,}76$ Euro.
- Jahr 5: Zinsen $172{,}79$, Tilgung $4319{,}76$, Restschuld $0$. Die letzte Rate ist wegen der Cent-Rundung $1$ Cent höher.

**Deutung:** Insgesamt zahlt man $4 \cdot 4492{,}54 + 4492{,}55 = 22\,462{,}71$ Euro, davon $2462{,}71$ Euro Zinsen. Die
Tilgungsanteile wachsen jedes Jahr um den Faktor $1{,}04$.
:::

Es gibt noch eine zweite Art, einen Kredit zurückzuzahlen: die **Ratentilgung**. Dabei ist nicht die Rate gleich,
sondern die **Tilgung**. Die Zinsen sinken mit der Schuld, also sinkt auch die Rate.

:::beispiel[Tilgungsplan bei Ratentilgung]
Kredit $12\,000$ Euro, $5\,\%$ p. a., $4$ Jahre, jedes Jahr $3000$ Euro Tilgung.

- Jahr 1: Restschuld am Anfang $12\,000$, Zinsen $600$, Rate $3600$ Euro.
- Jahr 2: Restschuld am Anfang $9000$, Zinsen $450$, Rate $3450$ Euro.
- Jahr 3: Restschuld am Anfang $6000$, Zinsen $300$, Rate $3300$ Euro.
- Jahr 4: Restschuld am Anfang $3000$, Zinsen $150$, Rate $3150$ Euro.

Die Zinsen bilden eine arithmetische Folge mit $d = -150$. Zusammen sind es $1500$ Euro Zinsen.
:::

:::achtung[Rate als Kreditsumme durch Laufzeit plus Zinsen]
Falsch: „$20\,000$ Euro in $5$ Jahren bei $4\,\%$: Rate $= \frac{20\,000}{5} \cdot 1{,}04 = 4160$ Euro.“

Richtig: So würden nur Zinsen auf einen Teil der Schuld bezahlt. Im ersten Jahr fallen aber $800$ Euro Zinsen auf
die **ganze** Schuld an. Die korrekte Annuität ist $4492{,}54$ Euro. Kontrolle: Mit $5 \cdot 4160 = 20\,800$ Euro
zahlte man insgesamt nur $800$ Euro Zinsen. So viel fällt aber schon im ersten Jahr an.
:::

:::merke[Rezept: Renten- und Kreditaufgaben]
1. **Zeitstrahl zeichnen:** Wann fließt welches Geld? Am Anfang oder am Ende der Periode?
2. **Periode festlegen** und den Zinssatz pro Periode bestimmen, $q = 1 + i$.
3. **Bezugszeitpunkt wählen:** Endwert (alles auf das Ende aufzinsen) oder Barwert (alles auf heute abzinsen).
4. Gleich hohe Zahlungen in gleichen Abständen sind eine **geometrische Reihe**: Formel anwenden.
5. Bei Krediten: Barwert der Raten gleich Kreditsumme. Restschuld gleich aufgezinste Schuld minus Endwert der bisherigen Raten.
6. Antwortsatz mit Cent-Betrag und Plausibilitätsprüfung: Zinsen positiv? Barwert kleiner als die Summe der Zahlungen?
:::

```aufgabe
id: fr-ratentilgung
titel: Tilgungsplan bei Ratentilgung
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Ein Kredit über $10\,000$ Euro wird in $5$ Jahren mit gleichen Tilgungen von $2000$ Euro pro Jahr zurückgezahlt.
  Der Zinssatz ist $4\,\%$ p. a. Die Zinsen werden jeweils am Jahresende auf die Restschuld vom Jahresanfang
  berechnet. Fülle den Tilgungsplan aus (in ganzen Euro). Die erste Zeile ist vorgegeben.
teile:
  - typ: trace
    spalten: ['Zinsen', 'Tilgung', 'Rate', 'Restschuld am Ende']
    zeilen: ['Jahr 1', 'Jahr 2', 'Jahr 3', 'Jahr 4', 'Jahr 5']
    vorgabe: 1
    loesung:
      - [400, 2000, 2400, 8000]
      - [320, 2000, 2320, 6000]
      - [240, 2000, 2240, 4000]
      - [160, 2000, 2160, 2000]
      - [80, 2000, 2080, 0]
    fehler:
      - wert: ["400", "2000", "2400", "8000", "400", "2000", "2400", "6000", "400", "2000", "2400", "4000", "400", "2000", "2400", "2000", "400", "2000", "2400", "0"]
        meldung: |
          Du hast jedes Jahr Zinsen auf die **ursprüngliche** Schuld berechnet. Die Zinsen fallen nur auf die noch offene Restschuld an, und die sinkt jedes Jahr um $2000$ Euro.
hinweise:
  - 'Zinsen $= 4\,\%$ der Restschuld vom Jahresanfang. Am Anfang von Jahr 2 sind das noch $8000$ Euro.'
  - 'Rate $=$ Zinsen $+$ Tilgung. Restschuld am Ende $=$ Restschuld am Anfang $-$ Tilgung.'
loesung: |
  Ansatz: Bei Ratentilgung ist die Tilgung jedes Jahr $2000$ Euro. Die Zinsen berechnet man auf die Restschuld zu Jahresbeginn.
  ---
  Jahr 2: Zinsen $0{,}04 \cdot 8000 = 320$, Rate $2320$, Restschuld $6000$. Jahr 3: Zinsen $240$, Rate $2240$, Restschuld $4000$.
  ---
  Jahr 4: Zinsen $160$, Rate $2160$, Restschuld $2000$. Jahr 5: Zinsen $80$, Rate $2080$, Restschuld $0$.
  ---
  Kontrolle: Die Restschuld ist am Ende genau $0$ ✓. Zinsen insgesamt $400 + 320 + 240 + 160 + 80 = 1200$ Euro.
```

```aufgabe
id: fr-tilgungsarten-vergleich
titel: Annuität oder Ratentilgung?
niveau: 3
lernziel: 5
kompetenz: begruenden
angabe: |
  Derselbe Kredit über $10\,000$ Euro mit $4\,\%$ p. a. und $5$ Jahren Laufzeit wird diesmal als **Annuitätenkredit**
  mit gleich hohen Jahresraten zurückgezahlt. Bei Ratentilgung betragen die Zinsen insgesamt $1200$ Euro.

  a) Wie viel Zinsen zahlt man beim Annuitätenkredit insgesamt (auf Cent)?

  b) Erkläre, warum beim Annuitätenkredit mehr Zinsen anfallen.
teile:
  - typ: zahl
    label: 'a) Zinsen'
    einheit: Euro
    loesung: "5*10000*1.04^5*0.04/(1.04^5 - 1) - 10000"
    anzeige: '1231{,}36'
    toleranz: 0.05
    fehler:
      - wert: "1200"
        meldung: |
          $1200$ Euro sind die Zinsen bei Ratentilgung. Berechne zuerst die Annuität und dann $5 \cdot A - 10\,000$.
  - typ: text
    label: 'b)'
    muster: |
      Beim Annuitätenkredit ist der Tilgungsanteil am Anfang klein, weil ein großer Teil der Rate für Zinsen draufgeht.
      Die Schuld sinkt deshalb anfangs langsamer als bei Ratentilgung mit festen $2000$ Euro Tilgung. Eine höhere
      Restschuld kostet mehr Zinsen.
hinweise:
  - 'Annuität: $A = 10\,000 \cdot \frac{1{,}04^5 \cdot 0{,}04}{1{,}04^5 - 1}$.'
  - 'Vergleiche die Tilgung im ersten Jahr: bei der Annuität $A - 400$, bei der Ratentilgung $2000$ Euro.'
loesung: |
  Ansatz: Gesamtzinsen sind alle Raten zusammen minus Kreditsumme. Zuerst die Annuität.
  ---
  a) $A = 10\,000 \cdot \frac{1{,}04^5 \cdot 0{,}04}{1{,}04^5 - 1} \approx 2246{,}2711$ Euro. Zinsen: $5A - 10\,000 \approx 1231{,}36$ Euro. Mit der auf Cent gerundeten Rate erhältst du $5 \cdot 2246{,}27 - 10\,000 = 1231{,}35$ Euro. Beides gilt als richtig.
  ---
  b) Im ersten Jahr tilgt der Annuitätenkredit nur $2246{,}27 - 400 = 1846{,}27$ Euro, die Ratentilgung dagegen $2000$ Euro.
  ---
  Die Restschuld bleibt beim Annuitätenkredit also länger höher. Auf eine höhere Schuld fallen mehr Zinsen an. Dafür sind seine Raten gleich hoch und gut planbar.
```

```aufgabe
id: fr-kredit-annuitaet
titel: Kreditrate und Restschuld
niveau: 3
lernziel: 5
kompetenz: anwenden
angabe: |
  Ein Kredit über $30\,000$ Euro wird mit $3{,}5\,\%$ p. a. verzinst und in $6$ gleich hohen Jahresraten am Ende jedes
  Jahres getilgt.

  a) Berechne die Annuität $A$ (auf Cent).

  b) Wie hoch ist die Restschuld nach $3$ Jahren?

  c) Wie viel Zinsen zahlt man insgesamt?
teile:
  - typ: zahl
    label: 'a) $A$'
    einheit: Euro
    loesung: "30000*1.035^6*0.035/(1.035^6 - 1)"
    anzeige: '5630{,}05'
    toleranz: 0.02
    fehler:
      - wert: "30000/6*1.035"
        meldung: |
          So würdest du nur auf ein Sechstel der Schuld Zinsen zahlen. Ansatz: Barwert aller Raten gleich Kreditsumme.
  - typ: zahl
    label: 'b) Restschuld nach 3 Jahren'
    einheit: Euro
    loesung: "30000*1.035^3 - 30000*1.035^6*0.035/(1.035^6 - 1)*(1.035^3 - 1)/0.035"
    anzeige: '15773{,}35'
    toleranz: 0.1
    fehler:
      - wert: "15000"
        meldung: |
          Nach der Hälfte der Zeit ist nicht die Hälfte getilgt. Am Anfang geht ein großer Teil der Rate in die Zinsen.
  - typ: zahl
    label: 'c) Zinsen gesamt'
    einheit: Euro
    loesung: "6*30000*1.035^6*0.035/(1.035^6 - 1) - 30000"
    anzeige: '3780{,}28'
    toleranz: 0.1
hinweise:
  - 'Barwert aller Raten gleich Kreditsumme: $30\,000 \cdot q^6 = A \cdot \frac{q^6 - 1}{q - 1}$ mit $q = 1{,}035$.'
  - 'Restschuld nach $k$ Raten: $K_0 q^k - A \frac{q^k - 1}{q - 1}$. Zinsen gesamt: $6A - 30\,000$.'
loesung: |
  Ansatz: Die Raten müssen den Kredit samt Zinsen genau abbezahlen. Endwert der Schuld gleich Endwert der Raten: $30\,000 \cdot 1{,}035^6 = A \cdot \frac{1{,}035^6 - 1}{0{,}035}$.
  ---
  a) $A = \frac{30\,000 \cdot 1{,}035^6 \cdot 0{,}035}{1{,}035^6 - 1} \approx 5630{,}05$ Euro.
  ---
  b) $K_3 = 30\,000 \cdot 1{,}035^3 - 5630{,}05 \cdot \frac{1{,}035^3 - 1}{0{,}035} \approx 33\,261{,}54 - 17\,488{,}19 \approx 15\,773{,}35$ Euro.
  ---
  Kontrolle: Die Restschuld ist auch der Barwert der drei restlichen Raten: $5630{,}05 \cdot \frac{1 - 1{,}035^{-3}}{0{,}035} \approx 15\,773{,}35$ ✓.
  ---
  c) Gezahlt werden $6 \cdot 5630{,}05 = 33\,780{,}30$ Euro. Die Zinsen sind etwa $3780{,}28$ Euro, der Unterschied kommt von der Rundung der Rate.
gefuehrt:
  - text: Welcher Aufzinsungsfaktor $q$ gehört zu $3{,}5\,\%$?
    teil: { typ: zahl, loesung: "1.035" }
    erklaerung: '$q = 1 + 0{,}035 = 1{,}035$.'
  - text: Berechne die Annuität.
    teil:
      typ: zahl
      loesung: "30000*1.035^6*0.035/(1.035^6 - 1)"
      toleranz: 0.02
      fehler:
        - wert: "5000"
          meldung: 'Das ist nur die Tilgung ohne Zinsen. Nimm die Annuitätenformel.'
    erklaerung: '$A \approx 5630{,}05$ Euro.'
  - text: Die Zinsen im ersten Jahr sind $3{,}5\,\%$ von $30\,000$ Euro. Wie groß ist der Tilgungsanteil der ersten Rate, also Rate minus diese Zinsen?
    teil: { typ: zahl, loesung: "30000*1.035^6*0.035/(1.035^6 - 1) - 1050", toleranz: 0.02 }
    erklaerung: 'Zinsen $30\,000 \cdot 0{,}035 = 1050$ Euro, Tilgung $5630{,}05 - 1050 = 4580{,}05$ Euro.'
  - text: Überlege, warum die Restschuld nach drei von sechs Jahren über $15\,000$ Euro liegt.
    erklaerung: 'Die Tilgungsanteile sind am Anfang klein und wachsen erst später. In der ersten Hälfte wird also weniger als die Hälfte getilgt.'
```

## Vollständige Induktion

```aufgabe
id: fr-v-n-plus-eins
titel: Die Aussage für n + 1 aufschreiben
niveau: 1
art: check
angabe: |
  Gegeben ist der Term $T(n) = \dfrac{n(n + 1)}{2}$. Welcher Term ist $T(n + 1)$?
  (Vorwissen aus [8.1 Was ist eine Folge?](/lernen/mathe3/folgen-reihen/was-ist-eine-folge), jedes $n$ ersetzen)
teile:
  - typ: auswahl
    optionen:
      - '$\dfrac{(n + 1)(n + 2)}{2}$'
      - '$\dfrac{n(n + 1)}{2} + 1$'
      - '$\dfrac{(n + 1)(n + 1)}{2}$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Du hast $1$ zum **Wert** addiert. Gemeint ist: Jedes $n$ im Term wird durch $(n + 1)$ ersetzt.
      - wert: 2
        meldung: |
          Auch das $n$ in $(n + 1)$ wird ersetzt. Aus $n + 1$ wird $(n + 1) + 1 = n + 2$.
hinweise:
  - 'Ersetze **jedes** $n$ durch $(n + 1)$, mit Klammer.'
loesung: |
  Jedes $n$ wird durch $(n + 1)$ ersetzt: $T(n + 1) = \frac{(n + 1)\big((n + 1) + 1\big)}{2}$.
  ---
  Vereinfacht: $\frac{(n + 1)(n + 2)}{2}$. Probe mit $n = 1$: $T(2) = 3$, und $\frac{2 \cdot 3}{2} = 3$ ✓.
```

Diese Lektion behandelt eine Beweismethode, die für fast alle neu ist. Sie fühlt sich am Anfang an wie ein Trick.
Lies die Abschnitte langsam, und rechne die Beispiele auf Papier mit. Beim zweiten Lesen wird es deutlich leichter.

**Worum geht es in einem Satz?** Wir lernen, eine Aussage für **alle** natürlichen Zahlen $n$ zu beweisen, obwohl
man unendlich viele Fälle nie einzeln nachrechnen kann.

Warum genügt Nachrechnen nicht? Wir haben einige Formeln „für alle $n$“ kennengelernt, etwa
$1 + 3 + 5 + \dots + (2n - 1) = n^2$. Für $n = 1, 2, 3$ kann man sie prüfen. Aber Beispiele beweisen nichts. Der Term
$n^2 - n + 41$ liefert für $n = 1, 2, \dots, 40$ lauter Primzahlen. Für $n = 41$ ergibt er aber
$41^2 - 41 + 41 = 41^2$, und das ist keine Primzahl.

### Das Bild: Dominosteine

Stell dir eine unendlich lange Reihe von Dominosteinen vor. Damit **alle** umfallen, genügen zwei Dinge:

1. Der **erste** Stein fällt.
2. **Jeder** Stein, der fällt, stößt seinen Nachfolger um.

Dann fällt der erste. Deshalb fällt der zweite. Deshalb fällt der dritte. Kein Stein bleibt stehen. Genau das ist
die vollständige Induktion: Der erste Stein ist der **Induktionsanfang**, das Weiterstoßen ist der
**Induktionsschritt**.

:::satz[Prinzip der vollständigen Induktion]
Es sei $A(n)$ eine Aussage über natürliche Zahlen $n \ge n_0$. Dabei ist $n_0$ die Zahl, ab der die Aussage gelten
soll, meist $n_0 = 1$. Wenn gilt:

1. **Induktionsanfang:** $A(n_0)$ ist wahr, und
2. **Induktionsschritt:** Für jedes $n \ge n_0$ gilt: Wenn $A(n)$ wahr ist, dann ist auch $A(n + 1)$ wahr,

dann ist $A(n)$ für **alle** $n \ge n_0$ wahr.
:::

Im Induktionsschritt nimmt man an, dass $A(n)$ für ein bestimmtes, aber beliebiges $n$ gilt. Diese Annahme heißt
**Induktionsvoraussetzung**, kurz IV. Daraus leitet man $A(n + 1)$ her, die **Induktionsbehauptung**. Warum ist das
erlaubt? Jede natürliche Zahl entsteht aus $n_0$, indem man endlich oft $1$ addiert. Also erreicht die Kette der
Schritte jede Zahl.

```reflexion
frage: Im Induktionsschritt „nehmen wir an, dass $A(n)$ gilt“. Ist das nicht ein Zirkelschluss, weil wir doch gerade $A(n)$ beweisen wollen?
antwort: |
  Nein. Der Schritt beweist nicht $A(n)$, sondern nur die **Wenn-dann-Aussage** „Wenn $A(n)$ gilt, dann gilt auch
  $A(n + 1)$“. Das ist die Aussage „Jeder fallende Stein stößt den nächsten um“. Ob überhaupt ein Stein fällt, sagt
  der Schritt nicht. Das liefert erst der Induktionsanfang. Erst beides zusammen ergibt $A(n)$ für alle $n$. Für
  Programmierer: Das ist wie eine Schleifeninvariante. Sie gilt vor dem ersten Durchlauf und bleibt bei jedem
  Durchlauf erhalten, also gilt sie nach beliebig vielen Durchläufen.
```

:::merke[Aufbau eines Induktionsbeweises]
1. **Behauptung** $A(n)$ für alle $n \ge n_0$ genau hinschreiben.
2. **Induktionsanfang:** $A(n_0)$ durch direktes Nachrechnen zeigen. Linke und rechte Seite getrennt ausrechnen.
3. **Induktionsvoraussetzung:** „Für ein $n \ge n_0$ gelte $A(n)$.“
4. **Induktionsbehauptung:** $A(n + 1)$ ausschreiben, also überall $n$ durch $n + 1$ ersetzen. So weißt du, wo du hinwillst.
5. **Induktionsschritt:** Mit der IV aus $A(n)$ die Aussage $A(n + 1)$ herleiten. Markiere die Stelle, an der die IV verwendet wird, etwa mit $\overset{\text{IV}}{=}$.
6. **Schluss:** „Nach dem Prinzip der vollständigen Induktion gilt $A(n)$ für alle $n \ge n_0$.“
:::

:::beispiel[Induktionsbeweis für die Gauß-Summe]
**Behauptung:** Für alle $n \ge 1$ gilt $\displaystyle\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$.

**Induktionsanfang $n = 1$:** Links steht $\sum_{k=1}^{1} k = 1$. Rechts steht $\frac{1 \cdot 2}{2} = 1$. Beide Seiten sind gleich ✓.

**Induktionsvoraussetzung:** Für ein $n \ge 1$ gelte $\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$.

**Induktionsbehauptung:** Dann gilt auch $\sum_{k=1}^{n+1} k = \frac{(n+1)(n+2)}{2}$.

**Induktionsschritt.** Wir spalten den letzten Summanden ab. Dann steht die Summe aus der IV da, und wir setzen ein:
$$\sum_{k=1}^{n+1} k = \sum_{k=1}^{n} k + (n + 1) \overset{\text{IV}}{=} \frac{n(n + 1)}{2} + (n + 1).$$
Jetzt bringen wir auf den gemeinsamen Nenner $2$ und heben $(n + 1)$ heraus:
$$\frac{n(n + 1) + 2(n + 1)}{2} = \frac{(n + 1)(n + 2)}{2}.$$
Das ist genau die Induktionsbehauptung.

**Was haben wir gezeigt?** Die Formel stimmt für $n = 1$. Und wenn sie für irgendein $n$ stimmt, stimmt sie auch für
das nächste. Also stimmt sie für $1, 2, 3, \dots$, also für alle $n \ge 1$.
:::

Der Kniff „**letzten Summanden abspalten**“ ist bei Summenformeln immer der richtige erste Schritt. Danach steht
eine Summe bis $n$ da, und genau über die macht die IV eine Aussage.

```aufgabe
id: fr-induktion-behauptung
titel: Induktionsbehauptung aufschreiben
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  Mit Induktion soll $A(n)$: $\ \displaystyle\sum_{k=1}^{n} (2k - 1) = n^2$ für alle $n \ge 1$ bewiesen werden.
  Wie lautet die Induktionsbehauptung $A(n + 1)$?
teile:
  - typ: auswahl
    optionen:
      - '$\displaystyle\sum_{k=1}^{n} (2k - 1) = (n + 1)^2$'
      - '$\displaystyle\sum_{k=1}^{n+1} (2k - 1) = (n + 1)^2$'
      - '$\displaystyle\sum_{k=1}^{n+1} (2k + 1) = n^2 + 1$'
      - '$\displaystyle\sum_{k=1}^{n} (2k - 1) + 1 = n^2 + 1$'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Auch die obere Grenze der Summe enthält $n$. Sie wird ebenfalls zu $n + 1$.
      - wert: 2
        meldung: |
          Der Summand $2k - 1$ hängt vom Laufindex $k$ ab, nicht von $n$. Er bleibt unverändert. Und rechts wird aus $n^2$ der Term $(n + 1)^2$.
      - wert: 3
        meldung: |
          Du hast auf beiden Seiten $1$ addiert. Gemeint ist: Jedes $n$ wird durch $n + 1$ ersetzt.
hinweise:
  - 'Wo kommt in $A(n)$ überall ein $n$ vor? In der oberen Grenze und auf der rechten Seite.'
loesung: |
  Ansatz: $A(n + 1)$ entsteht, indem man **überall** $n$ durch $n + 1$ ersetzt. Das betrifft die obere Grenze und die rechte Seite.
  ---
  Der Summand $2k - 1$ hängt nur vom Laufindex $k$ ab und bleibt gleich. Richtig ist $\sum_{k=1}^{n+1}(2k - 1) = (n + 1)^2$.
```

```aufgabe
id: fr-induktion-anfang
titel: Den Induktionsanfang nachrechnen
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Behauptet wird $\displaystyle\sum_{k=1}^{n} k\,(k + 1) = \frac{n(n + 1)(n + 2)}{3}$ für alle $n \ge 1$.

  a) Berechne für den Induktionsanfang die linke Seite für $n = 1$.

  b) Prüfe zusätzlich $n = 3$: Welchen Wert hat die linke Seite?
teile:
  - typ: zahl
    label: 'a) linke Seite für $n = 1$'
    loesung: "1*2"
    anzeige: '2'
    fehler:
      - wert: "1"
        meldung: |
          Der Summand ist $k\,(k + 1)$. Für $k = 1$ ist das $1 \cdot 2 = 2$, nicht $1$.
  - typ: zahl
    label: 'b) linke Seite für $n = 3$'
    loesung: "1*2 + 2*3 + 3*4"
    anzeige: '20'
    fehler:
      - wert: "3*4"
        meldung: |
          Die linke Seite ist eine **Summe** aller Summanden von $k = 1$ bis $k = 3$, nicht nur der letzte.
hinweise:
  - 'Setze in den Summanden $k\,(k + 1)$ nacheinander $k = 1, 2, 3$ ein und addiere.'
loesung: |
  Ansatz: Im Induktionsanfang rechnet man beide Seiten getrennt aus. Links steht eine Summe, rechts ein Term.
  ---
  a) $n = 1$: links $1 \cdot 2 = 2$, rechts $\frac{1 \cdot 2 \cdot 3}{3} = 2$ ✓.
  ---
  b) $n = 3$: links $2 + 6 + 12 = 20$, rechts $\frac{3 \cdot 4 \cdot 5}{3} = 20$ ✓. Das ist nur ein weiterer Test. Bewiesen ist die Formel erst mit dem Induktionsschritt.
```

:::achtung[Induktionsbehauptung nur rechts geändert]
Falsch: „Die Induktionsbehauptung zu $\sum_{k=1}^{n} (2k - 1) = n^2$ lautet $\sum_{k=1}^{n} (2k - 1) = (n + 1)^2$.“

Richtig: Diese Aussage ist sogar falsch. Links steht immer noch die Summe bis $n$, und die ist nach der Behauptung
$n^2$, nicht $(n + 1)^2$. Das $n$ steckt auch in der oberen Grenze.
Richtig ist $\sum_{k=1}^{n+1} (2k - 1) = (n + 1)^2$. Prüfe deine Induktionsbehauptung mit $n = 1$: Für $n + 1 = 2$ muss
sie $1 + 3 = 4$ liefern.
:::

:::achtung[Der Induktionsanfang ist nicht optional]
Falsch: „Ich zeige $n = n + 1$ für alle $n$. Schritt: Aus $n = n + 1$ folgt durch Addition von $1$ sofort
$n + 1 = n + 2$. Also gilt die Aussage.“

Richtig: Der Schritt ist korrekt, aber die Aussage ist für **kein** $n$ wahr. Es fällt nie ein erster Dominostein.
Ohne Induktionsanfang beweist der Schritt gar nichts. Umgekehrt beweisen auch viele geprüfte Anfangswerte nichts ohne
einen Schritt, der für **jedes** $n$ funktioniert. Das zeigt $n^2 - n + 41$.
:::

### Ein zweites Beispiel: die geometrische Summenformel

:::beispiel[Induktionsbeweis für die geometrische Summe]
**Behauptung:** Für $q \neq 1$ und alle $n \ge 1$ gilt $\displaystyle\sum_{k=0}^{n-1} q^k = \frac{q^n - 1}{q - 1}$.

**Induktionsanfang $n = 1$:** Links steht nur der Summand $q^0 = 1$. Rechts steht $\frac{q - 1}{q - 1} = 1$ ✓.

**Induktionsvoraussetzung:** Für ein $n \ge 1$ gelte $\sum_{k=0}^{n-1} q^k = \frac{q^n - 1}{q - 1}$.

**Induktionsbehauptung:** $\sum_{k=0}^{n} q^k = \frac{q^{n+1} - 1}{q - 1}$.

**Induktionsschritt.** Letzten Summanden $q^n$ abspalten, IV einsetzen, auf gemeinsamen Nenner bringen:
$$\sum_{k=0}^{n} q^k = \sum_{k=0}^{n-1} q^k + q^n \overset{\text{IV}}{=} \frac{q^n - 1}{q - 1} + \frac{q^n(q - 1)}{q - 1} = \frac{q^n - 1 + q^{n+1} - q^n}{q - 1} = \frac{q^{n+1} - 1}{q - 1}.$$
Im Zähler heben sich $q^n$ und $-q^n$ auf. Das ist die Induktionsbehauptung.

**Zahlenprobe:** Für $q = 2$ und $n = 4$ ist $1 + 2 + 4 + 8 = 15 = \frac{16 - 1}{1}$ ✓.
:::

Für die Integrale in [14.4 Exakte Integrale mit Summenformeln](/lernen/mathe3/integrierbarkeit/exakte-integrale-mit-summenformeln) brauchst du
die Summe der Quadratzahlen:
$$\sum_{k=1}^{n} k^2 = \frac{n(n + 1)(2n + 1)}{6}.$$
Sie ist keine arithmetische Reihe, denn die Differenzen $3, 5, 7, \dots$ sind nicht konstant. Den Gauß-Trick kann
man deshalb nicht verwenden. Den Beweis führst du selbst mit Induktion, in der letzten Aufgabe dieser Lektion.

:::pruefung[So schreibst du einen Induktionsbeweis in der Prüfung auf]
Induktionsbeweise werden in der schriftlichen Prüfung nach der **Form** bewertet. Achte auf vier Dinge.

1. **Beschrifte die Teile:** „Induktionsanfang“, „Induktionsvoraussetzung“, „Induktionsbehauptung“, „Induktionsschritt“.
2. **Rechne im Anfang beide Seiten getrennt aus.** Schreib zum Beispiel: „Links: $1$. Rechts: $\frac{1 \cdot 2}{2} = 1$.“
3. **Markiere die Stelle, an der du die IV verwendest**, etwa mit $\overset{\text{IV}}{=}$. Ohne diese Stelle ist es kein Induktionsbeweis.
4. **Schreib den Schlusssatz.** „Nach dem Prinzip der vollständigen Induktion gilt die Formel für alle $n \ge 1$.“

In der mündlichen Prüfung kommt oft die Frage, warum man den Anfang braucht. Antworte mit dem Beispiel
„$n = n + 1$“: Der Schritt funktioniert, die Aussage ist trotzdem falsch.
:::

```aufgabe
id: fr-induktion-ungerade
titel: Summe der ungeraden Zahlen
niveau: 2
lernziel: 6
kompetenz: begruenden
angabe: |
  Beweise mit vollständiger Induktion: Für alle $n \ge 1$ gilt
  $$1 + 3 + 5 + \dots + (2n - 1) = n^2.$$
teile:
  - typ: text
    muster: |
      **Anfang** $n = 1$: links $1$, rechts $1^2 = 1$ ✓.

      **IV:** Für ein $n \ge 1$ gelte $\sum_{k=1}^{n}(2k - 1) = n^2$.

      **Behauptung:** $\sum_{k=1}^{n+1}(2k - 1) = (n + 1)^2$.

      **Schritt:** $\sum_{k=1}^{n+1}(2k - 1) = \sum_{k=1}^{n}(2k - 1) + (2(n + 1) - 1) \overset{\text{IV}}{=} n^2 + 2n + 1 = (n + 1)^2$ ✓.

      Nach dem Prinzip der vollständigen Induktion gilt die Formel für alle $n \ge 1$.
hinweise:
  - 'Spalte im Schritt den letzten Summanden ab. Für $k = n + 1$ ist er $2(n + 1) - 1 = 2n + 1$.'
  - 'Erkennst du in $n^2 + 2n + 1$ eine binomische Formel?'
loesung: |
  Ansatz: Summenformel, also im Schritt den letzten Summanden abspalten und die IV einsetzen.
  ---
  **Induktionsanfang** $n = 1$: links $1$, rechts $1^2 = 1$ ✓.
  ---
  **IV:** Für ein $n \ge 1$ gelte $1 + 3 + \dots + (2n - 1) = n^2$. **Behauptung:** $1 + 3 + \dots + (2n - 1) + (2n + 1) = (n + 1)^2$.
  ---
  **Schritt:** $\underbrace{1 + 3 + \dots + (2n - 1)}_{= n^2 \text{ nach IV}} + (2n + 1) = n^2 + 2n + 1 = (n + 1)^2$ nach der ersten binomischen Formel ✓. Also gilt die Formel für alle $n \ge 1$.
gefuehrt:
  - text: Wie lautet der letzte Summand der Summe für $n + 1$, also $2k - 1$ mit $k = n + 1$?
    teil:
      typ: term
      variable: n
      bereich: [1, 10]
      loesung: "2n + 1"
      fehler:
        - wert: "2n - 1"
          meldung: 'Das ist der letzte Summand für $n$. Setze $k = n + 1$ ein: $2(n + 1) - 1$.'
    erklaerung: '$2(n + 1) - 1 = 2n + 1$.'
  - text: Ersetze die Summe bis $n$ mit der IV durch $n^2$. Welcher Term steht dann da?
    teil: { typ: term, variable: n, bereich: [1, 10], loesung: "n^2 + 2n + 1" }
    erklaerung: 'Nach der IV ist die Summe bis $n$ gleich $n^2$. Dazu kommt $2n + 1$.'
  - text: Schreib den Term als Quadrat.
    teil: { typ: term, variable: n, bereich: [1, 10], loesung: "(n + 1)^2" }
    erklaerung: 'Erste binomische Formel: $n^2 + 2n + 1 = (n + 1)^2$. Das ist die Induktionsbehauptung.'
  - text: Überlege, was jetzt noch fehlt, damit der Beweis vollständig ist.
    erklaerung: 'Der Induktionsanfang $n = 1$ und der Schlusssatz. Ohne den Anfang fällt kein Dominostein.'
```

```aufgabe
id: fr-induktion-puzzle
titel: Beweis-Puzzle
niveau: 2
lernziel: 6
kompetenz: begruenden
angabe: |
  Die Schritte eines Induktionsbeweises für $\displaystyle\sum_{k=1}^{n} k\,(k + 1) = \frac{n(n + 1)(n + 2)}{3}$ sind
  durcheinandergeraten. Bring sie in die richtige Reihenfolge.
teile:
  - typ: reihenfolge
    elemente:
      - 'Induktionsanfang: Für $n = 1$ ist links $1 \cdot 2 = 2$ und rechts $\frac{1 \cdot 2 \cdot 3}{3} = 2$.'
      - 'Induktionsvoraussetzung: Für ein $n \ge 1$ gelte $\sum_{k=1}^{n} k(k + 1) = \frac{n(n + 1)(n + 2)}{3}$.'
      - 'Induktionsbehauptung: $\sum_{k=1}^{n+1} k(k + 1) = \frac{(n + 1)(n + 2)(n + 3)}{3}$.'
      - 'Letzten Summanden abspalten: $\sum_{k=1}^{n+1} k(k + 1) = \sum_{k=1}^{n} k(k + 1) + (n + 1)(n + 2)$.'
      - 'IV einsetzen: $= \frac{n(n + 1)(n + 2)}{3} + (n + 1)(n + 2)$.'
      - 'Herausheben: $= \frac{(n + 1)(n + 2)\,(n + 3)}{3}$.'
      - 'Schluss: Nach dem Prinzip der vollständigen Induktion gilt die Formel für alle $n \ge 1$.'
    fehler:
      - wert: [1, 0, 2, 3, 4, 5, 6]
        meldung: |
          Die Voraussetzung kommt nach dem Anfang. Erst zeigt man, dass der erste Stein fällt, dann folgt der Schritt mit Voraussetzung und Behauptung.
hinweise:
  - 'Ein Induktionsbeweis beginnt mit dem Anfang und endet mit dem Schlusssatz.'
  - 'Im Schritt kommt zuerst das Abspalten, dann das Einsetzen der IV, dann die Umformung.'
loesung: |
  Ansatz: Jeder Induktionsbeweis hat dieselbe Gliederung: Anfang, Voraussetzung, Behauptung, Schritt, Schluss.
  ---
  Im Schritt spaltet man den letzten Summanden ab. Dann ersetzt man die Summe bis $n$ mit der IV.
  ---
  Zum Herausheben: $\frac{n(n + 1)(n + 2)}{3} + \frac{3(n + 1)(n + 2)}{3} = \frac{(n + 1)(n + 2)(n + 3)}{3}$. Das ist die Behauptung, also folgt der Schlusssatz.
```

```aufgabe
id: fr-induktion-schritt-term
titel: Den Induktionsschritt rechnen
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Behauptet wird $\displaystyle\sum_{k=1}^{n} \frac{1}{k(k + 1)} = \frac{n}{n + 1}$ für alle $n \ge 1$.
  Im Induktionsschritt entsteht nach dem Einsetzen der IV der Ausdruck
  $$\frac{n}{n + 1} + \frac{1}{(n + 1)(n + 2)}.$$
  Vereinfache ihn zu einem einzigen gekürzten Bruch.
teile:
  - typ: term
    variable: n
    bereich: [1, 10]
    loesung: "(n + 1)/(n + 2)"
    fehler:
      - wert: "(n + 1)/((n + 1)(n + 2))"
        meldung: |
          Du hast die Zähler einfach addiert. Erweitere zuerst $\frac{n}{n + 1}$ mit $(n + 2)$, damit beide Brüche denselben Nenner haben.
      - wert: "(n^2 + 3)/((n + 1)(n + 2))"
        meldung: |
          Beim Ausmultiplizieren ist etwas verloren gegangen: $n(n + 2) = n^2 + 2n$, nicht $n^2 + 2$. Jeder Summand der Klammer wird mit $n$ multipliziert.
hinweise:
  - 'Gemeinsamer Nenner ist $(n + 1)(n + 2)$.'
  - 'Der Zähler wird $n(n + 2) + 1 = n^2 + 2n + 1$. Erkennst du ein Quadrat?'
loesung: |
  Ansatz: Gemeinsamer Nenner $(n + 1)(n + 2)$. Den ersten Bruch erweitern wir mit $(n + 2)$.
  ---
  $\frac{n(n + 2) + 1}{(n + 1)(n + 2)} = \frac{n^2 + 2n + 1}{(n + 1)(n + 2)} = \frac{(n + 1)^2}{(n + 1)(n + 2)}$.
  ---
  Kürzen durch $(n + 1)$ ergibt $\frac{n + 1}{n + 2}$. Das ist die Induktionsbehauptung, denn für $n + 1$ lautet die rechte Seite $\frac{n + 1}{(n + 1) + 1}$. Probe mit $n = 1$: $\frac12 + \frac16 = \frac23$ ✓.
```

```aufgabe
id: fr-induktion-quadratsumme
titel: Summe der Quadratzahlen
niveau: 3
lernziel: 6
kompetenz: begruenden
angabe: |
  a) Beweise mit vollständiger Induktion: $\displaystyle\sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}$ für alle $n \ge 1$.

  b) Berechne damit $1^2 + 2^2 + \dots + 20^2$.
teile:
  - typ: text
    label: 'a) Beweis'
    muster: |
      **Anfang** $n = 1$: links $1$, rechts $\frac{1 \cdot 2 \cdot 3}{6} = 1$ ✓.

      **IV:** Für ein $n \ge 1$ gelte $\sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}$.

      **Schritt:** $\sum_{k=1}^{n+1} k^2 \overset{\text{IV}}{=} \frac{n(n+1)(2n+1)}{6} + (n+1)^2 = \frac{(n+1)\,[\,n(2n+1) + 6(n+1)\,]}{6} = \frac{(n+1)(2n^2 + 7n + 6)}{6} = \frac{(n+1)(n+2)(2n+3)}{6}$.

      Das ist die Formel mit $n + 1$ statt $n$, denn $2(n+1) + 1 = 2n + 3$ ✓.
  - typ: zahl
    label: 'b)'
    loesung: "20*21*41/6"
    anzeige: '2870'
    fehler:
      - wert: "20*21*40/6"
        meldung: |
          Der dritte Faktor ist $2n + 1 = 41$, nicht $2n = 40$.
hinweise:
  - 'Induktionsbehauptung: rechte Seite $\frac{(n+1)(n+2)(2n+3)}{6}$.'
  - 'Im Schritt $(n + 1)$ herausheben, statt alles auszumultiplizieren. Dann prüfen, ob $2n^2 + 7n + 6 = (n+2)(2n+3)$ gilt.'
loesung: |
  Ansatz: Summenformel, also Anfang prüfen, im Schritt den letzten Summanden $(n + 1)^2$ abspalten und die IV einsetzen.
  ---
  **Anfang** $n = 1$: $1^2 = 1 = \frac{1 \cdot 2 \cdot 3}{6}$ ✓.
  ---
  **IV:** $\sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}$. **Behauptung:** $\sum_{k=1}^{n+1} k^2 = \frac{(n+1)(n+2)(2n+3)}{6}$.
  ---
  **Schritt:**
  $$\sum_{k=1}^{n+1} k^2 = \sum_{k=1}^{n} k^2 + (n+1)^2 \overset{\text{IV}}{=} \frac{n(n+1)(2n+1)}{6} + \frac{6(n+1)^2}{6}.$$
  Beide Brüche haben den Nenner $6$. Im Zähler steckt in beiden Teilen der Faktor $(n + 1)$. Wir heben ihn heraus:
  $$\frac{(n+1)\big(n(2n+1) + 6(n+1)\big)}{6} = \frac{(n+1)\big(2n^2 + n + 6n + 6\big)}{6} = \frac{(n+1)(2n^2 + 7n + 6)}{6}.$$
  Ausmultiplizieren zeigt $(n+2)(2n+3) = 2n^2 + 7n + 6$. Also steht die Behauptung da ✓.
  ---
  b) $n = 20$: $\frac{20 \cdot 21 \cdot 41}{6} = \frac{17\,220}{6} = 2870$.
```

## Induktion bei Teilbarkeit, Ungleichungen und Rekursionen

```aufgabe
id: fr-v-teilbar
titel: Was heißt teilbar?
niveau: 1
art: check
angabe: |
  Die Zahl $N$ ist durch $4$ teilbar. Welche Aussage ist dann sicher richtig?
  (Vorwissen aus [8.9 Vollständige Induktion](/lernen/mathe3/folgen-reihen/vollstaendige-induktion) und dem Rechnen mit ganzen Zahlen aus [1.3 Die Zahlenmengen N, Z, Q und R](/lernen/mathe3/zahlen/die-zahlenmengen-n-z-q-und-r))
teile:
  - typ: auswahl
    optionen:
      - 'Es gibt eine ganze Zahl $m$ mit $N = 4m$.'
      - '$\frac{4}{N}$ ist eine ganze Zahl.'
      - '$N$ ist kleiner als $4$.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Das ist umgekehrt. „$N$ durch $4$ teilbar“ heißt, dass $\frac{N}{4}$ ganz ist. Zum Beispiel ist $12$ durch $4$ teilbar, aber $\frac{4}{12}$ ist kein ganzer Wert.
      - wert: 2
        meldung: |
          Die Größe spielt keine Rolle. $100$ ist durch $4$ teilbar, denn $100 = 4 \cdot 25$.
hinweise:
  - 'Denk an ein Beispiel: $12$ ist durch $4$ teilbar. Wie schreibst du $12$ mit dem Faktor $4$?'
loesung: |
  „$N$ ist durch $4$ teilbar“ heißt: $N$ ist ein Vielfaches von $4$, also $N = 4m$ mit einer ganzen Zahl $m$.
  ---
  Beispiel: $12 = 4 \cdot 3$. Diese Schreibweise ist der Schlüssel für Induktionsbeweise zur Teilbarkeit.
```

**Worum geht es?** Die vollständige Induktion funktioniert nicht nur bei Summenformeln. Wir wenden sie auf drei
weitere Arten von Aussagen an: Teilbarkeit, Ungleichungen und rekursive Folgen. Der Aufbau bleibt immer gleich:
Anfang, Voraussetzung, Behauptung, Schritt, Schluss. Nur der Kniff im Schritt ändert sich.

### Teilbarkeit

Der Kniff: Man schreibt den Ausdruck für $n + 1$ so um, dass der Ausdruck für $n$ darin vorkommt. Über diesen Teil
weiß man aus der IV, dass er teilbar ist.

:::beispiel[Teilbarkeit mit Induktion]
**Behauptung:** Für alle $n \ge 1$ ist $n^3 + 2n$ durch $3$ teilbar.

**Induktionsanfang $n = 1$:** $1 + 2 = 3$ ist durch $3$ teilbar ✓.

**Induktionsvoraussetzung:** Für ein $n \ge 1$ ist $n^3 + 2n$ durch $3$ teilbar.

**Induktionsbehauptung:** $(n + 1)^3 + 2(n + 1)$ ist durch $3$ teilbar.

**Induktionsschritt.** Wir multiplizieren aus und ordnen so, dass $n^3 + 2n$ sichtbar wird:
$$(n + 1)^3 + 2(n + 1) = n^3 + 3n^2 + 3n + 1 + 2n + 2 = \underbrace{(n^3 + 2n)}_{\text{durch 3 teilbar (IV)}} + \underbrace{3\,(n^2 + n + 1)}_{\text{durch 3 teilbar}}.$$
Eine Summe zweier Vielfacher von $3$ ist wieder ein Vielfaches von $3$ ✓.

**Zahlenprobe:** $n = 4$ liefert $64 + 8 = 72 = 3 \cdot 24$ ✓.
:::

:::achtung[Teilbarkeit nur behauptet, nicht hergestellt]
Falsch: „$5^{n+1} - 1 = 5 \cdot 5^n - 1$. Nach IV ist $5^n - 1$ durch $4$ teilbar, also auch $5 \cdot 5^n - 1$.“

Richtig: In $5 \cdot 5^n - 1$ steht der Ausdruck $5^n - 1$ gar nicht da. Man muss ihn erst herstellen:
$5 \cdot 5^n - 1 = 5\,(5^n - 1) + 5 - 1 = 5\,(5^n - 1) + 4$. Erst jetzt sieht man zwei Vielfache von $4$.
:::

```aufgabe
id: fr-teilbarkeit-test
titel: Teilbarkeit an Beispielen testen
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Behauptet wird: Für alle $n \ge 1$ ist $7^n - 1$ durch $6$ teilbar. Teste die Aussage für $n = 3$. Wie lautet der
  Quotient $\frac{7^3 - 1}{6}$?
teile:
  - typ: zahl
    loesung: "(7^3 - 1)/6"
    anzeige: '57'
    fehler:
      - wert: "(7*3 - 1)/6"
        meldung: |
          $7^3$ heißt $7 \cdot 7 \cdot 7 = 343$, nicht $7 \cdot 3$.
hinweise:
  - '$7^3 = 343$.'
loesung: |
  Ansatz: Für einen Test setzt man die Zahl ein und rechnet aus.
  ---
  $7^3 - 1 = 342 = 6 \cdot 57$. Der Quotient ist $57$, eine ganze Zahl ✓. Das ist ein Test, noch kein Beweis.
```

```aufgabe
id: fr-teilbarkeit-umformen
titel: Den alten Ausdruck sichtbar machen
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Im Induktionsschritt für „$7^n - 1$ ist durch $6$ teilbar“ schreibt man
  $$7^{n+1} - 1 = 7\,(7^n - 1) + c.$$
  Welche Zahl ist $c$?
teile:
  - typ: zahl
    label: '$c$'
    loesung: "7 - 1"
    anzeige: '6'
    fehler:
      - wert: "-1"
        meldung: |
          Multipliziere $7\,(7^n - 1)$ aus: $7^{n+1} - 7$. Damit $7^{n+1} - 1$ entsteht, fehlen noch $+6$.
      - wert: "1"
        meldung: |
          $7\,(7^n - 1) = 7^{n+1} - 7$. Von $-7$ nach $-1$ muss man $6$ addieren.
hinweise:
  - 'Multipliziere $7\,(7^n - 1)$ aus und vergleiche mit $7^{n+1} - 1$.'
loesung: |
  Ansatz: Wir wollen den Ausdruck $7^n - 1$ aus der IV sichtbar machen. Ausmultipliziert ist $7\,(7^n - 1) = 7^{n+1} - 7$.
  ---
  Damit $7^{n+1} - 1$ herauskommt, muss man $6$ addieren. Also $c = 6$.
  ---
  Folgerung: $7(7^n - 1)$ ist nach IV durch $6$ teilbar, und $6$ ist es auch. Also ist $7^{n+1} - 1$ durch $6$ teilbar.
```

```aufgabe
id: fr-induktion-teilbarkeit
titel: Teilbarkeit mit Induktion beweisen
niveau: 2
lernziel: 6
kompetenz: begruenden
angabe: |
  Beweise mit vollständiger Induktion: Für alle $n \ge 1$ ist $5^n - 1$ durch $4$ teilbar.

  a) Nach IV ist $5^n - 1 = 4m$ mit einer ganzen Zahl $m$. Schreibe $5^{n+1} - 1$ als $4 \cdot T$. Welcher Term $T$ in $m$ passt?

  b) Schreib den ganzen Beweis auf.
teile:
  - typ: term
    label: 'a) $T =$'
    variable: m
    bereich: [1, 10]
    loesung: "5m + 1"
    fehler:
      - wert: "5m"
        meldung: |
          $5 \cdot 5^n - 1 = 5\,(5^n - 1) + 4 = 5 \cdot 4m + 4$. Den Summanden $4$ musst du mitnehmen: $4\,(5m + 1)$.
  - typ: text
    label: 'b) Beweis'
    muster: |
      **Anfang** $n = 1$: $5 - 1 = 4$ ist durch 4 teilbar ✓.

      **IV:** Für ein $n \ge 1$ gelte $5^n - 1 = 4m$ mit einer ganzen Zahl $m$.

      **Schritt:** $5^{n+1} - 1 = 5 \cdot 5^n - 5 + 4 = 5\,(5^n - 1) + 4 \overset{\text{IV}}{=} 5 \cdot 4m + 4 = 4\,(5m + 1)$.
      Das ist durch 4 teilbar ✓. Nach dem Induktionsprinzip gilt die Aussage für alle $n \ge 1$.
hinweise:
  - 'Schreibe $5^{n+1} - 1 = 5 \cdot 5^n - 1$ und erzeuge darin künstlich den Ausdruck $5^n - 1$.'
  - '$5 \cdot 5^n - 1 = 5\,(5^n - 1) + 4$. Setze jetzt $5^n - 1 = 4m$ ein.'
loesung: |
  Ansatz: Teilbarkeit, also den Ausdruck aus der IV im Ausdruck für $n + 1$ sichtbar machen.
  ---
  **Anfang** $n = 1$: $5^1 - 1 = 4$ ✓. **IV:** Für ein $n \ge 1$ gelte $5^n - 1 = 4m$ mit ganzem $m$.
  ---
  **Schritt:** $5^{n+1} - 1 = 5 \cdot 5^n - 5 + 4 = 5\,(5^n - 1) + 4 \overset{\text{IV}}{=} 5 \cdot 4m + 4 = 4\,(5m + 1)$.
  ---
  Also ist $5^{n+1} - 1$ durch $4$ teilbar, und $T = 5m + 1$. Zahlenprobe: $n = 2$ liefert $24 = 4 \cdot 6$, und mit $m = 1$ aus $n = 1$ ist $5m + 1 = 6$ ✓.
```

### Ungleichungen und die Bernoulli-Ungleichung

Bei Ungleichungen darf man im Schritt **abschätzen**: Man ersetzt einen Ausdruck durch einen kleineren oder größeren,
solange die Richtung stimmt. Die wichtigste Ungleichung dieser Art brauchst du in
[11.5 Nullfolgen](/lernen/mathe3/grenzwerte-folgen/nullfolgen-und-das-rechnen-mit-ihnen). Dort zeigt sie, dass $q^n$
für $|q| < 1$ gegen $0$ geht.

:::satz[Bernoulli-Ungleichung]
Für alle reellen Zahlen $x \ge -1$ und alle natürlichen Zahlen $n \ge 1$ gilt
$$(1 + x)^n \ge 1 + n x.$$
:::

**Zuerst konkret:** Für $x = 0{,}1$ und $n = 5$ ist $1{,}1^5 \approx 1{,}61$, und $1 + 5 \cdot 0{,}1 = 1{,}5$. In Worten:
Wiederholtes Wachstum um $10\,\%$ bringt mindestens so viel wie fünfmal $10\,\%$ vom Anfangswert. Zinseszins ist nie
schlechter als einfache Verzinsung.

:::beweis
**Anfang $n = 1$:** $(1 + x)^1 = 1 + x = 1 + 1 \cdot x$ ✓.

**IV:** Für ein $n \ge 1$ gelte $(1 + x)^n \ge 1 + nx$.

**Schritt:** Wegen $x \ge -1$ ist $1 + x \ge 0$. Multipliziert man eine Ungleichung mit einer Zahl, die nicht negativ
ist, bleibt das Zeichen erhalten. Also
$$(1 + x)^{n+1} = (1 + x)^n (1 + x) \overset{\text{IV}}{\ge} (1 + nx)(1 + x) = 1 + (n + 1)x + n x^2 \ge 1 + (n + 1)x.$$
Im letzten Schritt haben wir $n x^2 \ge 0$ weggelassen. Die Voraussetzung $x \ge -1$ haben wir beim Multiplizieren
mit $1 + x$ gebraucht: Wäre $1 + x$ negativ, würde sich das Ungleichheitszeichen umdrehen.
:::

:::beispiel[Ab wann gilt eine Ungleichung?]
**Behauptung:** $3^n > 2n + 1$ für alle $n \ge 2$.

**Test:** $n = 1$: $3 > 3$ ist falsch. $n = 2$: $9 > 5$ ✓. Der Anfang liegt also bei $n_0 = 2$.

**Induktionsanfang $n = 2$:** $9 > 5$ ✓.

**IV:** Für ein $n \ge 2$ gelte $3^n > 2n + 1$.

**Schritt:** $3^{n+1} = 3 \cdot 3^n \overset{\text{IV}}{>} 3\,(2n + 1) = 6n + 3$. Wegen $6n + 3 > 2n + 3 = 2(n + 1) + 1$
folgt $3^{n+1} > 2(n + 1) + 1$ ✓. Die letzte Abschätzung stimmt, weil $6n > 2n$ für $n \ge 1$ ist.
:::

```aufgabe
id: fr-bernoulli-anwenden
titel: Die Bernoulli-Ungleichung als Abschätzung
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Ein Kapital wächst jährlich um $3\,\%$. Die Bernoulli-Ungleichung liefert $1{,}03^n \ge 1 + 0{,}03\,n$.

  a) Ab welchem $n$ garantiert diese Abschätzung, dass sich das Kapital mindestens verzehnfacht hat, also
  $1 + 0{,}03\,n \ge 10$?

  b) Nach wie vielen vollen Jahren ist $1{,}03^n \ge 10$ tatsächlich erstmals erfüllt?
teile:
  - typ: zahl
    label: 'a) $n$'
    loesung: "9/0.03"
    anzeige: '300'
    fehler:
      - wert: "10/0.03"
        meldung: |
          Aus $1 + 0{,}03\,n \ge 10$ folgt $0{,}03\,n \ge 9$. Du hast die $1$ nicht abgezogen.
  - typ: zahl
    label: 'b) Jahre'
    loesung: "78"
    fehler:
      - wert: "300"
        meldung: |
          Die Bernoulli-Ungleichung ist nur eine untere Schranke. Das tatsächliche Wachstum ist viel schneller. Löse $1{,}03^n \ge 10$ mit dem Logarithmus.
hinweise:
  - 'a) Lineare Ungleichung $1 + 0{,}03\,n \ge 10$ lösen.'
  - 'b) $n \ge \frac{\ln 10}{\ln 1{,}03}$ und aufrunden.'
loesung: |
  Ansatz: Die Bernoulli-Ungleichung schätzt die Potenz nach unten ab. Wenn schon die Abschätzung $\ge 10$ ist, dann erst recht die Potenz.
  ---
  a) $0{,}03\,n \ge 9$, also $n \ge 300$.
  ---
  b) $n \ge \frac{\ln 10}{\ln 1{,}03} \approx 77{,}9$, also $n = 78$. Kontrolle: $1{,}03^{77} \approx 9{,}74$ und $1{,}03^{78} \approx 10{,}03$ ✓.
  ---
  Deutung: Die Abschätzung ist sehr grob, aber sie ist bewiesen und einfach. Genau dafür benutzt man sie in [11.5 Nullfolgen](/lernen/mathe3/grenzwerte-folgen/nullfolgen-und-das-rechnen-mit-ihnen).
```

### Rekursive Folgen

In [8.1 Was ist eine Folge?](/lernen/mathe3/folgen-reihen/was-ist-eine-folge) haben wir für die Folge $a_1 = 3$,
$a_{n+1} = 2a_n - 1$ die Formel $a_n = 2^n + 1$ vermutet. Jetzt beweisen wir sie. Der Kniff: Im Schritt setzt man
die Rekursion ein und danach die IV.

:::beispiel[Eine Rekursion auflösen]
**Behauptung:** Für die Folge $a_1 = 3$, $a_{n+1} = 2a_n - 1$ gilt $a_n = 2^n + 1$ für alle $n \ge 1$.

**Anfang:** $a_1 = 3$ und $2^1 + 1 = 3$ ✓.

**IV:** Für ein $n \ge 1$ gelte $a_n = 2^n + 1$.

**Behauptung für $n + 1$:** $a_{n+1} = 2^{n+1} + 1$.

**Schritt:** Zuerst die Rekursion, dann die IV:
$$a_{n+1} = 2a_n - 1 \overset{\text{IV}}{=} 2\,(2^n + 1) - 1 = 2^{n+1} + 2 - 1 = 2^{n+1} + 1 \;✓.$$
:::

```aufgabe
id: fr-induktion-rekursion
titel: Eine Rekursion beweisen
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Gegeben ist $a_1 = 1$ und $a_{n+1} = 3a_n + 2$. Vermutet wird $a_n = 2 \cdot 3^{n-1} - 1$.

  a) Berechne $a_3$ mit der Rekursion.

  b) Im Induktionsschritt setzt man die IV in die Rekursion ein. Vereinfache $3\,(2 \cdot 3^{n-1} - 1) + 2$.
teile:
  - typ: zahl
    label: 'a) $a_3$'
    loesung: "3*(3*1 + 2) + 2"
    anzeige: '17'
    fehler:
      - wert: "5"
        meldung: |
          $5$ ist $a_2$. Wende die Rekursion noch einmal an: $3 \cdot 5 + 2$.
  - typ: term
    label: 'b)'
    variable: n
    bereich: [1, 6]
    loesung: "2*3^n - 1"
    fehler:
      - wert: "2*3^n + 1"
        meldung: |
          Beim Ausmultiplizieren entsteht $-3$, nicht $-1$: $3 \cdot (-1) = -3$. Dann $-3 + 2 = -1$.
hinweise:
  - 'b) Multipliziere aus: $3 \cdot 2 \cdot 3^{n-1} = 2 \cdot 3^n$.'
  - 'Das Ergebnis soll die vermutete Formel für $n + 1$ sein, also $2 \cdot 3^{(n+1)-1} - 1$.'
loesung: |
  Ansatz: In a) rechnen wir die Rekursion aus. In b) nutzen wir: Rekursion einsetzen, dann IV, dann vereinfachen.
  ---
  a) $a_2 = 3 \cdot 1 + 2 = 5$, $a_3 = 3 \cdot 5 + 2 = 17$. Die Formel liefert $2 \cdot 9 - 1 = 17$ ✓.
  ---
  b) $3\,(2 \cdot 3^{n-1} - 1) + 2 = 2 \cdot 3^n - 3 + 2 = 2 \cdot 3^n - 1$.
  ---
  Das ist genau die Formel für $n + 1$, denn $2 \cdot 3^{(n+1)-1} - 1 = 2 \cdot 3^n - 1$. Mit dem Anfang $a_1 = 2 \cdot 3^0 - 1 = 1$ ist die Formel bewiesen.
gefuehrt:
  - text: Berechne $a_2$.
    teil: { typ: zahl, loesung: "3*1 + 2" }
    erklaerung: '$a_2 = 3 \cdot 1 + 2 = 5$. Die Formel liefert $2 \cdot 3 - 1 = 5$ ✓.'
  - text: Prüfe den Induktionsanfang. Welchen Wert liefert die Formel für $n = 1$?
    teil:
      typ: zahl
      loesung: "2*3^0 - 1"
      fehler:
        - wert: "5"
          meldung: 'Für $n = 1$ ist die Hochzahl $n - 1 = 0$, und $3^0 = 1$.'
    erklaerung: '$2 \cdot 3^0 - 1 = 1 = a_1$ ✓.'
  - text: Setze die IV in die Rekursion ein und vereinfache $3\,(2 \cdot 3^{n-1} - 1) + 2$.
    teil: { typ: term, variable: n, bereich: [1, 6], loesung: "2*3^n - 1" }
    erklaerung: '$2 \cdot 3^n - 3 + 2 = 2 \cdot 3^n - 1$.'
  - text: Überlege, warum das die Induktionsbehauptung ist.
    erklaerung: 'Die Formel für $n + 1$ lautet $2 \cdot 3^{(n+1)-1} - 1 = 2 \cdot 3^n - 1$. Genau das steht da.'
```

:::achtung[Rekursion und Formel verwechselt]
Falsch: „$a_{n+1} = 2^{n+1} + 1$, also ist $a_{n+1} = 2a_n + 1$.“

Richtig: Im Schritt beginnt man mit der **Rekursion** $a_{n+1} = 2a_n - 1$, denn sie ist bekannt. Die Formel für
$a_{n+1}$ ist das Ziel und darf nicht am Anfang stehen. Wer mit dem Ziel beginnt, beweist nichts.
:::

:::merke[Rezept: Kniffe im Induktionsschritt]
1. **Summenformel:** letzten Summanden abspalten, IV einsetzen, auf gemeinsamen Nenner bringen.
2. **Teilbarkeit:** den Ausdruck aus der IV künstlich herstellen, dann zwei Vielfache addieren.
3. **Ungleichung:** mit der IV abschätzen, Zeichen nur bei nichtnegativen Faktoren behalten, passenden Startwert $n_0$ wählen.
4. **Rekursion:** zuerst die Rekursion, dann die IV einsetzen, dann vereinfachen.
:::

```aufgabe
id: fr-induktion-ungleichung
titel: Ab wann gilt die Ungleichung?
niveau: 3
lernziel: 6
kompetenz: begruenden
angabe: |
  Betrachte die Aussage $2^n > n^2$.

  a) Prüfe die Aussage für $n = 1, \dots, 6$. Ab welchem $n_0$ gilt sie vermutlich für alle $n \ge n_0$?

  b) Beweise die Aussage für alle $n \ge n_0$ mit vollständiger Induktion. Du darfst verwenden, dass
  $2n + 1 < n^2$ für alle $n \ge 3$ gilt.
teile:
  - typ: zahl
    label: 'a) $n_0$'
    loesung: "5"
    fehler:
      - wert: "1"
        meldung: |
          Für $n = 1$ stimmt die Aussage zwar, aber für $n = 2, 3, 4$ nicht. Gesucht ist der Wert, ab dem sie **durchgehend** gilt.
  - typ: text
    label: 'b) Beweis'
    muster: |
      **Anfang** $n = 5$: $2^5 = 32 > 25 = 5^2$ ✓.

      **Schritt:** Für ein $n \ge 5$ gelte $2^n > n^2$. Dann
      $2^{n+1} = 2 \cdot 2^n > 2n^2 = n^2 + n^2 > n^2 + 2n + 1 = (n+1)^2$,
      wobei $n^2 > 2n + 1$ für $n \ge 3$ verwendet wurde ✓.
hinweise:
  - 'Werte: $n = 1$: $2 > 1$; $n = 2$: $4 = 4$; $n = 3$: $8 < 9$; $n = 4$: $16 = 16$; $n = 5$: $32 > 25$.'
  - 'Im Schritt: $2^{n+1} = 2 \cdot 2^n > 2n^2 = n^2 + n^2$, und dann $n^2 > 2n + 1$ benutzen.'
loesung: |
  Ansatz: Zuerst testen, um den Startwert zu finden. Dann Induktion mit Abschätzung im Schritt.
  ---
  a) $n = 1$: $2 > 1$ ✓. $n = 2$: $4 > 4$ falsch. $n = 3$: $8 > 9$ falsch. $n = 4$: $16 > 16$ falsch. $n = 5$: $32 > 25$ ✓. $n = 6$: $64 > 36$ ✓. Vermutung: $n_0 = 5$.
  ---
  b) **Anfang** $n = 5$: $32 > 25$ ✓. **IV:** $2^n > n^2$ für ein $n \ge 5$.
  ---
  **Schritt:** $2^{n+1} = 2 \cdot 2^n \overset{\text{IV}}{>} 2n^2 = n^2 + n^2 > n^2 + 2n + 1 = (n + 1)^2$.
  ---
  Die Hilfsaussage $n^2 > 2n + 1$ für $n \ge 3$ folgt aus $n^2 - 2n - 1 = (n - 1)^2 - 2 \ge 4 - 2 > 0$. Der Anfang darf nicht bei $n = 1$ liegen, weil schon der Schritt von $1$ nach $2$ scheitert.
```

```aufgabe
id: fr-induktion-fehler
titel: Wo steckt der Fehler?
niveau: 3
lernziel: 6
kompetenz: begruenden
angabe: |
  „Satz: In jeder Gruppe von $n \ge 1$ Pferden haben alle Pferde dieselbe Farbe.

  *Beweis:* Für $n = 1$ ist das klar. Angenommen, es gilt für $n$ Pferde. Nimm $n + 1$ Pferde. Lässt man das erste
  weg, bleiben $n$ Pferde, die nach IV gleichfarbig sind. Lässt man das letzte weg, bleiben ebenfalls $n$
  gleichfarbige Pferde. Die Pferde in der Mitte gehören zu beiden Gruppen, also haben alle $n + 1$ Pferde dieselbe
  Farbe.“

  Erkläre, wo der Fehler liegt.
teile:
  - typ: text
    muster: |
      Der Induktionsanfang stimmt, aber der Schritt funktioniert nicht für **jedes** $n$. Beim Schritt von
      $n = 1$ auf $n + 1 = 2$ gibt es keine „Pferde in der Mitte“. Die beiden Gruppen bestehen nur aus Pferd 2
      beziehungsweise nur aus Pferd 1. Sie überschneiden sich nicht, also folgt nichts über die Farbe beider. Die
      Kette der Dominosteine bricht schon zwischen dem ersten und dem zweiten Stein.
hinweise:
  - 'Probier den Induktionsschritt konkret für $n = 1$ aus, also von $1$ auf $2$ Pferde.'
  - 'Welche Pferde liegen bei zwei Pferden „in der Mitte“?'
loesung: |
  Ansatz: Der Schritt muss für **alle** $n \ge 1$ gelten, also auch von $n = 1$ nach $n = 2$. Diesen Fall prüfen wir.
  ---
  Bei $2$ Pferden besteht die erste Teilgruppe nur aus Pferd 2, die zweite nur aus Pferd 1. Es gibt **kein** gemeinsames Pferd. Das Argument mit den „Pferden in der Mitte“ bricht zusammen.
  ---
  Für $n \ge 2$ wäre der Schritt korrekt, aber der Schritt von $1$ nach $2$ fehlt. Der zweite Dominostein fällt nicht, und der ganze Beweis ist ungültig.
```

## Monotonie und Beschränktheit

```aufgabe
id: fr-v-differenz-vorzeichen
titel: Wächst oder fällt die Folge?
niveau: 1
art: check
angabe: |
  Gegeben ist die arithmetische Folge $a_n = 7 - 2n$. Welchen Wert hat $a_{n+1} - a_n$?
  (Vorwissen aus [8.2 Arithmetische Folgen](/lernen/mathe3/folgen-reihen/arithmetische-folgen))
teile:
  - typ: zahl
    loesung: "-2"
    fehler:
      - wert: "2"
        meldung: |
          Das Vorzeichen stimmt nicht. Die Glieder sind $5, 3, 1, \dots$, jedes ist um $2$ **kleiner**.
      - wert: "7"
        meldung: |
          $7$ ist kein Unterschied zwischen zwei Gliedern. Berechne $a_{n+1} = 7 - 2(n + 1) = 5 - 2n$ und ziehe $a_n$ ab.
hinweise:
  - 'Ersetze $n$ durch $n + 1$ und ziehe dann $7 - 2n$ ab.'
loesung: |
  $a_{n+1} = 7 - 2(n + 1) = 5 - 2n$.
  ---
  $a_{n+1} - a_n = (5 - 2n) - (7 - 2n) = -2$. Die Folge fällt also bei jedem Schritt um $2$.
```

**Worum geht es?** Bei vielen Folgen dieses Kapitels hast du gesehen: Manche werden größer, manche kleiner, manche
springen. Manche bleiben in einem festen Bereich, andere wachsen über jede Grenze. Diese Eigenschaften bekommen jetzt
Namen. Wir lernen sie zu erkennen und einfach zu begründen. Die lückenlosen Beweise mit allen Methoden folgen in
[11.10 Monotonie und Beschränktheit beweisen](/lernen/mathe3/grenzwerte-folgen/monotonie-und-beschraenktheit-beweisen).

### Monotonie

„Monoton“ kommt vom griechischen Wort für „eintönig“. Eine monotone Folge ändert ihre Richtung nie. Sie geht
entweder nur nach oben oder nur nach unten.

:::definition[Monotonie]
Eine Folge $(a_n)$ heißt

- **monoton wachsend**, also „wird nie kleiner“, wenn $a_{n+1} \ge a_n$ für alle $n$ gilt.
- **streng monoton wachsend**, also „wird immer größer“, wenn $a_{n+1} > a_n$ für alle $n$ gilt.
- **monoton fallend**, also „wird nie größer“, wenn $a_{n+1} \le a_n$ für alle $n$ gilt.
- **streng monoton fallend**, also „wird immer kleiner“, wenn $a_{n+1} < a_n$ für alle $n$ gilt.

Gleichwertig: Die Folge wächst monoton, wenn die Differenz $a_{n+1} - a_n$ für alle $n$ größer oder gleich $0$ ist.
:::

**Beispiel und Nichtbeispiel.** $1, 2, 2, 3, 3, 3, \dots$ ist monoton wachsend, aber nicht streng, denn manche Glieder
sind gleich. Die Folge $1, -1, 1, -1, \dots$ ist **nicht** monoton. Sie wechselt ständig die Richtung.

Für arithmetische und geometrische Folgen sieht man die Monotonie sofort:

- Arithmetisch: $a_{n+1} - a_n = d$. Für $d > 0$ wächst die Folge streng, für $d < 0$ fällt sie streng.
- Geometrisch mit positivem $a_1$: Für $q > 1$ wächst sie streng, für $0 < q < 1$ fällt sie streng.
- Geometrisch mit $q < 0$: Das Vorzeichen wechselt, also ist die Folge nicht monoton.

Bei anderen Folgen untersucht man die **Differenz** $a_{n+1} - a_n$. Ist sie für alle $n$ positiv, wächst die Folge
streng.

:::beispiel[Erst fallend, dann wachsend]
Gegeben ist $a_n = n^2 - 8n + 20$. Die ersten Glieder sind $13, 8, 5, 4, 5, 8, \dots$

**Schritt 1, $a_{n+1}$ bilden.** $a_{n+1} = (n + 1)^2 - 8(n + 1) + 20 = n^2 - 6n + 13$.

**Schritt 2, Differenz vereinfachen.** $a_{n+1} - a_n = (n^2 - 6n + 13) - (n^2 - 8n + 20) = 2n - 7$.

**Schritt 3, Vorzeichen untersuchen.** $2n - 7$ ist negativ für $n = 1, 2, 3$ und positiv für $n \ge 4$. Die Folge fällt
also bis $a_4$ und wächst danach.

**Ergebnis.** Die Folge ist **nicht** monoton. Ab $n = 4$ ist sie streng monoton wachsend. Ihr kleinstes Glied ist
$a_4 = 16 - 32 + 20 = 4$.
:::

:::achtung[Ein paar Glieder sind kein Beweis]
Falsch: „$a_n = 20n - n^2$ hat die Glieder $19, 36, 51, 64, 75$. Jedes ist größer als das vorige, also wächst die Folge.“

Richtig: Fünf Glieder sagen nichts über die anderen. Die Differenz ist $a_{n+1} - a_n = 19 - 2n$. Sie ist ab $n = 10$
negativ. Tatsächlich ist $a_{10} = 100$ das größte Glied, danach fällt die Folge: $a_{11} = 99$. Berechnete Glieder
liefern nur eine **Vermutung**. Begründet ist sie erst durch eine Rechnung für jedes $n$.
:::

```aufgabe
id: fr-monotonie-erkennen
titel: Monotonie erkennen
niveau: 1
lernziel: 7
kompetenz: verstehen
angabe: |
  Welche der Folgen sind streng monoton wachsend? Wähle alle passenden aus.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$a_n = 3n - 7$'
      - '$a_n = \dfrac{1}{n}$'
      - '$a_n = (-1)^n\, n$'
      - '$a_n = 2^n$'
      - '$a_n = 5 - 0{,}5^n$'
    richtig: [0, 3, 4]
    fehler:
      - wert: [0, 3]
        meldung: |
          Auch $5 - 0{,}5^n$ wächst: Von $5$ wird immer weniger abgezogen, denn $0{,}5^n$ wird kleiner. Die Glieder sind $4{,}5;\ 4{,}75;\ 4{,}875$.
      - wert: [0, 2, 3, 4]
        meldung: |
          $(-1)^n\,n$ liefert $-1, 2, -3, 4, \dots$ Die Folge springt auf und ab, sie ist nicht monoton.
hinweise:
  - 'Schreib bei jeder Folge die ersten drei Glieder auf.'
loesung: |
  Ansatz: Wir schauen, ob jedes Glied größer als das vorige ist. Bei bekannten Folgenarten hilft $d$ oder $q$.
  ---
  $3n - 7$: arithmetisch mit $d = 3 > 0$, wächst streng. $\frac1n$: $1, \frac12, \frac13$, fällt streng.
  ---
  $(-1)^n\,n$: $-1, 2, -3, 4$, springt, nicht monoton. $2^n$: geometrisch mit $q = 2 > 1$ und positiven Gliedern, wächst streng.
  ---
  $5 - 0{,}5^n$: $0{,}5^n$ fällt streng, also wird $5 - 0{,}5^n$ streng größer: $4{,}5;\ 4{,}75;\ 4{,}875$.
```

### Beschränktheit

Stell dir einen Raum vor. Eine Folge ist **nach oben beschränkt**, wenn es eine Decke gibt, an die kein Glied stößt.
Sie ist **nach unten beschränkt**, wenn es einen Boden gibt, unter den kein Glied fällt. Wichtig: Decke und Boden
sind **feste** Zahlen. Sie hängen nicht von $n$ ab.

:::definition[Beschränktheit]
Eine Folge $(a_n)$ heißt **nach oben beschränkt**, wenn es eine feste Zahl $S$ gibt mit $a_n \le S$ für alle $n$.
Die Zahl $S$ heißt **obere Schranke**. Entsprechend heißt sie **nach unten beschränkt**, wenn es eine feste Zahl $s$
gibt mit $a_n \ge s$ für alle $n$. Dann heißt $s$ **untere Schranke**. Ist die Folge nach oben und nach unten
beschränkt, heißt sie **beschränkt**.
:::

**Beispiel und Nichtbeispiel.** $a_n = \frac1n$ ist beschränkt: $0 < a_n \le 1$. Die Folge $a_n = n^2$ ist nach unten
durch $1$ beschränkt, nach oben aber **nicht**. Für jede noch so große Zahl $S$ gibt es ein Glied, das größer ist.

Schranken sind nicht eindeutig. Ist $S = 1$ eine obere Schranke, dann auch $2$, $10$ oder $1000$. Interessant ist
meist die **kleinste** obere Schranke. Sie heißt **Supremum**. Die **größte** untere Schranke heißt **Infimum**.

:::beispiel[Schranken einer wachsenden Folge]
Gegeben ist $a_n = 3 - \frac{2}{n}$. Die Glieder sind $1;\ 2;\ 2{,}33;\ 2{,}5;\ \dots$

**Monotonie:** $\frac{2}{n}$ wird kleiner, also wird von $3$ immer weniger abgezogen. Die Folge wächst streng.

**Untere Schranke:** Weil die Folge wächst, ist das erste Glied das kleinste. Also ist $a_1 = 1$ die größte untere Schranke.

**Obere Schranke:** Wegen $\frac{2}{n} > 0$ ist $a_n < 3$ für alle $n$. Für großes $n$ ist $\frac2n$ winzig, also kommt
$a_n$ der $3$ beliebig nahe. Keine Zahl unter $3$ ist deshalb eine Schranke. Also ist $3$ die kleinste obere Schranke.
Sie wird nie erreicht.
:::

:::achtung[Eine Schranke, die mit n mitwächst]
Falsch: „$a_n = n$ ist nach oben beschränkt, denn $a_n \le n$ für alle $n$.“

Richtig: Eine Schranke muss eine **feste** Zahl sein. Wer $S = n$ erlaubt, könnte jede Folge „beschränkt“ nennen.
Für $a_n = n$ gibt es keine feste Zahl, die über allen Gliedern liegt. Die Folge ist nach oben unbeschränkt.
:::

:::achtung[Wachsend heißt nicht unbeschränkt]
Falsch: „$a_n = 3 - \frac2n$ wächst immer weiter, also wächst sie über jede Grenze.“

Richtig: Die Folge wächst, aber immer langsamer. Sie bleibt unter $3$. Monotonie und Beschränktheit sind zwei
verschiedene Eigenschaften. Eine Folge kann wachsend **und** beschränkt sein.
:::

```reflexion
frage: Gibt es eine Folge, die beschränkt, aber nicht monoton ist? Und eine, die monoton, aber nicht beschränkt ist? Gib jeweils ein Beispiel.
antwort: |
  Ja, beides gibt es. $a_n = (-1)^n$ springt zwischen $-1$ und $1$. Sie ist beschränkt, aber nicht monoton.
  $a_n = n$ ist streng monoton wachsend, aber nach oben nicht beschränkt. Die beiden Eigenschaften sind also
  unabhängig. Besonders wichtig sind Folgen, die beides sind, monoton **und** beschränkt. Für sie gilt das
  Monotoniekriterium aus
  [11.11 Monotoniekriterium und Vollständigkeit](/lernen/mathe3/grenzwerte-folgen/monotoniekriterium-und-vollstaendigkeit-von):
  Sie haben immer einen Grenzwert.
```

```aufgabe
id: fr-schranken
titel: Schranken angeben
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Gegeben ist $a_n = 5 + \dfrac{3}{n}$. Gib die kleinste obere Schranke und die größte untere Schranke an.
teile:
  - typ: zahl
    label: 'kleinste obere Schranke'
    loesung: "5 + 3/1"
    anzeige: '8'
    fehler:
      - wert: "5"
        meldung: |
          $5$ ist eine untere Schranke. Die Folge fällt, also ist das **erste** Glied das größte.
  - typ: zahl
    label: 'größte untere Schranke'
    loesung: "5"
    fehler:
      - wert: "0"
        meldung: |
          $0$ ist zwar eine untere Schranke, aber nicht die größte. Alle Glieder sind größer als $5$.
hinweise:
  - 'Wird $\frac3n$ größer oder kleiner, wenn $n$ wächst? Daraus folgt die Monotonie.'
  - 'Bei einer fallenden Folge ist $a_1$ das größte Glied.'
loesung: |
  Ansatz: Zuerst die Monotonie, denn sie verrät, welches Glied am größten ist. $\frac3n$ fällt streng, also fällt $a_n$ streng: $8;\ 6{,}5;\ 6;\ 5{,}75;\ \dots$
  ---
  Kleinste obere Schranke: das größte Glied $a_1 = 8$.
  ---
  Größte untere Schranke: Wegen $\frac3n > 0$ ist $a_n > 5$. Für großes $n$ kommt $a_n$ der $5$ beliebig nahe. Also ist $5$ die größte untere Schranke, und sie wird nie erreicht.
```

```aufgabe
id: fr-monotonie-graph
titel: Eigenschaften am Punktgraphen ablesen
niveau: 1
lernziel: 7
kompetenz: verstehen
angabe: |
  Der Punktgraph zeigt die Folge $a_n = 2 + (-0{,}5)^n$. Welche Aussagen treffen zu? Wähle alle passenden aus.
plot:
  x: [0, 7]
  y: [1, 2.5]
  achsen: { x: "n", y: "aₙ" }
  punkte:
    - { x: 1, y: 1.5 }
    - { x: 2, y: 2.25 }
    - { x: 3, y: 1.875 }
    - { x: 4, y: 2.0625 }
    - { x: 5, y: 1.96875 }
    - { x: 6, y: 2.015625 }
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - 'Die Folge ist monoton wachsend.'
      - 'Die Folge ist monoton fallend.'
      - 'Die Folge ist nach oben beschränkt.'
      - 'Die Folge ist nach unten beschränkt.'
    richtig: [2, 3]
    fehler:
      - wert: [0, 2, 3]
        meldung: |
          Von $a_2 = 2{,}25$ nach $a_3 = 1{,}875$ geht es nach unten. Die Folge springt auf und ab, sie ist nicht monoton.
      - wert: [2]
        meldung: |
          Auch nach unten gibt es einen Boden. Kein Glied liegt unter $a_1 = 1{,}5$.
hinweise:
  - 'Geht es von Punkt zu Punkt immer in dieselbe Richtung?'
  - 'Gibt es eine waagrechte Linie, über die kein Punkt hinausgeht? Und eine, unter die kein Punkt fällt?'
loesung: |
  Ansatz: Monotonie liest man an der Richtung von Punkt zu Punkt ab, Beschränktheit an einer Decke und einem Boden.
  ---
  Die Punkte springen abwechselnd über und unter die $2$. Die Folge ist weder wachsend noch fallend.
  ---
  Alle Glieder liegen zwischen $a_1 = 1{,}5$ und $a_2 = 2{,}25$, denn der Abstand $0{,}5^n$ zur $2$ wird immer kleiner. Die Folge ist also beschränkt.
```

### Was heißt „nähert sich“?

Bei $a_n = \frac{n}{n + 1}$ sagt man: Die Folge **strebt gegen $1$**. Anschaulich heißt das: Für großes $n$ liegt $a_n$
so nahe bei $1$, wie man nur will. Der Abstand ist $1 - a_n = \frac{1}{n + 1}$. Für $n \ge 10$ ist er höchstens
$\frac{1}{11}$, für $n \ge 1000$ höchstens $\frac{1}{1001}$. Den Abstand nennt man eine **Toleranz**. Man schreibt dafür
den griechischen Buchstaben $\varepsilon$ (lies „epsilon“).

```aufgabe
id: fr-v-vorhersage-streifen
titel: Ab wann liegen alle Glieder im Streifen?
niveau: 1
art: check
angabe: |
  Für $a_n = \frac{n}{n + 1}$ ist der Abstand zur $1$ gleich $\frac{1}{n + 1}$. Ab welchem Index $n$ ist der Abstand
  kleiner als $\varepsilon = 0{,}1$? Sag es zuerst voraus, dann prüfe es im Widget darunter.
teile:
  - typ: zahl
    label: 'ab $n =$'
    loesung: "10"
    fehler:
      - wert: "9"
        meldung: |
          Für $n = 9$ ist der Abstand $\frac{1}{10} = 0{,}1$. Das ist nicht **kleiner** als $0{,}1$.
hinweise:
  - 'Löse $\frac{1}{n + 1} < 0{,}1$, also $n + 1 > 10$.'
loesung: |
  $\frac{1}{n + 1} < 0{,}1$ heißt $n + 1 > 10$, also $n > 9$.
  ---
  Ab $n = 10$ liegen alle Glieder im Streifen zwischen $0{,}9$ und $1{,}1$.
```

```widget
name: folge
titel: Glieder einer Folge und ihr Grenzwert
props:
  a: "n/(n+1)"
  grenzwert: 1
  n_max: 30
  epsilon: 0.1
```

Beobachte im Widget: Ab $n = 10$ bleiben alle Punkte im Streifen. Zieh den Regler für $\varepsilon$ kleiner. Der
Streifen wird schmaler, und der Index, ab dem alle Punkte drinbleiben, wird größer. **Erklärung:** Je kleiner die
Toleranz, desto länger muss man warten. Aber für **jede** Toleranz gibt es so einen Index. Genau das ist der Kern der
exakten Grenzwertdefinition in
[11.1 Was heißt „sich nähern“?](/lernen/mathe3/grenzwerte-folgen/was-heisst-sich-naehern-abstand-und-epsilon-umgebung).
Das **Monotoniekriterium** lernst du in
[11.11 Monotoniekriterium und Vollständigkeit](/lernen/mathe3/grenzwerte-folgen/monotoniekriterium-und-vollstaendigkeit-von):
Eine monotone und beschränkte Folge hat immer einen Grenzwert.

:::merke[Rezept: Monotonie und Beschränktheit untersuchen]
1. Die ersten Glieder ausrechnen und eine **Vermutung** aufstellen.
2. Monotonie begründen: bei arithmetischen Folgen über $d$, bei geometrischen über $q$, sonst über die Differenz $a_{n+1} - a_n$ für **jedes** $n$.
3. Bei wachsenden Folgen ist $a_1$ die größte untere Schranke. Bei fallenden Folgen ist $a_1$ die kleinste obere Schranke.
4. Die andere Schranke: Den Term so umschreiben, dass man sie sieht, etwa $3 - \frac2n < 3$.
:::

```aufgabe
id: fr-monotonie-ab-index
titel: Erst fallend, dann wachsend
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Gegeben ist $a_n = n^2 - 10n + 30$.

  a) Vereinfache $a_{n+1} - a_n$.

  b) Welchen kleinsten Wert nimmt die Folge an?
teile:
  - typ: term
    label: 'a) $a_{n+1} - a_n =$'
    variable: n
    bereich: [1, 10]
    loesung: "2n - 9"
    fehler:
      - wert: "2n - 10"
        meldung: |
          $(n + 1)^2 = n^2 + 2n + 1$. Die $+1$ aus der binomischen Formel fehlt: $2n + 1 - 10 = 2n - 9$.
      - wert: "2n + 1"
        meldung: |
          Du hast nur $n^2$ durch $(n + 1)^2$ ersetzt. Auch im Term $-10n$ wird $n$ zu $n + 1$.
  - typ: zahl
    label: 'b) kleinster Wert'
    loesung: "5^2 - 10*5 + 30"
    anzeige: '5'
    fehler:
      - wert: "30"
        meldung: |
          Das ist der Wert bei $n = 0$. Die Folge beginnt aber bei $n = 1$ und fällt zuerst noch.
hinweise:
  - '$a_{n+1} = (n + 1)^2 - 10(n + 1) + 30$. Ausmultiplizieren und $a_n$ abziehen.'
  - 'Für welche $n$ ist $2n - 9$ negativ, für welche positiv? Dort, wo das Vorzeichen wechselt, liegt das kleinste Glied.'
loesung: |
  Ansatz: Die Differenz $a_{n+1} - a_n$ zeigt, wann die Folge fällt und wann sie wächst.
  ---
  a) $a_{n+1} - a_n = (n + 1)^2 - 10(n + 1) + 30 - (n^2 - 10n + 30) = 2n + 1 - 10 = 2n - 9$.
  ---
  $2n - 9 < 0$ für $n \le 4$, also fällt die Folge bis $a_5$. Für $n \ge 5$ ist $2n - 9 > 0$, also wächst sie ab $a_5$.
  ---
  b) Das kleinste Glied ist $a_5 = 25 - 50 + 30 = 5$. Kontrolle: $a_4 = 6$ und $a_6 = 6$ ✓.
```

```aufgabe
id: fr-monotonie-rekursiv
titel: Monotonie einer rekursiven Folge
niveau: 2
lernziel: 7
kompetenz: begruenden
angabe: |
  Gegeben ist $a_1 = 10$ und $a_{n+1} = a_n + \dfrac{1}{n}$.

  a) Berechne $a_4$ auf drei Nachkommastellen.

  b) Ist die Folge streng monoton wachsend? Begründe mit der Differenz.
teile:
  - typ: zahl
    label: 'a) $a_4$'
    loesung: "10 + 1 + 1/2 + 1/3"
    anzeige: '11{,}833'
    toleranz: 0.001
    fehler:
      - wert: "10 + 1/2 + 1/3 + 1/4"
        meldung: |
          Für $a_2$ ist $n = 1$, also kommt $\frac11 = 1$ dazu. Der letzte Summand bis $a_4$ ist $\frac13$.
  - typ: auswahl
    label: 'b)'
    optionen:
      - 'Ja, denn $a_{n+1} - a_n = \frac1n > 0$ für alle $n$.'
      - 'Nein, denn die Zuwächse werden immer kleiner.'
      - 'Ja, aber nur, weil $a_1 = 10$ positiv ist.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Kleiner werdende Zuwächse sind immer noch Zuwächse. Solange $a_{n+1} - a_n > 0$ ist, wächst die Folge.
      - wert: 2
        meldung: |
          Der Startwert ist egal. Auch mit $a_1 = -10$ käme in jedem Schritt etwas Positives dazu.
hinweise:
  - 'Die Rekursion sagt direkt, was von einem Glied zum nächsten dazukommt.'
  - 'Bilde $a_{n+1} - a_n$ aus der Rekursion.'
loesung: |
  Ansatz: Bei einer Rekursion der Form $a_{n+1} = a_n + (\dots)$ ist die Differenz der Zusatz in der Klammer.
  ---
  a) $a_2 = 10 + 1 = 11$, $a_3 = 11 + \frac12 = 11{,}5$, $a_4 = 11{,}5 + \frac13 \approx 11{,}833$.
  ---
  b) $a_{n+1} - a_n = \frac1n$. Das ist für jedes $n \ge 1$ positiv. Also ist die Folge streng monoton wachsend.
```

```aufgabe
id: fr-monotonie-geometrisch
titel: Geometrische Folge mit negativem Quotienten
niveau: 2
lernziel: 7
kompetenz: verstehen
angabe: |
  Gegeben ist $a_n = 6 \cdot (-0{,}5)^{n-1}$.

  a) Welches ist das kleinste Glied der Folge?

  b) Welches ist das größte Glied?

  c) Ist die Folge monoton?
teile:
  - typ: zahl
    label: 'a) kleinstes Glied'
    loesung: "6*(-0.5)"
    anzeige: '-3'
    fehler:
      - wert: "0"
        meldung: |
          Kein Glied ist $0$. Die negativen Glieder sind $-3$, $-0{,}75$, … Das kleinste davon ist das erste negative.
  - typ: zahl
    label: 'b) größtes Glied'
    loesung: "6"
  - typ: auswahl
    label: 'c)'
    optionen:
      - 'ja, fallend'
      - 'nein'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Die Glieder lauten $6, -3, 1{,}5, -0{,}75$. Von $-3$ nach $1{,}5$ geht es nach oben. Ein negatives $q$ erzeugt Sprünge.
hinweise:
  - 'Schreib die ersten fünf Glieder auf.'
  - 'Die Beträge werden kleiner, das Vorzeichen wechselt.'
loesung: |
  Ansatz: Bei negativem Quotienten wechselt das Vorzeichen. Die ersten Glieder sind $6;\ -3;\ 1{,}5;\ -0{,}75;\ 0{,}375$.
  ---
  a) Die negativen Glieder sind $-3, -0{,}75, \dots$ mit immer kleinerem Betrag. Das kleinste ist $a_2 = -3$.
  ---
  b) Die positiven Glieder sind $6, 1{,}5, \dots$ Das größte ist $a_1 = 6$. Die Folge ist also beschränkt: $-3 \le a_n \le 6$.
  ---
  c) Die Folge springt auf und ab. Sie ist nicht monoton.
```

```aufgabe
id: fr-monotonie-aussagen
titel: Richtige Aussagen über Folgen
niveau: 2
lernziel: 7
kompetenz: begruenden
angabe: |
  Welche Aussagen sind richtig? Wähle alle passenden aus.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - 'Jede streng monoton wachsende Folge ist nach unten beschränkt.'
      - 'Jede streng monoton wachsende Folge ist nach oben unbeschränkt.'
      - 'Jede beschränkte Folge ist monoton.'
      - 'Eine streng monoton fallende Folge hat ihr größtes Glied bei $n = 1$.'
    richtig: [0, 3]
    fehler:
      - wert: [0, 1, 3]
        meldung: |
          Gegenbeispiel: $a_n = 3 - \frac2n$ wächst streng, bleibt aber unter $3$.
      - wert: [0, 2, 3]
        meldung: |
          Gegenbeispiel: $(-1)^n$ ist beschränkt, springt aber hin und her.
hinweise:
  - 'Bei einer wachsenden Folge ist das erste Glied das kleinste.'
  - 'Suche für jede falsche Aussage ein Gegenbeispiel.'
loesung: |
  Ansatz: Eine allgemeine Aussage ist falsch, sobald es ein einziges Gegenbeispiel gibt.
  ---
  Aussage 1 ist richtig: Bei einer wachsenden Folge gilt $a_n \ge a_1$, also ist $a_1$ eine untere Schranke. Aussage 4 ist aus demselben Grund richtig: Bei einer fallenden Folge ist $a_1$ das größte Glied.
  ---
  Aussage 2 ist falsch, Gegenbeispiel $3 - \frac2n$. Aussage 3 ist falsch, Gegenbeispiel $(-1)^n$.
```

```aufgabe
id: fr-monotonie-gewinn
titel: Wann ist der Gewinn am größten?
niveau: 3
lernziel: 7
kompetenz: modellieren
angabe: |
  Ein neues Produkt bringt im Monat $n$ nach Markteinführung den Gewinn $G_n = 30n - n^2$ (in Tausend Euro).

  a) In welchem Monat ist der Gewinn am größten?

  b) Wie groß ist dieser größte Gewinn (in Tausend Euro)?

  c) Ist die Folge $(G_n)$ nach unten beschränkt?
teile:
  - typ: zahl
    label: 'a) Monat'
    loesung: "15"
    fehler:
      - wert: "14"
        meldung: |
          Die Differenz $G_{n+1} - G_n = 29 - 2n$ ist für $n = 14$ noch positiv. Also ist $G_{15} > G_{14}$.
  - typ: zahl
    label: 'b) größter Gewinn'
    loesung: "30*15 - 15^2"
    anzeige: '225'
  - typ: auswahl
    label: 'c)'
    optionen:
      - 'ja'
      - 'nein'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Ab Monat $16$ fällt die Folge und wird ab Monat $31$ negativ. Wegen $-n^2$ fällt sie unter jede feste Zahl.
hinweise:
  - 'Berechne $G_{n+1} - G_n$ und bestimme, wann die Differenz positiv ist.'
  - 'Die Folge wächst, solange $G_{n+1} - G_n > 0$ gilt. Das letzte Glied, bei dem es noch aufwärts geht, ist der Gipfel.'
loesung: |
  Ansatz: Der größte Wert liegt dort, wo die Folge vom Wachsen ins Fallen wechselt. Das zeigt die Differenz.
  ---
  $G_{n+1} - G_n = 30(n + 1) - (n + 1)^2 - 30n + n^2 = 30 - 2n - 1 = 29 - 2n$.
  ---
  $29 - 2n > 0$ gilt für $n \le 14$. Also wächst die Folge bis $G_{15}$ und fällt danach. a) Der Gewinn ist im Monat $15$ am größten.
  ---
  b) $G_{15} = 450 - 225 = 225$ Tausend Euro. Kontrolle: $G_{14} = 224$ und $G_{16} = 224$ ✓.
  ---
  c) Nein. $G_n = n\,(30 - n)$ wird für große $n$ beliebig negativ, etwa $G_{100} = -7000$. Es gibt keinen Boden. Im Sachzusammenhang heißt das: Ohne Gegenmaßnahmen macht das Produkt irgendwann Verlust.
gefuehrt:
  - text: Bilde die Differenz $G_{n+1} - G_n$.
    teil:
      typ: term
      variable: n
      bereich: [1, 20]
      loesung: "29 - 2n"
      fehler:
        - wert: "30 - 2n"
          meldung: '$(n + 1)^2 = n^2 + 2n + 1$. Die $+1$ wird abgezogen: $30 - 2n - 1$.'
    erklaerung: '$G_{n+1} - G_n = 29 - 2n$.'
  - text: Bis zu welchem $n$ ist die Differenz positiv?
    teil: { typ: zahl, loesung: "14" }
    erklaerung: '$29 - 2n > 0$ heißt $n < 14{,}5$, also $n \le 14$. Bis $G_{15}$ geht es aufwärts.'
  - text: Welcher Monat hat also den größten Gewinn?
    teil:
      typ: zahl
      loesung: "15"
      fehler:
        - wert: "14"
          meldung: 'Für $n = 14$ ist die Differenz positiv, also ist $G_{15}$ noch größer als $G_{14}$.'
    erklaerung: 'Monat $15$ mit $G_{15} = 225$.'
  - text: Überlege, ob die Folge nach unten beschränkt ist.
    erklaerung: 'Nein. Für große $n$ überwiegt $-n^2$, die Glieder fallen unter jede feste Zahl.'
```

## Differenzengleichungen: rekursive Modelle für Wachstum und Abnahme (Vertiefung)

```aufgabe
id: fr-v-rekursion-prozent
titel: Prozentwachstum als Rekursion
niveau: 1
art: check
angabe: |
  Ein Bestand $x_n$ wächst von einem Jahr zum nächsten um $3\,\%$. Welche Rekursion beschreibt das?
  (Vorwissen aus [8.3 Geometrische Folgen](/lernen/mathe3/folgen-reihen/geometrische-folgen))
teile:
  - typ: auswahl
    optionen:
      - '$x_{n+1} = 1{,}03\,x_n$'
      - '$x_{n+1} = x_n + 0{,}03$'
      - '$x_{n+1} = 0{,}03\,x_n$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Hier kommt jedes Jahr der feste Betrag $0{,}03$ dazu. Bei $3\,\%$ hängt der Zuwachs aber vom Bestand ab: $0{,}03\,x_n$.
      - wert: 2
        meldung: |
          $0{,}03\,x_n$ ist nur der **Zuwachs**. Der neue Bestand ist alter Bestand plus Zuwachs.
hinweise:
  - 'Neuer Bestand $=$ alter Bestand $+ 3\,\%$ des alten Bestands.'
loesung: |
  $x_{n+1} = x_n + 0{,}03\,x_n = 1{,}03\,x_n$.
  ---
  Das ist eine geometrische Folge mit $q = 1{,}03$.
```

Diese Lektion ist eine **Vertiefung**. Sie gehört zum Oberstufen-Lehrplan der Schule, wird in der
Studienberechtigungsprüfung aber nicht verlangt. Sie verbindet die rekursiven Folgen mit Anwendungen.

**Worum geht es?** Viele Vorgänge beschreibt man am natürlichsten Schritt für Schritt: „Nächstes Jahr ist es so viel
wie heute, plus etwas, minus etwas.“ Eine solche Regel heißt **Differenzengleichung**. Der Name kommt daher, dass sie
die **Differenz** $x_{n+1} - x_n$ festlegt, also die Änderung von einem Schritt zum nächsten. Sie ist das
schrittweise Gegenstück zu den Differentialgleichungen aus
[10.11 Wachstum, Zerfall, Abkühlung](/lernen/mathe3/integralrechnung/wachstum-zerfall-abkuehlung-einfache-differentialgleichungen-vertiefung).

Die vier wichtigsten Modelle, jeweils mit einem Beispiel:

1. **Lineares Wachstum:** $x_{n+1} = x_n + d$. Pro Schritt kommt ein fester Betrag dazu, etwa $5$ Euro pro Woche. Das ist eine arithmetische Folge.
2. **Exponentielles Wachstum oder Abnahme:** $x_{n+1} = q \cdot x_n$. Pro Schritt ändert sich der Bestand um einen festen Prozentsatz. Das ist eine geometrische Folge.
3. **Prozent und fester Betrag zusammen:** $x_{n+1} = q \cdot x_n + c$. Beispiel: Ein Medikament wird zu $20\,\%$ abgebaut, und täglich kommt eine neue Dosis dazu.
4. **Beschränktes Wachstum:** $x_{n+1} = x_n + k\,(S - x_n)$. Der Zuwachs ist ein fester Anteil $k$ des Abstands zur Grenze $S$. Je näher man der Grenze kommt, desto langsamer geht es.

**Nichtbeispiel:** $x_{n+1} = x_n^2 + 1$ ist zwar eine Rekursion, gehört aber zu keinem dieser Modelle. Der Bestand
wird quadriert, das ist weder ein fester Betrag noch ein fester Anteil.

:::beispiel[Medikamentenspiegel]
Ein Patient nimmt jeden Morgen $50$ mg eines Medikaments. Bis zum nächsten Morgen baut der Körper $20\,\%$ der Menge
im Körper ab. Es sei $x_n$ die Menge direkt nach der $n$-ten Einnahme.

**Schritt 1, Modell aufstellen.** Von der Menge bleiben $80\,\%$ übrig, dann kommen $50$ mg dazu:
$x_{n+1} = 0{,}8\,x_n + 50$ mit $x_1 = 50$.

**Schritt 2, schrittweise auswerten.** $x_2 = 0{,}8 \cdot 50 + 50 = 90$, $x_3 = 0{,}8 \cdot 90 + 50 = 122$,
$x_4 = 147{,}6$, $x_5 = 168{,}08$.

**Schritt 3, Gleichgewicht suchen.** Die Menge wächst, aber immer langsamer. Bleibt sie irgendwann gleich, gilt
$x_{n+1} = x_n = x^*$. Einsetzen: $x^* = 0{,}8\,x^* + 50$, also $0{,}2\,x^* = 50$ und $x^* = 250$ mg.

**Schritt 4, deuten.** Langfristig pendelt sich die Menge nach der Einnahme bei $250$ mg ein. Dann baut der Körper
täglich $20\,\%$ von $250$ mg ab, also genau die $50$ mg, die neu dazukommen.
:::

```plot
x: [0, 13]
y: [0, 280]
achsen: { x: "n (Tag)", y: "Menge in mg" }
punkte:
  - { x: 1, y: 50, farbe: 0 }
  - { x: 2, y: 90, farbe: 0 }
  - { x: 3, y: 122, farbe: 0 }
  - { x: 4, y: 147.6, farbe: 0 }
  - { x: 5, y: 168.08, farbe: 0 }
  - { x: 6, y: 184.46, farbe: 0 }
  - { x: 7, y: 197.57, farbe: 0 }
  - { x: 8, y: 208.05, farbe: 0 }
  - { x: 9, y: 216.44, farbe: 0 }
  - { x: 10, y: 223.15, farbe: 0 }
  - { x: 11, y: 228.52, farbe: 0 }
  - { x: 12, y: 232.82, label: "xₙ", farbe: 0 }
strecken:
  - { von: [0, 250], nach: [13, 250], gestrichelt: true, farbe: 1 }
beschriftung: Medikamentenmenge direkt nach der Einnahme, Tag für Tag. Die Punkte steigen immer langsamer und nähern sich der gestrichelten Gleichgewichtslinie bei 250 mg.
```

Die Folge im Beispiel ist **monoton wachsend** und **nach oben beschränkt** durch $250$. Das sind genau die Begriffe
aus [8.11 Monotonie und Beschränktheit](/lernen/mathe3/folgen-reihen/monotonie-und-beschraenktheit). Dass eine solche
Folge einen Grenzwert hat, sagt das Monotoniekriterium in
[11.11 Monotoniekriterium und Vollständigkeit](/lernen/mathe3/grenzwerte-folgen/monotoniekriterium-und-vollstaendigkeit-von).

:::satz[Gleichgewicht einer Differenzengleichung]
Für $x_{n+1} = q\,x_n + c$ mit $q \neq 1$ heißt $x^* = \dfrac{c}{1 - q}$ **Gleichgewicht** oder **Fixpunkt**. Startet
die Folge dort, bleibt sie dort. Für $0 < q < 1$ nähert sich die Folge von jedem Startwert aus dem Gleichgewicht.
Der Abstand zum Gleichgewicht schrumpft bei jedem Schritt um den Faktor $q$:
$$x_n - x^* = (x_1 - x^*) \cdot q^{\,n-1}.$$
:::

Im Medikamentenbeispiel ist $x_1 - x^* = 50 - 250 = -200$. Also gilt $x_n = 250 - 200 \cdot 0{,}8^{n-1}$. Probe:
$x_3 = 250 - 200 \cdot 0{,}64 = 122$ ✓. Diese explizite Formel könnte man mit vollständiger Induktion beweisen.

:::achtung[Gleichgewicht falsch berechnet]
Falsch: „Bei $x_{n+1} = 0{,}8\,x_n + 50$ ist das Gleichgewicht $\frac{50}{0{,}8} = 62{,}5$.“

Richtig: Im Gleichgewicht ist $x^* = 0{,}8\,x^* + 50$. Man bringt $0{,}8\,x^*$ auf die linke Seite: $0{,}2\,x^* = 50$.
Also $x^* = \frac{50}{1 - 0{,}8} = 250$. Probe: $0{,}8 \cdot 250 + 50 = 250$ ✓, aber $0{,}8 \cdot 62{,}5 + 50 = 100 \neq 62{,}5$.
:::

```aufgabe
id: fr-dgl-konto
titel: Konto mit Zinsen und Abhebungen
niveau: 1
lernziel: 8
kompetenz: rechnen
angabe: |
  Auf einem Konto liegen $10\,000$ Euro. Am Ende jedes Jahres kommen $2\,\%$ Zinsen dazu, danach werden $500$ Euro
  abgehoben. Das Modell ist $x_{n+1} = 1{,}02\,x_n - 500$ mit $x_0 = 10\,000$. Berechne $x_2$.
teile:
  - typ: zahl
    einheit: Euro
    loesung: "1.02*(1.02*10000 - 500) - 500"
    anzeige: '9394'
    fehler:
      - wert: "9000"
        meldung: |
          Du hast nur die Abhebungen berücksichtigt. Vor jeder Abhebung kommen $2\,\%$ Zinsen dazu.
      - wert: "9700"
        meldung: |
          Das ist $x_1$. Wende die Regel noch einmal an.
hinweise:
  - 'Zuerst $x_1 = 1{,}02 \cdot 10\,000 - 500$, dann $x_2$ aus $x_1$.'
loesung: |
  Ansatz: Die Differenzengleichung schrittweise auswerten, jeweils erst verzinsen, dann abheben.
  ---
  $x_1 = 1{,}02 \cdot 10\,000 - 500 = 9700$ Euro. $x_2 = 1{,}02 \cdot 9700 - 500 = 9394$ Euro.
  ---
  Deutung: Die Zinsen ($200$ Euro im ersten Jahr) sind kleiner als die Abhebung. Deshalb schrumpft das Konto.
```

```aufgabe
id: fr-dgl-modell-waehlen
titel: Welches Modell passt?
niveau: 1
lernziel: 8
kompetenz: modellieren
angabe: |
  In einem See leben $2000$ Fische. Jedes Jahr sterben $10\,\%$ der Fische, und $300$ junge Fische werden eingesetzt.
  Welche Differenzengleichung beschreibt den Bestand $x_n$ nach $n$ Jahren?
teile:
  - typ: auswahl
    optionen:
      - '$x_{n+1} = 0{,}9\,x_n + 300$'
      - '$x_{n+1} = 0{,}1\,x_n + 300$'
      - '$x_{n+1} = x_n - 0{,}1 + 300$'
      - '$x_{n+1} = 0{,}9\,(x_n + 300)$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          $0{,}1\,x_n$ sind die Fische, die **sterben**. Übrig bleiben $90\,\%$.
      - wert: 2
        meldung: |
          $10\,\%$ ist ein Anteil des Bestands, kein fester Betrag von $0{,}1$ Fischen.
      - wert: 3
        meldung: |
          So würden auch die neu eingesetzten Fische sofort zu $10\,\%$ sterben. Laut Angabe sterben $10\,\%$ des vorhandenen Bestands, dann kommen $300$ dazu.
hinweise:
  - 'Wie viel Prozent der Fische bleiben übrig? Was kommt danach dazu?'
loesung: |
  Ansatz: Prozent und fester Betrag zusammen, also Modell $x_{n+1} = q\,x_n + c$.
  ---
  Übrig bleiben $90\,\%$, also $0{,}9\,x_n$. Dazu kommen $300$ Fische: $x_{n+1} = 0{,}9\,x_n + 300$ mit $x_0 = 2000$.
  ---
  Gleichgewicht zur Kontrolle: $\frac{300}{1 - 0{,}9} = 3000$ Fische. Der Bestand wächst also langfristig auf etwa $3000$.
```

:::beispiel[Beschränktes Wachstum]
Ein Teich bietet Platz für höchstens $S = 1000$ Seerosen. Jedes Jahr wächst die Zahl um $20\,\%$ des noch freien Platzes.
Am Anfang sind es $x_0 = 100$.

**Modell:** $x_{n+1} = x_n + 0{,}2\,(1000 - x_n)$.

**Auswerten:** $x_1 = 100 + 0{,}2 \cdot 900 = 280$ und $x_2 = 280 + 0{,}2 \cdot 720 = 424$.

**Deutung:** Der freie Platz $1000 - x_n$ schrumpft jedes Jahr um den Faktor $0{,}8$: von $900$ auf $720$, dann auf $576$.
Die Zahl der Seerosen nähert sich $1000$, ohne die Grenze zu überschreiten.
:::

:::achtung[Prozent vom falschen Wert genommen]
Falsch: „Beim beschränkten Wachstum ist $x_1 = 100 + 0{,}2 \cdot 100 = 120$.“

Richtig: Der Zuwachs ist ein Anteil des **freien Platzes** $S - x_n = 900$, nicht des Bestands. Also
$x_1 = 100 + 0{,}2 \cdot 900 = 280$. Wer $0{,}2 \cdot x_n$ nimmt, rechnet exponentielles Wachstum. Das würde die
Grenze $1000$ irgendwann überschreiten.
:::

```reflexion
frage: Warum findet man das Gleichgewicht, indem man $x_{n+1} = x_n$ setzt? Was bedeutet das im Beispiel mit den Fischen?
antwort: |
  Ein Gleichgewicht ist ein Zustand, der sich nicht mehr ändert. Wenn der Bestand dort ist, ist der nächste Bestand
  derselbe, also $x_{n+1} = x_n$. Bei den Fischen heißt das: Die Zahl der sterbenden Fische ist genau so groß wie die
  Zahl der eingesetzten. Bei $3000$ Fischen sterben $10\,\%$, also $300$, und $300$ kommen dazu.
```

```aufgabe
id: fr-dgl-gleichgewicht
titel: Gleichgewicht berechnen
niveau: 2
lernziel: 8
kompetenz: rechnen
angabe: |
  Gegeben ist $x_{n+1} = 0{,}6\,x_n + 12$ mit $x_0 = 10$.

  a) Berechne das Gleichgewicht $x^*$.

  b) Berechne $x_2$.
teile:
  - typ: zahl
    label: 'a) $x^*$'
    loesung: "12/(1 - 0.6)"
    anzeige: '30'
    fehler:
      - wert: "12/0.6"
        meldung: |
          Setze $x^* = 0{,}6\,x^* + 12$ an. Dann bleibt $0{,}4\,x^* = 12$. Geteilt wird durch $1 - q$, nicht durch $q$.
  - typ: zahl
    label: 'b) $x_2$'
    loesung: "0.6*(0.6*10 + 12) + 12"
    anzeige: '22{,}8'
    fehler:
      - wert: "18"
        meldung: |
          $18$ ist $x_1$. Wende die Regel ein zweites Mal an.
hinweise:
  - 'Im Gleichgewicht gilt $x_{n+1} = x_n = x^*$.'
  - 'Löse $x^* = 0{,}6\,x^* + 12$ nach $x^*$.'
loesung: |
  Ansatz: Das Gleichgewicht ist der Wert, der sich nicht ändert. Wir setzen $x_{n+1} = x_n = x^*$.
  ---
  a) $x^* = 0{,}6\,x^* + 12$ ergibt $0{,}4\,x^* = 12$, also $x^* = 30$. Probe: $0{,}6 \cdot 30 + 12 = 30$ ✓.
  ---
  b) $x_1 = 0{,}6 \cdot 10 + 12 = 18$ und $x_2 = 0{,}6 \cdot 18 + 12 = 22{,}8$. Die Folge steigt vom Startwert $10$ in Richtung $30$.
```

```aufgabe
id: fr-dgl-medikament
titel: Ein anderes Medikament
niveau: 2
lernziel: 8
kompetenz: modellieren
angabe: |
  Ein Medikament wird täglich zu $30\,\%$ abgebaut. Jeden Tag nimmt eine Patientin $70$ mg ein.

  a) Stelle die Differenzengleichung für die Menge $x_n$ direkt nach der $n$-ten Einnahme auf. Wie lautet der Faktor $q$?

  b) Bei welcher Menge (in mg, eine Nachkommastelle) stellt sich langfristig ein Gleichgewicht ein?
teile:
  - typ: zahl
    label: 'a) $q$'
    loesung: "0.7"
    anzeige: '0{,}7'
    fehler:
      - wert: "0.3"
        meldung: |
          $30\,\%$ werden abgebaut. Übrig bleiben $70\,\%$, also $q = 0{,}7$.
  - typ: zahl
    label: 'b) Gleichgewicht'
    einheit: mg
    loesung: "70/(1 - 0.7)"
    anzeige: '233{,}3'
    toleranz: 0.1
    fehler:
      - wert: "70/0.7"
        meldung: |
          Im Gleichgewicht ist $x^* = 0{,}7\,x^* + 70$, also $0{,}3\,x^* = 70$. Geteilt wird durch $1 - q = 0{,}3$.
hinweise:
  - 'Übrig bleiben $70\,\%$, dann kommen $70$ mg dazu: $x_{n+1} = 0{,}7\,x_n + 70$.'
  - 'Gleichgewicht: $x^* = 0{,}7\,x^* + 70$.'
loesung: |
  Ansatz: Abbau um einen Prozentsatz und Zufuhr eines festen Betrags, also $x_{n+1} = q\,x_n + c$.
  ---
  a) Übrig bleiben $70\,\%$: $q = 0{,}7$ und $x_{n+1} = 0{,}7\,x_n + 70$.
  ---
  b) $x^* = 0{,}7\,x^* + 70$ ergibt $0{,}3\,x^* = 70$, also $x^* = \frac{70}{0{,}3} \approx 233{,}3$ mg.
  ---
  Kontrolle: Bei $233{,}3$ mg baut der Körper $30\,\%$ ab, das sind $70$ mg. Genau so viel kommt neu dazu ✓.
```

```aufgabe
id: fr-dgl-logistisch
titel: Wachstum mit Bremse
niveau: 2
lernziel: 8
kompetenz: begruenden
angabe: |
  Eine Population wächst nach dem **logistischen** Modell $x_{n+1} = x_n + 0{,}5\,x_n\left(1 - \dfrac{x_n}{1000}\right)$
  mit $x_0 = 100$. Der Faktor $1 - \frac{x_n}{1000}$ wirkt wie eine Bremse.

  a) Berechne $x_1$.

  b) Warum wächst die Population nie über $1000$ hinaus, solange sie darunter startet? Erkläre anschaulich.
teile:
  - typ: zahl
    label: 'a) $x_1$'
    loesung: "100 + 0.5*100*(1 - 100/1000)"
    anzeige: '145'
    fehler:
      - wert: "150"
        meldung: |
          Das wäre ungebremstes Wachstum um $50\,\%$. Der Bremsfaktor $1 - \frac{100}{1000} = 0{,}9$ fehlt.
  - typ: text
    label: 'b)'
    muster: |
      Je näher $x_n$ an $1000$ kommt, desto näher ist der Bremsfaktor $1 - \frac{x_n}{1000}$ an $0$. Dann wird der
      Zuwachs immer kleiner. Bei $x_n = 1000$ ist der Zuwachs genau $0$. Die Population nähert sich also der
      Grenze $1000$, statt wie beim exponentiellen Modell über jede Grenze zu wachsen.
hinweise:
  - 'Setze $x_0 = 100$ in die Gleichung ein. Der Bremsfaktor ist $1 - 0{,}1$.'
  - 'Was passiert mit dem Bremsfaktor, wenn $x_n$ nahe bei $1000$ liegt?'
loesung: |
  Ansatz: Den Startwert einsetzen und danach den Bremsfaktor deuten.
  ---
  a) $x_1 = 100 + 0{,}5 \cdot 100 \cdot (1 - 0{,}1) = 100 + 45 = 145$.
  ---
  b) Am Anfang ist der Bremsfaktor fast $1$, und es geht fast exponentiell aufwärts. Nahe bei $1000$ wird er fast $0$, der Zuwachs verschwindet.
  ---
  Für Werte unter $1000$ ist der Zuwachs zwar positiv, aber er überspringt die Grenze in diesem Modell nicht. Rechnet man den Abstand zur Grenze aus, erhält man $1000 - x_{n+1} = (1000 - x_n)\left(1 - \frac{x_n}{2000}\right)$. Für $0 < x_n < 1000$ liegt der Faktor $1 - \frac{x_n}{2000}$ zwischen $0{,}5$ und $1$. Der Abstand wird also kleiner, bleibt aber positiv. Zum Vergleich: Der nächste Wert ist $x_2 \approx 207$. Das Modell beschreibt realistisch, dass Lebensraum und Nahrung begrenzt sind.
```

```aufgabe
id: fr-dgl-beschraenkt
titel: Verbreitung eines Geräts
niveau: 3
lernziel: 8
kompetenz: modellieren
angabe: |
  In einer Stadt gibt es $50\,000$ Haushalte. Anfangs besitzen $5000$ Haushalte ein neues Gerät. Jedes Jahr kaufen
  $15\,\%$ der Haushalte, die noch keines haben, eines dazu. Es sei $x_n$ die Zahl der Haushalte mit Gerät nach $n$ Jahren.

  a) Berechne $x_2$.

  b) Nach wie vielen Jahren besitzen erstmals mindestens $40\,000$ Haushalte das Gerät?
teile:
  - typ: zahl
    label: 'a) $x_2$'
    loesung: "50000 - 45000*0.85^2"
    anzeige: '17487{,}5'
    fehler:
      - wert: "5000*1.15^2"
        meldung: |
          Das wäre exponentielles Wachstum. Die $15\,\%$ beziehen sich auf die Haushalte **ohne** Gerät, also auf $50\,000 - x_n$.
  - typ: zahl
    label: 'b) Jahre'
    loesung: "10"
    fehler:
      - wert: "9"
        meldung: |
          Die Grenze liegt bei $9{,}25$ Jahren. Nach $9$ Jahren sind es erst etwa $39\,577$ Haushalte.
hinweise:
  - 'Modell: $x_{n+1} = x_n + 0{,}15\,(50\,000 - x_n)$. Der Rest $50\,000 - x_n$ schrumpft jedes Jahr um den Faktor $0{,}85$.'
  - 'Also $50\,000 - x_n = 45\,000 \cdot 0{,}85^n$. Gesucht ist $n$ mit $45\,000 \cdot 0{,}85^n \le 10\,000$.'
loesung: |
  Ansatz: Beschränktes Wachstum mit Grenze $S = 50\,000$ und $k = 0{,}15$: $x_{n+1} = x_n + 0{,}15\,(50\,000 - x_n)$.
  ---
  a) $x_1 = 5000 + 0{,}15 \cdot 45\,000 = 11\,750$ und $x_2 = 11\,750 + 0{,}15 \cdot 38\,250 = 17\,487{,}5$. Das Modell liefert hier keine ganze Zahl. In Wirklichkeit sind es also etwa $17\,488$ Haushalte.
  ---
  b) Der Rest ohne Gerät schrumpft jedes Jahr um den Faktor $0{,}85$: $50\,000 - x_n = 45\,000 \cdot 0{,}85^n$. Mindestens $40\,000$ mit Gerät heißt: höchstens $10\,000$ ohne Gerät.
  ---
  $45\,000 \cdot 0{,}85^n \le 10\,000$ ergibt $0{,}85^n \le \frac29$. Logarithmieren und durch $\ln 0{,}85 < 0$ teilen: $n \ge \frac{\ln(2/9)}{\ln 0{,}85} \approx 9{,}25$. Also nach $10$ Jahren.
  ---
  Kontrolle: $x_9 \approx 39\,577$ und $x_{10} \approx 41\,141$ ✓.
gefuehrt:
  - text: Wie viele Haushalte haben am Anfang noch kein Gerät?
    teil: { typ: zahl, loesung: "50000 - 5000" }
    erklaerung: '$45\,000$ Haushalte. Von ihnen kaufen im ersten Jahr $15\,\%$ ein Gerät.'
  - text: Berechne $x_1$.
    teil:
      typ: zahl
      loesung: "5000 + 0.15*45000"
      fehler:
        - wert: "5750"
          meldung: 'Die $15\,\%$ beziehen sich auf die $45\,000$ Haushalte ohne Gerät, nicht auf die $5000$ mit Gerät.'
    erklaerung: '$x_1 = 5000 + 6750 = 11\,750$.'
  - text: Überlege, um welchen Faktor der Rest ohne Gerät jedes Jahr schrumpft.
    erklaerung: 'Von den Haushalten ohne Gerät bleiben $85\,\%$ ohne Gerät. Der Rest schrumpft also um den Faktor $0{,}85$: $45\,000 \cdot 0{,}85^n$.'
  - text: Ab welchem $n$ ist $45\,000 \cdot 0{,}85^n \le 10\,000$?
    teil: { typ: zahl, loesung: "10" }
    erklaerung: '$n \ge \frac{\ln(2/9)}{\ln 0{,}85} \approx 9{,}25$, also $n = 10$.'
```

:::merke[Rezept: rekursive Modelle]
1. In Worten klären: Welcher Anteil bleibt, welcher feste Betrag kommt dazu oder geht weg?
2. Modell aufstellen: $x_{n+1} = q\,x_n + c$ oder beim beschränkten Wachstum $x_{n+1} = x_n + k\,(S - x_n)$.
3. Schrittweise auswerten und eine Tabelle anlegen.
4. Langzeitverhalten: Gleichgewicht aus $x^* = q\,x^* + c$. Für $0 < q < 1$ nähert sich die Folge dem Gleichgewicht.
:::

## Gemischte Wiederholung

In der Prüfung steht nicht dabei, aus welchem Kapitel eine Aufgabe stammt. Du musst selbst erkennen, welches Werkzeug
passt. Deshalb mischt diese Lektion Aufgaben aus diesem Kapitel mit Aufgaben aus früheren Kapiteln. Gemischtes Üben
fühlt sich schwerer an als Üben in Blöcken. Es verankert den Stoff aber nachweislich besser. Löse jede Aufgabe zuerst
ohne Hinweise.

```aufgabe
id: fr-wh-halbwertszeit
titel: "Wiederholung Kapitel 4: Halbwertszeit"
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Ein Stoff wird jede Stunde um $8\,\%$ abgebaut. Nach wie vielen Stunden ist nur noch die Hälfte da? Runde auf zwei
  Nachkommastellen. Zum Nachlesen: [Kapitel 4, Wachstums- und Zerfallsmodelle](/lernen/mathe3/funktionen/wachstums-und-zerfallsmodelle).
teile:
  - typ: zahl
    einheit: h
    loesung: "ln(0.5)/ln(0.92)"
    anzeige: '8{,}31'
    toleranz: 0.01
    fehler:
      - wert: "50/8"
        meldung: |
          Das wäre linearer Abbau von $8$ Prozentpunkten des Anfangswerts pro Stunde. Bei prozentuellem Abbau wird der Abbau immer kleiner, also dauert es länger.
hinweise:
  - 'Löse $0{,}92^t = 0{,}5$ mit dem Logarithmus.'
loesung: |
  **Ansatz:** Pro Stunde bleiben $92\,\%$. Die Mengen bilden eine geometrische Folge mit $q = 0{,}92$. Gesucht ist $t$ mit $0{,}92^t = 0{,}5$.
  ---
  Logarithmieren: $t = \frac{\ln 0{,}5}{\ln 0{,}92} \approx 8{,}31$ Stunden. Beide Logarithmen sind negativ, der Quotient ist positiv.
```

```aufgabe
id: fr-wh-gauss-gleichung
titel: "Wiederholung Kapitel 2: Quadratische Gleichung mit der Gauß-Summe"
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Für welches $n$ ist $1 + 2 + 3 + \dots + n = 210$? Zum Nachlesen:
  [Kapitel 2, Quadratische Gleichungen](/lernen/mathe3/gleichungen/quadratische-gleichungen).
teile:
  - typ: zahl
    label: '$n$'
    loesung: "(-1 + sqrt(1 + 8*210))/2"
    anzeige: '20'
    fehler:
      - wert: "21"
        meldung: |
          Probe: $\frac{21 \cdot 22}{2} = 231$. Du hast vermutlich $n + 1$ statt $n$ angegeben.
      - wert: "-21"
        meldung: |
          $-21$ löst zwar die quadratische Gleichung, ist aber keine Anzahl von Summanden.
hinweise:
  - 'Gauß-Summe: $\frac{n(n + 1)}{2} = 210$. Multipliziere mit $2$.'
  - 'Es entsteht $n^2 + n - 420 = 0$.'
loesung: |
  **Ansatz:** Die Summe ist die Gauß-Summe $\frac{n(n + 1)}{2}$. Wir setzen sie gleich $210$.
  ---
  $n(n + 1) = 420$, also $n^2 + n - 420 = 0$. Lösungsformel: $n = \frac{-1 \pm \sqrt{1 + 1680}}{2} = \frac{-1 \pm 41}{2}$.
  ---
  Die positive Lösung ist $n = 20$. Probe: $\frac{20 \cdot 21}{2} = 210$ ✓.
```

```aufgabe
id: fr-wh-logarithmus
titel: "Wiederholung Kapitel 1: Wie oft verdoppeln?"
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Eine Datei wird bei jedem Schritt doppelt so groß. Sie beginnt bei $1$ kB. Nach wie vielen Schritten ist sie $1024$ kB
  groß? Zum Nachlesen: [Kapitel 1, Logarithmen](/lernen/mathe3/zahlen/logarithmen).
teile:
  - typ: zahl
    loesung: "log(1024, 2)"
    anzeige: '10'
    fehler:
      - wert: "512"
        meldung: |
          Gefragt ist die Anzahl der Verdopplungen, nicht die Größe. Gesucht ist $n$ mit $2^n = 1024$.
      - wert: "11"
        meldung: |
          Nach $n$ Schritten ist die Größe $2^n$ kB, denn am Anfang ($n = 0$) ist sie $1 = 2^0$ kB. Also $2^n = 1024$.
hinweise:
  - 'Nach $n$ Schritten ist die Größe $2^n$ kB. Löse $2^n = 1024$.'
loesung: |
  **Ansatz:** Die Größen bilden eine geometrische Folge $1, 2, 4, \dots$ mit $2^n$ kB nach $n$ Schritten.
  ---
  $2^n = 1024 = 2^{10}$, also $n = \log_2 1024 = 10$ Schritte.
```

```aufgabe
id: fr-wh-lineare-funktion
titel: "Wiederholung Kapitel 4: Lineare Funktion und arithmetische Folge"
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Die Folge $a_n = f(n)$ entsteht aus der linearen Funktion $f(x) = 2{,}5x + 4$. Welche Differenz $d$ hat diese
  arithmetische Folge? Zum Nachlesen: [Kapitel 4, Lineare Funktionen](/lernen/mathe3/funktionen/lineare-funktionen).
teile:
  - typ: zahl
    label: '$d$'
    loesung: "2.5"
    anzeige: '2{,}5'
    fehler:
      - wert: "4"
        meldung: |
          $4$ ist der Achsenabschnitt. Die Differenz ist die Änderung pro Schritt, also die Steigung.
      - wert: "6.5"
        meldung: |
          $6{,}5$ ist das erste Glied $a_1 = f(1)$. Die Differenz ist $a_2 - a_1$.
hinweise:
  - 'Berechne $a_1$ und $a_2$ und bilde die Differenz.'
loesung: |
  **Ansatz:** Bei einer linearen Funktion ist die Änderung pro Schritt nach rechts die Steigung.
  ---
  $a_1 = 6{,}5$ und $a_2 = 9$, also $d = 2{,}5$. Das ist genau die Steigung $k = 2{,}5$ von $f$.
```

```aufgabe
id: fr-wh-prozent
titel: "Wiederholung Kapitel 1: Erst plus, dann minus"
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: |
  Ein Preis steigt zuerst um $10\,\%$ und sinkt dann um $10\,\%$. Mit welchem Faktor wurde der ursprüngliche Preis
  insgesamt multipliziert? Zum Nachlesen: [Kapitel 1, Prozentrechnung](/lernen/mathe3/zahlen/prozentrechnung).
teile:
  - typ: zahl
    label: 'Gesamtfaktor'
    loesung: "1.1*0.9"
    anzeige: '0{,}99'
    fehler:
      - wert: "1"
        meldung: |
          Plus und minus $10\,\%$ heben sich nicht auf. Die $10\,\%$ Abnahme beziehen sich auf den **erhöhten** Preis.
hinweise:
  - 'Faktoren hintereinander werden multipliziert: $1{,}1 \cdot 0{,}9$.'
  - 'Denk an Zinseszins: Auch dort multipliziert man die Faktoren der einzelnen Jahre.'
loesung: |
  **Ansatz:** Prozentänderungen nacheinander werden als Faktoren multipliziert, genau wie bei geometrischen Folgen.
  ---
  $1{,}1 \cdot 0{,}9 = 0{,}99$. Der Preis ist insgesamt um $1\,\%$ gesunken.
  ---
  Probe mit $100$ Euro: $110$ Euro, dann $110 - 11 = 99$ Euro ✓.
```

```aufgabe
id: fr-wh-verfahren-reihen
titel: Welches Verfahren passt bei diesen Situationen?
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  Entscheide für jede Situation, welches Werkzeug am besten passt. Rechne nichts aus.
teile:
  - typ: auswahl
    label: 'Gesamtzahl der Plätze, wenn jede Reihe $2$ Plätze mehr hat als die vorige'
    optionen: ['arithmetische Summenformel', 'geometrische Summenformel', 'Zinseszinsformel', 'Rentenformel']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Es kommt ein fester **Betrag** dazu, kein fester Faktor.'
  - typ: auswahl
    label: 'Guthaben nach $10$ Jahren bei einer einmaligen Einzahlung'
    optionen: ['arithmetische Summenformel', 'geometrische Summenformel', 'Zinseszinsformel', 'Rentenformel']
    richtig: [2]
    fehler:
      - wert: 3
        meldung: 'Eine Rente sind **viele** Zahlungen. Hier gibt es nur eine einzige Einzahlung.'
  - typ: auswahl
    label: 'Guthaben nach $10$ Jahren bei jährlicher Einzahlung von $500$ Euro'
    optionen: ['arithmetische Summenformel', 'geometrische Summenformel', 'Zinseszinsformel', 'Rentenformel']
    richtig: [3]
    fehler:
      - wert: 2
        meldung: 'Jede der zehn Einzahlungen wird unterschiedlich lange verzinst. Ihre Summe ist eine Rente.'
  - typ: auswahl
    label: 'Gesamtzahl der Körner, wenn sich die Zahl auf jedem Feld verdreifacht'
    optionen: ['arithmetische Summenformel', 'geometrische Summenformel', 'Zinseszinsformel', 'Rentenformel']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Verdreifachen ist ein fester **Faktor**. Die Summe ist also geometrisch.'
hinweise:
  - 'Kommt jedes Mal ein fester Betrag oder ein fester Faktor dazu? Gibt es eine Zahlung oder viele?'
loesung: |
  **Ansatz:** Fester Betrag heißt arithmetisch, fester Faktor heißt geometrisch. Bei Geld unterscheidet man eine Zahlung (Zinseszins) und viele Zahlungen (Rente).
  ---
  Plätze: arithmetisch. Einmalige Einzahlung: Zinseszins. Jährliche Einzahlungen: Rente. Körner: geometrische Summe.
```

```aufgabe
id: fr-wh-verfahren-beweis
titel: Welche Beweismethode passt?
niveau: 2
lernziel: 6
kompetenz: verstehen
angabe: |
  Entscheide für jede Behauptung, wie man sie am besten zeigt oder widerlegt. Rechne nichts aus.
teile:
  - typ: auswahl
    label: '„Für alle $n \ge 1$ ist $1 + 4 + 7 + \dots + (3n - 2) = \frac{n(3n - 1)}{2}$.“'
    optionen: ['vollständige Induktion', 'ein Gegenbeispiel angeben', 'ein paar Werte einsetzen genügt']
    richtig: [0]
    fehler:
      - wert: 2
        meldung: 'Einsetzen liefert nur eine Vermutung. Eine Aussage über **alle** $n$ braucht einen Beweis.'
  - typ: auswahl
    label: '„Für alle $n \ge 1$ ist $n^2 + n + 11$ eine Primzahl.“'
    optionen: ['vollständige Induktion', 'ein Gegenbeispiel angeben', 'ein paar Werte einsetzen genügt']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Probiere $n = 10$: $100 + 10 + 11 = 121 = 11^2$. Eine falsche Aussage kann man nicht beweisen.'
  - typ: auswahl
    label: '„Für alle $n \ge 1$ ist $6^n - 1$ durch $5$ teilbar.“'
    optionen: ['vollständige Induktion', 'ein Gegenbeispiel angeben', 'ein paar Werte einsetzen genügt']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Teste $n = 1, 2, 3$: $5$, $35$, $215$. Alle sind durch $5$ teilbar. Ein Gegenbeispiel gibt es nicht.'
hinweise:
  - 'Teste jede Behauptung zuerst mit kleinen Zahlen. Findest du einen Fall, in dem sie falsch ist?'
loesung: |
  **Ansatz:** Eine Aussage über alle $n$ widerlegt ein einziges Gegenbeispiel. Beweisen kann man sie nur allgemein, etwa mit Induktion.
  ---
  Die Summenformel und die Teilbarkeit stimmen. Man beweist sie mit vollständiger Induktion. Bei $n^2 + n + 11$ ist $n = 10$ ein Gegenbeispiel, denn $121 = 11 \cdot 11$.
  ---
  „Ein paar Werte einsetzen“ ist nie ein Beweis für eine Aussage über unendlich viele Zahlen.
```

```aufgabe
id: fr-wh-arith-und-geo
titel: Arithmetisch und geometrisch zugleich?
niveau: 2
lernziel: 1
kompetenz: begruenden
angabe: |
  Welche Folgen sind **zugleich** arithmetisch und geometrisch?
teile:
  - typ: auswahl
    optionen:
      - 'genau die konstanten Folgen $c, c, c, \dots$ mit $c \neq 0$'
      - 'alle Folgen mit $d = q$'
      - 'keine einzige Folge'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Probiere $d = q = 2$ mit $a_1 = 1$: arithmetisch $1, 3, 5$, geometrisch $1, 2, 4$. Das sind verschiedene Folgen.
      - wert: 2
        meldung: |
          Die Folge $5, 5, 5, \dots$ hat $d = 0$ und $q = 1$. Sie ist beides.
hinweise:
  - 'Aus drei Gliedern $a, a + d, a + 2d$ soll eine geometrische Folge werden. Was muss für $d$ gelten?'
  - 'Geometrisch heißt: $(a + d)^2 = a\,(a + 2d)$.'
loesung: |
  **Ansatz:** Wir verlangen beides von den ersten drei Gliedern $a, a + d, a + 2d$.
  ---
  Geometrisch heißt: Das mittlere Glied zum Quadrat ist das Produkt der Nachbarn, $(a + d)^2 = a(a + 2d)$. Ausmultipliziert: $a^2 + 2ad + d^2 = a^2 + 2ad$, also $d^2 = 0$ und $d = 0$.
  ---
  Mit $d = 0$ ist die Folge konstant. Ein Glied $0$ ist bei geometrischen Folgen verboten. Also sind es genau die konstanten Folgen mit $c \neq 0$.
```

```aufgabe
id: fr-wh-summe-gemischt
titel: Eine gemischte Summe
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Berechne $\displaystyle\sum_{k=1}^{6} \left(2^k + k\right)$.
teile:
  - typ: zahl
    loesung: "2*(2^6 - 1) + 6*7/2"
    anzeige: '147'
    fehler:
      - wert: "2^6 - 1 + 21"
        meldung: |
          Die geometrische Summe beginnt bei $2^1 = 2$, nicht bei $2^0 = 1$. Also $2 + 4 + \dots + 64 = 126$.
      - wert: "126 + 6"
        meldung: |
          Der zweite Teil ist $\sum_{k=1}^{6} k = 1 + 2 + \dots + 6 = 21$, nicht $6$.
hinweise:
  - 'Teile die Summe auf: $\sum 2^k + \sum k$.'
  - 'Der erste Teil ist geometrisch mit erstem Glied $2$, der zweite ist eine Gauß-Summe.'
loesung: |
  **Ansatz:** Summen darf man aufteilen. Der erste Teil ist geometrisch, der zweite arithmetisch.
  ---
  $\sum_{k=1}^{6} 2^k = 2 \cdot \frac{2^6 - 1}{2 - 1} = 126$ und $\sum_{k=1}^{6} k = \frac{6 \cdot 7}{2} = 21$.
  ---
  Zusammen $126 + 21 = 147$.
```

## Prüfungsaufgaben

Diese Aufgaben haben das Format der schriftlichen Prüfung: mehrere Teilaufgaben, ein Sachzusammenhang und Begründungen.
Bei jeder Aufgabe steht ein Richtwert für die Zeit. Schreib Ansatz, Rechnung und Antwortsatz sauber auf. Die Originale
der Musterprüfungen sind für die [Prüfungssimulationen](/lernen/mathe3/pruefung) reserviert. Hier übst du an
abgewandelten Varianten.

```aufgabe
id: fr-pruefung-folge-untersuchen
titel: Eine Folge vollständig untersuchen
niveau: 3
punkte: 10
lernziel: 7
kompetenz: begruenden
quelle: nach Musterprüfung Schranz-Kirlinger, Aufgabe 2.3 (abgewandelt)
angabe: |
  Richtwert: $20$ Minuten. Gegeben ist die Folge $\{a_n\}_{n \in \N}$ mit $a_n = \dfrac{4n + 1}{2n + 3}$, $n \ge 1$.

  a) Gib die ersten vier Glieder an.

  b) Stelle eine Vermutung über die Monotonie auf und begründe sie mit der Differenz $a_{n+1} - a_n$.

  c) Ist die Folge nach oben beziehungsweise nach unten beschränkt? Begründe.

  d) Gegen welchen Wert strebt die Folge vermutlich? Ab welchem Index ist der Abstand zu diesem Wert kleiner als $0{,}01$?
teile:
  - typ: zahl
    label: 'a) $a_4$'
    loesung: "17/11"
    anzeige: '\tfrac{17}{11}'
    fehler:
      - wert: "17/8"
        meldung: |
          Im Nenner steht $2n + 3$. Für $n = 4$ ist das $11$.
  - typ: auswahl
    label: 'b) Monotonie'
    optionen:
      - streng monoton wachsend
      - streng monoton fallend
      - nicht monoton
    richtig: [0]
  - typ: text
    label: 'b) Begründung und c) Schranken'
    muster: |
      $a_{n+1} - a_n = \frac{4n + 5}{2n + 5} - \frac{4n + 1}{2n + 3} = \frac{(4n+5)(2n+3) - (4n+1)(2n+5)}{(2n+5)(2n+3)} = \frac{10}{(2n+5)(2n+3)} > 0$,
      also streng monoton wachsend. Untere Schranke $a_1 = 1$ (die größte, weil die Folge wächst).
      Obere Schranke $2$, denn $2 - a_n = \frac{5}{2n + 3} > 0$.
  - typ: zahl
    label: 'd) vermuteter Grenzwert'
    loesung: "2"
    fehler:
      - wert: "4"
        meldung: |
          Für großes $n$ zählen nur die Terme mit $n$: $\frac{4n}{2n} = 2$.
  - typ: zahl
    label: 'd) kleinster Index $n$ mit Abstand $< 0{,}01$'
    loesung: "249"
    toleranz: 0.5
    fehler:
      - wert: "248"
        meldung: |
          Für $n = 248$ ist der Abstand $\frac{5}{499} \approx 0{,}01002$, also noch nicht kleiner als $0{,}01$.
hinweise:
  - 'b) $a_{n+1} = \frac{4n + 5}{2n + 5}$, dann auf den gemeinsamen Nenner bringen.'
  - 'c) Berechne $2 - a_n$ als einen Bruch. d) $\frac{5}{2n + 3} < 0{,}01$ heißt $2n + 3 > 500$.'
loesung: |
  **Ansatz:** Zuerst Glieder für eine Vermutung, dann die Differenz für die Monotonie, dann den Abstand zur vermuteten Grenze.
  ---
  a) $a_1 = \frac55 = 1$, $a_2 = \frac97$, $a_3 = \frac{13}{9}$, $a_4 = \frac{17}{11}$. Dezimal: $1;\ 1{,}286;\ 1{,}444;\ 1{,}545$. Vermutung: streng monoton wachsend.
  ---
  b) $a_{n+1} - a_n = \frac{(4n+5)(2n+3) - (4n+1)(2n+5)}{(2n+5)(2n+3)}$. Zähler: $(8n^2 + 22n + 15) - (8n^2 + 22n + 5) = 10$. Also ist $a_{n+1} - a_n = \frac{10}{(2n+5)(2n+3)} > 0$ für alle $n \ge 1$: streng monoton wachsend.
  ---
  c) Wegen der Monotonie ist $a_n \ge a_1 = 1$. Nach oben: $2 - a_n = \frac{2(2n+3) - (4n+1)}{2n+3} = \frac{5}{2n+3} > 0$, also $a_n < 2$. Die Folge ist beschränkt: $1 \le a_n < 2$.
  ---
  d) Der Abstand $\frac{5}{2n+3}$ wird beliebig klein, also strebt $a_n$ gegen $2$. Aus $\frac{5}{2n+3} < 0{,}01$ folgt $2n + 3 > 500$, also $n > 248{,}5$ und $n = 249$.
  ---
  Kontrolle: $n = 248$ liefert $\frac{5}{499} \approx 0{,}01002$, $n = 249$ liefert $\frac{5}{501} \approx 0{,}00998$ ✓. Den exakten Grenzwertbeweis lernst du in [11.4 Einen Grenzwert mit der Definition beweisen](/lernen/mathe3/grenzwerte-folgen/einen-grenzwert-mit-der-definition-beweisen).
```

```aufgabe
id: fr-pruefung-sparplan
titel: Sparplan für die Ausbildung
niveau: 3
punkte: 10
lernziel: 5
kompetenz: modellieren
angabe: |
  Richtwert: $20$ Minuten. Eltern zahlen für ihr Kind ab der Geburt am Ende jedes Monats $200$ Euro auf ein Sparkonto
  ein. Die Bank verzinst monatlich mit $0{,}2\,\%$.

  a) Begründe, warum das Guthaben nach der letzten Einzahlung eine geometrische Reihe ist. Gib das Guthaben nach $15$ Jahren an (auf Cent).

  b) Wie viel davon sind Zinsen?

  c) Nach wie vielen Monaten ist das Guthaben erstmals mindestens $50\,000$ Euro?
teile:
  - typ: zahl
    label: 'a) Guthaben nach 15 Jahren'
    einheit: Euro
    loesung: "200*(1.002^180 - 1)/0.002"
    anzeige: '43281{,}42'
    toleranz: 0.05
    fehler:
      - wert: "200*(1.024^15 - 1)/0.024"
        meldung: |
          Du hast mit Jahren gerechnet. Die Einzahlungen und die Verzinsung sind aber monatlich: $n = 180$ Monate und $q = 1{,}002$.
  - typ: zahl
    label: 'b) Zinsen'
    einheit: Euro
    loesung: "200*(1.002^180 - 1)/0.002 - 180*200"
    anzeige: '7281{,}42'
    toleranz: 0.05
  - typ: zahl
    label: 'c) Monate'
    loesung: "203"
    toleranz: 0.5
    fehler:
      - wert: "202"
        meldung: |
          Die Grenze liegt bei $202{,}94$. Nach $202$ Monaten sind es erst etwa $49\,720$ Euro.
hinweise:
  - 'Die Einzahlung im Monat $k$ wird noch $180 - k$ Monate verzinst. Endwert der nachschüssigen Rente mit $n = 180$.'
  - 'c) $200 \cdot \frac{1{,}002^n - 1}{0{,}002} \ge 50\,000$ führt auf $1{,}002^n \ge 1{,}5$.'
loesung: |
  **Ansatz:** Periode ist der Monat. Jede Einzahlung wird bis zum Ende unterschiedlich lange verzinst. Das ist eine nachschüssige Rente.
  ---
  a) Die Einzahlung am Ende von Monat $k$ liegt noch $180 - k$ Monate auf dem Konto. Sie ist dann $200 \cdot 1{,}002^{180 - k}$ wert. Diese Werte bilden die geometrische Folge $200, 200 \cdot 1{,}002, \dots, 200 \cdot 1{,}002^{179}$. Ihre Summe ist
  $$E = 200 \cdot \frac{1{,}002^{180} - 1}{0{,}002} \approx 200 \cdot \frac{1{,}432814 - 1}{0{,}002} \approx 43\,281{,}42 \text{ Euro}.$$
  ---
  b) Eingezahlt: $180 \cdot 200 = 36\,000$ Euro. Zinsen: $\approx 7281{,}42$ Euro.
  ---
  c) $200 \cdot \frac{1{,}002^n - 1}{0{,}002} \ge 50\,000$ ergibt $1{,}002^n - 1 \ge 0{,}5$, also $n \ge \frac{\ln 1{,}5}{\ln 1{,}002} \approx 202{,}94$.
  ---
  **Antwort:** nach $203$ Monaten, also nach $16$ Jahren und $11$ Monaten. Kontrolle: $E_{202} \approx 49\,719{,}98$ Euro und $E_{203} \approx 50\,019{,}42$ Euro ✓.
```

```aufgabe
id: fr-pruefung-kredit
titel: Autokredit mit Monatsraten
niveau: 3
punkte: 10
lernziel: 5
kompetenz: anwenden
angabe: |
  Richtwert: $25$ Minuten. Für ein Auto wird ein Kredit über $15\,000$ Euro aufgenommen. Er soll in $48$ gleich hohen
  Monatsraten jeweils am Monatsende zurückgezahlt werden. Der Monatszinssatz beträgt $0{,}5\,\%$.

  a) Berechne die Monatsrate (auf Cent).

  b) Wie viel Zinsen zahlt man insgesamt?

  c) Wie hoch ist die Restschuld nach $24$ Raten, also nach der Hälfte der Laufzeit? Warum ist sie größer als die Hälfte der Kreditsumme?

  d) Wie hoch ist der effektive Jahreszinssatz in Prozent, auf zwei Nachkommastellen?
teile:
  - typ: zahl
    label: 'a) Rate'
    einheit: Euro
    loesung: "15000*1.005^48*0.005/(1.005^48 - 1)"
    anzeige: '352{,}28'
    toleranz: 0.01
    fehler:
      - wert: "15000/48*1.005"
        meldung: |
          So würden nur auf einen kleinen Teil der Schuld Zinsen gezahlt. Ansatz: Barwert der $48$ Raten gleich Kreditsumme.
  - typ: zahl
    label: 'b) Zinsen gesamt'
    einheit: Euro
    loesung: "48*15000*1.005^48*0.005/(1.005^48 - 1) - 15000"
    anzeige: '1909{,}22'
    toleranz: 0.5
  - typ: zahl
    label: 'c) Restschuld nach 24 Raten'
    einheit: Euro
    loesung: "15000*1.005^24 - 15000*1.005^48*0.005/(1.005^48 - 1)*(1.005^24 - 1)/0.005"
    anzeige: '7948{,}34'
    toleranz: 0.5
    fehler:
      - wert: "7500"
        meldung: |
          Nach der halben Zeit ist nicht die halbe Schuld getilgt. Rechne mit $K_k = K_0 q^k - A\frac{q^k - 1}{q - 1}$.
  - typ: text
    label: 'c) Begründung'
    muster: |
      Am Anfang ist die Schuld hoch, also ist der Zinsanteil jeder Rate groß und der Tilgungsanteil klein. In der
      ersten Hälfte wird deshalb weniger als die Hälfte getilgt. Der Tilgungsanteil wächst erst im Lauf der Zeit.
  - typ: zahl
    label: 'd) $i_{\text{eff}}$'
    einheit: "%"
    loesung: "100*(1.005^12 - 1)"
    anzeige: '6{,}17'
    toleranz: 0.01
    fehler:
      - wert: "6"
        meldung: |
          $12 \cdot 0{,}5\,\% = 6\,\%$ ist der nominelle Satz. Weil monatlich verzinst wird, ist der effektive Satz höher: $1{,}005^{12} - 1$.
hinweise:
  - 'Annuitätenformel mit $q = 1{,}005$ und $n = 48$.'
  - 'Restschuld: aufgezinste Kreditsumme minus Endwert der bisher gezahlten Raten.'
loesung: |
  **Ansatz:** Periode ist der Monat, $q = 1{,}005$, $n = 48$. Der Barwert aller Raten muss gleich der Kreditsumme sein.
  ---
  a) $A = 15\,000 \cdot \frac{1{,}005^{48} \cdot 0{,}005}{1{,}005^{48} - 1} \approx 15\,000 \cdot \frac{0{,}0063524}{0{,}270489} \approx 352{,}28$ Euro.
  ---
  b) Gezahlt: $48 \cdot A \approx 16\,909{,}22$ Euro mit der ungerundeten Rate $A \approx 352{,}2754$. Zinsen $\approx 1909{,}22$ Euro. Mit der gerundeten Rate $352{,}28$ Euro erhältst du $16\,909{,}44$ Euro und $1909{,}44$ Euro Zinsen. Beides gilt als richtig.
  ---
  c) $K_{24} = 15\,000 \cdot 1{,}005^{24} - A \cdot \frac{1{,}005^{24} - 1}{0{,}005} \approx 16\,907{,}40 - 8959{,}05 \approx 7948{,}34$ Euro (mit der ungerundeten Rate $A$). Mit $A = 352{,}28$ erhältst du etwa $7948{,}23$ Euro. Das ist mehr als $7500$ Euro, weil am Anfang ein großer Teil jeder Rate für Zinsen draufgeht.
  ---
  Kontrolle: Die Restschuld ist auch der Barwert der restlichen $24$ Raten: $A \cdot \frac{1 - 1{,}005^{-24}}{0{,}005} \approx 7948{,}34$ ✓.
  ---
  d) $i_{\text{eff}} = 1{,}005^{12} - 1 \approx 6{,}17\,\%$.
```

```aufgabe
id: fr-pruefung-wachstum-vergleich
titel: Lineares gegen exponentielles Wachstum
niveau: 3
punkte: 8
lernziel: 1
kompetenz: modellieren
angabe: |
  Richtwert: $20$ Minuten. Zwei Firmen planen ihren Jahresumsatz. Firma A hat im ersten Jahr $1{,}2$ Millionen Euro
  Umsatz und steigert ihn jedes Jahr um $60\,000$ Euro. Firma B hat im ersten Jahr $1{,}0$ Millionen Euro Umsatz und
  steigert ihn jedes Jahr um $6\,\%$.

  a) Gib für beide Firmen eine explizite Formel für den Umsatz $a_n$ beziehungsweise $b_n$ im Jahr $n$ an, in Millionen Euro. Welche Art von Folge liegt jeweils vor?

  b) Berechne den Gesamtumsatz beider Firmen in den ersten $10$ Jahren, in Millionen Euro auf zwei Nachkommastellen.

  c) In welchem Jahr hat Firma B erstmals einen höheren Jahresumsatz als Firma A?
teile:
  - typ: term
    label: 'a) $a_n =$'
    variable: n
    bereich: [1, 10]
    loesung: "1.2 + 0.06*(n - 1)"
    fehler:
      - wert: "1.2 + 60000*(n - 1)"
        meldung: |
          Die Formel soll in Millionen Euro sein. $60\,000$ Euro sind $0{,}06$ Millionen Euro.
  - typ: term
    label: 'a) $b_n =$'
    variable: n
    bereich: [1, 10]
    loesung: "1.06^(n - 1)"
    fehler:
      - wert: "1.06^n"
        meldung: |
          Probe mit $n = 1$: $1{,}06$ statt $1{,}0$. Im ersten Jahr gab es noch keine Steigerung.
  - typ: zahl
    label: 'b) Firma A, Summe 10 Jahre'
    loesung: "10/2*(1.2 + 1.2 + 9*0.06)"
    anzeige: '14{,}7'
  - typ: zahl
    label: 'b) Firma B, Summe 10 Jahre'
    loesung: "(1.06^10 - 1)/0.06"
    anzeige: '13{,}18'
    toleranz: 0.005
  - typ: zahl
    label: 'c) Jahr'
    loesung: "12"
    fehler:
      - wert: "11"
        meldung: |
          Im Jahr $11$ ist $a_{11} = 1{,}80$ und $b_{11} \approx 1{,}79$. Firma A liegt noch knapp vorne.
hinweise:
  - 'A: arithmetisch mit $d = 0{,}06$. B: geometrisch mit $q = 1{,}06$.'
  - 'c) Die Ungleichung $1{,}06^{n-1} > 1{,}14 + 0{,}06n$ lässt sich nicht mit Umformungen lösen. Lege eine Tabelle an.'
loesung: |
  **Ansatz:** Fester Zuwachs heißt arithmetische Folge, fester Prozentsatz heißt geometrische Folge.
  ---
  a) A: $a_n = 1{,}2 + 0{,}06\,(n - 1)$, arithmetisch. B: $b_n = 1{,}06^{n-1}$, geometrisch.
  ---
  b) A: $s_{10} = \frac{10}{2}\,(a_1 + a_{10}) = 5 \cdot (1{,}2 + 1{,}74) = 14{,}7$ Millionen Euro. B: $s_{10} = \frac{1{,}06^{10} - 1}{0{,}06} \approx \frac{0{,}790848}{0{,}06} \approx 13{,}18$ Millionen Euro.
  ---
  c) Die Gleichung enthält $n$ einmal in der Hochzahl und einmal linear. Deshalb probiert man systematisch. Jahr $10$: $a_{10} = 1{,}74$, $b_{10} \approx 1{,}69$. Jahr $11$: $a_{11} = 1{,}80$, $b_{11} \approx 1{,}79$. Jahr $12$: $a_{12} = 1{,}86$, $b_{12} \approx 1{,}90$.
  ---
  **Antwort:** Im 12. Jahr hat Firma B erstmals mehr Umsatz. Exponentielles Wachstum mit $q > 1$ und positivem Startwert überholt lineares Wachstum immer irgendwann, auch wenn es kleiner startet.
```

```aufgabe
id: fr-pruefung-induktion-rekursion
titel: Rekursion, Induktion und Summe
niveau: 3
punkte: 8
lernziel: 6
kompetenz: begruenden
angabe: |
  Richtwert: $15$ Minuten. Die Folge $(a_n)$ ist rekursiv gegeben durch $a_1 = 3$ und $a_{n+1} = 4a_n - 3$.

  a) Berechne $a_2$, $a_3$, $a_4$ und stelle eine Vermutung für eine explizite Formel auf.

  b) Beweise die Vermutung mit vollständiger Induktion.

  c) Berechne $s_{10} = a_1 + a_2 + \dots + a_{10}$.
teile:
  - typ: zahl
    label: 'a) $a_4$'
    loesung: "4*(4*(4*3 - 3) - 3) - 3"
    anzeige: '129'
    fehler:
      - wert: "33"
        meldung: |
          $33$ ist $a_3$. Wende die Rekursion noch einmal an.
  - typ: term
    label: 'a) Vermutung $a_n =$'
    variable: n
    bereich: [1, 6]
    loesung: "2*4^(n-1) + 1"
    fehler:
      - wert: "4^(n-1) + 2"
        meldung: |
          Probe mit $n = 2$: $4 + 2 = 6$, aber $a_2 = 9$. Vergleiche $a_n - 1$ mit den Viererpotenzen: $2, 8, 32$.
  - typ: text
    label: 'b) Beweis'
    muster: |
      **Anfang** $n = 1$: $2 \cdot 4^0 + 1 = 3 = a_1$ ✓.

      **IV:** Für ein $n \ge 1$ gelte $a_n = 2 \cdot 4^{n-1} + 1$.

      **Schritt:** $a_{n+1} = 4a_n - 3 \overset{\text{IV}}{=} 4\,(2 \cdot 4^{n-1} + 1) - 3 = 2 \cdot 4^n + 4 - 3 = 2 \cdot 4^n + 1$ ✓.
      Das ist die Formel für $n + 1$.
  - typ: zahl
    label: 'c) $s_{10}$'
    loesung: "2*(4^10 - 1)/3 + 10"
    anzeige: '699060'
    toleranz: 0.5
    fehler:
      - wert: "2*(4^10 - 1)/3 + 1"
        meldung: |
          Die $+1$ steht in jedem der $10$ Summanden, also kommt $10 \cdot 1 = 10$ dazu.
hinweise:
  - 'Glieder: $3, 9, 33, 129$. Zieh von jedem $1$ ab und vergleiche mit $2, 8, 32, 128$.'
  - 'c) Summe aufteilen: $\sum_{k=1}^{10} 2 \cdot 4^{k-1} + \sum_{k=1}^{10} 1$.'
loesung: |
  **Ansatz:** Erst Glieder berechnen und ein Muster suchen. Dann beweisen und schließlich die Summe aufteilen.
  ---
  a) $a_2 = 4 \cdot 3 - 3 = 9$, $a_3 = 4 \cdot 9 - 3 = 33$, $a_4 = 4 \cdot 33 - 3 = 129$. Zieht man $1$ ab, entsteht $2, 8, 32, 128$, also $2 \cdot 4^{n-1}$. Vermutung: $a_n = 2 \cdot 4^{n-1} + 1$.
  ---
  b) **Anfang:** $a_1 = 3 = 2 \cdot 4^0 + 1$ ✓. **IV:** $a_n = 2 \cdot 4^{n-1} + 1$ für ein $n \ge 1$. **Behauptung:** $a_{n+1} = 2 \cdot 4^n + 1$.
  **Schritt:** $a_{n+1} = 4a_n - 3 \overset{\text{IV}}{=} 4\,(2 \cdot 4^{n-1} + 1) - 3 = 2 \cdot 4^n + 1$ ✓. Nach dem Induktionsprinzip gilt die Formel für alle $n \ge 1$.
  ---
  c) $s_{10} = \sum_{k=1}^{10} 2 \cdot 4^{k-1} + \sum_{k=1}^{10} 1 = 2 \cdot \frac{4^{10} - 1}{4 - 1} + 10 = 2 \cdot 349\,525 + 10 = 699\,060$.
```

```aufgabe
id: fr-pruefung-dosenpyramide
titel: Eine Pyramide aus Dosen
niveau: 3
punkte: 8
lernziel: 3
kompetenz: modellieren
angabe: |
  Richtwert: $15$ Minuten. In einem Supermarkt wird eine Werbewand aus Dosen gestapelt. Die oberste Reihe hat $4$ Dosen,
  jede Reihe darunter $3$ Dosen mehr.

  a) Wie viele Dosen hat die 12. Reihe von oben?

  b) Wie viele Dosen braucht man für eine Wand mit $12$ Reihen?

  c) Es sind $500$ Dosen vorhanden. Wie viele vollständige Reihen kann man höchstens bauen?

  d) Begründe, warum man in c) abrunden muss und nicht aufrunden darf.
teile:
  - typ: zahl
    label: 'a)'
    loesung: "4 + 11*3"
    anzeige: '37'
    fehler:
      - wert: "4 + 12*3"
        meldung: |
          Die oberste Reihe ist Reihe $1$ ohne Zuwachs. Bis Reihe $12$ kommen $11$ Mal $3$ Dosen dazu.
  - typ: zahl
    label: 'b)'
    loesung: "12/2*(4 + 37)"
    anzeige: '246'
    fehler:
      - wert: "12*(4 + 37)"
        meldung: |
          Gemeint ist Anzahl mal **Mittelwert** aus erster und letzter Reihe. Teile die Klammer durch $2$.
  - typ: zahl
    label: 'c) Reihen'
    loesung: "17"
    fehler:
      - wert: "18"
        meldung: |
          Für $18$ Reihen braucht man $531$ Dosen. Das sind mehr als $500$.
  - typ: text
    label: 'd)'
    muster: |
      Die Gleichung liefert $n \approx 17{,}44$. Mit $17$ Reihen braucht man $476$ Dosen, das geht. Für $18$ Reihen
      bräuchte man $531$ Dosen, die nicht vorhanden sind. Eine angefangene Reihe zählt nicht als vollständig.
hinweise:
  - 'Arithmetische Folge mit $a_1 = 4$ und $d = 3$. Für c) stelle $s_n$ als Term in $n$ auf.'
  - 'c) $s_n = 4n + \frac{n(n - 1)}{2} \cdot 3 = 1{,}5n^2 + 2{,}5n \le 500$.'
loesung: |
  **Ansatz:** Die Dosen pro Reihe bilden eine arithmetische Folge mit $a_1 = 4$ und $d = 3$. Die Gesamtzahl ist die Partialsumme.
  ---
  a) $a_{12} = 4 + 11 \cdot 3 = 37$ Dosen.
  ---
  b) $s_{12} = \frac{12}{2}\,(4 + 37) = 6 \cdot 41 = 246$ Dosen.
  ---
  c) $s_n = 4n + \frac{n(n - 1)}{2} \cdot 3 = 1{,}5n^2 + 2{,}5n$. Aus $1{,}5n^2 + 2{,}5n = 500$ folgt $n = \frac{-2{,}5 + \sqrt{6{,}25 + 3000}}{3} \approx 17{,}44$.
  ---
  d) Kontrolle: $s_{17} = 476 \le 500$, aber $s_{18} = 531 > 500$. Also höchstens $17$ vollständige Reihen. Aufrunden ginge nicht, weil dafür Dosen fehlen.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, bevor du weiterliest. Was würdest du jemandem sagen, der wissen will, worum es bei Folgen und Reihen geht?
antwort: |
  Eine mögliche Antwort mit drei Aussagen:
  1. Eine Folge ist eine durchnummerierte Liste von Zahlen. Kommt immer derselbe Betrag dazu, ist sie arithmetisch,
     $a_n = a_1 + (n - 1)d$. Wird immer mit demselben Faktor multipliziert, ist sie geometrisch, $a_n = a_1 q^{n-1}$.
  2. Für die Summen gibt es Formeln: arithmetisch „Anzahl mal Mittelwert aus erstem und letztem Glied“, geometrisch
     $a_1 \frac{q^n - 1}{q - 1}$. Mit der geometrischen Summenformel rechnet man Sparpläne und Kredite.
  3. Aussagen für alle natürlichen Zahlen beweist man mit vollständiger Induktion: Anfang und Schritt.

  Vergleiche mit dem Kasten „Zusammenfassung“ direkt nach dieser Frage. Fehlt dir eine Aussage, lies die zugehörige Lektion noch einmal.
```

:::zusammenfassung
1. **Folge:** Jeder natürlichen Zahl $n$ wird eine Zahl $a_n$ zugeordnet. Explizit gibt eine Formel jedes Glied direkt an, rekursiv entsteht jedes Glied aus dem vorigen. Der Graph besteht aus einzelnen Punkten.
2. **Arithmetisch und geometrisch:** Konstante Differenz $d$ ergibt $a_n = a_1 + (n - 1)d$, das ist lineares Wachstum. Konstanter Quotient $q$ ergibt $a_n = a_1 q^{n-1}$, das ist exponentielles Wachstum. Ist der Index gesucht, hilft bei geometrischen Folgen der Logarithmus.
3. **Summenzeichen:** $\sum_{k=m}^{n} a_k$ hat $n - m + 1$ Summanden. Konstanten darf man herausheben, Summen aufteilen, und $\sum_{k=1}^{n} c = nc$. Beim Verschieben ändern sich Grenzen und Term gemeinsam.
4. **Summenformeln:** $s_n = \frac{n}{2}(a_1 + a_n)$ für arithmetische Reihen (Gauß-Trick) und $s_n = a_1 \frac{q^n - 1}{q - 1}$ für geometrische Reihen mit $q \neq 1$ (mit $q$ multiplizieren und abziehen). Dabei ist $n$ die Anzahl der Summanden.
5. **Geld:** Zinseszins $K_n = K_0 q^n$, Barwert $K_0 = K_n : q^n$. Zahlungen vergleicht man nur auf demselben Zeitpunkt. Renten und Kredite sind geometrische Reihen. Bei Krediten ist der Barwert der Raten gleich der Kreditsumme.
6. **Vollständige Induktion:** Gilt $A(n_0)$ und folgt aus $A(n)$ immer $A(n + 1)$, dann gilt $A(n)$ für alle $n \ge n_0$. Beide Teile sind nötig.
7. **Monotonie und Beschränktheit:** Monoton heißt, die Folge ändert ihre Richtung nie. Beschränkt heißt, es gibt eine feste Decke und einen festen Boden. Beides untersucht man über die Differenz $a_{n+1} - a_n$ und geeignete Umformungen.
8. **Vertiefung, rekursive Modelle:** $x_{n+1} = q x_n + c$ hat für $0 < q < 1$ das Gleichgewicht $x^* = \frac{c}{1 - q}$, dem sich die Folge nähert.
:::

### Die häufigsten Fehler

Jeder Fehler wird von mindestens einer Aufgabe im Kapitel trainiert. Kommt dir ein Fehler bekannt vor, löse die
genannte Aufgabe noch einmal.

1. **$n$ statt $n - 1$ Schritte.** $a_n = a_1 + n\,d$ liefert schon für $n = 1$ das falsche Glied. Prüfe jede Formel mit $n = 1$. Training: „Glied einer arithmetischen Folge“ und „Glied einer geometrischen Folge“ in [8.2 Arithmetische Folgen](/lernen/mathe3/folgen-reihen/arithmetische-folgen) und [8.3 Geometrische Folgen](/lernen/mathe3/folgen-reihen/geometrische-folgen).
2. **Glieder statt Schritte gezählt.** Zwischen $a_3$ und $a_9$ liegen $6$ Schritte, nicht $7$. Training: „Arithmetische Folge aus zwei Gliedern“ und „Zahlen gleichmäßig einschieben“ in [8.2 Arithmetische Folgen](/lernen/mathe3/folgen-reihen/arithmetische-folgen).
3. **Anzahl der Glieder um eins zu klein.** Von $105$ bis $994$ in Siebenerschritten sind es $128$ Zahlen, nicht $127$. Training: „Dreistellige Vielfache von 7“ und „Die falsche Anzahl“ in [8.5 Endliche arithmetische Reihen](/lernen/mathe3/folgen-reihen/endliche-arithmetische-reihen).
4. **Halbierung vergessen.** In $\frac{n}{2}(a_1 + a_n)$ steht der Mittelwert. Training: „Rohrstapel“ und „Gauß-Summen“ in [8.5 Endliche arithmetische Reihen](/lernen/mathe3/folgen-reihen/endliche-arithmetische-reihen).
5. **Hochzahl statt Anzahl in der geometrischen Formel.** Bei $1 + 2 + \dots + 2^9$ sind es $10$ Summanden. Training: „Geometrische Summe“ und „Summe mit verschobenem Index“ in [8.6 Endliche geometrische Reihen](/lernen/mathe3/folgen-reihen/endliche-geometrische-reihen).
6. **Konstante nur einmal gezählt.** $\sum_{k=1}^{6} 4 = 24$, nicht $4$. Training: „Summe mit den Rechenregeln“ und „Wo steckt der Fehler?“ in [8.4 Das Summenzeichen](/lernen/mathe3/folgen-reihen/das-summenzeichen).
7. **Ungleichheitszeichen nicht umgedreht.** Beim Teilen durch $\ln q < 0$ dreht sich das Zeichen. Training: „Springender Ball“ in [8.3 Geometrische Folgen](/lernen/mathe3/folgen-reihen/geometrische-folgen). Außerdem „Eine Summe, die nie 15 erreicht“ in [8.6 Endliche geometrische Reihen](/lernen/mathe3/folgen-reihen/endliche-geometrische-reihen).
8. **Aufgezinst statt abgezinst.** Der Barwert ist kleiner als der spätere Betrag. Training: „Barwert eines Sparziels“ und „Zwei Angebote vergleichen“ in [8.7 Zinseszins, Barwert und unterjährige Verzinsung](/lernen/mathe3/folgen-reihen/zinseszins-barwert-und-unterjaehrige-verzinsung).
9. **Jahreszins mit Monaten gemischt.** Periode und Zinssatz müssen zusammenpassen. Training: „Monatlicher Sparplan“ in [8.8 Renten, Kredite und Tilgungspläne](/lernen/mathe3/folgen-reihen/renten-kredite-und-tilgungsplaene). Außerdem „Vierteljährlich verzinst“ in [8.7 Zinseszins, Barwert und unterjährige Verzinsung](/lernen/mathe3/folgen-reihen/zinseszins-barwert-und-unterjaehrige-verzinsung).
10. **Alle Zahlungen gleich lange verzinst.** Bei einer Rente liegt jede Zahlung unterschiedlich lange. Training: „Endwert einer Rente“ in [8.8 Renten, Kredite und Tilgungspläne](/lernen/mathe3/folgen-reihen/renten-kredite-und-tilgungsplaene).
11. **Induktionsbehauptung nur rechts geändert.** Auch die obere Grenze der Summe enthält $n$. Training: „Induktionsbehauptung aufschreiben“ in [8.9 Vollständige Induktion](/lernen/mathe3/folgen-reihen/vollstaendige-induktion).
12. **Induktionsanfang vergessen oder Schritt nicht für jedes $n$ geprüft.** Training: „Wo steckt der Fehler?“ mit den Pferden in [8.10 Induktion bei Teilbarkeit, Ungleichungen und Rekursionen](/lernen/mathe3/folgen-reihen/induktion-bei-teilbarkeit-ungleichungen-und-rekursionen).
13. **Ein paar Glieder als Beweis genommen.** Eine Tabelle liefert nur eine Vermutung. Training: „Wann ist der Gewinn am größten?“ in [8.11 Monotonie und Beschränktheit](/lernen/mathe3/folgen-reihen/monotonie-und-beschraenktheit).

### Selbstcheck zu den Lernzielen

Schätze für jedes Lernziel ein, wie sicher du bist: **sicher**, **unsicher** oder **noch nicht**. Vergleiche dann mit
deinen Ergebnissen in den Aufgaben. Wo du dich überschätzt hast, lohnt sich eine Wiederholung am meisten.

1. Folgen explizit und rekursiv angeben, Glieder berechnen, Formeln finden und zeichnen.
2. Arithmetische und geometrische Folgen bestimmen und den Index berechnen.
3. Mit dem Summenzeichen rechnen und den Index verschieben.
4. Arithmetische und geometrische Reihen herleiten und anwenden.
5. Zinseszins, Barwert und unterjährige Verzinsung berechnen.
6. Renten, Kredite und Tilgungspläne berechnen.
7. Induktionsbeweise führen und beurteilen.
8. Monotonie und Beschränktheit erkennen und begründen.
9. Rekursive Modelle aufstellen und deuten (Vertiefung).

## Mündliche Prüfung

```karten
- id: fr-k-folge
  frage: Was ist eine Folge, und wie kann man sie angeben? Gib zu jeder Darstellung ein Beispiel.
  antwort: |
    Eine Folge ordnet jeder natürlichen Zahl $n$ eine reelle Zahl $a_n$ zu. Explizit gibt eine Formel jedes Glied direkt
    an, etwa $a_n = n^2$. Rekursiv gibt man einen Startwert und eine Vorschrift an, wie aus einem Glied das nächste
    entsteht, etwa $a_1 = 3$ und $a_{n+1} = 2a_n - 1$. Der Graph besteht aus einzelnen Punkten $(n \mid a_n)$.
  kernpunkte:
    - Zuordnung n zu a_n
    - explizit mit Beispiel
    - rekursiv mit Startwert und Beispiel
- id: fr-k-arith-geo
  frage: Was ist der Unterschied zwischen einer arithmetischen und einer geometrischen Folge?
  antwort: |
    Bei einer arithmetischen Folge ist die Differenz $a_{n+1} - a_n = d$ konstant, also $a_n = a_1 + (n - 1)d$. Das
    entspricht linearem Wachstum. Bei einer geometrischen Folge ist der Quotient $\frac{a_{n+1}}{a_n} = q$ konstant, also
    $a_n = a_1 q^{n-1}$. Das entspricht exponentiellem Wachstum. Eine konstante Folge ungleich $0$ ist beides.
  kernpunkte:
    - konstante Differenz gegen konstanten Quotient
    - beide expliziten Formeln
    - linear gegen exponentiell
- id: fr-k-arith-funktion
  frage: Welcher Zusammenhang besteht zwischen arithmetischen Folgen und linearen Funktionen und zwischen geometrischen Folgen und Exponentialfunktionen?
  antwort: |
    Die Punkte $(n \mid a_n)$ einer arithmetischen Folge liegen auf einer Geraden mit Steigung $d$, denn $a_n = dn + (a_1 - d)$
    ist linear in $n$. Die Punkte einer geometrischen Folge mit $q > 0$ liegen auf dem Graphen der Exponentialfunktion
    $f(x) = a_1 q^{x-1}$ aus Kapitel 4. Folgen sind also die Treppenstufen-Versionen dieser Funktionen.
  kernpunkte:
    - Punkte auf einer Geraden mit Steigung d
    - Punkte auf einer Exponentialkurve
    - Folge als Funktion auf den natürlichen Zahlen
- id: fr-k-summenzeichen
  frage: Was bedeutet das Summenzeichen, und welche Rechenregeln gelten? Was darf man nicht?
  antwort: |
    $\sum_{k=m}^{n} a_k$ ist die Abkürzung für $a_m + \dots + a_n$ mit $n - m + 1$ Summanden. Konstanten darf man
    herausheben, Summen von Summen aufteilen, und $\sum_{k=1}^{n} c = nc$. Produkte darf man nicht aufteilen:
    $\sum_{k=1}^{2} k \cdot k = 5$, aber $(1 + 2)(1 + 2) = 9$. Bei einer Indexverschiebung ändern sich Grenzen und Term gemeinsam.
  kernpunkte:
    - Anzahl n − m + 1
    - herausheben, aufteilen, Summe einer Konstanten
    - Gegenbeispiel Produkt
    - Indexverschiebung mit Grenzen und Term
- id: fr-k-gauss
  frage: Wie leitet man die Summenformel der arithmetischen Reihe her?
  antwort: |
    Man schreibt die Summe einmal vorwärts und einmal rückwärts untereinander und addiert spaltenweise. In jeder Spalte
    heben sich $+d$ und $-d$ auf, jede Spalte ergibt $a_1 + a_n$. Es gibt $n$ Spalten, also $2s_n = n(a_1 + a_n)$ und
    $s_n = \frac n2(a_1 + a_n)$. Das ist der Trick des jungen Gauß, mit dem er $1 + \dots + 100 = 5050$ fand.
  kernpunkte:
    - vorwärts und rückwärts untereinander
    - jede Spalte a_1 + a_n
    - durch 2 teilen
- id: fr-k-geo-reihe
  frage: Wie leitet man die Summenformel der geometrischen Reihe her? Warum braucht man q ungleich 1?
  antwort: |
    Man multipliziert $s_n = a_1 + a_1 q + \dots + a_1 q^{n-1}$ mit $q$ und zieht $s_n$ ab. Alle mittleren Glieder heben
    sich auf, es bleibt $s_n(q - 1) = a_1(q^n - 1)$. Zum Auflösen teilt man durch $q - 1$, und das geht nur für $q \neq 1$.
    Für $q = 1$ sind alle Glieder gleich, und $s_n = n a_1$.
  kernpunkte:
    - mit q multiplizieren und abziehen
    - fast alle Glieder heben sich weg, nur erstes und letztes bleiben
    - Division durch q − 1, Sonderfall q = 1
- id: fr-k-zinseszins
  frage: Wie hängen Zinseszins, Barwert und geometrische Folgen zusammen?
  antwort: |
    Bei jährlicher Verzinsung wird das Kapital jedes Jahr mit $q = 1 + i$ multipliziert. Die Kapitalstände bilden die
    geometrische Folge $K_n = K_0 q^n$. Der Barwert ist der heutige Wert eines späteren Betrags. Man erhält ihn durch
    Abzinsen, also Teilen durch $q^n$. Zahlungen zu verschiedenen Zeitpunkten darf man erst addieren, wenn sie auf denselben Zeitpunkt umgerechnet sind.
  kernpunkte:
    - Kapitalstände als geometrische Folge
    - Barwert durch Abzinsen
    - nur Werte zum selben Zeitpunkt vergleichen
- id: fr-k-effektiv
  frage: Warum ist der effektive Jahreszins bei monatlicher Verzinsung größer als der nominelle?
  antwort: |
    Bei monatlicher Verzinsung werden die Zinsen der ersten Monate in den folgenden Monaten mitverzinst. Deshalb ist der
    Jahresfaktor $\left(1 + \frac{i}{12}\right)^{12}$ größer als $1 + i$. Beispiel: Nominell $6\,\%$ ergibt effektiv etwa
    $6{,}17\,\%$. Das folgt auch aus der Bernoulli-Ungleichung.
  kernpunkte:
    - Zinseszins innerhalb des Jahres
    - Formel für den effektiven Zinssatz
    - Zahlenbeispiel
- id: fr-k-rente-kredit
  frage: Warum führen Sparpläne und Kredite auf geometrische Reihen? Wie berechnet man eine Kreditrate?
  antwort: |
    Bei einem Sparplan wird jede Zahlung unterschiedlich lange verzinst: die erste $n - 1$ Perioden, die letzte gar nicht.
    Die aufgezinsten Werte $R, Rq, \dots, Rq^{n-1}$ bilden eine geometrische Folge, ihre Summe ist $R\frac{q^n - 1}{q - 1}$.
    Bei einem Kredit verlangt man, dass der Barwert aller Raten gleich der Kreditsumme ist. Daraus folgt
    $A = K_0 \frac{q^n(q - 1)}{q^n - 1}$.
  kernpunkte:
    - Zahlungen verschieden lange verzinst
    - Endwert als geometrische Reihe
    - Barwert der Raten gleich Kreditsumme
- id: fr-k-tilgung
  frage: Warum ist bei einem Annuitätenkredit nach der halben Laufzeit noch mehr als die halbe Schuld offen?
  antwort: |
    Jede Rate besteht aus Zinsen auf die aktuelle Restschuld und aus Tilgung. Am Anfang ist die Schuld hoch, also der
    Zinsanteil groß und der Tilgungsanteil klein. Erst später, wenn die Schuld gesunken ist, wächst der Tilgungsanteil.
    In der ersten Hälfte wird deshalb weniger als die Hälfte getilgt. Bei der Ratentilgung mit gleicher Tilgung ist das anders.
  kernpunkte:
    - Rate gleich Zinsanteil plus Tilgungsanteil
    - am Anfang hoher Zinsanteil
    - Vergleich mit Ratentilgung
- id: fr-k-induktion
  frage: Erkläre das Prinzip der vollständigen Induktion.
  antwort: |
    Um $A(n)$ für alle $n \ge n_0$ zu beweisen, zeigt man zwei Dinge. Den Induktionsanfang: $A(n_0)$ ist wahr. Den
    Induktionsschritt: Aus der Annahme $A(n)$, der Induktionsvoraussetzung, folgt $A(n + 1)$. Wie bei Dominosteinen fällt
    dann einer nach dem anderen. Bei Summenformeln spaltet man im Schritt den letzten Summanden ab und setzt die Voraussetzung ein.
  kernpunkte:
    - Induktionsanfang
    - Schritt von n auf n + 1 mit IV
    - Dominobild
    - Kniff letzter Summand
- id: fr-k-anfang
  frage: Warum braucht man bei der Induktion den Induktionsanfang? Gib ein Gegenbeispiel.
  antwort: |
    Ohne Anfang beweist der Schritt nichts. Aus „$n = n + 1$“ folgt durch Addition von $1$ sofort „$n + 1 = n + 2$“. Der
    Schritt funktioniert also, die Aussage ist aber für kein $n$ wahr. Es fällt nie ein erster Dominostein. Umgekehrt
    reichen auch viele geprüfte Werte nicht: $n^2 - n + 41$ ist für $n = 1$ bis $40$ eine Primzahl, für $n = 41$ aber $41^2$.
  kernpunkte:
    - Gegenbeispiel n = n + 1
    - Schritt allein reicht nicht
    - Beispiele allein reichen nicht
- id: fr-k-pferde
  frage: Was ist am „Beweis“, dass alle Pferde dieselbe Farbe haben, falsch?
  antwort: |
    Der Induktionsschritt muss für jedes $n$ funktionieren. Beim Schritt von $1$ auf $2$ Pferde gibt es aber keine
    gemeinsamen „Pferde in der Mitte“. Die beiden Gruppen mit je einem Pferd überschneiden sich nicht. Die Kette bricht
    also schon zwischen dem ersten und dem zweiten Dominostein.
  kernpunkte:
    - Schritt muss für jedes n gelten
    - Schritt 1 auf 2 scheitert
    - keine Überschneidung der Gruppen
- id: fr-k-monotonie
  frage: Wann heißt eine Folge monoton wachsend, und wie begründet man das? Reichen ein paar Glieder?
  antwort: |
    Eine Folge heißt monoton wachsend, wenn $a_{n+1} \ge a_n$ für alle $n$ gilt, streng bei $>$. Man begründet das über die
    Differenz $a_{n+1} - a_n$, die man für jedes $n$ vereinfacht und deren Vorzeichen man zeigt. Ein paar Glieder reichen
    nicht: $a_n = 20n - n^2$ wächst bis $n = 10$ und fällt danach.
  kernpunkte:
    - Definition mit allen n
    - Differenz für jedes n
    - Gegenbeispiel Tabelle
- id: fr-k-schranken
  frage: Was ist eine Schranke einer Folge? Ist sie eindeutig? Welche Schranke ist interessant?
  antwort: |
    $S$ ist eine obere Schranke, wenn $a_n \le S$ für alle $n$ gilt. $S$ muss eine feste Zahl sein. Schranken sind nicht
    eindeutig, denn jede größere Zahl ist ebenfalls eine obere Schranke. Interessant ist die kleinste obere Schranke, das
    Supremum. Bei $a_n = 3 - \frac2n$ ist das $3$. Diese Zahl wird nie erreicht.
  kernpunkte:
    - Definition mit fester Zahl
    - nicht eindeutig
    - Supremum mit Beispiel
- id: fr-k-monoton-beschraenkt
  frage: Sind Monotonie und Beschränktheit dasselbe? Wie hängen sie mit Kapitel 11 zusammen?
  antwort: |
    Nein, es sind unabhängige Eigenschaften. $(-1)^n$ ist beschränkt, aber nicht monoton. $a_n = n$ ist monoton, aber nicht
    beschränkt. Ist eine Folge beides, monoton und beschränkt, dann hat sie nach dem Monotoniekriterium aus Kapitel 11 einen
    Grenzwert. Beispiel ist der Medikamentenspiegel $x_{n+1} = 0{,}8x_n + 50$, der wächst und sich $250$ nähert.
  kernpunkte:
    - zwei Gegenbeispiele
    - Monotoniekriterium aus Kapitel 11
    - Beispiel mit Grenzwert
```
