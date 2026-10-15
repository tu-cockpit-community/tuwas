---
nummer: 12
titel: Grenzwerte von Funktionen und Stetigkeit
kurz: Was „f(x) strebt gegen L“ exakt bedeutet, wie man Grenzwerte berechnet, was Stetigkeit ist und welche Sätze stetige Funktionen garantieren.
teil: B
stunden: 16
pruefungsgewicht: 2
voraussetzungen: [grenzwerte-folgen, funktionen, zahlen, gleichungen, trigonometrie, differentialrechnung]
lernziele:
  - den Grenzwert einer Funktion an einer Stelle mit Wertetabellen vermuten, mit dem Folgenkriterium begründen und mit zwei Folgen widerlegen
  - die ε-δ-Definition in Worten und mit Quantoren formulieren, zu gegebenem ε ein passendes δ bestimmen und einfache Grenzwerte damit lückenlos beweisen
  - einseitige Grenzwerte bestimmen und damit entscheiden, ob der Grenzwert an einer Stelle existiert
  - Grenzwerte mit Grenzwertsätzen, Kürzen, Erweitern, dem Einschließungssatz und Standardgrenzwerten wie sin x / x berechnen
  - Grenzwerte im Unendlichen und uneigentliche Grenzwerte berechnen und senkrechte, waagrechte und schräge Asymptoten angeben
  - Stetigkeit an einer Stelle definieren und prüfen, Unstetigkeitsstellen als hebbar, Sprung, Pol oder Oszillation einordnen und Definitionslücken stetig fortsetzen
  - stückweise definierte Funktionen an den Nahtstellen auf Stetigkeit untersuchen und Parameter so bestimmen, dass sie stetig werden
  - Zwischenwertsatz und Nullstellensatz mit allen Voraussetzungen anwenden und Nullstellen mit dem Bisektionsverfahren einschließen
  - den Satz vom Maximum und Minimum mit allen Voraussetzungen formulieren, Extremwerte auf abgeschlossenen Intervallen bestimmen und Gegenbeispiele begründen
  - (Vertiefung) die Stetigkeit von Umkehrfunktionen begründen und gleichmäßige Stetigkeit von Stetigkeit an jeder Stelle unterscheiden
---

In [Kapitel 11](/lernen/mathe3/grenzwerte-folgen) hast du gelernt, was es exakt heißt, dass eine **Folge**
gegen eine Zahl strebt. Jetzt übertragen wir diese Idee auf **Funktionen**. Die Frage lautet: Was passiert mit
dem Funktionswert $f(x)$, wenn sich $x$ einer bestimmten Stelle immer mehr nähert?

Aus dieser Frage entsteht der zweite Grundbegriff der Analysis, die **Stetigkeit**. Anschaulich heißt stetig:
Der Graph hat an dieser Stelle keinen Sprung und kein Loch. In diesem Kapitel machst du diese Anschauung so
genau, dass man mit ihr rechnen und Beweise führen kann.

Warum ist das wichtig? Drei Gründe:

- Die **Ableitung** in [Kapitel 13](/lernen/mathe3/differenzierbarkeit) ist ein Grenzwert von Funktionswerten. Ohne Funktionsgrenzwerte gibt es keine exakte Ableitung.
- **Asymptoten** und das Verhalten „für große $x$“ aus der Kurvendiskussion in [Kapitel 9](/lernen/mathe3/differentialrechnung) sind Grenzwerte.
- Für stetige Funktionen gelten starke Sätze. Zum Beispiel garantiert der **Nullstellensatz**, dass eine Gleichung eine Lösung hat, auch wenn man sie nicht ausrechnen kann.

### Was in der Prüfung vorkommt

In der schriftlichen Prüfung kommt das Thema typischerweise mit **stückweise definierten Funktionen** vor. Eine
Musterprüfung setzt eine Funktion aus zwei Termen zusammen, einem für $x < 0$ und einem für $x > 0$. Gefragt
wird dann: Wie muss man den Wert an der Nahtstelle $0$ wählen, damit die Funktion stetig ist? Gibt es Fälle, in
denen das unmöglich ist? Diesen Aufgabentyp übst du in
[12.10 Stückweise definierte Funktionen](/lernen/mathe3/grenzwerte-stetigkeit/stueckweise-definierte-funktionen)
an abgewandelten Varianten. Das Original ist für die [Prüfungssimulationen](/lernen/mathe3/pruefung) reserviert.
Dazu kommen Grenzwertberechnungen, Asymptoten und der Nullstellensatz.

In der **mündlichen** Prüfung ist dieses Kapitel eine Fundgrube. Typische Fragen sind:

- *Definieren Sie Stetigkeit*.
- *Was sagt der Zwischenwertsatz, und warum braucht man ein abgeschlossenes Intervall*?
- *Geben Sie eine Funktion an, die überall definiert, aber an einer Stelle unstetig ist*.

Hier zählt genaue Sprache. Du
nennst alle Voraussetzungen und kennst zu jeder ein Gegenbeispiel. Die Karten dazu findest du in
[12.17 Mündliche Prüfung](/lernen/mathe3/grenzwerte-stetigkeit/muendliche-pruefung).

### Wie dieses Kapitel aufgebaut ist

Die ersten drei Lektionen erklären langsam, was ein Grenzwert einer Funktion ist. Die zweite und dritte Lektion
behandeln die sogenannte $\varepsilon$-$\delta$-Definition. Sie ist neben der $\varepsilon$-$N$-Definition aus
Kapitel 11 die schwierigste Stelle des Kurses. Fast alle Menschen brauchen mehrere Anläufe, bis sie sitzt. Das
ist normal. Danach lernst du, Grenzwerte zu **berechnen**. Ab der achten Lektion geht es um Stetigkeit und um die
Sätze, die stetige Funktionen garantieren. Die letzte Lernlektion ist als **Vertiefung** gekennzeichnet. Sie geht
über den Prüfungsstoff hinaus und bereitet auf die Analysis-Vorlesung im Studium vor.

:::vorwissen
Du brauchst aus früheren Kapiteln:

- den **Betrag als Abstand**: $|x - a|$ ist die Entfernung von $x$ und $a$ auf der Zahlengeraden ([Kapitel 1, Betrag und Intervalle](/lernen/mathe3/zahlen/betrag-und-intervalle)).
- **Faktorisieren** mit binomischen Formeln und Herausheben ([Kapitel 1, Terme umformen](/lernen/mathe3/zahlen/terme-umformen-binomische-formeln-und-faktorisieren)) und die **Polynomdivision** ([Kapitel 2, Gleichungen höheren Grades](/lernen/mathe3/gleichungen/gleichungen-hoeheren-grades)).
- **Grenzwerte von Folgen** und die $\varepsilon$-$N$-Definition ([Kapitel 11, Die ε-N-Definition](/lernen/mathe3/grenzwerte-folgen/die-epsilon-n-definition-des-grenzwerts)).
- **Stückweise definierte Funktionen** und die Betragsfunktion ([Kapitel 4, Betragsfunktion und stückweise definierte Funktionen](/lernen/mathe3/funktionen/betragsfunktion-und-stueckweise-definierte-funktionen)).
- das **Bogenmaß** für Winkel ([Kapitel 5, Winkel in Grad und im Bogenmaß](/lernen/mathe3/trigonometrie/winkel-in-grad-und-im-bogenmass)).

Die folgende Eingangsdiagnose prüft genau diese Dinge. Wenn du bei einer Frage danebenliegst, lies den
verlinkten Abschnitt noch einmal, bevor du weitermachst.
:::

:::anwendung
Wo brauchst du das später? Jedes Computerprogramm rechnet mit gerundeten Zahlen. Stetige Funktionen sind
gutmütig: Ein winziger Rundungsfehler in der Eingabe erzeugt nur einen winzigen Fehler im Ergebnis. Bei einer
Unstetigkeit kann derselbe winzige Fehler das Ergebnis springen lassen. Und das Bisektionsverfahren aus
[12.11](/lernen/mathe3/grenzwerte-stetigkeit/zwischenwertsatz-nullstellensatz-und-bisektion) ist nichts anderes
als die binäre Suche, die du aus der Informatik kennst, angewendet auf eine stetige Funktion.
:::

### Eingangsdiagnose

Teste dich mit den folgenden sieben Kurzfragen. Jede Frage nennt den Abschnitt, aus dem sie stammt.

```aufgabe
id: gs-diag-betrag
titel: Betrag als Abstand
niveau: 1
art: check
angabe: |
  Welche Zahlen $x$ erfüllen die Ungleichung $|x - 2| < 0{,}1$?
  Herkunft: [Kapitel 1, Betrag und Intervalle](/lernen/mathe3/zahlen/betrag-und-intervalle).
teile:
  - typ: auswahl
    optionen:
      - 'alle $x$ mit $1{,}9 < x < 2{,}1$'
      - 'alle $x$ mit $-0{,}1 < x < 0{,}1$'
      - 'alle $x$ mit $x < 2{,}1$'
      - 'alle $x$ mit $1{,}9 \le x \le 2{,}1$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          $|x - 2|$ ist der Abstand von $x$ zur Zahl $2$, nicht zur Zahl $0$. Die gesuchten Zahlen liegen rund um $2$.
      - wert: 2
        meldung: |
          Du hast nur die rechte Grenze beachtet. Auch $x = 0$ erfüllt $x < 2{,}1$, hat aber den Abstand $2$ von der Zahl $2$.
      - wert: 3
        meldung: |
          Die Ungleichung ist **echt** ($<$). Die Ränder $1{,}9$ und $2{,}1$ haben genau den Abstand $0{,}1$, also nicht weniger.
hinweise:
  - '$|x - 2|$ ist die Entfernung von $x$ und $2$ auf der Zahlengeraden.'
loesung: |
  $|x - 2| < 0{,}1$ heißt: $x$ ist weniger als $0{,}1$ von $2$ entfernt.
  ---
  Also $2 - 0{,}1 < x < 2 + 0{,}1$, das heißt $1{,}9 < x < 2{,}1$. Die Ränder gehören nicht dazu.
```

```aufgabe
id: gs-diag-faktorisieren
titel: Faktorisieren mit binomischer Formel
niveau: 1
art: check
angabe: |
  Schreibe $x^2 - 25$ als Produkt von zwei Faktoren.
  Herkunft: [Kapitel 1, Terme umformen](/lernen/mathe3/zahlen/terme-umformen-binomische-formeln-und-faktorisieren).
teile:
  - typ: auswahl
    optionen:
      - '$(x - 5)(x + 5)$'
      - '$(x - 5)^2$'
      - '$(x - 25)(x + 1)$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          $(x - 5)^2 = x^2 - 10x + 25$. Das ist die zweite binomische Formel. Hier brauchst du die dritte: $a^2 - b^2 = (a - b)(a + b)$.
      - wert: 2
        meldung: |
          Multipliziere zur Probe aus: $(x - 25)(x + 1) = x^2 - 24x - 25$. Das ist nicht $x^2 - 25$.
hinweise:
  - 'Dritte binomische Formel: $a^2 - b^2 = (a - b)(a + b)$ mit $a = x$ und $b = 5$.'
loesung: |
  $x^2 - 25 = x^2 - 5^2$ hat die Form $a^2 - b^2$ mit $a = x$ und $b = 5$.
  ---
  Nach der dritten binomischen Formel ist das $(x - 5)(x + 5)$. Probe: $x^2 + 5x - 5x - 25 = x^2 - 25$.
```

```aufgabe
id: gs-diag-polynomdivision
titel: Einen Linearfaktor abspalten
niveau: 1
art: check
angabe: |
  Die Zahl $3$ ist eine Nullstelle von $x^2 + x - 12$. Berechne $(x^2 + x - 12) : (x - 3)$.
  Herkunft: [Kapitel 2, Gleichungen höheren Grades](/lernen/mathe3/gleichungen/gleichungen-hoeheren-grades).
teile:
  - typ: term
    label: '$(x^2 + x - 12) : (x - 3) =$'
    loesung: "x + 4"
    fehler:
      - wert: "x - 4"
        meldung: |
          Mach die Probe: $(x - 3)(x - 4) = x^2 - 7x + 12$. Das mittlere Glied stimmt nicht. Gesucht ist eine Zahl $c$ mit $(x - 3)(x + c) = x^2 + x - 12$.
      - wert: "x + 3"
        meldung: |
          $(x - 3)(x + 3) = x^2 - 9$. Das ist ein anderes Polynom. Vergleiche das konstante Glied: $-3 \cdot c$ muss $-12$ ergeben.
hinweise:
  - 'Ansatz: $(x - 3)(x + c) = x^2 + x - 12$. Vergleiche das konstante Glied.'
loesung: |
  Wir suchen $c$ mit $(x - 3)(x + c) = x^2 + (c - 3)x - 3c$.
  ---
  Vergleich mit $x^2 + x - 12$: $-3c = -12$, also $c = 4$. Probe: $c - 3 = 1$ ✓. Ergebnis: $x + 4$.
```

```aufgabe
id: gs-diag-folgengrenzwert
titel: Grenzwert einer rationalen Folge
niveau: 1
art: check
angabe: |
  Berechne $\lim\limits_{n \to \infty} \dfrac{3n + 1}{n + 2}$.
  Herkunft: [Kapitel 11, Rationale Folgen](/lernen/mathe3/grenzwerte-folgen/rationale-folgen-wurzeltrick-und-standardgrenzwerte).
teile:
  - typ: zahl
    loesung: "3"
    fehler:
      - wert: "1/2"
        meldung: |
          Du hast die konstanten Glieder $1$ und $2$ verglichen. Für große $n$ bestimmen aber die Glieder mit $n$ das Verhalten: $\frac{3n}{n}$.
      - wert: "1"
        meldung: |
          „Unendlich durch unendlich“ ist nicht $1$. Teile Zähler und Nenner durch $n$ und schau, was übrig bleibt.
hinweise:
  - 'Teile Zähler und Nenner durch $n$.'
loesung: |
  Wir teilen Zähler und Nenner durch die höchste Potenz $n$: $\frac{3 + \frac1n}{1 + \frac2n}$.
  ---
  Die Brüche $\frac1n$ und $\frac2n$ gehen gegen $0$. Es bleibt $\frac{3}{1} = 3$.
```

```aufgabe
id: gs-diag-epsn
titel: Was in der ε-N-Definition wovon abhängt
niveau: 1
art: check
angabe: |
  In der Definition „$a_n \to a$“ heißt es: Zu jedem $\varepsilon > 0$ gibt es ein $N$, sodass für alle $n \ge N$ gilt
  $|a_n - a| < \varepsilon$. Welche Aussage stimmt?
  Herkunft: [Kapitel 11, Die ε-N-Definition](/lernen/mathe3/grenzwerte-folgen/die-epsilon-n-definition-des-grenzwerts).
teile:
  - typ: auswahl
    optionen:
      - 'Zuerst wird $\varepsilon$ vorgegeben, dann darf $N$ passend dazu gewählt werden.'
      - 'Es gibt ein einziges $N$, das für alle $\varepsilon$ gleichzeitig passt.'
      - 'Es genügt, wenn ein einziges Glied $a_n$ im Band um $a$ liegt.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Das vertauscht die Reihenfolge. Für $\frac1n \to 0$ passt zu $\varepsilon = 0{,}01$ das $N = 101$, zu $\varepsilon = 0{,}001$ braucht man aber $N = 1001$. Für diese Folge reicht kein festes $N$ für alle $\varepsilon$.
      - wert: 2
        meldung: |
          Verlangt sind **alle** Glieder ab $N$, nicht ein einzelnes. Die Folge $1, 0, 1, 0, \dots$ hat einzelne Glieder bei $0$, springt aber immer wieder weg.
hinweise:
  - 'Lies die Definition von links nach rechts: Was wird zuerst genannt?'
loesung: |
  Die Definition beginnt mit „zu jedem $\varepsilon$“. Erst danach kommt „gibt es ein $N$“.
  ---
  Also darf $N$ von $\varepsilon$ abhängen. Kleinere Toleranzen verlangen meist ein größeres $N$.
```

```aufgabe
id: gs-diag-stueckweise
titel: Den richtigen Ast wählen
niveau: 1
art: check
angabe: |
  Gegeben ist $f(x) = \begin{cases} x + 4 & x < 1 \\ 2x^2 & x \ge 1 \end{cases}$. Berechne $f(1)$.
  Herkunft: [Kapitel 4, Betragsfunktion und stückweise definierte Funktionen](/lernen/mathe3/funktionen/betragsfunktion-und-stueckweise-definierte-funktionen).
teile:
  - typ: zahl
    label: '$f(1) =$'
    loesung: "2*1^2"
    anzeige: '2'
    fehler:
      - wert: "5"
        meldung: |
          Du hast den oberen Term $x + 4$ verwendet. Der gilt aber nur für $x < 1$. Die Zahl $1$ selbst gehört wegen $x \ge 1$ zum unteren Ast.
hinweise:
  - 'Prüfe, welche Bedingung die Zahl $1$ erfüllt: $1 < 1$ oder $1 \ge 1$?'
loesung: |
  Die Bedingung $1 < 1$ ist falsch, die Bedingung $1 \ge 1$ ist wahr. Also gilt an der Stelle $1$ der untere Term.
  ---
  $f(1) = 2 \cdot 1^2 = 2$.
```

```aufgabe
id: gs-diag-bogenmass
titel: Sinus im Bogenmaß
niveau: 1
art: check
angabe: |
  Dein Taschenrechner steht auf Bogenmaß (RAD). Was zeigt er für $\sin(0{,}1)$ an, auf vier Nachkommastellen gerundet?
  Herkunft: [Kapitel 5, Winkel in Grad und im Bogenmaß](/lernen/mathe3/trigonometrie/winkel-in-grad-und-im-bogenmass).
teile:
  - typ: zahl
    loesung: "sin(0.1)"
    toleranz: 0.0001
    anzeige: '0{,}0998'
    fehler:
      - wert: "sin(0.1*pi/180)"
        meldung: |
          Das ist $\sin(0{,}1°)$, also der Wert im **Gradmaß**. Stell den Taschenrechner auf RAD um. In der Analysis rechnet man immer im Bogenmaß.
hinweise:
  - 'Achte auf die Anzeige DEG oder RAD am Taschenrechner.'
loesung: |
  Im Bogenmaß ist $0{,}1$ ein Winkel von etwa $5{,}7°$. Der Taschenrechner liefert $\sin(0{,}1) \approx 0{,}0998$.
  ---
  Beobachtung: $\sin(0{,}1)$ ist fast gleich $0{,}1$. Genau diese Beobachtung macht [12.6](/lernen/mathe3/grenzwerte-stetigkeit/einschliessungssatz-und-standardgrenzwerte) exakt.
```

## Vom Folgengrenzwert zum Funktionsgrenzwert

```aufgabe
id: gs-v-folge
titel: Gegen welche Zahl strebt die Folge?
niveau: 1
art: check
angabe: |
  Gegen welche Zahl strebt die Folge $x_n = 2 - \frac1n$ für $n \to \infty$?
  (Vorwissen aus [Kapitel 11, Nullfolgen](/lernen/mathe3/grenzwerte-folgen/nullfolgen-und-das-rechnen-mit-ihnen).)
teile:
  - typ: zahl
    loesung: "2"
    fehler:
      - wert: "0"
        meldung: |
          Nur der Teil $\frac1n$ geht gegen $0$. Davor steht aber noch die feste Zahl $2$, und die bleibt.
      - wert: "1"
        meldung: |
          $1$ ist das erste Glied $x_1 = 2 - 1$. Gefragt ist, wohin die Glieder für sehr große $n$ streben.
hinweise:
  - 'Was passiert mit $\frac1n$, wenn $n$ sehr groß wird?'
loesung: |
  $\frac1n$ ist eine Nullfolge, sie geht gegen $0$.
  ---
  Also geht $x_n = 2 - \frac1n$ gegen $2 - 0 = 2$. Die Glieder $1;\ 1{,}5;\ 1{,}67;\ 1{,}75;\ \dots$ nähern sich der $2$ von links.
```

**Worum geht es in dieser Lektion?** Wir wollen genau sagen, was es heißt, dass die Funktionswerte $f(x)$
einer Zahl $L$ beliebig nahe kommen, wenn $x$ sich einer Stelle $x_0$ nähert. Dafür benutzen wir die Folgen
aus [Kapitel 11](/lernen/mathe3/grenzwerte-folgen). Damit ist der neue Begriff auf einen bekannten zurückgeführt.

### Ein Loch im Graphen

Stell dir eine Straße vor, in der an einer Stelle ein Gullydeckel fehlt. An dieser Stelle gibt es keinen Boden.
Trotzdem weißt du genau, auf welcher Höhe der Boden dort liegen **müsste**: Die Straße links und rechts davon
zeigt es dir. Genau diese „Höhe, die man aus der Umgebung abliest“ ist der Grenzwert einer Funktion.

Ein Beispiel aus der Mathematik: Die Funktion
$$f(x) = \frac{x^2 - 1}{x - 1}$$
ist an der Stelle $x = 1$ nicht definiert. Dort werden Zähler und Nenner beide $0$, und $\frac00$ ist keine Zahl.
In der Nähe von $1$ kann man $f$ aber problemlos ausrechnen.

:::beispiel[Eine Wertetabelle in der Nähe der Lücke]
Wir setzen Zahlen ein, die immer näher an $1$ liegen, von links und von rechts. Zum Beispiel ist
$$f(0{,}9) = \frac{0{,}81 - 1}{0{,}9 - 1} = \frac{-0{,}19}{-0{,}1} = 1{,}9.$$
Genauso rechnet man die anderen Werte aus:

|$x$|$0{,}9$|$0{,}99$|$0{,}999$|$1{,}001$|$1{,}01$|$1{,}1$|
|---|---|---|---|---|---|---|
|$f(x)$|$1{,}9$|$1{,}99$|$1{,}999$|$2{,}001$|$2{,}01$|$2{,}1$|

Die Werte kommen der Zahl $2$ immer näher, von beiden Seiten. Den Grund liefert das Kürzen. Für $x \neq 1$ gilt
nach der dritten binomischen Formel $x^2 - 1 = (x - 1)(x + 1)$, also
$$f(x) = \frac{(x - 1)(x + 1)}{x - 1} = x + 1 \qquad (x \neq 1).$$
Kürzen ist hier erlaubt, weil $x - 1 \neq 0$ ist. Der Graph von $f$ ist also die Gerade $y = x + 1$, aber **mit
einem Loch** im Punkt $(1 \mid 2)$.
:::

```plot
x: [-1, 3]
y: [-0.5, 4]
graphen:
  - { f: "x + 1", label: "f(x) = (x²−1)/(x−1)", farbe: 0 }
punkte:
  - { x: 1, y: 2, label: "Loch (1 | 2)", offen: true }
beschriftung: Der Graph von f ist die Gerade y = x + 1 ohne den Punkt (1 | 2). An der Stelle 1 ist f nicht definiert. Trotzdem nähern sich die Funktionswerte von beiden Seiten der Zahl 2.
```

Man schreibt dafür
$$\lim_{x \to 1} f(x) = 2.$$
Gelesen: „Der Limes von $f(x)$ für $x$ gegen $1$ ist $2$.“ **Limes** ist lateinisch und heißt „Grenze“. Der
Pfeil $x \to 1$ heißt „$x$ strebt gegen $1$“. Die Zahl $2$ heißt **Grenzwert** von $f$ an der Stelle $1$.

Wichtig ist: Der Grenzwert sagt etwas über die Funktionswerte **in der Nähe** von $1$, nicht **an** der Stelle
$1$. Ob $f(1)$ existiert und welchen Wert es hat, spielt für den Grenzwert keine Rolle. Das ist wie beim
fehlenden Gullydeckel: Die Höhe der Straße ringsum bestimmt die erwartete Höhe, nicht das Loch selbst.

### Die Definition mit Folgen

Wie macht man „$x$ nähert sich $x_0$“ exakt? Die einfachste Idee: Wir laufen in Schritten auf $x_0$ zu. Die
Schritte bilden eine **Folge** $x_1, x_2, x_3, \dots$, die gegen $x_0$ konvergiert. Bei jedem Schritt berechnen
wir den Funktionswert. So entsteht eine zweite Folge $f(x_1), f(x_2), f(x_3), \dots$. Wir fragen: Konvergiert
diese zweite Folge, und wogegen?

In der Wertetabelle war das die Folge $x_n = 1 - \frac{1}{10^n}$, also $0{,}9;\ 0{,}99;\ 0{,}999;\ \dots$ Die
Funktionswerte $1{,}9;\ 1{,}99;\ 1{,}999;\ \dots$ streben gegen $2$.

:::definition[Grenzwert einer Funktion (Folgenkriterium)]
Es sei $f$ auf einer Menge $D$ definiert, und man könne sich der Stelle $x_0$ innerhalb von $D$ beliebig nähern.
Die Zahl $L$ heißt **Grenzwert von $f$ an der Stelle $x_0$**, geschrieben
$$\lim_{x \to x_0} f(x) = L,$$
wenn für **jede** Folge $(x_n)$ mit $x_n \in D$, $x_n \neq x_0$ und $x_n \to x_0$ gilt: $f(x_n) \to L$.
:::

Dabei ist $D$ der Definitionsbereich von $f$, $x_0$ die Stelle, an der wir den Grenzwert suchen, und $L$ der
Grenzwert. Das Zeichen $\in$ liest man „ist Element von“, also: $x_n$ liegt im Definitionsbereich. Die Stelle
$x_0$ selbst muss nicht in $D$ liegen. Bei $f(x) = \frac{x^2 - 1}{x - 1}$ ist $x_0 = 1$ gerade die Lücke.

Zwei Feinheiten stecken in der Definition:

- Es heißt **jede** Folge. Eine einzige Folge auszuprobieren genügt nicht, um einen Grenzwert zu beweisen.
- Die Bedingung $x_n \neq x_0$ sorgt dafür, dass der Funktionswert an der Stelle $x_0$ selbst nicht mitspielt.

:::beispiel[Nachweis mit dem Folgenkriterium]
Behauptung: $\lim\limits_{x \to 1} \dfrac{x^2 - 1}{x - 1} = 2$.

**Schritt 1, eine beliebige Folge nehmen.** Sei $(x_n)$ **irgendeine** Folge mit $x_n \neq 1$ und $x_n \to 1$.
Wir legen uns nicht auf bestimmte Zahlen fest, damit das Argument für jede Folge gilt.

**Schritt 2, umformen.** Wegen $x_n \neq 1$ darf man kürzen: $f(x_n) = x_n + 1$.

**Schritt 3, Grenzwertsatz für Folgen.** Aus $x_n \to 1$ folgt nach der Summenregel für Folgen (der Grenzwert einer Summe ist die Summe der Grenzwerte, siehe
[11.8 Grenzwertsätze und Einschließungssatz](/lernen/mathe3/grenzwerte-folgen/grenzwertsaetze-und-einschliessungssatz)):
$x_n + 1 \to 1 + 1 = 2$.

**Was haben wir gezeigt?** Für jede erlaubte Folge streben die Funktionswerte gegen $2$. Genau das verlangt die
Definition. Also ist der Grenzwert $2$.
:::

```reflexion
frage: Warum verlangt die Definition, dass die Funktionswerte für **jede** Folge gegen $L$ streben? Würde nicht eine gut gewählte Folge reichen?
antwort: |
  Eine einzelne Folge zeigt nur, was auf **einem** Weg zur Stelle $x_0$ passiert. Eine Funktion kann sich aber
  je nach Weg verschieden verhalten. Bei der Vorzeichenfunktion liefert der Weg von rechts den Wert $1$, der Weg
  von links den Wert $-1$. Hätten wir nur von rechts geschaut, hätten wir fälschlich den Grenzwert $1$ vermutet.
  „Für jede Folge“ heißt: Egal auf welchem Weg man sich nähert, es kommt immer dasselbe heraus.
```

### Wenn es keinen Grenzwert gibt

Für einen Beweis braucht man **alle** Folgen. Für einen **Gegenbeweis** reicht dagegen wenig: Findet man zwei
Folgen, die beide gegen $x_0$ gehen, deren Funktionswerte aber verschiedenen Zahlen zustreben, dann kann es keinen
Grenzwert geben. Die Definition verlangt ja, dass für jede Folge dasselbe $L$ herauskommt.

:::beispiel[Kein Grenzwert: die Vorzeichenfunktion]
Die **Vorzeichenfunktion** (Signumfunktion, von lateinisch *signum*, „Zeichen“) gibt nur das Vorzeichen einer
Zahl zurück:
$$\operatorname{sgn}(x) = \begin{cases} 1 & x > 0 \\ -1 & x < 0 \end{cases}$$
Wir betrachten sie hier nur für $x \neq 0$.

**Folge von rechts:** $x_n = \frac1n$ geht gegen $0$, und alle Glieder sind positiv. Also ist
$\operatorname{sgn}(x_n) = 1$ für jedes $n$, und die Funktionswerte streben gegen $1$.

**Folge von links:** $y_n = -\frac1n$ geht ebenfalls gegen $0$, alle Glieder sind negativ. Also ist
$\operatorname{sgn}(y_n) = -1$, und die Funktionswerte streben gegen $-1$.

**Was folgt daraus?** Zwei Wege zur Stelle $0$ liefern zwei verschiedene Zahlen. Also existiert
$\lim\limits_{x \to 0} \operatorname{sgn}(x)$ **nicht**. Das ist ein Nicht-Beispiel zur Definition.
:::

:::beispiel[Kein Grenzwert: eine Schwingung]
Die Funktion $f(x) = \sin\!\left(\frac1x\right)$ ist für $x \neq 0$ definiert. Wenn $x$ gegen $0$ geht, wird
$\frac1x$ riesig, und der Sinus durchläuft immer schneller seine Werte zwischen $-1$ und $1$.

**Erste Folge:** $x_n = \dfrac{1}{\frac{\pi}{2} + 2n\pi}$. Dann ist $\frac{1}{x_n} = \frac{\pi}{2} + 2n\pi$ und
$f(x_n) = \sin\!\left(\frac{\pi}{2} + 2n\pi\right) = 1$ für jedes $n$. Der Sinus hat die Periode $2\pi$, deshalb
ändert der Summand $2n\pi$ nichts.

**Zweite Folge:** $y_n = \dfrac{1}{n\pi}$. Dann ist $f(y_n) = \sin(n\pi) = 0$ für jedes $n$.

Beide Folgen gehen gegen $0$, weil ihre Nenner über alle Grenzen wachsen. Die Funktionswerte streben aber gegen
$1$ und gegen $0$. Also gibt es keinen Grenzwert.
:::

```plot
x: [-0.5, 0.5]
y: [-1.3, 1.3]
graphen:
  - { f: "sin(1/x)", label: "sin(1/x)", farbe: 3, von: 0.004, bis: 0.5 }
  - { f: "sin(1/x)", farbe: 3, von: -0.5, bis: -0.004 }
beschriftung: Der Graph von sin(1/x) schwingt bei Annäherung an 0 immer schneller zwischen −1 und 1 hin und her. Ein Grenzwert für x gegen 0 existiert nicht.
```

:::merke[Grenzwert widerlegen]
Um zu zeigen, dass $\lim\limits_{x \to x_0} f(x)$ **nicht** existiert, genügt eines davon:

1. zwei Folgen $x_n \to x_0$ und $y_n \to x_0$ (beide ohne den Wert $x_0$), bei denen $f(x_n)$ und $f(y_n)$ gegen verschiedene Zahlen streben, oder
2. eine einzige solche Folge, bei der $f(x_n)$ gar nicht konvergiert.

Um einen Grenzwert zu **beweisen**, muss man dagegen mit einer beliebigen Folge argumentieren.
:::

:::achtung[Eine Folge beweist keinen Grenzwert]
Falsch: „Mit $x_n = \frac1n$ ist $\operatorname{sgn}(x_n) = 1$ für alle $n$. Also ist $\lim\limits_{x \to 0} \operatorname{sgn}(x) = 1$.“

Richtig: Die Folge $\frac1n$ prüft nur den Weg von rechts. Die Folge $-\frac1n$ liefert den Wert $-1$. Der Grenzwert
existiert gar nicht. Eine einzelne Folge kann einen Grenzwert nur **widerlegen**, niemals beweisen.
:::

:::achtung[Den Funktionswert für den Grenzwert halten]
Falsch: „$g(x) = x + 1$ für $x \neq 1$ und $g(1) = 5$. Also ist $\lim\limits_{x \to 1} g(x) = g(1) = 5$.“

Richtig: Der Grenzwert schaut nur auf $x \neq 1$. Dort ist $g(x) = x + 1$, und für $x \to 1$ geht das gegen $2$.
Also ist $\lim\limits_{x \to 1} g(x) = 2$, obwohl $g(1) = 5$ ist. Der eine abweichende Punkt ändert den Grenzwert nicht.
:::

:::achtung[„Nicht definiert“ heißt nicht „kein Grenzwert“]
Falsch: „$f(x) = \frac{x^2 - 1}{x - 1}$ ist bei $1$ nicht definiert. Also hat $f$ dort keinen Grenzwert.“

Richtig: Gerade an Definitionslücken ist der Grenzwert interessant. Hier ist $f(1)$ nicht definiert, aber
$\lim\limits_{x \to 1} f(x) = 2$ existiert. Ob ein Grenzwert existiert, entscheiden nur die Werte **in der Nähe**.
:::

```aufgabe
id: gs-tabelle-loch
titel: Ein Loch im Graphen
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Gegeben ist $f(x) = \dfrac{x^2 - 4}{x + 2}$ für $x \neq -2$.

  Berechne $f(-2{,}01)$ und $f(-1{,}99)$ und bestimme $\lim\limits_{x \to -2} f(x)$.
teile:
  - typ: zahl
    label: '$f(-2{,}01)$'
    loesung: "((-2.01)^2 - 4)/(-2.01 + 2)"
    anzeige: '-4{,}01'
    fehler:
      - wert: "4.01"
        meldung: |
          Achte auf das Vorzeichen im Nenner: $-2{,}01 + 2 = -0{,}01$ ist negativ. Der Zähler $4{,}0401 - 4$ ist positiv.
  - typ: zahl
    label: '$f(-1{,}99)$'
    loesung: "((-1.99)^2 - 4)/(-1.99 + 2)"
    anzeige: '-3{,}99'
    fehler:
      - wert: "3.99"
        meldung: |
          Der Zähler $(-1{,}99)^2 - 4 = 3{,}9601 - 4$ ist negativ, der Nenner $0{,}01$ positiv. Der Bruch ist also negativ.
  - typ: zahl
    label: '$\lim_{x \to -2} f(x)$'
    loesung: "-4"
    fehler:
      - wert: "0"
        meldung: |
          Einsetzen von $-2$ liefert $\frac00$. Das ist kein Ergebnis und schon gar nicht $0$. Schau auf die beiden Werte, die du gerade berechnet hast.
hinweise:
  - 'Zähler faktorisieren: $x^2 - 4 = (x - 2)(x + 2)$.'
loesung: |
  Ansatz: Wir kürzen zuerst, dann sieht man den Grenzwert direkt. Für $x \neq -2$ ist $f(x) = \dfrac{(x - 2)(x + 2)}{x + 2} = x - 2$.
  ---
  Damit $f(-2{,}01) = -2{,}01 - 2 = -4{,}01$ und $f(-1{,}99) = -1{,}99 - 2 = -3{,}99$. Direkt eingesetzt kommt dasselbe heraus.
  ---
  Für jede Folge $x_n \to -2$ mit $x_n \neq -2$ gilt $f(x_n) = x_n - 2 \to -4$. Also ist $\lim\limits_{x \to -2} f(x) = -4$.
  Die beiden Tabellenwerte $-4{,}01$ und $-3{,}99$ liegen links und rechts von $-4$ ✓.
```

```aufgabe
id: gs-tabelle-vermuten
titel: Einen Grenzwert aus Tabellenwerten vermuten
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Gegeben ist $g(x) = \dfrac{x^3 - 8}{x - 2}$ für $x \neq 2$. Berechne $g(1{,}99)$ und $g(2{,}01)$ mit dem
  Taschenrechner und gib eine Vermutung für $\lim\limits_{x \to 2} g(x)$ an (ganze Zahl).
teile:
  - typ: zahl
    label: '$g(1{,}99)$'
    loesung: "(1.99^3 - 8)/(1.99 - 2)"
    anzeige: '11{,}9401'
    fehler:
      - wert: "-11.9401"
        meldung: |
          Zähler und Nenner sind **beide** negativ: $1{,}99^3 - 8 \approx -0{,}1194$ und $1{,}99 - 2 = -0{,}01$. Minus durch minus ergibt plus.
  - typ: zahl
    label: '$g(2{,}01)$'
    loesung: "(2.01^3 - 8)/(2.01 - 2)"
    anzeige: '12{,}0601'
  - typ: zahl
    label: 'Vermutung für den Grenzwert'
    loesung: "12"
    fehler:
      - wert: "0"
        meldung: |
          Beim Einsetzen von $2$ entsteht $\frac00$. Das ist kein Wert. Die Tabellenwerte zeigen, welcher Zahl sich $g$ nähert.
hinweise:
  - 'Klammern beim Eintippen setzen: $(1{,}99^3 - 8) : (1{,}99 - 2)$.'
loesung: |
  Ansatz: Wir nähern uns der Stelle $2$ von beiden Seiten und beobachten die Funktionswerte.
  ---
  $g(1{,}99) = \frac{7{,}880599 - 8}{-0{,}01} = \frac{-0{,}119401}{-0{,}01} = 11{,}9401$ und $g(2{,}01) = \frac{8{,}120601 - 8}{0{,}01} = 12{,}0601$.
  ---
  Beide Werte liegen dicht bei $12$, einer knapp darunter, einer knapp darüber. Vermutung: $\lim\limits_{x \to 2} g(x) = 12$.
  Eine Tabelle ist noch kein Beweis. Den Beweis durch Kürzen lernst du in [12.5](/lernen/mathe3/grenzwerte-stetigkeit/grenzwerte-berechnen-einsetzen-kuerzen-erweitern).
```

```aufgabe
id: gs-grenzwert-funktionswert
titel: Grenzwert und Funktionswert unterscheiden
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Es sei $h(x) = x + 3$ für $x \neq 1$ und $h(1) = 10$. Bestimme $\lim\limits_{x \to 1} h(x)$.
teile:
  - typ: zahl
    label: '$\lim_{x \to 1} h(x)$'
    loesung: "1 + 3"
    anzeige: '4'
    fehler:
      - wert: "10"
        meldung: |
          $10$ ist der Funktionswert **an** der Stelle $1$. Der Grenzwert schaut nur auf die Werte **in der Nähe**, also auf $x \neq 1$.
hinweise:
  - 'Für $x \neq 1$ gilt $h(x) = x + 3$. Welchem Wert nähert sich das für $x \to 1$?'
loesung: |
  Ansatz: Der Grenzwert benutzt nur Stellen $x \neq 1$. Dort gilt $h(x) = x + 3$.
  ---
  Für jede Folge $x_n \to 1$ mit $x_n \neq 1$ ist $h(x_n) = x_n + 3 \to 4$. Also ist der Grenzwert $4$. Der Sonderwert $h(1) = 10$ ändert daran nichts.
```

```aufgabe
id: gs-zwei-folgen
titel: Zwei Folgen, zwei Grenzwerte
niveau: 2
lernziel: 0
kompetenz: rechnen
angabe: |
  Es sei $f(x) = \dfrac{|x|}{x} + x$ für $x \neq 0$. Berechne die Grenzwerte der Folgen $f(x_n)$ mit
  $x_n = \tfrac{1}{n}$ und $f(y_n)$ mit $y_n = -\tfrac{1}{n}$. Existiert $\lim\limits_{x \to 0} f(x)$?
teile:
  - typ: zahl
    label: '$\lim_{n \to \infty} f(x_n)$'
    loesung: "1"
    fehler:
      - wert: "0"
        meldung: |
          Der Summand $x_n$ geht gegen $0$, aber $\frac{|x_n|}{x_n}$ nicht. Für positive Zahlen ist $\frac{|x|}{x} = \frac{x}{x} = 1$.
  - typ: zahl
    label: '$\lim_{n \to \infty} f(y_n)$'
    loesung: "-1"
    fehler:
      - wert: "1"
        meldung: |
          Für negatives $y_n$ ist $|y_n| = -y_n$. Dann ist $\frac{|y_n|}{y_n} = \frac{-y_n}{y_n} = -1$.
  - typ: auswahl
    label: 'Existiert $\lim_{x \to 0} f(x)$?'
    optionen:
      - 'Ja, er ist $0$, der Mittelwert von $1$ und $-1$.'
      - 'Ja, er ist $1$.'
      - 'Nein, weil zwei Folgen gegen $0$ verschiedene Grenzwerte der Funktionswerte liefern.'
    richtig: [2]
    fehler:
      - wert: 0
        meldung: |
          Einen „Mittelwert“ als Grenzwert gibt es nicht. Die Definition verlangt, dass **jede** Folge denselben Wert liefert.
      - wert: 1
        meldung: |
          Das ist nur der Wert von rechts. Von links kommt $-1$ heraus, und beide Wege müssten übereinstimmen.
hinweise:
  - 'Für $x > 0$ ist $\tfrac{|x|}{x} = 1$, für $x < 0$ ist es $-1$.'
  - 'Setze $x_n = \frac1n$ ein: $f(x_n) = 1 + \frac1n$. Mach dasselbe mit $y_n$.'
loesung: |
  Ansatz: Wir rechnen die Funktionswerte entlang beider Folgen aus. Wegen des Betrags müssen wir das Vorzeichen beachten.
  ---
  Weil $x_n > 0$ ist, gilt $f(x_n) = 1 + \tfrac1n \to 1$.
  ---
  Weil $y_n < 0$ ist, gilt $f(y_n) = -1 - \tfrac1n \to -1$.
  ---
  Beide Folgen streben gegen $0$, die Funktionswerte aber gegen verschiedene Zahlen. Nach dem Folgenkriterium existiert der Grenzwert also **nicht**.
```

```aufgabe
id: gs-folgen-gefuehrt
titel: Ein Grenzwert mit dem Folgenkriterium, Schritt für Schritt
niveau: 2
lernziel: 0
kompetenz: begruenden
angabe: |
  Zeige mit dem Folgenkriterium, dass $\lim\limits_{x \to 4} \dfrac{x^2 - 5x + 4}{x - 4}$ existiert, und gib den Grenzwert an.
teile:
  - typ: zahl
    label: 'Grenzwert'
    loesung: "4 - 1"
    anzeige: '3'
    fehler:
      - wert: "0"
        meldung: |
          Einsetzen ergibt $\frac{0}{0}$, und das ist kein Ergebnis. Kürze zuerst den gemeinsamen Faktor.
      - wert: "5"
        meldung: |
          Prüfe die Faktorisierung: $(x - 4)(x + 1) = x^2 - 3x - 4$. Das passt nicht. Gesucht sind zwei Zahlen mit Produkt $4$ und Summe $-5$.
hinweise:
  - 'Faktorisiere den Zähler. Weil $4$ eine Nullstelle ist, steckt der Faktor $(x - 4)$ darin.'
  - 'Nimm eine beliebige Folge $x_n \to 4$ mit $x_n \neq 4$ und vereinfache $f(x_n)$.'
gefuehrt:
  - text: Setze $x = 4$ in Zähler und Nenner ein. Was ergibt der Zähler $16 - 20 + 4$?
    teil:
      typ: zahl
      loesung: "0"
    erklaerung: 'Der Zähler ist $0$, der Nenner $4 - 4$ auch. Der Ausdruck $\frac00$ ist kein Wert, wir müssen umformen.'
  - text: Faktorisiere den Zähler. Gib den zweiten Faktor an, also den Term $T$ in $x^2 - 5x + 4 = (x - 4)\cdot T$.
    teil:
      typ: term
      loesung: "x - 1"
      fehler:
        - wert: "x + 1"
          meldung: 'Probe: $(x - 4)(x + 1) = x^2 - 3x - 4$. Das konstante Glied muss aber $+4$ sein.'
    erklaerung: '$(x - 4)(x - 1) = x^2 - x - 4x + 4 = x^2 - 5x + 4$ ✓.'
  - text: Überlege, warum man für eine Folge $x_n \to 4$ mit $x_n \neq 4$ kürzen darf.
    erklaerung: 'Wegen $x_n \neq 4$ ist $x_n - 4 \neq 0$. Durch eine Zahl ungleich $0$ darf man teilen. Also ist $f(x_n) = x_n - 1$.'
  - text: Wogegen strebt $f(x_n) = x_n - 1$, wenn $x_n \to 4$?
    teil:
      typ: zahl
      loesung: "3"
    erklaerung: 'Nach der Summenregel für Folgen gilt $x_n - 1 \to 4 - 1 = 3$. Das gilt für **jede** erlaubte Folge, also ist der Grenzwert $3$.'
loesung: |
  Ansatz: Einsetzen liefert $\frac00$. Also faktorisieren wir den Zähler und kürzen, bevor wir eine beliebige Folge betrachten.
  ---
  $x^2 - 5x + 4 = (x - 4)(x - 1)$. Für $x \neq 4$ ist daher $f(x) = x - 1$.
  ---
  Sei $(x_n)$ eine beliebige Folge mit $x_n \neq 4$ und $x_n \to 4$. Dann ist $f(x_n) = x_n - 1 \to 3$.
  ---
  Weil die Folge beliebig war, gilt $\lim\limits_{x \to 4} f(x) = 3$. Probe mit $x = 4{,}01$: $\frac{16{,}0801 - 20{,}05 + 4}{0{,}01} = \frac{0{,}0301}{0{,}01} = 3{,}01$ ✓.
```

```aufgabe
id: gs-gegenbeispiel-folgen
titel: Zwei Folgen finden, die sich widersprechen
niveau: 2
lernziel: 0
kompetenz: rechnen
angabe: |
  Es sei $f(x) = \cos\!\left(\dfrac{\pi}{x}\right)$ für $x \neq 0$. Betrachte die Folgen $x_n = \dfrac{1}{2n}$ und
  $y_n = \dfrac{1}{2n + 1}$. Beide gehen gegen $0$.

  Berechne die Grenzwerte von $f(x_n)$ und $f(y_n)$. Existiert $\lim\limits_{x \to 0} f(x)$?
teile:
  - typ: zahl
    label: '$\lim_{n \to \infty} f(x_n)$'
    loesung: "cos(2*pi)"
    anzeige: '1'
    fehler:
      - wert: "0"
        meldung: |
          $x_n$ geht gegen $0$, aber nicht $f(x_n)$. Rechne zuerst $\frac{\pi}{x_n} = 2n\pi$ aus und setze das in den Kosinus ein.
  - typ: zahl
    label: '$\lim_{n \to \infty} f(y_n)$'
    loesung: "cos(pi)"
    anzeige: '-1'
    fehler:
      - wert: "1"
        meldung: |
          $\frac{\pi}{y_n} = (2n + 1)\pi$ ist ein **ungerades** Vielfaches von $\pi$. Dort hat der Kosinus den Wert $-1$, nicht $1$.
  - typ: auswahl
    label: 'Existiert $\lim_{x \to 0} f(x)$?'
    optionen: ['ja', 'nein']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Zwei Folgen, die beide gegen $0$ gehen, liefern verschiedene Grenzwerte der Funktionswerte. Dann kann es keinen gemeinsamen Grenzwert geben.
hinweise:
  - 'Berechne $\frac{\pi}{x_n}$ und $\frac{\pi}{y_n}$ zuerst. Es sind Vielfache von $\pi$.'
  - '$\cos(2n\pi) = 1$ und $\cos\big((2n + 1)\pi\big) = -1$, weil der Kosinus die Periode $2\pi$ hat.'
loesung: |
  Ansatz: Wir setzen beide Folgen ein und vereinfachen das Argument des Kosinus.
  ---
  $\frac{\pi}{x_n} = 2n\pi$, also $f(x_n) = \cos(2n\pi) = 1$ für jedes $n$. Grenzwert $1$.
  ---
  $\frac{\pi}{y_n} = (2n + 1)\pi$, also $f(y_n) = \cos\big((2n + 1)\pi\big) = -1$ für jedes $n$. Grenzwert $-1$.
  ---
  Zwei Wege zur Stelle $0$ liefern $1$ und $-1$. Nach dem Folgenkriterium existiert der Grenzwert nicht. Der Graph schwingt bei $0$ unendlich oft zwischen $-1$ und $1$.
```

```aufgabe
id: gs-folgen-fehler-finden
titel: Wo hinkt die Begründung?
niveau: 3
lernziel: 0
kompetenz: begruenden
angabe: |
  Ein Mitschüler untersucht $f(x) = \sin\!\left(\dfrac{\pi}{x}\right)$ an der Stelle $0$. Er schreibt:

  > „Ich nehme $x_n = \frac1n$. Dann ist $f(x_n) = \sin(n\pi) = 0$ für alle $n$. Also gilt $\lim\limits_{x \to 0} f(x) = 0$.“

  a) Berechne $f(y_n)$ für die Folge $y_n = \dfrac{2}{4n + 1}$. Gib den Wert an, der für jedes $n$ herauskommt.

  b) Erkläre, was an der Begründung falsch ist und was tatsächlich gilt.
teile:
  - typ: zahl
    label: 'a) $f(y_n) =$'
    loesung: "sin(pi/2)"
    anzeige: '1'
  - typ: text
    label: 'b) Erklärung'
    muster: |
      Eine einzelne Folge kann einen Grenzwert nicht beweisen, das Folgenkriterium verlangt **jede** Folge.
      Für $y_n = \frac{2}{4n + 1} \to 0$ ist $\frac{\pi}{y_n} = \frac{(4n + 1)\pi}{2} = 2n\pi + \frac{\pi}{2}$, also $f(y_n) = 1$.
      Die beiden Folgen $x_n$ und $y_n$ gehen gegen $0$, liefern aber die Grenzwerte $0$ und $1$.
      Also existiert $\lim\limits_{x \to 0} f(x)$ nicht.
hinweise:
  - 'Rechne $\frac{\pi}{y_n} = \frac{(4n + 1)\pi}{2}$ und zerlege es in $2n\pi$ plus einen Rest.'
  - 'Vergleiche mit dem Merke-Kasten „Grenzwert widerlegen“: Was reicht für einen Beweis, was für einen Gegenbeweis?'
loesung: |
  Ansatz: Wir prüfen, ob ein anderer Weg zur Stelle $0$ einen anderen Wert liefert. Dafür setzen wir $y_n$ ein.
  ---
  a) $\frac{\pi}{y_n} = \frac{(4n + 1)\pi}{2} = 2n\pi + \frac{\pi}{2}$. Wegen der Periode $2\pi$ ist $f(y_n) = \sin\frac{\pi}{2} = 1$ für jedes $n$.
  ---
  b) Der Fehler: Eine Folge zeigt nur einen Weg. Für einen Grenzwert müssten **alle** Wege denselben Wert liefern.
  ---
  Hier liefern $x_n$ den Wert $0$ und $y_n$ den Wert $1$. Antwort: Der Grenzwert existiert nicht. Die Behauptung des Mitschülers ist falsch.
```

## Die ε-δ-Definition: Idee und Bausteine

```aufgabe
id: gs-epsdelta-vorwissen
titel: Ein Streifen ohne Mittelpunkt
niveau: 1
art: check
angabe: |
  Welche Zahlen $x$ erfüllen die Doppelungleichung $0 < |x - 3| < 0{,}1$?
  (Vorwissen aus [Kapitel 11, Abstand und ε-Umgebung](/lernen/mathe3/grenzwerte-folgen/was-heisst-sich-naehern-abstand-und-epsilon-umgebung).)
teile:
  - typ: auswahl
    optionen:
      - 'alle $x$ mit $2{,}9 < x < 3{,}1$, außer $x = 3$'
      - 'alle $x$ mit $2{,}9 < x < 3{,}1$, einschließlich $x = 3$'
      - 'alle $x$ mit $0 < x < 0{,}1$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Für $x = 3$ ist $|x - 3| = 0$. Die linke Bedingung verlangt aber $0 < |x - 3|$, also einen Abstand **größer** als $0$. Die Stelle $3$ selbst fällt heraus.
      - wert: 2
        meldung: |
          $|x - 3|$ ist der Abstand zur Zahl $3$, nicht zur Zahl $0$. Die gesuchten $x$ liegen rund um $3$.
hinweise:
  - 'Lies die beiden Ungleichungen getrennt: „Abstand größer als 0“ und „Abstand kleiner als 0,1“.'
loesung: |
  $|x - 3| < 0{,}1$ heißt: $x$ liegt zwischen $2{,}9$ und $3{,}1$.
  ---
  $0 < |x - 3|$ heißt: $x$ ist nicht gleich $3$. Zusammen: ein Streifen um $3$ mit einem herausgenommenen Mittelpunkt.
```

**Worum geht es in dieser Lektion?** Das Folgenkriterium aus
[12.1 Vom Folgengrenzwert zum Funktionsgrenzwert](/lernen/mathe3/grenzwerte-stetigkeit/vom-folgengrenzwert-zum-funktionsgrenzwert)
redet über unendlich viele Folgen. Es gibt eine zweite, gleichwertige Definition, die ohne Folgen auskommt. Ihr
Kern in einem Satz: **$f(x)$ liegt beliebig nahe bei $L$, sobald $x$ nahe genug bei $x_0$ liegt.**

Diese Lektion zerlegt den Satz in kleine Bausteine und rechnet ihn mit konkreten Zahlen durch. Erst die nächste
Lektion führt damit Beweise. Diese Stelle ist für fast alle ungewohnt. Lies sie langsam und rechne jedes Beispiel mit.

### Ein Bild: der Drehregler einer Heizung

Ein Raum wird mit einem Drehregler geheizt. Die Stellung des Reglers ist $x$, die Raumtemperatur, die sich
einstellt, ist $f(x)$. Bei der Stellung $x_0$ stellt sich die Wunschtemperatur $L$ ein.

- Die Bewohnerin sagt: „Die Temperatur darf höchstens um $\varepsilon$ Grad von $L$ abweichen.“ Das ist die
  **Toleranz** $\varepsilon$ (griechisch *Epsilon*). Sie legt ein waagrechtes Band um $L$ fest.
- Der Techniker fragt zurück: „Wie genau muss ich den Regler einstellen, damit das klappt?“ Seine Antwort ist
  ein Abstand $\delta$ (griechisch *Delta*). Wenn die Stellung um weniger als $\delta$ von $x_0$ abweicht, ist die
  Temperatur im Toleranzband. Das ist ein senkrechter Streifen um $x_0$.

Der Grenzwert $L$ existiert, wenn der Techniker **auf jede noch so strenge Toleranz** eine passende Genauigkeit
$\delta$ nennen kann. Genau das ist die $\varepsilon$-$\delta$-Definition.

:::beispiel[Zu einer Toleranz ε das passende δ finden]
Es sei $f(x) = 2x + 1$, $x_0 = 1$ und $L = 3$. Die Toleranz sei $\varepsilon = 0{,}1$.

**Schritt 1, die Bedingung aufschreiben.** Wir wollen $|f(x) - 3| < 0{,}1$, also: Der Funktionswert liegt
weniger als $0{,}1$ von $3$ entfernt.

**Schritt 2, den Abstand umformen.** $|f(x) - 3| = |2x + 1 - 3| = |2x - 2| = 2\,|x - 1|$. Der Faktor $2$ kommt
heraus, weil $2x - 2 = 2(x - 1)$ ist und $|2| = 2$ gilt.

**Schritt 3, nach $|x - 1|$ auflösen.** $2\,|x - 1| < 0{,}1$ gilt genau dann, wenn $|x - 1| < 0{,}05$. Also
passt $\delta = 0{,}05$.

**Probe mit zwei Zahlen.** Für $x = 1{,}04$ ist der Abstand zu $1$ gleich $0{,}04 < 0{,}05$. Dann ist
$f(1{,}04) = 3{,}08$, und $|3{,}08 - 3| = 0{,}08 < 0{,}1$ ✓. Für $x = 1{,}06$ ist der Abstand $0{,}06$, also zu
groß. Tatsächlich ist $f(1{,}06) = 3{,}12$ außerhalb des Bandes, denn $0{,}12 > 0{,}1$.
:::

### Die Definition in Bausteinen

Wir setzen den Satz „$f(x)$ liegt beliebig nahe bei $L$, sobald $x$ nahe genug bei $x_0$ liegt“ aus fünf
Bausteinen zusammen.

1. **„Der Funktionswert liegt im Band“:** $|f(x) - L| < \varepsilon$. Das ist eine Aussage über **ein** $x$.
2. **„$x$ liegt im Streifen, aber nicht auf $x_0$“:** $0 < |x - x_0| < \delta$. Der linke Teil $0 < |x - x_0|$ nimmt die Stelle $x_0$ heraus.
3. **„Für alle solchen $x$“:** Jedes $x$ im Streifen erfüllt Baustein 1. Keine Ausnahme ist erlaubt.
4. **„Es gibt so einen Streifen“:** Es gibt ein $\delta > 0$, für das Baustein 3 gilt. Das ist eine Antwort auf **eine** Toleranz.
5. **„Zu jeder Toleranz“:** Für **jedes** $\varepsilon > 0$ gibt es ein solches $\delta$. Erst damit ist „beliebig nahe“ eingefangen.

```aufgabe
id: gs-epsdelta-baustein-check
titel: Ein Wort entscheidet
niveau: 1
art: check
angabe: |
  In der Definition heißt es: „… sodass für ___ $x$ mit $0 < |x - x_0| < \delta$ gilt: $|f(x) - L| < \varepsilon$.“
  Welches Wort gehört in die Lücke?
teile:
  - typ: auswahl
    optionen: ['alle', 'ein', 'unendlich viele']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Ein einzelnes passendes $x$ beweist nichts. Bei der Vorzeichenfunktion liegt $\operatorname{sgn}(0{,}01) = 1$ im Band um $1$, aber $\operatorname{sgn}(-0{,}01) = -1$ liegt weit daneben.
      - wert: 2
        meldung: |
          „Unendlich viele“ erlaubt, dass ebenfalls unendlich viele $x$ im Streifen danebenliegen. Im Streifen darf es aber **keine** Ausnahme geben.
hinweise:
  - 'Denk an den Techniker: Er garantiert die Toleranz für **jede** Reglerstellung im Streifen.'
loesung: |
  Der Streifen ist eine Garantie: Wer $x$ irgendwo darin wählt, bekommt einen Funktionswert im Band.
  ---
  Das Wort ist „alle“.
```

Jetzt setzen wir die Bausteine von hinten nach vorne zusammen.

:::definition[Grenzwert einer Funktion (ε-δ-Definition)]
Es sei $f$ auf $D$ definiert, und man könne sich $x_0$ innerhalb von $D$ beliebig nähern. Dann bedeutet
$\lim\limits_{x \to x_0} f(x) = L$:

Zu jedem $\varepsilon > 0$ gibt es ein $\delta > 0$, sodass für alle $x \in D$ mit $0 < |x - x_0| < \delta$ gilt:
$|f(x) - L| < \varepsilon$.

Mit Quantoren geschrieben:
$$\forall \varepsilon > 0\ \ \exists \delta > 0\ \ \forall x \in D:\quad 0 < |x - x_0| < \delta \ \Longrightarrow\ |f(x) - L| < \varepsilon.$$
:::

**Die Symbole vorgelesen:** $\forall$ liest man „für alle“, es ist ein umgedrehtes A wie „alle“. $\exists$ liest man
„es gibt“, es ist ein gespiegeltes E wie „existiert“. Der Pfeil $\Longrightarrow$ liest man „daraus folgt“ oder
„dann gilt“. Die Formelzeile heißt also:

> Für alle $\varepsilon$ größer null gibt es ein $\delta$ größer null mit folgender Eigenschaft. Wenn ein $x$ aus $D$
> einen Abstand zu $x_0$ hat, der größer als null und kleiner als $\delta$ ist, dann ist $f(x)$ weniger als
> $\varepsilon$ von $L$ entfernt.

Diese Definition und das Folgenkriterium sind **gleichwertig**. Man kann beweisen, dass sie immer denselben
Grenzwert liefern. Den Beweis brauchst du für die Prüfung nicht, die Aussage aber schon.

### Die Definition als Spiel

Viele finden die Definition leichter, wenn sie sie als Spiel zwischen zwei Personen lesen:

1. Die **Skeptikerin** gibt eine Toleranz $\varepsilon > 0$ vor, so klein sie will.
2. Der **Beweisende** antwortet mit einem $\delta > 0$. Er darf $\delta$ passend zu diesem $\varepsilon$ wählen.
3. Der Beweisende gewinnt die Runde, wenn **jedes** $x$ im Streifen (außer $x_0$) einen Funktionswert im Band hat.

$L$ ist der Grenzwert, wenn der Beweisende **jede** Runde gewinnt. Ein kleineres $\varepsilon$ erzwingt meistens ein
kleineres $\delta$. Das ist das Spiegelbild zur $\varepsilon$-$N$-Definition für Folgen aus
[11.2 Die ε-N-Definition des Grenzwerts](/lernen/mathe3/grenzwerte-folgen/die-epsilon-n-definition-des-grenzwerts):
Dort wurde das $N$ größer, hier wird das $\delta$ kleiner.

:::beispiel[Ein Band, das nicht symmetrisch getroffen wird]
Es sei $f(x) = x^2$, $x_0 = 1$, $L = 1$ und $\varepsilon = 0{,}21$. Wir suchen das größte passende $\delta$.

**Schritt 1, das Band.** $|x^2 - 1| < 0{,}21$ heißt $0{,}79 < x^2 < 1{,}21$.

**Schritt 2, nach $x$ auflösen.** Für $x$ in der Nähe von $1$ ist $x > 0$. Wir ziehen die Wurzel:
$\sqrt{0{,}79} < x < \sqrt{1{,}21}$, also ungefähr $0{,}8888 < x < 1{,}1$.

**Schritt 3, die Abstände zu $x_0 = 1$.** Nach links ist Platz bis $1 - 0{,}8888 = 0{,}1112$. Nach rechts ist Platz
bis $1{,}1 - 1 = 0{,}1$. Die Parabel steigt rechts von $1$ steiler, deshalb ist dort weniger Platz.

**Schritt 4, das kleinere nehmen.** Der Streifen $|x - 1| < \delta$ ist symmetrisch. Er muss auf **beiden** Seiten
passen. Also ist das größte passende $\delta = 0{,}1$, der kleinere der beiden Abstände.
:::

```plot
x: [0.6, 1.4]
y: [0.3, 1.8]
graphen:
  - { f: "x^2", label: "f(x) = x²", farbe: 0 }
  - { f: "1.21", label: "L + ε", farbe: 1, gestrichelt: true }
  - { f: "0.79", label: "L − ε", farbe: 1, gestrichelt: true }
strecken:
  - { von: [0.9, 0.3], nach: [0.9, 1.8], farbe: 2, gestrichelt: true }
  - { von: [1.1, 0.3], nach: [1.1, 1.8], farbe: 2, gestrichelt: true }
punkte:
  - { x: 1, y: 1, label: "(1 | 1)" }
  - { x: 0.8888, y: 0.79, label: "x ≈ 0,889", farbe: 3 }
  - { x: 1.1, y: 1.21, label: "x = 1,1", farbe: 3 }
beschriftung: Die Parabel x² mit dem waagrechten Band von 0,79 bis 1,21 (Toleranz ε = 0,21 um L = 1). Das Band wird links bei x ≈ 0,889 und rechts bei x = 1,1 verlassen. Der senkrechte Streifen mit δ = 0,1 (von 0,9 bis 1,1) passt auf beiden Seiten.
```

:::achtung[Den größeren Abstand nehmen]
Falsch: „Nach links ist Platz bis $0{,}1112$. Also wähle ich $\delta = 0{,}111$.“

Richtig: Der Streifen reicht nach **beiden** Seiten gleich weit. Mit $\delta = 0{,}111$ liegt zum Beispiel
$x = 1{,}105$ im Streifen. Aber $1{,}105^2 = 1{,}221025$, und das ist größer als $1{,}21$. Der Funktionswert liegt
außerhalb des Bandes. Man muss immer den **kleineren** der beiden Abstände nehmen, hier $\delta = 0{,}1$.
:::

:::beispiel[Ein Nicht-Beispiel: die Skeptikerin gewinnt]
Wir prüfen, ob die Vorzeichenfunktion $\operatorname{sgn}$ an der Stelle $0$ den Grenzwert $L = 1$ hat.

Die Skeptikerin wählt $\varepsilon = 0{,}5$. Das Band ist $0{,}5 < f(x) < 1{,}5$. Der Beweisende nennt irgendein
$\delta > 0$. Die Skeptikerin antwortet mit $x = -\frac{\delta}{2}$. Diese Zahl liegt im Streifen, denn ihr Abstand zu
$0$ ist $\frac{\delta}{2} < \delta$. Ihr Funktionswert ist aber $\operatorname{sgn}\!\left(-\frac{\delta}{2}\right) = -1$, und
$|-1 - 1| = 2$ ist nicht kleiner als $0{,}5$.

**Was haben wir gezeigt?** Egal welches $\delta$ der Beweisende wählt, die Skeptikerin findet links von $0$ ein $x$
außerhalb des Bandes. Also ist $1$ **nicht** der Grenzwert. Mit derselben Idee zeigt man, dass keine Zahl der Grenzwert ist.
:::

### Warum die Stelle x₀ selbst ausgenommen ist

Der Teil $0 < |x - x_0|$ nimmt die Stelle $x_0$ aus dem Streifen heraus. Der Grund: Der Grenzwert soll nur von den
Werten **in der Nähe** abhängen. Ein Beispiel: $g(x) = x + 1$ für $x \neq 1$ und $g(1) = 5$. Ohne die Ausnahme
müsste auch $|g(1) - 2| = 3 < \varepsilon$ gelten, und das scheitert schon bei $\varepsilon = 1$. Mit der Ausnahme
schaut die Definition nur auf $x \neq 1$, und dort ist $g(x) = x + 1$ nahe bei $2$. Also ist der Grenzwert $2$.

:::achtung[δ darf nicht von x abhängen]
Falsch: „Für $f(x) = x^2$ an der Stelle $2$ wähle ich $\delta = \frac{\varepsilon}{|x + 2|}$.“

Richtig: Das Spiel hat eine feste Reihenfolge. Zuerst kommt $\varepsilon$, dann wird $\delta$ genannt, **erst danach**
wird irgendein $x$ im Streifen geprüft. Beim Nennen von $\delta$ kennt der Beweisende $x$ noch gar nicht. $\delta$
darf also von $\varepsilon$ und von $x_0$ abhängen, aber **nicht von $x$**.
:::

:::achtung[Ein einzelnes x prüft keinen Streifen]
Falsch: „Für $\varepsilon = 0{,}21$ habe ich $x = 1{,}05$ getestet: $1{,}05^2 = 1{,}1025$ liegt im Band. Also passt $\delta = 0{,}2$.“

Richtig: Mit $\delta = 0{,}2$ liegt auch $x = 1{,}15$ im Streifen, und $1{,}15^2 = 1{,}3225$ liegt **außerhalb** des
Bandes bis $1{,}21$. Ein Streifen muss für **alle** seine $x$ funktionieren. Deshalb rechnet man mit Ungleichungen,
nicht mit einzelnen Testwerten.
:::

### Selbst beobachten

```aufgabe
id: gs-epsdelta-vorhersage
titel: Vorhersage vor dem Experiment
niveau: 1
art: check
angabe: |
  Bei $f(x) = 2x + 1$ an der Stelle $x_0 = 1$ gehörte zu $\varepsilon = 0{,}1$ das größte passende $\delta = 0{,}05$.
  **Was passiert mit dem größten passenden $\delta$, wenn du $\varepsilon$ halbierst?**
teile:
  - typ: auswahl
    optionen:
      - 'Es wird auch halbiert.'
      - 'Es bleibt gleich.'
      - 'Es verdoppelt sich.'
      - 'Es gibt dann kein passendes $\delta$ mehr.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Ein schmaleres Band ist schwerer zu treffen. Dann muss auch $x$ genauer stimmen, der Streifen wird schmaler.
      - wert: 2
        meldung: |
          Strengere Toleranz heißt: Man muss den Regler **genauer** einstellen. Der Streifen wird schmaler, nicht breiter.
      - wert: 3
        meldung: |
          Genau das schließt die Definition aus: Wenn der Grenzwert existiert, gibt es zu **jedem** $\varepsilon$ ein passendes $\delta$.
hinweise:
  - 'Es war $\delta = \frac{\varepsilon}{2}$. Setze $\varepsilon = 0{,}05$ ein.'
loesung: |
  Aus $2\,|x - 1| < \varepsilon$ folgt $|x - 1| < \frac{\varepsilon}{2}$, also $\delta = \frac{\varepsilon}{2}$.
  ---
  Für $\varepsilon = 0{,}05$ ist $\delta = 0{,}025$, also halb so groß. Überprüfe das gleich im Widget an der Parabel.
```

```widget
name: stetigkeit
titel: Der ε-δ-Streifen an der Parabel
props:
  links: "x^2"
  rechts: "x^2"
  stelle: 1
  wert: 1
  x: [0, 2]
  y: [-0.5, 3]
  epsdelta: true
```

**Arbeitsauftrag:** Stelle im Widget eine kleine Toleranz $\varepsilon$ ein und lies das passende $\delta$ ab. Halbiere
dann $\varepsilon$ mehrmals. **Beobachte**, dass $\delta$ bei kleinen Toleranzen ungefähr mit halbiert wird. **Erkläre**
es: In der Nähe von $1$ hat die Parabel ungefähr die Steigung $2$. Dort verhält sie sich fast wie eine Gerade mit
Steigung $2$, und bei einer solchen Geraden ist $\delta = \frac{\varepsilon}{2}$.

```reflexion
frage: Erkläre in eigenen Worten, warum in der Definition zuerst ε und erst danach δ kommt. Was würde die vertauschte Reihenfolge „es gibt ein δ für alle ε“ bedeuten?
antwort: |
  Zuerst legt die Skeptikerin die Toleranz fest, und erst dann antwortet der Beweisende mit einem Streifen. Darum
  darf $\delta$ von $\varepsilon$ abhängen: Strengere Toleranz, schmalerer Streifen. Vertauscht man die Reihenfolge,
  müsste **ein** Streifen für **alle** Toleranzen gleichzeitig passen. Dann müsste $|f(x) - L|$ im Streifen kleiner als
  jede positive Zahl sein, also $0$. Die Funktion wäre im Streifen (außer an der Stelle $x_0$ selbst) konstant gleich $L$. Das trifft fast keine
  interessante Funktion, zum Beispiel nicht $2x + 1$.
```

```aufgabe
id: gs-epsdelta-linear
titel: Das passende δ bei einer Geraden
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Es gilt $\lim\limits_{x \to 2} (4x - 3) = 5$. Zur Toleranz $\varepsilon = 0{,}01$ suchst du das **größte** $\delta$,
  sodass aus $0 < |x - 2| < \delta$ folgt: $|(4x - 3) - 5| < \varepsilon$.
teile:
  - typ: zahl
    label: '$\delta$'
    loesung: "0.01/4"
    anzeige: '0{,}0025'
    fehler:
      - wert: "0.04"
        meldung: |
          Du hast mit $4$ multipliziert statt dividiert. Aus $4\,|x - 2| < 0{,}01$ folgt $|x - 2| < \frac{0{,}01}{4}$.
      - wert: "0.01"
        meldung: |
          Mit $\delta = 0{,}01$ ist zum Beispiel $x = 2{,}005$ erlaubt. Dann ist $|(4x - 3) - 5| = 4 \cdot 0{,}005 = 0{,}02$, zu groß. Der Faktor $4$ muss berücksichtigt werden.
hinweise:
  - '$|(4x - 3) - 5| = |4x - 8| = 4\,|x - 2|$.'
loesung: |
  Ansatz: Wir formen den Abstand $|f(x) - L|$ so um, dass der Abstand $|x - 2|$ sichtbar wird.
  ---
  $|(4x - 3) - 5| = |4x - 8| = 4\,|x - 2|$. Das ist genau dann $< 0{,}01$, wenn $|x - 2| < \frac{0{,}01}{4} = 0{,}0025$.
  ---
  Also ist $\delta = 0{,}0025$. Allgemein passt bei dieser Funktion $\delta = \frac{\varepsilon}{4}$. Probe: $x = 2{,}002$ ergibt $4x = 8{,}008$ und $|8{,}008 - 3 - 5| = 0{,}008 < 0{,}01$ ✓.
```

```aufgabe
id: gs-band-pruefen
titel: Liegt der Funktionswert im Band?
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Es sei $f(x) = 3x - 2$, $x_0 = 2$ und $L = 4$. Die Toleranz ist $\varepsilon = 0{,}3$.

  a) Berechne den Abstand $|f(2{,}08) - 4|$.

  b) Gib das größte $\delta$ an, das zu dieser Toleranz passt.
teile:
  - typ: zahl
    label: 'a) $|f(2{,}08) - 4|$'
    loesung: "abs(3*2.08 - 2 - 4)"
    anzeige: '0{,}24'
    fehler:
      - wert: "0.08"
        meldung: |
          $0{,}08$ ist der Abstand von $x$ zu $x_0$. Gefragt ist der Abstand des **Funktionswerts** $f(2{,}08) = 4{,}24$ von $L = 4$.
  - typ: zahl
    label: 'b) größtes $\delta$'
    loesung: "0.3/3"
    anzeige: '0{,}1'
    fehler:
      - wert: "0.9"
        meldung: |
          Du hast $\varepsilon$ mit $3$ multipliziert. Aus $3\,|x - 2| < 0{,}3$ folgt aber $|x - 2| < \frac{0{,}3}{3}$.
      - wert: "0.3"
        meldung: |
          $\delta$ ist nicht automatisch gleich $\varepsilon$. Die Gerade hat die Steigung $3$. Sie verstärkt jeden Abstand in $x$ um den Faktor $3$.
hinweise:
  - '$f(2{,}08) = 3 \cdot 2{,}08 - 2$.'
loesung: |
  Ansatz: Für a) rechnen wir den Funktionswert aus. Für b) formen wir $|f(x) - 4|$ allgemein um.
  ---
  a) $f(2{,}08) = 6{,}24 - 2 = 4{,}24$. Abstand $|4{,}24 - 4| = 0{,}24 < 0{,}3$. Der Wert liegt im Band.
  ---
  b) $|3x - 2 - 4| = |3x - 6| = 3\,|x - 2| < 0{,}3$ gilt genau für $|x - 2| < 0{,}1$. Also ist $\delta = 0{,}1$. Passend dazu lag $2{,}08$ im Streifen und $f(2{,}08)$ im Band ✓.
```

```aufgabe
id: gs-delta-parabel
titel: Das größte δ an einer Parabel
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Es sei $f(x) = x^2$, $x_0 = 2$ und $L = 4$. Die Toleranz ist $\varepsilon = 0{,}41$. Bestimme das größte $\delta$,
  sodass aus $0 < |x - 2| < \delta$ folgt: $|x^2 - 4| < 0{,}41$.
teile:
  - typ: zahl
    label: '$\delta$'
    loesung: "sqrt(4.41) - 2"
    anzeige: '0{,}1'
    fehler:
      - wert: "2 - sqrt(3.59)"
        meldung: |
          Das ist der Platz nach **links**. Der Streifen reicht aber nach beiden Seiten gleich weit, und nach rechts ist weniger Platz. Nimm den kleineren Abstand.
      - wert: "0.41"
        meldung: |
          $\delta$ ist nicht gleich $\varepsilon$. Löse $3{,}59 < x^2 < 4{,}41$ nach $x$ auf und miss die Abstände zu $2$.
hinweise:
  - 'Schreibe das Band als Doppelungleichung: $4 - 0{,}41 < x^2 < 4 + 0{,}41$.'
  - 'Zieh die Wurzel und berechne die Abstände der beiden Grenzen zu $2$. Der Streifen muss auf beiden Seiten passen.'
loesung: |
  Ansatz: Wir übersetzen das Band in eine Bedingung für $x$ und messen, wie viel Platz links und rechts von $2$ ist.
  ---
  $|x^2 - 4| < 0{,}41$ heißt $3{,}59 < x^2 < 4{,}41$. Für $x$ nahe bei $2$ ist $x > 0$, also $\sqrt{3{,}59} < x < \sqrt{4{,}41}$, das heißt ungefähr $1{,}8947 < x < 2{,}1$.
  ---
  Platz nach links: $2 - 1{,}8947 = 0{,}1053$. Platz nach rechts: $2{,}1 - 2 = 0{,}1$.
  ---
  Der symmetrische Streifen muss auf beiden Seiten passen. Also ist $\delta = 0{,}1$. Probe: $x = 2{,}099$ ergibt $x^2 = 4{,}405801 < 4{,}41$ ✓.
```

```aufgabe
id: gs-quantoren-reihenfolge
titel: Welche Formulierung ist die Definition?
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: |
  Welche Aussage drückt $\lim\limits_{x \to x_0} f(x) = L$ korrekt aus?
teile:
  - typ: auswahl
    optionen:
      - 'Zu jedem $\varepsilon > 0$ gibt es ein $\delta > 0$, sodass für alle $x$ mit $0 < |x - x_0| < \delta$ gilt: $|f(x) - L| < \varepsilon$.'
      - 'Es gibt ein $\delta > 0$, sodass für alle $\varepsilon > 0$ und alle $x$ mit $0 < |x - x_0| < \delta$ gilt: $|f(x) - L| < \varepsilon$.'
      - 'Zu jedem $\varepsilon > 0$ gibt es ein $x$ mit $0 < |x - x_0| < \varepsilon$ und $|f(x) - L| < \varepsilon$.'
      - 'Zu jedem $\delta > 0$ gibt es ein $\varepsilon > 0$, sodass für alle $x$ mit $0 < |x - x_0| < \delta$ gilt: $|f(x) - L| < \varepsilon$.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Hier steht „es gibt ein $\delta$“ vor „für alle $\varepsilon$“. Dann müsste ein fester Streifen für jede Toleranz passen. Das zwingt $f$, im Streifen konstant gleich $L$ zu sein.
      - wert: 2
        meldung: |
          Ein einzelnes $x$ mit passendem Funktionswert reicht nicht. Die Vorzeichenfunktion erfüllt diese Aussage an der Stelle $0$ mit $L = 1$, hat dort aber keinen Grenzwert.
      - wert: 3
        meldung: |
          Hier sind die Rollen vertauscht. Zu jedem Streifen gibt es irgendein Band. Wenn $f$ beschränkt ist (also nie über eine feste Schranke hinauswächst), ist das immer wahr: Man nimmt einfach ein sehr breites Band. Es sagt nichts über „beliebig nahe“.
hinweise:
  - 'Wer gibt zuerst etwas vor, die Skeptikerin mit $\varepsilon$ oder der Beweisende mit $\delta$?'
  - 'Prüfe bei jeder Option: Muss es für **alle** $x$ im Streifen gelten oder nur für ein einziges?'
loesung: |
  Ansatz: Die Definition hat drei Teile in fester Reihenfolge: für jedes $\varepsilon$, gibt es ein $\delta$, für alle $x$ im Streifen.
  ---
  Option 1 hat genau diese Reihenfolge. Option 2 vertauscht die ersten beiden Teile, Option 3 verlangt nur ein einzelnes $x$, Option 4 vertauscht die Rollen von $\varepsilon$ und $\delta$.
  ---
  Richtig ist also nur Option 1.
```

```aufgabe
id: gs-epsdelta-gefuehrt
titel: Ein δ in vier Schritten
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Es gilt $\lim\limits_{x \to -1} (5x + 2) = -3$. Bestimme zu $\varepsilon = 0{,}05$ das größte passende $\delta$.
teile:
  - typ: zahl
    label: '$\delta$'
    loesung: "0.05/5"
    anzeige: '0{,}01'
    fehler:
      - wert: "0.25"
        meldung: |
          Du hast $\varepsilon$ mit $5$ multipliziert. Der Funktionswert ändert sich fünfmal so stark wie $x$. Also muss $x$ fünfmal **genauer** sein.
hinweise:
  - 'Berechne $|f(x) - (-3)| = |5x + 2 + 3|$ und hebe die $5$ heraus.'
  - 'Achte auf die Stelle: $x_0 = -1$, also ist der Abstand $|x - (-1)| = |x + 1|$.'
gefuehrt:
  - text: Vereinfache $|f(x) - L| = |5x + 2 - (-3)|$. Welcher Term steht im Betrag?
    teil:
      typ: term
      loesung: "5x + 5"
      fehler:
        - wert: "5x - 1"
          meldung: 'Minus mal minus: $-(-3) = +3$. Also $5x + 2 + 3$.'
    erklaerung: '$5x + 2 + 3 = 5x + 5 = 5(x + 1)$. Der Abstand ist also $5\,|x + 1|$.'
  - text: Warum ist $|x + 1|$ der Abstand von $x$ zur Stelle $x_0 = -1$?
    erklaerung: 'Der Abstand zu $-1$ ist $|x - (-1)| = |x + 1|$. Genau dieser Faktor sollte sichtbar werden.'
  - text: Für welche $x$ ist $5\,|x + 1| < 0{,}05$? Gib die Schranke für $|x + 1|$ an.
    teil:
      typ: zahl
      loesung: "0.01"
    erklaerung: 'Division durch $5$: $|x + 1| < 0{,}01$. Also ist $\delta = 0{,}01$.'
  - text: Probe mit $x = -0{,}995$. Wie groß ist $|f(-0{,}995) - (-3)|$?
    teil:
      typ: zahl
      loesung: "abs(5*(-0.995) + 2 + 3)"
    erklaerung: '$f(-0{,}995) = -4{,}975 + 2 = -2{,}975$. Der Abstand zu $-3$ ist $0{,}025 < 0{,}05$ ✓.'
loesung: |
  Ansatz: Wir formen $|f(x) - L|$ so um, dass der Abstand $|x - x_0| = |x + 1|$ als Faktor erscheint.
  ---
  $|5x + 2 - (-3)| = |5x + 5| = 5\,|x + 1|$.
  ---
  $5\,|x + 1| < 0{,}05$ gilt genau für $|x + 1| < 0{,}01$. Also $\delta = 0{,}01$.
  ---
  Probe: $x = -0{,}995$ liegt im Streifen. $f(-0{,}995) = -2{,}975$, Abstand zu $-3$ ist $0{,}025 < 0{,}05$ ✓.
```

```aufgabe
id: gs-delta-kleiner
titel: Welche δ passen auch?
niveau: 2
lernziel: 1
kompetenz: begruenden
angabe: |
  Es sei $f(x) = 5x$, $x_0 = 1$, $L = 5$ und $\varepsilon = 0{,}1$. Das größte passende $\delta$ ist $0{,}02$.
  Welche der folgenden Werte sind ebenfalls passende $\delta$? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen: ['$\delta = 0{,}01$', '$\delta = 0{,}015$', '$\delta = 0{,}02$', '$\delta = 0{,}03$']
    richtig: [0, 1, 2]
    fehler:
      - wert: [2]
        meldung: |
          $0{,}02$ passt, aber nicht nur das. Ein **schmalerer** Streifen liegt ganz im breiteren. Was im breiten Streifen gilt, gilt auch in jedem schmaleren.
      - wert: [0, 1, 2, 3]
        meldung: |
          Mit $\delta = 0{,}03$ wäre $x = 1{,}025$ erlaubt. Dann ist $|5 \cdot 1{,}025 - 5| = 0{,}125 > 0{,}1$. Ein breiterer Streifen kann zu weit sein.
hinweise:
  - 'Rechne nach: $|5x - 5| = 5\,|x - 1|$.'
  - 'Überlege: Wenn alle $x$ mit $|x - 1| < 0{,}02$ funktionieren, was ist dann mit allen $x$ mit $|x - 1| < 0{,}01$?'
loesung: |
  Ansatz: $|5x - 5| = 5\,|x - 1| < 0{,}1$ gilt genau für $|x - 1| < 0{,}02$.
  ---
  Jeder Streifen mit $\delta \le 0{,}02$ liegt ganz im Streifen mit $\delta = 0{,}02$. Also passen $0{,}01$, $0{,}015$ und $0{,}02$.
  ---
  $\delta = 0{,}03$ passt nicht: $x = 1{,}025$ liegt im Streifen, aber $|f(x) - 5| = 0{,}125 > 0{,}1$. Merke: Hat man ein passendes $\delta$, darf man es jederzeit verkleinern.
```

```aufgabe
id: gs-sprung-kein-grenzwert
titel: Kein δ kann helfen
niveau: 3
lernziel: 1
kompetenz: begruenden
angabe: |
  Die Funktion $H$ sei $H(x) = 0$ für $x < 0$ und $H(x) = 1$ für $x > 0$. Wir prüfen, ob $L = 1$ der Grenzwert an der Stelle $0$ ist.
  Die Skeptikerin wählt $\varepsilon = 0{,}5$, der Beweisende nennt irgendein $\delta > 0$.

  a) Die Skeptikerin antwortet mit $x = -\frac{\delta}{2}$. Wie groß ist $|H(x) - 1|$?

  b) Begründe, warum $1$ nicht der Grenzwert ist, und warum auch keine andere Zahl $L$ der Grenzwert sein kann.
teile:
  - typ: zahl
    label: 'a) $|H(-\frac{\delta}{2}) - 1|$'
    loesung: "abs(0 - 1)"
    anzeige: '1'
  - typ: text
    label: 'b) Begründung'
    muster: |
      Die Zahl $x = -\frac{\delta}{2}$ liegt im Streifen, denn $0 < \frac{\delta}{2} < \delta$. Ihr Funktionswert ist $0$, und
      $|0 - 1| = 1$ ist nicht kleiner als $\varepsilon = 0{,}5$. Das klappt für **jedes** $\delta$, also gewinnt die Skeptikerin,
      und $1$ ist nicht der Grenzwert.
      Für ein beliebiges $L$ wählt sie ebenfalls $\varepsilon = 0{,}5$. Im Streifen liegen immer Stellen mit Wert $0$ und Stellen
      mit Wert $1$. Beide müssten weniger als $0{,}5$ von $L$ entfernt sein. Dann wäre der Abstand von $0$ und $1$ kleiner als
      $0{,}5 + 0{,}5 = 1$. Er ist aber genau $1$. Also gibt es keinen Grenzwert.
hinweise:
  - 'Prüfe zuerst, ob $x = -\frac{\delta}{2}$ wirklich im Streifen $0 < |x| < \delta$ liegt.'
  - 'Für beliebiges $L$: Im Streifen liegen Werte $0$ und Werte $1$. Können beide weniger als $0{,}5$ von derselben Zahl $L$ entfernt sein?'
loesung: |
  Ansatz: Wir spielen die Rolle der Skeptikerin und suchen zu jedem $\delta$ eine Stelle im Streifen, deren Funktionswert außerhalb des Bandes liegt.
  ---
  a) $x = -\frac{\delta}{2} < 0$, also $H(x) = 0$ und $|H(x) - 1| = 1$.
  ---
  Der Abstand $1$ ist nicht kleiner als $0{,}5$. Weil das für jedes $\delta$ klappt, ist $1$ nicht der Grenzwert.
  ---
  Für ein beliebiges $L$: Im Streifen liegen $x$ mit $H(x) = 0$ und $x$ mit $H(x) = 1$. Wären beide weniger als $0{,}5$ von $L$ entfernt, dann wären $0$ und $1$ weniger als $1$ voneinander entfernt. Das ist falsch.
  ---
  Antwort: $H$ hat an der Stelle $0$ keinen Grenzwert. Das passt zur Anschauung: Der Graph springt dort von $0$ auf $1$.
```

## ε-δ-Beweise führen

```aufgabe
id: gs-beweis-vorwissen
titel: Einen Faktor aus dem Betrag holen
niveau: 1
art: check
angabe: |
  Welcher Ausdruck ist gleich $|6 - 3x|$?
  (Vorwissen aus [Kapitel 1, Betrag und Intervalle](/lernen/mathe3/zahlen/betrag-und-intervalle).)
teile:
  - typ: auswahl
    optionen: ['$3\,|x - 2|$', '$-3\,|x - 2|$', '$3\,|x + 2|$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Ein Betrag ist nie negativ, $-3\,|x - 2|$ aber schon. Es gilt $|-3| = 3$, das Minus verschwindet im Betrag.
      - wert: 2
        meldung: |
          Heb $-3$ heraus: $6 - 3x = -3(x - 2)$. Im Betrag steht also $x - 2$, nicht $x + 2$. Probe mit $x = 2$: $|6 - 6| = 0$, aber $3\,|2 + 2| = 12$.
hinweise:
  - 'Heb $-3$ heraus und verwende $|a \cdot b| = |a| \cdot |b|$.'
loesung: |
  $6 - 3x = -3(x - 2)$.
  ---
  $|6 - 3x| = |-3| \cdot |x - 2| = 3\,|x - 2|$.
```

**Worum geht es in dieser Lektion?** In
[12.2 Die ε-δ-Definition](/lernen/mathe3/grenzwerte-stetigkeit/die-epsilon-delta-definition-idee-und-bausteine)
hast du zu **einer** Toleranz $\varepsilon$ ein passendes $\delta$ gesucht. Ein **Beweis** muss jede Runde des Spiels
gewinnen. Dafür gibt man $\delta$ als **Formel in $\varepsilon$** an und zeigt mit einer Ungleichungskette, dass sie
immer funktioniert.

Ein solcher Beweis entsteht in zwei Durchgängen. Auf dem **Schmierzettel** rechnet man rückwärts: Wie klein muss
$|x - x_0|$ sein? In der **Reinschrift** schreibt man vorwärts: Sei $\varepsilon$ gegeben, wähle $\delta$, dann folgt
$|f(x) - L| < \varepsilon$. Genau so kennst du es von der $\varepsilon$-$N$-Definition aus
[Kapitel 11, Einen Grenzwert mit der Definition beweisen](/lernen/mathe3/grenzwerte-folgen/einen-grenzwert-mit-der-definition-beweisen).

### Ein Bild: eine Maschine für δ

Stell dir einen Beweis als kleine Maschine vor. Oben wirft die Skeptikerin eine Toleranz $\varepsilon$ hinein, unten
kommt ein Abstand $\delta$ heraus. Die Maschine ist die Formel, zum Beispiel $\delta = \frac{\varepsilon}{3}$. Der
Beweis besteht aus zwei Teilen: Erstens gibst du die Maschine an. Zweitens zeigst du, dass das ausgegebene $\delta$
**immer** funktioniert, egal welches $\varepsilon$ hineingeworfen wurde. Einzelne Zahlenproben wie in [12.2](/lernen/mathe3/grenzwerte-stetigkeit/die-epsilon-delta-definition-idee-und-bausteine) sind nur
Testläufe der Maschine, noch kein Beweis.

### Der einfachste Fall: Geraden

:::beispiel[ε-δ-Beweis für eine Gerade]
Behauptung: $\lim\limits_{x \to 2} (3x + 1) = 7$.

**Schmierzettel.** Wir wollen $|f(x) - 7| < \varepsilon$ erreichen. Wir formen den Abstand um, bis $|x - 2|$
sichtbar wird:
$$|f(x) - 7| = |3x + 1 - 7| = |3x - 6| = 3\,|x - 2|.$$
Das ist kleiner als $\varepsilon$, sobald $|x - 2| < \frac{\varepsilon}{3}$ ist. Also wählen wir $\delta = \frac{\varepsilon}{3}$.

**Reinschrift.** Sei $\varepsilon > 0$ beliebig. Wir setzen $\delta = \frac{\varepsilon}{3}$. Dann ist $\delta > 0$. Für
alle $x$ mit $0 < |x - 2| < \delta$ gilt
$$|f(x) - 7| = 3\,|x - 2| < 3\delta = 3 \cdot \frac{\varepsilon}{3} = \varepsilon.$$

**Was haben wir gezeigt?** Zu jeder Toleranz $\varepsilon$ liefert die Formel $\delta = \frac{\varepsilon}{3}$ einen
passenden Streifen. Damit gewinnt der Beweisende jede Runde, und der Grenzwert ist $7$.
:::

Bei einer Geraden $f(x) = mx + b$ mit $m \neq 0$ passt immer $\delta = \frac{\varepsilon}{|m|}$. Die Steigung $m$
verstärkt jeden Abstand in $x$ um den Faktor $|m|$. Deshalb muss $x$ um diesen Faktor genauer stimmen.

### Wenn der Faktor nicht konstant ist: abschätzen

Bei einer Parabel bleibt nach dem Umformen ein Faktor übrig, der von $x$ abhängt. Den darf man nicht in $\delta$
schreiben, denn $\delta$ darf nicht von $x$ abhängen. Stattdessen **schätzt man ihn nach oben ab**: Man sucht eine
feste Zahl $K$, die er im Streifen nie überschreitet.

:::beispiel[ε-δ-Beweis für eine Parabel]
Behauptung: $\lim\limits_{x \to 2} x^2 = 4$.

**Schmierzettel, Schritt 1: umformen.** Nach der dritten binomischen Formel ist
$|x^2 - 4| = |x - 2| \cdot |x + 2|$. Der Faktor $|x - 2|$ ist der gewünschte Abstand. Der Faktor $|x + 2|$ stört.

**Schritt 2: den störenden Faktor beschränken.** Wir verlangen zusätzlich $\delta \le 1$. Dann liegt jedes $x$ im
Streifen zwischen $1$ und $3$. Für solche $x$ liegt $x + 2$ zwischen $3$ und $5$, also ist $|x + 2| < 5$.

**Schritt 3: zusammensetzen.** Im Streifen gilt dann $|x^2 - 4| < |x - 2| \cdot 5$. Das ist kleiner als
$\varepsilon$, sobald $|x - 2| < \frac{\varepsilon}{5}$ ist. Wir brauchen also **beides**: $\delta \le 1$ und
$\delta \le \frac{\varepsilon}{5}$. Das leistet $\delta = \min\!\left(1, \frac{\varepsilon}{5}\right)$, die kleinere der
beiden Zahlen.

**Reinschrift.** Sei $\varepsilon > 0$ beliebig. Setze $\delta = \min\!\left(1, \frac{\varepsilon}{5}\right) > 0$. Sei $x$
mit $0 < |x - 2| < \delta$. Wegen $\delta \le 1$ ist $1 < x < 3$, also $|x + 2| < 5$. Wegen
$\delta \le \frac{\varepsilon}{5}$ folgt
$$|x^2 - 4| = |x - 2| \cdot |x + 2| < \delta \cdot 5 \le \frac{\varepsilon}{5} \cdot 5 = \varepsilon.$$

**Zwei Zahlenbeispiele für die Formel.** Für $\varepsilon = 1$ ist $\delta = \min(1;\ 0{,}2) = 0{,}2$. Für
$\varepsilon = 10$ ist $\delta = \min(1;\ 2) = 1$.
:::

Warum braucht man das Minimum? Ohne die Schranke $1$ wäre bei $\varepsilon = 10$ der Streifen $\delta = 2$ erlaubt.
Dann läge $x = 3{,}9$ im Streifen, denn $|3{,}9 - 2| = 1{,}9 < 2$. Aber $|3{,}9^2 - 4| = 11{,}21 > 10$. Die Abschätzung
$|x + 2| < 5$ gilt eben nur für $1 < x < 3$. Das Minimum sorgt dafür, dass sie im ganzen Streifen gültig bleibt.

:::beispiel[Noch eine Parabel, diesmal mit kleinerer Schranke]
Behauptung: $\lim\limits_{x \to -1} (x^2 + 3x) = -2$.

**Schmierzettel, umformen.** $|x^2 + 3x - (-2)| = |x^2 + 3x + 2| = |x + 1| \cdot |x + 2|$. Der Faktor $|x + 1|$ ist der
Abstand von $x$ zur Stelle $-1$.

**Abschätzen.** Mit $\delta \le 1$ liegt $x$ zwischen $-2$ und $0$. Dann liegt $x + 2$ zwischen $0$ und $2$, also ist
$|x + 2| < 2$. Die Schranke ist hier $K = 2$.

**Wählen und Reinschrift.** Sei $\varepsilon > 0$, $\delta = \min\!\left(1, \frac{\varepsilon}{2}\right)$. Für
$0 < |x + 1| < \delta$ gilt $|x^2 + 3x + 2| = |x + 1| \cdot |x + 2| < \delta \cdot 2 \le \varepsilon$.

**Probe.** Für $\varepsilon = 0{,}1$ ist $\delta = 0{,}05$. Die Stelle $x = -0{,}96$ liegt im Streifen, und
$|0{,}9216 - 2{,}88 + 2| = 0{,}0416 < 0{,}1$ ✓.

**Was haben wir gezeigt?** Für jede Toleranz liefert die Formel einen Streifen, in dem alle Funktionswerte nahe genug
bei $-2$ liegen. Genau das bedeutet $\lim\limits_{x \to -1}(x^2 + 3x) = -2$.
:::

:::merke[Rezept für ε-δ-Beweise]
1. **Umformen:** $|f(x) - L|$ so umschreiben, dass der Faktor $|x - x_0|$ sichtbar wird: $|f(x) - L| = |x - x_0| \cdot R(x)$.
2. **Abschätzen:** Ist der Rest $R(x)$ nicht konstant, $\delta \le 1$ verlangen und eine feste Schranke $R(x) < K$ für alle $x$ mit $|x - x_0| < 1$ suchen.
3. **Wählen:** $\delta = \frac{\varepsilon}{K}$ bei konstantem Rest, sonst $\delta = \min\!\left(1, \frac{\varepsilon}{K}\right)$.
4. **Reinschrift vorwärts:** „Sei $\varepsilon > 0$ beliebig. Wähle $\delta = \ldots$. Für alle $x$ mit $0 < |x - x_0| < \delta$ gilt …“ und die Ungleichungskette bis $< \varepsilon$.
:::

```aufgabe
id: gs-min-check
titel: Das Minimum ablesen
niveau: 1
art: check
angabe: |
  Im Parabel-Beweis ist $\delta = \min\!\left(1, \frac{\varepsilon}{5}\right)$. Welches $\delta$ ergibt sich für $\varepsilon = 2$?
teile:
  - typ: zahl
    label: '$\delta$'
    loesung: "min(1, 2/5)"
    anzeige: '0{,}4'
    fehler:
      - wert: "1"
        meldung: |
          $\min$ wählt die **kleinere** der beiden Zahlen. Vergleiche $1$ mit $\frac{2}{5} = 0{,}4$.
hinweise:
  - 'Berechne $\frac{\varepsilon}{5}$ und vergleiche mit $1$.'
loesung: |
  $\frac{2}{5} = 0{,}4$, und $0{,}4 < 1$.
  ---
  Also ist $\delta = \min(1;\ 0{,}4) = 0{,}4$. Hier greift die Schranke $\frac{\varepsilon}{5}$, die Schranke $1$ ist ohnehin erfüllt.
```

:::pruefung[So klingt ein ε-δ-Beweis in der mündlichen Prüfung]
Die Prüferin achtet auf drei Stellen.

1. **Der Anfang:** „Sei $\varepsilon > 0$ beliebig.“ Damit sagst du, dass dein Argument für jede Toleranz gilt.
2. **Die Wahl:** „Ich wähle $\delta = \min(1, \frac{\varepsilon}{5})$.“ Sag dazu, warum du die $1$ brauchst: „Damit $x$ zwischen $1$ und $3$ liegt und $|x + 2| < 5$ gilt.“
3. **Die Kette:** Jedes Ungleichheitszeichen braucht einen Grund. Bei „$< \delta \cdot 5$“ sagst du: „weil $|x - 2| < \delta$ und $|x + 2| < 5$ ist“.

Wer nur das Ergebnis $\delta = \frac{\varepsilon}{5}$ nennt, ohne die Schranke $1$, bekommt fast sicher die Nachfrage:
„Warum ist $|x + 2|$ kleiner als $5$?“
:::

:::achtung[In die falsche Richtung abschätzen]
Falsch: „Für $|x - 2| < 1$ ist $|x + 2| > 3$. Also gilt $|x^2 - 4| < 3\,|x - 2|$, und ich wähle $\delta = \frac{\varepsilon}{3}$.“

Richtig: Aus $|x + 2| > 3$ folgt nur $|x^2 - 4| > 3\,|x - 2|$, also eine Abschätzung **nach unten**. Damit beweist man
nicht, dass etwas klein ist. Für den Beweis braucht man eine **obere** Schranke: $|x + 2| < 5$. Ein Gegenbeispiel zur
falschen Wahl: $\varepsilon = 0{,}3$, $\delta = 0{,}1$, $x = 2{,}09$. Dann ist $|2{,}09^2 - 4| = 0{,}3681 > 0{,}3$.
:::

:::achtung[Mit der Behauptung anfangen]
Falsch: „Es gilt $|x^2 - 4| < \varepsilon$. Daraus folgt $|x - 2|\,|x + 2| < \varepsilon$, also ist der Grenzwert $4$.“

Richtig: So setzt man voraus, was man zeigen will. Die Reinschrift beginnt mit $\varepsilon$, wählt $\delta$ und
**folgert** daraus $|x^2 - 4| < \varepsilon$. Die Rückwärtsrechnung gehört auf den Schmierzettel. In der Reinschrift
steht die Ungleichung $< \varepsilon$ ganz am Ende der Kette.
:::

```reflexion
frage: Warum verlangt man im Parabel-Beweis zusätzlich δ ≤ 1? Was würde schiefgehen, wenn man einfach δ = ε/5 nimmt?
antwort: |
  Die Schranke $|x + 2| < 5$ gilt nur für $x$ zwischen $1$ und $3$, also für $|x - 2| < 1$. Bei großen Toleranzen
  wäre $\frac{\varepsilon}{5}$ größer als $1$, und der Streifen würde Stellen enthalten, an denen $|x + 2|$ größer als $5$ ist.
  Bei $\varepsilon = 10$ und $\delta = 2$ liegt $x = 3{,}9$ im Streifen, und $|3{,}9^2 - 4| = 11{,}21 > 10$. Das Minimum mit
  $1$ hält den Streifen so schmal, dass die Abschätzung überall gilt.
```

```aufgabe
id: gs-faktor-sichtbar
titel: Den Abstand als Faktor sichtbar machen
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Es gilt $\lim\limits_{x \to 2} (10 - 3x) = 4$. Bestimme die Zahl $k > 0$ mit $|(10 - 3x) - 4| = k\,|x - 2|$.
teile:
  - typ: zahl
    label: '$k$'
    loesung: "3"
    fehler:
      - wert: "-3"
        meldung: |
          $-3$ ist der Faktor, den du aus $6 - 3x = -3(x - 2)$ heraushebst. Im Betrag wird daraus $|-3| = 3$. Ein Betrag ist nie negativ, und gesucht ist $k > 0$.
      - wert: "6"
        meldung: |
          Die $6$ ist das konstante Glied von $6 - 3x$. Gesucht ist der Faktor vor $(x - 2)$ nach dem Herausheben.
hinweise:
  - 'Vereinfache zuerst: $(10 - 3x) - 4 = 6 - 3x$. Dann $-3$ herausheben.'
loesung: |
  Ansatz: Wir formen den Abstand so um, dass $|x - 2|$ als Faktor dasteht.
  ---
  $(10 - 3x) - 4 = 6 - 3x = -3(x - 2)$, also $|(10 - 3x) - 4| = |-3|\,|x - 2| = 3\,|x - 2|$. Damit ist $k = 3$ und $\delta = \frac{\varepsilon}{3}$ passt. Die negative Steigung ändert daran nichts.
```

```aufgabe
id: gs-delta-formel
titel: δ als Formel in ε
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Es gilt $\lim\limits_{x \to -1} (6x + 5) = -1$. Welche Wahl von $\delta$ funktioniert für **jedes** $\varepsilon > 0$?
teile:
  - typ: auswahl
    optionen: ['$\delta = \frac{\varepsilon}{6}$', '$\delta = 6\varepsilon$', '$\delta = \varepsilon - 6$', '$\delta = \frac{\varepsilon}{5}$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Mit $\delta = 6\varepsilon$ wäre der Streifen viel zu breit. Dann ist $|f(x) - L| = 6\,|x + 1|$ bis zu $36\varepsilon$ groß.
      - wert: 2
        meldung: |
          Für $\varepsilon < 6$ wäre $\varepsilon - 6$ negativ. Ein $\delta$ muss aber immer positiv sein.
      - wert: 3
        meldung: |
          Die $5$ ist das konstante Glied der Geraden. Entscheidend ist die Steigung $6$: $|6x + 5 + 1| = 6\,|x + 1|$.
hinweise:
  - 'Berechne $|f(x) - L| = |6x + 5 - (-1)|$ und hebe heraus.'
loesung: |
  Ansatz: Wir machen den Abstand zur Stelle $-1$ sichtbar.
  ---
  $|6x + 5 + 1| = |6x + 6| = 6\,|x + 1|$. Das ist $< \varepsilon$ für $|x + 1| < \frac{\varepsilon}{6}$. Also passt $\delta = \frac{\varepsilon}{6}$ für jedes $\varepsilon > 0$.
```

```aufgabe
id: gs-epsdelta-beweis
titel: Einen ε-δ-Beweis aufschreiben
niveau: 2
lernziel: 1
kompetenz: begruenden
angabe: |
  Beweise mit der $\varepsilon$-$\delta$-Definition: $\lim\limits_{x \to 1} (5 - 2x) = 3$. Schreib Schmierzettel und Reinschrift.
teile:
  - typ: text
    muster: |
      Schmierzettel: $|(5 - 2x) - 3| = |2 - 2x| = 2\,|x - 1|$. Das ist $< \varepsilon$ für $|x - 1| < \frac{\varepsilon}{2}$.

      Reinschrift: Sei $\varepsilon > 0$ beliebig. Wähle $\delta = \frac{\varepsilon}{2}$. Für alle $x$ mit $0 < |x - 1| < \delta$ gilt
      $$|(5 - 2x) - 3| = 2\,|x - 1| < 2\delta = \varepsilon.$$
      Damit ist $\lim\limits_{x \to 1}(5 - 2x) = 3$ bewiesen.
hinweise:
  - 'Forme $|(5 - 2x) - 3|$ so um, dass $|x - 1|$ als Faktor dasteht.'
  - 'Beachte $|-2| = 2$. Das Vorzeichen der Steigung spielt für $\delta$ keine Rolle.'
loesung: |
  Ansatz: Auf dem Schmierzettel suchen wir $\delta$, in der Reinschrift zeigen wir, dass es passt.
  ---
  Schmierzettel: $|(5 - 2x) - 3| = |2 - 2x| = |-2|\,|x - 1| = 2\,|x - 1|$. Kleiner als $\varepsilon$ für $|x - 1| < \frac{\varepsilon}{2}$.
  ---
  Reinschrift: Sei $\varepsilon > 0$. Wähle $\delta = \frac{\varepsilon}{2}$. Für $0 < |x - 1| < \delta$ gilt $|(5 - 2x) - 3| = 2\,|x - 1| < 2\delta = \varepsilon$.
  ---
  Kontrolle mit Zahlen: $\varepsilon = 0{,}1$ ergibt $\delta = 0{,}05$. Für $x = 1{,}04$ ist $|5 - 2{,}08 - 3| = 0{,}08 < 0{,}1$ ✓.
```

```aufgabe
id: gs-beweis-gefuehrt
titel: Ein Parabel-Beweis zum Mitmachen
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Wir beweisen $\lim\limits_{x \to 1} (x^2 + x) = 2$ mit der Wahl $\delta = \min\!\left(1, \frac{\varepsilon}{4}\right)$.
  Welches $\delta$ liefert diese Wahl für $\varepsilon = 0{,}2$?
teile:
  - typ: zahl
    label: '$\delta$ für $\varepsilon = 0{,}2$'
    loesung: "min(1, 0.2/4)"
    anzeige: '0{,}05'
    fehler:
      - wert: "1"
        meldung: |
          Das Minimum ist die **kleinere** der beiden Zahlen. Hier sind es $1$ und $\frac{0{,}2}{4} = 0{,}05$.
      - wert: "0.8"
        meldung: |
          Du hast $\varepsilon$ mit $4$ multipliziert. In der Formel steht $\frac{\varepsilon}{4}$.
hinweise:
  - 'Faktorisiere $x^2 + x - 2$. Eine Nullstelle ist $x = 1$.'
  - 'Für $|x - 1| < 1$ liegt $x$ zwischen $0$ und $2$. Wie groß kann dann $|x + 2|$ höchstens werden?'
gefuehrt:
  - text: 'Faktorisiere: $x^2 + x - 2 = (x - 1) \cdot T$. Welcher Term ist $T$?'
    teil:
      typ: term
      loesung: "x + 2"
      fehler:
        - wert: "x - 2"
          meldung: 'Probe: $(x - 1)(x - 2) = x^2 - 3x + 2$. Gesucht ist $x^2 + x - 2$.'
    erklaerung: '$(x - 1)(x + 2) = x^2 + 2x - x - 2 = x^2 + x - 2$ ✓. Also $|f(x) - 2| = |x - 1| \cdot |x + 2|$.'
  - text: 'Für $|x - 1| < 1$ liegt $x$ zwischen $0$ und $2$. Welche Zahl $K$ ist dann eine obere Schranke für $|x + 2|$?'
    teil:
      typ: zahl
      loesung: "4"
      fehler:
        - wert: "2"
          meldung: '$2$ ist die untere Grenze von $x + 2$ für $x$ zwischen $0$ und $2$. Gesucht ist eine **obere** Schranke.'
    erklaerung: 'Für $0 < x < 2$ ist $2 < x + 2 < 4$, also $|x + 2| < 4$.'
  - text: Überlege, warum deshalb $\delta = \min(1, \frac{\varepsilon}{4})$ passt.
    erklaerung: 'Wegen $\delta \le 1$ gilt $|x + 2| < 4$. Wegen $\delta \le \frac{\varepsilon}{4}$ gilt $|x - 1| \cdot |x + 2| < \frac{\varepsilon}{4} \cdot 4 = \varepsilon$.'
  - text: Welches $\delta$ liefert die Formel für $\varepsilon = 8$?
    teil:
      typ: zahl
      loesung: "min(1, 8/4)"
      fehler:
        - wert: "2"
          meldung: '$\frac{8}{4} = 2$ ist größer als $1$. Das Minimum nimmt die kleinere Zahl.'
    erklaerung: '$\min(1;\ 2) = 1$. Die Schranke $1$ greift, damit $|x + 2| < 4$ gültig bleibt.'
loesung: |
  Ansatz: Wir faktorisieren $|f(x) - 2|$ und schätzen den Restfaktor nach oben ab.
  ---
  $|x^2 + x - 2| = |x - 1| \cdot |x + 2|$. Für $|x - 1| < 1$ ist $0 < x < 2$, also $|x + 2| < 4$.
  ---
  Reinschrift: Sei $\varepsilon > 0$, $\delta = \min(1, \frac{\varepsilon}{4})$. Für $0 < |x - 1| < \delta$ gilt $|x^2 + x - 2| < \delta \cdot 4 \le \varepsilon$.
  ---
  Für $\varepsilon = 0{,}2$ ist $\delta = \min(1;\ 0{,}05) = 0{,}05$. Probe: $x = 1{,}04$ ergibt $|1{,}0816 + 1{,}04 - 2| = 0{,}1216 < 0{,}2$ ✓.
```

```aufgabe
id: gs-beweis-fehler-finden
titel: Welche Zeile ist falsch?
niveau: 2
lernziel: 1
kompetenz: begruenden
angabe: |
  Eine Mitschülerin beweist $\lim\limits_{x \to 3} x^2 = 9$ so:

  - (A) $|x^2 - 9| = |x - 3| \cdot |x + 3|$.
  - (B) Sei $\varepsilon > 0$. Ich wähle $\delta = \frac{\varepsilon}{|x + 3|}$.
  - (C) Für $0 < |x - 3| < \delta$ gilt $|x^2 - 9| < \delta \cdot |x + 3|$.
  - (D) Das ist $\frac{\varepsilon}{|x + 3|} \cdot |x + 3| = \varepsilon$.

  Welche Zeile enthält den entscheidenden Fehler?
teile:
  - typ: auswahl
    optionen: ['(A)', '(B)', '(C)', '(D)']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Zeile (A) ist richtig: dritte binomische Formel und $|a b| = |a|\,|b|$.
      - wert: 2
        meldung: |
          Zeile (C) folgt korrekt aus $|x - 3| < \delta$. Der Fehler steckt früher, in der Wahl von $\delta$.
      - wert: 3
        meldung: |
          Zeile (D) rechnet richtig weiter. Das Problem ist, dass das $\delta$ in dieser Rechnung nicht zulässig gewählt wurde.
hinweise:
  - 'Wovon darf $\delta$ abhängen, und wovon nicht?'
  - 'In welcher Reihenfolge laufen $\varepsilon$, $\delta$ und $x$ im Spiel ab?'
loesung: |
  Ansatz: Wir prüfen jede Zeile gegen die Regeln der Definition.
  ---
  (A), (C) und (D) sind für sich richtig gerechnet. (B) wählt $\delta$ abhängig von $x$. Beim Festlegen von $\delta$ ist $x$ aber noch gar nicht bekannt.
  ---
  Richtig wäre: $\delta \le 1$ verlangen, dann ist $|x + 3| < 7$, und $\delta = \min(1, \frac{\varepsilon}{7})$ wählen. Antwort: Zeile (B).
```

```aufgabe
id: gs-epsdelta-quadrat
titel: δ bei einer Parabel begründen
niveau: 3
lernziel: 1
kompetenz: begruenden
angabe: |
  Für $\lim\limits_{x \to 3} x^2 = 9$ verwendet man die Wahl $\delta = \min\!\big(1, \tfrac{\varepsilon}{7}\big)$.

  a) Begründe, warum für $|x - 3| < 1$ gilt: $|x + 3| < 7$, und führe den Beweis.

  b) Welches $\delta$ liefert diese Wahl für $\varepsilon = 0{,}7$, welches für $\varepsilon = 14$?
teile:
  - typ: text
    label: 'a) Begründung und Beweis'
    muster: |
      Aus $|x - 3| < 1$ folgt $2 < x < 4$, also $5 < x + 3 < 7$ und damit $|x + 3| < 7$.
      Sei $\varepsilon > 0$ und $\delta = \min(1, \tfrac{\varepsilon}{7})$. Für $0 < |x - 3| < \delta$ gilt $|x + 3| < 7$ wegen $\delta \le 1$, und
      $|x^2 - 9| = |x - 3|\,|x + 3| < \delta \cdot 7 \le \tfrac{\varepsilon}{7}\cdot 7 = \varepsilon$.
  - typ: zahl
    label: '$\delta$ für $\varepsilon = 0{,}7$'
    loesung: "min(1, 0.7/7)"
    anzeige: '0{,}1'
  - typ: zahl
    label: '$\delta$ für $\varepsilon = 14$'
    loesung: "min(1, 14/7)"
    anzeige: '1'
hinweise:
  - '$x^2 - 9 = (x - 3)(x + 3)$.'
  - 'Für $\varepsilon = 14$ wäre $\tfrac{\varepsilon}{7} = 2$. Was macht das Minimum daraus?'
loesung: |
  Ansatz: Faktorisieren, den Restfaktor $|x + 3|$ im Streifen $|x - 3| < 1$ abschätzen, dann $\delta$ als Minimum wählen.
  ---
  $|x^2 - 9| = |x - 3|\cdot|x + 3|$. Aus $|x - 3| < 1$ folgt $2 < x < 4$, also $|x + 3| < 7$.
  ---
  Mit $\delta = \min(1, \tfrac{\varepsilon}{7})$ und $0 < |x - 3| < \delta$ gilt $|x^2 - 9| < 7\delta \le \varepsilon$.
  ---
  $\varepsilon = 0{,}7$: $\delta = \min(1;\ 0{,}1) = 0{,}1$. $\varepsilon = 14$: $\delta = \min(1;\ 2) = 1$.
  Das Minimum mit $1$ sorgt dafür, dass die Abschätzung $|x + 3| < 7$ gültig bleibt.
```

```aufgabe
id: gs-epsdelta-kehrwert
titel: Ein Beweis für 1/x
niveau: 3
lernziel: 1
kompetenz: begruenden
angabe: |
  Wir beweisen $\lim\limits_{x \to 1} \dfrac{1}{x} = 1$.

  a) Zeige: $\left|\dfrac1x - 1\right| = \dfrac{|x - 1|}{|x|}$. Für $|x - 1| < \frac12$ ist $\dfrac{1}{|x|}$ kleiner als eine feste Zahl $K$. Gib $K$ an.

  b) Welches $\delta$ liefert die Wahl $\delta = \min\!\left(\frac12, \frac{\varepsilon}{K}\right)$ für $\varepsilon = 0{,}1$?

  c) Schreib die Reinschrift des Beweises.
teile:
  - typ: zahl
    label: 'a) $K$'
    loesung: "2"
  - typ: zahl
    label: 'b) $\delta$ für $\varepsilon = 0{,}1$'
    loesung: "min(0.5, 0.1/2)"
    anzeige: '0{,}05'
  - typ: text
    label: 'c) Reinschrift'
    muster: |
      Sei $\varepsilon > 0$ beliebig. Wähle $\delta = \min\!\left(\frac12, \frac{\varepsilon}{2}\right)$. Sei $0 < |x - 1| < \delta$.
      Wegen $\delta \le \frac12$ ist $x > \frac12$, also $\frac{1}{|x|} < 2$. Dann gilt
      $\left|\frac1x - 1\right| = \frac{|x - 1|}{|x|} < 2\,|x - 1| < 2\delta \le \varepsilon$.
hinweise:
  - 'Auf einen Bruch bringen: $\frac1x - 1 = \frac{1 - x}{x}$.'
  - 'Aus $|x - 1| < \frac12$ folgt $\frac12 < x < \frac32$. Wie groß kann dann $\frac1x$ höchstens werden?'
loesung: |
  Ansatz: Wir bringen den Abstand auf einen Bruch, dann steht $|x - 1|$ im Zähler und $|x|$ im Nenner.
  ---
  a) $\frac1x - 1 = \frac{1 - x}{x}$, also $\left|\frac1x - 1\right| = \frac{|x - 1|}{|x|}$. Für $|x - 1| < \frac12$ ist $x > \frac12$, also $\frac{1}{|x|} < 2$. Damit $K = 2$.
  ---
  Hier braucht man die Schranke $\frac12$ statt $1$: Bei $|x - 1| < 1$ dürfte $x$ beliebig nahe an $0$ liegen, und $\frac1x$ wäre unbeschränkt.
  ---
  b) $\delta = \min(0{,}5;\ 0{,}05) = 0{,}05$.
  ---
  c) Reinschrift wie in der Musterantwort. Probe: $x = 1{,}04$ ergibt $\left|\frac{1}{1{,}04} - 1\right| \approx 0{,}0385 < 0{,}1$ ✓.
```

## Einseitige Grenzwerte

```aufgabe
id: gs-einseitig-vorwissen
titel: Das Vorzeichen einer kleinen Zahl
niveau: 1
art: check
angabe: |
  Welchen Wert hat die Vorzeichenfunktion an der Stelle $-0{,}001$, also $\operatorname{sgn}(-0{,}001)$?
  (Die Vorzeichenfunktion steht in [12.1](/lernen/mathe3/grenzwerte-stetigkeit/vom-folgengrenzwert-zum-funktionsgrenzwert): Sie ist $1$ für positive und $-1$ für negative Zahlen.)
teile:
  - typ: zahl
    loesung: "-1"
    fehler:
      - wert: "0"
        meldung: |
          $-0{,}001$ ist zwar sehr nahe bei $0$, aber nicht gleich $0$. Es ist eine negative Zahl.
      - wert: "-0.001"
        meldung: |
          Die Vorzeichenfunktion gibt nicht die Zahl selbst zurück, sondern nur ihr Vorzeichen als $1$ oder $-1$.
hinweise:
  - 'Ist $-0{,}001$ positiv oder negativ?'
loesung: |
  $-0{,}001 < 0$, die Zahl ist negativ.
  ---
  Also ist $\operatorname{sgn}(-0{,}001) = -1$. Egal wie nahe eine negative Zahl an $0$ liegt, ihr Vorzeichen bleibt $-1$.
```

**Worum geht es in dieser Lektion?** Bei manchen Funktionen sieht die Welt links von einer Stelle ganz anders aus
als rechts davon. Dann betrachtet man die Annäherung **nur von einer Seite**. Das liefert zwei einseitige
Grenzwerte, und mit ihnen entscheidet man, ob der gewöhnliche Grenzwert existiert.

### Ein Beispiel aus dem Alltag

:::beispiel[Paketpreise springen]
Ein Paketdienst verlangt für ein Paket mit der Masse $m$ (in kg) den Preis
$$P(m) = \begin{cases} 4{,}50 \text{ Euro} & 0 < m \le 2 \\ 7{,}90 \text{ Euro} & 2 < m \le 5. \end{cases}$$

**Von links an $2$ kg heran:** Pakete mit $1{,}9$ kg, $1{,}99$ kg, $1{,}999$ kg kosten alle $4{,}50$ Euro. Die
Preise streben gegen $4{,}50$ Euro.

**Von rechts an $2$ kg heran:** Pakete mit $2{,}1$ kg, $2{,}01$ kg, $2{,}001$ kg kosten alle $7{,}90$ Euro. Die
Preise streben gegen $7{,}90$ Euro.

**Was bedeutet das?** Die beiden Seiten liefern verschiedene Zahlen. Ein Gramm mehr über $2$ kg kostet
$7{,}90 - 4{,}50 = 3{,}40$ Euro mehr. Genau an der Stelle $2$ kg gilt der linke Tarif, also $P(2) = 4{,}50$ Euro.
:::

### Die Definition

:::definition[Links- und rechtsseitiger Grenzwert]
Der **linksseitige Grenzwert** $\lim\limits_{x \to x_0^-} f(x) = L$ bedeutet: Für jede Folge $x_n \to x_0$ mit
$x_n < x_0$ gilt $f(x_n) \to L$. Man nähert sich also nur von links, von den kleineren Zahlen her.

Der **rechtsseitige Grenzwert** $\lim\limits_{x \to x_0^+} f(x) = R$ bedeutet dasselbe mit $x_n > x_0$.
:::

Das hochgestellte Minus in $x \to x_0^-$ liest man „von links“, das Plus in $x \to x_0^+$ „von rechts“. Andere
Bücher schreiben $x \nearrow x_0$ für „von links“ und $x \searrow x_0$ für „von rechts“. In der
$\varepsilon$-$\delta$-Sprache ersetzt man den Streifen $0 < |x - x_0| < \delta$ durch eine seiner Hälften: links
$x_0 - \delta < x < x_0$, rechts $x_0 < x < x_0 + \delta$.

Beim Paketpreis ist $\lim\limits_{m \to 2^-} P(m) = 4{,}50$ Euro und $\lim\limits_{m \to 2^+} P(m) = 7{,}90$ Euro.

:::satz[Grenzwert und einseitige Grenzwerte]
Ist $f$ links und rechts von $x_0$ definiert, dann gilt:
$$\lim_{x \to x_0} f(x) = L \iff \lim_{x \to x_0^-} f(x) = L \ \text{ und } \ \lim_{x \to x_0^+} f(x) = L.$$
:::

Das Zeichen $\iff$ liest man „genau dann, wenn“. Der Satz sagt: Der gewöhnliche (beidseitige) Grenzwert existiert
genau dann, wenn **beide** einseitigen Grenzwerte existieren **und gleich** sind. Dann ist er dieser gemeinsame
Wert. Beim Paketpreis gibt es also keinen Grenzwert an der Stelle $2$ kg.

:::beispiel[Einseitige Grenzwerte einer stückweisen Funktion]
$$f(x) = \begin{cases} x^2 & x < 1 \\ 3 - x & x \ge 1 \end{cases}$$

**Links von $1$** gilt der Term $x^2$. Der ist ein Polynom, man darf einsetzen:
$\lim\limits_{x \to 1^-} f(x) = 1^2 = 1$.

**Rechts von $1$** gilt der Term $3 - x$: $\lim\limits_{x \to 1^+} f(x) = 3 - 1 = 2$.

**Ergebnis:** Die einseitigen Grenzwerte $1$ und $2$ sind verschieden. Der Graph **springt** bei $x = 1$ um
$2 - 1 = 1$ nach oben, und $\lim\limits_{x \to 1} f(x)$ existiert nicht. Der Funktionswert ist $f(1) = 3 - 1 = 2$,
denn für $x = 1$ gilt die Bedingung $x \ge 1$.
:::

```plot
x: [-1.5, 3.5]
y: [-0.5, 3]
graphen:
  - { f: "x^2", label: "x²", farbe: 0, von: -1.5, bis: 1 }
  - { f: "3 - x", label: "3 − x", farbe: 1, von: 1, bis: 3.5 }
punkte:
  - { x: 1, y: 1, offen: true, farbe: 0 }
  - { x: 1, y: 2, label: "f(1) = 2", farbe: 1 }
beschriftung: Stückweise Funktion mit Sprung bei x = 1. Der linksseitige Grenzwert ist 1 (offener Punkt), der rechtsseitige ist 2. Der Funktionswert f(1) = 2 gehört zum rechten Ast (voller Punkt).
```

:::pruefung[Nahtstellen richtig zeichnen]
In eine Skizze gehört an jede Nahtstelle ein **voller Punkt** für den Funktionswert. Ein **offener Kreis**
markiert einen Randpunkt, der nicht zum Graphen gehört. Sag beim Zeichnen dazu:
„Der volle Punkt ist $f(1) = 2$, weil für $x = 1$ der Term $3 - x$ gilt. Der offene Kreis bei $(1 \mid 1)$ zeigt den
linksseitigen Grenzwert.“ Prüferinnen schauen genau auf diese Punkte.
:::

### Einseitig gegen unendlich

Manchmal wachsen die Funktionswerte von einer Seite über alle Grenzen. Dann schreibt man $+\infty$ oder $-\infty$
als **uneigentlichen** Grenzwert. Das Zeichen $\infty$ heißt „unendlich“. Es ist keine Zahl, sondern eine Abkürzung
für „wird größer als jede Zahl“.

:::beispiel[Ein Pol mit Vorzeichenwechsel]
Wir untersuchen $f(x) = \dfrac{1}{x - 2}$ an der Stelle $2$. Dort ist der Nenner $0$.

**Von links:** Für $x < 2$ ist $x - 2$ eine kleine **negative** Zahl. Zum Beispiel ist
$f(1{,}99) = \frac{1}{-0{,}01} = -100$ und $f(1{,}999) = -1000$. Die Werte fallen unter jede Schranke:
$\lim\limits_{x \to 2^-} f(x) = -\infty$.

**Von rechts:** Für $x > 2$ ist $x - 2$ klein und **positiv**: $f(2{,}01) = 100$, $f(2{,}001) = 1000$. Also
$\lim\limits_{x \to 2^+} f(x) = +\infty$.

Die Stelle $2$ heißt **Polstelle mit Vorzeichenwechsel**, die senkrechte Gerade $x = 2$ heißt **senkrechte Asymptote**.
Mehr dazu in [12.7 Grenzwerte im Unendlichen und Asymptoten](/lernen/mathe3/grenzwerte-stetigkeit/grenzwerte-im-unendlichen-und-asymptoten).
:::

:::achtung[Den falschen Ast benutzen]
Falsch: Für $g(x) = x + 2$ bei $x < 3$ und $g(x) = x^2 - 1$ bei $x \ge 3$ rechnet jemand
„$\lim\limits_{x \to 3^+} g(x) = 3 + 2 = 5$“.

Richtig: Rechts von $3$ gilt der Term $x^2 - 1$. Also ist $\lim\limits_{x \to 3^+} g(x) = 9 - 1 = 8$. Der Term $x + 2$
gehört nur zum linken Grenzwert, und der ist $5$. Schreib dir vor dem Rechnen neben jeden einseitigen Grenzwert den
Term, der auf dieser Seite gilt.
:::

:::achtung[Den Funktionswert für den Grenzwert halten]
Falsch: Für $k(x) = 2x$ bei $x < 1$, $k(1) = 7$ und $k(x) = x + 1$ bei $x > 1$ schreibt jemand
„$\lim\limits_{x \to 1} k(x) = k(1) = 7$“.

Richtig: Links strebt $2x$ gegen $2$, rechts strebt $x + 1$ gegen $2$. Beide einseitigen Grenzwerte sind $2$, also
ist $\lim\limits_{x \to 1} k(x) = 2$. Der Wert $k(1) = 7$ hat damit nichts zu tun. Er zeigt nur, dass der Graph an
dieser Stelle einen einzelnen, abweichenden Punkt hat.
:::

:::achtung[Das Vorzeichen beim Pol raten]
Falsch: „Der Nenner von $\frac{1}{x - 2}$ geht gegen $0$, also geht der Bruch gegen $+\infty$.“

Richtig: Von links ist der Nenner negativ, von rechts positiv. Deshalb kommt links $-\infty$ und rechts $+\infty$
heraus. Bestimme bei „Zahl durch $0$“ immer das **Vorzeichen** des Nenners auf jeder Seite, zum Beispiel mit
einem Testwert wie $x = 1{,}99$.
:::

```reflexion
frage: Wie kann ein einseitiger Grenzwert existieren, obwohl die Funktion an der Stelle selbst gar nicht definiert ist? Erkläre es am Beispiel 1/(x−2) oder an einem eigenen Beispiel.
antwort: |
  Ein einseitiger Grenzwert benutzt nur Stellen **neben** $x_0$ auf einer Seite. Der Wert an $x_0$ kommt darin gar nicht
  vor. Bei $f(x) = \frac{x^2 - 1}{x - 1}$ ist $f(1)$ nicht definiert, aber von links und von rechts streben die Werte
  gegen $2$. Bei $\frac{1}{x - 2}$ ist $f(2)$ ebenfalls nicht definiert. Von links fallen die Werte unter jede Schranke,
  von rechts wachsen sie über jede Schranke. Auch das ist eine Aussage über die Nachbarschaft, nicht über die Stelle selbst.
```

```aufgabe
id: gs-einseitig-ablesen
titel: Einseitige Grenzwerte berechnen
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Gegeben ist
  $$f(x) = \begin{cases} 2x + 1 & x < 2 \\ 7 & x = 2 \\ x^2 + 1 & x > 2 \end{cases}$$
  Bestimme die einseitigen Grenzwerte an der Stelle $2$ und entscheide, ob $\lim\limits_{x \to 2} f(x)$ existiert.
teile:
  - typ: zahl
    label: '$\lim_{x \to 2^-} f(x)$'
    loesung: "2*2 + 1"
    anzeige: '5'
    fehler:
      - wert: "7"
        meldung: |
          $7$ ist der Funktionswert $f(2)$. Für den linksseitigen Grenzwert gilt der Term $2x + 1$, den man für $x \to 2$ auswertet.
  - typ: zahl
    label: '$\lim_{x \to 2^+} f(x)$'
    loesung: "2^2 + 1"
    anzeige: '5'
    fehler:
      - wert: "7"
        meldung: |
          $7$ ist der Funktionswert an der Stelle selbst. Rechts von $2$ gilt der Term $x^2 + 1$.
  - typ: auswahl
    label: 'Existiert $\lim_{x \to 2} f(x)$?'
    optionen:
      - 'Ja, der Grenzwert ist $5$.'
      - 'Ja, der Grenzwert ist $7$.'
      - 'Nein.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Der Grenzwert hängt nicht vom Funktionswert $f(2) = 7$ ab, sondern nur von den Werten daneben.
      - wert: 2
        meldung: |
          Beide einseitigen Grenzwerte existieren und sind gleich. Genau dann existiert der Grenzwert.
hinweise:
  - 'Links von $2$ gilt $2x + 1$, rechts gilt $x^2 + 1$. Beide sind Polynome, also darf man einsetzen.'
loesung: |
  Ansatz: Für jede Seite nehmen wir den Term, der dort gilt, und setzen $2$ ein.
  ---
  Links: $\lim\limits_{x \to 2^-}(2x + 1) = 5$. Rechts: $\lim\limits_{x \to 2^+}(x^2 + 1) = 5$.
  ---
  Beide einseitigen Grenzwerte sind gleich $5$, also existiert $\lim\limits_{x \to 2} f(x) = 5$. Der Funktionswert $f(2) = 7$ spielt für den Grenzwert keine Rolle. (Er macht $f$ aber unstetig, siehe [12.8](/lernen/mathe3/grenzwerte-stetigkeit/stetigkeit-an-einer-stelle).)
```

```aufgabe
id: gs-einseitig-graph
titel: Einseitige Grenzwerte aus dem Graphen ablesen
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Der Graph zeigt eine stückweise definierte Funktion $f$. Ein voller Punkt gehört zum Graphen, ein offener Kreis nicht.
  Lies an der Stelle $x_0 = 2$ den linksseitigen Grenzwert, den rechtsseitigen Grenzwert und den Funktionswert ab.
plot:
  x: [-0.5, 4.5]
  y: [-0.5, 4.5]
  graphen:
    - { f: "3 - x", farbe: 0, von: -0.5, bis: 2 }
    - { f: "0.5*x + 2", farbe: 1, von: 2, bis: 4.5 }
  punkte:
    - { x: 2, y: 1, offen: true, farbe: 0 }
    - { x: 2, y: 3, farbe: 1 }
teile:
  - typ: zahl
    label: '$\lim_{x \to 2^-} f(x)$'
    loesung: "1"
    fehler:
      - wert: "3"
        meldung: |
          $3$ ist der Wert, dem sich der **rechte** Ast nähert. Links von $2$ verläuft der fallende Ast, und der endet beim offenen Kreis.
  - typ: zahl
    label: '$\lim_{x \to 2^+} f(x)$'
    loesung: "3"
    fehler:
      - wert: "1"
        meldung: |
          $1$ ist der Endpunkt des linken Astes. Rechts von $2$ verläuft der steigende Ast, und der beginnt beim vollen Punkt.
  - typ: zahl
    label: '$f(2)$'
    loesung: "3"
    fehler:
      - wert: "1"
        meldung: |
          Der offene Kreis bei $(2 \mid 1)$ gehört **nicht** zum Graphen. Der Funktionswert ist der volle Punkt.
hinweise:
  - 'Folge jedem Ast mit dem Finger bis zur Stelle $x = 2$. Wo endet er?'
loesung: |
  Ansatz: Links und rechts gehören zu verschiedenen Ästen. Wir verfolgen jeden Ast bis zur Stelle $2$.
  ---
  Der linke Ast endet beim offenen Kreis $(2 \mid 1)$, also $\lim\limits_{x \to 2^-} f(x) = 1$. Der rechte Ast beginnt beim vollen Punkt $(2 \mid 3)$, also $\lim\limits_{x \to 2^+} f(x) = 3$ und $f(2) = 3$.
  ---
  Die einseitigen Grenzwerte sind verschieden, der Grenzwert an der Stelle $2$ existiert nicht. Sprunghöhe $3 - 1 = 2$.
```

```aufgabe
id: gs-einseitig-betrag
titel: Betrag im Nenner
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Bestimme die einseitigen Grenzwerte von
  $$f(x) = \frac{x^2 - 9}{|x - 3|}$$
  an der Stelle $x_0 = 3$.
teile:
  - typ: zahl
    label: '$\lim_{x \to 3^-} f(x)$'
    loesung: "-6"
    fehler:
      - wert: "6"
        meldung: |
          Für $x < 3$ ist $x - 3$ negativ, also $|x - 3| = -(x - 3)$. Dieses Minus hast du verloren.
      - wert: "0"
        meldung: |
          Einsetzen ergibt $\frac00$, das ist kein Ergebnis. Löse zuerst den Betrag auf und kürze.
  - typ: zahl
    label: '$\lim_{x \to 3^+} f(x)$'
    loesung: "6"
    fehler:
      - wert: "-6"
        meldung: |
          Für $x > 3$ ist $x - 3$ positiv, also $|x - 3| = x - 3$. Hier entsteht kein Minus.
hinweise:
  - 'Fallunterscheidung: Für $x > 3$ ist $|x - 3| = x - 3$, für $x < 3$ ist $|x - 3| = -(x - 3)$.'
  - '$x^2 - 9 = (x - 3)(x + 3)$. Nach dem Kürzen bleibt auf jeder Seite ein einfacher Term.'
loesung: |
  Ansatz: Der Betrag hat links und rechts von $3$ verschiedene Formen. Deshalb rechnen wir die beiden Seiten getrennt.
  ---
  Für $x > 3$: $f(x) = \dfrac{(x - 3)(x + 3)}{x - 3} = x + 3 \to 6$.
  ---
  Für $x < 3$: $f(x) = \dfrac{(x - 3)(x + 3)}{-(x - 3)} = -(x + 3) \to -6$.
  ---
  Die einseitigen Grenzwerte $-6$ und $6$ sind verschieden. Also existiert $\lim\limits_{x \to 3} f(x)$ nicht. Probe: $f(3{,}01) = \frac{0{,}0601}{0{,}01} = 6{,}01$ ✓.
```

```aufgabe
id: gs-einseitig-pol
titel: Gegen unendlich von einer Seite
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  Wie verhält sich $f(x) = \dfrac{3}{1 - x}$ bei Annäherung an $x_0 = 1$ von links und von rechts?
teile:
  - typ: auswahl
    label: 'Von links ($x \to 1^-$)'
    optionen: ['$f(x) \to +\infty$', '$f(x) \to -\infty$', '$f(x) \to 0$', '$f(x) \to 3$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Für $x < 1$ ist $1 - x$ **positiv**, zum Beispiel $1 - 0{,}99 = 0{,}01$. Dann ist $\frac{3}{0{,}01} = 300$.
      - wert: 3
        meldung: |
          Der Zähler ist $3$, aber der Nenner wird beliebig klein. Ein Bruch mit winzigem Nenner wird riesig.
  - typ: auswahl
    label: 'Von rechts ($x \to 1^+$)'
    optionen: ['$f(x) \to +\infty$', '$f(x) \to -\infty$', '$f(x) \to 0$', '$f(x) \to 3$']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Für $x > 1$ ist $1 - x$ **negativ**, zum Beispiel $1 - 1{,}01 = -0{,}01$. Dann ist der Bruch negativ.
hinweise:
  - 'Setze Testwerte ein: $x = 0{,}99$ und $x = 1{,}01$.'
  - 'Achte auf das Vorzeichen von $1 - x$, nicht von $x - 1$.'
loesung: |
  Ansatz: Der Zähler ist $3 > 0$. Das Vorzeichen des Bruchs bestimmt also der Nenner $1 - x$.
  ---
  Links von $1$ ist $1 - x > 0$ und klein: $f(0{,}99) = 300$. Die Werte wachsen über alle Grenzen, $f(x) \to +\infty$.
  ---
  Rechts von $1$ ist $1 - x < 0$: $f(1{,}01) = -300$. Die Werte fallen unter jede Schranke, $f(x) \to -\infty$.
  ---
  $x = 1$ ist eine Polstelle mit Vorzeichenwechsel. Im Vergleich zu $\frac{1}{x - 1}$ sind die Seiten vertauscht, weil im Nenner $1 - x$ steht.
```

```aufgabe
id: gs-einseitig-gefuehrt
titel: Einseitige Grenzwerte mit Betrag, Schritt für Schritt
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Bestimme die einseitigen Grenzwerte von $f(x) = \dfrac{x^2 + x}{|x|}$ an der Stelle $0$. Existiert $\lim\limits_{x \to 0} f(x)$?
teile:
  - typ: zahl
    label: '$\lim_{x \to 0^-} f(x)$'
    loesung: "-1"
    fehler:
      - wert: "1"
        meldung: |
          Für $x < 0$ ist $|x| = -x$. Dann ist $\frac{x(x + 1)}{-x} = -(x + 1)$, und das geht gegen $-1$.
  - typ: zahl
    label: '$\lim_{x \to 0^+} f(x)$'
    loesung: "1"
    fehler:
      - wert: "0"
        meldung: |
          Einsetzen von $0$ ist hier nicht erlaubt, weil der Nenner $0$ wird. Kürze erst $x$ heraus.
  - typ: auswahl
    label: 'Existiert der Grenzwert?'
    optionen: ['ja', 'nein']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Die einseitigen Grenzwerte sind verschieden. Dann existiert der beidseitige Grenzwert nicht.
hinweise:
  - 'Klammere im Zähler $x$ aus: $x^2 + x = x(x + 1)$.'
  - 'Für $x > 0$ ist $|x| = x$, für $x < 0$ ist $|x| = -x$.'
gefuehrt:
  - text: 'Klammere im Zähler aus. Welcher Term $T$ erfüllt $x^2 + x = x \cdot T$?'
    teil:
      typ: term
      loesung: "x + 1"
    erklaerung: '$x(x + 1) = x^2 + x$ ✓.'
  - text: 'Für $x > 0$ ist $|x| = x$. Wie lautet $f(x)$ nach dem Kürzen?'
    teil:
      typ: term
      loesung: "x + 1"
      bereich: [0.1, 2]
    erklaerung: '$\frac{x(x + 1)}{x} = x + 1$. Für $x \to 0^+$ geht das gegen $1$.'
  - text: 'Für $x < 0$ ist $|x| = -x$. Wie lautet $f(x)$ nach dem Kürzen?'
    teil:
      typ: term
      loesung: "-x - 1"
      bereich: [-2, -0.1]
      fehler:
        - wert: "x + 1"
          meldung: 'Im Nenner steht $-x$, nicht $x$. Beim Kürzen bleibt ein Minus übrig.'
    erklaerung: '$\frac{x(x + 1)}{-x} = -(x + 1)$. Für $x \to 0^-$ geht das gegen $-1$.'
  - text: Vergleiche die beiden Ergebnisse. Was folgt für den Grenzwert?
    erklaerung: 'Links $-1$, rechts $1$. Die einseitigen Grenzwerte sind verschieden, also existiert $\lim\limits_{x \to 0} f(x)$ nicht.'
loesung: |
  Ansatz: Wegen des Betrags im Nenner rechnen wir links und rechts von $0$ getrennt.
  ---
  $x^2 + x = x(x + 1)$. Für $x > 0$: $f(x) = \frac{x(x + 1)}{x} = x + 1 \to 1$.
  ---
  Für $x < 0$: $f(x) = \frac{x(x + 1)}{-x} = -(x + 1) \to -1$.
  ---
  Links $-1$, rechts $1$: Der Grenzwert existiert nicht. Probe: $f(0{,}01) = \frac{0{,}0101}{0{,}01} = 1{,}01$ und $f(-0{,}01) = \frac{-0{,}0099}{0{,}01} = -0{,}99$ ✓.
```

```aufgabe
id: gs-einseitig-tarif
titel: Ein Datentarif mit Sprung
niveau: 2
lernziel: 2
kompetenz: modellieren
angabe: |
  Ein Handytarif kostet im Monat $K(v) = 12$ Euro, wenn man höchstens $10$ GB Daten verbraucht. Wer mehr als $10$ GB
  verbraucht, zahlt $K(v) = 20 + 2\,(v - 10)$ Euro, wobei $v$ der Verbrauch in GB ist.

  Bestimme die einseitigen Grenzwerte von $K$ an der Stelle $v = 10$ GB und die Sprunghöhe in Euro.
teile:
  - typ: zahl
    label: '$\lim_{v \to 10^-} K(v)$ in Euro'
    loesung: "12"
    einheit: 'Euro'
    fehler:
      - wert: "20"
        meldung: |
          Links von $10$ GB, also bei weniger Verbrauch, gilt der Pauschalpreis. $20$ Euro gehören zum Tarif für mehr als $10$ GB.
  - typ: zahl
    label: '$\lim_{v \to 10^+} K(v)$ in Euro'
    loesung: "20 + 2*(10 - 10)"
    einheit: 'Euro'
    fehler:
      - wert: "22"
        meldung: |
          Setze $v = 10$ in $20 + 2(v - 10)$ ein: Die Klammer wird $0$, nicht $1$.
  - typ: zahl
    label: 'Sprunghöhe in Euro'
    loesung: "20 - 12"
    einheit: 'Euro'
    fehler:
      - wert: "-8"
        meldung: |
          Die Sprunghöhe gibt man als Differenz „rechts minus links“ an. Der Preis steigt, also ist sie positiv.
hinweise:
  - 'Welcher Tarif gilt für $v$ knapp unter $10$, welcher für $v$ knapp über $10$?'
  - 'Rechts von $10$ ist $K$ ein Polynom in $v$. Dort darf man $v = 10$ einsetzen.'
loesung: |
  Ansatz: Wir lesen für jede Seite den passenden Tarif ab und bilden den Grenzwert.
  ---
  Für $v < 10$ ist $K(v) = 12$ Euro konstant. Also $\lim\limits_{v \to 10^-} K(v) = 12$ Euro.
  ---
  Für $v > 10$ ist $K(v) = 20 + 2(v - 10)$. Für $v \to 10^+$ geht das gegen $20 + 0 = 20$ Euro.
  ---
  Sprunghöhe: $20 - 12 = 8$ Euro. Antwort: Wer $10{,}01$ GB verbraucht, zahlt gut $8$ Euro mehr als bei genau $10$ GB. Der Tarif hat an der Grenze einen Sprung.
```

```aufgabe
id: gs-einseitig-parameter
titel: Wann existiert der Grenzwert?
niveau: 3
lernziel: 2
kompetenz: begruenden
angabe: |
  Es sei
  $$f(x) = \begin{cases} a\,x^2 & x < 1 \\ \dfrac{x^2 + 2x - 3}{x - 1} & x > 1 \end{cases}$$
  mit einer Zahl $a$. An der Stelle $1$ ist $f$ nicht definiert.

  a) Bestimme $a$ so, dass $\lim\limits_{x \to 1} f(x)$ existiert.

  b) Würde sich an deiner Antwort etwas ändern, wenn man zusätzlich $f(1) = 5$ festlegt? Begründe.
teile:
  - typ: zahl
    label: 'a) $a$'
    loesung: "4"
  - typ: text
    label: 'b) Begründung'
    muster: |
      Nein. Der Grenzwert hängt nur von den Werten links und rechts von $1$ ab, nicht vom Wert an der Stelle $1$.
      Mit $a = 4$ sind beide einseitigen Grenzwerte $4$, also ist $\lim\limits_{x \to 1} f(x) = 4$, auch wenn $f(1) = 5$ ist.
      Der Wert $5$ würde nur bewirken, dass Funktionswert und Grenzwert verschieden sind.
hinweise:
  - 'Rechter Grenzwert: Faktorisiere $x^2 + 2x - 3 = (x - 1)(x + 3)$ und kürze für $x \neq 1$.'
  - 'Der linke Grenzwert ist $a \cdot 1^2 = a$. Setze beide gleich.'
loesung: |
  Ansatz: Der Grenzwert existiert genau dann, wenn beide einseitigen Grenzwerte existieren und gleich sind.
  ---
  Rechts: $\frac{x^2 + 2x - 3}{x - 1} = \frac{(x - 1)(x + 3)}{x - 1} = x + 3 \to 4$. Links: $a x^2 \to a \cdot 1^2 = a$.
  ---
  a) Gleichsetzen: $a = 4$. Dann ist $\lim\limits_{x \to 1} f(x) = 4$.
  ---
  b) Der Funktionswert $f(1)$ kommt in keinem einseitigen Grenzwert vor. Also bleibt $a = 4$ und der Grenzwert $4$. Antwort: Es ändert sich nichts am Grenzwert.
```

## Grenzwerte berechnen: Einsetzen, Kürzen, Erweitern

```aufgabe
id: gs-berechnen-vorwissen
titel: Eine dritte Potenz zerlegen
niveau: 1
art: check
angabe: |
  Die Zahl $2$ ist eine Nullstelle von $x^3 - 8$. Welcher Term $T$ erfüllt $x^3 - 8 = (x - 2) \cdot T$?
  (Vorwissen aus [Kapitel 2, Gleichungen höheren Grades](/lernen/mathe3/gleichungen/gleichungen-hoeheren-grades).)
teile:
  - typ: auswahl
    optionen: ['$x^2 + 2x + 4$', '$x^2 - 2x + 4$', '$x^2 + 4$', '$(x - 2)^2$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Multipliziere zur Probe aus: $(x - 2)(x^2 - 2x + 4) = x^3 - 4x^2 + 8x - 8$. Die Glieder mit $x^2$ und $x$ fallen nicht weg.
      - wert: 2
        meldung: |
          $(x - 2)(x^2 + 4) = x^3 - 2x^2 + 4x - 8$. Das Glied $-2x^2$ bleibt stehen. Es fehlt ein Glied mit $x$ im zweiten Faktor.
      - wert: 3
        meldung: |
          Dann wäre $x^3 - 8 = (x - 2)^3$. Das stimmt nicht: $(x - 2)^3 = x^3 - 6x^2 + 12x - 8$.
hinweise:
  - 'Polynomdivision $(x^3 - 8) : (x - 2)$ oder Probe durch Ausmultiplizieren.'
loesung: |
  Polynomdivision liefert $(x^3 - 8) : (x - 2) = x^2 + 2x + 4$.
  ---
  Probe: $(x - 2)(x^2 + 2x + 4) = x^3 + 2x^2 + 4x - 2x^2 - 4x - 8 = x^3 - 8$ ✓.
```

**Worum geht es in dieser Lektion?** Mit Definitionen allein rechnet niemand Grenzwerte aus. Man zerlegt einen
komplizierten Ausdruck in einfache Bausteine, deren Grenzwerte man kennt, und setzt sie mit Rechenregeln zusammen.
Wenn das nicht direkt klappt, weil $\frac00$ entsteht, formt man vorher um.

### Die Grenzwertsätze

:::satz[Rechenregeln für Grenzwerte]
Es gelte $\lim\limits_{x \to x_0} f(x) = a$ und $\lim\limits_{x \to x_0} g(x) = b$ mit reellen Zahlen $a$ und $b$.
Dann gilt:
$$\begin{aligned}
\lim_{x \to x_0} \big(f(x) \pm g(x)\big) &= a \pm b, &\qquad \lim_{x \to x_0} c\cdot f(x) &= c\cdot a,\\
\lim_{x \to x_0} f(x)\,g(x) &= a\cdot b, &\qquad \lim_{x \to x_0} \frac{f(x)}{g(x)} &= \frac{a}{b} \quad \text{falls } b \neq 0.
\end{aligned}$$
Dasselbe gilt für einseitige Grenzwerte und für $x \to \pm\infty$.
:::

Dabei ist $c$ eine feste Zahl. Wichtig ist die Voraussetzung: Beide Einzelgrenzwerte $a$ und $b$ müssen **existieren**
und reelle Zahlen sein, beim Quotienten muss außerdem $b \neq 0$ sein.

:::beweis[Beweisidee]
Mit dem Folgenkriterium folgt alles aus den Grenzwertsätzen für Folgen in
[Kapitel 11, Grenzwertsätze](/lernen/mathe3/grenzwerte-folgen/grenzwertsaetze-und-einschliessungssatz). Für die Summe:
Sei $x_n \to x_0$ mit $x_n \neq x_0$. Dann gilt $f(x_n) \to a$ und $g(x_n) \to b$. Nach der Summenregel für Folgen folgt
$f(x_n) + g(x_n) \to a + b$. Weil die Folge beliebig war, ist $a + b$ der Grenzwert. Die anderen Regeln gehen genauso.
:::

Zwei Bausteine sind einfach: Eine Konstante strebt gegen sich selbst, $\lim\limits_{x \to x_0} c = c$, und
$\lim\limits_{x \to x_0} x = x_0$. Aus ihnen baut man mit Produkten und Summen jedes Polynom. Deshalb darf man bei
Polynomen einfach einsetzen.

:::beispiel[Einsetzen, wo es erlaubt ist]
**Erster Grenzwert:** $\lim\limits_{x \to 2} \dfrac{x^3 - 2x + 1}{x + 1}$. Der Nenner ist bei $x = 2$ gleich
$3 \neq 0$. Also dürfen wir Zähler und Nenner getrennt auswerten:
$$\lim_{x \to 2} \frac{x^3 - 2x + 1}{x + 1} = \frac{8 - 4 + 1}{3} = \frac{5}{3}.$$

**Zweiter Grenzwert:** $\lim\limits_{x \to \pi} (x \cos x)$. Beide Faktoren haben einen Grenzwert: $x \to \pi$ und
$\cos x \to \cos \pi = -1$. Nach der Produktregel ist der Grenzwert $\pi \cdot (-1) = -\pi$.
:::

Das Einsetzen klappt auch bei $\sin$, $\cos$, $e^x$, $\ln x$ für $x_0 > 0$ und $\sqrt{x}$ für $x_0 \ge 0$. Der Grund ist,
dass diese Funktionen **stetig** sind. Was das genau heißt, klärt
[12.8 Stetigkeit an einer Stelle](/lernen/mathe3/grenzwerte-stetigkeit/stetigkeit-an-einer-stelle).

### Der Fall „0 durch 0“

Spannend wird es, wenn Einsetzen auf $\frac00$ führt. Das ist **kein Ergebnis**, sondern ein Signal: Hier muss man
umformen. Man nennt $\frac00$ einen **unbestimmten Ausdruck**, weil der Grenzwert danach jede Zahl sein kann, unendlich
oder gar nicht existieren.

:::beispiel[Kürzen nach Faktorisieren]
Gesucht ist $\lim\limits_{x \to 2} \dfrac{x^2 - 5x + 6}{x^2 - 4}$.

**Schritt 1, einsetzen.** $\frac{4 - 10 + 6}{4 - 4} = \frac00$. Umformen ist nötig.

**Schritt 2, faktorisieren.** Beide Polynome haben die Nullstelle $2$. Also enthalten beide den Faktor $(x - 2)$:
$x^2 - 5x + 6 = (x - 2)(x - 3)$ und $x^2 - 4 = (x - 2)(x + 2)$.

**Schritt 3, kürzen.** Für $x \neq 2$ ist $x - 2 \neq 0$, also darf man kürzen:
$$\frac{(x - 2)(x - 3)}{(x - 2)(x + 2)} = \frac{x - 3}{x + 2}.$$

**Schritt 4, jetzt einsetzen.** Der neue Nenner ist bei $2$ gleich $4 \neq 0$:
$$\lim_{x \to 2} \frac{x - 3}{x + 2} = \frac{-1}{4} = -\frac14.$$
Kürzen ist erlaubt, weil der Grenzwert nur Stellen $x \neq 2$ betrachtet.
:::

:::beispiel[Erweitern mit der Gegenwurzel]
Gesucht ist $\lim\limits_{x \to 0} \dfrac{\sqrt{x + 4} - 2}{x}$. Einsetzen liefert $\frac{2 - 2}{0} = \frac00$.

**Schritt 1, erweitern.** Wir multiplizieren Zähler und Nenner mit $\sqrt{x + 4} + 2$. Diesen Ausdruck nennt man die
**Gegenwurzel**: derselbe Ausdruck mit Plus statt Minus. Im Zähler entsteht dann die dritte binomische Formel
$(a - b)(a + b) = a^2 - b^2$, und die Wurzel verschwindet:
$$\frac{(\sqrt{x + 4} - 2)(\sqrt{x + 4} + 2)}{x\,(\sqrt{x + 4} + 2)} = \frac{(x + 4) - 4}{x\,(\sqrt{x + 4} + 2)} = \frac{x}{x\,(\sqrt{x + 4} + 2)}.$$

**Schritt 2, kürzen.** Für $x \neq 0$ kürzt sich $x$: Es bleibt $\dfrac{1}{\sqrt{x + 4} + 2}$.

**Schritt 3, einsetzen.** $\dfrac{1}{\sqrt{4} + 2} = \dfrac14$. Probe mit dem Taschenrechner: Für $x = 0{,}01$ ist
$\frac{\sqrt{4{,}01} - 2}{0{,}01} \approx 0{,}2498$ ✓.
:::

:::beispiel[Momentangeschwindigkeit als Grenzwert]
Ein Stein fällt. Nach $t$ Sekunden hat er ungefähr $s(t) = 5t^2$ Meter zurückgelegt. Wie schnell ist er genau nach
$2$ s?

**Ansatz.** Die mittlere Geschwindigkeit zwischen $2$ s und $t$ ist Weg durch Zeit:
$\dfrac{s(t) - s(2)}{t - 2} = \dfrac{5t^2 - 20}{t - 2}$ in m/s. Die Momentangeschwindigkeit ist der Grenzwert für $t \to 2$.

**Rechnung.** Einsetzen von $t = 2$ ergibt $\frac00$. Wir heben $5$ heraus und faktorisieren:
$$\frac{5(t^2 - 4)}{t - 2} = \frac{5(t - 2)(t + 2)}{t - 2} = 5(t + 2) \to 5 \cdot 4 = 20.$$

**Antwort.** Nach $2$ s fällt der Stein mit $20$ m/s, also $72$ km/h. Zur Kontrolle: Zwischen $2$ s und $2{,}1$ s
beträgt die mittlere Geschwindigkeit $5 \cdot 4{,}1 = 20{,}5$ m/s, schon sehr nahe an $20$ m/s. Genau so entsteht die
Ableitung in [13.1 Die Ableitung exakt](/lernen/mathe3/differenzierbarkeit/die-ableitung-exakt-grenzwert-des-differenzenquotienten).
:::

:::merke[Werkzeuge bei 0/0]
1. **Faktorisieren und kürzen.** Ist $x_0$ Nullstelle eines Polynoms, so enthält es den Faktor $(x - x_0)$. Man findet ihn mit binomischen Formeln, der Lösungsformel oder der Polynomdivision.
2. **Mit der Gegenwurzel erweitern.** Bei $\sqrt{A} - B$ erweitert man mit $\sqrt{A} + B$. Dann steht im Zähler $A - B^2$ ohne Wurzel.
3. **Standardgrenzwerte** wie $\frac{\sin x}{x} \to 1$, siehe [12.6](/lernen/mathe3/grenzwerte-stetigkeit/einschliessungssatz-und-standardgrenzwerte).
4. Ausblick: die **Regel von de l'Hospital** in [Kapitel 13](/lernen/mathe3/differenzierbarkeit/die-regel-von-de-l-hospital).
:::

### Der Fall „Zahl durch 0“

Führt Einsetzen auf $\frac{c}{0}$ mit einer Zahl $c \neq 0$, dann wird der Betrag des Bruchs beliebig groß. Der
Grenzwert ist $+\infty$, $-\infty$ oder existiert beidseitig gar nicht. Man untersucht die **Vorzeichen** links und
rechts, wie in [12.4 Einseitige Grenzwerte](/lernen/mathe3/grenzwerte-stetigkeit/einseitige-grenzwerte).

:::beispiel[Ein Pol ohne Vorzeichenwechsel]
Gesucht ist $\lim\limits_{x \to 1} \dfrac{x + 1}{(x - 1)^2}$. Der Zähler strebt gegen $2 > 0$. Der Nenner strebt gegen
$0$ und ist als Quadrat **immer positiv**. Also ist der Bruch auf beiden Seiten positiv und wird beliebig groß:
$\lim\limits_{x \to 1} \dfrac{x + 1}{(x - 1)^2} = +\infty$. Zum Beispiel ist $\frac{2{,}01}{0{,}01^2} = 20\,100$.
:::

:::achtung[0 durch 0 ist nicht 1]
Falsch: „$\lim\limits_{x \to 4} \dfrac{x^2 - 16}{x - 4} = \dfrac{0}{0} = 1$, weil Zähler und Nenner gleich sind.“

Richtig: $\frac00$ ist kein Wert, weder $1$ noch $0$. Man faktorisiert: $\frac{(x - 4)(x + 4)}{x - 4} = x + 4 \to 8$.
Der Grenzwert ist also $8$. Zähler und Nenner werden zwar beide klein, aber der Zähler ist ungefähr achtmal so groß
wie der Nenner. Zum Beispiel ist bei $x = 4{,}01$ der Zähler $0{,}0801$ und der Nenner $0{,}01$.
:::

:::achtung[Eine Wurzel aus einer Summe aufteilen]
Falsch: „$\sqrt{x + 9} = \sqrt{x} + 3$, also ist $\dfrac{\sqrt{x + 9} - 3}{x} = \dfrac{\sqrt{x}}{x}$.“

Richtig: Die Wurzel einer Summe ist **nicht** die Summe der Wurzeln. Probe mit $x = 16$: $\sqrt{25} = 5$, aber
$\sqrt{16} + 3 = 7$. Bei einer Wurzeldifferenz im Zähler erweitert man mit der Gegenwurzel $\sqrt{x + 9} + 3$.
:::

```reflexion
frage: Warum darf man beim Grenzwert für x gegen 2 den Faktor (x − 2) kürzen, obwohl man durch 0 nie teilen darf?
antwort: |
  Der Grenzwert betrachtet nur Stellen $x \neq 2$. An jeder dieser Stellen ist $x - 2$ eine Zahl ungleich $0$, und durch
  sie darf man teilen. Die gekürzte Funktion stimmt also überall außer an der Stelle $2$ mit der ursprünglichen überein.
  Weil der Grenzwert den Wert an der Stelle $2$ gar nicht benutzt, haben beide Funktionen denselben Grenzwert. Danach
  darf man in den gekürzten Term einsetzen, weil sein Nenner bei $2$ nicht mehr $0$ ist.
```

```aufgabe
id: gs-einsetzen
titel: Einsetzen, wo es geht
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Berechne
  $$\text{a) } \lim_{x \to -1} \frac{x^3 + 2x^2 - 4}{x^2 + 1} \qquad \text{b) } \lim_{x \to 0} \frac{e^x + \cos x}{2 + \sin x}$$
teile:
  - typ: zahl
    label: 'a)'
    loesung: "((-1)^3 + 2*(-1)^2 - 4)/((-1)^2 + 1)"
    anzeige: '-\tfrac{3}{2}'
    fehler:
      - wert: "-7/2"
        meldung: |
          Achte auf $2 \cdot (-1)^2$: Das Quadrat macht $(-1)^2 = 1$ positiv. Also $2 \cdot 1 = 2$, nicht $-2$.
      - wert: "-1/2"
        meldung: |
          Achte auf $(-1)^3$: Eine ungerade Potenz behält das Minus, also $(-1)^3 = -1$, nicht $+1$.
  - typ: zahl
    label: 'b)'
    loesung: "(exp(0) + cos(0))/(2 + sin(0))"
    anzeige: '1'
    fehler:
      - wert: "1/2"
        meldung: |
          $e^0 = 1$, nicht $0$. Jede Zahl hoch $0$ ergibt $1$. Der Zähler ist also $1 + 1 = 2$.
hinweise:
  - 'Prüfe zuerst, ob der Nenner an der Stelle $\neq 0$ ist. Dann darf man einsetzen.'
loesung: |
  Ansatz: In beiden Fällen ist der Nenner an der Stelle ungleich $0$. Dann darf man nach den Grenzwertsätzen einsetzen.
  ---
  a) Nenner bei $-1$: $1 + 1 = 2 \neq 0$. Zähler: $-1 + 2 - 4 = -3$. Grenzwert $\frac{-3}{2} = -1{,}5$.
  ---
  b) Nenner bei $0$: $2 + \sin 0 = 2 \neq 0$. Zähler: $e^0 + \cos 0 = 1 + 1 = 2$. Grenzwert $\frac{2}{2} = 1$.
```

```aufgabe
id: gs-kuerzen
titel: Kürzen bei 0 durch 0
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Berechne $\lim\limits_{x \to 3} \dfrac{x^2 - 9}{x - 3}$ und $\lim\limits_{x \to 1} \dfrac{x^3 - 1}{x - 1}$.
teile:
  - typ: zahl
    label: '$\lim_{x \to 3} \frac{x^2 - 9}{x - 3}$'
    loesung: "3 + 3"
    anzeige: '6'
    fehler:
      - wert: "1"
        meldung: |
          $\frac00$ ist nicht $1$. Faktorisiere den Zähler mit der dritten binomischen Formel und kürze.
      - wert: "0"
        meldung: |
          $\frac00$ ist nicht $0$. Nach dem Kürzen bleibt ein Term, den man auswerten kann.
  - typ: zahl
    label: '$\lim_{x \to 1} \frac{x^3 - 1}{x - 1}$'
    loesung: "1 + 1 + 1"
    anzeige: '3'
    fehler:
      - wert: "2"
        meldung: |
          Prüfe die Faktorisierung: $(x - 1)(x + 1) = x^2 - 1$, nicht $x^3 - 1$. Für die dritte Potenz braucht man $(x - 1)(x^2 + x + 1)$.
hinweise:
  - '$x^3 - 1 = (x - 1)(x^2 + x + 1)$. Prüfe es durch Ausmultiplizieren.'
loesung: |
  Ansatz: Einsetzen ergibt jeweils $\frac00$. Also faktorisieren wir den Zähler und kürzen den Faktor, der den Nenner $0$ macht.
  ---
  $\dfrac{x^2 - 9}{x - 3} = \dfrac{(x - 3)(x + 3)}{x - 3} = x + 3 \to 6$.
  ---
  $\dfrac{x^3 - 1}{x - 1} = x^2 + x + 1 \to 1 + 1 + 1 = 3$. Die Faktorisierung liefert die Polynomdivision. Probe: $x = 1{,}01$ ergibt $\frac{0{,}030301}{0{,}01} \approx 3{,}03$ ✓.
```

```aufgabe
id: gs-zahl-durch-null
titel: Zahl durch null
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  Was gilt für $\lim\limits_{x \to 3} \dfrac{x + 2}{(x - 3)^2}$?
teile:
  - typ: auswahl
    optionen:
      - 'Der Grenzwert ist $+\infty$.'
      - 'Der Grenzwert ist $-\infty$.'
      - 'Links $-\infty$, rechts $+\infty$.'
      - 'Der Grenzwert ist $0$.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Der Zähler strebt gegen $5 > 0$, und ein Quadrat ist nie negativ. Woher sollte ein Minus kommen?
      - wert: 2
        meldung: |
          Einen Vorzeichenwechsel gibt es bei $(x - 3)$, aber nicht bei $(x - 3)^2$. Das Quadrat ist links und rechts von $3$ positiv.
      - wert: 3
        meldung: |
          Der Nenner wird klein, nicht der Zähler. Ein Bruch mit winzigem Nenner und Zähler nahe $5$ wird riesig.
hinweise:
  - 'Bestimme den Grenzwert des Zählers und das Vorzeichen des Nenners links und rechts von $3$.'
loesung: |
  Ansatz: Einsetzen ergibt $\frac{5}{0}$, also „Zahl durch $0$“. Wir untersuchen die Vorzeichen.
  ---
  Zähler gegen $5 > 0$, Nenner $(x - 3)^2 > 0$ auf beiden Seiten und gegen $0$. Der Bruch ist positiv und wächst über alle Grenzen: $+\infty$. Beispiel: $x = 3{,}01$ ergibt $\frac{5{,}01}{0{,}0001} = 50\,100$.
```

```aufgabe
id: gs-kuerzen-quadratisch
titel: Beide Polynome faktorisieren
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Berechne $\lim\limits_{x \to -3} \dfrac{x^2 + x - 6}{x^2 + 5x + 6}$.
teile:
  - typ: zahl
    loesung: "(-3 - 2)/(-3 + 2)"
    anzeige: '5'
    fehler:
      - wert: "-5"
        meldung: |
          Achte auf die Vorzeichen: $\frac{-3 - 2}{-3 + 2} = \frac{-5}{-1}$. Minus durch minus ergibt plus.
      - wert: "1"
        meldung: |
          $\frac00$ ist nicht $1$. Faktorisiere beide Polynome, kürze $(x + 3)$ und setze erst dann ein.
hinweise:
  - 'Einsetzen liefert $\tfrac{0}{0}$. Also enthalten beide Polynome den Faktor $(x + 3)$.'
  - 'Suche zum Zähler zwei Zahlen mit Produkt $-6$ und Summe $1$, zum Nenner zwei Zahlen mit Produkt $6$ und Summe $5$.'
loesung: |
  Ansatz: Einsetzen ergibt $\tfrac{9 - 3 - 6}{9 - 15 + 6} = \tfrac00$. Also faktorisieren wir beide Polynome.
  ---
  $x^2 + x - 6 = (x + 3)(x - 2)$ und $x^2 + 5x + 6 = (x + 3)(x + 2)$. Für $x \neq -3$ kürzen wir: $\dfrac{x - 2}{x + 2}$.
  ---
  Jetzt einsetzen: $\dfrac{-3 - 2}{-3 + 2} = \dfrac{-5}{-1} = 5$. Probe: $x = -2{,}99$ ergibt $\frac{-4{,}99}{-0{,}99} \approx 5{,}04$ ✓.
```

```aufgabe
id: gs-wurzel-erweitern
titel: Mit der Gegenwurzel erweitern
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Berechne $\lim\limits_{x \to 0} \dfrac{\sqrt{x + 9} - 3}{x}$.
teile:
  - typ: zahl
    loesung: "1/6"
    anzeige: '\tfrac{1}{6}'
    fehler:
      - wert: "1/3"
        meldung: |
          Im Nenner steht nach dem Erweitern $\sqrt{x + 9} + 3$. Für $x = 0$ ist das $3 + 3 = 6$, nicht $3$.
      - wert: "0"
        meldung: |
          Einsetzen ergibt $\frac00$, nicht $0$. Erweitere mit $\sqrt{x + 9} + 3$, damit die Wurzel aus dem Zähler verschwindet.
hinweise:
  - 'Erweitere mit $\sqrt{x + 9} + 3$ und verwende $(a - b)(a + b) = a^2 - b^2$.'
  - 'Nach dem Erweitern steht im Zähler nur noch $x$. Kürze es mit dem $x$ im Nenner.'
loesung: |
  Ansatz: Einsetzen liefert $\tfrac{3 - 3}{0} = \tfrac00$. Bei einer Wurzeldifferenz im Zähler erweitern wir mit der Gegenwurzel.
  ---
  $$\frac{\sqrt{x + 9} - 3}{x}\cdot\frac{\sqrt{x + 9} + 3}{\sqrt{x + 9} + 3} = \frac{x + 9 - 9}{x(\sqrt{x + 9} + 3)} = \frac{1}{\sqrt{x + 9} + 3}$$
  ---
  Jetzt einsetzen: $\dfrac{1}{3 + 3} = \dfrac16$. Probe: $x = 0{,}01$ ergibt $\frac{\sqrt{9{,}01} - 3}{0{,}01} \approx 0{,}1667$ ✓.
```

```aufgabe
id: gs-kuerzen-gefuehrt
titel: Eine dritte Potenz im Zähler, Schritt für Schritt
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Berechne $\lim\limits_{x \to 3} \dfrac{x^3 - 27}{x^2 - 9}$. Gib das Ergebnis als Dezimalzahl an.
teile:
  - typ: zahl
    loesung: "27/6"
    anzeige: '4{,}5'
    fehler:
      - wert: "9/6"
        meldung: |
          Prüfe die Vorzeichen im gekürzten Zähler. Richtig ist $x^3 - 27 = (x - 3)(x^2 + 3x + 9)$ mit lauter Pluszeichen. Mit einem Minus darin, etwa $x^2 - 3x + 9$, kommt bei $x = 3$ nur $9$ statt $27$ heraus.
      - wert: "3"
        meldung: |
          Man darf $x^3$ und $x^2$ nicht einfach „kürzen“. Faktorisiere Zähler und Nenner und kürze den gemeinsamen Faktor $(x - 3)$.
hinweise:
  - 'Zähler: $x^3 - 27 = (x - 3)(x^2 + 3x + 9)$. Nenner: dritte binomische Formel.'
  - 'Nach dem Kürzen von $(x - 3)$ bleibt $\frac{x^2 + 3x + 9}{x + 3}$.'
gefuehrt:
  - text: Setze $x = 3$ in den Nenner $x^2 - 9$ ein. Was kommt heraus?
    teil:
      typ: zahl
      loesung: "0"
    erklaerung: 'Der Nenner ist $0$, der Zähler $27 - 27$ ebenfalls. Es entsteht $\frac00$, also müssen wir umformen.'
  - text: 'Faktorisiere den Nenner: $x^2 - 9 = (x - 3) \cdot T$. Welcher Term ist $T$?'
    teil:
      typ: term
      loesung: "x + 3"
    erklaerung: 'Dritte binomische Formel: $x^2 - 9 = (x - 3)(x + 3)$.'
  - text: 'Der Zähler ist $x^3 - 27 = (x - 3)(x^2 + 3x + 9)$. Welchen Wert hat der gekürzte Zähler $x^2 + 3x + 9$ bei $x = 3$?'
    teil:
      typ: zahl
      loesung: "9 + 9 + 9"
    erklaerung: '$9 + 9 + 9 = 27$. Der gekürzte Nenner $x + 3$ hat bei $3$ den Wert $6$.'
  - text: Berechne den Grenzwert.
    teil:
      typ: zahl
      loesung: "27/6"
    erklaerung: '$\frac{27}{6} = 4{,}5$. Kürzen war erlaubt, weil der Grenzwert nur $x \neq 3$ betrachtet.'
loesung: |
  Ansatz: Einsetzen ergibt $\frac{0}{0}$. Wir faktorisieren Zähler und Nenner und kürzen den gemeinsamen Faktor $(x - 3)$.
  ---
  $x^3 - 27 = (x - 3)(x^2 + 3x + 9)$ und $x^2 - 9 = (x - 3)(x + 3)$.
  ---
  Für $x \neq 3$: $\dfrac{x^2 + 3x + 9}{x + 3}$. Einsetzen: $\dfrac{27}{6} = 4{,}5$.
  ---
  Probe: $x = 3{,}01$ ergibt $\frac{27{,}270901 - 27}{9{,}0601 - 9} = \frac{0{,}270901}{0{,}0601} \approx 4{,}51$ ✓.
```

```aufgabe
id: gs-kuerzen-fehler
titel: Fehler beim Kürzen finden
niveau: 2
lernziel: 3
kompetenz: begruenden
angabe: |
  Ein Mitschüler rechnet:
  $$\lim_{x \to 1} \frac{x^2 + 3x - 4}{x - 1} = \lim_{x \to 1} \big(x + 3 - 4\big) = 1 + 3 - 4 = 0.$$
  a) Was ist an der Rechnung falsch?

  b) Berechne den richtigen Grenzwert.
teile:
  - typ: auswahl
    label: 'a) Der Fehler'
    optionen:
      - 'Er hat aus einer Summe gekürzt: $\frac{x^2}{x - 1}$ ist nicht $x$, und $-4$ darf man nicht einfach stehen lassen.'
      - 'Er hätte gar nicht umformen dürfen, weil $\frac00$ schon das Ergebnis $0$ ist.'
      - 'Der Fehler ist nur ein Rechenfehler am Ende: $1 + 3 - 4$ ist nicht $0$.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          $\frac00$ ist kein Ergebnis, sondern ein Signal zum Umformen. Das Umformen war richtig gedacht, aber falsch ausgeführt.
      - wert: 2
        meldung: |
          $1 + 3 - 4$ ist tatsächlich $0$. Der Fehler passiert früher, beim Kürzen.
  - typ: zahl
    label: 'b) richtiger Grenzwert'
    loesung: "1 + 4"
    anzeige: '5'
    fehler:
      - wert: "0"
        meldung: |
          Das ist das Ergebnis der falschen Rechnung. Faktorisiere den Zähler zuerst vollständig: Er hat die Nullstelle $1$.
hinweise:
  - 'Kürzen darf man nur Faktoren, nicht einzelne Summanden.'
  - 'Faktorisiere: $x^2 + 3x - 4 = (x - 1)(x + c)$. Welche Zahl ist $c$?'
loesung: |
  Ansatz: Kürzen heißt, Zähler und Nenner durch denselben **Faktor** zu teilen. Dazu muss der Zähler erst als Produkt dastehen.
  ---
  a) Der Mitschüler hat Summanden einzeln „gekürzt“. Das ist verboten, denn $\frac{x^2 + 3x - 4}{x - 1}$ ist kein Produkt, aus dem man $(x - 1)$ herausnehmen kann, solange man nicht faktorisiert hat.
  ---
  b) $x^2 + 3x - 4 = (x - 1)(x + 4)$. Für $x \neq 1$ ist der Bruch $x + 4$, und das strebt gegen $5$.
  ---
  Probe: $x = 1{,}01$ ergibt $\frac{1{,}0201 + 3{,}03 - 4}{0{,}01} = \frac{0{,}0501}{0{,}01} = 5{,}01$ ✓.
```

```aufgabe
id: gs-wasserstand-modell
titel: Wie schnell steigt das Wasser?
niveau: 3
lernziel: 3
kompetenz: modellieren
angabe: |
  In einem Becken steigt der Wasserstand nach dem Modell $h(t) = 0{,}4\,t^2 + 2$. Dabei ist $t$ die Zeit in Minuten
  und $h$ der Wasserstand in cm.

  a) Berechne die mittlere Änderungsrate $\dfrac{h(3{,}1) - h(3)}{0{,}1}$ in cm/min.

  b) Berechne die momentane Änderungsrate zum Zeitpunkt $t = 3$ als Grenzwert $\lim\limits_{t \to 3} \dfrac{h(t) - h(3)}{t - 3}$.

  c) Deute das Ergebnis aus b) in einem Satz.
teile:
  - typ: zahl
    label: 'a) mittlere Änderungsrate'
    loesung: "(0.4*3.1^2 + 2 - (0.4*9 + 2))/0.1"
    einheit: 'cm/min'
    anzeige: '2{,}44'
  - typ: zahl
    label: 'b) momentane Änderungsrate'
    loesung: "0.4*6"
    einheit: 'cm/min'
    anzeige: '2{,}4'
  - typ: text
    label: 'c) Deutung'
    muster: |
      Genau $3$ Minuten nach Beobachtungsbeginn steigt der Wasserstand mit $2{,}4$ cm pro Minute. Würde er ab diesem
      Moment gleichmäßig weitersteigen, wäre er nach einer weiteren Minute um $2{,}4$ cm höher.
hinweise:
  - '$h(t) - h(3) = 0{,}4\,t^2 + 2 - 5{,}6 = 0{,}4\,(t^2 - 9)$.'
  - 'Faktorisiere $t^2 - 9$ und kürze $(t - 3)$, bevor du $t = 3$ einsetzt.'
loesung: |
  Ansatz: Die mittlere Änderungsrate ist ein Differenzenquotient. Die momentane Änderungsrate ist sein Grenzwert für $t \to 3$, und dort entsteht $\frac00$.
  ---
  a) $h(3) = 0{,}4 \cdot 9 + 2 = 5{,}6$ cm und $h(3{,}1) = 0{,}4 \cdot 9{,}61 + 2 = 5{,}844$ cm. Mittlere Rate: $\frac{0{,}244}{0{,}1} = 2{,}44$ cm/min.
  ---
  b) $\dfrac{h(t) - h(3)}{t - 3} = \dfrac{0{,}4(t^2 - 9)}{t - 3} = \dfrac{0{,}4(t - 3)(t + 3)}{t - 3} = 0{,}4(t + 3)$ für $t \neq 3$.
  ---
  Für $t \to 3$ strebt das gegen $0{,}4 \cdot 6 = 2{,}4$ cm/min. Das passt zur mittleren Rate $2{,}44$ cm/min aus a), die etwas größer ist, weil das Wasser immer schneller steigt.
  ---
  c) Antwortsatz: Zum Zeitpunkt $t = 3$ min steigt der Wasserstand mit $2{,}4$ cm/min.
```

## Einschließungssatz und Standardgrenzwerte

```aufgabe
id: gs-einschliessung-vorwissen
titel: Eingeklemmte Folgen
niveau: 1
art: check
angabe: |
  Für alle $n$ gilt $a_n \le c_n \le b_n$. Außerdem gilt $a_n \to 3$ und $b_n \to 3$. Was folgt für $c_n$?
  (Vorwissen aus [Kapitel 11, Grenzwertsätze und Einschließungssatz](/lernen/mathe3/grenzwerte-folgen/grenzwertsaetze-und-einschliessungssatz).)
teile:
  - typ: auswahl
    optionen:
      - '$c_n \to 3$'
      - 'Über $c_n$ kann man nichts sagen.'
      - '$c_n$ ist ab einer Stelle gleich $3$.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Doch: $c_n$ ist zwischen zwei Folgen eingeklemmt, die beide gegen $3$ gehen. Es bleibt kein Platz, um woanders hinzustreben.
      - wert: 2
        meldung: |
          Konvergenz heißt nicht, dass die Glieder den Grenzwert erreichen. $c_n = 3 + \frac1n$ liegt zwischen $3$ und $3 + \frac2n$ und ist nie gleich $3$.
hinweise:
  - 'Stell dir die drei Folgen als Punkte auf der Zahlengeraden vor, die äußeren beiden laufen auf die $3$ zu.'
loesung: |
  Das ist der Einschließungssatz für Folgen: Liegt $c_n$ zwischen zwei Folgen mit demselben Grenzwert, hat auch $c_n$ diesen Grenzwert.
  ---
  Also $c_n \to 3$.
```

**Worum geht es in dieser Lektion?** Manche Grenzwerte vom Typ $\frac00$ lassen sich weder durch Kürzen noch durch
Erweitern bestimmen. Das wichtigste Beispiel ist $\frac{\sin x}{x}$ für $x \to 0$. Für solche Fälle gibt es zwei
Werkzeuge: den **Einschließungssatz** und eine kleine Liste von **Standardgrenzwerten**, die man auswendig kennt.

### Der Einschließungssatz

Ein Bild: Zwei Wanderer gehen links und rechts neben einem Kind her, das zwischen ihnen hin und her läuft. Wenn
beide Wanderer am selben Ziel ankommen, kommt auch das Kind dort an. Es hat keinen anderen Platz.

:::satz[Einschließungssatz (Sandwich-Satz)]
Es gelte $g(x) \le f(x) \le h(x)$ für alle $x \neq x_0$ in der Nähe von $x_0$, und
$\lim\limits_{x \to x_0} g(x) = \lim\limits_{x \to x_0} h(x) = L$. Dann existiert auch $\lim\limits_{x \to x_0} f(x)$,
und er ist $L$.
:::

Dabei sind $g$ und $h$ die beiden „Schranken“ und $f$ die eingeklemmte Funktion. Der Beweis folgt mit dem
Folgenkriterium direkt aus dem Einschließungssatz für Folgen.

:::beispiel[Eine gedämpfte Schwingung]
Gesucht ist $\lim\limits_{x \to 0} x^2 \sin\!\left(\frac1x\right)$. Kürzen geht nicht, und $\sin\frac1x$ hat bei $0$
gar keinen Grenzwert, wie [12.1](/lernen/mathe3/grenzwerte-stetigkeit/vom-folgengrenzwert-zum-funktionsgrenzwert) gezeigt hat.

**Schritt 1, den Sinus beschränken.** Egal was im Sinus steht, sein Wert liegt zwischen $-1$ und $1$.

**Schritt 2, mit $x^2$ multiplizieren.** Weil $x^2 \ge 0$ ist, bleiben die Ungleichheitszeichen erhalten:
$$-x^2 \le x^2 \sin\!\left(\tfrac1x\right) \le x^2.$$

**Schritt 3, die Schranken.** $-x^2 \to 0$ und $x^2 \to 0$ für $x \to 0$.

**Ergebnis:** Nach dem Einschließungssatz ist $\lim\limits_{x \to 0} x^2 \sin\!\left(\frac1x\right) = 0$. Der Faktor
$x^2$ drückt die Schwingung platt.
:::

```plot
x: [-0.4, 0.4]
y: [-0.17, 0.17]
graphen:
  - { f: "x^2", label: "x²", farbe: 1, gestrichelt: true }
  - { f: "-x^2", label: "−x²", farbe: 1, gestrichelt: true }
  - { f: "x^2*sin(1/x)", label: "x²·sin(1/x)", farbe: 0, von: 0.003, bis: 0.4 }
  - { f: "x^2*sin(1/x)", farbe: 0, von: -0.4, bis: -0.003 }
beschriftung: Die Funktion x²·sin(1/x) schwingt, ist aber zwischen den Parabeln −x² und x² eingeklemmt. Beide Parabeln gehen bei 0 gegen 0, also auch die eingeklemmte Funktion.
```

### Der wichtigste Standardgrenzwert: sin x durch x

:::beispiel[sin x durch x mit dem Taschenrechner]
Der Taschenrechner steht auf Bogenmaß (RAD). Wir berechnen $\frac{\sin x}{x}$ für immer kleinere $x$:

- $x = 1$: $\frac{\sin 1}{1} \approx 0{,}8415$.
- $x = 0{,}5$: $\frac{\sin 0{,}5}{0{,}5} \approx 0{,}9589$.
- $x = 0{,}1$: $\frac{\sin 0{,}1}{0{,}1} \approx 0{,}9983$.
- $x = 0{,}01$: $\frac{\sin 0{,}01}{0{,}01} \approx 0{,}99998$.

Die Werte streben offenbar gegen $1$. Für negative $x$ kommen dieselben Werte heraus, denn
$\frac{\sin(-x)}{-x} = \frac{-\sin x}{-x} = \frac{\sin x}{x}$.
:::

:::satz[Der Grenzwert sin x durch x]
$$\lim_{x \to 0} \frac{\sin x}{x} = 1 \qquad (x \text{ im Bogenmaß}).$$
:::

:::beweis
Sei zunächst $0 < x < \frac{\pi}{2}$. Am Einheitskreis betrachten wir den Winkel $x$ mit den Punkten $O = (0, 0)$,
$A = (1, 0)$, $P = (\cos x, \sin x)$ und $T = (1, \tan x)$. Die Abbildung zeigt drei Flächen, die ineinander liegen:
$$\text{Dreieck } OAP \;\subset\; \text{Kreissektor } OAP \;\subset\; \text{Dreieck } OAT.$$
Ihre Flächeninhalte sind $\frac{\sin x}{2}$ (Grundseite $1$, Höhe $\sin x$), $\frac{x}{2}$ (Sektor mit Winkel $x$ im
Bogenmaß, also der Anteil $\frac{x}{2\pi}$ der Kreisfläche $\pi$) und $\frac{\tan x}{2}$ (Grundseite $1$, Höhe $\tan x$). Also
$$\frac{\sin x}{2} < \frac{x}{2} < \frac{\tan x}{2}.$$
Wir multiplizieren mit $\frac{2}{\sin x} > 0$ und erhalten $1 < \frac{x}{\sin x} < \frac{1}{\cos x}$. Kehrwerte drehen
bei positiven Zahlen die Zeichen um:
$$\cos x < \frac{\sin x}{x} < 1.$$
Für $x \to 0^+$ geht $\cos x \to 1$. Nach dem Einschließungssatz ist $\lim\limits_{x \to 0^+} \frac{\sin x}{x} = 1$.
Weil $\frac{\sin x}{x}$ für $-x$ denselben Wert hat, gilt dasselbe für $x \to 0^-$.
:::

```plot
x: [-0.2, 1.3]
y: [-0.2, 1.0]
gleich: true
kurven:
  - { x: "cos(t)", y: "sin(t)", t: [0, 1.5708], farbe: 0, label: "Einheitskreis" }
strecken:
  - { von: [0, 0], nach: [1, 0], farbe: 2 }
  - { von: [0, 0], nach: [1, 0.8423], farbe: 2 }
  - { von: [1, 0], nach: [1, 0.8423], farbe: 1 }
  - { von: ["cos(0.7)", "sin(0.7)"], nach: ["cos(0.7)", 0], farbe: 3, gestrichelt: true }
  - { von: ["cos(0.7)", "sin(0.7)"], nach: [1, 0], farbe: 3 }
punkte:
  - { x: 0, y: 0, label: "O" }
  - { x: 1, y: 0, label: "A" }
  - { x: "cos(0.7)", y: "sin(0.7)", label: "P" }
  - { x: 1, y: 0.8423, label: "T" }
beschriftung: Einheitskreis mit dem Winkel x = 0,7. Das Dreieck OAP mit der Höhe sin x ist kleiner als der Kreissektor mit der Fläche x/2. Der Sektor ist kleiner als das Dreieck OAT mit der Höhe tan x.
```

:::achtung[Den Taschenrechner im Gradmaß lassen]
Falsch: „$\frac{\sin 0{,}01}{0{,}01} \approx 0{,}01745$, also ist der Grenzwert ungefähr $0{,}0175$.“

Richtig: Dieser Wert entsteht, wenn der Taschenrechner auf Grad (DEG) steht. Dann rechnet er $\sin(0{,}01°)$, und
das ist ungefähr $0{,}01 \cdot \frac{\pi}{180}$. Der Grenzwert $1$ gilt nur im **Bogenmaß**. In der Analysis rechnet man
deshalb immer im Bogenmaß. Stell den Taschenrechner bei solchen Aufgaben auf RAD.
:::

### Weitere Standardgrenzwerte

Aus $\frac{\sin x}{x} \to 1$ folgen die übrigen Grenzwerte der ersten Zeile (mit $\tan$ und $\cos$). Die zweite Zeile
hängt nicht vom Sinus ab. Sie enthält Grenzwerte mit $e$ und $\ln$, die du
in [13.5 Grundfunktionen ableiten](/lernen/mathe3/differenzierbarkeit/grundfunktionen-ableiten-e-funktion-logarithmus-sin-cos-arcsin-arctan) als Ableitungen an der Stelle $0$ wiedererkennst.

:::formel[Standardgrenzwerte]
$$\lim_{x \to 0} \frac{\sin x}{x} = 1, \qquad \lim_{x \to 0} \frac{\tan x}{x} = 1, \qquad \lim_{x \to 0} \frac{1 - \cos x}{x} = 0, \qquad \lim_{x \to 0} \frac{1 - \cos x}{x^2} = \frac12,$$
$$\lim_{x \to 0} \frac{e^x - 1}{x} = 1, \qquad \lim_{x \to 0} \frac{\ln(1 + x)}{x} = 1, \qquad \lim_{x \to \pm\infty} \Big(1 + \frac{a}{x}\Big)^{x} = e^a.$$
:::

Der letzte Grenzwert verallgemeinert $\left(1 + \frac1n\right)^n \to e$ aus
[Kapitel 11](/lernen/mathe3/grenzwerte-folgen/rationale-folgen-wurzeltrick-und-standardgrenzwerte). Dabei ist $a$ eine
feste Zahl. Wie man einen Standardgrenzwert aus $\frac{\sin x}{x}$ herleitet, zeigt das folgende Beispiel.

:::beispiel[1 − cos x durch x² herleiten]
**Schritt 1, erweitern.** Wir erweitern mit $1 + \cos x$, damit die dritte binomische Formel entsteht:
$$\frac{1 - \cos x}{x^2} = \frac{(1 - \cos x)(1 + \cos x)}{x^2\,(1 + \cos x)} = \frac{1 - \cos^2 x}{x^2\,(1 + \cos x)}.$$

**Schritt 2, den trigonometrischen Pythagoras verwenden.** Wegen $\sin^2 x + \cos^2 x = 1$ ist $1 - \cos^2 x = \sin^2 x$:
$$\frac{\sin^2 x}{x^2\,(1 + \cos x)} = \left(\frac{\sin x}{x}\right)^2 \cdot \frac{1}{1 + \cos x}.$$

**Schritt 3, Grenzwertsätze.** Der erste Faktor strebt gegen $1^2 = 1$, der zweite gegen $\frac{1}{1 + 1} = \frac12$.
Also ist der Grenzwert $\frac12$. Kontrolle: Für $x = 0{,}1$ ist $\frac{1 - \cos 0{,}1}{0{,}01} \approx 0{,}4996$ ✓.
:::

### Substitution: das Argument anpassen

Steht im Sinus ein Vielfaches von $x$, passt man den Nenner an, sodass oben und unten **dasselbe** steht.

:::beispiel[sin 6x durch 4x]
Gesucht ist $\lim\limits_{x \to 0} \dfrac{\sin(6x)}{4x}$.

**Schritt 1, passend erweitern.** Wir wollen $\frac{\sin(6x)}{6x}$ erzeugen. Dazu schreiben wir
$$\frac{\sin(6x)}{4x} = \frac{6}{4} \cdot \frac{\sin(6x)}{6x}.$$
Das stimmt, denn $\frac{6}{4} \cdot \frac{1}{6x} = \frac{1}{4x}$.

**Schritt 2, substituieren.** Mit $u = 6x$ gilt: Wenn $x \to 0$, dann auch $u \to 0$. Also strebt
$\frac{\sin(6x)}{6x} = \frac{\sin u}{u}$ gegen $1$.

**Ergebnis:** $\frac{6}{4} \cdot 1 = \frac32$. Kontrolle: $x = 0{,}001$ ergibt $\approx 1{,}49999$ ✓.
:::

:::beispiel[Bogen und Sehne im Straßenbau]
Eine Straße verläuft auf einem Kreisbogen mit Radius $r = 50$ m. Ein Stück mit dem Mittelpunktswinkel
$\varphi = 0{,}02$ (Bogenmaß) ist $b = r\varphi = 1$ m lang. Die gerade Verbindung der Endpunkte, die **Sehne**, ist
$s = 2r\sin\frac{\varphi}{2} = 100 \cdot \sin 0{,}01$ m $\approx 0{,}99998$ m lang.

Das Verhältnis ist $\frac{s}{b} = \frac{\sin(\varphi/2)}{\varphi/2}$. Mit $u = \frac{\varphi}{2}$ ist das genau $\frac{\sin u}{u}$, und das
strebt für $\varphi \to 0$ gegen $1$. **Bedeutung:** Bei kleinen Winkeln darf man einen Bogen durch seine Sehne
ersetzen. Auf $1$ m Straße beträgt der Unterschied hier nur knapp $0{,}02$ mm.
:::

:::merke[Standardgrenzwerte anwenden]
1. Prüfen, ob das Argument gegen $0$ geht. Nur dann gilt $\frac{\sin u}{u} \to 1$.
2. Den Ausdruck so erweitern, dass im Nenner **genau dasselbe** steht wie im Sinus, zum Beispiel $\frac{\sin(6x)}{6x}$.
3. Die übrigen Faktoren mit den Grenzwertsätzen auswerten.
:::

:::achtung[Der Standardgrenzwert an der falschen Stelle]
Falsch: „$\lim\limits_{x \to \pi} \dfrac{\sin x}{x} = 1$, das ist ja der Standardgrenzwert.“

Richtig: $\frac{\sin x}{x} \to 1$ gilt nur für $x \to 0$. Bei $x \to \pi$ darf man einfach einsetzen, weil der Nenner
$\pi \neq 0$ ist: $\frac{\sin \pi}{\pi} = \frac{0}{\pi} = 0$. Prüfe immer zuerst, ob überhaupt ein unbestimmter Ausdruck
wie $\frac00$ entsteht.
:::

:::achtung[Mit x statt |x| einschließen]
Falsch: „$-x \le x\cos\!\left(\frac{1}{x}\right) \le x$, und beide Schranken gehen gegen $0$.“

Richtig: Für negatives $x$ ist $-x$ positiv und $x$ negativ. Dann steht die größere Schranke links, und die
Ungleichungskette ist falsch. Für $x = -1$ und $\cos(-1) \approx 0{,}54$ steht da $1 \le -0{,}54 \le -1$. Mit Beträgen
klappt es für alle $x \neq 0$: $-|x| \le x\cos\!\left(\frac1x\right) \le |x|$.
:::

```reflexion
frage: Im Beweis von sin x / x → 1 steckt an einer Stelle das Bogenmaß. An welcher, und was käme im Gradmaß heraus?
antwort: |
  Die Fläche des Kreissektors ist nur dann $\frac{x}{2}$, wenn $x$ im Bogenmaß gemessen wird. Im Bogenmaß ist der
  Vollwinkel $2\pi$, und der Sektor ist der Anteil $\frac{x}{2\pi}$ der Kreisfläche $\pi$. Misst man den Winkel in Grad,
  ist die Sektorfläche $\frac{x}{360} \cdot \pi = \frac{\pi}{180} \cdot \frac{x}{2}$. Dann käme als Grenzwert
  $\frac{\pi}{180} \approx 0{,}0175$ heraus statt $1$. Deshalb rechnet die Analysis im Bogenmaß.
```

```aufgabe
id: gs-sin-vielfaches
titel: Sinus eines Vielfachen
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Berechne $\lim\limits_{x \to 0} \dfrac{\sin 4x}{x}$ und $\lim\limits_{x \to 0} \dfrac{\sin x}{5x}$.
teile:
  - typ: zahl
    label: '$\lim_{x \to 0} \frac{\sin 4x}{x}$'
    loesung: "4"
    fehler:
      - wert: "1"
        meldung: |
          $\frac{\sin u}{u} \to 1$ gilt nur, wenn oben und unten **dasselbe** steht. Hier steht oben $4x$ und unten $x$. Erweitere mit $4$.
      - wert: "1/4"
        meldung: |
          Du hast durch $4$ geteilt statt multipliziert. Es gilt $\frac{\sin 4x}{x} = 4 \cdot \frac{\sin 4x}{4x}$.
  - typ: zahl
    label: '$\lim_{x \to 0} \frac{\sin x}{5x}$'
    loesung: "1/5"
    anzeige: '\tfrac15'
    fehler:
      - wert: "5"
        meldung: |
          Die $5$ steht im Nenner. $\frac{\sin x}{5x} = \frac15 \cdot \frac{\sin x}{x}$.
hinweise:
  - 'Schreibe $\frac{\sin 4x}{x} = 4 \cdot \frac{\sin 4x}{4x}$ und $\frac{\sin x}{5x} = \frac15 \cdot \frac{\sin x}{x}$.'
loesung: |
  Ansatz: Wir erzeugen jeweils den Standardgrenzwert $\frac{\sin u}{u}$ mit $u \to 0$.
  ---
  $\dfrac{\sin 4x}{x} = 4\cdot\dfrac{\sin 4x}{4x} \to 4\cdot 1 = 4$, denn mit $x \to 0$ geht auch $u = 4x \to 0$.
  ---
  $\dfrac{\sin x}{5x} = \dfrac15\cdot\dfrac{\sin x}{x} \to \dfrac15$. Kontrolle: $x = 0{,}001$ ergibt $\frac{\sin 0{,}004}{0{,}001} \approx 3{,}99999$ ✓.
```

```aufgabe
id: gs-sin-tabelle
titel: Den Taschenrechner richtig einstellen
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Berechne $\dfrac{\sin(0{,}05)}{0{,}05}$ mit dem Taschenrechner im Bogenmaß und runde auf vier Nachkommastellen.
teile:
  - typ: zahl
    loesung: "sin(0.05)/0.05"
    toleranz: 0.0001
    anzeige: '0{,}9996'
    fehler:
      - wert: "sin(0.05*pi/180)/0.05"
        meldung: |
          Dein Taschenrechner steht auf Grad (DEG). Dann berechnet er $\sin(0{,}05°)$. Stell auf Bogenmaß (RAD) um.
      - wert: "1"
        meldung: |
          $1$ ist der Grenzwert für $x \to 0$. Bei $x = 0{,}05$ ist der Wert knapp darunter. Rechne ihn aus.
hinweise:
  - 'Achte auf die Anzeige RAD am Taschenrechner.'
loesung: |
  Ansatz: Im Bogenmaß ist $\sin(0{,}05) \approx 0{,}0499792$.
  ---
  Geteilt durch $0{,}05$ ergibt das $\approx 0{,}9996$. Der Wert liegt knapp unter $1$, wie es die Abschätzung $\cos x < \frac{\sin x}{x} < 1$ aus dem Beweis verlangt: $\cos(0{,}05) \approx 0{,}9988$.
```

```aufgabe
id: gs-sin-quotient
titel: Quotient zweier Sinusse
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Berechne $\lim\limits_{x \to 0} \dfrac{\sin 5x}{\sin 2x}$.
teile:
  - typ: zahl
    loesung: "5/2"
    anzeige: '\tfrac52'
    fehler:
      - wert: "1"
        meldung: |
          Zähler und Nenner gehen beide gegen $0$, aber verschieden schnell. Für kleine $x$ ist $\sin 5x \approx 5x$ und $\sin 2x \approx 2x$.
      - wert: "2/5"
        meldung: |
          Du hast Zähler und Nenner vertauscht. Oben steht $\sin 5x$.
hinweise:
  - 'Erzeuge zweimal den Standardgrenzwert: einmal mit $5x$, einmal mit $2x$.'
  - '$\dfrac{\sin 5x}{\sin 2x} = \dfrac{\sin 5x}{5x}\cdot\dfrac{2x}{\sin 2x}\cdot\dfrac{5x}{2x}$.'
loesung: |
  Ansatz: Wir erweitern so, dass zweimal der Standardgrenzwert entsteht und ein einfacher Rest übrig bleibt.
  ---
  $$\frac{\sin 5x}{\sin 2x} = \frac{\sin 5x}{5x}\cdot\frac{2x}{\sin 2x}\cdot\frac{5}{2}$$
  ---
  Der erste Faktor strebt gegen $1$. Der zweite ist der Kehrwert von $\frac{\sin 2x}{2x} \to 1$, strebt also auch gegen $1$.
  ---
  Ergebnis: $1\cdot 1\cdot\tfrac52 = \tfrac52$. Kontrolle: $x = 0{,}001$ liefert $\approx 2{,}5000$ ✓.
```

```aufgabe
id: gs-cos-grenzwert
titel: Ein Kosinus-Grenzwert
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Berechne $\lim\limits_{x \to 0} \dfrac{1 - \cos 2x}{x^2}$.
teile:
  - typ: zahl
    loesung: "2"
    fehler:
      - wert: "1/2"
        meldung: |
          $\frac12$ ist der Grenzwert von $\frac{1 - \cos u}{u^2}$. Hier steht im Nenner aber $x^2$ und nicht $(2x)^2 = 4x^2$. Es fehlt der Faktor $4$.
      - wert: "1"
        meldung: |
          Du hast vermutlich nur mit $2$ statt mit $4$ multipliziert. Mit $u = 2x$ ist $u^2 = (2x)^2 = 4x^2$, also $x^2 = \frac{u^2}{4}$. Der Faktor ist $4$.
hinweise:
  - 'Substituiere $u = 2x$: $\dfrac{1 - \cos 2x}{x^2} = 4\cdot\dfrac{1 - \cos u}{u^2}$.'
  - 'Alternativ: $1 - \cos 2x = 2\sin^2 x$ (Doppelwinkelformel).'
loesung: |
  Ansatz: Wir führen den Ausdruck auf den Standardgrenzwert $\frac{1 - \cos u}{u^2} \to \frac12$ zurück.
  ---
  Mit $u = 2x$, also $x^2 = \tfrac{u^2}{4}$: $\dfrac{1 - \cos u}{u^2/4} = 4\cdot\dfrac{1 - \cos u}{u^2} \to 4\cdot\dfrac12 = 2$.
  ---
  Zweiter Weg zur Kontrolle: $1 - \cos 2x = 2\sin^2 x$, also $\dfrac{2\sin^2 x}{x^2} = 2\Big(\dfrac{\sin x}{x}\Big)^2 \to 2$ ✓.
```

```aufgabe
id: gs-e-grenzwert
titel: Die Zahl e im Grenzwert
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Berechne $\lim\limits_{x \to \infty} \Big(1 + \dfrac{3}{x}\Big)^{x}$ und $\lim\limits_{x \to 0} \dfrac{e^{2x} - 1}{x}$.
  Runde den ersten Grenzwert auf vier Nachkommastellen oder gib den exakten Wert ein.
teile:
  - typ: zahl
    label: '$\lim_{x \to \infty} (1 + \frac3x)^x$'
    loesung: "e^3"
    anzeige: 'e^3 \approx 20{,}0855'
    fehler:
      - wert: "1"
        meldung: |
          „$1$ hoch unendlich“ ist ein unbestimmter Ausdruck und nicht $1$. Die Basis geht zwar gegen $1$, aber der Exponent wächst gleichzeitig.
      - wert: "e"
        meldung: |
          $\left(1 + \frac1x\right)^x \to e$. Hier steht im Bruch aber $3$, und der Standardgrenzwert liefert $e^a$ mit $a = 3$.
  - typ: zahl
    label: '$\lim_{x \to 0} \frac{e^{2x} - 1}{x}$'
    loesung: "2"
    fehler:
      - wert: "1"
        meldung: |
          $\frac{e^u - 1}{u} \to 1$ braucht im Nenner dasselbe $u = 2x$ wie im Exponenten. Erweitere mit $2$.
hinweise:
  - 'Standardgrenzwert $(1 + \frac ax)^x \to e^a$.'
  - 'Für den zweiten: $\dfrac{e^{2x} - 1}{x} = 2\cdot\dfrac{e^{u} - 1}{u}$ mit $u = 2x$.'
loesung: |
  Ansatz: Beide Ausdrücke sind Standardgrenzwerte, beim zweiten muss man das Argument anpassen.
  ---
  Mit $a = 3$: $(1 + \tfrac3x)^x \to e^3 \approx 20{,}0855$.
  ---
  $\dfrac{e^{2x} - 1}{x} = 2\cdot\dfrac{e^{2x} - 1}{2x} \to 2\cdot 1 = 2$. Kontrolle: $x = 0{,}001$ ergibt $\frac{e^{0{,}002} - 1}{0{,}001} \approx 2{,}002$ ✓.
```

```aufgabe
id: gs-sandwich
titel: Einschließen
niveau: 2
lernziel: 3
kompetenz: begruenden
angabe: |
  Zeige mit dem Einschließungssatz, dass $\lim\limits_{x \to 0} x \cos\!\big(\tfrac{1}{x^2}\big)$ existiert, und gib den Wert an.
teile:
  - typ: zahl
    label: 'Grenzwert'
    loesung: "0"
    fehler:
      - wert: "1"
        meldung: |
          Der Kosinus selbst hat bei $0$ keinen Grenzwert, er schwankt zwischen $-1$ und $1$. Der Faktor $x$ davor drückt ihn aber auf $0$.
  - typ: text
    label: 'Begründung'
    muster: |
      Wegen $-1 \le \cos(\tfrac{1}{x^2}) \le 1$ gilt $-|x| \le x\cos(\tfrac{1}{x^2}) \le |x|$ für alle $x \neq 0$.
      Da $-|x| \to 0$ und $|x| \to 0$ für $x \to 0$, folgt nach dem Einschließungssatz $x\cos(\tfrac{1}{x^2}) \to 0$.
hinweise:
  - 'Der Kosinus ist durch $-1$ und $1$ beschränkt.'
  - 'Achtung beim Multiplizieren mit dem Vorzeichen von $x$: Verwende $|x|$, dann passt die Kette für beide Seiten.'
loesung: |
  Ansatz: Wir klemmen den Ausdruck zwischen zwei einfache Funktionen, die beide gegen $0$ gehen.
  ---
  $|x\cos(\tfrac{1}{x^2})| = |x|\cdot|\cos(\tfrac{1}{x^2})| \le |x|$, also $-|x| \le x\cos(\tfrac{1}{x^2}) \le |x|$.
  ---
  Beide Schranken gehen gegen $0$. Nach dem Einschließungssatz ist der Grenzwert $0$.
  ---
  Bemerkung: Mit $-x \le \ldots \le x$ wäre die Abschätzung für $x < 0$ falsch herum. Mit Beträgen passt sie für beide Seiten.
```

```aufgabe
id: gs-standard-gefuehrt
titel: Tangens im Zähler, Schritt für Schritt
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Berechne $\lim\limits_{x \to 0} \dfrac{\tan(2x)}{5x}$.
teile:
  - typ: zahl
    loesung: "2/5"
    anzeige: '\tfrac25'
    fehler:
      - wert: "5/2"
        meldung: |
          Du hast Zähler und Nenner vertauscht. Es gilt $\frac{\tan 2x}{5x} = \frac25 \cdot \frac{\tan 2x}{2x}$.
      - wert: "1/5"
        meldung: |
          Im Tangens steht $2x$, nicht $x$. Der Faktor $2$ muss mit in den Grenzwert.
hinweise:
  - 'Verwende den Standardgrenzwert $\frac{\tan u}{u} \to 1$ mit $u = 2x$.'
  - 'Erweitere: $\frac{\tan 2x}{5x} = \frac{2}{5} \cdot \frac{\tan 2x}{2x}$.'
gefuehrt:
  - text: Welches Argument $u$ steht im Tangens?
    teil:
      typ: term
      loesung: "2x"
    erklaerung: 'Im Tangens steht $u = 2x$. Für $x \to 0$ geht auch $u \to 0$.'
  - text: 'Damit im Nenner auch $2x$ steht, schreiben wir $\frac{\tan 2x}{5x} = c \cdot \frac{\tan 2x}{2x}$. Welche Zahl ist $c$?'
    teil:
      typ: zahl
      loesung: "2/5"
      fehler:
        - wert: "5/2"
          meldung: 'Prüfe: $c \cdot \frac{1}{2x}$ muss $\frac{1}{5x}$ ergeben. Also $c = \frac{2x}{5x}$.'
    erklaerung: '$c = \frac{2}{5}$, denn $\frac25 \cdot \frac{1}{2x} = \frac{1}{5x}$.'
  - text: Wogegen strebt $\frac{\tan 2x}{2x}$ für $x \to 0$?
    teil:
      typ: zahl
      loesung: "1"
    erklaerung: 'Standardgrenzwert $\frac{\tan u}{u} \to 1$. Er folgt aus $\frac{\tan u}{u} = \frac{\sin u}{u} \cdot \frac{1}{\cos u} \to 1 \cdot 1$.'
loesung: |
  Ansatz: Wir erzeugen den Standardgrenzwert $\frac{\tan u}{u}$ mit $u = 2x$.
  ---
  $\dfrac{\tan 2x}{5x} = \dfrac25 \cdot \dfrac{\tan 2x}{2x}$.
  ---
  Der zweite Faktor strebt gegen $1$. Grenzwert: $\frac25 \cdot 1 = \frac25 = 0{,}4$.
  ---
  Kontrolle: $x = 0{,}001$ ergibt $\frac{\tan 0{,}002}{0{,}005} \approx 0{,}4000005$ ✓.
```

```aufgabe
id: gs-standard-kombiniert
titel: Zwei Standardgrenzwerte kombinieren
niveau: 3
lernziel: 3
kompetenz: begruenden
angabe: |
  Berechne $\lim\limits_{x \to 0} \dfrac{1 - \cos x}{x \sin x}$ und begründe jeden Schritt mit dem Satz, den du verwendest.
teile:
  - typ: zahl
    label: 'Grenzwert'
    loesung: "1/2"
    anzeige: '\tfrac12'
  - typ: text
    label: 'Begründung'
    muster: |
      Einsetzen ergibt $\frac00$. Für $x \neq 0$ (nahe $0$) ist
      $\frac{1 - \cos x}{x\sin x} = \frac{1 - \cos x}{x^2} \cdot \frac{x}{\sin x}$.
      Nach dem Standardgrenzwert gilt $\frac{1 - \cos x}{x^2} \to \frac12$, und $\frac{x}{\sin x}$ ist der Kehrwert von
      $\frac{\sin x}{x} \to 1$, strebt also auch gegen $1$ (Quotientenregel, Nenner $\neq 0$).
      Nach der Produktregel ist der Grenzwert $\frac12 \cdot 1 = \frac12$.
hinweise:
  - 'Erweitere mit $x$: $\frac{1 - \cos x}{x\sin x} = \frac{1 - \cos x}{x^2} \cdot \frac{x}{\sin x}$.'
  - 'Welche Standardgrenzwerte erkennst du in den beiden Faktoren? Darfst du die Produktregel anwenden?'
loesung: |
  Ansatz: Einsetzen ergibt $\frac00$. Wir zerlegen den Ausdruck in zwei Faktoren, deren Grenzwerte wir kennen.
  ---
  $\dfrac{1 - \cos x}{x\sin x} = \dfrac{1 - \cos x}{x^2} \cdot \dfrac{x}{\sin x}$. Das stimmt, weil sich das zusätzliche $x$ wegkürzt.
  ---
  Erster Faktor: Standardgrenzwert $\frac12$. Zweiter Faktor: Kehrwert von $\frac{\sin x}{x} \to 1$, also gegen $\frac11 = 1$.
  ---
  Beide Einzelgrenzwerte existieren, also gilt die Produktregel: Ergebnis $\frac12$. Kontrolle: $x = 0{,}01$ ergibt $\approx 0{,}500004$ ✓.
```

## Grenzwerte im Unendlichen und Asymptoten

```aufgabe
id: gs-unendlich-vorwissen
titel: Höchste Potenz bei Folgen
niveau: 1
art: check
angabe: |
  Berechne $\lim\limits_{n \to \infty} \dfrac{2n^2 + 1}{n^2 - 3}$.
  (Vorwissen aus [Kapitel 11, Rationale Folgen](/lernen/mathe3/grenzwerte-folgen/rationale-folgen-wurzeltrick-und-standardgrenzwerte).)
teile:
  - typ: zahl
    loesung: "2"
    fehler:
      - wert: "1"
        meldung: |
          „Unendlich durch unendlich“ ist nicht $1$. Teile Zähler und Nenner durch $n^2$.
      - wert: "-1/3"
        meldung: |
          Du hast die konstanten Glieder verglichen. Für große $n$ zählen die höchsten Potenzen: $\frac{2n^2}{n^2}$.
hinweise:
  - 'Teile Zähler und Nenner durch $n^2$.'
loesung: |
  Division durch $n^2$: $\frac{2 + \frac{1}{n^2}}{1 - \frac{3}{n^2}}$.
  ---
  Die Brüche mit $n^2$ im Nenner gehen gegen $0$. Es bleibt $\frac21 = 2$.
```

**Worum geht es in dieser Lektion?** Bisher waren die Stelle $x_0$ und der Grenzwert $L$ reelle Zahlen. Zwei
Erweiterungen kommen ständig vor: $x$ wächst über alle Grenzen ($x \to \infty$), oder die Funktionswerte wachsen über
alle Grenzen ($f(x) \to \infty$). Beide Fälle beschreiben, wie ein Graph „ins Unendliche läuft“. Dabei entstehen
**Asymptoten**, also Geraden, denen sich der Graph immer mehr annähert.

### Die Definitionen

:::definition[Grenzwert im Unendlichen und uneigentlicher Grenzwert]
- $\lim\limits_{x \to \infty} f(x) = L$ heißt: Zu jedem $\varepsilon > 0$ gibt es eine Zahl $M$, sodass $|f(x) - L| < \varepsilon$ für alle $x > M$ gilt. Für $x \to -\infty$ verlangt man dasselbe für alle $x < M$.
- $\lim\limits_{x \to x_0} f(x) = +\infty$ heißt: Zu jeder Schranke $K$ gibt es ein $\delta > 0$, sodass $f(x) > K$ für alle $x$ mit $0 < |x - x_0| < \delta$ gilt. Für $-\infty$ verlangt man $f(x) < K$.

Man nennt $\lim f(x) = \pm\infty$ einen **uneigentlichen Grenzwert** oder **bestimmte Divergenz**. Ein „echter“ Grenzwert ist immer eine reelle Zahl.
:::

Die erste Definition ist fast dieselbe wie die $\varepsilon$-$N$-Definition für Folgen aus
[11.2 Die ε-N-Definition des Grenzwerts](/lernen/mathe3/grenzwerte-folgen/die-epsilon-n-definition-des-grenzwerts). Statt „ab dem
Index $N$“ heißt es „ab der Stelle $M$“, und $x$ darf jetzt jede reelle Zahl sein. Die zweite Definition sagt: Die
Funktionswerte übertreffen **jede** noch so große Schranke $K$, wenn $x$ nur nahe genug bei $x_0$ liegt.

### Rationale Funktionen im Unendlichen

Für $x \to \pm\infty$ gilt dieselbe Idee wie bei rationalen Folgen: **Durch die höchste Potenz des Nenners dividieren.**
Dann gehen alle Brüche mit $x$ im Nenner gegen $0$.

:::beispiel[Gleicher Grad in Zähler und Nenner]
Gesucht ist $\lim\limits_{x \to \infty} \dfrac{3x^2 - x + 2}{5x^2 + 4}$.

**Schritt 1, durch $x^2$ dividieren.** Wir teilen jeden Summanden in Zähler und Nenner durch $x^2$:
$$\frac{3x^2 - x + 2}{5x^2 + 4} = \frac{3 - \frac1x + \frac{2}{x^2}}{5 + \frac{4}{x^2}}.$$

**Schritt 2, Grenzwertsätze.** Die Brüche $\frac1x$, $\frac{2}{x^2}$ und $\frac{4}{x^2}$ gehen gegen $0$. Es bleibt
$\frac{3 - 0 + 0}{5 + 0} = \frac35$.

**Bedeutung:** Für große $x$ nähert sich der Graph der waagrechten Geraden $y = \frac35$. Bei $x = 100$ ist der
Funktionswert schon $\frac{29\,902}{50\,004} \approx 0{,}598$.
:::

:::definition[Asymptoten]
- Die senkrechte Gerade $x = x_0$ heißt **senkrechte Asymptote** von $f$, wenn mindestens ein einseitiger Grenzwert bei $x_0$ gleich $+\infty$ oder $-\infty$ ist. Die Stelle $x_0$ heißt dann **Polstelle**.
- Die Gerade $y = kx + d$ heißt **Asymptote für $x \to \infty$**, wenn $\lim\limits_{x \to \infty} \big(f(x) - (kx + d)\big) = 0$ gilt. Für $k = 0$ heißt sie **waagrecht**, sonst **schräg**. Für $x \to -\infty$ definiert man sie genauso.
:::

Das Wort **Asymptote** kommt aus dem Griechischen und heißt „nicht zusammenfallend“: Der Graph kommt der Geraden
beliebig nahe. Dabei ist $k$ die Steigung und $d$ der Achsenabschnitt der Geraden. Die Bedingung
$f(x) - (kx + d) \to 0$ heißt: Der senkrechte Abstand von Graph und Gerade wird beliebig klein.

:::beispiel[Schräge Asymptote mit Polynomdivision]
Wir untersuchen $f(x) = \dfrac{2x^2 + 3x - 1}{x - 1}$.

**Schritt 1, Polynomdivision.** Der Zählergrad ist um $1$ größer als der Nennergrad. Die Division liefert
$$2x^2 + 3x - 1 = (x - 1)(2x + 5) + 4, \qquad\text{also}\qquad f(x) = 2x + 5 + \frac{4}{x - 1}.$$
Probe: $(x - 1)(2x + 5) = 2x^2 + 3x - 5$, plus $4$ ergibt den Zähler ✓.

**Schritt 2, schräge Asymptote.** Der Rest $\frac{4}{x - 1}$ geht für $x \to \pm\infty$ gegen $0$. Also ist
$f(x) - (2x + 5) \to 0$, und $y = 2x + 5$ ist schräge Asymptote. Bei $x = 100$ beträgt der Abstand nur
$\frac{4}{99} \approx 0{,}04$.

**Schritt 3, senkrechte Asymptote.** Bei $x = 1$ wird der Nenner $0$, der Zähler aber $2 + 3 - 1 = 4 \neq 0$. Also
ist $x = 1$ eine Polstelle. Der Faktor $(x - 1)$ kommt einfach vor, deshalb wechselt das Vorzeichen: links $-\infty$,
rechts $+\infty$.
:::

```plot
x: [-6, 8]
y: [-15, 30]
graphen:
  - { f: "(2*x^2 + 3*x - 1)/(x - 1)", label: "f", farbe: 0, von: -6, bis: 0.86 }
  - { f: "(2*x^2 + 3*x - 1)/(x - 1)", farbe: 0, von: 1.18, bis: 8 }
  - { f: "2*x + 5", label: "y = 2x + 5", farbe: 1, gestrichelt: true }
strecken:
  - { von: [1, -15], nach: [1, 30], gestrichelt: true, farbe: 2 }
beschriftung: Graph von f(x) = (2x² + 3x − 1)/(x − 1) mit der senkrechten Asymptote x = 1 und der schrägen Asymptote y = 2x + 5. Für große |x| schmiegt sich der Graph an die schräge Gerade an.
```

:::beispiel[Durchschnittskosten in einer Fabrik]
Eine Fabrik hat Fixkosten von $500$ Euro pro Tag, zum Beispiel für Miete. Jedes Stück kostet zusätzlich $3$ Euro
Material. Bei $x$ Stück sind die Gesamtkosten $500 + 3x$ Euro, die **Durchschnittskosten** pro Stück also
$$k(x) = \frac{500 + 3x}{x} = 3 + \frac{500}{x} \quad \text{Euro pro Stück}.$$

Bei $100$ Stück sind das $8$ Euro, bei $1000$ Stück $3{,}50$ Euro. Für $x \to \infty$ geht $\frac{500}{x} \to 0$,
also $k(x) \to 3$ Euro pro Stück. Die waagrechte Asymptote $y = 3$ hat eine klare Bedeutung: Bei sehr großer
Produktion verteilen sich die Fixkosten auf so viele Stücke, dass fast nur die Materialkosten übrig bleiben. Unter
$3$ Euro kommt man nie.
:::

:::merke[Grad-Regel für x gegen ±∞]
Es sei $f(x) = \dfrac{a_m x^m + \ldots}{b_n x^n + \ldots}$. Die Zahlen $a_m \neq 0$ und $b_n \neq 0$ vor den höchsten
Potenzen heißen **Leitkoeffizienten**. Dann gilt:

|Fall|Grenzwert für $x \to \pm\infty$|Asymptote|
|---|---|---|
|$m < n$|$0$|waagrecht: $y = 0$.|
|$m = n$|$\frac{a_m}{b_n}$|waagrecht: $y = \frac{a_m}{b_n}$.|
|$m = n + 1$|$\pm\infty$|schräg, mit Polynomdivision.|
|$m > n + 1$|$\pm\infty$|keine Gerade.|

Dabei ist $m$ der Zählergrad und $n$ der Nennergrad. Das Vorzeichen von $\pm\infty$ ergibt sich aus dem Vorzeichen von
$\frac{a_m}{b_n}$ und dem von $x^{m - n}$.
:::

### Wachstumsvergleich

Bei Grenzwerten mit Exponential- und Logarithmusfunktionen hilft eine Rangordnung. Bei $x = 100$ ist
$\ln 100 \approx 4{,}6$, $\sqrt{100} = 10$, $100^3 = 1\,000\,000$ und $e^{100} \approx 2{,}7 \cdot 10^{43}$.

:::merke[Wer gewinnt für x gegen unendlich?]
$$\ln x \ \ll\ x^a \ \ll\ e^{x} \qquad (a > 0)$$
Das Zeichen $\ll$ liest man „wächst viel langsamer als“. Genauer: $\lim\limits_{x \to \infty} \dfrac{\ln x}{x^a} = 0$ und
$\lim\limits_{x \to \infty} \dfrac{x^n}{e^x} = 0$ für jede Hochzahl $n$. Die Exponentialfunktion wächst schneller als jede
Potenz, jede Potenz schneller als der Logarithmus. Begründet wird das in
[Kapitel 13](/lernen/mathe3/differenzierbarkeit/die-regel-von-de-l-hospital) mit der Regel von de l'Hospital.
:::

```aufgabe
id: gs-grad-check
titel: Die Grad-Regel anwenden
niveau: 1
art: check
angabe: |
  Wogegen strebt $\dfrac{5x^3 - x}{2x^3 + 7}$ für $x \to \infty$?
teile:
  - typ: zahl
    loesung: "5/2"
    anzeige: '\tfrac52'
    fehler:
      - wert: "1"
        meldung: |
          „Unendlich durch unendlich“ ist nicht $1$. Bei gleichem Grad bleibt der Quotient der Leitkoeffizienten.
      - wert: "0"
        meldung: |
          $0$ kommt heraus, wenn der Nenner einen höheren Grad hat. Hier haben beide Grad $3$.
hinweise:
  - 'Zählergrad und Nennergrad sind gleich. Was sagt die Grad-Regel?'
loesung: |
  Beide Grade sind $3$. Nach der Grad-Regel ist der Grenzwert der Quotient der Leitkoeffizienten.
  ---
  $\frac{5}{2} = 2{,}5$. Waagrechte Asymptote $y = 2{,}5$.
```

:::achtung[Unendlich durch unendlich ist nicht 1]
Falsch: „$\lim\limits_{x \to \infty} \dfrac{2x + 1}{x - 3} = \dfrac{\infty}{\infty} = 1$.“

Richtig: $\frac{\infty}{\infty}$ ist ein unbestimmter Ausdruck. Division durch $x$ ergibt $\frac{2 + \frac1x}{1 - \frac3x} \to 2$.
Der Zähler wächst doppelt so schnell wie der Nenner. Bei $x = 1000$ ist der Bruch $\frac{2001}{997} \approx 2{,}007$.
:::

:::achtung[Das Vorzeichen bei minus unendlich vergessen]
Falsch: „$\lim\limits_{x \to -\infty} \dfrac{x^3}{x^2 + 1} = +\infty$, weil der Zählergrad größer ist.“

Richtig: Der Grad sagt nur, dass der Betrag unbeschränkt wächst. Das Vorzeichen muss man prüfen. Für negative $x$
ist $x^3 < 0$ und $x^2 + 1 > 0$, also ist der Bruch negativ. Der Grenzwert ist $-\infty$. Kontrolle:
$x = -100$ ergibt $\frac{-1\,000\,000}{10\,001} \approx -99{,}99$.
:::

:::achtung[Unendlich minus unendlich ist nicht 0]
Falsch: „$\lim\limits_{x \to \infty} \big((x^2 + 3x) - x^2\big) = \infty - \infty = 0$.“

Richtig: Erst vereinfachen, dann den Grenzwert bilden: $(x^2 + 3x) - x^2 = 3x \to \infty$. Bei Differenzen mit Wurzeln
hilft das Erweitern mit der Gegenwurzel aus
[12.5](/lernen/mathe3/grenzwerte-stetigkeit/grenzwerte-berechnen-einsetzen-kuerzen-erweitern).
:::

```reflexion
frage: Kann ein Graph seine waagrechte Asymptote schneiden? Überlege es dir an f(x) = sin(x) / x für große x.
antwort: |
  Ja. Die Definition verlangt nur, dass der Abstand $f(x) - L$ gegen $0$ geht. Sie verbietet nicht, dass $f(x) = L$ an
  einzelnen Stellen gilt. Die Funktion $\frac{\sin x}{x}$ hat die waagrechte Asymptote $y = 0$, denn
  $\left|\frac{\sin x}{x}\right| \le \frac1x \to 0$. Trotzdem ist sie bei $x = \pi, 2\pi, 3\pi, \dots$ genau $0$ und schneidet
  die Asymptote unendlich oft. Die Schulvorstellung „eine Asymptote wird nie berührt“ stimmt für waagrechte und
  schräge Asymptoten also nicht.
```

```aufgabe
id: gs-unendlich-rational
titel: Rationale Funktionen im Unendlichen
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Berechne
  $$\text{a) } \lim_{x \to \infty} \frac{6x^3 - 2x}{3x^3 + x^2 + 7} \qquad \text{b) } \lim_{x \to -\infty} \frac{4x + 1}{x^2 + 3}$$
teile:
  - typ: zahl
    label: 'a)'
    loesung: "6/3"
    anzeige: '2'
    fehler:
      - wert: "1"
        meldung: |
          „Unendlich durch unendlich“ ist nicht $1$. Teile durch $x^3$, dann bleibt der Quotient der Leitkoeffizienten.
      - wert: "-2/7"
        meldung: |
          Du hast die konstanten Glieder verglichen. Für große $x$ entscheiden die höchsten Potenzen.
  - typ: zahl
    label: 'b)'
    loesung: "0"
    fehler:
      - wert: "4"
        meldung: |
          Der Nenner hat Grad $2$, der Zähler nur Grad $1$. Teile durch $x^2$: Der Zähler wird $\frac4x + \frac{1}{x^2} \to 0$.
hinweise:
  - 'Dividiere Zähler und Nenner durch die höchste Potenz des Nenners.'
loesung: |
  Ansatz: Bei rationalen Funktionen dividieren wir durch die höchste Potenz des Nenners. Dann gehen alle Brüche mit $x$ im Nenner gegen $0$.
  ---
  a) Gleicher Grad $3$: durch $x^3$ dividieren, $\dfrac{6 - \frac{2}{x^2}}{3 + \frac1x + \frac{7}{x^3}} \to \dfrac{6}{3} = 2$.
  ---
  b) Zählergrad $1$ kleiner als Nennergrad $2$: durch $x^2$ dividieren, $\dfrac{\frac4x + \frac{1}{x^2}}{1 + \frac{3}{x^2}} \to \dfrac{0}{1} = 0$. Das gilt auch für $x \to -\infty$.
```

```aufgabe
id: gs-grad-regel-zuordnen
titel: Welche Asymptote im Unendlichen?
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Ordne jeder Funktion die Art ihrer Asymptote für $x \to \infty$ zu, ohne lange zu rechnen.

  a) $f_1(x) = \dfrac{4x^2 + 1}{2x^2 - x}$  b) $f_2(x) = \dfrac{x^3 + 1}{x^2 + 1}$  c) $f_3(x) = \dfrac{x + 5}{x^2 + 1}$
teile:
  - typ: auswahl
    label: 'a) $f_1$'
    optionen: ['waagrecht $y = 0$', 'waagrecht $y = 2$', 'schräg', 'keine Gerade']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          $y = 0$ gilt, wenn der Zählergrad kleiner ist. Hier haben Zähler und Nenner denselben Grad $2$.
  - typ: auswahl
    label: 'b) $f_2$'
    optionen: ['waagrecht $y = 0$', 'waagrecht $y = 1$', 'schräg', 'keine Gerade']
    richtig: [2]
    fehler:
      - wert: 3
        meldung: |
          Der Zählergrad ist um genau $1$ größer als der Nennergrad. Dann gibt es eine schräge Asymptote. Erst ab einem Unterschied von $2$ ist sie keine Gerade mehr.
      - wert: 1
        meldung: |
          Die Leitkoeffizienten sind zwar beide $1$, aber die Grade sind verschieden ($3$ und $2$). Der Quotient wächst über alle Grenzen.
  - typ: auswahl
    label: 'c) $f_3$'
    optionen: ['waagrecht $y = 0$', 'waagrecht $y = 1$', 'schräg', 'keine Gerade']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Der Zähler hat Grad $1$, der Nenner Grad $2$. Der Nenner wächst schneller, der Bruch geht gegen $0$.
hinweise:
  - 'Vergleiche Zählergrad $m$ und Nennergrad $n$ mit der Grad-Regel im Merke-Kasten.'
loesung: |
  Ansatz: Für $x \to \infty$ entscheidet der Vergleich der Grade.
  ---
  a) $m = n = 2$: waagrecht mit $y = \frac{4}{2} = 2$. b) $m = 3 = n + 1$: schräge Asymptote, hier $y = x$, weil $\frac{x^3 + 1}{x^2 + 1} = x + \frac{1 - x}{x^2 + 1}$.
  ---
  c) $m = 1 < n = 2$: waagrecht mit $y = 0$.
```

```aufgabe
id: gs-asymptoten
titel: Senkrechte und schräge Asymptote
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Gegeben ist $f(x) = \dfrac{x^2 - 2x + 3}{x - 3}$. Bestimme die Polstelle und die Gleichung der schrägen Asymptote.
teile:
  - typ: zahl
    label: 'Polstelle $x_0$'
    loesung: "3"
    fehler:
      - wert: "-3"
        meldung: |
          Der Nenner $x - 3$ wird bei $x = 3$ null, nicht bei $-3$.
  - typ: term
    label: 'Asymptote $y = $'
    loesung: "x + 1"
    fehler:
      - wert: "x - 2"
        meldung: |
          Das ist nicht das Ergebnis der Polynomdivision. Rechne $(x^2 - 2x + 3) : (x - 3)$ schrittweise: Der erste Teil ist $x$, dann bleibt $x + 3$.
      - wert: "x"
        meldung: |
          Die Steigung $1$ stimmt, aber der Achsenabschnitt fehlt. Führe die Polynomdivision bis zum Rest durch.
hinweise:
  - 'Prüfe zuerst, ob der Zähler bei $x = 3$ ungleich $0$ ist.'
  - 'Polynomdivision $(x^2 - 2x + 3) : (x - 3)$. Der ganzzahlige Teil ist die Asymptote.'
loesung: |
  Ansatz: Senkrechte Asymptote dort, wo der Nenner $0$ und der Zähler nicht $0$ ist. Schräge Asymptote aus der Polynomdivision.
  ---
  Nenner $0$ bei $x = 3$, Zähler dort $9 - 6 + 3 = 6 \neq 0$: Polstelle $x_0 = 3$.
  ---
  Polynomdivision: $x^2 - 2x + 3 = (x - 3)(x + 1) + 6$, also $f(x) = x + 1 + \dfrac{6}{x - 3}$.
  ---
  Der Rest $\tfrac{6}{x - 3}$ geht für $x \to \pm\infty$ gegen $0$. Schräge Asymptote: $y = x + 1$.
  Probe: $(x - 3)(x + 1) + 6 = x^2 - 2x - 3 + 6 = x^2 - 2x + 3$ ✓
```

```aufgabe
id: gs-asymptote-gefuehrt
titel: Asymptoten Schritt für Schritt
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Gegeben ist $f(x) = \dfrac{x^2 + 4x + 1}{x + 2}$. Bestimme die Polstelle und die schräge Asymptote.
teile:
  - typ: zahl
    label: 'Polstelle'
    loesung: "-2"
    fehler:
      - wert: "2"
        meldung: |
          $x + 2 = 0$ gilt für $x = -2$.
  - typ: term
    label: 'schräge Asymptote $y = $'
    loesung: "x + 2"
    fehler:
      - wert: "x + 4"
        meldung: |
          Du hast vermutlich nur $x^2 + 4x$ durch $x$ geteilt. Geteilt wird aber durch $(x + 2)$. Nach dem ersten Schritt $x$ bleibt $2x + 1$ übrig, und das ergibt noch $+2$ mit einem Rest.
hinweise:
  - 'Setze $x = -2$ in den Zähler ein. Ist er ungleich $0$, ist $-2$ eine Polstelle.'
  - 'Polynomdivision: $(x^2 + 4x + 1) : (x + 2)$.'
gefuehrt:
  - text: Welchen Wert hat der Zähler $x^2 + 4x + 1$ an der Stelle $x = -2$?
    teil:
      typ: zahl
      loesung: "4 - 8 + 1"
      fehler:
        - wert: "13"
          meldung: 'Achte auf das Vorzeichen: $4 \cdot (-2) = -8$.'
    erklaerung: 'Der Zähler ist $-3 \neq 0$, der Nenner $0$. Also ist $-2$ eine Polstelle.'
  - text: 'Der erste Schritt der Polynomdivision ist $x^2 : x = x$. Was bleibt nach Abziehen von $x(x + 2) = x^2 + 2x$ übrig?'
    teil:
      typ: term
      loesung: "2x + 1"
    erklaerung: '$(x^2 + 4x + 1) - (x^2 + 2x) = 2x + 1$.'
  - text: 'Weiter: $2x : x = 2$. Welcher Rest bleibt nach Abziehen von $2(x + 2)$?'
    teil:
      typ: zahl
      loesung: "1 - 4"
    erklaerung: '$2x + 1 - (2x + 4) = -3$. Also $f(x) = x + 2 - \frac{3}{x + 2}$.'
  - text: Welche Gerade ist die schräge Asymptote?
    teil:
      typ: term
      loesung: "x + 2"
    erklaerung: 'Der Rest $-\frac{3}{x + 2}$ geht gegen $0$. Die Asymptote ist $y = x + 2$.'
loesung: |
  Ansatz: Polstelle über die Nullstelle des Nenners, schräge Asymptote über die Polynomdivision.
  ---
  Zähler bei $-2$: $4 - 8 + 1 = -3 \neq 0$. Polstelle $x_0 = -2$.
  ---
  Polynomdivision: $x^2 + 4x + 1 = (x + 2)(x + 2) - 3$, also $f(x) = x + 2 - \dfrac{3}{x + 2}$.
  ---
  Schräge Asymptote $y = x + 2$. Kontrolle: Bei $x = 1000$ ist $f(x) - 1002 = -\frac{3}{1002} \approx -0{,}003$ ✓.
```

```aufgabe
id: gs-durchschnittskosten
titel: Durchschnittskosten auf lange Sicht
niveau: 2
lernziel: 4
kompetenz: modellieren
angabe: |
  Eine Druckerei hat Fixkosten von $1200$ Euro pro Auftrag. Jedes gedruckte Buch kostet zusätzlich $4{,}50$ Euro.

  a) Stelle die Durchschnittskosten $k(x)$ pro Buch für $x$ Bücher auf und bestimme $\lim\limits_{x \to \infty} k(x)$.

  b) Ab wie vielen Büchern liegen die Durchschnittskosten bei höchstens $5$ Euro?
teile:
  - typ: zahl
    label: 'a) Grenzwert in Euro pro Buch'
    loesung: "4.5"
    einheit: 'Euro'
    fehler:
      - wert: "0"
        meldung: |
          Nur der Fixkostenanteil $\frac{1200}{x}$ geht gegen $0$. Die $4{,}50$ Euro pro Buch fallen bei jedem Buch an.
      - wert: "1204.5"
        meldung: |
          Das sind die Kosten für ein einziges Buch. Gesucht ist das Verhalten bei sehr großen Auflagen.
  - typ: zahl
    label: 'b) Mindestanzahl Bücher'
    loesung: "1200/0.5"
    anzeige: '2400'
    fehler:
      - wert: "267"
        meldung: |
          Du hast $\frac{1200}{4{,}5}$ gerechnet. Die Bedingung ist aber $4{,}5 + \frac{1200}{x} \le 5$, also $\frac{1200}{x} \le 0{,}5$.
hinweise:
  - '$k(x) = \frac{1200 + 4{,}5\,x}{x} = 4{,}5 + \frac{1200}{x}$.'
  - 'Für b): Löse $4{,}5 + \frac{1200}{x} \le 5$ nach $x$ auf. $x$ ist positiv, also bleibt das Zeichen beim Multiplizieren.'
loesung: |
  Ansatz: Durchschnittskosten sind Gesamtkosten durch Stückzahl.
  ---
  a) $k(x) = \frac{1200 + 4{,}5\,x}{x} = 4{,}5 + \frac{1200}{x}$ Euro pro Buch. Für $x \to \infty$ geht $\frac{1200}{x} \to 0$, also $k(x) \to 4{,}50$ Euro.
  ---
  b) $4{,}5 + \frac{1200}{x} \le 5 \iff \frac{1200}{x} \le 0{,}5 \iff x \ge 2400$.
  ---
  Antwort: Ab $2400$ Büchern kostet ein Buch im Durchschnitt höchstens $5$ Euro. Probe: $k(2400) = 4{,}5 + 0{,}5 = 5$ ✓. Billiger als $4{,}50$ Euro wird es nie.
```

```aufgabe
id: gs-wachstum-vergleich
titel: Wer wächst schneller?
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: |
  Bestimme die Grenzwerte für $x \to \infty$ mit dem Wachstumsvergleich.

  a) $\dfrac{x^3}{e^x}$  b) $\dfrac{\ln x}{\sqrt{x}}$  c) $\dfrac{e^x}{x^5}$
teile:
  - typ: auswahl
    label: 'a)'
    optionen: ['$0$', '$1$', '$+\infty$']
    richtig: [0]
    fehler:
      - wert: 2
        meldung: |
          $x^3$ wächst schnell, aber $e^x$ wächst schneller als **jede** Potenz. Bei $x = 20$ ist $x^3 = 8000$, aber $e^{20} \approx 4{,}9 \cdot 10^8$.
  - typ: auswahl
    label: 'b)'
    optionen: ['$0$', '$1$', '$+\infty$']
    richtig: [0]
    fehler:
      - wert: 2
        meldung: |
          $\sqrt{x} = x^{0{,}5}$ ist eine Potenz, und jede Potenz mit positiver Hochzahl wächst schneller als $\ln x$.
  - typ: auswahl
    label: 'c)'
    optionen: ['$0$', '$1$', '$+\infty$']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: |
          Hier steht die Exponentialfunktion im **Zähler**. Sie gewinnt gegen $x^5$, also wird der Bruch riesig.
hinweise:
  - 'Rangordnung: $\ln x \ll x^a \ll e^x$.'
  - 'Steht der stärkere Ausdruck im Nenner, geht der Bruch gegen $0$. Steht er im Zähler, geht der Bruch gegen $\infty$.'
loesung: |
  Ansatz: Wir vergleichen jeweils Zähler und Nenner in der Rangordnung $\ln x \ll x^a \ll e^x$.
  ---
  a) $e^x$ im Nenner gewinnt: Grenzwert $0$. b) $\sqrt{x}$ im Nenner gewinnt gegen $\ln x$: Grenzwert $0$.
  ---
  c) $e^x$ im Zähler gewinnt gegen $x^5$: Grenzwert $+\infty$. Kontrolle mit $x = 50$: $\frac{e^{50}}{50^5} \approx \frac{5{,}2 \cdot 10^{21}}{3{,}1 \cdot 10^8} \approx 1{,}7 \cdot 10^{13}$.
```

```aufgabe
id: gs-unendlich-wurzel
titel: Differenz zweier großer Zahlen
niveau: 3
lernziel: 4
kompetenz: rechnen
angabe: |
  Berechne $\lim\limits_{x \to \infty} \left(\sqrt{x^2 + 4x} - x\right)$.
teile:
  - typ: zahl
    loesung: "2"
hinweise:
  - 'Das ist der Fall „$\infty - \infty$“, also unbestimmt. Erweitere mit $\sqrt{x^2 + 4x} + x$.'
  - 'Danach durch $x$ dividieren. Für $x > 0$ gilt $\sqrt{x^2 + 4x} = x\sqrt{1 + \frac4x}$.'
loesung: |
  Ansatz: „Unendlich minus unendlich“ ist unbestimmt. Wie in [12.5](/lernen/mathe3/grenzwerte-stetigkeit/grenzwerte-berechnen-einsetzen-kuerzen-erweitern) erweitern wir mit der Gegenwurzel.
  ---
  $$\sqrt{x^2 + 4x} - x = \frac{(x^2 + 4x) - x^2}{\sqrt{x^2 + 4x} + x} = \frac{4x}{\sqrt{x^2 + 4x} + x}$$
  ---
  Durch $x > 0$ dividieren: $\dfrac{4}{\sqrt{1 + \frac4x} + 1} \to \dfrac{4}{1 + 1} = 2$.
  ---
  Kontrolle numerisch: $x = 1000$: $\sqrt{1\,004\,000} - 1000 \approx 1{,}998$ ✓
```

## Stetigkeit an einer Stelle

```aufgabe
id: gs-stetig-vorwissen
titel: Grenzwert und Funktionswert an einer Nahtstelle
niveau: 1
art: check
angabe: |
  Es sei $f(x) = x + 1$ für $x < 2$, $f(2) = 5$ und $f(x) = 2x - 1$ für $x > 2$. Welche Aussage stimmt?
  (Vorwissen aus [12.4 Einseitige Grenzwerte](/lernen/mathe3/grenzwerte-stetigkeit/einseitige-grenzwerte).)
teile:
  - typ: auswahl
    optionen:
      - 'Beide einseitigen Grenzwerte sind $3$, der Funktionswert ist $5$.'
      - 'Der Grenzwert ist $5$, weil $f(2) = 5$ ist.'
      - 'Links ist der Grenzwert $3$, rechts $5$.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Der Grenzwert hängt nicht vom Funktionswert an der Stelle ab. Links strebt $x + 1$ gegen $3$, rechts strebt $2x - 1$ gegen $3$.
      - wert: 2
        meldung: |
          Rechts von $2$ gilt $2x - 1$. Für $x \to 2^+$ ist das $2 \cdot 2 - 1 = 3$, nicht $5$.
hinweise:
  - 'Werte jeden Ast an der Stelle $2$ aus und vergleiche mit $f(2)$.'
loesung: |
  Links: $x + 1 \to 3$. Rechts: $2x - 1 \to 3$. Der Grenzwert existiert und ist $3$.
  ---
  Der Funktionswert ist aber $f(2) = 5$. Grenzwert und Funktionswert passen nicht zusammen. Genau darum geht es in dieser Lektion.
```

**Worum geht es in dieser Lektion?** Anschaulich ist eine Funktion stetig, wenn man ihren Graphen „ohne abzusetzen“
zeichnen kann. Diese **Bleistift-Regel** ist eine gute erste Vorstellung, aber keine Definition. Sie versagt bei
Funktionen mit Lücken im Definitionsbereich und bei wild schwingenden Funktionen. Die exakte Fassung ist kurz: Der
Funktionswert passt zu den Werten in seiner Nachbarschaft.

### Die Definition

:::definition[Stetigkeit an einer Stelle]
Es sei $f\colon D \to \R$ eine Funktion und $x_0 \in D$. Die Funktion $f$ heißt **stetig an der Stelle $x_0$**, wenn
$$\lim_{x \to x_0} f(x) = f(x_0)$$
gilt. Die Funktion heißt **stetig** (auf $D$), wenn sie an jeder Stelle $x_0 \in D$ stetig ist.
:::

Dabei ist $D$ der Definitionsbereich, und $f\colon D \to \R$ liest man „$f$ bildet $D$ in die reellen Zahlen ab“. Das
Wort **stetig** bedeutet im Alltag „beständig, ohne Unterbrechung“. Die Gleichung sagt: Der Wert, den man aus der
Nachbarschaft erwartet (der Grenzwert), ist genau der Wert, der tatsächlich dasteht.

:::beispiel[Eine stetige Funktion mit Sonderdefinition]
Es sei $f(x) = \dfrac{x^2 + x - 2}{x - 1}$ für $x \neq 1$ und $f(1) = 3$. Ist $f$ an der Stelle $1$ stetig?

**Schritt 1, Funktionswert.** $f(1) = 3$ ist festgelegt.

**Schritt 2, Grenzwert.** Für $x \neq 1$ faktorisieren wir: $x^2 + x - 2 = (x - 1)(x + 2)$. Also ist $f(x) = x + 2$,
und das strebt gegen $3$.

**Schritt 3, vergleichen.** Grenzwert $3$ und Funktionswert $3$ stimmen überein. Also ist $f$ an der Stelle $1$
**stetig**. Der Graph ist die Gerade $y = x + 2$ ohne Loch.
:::

:::beispiel[Ein Nicht-Beispiel: derselbe Term, falscher Wert]
Jetzt sei $g(x) = \dfrac{x^2 + x - 2}{x - 1}$ für $x \neq 1$ und $g(1) = 2$.

Der Grenzwert ist wie eben $3$. Der Funktionswert ist aber $2$. Weil $3 \neq 2$ ist, ist $g$ an der Stelle $1$
**nicht stetig**. Der Graph ist die Gerade $y = x + 2$ mit einem Loch bei $(1 \mid 3)$ und einem einzelnen Punkt
bei $(1 \mid 2)$.
:::

In der Gleichung $\lim\limits_{x \to x_0} f(x) = f(x_0)$ stecken **drei** Bedingungen. In einer Prüfung arbeitet man sie
einzeln ab.

:::merke[Stetigkeit an der Stelle x₀ prüfen]
1. $f(x_0)$ ist **definiert**, also $x_0 \in D$.
2. Der Grenzwert $\lim\limits_{x \to x_0} f(x)$ **existiert**. Bei Nahtstellen heißt das: Linker und rechter Grenzwert existieren und sind gleich.
3. Grenzwert und Funktionswert sind **gleich**.

Ist Bedingung 2 oder 3 verletzt, ist $f$ an $x_0$ unstetig. Ist schon Bedingung 1 verletzt, stellt sich die Frage nach Stetigkeit an $x_0$ gar nicht.
:::

:::beispiel[Parkgebühren springen]
Ein Parkhaus verlangt $2$ Euro für jede angefangene Stunde. Für eine Parkdauer von $t$ Stunden ist die Gebühr also
$P(t) = 2$ Euro für $0 < t \le 1$ und $P(t) = 4$ Euro für $1 < t \le 2$.

**An der Stelle $t = 0{,}5$ h:** In der Nähe gilt überall $P(t) = 2$ Euro, und $P(0{,}5) = 2$ Euro. Alle drei Bedingungen
sind erfüllt. $P$ ist dort stetig.

**An der Stelle $t = 1$ h:** $P(1) = 2$ Euro ist definiert. Von links strebt $P$ gegen $2$ Euro, von rechts gegen $4$
Euro. Der Grenzwert existiert nicht, Bedingung 2 ist verletzt. $P$ ist bei $t = 1$ h unstetig. Eine Minute länger
parken kostet $2$ Euro mehr.
:::

### Stetigkeit mit ε und δ und mit Folgen

Setzt man die Definitionen des Grenzwerts ein, erhält man zwei gleichwertige Fassungen. Der Grenzwert $L$ ist jetzt
$f(x_0)$. Die Ausnahme $x \neq x_0$ kann entfallen: Für $x = x_0$ ist $|f(x) - f(x_0)| = 0$, und das ist kleiner als
jedes $\varepsilon$.

:::definition[Stetigkeit mit ε und δ und mit Folgen]
$f$ ist stetig an $x_0 \in D$ genau dann, wenn gilt:
$$\forall \varepsilon > 0\ \exists \delta > 0\ \forall x \in D:\quad |x - x_0| < \delta \ \Longrightarrow\ |f(x) - f(x_0)| < \varepsilon.$$
Gleichwertig ist das **Folgenkriterium**: Für jede Folge $(x_n)$ in $D$ mit $x_n \to x_0$ gilt $f(x_n) \to f(x_0)$.
:::

Die Folgenfassung merkt man sich als Satz: **Stetige Funktionen vertauschen mit Grenzwerten.** In Formeln:
$f\big(\lim x_n\big) = \lim f(x_n)$. Man darf also erst den Grenzwert bilden und dann $f$ anwenden.

:::intuition
„Kleine Änderung von $x$ bewirkt kleine Änderung von $f(x)$.“ Wer den Funktionswert auf $\varepsilon$ genau braucht,
muss $x$ nur genau genug kennen, nämlich auf $\delta$ genau. Deshalb sind stetige Funktionen in der Praxis gutmütig:
Ein kleiner Messfehler in der Eingabe führt nur zu einem kleinen Fehler im Ergebnis. An einer Unstetigkeitsstelle
kann ein winziger Messfehler das Ergebnis springen lassen, wie beim Parkhaus.
:::

```aufgabe
id: gs-folgen-stetig-check
titel: Stetige Funktionen vertauschen mit Grenzwerten
niveau: 1
art: check
angabe: |
  Die Funktion $f$ ist an der Stelle $2$ stetig, und $f(2) = 7$. Die Folge $x_n = 2 + \frac1n$ geht gegen $2$.
  Wogegen strebt $f(x_n)$?
teile:
  - typ: zahl
    loesung: "7"
    fehler:
      - wert: "2"
        meldung: |
          $2$ ist der Grenzwert der Folge $x_n$, nicht der Funktionswerte. Wegen der Stetigkeit streben die Funktionswerte gegen $f(2)$.
hinweise:
  - 'Folgenkriterium der Stetigkeit: Aus $x_n \to x_0$ folgt $f(x_n) \to f(x_0)$.'
loesung: |
  Nach dem Folgenkriterium gilt $f(x_n) \to f(2)$.
  ---
  Also $f(x_n) \to 7$. Mehr muss man über $f$ gar nicht wissen.
```

:::achtung[Stetigkeit gibt es nur im Definitionsbereich]
Falsch: „$f(x) = \frac1x$ ist unstetig, denn bei $0$ muss man den Bleistift absetzen.“

Richtig: $\frac1x$ ist an **jeder** Stelle ihres Definitionsbereichs $\R \setminus \{0\}$ stetig. Also ist sie eine stetige
Funktion. Die Stelle $0$ gehört nicht zum Definitionsbereich. Dort ist $f$ weder stetig noch unstetig, sondern hat eine
**Definitionslücke**, genauer eine Polstelle. Die Bleistift-Regel führt hier in die Irre, weil der
Definitionsbereich aus zwei getrennten Teilen besteht. Diese Unterscheidung ist eine klassische mündliche Prüfungsfrage.
:::

:::achtung[Die dritte Bedingung vergessen]
Falsch: „Für $h(x) = x^2$ bei $x \neq 1$ und $h(1) = 5$ sind beide einseitigen Grenzwerte $1$. Also ist $h$ bei $1$ stetig.“

Richtig: Gleiche einseitige Grenzwerte zeigen nur Bedingung 2. Bedingung 3 verlangt zusätzlich, dass der Grenzwert $1$
gleich dem Funktionswert ist. Hier ist $h(1) = 5 \neq 1$, also ist $h$ an der Stelle $1$ **nicht** stetig.
:::

```aufgabe
id: gs-stetig-check-luecke
titel: Stetig trotz Lücke?
niveau: 1
art: check
angabe: |
  Ist die Funktion $f(x) = \dfrac{1}{x - 3}$ mit dem Definitionsbereich $\R \setminus \{3\}$ eine stetige Funktion?
teile:
  - typ: auswahl
    optionen:
      - 'Ja, sie ist an jeder Stelle ihres Definitionsbereichs stetig.'
      - 'Nein, sie ist an der Stelle $3$ unstetig.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Die Stelle $3$ gehört nicht zum Definitionsbereich. Dort fragt man nicht nach Stetigkeit. An allen anderen Stellen ist $f$ als Quotient stetiger Funktionen stetig.
hinweise:
  - 'Stetigkeit prüft man nur an Stellen des Definitionsbereichs.'
loesung: |
  $f$ ist ein Quotient der stetigen Funktionen $1$ und $x - 3$, deren Nenner auf dem Definitionsbereich nie $0$ ist.
  ---
  Also ist $f$ an jeder Stelle von $\R \setminus \{3\}$ stetig und damit eine stetige Funktion. Bei $3$ hat sie eine Polstelle.
```

### Welche Funktionen sind stetig?

:::satz[Rechenregeln für stetige Funktionen]
Sind $f$ und $g$ stetig an $x_0$, dann sind auch $f + g$, $f - g$, $c \cdot f$, $f \cdot g$ und, falls $g(x_0) \neq 0$,
auch $\frac{f}{g}$ stetig an $x_0$. Ist $g$ stetig an $x_0$ und $f$ stetig an der Stelle $g(x_0)$, dann ist die
Verkettung $f \circ g$ stetig an $x_0$.
:::

Die **Verkettung** $f \circ g$ (gelesen „$f$ nach $g$“) ist die Funktion $x \mapsto f(g(x))$: Erst wird $g$
angewendet, dann $f$. Ein Beispiel ist $e^{\sin x}$ mit $g(x) = \sin x$ und $f(u) = e^u$.

:::beweis
Die ersten Aussagen folgen direkt aus den Grenzwertsätzen in
[12.5](/lernen/mathe3/grenzwerte-stetigkeit/grenzwerte-berechnen-einsetzen-kuerzen-erweitern), etwa
$\lim\limits_{x \to x_0}(f + g)(x) = f(x_0) + g(x_0) = (f + g)(x_0)$. Für die Verkettung mit dem Folgenkriterium: Sei
$x_n \to x_0$. Weil $g$ stetig ist, gilt $g(x_n) \to g(x_0)$. Weil $f$ an der Stelle $g(x_0)$ stetig ist, folgt daraus
$f(g(x_n)) \to f(g(x_0))$.
:::

Konstante Funktionen und $x \mapsto x$ sind an jeder Stelle stetig: Bei ihnen ist der Grenzwert sofort der
Funktionswert. Daraus folgt mit dem Satz:

:::merke[Stetige Bausteine]
Polynome, rationale Funktionen, Wurzelfunktionen, $e^x$, $a^x$, $\ln x$, $\sin x$, $\cos x$, $\tan x$ und $|x|$ sind auf
ihrem **gesamten Definitionsbereich stetig**. Dasselbe gilt für alle Funktionen, die man daraus mit $+$, $-$, $\cdot$,
$:$ und Verkettung bildet. Unstetigkeiten entstehen typischerweise erst durch **stückweise Definitionen**, durch
Treppenfunktionen oder durch willkürlich festgelegte Einzelwerte. Eine Treppenfunktion ist zum Beispiel die Gaußklammer.
Sie rundet jede Zahl auf eine ganze Zahl ab, zum Beispiel $2{,}7$ auf $2$. Mehr dazu in
[12.9](/lernen/mathe3/grenzwerte-stetigkeit/unstetigkeitsstellen-und-stetige-fortsetzung).
:::

:::beispiel[Einen Grenzwert durch eine stetige Funktion ziehen]
Gesucht ist $\lim\limits_{x \to 1} e^{\frac{x^2 - 1}{x - 1}}$.

**Schritt 1, das Innere.** Aus [12.1](/lernen/mathe3/grenzwerte-stetigkeit/vom-folgengrenzwert-zum-funktionsgrenzwert)
wissen wir: $\frac{x^2 - 1}{x - 1} \to 2$ für $x \to 1$.

**Schritt 2, die äußere Funktion.** Die Exponentialfunktion ist stetig. Sie vertauscht mit dem Grenzwert:
$$\lim_{x \to 1} e^{\frac{x^2 - 1}{x - 1}} = e^{\lim\limits_{x \to 1}\frac{x^2 - 1}{x - 1}} = e^{2} \approx 7{,}389.$$
:::

### Selbst beobachten

```aufgabe
id: gs-stetig-vorhersage
titel: Lässt sich der Sprung reparieren?
niveau: 1
art: check
angabe: |
  Es sei $f(x) = x^2$ für $x < 1$ und $f(x) = 3 - x$ für $x > 1$. **Kann man den Wert $f(1)$ so wählen, dass $f$ an der
  Stelle $1$ stetig wird?**
teile:
  - typ: auswahl
    optionen:
      - 'Nein, keine Wahl von $f(1)$ hilft.'
      - 'Ja, mit $f(1) = 1$.'
      - 'Ja, mit $f(1) = 2$.'
      - 'Ja, mit $f(1) = 1{,}5$, dem Mittelwert.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Mit $f(1) = 1$ passt der Wert zum linken Ast. Von rechts strebt $3 - x$ aber gegen $2$. Bedingung 2 bleibt verletzt.
      - wert: 2
        meldung: |
          $2$ passt nur zum rechten Ast. Von links strebt $x^2$ gegen $1$. Die beiden Seiten passen nicht zusammen.
      - wert: 3
        meldung: |
          Ein Mittelwert hilft nicht. Stetigkeit verlangt, dass der Grenzwert existiert. Hier sind die einseitigen Grenzwerte $1$ und $2$ verschieden.
hinweise:
  - 'Berechne beide einseitigen Grenzwerte. Sind sie gleich?'
loesung: |
  Links $1^2 = 1$, rechts $3 - 1 = 2$. Die einseitigen Grenzwerte sind verschieden, der Grenzwert existiert nicht.
  ---
  Dann hilft kein Funktionswert: Bedingung 2 ist verletzt, egal was $f(1)$ ist. Prüfe das im Widget.
```

```widget
name: stetigkeit
titel: Stetig oder nicht? Einseitige Grenzwerte und Funktionswert
props:
  links: "x^2"
  rechts: "3 - x"
  stelle: 1
  wert: 2
  x: [-1.5, 3.5]
  y: [-0.5, 3.5]
```

**Arbeitsauftrag:** Das Widget zeigt die Funktion mit $f(1) = 2$. **Beobachte** die Kennwerte: Der linksseitige
Grenzwert ist $1$, der rechtsseitige $2$, und die Meldung lautet „nicht stetig“. Schalte dann das ε-δ-Bild ein und
ziehe den Regler für $\varepsilon$ von groß nach klein. **Beobachte**, dass das Widget bei großen Toleranzen noch ein
$\delta$ findet, für $\varepsilon$ unter $1$ aber nicht mehr. **Erkläre** das: Links von $1$ liegen Funktionswerte
nahe $1$, und die haben vom Funktionswert $f(1) = 2$ ungefähr den Abstand $1$. **Gedankenexperiment:** Wäre der rechte
Term $2 - x$ statt $3 - x$, dann wären beide einseitigen Grenzwerte $1$. Welcher Funktionswert würde die Funktion dann
stetig machen, und warum genau dieser?

```reflexion
frage: Warum ist die Bleistift-Regel „ohne Absetzen zeichnen“ keine gute Definition von Stetigkeit? Nenne ein Beispiel, bei dem sie ein falsches Urteil liefert.
antwort: |
  Die Bleistift-Regel betrachtet den ganzen Graphen auf einmal. Stetigkeit ist aber eine Eigenschaft an **einzelnen
  Stellen des Definitionsbereichs**. Bei $\frac1x$ muss man den Bleistift absetzen, und trotzdem ist die Funktion an
  jeder Stelle ihres Definitionsbereichs stetig. Die Lücke bei $0$ gehört gar nicht dazu. Umgekehrt kann man den Graphen
  von $x^2\sin\frac1x$ mit $f(0) = 0$ in der Nähe von $0$ wegen der unendlich vielen Schwingungen praktisch nicht zeichnen,
  und doch ist die Funktion dort stetig.
```

```aufgabe
id: gs-stetig-pruefen
titel: Drei Bedingungen prüfen
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Gegeben ist
  $$f(x) = \begin{cases} \dfrac{x^2 - 6x + 8}{x - 4} & x \neq 4 \\[4pt] 3 & x = 4. \end{cases}$$
  Bestimme $\lim\limits_{x \to 4} f(x)$. Ist $f$ an der Stelle $4$ stetig?
teile:
  - typ: zahl
    label: '$\lim_{x \to 4} f(x)$'
    loesung: "4 - 2"
    anzeige: '2'
    fehler:
      - wert: "3"
        meldung: |
          $3$ ist der Funktionswert $f(4)$. Der Grenzwert kommt aus dem Term für $x \neq 4$.
      - wert: "0"
        meldung: |
          Einsetzen ergibt $\frac00$, nicht $0$. Faktorisiere den Zähler und kürze.
  - typ: auswahl
    label: 'Ist $f$ stetig an $4$?'
    optionen:
      - 'Ja, weil $f(4)$ definiert ist.'
      - 'Nein, weil der Grenzwert nicht existiert.'
      - 'Nein, weil Grenzwert und Funktionswert verschieden sind.'
    richtig: [2]
    fehler:
      - wert: 0
        meldung: |
          Definiert zu sein ist nur die erste von drei Bedingungen. Prüfe auch, ob der Grenzwert gleich dem Funktionswert ist.
      - wert: 1
        meldung: |
          Der Grenzwert existiert, er ist $2$. Verletzt ist eine andere Bedingung.
hinweise:
  - 'Faktorisiere: $x^2 - 6x + 8 = (x - 4)(x - 2)$.'
loesung: |
  Ansatz: Wir arbeiten die drei Bedingungen der Reihe nach ab.
  ---
  1. $f(4) = 3$ ist definiert. ✓
  ---
  2. Für $x \neq 4$ ist $f(x) = \frac{(x - 4)(x - 2)}{x - 4} = x - 2$, also $\lim\limits_{x \to 4} f(x) = 2$. Der Grenzwert existiert. ✓
  ---
  3. $2 \neq 3$: Grenzwert und Funktionswert stimmen nicht überein. ✗ Also ist $f$ an $4$ **nicht stetig**. Mit $f(4) = 2$ wäre $f$ stetig.
```

```aufgabe
id: gs-drei-bedingungen
titel: Welche Bedingung ist verletzt?
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Gib für jede Funktion an, welche der drei Bedingungen an der Stelle $0$ verletzt ist.

  a) $h(x) = x^2$ für $x \neq 0$ und $h(0) = 1$.

  b) $s(x) = \operatorname{sgn}(x)$ für $x \neq 0$ und $s(0) = 0$.

  c) $k(x) = 3x + 1$ für alle $x$.
teile:
  - typ: auswahl
    label: 'a) $h$'
    optionen: ['Bedingung 2: Grenzwert existiert nicht', 'Bedingung 3: Grenzwert ungleich Funktionswert', 'keine, stetig']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Links und rechts strebt $x^2$ gegen $0$. Der Grenzwert existiert. Er passt nur nicht zu $h(0) = 1$.
      - wert: 2
        meldung: |
          Der Grenzwert ist $0$, der Funktionswert $1$. Diese beiden müssen für Stetigkeit gleich sein.
  - typ: auswahl
    label: 'b) $s$'
    optionen: ['Bedingung 2: Grenzwert existiert nicht', 'Bedingung 3: Grenzwert ungleich Funktionswert', 'keine, stetig']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Um Grenzwert und Funktionswert zu vergleichen, müsste es einen Grenzwert geben. Links ist er $-1$, rechts $1$.
  - typ: auswahl
    label: 'c) $k$'
    optionen: ['Bedingung 2: Grenzwert existiert nicht', 'Bedingung 3: Grenzwert ungleich Funktionswert', 'keine, stetig']
    richtig: [2]
    fehler:
      - wert: 1
        meldung: |
          $3x + 1 \to 1$ und $k(0) = 1$. Grenzwert und Funktionswert sind gleich.
hinweise:
  - 'Bestimme jeweils die einseitigen Grenzwerte und den Funktionswert an der Stelle $0$.'
loesung: |
  Ansatz: Für jede Funktion vergleichen wir linken Grenzwert, rechten Grenzwert und Funktionswert.
  ---
  a) Grenzwert $0$, Funktionswert $1$: Bedingung 3 verletzt. b) Links $-1$, rechts $1$: Bedingung 2 verletzt.
  ---
  c) Polynom, Grenzwert $1 = k(0)$: stetig.
```

```aufgabe
id: gs-verkettung
titel: Grenzwerte durch stetige Funktionen ziehen
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Berechne $\lim\limits_{x \to 0} \cos\!\Big(\dfrac{\pi\sin x}{3x}\Big)$.
teile:
  - typ: zahl
    loesung: "cos(pi/3)"
    anzeige: '\tfrac12'
    fehler:
      - wert: "1"
        meldung: |
          Du hast $\cos 0$ gerechnet. Das Argument geht aber nicht gegen $0$, sondern gegen $\frac{\pi}{3}$, weil $\frac{\sin x}{x} \to 1$.
hinweise:
  - 'Der Kosinus ist stetig. Berechne zuerst den Grenzwert des Arguments.'
loesung: |
  Ansatz: Der Kosinus ist stetig, also vertauscht er mit dem Grenzwert. Wir berechnen zuerst das Innere.
  ---
  Inneres Argument: $\dfrac{\pi\sin x}{3x} = \dfrac{\pi}{3}\cdot\dfrac{\sin x}{x} \to \dfrac{\pi}{3}$.
  ---
  Da $\cos$ stetig ist: $\lim\limits_{x \to 0}\cos(\ldots) = \cos\dfrac{\pi}{3} = \dfrac12$.
```

```aufgabe
id: gs-stetig-aussagen
titel: Stetig im Definitionsbereich
niveau: 2
lernziel: 5
kompetenz: verstehen
angabe: |
  Welche Aussagen sind richtig? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$f(x) = \frac1x$ ist eine stetige Funktion.'
      - '$f(x) = \frac1x$ ist an der Stelle $0$ unstetig.'
      - '$\tan x$ ist auf seinem Definitionsbereich stetig.'
      - 'Die Funktion mit $f(x) = \operatorname{sgn}(x)$ für $x \neq 0$ und $f(0) = 0$ ist an der Stelle $0$ unstetig.'
      - 'Eine stetige Funktion hat einen Graphen, den man immer ohne Absetzen zeichnen kann.'
    richtig: [0, 2, 3]
    fehler:
      - wert: [0, 1, 2, 3]
        meldung: |
          Aussage 2 ist falsch: Die Stelle $0$ gehört nicht zum Definitionsbereich von $\frac1x$. Dort ist $f$ weder stetig noch unstetig.
      - wert: [0, 2, 3, 4]
        meldung: |
          Aussage 5 ist falsch: $\frac1x$ ist stetig, ihr Graph besteht aber aus zwei getrennten Ästen. Die Bleistift-Regel ist nur eine grobe Vorstellung, keine Definition.
hinweise:
  - 'Stetigkeit wird nur an Stellen des Definitionsbereichs geprüft.'
  - 'Denk bei der letzten Aussage an den Graphen von $\frac1x$.'
loesung: |
  Ansatz: Für jede Aussage klären wir zuerst den Definitionsbereich.
  ---
  Richtig: $\tfrac1x$ ist an jeder Stelle von $\R\setminus\{0\}$ stetig, also eine stetige Funktion. Über die Stelle $0$ sagt Stetigkeit nichts, Aussage 2 ist falsch.
  ---
  $\tan x = \tfrac{\sin x}{\cos x}$ ist als Quotient stetiger Funktionen überall stetig, wo $\cos x \neq 0$ ist, also auf dem ganzen Definitionsbereich. Richtig.
  ---
  Bei der Vorzeichenfunktion mit $f(0) = 0$ sind die einseitigen Grenzwerte $-1$ und $1$ verschieden: unstetig. Richtig. Aussage 5 ist falsch, siehe $\frac1x$.
```

```aufgabe
id: gs-stetig-gefuehrt
titel: Stetigkeit mit einer Wurzel prüfen
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Es sei $f(x) = \dfrac{\sqrt{x} - 2}{x - 4}$ für $x \ge 0$, $x \neq 4$, und $f(4) = \frac14$. Ist $f$ an der Stelle $4$ stetig?
  Gib zuerst den Grenzwert an.
teile:
  - typ: zahl
    label: '$\lim_{x \to 4} f(x)$'
    loesung: "1/4"
    anzeige: '\tfrac14'
    fehler:
      - wert: "1/2"
        meldung: |
          Nach dem Erweitern steht im Nenner $\sqrt{x} + 2$. Bei $x = 4$ ist das $2 + 2 = 4$.
  - typ: auswahl
    label: 'Ist $f$ an $4$ stetig?'
    optionen: ['ja', 'nein']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Vergleiche den Grenzwert mit $f(4) = \frac14$. Stimmen sie überein, sind alle drei Bedingungen erfüllt.
hinweise:
  - 'Erweitere mit $\sqrt{x} + 2$. Im Zähler entsteht $x - 4$.'
  - 'Nach dem Kürzen bleibt $\frac{1}{\sqrt{x} + 2}$.'
gefuehrt:
  - text: Ist Bedingung 1 erfüllt? Gib $f(4)$ an.
    teil:
      typ: zahl
      loesung: "1/4"
    erklaerung: '$f(4) = \frac14$ ist ausdrücklich festgelegt.'
  - text: 'Erweitere mit $\sqrt{x} + 2$. Was steht danach im Zähler $(\sqrt{x} - 2)(\sqrt{x} + 2)$?'
    teil:
      typ: term
      loesung: "x - 4"
      bereich: [0.5, 9]
    erklaerung: 'Dritte binomische Formel: $(\sqrt{x})^2 - 2^2 = x - 4$. Das kürzt sich mit dem Nenner.'
  - text: 'Nach dem Kürzen ist $f(x) = \frac{1}{\sqrt{x} + 2}$ für $x \neq 4$. Welcher Grenzwert ergibt sich?'
    teil:
      typ: zahl
      loesung: "1/(2 + 2)"
    erklaerung: '$\frac{1}{\sqrt{4} + 2} = \frac14$. Bedingung 2 ist erfüllt.'
  - text: Vergleiche Grenzwert und Funktionswert.
    erklaerung: 'Beide sind $\frac14$. Bedingung 3 ist erfüllt, also ist $f$ an der Stelle $4$ stetig.'
loesung: |
  Ansatz: Wir prüfen die drei Bedingungen. Für den Grenzwert erweitern wir mit der Gegenwurzel.
  ---
  $f(4) = \frac14$ ist definiert.
  ---
  Für $x \neq 4$: $\frac{\sqrt{x} - 2}{x - 4} = \frac{x - 4}{(x - 4)(\sqrt{x} + 2)} = \frac{1}{\sqrt{x} + 2} \to \frac14$.
  ---
  Grenzwert $\frac14$ gleich Funktionswert $\frac14$: $f$ ist an der Stelle $4$ stetig. Probe: $f(4{,}01) = \frac{0{,}0024984}{0{,}01} \approx 0{,}2498$ ✓.
```

```aufgabe
id: gs-parkgebuehr
titel: Stetigkeit einer Parkgebühr
niveau: 2
lernziel: 5
kompetenz: modellieren
angabe: |
  Ein Parkplatz kostet $1{,}50$ Euro für jede angefangene halbe Stunde. $P(t)$ ist die Gebühr in Euro für eine Parkdauer
  von $t$ Stunden mit $t > 0$.

  a) Gib $P(1)$, $\lim\limits_{t \to 1^-} P(t)$ und $\lim\limits_{t \to 1^+} P(t)$ an.

  b) Ist $P$ an der Stelle $t = 1$ stetig? Ist $P$ an der Stelle $t = 0{,}8$ stetig?
teile:
  - typ: zahl
    label: '$P(1)$ in Euro'
    loesung: "2*1.5"
    einheit: 'Euro'
    anzeige: '3'
    fehler:
      - wert: "4.5"
        meldung: |
          Eine Stunde sind genau zwei halbe Stunden. Bei genau $1$ h hat noch keine dritte halbe Stunde angefangen.
  - typ: zahl
    label: '$\lim_{t \to 1^-} P(t)$ in Euro'
    loesung: "3"
    einheit: 'Euro'
  - typ: zahl
    label: '$\lim_{t \to 1^+} P(t)$ in Euro'
    loesung: "3*1.5"
    einheit: 'Euro'
    anzeige: '4{,}5'
    fehler:
      - wert: "3"
        meldung: |
          Schon bei $1{,}01$ h hat die dritte halbe Stunde angefangen. Dann kostet es $3 \cdot 1{,}50$ Euro.
  - typ: auswahl
    label: 'b) Stetigkeit'
    optionen:
      - 'unstetig bei $t = 1$, stetig bei $t = 0{,}8$'
      - 'stetig bei $t = 1$, unstetig bei $t = 0{,}8$'
      - 'an beiden Stellen unstetig'
    richtig: [0]
    fehler:
      - wert: 2
        meldung: |
          Bei $t = 0{,}8$ h ändert sich die Gebühr in der Nähe nicht: Für alle $t$ zwischen $0{,}5$ und $1$ kostet es $3$ Euro.
hinweise:
  - 'Zeichne die Treppe: bis $0{,}5$ h $1{,}50$ Euro, bis $1$ h $3$ Euro, bis $1{,}5$ h $4{,}50$ Euro.'
  - 'Sprünge gibt es nur an den Vielfachen von $0{,}5$ h.'
loesung: |
  Ansatz: Die Gebühr ist eine Treppenfunktion. Sie springt an jeder Stelle, an der eine neue halbe Stunde beginnt.
  ---
  a) $P(1) = 2 \cdot 1{,}50 = 3$ Euro. Von links: $3$ Euro. Von rechts: $3 \cdot 1{,}50 = 4{,}50$ Euro.
  ---
  b) Bei $t = 1$ sind die einseitigen Grenzwerte verschieden, $P$ ist dort unstetig. Bei $t = 0{,}8$ ist $P$ in der Nähe konstant $3$ Euro, also stetig.
  ---
  Antwort: Unstetig ist $P$ genau an den Stellen $0{,}5;\ 1;\ 1{,}5;\ \dots$ Dort kostet eine Minute mehr gleich $1{,}50$ Euro mehr.
```

```aufgabe
id: gs-stetig-epsdelta
titel: Stetigkeit mit ε und δ beweisen
niveau: 3
lernziel: 5
kompetenz: begruenden
angabe: |
  Es sei $f(x) = 3x - 1$ und $x_0 = 2$.

  a) Welches $\delta$ passt zur Toleranz $\varepsilon = 0{,}6$?

  b) Beweise mit der $\varepsilon$-$\delta$-Definition, dass $f$ an der Stelle $2$ stetig ist.
teile:
  - typ: zahl
    label: 'a) $\delta$'
    loesung: "0.6/3"
    anzeige: '0{,}2'
  - typ: text
    label: 'b) Beweis'
    muster: |
      Es ist $f(2) = 5$. Sei $\varepsilon > 0$ beliebig. Wähle $\delta = \frac{\varepsilon}{3}$. Für alle $x$ mit $|x - 2| < \delta$ gilt
      $$|f(x) - f(2)| = |3x - 1 - 5| = 3\,|x - 2| < 3\delta = \varepsilon.$$
      Also ist $f$ an der Stelle $2$ stetig.
hinweise:
  - 'Bei Stetigkeit ist der Grenzwert der Funktionswert: $L = f(2) = 5$.'
  - 'Forme $|3x - 1 - 5|$ um, bis $|x - 2|$ als Faktor dasteht.'
loesung: |
  Ansatz: Stetigkeit heißt $\lim\limits_{x \to 2} f(x) = f(2)$. Wir führen den $\varepsilon$-$\delta$-Beweis mit $L = f(2) = 5$.
  ---
  $|f(x) - 5| = |3x - 6| = 3\,|x - 2|$.
  ---
  a) $3\,|x - 2| < 0{,}6$ gilt für $|x - 2| < 0{,}2$. Also $\delta = 0{,}2$.
  ---
  b) Allgemein passt $\delta = \frac{\varepsilon}{3}$, die Rechnung steht in der Musterantwort. Weil das für jedes $\varepsilon > 0$ klappt, ist $f$ an der Stelle $2$ stetig.
```

## Unstetigkeitsstellen und stetige Fortsetzung

```aufgabe
id: gs-unstetig-vorwissen
titel: Herausheben
niveau: 1
art: check
angabe: |
  Schreibe $x^2 - 3x$ als Produkt.
  (Vorwissen aus [Kapitel 1, Terme umformen](/lernen/mathe3/zahlen/terme-umformen-binomische-formeln-und-faktorisieren).)
teile:
  - typ: auswahl
    optionen: ['$x(x - 3)$', '$(x - 3)^2$', '$x^2(1 - 3x)$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          $(x - 3)^2 = x^2 - 6x + 9$. Hier gibt es aber kein konstantes Glied. Beide Summanden enthalten den Faktor $x$.
      - wert: 2
        meldung: |
          Multipliziere aus: $x^2(1 - 3x) = x^2 - 3x^3$. Herausheben darf man nur den Faktor, der in **beiden** Summanden steckt, hier $x$.
hinweise:
  - 'Welcher Faktor steckt in $x^2$ und in $3x$?'
loesung: |
  Beide Summanden enthalten $x$: $x^2 = x \cdot x$ und $3x = x \cdot 3$.
  ---
  Herausheben: $x^2 - 3x = x(x - 3)$. Probe durch Ausmultiplizieren ✓.
```

**Worum geht es in dieser Lektion?** Ist eine Funktion an einer Stelle nicht stetig oder dort gar nicht definiert,
fragt man: **Wie** sieht die Störung aus? Es gibt im Wesentlichen vier Fälle. Beim harmlosesten Fall, dem Loch, kann man
die Funktion reparieren, indem man den fehlenden Wert ergänzt. Das heißt **stetige Fortsetzung**.

### Vier Arten von Störstellen

:::definition[Einteilung der Unstetigkeits- und Definitionslücken]
Es sei $f$ in der Nähe von $x_0$ definiert, an $x_0$ selbst eventuell nicht.

1. **Hebbar:** $\lim\limits_{x \to x_0} f(x)$ existiert als reelle Zahl, aber $f(x_0)$ ist nicht definiert oder vom Grenzwert verschieden. Der Graph hat ein **Loch**. Durch Festlegen eines einzigen Wertes wird $f$ an $x_0$ stetig.
2. **Sprung:** Beide einseitigen Grenzwerte existieren als reelle Zahlen, sind aber verschieden. Ihre Differenz heißt **Sprunghöhe**.
3. **Pol (Unendlichkeitsstelle):** Mindestens ein einseitiger Grenzwert ist $+\infty$ oder $-\infty$. Dort liegt eine senkrechte Asymptote.
4. **Oszillation:** Mindestens ein einseitiger Grenzwert existiert nicht, auch nicht als $\pm\infty$. Die Funktion schwingt immer schneller.
:::

Das Wort **hebbar** heißt: Die Störung lässt sich beheben. **Oszillation** kommt vom lateinischen *oscillare*,
„schaukeln“.

:::beispiel[Jede Art an einem Beispiel]
- **Hebbar:** $\frac{x^2 - 25}{x - 5}$ bei $5$. Für $x \neq 5$ ist das $x + 5$, der Grenzwert ist $10$. Es fehlt nur der Punkt $(5 \mid 10)$.
- **Sprung:** $\operatorname{sgn}(x)$ bei $0$. Links $-1$, rechts $1$, Sprunghöhe $1 - (-1) = 2$.
- **Pol:** $\frac{1}{x^2}$ bei $0$. Von beiden Seiten strebt der Bruch gegen $+\infty$.
- **Oszillation:** $\sin\frac1x$ bei $0$. Die Werte pendeln unendlich oft zwischen $-1$ und $1$, wie in [12.1](/lernen/mathe3/grenzwerte-stetigkeit/vom-folgengrenzwert-zum-funktionsgrenzwert) gezeigt.
:::

```plot
x: [-1, 11]
y: [-1, 5]
graphen:
  - { f: "x/2 + 1", farbe: 0, von: -1, bis: 3 }
  - { f: "1", farbe: 1, von: 4, bis: 5.5 }
  - { f: "3", farbe: 1, von: 5.5, bis: 7 }
  - { f: "0.3/(x - 9)^2 + 0.5", farbe: 2, von: 7.5, bis: 8.68 }
  - { f: "0.3/(x - 9)^2 + 0.5", farbe: 2, von: 9.32, bis: 10.8 }
punkte:
  - { x: 1, y: 1.5, offen: true, farbe: 0, label: "hebbar" }
  - { x: 1, y: 3, farbe: 0 }
  - { x: 5.5, y: 1, offen: true, farbe: 1 }
  - { x: 5.5, y: 3, farbe: 1, label: "Sprung" }
strecken:
  - { von: [9, -1], nach: [9, 5], gestrichelt: true, farbe: 2 }
beschriftung: Drei Arten von Störstellen nebeneinander. Links eine hebbare Unstetigkeit, also ein Loch mit einem Funktionswert an anderer Stelle. In der Mitte ein Sprung um 2. Rechts eine Polstelle mit senkrechter Asymptote.
```

### Lücken rationaler Funktionen

Bei rationalen Funktionen entscheidet das Faktorisieren, welche Art von Lücke vorliegt.

:::beispiel[Eine rationale Funktion mit zwei Lücken]
$f(x) = \dfrac{x^2 - x}{x^2 - 1}$ ist bei $x = 1$ und $x = -1$ nicht definiert, denn dort wird der Nenner $0$.

**Schritt 1, faktorisieren.** Zähler: $x^2 - x = x(x - 1)$. Nenner: $x^2 - 1 = (x - 1)(x + 1)$.

**Schritt 2, kürzen.** Für $x \neq \pm 1$ ist
$$f(x) = \frac{x(x - 1)}{(x - 1)(x + 1)} = \frac{x}{x + 1}.$$

**Schritt 3, einordnen.** Bei $x = 1$ hat sich der Faktor weggekürzt. Der Grenzwert ist $\frac{1}{1 + 1} = \frac12$.
Das ist eine **hebbare** Lücke. Bei $x = -1$ bleibt im gekürzten Nenner $x + 1 = 0$, der Zähler ist $-1 \neq 0$. Das ist
eine **Polstelle**.
:::

:::merke[Lücken rationaler Funktionen einordnen]
1. Zähler und Nenner vollständig faktorisieren und gemeinsame Faktoren kürzen.
2. Nullstellen des Nenners, die sich **weggekürzt** haben, sind hebbare Lücken. Den Grenzwert liefert der gekürzte Term.
3. Nullstellen des Nenners, die im gekürzten Nenner **bleiben**, sind Polstellen. Ein Faktor in ungerader Potenz gibt einen Vorzeichenwechsel, in gerader Potenz keinen.
:::

:::achtung[Nach dem Kürzen nicht mehr hinschauen]
Falsch: „$f(x) = \dfrac{x + 1}{x^2 + 2x + 1}$ hat bei $x = -1$ eine hebbare Lücke, weil sich $(x + 1)$ kürzen lässt.“

Richtig: Der Nenner ist $(x + 1)^2$. Nach dem Kürzen bleibt $\frac{1}{x + 1}$, und dieser Nenner ist bei $-1$ immer noch
$0$. Also ist $-1$ eine **Polstelle**. Hebbar ist eine Lücke nur, wenn der Faktor im Nenner **vollständig** verschwindet.
:::

:::achtung[Eine Lücke als Nullstelle zählen]
Falsch: „$g(x) = \dfrac{x(x - 3)}{x - 3}$ hat die Nullstellen $0$ und $3$, denn dort ist der Zähler $0$.“

Richtig: An der Stelle $3$ ist $g$ gar nicht definiert. Eine Nullstelle muss im Definitionsbereich liegen. Der Graph ist
die Gerade $y = x$ mit einem Loch bei $(3 \mid 3)$. Die einzige Nullstelle ist $0$.
:::

### Die stetige Fortsetzung

Bei einer hebbaren Lücke kann man die Funktion „reparieren“, indem man den fehlenden Wert ergänzt.

:::definition[Stetige Fortsetzung]
Es sei $f$ auf $D \setminus \{x_0\}$ definiert und stetig, und der Grenzwert $L = \lim\limits_{x \to x_0} f(x)$ existiere.
Dann heißt
$$F(x) = \begin{cases} f(x) & x \neq x_0 \\ L & x = x_0 \end{cases}$$
die **stetige Fortsetzung** von $f$ in $x_0$. Sie ist an $x_0$ stetig, und $L$ ist die **einzige** Wahl von $F(x_0)$ mit dieser Eigenschaft.
:::

Dabei ist $D \setminus \{x_0\}$ der Definitionsbereich ohne die Stelle $x_0$. Das Zeichen $\setminus$ liest man „ohne“.
Die Eindeutigkeit folgt aus der Eindeutigkeit des Grenzwerts: Stetigkeit verlangt $F(x_0) = \lim F(x) = L$, und es gibt
nur einen Grenzwert.

:::beispiel[Die Spaltfunktion]
$f(x) = \dfrac{\sin x}{x}$ ist bei $0$ nicht definiert. Wegen des Standardgrenzwerts
$\lim\limits_{x \to 0} \frac{\sin x}{x} = 1$ ist
$$\operatorname{si}(x) = \begin{cases} \dfrac{\sin x}{x} & x \neq 0 \\ 1 & x = 0 \end{cases}$$
auf ganz $\R$ stetig. Diese Funktion heißt **Spaltfunktion**. Ihr Quadrat beschreibt zum Beispiel, wie sich die
Helligkeit von Licht hinter einem engen Spalt verteilt, und sie kommt in der Signalverarbeitung ständig vor.
:::

```plot
x: [-15, 15]
y: [-0.4, 1.2]
graphen:
  - { f: "sin(x)/x", label: "sin(x)/x", farbe: 0 }
punkte:
  - { x: 0, y: 1, label: "si(0) = 1" }
beschriftung: Die Spaltfunktion sin(x)/x. Die Lücke bei 0 wird durch den Wert 1 stetig geschlossen. Für große |x| pendelt der Graph mit kleiner werdender Höhe um die x-Achse.
```

:::beispiel[Fortsetzbar oder nicht]
**Nicht fortsetzbar** sind $\frac1x$ (Pol), $\operatorname{sgn}(x)$ (Sprung) und $\sin\frac1x$ (Oszillation) an der Stelle
$0$. Bei allen dreien existiert der Grenzwert nicht, also gibt es keinen passenden Wert.

**Fortsetzbar** ist dagegen $x\sin\frac1x$. Wegen $\left|x\sin\frac1x\right| \le |x|$ gilt
$-|x| \le x\sin\frac1x \le |x|$, und nach dem Einschließungssatz ist der Grenzwert $0$. Die stetige Fortsetzung hat an
der Stelle $0$ den Wert $0$.
:::

:::tipp[Vertiefung: eine Funktion, die nirgends stetig ist]
Die **Dirichlet-Funktion** ist $D(x) = 1$ für rationale und $D(x) = 0$ für irrationale $x$. In jeder noch so kleinen
Umgebung jeder Stelle liegen rationale und irrationale Zahlen. Man findet also zu jedem $x_0$ eine Folge rationaler und
eine Folge irrationaler Zahlen, die gegen $x_0$ gehen. Ihre Funktionswerte sind $1$ und $0$. Deshalb ist $D$ an **keiner
Stelle** stetig. Sie taucht in [14.3 Definition der Integrierbarkeit](/lernen/mathe3/integrierbarkeit/definition-der-integrierbarkeit) wieder auf, als Beispiel einer nicht
integrierbaren Funktion.
:::

```reflexion
frage: Warum ist die stetige Fortsetzung eindeutig? Könnte man an einer hebbaren Lücke nicht auch einen anderen Wert einsetzen?
antwort: |
  Einsetzen darf man jeden Wert, aber nur einer macht die Funktion stetig. Stetigkeit verlangt, dass der Funktionswert
  gleich dem Grenzwert ist. Der Grenzwert ist eindeutig, genau wie bei Folgen (siehe
  [11.7 Eindeutigkeit und Beschränktheit](/lernen/mathe3/grenzwerte-folgen/eindeutigkeit-und-beschraenktheit-die-ersten-beweise)). Also gibt es genau einen
  passenden Wert. Bei $\frac{x^2 - 25}{x - 5}$ macht nur der Wert $10$ die Funktion stetig. Mit jedem anderen Wert hätte
  man immer noch ein Loch bei $(5 \mid 10)$ und einen einzelnen Punkt woanders.
```

```aufgabe
id: gs-gaussklammer
titel: Die Gaußklammer
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Die **Gaußklammer** $\lfloor x \rfloor$ ist die größte ganze Zahl, die kleiner oder gleich $x$ ist. Zum Beispiel ist
  $\lfloor 2{,}7 \rfloor = 2$, $\lfloor 3 \rfloor = 3$ und $\lfloor -0{,}5 \rfloor = -1$.

  Bestimme an der Stelle $x_0 = 3$ die einseitigen Grenzwerte von $f(x) = \lfloor x \rfloor$ und die Sprunghöhe.
teile:
  - typ: zahl
    label: '$\lim_{x \to 3^-} \lfloor x \rfloor$'
    loesung: "2"
    fehler:
      - wert: "3"
        meldung: |
          Für $x$ knapp unter $3$, etwa $2{,}99$, ist die größte ganze Zahl darunter $2$. Erst bei genau $3$ springt der Wert auf $3$.
  - typ: zahl
    label: '$\lim_{x \to 3^+} \lfloor x \rfloor$'
    loesung: "3"
    fehler:
      - wert: "4"
        meldung: |
          Für $x$ knapp über $3$, etwa $3{,}01$, ist $\lfloor x \rfloor = 3$. Der Wert $4$ kommt erst ab $x = 4$.
  - typ: zahl
    label: 'Sprunghöhe'
    loesung: "3 - 2"
    anzeige: '1'
hinweise:
  - 'Setze Testwerte ein: $\lfloor 2{,}99 \rfloor$ und $\lfloor 3{,}01 \rfloor$.'
loesung: |
  Ansatz: Die Gaußklammer ist auf jedem Intervall $[k;\ k + 1)$ konstant gleich $k$. Wir lesen beide Seiten von $3$ ab.
  ---
  Für $2 \le x < 3$ ist $\lfloor x \rfloor = 2$, also ist der linksseitige Grenzwert $2$. Für $3 \le x < 4$ ist $\lfloor x \rfloor = 3$, also ist der rechtsseitige Grenzwert $3 = f(3)$.
  ---
  Sprungstelle mit Sprunghöhe $3 - 2 = 1$. Die Gaußklammer ist an jeder ganzen Zahl unstetig, dazwischen stetig.
```

```aufgabe
id: gs-fortsetzung
titel: Hebbare Lücke schließen
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  $f(x) = \dfrac{x^2 + x - 6}{x - 2}$ hat bei $x = 2$ eine Definitionslücke. Mit welchem Wert lässt sich $f$ dort stetig fortsetzen?
teile:
  - typ: zahl
    label: '$F(2)$'
    loesung: "2 + 3"
    anzeige: '5'
    fehler:
      - wert: "0"
        meldung: |
          Einsetzen ergibt $\frac00$, und das ist kein Wert. Faktorisiere den Zähler und kürze $(x - 2)$.
      - wert: "1"
        meldung: |
          $\frac00$ ist nicht $1$. Nach dem Kürzen bleibt $x + 3$.
hinweise:
  - '$x^2 + x - 6 = (x - 2)(x + 3)$.'
loesung: |
  Ansatz: Der Wert der stetigen Fortsetzung ist der Grenzwert an der Lücke.
  ---
  Faktorisieren: $f(x) = \dfrac{(x - 2)(x + 3)}{x - 2} = x + 3$ für $x \neq 2$.
  ---
  $\lim\limits_{x \to 2} f(x) = 5$. Die stetige Fortsetzung ist $F(x) = x + 3$ auf ganz $\R$, also $F(2) = 5$.
```

```aufgabe
id: gs-klassifizieren
titel: Lücken einordnen
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Untersuche $f(x) = \dfrac{x^2 + 2x - 3}{x^2 - 1}$ an den Definitionslücken.
teile:
  - typ: auswahl
    label: 'Art der Lücke bei $x = 1$'
    optionen: ['hebbar', 'Sprung', 'Polstelle']
    richtig: [0]
    fehler:
      - wert: 2
        meldung: |
          Bei $x = 1$ werden Zähler **und** Nenner $0$. Prüfe, ob sich der Faktor $(x - 1)$ ganz wegkürzt.
  - typ: zahl
    label: '$\lim_{x \to 1} f(x)$'
    loesung: "(1 + 3)/(1 + 1)"
    anzeige: '2'
    fehler:
      - wert: "1"
        meldung: |
          $\frac00$ ist nicht $1$. Setze in den gekürzten Term $\frac{x + 3}{x + 1}$ ein.
  - typ: auswahl
    label: 'Art der Lücke bei $x = -1$'
    optionen: ['hebbar', 'Sprung', 'Polstelle']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: |
          Der Faktor $(x + 1)$ steht nur im Nenner, er kürzt sich nicht weg. Der Zähler ist bei $-1$ gleich $-4 \neq 0$.
hinweise:
  - '$x^2 + 2x - 3 = (x - 1)(x + 3)$ und $x^2 - 1 = (x - 1)(x + 1)$.'
  - 'Nach dem Kürzen: Welche Nullstelle des Nenners ist übrig geblieben?'
loesung: |
  Ansatz: Faktorisieren, kürzen, dann jede Nullstelle des ursprünglichen Nenners einordnen.
  ---
  $f(x) = \dfrac{(x - 1)(x + 3)}{(x - 1)(x + 1)} = \dfrac{x + 3}{x + 1}$ für $x \neq \pm1$.
  ---
  $x = 1$: Der Faktor kürzt sich weg, $\lim\limits_{x \to 1} f(x) = \tfrac{4}{2} = 2$. Hebbare Lücke.
  ---
  $x = -1$: Gekürzter Nenner $0$, Zähler $-1 + 3 = 2 \neq 0$. Polstelle mit Vorzeichenwechsel.
```

```aufgabe
id: gs-fortsetzung-trig
titel: Fortsetzung mit Standardgrenzwerten
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Bestimme die Werte der stetigen Fortsetzungen an der Stelle $0$:
  $$f_1(x) = \frac{\sin 4x}{2x}, \qquad f_2(x) = \frac{1 - \cos x}{x}, \qquad f_3(x) = \frac{x^2 + 3x}{\sin x}.$$
teile:
  - typ: zahl
    label: '$F_1(0)$'
    loesung: "2"
    fehler:
      - wert: "1"
        meldung: |
          Oben steht $4x$, unten $2x$. Erweitere: $\frac{\sin 4x}{2x} = 2 \cdot \frac{\sin 4x}{4x}$.
  - typ: zahl
    label: '$F_2(0)$'
    loesung: "0"
    fehler:
      - wert: "1/2"
        meldung: |
          $\frac12$ ist der Grenzwert von $\frac{1 - \cos x}{x^2}$. Hier steht im Nenner nur $x$, nicht $x^2$.
  - typ: zahl
    label: '$F_3(0)$'
    loesung: "3"
    fehler:
      - wert: "0"
        meldung: |
          Einsetzen ergibt $\frac00$, nicht $0$. Klammere $x$ aus und verwende $\frac{x}{\sin x} \to 1$.
hinweise:
  - 'Bei $f_1$: $\frac{\sin 4x}{2x} = 2\cdot\frac{\sin 4x}{4x}$.'
  - 'Bei $f_3$: $\dfrac{x^2 + 3x}{\sin x} = (x + 3)\cdot\dfrac{x}{\sin x}$.'
loesung: |
  Ansatz: Der Wert jeder Fortsetzung ist der Grenzwert bei $0$. Wir führen alles auf Standardgrenzwerte zurück.
  ---
  $f_1(x) = 2\cdot\dfrac{\sin 4x}{4x} \to 2$.
  ---
  $f_2(x) = \dfrac{1 - \cos x}{x} \to 0$ (Standardgrenzwert).
  ---
  $f_3(x) = (x + 3)\cdot\dfrac{x}{\sin x} \to 3\cdot 1 = 3$.
```

```aufgabe
id: gs-fortsetzbar
titel: Fortsetzbar oder nicht?
niveau: 2
lernziel: 5
kompetenz: verstehen
angabe: |
  Welche Funktionen lassen sich an der Stelle $0$ stetig fortsetzen? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$\dfrac{e^x - 1}{x}$'
      - '$\dfrac{x}{|x|}$'
      - '$x^2\cos\dfrac1x$'
      - '$\dfrac{1}{x^2}$'
      - '$\dfrac{x^2 - 3x}{x}$'
    richtig: [0, 2, 4]
    fehler:
      - wert: [0, 1, 2, 4]
        meldung: |
          $\frac{x}{|x|}$ ist links $-1$ und rechts $1$. Bei einem Sprung gibt es keinen gemeinsamen Grenzwert, also auch keinen passenden Wert.
      - wert: [0, 2, 3, 4]
        meldung: |
          $\frac{1}{x^2}$ wächst bei $0$ über alle Grenzen. Unendlich ist kein Funktionswert.
      - wert: [0, 4]
        meldung: |
          $x^2\cos\frac1x$ schwingt, aber der Faktor $x^2$ drückt die Schwingung auf $0$. Einschließungssatz: $-x^2 \le x^2\cos\frac1x \le x^2$.
hinweise:
  - 'Fortsetzbar heißt: Der beidseitige Grenzwert bei $0$ existiert als reelle Zahl.'
  - 'Für $x^2\cos\frac1x$ hilft der Einschließungssatz.'
loesung: |
  Ansatz: Für jede Funktion prüfen wir, ob der Grenzwert bei $0$ als reelle Zahl existiert.
  ---
  $\tfrac{e^x - 1}{x} \to 1$: fortsetzbar mit $1$.
  ---
  $\tfrac{x}{|x|}$: Sprung von $-1$ auf $1$, nicht fortsetzbar. $x^2\cos\tfrac1x \to 0$ nach dem Einschließungssatz: fortsetzbar mit $0$.
  ---
  $\tfrac{1}{x^2} \to +\infty$: Pol, nicht fortsetzbar. $\tfrac{x^2 - 3x}{x} = x - 3 \to -3$: fortsetzbar mit $-3$.
```

```aufgabe
id: gs-luecke-gefuehrt
titel: Zwei Lücken, Schritt für Schritt
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Gegeben ist $f(x) = \dfrac{x^2 + 2x - 8}{x^2 - 4}$. Bestimme den Wert der stetigen Fortsetzung an der hebbaren Lücke
  und gib die Polstelle an.
teile:
  - typ: zahl
    label: 'Wert der Fortsetzung'
    loesung: "(2 + 4)/(2 + 2)"
    anzeige: '\tfrac32'
    fehler:
      - wert: "1"
        meldung: |
          Einsetzen von $2$ ergibt $\frac00$, und $\frac00$ ist nicht $1$. Faktorisiere den Zähler, kürze $(x - 2)$ und setze erst dann ein.
  - typ: zahl
    label: 'Polstelle'
    loesung: "-2"
    fehler:
      - wert: "2"
        meldung: |
          Bei $x = 2$ kürzt sich der Faktor weg, dort ist die Lücke hebbar. Die Polstelle ist die andere Nullstelle des Nenners.
hinweise:
  - 'Nenner: $x^2 - 4 = (x - 2)(x + 2)$.'
  - 'Zähler: Suche zwei Zahlen mit Produkt $-8$ und Summe $2$.'
gefuehrt:
  - text: Bei welchen beiden Stellen wird der Nenner $x^2 - 4$ null? Gib die positive an.
    teil:
      typ: zahl
      loesung: "2"
    erklaerung: '$x^2 - 4 = 0$ für $x = 2$ und $x = -2$.'
  - text: 'Faktorisiere den Zähler: $x^2 + 2x - 8 = (x - 2) \cdot T$. Welcher Term ist $T$?'
    teil:
      typ: term
      loesung: "x + 4"
      fehler:
        - wert: "x - 4"
          meldung: 'Probe: $(x - 2)(x - 4) = x^2 - 6x + 8$. Das Vorzeichen passt nicht.'
    erklaerung: '$(x - 2)(x + 4) = x^2 + 4x - 2x - 8 = x^2 + 2x - 8$ ✓. Der Faktor $(x - 2)$ steht oben und unten.'
  - text: Nach dem Kürzen ist $f(x) = \frac{x + 4}{x + 2}$. Welchen Wert hat das bei $x = 2$?
    teil:
      typ: zahl
      loesung: "6/4"
    erklaerung: '$\frac{6}{4} = \frac32$. Das ist der Wert der stetigen Fortsetzung bei $2$.'
  - text: Überlege, warum $x = -2$ eine Polstelle ist.
    erklaerung: 'Im gekürzten Nenner $x + 2$ bleibt die Nullstelle $-2$. Der Zähler ist dort $-2 + 4 = 2 \neq 0$. Also ist $-2$ eine Polstelle.'
loesung: |
  Ansatz: Zähler und Nenner faktorisieren, gemeinsame Faktoren kürzen, dann die Lücken einordnen.
  ---
  $x^2 + 2x - 8 = (x - 2)(x + 4)$ und $x^2 - 4 = (x - 2)(x + 2)$. Für $x \neq \pm 2$: $f(x) = \frac{x + 4}{x + 2}$.
  ---
  Bei $2$ hebbar: Wert der Fortsetzung $\frac{6}{4} = 1{,}5$.
  ---
  Bei $-2$ Polstelle, weil der gekürzte Nenner $0$ und der Zähler $2 \neq 0$ ist. Probe: $f(2{,}01) = \frac{4{,}0401 + 4{,}02 - 8}{4{,}0401 - 4} = \frac{0{,}0601}{0{,}0401} \approx 1{,}499$ ✓.
```

```aufgabe
id: gs-luecke-parameter
titel: Eine Lücke hebbar machen
niveau: 3
lernziel: 5
kompetenz: begruenden
angabe: |
  Gegeben ist $f(x) = \dfrac{x^2 + a x + 3}{x^2 - 2x - 3}$ mit einer Zahl $a$.

  a) Bestimme $a$ so, dass $f$ bei $x = 3$ eine hebbare Lücke hat.

  b) Gib für dieses $a$ den Wert der stetigen Fortsetzung bei $x = 3$ an.

  c) Begründe, welche Art von Lücke $f$ dann bei $x = -1$ hat.
teile:
  - typ: zahl
    label: 'a) $a$'
    loesung: "-4"
  - typ: zahl
    label: 'b) Wert der Fortsetzung'
    loesung: "(3 - 1)/(3 + 1)"
    anzeige: '\tfrac12'
  - typ: text
    label: 'c) Begründung'
    muster: |
      Mit $a = -4$ ist der Zähler $x^2 - 4x + 3 = (x - 1)(x - 3)$, der Nenner $(x - 3)(x + 1)$.
      Gekürzt bleibt $\frac{x - 1}{x + 1}$. Bei $x = -1$ ist der gekürzte Nenner $0$, der Zähler $-2 \neq 0$.
      Also ist $-1$ eine Polstelle, mit Vorzeichenwechsel, weil $(x + 1)$ in erster Potenz vorkommt.
hinweise:
  - 'Faktorisiere den Nenner: $x^2 - 2x - 3 = (x - 3)(x + 1)$. Hebbar heißt: Der Zähler muss den Faktor $(x - 3)$ auch enthalten.'
  - 'Der Zähler enthält $(x - 3)$ genau dann, wenn er bei $x = 3$ null wird: $9 + 3a + 3 = 0$.'
loesung: |
  Ansatz: Eine Nullstelle des Nenners ist hebbar, wenn sich der zugehörige Faktor vollständig wegkürzt. Dazu muss der Zähler dieselbe Nullstelle haben.
  ---
  a) Nenner: $(x - 3)(x + 1)$. Zähler bei $3$: $9 + 3a + 3 = 0$, also $a = -4$.
  ---
  b) Zähler $x^2 - 4x + 3 = (x - 1)(x - 3)$. Gekürzt: $\frac{x - 1}{x + 1}$. Bei $3$: $\frac{2}{4} = \frac12$.
  ---
  c) Bei $-1$ bleibt der Nenner $0$, der Zähler ist $-2$. Antwort: Polstelle mit Vorzeichenwechsel.
```

## Stückweise definierte Funktionen

```aufgabe
id: gs-stueckweise-vorwissen
titel: Welcher Ast gilt an der Nahtstelle?
niveau: 1
art: check
angabe: |
  Gegeben ist $f(x) = \begin{cases} x + 1 & x \le 2 \\ x^2 & x > 2. \end{cases}$ Berechne $f(2)$.
  (Vorwissen aus [Kapitel 4, Betragsfunktion und stückweise definierte Funktionen](/lernen/mathe3/funktionen/betragsfunktion-und-stueckweise-definierte-funktionen).)
teile:
  - typ: zahl
    loesung: "2 + 1"
    anzeige: '3'
    fehler:
      - wert: "4"
        meldung: |
          $x^2$ gilt nur für $x > 2$. Die Zahl $2$ erfüllt aber $2 \le 2$, also gehört sie zum oberen Ast.
hinweise:
  - 'Prüfe, welche Bedingung die Zahl $2$ erfüllt: $2 \le 2$ oder $2 > 2$?'
loesung: |
  $2 \le 2$ ist wahr, $2 > 2$ ist falsch. Also gilt an der Stelle $2$ der Term $x + 1$.
  ---
  $f(2) = 2 + 1 = 3$.
```

**Worum geht es in dieser Lektion?** Stückweise definierte Funktionen sind der Prüfungsklassiker zur Stetigkeit. Im
Inneren jedes Stücks ist die Funktion durch einen „harmlosen“ Term gegeben, etwa ein Polynom, und damit stetig. Spannend
sind nur die **Nahtstellen**, an denen zwei Terme aneinanderstoßen. Dort prüft man drei Werte: links, rechts und den
Funktionswert.

### Parameter bestimmen

:::beispiel[Ein Parameter macht die Funktion stetig]
Für welches $a$ ist
$$f(x) = \begin{cases} ax + 1 & x < 2 \\ x^2 - a & x \ge 2 \end{cases}$$
auf ganz $\R$ stetig?

**Schritt 1, das Innere.** Für $x < 2$ und für $x > 2$ ist $f$ jeweils ein Polynom, also stetig. Es bleibt nur die
Nahtstelle $2$.

**Schritt 2, die drei Werte an der Nahtstelle.**
- Links: $\lim\limits_{x \to 2^-} (ax + 1) = 2a + 1$.
- Rechts: $\lim\limits_{x \to 2^+} (x^2 - a) = 4 - a$.
- Funktionswert: Wegen $x \ge 2$ gilt $f(2) = 4 - a$.

**Schritt 3, gleichsetzen.** Stetig genau dann, wenn $2a + 1 = 4 - a$. Wir bringen $a$ auf eine Seite: $3a = 3$, also $a = 1$.

**Probe:** Mit $a = 1$ ist der linke Grenzwert $2 \cdot 1 + 1 = 3$ und der rechte $4 - 1 = 3$ ✓.
:::

:::merke[Rezept: Stetigkeit einer stückweisen Funktion]
1. **Im Inneren** der Teilintervalle: Ist jeder Term dort stetig (Polynom, $\sin$, $\cos$, $e^x$, kein Nenner $0$), ist $f$ dort stetig.
2. **An jeder Nahtstelle $x_0$:** linksseitigen Grenzwert mit dem linken Term berechnen, rechtsseitigen mit dem rechten Term, und den Funktionswert $f(x_0)$ aus der Definition ablesen.
3. $f$ ist an $x_0$ genau dann stetig, wenn **alle drei Werte gleich** sind.
4. Bei Parametern liefert das Gleichsetzen Gleichungen für die Parameter.
:::

:::beispiel[Ein Stromtarif ohne Preissprung]
Ein Stromanbieter verlangt bei einem Monatsverbrauch von $x$ kWh den Betrag $K(x) = 0{,}30\,x + 5$ Euro, wenn
$x \le 100$ ist. Bei größerem Verbrauch gilt $K(x) = 0{,}25\,x + c$ Euro. Wie groß muss die Konstante $c$ sein, damit der
Preis bei $100$ kWh nicht springt?

**Links und Funktionswert:** $K(100) = 0{,}30 \cdot 100 + 5 = 35$ Euro.

**Rechts:** $\lim\limits_{x \to 100^+} (0{,}25\,x + c) = 25 + c$ Euro.

**Gleichsetzen:** $25 + c = 35$, also $c = 10$ Euro. **Antwort:** Mit einer Grundgebühr von $10$ Euro im zweiten Tarif ist
$K$ stetig. Bei $101$ kWh zahlt man $35{,}25$ Euro, nur $0{,}25$ Euro mehr als bei $100$ kWh.
:::

:::achtung[Den Funktionswert an der Nahtstelle vergessen]
Falsch: „$f(x) = 2x + 1$ für $x < 1$, $f(1) = 4$ und $f(x) = x + 2$ für $x > 1$. Links kommt $3$ heraus, rechts auch $3$.
Also ist $f$ stetig.“

Richtig: Gleiche einseitige Grenzwerte zeigen nur, dass der Grenzwert $3$ existiert. Der Funktionswert $f(1) = 4$ passt
nicht dazu. Also ist $f$ an der Stelle $1$ **nicht** stetig. Es sind immer **drei** Werte zu vergleichen.
:::

:::achtung[Den falschen Ast für den Funktionswert nehmen]
Falsch: „$f(x) = x + 1$ für $x < 2$ und $f(x) = x^2$ für $x \ge 2$. Also ist $f(2) = 2 + 1 = 3$.“

Richtig: Die Bedingung $x < 2$ ist für $x = 2$ falsch, die Bedingung $x \ge 2$ ist wahr. Also ist $f(2) = 2^2 = 4$.
Achte bei jeder Nahtstelle darauf, wo das Gleichheitszeichen steht: bei $\le$ oder bei $\ge$.
:::

### Die Bauart aus der Musterprüfung

Eine Musterprüfung beschreibt Funktionen so: $f(x) = f_-(x)$ für $x < 0$, $f(x) = f_+(x)$ für $x > 0$, und der Wert $f(0)$
wird eigens angegeben. Dabei ist $f_-$ der linke Ast (das Minus steht für „links von $0$“) und $f_+$ der rechte Ast.
Wir gehen die typischen Fragen an **abgewandelten** Funktionen durch. Die Originalaufgabe wartet in den
[Prüfungssimulationen](/lernen/mathe3/pruefung) auf dich.

:::beispiel[Eine Knickfunktion: f(x) = 3|x|]
Die Funktion $f(x) = 3|x|$ ist von dieser Bauart mit $f_+(x) = 3x$, $f_-(x) = -3x$ und $f(0) = 0$.

**Stetigkeit bei $0$:** Links $-3 \cdot 0 = 0$, rechts $3 \cdot 0 = 0$, Funktionswert $0$. Alle drei gleich, also stetig.

**Ableitungen der Äste:** Die Ableitung gibt die Steigung an (siehe
[Kapitel 9, Grundregeln](/lernen/mathe3/differentialrechnung/grundregeln-potenz-faktor-und-summenregel-und-die-wichtigsten-ableitungen)).
Hier ist $f_+'(x) = 3$ und $f_-'(x) = -3$. Beide sind konstant.

**Was passiert bei $0$?** Der Graph ist ein steiles „V“ mit Spitze im Ursprung. Rechts hat er überall die Steigung $3$,
links überall $-3$. Am Ursprung stoßen zwei Geraden mit verschiedenen Steigungen in einem **Knick** zusammen. Es gibt
keine eindeutige Tangente, also keine Ableitung. Genau dazu mehr in
[Kapitel 13, Einseitige Ableitungen](/lernen/mathe3/differenzierbarkeit/einseitige-ableitungen-knick-senkrechte-tangente-oszillation).
:::

```plot
x: [-2, 2]
y: [-1, 5]
gleich: true
graphen:
  - { f: "3*abs(x)", label: "3|x|", farbe: 0 }
  - { f: "3*x", label: "Steigung 3", farbe: 1, gestrichelt: true, von: -0.4, bis: 1.6 }
  - { f: "-3*x", label: "Steigung −3", farbe: 2, gestrichelt: true, von: -1.6, bis: 0.4 }
punkte:
  - { x: 0, y: 0, label: "Knick" }
beschriftung: Die Funktion 3|x| ist bei 0 stetig, hat dort aber einen Knick. Die Verlängerungen der beiden Äste (gestrichelt) haben die verschiedenen Steigungen 3 und −3. Deshalb gibt es im Ursprung keine Tangente.
```

:::beispiel[Eine Unstetigkeit, die man nicht reparieren kann]
Gesucht sind Äste $g_-$ und $g_+$, sodass $g$ an der Stelle $0$ **nicht stetig sein kann, egal wie man $g(0)$ wählt**.

**Idee:** Stetigkeit braucht einen Grenzwert, und den gibt es nur, wenn links und rechts dasselbe herauskommt. Also
wählen wir Äste mit verschiedenen einseitigen Grenzwerten, zum Beispiel
$$g_-(x) = x^2, \qquad g_+(x) = x + 2.$$

**Prüfen:** Links strebt $x^2$ gegen $0$, rechts strebt $x + 2$ gegen $2$. Für Stetigkeit müsste $g(0)$ gleichzeitig $0$
und $2$ sein. Das ist unmöglich.

**Andere richtige Antworten:** jeder Sprung, etwa $g_- = -1$ und $g_+ = 1$, oder ein Pol wie $g_+(x) = \frac1x$.
:::

### Selbst beobachten

```aufgabe
id: gs-stueckweise-vorhersage
titel: Welcher Wert passt an die Nahtstelle?
niveau: 1
art: check
angabe: |
  Es sei $h(x) = e^x$ für $x < 0$ und $h(x) = 1 + \sin x$ für $x > 0$. **Welchen Wert muss man für $h(0)$ wählen, damit $h$
  an der Stelle $0$ stetig ist?** Sag es voraus, bevor du das Widget benutzt.
teile:
  - typ: zahl
    label: '$h(0)$'
    loesung: "1"
    fehler:
      - wert: "0"
        meldung: |
          $e^0$ ist nicht $0$, sondern $1$. Und $1 + \sin 0 = 1 + 0 = 1$.
      - wert: "2"
        meldung: |
          $\sin 0 = 0$, also ist $1 + \sin 0 = 1$, nicht $2$.
hinweise:
  - 'Berechne $\lim_{x \to 0^-} e^x$ und $\lim_{x \to 0^+}(1 + \sin x)$.'
loesung: |
  Beide Äste sind stetig, also darf man $0$ einsetzen: links $e^0 = 1$, rechts $1 + \sin 0 = 1$.
  ---
  Die einseitigen Grenzwerte sind gleich $1$. Mit $h(0) = 1$ sind alle drei Werte gleich, und $h$ ist stetig.
```

```widget
name: stetigkeit
titel: Zwei Äste an der Nahtstelle 0
props:
  links: "exp(x)"
  rechts: "1 + sin(x)"
  stelle: 0
  wert: "keiner"
  x: [-2, 2]
  y: [-0.5, 2.5]
```

**Arbeitsauftrag:** Das Widget zeigt die beiden Äste ohne Funktionswert bei $0$. **Beobachte** die Meldung
„Definitionslücke, hebbar“ und lies die beiden einseitigen Grenzwerte in den Kennwerten ab. Vergleiche sie mit deiner
Vorhersage für $h(0)$. **Erkläre**, warum genau dieser Wert die Lücke stetig schließt und kein anderer Wert funktioniert.

:::beispiel[h(0) passend wählen und die Ableitung bestimmen]
Mit $h_-(x) = e^x$, $h_+(x) = 1 + \sin x$ und $h(0) = 1$ ist $h$ stetig. Ist $h$ an der Stelle $0$ sogar differenzierbar?

**Differenzenquotient von links:** Für $x < 0$ ist $\dfrac{h(x) - h(0)}{x - 0} = \dfrac{e^x - 1}{x}$. Das ist ein
Standardgrenzwert aus [12.6](/lernen/mathe3/grenzwerte-stetigkeit/einschliessungssatz-und-standardgrenzwerte) und strebt
gegen $1$.

**Differenzenquotient von rechts:** Für $x > 0$ ist $\dfrac{1 + \sin x - 1}{x} = \dfrac{\sin x}{x} \to 1$.

**Ergebnis:** Beide einseitigen Grenzwerte sind $1$. Also ist $h$ an der Stelle $0$ differenzierbar mit $h'(0) = 1$. Zur
Kontrolle über die Äste: $h_-'(0) = e^0 = 1$ und $h_+'(0) = \cos 0 = 1$. Die Äste treffen sich ohne Knick mit
Steigung $1$.
:::

```plot
x: [-2, 2]
y: [-0.5, 2.5]
graphen:
  - { f: "exp(x)", label: "eˣ (x < 0)", farbe: 0, von: -2, bis: 0 }
  - { f: "1 + sin(x)", label: "1 + sin x (x > 0)", farbe: 1, von: 0, bis: 2 }
  - { f: "x + 1", label: "Tangente y = x + 1", farbe: 2, gestrichelt: true, von: -1, bis: 1 }
punkte:
  - { x: 0, y: 1, label: "h(0) = 1" }
beschriftung: Die Funktion h aus eˣ (links) und 1 + sin x (rechts). Beide Äste erreichen bei 0 den Wert 1 und haben dort die Steigung 1. Deshalb ist h bei 0 stetig und sogar differenzierbar, mit der Tangente y = x + 1.
```

:::pruefung[So holst du bei dieser Aufgabe alle Punkte]
- Bei der Frage nach $h(0)$ genügt nicht „$h(0) = 1$“. Schreib beide einseitigen Grenzwerte hin und begründe, warum man einsetzen darf: „$e^x$ und $1 + \sin x$ sind stetig.“
- Bei der Frage nach $h'(0)$ bringt der Weg über den Differenzenquotienten volle Punkte. Der Vergleich der Ableitungen der Äste ist eine gute Kontrolle.
- Bei der unvermeidbaren Unstetigkeit nennst du ein Beispiel **und** die Begründung: „Die einseitigen Grenzwerte sind verschieden, also existiert der Grenzwert nicht.“
:::

```reflexion
frage: Warum kann man bei einem Sprung keinen Wert f(0) finden, der die Funktion stetig macht, bei einer hebbaren Lücke aber schon?
antwort: |
  Stetigkeit verlangt drei gleiche Werte: links, rechts und den Funktionswert. Bei einer hebbaren Lücke sind links und
  rechts schon gleich. Dann wählt man den Funktionswert einfach als diesen gemeinsamen Wert. Bei einem Sprung sind links
  und rechts verschieden. Der Funktionswert kann aber nur eine einzige Zahl sein und deshalb nie beiden gleichzeitig
  entsprechen. Der Fehler liegt in den Ästen, nicht im Wert an der Nahtstelle.
```

```aufgabe
id: gs-parameter-a
titel: Einen Parameter bestimmen
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Bestimme $a$ so, dass
  $$f(x) = \begin{cases} 3x - a & x < 1 \\ ax + 5 & x \ge 1 \end{cases}$$
  stetig ist.
teile:
  - typ: zahl
    label: '$a$'
    loesung: "-1"
    fehler:
      - wert: "1"
        meldung: |
          Prüfe die Gleichung: $3 - a = a + 5$ ergibt $-2a = 2$. Teilen durch $-2$ liefert ein negatives Ergebnis.
      - wert: "4"
        meldung: |
          $4$ ist der Wert der Funktion an der Nahtstelle, nicht der Parameter. Gesucht ist $a$.
hinweise:
  - 'An der Nahtstelle $1$: linker Grenzwert $3 - a$, rechter Grenzwert und Funktionswert $a + 5$.'
loesung: |
  Ansatz: Im Inneren sind beide Terme Polynome, also stetig. Wir prüfen nur die Nahtstelle $1$.
  ---
  Links: $3\cdot 1 - a = 3 - a$. Rechts und $f(1)$: $a \cdot 1 + 5 = a + 5$.
  ---
  $3 - a = a + 5 \iff -2 = 2a \iff a = -1$. Probe: links $3 + 1 = 4$, rechts $-1 + 5 = 4$ ✓
```

```aufgabe
id: gs-nahtstelle-wert
titel: Stetig an der Nahtstelle?
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Gegeben ist $f(x) = \begin{cases} x^2 - 1 & x \le 2 \\ 2x - 1 & x > 2. \end{cases}$
  Berechne $f(2)$ und den rechtsseitigen Grenzwert an der Stelle $2$. Ist $f$ dort stetig?
teile:
  - typ: zahl
    label: '$f(2)$'
    loesung: "2^2 - 1"
    anzeige: '3'
    fehler:
      - wert: "4"
        meldung: |
          $2^2 = 4$ stimmt, aber im oberen Ast steht $x^2 - 1$. Das $-1$ fehlt.
  - typ: zahl
    label: '$\lim_{x \to 2^+} f(x)$'
    loesung: "2*2 - 1"
    anzeige: '3'
    fehler:
      - wert: "4"
        meldung: |
          Rechts von $2$ gilt $2x - 1$. Setze ein: $4 - 1$.
  - typ: auswahl
    label: 'Ist $f$ an der Stelle $2$ stetig?'
    optionen: ['ja', 'nein']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Der linke Grenzwert ist $2^2 - 1 = 3$, der rechte $3$, der Funktionswert $3$. Alle drei stimmen überein.
hinweise:
  - 'Der linke Grenzwert und der Funktionswert kommen beide aus $x^2 - 1$.'
loesung: |
  Ansatz: Wir berechnen die drei Werte an der Nahtstelle.
  ---
  $f(2) = 4 - 1 = 3$, und von links strebt $x^2 - 1$ ebenfalls gegen $3$. Von rechts strebt $2x - 1$ gegen $3$.
  ---
  Alle drei Werte sind $3$. Also ist $f$ an der Stelle $2$ stetig, und weil beide Äste Polynome sind, auf ganz $\R$.
```

```aufgabe
id: gs-parameter-zwei
titel: Zwei Nahtstellen, zwei Parameter
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Bestimme $a$ und $b$ so, dass
  $$f(x) = \begin{cases} ax + 1 & x \le 1 \\ x^2 + b & 1 < x < 2 \\ 3x & x \ge 2 \end{cases}$$
  auf ganz $\R$ stetig ist.
teile:
  - typ: zahl
    label: '$a$'
    loesung: "2"
    fehler:
      - wert: "0"
        meldung: |
          Prüfe die Nahtstelle $1$ mit dem richtigen $b$: rechts ist $1 + b = 3$. Dann muss $a + 1 = 3$ sein.
  - typ: zahl
    label: '$b$'
    loesung: "2"
    fehler:
      - wert: "5"
        meldung: |
          An der Nahtstelle $2$ gilt rechts $3 \cdot 2 = 6$ und links $2^2 + b = 4 + b$. Löse $4 + b = 6$.
hinweise:
  - 'Beginne an der Nahtstelle $x = 2$: Dort kommt nur $b$ vor.'
  - 'Bei $x = 2$: $4 + b = 6$. Danach $x = 1$: $a + 1 = 1 + b$.'
loesung: |
  Ansatz: Zwei Nahtstellen liefern zwei Gleichungen. Wir beginnen dort, wo nur ein Parameter vorkommt.
  ---
  Nahtstelle $2$: links $\lim\limits_{x \to 2^-}(x^2 + b) = 4 + b$, rechts und $f(2) = 3\cdot 2 = 6$. Also $b = 2$.
  ---
  Nahtstelle $1$: links und $f(1) = a + 1$, rechts $\lim\limits_{x \to 1^+}(x^2 + b) = 1 + b = 3$. Also $a + 1 = 3$, $a = 2$.
  ---
  Probe: $f(1) = 3$, rechtsseitig $1 + 2 = 3$ ✓. Linksseitig bei $2$: $4 + 2 = 6 = f(2)$ ✓
```

```aufgabe
id: gs-unvermeidbar
titel: Wann lässt sich die Lücke schließen?
niveau: 2
lernziel: 6
kompetenz: begruenden
angabe: |
  Eine Funktion $g$ sei durch $g(x) = g_-(x)$ für $x < 0$ und $g(x) = g_+(x)$ für $x > 0$ gegeben.
  Bei welchen Paaren kann man $g(0)$ so wählen, dass $g$ an der Stelle $0$ stetig ist? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$g_-(x) = x - 1$, $g_+(x) = x + 1$'
      - '$g_-(x) = x^2$, $g_+(x) = \sin x$'
      - '$g_-(x) = \cos x$, $g_+(x) = e^{-x}$'
      - '$g_-(x) = x$, $g_+(x) = \frac1x$'
      - '$g_-(x) = 2^x$, $g_+(x) = 1 - x$'
    richtig: [1, 2, 4]
    fehler:
      - wert: [0, 1, 2, 4]
        meldung: |
          Beim ersten Paar ist der linke Grenzwert $-1$ und der rechte $1$. Ein Sprung lässt sich mit keinem Wert schließen.
      - wert: [1, 2, 3, 4]
        meldung: |
          Beim vierten Paar wächst $\frac1x$ rechts über alle Grenzen. Unendlich ist kein Funktionswert.
      - wert: [1, 2]
        meldung: |
          Auch beim fünften Paar passt es: $2^0 = 1$ und $1 - 0 = 1$.
hinweise:
  - 'Berechne für jedes Paar die beiden einseitigen Grenzwerte bei $0$.'
  - 'Möglich ist es genau dann, wenn beide als reelle Zahlen existieren und gleich sind.'
loesung: |
  Ansatz: Möglich genau dann, wenn beide einseitigen Grenzwerte existieren und gleich sind. Dann wählt man $g(0)$ als diesen Wert.
  ---
  1: $-1$ und $1$, Sprung, nicht möglich. 2: $0$ und $0$, mit $g(0) = 0$ stetig.
  ---
  3: $\cos 0 = 1$ und $e^{0} = 1$, mit $g(0) = 1$ stetig. 4: links $0$, rechts $+\infty$ (Pol), nicht möglich.
  ---
  5: $2^0 = 1$ und $1 - 0 = 1$, mit $g(0) = 1$ stetig. Richtig sind also die Paare 2, 3 und 5.
```

```aufgabe
id: gs-stueckweise-gefuehrt
titel: Ein Parameter in beiden Ästen
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Bestimme $a$ so, dass $f(x) = \begin{cases} x^2 + a & x < 1 \\ 4x - a & x \ge 1 \end{cases}$ stetig ist.
  Gib $a$ als Dezimalzahl an.
teile:
  - typ: zahl
    label: '$a$'
    loesung: "3/2"
    anzeige: '1{,}5'
    fehler:
      - wert: "3"
        meldung: |
          Aus $1 + a = 4 - a$ folgt $2a = 3$. Du hast vergessen, durch $2$ zu teilen.
      - wert: "0"
        meldung: |
          $a$ kommt auf beiden Seiten vor, mit verschiedenem Vorzeichen. Bring alle $a$ auf eine Seite: $a + a = 4 - 1$.
hinweise:
  - 'Werte beide Äste an der Nahtstelle $1$ aus.'
  - 'Löse $1 + a = 4 - a$ nach $a$ auf.'
gefuehrt:
  - text: Welchen Term liefert der linke Ast an der Stelle $1$?
    teil:
      typ: term
      variable: a
      loesung: "1 + a"
    erklaerung: '$1^2 + a = 1 + a$. Das ist der linksseitige Grenzwert.'
  - text: Welchen Term liefert der rechte Ast an der Stelle $1$? Das ist zugleich $f(1)$.
    teil:
      typ: term
      variable: a
      loesung: "4 - a"
    erklaerung: '$4 \cdot 1 - a = 4 - a$, wegen $x \ge 1$ auch der Funktionswert.'
  - text: Setze beide gleich und löse nach $a$ auf.
    teil:
      typ: zahl
      loesung: "1.5"
    erklaerung: '$1 + a = 4 - a \iff 2a = 3 \iff a = 1{,}5$.'
  - text: 'Probe: Welchen gemeinsamen Wert haben beide Äste an der Nahtstelle?'
    teil:
      typ: zahl
      loesung: "2.5"
    erklaerung: 'Links $1 + 1{,}5 = 2{,}5$, rechts $4 - 1{,}5 = 2{,}5$ ✓.'
loesung: |
  Ansatz: Beide Äste sind Polynome, also im Inneren stetig. An der Nahtstelle $1$ müssen links, rechts und $f(1)$ übereinstimmen.
  ---
  Links: $1 + a$. Rechts und $f(1)$: $4 - a$.
  ---
  $1 + a = 4 - a \iff 2a = 3 \iff a = 1{,}5$.
  ---
  Probe: beide Werte sind $2{,}5$ ✓.
```

```aufgabe
id: gs-wasserpreis-modell
titel: Ein Wassertarif ohne Sprung
niveau: 2
lernziel: 6
kompetenz: modellieren
angabe: |
  Ein Wasserversorger berechnet bei einem Jahresverbrauch von $x$ m³ den Preis
  $$W(x) = \begin{cases} 30 + 2{,}10\,x & 0 \le x \le 50 \\ c + 1{,}80\,x & x > 50 \end{cases} \quad \text{(in Euro)}.$$
  Bestimme die Konstante $c$ so, dass der Preis bei $50$ m³ nicht springt. Was kosten dann $60$ m³?
teile:
  - typ: zahl
    label: '$c$ in Euro'
    loesung: "30 + 2.1*50 - 1.8*50"
    einheit: 'Euro'
    anzeige: '45'
    fehler:
      - wert: "30"
        meldung: |
          Die Grundgebühr $30$ Euro gehört zum ersten Tarif. Für Stetigkeit muss $c + 1{,}80 \cdot 50$ gleich $W(50)$ sein.
      - wert: "135"
        meldung: |
          $135$ Euro ist der Preis $W(50)$. Davon musst du noch $1{,}80 \cdot 50 = 90$ Euro abziehen.
  - typ: zahl
    label: 'Preis für $60$ m³ in Euro'
    loesung: "45 + 1.8*60"
    einheit: 'Euro'
    anzeige: '153'
    fehler:
      - wert: "156"
        meldung: |
          Über $50$ m³ gilt der zweite Tarif mit $1{,}80$ Euro pro m³, nicht der erste.
hinweise:
  - 'Berechne $W(50)$ mit dem ersten Tarif.'
  - 'Rechtsseitiger Grenzwert: $c + 1{,}80 \cdot 50$. Setze gleich.'
loesung: |
  Ansatz: Kein Sprung heißt Stetigkeit an der Nahtstelle $50$. Wir setzen linken Wert und rechten Grenzwert gleich.
  ---
  $W(50) = 30 + 2{,}10 \cdot 50 = 135$ Euro. Rechts: $\lim\limits_{x \to 50^+}(c + 1{,}80\,x) = c + 90$ Euro.
  ---
  $c + 90 = 135$, also $c = 45$ Euro.
  ---
  $W(60) = 45 + 1{,}80 \cdot 60 = 153$ Euro. Antwort: Mit einer Grundgebühr von $45$ Euro im zweiten Tarif springt der Preis nicht. $60$ m³ kosten $153$ Euro.
```

```aufgabe
id: gs-parameter-sinus
titel: Nahtstelle mit Standardgrenzwert
niveau: 3
lernziel: 6
kompetenz: rechnen
angabe: |
  Bestimme $b$ und $c$ so, dass
  $$f(x) = \begin{cases} \dfrac{\sin 5x}{x} & x < 0 \\[4pt] b & x = 0 \\[2pt] e^x + c & x > 0 \end{cases}$$
  an der Stelle $0$ stetig ist.
teile:
  - typ: zahl
    label: '$b$'
    loesung: "5"
  - typ: zahl
    label: '$c$'
    loesung: "4"
hinweise:
  - 'Linksseitiger Grenzwert: $\dfrac{\sin 5x}{x} = 5\cdot\dfrac{\sin 5x}{5x}$.'
  - 'Rechtsseitiger Grenzwert: $e^0 + c = 1 + c$.'
loesung: |
  Ansatz: An der Nahtstelle $0$ müssen linker Grenzwert, Funktionswert $b$ und rechter Grenzwert übereinstimmen.
  ---
  Links: $\lim\limits_{x \to 0^-} \dfrac{\sin 5x}{x} = 5\cdot 1 = 5$, nach dem Standardgrenzwert $\frac{\sin u}{u} \to 1$.
  ---
  Rechts: $\lim\limits_{x \to 0^+}(e^x + c) = 1 + c$.
  ---
  Stetigkeit verlangt $5 = b = 1 + c$, also $b = 5$ und $c = 4$.
```

## Zwischenwertsatz, Nullstellensatz und Bisektion

```aufgabe
id: gs-zws-vorwissen
titel: Wie oft halbieren?
niveau: 1
art: check
angabe: |
  Ein Intervall der Länge $1$ wird immer wieder halbiert. Nach wie vielen Halbierungen ist es zum ersten Mal kürzer als $0{,}1$?
  (Vorwissen aus [Kapitel 8, Geometrische Folgen](/lernen/mathe3/folgen-reihen/geometrische-folgen).)
teile:
  - typ: zahl
    loesung: "4"
    fehler:
      - wert: "10"
        meldung: |
          Halbieren ist nicht dasselbe wie Zehnteln. Die Längen sind $\frac12$, $\frac14$, $\frac18$, $\frac{1}{16}$, und schon $\frac{1}{16}$ ist kürzer als $0{,}1$.
      - wert: "3"
        meldung: |
          Nach drei Halbierungen ist die Länge $\frac18 = 0{,}125$. Das ist noch länger als $0{,}1$.
hinweise:
  - 'Nach $n$ Halbierungen ist die Länge $\left(\frac12\right)^n$.'
loesung: |
  Die Längen bilden die geometrische Folge $\frac12;\ \frac14;\ \frac18;\ \frac{1}{16};\ \dots$
  ---
  $\frac18 = 0{,}125 > 0{,}1$, aber $\frac{1}{16} = 0{,}0625 < 0{,}1$. Also nach $4$ Halbierungen.
```

**Worum geht es in dieser Lektion?** Jetzt kommt der Lohn für die genaue Definition: Für stetige Funktionen auf
abgeschlossenen Intervallen gelten starke Sätze. Sie sagen nicht, **wo** etwas passiert, aber **dass** es passiert. Ein
Intervall $[a, b]$ heißt **abgeschlossen**, wenn die Randpunkte $a$ und $b$ dazugehören. Solche Existenzaussagen sind
typisch für die exakte Analysis und beliebt in der mündlichen Prüfung.

### Eine Erfahrung aus dem Alltag

:::beispiel[Irgendwann ist es genau 0 Grad]
Um $6$ Uhr früh zeigt ein Thermometer $-3$ °C, um $14$ Uhr zeigt es $8$ °C. Die Temperatur ändert sich stetig, sie
springt nicht. Dann muss sie zwischen $6$ und $14$ Uhr **jeden** Wert zwischen $-3$ °C und $8$ °C mindestens einmal
angenommen haben, zum Beispiel genau $0$ °C oder genau $5$ °C.

Wann das war, wissen wir nicht. Vielleicht stieg die Temperatur gleichmäßig, vielleicht schwankte sie hin und her. Sicher
ist nur: Es gibt mindestens einen Zeitpunkt mit $0$ °C. Über Werte außerhalb, etwa $10$ °C, sagt die Überlegung nichts.
:::

### Nullstellensatz und Zwischenwertsatz

:::satz[Nullstellensatz von Bolzano]
Es sei $f$ **stetig** auf dem **abgeschlossenen Intervall** $[a, b]$, und $f(a)$ und $f(b)$ haben **verschiedene
Vorzeichen**, also $f(a) \cdot f(b) < 0$. Dann gibt es mindestens eine Stelle $\xi \in (a, b)$ mit $f(\xi) = 0$.
:::

Der griechische Buchstabe $\xi$ heißt „Xi“. Er bezeichnet hier die Stelle, deren Existenz der Satz garantiert. Die
Bedingung $f(a) \cdot f(b) < 0$ ist eine kurze Schreibweise für „ein Wert ist positiv, der andere negativ“, denn nur
dann ist das Produkt negativ.

:::satz[Zwischenwertsatz]
Es sei $f$ stetig auf $[a, b]$. Dann nimmt $f$ **jeden Wert $c$ zwischen $f(a)$ und $f(b)$** an: Es gibt ein
$\xi \in [a, b]$ mit $f(\xi) = c$.
:::

Der Zwischenwertsatz folgt aus dem Nullstellensatz. Man wendet ihn auf $g(x) = f(x) - c$ an. Liegt $c$ echt zwischen
$f(a)$ und $f(b)$, haben $g(a)$ und $g(b)$ verschiedene Vorzeichen. Eine Nullstelle $\xi$ von $g$ erfüllt
$f(\xi) - c = 0$, also $f(\xi) = c$.

:::beispiel[Eine Gleichung dritten Grades hat eine Lösung zwischen 2 und 3]
Hat $x^3 - 2x - 5 = 0$ eine Lösung zwischen $2$ und $3$?

**Schritt 1, Stetigkeit.** $f(x) = x^3 - 2x - 5$ ist ein Polynom, also stetig auf $[2, 3]$.

**Schritt 2, Vorzeichen an den Rändern.** $f(2) = 8 - 4 - 5 = -1 < 0$ und $f(3) = 27 - 6 - 5 = 16 > 0$.

**Schritt 3, Satz anwenden.** Nach dem Nullstellensatz gibt es ein $\xi \in (2, 3)$ mit $f(\xi) = 0$. Die Gleichung hat
also eine Lösung zwischen $2$ und $3$, obwohl wir sie nicht ausgerechnet haben.
:::

:::beweis[Beweisidee zum Nullstellensatz: Intervallhalbierung]
Sei etwa $f(a) < 0 < f(b)$. Wir halbieren das Intervall: $m = \frac{a + b}{2}$. Ist $f(m) = 0$, sind wir fertig. Ist
$f(m) < 0$, machen wir mit $[m, b]$ weiter, sonst mit $[a, m]$. In jedem Fall hat das neue Intervall wieder links einen
negativen und rechts einen positiven Funktionswert, und es ist halb so lang.

So entstehen Intervalle $[a_n, b_n]$ mit $f(a_n) < 0 < f(b_n)$ und der Länge $\frac{b - a}{2^n}$. Die linken Ränder
$a_n$ wachsen monoton und sind durch $b$ beschränkt. Nach dem Monotoniekriterium aus
[11.11 Monotoniekriterium und Vollständigkeit von ℝ](/lernen/mathe3/grenzwerte-folgen/monotoniekriterium-und-vollstaendigkeit-von), also wegen der
**Vollständigkeit von $\R$**, konvergieren sie gegen eine Zahl $\xi$. Weil die Länge gegen $0$ geht, konvergieren auch
die rechten Ränder gegen $\xi$.

Weil $f$ stetig ist, gilt $f(a_n) \to f(\xi)$ und $f(b_n) \to f(\xi)$. Aus $f(a_n) < 0$ folgt $f(\xi) \le 0$, aus
$f(b_n) > 0$ folgt $f(\xi) \ge 0$. Also ist $f(\xi) = 0$.
:::

:::intuition
Ein Bergsteiger startet um $6$ Uhr im Tal und ist um $18$ Uhr am Gipfel. Am nächsten Tag geht er um $6$ Uhr denselben
Weg hinunter und ist um $18$ Uhr im Tal. Gibt es eine Uhrzeit, zu der er an beiden Tagen an derselben Stelle war? Ja:
Ist $h_1(t)$ die Höhe am ersten Tag und $h_2(t)$ die Höhe am zweiten, dann ist $d = h_1 - h_2$ stetig, am Morgen
negativ und am Abend positiv. Der Nullstellensatz liefert einen Zeitpunkt mit $d(t) = 0$. Welcher, verrät er nicht.
:::

```aufgabe
id: gs-zws-check
titel: Ein Zwischenwert
niveau: 1
art: check
angabe: |
  $f$ ist stetig auf $[0, 2]$ mit $f(0) = 1$ und $f(2) = -3$. Nimmt $f$ sicher den Wert $-1$ an?
teile:
  - typ: auswahl
    optionen:
      - 'Ja, denn $-1$ liegt zwischen $-3$ und $1$.'
      - 'Nein, man weiß nur etwas über die Nullstelle.'
      - 'Nur, wenn $f$ monoton fallend ist.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Der Zwischenwertsatz gilt für **jeden** Wert zwischen $f(a)$ und $f(b)$, nicht nur für $0$.
      - wert: 2
        meldung: |
          Monotonie ist keine Voraussetzung. Der Graph darf auf und ab gehen, stetig reicht.
hinweise:
  - 'Liegt $-1$ zwischen $f(0)$ und $f(2)$?'
loesung: |
  $f$ ist stetig auf dem abgeschlossenen Intervall $[0, 2]$, und $-1$ liegt zwischen $f(2) = -3$ und $f(0) = 1$.
  ---
  Nach dem Zwischenwertsatz gibt es also ein $\xi \in [0, 2]$ mit $f(\xi) = -1$.
```

:::achtung[Den Satz ohne Stetigkeit anwenden]
Falsch: „Für $f = \operatorname{sgn}$ auf $[-1, 1]$, ergänzt um den festgelegten Wert $f(0) = 1$, ist $f(-1) = -1 < 0 < 1 = f(1)$. Nach dem
Nullstellensatz hat $f$ eine Nullstelle.“

Richtig: Diese Funktion nimmt nur die Werte $-1$ und $1$ an und hat **keine** Nullstelle. Der Satz ist nicht anwendbar,
weil $f$ bei $0$ springt. Die Voraussetzung „stetig auf dem ganzen Intervall“ ist unverzichtbar.
:::

:::achtung[Den Satz über eine Lücke hinweg anwenden]
Falsch: „$f(x) = \frac1x$ ist stetig, $f(-1) = -1 < 0$ und $f(1) = 1 > 0$. Also hat $\frac1x$ eine Nullstelle in $(-1, 1)$.“

Richtig: $\frac1x$ hat überhaupt keine Nullstelle. Der Satz verlangt Stetigkeit auf dem **ganzen** Intervall $[-1, 1]$,
und die Stelle $0$ liegt darin, gehört aber nicht zum Definitionsbereich. Die Funktion „springt“ über die Lücke.
:::

:::achtung[Aus gleichen Vorzeichen auf „keine Nullstelle“ schließen]
Falsch: „$f(x) = x^2 - 3x + 2$ hat $f(0) = 2 > 0$ und $f(3) = 2 > 0$. Also hat $f$ in $[0, 3]$ keine Nullstelle.“

Richtig: $f(x) = (x - 1)(x - 2)$ hat die Nullstellen $1$ und $2$. Der Nullstellensatz ist nur eine Garantie in eine
Richtung: Verschiedene Vorzeichen erzwingen eine Nullstelle. Gleiche Vorzeichen schließen Nullstellen **nicht** aus. Über
die **Anzahl** sagt der Satz ebenfalls nichts.
:::

### Das Bisektionsverfahren

Die Beweisidee ist zugleich ein **Algorithmus**. Für dich als künftige Informatikerin oder künftigen Informatiker ist das
die binäre Suche, angewendet auf eine stetige Funktion.

:::beispiel[Bisektion für x³ + 2x − 2]
$f(x) = x^3 + 2x - 2$ ist als Polynom stetig. Es gilt $f(0) = -2 < 0$ und $f(1) = 1 > 0$. Also liegt eine Nullstelle in
$[0, 1]$. In jedem Schritt berechnen wir den Mittelpunkt $m$ und behalten die Hälfte mit Vorzeichenwechsel.

|Schritt|$a$|$b$|$m$|$f(m)$|neues Intervall|
|---|---|---|---|---|---|
|1|$0$|$1$|$0{,}5$|$-0{,}875$|$[0{,}5;\ 1]$|
|2|$0{,}5$|$1$|$0{,}75$|$-0{,}078\ldots$|$[0{,}75;\ 1]$|
|3|$0{,}75$|$1$|$0{,}875$|$0{,}419\ldots$|$[0{,}75;\ 0{,}875]$|
|4|$0{,}75$|$0{,}875$|$0{,}8125$|$0{,}161\ldots$|$[0{,}75;\ 0{,}8125]$|
|5|$0{,}75$|$0{,}8125$|$0{,}78125$|$0{,}039\ldots$|$[0{,}75;\ 0{,}78125]$|

Ein Beispiel für die Rechnung in Schritt 2: $f(0{,}75) = 0{,}421875 + 1{,}5 - 2 = -0{,}078125$. Das ist negativ, also
liegt die Nullstelle rechts von $0{,}75$.

Nach fünf Schritten ist die Nullstelle auf ein Intervall der Länge $\frac{1}{32} = 0{,}03125$ eingeschlossen. Sie
liegt bei etwa $0{,}7709$. Weil $f'(x) = 3x^2 + 2 > 0$ ist, wächst $f$ streng monoton, und es gibt **genau eine**
Nullstelle.
:::

```plot
x: [-0.2, 1.2]
y: [-2.3, 1.5]
graphen:
  - { f: "x^3 + 2*x - 2", label: "f(x) = x³ + 2x − 2", farbe: 0 }
punkte:
  - { x: 0, y: -2, label: "f(0) = −2" }
  - { x: 1, y: 1, label: "f(1) = 1" }
  - { x: 0.5, y: -0.875, label: "m₁", farbe: 1 }
  - { x: 0.75, y: -0.078125, label: "m₂", farbe: 1 }
  - { x: 0.875, y: 0.419921875, label: "m₃", farbe: 1 }
beschriftung: Bisektion für x³ + 2x − 2 auf dem Intervall von 0 bis 1. Die Mittelpunkte m₁, m₂ und m₃ kreisen die Nullstelle bei etwa 0,77 immer enger ein.
```

:::merke[Bisektionsverfahren]
Gegeben ist $f$ stetig auf $[a, b]$ mit $f(a) \cdot f(b) < 0$.

1. Den Mittelpunkt $m = \frac{a + b}{2}$ berechnen und $f(m)$ bestimmen.
2. Hat $f(m)$ dasselbe Vorzeichen wie $f(a)$, ersetzt man $a$ durch $m$. Sonst ersetzt man $b$ durch $m$. Ist $f(m) = 0$, ist man fertig.
3. Wiederholen, bis das Intervall kurz genug ist.

Nach $n$ Schritten hat das Intervall die Länge $\frac{b - a}{2^n}$. Für eine Genauigkeit $\varepsilon$ braucht man das
kleinste $n$ mit $\frac{b - a}{2^n} \le \varepsilon$, also $n \ge \log_2 \frac{b - a}{\varepsilon}$.
:::

Warum jedes Polynom mit ungeradem Grad eine reelle Nullstelle hat, begründest du in der Übung „Ungerader Grad, gerader
Grad“ am Ende dieser Lektion. Die Idee: Für sehr große und sehr kleine $x$ haben die Funktionswerte verschiedene
Vorzeichen.

:::pruefung[So formulierst du den Nullstellensatz in einer Lösung]
Teilaufgaben wie „Zeigen Sie, dass die Gleichung eine Lösung in $[0, 1]$ hat“ bringen schnelle Punkte. Volle Punkte gibt
es nur, wenn **beide** Voraussetzungen dastehen. So klingt eine vollständige Antwort: „$f$ ist als Polynom stetig auf
$[0, 1]$. Es gilt $f(0) = -2 < 0$ und $f(1) = 1 > 0$. Nach dem Nullstellensatz gibt es ein $\xi \in (0, 1)$ mit
$f(\xi) = 0$.“ Wer die Stetigkeit nicht erwähnt, verliert Punkte, auch wenn die Rechnung stimmt.
:::

```reflexion
frage: Der Nullstellensatz garantiert eine Nullstelle, sagt aber nicht, wo sie liegt. Wozu ist so eine Aussage trotzdem nützlich?
antwort: |
  Erstens weiß man, dass sich die Suche lohnt: Ein Verfahren wie die Bisektion findet sicher etwas. Zweitens liefert der
  Satz zusammen mit der Bisektion beliebig genaue Einschlüsse, Schritt für Schritt ein Bit Genauigkeit mehr. Drittens
  braucht man ihn in Beweisen, etwa für „jedes Polynom ungeraden Grades hat eine reelle Nullstelle“. Viele Gleichungen
  wie $\cos x = x$ lassen sich gar nicht algebraisch lösen. Dort ist eine Existenzaussage mit Einschluss das Beste, was
  man bekommen kann.
```

```aufgabe
id: gs-nullstelle-intervall
titel: Nullstelle einschließen
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Zeige, dass $f(x) = x^3 + x - 3$ eine Nullstelle hat, und gib die ganze Zahl $k$ an, für die die Nullstelle im
  Intervall $[k, k + 1]$ liegt.
teile:
  - typ: zahl
    label: '$k$'
    loesung: "1"
    fehler:
      - wert: "0"
        meldung: |
          $f(0) = -3$ und $f(1) = -1$ sind beide negativ. Zwischen $0$ und $1$ gibt es keinen Vorzeichenwechsel.
      - wert: "2"
        meldung: |
          Das Intervall $[2, 3]$ hat $f(2) = 7$ und $f(3) = 27$, beide positiv. Der Vorzeichenwechsel liegt ein Intervall weiter links.
hinweise:
  - 'Berechne $f(0)$, $f(1)$, $f(2)$ und suche einen Vorzeichenwechsel.'
loesung: |
  Ansatz: Wir suchen zwei benachbarte ganze Zahlen mit Funktionswerten verschiedenen Vorzeichens.
  ---
  $f(0) = -3$, $f(1) = 1 + 1 - 3 = -1$, $f(2) = 8 + 2 - 3 = 7$.
  ---
  $f$ ist als Polynom stetig, und $f(1) < 0 < f(2)$. Nach dem Nullstellensatz liegt eine Nullstelle in $(1, 2)$, also $k = 1$. Wegen $f'(x) = 3x^2 + 1 > 0$ ist es die einzige.
```

```aufgabe
id: gs-bisektion-schritte
titel: Wie viele Schritte?
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Eine Nullstelle liegt im Intervall $[2, 3]$. Wie viele Bisektionsschritte braucht man mindestens, damit das Intervall
  höchstens $0{,}001$ lang ist?
teile:
  - typ: zahl
    loesung: "10"
    fehler:
      - wert: "9"
        meldung: |
          $2^9 = 512$. Nach $9$ Schritten ist die Länge $\frac{1}{512} \approx 0{,}00195$, also noch zu lang.
      - wert: "1000"
        meldung: |
          Jeder Schritt halbiert die Länge. Man braucht nicht $1000$ Schritte, sondern so viele, bis $2^n \ge 1000$ ist.
hinweise:
  - 'Nach $n$ Schritten ist die Länge $\tfrac{1}{2^n}$. Gesucht ist das kleinste $n$ mit $2^n \ge 1000$.'
loesung: |
  Ansatz: Jeder Schritt halbiert die Länge, nach $n$ Schritten ist sie $\tfrac{3 - 2}{2^n} = \tfrac{1}{2^n}$.
  ---
  Bedingung: $\tfrac{1}{2^n} \le 0{,}001$, also $2^n \ge 1000$.
  ---
  $2^9 = 512 < 1000 \le 1024 = 2^{10}$. Also $n = 10$. Genauer: $\log_2 1000 \approx 9{,}97$, aufgerundet $10$.
```

```aufgabe
id: gs-bisektion
titel: Drei Schritte Bisektion
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Bestimme $\sqrt3$ als Nullstelle von $f(x) = x^2 - 3$ mit dem Bisektionsverfahren, Startintervall $[1, 2]$.
  Gib das Intervall nach **drei** Halbierungsschritten an.
teile:
  - typ: vektor
    label: 'Intervall $[a_3, b_3]$'
    namen: ['a₃', 'b₃']
    loesung: ["1.625", "1.75"]
    fehler:
      - wert: ["1.5", "1.75"]
        meldung: |
          Das ist das Intervall nach **zwei** Schritten. Halbiere noch einmal: $m = 1{,}625$.
      - wert: ["1.75", "2"]
        meldung: |
          Im zweiten Schritt ist $f(1{,}75) = 0{,}0625 > 0$. Dann wird der **rechte** Rand ersetzt, nicht der linke.
hinweise:
  - '$f(1) = -2 < 0$, $f(2) = 1 > 0$. Erster Mittelpunkt $1{,}5$.'
  - '$f(1{,}5) = -0{,}75$, $f(1{,}75) = 0{,}0625$.'
loesung: |
  Ansatz: In jedem Schritt behalten wir die Hälfte, an deren Rändern $f$ verschiedene Vorzeichen hat.
  ---
  Schritt 1: $m = 1{,}5$, $f(1{,}5) = 2{,}25 - 3 = -0{,}75 < 0$, also weiter mit $[1{,}5;\ 2]$.
  ---
  Schritt 2: $m = 1{,}75$, $f(1{,}75) = 3{,}0625 - 3 = 0{,}0625 > 0$, also $[1{,}5;\ 1{,}75]$.
  ---
  Schritt 3: $m = 1{,}625$, $f(1{,}625) = 2{,}640625 - 3 = -0{,}359375 < 0$, also $[1{,}625;\ 1{,}75]$.
  ---
  Kontrolle: $\sqrt3 \approx 1{,}732$ liegt im Intervall ✓. Die Länge ist $\tfrac{1}{2^3} = 0{,}125$.
```

```aufgabe
id: gs-bisektion-gefuehrt
titel: Bisektion mit der e-Funktion
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Die Gleichung $e^x = 3 - x$ hat eine Lösung im Intervall $[0, 1]$. Schließe sie mit drei Bisektionsschritten für
  $f(x) = e^x + x - 3$ ein. Gib das Intervall nach drei Schritten an. Taschenrechner auf vier Nachkommastellen genügt.
teile:
  - typ: vektor
    label: 'Intervall nach drei Schritten'
    namen: ['a₃', 'b₃']
    loesung: ["0.75", "0.875"]
    fehler:
      - wert: ["0.75", "1"]
        meldung: |
          Das ist das Intervall nach zwei Schritten. Berechne noch $f(0{,}875) \approx 0{,}2739$.
      - wert: ["0.5", "0.75"]
        meldung: |
          $f(0{,}75) \approx -0{,}133$ ist negativ, genau wie $f(0{,}5)$. Der Vorzeichenwechsel liegt also rechts von $0{,}75$.
hinweise:
  - '$f(0) = -2$ und $f(1) = e - 2 \approx 0{,}718$.'
  - 'Behalte in jedem Schritt die Hälfte, an deren Rändern $f$ verschiedene Vorzeichen hat.'
gefuehrt:
  - text: Berechne $f(0{,}5) = e^{0{,}5} + 0{,}5 - 3$ auf drei Nachkommastellen.
    teil:
      typ: zahl
      loesung: "exp(0.5) + 0.5 - 3"
      toleranz: 0.001
    erklaerung: '$e^{0{,}5} \approx 1{,}6487$, also $f(0{,}5) \approx -0{,}851 < 0$. Weiter mit $[0{,}5;\ 1]$.'
  - text: Berechne $f(0{,}75)$ auf drei Nachkommastellen.
    teil:
      typ: zahl
      loesung: "exp(0.75) + 0.75 - 3"
      toleranz: 0.001
    erklaerung: '$e^{0{,}75} \approx 2{,}1170$, also $f(0{,}75) \approx -0{,}133 < 0$. Weiter mit $[0{,}75;\ 1]$.'
  - text: Berechne $f(0{,}875)$ auf drei Nachkommastellen.
    teil:
      typ: zahl
      loesung: "exp(0.875) + 0.875 - 3"
      toleranz: 0.001
    erklaerung: '$e^{0{,}875} \approx 2{,}3989$, also $f(0{,}875) \approx 0{,}274 > 0$. Der Vorzeichenwechsel liegt in $[0{,}75;\ 0{,}875]$.'
loesung: |
  Ansatz: $f$ ist als Summe stetiger Funktionen stetig, $f(0) = -2 < 0 < f(1) \approx 0{,}718$. Wir halbieren dreimal.
  ---
  Schritt 1: $f(0{,}5) \approx -0{,}851 < 0$, weiter mit $[0{,}5;\ 1]$.
  ---
  Schritt 2: $f(0{,}75) \approx -0{,}133 < 0$, weiter mit $[0{,}75;\ 1]$.
  ---
  Schritt 3: $f(0{,}875) \approx 0{,}274 > 0$, also $[0{,}75;\ 0{,}875]$. Die Lösung liegt bei etwa $0{,}79$, die Intervalllänge ist $0{,}125$.
```

```aufgabe
id: gs-zws-temperatur
titel: Welche Temperaturen sind garantiert?
niveau: 2
lernziel: 7
kompetenz: modellieren
angabe: |
  Um $18$ Uhr misst eine Wetterstation $4$ °C, am nächsten Morgen um $6$ Uhr $-2$ °C. Die Temperatur ändert sich stetig.
  Welche Aussagen folgen aus dem Zwischenwertsatz? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - 'Irgendwann in der Nacht war es genau $0$ °C.'
      - 'Irgendwann in der Nacht war es genau $3$ °C.'
      - 'Irgendwann in der Nacht war es genau $5$ °C.'
      - 'Die Temperatur ist die ganze Nacht gesunken.'
      - 'Es war genau einmal $0$ °C.'
    richtig: [0, 1]
    fehler:
      - wert: [0, 1, 2]
        meldung: |
          $5$ °C liegt nicht zwischen $-2$ °C und $4$ °C. Der Zwischenwertsatz garantiert nur Werte zwischen den beiden Messwerten.
      - wert: [0, 1, 3]
        meldung: |
          Der Satz sagt nichts über den Verlauf. Die Temperatur kann zwischendurch auch gestiegen sein.
      - wert: [0, 1, 4]
        meldung: |
          Der Satz garantiert **mindestens** einen Zeitpunkt. Es könnte mehrere geben, wenn die Temperatur um $0$ °C pendelt.
hinweise:
  - 'Der Zwischenwertsatz garantiert jeden Wert zwischen $f(a)$ und $f(b)$, aber nicht mehr.'
  - 'Sagt der Satz etwas über Monotonie oder über die Anzahl?'
loesung: |
  Ansatz: Die Temperatur $T(t)$ ist stetig auf dem Zeitintervall von $18$ bis $6$ Uhr, mit Randwerten $4$ °C und $-2$ °C.
  ---
  Garantiert ist jeder Wert zwischen $-2$ und $4$, also $0$ °C und $3$ °C.
  ---
  Nicht garantiert sind $5$ °C (außerhalb), ein ständiges Sinken (der Satz sagt nichts über den Verlauf) und „genau einmal“ (der Satz sagt nichts über die Anzahl).
```

```aufgabe
id: gs-zws-voraussetzung
titel: Was folgt, was nicht?
niveau: 2
lernziel: 7
kompetenz: begruenden
angabe: |
  Die Funktion $f$ ist stetig auf $[1, 4]$ mit $f(1) = 2$ und $f(4) = -1$. Welche Aussage folgt **sicher**?
teile:
  - typ: auswahl
    optionen:
      - '$f$ hat im Intervall $(1, 4)$ mindestens eine Nullstelle.'
      - '$f$ hat im Intervall $(1, 4)$ genau eine Nullstelle.'
      - '$f$ nimmt irgendwo in $[1, 4]$ den Wert $3$ an.'
      - '$f$ ist auf $[1, 4]$ monoton fallend.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Der Nullstellensatz garantiert mindestens eine Nullstelle. Es können auch drei sein, wenn der Graph die Achse mehrmals kreuzt.
      - wert: 2
        meldung: |
          $3$ liegt nicht zwischen $f(1) = 2$ und $f(4) = -1$. Darüber sagt der Zwischenwertsatz nichts. Es kann sein, muss aber nicht.
      - wert: 3
        meldung: |
          Aus zwei Randwerten folgt kein Verlauf. Der Graph kann zwischendurch steigen und wieder fallen.
hinweise:
  - 'Prüfe die Voraussetzungen des Nullstellensatzes: stetig, abgeschlossenes Intervall, verschiedene Vorzeichen.'
  - 'Achte auf die Wörter „mindestens“ und „genau“.'
loesung: |
  Ansatz: $f$ ist stetig auf $[1, 4]$, $f(1) = 2 > 0$ und $f(4) = -1 < 0$. Damit sind alle Voraussetzungen des Nullstellensatzes erfüllt.
  ---
  Er liefert **mindestens** eine Nullstelle in $(1, 4)$. Über die Anzahl, über Werte außerhalb von $[-1, 2]$ und über Monotonie sagt er nichts.
  ---
  Sicher folgt also nur die erste Aussage.
```

```aufgabe
id: gs-zws-kosinus
titel: Eine Gleichung ohne Lösungsformel
niveau: 3
lernziel: 7
kompetenz: begruenden
angabe: |
  Die Gleichung $\cos x = x$ lässt sich nicht algebraisch lösen. Zeige mit dem Nullstellensatz, dass sie im Intervall
  $\big[0, \tfrac{\pi}{2}\big]$ eine Lösung hat. Gib anschließend an, in welcher Hälfte dieses Intervalls sie liegt.
teile:
  - typ: text
    label: 'Nachweis'
    muster: |
      Setze $f(x) = \cos x - x$. Als Differenz stetiger Funktionen ist $f$ stetig auf $[0, \tfrac{\pi}{2}]$.
      $f(0) = 1 > 0$ und $f(\tfrac{\pi}{2}) = 0 - \tfrac{\pi}{2} < 0$. Nach dem Nullstellensatz gibt es
      $\xi \in (0, \tfrac{\pi}{2})$ mit $f(\xi) = 0$, also $\cos\xi = \xi$.
  - typ: auswahl
    label: 'Lage der Lösung'
    optionen: ['$\big[0, \tfrac{\pi}{4}\big]$', '$\big[\tfrac{\pi}{4}, \tfrac{\pi}{2}\big]$']
    richtig: [0]
hinweise:
  - 'Bring alles auf eine Seite: $f(x) = \cos x - x$.'
  - '$f(\tfrac{\pi}{4}) = \tfrac{\sqrt2}{2} - \tfrac{\pi}{4} \approx 0{,}707 - 0{,}785$. Taschenrechner auf RAD.'
loesung: |
  Ansatz: Eine Gleichung $g(x) = h(x)$ wird zur Nullstellenfrage für $f = g - h$. Dann prüfen wir die Voraussetzungen des Nullstellensatzes.
  ---
  $f(x) = \cos x - x$ ist stetig. $f(0) = 1 > 0$, $f(\tfrac{\pi}{2}) = -\tfrac{\pi}{2} < 0$. Nullstellensatz: Lösung in $(0, \tfrac{\pi}{2})$.
  ---
  Ein Bisektionsschritt: $f(\tfrac{\pi}{4}) \approx 0{,}7071 - 0{,}7854 = -0{,}0783 < 0$. Der Vorzeichenwechsel liegt zwischen $0$ und $\tfrac{\pi}{4}$, also liegt die Lösung in $[0, \tfrac{\pi}{4}]$.
  ---
  Antwort: Die Gleichung $\cos x = x$ hat eine Lösung zwischen $0$ und $\frac{\pi}{4} \approx 0{,}785$. Tatsächlich ist $\xi \approx 0{,}7391$.
```

```aufgabe
id: gs-ungerader-grad
titel: Ungerader Grad, gerader Grad
niveau: 3
lernziel: 7
kompetenz: begruenden
angabe: |
  Begründe, warum jedes Polynom vom Grad $3$ mit reellen Koeffizienten mindestens eine reelle Nullstelle hat.
  Warum funktioniert dieselbe Argumentation bei Grad $2$ nicht?
teile:
  - typ: text
    muster: |
      Für $p(x) = ax^3 + bx^2 + cx + d$ mit $a > 0$ (sonst $-p$ betrachten) gilt
      $p(x) = x^3\big(a + \tfrac bx + \tfrac{c}{x^2} + \tfrac{d}{x^3}\big)$, die Klammer geht gegen $a > 0$.
      Also $p(x) \to +\infty$ für $x \to \infty$ und $p(x) \to -\infty$ für $x \to -\infty$. Es gibt daher $M$ mit
      $p(-M) < 0 < p(M)$. $p$ ist stetig, nach dem Nullstellensatz liegt eine Nullstelle in $(-M, M)$.
      Bei Grad $2$ hat $x^2$ für $x \to +\infty$ und $x \to -\infty$ dasselbe Vorzeichen, es gibt keinen
      garantierten Vorzeichenwechsel. Beispiel: $x^2 + 1$ hat keine Nullstelle.
hinweise:
  - 'Wie verhält sich $x^3$ für $x \to +\infty$ und $x \to -\infty$?'
  - 'Heb $x^3$ heraus. Wogegen strebt der Rest in der Klammer für große $|x|$?'
loesung: |
  Ansatz: Wir suchen zwei Stellen mit verschiedenen Vorzeichen, damit der Nullstellensatz greift. Für große $|x|$ bestimmt der Leitterm $ax^3$ das Vorzeichen.
  ---
  Bei ungeradem Grad hat $p$ für $x \to +\infty$ und $x \to -\infty$ verschiedene Vorzeichen. Der Nullstellensatz auf $[-M, M]$ liefert eine Nullstelle.
  ---
  Bei geradem Grad haben beide Enden dasselbe Vorzeichen, es fehlt der Vorzeichenwechsel. Gegenbeispiel $x^2 + 1 > 0$.
```

## Satz vom Maximum und Minimum

```aufgabe
id: gs-maxmin-vorwissen
titel: Wo ist die Ableitung null?
niveau: 1
art: check
angabe: |
  An welcher Stelle hat $f(x) = x^2 - 4x$ eine waagrechte Tangente, also $f'(x) = 0$?
  (Vorwissen aus [Kapitel 9, Monotonie und Extremstellen](/lernen/mathe3/differentialrechnung/monotonie-und-extremstellen).)
teile:
  - typ: zahl
    label: '$x =$'
    loesung: "2"
    fehler:
      - wert: "4"
        meldung: |
          $4$ ist eine Nullstelle von $f$ selbst, denn $f(4) = 16 - 16 = 0$. Gesucht ist die Nullstelle der Ableitung $f'(x) = 2x - 4$.
      - wert: "-4"
        meldung: |
          Die Ableitung ist $f'(x) = 2x - 4$. Setze sie gleich $0$: $2x = 4$.
hinweise:
  - 'Leite ab: $f''(x) = 2x - 4$. Setze das gleich $0$.'
loesung: |
  $f'(x) = 2x - 4$.
  ---
  $2x - 4 = 0$ ergibt $x = 2$. Dort liegt der Scheitel der Parabel mit $f(2) = -4$.
```

**Worum geht es in dieser Lektion?** Eine stetige Funktion auf einem abgeschlossenen Intervall erreicht immer einen
größten und einen kleinsten Wert. Das klingt selbstverständlich, ist es aber nicht: Lässt man eine Voraussetzung weg,
kann es schiefgehen. Der Satz ist die Grundlage dafür, dass Extremwertaufgaben überhaupt eine Lösung **haben**.

:::satz[Satz vom Maximum und Minimum (Weierstraß)]
Ist $f$ **stetig** auf dem **abgeschlossenen und beschränkten Intervall** $[a, b]$, dann ist $f$ dort beschränkt und
**nimmt** ein Maximum und ein Minimum **an**. Es gibt also Stellen $x_{\min}$ und $x_{\max}$ in $[a, b]$ mit
$$f(x_{\min}) \le f(x) \le f(x_{\max}) \qquad\text{für alle } x \in [a, b].$$
:::

Dabei ist $f(x_{\max})$ der größte Funktionswert, das **Maximum**, und $f(x_{\min})$ der kleinste, das **Minimum**.
**Beschränkt** heißt: Das Intervall reicht nicht ins Unendliche. „Nimmt an“ heißt: Der größte Wert wird an einer
Stelle **tatsächlich erreicht**, nicht nur beliebig genau angenähert. Den Beweis musst du nicht können. Er braucht wieder
die Vollständigkeit von $\R$.

### Den Satz benutzen

Der Satz sagt nur, **dass** es Maximum und Minimum gibt. Gefunden werden sie mit der Differentialrechnung: Ein
Extremum liegt entweder an einer Stelle mit $f'(x) = 0$ **oder an einem Randpunkt**.

:::beispiel[Maximum und Minimum auf einem Intervall]
Gesucht sind Maximum und Minimum von $f(x) = x^3 - 3x$ auf $[0, 2]$.

**Schritt 1, Existenz.** $f$ ist ein Polynom, also stetig, und $[0, 2]$ ist abgeschlossen und beschränkt. Nach dem Satz
gibt es Maximum und Minimum.

**Schritt 2, Kandidaten im Inneren.** $f'(x) = 3x^2 - 3 = 0$ gilt für $x = 1$ und $x = -1$. Nur $x = 1$ liegt im Intervall.

**Schritt 3, Kandidaten am Rand.** Die Randpunkte $0$ und $2$.

**Schritt 4, alle Kandidaten vergleichen.** $f(0) = 0$, $f(1) = 1 - 3 = -2$, $f(2) = 8 - 6 = 2$.

**Ergebnis:** Das Maximum ist $2$ an der Stelle $2$ (am Rand), das Minimum ist $-2$ an der Stelle $1$.
:::

:::beispiel[Das größte Rechteck mit 20 m Umfang]
Ein rechteckiges Beet soll einen Rand von $20$ m Länge haben. Ist eine Seite $x$ m lang, ist die andere $10 - x$ m lang,
und die Fläche ist $A(x) = x(10 - x)$ m². Sinnvoll ist $0 \le x \le 10$.

**Existenz:** $A$ ist stetig auf dem abgeschlossenen Intervall $[0, 10]$, also gibt es eine größte Fläche.

**Suche:** $A'(x) = 10 - 2x = 0$ für $x = 5$. Kandidaten: $A(0) = 0$, $A(5) = 25$, $A(10) = 0$.

**Antwort:** Die größte Fläche ist $25$ m², beim Quadrat mit $5$ m Seitenlänge. Die Randwerte liefern hier die kleinste
Fläche $0$ m², also ein „Beet“ ohne Breite.
:::

:::merke[Extremwerte auf [a, b] bestimmen]
1. Prüfen, ob $f$ auf $[a, b]$ stetig ist. Dann existieren Maximum und Minimum.
2. Alle Stellen im Inneren mit $f'(x) = 0$ bestimmen, und Stellen, an denen $f$ nicht differenzierbar ist.
3. Die Randpunkte $a$ und $b$ dazunehmen.
4. Alle Kandidaten in $f$ einsetzen. Der größte Wert ist das Maximum, der kleinste das Minimum.
:::

### Warum keine Voraussetzung fehlen darf

```aufgabe
id: gs-maxmin-check
titel: Offenes Intervall
niveau: 1
art: check
angabe: |
  Hat $f(x) = x$ auf dem **offenen** Intervall $(0, 1)$ ein Maximum?
teile:
  - typ: auswahl
    optionen:
      - 'Nein, die Werte kommen $1$ beliebig nahe, erreichen $1$ aber nie.'
      - 'Ja, das Maximum ist $1$.'
      - 'Ja, das Maximum ist $0{,}999$.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Die Stelle $1$ gehört nicht zum offenen Intervall. Also gibt es kein $x$ im Intervall mit $f(x) = 1$.
      - wert: 2
        meldung: |
          $0{,}9999$ liegt auch im Intervall und ist größer. Zu jedem Wert findet man einen noch größeren.
hinweise:
  - 'Ein Maximum muss an einer Stelle **im** Intervall angenommen werden.'
loesung: |
  Zu jedem $x$ in $(0, 1)$ gibt es ein größeres, etwa $\frac{x + 1}{2}$, das ebenfalls im Intervall liegt.
  ---
  Also gibt es keinen größten Wert. Die Zahl $1$ ist nur eine obere Schranke, aber kein Funktionswert.
```

Die Tabelle zeigt zu jeder Voraussetzung ein Gegenbeispiel, bei dem sie fehlt.

|fehlende Voraussetzung|Gegenbeispiel|was schiefgeht|
|---|---|---|
|abgeschlossen|$f(x) = x$ auf $(0, 1)$|Die Werte kommen $1$ beliebig nahe, $1$ wird nie erreicht. |
|abgeschlossen|$f(x) = \frac1x$ auf $(0, 1]$|Die Werte wachsen über jede Schranke. |
|beschränkt|$f(x) = x$ auf $[0, \infty)$|Die Werte wachsen über jede Schranke. |
|stetig|$f(x) = x$ für $x < 1$ und $f(1) = 0$ auf $[0, 1]$|Die Werte kommen $1$ nahe, aber an der Stelle $1$ springt $f$ auf $0$. |

Zusammen mit dem Zwischenwertsatz folgt: **Das Bild eines abgeschlossenen Intervalls unter einer stetigen Funktion ist
wieder ein abgeschlossenes Intervall**, nämlich $f([a, b]) = [\min f, \max f]$. Jeder Wert zwischen Minimum und Maximum
wird angenommen.

:::beispiel[Das Bild eines Intervalls]
Welche Werte nimmt $f(x) = x^2$ auf $[-1, 2]$ an?

**Minimum und Maximum:** $f'(x) = 2x = 0$ bei $x = 0$. Kandidaten: $f(-1) = 1$, $f(0) = 0$, $f(2) = 4$. Minimum $0$,
Maximum $4$.

**Bild:** Nach dem Zwischenwertsatz wird jeder Wert dazwischen angenommen. Also $f([-1, 2]) = [0, 4]$. Achtung: Die
Randwerte $f(-1) = 1$ und $f(2) = 4$ allein hätten das falsche Intervall $[1, 4]$ ergeben.
:::

:::achtung[Den Rand vergessen]
Falsch: „$f(x) = x^2$ auf $[-1, 3]$: $f'(x) = 2x = 0$ nur bei $x = 0$. Dort liegt das einzige Extremum, ein Minimum.
Also hat $f$ auf $[-1, 3]$ kein Maximum.“

Richtig: Nach dem Satz **muss** es ein Maximum geben. Es liegt am Rand: $f(-1) = 1$ und $f(3) = 9$. Das Maximum ist $9$ an
der Stelle $3$. Die Bedingung $f'(x) = 0$ findet nur Extremstellen im **Inneren**. Die Randpunkte muss man immer
zusätzlich prüfen.
:::

:::achtung[Den Randwert eines offenen Intervalls als Maximum nehmen]
Falsch: „$g(x) = x^2$ auf $(0, 2)$ hat das Maximum $g(2) = 4$.“

Richtig: Die Stelle $2$ gehört nicht zum offenen Intervall $(0, 2)$. Die Werte kommen $4$ beliebig nahe, erreichen $4$
aber nie. Also hat $g$ auf $(0, 2)$ **kein** Maximum. Der Satz garantiert Maximum und Minimum nur auf
**abgeschlossenen** Intervallen.
:::

```reflexion
frage: Warum muss man bei Extremwertaufgaben auf einem Intervall [a, b] immer auch die Randpunkte prüfen? Erkläre es mit dem Satz vom Maximum und Minimum.
antwort: |
  Der Satz garantiert, dass ein Maximum existiert, aber nicht, wo es liegt. Die Bedingung $f'(x) = 0$ findet nur Stellen
  im Inneren, an denen der Graph waagrecht verläuft. Am Rand kann der Graph aber noch steigen oder fallen und trotzdem
  den größten Wert erreichen, weil es dahinter nicht weitergeht. Bei $x^2$ auf $[-1, 3]$ liegt das Maximum bei $3$, wo
  $f'(3) = 6 \neq 0$ ist. Wer nur $f'(x) = 0$ löst, übersieht es.
```

```aufgabe
id: gs-maxmin-berechnen
titel: Maximum und Minimum auf einem Intervall
niveau: 1
lernziel: 8
kompetenz: rechnen
angabe: |
  Bestimme das Maximum und das Minimum von $f(x) = x^2 - 2x$ auf dem Intervall $[0, 3]$.
teile:
  - typ: zahl
    label: 'Maximum'
    loesung: "3^2 - 2*3"
    anzeige: '3'
    fehler:
      - wert: "0"
        meldung: |
          $f(0) = 0$ ist ein Randwert, aber nicht der größte. Prüfe auch den anderen Rand: $f(3) = 9 - 6$.
      - wert: "-1"
        meldung: |
          $-1$ ist der Wert an der Stelle mit $f'(x) = 0$. Das ist hier das Minimum, nicht das Maximum.
  - typ: zahl
    label: 'Minimum'
    loesung: "1 - 2"
    anzeige: '-1'
    fehler:
      - wert: "0"
        meldung: |
          $0$ ist der Randwert $f(0)$. Im Inneren gibt es einen kleineren Wert, bei $f'(x) = 0$.
hinweise:
  - '$f''(x) = 2x - 2$. Setze gleich $0$ und nimm die Randpunkte $0$ und $3$ dazu.'
loesung: |
  Ansatz: $f$ ist als Polynom stetig auf dem abgeschlossenen Intervall $[0, 3]$. Also gibt es Maximum und Minimum. Kandidaten sind die Stellen mit $f'(x) = 0$ und die Randpunkte.
  ---
  $f'(x) = 2x - 2 = 0$ für $x = 1$. Werte: $f(0) = 0$, $f(1) = -1$, $f(3) = 3$.
  ---
  Maximum $3$ bei $x = 3$ (am Rand), Minimum $-1$ bei $x = 1$.
```

```aufgabe
id: gs-bildintervall
titel: Das Bild eines Intervalls
niveau: 1
lernziel: 8
kompetenz: rechnen
angabe: |
  Welche Werte nimmt $f(x) = x^2 - 4x + 5$ auf dem Intervall $[1, 4]$ an? Gib das Bild $f([1, 4])$ als Intervall
  $[u, o]$ an.
teile:
  - typ: vektor
    label: 'Bild $[u, o]$'
    namen: ['u', 'o']
    loesung: ["1", "5"]
    fehler:
      - wert: ["2", "5"]
        meldung: |
          $2$ und $5$ sind die Randwerte $f(1)$ und $f(4)$. Im Inneren liegt aber der Scheitel bei $x = 2$ mit dem kleineren Wert $f(2) = 1$.
hinweise:
  - '$f''(x) = 2x - 4 = 0$ bei $x = 2$. Berechne $f(1)$, $f(2)$ und $f(4)$.'
loesung: |
  Ansatz: Das Bild ist $[\min f, \max f]$. Wir bestimmen Minimum und Maximum mit den Kandidaten.
  ---
  $f(1) = 1 - 4 + 5 = 2$, $f(2) = 4 - 8 + 5 = 1$, $f(4) = 16 - 16 + 5 = 5$.
  ---
  Minimum $1$, Maximum $5$. Nach dem Zwischenwertsatz wird jeder Wert dazwischen angenommen: $f([1, 4]) = [1, 5]$.
```

```aufgabe
id: gs-maxmin
titel: Wird das Maximum angenommen?
niveau: 2
lernziel: 8
kompetenz: verstehen
angabe: |
  Bei welchen Funktionen garantiert der Satz vom Maximum und Minimum, dass ein Maximum angenommen wird? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$f(x) = x^2 - 3x$ auf $[0, 5]$'
      - '$f(x) = \frac{1}{x}$ auf $(0, 2]$'
      - '$f(x) = e^{-x}\sin x$ auf $[-1, 4]$'
      - '$f(x) = x^3$ auf $[1, \infty)$'
      - '$f(x) = \tan x$ auf $[0, 2]$'
    richtig: [0, 2]
    fehler:
      - wert: [0, 2, 4]
        meldung: |
          $\tan x$ hat bei $\frac{\pi}{2} \approx 1{,}571$ eine Polstelle. Diese Stelle liegt in $[0, 2]$, dort ist $\tan$ nicht definiert und erst recht nicht stetig.
      - wert: [0, 1, 2]
        meldung: |
          $(0, 2]$ ist links offen. Für $x \to 0^+$ wächst $\frac1x$ über alle Grenzen.
hinweise:
  - 'Prüfe zwei Dinge: Ist das Intervall abgeschlossen und beschränkt? Ist $f$ auf dem ganzen Intervall definiert und stetig?'
  - 'Achte bei $\tan x$ auf die Stelle $\frac{\pi}{2}$.'
loesung: |
  Ansatz: Der Satz braucht ein abgeschlossenes, beschränktes Intervall und Stetigkeit auf dem ganzen Intervall.
  ---
  1: Polynom auf $[0, 5]$: garantiert ✓. 2: Intervall nicht abgeschlossen, $f$ unbeschränkt ✗.
  ---
  3: stetig auf $[-1, 4]$ ✓. 4: Intervall unbeschränkt ✗.
  ---
  5: $\tan x$ hat bei $\tfrac{\pi}{2} \approx 1{,}571 \in [0, 2]$ eine Polstelle ✗. Richtig sind also 1 und 3.
```

```aufgabe
id: gs-maxmin-gefuehrt
titel: Ein Maximum am Rand, Schritt für Schritt
niveau: 2
lernziel: 8
kompetenz: rechnen
angabe: |
  Bestimme Maximum und Minimum von $f(x) = x^3 - 12x$ auf $[-1, 3]$.
teile:
  - typ: zahl
    label: 'Maximum'
    loesung: "(-1)^3 - 12*(-1)"
    anzeige: '11'
    fehler:
      - wert: "16"
        meldung: |
          $16 = f(-2)$, aber $-2$ liegt nicht im Intervall $[-1, 3]$. Nur Kandidaten im Intervall zählen.
      - wert: "-9"
        meldung: |
          $-9 = f(3)$ ist ein Randwert, aber nicht der größte. Prüfe auch den linken Rand.
  - typ: zahl
    label: 'Minimum'
    loesung: "8 - 24"
    anzeige: '-16'
    fehler:
      - wert: "-9"
        meldung: |
          Im Inneren gibt es bei $x = 2$ einen kleineren Wert.
hinweise:
  - '$f''(x) = 3x^2 - 12 = 0$ für $x = \pm 2$. Welche dieser Stellen liegt in $[-1, 3]$?'
  - 'Vergleiche $f$ an dieser Stelle und an beiden Randpunkten.'
gefuehrt:
  - text: Für welche positive Zahl $x$ ist $f'(x) = 3x^2 - 12 = 0$?
    teil:
      typ: zahl
      loesung: "2"
    erklaerung: '$3x^2 = 12$, $x^2 = 4$, $x = \pm 2$. Nur $x = 2$ liegt in $[-1, 3]$, die Stelle $-2$ fällt weg.'
  - text: Berechne $f(2)$.
    teil:
      typ: zahl
      loesung: "8 - 24"
    erklaerung: '$f(2) = 8 - 24 = -16$.'
  - text: Berechne die Randwerte. Wie groß ist $f(-1)$?
    teil:
      typ: zahl
      loesung: "-1 + 12"
      fehler:
        - wert: "-13"
          meldung: '$-12 \cdot (-1) = +12$. Also $f(-1) = -1 + 12$.'
    erklaerung: '$f(-1) = -1 + 12 = 11$ und $f(3) = 27 - 36 = -9$.'
  - text: Vergleiche die drei Werte $11$, $-16$ und $-9$.
    erklaerung: 'Maximum $11$ bei $x = -1$ (am Rand), Minimum $-16$ bei $x = 2$.'
loesung: |
  Ansatz: $f$ ist stetig auf $[-1, 3]$. Kandidaten sind die inneren Stellen mit $f'(x) = 0$ und die Randpunkte.
  ---
  $f'(x) = 3x^2 - 12 = 0$ für $x = \pm 2$. Im Intervall liegt nur $x = 2$.
  ---
  $f(-1) = 11$, $f(2) = -16$, $f(3) = -9$.
  ---
  Maximum $11$ bei $x = -1$, Minimum $-16$ bei $x = 2$. Das Maximum liegt am Rand, obwohl $f'(-1) = -9 \neq 0$ ist.
```

```aufgabe
id: gs-zaun-modell
titel: Ein Gehege an einer Mauer
niveau: 2
lernziel: 8
kompetenz: modellieren
angabe: |
  Ein rechteckiges Gehege wird an einer langen Mauer gebaut. Für die drei anderen Seiten stehen $40$ m Zaun zur Verfügung.
  Die beiden Seiten senkrecht zur Mauer sind je $x$ m lang.

  a) Stelle die Fläche $A(x)$ auf und gib an, welche Werte für $x$ sinnvoll sind.

  b) Begründe mit dem Satz vom Maximum, dass es eine größte Fläche gibt, und berechne sie.
teile:
  - typ: zahl
    label: 'größte Fläche in m²'
    loesung: "10*(40 - 2*10)"
    einheit: 'm²'
    anzeige: '200'
    fehler:
      - wert: "100"
        meldung: |
          $100$ m² hätte ein Quadrat mit $10$ m Seite. Hier ist die Seite parallel zur Mauer aber $40 - 2 \cdot 10 = 20$ m lang.
      - wert: "400"
        meldung: |
          Prüfe die Länge der Seite parallel zur Mauer: Von $40$ m Zaun gehen zwei Seiten zu je $x$ m ab.
  - typ: zahl
    label: 'zugehöriges $x$ in m'
    loesung: "10"
    einheit: 'm'
    fehler:
      - wert: "13.33"
        meldung: |
          Das wäre ein Drittel des Zauns für jede Seite. Bei einer Mauer ist das Optimum aber nicht symmetrisch. Leite $A(x) = 40x - 2x^2$ ab.
hinweise:
  - 'Die Seite parallel zur Mauer ist $40 - 2x$ lang. Also $A(x) = x(40 - 2x)$ mit $0 \le x \le 20$.'
  - '$A$ ist stetig auf $[0, 20]$. Vergleiche $A$ an der Stelle mit $A''(x) = 0$ und an den Rändern.'
loesung: |
  Ansatz: Zwei Seiten sind $x$ m lang, die dritte bekommt den Rest des Zauns: $40 - 2x$ m.
  ---
  a) $A(x) = x(40 - 2x) = 40x - 2x^2$ m². Sinnvoll ist $0 \le x \le 20$, sonst wäre eine Seite negativ.
  ---
  b) $A$ ist als Polynom stetig auf dem abgeschlossenen Intervall $[0, 20]$. Nach dem Satz vom Maximum gibt es eine größte Fläche.
  ---
  $A'(x) = 40 - 4x = 0$ für $x = 10$. Werte: $A(0) = 0$, $A(10) = 10 \cdot 20 = 200$, $A(20) = 0$.
  ---
  Antwort: Die größte Fläche ist $200$ m², mit $10$ m senkrecht zur Mauer und $20$ m parallel dazu.
```

```aufgabe
id: gs-maxmin-aussagen
titel: Aussagen über stetige Funktionen
niveau: 2
lernziel: 8
kompetenz: begruenden
angabe: |
  Welche Aussagen sind richtig? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - 'Jede auf $[a, b]$ stetige Funktion ist dort beschränkt.'
      - 'Jede auf $(a, b)$ stetige Funktion ist dort beschränkt.'
      - 'Jede auf $[a, b]$ beschränkte Funktion ist dort stetig.'
      - 'Maximum und Minimum einer stetigen Funktion auf $[a, b]$ können beide an den Randpunkten liegen.'
    richtig: [0, 3]
    fehler:
      - wert: [0, 1, 3]
        meldung: |
          Auf offenen Intervallen geht das schief: $\frac1x$ ist auf $(0, 1)$ stetig, wächst aber über alle Grenzen.
      - wert: [0, 2, 3]
        meldung: |
          Die Umkehrung gilt nicht. Die Vorzeichenfunktion ist auf $[-1, 1]$ beschränkt, springt aber bei $0$.
      - wert: [0]
        meldung: |
          Denk an $f(x) = x$ auf $[0, 1]$: Das Minimum liegt bei $0$, das Maximum bei $1$, beide am Rand.
hinweise:
  - 'Suche zu jeder Aussage ein Beispiel oder ein Gegenbeispiel.'
  - 'Denk an $\frac1x$ und an die Vorzeichenfunktion.'
loesung: |
  Ansatz: Wir prüfen jede Aussage mit dem Satz oder mit einem Gegenbeispiel.
  ---
  1 ist richtig, das ist ein Teil des Satzes vom Maximum und Minimum. 2 ist falsch: $\frac1x$ auf $(0, 1)$.
  ---
  3 ist falsch: Die Vorzeichenfunktion auf $[-1, 1]$ ist beschränkt, aber unstetig. 4 ist richtig: $f(x) = x$ auf $[0, 1]$.
```

```aufgabe
id: gs-gegenbeispiel-maxmin
titel: Ohne Stetigkeit kein Maximum
niveau: 3
lernziel: 8
kompetenz: begruenden
angabe: |
  Es sei $f(x) = \frac1x$ für $0 < x \le 1$ und $f(0) = 0$. Die Funktion ist also auf dem abgeschlossenen Intervall
  $[0, 1]$ definiert.

  a) Berechne $f(0{,}001)$.

  b) Begründe, dass $f$ auf $[0, 1]$ kein Maximum hat, und erkläre, warum das dem Satz vom Maximum nicht widerspricht.
teile:
  - typ: zahl
    label: 'a) $f(0{,}001)$'
    loesung: "1/0.001"
    anzeige: '1000'
  - typ: text
    label: 'b) Begründung'
    muster: |
      Für $x \to 0^+$ wächst $\frac1x$ über alle Grenzen, zum Beispiel $f(0{,}001) = 1000$ und $f(0{,}0001) = 10\,000$.
      Zu jedem Funktionswert gibt es also einen größeren, und $f$ hat kein Maximum. Das widerspricht dem Satz nicht,
      denn $f$ ist an der Stelle $0$ nicht stetig: $f(0) = 0$, aber der rechtsseitige Grenzwert ist $+\infty$.
      Die Voraussetzung „stetig auf $[a, b]$“ ist verletzt, obwohl das Intervall abgeschlossen ist.
hinweise:
  - 'Was passiert mit $\frac1x$, wenn $x$ von rechts gegen $0$ geht?'
  - 'Prüfe die drei Voraussetzungen des Satzes einzeln: abgeschlossen, beschränkt, stetig.'
loesung: |
  Ansatz: Wir prüfen zuerst, ob die Funktionswerte beschränkt sind, und dann, welche Voraussetzung des Satzes fehlt.
  ---
  a) $f(0{,}001) = \frac{1}{0{,}001} = 1000$.
  ---
  b) Die Werte wachsen für $x \to 0^+$ über alle Grenzen, also gibt es keinen größten Wert.
  ---
  Das Intervall $[0, 1]$ ist abgeschlossen und beschränkt. Verletzt ist die Stetigkeit an der Stelle $0$. Antwort: Kein Widerspruch, weil eine Voraussetzung fehlt.
```

## Stetige Umkehrfunktionen und gleichmäßige Stetigkeit (Vertiefung)

```aufgabe
id: gs-umkehr-vorwissen
titel: Eine Umkehrfunktion bestimmen
niveau: 1
art: check
angabe: |
  Welche Funktion ist die Umkehrfunktion von $f(x) = 2x + 3$?
  (Vorwissen aus [Kapitel 4, Verkettung und Umkehrfunktion](/lernen/mathe3/funktionen/verkettung-und-umkehrfunktion).)
teile:
  - typ: auswahl
    optionen: ['$f^{-1}(x) = \frac{x - 3}{2}$', '$f^{-1}(x) = \frac{1}{2x + 3}$', '$f^{-1}(x) = 2x - 3$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          $f^{-1}$ ist die Umkehrfunktion, nicht der Kehrwert. Sie macht die Rechnung rückgängig: erst $3$ abziehen, dann durch $2$ teilen.
      - wert: 2
        meldung: |
          Probe: $f(0) = 3$, also müsste $f^{-1}(3) = 0$ sein. Aber $2 \cdot 3 - 3 = 3$. Beim Umkehren wird auch das Mal-Zwei rückgängig gemacht.
hinweise:
  - 'Löse $y = 2x + 3$ nach $x$ auf.'
loesung: |
  $y = 2x + 3$ nach $x$ aufgelöst: $x = \frac{y - 3}{2}$.
  ---
  Variablen tauschen: $f^{-1}(x) = \frac{x - 3}{2}$. Probe: $f^{-1}(f(1)) = f^{-1}(5) = 1$ ✓.
```

**Worum geht es in dieser Lektion?** Diese Lektion geht über den Prüfungsstoff hinaus. Sie behandelt zwei Fragen, die in
der Analysis-Vorlesung im Studium früh kommen. Erstens: Ist die Umkehrfunktion einer stetigen Funktion wieder stetig?
Zweitens: Kann man bei einer stetigen Funktion ein $\delta$ finden, das an **allen** Stellen gleichzeitig passt? Wenn du
nur für die Prüfung lernst, darfst du diese Lektion überspringen.

### Stetige Umkehrfunktionen

Eine Funktion hat eine Umkehrfunktion, wenn jeder Funktionswert nur **einmal** vorkommt. Das ist zum Beispiel der Fall,
wenn sie **streng monoton** ist, also immer steigt oder immer fällt. Dann gehören zu verschiedenen $x$ verschiedene
Werte. Für stetige Funktionen gilt noch mehr.

:::satz[Stetigkeit der Umkehrfunktion]
Es sei $f$ stetig und streng monoton auf einem Intervall $I$. Dann ist das Bild $J = f(I)$ wieder ein Intervall, und die
Umkehrfunktion $f^{-1}\colon J \to I$ ist ebenfalls stetig und streng monoton, und zwar im selben Sinn wie $f$.
:::

Dabei ist $f^{-1}$ die Funktion, die jedem Wert $y$ aus $J$ die eine Stelle $x$ mit $f(x) = y$ zuordnet. Dass $J$ ein
Intervall ist, folgt aus dem Zwischenwertsatz in
[12.11](/lernen/mathe3/grenzwerte-stetigkeit/zwischenwertsatz-nullstellensatz-und-bisektion). Anschaulich: Den Graphen
von $f^{-1}$ erhält man durch Spiegeln an der Geraden $y = x$. Ein Graph ohne Sprünge bleibt beim Spiegeln ohne Sprünge.

:::beispiel[Eine Umkehrfunktion ohne Formel]
Es sei $f(x) = x^3 + x$ auf ganz $\R$.

**Schritt 1, streng monoton.** $f'(x) = 3x^2 + 1 > 0$ für alle $x$. Also wächst $f$ streng monoton.

**Schritt 2, Bild.** Für $x \to \infty$ geht $f(x) \to \infty$, für $x \to -\infty$ geht $f(x) \to -\infty$. Nach dem
Zwischenwertsatz ist das Bild ganz $\R$.

**Schritt 3, Folgerung.** Nach dem Satz gibt es eine stetige, streng wachsende Umkehrfunktion $f^{-1}\colon \R \to \R$. Eine
einfache Formel dafür gibt es nicht, einzelne Werte kann man aber ablesen: $f(1) = 2$, also $f^{-1}(2) = 1$. Und
$f(2) = 10$, also $f^{-1}(10) = 2$.
:::

:::beispiel[Ein Nicht-Beispiel und seine Reparatur]
$f(x) = x^2$ auf $[-1, 1]$ hat **keine** Umkehrfunktion: $f(-0{,}5) = f(0{,}5) = 0{,}25$. Zum Wert $0{,}25$ gehören zwei
Stellen. Die Funktion ist auf diesem Intervall nicht streng monoton.

Schränkt man den Definitionsbereich auf $[0, \infty)$ ein, ist $x^2$ dort streng wachsend und stetig. Die Umkehrfunktion ist
die Wurzelfunktion $\sqrt{x}$, und der Satz garantiert, dass sie stetig ist. Genauso entstehen $\ln x$ als Umkehrfunktion
von $e^x$ und $\arcsin x$ als Umkehrfunktion von $\sin x$ auf $\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$.
:::

:::achtung[Die Einschränkung vergessen]
Falsch: „Die Wurzel ist die Umkehrfunktion des Quadrats, also gilt $\sqrt{x^2} = x$ für alle $x$.“

Richtig: Das gilt nur auf dem eingeschränkten Bereich $x \ge 0$. Für $x = -2$ ist $\sqrt{(-2)^2} = \sqrt{4} = 2 \neq -2$.
Allgemein gilt $\sqrt{x^2} = |x|$. Eine Umkehrfunktion gehört immer zu einem Bereich, auf dem die Funktion streng monoton ist.
:::

### Gleichmäßige Stetigkeit

In der $\varepsilon$-$\delta$-Definition der Stetigkeit aus
[12.8](/lernen/mathe3/grenzwerte-stetigkeit/stetigkeit-an-einer-stelle) darf $\delta$ von $\varepsilon$ **und von der Stelle
$x_0$** abhängen. Manchmal findet man aber ein $\delta$, das an allen Stellen zugleich passt. Dann heißt die Funktion
**gleichmäßig stetig**.

:::definition[Gleichmäßige Stetigkeit]
$f$ heißt **gleichmäßig stetig** auf $D$, wenn es zu jedem $\varepsilon > 0$ ein $\delta > 0$ gibt, sodass für **alle**
$x, y \in D$ mit $|x - y| < \delta$ gilt: $|f(x) - f(y)| < \varepsilon$.
:::

Der Unterschied zur gewöhnlichen Stetigkeit liegt nur in der Reihenfolge: Erst wird $\delta$ gewählt, dann dürfen
**beide** Stellen $x$ und $y$ beliebig sein. Das $\delta$ darf also nicht davon abhängen, wo man sich im
Definitionsbereich befindet.

:::beispiel[Eine Gerade ist gleichmäßig stetig]
Für $f(x) = 3x$ gilt $|f(x) - f(y)| = 3\,|x - y|$. Mit $\delta = \frac{\varepsilon}{3}$ folgt aus $|x - y| < \delta$ sofort
$|f(x) - f(y)| < 3\delta = \varepsilon$. Das $\delta$ hängt nur von $\varepsilon$ ab, nicht von $x$ oder $y$. Also ist $3x$ auf
ganz $\R$ gleichmäßig stetig. Für $\varepsilon = 0{,}3$ passt überall $\delta = 0{,}1$.
:::

:::beispiel[Ein Nicht-Beispiel: 1/x auf (0, 1)]
$f(x) = \frac1x$ ist auf $(0, 1)$ stetig. Wir nehmen $\varepsilon = 1$ und bestimmen an verschiedenen Stellen $x_0$ das
größte passende $\delta$. Eine Rechnung wie in
[12.2](/lernen/mathe3/grenzwerte-stetigkeit/die-epsilon-delta-definition-idee-und-bausteine) ergibt
$\delta(x_0) = \frac{x_0^2}{1 + x_0}$:

- bei $x_0 = 0{,}5$: $\delta = \frac{0{,}25}{1{,}5} \approx 0{,}167$,
- bei $x_0 = 0{,}1$: $\delta = \frac{0{,}01}{1{,}1} \approx 0{,}0091$,
- bei $x_0 = 0{,}01$: $\delta = \frac{0{,}0001}{1{,}01} \approx 0{,}000099$.

Je näher $x_0$ an $0$ liegt, desto steiler ist der Graph, und desto kleiner muss $\delta$ sein. Ein gemeinsames $\delta > 0$
für alle Stellen gibt es nicht. Also ist $\frac1x$ auf $(0, 1)$ stetig, aber **nicht gleichmäßig** stetig.
:::

:::satz[Satz von Heine]
Ist $f$ stetig auf einem **abgeschlossenen und beschränkten** Intervall $[a, b]$, dann ist $f$ dort gleichmäßig stetig.
:::

Der Satz erklärt das Nicht-Beispiel: Das Intervall $(0, 1)$ ist nicht abgeschlossen, und am offenen Rand $0$ wird $\frac1x$
beliebig steil. Gleichmäßige Stetigkeit braucht man im Studium zum Beispiel für den Beweis, dass jede stetige Funktion
auf $[a, b]$ integrierbar ist, siehe [14.5 Welche Funktionen sind integrierbar?](/lernen/mathe3/integrierbarkeit/welche-funktionen-sind-integrierbar).

:::achtung[Stetig heißt nicht gleichmäßig stetig]
Falsch: „$x^2$ ist auf $\R$ stetig. Zu $\varepsilon = 1$ wähle ich $\delta = 0{,}1$, das passt überall.“

Richtig: Für $x = 100$ und $y = 100{,}05$ ist $|x - y| = 0{,}05 < 0{,}1$, aber $|x^2 - y^2| = 10\,010{,}0025 - 10\,000 = 10{,}0025 > 1$.
Weil die Parabel immer steiler wird, braucht man für große $x$ immer kleinere $\delta$. Auf ganz $\R$ ist $x^2$ nicht
gleichmäßig stetig. Auf einem beschränkten Intervall wie $[0, 5]$ dagegen schon, nach dem Satz von Heine.
:::

```reflexion
frage: Was ist der Unterschied zwischen „stetig auf D“ und „gleichmäßig stetig auf D“? Erkläre ihn mit der Reihenfolge der Quantoren und mit einem Beispiel.
antwort: |
  „Stetig auf $D$“ heißt: Für jede Stelle $x_0$ und jedes $\varepsilon$ gibt es ein $\delta$. Das $\delta$ darf also von
  $x_0$ abhängen. „Gleichmäßig stetig“ heißt: Zu jedem $\varepsilon$ gibt es ein $\delta$, das für alle Stellen
  zugleich passt. Die Wahl von $\delta$ rückt in der Quantorenkette vor die Wahl der Stelle. Beispiel: $\frac1x$ auf
  $(0, 1)$ ist stetig, aber bei $\varepsilon = 1$ braucht man nahe $0$ beliebig kleine $\delta$. Ein gemeinsames $\delta$
  gibt es nicht, also ist sie nicht gleichmäßig stetig.
```

```aufgabe
id: gs-umkehr-wert
titel: Werte der Umkehrfunktion ablesen
niveau: 1
lernziel: 9
kompetenz: rechnen
angabe: |
  $f(x) = x^3 + 2x$ ist auf $\R$ stetig und streng wachsend, hat also eine stetige Umkehrfunktion. Bestimme
  $f^{-1}(3)$ und $f^{-1}(12)$ durch Probieren mit ganzen Zahlen.
teile:
  - typ: zahl
    label: '$f^{-1}(3)$'
    loesung: "1"
    fehler:
      - wert: "33"
        meldung: |
          Das ist $f(3) = 27 + 6$. Gesucht ist die Stelle $x$ mit $f(x) = 3$, also umgekehrt.
      - wert: "1/33"
        meldung: |
          $f^{-1}$ ist nicht der Kehrwert $\frac{1}{f}$. Gesucht ist das $x$ mit $x^3 + 2x = 3$.
  - typ: zahl
    label: '$f^{-1}(12)$'
    loesung: "2"
    fehler:
      - wert: "1752"
        meldung: |
          Das ist $f(12)$. Gesucht ist das $x$ mit $x^3 + 2x = 12$.
hinweise:
  - '$f^{-1}(3)$ ist die Lösung von $x^3 + 2x = 3$. Probiere $x = 1$.'
loesung: |
  Ansatz: $f^{-1}(y)$ ist die eine Stelle $x$ mit $f(x) = y$. Weil $f$ streng wächst, gibt es genau eine.
  ---
  $f(1) = 1 + 2 = 3$, also $f^{-1}(3) = 1$. $f(2) = 8 + 4 = 12$, also $f^{-1}(12) = 2$.
```

```aufgabe
id: gs-umkehr-intervall
titel: Der Definitionsbereich der Umkehrfunktion
niveau: 1
lernziel: 9
kompetenz: verstehen
angabe: |
  $f(x) = 2x + 1$ wird nur auf dem Intervall $[1, 4]$ betrachtet. Auf welchem Intervall $[u, o]$ ist die Umkehrfunktion
  $f^{-1}$ definiert?
teile:
  - typ: vektor
    label: '$[u, o]$'
    namen: ['u', 'o']
    loesung: ["3", "9"]
    fehler:
      - wert: ["1", "4"]
        meldung: |
          $[1, 4]$ ist der Definitionsbereich von $f$. Die Umkehrfunktion ist auf dem **Bild** von $f$ definiert, also auf der Menge der Funktionswerte.
hinweise:
  - 'Berechne $f(1)$ und $f(4)$. Weil $f$ stetig und wachsend ist, ist das Bild das Intervall dazwischen.'
loesung: |
  Ansatz: Die Umkehrfunktion bildet die Werte von $f$ zurück auf die Stellen. Ihr Definitionsbereich ist also das Bild $f([1, 4])$.
  ---
  $f(1) = 3$, $f(4) = 9$. Weil $f$ stetig und streng wachsend ist, ist das Bild $[3, 9]$. Also ist $f^{-1}$ auf $[3, 9]$ definiert, mit Werten in $[1, 4]$.
```

```aufgabe
id: gs-glm-linear
titel: Ein δ für alle Stellen
niveau: 2
lernziel: 9
kompetenz: rechnen
angabe: |
  Es sei $f(x) = 5x - 2$ und $\varepsilon = 0{,}1$.

  a) Bestimme das größte $\delta$, sodass aus $|x - y| < \delta$ folgt: $|f(x) - f(y)| < \varepsilon$.

  b) Hängt dieses $\delta$ davon ab, wo $x$ und $y$ liegen?
teile:
  - typ: zahl
    label: 'a) $\delta$'
    loesung: "0.1/5"
    anzeige: '0{,}02'
    fehler:
      - wert: "0.5"
        meldung: |
          Du hast mit $5$ multipliziert. Aus $5\,|x - y| < 0{,}1$ folgt $|x - y| < \frac{0{,}1}{5}$.
  - typ: auswahl
    label: 'b)'
    optionen: ['Nein, es passt überall.', 'Ja, für große $x$ muss es kleiner sein.']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Bei einer Geraden ist die Steigung überall gleich. $|f(x) - f(y)| = 5\,|x - y|$ enthält $x$ und $y$ nur im Abstand.
hinweise:
  - '$|f(x) - f(y)| = |5x - 5y| = 5\,|x - y|$.'
  - 'Kommt in dieser Rechnung die Lage von $x$ vor oder nur der Abstand?'
loesung: |
  Ansatz: Wir berechnen den Abstand der Funktionswerte allgemein für zwei Stellen $x$ und $y$.
  ---
  $|f(x) - f(y)| = |5x - 2 - 5y + 2| = 5\,|x - y|$.
  ---
  a) $5\,|x - y| < 0{,}1$ gilt genau für $|x - y| < 0{,}02$. Also $\delta = 0{,}02$.
  ---
  b) In der Rechnung kommt nur der Abstand $|x - y|$ vor. Das $\delta$ passt überall, $f$ ist gleichmäßig stetig.
```

```aufgabe
id: gs-glm-quadrat
titel: Die Parabel auf einem beschränkten Intervall
niveau: 2
lernziel: 9
kompetenz: rechnen
angabe: |
  $f(x) = x^2$ wird auf $[0, 4]$ betrachtet. Für $x, y \in [0, 4]$ gilt $|x^2 - y^2| = |x - y| \cdot |x + y| \le 8\,|x - y|$.
  Welches $\delta$ passt damit zu $\varepsilon = 0{,}4$ an allen Stellen des Intervalls?
teile:
  - typ: zahl
    label: '$\delta$'
    loesung: "0.4/8"
    anzeige: '0{,}05'
    fehler:
      - wert: "0.1"
        meldung: |
          Du hast mit $|x + y| \le 4$ gerechnet. Beide Stellen können aber bis $4$ groß sein, also $|x + y| \le 4 + 4 = 8$.
      - wert: "3.2"
        meldung: |
          Du hast mit $8$ multipliziert statt dividiert. Aus $8\,|x - y| < 0{,}4$ folgt $|x - y| < 0{,}05$.
hinweise:
  - 'Für $x, y \le 4$ ist $x + y \le 8$.'
  - 'Aus $8\,|x - y| < \varepsilon$ folgt die Bedingung für $|x - y|$.'
loesung: |
  Ansatz: Auf dem beschränkten Intervall lässt sich der störende Faktor $|x + y|$ durch eine feste Zahl abschätzen.
  ---
  $|x + y| \le 8$, also $|x^2 - y^2| \le 8\,|x - y|$.
  ---
  $8\,|x - y| < 0{,}4$ für $|x - y| < 0{,}05$. Also $\delta = 0{,}05$ für alle Stellen in $[0, 4]$. Das passt zum Satz von Heine.
```

```aufgabe
id: gs-glm-gefuehrt
titel: Wie δ bei 1/x schrumpft
niveau: 2
lernziel: 9
kompetenz: rechnen
angabe: |
  Für $f(x) = \frac1x$ auf $(0, 1]$ und $\varepsilon = 1$ ist das größte passende $\delta$ an der Stelle $x_0$ gleich
  $\delta(x_0) = \frac{x_0^2}{1 + x_0}$. Berechne $\delta(0{,}25)$ als Bruch.
teile:
  - typ: zahl
    label: '$\delta(0{,}25)$'
    loesung: "0.0625/1.25"
    anzeige: '\tfrac{1}{20}'
    fehler:
      - wert: "0.25/1.25"
        meldung: |
          Prüfe den Zähler: Dort steht $x_0^2 = 0{,}25^2 = 0{,}0625$, nicht $x_0 = 0{,}25$. Im Nenner steht $1 + x_0 = 1{,}25$.
hinweise:
  - 'Setze $x_0 = 0{,}25$ in $\frac{x_0^2}{1 + x_0}$ ein.'
  - 'Kontrolle: Löse $|\frac1x - 4| < 1$ nach $x$ auf und miss die Abstände zu $0{,}25$.'
gefuehrt:
  - text: 'Bei $x_0 = 0{,}25$ ist $f(x_0) = 4$. Die Bedingung $|\frac1x - 4| < 1$ heißt $3 < \frac1x < 5$. Zwischen welchen Grenzen liegt dann $x$? Gib die linke Grenze an.'
    teil:
      typ: zahl
      loesung: "1/5"
    erklaerung: 'Kehrwerte drehen bei positiven Zahlen die Zeichen: $\frac15 < x < \frac13$.'
  - text: Wie weit ist die linke Grenze $\frac15 = 0{,}2$ von $x_0 = 0{,}25$ entfernt?
    teil:
      typ: zahl
      loesung: "0.25 - 1/5"
    erklaerung: '$0{,}25 - 0{,}2 = 0{,}05 = \frac{1}{20}$. Nach rechts ist bis $\frac13$ mehr Platz, nämlich $\frac13 - \frac14 = \frac{1}{12} \approx 0{,}083$. Der kleinere Abstand zählt: $\delta = \frac{1}{20}$.'
  - text: Berechne mit der Formel $\delta(0{,}05)$ auf vier Nachkommastellen.
    teil:
      typ: zahl
      loesung: "0.0025/1.05"
      toleranz: 0.0001
    erklaerung: '$\frac{0{,}0025}{1{,}05} \approx 0{,}0024$. Rund zwanzigmal kleiner als bei $0{,}25$.'
  - text: Überlege, was mit $\delta(x_0)$ passiert, wenn $x_0$ gegen $0$ geht, und was das für die gleichmäßige Stetigkeit bedeutet.
    erklaerung: 'Der Zähler $x_0^2$ geht gegen $0$, der Nenner gegen $1$. Also $\delta(x_0) \to 0$. Kein festes $\delta > 0$ passt an allen Stellen, also ist $\frac1x$ auf $(0, 1]$ nicht gleichmäßig stetig.'
loesung: |
  Ansatz: Wir setzen in die Formel ein und kontrollieren mit der Ungleichung.
  ---
  $\delta(0{,}25) = \frac{0{,}0625}{1{,}25} = 0{,}05 = \frac{1}{20}$.
  ---
  Kontrolle: $|\frac1x - 4| < 1$ heißt $\frac15 < x < \frac13$. Der Abstand von $0{,}25$ zur linken Grenze ist $\frac{1}{20}$, zur rechten $\frac{1}{12}$. Der kleinere zählt ✓.
  ---
  Für $x_0 \to 0$ geht $\delta(x_0) \to 0$. Deshalb gibt es kein gemeinsames $\delta$.
```

```aufgabe
id: gs-glm-aussagen
titel: Gleichmäßig stetig oder nicht?
niveau: 2
lernziel: 9
kompetenz: verstehen
angabe: |
  Welche Funktionen sind auf dem angegebenen Bereich gleichmäßig stetig? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$f(x) = 4x - 1$ auf $\R$'
      - '$f(x) = x^2$ auf $[0, 5]$'
      - '$f(x) = x^2$ auf $\R$'
      - '$f(x) = \frac1x$ auf $(0, 1)$'
      - '$f(x) = \sin x$ auf $\R$'
    richtig: [0, 1, 4]
    fehler:
      - wert: [0, 1, 2, 4]
        meldung: |
          $x^2$ wird auf $\R$ beliebig steil. Für $x = 100$ und $y = 100{,}05$ unterscheiden sich die Werte schon um mehr als $10$.
      - wert: [0, 1, 3, 4]
        meldung: |
          $\frac1x$ wird am offenen Rand $0$ beliebig steil. Das größte passende $\delta$ geht dort gegen $0$.
      - wert: [0, 1]
        meldung: |
          Auch $\sin x$ ist gleichmäßig stetig: Seine Steigung ist nie größer als $1$, deshalb gilt $|\sin x - \sin y| \le |x - y|$, und $\delta = \varepsilon$ passt überall.
hinweise:
  - 'Wird die Funktion auf dem Bereich beliebig steil? Dann ist sie nicht gleichmäßig stetig.'
  - 'Auf einem abgeschlossenen, beschränkten Intervall hilft der Satz von Heine.'
loesung: |
  Ansatz: Gleichmäßig stetig heißt anschaulich: Die Funktion wird nirgends beliebig steil.
  ---
  $4x - 1$: überall Steigung $4$, $\delta = \frac{\varepsilon}{4}$ ✓. $x^2$ auf $[0, 5]$: Satz von Heine ✓. $\sin x$: Steigung höchstens $1$, $\delta = \varepsilon$ ✓.
  ---
  $x^2$ auf $\R$ und $\frac1x$ auf $(0, 1)$ werden beliebig steil, also nicht gleichmäßig stetig. Richtig sind 1, 2 und 5.
```

```aufgabe
id: gs-umkehr-begruenden
titel: Genau eine Lösung und eine stetige Umkehrfunktion
niveau: 3
lernziel: 9
kompetenz: begruenden
angabe: |
  Gegeben ist $f(x) = x^5 + x - 1$.

  a) Bestimme $f^{-1}(1)$.

  b) Begründe, dass die Gleichung $f(x) = 0$ genau eine reelle Lösung hat und dass $f$ eine stetige Umkehrfunktion
  $f^{-1}\colon \R \to \R$ besitzt.
teile:
  - typ: zahl
    label: 'a) $f^{-1}(1)$'
    loesung: "1"
  - typ: text
    label: 'b) Begründung'
    muster: |
      $f'(x) = 5x^4 + 1 > 0$, also ist $f$ streng wachsend, jeder Wert kommt also höchstens einmal vor. Es gilt $f(0) = -1 < 0$ und $f(1) = 1 > 0$.
      $f$ ist stetig, nach dem Nullstellensatz gibt es eine Nullstelle in $(0, 1)$. Wegen der strengen Monotonie ist es die
      einzige. Für $x \to \pm\infty$ geht $f(x) \to \pm\infty$, nach dem Zwischenwertsatz ist das Bild ganz $\R$. Nach dem
      Satz über die Umkehrfunktion ist $f^{-1}\colon \R \to \R$ stetig und streng wachsend.
hinweise:
  - 'Für a): Setze $x = 1$ ein.'
  - 'Für b): Strenge Monotonie über die Ableitung, Existenz über den Nullstellensatz, Bild über das Verhalten für $x \to \pm\infty$.'
loesung: |
  Ansatz: Monotonie liefert „höchstens eine“ Lösung, der Nullstellensatz „mindestens eine“. Zusammen ergibt das „genau eine“.
  ---
  a) $f(1) = 1 + 1 - 1 = 1$, also $f^{-1}(1) = 1$.
  ---
  b) $f'(x) = 5x^4 + 1 > 0$: streng wachsend. $f(0) = -1$, $f(1) = 1$: Nullstelle in $(0, 1)$ nach dem Nullstellensatz, und wegen der Monotonie genau eine.
  ---
  Bild: $f(x) \to \pm\infty$ für $x \to \pm\infty$, also ist $f(\R) = \R$. Antwort: $f^{-1}\colon \R \to \R$ existiert und ist stetig.
```

## Gemischte Wiederholung

In diesem Abschnitt sind die Aufgaben absichtlich gemischt. Einige stammen aus früheren Kapiteln, deren Stoff du für
Grenzwerte und Stetigkeit brauchst. Bei anderen musst du zuerst selbst erkennen, **welches Verfahren** passt. Genau
das verlangt die Prüfung: Dort steht nicht dabei, aus welcher Lektion eine Aufgabe kommt. Wenn du bei einer Aufgabe
hängst, schau in die Lektion, die der Lösungsweg nennt.

```aufgabe
id: gs-mix-verfahren-grenzwert
titel: Welches Verfahren passt? Grenzwerte berechnen
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  Du sollst nichts ausrechnen. Wähle für jeden Grenzwert das Verfahren, mit dem man ihn am schnellsten findet.

  a) $\lim\limits_{x \to 1} \dfrac{x^2 + 1}{x + 2}$  b) $\lim\limits_{x \to 3} \dfrac{x^2 - 7x + 12}{x - 3}$  c) $\lim\limits_{x \to 0} \dfrac{\sqrt{x + 1} - 1}{x}$  d) $\lim\limits_{x \to 0} \dfrac{\sin 2x}{3x}$
teile:
  - typ: auswahl
    label: 'a)'
    optionen: ['einfach einsetzen', 'faktorisieren und kürzen', 'mit der Gegenwurzel erweitern', 'Standardgrenzwert']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Prüfe zuerst den Nenner: Bei $x = 1$ ist er $3 \neq 0$. Dann darf man direkt einsetzen, es gibt nichts zu kürzen.'
  - typ: auswahl
    label: 'b)'
    optionen: ['einfach einsetzen', 'faktorisieren und kürzen', 'mit der Gegenwurzel erweitern', 'Standardgrenzwert']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Einsetzen ergibt $\frac{9 - 21 + 12}{0} = \frac00$. Der Zähler hat die Nullstelle $3$, also steckt $(x - 3)$ darin.'
  - typ: auswahl
    label: 'c)'
    optionen: ['einfach einsetzen', 'faktorisieren und kürzen', 'mit der Gegenwurzel erweitern', 'Standardgrenzwert']
    richtig: [2]
    fehler:
      - wert: 1
        meldung: 'Eine Wurzeldifferenz lässt sich nicht einfach faktorisieren. Erst die dritte binomische Formel macht die Wurzel weg.'
  - typ: auswahl
    label: 'd)'
    optionen: ['einfach einsetzen', 'faktorisieren und kürzen', 'mit der Gegenwurzel erweitern', 'Standardgrenzwert']
    richtig: [3]
    fehler:
      - wert: 1
        meldung: '$\sin 2x$ ist kein Polynom, man kann es nicht faktorisieren. Hier hilft $\frac{\sin u}{u} \to 1$.'
hinweise:
  - 'Setze zuerst ein. Entsteht $\frac00$, entscheidet die Form des Zählers über das Werkzeug.'
loesung: |
  Ansatz: Wir ordnen jeden Ausdruck nach seiner Form einem Werkzeug aus [12.5](/lernen/mathe3/grenzwerte-stetigkeit/grenzwerte-berechnen-einsetzen-kuerzen-erweitern) und [12.6](/lernen/mathe3/grenzwerte-stetigkeit/einschliessungssatz-und-standardgrenzwerte) zu.
  ---
  a) Nenner $\neq 0$: einsetzen, Grenzwert $\frac23$. b) $\frac00$ mit Polynomen: $(x - 3)(x - 4)$ kürzen, Grenzwert $-1$.
  ---
  c) Wurzeldifferenz: mit $\sqrt{x + 1} + 1$ erweitern, Grenzwert $\frac12$. d) Sinus: Standardgrenzwert, $\frac23 \cdot \frac{\sin 2x}{2x} \to \frac23$.
```

```aufgabe
id: gs-mix-verfahren-stetigkeit
titel: Welcher Satz passt?
niveau: 2
lernziel: 7
kompetenz: verstehen
angabe: |
  Wähle für jede Frage das Werkzeug, mit dem man sie beantwortet. Rechnen ist nicht nötig.

  a) Hat $x^5 - x - 3 = 0$ eine Lösung zwischen $1$ und $2$?

  b) Hat $e^{-x^2}\cos x$ auf $[0, 3]$ einen größten Wert?

  c) Existiert $\lim\limits_{x \to 0} \cos\frac1x$?
teile:
  - typ: auswahl
    label: 'a)'
    optionen: ['Nullstellensatz', 'Satz vom Maximum und Minimum', 'zwei Folgen mit verschiedenen Grenzwerten']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Gefragt ist nicht nach einem größten Wert, sondern ob die Funktion den Wert $0$ annimmt.'
  - typ: auswahl
    label: 'b)'
    optionen: ['Nullstellensatz', 'Satz vom Maximum und Minimum', 'zwei Folgen mit verschiedenen Grenzwerten']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Es geht nicht um eine Nullstelle, sondern um einen größten Wert auf einem abgeschlossenen Intervall.'
  - typ: auswahl
    label: 'c)'
    optionen: ['Nullstellensatz', 'Satz vom Maximum und Minimum', 'zwei Folgen mit verschiedenen Grenzwerten']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: 'Gefragt ist nach einem Grenzwert, nicht nach einer Nullstelle. Um einen Grenzwert zu widerlegen, braucht man zwei Folgen.'
hinweise:
  - 'Frag dich jeweils: Geht es um eine Nullstelle, einen größten Wert oder einen Grenzwert?'
loesung: |
  Ansatz: Jede Frage gehört zu einem der Sätze aus [12.11](/lernen/mathe3/grenzwerte-stetigkeit/zwischenwertsatz-nullstellensatz-und-bisektion), [12.12](/lernen/mathe3/grenzwerte-stetigkeit/satz-vom-maximum-und-minimum) oder zum Folgenkriterium.
  ---
  a) Nullstellensatz: $f(1) = -3 < 0$, $f(2) = 27 > 0$, $f$ stetig, also ja. b) Satz vom Maximum: stetig auf $[0, 3]$, also ja.
  ---
  c) Zwei Folgen: $x_n = \frac{1}{2n\pi}$ liefert $1$, $y_n = \frac{1}{(2n + 1)\pi}$ liefert $-1$. Der Grenzwert existiert nicht.
```

```aufgabe
id: gs-mix-k11-folge
titel: Rückblick Kapitel 11 – Grenzwert einer Folge
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Berechne $\lim\limits_{n \to \infty} \dfrac{4n^2 - n}{2n^2 + 5}$. Folgengrenzwerte sind die Grundlage des Folgenkriteriums.
  Wiederholung: [Kapitel 11, Rationale Folgen](/lernen/mathe3/grenzwerte-folgen/rationale-folgen-wurzeltrick-und-standardgrenzwerte).
teile:
  - typ: zahl
    loesung: "4/2"
    anzeige: '2'
    fehler:
      - wert: "1"
        meldung: '„Unendlich durch unendlich“ ist nicht $1$. Teile Zähler und Nenner durch $n^2$.'
      - wert: "0"
        meldung: 'Zähler und Nenner haben denselben Grad. Dann bleibt der Quotient der Leitkoeffizienten, nicht $0$.'
hinweise:
  - 'Durch $n^2$ dividieren.'
loesung: |
  Ansatz: Bei rationalen Folgen teilt man durch die höchste Potenz des Nenners.
  ---
  $\frac{4 - \frac1n}{2 + \frac{5}{n^2}} \to \frac{4}{2} = 2$.
```

```aufgabe
id: gs-mix-k11-epsn
titel: Rückblick Kapitel 11 – das kleinste N
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Für $a_n = \dfrac{1}{n + 1}$ gilt $a_n \to 0$. Bestimme zu $\varepsilon = 0{,}01$ das kleinste $N$, sodass $|a_n| < 0{,}01$
  für alle $n \ge N$ gilt. Dieselbe Rechentechnik steckt in der Suche nach $\delta$.
  Wiederholung: [Kapitel 11, Zu gegebenem ε das passende N](/lernen/mathe3/grenzwerte-folgen/zu-gegebenem-epsilon-das-passende-n-berechnen).
teile:
  - typ: zahl
    label: '$N$'
    loesung: "100"
    fehler:
      - wert: "99"
        meldung: 'Für $n = 99$ ist $\frac{1}{100} = 0{,}01$, also **nicht kleiner** als $0{,}01$. Der Rand zählt nicht.'
      - wert: "101"
        meldung: 'Für $n = 100$ ist $\frac{1}{101} \approx 0{,}0099 < 0{,}01$. Schon $100$ reicht.'
hinweise:
  - 'Löse $\frac{1}{n + 1} < 0{,}01$ nach $n$ auf.'
  - 'Achtung beim Rand: Gesucht ist die kleinste ganze Zahl **echt** über der Grenze.'
loesung: |
  Ansatz: Wir lösen die Ungleichung $|a_n - 0| < \varepsilon$ nach $n$ auf.
  ---
  $\frac{1}{n + 1} < 0{,}01 \iff n + 1 > 100 \iff n > 99$.
  ---
  Kleinste ganze Zahl über $99$: $N = 100$. Probe: $a_{100} = \frac{1}{101} \approx 0{,}0099 < 0{,}01$ ✓.
```

```aufgabe
id: gs-mix-k09-ableitung
titel: Rückblick Kapitel 9 – eine Ableitung auswerten
niveau: 1
lernziel: 8
kompetenz: rechnen
angabe: |
  Berechne $f'(3)$ für $f(x) = x^3 - 3x^2$. Ableitungen brauchst du, um Maximum und Minimum auf einem Intervall zu finden.
  Wiederholung: [Kapitel 9, Grundregeln](/lernen/mathe3/differentialrechnung/grundregeln-potenz-faktor-und-summenregel-und-die-wichtigsten-ableitungen).
teile:
  - typ: zahl
    loesung: "3*9 - 6*3"
    anzeige: '9'
    fehler:
      - wert: "0"
        meldung: '$0 = f(3)$ ist der Funktionswert: $27 - 27$. Gesucht ist die Ableitung an der Stelle $3$.'
      - wert: "18"
        meldung: 'Die Ableitung von $-3x^2$ ist $-6x$, nicht $-3x$. Also $f''(3) = 27 - 18$.'
hinweise:
  - 'Potenzregel: $f''(x) = 3x^2 - 6x$.'
loesung: |
  Ansatz: Erst ableiten, dann einsetzen.
  ---
  $f'(x) = 3x^2 - 6x$, also $f'(3) = 27 - 18 = 9$.
```

```aufgabe
id: gs-mix-k04-umkehr
titel: Rückblick Kapitel 4 – eine Umkehrfunktion
niveau: 2
lernziel: 9
kompetenz: rechnen
angabe: |
  Bestimme die Umkehrfunktion von $f(x) = \dfrac{x - 1}{2}$. Umkehrfunktionen stetiger, streng monotoner Funktionen sind wieder stetig.
  Wiederholung: [Kapitel 4, Verkettung und Umkehrfunktion](/lernen/mathe3/funktionen/verkettung-und-umkehrfunktion).
teile:
  - typ: term
    label: '$f^{-1}(x) =$'
    loesung: "2x + 1"
    fehler:
      - wert: "2x - 1"
        meldung: 'Probe: $f(3) = 1$, also muss $f^{-1}(1) = 3$ sein. Aber $2 \cdot 1 - 1 = 1$. Beim Umkehren wird aus „minus 1“ ein „plus 1“.'
      - wert: "2/(x - 1)"
        meldung: 'Das ist der Kehrwert von $f$, nicht die Umkehrfunktion. Löse $y = \frac{x - 1}{2}$ nach $x$ auf.'
hinweise:
  - 'Löse $y = \frac{x - 1}{2}$ nach $x$ auf und tausche dann die Variablen.'
  - 'Erst mit $2$ multiplizieren, dann $1$ addieren.'
loesung: |
  Ansatz: Die Umkehrfunktion macht die Rechenschritte von $f$ in umgekehrter Reihenfolge rückgängig.
  ---
  $y = \frac{x - 1}{2} \iff 2y = x - 1 \iff x = 2y + 1$.
  ---
  Variablen tauschen: $f^{-1}(x) = 2x + 1$. Probe: $f(f^{-1}(5)) = f(11) = 5$ ✓.
```

```aufgabe
id: gs-mix-k02-betrag
titel: Rückblick Kapitel 2 – eine Betragsungleichung
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Löse $|3x - 6| < 0{,}3$ und gib die Lösungsmenge als offenes Intervall $(u;\ o)$ an. Genau diese Umformung steckt
  in jedem $\varepsilon$-$\delta$-Nachweis.
  Wiederholung: [Kapitel 2, Bruch-, Betrags- und Wurzelungleichungen](/lernen/mathe3/gleichungen/bruch-betrags-und-wurzelungleichungen).
teile:
  - typ: zahl
    label: 'linke Grenze $u$'
    loesung: "5.7/3"
    anzeige: '1{,}9'
    fehler:
      - wert: "1.7"
        meldung: 'Du hast $0{,}3$ von $2$ abgezogen. Erst durch $3$ teilen: $|x - 2| < 0{,}1$.'
  - typ: zahl
    label: 'rechte Grenze $o$'
    loesung: "6.3/3"
    anzeige: '2{,}1'
    fehler:
      - wert: "2.3"
        meldung: 'Teile zuerst durch $3$: $|3x - 6| = 3\,|x - 2|$. Dann bleibt $|x - 2| < 0{,}1$.'
hinweise:
  - '$|3x - 6| = 3\,|x - 2|$.'
  - 'Aus $|x - 2| < 0{,}1$ folgt $2 - 0{,}1 < x < 2 + 0{,}1$.'
loesung: |
  Ansatz: Den Faktor $3$ aus dem Betrag holen, dann die Abstandsungleichung übersetzen.
  ---
  $3\,|x - 2| < 0{,}3 \iff |x - 2| < 0{,}1$.
  ---
  Also $1{,}9 < x < 2{,}1$, das Intervall $(1{,}9;\ 2{,}1)$. Das ist der $\delta$-Streifen für $f(x) = 3x$ bei $x_0 = 2$ und $\varepsilon = 0{,}3$.
```

```aufgabe
id: gs-mix-k05-tangens
titel: Rückblick Kapitel 5 – wo der Tangens nicht definiert ist
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  An welchen Stellen im Intervall $[0, 2\pi]$ ist $\tan x = \frac{\sin x}{\cos x}$ nicht definiert? Gib alle an, im Bogenmaß.
  Dort hat der Tangens Polstellen. Wiederholung: [Kapitel 5, Die Graphen der Winkelfunktionen](/lernen/mathe3/trigonometrie/die-graphen-der-winkelfunktionen).
teile:
  - typ: menge
    loesung: ["pi/2", "3*pi/2"]
    fehler:
      - wert: ["0", "pi", "2*pi"]
        meldung: 'Das sind die Nullstellen des **Sinus**. Nicht definiert ist der Tangens dort, wo der **Kosinus** null ist.'
      - wert: ["pi/2"]
        meldung: 'Im Intervall bis $2\pi$ gibt es eine zweite Nullstelle des Kosinus.'
hinweise:
  - 'Der Nenner $\cos x$ darf nicht $0$ sein. Wo ist $\cos x = 0$?'
loesung: |
  Ansatz: Der Tangens ist ein Bruch. Er ist dort nicht definiert, wo der Nenner $\cos x$ null wird.
  ---
  $\cos x = 0$ für $x = \frac{\pi}{2}$ und $x = \frac{3\pi}{2}$. An diesen Stellen hat $\tan$ Polstellen. Überall sonst ist $\tan$ stetig.
```

```aufgabe
id: gs-mix-luecke-asymptote
titel: Lücke, Pol und Asymptote in einer Funktion
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Gegeben ist $f(x) = \dfrac{x^2 - 4}{x^2 - x - 2}$. Bestimme den Wert der stetigen Fortsetzung an der hebbaren Lücke und
  die waagrechte Asymptote.
teile:
  - typ: zahl
    label: 'Wert der Fortsetzung'
    loesung: "(2 + 2)/(2 + 1)"
    anzeige: '\tfrac43'
    fehler:
      - wert: "1"
        meldung: '$1$ ist die waagrechte Asymptote. Die Fortsetzung bekommt man durch Kürzen von $(x - 2)$ und Einsetzen von $2$.'
  - typ: zahl
    label: 'waagrechte Asymptote $y =$'
    loesung: "1"
    fehler:
      - wert: "0"
        meldung: 'Zähler und Nenner haben denselben Grad $2$. Die Asymptote ist der Quotient der Leitkoeffizienten.'
hinweise:
  - '$x^2 - 4 = (x - 2)(x + 2)$ und $x^2 - x - 2 = (x - 2)(x + 1)$.'
  - 'Für die Asymptote: Grad-Regel aus [12.7](/lernen/mathe3/grenzwerte-stetigkeit/grenzwerte-im-unendlichen-und-asymptoten): Zählergrad gleich Nennergrad.'
loesung: |
  Ansatz: Faktorisieren für die Lücken, Grad-Regel für das Verhalten im Unendlichen.
  ---
  $f(x) = \frac{(x - 2)(x + 2)}{(x - 2)(x + 1)} = \frac{x + 2}{x + 1}$ für $x \neq 2, -1$. Bei $2$ hebbar mit dem Wert $\frac43$, bei $-1$ eine Polstelle.
  ---
  Gleicher Grad, Leitkoeffizienten $1$ und $1$: waagrechte Asymptote $y = 1$.
```

```aufgabe
id: gs-mix-fehler-stueckweise
titel: Springt der Term, springt die Funktion?
niveau: 3
lernziel: 6
kompetenz: begruenden
angabe: |
  Eine Mitschülerin behauptet: „$f(x) = x^2 + 1$ für $x < 1$ und $f(x) = 2x$ für $x \ge 1$ ist bei $x = 1$ unstetig, weil
  dort der Term wechselt.“

  a) Ist die Behauptung richtig?

  b) Begründe deine Antwort mit den drei Werten an der Nahtstelle.
teile:
  - typ: auswahl
    label: 'a)'
    optionen: ['Ja, ein Termwechsel bedeutet immer eine Unstetigkeit.', 'Nein, $f$ ist bei $1$ stetig.']
    richtig: [1]
  - typ: text
    label: 'b) Begründung'
    muster: |
      Links: $\lim\limits_{x \to 1^-}(x^2 + 1) = 2$. Rechts: $\lim\limits_{x \to 1^+} 2x = 2$. Funktionswert: $f(1) = 2 \cdot 1 = 2$.
      Alle drei Werte sind gleich, also ist $f$ an der Stelle $1$ stetig. Ein Wechsel des Terms ist nur eine Stelle,
      an der man prüfen muss, keine automatische Unstetigkeit.
hinweise:
  - 'Berechne linken Grenzwert, rechten Grenzwert und $f(1)$.'
  - 'Vergleiche mit dem Rezept aus [12.10](/lernen/mathe3/grenzwerte-stetigkeit/stueckweise-definierte-funktionen): Wann ist eine stückweise Funktion an der Nahtstelle stetig?'
loesung: |
  Ansatz: Stetigkeit an einer Nahtstelle entscheidet man nur mit den drei Werten aus [12.10](/lernen/mathe3/grenzwerte-stetigkeit/stueckweise-definierte-funktionen).
  ---
  Links $1 + 1 = 2$, rechts $2$, $f(1) = 2$.
  ---
  Alle drei stimmen überein. Antwort: Die Behauptung ist falsch, $f$ ist stetig. Ein Termwechsel ist nur der Ort, an dem man prüfen muss.
```

## Prüfungsaufgaben

Die folgenden Aufgaben haben das Niveau der schriftlichen Prüfung. Jede Aufgabe nennt einen Zeitrichtwert. Rechne mit
Stoppuhr und schreib jeden Schritt mit Begründung auf, so wie in der Prüfung. Die erste Aufgabe ist eine abgewandelte
Variante einer Musterprüfungsaufgabe. Das Original übst du in den [Prüfungssimulationen](/lernen/mathe3/pruefung).

```aufgabe
id: gs-pruefung-winkler
titel: Funktionen aus zwei Ästen
niveau: 3
lernziel: 6
kompetenz: begruenden
punkte: 10
quelle: nach Musterprüfung Winkler, Aufgabe 5 (abgewandelt)
angabe: |
  *Zeitrichtwert: 20 Minuten.*

  Eine Funktion $f$ wird durch zwei Funktionen $f_+$ und $f_-$ festgelegt: $f(x) = f_-(x)$ für $x < 0$ und
  $f(x) = f_+(x)$ für $x > 0$. Außerdem wird $f(0)$ eigens angegeben.

  a) Die Funktion $f(x) = 4|x|$ entsteht so mit $f_+(x) = 4x$, $f_-(x) = -4x$ und $f(0) = 0$. Die Ableitungen von
  $f_+$ und $f_-$ sind konstant. Mit welchen Werten?

  b) Erkläre an einer Skizze, warum $f$ bei $0$ keine Ableitung hat.

  c) $f$ ist überall stetig. Gib Funktionen $g_+$ und $g_-$ an, sodass $g$ an der Stelle $0$ nicht stetig sein kann, egal
  wie man $g(0)$ definiert. Begründe.

  d) Für $h$ sei $h_-(x) = 2 + x^2$ und $h_+(x) = 1 + \cos x$. Wie muss man $h(0)$ wählen, damit $h$ bei $0$ stetig ist?

  e) Dann ist $h$ sogar differenzierbar. Welchen Wert hat $h'(0)$?
teile:
  - typ: zahl
    label: 'a) $f_+^{\prime}(x)$'
    loesung: "4"
  - typ: zahl
    label: 'a) $f_-^{\prime}(x)$'
    loesung: "-4"
  - typ: text
    label: 'b) Skizze und Deutung'
    muster: |
      Der Graph ist ein steiles „V“ mit Spitze im Ursprung: rechts die Gerade $y = 4x$ (Steigung $4$), links $y = -4x$
      (Steigung $-4$). Im Ursprung entsteht ein **Knick**. Man kann dort keine eindeutige Tangente anlegen, denn die
      Sekantensteigungen sind von rechts immer $4$ und von links immer $-4$.
  - typ: text
    label: 'c) Beispiel und Begründung'
    muster: |
      Zum Beispiel $g_-(x) = x - 1$ und $g_+(x) = x + 1$. Dann ist $\lim_{x \to 0^-} g(x) = -1$ und $\lim_{x \to 0^+} g(x) = 1$.
      Die einseitigen Grenzwerte sind verschieden, der Grenzwert bei $0$ existiert nicht. Stetigkeit würde
      $g(0) = -1$ und $g(0) = 1$ zugleich verlangen. Also ist $g$ für keine Wahl von $g(0)$ stetig.
  - typ: zahl
    label: 'd) $h(0)$'
    loesung: "2"
  - typ: zahl
    label: 'e) $h^{\prime}(0)$'
    loesung: "0"
hinweise:
  - 'Für c): Was müsste für die einseitigen Grenzwerte gelten, damit **kein** Wert $g(0)$ passt?'
  - 'Für d): Berechne $\lim_{x \to 0^-}(2 + x^2)$ und $\lim_{x \to 0^+}(1 + \cos x)$.'
  - 'Für e): Differenzenquotient von links: $\tfrac{(2 + x^2) - 2}{x} = x$. Von rechts: $\tfrac{1 + \cos x - 2}{x} = \tfrac{\cos x - 1}{x}$.'
loesung: |
  Ansatz: Jede Teilaufgabe prüft die Nahtstelle $0$: Für die Stetigkeit vergleicht man die Werte, für die Ableitung die Differenzenquotienten.
  ---
  **a)** $f_+(x) = 4x$ hat die Ableitung $4$, $f_-(x) = -4x$ hat die Ableitung $-4$.
  ---
  **b)** Skizze des steilen „V“. Am Ursprung stoßen zwei Geraden mit den Steigungen $-4$ und $4$ zusammen. Das ist ein Knick ohne eindeutige Tangente. Exakt: $\frac{4|x|}{x}$ ist rechts $4$ und links $-4$, der Grenzwert für $x \to 0$ existiert nicht.
  ---
  **c)** $g_-(x) = x - 1$, $g_+(x) = x + 1$: einseitige Grenzwerte $-1 \neq 1$. Kein Wert $g(0)$ kann beiden gleichen, also ist $g$ bei $0$ unstetig, egal wie $g(0)$ gewählt wird. Es liegt eine Sprungstelle vor.
  ---
  **d)** $2 + x^2$ und $1 + \cos x$ sind stetig: $\lim_{x \to 0^-} h(x) = 2$ und $\lim_{x \to 0^+} h(x) = 1 + \cos 0 = 2$. Beide gleich $2$, also mit $h(0) = 2$ stetig.
  ---
  **e)** Links: $\frac{h(x) - h(0)}{x} = \frac{x^2}{x} = x \to 0$. Rechts: $\frac{\cos x - 1}{x} \to 0$ nach dem Standardgrenzwert. Beide einseitigen Grenzwerte sind $0$, also ist $h'(0) = 0$. Kontrolle über die Äste: $h_-'(0) = 2 \cdot 0 = 0$ und $h_+'(0) = -\sin 0 = 0$.
```

```aufgabe
id: gs-pruefung-nahtstelle
titel: Stetig ja, differenzierbar nein
niveau: 3
lernziel: 6
kompetenz: rechnen
punkte: 8
angabe: |
  *Zeitrichtwert: 15 Minuten.*

  Gegeben ist
  $$f(x) = \begin{cases} \dfrac{x^2 - 2x - 3}{x - 3} & x < 3 \\[4pt] c & x = 3 \\[2pt] ax^2 - 5 & x > 3. \end{cases}$$
  a) Bestimme $a$ und $c$ so, dass $f$ auf ganz $\R$ stetig ist.

  b) Ist $f$ mit diesen Werten an der Stelle $3$ differenzierbar? Berechne dazu die einseitigen Ableitungen.

  c) Skizziere den Graphen für $1 \le x \le 4$.
teile:
  - typ: zahl
    label: '$a$'
    loesung: "1"
  - typ: zahl
    label: '$c$'
    loesung: "4"
  - typ: zahl
    label: 'linksseitige Ableitung an $3$'
    loesung: "1"
  - typ: zahl
    label: 'rechtsseitige Ableitung an $3$'
    loesung: "6"
  - typ: auswahl
    label: 'Ist $f$ an $3$ differenzierbar?'
    optionen: ['ja', 'nein']
    richtig: [1]
  - typ: text
    label: 'c) Skizze'
    muster: |
      Für $x < 3$ die Gerade $y = x + 1$ von $(1 \mid 2)$ bis $(3 \mid 4)$, für $x \ge 3$ die Parabel $y = x^2 - 5$ von
      $(3 \mid 4)$ bis $(4 \mid 11)$. Bei $(3 \mid 4)$ treffen sie zusammen, ohne Loch und ohne Sprung, aber mit einem Knick:
      links Steigung $1$, rechts Steigung $6$.
hinweise:
  - 'Links von $3$: Faktorisiere $x^2 - 2x - 3 = (x - 3)(x + 1)$ und kürze.'
  - 'Stetigkeit: $4 = c = 9a - 5$.'
  - 'Einseitige Ableitungen: Differenzenquotienten $\frac{f(x) - f(3)}{x - 3}$ von links und von rechts.'
loesung: |
  Ansatz: Erst Stetigkeit durch Gleichsetzen der drei Werte an der Nahtstelle, dann Differenzierbarkeit über die einseitigen Differenzenquotienten.
  ---
  **a)** Für $x < 3$ gilt $f(x) = \frac{(x - 3)(x + 1)}{x - 3} = x + 1$, also $\lim_{x \to 3^-} f(x) = 4$. Rechts: $\lim_{x \to 3^+}(ax^2 - 5) = 9a - 5$.
  ---
  Stetigkeit verlangt $4 = c = 9a - 5$, also $c = 4$ und $a = 1$.
  ---
  **b)** Links: $\frac{f(x) - f(3)}{x - 3} = \frac{x + 1 - 4}{x - 3} = 1 \to 1$. Rechts: $\frac{x^2 - 5 - 4}{x - 3} = \frac{(x - 3)(x + 3)}{x - 3} = x + 3 \to 6$.
  ---
  Die einseitigen Ableitungen $1$ und $6$ sind verschieden: $f$ ist an $3$ stetig, aber **nicht** differenzierbar. Der Graph hat dort einen Knick.
  ---
  **c)** Gerade $y = x + 1$ bis zum Punkt $(3 \mid 4)$, danach die Parabel $y = x^2 - 5$ bis $(4 \mid 11)$.
```

```aufgabe
id: gs-pruefung-rational
titel: Lücken, Pole und Asymptoten
niveau: 3
lernziel: 5
kompetenz: rechnen
punkte: 10
angabe: |
  *Zeitrichtwert: 20 Minuten.*

  Gegeben ist $f(x) = \dfrac{x^2 - 1}{x^2 - x - 2}$.

  a) Bestimme den Definitionsbereich und ordne die Definitionslücken ein.

  b) Gib den Wert der stetigen Fortsetzung an der hebbaren Lücke an.

  c) Bestimme das Verhalten an der Polstelle von links und von rechts und die waagrechte Asymptote.

  d) Bestimme die Nullstelle(n) und den Schnittpunkt mit der $y$-Achse und skizziere den Graphen.
teile:
  - typ: menge
    label: 'Definitionslücken'
    loesung: ["-1", "2"]
  - typ: zahl
    label: 'Wert der stetigen Fortsetzung an der hebbaren Lücke'
    loesung: "(-1 - 1)/(-1 - 2)"
    anzeige: '\tfrac23'
  - typ: auswahl
    label: 'Verhalten bei der Polstelle'
    optionen:
      - 'links $-\infty$, rechts $+\infty$'
      - 'links $+\infty$, rechts $-\infty$'
      - 'beidseitig $+\infty$'
    richtig: [0]
  - typ: zahl
    label: 'waagrechte Asymptote $y = $'
    loesung: "1"
  - typ: menge
    label: 'Nullstellen'
    loesung: ["1"]
  - typ: zahl
    label: '$f(0)$'
    loesung: "1/2"
    anzeige: '\tfrac12'
hinweise:
  - '$x^2 - x - 2 = (x - 2)(x + 1)$ und $x^2 - 1 = (x - 1)(x + 1)$.'
  - 'Nach dem Kürzen ist $f(x) = \tfrac{x - 1}{x - 2}$ für $x \neq -1, 2$. Achtung: $x = -1$ ist keine Nullstelle, weil $f$ dort nicht definiert ist.'
loesung: |
  Ansatz: Zähler und Nenner faktorisieren. Damit lassen sich alle Teilfragen aus dem gekürzten Term beantworten.
  ---
  **a)** Nenner: $x^2 - x - 2 = (x - 2)(x + 1) = 0$ für $x = 2$ und $x = -1$. Also $D = \R\setminus\{-1, 2\}$.
  Zähler $(x - 1)(x + 1)$. Gekürzt: $f(x) = \tfrac{x - 1}{x - 2}$. Bei $-1$ hebbar, bei $2$ Polstelle, denn der Zähler ist dort $1 \neq 0$.
  ---
  **b)** $\lim_{x \to -1} \tfrac{x - 1}{x - 2} = \tfrac{-2}{-3} = \tfrac23$. Fortsetzung $F(-1) = \tfrac23$.
  ---
  **c)** Nahe $2$ ist der Zähler etwa $1 > 0$. Für $x \to 2^-$ ist $x - 2 < 0$, also $-\infty$. Für $x \to 2^+$ ergibt sich $+\infty$.
  Gleicher Grad in Zähler und Nenner, Leitkoeffizienten $1$ und $1$: waagrechte Asymptote $y = 1$.
  ---
  **d)** Nullstelle: Zähler des gekürzten Terms $x - 1 = 0$, also $x = 1$, und $1 \in D$. $x = -1$ ist **keine** Nullstelle, weil dort eine Lücke ist.
  $f(0) = \tfrac{-1}{-2} = \tfrac12$. Skizze: Hyperbelast mit Loch bei $(-1 \mid \tfrac23)$, Asymptoten $x = 2$ und $y = 1$.
```

```aufgabe
id: gs-pruefung-nullstellen
titel: Nullstellen einer Gleichung fünften Grades
niveau: 3
lernziel: 7
kompetenz: rechnen
punkte: 8
angabe: |
  *Zeitrichtwert: 15 Minuten.*

  Gegeben ist $f(x) = x^5 - 3x + 1$.

  a) Berechne $f(-2), f(-1), f(0), f(1), f(2)$ und folgere mit dem Nullstellensatz, wie viele reelle
  Nullstellen $f$ **mindestens** hat. Begründe sauber.

  b) Führe für die Nullstelle in $[0, 1]$ zwei Schritte des Bisektionsverfahrens durch und gib das
  entstehende Intervall an.
teile:
  - typ: vektor
    label: '$\big(f(-2) \mid f(-1) \mid f(0) \mid f(1) \mid f(2)\big)$'
    loesung: ["-25", "3", "1", "-1", "27"]
  - typ: zahl
    label: 'Mindestanzahl Nullstellen'
    loesung: "3"
  - typ: vektor
    label: 'Intervall nach zwei Schritten'
    namen: ['a₂', 'b₂']
    loesung: ["0.25", "0.5"]
hinweise:
  - 'Zähle die Vorzeichenwechsel zwischen benachbarten Stellen.'
  - '$f(0{,}5) = 0{,}03125 - 1{,}5 + 1 = -0{,}46875$.'
loesung: |
  Ansatz: Vorzeichenwechsel zwischen benachbarten Stellen zeigen mit dem Nullstellensatz jeweils eine Nullstelle.
  ---
  **a)** $f(-2) = -32 + 6 + 1 = -25$, $f(-1) = -1 + 3 + 1 = 3$, $f(0) = 1$, $f(1) = 1 - 3 + 1 = -1$, $f(2) = 32 - 6 + 1 = 27$.
  ---
  $f$ ist als Polynom auf ganz $\R$ stetig. Vorzeichenwechsel gibt es in $[-2, -1]$, $[0, 1]$ und $[1, 2]$. Nach dem Nullstellensatz
  liegt im Inneren jedes dieser drei Intervalle eine Nullstelle. Die Intervalle überlappen sich nicht, also sind es mindestens drei.
  ---
  **b)** $f(0) = 1 > 0$, $f(1) = -1 < 0$. Schritt 1: $m = 0{,}5$, $f(0{,}5) = -0{,}46875 < 0$, weiter mit $[0;\ 0{,}5]$.
  ---
  Schritt 2: $m = 0{,}25$, $f(0{,}25) = 0{,}0009765625 - 0{,}75 + 1 \approx 0{,}251 > 0$, weiter mit $[0{,}25;\ 0{,}5]$.
```

```aufgabe
id: gs-pruefung-voraussetzungen
titel: Voraussetzungen und Gegenbeispiele
niveau: 3
lernziel: 8
kompetenz: begruenden
punkte: 6
angabe: |
  *Zeitrichtwert: 10 Minuten.*

  a) Formuliere den Zwischenwertsatz mit allen Voraussetzungen.

  b) Gib eine Funktion $f\colon [0, 2] \to \R$ an, für die $f(0) = 0$ und $f(2) = 2$ gilt, die aber den Wert $1$
  nicht annimmt. Welche Voraussetzung des Zwischenwertsatzes ist verletzt?

  c) Gib eine auf $(0, 1)$ stetige Funktion an, die dort kein Minimum besitzt, und erkläre, warum das dem
  Satz vom Minimum nicht widerspricht.
teile:
  - typ: text
    label: 'a)'
    muster: |
      Ist $f$ stetig auf dem abgeschlossenen Intervall $[a, b]$ und liegt $c$ zwischen $f(a)$ und $f(b)$,
      dann gibt es ein $\xi \in [a, b]$ mit $f(\xi) = c$.
  - typ: text
    label: 'b)'
    muster: |
      Zum Beispiel $f(x) = 0$ für $0 \le x < 1$ und $f(x) = 2$ für $1 \le x \le 2$. Es gilt $f(0) = 0$ und $f(2) = 2$,
      aber $f$ nimmt nur die Werte $0$ und $2$ an. Verletzt ist die Stetigkeit, wegen des Sprungs bei $x = 1$.
  - typ: text
    label: 'c)'
    muster: |
      $f(x) = x$ auf $(0, 1)$: Die Werte kommen $0$ beliebig nahe, aber $0$ wird nicht angenommen, denn zu
      jedem $x$ gibt es ein kleineres $\tfrac x2$. Kein Widerspruch, weil das Intervall nicht abgeschlossen ist.
hinweise:
  - 'Für b) eignet sich eine Funktion mit einem Sprung.'
  - 'Für c) überlege, welcher Randpunkt bei einem offenen Intervall fehlt.'
loesung: |
  Ansatz: Für jede Voraussetzung sucht man eine Funktion, bei der genau diese fehlt und der Satz dann scheitert.
  ---
  **a)** Ist $f$ stetig auf $[a, b]$ und liegt $c$ zwischen $f(a)$ und $f(b)$, dann gibt es ein $\xi \in [a, b]$ mit $f(\xi) = c$.
  ---
  **b)** Treppenfunktion mit Sprung von $0$ auf $2$ bei $x = 1$. Der Wert $1$ wird übersprungen, die Voraussetzung „stetig“ fehlt.
  ---
  **c)** $f(x) = x$ auf $(0, 1)$ kommt der $0$ beliebig nahe, erreicht sie aber nicht. Der Satz verlangt ein **abgeschlossenes** Intervall. Diese Voraussetzung fehlt, also kein Widerspruch.
```

```aufgabe
id: gs-pruefung-taxi
titel: Ein Taxitarif
niveau: 3
lernziel: 6
kompetenz: modellieren
punkte: 8
angabe: |
  *Zeitrichtwert: 15 Minuten.*

  Ein Taxiunternehmen berechnet für eine Fahrt von $s$ km den Preis
  $$K(s) = \begin{cases} 4 + 2s & 0 \le s \le 5 \\ a + 1{,}6\,s & s > 5 \end{cases} \quad \text{(in Euro)}.$$
  a) Bestimme $a$ so, dass der Preis bei $5$ km nicht springt.

  b) Bestimme den Durchschnittspreis pro Kilometer $\frac{K(s)}{s}$ für sehr lange Fahrten, also $\lim\limits_{s \to \infty} \frac{K(s)}{s}$.

  c) Begründe mit dem Zwischenwertsatz, dass es eine Fahrtstrecke gibt, die genau $20$ Euro kostet, und berechne sie.
teile:
  - typ: zahl
    label: 'a) $a$ in Euro'
    loesung: "4 + 2*5 - 1.6*5"
    einheit: 'Euro'
    anzeige: '6'
  - typ: zahl
    label: 'b) Grenzwert in Euro pro km'
    loesung: "1.6"
    einheit: 'Euro/km'
    anzeige: '1{,}6'
  - typ: zahl
    label: 'c) Strecke in km'
    loesung: "(20 - 6)/1.6"
    einheit: 'km'
    anzeige: '8{,}75'
hinweise:
  - 'a) $K(5) = 14$ Euro. Der rechtsseitige Grenzwert ist $a + 8$.'
  - 'b) $\frac{a + 1{,}6\,s}{s} = \frac{a}{s} + 1{,}6$.'
  - 'c) $K(5) = 14$ und zum Beispiel $K(10) = 22$. $K$ ist stetig. Löse dann $6 + 1{,}6\,s = 20$.'
loesung: |
  Ansatz: Ein Preis ohne Sprung bedeutet Stetigkeit an der Nahtstelle $5$ km. Der Durchschnittspreis ist ein Grenzwert im Unendlichen.
  ---
  **a)** $K(5) = 4 + 10 = 14$ Euro. Rechts: $\lim\limits_{s \to 5^+}(a + 1{,}6\,s) = a + 8$. Gleichsetzen: $a + 8 = 14$, also $a = 6$ Euro.
  ---
  **b)** Für $s > 5$ ist $\frac{K(s)}{s} = \frac{6}{s} + 1{,}6 \to 1{,}6$ Euro pro km. Die Grundgebühr verteilt sich auf immer mehr Kilometer.
  ---
  **c)** Mit $a = 6$ ist $K$ auf $[5, 10]$ stetig, $K(5) = 14$ und $K(10) = 6 + 16 = 22$ Euro. Weil $20$ zwischen $14$ und $22$ liegt, gibt es nach dem Zwischenwertsatz eine Strecke mit $K(s) = 20$.
  ---
  Berechnung: $6 + 1{,}6\,s = 20 \iff s = \frac{14}{1{,}6} = 8{,}75$ km. Antwort: Eine Fahrt von $8{,}75$ km kostet genau $20$ Euro.
```

```aufgabe
id: gs-pruefung-abkuehlung
titel: Ein Werkstück kühlt ab
niveau: 3
lernziel: 4
kompetenz: modellieren
punkte: 8
angabe: |
  *Zeitrichtwert: 15 Minuten.*

  Ein frisch lackiertes Werkstück kommt aus einem Einbrennofen in eine Werkhalle. Seine Temperatur ist $t$ Minuten später
  $T(t) = 25 + 175\,e^{-0{,}04\,t}$ in °C.

  a) Berechne die Anfangstemperatur $T(0)$ und $\lim\limits_{t \to \infty} T(t)$. Deute den Grenzwert.

  b) Begründe mit dem Zwischenwertsatz, dass das Werkstück irgendwann genau $100$ °C hat, ohne die Gleichung zu lösen.
  Verwende dazu $T(30)$.

  c) Berechne den Zeitpunkt, zu dem das Werkstück $100$ °C hat. Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    label: 'a) $T(0)$ in °C'
    loesung: "25 + 175"
    einheit: '°C'
    anzeige: '200'
  - typ: zahl
    label: 'a) Grenzwert in °C'
    loesung: "25"
    einheit: '°C'
  - typ: zahl
    label: 'b) $T(30)$ in °C'
    loesung: "25 + 175*exp(-1.2)"
    einheit: '°C'
    anzeige: '77{,}7'
  - typ: zahl
    label: 'c) Zeitpunkt in min'
    loesung: "ln(175/75)/0.04"
    einheit: 'min'
    toleranz: 0.05
    anzeige: '21{,}2'
hinweise:
  - 'a) Für $t \to \infty$ geht $e^{-0{,}04\,t} \to 0$.'
  - 'b) $T$ ist als Verkettung stetiger Funktionen stetig. Liegt $100$ zwischen $T(0)$ und $T(30)$?'
  - 'c) $175\,e^{-0{,}04\,t} = 75$, also $e^{-0{,}04\,t} = \frac{3}{7}$. Logarithmieren.'
loesung: |
  Ansatz: Der Grenzwert im Unendlichen beschreibt die Endtemperatur, der Zwischenwertsatz garantiert jeden Zwischenwert.
  ---
  **a)** $T(0) = 25 + 175 = 200$ °C. Für $t \to \infty$ geht $e^{-0{,}04\,t} \to 0$, also $T(t) \to 25$ °C. Deutung: Das Werkstück kühlt auf die Hallentemperatur von $25$ °C ab. Die Gerade $T = 25$ ist waagrechte Asymptote.
  ---
  **b)** $T$ ist stetig auf $[0, 30]$. $T(30) = 25 + 175\,e^{-1{,}2} \approx 77{,}7$ °C. Weil $100$ zwischen $77{,}7$ und $200$ liegt, gibt es nach dem Zwischenwertsatz ein $t \in [0, 30]$ mit $T(t) = 100$.
  ---
  **c)** $25 + 175\,e^{-0{,}04\,t} = 100 \iff e^{-0{,}04\,t} = \frac{75}{175} = \frac37 \iff t = \frac{\ln\frac73}{0{,}04} \approx 21{,}2$ min.
  ---
  Probe: $T(21{,}2) = 25 + 175 \cdot e^{-0{,}848} \approx 25 + 175 \cdot 0{,}428 \approx 100$ °C ✓. Antwort: Nach etwa $21$ Minuten hat das Werkstück $100$ °C.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, bevor du weiterliest. Nimm dir dafür fünf Minuten und schreib in ganzen Sätzen.
antwort: |
  Eine gute Auswahl wäre zum Beispiel:

  1. $\lim\limits_{x \to x_0} f(x) = L$ heißt: Zu jedem $\varepsilon > 0$ gibt es ein $\delta > 0$, sodass alle $x$ mit
     $0 < |x - x_0| < \delta$ einen Funktionswert haben, der weniger als $\varepsilon$ von $L$ entfernt ist.
     Gleichwertig: Für jede Folge $x_n \to x_0$ mit $x_n \neq x_0$ gilt $f(x_n) \to L$.
  2. $f$ ist stetig an $x_0$, wenn der Grenzwert existiert und gleich dem Funktionswert ist. Bei stückweisen Funktionen
     vergleicht man an jeder Nahtstelle drei Werte: links, rechts und $f(x_0)$.
  3. Stetige Funktionen auf abgeschlossenen Intervallen nehmen jeden Zwischenwert an und erreichen Maximum und Minimum.
     Ohne Stetigkeit gibt es diese Garantien nicht mehr. Für Maximum und Minimum braucht man zusätzlich ein
     abgeschlossenes, beschränktes Intervall.

  Vergleiche deine Sätze mit der Zusammenfassung. Fehlt dir eine Aussage, lies die zugehörige Lektion noch einmal.
```

:::zusammenfassung
- **Grenzwert einer Funktion:** $\lim\limits_{x \to x_0} f(x) = L$ beschreibt die Werte **in der Nähe** von $x_0$, nicht an $x_0$. Man definiert ihn mit Folgen (jede Folge $x_n \to x_0$ liefert $f(x_n) \to L$) oder mit $\varepsilon$ und $\delta$. Zwei Folgen mit verschiedenen Ergebnissen widerlegen einen Grenzwert.
- **ε-δ-Beweise:** Auf dem Schmierzettel $|f(x) - L|$ so umformen, dass $|x - x_0|$ als Faktor erscheint. Einen nicht konstanten Rest mit $\delta \le 1$ nach oben abschätzen und $\delta = \min(1, \frac{\varepsilon}{K})$ wählen. $\delta$ darf von $\varepsilon$ abhängen, nicht von $x$.
- **Einseitige Grenzwerte:** Der Grenzwert existiert genau dann, wenn linker und rechter Grenzwert existieren und gleich sind.
- **Rechnen:** Grenzwertsätze gelten, wenn alle Einzelgrenzwerte existieren. Bei $\frac00$ kürzt man, erweitert mit der Gegenwurzel oder benutzt Standardgrenzwerte wie $\frac{\sin x}{x} \to 1$ (im Bogenmaß). Bei $\frac{c}{0}$ entscheidet das Vorzeichen des Nenners.
- **Unendlich:** Für $x \to \pm\infty$ dividiert man durch die höchste Potenz. Polstellen geben senkrechte Asymptoten, die Grad-Regel und die Polynomdivision geben waagrechte und schräge.
- **Stetigkeit:** $f$ ist stetig an $x_0$, wenn $\lim\limits_{x \to x_0} f(x) = f(x_0)$ gilt. Stetigkeit prüft man nur im Definitionsbereich. Störstellen sind hebbar, Sprung, Pol oder Oszillation. Nur hebbare Lücken lassen sich stetig fortsetzen.
- **Sätze über stetige Funktionen auf $[a, b]$:** Nullstellensatz und Zwischenwertsatz garantieren Werte, die Bisektion schließt Nullstellen beliebig genau ein. Der Satz vom Maximum und Minimum garantiert, dass Extremwerte angenommen werden. Jede Voraussetzung hat ein Gegenbeispiel.
- **Vertiefung:** Stetige, streng monotone Funktionen haben stetige Umkehrfunktionen. Auf $[a, b]$ ist jede stetige Funktion gleichmäßig stetig, auf offenen oder unbeschränkten Bereichen nicht unbedingt.
:::

### Die häufigsten Fehler

Jeder Fehler steht mit der Aufgabe, die ihn gezielt trainiert. Wenn du einen Fehler bei dir wiedererkennst, rechne
genau diese Aufgabe noch einmal.

1. **Eine Folge als Beweis nehmen.** Eine einzelne Folge kann einen Grenzwert nur widerlegen. Trainiert in „Wo hinkt die
   Begründung?“ und „Zwei Folgen finden, die sich widersprechen“.
2. **Grenzwert und Funktionswert verwechseln.** Der Grenzwert schaut nur auf die Nachbarschaft. Trainiert in „Grenzwert
   und Funktionswert unterscheiden“ und „Einseitige Grenzwerte berechnen“.
3. **δ falsch wählen.** $\delta$ darf nicht von $x$ abhängen, und bei einer gekrümmten Kurve zählt der kleinere der beiden Abstände zur Stelle $x_0$.
   Trainiert in „Welche Zeile ist falsch?“ und „Das größte δ an einer Parabel“.
4. **$\frac00$ als Zahl behandeln.** $\frac00$ ist weder $0$ noch $1$, sondern ein Signal zum Umformen. Trainiert in
   „Kürzen bei 0 durch 0“ und „Einen Grenzwert aus Tabellenwerten vermuten“.
5. **Summanden kürzen.** Kürzen darf man nur Faktoren. Trainiert in „Fehler beim Kürzen finden“.
6. **Den Standardgrenzwert falsch anpassen oder im Gradmaß rechnen.** Im Nenner muss dasselbe stehen wie im Sinus, und
   der Taschenrechner steht auf RAD. Trainiert in „Sinus eines Vielfachen“ und „Den Taschenrechner richtig einstellen“.
7. **Das Vorzeichen beim Pol raten.** Links und rechts den Nenner mit Testwerten prüfen. Trainiert in „Gegen unendlich
   von einer Seite“ und „Zahl durch null“.
8. **Mit unendlich rechnen wie mit einer Zahl.** „Unendlich durch unendlich“ ist nicht $1$, „unendlich minus unendlich“
   ist nicht $0$. Trainiert in „Rationale Funktionen im Unendlichen“ und „Differenz zweier großer Zahlen“.
9. **$\frac1x$ für unstetig halten.** Stetigkeit prüft man nur im Definitionsbereich. Trainiert in „Stetig im
   Definitionsbereich“.
10. **Die dritte Bedingung vergessen.** Gleiche einseitige Grenzwerte reichen nicht, der Funktionswert muss passen.
    Trainiert in „Drei Bedingungen prüfen“ und „Welche Bedingung ist verletzt?“.
11. **Den falschen Ast an der Nahtstelle nehmen.** Wo steht das Gleichheitszeichen, bei $\le$ oder bei $\ge$? Trainiert in
    „Stetig an der Nahtstelle?“ und „Einseitige Grenzwerte aus dem Graphen ablesen“.
12. **Mehr aus dem Nullstellensatz folgern, als er sagt.** Er garantiert mindestens eine Nullstelle, nicht genau eine,
    und nur bei Stetigkeit auf dem ganzen Intervall. Trainiert in „Was folgt, was nicht?“ und „Welche Temperaturen sind garantiert?“.
13. **Beim Maximum den Rand vergessen.** $f'(x) = 0$ findet nur innere Extremstellen. Trainiert in „Ein Maximum am Rand,
    Schritt für Schritt“ und „Maximum und Minimum auf einem Intervall“.

## Mündliche Prüfung

Sprich jede Antwort laut und in ganzen Sätzen, bevor du die Musterantwort aufdeckst. Prüfe danach anhand der
Kernpunkte, was gefehlt hat.

```karten
- id: gs-k-folgenkriterium
  frage: Was bedeutet lim f(x) = L für x gegen x₀? Geben Sie die Definition mit Folgen an.
  antwort: |
    Für jede Folge $(x_n)$ aus dem Definitionsbereich mit $x_n \neq x_0$ und $x_n \to x_0$ gilt $f(x_n) \to L$. Egal auf
    welchem Weg man sich der Stelle nähert, die Funktionswerte streben gegen $L$. Der Funktionswert $f(x_0)$ spielt keine
    Rolle, er muss nicht einmal existieren. Beispiel: $\frac{x^2 - 1}{x - 1}$ hat bei $1$ den Grenzwert $2$, obwohl die
    Funktion dort nicht definiert ist.
  kernpunkte:
    - 'jede Folge xₙ → x₀ mit xₙ ≠ x₀'
    - 'f(xₙ) → L'
    - 'f(x₀) spielt keine Rolle'
- id: gs-k-epsdelta
  frage: Formulieren Sie die ε-δ-Definition des Grenzwerts und erklären Sie sie anschaulich.
  antwort: |
    $\lim\limits_{x \to x_0} f(x) = L$ heißt: Zu jedem $\varepsilon > 0$ gibt es ein $\delta > 0$, sodass für alle $x$ mit
    $0 < |x - x_0| < \delta$ gilt: $|f(x) - L| < \varepsilon$. Anschaulich: Um $L$ liegt ein waagrechtes Toleranzband der
    halben Breite $\varepsilon$. Man findet um $x_0$ einen senkrechten Streifen der halben Breite $\delta$, in dem der Graph
    (außer an $x_0$) ganz im Band verläuft. Das muss für jedes noch so schmale Band klappen.
  kernpunkte:
    - 'zu jedem ε > 0 gibt es δ > 0'
    - 'aus 0 < |x − x₀| < δ folgt |f(x) − L| < ε'
    - 'Bild: Band um L, Streifen um x₀'
- id: gs-k-quantoren
  frage: Warum darf δ von ε abhängen, aber nicht von x?
  antwort: |
    Die Definition hat eine feste Reihenfolge: Erst wird $\varepsilon$ vorgegeben, dann wird $\delta$ gewählt, und erst danach
    muss die Abschätzung für **alle** $x$ im Streifen gelten. Beim Wählen von $\delta$ kennt man $x$ also noch nicht. Eine
    Wahl wie $\delta = \frac{\varepsilon}{|x + 2|}$ ist deshalb unzulässig. Bei einer Parabel schätzt man den störenden Faktor
    stattdessen mit $\delta \le 1$ ab und wählt $\delta = \min(1, \frac{\varepsilon}{K})$.
  kernpunkte:
    - 'Reihenfolge: ε, dann δ, dann alle x'
    - 'δ hängt von ε ab, nicht von x'
    - 'Abhilfe: δ = min(1, ε/K)'
- id: gs-k-widerlegen
  frage: Wie zeigt man, dass ein Grenzwert nicht existiert? Geben Sie ein Beispiel.
  antwort: |
    Man gibt zwei Folgen $x_n \to x_0$ und $y_n \to x_0$ an, für die $f(x_n)$ und $f(y_n)$ gegen verschiedene Zahlen streben.
    Oder man zeigt, dass links- und rechtsseitiger Grenzwert verschieden sind. Beispiel: Bei der Vorzeichenfunktion liefert
    $\frac1n$ den Wert $1$ und $-\frac1n$ den Wert $-1$. Bei $\sin\frac1x$ liefern geeignete Folgen die Werte $1$ und $0$.
  kernpunkte:
    - 'zwei Folgen mit verschiedenen Grenzwerten'
    - 'oder einseitige Grenzwerte verschieden'
    - 'Beispiel Signum oder sin(1/x)'
- id: gs-k-einseitig
  frage: Wie hängen einseitige Grenzwerte und der Grenzwert zusammen?
  antwort: |
    Ist $f$ links und rechts von $x_0$ definiert, existiert $\lim\limits_{x \to x_0} f(x)$ genau dann, wenn beide einseitigen
    Grenzwerte existieren und gleich sind. Dann ist das auch der Grenzwert. Beim Paketpreis mit $4{,}50$ Euro bis $2$ kg und
    $7{,}90$ Euro darüber existieren beide einseitigen Grenzwerte, sind aber verschieden. Also gibt es dort keinen Grenzwert.
  kernpunkte:
    - 'Grenzwert existiert genau dann, wenn beide einseitigen existieren und gleich sind'
    - 'Beispiel Sprung'
- id: gs-k-rechenregeln
  frage: Welche Rechenregeln gelten für Grenzwerte, und welche Voraussetzung wird oft vergessen?
  antwort: |
    Existieren $\lim f = a$ und $\lim g = b$, dann gilt $\lim(f \pm g) = a \pm b$, $\lim(f g) = a b$ und $\lim \frac fg = \frac ab$
    für $b \neq 0$. Bewiesen werden sie mit dem Folgenkriterium aus den Grenzwertsätzen für Folgen in Kapitel 11. Oft
    vergessen wird, dass beide Einzelgrenzwerte existieren müssen. Bei $x \cdot \sin\frac1x$ hat $\sin\frac1x$ keinen
    Grenzwert. Dort hilft der Einschließungssatz, nicht die Produktregel.
  kernpunkte:
    - 'Summe, Produkt, Quotient (Nenner ≠ 0)'
    - 'Voraussetzung: Einzelgrenzwerte existieren'
    - 'Beweis über Folgen (Kapitel 11)'
- id: gs-k-sinx
  frage: Warum gilt lim sin x / x = 1, und warum nur im Bogenmaß?
  antwort: |
    Am Einheitskreis gilt für $0 < x < \frac{\pi}{2}$ der Flächenvergleich Dreieck $<$ Kreissektor $<$ Dreieck, also
    $\frac{\sin x}{2} < \frac x2 < \frac{\tan x}{2}$. Daraus folgt $\cos x < \frac{\sin x}{x} < 1$. Mit dem Einschließungssatz
    folgt der Grenzwert $1$. Die Sektorfläche ist nur dann $\frac x2$, wenn $x$ im Bogenmaß gemessen wird. Im Gradmaß käme
    $\frac{\pi}{180}$ heraus.
  kernpunkte:
    - 'Flächenvergleich sin x < x < tan x'
    - 'cos x < sin x / x < 1 und Einschließungssatz'
    - 'Sektorfläche x/2 nur im Bogenmaß'
- id: gs-k-asymptoten
  frage: Welche Asymptoten kann eine rationale Funktion haben, und wie bestimmt man sie?
  antwort: |
    Senkrechte Asymptoten liegen an Nullstellen des Nenners, die nach dem Kürzen übrig bleiben. Dort hat die Funktion
    Polstellen. Für $x \to \pm\infty$ entscheidet der Gradvergleich: Ist der Zählergrad kleiner, ist $y = 0$ Asymptote.
    Bei gleichem Grad ist es der Quotient der Leitkoeffizienten. Ist der Zählergrad um $1$ größer, liefert die
    Polynomdivision eine schräge Asymptote. Das braucht man für die Kurvendiskussion in Kapitel 9.
  kernpunkte:
    - 'senkrecht: Nullstelle des gekürzten Nenners'
    - 'waagrecht: Gradvergleich'
    - 'schräg: Polynomdivision bei Grad n + 1'
- id: gs-k-stetigkeit
  frage: Definieren Sie Stetigkeit an einer Stelle x₀.
  antwort: |
    $f$ ist stetig an $x_0 \in D$, wenn $\lim\limits_{x \to x_0} f(x) = f(x_0)$ gilt. Darin stecken drei Bedingungen: $f(x_0)$
    ist definiert, der Grenzwert existiert, und beide sind gleich. Mit $\varepsilon$ und $\delta$: Zu jedem $\varepsilon > 0$
    gibt es $\delta > 0$ mit $|f(x) - f(x_0)| < \varepsilon$ für alle $x \in D$ mit $|x - x_0| < \delta$. Mit Folgen: Aus
    $x_n \to x_0$ folgt $f(x_n) \to f(x_0)$.
  kernpunkte:
    - 'lim f(x) = f(x₀)'
    - 'drei Bedingungen'
    - 'ε-δ- oder Folgenversion'
- id: gs-k-einsdurchx
  frage: Ist f(x) = 1/x stetig?
  antwort: |
    Ja. Stetigkeit wird nur an Stellen des Definitionsbereichs geprüft, und $\frac1x$ ist an jeder Stelle von
    $\R\setminus\{0\}$ stetig. An der Stelle $0$ ist $f$ nicht definiert. Dort hat sie eine Polstelle, ist aber weder stetig
    noch unstetig. Die Bleistift-Regel „ohne Absetzen zeichnen“ ist nur eine grobe Vorstellung für Funktionen auf Intervallen und führt hier in die Irre.
  kernpunkte:
    - 'ja, stetig auf ℝ \ {0}'
    - 'Stetigkeit nur im Definitionsbereich'
    - '0 ist Definitionslücke (Pol)'
- id: gs-k-unstetigkeiten
  frage: Welche Arten von Unstetigkeitsstellen gibt es? Welche lassen sich stetig fortsetzen?
  antwort: |
    Hebbar: Der Grenzwert existiert, der Funktionswert fehlt oder passt nicht, zum Beispiel $\frac{x^2 - 1}{x - 1}$ bei $1$.
    Sprung: Die einseitigen Grenzwerte sind verschieden, zum Beispiel die Vorzeichenfunktion bei $0$. Pol: Ein einseitiger
    Grenzwert ist unendlich, zum Beispiel $\frac1x$ bei $0$. Oszillation: Ein einseitiger Grenzwert existiert nicht, zum
    Beispiel $\sin\frac1x$ bei $0$. Stetig fortsetzen lassen sich nur hebbare Lücken, und zwar eindeutig mit dem Grenzwert.
  kernpunkte:
    - 'hebbar, Sprung, Pol, Oszillation mit Beispiel'
    - 'nur hebbare Lücken fortsetzbar'
    - 'Fortsetzungswert = Grenzwert, eindeutig'
- id: gs-k-stueckweise
  frage: Wie prüft man eine stückweise definierte Funktion auf Stetigkeit? Geben Sie eine Funktion an, die bei 0 unstetig ist, egal wie man f(0) wählt.
  antwort: |
    Im Inneren der Teilbereiche sind die Terme stetig, etwa Polynome, $\sin$, $\cos$ oder $e^x$. An jeder Nahtstelle berechnet
    man den linksseitigen Grenzwert mit dem linken Term, den rechtsseitigen mit dem rechten Term und liest den
    Funktionswert ab. Stetig genau dann, wenn alle drei gleich sind. Beispiel für eine unvermeidbare Unstetigkeit:
    $g(x) = x^2$ für $x < 0$ und $g(x) = x + 2$ für $x > 0$. Die einseitigen Grenzwerte $0$ und $2$ sind verschieden,
    also passt kein Wert $g(0)$.
  kernpunkte:
    - 'Inneres: Terme stetig'
    - 'Nahtstelle: links, rechts, Funktionswert vergleichen'
    - 'verschiedene einseitige Grenzwerte: nicht reparierbar'
- id: gs-k-zws
  frage: Formulieren Sie den Zwischenwertsatz. Wozu braucht man die Voraussetzungen?
  antwort: |
    Ist $f$ stetig auf dem abgeschlossenen Intervall $[a, b]$, dann nimmt $f$ jeden Wert zwischen $f(a)$ und $f(b)$ an. Ohne
    Stetigkeit kann $f$ einen Wert überspringen, etwa eine Treppenfunktion. Auch eine Lücke im Intervall macht den Satz ungültig:
    $\frac1x$ hat $f(-1) = -1$ und $f(1) = 1$, aber keine Nullstelle, weil die Stelle $0$ fehlt. Der Satz sagt nichts darüber,
    wo und wie oft der Wert angenommen wird.
  kernpunkte:
    - 'stetig auf [a, b], jeder Wert zwischen f(a) und f(b)'
    - 'Gegenbeispiele: Sprung, 1/x'
    - 'keine Aussage über Lage und Anzahl'
- id: gs-k-nullstellensatz-beweis
  frage: Wie beweist man den Nullstellensatz, und was hat das mit der Vollständigkeit von ℝ zu tun?
  antwort: |
    Durch fortgesetztes Halbieren erhält man Intervalle $[a_n, b_n]$ mit $f(a_n) < 0 < f(b_n)$, deren Länge gegen $0$ geht.
    Die Folge $(a_n)$ wächst monoton und ist beschränkt. Nach dem Monotoniekriterium aus Kapitel 11, also wegen der
    Vollständigkeit von $\R$, konvergiert sie gegen ein $\xi$, und $(b_n)$ ebenso. Aus der Stetigkeit folgt $f(\xi) \le 0$ und
    $f(\xi) \ge 0$, also $f(\xi) = 0$. In $\Q$ würde das scheitern: $x^2 - 2$ hat dort keine Nullstelle.
  kernpunkte:
    - 'Intervallhalbierung (Bisektion)'
    - 'Monotoniekriterium, Vollständigkeit von ℝ'
    - 'Stetigkeit liefert f(ξ) = 0'
- id: gs-k-maxmin
  frage: Was sagt der Satz vom Maximum und Minimum? Geben Sie Gegenbeispiele, wenn eine Voraussetzung fehlt.
  antwort: |
    Eine stetige Funktion auf einem abgeschlossenen, beschränkten Intervall $[a, b]$ ist beschränkt und nimmt dort ein
    Maximum und ein Minimum an. Gegenbeispiele: $x$ auf $(0, 1)$ hat kein Maximum, weil das Intervall offen ist. $\frac1x$
    auf $(0, 1]$ ist unbeschränkt. $x$ auf $[0, \infty)$ ist unbeschränkt. Eine Funktion mit Sprung kann den Wert,
    dem sie beliebig nahe kommt, verfehlen. Praktisch heißt das: Bei Extremwertaufgaben auf $[a, b]$ gibt es eine Lösung, und man prüft auch die Ränder.
  kernpunkte:
    - 'stetig auf [a, b]: Maximum und Minimum werden angenommen'
    - 'Gegenbeispiele für jede Voraussetzung'
    - 'Randpunkte prüfen'
- id: gs-k-stetig-diffbar
  frage: Wie hängen Stetigkeit und Differenzierbarkeit zusammen?
  antwort: |
    Jede an einer Stelle differenzierbare Funktion ist dort auch stetig. Den Beweis führt man in Kapitel 13. Die Umkehrung
    gilt nicht: $|x|$ ist bei $0$ stetig, hat dort aber einen Knick. Die Differenzenquotienten sind von rechts $1$ und von
    links $-1$, also gibt es keine Ableitung. Bei stückweisen Funktionen prüft man deshalb zuerst die Stetigkeit und erst
    dann die einseitigen Ableitungen.
  kernpunkte:
    - 'aus differenzierbar folgt stetig'
    - 'Umkehrung falsch: |x| bei 0'
    - 'Knick: einseitige Ableitungen verschieden'
- id: gs-k-umkehr-glm
  frage: (Vertiefung) Wann ist eine Umkehrfunktion stetig, und was bedeutet gleichmäßig stetig?
  antwort: |
    Ist $f$ stetig und streng monoton auf einem Intervall, dann ist das Bild wieder ein Intervall, und die Umkehrfunktion ist
    stetig und streng monoton. So erhält man $\sqrt x$, $\ln x$ und $\arcsin x$. Gleichmäßig stetig heißt: Zu jedem
    $\varepsilon$ gibt es ein $\delta$, das an allen Stellen zugleich passt. $\frac1x$ ist auf $(0, 1)$ stetig, aber nicht
    gleichmäßig stetig. Auf einem abgeschlossenen, beschränkten Intervall ist jede stetige Funktion gleichmäßig stetig.
  kernpunkte:
    - 'stetig und streng monoton: Umkehrfunktion ist stetig'
    - 'gleichmäßig: ein δ für alle Stellen'
    - 'Gegenbeispiel 1/x auf (0, 1), Satz von Heine'
```
