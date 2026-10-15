---
nummer: 11
titel: Grenzwerte von Folgen
kurz: Die exakte ε-N-Definition, Beweise mit Grenzwerten, Grenzwertsätze, Monotoniekriterium, Vollständigkeit von ℝ, Teilfolgen und unendliche Reihen.
teil: B
stunden: 20
pruefungsgewicht: 3
voraussetzungen: [folgen-reihen, zahlen, gleichungen]
lernziele:
  - die ε-N-Definition des Grenzwerts in Worten und mit Quantoren korrekt formulieren und an Beispielen und Gegenbeispielen erklären
  - zu gegebenem ε das kleinste passende N berechnen und einen Grenzwert mit der ε-N-Definition lückenlos beweisen
  - Nullfolgen erkennen, mit ihnen rechnen und bestimmte von unbestimmter Divergenz unterscheiden und begründen
  - die Eindeutigkeit des Grenzwerts und die Beschränktheit konvergenter Folgen beweisen und Gegenbeispiele zur Umkehrung angeben
  - Grenzwerte mit Grenzwertsätzen, Einschließungssatz, höchster Potenz, Wurzeltrick und Standardgrenzwerten berechnen
  - Monotonie und Beschränktheit einer Folge lückenlos beweisen und Infimum und Supremum angeben
  - das Monotoniekriterium auf explizite und rekursive Folgen anwenden und die Vollständigkeit von ℝ erklären
  - Teilfolgen, Häufungspunkte und Cauchy-Folgen erklären und den Satz von Bolzano-Weierstraß anwenden (Vertiefung)
  - unendliche Reihen über ihre Partialsummen untersuchen, geometrische Reihen summieren und Konvergenzkriterien begründet anwenden
---

In [Kapitel 8](/lernen/mathe3/folgen-reihen) hast du Folgen kennengelernt. Du hast gesehen, dass sich
manche Folgen einer Zahl „nähern“. Zum Beispiel kommen die Zahlen $1;\ \frac12;\ \frac13;\ \frac14;\ \dots$
der Null immer näher. Für Mathematik 3 reicht dieses „nähert sich“ nicht mehr. Laut Prüfungsordnung gehört
die **Exaktifizierung der Infinitesimalrechnung** zum Stoff. Das Wort bedeutet: Man macht die anschaulichen
Ideen der Analysis so genau, dass man mit ihnen **Beweise** führen kann. Diese Arbeit beginnt in diesem Kapitel.

Warum ist das so wichtig? Fast alles Weitere baut auf dem Grenzwert von Folgen auf:

- Grenzwerte von Funktionen und Stetigkeit in [Kapitel 12](/lernen/mathe3/grenzwerte-stetigkeit).
- Die Ableitung als Grenzwert von Differenzenquotienten in [Kapitel 13](/lernen/mathe3/differenzierbarkeit).
- Das Integral als Grenzwert von Summen in [Kapitel 14](/lernen/mathe3/integrierbarkeit).

**Was kommt in der Prüfung?** In der schriftlichen Prüfung gibt es typischerweise eine Folgenaufgabe mit
vier Teilen. Du sollst die ersten Glieder angeben und eine Vermutung über die Monotonie aufstellen **und beweisen**.
Danach sollst du **begründen**, ob die Folge beschränkt ist, und den Grenzwert bestimmen. In der mündlichen
Prüfung kommen Definitionen und kurze Beweise. Typische Fragen sind: „Definieren Sie den Grenzwert einer Folge.“
„Zeigen Sie, dass eine konvergente Folge beschränkt ist.“ „Gilt die Umkehrung?“ „Warum divergiert die
harmonische Reihe?“

**Wie dieses Kapitel aufgebaut ist:** Die ersten vier Abschnitte gehen sehr langsam vor. Sie erklären die
Definition des Grenzwerts, die sogenannte $\varepsilon$-$N$-Definition. Sie ist die schwierigste Stelle des
ganzen Kurses. Fast alle Menschen brauchen mehrere Anläufe, bis sie sitzt. Das ist normal und kein Zeichen
dafür, dass dir etwas fehlt. Lies diese Abschnitte langsam, rechne jedes Zahlenbeispiel mit und sprich die
Definition laut. Danach geht es um Rechenregeln, um Beweise von Monotonie und Beschränktheit und am Ende um
unendliche Summen.

:::vorwissen
Du brauchst aus früheren Kapiteln:

- den **Betrag als Abstand** auf der Zahlengeraden, also $|x - a|$ als Entfernung von $x$ und $a$
  ([Kapitel 1, Abschnitt „Betrag und Intervalle“](/lernen/mathe3/zahlen/betrag-und-intervalle)).
- **Ungleichungen umformen**, besonders: Beim Multiplizieren oder Dividieren mit einer negativen Zahl dreht sich das
  Ungleichheitszeichen um ([Kapitel 2, Abschnitt „Ungleichungen“](/lernen/mathe3/gleichungen/ungleichungen)).
- **Logarithmen**, um Gleichungen wie $0{,}9^n = 0{,}01$ nach $n$ aufzulösen ([Kapitel 1, Abschnitt „Logarithmen“](/lernen/mathe3/zahlen/logarithmen)).
- **Folgen** in expliziter und rekursiver Darstellung, Monotonie, die geometrische Summenformel und die
  vollständige Induktion ([Kapitel 8](/lernen/mathe3/folgen-reihen)).

Die folgende Eingangsdiagnose prüft genau diese Dinge. Wenn du bei einer Frage danebenliegst, lies den
verlinkten Abschnitt noch einmal, bevor du weitermachst.
:::

:::anwendung
Wo brauchst du Grenzwerte später? Im Informatikstudium beginnt die Analysis-Vorlesung fast immer mit genau
diesem Stoff. Numerische Verfahren (zum Beispiel das Newton-Verfahren) rechnen so lange, bis der Fehler unter
einer vorgegebenen Toleranz liegt. Ob das jemals passiert, sagt der Grenzwertbegriff. Und in der Laufzeitanalyse
von Algorithmen vergleicht man, wie schnell Folgen wie $n^2$ und $2^n$ wachsen.
:::

### Eingangsdiagnose

```aufgabe
id: gf-diag-betrag
titel: Betrag als Abstand
niveau: 1
art: check
angabe: |
  Welche Zahlen $x$ erfüllen die Ungleichung $|x - 3| < 0{,}5$?
  Herkunft: [Kapitel 1, „Betrag und Intervalle“](/lernen/mathe3/zahlen/betrag-und-intervalle).
teile:
  - typ: auswahl
    optionen:
      - 'alle $x$ mit $2{,}5 < x < 3{,}5$'
      - 'alle $x$ mit $2{,}5 \le x \le 3{,}5$'
      - 'alle $x$ mit $-0{,}5 < x < 0{,}5$'
      - 'alle $x$ mit $x < 3{,}5$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Die Ungleichung ist **echt** ($<$, nicht $\le$). Die Ränder $2{,}5$ und $3{,}5$ haben den Abstand
          genau $0{,}5$ von $3$, also nicht weniger als $0{,}5$.
      - wert: 2
        meldung: |
          $|x - 3|$ ist der Abstand von $x$ zur Zahl $3$, nicht zur Zahl $0$. Die gesuchten Zahlen liegen also
          rund um $3$.
      - wert: 3
        meldung: |
          Du hast nur die rechte Grenze beachtet. Auch $x = 0$ erfüllt $x < 3{,}5$, hat aber den Abstand $3$ von $3$.
          Der Abstand muss auf **beiden** Seiten klein sein.
hinweise:
  - '$|x - 3|$ ist die Entfernung von $x$ und $3$ auf der Zahlengeraden.'
loesung: |
  $|x - 3| < 0{,}5$ heißt: $x$ ist weniger als $0{,}5$ von $3$ entfernt.
  ---
  Also $3 - 0{,}5 < x < 3 + 0{,}5$, das heißt $2{,}5 < x < 3{,}5$. Die Ränder gehören nicht dazu.
```

```aufgabe
id: gf-diag-ungleichung
titel: Eine Bruchungleichung lösen
niveau: 1
art: check
angabe: |
  Für welche positiven ganzen Zahlen $n$ gilt $\dfrac{5}{n + 2} < 0{,}1$? Gib die kleinste solche Zahl $n$ an.
  Herkunft: [Kapitel 2, „Ungleichungen“](/lernen/mathe3/gleichungen/ungleichungen).
teile:
  - typ: zahl
    label: 'kleinstes $n$'
    loesung: "49"
    fehler:
      - wert: "48"
        meldung: |
          Für $n = 48$ ist $\frac{5}{50} = 0{,}1$, also **nicht kleiner** als $0{,}1$. Die Rechnung liefert $n > 48$,
          und die kleinste ganze Zahl, die **echt größer** als $48$ ist, ist nicht $48$.
      - wert: "50"
        meldung: |
          Du hast $n + 2 > 50$ erhalten, aber vergessen, auf beiden Seiten $2$ abzuziehen. Bestimme die Bedingung für $n$ selbst.
hinweise:
  - 'Multipliziere beide Seiten mit $n + 2$ (das ist positiv, also bleibt $<$) und dividiere durch $0{,}1$.'
loesung: |
  Weil $n + 2 > 0$ ist, darf man mit $n + 2$ multiplizieren, ohne das Zeichen zu drehen: $5 < 0{,}1\,(n + 2)$.
  Dividieren durch $0{,}1$ ergibt $50 < n + 2$, also $n > 48$.
  ---
  Die kleinste ganze Zahl, die echt größer als $48$ ist, ist $49$. Probe: $\frac{5}{51} \approx 0{,}098 < 0{,}1$.
```

```aufgabe
id: gf-diag-folgenglied
titel: Das nächste Folgenglied
niveau: 1
art: check
angabe: |
  Gegeben ist $a_n = \dfrac{n + 1}{2n}$. Gib $a_{n+1}$ als Term in $n$ an.
  Herkunft: [Kapitel 8, „Was ist eine Folge?“](/lernen/mathe3/folgen-reihen/was-ist-eine-folge).
teile:
  - typ: term
    label: '$a_{n+1} =$'
    variable: n
    bereich: [1, 10]
    loesung: "(n+2)/(2n+2)"
    fehler:
      - wert: "(n+1)/(2n) + 1"
        meldung: |
          Du hast $1$ zum **Folgenglied** addiert. Gemeint ist aber: Man setzt überall, wo $n$ steht, den Ausdruck $n + 1$ ein.
      - wert: "(n+2)/(2n)"
        meldung: |
          Im Zähler hast du $n + 1$ eingesetzt, im Nenner nicht. Auch das $n$ im Nenner wird durch $n + 1$ ersetzt.
hinweise:
  - 'Ersetze **jedes** $n$ durch $(n + 1)$, mit Klammer.'
loesung: |
  Jedes $n$ wird durch $(n + 1)$ ersetzt: $a_{n+1} = \frac{(n + 1) + 1}{2(n + 1)}$.
  ---
  Vereinfacht: $a_{n+1} = \frac{n + 2}{2n + 2}$. Probe mit $n = 1$: $a_2 = \frac{3}{4}$, und der Term liefert $\frac{3}{4}$.
```

```aufgabe
id: gf-diag-logarithmus
titel: Ab wann ist eine Potenz klein genug?
niveau: 1
art: check
angabe: |
  Ab welcher natürlichen Zahl $n$ gilt $0{,}5^n < 0{,}01$? Gib die kleinste solche Zahl an.
  Herkunft: [Kapitel 1, „Logarithmen“](/lernen/mathe3/zahlen/logarithmen).
teile:
  - typ: zahl
    label: 'kleinstes $n$'
    loesung: "7"
    fehler:
      - wert: "6"
        meldung: |
          Die Rechnung liefert $n > 6{,}64$. Du hast abgerundet. Prüfe selbst: $0{,}5^6 = 0{,}015625$ ist größer als $0{,}01$.
hinweise:
  - 'Logarithmieren: $n \cdot \ln 0{,}5 < \ln 0{,}01$. Achtung, $\ln 0{,}5$ ist negativ.'
loesung: |
  Logarithmieren auf beiden Seiten: $n \ln 0{,}5 < \ln 0{,}01$. Weil $\ln 0{,}5 < 0$ ist, dreht sich beim Dividieren das Zeichen um:
  $n > \frac{\ln 0{,}01}{\ln 0{,}5} \approx 6{,}64$.
  ---
  Kleinste natürliche Zahl: $7$. Probe: $0{,}5^7 = 0{,}0078 < 0{,}01$, aber $0{,}5^6 = 0{,}0156$.
```

```aufgabe
id: gf-diag-monoton
titel: Was heißt monoton wachsend?
niveau: 1
art: check
angabe: |
  Wann heißt eine Folge $(a_n)$ **monoton wachsend**?
  Herkunft: [Kapitel 8, „Monotonie und Beschränktheit“](/lernen/mathe3/folgen-reihen/monotonie-und-beschraenktheit).
teile:
  - typ: auswahl
    optionen:
      - 'wenn $a_{n+1} \ge a_n$ für **alle** $n$ gilt'
      - 'wenn $a_2 \ge a_1$ gilt'
      - 'wenn die Folge über jede Grenze wächst'
      - 'wenn $a_n \ge 0$ für alle $n$ gilt'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Zwei Glieder reichen nicht. Die Folge $1, 2, 0, 5, \dots$ hat $a_2 \ge a_1$, fällt aber danach. Die Bedingung muss für **jedes** Paar aufeinanderfolgender Glieder gelten.
      - wert: 2
        meldung: |
          Das verwechselt „wachsend“ mit „unbeschränkt“. Die Folge $1 - \frac1n$ wächst, bleibt aber immer unter $1$.
      - wert: 3
        meldung: |
          Positive Glieder sagen nichts über die Reihenfolge. Die Folge $\frac1n$ ist positiv, aber fallend.
hinweise:
  - 'Vergleiche jedes Glied mit seinem Nachfolger.'
loesung: |
  Monoton wachsend heißt: Jedes Glied ist mindestens so groß wie das vorige, also $a_{n+1} \ge a_n$ für alle $n$.
  ---
  Bei „streng monoton wachsend“ verlangt man sogar $a_{n+1} > a_n$.
```

```aufgabe
id: gf-diag-geosumme
titel: Endliche geometrische Summe
niveau: 1
art: check
angabe: |
  Berechne $1 + \frac13 + \frac19 + \frac{1}{27}$ mit der geometrischen Summenformel. Gib das Ergebnis als Bruch an.
  Herkunft: [Kapitel 8, „Endliche geometrische Reihen“](/lernen/mathe3/folgen-reihen/endliche-geometrische-reihen).
teile:
  - typ: zahl
    label: 'Summe'
    loesung: "(1 - (1/3)^4)/(1 - 1/3)"
    anzeige: '\tfrac{40}{27}'
    fehler:
      - wert: "3/2"
        meldung: |
          $\frac{1}{1 - q}$ ist der Wert der **unendlichen** Summe. Hier sind es nur vier Summanden. Die endliche Formel hat im Zähler zusätzlich $1 - q^n$.
      - wert: "(1 - (1/3)^3)/(1 - 1/3)"
        meldung: |
          Du hast mit $n = 3$ gerechnet. Zähle die Summanden: Es sind vier ($1$, $\frac13$, $\frac19$, $\frac{1}{27}$).
hinweise:
  - 'Formel: $1 + q + \dots + q^{n-1} = \frac{1 - q^n}{1 - q}$ mit $q = \frac13$ und $n = 4$.'
loesung: |
  Es ist eine geometrische Summe mit erstem Glied $1$, Quotient $q = \frac13$ und $n = 4$ Summanden.
  ---
  $\frac{1 - (1/3)^4}{1 - 1/3} = \frac{80/81}{2/3} = \frac{80}{81}\cdot\frac32 = \frac{40}{27} \approx 1{,}48$.
```

```aufgabe
id: gf-diag-bruchterm
titel: Eine Differenz auf einen Bruch bringen
niveau: 1
art: check
angabe: |
  Schreibe $3 - \dfrac{3n - 2}{n + 1}$ als einen einzigen Bruch und vereinfache.
  Herkunft: [Kapitel 1, „Bruchterme“](/lernen/mathe3/zahlen/bruchterme).
teile:
  - typ: term
    label: '$3 - \frac{3n - 2}{n + 1} =$'
    variable: n
    bereich: [1, 10]
    loesung: "5/(n+1)"
    fehler:
      - wert: "1/(n+1)"
        meldung: |
          Vorzeichenfehler beim Minus vor dem Bruch: $3(n + 1) - (3n - 2) = 3n + 3 - 3n + 2$. Das Minus gilt für den **ganzen** Zähler, also wird aus $-2$ ein $+2$.
      - wert: "(3-3n+2)/(n+1)"
        meldung: |
          Die $3$ muss zuerst auf den Nenner $n + 1$ gebracht werden: $3 = \frac{3(n+1)}{n+1}$.
hinweise:
  - 'Gemeinsamer Nenner: $3 = \frac{3(n + 1)}{n + 1}$. Dann den Zähler mit Klammer abziehen.'
loesung: |
  Auf den gemeinsamen Nenner bringen: $3 - \frac{3n - 2}{n + 1} = \frac{3(n + 1) - (3n - 2)}{n + 1}$.
  ---
  Zähler: $3n + 3 - 3n + 2 = 5$. Ergebnis $\frac{5}{n + 1}$. Probe mit $n = 1$: $3 - \frac12 = \frac52$ und $\frac{5}{2}$ ✓.
```

## Was heißt „sich nähern“? Abstand und ε-Umgebung

```aufgabe
id: gf-v-abstand
titel: Abstand zweier Zahlen
niveau: 1
art: check
angabe: |
  Wie groß ist der Abstand der Zahlen $1{,}9$ und $2$ auf der Zahlengeraden, also $|1{,}9 - 2|$?
  (Vorwissen aus [Kapitel 1, „Betrag und Intervalle“](/lernen/mathe3/zahlen/betrag-und-intervalle).)
teile:
  - typ: zahl
    label: '$|1{,}9 - 2| =$'
    loesung: "0.1"
    fehler:
      - wert: "-0.1"
        meldung: |
          $1{,}9 - 2 = -0{,}1$ ist richtig gerechnet, aber der **Betrag** macht daraus eine nichtnegative Zahl. Ein Abstand ist nie negativ.
hinweise:
  - 'Der Betrag einer Zahl ist ihr Abstand von $0$, also immer $\ge 0$.'
loesung: |
  $1{,}9 - 2 = -0{,}1$.
  ---
  Der Betrag entfernt das Minuszeichen: $|-0{,}1| = 0{,}1$. Die beiden Zahlen liegen $0{,}1$ auseinander.
```

**Worum geht es in diesem Abschnitt?** Wir wollen genau sagen, was es heißt, dass die Glieder einer
Folge einer Zahl „beliebig nahe kommen und dort bleiben“. Dazu brauchen wir zwei Werkzeuge: den
**Abstand** zweier Zahlen und die **$\varepsilon$-Umgebung**.

### Ein Bild aus der Werkstatt

Stell dir eine Maschine vor, die Metallstifte mit einer Soll-Länge von $2$ cm herstellt. Kein Stift ist exakt
$2$ cm lang. Deshalb gibt es eine **Toleranz**: Ein Stift ist in Ordnung, wenn er höchstens $0{,}1$ cm vom Sollmaß
abweicht. Die Qualitätsprüferin legt also ein **Toleranzband** von $1{,}9$ cm bis $2{,}1$ cm fest.

Eine neue Maschine läuft erst warm. Die ersten Stifte sind noch zu kurz, später werden sie immer genauer. Die
Prüferin will wissen: Ab welchem Stift sind **alle weiteren** Stifte im Toleranzband? Und wenn sie die Toleranz
verschärft, etwa auf $0{,}01$ cm, gibt es dann wieder einen solchen Stift? Genau diese Fragen stellt die Definition
des Grenzwerts. Das Sollmaß ist der Grenzwert, die Toleranz heißt $\varepsilon$.

### Der Abstand

Der **Abstand** zweier Zahlen $x$ und $a$ auf der Zahlengeraden ist $|x - a|$. Der Betrag sorgt dafür, dass der
Abstand nie negativ ist. Zwei Zahlenbeispiele:

- $|1{,}9 - 2| = |-0{,}1| = 0{,}1$. Die Zahl $1{,}9$ liegt $0{,}1$ links von $2$.
- $|2{,}05 - 2| = 0{,}05$. Die Zahl $2{,}05$ liegt $0{,}05$ rechts von $2$.

Die Ungleichung $|x - a| < \varepsilon$ liest man: „$x$ ist weniger als $\varepsilon$ von $a$ entfernt.“ Sie ist
gleichwertig mit der Doppelungleichung $a - \varepsilon < x < a + \varepsilon$. Diese Übersetzung brauchst du in
diesem Kapitel ständig.

```aufgabe
id: gf-v-doppelungleichung
titel: Betrag in eine Doppelungleichung übersetzen
niveau: 1
art: check
angabe: |
  Welche Doppelungleichung bedeutet dasselbe wie $|x - 7| < 0{,}3$?
teile:
  - typ: auswahl
    optionen:
      - '$6{,}7 < x < 7{,}3$'
      - '$-0{,}3 < x < 0{,}3$'
      - '$7 < x < 7{,}3$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Das wäre $|x| < 0{,}3$, also der Abstand zu $0$. Hier geht es um den Abstand zu $7$.
      - wert: 2
        meldung: |
          Auch Zahlen **links** von $7$ können nahe bei $7$ liegen, zum Beispiel $6{,}9$. Das Band reicht nach beiden Seiten.
hinweise:
  - '„Weniger als $0{,}3$ von $7$ entfernt“: nach links und nach rechts.'
loesung: |
  $|x - 7| < 0{,}3$ heißt: $x$ ist weniger als $0{,}3$ von $7$ entfernt.
  ---
  Nach links bis $7 - 0{,}3 = 6{,}7$, nach rechts bis $7 + 0{,}3 = 7{,}3$. Also $6{,}7 < x < 7{,}3$.
```

### Die ε-Umgebung

Der griechische Buchstabe $\varepsilon$ heißt **Epsilon**. In der Analysis steht er traditionell für eine kleine
positive Zahl, eben die Toleranz.

Die **$\varepsilon$-Umgebung** von $a$ ist in Alltagssprache das Toleranzband um $a$: alle Zahlen, die weniger als
$\varepsilon$ von $a$ entfernt sind. Beispiel: Die $0{,}1$-Umgebung von $2$ besteht aus allen Zahlen zwischen $1{,}9$
und $2{,}1$, ohne die Ränder. Nun die exakte Definition.

:::definition[ε-Umgebung]
Für eine reelle Zahl $a$ und eine Zahl $\varepsilon > 0$ heißt das offene Intervall
$$U_\varepsilon(a) = (a - \varepsilon;\ a + \varepsilon) = \{x \in \R : |x - a| < \varepsilon\}$$
die **$\varepsilon$-Umgebung** von $a$.
:::

Dabei ist $a$ der Mittelpunkt, $\varepsilon$ der „Radius“ (die halbe Breite) und $U$ steht für „Umgebung“. Das Zeichen
$\in$ liest man „ist Element von“. Die geschweiften Klammern bedeuten „die Menge aller $x$ in $\R$, für die gilt …“.

- **Beispiel:** $U_{0{,}1}(2) = (1{,}9;\ 2{,}1)$. Die Zahl $1{,}95$ liegt darin, denn $|1{,}95 - 2| = 0{,}05 < 0{,}1$.
- **Nicht-Beispiel:** Die Zahl $2{,}1$ liegt **nicht** darin. Ihr Abstand zu $2$ ist genau $0{,}1$, also nicht kleiner als $0{,}1$. Das Intervall ist **offen**, die Ränder gehören nicht dazu.

```aufgabe
id: gf-v-umgebung-check
titel: Liegt die Zahl im Band?
niveau: 1
art: check
angabe: |
  Liegt die Zahl $4{,}98$ in der $\varepsilon$-Umgebung $U_{0{,}02}(5)$?
teile:
  - typ: auswahl
    optionen:
      - 'Ja, weil $|4{,}98 - 5| = 0{,}02$ ist.'
      - 'Nein, weil der Abstand $0{,}02$ nicht **kleiner** als $0{,}02$ ist.'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Der Abstand stimmt, aber die Umgebung verlangt $|x - 5| < 0{,}02$, also **echt kleiner**. Der Rand gehört nicht dazu.
hinweise:
  - 'Berechne den Abstand und vergleiche mit $<$, nicht mit $\le$.'
loesung: |
  Abstand: $|4{,}98 - 5| = 0{,}02$.
  ---
  Die Bedingung $0{,}02 < 0{,}02$ ist falsch. $4{,}98$ ist der linke Rand und liegt nicht in der offenen Umgebung.
```

:::beispiel[Glieder einer Folge im Toleranzband]
Wir betrachten die Folge $b_n = \dfrac{2n + 1}{n + 1}$. Sie begleitet uns durch die ersten Abschnitte als
**Leitbeispiel**. Ihre ersten Glieder sind $b_1 = 1{,}5$, $b_2 \approx 1{,}667$, $b_3 = 1{,}75$, $b_4 = 1{,}8$.
Sie scheinen sich der Zahl $2$ zu nähern.

**Schritt 1, den Abstand allgemein berechnen.** Wir bringen $b_n - 2$ auf einen Bruch:
$$b_n - 2 = \frac{2n + 1}{n + 1} - \frac{2(n + 1)}{n + 1} = \frac{2n + 1 - 2n - 2}{n + 1} = \frac{-1}{n + 1}.$$
Der Betrag macht das Minus weg: $|b_n - 2| = \frac{1}{n + 1}$.

**Schritt 2, für einzelne Glieder prüfen.** Wir nehmen $\varepsilon = 0{,}1$.
- $n = 4$: Abstand $\frac15 = 0{,}2$. Das ist nicht kleiner als $0{,}1$, also liegt $b_4$ **außerhalb**.
- $n = 9$: Abstand $\frac{1}{10} = 0{,}1$. Genau auf dem Rand, also ebenfalls **außerhalb**.
- $n = 10$: Abstand $\frac{1}{11} \approx 0{,}091 < 0{,}1$. Jetzt liegt $b_{10}$ **innerhalb**.

**Schritt 3, alle späteren Glieder.** Für $n \ge 10$ ist der Nenner $n + 1 \ge 11$. Ein größerer Nenner macht den
Bruch kleiner, also ist der Abstand höchstens $\frac{1}{11}$ und damit kleiner als $0{,}1$. **Ab $n = 10$ liegen alle
Glieder im Band.**
:::

```plot
x: [0, 15.5]
y: [1.4, 2.2]
achsen: { x: "n", y: "bₙ" }
graphen:
  - { f: "2", farbe: 2, label: "a = 2" }
  - { f: "2.1", farbe: 1, gestrichelt: true, label: "a + ε" }
  - { f: "1.9", farbe: 1, gestrichelt: true, label: "a − ε" }
strecken:
  - { von: [9.5, 1.4], nach: [9.5, 2.2], gestrichelt: true, farbe: 3 }
punkte:
  - { x: 1, y: 1.5000, farbe: 0 }
  - { x: 2, y: 1.6667, farbe: 0 }
  - { x: 3, y: 1.7500, farbe: 0 }
  - { x: 4, y: 1.8000, farbe: 0 }
  - { x: 5, y: 1.8333, farbe: 0 }
  - { x: 6, y: 1.8571, farbe: 0 }
  - { x: 7, y: 1.8750, farbe: 0 }
  - { x: 8, y: 1.8889, farbe: 0 }
  - { x: 9, y: 1.9000, farbe: 0 }
  - { x: 10, y: 1.9091, label: "ab n = 10", farbe: 3 }
  - { x: 11, y: 1.9167, farbe: 0 }
  - { x: 12, y: 1.9231, farbe: 0 }
  - { x: 13, y: 1.9286, farbe: 0 }
  - { x: 14, y: 1.9333, farbe: 0 }
  - { x: 15, y: 1.9375, farbe: 0 }
beschriftung: Die Folge bₙ = (2n + 1)/(n + 1) mit dem Toleranzband für ε = 0,1 um die Zahl 2. Das Glied b₉ = 1,9 liegt genau auf dem Rand und damit noch nicht im offenen Band. Ab n = 10 liegen alle Glieder im Band.
```

### Drei naheliegende Ideen, die nicht funktionieren

Bevor die richtige Definition kommt, lohnt sich ein Blick auf drei falsche Versuche. Jeder zeigt, worauf es ankommt.

1. **„Die Glieder kommen der Zahl immer näher.“** Die Folge $\frac1n$ kommt auch der Zahl $-1$ immer näher: Die
   Abstände sind $2$, dann $1{,}5$, dann $1{,}33$ und so weiter. Sie werden aber nie kleiner als $1$. „Immer näher“ ist
   also zu schwach. Es muss „**beliebig** nahe“ heißen.
2. **„Irgendwann ist ein Glied gleich der Zahl.“** Die Folge $\frac1n$ erreicht die $0$ nie, soll aber den Grenzwert $0$
   haben. Diese Idee ist zu streng.
3. **„Einige Glieder kommen der Zahl beliebig nahe.“** Die Folge $1, 0, 1, 0, \dots$ trifft die $0$ sogar immer wieder.
   Sie springt aber jedes Mal zurück auf $1$. Das wollen wir nicht „Grenzwert“ nennen.

Die richtige Idee lautet: Egal wie schmal das Toleranzband ist, **ab einer gewissen Stelle liegen alle weiteren
Glieder** darin. Davor dürfen beliebig viele Ausreißer liegen, aber nur **endlich viele**. Mathematiker sagen dazu:
„**Fast alle** Glieder liegen im Band.“ Fast alle heißt hier genau: alle bis auf endlich viele.

```reflexion
frage: Warum genügt es nicht, dass die Glieder einer Zahl „immer näher“ kommen? Erkläre es mit einem eigenen Zahlenbeispiel.
antwort: |
  „Immer näher“ heißt nur, dass der Abstand kleiner wird. Er kann dabei aber über einer festen Schranke bleiben.
  Die Folge $\frac1n$ kommt der Zahl $-2$ immer näher (Abstände $3;\ 2{,}5;\ 2{,}33;\ \dots$), aber jeder Abstand ist größer als $2$.
  Ein Toleranzband der Breite $\varepsilon = 1$ um $-2$ erreicht die Folge also nie. Für einen Grenzwert muss der Abstand
  **unter jede** noch so kleine Toleranz fallen und dort bleiben.
```

:::beispiel[Fast alle Glieder: endlich viele Ausreißer stören nicht]
Eine Folge beginnt mit den Gliedern $c_1 = 100$, $c_2 = -50$ und $c_3 = 7$. Ab $n = 4$ gilt $c_n = 5 + \frac{1}{n}$.

Wir prüfen das Band $U_{0{,}5}(5) = (4{,}5;\ 5{,}5)$. Die ersten drei Glieder liegen weit außerhalb. Ab $n = 4$ ist der
Abstand $\frac1n \le \frac14 = 0{,}25 < 0{,}5$. Alle Glieder ab $n = 4$ liegen also im Band. Außerhalb liegen genau
**drei** Glieder, also endlich viele.

Bei einem schmaleren Band, etwa $\varepsilon = 0{,}01$, gilt $\frac1n < 0{,}01$ erst für $n > 100$. Dann liegen die
Glieder $c_1$ bis $c_{100}$ außerhalb. Das sind mehr, aber immer noch **endlich viele**. Die ersten Glieder spielen
für den Grenzwert keine Rolle. Der Grenzwert ist $5$.
:::

:::achtung[Den Rand mitzählen]
Falsch: „$b_9 = 1{,}9$ liegt in $U_{0{,}1}(2)$, weil $|1{,}9 - 2| \le 0{,}1$.“

Richtig: Die Umgebung verlangt $|x - 2| < 0{,}1$, also **echt kleiner**. Bei $|1{,}9 - 2| = 0{,}1$ ist die Bedingung
$0{,}1 < 0{,}1$ falsch. $b_9$ liegt genau auf dem Rand und damit **außerhalb**. Achte bei konkreten Zahlen immer
darauf, ob $<$ oder $\le$ verlangt ist.
:::

:::achtung[Nur eine Seite des Bandes prüfen]
Falsch: „$x$ liegt in $U_{0{,}1}(2)$, wenn $x < 2{,}1$ ist. Also liegt $1{,}5$ darin.“

Richtig: Das Band hat **zwei** Ränder. Die Bedingung ist $1{,}9 < x < 2{,}1$. Für $x = 1{,}5$ ist der Abstand
$|1{,}5 - 2| = 0{,}5$, also viel größer als $0{,}1$. Wer nur $x < a + \varepsilon$ prüft, vergisst, dass die Glieder auch
**von unten** zu weit weg sein können. Mit dem Betrag $|x - a| < \varepsilon$ passiert dieser Fehler nicht.
:::

```aufgabe
id: gf-umgebung-intervall
titel: Eine ε-Umgebung als Intervall schreiben
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Schreibe die Umgebung $U_{0{,}05}(3)$ als offenes Intervall $(u;\ o)$. Gib die linke Grenze $u$ und die rechte Grenze $o$ an.
teile:
  - typ: zahl
    label: 'linke Grenze $u$'
    loesung: "3 - 0.05"
    anzeige: '2{,}95'
    fehler:
      - wert: "2.5"
        meldung: |
          Du hast $0{,}5$ statt $0{,}05$ abgezogen. Achte auf die Kommastelle: $\varepsilon = 0{,}05$ ist fünf Hundertstel.
      - wert: "-0.05"
        meldung: |
          Die Umgebung liegt um den **Mittelpunkt** $3$, nicht um $0$. Die linke Grenze ist $3 - \varepsilon$.
  - typ: zahl
    label: 'rechte Grenze $o$'
    loesung: "3 + 0.05"
    anzeige: '3{,}05'
    fehler:
      - wert: "3.5"
        meldung: |
          Du hast $0{,}5$ statt $0{,}05$ addiert. $\varepsilon = 0{,}05$ ist fünf Hundertstel.
      - wert: "3.1"
        meldung: |
          Du hast die ganze Breite $2\varepsilon = 0{,}1$ addiert. Nach rechts geht es nur um **ein** $\varepsilon$.
hinweise:
  - '$U_\varepsilon(a) = (a - \varepsilon;\ a + \varepsilon)$ mit $a = 3$ und $\varepsilon = 0{,}05$.'
loesung: |
  Ansatz: Die Umgebung reicht von $a - \varepsilon$ bis $a + \varepsilon$, weil genau diese Zahlen einen Abstand kleiner als $\varepsilon$ von $a$ haben.
  ---
  $u = 3 - 0{,}05 = 2{,}95$ und $o = 3 + 0{,}05 = 3{,}05$. Also $U_{0{,}05}(3) = (2{,}95;\ 3{,}05)$. Die Breite ist $0{,}1 = 2\varepsilon$ ✓.
```

```aufgabe
id: gf-umgebung
titel: Ab wann liegen die Glieder im Band?
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Gegeben ist $a_n = \frac{2}{n}$ und $\varepsilon = 0{,}1$.

  a) Welches ist der kleinste Index $n$, für den $a_n$ in der Umgebung $U_{0{,}1}(0)$ liegt?

  b) Liegen dann auch alle späteren Glieder darin?
teile:
  - typ: zahl
    label: 'a) kleinstes $n$'
    loesung: "21"
    fehler:
      - wert: "20"
        meldung: |
          Für $n = 20$ ist $a_{20} = \frac{2}{20} = 0{,}1$. Das liegt genau auf dem Rand und damit **nicht** in der offenen Umgebung.
      - wert: "11"
        meldung: |
          Du hast mit $\frac1n$ statt $\frac2n$ gerechnet. Löse $\frac{2}{n} < 0{,}1$.
  - typ: auswahl
    label: 'b)'
    optionen:
      - 'Ja, weil $\frac2n$ für größere $n$ noch kleiner wird.'
      - 'Nein, manche späteren Glieder liegen wieder außerhalb.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Der Zähler bleibt $2$, der Nenner wächst. Ein Bruch mit gleichem Zähler und größerem Nenner ist kleiner. Kann ein späteres Glied dann größer als $0{,}1$ sein?
hinweise:
  - '$a_n$ liegt in $U_{0{,}1}(0)$ genau dann, wenn $\left|\frac2n - 0\right| < 0{,}1$ ist.'
loesung: |
  Ansatz: $a_n$ liegt in der Umgebung, wenn der Abstand zu $0$ kleiner als $0{,}1$ ist: $\frac2n < 0{,}1$.
  ---
  Mit $n$ multiplizieren und durch $0{,}1$ teilen: $n > 20$. Das kleinste solche $n$ ist $21$. Für $n = 20$ ist der Abstand genau $0{,}1$ (Rand).
  ---
  b) Für $n \ge 21$ ist $\frac2n \le \frac{2}{21} \approx 0{,}095 < 0{,}1$. Alle späteren Glieder liegen also im Band.
```

```aufgabe
id: gf-anschauung
titel: Welche Folgen haben den Grenzwert 0?
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Welche Folgen haben (anschaulich) den Grenzwert $0$? Entscheide mit der Idee „ab einer Stelle liegen **alle** Glieder in jedem noch so schmalen Band um $0$“.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$a_n = \dfrac{1}{n^3}$'
      - '$a_n = \dfrac{(-1)^n}{2n}$'
      - '$a_n = 1, 0, 1, 0, 1, 0, \dots$'
      - '$a_n = \dfrac{n}{n + 2}$'
      - '$a_n = 0{,}98^n$'
    richtig: [0, 1, 4]
    fehler:
      - wert: [0, 1, 2, 4]
        meldung: |
          Die Folge $1, 0, 1, 0, \dots$ trifft die $0$ zwar unendlich oft, springt aber jedes Mal auf $1$ zurück. Im Band $U_{0{,}5}(0)$ liegen also nie **alle** späteren Glieder.
      - wert: [0, 4]
        meldung: |
          $\frac{(-1)^n}{2n}$ wechselt das Vorzeichen, aber ihr **Abstand** zu $0$ ist $\frac{1}{2n}$, und der wird beliebig klein. Das Vorzeichen stört nicht.
      - wert: [0, 1]
        meldung: |
          $0{,}98^n$ wird nur langsam klein, aber es wird beliebig klein: Ab $n = 228$ ist es schon kleiner als $0{,}01$. Langsam ist nicht dasselbe wie gar nicht.
hinweise:
  - 'Berechne für jede Folge den Abstand $|a_n - 0|$ für ein großes $n$, etwa $n = 1000$.'
loesung: |
  Ansatz: Für jede Folge prüfen, ob der Abstand $|a_n|$ beliebig klein wird und klein **bleibt**.
  ---
  $\frac{1}{n^3}$ und $\frac{(-1)^n}{2n}$: Die Abstände $\frac{1}{n^3}$ und $\frac{1}{2n}$ werden beliebig klein. Grenzwert $0$.
  ---
  $1, 0, 1, 0, \dots$: Unendlich viele Glieder sind $1$, also nie alle späteren nahe bei $0$. $\frac{n}{n+2}$ nähert sich $1$ (zum Beispiel $\frac{1000}{1002} \approx 0{,}998$), nicht $0$.
  ---
  $0{,}98^n$: Wegen $0 < 0{,}98 < 1$ wird die Potenz beliebig klein, wenn auch langsam ($0{,}98^{228} \approx 0{,}00999$). Ergebnis: Optionen 1, 2 und 5.
```

```aufgabe
id: gf-umgebung-welche
titel: Welche Zahlen liegen im Band?
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  Welche der Zahlen liegen in der Umgebung $U_{0{,}01}(5)$?
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$4{,}99$'
      - '$5{,}009$'
      - '$4{,}9901$'
      - '$5{,}1$'
      - '$5{,}01$'
    richtig: [1, 2]
    fehler:
      - wert: [0, 1, 2, 4]
        meldung: |
          $4{,}99$ und $5{,}01$ haben den Abstand **genau** $0{,}01$ von $5$. Die Umgebung ist offen, die Ränder gehören nicht dazu.
      - wert: [1, 2, 3]
        meldung: |
          $5{,}1$ hat den Abstand $0{,}1$ von $5$. Das ist zehnmal so viel wie $\varepsilon = 0{,}01$. Vergleiche die Stellen nach dem Komma genau.
      - wert: [1]
        meldung: |
          $4{,}9901$ liegt links von $5$, aber nur $0{,}0099$ entfernt. Auch Zahlen **unter** dem Mittelpunkt gehören zur Umgebung.
hinweise:
  - 'Die Umgebung ist $(4{,}99;\ 5{,}01)$ ohne die Ränder.'
  - 'Berechne für jede Zahl den Abstand $|x - 5|$ und vergleiche mit $0{,}01$.'
loesung: |
  Ansatz: Eine Zahl liegt in $U_{0{,}01}(5)$, wenn ihr Abstand zu $5$ echt kleiner als $0{,}01$ ist.
  ---
  Abstände: $4{,}99 \to 0{,}01$ (Rand), $5{,}009 \to 0{,}009$, $4{,}9901 \to 0{,}0099$, $5{,}1 \to 0{,}1$, $5{,}01 \to 0{,}01$ (Rand).
  ---
  Echt kleiner als $0{,}01$ sind nur $0{,}009$ und $0{,}0099$. Es liegen also $5{,}009$ und $4{,}9901$ in der Umgebung.
```

```aufgabe
id: gf-naiv-definition
titel: Eine zu schwache Definition entlarven
niveau: 2
lernziel: 0
kompetenz: begruenden
angabe: |
  Eine Mitschülerin schlägt vor: „$a$ ist Grenzwert der Folge, wenn der Abstand $|a_n - a|$ mit jedem Schritt kleiner wird.“
  Sie testet das an $a_n = \frac1n$ und dem Kandidaten $a = -1$.

  a) Berechne den Abstand $|a_n - (-1)|$ für $n = 4$.

  b) Unter welche Zahl fällt dieser Abstand **nie**, egal wie groß $n$ ist?

  c) Was zeigt das über ihren Vorschlag?
teile:
  - typ: zahl
    label: 'a) Abstand für $n = 4$'
    loesung: "1/4 + 1"
    anzeige: '1{,}25'
    fehler:
      - wert: "0.75"
        meldung: |
          Du hast $\frac14 - 1$ gerechnet. Der Abstand zu $-1$ ist $\left|\frac14 - (-1)\right| = \left|\frac14 + 1\right|$. Minus minus ergibt plus.
  - typ: zahl
    label: 'b) Schranke'
    loesung: "1"
    fehler:
      - wert: "0"
        meldung: |
          Der Abstand ist $\frac1n + 1$. Der Summand $1$ bleibt immer da. Kann die Summe dann unter $1$ fallen?
  - typ: auswahl
    label: 'c)'
    optionen:
      - 'Der Vorschlag ist zu schwach: Er würde $-1$ fälschlich zum Grenzwert von $\frac1n$ machen.'
      - 'Der Vorschlag ist richtig, denn $-1$ ist tatsächlich Grenzwert von $\frac1n$.'
      - 'Der Vorschlag ist zu streng, er schließt richtige Grenzwerte aus.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Die Glieder $\frac1n$ sind alle positiv und nähern sich der $0$. Eine Zahl, von der alle Glieder mehr als $1$ entfernt bleiben, kann nicht ihr Grenzwert sein.
      - wert: 2
        meldung: |
          Der Vorschlag lässt hier einen **falschen** Kandidaten durch. Das ist das Gegenteil von „zu streng“.
hinweise:
  - 'Für positive $n$ ist $\frac1n - (-1) = \frac1n + 1$ positiv, der Betrag ändert also nichts.'
  - 'Der Abstand $\frac1n + 1$ wird zwar kleiner, aber der Summand $1$ bleibt immer stehen.'
loesung: |
  Ansatz: Wir berechnen den Abstand allgemein: $\left|\frac1n - (-1)\right| = \frac1n + 1$, weil der Ausdruck positiv ist.
  ---
  a) Für $n = 4$: $\frac14 + 1 = 1{,}25$.
  ---
  b) Der Abstand $1 + \frac1n$ wird mit jedem Schritt kleiner, ist aber immer größer als $1$. Er fällt nie unter $1$.
  ---
  c) Der Vorschlag würde $-1$ als Grenzwert akzeptieren, obwohl kein Glied je näher als $1$ an $-1$ herankommt. Er ist zu schwach. Die richtige Definition verlangt, dass der Abstand unter **jede** Toleranz fällt.
```

```aufgabe
id: gf-fast-alle
titel: Endlich viele Ausreißer
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  Eine Folge ist so definiert: Für $n \le 1000$ ist $e_n = 7$. Für $n \ge 1001$ ist $e_n = 3 + \frac1n$.

  a) Welche Zahl ist der Grenzwert der Folge?

  b) Wie viele Glieder liegen **außerhalb** der Umgebung $U_{0{,}5}(3)$?
teile:
  - typ: zahl
    label: 'a) Grenzwert'
    loesung: "3"
    fehler:
      - wert: "7"
        meldung: |
          Die ersten $1000$ Glieder sind zwar $7$, aber danach kommen unendlich viele Glieder, die sich der $3$ nähern. Für den Grenzwert zählt nur, was **ab einer Stelle** passiert.
  - typ: zahl
    label: 'b) Anzahl außerhalb'
    loesung: "1000"
    toleranz: 0.1
    fehler:
      - wert: "0"
        meldung: |
          Die Glieder $e_1$ bis $e_{1000}$ haben den Wert $7$ und damit den Abstand $4$ von $3$. Sie liegen außerhalb des Bandes $(2{,}5;\ 3{,}5)$.
      - wert: "1001"
        meldung: |
          $e_{1001} = 3 + \frac{1}{1001}$ hat einen winzigen Abstand zu $3$ und liegt im Band. Zähle nur die Glieder mit Wert $7$.
hinweise:
  - 'Prüfe getrennt: die Glieder mit Wert $7$ und die Glieder $3 + \frac1n$.'
  - 'Für $n \ge 1001$ ist $\frac1n$ sehr klein. Liegt $3 + \frac1n$ dann im Band $(2{,}5;\ 3{,}5)$?'
loesung: |
  Ansatz: Für den Grenzwert zählt das Verhalten ab einer Stelle. Ab $n = 1001$ ist der Abstand zu $3$ gleich $\frac1n$, und der wird beliebig klein.
  ---
  a) Der Grenzwert ist $3$.
  ---
  b) Die Glieder $e_1$ bis $e_{1000}$ haben den Abstand $|7 - 3| = 4 > 0{,}5$, sie liegen außerhalb. Ab $n = 1001$ ist der Abstand $\frac1n \le \frac{1}{1001} < 0{,}5$.
  ---
  Außerhalb liegen also genau $1000$ Glieder. Das sind viele, aber **endlich viele**. Deshalb stören sie den Grenzwert nicht.
```

```aufgabe
id: gf-umgebung-gefuehrt
titel: Eine wechselnde Folge im Band
niveau: 2
lernziel: 0
kompetenz: rechnen
angabe: |
  Gegeben ist $d_n = 1 + \dfrac{(-1)^n}{n}$. Die Glieder liegen abwechselnd unter und über $1$: $d_1 = 0$, $d_2 = 1{,}5$, $d_3 \approx 0{,}667$, …

  Ab welchem Index $n$ liegen **alle** Glieder in der Umgebung $U_{0{,}2}(1)$?
teile:
  - typ: zahl
    label: 'ab $n =$'
    loesung: "6"
    fehler:
      - wert: "5"
        meldung: |
          Für $n = 5$ ist der Abstand $\frac15 = 0{,}2$, also genau der Rand. Die Umgebung ist offen.
      - wert: "4"
        meldung: |
          $d_4 = 1{,}25$ hat den Abstand $0{,}25$ von $1$. Das ist mehr als $0{,}2$.
hinweise:
  - 'Der Abstand ist $|d_n - 1| = \left|\frac{(-1)^n}{n}\right| = \frac1n$.'
  - 'Löse $\frac1n < 0{,}2$ nach $n$ auf.'
gefuehrt:
  - text: Wie lautet die linke Grenze der Umgebung $U_{0{,}2}(1)$?
    teil:
      typ: zahl
      loesung: "0.8"
      fehler:
        - wert: "0.98"
          meldung: '$\varepsilon = 0{,}2$, nicht $0{,}02$. Die linke Grenze ist $1 - 0{,}2$.'
    erklaerung: 'Die Umgebung ist $(1 - 0{,}2;\ 1 + 0{,}2) = (0{,}8;\ 1{,}2)$.'
  - text: Wie groß ist der Abstand $|d_3 - 1|$? Es ist $d_3 = 1 - \frac13$.
    teil:
      typ: zahl
      loesung: "1/3"
      fehler:
        - wert: "-1/3"
          meldung: 'Ein Abstand ist nie negativ. Nimm den Betrag.'
    erklaerung: '$|d_3 - 1| = \left|-\frac13\right| = \frac13 \approx 0{,}333$. Das ist größer als $0{,}2$, also liegt $d_3$ außerhalb.'
  - text: Überlege, warum der Abstand allgemein $|d_n - 1| = \frac1n$ ist, egal ob $n$ gerade oder ungerade ist.
    erklaerung: '$d_n - 1 = \frac{(-1)^n}{n}$. Der Zähler ist $+1$ oder $-1$, sein Betrag also immer $1$. Deshalb ist der Abstand $\frac1n$.'
  - text: Für welche $n$ gilt $\frac1n < 0{,}2$? Gib das kleinste solche $n$ an.
    teil:
      typ: zahl
      loesung: "6"
      fehler:
        - wert: "5"
          meldung: 'Bei $n = 5$ ist $\frac15 = 0{,}2$, also nicht kleiner. Der Rand zählt nicht.'
    erklaerung: '$\frac1n < 0{,}2 \iff n > 5$. Das kleinste $n$ ist $6$, und für alle größeren $n$ ist $\frac1n$ noch kleiner.'
loesung: |
  Ansatz: Wir berechnen den Abstand zu $1$ allgemein. $d_n - 1 = \frac{(-1)^n}{n}$, also $|d_n - 1| = \frac1n$, weil $|(-1)^n| = 1$ ist.
  ---
  Bedingung $\frac1n < 0{,}2 \iff n > 5$. Für $n = 5$ ist der Abstand genau $0{,}2$, das ist der Rand.
  ---
  Ab $n = 6$ ist $\frac1n \le \frac16 \approx 0{,}167 < 0{,}2$. Alle Glieder ab $n = 6$ liegen im Band, egal ob sie über oder unter $1$ liegen. Kontrolle: $d_6 = 1 + \frac16 \approx 1{,}167$ und $d_7 = 1 - \frac17 \approx 0{,}857$ liegen beide in $(0{,}8;\ 1{,}2)$ ✓.
```

```aufgabe
id: gf-fast-alle-begruenden
titel: Unendlich viele, aber nicht fast alle
niveau: 3
lernziel: 0
kompetenz: begruenden
angabe: |
  Betrachte die Folge $0, 1, 0, 1, 0, 1, \dots$, also $a_n = 0$ für ungerade $n$ und $a_n = 1$ für gerade $n$.

  a) Wie viele der ersten $100$ Glieder liegen **außerhalb** der Umgebung $U_{0{,}3}(0)$?

  b) Erkläre, warum in $U_{0{,}3}(0)$ unendlich viele Glieder liegen, aber trotzdem nicht „fast alle“. Was folgt daraus für die Frage, ob $0$ der Grenzwert ist?
teile:
  - typ: zahl
    label: 'a) Anzahl außerhalb unter den ersten 100'
    loesung: "50"
    fehler:
      - wert: "0"
        meldung: |
          Die Glieder mit Wert $1$ haben den Abstand $1$ von $0$. Das ist mehr als $0{,}3$, sie liegen also außerhalb.
      - wert: "100"
        meldung: |
          Die Glieder mit Wert $0$ haben den Abstand $0$ und liegen sicher im Band. Nur die Hälfte liegt außerhalb.
  - typ: text
    label: 'b) Begründung'
    muster: |
      Alle ungeraden Glieder sind $0$ und liegen im Band, das sind unendlich viele. Alle geraden Glieder sind $1$ und haben
      den Abstand $1 > 0{,}3$, sie liegen außerhalb. Auch das sind unendlich viele. „Fast alle“ heißt aber: Außerhalb liegen
      nur **endlich viele**. Das ist hier falsch. Also ist $0$ nicht der Grenzwert. Mit derselben Begründung (Band um $1$)
      ist auch $1$ nicht der Grenzwert.
hinweise:
  - 'Unter den ersten $100$ Zahlen sind $50$ gerade und $50$ ungerade.'
  - '„Fast alle“ heißt: außerhalb nur endlich viele. Zähle, wie viele Glieder insgesamt außerhalb liegen.'
loesung: |
  Ansatz: Wir prüfen die beiden Werte getrennt. Der Wert $0$ hat Abstand $0$ zum Mittelpunkt, der Wert $1$ hat Abstand $1$.
  ---
  a) Außerhalb liegen alle Glieder mit Wert $1$, also die mit geradem Index. Unter den ersten $100$ sind das $50$.
  ---
  b) Im Band liegen unendlich viele Glieder (alle ungeraden). Außerhalb liegen aber **auch** unendlich viele (alle geraden). „Fast alle“ verlangt, dass außerhalb nur endlich viele liegen.
  ---
  Antwort: $0$ ist nicht der Grenzwert. Die Folge springt immer wieder aus dem Band heraus. Später nennen wir $0$ einen **Häufungspunkt** dieser Folge, aber keinen Grenzwert.
```

## Die ε-N-Definition des Grenzwerts

```aufgabe
id: gf-def-vorwissen
titel: Umgebung als Ungleichung
niveau: 1
art: check
angabe: |
  Welche Ungleichung bedeutet „$a_n$ liegt in der $\varepsilon$-Umgebung von $a$“? (Aus [11.1 Was heißt „sich nähern“?](/lernen/mathe3/grenzwerte-folgen/was-heisst-sich-naehern-abstand-und-epsilon-umgebung): dort steht, was eine ε-Umgebung ist.)
teile:
  - typ: auswahl
    optionen:
      - '$|a_n - a| < \varepsilon$'
      - '$a_n < a + \varepsilon$'
      - '$|a_n - a| \le \varepsilon$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Das prüft nur die rechte Grenze. Ein Glied weit unterhalb von $a$ erfüllt diese Ungleichung auch.
      - wert: 2
        meldung: |
          Die Umgebung ist offen. Mit $\le$ würden die Ränder dazugehören.
hinweise:
  - 'Die Umgebung enthält alle Zahlen, deren Abstand zu $a$ echt kleiner als $\varepsilon$ ist.'
loesung: |
  „In der Umgebung“ heißt: Der Abstand zum Mittelpunkt ist echt kleiner als $\varepsilon$.
  ---
  Also $|a_n - a| < \varepsilon$, gleichwertig mit $a - \varepsilon < a_n < a + \varepsilon$.
```

**Worum geht es in einem Satz?** Die Definition sagt: Egal wie schmal das Toleranzband um $a$ ist, ab einer
gewissen Stelle liegen **alle** weiteren Glieder darin.

Dieser Satz enthält vier Bausteine. Wir setzen sie einzeln zusammen, weil die Definition sonst wie ein
Zungenbrecher wirkt. Diese Stelle ist für fast alle ungewohnt. Lies sie zweimal.

### Die Definition in vier Bausteinen

1. **„Der Abstand ist kleiner als die Toleranz“:** $|a_n - a| < \varepsilon$. Das ist eine Aussage über **ein** Glied.
2. **„… für alle Glieder ab der Stelle $N$“:** Für alle $n \ge N$ gilt $|a_n - a| < \varepsilon$. Hier ist $N$ ein
   bestimmter Index, zum Beispiel $N = 10$. Gemeint ist: $a_{10}$, $a_{11}$, $a_{12}$ und so weiter, ohne Ausnahme.
3. **„… und so eine Stelle gibt es“:** Es gibt ein $N$, sodass für alle $n \ge N$ gilt $|a_n - a| < \varepsilon$.
   Das ist eine Aussage über **eine** Toleranz $\varepsilon$.
4. **„… für jede Toleranz“:** Zu **jedem** $\varepsilon > 0$ gibt es ein $N$ mit dieser Eigenschaft. Erst damit ist
   „beliebig nahe“ eingefangen.

Am Leitbeispiel $b_n = \frac{2n + 1}{n + 1}$ mit $a = 2$ heißt das: Zu $\varepsilon = 0{,}1$ passt $N = 10$, wie wir
im Beispiel „Glieder einer Folge im Toleranzband“ in [11.1 Was heißt „sich nähern“?](/lernen/mathe3/grenzwerte-folgen/was-heisst-sich-naehern-abstand-und-epsilon-umgebung) gesehen haben. Zu $\varepsilon = 0{,}01$ passt $N = 100$. Und zu jeder anderen Toleranz gibt es ebenfalls ein
passendes $N$.

```aufgabe
id: gf-def-check-alle
titel: Ein Wort entscheidet
niveau: 1
art: check
angabe: |
  In der Definition heißt es: „… sodass für ___ $n \ge N$ gilt: $|a_n - a| < \varepsilon$.“ Welches Wort gehört in die Lücke?
teile:
  - typ: auswahl
    optionen:
      - 'alle'
      - 'ein'
      - 'unendlich viele'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Ein einzelnes Glied in der Nähe reicht nicht. Die Folge $1, 0, 1, 0, \dots$ hat einzelne Glieder bei $0$, springt aber zurück.
      - wert: 2
        meldung: |
          „Unendlich viele“ erlaubt, dass ebenfalls unendlich viele Glieder außerhalb liegen. Das ist die Idee eines Häufungspunkts, nicht eines Grenzwerts.
hinweise:
  - 'Ab der Stelle $N$ darf **kein** Glied mehr aus dem Band fallen.'
loesung: |
  Gemeint ist: Ab $N$ liegt jedes Glied im Band, ohne Ausnahme.
  ---
  Das Wort ist „alle“.
```

:::definition[Grenzwert einer Folge]
Eine Folge $(a_n)$ **konvergiert** gegen die Zahl $a \in \R$, wenn gilt:

Zu jedem $\varepsilon > 0$ gibt es einen Index $N \in \N$, sodass für alle $n \ge N$ gilt: $|a_n - a| < \varepsilon$.

Mit Quantoren geschrieben:
$$\forall \varepsilon > 0\ \ \exists N \in \N\ \ \forall n \ge N:\ |a_n - a| < \varepsilon.$$
Die Zahl $a$ heißt dann **Grenzwert** oder **Limes** der Folge. Man schreibt $\lim\limits_{n \to \infty} a_n = a$ oder
$a_n \to a$. Eine Folge, die gegen eine Zahl konvergiert, heißt **konvergent**. Sonst heißt sie **divergent**.
:::

**Die Symbole vorgelesen:** $\forall$ liest man „für alle“. $\exists$ liest man „es gibt“. Der Doppelpunkt heißt
„gilt“. Die Formelzeile liest man also so:

> Für alle $\varepsilon$ größer null gibt es ein $N$ in $\N$, sodass für alle $n$ größer gleich $N$ gilt:
> $|a_n - a| < \varepsilon$.

Der letzte Teil heißt in Worten: Der Abstand von $a_n$ und $a$ ist kleiner als $\varepsilon$.

Das Wort **Limes** ist
lateinisch und heißt „Grenze“. **Konvergieren** heißt „zusammenlaufen“, **divergieren** heißt „auseinanderlaufen“.
Der Ausdruck $n \to \infty$ liest man „$n$ gegen unendlich“. Er bedeutet: Wir schauen, was für immer größere $n$ passiert.

```aufgabe
id: gf-def-symbole
titel: Quantoren vorlesen
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Wie liest man die Zeichenfolge $\exists N \in \N\ \forall n \ge N$ in Worten?
teile:
  - typ: auswahl
    optionen:
      - '„Es gibt ein $N$ in $\N$, sodass für alle $n$ größer gleich $N$ …“'
      - '„Für alle $N$ in $\N$ gibt es ein $n$ größer gleich $N$ …“'
      - '„Es gibt ein $N$ in $\N$ und ein $n$ größer gleich $N$ …“'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Du hast die beiden Zeichen vertauscht gelesen. $\exists$ ist das gespiegelte E von „existiert“, also „es gibt“. $\forall$ ist das umgedrehte A von „alle“.
      - wert: 2
        meldung: |
          $\forall$ heißt „für alle“, nicht „es gibt ein“. Gemeint sind **alle** Indizes ab $N$, nicht ein einzelner.
hinweise:
  - '$\exists$ erinnert an ein gespiegeltes E wie „existiert“, $\forall$ an ein umgedrehtes A wie „alle“.'
loesung: |
  Ansatz: Wir übersetzen jedes Zeichen einzeln von links nach rechts.
  ---
  $\exists N \in \N$ heißt „es gibt ein $N$ in $\N$“, $\forall n \ge N$ heißt „für alle $n$ größer gleich $N$“. Zusammen: „Es gibt ein $N$, sodass für alle $n$ ab $N$ …“.
```

**Die Kurzform für die mündliche Prüfung:** „In jeder $\varepsilon$-Umgebung von $a$ liegen fast alle
Folgenglieder.“ Dabei heißt „fast alle“: alle bis auf endlich viele.


### Die Definition als Spiel

Viele finden die Definition leichter, wenn sie sie als Spiel zwischen zwei Personen lesen:

1. Die **Skeptikerin** gibt eine Toleranz $\varepsilon > 0$ vor, so klein sie will.
2. Der **Beweisende** antwortet mit einem Index $N$. Er darf $N$ passend zu diesem $\varepsilon$ wählen.
3. Der Beweisende gewinnt die Runde, wenn **jedes** Glied ab $N$ im Toleranzband liegt.

Die Folge hat den Grenzwert $a$, wenn der Beweisende **jede** Runde gewinnt, egal welches $\varepsilon$ kommt. Ein
kleineres $\varepsilon$ erzwingt meistens ein größeres $N$. Deshalb schreibt man oft $N(\varepsilon)$, gelesen „$N$ von
$\varepsilon$“. Das betont: $N$ hängt von $\varepsilon$ ab.

:::beispiel[Das Spiel am Leitbeispiel]
Folge $b_n = \frac{2n + 1}{n + 1}$, Kandidat $a = 2$. Aus [11.1 Was heißt „sich nähern“?](/lernen/mathe3/grenzwerte-folgen/was-heisst-sich-naehern-abstand-und-epsilon-umgebung) wissen wir: $|b_n - 2| = \frac{1}{n + 1}$.

**Runde 1:** Die Skeptikerin wählt $\varepsilon = 0{,}1$. Der Beweisende braucht $\frac{1}{n + 1} < 0{,}1$, also
$n + 1 > 10$, also $n > 9$. Er antwortet $N = 10$.

**Runde 2:** $\varepsilon = 0{,}01$. Jetzt braucht er $n + 1 > 100$, also $n > 99$. Er antwortet $N = 100$.

**Runde 3:** $\varepsilon = 0{,}001$. Er antwortet $N = 1000$.

**Jede weitere Runde:** Für ein beliebiges $\varepsilon$ braucht er $n + 1 > \frac{1}{\varepsilon}$. Er wählt eine
natürliche Zahl $N$, die größer als $\frac{1}{\varepsilon} - 1$ ist. Dann gewinnt er auch diese Runde.

**Was haben wir gezeigt?** Der Beweisende hat eine **Strategie**, die gegen jedes $\varepsilon$ gewinnt. Genau das
bedeutet $\lim b_n = 2$.
:::

:::beispiel[Ein Nicht-Beispiel: die Skeptikerin gewinnt]
Folge $c_n = (-1)^n$, also $-1, 1, -1, 1, \dots$ Kandidat $a = 1$.

Die Skeptikerin wählt $\varepsilon = 0{,}5$. Das Band ist $(0{,}5;\ 1{,}5)$. Alle Glieder mit geradem $n$ sind $1$ und liegen
darin. Alle Glieder mit ungeradem $n$ sind $-1$ und haben den Abstand $|-1 - 1| = 2$. Sie liegen weit außerhalb.

Egal welches $N$ der Beweisende nennt: Nach $N$ kommt immer wieder ein ungerades $n$ mit $c_n = -1$. Er kann diese
Runde nicht gewinnen. Also ist $1$ **nicht** der Grenzwert. Mit derselben Überlegung (Band um $-1$) ist auch $-1$ nicht
der Grenzwert.
:::

```plot
x: [0, 12.5]
y: [-1.6, 1.8]
achsen: { x: "n", y: "cₙ" }
graphen:
  - { f: "1", farbe: 2, label: "Kandidat 1" }
  - { f: "1.5", farbe: 1, gestrichelt: true, label: "1 + ε" }
  - { f: "0.5", farbe: 1, gestrichelt: true, label: "1 − ε" }
punkte:
  - { x: 1, y: -1, farbe: 3 }
  - { x: 2, y: 1, farbe: 0 }
  - { x: 3, y: -1, farbe: 3 }
  - { x: 4, y: 1, farbe: 0 }
  - { x: 5, y: -1, farbe: 3 }
  - { x: 6, y: 1, farbe: 0 }
  - { x: 7, y: -1, farbe: 3 }
  - { x: 8, y: 1, farbe: 0 }
  - { x: 9, y: -1, farbe: 3 }
  - { x: 10, y: 1, farbe: 0 }
  - { x: 11, y: -1, label: "immer wieder außerhalb", farbe: 3 }
  - { x: 12, y: 1, farbe: 0 }
beschriftung: Die Folge cₙ = (−1)ⁿ mit dem Band für ε = 0,5 um den Kandidaten 1. Die geraden Glieder liegen im Band, die ungeraden Glieder (violett) liegen bei −1 und damit immer wieder außerhalb. Es gibt keine Stelle, ab der alle Glieder im Band liegen.
```

### Warum die Reihenfolge der Bausteine entscheidend ist

Die Definition beginnt mit „zu jedem $\varepsilon$“ und erst danach kommt „gibt es ein $N$“. Das heißt: **Erst** wird
die Toleranz vorgegeben, **dann** wird der Index gewählt. Vertauscht man die Reihenfolge, entsteht eine ganz andere
Aussage. Sie lautet dann: Es gibt **ein** $N$, das für alle $\varepsilon$ zugleich funktioniert. Dann müsste der Abstand ab $N$ kleiner
als **jede** positive Zahl sein. Das geht nur mit Abstand $0$. Die Folge müsste also ab $N$ konstant gleich $a$ sein.

:::achtung[Ein N für alle ε]
Falsch: „Für $a_n = \frac1n$ wähle ich $N = 1000$. Ab da sind alle Glieder kleiner als $0{,}001$ und damit sehr nahe bei $0$.
Das beweist $\frac1n \to 0$.“

Richtig: Die Skeptikerin wählt einfach $\varepsilon = 0{,}0001$. Dann ist $a_{1001} = \frac{1}{1001} \approx 0{,}000999$,
und das ist **größer** als $0{,}0001$. Das feste $N = 1000$ verliert diese Runde. Zu $\varepsilon = 0{,}0001$ braucht
man $N = 10\,001$. Für diese Folge reicht kein einziges festes $N$. Man braucht eine Regel, die zu **jedem** $\varepsilon$ ein
passendes $N$ liefert.
:::

:::achtung[Ein Glied in der Nähe reicht nicht]
Falsch: „$(-1)^n \to 1$, denn $a_2 = 1$ hat den Abstand $0$ zu $1$, und $0$ ist kleiner als jedes $\varepsilon$.“

Richtig: Die Definition verlangt den kleinen Abstand für **alle** $n \ge N$, nicht für ein einzelnes $n$. Nach jedem
geraden Index kommt ein ungerader mit $a_n = -1$ und dem Abstand $2$. Ein Glied im Band beweist gar nichts.
:::

:::intuition
Für Programmiererinnen und Programmierer: Die Definition verlangt eine Funktion `N(eps)`. Wer eine Genauigkeit
`eps` verlangt, bekommt einen Index zurück, ab dem **jedes** weitere Glied diese Genauigkeit erfüllt. Ein
Abbruchkriterium der Form „rechne, bis der Fehler kleiner als `eps` ist“ hält nur an, wenn **ein** Glied die
Genauigkeit erreicht. Dass auch **alle** späteren Näherungen so genau bleiben, garantiert erst die Konvergenz.
:::

### Selbst beobachten

```aufgabe
id: gf-def-vorhersage
titel: Vorhersage vor dem Experiment
niveau: 1
art: check
angabe: |
  Am Leitbeispiel $b_n = \frac{2n + 1}{n + 1}$ gehörte zu $\varepsilon = 0{,}1$ das kleinste $N = 10$.
  **Was passiert mit dem kleinsten passenden $N$, wenn du $\varepsilon$ halbierst?**
teile:
  - typ: auswahl
    optionen:
      - 'Es bleibt gleich.'
      - 'Es wird ungefähr doppelt so groß.'
      - 'Es wird ungefähr halb so groß.'
      - 'Es gibt dann kein passendes $N$ mehr.'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Ein schmaleres Band ist schwerer zu treffen. Die Glieder müssen näher an $2$ liegen, das passiert erst später.
      - wert: 2
        meldung: |
          Kleinere Toleranz heißt strengere Anforderung. Strengere Anforderungen erfüllt die Folge erst **später**, nicht früher.
      - wert: 3
        meldung: |
          Genau das schließt die Definition aus: Bei einer konvergenten Folge gibt es zu **jedem** $\varepsilon$ ein passendes $N$.
hinweise:
  - 'Der Abstand ist $\frac{1}{n + 1}$. Für welche $n$ ist er kleiner als $0{,}05$?'
loesung: |
  Aus $\frac{1}{n + 1} < 0{,}05$ folgt $n + 1 > 20$, also $n > 19$ und $N = 20$.
  ---
  Das kleinste $N$ verdoppelt sich ungefähr: von $10$ auf $20$. Überprüfe das gleich im Widget.
```

```widget
name: folge
titel: Der ε-Schlauch und das kleinste N
props:
  a: "(2n+1)/(n+1)"
  grenzwert: 2
  n_max: 60
  epsilon: 0.1
```

**Arbeitsauftrag:** Stelle im Widget nacheinander $\varepsilon = 0{,}1$, $\varepsilon = 0{,}05$ und $\varepsilon = 0{,}02$
ein. **Beobachte**, wie das kleinste $N$ springt: $10$, dann $20$, dann $50$. **Erkläre** es mit der Formel: Das
kleinste $N$ ist die kleinste ganze Zahl über $\frac{1}{\varepsilon} - 1$. Halbiert man $\varepsilon$, verdoppelt sich
$\frac{1}{\varepsilon}$ ungefähr. Das $N$ wird immer größer, aber es **existiert** immer. Genau das behauptet die Definition.

```reflexion
frage: Warum darf $N$ von $\varepsilon$ abhängen, aber nicht vom Index $n$?
antwort: |
  $N$ ist die Antwort auf eine vorgegebene Toleranz. Deshalb darf der Beweisende es passend zu $\varepsilon$ wählen.
  Danach muss die Aussage für **alle** $n \ge N$ gelten. Würde $N$ von $n$ abhängen, könnte man für jedes einzelne Glied
  ein eigenes $N$ wählen, etwa $N = n$. Dann wäre „ab der Stelle $N$“ bedeutungslos. Die Definition will aber eine feste
  Stelle, ab der **jedes** spätere Glied im Band bleibt.
```

:::pruefung[So sagst du die Definition in der mündlichen Prüfung]
Die Prüferin erwartet die Definition **vollständig** und in der richtigen Reihenfolge. So kann es klingen:

> Eine Folge $(a_n)$ konvergiert gegen $a$, wenn es zu jedem $\varepsilon$ größer null einen Index $N$ gibt.
> Für alle $n$ größer gleich $N$ ist dann der Abstand $|a_n - a|$ kleiner als $\varepsilon$.

Danach lohnt sich ein Satz zur Bedeutung:

> Anschaulich liegen also in jedem noch so schmalen Band um $a$ alle Glieder bis auf endlich viele.

Wer nur sagt, die Glieder kämen $a$ „immer näher“, bekommt sicher die Nachfrage, was das genau heißt.
:::

```aufgabe
id: gf-eps-quantoren
titel: Die Definition richtig formulieren
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  Welche Formulierung ist die korrekte Definition von $\lim\limits_{n\to\infty} a_n = a$?
teile:
  - typ: auswahl
    optionen:
      - '$\exists N\ \forall \varepsilon > 0\ \forall n \ge N: |a_n - a| < \varepsilon$'
      - '$\forall \varepsilon > 0\ \exists N\ \forall n \ge N: |a_n - a| < \varepsilon$'
      - '$\forall \varepsilon > 0\ \exists n: |a_n - a| < \varepsilon$'
      - '$\forall \varepsilon > 0\ \forall n\ \exists N \ge n: |a_N - a| < \varepsilon$'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Hier steht „es gibt ein $N$“ **vor** „für alle $\varepsilon$“. Dann müsste ein einziges $N$ für jede Toleranz passen. Das schaffen nur Folgen, die ab einer Stelle exakt gleich $a$ sind.
      - wert: 2
        meldung: |
          Diese Formulierung verlangt nur **ein** Glied in der Nähe. Das erfüllt auch die Folge $1, 0, 1, 0, \dots$ mit $a = 0$, die keinen Grenzwert hat.
      - wert: 3
        meldung: |
          Hier wird nur verlangt, dass nach jeder Stelle irgendwann wieder ein Glied nahe bei $a$ liegt. Dazwischen dürfen Glieder weit weg sein. Das beschreibt einen Häufungspunkt.
hinweise:
  - 'Erst wird die Toleranz vorgegeben, dann darf man den Index wählen.'
  - 'Am Ende müssen **alle** Glieder ab diesem Index passen. Welche Option sagt genau das in dieser Reihenfolge?'
loesung: |
  Ansatz: Wir lesen jede Zeile laut vor und vergleichen mit den vier Bausteinen der Definition.
  ---
  Option 2 sagt: Zu jedem $\varepsilon$ gibt es ein $N$, ab dem alle Glieder im Band liegen. Das ist die Definition.
  ---
  Option 1 vertauscht die Reihenfolge (ein $N$ für alle $\varepsilon$). Option 3 verlangt nur ein Glied. Option 4 verlangt unendlich viele Glieder in jeder Umgebung, aber nicht alle ab einer Stelle.
  ---
  Kontrolle mit $1, 0, 1, 0, \dots$ und $a = 0$: Diese Folge erfüllt Option 3 und Option 4, aber nicht Option 2. Nur Option 2 schließt sie richtig aus.
```

```aufgabe
id: gf-def-n-pruefen
titel: Ist dieses N gültig?
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Für $a_n = 3 + \frac{2}{n}$ (Grenzwert $3$) und $\varepsilon = 0{,}1$ schlägt jemand $N = 25$ vor.

  a) Ist $N = 25$ ein gültiges $N$ im Sinne der Definition?

  b) Welches ist das **kleinste** gültige $N$?
teile:
  - typ: auswahl
    label: 'a)'
    optionen:
      - 'Ja, denn für alle $n \ge 25$ ist $\frac2n < 0{,}1$.'
      - 'Nein, denn $25$ ist nicht das kleinste passende $N$.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Die Definition verlangt nur, dass es **ein** passendes $N$ gibt. Ein größeres $N$ als nötig ist ebenso gültig.
  - typ: zahl
    label: 'b) kleinstes $N$'
    loesung: "21"
    fehler:
      - wert: "20"
        meldung: |
          Für $n = 20$ ist $\frac{2}{20} = 0{,}1$, also nicht kleiner als $0{,}1$. Der Rand zählt nicht.
hinweise:
  - 'Der Abstand ist $|a_n - 3| = \frac2n$. Löse $\frac2n < 0{,}1$.'
loesung: |
  Ansatz: Abstand $|a_n - 3| = \frac2n$, Bedingung $\frac2n < 0{,}1 \iff n > 20$.
  ---
  a) Für alle $n \ge 25$ ist sicher $n > 20$, also $\frac2n < 0{,}1$. $N = 25$ ist gültig, nur nicht das kleinste.
  ---
  b) Das kleinste $N$ ist $21$. Probe: $\frac{2}{21} \approx 0{,}095 < 0{,}1$, aber $\frac{2}{20} = 0{,}1$.
```

```aufgabe
id: gf-def-spiel
titel: Zwei Runden im ε-N-Spiel
niveau: 2
lernziel: 0
kompetenz: rechnen
angabe: |
  Die Folge $a_n = 5 - \dfrac{1}{n^2}$ hat den Grenzwert $5$. Die Skeptikerin spielt zwei Runden.

  a) Sie wählt $\varepsilon = 0{,}01$. Mit welchem **kleinsten** $N$ gewinnt der Beweisende?

  b) Sie wählt $\varepsilon = 0{,}0001$. Mit welchem kleinsten $N$ gewinnt er jetzt?
teile:
  - typ: zahl
    label: 'a) $N$ für $\varepsilon = 0{,}01$'
    loesung: "11"
    fehler:
      - wert: "10"
        meldung: |
          Für $n = 10$ ist $\frac{1}{100} = 0{,}01$, also genau der Rand. Gesucht ist ein Abstand **echt kleiner** als $0{,}01$.
      - wert: "101"
        meldung: |
          Du hast mit $\frac1n$ statt $\frac{1}{n^2}$ gerechnet. Löse $\frac{1}{n^2} < 0{,}01$, also $n^2 > 100$.
  - typ: zahl
    label: 'b) $N$ für $\varepsilon = 0{,}0001$'
    loesung: "101"
    toleranz: 0.1
    fehler:
      - wert: "100"
        meldung: |
          Für $n = 100$ ist $\frac{1}{10\,000} = 0{,}0001$, also genau der Rand.
      - wert: "10001"
        meldung: |
          Du hast vergessen, die Wurzel zu ziehen. Aus $n^2 > 10\,000$ folgt $n > 100$.
hinweise:
  - 'Abstand: $|a_n - 5| = \frac{1}{n^2}$.'
  - 'Aus $\frac{1}{n^2} < \varepsilon$ wird $n^2 > \frac{1}{\varepsilon}$. Danach die Wurzel ziehen (beide Seiten sind positiv).'
gefuehrt:
  - text: Wie groß ist der Abstand $|a_n - 5|$ als Term in $n$?
    teil:
      typ: term
      variable: n
      bereich: [1, 10]
      loesung: "1/n^2"
      fehler:
        - wert: "-1/n^2"
          meldung: 'Das ist $a_n - 5$. Der Betrag macht daraus eine positive Zahl.'
    erklaerung: '$a_n - 5 = -\frac{1}{n^2}$, also $|a_n - 5| = \frac{1}{n^2}$.'
  - text: Die Bedingung $\frac{1}{n^2} < 0{,}01$ ist gleichwertig mit $n^2 > \dots$? Gib die Zahl an.
    teil:
      typ: zahl
      loesung: "100"
      toleranz: 0.1
      fehler:
        - wert: "0.01"
          meldung: 'Beim Kehrwert dreht sich die Ungleichung, und aus $0{,}01$ wird $\frac{1}{0{,}01} = 100$.'
    erklaerung: 'Mit $n^2$ multiplizieren und durch $0{,}01$ dividieren: $n^2 > 100$.'
  - text: Für welche $n$ gilt also die Bedingung? Gib die Grenze $g$ in $n > g$ an.
    teil:
      typ: zahl
      loesung: "10"
      fehler:
        - wert: "100"
          meldung: 'Aus $n^2 > 100$ folgt durch Wurzelziehen $n > 10$ (für positive $n$).'
    erklaerung: 'Weil $n$ positiv ist, darf man die Wurzel ziehen: $n > 10$.'
  - text: Welches ist das kleinste gültige $N$?
    teil:
      typ: zahl
      loesung: "11"
      fehler:
        - wert: "10"
          meldung: 'Bei $n = 10$ ist der Abstand genau $0{,}01$. Gesucht ist die kleinste ganze Zahl **über** $10$.'
    erklaerung: '$N = 11$. Weil $\frac{1}{n^2}$ mit wachsendem $n$ kleiner wird, gilt die Bedingung dann für alle $n \ge 11$.'
loesung: |
  Ansatz: Zuerst den Abstand vereinfachen: $|a_n - 5| = \left|-\frac{1}{n^2}\right| = \frac{1}{n^2}$.
  ---
  a) $\frac{1}{n^2} < 0{,}01 \iff n^2 > 100 \iff n > 10$. Kleinstes $N = 11$.
  ---
  b) $\frac{1}{n^2} < 0{,}0001 \iff n^2 > 10\,000 \iff n > 100$. Kleinstes $N = 101$.
  ---
  Beobachtung: Die Toleranz wurde durch $100$ geteilt, das $N$ wurde etwa mit $10$ multipliziert. Der Beweisende gewinnt beide Runden, die Folge konvergiert schnell.
```

```aufgabe
id: gf-def-gegenbeispiel
titel: Die Skeptikerin gewinnt
niveau: 2
lernziel: 0
kompetenz: begruenden
angabe: |
  Die Folge $c_n = 2 + (-1)^n$ hat die Glieder $1, 3, 1, 3, \dots$ Jemand behauptet, $3$ sei ihr Grenzwert.

  a) Welchen Abstand zu $3$ haben die Glieder mit ungeradem $n$?

  b) Mit welcher Toleranz kann die Skeptikerin die Behauptung widerlegen?
teile:
  - typ: zahl
    label: 'a) Abstand'
    loesung: "2"
    fehler:
      - wert: "-2"
        meldung: |
          $1 - 3 = -2$, aber ein Abstand ist ein Betrag und damit nie negativ.
      - wert: "0"
        meldung: |
          Die Glieder mit **geradem** $n$ haben den Abstand $0$. Gefragt sind die ungeraden, also die Einsen.
  - typ: auswahl
    label: 'b)'
    optionen:
      - '$\varepsilon = 1$: Dann liegen alle ungeraden Glieder außerhalb, egal welches $N$ gewählt wird.'
      - '$\varepsilon = 3$: Dann liegen alle Glieder außerhalb.'
      - 'Mit keiner Toleranz, denn unendlich viele Glieder sind genau $3$.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Mit $\varepsilon = 3$ ist das Band $(0;\ 6)$. Dann liegen **alle** Glieder darin, auch die Einsen. Diese Toleranz ist zu großzügig.
      - wert: 2
        meldung: |
          Unendlich viele Glieder im Band reichen nicht. Ab einer Stelle müssen **alle** Glieder darin liegen, und die Einsen fallen immer wieder heraus.
hinweise:
  - 'Die ungeraden Glieder sind alle gleich $1$.'
  - 'Wähle $\varepsilon$ kleiner als den Abstand der Einsen zu $3$. Dann fallen die Einsen immer aus dem Band.'
loesung: |
  Ansatz: Wenn unendlich viele Glieder einen festen Abstand zu $3$ haben, wählt die Skeptikerin $\varepsilon$ kleiner als diesen Abstand.
  ---
  a) Für ungerades $n$ ist $c_n = 1$, der Abstand ist $|1 - 3| = 2$.
  ---
  b) Mit $\varepsilon = 1$ ist das Band $(2;\ 4)$. Nach jedem $N$ kommt ein ungerader Index mit $c_n = 1$ außerhalb. Kein $N$ funktioniert.
  ---
  Also ist $3$ nicht der Grenzwert. Jedes $\varepsilon$ mit $0 < \varepsilon \le 2$ hätte ebenfalls funktioniert.
```

```aufgabe
id: gf-def-fast-alle
titel: Gleichwertige Formulierungen
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  Welche Aussagen bedeuten **dasselbe** wie $\lim\limits_{n\to\infty} a_n = a$?
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - 'In jeder $\varepsilon$-Umgebung von $a$ liegen fast alle Glieder.'
      - 'In jeder $\varepsilon$-Umgebung von $a$ liegen unendlich viele Glieder.'
      - 'Außerhalb jeder $\varepsilon$-Umgebung von $a$ liegen nur endlich viele Glieder.'
      - 'Es gibt eine $\varepsilon$-Umgebung von $a$, in der alle Glieder liegen.'
    richtig: [0, 2]
    fehler:
      - wert: [0, 1, 2]
        meldung: |
          „Unendlich viele im Band“ erlaubt, dass auch unendlich viele außerhalb liegen. Die Folge $1, 0, 1, 0, \dots$ hat unendlich viele Glieder in jedem Band um $0$, konvergiert aber nicht.
      - wert: [0, 2, 3]
        meldung: |
          „Es gibt **eine** Umgebung“ prüft nur eine einzige Toleranz. Jede beschränkte Folge liegt in einem genügend breiten Band. Gefordert ist es aber für **jede** Toleranz.
      - wert: [0]
        meldung: |
          Aussage 3 ist nur eine Umformulierung von Aussage 1: „Fast alle drin“ heißt genau „nur endlich viele draußen“.
hinweise:
  - '„Fast alle“ bedeutet: alle bis auf endlich viele.'
  - 'Prüfe jede Aussage an der Folge $1, 0, 1, 0, \dots$ mit $a = 0$. Welche Aussagen erfüllt diese Folge trotzdem?'
loesung: |
  Ansatz: Wir vergleichen mit der Kurzform „In jeder $\varepsilon$-Umgebung liegen fast alle Glieder“.
  ---
  Aussage 1 ist die Kurzform. Aussage 3 sagt dasselbe von außen betrachtet: nur endlich viele außerhalb.
  ---
  Aussage 2 erfüllt auch $1, 0, 1, 0, \dots$ mit $a = 0$, obwohl diese Folge divergiert. Aussage 4 prüft nur eine Toleranz, das erfüllt jede beschränkte Folge.
  ---
  Richtig sind also die Aussagen 1 und 3.
```

```aufgabe
id: gf-def-formulieren
titel: Die Definition erklären
niveau: 3
lernziel: 0
kompetenz: begruenden
angabe: |
  a) Formuliere die Definition von $\lim\limits_{n\to\infty} a_n = a$ in ganzen Sätzen, so wie du sie in der mündlichen Prüfung sagen würdest.

  b) Erkläre an der Folge $a_n = 4 + \frac{3}{n}$ mit Grenzwert $4$, was $\varepsilon$ und $N$ bedeuten. Bestimme dazu das kleinste $N$ für $\varepsilon = 0{,}1$.

  c) Erkläre, warum ein einzelnes konkretes $\varepsilon$ den Grenzwert noch nicht beweist.
teile:
  - typ: text
    label: 'a) und c)'
    muster: |
      a) Eine Folge $(a_n)$ konvergiert gegen $a$, wenn es zu jedem $\varepsilon > 0$ einen Index $N$ gibt, sodass für alle
      $n \ge N$ gilt: $|a_n - a| < \varepsilon$. Anschaulich: In jedem noch so schmalen Band um $a$ liegen alle Glieder bis
      auf endlich viele.

      c) Mit einem konkreten $\varepsilon$ zeigt man nur, dass die Folge **eine** Toleranz einhält. Die Definition verlangt
      es für **jede** Toleranz. Eine Folge wie $4 + \frac{3}{n} + 0{,}01$ würde die Toleranz $0{,}1$ um $4$ auch einhalten,
      hat aber nicht den Grenzwert $4$.
  - typ: zahl
    label: 'b) $N$ für $\varepsilon = 0{,}1$'
    loesung: "31"
    fehler:
      - wert: "30"
        meldung: |
          Für $n = 30$ ist $\frac{3}{30} = 0{,}1$, genau der Rand. Gesucht ist die kleinste ganze Zahl **über** $30$.
hinweise:
  - 'a) Baue die Definition aus den vier Bausteinen: Abstand kleiner als $\varepsilon$, für alle $n \ge N$, es gibt ein $N$, zu jedem $\varepsilon$.'
  - 'b) $\varepsilon$ ist die Breite des Toleranzbands, $N$ die Stelle, ab der alle Glieder darin liegen. Löse $\frac3n < 0{,}1$.'
loesung: |
  Ansatz: Wir sprechen die Definition in der Reihenfolge der Quantoren: zuerst $\varepsilon$, dann $N$, dann alle $n \ge N$.
  ---
  a) Eine Folge $(a_n)$ konvergiert gegen $a$, wenn es zu jedem $\varepsilon > 0$ einen Index $N$ gibt, sodass für alle $n \ge N$ gilt: $|a_n - a| < \varepsilon$.
  ---
  b) $\varepsilon = 0{,}1$ ist die Toleranz: Das Band ist $(3{,}9;\ 4{,}1)$. Der Abstand ist $|a_n - 4| = \frac3n$, und $\frac3n < 0{,}1 \iff n > 30$. Also ist $N = 31$ die Stelle, ab der alle Glieder im Band liegen.
  ---
  c) Ein konkretes $\varepsilon$ ist eine einzige Runde des Spiels. Der Grenzwert verlangt, dass jede Runde gewonnen wird. Dafür braucht man eine Regel $N(\varepsilon)$, hier zum Beispiel jede natürliche Zahl $N > \frac{3}{\varepsilon}$.
```

## Zu gegebenem ε das passende N berechnen

```aufgabe
id: gf-n-vorwissen
titel: Eine Ungleichung nach n auflösen
niveau: 1
art: check
angabe: |
  Für welche positiven ganzen Zahlen $n$ gilt $\dfrac{4}{n + 3} < 0{,}2$? Gib die Grenze $g$ in der Form $n > g$ an.
  (Vorwissen aus [Kapitel 2, „Ungleichungen“](/lernen/mathe3/gleichungen/ungleichungen).)
teile:
  - typ: zahl
    label: '$g$'
    loesung: "17"
    fehler:
      - wert: "20"
        meldung: |
          $n + 3 > 20$ ist richtig. Ziehe auf beiden Seiten noch $3$ ab.
      - wert: "0.8"
        meldung: |
          Du hast mit $0{,}2$ multipliziert statt dividiert. Aus $4 < 0{,}2\,(n + 3)$ folgt $n + 3 > \frac{4}{0{,}2} = 20$.
hinweise:
  - 'Mit $n + 3 > 0$ multiplizieren, dann durch $0{,}2$ dividieren.'
loesung: |
  $4 < 0{,}2\,(n + 3)$, also $n + 3 > 20$.
  ---
  Also $n > 17$. Die Grenze ist $g = 17$.
```

**Worum geht es in einem Satz?** Zu einer konkreten Toleranz wie $\varepsilon = 0{,}01$ bestimmen wir die Stelle $N$,
ab der alle Glieder im Band liegen. Das ist eine reine Rechenaufgabe und kommt in der Prüfung oft als Zusatzfrage.

Im Spiel-Bild bist du hier der Beweisende in **einer** Runde. Die Skeptikerin hat ihr $\varepsilon$ schon gewählt. Du
sollst die beste, also kleinste, Antwort $N$ finden. Der allgemeine Beweis für **alle** $\varepsilon$ folgt in
[11.4 Einen Grenzwert mit der Definition beweisen](/lernen/mathe3/grenzwerte-folgen/einen-grenzwert-mit-der-definition-beweisen).

### Das Vorgehen am Leitbeispiel

:::beispiel[Kleinstes N für eine Bruchfolge]
Folge $b_n = \frac{2n + 1}{n + 1}$, Grenzwert $2$, Toleranz $\varepsilon = 0{,}002$.

**Schritt 1, Abstand vereinfachen.** Wir bringen $b_n - 2$ auf einen gemeinsamen Nenner:
$$b_n - 2 = \frac{2n + 1 - 2(n + 1)}{n + 1} = \frac{-1}{n + 1}, \qquad\text{also}\qquad |b_n - 2| = \frac{1}{n + 1}.$$
Der Betrag macht das Minus weg, weil ein Abstand nie negativ ist.

**Schritt 2, Ungleichung aufstellen und lösen.** Wir verlangen $\frac{1}{n + 1} < 0{,}002$. Beide Seiten sind positiv.
Wir multiplizieren mit $n + 1$ und dividieren durch $0{,}002$: $n + 1 > \frac{1}{0{,}002} = 500$. Also $n > 499$.

**Schritt 3, kleinstes $N$ ablesen.** Gesucht ist die kleinste ganze Zahl, die **echt größer** als $499$ ist. Das ist
$N = 500$.

**Schritt 4, Kontrolle.** Für $n = 499$ ist der Abstand $\frac{1}{500} = 0{,}002$, also **nicht** kleiner als $0{,}002$.
Für $n = 500$ ist er $\frac{1}{501} \approx 0{,}001996 < 0{,}002$. Weil der Abstand mit wachsendem $n$ kleiner wird, gilt
die Bedingung auch für alle $n > 500$. ✓
:::

```reflexion
frage: Warum genügt es in Schritt 4, nur $n = N - 1$ und $n = N$ zu prüfen, obwohl die Definition „für alle $n \ge N$“ verlangt?
antwort: |
  Der Abstand $\frac{1}{n + 1}$ wird mit wachsendem $n$ immer kleiner, er ist also **monoton fallend**. Wenn er bei $n = N$
  schon unter $\varepsilon$ liegt, liegt er bei allen größeren $n$ erst recht darunter. Die Prüfung von $n = N - 1$ zeigt,
  dass $N$ wirklich das **kleinste** passende $N$ ist. Bei einer Folge, deren Abstand nicht monoton fällt, müsste man
  genauer hinsehen.
```

### Quadrate und Potenzen

:::beispiel[Kleinstes N bei quadratischem Nenner]
Folge $a_n = \frac{n^2 + 2}{n^2}$, Grenzwert $1$, Toleranz $\varepsilon = 0{,}001$.

**Schritt 1:** $a_n - 1 = \frac{n^2 + 2 - n^2}{n^2} = \frac{2}{n^2}$. Das ist positiv, also $|a_n - 1| = \frac{2}{n^2}$.

**Schritt 2:** $\frac{2}{n^2} < 0{,}001 \iff n^2 > \frac{2}{0{,}001} = 2000$. Weil $n$ positiv ist, dürfen wir die Wurzel
ziehen: $n > \sqrt{2000} \approx 44{,}72$.

**Schritt 3:** Die kleinste ganze Zahl über $44{,}72$ ist $N = 45$.

**Schritt 4, Kontrolle:** $\frac{2}{44^2} = \frac{2}{1936} \approx 0{,}00103$ ist zu groß. $\frac{2}{45^2} = \frac{2}{2025} \approx 0{,}00099$
ist kleiner als $0{,}001$. ✓
:::

:::beispiel[Kleinstes N bei einer Potenz qⁿ]
Folge $a_n = 0{,}8^n$, Grenzwert $0$, Toleranz $\varepsilon = 0{,}01$.

**Schritt 1:** $|a_n - 0| = 0{,}8^n$, weil die Potenz positiv ist.

**Schritt 2:** Wir lösen $0{,}8^n < 0{,}01$ durch Logarithmieren. Der Logarithmus $\ln$ ist streng wachsend, also bleibt
das Zeichen: $n \cdot \ln 0{,}8 < \ln 0{,}01$. Jetzt dividieren wir durch $\ln 0{,}8 \approx -0{,}2231$. Diese Zahl ist
**negativ**, deshalb dreht sich das Zeichen um:
$$n > \frac{\ln 0{,}01}{\ln 0{,}8} \approx \frac{-4{,}6052}{-0{,}2231} \approx 20{,}64.$$

**Schritt 3:** $N = 21$.

**Schritt 4, Kontrolle:** $0{,}8^{20} \approx 0{,}0115$ ist zu groß, $0{,}8^{21} \approx 0{,}0092$ passt. ✓
:::

:::merke[Rezept: kleinstes N zu gegebenem ε]
1. **Abstand vereinfachen:** $|a_n - a|$ auf einen Bruch bringen. Für $n \ge 1$ ist meist klar, ob der Ausdruck im Betrag positiv oder negativ ist. Dann den Betrag weglassen oder das Minus streichen.
2. **Ungleichung lösen:** $|a_n - a| < \varepsilon$ nach $n$ auflösen bis zur Form $n > g$. Beim Dividieren durch eine negative Zahl (zum Beispiel $\ln q$ mit $0 < q < 1$) dreht sich das Zeichen.
3. **Kleinstes $N$:** die kleinste ganze Zahl, die **echt größer** als $g$ ist. Ist $g$ selbst ganz, dann $N = g + 1$.
4. **Kontrolle:** $n = N - 1$ und $n = N$ einsetzen. Das erste muss scheitern, das zweite passen.
:::

:::achtung[„Kleiner gleich“ statt „kleiner“]
Falsch: „$\frac{1}{n + 1} < 0{,}002 \iff n + 1 \ge 500$, also $N = 499$.“

Richtig: Aus der echten Ungleichung $\frac{1}{n + 1} < 0{,}002$ folgt $n + 1 > 500$, nicht $\ge 500$. Für $n = 499$ ist der
Abstand genau $\frac{1}{500} = 0{,}002$, und $0{,}002 < 0{,}002$ ist falsch. Das richtige Ergebnis ist $N = 500$. Die
Kontrolle in Schritt 4 deckt diesen Fehler sofort auf.
:::

:::achtung[Das Zeichen beim Logarithmieren nicht gedreht]
Falsch: „$0{,}8^n < 0{,}01 \iff n < \frac{\ln 0{,}01}{\ln 0{,}8} \approx 20{,}64$, also gilt die Ungleichung bis $n = 20$.“

Richtig: $\ln 0{,}8$ ist negativ. Beim Dividieren durch eine negative Zahl dreht sich das Zeichen: $n > 20{,}64$.
Eine Probe zeigt den Fehler sofort: $0{,}8^1 = 0{,}8$ ist sicher **nicht** kleiner als $0{,}01$, obwohl $1 < 20$ ist.
Kleine Potenzen von $0{,}8$ sind groß, erst große Potenzen werden klein.
:::

:::achtung[Vorzeichenfehler beim Abstand]
Falsch: „$\frac{2n + 1}{n + 1} - 2 = \frac{2n + 1 - 2n + 2}{n + 1} = \frac{3}{n + 1}$.“

Richtig: Das Minus vor $2(n + 1)$ gilt für **beide** Summanden in der Klammer: $-2(n + 1) = -2n - 2$. Also
$2n + 1 - 2n - 2 = -1$ und der Abstand ist $\frac{1}{n + 1}$. Mit dem falschen Abstand $\frac{3}{n + 1}$ käme für
$\varepsilon = 0{,}002$ das falsche $N = 1500$ heraus. Eine Probe mit $n = 1$ hilft: $b_1 = 1{,}5$, der Abstand zu $2$ ist $0{,}5 = \frac{1}{2}$, nicht $\frac32$.
:::

```aufgabe
id: gf-eps-1n
titel: N für 1/(2n)
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Für $a_n = \dfrac{1}{2n}$ und $\varepsilon = 0{,}001$: Bestimme das kleinste $N$, sodass $|a_n - 0| < \varepsilon$ für alle $n \ge N$ gilt.
teile:
  - typ: zahl
    label: '$N$'
    loesung: "501"
    toleranz: 0.1
    fehler:
      - wert: "500"
        meldung: |
          Für $n = 500$ ist $\frac{1}{1000} = 0{,}001$, also genau der Rand. Gesucht ist die kleinste ganze Zahl **über** der Grenze.
      - wert: "1001"
        meldung: |
          Du hast den Faktor $2$ im Nenner übersehen. Aus $\frac{1}{2n} < 0{,}001$ folgt $2n > 1000$.
hinweise:
  - 'Löse $\frac{1}{2n} < 0{,}001$: zuerst $2n > \dots$, dann durch $2$ dividieren.'
loesung: |
  Ansatz: Der Abstand ist $\frac{1}{2n}$ (positiv). Bedingung $\frac{1}{2n} < 0{,}001 \iff 2n > 1000 \iff n > 500$.
  ---
  Kleinstes $N = 501$. Kontrolle: $n = 500$ liefert genau $0{,}001$, $n = 501$ liefert $\frac{1}{1002} \approx 0{,}000998$ ✓.
```

```aufgabe
id: gf-eps-bruch
titel: N für einen Bruchterm
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Es ist $\lim\limits_{n\to\infty} \frac{4n + 3}{n + 2} = 4$ und $|a_n - 4| = \frac{5}{n + 2}$.
  Bestimme das kleinste $N$ für $\varepsilon = 0{,}01$.
teile:
  - typ: zahl
    label: '$N$'
    loesung: "499"
    toleranz: 0.1
    fehler:
      - wert: "498"
        meldung: |
          Für $n = 498$ ist der Abstand $\frac{5}{500} = 0{,}01$, genau der Rand. Die Bedingung lautet $n > 498$.
      - wert: "500"
        meldung: |
          $n + 2 > 500$ ist richtig, aber dann ist $n > 498$. Du hast vergessen, die $2$ abzuziehen, oder hast $n + 2$ statt $n$ angegeben.
hinweise:
  - '$\frac{5}{n + 2} < 0{,}01 \iff n + 2 > 500$.'
loesung: |
  Ansatz: $\frac{5}{n + 2} < 0{,}01$. Mit $n + 2$ multiplizieren und durch $0{,}01$ dividieren: $n + 2 > 500$, also $n > 498$.
  ---
  Kleinstes $N = 499$. Kontrolle: $\frac{5}{501} \approx 0{,}00998 < 0{,}01$, aber $\frac{5}{500} = 0{,}01$ ✓.
```

```aufgabe
id: gf-eps-quadrat
titel: N bei quadratischem Nenner
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Für $a_n = \dfrac{3}{n^2}$ und $\varepsilon = 10^{-4}$: Ab welchem Index $N$ gilt $|a_n| < \varepsilon$ für alle $n \ge N$ (kleinstes $N$)?
teile:
  - typ: zahl
    label: '$N$'
    loesung: "174"
    toleranz: 0.1
    fehler:
      - wert: "173"
        meldung: |
          $\sqrt{30\,000} \approx 173{,}2$. Du hast abgerundet. $173^2 = 29\,929$ ist noch kleiner als $30\,000$.
      - wert: "30001"
        meldung: |
          $n^2 > 30\,000$ ist richtig. Jetzt fehlt noch das Wurzelziehen.
hinweise:
  - '$\frac{3}{n^2} < 10^{-4} \iff n^2 > 30\,000$. Danach die Wurzel ziehen.'
loesung: |
  Ansatz: $\frac{3}{n^2} < 0{,}0001 \iff n^2 > 30\,000 \iff n > \sqrt{30\,000} \approx 173{,}2$ (für positive $n$).
  ---
  Kleinstes $N = 174$. Kontrolle: $173^2 = 29\,929 < 30\,000$ (zu klein), $174^2 = 30\,276 > 30\,000$ ✓.
```

```aufgabe
id: gf-eps-wurzel
titel: Langsame Konvergenz
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Die Folge $a_n = \dfrac{1}{\sqrt n}$ ist eine Nullfolge.

  a) Bestimme das kleinste $N$ für $\varepsilon = 0{,}02$.

  b) Gib allgemein ein passendes $N(\varepsilon)$ an.
teile:
  - typ: zahl
    label: 'a) $N$'
    loesung: "2501"
    toleranz: 0.1
    fehler:
      - wert: "51"
        meldung: |
          Aus $\sqrt n > 50$ hast du $n > 50$ gemacht. Um $n$ zu bekommen, musst du beide Seiten **quadrieren**.
      - wert: "2500"
        meldung: |
          Für $n = 2500$ ist $\frac{1}{\sqrt{2500}} = \frac{1}{50} = 0{,}02$, also genau der Rand.
  - typ: auswahl
    label: 'b) Passendes $N(\varepsilon)$'
    optionen:
      - 'jede natürliche Zahl $N > \dfrac{1}{\varepsilon}$'
      - 'jede natürliche Zahl $N > \dfrac{1}{\varepsilon^2}$'
      - 'jede natürliche Zahl $N > \sqrt{\varepsilon}$'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Das wäre richtig für $\frac1n$. Hier steht im Nenner $\sqrt n$, und $\sqrt n > \frac1\varepsilon$ muss noch quadriert werden.
      - wert: 2
        meldung: |
          Für kleine $\varepsilon$ ist $\sqrt\varepsilon$ eine kleine Zahl, dann wäre zum Beispiel $N = 1$ erlaubt. Ein kleineres $\varepsilon$ muss aber ein **größeres** $N$ erzwingen.
hinweise:
  - '$\frac{1}{\sqrt n} < \varepsilon \iff \sqrt n > \frac1\varepsilon$.'
  - 'Quadriere beide Seiten. Das ist eine Äquivalenzumformung, weil beide Seiten positiv sind.'
loesung: |
  Ansatz: $\frac{1}{\sqrt n} < \varepsilon \iff \sqrt n > \frac{1}{\varepsilon} \iff n > \frac{1}{\varepsilon^2}$. Quadrieren ist erlaubt, weil beide Seiten positiv sind.
  ---
  a) $\varepsilon = 0{,}02$: $n > \frac{1}{0{,}0004} = 2500$, also $N = 2501$.
  ---
  b) Jede natürliche Zahl $N > \frac{1}{\varepsilon^2}$ passt.
  ---
  Plausibilität: Die Folge konvergiert viel langsamer als $\frac1n$. Für $\varepsilon = 0{,}02$ reicht bei $\frac1n$ schon $N = 51$, hier braucht man $N = 2501$.
```

```aufgabe
id: gf-qn-schwelle
titel: Ab wann ist 0,9ⁿ klein genug?
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Bestimme das kleinste $N$, sodass $0{,}9^n < 0{,}001$ für alle $n \ge N$ gilt.
teile:
  - typ: zahl
    label: '$N$'
    loesung: "66"
    fehler:
      - wert: "65"
        meldung: |
          Die Rechnung liefert $n > 65{,}56$. Du hast abgerundet. Prüfe: $0{,}9^{65} \approx 0{,}00106$ ist noch zu groß.
      - wert: "1"
        meldung: |
          Das Zeichen wurde beim Dividieren durch $\ln 0{,}9 < 0$ nicht umgedreht. Dann käme „$n < 65{,}56$“ heraus, was schon für $n = 1$ falsch ist: $0{,}9^1 = 0{,}9$.
hinweise:
  - 'Logarithmieren: $n \cdot \ln 0{,}9 < \ln 0{,}001$.'
  - 'Dividieren durch $\ln 0{,}9 \approx -0{,}105$: Das ist negativ, also dreht sich das Zeichen.'
loesung: |
  Ansatz: Logarithmieren, weil $n$ im Exponenten steht. $\ln$ ist streng wachsend, das Zeichen bleibt: $n\ln 0{,}9 < \ln 0{,}001$.
  ---
  Division durch $\ln 0{,}9 < 0$ dreht das Zeichen: $n > \frac{\ln 0{,}001}{\ln 0{,}9} \approx \frac{-6{,}9078}{-0{,}10536} \approx 65{,}56$.
  ---
  Kleinstes $N = 66$. Weil $0{,}9^n$ streng fällt, gilt die Ungleichung dann für alle $n \ge 66$.
  ---
  Kontrolle: $0{,}9^{65} \approx 0{,}00106$ (zu groß), $0{,}9^{66} \approx 0{,}00096$ ✓.
```

```aufgabe
id: gf-eps-umkehr
titel: Welche Toleranz war gemeint?
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Für $a_n = \dfrac{6}{n + 1}$ (Grenzwert $0$) führt die Rechnung zu einer Toleranz $\varepsilon$ auf die Bedingung $n > 299$.
  Welches $\varepsilon$ wurde vorgegeben?
teile:
  - typ: zahl
    label: '$\varepsilon$'
    loesung: "6/300"
    anzeige: '0{,}02'
    toleranz: 0.00001
    fehler:
      - wert: "1/300"
        meldung: |
          Du hast den Zähler $6$ vergessen. Aus $\frac{6}{n + 1} < \varepsilon$ folgt $n + 1 > \frac{6}{\varepsilon}$.
      - wert: "6/299"
        meldung: |
          Die Bedingung $n > 299$ bedeutet $n + 1 > 300$. Im Nenner steht also $300$, nicht $299$.
hinweise:
  - 'Löse $\frac{6}{n + 1} < \varepsilon$ allgemein: $n > \frac{6}{\varepsilon} - 1$.'
  - 'Setze $\frac{6}{\varepsilon} - 1 = 299$ und löse nach $\varepsilon$ auf.'
loesung: |
  Ansatz: Wir lösen die Bedingung allgemein und vergleichen. $\frac{6}{n + 1} < \varepsilon \iff n + 1 > \frac{6}{\varepsilon} \iff n > \frac{6}{\varepsilon} - 1$.
  ---
  Gleichsetzen: $\frac{6}{\varepsilon} - 1 = 299 \iff \frac{6}{\varepsilon} = 300 \iff \varepsilon = \frac{6}{300} = 0{,}02$.
  ---
  Probe: $\frac{6}{n + 1} < 0{,}02 \iff n + 1 > 300 \iff n > 299$ ✓. Das kleinste $N$ wäre dann $300$.
```

```aufgabe
id: gf-eps-fehlersuche
titel: Fehler in einer N-Rechnung finden
niveau: 2
lernziel: 1
kompetenz: begruenden
angabe: |
  Ein Mitschüler rechnet für $a_n = \frac{3n + 2}{n + 1}$, Grenzwert $3$, und $\varepsilon = 0{,}05$:

  „$a_n - 3 = \frac{3n + 2 - 3n - 3}{n + 1} = \frac{-1}{n + 1}$. Und $\frac{-1}{n + 1} < 0{,}05$ gilt für alle $n$. Also ist $N = 1$.“

  a) Wo liegt der Fehler?

  b) Bestimme das richtige kleinste $N$.
teile:
  - typ: auswahl
    label: 'a)'
    optionen:
      - 'Er hat den Betrag vergessen: Gefordert ist $|a_n - 3| < 0{,}05$, nicht $a_n - 3 < 0{,}05$.'
      - 'Er hat sich beim gemeinsamen Nenner verrechnet.'
      - 'Der Grenzwert ist nicht $3$.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Prüfe die Rechnung mit $n = 1$: $a_1 = \frac52$, also $a_1 - 3 = -\frac12$, und $\frac{-1}{2} = -\frac12$ ✓. Der Bruch stimmt. Der Fehler liegt danach.
      - wert: 2
        meldung: |
          Zähler und Nenner haben den Grad $1$, die führenden Koeffizienten sind $3$ und $1$. Der Grenzwert ist $3$. Der Fehler liegt woanders.
  - typ: zahl
    label: 'b) richtiges $N$'
    loesung: "20"
    fehler:
      - wert: "1"
        meldung: |
          Mit dem Betrag lautet die Bedingung $\frac{1}{n + 1} < 0{,}05$. Für $n = 1$ ist der Abstand $0{,}5$, also viel zu groß.
      - wert: "19"
        meldung: |
          Für $n = 19$ ist der Abstand $\frac{1}{20} = 0{,}05$, genau der Rand.
hinweise:
  - 'Eine negative Zahl ist immer kleiner als $0{,}05$. Sagt das etwas über den **Abstand**?'
  - 'Richtig ist $|a_n - 3| = \frac{1}{n + 1}$. Löse $\frac{1}{n + 1} < 0{,}05$.'
loesung: |
  Ansatz: Die Definition verlangt einen kleinen **Abstand**, also eine Bedingung mit Betrag.
  ---
  a) Ohne Betrag ist jede negative Zahl „kleiner als $0{,}05$“, auch $-1000$. Das sagt nichts über die Nähe zu $3$. Der Fehler ist der fehlende Betrag.
  ---
  b) $|a_n - 3| = \frac{1}{n + 1} < 0{,}05 \iff n + 1 > 20 \iff n > 19$. Kleinstes $N = 20$.
  ---
  Kontrolle: $\frac{1}{21} \approx 0{,}048 < 0{,}05$, aber $\frac{1}{20} = 0{,}05$ ✓.
```

```aufgabe
id: gf-eps-gefuehrt
titel: Kleinstes N Schritt für Schritt
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Die Folge $a_n = \dfrac{5n + 1}{n + 3}$ hat den Grenzwert $5$. Bestimme das kleinste $N$ für $\varepsilon = 0{,}1$.
teile:
  - typ: zahl
    label: '$N$'
    loesung: "138"
    toleranz: 0.1
    fehler:
      - wert: "137"
        meldung: |
          Für $n = 137$ ist der Abstand $\frac{14}{140} = 0{,}1$, genau der Rand.
      - wert: "140"
        meldung: |
          $n + 3 > 140$ ist richtig. Dann ist $n > 137$. Ziehe die $3$ noch ab.
      - wert: "18"
        meldung: |
          Prüfe den Zähler des Abstands: $5n + 1 - 5(n + 3) = 5n + 1 - 5n - 15 = -14$, nicht $-2$.
hinweise:
  - 'Bringe $a_n - 5$ auf einen Bruch. Achte auf das Minus vor $5(n + 3)$.'
  - 'Mit dem Abstand $\frac{14}{n + 3}$ wird die Bedingung zu $n + 3 > \frac{14}{0{,}1}$.'
gefuehrt:
  - text: Vereinfache den Abstand $|a_n - 5|$ zu einem Bruch in $n$.
    teil:
      typ: term
      variable: n
      bereich: [1, 10]
      loesung: "14/(n+3)"
      fehler:
        - wert: "2/(n+3)"
          meldung: 'Das Minus gilt für den ganzen Ausdruck $5(n + 3) = 5n + 15$. Also $5n + 1 - 5n - 15 = -14$.'
        - wert: "-14/(n+3)"
          meldung: 'Das ist $a_n - 5$. Der Abstand ist der Betrag davon.'
    erklaerung: '$a_n - 5 = \frac{5n + 1 - 5n - 15}{n + 3} = \frac{-14}{n + 3}$, also $|a_n - 5| = \frac{14}{n + 3}$.'
  - text: Aus $\frac{14}{n + 3} < 0{,}1$ folgt $n + 3 > \dots$? Gib die Zahl an.
    teil:
      typ: zahl
      loesung: "140"
      toleranz: 0.1
      fehler:
        - wert: "1.4"
          meldung: 'Du hast mit $0{,}1$ multipliziert statt dividiert. $\frac{14}{0{,}1} = 140$.'
    erklaerung: 'Mit $n + 3$ multiplizieren und durch $0{,}1$ dividieren: $n + 3 > 140$.'
  - text: Für welche $n$ gilt das? Gib die Grenze $g$ in $n > g$ an.
    teil:
      typ: zahl
      loesung: "137"
      toleranz: 0.1
      fehler:
        - wert: "143"
          meldung: 'Um $n$ allein zu bekommen, zieht man $3$ ab, nicht addiert.'
    erklaerung: '$n > 137$.'
  - text: Welches ist das kleinste $N$? Prüfe auch $n = N - 1$.
    teil:
      typ: zahl
      loesung: "138"
      toleranz: 0.1
      fehler:
        - wert: "137"
          meldung: 'Bei $n = 137$ ist der Abstand $\frac{14}{140} = 0{,}1$, also nicht kleiner.'
    erklaerung: '$N = 138$. Kontrolle: $\frac{14}{141} \approx 0{,}0993 < 0{,}1$, aber $\frac{14}{140} = 0{,}1$.'
loesung: |
  Ansatz: Rezept in vier Schritten. Zuerst den Abstand: $a_n - 5 = \frac{5n + 1 - 5(n + 3)}{n + 3} = \frac{-14}{n + 3}$, also $|a_n - 5| = \frac{14}{n + 3}$.
  ---
  Ungleichung: $\frac{14}{n + 3} < 0{,}1 \iff n + 3 > 140 \iff n > 137$.
  ---
  Kleinstes $N = 138$, weil das die kleinste ganze Zahl über $137$ ist.
  ---
  Kontrolle: $n = 137$ gibt $\frac{14}{140} = 0{,}1$ (Rand, scheitert), $n = 138$ gibt $\frac{14}{141} \approx 0{,}0993$ ✓.
```

```aufgabe
id: gf-eps-tabelle
titel: Wie wächst N, wenn ε schrumpft?
niveau: 3
lernziel: 1
kompetenz: anwenden
angabe: |
  Ein Programm berechnet die Glieder der Nullfolge $a_n = \dfrac{7}{2n - 1}$ ($n \ge 1$). Es soll anhalten, sobald alle weiteren Glieder kleiner als $\varepsilon$ sind.

  a) Bestimme das kleinste $N$ für $\varepsilon = 0{,}01$.

  b) Bestimme das kleinste $N$ für $\varepsilon = 0{,}0001$.

  c) Wie verändert sich $N$ ungefähr, wenn man $\varepsilon$ durch $100$ teilt?
teile:
  - typ: zahl
    label: 'a) $N$ für $\varepsilon = 0{,}01$'
    loesung: "351"
    toleranz: 0.1
    fehler:
      - wert: "350"
        meldung: |
          Die Rechnung liefert $n > 350{,}5$. Die kleinste ganze Zahl darüber ist nicht $350$.
      - wert: "701"
        meldung: |
          $2n - 1 > 700$ ist richtig, das ist aber noch nicht nach $n$ aufgelöst: $2n > 701$, also $n > 350{,}5$.
  - typ: zahl
    label: 'b) $N$ für $\varepsilon = 0{,}0001$'
    loesung: "35001"
    toleranz: 0.1
    fehler:
      - wert: "35000"
        meldung: |
          Die Rechnung liefert $n > 35\,000{,}5$. Die kleinste ganze Zahl darüber ist $35\,001$, nicht $35\,000$.
      - wert: "3501"
        meldung: |
          Prüfe die Division: $\frac{7}{0{,}0001} = 70\,000$, nicht $7000$.
  - typ: auswahl
    label: 'c)'
    optionen:
      - '$N$ wird ungefähr mit $100$ multipliziert.'
      - '$N$ wird ungefähr mit $10$ multipliziert.'
      - '$N$ bleibt ungefähr gleich.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Faktor $10$ gilt bei Folgen wie $\frac{1}{n^2}$. Hier steht $n$ nur in der ersten Potenz im Nenner. Vergleiche deine Werte aus a) und b): $351$ und $35\,001$.
      - wert: 2
        meldung: |
          Eine strengere Toleranz erfüllt die Folge erst später. Vergleiche deine Werte aus a) und b).
hinweise:
  - 'Allgemein: $\frac{7}{2n - 1} < \varepsilon \iff 2n - 1 > \frac{7}{\varepsilon} \iff n > \frac12\left(\frac{7}{\varepsilon} + 1\right)$.'
  - 'Setze $\varepsilon = 0{,}01$ und $\varepsilon = 0{,}0001$ in diese Grenze ein und nimm jeweils die nächste ganze Zahl darüber.'
loesung: |
  Ansatz: Wir lösen die Bedingung zuerst allgemein. Für $n \ge 1$ ist $2n - 1 > 0$, also $\frac{7}{2n - 1} < \varepsilon \iff 2n - 1 > \frac{7}{\varepsilon} \iff n > \frac12\left(\frac{7}{\varepsilon} + 1\right)$.
  ---
  a) $\varepsilon = 0{,}01$: $n > \frac12(700 + 1) = 350{,}5$, also $N = 351$. Kontrolle: $\frac{7}{701} \approx 0{,}00999 < 0{,}01$, und für $n = 350$ ist $\frac{7}{699} \approx 0{,}01001$.
  ---
  b) $\varepsilon = 0{,}0001$: $n > \frac12(70\,000 + 1) = 35\,000{,}5$, also $N = 35\,001$.
  ---
  c) $\frac{35\,001}{351} \approx 99{,}7$. $N$ wächst ungefähr mit dem Faktor $100$, weil die Grenze $\frac12\left(\frac7\varepsilon + 1\right)$ im Wesentlichen proportional zu $\frac{1}{\varepsilon}$ ist. Für das Programm heißt das: Zwei Dezimalstellen mehr Genauigkeit kosten etwa hundertmal so viele Schritte.
```

## Einen Grenzwert mit der Definition beweisen

```aufgabe
id: gf-bew-vorwissen
titel: Eine Ungleichung mit Buchstaben auflösen
niveau: 1
art: check
angabe: |
  In [11.3 Zu gegebenem ε das passende N berechnen](/lernen/mathe3/grenzwerte-folgen/zu-gegebenem-epsilon-das-passende-n-berechnen) hast du Ungleichungen wie $\frac{1}{n + 1} < 0{,}01$ mit konkreten Zahlen gelöst. Jetzt steht statt
  $0{,}01$ ein Buchstabe $\varepsilon > 0$. Welche Bedingung an $n$ ist gleichwertig mit $\dfrac{1}{n + 1} < \varepsilon$?
  (Vorwissen aus [Kapitel 2, „Ungleichungen“](/lernen/mathe3/gleichungen/ungleichungen).)
teile:
  - typ: auswahl
    optionen:
      - '$n > \dfrac{1}{\varepsilon} - 1$'
      - '$n < \dfrac{1}{\varepsilon} - 1$'
      - '$n > \varepsilon - 1$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Beim Kehrwert positiver Zahlen dreht sich das Zeichen: Ein **kleiner** Bruch $\frac{1}{n + 1}$ verlangt einen **großen** Nenner.
          Prüfe mit $\varepsilon = 0{,}01$: Muss $n$ groß oder klein sein?
      - wert: 2
        meldung: |
          Du hast den Kehrwert vergessen. Aus $1 < \varepsilon\,(n + 1)$ folgt durch Division durch $\varepsilon$: $n + 1 > \frac{1}{\varepsilon}$.
hinweise:
  - 'Multipliziere mit $n + 1 > 0$ und dividiere durch $\varepsilon > 0$. Beide Zahlen sind positiv, das Zeichen bleibt.'
loesung: |
  Mit $n + 1$ multiplizieren: $1 < \varepsilon\,(n + 1)$. Durch $\varepsilon$ dividieren: $\frac{1}{\varepsilon} < n + 1$.
  ---
  $1$ abziehen: $n > \frac{1}{\varepsilon} - 1$. Probe mit $\varepsilon = 0{,}01$: $n > 99$, also $N = 100$. Das passt zum Leitbeispiel $b_n = \frac{2n + 1}{n + 1}$, dessen Abstand $\frac{1}{n + 1}$ ist.
```

**Worum geht es in einem Satz?** Wir zeigen nicht mehr nur für **ein** $\varepsilon$, dass es ein passendes $N$ gibt,
sondern für **jedes** $\varepsilon > 0$ gleichzeitig. Das gelingt mit einer Formel, die zu jedem $\varepsilon$ ein $N$ liefert.

Diese Stelle ist für fast alle ungewohnt. Ein Beweis mit Buchstaben fühlt sich anfangs an, als würde man ins Leere
rechnen. Lies den Abschnitt langsam und rechne jede Zeile mit. Am Ende steht ein festes Schema, das du in jeder
Prüfung wiederverwenden kannst.

### Das Bild: ein Automat für N

Im Spiel aus [11.2 Die ε-N-Definition des Grenzwerts](/lernen/mathe3/grenzwerte-folgen/die-epsilon-n-definition-des-grenzwerts) wählt die Skeptikerin eine Toleranz, und der Beweisende
antwortet mit einem Index $N$. In [11.3 Zu gegebenem ε das passende N berechnen](/lernen/mathe3/grenzwerte-folgen/zu-gegebenem-epsilon-das-passende-n-berechnen) hast du einzelne Runden gespielt. Ein **Beweis** muss aber alle
Runden auf einmal gewinnen. Es gibt unendlich viele mögliche $\varepsilon$, man kann sie nicht alle einzeln durchrechnen.

Die Lösung ist ein **Automat**: Man wirft ein beliebiges $\varepsilon$ hinein, und heraus kommt ein passendes $N$. Im
Beweis beschreibst du diesen Automaten durch eine Formel, etwa „wähle $N$ größer als $\frac{1}{\varepsilon}$“. Dann zeigst
du, dass jedes so gewählte $N$ funktioniert. Weil die Formel für **jedes** $\varepsilon$ gilt, hast du jede Runde gewonnen.

### Ein Werkzeug: Über jeder Zahl liegt eine natürliche Zahl

Der Automat braucht eine Garantie: Zu jeder noch so großen Zahl, etwa $\frac{1}{\varepsilon}$, gibt es eine natürliche
Zahl, die noch größer ist. Das heißt **archimedisches Prinzip**, nach dem griechischen Mathematiker Archimedes. In
Alltagssprache: Die natürlichen Zahlen $1, 2, 3, \dots$ hören nie auf und überholen jede reelle Zahl.

- **Beispiel:** Zu $\frac{1}{\varepsilon} = 333{,}3\ldots$ (für $\varepsilon = 0{,}003$) ist $N = 334$ eine natürliche Zahl darüber.
- **Nicht-Beispiel:** Für eine Menge wie $\{1, 2, \dots, 100\}$ gilt das nicht. Über $150$ liegt keine Zahl dieser Menge. Das
  Prinzip ist also eine echte Eigenschaft der natürlichen Zahlen, keine Selbstverständlichkeit.

```aufgabe
id: gf-bew-check-archimedes
titel: Eine natürliche Zahl darüber
niveau: 1
art: check
angabe: |
  Für $\varepsilon = 0{,}03$ verlangt ein Beweis eine natürliche Zahl $N > \frac{2}{\varepsilon}$. Welches ist die **kleinste** solche Zahl?
teile:
  - typ: zahl
    label: 'kleinstes $N$'
    loesung: "67"
    fehler:
      - wert: "66"
        meldung: |
          $\frac{2}{0{,}03} = 66{,}6\ldots$ Die Zahl $66$ liegt **darunter**. Gesucht ist die nächste natürliche Zahl, die echt größer ist.
      - wert: "0.06"
        meldung: |
          Du hast $2 \cdot 0{,}03$ gerechnet. Gesucht ist $2$ **geteilt durch** $0{,}03$.
hinweise:
  - 'Berechne zuerst $\frac{2}{0{,}03}$ mit dem Taschenrechner und runde dann **auf**.'
loesung: |
  $\frac{2}{0{,}03} = 66{,}\overline{6}$.
  ---
  Die kleinste natürliche Zahl, die echt größer ist, ist $67$. Jede größere Zahl wäre im Beweis ebenfalls erlaubt.
```

### Der erste vollständige Beweis: 1/n geht gegen 0

:::satz[Die einfachste Nullfolge]
$\displaystyle\lim_{n \to \infty} \frac{1}{n} = 0$.
:::

Ein Beweis besteht aus zwei Teilen. Zuerst rechnet man auf einem **Schmierzettel** rückwärts: Wie groß muss $n$ sein?
Danach schreibt man die **Reinschrift** vorwärts: Man wählt $N$ und zeigt, dass es funktioniert. Nur die Reinschrift ist
der eigentliche Beweis. Der Schmierzettel zeigt dir, welches $N$ du wählen sollst.

:::beispiel[Schmierzettel und Reinschrift für 1/n]
**Schmierzettel (rückwärts).** Wir wollen $\left|\frac1n - 0\right| < \varepsilon$. Für $n \ge 1$ ist $\frac1n$ positiv, also
$\left|\frac1n - 0\right| = \frac1n$. Wir lösen $\frac1n < \varepsilon$: Mit $n$ multiplizieren und durch $\varepsilon$
dividieren ergibt $n > \frac{1}{\varepsilon}$. Also passt jedes $N$, das größer als $\frac{1}{\varepsilon}$ ist.

**Reinschrift (vorwärts), Satz für Satz mit Kommentar:**

1. „Sei $\varepsilon > 0$ beliebig.“ Damit sagst du: Ich nehme irgendeine Toleranz. Ich kenne ihren Wert nicht und
   rechne deshalb mit dem Buchstaben. Was ich jetzt zeige, gilt dann für jede Toleranz.
2. „Wähle eine natürliche Zahl $N > \frac{1}{\varepsilon}$.“ Das ist der Automat. Nach dem archimedischen Prinzip gibt es
   eine solche Zahl.
3. „Sei $n \ge N$.“ Jetzt nimmst du irgendein Glied ab der Stelle $N$.
4. „Dann ist $n \ge N > \frac{1}{\varepsilon}$, also $\left|\frac1n - 0\right| = \frac1n < \varepsilon$.“ Der letzte
   Schritt ist der Kehrwert: Aus $n > \frac{1}{\varepsilon}$ folgt $\frac1n < \varepsilon$, weil beide Seiten positiv sind.
5. „Weil $\varepsilon$ beliebig war, gilt $\lim\frac1n = 0$.“

**Probe mit Zahlen:** Für $\varepsilon = 0{,}003$ liefert der Automat ein $N > 333{,}3$, etwa $N = 334$. Tatsächlich ist
$\frac{1}{334} \approx 0{,}00299 < 0{,}003$, und alle späteren Glieder sind noch kleiner.
:::

**Was haben wir gezeigt?** Wir haben nicht eine einzige Toleranz geprüft, sondern eine Regel angegeben: „Nimm $N$ größer
als $\frac1\varepsilon$.“ Diese Regel gewinnt jede Runde des Spiels. Genau das verlangt die Definition.

**Typisches Missverständnis:** „Ich habe kein konkretes $N$ ausgerechnet, also ist der Beweis unvollständig.“ Das stimmt
nicht. Ein konkretes $N$ gibt es erst, wenn ein konkretes $\varepsilon$ vorliegt. Im Beweis ist $N$ eine **Formel in
$\varepsilon$**. Es muss auch nicht das kleinste $N$ sein. Jedes $N$, das funktioniert, beweist den Satz.

```reflexion
frage: Warum beginnt die Reinschrift mit „Sei $\varepsilon > 0$ beliebig“ und nicht mit „Sei $\varepsilon = 0{,}001$“?
antwort: |
  Mit $\varepsilon = 0{,}001$ hätte ich nur eine einzige Runde des Spiels gewonnen. Die Definition verlangt aber ein
  passendes $N$ zu **jeder** Toleranz. Wenn ich mit einem Buchstaben rechne und nichts über $\varepsilon$ voraussetze außer
  $\varepsilon > 0$, dann gilt jede Zeile für jede positive Zahl. So beweise ich unendlich viele Runden auf einmal.
```

### Der Beweis für das Leitbeispiel

:::beispiel[Beweis von (2n + 1)/(n + 1) → 2]
Behauptung: $\displaystyle\lim_{n\to\infty} \frac{2n + 1}{n + 1} = 2$. Aus [11.1 Was heißt „sich nähern“?](/lernen/mathe3/grenzwerte-folgen/was-heisst-sich-naehern-abstand-und-epsilon-umgebung) kennen
wir schon den Abstand $|b_n - 2| = \frac{1}{n + 1}$.

**Schmierzettel.** Wir verlangen $\frac{1}{n + 1} < \varepsilon$. Das ist gleichwertig mit $n + 1 > \frac{1}{\varepsilon}$,
also mit $n > \frac{1}{\varepsilon} - 1$. Der Automat lautet: „Wähle $N > \frac{1}{\varepsilon} - 1$.“

**Reinschrift.**
Sei $\varepsilon > 0$ beliebig. Wähle eine natürliche Zahl $N > \frac{1}{\varepsilon} - 1$. Sei $n \ge N$. Dann gilt
$$n + 1 \;\ge\; N + 1 \;>\; \frac{1}{\varepsilon}.$$
Wir haben dabei auf beiden Seiten von $n \ge N$ die Zahl $1$ addiert und dann die Wahl von $N$ benutzt. Der Kehrwert
zweier positiver Zahlen dreht das Zeichen um. Also ist
$$|b_n - 2| = \frac{1}{n + 1} < \varepsilon.$$
Weil $\varepsilon$ beliebig war, ist $\lim b_n = 2$ bewiesen.

**Probe mit Zahlen.** Für $\varepsilon = 0{,}01$ verlangt der Automat $N > 99$. Das kleinste solche $N$ ist $100$. Das ist
genau das Ergebnis aus dem Spiel in [11.2 Die ε-N-Definition des Grenzwerts](/lernen/mathe3/grenzwerte-folgen/die-epsilon-n-definition-des-grenzwerts).
:::

:::merke[Schema für einen ε-N-Beweis]
**Schmierzettel (rückwärts):**
1. Abstand $|a_n - a|$ vereinfachen: auf einen Bruch bringen, Betrag auflösen.
2. Die Ungleichung $|a_n - a| < \varepsilon$ nach $n$ auflösen, bis $n > g(\varepsilon)$ dasteht. Dabei ist $g(\varepsilon)$ ein Term in $\varepsilon$.

**Reinschrift (vorwärts):**
3. „Sei $\varepsilon > 0$ beliebig. Wähle eine natürliche Zahl $N > g(\varepsilon)$.“
4. „Für alle $n \ge N$ gilt …“ und dann eine Kette von Ungleichungen bis $|a_n - a| < \varepsilon$. Jedes Glied der Kette braucht eine Begründung.
5. Schlusssatz: „Weil $\varepsilon$ beliebig war, ist $\lim a_n = a$.“
:::

### Wenn die Ungleichung zu schwer ist: abschätzen

Manchmal lässt sich $|a_n - a| < \varepsilon$ nicht bequem nach $n$ auflösen. Dann hilft ein Trick. Man ersetzt den Abstand
durch einen **größeren**, aber einfacheren Ausdruck. Ist schon der größere Ausdruck kleiner als $\varepsilon$, dann erst recht der
Abstand selbst. Das Wort dafür ist **nach oben abschätzen**.

Ein Alltagsbild: Du willst wissen, ob dein Koffer unter $20$ kg wiegt. Du weißt, er wiegt höchstens so viel wie der
Koffer deiner Schwester, und der wiegt $18$ kg. Dann ist deiner auch unter $20$ kg. Du musst ihn gar nicht genau wiegen.

:::beispiel[Beweis mit Abschätzung: (n + 3)/n² → 0]
Behauptung: $\displaystyle\lim_{n\to\infty} \frac{n + 3}{n^2} = 0$. Der Abstand ist $\frac{n + 3}{n^2}$, weil der Bruch
positiv ist. Die Ungleichung $\frac{n + 3}{n^2} < \varepsilon$ wäre quadratisch in $n$. Das ist mühsam.

**Schmierzettel, Abschätzung.** Für $n \ge 3$ ist $3 \le n$, also $n + 3 \le n + n = 2n$. Ein größerer Zähler macht den
Bruch größer. Also gilt für $n \ge 3$:
$$\frac{n + 3}{n^2} \;\le\; \frac{2n}{n^2} \;=\; \frac{2}{n}.$$
Es reicht also, $\frac2n < \varepsilon$ zu erreichen. Das gilt für $n > \frac{2}{\varepsilon}$.

**Reinschrift.** Sei $\varepsilon > 0$ beliebig. Wähle eine natürliche Zahl $N$ mit $N \ge 3$ **und** $N > \frac{2}{\varepsilon}$.
Für $n \ge N$ gilt dann zweierlei. Erstens ist $n \ge 3$, also darf man abschätzen. Zweitens ist $n > \frac2\varepsilon$, also
$\frac2n < \varepsilon$. Zusammen:
$$\left|\frac{n + 3}{n^2} - 0\right| = \frac{n + 3}{n^2} \le \frac{2}{n} < \varepsilon.$$

**Probe mit Zahlen.** Für $\varepsilon = 0{,}01$ liefert die Regel $N = 201$. Das kleinste wirklich passende $N$ ist $103$.
Die Abschätzung verschenkt also etwas, aber das ist egal. Gefragt war nur, **ob** es ein $N$ gibt.
:::

```plot
x: [2.5, 15.5]
y: [0, 0.7]
achsen: { x: "n", y: "Wert" }
graphen:
  - { f: "2/x", farbe: 1, gestrichelt: true, label: "obere Schranke 2/n", von: 3, bis: 15.5 }
punkte:
  - { x: 3, y: 0.6667, farbe: 0 }
  - { x: 4, y: 0.4375, farbe: 0 }
  - { x: 5, y: 0.32, farbe: 0 }
  - { x: 6, y: 0.25, farbe: 0 }
  - { x: 7, y: 0.2041, farbe: 0 }
  - { x: 8, y: 0.1719, farbe: 0 }
  - { x: 9, y: 0.1481, farbe: 0 }
  - { x: 10, y: 0.13, farbe: 0, label: "(n + 3)/n²" }
  - { x: 11, y: 0.1157, farbe: 0 }
  - { x: 12, y: 0.1042, farbe: 0 }
  - { x: 13, y: 0.0947, farbe: 0 }
  - { x: 14, y: 0.0867, farbe: 0 }
  - { x: 15, y: 0.08, farbe: 0 }
beschriftung: Die Glieder (n + 3)/n² (Punkte) liegen ab n = 3 unter der gestrichelten Kurve 2/n. Weil die obere Kurve gegen 0 geht, werden auch die Punkte darunter beliebig klein. Bei n = 3 berühren sich beide, danach liegt die Kurve immer darüber.
```

:::achtung[In die falsche Richtung abgeschätzt]
Falsch: „Für $n \ge 1$ ist $\frac{n + 3}{n^2} \ge \frac{n}{n^2} = \frac1n$. Für $n > \frac1\varepsilon$ ist $\frac1n < \varepsilon$.
Also ist $\frac{n + 3}{n^2} < \varepsilon$.“

Richtig: Aus „$\frac{n + 3}{n^2}$ ist **größer** als $\frac1n$“ und „$\frac1n$ ist klein“ folgt nichts. Eine Zahl, die größer
als eine kleine Zahl ist, kann trotzdem groß sein. Zahlenprobe: Für $\varepsilon = 0{,}1$ liefert die falsche Regel $n = 11$,
aber $\frac{14}{121} \approx 0{,}116$ ist **nicht** kleiner als $0{,}1$. Man darf den Abstand nur durch etwas **Größeres**
ersetzen: Zähler vergrößern oder Nenner verkleinern.
:::

:::achtung[Ein Zahlenbeispiel statt eines Beweises]
Falsch: „Beweis von $\frac{1}{n} \to 0$: Für $\varepsilon = 0{,}001$ ist $N = 1001$, denn $\frac{1}{1001} < 0{,}001$. Also ist
der Grenzwert $0$.“

Richtig: Das ist eine einzige Runde des Spiels. Für $\varepsilon = 0{,}0001$ funktioniert $N = 1001$ schon nicht mehr, denn
$\frac{1}{1001} \approx 0{,}000999 > 0{,}0001$. Ein Beweis beginnt mit „Sei $\varepsilon > 0$ beliebig“ und gibt $N$ als
Formel an, hier $N > \frac{1}{\varepsilon}$.
:::

:::achtung[N hängt von n ab]
Falsch: „Sei $\varepsilon > 0$. Wähle $N = n$. Dann gilt für alle $n \ge N$ …“

Richtig: $N$ muss feststehen, **bevor** man ein $n \ge N$ betrachtet. $N$ darf nur von $\varepsilon$ abhängen. Mit $N = n$
wäre „für alle $n \ge N$“ sinnlos, weil sich die Grenze mit jedem Glied mitbewegt. Schreibe zuerst die Wahl von $N$ als
Formel in $\varepsilon$ hin, und erst danach „Sei $n \ge N$“.
:::

:::pruefung[So klingt ein ε-N-Beweis in der Prüfung]
Prüferinnen achten auf drei Dinge: die richtige Reihenfolge, eine ausdrückliche Wahl von $N$ und eine begründete
Ungleichungskette. Für $\frac{1}{n + 1} \to 0$ klingt das zum Beispiel so:

> Sei $\varepsilon$ größer null beliebig. Ich wähle eine natürliche Zahl $N$ größer als $\frac1\varepsilon$. Für jedes $n \ge N$
> ist dann $n + 1 > n \ge N > \frac1\varepsilon$. Also ist $\frac{1}{n + 1}$ kleiner als $\varepsilon$.
> Weil $\varepsilon$ beliebig war, ist der Grenzwert null.

Den Schmierzettel musst du nicht vortragen. Wenn die Prüferin fragt, wie du auf $N$ gekommen bist, erklärst du ihn kurz:
„Ich habe die Ungleichung rückwärts nach $n$ aufgelöst.“
:::

### Übungen

```aufgabe
id: gf-bew-automat
titel: Die richtige Regel für N
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Für die Folge $a_n = \dfrac{4}{n}$ mit Grenzwert $0$ soll ein Beweis eine Regel „Wähle $N > \dots$“ angeben.
  Welche Regel funktioniert für **jedes** $\varepsilon > 0$?
teile:
  - typ: auswahl
    optionen:
      - 'Wähle eine natürliche Zahl $N > \dfrac{4}{\varepsilon}$.'
      - 'Wähle eine natürliche Zahl $N > \dfrac{\varepsilon}{4}$.'
      - 'Wähle $N = 1000$.'
      - 'Wähle eine natürliche Zahl $N > 4\varepsilon$.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Bei kleinem $\varepsilon$ ist $\frac{\varepsilon}{4}$ winzig, dann wäre schon $N = 1$ erlaubt. Prüfe $\varepsilon = 0{,}1$ und $n = 1$: Ist $\frac41 < 0{,}1$?
      - wert: 2
        meldung: |
          Ein festes $N$ gewinnt nur einige Runden. Für $\varepsilon = 0{,}001$ ist $\frac{4}{1000} = 0{,}004$ zu groß. $N$ muss von $\varepsilon$ abhängen.
      - wert: 3
        meldung: |
          Je kleiner $\varepsilon$, desto kleiner wird $4\varepsilon$. Eine strengere Toleranz muss aber ein **größeres** $N$ verlangen.
hinweise:
  - 'Löse $\frac{4}{n} < \varepsilon$ nach $n$ auf.'
loesung: |
  Ansatz: Schmierzettel rückwärts. $\frac4n < \varepsilon$ ist gleichwertig mit $n > \frac{4}{\varepsilon}$, weil $n$ und $\varepsilon$ positiv sind.
  ---
  Also funktioniert „Wähle $N > \frac{4}{\varepsilon}$“. Probe: $\varepsilon = 0{,}0025$ liefert $N > 1600$, etwa $N = 1601$, und $\frac{4}{1601} \approx 0{,}002498 < 0{,}0025$.
```

```aufgabe
id: gf-bew-reihenfolge
titel: Die Reinschrift ordnen
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Die Sätze einer Reinschrift für $\lim \frac{3}{n} = 0$ sind durcheinandergeraten:

  (A) Dann ist $\frac3n \le \frac3N < \varepsilon$.
  (B) Sei $\varepsilon > 0$ beliebig.
  (C) Sei $n \ge N$.
  (D) Wähle eine natürliche Zahl $N > \frac{3}{\varepsilon}$.

  Welche Reihenfolge ist richtig?
teile:
  - typ: auswahl
    optionen:
      - 'B, D, C, A'
      - 'D, B, C, A'
      - 'B, C, D, A'
      - 'C, B, D, A'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          $N$ wird **zu** einem gegebenen $\varepsilon$ gewählt. Bevor $\varepsilon$ eingeführt ist, kann man $N > \frac{3}{\varepsilon}$ gar nicht hinschreiben.
      - wert: 2
        meldung: |
          Hier wird $n$ vor $N$ gewählt. Dann könnte $N$ von $n$ abhängen. $N$ muss feststehen, bevor man „für alle $n \ge N$“ sagt.
      - wert: 3
        meldung: |
          Ein Beweis beginnt mit der Toleranz. „Sei $n \ge N$“ ergibt keinen Sinn, solange es noch kein $N$ gibt.
hinweise:
  - 'Halte dich an die Reihenfolge der Quantoren: für jedes $\varepsilon$, gibt es ein $N$, für alle $n \ge N$.'
loesung: |
  Ansatz: Die Reinschrift folgt der Reihenfolge der Quantoren in der Definition: zuerst $\varepsilon$, dann $N$, dann $n$.
  ---
  Also: (B) Toleranz, (D) Wahl von $N$, (C) ein beliebiges $n \ge N$, (A) die Abschätzung. Die Reihenfolge ist B, D, C, A.
```

```aufgabe
id: gf-bew-gefuehrt
titel: Ein ε-N-Beweis Schritt für Schritt
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Beweise mit der $\varepsilon$-$N$-Definition, dass $\displaystyle\lim_{n\to\infty}\frac{6n + 1}{2n + 1} = 3$ ist.
  Gib zur Kontrolle das kleinste $N$ für $\varepsilon = 0{,}01$ an.
teile:
  - typ: zahl
    label: 'kleinstes $N$ für $\varepsilon = 0{,}01$'
    loesung: "100"
    toleranz: 0.1
    fehler:
      - wert: "99"
        meldung: |
          Die Bedingung lautet $n > 99{,}5$. Die Zahl $99$ liegt darunter. Für $n = 99$ ist der Abstand $\frac{2}{199} \approx 0{,}01005$, also zu groß.
      - wert: "200"
        meldung: |
          $2n + 1 > 200$ ist richtig, aber noch nicht nach $n$ aufgelöst. Ziehe $1$ ab und teile durch $2$.
hinweise:
  - 'Bringe $a_n - 3$ auf den gemeinsamen Nenner $2n + 1$. Achte auf das Minus vor $3(2n + 1)$.'
  - 'Mit dem Abstand $\frac{2}{2n + 1}$ lautet der Schmierzettel: $2n + 1 > \frac{2}{\varepsilon}$, also $n > \frac{1}{\varepsilon} - \frac12$.'
gefuehrt:
  - text: Vereinfache den Abstand $|a_n - 3|$ zu einem Bruch in $n$.
    teil:
      typ: term
      variable: n
      bereich: [1, 10]
      loesung: "2/(2n+1)"
      fehler:
        - wert: "-2/(2n+1)"
          meldung: 'Das ist $a_n - 3$. Der Abstand ist der Betrag davon, also positiv.'
        - wert: "4/(2n+1)"
          meldung: 'Das Minus gilt für beide Summanden von $3(2n + 1) = 6n + 3$. Also $6n + 1 - 6n - 3 = -2$.'
    erklaerung: '$a_n - 3 = \frac{6n + 1 - 6n - 3}{2n + 1} = \frac{-2}{2n + 1}$, also $|a_n - 3| = \frac{2}{2n + 1}$.'
  - text: 'Schmierzettel: Aus $\frac{2}{2n + 1} < \varepsilon$ folgt $n > g(\varepsilon)$. Welcher Term ist $g(\varepsilon)$?'
    teil:
      typ: auswahl
      optionen:
        - '$\dfrac{1}{\varepsilon} - \dfrac12$'
        - '$\dfrac{2}{\varepsilon} - 1$'
        - '$\dfrac{\varepsilon}{2} - \dfrac12$'
      richtig: [0]
      fehler:
        - wert: 1
          meldung: 'Das ist die Grenze für $2n$, nicht für $n$. Aus $2n + 1 > \frac{2}{\varepsilon}$ folgt $2n > \frac2\varepsilon - 1$. Teile noch durch $2$.'
        - wert: 2
          meldung: 'Beim Auflösen entsteht ein Kehrwert von $\varepsilon$. Ein kleineres $\varepsilon$ muss ein größeres $n$ verlangen.'
    erklaerung: '$2n + 1 > \frac{2}{\varepsilon}$, also $2n > \frac{2}{\varepsilon} - 1$ und $n > \frac{1}{\varepsilon} - \frac12$.'
  - text: 'Reinschrift: Sei $\varepsilon > 0$ beliebig, wähle eine natürliche Zahl $N > \frac1\varepsilon - \frac12$ und sei $n \ge N$. Überlege, warum dann $2n + 1 \ge 2N + 1 > \frac{2}{\varepsilon}$ gilt.'
    erklaerung: 'Aus $n \ge N$ folgt $2n + 1 \ge 2N + 1$ (verdoppeln, $1$ addieren). Aus $N > \frac1\varepsilon - \frac12$ folgt $2N + 1 > \frac2\varepsilon$. Der Kehrwert dreht das Zeichen: $\frac{2}{2n + 1} < \varepsilon$.'
  - text: Welches ist das kleinste $N$ für $\varepsilon = 0{,}01$?
    teil:
      typ: zahl
      loesung: "100"
      toleranz: 0.1
      fehler:
        - wert: "99"
          meldung: 'Die Grenze ist $\frac{1}{0{,}01} - \frac12 = 99{,}5$. Gesucht ist die kleinste ganze Zahl darüber.'
    erklaerung: '$N > 99{,}5$, also $N = 100$. Kontrolle: $\frac{2}{201} \approx 0{,}00995 < 0{,}01$, aber $\frac{2}{199} \approx 0{,}01005$.'
loesung: |
  Ansatz: Schema für $\varepsilon$-$N$-Beweise. Zuerst der Abstand: $a_n - 3 = \frac{6n + 1 - 3(2n + 1)}{2n + 1} = \frac{-2}{2n + 1}$, also $|a_n - 3| = \frac{2}{2n + 1}$.
  ---
  Schmierzettel: $\frac{2}{2n + 1} < \varepsilon$ ist gleichwertig mit $2n + 1 > \frac2\varepsilon$, also mit $n > \frac1\varepsilon - \frac12$.
  ---
  Reinschrift: Sei $\varepsilon > 0$ beliebig. Wähle eine natürliche Zahl $N > \frac1\varepsilon - \frac12$. Für $n \ge N$ ist $2n + 1 \ge 2N + 1 > \frac2\varepsilon$. Also ist $|a_n - 3| = \frac{2}{2n + 1} < \varepsilon$. Weil $\varepsilon$ beliebig war, ist $\lim a_n = 3$.
  ---
  Kontrolle mit $\varepsilon = 0{,}01$: $N > 99{,}5$, also $N = 100$. Für $n = 99$ ist der Abstand $\frac{2}{199} \approx 0{,}01005$ (zu groß), für $n = 100$ ist er $\frac{2}{201} \approx 0{,}00995$ ✓.
```

```aufgabe
id: gf-bew-fehlersuche
titel: Wo hinkt der Beweis?
niveau: 2
lernziel: 1
kompetenz: begruenden
angabe: |
  Eine Mitschülerin will $\displaystyle\lim_{n\to\infty}\frac{n + 5}{n^2} = 0$ beweisen und schreibt:

  „Sei $\varepsilon > 0$. Für alle $n \ge 1$ ist $\frac{n + 5}{n^2} > \frac{n}{n^2} = \frac{1}{n}$. Wähle $N > \frac1\varepsilon$. Für $n \ge N$ ist $\frac1n < \varepsilon$, also auch $\frac{n + 5}{n^2} < \varepsilon$.“

  a) Was ist falsch?

  b) Repariere die Abschätzung: Für $n \ge 5$ gilt $n + 5 \le 2n$. Welche Regel für $N$ liefert diese Abschätzung bei $\varepsilon = 0{,}05$? Gib das kleinste $N$ an, das **beide** Bedingungen $N \ge 5$ und $N > \frac{2}{\varepsilon}$ erfüllt.
teile:
  - typ: auswahl
    label: 'a)'
    optionen:
      - 'Sie schätzt nach **unten** ab. Aus „größer als eine kleine Zahl“ folgt nicht „klein“.'
      - 'Sie hätte $N > \frac{1}{\varepsilon^2}$ wählen müssen, sonst ist alles richtig.'
      - 'Der Grenzwert ist gar nicht $0$.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Auch ein anderes $N$ rettet den Schluss nicht. Das Problem ist die Richtung der Ungleichung $\frac{n + 5}{n^2} > \frac1n$. Sie sagt nur, dass der Abstand **mindestens** $\frac1n$ ist.
      - wert: 2
        meldung: |
          Der Zählergrad ist $1$, der Nennergrad $2$. Der Grenzwert ist $0$. Der Fehler steckt in der Begründung.
  - typ: zahl
    label: 'b) kleinstes $N$ nach der reparierten Regel'
    loesung: "41"
    fehler:
      - wert: "40"
        meldung: |
          $\frac{2}{0{,}05} = 40$. Verlangt ist $N > 40$, also echt größer.
      - wert: "5"
        meldung: |
          $N \ge 5$ allein reicht nicht. $N$ muss **beide** Bedingungen erfüllen, also auch $N > \frac{2}{\varepsilon}$.
      - wert: "21"
        meldung: |
          Du hast mit $\frac1\varepsilon$ gerechnet. Die reparierte Abschätzung lautet $\frac{n + 5}{n^2} \le \frac2n$. Gefordert ist also $\frac2n < \varepsilon$.
hinweise:
  - 'Prüfe die Richtung: Ist $\frac{n + 5}{n^2}$ größer oder kleiner als $\frac1n$? Was folgt daraus, wenn $\frac1n$ klein ist?'
  - 'Mit $n + 5 \le 2n$ wird $\frac{n + 5}{n^2} \le \frac{2}{n}$. Es reicht $\frac2n < \varepsilon$, also $n > \frac2\varepsilon$.'
loesung: |
  Ansatz: Beim Abschätzen muss man den Abstand durch etwas **Größeres** ersetzen. Nur dann überträgt sich „kleiner als $\varepsilon$“.
  ---
  a) Sie zeigt $\frac{n + 5}{n^2} > \frac1n$. Das ist eine Abschätzung nach **unten**. Zahlenprobe mit $\varepsilon = 0{,}1$: Ihre Regel liefert $n = 11$, aber $\frac{16}{121} \approx 0{,}132$ ist nicht kleiner als $0{,}1$.
  ---
  b) Für $n \ge 5$ ist $n + 5 \le n + n = 2n$, also $\frac{n + 5}{n^2} \le \frac{2n}{n^2} = \frac{2}{n}$. Reinschrift: Wähle $N \ge 5$ und $N > \frac{2}{\varepsilon}$. Für $\varepsilon = 0{,}05$ heißt das $N > 40$, also $N = 41$.
  ---
  Kontrolle: $\frac{41 + 5}{41^2} = \frac{46}{1681} \approx 0{,}0274 < 0{,}05$ ✓. Das kleinste wirklich passende $N$ ist sogar kleiner, aber für den Beweis genügt jedes funktionierende $N$.
```

```aufgabe
id: gf-bew-abschaetzen
titel: Abschätzen spart Arbeit
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Für $a_n = \dfrac{2n + 5}{n^2}$ (Grenzwert $0$) soll man nicht die quadratische Ungleichung lösen, sondern abschätzen.

  a) Für welche $n$ gilt $2n + 5 \le 3n$? Gib die kleinste natürliche Zahl $n_0$ an, ab der das stimmt.

  b) Daraus folgt $a_n \le \frac{3}{n}$ für $n \ge n_0$. Welches kleinste $N$ liefert die Regel „$N \ge n_0$ und $N > \frac{3}{\varepsilon}$“ für $\varepsilon = 0{,}01$?
teile:
  - typ: zahl
    label: 'a) $n_0$'
    loesung: "5"
    fehler:
      - wert: "6"
        meldung: |
          Für $n = 5$ ist $2\cdot 5 + 5 = 15 = 3\cdot 5$. Die Ungleichung verlangt $\le$, Gleichheit ist also erlaubt.
      - wert: "1"
        meldung: |
          Für $n = 1$ ist $2 + 5 = 7$, aber $3\cdot 1 = 3$. Die Ungleichung $7 \le 3$ ist falsch.
  - typ: zahl
    label: 'b) $N$'
    loesung: "301"
    toleranz: 0.1
    fehler:
      - wert: "300"
        meldung: |
          $\frac{3}{0{,}01} = 300$, und verlangt ist $N > 300$, also echt größer.
      - wert: "203"
        meldung: |
          $203$ ist das kleinste $N$, das die exakte Ungleichung erfüllt. Gefragt ist aber das $N$, das die **Regel** aus der Abschätzung liefert.
hinweise:
  - 'a) $2n + 5 \le 3n$ ist gleichwertig mit $5 \le n$.'
  - 'b) Beide Bedingungen: $N \ge 5$ und $N > \frac{3}{0{,}01}$. Die zweite ist hier die strengere.'
loesung: |
  Ansatz: Den Zähler nach oben abschätzen, damit ein einfacher Bruch $\frac{c}{n}$ entsteht. Dann ist die Ungleichung leicht zu lösen.
  ---
  a) $2n + 5 \le 3n$ ist gleichwertig mit $5 \le n$. Also $n_0 = 5$. Für $n \ge 5$ ist $\frac{2n + 5}{n^2} \le \frac{3n}{n^2} = \frac3n$.
  ---
  b) $\frac{3}{n} < 0{,}01$ gilt für $n > 300$. Mit $N \ge 5$ zusammen: $N = 301$.
  ---
  Vergleich: Die exakte Ungleichung $\frac{2n + 5}{n^2} < 0{,}01$ gilt schon ab $n = 203$. Die Abschätzung verschenkt etwas. Für einen Beweis ist das egal, denn er braucht nur **irgendein** passendes $N$.
```

```aufgabe
id: gf-bew-check-satz
titel: Was beweist welcher Satz?
niveau: 2
lernziel: 1
kompetenz: begruenden
angabe: |
  In einem Beweis von $\lim a_n = a$ steht der Satz: „Wähle eine natürliche Zahl $N > \frac{5}{\varepsilon}$.“
  Welche Aussagen über diesen Satz sind richtig?
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - 'Er funktioniert, weil es nach dem archimedischen Prinzip zu jeder Zahl eine größere natürliche Zahl gibt.'
      - '$N$ hängt hier nur von $\varepsilon$ ab, nicht von $n$.'
      - 'Der Beweis ist nur richtig, wenn $N$ das kleinste passende $N$ ist.'
      - 'Für $\varepsilon = 0{,}5$ ist $N = 11$ eine erlaubte Wahl.'
    richtig: [0, 1, 3]
    fehler:
      - wert: [0, 1, 2, 3]
        meldung: |
          Die Definition verlangt nur, dass es **ein** passendes $N$ gibt. Ein größeres $N$ als nötig ist ebenso gültig.
      - wert: [0, 1]
        meldung: |
          Prüfe die letzte Aussage: $\frac{5}{0{,}5} = 10$, und $11 > 10$. Die Regel ist also erfüllt.
      - wert: [1, 3]
        meldung: |
          Warum gibt es überhaupt eine natürliche Zahl über $\frac5\varepsilon$? Genau das garantiert das archimedische Prinzip.
hinweise:
  - 'Muss $N$ das kleinste passende sein? Lies die Definition: „es gibt ein $N$“.'
  - 'Rechne für die letzte Aussage $\frac{5}{0{,}5}$ aus.'
loesung: |
  Ansatz: Wir prüfen jede Aussage an der Definition und am Schema für $\varepsilon$-$N$-Beweise.
  ---
  Aussage 1 ist richtig: Ohne archimedisches Prinzip wüssten wir nicht, dass ein solches $N$ existiert. Aussage 2 ist richtig: Die Formel enthält nur $\varepsilon$.
  ---
  Aussage 3 ist falsch: Jedes funktionierende $N$ genügt. Aussage 4 ist richtig: $\frac{5}{0{,}5} = 10$ und $11 > 10$.
  ---
  Richtig sind also die Aussagen 1, 2 und 4.
```

```aufgabe
id: gf-eps-nachweis
titel: Grenzwert mit ε nachweisen
niveau: 3
lernziel: 1
kompetenz: begruenden
angabe: |
  Gegeben ist $a_n = \dfrac{3n - 1}{n + 2}$.

  a) Vereinfache $|a_n - 3|$ zu einem einfachen Bruch.

  b) Beweise mit der $\varepsilon$-$N$-Definition, dass $\lim a_n = 3$ ist. Schreibe Schmierzettel und Reinschrift.

  c) Bestimme das kleinste $N$ für $\varepsilon = 0{,}05$.
teile:
  - typ: term
    label: 'a) $|a_n - 3| =$'
    variable: n
    bereich: [1, 10]
    loesung: "7/(n+2)"
    fehler:
      - wert: "5/(n+2)"
        meldung: 'Das Minus gilt für beide Summanden von $3(n + 2) = 3n + 6$. Also $3n - 1 - 3n - 6 = -7$.'
      - wert: "-7/(n+2)"
        meldung: 'Das ist $a_n - 3$. Der Abstand ist der Betrag davon.'
  - typ: text
    label: 'b) Beweis'
    muster: |
      Schmierzettel: $\frac{7}{n + 2} < \varepsilon$ ist gleichwertig mit $n + 2 > \frac7\varepsilon$, also mit $n > \frac7\varepsilon - 2$.

      Reinschrift: Sei $\varepsilon > 0$ beliebig. Wähle eine natürliche Zahl $N > \frac7\varepsilon - 2$. Für alle $n \ge N$ ist
      $n + 2 \ge N + 2 > \frac{7}{\varepsilon}$. Der Kehrwert dreht das Zeichen, also $|a_n - 3| = \frac{7}{n + 2} < \varepsilon$.
      Weil $\varepsilon$ beliebig war, ist $\lim a_n = 3$.
  - typ: zahl
    label: 'c) $N$'
    loesung: "139"
    toleranz: 0.1
    fehler:
      - wert: "138"
        meldung: 'Für $n = 138$ ist der Abstand $\frac{7}{140} = 0{,}05$, genau der Rand. Gesucht ist ein echt kleinerer Abstand.'
      - wert: "140"
        meldung: '$n + 2 > 140$ ist richtig. Ziehe noch $2$ ab.'
hinweise:
  - 'a) Gemeinsamer Nenner: $a_n - 3 = \frac{3n - 1 - 3(n + 2)}{n + 2}$.'
  - 'b) Schmierzettel: $\frac{7}{n + 2} < \varepsilon$ nach $n$ auflösen. Reinschrift: „Sei $\varepsilon > 0$ … wähle $N > \dots$ … für $n \ge N$ …“.'
loesung: |
  Ansatz: Schema für $\varepsilon$-$N$-Beweise, weil ein Beweis mit der Definition verlangt ist. Zuerst der Abstand.
  ---
  a) $a_n - 3 = \frac{3n - 1 - 3n - 6}{n + 2} = \frac{-7}{n + 2}$, also $|a_n - 3| = \frac{7}{n + 2}$.
  ---
  b) Schmierzettel: $\frac{7}{n + 2} < \varepsilon \iff n + 2 > \frac{7}{\varepsilon} \iff n > \frac{7}{\varepsilon} - 2$.
  Reinschrift: Sei $\varepsilon > 0$ beliebig. Wähle eine natürliche Zahl $N > \frac7\varepsilon - 2$. Für $n \ge N$ ist $n + 2 \ge N + 2 > \frac7\varepsilon$, also $\frac{7}{n + 2} < \varepsilon$. Weil $\varepsilon$ beliebig war, ist $\lim a_n = 3$.
  ---
  c) $\varepsilon = 0{,}05$: $n > \frac{7}{0{,}05} - 2 = 140 - 2 = 138$, also $N = 139$.
  Kontrolle: $\frac{7}{141} \approx 0{,}04965 < 0{,}05$, aber $\frac{7}{140} = 0{,}05$ ✓.
```

```aufgabe
id: gf-eps-abschaetzung
titel: Beweis bei quadratischem Nenner
niveau: 3
lernziel: 1
kompetenz: begruenden
angabe: |
  Beweise mit der $\varepsilon$-$N$-Definition: $\displaystyle\lim_{n\to\infty} \frac{n^2 + 1}{2n^2} = \frac12$.
  Bestimme außerdem das kleinste $N$ für $\varepsilon = 0{,}0002$.
teile:
  - typ: text
    label: 'Beweis'
    muster: |
      Abstand: $\frac{n^2 + 1}{2n^2} - \frac12 = \frac{n^2 + 1 - n^2}{2n^2} = \frac{1}{2n^2}$, und das ist positiv.

      Schmierzettel: $\frac{1}{2n^2} < \varepsilon$ ist gleichwertig mit $n^2 > \frac{1}{2\varepsilon}$, also mit $n > \frac{1}{\sqrt{2\varepsilon}}$.

      Reinschrift: Sei $\varepsilon > 0$ beliebig. Wähle eine natürliche Zahl $N > \frac{1}{\sqrt{2\varepsilon}}$. Für $n \ge N$ ist
      $2n^2 \ge 2N^2 > \frac{1}{\varepsilon}$, also $\left|a_n - \frac12\right| = \frac{1}{2n^2} < \varepsilon$. Weil $\varepsilon$ beliebig war, ist der Grenzwert $\frac12$.
  - typ: zahl
    label: '$N$ für $\varepsilon = 0{,}0002$'
    loesung: "51"
    fehler:
      - wert: "50"
        meldung: 'Für $n = 50$ ist $\frac{1}{2\cdot 2500} = 0{,}0002$, also genau der Rand.'
      - wert: "2501"
        meldung: 'Aus $n^2 > 2500$ folgt nach dem Wurzelziehen $n > 50$. Du hast die Wurzel vergessen.'
hinweise:
  - 'Bring $a_n - \frac12$ auf den gemeinsamen Nenner $2n^2$.'
  - 'Schmierzettel: $\frac{1}{2n^2} < \varepsilon \iff n^2 > \frac{1}{2\varepsilon}$. Dann die Wurzel ziehen, das ist erlaubt, weil beide Seiten positiv sind.'
loesung: |
  Ansatz: Schema für $\varepsilon$-$N$-Beweise. Zuerst den Abstand vereinfachen: $a_n - \frac12 = \frac{n^2 + 1 - n^2}{2n^2} = \frac{1}{2n^2} > 0$.
  ---
  Schmierzettel: $\frac{1}{2n^2} < \varepsilon \iff n^2 > \frac{1}{2\varepsilon} \iff n > \frac{1}{\sqrt{2\varepsilon}}$. Das Wurzelziehen ist erlaubt, weil beide Seiten positiv sind.
  ---
  Reinschrift: Sei $\varepsilon > 0$ beliebig. Wähle eine natürliche Zahl $N > \frac{1}{\sqrt{2\varepsilon}}$. Für $n \ge N$ ist $2n^2 \ge 2N^2 > \frac1\varepsilon$, also $\left|a_n - \frac12\right| = \frac{1}{2n^2} < \varepsilon$. Damit ist der Grenzwert $\frac12$.
  ---
  $\varepsilon = 0{,}0002$: $n^2 > \frac{1}{0{,}0004} = 2500$, also $n > 50$ und $N = 51$. Kontrolle: Für $n = 50$ ist der Abstand genau $0{,}0002$, für $n = 51$ ist er $\frac{1}{5202} \approx 0{,}000192$ ✓.
```

## Nullfolgen und das Rechnen mit ihnen

```aufgabe
id: gf-null-vorwissen
titel: Den Abstand zum Grenzwert aufschreiben
niveau: 1
art: check
angabe: |
  Die Folge $a_n = 7 + \dfrac{2}{n^3}$ hat den Grenzwert $7$. Welcher Ausdruck ist der Abstand $|a_n - 7|$?
  (Vorwissen aus [11.2 Die ε-N-Definition des Grenzwerts](/lernen/mathe3/grenzwerte-folgen/die-epsilon-n-definition-des-grenzwerts): dort steht, dass der Abstand $|a_n - a|$ beliebig klein werden muss.)
teile:
  - typ: auswahl
    optionen:
      - '$\dfrac{2}{n^3}$'
      - '$7 + \dfrac{2}{n^3}$'
      - '$-\dfrac{2}{n^3}$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Das ist das Glied $a_n$ selbst. Der Abstand zum Grenzwert entsteht erst, wenn du $7$ abziehst.
      - wert: 2
        meldung: |
          Ein Abstand ist nie negativ. Außerdem ist $a_n - 7 = +\frac{2}{n^3}$, denn das Glied liegt über $7$.
hinweise:
  - 'Berechne zuerst $a_n - 7$ und nimm dann den Betrag.'
loesung: |
  $a_n - 7 = \frac{2}{n^3}$. Das ist für alle $n \ge 1$ positiv.
  ---
  Der Betrag ändert also nichts: $|a_n - 7| = \frac{2}{n^3}$.
```

**Worum geht es in einem Satz?** Jede Frage nach einem Grenzwert lässt sich auf eine einzige Frage
zurückführen: Wird ein bestimmter **Abstand** beliebig klein? Folgen, die gegen $0$ gehen, sind deshalb die
wichtigsten Bausteine der ganzen Grenzwertrechnung.

### Was eine Nullfolge ist

Eine **Nullfolge** ist in Alltagssprache eine Folge, deren Glieder „in Richtung null schrumpfen“ und dort
bleiben. Beispiel: $1;\ \frac12;\ \frac14;\ \frac18;\ \dots$ Ein Nicht-Beispiel ist $1;\ 0;\ 1;\ 0;\ \dots$, denn diese
Folge springt immer wieder auf $1$ zurück. Nun die exakte Definition.

:::definition[Nullfolge]
Eine Folge $(a_n)$ heißt **Nullfolge**, wenn sie gegen $0$ konvergiert, also $\lim\limits_{n\to\infty} a_n = 0$.
Mit der $\varepsilon$-$N$-Definition heißt das: Zu jedem $\varepsilon > 0$ gibt es ein $N$, sodass $|a_n| < \varepsilon$
für alle $n \ge N$ gilt.
:::

Dabei ist $|a_n| = |a_n - 0|$ der Abstand des Glieds $a_n$ von der Zahl $0$. Das Vorzeichen spielt keine Rolle.
Auch $-\frac12;\ \frac14;\ -\frac18;\ \dots$ ist eine Nullfolge, weil die Abstände $\frac12;\ \frac14;\ \frac18;\ \dots$
beliebig klein werden.

**Warum Nullfolgen so wichtig sind.** In der Definition des Grenzwerts steht $|a_n - a| < \varepsilon$. Das ist
genau die Bedingung „der Abstand $a_n - a$ ist kleiner als $\varepsilon$“. Daraus folgt eine einfache, aber
mächtige Übersetzung:

> Eine Folge $(a_n)$ konvergiert genau dann gegen $a$, wenn die Folge der Differenzen $(a_n - a)$ eine Nullfolge ist.

:::beispiel[Einen Grenzwert über eine Nullfolge erkennen]
Wir untersuchen $a_n = \dfrac{2n^3 + 5}{n^3}$ und vermuten den Grenzwert $2$.

**Schritt 1, die Differenz bilden.** Wir teilen den Bruch in zwei Summanden auf:
$$a_n = \frac{2n^3}{n^3} + \frac{5}{n^3} = 2 + \frac{5}{n^3}, \qquad\text{also}\qquad a_n - 2 = \frac{5}{n^3}.$$

**Schritt 2, die Differenz untersuchen.** Für $n = 10$ ist $\frac{5}{1000} = 0{,}005$. Für $n = 100$ ist sie
$0{,}000005$. Der Zähler bleibt $5$, der Nenner wächst über jede Grenze. Die Differenz wird also beliebig klein.

**Was haben wir gezeigt?** Die Differenz $a_n - 2$ ist eine Nullfolge. Nach der Übersetzung oben heißt das:
$\lim a_n = 2$. Warum $\frac{5}{n^3}$ wirklich eine Nullfolge ist, begründet der folgende Satz.
:::

### Die wichtigsten Nullfolgen

Diese vier Nullfolgen solltest du auswendig kennen. Fast alle anderen führt man auf sie zurück.

:::satz[Standard-Nullfolgen]
1. $\dfrac{1}{n^k} \to 0$ für jede feste Zahl $k > 0$. Beispiele: $\frac1n$, $\frac{1}{n^2}$, $\frac{1}{\sqrt n} = \frac{1}{n^{1/2}}$.
2. $q^n \to 0$ für jede feste Zahl $q$ mit $|q| < 1$. Beispiele: $0{,}5^n$, $(-0{,}9)^n$.
3. $\dfrac{n^k}{b^n} \to 0$ für jedes feste $k$ und jedes feste $b > 1$. In Worten: **Die Exponentialfunktion schlägt jede Potenz.**
4. $\dfrac{b^n}{n!} \to 0$ für jedes feste $b$. In Worten: **Die Fakultät schlägt jede Exponentialfunktion.**
:::

Dabei ist $n! = 1 \cdot 2 \cdot 3 \cdots n$ die **Fakultät** von $n$, gelesen „$n$ Fakultät“. Zum Beispiel ist
$5! = 120$. Ein konstanter Faktor ändert nichts: Mit $\frac{1}{n^3}$ ist auch $\frac{5}{n^3}$ eine Nullfolge.

```aufgabe
id: gf-null-check-q
titel: Welche Potenz geht gegen null?
niveau: 1
art: check
angabe: |
  Für welche Basis $q$ ist $q^n$ eine Nullfolge?
teile:
  - typ: auswahl
    optionen:
      - '$q = -0{,}95$'
      - '$q = 1$'
      - '$q = -1{,}05$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          $1^n = 1$ für alle $n$. Die Folge ist konstant $1$ und geht nicht gegen $0$. Verlangt ist $|q| < 1$, also **echt** kleiner.
      - wert: 2
        meldung: |
          Das Minus täuscht. Es zählt der Betrag: $|-1{,}05| = 1{,}05 > 1$. Die Glieder springen mit wachsendem Betrag hin und her.
hinweise:
  - 'Teil 2 des Satzes verlangt $|q| < 1$. Das Vorzeichen von $q$ spielt keine Rolle.'
loesung: |
  Bedingung: $|q| < 1$.
  ---
  Nur $|-0{,}95| = 0{,}95 < 1$ erfüllt sie. Also ist $(-0{,}95)^n$ eine Nullfolge, mit wechselndem Vorzeichen.
```

Teil 1 beweist man wie $\frac1n \to 0$ in [11.4 Einen Grenzwert mit der Definition beweisen](/lernen/mathe3/grenzwerte-folgen/einen-grenzwert-mit-der-definition-beweisen):
$\frac{1}{n^k} < \varepsilon$ gilt genau dann, wenn $n^k > \frac1\varepsilon$ ist. Teil 2 ist der wichtigste. Sein
Beweis ist kurz und schön, braucht aber ein Werkzeug aus [Kapitel 8, „Induktion bei Teilbarkeit, Ungleichungen und Rekursionen“](/lernen/mathe3/folgen-reihen/induktion-bei-teilbarkeit-ungleichungen-und-rekursionen):
die **Bernoulli-Ungleichung**. Sie lautet $(1 + h)^n \ge 1 + nh$ für $h > 0$ und alle $n \in \N$.

### Warum qⁿ gegen null geht

**Worum geht es in einem Satz?** Wir zeigen: Wenn man eine Zahl mit Betrag kleiner als $1$ immer wieder mit sich
selbst multipliziert, wird das Ergebnis beliebig klein.

**Zuerst konkret.** Nimm $q = \frac12$. Dann ist $\frac{1}{q} = 2 = 1 + 1$. Bernoulli mit $h = 1$ liefert
$2^n \ge 1 + n > n$. Den Kehrwert nehmen dreht die Ungleichung um: $\left(\frac12\right)^n < \frac1n$. Die Potenz
liegt also immer unter der Nullfolge $\frac1n$. Damit muss auch sie beliebig klein werden.

**Jetzt allgemein.** Die Idee bleibt gleich: Wir drücken $|q|^n$ unter einen Bruch der Form $\frac{\text{Zahl}}{n}$.

:::beweis[Beweis von Teil 2]
Für $q = 0$ sind alle Glieder $0$, es ist nichts zu zeigen. Sei also $0 < |q| < 1$.

*Schritt 1, $h$ einführen.* Weil $|q| < 1$ ist, gilt $\frac{1}{|q|} > 1$. Wir schreiben $\frac{1}{|q|} = 1 + h$ mit einer festen Zahl $h > 0$.

*Schritt 2, Bernoulli anwenden.* $\frac{1}{|q|^n} = (1 + h)^n \ge 1 + nh > nh$.

*Schritt 3, Kehrwert nehmen.* Beide Seiten sind positiv, also dreht sich das Zeichen um: $|q^n - 0| = |q|^n < \frac{1}{nh}$.

*Schritt 4, $N$ wählen.* Zu $\varepsilon > 0$ wählen wir eine natürliche Zahl $N > \frac{1}{h\varepsilon}$. Für alle $n \ge N$ gilt dann
$|q^n - 0| < \frac{1}{nh} \le \frac{1}{Nh} < \varepsilon$.
:::

**Was haben wir gezeigt?** Zu jeder Toleranz gibt es eine Stelle, ab der alle Potenzen $q^n$ im Band um $0$ liegen.
Das Vorzeichen von $q$ spielt keine Rolle, weil im Beweis nur der Betrag $|q|$ vorkommt.

:::beispiel[Kleinstes N für eine Potenz mit negativer Basis]
Folge $a_n = (-0{,}6)^n$, Toleranz $\varepsilon = 0{,}001$. Die Glieder wechseln das Vorzeichen: $-0{,}6;\ 0{,}36;\ -0{,}216;\ \dots$

**Schritt 1, Abstand.** $|a_n - 0| = |-0{,}6|^n = 0{,}6^n$. Der Betrag entfernt das Vorzeichen.

**Schritt 2, Ungleichung lösen.** $0{,}6^n < 0{,}001$. Logarithmieren: $n \cdot \ln 0{,}6 < \ln 0{,}001$. Weil
$\ln 0{,}6 \approx -0{,}511$ negativ ist, dreht sich beim Dividieren das Zeichen:
$$n > \frac{\ln 0{,}001}{\ln 0{,}6} \approx \frac{-6{,}908}{-0{,}511} \approx 13{,}52.$$

**Schritt 3, Kontrolle.** $0{,}6^{13} \approx 0{,}00131$ ist zu groß, $0{,}6^{14} \approx 0{,}00078$ passt. Das kleinste
$N$ ist $14$.
:::

:::achtung[Den Logarithmus einer negativen Zahl bilden]
Falsch: „$(-0{,}6)^n < 0{,}001 \iff n \cdot \ln(-0{,}6) < \ln 0{,}001$.“

Richtig: Den Logarithmus gibt es nur für **positive** Zahlen, $\ln(-0{,}6)$ ist nicht definiert. Außerdem fragt die
Definition nach dem **Abstand**, also nach $|(-0{,}6)^n| = 0{,}6^n$. Erst den Betrag bilden, dann logarithmieren:
$0{,}6^n < 0{,}001$.
:::

### Wer gewinnt: Potenz oder Exponentialfunktion?

Teil 3 und Teil 4 des Satzes vergleichen, wie schnell Folgen wachsen. Am Anfang kann die Potenz vorne liegen.
Bei $n = 5$ ist $n^3 = 125$, aber $2^5$ nur $32$. Auf lange Sicht gewinnt aber immer die Exponentialfunktion.

```plot
x: [0, 16]
y: [0, 4.5]
achsen: { x: "n", y: "n³/2ⁿ" }
punkte:
  - { x: 1, y: 0.5, farbe: 0 }
  - { x: 2, y: 2.0, farbe: 0 }
  - { x: 3, y: 3.375, farbe: 0 }
  - { x: 4, y: 4.0, label: "Maximum bei n = 4", farbe: 1 }
  - { x: 5, y: 3.9063, farbe: 0 }
  - { x: 6, y: 3.375, farbe: 0 }
  - { x: 7, y: 2.6797, farbe: 0 }
  - { x: 8, y: 2.0, farbe: 0 }
  - { x: 9, y: 1.4238, farbe: 0 }
  - { x: 10, y: 0.9766, farbe: 0 }
  - { x: 11, y: 0.6499, farbe: 0 }
  - { x: 12, y: 0.4219, farbe: 0 }
  - { x: 13, y: 0.2682, farbe: 0 }
  - { x: 14, y: 0.1675, farbe: 0 }
  - { x: 15, y: 0.1030, farbe: 0 }
beschriftung: Die Quotienten n³/2ⁿ für n = 1 bis 15. Zuerst wächst der Zähler n³ schneller, der Quotient steigt bis n = 4. Danach gewinnt der Nenner 2ⁿ, und der Quotient fällt gegen 0.
```

Diese Rangfolge solltest du dir merken: $\ln n$ wächst langsamer als jede Potenz $n^k$ mit $k > 0$, jede Potenz langsamer als
jede Exponentialfunktion $b^n$ mit $b > 1$, und jede Exponentialfunktion langsamer als $n!$. In der Informatik
heißt das: Ein Algorithmus mit $n^3$ Rechenschritten ist für große $n$ viel schneller als einer mit $2^n$ Schritten.

### Rechnen mit Nullfolgen

Man muss nicht jede Nullfolge mit $\varepsilon$ und $N$ prüfen. Drei Regeln setzen neue Nullfolgen aus bekannten
zusammen.

:::satz[Rechenregeln für Nullfolgen]
1. **Summe:** Sind $(a_n)$ und $(b_n)$ Nullfolgen, dann ist auch $(a_n + b_n)$ eine Nullfolge.
2. **Beschränkt mal Nullfolge:** Ist $(a_n)$ eine Nullfolge und $(b_n)$ **beschränkt**, dann ist $(a_n \cdot b_n)$ eine Nullfolge.
3. **Vergleich:** Gilt ab einer Stelle $|b_n| \le c \cdot |a_n|$ mit einer festen Zahl $c$, und ist $(a_n)$ eine Nullfolge, dann ist auch $(b_n)$ eine Nullfolge.
:::

Dabei heißt $(b_n)$ **beschränkt**, wenn es eine feste Zahl $M$ gibt mit $|b_n| \le M$ für alle $n$. Die Glieder
bleiben also in einem festen Streifen von $-M$ bis $M$. Beispiel: $\sin n$ ist beschränkt mit $M = 1$. Nicht-Beispiel:
$n^2$ ist nicht beschränkt.

**Warum Regel 2 gilt, in Kurzform:** Ein Faktor mit Betrag höchstens $M$ macht eine Zahl höchstens $M$-mal so
groß. Eine beliebig kleine Zahl bleibt dadurch beliebig klein.

:::beweis[Beweis von Regel 2]
Sei $|b_n| \le M$ für alle $n$ mit einer Zahl $M > 0$. Sei $\varepsilon > 0$ vorgegeben.

*Der Trick:* Wir wenden die Definition für die Nullfolge $(a_n)$ nicht mit $\varepsilon$ an, sondern mit der kleineren
Toleranz $\frac{\varepsilon}{M}$. Das ist erlaubt, weil die Definition für **jede** positive Toleranz gilt. Es gibt
also ein $N$ mit $|a_n| < \frac{\varepsilon}{M}$ für alle $n \ge N$.

*Abschätzen:* Für diese $n$ gilt $|a_n b_n - 0| = |a_n| \cdot |b_n| < \frac{\varepsilon}{M} \cdot M = \varepsilon$.
:::

:::beispiel[Beschränkt mal Nullfolge]
Wir untersuchen $a_n = \dfrac{\sin n}{n}$. Wir schreiben sie als Produkt: $a_n = \sin n \cdot \frac1n$.

- Der Faktor $\sin n$ ist beschränkt, denn $|\sin n| \le 1$ für alle $n$.
- Der Faktor $\frac1n$ ist eine Standard-Nullfolge.

Nach Regel 2 ist $\frac{\sin n}{n}$ eine Nullfolge. Das ist bemerkenswert, denn $\sin n$ selbst hat keinen
Grenzwert. Die Werte springen ohne Muster zwischen $-1$ und $1$ hin und her. Der Faktor $\frac1n$ drückt diese
Schwankung trotzdem gegen $0$. Zahlenbeispiel: Für $n = 1000$ ist $|a_n| \le \frac{1}{1000}$.
:::

```reflexion
frage: Warum muss in Regel 2 die zweite Folge beschränkt sein? Gib ein eigenes Beispiel, bei dem das Produkt aus einer Nullfolge und einer unbeschränkten Folge keine Nullfolge ist.
antwort: |
  Die Nullfolge macht ihre Glieder klein, aber eine unbeschränkte Folge kann ihre Glieder noch schneller groß machen.
  Beispiel: $\frac{1}{n} \cdot n^2 = n$. Das Produkt wächst über jede Grenze. Ein anderes Beispiel: $\frac1n \cdot 5n = 5$.
  Das Produkt ist konstant $5$, also auch keine Nullfolge. Nur wenn der zweite Faktor in einem festen Streifen
  $[-M;\ M]$ bleibt, kann er die Nullfolge höchstens um den festen Faktor $M$ vergrößern.
```

:::achtung[Nullfolge mal irgendetwas]
Falsch: „$\frac1n$ ist eine Nullfolge. Also ist $\frac1n \cdot n^2$ auch eine Nullfolge.“

Richtig: $\frac1n \cdot n^2 = n$, und das wächst über jede Grenze. Regel 2 verlangt, dass der zweite Faktor
**beschränkt** ist. $n^2$ ist nicht beschränkt. Prüfe vor dem Anwenden immer: Gibt es eine feste Zahl $M$ mit
$|b_n| \le M$ für alle $n$?
:::

:::merke[Rezept: Ist das eine Nullfolge?]
1. **Standardfolge?** $\frac{1}{n^k}$ mit $k > 0$, $q^n$ mit $|q| < 1$, $\frac{n^k}{b^n}$ mit $b > 1$, $\frac{b^n}{n!}$.
2. **Zerlegen:** Summe in Summanden aufteilen (Regel 1), Produkt in „beschränkt mal Nullfolge“ (Regel 2).
3. **Abschätzen:** $|b_n|$ nach oben durch ein Vielfaches einer bekannten Nullfolge abschätzen (Regel 3).
4. **Grenzwert $a$ prüfen:** Ist $(a_n - a)$ eine Nullfolge, dann ist $\lim a_n = a$.
:::

```aufgabe
id: gf-nullfolgen-erkennen
titel: Nullfolgen erkennen
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Welche der Folgen sind Nullfolgen?
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$\dfrac{\cos n}{n^2}$'
      - '$\left(\dfrac{5}{4}\right)^n$'
      - '$\dfrac{n^4}{3^n}$'
      - '$(-0{,}7)^n$'
      - '$\dfrac{n^2}{n + 1}$'
    richtig: [0, 2, 3]
    fehler:
      - wert: [0, 1, 2, 3]
        meldung: |
          Bei $\left(\frac54\right)^n$ ist die Basis $1{,}25$ größer als $1$. Jede Multiplikation mit $1{,}25$ macht die Glieder größer, nicht kleiner.
      - wert: [0, 2]
        meldung: |
          $(-0{,}7)^n$ wechselt zwar das Vorzeichen, aber der Abstand zu $0$ ist $0{,}7^n$. Wegen $0{,}7 < 1$ wird er beliebig klein.
      - wert: [0, 3]
        meldung: |
          $n^4$ ist anfangs größer als $3^n$, aber auf lange Sicht gewinnt die Exponentialfunktion. Für $n = 20$ ist der Quotient schon kleiner als $0{,}0001$.
      - wert: [0, 2, 3, 4]
        meldung: |
          Bei $\frac{n^2}{n + 1}$ hat der Zähler den höheren Grad. Für $n = 100$ ist das ungefähr $99$. Die Glieder wachsen.
hinweise:
  - 'Vergleiche jede Folge mit der Liste der Standard-Nullfolgen oder mit der Regel „beschränkt mal Nullfolge“.'
loesung: |
  Ansatz: Jede Folge mit einer bekannten Nullfolge oder einer Rechenregel vergleichen.
  ---
  $\frac{\cos n}{n^2} = \cos n \cdot \frac{1}{n^2}$: beschränkt mal Nullfolge, also Nullfolge. $\frac{n^4}{3^n}$: Exponentialfunktion schlägt Potenz, Nullfolge.
  ---
  $(-0{,}7)^n$: $|q| = 0{,}7 < 1$, Nullfolge mit wechselndem Vorzeichen. $\left(\frac54\right)^n$ wächst über jede Grenze, und $\frac{n^2}{n + 1}$ ebenfalls.
  ---
  Ergebnis: Nullfolgen sind die Optionen 1, 3 und 4.
```

```aufgabe
id: gf-null-abstand
titel: Grenzwert über die Differenz
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Gegeben ist $a_n = \dfrac{9n + 2}{3n}$.

  a) Gegen welche Zahl $a$ konvergiert die Folge?

  b) Gib die Differenz $a_n - a$ als vereinfachten Term in $n$ an.
teile:
  - typ: zahl
    label: 'a) $a$'
    loesung: "3"
    fehler:
      - wert: "9"
        meldung: |
          Du hast nur den Zähler betrachtet. Teile den Bruch auf: $\frac{9n}{3n} + \frac{2}{3n}$. Der erste Summand ist für jedes $n$ gleich groß.
  - typ: term
    label: 'b) $a_n - a =$'
    variable: n
    bereich: [1, 10]
    loesung: "2/(3n)"
    fehler:
      - wert: "2/n"
        meldung: |
          Der Nenner $3n$ gilt für den **ganzen** Zähler. Also ist $\frac{2}{3n}$ der zweite Summand, nicht $\frac2n$.
      - wert: "(9n+2)/(3n) - 9"
        meldung: |
          Prüfe zuerst den Grenzwert aus a). Ziehst du die falsche Zahl ab, bleibt keine Nullfolge übrig.
hinweise:
  - 'Teile den Bruch in zwei Summanden: $\frac{9n + 2}{3n} = \frac{9n}{3n} + \frac{2}{3n}$.'
loesung: |
  Ansatz: Den Bruch so zerlegen, dass eine Konstante plus eine Nullfolge dasteht. Dann ist die Konstante der Grenzwert.
  ---
  $a_n = \frac{9n}{3n} + \frac{2}{3n} = 3 + \frac{2}{3n}$. Also $a_n - 3 = \frac{2}{3n}$, und das ist eine Nullfolge (Konstante mal $\frac1n$).
  ---
  Antwort: $a = 3$ und $a_n - a = \frac{2}{3n}$. Probe mit $n = 5$: $a_5 = \frac{47}{15}$, und $\frac{47}{15} - 3 = \frac{2}{15}$ ✓.
```

```aufgabe
id: gf-null-schwelle-negativ
titel: Wechselnde Vorzeichen, kleinste Stelle
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Die Folge $a_n = (-0{,}75)^n$ ist eine Nullfolge. Bestimme das kleinste $N$, sodass $|a_n| < 0{,}01$ für alle $n \ge N$ gilt.
teile:
  - typ: zahl
    label: '$N$'
    loesung: "17"
    fehler:
      - wert: "16"
        meldung: |
          Prüfe $n = 16$ selbst: $0{,}75^{16} \approx 0{,}01002$ ist noch nicht kleiner als $0{,}01$. Runde die Grenze aus der Rechnung nicht ab.
      - wert: "1"
        meldung: |
          So entsteht das Ergebnis, wenn man das Zeichen beim Dividieren durch $\ln 0{,}75 < 0$ nicht umdreht. Aber $|a_1| = 0{,}75$ ist sicher nicht kleiner als $0{,}01$.
hinweise:
  - 'Bilde zuerst den Abstand: $|(-0{,}75)^n| = 0{,}75^n$.'
  - 'Logarithmiere $0{,}75^n < 0{,}01$. Beim Dividieren durch $\ln 0{,}75$ dreht sich das Zeichen, weil diese Zahl negativ ist.'
loesung: |
  Ansatz: Für die Definition zählt der Abstand zu $0$. Wegen des Betrags fällt das Vorzeichen weg: $|a_n| = 0{,}75^n$.
  ---
  Logarithmieren: $n \ln 0{,}75 < \ln 0{,}01$. Division durch $\ln 0{,}75 \approx -0{,}2877$ dreht das Zeichen: $n > \frac{\ln 0{,}01}{\ln 0{,}75} \approx 16{,}008$.
  ---
  Kleinstes $N = 17$. Weil $0{,}75^n$ mit wachsendem $n$ fällt, gilt die Bedingung dann für alle $n \ge 17$.
  ---
  Kontrolle: $0{,}75^{16} \approx 0{,}01002$ (knapp zu groß), $0{,}75^{17} \approx 0{,}00752$ ✓.
```

```aufgabe
id: gf-beschraenkt-mal-null
titel: Eine Folge zerlegen
niveau: 2
lernziel: 2
kompetenz: begruenden
angabe: |
  Gegeben ist $a_n = \dfrac{2 + (-1)^n\, n}{n^2}$.

  a) Welche Zerlegung zeigt am schnellsten, dass $(a_n)$ eine Nullfolge ist?

  b) Begründe damit in ganzen Sätzen, dass $(a_n)$ eine Nullfolge ist.
teile:
  - typ: auswahl
    label: 'a)'
    optionen:
      - '$a_n = \dfrac{2}{n^2} + (-1)^n \cdot \dfrac{1}{n}$'
      - '$a_n = (2 + (-1)^n n) \cdot \dfrac{1}{n^2}$, und $\frac{1}{n^2}$ ist eine Nullfolge.'
      - '$a_n = \dfrac{2}{n^2} + \dfrac{(-1)^n}{n^2}$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Der Faktor $2 + (-1)^n n$ ist **nicht** beschränkt, sein Betrag wächst ungefähr wie $n$. Die Regel „beschränkt mal Nullfolge“ greift hier nicht.
      - wert: 2
        meldung: |
          Beim Kürzen ist ein $n$ verloren gegangen: $\frac{(-1)^n n}{n^2} = \frac{(-1)^n}{n}$, nicht $\frac{(-1)^n}{n^2}$.
  - typ: text
    label: 'b) Begründung'
    muster: |
      Es ist $a_n = \frac{2}{n^2} + (-1)^n \cdot \frac1n$. Der erste Summand ist $2$ mal die Standard-Nullfolge $\frac{1}{n^2}$,
      also eine Nullfolge. Im zweiten Summanden ist $(-1)^n$ beschränkt (Betrag $1$) und $\frac1n$ eine Nullfolge.
      Nach der Regel „beschränkt mal Nullfolge“ ist er eine Nullfolge. Die Summe zweier Nullfolgen ist eine Nullfolge.
hinweise:
  - 'Teile den Bruch in zwei Summanden auf und kürze den zweiten.'
  - 'Für den zweiten Summanden: Welcher Faktor ist beschränkt, welcher ist eine Nullfolge?'
loesung: |
  Ansatz: Den Bruch zerlegen, damit jeder Summand zu einer bekannten Regel passt.
  ---
  $a_n = \frac{2}{n^2} + \frac{(-1)^n n}{n^2} = \frac{2}{n^2} + (-1)^n \cdot \frac1n$.
  ---
  $\frac{2}{n^2} \to 0$ als Vielfaches einer Standard-Nullfolge. $(-1)^n$ ist beschränkt, $\frac1n \to 0$, also geht das Produkt gegen $0$.
  ---
  Die Summe zweier Nullfolgen ist eine Nullfolge. Also $a_n \to 0$. Kontrolle: $a_{100} = \frac{2 + 100}{10\,000} = 0{,}0102$.
```

```aufgabe
id: gf-null-hierarchie
titel: Wer gewinnt auf lange Sicht?
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  Welche Quotienten sind Nullfolgen?
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$\dfrac{n^5}{1{,}1^n}$'
      - '$\dfrac{1{,}1^n}{n^5}$'
      - '$\dfrac{2^n}{n!}$'
      - '$\dfrac{n!}{10^n}$'
    richtig: [0, 2]
    fehler:
      - wert: [2]
        meldung: |
          $\frac{n^5}{1{,}1^n}$ ist für $n = 100$ noch riesig (etwa $725\,000$). Trotzdem gewinnt die Exponentialfunktion mit Basis $1{,}1 > 1$ irgendwann. Für $n = 300$ ist der Quotient schon kleiner als $1$.
      - wert: [0, 2, 3]
        meldung: |
          Bei $\frac{n!}{10^n}$ steht die Fakultät im **Zähler**. Sie wächst schneller als $10^n$, der Quotient wächst also über jede Grenze.
      - wert: [1, 3]
        meldung: |
          Du hast die Rangfolge umgedreht. Die Exponentialfunktion wächst schneller als jede Potenz, die Fakultät schneller als jede Exponentialfunktion. Was im Nenner schneller wächst, gewinnt.
hinweise:
  - 'Rangfolge des Wachstums: Potenz $n^k$, dann Exponentialfunktion $b^n$ mit $b > 1$, dann Fakultät $n!$.'
  - 'Ein Quotient ist eine Nullfolge, wenn der **Nenner** auf lange Sicht schneller wächst als der Zähler.'
loesung: |
  Ansatz: Für jeden Quotienten fragen: Steht die schneller wachsende Größe im Nenner?
  ---
  $\frac{n^5}{1{,}1^n}$: Exponentialfunktion im Nenner, Nullfolge. $\frac{1{,}1^n}{n^5}$ ist der Kehrwert davon und wächst über jede Grenze.
  ---
  $\frac{2^n}{n!}$: Fakultät im Nenner, Nullfolge. $\frac{n!}{10^n}$: Fakultät im Zähler, wächst über jede Grenze.
  ---
  Ergebnis: Optionen 1 und 3. Zahlen zur Kontrolle: $\frac{2^{10}}{10!} \approx 0{,}00028$, aber $\frac{30!}{10^{30}} \approx 265$.
```

```aufgabe
id: gf-null-fehler
titel: Fehler finden bei einem Produkt
niveau: 2
lernziel: 2
kompetenz: begruenden
angabe: |
  Eine Mitschülerin schreibt: „$a_n = \frac1n \cdot \big(n + (-1)^n\big)$. Der Faktor $\frac1n$ ist eine Nullfolge, also ist $(a_n)$ eine Nullfolge.“

  a) Gegen welche Zahl konvergiert $(a_n)$ wirklich?

  b) Wo liegt der Fehler in ihrer Begründung?
teile:
  - typ: zahl
    label: 'a) Grenzwert'
    loesung: "1"
    fehler:
      - wert: "0"
        meldung: |
          Das ist genau die Behauptung der Mitschülerin. Multipliziere aus: $\frac1n \cdot n = 1$. Was bleibt da für große $n$ übrig?
  - typ: auswahl
    label: 'b) Fehler'
    optionen:
      - 'Der zweite Faktor $n + (-1)^n$ ist nicht beschränkt. Die Regel „beschränkt mal Nullfolge“ darf man nicht anwenden.'
      - '$\frac1n$ ist gar keine Nullfolge.'
      - 'Die Begründung ist richtig, nur der Grenzwert ist falsch abgelesen.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          $\frac1n$ ist die wichtigste Standard-Nullfolge. Der Fehler liegt im **anderen** Faktor.
      - wert: 2
        meldung: |
          Die Begründung führt zu einer falschen Aussage, also ist sie nicht richtig. Prüfe die Voraussetzung der Regel für den zweiten Faktor.
hinweise:
  - 'Multipliziere aus: $\frac1n \cdot n + \frac1n \cdot (-1)^n$.'
  - 'Die Regel verlangt einen beschränkten zweiten Faktor. Wächst $n + (-1)^n$ über jede Grenze?'
loesung: |
  Ansatz: Ausmultiplizieren zeigt, was wirklich passiert. $a_n = \frac{n}{n} + \frac{(-1)^n}{n} = 1 + \frac{(-1)^n}{n}$.
  ---
  a) Der Summand $\frac{(-1)^n}{n}$ ist beschränkt mal Nullfolge, also eine Nullfolge. Damit ist $\lim a_n = 1$.
  ---
  b) Der Faktor $n + (-1)^n$ wächst über jede Grenze. Die Regel „beschränkt mal Nullfolge“ verlangt aber einen beschränkten Faktor.
  ---
  Kontrolle: $a_{100} = \frac{101}{100} = 1{,}01$ und $a_{101} = \frac{100}{101} \approx 0{,}99$. Die Glieder liegen nahe bei $1$, nicht bei $0$.
```

```aufgabe
id: gf-null-gefuehrt
titel: Nullfolge durch Abschätzen
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Die Folge $a_n = \dfrac{2 + \sin n}{n}$ ist eine Nullfolge. Wir schätzen $|a_n|$ nach oben durch einen einfachen Bruch $\frac{c}{n}$ ab.
  Bestimme mit dieser Abschätzung ein $N$, sodass $|a_n| < 0{,}01$ für alle $n \ge N$ sicher gilt. Gib das kleinste $N$ an, das die Abschätzung liefert.
teile:
  - typ: zahl
    label: '$N$'
    loesung: "301"
    toleranz: 0.1
    fehler:
      - wert: "300"
        meldung: |
          Aus $\frac3n < 0{,}01$ folgt $n > 300$. Für $n = 300$ wäre die Schranke genau $0{,}01$, also nicht kleiner.
      - wert: "201"
        meldung: |
          Du hast $|2 + \sin n| \le 2$ verwendet. Aber $\sin n$ kann bis $1$ groß sein, der Zähler also bis $3$.
hinweise:
  - 'Wie groß kann $2 + \sin n$ höchstens werden? Es gilt $-1 \le \sin n \le 1$.'
  - 'Mit $|a_n| \le \frac{3}{n}$ genügt es, $\frac3n < 0{,}01$ zu erreichen.'
gefuehrt:
  - text: Welche Zahl ist die kleinste obere Schranke für den Zähler $2 + \sin n$?
    teil:
      typ: zahl
      loesung: "3"
      fehler:
        - wert: "2"
          meldung: '$\sin n$ kann positive Werte bis $1$ annehmen. Dann ist der Zähler $2 + 1$.'
    erklaerung: 'Wegen $\sin n \le 1$ ist $2 + \sin n \le 3$. Wegen $\sin n \ge -1$ ist der Zähler außerdem mindestens $1$, also positiv.'
  - text: Überlege, warum daraus $|a_n| \le \frac3n$ folgt.
    erklaerung: 'Der Zähler ist positiv und höchstens $3$, der Nenner ist $n$. Ein größerer Zähler macht den Bruch größer, also $|a_n| = \frac{2 + \sin n}{n} \le \frac{3}{n}$.'
  - text: Für welche $n$ gilt $\frac3n < 0{,}01$? Gib die Grenze $g$ in $n > g$ an.
    teil:
      typ: zahl
      loesung: "300"
      toleranz: 0.1
      fehler:
        - wert: "0.03"
          meldung: 'Du hast mit $0{,}01$ multipliziert statt dividiert. $\frac{3}{0{,}01} = 300$.'
    erklaerung: 'Mit $n$ multiplizieren und durch $0{,}01$ dividieren: $n > 300$.'
  - text: Welches $N$ liefert die Abschätzung?
    teil:
      typ: zahl
      loesung: "301"
      toleranz: 0.1
      fehler:
        - wert: "300"
          meldung: 'Für $n = 300$ ist $\frac3n$ genau $0{,}01$. Gesucht ist die kleinste ganze Zahl **über** $300$.'
    erklaerung: 'Ab $N = 301$ ist $|a_n| \le \frac3n < 0{,}01$. Das echte kleinste $N$ kann kleiner sein, weil $\sin n$ selten genau $1$ ist. Für den Nachweis genügt aber ein $N$, das sicher funktioniert.'
loesung: |
  Ansatz: $\sin n$ springt unregelmäßig. Exakt nach $n$ auflösen geht nicht. Deshalb schätzen wir den Betrag nach oben durch etwas Einfaches ab (Vergleichsregel).
  ---
  Wegen $-1 \le \sin n \le 1$ ist $1 \le 2 + \sin n \le 3$. Also $|a_n| \le \frac{3}{n}$.
  ---
  $\frac3n < 0{,}01 \iff n > 300$. Die Abschätzung liefert $N = 301$.
  ---
  Antwort: Für alle $n \ge 301$ ist $|a_n| \le \frac{3}{n} \le \frac{3}{301} < 0{,}01$. Das zeigt zugleich, dass $(a_n)$ eine Nullfolge ist, weil $\frac3n$ eine ist.
```

```aufgabe
id: gf-null-wachstum
titel: Zwei Algorithmen im Vergleich
niveau: 3
lernziel: 2
kompetenz: modellieren
angabe: |
  Algorithmus A braucht für eine Eingabe der Größe $n$ genau $n^3$ Rechenschritte, Algorithmus B braucht $2^n$ Schritte.

  a) Ab welcher Größe $n$ braucht B **dauerhaft** mehr Schritte als A, also $2^n > n^3$ für alle größeren $n$ auch? (Für $n = 1$ gilt $2 > 1$, das ist ein Ausreißer.)

  b) Berechne das Verhältnis $\frac{n^3}{2^n}$ für $n = 20$ (auf 5 Nachkommastellen).

  c) Begründe mit den Standard-Nullfolgen, was mit $\frac{n^3}{2^n}$ für große $n$ passiert, und was das für die Algorithmen bedeutet.
teile:
  - typ: zahl
    label: 'a) ab $n =$'
    loesung: "10"
    fehler:
      - wert: "9"
        meldung: |
          Für $n = 9$ ist $2^9 = 512$, aber $9^3 = 729$. A ist dort noch schneller.
      - wert: "1"
        meldung: |
          Für $n = 1$ stimmt die Ungleichung, aber für $n = 2$ bis $9$ nicht mehr. Gesucht ist die Stelle, ab der sie **ohne Unterbrechung** gilt.
  - typ: zahl
    label: 'b) $\frac{n^3}{2^n}$ für $n = 20$'
    loesung: "20^3/2^20"
    anzeige: '0{,}00763'
    toleranz: 0.00001
    fehler:
      - wert: "2^20/20^3"
        meldung: |
          Du hast den Kehrwert berechnet. Gefragt ist $\frac{n^3}{2^n}$, also $8000$ geteilt durch $2^{20} = 1\,048\,576$.
  - typ: text
    label: 'c) Begründung'
    muster: |
      $\frac{n^3}{2^n}$ ist eine Standard-Nullfolge der Form $\frac{n^k}{b^n}$ mit $k = 3$ und $b = 2 > 1$: Die Exponentialfunktion
      schlägt jede Potenz. Das Verhältnis wird also beliebig klein. Für große Eingaben braucht A nur einen winzigen Bruchteil
      der Schritte von B. A ist auf lange Sicht der viel schnellere Algorithmus.
hinweise:
  - 'a) Erstelle eine Tabelle mit $2^n$ und $n^3$ für $n = 8, 9, 10, 11$.'
  - 'c) Welche der vier Standard-Nullfolgen hat die Form „Potenz durch Exponentialfunktion“?'
loesung: |
  Ansatz: In a) vergleichen wir Werte, in c) verwenden wir den Satz „Exponentialfunktion schlägt Potenz“.
  ---
  a) $n = 8$: $256 < 512$. $n = 9$: $512 < 729$. $n = 10$: $1024 > 1000$. $n = 11$: $2048 > 1331$. Ab $n = 10$ bleibt $2^n > n^3$, weil $2^n$ sich bei jedem Schritt verdoppelt, $n^3$ aber ab $n = 10$ um weniger als den Faktor $1{,}34$ wächst.
  ---
  b) $\frac{20^3}{2^{20}} = \frac{8000}{1\,048\,576} \approx 0{,}00763$. Bei $n = 20$ braucht A also weniger als ein Prozent der Schritte von B.
  ---
  c) $\frac{n^3}{2^n} \to 0$ nach Teil 3 des Satzes über Standard-Nullfolgen ($k = 3$, $b = 2$). Das Verhältnis wird beliebig klein.
  ---
  Antwort: Für große Eingaben ist Algorithmus A viel schneller. Kontrolle des Trends: Für $n = 30$ ist das Verhältnis $\frac{27\,000}{2^{30}} \approx 0{,}000025$.
```

## Divergenz: bestimmt und unbestimmt

```aufgabe
id: gf-div-vorwissen
titel: Eine quadratische Ungleichung für Indizes
niveau: 1
art: check
angabe: |
  Für welche positiven ganzen Zahlen $n$ gilt $n^2 > 400$? Gib die Grenze $g$ in der Form $n > g$ an.
  (Vorwissen aus [Kapitel 2, „Ungleichungen“](/lernen/mathe3/gleichungen/ungleichungen).)
teile:
  - typ: zahl
    label: '$g$'
    loesung: "20"
    fehler:
      - wert: "200"
        meldung: |
          Du hast durch $2$ geteilt statt die Wurzel zu ziehen. $n^2$ heißt $n \cdot n$, also brauchst du $\sqrt{400}$.
      - wert: "400"
        meldung: |
          Das ist die Grenze für $n^2$, nicht für $n$. Ziehe noch die Wurzel.
hinweise:
  - 'Für positive $n$ darf man auf beiden Seiten die Wurzel ziehen.'
loesung: |
  Beide Seiten sind positiv, also ist Wurzelziehen eine Äquivalenzumformung: $n > \sqrt{400} = 20$.
  ---
  Die Grenze ist $g = 20$. Probe: $21^2 = 441 > 400$, aber $20^2 = 400$ ist nicht größer.
```

**Worum geht es in einem Satz?** Eine Folge ohne Grenzwert heißt **divergent**. Wir unterscheiden zwei Arten:
Entweder wachsen die Glieder über jede Grenze, oder sie können sich nicht entscheiden und springen hin und her.

### Bestimmte Divergenz: über jede Grenze

Stell dir eine Hochspringerin vor, die jedes Jahr höher springt. Ein Trainer legt eine Latte auf eine Höhe $K$.
Die Folge „übertrifft jede Latte“, wenn es zu **jeder** Höhe $K$ ein Jahr gibt, ab dem **alle** Sprünge darüber
liegen. Genau so ist bestimmte Divergenz definiert. Die Höhe $K$ übernimmt die Rolle, die bei Konvergenz die
Toleranz $\varepsilon$ hatte.

**Beispiel:** $a_n = n^2$ übertrifft jede Latte. Für $K = 10\,000$ liegen alle Glieder ab $n = 101$ darüber.
**Nicht-Beispiel:** $a_n = 5 - \frac1n$ wächst zwar, bleibt aber immer unter der Latte $K = 5$.

:::definition[Bestimmte Divergenz]
Eine Folge $(a_n)$ **divergiert bestimmt gegen $+\infty$**, wenn gilt: Zu jeder Zahl $K > 0$ gibt es einen Index $N$,
sodass $a_n > K$ für alle $n \ge N$ gilt. Mit Quantoren:
$$\forall K > 0\ \ \exists N \in \N\ \ \forall n \ge N:\ a_n > K.$$
Man schreibt $\lim\limits_{n\to\infty} a_n = \infty$ oder $a_n \to \infty$. Entsprechend **divergiert $(a_n)$ bestimmt gegen
$-\infty$**, wenn zu jedem $K > 0$ ab einer Stelle $a_n < -K$ gilt.
:::

Das Zeichen $\infty$ liest man „unendlich“. Die Quantoren liest man wie bei der $\varepsilon$-$N$-Definition.
Vorgelesen: „Für jedes $K$ größer null gibt es ein $N$. Für alle $n$ ab $N$ ist $a_n$ größer als $K$.“ Das Spiel
funktioniert genauso. Die Skeptikerin nennt eine Höhe $K$, der Beweisende antwortet mit einem Index $N$.

:::beispiel[Bestimmte Divergenz nachweisen]
Wir zeigen: $a_n = n^2 - 6n$ divergiert bestimmt gegen $\infty$. Die ersten Glieder sind $-5;\ -8;\ -9;\ -8;\ -5;\ 0;\ 7$.
Sie fallen erst, dann steigen sie.

**Eine Runde mit $K = 400$.** Wir brauchen $n^2 - 6n > 400$, also $n^2 - 6n - 400 > 0$. Die Lösungsformel liefert
die Nullstellen $n = 3 \pm \sqrt{9 + 400} = 3 \pm \sqrt{409}$. Die positive ist ungefähr $23{,}22$. Die Parabel ist rechts
davon positiv. Also gilt die Ungleichung für alle $n \ge 24$. Kontrolle: $a_{23} = 391$ ist zu klein, $a_{24} = 432$ passt.

**Jede Runde, also der Beweis.** Für $n \ge 12$ ist $6n \le \frac{n^2}{2}$, denn das ist gleichwertig mit $12 \le n$.
Dann gilt $a_n = n^2 - 6n \ge n^2 - \frac{n^2}{2} = \frac{n^2}{2}$. Zu einem beliebigen $K > 0$ wählen wir eine natürliche
Zahl $N \ge 12$ mit $N > \sqrt{2K}$. Für alle $n \ge N$ folgt $a_n \ge \frac{n^2}{2} \ge \frac{N^2}{2} > K$.

**Was haben wir gezeigt?** Zu jeder noch so hohen Latte gibt es eine Stelle, ab der alle Glieder darüber liegen.
:::

```plot
x: [0, 30]
y: [-50, 750]
achsen: { x: "n", y: "aₙ" }
graphen:
  - { f: "x^2 - 6*x", farbe: 0, von: 1, bis: 30, label: "aₙ = n² − 6n" }
  - { f: "400", farbe: 1, gestrichelt: true, label: "Latte K = 400" }
punkte:
  - { x: 23, y: 391, farbe: 3 }
  - { x: 24, y: 432, label: "ab n = 24 über K", farbe: 2 }
beschriftung: Die Folge aₙ = n² − 6n, als Kurve durch die Folgenglieder gezeichnet, mit der Latte K = 400. Das Glied a₂₃ = 391 liegt noch darunter, ab n = 24 liegen alle Glieder darüber.
```

:::achtung[Mit ∞ rechnen wie mit einer Zahl]
Falsch: „$\lim(n^2 - n) = \lim n^2 - \lim n = \infty - \infty = 0$.“

Richtig: $\infty$ ist **keine Zahl**. Eine Folge mit $a_n \to \infty$ ist divergent, sie hat keinen Grenzwert in $\R$.
Man sagt manchmal „uneigentlicher Grenzwert“. Den Ausdruck $\infty - \infty$ kann man nicht ausrechnen. Hier hilft
Herausheben: $n^2 - n = n(n - 1)$. Beide Faktoren wachsen, also wächst das Produkt über jede Grenze. Für $n = 100$
ist es schon $9900$, weit weg von $0$.
:::

### Unbestimmte Divergenz: hin und her

:::definition[Unbestimmte Divergenz]
Eine Folge, die weder konvergiert noch bestimmt gegen $+\infty$ oder $-\infty$ divergiert, heißt **unbestimmt divergent**.
:::

Ein anderes Wort dafür ist **oszillierend**, also „schwankend“. Beispiele:

- $(-1)^n$ springt zwischen $-1$ und $1$.
- $(-2)^n$ springt mit wachsendem Betrag: $-2;\ 4;\ -8;\ 16;\ \dots$
- $\sin n$ springt ohne erkennbares Muster im Bereich von $-1$ bis $1$.

Ein Nicht-Beispiel ist $n^2$, denn sie divergiert **bestimmt**.

:::beispiel[Beweis: (−1)ⁿ hat keinen Grenzwert]
**Worum geht es?** Wir zeigen, dass **keine** Zahl $a$ der Grenzwert von $c_n = (-1)^n$ sein kann. Dazu nehmen wir das
Gegenteil an und führen es zu einem Widerspruch. So einen Beweis nennt man **Widerspruchsbeweis**.

**Schritt 1, Annahme.** Angenommen, es gibt eine Zahl $a$ mit $c_n \to a$.

**Schritt 2, ein geschicktes $\varepsilon$.** Die Definition gilt für jedes $\varepsilon$, also auch für $\varepsilon = 1$.
Es gibt dann ein $N$, sodass $|c_n - a| < 1$ für alle $n \ge N$ gilt.

**Schritt 3, gerade und ungerade Indizes.** Ab $N$ kommen gerade $n$ mit $c_n = 1$ vor. Für sie heißt die Bedingung
$|1 - a| < 1$, also $0 < a < 2$. Es kommen auch ungerade $n$ mit $c_n = -1$ vor. Für sie heißt sie $|-1 - a| < 1$,
also $-2 < a < 0$.

**Schritt 4, Widerspruch.** Keine Zahl ist zugleich positiv und negativ. Die Annahme war falsch.

**Was haben wir gezeigt?** Die Bänder der Breite $1$ um $1$ und um $-1$ überlappen sich nicht. Eine einzige Zahl $a$
kann nicht so nah an beiden Werten liegen. Die Folge ist auch nicht bestimmt divergent, denn kein Glied ist größer als
$1$. Sie ist also **unbestimmt divergent**.
:::

:::achtung[Großer Betrag heißt nicht bestimmt divergent]
Falsch: „$(-2)^n \to \infty$, denn $|(-2)^n| = 2^n$ wächst über jede Grenze.“

Richtig: Bestimmte Divergenz gegen $\infty$ verlangt, dass ab einer Stelle **alle** Glieder über der Latte $K$ liegen.
Bei $(-2)^n$ ist jedes Glied mit ungeradem Index negativ, zum Beispiel $(-2)^{11} = -2048$. Es liegt unter jeder
positiven Latte. Die Folge ist **unbestimmt** divergent. Nur der Betrag $|(-2)^n|$ divergiert bestimmt gegen $\infty$.
:::

:::merke[Überblick über das Verhalten von Folgen]
- **Konvergent gegen eine Zahl $a$:** zum Beispiel $\frac{2n + 1}{n + 1} \to 2$.
- **Nullfolge**, ein Sonderfall davon: zum Beispiel $\frac1n$ oder $0{,}5^n$.
- **Bestimmt divergent gegen $\infty$ oder $-\infty$:** zum Beispiel $n^2$, $2^n$, $\sqrt n$, $-n^3$.
- **Unbestimmt divergent:** zum Beispiel $(-1)^n$, $(-2)^n$, $\sin n$.
:::

```reflexion
frage: Eine Folge ist unbeschränkt. Muss sie dann bestimmt divergent sein? Erkläre mit einem eigenen Beispiel.
antwort: |
  Nein. Unbeschränkt heißt nur, dass **einige** Glieder beliebig groß werden. Bestimmte Divergenz verlangt, dass ab
  einer Stelle **alle** Glieder über jeder Latte liegen. Beispiel: $a_n = n$ für gerade $n$ und $a_n = 0$ für ungerade
  $n$. Die geraden Glieder wachsen über jede Grenze, aber jedes ungerade Glied ist $0$ und liegt unter der Latte
  $K = 1$. Die Folge ist unbeschränkt, aber unbestimmt divergent. Gleiches gilt für $(-2)^n$.
```

```aufgabe
id: gf-divergenz-arten
titel: Konvergent oder divergent?
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Welche Folgen sind **bestimmt divergent** (gegen $+\infty$ oder gegen $-\infty$)?
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$a_n = \sqrt{n}$'
      - '$a_n = (-1)^n + \frac1n$'
      - '$a_n = 1 - n^3$'
      - '$a_n = (-3)^n$'
      - '$a_n = \ln n$'
    richtig: [0, 2, 4]
    fehler:
      - wert: [0, 2, 3, 4]
        meldung: |
          $(-3)^n$ hat zwar einen wachsenden Betrag, aber jedes Glied mit ungeradem Index ist negativ. Ab keiner Stelle liegen alle Glieder über einer positiven Latte.
      - wert: [0, 4]
        meldung: |
          Bestimmte Divergenz gibt es auch nach unten. $1 - n^3$ fällt unter jede Grenze, also $1 - n^3 \to -\infty$.
      - wert: [0, 2]
        meldung: |
          $\ln n$ wächst sehr langsam, aber über jede Grenze: $\ln n > K$ gilt für alle $n > e^K$.
hinweise:
  - 'Prüfe für jede Folge: Liegen ab einer Stelle **alle** Glieder über jeder Latte $K$ (oder alle unter $-K$)?'
loesung: |
  Ansatz: Für jede Folge fragen, ob ab einer Stelle alle Glieder über jede Schranke wachsen oder unter jede fallen.
  ---
  $\sqrt n \to \infty$ (zu $K$ wähle $N > K^2$). $1 - n^3 \to -\infty$. $\ln n \to \infty$ (zu $K$ wähle $N > e^K$).
  ---
  $(-1)^n + \frac1n$ springt zwischen Werten nahe $-1$ und nahe $1$, sie ist unbestimmt divergent. $(-3)^n$ springt mit wachsendem Betrag, ebenfalls unbestimmt divergent.
  ---
  Ergebnis: Bestimmt divergent sind die Optionen 1, 3 und 5.
```

```aufgabe
id: gf-div-schranke
titel: Eine lineare Folge über die Latte
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Die Folge $a_n = 3n - 20$ divergiert bestimmt gegen $\infty$. Bestimme das kleinste $N$, sodass $a_n > 1000$ für alle $n \ge N$ gilt.
teile:
  - typ: zahl
    label: '$N$'
    loesung: "341"
    toleranz: 0.1
    fehler:
      - wert: "340"
        meldung: |
          Für $n = 340$ ist $a_{340} = 1020 - 20 = 1000$. Das ist nicht **größer** als $1000$.
      - wert: "334"
        meldung: |
          Du hast die $-20$ vergessen und nur $3n > 1000$ gelöst. Bringe zuerst die $20$ auf die rechte Seite.
hinweise:
  - 'Löse $3n - 20 > 1000$ nach $n$ auf: zuerst $20$ addieren, dann durch $3$ teilen.'
loesung: |
  Ansatz: Die Bedingung $a_n > K$ ist eine lineare Ungleichung in $n$. $3n - 20 > 1000 \iff 3n > 1020 \iff n > 340$.
  ---
  Kleinstes $N = 341$, weil das die kleinste ganze Zahl über $340$ ist. Kontrolle: $a_{340} = 1000$ (nicht größer), $a_{341} = 1003$ ✓. Weil die Folge wächst, gilt es für alle späteren $n$.
```

```aufgabe
id: gf-bestimmt-divergent-k
titel: Schranke überschreiten
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Die Folge $a_n = n^2 - 8n$ divergiert bestimmt gegen $\infty$. Ab welchem Index $N$ gilt $a_n > 500$ für alle $n \ge N$ (kleinstes $N$)?
teile:
  - typ: zahl
    label: '$N$'
    loesung: "27"
    fehler:
      - wert: "26"
        meldung: |
          Die positive Nullstelle ist ungefähr $26{,}72$. Du hast abgerundet. Prüfe: $a_{26} = 676 - 208 = 468$ ist noch kleiner als $500$.
      - wert: "23"
        meldung: |
          Du hast nur $n^2 > 500$ gelöst und den Summanden $-8n$ weggelassen. Er zieht die Glieder nach unten, die Schranke wird also später erreicht.
hinweise:
  - 'Bringe alles auf eine Seite: $n^2 - 8n - 500 > 0$. Bestimme die Nullstellen mit der Lösungsformel.'
  - 'Die Parabel ist rechts der positiven Nullstelle positiv. Nimm die kleinste ganze Zahl rechts davon.'
loesung: |
  Ansatz: Die Bedingung $n^2 - 8n > 500$ ist eine quadratische Ungleichung. Wir lösen $n^2 - 8n - 500 = 0$.
  ---
  Lösungsformel: $n = 4 \pm \sqrt{16 + 500} = 4 \pm \sqrt{516}$. Die positive Nullstelle ist ungefähr $26{,}72$.
  ---
  Rechts davon ist die Parabel positiv, also $a_n > 500$ für alle $n > 26{,}72$. Kleinstes $N = 27$.
  ---
  Kontrolle: $a_{26} = 468$ (zu klein), $a_{27} = 729 - 216 = 513$ ✓.
```

```aufgabe
id: gf-div-negativ
titel: Unter jede Grenze fallen
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Gegeben ist $a_n = 5 - n^2$.

  a) Wohin divergiert die Folge?

  b) Ab welchem Index $N$ gilt $a_n < -1000$ für alle $n \ge N$ (kleinstes $N$)?
teile:
  - typ: auswahl
    label: 'a)'
    optionen:
      - 'bestimmt gegen $-\infty$'
      - 'bestimmt gegen $+\infty$'
      - 'unbestimmt'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Das Quadrat $n^2$ wird **abgezogen**. Je größer $n$, desto kleiner wird $5 - n^2$.
      - wert: 2
        meldung: |
          Die Glieder wechseln nicht hin und her. Sie werden mit jedem Schritt kleiner.
  - typ: zahl
    label: 'b) $N$'
    loesung: "32"
    fehler:
      - wert: "31"
        meldung: |
          $a_{31} = 5 - 961 = -956$. Das ist noch **größer** als $-1000$.
      - wert: "1006"
        meldung: |
          $n^2 > 1005$ ist richtig. Jetzt fehlt noch das Wurzelziehen: Gesucht ist eine Grenze für $n$, nicht für $n^2$.
hinweise:
  - 'b) $5 - n^2 < -1000$ ist gleichwertig mit $n^2 > 1005$.'
  - 'Ziehe die Wurzel und nimm die kleinste ganze Zahl darüber.'
loesung: |
  Ansatz: Bestimmte Divergenz gegen $-\infty$ heißt: Zu jedem $K$ liegen ab einer Stelle alle Glieder unter $-K$. Hier ist $K = 1000$.
  ---
  a) $n^2$ wächst über jede Grenze, und es wird abgezogen. Also $a_n \to -\infty$.
  ---
  b) $5 - n^2 < -1000 \iff n^2 > 1005 \iff n > \sqrt{1005} \approx 31{,}70$. Kleinstes $N = 32$.
  ---
  Kontrolle: $a_{31} = -956$ (nicht kleiner als $-1000$), $a_{32} = 5 - 1024 = -1019$ ✓.
```

```aufgabe
id: gf-div-gefuehrt
titel: Die Wurzelfolge übertrifft jede Latte
niveau: 2
lernziel: 2
kompetenz: begruenden
angabe: |
  Wir zeigen, dass $a_n = \sqrt n$ bestimmt gegen $\infty$ divergiert.

  a) Ab welchem Index $N$ gilt $\sqrt n > 50$ für alle $n \ge N$ (kleinstes $N$)?

  b) Welche Wahl von $N$ funktioniert für eine **beliebige** Latte $K > 0$?
teile:
  - typ: zahl
    label: 'a) $N$'
    loesung: "2501"
    toleranz: 0.1
    fehler:
      - wert: "2500"
        meldung: |
          $\sqrt{2500} = 50$, also nicht größer als $50$. Gesucht ist die nächste ganze Zahl.
      - wert: "51"
        meldung: |
          Du hast die Bedingung für $\sqrt n$ statt für $n$ angegeben. Aus $\sqrt n > 50$ folgt durch Quadrieren $n > 2500$.
  - typ: auswahl
    label: 'b)'
    optionen:
      - 'jede natürliche Zahl $N > K^2$'
      - 'jede natürliche Zahl $N > \sqrt K$'
      - 'jede natürliche Zahl $N > 2K$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Teste mit $K = 50$: $\sqrt{50} \approx 7{,}1$. Für $N = 8$ ist aber $\sqrt 8 \approx 2{,}8$, also nicht über $50$.
      - wert: 2
        meldung: |
          Teste mit $K = 50$: $N = 101$ liefert $\sqrt{101} \approx 10$, das ist weit unter $50$. Die Wurzel wächst langsamer, man braucht $K^2$.
hinweise:
  - '$\sqrt n > K$ und $n > K^2$ sind für positive Zahlen gleichwertig.'
  - 'Quadriere beide Seiten. Das darf man, weil beide Seiten positiv sind.'
gefuehrt:
  - text: Die Latte ist $K = 50$. Quadriere die Bedingung $\sqrt n > 50$. Welche Zahl steht dann rechts in $n > \dots$?
    teil:
      typ: zahl
      loesung: "2500"
      toleranz: 0.1
      fehler:
        - wert: "100"
          meldung: 'Quadrieren heißt mit sich selbst multiplizieren: $50 \cdot 50$, nicht $50 \cdot 2$.'
    erklaerung: 'Beide Seiten sind positiv. Quadrieren ist dann eine Äquivalenzumformung: $n > 2500$.'
  - text: Welches ist das kleinste $N$ für $K = 50$?
    teil:
      typ: zahl
      loesung: "2501"
      toleranz: 0.1
      fehler:
        - wert: "2500"
          meldung: 'Bei $n = 2500$ ist $\sqrt n$ genau $50$, also nicht größer.'
    erklaerung: '$N = 2501$, und weil $\sqrt n$ mit $n$ wächst, liegen alle späteren Glieder ebenfalls über $50$.'
  - text: Ersetze jetzt $50$ durch ein beliebiges $K$. Welche Bedingung an $n$ erhältst du?
    teil:
      typ: auswahl
      optionen:
        - '$n > K^2$'
        - '$n > 2K$'
      richtig: [0]
      fehler:
        - wert: 1
          meldung: 'Quadrieren ergibt $K \cdot K = K^2$, nicht $2K$.'
    erklaerung: '$\sqrt n > K \iff n > K^2$, weil beide Seiten positiv sind.'
  - text: Überlege, warum damit der Beweis für jede Latte fertig ist.
    erklaerung: 'Zu jedem $K > 0$ gibt es eine natürliche Zahl $N > K^2$. Für alle $n \ge N$ ist $n > K^2$, also $\sqrt n > K$. Das ist genau die Definition der bestimmten Divergenz.'
loesung: |
  Ansatz: Wir lösen die Bedingung $\sqrt n > K$ zuerst für die konkrete Latte $K = 50$ und dann allgemein. Das ist dasselbe Vorgehen wie beim $\varepsilon$-$N$-Beweis.
  ---
  a) $\sqrt n > 50 \iff n > 2500$. Kleinstes $N = 2501$.
  ---
  b) $\sqrt n > K \iff n > K^2$. Zu jedem $K$ wähle eine natürliche Zahl $N > K^2$. Für alle $n \ge N$ gilt dann $\sqrt n \ge \sqrt N > K$.
  ---
  Antwort: $\sqrt n \to \infty$. Kontrolle für a): $\sqrt{2501} \approx 50{,}01 > 50$ ✓.
```

```aufgabe
id: gf-div-unbeschraenkt
titel: Unbeschränkt, aber nicht bestimmt divergent
niveau: 2
lernziel: 2
kompetenz: begruenden
angabe: |
  Die Folge $d_n$ ist so definiert: $d_n = n$ für gerade $n$ und $d_n = 0$ für ungerade $n$. Also $0;\ 2;\ 0;\ 4;\ 0;\ 6;\ \dots$

  Welche Aussage beschreibt die Folge richtig?
teile:
  - typ: auswahl
    optionen:
      - 'Sie ist unbeschränkt und unbestimmt divergent, weil nach jeder Stelle wieder ein Glied $0$ kommt.'
      - 'Sie divergiert bestimmt gegen $\infty$, weil die geraden Glieder über jede Grenze wachsen.'
      - 'Sie konvergiert gegen $0$, weil unendlich viele Glieder gleich $0$ sind.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Für die Latte $K = 1$ müssten ab einer Stelle **alle** Glieder größer als $1$ sein. Jedes ungerade Glied ist aber $0$.
      - wert: 2
        meldung: |
          Unendlich viele Glieder bei $0$ reichen nicht. Für $\varepsilon = 1$ liegen alle geraden Glieder ab $d_2 = 2$ außerhalb des Bandes um $0$.
hinweise:
  - 'Prüfe bestimmte Divergenz mit der Latte $K = 1$.'
  - 'Prüfe Konvergenz gegen $0$ mit $\varepsilon = 1$. Überlege, ob die Folge überhaupt beschränkt ist.'
loesung: |
  Ansatz: Wir prüfen die drei möglichen Verhaltensweisen einzeln.
  ---
  Bestimmt divergent? Nein: Für $K = 1$ kommt nach jeder Stelle ein ungerades $n$ mit $d_n = 0 < 1$.
  ---
  Konvergent gegen eine Zahl $a$? Nein: Die geraden Glieder wachsen über jede Grenze. Kein Band um $a$ enthält fast alle Glieder.
  ---
  Antwort: Die Folge ist unbeschränkt und unbestimmt divergent. Option 1 ist richtig.
```

```aufgabe
id: gf-divergenz-beweis
titel: Divergenz beweisen
niveau: 3
lernziel: 2
kompetenz: begruenden
angabe: |
  Gegeben ist $a_n = 3 \cdot (-1)^n + 1$, also $-2;\ 4;\ -2;\ 4;\ \dots$

  a) Welches $\varepsilon$ ist für einen Widerspruchsbeweis am geschicktesten (halber Abstand der beiden Werte)?

  b) Beweise, dass $(a_n)$ keinen Grenzwert hat.
teile:
  - typ: zahl
    label: 'a) $\varepsilon$'
    loesung: "3"
    fehler:
      - wert: "6"
        meldung: |
          $6$ ist der **ganze** Abstand von $-2$ und $4$. Bei $\varepsilon = 6$ überlappen sich die Bänder. Nimm den halben Abstand.
      - wert: "1"
        meldung: |
          Mit $\varepsilon = 1$ klappt der Beweis auch, aber gefragt ist der halbe Abstand der beiden Werte $-2$ und $4$.
  - typ: text
    label: 'b) Beweis'
    muster: |
      Angenommen, $a_n \to a$. Zu $\varepsilon = 3$ gibt es dann ein $N$ mit $|a_n - a| < 3$ für alle $n \ge N$. Ab $N$ kommen
      gerade $n$ mit $a_n = 4$ vor, also $|4 - a| < 3$, das heißt $1 < a < 7$. Es kommen auch ungerade $n$ mit $a_n = -2$ vor,
      also $|-2 - a| < 3$, das heißt $-5 < a < 1$. Keine Zahl ist zugleich größer und kleiner als $1$. Widerspruch, also hat
      die Folge keinen Grenzwert.
hinweise:
  - 'Widerspruchsbeweis: Nimm an, es gibt einen Grenzwert $a$, und wende die Definition mit dem halben Abstand an.'
  - 'Schreibe die beiden Bedingungen $|4 - a| < 3$ und $|-2 - a| < 3$ als Doppelungleichungen für $a$.'
loesung: |
  Ansatz: Widerspruchsbeweis wie bei $(-1)^n$. Wir wählen $\varepsilon$ so, dass sich die Bänder um die beiden Werte nicht überlappen.
  ---
  a) Der Abstand von $-2$ und $4$ ist $6$, der halbe Abstand $\varepsilon = 3$.
  ---
  b) Angenommen, $a_n \to a$. Dann gibt es ein $N$ mit $|a_n - a| < 3$ für alle $n \ge N$. Für gerade $n$ heißt das $|4 - a| < 3$, also $1 < a < 7$.
  ---
  Für ungerade $n$ heißt es $|-2 - a| < 3$, also $-5 < a < 1$. Beides zugleich ist unmöglich, denn $a$ müsste größer und kleiner als $1$ sein.
  ---
  Antwort: Die Annahme ist falsch, die Folge ist divergent. Sie ist beschränkt (alle Glieder zwischen $-2$ und $4$), also unbestimmt divergent.
```

## Eindeutigkeit und Beschränktheit: die ersten Beweise

```aufgabe
id: gf-eig-vorwissen
titel: Was heißt beschränkt?
niveau: 1
art: check
angabe: |
  Wann heißt eine Folge $(a_n)$ **beschränkt**?
  (Vorwissen aus [Kapitel 8, „Monotonie und Beschränktheit“](/lernen/mathe3/folgen-reihen/monotonie-und-beschraenktheit).)
teile:
  - typ: auswahl
    optionen:
      - 'wenn es eine feste Zahl $M$ gibt mit $|a_n| \le M$ für **alle** $n$'
      - 'wenn zu jedem $n$ eine Zahl $M$ mit $|a_n| \le M$ existiert'
      - 'wenn die Folge einen Grenzwert hat'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Das erfüllt jede Folge: Zu $a_n = n^2$ nimmt man einfach $M = n^2$. Die Schranke muss **eine feste Zahl** für alle Glieder zugleich sein.
      - wert: 2
        meldung: |
          Das verwechselt Definition und Satz. Dass konvergente Folgen beschränkt sind, beweisen wir gerade in diesem Abschnitt. Die Definition spricht nur von einer Schranke.
hinweise:
  - 'Die Schranke $M$ wird **zuerst** gewählt und muss dann für jedes Glied passen.'
loesung: |
  Beschränkt heißt: Alle Glieder liegen in einem festen Streifen von $-M$ bis $M$.
  ---
  Also gibt es eine feste Zahl $M$ mit $|a_n| \le M$ für alle $n$. Option 1 ist richtig.
```

**Worum geht es in einem Satz?** Mit der exakten Definition beweisen wir zwei Dinge, die anschaulich klar
scheinen: Eine Folge hat höchstens **einen** Grenzwert, und jede konvergente Folge ist **beschränkt**.

Beide Sätze kommen in der mündlichen Prüfung sehr oft. Beide Beweise verwenden dieselben zwei Ideen. Erstens
wählt man ein **geschicktes, konkretes** $\varepsilon$. Das darf man, weil die Definition für **jedes**
$\varepsilon > 0$ gilt. Zweitens braucht man ein neues Werkzeug, die Dreiecksungleichung.

### Das Werkzeug: die Dreiecksungleichung

Stell dir drei Orte auf einer Landstraße vor. Der Weg von A nach B ist nie länger als der Umweg von A über C nach B.
Für Zahlen auf der Zahlengeraden heißt das:

:::satz[Dreiecksungleichung]
Für alle reellen Zahlen $x$ und $y$ gilt $|x + y| \le |x| + |y|$.
:::

Dabei ist $|x + y|$ der Betrag der Summe, und $|x| + |y|$ ist die Summe der Beträge. Zwei Zahlenbeispiele:

- $x = 3$, $y = -5$: $|3 + (-5)| = |-2| = 2$, aber $|3| + |-5| = 8$. Hier ist die linke Seite echt kleiner, weil sich
  die Vorzeichen teilweise aufheben.
- $x = 3$, $y = 5$: $|3 + 5| = 8$ und $|3| + |5| = 8$. Bei gleichem Vorzeichen gilt Gleichheit.

Wir verwenden die Ungleichung fast immer so: Man schreibt eine Zahl als Summe zweier Stücke, deren Beträge man
kennt. Zum Beispiel ist $a - b = (a - c) + (c - b)$. Daraus folgt $|a - b| \le |a - c| + |c - b|$. In Worten: Der
Abstand von $a$ und $b$ ist höchstens so groß wie der Umweg über die Zwischenstation $c$.

```aufgabe
id: gf-eig-dreieck
titel: Die Dreiecksungleichung nachrechnen
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Es ist $x = 4$ und $y = -9$. Berechne $|x + y|$ und $|x| + |y|$.
teile:
  - typ: zahl
    label: '$|x + y|$'
    loesung: "abs(4 - 9)"
    anzeige: '5'
    fehler:
      - wert: "-5"
        meldung: |
          $4 + (-9) = -5$ ist richtig gerechnet, aber der Betrag macht daraus eine nichtnegative Zahl.
      - wert: "13"
        meldung: |
          $13$ ist die Summe der Beträge. Bei $|x + y|$ wird zuerst addiert und **dann** der Betrag gebildet.
  - typ: zahl
    label: '$|x| + |y|$'
    loesung: "abs(4) + abs(-9)"
    anzeige: '13'
    fehler:
      - wert: "5"
        meldung: |
          Hier werden zuerst die Beträge gebildet: $|4| = 4$ und $|-9| = 9$. Erst dann wird addiert.
hinweise:
  - 'Achte auf die Reihenfolge: Betrag der Summe oder Summe der Beträge?'
loesung: |
  Ansatz: Bei $|x + y|$ erst addieren, dann Betrag. Bei $|x| + |y|$ erst Beträge, dann addieren.
  ---
  $|4 + (-9)| = |-5| = 5$ und $|4| + |-9| = 4 + 9 = 13$.
  ---
  Kontrolle: $5 \le 13$, wie es die Dreiecksungleichung verlangt. Die Seiten sind verschieden, weil $x$ und $y$ verschiedene Vorzeichen haben.
```

### Der Grenzwert ist eindeutig

**Worum geht es in einem Satz?** Eine Folge kann nicht zwei verschiedenen Zahlen zugleich beliebig nahe kommen.
Zuerst sehen wir das an Zahlen.

:::beispiel[Zwei Kandidaten, zwei getrennte Bänder]
Die Folge $c_n = 2 + \frac1n$ hat den Grenzwert $2$. Könnte zusätzlich $2{,}5$ ein Grenzwert sein?

**Schritt 1, $\varepsilon$ als halben Abstand wählen.** Der Abstand der Kandidaten ist $0{,}5$. Wir nehmen die Hälfte,
$\varepsilon = 0{,}25$.

**Schritt 2, die beiden Bänder.** Um $2$ liegt das Band $(1{,}75;\ 2{,}25)$, um $2{,}5$ das Band $(2{,}25;\ 2{,}75)$.
Die Bänder berühren sich bei $2{,}25$, überlappen sich aber nicht, weil die Ränder nicht dazugehören.

**Schritt 3, wo die Glieder liegen.** Ab $n = 5$ ist $\frac1n \le 0{,}2 < 0{,}25$. Alle diese Glieder liegen im
linken Band. Dann können sie nicht zugleich im rechten Band liegen.

**Ergebnis:** $2{,}5$ ist kein Grenzwert. Fast alle Glieder können nicht gleichzeitig in zwei getrennten Bändern sein.
:::

```plot
x: [0, 12.5]
y: [1.6, 3.2]
achsen: { x: "n", y: "cₙ" }
graphen:
  - { f: "2.25", farbe: 1, gestrichelt: true, label: "Rand 2,25" }
  - { f: "1.75", farbe: 1, gestrichelt: true, label: "Band um 2" }
  - { f: "2.75", farbe: 3, gestrichelt: true, label: "Band um 2,5" }
punkte:
  - { x: 1, y: 3, farbe: 0 }
  - { x: 2, y: 2.5, farbe: 0 }
  - { x: 3, y: 2.3333, farbe: 0 }
  - { x: 4, y: 2.25, farbe: 0 }
  - { x: 5, y: 2.2, farbe: 0 }
  - { x: 6, y: 2.1667, farbe: 0 }
  - { x: 7, y: 2.1429, farbe: 0 }
  - { x: 8, y: 2.125, farbe: 0 }
  - { x: 9, y: 2.1111, farbe: 0 }
  - { x: 10, y: 2.1, farbe: 0 }
  - { x: 11, y: 2.0909, farbe: 0 }
  - { x: 12, y: 2.0833, farbe: 0 }
beschriftung: Die Folge cₙ = 2 + 1/n mit zwei Bändern der halben Breite 0,25, eines um 2 (von 1,75 bis 2,25) und eines um 2,5 (von 2,25 bis 2,75). Die Bänder überlappen sich nicht. Ab n = 5 liegen alle Glieder im unteren Band und damit nicht im oberen.
```

:::satz[Eindeutigkeit des Grenzwerts]
Eine Folge hat höchstens einen Grenzwert. Wenn $a_n \to a$ und $a_n \to b$ gilt, dann ist $a = b$.
:::

:::beweis
**Annahme:** Es sei $a \ne b$. Dann ist der Abstand $|a - b|$ positiv. Wir führen das zu einem Widerspruch.

*Schritt 1, $\varepsilon$ wählen.* Wir nehmen den halben Abstand: $\varepsilon = \frac{|a - b|}{2} > 0$.

*Schritt 2, beide Konvergenzen anwenden.* Wegen $a_n \to a$ gibt es ein $N_1$ mit $|a_n - a| < \varepsilon$ für alle
$n \ge N_1$. Wegen $a_n \to b$ gibt es ein $N_2$ mit $|a_n - b| < \varepsilon$ für alle $n \ge N_2$.

*Schritt 3, ein gemeinsamer Index.* Für $n \ge \max(N_1, N_2)$ gelten beide Ungleichungen zugleich. Dabei ist
$\max(N_1, N_2)$ die größere der beiden Zahlen.

*Schritt 4, Dreiecksungleichung.* Wir schreiben $a - b = (a - a_n) + (a_n - b)$ und erhalten
$$|a - b| \le |a - a_n| + |a_n - b| < \varepsilon + \varepsilon = |a - b|.$$

*Schritt 5, Widerspruch.* Da steht $|a - b| < |a - b|$. Keine Zahl ist kleiner als sie selbst. Also war die Annahme
falsch, und es gilt $a = b$.
:::

**Was haben wir gezeigt?** Es ist genau das Bild aus dem Beispiel: Die Bänder mit halbem Abstand überlappen sich nicht,
und fast alle Glieder können nicht in beiden liegen. Erst dieser Satz erlaubt es, von **dem** Grenzwert zu sprechen
und $\lim a_n = a$ zu schreiben.

**Ein häufiges Missverständnis:** „Darf man $\varepsilon$ im Beweis einfach selbst festlegen?“ Ja. Die Definition
verspricht ein passendes $N$ für **jedes** $\varepsilon > 0$. Also darf man sich ein besonders nützliches
$\varepsilon$ aussuchen und das Versprechen dafür einlösen.

```aufgabe
id: gf-eig-lueckenbeweis
titel: Lückenbeweis zur Eindeutigkeit
niveau: 3
lernziel: 3
kompetenz: begruenden
angabe: |
  Jemand behauptet, eine Folge $(a_n)$ konvergiere sowohl gegen $1$ als auch gegen $4$. Wir widerlegen das mit dem Beweis der Eindeutigkeit.
  Welches $\varepsilon$ wählt man im Beweis?
teile:
  - typ: zahl
    label: '$\varepsilon$'
    loesung: "3/2"
    anzeige: '1{,}5'
    fehler:
      - wert: "3"
        meldung: |
          $3$ ist der ganze Abstand von $1$ und $4$. Mit $\varepsilon = 3$ überlappen sich die Bänder $(-2;\ 4)$ und $(1;\ 7)$. Nimm den halben Abstand.
      - wert: "2.5"
        meldung: |
          $2{,}5$ ist der Mittelpunkt zwischen $1$ und $4$, nicht der halbe Abstand. Gesucht ist die halbe **Länge** der Strecke von $1$ bis $4$.
hinweise:
  - 'Berechne zuerst den Abstand der beiden Kandidaten.'
  - 'Nimm die Hälfte davon. Dann reichen die Bänder genau bis zur Mitte zwischen den Kandidaten.'
gefuehrt:
  - text: Wie groß ist der Abstand $|4 - 1|$ der beiden Kandidaten?
    teil:
      typ: zahl
      loesung: "3"
      fehler:
        - wert: "-3"
          meldung: 'Ein Abstand ist ein Betrag und damit nie negativ.'
    erklaerung: 'Der Abstand ist $|4 - 1| = 3$.'
  - text: Welches $\varepsilon$ ist der halbe Abstand?
    teil:
      typ: zahl
      loesung: "1.5"
      fehler:
        - wert: "3"
          meldung: 'Das ist der ganze Abstand. Teile durch $2$.'
    erklaerung: '$\varepsilon = \frac32 = 1{,}5$.'
  - text: Das Band um $1$ ist $(1 - 1{,}5;\ 1 + 1{,}5)$. Wo liegt sein rechter Rand?
    teil:
      typ: zahl
      loesung: "2.5"
      fehler:
        - wert: "-0.5"
          meldung: 'Das ist der linke Rand $1 - 1{,}5$. Gefragt ist der rechte.'
    erklaerung: 'Das Band um $1$ ist $(-0{,}5;\ 2{,}5)$.'
  - text: Wo liegt der linke Rand des Bandes um $4$?
    teil:
      typ: zahl
      loesung: "2.5"
      fehler:
        - wert: "5.5"
          meldung: 'Das ist der rechte Rand $4 + 1{,}5$. Gefragt ist der linke.'
    erklaerung: 'Das Band um $4$ ist $(2{,}5;\ 5{,}5)$. Es beginnt genau dort, wo das andere endet, und die Ränder gehören nicht dazu.'
  - text: Überlege, warum daraus der Widerspruch folgt.
    erklaerung: 'Ab einem gemeinsamen Index müssten alle Glieder in **beiden** Bändern liegen. Die Bänder haben aber keinen gemeinsamen Punkt. Also kann die Folge nicht gegen beide Zahlen konvergieren.'
loesung: |
  Ansatz: Im Eindeutigkeitsbeweis wählt man $\varepsilon$ als halben Abstand der beiden Kandidaten. Dann überlappen sich die Bänder nicht.
  ---
  Abstand $|4 - 1| = 3$, also $\varepsilon = 1{,}5$. Die Bänder sind $(-0{,}5;\ 2{,}5)$ und $(2{,}5;\ 5{,}5)$.
  ---
  Ab $\max(N_1, N_2)$ müsste jedes Glied in beiden Bändern liegen. Das ist unmöglich, weil sie keinen gemeinsamen Punkt haben.
  ---
  Antwort: $\varepsilon = 1{,}5$. Die Folge kann nicht gegen $1$ und gegen $4$ zugleich konvergieren.
```

### Konvergente Folgen sind beschränkt

**Worum geht es in einem Satz?** Wenn eine Folge einen Grenzwert hat, bleiben alle ihre Glieder in einem festen
Streifen. Wieder zuerst an Zahlen.

:::beispiel[Eine Schranke konkret bauen]
Die Folge $a_n = 3 + \frac{10}{n}$ konvergiert gegen $3$. Wir suchen eine Zahl $M$ mit $|a_n| \le M$ für **alle** $n$.

**Schritt 1, der Schwanz der Folge.** Wir wenden die Definition mit $\varepsilon = 1$ an. Es ist $|a_n - 3| = \frac{10}{n} < 1$
genau für $n > 10$. Ab $N = 11$ liegen also alle Glieder im Band $(2;\ 4)$. Für sie gilt $|a_n| < 4$.

**Schritt 2, der Anfang der Folge.** Vor $N$ liegen nur die zehn Glieder $a_1$ bis $a_{10}$. Ihre Werte sind
$13;\ 8;\ 6{,}\overline3;\ 5{,}5;\ 5;\ \dots;\ 4$. Das größte ist $a_1 = 13$.

**Schritt 3, beides zusammen.** Wir nehmen das Größere: $M = \max(13;\ 4) = 13$. Dann gilt $|a_n| \le 13$ für alle $n$.
:::

:::satz[Konvergente Folgen sind beschränkt]
Jede konvergente Folge ist beschränkt.
:::

:::beweis
Sei $a_n \to a$. Wir bauen eine Schranke $M$ in drei Schritten, genau wie im Beispiel.

*Schritt 1, der Schwanz.* Zu $\varepsilon = 1$ gibt es ein $N$ mit $|a_n - a| < 1$ für alle $n \ge N$. Mit der
Dreiecksungleichung folgt für diese $n$:
$$|a_n| = |(a_n - a) + a| \le |a_n - a| + |a| < 1 + |a|.$$

*Schritt 2, der Anfang.* Vor $N$ liegen nur die **endlich vielen** Glieder $a_1, \dots, a_{N-1}$. Endlich viele Zahlen
haben immer ein größtes Element.

*Schritt 3, zusammensetzen.* Wir setzen
$$M = \max\big(|a_1|, |a_2|, \dots, |a_{N-1}|,\ 1 + |a|\big).$$
Dann gilt $|a_n| \le M$ für **alle** $n$, also $-M \le a_n \le M$.
:::

**Was haben wir gezeigt?** Ab $N$ hält die Konvergenz die Glieder in Schach. Davor gibt es nur endlich viele, und die
haben ein Maximum. Diese Idee „Schwanz durch Konvergenz, Anfang durch Endlichkeit“ kommt in der Analysis immer
wieder vor.

```aufgabe
id: gf-eig-schranke
titel: Eine Schranke wie im Beweis bauen
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Die Folge $a_n = 1 + \dfrac{6}{n}$ konvergiert gegen $1$. Wir bauen eine Schranke wie im Beweis mit $\varepsilon = 1$.

  a) Ab welchem kleinsten Index $N$ gilt $|a_n - 1| < 1$?

  b) Welche Schranke $M = \max\big(|a_1|, \dots, |a_{N-1}|,\ 1 + |a|\big)$ ergibt sich?
teile:
  - typ: zahl
    label: 'a) $N$'
    loesung: "7"
    fehler:
      - wert: "6"
        meldung: |
          Für $n = 6$ ist $\frac66 = 1$, also nicht kleiner als $1$. Die Bedingung lautet $n > 6$.
  - typ: zahl
    label: 'b) $M$'
    loesung: "7"
    fehler:
      - wert: "2"
        meldung: |
          $1 + |a| = 2$ gilt nur für die Glieder ab $N$. Die Glieder davor, zum Beispiel $a_1 = 7$, sind größer. Sie gehören ins Maximum.
hinweise:
  - 'a) Löse $\frac6n < 1$.'
  - 'b) Berechne $a_1$ bis $a_6$ und vergleiche das größte mit $1 + |1| = 2$.'
loesung: |
  Ansatz: Wie im Beweis: Den Schwanz der Folge über die Konvergenz abschätzen, den Anfang über das Maximum endlich vieler Glieder.
  ---
  a) $|a_n - 1| = \frac6n < 1 \iff n > 6$. Also $N = 7$. Ab dort ist $|a_n| < 1 + 1 = 2$.
  ---
  b) Die Glieder davor sind $7;\ 4;\ 3;\ 2{,}5;\ 2{,}2;\ 2$. Das größte ist $7$. Also $M = \max(7;\ 2) = 7$.
  ---
  Probe: Die Folge fällt von $a_1 = 7$ aus und bleibt über $1$. Also gilt $|a_n| \le 7$ für alle $n$ ✓.
```

:::achtung[Den Anfang der Folge vergessen]
Falsch: „$a_n = 3 + \frac{10}{n}$ konvergiert gegen $3$. Mit $\varepsilon = 1$ ist $|a_n| < 1 + 3 = 4$. Also ist $M = 4$ eine Schranke.“

Richtig: Die Abschätzung $|a_n| < 4$ gilt nur für $n \ge 11$. Das erste Glied ist $a_1 = 13$ und viel größer als $4$.
Die endlich vielen Glieder vor $N$ müssen extra berücksichtigt werden: $M = \max(13;\ 4) = 13$.
:::

:::achtung[Die Umkehrung ist falsch]
Falsch: „$(-1)^n$ ist beschränkt durch $1$. Beschränkte Folgen konvergieren. Also hat $(-1)^n$ einen Grenzwert.“

Richtig: Der Satz gilt nur in einer Richtung: Wenn konvergent, dann beschränkt. Die Folge $(-1)^n$ ist beschränkt, aber
divergent. Das haben wir in [11.6 Divergenz: bestimmt und unbestimmt](/lernen/mathe3/grenzwerte-folgen/divergenz-bestimmt-und-unbestimmt) bewiesen. In der mündlichen
Prüfung folgt auf diesen Satz fast immer die Frage nach der Umkehrung. Die richtige Antwort lautet „Nein“ mit diesem
Gegenbeispiel.
:::

Die **Kontraposition** des Satzes ist trotzdem nützlich. Eine Kontraposition dreht eine Wenn-dann-Aussage um und
verneint beide Teile. Sie gilt immer, wenn die ursprüngliche Aussage gilt. Hier lautet sie: **Wenn eine Folge
unbeschränkt ist, dann ist sie divergent.** Damit sieht man ohne Rechnung, dass $n^2$ und $(-2)^n$ keinen Grenzwert haben.
Später zeigt das Monotoniekriterium: Beschränkt **und** monoton zusammen garantieren Konvergenz.

```aufgabe
id: gf-eig-kontraposition
titel: Divergenz ohne Rechnung erkennen
niveau: 2
lernziel: 3
kompetenz: begruenden
angabe: |
  Für welche Folgen folgt die Divergenz **allein** daraus, dass sie unbeschränkt sind?
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$a_n = n \cdot (-1)^n$'
      - '$a_n = \sqrt n$'
      - '$a_n = (-1)^n$'
      - '$a_n = \sin n$'
      - '$a_n = 2 + \frac1n$'
    richtig: [0, 1]
    fehler:
      - wert: [0, 1, 2]
        meldung: |
          $(-1)^n$ ist divergent, aber **beschränkt** durch $1$. Die Kontraposition „unbeschränkt, also divergent“ sagt über sie nichts. Ihre Divergenz braucht einen eigenen Beweis.
      - wert: [1]
        meldung: |
          $n \cdot (-1)^n$ springt zwar zwischen positiven und negativen Werten, aber ihr Betrag $n$ wächst über jede Grenze. Sie ist unbeschränkt.
      - wert: [0, 1, 4]
        meldung: |
          $2 + \frac1n$ liegt immer zwischen $2$ und $3$. Sie ist beschränkt und sogar konvergent.
hinweise:
  - 'Prüfe zuerst für jede Folge: Gibt es eine feste Zahl $M$ mit $|a_n| \le M$ für alle $n$?'
  - 'Die Kontraposition lautet: Wenn unbeschränkt, dann divergent. Sie hilft nur bei unbeschränkten Folgen.'
loesung: |
  Ansatz: Die Kontraposition von „konvergent, also beschränkt“ lautet „unbeschränkt, also divergent“. Wir suchen die unbeschränkten Folgen.
  ---
  $|n(-1)^n| = n$ und $\sqrt n$ wachsen über jede Grenze. Diese beiden Folgen sind unbeschränkt, also divergent.
  ---
  $(-1)^n$ und $\sin n$ sind beschränkt durch $1$. Sie sind zwar divergent, aber das folgt nicht aus der Kontraposition. $2 + \frac1n$ ist beschränkt und konvergent.
  ---
  Ergebnis: Optionen 1 und 2.
```

### Grenzwerte und Ungleichungen

:::satz[Ungleichungen bleiben im Grenzwert erhalten]
Es gelte $a_n \to a$, $b_n \to b$ und ab einer Stelle $a_n \le b_n$. Dann ist auch $a \le b$.
:::

**Beispiel:** $a_n = 1 - \frac1n$ und $b_n = 1 + \frac1n$. Für alle $n$ ist $a_n \le b_n$, und im Grenzwert gilt $1 \le 1$.

**Nicht-Beispiel für echte Ungleichungen:** Es ist $\frac1n > 0$ für jedes $n$. Der Grenzwert ist aber $0$, und
$0 > 0$ ist falsch. Aus „echt größer“ für alle Glieder folgt im Grenzwert nur „größer oder gleich“.

:::achtung[Echte Ungleichung im Grenzwert behalten]
Falsch: „Alle Glieder von $a_n = 2 - \frac{1}{n^3}$ sind kleiner als $2$. Also ist $\lim a_n < 2$.“

Richtig: $\lim a_n = 2$, denn $\frac{1}{n^3}$ ist eine Nullfolge. Die Glieder kommen der $2$ beliebig nahe, ohne sie zu
erreichen. Aus $a_n < 2$ für alle $n$ folgt nur $\lim a_n \le 2$.
:::

```aufgabe
id: gf-aussagen
titel: Wahr oder falsch?
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: |
  Welche Aussagen sind **wahr**?
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - 'Jede konvergente Folge ist beschränkt.'
      - 'Jede beschränkte Folge ist konvergent.'
      - 'Eine unbeschränkte Folge ist divergent.'
      - 'Eine Folge kann zwei verschiedene Grenzwerte haben.'
      - 'Aus $a_n > 0$ für alle $n$ und $a_n \to a$ folgt $a > 0$.'
      - 'Aus $a_n > 0$ für alle $n$ und $a_n \to a$ folgt $a \ge 0$.'
    richtig: [0, 2, 5]
    fehler:
      - wert: [0, 1, 2, 5]
        meldung: |
          Aussage 2 ist die Umkehrung des Satzes. Sie ist falsch: $(-1)^n$ ist beschränkt, aber divergent.
      - wert: [0, 2, 4, 5]
        meldung: |
          Aussage 5 ist falsch: $\frac1n > 0$ für alle $n$, aber der Grenzwert ist $0$. Echte Ungleichungen werden im Grenzwert zu $\ge$.
      - wert: [0, 5]
        meldung: |
          Aussage 3 ist die Kontraposition von Aussage 1. Wenn Aussage 1 wahr ist, ist auch ihre Kontraposition wahr.
hinweise:
  - 'Denk an die Gegenbeispiele $(-1)^n$ und $\frac1n$.'
  - 'Eine Kontraposition („wenn nicht B, dann nicht A“) ist genau dann wahr, wenn die ursprüngliche Aussage wahr ist.'
loesung: |
  Ansatz: Jede Aussage mit einem Satz dieses Abschnitts oder einem Gegenbeispiel prüfen.
  ---
  1 wahr (Satz). 2 falsch: $(-1)^n$. 3 wahr: Kontraposition von 1.
  ---
  4 falsch: Der Grenzwert ist eindeutig. 5 falsch: $\frac1n > 0$, aber der Grenzwert ist $0$. 6 wahr: Aus $>$ wird im Grenzwert $\ge$.
  ---
  Ergebnis: Wahr sind die Aussagen 1, 3 und 6.
```

```aufgabe
id: gf-eig-ungleichung
titel: Echt kleiner, aber der Grenzwert?
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: |
  Ein Mitschüler sagt: „Bei $a_n = 6 - \frac{2}{n^2}$ sind alle Glieder kleiner als $6$. Also ist der Grenzwert kleiner als $6$.“

  a) Berechne den Grenzwert.

  b) Was folgt aus $a_n < 6$ für alle $n$ wirklich über den Grenzwert $a$?
teile:
  - typ: zahl
    label: 'a) Grenzwert'
    loesung: "6"
    fehler:
      - wert: "4"
        meldung: |
          $4 = 6 - 2$ ist das erste Glied $a_1$. Gefragt ist, wohin die Glieder für große $n$ streben. $\frac{2}{n^2}$ wird beliebig klein.
  - typ: auswahl
    label: 'b)'
    optionen:
      - '$a \le 6$'
      - '$a < 6$'
      - 'gar nichts'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Das ist genau der Fehler des Mitschülers. Aus a) weißt du, dass $a = 6$ ist. Echte Ungleichungen bleiben im Grenzwert nicht erhalten.
      - wert: 2
        meldung: |
          Der Satz über Ungleichungen sagt sehr wohl etwas: Aus $a_n \le 6$ ab einer Stelle folgt $a \le 6$.
hinweise:
  - 'a) $\frac{2}{n^2}$ ist eine Nullfolge.'
  - 'b) Wende den Satz „Ungleichungen bleiben im Grenzwert erhalten“ mit $b_n = 6$ an. Welches Zeichen liefert er?'
loesung: |
  Ansatz: Den Grenzwert mit der Standard-Nullfolge bestimmen und dann mit dem Satz über Ungleichungen vergleichen.
  ---
  a) $\frac{2}{n^2} \to 0$, also $a_n \to 6 - 0 = 6$.
  ---
  b) Aus $a_n < 6$ folgt erst recht $a_n \le 6$. Der Satz liefert $a \le 6$. Mehr folgt nicht, und tatsächlich ist $a = 6$.
  ---
  Antwort: Der Mitschüler irrt. Die Glieder bleiben unter $6$, kommen der $6$ aber beliebig nahe. Kontrolle: $a_{100} = 5{,}9998$.
```

```aufgabe
id: gf-beschraenkt-beweis
titel: Konvergent impliziert beschränkt, mit ε = 2
niveau: 3
lernziel: 3
kompetenz: begruenden
angabe: |
  Die Folge $a_n = 5 - \dfrac{12}{n}$ konvergiert gegen $5$.

  a) Bestimme das kleinste $N$ mit $|a_n - 5| < 2$ für alle $n \ge N$.

  b) Bestimme damit $M = \max\big(|a_1|, \dots, |a_{N-1}|,\ 2 + |a|\big)$.

  c) Führe den allgemeinen Beweis „Jede konvergente Folge ist beschränkt“ mit $\varepsilon = 2$ statt $\varepsilon = 1$. Erkläre am Ende, warum die Umkehrung falsch ist.
teile:
  - typ: zahl
    label: 'a) $N$'
    loesung: "7"
    fehler:
      - wert: "6"
        meldung: |
          Für $n = 6$ ist $\frac{12}{6} = 2$, also nicht kleiner als $2$.
  - typ: zahl
    label: 'b) $M$'
    loesung: "7"
    fehler:
      - wert: "3"
        meldung: |
          $3 = a_6$ ist das größte der ersten Glieder. In das Maximum gehören aber die **Beträge** $|a_1|, \dots, |a_6|$, und $a_1 = -7$ hat den Betrag $7$. Außerdem gehört auch $2 + |a| = 7$ für die Glieder ab $N$ dazu.
  - typ: text
    label: 'c) Beweis'
    muster: |
      Sei $a_n \to a$. Zu $\varepsilon = 2$ gibt es ein $N$ mit $|a_n - a| < 2$ für alle $n \ge N$. Für diese $n$ gilt nach der
      Dreiecksungleichung $|a_n| = |(a_n - a) + a| \le |a_n - a| + |a| < 2 + |a|$. Vor $N$ liegen nur endlich viele Glieder
      $a_1, \dots, a_{N-1}$, ihre Beträge haben ein Maximum. Mit $M = \max(|a_1|, \dots, |a_{N-1}|, 2 + |a|)$ gilt $|a_n| \le M$
      für alle $n$. Die Umkehrung ist falsch: $(-1)^n$ ist durch $1$ beschränkt, hat aber keinen Grenzwert.
hinweise:
  - 'a) Löse $\frac{12}{n} < 2$. b) Berechne $a_1$ bis $a_6$ und achte auf Beträge.'
  - 'c) Gehe vor wie im Beweis des Satzes: Schwanz über die Dreiecksungleichung, Anfang über das Maximum endlich vieler Zahlen.'
loesung: |
  Ansatz: Wir führen den Beweis zuerst mit konkreten Zahlen und dann allgemein. Statt $\varepsilon = 1$ nehmen wir $\varepsilon = 2$. Das ist erlaubt, weil die Definition für jedes $\varepsilon > 0$ gilt.
  ---
  a) $|a_n - 5| = \frac{12}{n} < 2 \iff n > 6$, also $N = 7$. Für $n \ge 7$ ist $|a_n| < 2 + 5 = 7$.
  ---
  b) Die ersten Glieder sind $-7;\ -1;\ 1;\ 2;\ 2{,}6;\ 3$. Ihre Beträge sind höchstens $7$. Also $M = \max(7;\ 7) = 7$.
  ---
  c) Allgemein: Zu $\varepsilon = 2$ gibt es ein $N$ mit $|a_n - a| < 2$ für $n \ge N$. Dreiecksungleichung: $|a_n| \le |a_n - a| + |a| < 2 + |a|$.
  ---
  Die endlich vielen Glieder vor $N$ haben ein betragsmäßiges Maximum. $M = \max(|a_1|, \dots, |a_{N-1}|, 2 + |a|)$ ist dann eine Schranke für alle $n$.
  ---
  Die Umkehrung ist falsch: $(-1)^n$ ist beschränkt, aber divergent. Kontrolle zu b): Die Folge wächst von $-7$ gegen $5$, also gilt $|a_n| \le 7$ ✓.
```

## Grenzwertsätze und Einschließungssatz

```aufgabe
id: gf-gws-vorwissen
titel: Bekannte Nullfolgen
niveau: 1
art: check
angabe: |
  Welchen Grenzwert hat die Folge $\dfrac{7}{n^2}$?
  (Vorwissen aus [11.5 Nullfolgen und das Rechnen mit ihnen](/lernen/mathe3/grenzwerte-folgen/nullfolgen-und-das-rechnen-mit-ihnen): dort stehen die Standard-Nullfolgen.)
teile:
  - typ: zahl
    label: 'Grenzwert'
    loesung: "0"
    fehler:
      - wert: "7"
        meldung: |
          Der Zähler bleibt $7$, aber der Nenner $n^2$ wächst über jede Grenze. Ein fester Zähler durch einen immer größeren Nenner wird beliebig klein.
hinweise:
  - '$\frac{1}{n^2}$ ist eine Standard-Nullfolge. Was passiert, wenn man sie mit $7$ multipliziert?'
loesung: |
  $\frac{7}{n^2} = 7 \cdot \frac{1}{n^2}$, und $\frac{1}{n^2}$ ist eine Nullfolge.
  ---
  Eine Konstante mal eine Nullfolge ist wieder eine Nullfolge. Der Grenzwert ist $0$.
```

**Worum geht es in einem Satz?** Wir wollen Grenzwerte **ausrechnen**, ohne jedes Mal ein $\varepsilon$ und ein
$N$ suchen zu müssen. Die Grenzwertsätze erlauben genau das: Man zerlegt eine Folge in einfache Bausteine,
deren Grenzwerte man kennt, und setzt die Ergebnisse wieder zusammen.

Ein Vergleich aus dem Alltag: Der Zug A braucht $2$ Stunden, der Anschlusszug B weitere $3$ Stunden. Die
Gesamtzeit rechnest du einfach als $2 + 3$. Du musst die Fahrt nicht noch
einmal Minute für Minute nachverfolgen. Genauso darf man bei Folgen „Grenzwert der Summe = Summe der
Grenzwerte“ rechnen. Allerdings nur, wenn beide Einzelgrenzwerte **wirklich existieren**.

### Die Grenzwertsätze

:::satz[Grenzwertsätze]
Es seien $(a_n)$ und $(b_n)$ zwei konvergente Folgen mit $\lim\limits_{n\to\infty} a_n = a$ und $\lim\limits_{n\to\infty} b_n = b$.
Dabei sind $a$ und $b$ reelle Zahlen. Dann gilt:

1. **Summe und Differenz:** $a_n + b_n \to a + b$ und $a_n - b_n \to a - b$.
2. **Konstanter Faktor:** $c \cdot a_n \to c \cdot a$ für jede feste Zahl $c$.
3. **Produkt:** $a_n \cdot b_n \to a \cdot b$.
4. **Quotient:** $\dfrac{a_n}{b_n} \to \dfrac{a}{b}$, **falls $b \neq 0$** ist.
5. **Potenz und Betrag:** $a_n^k \to a^k$ für jede natürliche Zahl $k$, und $|a_n| \to |a|$.
:::

Dabei ist $c$ eine feste Zahl, die nicht von $n$ abhängt, und $k$ ein fester Exponent wie $2$ oder $3$. Den
Pfeil $\to$ liest man „konvergiert gegen“. In Worten: Man darf den Grenzwert mit den Grundrechnungsarten
**vertauschen**. Erst rechnen und dann den Grenzwert bilden liefert dasselbe wie erst die Grenzwerte bilden
und dann rechnen.

Warum steht beim Quotienten die Bedingung $b \neq 0$? Durch $0$ kann man nicht dividieren. Ist $b \neq 0$, dann
liegen ab einer Stelle auch alle $b_n$ in der Nähe von $b$ und sind damit selbst ungleich $0$. Der Bruch
$\frac{a_n}{b_n}$ ist also ab dieser Stelle definiert.

:::beispiel[Grenzwertsätze Schritt für Schritt]
**a)** Gesucht ist $\lim\limits_{n\to\infty}\left(2 + \dfrac3n\right)\left(4 - \dfrac{1}{n^2}\right)$.

- Bausteine: $\frac3n \to 0$ und $\frac{1}{n^2} \to 0$. Beides sind Nullfolgen (Konstante mal Standard-Nullfolge).
- Summenregel für den ersten Faktor: $2 + \frac3n \to 2 + 0 = 2$.
- Differenzregel für den zweiten Faktor: $4 - \frac{1}{n^2} \to 4 - 0 = 4$.
- Produktregel, weil beide Faktoren konvergieren: Grenzwert $2 \cdot 4 = 8$.

**b)** Gesucht ist $\lim\limits_{n\to\infty}\dfrac{6 - \frac2n}{3 + \frac5n}$.

- Zähler: $6 - \frac2n \to 6$. Nenner: $3 + \frac5n \to 3$.
- Der Nennergrenzwert ist $3$ und damit ungleich $0$. Also darf die Quotientenregel angewendet werden.
- Grenzwert: $\frac63 = 2$.

**Probe mit einer großen Zahl:** Für $n = 1000$ liefert a) $2{,}003 \cdot 3{,}999999 \approx 8{,}012$ und b)
$\frac{5{,}998}{3{,}005} \approx 1{,}996$. Beide Werte liegen nahe bei $8$ und $2$.
:::

```aufgabe
id: gf-grenzwertsaetze
titel: Grenzwertsätze anwenden
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Berechne die Grenzwerte mit den Grenzwertsätzen.
  $$\text{a) } \lim_{n\to\infty}\left(5 + \frac4n\right)\left(2 - \frac{3}{n^2}\right) \qquad \text{b) } \lim_{n\to\infty}\frac{8 - \frac1n}{4 + \frac2n} \qquad \text{c) } \lim_{n\to\infty}\left(\frac{3}{n} - 2\right)^3$$
teile:
  - typ: zahl
    label: 'a)'
    loesung: "5*2"
    anzeige: '10'
    fehler:
      - wert: "7"
        meldung: |
          Du hast die Grenzwerte der Faktoren **addiert**. Zwischen den Klammern steht aber ein Malzeichen. Nach der Produktregel wird multipliziert.
  - typ: zahl
    label: 'b)'
    loesung: "8/4"
    anzeige: '2'
    fehler:
      - wert: "4"
        meldung: |
          Zähler und Nenner werden nicht voneinander abgezogen. Nach der Quotientenregel wird der Zählergrenzwert durch den Nennergrenzwert **dividiert**.
  - typ: zahl
    label: 'c)'
    loesung: "(-2)^3"
    anzeige: '-8'
    fehler:
      - wert: "8"
        meldung: |
          Die Basis strebt gegen $-2$, nicht gegen $2$. Eine negative Zahl hoch $3$ bleibt negativ.
      - wert: "-6"
        meldung: |
          Hoch $3$ heißt dreimal mit sich selbst multiplizieren, nicht mal $3$: $(-2)\cdot(-2)\cdot(-2)$.
hinweise:
  - 'Bestimme zuerst die Grenzwerte der Bausteine $\frac4n$, $\frac{3}{n^2}$, $\frac1n$, $\frac2n$ und $\frac3n$.'
loesung: |
  Ansatz: Alle Bausteine $\frac4n$, $\frac{3}{n^2}$, $\frac1n$, $\frac2n$, $\frac3n$ sind Nullfolgen. Deshalb konvergieren alle Klammern, und die Grenzwertsätze dürfen angewendet werden.
  ---
  a) Die Faktoren streben gegen $5$ und $2$. Produktregel: $5 \cdot 2 = 10$.
  ---
  b) Zähler gegen $8$, Nenner gegen $4 \neq 0$. Quotientenregel: $\frac84 = 2$.
  ---
  c) Die Basis strebt gegen $0 - 2 = -2$. Potenzregel: $(-2)^3 = -8$. Probe für a) mit $n = 100$: $5{,}04 \cdot 1{,}9997 \approx 10{,}08$, also nahe $10$ ✓.
```

### Warum die Summenregel stimmt

Dieser Beweis ist ein Muster, das in der Analysis immer wieder vorkommt. Lies ihn langsam.

**Worum geht es?** Wir wissen: $a_n$ liegt irgendwann nahe bei $a$, und $b_n$ liegt irgendwann nahe bei $b$. Wir
wollen zeigen: Dann liegt $a_n + b_n$ irgendwann nahe bei $a + b$.

**Bild:** Zwei Messfehler addieren sich. Wenn jede von zwei Längen höchstens $0{,}05$ mm vom Sollmaß abweicht,
weicht ihre Summe höchstens $0{,}1$ mm ab. Will man für die Summe die Toleranz $\varepsilon$ einhalten, verlangt
man also von **jedem** Teil die halbe Toleranz $\frac{\varepsilon}{2}$.

Dafür brauchen wir die **Dreiecksungleichung** $|x + y| \le |x| + |y|$. Sie sagt: Der Betrag einer Summe ist höchstens
die Summe der Beträge. Ein Zahlenbeispiel: $|3 + (-5)| = 2$, aber $|3| + |-5| = 8$. Haben beide Zahlen dasselbe
Vorzeichen, gilt Gleichheit, etwa $|2 + 4| = 6 = |2| + |4|$.

:::beweis[Beweis der Summenregel]
**Schritt 1, die Toleranz vorgeben.** Sei $\varepsilon > 0$ beliebig. Wir suchen ein $N$, ab dem
$|(a_n + b_n) - (a + b)| < \varepsilon$ gilt.

**Schritt 2, die halbe Toleranz für jeden Teil.** Die Definition des Grenzwerts gilt für **jede** positive Toleranz,
also auch für $\frac{\varepsilon}{2}$. Weil $a_n \to a$, gibt es ein $N_1$ mit $|a_n - a| < \frac{\varepsilon}{2}$ für alle
$n \ge N_1$. Weil $b_n \to b$, gibt es ein $N_2$ mit $|b_n - b| < \frac{\varepsilon}{2}$ für alle $n \ge N_2$.

**Schritt 3, beide Bedingungen zugleich.** Wir nehmen $N$ als die größere der beiden Zahlen $N_1$ und $N_2$. Ab $N$
gelten beide Ungleichungen gleichzeitig.

**Schritt 4, zusammensetzen.** Für alle $n \ge N$ ordnen wir zuerst um und verwenden dann die Dreiecksungleichung:
$$|(a_n + b_n) - (a + b)| = |(a_n - a) + (b_n - b)| \le |a_n - a| + |b_n - b| < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon.$$
:::

**Was haben wir gezeigt?** Zu jeder Toleranz $\varepsilon$ gibt es eine Stelle $N$, ab der die Summe weniger als
$\varepsilon$ von $a + b$ entfernt ist. Das ist genau die Definition von $a_n + b_n \to a + b$.

**Typisches Missverständnis:** „Man darf doch nicht einfach $\frac{\varepsilon}{2}$ nehmen, gegeben war $\varepsilon$.“
Doch, man darf. Die Konvergenz von $(a_n)$ ist eine Aussage über **alle** positiven Toleranzen. Wir wählen aus
diesem unendlichen Vorrat die Toleranz aus, die wir gerade brauchen.

Für das Produkt verwendet man einen ähnlichen Trick. Man schreibt $a_n b_n - ab = a_n(b_n - b) + b\,(a_n - a)$. Der
erste Summand ist „beschränkte Folge mal Nullfolge“, denn eine konvergente Folge ist beschränkt. Der zweite ist
„Konstante mal Nullfolge“. Beide sind Nullfolgen, also auch ihre Summe.

```aufgabe
id: gf-gws-gefuehrt
titel: Die halbe Toleranz an einem Zahlenbeispiel
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Es ist $a_n = 4 + \frac1n \to 4$ und $b_n = 3 - \frac{1}{n^2} \to 3$, also $a_n + b_n \to 7$.
  Spiele den Beweis der Summenregel für $\varepsilon = 0{,}1$ durch. Welches $N$ liefert der Beweis?
teile:
  - typ: zahl
    label: '$N$ aus dem Beweis'
    loesung: "21"
    fehler:
      - wert: "11"
        meldung: |
          Du hast für $a_n$ die volle Toleranz $0{,}1$ verwendet. Der Beweis verlangt von jedem Teil nur die **halbe** Toleranz $0{,}05$.
      - wert: "5"
        meldung: |
          $N_2 = 5$ ist richtig, aber ab $N$ müssen **beide** Bedingungen gelten. Nimm die größere der beiden Zahlen.
hinweise:
  - 'Bestimme $N_1$ aus $\frac1n < 0{,}05$ und $N_2$ aus $\frac{1}{n^2} < 0{,}05$.'
  - 'Der Beweis nimmt $N$ als die größere der beiden Zahlen $N_1$ und $N_2$.'
gefuehrt:
  - text: Welche Toleranz verlangt der Beweis von jedem einzelnen Teil?
    teil:
      typ: zahl
      loesung: "0.05"
      fehler:
        - wert: "0.1"
          meldung: 'Das ist die Toleranz für die Summe. Jeder Teil bekommt nur die Hälfte davon.'
    erklaerung: '$\frac{\varepsilon}{2} = \frac{0{,}1}{2} = 0{,}05$. Zwei Abweichungen von je weniger als $0{,}05$ ergeben zusammen weniger als $0{,}1$.'
  - text: Bestimme das kleinste $N_1$ mit $|a_n - 4| = \frac1n < 0{,}05$ für alle $n \ge N_1$.
    teil:
      typ: zahl
      loesung: "21"
      fehler:
        - wert: "20"
          meldung: 'Bei $n = 20$ ist $\frac{1}{20} = 0{,}05$, genau der Rand. Gesucht ist die kleinste ganze Zahl über $20$.'
    erklaerung: '$\frac1n < 0{,}05 \iff n > 20$, also $N_1 = 21$.'
  - text: Bestimme das kleinste $N_2$ mit $|b_n - 3| = \frac{1}{n^2} < 0{,}05$ für alle $n \ge N_2$.
    teil:
      typ: zahl
      loesung: "5"
      fehler:
        - wert: "21"
          meldung: 'Du hast mit $\frac1n$ gerechnet. Hier steht $\frac{1}{n^2}$: Aus $n^2 > 20$ folgt $n > \sqrt{20} \approx 4{,}47$.'
    erklaerung: '$\frac{1}{n^2} < 0{,}05 \iff n^2 > 20 \iff n > 4{,}47$, also $N_2 = 5$.'
  - text: Ab welchem $N$ gelten beide Bedingungen zugleich?
    teil:
      typ: zahl
      loesung: "21"
      fehler:
        - wert: "5"
          meldung: 'Ab $n = 5$ ist nur die Bedingung für $b_n$ erfüllt. Für $a_n$ braucht man $n \ge 21$.'
    erklaerung: 'Das größere der beiden ist $N = 21$. Ab dort ist $|a_n + b_n - 7| \le \frac1n + \frac{1}{n^2} < 0{,}05 + 0{,}05 = 0{,}1$.'
loesung: |
  Ansatz: Der Beweis teilt die Toleranz $\varepsilon = 0{,}1$ in zwei Hälften. Jede Folge muss die halbe Toleranz $0{,}05$ einhalten.
  ---
  Für $a_n$: $\frac1n < 0{,}05 \iff n > 20$, also $N_1 = 21$. Für $b_n$: $\frac{1}{n^2} < 0{,}05 \iff n^2 > 20$, also $N_2 = 5$.
  ---
  Ab $N = 21$ gilt beides. Dann ist $|a_n + b_n - 7| = \left|\frac1n - \frac{1}{n^2}\right| \le \frac1n + \frac{1}{n^2} < 0{,}1$.
  ---
  Probe mit $n = 21$: $\frac{1}{21} - \frac{1}{441} \approx 0{,}0454 < 0{,}1$ ✓. Das $N$ aus dem Beweis muss nicht das kleinste sein. Es muss nur funktionieren.
```

### Wann man die Grenzwertsätze nicht anwenden darf

Die Grenzwertsätze haben eine Voraussetzung, die man leicht übersieht: **Jeder Baustein muss gegen eine reelle
Zahl konvergieren.** Das Zeichen $\infty$ ist keine Zahl. Strebt ein Baustein gegen $\infty$, darf man nicht mehr
blind einsetzen.

Bei manchen Kombinationen ist das Ergebnis völlig offen. Man nennt sie **unbestimmte Ausdrücke**:
$$\infty - \infty, \qquad \frac{\infty}{\infty}, \qquad \frac{0}{0}, \qquad 0 \cdot \infty, \qquad 1^\infty.$$
„Unbestimmt“ heißt: Je nach Folge kann jeder Grenzwert herauskommen, oder gar keiner. Drei Beispiele für die
Form „$\infty - \infty$“:

- $(n + 5) - n = 5$ strebt gegen $5$.
- $n^2 - n = n(n - 1)$ strebt gegen $\infty$.
- $n - n^2$ strebt gegen $-\infty$.

Alle drei sehen beim blinden Einsetzen gleich aus. Die Ergebnisse sind aber ganz verschieden. Solche Folgen muss
man zuerst **umformen**, etwa kürzen oder ausklammern. Erst danach dürfen die Grenzwertsätze angewendet werden.

:::achtung[„Unendlich minus unendlich ist null“]
Falsch: „$\lim\limits_{n\to\infty}(n^2 - 3n) = \lim n^2 - \lim 3n = \infty - \infty = 0$.“

Richtig: $\lim n^2$ und $\lim 3n$ existieren nicht als reelle Zahlen. Die Differenzregel darf hier nicht angewendet
werden. Wir klammern aus: $n^2 - 3n = n(n - 3)$. Für $n \ge 4$ sind beide Faktoren mindestens $1$, und der erste
wächst über jede Grenze. Also strebt die Folge gegen $\infty$. Probe: Für $n = 100$ ist $n^2 - 3n = 9700$.
:::

:::achtung[Null mal unendlich]
Falsch: „$\lim\limits_{n\to\infty}\left(\frac1n \cdot (2n + 7)\right) = 0 \cdot \infty = 0$.“

Richtig: Der zweite Faktor konvergiert nicht. Die Produktregel ist nicht anwendbar. Ausmultiplizieren liefert
$\frac{2n + 7}{n} = 2 + \frac7n$, und das strebt gegen $2$. Probe: Für $n = 1000$ ist der Wert $2{,}007$, also sicher nicht nahe $0$.
:::

Für Folgen, die gegen $\infty$ streben, gibt es trotzdem einige sichere Regeln. Merke sie dir in dieser Kurzform,
aber denk daran, dass es Aussagen über Folgen sind:

- „$c + \infty = \infty$“: Strebt $a_n$ gegen $\infty$ und konvergiert $b_n$, dann strebt $a_n + b_n$ gegen $\infty$.
- „$c \cdot \infty = \infty$ für $c > 0$“: Strebt $a_n$ gegen $\infty$ und $b_n$ gegen eine positive Zahl, dann strebt $a_n b_n$ gegen $\infty$.
- „$\frac{c}{\infty} = 0$“: Strebt $a_n$ gegen $\infty$, dann ist $\frac{c}{a_n}$ eine Nullfolge. Beispiel: $\frac{5}{n^2 + 1} \to 0$.

```aufgabe
id: gf-gws-unendlich
titel: Eine Zahl durch etwas sehr Großes
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Die Folge $a_n = n^3 + n$ strebt gegen $\infty$. Welchen Grenzwert hat $\dfrac{12}{a_n} = \dfrac{12}{n^3 + n}$?
teile:
  - typ: zahl
    label: 'Grenzwert'
    loesung: "0"
    fehler:
      - wert: "12"
        meldung: |
          Der Zähler bleibt $12$, aber der Nenner wächst über jede Grenze. Der Bruch wird deshalb beliebig klein.
hinweise:
  - 'Regel „$\frac{c}{\infty} = 0$“: Strebt der Nenner gegen $\infty$, wird der Bruch beliebig klein.'
loesung: |
  Ansatz: Der Nenner $n^3 + n$ strebt gegen $\infty$, der Zähler ist fest. Nach der Regel „$\frac{c}{\infty} = 0$“ ist der Bruch eine Nullfolge.
  ---
  Ergebnis: Grenzwert $0$. Probe: Für $n = 10$ ist $\frac{12}{1010} \approx 0{,}012$, für $n = 100$ schon $\frac{12}{1\,000\,100} \approx 0{,}000012$ ✓.
```

```aufgabe
id: gf-gws-quotient-bedingung
titel: Darf man die Quotientenregel verwenden?
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Bei welcher Folge darf man den Grenzwert **direkt** mit der Quotientenregel berechnen, also Zählergrenzwert durch Nennergrenzwert?
teile:
  - typ: auswahl
    optionen:
      - '$\dfrac{3 + \frac1n}{2 - \frac1n}$'
      - '$\dfrac{3 + \frac1n}{\frac1n}$'
      - '$\dfrac{n + 1}{n + 2}$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Der Nenner $\frac1n$ strebt gegen $0$. Die Quotientenregel verlangt einen Nennergrenzwert ungleich $0$.
      - wert: 2
        meldung: |
          Zähler und Nenner streben beide gegen $\infty$. Das ist die unbestimmte Form „$\frac{\infty}{\infty}$“. Man muss zuerst durch $n$ kürzen.
hinweise:
  - 'Bestimme für jede Folge den Grenzwert des Zählers und des Nenners. Beide müssen reelle Zahlen sein, der des Nenners ungleich $0$.'
loesung: |
  Ansatz: Die Quotientenregel verlangt, dass Zähler und Nenner gegen reelle Zahlen konvergieren und der Nennergrenzwert nicht $0$ ist.
  ---
  Option 1: Zähler gegen $3$, Nenner gegen $2$. Das passt, der Grenzwert ist $\frac32$.
  ---
  Option 2 hat den Nennergrenzwert $0$. Option 3 ist vom Typ „$\frac{\infty}{\infty}$“. Nach Kürzen durch $n$ wird sie zu $\frac{1 + 1/n}{1 + 2/n}$, und dann geht es doch.
```

```aufgabe
id: gf-unbestimmt
titel: Unbestimmte Ausdrücke erkennen
niveau: 2
lernziel: 4
kompetenz: begruenden
angabe: |
  Welche Rechnungen sind **korrekt begründet**?
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$\lim (n^3 - n^2) = \lim n^3 - \lim n^2 = \infty - \infty = 0$'
      - '$\lim \left(\sqrt{n + 4} - \sqrt{n}\right) = 0$, weil $\sqrt{n + 4} - \sqrt n = \frac{4}{\sqrt{n + 4} + \sqrt n}$ ist'
      - '$\lim \frac{2n + 1}{n} = \frac{\lim (2n + 1)}{\lim n} = \frac{\infty}{\infty} = 2$'
      - '$\lim \frac{2n + 1}{n} = \lim\left(2 + \frac1n\right) = 2 + 0 = 2$'
      - '$\lim \left(1 + \frac1n\right)^n = 1^\infty = 1$'
    richtig: [1, 3]
    fehler:
      - wert: [1, 2, 3]
        meldung: |
          Option 3 hat zwar das richtige Ergebnis, aber die Begründung ist falsch. „$\frac{\infty}{\infty}$“ ist unbestimmt und kann jede Zahl ergeben, zum Beispiel ist auch $\frac{5n}{n}$ von dieser Form und strebt gegen $5$.
      - wert: [1, 3, 4]
        meldung: |
          „$1^\infty$“ ist ein unbestimmter Ausdruck. Die Basis ist nie genau $1$, und der Exponent wächst. Der Grenzwert von $\left(1 + \frac1n\right)^n$ ist $e \approx 2{,}718$.
      - wert: [0, 1, 3]
        meldung: |
          „$\infty - \infty$“ ist unbestimmt. Hier ist $n^3 - n^2 = n^2(n - 1)$, und das wächst über jede Grenze.
hinweise:
  - 'Grenzwertsätze dürfen nur angewendet werden, wenn alle Einzelgrenzwerte reelle Zahlen sind.'
  - 'Prüfe bei jeder Option: Wurde vorher so umgeformt, dass alle Bausteine konvergieren?'
loesung: |
  Ansatz: Eine Rechnung ist nur dann korrekt begründet, wenn die Grenzwertsätze erst nach einer Umformung auf konvergente Bausteine angewendet werden.
  ---
  Option 1 falsch: $n^3 - n^2 = n^2(n - 1)$ wächst über jede Grenze. Option 2 korrekt: Nach dem Erweitern steht $4$ durch einen Nenner, der gegen $\infty$ strebt.
  ---
  Option 3: Ergebnis zufällig richtig, Begründung falsch. Option 4 ist die korrekte Begründung desselben Grenzwerts.
  ---
  Option 5 falsch: „$1^\infty$“ ist unbestimmt, der Grenzwert ist $e$. Richtig begründet sind also die Optionen 2 und 4.
```

```aufgabe
id: gf-gws-fehler
titel: Fehler in einer Grenzwertrechnung finden
niveau: 2
lernziel: 4
kompetenz: begruenden
angabe: |
  Eine Mitschülerin rechnet:
  „$\lim\limits_{n\to\infty}\left((n + 3)\cdot\frac{1}{n}\right) = \lim (n + 3)\cdot\lim\frac1n = \infty \cdot 0 = 0$.“

  a) Welchen Grenzwert hat die Folge wirklich?

  b) Was ist der Fehler?
teile:
  - typ: zahl
    label: 'a) Grenzwert'
    loesung: "1"
    fehler:
      - wert: "0"
        meldung: |
          Das ist das Ergebnis der Mitschülerin. Multipliziere zuerst aus: $(n + 3)\cdot\frac1n = 1 + \frac3n$. Wogegen strebt das?
      - wert: "3"
        meldung: |
          $(n + 3)\cdot\frac1n = \frac{n}{n} + \frac{3}{n}$. Der zweite Summand ist eine Nullfolge, der erste ist konstant. Welcher Wert bleibt übrig?
  - typ: auswahl
    label: 'b)'
    optionen:
      - 'Die Produktregel wurde angewendet, obwohl $(n + 3)$ nicht konvergiert.'
      - '$\frac1n$ ist keine Nullfolge.'
      - 'Es hätte $\infty \cdot 0 = \infty$ heißen müssen.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          $\frac1n$ ist die wichtigste Nullfolge überhaupt. Der Fehler liegt beim anderen Faktor.
      - wert: 2
        meldung: |
          „$\infty \cdot 0$“ hat überhaupt keinen festen Wert. Es ist ein unbestimmter Ausdruck. Weder $0$ noch $\infty$ ist automatisch richtig.
hinweise:
  - 'Die Produktregel verlangt, dass **beide** Faktoren gegen reelle Zahlen konvergieren.'
  - 'Multipliziere $(n + 3)\cdot\frac1n$ zuerst aus und wende erst danach die Grenzwertsätze an.'
loesung: |
  Ansatz: Wir prüfen die Voraussetzung der Produktregel. Der Faktor $n + 3$ wächst über jede Grenze, er konvergiert nicht.
  ---
  b) Also darf die Produktregel nicht angewendet werden. „$\infty \cdot 0$“ ist ein unbestimmter Ausdruck.
  ---
  a) Richtig ist: erst umformen. $(n + 3)\cdot\frac1n = 1 + \frac3n \to 1 + 0 = 1$.
  ---
  Probe: Für $n = 1000$ ist $1003 \cdot 0{,}001 = 1{,}003$, also nahe $1$ und nicht nahe $0$ ✓.
```

### Der Einschließungssatz

**Worum geht es in einem Satz?** Wenn eine Folge zwischen zwei anderen Folgen eingeklemmt ist und diese beiden
denselben Grenzwert haben, dann hat auch die eingeklemmte Folge diesen Grenzwert.

**Bild:** Zwei Polizisten führen einen Verdächtigen in die Mitte genommen zur Wache. Wenn beide Polizisten an der
Wache ankommen, kommt auch der Verdächtige dort an. Deshalb heißt der Satz auch **Sandwich-Satz**.

:::satz[Einschließungssatz]
Es gelte $a_n \le b_n \le c_n$ für alle $n$ ab einer Stelle. Außerdem sollen $(a_n)$ und $(c_n)$ **denselben**
Grenzwert $g$ haben. Dann konvergiert auch $(b_n)$, und zwar gegen $g$.
:::

Dabei ist $(b_n)$ die Folge, die uns interessiert. $(a_n)$ ist die untere Schranke und $(c_n)$ die obere. Der
Satz ist nützlich, wenn $b_n$ einen Störterm wie $\sin n$ enthält, den man nicht direkt behandeln kann.

:::beweis
Sei $\varepsilon > 0$. Weil $a_n \to g$, gilt ab einer Stelle $g - \varepsilon < a_n$. Weil $c_n \to g$, gilt ab einer
Stelle $c_n < g + \varepsilon$. Ab der größeren der beiden Stellen gilt beides, und dazu die Einschließung. Also
$$g - \varepsilon < a_n \le b_n \le c_n < g + \varepsilon.$$
Das heißt $|b_n - g| < \varepsilon$. Weil $\varepsilon$ beliebig war, folgt $b_n \to g$.
:::

**Was haben wir gezeigt?** Sobald beide Schranken im Toleranzband liegen, liegt auch alles dazwischen im Band.

:::beispiel[Ein Störterm mit Sinus]
Gesucht ist $\lim\limits_{n\to\infty}\dfrac{3n + \sin n}{n}$.

**Schritt 1, den Störterm einschränken.** Der Sinus liegt immer zwischen $-1$ und $1$. Also ist
$3n - 1 \le 3n + \sin n \le 3n + 1$.

**Schritt 2, durch $n$ dividieren.** Weil $n > 0$ ist, bleiben die Zeichen erhalten:
$$3 - \frac1n \le \frac{3n + \sin n}{n} \le 3 + \frac1n.$$

**Schritt 3, die Schranken untersuchen.** Beide Schranken streben gegen $3$, denn $\frac1n \to 0$.

**Schritt 4, Ergebnis.** Nach dem Einschließungssatz strebt auch die mittlere Folge gegen $3$. Ein Grenzwertsatz
allein hätte hier nicht geholfen: $\sin n$ selbst hat keinen Grenzwert.
:::

:::beispiel[Ein wechselndes Vorzeichen]
Gesucht ist $\lim\limits_{n\to\infty}\dfrac{(-1)^n}{n^2}$. Die Glieder sind $-1;\ \frac14;\ -\frac19;\ \frac{1}{16};\ \dots$

Weil $(-1)^n$ nur die Werte $-1$ und $1$ annimmt, gilt $-\frac{1}{n^2} \le \frac{(-1)^n}{n^2} \le \frac{1}{n^2}$. Beide Schranken
streben gegen $0$. Also ist $\frac{(-1)^n}{n^2}$ eine Nullfolge. Die Glieder springen zwar hin und her, aber der
Spielraum zwischen den Schranken schrumpft auf null.
:::

```plot
x: [0, 20.5]
y: [2.4, 3.8]
achsen: { x: "n", y: "Wert" }
graphen:
  - { f: "3 + 1/x", farbe: 1, gestrichelt: true, label: "3 + 1/n", von: 1, bis: 20 }
  - { f: "3 - 1/x", farbe: 1, gestrichelt: true, label: "3 − 1/n", von: 1, bis: 20 }
  - { f: "3", farbe: 2, label: "g = 3" }
punkte:
  - { x: 1, y: 3.8415, farbe: 0 }
  - { x: 2, y: 3.4546, farbe: 0 }
  - { x: 3, y: 3.0470, farbe: 0 }
  - { x: 4, y: 2.8108, farbe: 0 }
  - { x: 5, y: 2.8082, farbe: 0 }
  - { x: 6, y: 2.9534, farbe: 0 }
  - { x: 7, y: 3.0939, farbe: 0 }
  - { x: 8, y: 3.1237, farbe: 0 }
  - { x: 9, y: 3.0458, farbe: 0 }
  - { x: 10, y: 2.9456, farbe: 0 }
  - { x: 11, y: 2.9091, farbe: 0 }
  - { x: 12, y: 2.9553, farbe: 0 }
  - { x: 13, y: 3.0323, farbe: 0 }
  - { x: 14, y: 3.0708, farbe: 0 }
  - { x: 15, y: 3.0434, farbe: 0 }
  - { x: 16, y: 2.9820, farbe: 0 }
  - { x: 17, y: 2.9434, farbe: 0 }
  - { x: 18, y: 2.9583, farbe: 0 }
  - { x: 19, y: 3.0079, farbe: 0 }
  - { x: 20, y: 3.0456, farbe: 0 }
beschriftung: Die Folge (3n + sin n)/n (blaue Punkte) liegt zwischen den gestrichelten Schranken 3 − 1/n und 3 + 1/n. Beide Schranken laufen auf die Linie 3 zu und klemmen die Folge immer enger ein.
```

:::achtung[Schranken mit verschiedenen Grenzwerten]
Falsch: „$-1 \le \cos n \le 1$, also liegt $\cos n$ zwischen zwei konvergenten Folgen. Nach dem Einschließungssatz konvergiert $\cos n$.“

Richtig: Die untere Schranke strebt gegen $-1$, die obere gegen $1$. Der Satz verlangt **denselben** Grenzwert für
beide Schranken. Hier sagt er also nichts. Tatsächlich hat $\cos n$ keinen Grenzwert. Erst nach dem Teilen durch
$n$ entsteht eine Einschließung zwischen $-\frac1n$ und $\frac1n$ mit dem gemeinsamen Grenzwert $0$.
:::

```aufgabe
id: gf-einschliessung
titel: Einschließungssatz anwenden
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Berechne mit dem Einschließungssatz:
  $$\text{a) } \lim_{n\to\infty}\frac{5n - \cos n}{n} \qquad\qquad \text{b) } \lim_{n\to\infty}\frac{n + (-1)^n}{2n}$$
teile:
  - typ: zahl
    label: 'a)'
    loesung: "5"
    fehler:
      - wert: "4"
        meldung: |
          $\cos n$ strebt nicht gegen $1$, er hat gar keinen Grenzwert. Schließe $\cos n$ zwischen $-1$ und $1$ ein und dividiere durch $n$. Dann wird der Störterm zur Nullfolge.
  - typ: zahl
    label: 'b)'
    loesung: "1/2"
    anzeige: '\tfrac12'
    fehler:
      - wert: "1"
        meldung: |
          Der Nenner ist $2n$, nicht $n$. Nach dem Teilen durch $2n$ bleibt vom Hauptteil $\frac{n}{2n} = \frac12$.
hinweise:
  - 'a) $-1 \le \cos n \le 1$, also $5n - 1 \le 5n - \cos n \le 5n + 1$. b) $-1 \le (-1)^n \le 1$.'
  - 'Teile die Ungleichungskette durch den positiven Nenner und bestimme die Grenzwerte der beiden Schranken.'
loesung: |
  Ansatz: In beiden Folgen steckt ein beschränkter Störterm. Wir schließen ihn zwischen $-1$ und $1$ ein und teilen durch den positiven Nenner.
  ---
  a) $\frac{5n - 1}{n} \le \frac{5n - \cos n}{n} \le \frac{5n + 1}{n}$, also $5 - \frac1n \le b_n \le 5 + \frac1n$. Beide Schranken streben gegen $5$, also $b_n \to 5$.
  ---
  b) $\frac{n - 1}{2n} \le \frac{n + (-1)^n}{2n} \le \frac{n + 1}{2n}$, also $\frac12 - \frac{1}{2n} \le b_n \le \frac12 + \frac{1}{2n}$. Beide Schranken streben gegen $\frac12$.
  ---
  Probe für b) mit $n = 100$: $\frac{101}{200} = 0{,}505$, nahe bei $\frac12$ ✓.
```

```reflexion
frage: Warum genügt es beim Einschließungssatz nicht, dass die Folge zwischen zwei konvergenten Folgen liegt?
antwort: |
  Liegen die Grenzwerte der beiden Schranken auseinander, bleibt zwischen ihnen ein Spielraum, der nicht schrumpft.
  Die eingeklemmte Folge kann in diesem Spielraum ewig hin und her springen. Ein Beispiel ist $(-1)^n$ zwischen den
  konstanten Folgen $-1$ und $1$. Erst wenn beide Schranken auf **denselben** Punkt zulaufen, wird der Spielraum
  beliebig klein, und die mittlere Folge hat keinen Platz mehr zum Ausweichen.
```

```aufgabe
id: gf-gws-sandwich-beweis
titel: Einschließung begründen und abschätzen
niveau: 3
lernziel: 4
kompetenz: begruenden
angabe: |
  Gegeben ist $b_n = \dfrac{2n + 3\sin n}{n + 1}$.

  a) Schließe $b_n$ zwischen zwei Folgen ein und begründe damit den Grenzwert.

  b) Gib den Grenzwert an.

  c) Zeige $|b_n - 2| \le \dfrac{5}{n + 1}$ und bestimme damit ein $N$, ab dem sicher $|b_n - 2| < 0{,}01$ gilt (das kleinste $N$, das diese Abschätzung liefert).
teile:
  - typ: text
    label: 'a) Begründung'
    muster: |
      Wegen $-1 \le \sin n \le 1$ ist $2n - 3 \le 2n + 3\sin n \le 2n + 3$. Division durch $n + 1 > 0$ ergibt
      $\frac{2n - 3}{n + 1} \le b_n \le \frac{2n + 3}{n + 1}$. Nach Kürzen durch $n$ streben beide Schranken gegen $\frac21 = 2$.
      Nach dem Einschließungssatz gilt $b_n \to 2$.
  - typ: zahl
    label: 'b) Grenzwert'
    loesung: "2"
    fehler:
      - wert: "5"
        meldung: |
          Du hast vermutlich $2 + 3$ gerechnet, als ob $3\sin n$ genauso stark wachsen würde wie $2n$. Der Term $3\sin n$ bleibt aber zwischen $-3$ und $3$. Nach dem Teilen durch $n + 1$ wird $\frac{3\sin n}{n+1}$ beliebig klein.
  - typ: zahl
    label: 'c) $N$'
    loesung: "500"
    toleranz: 0.1
    fehler:
      - wert: "499"
        meldung: |
          Aus $\frac{5}{n + 1} < 0{,}01$ folgt $n + 1 > 500$, also $n > 499$. Die kleinste ganze Zahl darüber ist nicht $499$.
      - wert: "300"
        meldung: |
          Prüfe den Zähler der Abschätzung: $|3\sin n - 2| \le 3 + 2 = 5$, nicht $3$.
hinweise:
  - 'a) Ersetze $\sin n$ einmal durch $-1$ und einmal durch $1$. Kürze die Schranken danach durch $n$.'
  - 'c) $b_n - 2 = \frac{2n + 3\sin n - 2(n + 1)}{n + 1} = \frac{3\sin n - 2}{n + 1}$. Schätze den Zähler mit der Dreiecksungleichung nach oben ab.'
loesung: |
  Ansatz: Der Störterm $3\sin n$ liegt zwischen $-3$ und $3$. Wir klemmen $b_n$ zwischen zwei Brüche ohne Sinus ein.
  ---
  a) $\frac{2n - 3}{n + 1} \le b_n \le \frac{2n + 3}{n + 1}$. Nach Kürzen durch $n$: $\frac{2 - 3/n}{1 + 1/n} \to 2$ und $\frac{2 + 3/n}{1 + 1/n} \to 2$. Einschließungssatz: $b_n \to 2$.
  ---
  b) Der Grenzwert ist $2$.
  ---
  c) $b_n - 2 = \frac{3\sin n - 2}{n + 1}$. Dreiecksungleichung: $|3\sin n - 2| \le 3|\sin n| + 2 \le 5$. Also $|b_n - 2| \le \frac{5}{n + 1}$.
  ---
  $\frac{5}{n + 1} < 0{,}01 \iff n + 1 > 500 \iff n > 499$. Die Abschätzung liefert $N = 500$. Das wahre kleinste $N$ kann kleiner sein, weil wir großzügig abgeschätzt haben. Für einen Beweis reicht jedes funktionierende $N$.
```

:::merke[Rezept: Grenzwert einer zusammengesetzten Folge]
1. **Bausteine bestimmen:** Welche Teile sind Konstanten, welche sind Nullfolgen, welche konvergieren gegen eine Zahl?
2. **Voraussetzung prüfen:** Konvergieren alle Bausteine gegen reelle Zahlen, und ist beim Quotienten der Nennergrenzwert ungleich $0$? Dann Grenzwertsätze anwenden.
3. **Unbestimmter Ausdruck?** Bei „$\infty - \infty$“, „$\frac\infty\infty$“, „$0\cdot\infty$“ erst umformen (ausklammern, kürzen, ausmultiplizieren).
4. **Beschränkter Störterm** wie $\sin n$, $\cos n$, $(-1)^n$: zwischen $-1$ und $1$ einschließen, dann Einschließungssatz.
5. **Probe:** eine große Zahl wie $n = 1000$ einsetzen und mit dem Ergebnis vergleichen.
:::

## Rationale Folgen, Wurzeltrick und Standardgrenzwerte

```aufgabe
id: gf-rat-vorwissen
titel: Grad und Leitkoeffizient
niveau: 1
art: check
angabe: |
  Das Polynom $3 - 2n + 5n^2$ ist absichtlich „verkehrt herum“ geschrieben. Wie lautet sein **Leitkoeffizient**, also die Zahl vor der höchsten Potenz von $n$?
  (Vorwissen aus [Kapitel 4, „Potenz- und Polynomfunktionen“](/lernen/mathe3/funktionen/potenz-und-polynomfunktionen).)
teile:
  - typ: zahl
    label: 'Leitkoeffizient'
    loesung: "5"
    fehler:
      - wert: "3"
        meldung: |
          $3$ ist das **erste** Glied, aber nicht das mit der höchsten Potenz. Ordne zuerst nach fallenden Potenzen: $5n^2 - 2n + 3$.
      - wert: "-2"
        meldung: |
          $-2$ steht vor $n^1$. Die höchste Potenz ist aber $n^2$.
hinweise:
  - 'Ordne das Polynom nach fallenden Potenzen von $n$.'
loesung: |
  Nach fallenden Potenzen geordnet: $5n^2 - 2n + 3$. Die höchste Potenz ist $n^2$, der Grad also $2$.
  ---
  Die Zahl vor $n^2$ ist $5$. Das ist der Leitkoeffizient.
```

**Worum geht es in diesem Abschnitt?** Viele Folgen in Prüfungen sind Brüche aus Polynomen in $n$, zum Beispiel
$\frac{6n^2 - n + 2}{3n^2 + 4n}$. Setzt man blind ein, streben Zähler und Nenner beide gegen $\infty$. Das ist der
unbestimmte Ausdruck „$\frac{\infty}{\infty}$“ aus [11.8 Grenzwertsätze und Einschließungssatz](/lernen/mathe3/grenzwerte-folgen/grenzwertsaetze-und-einschliessungssatz). Wir
lernen drei Werkzeuge, mit denen man solche Folgen trotzdem knackt: die höchste Potenz herausheben, den
Wurzeltrick und eine kleine Liste von Standardgrenzwerten.

### Die Methode der höchsten Potenz

**Die Idee:** Für große $n$ bestimmt die höchste Potenz fast allein den Wert eines Polynoms. Bei $n = 1000$ ist
$6n^2 = 6\,000\,000$, dagegen $-n + 2 = -998$. Der Rest ist im Vergleich winzig. Deshalb **dividiert man Zähler und
Nenner durch die höchste Potenz von $n$ im Nenner**. Danach bestehen beide nur noch aus Konstanten und
Nullfolgen, und die Grenzwertsätze greifen.

Das Dividieren von Zähler und Nenner durch dieselbe Zahl $n^2$ ändert den Wert des Bruchs nicht. Es ist dasselbe
wie Kürzen.

:::beispiel[Höchste Potenz herausheben, gleicher Grad]
Gesucht ist $\lim\limits_{n\to\infty}\dfrac{6n^2 - n + 2}{3n^2 + 4n}$.

**Schritt 1, höchste Potenz im Nenner bestimmen.** Das ist $n^2$.

**Schritt 2, Zähler und Nenner durch $n^2$ dividieren.** Jeder Summand wird einzeln geteilt:
$$\frac{6n^2 - n + 2}{3n^2 + 4n} = \frac{6 - \frac1n + \frac{2}{n^2}}{3 + \frac4n}.$$

**Schritt 3, Grenzwertsätze anwenden.** Die Brüche $\frac1n$, $\frac{2}{n^2}$ und $\frac4n$ sind Nullfolgen. Der Zähler strebt
gegen $6$, der Nenner gegen $3 \neq 0$. Also ist der Grenzwert $\frac63 = 2$.

**Schritt 4, Probe.** Für $n = 1000$ ergibt sich $\frac{5\,999\,002}{3\,004\,000} \approx 1{,}997$. Das liegt nahe bei $2$.
:::

Am Beispiel sieht man ein Muster: Bei gleichem Grad bleiben nur die beiden Leitkoeffizienten $6$ und $3$ übrig.
Was passiert bei verschiedenen Graden?

:::beispiel[Verschiedene Grade]
**a) Zählergrad kleiner:** $\dfrac{n + 5}{n^2 + 1}$. Wir teilen durch $n^2$ und erhalten $\dfrac{\frac1n + \frac{5}{n^2}}{1 + \frac{1}{n^2}}$.
Der Zähler strebt gegen $0$, der Nenner gegen $1$. Grenzwert $\frac01 = 0$.

**b) Zählergrad größer:** $\dfrac{n^3 - 1}{2n^2 + n}$. Wir teilen durch $n^2$ und erhalten $\dfrac{n - \frac{1}{n^2}}{2 + \frac1n}$.
Der Nenner strebt gegen $2$, der Zähler wächst über jede Grenze. Die Folge divergiert bestimmt gegen $\infty$.
Probe: Für $n = 1000$ ist der Wert ungefähr $500$, und er wächst weiter.
:::

:::satz[Grenzwert rationaler Folgen]
Es sei $a_n = \dfrac{p_k n^k + \dots + p_0}{q_m n^m + \dots + q_0}$ mit den Leitkoeffizienten $p_k \neq 0$ und $q_m \neq 0$. Dabei
ist $k$ der Zählergrad und $m$ der Nennergrad. Dann gilt:

- Ist $k < m$, dann ist $(a_n)$ eine Nullfolge.
- Ist $k = m$, dann strebt $a_n$ gegen $\dfrac{p_k}{q_m}$, den Quotienten der Leitkoeffizienten.
- Ist $k > m$, dann divergiert $(a_n)$ bestimmt, gegen $+\infty$ oder $-\infty$. Das Vorzeichen von $\frac{p_k}{q_m}$ entscheidet.
:::

:::pruefung[So schreibst du eine Grenzwertberechnung in der Prüfung auf]
Wenn die Angabe „Bestimmen Sie den Grenzwert“ verlangt, genügt der Satz allein oft nicht. Die Prüferin will die
Umformung sehen. Schreib also das Teilen durch die höchste Potenz hin, etwa so:
$$\frac{4n - 1}{5 + 2n} = \frac{4 - \frac1n}{\frac5n + 2} \longrightarrow \frac{4 - 0}{0 + 2} = 2.$$
Dann folgt ein Antwortsatz: „Der Grenzwert ist $2$, weil $\frac1n$ und $\frac5n$ Nullfolgen sind.“ Den Satz über
Leitkoeffizienten verwendest du zusätzlich als schnelle Kontrolle.
:::

:::achtung[Den falschen Leitkoeffizienten nehmen]
Falsch: „$\dfrac{4n - 1}{5 + 2n}$ hat gleichen Grad, also ist der Grenzwert $\frac45$.“

Richtig: Im Nenner steht die höchste Potenz $n$ hinten. Der Leitkoeffizient des Nenners ist $2$, nicht $5$. Der
Grenzwert ist $\frac42 = 2$. Ordne Polynome deshalb immer zuerst nach fallenden Potenzen: $5 + 2n = 2n + 5$.
Probe: Für $n = 1000$ ist $\frac{3999}{2005} \approx 1{,}99$, also nahe $2$ und nicht nahe $0{,}8$.
:::

```aufgabe
id: gf-rational-gleicher-grad
titel: Rationale Folge, gleicher Grad
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Berechne $\displaystyle\lim_{n\to\infty}\frac{7n^2 - 3n + 1}{2n^2 + 5}$. Gib das Ergebnis als Bruch oder Dezimalzahl an.
teile:
  - typ: zahl
    label: 'Grenzwert'
    loesung: "7/2"
    anzeige: '\tfrac72 = 3{,}5'
    fehler:
      - wert: "1/5"
        meldung: |
          Du hast die Konstanten $1$ und $5$ verglichen. Für große $n$ entscheiden aber die **höchsten** Potenzen, die Konstanten werden bedeutungslos.
      - wert: "0"
        meldung: |
          Zähler und Nenner haben **denselben** Grad $2$. Dann bleibt nach dem Teilen durch $n^2$ der Quotient der Zahlen vor $n^2$ übrig, nicht $0$.
hinweise:
  - 'Dividiere Zähler und Nenner durch $n^2$.'
loesung: |
  Ansatz: Zähler und Nenner durch die höchste Nennerpotenz $n^2$ dividieren, damit nur Konstanten und Nullfolgen übrig bleiben: $\frac{7 - \frac3n + \frac{1}{n^2}}{2 + \frac{5}{n^2}}$.
  ---
  Mit $\frac1n \to 0$ und $\frac{1}{n^2} \to 0$ strebt der Zähler gegen $7$ und der Nenner gegen $2$. Grenzwert $\frac72 = 3{,}5$. Probe mit $n = 1000$: $\approx 3{,}498$ ✓.
```

```aufgabe
id: gf-rational-kleiner-grad
titel: Rationale Folge, Zählergrad kleiner
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Berechne $\displaystyle\lim_{n\to\infty}\frac{4n^3 - n}{n^4 + 1}$.
teile:
  - typ: zahl
    label: 'Grenzwert'
    loesung: "0"
    fehler:
      - wert: "4"
        meldung: |
          Du hast die Zahlen vor den höchsten Potenzen dividiert, aber die Grade sind verschieden: Zähler $3$, Nenner $4$. Teile durch $n^4$ und schau, was im Zähler übrig bleibt.
hinweise:
  - 'Dividiere durch die höchste Nennerpotenz $n^4$.'
loesung: |
  Ansatz: Durch die höchste Nennerpotenz $n^4$ dividieren: $\frac{\frac4n - \frac{1}{n^3}}{1 + \frac{1}{n^4}}$.
  ---
  Der Zähler strebt gegen $0$, der Nenner gegen $1$. Grenzwert $0$. Das passt zum Satz: Zählergrad $3$ ist kleiner als Nennergrad $4$.
```

```aufgabe
id: gf-rat-reihenfolge
titel: Verkehrt herum geschriebene Polynome
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Berechne $\displaystyle\lim_{n\to\infty}\frac{5 - 2n}{3 + 4n}$.
teile:
  - typ: zahl
    label: 'Grenzwert'
    loesung: "-2/4"
    anzeige: '-\tfrac12'
    fehler:
      - wert: "5/3"
        meldung: |
          Das sind die Konstanten, die für große $n$ keine Rolle spielen. Entscheidend sind die Zahlen vor $n$.
      - wert: "1/2"
        meldung: |
          Das Vorzeichen fehlt. Vor $n$ steht im Zähler $-2$, nicht $2$.
      - wert: "-2/3"
        meldung: |
          Im Nenner steht vor $n$ die Zahl $4$. Die $3$ ist die Konstante. Ordne zuerst: $4n + 3$.
hinweise:
  - 'Ordne Zähler und Nenner nach fallenden Potenzen: $-2n + 5$ und $4n + 3$.'
loesung: |
  Ansatz: Zuerst nach fallenden Potenzen ordnen, damit man die richtigen Leitkoeffizienten sieht: $\frac{-2n + 5}{4n + 3}$.
  ---
  Durch $n$ dividieren: $\frac{-2 + \frac5n}{4 + \frac3n} \to \frac{-2}{4} = -\frac12$. Probe mit $n = 1000$: $\frac{-1995}{4003} \approx -0{,}498$ ✓.
```

```aufgabe
id: gf-rational-ausmultiplizieren
titel: Erst ausmultiplizieren
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Berechne
  $$\text{a) } \lim_{n\to\infty}\frac{(2n + 1)^2}{3n^2 - 1} \qquad\qquad \text{b) } \lim_{n\to\infty}\frac{(1 - n)(n + 4)}{2n^2 + n}$$
teile:
  - typ: zahl
    label: 'a)'
    loesung: "4/3"
    anzeige: '\tfrac43'
    fehler:
      - wert: "2/3"
        meldung: |
          Du hast das Quadrat vergessen. $(2n + 1)^2$ beginnt mit $4n^2$, nicht mit $2n^2$.
  - typ: zahl
    label: 'b)'
    loesung: "-1/2"
    anzeige: '-\tfrac12'
    fehler:
      - wert: "1/2"
        meldung: |
          Achte auf das Vorzeichen: $(1 - n)(n + 4)$ hat den Leitterm $(-n)\cdot n = -n^2$.
hinweise:
  - 'Multipliziere die Klammern aus oder bestimme nur den Leitterm des Zählers.'
  - 'Danach durch $n^2$ dividieren.'
loesung: |
  Ansatz: Den Zähler ausmultiplizieren, um den Leitkoeffizienten zu sehen. Danach durch $n^2$ dividieren.
  ---
  a) $(2n + 1)^2 = 4n^2 + 4n + 1$. Durch $n^2$: $\frac{4 + \frac4n + \frac{1}{n^2}}{3 - \frac{1}{n^2}} \to \frac43$.
  ---
  b) $(1 - n)(n + 4) = n + 4 - n^2 - 4n = -n^2 - 3n + 4$. Durch $n^2$: $\frac{-1 - \frac3n + \frac{4}{n^2}}{2 + \frac1n} \to -\frac12$.
  ---
  Probe mit $n = 1000$: a) $\approx 1{,}335$, b) $\approx -0{,}501$ ✓.
```

### Der Wurzeltrick

Differenzen von Wurzeln wie $\sqrt{n^2 + 4n} - n$ sind vom Typ „$\infty - \infty$“. Beide Teile wachsen über jede
Grenze. Ihre Differenz kann trotzdem gegen eine Zahl streben. Um das zu sehen, braucht man die **dritte
binomische Formel** $(A - B)(A + B) = A^2 - B^2$ aus [Kapitel 1](/lernen/mathe3/zahlen/terme-umformen-binomische-formeln-und-faktorisieren).
Sie macht aus einer Differenz von Wurzeln eine Differenz von Quadraten, und dabei verschwinden die Wurzeln.

:::beispiel[Wurzeldifferenz]
Gesucht ist $\lim\limits_{n\to\infty}\left(\sqrt{n^2 + 4n} - n\right)$.

**Schritt 1, mit der Summe erweitern.** Wir multiplizieren mit $\frac{\sqrt{n^2 + 4n} + n}{\sqrt{n^2 + 4n} + n}$. Das ist $1$, ändert
also den Wert nicht. Im Zähler entsteht nach der dritten binomischen Formel
$(\sqrt{n^2 + 4n})^2 - n^2 = n^2 + 4n - n^2 = 4n$. Also
$$\sqrt{n^2 + 4n} - n = \frac{4n}{\sqrt{n^2 + 4n} + n}.$$

**Schritt 2, durch $n$ dividieren.** Für $n > 0$ ist $\frac{\sqrt{n^2 + 4n}}{n} = \sqrt{\frac{n^2 + 4n}{n^2}} = \sqrt{1 + \frac4n}$. Also
$$\frac{4n}{\sqrt{n^2 + 4n} + n} = \frac{4}{\sqrt{1 + \frac4n} + 1}.$$

**Schritt 3, Grenzwert.** Mit $\frac4n \to 0$ strebt der Nenner gegen $\sqrt1 + 1 = 2$. Grenzwert $\frac42 = 2$.

**Schritt 4, Probe.** Für $n = 1000$ ist $\sqrt{1\,004\,000} - 1000 \approx 1{,}998$.
:::

:::achtung[Wurzel gliedweise ziehen]
Falsch: „$\sqrt{n^2 + 4n} = \sqrt{n^2} + \sqrt{4n} = n + 2\sqrt n$, also $\sqrt{n^2 + 4n} - n = 2\sqrt n \to \infty$.“

Richtig: Die Wurzel aus einer Summe ist **nicht** die Summe der Wurzeln. Zahlenprobe: $\sqrt{9 + 16} = 5$, aber
$\sqrt9 + \sqrt{16} = 7$. Mit dem Wurzeltrick ergibt sich der Grenzwert $2$. Eine Probe mit $n = 1000$ zeigt
$\approx 1{,}998$ und nicht $2\sqrt{1000} \approx 63$.
:::

```aufgabe
id: gf-wurzeltrick
titel: Wurzeldifferenz
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Berechne $\displaystyle\lim_{n\to\infty}\left(\sqrt{n^2 + 10n} - n\right)$.
teile:
  - typ: zahl
    label: 'Grenzwert'
    loesung: "5"
    fehler:
      - wert: "0"
        meldung: |
          „$\infty - \infty = 0$“ stimmt nicht. Das ist ein unbestimmter Ausdruck. Erweitere mit $\sqrt{n^2 + 10n} + n$.
      - wert: "10"
        meldung: |
          Der Zähler $10n$ ist richtig. Aber im Nenner stehen nach dem Teilen durch $n$ **zwei** Summanden, die je gegen $1$ streben.
hinweise:
  - 'Typ „$\infty - \infty$“: mit $\sqrt{n^2 + 10n} + n$ erweitern.'
  - 'Danach Zähler und Nenner durch $n$ dividieren.'
gefuehrt:
  - text: Erweitere mit $\sqrt{n^2 + 10n} + n$. Welcher Term steht danach im Zähler?
    teil:
      typ: term
      variable: n
      bereich: [1, 10]
      loesung: "10n"
      fehler:
        - wert: "2n^2 + 10n"
          meldung: 'Nach der dritten binomischen Formel wird $n^2$ **abgezogen**: $(n^2 + 10n) - n^2$.'
    erklaerung: '$(\sqrt{n^2 + 10n})^2 - n^2 = n^2 + 10n - n^2 = 10n$.'
  - text: Überlege, warum $\frac{\sqrt{n^2 + 10n}}{n} = \sqrt{1 + \frac{10}{n}}$ ist.
    erklaerung: 'Für $n > 0$ ist $n = \sqrt{n^2}$. Also $\frac{\sqrt{n^2 + 10n}}{\sqrt{n^2}} = \sqrt{\frac{n^2 + 10n}{n^2}} = \sqrt{1 + \frac{10}{n}}$.'
  - text: Nach dem Teilen durch $n$ lautet der Nenner $\sqrt{1 + \frac{10}{n}} + 1$. Wogegen strebt er?
    teil:
      typ: zahl
      loesung: "2"
      fehler:
        - wert: "1"
          meldung: 'Beide Summanden zählen: $\sqrt{1 + 0} + 1$.'
    erklaerung: '$\frac{10}{n} \to 0$, also strebt der Nenner gegen $\sqrt1 + 1 = 2$.'
  - text: Welchen Grenzwert hat die Folge?
    teil:
      typ: zahl
      loesung: "5"
      fehler:
        - wert: "10"
          meldung: 'Der Zähler $10$ wird noch durch den Nennergrenzwert $2$ geteilt.'
    erklaerung: '$\frac{10}{2} = 5$.'
loesung: |
  Ansatz: Typ „$\infty - \infty$“. Wir erweitern mit der Summe, damit nach der dritten binomischen Formel die Wurzel verschwindet: $\sqrt{n^2 + 10n} - n = \frac{10n}{\sqrt{n^2 + 10n} + n}$.
  ---
  Durch $n$ dividieren: $\frac{10}{\sqrt{1 + \frac{10}{n}} + 1}$.
  ---
  Grenzwert: $\frac{10}{1 + 1} = 5$. Probe: $n = 1000$ liefert $\sqrt{1\,010\,000} - 1000 \approx 4{,}988$ ✓.
```

### Standardgrenzwerte

Einige Grenzwerte kommen so oft vor, dass man sie auswendig kennt. Man verwendet sie wie Bausteine.

:::satz[Wichtige Grenzwerte]
1. $\lim\limits_{n\to\infty}\sqrt[n]{a} = 1$ für jede feste Zahl $a > 0$.
2. $\lim\limits_{n\to\infty}\sqrt[n]{n} = 1$.
3. $\lim\limits_{n\to\infty}\left(1 + \dfrac1n\right)^n = e \approx 2{,}71828$.
4. $\lim\limits_{n\to\infty}\left(1 + \dfrac xn\right)^n = e^x$ für jede feste Zahl $x$.
:::

Dabei ist $\sqrt[n]{a}$ die $n$-te Wurzel, also die Zahl, deren $n$-te Potenz $a$ ergibt. Zahlenbeispiele zu 1:
$\sqrt[10]{2} \approx 1{,}072$ und $\sqrt[100]{2} \approx 1{,}007$. Die Wurzel zieht jede positive Zahl immer näher an $1$.

Teil 2 ist überraschend. Der Radikand $n$ wächst über jede Grenze, aber die Wurzel wird gleichzeitig immer stärker.
Die Wurzel gewinnt knapp: $\sqrt[10]{10} \approx 1{,}259$ und $\sqrt[1000]{1000} \approx 1{,}0069$. Den Beweis findest du in diesem
Abschnitt im Kasten „Beweis von Teil 2 (Vertiefung)“.

Teil 3 ist die **Definition** der eulerschen Zahl $e$. Dass dieser Grenzwert überhaupt existiert, zeigen wir in
[11.11 Monotoniekriterium und Vollständigkeit von ℝ](/lernen/mathe3/grenzwerte-folgen/monotoniekriterium-und-vollstaendigkeit-von). Die Folge konvergiert langsam:

- $n = 1$: $2$
- $n = 10$: $2{,}5937$
- $n = 100$: $2{,}7048$
- $n = 1000$: $2{,}7169$
- $n = 10^6$: $2{,}71828$

Eine anschauliche Bedeutung kommt aus der Zinsrechnung. Ein Euro wird ein Jahr lang mit $100\,\%$ verzinst, aber
$n$-mal im Jahr mit je $\frac{100\,\%}{n}$. Am Jahresende hat man $\left(1 + \frac1n\right)^n$ Euro. Bei immer feinerer
Verzinsung wächst das nicht über jede Grenze. Es nähert sich $e \approx 2{,}72$ Euro.

:::beweis[Beweis von Teil 2 (Vertiefung)]
Für $n \ge 2$ ist $\sqrt[n]{n} > 1$. Wir schreiben $\sqrt[n]{n} = 1 + h_n$ mit einer Zahl $h_n > 0$ und zeigen $h_n \to 0$.
Nach dem binomischen Lehrsatz ist
$$n = (1 + h_n)^n = 1 + n h_n + \binom{n}{2}h_n^2 + \dots \ge \binom{n}{2}h_n^2 = \frac{n(n - 1)}{2}h_n^2.$$
Das Weglassen ist erlaubt, weil alle weggelassenen Summanden positiv sind. Teilen durch $\frac{n(n-1)}{2}$ ergibt
$h_n^2 \le \frac{2}{n - 1}$, also $0 < h_n \le \sqrt{\frac{2}{n - 1}}$. Die rechte Seite strebt gegen $0$. Nach dem
Einschließungssatz ist $h_n \to 0$, also $\sqrt[n]{n} \to 1$.
:::

:::beispiel[Standardgrenzwerte geschickt einsetzen]
**a)** $\left(1 + \dfrac5n\right)^n$ hat genau die Form aus Teil 4 mit $x = 5$. Grenzwert $e^5 \approx 148{,}4$.

**b)** $\left(\dfrac{n - 1}{n}\right)^n = \left(1 - \dfrac1n\right)^n$ hat die Form aus Teil 4 mit $x = -1$. Grenzwert $e^{-1} = \frac1e \approx 0{,}368$.

**c)** $\sqrt[n]{2^n + 3^n}$: Unter der Wurzel ist $3^n$ der größte Summand. Wir schließen ein:
$3^n \le 2^n + 3^n \le 3^n + 3^n = 2 \cdot 3^n$. Die $n$-te Wurzel erhält die Reihenfolge. Also
$3 \le \sqrt[n]{2^n + 3^n} \le \sqrt[n]{2}\cdot 3$. Wegen $\sqrt[n]{2} \to 1$ strebt die rechte Seite gegen $3$. Nach
dem Einschließungssatz ist der Grenzwert $3$. Probe: Für $n = 10$ ist der Wert schon etwa $3{,}005$.
:::

:::achtung[„Eins hoch unendlich ist eins“]
Falsch: „$1 + \frac5n \to 1$, und $1$ hoch irgendetwas ist $1$. Also $\left(1 + \frac5n\right)^n \to 1$.“

Richtig: Die Basis ist nie genau $1$, und der Exponent wächst gleichzeitig. Beide Effekte kämpfen gegeneinander.
„$1^\infty$“ ist ein unbestimmter Ausdruck. Der Standardgrenzwert liefert $e^5 \approx 148{,}4$. Probe: Für
$n = 1000$ ist $1{,}005^{1000} \approx 146{,}6$, also weit weg von $1$.
:::

:::merke[Rezept: Grenzwerte berechnen]
1. **Einsetzen versuchen:** Konvergieren alle Bausteine und entsteht kein unbestimmter Ausdruck, liefern die Grenzwertsätze das Ergebnis.
2. **Bruch aus Polynomen:** Zähler und Nenner durch die höchste Nennerpotenz $n^k$ dividieren.
3. **Bruch mit Potenzen wie $5^n$:** durch die am schnellsten wachsende Potenz im Nenner dividieren.
4. **Wurzeldifferenz:** mit der Summe erweitern (dritte binomische Formel).
5. **Form $\left(1 + \frac{x}{n}\right)^n$:** Standardgrenzwert $e^x$.
6. **$n$-te Wurzeln:** $\sqrt[n]{a} \to 1$, $\sqrt[n]{n} \to 1$. Unter einer $n$-ten Wurzel gewinnt der größte Summand.
:::

```aufgabe
id: gf-e-grenzwerte
titel: Grenzwerte mit e
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Berechne. Gib den exakten Wert an (der Taschenrechner-Wert wird ebenfalls akzeptiert).
  $$\text{a) } \lim_{n\to\infty}\left(1 + \frac2n\right)^n \qquad \text{b) } \lim_{n\to\infty}\left(\frac{n}{n + 1}\right)^n \qquad \text{c) } \lim_{n\to\infty}\left(1 + \frac1n\right)^{3n}$$
teile:
  - typ: zahl
    label: 'a)'
    loesung: "e^2"
    anzeige: 'e^2 \approx 7{,}389'
    fehler:
      - wert: "1"
        meldung: |
          „$1^\infty$“ ist unbestimmt. Die Folge hat die Form $\left(1 + \frac xn\right)^n$ mit $x = 2$.
      - wert: "2*e"
        meldung: |
          Das $x$ in $\left(1 + \frac xn\right)^n$ landet im **Exponenten** von $e$, nicht als Faktor davor.
  - typ: zahl
    label: 'b)'
    loesung: "1/e"
    anzeige: '\tfrac1e \approx 0{,}3679'
    fehler:
      - wert: "e"
        meldung: |
          $\frac{n}{n + 1}$ ist der **Kehrwert** von $1 + \frac1n$. Dann ist auch der Grenzwert der Kehrwert von $e$.
  - typ: zahl
    label: 'c)'
    loesung: "e^3"
    anzeige: 'e^3 \approx 20{,}09'
    fehler:
      - wert: "3*e"
        meldung: |
          $\left(1 + \frac1n\right)^{3n} = \left[\left(1 + \frac1n\right)^n\right]^3$. Der Faktor $3$ im Exponenten wird zur Potenz, nicht zum Faktor.
hinweise:
  - 'Standardgrenzwert $\left(1 + \frac xn\right)^n \to e^x$.'
  - 'b) $\frac{n}{n + 1} = \frac{1}{1 + \frac1n}$. c) Potenzgesetz $a^{3n} = (a^n)^3$.'
loesung: |
  Ansatz: Jede Folge wird auf die Form $\left(1 + \frac xn\right)^n$ gebracht, deren Grenzwert $e^x$ wir kennen.
  ---
  a) $x = 2$: Grenzwert $e^2 \approx 7{,}389$.
  ---
  b) $\left(\frac{n}{n + 1}\right)^n = \frac{1}{\left(1 + \frac1n\right)^n} \to \frac1e$ (Quotientenregel, weil $e \neq 0$).
  ---
  c) $\left[\left(1 + \frac1n\right)^n\right]^3 \to e^3 \approx 20{,}09$ (Potenzregel). Probe für b) mit $n = 1000$: $\left(\frac{1000}{1001}\right)^{1000} \approx 0{,}3681$ ✓.
```

```aufgabe
id: gf-exponential-quotient
titel: Brüche mit Exponentialausdrücken
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Berechne
  $$\text{a) } \lim_{n\to\infty}\frac{2^n + n}{3\cdot 2^n - 1} \qquad\qquad \text{b) } \lim_{n\to\infty}\frac{5^{n+1} + 2^n}{5^n - 3}$$
teile:
  - typ: zahl
    label: 'a)'
    loesung: "1/3"
    anzeige: '\tfrac13'
    fehler:
      - wert: "1"
        meldung: |
          Nach dem Teilen durch $2^n$ bleibt im Nenner der Faktor $3$ stehen: $\frac{3\cdot 2^n}{2^n} = 3$. Der Grenzwert ist also nicht $\frac11$.
  - typ: zahl
    label: 'b)'
    loesung: "5"
    fehler:
      - wert: "1"
        meldung: |
          $5^{n+1} = 5 \cdot 5^n$. Nach dem Teilen durch $5^n$ bleibt im Zähler der Faktor $5$ stehen.
hinweise:
  - 'Dividiere durch die am schnellsten wachsende Größe im Nenner ($2^n$ bzw. $5^n$).'
  - '$\frac{n}{2^n} \to 0$ (Exponentialfunktion schlägt Potenz) und $\left(\frac25\right)^n \to 0$.'
loesung: |
  Ansatz: Wie bei Polynomen teilen wir durch den stärksten Term im Nenner. Hier sind das Potenzen mit $n$ im Exponenten.
  ---
  a) Durch $2^n$ dividieren: $\frac{1 + \frac{n}{2^n}}{3 - \frac{1}{2^n}} \to \frac{1 + 0}{3 - 0} = \frac13$.
  ---
  b) Durch $5^n$ dividieren: $\frac{5 + \left(\frac25\right)^n}{1 - \frac{3}{5^n}} \to \frac{5 + 0}{1 - 0} = 5$.
  ---
  Probe für a) mit $n = 30$: $\frac{2^{30} + 30}{3\cdot 2^{30} - 1} \approx 0{,}33333$ ✓.
```

```aufgabe
id: gf-rat-parameter
titel: Parameter aus dem Grenzwert bestimmen
niveau: 3
lernziel: 4
kompetenz: anwenden
angabe: |
  a) Für welche Zahl $c$ gilt $\displaystyle\lim_{n\to\infty}\frac{c\,n^2 + 1}{4n^2 - n} = 3$?

  b) Für welche Zahl $c > 0$ gilt $\displaystyle\lim_{n\to\infty}\left(\sqrt{n^2 + c\,n} - n\right) = 4$?
teile:
  - typ: zahl
    label: 'a) $c$'
    loesung: "12"
    fehler:
      - wert: "3/4"
        meldung: |
          Der Grenzwert ist $\frac{c}{4}$. Setze $\frac{c}{4} = 3$ und löse nach $c$ auf. Du hast stattdessen $3$ durch $4$ geteilt.
  - typ: zahl
    label: 'b) $c$'
    loesung: "8"
    fehler:
      - wert: "4"
        meldung: |
          Der Grenzwert ist nicht $c$, sondern $\frac{c}{2}$: Nach dem Wurzeltrick steht im Nenner $\sqrt{1 + \frac cn} + 1 \to 2$.
hinweise:
  - 'Berechne zuerst den Grenzwert allgemein in Abhängigkeit von $c$.'
  - 'a) Gleicher Grad, also Quotient der Leitkoeffizienten. b) Wurzeltrick wie im Beispiel, mit $c$ statt einer Zahl.'
loesung: |
  Ansatz: Das ist eine Umkehraufgabe. Wir berechnen den Grenzwert als Term in $c$ und setzen ihn gleich dem verlangten Wert.
  ---
  a) Durch $n^2$ dividieren: $\frac{c + \frac{1}{n^2}}{4 - \frac1n} \to \frac{c}{4}$. Bedingung $\frac c4 = 3$, also $c = 12$.
  ---
  b) Wurzeltrick: $\sqrt{n^2 + cn} - n = \frac{cn}{\sqrt{n^2 + cn} + n} = \frac{c}{\sqrt{1 + \frac cn} + 1} \to \frac{c}{2}$. Bedingung $\frac c2 = 4$, also $c = 8$.
  ---
  Probe: Für $n = 1000$ liefert a) mit $c = 12$ den Wert $\approx 3{,}0008$ und b) mit $c = 8$ den Wert $\approx 3{,}99$ ✓.
```

```aufgabe
id: gf-rat-wurzel-n
titel: Wer gewinnt unter der n-ten Wurzel?
niveau: 3
lernziel: 4
kompetenz: begruenden
angabe: |
  Bestimme $\displaystyle\lim_{n\to\infty}\sqrt[n]{3^n + 7^n}$ und begründe dein Ergebnis mit dem Einschließungssatz.
teile:
  - typ: zahl
    label: 'Grenzwert'
    loesung: "7"
    fehler:
      - wert: "10"
        meldung: |
          Die $n$-te Wurzel darf man nicht gliedweise ziehen: $\sqrt[n]{3^n + 7^n} \neq 3 + 7$. Probe mit $n = 2$: $\sqrt{9 + 49} \approx 7{,}6$, nicht $10$.
      - wert: "1"
        meldung: |
          $\sqrt[n]{a} \to 1$ gilt nur für eine **feste** Zahl $a$. Hier wächst der Radikand mit $n$ mit.
  - typ: text
    label: 'Begründung'
    muster: |
      Es ist $7^n \le 3^n + 7^n \le 7^n + 7^n = 2\cdot 7^n$. Weil die $n$-te Wurzel die Reihenfolge erhält, folgt
      $7 \le \sqrt[n]{3^n + 7^n} \le \sqrt[n]{2}\cdot 7$. Wegen $\sqrt[n]{2} \to 1$ strebt die rechte Schranke gegen $7$.
      Die linke Schranke ist konstant $7$. Nach dem Einschließungssatz ist der Grenzwert $7$.
hinweise:
  - 'Schätze $3^n + 7^n$ nach unten durch $7^n$ und nach oben durch $2 \cdot 7^n$ ab.'
  - 'Ziehe die $n$-te Wurzel aus allen drei Teilen und verwende $\sqrt[n]{2} \to 1$.'
loesung: |
  Ansatz: Unter der Wurzel ist $7^n$ der größte Summand. Wir schließen den Radikanden zwischen $7^n$ und $2 \cdot 7^n$ ein.
  ---
  $7^n \le 3^n + 7^n \le 2 \cdot 7^n$, weil $3^n \le 7^n$ ist. Die $n$-te Wurzel ist wachsend, also $7 \le \sqrt[n]{3^n + 7^n} \le 7\sqrt[n]{2}$.
  ---
  Die linke Schranke ist $7$, die rechte strebt gegen $7 \cdot 1 = 7$. Einschließungssatz: Der Grenzwert ist $7$.
  ---
  Probe: Für $n = 10$ ist $\sqrt[10]{3^{10} + 7^{10}} \approx 7{,}0001$ ✓.
```

## Monotonie und Beschränktheit beweisen

```aufgabe
id: gf-mono-vorwissen
titel: Was heißt nach oben beschränkt?
niveau: 1
art: check
angabe: |
  Wann heißt eine Folge $(a_n)$ **nach oben beschränkt**?
  (Vorwissen aus [Kapitel 8, „Monotonie und Beschränktheit“](/lernen/mathe3/folgen-reihen/monotonie-und-beschraenktheit).)
teile:
  - typ: auswahl
    optionen:
      - 'wenn es eine feste Zahl $S$ gibt mit $a_n \le S$ für **alle** $n$'
      - 'wenn jedes Glied kleiner als das vorige ist'
      - 'wenn $a_n \le n$ für alle $n$ gilt'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Das beschreibt „streng monoton fallend“. Monotonie und Beschränktheit sind verschiedene Eigenschaften.
      - wert: 2
        meldung: |
          Die Schranke $n$ wächst mit. Eine Schranke muss eine **feste** Zahl sein, die nicht von $n$ abhängt. Sonst wäre jede Folge wie $a_n = n$ „beschränkt“.
hinweise:
  - 'Eine Schranke ist eine Decke, die für alle Glieder gleich hoch ist.'
loesung: |
  Nach oben beschränkt heißt: Es gibt eine Zahl $S$, die kein Glied übersteigt. $S$ heißt obere Schranke.
  ---
  Wichtig ist, dass $S$ fest ist, also nicht von $n$ abhängt. Beispiel: $a_n = 2 - \frac1n$ ist durch $S = 2$ nach oben beschränkt.
```

**Worum geht es in einem Satz?** Wir lernen, Monotonie und Beschränktheit einer Folge **lückenlos zu beweisen**,
statt sie nur an ein paar Gliedern abzulesen.

Genau das verlangt die schriftliche Prüfung. Eine typische Folgenaufgabe lautet: „Stellen Sie eine Vermutung über
die Monotonie auf und zeigen Sie diese. Ist die Folge nach oben beziehungsweise nach unten beschränkt? Begründen
Sie Ihre Antwort.“ Die Vermutung liest man an den ersten Gliedern ab. Der Beweis muss aber für **alle** $n$ gelten.

Zur Erinnerung die Begriffe aus [Kapitel 8](/lernen/mathe3/folgen-reihen/monotonie-und-beschraenktheit):

- **Monoton wachsend**, also „wird nie kleiner“: $a_{n+1} \ge a_n$ für alle $n$. **Streng** monoton wachsend: $a_{n+1} > a_n$.
- **Monoton fallend**, also „wird nie größer“: $a_{n+1} \le a_n$ für alle $n$. Streng: $a_{n+1} < a_n$.
- **Nach oben beschränkt:** Es gibt eine feste Zahl $S$ mit $a_n \le S$ für alle $n$. $S$ heißt **obere Schranke**.
- **Nach unten beschränkt:** Es gibt eine feste Zahl $s$ mit $a_n \ge s$ für alle $n$. $s$ heißt **untere Schranke**.
- **Beschränkt** heißt: nach oben und nach unten beschränkt.

:::achtung[Eine Tabelle ist kein Beweis]
Falsch: „$a_n = n^2 \cdot 0{,}8^n$ hat die Glieder $0{,}8;\ 2{,}56;\ 4{,}61;\ 6{,}55;\ 8{,}19$. Jedes ist größer als das vorige, also ist die Folge wachsend.“

Richtig: Fünf Glieder sagen nichts über alle anderen. Rechnet man weiter, ist $a_9 \approx 10{,}87$, aber
$a_{10} \approx 10{,}74$. Ab $n = 9$ fällt die Folge. Ein paar Glieder liefern nur die **Vermutung**. Bewiesen ist sie
erst durch eine Rechnung, die für jedes $n$ gilt.
:::

### Vier Werkzeuge für den Monotoniebeweis

1. **Differenzmethode:** $a_{n+1} - a_n$ auf einen Bruch bringen und zeigen, dass er für **alle** $n$ positiv ist
   (wachsend) oder negativ ist (fallend). Gut für Brüche aus Polynomen.
2. **Quotientenmethode:** Nur wenn alle Glieder positiv sind. Man vergleicht $\frac{a_{n+1}}{a_n}$ mit $1$. Ist der
   Quotient größer als $1$, wächst die Folge, ist er kleiner, fällt sie. Gut für Potenzen wie $2^n$ und Fakultäten.
3. **Äquivalenzumformung:** Man schreibt die Behauptung $a_{n+1} < a_n$ hin und formt sie gleichwertig um, bis eine
   Aussage dasteht, die man sicher weiß. Jede Umformung muss in **beide Richtungen** gelten.
4. **Vollständige Induktion:** für rekursiv definierte Folgen, bei denen man keinen Term für $a_n$ hat.

:::beispiel[Differenzmethode, vollständig]
Gegeben ist $a_n = \dfrac{3n - 1}{n + 1}$ für $n \ge 1$.

**Schritt 1, Vermutung.** Die ersten Glieder sind $a_1 = 1$, $a_2 = \frac53 \approx 1{,}67$, $a_3 = 2$, $a_4 = \frac{11}{5} = 2{,}2$. Vermutung: streng monoton wachsend.

**Schritt 2, $a_{n+1}$ aufschreiben.** Jedes $n$ wird durch $n + 1$ ersetzt: $a_{n+1} = \frac{3(n + 1) - 1}{(n + 1) + 1} = \frac{3n + 2}{n + 2}$.

**Schritt 3, Differenz auf einen Bruch bringen.** Gemeinsamer Nenner ist $(n + 1)(n + 2)$:
$$a_{n+1} - a_n = \frac{(3n + 2)(n + 1) - (3n - 1)(n + 2)}{(n + 1)(n + 2)}.$$

**Schritt 4, Zähler ausmultiplizieren.** $(3n + 2)(n + 1) = 3n^2 + 5n + 2$ und $(3n - 1)(n + 2) = 3n^2 + 5n - 2$.
Die Differenz ist $2 - (-2) = 4$. Also
$$a_{n+1} - a_n = \frac{4}{(n + 1)(n + 2)}.$$

**Schritt 5, Vorzeichen für alle $n$ begründen.** Der Zähler $4$ ist positiv. Für $n \ge 1$ sind beide Faktoren im
Nenner positiv. Also ist $a_{n+1} - a_n > 0$ für **jedes** $n \ge 1$. Die Folge ist streng monoton wachsend.

**Probe mit $n = 1$:** $a_2 - a_1 = \frac53 - 1 = \frac23$, und die Formel liefert $\frac{4}{2 \cdot 3} = \frac23$ ✓.
:::

:::achtung[Nur im Zähler n + 1 eingesetzt]
Falsch: „$a_{n+1} - a_n = \dfrac{3(n + 1) - 1}{n + 1} - \dfrac{3n - 1}{n + 1} = \dfrac{3}{n + 1}$.“

Richtig: Beim Übergang zu $a_{n+1}$ wird **jedes** $n$ ersetzt, auch das im Nenner. Also $a_{n+1} = \frac{3n + 2}{n + 2}$.
Hier ist das Vorzeichen zufällig dasselbe, aber bei anderen Folgen dreht der Fehler das Ergebnis um. Die Probe
mit $n = 1$ deckt ihn auf: $a_2 - a_1 = \frac23$, die falsche Formel liefert $\frac32$.
:::

```aufgabe
id: gf-mono-erste-glieder
titel: Erste Glieder und eine Vermutung
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Gegeben ist $a_n = \dfrac{4n - 1}{n + 2}$ für $n \ge 1$.

  a) Berechne $a_2$ und $a_3$ als Bruch.

  b) Welche Vermutung über die Monotonie legen die Glieder $a_1 = 1$, $a_2$, $a_3$ nahe?
teile:
  - typ: zahl
    label: 'a) $a_2$'
    loesung: "(4*2 - 1)/(2 + 2)"
    anzeige: '\tfrac74'
    fehler:
      - wert: "7/3"
        meldung: |
          Im Nenner steht $n + 2$. Für $n = 2$ ist das $4$, nicht $3$.
  - typ: zahl
    label: 'a) $a_3$'
    loesung: "(4*3 - 1)/(3 + 2)"
    anzeige: '\tfrac{11}{5}'
    fehler:
      - wert: "12/5"
        meldung: |
          Im Zähler steht $4n - 1$. Für $n = 3$ ist das $12 - 1 = 11$.
  - typ: auswahl
    label: 'b) Vermutung'
    optionen:
      - 'streng monoton wachsend'
      - 'streng monoton fallend'
      - 'nicht monoton'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Vergleiche die Dezimalwerte: $a_1 = 1$, $a_2 = 1{,}75$, $a_3 = 2{,}2$. Die Glieder werden größer.
hinweise:
  - 'Setze $n = 2$ und $n = 3$ in Zähler **und** Nenner ein.'
loesung: |
  Ansatz: Für die Vermutung berechnen wir die ersten Glieder, indem wir $n$ in Zähler und Nenner einsetzen.
  ---
  a) $a_2 = \frac{8 - 1}{4} = \frac74 = 1{,}75$ und $a_3 = \frac{12 - 1}{5} = \frac{11}{5} = 2{,}2$.
  ---
  b) $1 < 1{,}75 < 2{,}2$. Vermutung: streng monoton wachsend. Das ist erst eine Vermutung. Der Beweis braucht eine Rechnung für alle $n$, zum Beispiel mit der Differenzmethode.
```

```aufgabe
id: gf-mono-differenz-term
titel: Die Differenz berechnen
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Gegeben ist $a_n = \dfrac{2n + 3}{n + 1}$. Berechne $a_{n+1} - a_n$ als einen Bruch in $n$.
teile:
  - typ: term
    label: '$a_{n+1} - a_n =$'
    variable: n
    bereich: [1, 10]
    loesung: "-1/((n+1)(n+2))"
    fehler:
      - wert: "1/((n+1)(n+2))"
        meldung: |
          Das Vorzeichen stimmt nicht. Prüfe den Zähler: $(2n + 5)(n + 1) - (2n + 3)(n + 2) = (2n^2 + 7n + 5) - (2n^2 + 7n + 6)$.
      - wert: "2/(n+1)"
        meldung: |
          Du hast nur im Zähler $n$ durch $n + 1$ ersetzt. Auch der Nenner ändert sich: $a_{n+1} = \frac{2n + 5}{n + 2}$.
hinweise:
  - '$a_{n+1} = \frac{2(n + 1) + 3}{(n + 1) + 1} = \frac{2n + 5}{n + 2}$. Gemeinsamer Nenner $(n + 1)(n + 2)$.'
loesung: |
  Ansatz: Zuerst $a_{n+1} = \frac{2n + 5}{n + 2}$ bilden, dann auf den gemeinsamen Nenner $(n + 1)(n + 2)$ bringen.
  ---
  Zähler: $(2n + 5)(n + 1) - (2n + 3)(n + 2) = 2n^2 + 7n + 5 - 2n^2 - 7n - 6 = -1$. Also $a_{n+1} - a_n = \frac{-1}{(n + 1)(n + 2)}$.
  ---
  Das ist für alle $n \ge 1$ negativ, die Folge ist also streng monoton fallend. Probe mit $n = 1$: $a_2 - a_1 = \frac73 - \frac52 = -\frac16$, und die Formel liefert $\frac{-1}{2 \cdot 3} = -\frac16$ ✓.
```

:::beispiel[Quotientenmethode]
Gegeben ist $a_n = \dfrac{n}{2^n}$. Alle Glieder sind positiv, deshalb dürfen wir den Quotienten mit $1$ vergleichen.

**Schritt 1, Quotient vereinfachen.** Wir dividieren durch einen Bruch, indem wir mit dem Kehrwert multiplizieren:
$$\frac{a_{n+1}}{a_n} = \frac{n + 1}{2^{n+1}}\cdot\frac{2^n}{n} = \frac{n + 1}{2n}.$$
Dabei wurde $\frac{2^n}{2^{n+1}} = \frac12$ gekürzt.

**Schritt 2, mit 1 vergleichen.** $\frac{n + 1}{2n} \le 1$ gilt genau dann, wenn $n + 1 \le 2n$ ist, also wenn $n \ge 1$ ist.
Gleichheit gilt nur für $n = 1$.

**Schritt 3, Ergebnis.** Für $n = 1$ ist der Quotient $1$, also $a_2 = a_1 = \frac12$. Für $n \ge 2$ ist er kleiner als $1$,
also $a_{n+1} < a_n$. Die Folge ist monoton fallend, ab $n = 2$ sogar streng. Die Glieder sind $\frac12;\ \frac12;\ \frac38;\ \frac14;\ \dots$
:::

:::achtung[Quotientenmethode bei negativen Gliedern]
Falsch: „$a_n = -\frac1n$. Der Quotient ist $\frac{a_{n+1}}{a_n} = \frac{n}{n + 1} < 1$. Also fällt die Folge.“

Richtig: Die Glieder $-1;\ -\frac12;\ -\frac13;\ \dots$ **wachsen**. Bei negativen Zahlen dreht das Multiplizieren mit $a_n$
das Ungleichheitszeichen um. Die Quotientenmethode gilt deshalb nur, wenn **alle** Glieder positiv sind. Hier hilft die
Differenz: $a_{n+1} - a_n = \frac1n - \frac{1}{n + 1} > 0$.
:::

```aufgabe
id: gf-monotonie-quotient
titel: Quotientenmethode mit Fakultät
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Untersuche $a_n = \dfrac{3^n}{n!}$ auf Monotonie. Dabei ist $n! = 1 \cdot 2 \cdot \ldots \cdot n$.

  a) Vereinfache $\dfrac{a_{n+1}}{a_n}$.

  b) Ab welchem $n$ gilt $a_{n+1} < a_n$ (kleinstes solches $n$)?

  c) Welchen größten Wert nimmt die Folge an?
teile:
  - typ: term
    label: 'a) $\frac{a_{n+1}}{a_n} =$'
    variable: n
    bereich: [1, 10]
    loesung: "3/(n+1)"
    fehler:
      - wert: "3/n"
        meldung: |
          $(n + 1)! = (n + 1) \cdot n!$. Nach dem Kürzen von $n!$ bleibt im Nenner $n + 1$, nicht $n$.
  - typ: zahl
    label: 'b) ab $n =$'
    loesung: "3"
    fehler:
      - wert: "2"
        meldung: |
          Für $n = 2$ ist der Quotient $\frac33 = 1$, also $a_3 = a_2$. Gefragt ist ein **echt** kleineres Folgeglied.
  - typ: zahl
    label: 'c) größter Wert'
    loesung: "3^2/2"
    anzeige: '4{,}5'
    fehler:
      - wert: "3"
        meldung: |
          $a_1 = 3$ ist nicht das größte Glied. Der Quotient $\frac{3}{n + 1}$ ist für $n = 1$ größer als $1$, also ist $a_2 > a_1$.
hinweise:
  - '$\frac{3^{n+1}}{3^n} = 3$ und $\frac{n!}{(n + 1)!} = \frac{1}{n + 1}$.'
  - '$\frac{3}{n + 1} < 1$ gilt genau für $n > 2$. Was passiert bei $n = 1$ und $n = 2$?'
loesung: |
  Ansatz: Alle Glieder sind positiv, und der Term enthält Potenz und Fakultät. Deshalb ist die Quotientenmethode geeignet.
  ---
  a) $\frac{a_{n+1}}{a_n} = \frac{3^{n+1}}{(n + 1)!}\cdot\frac{n!}{3^n} = \frac{3}{n + 1}$.
  ---
  b) $\frac{3}{n + 1} < 1 \iff n > 2$. Also gilt $a_{n+1} < a_n$ ab $n = 3$. Bei $n = 2$ ist der Quotient $1$, also $a_3 = a_2$. Bei $n = 1$ ist er $\frac32$, also $a_2 > a_1$.
  ---
  c) Glieder: $a_1 = 3$, $a_2 = \frac92 = 4{,}5$, $a_3 = \frac{27}{6} = 4{,}5$, $a_4 = \frac{81}{24} = 3{,}375$. Der größte Wert ist $4{,}5$, angenommen bei $n = 2$ und $n = 3$. Danach fällt die Folge streng.
```

:::beispiel[Äquivalenzumformung]
Gegeben ist $a_n = \dfrac{n}{n^2 + 1}$ mit den Gliedern $\frac12;\ \frac25;\ \frac{3}{10};\ \dots$ Vermutung: streng monoton fallend.

**Schritt 1, Behauptung hinschreiben.** Zu zeigen ist $a_{n+1} < a_n$, also
$$\frac{n + 1}{(n + 1)^2 + 1} < \frac{n}{n^2 + 1}.$$

**Schritt 2, Nenner beseitigen.** Beide Nenner sind positiv. Multiplizieren mit positiven Zahlen ist in beide
Richtungen erlaubt und ändert das Zeichen nicht:
$$(n + 1)(n^2 + 1) < n\big((n + 1)^2 + 1\big).$$

**Schritt 3, ausmultiplizieren.** Links steht $n^3 + n^2 + n + 1$. Rechts steht $n(n^2 + 2n + 2) = n^3 + 2n^2 + 2n$.

**Schritt 4, vereinfachen.** Wir ziehen die linke Seite ab: $0 < n^2 + n - 1$.

**Schritt 5, Schluss.** Für $n \ge 1$ ist $n^2 + n - 1 \ge 1 + 1 - 1 = 1 > 0$. Die letzte Aussage ist also wahr. Weil
jeder Schritt umkehrbar war, ist auch die Behauptung aus Schritt 1 wahr. Die Folge ist streng monoton fallend.
:::

**Warum „umkehrbar“ so wichtig ist:** Wir sind von der Behauptung ausgegangen und bei etwas Wahrem gelandet. Das
beweist nur dann etwas, wenn man den Weg auch rückwärts gehen kann. Multiplizieren mit einer positiven Zahl und
Addieren kann man immer rückgängig machen. Quadrieren dagegen nur, wenn beide Seiten nichtnegativ sind.

```aufgabe
id: gf-mono-aequivalenz
titel: Erst steigend, dann fallend
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  Gegeben ist $a_n = \dfrac{n}{n^2 + 4}$ für $n \ge 1$.

  a) Für welche $n$ gilt $a_{n+1} \le a_n$? Gib das kleinste solche $n$ an.

  b) Welchen größten Wert nimmt die Folge an?

  c) Begründe a) mit einer Äquivalenzumformung.
teile:
  - typ: zahl
    label: 'a) kleinstes $n$'
    loesung: "2"
    fehler:
      - wert: "1"
        meldung: |
          Setze ein: $a_1 = \frac15 = 0{,}2$ und $a_2 = \frac28 = 0{,}25$. Hier ist $a_2 > a_1$, die Folge steigt also zuerst.
  - typ: zahl
    label: 'b) größter Wert'
    loesung: "2/8"
    anzeige: '\tfrac14'
    fehler:
      - wert: "1/5"
        meldung: |
          Das ist $a_1$. Die Folge fällt aber nicht von Anfang an. Vergleiche mit $a_2$.
  - typ: text
    label: 'c) Begründung'
    muster: |
      $a_{n+1} \le a_n \iff \frac{n + 1}{(n + 1)^2 + 4} \le \frac{n}{n^2 + 4} \iff (n + 1)(n^2 + 4) \le n\big((n + 1)^2 + 4\big)$,
      weil beide Nenner positiv sind. Ausmultipliziert: $n^3 + n^2 + 4n + 4 \le n^3 + 2n^2 + 5n \iff 0 \le n^2 + n - 4$.
      Für $n = 1$ ist $n^2 + n - 4 = -2 < 0$, für $n \ge 2$ ist $n^2 + n - 4 \ge 2 > 0$. Also fällt die Folge ab $n = 2$,
      und $a_2 = \frac14$ ist das größte Glied.
hinweise:
  - 'Berechne $a_1$, $a_2$ und $a_3$, um eine Vermutung zu bekommen.'
  - 'Schreib $a_{n+1} \le a_n$ hin, multipliziere mit den beiden positiven Nennern und vereinfache, bis eine quadratische Ungleichung in $n$ dasteht.'
loesung: |
  Ansatz: Die ersten Glieder $a_1 = 0{,}2$, $a_2 = 0{,}25$, $a_3 = \frac{3}{13} \approx 0{,}23$ legen nahe: erst steigend, dann fallend. Wir prüfen $a_{n+1} \le a_n$ mit einer Äquivalenzumformung.
  ---
  Mit den positiven Nennern multiplizieren: $(n + 1)(n^2 + 4) \le n(n^2 + 2n + 5)$. Ausmultipliziert: $n^3 + n^2 + 4n + 4 \le n^3 + 2n^2 + 5n$.
  ---
  Vereinfacht: $0 \le n^2 + n - 4$. Für $n = 1$ falsch ($-2$), für $n = 2$ wahr ($2$), und für größere $n$ wird $n^2 + n - 4$ noch größer.
  ---
  a) Ab $n = 2$ gilt $a_{n+1} \le a_n$. b) Der größte Wert ist $a_2 = \frac14$. Kontrolle: $a_4 = \frac{4}{20} = 0{,}2 < 0{,}25$ ✓.
```

:::beispiel[Vollständige Induktion bei einer rekursiven Folge]
Gegeben ist $a_1 = 2$ und $a_{n+1} = \dfrac{a_n + 8}{3}$. Die Glieder sind $2;\ \frac{10}{3} \approx 3{,}33;\ \frac{34}{9} \approx 3{,}78;\ \dots$
Es gibt keinen Term für $a_n$. Deshalb beweisen wir zuerst eine Schranke und daraus die Monotonie.

**Teil 1, Schranke $a_n < 4$ für alle $n$, mit vollständiger Induktion** (siehe [Kapitel 8](/lernen/mathe3/folgen-reihen/vollstaendige-induktion)).

- *Induktionsanfang:* $a_1 = 2 < 4$ ✓.
- *Induktionsschritt:* Angenommen, $a_n < 4$ gilt für ein $n$. Dann ist $a_n + 8 < 12$, also $a_{n+1} = \frac{a_n + 8}{3} < \frac{12}{3} = 4$ ✓.

**Teil 2, Monotonie mit der Differenz.** $a_{n+1} - a_n = \frac{a_n + 8}{3} - a_n = \frac{a_n + 8 - 3a_n}{3} = \frac{8 - 2a_n}{3}$.
Nach Teil 1 ist $a_n < 4$, also $2a_n < 8$ und damit $8 - 2a_n > 0$. Die Folge ist streng monoton wachsend.

**Was haben wir gezeigt?** Die Folge wächst und bleibt unter $4$. Dass sie dann einen Grenzwert hat, zeigt
[11.11 Monotoniekriterium und Vollständigkeit von ℝ](/lernen/mathe3/grenzwerte-folgen/monotoniekriterium-und-vollstaendigkeit-von).
:::

```aufgabe
id: gf-mono-gefuehrt
titel: Monotonie und Schranken Schritt für Schritt
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Gegeben ist $a_n = \dfrac{5n - 3}{2n + 1}$ für $n \ge 1$.
  Untersuche die Folge auf Monotonie und gib die größte untere sowie die kleinste obere Schranke an.
teile:
  - typ: auswahl
    label: 'Monotonie'
    optionen:
      - 'streng monoton wachsend'
      - 'streng monoton fallend'
      - 'nicht monoton'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Berechne $a_1 = \frac23$ und $a_2 = \frac75$. Das zweite Glied ist größer.
  - typ: zahl
    label: 'größte untere Schranke'
    loesung: "2/3"
    anzeige: '\tfrac23'
    fehler:
      - wert: "0"
        meldung: |
          $0$ ist zwar eine untere Schranke, aber nicht die **größte**. Bei einer wachsenden Folge ist das erste Glied die größte untere Schranke.
  - typ: zahl
    label: 'kleinste obere Schranke'
    loesung: "5/2"
    anzeige: '\tfrac52'
    fehler:
      - wert: "5"
        meldung: |
          Der Leitkoeffizient des Nenners ist $2$. Der Grenzwert und damit die kleinste obere Schranke ist $\frac52$.
hinweise:
  - 'Berechne $a_{n+1} - a_n$ mit $a_{n+1} = \frac{5n + 2}{2n + 3}$.'
  - 'Für die obere Schranke berechne $\frac52 - a_n$ und zeige, dass es positiv ist und beliebig klein wird.'
gefuehrt:
  - text: Wie lautet $a_{n+1}$ als Term in $n$?
    teil:
      typ: term
      variable: n
      bereich: [1, 10]
      loesung: "(5n+2)/(2n+3)"
      fehler:
        - wert: "(5n+2)/(2n+1)"
          meldung: 'Auch im Nenner wird $n$ durch $n + 1$ ersetzt: $2(n + 1) + 1 = 2n + 3$.'
    erklaerung: '$a_{n+1} = \frac{5(n + 1) - 3}{2(n + 1) + 1} = \frac{5n + 2}{2n + 3}$.'
  - text: Berechne den Zähler von $a_{n+1} - a_n = \frac{(5n + 2)(2n + 1) - (5n - 3)(2n + 3)}{(2n + 1)(2n + 3)}$.
    teil:
      typ: zahl
      loesung: "11"
      fehler:
        - wert: "-11"
          meldung: '$(5n + 2)(2n + 1) = 10n^2 + 9n + 2$ und $(5n - 3)(2n + 3) = 10n^2 + 9n - 9$. Die Differenz ist $2 - (-9)$.'
        - wert: "-7"
          meldung: 'Beim zweiten Produkt ist das konstante Glied $(-3)\cdot 3 = -9$. Es wird abgezogen, also $2 - (-9)$.'
    erklaerung: 'Der Zähler ist $11$. Also $a_{n+1} - a_n = \frac{11}{(2n + 1)(2n + 3)}$.'
  - text: Überlege, warum $a_{n+1} - a_n$ für **jedes** $n \ge 1$ positiv ist.
    erklaerung: 'Der Zähler $11$ ist positiv, und für $n \ge 1$ sind $2n + 1$ und $2n + 3$ positiv. Ein Bruch aus positiven Zahlen ist positiv. Die Folge wächst streng.'
  - text: Berechne $\frac52 - a_n$ als Bruch in $n$.
    teil:
      typ: term
      variable: n
      bereich: [1, 10]
      loesung: "11/(2(2n+1))"
      fehler:
        - wert: "1/(2(2n+1))"
          meldung: 'Das Minus vor $2(5n - 3)$ gilt für beide Summanden: $5(2n + 1) - 2(5n - 3) = 10n + 5 - 10n + 6$.'
    erklaerung: '$\frac52 - a_n = \frac{5(2n + 1) - 2(5n - 3)}{2(2n + 1)} = \frac{11}{2(2n + 1)} > 0$. Also $a_n < \frac52$, und weil der Bruch beliebig klein wird, ist $\frac52$ die kleinste obere Schranke.'
loesung: |
  Ansatz: Monotonie mit der Differenzmethode, weil $a_n$ ein Bruch aus Polynomen ist. Danach die Schranken aus der Monotonie und aus dem Abstand zum Grenzwert.
  ---
  $a_{n+1} - a_n = \frac{(5n + 2)(2n + 1) - (5n - 3)(2n + 3)}{(2n + 1)(2n + 3)} = \frac{11}{(2n + 1)(2n + 3)} > 0$ für alle $n \ge 1$. Die Folge ist streng monoton wachsend.
  ---
  Untere Schranke: Wegen der Monotonie ist $a_n \ge a_1 = \frac23$. Das ist ein Glied der Folge, also die größte untere Schranke (Minimum).
  ---
  Obere Schranke: $\frac52 - a_n = \frac{11}{2(2n + 1)} > 0$, also $a_n < \frac52$. Der Abstand wird beliebig klein, deshalb ist $\frac52$ die kleinste obere Schranke. Sie wird nicht angenommen.
  ---
  Antwort: streng monoton wachsend mit $\frac23 \le a_n < \frac52$. Kontrolle: $a_4 = \frac{17}{9} \approx 1{,}89$ liegt zwischen den Schranken ✓.
```

### Schranken, Supremum und Infimum

Eine beschränkte Folge hat viele Schranken. Die Folge $2 - \frac1n$ liegt unter $2$, also auch unter $3$, unter $10$ und
unter $1000$. Interessant ist die **beste** obere Schranke, also die kleinste.

:::definition[Supremum und Infimum]
Die **kleinste obere Schranke** einer nach oben beschränkten Folge heißt **Supremum**, geschrieben $\sup a_n$. Die
**größte untere Schranke** einer nach unten beschränkten Folge heißt **Infimum**, geschrieben $\inf a_n$. Ist das
Supremum selbst ein Glied der Folge, heißt es auch **Maximum**. Ist das Infimum ein Glied, heißt es **Minimum**.
:::

Die Wörter kommen aus dem Lateinischen: *supremum* heißt „das Oberste“, *infimum* „das Unterste“.

- **Beispiel:** $a_n = 2 - \frac1n$ hat das Supremum $2$. Kein Glied erreicht $2$, also gibt es kein Maximum. Das Infimum
  ist $a_1 = 1$, und weil es ein Glied ist, ist es zugleich das Minimum.
- **Nicht-Beispiel:** $3$ ist eine obere Schranke von $2 - \frac1n$, aber **nicht** das Supremum. Die kleinere Zahl $2$ ist
  ebenfalls eine obere Schranke.

Um zu zeigen, dass eine Zahl $S$ das Supremum ist, braucht man **zwei** Dinge:

1. $S$ ist eine obere Schranke: $a_n \le S$ für alle $n$.
2. Keine kleinere Zahl ist eine obere Schranke: Zu jedem $\varepsilon > 0$ gibt es ein Glied $a_n > S - \varepsilon$.

Für monotone Folgen ist das einfach. Bei einer **wachsenden** Folge ist das erste Glied das Minimum. Das
Supremum ist der Grenzwert, falls die Folge konvergiert. Bei einer fallenden Folge ist es umgekehrt.

:::beispiel[Schranken begründen]
Wir nehmen wieder $a_n = \frac{3n - 1}{n + 1}$. Aus dem Beispiel zur Differenzmethode wissen wir: Die Folge wächst streng.

**Untere Schranke:** Wegen der Monotonie ist $a_n \ge a_1 = 1$ für alle $n$. Weil $a_1$ ein Glied ist, ist $1$ das Minimum.

**Obere Schranke:** Wir berechnen den Abstand zur vermuteten Schranke $3$:
$$3 - a_n = \frac{3(n + 1) - (3n - 1)}{n + 1} = \frac{3n + 3 - 3n + 1}{n + 1} = \frac{4}{n + 1} > 0.$$
Also ist $a_n < 3$ für alle $n$.

**$3$ ist das Supremum:** Der Abstand $\frac{4}{n + 1}$ wird beliebig klein. Zu jedem $\varepsilon > 0$ gibt es also ein Glied
mit $a_n > 3 - \varepsilon$. Keine Zahl unter $3$ ist eine obere Schranke. Kein Glied erreicht $3$, also gibt es kein Maximum.

**Zusammengefasst:** $1 \le a_n < 3$. Die Darstellung $a_n = 3 - \frac{4}{n + 1}$ zeigt alles auf einen Blick: Von $3$ wird
eine positive, fallende Nullfolge abgezogen.
:::

```plot
x: [0, 15.5]
y: [0.5, 3.3]
achsen: { x: "n", y: "aₙ" }
graphen:
  - { f: "3", farbe: 1, gestrichelt: true, label: "Supremum 3" }
  - { f: "1", farbe: 2, gestrichelt: true, label: "Minimum 1" }
punkte:
  - { x: 1, y: 1.0, farbe: 2 }
  - { x: 2, y: 1.6667, farbe: 0 }
  - { x: 3, y: 2.0, farbe: 0 }
  - { x: 4, y: 2.2, farbe: 0 }
  - { x: 5, y: 2.3333, farbe: 0 }
  - { x: 6, y: 2.4286, farbe: 0 }
  - { x: 7, y: 2.5, farbe: 0 }
  - { x: 8, y: 2.5556, farbe: 0 }
  - { x: 9, y: 2.6, farbe: 0 }
  - { x: 10, y: 2.6364, farbe: 0 }
  - { x: 11, y: 2.6667, farbe: 0 }
  - { x: 12, y: 2.6923, farbe: 0 }
  - { x: 13, y: 2.7143, farbe: 0 }
  - { x: 14, y: 2.7333, farbe: 0 }
  - { x: 15, y: 2.75, farbe: 0 }
beschriftung: Die Folge aₙ = (3n − 1)/(n + 1) wächst streng. Das erste Glied 1 ist das Minimum (grün). Die Glieder kommen der gestrichelten Linie 3 beliebig nahe, erreichen sie aber nie. 3 ist das Supremum, aber kein Maximum.
```

:::tipp[Zerlegung in Grenzwert plus Rest]
Bei Folgen der Form $\frac{pn + q}{rn + s}$ hilft eine Zerlegung $a_n = \frac{p}{r} + \frac{c}{rn + s}$ mit einer Konstanten $c$. Man
findet $c$, indem man $a_n - \frac pr$ auf einen Bruch bringt. Am Vorzeichen von $c$ siehst du sofort alles: Ist $c < 0$,
wächst die Folge von unten gegen $\frac pr$. Ist $c > 0$, fällt sie von oben gegen $\frac pr$. Für $\frac{3n - 1}{n + 1}$ ist $c = -4$.
:::

:::achtung[Beschränkt, aber ohne Schranke]
Falsch: Auf die Frage „Ist die Folge nach oben beschränkt? Begründen Sie.“ antwortet jemand: „Ja, denn sie hat einen
Grenzwert.“

Richtig: Die Begründung stimmt, denn jede konvergente Folge ist beschränkt. Sie nennt aber keine Schranke, und die
Prüfung erwartet meistens eine. Besser: „Ja. Es gilt $3 - a_n = \frac{4}{n + 1} > 0$, also $a_n < 3$ für alle $n$. Die
kleinste obere Schranke ist $3$.“ Gib also immer eine konkrete Zahl an und begründe sie mit einer Rechnung.
:::

:::merke[Rezept: Eine Folge vollständig untersuchen]
1. **Erste Glieder** berechnen und eine **Vermutung** über die Monotonie aufschreiben.
2. **Monotonie beweisen**, meist mit der Differenz $a_{n+1} - a_n$. Das Vorzeichen für **alle** $n$ begründen.
3. **Grenzwert** bestimmen, bei Brüchen durch die höchste Nennerpotenz dividieren.
4. **Schranken:** Bei wachsender Folge ist $a_1$ das Minimum. Den Abstand zum Grenzwert berechnen, etwa $g - a_n$, und sein Vorzeichen zeigen.
5. **Antwortsatz** mit konkreten Schranken, zum Beispiel „$1 \le a_n < 3$, also beschränkt“.
:::

```aufgabe
id: gf-supremum
titel: Infimum und Supremum
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Die Folge $a_n = 5 - \dfrac{6}{n + 2}$ ist streng monoton wachsend. Bestimme $\inf a_n$ und $\sup a_n$.
  Welcher der beiden Werte wird von einem Folgenglied angenommen?
teile:
  - typ: zahl
    label: 'Infimum'
    loesung: "5 - 6/3"
    anzeige: '3'
    fehler:
      - wert: "5"
        meldung: |
          $5$ ist die obere Grenze, der sich die Glieder nähern. Bei einer **wachsenden** Folge ist das kleinste Glied das erste.
      - wert: "0"
        meldung: |
          $0$ ist zwar eine untere Schranke, aber nicht die größte. Berechne das erste Glied $a_1$.
  - typ: zahl
    label: 'Supremum'
    loesung: "5"
    fehler:
      - wert: "3"
        meldung: |
          $3 = a_1$ ist das kleinste Glied. Gesucht ist die kleinste Zahl, die kein Glied übersteigt.
  - typ: auswahl
    label: 'Angenommen wird'
    optionen:
      - 'nur das Infimum (es ist ein Minimum)'
      - 'nur das Supremum (es ist ein Maximum)'
      - 'beide'
      - 'keiner'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Kann $5 - \frac{6}{n + 2}$ jemals genau $5$ sein? Dafür müsste $\frac{6}{n + 2} = 0$ sein.
      - wert: 2
        meldung: |
          Das Supremum $5$ wird nie erreicht, weil immer eine positive Zahl $\frac{6}{n + 2}$ abgezogen wird.
hinweise:
  - 'Bei einer wachsenden Folge ist das erste Glied das kleinste. Wogegen strebt $\frac{6}{n + 2}$?'
loesung: |
  Ansatz: Die Folge wächst. Also ist das erste Glied das Infimum, und das Supremum ist der Wert, dem sich die Glieder von unten nähern.
  ---
  Infimum: $a_1 = 5 - \frac63 = 3$. Es ist ein Glied, also ein Minimum.
  ---
  Supremum: $\frac{6}{n + 2} > 0$ und $\frac{6}{n + 2} \to 0$. Alle Glieder sind kleiner als $5$, kommen $5$ aber beliebig nahe. Das Supremum ist $5$, es wird nicht angenommen. Antwort: Nur das Infimum ist ein Glied.
```

```aufgabe
id: gf-mono-schranke-wahl
titel: Welche Zahlen sind obere Schranken?
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Gegeben ist $a_n = 4 - \dfrac{1}{n}$. Welche der Zahlen sind **obere Schranken** der Folge?
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$4$'
      - '$5$'
      - '$3{,}99$'
      - '$100$'
    richtig: [0, 1, 3]
    fehler:
      - wert: [1, 3]
        meldung: |
          Auch $4$ ist eine obere Schranke. Verlangt ist $a_n \le S$, und kein Glied ist größer als $4$. Dass $4$ nie erreicht wird, stört nicht.
      - wert: [0, 1, 2, 3]
        meldung: |
          $3{,}99$ ist keine obere Schranke. Für $n = 1000$ ist $a_{1000} = 3{,}999$, und das ist größer als $3{,}99$.
      - wert: [0]
        meldung: |
          Jede Zahl, die größer als eine obere Schranke ist, ist ebenfalls eine obere Schranke. Auch $5$ und $100$ liegen über allen Gliedern.
hinweise:
  - 'Eine obere Schranke $S$ muss $a_n \le S$ für **alle** $n$ erfüllen. Teste große $n$.'
loesung: |
  Ansatz: Für jede Zahl prüfen wir, ob sie über allen Gliedern liegt. Alle Glieder sind kleiner als $4$, weil immer $\frac1n > 0$ abgezogen wird.
  ---
  $4$, $5$ und $100$ sind obere Schranken. $3{,}99$ nicht, denn $a_{1000} = 3{,}999 > 3{,}99$. Die kleinste obere Schranke, das Supremum, ist $4$.
```

```aufgabe
id: gf-mono-fehler
titel: Fehler im Monotoniebeweis finden
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  Ein Mitschüler untersucht $a_n = \dfrac{2n + 7}{n + 1}$ und schreibt:
  „$a_{n+1} - a_n = \dfrac{2n + 9}{n + 1} - \dfrac{2n + 7}{n + 1} = \dfrac{2}{n + 1} > 0$. Also ist die Folge streng monoton wachsend.“

  a) Wo liegt der Fehler?

  b) Berechne $a_{n+1} - a_n$ richtig als Bruch in $n$.
teile:
  - typ: auswahl
    label: 'a)'
    optionen:
      - 'Er hat beim Bilden von $a_{n+1}$ den Nenner nicht verändert.'
      - 'Er hat sich beim Zähler verrechnet, $2(n + 1) + 7$ ist nicht $2n + 9$.'
      - 'Ein Bruch mit positivem Zähler ist nicht immer positiv.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          $2(n + 1) + 7 = 2n + 2 + 7 = 2n + 9$. Der Zähler stimmt. Schau auf den Nenner.
      - wert: 2
        meldung: |
          Für $n \ge 1$ ist $n + 1$ positiv, dann ist $\frac{2}{n + 1}$ tatsächlich positiv. Der Fehler passiert früher.
  - typ: term
    label: 'b) $a_{n+1} - a_n =$'
    variable: n
    bereich: [1, 10]
    loesung: "-5/((n+1)(n+2))"
    fehler:
      - wert: "2/(n+1)"
        meldung: |
          Das ist die Rechnung des Mitschülers. Es ist $a_{n+1} = \frac{2n + 9}{n + 2}$, der gemeinsame Nenner ist $(n + 1)(n + 2)$.
      - wert: "5/((n+1)(n+2))"
        meldung: |
          Prüfe das Vorzeichen: $(2n + 9)(n + 1) - (2n + 7)(n + 2) = (2n^2 + 11n + 9) - (2n^2 + 11n + 14)$.
hinweise:
  - 'Ersetze in $a_n$ **jedes** $n$ durch $n + 1$.'
  - 'Bring $\frac{2n + 9}{n + 2} - \frac{2n + 7}{n + 1}$ auf den gemeinsamen Nenner $(n + 1)(n + 2)$.'
loesung: |
  Ansatz: Wir bilden $a_{n+1}$ neu. Dabei wird auch das $n$ im Nenner ersetzt: $a_{n+1} = \frac{2n + 9}{n + 2}$.
  ---
  a) Der Fehler: Der Nenner von $a_{n+1}$ müsste $n + 2$ sein, nicht $n + 1$.
  ---
  b) $a_{n+1} - a_n = \frac{(2n + 9)(n + 1) - (2n + 7)(n + 2)}{(n + 1)(n + 2)} = \frac{2n^2 + 11n + 9 - 2n^2 - 11n - 14}{(n + 1)(n + 2)} = \frac{-5}{(n + 1)(n + 2)}$.
  ---
  Die Folge ist also streng monoton **fallend**, das Gegenteil der Behauptung. Probe: $a_1 = \frac92 = 4{,}5$ und $a_2 = \frac{11}{3} \approx 3{,}67$ ✓.
```

```reflexion
frage: Warum muss man im Monotoniebeweis das Vorzeichen von $a_{n+1} - a_n$ für **alle** $n$ begründen und nicht nur für einige?
antwort: |
  „Monoton wachsend“ ist eine Aussage über jedes Paar aufeinanderfolgender Glieder. Ein einziges Paar mit $a_{n+1} < a_n$
  widerlegt sie. Die Folge $n^2 \cdot 0{,}8^n$ zeigt, dass die ersten Glieder täuschen können: Sie wächst bis $n = 9$ und fällt danach.
  Erst ein Term wie $\frac{4}{(n + 1)(n + 2)}$, dessen Vorzeichen man für jedes $n \ge 1$ ablesen kann, deckt unendlich viele
  Fälle auf einmal ab.
```

```aufgabe
id: gf-mono-induktion
titel: Schranke und Monotonie per Induktion
niveau: 3
lernziel: 5
kompetenz: begruenden
angabe: |
  Gegeben ist die rekursive Folge $a_1 = 0$, $a_{n+1} = \dfrac{2a_n + 6}{3}$.

  a) Berechne $a_3$.

  b) Zeige mit vollständiger Induktion, dass $0 \le a_n < 6$ für alle $n$ gilt.

  c) Zeige mit b), dass die Folge streng monoton wachsend ist.
teile:
  - typ: zahl
    label: 'a) $a_3$'
    loesung: "(2*((2*0 + 6)/3) + 6)/3"
    anzeige: '\tfrac{10}{3}'
    fehler:
      - wert: "2"
        meldung: |
          $2$ ist $a_2$. Wende die Rekursion noch einmal an: $a_3 = \frac{2 \cdot 2 + 6}{3}$.
      - wert: "6"
        meldung: |
          Du hast nur die $6$ durch $3$ geteilt: $2\cdot 2 + \frac63 = 6$. Der Bruchstrich gilt aber für den ganzen Zähler $2a_2 + 6 = 10$. Also $a_3 = \frac{10}{3}$.
  - typ: text
    label: 'b) und c)'
    muster: |
      b) Induktionsanfang: $a_1 = 0$, und $0 \le 0 < 6$ ✓. Induktionsschritt: Gilt $0 \le a_n < 6$, dann ist
      $6 \le 2a_n + 6 < 18$, also $2 \le a_{n+1} < 6$, insbesondere $0 \le a_{n+1} < 6$ ✓.

      c) $a_{n+1} - a_n = \frac{2a_n + 6}{3} - a_n = \frac{6 - a_n}{3}$. Nach b) ist $a_n < 6$, also $6 - a_n > 0$. Damit ist
      $a_{n+1} > a_n$ für alle $n$, die Folge wächst streng.
hinweise:
  - 'b) Im Induktionsschritt aus $0 \le a_n < 6$ Schritt für Schritt eine Abschätzung für $2a_n + 6$ und dann für $a_{n+1}$ machen.'
  - 'c) Bring $a_{n+1} - a_n$ auf einen Bruch und verwende die Schranke aus b) für das Vorzeichen.'
loesung: |
  Ansatz: Für $a_n$ gibt es keinen Term. Deshalb zeigen wir die Schranke mit Induktion und benutzen sie dann für das Vorzeichen der Differenz.
  ---
  a) $a_2 = \frac{0 + 6}{3} = 2$, $a_3 = \frac{4 + 6}{3} = \frac{10}{3} \approx 3{,}33$.
  ---
  b) Anfang: $0 \le a_1 = 0 < 6$ ✓. Schritt: Aus $0 \le a_n < 6$ folgt durch Multiplizieren mit $2$ und Addieren von $6$: $6 \le 2a_n + 6 < 18$. Teilen durch $3$: $2 \le a_{n+1} < 6$ ✓.
  ---
  c) $a_{n+1} - a_n = \frac{2a_n + 6 - 3a_n}{3} = \frac{6 - a_n}{3}$. Wegen $a_n < 6$ ist das positiv. Die Folge wächst streng.
  ---
  Kontrolle: $0 < 2 < 3{,}33 < \frac{38}{9} \approx 4{,}22$, alle unter $6$ ✓. Die Folge wächst und ist beschränkt. In [11.11 Monotoniekriterium und Vollständigkeit von ℝ](/lernen/mathe3/grenzwerte-folgen/monotoniekriterium-und-vollstaendigkeit-von) folgt daraus, dass sie konvergiert.
```

```aufgabe
id: gf-mono-pruefung-stil
titel: Eine Folge vollständig untersuchen
niveau: 3
lernziel: 5
kompetenz: anwenden
angabe: |
  Gegeben ist $a_n = \dfrac{6n + 1}{3n - 1}$ für $n \ge 1$.

  a) Gib $a_1$ und $a_2$ an und stelle eine Vermutung über die Monotonie auf.

  b) Beweise die Monotonie.

  c) Ist die Folge nach oben und nach unten beschränkt? Gib die kleinste obere und die größte untere Schranke an und begründe.

  d) Bestimme den Grenzwert.
teile:
  - typ: zahl
    label: 'a) $a_1$'
    loesung: "7/2"
    anzeige: '\tfrac72'
    fehler:
      - wert: "7/4"
        meldung: |
          Im Nenner steht $3n - 1$. Für $n = 1$ ist das $2$, nicht $4$.
  - typ: zahl
    label: 'a) $a_2$'
    loesung: "13/5"
    anzeige: '\tfrac{13}{5}'
    fehler:
      - wert: "13/7"
        meldung: |
          Für $n = 2$ ist der Nenner $3 \cdot 2 - 1 = 5$.
  - typ: auswahl
    label: 'a) Vermutung'
    optionen:
      - 'streng monoton wachsend'
      - 'streng monoton fallend'
      - 'nicht monoton'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          $a_1 = 3{,}5$ und $a_2 = 2{,}6$. Das zweite Glied ist kleiner.
  - typ: zahl
    label: 'c) kleinste obere Schranke'
    loesung: "7/2"
    anzeige: '\tfrac72'
    fehler:
      - wert: "2"
        meldung: |
          $2$ ist der Grenzwert, dem sich die Glieder **von oben** nähern. Bei einer fallenden Folge ist das erste Glied die kleinste obere Schranke.
  - typ: zahl
    label: 'c) größte untere Schranke'
    loesung: "2"
    fehler:
      - wert: "0"
        meldung: |
          $0$ ist eine untere Schranke, aber nicht die größte. Wogegen strebt die fallende Folge?
  - typ: zahl
    label: 'd) Grenzwert'
    loesung: "2"
    fehler:
      - wert: "-1"
        meldung: |
          Du hast die Konstanten $\frac{1}{-1}$ verglichen. Entscheidend sind die Zahlen vor $n$: $\frac63$.
  - typ: text
    label: 'b) und c) Begründung'
    muster: |
      b) $a_{n+1} = \frac{6n + 7}{3n + 2}$. $a_{n+1} - a_n = \frac{(6n + 7)(3n - 1) - (6n + 1)(3n + 2)}{(3n + 2)(3n - 1)}
      = \frac{(18n^2 + 15n - 7) - (18n^2 + 15n + 2)}{(3n + 2)(3n - 1)} = \frac{-9}{(3n + 2)(3n - 1)} < 0$ für alle $n \ge 1$,
      weil beide Nennerfaktoren positiv sind. Also streng monoton fallend.

      c) Wegen der Monotonie ist $a_n \le a_1 = \frac72$ (Maximum). $a_n - 2 = \frac{6n + 1 - 2(3n - 1)}{3n - 1} = \frac{3}{3n - 1} > 0$,
      also $a_n > 2$. Weil $\frac{3}{3n - 1} \to 0$, ist $2$ die größte untere Schranke; sie wird nicht angenommen. Also $2 < a_n \le \frac72$.
hinweise:
  - 'b) Bilde $a_{n+1} = \frac{6n + 7}{3n + 2}$ und die Differenz $a_{n+1} - a_n$ auf gemeinsamem Nenner.'
  - 'c) und d): Zerlege $a_n = 2 + \frac{3}{3n - 1}$. Daran siehst du Grenzwert und untere Schranke. Die obere Schranke liefert die Monotonie.'
loesung: |
  Ansatz: Wir gehen nach dem Rezept vor: Glieder, Vermutung, Differenzmethode, Schranken über Monotonie und Abstand zum Grenzwert.
  ---
  a) $a_1 = \frac72 = 3{,}5$, $a_2 = \frac{13}{5} = 2{,}6$, $a_3 = \frac{19}{8} \approx 2{,}38$. Vermutung: streng monoton fallend.
  ---
  b) $a_{n+1} = \frac{6n + 7}{3n + 2}$. Zähler der Differenz: $(6n + 7)(3n - 1) - (6n + 1)(3n + 2) = (18n^2 + 15n - 7) - (18n^2 + 15n + 2) = -9$. Also $a_{n+1} - a_n = \frac{-9}{(3n + 2)(3n - 1)} < 0$ für alle $n \ge 1$: streng monoton fallend.
  ---
  c) Oben: $a_n \le a_1 = \frac72$, und $a_1$ ist ein Glied, also die kleinste obere Schranke. Unten: $a_n - 2 = \frac{3}{3n - 1} > 0$, also $a_n > 2$. Der Abstand wird beliebig klein, deshalb ist $2$ die größte untere Schranke.
  ---
  d) Durch $n$ dividieren: $\frac{6 + \frac1n}{3 - \frac1n} \to \frac63 = 2$.
  ---
  Antwort: Die Folge fällt streng, es gilt $2 < a_n \le \frac72$, und der Grenzwert ist $2$. Probe für b) mit $n = 1$: $a_2 - a_1 = \frac{13}{5} - \frac72 = -\frac{9}{10}$, und die Formel liefert $\frac{-9}{5 \cdot 2}$ ✓.
```

## Monotoniekriterium und Vollständigkeit von ℝ

```aufgabe
id: gf-mk-vorwissen
titel: Monoton und beschränkt?
niveau: 1
art: check
angabe: |
  Die Folge $a_n = 5 - \dfrac{2}{n}$ hat die Glieder $3;\ 4;\ 4{,}33;\ 4{,}5;\ \dots$ Welche Aussage stimmt?
  (Vorwissen aus [Kapitel 8, „Monotonie und Beschränktheit“](/lernen/mathe3/folgen-reihen/monotonie-und-beschraenktheit).)
teile:
  - typ: auswahl
    optionen:
      - 'Sie ist monoton wachsend und nach oben durch $5$ beschränkt.'
      - 'Sie ist monoton fallend, weil $\frac2n$ kleiner wird.'
      - 'Sie ist monoton wachsend und nach oben unbeschränkt.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          $\frac2n$ wird kleiner, aber es wird **abgezogen**. Wer weniger abzieht, behält mehr übrig. Vergleiche die ersten Glieder: $3$, dann $4$.
      - wert: 2
        meldung: |
          Von $5$ wird immer eine positive Zahl abgezogen. Kann ein Glied dann größer als $5$ werden?
hinweise:
  - 'Von $5$ wird eine positive Zahl abgezogen, die immer kleiner wird.'
loesung: |
  Der abgezogene Teil $\frac2n$ wird kleiner, also wird $a_n$ größer: Die Folge wächst.
  ---
  Weil $\frac2n > 0$ ist, gilt $a_n < 5$ für alle $n$. Die Zahl $5$ ist eine obere Schranke.
```

**Worum geht es in einem Satz?** Wir lernen ein Werkzeug, mit dem man beweisen kann, **dass** eine Folge einen
Grenzwert hat, auch wenn man diesen Grenzwert noch gar nicht kennt.

Bisher war es immer umgekehrt. Bei der $\varepsilon$-$N$-Definition musste der Kandidat $a$ schon bekannt sein. Erst
dann konnte man prüfen, ob der Abstand $|a_n - a|$ beliebig klein wird. Bei vielen wichtigen Folgen kennt man den
Grenzwert aber nicht im Voraus. Ein Beispiel ist $\left(1 + \frac1n\right)^n$. Mit dieser Folge wird die Eulersche Zahl
$e$ überhaupt erst **definiert**. Ein anderes Beispiel sind rekursive Folgen, bei denen jedes Glied aus dem vorigen
berechnet wird.

### Das Monotoniekriterium

Zuerst ein Bild. Stell dir einen Ballon in einer Halle vor. Er steigt immer nur nach oben, nie nach unten. Die
Hallendecke kann er aber nicht durchstoßen. Dann muss er sich irgendwann an einer bestimmten Höhe „stauen“: Er kommt
einer Höhe beliebig nahe, ohne sie zu überschreiten. Diese Höhe muss nicht die Decke selbst sein, sie kann auch darunter
liegen.

Zur Erinnerung die beiden Begriffe aus [Kapitel 8](/lernen/mathe3/folgen-reihen/monotonie-und-beschraenktheit):
**monoton wachsend** heißt, kein Glied ist kleiner als sein Vorgänger, also $a_{n+1} \ge a_n$ für alle $n$.
**Nach oben beschränkt** heißt, es gibt eine Zahl $S$ mit $a_n \le S$ für alle $n$. Diese Zahl $S$ heißt **obere
Schranke**. Die kleinste obere Schranke heißt **Supremum**, geschrieben $\sup a_n$. Sie ist die „wahre Decke“.

:::satz[Monotoniekriterium]
Jede monoton wachsende und nach oben beschränkte Folge ist konvergent. Ihr Grenzwert ist ihr Supremum $\sup a_n$.

Ebenso ist jede monoton fallende und nach unten beschränkte Folge konvergent. Ihr Grenzwert ist ihr Infimum
$\inf a_n$, also die größte untere Schranke.
:::

Kurz kann man sich merken: **monoton und beschränkt, daraus folgt konvergent.** Beide Eigenschaften sind nötig, und
die Beschränktheit muss in die „richtige“ Richtung gehen. Eine wachsende Folge braucht eine Schranke **nach oben**.

:::beispiel[Wann das Kriterium greift und wann nicht]
- $a_n = 5 - \frac2n$ wächst und bleibt unter $5$. Das Kriterium sagt: Sie konvergiert. Ihr Grenzwert ist $5$.
- $a_n = n$ wächst, ist aber nach oben **unbeschränkt**. Das Kriterium greift nicht. Die Folge divergiert tatsächlich.
- $a_n = (-1)^n$ ist beschränkt, denn $-1 \le a_n \le 1$. Sie ist aber **nicht monoton**, sie springt auf und ab.
  Das Kriterium greift nicht. Die Folge divergiert tatsächlich.
- $a_n = \frac{(-1)^n}{n}$ ist nicht monoton und konvergiert trotzdem gegen $0$. Das Kriterium ist also
  **hinreichend, aber nicht notwendig**. Es garantiert Konvergenz, wenn seine Voraussetzungen erfüllt sind. Fehlen
  sie, ist noch nichts entschieden.
:::

```aufgabe
id: gf-mk-voraussetzungen
titel: Darf man das Monotoniekriterium anwenden?
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  Von vier Folgen weißt du nur die folgenden Eigenschaften. Bei welchen garantiert das Monotoniekriterium, dass sie konvergieren?
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - 'Die Folge ist monoton wachsend, und alle Glieder sind kleiner als $10$.'
      - 'Die Folge ist monoton fallend, und alle Glieder sind positiv.'
      - 'Die Folge ist monoton wachsend, und alle Glieder sind positiv.'
      - 'Alle Glieder liegen zwischen $-1$ und $1$.'
    richtig: [0, 1]
    fehler:
      - wert: [0, 1, 2]
        meldung: |
          Eine wachsende Folge mit positiven Gliedern ist nur nach **unten** beschränkt. Das hilft nicht: Die Folge $a_n = n$ wächst, ist positiv und divergiert. Eine wachsende Folge braucht eine Schranke nach **oben**.
      - wert: [0, 1, 3]
        meldung: |
          Beschränkt allein reicht nicht. Die Folge $(-1)^n$ liegt zwischen $-1$ und $1$ und divergiert. Es fehlt die Monotonie.
      - wert: [0]
        meldung: |
          Auch die zweite Folge ist geeignet. Sie fällt und kann nicht unter $0$ fallen. Für eine fallende Folge braucht man genau eine Schranke nach **unten**.
hinweise:
  - 'Eine wachsende Folge braucht eine Decke (Schranke nach oben), eine fallende einen Boden (Schranke nach unten).'
loesung: |
  Ansatz: Das Kriterium verlangt **zwei** Dinge: Monotonie und eine Schranke in die Richtung, in die sich die Folge bewegt.
  ---
  Folge 1 wächst und hat die Decke $10$. Folge 2 fällt und hat den Boden $0$. Beide konvergieren nach dem Kriterium.
  ---
  Folge 3 wächst, hat aber nur einen Boden (Gegenbeispiel $a_n = n$). Folge 4 ist beschränkt, aber nicht als monoton bekannt (Gegenbeispiel $(-1)^n$). Richtig sind also die Optionen 1 und 2.
```

### Warum gilt das? Die Vollständigkeit der reellen Zahlen

Das Monotoniekriterium klingt selbstverständlich. Es ist es aber nicht. Es hängt davon ab, mit welchen Zahlen man
rechnet. In den rationalen Zahlen $\Q$, also den Brüchen, ist es **falsch**. Das zeigt das folgende Beispiel.

:::beispiel[Eine Folge aus Brüchen, die in ℚ keinen Grenzwert hat]
Wir betrachten die Dezimalnäherungen von $\sqrt2$ von unten:
$$a_1 = 1{,}4;\quad a_2 = 1{,}41;\quad a_3 = 1{,}414;\quad a_4 = 1{,}4142;\quad \dots$$
Jedes Glied ist eine abbrechende Dezimalzahl, also ein Bruch, zum Beispiel $1{,}41 = \frac{141}{100}$.

**Monoton:** Jedes Glied hängt nur eine Stelle an. Dadurch wird die Zahl nie kleiner. Die Folge wächst.

**Beschränkt:** Alle Glieder sind kleiner als $1{,}5$. Es ist also eine obere Schranke da.

**Aber:** Die Glieder nähern sich $\sqrt2$. Und $\sqrt2$ ist **kein** Bruch. Das hast du in
[Kapitel 1](/lernen/mathe3/zahlen/dezimaldarstellung-rationale-und-irrationale-zahlen) bewiesen. Wer nur Brüche kennt,
findet also keine Zahl, an der sich die Folge staut. An der Stelle von $\sqrt2$ hat $\Q$ ein „Loch“.
:::

Die reellen Zahlen $\R$ sind genau so gebaut, dass es diese Löcher nicht gibt. Diese Eigenschaft heißt
**Vollständigkeit**. Man kann sie nicht aus einfacheren Regeln beweisen. Man fordert sie als **Axiom**, also als
Grundannahme über die reellen Zahlen.

:::definition[Vollständigkeitsaxiom (Supremumsaxiom)]
Jede nichtleere, nach oben beschränkte Teilmenge von $\R$ besitzt ein Supremum in $\R$.
:::

In Worten: Wenn eine Menge reeller Zahlen eine Decke hat, dann gibt es auch eine **kleinste** Decke, und diese ist
wieder eine reelle Zahl. In $\Q$ gilt das nicht. Die Menge aller Brüche $x$ mit $x^2 < 2$ hat die Decke $2$. Ihre
kleinste Decke wäre aber $\sqrt 2$, und die gibt es in $\Q$ nicht.

```aufgabe
id: gf-mk-q-luecke
titel: Wo hat ℚ ein Loch?
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  Welche der folgenden Mengen von **Brüchen** hat innerhalb von $\Q$ **keine** kleinste obere Schranke?
teile:
  - typ: auswahl
    optionen:
      - 'alle Brüche $x$ mit $x < 3$'
      - 'alle Brüche $x$ mit $x^2 < 3$'
      - 'alle Brüche $x$ mit $x^2 < 4$'
      - 'die Brüche $1 - \frac1n$ für $n = 1, 2, 3, \dots$'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Die kleinste obere Schranke ist hier $3$, und $3 = \frac31$ ist ein Bruch. Diese Menge hat also ein Supremum in $\Q$.
      - wert: 2
        meldung: |
          Aus $x^2 < 4$ folgt $-2 < x < 2$. Die kleinste obere Schranke ist $2$, und $2$ ist ein Bruch.
      - wert: 3
        meldung: |
          Die Glieder $1 - \frac1n$ nähern sich $1$ von unten. Die kleinste obere Schranke ist $1$, und das ist ein Bruch.
hinweise:
  - 'Bestimme bei jeder Menge die kleinste obere Schranke und prüfe, ob sie ein Bruch ist.'
loesung: |
  Ansatz: Eine Menge hat in $\Q$ kein Supremum, wenn ihre kleinste obere Schranke eine irrationale Zahl ist.
  ---
  Die Suprema sind $3$, $\sqrt3$, $2$ und $1$. Nur $\sqrt 3$ ist kein Bruch.
  ---
  Antwort: Die Menge der Brüche mit $x^2 < 3$ hat in $\Q$ keine kleinste obere Schranke. In $\R$ hat sie eine, nämlich $\sqrt 3$.
```

### Der Beweis des Monotoniekriteriums

**Worum geht es in einem Satz?** Wir zeigen: Bei einer wachsenden Folge mit Decke ist die kleinste Decke $S$ der
Grenzwert.

Das Vollständigkeitsaxiom liefert uns die Zahl $S$. Wir müssen nur noch die $\varepsilon$-$N$-Definition prüfen. Die
entscheidende Idee steckt im Wort „kleinste“: Senkt man die Decke $S$ um ein noch so kleines Stück $\varepsilon$ ab,
dann ist $S - \varepsilon$ **keine** Decke mehr. Mindestens ein Glied ragt darüber hinaus.

:::beweis[Beweis des Monotoniekriteriums (wachsender Fall)]
**Schritt 1, der Kandidat.** Die Folge $(a_n)$ sei monoton wachsend und nach oben beschränkt. Nach dem
Vollständigkeitsaxiom hat die Menge ihrer Glieder ein Supremum $S$. Wir zeigen, dass $S$ der Grenzwert ist.

**Schritt 2, ein Glied über der abgesenkten Decke.** Sei $\varepsilon > 0$ beliebig. Weil $S$ die **kleinste** obere
Schranke ist, ist $S - \varepsilon$ keine obere Schranke mehr. Also gibt es ein Glied mit $a_N > S - \varepsilon$.
Seinen Index nennen wir $N$.

**Schritt 3, alle späteren Glieder.** Die Folge wächst. Für jedes $n \ge N$ ist also $a_n \ge a_N > S - \varepsilon$.
Außerdem ist $S$ eine obere Schranke, also $a_n \le S$. Zusammen gilt $S - \varepsilon < a_n \le S$.

**Schritt 4, der Abstand.** Aus $S - \varepsilon < a_n \le S$ folgt $|a_n - S| < \varepsilon$ für alle $n \ge N$. Genau
das verlangt die Definition. Also ist $\lim a_n = S$.
:::

**Was haben wir gezeigt?** Zu jeder Toleranz $\varepsilon$ gibt es eine Stelle $N$, ab der alle Glieder höchstens
$\varepsilon$ unter der kleinsten Decke liegen. Die Monotonie sorgt dafür, dass kein späteres Glied wieder absinkt.

**Typisches Missverständnis:** „Der Grenzwert ist die obere Schranke.“ Das stimmt nur für die **kleinste** obere
Schranke. Die Folge $5 - \frac2n$ ist auch durch $100$ beschränkt, ihr Grenzwert ist aber $5$.

```reflexion
frage: Im Beweis wird an einer einzigen Stelle die Vollständigkeit von $\R$ gebraucht. Wo genau, und was ginge in $\Q$ schief?
antwort: |
  In Schritt 1: Dort liefert das Vollständigkeitsaxiom die Zahl $S$, das Supremum der Glieder. Alle späteren Schritte
  benutzen nur noch die Definition des Supremums und die Monotonie. In $\Q$ gibt es diese Zahl $S$ manchmal nicht.
  Bei den Näherungen $1{,}4;\ 1{,}41;\ 1{,}414;\ \dots$ wäre das Supremum $\sqrt 2$, und das ist kein Bruch. Dann gibt es in
  $\Q$ keinen Kandidaten, und die Folge hat in $\Q$ keinen Grenzwert.
```

### Anwendung: Die Eulersche Zahl e

Die Folge $e_n = \left(1 + \frac1n\right)^n$ ist das wichtigste Beispiel für eine Folge, deren Grenzwert man vorher
nicht kennt. Hier sind einige Glieder, mit dem Taschenrechner berechnet:

- $e_1 = 2$, $e_2 = 2{,}25$, $e_3 \approx 2{,}3704$, $e_4 \approx 2{,}4414$,
- $e_{10} \approx 2{,}5937$, $e_{100} \approx 2{,}7048$, $e_{1000} \approx 2{,}7169$, $e_{1\,000\,000} \approx 2{,}71828$.

Die Glieder wachsen, aber immer langsamer. Bevor du weiterliest, sag eine Vorhersage.

```aufgabe
id: gf-mk-e-vorhersage
titel: Was passiert mit (1 + 1/n)ⁿ?
niveau: 1
art: check
angabe: |
  In $\left(1 + \frac1n\right)^n$ geht die Basis gegen $1$, der Exponent wächst über jede Grenze.
  **Was passiert mit den Gliedern, wenn $n$ sehr groß wird?**
teile:
  - typ: auswahl
    optionen:
      - 'Sie gehen gegen $1$, weil $1$ hoch irgendetwas immer $1$ ist.'
      - 'Sie wachsen über jede Grenze, weil der Exponent über jede Grenze wächst.'
      - 'Sie nähern sich einer festen Zahl zwischen $2$ und $3$.'
    richtig: [2]
    fehler:
      - wert: 0
        meldung: |
          Die Basis ist **nie genau** $1$, sondern immer etwas größer. Schon $e_{10} \approx 2{,}59$ ist weit weg von $1$. Der Ausdruck „$1^\infty$“ ist unbestimmt.
      - wert: 1
        meldung: |
          Der Exponent wächst, aber die Basis rückt gleichzeitig an $1$ heran. Die beiden Effekte halten sich die Waage. Sieh dir die Werte für $n = 100$ und $n = 1000$ an.
hinweise:
  - 'Vergleiche $e_{100} \approx 2{,}7048$ und $e_{1000} \approx 2{,}7169$.'
loesung: |
  Die Glieder wachsen immer langsamer: $2;\ 2{,}25;\ \dots;\ 2{,}7048;\ 2{,}7169$.
  ---
  Sie stauen sich bei einer Zahl knapp über $2{,}7$. Das ist die Eulersche Zahl $e \approx 2{,}71828$.
```

```widget
name: folge
titel: Die Folge (1 + 1/n)ⁿ nähert sich e
props:
  a: "(1+1/n)^n"
  grenzwert: 2.718281828
  n_max: 100
  epsilon: 0.05
```

**Arbeitsauftrag:** **Beobachte**, wie die Punkte im Widget steigen und sich unter der Linie $e$ sammeln. Stelle
$\varepsilon = 0{,}05$ und dann $\varepsilon = 0{,}02$ ein und lies das kleinste $N$ ab. **Erkläre** danach: Kein Punkt
liegt über der Linie, und die Punkte steigen immer. Genau diese zwei Beobachtungen, Monotonie und eine Schranke, braucht
das Monotoniekriterium.

:::satz[Die Eulersche Zahl]
Die Folge $e_n = \left(1 + \frac1n\right)^n$ ist streng monoton wachsend und durch $3$ nach oben beschränkt. Nach dem
Monotoniekriterium konvergiert sie. Ihren Grenzwert nennt man die **Eulersche Zahl** $e \approx 2{,}71828$.
:::

:::beweis[Beweisskizze (Vertiefung)]
**Schranke $3$.** Man multipliziert $\left(1 + \frac1n\right)^n$ mit dem binomischen Lehrsatz aus. Der Summand mit
$\frac{1}{n^k}$ ist $\binom nk \frac{1}{n^k} = \frac{n(n-1)\cdots(n-k+1)}{n\cdot n\cdots n}\cdot\frac{1}{k!}$. Der erste Bruch ist
höchstens $1$, weil jeder Faktor oben höchstens $n$ ist. Also ist jeder Summand höchstens $\frac{1}{k!}$. Für $k \ge 1$ ist
außerdem $\frac{1}{k!} \le \frac{1}{2^{k-1}}$, denn $k! = 1\cdot 2\cdot 3\cdots k$ enthält mindestens $k - 1$ Faktoren, die
mindestens $2$ sind. Damit ist
$$e_n \le 1 + 1 + \frac12 + \frac14 + \frac18 + \dots < 1 + 2 = 3.$$
Die letzte Summe ist eine geometrische Summe mit Quotient $\frac12$. Ihre Teilsummen bleiben unter $2$.

**Monotonie.** Mit der Bernoulli-Ungleichung aus [Kapitel 8, „Induktion bei Teilbarkeit, Ungleichungen und Rekursionen“](/lernen/mathe3/folgen-reihen/induktion-bei-teilbarkeit-ungleichungen-und-rekursionen)
zeigt man $\frac{e_n}{e_{n-1}} > 1$ für alle $n \ge 2$. Die Rechnung ist länger und für die Prüfung nicht verlangt.
:::

:::achtung[„1 hoch unendlich ist 1“]
Falsch: „$\left(1 + \frac1n\right)^n \to 1^\infty = 1$, weil die Basis gegen $1$ geht.“

Richtig: Man darf nicht zuerst die Basis durch ihren Grenzwert ersetzen und danach den Exponenten wachsen lassen. Beide
ändern sich **gleichzeitig**. Eine Probe zeigt den Fehler sofort: $e_{10} = 1{,}1^{10} \approx 2{,}5937$ ist weit größer
als $1$. Ausdrücke vom Typ „$1^\infty$“ sind unbestimmt. Ihr Grenzwert muss jedes Mal eigens untersucht werden.
:::

### Anwendung: Rekursive Folgen

Bei einer **rekursiven Folge** ist jedes Glied aus dem vorigen berechnet, zum Beispiel $a_{n+1} = \sqrt{2 + a_n}$. Eine
Formel für $a_n$ direkt hat man nicht. Das Monotoniekriterium ist dann oft der einzige Weg, um Konvergenz zu beweisen.

:::beispiel[Eine Wurzelrekursion]
Gegeben ist $a_1 = 1$ und $a_{n+1} = \sqrt{2 + a_n}$. Die ersten Glieder sind
$1;\ 1{,}7321;\ 1{,}9319;\ 1{,}9829;\ 1{,}9957;\ \dots$ Sie scheinen zu wachsen und sich der $2$ zu nähern.

**Schritt 1, Schranke mit Induktion: $0 < a_n < 2$ für alle $n$.** Die vollständige Induktion kennst du aus
[Kapitel 8](/lernen/mathe3/folgen-reihen/vollstaendige-induktion).
- *Anfang:* $a_1 = 1$ liegt zwischen $0$ und $2$.
- *Schritt:* Angenommen, $0 < a_n < 2$. Dann ist $2 + a_n < 4$. Die Wurzelfunktion wächst, also ist
  $a_{n+1} = \sqrt{2 + a_n} < \sqrt 4 = 2$. Außerdem ist die Wurzel einer positiven Zahl positiv, also $a_{n+1} > 0$.

**Schritt 2, Monotonie.** Wir wollen $a_{n+1} > a_n$ zeigen. Beide Seiten sind positiv. Deshalb dürfen wir quadrieren,
ohne dass sich etwas ändert:
$$a_{n+1} > a_n \iff 2 + a_n > a_n^2 \iff a_n^2 - a_n - 2 < 0 \iff (a_n - 2)(a_n + 1) < 0.$$
Nach Schritt 1 ist $a_n - 2 < 0$ und $a_n + 1 > 0$. Ein Produkt aus einer negativen und einer positiven Zahl ist negativ.
Also stimmt die letzte Ungleichung, und damit auch die erste. Die Folge wächst streng.

**Schritt 3, Grenzwert.** Die Folge wächst und hat die Decke $2$. Nach dem Monotoniekriterium hat sie einen Grenzwert $a$.
Mit $a_n$ geht auch $a_{n+1}$ gegen $a$, denn es ist dieselbe Folge, nur um eine Stelle verschoben. Wir lassen in
$a_{n+1} = \sqrt{2 + a_n}$ auf beiden Seiten $n$ gegen unendlich gehen und erhalten die **Fixpunktgleichung**
$a = \sqrt{2 + a}$. Quadrieren ergibt $a^2 - a - 2 = 0$, also $a = 2$ oder $a = -1$. Alle Glieder sind positiv, deshalb
kann der Grenzwert nicht negativ sein. Also ist $a = 2$.
:::

```plot
x: [0, 9.5]
y: [0.8, 2.2]
achsen: { x: "n", y: "aₙ" }
graphen:
  - { f: "2", farbe: 1, gestrichelt: true, label: "Decke 2 = Grenzwert" }
punkte:
  - { x: 1, y: 1.0000, farbe: 0 }
  - { x: 2, y: 1.7321, farbe: 0 }
  - { x: 3, y: 1.9319, farbe: 0 }
  - { x: 4, y: 1.9829, farbe: 0 }
  - { x: 5, y: 1.9957, farbe: 0 }
  - { x: 6, y: 1.9989, farbe: 0 }
  - { x: 7, y: 1.9997, farbe: 0 }
  - { x: 8, y: 1.9999, farbe: 0 }
  - { x: 9, y: 2.0000, farbe: 0 }
beschriftung: Die rekursive Folge a₁ = 1, aₙ₊₁ = √(2 + aₙ). Die Glieder steigen bei jedem Schritt und bleiben unter der gestrichelten Linie bei 2. Sie stauen sich an dieser Linie. Die Linie ist die kleinste obere Schranke und zugleich der Grenzwert.
```

:::merke[Rezept: Grenzwert einer rekursiven Folge]
1. **Schranke** zeigen, meist mit vollständiger Induktion.
2. **Monotonie** zeigen, meist mit der Differenz $a_{n+1} - a_n$ oder einer Äquivalenzumformung. Dabei darf man die Schranke aus Schritt 1 benutzen.
3. **Existenz:** Nach dem Monotoniekriterium gibt es einen Grenzwert $a$.
4. **Fixpunktgleichung:** In der Rekursion $a_{n+1}$ und $a_n$ durch $a$ ersetzen und lösen. Lösungen, die nicht zu den Schranken passen, streichen.
:::

:::achtung[Die Fixpunktgleichung ohne Existenzbeweis]
Falsch: „$a_1 = 1$ und $a_{n+1} = 2a_n$. Für den Grenzwert gilt $a = 2a$, also ist der Grenzwert $a = 0$.“

Richtig: Die Folge lautet $1, 2, 4, 8, 16, \dots$ und wächst über jede Grenze. Sie hat gar keinen Grenzwert. Die
Fixpunktgleichung sagt nur: **Falls** es einen Grenzwert gibt, dann erfüllt er $a = 2a$. Ob es einen gibt, muss man
vorher zeigen, zum Beispiel mit dem Monotoniekriterium. Ohne die Schritte 1 bis 3 ist Schritt 4 wertlos.
:::

:::achtung[Die falsche Lösung der Fixpunktgleichung behalten]
Falsch: „$a = \sqrt{2 + a}$ führt auf $a^2 - a - 2 = 0$ mit den Lösungen $2$ und $-1$. Also hat die Folge zwei
Grenzwerte, oder man kann sich einen aussuchen.“

Richtig: Eine Folge hat höchstens **einen** Grenzwert. Die Gleichung liefert nur Kandidaten. Alle Glieder sind positiv,
also ist auch der Grenzwert mindestens $0$. Damit fällt $-1$ weg. Außerdem erfüllt $-1$ die Gleichung $a = \sqrt{2 + a}$
gar nicht, denn $\sqrt{2 - 1} = 1 \neq -1$. Die Lösung $-1$ ist erst beim Quadrieren dazugekommen.
:::

### Das Heron-Verfahren: Konvergenz in ℝ, aber nicht in ℚ

:::beispiel[Das Heron-Verfahren für √2]
Die Rekursion $a_1 = 2$ und $a_{n+1} = \frac12\left(a_n + \frac{2}{a_n}\right)$ liefert:
$$a_2 = \frac12\left(2 + 1\right) = \frac32,\qquad a_3 = \frac12\left(\frac32 + \frac43\right) = \frac{17}{12} \approx 1{,}41667,\qquad a_4 = \frac{577}{408} \approx 1{,}4142157.$$
Man kann zeigen: Die Folge fällt ab $n = 1$ und bleibt über $\sqrt 2$. Nach dem Monotoniekriterium hat sie einen
Grenzwert $a > 0$. Die Fixpunktgleichung $a = \frac12\left(a + \frac2a\right)$ wird nach Multiplikation mit $2a$ zu
$2a^2 = a^2 + 2$, also $a^2 = 2$ und $a = \sqrt 2$.

**Das Bemerkenswerte:** Jedes Glied ist ein Bruch, denn Brüche aus Brüchen sind wieder Brüche. Der Grenzwert $\sqrt 2$
ist aber keiner. In $\Q$ hätte diese Folge keinen Grenzwert, obwohl ihre Glieder immer enger zusammenrücken. Das ist die
Unvollständigkeit von $\Q$, diesmal an einer rekursiven Folge.
:::

Das Heron-Verfahren ist übrigens das Newton-Verfahren aus
[Kapitel 9](/lernen/mathe3/differentialrechnung/das-newton-verfahren-gleichungen-naeherungsweise-loesen) für die Gleichung $x^2 - 2 = 0$. Die Zahl der
richtigen Nachkommastellen verdoppelt sich ungefähr bei jedem Schritt.

```aufgabe
id: gf-rekursiv-linear
titel: Eine lineare Rekursion
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Gegeben ist $a_1 = 0$ und $a_{n+1} = \frac12 a_n + 3$.

  a) Berechne $a_4$.

  b) Die Folge ist monoton wachsend und durch $6$ nach oben beschränkt. Das darfst du verwenden. Bestimme den Grenzwert.
teile:
  - typ: zahl
    label: 'a) $a_4$'
    loesung: "0.5*(0.5*(0.5*0 + 3) + 3) + 3"
    anzeige: '5{,}25'
    fehler:
      - wert: "4.5"
        meldung: |
          Das ist $a_3$. Zähle mit: $a_1 = 0$ ist das erste Glied, dann kommen $a_2$, $a_3$ und erst danach $a_4$.
      - wert: "5.625"
        meldung: |
          Das ist schon $a_5$. Du hast einen Schritt zu viel gerechnet.
  - typ: zahl
    label: 'b) Grenzwert'
    loesung: "6"
    fehler:
      - wert: "3"
        meldung: |
          Aus $a = \frac12 a + 3$ folgt zuerst $\frac12 a = 3$. Du musst noch mit $2$ multiplizieren, um $a$ allein zu bekommen.
hinweise:
  - 'a) Rechne Schritt für Schritt: $a_2 = \frac12\cdot 0 + 3$, dann $a_3$, dann $a_4$.'
  - 'b) Nach dem Monotoniekriterium gibt es einen Grenzwert $a$. Ersetze in der Rekursion $a_{n+1}$ und $a_n$ durch $a$.'
loesung: |
  Ansatz: Für a) rechnen wir die Rekursion Schritt für Schritt. Für b) benutzen wir das Rezept: Existenz zuerst, dann die Fixpunktgleichung.
  ---
  a) $a_2 = 0 + 3 = 3$, $a_3 = 1{,}5 + 3 = 4{,}5$, $a_4 = 2{,}25 + 3 = 5{,}25$.
  ---
  b) Die Folge wächst und hat die Decke $6$. Nach dem Monotoniekriterium hat sie einen Grenzwert $a$, und auch $a_{n+1}$ geht gegen $a$. Fixpunktgleichung: $a = \frac12 a + 3$, also $\frac12 a = 3$ und $a = 6$.
  ---
  Probe: Der Abstand $6 - a_n$ ist $6;\ 3;\ 1{,}5;\ 0{,}75$. Er halbiert sich bei jedem Schritt, wird also beliebig klein ✓.
```

```aufgabe
id: gf-heron
titel: Heron-Verfahren für √5
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Gegeben ist $a_1 = 2$ und $a_{n+1} = \frac12\left(a_n + \frac{5}{a_n}\right)$.

  a) Berechne $a_2$ und $a_3$ (als Bruch oder auf 6 Nachkommastellen).

  b) Bestimme den Grenzwert. Du darfst verwenden, dass er existiert und positiv ist.
teile:
  - typ: zahl
    label: 'a) $a_2$'
    loesung: "(2 + 5/2)/2"
    anzeige: '\tfrac94 = 2{,}25'
    fehler:
      - wert: "4.5"
        meldung: |
          $2 + \frac52 = 4{,}5$ ist die Klammer. Davor steht aber noch der Faktor $\frac12$.
  - typ: zahl
    label: 'a) $a_3$'
    loesung: "(9/4 + 5/(9/4))/2"
    anzeige: '\tfrac{161}{72} \approx 2{,}236111'
    toleranz: 0.00001
    fehler:
      - wert: "(9/4 + 5*9/4)/2"
        meldung: |
          $\frac{5}{9/4}$ heißt: $5$ geteilt durch $\frac94$. Durch einen Bruch teilt man, indem man mit dem Kehrwert $\frac49$ multipliziert.
  - typ: zahl
    label: 'b) Grenzwert'
    loesung: "sqrt(5)"
    anzeige: '\sqrt5 \approx 2{,}236068'
    fehler:
      - wert: "-sqrt(5)"
        meldung: |
          Die Gleichung $a^2 = 5$ hat zwei Lösungen. Alle Glieder sind aber positiv. Welche Lösung passt dann?
hinweise:
  - 'a) $a_3 = \frac12\left(\frac94 + \frac{20}{9}\right)$, denn $\frac{5}{9/4} = \frac{20}{9}$.'
  - 'b) Fixpunktgleichung $a = \frac12\left(a + \frac5a\right)$ mit $2a$ multiplizieren.'
loesung: |
  Ansatz: In a) setzen wir in die Rekursion ein. In b) lösen wir die Fixpunktgleichung, weil der Grenzwert laut Angabe existiert.
  ---
  a) $a_2 = \frac12\left(2 + \frac52\right) = \frac12\cdot\frac92 = \frac94 = 2{,}25$.
  ---
  $a_3 = \frac12\left(\frac94 + \frac{20}{9}\right) = \frac12\cdot\frac{81 + 80}{36} = \frac{161}{72} \approx 2{,}236111$.
  ---
  b) $a = \frac12\left(a + \frac5a\right)$. Mit $2a$ multiplizieren: $2a^2 = a^2 + 5$, also $a^2 = 5$. Weil $a > 0$ ist, folgt $a = \sqrt5 \approx 2{,}236068$.
  ---
  Plausibilität: Schon $a_3$ stimmt auf vier Nachkommastellen mit $\sqrt5$ überein. Das Verfahren konvergiert sehr schnell.
```

```aufgabe
id: gf-mk-gefuehrt
titel: Eine Wurzelrekursion Schritt für Schritt
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Gegeben ist $a_1 = 1$ und $a_{n+1} = \sqrt{3a_n}$. Man kann zeigen, dass die Folge wächst und durch $3$ nach oben beschränkt ist.
  Bestimme den Grenzwert.
teile:
  - typ: zahl
    label: 'Grenzwert'
    loesung: "3"
    fehler:
      - wert: "0"
        meldung: |
          $0$ löst zwar die Fixpunktgleichung $a = \sqrt{3a}$. Die Folge beginnt aber bei $1$ und wächst. Kann ihr Grenzwert kleiner als $1$ sein?
hinweise:
  - 'Nach dem Monotoniekriterium existiert ein Grenzwert $a$. Er erfüllt $a = \sqrt{3a}$.'
  - 'Quadrieren ergibt $a^2 = 3a$. Prüfe, welche Lösung zu einer wachsenden Folge mit $a_1 = 1$ passt.'
gefuehrt:
  - text: Berechne $a_2$ auf drei Nachkommastellen.
    teil:
      typ: zahl
      loesung: "sqrt(3)"
      toleranz: 0.001
      fehler:
        - wert: "3"
          meldung: 'Du hast die Wurzel vergessen. $a_2 = \sqrt{3\cdot 1} = \sqrt3$.'
    erklaerung: '$a_2 = \sqrt{3\cdot 1} = \sqrt 3 \approx 1{,}732$. Das Glied ist größer als $a_1 = 1$, die Folge wächst also am Anfang.'
  - text: Warum darfst du jetzt eine Fixpunktgleichung aufstellen? Überlege, bevor du weiterklickst.
    erklaerung: 'Die Folge wächst und hat die Decke $3$. Nach dem Monotoniekriterium hat sie einen Grenzwert $a$. Erst diese Existenz erlaubt es, in der Rekursion $a_{n+1}$ und $a_n$ durch $a$ zu ersetzen.'
  - text: Die Fixpunktgleichung $a = \sqrt{3a}$ wird durch Quadrieren zu $a^2 = 3a$. Gib alle Lösungen an.
    teil:
      typ: menge
      loesung: ["0", "3"]
      fehler:
        - wert: ["3"]
          meldung: 'Beim Kürzen durch $a$ geht eine Lösung verloren. Schreib $a^2 - 3a = a(a - 3) = 0$.'
    erklaerung: '$a^2 - 3a = 0$ heißt $a(a - 3) = 0$. Ein Produkt ist null, wenn ein Faktor null ist: $a = 0$ oder $a = 3$.'
  - text: Welche der beiden Lösungen ist der Grenzwert?
    teil:
      typ: zahl
      loesung: "3"
      fehler:
        - wert: "0"
          meldung: 'Die Folge beginnt bei $1$ und wächst. Alle Glieder sind mindestens $1$, also ist auch der Grenzwert mindestens $1$.'
    erklaerung: 'Alle Glieder sind mindestens $a_1 = 1$. Der Grenzwert kann deshalb nicht $0$ sein. Er ist $3$.'
loesung: |
  Ansatz: Rezept für rekursive Folgen. Schranke und Monotonie sind laut Angabe bekannt, also existiert nach dem Monotoniekriterium ein Grenzwert $a$.
  ---
  Fixpunktgleichung: $a = \sqrt{3a}$. Quadrieren: $a^2 = 3a$, also $a(a - 3) = 0$ mit den Lösungen $a = 0$ und $a = 3$.
  ---
  Die Folge wächst ab $a_1 = 1$, also sind alle Glieder mindestens $1$. Deshalb ist $a \ge 1$, und $0$ fällt weg. Der Grenzwert ist $3$.
  ---
  Kontrolle mit Zahlen: $1;\ 1{,}732;\ 2{,}280;\ 2{,}615;\ 2{,}801;\ \dots;\ a_9 \approx 2{,}987$. Die Glieder nähern sich langsam der $3$ ✓.
```

```aufgabe
id: gf-mk-fixpunkt-falle
titel: Fehler finden bei einer Rekursion
niveau: 3
lernziel: 6
kompetenz: begruenden
angabe: |
  Eine Mitschülerin untersucht $a_1 = 3$ und $a_{n+1} = 3a_n - 4$. Sie schreibt:

  „Für den Grenzwert gilt $a = 3a - 4$, also $2a = 4$ und $a = 2$. Die Folge konvergiert gegen $2$.“

  a) Berechne $a_4$.

  b) Was ist an ihrer Begründung falsch?
teile:
  - typ: zahl
    label: 'a) $a_4$'
    loesung: "3*(3*(3*3 - 4) - 4) - 4"
    anzeige: '29'
    fehler:
      - wert: "11"
        meldung: |
          Das ist $a_3$. Rechne noch einen Schritt weiter: $a_4 = 3\cdot a_3 - 4$.
      - wert: "2"
        meldung: |
          $2$ ist die Lösung ihrer Gleichung, aber kein Glied der Folge. Rechne die Glieder wirklich aus: $a_2 = 3\cdot 3 - 4$.
  - typ: auswahl
    label: 'b)'
    optionen:
      - 'Sie hat die Fixpunktgleichung benutzt, ohne vorher zu zeigen, dass ein Grenzwert existiert. Die Folge divergiert.'
      - 'Sie hat die Gleichung $a = 3a - 4$ falsch gelöst.'
      - 'Nichts, die Folge konvergiert gegen $2$.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Die Gleichung ist richtig gelöst: Aus $a = 3a - 4$ folgt $a = 2$. Der Fehler liegt **davor**. Wann darf man diese Gleichung überhaupt aufstellen?
      - wert: 2
        meldung: |
          Sieh dir die Glieder aus a) an: $3, 5, 11, 29, \dots$ Werden die Abstände zu $2$ kleiner?
hinweise:
  - 'a) $a_2 = 3\cdot 3 - 4 = 5$. Rechne zwei weitere Schritte.'
  - 'b) Die Fixpunktgleichung sagt nur: **Falls** es einen Grenzwert gibt, dann erfüllt er diese Gleichung. Prüfe mit den Gliedern aus a), ob es einen gibt.'
loesung: |
  Ansatz: Wir rechnen zuerst die Glieder aus. So sehen wir, ob die Folge überhaupt zur Ruhe kommt.
  ---
  a) $a_2 = 9 - 4 = 5$, $a_3 = 15 - 4 = 11$, $a_4 = 33 - 4 = 29$.
  ---
  b) Die Glieder $3, 5, 11, 29, \dots$ wachsen über jede Grenze. Die Folge hat keinen Grenzwert. Die Fixpunktgleichung hätte nur dann etwas bedeutet, wenn die Existenz vorher bewiesen worden wäre.
  ---
  Antwort: Die Begründung ist falsch, weil der Existenznachweis fehlt. Die Zahl $2$ ist nur ein „Gleichgewicht“: Würde man mit $a_1 = 2$ starten, bliebe die Folge konstant $2$. Von $3$ aus entfernt sie sich davon.
```

```aufgabe
id: gf-rekursiv-wurzel
titel: Konvergenz einer Wurzelrekursion beweisen
niveau: 3
lernziel: 6
kompetenz: begruenden
angabe: |
  Gegeben ist $a_1 = 1$ und $a_{n+1} = \sqrt{6 + a_n}$.

  a) Zeige mit vollständiger Induktion: $0 < a_n < 3$ für alle $n$.

  b) Zeige, dass die Folge streng monoton wachsend ist.

  c) Begründe, warum die Folge konvergiert, und berechne den Grenzwert.
teile:
  - typ: text
    label: 'a) und b)'
    muster: |
      a) Anfang: $0 < a_1 = 1 < 3$. Schritt: Gilt $0 < a_n < 3$, dann ist $6 < 6 + a_n < 9$. Die Wurzel wächst, also
      $\sqrt 6 < a_{n+1} < 3$ und insbesondere $0 < a_{n+1} < 3$.

      b) Beide Seiten sind positiv, also darf man quadrieren: $a_{n+1} > a_n$ ist gleichwertig mit $6 + a_n > a_n^2$, also mit
      $(a_n - 3)(a_n + 2) < 0$. Das stimmt, weil nach a) $a_n - 3 < 0$ und $a_n + 2 > 0$ ist.
  - typ: zahl
    label: 'c) Grenzwert'
    loesung: "3"
    fehler:
      - wert: "-2"
        meldung: |
          $-2$ löst die quadrierte Gleichung, aber alle Glieder sind positiv. Ein Grenzwert positiver Glieder ist nie negativ.
hinweise:
  - 'a) Im Induktionsschritt: Aus $a_n < 3$ folgt $6 + a_n < 9$. Was folgt für die Wurzel?'
  - 'b) Quadriere $a_{n+1} > a_n$ (beide Seiten positiv) und zerlege $a_n^2 - a_n - 6$ in zwei Faktoren. c) Monotoniekriterium, dann die Fixpunktgleichung $a = \sqrt{6 + a}$.'
loesung: |
  Ansatz: Das Rezept für rekursive Folgen in vier Schritten: Schranke, Monotonie, Existenz, Fixpunktgleichung.
  ---
  a) **Anfang:** $0 < a_1 = 1 < 3$. **Schritt:** Angenommen, $0 < a_n < 3$. Dann ist $6 < 6 + a_n < 9$. Weil die Wurzelfunktion wächst, folgt $\sqrt6 < a_{n+1} < \sqrt9 = 3$. Insbesondere ist $0 < a_{n+1} < 3$.
  ---
  b) $a_n$ und $a_{n+1}$ sind positiv. Quadrieren ist deshalb eine Äquivalenzumformung: $a_{n+1} > a_n$ gilt genau dann, wenn $6 + a_n > a_n^2$ gilt, also $a_n^2 - a_n - 6 < 0$, also $(a_n - 3)(a_n + 2) < 0$. Nach a) ist der erste Faktor negativ und der zweite positiv. Das Produkt ist negativ ✓.
  ---
  c) Die Folge wächst streng und hat die Decke $3$. Nach dem Monotoniekriterium hat sie einen Grenzwert $a$. Die Fixpunktgleichung $a = \sqrt{6 + a}$ wird durch Quadrieren zu $a^2 - a - 6 = 0$. Die Lösungen sind $a = 3$ und $a = -2$.
  ---
  Alle Glieder sind positiv, also ist $a \ge 0$. Der Grenzwert ist $3$. Kontrolle mit Zahlen: $1;\ 2{,}646;\ 2{,}940;\ 2{,}990;\ \dots$ ✓.
```

## Teilfolgen, Häufungspunkte und Cauchy-Folgen (Vertiefung)

```aufgabe
id: gf-tf-vorwissen
titel: Was heißt „fast alle“?
niveau: 1
art: check
angabe: |
  In der Kurzform der Grenzwertdefinition heißt es: „In jeder $\varepsilon$-Umgebung von $a$ liegen **fast alle** Glieder.“
  Was bedeutet „fast alle“? (Aus [11.2 Die ε-N-Definition des Grenzwerts](/lernen/mathe3/grenzwerte-folgen/die-epsilon-n-definition-des-grenzwerts).)
teile:
  - typ: auswahl
    optionen:
      - 'alle bis auf endlich viele'
      - 'unendlich viele'
      - 'mehr als die Hälfte'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          „Unendlich viele“ ist schwächer. Bei $0, 1, 0, 1, \dots$ liegen unendlich viele Glieder bei $0$, aber auch unendlich viele bei $1$, also **außerhalb** jedes kleinen Bandes um $0$.
      - wert: 2
        meldung: |
          Bei unendlich vielen Gliedern gibt es keine „Hälfte“. Gemeint ist: Außerhalb liegen nur endlich viele.
hinweise:
  - 'Denke an die Folge $0, 1, 0, 1, \dots$ und das Band um $0$.'
loesung: |
  „Fast alle“ heißt: Nur endlich viele Glieder liegen außerhalb.
  ---
  Gleichwertig: Ab einer Stelle $N$ liegen alle Glieder im Band.
```

**Worum geht es in einem Satz?** Wir schauen auf Folgen, die keinen Grenzwert haben, und fragen: Gibt es wenigstens
**Teile** der Folge, die einen Grenzwert haben?

Dieser Abschnitt geht über den SBP-Stoff hinaus. Er ist aber der Standardstoff zu Beginn jeder Analysis-Vorlesung. In
der mündlichen Prüfung kommt eine Frage daraus oft als Zusatzfrage: „Eine beschränkte Folge muss nicht konvergieren.
Was kann man trotzdem über sie sagen?“ Am Ende des Abschnitts kannst du diese Frage beantworten.

### Teilfolgen

Ein Bild: Eine Folge ist wie eine endlose Reihe von Zaunpfählen. Eine **Teilfolge** entsteht, wenn du nur manche Pfähle
anschaust, zum Beispiel jeden zweiten. Du darfst Pfähle auslassen. Du darfst aber nicht zurückgehen und keinen Pfahl
zweimal nehmen. Und du musst unendlich viele Pfähle nehmen.

:::definition[Teilfolge]
Es sei $(a_n)$ eine Folge und $n_1 < n_2 < n_3 < \dots$ eine streng wachsende Folge natürlicher Zahlen. Dann heißt die
Folge $(a_{n_k})_{k \in \N} = a_{n_1}, a_{n_2}, a_{n_3}, \dots$ eine **Teilfolge** von $(a_n)$.
:::

Dabei ist $n_k$ der Index des $k$-ten ausgewählten Glieds. Die neue Zählvariable heißt $k$. Zwei Zahlenbeispiele für
$a_n = \frac1n$:

- **Beispiel:** Jedes zweite Glied, also $n_k = 2k$. Die Teilfolge ist $a_2, a_4, a_6, \dots = \frac12, \frac14, \frac16, \dots$,
  also $a_{n_k} = \frac{1}{2k}$.
- **Beispiel:** Die Quadratzahl-Indizes, also $n_k = k^2$. Die Teilfolge ist $a_1, a_4, a_9, \dots = 1, \frac14, \frac19, \dots$
- **Nicht-Beispiel:** $a_2, a_1, a_4, a_3, \dots$ ist **keine** Teilfolge, weil die Indizes $2, 1, 4, 3$ nicht wachsen.
- **Nicht-Beispiel:** $a_1, a_1, a_2, a_2, \dots$ ist **keine** Teilfolge, weil der Index $1$ zweimal vorkommt.

```aufgabe
id: gf-tf-ist-teilfolge
titel: Ist das eine Teilfolge?
niveau: 1
lernziel: 7
kompetenz: verstehen
angabe: |
  Welche der folgenden Auswahlen sind Teilfolgen der Folge $(a_n)$?
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$a_3, a_6, a_9, a_{12}, \dots$'
      - '$a_1, a_1, a_2, a_3, a_4, \dots$'
      - '$a_1, a_{10}, a_{100}, a_{1000}, \dots$'
      - '$a_5, a_4, a_3, a_2, a_1$'
      - '$a_2, a_3, a_5, a_7, a_{11}, \dots$ (alle Primzahl-Indizes)'
    richtig: [0, 2, 4]
    fehler:
      - wert: [0, 2]
        meldung: |
          Auch die Primzahlen $2, 3, 5, 7, 11, \dots$ sind unendlich viele, streng wachsende Indizes. Die Lücken dürfen unregelmäßig sein.
      - wert: [0, 1, 2, 4]
        meldung: |
          In der zweiten Auswahl kommt der Index $1$ zweimal vor. Bei einer Teilfolge müssen die Indizes **streng** wachsen.
      - wert: [0, 2, 3, 4]
        meldung: |
          Die vierte Auswahl hat fallende Indizes und nur fünf Glieder. Eine Teilfolge braucht unendlich viele Glieder mit wachsenden Indizes.
hinweise:
  - 'Prüfe bei jeder Auswahl: Sind es unendlich viele Indizes, und wird jeder Index echt größer als der vorige?'
loesung: |
  Ansatz: Eine Teilfolge braucht eine **streng wachsende**, unendliche Folge von Indizes.
  ---
  Indizes $3, 6, 9, \dots$: streng wachsend ✓. Indizes $1, 10, 100, \dots$: streng wachsend ✓. Primzahlen $2, 3, 5, 7, 11, \dots$: streng wachsend und unendlich viele ✓.
  ---
  $1, 1, 2, \dots$: Der Index $1$ wiederholt sich ✗. $5, 4, 3, 2, 1$: fallend und endlich ✗. Richtig sind die Optionen 1, 3 und 5.
```

### Teilfolgen erben den Grenzwert

:::satz[Teilfolgen konvergenter Folgen]
Konvergiert $(a_n)$ gegen $a$, dann konvergiert auch **jede** Teilfolge von $(a_n)$ gegen $a$.
:::

**Worum geht es in einem Satz?** Wenn ab einer Stelle alle Glieder im Toleranzband liegen, dann liegen dort auch alle
ausgewählten Glieder. Das Auswählen kann Glieder nur weglassen, keine neuen dazuerfinden.

Für den Beweis brauchen wir eine kleine Hilfsaussage: **Es gilt $n_k \ge k$ für alle $k$.** Der $k$-te ausgewählte Index
ist also mindestens $k$. Das liegt daran, dass die Indizes bei jedem Schritt um mindestens $1$ wachsen. Es beginnt mit
$n_1 \ge 1$. Und wenn $n_k \ge k$ ist, dann ist $n_{k+1} > n_k \ge k$, also $n_{k+1} \ge k + 1$.

:::beweis
**Schritt 1, die Toleranz.** Sei $\varepsilon > 0$ beliebig. Weil $a_n \to a$ gilt, gibt es ein $N$, sodass
$|a_n - a| < \varepsilon$ für alle $n \ge N$ gilt.

**Schritt 2, die ausgewählten Glieder.** Sei $k \ge N$. Nach der Hilfsaussage ist $n_k \ge k \ge N$. Der Index $n_k$
liegt also ab der Stelle $N$.

**Schritt 3, der Abstand.** Für Indizes ab $N$ ist der Abstand zu $a$ kleiner als $\varepsilon$. Also ist
$|a_{n_k} - a| < \varepsilon$ für alle $k \ge N$. Das ist genau die Definition von $a_{n_k} \to a$.
:::

**Was haben wir gezeigt?** Dasselbe $N$, das für die ganze Folge funktioniert, funktioniert auch für jede Teilfolge.

Viel nützlicher ist die **Umkehrung als Werkzeug**. Wenn eine Folge zwei Teilfolgen mit verschiedenen Grenzwerten hat,
dann kann sie selbst nicht konvergieren. Sonst müssten nach dem Satz beide Teilfolgen gegen denselben Grenzwert gehen.

:::merke[Divergenzkriterium mit Teilfolgen]
Findet man zwei Teilfolgen von $(a_n)$, die gegen **verschiedene** Grenzwerte konvergieren, dann ist $(a_n)$ divergent.
Meist nimmt man die Glieder mit geradem Index und die Glieder mit ungeradem Index.
:::

:::beispiel[Divergenz mit zwei Teilfolgen beweisen]
Gegeben ist $a_n = (-1)^n\,\frac{n}{n + 1}$. Die ersten Glieder sind $-\frac12;\ \frac23;\ -\frac34;\ \frac45;\ \dots$

**Gerade Indizes**, also $n = 2k$: Dann ist $(-1)^{2k} = 1$, und $a_{2k} = \frac{2k}{2k + 1}$. Wir teilen Zähler und
Nenner durch $k$: $\frac{2}{2 + \frac1k}$. Weil $\frac1k \to 0$ geht, geht die Teilfolge gegen $\frac22 = 1$.

**Ungerade Indizes**, also $n = 2k - 1$: Dann ist $(-1)^{2k-1} = -1$, und $a_{2k-1} = -\frac{2k - 1}{2k}$. Diese Teilfolge
geht mit derselben Rechnung gegen $-1$.

**Schluss:** Die beiden Teilfolgen haben die Grenzwerte $1$ und $-1$. Diese sind verschieden. Nach dem
Divergenzkriterium ist $(a_n)$ divergent.
:::

```plot
x: [0, 12.5]
y: [-1.3, 1.3]
achsen: { x: "n", y: "aₙ" }
graphen:
  - { f: "1", farbe: 0, gestrichelt: true, label: "Häufungspunkt 1" }
  - { f: "-1", farbe: 3, gestrichelt: true, label: "Häufungspunkt −1" }
punkte:
  - { x: 1, y: -0.5000, farbe: 3 }
  - { x: 2, y: 0.6667, farbe: 0 }
  - { x: 3, y: -0.7500, farbe: 3 }
  - { x: 4, y: 0.8000, farbe: 0 }
  - { x: 5, y: -0.8333, farbe: 3 }
  - { x: 6, y: 0.8571, farbe: 0 }
  - { x: 7, y: -0.8750, farbe: 3 }
  - { x: 8, y: 0.8889, farbe: 0 }
  - { x: 9, y: -0.9000, farbe: 3 }
  - { x: 10, y: 0.9091, farbe: 0 }
  - { x: 11, y: -0.9167, farbe: 3 }
  - { x: 12, y: 0.9231, farbe: 0 }
beschriftung: Die Folge aₙ = (−1)ⁿ · n/(n + 1). Die Glieder mit geradem Index (blau) bilden eine Teilfolge, die sich der Linie bei 1 nähert. Die Glieder mit ungeradem Index (violett) nähern sich der Linie bei −1. Zwei verschiedene Grenzwerte von Teilfolgen beweisen, dass die ganze Folge divergiert.
```

:::achtung[Eine einzige konvergente Teilfolge beweist keine Konvergenz]
Falsch: „Die Teilfolge $a_{2k}$ von $a_n = (-1)^n\,\frac{n}{n+1}$ geht gegen $1$. Also konvergiert die Folge gegen $1$.“

Richtig: Der Satz gilt nur in eine Richtung. Aus der Konvergenz der **ganzen** Folge folgt die Konvergenz jeder Teilfolge.
Umgekehrt sagt eine einzelne Teilfolge nichts über die übrigen Glieder. Hier gehen die ungeraden Glieder gegen $-1$.
Zum Beispiel ist $a_{11} \approx -0{,}917$, also weit weg von $1$.
:::

```aufgabe
id: gf-tf-glieder
titel: Eine Teilfolge als Term
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Gegeben ist $a_n = \dfrac{3n - 1}{n}$. Gib die Teilfolge der Glieder mit geradem Index, also $a_{2k}$, als Term in $k$ an.
teile:
  - typ: term
    label: '$a_{2k} =$'
    variable: k
    bereich: [1, 10]
    loesung: "(6k-1)/(2k)"
    fehler:
      - wert: "(6k-1)/k"
        meldung: |
          Im Zähler hast du $2k$ eingesetzt, im Nenner nicht. Auch das $n$ im Nenner wird durch $2k$ ersetzt.
      - wert: "(3k-1)/(2k)"
        meldung: |
          Im Nenner hast du $2k$ eingesetzt, im Zähler nicht. Im Zähler wird aus $3n$ der Ausdruck $3\cdot 2k = 6k$.
hinweise:
  - 'Ersetze **jedes** $n$ durch $2k$.'
loesung: |
  Ansatz: Die Teilfolge mit geradem Index entsteht, wenn man überall $n = 2k$ einsetzt.
  ---
  $a_{2k} = \frac{3\cdot 2k - 1}{2k} = \frac{6k - 1}{2k}$. Probe mit $k = 1$: $a_2 = \frac{5}{2}$, und der Term liefert $\frac52$ ✓.
```

### Häufungspunkte

Bei der Folge $0, 1, 0, 1, \dots$ ist das Wort **Häufungspunkt** schon gefallen. Jetzt machen wir es genau. Der Unterschied
zum Grenzwert steckt in einem einzigen Wort: „unendlich viele“ statt „fast alle“.

:::definition[Häufungspunkt]
Eine Zahl $h$ heißt **Häufungspunkt** der Folge $(a_n)$, wenn in jeder $\varepsilon$-Umgebung von $h$ **unendlich
viele** Glieder der Folge liegen.

Gleichwertig: Es gibt eine Teilfolge von $(a_n)$, die gegen $h$ konvergiert.
:::

Vergleiche die beiden Begriffe direkt:

- **Grenzwert $a$:** In jedem Band um $a$ liegen **fast alle** Glieder. Außerhalb liegen nur endlich viele.
- **Häufungspunkt $h$:** In jedem Band um $h$ liegen **unendlich viele** Glieder. Außerhalb dürfen auch unendlich viele liegen.

Jeder Grenzwert ist also auch ein Häufungspunkt. Eine konvergente Folge hat sogar **genau einen** Häufungspunkt, nämlich
ihren Grenzwert. Das folgt aus dem Satz über Teilfolgen: Jede Teilfolge geht gegen $a$.

:::beispiel[Häufungspunkte bestimmen]
1. $a_n = (-1)^n\,\frac{n}{n+1}$ aus dem Beispiel „Divergenz mit zwei Teilfolgen beweisen“ hat die Häufungspunkte $1$ und $-1$. Sie hat keinen Grenzwert.
2. $0, 1, 0, 1, \dots$ hat die Häufungspunkte $0$ und $1$. Bei diesen beiden Zahlen ist das sogar besonders deutlich:
   Unendlich viele Glieder **sind** genau $0$, unendlich viele genau $1$.
3. **Ein Häufungspunkt, trotzdem divergent:** $c_n = n$ für ungerades $n$ und $c_n = 0$ für gerades $n$. Also
   $1, 0, 3, 0, 5, 0, \dots$ Die einzige Zahl, bei der sich Glieder häufen, ist $0$. Die Folge divergiert trotzdem, weil
   die ungeraden Glieder über jede Grenze wachsen. Ein einziger Häufungspunkt genügt also nicht für Konvergenz.
:::

```aufgabe
id: gf-tf-haeufungspunkte
titel: Häufungspunkte finden
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Bestimme alle Häufungspunkte der Folge $a_n = 2\cdot(-1)^n + \dfrac1n$. Gib sie durch Strichpunkt getrennt ein.
teile:
  - typ: menge
    label: 'Häufungspunkte'
    loesung: ["-2", "2"]
    fehler:
      - wert: ["2"]
        meldung: |
          Das ist nur der Häufungspunkt der geraden Glieder. Was machen die Glieder mit ungeradem Index?
      - wert: ["-1", "1"]
        meldung: |
          Du hast den Faktor $2$ vor $(-1)^n$ vergessen. Die Glieder springen zwischen der Nähe von $-2$ und der Nähe von $2$.
      - wert: ["0"]
        meldung: |
          Die Glieder springen hin und her, aber keines liegt in der Nähe von $0$. Ein Häufungspunkt ist kein Mittelwert, sondern eine Stelle, an der sich Glieder sammeln.
hinweise:
  - 'Trenne in gerade und ungerade Indizes. Was ist $(-1)^n$ jeweils?'
  - 'Bestimme den Grenzwert jeder der beiden Teilfolgen. Der Summand $\frac1n$ geht gegen $0$.'
loesung: |
  Ansatz: Wir zerlegen die Folge in zwei Teilfolgen, weil $(-1)^n$ nur von gerade oder ungerade abhängt.
  ---
  Gerade $n$: $a_n = 2 + \frac1n \to 2$. Ungerade $n$: $a_n = -2 + \frac1n \to -2$.
  ---
  Jede Teilfolge der Folge liegt schließlich in der Nähe von $2$ oder von $-2$. Andere Häufungspunkte gibt es nicht.
  ---
  Antwort: Die Häufungspunkte sind $-2$ und $2$. Kontrolle mit Zahlen: $a_5 = -1{,}8$, $a_6 \approx 2{,}167$ ✓.
```

```aufgabe
id: gf-tf-divergenz
titel: Divergenz mit Teilfolgen beweisen
niveau: 3
lernziel: 7
kompetenz: begruenden
angabe: |
  Gegeben ist $a_n = (-1)^n\cdot\dfrac{2n + 1}{n + 3}$.

  a) Gegen welche Zahl geht die Teilfolge der Glieder mit **geradem** Index?

  b) Gegen welche Zahl geht die Teilfolge der Glieder mit **ungeradem** Index?

  c) Was folgt daraus für die Folge $(a_n)$?
teile:
  - typ: zahl
    label: 'a) gerade Indizes'
    loesung: "2"
    fehler:
      - wert: "-2"
        meldung: |
          Für gerades $n$ ist $(-1)^n = +1$. Eine gerade Anzahl von Faktoren $-1$ ergibt $+1$.
      - wert: "1/3"
        meldung: |
          $\frac13$ ist der Wert für $n = 0$. Gefragt ist das Verhalten für sehr große $n$. Teile Zähler und Nenner durch $n$.
  - typ: zahl
    label: 'b) ungerade Indizes'
    loesung: "-2"
    fehler:
      - wert: "2"
        meldung: |
          Für ungerades $n$ ist $(-1)^n = -1$. Das Vorzeichen dreht sich um.
  - typ: auswahl
    label: 'c)'
    optionen:
      - 'Die Folge ist divergent, weil zwei Teilfolgen verschiedene Grenzwerte haben.'
      - 'Die Folge konvergiert gegen $0$, den Mittelwert von $2$ und $-2$.'
      - 'Darüber kann man nichts sagen.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Kein einziges späteres Glied liegt in der Nähe von $0$: Die Beträge sind ab $n = 3$ größer als $1$. Ein Grenzwert ist kein Mittelwert.
      - wert: 2
        meldung: |
          Doch: Hätte die Folge einen Grenzwert, dann müssten alle Teilfolgen gegen diesen einen Grenzwert gehen.
hinweise:
  - 'Für $n \to \infty$ geht $\frac{2n + 1}{n + 3}$ gegen den Quotienten der führenden Koeffizienten.'
  - 'Bei geradem $n$ ist $(-1)^n = 1$, bei ungeradem $n$ ist $(-1)^n = -1$. Vergleiche dann die beiden Grenzwerte.'
loesung: |
  Ansatz: Wir benutzen das Divergenzkriterium. Dafür brauchen wir zwei Teilfolgen mit verschiedenen Grenzwerten.
  ---
  Der Bruch: $\frac{2n + 1}{n + 3} = \frac{2 + \frac1n}{1 + \frac3n} \to \frac{2}{1} = 2$, weil $\frac1n$ und $\frac3n$ gegen $0$ gehen.
  ---
  a) Gerade $n$: $(-1)^n = 1$, die Teilfolge geht gegen $2$. b) Ungerade $n$: $(-1)^n = -1$, die Teilfolge geht gegen $-2$.
  ---
  c) Die Grenzwerte $2$ und $-2$ sind verschieden. Also ist $(a_n)$ divergent. Kontrolle: $a_5 = -1{,}375$ und $a_6 \approx 1{,}444$ ✓.
```

### Der Satz von Bolzano-Weierstraß

Eine beschränkte Folge muss nicht konvergieren. Das zeigt $(-1)^n$. Aber ganz ohne Ordnung kann eine beschränkte Folge
auch nicht sein. Unendlich viele Glieder passen in ein beschränktes Intervall nur, wenn sie sich irgendwo drängen.

:::satz[Satz von Bolzano-Weierstraß]
Jede beschränkte Folge reeller Zahlen besitzt eine konvergente Teilfolge. Gleichwertig: Jede beschränkte Folge hat
mindestens einen Häufungspunkt.
:::

**Die Beweisidee heißt Intervallhalbierung.** Die Folge liegt in einem Intervall $[u;\ o]$. Wir halbieren es. In
mindestens einer Hälfte liegen unendlich viele Glieder, denn zwei Hälften mit je endlich vielen Gliedern hätten
zusammen nur endlich viele. Diese Hälfte halbieren wir wieder, und so weiter. Die Intervalle werden immer schmaler und
liegen ineinander. Nach der Vollständigkeit von $\R$ ziehen sie sich auf eine Zahl $h$ zusammen. Aus jedem Intervall
wählt man ein Glied mit größerem Index als zuvor. Diese Glieder bilden eine Teilfolge, die gegen $h$ geht.

:::beispiel[Intervallhalbierung mit Zahlen]
Die Folge $a_n = (-1)^n\left(1 + \frac1n\right)$ hat die Glieder $-2;\ 1{,}5;\ -1{,}33;\ 1{,}25;\ -1{,}2;\ \dots$ Alle Glieder
liegen im Intervall $[-2;\ 2]$. Bei Wahlmöglichkeit nehmen wir die rechte Hälfte.

- **Schritt 1:** $[-2;\ 0]$ und $[0;\ 2]$. Rechts liegen alle Glieder mit geradem Index, also unendlich viele. Wir nehmen $[0;\ 2]$.
- **Schritt 2:** $[0;\ 1]$ und $[1;\ 2]$. Die geraden Glieder sind $1 + \frac1n$, also alle größer als $1$. Links liegt
  keines. Wir nehmen $[1;\ 2]$.
- **Schritt 3:** $[1;\ 1{,}5]$ und $[1{,}5;\ 2]$. Rechts liegt nur $a_2 = 1{,}5$, also nur endlich viele. Wir nehmen $[1;\ 1{,}5]$.

Die Breite halbiert sich jedes Mal: $4$, dann $2$, dann $1$, dann $0{,}5$. Setzt man das fort, ziehen sich die
Intervalle auf die Zahl $1$ zusammen. Die geraden Glieder bilden die konvergente Teilfolge, ihr Grenzwert ist $1$.
:::

:::achtung[Bolzano-Weierstraß verspricht keine Konvergenz der ganzen Folge]
Falsch: „Die Folge $(-1)^n\left(1 + \frac1n\right)$ ist beschränkt. Nach Bolzano-Weierstraß konvergiert sie also.“

Richtig: Der Satz verspricht nur eine konvergente **Teil**folge. Die ganze Folge divergiert hier, denn die geraden
Glieder gehen gegen $1$ und die ungeraden gegen $-1$. Konvergenz der ganzen Folge garantiert erst das Monotoniekriterium,
und das braucht zusätzlich die Monotonie.
:::

:::pruefung[So beantwortest du die Frage „Ist jede beschränkte Folge konvergent?“]
Die Antwort hat drei Teile. So kann es klingen:

> Nein. Ein Gegenbeispiel ist $(-1)^n$. Die Folge liegt zwischen $-1$ und $1$, springt aber immer hin und her.

> Es gilt aber der Satz von Bolzano-Weierstraß: Jede beschränkte Folge hat eine konvergente Teilfolge. Bei $(-1)^n$ sind
> das zum Beispiel die Glieder mit geradem Index, die alle gleich $1$ sind.

> Konvergenz der ganzen Folge bekommt man, wenn die Folge zusätzlich monoton ist. Das ist das Monotoniekriterium.

Wer nur „Nein“ sagt, bekommt sicher die Nachfrage, was man trotzdem sagen kann.
:::

```aufgabe
id: gf-tf-gefuehrt
titel: Drei Teilfolgen, drei Häufungspunkte
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Gegeben ist $a_n = \cos\!\left(\frac{n\pi}{2}\right)\cdot\left(1 + \frac1n\right)$. Der Faktor $\cos\!\left(\frac{n\pi}{2}\right)$
  nimmt für $n = 1, 2, 3, 4$ die Werte $0, -1, 0, 1$ an und wiederholt sie dann.

  Bestimme alle Häufungspunkte der Folge. Gib sie durch Strichpunkt getrennt ein.
teile:
  - typ: menge
    label: 'Häufungspunkte'
    loesung: ["-1", "0", "1"]
    fehler:
      - wert: ["-1", "1"]
        meldung: |
          Die Glieder mit ungeradem Index sind alle gleich $0$. Das sind unendlich viele Glieder an derselben Stelle.
      - wert: ["1"]
        meldung: |
          Das ist nur der Häufungspunkt der Glieder mit $n = 4, 8, 12, \dots$ Prüfe auch $n = 2, 6, 10, \dots$ und die ungeraden $n$.
hinweise:
  - 'Teile die Indizes in drei Gruppen: ungerade, $n = 4k$ und $n = 4k + 2$.'
  - 'Bestimme in jeder Gruppe den Wert des Kosinus und den Grenzwert der Teilfolge.'
gefuehrt:
  - text: Berechne $a_4$.
    teil:
      typ: zahl
      loesung: "1 + 1/4"
      fehler:
        - wert: "1"
          meldung: 'Der Kosinus ist $1$, aber er wird noch mit $1 + \frac14$ multipliziert.'
    erklaerung: '$\cos(2\pi) = 1$, also $a_4 = 1\cdot\left(1 + \frac14\right) = 1{,}25$.'
  - text: Gegen welche Zahl geht die Teilfolge $a_{4k}$, also $a_4, a_8, a_{12}, \dots$?
    teil:
      typ: zahl
      loesung: "1"
      fehler:
        - wert: "1.25"
          meldung: 'Das ist nur das erste Glied dieser Teilfolge. Für große $k$ geht $\frac{1}{4k}$ gegen $0$.'
    erklaerung: 'Für $n = 4k$ ist der Kosinus $1$, also $a_{4k} = 1 + \frac{1}{4k} \to 1$.'
  - text: Gegen welche Zahl geht die Teilfolge $a_{4k+2}$, also $a_2, a_6, a_{10}, \dots$?
    teil:
      typ: zahl
      loesung: "-1"
      fehler:
        - wert: "1"
          meldung: 'Für $n = 2, 6, 10, \dots$ ist der Kosinus $-1$. Das Vorzeichen bleibt erhalten.'
    erklaerung: 'Für $n = 4k + 2$ ist der Kosinus $-1$, also $a_{4k+2} = -\left(1 + \frac{1}{4k+2}\right) \to -1$.'
  - text: Was passiert mit den Gliedern mit ungeradem Index? Überlege, bevor du weiterklickst.
    erklaerung: 'Für ungerades $n$ ist der Kosinus $0$. Also ist $a_n = 0$ für alle ungeraden $n$. Diese unendlich vielen Glieder bilden eine konstante Teilfolge mit Grenzwert $0$.'
loesung: |
  Ansatz: Der Kosinus-Faktor wiederholt sich mit Periode $4$. Deshalb zerlegen wir die Folge in drei Teilfolgen.
  ---
  $n = 4k$: Faktor $1$, also $a_{4k} = 1 + \frac{1}{4k} \to 1$. $n = 4k + 2$: Faktor $-1$, also $a_{4k+2} \to -1$.
  ---
  $n$ ungerade: Faktor $0$, also $a_n = 0$. Jedes Glied gehört zu einer der drei Gruppen. Deshalb gibt es keine weiteren Häufungspunkte.
  ---
  Antwort: Die Häufungspunkte sind $-1$, $0$ und $1$. Kontrolle: $a_6 \approx -1{,}167$ und $a_8 = 1{,}125$ ✓.
```

### Cauchy-Folgen

Beim Monotoniekriterium konnten wir Konvergenz beweisen, ohne den Grenzwert zu kennen. Es braucht aber Monotonie. Der
französische Mathematiker Cauchy fand eine Bedingung, die ganz ohne Monotonie und ohne Grenzwert auskommt. Sie schaut nur
darauf, ob die Glieder **untereinander** immer enger zusammenrücken.

:::definition[Cauchy-Folge]
Eine Folge $(a_n)$ heißt **Cauchy-Folge**, wenn gilt: Zu jedem $\varepsilon > 0$ gibt es einen Index $N$, sodass für alle
$m \ge N$ und alle $n \ge N$ gilt: $|a_m - a_n| < \varepsilon$.
:::

In Worten: Ab einer Stelle liegen **je zwei** Glieder weniger als $\varepsilon$ auseinander. Dabei sind $m$ und $n$ zwei
beliebige Indizes ab $N$. Sie müssen nicht benachbart sein. Im Unterschied zur Grenzwertdefinition kommt keine Zahl $a$ vor.

:::beispiel[Eine Cauchy-Folge und eine, die keine ist]
**Cauchy-Folge:** $a_n = \frac1n$. Ab der Stelle $N$ liegen alle Glieder im Intervall $\left(0;\ \frac1N\right]$. Zwei Zahlen
in diesem Intervall liegen weniger als $\frac1N$ auseinander. Zu $\varepsilon > 0$ wählt man also $N > \frac1\varepsilon$.
Für $\varepsilon = 0{,}01$ genügt $N = 101$.

**Keine Cauchy-Folge:** die Teilsummen $s_n = 1 + \frac12 + \frac13 + \dots + \frac1n$. Vergleiche $s_{2n}$ mit $s_n$. Die
Differenz besteht aus den $n$ Summanden $\frac{1}{n+1}$ bis $\frac{1}{2n}$. Jeder davon ist mindestens $\frac{1}{2n}$. Also ist
$$s_{2n} - s_n \ge n\cdot\frac{1}{2n} = \frac12.$$
Zum Beispiel ist $s_4 - s_2 = \frac13 + \frac14 = \frac{7}{12} \approx 0{,}58$. Egal wie weit hinten man ist: Es gibt immer zwei
Glieder, die mindestens $\frac12$ auseinanderliegen. Für $\varepsilon = \frac12$ findet man kein $N$.
:::

:::satz[Cauchy-Kriterium]
In $\R$ gilt: Eine Folge konvergiert genau dann, wenn sie eine Cauchy-Folge ist.
:::

**Die leichte Richtung, konvergent also Cauchy.** Sei $a_n \to a$ und $\varepsilon > 0$. Zur Toleranz $\frac\varepsilon2$
gibt es ein $N$ mit $|a_n - a| < \frac\varepsilon2$ für alle $n \ge N$. Für $m, n \ge N$ liegen beide Glieder weniger als
$\frac\varepsilon2$ von $a$ entfernt. Nach der Dreiecksungleichung ist dann
$$|a_m - a_n| = |(a_m - a) + (a - a_n)| \le |a_m - a| + |a - a_n| < \frac\varepsilon2 + \frac\varepsilon2 = \varepsilon.$$
Anschaulich: Zwei Wanderer, die beide weniger als einen halben Kilometer von der Hütte entfernt sind, sind weniger als
einen Kilometer voneinander entfernt.

**Die schwere Richtung, Cauchy also konvergent,** braucht wieder die Vollständigkeit. Die Idee: Eine Cauchy-Folge ist
beschränkt. Nach Bolzano-Weierstraß hat sie eine konvergente Teilfolge. Weil alle späten Glieder eng beieinanderliegen,
zieht diese Teilfolge die ganze Folge mit zu ihrem Grenzwert.

**Die zweite Form der Vollständigkeit.** In $\Q$ gilt die schwere Richtung nicht. Das Heron-Verfahren für $\sqrt2$ aus
[11.11 Monotoniekriterium und Vollständigkeit von ℝ](/lernen/mathe3/grenzwerte-folgen/monotoniekriterium-und-vollstaendigkeit-von) liefert nur Brüche. Diese rücken als Cauchy-Folge
immer enger zusammen, haben aber in $\Q$ keinen Grenzwert. Man sagt: **$\R$ ist vollständig, weil in $\R$
jede Cauchy-Folge konvergiert.** Mit dem archimedischen Prinzip ist das gleichwertig zum Supremumsaxiom.

:::achtung[Benachbarte Glieder reichen nicht]
Falsch: „Bei $s_n = 1 + \frac12 + \dots + \frac1n$ ist $s_{n+1} - s_n = \frac{1}{n+1}$, und das geht gegen $0$. Also ist
$(s_n)$ eine Cauchy-Folge und konvergiert.“

Richtig: Die Cauchy-Bedingung verlangt kleine Abstände für **alle** Paare $m, n \ge N$, nicht nur für Nachbarn. Weit
auseinanderliegende Indizes können trotz kleiner Einzelschritte weit auseinanderliegende Werte haben. Hier ist
$s_{2n} - s_n \ge \frac12$ für jedes $n$. Die Teilsummen wachsen über jede Grenze, nur sehr langsam.
:::

```reflexion
frage: Warum ist die Cauchy-Bedingung nützlich, obwohl sie in $\R$ dasselbe bedeutet wie Konvergenz?
antwort: |
  Weil man sie prüfen kann, **ohne den Grenzwert zu kennen**. Die Grenzwertdefinition braucht eine Zahl $a$, mit der
  man die Glieder vergleicht. Die Cauchy-Bedingung vergleicht nur Glieder miteinander. Bei Verfahren wie Heron oder
  Newton kennt man den Grenzwert gerade nicht, man will ihn ja erst berechnen. Ein Programm prüft deshalb oft, ob sich
  aufeinanderfolgende Näherungen kaum noch ändern. Das ist allerdings nur ein Hinweis und noch kein Beweis, wie die
  harmonische Reihe zeigt.
```

```aufgabe
id: gf-tf-bw
titel: Beschränkt, aber nicht konvergent
niveau: 3
lernziel: 7
kompetenz: anwenden
angabe: |
  Gegeben ist $b_n = (-1)^n\left(3 - \dfrac1n\right)$, also $-2;\ 2{,}5;\ -2{,}67;\ 2{,}75;\ \dots$

  a) Ist die Folge konvergent?

  b) Führe die Intervallhalbierung aus dem Beweis von Bolzano-Weierstraß durch. Starte mit $[-4;\ 4]$. Nimm in jedem Schritt
  die Hälfte, in der unendlich viele Glieder liegen. Liegen in beiden Hälften unendlich viele, nimm die rechte.
  Gib das Intervall nach **drei** Halbierungen an.

  c) Gegen welche Zahl konvergiert die Teilfolge, die so gefunden wird?
teile:
  - typ: auswahl
    label: 'a)'
    optionen:
      - 'Nein, die geraden und die ungeraden Glieder haben verschiedene Häufungspunkte.'
      - 'Ja, weil sie beschränkt ist.'
    richtig: [0]
  - typ: zahl
    label: 'b) linker Rand'
    loesung: "2"
    fehler:
      - wert: "3"
        meldung: |
          Im dritten Schritt liegen in $[3;\ 4]$ gar keine Glieder, weil alle geraden Glieder $3 - \frac1n$ kleiner als $3$ sind.
  - typ: zahl
    label: 'b) rechter Rand'
    loesung: "3"
    fehler:
      - wert: "4"
        meldung: |
          $[2;\ 4]$ ist das Intervall nach **zwei** Halbierungen. Halbiere noch einmal.
  - typ: zahl
    label: 'c) Grenzwert der Teilfolge'
    loesung: "3"
hinweise:
  - 'Die Glieder mit geradem Index sind $3 - \frac1n$, liegen also zwischen $2{,}5$ und $3$. Die ungeraden liegen zwischen $-3$ und $-2$.'
  - 'Schritt 1: $[-4;\ 0]$ oder $[0;\ 4]$. Prüfe in jedem Schritt, in welcher Hälfte unendlich viele gerade Glieder liegen.'
loesung: |
  Ansatz: Wir zerlegen in gerade und ungerade Indizes, weil wir dann sehen, wo die Glieder liegen.
  ---
  a) Gerade Glieder: $3 - \frac1n \to 3$. Ungerade Glieder: $-\left(3 - \frac1n\right) \to -3$. Zwei verschiedene Grenzwerte von Teilfolgen: Die Folge divergiert, obwohl sie zwischen $-3$ und $3$ liegt.
  ---
  b) Schritt 1: In beiden Hälften liegen unendlich viele Glieder, wir nehmen $[0;\ 4]$. Schritt 2: $[0;\ 2]$ enthält keine geraden Glieder, weil sie alle mindestens $2{,}5$ sind. Wir nehmen $[2;\ 4]$.
  ---
  Schritt 3: $[3;\ 4]$ enthält keine Glieder, denn $3 - \frac1n < 3$. In $[2;\ 3]$ liegen alle geraden Glieder. Das Intervall nach drei Halbierungen ist $[2;\ 3]$.
  ---
  c) Die geraden Glieder bilden die gefundene Teilfolge. Sie konvergiert gegen $3$. Antwort: beschränkt, divergent, aber mit der konvergenten Teilfolge $b_{2k} \to 3$, wie Bolzano-Weierstraß verspricht.
```

```aufgabe
id: gf-tf-cauchy
titel: Kleine Schritte, aber keine Cauchy-Folge
niveau: 3
lernziel: 7
kompetenz: begruenden
angabe: |
  Ein Mitschüler sagt: „Bei $s_n = 1 + \frac12 + \dots + \frac1n$ werden die Schritte $s_{n+1} - s_n$ beliebig klein. Also ist
  $(s_n)$ eine Cauchy-Folge.“

  a) Berechne $s_{20} - s_{10} = \frac{1}{11} + \frac{1}{12} + \dots + \frac{1}{20}$ auf drei Nachkommastellen.

  b) Widerlege die Behauptung mit einer Begründung, die für jedes $n$ gilt.
teile:
  - typ: zahl
    label: 'a) $s_{20} - s_{10}$'
    loesung: "1/11+1/12+1/13+1/14+1/15+1/16+1/17+1/18+1/19+1/20"
    anzeige: '\approx 0{,}669'
    toleranz: 0.001
    fehler:
      - wert: "1/20"
        meldung: |
          Das ist nur der letzte Summand. Die Differenz $s_{20} - s_{10}$ besteht aus **zehn** Summanden, von $\frac{1}{11}$ bis $\frac{1}{20}$.
  - typ: text
    label: 'b) Begründung'
    muster: |
      Die Differenz $s_{2n} - s_n$ besteht aus den $n$ Summanden $\frac{1}{n+1}, \dots, \frac{1}{2n}$. Jeder ist mindestens
      $\frac{1}{2n}$, also ist $s_{2n} - s_n \ge n\cdot\frac{1}{2n} = \frac12$. Zu $\varepsilon = \frac12$ gibt es deshalb kein $N$:
      Für jedes $N$ liegen $s_N$ und $s_{2N}$ mindestens $\frac12$ auseinander. Die Cauchy-Bedingung verlangt kleine Abstände
      für alle Paare, nicht nur für Nachbarn. Also ist $(s_n)$ keine Cauchy-Folge und divergiert.
hinweise:
  - 'a) Jeder der zehn Summanden ist mindestens $\frac{1}{20}$. Das Ergebnis muss also mindestens $\frac12$ sein.'
  - 'b) Schätze $s_{2n} - s_n$ allgemein nach unten ab: $n$ Summanden, jeder mindestens $\frac{1}{2n}$. Vergleiche mit der Definition für $\varepsilon = \frac12$.'
loesung: |
  Ansatz: Die Cauchy-Bedingung betrifft alle Paare $m, n \ge N$. Wir suchen deshalb ein Paar, das weit auseinanderliegt.
  ---
  a) $s_{20} - s_{10} = \frac{1}{11} + \dots + \frac{1}{20} \approx 0{,}669$. Das ist mehr als $\frac12$, obwohl jeder einzelne Schritt kleiner als $0{,}1$ ist.
  ---
  b) Allgemein: $s_{2n} - s_n$ hat $n$ Summanden, jeder mindestens $\frac{1}{2n}$. Also ist $s_{2n} - s_n \ge \frac12$.
  ---
  Zu $\varepsilon = \frac12$ gibt es kein $N$, denn $s_N$ und $s_{2N}$ liegen immer mindestens $\frac12$ auseinander. Die Folge ist keine Cauchy-Folge. Nach dem Cauchy-Kriterium divergiert sie.
```

## Unendliche Reihen: Partialsummen, geometrische und harmonische Reihe

```aufgabe
id: gf-reihe-vorwissen
titel: Eine endliche geometrische Summe
niveau: 1
art: check
angabe: |
  Berechne $2 + 1 + \frac12 + \frac14 + \frac18$ mit der Summenformel für endliche geometrische Reihen. Gib das Ergebnis als Bruch an.
  (Vorwissen aus [Kapitel 8, „Endliche geometrische Reihen“](/lernen/mathe3/folgen-reihen/endliche-geometrische-reihen).)
teile:
  - typ: zahl
    label: 'Summe'
    loesung: "2*(1 - (1/2)^5)/(1 - 1/2)"
    anzeige: '\tfrac{31}{8} = 3{,}875'
    fehler:
      - wert: "2/(1 - 1/2)"
        meldung: |
          Das ist der Wert der **unendlichen** Summe. Hier sind es nur fünf Summanden. Die endliche Formel hat im Zähler zusätzlich den Faktor $1 - q^n$.
      - wert: "2*(1 - (1/2)^4)/(1 - 1/2)"
        meldung: |
          Du hast mit vier Summanden gerechnet. Zähle nach: $2$, $1$, $\frac12$, $\frac14$, $\frac18$ sind fünf.
hinweise:
  - 'Formel: $a + aq + \dots + aq^{n-1} = a\cdot\frac{1 - q^n}{1 - q}$ mit $a = 2$, $q = \frac12$ und $n = 5$.'
loesung: |
  Erstes Glied $a = 2$, Quotient $q = \frac12$, Anzahl der Summanden $n = 5$.
  ---
  $2\cdot\frac{1 - (1/2)^5}{1 - 1/2} = 2\cdot\frac{31/32}{1/2} = 2\cdot\frac{31}{16} = \frac{31}{8} = 3{,}875$. Probe durch Addieren: $2 + 1 + 0{,}5 + 0{,}25 + 0{,}125 = 3{,}875$ ✓.
```

**Worum geht es in einem Satz?** Wir geben einer Summe mit unendlich vielen Summanden einen genauen Sinn, indem
wir sie auf den Grenzwert einer Folge zurückführen.

Stell dir vor, du gehst auf eine Tür zu, die $2$ m entfernt ist. Zuerst gehst du die Hälfte, also $1$ m. Dann die
Hälfte des Rests, also $\frac12$ m. Dann wieder die Hälfte des Rests, und so weiter. Du legst die Strecken
$1 + \frac12 + \frac14 + \frac18 + \dots$ zurück. Das sind unendlich viele Summanden. Trotzdem kommst du nie weiter
als bis zur Tür. Die Gesamtstrecke sollte also $2$ m sein.

Wie kann man das genau machen? Unendlich oft addieren kann niemand. Man kann aber nach jedem Schritt notieren, wie
weit man bisher gekommen ist. So entsteht eine ganz gewöhnliche Folge. Ihren Grenzwert kennst du aus diesem Kapitel.

### Partialsummen und Reihe

Eine **Partialsumme** ist eine Teilsumme: die Summe der ersten $n$ Summanden. Das Wort „partial“ heißt „teilweise“.
Beim Weg zur Tür sind die Partialsummen $s_1 = 1$, $s_2 = 1{,}5$, $s_3 = 1{,}75$, $s_4 = 1{,}875$. Sie bilden eine
Folge, und diese Folge nähert sich der Zahl $2$.

:::definition[Unendliche Reihe]
Gegeben ist eine Folge $(a_k)$. Die Folge der **Partialsummen**
$$s_n = \sum_{k=1}^{n} a_k = a_1 + a_2 + \dots + a_n$$
heißt **Reihe** und wird $\sum\limits_{k=1}^{\infty} a_k$ geschrieben. Die Reihe **konvergiert**, wenn die Folge
$(s_n)$ konvergiert. Ihr Grenzwert $s = \lim\limits_{n\to\infty} s_n$ heißt **Wert** oder **Summe** der Reihe. Man
schreibt dann $\sum\limits_{k=1}^{\infty} a_k = s$. Konvergiert $(s_n)$ nicht, heißt die Reihe **divergent**.
:::

Dabei ist $a_k$ der $k$-te Summand, $s_n$ die Summe der ersten $n$ Summanden und $s$ der Wert. Das Zeichen
$\sum$ ist ein großes griechisches S und heißt **Summenzeichen** (Erinnerung aus
[Kapitel 8, „Das Summenzeichen“](/lernen/mathe3/folgen-reihen/das-summenzeichen)). Der Buchstabe $k$ ist der
Laufindex, $\infty$ oben bedeutet „ohne Ende“.

Das Symbol $\sum_{k=1}^{\infty} a_k$ hat also zwei Bedeutungen. Es bezeichnet die Folge der Partialsummen. Und
wenn diese konvergiert, bezeichnet es auch ihren Grenzwert.

- **Beispiel:** Bei $\sum_{k=1}^{\infty} \left(\frac12\right)^k = \frac12 + \frac14 + \frac18 + \dots$ ist
  $s_n = 1 - \left(\frac12\right)^n$. Ein Beispiel dieses Abschnitts rechnet das nach. Weil $\left(\frac12\right)^n$ eine
  Nullfolge ist, gilt $s_n \to 1$. Die Reihe konvergiert und hat den Wert $1$.
- **Nicht-Beispiel:** Bei $\sum_{k=1}^{\infty} 1 = 1 + 1 + 1 + \dots$ ist $s_n = n$. Diese Folge wächst über jede
  Grenze. Die Reihe divergiert, sie hat keinen Wert.

```aufgabe
id: gf-reihe-check-partialsumme
titel: Eine Partialsumme bilden
niveau: 1
art: check
angabe: |
  Wie groß ist die Partialsumme $s_4$ der Reihe $\sum_{k=1}^{\infty} \frac{10}{10^k} = 1 + 0{,}1 + 0{,}01 + \dots$?
teile:
  - typ: zahl
    label: '$s_4$'
    loesung: "1 + 0.1 + 0.01 + 0.001"
    anzeige: '1{,}111'
    fehler:
      - wert: "0.001"
        meldung: |
          $0{,}001$ ist der vierte **Summand** $a_4$. Die Partialsumme $s_4$ ist die Summe der ersten vier Summanden.
hinweise:
  - '$s_4 = a_1 + a_2 + a_3 + a_4$.'
loesung: |
  Die ersten vier Summanden sind $1$, $0{,}1$, $0{,}01$ und $0{,}001$.
  ---
  Ihre Summe ist $s_4 = 1{,}111$. Die Partialsummen $1;\ 1{,}1;\ 1{,}11;\ 1{,}111$ nähern sich $1{,}\overline{1} = \frac{10}{9}$.
```

:::achtung[Summand und Partialsumme verwechseln]
Falsch: „Die Summanden $a_k = \left(\frac12\right)^k$ gehen gegen $0$. Also hat die Reihe den Wert $0$.“

Richtig: Der Wert einer Reihe ist der Grenzwert der **Partialsummen** $s_n$, nicht der Summanden $a_k$. Hier ist
$s_1 = 0{,}5$, $s_2 = 0{,}75$, $s_3 = 0{,}875$. Diese Zahlen wachsen und nähern sich $1$. Dass die Summanden
klein werden, heißt nur: Es kommt immer weniger dazu. Der bisher erreichte Stand bleibt aber stehen.
:::

:::beispiel[Partialsummen ausrechnen und ihren Grenzwert bestimmen]
Wir untersuchen $\sum_{k=1}^{\infty}\left(\frac12\right)^k$.

**Schritt 1, die ersten Partialsummen.** $s_1 = \frac12$, $s_2 = \frac12 + \frac14 = \frac34$,
$s_3 = \frac34 + \frac18 = \frac78$, $s_4 = \frac{15}{16}$. Es fehlt jeweils genau ein Stück zur $1$: erst
$\frac12$, dann $\frac14$, dann $\frac18$, dann $\frac{1}{16}$.

**Schritt 2, eine Formel vermuten.** Das fehlende Stück ist immer der zuletzt addierte Summand. Also vermuten wir
$s_n = 1 - \left(\frac12\right)^n$.

**Schritt 3, die Formel begründen.** $s_n$ ist eine endliche geometrische Summe mit erstem Glied $\frac12$, Quotient
$q = \frac12$ und $n$ Summanden. Die Formel aus [Kapitel 8, „Endliche geometrische Reihen“](/lernen/mathe3/folgen-reihen/endliche-geometrische-reihen) ergibt
$$s_n = \frac12\cdot\frac{1 - (1/2)^n}{1 - 1/2} = \frac12\cdot\frac{1 - (1/2)^n}{1/2} = 1 - \left(\tfrac12\right)^n.$$

**Schritt 4, Grenzwert.** $\left(\frac12\right)^n$ ist eine Nullfolge, weil $0 < \frac12 < 1$ ist. Mit den
Grenzwertsätzen folgt $s_n \to 1 - 0 = 1$. Also ist $\sum_{k=1}^{\infty}\left(\frac12\right)^k = 1$.
:::

```aufgabe
id: gf-reihe-partialsumme
titel: Von den Partialsummen zu den Summanden
niveau: 1
lernziel: 8
kompetenz: verstehen
angabe: |
  Von einer Reihe $\sum_{k=1}^{\infty} a_k$ kennt man die Partialsummen: $s_n = 3 - \dfrac{2}{n}$.

  a) Wie groß ist der erste Summand $a_1$?

  b) Wie groß ist der Summand $a_5$?

  c) Welchen Wert hat die Reihe?
teile:
  - typ: zahl
    label: 'a) $a_1$'
    loesung: "3 - 2/1"
    anzeige: '1'
    fehler:
      - wert: "3"
        meldung: |
          $3$ ist der Grenzwert der Partialsummen, nicht der erste Summand. Der erste Summand ist gleich der ersten Partialsumme $s_1$.
  - typ: zahl
    label: 'b) $a_5$'
    loesung: "(3 - 2/5) - (3 - 2/4)"
    anzeige: '\tfrac{1}{10}'
    fehler:
      - wert: "3 - 2/5"
        meldung: |
          Das ist die Partialsumme $s_5$, also die Summe der ersten **fünf** Summanden. Den fünften Summanden allein bekommst du als Differenz $s_5 - s_4$.
  - typ: zahl
    label: 'c) Wert der Reihe'
    loesung: "3"
    fehler:
      - wert: "0"
        meldung: |
          Die **Summanden** gehen gegen $0$. Der Wert der Reihe ist aber der Grenzwert der **Partialsummen** $s_n = 3 - \frac2n$.
hinweise:
  - 'Die erste Partialsumme besteht nur aus dem ersten Summanden: $s_1 = a_1$.'
  - 'Allgemein ist $s_5 = s_4 + a_5$. Löse nach $a_5$ auf.'
loesung: |
  Ansatz: Die Partialsumme $s_n$ ist die Summe der ersten $n$ Summanden. Deshalb ist $s_1 = a_1$ und $a_n = s_n - s_{n-1}$.
  ---
  a) $a_1 = s_1 = 3 - 2 = 1$. b) $a_5 = s_5 - s_4 = \left(3 - \frac25\right) - \left(3 - \frac24\right) = \frac12 - \frac25 = \frac{1}{10}$.
  ---
  c) Die Reihe hat den Wert $\lim s_n = 3 - 0 = 3$, weil $\frac2n$ eine Nullfolge ist. Plausibel: Die Partialsummen $1;\ 2;\ 2{,}33;\ 2{,}5;\ 2{,}6$ wachsen in Richtung $3$.
```

### Die geometrische Reihe

Die wichtigste Reihe überhaupt ist die **geometrische Reihe**. Bei ihr entsteht jeder Summand aus dem vorigen durch
Multiplizieren mit derselben Zahl $q$, dem **Quotienten**. Beim Weg zur Tür ist $q = \frac12$.

:::satz[Geometrische Reihe]
Für $|q| < 1$ konvergiert die geometrische Reihe, und es gilt
$$\sum_{k=0}^{\infty} a\,q^k = a + aq + aq^2 + \dots = \frac{a}{1 - q}.$$
Für $|q| \ge 1$ und $a \neq 0$ divergiert sie.
:::

Dabei ist $a$ das erste Glied und $q$ der Quotient zweier aufeinanderfolgender Glieder. Zahlenbeispiel: Mit $a = 2$
und $q = \frac12$ ist $2 + 1 + \frac12 + \frac14 + \dots = \frac{2}{1 - 1/2} = 4$.

:::beweis
**Ziel:** Wir zeigen, dass die Partialsummen gegen $\frac{a}{1 - q}$ konvergieren.

**Schritt 1, Partialsummen.** Nach der Summenformel aus [Kapitel 8, „Endliche geometrische Reihen“](/lernen/mathe3/folgen-reihen/endliche-geometrische-reihen) ist für $q \neq 1$
$$s_n = a + aq + \dots + aq^{n-1} = a\cdot\frac{1 - q^n}{1 - q}.$$

**Schritt 2, Grenzwert für $|q| < 1$.** Dann ist $(q^n)$ eine Nullfolge. Das ist eine der Standard-Nullfolgen
dieses Kapitels. Mit den Grenzwertsätzen folgt $s_n \to a\cdot\frac{1 - 0}{1 - q} = \frac{a}{1 - q}$.

**Schritt 3, Divergenz für $|q| \ge 1$.** Dann ist $|aq^k| = |a|\cdot|q|^k \ge |a| > 0$ für jedes $k$. Die Summanden
bilden also keine Nullfolge. Eine solche Reihe divergiert. Den Grund dafür liefert der Satz „Notwendiges
Konvergenzkriterium“ im Teil „Das notwendige Kriterium“ dieses Abschnitts.

**Was haben wir gezeigt?** Die unendliche Summe ist der Grenzwert der endlichen Summenformel. Der Faktor $q^n$
verschwindet im Grenzwert genau dann, wenn $|q| < 1$ ist.
:::

:::merke[Faustregel: erstes Glied durch (1 minus Quotient)]
$$\text{Wert} = \frac{\text{erstes Glied}}{1 - q}, \qquad \text{nur gültig für } |q| < 1.$$
Beginnt die Reihe nicht bei $k = 0$, setzt du einfach das tatsächliche erste Glied ein. Beispiel:
$\sum_{k=1}^{\infty}\left(\frac15\right)^k$ beginnt mit $\frac15$, also ist der Wert $\frac{1/5}{1 - 1/5} = \frac{1/5}{4/5} = \frac14$.
:::

```plot
x: [0, 12.5]
y: [0, 3.4]
achsen: { x: "n", y: "sₙ" }
graphen:
  - { f: "2", gestrichelt: true, farbe: 0, label: "s = 2" }
punkte:
  - { x: 1, y: 1.0000, farbe: 0 }
  - { x: 2, y: 1.5000, farbe: 0 }
  - { x: 3, y: 1.7500, farbe: 0 }
  - { x: 4, y: 1.8750, farbe: 0 }
  - { x: 5, y: 1.9375, farbe: 0 }
  - { x: 6, y: 1.9688, farbe: 0 }
  - { x: 7, y: 1.9844, farbe: 0 }
  - { x: 8, y: 1.9922, farbe: 0 }
  - { x: 9, y: 1.9961, farbe: 0 }
  - { x: 10, y: 1.9980, farbe: 0 }
  - { x: 11, y: 1.9990, farbe: 0 }
  - { x: 12, y: 1.9995, label: "geometrisch, q = ½", farbe: 0 }
  - { x: 2, y: 1.5000, farbe: 1 }
  - { x: 3, y: 1.8333, farbe: 1 }
  - { x: 4, y: 2.0833, farbe: 1 }
  - { x: 5, y: 2.2833, farbe: 1 }
  - { x: 6, y: 2.4500, farbe: 1 }
  - { x: 7, y: 2.5929, farbe: 1 }
  - { x: 8, y: 2.7179, farbe: 1 }
  - { x: 9, y: 2.8290, farbe: 1 }
  - { x: 10, y: 2.9290, farbe: 1 }
  - { x: 11, y: 3.0199, farbe: 1 }
  - { x: 12, y: 3.1032, label: "harmonisch", farbe: 1 }
beschriftung: Partialsummen zweier Reihen. Die blauen Punkte gehören zur geometrischen Reihe 1 + ½ + ¼ + … und nähern sich der Linie s = 2. Die orangen Punkte gehören zur harmonischen Reihe 1 + ½ + ⅓ + …. Sie wachsen langsam, aber über jede Grenze.
```

:::achtung[Die Formel für |q| ≥ 1 benutzen]
Falsch: „$1 + 2 + 4 + 8 + \dots = \frac{1}{1 - 2} = -1$.“

Richtig: Die Formel $\frac{a}{1 - q}$ gilt nur für $|q| < 1$. Hier ist $q = 2$. Die Partialsummen $1;\ 3;\ 7;\ 15;\ \dots$
wachsen über jede Grenze, die Reihe divergiert. Dass eine Summe positiver Zahlen negativ sein soll, ist ein
deutliches Warnsignal. Prüfe deshalb **immer zuerst** $|q| < 1$, bevor du die Formel verwendest.
:::

:::achtung[Das falsche erste Glied]
Falsch: „$\sum_{k=1}^{\infty}\left(\frac15\right)^k = \frac{1}{1 - 1/5} = \frac54$.“

Richtig: Die Summe beginnt bei $k = 1$. Ihr erstes Glied ist $\left(\frac15\right)^1 = \frac15$, nicht $1$. Also ist der
Wert $\frac{1/5}{1 - 1/5} = \frac14$. Die falsche Rechnung zählt den Summanden $\left(\frac15\right)^0 = 1$ mit, der gar
nicht dabei ist. Schreib vor dem Einsetzen das erste Glied ausdrücklich hin.
:::

```aufgabe
id: gf-geo-reihe
titel: Geometrische Reihen summieren
niveau: 1
lernziel: 8
kompetenz: rechnen
angabe: |
  Berechne die Werte der Reihen.
  $$\text{a) } \sum_{k=0}^{\infty}\left(\frac23\right)^k \qquad\qquad \text{b) } \sum_{k=1}^{\infty} 5\cdot\left(-\frac14\right)^k$$
teile:
  - typ: zahl
    label: 'a)'
    loesung: "1/(1 - 2/3)"
    anzeige: '3'
    fehler:
      - wert: "(2/3)/(1 - 2/3)"
        meldung: |
          Die Summe beginnt bei $k = 0$. Das erste Glied ist $\left(\frac23\right)^0 = 1$, nicht $\frac23$.
  - typ: zahl
    label: 'b)'
    loesung: "5*(-1/4)/(1 + 1/4)"
    anzeige: '-1'
    fehler:
      - wert: "5/(1 + 1/4)"
        meldung: |
          Die Summe beginnt bei $k = 1$. Das erste Glied ist $5\cdot\left(-\frac14\right)^1$, nicht $5$.
      - wert: "5*(-1/4)/(1 - 1/4)"
        meldung: |
          Der Quotient ist $q = -\frac14$. Im Nenner steht $1 - q = 1 - \left(-\frac14\right) = 1 + \frac14$. Das Minus vor $q$ und das Minus in $q$ ergeben zusammen ein Plus.
hinweise:
  - 'Prüfe zuerst $|q| < 1$. Dann gilt: Wert gleich erstes Glied durch $(1 - q)$.'
loesung: |
  Ansatz: Beide Reihen sind geometrisch. Wir bestimmen jeweils das erste Glied und den Quotienten $q$ und prüfen $|q| < 1$, denn nur dann gilt die Formel.
  ---
  a) $q = \frac23$, erstes Glied ($k = 0$) ist $1$. Wert: $\frac{1}{1 - 2/3} = \frac{1}{1/3} = 3$.
  ---
  b) $q = -\frac14$, erstes Glied ($k = 1$) ist $5\cdot\left(-\frac14\right) = -\frac54$. Wert: $\frac{-5/4}{1 + 1/4} = \frac{-5/4}{5/4} = -1$. Plausibel: Das erste Glied ist negativ und am größten, die weiteren Glieder wechseln das Vorzeichen und werden schnell klein.
```

### Periodische Dezimalzahlen und ein antikes Paradox

:::beispiel[Periodische Dezimalzahlen sind geometrische Reihen]
Die Zahl $0{,}\overline{27} = 0{,}272727\dots$ ist eine Kurzschrift für eine unendliche Summe:
$$0{,}\overline{27} = \frac{27}{100} + \frac{27}{100^2} + \frac{27}{100^3} + \dots$$

**Schritt 1:** Das erste Glied ist $\frac{27}{100}$. Jedes weitere Glied entsteht durch Multiplizieren mit $q = \frac{1}{100}$.

**Schritt 2:** Wegen $|q| < 1$ gilt die Formel: $\frac{27/100}{1 - 1/100} = \frac{27/100}{99/100} = \frac{27}{99} = \frac{3}{11}$.

**Schritt 3, Probe:** $3 : 11 = 0{,}2727\dots$ ✓.

**Und $0{,}\overline{9}$?** Mit derselben Rechnung ist
$0{,}\overline{9} = \frac{9}{10} + \frac{9}{100} + \dots = \frac{9/10}{1 - 1/10} = \frac{9/10}{9/10} = 1$.
Die Schreibweise $0{,}\overline{9}$ meint den Grenzwert der Partialsummen $0{,}9;\ 0{,}99;\ 0{,}999;\ \dots$ Dieser
Grenzwert ist exakt $1$. Es ist keine Zahl „knapp unter $1$“.
:::

```reflexion
frage: Viele sagen „$0{,}\overline{9}$ ist doch immer ein bisschen kleiner als $1$“. Erkläre mit dem Begriff Partialsumme, was an diesem Gedanken stimmt und was nicht.
antwort: |
  Richtig ist: Jede **Partialsumme** $0{,}9$, $0{,}99$, $0{,}999$, … ist kleiner als $1$. Der Abstand zur $1$ ist
  $0{,}1$, dann $0{,}01$, dann $0{,}001$. Die Zahl $0{,}\overline{9}$ ist aber keine dieser Partialsummen. Sie ist ihr
  **Grenzwert**. Die Abstände bilden eine Nullfolge, also ist der Grenzwert genau $1$. Der Fehler im Gedanken ist, eine
  Partialsumme mit dem Wert der Reihe zu verwechseln.
```

:::beispiel[Achilles und die Schildkröte]
Der griechische Philosoph Zenon erzählte vor rund 2500 Jahren folgendes Paradox. Achilles läuft zehnmal so schnell
wie eine Schildkröte. Die Schildkröte hat $100$ m Vorsprung.

**Das Argument:** Bis Achilles den Startpunkt der Schildkröte erreicht, ist sie $10$ m weiter. Bis er dort ist, ist sie
wieder $1$ m weiter. So geht es unendlich oft weiter. Zenon schloss daraus, dass Achilles sie nie einholt.

**Die Auflösung mit einer Reihe:** Achilles läuft die Teilstrecken $100 + 10 + 1 + 0{,}1 + \dots$ (in Metern). Das ist
eine geometrische Reihe mit erstem Glied $100$ und $q = \frac{1}{10}$. Ihr Wert ist
$$\frac{100}{1 - 0{,}1} = \frac{100}{0{,}9} = \frac{1000}{9} \approx 111{,}1 \text{ m}.$$

**Was haben wir gezeigt?** Unendlich viele Teilstrecken können zusammen eine **endliche** Länge haben. Nach
$111{,}1$ m hat Achilles die Schildkröte eingeholt.
:::

```aufgabe
id: gf-periodisch
titel: Periodische Dezimalzahlen als Bruch
niveau: 1
lernziel: 8
kompetenz: rechnen
angabe: |
  Schreibe mithilfe der geometrischen Reihe als vollständig gekürzten Bruch: a) $0{,}\overline{45}$ und b) $0{,}2\overline{3}$.
teile:
  - typ: zahl
    label: 'a)'
    loesung: "(45/100)/(1 - 1/100)"
    anzeige: '\tfrac{5}{11}'
    fehler:
      - wert: "45/100"
        meldung: |
          $\frac{45}{100} = 0{,}45$ ist nur die erste Partialsumme. Die Ziffern $45$ wiederholen sich aber unendlich oft. Du brauchst die Summe aller Glieder.
  - typ: zahl
    label: 'b)'
    loesung: "2/10 + (3/100)/(1 - 1/10)"
    anzeige: '\tfrac{7}{30}'
    toleranz: 0.00001
    fehler:
      - wert: "23/99"
        meldung: |
          $\frac{23}{99} = 0{,}\overline{23}$, dort wiederholt sich **zweistellig** „23“. Hier wiederholt sich nur die $3$. Trenne die $0{,}2$ ab und behandle $0{,}0\overline{3}$ als Reihe.
      - wert: "3/9"
        meldung: |
          $\frac39 = 0{,}\overline{3}$. Du hast die Ziffer $2$ vor der Periode und die Verschiebung um eine Stelle vergessen.
hinweise:
  - 'a) Erstes Glied $\frac{45}{100}$, Quotient $q = \frac{1}{100}$.'
  - 'b) Zerlege $0{,}2\overline{3} = \frac{2}{10} + 0{,}0\overline{3}$ und schreibe $0{,}0\overline{3} = \frac{3}{100} + \frac{3}{1000} + \dots$ als geometrische Reihe.'
loesung: |
  Ansatz: Eine Periode ist eine geometrische Reihe. Bei einer zweistelligen Periode ist $q = \frac{1}{100}$, bei einer einstelligen $q = \frac{1}{10}$.
  ---
  a) $0{,}\overline{45} = \frac{45/100}{1 - 1/100} = \frac{45}{99} = \frac{5}{11}$.
  ---
  b) $0{,}0\overline{3} = \frac{3/100}{1 - 1/10} = \frac{3/100}{9/10} = \frac{3}{90} = \frac{1}{30}$. Also $0{,}2\overline{3} = \frac{2}{10} + \frac{1}{30} = \frac{6}{30} + \frac{1}{30} = \frac{7}{30}$.
  ---
  Probe mit dem Taschenrechner: $5 : 11 = 0{,}4545\dots$ und $7 : 30 = 0{,}2333\dots$ ✓.
```

```aufgabe
id: gf-reihe-umkehr
titel: Welcher Quotient passt?
niveau: 2
lernziel: 8
kompetenz: anwenden
angabe: |
  a) Für welche Zahl $q$ mit $|q| < 1$ hat die Reihe $\sum_{k=0}^{\infty} q^k$ den Wert $4$?

  b) Für welche Zahl $q$ mit $|q| < 1$ hat die Reihe $\sum_{k=1}^{\infty} q^k$ den Wert $4$?
teile:
  - typ: zahl
    label: 'a) $q$'
    loesung: "1 - 1/4"
    anzeige: '\tfrac34'
    fehler:
      - wert: "1/4"
        meldung: |
          Aus $\frac{1}{1 - q} = 4$ folgt $1 - q = \frac14$. Das ist aber noch nicht $q$. Löse nach $q$ auf.
  - typ: zahl
    label: 'b) $q$'
    loesung: "4/5"
    anzeige: '\tfrac45'
    fehler:
      - wert: "3/4"
        meldung: |
          Diese Reihe beginnt bei $k = 1$. Ihr erstes Glied ist $q$, nicht $1$. Der Wert ist also $\frac{q}{1 - q}$.
hinweise:
  - 'a) Setze $\frac{1}{1 - q} = 4$. b) Setze $\frac{q}{1 - q} = 4$, denn das erste Glied ist $q^1 = q$.'
  - 'Multipliziere jeweils mit $1 - q$ (das ist positiv, weil $q < 1$) und löse die lineare Gleichung.'
loesung: |
  Ansatz: Für $|q| < 1$ ist der Wert „erstes Glied durch $(1 - q)$“. Wir setzen diesen Ausdruck gleich $4$ und lösen nach $q$.
  ---
  a) $\frac{1}{1 - q} = 4 \iff 1 = 4 - 4q \iff 4q = 3 \iff q = \frac34$.
  ---
  b) $\frac{q}{1 - q} = 4 \iff q = 4 - 4q \iff 5q = 4 \iff q = \frac45$.
  ---
  Probe: $\frac{1}{1 - 3/4} = \frac{1}{1/4} = 4$ ✓ und $\frac{4/5}{1/5} = 4$ ✓. Beide Werte erfüllen $|q| < 1$, die Formel war also erlaubt.
```

```aufgabe
id: gf-ball-weg
titel: Gesamtweg eines springenden Balls
niveau: 2
lernziel: 8
kompetenz: modellieren
angabe: |
  Ein Ball wird aus $2$ m Höhe fallen gelassen. Nach jedem Aufprall springt er auf $60\,\%$ der vorigen Höhe.
  Welchen Gesamtweg legt er im Modell mit unendlich vielen Sprüngen zurück? Gib das Ergebnis in Metern an.
teile:
  - typ: zahl
    label: 'Gesamtweg'
    einheit: m
    loesung: "2 + 2*(2*0.6/(1 - 0.6))"
    anzeige: '8'
    fehler:
      - wert: "2 + 2*0.6/(1 - 0.6)"
        meldung: |
          Du hast jede Sprunghöhe nur einmal gezählt. Der Ball fliegt aber jede Höhe **hinauf und wieder hinunter**.
      - wert: "2*2/(1 - 0.6)"
        meldung: |
          Du hast auch den ersten Fall aus $2$ m doppelt gezählt. Beim ersten Mal fällt der Ball nur hinunter, er steigt vorher nicht hinauf.
hinweise:
  - 'Nach dem ersten Fall sind die Sprunghöhen $2\cdot 0{,}6$, $2\cdot 0{,}6^2$, … Das ist eine geometrische Reihe.'
  - 'Jede Sprunghöhe wird zweimal durchlaufen. Rechne: erster Fall plus zweimal die Summe der Sprunghöhen.'
loesung: |
  Ansatz: Wir zerlegen den Weg in den ersten Fall und die Sprünge. Die Sprunghöhen bilden eine geometrische Reihe mit $q = 0{,}6$.
  ---
  Erster Fall: $2$ m. Danach sind die Sprunghöhen $h_k = 2\cdot 0{,}6^k$ für $k = 1, 2, 3, \dots$ Ihre Summe ist $\frac{2\cdot 0{,}6}{1 - 0{,}6} = \frac{1{,}2}{0{,}4} = 3$ m.
  ---
  Jede Sprunghöhe wird hinauf und hinunter durchlaufen, also zweimal: $2\cdot 3 = 6$ m.
  ---
  Gesamtweg: $2 + 6 = 8$ m. Plausibel: schon der erste Sprung trägt $2\cdot 1{,}2 = 2{,}4$ m bei, und die weiteren Beiträge schrumpfen schnell.
```

```aufgabe
id: gf-reihe-rente
titel: Eine ewige Rente bewerten
niveau: 2
lernziel: 8
kompetenz: modellieren
angabe: |
  Eine Stiftung soll ab nächstem Jahr **für immer** jedes Jahr $1000$ Euro auszahlen. Mit einem Zinssatz von $4\,\%$
  ist eine Zahlung in $k$ Jahren heute $1000\cdot 1{,}04^{-k}$ Euro wert (Barwert, siehe
  [Kapitel 8, „Zinseszins, Barwert und unterjährige Verzinsung“](/lernen/mathe3/folgen-reihen/zinseszins-barwert-und-unterjaehrige-verzinsung)).

  Wie viel Euro muss man heute einzahlen? Das ist die Summe aller Barwerte.
teile:
  - typ: zahl
    label: 'Einzahlung in Euro'
    loesung: "(1000/1.04)/(1 - 1/1.04)"
    anzeige: '25\,000'
    toleranz: 0.5
    fehler:
      - wert: "1000/(1 - 1/1.04)"
        meldung: |
          Die erste Zahlung kommt erst in einem Jahr. Das erste Glied ist also $1000\cdot 1{,}04^{-1}$, nicht $1000$.
      - wert: "1000/(1 - 1.04)"
        meldung: |
          Der Quotient ist $q = \frac{1}{1{,}04} \approx 0{,}96$, nicht $1{,}04$. Mit $q = 1{,}04$ wäre die Formel gar nicht erlaubt, weil $|q| > 1$ ist.
hinweise:
  - 'Die Barwerte $1000\cdot 1{,}04^{-1}$, $1000\cdot 1{,}04^{-2}$, … bilden eine geometrische Reihe. Welcher Quotient?'
  - 'Erstes Glied $\frac{1000}{1{,}04}$, Quotient $q = \frac{1}{1{,}04}$. Dann „erstes Glied durch $(1 - q)$“.'
loesung: |
  Ansatz: Die Einzahlung muss alle künftigen Zahlungen decken. Deshalb ist sie die Summe aller Barwerte. Diese Summe ist eine geometrische Reihe.
  ---
  Erstes Glied $\frac{1000}{1{,}04}$, Quotient $q = \frac{1}{1{,}04}$. Wegen $|q| < 1$ konvergiert die Reihe.
  ---
  Wert: $\frac{1000/1{,}04}{1 - 1/1{,}04}$. Wir erweitern mit $1{,}04$: $\frac{1000}{1{,}04 - 1} = \frac{1000}{0{,}04} = 25\,000$ Euro.
  ---
  Probe: $4\,\%$ Zinsen auf $25\,000$ Euro sind genau $1000$ Euro pro Jahr. Die Stiftung zahlt also nur die Zinsen aus, und das Kapital bleibt für immer erhalten ✓.
```

### Das notwendige Kriterium

Bei einer konvergenten Reihe kommt am Ende fast nichts mehr dazu. Das lässt sich genau beweisen.

:::satz[Notwendiges Konvergenzkriterium]
Wenn die Reihe $\sum_{k=1}^{\infty} a_k$ konvergiert, dann ist $(a_k)$ eine Nullfolge.
:::

:::beweis
**Ziel:** Aus $s_n \to s$ folgt $a_n \to 0$.

**Schritt 1:** Ein einzelner Summand ist die Differenz zweier Partialsummen: $a_n = s_n - s_{n-1}$ für $n \ge 2$.

**Schritt 2:** Wenn $s_n \to s$ gilt, dann auch $s_{n-1} \to s$. Die Folge $(s_{n-1})$ ist nämlich dieselbe Folge,
nur um eine Stelle verschoben.

**Schritt 3:** Mit der Differenzregel für Grenzwerte folgt $a_n = s_n - s_{n-1} \to s - s = 0$.
:::

Das Kriterium heißt **notwendig**, weil es eine Bedingung nennt, ohne die Konvergenz unmöglich ist. Sein praktischer
Nutzen ist die **Kontraposition**: Wenn die Summanden **keine** Nullfolge bilden, dann divergiert die Reihe sicher.
So divergieren $\sum 1$, $\sum (-1)^k$ und $\sum \frac{k}{k + 1}$, denn ihre Summanden gehen nicht gegen $0$.

Die Umkehrung gilt aber **nicht**. Auch wenn die Summanden gegen $0$ gehen, kann die Reihe divergieren. Das
berühmteste Beispiel folgt jetzt.

```aufgabe
id: gf-reihe-notwendig
titel: Was das notwendige Kriterium entscheiden kann
niveau: 1
lernziel: 8
kompetenz: verstehen
angabe: |
  Bei welchen Reihen kann man **allein mit dem notwendigen Kriterium** auf Divergenz schließen?
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$\displaystyle\sum_{k=1}^{\infty}\frac{2k}{3k + 1}$'
      - '$\displaystyle\sum_{k=1}^{\infty}\frac{1}{\sqrt k}$'
      - '$\displaystyle\sum_{k=1}^{\infty}(-1)^k\,\frac{k}{k + 1}$'
      - '$\displaystyle\sum_{k=1}^{\infty} 0{,}9^k$'
    richtig: [0, 2]
    fehler:
      - wert: [0, 1, 2]
        meldung: |
          Bei $\frac{1}{\sqrt k}$ gehen die Summanden gegen $0$. Dann sagt das notwendige Kriterium **nichts**. Es kann nur Divergenz zeigen, wenn die Summanden **keine** Nullfolge sind.
      - wert: [0]
        meldung: |
          Schau dir $(-1)^k\frac{k}{k+1}$ genau an: Die Summanden liegen abwechselnd nahe bei $-1$ und nahe bei $+1$. Bilden sie eine Nullfolge?
      - wert: [0, 2, 3]
        meldung: |
          $0{,}9^k$ ist eine Nullfolge. Das Kriterium schweigt also. Diese Reihe konvergiert sogar, sie ist geometrisch mit $q = 0{,}9$.
hinweise:
  - 'Das Kriterium zeigt Divergenz nur dann, wenn die Summanden **nicht** gegen $0$ gehen. Prüfe für jede Reihe den Grenzwert der Summanden.'
loesung: |
  Ansatz: Für jede Reihe bestimmen wir das Verhalten der **Summanden**. Gehen sie nicht gegen $0$, divergiert die Reihe. Gehen sie gegen $0$, entscheidet das Kriterium nichts.
  ---
  $\frac{2k}{3k + 1} \to \frac23 \neq 0$: Divergenz. $(-1)^k\frac{k}{k + 1}$: Die Beträge gehen gegen $1$, also keine Nullfolge: Divergenz.
  ---
  $\frac{1}{\sqrt k} \to 0$ und $0{,}9^k \to 0$: Das Kriterium sagt nichts. Ergebnis: Optionen 1 und 3.
```

### Die harmonische Reihe divergiert

Die **harmonische Reihe** ist $\sum_{k=1}^{\infty}\frac1k = 1 + \frac12 + \frac13 + \frac14 + \dots$ Ihre Summanden
bilden eine Nullfolge. Trotzdem wachsen die Partialsummen über jede Grenze. Diese Stelle ist für fast alle
überraschend. Lies den Beweis langsam.

:::satz[Harmonische Reihe]
Die Reihe $\sum\limits_{k=1}^{\infty}\frac1k$ divergiert bestimmt gegen $\infty$, obwohl $\frac1k \to 0$ gilt.
:::

**Die Idee in einem Satz:** Wir fassen die Summanden zu Gruppen zusammen, von denen jede mindestens $\frac12$
beiträgt. Weil es unendlich viele solche Gruppen gibt, wird die Summe beliebig groß.

:::beweis[Beweis nach Nikolaus von Oresme (um 1350)]
**Schritt 1, Gruppen bilden.** Nach $1 + \frac12$ bilden wir Gruppen, deren Länge sich jedes Mal verdoppelt:
$$1 + \frac12 + \left(\frac13 + \frac14\right) + \left(\frac15 + \frac16 + \frac17 + \frac18\right) + \left(\frac19 + \dots + \frac1{16}\right) + \dots$$

**Schritt 2, jede Gruppe nach unten abschätzen.** In jeder Gruppe ersetzen wir jeden Summanden durch den
**kleinsten** Summanden der Gruppe. Dadurch wird die Gruppe kleiner oder bleibt gleich.
- $\frac13 + \frac14 \ge \frac14 + \frac14 = \frac12$.
- $\frac15 + \frac16 + \frac17 + \frac18 \ge 4\cdot\frac18 = \frac12$.
- Die nächste Gruppe hat $8$ Summanden, jeder mindestens $\frac{1}{16}$. Also ist sie mindestens $\frac{8}{16} = \frac12$.

**Schritt 3, allgemein.** Die Partialsumme bis $\frac{1}{2^m}$ besteht aus $1$, dem Summanden $\frac12$ und $m - 1$
Gruppen. Jede Gruppe ist mindestens $\frac12$. Also gilt
$$s_{2^m} \ge 1 + \frac12 + (m - 1)\cdot\frac12 = 1 + \frac m2.$$

**Schritt 4, Schluss.** Zu jeder noch so großen Schranke $K$ gibt es ein $m$ mit $1 + \frac m2 > K$. Die Partialsummen
sind also unbeschränkt. Weil sie außerdem wachsen, divergieren sie bestimmt gegen $\infty$.
:::

**Was haben wir gezeigt?** Kleine Summanden allein reichen nicht. Entscheidend ist, **wie schnell** sie klein
werden. Bei $\frac1k$ geschieht das zu langsam.

Die Divergenz ist extrem langsam. Es ist $s_{10} \approx 2{,}93$, und erst ab $n = 12\,367$ ist $s_n > 10$. Mit
Probieren am Computer hätte man die Divergenz kaum bemerkt. Das zeigt, warum man Konvergenz **beweisen** muss,
statt sie aus ein paar Zahlen zu vermuten.

:::achtung[Aus „Summanden gehen gegen 0“ auf Konvergenz schließen]
Falsch: „Die Summanden $\frac1k$ gehen gegen $0$. Also konvergiert $\sum \frac1k$.“

Richtig: Das notwendige Kriterium gilt nur in einer Richtung. Aus Konvergenz folgt, dass die Summanden eine Nullfolge
sind. Umgekehrt folgt aus einer Nullfolge **nichts**. Die harmonische Reihe ist das Gegenbeispiel: Ihre Partialsummen
$s_{2^m}$ sind mindestens $1 + \frac m2$ und wachsen über jede Grenze.
:::

```aufgabe
id: gf-harmonisch
titel: Die harmonische Reihe begreifen
niveau: 3
lernziel: 8
kompetenz: begruenden
angabe: |
  Für die harmonische Reihe ist $s_n = 1 + \frac12 + \frac13 + \dots + \frac1n$.

  a) Für welches kleinste $n$ ist $s_n > 3$?

  b) Erkläre in eigenen Worten, warum die harmonische Reihe divergiert, obwohl ihre Summanden eine Nullfolge bilden.
teile:
  - typ: zahl
    label: 'a) kleinstes $n$'
    loesung: "11"
    fehler:
      - wert: "10"
        meldung: |
          $s_{10} \approx 2{,}929$ ist noch kleiner als $3$. Addiere den nächsten Summanden.
  - typ: text
    label: 'b) Begründung'
    muster: |
      Man fasst die Summanden in Gruppen zusammen: $\frac13 + \frac14$, dann $\frac15$ bis $\frac18$, dann $\frac19$ bis
      $\frac1{16}$ und so weiter. Jede Gruppe ist mindestens $\frac12$, weil man jeden Summanden durch den kleinsten der
      Gruppe ersetzen kann. Also ist $s_{2^m} \ge 1 + \frac m2$. Die Partialsummen sind unbeschränkt, die Reihe divergiert.
      Dass die Summanden gegen $0$ gehen, ist nur notwendig für Konvergenz, aber nicht hinreichend.
hinweise:
  - 'a) Addiere die Kehrwerte Schritt für Schritt, auf vier Nachkommastellen gerundet.'
  - 'b) Verwende die Gruppen mit $2$, $4$, $8$, … Summanden. Wie groß ist jede Gruppe mindestens?'
loesung: |
  Ansatz: In a) addieren wir so lange, bis die Summe $3$ übersteigt. In b) schätzen wir Gruppen von Summanden nach unten ab, weil das eine untere Schranke für die Partialsummen liefert.
  ---
  a) $s_{10} = 1 + 0{,}5 + 0{,}3333 + 0{,}25 + 0{,}2 + 0{,}1667 + 0{,}1429 + 0{,}125 + 0{,}1111 + 0{,}1 \approx 2{,}929$. Dann $s_{11} \approx 2{,}929 + 0{,}0909 = 3{,}020 > 3$. Also $n = 11$.
  ---
  b) Die Gruppe von $\frac{1}{2^{j-1} + 1}$ bis $\frac{1}{2^j}$ hat $2^{j-1}$ Summanden, jeder ist mindestens $\frac{1}{2^j}$. Also ist die Gruppe mindestens $2^{j-1}\cdot\frac{1}{2^j} = \frac12$.
  ---
  Damit ist $s_{2^m} \ge 1 + \frac m2$, und die Partialsummen wachsen über jede Grenze. Antwort: Die Reihe divergiert. Die Nullfolge der Summanden ist nur eine notwendige, keine hinreichende Bedingung.
```

### Teleskopreihen

Manchmal lässt sich jeder Summand als Differenz $a_k = b_k - b_{k+1}$ schreiben. Dann heben sich in der
Partialsumme fast alle Glieder auf, wie bei einem zusammengeschobenen Fernrohr. Man nennt das eine **Teleskopreihe**.

:::beispiel[Eine Teleskopreihe summieren]
Wir untersuchen $\sum_{k=1}^{\infty}\frac{1}{k(k + 1)}$.

**Schritt 1, zerlegen.** Es gilt $\frac{1}{k(k + 1)} = \frac1k - \frac{1}{k + 1}$. Probe durch Zusammenfassen:
$\frac1k - \frac{1}{k+1} = \frac{(k + 1) - k}{k(k + 1)} = \frac{1}{k(k + 1)}$ ✓.

**Schritt 2, Partialsumme ausschreiben.**
$$s_n = \left(1 - \frac12\right) + \left(\frac12 - \frac13\right) + \dots + \left(\frac1n - \frac{1}{n + 1}\right).$$
Jedes $-\frac12$ hebt sich mit dem folgenden $+\frac12$ weg, ebenso $-\frac13$ mit $+\frac13$ und so weiter. Übrig
bleiben nur der erste und der letzte Teil: $s_n = 1 - \frac{1}{n + 1}$.

**Schritt 3, Grenzwert.** $\frac{1}{n + 1}$ ist eine Nullfolge, also $s_n \to 1$. Der Wert der Reihe ist $1$.
Kontrolle mit $n = 5$: $\frac12 + \frac16 + \frac1{12} + \frac1{20} + \frac1{30} = \frac56$, und $1 - \frac16 = \frac56$ ✓.
:::

:::merke[Rezept: eine Reihe untersuchen]
1. **Summanden prüfen:** Ist $(a_k)$ keine Nullfolge, divergiert die Reihe. Fertig.
2. **Geometrisch?** Bei konstantem Quotienten $q$ konvergiert sie genau für $|q| < 1$. Wert: erstes Glied durch $(1 - q)$.
3. **Teleskop?** Lässt sich $a_k = b_k - b_{k+1}$ schreiben, ist $s_n = b_1 - b_{n+1}$.
4. **Harmonisch oder ähnlich?** $\sum \frac1k$ divergiert, obwohl die Summanden eine Nullfolge sind.
5. **Sonst:** Vergleichs- oder Quotientenkriterium aus [11.14 Konvergenzkriterien für Reihen](/lernen/mathe3/grenzwerte-folgen/konvergenzkriterien-fuer-reihen-vertiefung) verwenden.
:::

```aufgabe
id: gf-teleskop
titel: Eine Teleskopreihe mit Lücke
niveau: 2
lernziel: 8
kompetenz: rechnen
angabe: |
  Betrachte $\displaystyle\sum_{k=1}^{\infty}\frac{2}{k(k + 2)}$. Es gilt $\dfrac{2}{k(k + 2)} = \dfrac1k - \dfrac{1}{k + 2}$.

  a) Berechne die Partialsumme $s_4$ als Bruch.

  b) Bestimme den Wert der Reihe.
teile:
  - typ: zahl
    label: 'a) $s_4$'
    loesung: "1 + 1/2 - 1/5 - 1/6"
    anzeige: '\tfrac{17}{15}'
    fehler:
      - wert: "1 - 1/5"
        meldung: |
          Hier heben sich nicht benachbarte Glieder weg, sondern Glieder im Abstand $2$. Deshalb bleiben am Anfang **zwei** positive Teile übrig: $1$ und $\frac12$.
  - typ: zahl
    label: 'b) Wert'
    loesung: "1 + 1/2"
    anzeige: '\tfrac32'
    fehler:
      - wert: "1"
        meldung: |
          So wäre es bei $\frac1k - \frac{1}{k+1}$. Hier bleibt neben $1$ auch $\frac12$ stehen, weil kein späteres Glied $-\frac12$ enthält.
hinweise:
  - 'Schreibe $s_4 = \left(1 - \frac13\right) + \left(\frac12 - \frac14\right) + \left(\frac13 - \frac15\right) + \left(\frac14 - \frac16\right)$ aus und streiche, was sich aufhebt.'
  - 'Allgemein bleiben die ersten beiden positiven und die letzten beiden negativen Teile stehen. Bilde dann den Grenzwert.'
gefuehrt:
  - text: Prüfe die Zerlegung für $k = 1$. Berechne $\frac11 - \frac13$.
    teil:
      typ: zahl
      loesung: "1 - 1/3"
      fehler:
        - wert: "1/3"
          meldung: 'Rechne $1 - \frac13$, nicht nur $\frac13$.'
    erklaerung: '$1 - \frac13 = \frac23$, und $\frac{2}{1\cdot 3} = \frac23$ ✓. Die Zerlegung passt.'
  - text: Schreibe $s_4$ aus. Welche Teile heben sich weg? Überlege, warum $\frac13$ und $\frac14$ verschwinden.
    erklaerung: '$-\frac13$ aus dem ersten Summanden hebt sich mit $+\frac13$ aus dem dritten weg, ebenso $-\frac14$ mit $+\frac14$.'
  - text: Berechne $s_4$.
    teil:
      typ: zahl
      loesung: "1 + 1/2 - 1/5 - 1/6"
      fehler:
        - wert: "1 - 1/5"
          meldung: 'Auch $+\frac12$ aus dem zweiten Summanden bleibt stehen, ebenso $-\frac16$ aus dem vierten.'
    erklaerung: '$s_4 = 1 + \frac12 - \frac15 - \frac16 = \frac{30 + 15 - 6 - 5}{30} = \frac{34}{30} = \frac{17}{15}$.'
  - text: Allgemein ist $s_n = 1 + \frac12 - \frac{1}{n + 1} - \frac{1}{n + 2}$. Wogegen strebt $s_n$?
    teil:
      typ: zahl
      loesung: "3/2"
      fehler:
        - wert: "1"
          meldung: 'Die beiden Brüche mit $n$ gehen gegen $0$. Übrig bleiben $1$ **und** $\frac12$.'
    erklaerung: '$\frac{1}{n+1}$ und $\frac{1}{n+2}$ sind Nullfolgen, also $s_n \to 1 + \frac12 = \frac32$.'
loesung: |
  Ansatz: Die Zerlegung $\frac{2}{k(k+2)} = \frac1k - \frac{1}{k+2}$ macht die Reihe zur Teleskopreihe. Glieder im Abstand $2$ heben sich weg.
  ---
  a) $s_4 = \left(1 - \frac13\right) + \left(\frac12 - \frac14\right) + \left(\frac13 - \frac15\right) + \left(\frac14 - \frac16\right) = 1 + \frac12 - \frac15 - \frac16 = \frac{17}{15}$.
  ---
  b) Allgemein $s_n = 1 + \frac12 - \frac{1}{n + 1} - \frac{1}{n + 2}$. Die letzten beiden Brüche sind Nullfolgen, also $s_n \to \frac32$.
  ---
  Probe: $\frac23 + \frac28 + \frac{2}{15} + \frac{2}{24} \approx 0{,}667 + 0{,}25 + 0{,}133 + 0{,}083 = 1{,}133 \approx \frac{17}{15}$ ✓. Der Wert der Reihe ist $\frac32$.
```

## Konvergenzkriterien für Reihen (Vertiefung)

```aufgabe
id: gf-krit-vorwissen
titel: Was garantiert das Monotoniekriterium?
niveau: 1
art: check
angabe: |
  Eine Folge $(s_n)$ ist monoton wachsend und für alle $n$ gilt $s_n \le 5$. Was folgt daraus?
  (Vorwissen aus [11.11 Monotoniekriterium und Vollständigkeit von ℝ](/lernen/mathe3/grenzwerte-folgen/monotoniekriterium-und-vollstaendigkeit-von) und aus
  [Kapitel 8, „Monotonie und Beschränktheit“](/lernen/mathe3/folgen-reihen/monotonie-und-beschraenktheit).)
teile:
  - typ: auswahl
    optionen:
      - 'Die Folge konvergiert, und ihr Grenzwert ist höchstens $5$.'
      - 'Die Folge konvergiert gegen $5$.'
      - 'Man kann nichts sagen, weil man den Grenzwert nicht kennt.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          $5$ ist nur **eine** obere Schranke. Der Grenzwert ist die **kleinste** obere Schranke. Die Folge $1 - \frac1n$ wächst, ist durch $5$ beschränkt und hat den Grenzwert $1$.
      - wert: 2
        meldung: |
          Genau das ist die Stärke des Monotoniekriteriums: Es sichert die **Existenz** des Grenzwerts, ohne dass man ihn kennen muss.
hinweise:
  - 'Monoton und beschränkt: Was sagt das Monotoniekriterium?'
loesung: |
  Nach dem Monotoniekriterium konvergiert jede monoton wachsende, nach oben beschränkte Folge, und zwar gegen ihr Supremum.
  ---
  Das Supremum ist die kleinste obere Schranke. Es ist also höchstens $5$, kann aber kleiner sein.
```

**Worum geht es in einem Satz?** Für die meisten Reihen gibt es keine Formel für die Partialsummen. Trotzdem kann man
oft entscheiden, **ob** sie konvergieren, ohne ihren Wert zu kennen.

Dazu gibt es Prüfregeln, die sogenannten **Konvergenzkriterien**. Ein Kriterium ist ein Test: Man prüft eine leicht
überprüfbare Eigenschaft und erfährt daraus etwas über die Konvergenz. Dieser Abschnitt geht über den Stoff der
schriftlichen Prüfung hinaus. Er ist aber Standard am Beginn jeder Analysis-Vorlesung. Die Prüferin kann in der
mündlichen Prüfung danach fragen.

### Reihen mit nichtnegativen Summanden

Sind alle Summanden $a_k \ge 0$, dann kommt bei jedem Schritt etwas dazu oder nichts. Die Partialsummen können also
nur wachsen. Genau dafür ist das Monotoniekriterium gemacht.

:::satz[Reihen mit nichtnegativen Summanden]
Ist $a_k \ge 0$ für alle $k$, dann gilt: Die Reihe $\sum_{k=1}^{\infty} a_k$ konvergiert genau dann, wenn ihre
Partialsummen $s_n$ nach oben beschränkt sind.
:::

:::beweis
**Schritt 1, die Partialsummen wachsen.** Es ist $s_{n+1} - s_n = a_{n+1} \ge 0$. Also ist $(s_n)$ monoton wachsend.

**Schritt 2, beschränkt ergibt konvergent.** Ist $(s_n)$ zusätzlich nach oben beschränkt, dann konvergiert $(s_n)$
nach dem Monotoniekriterium. Das heißt: Die Reihe konvergiert.

**Schritt 3, konvergent ergibt beschränkt.** Jede konvergente Folge ist beschränkt. Das wurde in
[11.7 Eindeutigkeit und Beschränktheit](/lernen/mathe3/grenzwerte-folgen/eindeutigkeit-und-beschraenktheit-die-ersten-beweise) bewiesen.
:::

:::beispiel[Die Reihe der Kehrwerte der Quadrate ist beschränkt]
Wir untersuchen $\sum_{k=1}^{\infty}\frac{1}{k^2} = 1 + \frac14 + \frac19 + \dots$ Die Summanden sind positiv. Es genügt
also eine obere Schranke für die Partialsummen.

**Schritt 1, jeden Summanden nach oben abschätzen.** Für $k \ge 2$ ist $k^2 \ge (k - 1)k$. Ein größerer Nenner ergibt
einen kleineren Bruch, also
$$\frac{1}{k^2} \le \frac{1}{(k - 1)k} = \frac{1}{k - 1} - \frac1k.$$
Zahlenbeispiel für $k = 3$: $\frac19 \approx 0{,}111$ und $\frac12 - \frac13 = \frac16 \approx 0{,}167$ ✓.

**Schritt 2, aufsummieren.** Die rechte Seite ist eine Teleskopsumme. Für $n \ge 2$ heben sich die mittleren Teile weg:
$$s_n \le 1 + \left(1 - \frac12\right) + \left(\frac12 - \frac13\right) + \dots + \left(\frac{1}{n - 1} - \frac1n\right) = 1 + 1 - \frac1n < 2.$$

**Schritt 3, Schluss.** Die Partialsummen sind durch $2$ beschränkt. Nach dem Satz konvergiert die Reihe. Ihren Wert
fand Leonhard Euler: $\frac{\pi^2}{6} \approx 1{,}645$. Zur Kontrolle: $s_{10} \approx 1{,}550$.
:::

### Vergleichen: Majorante und Minorante

Das Beispiel zeigt eine allgemeine Idee. Liegt jeder Summand unter dem Summanden einer konvergenten Reihe, dann
konvergiert auch die kleinere Reihe. Die größere Reihe heißt **Majorante**, vom lateinischen „maior“, also „größer“.
Die kleinere Vergleichsreihe heißt **Minorante**, von „minor“, also „kleiner“.

:::satz[Majoranten- und Minorantenkriterium]
Es gelte $0 \le a_k \le b_k$ für alle $k$.
1. **Majorantenkriterium:** Wenn $\sum b_k$ konvergiert, dann konvergiert auch $\sum a_k$.
2. **Minorantenkriterium:** Wenn $\sum a_k$ divergiert, dann divergiert auch $\sum b_k$.
:::

Die Begründung ist kurz. Die Partialsummen von $\sum a_k$ sind höchstens so groß wie die von $\sum b_k$. Konvergiert
$\sum b_k$, so ist ihr Wert eine obere Schranke für beide Partialsummen. Dann greift der Satz über nichtnegative
Summanden. Teil 2 ist die Kontraposition von Teil 1.

- **Beispiel Majorante:** $\frac{1}{k^2 + 3} \le \frac{1}{k^2}$, und $\sum\frac1{k^2}$ konvergiert. Also konvergiert $\sum\frac{1}{k^2 + 3}$.
- **Beispiel Minorante:** $\frac{1}{\sqrt k} \ge \frac1k$, weil $\sqrt k \le k$ für $k \ge 1$ gilt. Die harmonische Reihe
  $\sum\frac1k$ divergiert. Also divergiert auch $\sum\frac{1}{\sqrt k}$.
- **Nicht-Beispiel:** $\frac{1}{k^2} \le \frac1k$ und $\sum\frac1k$ divergiert. Daraus folgt über $\sum\frac{1}{k^2}$
  **nichts**. Eine divergente Reihe als Majorante ist wertlos.

:::achtung[Die Ungleichung in die falsche Richtung benutzen]
Falsch: „Es ist $\frac{1}{k^2} \le \frac1k$, und $\sum \frac1k$ divergiert. Also divergiert auch $\sum\frac{1}{k^2}$.“

Richtig: Unter einer divergenten Reihe darf eine kleinere Reihe ruhig konvergieren. Ein Vergleich nach oben braucht
eine **konvergente** Majorante. Ein Vergleich nach unten braucht eine **divergente** Minorante. Hier ist die Reihe
$\sum\frac{1}{k^2}$ sogar konvergent, wie das Beispiel „Die Reihe der Kehrwerte der Quadrate ist beschränkt“ in diesem Abschnitt zeigt. Merke: Kleiner als konvergent ergibt konvergent.
Größer als divergent ergibt divergent.
:::

```aufgabe
id: gf-krit-majorante
titel: Eine passende Majorante wählen
niveau: 1
lernziel: 8
kompetenz: verstehen
angabe: |
  Du willst zeigen, dass $\displaystyle\sum_{k=1}^{\infty}\frac{1}{k^2 + k + 5}$ konvergiert. Welche Begründung ist richtig?
teile:
  - typ: auswahl
    optionen:
      - 'Es ist $\frac{1}{k^2 + k + 5} \le \frac{1}{k^2}$, und $\sum\frac{1}{k^2}$ konvergiert.'
      - 'Es ist $\frac{1}{k^2 + k + 5} \le \frac{1}{k}$, und $\sum\frac{1}{k}$ divergiert.'
      - 'Es ist $\frac{1}{k^2 + k + 5} \le \frac{1}{k^3}$, und $\sum\frac{1}{k^3}$ konvergiert.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Die Ungleichung stimmt, aber eine **divergente** Majorante beweist nichts. Unter einer divergenten Reihe kann alles liegen.
      - wert: 2
        meldung: |
          Die Ungleichung ist falsch. Für $k = 10$ ist $\frac{1}{115} \approx 0{,}0087$, aber $\frac{1}{1000} = 0{,}001$. Prüfe Vergleiche immer mit einer Zahl.
hinweise:
  - 'Eine Majorante muss größer sein **und** konvergieren. Prüfe beides für jede Option.'
loesung: |
  Ansatz: Für das Majorantenkriterium brauchen wir eine größere Reihe, die konvergiert.
  ---
  Weil $k^2 + k + 5 \ge k^2$ ist, gilt $\frac{1}{k^2 + k + 5} \le \frac{1}{k^2}$. Die Reihe $\sum\frac{1}{k^2}$ konvergiert. Also ist Option 1 richtig. Option 2 hat eine divergente Majorante, Option 3 eine falsche Ungleichung.
```

### Das Quotientenkriterium

Bei vielen Reihen mit Potenzen und Fakultäten hilft ein anderer Test. Man vergleicht jeden Summanden mit seinem
Vorgänger. Wird der Summand auf Dauer um einen festen Faktor kleiner als $1$, verhält sich die Reihe wie eine
geometrische Reihe.

:::satz[Quotientenkriterium]
Es sei $a_k \neq 0$ und der Grenzwert $q = \lim\limits_{k\to\infty}\left|\dfrac{a_{k+1}}{a_k}\right|$ existiere.
1. Ist $q < 1$, dann konvergiert $\sum a_k$.
2. Ist $q > 1$, dann divergiert $\sum a_k$.
3. Ist $q = 1$, dann liefert das Kriterium **keine Entscheidung**.
:::

Dabei ist $\frac{a_{k+1}}{a_k}$ der Faktor, mit dem man vom Summanden $a_k$ zum nächsten Summanden kommt. Bei einer
geometrischen Reihe ist dieser Faktor immer gleich $q$.

**Beweisidee für $q < 1$.** Wir wählen eine Zahl $r$ zwischen $q$ und $1$, zum Beispiel $r = \frac{q + 1}{2}$. Weil
der Quotient gegen $q$ strebt, ist er ab einer Stelle $N$ kleiner als $r$. Ab dort schrumpft jeder Summand mindestens
um den Faktor $r$. Also gilt $|a_{N+m}| \le |a_N|\,r^m$. Rechts steht eine konvergente geometrische Reihe mit
Quotient $r < 1$. Sie ist eine Majorante. Für $q > 1$ wachsen die Beträge der Summanden ab einer Stelle. Die Summanden bilden dann keine
Nullfolge, und die Reihe divergiert.

:::beispiel[Das Quotientenkriterium anwenden]
Wir untersuchen $\sum_{k=1}^{\infty}\frac{k}{2^k} = \frac12 + \frac24 + \frac38 + \dots$

**Schritt 1, Quotient bilden.**
$$\frac{a_{k+1}}{a_k} = \frac{k + 1}{2^{k+1}}\cdot\frac{2^k}{k} = \frac{k + 1}{2k}.$$
Wir haben durch $a_k$ dividiert, indem wir mit dem Kehrwert multipliziert haben. Dann haben wir $2^k$ gekürzt.

**Schritt 2, Grenzwert.** Zähler und Nenner durch $k$ dividieren: $\frac{1 + 1/k}{2} \to \frac12$. Also $q = \frac12$.

**Schritt 3, Schluss.** Wegen $q = \frac12 < 1$ konvergiert die Reihe. Ihr Wert ist übrigens $2$. Das liefert das
Kriterium aber nicht, es sagt nur, **dass** die Reihe konvergiert.
:::

**Warum entscheidet $q = 1$ nichts?** Bei $\sum\frac1k$ ist der Quotient $\frac{k}{k + 1} \to 1$, und die Reihe
divergiert. Bei $\sum\frac{1}{k^2}$ ist der Quotient $\frac{k^2}{(k + 1)^2} \to 1$, und die Reihe konvergiert. Gleicher
Wert $q = 1$, verschiedenes Verhalten. Also kann $q = 1$ allein nichts entscheiden.

:::achtung[„Jeder Quotient ist kleiner als 1“ reicht nicht]
Falsch: „Bei $\sum\frac1k$ ist $\frac{a_{k+1}}{a_k} = \frac{k}{k + 1} < 1$ für jedes $k$. Also konvergiert die Reihe nach
dem Quotientenkriterium.“

Richtig: Das Kriterium verlangt, dass der **Grenzwert** $q$ kleiner als $1$ ist. Hier ist $q = \lim\frac{k}{k+1} = 1$.
Die Quotienten kommen der $1$ beliebig nahe. Dann schrumpfen die Summanden immer langsamer, und es gibt keine
geometrische Majorante. Die harmonische Reihe divergiert tatsächlich.
:::

```aufgabe
id: gf-krit-quotient
titel: Den Quotienten berechnen
niveau: 1
lernziel: 8
kompetenz: rechnen
angabe: |
  Bestimme für beide Reihen den Grenzwert $q = \lim\limits_{k\to\infty}\left|\frac{a_{k+1}}{a_k}\right|$.
  $$\text{a) } \sum_{k=1}^{\infty}\frac{5^k}{k!} \qquad\qquad \text{b) } \sum_{k=1}^{\infty}\frac{2^k}{k^3}$$
  c) Welche der beiden Reihen konvergiert nach dem Quotientenkriterium?
teile:
  - typ: zahl
    label: 'a) $q$'
    loesung: "0"
    fehler:
      - wert: "5"
        meldung: |
          $\frac{5^{k+1}}{5^k} = 5$ ist nur der Teil mit den Potenzen. Dazu kommt $\frac{k!}{(k+1)!} = \frac{1}{k + 1}$.
  - typ: zahl
    label: 'b) $q$'
    loesung: "2"
    fehler:
      - wert: "1/2"
        meldung: |
          Du hast $\frac{a_k}{a_{k+1}}$ gebildet. Der Quotient lautet „neuer Summand durch alter Summand“, also $\frac{a_{k+1}}{a_k}$.
  - typ: auswahl
    label: 'c)'
    optionen:
      - 'nur a)'
      - 'nur b)'
      - 'beide'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Konvergenz verlangt $q < 1$. Vergleiche deine beiden Werte mit $1$.
      - wert: 2
        meldung: |
          Bei b) ist $q > 1$. Dann wachsen die Summanden ab einer Stelle, und die Reihe divergiert.
hinweise:
  - 'Es ist $(k + 1)! = (k + 1)\cdot k!$.'
  - 'Bilde jeweils $\frac{a_{k+1}}{a_k}$, kürze und lass dann $k$ gegen unendlich gehen.'
loesung: |
  Ansatz: Wir bilden „nächster Summand durch aktuellen Summand“, kürzen und bestimmen den Grenzwert. Dann vergleichen wir mit $1$.
  ---
  a) $\frac{5^{k+1}}{(k + 1)!}\cdot\frac{k!}{5^k} = \frac{5}{k + 1} \to 0$. Also $q = 0$.
  ---
  b) $\frac{2^{k+1}}{(k + 1)^3}\cdot\frac{k^3}{2^k} = 2\cdot\left(\frac{k}{k + 1}\right)^3 \to 2\cdot 1 = 2$. Also $q = 2$.
  ---
  c) Nur bei a) ist $q < 1$. Die Reihe a) konvergiert, die Reihe b) divergiert. Plausibel: Die Fakultät $k!$ wächst schneller als $5^k$, aber $2^k$ wächst schneller als $k^3$.
```

```aufgabe
id: gf-krit-gefuehrt
titel: Quotientenkriterium Schritt für Schritt
niveau: 2
lernziel: 8
kompetenz: rechnen
angabe: |
  Entscheide mit dem Quotientenkriterium, ob $\displaystyle\sum_{k=1}^{\infty}\frac{k^2}{3^k}$ konvergiert.
teile:
  - typ: zahl
    label: '$q = \lim\limits_{k\to\infty}\frac{a_{k+1}}{a_k}$'
    loesung: "1/3"
    anzeige: '\tfrac13'
    fehler:
      - wert: "3"
        meldung: |
          Du hast den Quotienten verkehrt herum gebildet. Es ist $\frac{a_{k+1}}{a_k}$, also der neue Summand im Zähler.
      - wert: "1"
        meldung: |
          Der Faktor $\frac{(k+1)^2}{k^2}$ geht gegen $1$. Du hast aber den Faktor $\frac{3^k}{3^{k+1}} = \frac13$ vergessen.
  - typ: auswahl
    label: 'Ergebnis'
    optionen:
      - 'Die Reihe konvergiert.'
      - 'Die Reihe divergiert.'
      - 'Das Kriterium entscheidet nicht.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Divergenz liefert das Kriterium nur für $q > 1$.
      - wert: 2
        meldung: |
          Keine Entscheidung gibt es nur bei $q = 1$.
hinweise:
  - 'Schreibe $\frac{a_{k+1}}{a_k} = \frac{(k + 1)^2}{3^{k+1}}\cdot\frac{3^k}{k^2}$ und kürze $3^k$.'
  - 'Es bleibt $\frac13\cdot\left(\frac{k + 1}{k}\right)^2$. Wogegen strebt $\frac{k + 1}{k}$?'
gefuehrt:
  - text: Kürze $\frac{3^k}{3^{k+1}}$. Welche Zahl bleibt?
    teil:
      typ: zahl
      loesung: "1/3"
      fehler:
        - wert: "3"
          meldung: 'Im Nenner steht die höhere Potenz $3^{k+1} = 3\cdot 3^k$. Es bleibt also $\frac13$.'
    erklaerung: '$\frac{3^k}{3^{k+1}} = \frac{3^k}{3\cdot 3^k} = \frac13$.'
  - text: Der Quotient ist $\frac13\cdot\left(\frac{k + 1}{k}\right)^2$. Wogegen strebt $\left(\frac{k + 1}{k}\right)^2$?
    teil:
      typ: zahl
      loesung: "1"
      fehler:
        - wert: "0"
          meldung: '$\frac{k + 1}{k} = 1 + \frac1k$ strebt gegen $1$, nicht gegen $0$.'
    erklaerung: '$\frac{k + 1}{k} = 1 + \frac1k \to 1$, also auch das Quadrat gegen $1$.'
  - text: Wie groß ist also $q$?
    teil:
      typ: zahl
      loesung: "1/3"
    erklaerung: '$q = \frac13\cdot 1 = \frac13$.'
  - text: Überlege, was $q < 1$ bedeutet. Warum dürfen die ersten Quotienten trotzdem größer als $1$ sein? Für $k = 1$ ist er $\frac43$.
    erklaerung: 'Das Kriterium betrachtet nur den Grenzwert. Endlich viele Anfangssummanden ändern nichts an der Konvergenz. Ab $k = 2$ schrumpfen die Summanden, und zwar auf Dauer etwa um den Faktor $\frac13$.'
loesung: |
  Ansatz: Potenz $3^k$ und Polynom $k^2$ deuten auf das Quotientenkriterium hin. Wir bilden $\frac{a_{k+1}}{a_k}$ und bestimmen den Grenzwert.
  ---
  $\frac{a_{k+1}}{a_k} = \frac{(k + 1)^2}{3^{k+1}}\cdot\frac{3^k}{k^2} = \frac13\left(\frac{k + 1}{k}\right)^2 = \frac13\left(1 + \frac1k\right)^2$.
  ---
  Grenzwert: $\frac13\cdot(1 + 0)^2 = \frac13$. Wegen $q = \frac13 < 1$ konvergiert die Reihe.
  ---
  Kontrolle mit Zahlen: Die Summanden $\frac13;\ \frac49;\ \frac13;\ \frac{16}{81};\ \frac{25}{243}$ steigen zuerst kurz an und fallen dann schnell. Antwort: Die Reihe konvergiert.
```

### Alternierende Reihen und das Leibniz-Kriterium

Eine Reihe heißt **alternierend**, wenn sich die Vorzeichen der Summanden abwechseln. Das Wort heißt „sich abwechselnd“.
Das wichtigste Beispiel ist die **alternierende harmonische Reihe**
$$1 - \frac12 + \frac13 - \frac14 + \frac15 - \dots = \sum_{k=1}^{\infty}\frac{(-1)^{k+1}}{k}.$$
Ohne Vorzeichenwechsel divergiert diese Reihe. Mit Wechsel konvergiert sie. Das zeigt das Kriterium von Gottfried
Wilhelm Leibniz.

:::satz[Leibniz-Kriterium]
Es sei $(a_k)$ eine **monoton fallende Nullfolge** mit $a_k \ge 0$. Dann konvergiert die alternierende Reihe
$s = \sum_{k=1}^{\infty}(-1)^{k+1}a_k = a_1 - a_2 + a_3 - \dots$ Außerdem gilt für jede Partialsumme die
**Fehlerabschätzung**
$$|s - s_n| \le a_{n+1}.$$
:::

In Worten: Der Fehler, wenn man nach $n$ Summanden aufhört, ist höchstens so groß wie der erste weggelassene
Summand. Dabei ist $s$ der Wert der Reihe und $s_n$ die $n$-te Partialsumme.

**Beweisidee.** Die Partialsummen springen hin und her: hinauf um $a_1$, hinunter um $a_2$, hinauf um $a_3$ und so
weiter. Weil die Sprünge immer kleiner werden, wachsen die geraden Partialsummen $s_2, s_4, s_6, \dots$ und die
ungeraden $s_1, s_3, s_5, \dots$ fallen. Jede gerade liegt unter jeder ungeraden. Beide Teilfolgen sind also monoton
und beschränkt und konvergieren. Ihr Abstand $a_{2m+1}$ geht gegen $0$, also haben sie denselben Grenzwert $s$. Der
Wert $s$ liegt immer zwischen zwei aufeinanderfolgenden Partialsummen. Daher kommt die Fehlerabschätzung.

```plot
x: [0, 12.5]
y: [0.4, 1.05]
achsen: { x: "n", y: "sₙ" }
graphen:
  - { f: "0.693147", gestrichelt: true, farbe: 2, label: "s = ln 2" }
punkte:
  - { x: 1, y: 1.0000, farbe: 3 }
  - { x: 2, y: 0.5000, farbe: 0 }
  - { x: 3, y: 0.8333, farbe: 3 }
  - { x: 4, y: 0.5833, farbe: 0 }
  - { x: 5, y: 0.7833, farbe: 3 }
  - { x: 6, y: 0.6167, farbe: 0 }
  - { x: 7, y: 0.7595, farbe: 3 }
  - { x: 8, y: 0.6345, farbe: 0 }
  - { x: 9, y: 0.7456, farbe: 3 }
  - { x: 10, y: 0.6456, farbe: 0 }
  - { x: 11, y: 0.7365, farbe: 3, label: "ungerade n fallen" }
  - { x: 12, y: 0.6532, farbe: 0, label: "gerade n wachsen" }
beschriftung: Partialsummen der alternierenden harmonischen Reihe 1 − ½ + ⅓ − …. Die violetten Punkte (ungerades n) fallen, die blauen Punkte (gerades n) wachsen. Beide nähern sich von zwei Seiten dem Wert ln 2 ≈ 0,693. Der Wert liegt immer zwischen zwei aufeinanderfolgenden Partialsummen.
```

:::beispiel[Fehlerabschätzung bei der alternierenden harmonischen Reihe]
Die Summanden $a_k = \frac1k$ bilden eine monoton fallende Nullfolge. Nach Leibniz konvergiert die Reihe. Ihr Wert
ist $\ln 2 \approx 0{,}6931$. Das beweisen wir hier nicht.

**Schritt 1, Partialsumme.** $s_4 = 1 - \frac12 + \frac13 - \frac14 = \frac{12 - 6 + 4 - 3}{12} = \frac{7}{12} \approx 0{,}5833$.

**Schritt 2, Fehlerschranke.** Der erste weggelassene Summand ist $a_5 = \frac15 = 0{,}2$. Also gilt $|s - s_4| \le 0{,}2$.

**Schritt 3, Kontrolle.** Der tatsächliche Fehler ist $0{,}6931 - 0{,}5833 \approx 0{,}1098$. Das ist tatsächlich
höchstens $0{,}2$ ✓. Die Abschätzung ist eine Garantie, kein genauer Wert.
:::

:::achtung[Den falschen Summanden als Fehlerschranke nehmen]
Falsch: „$s_4 = \frac{7}{12}$, also ist der Fehler höchstens $a_4 = \frac14$.“

Richtig: Die Schranke ist der **erste weggelassene** Summand, also $a_{n+1}$. Bei $s_4$ ist das $a_5 = \frac15$. Der
Summand $a_4$ ist ja schon in $s_4$ enthalten. Merke: Wer nach $n$ Summanden aufhört, macht höchstens den Fehler des
nächsten Summanden.
:::

### Absolute Konvergenz

Eine Reihe $\sum a_k$ heißt **absolut konvergent**, wenn sogar die Reihe der Beträge $\sum |a_k|$ konvergiert. Dann
konvergiert auch $\sum a_k$ selbst. Das sagen wir hier ohne Beweis.

- **Beispiel:** $\sum\frac{(-1)^{k+1}}{k^2}$ ist absolut konvergent, denn $\sum\frac{1}{k^2}$ konvergiert.
- **Nicht-Beispiel:** Die alternierende harmonische Reihe konvergiert, aber $\sum\left|\frac{(-1)^{k+1}}{k}\right| = \sum\frac1k$
  divergiert. Sie ist also **nicht** absolut konvergent. Man nennt so eine Reihe **bedingt konvergent**.

Das Quotientenkriterium liefert bei $q < 1$ sogar absolute Konvergenz, weil es mit Beträgen arbeitet.

:::merke[Reihenfolge der Tests für eine unbekannte Reihe]
1. **Gehen die Summanden gegen $0$?** Wenn nicht: divergent.
2. **Geometrisch oder Teleskop?** Dann den Wert direkt ausrechnen.
3. **Potenzen $b^k$ oder Fakultäten $k!$?** Quotientenkriterium.
4. **Bruch mit Potenzen von $k$?** Mit $\sum\frac1k$ (divergent) oder $\sum\frac{1}{k^2}$ (konvergent) vergleichen.
5. **Wechselnde Vorzeichen?** Leibniz-Kriterium prüfen: Beträge monoton fallend und Nullfolge.
:::

```reflexion
frage: Warum verlangt das Leibniz-Kriterium, dass die Beträge $a_k$ eine Nullfolge sind? Was würde ohne diese Bedingung passieren?
antwort: |
  Die Partialsummen springen jeweils um $a_k$ hinauf oder hinunter. Ist $(a_k)$ keine Nullfolge, bleiben die Sprünge
  groß. Die Partialsummen können sich dann keiner Zahl nähern. Beispiel: $1 - 1 + 1 - 1 + \dots$ hat die Partialsummen
  $1, 0, 1, 0, \dots$ und divergiert. Das passt zum notwendigen Kriterium: Ohne Nullfolge der Summanden gibt es keine Konvergenz.
```

```aufgabe
id: gf-krit-leibniz-schranke
titel: Fehlerschranke nach Leibniz
niveau: 1
lernziel: 8
kompetenz: rechnen
angabe: |
  Die Reihe $\displaystyle\sum_{k=1}^{\infty}\frac{(-1)^{k+1}}{k^2} = 1 - \frac14 + \frac19 - \dots$ erfüllt das Leibniz-Kriterium.

  a) Berechne $s_3$ als Bruch.

  b) Wie groß ist die Fehlerschranke für $|s - s_3|$ nach Leibniz?
teile:
  - typ: zahl
    label: 'a) $s_3$'
    loesung: "1 - 1/4 + 1/9"
    anzeige: '\tfrac{31}{36}'
    fehler:
      - wert: "1 + 1/4 + 1/9"
        meldung: |
          Die Vorzeichen wechseln: Der zweite Summand ist $-\frac14$.
  - typ: zahl
    label: 'b) Schranke'
    loesung: "1/16"
    anzeige: '\tfrac{1}{16} = 0{,}0625'
    fehler:
      - wert: "1/9"
        meldung: |
          $\frac19$ ist schon in $s_3$ enthalten. Die Schranke ist der **erste weggelassene** Summand $a_4$.
hinweise:
  - 'b) Fehler $\le a_{n+1}$, hier mit $n = 3$.'
loesung: |
  Ansatz: Wir addieren die ersten drei Summanden mit wechselndem Vorzeichen. Die Schranke ist nach Leibniz der erste weggelassene Betrag $a_4 = \frac{1}{4^2}$.
  ---
  a) $s_3 = 1 - \frac14 + \frac19 = \frac{36 - 9 + 4}{36} = \frac{31}{36} \approx 0{,}8611$.
  ---
  b) $|s - s_3| \le a_4 = \frac{1}{16} = 0{,}0625$. Kontrolle: Der wahre Wert ist $\frac{\pi^2}{12} \approx 0{,}8225$, der Fehler also etwa $0{,}039 \le 0{,}0625$ ✓.
```

```aufgabe
id: gf-krit-leibniz-n
titel: Wie viele Summanden für zwei Stellen?
niveau: 2
lernziel: 8
kompetenz: anwenden
angabe: |
  Ein Programm berechnet Partialsummen der alternierenden harmonischen Reihe $1 - \frac12 + \frac13 - \dots$
  Für welches kleinste $n$ **garantiert** die Leibniz-Abschätzung einen Fehler $|s - s_n| < 0{,}01$?
teile:
  - typ: zahl
    label: 'kleinstes $n$'
    loesung: "100"
    toleranz: 0.1
    fehler:
      - wert: "99"
        meldung: |
          Für $n = 99$ ist die Schranke $a_{100} = \frac{1}{100} = 0{,}01$. Das ist nicht **kleiner** als $0{,}01$.
      - wert: "101"
        meldung: |
          Die Schranke ist $a_{n+1} = \frac{1}{n + 1}$, nicht $\frac1n$. Mit $n + 1 > 100$ kommst du auf eine kleinere Zahl.
hinweise:
  - 'Nach Leibniz ist der Fehler höchstens $a_{n+1} = \frac{1}{n + 1}$.'
  - 'Löse $\frac{1}{n + 1} < 0{,}01$ nach $n$ auf.'
loesung: |
  Ansatz: Die Leibniz-Schranke für den Fehler ist der erste weggelassene Summand $a_{n+1} = \frac{1}{n + 1}$. Wir verlangen, dass diese Schranke kleiner als $0{,}01$ ist.
  ---
  $\frac{1}{n + 1} < 0{,}01 \iff n + 1 > 100 \iff n > 99$. Kleinstes $n = 100$.
  ---
  Kontrolle: Der tatsächliche Fehler bei $n = 100$ ist etwa $0{,}005$, also sicher unter $0{,}01$ ✓. Die Reihe konvergiert langsam: Für zwei Nachkommastellen braucht man $100$ Summanden.
```

```aufgabe
id: gf-krit-minorante
titel: Divergenz mit einer Minorante begründen
niveau: 2
lernziel: 8
kompetenz: begruenden
angabe: |
  Welche Begründung zeigt richtig, dass $\displaystyle\sum_{k=1}^{\infty}\frac{k + 1}{k^2}$ divergiert?
teile:
  - typ: auswahl
    optionen:
      - 'Es ist $\frac{k + 1}{k^2} \ge \frac{k}{k^2} = \frac1k$, und $\sum\frac1k$ divergiert. Nach dem Minorantenkriterium divergiert die Reihe.'
      - 'Die Summanden bilden keine Nullfolge, also divergiert die Reihe.'
      - 'Der Quotient $\frac{a_{k+1}}{a_k}$ strebt gegen eine Zahl größer als $1$.'
      - 'Es ist $\frac{k + 1}{k^2} \le \frac{2}{k}$, und $\sum\frac2k$ divergiert.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Prüfe nach: $\frac{k + 1}{k^2} = \frac1k + \frac{1}{k^2}$ geht gegen $0$. Die Summanden **sind** eine Nullfolge.
      - wert: 2
        meldung: |
          Rechne nach: Der Quotient strebt gegen $1$. Dann entscheidet das Quotientenkriterium nichts.
      - wert: 3
        meldung: |
          Die Ungleichung stimmt, aber sie zeigt in die falsche Richtung. Liegt eine Reihe **unter** einer divergenten Reihe, folgt nichts.
hinweise:
  - 'Für Divergenz brauchst du eine **kleinere** Reihe, die divergiert.'
  - 'Vergleiche $\frac{k + 1}{k^2}$ mit $\frac{1}{k}$.'
loesung: |
  Ansatz: Für einen Divergenzbeweis durch Vergleich brauchen wir eine divergente Minorante, also eine kleinere Reihe, die divergiert.
  ---
  Wegen $k + 1 > k$ ist $\frac{k + 1}{k^2} > \frac{k}{k^2} = \frac1k$. Die harmonische Reihe divergiert. Nach dem Minorantenkriterium divergiert auch die gegebene Reihe.
  ---
  Die anderen Optionen scheitern: Die Summanden sind eine Nullfolge, der Quotient strebt gegen $1$, und Option 4 vergleicht nach oben. Antwort: Option 1.
```

```aufgabe
id: gf-krit-fehlersuche
titel: Fehler in einer Konvergenzbegründung finden
niveau: 2
lernziel: 8
kompetenz: begruenden
angabe: |
  Eine Mitschülerin schreibt: „Bei $\sum\frac{1}{\sqrt k}$ ist $\frac{a_{k+1}}{a_k} = \frac{\sqrt k}{\sqrt{k + 1}} < 1$ für alle $k$.
  Nach dem Quotientenkriterium konvergiert die Reihe.“

  a) Gegen welche Zahl strebt der Quotient $\frac{\sqrt k}{\sqrt{k + 1}}$?

  b) Was ist an der Begründung falsch?
teile:
  - typ: zahl
    label: 'a) Grenzwert des Quotienten'
    loesung: "1"
    fehler:
      - wert: "0"
        meldung: |
          Zähler und Nenner wachsen beide. Schreibe $\frac{\sqrt k}{\sqrt{k+1}} = \sqrt{\frac{k}{k + 1}}$. Wogegen strebt $\frac{k}{k + 1}$?
  - typ: auswahl
    label: 'b)'
    optionen:
      - 'Es kommt auf den Grenzwert $q$ an. Hier ist $q = 1$, und dann entscheidet das Kriterium nichts.'
      - 'Der Quotient ist in Wahrheit größer als $1$.'
      - 'Das Quotientenkriterium gilt nur für alternierende Reihen.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Prüfe mit $k = 1$: $\frac{1}{\sqrt2} \approx 0{,}71 < 1$. Jeder einzelne Quotient ist tatsächlich kleiner als $1$. Der Fehler liegt woanders.
      - wert: 2
        meldung: |
          Das Quotientenkriterium gilt für beliebige Reihen mit Summanden ungleich $0$. Der Fehler liegt woanders.
hinweise:
  - 'a) $\frac{\sqrt k}{\sqrt{k + 1}} = \sqrt{\frac{k}{k + 1}}$.'
  - 'b) Was genau verlangt das Kriterium: jeden Quotienten kleiner als $1$ oder den Grenzwert kleiner als $1$?'
loesung: |
  Ansatz: Wir berechnen den Grenzwert des Quotienten, denn nur er entscheidet im Quotientenkriterium.
  ---
  a) $\sqrt{\frac{k}{k + 1}} = \sqrt{\frac{1}{1 + 1/k}} \to \sqrt1 = 1$.
  ---
  b) Das Kriterium verlangt $q = \lim\frac{a_{k+1}}{a_k} < 1$. Hier ist $q = 1$, also gibt es keine Entscheidung.
  ---
  Tatsächlich divergiert die Reihe: $\frac{1}{\sqrt k} \ge \frac1k$, und die harmonische Reihe ist eine divergente Minorante. Die Schlussfolgerung der Mitschülerin ist also sogar falsch.
```

```aufgabe
id: gf-krit-entscheiden
titel: Vier Reihen, vier Werkzeuge
niveau: 3
lernziel: 8
kompetenz: begruenden
angabe: |
  Welche der Reihen konvergieren? Begründe jede Entscheidung mit einem passenden Kriterium.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$\displaystyle\sum_{k=1}^{\infty}\frac{k}{k^2 + 1}$'
      - '$\displaystyle\sum_{k=1}^{\infty}\frac{k^3}{2^k}$'
      - '$\displaystyle\sum_{k=1}^{\infty}\frac{(-1)^k}{\sqrt k}$'
      - '$\displaystyle\sum_{k=1}^{\infty}\left(\frac{k}{k + 1}\right)^k$'
    richtig: [1, 2]
    fehler:
      - wert: [0, 1, 2]
        meldung: |
          $\frac{k}{k^2 + 1}$ verhält sich für große $k$ wie $\frac1k$. Vergleiche nach unten mit $\frac{1}{2k}$.
      - wert: [1]
        meldung: |
          $\frac{(-1)^k}{\sqrt k}$ hat wechselnde Vorzeichen, und $\frac{1}{\sqrt k}$ fällt monoton gegen $0$. Welches Kriterium passt?
      - wert: [1, 2, 3]
        meldung: |
          Die Summanden $\left(\frac{k}{k + 1}\right)^k$ gehen gegen $\frac1e \approx 0{,}37$, nicht gegen $0$.
  - typ: text
    label: 'Begründungen'
    muster: |
      1) Für $k \ge 1$ ist $k^2 + 1 \le 2k^2$, also $\frac{k}{k^2 + 1} \ge \frac{k}{2k^2} = \frac{1}{2k}$. Die Reihe $\sum\frac{1}{2k}$
      divergiert, also divergiert die Reihe nach dem Minorantenkriterium.
      2) Quotient $\frac{(k + 1)^3}{2k^3} \to \frac12 < 1$: konvergent nach dem Quotientenkriterium.
      3) Alternierend, $\frac{1}{\sqrt k}$ ist monoton fallend und eine Nullfolge: konvergent nach Leibniz.
      4) $\left(\frac{k}{k + 1}\right)^k = \frac{1}{(1 + 1/k)^k} \to \frac1e \neq 0$: divergent nach dem notwendigen Kriterium.
hinweise:
  - 'Ordne jeder Reihe zuerst einen Test zu: Vergleich, Quotient, Leibniz oder notwendiges Kriterium.'
  - 'Bei 4) hilft der Standardgrenzwert $\left(1 + \frac1k\right)^k \to e$.'
loesung: |
  Ansatz: Wir gehen die Reihenfolge der Tests durch und wählen für jede Reihe das Werkzeug, das zu ihrer Bauart passt.
  ---
  1) $\frac{k}{k^2 + 1} \ge \frac{1}{2k}$, weil $k^2 + 1 \le 2k^2$ für $k \ge 1$. Die Minorante $\sum\frac{1}{2k}$ divergiert. Also divergiert die Reihe.
  ---
  2) $\frac{a_{k+1}}{a_k} = \frac{(k + 1)^3}{2^{k+1}}\cdot\frac{2^k}{k^3} = \frac12\left(1 + \frac1k\right)^3 \to \frac12$. Wegen $q < 1$ konvergent.
  ---
  3) Vorzeichen wechseln, $\frac{1}{\sqrt k}$ fällt monoton und ist eine Nullfolge. Nach Leibniz konvergent. Sie ist aber nicht absolut konvergent, weil $\sum\frac{1}{\sqrt k}$ divergiert.
  ---
  4) $\left(\frac{k}{k + 1}\right)^k = \frac{1}{(1 + 1/k)^k} \to \frac1e \neq 0$. Die Summanden sind keine Nullfolge, die Reihe divergiert. Ergebnis: Es konvergieren genau die Reihen 2 und 3.
```

## Gemischte Wiederholung

In diesem Abschnitt sind die Aufgaben absichtlich gemischt. Einige stammen aus früheren Kapiteln, die du für
Grenzwerte brauchst. Bei anderen musst du zuerst selbst erkennen, **welches Verfahren** passt. Genau das verlangt die
Prüfung: Dort steht nicht dabei, aus welchem Abschnitt eine Aufgabe kommt. Wenn du bei einer Aufgabe hängst, schau in
den Abschnitt, den der Hinweis nennt.

```aufgabe
id: gf-mix-verfahren-grenzwert
titel: Welches Verfahren passt? Grenzwerte
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Du sollst nichts ausrechnen. Wähle für jede Folge das Verfahren, mit dem man ihren Grenzwert am schnellsten findet.

  a) $\dfrac{3n^2 - n}{5n^2 + 2}$  b) $\dfrac{\cos n}{n}$  c) $\left(1 + \dfrac{3}{n}\right)^n$  d) $\sqrt{n^2 + 2n} - n$
teile:
  - typ: auswahl
    label: 'a)'
    optionen: ['höchste Potenz herausheben', 'beschränkt mal Nullfolge', 'Standardgrenzwert mit $e$', 'mit der Summe erweitern (Wurzeltrick)']
    richtig: [0]
    fehler:
      - wert: 3
        meldung: 'Hier steht keine Wurzel. Bei einem Bruch aus Polynomen hilft das Herausheben der höchsten Potenz.'
      - wert: 2
        meldung: 'Der Standardgrenzwert mit $e$ braucht die Form $\left(1 + \frac{x}{n}\right)^n$. Hier steht ein Bruch aus Polynomen.'
  - typ: auswahl
    label: 'b)'
    optionen: ['höchste Potenz herausheben', 'beschränkt mal Nullfolge', 'Standardgrenzwert mit $e$', 'mit der Summe erweitern (Wurzeltrick)']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: '$\cos n$ ist kein Polynom. Es schwankt zwischen $-1$ und $1$, ist also beschränkt. Und $\frac1n$ ist eine Nullfolge.'
  - typ: auswahl
    label: 'c)'
    optionen: ['höchste Potenz herausheben', 'beschränkt mal Nullfolge', 'Standardgrenzwert mit $e$', 'mit der Summe erweitern (Wurzeltrick)']
    richtig: [2]
    fehler:
      - wert: 1
        meldung: 'Die Basis geht gegen $1$, der Exponent wächst. Das ist die unbestimmte Form „$1$ hoch unendlich“, für die es den Standardgrenzwert $e^x$ gibt.'
  - typ: auswahl
    label: 'd)'
    optionen: ['höchste Potenz herausheben', 'beschränkt mal Nullfolge', 'Standardgrenzwert mit $e$', 'mit der Summe erweitern (Wurzeltrick)']
    richtig: [3]
    fehler:
      - wert: 0
        meldung: 'Vorher steht eine Differenz „unendlich minus unendlich“. Die Wurzel muss zuerst weg. Das leistet die dritte binomische Formel.'
hinweise:
  - 'Achte auf die äußere Form: Bruch aus Polynomen, beschränkter Faktor, Potenz mit $n$ im Exponenten, Wurzeldifferenz.'
loesung: |
  Ansatz: Wir ordnen jede Folge nach ihrer Form dem passenden Werkzeug zu. Die Werkzeuge stehen in [11.8 Grenzwertsätze und Einschließungssatz](/lernen/mathe3/grenzwerte-folgen/grenzwertsaetze-und-einschliessungssatz) und [11.9 Rationale Folgen, Wurzeltrick und Standardgrenzwerte](/lernen/mathe3/grenzwerte-folgen/rationale-folgen-wurzeltrick-und-standardgrenzwerte).
  ---
  a) Bruch aus Polynomen: höchste Potenz $n^2$ herausheben, Grenzwert $\frac35$. b) $\cos n$ ist beschränkt, $\frac1n$ ist eine Nullfolge, Grenzwert $0$.
  ---
  c) Form $\left(1 + \frac xn\right)^n$ mit $x = 3$: Grenzwert $e^3$. d) Wurzeldifferenz: mit $\sqrt{n^2 + 2n} + n$ erweitern, Grenzwert $1$.
```

```aufgabe
id: gf-mix-verfahren-konvergenz
titel: Welches Verfahren passt? Konvergenz begründen
niveau: 2
lernziel: 6
kompetenz: verstehen
angabe: |
  Wähle jeweils das Argument, mit dem man am einfachsten entscheidet, ob Konvergenz vorliegt. Rechnen ist nicht nötig.

  a) die rekursive Folge $a_1 = 1$, $a_{n+1} = \sqrt{3 + a_n}$

  b) die Reihe $\displaystyle\sum_{k=1}^{\infty}\frac{k}{2k + 1}$

  c) die Reihe $\displaystyle\sum_{k=1}^{\infty}\frac{1}{k(k + 2)}$
teile:
  - typ: auswahl
    label: 'a)'
    optionen: ['Monotoniekriterium (monoton und beschränkt)', 'notwendiges Kriterium (Summanden keine Nullfolge)', 'Teleskopsumme (Partialbruchzerlegung)']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Das notwendige Kriterium gilt für **Reihen**. Hier ist eine rekursive **Folge** gegeben, deren Grenzwert man nicht kennt.'
  - typ: auswahl
    label: 'b)'
    optionen: ['Monotoniekriterium (monoton und beschränkt)', 'notwendiges Kriterium (Summanden keine Nullfolge)', 'Teleskopsumme (Partialbruchzerlegung)']
    richtig: [1]
    fehler:
      - wert: 2
        meldung: 'Prüfe zuerst die Summanden: $\frac{k}{2k + 1}$ geht gegen $\frac12$, nicht gegen $0$. Dann ist die Frage schon entschieden.'
  - typ: auswahl
    label: 'c)'
    optionen: ['Monotoniekriterium (monoton und beschränkt)', 'notwendiges Kriterium (Summanden keine Nullfolge)', 'Teleskopsumme (Partialbruchzerlegung)']
    richtig: [2]
    fehler:
      - wert: 1
        meldung: 'Die Summanden $\frac{1}{k(k + 2)}$ bilden eine Nullfolge. Das notwendige Kriterium sagt dann **nichts**. Hier hilft die Zerlegung $\frac{1}{k(k+2)} = \frac12\left(\frac1k - \frac{1}{k + 2}\right)$.'
hinweise:
  - 'Unterscheide: Ist eine Folge oder eine Reihe gegeben? Kennst du den Grenzwert schon?'
  - 'Bei Reihen prüfst du zuerst, ob die Summanden eine Nullfolge bilden.'
loesung: |
  Ansatz: Zuerst klären, ob eine Folge oder eine Reihe vorliegt, und dann das Werkzeug aus dem passenden Abschnitt wählen.
  ---
  a) Rekursive Folge ohne bekannten Grenzwert: Monotoniekriterium. Sie wächst und ist durch die positive Lösung von $a^2 = 3 + a$ beschränkt.
  ---
  b) Die Summanden gehen gegen $\frac12 \neq 0$. Nach dem notwendigen Kriterium divergiert die Reihe.
  ---
  c) Partialbruchzerlegung ergibt eine Teleskopsumme. Die Reihe konvergiert, ihr Wert ist $\frac12\left(1 + \frac12\right) = \frac34$.
```

```aufgabe
id: gf-mix-k2-betrag
titel: Rückblick Kapitel 2 – eine Betragsungleichung
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Löse die Ungleichung $|2x - 7| < 0{,}5$. Gib die Lösungsmenge als offenes Intervall $(u;\ o)$ an.
  Diese Umformung steckt in jeder $\varepsilon$-Umgebung. Wiederholung: [Kapitel 2, „Bruch-, Betrags- und Wurzelungleichungen“](/lernen/mathe3/gleichungen/bruch-betrags-und-wurzelungleichungen).
teile:
  - typ: zahl
    label: 'linke Grenze $u$'
    loesung: "6.5/2"
    anzeige: '3{,}25'
    fehler:
      - wert: "6.5"
        meldung: 'Aus $6{,}5 < 2x$ folgt noch nicht $x > 6{,}5$. Teile durch $2$.'
      - wert: "3.5"
        meldung: 'Das ist die Mitte, um die das Band liegt. Die Breite nach links ist $\frac{0{,}5}{2} = 0{,}25$.'
  - typ: zahl
    label: 'rechte Grenze $o$'
    loesung: "7.5/2"
    anzeige: '3{,}75'
    fehler:
      - wert: "7.5"
        meldung: 'Aus $2x < 7{,}5$ folgt $x < 3{,}75$. Teile durch $2$.'
hinweise:
  - 'Schreibe die Doppelungleichung $-0{,}5 < 2x - 7 < 0{,}5$ und forme alle drei Teile gleichzeitig um.'
loesung: |
  Ansatz: $|y| < 0{,}5$ bedeutet $-0{,}5 < y < 0{,}5$. Mit $y = 2x - 7$ entsteht $-0{,}5 < 2x - 7 < 0{,}5$.
  ---
  $7$ addieren: $6{,}5 < 2x < 7{,}5$. Durch $2$ teilen: $3{,}25 < x < 3{,}75$.
  ---
  Kontrolle: Die Mitte $3{,}5$ erfüllt $|2\cdot 3{,}5 - 7| = 0 < 0{,}5$. Der Rand $3{,}75$ liefert genau $0{,}5$ und gehört nicht dazu ✓.
```

```aufgabe
id: gf-mix-k8-geosumme
titel: Rückblick Kapitel 8 – endliche gegen unendliche Summe
niveau: 1
lernziel: 8
kompetenz: rechnen
angabe: |
  Gegeben ist die Summe $3 + 1{,}5 + 0{,}75 + \dots$, bei der jeder Summand halb so groß ist wie der vorige.

  a) Berechne die Summe der ersten $6$ Summanden mit der Formel aus [Kapitel 8, „Endliche geometrische Reihen“](/lernen/mathe3/folgen-reihen/endliche-geometrische-reihen).

  b) Wie weit liegt diese Teilsumme unter dem Wert der unendlichen Reihe?
teile:
  - typ: zahl
    label: 'a) $s_6$'
    loesung: "3*(1 - 0.5^6)/(1 - 0.5)"
    anzeige: '5{,}90625'
    toleranz: 0.0001
    fehler:
      - wert: "3*(1 - 0.5^5)/(1 - 0.5)"
        meldung: 'Das sind nur fünf Summanden. Im Zähler steht $1 - q^n$ mit $n = 6$, der Anzahl der Summanden.'
      - wert: "6"
        meldung: 'Das ist der Wert der **unendlichen** Reihe. Für sechs Summanden brauchst du die endliche Formel mit $1 - q^6$.'
  - typ: zahl
    label: 'b) Abstand'
    loesung: "6 - 3*(1 - 0.5^6)/(1 - 0.5)"
    anzeige: '0{,}09375'
    toleranz: 0.0001
    fehler:
      - wert: "0"
        meldung: 'Eine Teilsumme mit endlich vielen positiven Summanden erreicht den Reihenwert nie. Es fehlt immer der Rest.'
hinweise:
  - 'Erstes Glied $3$, Quotient $q = 0{,}5$, $n = 6$. Die unendliche Reihe hat den Wert $\frac{3}{1 - 0{,}5}$.'
loesung: |
  Ansatz: Endliche geometrische Summe $s_n = a_1\cdot\frac{1 - q^n}{1 - q}$ mit $a_1 = 3$, $q = 0{,}5$, $n = 6$.
  ---
  a) $s_6 = 3\cdot\frac{1 - 0{,}015625}{0{,}5} = 6\cdot 0{,}984375 = 5{,}90625$.
  ---
  b) Unendliche Reihe: $\frac{3}{1 - 0{,}5} = 6$. Abstand $6 - 5{,}90625 = 0{,}09375 = 6\cdot 0{,}5^6$. Der Abstand ist genau der Anteil $q^n$ des Reihenwerts. Er halbiert sich mit jedem weiteren Summanden.
```

```aufgabe
id: gf-mix-k1-verdopplung
titel: Rückblick Kapitel 1 – wann wird die Schranke überschritten?
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Ein Guthaben von $1000$ Euro wird jährlich mit $3\,\%$ verzinst. Nach $n$ Jahren beträgt es $G_n = 1000\cdot 1{,}03^n$ Euro.
  Die Folge $(G_n)$ divergiert bestimmt gegen $\infty$.

  Ab welchem Jahr $N$ ist das Guthaben erstmals größer als die Schranke $K = 2000$ Euro? Logarithmen wiederholst du in
  [Kapitel 1, „Logarithmen“](/lernen/mathe3/zahlen/logarithmen).
teile:
  - typ: zahl
    label: 'Jahr $N$'
    loesung: "24"
    fehler:
      - wert: "23"
        meldung: 'Die Rechnung liefert $n > 23{,}45$. Nach $23$ Jahren sind es erst $1000\cdot 1{,}03^{23} \approx 1973{,}59$ Euro.'
      - wert: "34"
        meldung: 'Mit $3\,\%$ linearem Zuwachs (jedes Jahr $30$ Euro) bräuchte man $34$ Jahre. Hier wächst das Guthaben aber exponentiell.'
hinweise:
  - 'Teile durch $1000$: $1{,}03^n > 2$.'
  - 'Logarithmieren: $n\cdot\ln 1{,}03 > \ln 2$. Hier ist $\ln 1{,}03$ positiv, das Zeichen bleibt.'
loesung: |
  Ansatz: Bestimmte Divergenz heißt, dass jede Schranke ab einer Stelle überschritten wird. Wir lösen $1000\cdot 1{,}03^n > 2000$.
  ---
  Durch $1000$ teilen: $1{,}03^n > 2$. Logarithmieren: $n\ln 1{,}03 > \ln 2$, also $n > \frac{\ln 2}{\ln 1{,}03} \approx 23{,}45$.
  ---
  Die kleinste ganze Zahl darüber ist $N = 24$. Kontrolle: $1000\cdot 1{,}03^{23} \approx 1973{,}59$ und $1000\cdot 1{,}03^{24} \approx 2032{,}79$ Euro ✓.
```

```aufgabe
id: gf-mix-k8-induktion
titel: Rückblick Kapitel 8 – Induktion für eine Schranke
niveau: 3
lernziel: 6
kompetenz: begruenden
angabe: |
  Gegeben ist die rekursive Folge $a_1 = 1$, $a_{n+1} = \dfrac{a_n + 4}{2}$. Die vollständige Induktion wiederholst du in
  [Kapitel 8, „Vollständige Induktion“](/lernen/mathe3/folgen-reihen/vollstaendige-induktion).

  a) Berechne $a_3$.

  b) Zeige mit vollständiger Induktion, dass $a_n < 4$ für alle $n$ gilt.

  c) Die Folge ist wachsend. Bestimme ihren Grenzwert.
teile:
  - typ: zahl
    label: 'a) $a_3$'
    loesung: "((1 + 4)/2 + 4)/2"
    anzeige: '3{,}25'
    fehler:
      - wert: "2.5"
        meldung: 'Das ist $a_2$. Wende die Rekursion noch einmal an: $a_3 = \frac{a_2 + 4}{2}$.'
  - typ: text
    label: 'b) Induktionsbeweis'
    muster: |
      Induktionsanfang: $a_1 = 1 < 4$ ✓.

      Induktionsschritt: Angenommen, $a_n < 4$ gilt für ein $n$. Dann ist $a_n + 4 < 8$, also $a_{n+1} = \frac{a_n + 4}{2} < \frac82 = 4$.
      Damit gilt die Aussage auch für $n + 1$, und nach dem Induktionsprinzip für alle $n$.
  - typ: zahl
    label: 'c) Grenzwert'
    loesung: "4"
    fehler:
      - wert: "2"
        meldung: 'Aus $a = \frac{a + 4}{2}$ folgt $2a = a + 4$. Ziehe $a$ ab, nicht $2$.'
hinweise:
  - 'b) Induktionsanfang mit $a_1$. Im Schritt nimmst du $a_n < 4$ an und schätzt $a_{n+1} = \frac{a_n + 4}{2}$ ab.'
  - 'c) Wachsend und nach oben beschränkt: Der Grenzwert $a$ existiert und erfüllt $a = \frac{a + 4}{2}$.'
loesung: |
  Ansatz: Für die Schranke brauchen wir Induktion, weil die Folge rekursiv definiert ist. Für den Grenzwert nutzen wir das Monotoniekriterium.
  ---
  a) $a_2 = \frac{1 + 4}{2} = 2{,}5$ und $a_3 = \frac{2{,}5 + 4}{2} = 3{,}25$.
  ---
  b) Anfang: $a_1 = 1 < 4$. Schritt: Aus $a_n < 4$ folgt $a_n + 4 < 8$ und damit $a_{n+1} = \frac{a_n + 4}{2} < 4$. Also gilt $a_n < 4$ für alle $n$.
  ---
  c) Wachsend und durch $4$ beschränkt: Nach dem Monotoniekriterium existiert $a = \lim a_n$. Grenzübergang: $a = \frac{a + 4}{2}$, also $2a = a + 4$ und $a = 4$. Kontrolle: Die Glieder $1;\ 2{,}5;\ 3{,}25;\ 3{,}625;\ \dots$ nähern sich $4$ ✓.
```

```aufgabe
id: gf-mix-k9-newton
titel: Rückblick Kapitel 9 – das Newton-Verfahren als Folge
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Das Newton-Verfahren aus [Kapitel 9, „Das Newton-Verfahren“](/lernen/mathe3/differentialrechnung/das-newton-verfahren-gleichungen-naeherungsweise-loesen) liefert für
  $f(x) = x^2 - 7$ die Rekursion $x_{n+1} = \dfrac12\left(x_n + \dfrac{7}{x_n}\right)$. Start ist $x_1 = 3$.

  a) Berechne $x_3$ auf $4$ Nachkommastellen.

  b) Gegen welche Zahl konvergiert die Folge? Nimm an, dass der Grenzwert existiert und positiv ist.
teile:
  - typ: zahl
    label: 'a) $x_3$'
    loesung: "127/48"
    anzeige: '\tfrac{127}{48} \approx 2{,}6458'
    toleranz: 0.0001
    fehler:
      - wert: "8/3"
        meldung: 'Das ist $x_2$. Setze $x_2 = \frac83$ noch einmal in die Rekursion ein.'
  - typ: zahl
    label: 'b) Grenzwert'
    loesung: "sqrt(7)"
    anzeige: '\sqrt7 \approx 2{,}6458'
    toleranz: 0.0001
    fehler:
      - wert: "7"
        meldung: 'Aus $a = \frac12\left(a + \frac7a\right)$ folgt $a^2 = 7$. Die Zahl $7$ ist $a^2$, nicht $a$.'
      - wert: "3.5"
        meldung: 'Der Grenzwert erfüllt $a = \frac12\left(a + \frac7a\right)$. Multipliziere mit $2a$ und löse nach $a$ auf.'
hinweise:
  - 'a) $x_2 = \frac12\left(3 + \frac73\right) = \frac83$. Dann $x_3 = \frac12\left(\frac83 + \frac{21}{8}\right)$.'
  - 'b) Fixpunktgleichung $a = \frac12\left(a + \frac7a\right)$ mit $2a$ multiplizieren.'
loesung: |
  Ansatz: Die Newton-Näherungen bilden eine rekursive Folge. Ihren Grenzwert findet man mit der Fixpunktgleichung, wenn er existiert.
  ---
  a) $x_2 = \frac12\left(3 + \frac73\right) = \frac83$. Dann $x_3 = \frac12\left(\frac83 + \frac{7\cdot 3}{8}\right) = \frac12\cdot\frac{64 + 63}{24} = \frac{127}{48} \approx 2{,}6458$.
  ---
  b) Grenzübergang: $a = \frac12\left(a + \frac7a\right)$. Mal $2a$: $2a^2 = a^2 + 7$, also $a^2 = 7$. Wegen $a > 0$ ist $a = \sqrt7 \approx 2{,}6458$.
  ---
  Kontrolle: $x_3$ stimmt schon auf vier Nachkommastellen mit $\sqrt 7$ überein. Das Newton-Verfahren konvergiert sehr schnell.
```

```aufgabe
id: gf-mix-folge-reihe
titel: Folge oder Reihe?
niveau: 2
lernziel: 8
kompetenz: verstehen
angabe: |
  Gegeben ist $a_k = \left(\dfrac23\right)^k$ für $k \ge 1$.

  a) Bestimme den Grenzwert der **Folge** $(a_k)$.

  b) Bestimme den Wert der **Reihe** $\displaystyle\sum_{k=1}^{\infty} a_k$.
teile:
  - typ: zahl
    label: 'a) $\lim a_k$'
    loesung: "0"
    fehler:
      - wert: "2"
        meldung: 'Das ist der Wert der **Reihe**, also der Grenzwert der Partialsummen. Gefragt ist, wohin die einzelnen Glieder $\left(\frac23\right)^k$ gehen.'
  - typ: zahl
    label: 'b) Reihenwert'
    loesung: "(2/3)/(1 - 2/3)"
    anzeige: '2'
    fehler:
      - wert: "3"
        meldung: 'Die Formel $\frac{1}{1 - q}$ gilt für den Start bei $k = 0$. Hier beginnt die Reihe bei $k = 1$, das erste Glied ist $\frac23$.'
      - wert: "0"
        meldung: 'Dass die Glieder gegen $0$ gehen, heißt nicht, dass ihre Summe $0$ ist. Alle Summanden sind positiv.'
hinweise:
  - 'a) $\left(\frac23\right)^k$ ist eine Potenz mit Basis zwischen $0$ und $1$.'
  - 'b) Geometrische Reihe: erstes Glied durch $(1 - q)$.'
loesung: |
  Ansatz: Eine Folge fragt nach dem Verhalten der einzelnen Glieder, eine Reihe nach dem Verhalten ihrer Summen. Das sind zwei verschiedene Fragen.
  ---
  a) Wegen $0 < \frac23 < 1$ ist $\left(\frac23\right)^k$ eine Nullfolge. Grenzwert $0$.
  ---
  b) Geometrische Reihe mit erstem Glied $\frac23$ und $q = \frac23$: $\frac{2/3}{1 - 2/3} = \frac{2/3}{1/3} = 2$. Kontrolle: $\frac23 + \frac49 + \frac{8}{27} \approx 1{,}41$ und die Teilsummen wachsen weiter Richtung $2$ ✓.
```

```aufgabe
id: gf-mix-komplett
titel: Zerlegung, Schranken und ε auf einmal
niveau: 3
lernziel: 5
kompetenz: begruenden
angabe: |
  Gegeben ist $a_n = \dfrac{n^2 + 3}{n^2 + 1}$, $n \ge 1$.

  a) Zerlege $a_n = 1 + \dfrac{c}{n^2 + 1}$. Bestimme die Konstante $c$.

  b) Begründe damit Monotonie, Schranken und Grenzwert.

  c) Bestimme das kleinste $N$, sodass $|a_n - 1| < 0{,}001$ für alle $n \ge N$ gilt.
teile:
  - typ: zahl
    label: 'a) $c$'
    loesung: "2"
    fehler:
      - wert: "3"
        meldung: 'Schreibe den Zähler als $(n^2 + 1) + c$. Dann ist $c = 3 - 1$.'
  - typ: text
    label: 'b) Begründung'
    muster: |
      Der Bruch $\frac{2}{n^2 + 1}$ ist positiv. Sein Nenner wächst mit $n$, also fällt er streng. Damit fällt $a_n$ streng.
      Obere Schranke ist das erste Glied $a_1 = 2$ (Maximum). Wegen $\frac{2}{n^2 + 1} > 0$ ist $a_n > 1$. Weil der Bruch eine
      Nullfolge ist, ist der Grenzwert $1$, und $1$ ist das Infimum, wird aber nicht angenommen.
  - typ: zahl
    label: 'c) $N$'
    loesung: "45"
    fehler:
      - wert: "44"
        meldung: 'Aus $n^2 > 1999$ folgt $n > 44{,}71$. Für $n = 44$ ist $n^2 = 1936$, das ist zu klein.'
      - wert: "2000"
        meldung: 'Du hast vergessen, die Wurzel zu ziehen. Gefragt ist $n$, nicht $n^2 + 1$.'
hinweise:
  - 'a) $n^2 + 3 = (n^2 + 1) + 2$.'
  - 'b) Wie verhält sich der Bruch $\frac{c}{n^2 + 1}$, wenn $n$ wächst? Wird er addiert oder abgezogen?'
  - 'c) $\frac{2}{n^2 + 1} < 0{,}001$ ist gleichwertig mit $n^2 + 1 > 2000$.'
loesung: |
  Ansatz: Die Zerlegung in Grenzwert plus Rest zeigt Monotonie, Schranken und Grenzwert auf einen Blick. Sie kommt aus [11.10 Monotonie und Beschränktheit beweisen](/lernen/mathe3/grenzwerte-folgen/monotonie-und-beschraenktheit-beweisen).
  ---
  a) $\frac{n^2 + 3}{n^2 + 1} = \frac{(n^2 + 1) + 2}{n^2 + 1} = 1 + \frac{2}{n^2 + 1}$. Also $c = 2$.
  ---
  b) $\frac{2}{n^2 + 1}$ ist positiv und fällt streng, weil der Nenner wächst. Also fällt $a_n$ streng. Das Maximum ist $a_1 = 2$. Untere Schranke: $a_n > 1$. Grenzwert und Infimum: $1$, nicht angenommen.
  ---
  c) $|a_n - 1| = \frac{2}{n^2 + 1} < 0{,}001$ ist gleichwertig mit $n^2 + 1 > 2000$, also $n^2 > 1999$ und $n > 44{,}71$. Das kleinste $N$ ist $45$.
  ---
  Kontrolle: Für $n = 44$ ist der Abstand $\frac{2}{1937} \approx 0{,}00103$ (zu groß), für $n = 45$ ist er $\frac{2}{2026} \approx 0{,}00099$ ✓.
```

## Prüfungsaufgaben

Diese Aufgaben haben das Format der schriftlichen Prüfung: mehrere Teile, Punkte und eine Richtzeit. Die erste ist eine
abgewandelte Variante der Folgenaufgabe aus der Musterprüfung. Die Originalaufgabe selbst rechnest du später in der
Prüfungssimulation, damit sie dort neu für dich ist.

**So arbeitest du am meisten heraus:** Schreib die Lösung zuerst vollständig auf Papier, so wie du sie abgeben würdest.
Stell dabei eine Uhr. Erst danach vergleichst du Schritt für Schritt. Achte besonders darauf, dass Monotonie und
Beschränktheit **bewiesen** und nicht nur an ein paar Gliedern abgelesen werden.

```aufgabe
id: gf-pruefung-folge
titel: Folgenuntersuchung wie in der Prüfung
niveau: 3
lernziel: 5
kompetenz: begruenden
punkte: 10
quelle: nach Musterprüfung Schranz-Kirlinger 2023, Aufgabe 2.3 (abgewandelt)
angabe: |
  Gegeben ist die Folge $(a_n)_{n \ge 1}$ mit $a_n = \dfrac{3n - 4}{2n + 5}$. Richtzeit: 20 Minuten.

  a) Gib die ersten vier Glieder der Folge an. (1 Punkt)

  b) Stelle eine Vermutung über die Monotonie auf und beweise sie. (3 Punkte)

  c) Ist die Folge nach oben und nach unten beschränkt? Gib die bestmöglichen Schranken an und begründe. (3 Punkte)

  d) Bestimme den Grenzwert der Folge. (1 Punkt)

  e) Ab welchem Index $N$ gilt $|a_n - a| < 0{,}01$ für alle $n \ge N$? (2 Punkte)
teile:
  - typ: zahl
    label: 'a) $a_1$'
    loesung: "(3*1 - 4)/(2*1 + 5)"
    anzeige: '-\tfrac17'
    fehler:
      - wert: "-1/5"
        meldung: 'Im Nenner steht $2\cdot 1 + 5 = 7$. Prüfe das Einsetzen.'
  - typ: zahl
    label: 'a) $a_4$'
    loesung: "(3*4 - 4)/(2*4 + 5)"
    anzeige: '\tfrac{8}{13}'
  - typ: auswahl
    label: 'b) Vermutung'
    optionen: ['streng monoton wachsend', 'streng monoton fallend', 'nicht monoton']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Vergleiche die Glieder aus a): $-\frac17 < \frac29 < \frac{5}{11} < \frac{8}{13}$. Sie werden größer.'
  - typ: text
    label: 'b) Beweis'
    muster: |
      $a_{n+1} = \frac{3(n + 1) - 4}{2(n + 1) + 5} = \frac{3n - 1}{2n + 7}$. Dann ist
      $a_{n+1} - a_n = \frac{(3n - 1)(2n + 5) - (3n - 4)(2n + 7)}{(2n + 7)(2n + 5)} = \frac{(6n^2 + 13n - 5) - (6n^2 + 13n - 28)}{(2n + 7)(2n + 5)} = \frac{23}{(2n + 7)(2n + 5)}.$
      Zähler und Nenner sind für alle $n \ge 1$ positiv. Also ist $a_{n+1} - a_n > 0$, die Folge wächst streng.
  - typ: zahl
    label: 'c) größte untere Schranke'
    loesung: "-1/7"
    anzeige: '-\tfrac17'
    fehler:
      - wert: "3/2"
        meldung: 'Bei einer wachsenden Folge ist der Grenzwert die **obere** Grenze. Unten liegt das erste Glied.'
  - typ: zahl
    label: 'c) kleinste obere Schranke'
    loesung: "3/2"
    anzeige: '\tfrac32'
    fehler:
      - wert: "-4/5"
        meldung: 'Das ist der Quotient der Konstanten $-4$ und $5$. Für große $n$ zählen die Koeffizienten von $n$, also $3$ und $2$.'
  - typ: text
    label: 'c) Begründung'
    muster: |
      Unten: Die Folge wächst streng, also gilt $a_n \ge a_1 = -\frac17$ für alle $n$. Das ist das Minimum.
      Oben: $\frac32 - a_n = \frac{3(2n + 5) - 2(3n - 4)}{2(2n + 5)} = \frac{23}{2(2n + 5)} > 0$, also $a_n < \frac32$ für alle $n$.
      Weil $\frac{23}{2(2n + 5)}$ beliebig klein wird, gibt es keine kleinere obere Schranke. $\frac32$ ist das Supremum und wird nicht angenommen.
  - typ: zahl
    label: 'd) Grenzwert $a$'
    loesung: "3/2"
    anzeige: '\tfrac32'
  - typ: zahl
    label: 'e) $N$'
    loesung: "573"
    toleranz: 0.1
    fehler:
      - wert: "572"
        meldung: 'Die Rechnung liefert $n > 572{,}5$. Für $n = 572$ ist der Abstand $\frac{23}{2298} \approx 0{,}01001$, also noch zu groß.'
hinweise:
  - 'b) Berechne $a_{n+1}$, indem du jedes $n$ durch $n + 1$ ersetzt, und bilde $a_{n+1} - a_n$ auf einem gemeinsamen Nenner.'
  - 'c) Untere Schranke über die Monotonie. Für die obere Schranke berechne $\frac32 - a_n$ und zeige, dass es positiv ist.'
  - 'e) Aus c) kennst du den Abstand $\frac{23}{2(2n + 5)}$. Löse $\frac{23}{2(2n + 5)} < 0{,}01$ nach $n$ auf.'
loesung: |
  **a)** Einsetzen: $a_1 = \frac{3 - 4}{2 + 5} = -\frac17$, $a_2 = \frac{2}{9}$, $a_3 = \frac{5}{11}$, $a_4 = \frac{8}{13}$. Dezimal etwa $-0{,}143;\ 0{,}222;\ 0{,}455;\ 0{,}615$.
  ---
  **b)** Vermutung aus a): streng wachsend. Beweis mit der Differenzmethode, weil sie bei Brüchen zuverlässig funktioniert. Es ist $a_{n+1} = \frac{3n - 1}{2n + 7}$, also
  $$a_{n+1} - a_n = \frac{(3n - 1)(2n + 5) - (3n - 4)(2n + 7)}{(2n + 7)(2n + 5)}.$$
  ---
  Zähler ausmultiplizieren: $(3n - 1)(2n + 5) = 6n^2 + 13n - 5$ und $(3n - 4)(2n + 7) = 6n^2 + 13n - 28$. Die Differenz ist $23$. Also
  $$a_{n+1} - a_n = \frac{23}{(2n + 7)(2n + 5)} > 0 \quad\text{für alle } n \ge 1,$$
  weil Zähler und Nenner positiv sind. Die Folge ist streng monoton wachsend.
  ---
  **c)** Untere Schranke: Wegen der Monotonie ist $a_n \ge a_1 = -\frac17$. Das erste Glied ist das Minimum und damit die größte untere Schranke.
  ---
  Obere Schranke: $\frac32 - a_n = \frac{3(2n + 5) - 2(3n - 4)}{2(2n + 5)} = \frac{6n + 15 - 6n + 8}{2(2n + 5)} = \frac{23}{2(2n + 5)} > 0$. Also ist $a_n < \frac32$ für alle $n$. Der Abstand wird beliebig klein, also ist $\frac32$ die kleinste obere Schranke. Sie wird nicht angenommen.
  ---
  **d)** Zähler und Nenner durch $n$ dividieren: $a_n = \frac{3 - \frac4n}{2 + \frac5n}$. Mit $\frac1n \to 0$ und den Grenzwertsätzen folgt $a_n \to \frac32$. Das passt zum Monotoniekriterium: wachsend, nach oben beschränkt, Grenzwert gleich Supremum.
  ---
  **e)** $|a_n - \frac32| = \frac{23}{2(2n + 5)} < 0{,}01$ ist gleichwertig mit $2(2n + 5) > 2300$, also $4n > 2290$ und $n > 572{,}5$. Kleinstes $N = 573$.
  Kontrolle: $n = 572$ gibt $\frac{23}{2298} \approx 0{,}01001$ (zu groß), $n = 573$ gibt $\frac{23}{2302} \approx 0{,}00999$ ✓.
```

```aufgabe
id: gf-pruefung-fallend
titel: Fallende Folge mit ε-Nachweis
niveau: 3
lernziel: 1
kompetenz: begruenden
punkte: 10
angabe: |
  Gegeben ist die Folge $a_n = \dfrac{4n + 5}{2n + 1}$, $n \ge 1$. Richtzeit: 20 Minuten.

  a) Gib die ersten vier Glieder an und stelle eine Vermutung über Monotonie und Grenzwert auf. (2 Punkte)

  b) Beweise die Monotonie. (3 Punkte)

  c) Gib die größte untere und die kleinste obere Schranke an und begründe. (2 Punkte)

  d) Beweise den Grenzwert mit der $\varepsilon$-$N$-Definition und bestimme $N$ für $\varepsilon = 0{,}001$. (3 Punkte)
teile:
  - typ: zahl
    label: 'a) $a_4$'
    loesung: "21/9"
    anzeige: '\tfrac73'
  - typ: auswahl
    label: 'b) Monotonie'
    optionen: ['streng monoton wachsend', 'streng monoton fallend', 'nicht monoton']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Vergleiche $a_1 = 3$ und $a_2 = 2{,}6$. Die Glieder werden kleiner.'
  - typ: zahl
    label: 'c) größte untere Schranke'
    loesung: "2"
    fehler:
      - wert: "7/3"
        meldung: 'Das ist nur $a_4$. Die Folge fällt weiter. Die größte untere Schranke ist der Grenzwert.'
  - typ: zahl
    label: 'c) kleinste obere Schranke'
    loesung: "3"
  - typ: text
    label: 'b), c), d) Begründungen'
    muster: |
      b) $a_{n+1} - a_n = \frac{4n + 9}{2n + 3} - \frac{4n + 5}{2n + 1} = \frac{(4n + 9)(2n + 1) - (4n + 5)(2n + 3)}{(2n + 3)(2n + 1)} = \frac{-6}{(2n + 3)(2n + 1)} < 0$.

      c) Die Folge fällt, also ist $a_n \le a_1 = 3$ (Maximum). Es ist $a_n - 2 = \frac{3}{2n + 1} > 0$, also $a_n > 2$. Weil $\frac{3}{2n + 1}$ beliebig klein wird, ist $2$ das Infimum. Es wird nicht angenommen.

      d) Sei $\varepsilon > 0$ beliebig. Wähle eine natürliche Zahl $N > \frac12\left(\frac3\varepsilon - 1\right)$. Für $n \ge N$ ist $2n + 1 \ge 2N + 1 > \frac3\varepsilon$, also $|a_n - 2| = \frac{3}{2n + 1} < \varepsilon$.
  - typ: zahl
    label: 'd) $N$ für $\varepsilon = 0{,}001$'
    loesung: "1500"
    toleranz: 0.1
    fehler:
      - wert: "1499"
        meldung: 'Die Bedingung lautet $n > 1499{,}5$. Für $n = 1499$ ist der Abstand $\frac{3}{2999}$, also etwas größer als $0{,}001$.'
      - wert: "3000"
        meldung: '$2n + 1 > 3000$ ist richtig, aber noch nicht nach $n$ aufgelöst.'
hinweise:
  - 'Zerlege $a_n = 2 + \frac{3}{2n + 1}$. Daran siehst du Monotonie, Schranken und Grenzwert.'
  - 'd) Schmierzettel: $\frac{3}{2n + 1} < \varepsilon$ ist gleichwertig mit $2n + 1 > \frac{3}{\varepsilon}$.'
loesung: |
  a) Ansatz: Einsetzen. $a_1 = \frac93 = 3$, $a_2 = \frac{13}{5} = 2{,}6$, $a_3 = \frac{17}{7} \approx 2{,}43$, $a_4 = \frac{21}{9} = \frac73 \approx 2{,}33$. Vermutung: streng fallend, Grenzwert $2$.
  ---
  b) Differenzmethode: $a_{n+1} = \frac{4n + 9}{2n + 3}$. Der Zähler der Differenz ist $(4n + 9)(2n + 1) - (4n + 5)(2n + 3) = (8n^2 + 22n + 9) - (8n^2 + 22n + 15) = -6$.
  Also $a_{n+1} - a_n = \frac{-6}{(2n + 3)(2n + 1)} < 0$, weil der Nenner positiv ist. Die Folge fällt streng.
  ---
  c) Zerlegung: $a_n = \frac{2(2n + 1) + 3}{2n + 1} = 2 + \frac{3}{2n + 1}$. Wegen der Monotonie ist $a_1 = 3$ das Maximum. Wegen $\frac{3}{2n + 1} > 0$ ist $a_n > 2$. Der Bruch wird beliebig klein, also ist $2$ die größte untere Schranke. Ergebnis: $2 < a_n \le 3$.
  ---
  d) Abstand $|a_n - 2| = \frac{3}{2n + 1}$. Schmierzettel: $\frac{3}{2n + 1} < \varepsilon$ gilt für $n > \frac12\left(\frac3\varepsilon - 1\right)$. Reinschrift: Sei $\varepsilon > 0$ beliebig, wähle $N$ größer als diesen Wert. Für $n \ge N$ ist $\frac{3}{2n + 1} \le \frac{3}{2N + 1} < \varepsilon$. Also ist $\lim a_n = 2$.
  ---
  $\varepsilon = 0{,}001$: $n > \frac{3000 - 1}{2} = 1499{,}5$, also $N = 1500$. Kontrolle: $\frac{3}{3001} \approx 0{,}0009997 < 0{,}001$, aber $\frac{3}{2999} \approx 0{,}0010003$ ✓.
```

```aufgabe
id: gf-pruefung-fischbestand
titel: Fischbestand in einem Teich
niveau: 3
lernziel: 6
kompetenz: modellieren
punkte: 10
angabe: |
  In einem Teich leben zu Beginn $1000$ Fische. Im Lauf jedes Jahres werden zuerst $20\,\%$ des Bestands gefangen, danach werden
  $400$ junge Fische eingesetzt. $B_n$ ist der Bestand zu Beginn des $n$-ten Jahres, also $B_1 = 1000$. Richtzeit: 20 Minuten.

  a) Begründe die Rekursion $B_{n+1} = 0{,}8\,B_n + 400$ und berechne $B_3$. (2 Punkte)

  b) Zeige mit vollständiger Induktion, dass $B_n < 2000$ für alle $n$ gilt. (3 Punkte)

  c) Die Folge ist wachsend. Begründe, warum sie konvergiert, und bestimme den langfristigen Bestand. (3 Punkte)

  d) Es gilt $B_n = 2000 - 1000\cdot 0{,}8^{n-1}$. Für welches kleinste $n$ liegt der Bestand $B_n$ erstmals über $1900$ Fischen? (2 Punkte)
teile:
  - typ: zahl
    label: 'a) $B_3$'
    loesung: "0.8*(0.8*1000 + 400) + 400"
    anzeige: '1360'
    toleranz: 0.1
    fehler:
      - wert: "1200"
        meldung: 'Das ist $B_2$. Wende die Rekursion ein zweites Mal an.'
      - wert: "1000*0.8^2 + 400"
        meldung: 'Die $400$ jungen Fische kommen **jedes** Jahr dazu, also auch schon im Schritt von $B_1$ zu $B_2$.'
  - typ: text
    label: 'b) Induktionsbeweis'
    muster: |
      Induktionsanfang: $B_1 = 1000 < 2000$ ✓.
      Induktionsschritt: Angenommen, $B_n < 2000$. Dann ist $0{,}8\,B_n < 1600$ und $B_{n+1} = 0{,}8\,B_n + 400 < 2000$.
      Also gilt die Aussage für alle $n$.
  - typ: zahl
    label: 'c) langfristiger Bestand'
    loesung: "400/(1 - 0.8)"
    anzeige: '2000'
    toleranz: 0.1
    fehler:
      - wert: "500"
        meldung: 'Aus $B = 0{,}8\,B + 400$ folgt $0{,}2\,B = 400$. Teile durch $0{,}2$, nicht durch $0{,}8$.'
  - typ: zahl
    label: 'd) kleinstes $n$'
    loesung: "12"
    fehler:
      - wert: "11"
        meldung: 'Die Rechnung liefert $n - 1 > 10{,}32$. Für $n = 11$ sind es erst etwa $1893$ Fische.'
      - wert: "10"
        meldung: 'Du hast $n > 10{,}32$ statt $n - 1 > 10{,}32$ verwendet und dann abgerundet. Achte auf den Exponenten $n - 1$.'
hinweise:
  - 'a) Nach dem Fang bleiben $80\,\%$, dann kommen $400$ dazu.'
  - 'c) Wachsend und nach oben beschränkt: Monotoniekriterium. Dann Grenzübergang in der Rekursion.'
  - 'd) $2000 - 1000\cdot 0{,}8^{n-1} > 1900$ ist gleichwertig mit $0{,}8^{n-1} < 0{,}1$. Logarithmieren, auf das Vorzeichen von $\ln 0{,}8$ achten.'
loesung: |
  a) Ansatz: Nach dem Fang bleiben $80\,\%$ des Bestands, das ist $0{,}8\,B_n$. Danach kommen $400$ Fische dazu. Also $B_{n+1} = 0{,}8\,B_n + 400$.
  $B_2 = 800 + 400 = 1200$ und $B_3 = 960 + 400 = 1360$.
  ---
  b) Anfang: $B_1 = 1000 < 2000$. Schritt: Aus $B_n < 2000$ folgt $0{,}8\,B_n < 1600$, also $B_{n+1} < 1600 + 400 = 2000$. Nach dem Induktionsprinzip gilt $B_n < 2000$ für alle $n$.
  ---
  c) Die Folge wächst und ist durch $2000$ nach oben beschränkt. Nach dem Monotoniekriterium existiert $B = \lim B_n$. Grenzübergang in der Rekursion: $B = 0{,}8\,B + 400$, also $0{,}2\,B = 400$ und $B = 2000$. Langfristig leben etwa $2000$ Fische im Teich.
  ---
  d) $2000 - 1000\cdot 0{,}8^{n-1} > 1900$ ist gleichwertig mit $0{,}8^{n-1} < 0{,}1$. Logarithmieren und durch $\ln 0{,}8 < 0$ dividieren (Zeichen dreht sich): $n - 1 > \frac{\ln 0{,}1}{\ln 0{,}8} \approx 10{,}32$. Also $n \ge 12$.
  ---
  Kontrolle: $B_{11} = 2000 - 1000\cdot 0{,}8^{10} \approx 1892{,}6$ und $B_{12} \approx 1914{,}1$. Antwort: Für $n = 12$, also zu Beginn des $12$. Jahres, liegt der Bestand erstmals über $1900$ Fischen.
```

```aufgabe
id: gf-pruefung-theorie
titel: Definition, Beweis und Gegenbeispiel
niveau: 3
lernziel: 3
kompetenz: begruenden
punkte: 10
angabe: |
  Richtzeit: 20 Minuten.

  a) Formuliere die Definition „Die Folge $(a_n)$ konvergiert gegen $a$“. (2 Punkte)

  b) Beweise mit dieser Definition, dass $a_n = \dfrac{5n + 2}{n + 3}$ gegen $5$ konvergiert. Bestimme das kleinste $N$ für $\varepsilon = 0{,}01$. (4 Punkte)

  c) Die Folge $b_n = (-1)^n\,\dfrac{5n + 2}{n + 3}$ ist beschränkt. Begründe, warum sie trotzdem divergiert. (2 Punkte)

  d) Was zeigt das Beispiel aus c) über den Satz „Jede konvergente Folge ist beschränkt“? (2 Punkte)
teile:
  - typ: text
    label: 'a) Definition'
    muster: |
      $(a_n)$ konvergiert gegen $a$, wenn es zu jedem $\varepsilon > 0$ einen Index $N$ gibt, sodass für alle $n \ge N$ gilt: $|a_n - a| < \varepsilon$.
  - typ: zahl
    label: 'b) kleinstes $N$'
    loesung: "1298"
    toleranz: 0.1
    fehler:
      - wert: "1297"
        meldung: 'Für $n = 1297$ ist der Abstand $\frac{13}{1300} = 0{,}01$, genau der Rand.'
      - wert: "1300"
        meldung: '$n + 3 > 1300$ ist richtig. Ziehe noch $3$ ab.'
      - wert: "698"
        meldung: 'Prüfe den Zähler des Abstands: $5n + 2 - 5(n + 3) = -13$, nicht $-7$.'
  - typ: text
    label: 'b) Beweis, c) und d)'
    muster: |
      b) $|a_n - 5| = \left|\frac{5n + 2 - 5n - 15}{n + 3}\right| = \frac{13}{n + 3}$. Sei $\varepsilon > 0$ beliebig. Wähle eine natürliche Zahl
      $N > \frac{13}{\varepsilon} - 3$. Für $n \ge N$ ist $n + 3 \ge N + 3 > \frac{13}{\varepsilon}$, also $|a_n - 5| < \varepsilon$.

      c) Für gerade $n$ ist $b_n = a_n$, diese Glieder gehen gegen $5$. Für ungerade $n$ ist $b_n = -a_n$, diese Glieder gehen gegen $-5$.
      Mit $\varepsilon = 1$ müssten ab einer Stelle alle Glieder weniger als $1$ vom Grenzwert entfernt sein. Das geht nicht, weil
      unendlich viele Glieder nahe bei $5$ und unendlich viele nahe bei $-5$ liegen. Beschränkt ist die Folge durch $|b_n| < 5$.

      d) Der Satz lässt sich nicht umkehren: Eine beschränkte Folge muss nicht konvergieren. $(b_n)$ ist ein Gegenbeispiel.
hinweise:
  - 'b) Bringe $a_n - 5$ auf den Nenner $n + 3$. Dann Schmierzettel: $\frac{13}{n + 3} < \varepsilon$ nach $n$ auflösen.'
  - 'c) Betrachte gerade und ungerade $n$ getrennt. Wohin gehen diese beiden Teilfolgen?'
loesung: |
  a) Ansatz: Die Definition in der Reihenfolge der Quantoren. Zu jedem $\varepsilon > 0$ gibt es ein $N$, sodass $|a_n - a| < \varepsilon$ für alle $n \ge N$ gilt.
  ---
  b) Abstand: $a_n - 5 = \frac{5n + 2 - 5(n + 3)}{n + 3} = \frac{-13}{n + 3}$, also $|a_n - 5| = \frac{13}{n + 3}$. Schmierzettel: $\frac{13}{n + 3} < \varepsilon$ gilt für $n > \frac{13}{\varepsilon} - 3$.
  Reinschrift: Sei $\varepsilon > 0$ beliebig. Wähle eine natürliche Zahl $N > \frac{13}{\varepsilon} - 3$. Für $n \ge N$ ist $n + 3 > \frac{13}{\varepsilon}$, also $|a_n - 5| < \varepsilon$.
  ---
  Für $\varepsilon = 0{,}01$: $n > 1300 - 3 = 1297$, also $N = 1298$. Kontrolle: $\frac{13}{1301} \approx 0{,}00999 < 0{,}01$, aber $\frac{13}{1300} = 0{,}01$ ✓.
  ---
  c) Die geraden Glieder gehen gegen $5$, die ungeraden gegen $-5$. Angenommen, $b_n \to b$. Mit $\varepsilon = 1$ müssten ab einer Stelle alle Glieder in $(b - 1;\ b + 1)$ liegen. Dieses Band hat die Breite $2$ und kann nicht zugleich Zahlen nahe $5$ und nahe $-5$ enthalten. Widerspruch, die Folge divergiert. Beschränkt ist sie, weil $|b_n| = a_n < 5$ gilt.
  ---
  d) Konvergent hat beschränkt zur Folge, aber nicht umgekehrt. Die Folge $(b_n)$ ist beschränkt und divergent, also ein Gegenbeispiel zur Umkehrung. Erst „beschränkt **und** monoton“ garantiert Konvergenz.
```

```aufgabe
id: gf-pruefung-medikament
titel: Medikamentenspiegel im Körper
niveau: 3
lernziel: 8
kompetenz: modellieren
punkte: 10
angabe: |
  Ein Patient nimmt jeden Morgen 100 mg eines Medikaments. Innerhalb von 24 Stunden baut der Körper
  $70\,\%$ der vorhandenen Menge ab. $M_n$ sei die Menge (in mg) unmittelbar nach der $n$-ten Einnahme, $M_1 = 100$.
  Richtzeit: 20 Minuten.

  a) Gib eine Rekursionsformel für $M_{n+1}$ an und berechne $M_2$ und $M_3$. (2 Punkte)

  b) Begründe, dass $M_n = \sum_{k=0}^{n-1} 100\cdot 0{,}3^k$ gilt, und berechne $M_5$ auf zwei Nachkommastellen. (3 Punkte)

  c) Welcher Wert stellt sich langfristig ein? Begründe mit einer Reihe. (3 Punkte)

  d) Nach der wievielten Einnahme sind erstmals mindestens $99{,}9\,\%$ dieses Grenzwerts erreicht? (2 Punkte)
teile:
  - typ: zahl
    label: 'a) $M_3$'
    einheit: mg
    loesung: "0.3*(0.3*100 + 100) + 100"
    anzeige: '139'
    toleranz: 0.1
    fehler:
      - wert: "130"
        meldung: 'Das ist $M_2$. Wende die Rekursion noch einmal an.'
      - wert: "0.7*(0.7*100 + 100) + 100"
        meldung: 'Abgebaut werden $70\,\%$, übrig bleiben also $30\,\%$. Der Faktor ist $0{,}3$.'
  - typ: zahl
    label: 'b) $M_5$'
    einheit: mg
    loesung: "100*(1 - 0.3^5)/0.7"
    anzeige: '142{,}51'
    toleranz: 0.01
  - typ: zahl
    label: 'c) Grenzwert'
    einheit: mg
    loesung: "100/(1 - 0.3)"
    anzeige: '\tfrac{1000}{7} \approx 142{,}86'
    fehler:
      - wert: "100/0.3"
        meldung: 'Die geometrische Reihe hat den Wert „erstes Glied durch $(1 - q)$“. Mit $q = 0{,}3$ ist der Nenner $0{,}7$.'
  - typ: zahl
    label: 'd) Einnahme Nr.'
    loesung: "6"
    fehler:
      - wert: "5"
        meldung: 'Die Rechnung liefert $n \ge 5{,}74$. Nach der 5. Einnahme ist $0{,}3^5 = 0{,}00243$, also noch mehr als $0{,}001$.'
hinweise:
  - 'Bis zur nächsten Einnahme bleiben $30\,\%$ übrig, dann kommen $100$ mg dazu.'
  - 'c) Geometrische Reihe mit $q = 0{,}3$.'
  - 'd) $M_n = \frac{1000}{7}(1 - 0{,}3^n) \ge 0{,}999\cdot\frac{1000}{7}$ ist gleichwertig mit $0{,}3^n \le 0{,}001$.'
loesung: |
  a) Ansatz: Von $M_n$ bleiben $30\,\%$ übrig, dann kommen $100$ mg dazu. Also $M_{n+1} = 0{,}3\,M_n + 100$. $M_2 = 30 + 100 = 130$ und $M_3 = 39 + 100 = 139$.
  ---
  b) Die Dosis von vor $k$ Tagen ist auf $100\cdot 0{,}3^k$ geschrumpft. Unmittelbar nach der $n$-ten Einnahme sind die Dosen von heute ($k = 0$) bis vor $n - 1$ Tagen vorhanden. Mit der endlichen geometrischen Summe: $M_n = 100\cdot\frac{1 - 0{,}3^n}{0{,}7}$.
  $M_5 = \frac{100\,(1 - 0{,}00243)}{0{,}7} \approx 142{,}51$ mg.
  ---
  c) Wegen $|0{,}3| < 1$ konvergiert die geometrische Reihe: $\lim M_n = \sum_{k=0}^{\infty} 100\cdot 0{,}3^k = \frac{100}{1 - 0{,}3} = \frac{1000}{7} \approx 142{,}86$ mg.
  Probe mit der Fixpunktgleichung: $M = 0{,}3\,M + 100$ ergibt $M = \frac{100}{0{,}7}$ ✓.
  ---
  d) $\frac{M_n}{1000/7} = 1 - 0{,}3^n \ge 0{,}999$ ist gleichwertig mit $0{,}3^n \le 0{,}001$. Logarithmieren und durch $\ln 0{,}3 < 0$ dividieren: $n \ge \frac{\ln 0{,}001}{\ln 0{,}3} \approx 5{,}74$. Also ab der $6$. Einnahme.
  ---
  Kontrolle: $0{,}3^5 = 0{,}00243 > 0{,}001$ und $0{,}3^6 = 0{,}000729 \le 0{,}001$ ✓.
```

```aufgabe
id: gf-pruefung-schneeflocke
titel: Kochsche Schneeflocke
niveau: 3
lernziel: 8
kompetenz: modellieren
punkte: 8
angabe: |
  Man startet mit einem gleichseitigen Dreieck mit Seitenlänge $1$ und Flächeninhalt $A_0$. In jedem Schritt wird
  jede Seite gedrittelt. Über dem mittleren Drittel wird ein gleichseitiges Dreieck nach außen aufgesetzt, und das mittlere
  Drittel fällt weg. Dadurch wird aus jeder Seite ein Streckenzug aus 4 Seiten mit je einem Drittel der Länge. Richtzeit: 15 Minuten.

  a) Wie lang ist der Umfang nach 3 Schritten? Wie verhält sich der Umfang auf lange Sicht? (3 Punkte)

  b) Im Schritt $k$ kommen $3\cdot 4^{k-1}$ neue Dreiecke mit Flächeninhalt je $\frac{A_0}{9^k}$ dazu. Berechne den
  Flächeninhalt der Grenzfigur als Vielfaches von $A_0$. (3 Punkte)

  c) Was ist an diesem Ergebnis bemerkenswert? (2 Punkte)
teile:
  - typ: zahl
    label: 'a) Umfang nach 3 Schritten'
    loesung: "3*(4/3)^3"
    anzeige: '\tfrac{64}{9} \approx 7{,}11'
    fehler:
      - wert: "(4/3)^3"
        meldung: 'Der Anfangsumfang ist $3$, nicht $1$. Das Dreieck hat drei Seiten der Länge $1$.'
  - typ: auswahl
    label: 'a) Der Umfang'
    optionen: ['strebt gegen $3$', 'strebt gegen $4$', 'divergiert bestimmt gegen $\infty$']
    richtig: [2]
    fehler:
      - wert: 1
        meldung: 'Der Umfang wird in jedem Schritt mit $\frac43 > 1$ multipliziert. Eine geometrische Folge mit Quotient größer als $1$ wächst über jede Grenze.'
  - typ: zahl
    label: 'b) Fläche in Vielfachen von $A_0$'
    loesung: "1 + (3/9)/(1 - 4/9)"
    anzeige: '\tfrac85 = 1{,}6'
    fehler:
      - wert: "(3/9)/(1 - 4/9)"
        meldung: 'Das ist nur die **hinzukommende** Fläche. Das Startdreieck $A_0$ gehört auch dazu.'
  - typ: text
    label: 'c)'
    muster: |
      Der Umfang ist eine geometrische Folge mit $q = \frac43 > 1$ und wächst über jede Grenze. Die Fläche ist dagegen
      eine konvergente geometrische Reihe mit $q = \frac49$ und bleibt endlich ($1{,}6\,A_0$). Eine Figur mit endlicher
      Fläche kann einen unendlich langen Rand haben.
hinweise:
  - 'a) Bei jedem Schritt wird der Umfang mit $\frac43$ multipliziert.'
  - 'b) $\sum_{k=1}^{\infty} 3\cdot 4^{k-1}\cdot\frac{A_0}{9^k}$ ist geometrisch: erstes Glied $\frac{3A_0}{9}$, Quotient $\frac49$.'
loesung: |
  a) Ansatz: Jede Seite wird durch 4 Seiten der Länge $\frac13$ ersetzt. Der Umfang wird also mit $\frac43$ multipliziert: $U_k = 3\cdot\left(\frac43\right)^k$.
  $U_3 = 3\cdot\frac{64}{27} = \frac{64}{9} \approx 7{,}11$.
  ---
  Wegen $q = \frac43 > 1$ wächst $U_k$ über jede Grenze. Der Umfang divergiert bestimmt gegen $\infty$.
  ---
  b) Zusätzliche Fläche: $\sum_{k=1}^{\infty} 3\cdot 4^{k-1}\cdot\frac{A_0}{9^k}$. Erstes Glied ($k = 1$): $\frac{3A_0}{9} = \frac{A_0}{3}$. Quotient $\frac{4}{9}$, also
  $$\frac{A_0/3}{1 - 4/9} = \frac{A_0}{3}\cdot\frac95 = \frac{3}{5}A_0.$$
  ---
  Gesamtfläche: $A_0 + \frac35 A_0 = \frac85 A_0 = 1{,}6\,A_0$.
  ---
  c) Antwort: Der Umfang ist unendlich, die Fläche aber endlich. Der Rand wird immer zerklüfteter (ein Fraktal). Die hinzukommenden Flächenstücke werden so schnell kleiner, dass ihre Summe konvergiert.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, bevor du weiterliest. Nimm dir dafür fünf Minuten und schreib in ganzen Sätzen.
antwort: |
  Eine gute Auswahl wäre zum Beispiel:

  1. Eine Folge konvergiert gegen $a$, wenn es zu **jedem** $\varepsilon > 0$ ein $N$ gibt, sodass **alle** Glieder ab $N$
     weniger als $\varepsilon$ von $a$ entfernt sind. In jedem noch so schmalen Band um $a$ liegen also fast alle Glieder.
  2. Grenzwerte berechnet man meist nicht mit $\varepsilon$, sondern mit den Grenzwertsätzen und Standardgrenzwerten.
     Unbestimmte Formen wie „unendlich minus unendlich“ muss man vorher umformen.
  3. Eine monotone und beschränkte Folge konvergiert. Das garantiert die Vollständigkeit der reellen Zahlen, und damit
     zeigt man die Konvergenz rekursiver Folgen und unendlicher Reihen.

  Vergleiche deine Sätze mit der Zusammenfassung, die direkt nach dieser Frage folgt. Fehlt dir eine Aussage, lies den zugehörigen Abschnitt noch einmal.
```

:::zusammenfassung
- **Definition:** $\lim a_n = a$ heißt: Zu jedem $\varepsilon > 0$ gibt es ein $N$, sodass $|a_n - a| < \varepsilon$ für alle $n \ge N$ gilt. Die Reihenfolge „erst $\varepsilon$, dann $N$“ ist entscheidend.
- **Beweis mit der Definition:** Auf dem Schmierzettel löst man $|a_n - a| < \varepsilon$ nach $n$ auf. In der Reinschrift wählt man $N$ als Formel in $\varepsilon$ und begründet eine Ungleichungskette. Abschätzen ist erlaubt, aber nur nach oben.
- **Divergenz:** Eine Folge divergiert bestimmt, wenn sie jede Schranke ab einer Stelle übertrifft. Sonst divergiert sie unbestimmt. Unendlich ist kein Grenzwert und keine Zahl.
- **Erste Sätze:** Der Grenzwert ist eindeutig. Jede konvergente Folge ist beschränkt, aber nicht jede beschränkte Folge konvergiert, Gegenbeispiel $(-1)^n$.
- **Rechnen:** Grenzwertsätze gelten nur, wenn alle Einzelgrenzwerte existieren. Werkzeuge sind höchste Potenz herausheben, Wurzeltrick, Einschließungssatz, „beschränkt mal Nullfolge“ und die Standardgrenzwerte $q^n \to 0$ für $|q| < 1$, $\sqrt[n]{n} \to 1$ und $\left(1 + \frac xn\right)^n \to e^x$.
- **Monotonie und Schranken beweisen:** mit der Differenz $a_{n+1} - a_n$, dem Quotienten, Äquivalenzumformungen oder Induktion. Schranken gibt man konkret an und begründet sie für alle $n$.
- **Vollständigkeit:** Monoton und beschränkt hat Konvergenz zur Folge. Bei rekursiven Folgen zeigt man erst die Existenz des Grenzwerts und löst dann die Fixpunktgleichung.
- **Reihen:** Eine Reihe ist die Folge ihrer Partialsummen. Die geometrische Reihe konvergiert genau für $|q| < 1$ mit Wert „erstes Glied durch $1 - q$“. Summanden, die gegen $0$ gehen, sind nötig, reichen aber nicht: Die harmonische Reihe divergiert.
:::

### Die häufigsten Fehler

Jeder Fehler steht mit der Aufgabe, die ihn gezielt trainiert. Wenn du einen Fehler bei dir wiedererkennst, rechne genau
diese Aufgabe noch einmal.

1. **Den Rand mitzählen.** Bei $|a_n - a| = \varepsilon$ liegt das Glied **nicht** im offenen Band. Das kleinste $N$ ist die
   kleinste ganze Zahl **echt über** der Grenze. Trainiert in „Ab wann liegen die Glieder im Band?“ und „Kleinstes N Schritt für Schritt“.
2. **Ein einzelnes ε statt eines Beweises.** Eine Rechnung mit $\varepsilon = 0{,}01$ ist nur eine Runde des Spiels. Der Beweis
   braucht „Sei $\varepsilon > 0$ beliebig“ und eine Regel für $N$. Trainiert in „Die Definition erklären“ und „Grenzwert mit ε nachweisen“.
3. **Quantoren vertauschen.** „Es gibt ein $N$ für alle $\varepsilon$“ ist eine viel stärkere Aussage als die Definition.
   Trainiert in „Die Definition richtig formulieren“ und „Die Reinschrift ordnen“.
4. **In die falsche Richtung abschätzen.** Nur ein **größerer** Ausdruck, der kleiner als $\varepsilon$ ist, beweist etwas.
   Trainiert in „Wo hinkt der Beweis?“.
5. **Beim Logarithmieren das Zeichen nicht drehen.** Für $0 < q < 1$ ist $\ln q$ negativ. Trainiert in „Ab wann ist 0,9ⁿ klein genug?“
   und „Wechselnde Vorzeichen, kleinste Stelle“.
6. **„Nullfolge mal irgendwas ist Nullfolge“.** Der zweite Faktor muss beschränkt sein. Trainiert in „Fehler finden bei einem Produkt“.
7. **Mit unendlich rechnen wie mit einer Zahl.** „Unendlich minus unendlich“ ist nicht $0$, „$1$ hoch unendlich“ ist nicht $1$.
   Trainiert in „Unbestimmte Ausdrücke erkennen“, „Fehler in einer Grenzwertrechnung finden“ und „Wurzeldifferenz“.
8. **Die Umkehrung glauben.** „Beschränkt, also konvergent“ ist falsch. Trainiert in „Wahr oder falsch?“ und „Beschränkt, aber nicht konvergent“.
9. **Monotonie an ein paar Gliedern „beweisen“.** Eine Tabelle ist eine Vermutung, kein Beweis. Beim Einsetzen von $n + 1$
   wird **jedes** $n$ ersetzt. Trainiert in „Fehler im Monotoniebeweis finden“ und „Die Differenz berechnen“.
10. **Fixpunktgleichung ohne Existenz.** Bei $a_{n+1} = 2a_n$ liefert „$a = 2a$“ den falschen Wert $0$. Erst Monotonie und
    Schranke zeigen. Trainiert in „Fehler finden bei einer Rekursion“.
11. **Folge und Reihe verwechseln.** $\left(\frac23\right)^k \to 0$, aber $\sum_{k \ge 1}\left(\frac23\right)^k = 2$. Trainiert in
    „Folge oder Reihe?“ und „Von den Partialsummen zu den Summanden“.
12. **Aus „Summanden gehen gegen 0“ auf Konvergenz schließen.** Die harmonische Reihe widerlegt das. Trainiert in
    „Was das notwendige Kriterium entscheiden kann“ und „Die harmonische Reihe begreifen“.

## Mündliche Prüfung

Sprich jede Antwort laut und in ganzen Sätzen, bevor du die Musterantwort aufdeckst. Prüfe danach anhand der
Kernpunkte, was gefehlt hat.

```karten
- id: gf-k-definition
  frage: Definieren Sie den Grenzwert einer Folge.
  antwort: |
    Eine Folge $(a_n)$ konvergiert gegen $a$, wenn es zu jedem $\varepsilon > 0$ einen Index $N$ gibt, sodass für alle
    $n \ge N$ gilt: $|a_n - a| < \varepsilon$. Anschaulich: In jeder noch so schmalen $\varepsilon$-Umgebung von $a$ liegen
    fast alle Glieder, also alle bis auf endlich viele.
  kernpunkte:
    - 'zu jedem ε > 0 gibt es ein N'
    - 'für alle n ≥ N gilt |aₙ − a| < ε'
    - 'Deutung: fast alle Glieder in jeder ε-Umgebung'
- id: gf-k-umgebung
  frage: Was ist eine ε-Umgebung, und was bedeutet „fast alle Glieder“?
  antwort: |
    Die $\varepsilon$-Umgebung von $a$ ist das offene Intervall $(a - \varepsilon;\ a + \varepsilon)$, also alle $x$ mit
    $|x - a| < \varepsilon$. Die Ränder gehören nicht dazu. „Fast alle Glieder“ heißt: alle bis auf endlich viele, also alle ab
    einem bestimmten Index. „Unendlich viele“ reicht nicht, denn bei $1, 0, 1, 0, \dots$ liegen unendlich viele Glieder bei $0$,
    aber auch unendlich viele außerhalb.
  kernpunkte:
    - 'offenes Intervall um a mit Radius ε'
    - 'fast alle = alle bis auf endlich viele'
    - 'Gegenbeispiel 1, 0, 1, 0, …: unendlich viele reichen nicht'
- id: gf-k-quantoren
  frage: Warum ist die Reihenfolge der Quantoren in der Definition wichtig?
  antwort: |
    Erst wird die Toleranz $\varepsilon$ vorgegeben, dann darf man $N$ passend dazu wählen. $N$ hängt also von $\varepsilon$ ab.
    Vertauscht man zu „es gibt ein $N$, das für alle $\varepsilon$ funktioniert“, müsste der Abstand ab $N$ kleiner als jede
    positive Zahl sein, also $0$. Die Folge wäre ab $N$ konstant gleich $a$. Das schließt fast alle interessanten Folgen aus,
    zum Beispiel $\frac1n$.
  kernpunkte:
    - 'erst ε, dann N; N darf von ε abhängen'
    - 'vertauscht: Folge wäre ab N konstant'
    - 'Beispiel 1/n'
- id: gf-k-beweis-1n
  frage: Beweisen Sie mit der Definition, dass 1/n gegen 0 konvergiert.
  antwort: |
    Sei $\varepsilon > 0$ beliebig. Nach dem archimedischen Prinzip gibt es eine natürliche Zahl $N > \frac1\varepsilon$.
    Für alle $n \ge N$ ist dann $n > \frac1\varepsilon$, und weil beide Seiten positiv sind, folgt $\frac1n < \varepsilon$.
    Also ist $\left|\frac1n - 0\right| < \varepsilon$ für alle $n \ge N$. Weil $\varepsilon$ beliebig war, ist der Grenzwert $0$.
  kernpunkte:
    - 'Sei ε > 0 beliebig'
    - 'Wahl N > 1/ε, existiert nach Archimedes'
    - 'für n ≥ N folgt 1/n < ε'
- id: gf-k-divergenz
  frage: Welche Arten von Divergenz gibt es? Geben Sie Beispiele.
  antwort: |
    Eine Folge divergiert bestimmt gegen $+\infty$, wenn sie jede Schranke $K$ ab einer Stelle übertrifft, zum Beispiel $n^2$
    oder $\sqrt n$. Entsprechend gibt es bestimmte Divergenz gegen $-\infty$. Jede andere divergente Folge heißt unbestimmt
    divergent, zum Beispiel $(-1)^n$ oder $(-2)^n$. Unendlich ist keine Zahl und deshalb kein Grenzwert im eigentlichen Sinn.
  kernpunkte:
    - 'bestimmt: jede Schranke K wird ab einer Stelle übertroffen'
    - 'unbestimmt: weder konvergent noch bestimmt divergent'
    - 'Beispiele n², (−1)ⁿ; unendlich ist keine Zahl'
- id: gf-k-eindeutig
  frage: Warum hat eine Folge höchstens einen Grenzwert?
  antwort: |
    Angenommen, $a \neq b$ wären beide Grenzwerte. Ich wähle $\varepsilon$ als halben Abstand $\frac{|a - b|}{2}$. Dann
    überlappen sich die beiden $\varepsilon$-Umgebungen nicht. Fast alle Glieder müssten aber in beiden liegen. Formal liefert
    die Dreiecksungleichung $|a - b| \le |a - a_n| + |a_n - b| < 2\varepsilon = |a - b|$, ein Widerspruch.
  kernpunkte:
    - 'Widerspruchsannahme a ≠ b'
    - 'ε = halber Abstand, Umgebungen disjunkt'
    - 'Dreiecksungleichung führt auf |a − b| < |a − b|'
- id: gf-k-beschraenkt
  frage: Zeigen Sie, dass konvergente Folgen beschränkt sind. Gilt die Umkehrung?
  antwort: |
    Sei $a_n \to a$. Zu $\varepsilon = 1$ gibt es ein $N$ mit $|a_n - a| < 1$ für $n \ge N$. Mit der Dreiecksungleichung ist dann
    $|a_n| < |a| + 1$. Vor $N$ liegen nur endlich viele Glieder, und endlich viele Zahlen haben ein Maximum. Das Maximum aus
    $|a_1|, \dots, |a_{N-1}|$ und $|a| + 1$ ist eine Schranke für alle Glieder. Die Umkehrung gilt nicht: $(-1)^n$ ist durch $1$
    beschränkt, aber divergent.
  kernpunkte:
    - 'ε = 1, ab N gilt |aₙ| < |a| + 1'
    - 'endlich viele Glieder davor haben ein Maximum'
    - 'Umkehrung falsch: (−1)ⁿ'
- id: gf-k-grenzwertsaetze
  frage: Was sagen die Grenzwertsätze, und wann darf man sie nicht anwenden?
  antwort: |
    Existieren $\lim a_n = a$ und $\lim b_n = b$, dann ist der Grenzwert von Summe, Differenz und Produkt gleich Summe,
    Differenz und Produkt der Grenzwerte. Beim Quotienten braucht man zusätzlich $b \neq 0$. Nicht anwenden darf man sie, wenn
    ein Einzelgrenzwert nicht existiert. Das betrifft die unbestimmten Formen „unendlich minus unendlich“, „unendlich durch
    unendlich“, „null mal unendlich“ und „$1$ hoch unendlich“. Dort muss man zuerst umformen.
  kernpunkte:
    - 'nur wenn alle Einzelgrenzwerte existieren'
    - 'Quotient nur bei Nennergrenzwert ≠ 0'
    - 'unbestimmte Formen erst umformen'
- id: gf-k-einschliessung
  frage: Was besagt der Einschließungssatz? Nennen Sie ein Beispiel.
  antwort: |
    Gilt ab einer Stelle $a_n \le b_n \le c_n$ und haben $(a_n)$ und $(c_n)$ denselben Grenzwert $g$, dann konvergiert auch
    $(b_n)$ gegen $g$. Beispiel: $\frac{\sin n}{n}$ liegt zwischen $-\frac1n$ und $\frac1n$. Beide Schranken gehen gegen $0$,
    also auch $\frac{\sin n}{n}$, obwohl $\sin n$ selbst keinen Grenzwert hat.
  kernpunkte:
    - 'untere und obere Folge mit demselben Grenzwert'
    - 'Einklemmen ab einer Stelle genügt'
    - 'Beispiel mit sin n oder cos n'
- id: gf-k-hoechste-potenz
  frage: Wie bestimmt man den Grenzwert einer rationalen Folge, und warum funktioniert das?
  antwort: |
    Man dividiert Zähler und Nenner durch die höchste Potenz von $n$ im Nenner. Danach bestehen Zähler und Nenner aus Konstanten
    und Nullfolgen wie $\frac1n$, und die Grenzwertsätze greifen. Ergebnis: Ist der Zählergrad kleiner, ist der Grenzwert $0$.
    Sind die Grade gleich, ist er der Quotient der führenden Koeffizienten. Ist der Zählergrad größer, divergiert die Folge bestimmt.
  kernpunkte:
    - 'durch höchste Nennerpotenz dividieren'
    - 'danach nur Konstanten und Nullfolgen'
    - 'drei Fälle nach den Graden'
- id: gf-k-monotonie-beweis
  frage: Wie beweisen Sie, dass eine Folge streng monoton wachsend ist?
  antwort: |
    Ich zeige $a_{n+1} - a_n > 0$ für **alle** $n$. Dazu ersetze ich in $a_n$ jedes $n$ durch $n + 1$, bringe die Differenz auf
    einen gemeinsamen Nenner und begründe das Vorzeichen von Zähler und Nenner. Bei positiven Gliedern geht auch der Quotient
    $\frac{a_{n+1}}{a_n} > 1$, bei rekursiven Folgen oft eine Induktion. Ein paar berechnete Glieder sind nur eine Vermutung.
  kernpunkte:
    - 'Differenz a₍ₙ₊₁₎ − aₙ für alle n'
    - 'Alternativen Quotient oder Induktion'
    - 'Glieder ausrechnen ist kein Beweis'
- id: gf-k-monotoniekriterium
  frage: Was besagt das Monotoniekriterium, und warum gilt es?
  antwort: |
    Jede monoton wachsende und nach oben beschränkte Folge konvergiert, und zwar gegen ihr Supremum. Für fallende, nach unten
    beschränkte Folgen gilt das entsprechend mit dem Infimum. Der Grund ist die Vollständigkeit von $\R$: Das Supremum $S$
    existiert. Weil $S - \varepsilon$ keine obere Schranke ist, liegt ein Glied darüber, und wegen der Monotonie auch jedes
    spätere. Alle diese Glieder liegen zwischen $S - \varepsilon$ und $S$.
  kernpunkte:
    - 'monoton und beschränkt hat Konvergenz zur Folge'
    - 'Grenzwert ist Supremum bzw. Infimum'
    - 'Beweis über Vollständigkeit: S − ε ist keine obere Schranke'
- id: gf-k-vollstaendigkeit
  frage: Was bedeutet die Vollständigkeit der reellen Zahlen? Sind die rationalen Zahlen vollständig?
  antwort: |
    Jede nichtleere, nach oben beschränkte Teilmenge von $\R$ hat ein Supremum in $\R$. In $\Q$ gilt das nicht. Die Menge der
    rationalen $x$ mit $x^2 < 2$ hat in $\Q$ keine kleinste obere Schranke, weil $\sqrt2$ irrational ist (Kapitel 1). Ebenso
    hat die Heron-Folge für $\sqrt 2$ nur rationale Glieder, aber ihr Grenzwert liegt nicht in $\Q$.
  kernpunkte:
    - 'Supremumsaxiom'
    - 'Gegenbeispiel in ℚ: x² < 2'
    - 'Verbindung zur Irrationalität von √2 (Kapitel 1)'
- id: gf-k-rekursiv
  frage: Wie bestimmen Sie den Grenzwert einer rekursiv definierten Folge?
  antwort: |
    Zuerst zeige ich, dass die Folge beschränkt und monoton ist, meist mit Induktion. Nach dem Monotoniekriterium existiert dann
    ein Grenzwert $a$. Weil auch $a_{n+1}$ gegen $a$ geht, darf ich in der Rekursion zum Grenzwert übergehen und die
    Fixpunktgleichung lösen. Unpassende Lösungen schließe ich mit den Schranken aus. Ohne die Existenz ist die Fixpunktgleichung
    wertlos: Bei $a_{n+1} = 2a_n$ liefert sie $0$, obwohl die Folge divergiert.
  kernpunkte:
    - 'erst Beschränktheit und Monotonie'
    - 'dann Fixpunktgleichung lösen'
    - 'falsche Lösungen mit Schranken ausschließen'
- id: gf-k-bolzano
  frage: Hat jede beschränkte Folge eine konvergente Teilfolge? (Vertiefung)
  antwort: |
    Ja, das ist der Satz von Bolzano-Weierstraß. Beweisidee: Alle Glieder liegen in einem Intervall. Man halbiert es und
    wählt eine Hälfte, in der unendlich viele Glieder liegen. Das wiederholt man. Die Intervalle schrumpfen auf einen Punkt,
    und aus jedem wählt man ein Glied mit größerem Index. Diese Teilfolge konvergiert. Beispiel: $(-1)^n$ divergiert, aber die
    Teilfolge der geraden Glieder ist konstant $1$.
  kernpunkte:
    - 'Satz von Bolzano-Weierstraß'
    - 'Intervallhalbierung, immer die Hälfte mit unendlich vielen Gliedern'
    - 'Beispiel (−1)ⁿ mit Teilfolge der geraden Glieder'
- id: gf-k-geometrische-reihe
  frage: Was ist eine unendliche Reihe, und wann konvergiert die geometrische Reihe?
  antwort: |
    Eine Reihe ist die Folge ihrer Partialsummen $s_n = a_1 + \dots + a_n$. Sie konvergiert, wenn $(s_n)$ konvergiert, und ihr
    Wert ist dieser Grenzwert. Die geometrische Reihe $\sum_{k=0}^\infty q^k$ hat die Partialsummen $\frac{1 - q^n}{1 - q}$ aus
    Kapitel 8. Für $|q| < 1$ geht $q^n$ gegen $0$, also ist der Wert $\frac{1}{1 - q}$. Für $|q| \ge 1$ divergiert sie.
  kernpunkte:
    - 'Reihe = Folge der Partialsummen'
    - 'Summenformel aus Kapitel 8 und qⁿ → 0'
    - 'konvergent genau für |q| < 1, Wert 1/(1 − q)'
- id: gf-k-harmonisch
  frage: Reicht es für die Konvergenz einer Reihe, dass die Summanden gegen 0 gehen?
  antwort: |
    Nein. Das ist nur notwendig, nicht hinreichend. Gegenbeispiel ist die harmonische Reihe $\sum\frac1k$. Fasst man die
    Summanden in Blöcke der Längen $2, 4, 8, \dots$ zusammen, ist jeder Block mindestens $\frac12$. Die Partialsummen wachsen
    deshalb über jede Grenze. Umgekehrt gilt: Gehen die Summanden **nicht** gegen $0$, divergiert die Reihe sicher.
  kernpunkte:
    - 'nur notwendig, nicht hinreichend'
    - 'harmonische Reihe als Gegenbeispiel'
    - 'Blöcke mit Summe mindestens 1/2'
- id: gf-k-null-neun
  frage: Ist 0,999… gleich 1?
  antwort: |
    Ja. $0{,}\overline9$ bezeichnet den Wert der Reihe $\sum_{k=1}^\infty \frac{9}{10^k}$, also den Grenzwert der Partialsummen
    $0{,}9;\ 0{,}99;\ 0{,}999;\ \dots$ Mit der geometrischen Reihe ist das $\frac{0{,}9}{1 - 0{,}1} = 1$, exakt. Es ist keine Zahl
    „knapp unter $1$“, sondern eine andere Schreibweise für $1$.
  kernpunkte:
    - '0,999… ist der Wert einer Reihe'
    - 'geometrische Reihe ergibt genau 1'
    - 'keine Zahl knapp unter 1'
```
