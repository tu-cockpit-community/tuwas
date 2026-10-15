---
nummer: 4
titel: Funktionen
kurz: Funktionsbegriff, Eigenschaften, alle elementaren Funktionstypen, Transformationen, Verkettung und Umkehrfunktion, Wachstums- und Zerfallsmodelle sowie Formeln mit mehreren Variablen.
teil: A
stunden: 18
pruefungsgewicht: 3
voraussetzungen: [zahlen, gleichungen]
lernziele:
  - entscheiden, ob eine Zuordnung eine Funktion ist, Definitions- und Wertemenge bestimmen und zwischen Term, Wertetabelle, Graph und Text wechseln
  - Nullstellen, Monotonie, Symmetrie und Beschränktheit einer Funktion bestimmen und mit der Definition begründen
  - lineare und quadratische Funktionen aus Angaben aufstellen, in Scheitelform bringen und ihre Parameter im Sachzusammenhang deuten
  - Potenz-, Wurzel- und Polynomfunktionen skizzieren, Nullstellen mit ihrer Vielfachheit bestimmen und das Verhalten für betragsmäßig große x angeben
  - bei rationalen Funktionen Polstellen und hebbare Lücken unterscheiden und waagrechte sowie schräge Asymptoten bestimmen
  - Graphen verschieben, strecken und spiegeln, die Wirkung am Funktionsterm ablesen und Betragsfunktionen sowie stückweise definierte Funktionen auswerten und zeichnen
  - Verkettungen bilden und in innere und äußere Funktion zerlegen sowie Umkehrfunktionen berechnen, wenn nötig mit eingeschränkter Definitionsmenge
  - Exponential- und Logarithmusfunktionen skizzieren, zwischen den Formen a hoch x und e hoch (λx) umrechnen und den Logarithmus als Umkehrfunktion der Exponentialfunktion verwenden
  - lineare, exponentielle, beschränkte und logistische Modelle aufstellen, Prozentsatz, Verdopplungs- und Halbwertszeit berechnen und Ergebnisse im Sachzusammenhang beurteilen
  - Formeln als Funktionen mehrerer Variablen lesen und beschreiben, wie sich der Wert ändert, wenn man eine Variable verändert (Vertiefung)
---

Funktionen sind die Sprache, in der fast die ganze restliche Mathematik dieses Kurses spricht. Die
Differentialrechnung untersucht, wie steil eine Funktion ist. Die Integralrechnung misst Flächen unter
Funktionsgraphen. Eine Folge ist eine Funktion, die nur natürliche Zahlen als Eingabe hat. Und jede
Anwendungsaufgabe beginnt damit, einen Zusammenhang als Funktion hinzuschreiben: Kosten in Abhängigkeit von der
Stückzahl, Temperatur in Abhängigkeit von der Zeit, Bestand einer Population nach $t$ Wochen.

**Was kommt in der Prüfung?** In jeder der drei Musterprüfungen der TU Wien stecken Funktionen, meist an mehreren
Stellen. Drei Aufgabentypen kommen direkt aus diesem Kapitel:

- **Wachstumsmodelle.** Ein Bestand wächst nach einem Gesetz der Form $N(t) = N_0\,e^{\lambda t}$ oder um einen
  festen Prozentsatz pro Stunde. Gefragt sind der Prozentsatz pro Zeiteinheit, die Verdopplungszeit, der Zeitpunkt,
  zu dem ein Wert erreicht wird, und eine Deutung des Ergebnisses.
- **Exponentialfunktionen umschreiben.** Eine Funktion wie $c\cdot a^x$ soll in die Form $\alpha\,e^{\lambda x}$
  gebracht werden, damit man sie danach ableiten kann.
- **Polynomfunktionen und stückweise definierte Funktionen** sind der Ausgangspunkt für Kurvendiskussion,
  Stetigkeit und Ableitung in späteren Kapiteln.

Die Originalaufgaben der Musterprüfungen rechnest du in den Prüfungssimulationen. In diesem Kapitel übst du an
abgewandelten Aufgaben mit anderen Zahlen, damit die Simulation später ein ehrlicher Test bleibt.

In der mündlichen Prüfung fragt man gern nach Begriffen und Begründungen. Typische Fragen sind: „Was ist eine
Funktion?“, „Wann gibt es eine Umkehrfunktion?“, „Warum ist die Verdopplungszeit beim exponentiellen Wachstum
konstant?“ und „Warum verschiebt $f(x - 3)$ den Graphen nach rechts?“. Auf jede dieser Fragen bekommst du hier eine
Antwort in ganzen Sätzen.

**Der rote Faden des Kapitels** ist das Bild einer Funktion als **Zuordnung**: Jede erlaubte Eingabe bekommt genau
eine Ausgabe. Fast jede Schwierigkeit in diesem Kapitel löst sich auf, wenn du dich fragst: Was wird hier
eingesetzt, und was kommt heraus? So erklärt sich, warum $f(x + 1)$ etwas anderes ist als $f(x) + 1$, warum die
Umkehrfunktion Eingabe und Ausgabe vertauscht und warum der Logarithmus genau die Frage nach der Hochzahl
beantwortet.

**Wie dieses Kapitel aufgebaut ist:** In [4.1 Was ist eine Funktion?](/lernen/mathe3/funktionen/was-ist-eine-funktion)
klären wir den Begriff selbst, in [4.2 Eigenschaften von Funktionen](/lernen/mathe3/funktionen/eigenschaften-von-funktionen)
das Vokabular zum Beschreiben. Danach folgen die Funktionstypen: linear, quadratisch, Potenzen und Polynome, rationale
Funktionen und Wurzeln. In [4.7 Graphen verschieben, strecken und spiegeln](/lernen/mathe3/funktionen/graphen-verschieben-strecken-und-spiegeln)
lernst du, wie man aus wenigen Grundgraphen sehr viele weitere baut. Es folgen Verkettung und Umkehrfunktion, Betrag und
stückweise definierte Funktionen, dann Exponential- und Logarithmusfunktionen und die Wachstumsmodelle. Den Abschluss
bilden Formeln mit mehreren Variablen. Die Winkelfunktionen bekommen ein eigenes Kapitel,
[Kapitel 5](/lernen/mathe3/trigonometrie).

:::vorwissen
Du brauchst aus den Kapiteln 1 und 2:

- **Potenzen und Wurzeln** mit ihren Rechenregeln, etwa $a^m\cdot a^n = a^{m + n}$ und $a^{1/n} = \sqrt[n]{a}$
  ([1.9 Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln) und [1.10 Potenzen mit rationalen Hochzahlen](/lernen/mathe3/zahlen/potenzen-mit-rationalen-hochzahlen)).
- **Logarithmen:** $\log_a b$ ist die Hochzahl, mit der man $a$ potenzieren muss, um $b$ zu erhalten
  ([1.11 Logarithmen](/lernen/mathe3/zahlen/logarithmen)).
- **Prozentrechnung:** „um $p\,\%$ mehr“ heißt „mal $1 + \tfrac{p}{100}$“
  ([1.6 Prozentrechnung](/lernen/mathe3/zahlen/prozentrechnung)).
- **Terme umformen:** Klammern auflösen, binomische Formeln, Werte mit Klammern einsetzen
  ([1.12 Terme umformen: binomische Formeln und Faktorisieren](/lernen/mathe3/zahlen/terme-umformen-binomische-formeln-und-faktorisieren)).
- **Quadratische Gleichungen** lösen
  ([2.3 Quadratische Gleichungen](/lernen/mathe3/gleichungen/quadratische-gleichungen)).
- **Exponentialgleichungen** durch Logarithmieren lösen
  ([2.9 Exponential- und Logarithmusgleichungen](/lernen/mathe3/gleichungen/exponential-und-logarithmusgleichungen)).
- **Lineare Ungleichungen** lösen, etwa für Definitionsmengen
  ([2.10 Ungleichungen](/lernen/mathe3/gleichungen/ungleichungen)).

Die folgende Eingangsdiagnose prüft genau diese Dinge. Wenn du bei einer Frage danebenliegst, lies den genannten
Abschnitt noch einmal, bevor du weitermachst.
:::

:::anwendung
Funktionen beschreiben Abhängigkeiten. In der Physik hängt der Weg von der Zeit ab, die Spannung vom Strom und die
Aktivität einer radioaktiven Probe vom Alter. In der Informatik beschreibt eine Funktion, wie die Laufzeit eines
Programms mit der Größe der Eingabe wächst. Ob sie linear, quadratisch oder exponentiell wächst, entscheidet darüber,
ob ein Programm in Sekunden oder in Jahrhunderten fertig wird.
:::

### Eingangsdiagnose

```aufgabe
id: fu-diag-einsetzen
titel: Eine negative Zahl einsetzen
niveau: 1
art: check
angabe: |
  Welchen Wert hat der Term $x^2 - 3x$ für $x = -2$?
  Herkunft: [1.12 Terme umformen: binomische Formeln und Faktorisieren](/lernen/mathe3/zahlen/terme-umformen-binomische-formeln-und-faktorisieren).
teile:
  - typ: zahl
    label: 'Wert'
    loesung: "(-2)^2 - 3*(-2)"
    anzeige: '10'
    fehler:
      - wert: "2"
        meldung: |
          Du hast $-2^2 = -4$ gerechnet. Setzt man eine negative Zahl ein, gehört sie in Klammern:
          $(-2)^2 = (-2)\cdot(-2) = +4$.
      - wert: "-2"
        meldung: 'Das Quadrat stimmt. Prüfe das zweite Glied: $-3\cdot(-2) = +6$, denn minus mal minus ergibt plus.'
      - wert: "-10"
        meldung: |
          Minus mal minus ergibt plus. Das zweite Glied ist $-3\cdot(-2) = +6$, nicht $-6$. Auch das Quadrat ist positiv.
hinweise:
  - 'Setze $-2$ mit Klammern ein: $(-2)^2 - 3\cdot(-2)$.'
loesung: |
  Wir setzen $-2$ mit Klammern ein, damit kein Vorzeichen verloren geht: $(-2)^2 - 3\cdot(-2)$.
  ---
  Potenz zuerst: $(-2)^2 = 4$. Dann $-3\cdot(-2) = +6$. Zusammen: $4 + 6 = 10$.
```

```aufgabe
id: fu-diag-binom
titel: Eine Klammer quadrieren
niveau: 1
art: check
angabe: |
  Multipliziere aus: $(x - 3)^2$.
  Herkunft: [1.12 Terme umformen: binomische Formeln und Faktorisieren](/lernen/mathe3/zahlen/terme-umformen-binomische-formeln-und-faktorisieren).
teile:
  - typ: term
    label: '$(x - 3)^2 =$'
    loesung: "x^2 - 6x + 9"
    fehler:
      - wert: "x^2 + 9"
        meldung: |
          Das mittlere Glied fehlt. $(x - 3)^2$ heißt $(x - 3)\cdot(x - 3)$, und beim Ausmultiplizieren entsteht zweimal
          $-3x$. Die zweite binomische Formel lautet $(a - b)^2 = a^2 - 2ab + b^2$.
      - wert: "x^2 - 9"
        meldung: |
          Man darf nicht jedes Glied einzeln quadrieren. Außerdem ist $(-3)^2 = +9$. Richtig ist die zweite binomische
          Formel $(a - b)^2 = a^2 - 2ab + b^2$.
      - wert: "x^2 - 6x - 9"
        meldung: 'Das letzte Glied ist $(-3)\cdot(-3) = +9$. Minus mal minus ergibt plus.'
hinweise:
  - 'Zweite binomische Formel: $(a - b)^2 = a^2 - 2ab + b^2$ mit $a = x$ und $b = 3$.'
loesung: |
  Nach der zweiten binomischen Formel mit $a = x$ und $b = 3$ ist $(x - 3)^2 = x^2 - 2\cdot x\cdot 3 + 3^2$.
  ---
  Also $(x - 3)^2 = x^2 - 6x + 9$. Probe mit $x = 0$: links $(-3)^2 = 9$, rechts $9$.
```

```aufgabe
id: fu-diag-potenz
titel: Eine Bruchhochzahl
niveau: 1
art: check
angabe: |
  Berechne $27^{2/3}$ ohne Taschenrechner.
  Herkunft: [1.10 Potenzen mit rationalen Hochzahlen](/lernen/mathe3/zahlen/potenzen-mit-rationalen-hochzahlen).
teile:
  - typ: zahl
    label: '$27^{2/3} =$'
    loesung: "27^(2/3)"
    anzeige: '9'
    fehler:
      - wert: "18"
        meldung: 'Eine Hochzahl ist kein Faktor. $27^{2/3}$ heißt nicht $\tfrac23\cdot 27$.'
      - wert: "27^(3/2)"
        meldung: 'Der Nenner $3$ der Hochzahl ist die Wurzel, der Zähler $2$ die Potenz: $27^{2/3} = \left(\sqrt[3]{27}\right)^2$.'
      - wert: "3"
        meldung: '$\sqrt[3]{27} = 3$ stimmt. Danach musst du noch quadrieren, denn im Zähler der Hochzahl steht $2$.'
hinweise:
  - '$a^{m/n} = \left(\sqrt[n]{a}\right)^m$. Ziehe zuerst die dritte Wurzel.'
loesung: |
  Die Hochzahl $\tfrac23$ bedeutet: dritte Wurzel ziehen und dann quadrieren, also $27^{2/3} = \left(\sqrt[3]{27}\right)^2$.
  ---
  Wegen $3^3 = 27$ ist $\sqrt[3]{27} = 3$. Quadrieren ergibt $3^2 = 9$.
```

```aufgabe
id: fu-diag-log
titel: Ein Logarithmus mit Bruch
niveau: 1
art: check
angabe: |
  Bestimme $\log_2 \tfrac18$ ohne Taschenrechner.
  Herkunft: [1.11 Logarithmen](/lernen/mathe3/zahlen/logarithmen).
teile:
  - typ: zahl
    label: '$\log_2 \tfrac18 =$'
    loesung: "log(1/8, 2)"
    anzeige: '-3'
    fehler:
      - wert: "3"
        meldung: |
          $2^3 = 8$, aber gesucht ist die Hochzahl für $\tfrac18$. Einen Kehrwert bekommt man mit einer **negativen**
          Hochzahl: $2^{-3} = \tfrac{1}{2^3}$.
      - wert: "1/16"
        meldung: 'Der Logarithmus ist keine Division. $\log_2 \tfrac18$ fragt: Mit welcher Hochzahl $k$ ist $2^k = \tfrac18$?'
hinweise:
  - 'Suche $k$ mit $2^k = \tfrac18$. Denk an $2^{-1} = \tfrac12$.'
loesung: |
  $\log_2 \tfrac18$ ist die Zahl $k$ mit $2^k = \tfrac18$. Es ist $2^3 = 8$, und eine negative Hochzahl bildet den Kehrwert.
  ---
  Also $2^{-3} = \tfrac18$ und damit $\log_2\tfrac18 = -3$.
```

```aufgabe
id: fu-diag-prozent
titel: Eine Abnahme als Faktor
niveau: 1
art: check
angabe: |
  Ein Preis sinkt um $12\,\%$. Mit welcher Zahl musst du den alten Preis multiplizieren, um den neuen zu erhalten?
  Herkunft: [1.6 Prozentrechnung](/lernen/mathe3/zahlen/prozentrechnung).
teile:
  - typ: zahl
    label: 'Faktor'
    loesung: "1 - 12/100"
    anzeige: '0{,}88'
    fehler:
      - wert: "0.12"
        meldung: |
          Mit $0{,}12$ erhältst du nur die **Abnahme**, also $12\,\%$ des alten Preises. Übrig bleiben
          $100\,\% - 12\,\%$.
      - wert: "-0.12"
        meldung: 'Ein Faktor $-0{,}12$ würde den Preis negativ machen. Übrig bleiben $88\,\%$ des alten Preises.'
      - wert: "1.12"
        meldung: 'Der Faktor $1{,}12$ gehört zu einer **Zunahme** um $12\,\%$. Bei einer Abnahme wird abgezogen.'
hinweise:
  - 'Nach der Abnahme bleiben $100\,\% - 12\,\% = 88\,\%$ übrig.'
loesung: |
  Vom alten Preis ($100\,\%$) gehen $12\,\%$ weg. Es bleiben $88\,\% = 0{,}88$.
  ---
  Der Faktor ist also $0{,}88$. Beispiel: Aus $50$ Euro werden $50\cdot 0{,}88 = 44$ Euro, und $6$ Euro sind tatsächlich $12\,\%$ von $50$ Euro.
```

```aufgabe
id: fu-diag-quadratisch
titel: Eine quadratische Gleichung
niveau: 1
art: check
angabe: |
  Löse $x^2 - 2x - 8 = 0$. Gib beide Lösungen an, getrennt durch einen Strichpunkt.
  Herkunft: [2.3 Quadratische Gleichungen](/lernen/mathe3/gleichungen/quadratische-gleichungen).
teile:
  - typ: menge
    label: '$L$'
    loesung: ["4", "-2"]
    fehler:
      - wert: ["-4", "2"]
        meldung: 'Prüfe das Vorzeichen von $p$: $p = -2$, also ist $-\tfrac p2 = +1$. Die Lösungen sind $1 \pm 3$.'
      - wert: ["4"]
        meldung: 'Eine Lösung fehlt. Die Diskriminante ist positiv, also gibt es zwei Lösungen.'
hinweise:
  - 'Kleine Lösungsformel mit $p = -2$ und $q = -8$, oder zerlege $x^2 - 2x - 8 = (x - 4)(x + 2)$.'
loesung: |
  Kleine Lösungsformel mit $p = -2$ und $q = -8$: $x_{1,2} = 1 \pm \sqrt{1 + 8} = 1 \pm 3$.
  ---
  Also $x_1 = 4$ und $x_2 = -2$. Probe: $16 - 8 - 8 = 0$ und $4 + 4 - 8 = 0$.
```

```aufgabe
id: fu-diag-exponentialgleichung
titel: Eine Exponentialgleichung
niveau: 1
art: check
angabe: |
  Löse $3^x = 20$. Gib $x$ auf drei Nachkommastellen an.
  Herkunft: [2.9 Exponential- und Logarithmusgleichungen](/lernen/mathe3/gleichungen/exponential-und-logarithmusgleichungen).
teile:
  - typ: zahl
    label: '$x$'
    loesung: "ln(20)/ln(3)"
    toleranz: 0.001
    anzeige: '\tfrac{\ln 20}{\ln 3} \approx 2{,}727'
    fehler:
      - wert: "20/3"
        meldung: 'Die Unbekannte steht in der Hochzahl. Teilen hilft hier nicht. Logarithmiere beide Seiten.'
      - wert: "ln(20/3)"
        meldung: 'Beim Logarithmieren wird aus $\ln(3^x)$ der Term $x\cdot\ln 3$. Danach dividierst du durch $\ln 3$, statt $20$ durch $3$ zu teilen.'
hinweise:
  - 'Logarithmiere beide Seiten: $x\cdot\ln 3 = \ln 20$.'
loesung: |
  Wir logarithmieren beide Seiten. Nach der Regel $\ln(a^x) = x\ln a$ wird daraus $x\cdot\ln 3 = \ln 20$.
  ---
  Division durch $\ln 3$: $x = \tfrac{\ln 20}{\ln 3} \approx \tfrac{2{,}9957}{1{,}0986} \approx 2{,}727$. Probe: $3^{2{,}727} \approx 20{,}0$.
```

```aufgabe
id: fu-diag-ungleichung
titel: Eine lineare Ungleichung
niveau: 1
art: check
angabe: |
  Für welche $x$ gilt $6 - 2x \ge 0$?
  Herkunft: [2.10 Ungleichungen](/lernen/mathe3/gleichungen/ungleichungen).
teile:
  - typ: auswahl
    optionen:
      - '$x \le 3$'
      - '$x \ge 3$'
      - '$x \le -3$'
      - '$x \ge -3$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Beim Dividieren durch die negative Zahl $-2$ dreht sich das Ungleichheitszeichen um. Probe mit $x = 4$:
          $6 - 8 = -2$, und das ist nicht $\ge 0$.
      - wert: 2
        meldung: 'Aus $-2x \ge -6$ folgt nach Division durch $-2$ die Zahl $3$, nicht $-3$. Minus durch minus ergibt plus.'
      - wert: 3
        meldung: 'Prüfe mit $x = 4$: $6 - 8 = -2 < 0$. Also gehört $4$ nicht dazu, obwohl $4 \ge -3$ ist.'
hinweise:
  - 'Subtrahiere $6$ und dividiere durch $-2$. Was passiert dabei mit dem Zeichen?'
loesung: |
  Wir subtrahieren $6$ auf beiden Seiten: $-2x \ge -6$.
  ---
  Division durch $-2$ dreht das Zeichen um: $x \le 3$. Probe: Für $x = 0$ ist $6 \ge 0$ wahr, für $x = 4$ ist $-2 \ge 0$ falsch.
```

## Was ist eine Funktion?

```aufgabe
id: fu-def-check-intervall
titel: Welche Zahlen liegen im Intervall?
niveau: 1
art: check
angabe: |
  Definitions- und Wertemengen schreibt man oft als Intervalle. Welche der Zahlen $-2$, $0$, $3$ und $3{,}5$ liegen im
  Intervall $[-2, 3)$?
  Herkunft: [1.15 Betrag und Intervalle](/lernen/mathe3/zahlen/betrag-und-intervalle).
teile:
  - typ: auswahl
    mehrfach: true
    optionen: ['$-2$', '$0$', '$3$', '$3{,}5$']
    richtig: [0, 1]
    fehler:
      - wert: [1]
        meldung: 'Die eckige Klammer bei $-2$ bedeutet: Der Randpunkt $-2$ gehört dazu.'
      - wert: [0, 1, 2]
        meldung: 'Die runde Klammer bei $3$ bedeutet: Der Randpunkt $3$ gehört **nicht** dazu.'
hinweise:
  - 'Eckige Klammer: Randpunkt gehört dazu. Runde Klammer: Randpunkt gehört nicht dazu.'
loesung: |
  $[-2, 3)$ enthält alle Zahlen $x$ mit $-2 \le x < 3$. Die eckige Klammer schließt $-2$ ein, die runde Klammer schließt $3$ aus.
  ---
  Also liegen $-2$ und $0$ im Intervall. Die Zahl $3$ ist der ausgeschlossene Rand, und $3{,}5$ ist zu groß.
```

Im Alltag sagt man: „Der Preis einer Taxifahrt hängt von der Strecke ab.“ Gemeint ist: Wenn ich die Strecke kenne,
dann steht der Preis fest. Genau dieses „steht fest“ ist der Kern des Funktionsbegriffs.

Ein gutes Bild ist eine **Maschine**. Du wirfst oben eine Zahl hinein, die **Eingabe**. Die Maschine arbeitet nach
einer festen Vorschrift und gibt unten eine Zahl aus, die **Ausgabe**. Zwei Dinge muss die Maschine leisten. Erstens
muss sie **jede** erlaubte Eingabe verarbeiten. Zweitens muss sie bei derselben Eingabe **immer dieselbe** Ausgabe
liefern. Eine Maschine, die bei der Eingabe $4$ einmal $2$ und einmal $-2$ ausgibt, ist unbrauchbar.

Die Vorschrift muss dabei keine Formel sein. Eine Tabelle, ein Pfeildiagramm oder ein Satz in Worten genügen, solange
klar ist, welche Ausgabe zu welcher Eingabe gehört. Man nennt so eine Vorschrift eine **Zuordnung**.

:::definition[Funktion]
Gegeben sind zwei Mengen $D$ und $Z$. Eine **Funktion** $f$ von $D$ nach $Z$ ist eine Zuordnung, die **jedem**
Element $x$ aus $D$ **genau ein** Element $f(x)$ aus $Z$ zuordnet. Man schreibt
$$f\colon D \to Z, \qquad x \mapsto f(x).$$
Dabei heißt $D$ die **Definitionsmenge** (die Menge der erlaubten Eingaben). Das Element $x$ heißt **Argument** oder
unabhängige Variable. Die Zahl $f(x)$ heißt **Funktionswert** an der Stelle $x$. $Z$ ist die **Zielmenge**, aus der
die Funktionswerte stammen.
:::

Zu den Zeichen: $f\colon D \to Z$ liest man „$f$ bildet $D$ nach $Z$ ab“. Der Pfeil $x \mapsto f(x)$ mit dem kleinen
Strich am Anfang liest man „$x$ wird abgebildet auf $f(x)$“. Das Zeichen $\in$ liest man „ist Element von“. So
bedeutet $x \in D$: „$x$ liegt in der Definitionsmenge“.

Zwei Wörter in der Definition tragen das ganze Gewicht:

- **jedem** $x \in D$: Keine erlaubte Eingabe bleibt ohne Funktionswert.
- **genau ein** Funktionswert: Keine Eingabe bekommt zwei verschiedene Werte.

Erlaubt ist dagegen, dass zwei verschiedene Eingaben denselben Wert bekommen. Bei $f(x) = x^2$ ist $f(-3) = 9$ und
$f(3) = 9$. Das ist völlig in Ordnung, denn jede Eingabe hat trotzdem genau einen Wert.

:::beispiel[Funktion und Nichtfunktion]
**Eine Funktion:** Jedem Tag des Jahres 2026 wird die Höchsttemperatur in Wien in Grad Celsius zugeordnet. Jeder Tag
hat genau eine Höchsttemperatur. Dass zwei Tage dieselbe Höchsttemperatur haben können, stört nicht.

**Keine Funktion:** Jeder Höchsttemperatur wird der Tag zugeordnet, an dem sie gemessen wurde. Zu $24\,°\text{C}$
gehören aber vermutlich mehrere Tage. Eine Eingabe hätte dann mehrere Ausgaben. Die Bedingung „genau ein“ ist verletzt.

**Auch keine Funktion:** $x \mapsto \tfrac1x$ mit der Definitionsmenge $D = \R$. Für $x = 0$ gibt es keinen Wert,
denn durch null kann man nicht dividieren. Die Bedingung „jedem“ ist verletzt. Mit $D = \R\setminus\{0\}$, also „alle
reellen Zahlen außer $0$“, ist dieselbe Vorschrift eine Funktion.
:::

:::intuition
Wer programmiert, kennt das Bild: Eine Funktion ist wie eine Methode `double f(double x)` ohne Seiteneffekte. Jede
zulässige Eingabe liefert genau einen Rückgabewert, und dieselbe Eingabe liefert immer dasselbe Ergebnis. Die
Definitionsmenge entspricht den zulässigen Eingaben, etwa bei `Math.sqrt` den Zahlen ab $0$.
:::

### Einsetzen: Was bedeutet f(3), f(a) und f(a + 1)?

Der Ausdruck $f(x)$ ist eine Rechenanweisung: „Nimm die Eingabe und rechne damit nach der Vorschrift.“ In
$f(x) = x^2 - 2x$ ist $x$ nur ein Platzhalter für die Eingabe. Was immer in der Klammer steht, ersetzt **jedes** $x$
im Term. Das gilt für Zahlen, für Buchstaben und für ganze Terme. Damit nichts verloren geht, setzt man die Eingabe
immer **in Klammern** ein.

:::beispiel[Einsetzen in f(x) = x² − 2x]
- $f(3) = 3^2 - 2\cdot 3 = 9 - 6 = 3$.
- $f(-1) = (-1)^2 - 2\cdot(-1) = 1 + 2 = 3$. Zwei verschiedene Eingaben, derselbe Wert: erlaubt.
- $f(a) = a^2 - 2a$. Der Buchstabe $a$ steht einfach an der Stelle von $x$.
- $f(a + 1)$: Jedes $x$ wird durch $(a + 1)$ ersetzt. Dann multiplizieren wir aus:
  $$f(a + 1) = (a + 1)^2 - 2(a + 1) = a^2 + 2a + 1 - 2a - 2 = a^2 - 1.$$
- $f(a) + 1$ heißt dagegen: erst $f(a)$ ausrechnen, dann $1$ addieren. Das ergibt $a^2 - 2a + 1$.

Für $a = 3$ ist $f(a + 1) = f(4) = 16 - 8 = 8$, aber $f(a) + 1 = 3 + 1 = 4$. Die beiden Ausdrücke sind also verschieden.
:::

:::achtung[f(a + 1) ist nicht f(a) + 1]
Eine typische Fehlrechnung bei $f(x) = x^2 - 2x$:
$$f(a + 1) = a^2 - 2a + 1 \qquad\text{(falsch)}.$$
Hier wurde $f(a)$ ausgerechnet und $1$ addiert. Die Klammer $f(\ldots)$ verlangt aber, **zuerst** $a + 1$ als Eingabe
zu bilden und **dann** zu rechnen. **Richtig:** $f(a + 1) = (a + 1)^2 - 2(a + 1) = a^2 - 1$. Merksatz: Was **in** der
Klammer steht, wird eingesetzt. Was **außerhalb** steht, wird erst mit dem Ergebnis gerechnet.
:::

:::achtung[Klammern beim Einsetzen vergessen]
Bei $g(x) = 3x^2$ rechnet man oft $g(-2) = 3\cdot -2^2 = -12$. Das ist falsch, denn $-2^2$ bedeutet $-(2^2) = -4$.
**Richtig:** $g(-2) = 3\cdot(-2)^2 = 3\cdot 4 = 12$. Wer jede Eingabe in Klammern setzt, macht diesen Fehler nicht.
Genauso ist $g(2a) = 3\cdot(2a)^2 = 12a^2$ und nicht $6a^2$.
:::

### Der Graph

Eine Funktion mit reellen Zahlen kann man zeichnen. Zu jeder Eingabe $x$ gehört genau ein Punkt mit der waagrechten
Koordinate $x$ und der senkrechten Koordinate $f(x)$.

:::definition[Graph]
Der **Graph** einer Funktion $f\colon D \to \R$ mit $D \subseteq \R$ ist die Menge aller Punkte
$$G_f = \{\,(x \mid f(x)) \mid x \in D\,\}.$$
Man trägt $x$ waagrecht und $y = f(x)$ senkrecht ein. $D \subseteq \R$ liest man „$D$ ist eine Teilmenge von $\R$“.
:::

Aus „genau ein Wert zu jedem $x$“ folgt ein einfacher Test, der **Senkrechtentest**: Jede senkrechte Gerade schneidet
den Graphen einer Funktion **höchstens einmal**. Schnitte sie ihn zweimal, gäbe es zu einem $x$ zwei $y$-Werte.

Ein Beispiel ist der Kreis mit Mittelpunkt $(0 \mid 0)$ und Radius $2$. Er besteht aus allen Punkten mit
$x^2 + y^2 = 4$. Er ist kein Funktionsgraph, denn zu $x = 0$ gehören die Punkte $(0 \mid 2)$ und $(0 \mid -2)$. Der
obere Halbkreis allein ist dagegen der Graph der Funktion $y = \sqrt{4 - x^2}$ auf $[-2, 2]$.

```plot
x: [-3, 3]
y: [-2.6, 2.6]
gleich: true
graphen:
  - { f: "sqrt(4 - x^2)", label: "y = √(4 − x²)", farbe: 0 }
  - { f: "-sqrt(4 - x^2)", farbe: 1, gestrichelt: true }
strecken:
  - { von: [1, -2.5], nach: [1, 2.5], gestrichelt: true, farbe: 3 }
punkte:
  - { x: 1, y: "sqrt(3)", farbe: 0 }
  - { x: 1, y: "-sqrt(3)", farbe: 1 }
beschriftung: Der ganze Kreis x² + y² = 4 ist kein Funktionsgraph, weil die senkrechte Gerade x = 1 ihn in zwei Punkten schneidet. Der obere Halbkreis (blau) allein ist der Graph der Funktion y = √(4 − x²).
```

### Vier Darstellungen derselben Funktion

Eine Funktion kann man auf vier Arten angeben. Als Beispiel nehmen wir einen Taxitarif mit $4$ Euro Grundgebühr und
$2$ Euro pro Kilometer.

| Darstellung | Beispiel | Stärke |
|---|---|---|
| Funktionsterm | $K(s) = 2s + 4$. | Man kann exakt damit rechnen. |
| Wertetabelle | $s = 0, 1, 2$ ergibt $K = 4, 6, 8$. | Man sieht konkrete Werte. |
| Graph | eine steigende Gerade durch $(0 \mid 4)$. | Man sieht das Verhalten auf einen Blick. |
| Worte | „$4$ Euro Grundgebühr und $2$ Euro pro km.“ | So stehen Anwendungen in der Angabe. |

In Prüfungen wechselt man ständig zwischen diesen Formen. Aus Worten stellt man einen Term auf, aus dem Term macht man
eine Wertetabelle und daraus eine Skizze. Eine gute Skizze hat beschriftete Achsen und eine erkennbare Skala. Sie
markiert die wichtigen Punkte, zum Beispiel Nullstellen und den Schnitt mit der $y$-Achse.

```aufgabe
id: fu-funktion-oder-nicht
titel: Funktion oder nicht?
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Welche der folgenden Zuordnungen sind Funktionen (mit der angegebenen Definitionsmenge)?
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - 'Jedem zugelassenen Auto in Österreich wird sein Kennzeichen zugeordnet.'
      - 'Jeder Postleitzahl wird die Person zugeordnet, die dort wohnt.'
      - '$x \mapsto y$ mit $x^2 + y^2 = 16$, $x \in [-4, 4]$'
      - '$x \mapsto \sqrt{x}$, $x \in [0, \infty)$'
      - 'Die Wertetabelle mit $x$: $1, 2, 2, 3$ und $y$: $5, 6, 7, 8$'
    richtig: [0, 3]
    fehler:
      - wert: [0, 2, 3]
        meldung: |
          Prüfe den Kreis mit $x = 0$: Es gilt $0 + y^2 = 16$ für $y = 4$ und für $y = -4$. Eine Eingabe hat zwei Werte.
      - wert: [0, 3, 4]
        meldung: |
          In der Tabelle steht die Eingabe $2$ zweimal, einmal mit $6$ und einmal mit $7$. Eine Eingabe darf nur einen Wert haben.
      - wert: [0, 1, 3]
        meldung: |
          An einer Postleitzahl wohnen viele Menschen. Eine Eingabe hätte also viele Ausgaben. Das verletzt „genau ein“.
      - wert: [0]
        meldung: 'Die Wurzel auf $[0, \infty)$ ist eine Funktion: Jede Zahl $x \ge 0$ hat genau eine Wurzel, die nicht negativ ist.'
hinweise:
  - 'Prüfe für jede Zuordnung zwei Fragen: Bekommt **jede** Eingabe einen Wert? Bekommt jede Eingabe **genau einen** Wert?'
loesung: |
  **Kennzeichen:** Jedes zugelassene Auto hat genau ein Kennzeichen. Das ist eine Funktion.
  **Postleitzahl:** An einer Postleitzahl wohnen viele Menschen. Eine Eingabe hat viele Ausgaben. Keine Funktion.
  ---
  **Kreisgleichung:** Zu $x = 0$ gehören $y = 4$ und $y = -4$. Keine Funktion.
  **Wurzel auf $[0, \infty)$:** Jedes $x \ge 0$ hat genau eine nichtnegative Wurzel. Das ist eine Funktion.
  ---
  **Tabelle:** Die Eingabe $2$ hat die zwei Werte $6$ und $7$. Keine Funktion. Ergebnis: Nur die erste und die vierte Zuordnung sind Funktionen.
```

### Die maximale Definitionsmenge

Oft ist nur ein Term gegeben, etwa $f(x) = \dfrac{\sqrt{x + 1}}{x - 2}$. Dann meint man als Definitionsmenge
stillschweigend die **größte** Menge reeller Zahlen, für die man den Term ausrechnen kann. Bei den Termen dieses Kapitels
können im Reellen nur drei Dinge schiefgehen.

:::merke[Wo ein Term nicht definiert ist]
1. **Division durch null:** Jeder Nenner muss ungleich $0$ sein.
2. **Gerade Wurzel aus einer negativen Zahl:** Unter $\sqrt{\ }$ oder $\sqrt[4]{\ }$ muss eine Zahl $\ge 0$ stehen.
   Diese Zahl heißt **Radikand**.
3. **Logarithmus einer Zahl $\le 0$:** Das Argument eines Logarithmus muss $> 0$ sein.

Schreibe jede Bedingung auf, löse sie einzeln und nimm am Ende die Zahlen, die **alle** Bedingungen erfüllen.
:::

:::beispiel[Wurzel und Bruch]
$f(x) = \dfrac{\sqrt{x + 1}}{x - 2}$.

1. Radikand: $x + 1 \ge 0$, also $x \ge -1$.
2. Nenner: $x - 2 \ne 0$, also $x \ne 2$.
3. Beide Bedingungen zusammen: alle $x$ ab $-1$, aber ohne die $2$.

$$D = [-1, 2) \cup (2, \infty).$$
Das Zeichen $\cup$ heißt „vereinigt mit“: Die Menge besteht aus beiden Intervallen zusammen. Das Zeichen $\infty$
liest man „unendlich“: Das zweite Intervall reicht nach rechts ohne Ende. Die Stelle $-1$ gehört dazu, denn
$\sqrt0 = 0$ ist erlaubt.
:::

:::beispiel[Logarithmus]
$g(x) = \ln(8 - 2x)$. Das Argument muss positiv sein: $8 - 2x > 0$. Wir subtrahieren $8$ und dividieren durch $-2$.
Dabei dreht sich das Zeichen um: $x < 4$. Also ist $D = (-\infty, 4)$. Hier steht $<$ und nicht $\le$, denn $\ln 0$
gibt es nicht.
:::

:::achtung[Die Bedingung des Nenners vergessen]
Eine typische Fehlrechnung bei $f(x) = \dfrac{\sqrt{x + 1}}{x - 2}$:
$$x + 1 \ge 0, \quad\text{also}\quad D = [-1, \infty) \qquad\text{(falsch)}.$$
Die Wurzel wurde beachtet, der Nenner nicht. Für $x = 2$ steht aber $\tfrac{\sqrt3}{0}$ da, und das ist nicht
definiert. **Richtig:** $D = [-1, 2) \cup (2, \infty)$. Gehe darum immer **alle drei** Punkte des Merke-Kastens durch.
:::

### Definitionsmenge im Sachzusammenhang

In Anwendungen schränkt zusätzlich die **Bedeutung** der Größen die Definitionsmenge ein. Eine Zeit ist nicht
negativ, eine Stückzahl ist eine natürliche Zahl, und eine Länge ist positiv. Man spricht dann von der
**sachlich sinnvollen** Definitionsmenge.

:::beispiel[Ein Wassertank läuft leer]
Ein Tank enthält $600$ Liter Wasser. Ab dem Zeitpunkt $t = 0$ fließen pro Minute $25$ Liter ab. Die Wassermenge nach
$t$ Minuten ist
$$V(t) = 600 - 25t \qquad (V \text{ in Liter},\ t \text{ in Minuten}).$$
Den Term kann man für jedes reelle $t$ ausrechnen. Sinnvoll ist er aber nur, solange Wasser da ist. Der Tank ist
leer, wenn $600 - 25t = 0$ ist, also bei $t = 24$. Die sachlich sinnvolle Definitionsmenge ist $D = [0, 24]$, die
Wertemenge $W = [0, 600]$. Für $t = 30$ liefert der Term $-150$ Liter. Das ist sinnlos, denn der Tank kann nicht weniger
als leer sein.
:::

### Die Wertemenge

:::definition[Wertemenge]
Die **Wertemenge** $W$ einer Funktion ist die Menge aller Funktionswerte, die **tatsächlich vorkommen**:
$$W = \{\, f(x) \mid x \in D \,\}.$$
:::

Die Definitionsmenge sagt, **was man einsetzen darf**. Am Graphen ist das die waagrechte Ausdehnung. Die Wertemenge
sagt, **was herauskommt**. Am Graphen ist das die senkrechte Ausdehnung. Die Wertemenge ist meist schwerer zu
finden, weil man wissen muss, welche Werte wirklich erreicht werden. Zwei Werkzeuge helfen:

- **Eine Form suchen, an der man den kleinsten oder größten Wert sieht.** Ein Quadrat ist nie negativ. Das nutzt
  das folgende Beispiel.
- **Nach $x$ auflösen.** Eine Zahl $y$ liegt genau dann in $W$, wenn die Gleichung $f(x) = y$ eine Lösung in $D$ hat.

:::beispiel[Wertemenge über ein Quadrat]
$f(x) = (x - 1)^2 + 2$ mit $D = \R$.

1. Ein Quadrat ist nie negativ: $(x - 1)^2 \ge 0$ für jedes $x$.
2. Wir addieren $2$ auf beiden Seiten: $f(x) \ge 2$. Kleiner als $2$ kann $f(x)$ also nicht werden.
3. Der Wert $2$ wird angenommen, nämlich bei $x = 1$, denn dort ist die Klammer null.
4. Jeder größere Wert wird auch angenommen. Für $y = 11$ etwa löst $x = 4$ die Gleichung, denn $(4 - 1)^2 + 2 = 11$.

Ergebnis: $W = [2, \infty)$. Die Definitionsmenge ist dagegen ganz $\R$. Verwechsle die beiden nicht: $D$ beschreibt die
Eingaben, $W$ die Ausgaben.
:::

```reflexion
frage: Erkläre in eigenen Worten, warum „Jeder Person wird ihr Geburtsdatum zugeordnet“ eine Funktion ist, „Jedem Geburtsdatum wird die Person zugeordnet“ aber nicht. Welches der zwei Wörter „jedem“ und „genau ein“ ist verletzt?
antwort: |
  Jede Person hat genau ein Geburtsdatum. Jede Eingabe bekommt also genau einen Wert, und das ist eine Funktion. Dass
  viele Personen dasselbe Geburtsdatum haben, ist erlaubt: Verschiedene Eingaben dürfen denselben Wert haben.

  In der umgekehrten Richtung ist das Geburtsdatum die Eingabe. An einem Tag werden aber viele Menschen geboren. Eine
  Eingabe hätte dann viele Ausgaben. Verletzt ist das Wort „genau ein“. Die Umkehrung einer Funktion ist also nicht
  automatisch wieder eine Funktion. Genau diese Frage untersucht
  [4.8 Verkettung und Umkehrfunktion](/lernen/mathe3/funktionen/verkettung-und-umkehrfunktion).
```

```aufgabe
id: fu-definitionsmenge
titel: Maximale Definitionsmenge
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Bestimme jeweils die maximale Definitionsmenge in $\R$.

  (1) $f(x) = \dfrac{\sqrt{x + 5}}{x - 1}$

  (2) $g(x) = \ln(10 - 5x)$
teile:
  - typ: auswahl
    label: 'Definitionsmenge von $f$'
    optionen:
      - '$[-5, \infty)$'
      - '$[-5, 1) \cup (1, \infty)$'
      - '$(-5, 1) \cup (1, \infty)$'
      - '$\R \setminus \{1\}$'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Der Nenner wurde vergessen. Für $x = 1$ steht eine Division durch null da.'
      - wert: 2
        meldung: 'Die Stelle $-5$ gehört dazu: Dort steht $\sqrt0 = 0$ im Zähler, und das ist erlaubt.'
      - wert: 3
        meldung: 'Die Wurzel wurde vergessen. Für $x = -6$ stünde $\sqrt{-1}$ im Zähler.'
  - typ: auswahl
    label: 'Definitionsmenge von $g$'
    optionen:
      - '$(-\infty, 2)$'
      - '$(-\infty, 2]$'
      - '$(2, \infty)$'
      - '$(0, 2)$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Bei $x = 2$ wäre das Argument $0$, und $\ln 0$ gibt es nicht. Der Rand gehört nicht dazu.'
      - wert: 2
        meldung: 'Beim Dividieren durch $-5$ dreht sich das Ungleichheitszeichen um. Probe: $x = 3$ ergibt $\ln(-5)$.'
      - wert: 3
        meldung: 'Auch negative $x$ sind erlaubt. Für $x = -1$ ist das Argument $15 > 0$.'
hinweise:
  - 'Radikand $\ge 0$, Nenner $\ne 0$, Argument des Logarithmus $> 0$.'
loesung: |
  **(1)** Radikand: $x + 5 \ge 0$, also $x \ge -5$. Nenner: $x \ne 1$. Beide Bedingungen zusammen ergeben
  $D_f = [-5, 1) \cup (1, \infty)$. Die Stelle $-5$ gehört dazu, denn $\sqrt{0} = 0$ ist erlaubt.
  ---
  **(2)** Das Argument muss positiv sein: $10 - 5x > 0$. Subtrahieren von $10$ ergibt $-5x > -10$. Division durch $-5$
  dreht das Zeichen: $x < 2$. Also $D_g = (-\infty, 2)$. Probe: $x = 0$ ergibt $\ln 10$, das ist erlaubt.
```

```aufgabe
id: fu-einsetzen
titel: Einsetzen mit Klammern
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Gegeben ist $f(x) = 2x^2 - x$. Berechne $f(-3)$ und gib $f(a + 1)$ als ausmultiplizierten Term in $a$ an.
teile:
  - typ: zahl
    label: '$f(-3)$'
    loesung: "2*(-3)^2 - (-3)"
    anzeige: '21'
    fehler:
      - wert: "-15"
        meldung: 'Du hast $-3^2 = -9$ gerechnet. Mit Klammern ist $(-3)^2 = 9$, also $2\cdot 9 = 18$.'
      - wert: "15"
        meldung: 'Das erste Glied $18$ stimmt. Beim zweiten gilt $-(-3) = +3$, minus mal minus ergibt plus.'
  - typ: term
    label: '$f(a + 1)$'
    variable: a
    loesung: "2a^2 + 3a + 1"
    fehler:
      - wert: "2a^2 - a + 1"
        meldung: |
          Das ist $f(a) + 1$, oder es wurde $(a + 1)^2 = a^2 + 1$ gerechnet. Ersetze **jedes** $x$ durch $(a + 1)$ und
          multipliziere $(a + 1)^2 = a^2 + 2a + 1$ mit der binomischen Formel aus.
      - wert: "2a^2 + 3a + 3"
        meldung: 'Vorzeichen prüfen: $-(a + 1) = -a - 1$. Das Minus gilt für beide Summanden in der Klammer.'
      - wert: "2a^2 + 4a + 2 - a"
        meldung: 'Fast richtig. Beim zweiten Glied wurde nur $a$ abgezogen. Es muss die ganze Klammer $(a + 1)$ abgezogen werden.'
hinweise:
  - 'Setze die Eingabe in Klammern ein: $f(-3) = 2\cdot(-3)^2 - (-3)$ und $f(a + 1) = 2(a + 1)^2 - (a + 1)$.'
loesung: |
  **Ansatz:** Die Eingabe ersetzt jedes $x$. Wir setzen sie in Klammern ein, damit kein Vorzeichen verloren geht.
  $f(-3) = 2\cdot(-3)^2 - (-3) = 2\cdot 9 + 3 = 21$.
  ---
  $f(a + 1) = 2(a + 1)^2 - (a + 1) = 2(a^2 + 2a + 1) - a - 1 = 2a^2 + 4a + 2 - a - 1 = 2a^2 + 3a + 1$.
  Probe mit $a = 0$: $f(1) = 2 - 1 = 1$, und der Term ergibt ebenfalls $1$.
```

```aufgabe
id: fu-wertemenge
titel: Wertemenge über ein Quadrat
niveau: 2
lernziel: 0
kompetenz: rechnen
angabe: |
  Gegeben ist $f\colon \R \to \R$, $f(x) = -3(x - 2)^2 + 4$.

  Die Wertemenge hat die Form $W = (-\infty, m]$. Bestimme $m$ und die Stelle $x_0$, an der $f$ den Wert $m$ annimmt.
teile:
  - typ: zahl
    label: '$m$'
    loesung: "4"
    fehler:
      - wert: "-3"
        meldung: 'Die $-3$ ist der Faktor vor der Klammer. Der größte Wert entsteht, wenn die Klammer null ist.'
      - wert: "-4"
        meldung: 'Ist die Klammer null, bleibt $f(x_0) = 0 + 4 = 4$. Das Vorzeichen der $4$ ändert sich dabei nicht.'
  - typ: zahl
    label: '$x_0$'
    loesung: "2"
    fehler:
      - wert: "-2"
        meldung: 'Die Klammer $(x - 2)$ ist null für $x = 2$, nicht für $x = -2$. Setze zur Kontrolle ein.'
hinweise:
  - 'Welches Vorzeichen hat $(x - 2)^2$? Welches Vorzeichen hat dann $-3(x - 2)^2$?'
  - 'Der Term $-3(x - 2)^2$ ist nie positiv. Wann ist er genau null?'
loesung: |
  **Ansatz:** Ein Quadrat ist nie negativ. Daraus gewinnen wir eine Schranke für $f$. Es gilt $(x - 2)^2 \ge 0$, also
  $-3(x - 2)^2 \le 0$, weil die Multiplikation mit $-3$ das Zeichen umdreht.
  ---
  Wir addieren $4$: $f(x) \le 4$. Gleichheit gilt genau dann, wenn $x - 2 = 0$ ist, also bei $x_0 = 2$.
  ---
  Jeder kleinere Wert wird auch angenommen. Für $y = 1$ etwa ist $-3(x - 2)^2 = -3$, also $x = 3$. Ergebnis: $W = (-\infty, 4]$ mit $m = 4$ und $x_0 = 2$.
gefuehrt:
  - text: 'Welches Vorzeichen kann $(x - 2)^2$ haben? Gib den kleinsten möglichen Wert dieses Quadrats ein.'
    teil: { typ: zahl, loesung: "0", fehler: [ { wert: "-2", meldung: 'Ein Quadrat ist nie negativ. Der kleinste Wert entsteht, wenn die Klammer selbst null ist.' } ] }
    erklaerung: 'Ein Quadrat ist nie negativ. Der kleinste Wert ist $0$, er tritt bei $x = 2$ auf.'
  - text: 'Was ist dann der größte mögliche Wert von $-3(x - 2)^2$?'
    teil: { typ: zahl, loesung: "0" }
    erklaerung: 'Mal $-3$ dreht die Ungleichung um: $-3(x - 2)^2 \le 0$. Der größte Wert ist $0$.'
  - text: 'Welchen größten Wert hat also $f(x) = -3(x - 2)^2 + 4$?'
    teil: { typ: zahl, loesung: "4", fehler: [ { wert: "-3", meldung: 'Der größte Wert der Klammer mit Faktor ist $0$. Dazu kommt noch $+4$.' } ] }
    erklaerung: '$0 + 4 = 4$. Also ist $m = 4$, angenommen bei $x_0 = 2$.'
  - text: Überlege, warum jeder Wert unter $4$ ebenfalls angenommen wird.
    erklaerung: 'Für $y < 4$ hat $-3(x - 2)^2 + 4 = y$ die Lösung $x = 2 + \sqrt{(4 - y)/3}$. Also ist $W = (-\infty, 4]$.'
```

```aufgabe
id: fu-graph-ablesen
titel: Werte am Graphen ablesen
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  Der Graph zeigt eine Funktion $f$ mit der Definitionsmenge $[-2, 4]$. Er besteht aus zwei Strecken: von
  $(-2 \mid -1)$ nach $(1 \mid 2)$ und von $(1 \mid 2)$ nach $(4 \mid 0)$.

  a) Lies $f(1)$ ab und berechne $f(3)$.

  b) Gib die Wertemenge als Intervall $[u, o]$ an.

  c) Für welche $x$ gilt $f(x) = 0$? Gib alle Lösungen an.
plot:
  x: [-3, 5]
  y: [-2, 3]
  gleich: true
  graphen:
    - { f: "x + 1", von: -2, bis: 1 }
    - { f: "2 - 2/3*(x - 1)", von: 1, bis: 4 }
  punkte:
    - { x: -2, y: -1 }
    - { x: 1, y: 2 }
    - { x: 4, y: 0 }
teile:
  - typ: zahl
    label: 'a) $f(1)$'
    loesung: "2"
    fehler:
      - wert: "1"
        meldung: '$f(1)$ ist der $y$-Wert des Punktes mit $x = 1$. Lies senkrecht über $x = 1$ ab.'
  - typ: zahl
    label: 'a) $f(3)$'
    loesung: "2 - 2/3*2"
    anzeige: '\tfrac23'
    fehler:
      - wert: "4/3"
        meldung: 'Der Wert $\tfrac43$ ist nur der **Abfall** von $x = 1$ bis $x = 3$. Der Funktionswert ist der Startwert $f(1) = 2$ minus dieser Abfall.'
  - typ: vektor
    label: 'b) Wertemenge $[u, o]$'
    namen: ["u", "o"]
    loesung: ["-1", "2"]
    fehler:
      - wert: ["-2", "4"]
        meldung: 'Das sind die Ränder der Definitionsmenge, also die waagrechte Ausdehnung. Die Wertemenge ist die senkrechte Ausdehnung.'
      - wert: ["0", "2"]
        meldung: 'Der Graph beginnt links bei $y = -1$. Auch negative Werte kommen also vor.'
  - typ: menge
    label: 'c) Lösungen von $f(x) = 0$'
    loesung: ["-1", "4"]
    fehler:
      - wert: ["4"]
        meldung: 'Auch die erste Strecke schneidet die $x$-Achse. Sie hat die Gleichung $y = x + 1$.'
hinweise:
  - 'Die erste Strecke hat die Gleichung $y = x + 1$. Die zweite fällt von $(1 \mid 2)$ bis $(4 \mid 0)$ gleichmäßig.'
  - 'Für die Wertemenge suche den tiefsten und den höchsten Punkt des Graphen.'
loesung: |
  **Ansatz:** Ein Funktionswert ist die $y$-Koordinate des Graphenpunktes über der Stelle $x$. Am Knickpunkt liest man $f(1) = 2$ ab.
  ---
  Die zweite Strecke fällt auf $3$ Einheiten um $2$, also pro Einheit um $\tfrac23$. Von $x = 1$ bis $x = 3$ fällt sie um
  $\tfrac43$. Also $f(3) = 2 - \tfrac43 = \tfrac23$.
  ---
  Der tiefste Punkt ist $(-2 \mid -1)$, der höchste $(1 \mid 2)$. Alle Werte dazwischen kommen vor, also $W = [-1, 2]$.
  ---
  Nullstellen: Auf der ersten Strecke ist $x + 1 = 0$ bei $x = -1$, auf der zweiten liegt $(4 \mid 0)$. Also $f(x) = 0$ für $x = -1$ und $x = 4$.
```

```aufgabe
id: fu-definitionsmenge-quadrat
titel: Wurzel aus einem quadratischen Term
niveau: 2
lernziel: 0
kompetenz: rechnen
angabe: |
  Bestimme die maximale Definitionsmenge von $h(x) = \sqrt{x^2 - 9}$.
teile:
  - typ: auswahl
    optionen:
      - '$[3, \infty)$'
      - '$[-3, 3]$'
      - '$(-\infty, -3] \cup [3, \infty)$'
      - '$\R$'
    richtig: [2]
    fehler:
      - wert: 0
        meldung: 'Auch negative Zahlen kommen in Frage. Für $x = -4$ ist $x^2 - 9 = 7 \ge 0$.'
      - wert: 1
        meldung: 'Prüfe $x = 0$: $0 - 9 = -9 < 0$. Zwischen $-3$ und $3$ ist der Radikand negativ, dort ist $h$ **nicht** definiert.'
      - wert: 3
        meldung: 'Für $x = 1$ steht $\sqrt{-8}$ da. Es gibt also Zahlen, die man nicht einsetzen darf.'
hinweise:
  - 'Bedingung: $x^2 - 9 \ge 0$, also $x^2 \ge 9$.'
  - 'Welche Zahlen haben ein Quadrat von mindestens $9$? Denk an positive **und** negative Zahlen.'
loesung: |
  **Ansatz:** Unter einer Quadratwurzel muss eine Zahl $\ge 0$ stehen. Also verlangen wir $x^2 - 9 \ge 0$, das heißt $x^2 \ge 9$.
  ---
  Ein Quadrat ist mindestens $9$, wenn der Betrag der Zahl mindestens $3$ ist: $x \ge 3$ oder $x \le -3$.
  ---
  Also $D = (-\infty, -3] \cup [3, \infty)$. Probe: $h(-5) = \sqrt{16} = 4$ ist erlaubt, $h(0) = \sqrt{-9}$ nicht.
```

```aufgabe
id: fu-rechteck-flaeche
titel: Fläche eines Rechtecks mit festem Umfang
niveau: 3
lernziel: 0
kompetenz: modellieren
angabe: |
  Ein rechteckiges Beet soll mit $20$ m Zaun eingefasst werden. Eine Seite hat die Länge $x$ (in m).

  a) Stelle den Flächeninhalt $A(x)$ (in m²) als Term in $x$ auf.

  b) Gib die sachlich sinnvolle Definitionsmenge als offenes Intervall $(u, o)$ an.

  c) Zeige mit der Umformung $A(x) = 25 - (x - 5)^2$, welche größte Fläche möglich ist.
teile:
  - typ: term
    label: 'a) $A(x)$'
    loesung: "x*(10 - x)"
    fehler:
      - wert: "x*(20 - x)"
        meldung: 'Der Umfang besteht aus **zwei** Längen und **zwei** Breiten. Länge plus Breite ergeben also nur $10$ m.'
      - wert: "x*(20 - 2*x)"
        meldung: 'Aus $2x + 2y = 20$ folgt $y = 10 - x$, nicht $20 - 2x$. Dividiere die ganze Gleichung durch $2$.'
  - typ: vektor
    label: 'b) Ränder $(u, o)$'
    namen: ["u", "o"]
    loesung: ["0", "10"]
    fehler:
      - wert: ["0", "20"]
        meldung: 'Ist $x = 20$, bleibt für die andere Seite nichts übrig. Schon ab $x = 10$ wäre die zweite Seite null oder negativ.'
  - typ: zahl
    label: 'c) größte Fläche'
    einheit: 'm²'
    loesung: "25"
    fehler:
      - wert: "100"
        meldung: 'Das wäre ein Quadrat mit Seite $10$ m. Dafür bräuchte man $40$ m Zaun.'
hinweise:
  - 'Ist die andere Seite $y$, dann gilt $2x + 2y = 20$. Löse nach $y$ auf.'
  - 'Beide Seiten müssen positiv sein. Für c): $(x - 5)^2$ ist nie negativ. Wann ist es null?'
loesung: |
  **Ansatz:** Der Zaun ist der Umfang. Mit der zweiten Seite $y$ gilt $2x + 2y = 20$, also $y = 10 - x$. Die Fläche ist Länge mal Breite: $A(x) = x\,(10 - x)$.
  ---
  Beide Seiten müssen positiv sein: $x > 0$ und $10 - x > 0$, also $x < 10$. Sachlich sinnvoll ist $D = (0, 10)$.
  ---
  Ausmultiplizieren zeigt $25 - (x - 5)^2 = 25 - x^2 + 10x - 25 = 10x - x^2 = x(10 - x)$. Die Umformung stimmt.
  ---
  Weil $(x - 5)^2 \ge 0$ ist, gilt $A(x) \le 25$, mit Gleichheit bei $x = 5$. **Antwort:** Die größte Fläche ist $25$ m², und zwar beim Quadrat mit $5$ m Seitenlänge.
```

## Eigenschaften von Funktionen

```aufgabe
id: fu-eig-check-quadrat
titel: Bleibt die Reihenfolge beim Quadrieren?
niveau: 1
art: check
angabe: |
  Es gilt $-3 < 2$. Gilt dann auch $(-3)^2 < 2^2$?
  Herkunft: [1.14 Ungleichungen und ihre Rechenregeln](/lernen/mathe3/zahlen/ungleichungen-und-ihre-rechenregeln).
teile:
  - typ: auswahl
    optionen:
      - 'Ja, Quadrieren erhält immer die Reihenfolge.'
      - 'Nein, denn $(-3)^2 = 9$ ist größer als $2^2 = 4$.'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Rechne nach: $(-3)^2 = 9$ und $2^2 = 4$. Hier dreht sich die Reihenfolge um. Sicher erhalten bleibt sie nur, wenn beide Zahlen $\ge 0$ sind.'
hinweise:
  - 'Rechne beide Quadrate aus und vergleiche.'
loesung: |
  $(-3)^2 = 9$ und $2^2 = 4$. Also ist $(-3)^2 > 2^2$, obwohl $-3 < 2$ ist.
  ---
  Quadrieren erhält die Reihenfolge sicher, wenn beide Zahlen $\ge 0$ sind. Bei negativen Zahlen kann sie sich umdrehen. Genau deshalb ist $x^2$ auf ganz $\R$ nicht steigend, auf $[0, \infty)$ aber schon. Das untersuchen wir in dieser Lektion.
```

Bevor wir einzelne Funktionstypen besprechen, brauchen wir das Vokabular, mit dem man Funktionen beschreibt: Wo ist
die Funktion null? Wo steigt sie, wo fällt sie? Ist ihr Graph symmetrisch? Wird sie beliebig groß? Diese Begriffe
kommen in der mündlichen Prüfung oft als Definitionsfragen. Bei jeder Definition lernst du deshalb auch, wie man sie
nachweist und wie ein Gegenbeispiel aussieht.

### Nullstellen und Schnitt mit der y-Achse

:::definition[Nullstelle]
Eine Stelle $x_0 \in D$ mit $f(x_0) = 0$ heißt **Nullstelle** von $f$. Am Graphen ist das die Stelle, an der der
Graph die $x$-Achse trifft, im Punkt $(x_0 \mid 0)$.
:::

Man findet Nullstellen, indem man die Gleichung $f(x) = 0$ löst. Der Schnittpunkt mit der $y$-Achse ist
$(0 \mid f(0))$, sofern $0$ in der Definitionsmenge liegt. Eine Funktion hat **höchstens einen** Schnittpunkt mit der
$y$-Achse. Der Grund: Zur Eingabe $0$ gibt es höchstens einen Funktionswert. Nullstellen kann es dagegen viele geben.

:::beispiel[Nullstellen und y-Achsenabschnitt]
$f(x) = x^2 - x - 6$.

1. Nullstellen: Wir lösen $x^2 - x - 6 = 0$. Die Zerlegung $(x - 3)(x + 2) = 0$ zeigt: $x = 3$ oder $x = -2$.
2. Schnitt mit der $y$-Achse: $f(0) = -6$, also der Punkt $(0 \mid -6)$.

**Nichtbeispiel:** $g(x) = x^2 + 1$ hat **keine** Nullstelle. Denn $x^2 \ge 0$, also ist $g(x) \ge 1$ für jedes $x$.
Der Graph liegt ganz über der $x$-Achse.
:::

:::achtung[Nullstelle ist eine Zahl, kein Punkt]
Bei $f(x) = x^2 - x - 6$ schreibt man oft „Nullstelle $(0 \mid -6)$“. Das ist doppelt falsch. Erstens ist $(0 \mid -6)$
der Schnittpunkt mit der **$y$-Achse**. Zweitens ist eine Nullstelle eine **Zahl** auf der $x$-Achse.
**Richtig:** Die Nullstellen sind $x = 3$ und $x = -2$. Die zugehörigen Punkte heißen Schnittpunkte mit der
$x$-Achse: $(3 \mid 0)$ und $(-2 \mid 0)$.
:::

### Monotonie: steigen und fallen

Das Wort **monoton** kommt aus dem Griechischen und heißt hier „immer in dieselbe Richtung“. Eine Funktion heißt
monoton steigend, wenn sie beim Weitergehen nach rechts **nie kleiner** wird.

:::definition[Monotonie]
Eine Funktion $f$ heißt auf einem Intervall $I$ (das in $D$ liegt)

- **streng monoton steigend**, wenn für alle $x_1, x_2 \in I$ mit $x_1 < x_2$ gilt: $f(x_1) < f(x_2)$.
- **monoton steigend**, wenn für alle $x_1 < x_2$ in $I$ gilt: $f(x_1) \le f(x_2)$.
- **streng monoton fallend**, wenn für alle $x_1 < x_2$ in $I$ gilt: $f(x_1) > f(x_2)$.
- **monoton fallend**, wenn für alle $x_1 < x_2$ in $I$ gilt: $f(x_1) \ge f(x_2)$.
:::

In Worten: Bei einer streng monoton steigenden Funktion gehört zu einer größeren Eingabe immer eine größere Ausgabe.
Der Graph geht von links nach rechts gelesen bergauf. „Streng“ heißt: Er bleibt nie waagrecht. Ohne „streng“ darf er
stellenweise waagrecht verlaufen, aber nie fallen.

Die Definition liefert direkt ein Beweisverfahren. Man nimmt zwei **beliebige** Stellen $x_1 < x_2$ und untersucht
das Vorzeichen der Differenz $f(x_2) - f(x_1)$. Ist sie immer positiv, steigt $f$ streng. Ist sie immer negativ,
fällt $f$ streng.

:::beispiel[Monotonie mit der Definition nachweisen]
**Behauptung:** $f(x) = x^2$ ist auf $[0, \infty)$ streng monoton steigend.

1. Wir nehmen zwei beliebige Stellen mit $0 \le x_1 < x_2$.
2. Wir bilden die Differenz und zerlegen sie mit der dritten binomischen Formel:
   $$f(x_2) - f(x_1) = x_2^2 - x_1^2 = (x_2 - x_1)(x_2 + x_1).$$
3. Der erste Faktor ist positiv, weil $x_1 < x_2$ ist.
4. Der zweite Faktor ist positiv, weil $x_2 > x_1 \ge 0$ ist. Also ist $x_2 > 0$ und damit auch $x_2 + x_1 > 0$.
5. Ein Produkt zweier positiver Zahlen ist positiv. Also ist $f(x_2) > f(x_1)$.

**Gegenbeispiel:** Auf $(-\infty, 0]$ ist der zweite Faktor negativ, dort fällt $x^2$ streng. Auf ganz $\R$ ist $x^2$
**weder** steigend **noch** fallend: Es ist $-3 < 2$, aber $f(-3) = 9 > 4 = f(2)$.
:::

:::achtung[Zwei Punkte beweisen keine Monotonie]
Eine typische Fehlrechnung: „$f(x) = x^2 - 4x$ ist auf $[0, 5]$ steigend, denn $f(0) = 0 < 5 = f(5)$.“ Die Definition
verlangt aber $f(x_1) < f(x_2)$ für **alle** Paare $x_1 < x_2$, nicht nur für die Randpunkte. Schon $f(2) = -4$ zeigt
den Fehler: Es ist $0 < 2$, aber $f(0) = 0 > -4 = f(2)$. **Richtig:** $f$ fällt auf $[0, 2]$ und steigt auf $[2, 5]$.
Zwei Werte können Monotonie **widerlegen**, aber nie beweisen.
:::

```aufgabe
id: fu-eig-check-gegenbeispiel
titel: Was zeigen zwei Funktionswerte?
niveau: 1
art: check
angabe: |
  Von einer Funktion $f$ mit $D = [0, 4]$ weißt du nur: $f(1) = 3$ und $f(2) = 1$. Was folgt daraus sicher?
teile:
  - typ: auswahl
    optionen:
      - '$f$ ist auf $[0, 4]$ nicht monoton steigend.'
      - '$f$ ist auf $[0, 4]$ monoton fallend.'
      - 'Über die Monotonie folgt gar nichts.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Zwei Werte können Monotonie nicht beweisen. Zwischen $2$ und $4$ könnte $f$ wieder steigen.'
      - wert: 2
        meldung: 'Doch: Es ist $1 < 2$, aber $f(1) > f(2)$. Das ist ein Gegenbeispiel zur Aussage „$f$ steigt“.'
hinweise:
  - 'Vergleiche mit der Definition: Für „steigend“ müsste aus $1 < 2$ folgen, dass $f(1) \le f(2)$ ist.'
loesung: |
  Die Werte bilden ein Gegenbeispiel: $1 < 2$, aber $f(1) = 3 > 1 = f(2)$. Also ist $f$ auf $[0, 4]$ nicht monoton steigend.
  ---
  Dass $f$ fällt, folgt nicht. Dazu müsste man **alle** Paare kennen. Zwei Werte können Monotonie widerlegen, aber nie beweisen.
```

:::tipp
Mit der Differentialrechnung geht es meist schneller: Die Ableitung $f'(x)$ gibt die Steigung des
Graphen an der Stelle $x$ an. Ist $f'(x) > 0$ auf einem Intervall, so steigt $f$ dort streng. Das lernst du in [9.11 Monotonie und Extremstellen](/lernen/mathe3/differentialrechnung/monotonie-und-extremstellen).
Die Definition bleibt die Grundlage, und in der mündlichen Prüfung wird sie gefragt. Bei Folgen zeigt man Monotonie
genauso über die Differenz $a_{n+1} - a_n$, siehe
[11.10 Monotonie und Beschränktheit beweisen](/lernen/mathe3/grenzwerte-folgen/monotonie-und-beschraenktheit-beweisen).
:::

### Symmetrie: gerade und ungerade Funktionen

Manche Graphen sehen links und rechts der $y$-Achse gleich aus, wie ein Spiegelbild. Andere sehen gleich aus, wenn man
sie um den Ursprung um eine halbe Drehung dreht. Beides lässt sich am Term prüfen.

:::definition[Gerade und ungerade Funktionen]
Die Definitionsmenge $D$ sei symmetrisch zu $0$: Mit $x$ liegt auch $-x$ in $D$.

- $f$ heißt **gerade**, wenn $f(-x) = f(x)$ für alle $x \in D$ gilt. Der Graph ist dann **achsensymmetrisch zur
  $y$-Achse**.
- $f$ heißt **ungerade**, wenn $f(-x) = -f(x)$ für alle $x \in D$ gilt. Der Graph ist dann **punktsymmetrisch zum
  Ursprung**.
:::

Die Namen kommen von den Potenzfunktionen. $x^2$, $x^4$ und $x^6$ sind gerade, denn $(-x)^2 = x^2$. Dagegen sind
$x$, $x^3$ und $x^5$ ungerade, denn $(-x)^3 = -x^3$. Ein Polynom, in dem nur gerade Hochzahlen vorkommen, ist gerade.
Eine Konstante zählt dabei als $x^0$, also als gerade Hochzahl. Ein Polynom mit nur ungeraden Hochzahlen ist ungerade.

:::beispiel[Symmetrie am Term prüfen]
**Gerade:** $f(x) = x^4 - 4x^2 + 1$. Wir setzen $(-x)$ ein: $f(-x) = (-x)^4 - 4(-x)^2 + 1 = x^4 - 4x^2 + 1 = f(x)$.

**Ungerade:** $g(x) = x^3 - 3x$. Es ist $g(-x) = (-x)^3 - 3(-x) = -x^3 + 3x = -(x^3 - 3x) = -g(x)$.

**Weder noch:** $h(x) = x^2 + x$. Es ist $h(-x) = x^2 - x$. Das ist weder $h(x)$ noch $-h(x)$. Zum Widerlegen genügt
eine Stelle: $h(1) = 2$, aber $h(-1) = 0$. Wäre $h$ gerade, müsste $h(-1) = 2$ sein. Wäre $h$ ungerade, müsste
$h(-1) = -2$ sein.
:::

```plot
x: [-2.6, 2.6]
y: [-4, 5]
graphen:
  - { f: "x^4 - 4*x^2 + 1", label: "gerade: x⁴ − 4x² + 1", farbe: 0 }
  - { f: "x^3 - 3*x", label: "ungerade: x³ − 3x", farbe: 1 }
beschriftung: Die gerade Funktion (blau) ist spiegelsymmetrisch zur y-Achse. Die ungerade Funktion (orange) geht durch den Ursprung und sieht nach einer halben Drehung um den Ursprung wieder gleich aus.
```

:::achtung[Nicht gerade heißt nicht ungerade]
Eine typische Fehlschlussfolgerung bei $h(x) = x^2 + x$: „$h(-1) \ne h(1)$, also ist $h$ ungerade.“ Das ist falsch. Es
gibt drei Möglichkeiten: gerade, ungerade oder **keines von beiden**. Die meisten Funktionen sind keines von beiden.
Hier ist $h(-1) = 0$, und $-h(1) = -2$. Also ist $h$ auch nicht ungerade. Ein zweiter häufiger Fehler ist das
Einsetzen ohne Klammern: Aus $x^3$ wird $(-x)^3 = -x^3$, nicht $+x^3$.
:::

:::merke[Symmetrie prüfen]
1. $f(-x)$ ausrechnen: Jedes $x$ durch $(-x)$ ersetzen, mit Klammern.
2. Vergleichen: Ergibt sich $f(x)$, ist $f$ gerade. Ergibt sich $-f(x)$, ist $f$ ungerade.
3. Sonst an einer konkreten Stelle zeigen, dass beides nicht gilt.
:::

Symmetrie spart Arbeit. Bei einer geraden Funktion passiert links der $y$-Achse dasselbe wie rechts, nur gespiegelt.
Kennt man die Nullstelle $2$, kennt man auch die Nullstelle $-2$.

### Beschränktheit und Extremstellen

:::definition[Beschränktheit]
$f$ heißt **nach oben beschränkt**, wenn es eine Zahl $S$ gibt mit $f(x) \le S$ für alle $x \in D$. Die Zahl $S$
heißt **obere Schranke**. Entsprechend heißt $f$ **nach unten beschränkt**, wenn es eine Zahl $s$ gibt mit
$f(x) \ge s$ für alle $x \in D$. **Beschränkt** heißt: nach oben und nach unten beschränkt.
:::

:::beispiel[Beschränkt oder nicht]
- $f(x) = x^2$ ist nach unten beschränkt, zum Beispiel durch $0$. Nach oben ist sie nicht beschränkt: Für jede Zahl
  $S > 0$ ist $f(S + 1) = (S + 1)^2 > S$.
- $g(x) = \dfrac{1}{1 + x^2}$ ist beschränkt. Der Nenner ist mindestens $1$, also gilt $0 < g(x) \le 1$.
- $e^x$ ist nach unten durch $0$ beschränkt, aber der Wert $0$ wird **nie** erreicht. Eine Schranke muss also kein
  Funktionswert sein.
:::

:::definition[Globale und lokale Extremstellen]
$x_0 \in D$ heißt **globale Maximumstelle**, wenn $f(x) \le f(x_0)$ für **alle** $x \in D$ gilt. $x_0$ heißt
**lokale Maximumstelle**, wenn das nur für alle $x$ in einer kleinen Umgebung von $x_0$ gilt, also für alle $x$, die
nahe genug bei $x_0$ liegen. Für Minimumstellen
dreht man das Zeichen um. Der Punkt $(x_0 \mid f(x_0))$ heißt **Hochpunkt** beziehungsweise **Tiefpunkt**.
:::

Ein Beispiel liefert die gerade Funktion $x^4 - 4x^2 + 1$ aus dem Plot: Bei $x = 0$ liegt ein lokales Maximum mit
dem Wert $1$. Es ist nicht global, denn für große $x$ wird die Funktion beliebig groß. Extremstellen berechnet man in
[9.11 Monotonie und Extremstellen](/lernen/mathe3/differentialrechnung/monotonie-und-extremstellen) mit der Ableitung. In diesem Kapitel lesen wir sie aus Umformungen
ab, etwa aus der Scheitelform einer Parabel.

### Periodizität

Eine Funktion heißt **periodisch** mit der Periode $p > 0$, wenn $f(x + p) = f(x)$ für alle $x$ gilt. Der Graph
wiederholt sich dann nach jeweils $p$ Einheiten. Das wichtigste Beispiel sind die Winkelfunktionen mit der Periode
$2\pi$, siehe [5.9 Die Graphen der Winkelfunktionen](/lernen/mathe3/trigonometrie/die-graphen-der-winkelfunktionen). Ein Nichtbeispiel ist $x^2$: Es gibt keine Zahl $p > 0$ mit
$(x + p)^2 = x^2$ für alle $x$, denn für $x = 0$ müsste $p^2 = 0$ sein.

```reflexion
frage: Ein Mitschüler sagt „Eine ungerade Funktion geht immer durch den Ursprung.“ Stimmt das? Begründe mit der Definition und überlege, was passiert, wenn 0 nicht in der Definitionsmenge liegt.
antwort: |
  Liegt $0$ in der Definitionsmenge, dann stimmt es. Setzt man $x = 0$ in $f(-x) = -f(x)$ ein, erhält man
  $f(0) = -f(0)$. Addiert man $f(0)$ auf beiden Seiten, folgt $2f(0) = 0$, also $f(0) = 0$. Der Graph geht dann durch
  $(0 \mid 0)$.

  Liegt $0$ nicht in der Definitionsmenge, gilt die Aussage nicht. Ein Beispiel ist $f(x) = \tfrac1x$. Sie ist ungerade,
  denn $\tfrac{1}{-x} = -\tfrac1x$. Aber an der Stelle $0$ ist sie gar nicht definiert. Die richtige Aussage lautet also:
  Eine ungerade Funktion, die an der Stelle $0$ definiert ist, hat dort den Wert $0$.
```

```aufgabe
id: fu-nullstellen-achse
titel: Nullstellen und y-Achsenabschnitt
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Gegeben ist $f(x) = (x + 2)(x - 5)$. Bestimme alle Nullstellen und den Funktionswert $f(0)$.
teile:
  - typ: menge
    label: 'Nullstellen'
    loesung: ["-2", "5"]
    fehler:
      - wert: ["2", "-5"]
        meldung: 'Der Faktor $(x + 2)$ ist null für $x = -2$, nicht für $x = 2$. Setze zur Kontrolle ein.'
      - wert: ["-10"]
        meldung: '$-10$ ist $f(0)$, also der $y$-Achsenabschnitt. Nullstellen sind die $x$-Werte mit $f(x) = 0$.'
  - typ: zahl
    label: '$f(0)$'
    loesung: "(0 + 2)*(0 - 5)"
    anzeige: '-10'
    fehler:
      - wert: "10"
        meldung: 'Vorzeichen prüfen: $2\cdot(-5) = -10$.'
      - wert: "-3"
        meldung: 'Die Klammern werden **multipliziert**, nicht addiert: $f(0) = 2\cdot(-5)$.'
hinweise:
  - 'Ein Produkt ist null, wenn einer der Faktoren null ist.'
loesung: |
  **Ansatz:** Nach dem Nullproduktsatz ist ein Produkt genau dann null, wenn ein Faktor null ist. Also $x + 2 = 0$ oder $x - 5 = 0$, das heißt $x = -2$ oder $x = 5$.
  ---
  $f(0) = (0 + 2)(0 - 5) = 2\cdot(-5) = -10$. Der Graph schneidet die $y$-Achse im Punkt $(0 \mid -10)$.
```

```aufgabe
id: fu-symmetrie
titel: Symmetrie erkennen
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Welche der folgenden Funktionen sind **gerade**?
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$f_1(x) = x^4 - 5x^2 + 2$'
      - '$f_2(x) = x^3 - 4x$'
      - '$f_3(x) = (x + 2)^2$'
      - '$f_4(x) = |x| + x^2$'
      - '$f_5(x) = \dfrac{x}{x^2 + 1}$'
    richtig: [0, 3]
    fehler:
      - wert: [0, 2, 3]
        meldung: |
          $(x + 2)^2$ ist eine verschobene Normalparabel mit Scheitel bei $x = -2$. Prüfe: $f_3(2) = 16$, aber $f_3(-2) = 0$.
      - wert: [0, 3, 4]
        meldung: |
          Bei $f_5$ ist $f_5(-x) = \tfrac{-x}{x^2 + 1} = -f_5(x)$. Das ist ungerade, nicht gerade. Der Nenner ist gerade, der Zähler nicht.
      - wert: [0, 1, 3]
        meldung: '$f_2(-x) = -x^3 + 4x = -f_2(x)$. Nur ungerade Hochzahlen: Das ist eine ungerade Funktion.'
      - wert: [0]
        meldung: 'Auch $f_4$ ist gerade: $|-x| = |x|$ und $(-x)^2 = x^2$.'
hinweise:
  - 'Setze $-x$ ein und vergleiche mit $f(x)$. Es gilt $|-x| = |x|$ und $(-x)^2 = x^2$.'
loesung: |
  **Ansatz:** Für jede Funktion $f(-x)$ bilden und mit $f(x)$ vergleichen.
  $f_1(-x) = x^4 - 5x^2 + 2 = f_1(x)$: gerade. $f_2(-x) = -x^3 + 4x = -f_2(x)$: ungerade.
  ---
  $f_3(2) = 16$, aber $f_3(-2) = 0$: weder gerade noch ungerade. $f_4(-x) = |x| + x^2 = f_4(x)$: gerade.
  $f_5(-x) = \tfrac{-x}{x^2 + 1} = -f_5(x)$: ungerade. Gerade sind also genau $f_1$ und $f_4$.
```

```aufgabe
id: fu-symmetrie-pruefen
titel: Symmetrie mit Rechnung entscheiden
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Entscheide für jede Funktion, ob sie gerade, ungerade oder keines von beiden ist.

  a) $f(x) = 2x^5 - x^3$ b) $g(x) = x^3 + 1$ c) $h(x) = \dfrac{x^2 - 1}{x^2 + 4}$
teile:
  - typ: auswahl
    label: 'a) $f$'
    optionen: ['gerade', 'ungerade', 'keines von beiden']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Rechne $f(-x) = 2(-x)^5 - (-x)^3 = -2x^5 + x^3$. Das ist $-f(x)$, nicht $f(x)$.'
      - wert: 2
        meldung: 'Alle Hochzahlen sind ungerade. Prüfe $f(-x)$ mit Klammern.'
  - typ: auswahl
    label: 'b) $g$'
    optionen: ['gerade', 'ungerade', 'keines von beiden']
    richtig: [2]
    fehler:
      - wert: 1
        meldung: 'Die Konstante $1$ zählt als gerade Hochzahl $x^0$. Prüfe: $g(-1) = 0$, aber $-g(1) = -2$.'
      - wert: 0
        meldung: 'Prüfe: $g(1) = 2$, aber $g(-1) = 0$.'
  - typ: auswahl
    label: 'c) $h$'
    optionen: ['gerade', 'ungerade', 'keines von beiden']
    richtig: [0]
    fehler:
      - wert: 2
        meldung: 'Zähler und Nenner enthalten nur gerade Hochzahlen. Setze $-x$ ein und vergleiche.'
      - wert: 1
        meldung: '$h(-x) = \tfrac{(-x)^2 - 1}{(-x)^2 + 4} = h(x)$. Das Vorzeichen ändert sich nicht.'
hinweise:
  - 'Bilde jeweils $f(-x)$ mit Klammern um $-x$.'
  - 'Bei b) prüfe eine konkrete Stelle, zum Beispiel $x = 1$ und $x = -1$.'
loesung: |
  **Ansatz:** Für jede Funktion $f(-x)$ ausrechnen und mit $f(x)$ und $-f(x)$ vergleichen.
  ---
  a) $f(-x) = 2(-x)^5 - (-x)^3 = -2x^5 + x^3 = -(2x^5 - x^3) = -f(x)$: ungerade.
  ---
  b) $g(1) = 2$ und $g(-1) = -1 + 1 = 0$. Es ist $g(-1) \ne g(1)$ und $g(-1) \ne -g(1) = -2$: keines von beiden.
  ---
  c) $h(-x) = \tfrac{x^2 - 1}{x^2 + 4} = h(x)$: gerade. Kontrolle: $h(2) = \tfrac38 = h(-2)$.
gefuehrt:
  - text: 'Setze bei a) $-x$ ein. Was ist $(-x)^5$?'
    teil: { typ: term, loesung: "-x^5", fehler: [ { wert: "x^5", meldung: 'Eine ungerade Anzahl von Minuszeichen ergibt minus: $(-x)^5 = -x^5$.' } ] }
    erklaerung: 'Bei einer ungeraden Hochzahl bleibt das Minus erhalten: $(-x)^5 = -x^5$.'
  - text: 'Gib $f(-x) = 2(-x)^5 - (-x)^3$ ausgerechnet an.'
    teil: { typ: term, loesung: "-2x^5 + x^3" }
    erklaerung: '$2\cdot(-x^5) - (-x^3) = -2x^5 + x^3$.'
  - text: 'Vergleiche mit $f(x) = 2x^5 - x^3$. Gilt $f(-x) = f(x)$ oder $f(-x) = -f(x)$?'
    erklaerung: '$-2x^5 + x^3 = -(2x^5 - x^3) = -f(x)$. Also ist $f$ ungerade.'
  - text: 'Prüfe bei b) die Stellen $1$ und $-1$: Gib $g(-1)$ an.'
    teil: { typ: zahl, loesung: "0" }
    erklaerung: '$g(1) = 2$ und $g(-1) = 0$. Weder $g(-1) = g(1)$ noch $g(-1) = -g(1)$. Also keines von beiden.'
```

```aufgabe
id: fu-monotonie-beweis
titel: Monotonie mit der Definition
niveau: 2
lernziel: 1
kompetenz: begruenden
angabe: |
  Zeige mit der Definition der Monotonie:

  a) $f(x) = 2 - 4x$ ist auf $\R$ streng monoton fallend.

  b) $g(x) = \dfrac{1}{x + 1}$ ist auf $(-1, \infty)$ streng monoton fallend.
teile:
  - typ: text
    muster: |
      a) Seien $x_1 < x_2$. Dann ist $f(x_2) - f(x_1) = (2 - 4x_2) - (2 - 4x_1) = -4(x_2 - x_1)$. Wegen $x_2 - x_1 > 0$
      ist das negativ, also $f(x_2) < f(x_1)$.

      b) Seien $-1 < x_1 < x_2$. Dann ist $g(x_2) - g(x_1) = \tfrac{1}{x_2 + 1} - \tfrac{1}{x_1 + 1} = \tfrac{x_1 - x_2}{(x_1 + 1)(x_2 + 1)}$.
      Der Zähler ist negativ. Beide Faktoren im Nenner sind positiv, weil $x_1 > -1$ und $x_2 > -1$ ist. Also ist die
      Differenz negativ und $g(x_2) < g(x_1)$.
hinweise:
  - 'Nimm zwei beliebige Stellen $x_1 < x_2$ und bestimme das Vorzeichen von $f(x_2) - f(x_1)$.'
  - 'Bei b) auf einen gemeinsamen Nenner bringen: $\tfrac{1}{x_2 + 1} - \tfrac{1}{x_1 + 1} = \tfrac{(x_1 + 1) - (x_2 + 1)}{(x_1 + 1)(x_2 + 1)}$.'
loesung: |
  **Ansatz:** Laut Definition müssen wir für **beliebige** $x_1 < x_2$ zeigen, dass $f(x_2) - f(x_1) < 0$ ist.
  ---
  a) $f(x_2) - f(x_1) = 2 - 4x_2 - 2 + 4x_1 = -4(x_2 - x_1)$. Der Faktor $x_2 - x_1$ ist positiv, mal $-4$ wird es negativ. Also fällt $f$ streng.
  ---
  b) Für $-1 < x_1 < x_2$ ist $g(x_2) - g(x_1) = \tfrac{x_1 - x_2}{(x_1 + 1)(x_2 + 1)}$. Der Zähler ist negativ, der Nenner ist positiv.
  ---
  Der Quotient ist also negativ, und $g$ fällt streng. **Bemerkung:** Auf $\R\setminus\{-1\}$ wäre die Aussage falsch.
  Es ist $-2 < 0$, aber $g(-2) = -1 < 1 = g(0)$. Darum gibt man Monotonie immer zusammen mit einem Intervall an.
```

```aufgabe
id: fu-monotonie-fehler
titel: Wo ist der Fehler im Monotonie-Argument?
niveau: 2
lernziel: 1
kompetenz: begruenden
angabe: |
  Eine Mitschülerin schreibt: „$f(x) = x^2 - 6x + 10$ ist auf $[0, 7]$ streng monoton steigend, denn
  $f(0) = 10 < 17 = f(7)$.“

  a) Berechne $f(3)$.

  b) Welche Aussage über die Monotonie ist richtig?
teile:
  - typ: zahl
    label: 'a) $f(3)$'
    loesung: "3^2 - 6*3 + 10"
    anzeige: '1'
    fehler:
      - wert: "37"
        meldung: 'Vorzeichen prüfen: $-6\cdot 3 = -18$, also $9 - 18 + 10 = 1$.'
  - typ: auswahl
    label: 'b)'
    optionen:
      - '$f$ steigt auf $[0, 7]$, weil der rechte Randwert größer ist.'
      - '$f$ fällt auf $[0, 3]$ und steigt auf $[3, 7]$.'
      - '$f$ fällt auf ganz $[0, 7]$.'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Zwei Werte beweisen keine Monotonie. Es ist $0 < 3$, aber $f(0) = 10 > 1 = f(3)$.'
      - wert: 2
        meldung: 'Es ist $3 < 7$ und $f(3) = 1 < 17 = f(7)$. Rechts von $3$ steigt $f$ also.'
hinweise:
  - 'Setze $x = 3$ ein und vergleiche mit $f(0)$.'
  - 'Schreibe $f(x) = (x - 3)^2 + 1$. Wo liegt der tiefste Punkt?'
loesung: |
  **Ansatz:** Für Monotonie müsste $f(x_1) < f(x_2)$ für **alle** $x_1 < x_2$ gelten. Ein einziges Gegenbeispiel widerlegt die Behauptung.
  ---
  a) $f(3) = 9 - 18 + 10 = 1$. Es ist $0 < 3$, aber $f(0) = 10 > 1 = f(3)$. Also steigt $f$ auf $[0, 7]$ **nicht**.
  ---
  b) Quadratisches Ergänzen: $f(x) = (x - 3)^2 + 1$. Der tiefste Punkt liegt bei $x = 3$.
  ---
  Links davon fällt $f$, rechts davon steigt $f$. Der Fehler der Mitschülerin: Sie hat nur die Randwerte verglichen.
```

```aufgabe
id: fu-beschraenkt
titel: Beschränkt oder nicht?
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: |
  Beurteile jede Aussage. Die Definitionsmenge ist jeweils die größtmögliche.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '$f(x) = 3 - x^2$ ist nach oben beschränkt.'
        richtig: true
        erklaerung: 'Wegen $x^2 \ge 0$ ist $3 - x^2 \le 3$. Die Zahl $3$ ist eine obere Schranke.'
      - text: '$f(x) = 3 - x^2$ ist nach unten beschränkt.'
        richtig: false
        erklaerung: 'Für große $x$ wird $3 - x^2$ beliebig stark negativ, etwa $f(100) = -9997$.'
      - text: '$g(x) = \dfrac{4}{x^2 + 2}$ ist beschränkt.'
        richtig: true
        erklaerung: 'Der Nenner ist mindestens $2$, also gilt $0 < g(x) \le 2$.'
      - text: '$h(x) = 2^x$ hat den kleinsten Funktionswert $0$.'
        richtig: false
        erklaerung: '$2^x$ ist immer positiv. Die Zahl $0$ ist eine untere Schranke, wird aber nie erreicht. Einen kleinsten Wert gibt es nicht.'
    fehler:
      - wert: [r, r, r, f]
        meldung: 'Prüfe die zweite Aussage mit einer großen Zahl, zum Beispiel $x = 100$.'
      - wert: [r, f, r, r]
        meldung: 'Gibt es ein $x$ mit $2^x = 0$? Eine Schranke muss nicht angenommen werden.'
hinweise:
  - 'Suche für jede Funktion eine Zahl, die nie überschritten oder nie unterschritten wird.'
  - 'Teste mit großen Werten wie $x = 100$ oder $x = -100$.'
loesung: |
  **Ansatz:** Eine Schranke ist eine Zahl, die von keinem Funktionswert überschritten (oben) oder unterschritten (unten) wird.
  ---
  $3 - x^2 \le 3$, weil $x^2 \ge 0$ ist. Nach unten gibt es keine Schranke, denn $3 - x^2$ wird für große $x$ beliebig negativ.
  ---
  $\tfrac{4}{x^2 + 2}$ ist positiv und höchstens $\tfrac42 = 2$. Also ist $g$ beschränkt.
  ---
  $2^x > 0$ für alle $x$, und für $x \to -\infty$ kommt $2^x$ der $0$ beliebig nahe. Den Wert $0$ erreicht die Funktion aber nie. Es gibt also keinen kleinsten Funktionswert.
```

```aufgabe
id: fu-eigenschaften-untersuchen
titel: Eine Funktion vollständig beschreiben
niveau: 3
lernziel: 1
kompetenz: begruenden
angabe: |
  Gegeben ist $f(x) = \dfrac{x}{x^2 + 4}$ mit $D = \R$.

  a) Ist $f$ gerade, ungerade oder keines von beiden?

  b) Zeige mit der Ungleichung $(x - 2)^2 \ge 0$, dass $f(x) \le \tfrac14$ für alle $x \ge 0$ gilt. Bei welchem $x$ gilt Gleichheit?

  c) Nutze a) und b): Welches ist der kleinste Funktionswert von $f$?
teile:
  - typ: auswahl
    label: 'a)'
    optionen: ['gerade', 'ungerade', 'keines von beiden']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Der Nenner ist gerade, der Zähler ungerade. Rechne $f(-x) = \tfrac{-x}{x^2 + 4}$.'
  - typ: zahl
    label: 'b) Gleichheit bei $x =$'
    loesung: "2"
    fehler:
      - wert: "4"
        meldung: 'Setze ein: $f(4) = \tfrac{4}{20} = \tfrac15 < \tfrac14$. Gleichheit gilt, wenn $(x - 2)^2 = 0$ ist.'
  - typ: zahl
    label: 'c) kleinster Funktionswert'
    loesung: "-1/4"
    anzeige: '-\tfrac14'
    fehler:
      - wert: "0"
        meldung: 'Für negative $x$ ist $f(x)$ negativ, etwa $f(-2) = -\tfrac14$. Nutze die Punktsymmetrie.'
      - wert: "1/4"
        meldung: '$\tfrac14$ ist der größte Wert. Wegen der Punktsymmetrie gehört zu ihm ein kleinster Wert mit umgekehrtem Vorzeichen.'
  - typ: text
    label: 'b) Begründung'
    muster: |
      Aus $(x - 2)^2 \ge 0$ folgt $x^2 - 4x + 4 \ge 0$, also $x^2 + 4 \ge 4x$. Für $x \ge 0$ dürfen wir durch die positive
      Zahl $4(x^2 + 4)$ dividieren und erhalten $\tfrac{x}{x^2 + 4} \le \tfrac14$. Gleichheit gilt genau bei $(x - 2)^2 = 0$, also bei $x = 2$.
hinweise:
  - 'Für a) $f(-x)$ bilden. Für b) $(x - 2)^2$ ausmultiplizieren und $4x$ auf die andere Seite bringen.'
  - 'Für c): Eine ungerade Funktion hat bei $-x$ den Wert $-f(x)$. Was wird aus dem größten Wert?'
loesung: |
  **Ansatz:** Symmetrie über $f(-x)$, die Schranke über ein Quadrat, das nie negativ ist.
  a) $f(-x) = \tfrac{-x}{(-x)^2 + 4} = -\tfrac{x}{x^2 + 4} = -f(x)$. Also ist $f$ ungerade.
  ---
  b) $(x - 2)^2 \ge 0$ heißt $x^2 - 4x + 4 \ge 0$, also $x^2 + 4 \ge 4x$. Für $x \ge 0$ teilen wir durch $4(x^2 + 4) > 0$: $\tfrac{x}{x^2 + 4} \le \tfrac14$.
  ---
  Gleichheit gilt genau bei $(x - 2)^2 = 0$, also bei $x = 2$. Probe: $f(2) = \tfrac{2}{8} = \tfrac14$.
  ---
  c) Für $x < 0$ ist $f(x) = -f(-x)$ und $-x > 0$. Also ist $f(x) \ge -\tfrac14$ mit Gleichheit bei $x = -2$. Für $x \ge 0$ ist $f(x) \ge 0$.
  **Antwort:** Der kleinste Funktionswert ist $-\tfrac14$, angenommen bei $x = -2$. Damit ist $f$ beschränkt mit $-\tfrac14 \le f(x) \le \tfrac14$.
```

## Lineare Funktionen

```aufgabe
id: fu-lin-check-gleichung
titel: Eine lineare Gleichung nach d lösen
niveau: 1
art: check
angabe: |
  Löse die Gleichung $2 = -3\cdot 4 + d$ nach $d$.
  Herkunft: [2.2 Lineare Gleichungen](/lernen/mathe3/gleichungen/lineare-gleichungen).
teile:
  - typ: zahl
    label: '$d$'
    loesung: "2 + 3*4"
    anzeige: '14'
    fehler:
      - wert: "-10"
        meldung: 'Rechts steht $-12 + d$. Um $d$ allein zu bekommen, addierst du $12$ auf beiden Seiten: $2 + 12$.'
      - wert: "10"
        meldung: 'Prüfe: $-12 + 10 = -2$, nicht $2$. Addiere $12$ auf beiden Seiten.'
hinweise:
  - 'Rechne zuerst $-3\cdot 4 = -12$ aus und addiere dann $12$ auf beiden Seiten.'
loesung: |
  Zuerst das Produkt: $-3\cdot 4 = -12$. Die Gleichung lautet $2 = -12 + d$.
  ---
  Wir addieren $12$ auf beiden Seiten: $d = 14$. Probe: $-12 + 14 = 2$.
```

Lineare Funktionen gehören zu den einfachsten Funktionen. Trotzdem stecken in ihnen die zwei wichtigsten
Gedanken des Kapitels: ein **Startwert** und eine **Änderungsrate**. Wer beide Zahlen im Sachzusammenhang deuten kann,
hat das Werkzeug für alle späteren Modelle.

:::definition[Lineare Funktion]
Eine Funktion $f\colon \R \to \R$ der Form
$$f(x) = kx + d \qquad (k, d \in \R)$$
heißt **lineare Funktion**. Dabei ist $k$ die **Steigung** und $d$ der **Achsenabschnitt** auf der $y$-Achse. Der
Graph ist eine Gerade.
:::

Beispiele sind $f(x) = 2x + 1$ mit $k = 2$ und $d = 1$, oder $g(x) = 5 - 0{,}5x$ mit $k = -0{,}5$ und $d = 5$. Auch
$h(x) = 3$ ist linear, mit $k = 0$. Ihr Graph ist eine waagrechte Gerade. **Keine** lineare Funktion ist
$x \mapsto x^2 + 1$, denn $x$ kommt im Quadrat vor. Ebenso ist $x \mapsto \tfrac{1}{x}$ keine lineare Funktion. Eine
senkrechte Gerade wie $x = 2$ ist sogar überhaupt kein Funktionsgraph, denn zur Eingabe $2$ gehören unendlich viele
$y$-Werte.

Eine Bemerkung zum Namen: In der Hochschulmathematik heißt $kx + d$ mit $d \ne 0$ genauer **affin**, und nur
$kx$ heißt dort linear. In der Schule und in der SBP sagt man zu beidem „linear“. So halten wir es auch hier.

### Die Bedeutung von k und d

- **$d$ ist der Startwert:** $f(0) = k\cdot 0 + d = d$. Die Gerade schneidet die $y$-Achse im Punkt $(0 \mid d)$.
- **$k$ ist die Änderung pro Schritt:** Erhöht man $x$ um $1$, wächst $f(x)$ um genau $k$. Denn
  $f(x + 1) = k(x + 1) + d = kx + d + k = f(x) + k$.

Allgemein gilt für zwei beliebige Stellen $x_1 \ne x_2$ die Formel des **Steigungsdreiecks**:
$$k = \frac{f(x_2) - f(x_1)}{x_2 - x_1} = \frac{\Delta y}{\Delta x}.$$
Dabei ist $\Delta y$ (lies „Delta $y$“) die Änderung der $y$-Werte und $\Delta x$ die Änderung der $x$-Werte.

Bei einer linearen Funktion ergibt dieser Quotient für **jedes** Paar von Stellen dieselbe Zahl. Genau das zeichnet lineare
Funktionen aus: Sie haben eine **konstante Änderungsrate**. Wie man Änderungsraten bei anderen Funktionen misst,
lernst du in [9.1 Änderungen messen](/lernen/mathe3/differentialrechnung/aenderungen-messen-absolute-relative-und-mittlere-aenderung).

```plot
x: [-1, 6]
y: [-1, 5]
gleich: true
graphen:
  - { f: "0.5*x + 1", label: "f(x) = 0,5x + 1", farbe: 0 }
strecken:
  - { von: [1, 1.5], nach: [5, 1.5], farbe: 1 }
  - { von: [5, 1.5], nach: [5, 3.5], farbe: 2 }
punkte:
  - { x: 0, y: 1, label: "(0 | 1)", farbe: 0 }
  - { x: 3, y: 1.5, label: "Δx = 4", farbe: 1 }
  - { x: 5, y: 2.5, label: "Δy = 2", farbe: 2 }
beschriftung: Steigungsdreieck der Geraden f(x) = 0,5x + 1. Geht man 4 Einheiten nach rechts, steigt die Gerade um 2 Einheiten. Also ist k = 2/4 = 0,5. Der Achsenabschnitt d = 1 ist die Höhe beim Schnitt mit der y-Achse.
```

Aus dem Vorzeichen von $k$ liest man die Monotonie ab. Für $k > 0$ steigt die Gerade streng, für $k < 0$ fällt sie
streng, für $k = 0$ ist sie konstant. Der Winkel $\alpha$ zwischen Gerade und $x$-Achse erfüllt $\tan\alpha = k$.
Eine Straße mit $8\,\%$ Steigung hat also $k = 0{,}08$, siehe [5.2 Steigung, Höhenwinkel und Vermessung](/lernen/mathe3/trigonometrie/steigung-hoehenwinkel-und-vermessung).

### Gerade durch zwei Punkte

:::beispiel[Gerade durch zwei Punkte]
Gesucht ist die lineare Funktion durch $P_1(-1 \mid 7)$ und $P_2(3 \mid -1)$.

1. **Steigung** mit dem Steigungsdreieck. Wir nehmen beide Differenzen in derselben Reihenfolge, „Punkt 2 minus Punkt 1“:
   $$k = \frac{-1 - 7}{3 - (-1)} = \frac{-8}{4} = -2.$$
2. **Achsenabschnitt:** Wir setzen $P_1$ in $y = kx + d$ ein: $7 = -2\cdot(-1) + d = 2 + d$, also $d = 5$.
3. **Ergebnis:** $f(x) = -2x + 5$.
4. **Probe** mit dem anderen Punkt: $f(3) = -6 + 5 = -1$. Das stimmt mit $P_2$ überein.
:::

:::achtung[Reihenfolge im Steigungsdreieck gemischt]
Eine typische Fehlrechnung bei $P_1(-1 \mid 7)$ und $P_2(3 \mid -1)$:
$$k = \frac{-1 - 7}{-1 - 3} = \frac{-8}{-4} = 2 \qquad\text{(falsch)}.$$
Im Zähler wurde „Punkt 2 minus Punkt 1“ gerechnet, im Nenner „Punkt 1 minus Punkt 2“. Dadurch kippt das Vorzeichen.
**Richtig:** im Zähler und im Nenner dieselbe Reihenfolge, $k = \tfrac{-1 - 7}{3 - (-1)} = -2$. Eine schnelle Kontrolle: Der
Punkt weiter rechts liegt tiefer, also muss die Gerade fallen und $k$ negativ sein.
:::

:::merke[Geradengleichung aus zwei Punkten]
Gegeben sind $P_1(x_1 \mid y_1)$ und $P_2(x_2 \mid y_2)$ mit $x_1 \ne x_2$.
1. Steigung: $k = \dfrac{y_2 - y_1}{x_2 - x_1}$, im Zähler und im Nenner in derselben Reihenfolge.
2. Achsenabschnitt aus einem Punkt: $d = y_1 - k\,x_1$.
3. Probe mit dem anderen Punkt.
:::

### Lineare Modelle und die Bedeutung der Parameter

Ein Vorgang ist **linear**, wenn pro Zeiteinheit immer **derselbe Betrag** dazukommt oder abgeht. Allgemein gilt das
pro Einheit der Eingabe. Beispiele sind eine Kerze, die pro Stunde gleich viel kürzer wird, oder ein Tarif mit
Grundgebühr und festem Preis pro Minute. Bei solchen Aufgaben fragt die Prüfung gern: „Deute die Zahlen im
Sachzusammenhang.“ Dafür brauchst du die **Einheiten**.

:::beispiel[Einen Tarif deuten]
Ein Carsharing-Anbieter verrechnet für eine Fahrt $K(t) = 0{,}35\,t + 1{,}50$. Dabei ist $t$ die Fahrzeit in Minuten
und $K$ der Preis in Euro.

- **Deutung von $d = 1{,}50$:** Für $t = 0$ kostet die Fahrt $1{,}50$ Euro. Das ist eine **Grundgebühr** pro Fahrt.
  Ihre Einheit ist die Einheit von $K$, also Euro.
- **Deutung von $k = 0{,}35$:** Jede zusätzliche Minute kostet $0{,}35$ Euro. Die Einheit von $k$ ist „Einheit von $K$
  pro Einheit von $t$“, also Euro pro Minute.
- **Rückwärts gerechnet:** Eine Fahrt hat $12{,}00$ Euro gekostet. Aus $0{,}35\,t + 1{,}50 = 12$ folgt
  $0{,}35\,t = 10{,}50$, also $t = 30$ Minuten.
:::

:::achtung[Steigung und Achsenabschnitt vertauscht]
Eine typische Fehlrechnung: „Grundgebühr $1{,}50$ Euro, $0{,}35$ Euro pro Minute, also $K(t) = 1{,}50\,t + 0{,}35$.“
Dann würde jede Minute $1{,}50$ Euro kosten. Die Einheiten zeigen den Fehler: Die Zahl, die mit $t$ multipliziert
wird, muss die Einheit „Euro **pro Minute**“ haben. **Richtig:** $K(t) = 0{,}35\,t + 1{,}50$. Wer Einheiten
mitschreibt, merkt sofort, wenn $k$ und $d$ vertauscht sind.
:::

```reflexion
frage: Warum ist bei einer linearen Funktion die Änderung $f(x + 1) - f(x)$ immer gleich, egal wo man startet? Erkläre es am Term und am Graphen.
antwort: |
  Am Term: $f(x + 1) - f(x) = k(x + 1) + d - (kx + d) = k$. Das $x$ und das $d$ fallen weg, übrig bleibt nur $k$.
  Der Startpunkt $x$ spielt also keine Rolle.

  Am Graphen: Die Gerade hat überall dieselbe Neigung. Ein Steigungsdreieck mit der Breite $1$ hat deshalb überall
  dieselbe Höhe $k$. Bei einer gekrümmten Kurve wie $x^2$ wäre das anders: Von $1$ nach $2$ wächst sie um $3$, von
  $5$ nach $6$ um $11$.
```

### Zwei lineare Modelle vergleichen

Viele Anwendungsaufgaben vergleichen zwei Angebote. Gesucht ist die Stelle, an der beide gleich viel kosten. Am Graphen
ist das der Schnittpunkt der zwei Geraden. Rechnerisch setzt man die beiden Terme gleich.

:::beispiel[Zwei Stromtarife]
Tarif A kostet $8$ Euro Grundgebühr pro Monat und $0{,}30$ Euro pro kWh. Tarif B kostet $20$ Euro Grundgebühr und
$0{,}25$ Euro pro kWh. Mit dem Verbrauch $x$ in kWh pro Monat gilt
$$A(x) = 0{,}30\,x + 8, \qquad B(x) = 0{,}25\,x + 20.$$
1. Gleich teuer: $0{,}30\,x + 8 = 0{,}25\,x + 20$. Wir subtrahieren $0{,}25\,x$ und $8$: $0{,}05\,x = 12$.
2. Division durch $0{,}05$: $x = 240$ kWh. Beide kosten dann $0{,}30\cdot 240 + 8 = 80$ Euro.
3. Deutung: Tarif A hat die kleinere Grundgebühr, Tarif B den kleineren Preis pro kWh. Unter $240$ kWh ist A
   günstiger, darüber B. Probe mit $x = 300$: $A = 98$ Euro, $B = 95$ Euro.
:::

```aufgabe
id: fu-lin-check-widget
titel: Was passiert, wenn d wächst?
niveau: 1
art: check
angabe: |
  Im Widget nach dieser Frage kannst du $k$ und $d$ in $f(x) = kx + d$ verändern. Sage zuerst vorher: Was passiert mit
  der Geraden, wenn du nur $d$ von $1$ auf $3$ erhöhst?
teile:
  - typ: auswahl
    optionen:
      - 'Sie wird steiler.'
      - 'Sie wird um $2$ nach oben verschoben und bleibt parallel.'
      - 'Sie dreht sich um den Punkt $(0 \mid 1)$.'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Die Steilheit hängt nur von $k$ ab. Eine größere Zahl $d$ addiert zu jedem Funktionswert dasselbe.'
      - wert: 2
        meldung: 'Eine Drehung um $(0 \mid d)$ entsteht, wenn man $k$ ändert. Bei $d$ ändert sich jeder Funktionswert um denselben Betrag.'
hinweise:
  - 'Vergleiche $f(x) = kx + 1$ und $g(x) = kx + 3$ an einer beliebigen Stelle $x$.'
loesung: |
  An jeder Stelle ist $g(x) - f(x) = (kx + 3) - (kx + 1) = 2$. Jeder Punkt wandert um $2$ nach oben.
  ---
  Die Steigung $k$ bleibt gleich, also bleibt die Gerade parallel. Ändert man dagegen $k$, dreht sich die Gerade um den Punkt $(0 \mid d)$.
```

```widget
name: parameter
titel: Steigung und Achsenabschnitt einer Geraden
props:
  f: "k*x + d"
  parameter:
    - { name: k, min: -3, max: 3, step: 0.25, wert: 0.5 }
    - { name: d, min: -4, max: 4, step: 0.5, wert: 1 }
  x: [-6, 6]
  y: [-6, 6]
```

**Arbeitsauftrag:** Prüfe zuerst deine Vorhersage: Halte $k = 0{,}5$ fest und ziehe $d$ von $1$ auf $3$. Halte dann
$d = 1$ fest und ändere $k$. Beobachte, dass sich die Gerade jetzt um den Punkt $(0 \mid 1)$ dreht. Erkläre mit
$f(0) = d$, warum dieser Punkt fest bleibt.

```aufgabe
id: fu-gerade-zwei-punkte
titel: Gerade durch zwei Punkte
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Bestimme die lineare Funktion $f(x) = kx + d$, deren Graph durch $A(-2 \mid 5)$ und $B(4 \mid 2)$ geht.
  Wo schneidet der Graph die $x$-Achse?
teile:
  - typ: zahl
    label: '$k$'
    loesung: "(2 - 5)/(4 - (-2))"
    anzeige: '-\tfrac12'
    fehler:
      - wert: "1/2"
        meldung: 'Vorzeichen prüfen: Der rechte Punkt $B$ liegt tiefer als $A$. Die Gerade fällt, $k$ ist negativ.'
      - wert: "-2"
        meldung: 'Du hast $\tfrac{\Delta x}{\Delta y}$ gerechnet. Die Steigung ist $\tfrac{\Delta y}{\Delta x}$: Höhenunterschied durch waagrechten Abstand.'
  - typ: zahl
    label: '$d$'
    loesung: "5 - (-1/2)*(-2)"
    anzeige: '4'
    fehler:
      - wert: "6"
        meldung: 'Aus $5 = -\tfrac12\cdot(-2) + d = 1 + d$ folgt $d = 4$. Prüfe das Vorzeichen von $-\tfrac12\cdot(-2)$.'
  - typ: zahl
    label: 'Nullstelle'
    loesung: "8"
    fehler:
      - wert: "-8"
        meldung: 'Aus $-\tfrac12 x + 4 = 0$ folgt $\tfrac12 x = 4$, also $x = 8$. Probe: $-4 + 4 = 0$.'
hinweise:
  - '$k = \tfrac{y_B - y_A}{x_B - x_A}$, danach $d$ aus einem Punkt. Für die Nullstelle $f(x) = 0$ lösen.'
loesung: |
  **Ansatz:** Steigungsdreieck zwischen $A$ und $B$: $k = \tfrac{2 - 5}{4 - (-2)} = \tfrac{-3}{6} = -\tfrac12$.
  ---
  Achsenabschnitt aus $A$: $5 = -\tfrac12\cdot(-2) + d = 1 + d$, also $d = 4$. Damit ist $f(x) = -\tfrac12 x + 4$.
  Probe mit $B$: $-\tfrac12\cdot 4 + 4 = 2$. Es stimmt.
  ---
  Nullstelle: $-\tfrac12 x + 4 = 0$, also $x = 8$. Der Graph schneidet die $x$-Achse im Punkt $(8 \mid 0)$.
```

```aufgabe
id: fu-gerade-ablesen
titel: Eine Gerade am Graphen ablesen
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Die Gerade im Bild geht durch die markierten Gitterpunkte $(0 \mid -1)$ und $(3 \mid 1)$. Bestimme $k$ und $d$.
plot:
  x: [-2, 5]
  y: [-3, 3]
  gleich: true
  graphen:
    - { f: "2/3*x - 1" }
  punkte:
    - { x: 0, y: -1 }
    - { x: 3, y: 1 }
teile:
  - typ: zahl
    label: '$k$'
    loesung: "2/3"
    anzeige: '\tfrac23'
    fehler:
      - wert: "3/2"
        meldung: 'Die Steigung ist Höhenunterschied durch waagrechten Abstand: $\tfrac{2}{3}$, nicht $\tfrac32$.'
      - wert: "2"
        meldung: 'Der Höhenunterschied $2$ verteilt sich auf $3$ Einheiten nach rechts. Pro Einheit sind es $\tfrac23$.'
  - typ: zahl
    label: '$d$'
    loesung: "-1"
    fehler:
      - wert: "1"
        meldung: 'Der Achsenabschnitt ist die Höhe beim Schnitt mit der $y$-Achse, also beim Punkt mit $x = 0$.'
      - wert: "1.5"
        meldung: 'Das ist die Nullstelle, also der Schnitt mit der $x$-Achse. $d$ liest man an der $y$-Achse ab.'
hinweise:
  - 'Der Achsenabschnitt ist der $y$-Wert bei $x = 0$. Für $k$ gehe von $(0 \mid -1)$ nach $(3 \mid 1)$.'
loesung: |
  **Ansatz:** $d$ ist die Höhe beim Schnitt mit der $y$-Achse, also $d = -1$.
  ---
  Von $(0 \mid -1)$ nach $(3 \mid 1)$ geht es $3$ nach rechts und $2$ nach oben. Also $k = \tfrac23$ und $f(x) = \tfrac23 x - 1$. Probe: $f(3) = 2 - 1 = 1$.
```

```aufgabe
id: fu-steigung-fehler
titel: Fehler im Steigungsdreieck finden
niveau: 2
lernziel: 2
kompetenz: begruenden
angabe: |
  Ein Mitschüler rechnet die Steigung der Geraden durch $P(1 \mid 4)$ und $Q(5 \mid -4)$ so aus:
  $$k = \frac{-4 - 4}{1 - 5} = \frac{-8}{-4} = 2.$$
  a) Welche Steigung ist richtig?

  b) Welcher Fehler ist passiert?
teile:
  - typ: zahl
    label: 'a) richtige Steigung'
    loesung: "(-4 - 4)/(5 - 1)"
    anzeige: '-2'
    fehler:
      - wert: "2"
        meldung: 'Das ist das Ergebnis des Mitschülers. Der rechte Punkt $Q$ liegt tiefer, die Gerade muss fallen.'
      - wert: "-1/2"
        meldung: 'Die Steigung ist $\tfrac{\Delta y}{\Delta x}$, nicht umgekehrt. $\Delta y = -8$ und $\Delta x = 4$.'
  - typ: auswahl
    label: 'b) Fehler'
    optionen:
      - 'Im Zähler „Q minus P“, im Nenner „P minus Q“: Die Reihenfolge ist gemischt.'
      - '$\Delta x$ und $\Delta y$ sind vertauscht.'
      - 'Er hat sich bei $-4 - 4$ verrechnet.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Im Zähler steht eine $y$-Differenz, im Nenner eine $x$-Differenz. Das ist richtig. Vergleiche die Reihenfolge der Punkte im Zähler und im Nenner.'
      - wert: 2
        meldung: '$-4 - 4 = -8$ stimmt. Schau dir den Nenner an.'
hinweise:
  - 'Vergleiche, welcher Punkt im Zähler zuerst steht und welcher im Nenner.'
  - 'Rechne mit „Q minus P“ im Zähler und im Nenner: $\tfrac{-4 - 4}{5 - 1}$.'
loesung: |
  **Ansatz:** Im Steigungsdreieck müssen Zähler und Nenner dieselbe Reihenfolge der Punkte haben.
  ---
  Im Zähler steht $y_Q - y_P = -4 - 4$, im Nenner aber $x_P - x_Q = 1 - 5$. Die Reihenfolge ist gemischt, das dreht das Vorzeichen.
  ---
  Richtig ist $k = \tfrac{-4 - 4}{5 - 1} = \tfrac{-8}{4} = -2$. Plausibel: $Q$ liegt rechts von $P$ und tiefer, also fällt die Gerade.
```

```aufgabe
id: fu-linear-tabelle
titel: Ist die Tabelle linear?
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  Eine Messung liefert die Wertetabelle

  | $x$ | $0$ | $2$ | $5$ | $9$ |
  |---|---|---|---|---|
  | $y$ | $3$ | $7$ | $13$ | $21$ |

  Die Schritte in $x$ sind verschieden groß. Prüfe, ob die Werte zu einer linearen Funktion gehören, und gib gegebenenfalls $k$ und $d$ an.
teile:
  - typ: zahl
    label: '$k$'
    loesung: "(7 - 3)/(2 - 0)"
    anzeige: '2'
    fehler:
      - wert: "4"
        meldung: 'Die $y$-Werte wachsen von $3$ auf $7$, während $x$ um $2$ wächst. Pro Einheit von $x$ ist das $4 : 2$.'
      - wert: "6"
        meldung: 'Der Schritt von $x = 2$ nach $x = 5$ ist $3$ Einheiten breit. Teile $\Delta y$ durch $\Delta x$.'
  - typ: zahl
    label: '$d$'
    loesung: "3"
    fehler:
      - wert: "0"
        meldung: '$d$ ist der Wert bei $x = 0$. Lies ihn in der Tabelle ab.'
hinweise:
  - 'Berechne für jeden Schritt den Quotienten $\tfrac{\Delta y}{\Delta x}$, nicht nur $\Delta y$.'
  - 'Sind alle Quotienten gleich, ist das die Steigung $k$. $d$ ist der Wert bei $x = 0$.'
loesung: |
  **Ansatz:** Eine Funktion ist linear, wenn das Steigungsdreieck für jedes Paar von Punkten dieselbe Zahl liefert. Bei verschieden großen Schritten vergleicht man $\tfrac{\Delta y}{\Delta x}$, nicht die bloßen Differenzen.
  ---
  Quotienten: $\tfrac{7 - 3}{2 - 0} = 2$, $\tfrac{13 - 7}{5 - 2} = 2$, $\tfrac{21 - 13}{9 - 5} = 2$. Alle gleich, also linear mit $k = 2$.
  ---
  Bei $x = 0$ ist $y = 3$, also $d = 3$ und $f(x) = 2x + 3$. Probe: $f(9) = 18 + 3 = 21$. Es stimmt.
```

```aufgabe
id: fu-kerze
titel: Lineares Modell aus zwei Messungen
niveau: 2
lernziel: 2
kompetenz: modellieren
angabe: |
  Eine Kerze brennt gleichmäßig ab. Zwei Stunden nach dem Anzünden ist sie $25$ cm hoch, sechs Stunden nach dem
  Anzünden noch $17$ cm.

  a) Stelle die Höhe $h(t)$ als lineare Funktion auf ($t$ in Stunden, $h$ in cm).

  b) Wie hoch war die Kerze zu Beginn? Nach welcher Zeit ist sie ganz abgebrannt?
teile:
  - typ: term
    label: '$h(t)$'
    variable: t
    loesung: "29 - 2*t"
    fehler:
      - wert: "25 - 2*t"
        meldung: 'Die $25$ cm gelten zum Zeitpunkt $t = 2$, nicht bei $t = 0$. Berechne $d$ aus einem Messpunkt.'
      - wert: "29 + 2*t"
        meldung: 'Die Kerze wird kürzer. Die Steigung muss negativ sein.'
  - typ: zahl
    label: 'Anfangshöhe'
    einheit: cm
    loesung: "29"
    fehler:
      - wert: "25"
        meldung: 'Nach $2$ Stunden ist sie $25$ cm hoch. Zu Beginn war sie um $2\cdot 2 = 4$ cm höher.'
  - typ: zahl
    label: 'Brenndauer'
    einheit: h
    loesung: "29/2"
    anzeige: '14{,}5'
    fehler:
      - wert: "12.5"
        meldung: 'Das wäre die Zeit ab der Messung bei $25$ cm. Gesucht ist die Zeit ab dem Anzünden: $h(t) = 0$.'
hinweise:
  - 'Die zwei Messungen sind die Punkte $(2 \mid 25)$ und $(6 \mid 17)$.'
  - 'Die Steigung ist $\tfrac{17 - 25}{6 - 2}$. Welche Einheit hat sie? Danach $d$ aus einem Punkt.'
loesung: |
  **Ansatz:** gleichmäßiges Abbrennen heißt lineares Modell. Steigung aus den zwei Messpunkten: $k = \tfrac{17 - 25}{6 - 2} = -2$ cm pro Stunde.
  ---
  $d$ aus $(2 \mid 25)$: $25 = -2\cdot 2 + d$, also $d = 29$. Damit ist $h(t) = 29 - 2t$.
  ---
  Anfangshöhe $h(0) = 29$ cm. Abgebrannt: $29 - 2t = 0$, also $t = 14{,}5$ h.
  **Antwort:** Die Kerze war $29$ cm hoch und brennt $14{,}5$ Stunden. Die sachlich sinnvolle Definitionsmenge ist $[0;\ 14{,}5]$.
```

```aufgabe
id: fu-parameter-deuten
titel: Temperatur in der Höhe deuten
niveau: 2
lernziel: 2
kompetenz: modellieren
angabe: |
  Ein einfaches Modell beschreibt die Lufttemperatur in Abhängigkeit von der Seehöhe:
  $$T(h) = 15 - 0{,}0065\,h \qquad (T \text{ in } °\text{C},\ h \text{ in m}).$$
  a) Was bedeutet die Zahl $-0{,}0065$?

  b) Berechne die Temperatur in $2000$ m Höhe.

  c) In welcher Höhe liegt laut Modell die Nullgradgrenze? Runde auf ganze Meter.
teile:
  - typ: auswahl
    label: 'a)'
    optionen:
      - 'Pro Meter Höhe sinkt die Temperatur um $0{,}0065\,°\text{C}$, also um $0{,}65\,°\text{C}$ pro $100$ m.'
      - 'In $0$ m Höhe hat es $-0{,}0065\,°\text{C}$.'
      - 'Die Temperatur sinkt um $0{,}0065\,\%$ pro Meter.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Der Wert bei $h = 0$ ist $T(0) = 15$. Die Zahl vor $h$ ist die Änderung pro Meter.'
      - wert: 2
        meldung: 'In einem linearen Modell ändert sich der Wert um einen festen **Betrag**, nicht um einen Prozentsatz.'
  - typ: zahl
    label: 'b) $T(2000)$'
    einheit: '°C'
    loesung: "15 - 0.0065*2000"
    anzeige: '2'
    fehler:
      - wert: "28"
        meldung: 'Mit zunehmender Höhe wird es kälter. Das Minus vor $0{,}0065$ gehört dazu.'
  - typ: zahl
    label: 'c) Nullgradgrenze'
    einheit: m
    loesung: "15/0.0065"
    toleranz: 1
    anzeige: '\tfrac{15}{0{,}0065} \approx 2308'
    fehler:
      - wert: "2000"
        meldung: 'Bei $2000$ m hat es noch $2\,°\text{C}$. Löse $15 - 0{,}0065\,h = 0$.'
hinweise:
  - 'Die Zahl vor $h$ ist die Steigung. Ihre Einheit ist „°C pro m“.'
  - 'Für c) setze $T(h) = 0$ und löse nach $h$.'
loesung: |
  **Ansatz:** $T$ ist linear in $h$. Der Achsenabschnitt $15$ ist die Temperatur in $0$ m Höhe. Die Steigung $-0{,}0065$ hat die Einheit °C pro m.
  ---
  a) Pro Meter Höhe wird es um $0{,}0065\,°\text{C}$ kälter, pro $100$ m also um $0{,}65\,°\text{C}$.
  ---
  b) $T(2000) = 15 - 0{,}0065\cdot 2000 = 15 - 13 = 2\,°\text{C}$.
  ---
  c) $15 - 0{,}0065\,h = 0$ ergibt $h = \tfrac{15}{0{,}0065} \approx 2307{,}7$. **Antwort:** Die Nullgradgrenze liegt laut Modell bei etwa $2308$ m.
```

```aufgabe
id: fu-tarifvergleich
titel: Zwei Handytarife vergleichen
niveau: 3
lernziel: 2
kompetenz: modellieren
angabe: |
  Tarif A kostet $12$ Euro pro Monat und zusätzlich $0{,}04$ Euro pro Gesprächsminute. Tarif B hat keine Grundgebühr und
  kostet $0{,}10$ Euro pro Minute. Es sei $t$ die Gesprächszeit in Minuten pro Monat.

  a) Stelle für beide Tarife die monatlichen Kosten $A(t)$ und $B(t)$ in Euro auf.

  b) Ab welcher Gesprächszeit ist Tarif A günstiger?

  c) Wie viel spart man mit dem günstigeren Tarif bei $300$ Minuten?
teile:
  - typ: term
    label: 'a) $A(t)$'
    variable: t
    loesung: "12 + 0.04*t"
    fehler:
      - wert: "0.04 + 12*t"
        meldung: 'Grundgebühr und Minutenpreis sind vertauscht. Mit $t$ multipliziert wird der Preis **pro Minute**.'
  - typ: term
    label: 'a) $B(t)$'
    variable: t
    loesung: "0.10*t"
    fehler:
      - wert: "10*t"
        meldung: '$10$ Cent sind $0{,}10$ Euro. Achte auf die Einheit Euro.'
  - typ: zahl
    label: 'b) ab'
    einheit: min
    loesung: "12/(0.10 - 0.04)"
    anzeige: '200'
    fehler:
      - wert: "120"
        meldung: 'Du hast $12$ durch $0{,}10$ geteilt. Gleichsetzen ergibt $0{,}06\,t = 12$.'
      - wert: "300"
        meldung: 'Du hast $12$ durch den Minutenpreis $0{,}04$ von Tarif A geteilt. Gleichsetzen: $12 + 0{,}04\,t = 0{,}10\,t$. Subtrahiere $0{,}04\,t$ auf beiden Seiten.'
  - typ: zahl
    label: 'c) Ersparnis'
    einheit: Euro
    loesung: "0.10*300 - (12 + 0.04*300)"
    anzeige: '6'
    fehler:
      - wert: "-6"
        meldung: 'Eine Ersparnis gibt man positiv an: teurer Tarif minus günstiger Tarif.'
hinweise:
  - 'Kosten = Grundgebühr + Preis pro Minute mal Minuten.'
  - 'Für b) setze $A(t) = B(t)$ und überlege, welcher Tarif bei großen $t$ billiger ist.'
loesung: |
  **Ansatz:** Beide Tarife sind lineare Modelle: Grundgebühr plus Minutenpreis mal Minuten. $A(t) = 12 + 0{,}04\,t$ und $B(t) = 0{,}10\,t$.
  ---
  b) Gleich teuer bei $12 + 0{,}04\,t = 0{,}10\,t$. Subtrahieren von $0{,}04\,t$: $12 = 0{,}06\,t$, also $t = 200$ Minuten.
  ---
  Tarif A hat den kleineren Minutenpreis. Seine Gerade ist flacher und liegt rechts vom Schnittpunkt unter der von B. Ab $200$ Minuten ist A günstiger.
  ---
  c) $A(300) = 12 + 12 = 24$ Euro, $B(300) = 30$ Euro. **Antwort:** Mit Tarif A spart man bei $300$ Minuten $6$ Euro pro Monat.
gefuehrt:
  - text: 'Welche Zahl wird bei Tarif A mit $t$ multipliziert?'
    teil: { typ: zahl, loesung: "0.04", fehler: [ { wert: "12", meldung: '$12$ Euro fallen einmal pro Monat an, unabhängig von den Minuten. Mit $t$ multipliziert wird der Preis pro Minute.' } ] }
    erklaerung: 'Der Minutenpreis $0{,}04$ Euro wird mit $t$ multipliziert, die Grundgebühr $12$ Euro kommt einmal dazu: $A(t) = 12 + 0{,}04\,t$.'
  - text: 'Setze $A(t) = B(t)$ an und bringe alle Glieder mit $t$ auf eine Seite. Welche Zahl steht dann vor $t$?'
    teil: { typ: zahl, loesung: "0.06" }
    erklaerung: '$12 + 0{,}04\,t = 0{,}10\,t$ wird zu $12 = 0{,}06\,t$.'
  - text: 'Bei welcher Gesprächszeit sind beide gleich teuer?'
    teil: { typ: zahl, loesung: "200" }
    erklaerung: '$t = 12 : 0{,}06 = 200$ Minuten.'
  - text: 'Überlege: Welcher Tarif ist bei sehr vielen Minuten billiger, und warum?'
    erklaerung: 'Bei vielen Minuten zählt vor allem der Minutenpreis. A ist mit $0{,}04$ Euro pro Minute billiger. Also lohnt sich A ab $200$ Minuten.'
```

## Quadratische Funktionen

```aufgabe
id: fu-quad-check-ergaenzen
titel: Zu einem Quadrat ergänzen
niveau: 1
art: check
angabe: |
  Welche Zahl musst du zu $x^2 + 10x$ addieren, damit ein vollständiges Quadrat $(x + c)^2$ entsteht?
  Herkunft: [2.3 Quadratische Gleichungen](/lernen/mathe3/gleichungen/quadratische-gleichungen).
teile:
  - typ: zahl
    label: 'Ergänzung'
    loesung: "25"
    fehler:
      - wert: "100"
        meldung: 'Man ergänzt das Quadrat der **Hälfte** von $10$, also $5^2$, nicht $10^2$.'
      - wert: "5"
        meldung: '$5$ ist die Hälfte von $10$. Ergänzt wird ihr **Quadrat**, damit $(x + 5)^2 = x^2 + 10x + 25$ entsteht.'
hinweise:
  - 'Vergleiche mit $(x + c)^2 = x^2 + 2cx + c^2$. Hier ist $2c = 10$.'
loesung: |
  Aus $(x + c)^2 = x^2 + 2cx + c^2$ und $2c = 10$ folgt $c = 5$.
  ---
  Es fehlt $c^2 = 25$: $x^2 + 10x + 25 = (x + 5)^2$.
```

Quadratische Funktionen beschreiben Wurfbahnen, Brückenbögen, Bremswege und Flächeninhalte. Ihr Graph, die Parabel,
ist nach der Geraden die wichtigste Kurve der Schulmathematik. In dieser Lektion lernst du vor allem eine Fähigkeit:
eine quadratische Funktion so umzuschreiben, dass man ihren höchsten oder tiefsten Punkt direkt ablesen kann.

:::definition[Quadratische Funktion]
Eine Funktion der Form
$$f(x) = ax^2 + bx + c \qquad (a, b, c \in \R,\ a \ne 0)$$
heißt **quadratische Funktion**. Ihr Graph heißt **Parabel**. Die Zahlen $a$, $b$ und $c$ heißen **Koeffizienten**.
:::

Beispiele sind $x^2$, $-2x^2 + 3x$ und $\tfrac12 x^2 - 4$. **Keine** quadratische Funktion ist $f(x) = 0\cdot x^2 + 3x$.
Das ist wegen $a = 0$ eine lineare Funktion. Auch $x^3 - x^2$ ist keine, denn die höchste Hochzahl ist $3$.

Der einfachste Vertreter ist die **Normalparabel** $y = x^2$. Sie ist nach oben offen, symmetrisch zur $y$-Achse und
hat ihren tiefsten Punkt im Ursprung. Diesen Punkt nennt man **Scheitel**. Jede andere Parabel entsteht aus der
Normalparabel durch Verschieben, Strecken und Spiegeln, wie
[4.7 Graphen verschieben, strecken und spiegeln](/lernen/mathe3/funktionen/graphen-verschieben-strecken-und-spiegeln)
zeigt.

### Die Scheitelform

:::satz[Scheitelform]
Jede quadratische Funktion $f(x) = ax^2 + bx + c$ lässt sich schreiben als
$$f(x) = a\,(x - x_S)^2 + y_S \qquad\text{mit}\quad x_S = -\frac{b}{2a},\quad y_S = f(x_S) = c - \frac{b^2}{4a}.$$
Der Punkt $S(x_S \mid y_S)$ ist der **Scheitel**. Die senkrechte Gerade $x = x_S$ ist die **Symmetrieachse** der Parabel.
:::

:::beweis
Wir heben $a$ aus den ersten beiden Gliedern heraus und ergänzen die Klammer zu einem vollständigen Quadrat. Dafür
addieren und subtrahieren wir das Quadrat der Hälfte von $\tfrac ba$:
$$\begin{aligned}
ax^2 + bx + c &= a\left(x^2 + \frac{b}{a}x\right) + c
= a\left(x^2 + \frac{b}{a}x + \frac{b^2}{4a^2} - \frac{b^2}{4a^2}\right) + c\\
&= a\left(x + \frac{b}{2a}\right)^2 - a\cdot\frac{b^2}{4a^2} + c = a\left(x + \frac{b}{2a}\right)^2 - \frac{b^2}{4a} + c.
\end{aligned}$$
Mit $x_S = -\frac{b}{2a}$ und $y_S = c - \frac{b^2}{4a}$ ist das genau die Behauptung.
:::

Warum ist $S$ der höchste oder tiefste Punkt? Das Quadrat $(x - x_S)^2$ ist nie negativ und genau bei $x = x_S$ null.
Aus der Scheitelform liest man deshalb alles Wichtige ab:

- **$a > 0$:** Die Parabel ist nach oben offen. $S$ ist der **Tiefpunkt**, die Wertemenge ist $[y_S, \infty)$.
- **$a < 0$:** Die Parabel ist nach unten offen. $S$ ist der **Hochpunkt**, die Wertemenge ist $(-\infty, y_S]$.
- **$|a| > 1$:** Die Parabel ist schmäler als die Normalparabel. **$|a| < 1$:** Sie ist breiter.
- Links vom Scheitel fällt die Parabel, rechts steigt sie (bei $a > 0$). Bei $a < 0$ ist es umgekehrt.

:::beispiel[Quadratisch ergänzen]
$f(x) = 2x^2 - 12x + 10$.

1. $a = 2$ aus den Gliedern mit $x$ herausheben: $f(x) = 2(x^2 - 6x) + 10$.
2. Die Hälfte von $-6$ ist $-3$, ihr Quadrat $9$. Wir addieren und subtrahieren $9$ **in** der Klammer:
   $f(x) = 2(x^2 - 6x + 9 - 9) + 10$.
3. Die ersten drei Glieder bilden ein Quadrat: $f(x) = 2\big((x - 3)^2 - 9\big) + 10$.
4. Klammer auflösen. Auch die $-9$ wird mit $2$ multipliziert: $f(x) = 2(x - 3)^2 - 18 + 10 = 2(x - 3)^2 - 8$.

Scheitel $S(3 \mid -8)$, die Parabel ist nach oben offen, $S$ ist der Tiefpunkt. Kontrolle mit der Formel:
$x_S = -\tfrac{-12}{2\cdot 2} = 3$ und $f(3) = 18 - 36 + 10 = -8$.
:::

:::achtung[Die Ergänzung nicht mit a multipliziert]
Eine typische Fehlrechnung beim Beispiel $f(x) = 2x^2 - 12x + 10$:
$$2(x^2 - 6x + 9 - 9) + 10 = 2(x - 3)^2 - 9 + 10 = 2(x - 3)^2 + 1 \qquad\text{(falsch)}.$$
Die $-9$ steht **in** der Klammer und wird deshalb mit dem Faktor $2$ multipliziert. **Richtig:**
$2(x - 3)^2 - 18 + 10 = 2(x - 3)^2 - 8$. Eine Probe zeigt den Fehler sofort: Der falsche Term ergibt bei $x = 0$
den Wert $19$, aber $f(0) = 10$.
:::

:::achtung[Den Scheitel mit falschem Vorzeichen ablesen]
Bei $f(x) = (x + 2)^2 - 5$ liest man oft $S(2 \mid -5)$ ab. Das ist falsch. In der Scheitelform steht
$(x - x_S)$ mit einem **Minus**. Aus $(x + 2) = (x - (-2))$ folgt $x_S = -2$. **Richtig:** $S(-2 \mid -5)$. Die
Kontrolle: Die Klammer muss am Scheitel null sein, und $(x + 2)$ ist bei $x = -2$ null.
:::

### Nullstellen und Produktform

Die Nullstellen sind die Lösungen der quadratischen Gleichung $ax^2 + bx + c = 0$. Die Lösungsformeln stehen in
[2.3 Quadratische Gleichungen](/lernen/mathe3/gleichungen/quadratische-gleichungen). Aus der Scheitelform sieht man,
wie viele es gibt. Bei $a > 0$ und $y_S < 0$ liegt der Tiefpunkt unter der $x$-Achse, also gibt es zwei Nullstellen.
Bei $y_S = 0$ berührt der Scheitel die Achse, es gibt eine. Bei $y_S > 0$ gibt es keine reelle Nullstelle. Für $a < 0$
ist es umgekehrt: Dann gibt es zwei Nullstellen, wenn der Hochpunkt über der Achse liegt, also bei $y_S > 0$.

Hat $f$ die Nullstellen $x_1$ und $x_2$, gilt die **Produktform**, auch **Linearfaktorzerlegung** genannt:
$$f(x) = a\,(x - x_1)(x - x_2).$$
Wegen der Symmetrie liegt der Scheitel genau in der Mitte zwischen den Nullstellen: $x_S = \dfrac{x_1 + x_2}{2}$.

:::beispiel[Nullstellen aus der Scheitelform]
$f(x) = 2(x - 3)^2 - 8$ aus dem Beispiel „Quadratisch ergänzen“ in dieser Lektion.

1. Nullstellen: $2(x - 3)^2 - 8 = 0$. Wir addieren $8$ und dividieren durch $2$: $(x - 3)^2 = 4$.
2. Zwei Zahlen haben das Quadrat $4$: $x - 3 = 2$ oder $x - 3 = -2$. Also $x_1 = 5$ und $x_2 = 1$.
3. Produktform: $f(x) = 2(x - 1)(x - 5)$.
4. Kontrolle: Die Mitte der Nullstellen ist $\tfrac{1 + 5}{2} = 3 = x_S$.
:::

```plot
x: [-1, 7]
y: [-9, 12]
graphen:
  - { f: "2*(x-3)^2 - 8", label: "f(x) = 2(x − 3)² − 8", farbe: 0 }
  - { f: "x^2", label: "Normalparabel", farbe: 2, gestrichelt: true }
strecken:
  - { von: [3, -9], nach: [3, 12], gestrichelt: true, farbe: 3 }
punkte:
  - { x: 3, y: -8, label: "S(3 | −8)", farbe: 0 }
  - { x: 1, y: 0, label: "1" }
  - { x: 5, y: 0, label: "5" }
beschriftung: Die Parabel f(x) = 2(x − 3)² − 8 entsteht aus der Normalparabel durch Strecken mit Faktor 2 und Verschieben um 3 nach rechts und 8 nach unten. Die Symmetrieachse x = 3 liegt in der Mitte zwischen den Nullstellen 1 und 5.
```

### Eine Parabel aus Angaben aufstellen

Welcher Ansatz am schnellsten ist, hängt davon ab, was gegeben ist.

| Gegeben | Ansatz |
|---|---|
| Scheitel und ein weiterer Punkt | Scheitelform $a(x - x_S)^2 + y_S$, dann $a$ aus dem Punkt. |
| beide Nullstellen und ein Punkt | Produktform $a(x - x_1)(x - x_2)$, dann $a$ aus dem Punkt. |
| drei beliebige Punkte | $ax^2 + bx + c$ einsetzen, ein lineares Gleichungssystem lösen. |

Das Gleichungssystem im letzten Fall löst man wie in [3.3 Das Gauß-Verfahren](/lernen/mathe3/lgs-matrizen/das-gauss-verfahren).

:::beispiel[Ein Brückenbogen]
Ein parabelförmiger Brückenbogen überspannt einen Fluss. Seine Fußpunkte liegen $40$ m auseinander, seine größte Höhe
ist $8$ m. Wir legen den Ursprung in die Mitte zwischen den Fußpunkten. Dann liegen die Fußpunkte bei $x = -20$ und
$x = 20$, der Scheitel bei $S(0 \mid 8)$. Alle Längen sind in Metern.

1. Ansatz in Scheitelform: $f(x) = a(x - 0)^2 + 8 = ax^2 + 8$.
2. Der Fußpunkt $(20 \mid 0)$ liegt auf dem Bogen: $0 = a\cdot 400 + 8$, also $a = -\tfrac{8}{400} = -0{,}02$.
3. Ergebnis: $f(x) = -0{,}02x^2 + 8$.
4. Deutung von $a = -0{,}02$: Das Minus heißt, der Bogen ist nach unten offen. Der kleine Betrag heißt, er ist viel
   flacher als die Normalparabel. In $10$ m Abstand von der Mitte ist er noch $f(10) = -2 + 8 = 6$ m hoch.
:::

```reflexion
frage: Warum liegt der Scheitel einer Parabel immer genau in der Mitte zwischen den beiden Nullstellen? Erkläre es ohne Formel.
antwort: |
  Eine Parabel ist symmetrisch zu ihrer Symmetrieachse $x = x_S$, der senkrechten Geraden durch den Scheitel. Spiegelt
  man den Graphen an dieser Geraden, bleibt er gleich. Die Nullstellen sind die Schnittpunkte mit der $x$-Achse. Beim
  Spiegeln geht die eine Nullstelle in die andere über. Zwei Punkte, die durch Spiegeln auseinander hervorgehen, haben
  von der Spiegelachse denselben Abstand. Also liegt $x_S$ genau in der Mitte. Gibt es keine Nullstellen, gilt dasselbe
  für je zwei Stellen mit gleichem Funktionswert.
```

```aufgabe
id: fu-scheitelform
titel: Scheitelform durch quadratisches Ergänzen
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Bringe $f(x) = x^2 + 6x + 5$ auf Scheitelform. Gib den Scheitel $S$ und die Nullstellen an.
teile:
  - typ: vektor
    label: 'Scheitel $S$'
    namen: ["x_S", "y_S"]
    loesung: ["-3", "-4"]
    fehler:
      - wert: ["3", "-4"]
        meldung: 'Aus $(x + 3)^2$ folgt $x_S = -3$, denn die Klammer ist bei $x = -3$ null.'
      - wert: ["-3", "5"]
        meldung: 'Die $5$ ist $f(0)$, nicht $f(-3)$. Nach dem Ergänzen bleibt $5 - 9 = -4$.'
  - typ: menge
    label: 'Nullstellen'
    loesung: ["-5", "-1"]
    fehler:
      - wert: ["5", "1"]
        meldung: 'Aus $x + 3 = \pm 2$ folgt $x = -3 \pm 2$. Probe: $f(1) = 12 \ne 0$.'
hinweise:
  - 'Halbiere den Koeffizienten von $x$: $\tfrac62 = 3$. Ergänze $+3^2 - 3^2$.'
loesung: |
  **Ansatz:** quadratisches Ergänzen mit der Hälfte von $6$, also $3$. $x^2 + 6x + 5 = (x^2 + 6x + 9) - 9 + 5 = (x + 3)^2 - 4$.
  ---
  Scheitel $S(-3 \mid -4)$, die Parabel ist nach oben offen. Nullstellen: $(x + 3)^2 = 4$, also $x + 3 = \pm 2$ und $x_1 = -5$, $x_2 = -1$.
  Probe: $(-1)^2 + 6\cdot(-1) + 5 = 0$.
```

```aufgabe
id: fu-scheitel-ablesen
titel: Aus der Scheitelform ablesen
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Gegeben ist $f(x) = -2(x - 1)^2 + 3$.

  a) Gib den Scheitel an.

  b) Welche Aussage über den Graphen stimmt?
teile:
  - typ: vektor
    label: 'a) $S$'
    namen: ["x_S", "y_S"]
    loesung: ["1", "3"]
    fehler:
      - wert: ["-1", "3"]
        meldung: 'In der Scheitelform steht $(x - x_S)$. Aus $(x - 1)$ folgt $x_S = +1$.'
      - wert: ["1", "-3"]
        meldung: 'Das Glied außerhalb der Klammer ist $+3$. Es ist der Funktionswert am Scheitel.'
  - typ: auswahl
    label: 'b)'
    optionen:
      - 'Nach unten offen, schmäler als die Normalparabel, Wertemenge $(-\infty, 3]$.'
      - 'Nach oben offen, breiter als die Normalparabel, Wertemenge $[3, \infty)$.'
      - 'Nach unten offen, breiter als die Normalparabel, Wertemenge $(-\infty, 3]$.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Der Faktor $a = -2$ ist negativ. Die Parabel ist nach unten offen.'
      - wert: 2
        meldung: 'Wegen $|a| = 2 > 1$ ist die Parabel schmäler, nicht breiter als die Normalparabel.'
hinweise:
  - 'Vergleiche mit $a(x - x_S)^2 + y_S$. Was sagen das Vorzeichen und der Betrag von $a$?'
loesung: |
  **Ansatz:** Vergleich mit der Scheitelform $a(x - x_S)^2 + y_S$ ergibt $a = -2$, $x_S = 1$, $y_S = 3$. Also $S(1 \mid 3)$.
  ---
  $a < 0$: nach unten offen, $S$ ist der Hochpunkt, die Wertemenge ist $(-\infty, 3]$. $|a| = 2 > 1$: schmäler als die Normalparabel.
```

```aufgabe
id: fu-scheitelform-a
titel: Scheitelform bei a ungleich 1
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Bringe $f(x) = -3x^2 + 18x - 20$ auf Scheitelform $a(x - x_S)^2 + y_S$. Gib den Scheitel an und entscheide, ob er
  Hoch- oder Tiefpunkt ist.
teile:
  - typ: vektor
    label: 'Scheitel $S$'
    namen: ["x_S", "y_S"]
    loesung: ["3", "7"]
    fehler:
      - wert: ["3", "-29"]
        meldung: 'Du hast die Ergänzung $-9$ unverändert aus der Klammer geholt. Sie steht aber in der Klammer und wird mit $-3$ multipliziert: $-3\cdot(-9) = +27$.'
      - wert: ["3", "-11"]
        meldung: 'Die Ergänzung $-9$ steht in der Klammer und muss mit $-3$ multipliziert werden: $+27$, nicht $+9$.'
      - wert: ["-3", "7"]
        meldung: 'Aus $(x - 3)^2$ folgt $x_S = 3$. Probe: $x_S = -\tfrac{b}{2a} = -\tfrac{18}{-6} = 3$.'
  - typ: auswahl
    label: 'Art des Scheitels'
    optionen: ['Hochpunkt', 'Tiefpunkt']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Der Faktor vor $x^2$ ist $-3$. Die Parabel ist nach unten offen, der Scheitel ist der höchste Punkt.'
hinweise:
  - 'Hebe $-3$ aus $-3x^2 + 18x$ heraus: $-3(x^2 - 6x)$.'
  - 'Ergänze in der Klammer $+9 - 9$ und multipliziere beim Auflösen auch die $-9$ mit $-3$.'
loesung: |
  **Ansatz:** quadratisches Ergänzen. Zuerst $-3$ aus den Gliedern mit $x$ herausheben: $f(x) = -3(x^2 - 6x) - 20$.
  ---
  Ergänzen mit $\left(\tfrac{-6}{2}\right)^2 = 9$: $f(x) = -3(x^2 - 6x + 9 - 9) - 20 = -3\big((x - 3)^2 - 9\big) - 20$.
  ---
  Klammer auflösen: $f(x) = -3(x - 3)^2 + 27 - 20 = -3(x - 3)^2 + 7$. Also $S(3 \mid 7)$, ein Hochpunkt wegen $a = -3 < 0$.
  ---
  Probe: $f(3) = -27 + 54 - 20 = 7$. Es stimmt.
gefuehrt:
  - text: 'Hebe $-3$ aus den beiden Gliedern mit $x$ heraus. Was steht dann in der Klammer?'
    teil: { typ: term, loesung: "x^2 - 6x", fehler: [ { wert: "x^2 + 6x", meldung: '$18x : (-3) = -6x$. Beim Herausheben einer negativen Zahl wechselt das Vorzeichen.' } ] }
    erklaerung: '$-3x^2 + 18x = -3(x^2 - 6x)$, denn $-3\cdot(-6x) = 18x$.'
  - text: 'Welche Zahl ergänzt $x^2 - 6x$ zu einem Quadrat?'
    teil: { typ: zahl, loesung: "9" }
    erklaerung: 'Die Hälfte von $-6$ ist $-3$, ihr Quadrat $9$. Also $x^2 - 6x + 9 = (x - 3)^2$.'
  - text: 'Beim Ausmultiplizieren wird die $-9$ in der Klammer mit $-3$ multipliziert. Welche Zahl entsteht?'
    teil: { typ: zahl, loesung: "27", fehler: [ { wert: "-27", meldung: 'Minus mal minus ergibt plus: $-3\cdot(-9) = +27$.' } ] }
    erklaerung: '$-3\cdot(-9) = 27$.'
  - text: 'Gib den $y$-Wert des Scheitels an.'
    teil: { typ: zahl, loesung: "7" }
    erklaerung: '$27 - 20 = 7$. Also $f(x) = -3(x - 3)^2 + 7$ mit Scheitel $(3 \mid 7)$.'
```

```aufgabe
id: fu-parabel-scheitel-punkt
titel: Parabel aus Scheitel und Punkt
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Eine Parabel hat den Scheitel $S(2 \mid 5)$ und geht durch $P(0 \mid 1)$.

  a) Bestimme $a$ in $f(x) = a(x - x_S)^2 + y_S$.

  b) Berechne die Nullstellen exakt. Gib die größere auf zwei Nachkommastellen an.
teile:
  - typ: zahl
    label: '$a$'
    loesung: "(1-5)/(0-2)^2"
    anzeige: '-1'
    fehler:
      - wert: "1"
        meldung: 'Aus $1 = 4a + 5$ folgt $4a = -4$. Der Punkt $P$ liegt unter dem Scheitel, die Parabel ist nach unten offen.'
      - wert: "-2"
        meldung: 'Es ist $(0 - 2)^2 = 4$, nicht $2$. Dann $4a = -4$.'
  - typ: zahl
    label: 'größere Nullstelle'
    loesung: "2 + sqrt(5)"
    anzeige: '2 + \sqrt{5} \approx 4{,}24'
    fehler:
      - wert: "2 + 5"
        meldung: 'Aus $(x - 2)^2 = 5$ folgt $x - 2 = \pm\sqrt5$, nicht $\pm 5$.'
      - wert: "sqrt(5)"
        meldung: 'Aus $x - 2 = \sqrt5$ folgt $x = 2 + \sqrt5$. Die $2$ fehlt.'
hinweise:
  - 'Setze $S$ in die Scheitelform ein: $f(x) = a(x - 2)^2 + 5$.'
  - 'Setze danach den Punkt $P$ ein: $1 = a(0 - 2)^2 + 5$.'
loesung: |
  **Ansatz:** Der Scheitel ist gegeben, also nehmen wir die Scheitelform $f(x) = a(x - 2)^2 + 5$.
  ---
  $P$ einsetzen: $1 = a\cdot 4 + 5$, also $a = -1$. Damit $f(x) = -(x - 2)^2 + 5$, nach unten offen.
  ---
  Nullstellen: $(x - 2)^2 = 5$, also $x = 2 \pm \sqrt5$. Das sind $x_1 \approx -0{,}24$ und $x_2 \approx 4{,}24$.
  Kontrolle: Die Mitte der beiden ist $2 = x_S$.
```

```aufgabe
id: fu-parabel-nullstellen-punkt
titel: Parabel aus Nullstellen und einem Punkt
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Eine Parabel hat die Nullstellen $-1$ und $5$ und geht durch den Punkt $(1 \mid 4)$.

  a) Bestimme $a$ in der Produktform $f(x) = a(x + 1)(x - 5)$.

  b) Gib den Scheitel an.
teile:
  - typ: zahl
    label: 'a) $a$'
    loesung: "4/((1+1)*(1-5))"
    anzeige: '-\tfrac12'
    fehler:
      - wert: "1/2"
        meldung: 'Es ist $(1 + 1)(1 - 5) = 2\cdot(-4) = -8$. Aus $-8a = 4$ folgt ein negatives $a$.'
      - wert: "-2"
        meldung: 'Aus $-8a = 4$ folgt $a = \tfrac{4}{-8}$, nicht $\tfrac{-8}{4}$.'
  - typ: vektor
    label: 'b) $S$'
    namen: ["x_S", "y_S"]
    loesung: ["2", "4.5"]
    fehler:
      - wert: ["2", "-4.5"]
        meldung: 'Rechne $f(2) = -\tfrac12\cdot 3\cdot(-3)$. Minus mal minus ergibt plus.'
      - wert: ["3", "4"]
        meldung: 'Der Scheitel liegt in der Mitte der Nullstellen: $\tfrac{-1 + 5}{2} = 2$.'
hinweise:
  - 'Setze den Punkt $(1 \mid 4)$ in die Produktform ein.'
  - 'Die $x$-Koordinate des Scheitels ist der Mittelwert der Nullstellen. Die $y$-Koordinate bekommst du durch Einsetzen.'
loesung: |
  **Ansatz:** Die Nullstellen sind gegeben, also nehmen wir die Produktform $f(x) = a(x + 1)(x - 5)$.
  ---
  Punkt einsetzen: $4 = a\cdot(1 + 1)(1 - 5) = -8a$, also $a = -\tfrac12$.
  ---
  Scheitel: $x_S = \tfrac{-1 + 5}{2} = 2$ und $y_S = f(2) = -\tfrac12\cdot 3\cdot(-3) = 4{,}5$. Also $S(2 \mid 4{,}5)$.
  Plausibel: $a < 0$, also nach unten offen, und der Scheitel liegt über dem Punkt $(1 \mid 4)$.
```

```aufgabe
id: fu-anhalteweg
titel: Anhalteweg deuten
niveau: 2
lernziel: 2
kompetenz: modellieren
angabe: |
  Eine Faustformel für den Anhalteweg eines Autos auf trockener Straße lautet
  $$s(v) = 0{,}3\,v + 0{,}01\,v^2 \qquad (v \text{ in km/h},\ s \text{ in m}).$$
  Der lineare Teil $0{,}3\,v$ ist der Reaktionsweg, der quadratische Teil $0{,}01\,v^2$ der Bremsweg.

  a) Berechne den Anhalteweg bei $50$ km/h und bei $100$ km/h.

  b) Um welchen Faktor wächst der **Bremsweg**, wenn sich die Geschwindigkeit verdoppelt?
teile:
  - typ: zahl
    label: 'a) $s(50)$'
    einheit: m
    loesung: "0.3*50 + 0.01*50^2"
    anzeige: '40'
    fehler:
      - wert: "15"
        meldung: 'Das ist nur der Reaktionsweg. Dazu kommt der Bremsweg $0{,}01\cdot 50^2 = 25$ m.'
  - typ: zahl
    label: 'a) $s(100)$'
    einheit: m
    loesung: "0.3*100 + 0.01*100^2"
    anzeige: '130'
    fehler:
      - wert: "80"
        meldung: 'Der Anhalteweg verdoppelt sich nicht einfach. Der Bremsweg ist quadratisch: $0{,}01\cdot 100^2 = 100$ m.'
  - typ: zahl
    label: 'b) Faktor'
    loesung: "(0.01*100^2)/(0.01*50^2)"
    anzeige: '4'
    fehler:
      - wert: "2"
        meldung: 'Das gilt für den linearen Reaktionsweg. Beim Quadrat wird aus $2v$ das Quadrat $(2v)^2 = 4v^2$.'
hinweise:
  - 'Setze $v = 50$ und $v = 100$ ein und rechne beide Teile einzeln.'
  - 'Vergleiche $0{,}01\,(2v)^2$ mit $0{,}01\,v^2$.'
loesung: |
  **Ansatz:** Einsetzen in die Formel, beide Teile einzeln.
  ---
  a) $s(50) = 15 + 25 = 40$ m und $s(100) = 30 + 100 = 130$ m.
  ---
  b) Der Bremsweg ist $0{,}01\,v^2$. Bei $2v$ ist er $0{,}01\,(2v)^2 = 4\cdot 0{,}01\,v^2$. Er wächst also auf das Vierfache.
  ---
  **Deutung:** Wer doppelt so schnell fährt, braucht den vierfachen Bremsweg. Genau deshalb ist die quadratische Abhängigkeit im Straßenverkehr so gefährlich.
```

```aufgabe
id: fu-wurfbahn
titel: Wurfbahn
niveau: 3
lernziel: 2
kompetenz: anwenden
angabe: |
  Ein Ball wird geworfen. Seine Höhe über dem Boden ist $h(x) = -0{,}05x^2 + x + 2$ (in m). Dabei ist $x$ die
  waagrechte Entfernung vom Abwurfpunkt in m.

  a) Aus welcher Höhe wird der Ball abgeworfen?

  b) Bestimme die maximale Flughöhe und die Entfernung, in der sie erreicht wird.

  c) In welcher Entfernung trifft der Ball auf dem Boden auf? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    label: 'a) Abwurfhöhe'
    einheit: m
    loesung: "2"
    fehler:
      - wert: "0"
        meldung: 'Die Abwurfhöhe ist $h(0)$, also der Wert bei $x = 0$.'
  - typ: zahl
    label: 'b) Entfernung des höchsten Punkts'
    einheit: m
    loesung: "-1/(2*(-0.05))"
    anzeige: '10'
    fehler:
      - wert: "-10"
        meldung: '$x_S = -\tfrac{b}{2a} = -\tfrac{1}{2\cdot(-0{,}05)} = -\tfrac{1}{-0{,}1} = +10$.'
  - typ: zahl
    label: 'b) maximale Höhe'
    einheit: m
    loesung: "-0.05*10^2 + 10 + 2"
    anzeige: '7'
    fehler:
      - wert: "17"
        meldung: '$-0{,}05\cdot 10^2 = -5$, nicht $+5$.'
  - typ: zahl
    label: 'c) Auftreffpunkt'
    einheit: m
    loesung: "10 + sqrt(140)"
    anzeige: '10 + \sqrt{140} \approx 21{,}83'
    fehler:
      - wert: "10 - sqrt(140)"
        meldung: 'Diese Lösung ist negativ und liegt hinter dem Werfer. Sinnvoll ist nur die positive Lösung.'
hinweise:
  - 'Die Abwurfhöhe ist $h(0)$. Der höchste Punkt ist der Scheitel mit $x_S = -\tfrac{b}{2a}$.'
  - 'Für c) $h(x) = 0$ setzen. Aus der Scheitelform $h(x) = -0{,}05(x - 10)^2 + 7$ folgt $(x - 10)^2 = 140$.'
plot:
  x: [-2, 24]
  y: [-1, 8]
  achsen: { x: "x in m", y: "h in m" }
  graphen:
    - { f: "-0.05*x^2 + x + 2", von: 0, bis: 21.83 }
loesung: |
  **Ansatz:** Die Bahn ist eine nach unten offene Parabel. Abwurfhöhe ist der Wert bei $x = 0$, der höchste Punkt ist der Scheitel.
  a) $h(0) = 2$ m.
  ---
  b) Scheitel: $x_S = -\tfrac{1}{2\cdot(-0{,}05)} = 10$ m und $h(10) = -5 + 10 + 2 = 7$ m. Scheitelform: $h(x) = -0{,}05(x - 10)^2 + 7$.
  ---
  c) $-0{,}05(x - 10)^2 + 7 = 0$ ergibt $(x - 10)^2 = 140$, also $x = 10 \pm \sqrt{140}$.
  ---
  Sinnvoll ist nur $x = 10 + \sqrt{140} \approx 21{,}83$ m. Die andere Lösung $\approx -1{,}83$ liegt hinter dem Werfer.
  **Antwort:** Der Ball fliegt maximal $7$ m hoch und landet nach etwa $21{,}83$ m.
```

## Potenz- und Polynomfunktionen

```aufgabe
id: fu-pol-check-vorzeichen
titel: Vorzeichen einer Potenz
niveau: 1
art: check
angabe: |
  Welche der Zahlen $(-2)^4$, $(-2)^5$, $-2^4$ sind negativ?
  Herkunft: [1.9 Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln).
teile:
  - typ: auswahl
    mehrfach: true
    optionen: ['$(-2)^4$', '$(-2)^5$', '$-2^4$']
    richtig: [1, 2]
    fehler:
      - wert: [1]
        meldung: 'Bei $-2^4$ gehört das Minus nicht zur Basis. Es ist $-2^4 = -(2^4) = -16$.'
      - wert: [0, 1, 2]
        meldung: '$(-2)^4 = 16$: Eine gerade Anzahl von Minuszeichen ergibt plus.'
hinweise:
  - 'Zähle die Minuszeichen. Achte darauf, ob das Minus in der Klammer steht.'
loesung: |
  $(-2)^4 = 16$, denn vier Minuszeichen ergeben plus. $(-2)^5 = -32$, denn fünf Minuszeichen ergeben minus.
  ---
  $-2^4 = -(2^4) = -16$, denn die Hochzahl gehört nur zur $2$. Negativ sind also $(-2)^5$ und $-2^4$.
```

Polynome sind die Funktionen, die man allein mit Addieren und Multiplizieren bauen kann. Deshalb tauchen sie überall
auf, wo gerechnet wird, und sie sind die Hauptdarsteller der Kurvendiskussion in [9.13 Die vollständige Kurvendiskussion](/lernen/mathe3/differentialrechnung/die-vollstaendige-kurvendiskussion).
Ihre Bausteine sind die Potenzfunktionen.

### Potenzfunktionen

:::definition[Potenzfunktion]
Funktionen der Form $f(x) = a\,x^n$ mit $a \ne 0$ und einer ganzen Zahl $n$ heißen **Potenzfunktionen**. Für
negative $n$ ist $x^n = \dfrac{1}{x^{|n|}}$, und die Definitionsmenge ist $\R\setminus\{0\}$.
:::

Bei einer Potenzfunktion steht die Variable in der **Basis**, die Hochzahl ist fest. Das ist wichtig für später: Bei
$2^x$ ist es umgekehrt, dort steht die Variable in der Hochzahl. Das ist eine Exponentialfunktion, siehe
[4.10 Exponentialfunktionen](/lernen/mathe3/funktionen/exponentialfunktionen).

Die Hochzahl $n$ bestimmt die Gestalt. Es lohnt sich, die vier Grundtypen mit $a = 1$ sicher skizzieren zu können.

| Typ | Beispiele | Symmetrie | Verhalten |
|---|---|---|---|
| $n$ gerade und positiv | $x^2$, $x^4$ | gerade. | Für große $\lvert x\rvert$ geht der Wert nach $+\infty$. |
| $n$ ungerade und positiv | $x$, $x^3$ | ungerade. | Links nach $-\infty$, rechts nach $+\infty$. |
| $n$ gerade und negativ | $x^{-2} = \tfrac{1}{x^2}$ | gerade. | Bei $0$ nicht definiert, dort werden die Werte beliebig groß. Beide Äste liegen über der $x$-Achse. |
| $n$ ungerade und negativ | $x^{-1} = \tfrac1x$ | ungerade. | Bei $0$ nicht definiert. Links davon negativ, rechts positiv. |

```plot
x: [-2, 2]
y: [-3, 3]
gleich: true
graphen:
  - { f: "x^2", label: "x²", farbe: 0 }
  - { f: "x^3", label: "x³", farbe: 1 }
  - { f: "x^4", label: "x⁴", farbe: 2, gestrichelt: true }
  - { f: "1/x", label: "1/x", farbe: 3 }
beschriftung: Die Potenzfunktionen x², x³, x⁴ und 1/x gehen alle durch den Punkt (1 | 1). Höhere Potenzen sind zwischen −1 und 1 flacher und außerhalb steiler.
```

Eine Beobachtung, die in Skizzen oft falsch gemacht wird: Für $|x| < 1$ ist $x^4 < x^2$. Zum Beispiel ist
$0{,}5^4 = 0{,}0625$ und $0{,}5^2 = 0{,}25$. Für $|x| > 1$ ist es umgekehrt, etwa $2^4 = 16 > 4 = 2^2$. Höhere
Potenzen liegen also nahe $0$ enger an der $x$-Achse und wachsen dafür außen schneller.

Auch Wurzeln sind Potenzen, nämlich mit einer Bruchzahl als Hochzahl: $\sqrt{x} = x^{1/2}$ und $\sqrt[3]{x} = x^{1/3}$.
Die Rechenregeln dafür stehen in [1.10 Potenzen mit rationalen Hochzahlen](/lernen/mathe3/zahlen/potenzen-mit-rationalen-hochzahlen). Die Wurzelfunktionen behandelt
[4.6 Rationale Funktionen und Wurzelfunktionen](/lernen/mathe3/funktionen/rationale-funktionen-und-wurzelfunktionen).

### Polynomfunktionen

:::definition[Polynomfunktion]
Eine Funktion der Form
$$f(x) = a_n x^n + a_{n-1}x^{n-1} + \dots + a_1 x + a_0 \qquad (a_n \ne 0)$$
heißt **Polynomfunktion** oder ganzrationale Funktion vom **Grad** $n$. Die Zahlen $a_0, \dots, a_n$ heißen
**Koeffizienten**, $a_n$ heißt **Leitkoeffizient** und $a_n x^n$ der **Leitterm**. Die Definitionsmenge ist ganz $\R$.
:::

Beispiele: $f(x) = 2x^3 - x + 7$ ist ein Polynom vom Grad $3$ mit Leitkoeffizient $2$. Lineare Funktionen ($n = 1$) und
quadratische Funktionen ($n = 2$) sind Polynome. **Keine** Polynome sind $\sqrt{x}$, $\tfrac1x$ und $2^x$. Bei einem
Polynom sind alle Hochzahlen natürliche Zahlen, und die Variable steht nie in einer Hochzahl oder einem Nenner.

:::satz[Eigenschaften von Polynomfunktionen]
Sei $f$ ein Polynom vom Grad $n \ge 1$.
1. **Nullstellen:** $f$ hat höchstens $n$ reelle Nullstellen.
2. **Linearfaktor abspalten:** Ist $x_1$ eine Nullstelle, dann gilt $f(x) = (x - x_1)\cdot g(x)$ mit einem Polynom
   $g$ vom Grad $n - 1$.
3. **Verhalten im Unendlichen:** Für betragsmäßig große $x$ verhält sich $f(x)$ wie der Leitterm $a_n x^n$.
:::

Punkt 1 folgt aus Punkt 2. Jede Nullstelle liefert einen Linearfaktor, und mit jedem abgespaltenen Faktor sinkt der Grad
um $1$. Nach $n$ Schritten bleibt nur eine Konstante übrig, und die hat keine Nullstelle mehr.

Punkt 3 sieht man durch Herausheben des Leitterms:
$$f(x) = a_n x^n\left(1 + \frac{a_{n-1}}{a_n\,x} + \dots + \frac{a_0}{a_n\,x^n}\right).$$
Für betragsmäßig große $x$ werden alle Brüche in der Klammer sehr klein. Die Klammer ist dann fast $1$.

:::beispiel[Verhalten im Unendlichen]
$f(x) = -x^3 + 6x^2 + 1$ hat den Leitterm $-x^3$.

1. Für große positive $x$ ist $x^3$ groß und positiv, also $-x^3$ groß und negativ: $f(x)$ geht nach $-\infty$.
2. Für große negative $x$ ist $x^3$ negativ, also $-x^3$ positiv: $f(x)$ geht nach $+\infty$.
3. Der Graph kommt also von links oben und läuft nach rechts unten.

Daraus folgt eine wichtige Tatsache: **Ein Polynom ungeraden Grades hat mindestens eine reelle Nullstelle.** Es kommt
von der einen Seite der $x$-Achse und läuft zur anderen. Dazwischen muss es die Achse kreuzen. Exakt begründet das der
Nullstellensatz in [12.11 Zwischenwertsatz, Nullstellensatz und Bisektion](/lernen/mathe3/grenzwerte-stetigkeit/zwischenwertsatz-nullstellensatz-und-bisektion).
:::

:::achtung[Große Koeffizienten entscheiden nicht]
Eine typische Fehlüberlegung bei $f(x) = -x^3 + 50x^2$: „Für große $x$ geht $f(x)$ nach $+\infty$, weil $50$ viel
größer ist als $1$.“ Das stimmt nur eine Zeit lang. Bei $x = 50$ ist $f(50) = -125\,000 + 125\,000 = 0$, und für
$x = 100$ ist $f(100) = -1\,000\,000 + 500\,000 = -500\,000$. **Richtig:** Für große $x$ entscheidet allein der
Leitterm $-x^3$, und $f(x)$ geht nach $-\infty$. Ein großer Koeffizient bei einer kleineren Potenz verzögert das nur.
:::

### Nullstellen von Polynomen finden

:::beispiel[Herausheben]
$f(x) = x^3 - x^2 - 6x$. Jedes Glied enthält $x$. Wir heben $x$ heraus: $f(x) = x\,(x^2 - x - 6)$. Die Klammer
zerlegen wir mit der Lösungsformel oder durch Probieren: $x^2 - x - 6 = (x - 3)(x + 2)$. Also
$f(x) = x\,(x - 3)(x + 2)$. Ein Produkt ist null, wenn ein Faktor null ist. Die Nullstellen sind $-2$, $0$ und $3$.
:::

:::beispiel[Substitution bei einem biquadratischen Polynom]
$f(x) = x^4 - 13x^2 + 36$. Hier kommen nur $x^4$ und $x^2$ vor. Wir setzen $u = x^2$, dann ist $x^4 = u^2$:
$$u^2 - 13u + 36 = 0 \quad\text{mit den Lösungen}\quad u = 4 \text{ und } u = 9.$$
Jetzt folgt die **Rücksubstitution**, denn gesucht ist $x$ und nicht $u$. Aus $x^2 = 4$ folgt $x = \pm 2$, aus $x^2 = 9$
folgt $x = \pm 3$. Das Polynom hat die vier Nullstellen $-3$, $-2$, $2$ und $3$. Es ist gerade, deshalb liegen die
Nullstellen symmetrisch zu $0$.
:::

:::beispiel[Nullstelle erraten und abspalten]
$f(x) = x^3 - 2x^2 - 5x + 6$. Bei ganzzahligen Koeffizienten und Leitkoeffizient $1$ ist jede ganzzahlige Nullstelle ein
Teiler des konstanten Glieds $6$. Wir probieren: $f(1) = 1 - 2 - 5 + 6 = 0$. Also ist $1$ eine Nullstelle, und wir
spalten $(x - 1)$ durch Polynomdivision ab:
$$(x^3 - 2x^2 - 5x + 6) : (x - 1) = x^2 - x - 6 = (x - 3)(x + 2).$$
Nullstellen: $-2$, $1$ und $3$. Linearfaktorzerlegung: $f(x) = (x - 1)(x - 3)(x + 2)$. Wie die Polynomdivision Schritt
für Schritt geht, zeigt [2.5 Gleichungen höheren Grades](/lernen/mathe3/gleichungen/gleichungen-hoeheren-grades).
:::

:::achtung[Negative Lösung der Substitution nicht verworfen]
Eine typische Fehlrechnung bei $x^4 + 3x^2 - 4 = 0$: Mit $u = x^2$ wird daraus $u^2 + 3u - 4 = 0$, also $u = 1$ oder
$u = -4$. Dann wird geschrieben: „$x = \pm 1$ und $x = \pm 2$“. Das ist falsch. Aus $x^2 = -4$ folgt **keine** reelle
Lösung, denn ein Quadrat ist nie negativ. Und aus $u = -4$ wird schon gar nicht $x = \pm 2$. **Richtig:** Nur
$x^2 = 1$ liefert Lösungen, also $x = \pm 1$. Probe: $(\pm 2)^4 + 3\cdot 4 - 4 = 24 \ne 0$.
:::

:::merke[Nullstellen eines Polynoms finden]
1. **Herausheben**, wenn jedes Glied ein $x$ enthält. Dann ist $x = 0$ eine Nullstelle.
2. **Substitution** $u = x^2$, wenn nur $x^4$, $x^2$ und eine Konstante vorkommen. Danach rücksubstituieren und
   negative $u$ verwerfen.
3. **Raten und abspalten:** Teiler des konstanten Glieds probieren, dann Polynomdivision oder Horner-Schema.
4. Für den quadratischen Rest die Lösungsformel. Zum Schluss die Probe.
:::

### Vielfachheit von Nullstellen

Kommt ein Linearfaktor $(x - x_1)$ in der Zerlegung genau $k$-mal vor, heißt $x_1$ eine **$k$-fache Nullstelle**. Am
Graphen sieht man den Unterschied:

- **Ungerade Vielfachheit** (einfach, dreifach): Der Graph **schneidet** die $x$-Achse. $f$ wechselt dort das
  Vorzeichen.
- **Gerade Vielfachheit** (doppelt, vierfach): Der Graph **berührt** die $x$-Achse. Es gibt keinen Vorzeichenwechsel.

Der Grund: Ein Faktor $(x - x_1)^2$ ist auf beiden Seiten von $x_1$ positiv. Ein Faktor $(x - x_1)$ ist links negativ
und rechts positiv.

```plot
x: [-2.5, 3.5]
y: [-6, 8]
graphen:
  - { f: "(x+1)^2*(x-2)", label: "(x + 1)²(x − 2)", farbe: 0 }
punkte:
  - { x: -1, y: 0, label: "doppelt: berührt" }
  - { x: 2, y: 0, label: "einfach: schneidet" }
  - { x: 0, y: -2, label: "f(0) = −2" }
beschriftung: Bei der doppelten Nullstelle −1 berührt der Graph die x-Achse, bei der einfachen Nullstelle 2 schneidet er sie.
```

:::tipp[Skizze ohne Wertetabelle]
Mit Nullstellen, Vielfachheiten, Leitterm und $f(0)$ kann man ein zerlegtes Polynom skizzieren. Am Beispiel
$(x + 1)^2(x - 2)$: Der Leitterm ist $x^3$, also endet der Graph rechts oben. Bei $2$ schneidet er die Achse, bei $-1$
berührt er sie. Durch $(0 \mid -2)$ geht er auch. Das genügt für eine korrekte Skizze.
:::

```reflexion
frage: Warum kann ein Polynom vom Grad 4 nicht fünf Nullstellen haben? Erkläre es mit dem Abspalten von Linearfaktoren.
antwort: |
  Zu jeder Nullstelle $x_1$ kann man einen Linearfaktor $(x - x_1)$ abspalten. Der Rest ist ein Polynom, dessen Grad
  um $1$ kleiner ist. Hätte ein Polynom vom Grad $4$ fünf verschiedene Nullstellen, könnte man fünf Linearfaktoren
  abspalten. Das Produkt dieser fünf Faktoren hat aber schon Grad $5$. Ein Polynom vom Grad $4$ kann keinen Faktor vom
  Grad $5$ enthalten. Also hat es höchstens vier Nullstellen.
```

```aufgabe
id: fu-polynom-nullstellen
titel: Nullstellen durch Herausheben
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Bestimme alle Nullstellen von $f(x) = 2x^3 - 8x$.
teile:
  - typ: menge
    label: 'Nullstellen'
    loesung: ["-2", "0", "2"]
    fehler:
      - wert: ["-2", "2"]
        meldung: 'Der herausgehobene Faktor $2x$ ist auch null, nämlich für $x = 0$. Diese Nullstelle fehlt.'
      - wert: ["2"]
        meldung: 'Aus $x^2 = 4$ folgen zwei Lösungen, $2$ und $-2$. Außerdem liefert $2x = 0$ die Nullstelle $0$.'
hinweise:
  - 'Hebe $2x$ heraus. Im Rest steckt die dritte binomische Formel.'
loesung: |
  **Ansatz:** Jedes Glied enthält $2x$. Herausheben: $f(x) = 2x(x^2 - 4) = 2x(x - 2)(x + 2)$.
  ---
  Ein Produkt ist null, wenn ein Faktor null ist: $x = 0$, $x = 2$ oder $x = -2$.
  Kontrolle: $f$ ist ungerade (nur ungerade Hochzahlen), die Nullstellen liegen symmetrisch zu $0$.
```

```aufgabe
id: fu-potenz-vergleich
titel: Wann ist x⁴ kleiner als x²?
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  Für welche reellen Zahlen $x$ gilt $x^4 < x^2$?
teile:
  - typ: auswahl
    optionen:
      - 'für alle $x \ne 0$'
      - 'für $-1 < x < 1$ mit $x \ne 0$'
      - 'für $|x| > 1$'
      - 'für kein $x$'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Prüfe $x = 2$: $2^4 = 16$ ist größer als $2^2 = 4$.'
      - wert: 2
        meldung: 'Für $|x| > 1$ ist $x^4$ größer, nicht kleiner. Prüfe $x = 0{,}5$.'
      - wert: 3
        meldung: 'Prüfe $x = 0{,}5$: $0{,}0625 < 0{,}25$.'
hinweise:
  - 'Teste $x = 0{,}5$ und $x = 2$. Für $x \ne 0$ darfst du durch $x^2 > 0$ dividieren.'
loesung: |
  **Ansatz:** Für $x \ne 0$ ist $x^2 > 0$. Wir dividieren beide Seiten von $x^4 < x^2$ durch $x^2$ und erhalten $x^2 < 1$.
  ---
  $x^2 < 1$ gilt genau für $-1 < x < 1$. Für $x = 0$ sind beide Seiten $0$, die Ungleichung ist dann falsch.
  Also gilt $x^4 < x^2$ genau für $-1 < x < 1$ mit $x \ne 0$. Probe: $0{,}5^4 = 0{,}0625 < 0{,}25 = 0{,}5^2$.
```

```aufgabe
id: fu-verhalten-unendlich
titel: Verhalten im Unendlichen
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  Wie verhält sich $f(x) = -2x^5 + 100x^4 + 3$ für $x \to +\infty$ und für $x \to -\infty$?
teile:
  - typ: auswahl
    optionen:
      - '$x \to +\infty$: $f(x) \to +\infty$; $x \to -\infty$: $f(x) \to -\infty$'
      - '$x \to +\infty$: $f(x) \to -\infty$; $x \to -\infty$: $f(x) \to +\infty$'
      - '$x \to \pm\infty$: $f(x) \to +\infty$'
      - '$x \to \pm\infty$: $f(x) \to -\infty$'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Der große Koeffizient $100$ gehört zu einer kleineren Potenz. Entscheidend ist der Leitterm $-2x^5$ mit negativem Vorzeichen.'
      - wert: 2
        meldung: 'Gleiches Verhalten auf beiden Seiten gibt es nur bei geradem Grad. Hier ist der Grad $5$.'
      - wert: 3
        meldung: 'Für $x \to -\infty$ ist $x^5$ negativ, also $-2x^5$ positiv.'
hinweise:
  - 'Nur der Term mit der höchsten Potenz zählt, egal wie groß die anderen Koeffizienten sind.'
loesung: |
  **Ansatz:** Für betragsmäßig große $x$ verhält sich ein Polynom wie sein Leitterm, hier $-2x^5$.
  ---
  Für große positive $x$ ist $x^5$ positiv, also $-2x^5 \to -\infty$. Für große negative $x$ ist $x^5$ negativ, also $-2x^5 \to +\infty$.
  ---
  Der Koeffizient $100$ verzögert das nur. Bei $x = 10$ ist $f(10) = -200\,000 + 1\,000\,000 + 3 > 0$, aber für $x > 50$ überwiegt $-2x^5$. Bei $x = 50$ heben sich die beiden Terme genau auf.
```

```aufgabe
id: fu-biquadratisch
titel: Biquadratisches Polynom
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Bestimme alle reellen Nullstellen von $f(x) = x^4 - 5x^2 + 4$ und gib die Linearfaktorzerlegung an.
teile:
  - typ: menge
    label: 'Nullstellen'
    loesung: ["-2", "-1", "1", "2"]
    fehler:
      - wert: ["1", "4"]
        meldung: 'Das sind die Lösungen für $u = x^2$. Es fehlt die Rücksubstitution: $x^2 = 1$ und $x^2 = 4$.'
      - wert: ["1", "2"]
        meldung: 'Aus $x^2 = 1$ folgt auch $x = -1$, aus $x^2 = 4$ auch $x = -2$.'
  - typ: term
    label: '$f(x)$ als Produkt'
    loesung: "(x-1)*(x+1)*(x-2)*(x+2)"
    fehler:
      - wert: "(x-1)*(x-4)"
        meldung: 'Das ist die Zerlegung in $u$, also $(u - 1)(u - 4)$ mit $u = x$ statt $u = x^2$. Ersetze $u$ durch $x^2$ und zerlege weiter.'
hinweise:
  - 'Substituiere $u = x^2$. Dann entsteht $u^2 - 5u + 4 = 0$.'
  - 'Rücksubstitution: Jedes positive $u$ liefert zwei Lösungen $x = \pm\sqrt u$.'
loesung: |
  **Ansatz:** Nur $x^4$, $x^2$ und eine Konstante: Substitution $u = x^2$ ergibt $u^2 - 5u + 4 = 0$, also $(u - 1)(u - 4) = 0$ und $u = 1$ oder $u = 4$.
  ---
  Rücksubstitution: $x^2 = 1$ ergibt $x = \pm 1$, $x^2 = 4$ ergibt $x = \pm 2$.
  ---
  Zerlegung: $f(x) = (x^2 - 1)(x^2 - 4) = (x - 1)(x + 1)(x - 2)(x + 2)$. Probe: $f(2) = 16 - 20 + 4 = 0$.
gefuehrt:
  - text: 'Setze $u = x^2$. Welche quadratische Gleichung in $u$ entsteht? Gib die linke Seite an.'
    teil: { typ: term, variable: u, loesung: "u^2 - 5u + 4" }
    erklaerung: '$x^4 = (x^2)^2 = u^2$, also $u^2 - 5u + 4 = 0$.'
  - text: 'Löse die Gleichung in $u$. Gib beide Lösungen an.'
    teil: { typ: menge, loesung: ["1", "4"] }
    erklaerung: '$(u - 1)(u - 4) = 0$, also $u = 1$ oder $u = 4$.'
  - text: 'Rücksubstitution: Welche $x$ gehören zu $u = 4$?'
    teil: { typ: menge, loesung: ["2", "-2"], fehler: [ { wert: ["2"], meldung: 'Auch $(-2)^2 = 4$. Es gibt zwei Lösungen.' } ] }
    erklaerung: '$x^2 = 4$ ergibt $x = 2$ oder $x = -2$. Genauso ergibt $u = 1$ die Werte $x = \pm 1$.'
```

```aufgabe
id: fu-polynomdivision
titel: Nullstelle erraten und abspalten
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Gegeben ist $f(x) = x^3 + 2x^2 - 5x - 6$. Errate eine ganzzahlige Nullstelle, spalte sie ab und bestimme alle Nullstellen.
teile:
  - typ: menge
    label: 'Nullstellen'
    loesung: ["-3", "-1", "2"]
    fehler:
      - wert: ["3", "1", "-2"]
        meldung: 'Alle Vorzeichen sind vertauscht. Prüfe: $f(1) = 1 + 2 - 5 - 6 = -8 \ne 0$.'
      - wert: ["-1"]
        meldung: 'Nach dem Abspalten bleibt ein quadratischer Rest. Er liefert zwei weitere Nullstellen.'
hinweise:
  - 'Ganzzahlige Nullstellen müssen Teiler von $-6$ sein: $\pm1, \pm2, \pm3, \pm6$.'
  - 'Probiere $x = -1$. Dann dividiere durch $(x + 1)$ und löse den quadratischen Rest.'
loesung: |
  **Ansatz:** Teiler des konstanten Glieds probieren. $f(-1) = -1 + 2 + 5 - 6 = 0$. Also ist $x_1 = -1$ eine Nullstelle.
  ---
  Horner-Schema mit $-1$: Aus den Koeffizienten $1, 2, -5, -6$ werden $1, 1, -6$ mit Rest $0$. Also $f(x) = (x + 1)(x^2 + x - 6)$.
  ---
  $x^2 + x - 6 = (x + 3)(x - 2)$ hat die Nullstellen $-3$ und $2$.
  ---
  Ergebnis: Nullstellen $-3$, $-1$, $2$ und $f(x) = (x + 1)(x + 3)(x - 2)$. Probe: $f(2) = 8 + 8 - 10 - 6 = 0$.
```

```aufgabe
id: fu-polynom-konstruieren
titel: Polynom mit vorgegebenen Nullstellen
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Gesucht ist eine Polynomfunktion dritten Grades mit den Nullstellen $-1$, $2$ und $4$, deren Graph die $y$-Achse bei
  $4$ schneidet. Gib den Funktionsterm an.
teile:
  - typ: term
    label: '$f(x)$'
    loesung: "0.5*(x+1)*(x-2)*(x-4)"
    fehler:
      - wert: "(x+1)*(x-2)*(x-4)"
        meldung: 'Dieser Term hat die richtigen Nullstellen, aber $f(0) = 8$. Es fehlt ein Faktor $a$ davor.'
      - wert: "0.5*(x-1)*(x+2)*(x+4)"
        meldung: 'Eine Nullstelle $-1$ gehört zum Faktor $(x + 1)$, nicht $(x - 1)$.'
hinweise:
  - 'Ansatz in Produktform: $f(x) = a(x + 1)(x - 2)(x - 4)$.'
  - 'Die Bedingung $f(0) = 4$ liefert eine Gleichung für $a$.'
loesung: |
  **Ansatz:** Jede Wahl $a \ne 0$ in $f(x) = a(x + 1)(x - 2)(x - 4)$ hat genau diese Nullstellen. Der Wert $a$ wird durch den $y$-Achsenabschnitt festgelegt.
  ---
  $f(0) = a\cdot 1\cdot(-2)\cdot(-4) = 8a = 4$, also $a = \tfrac12$.
  ---
  $f(x) = \tfrac12(x + 1)(x - 2)(x - 4)$. Ausmultipliziert ist das $\tfrac12 x^3 - \tfrac52 x^2 + x + 4$. Probe: $f(0) = 4$.
```

```aufgabe
id: fu-vielfachheit-graph
titel: Welcher Term passt zum Graphen?
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: |
  Der Graph gehört zu einem Polynom dritten Grades. Er schneidet die $x$-Achse bei $-2$, berührt sie bei $1$ und
  geht durch $(0 \mid -2)$. Für große $x$ fällt er. Welcher Term passt?
plot:
  x: [-3, 3]
  y: [-6, 6]
  graphen:
    - { f: "-(x+2)*(x-1)^2" }
  punkte:
    - { x: -2, y: 0 }
    - { x: 1, y: 0 }
    - { x: 0, y: -2 }
teile:
  - typ: auswahl
    optionen:
      - '$(x + 2)(x - 1)^2$'
      - '$-(x + 2)(x - 1)^2$'
      - '$-(x + 2)^2(x - 1)$'
      - '$-(x - 2)(x + 1)^2$'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Dieser Term hat den Leitterm $+x^3$ und steigt für große $x$. Außerdem wäre $f(0) = 2$.'
      - wert: 2
        meldung: 'Hier wäre $-2$ die doppelte Nullstelle. Der Graph berührt die Achse aber bei $1$.'
      - wert: 3
        meldung: 'Dieser Term hat die Nullstellen $2$ und $-1$. Prüfe die Vorzeichen in den Klammern.'
hinweise:
  - 'Berühren heißt doppelte Nullstelle, schneiden heißt einfache.'
  - 'Prüfe zum Schluss das Vorzeichen des Leitterms und den Wert bei $x = 0$.'
loesung: |
  **Ansatz:** Aus dem Bild lesen wir drei Dinge ab: Nullstellen mit Vielfachheit, Verhalten für große $x$ und den Wert bei $0$.
  ---
  Schneiden bei $-2$: einfacher Faktor $(x + 2)$. Berühren bei $1$: doppelter Faktor $(x - 1)^2$.
  ---
  Fallen für große $x$: Der Leitterm muss negativ sein, also steht ein Minus davor. Probe: $-(0 + 2)(0 - 1)^2 = -2$. Es passt $-(x + 2)(x - 1)^2$.
```

```aufgabe
id: fu-polynom-untersuchen
titel: Ein Polynom ohne Hilfe untersuchen
niveau: 3
lernziel: 3
kompetenz: rechnen
angabe: |
  Gegeben ist $f(x) = x^3 - 3x^2 - 4x + 12$.

  a) Bestimme alle Nullstellen. Tipp: Fasse die ersten zwei und die letzten zwei Glieder zusammen.

  b) Gib $f(0)$ an und beschreibe das Verhalten für $x \to \pm\infty$.

  c) Auf welchen Bereichen ist $f(x) > 0$?
teile:
  - typ: menge
    label: 'a) Nullstellen'
    loesung: ["-2", "2", "3"]
    fehler:
      - wert: ["3"]
        meldung: 'Der Faktor $x^2 - 4$ liefert noch zwei weitere Nullstellen, nämlich $2$ und $-2$.'
      - wert: ["-3", "-2", "2"]
        meldung: 'Aus $x - 3 = 0$ folgt $x = 3$. Probe: $f(3) = 27 - 27 - 12 + 12 = 0$.'
  - typ: zahl
    label: 'b) $f(0)$'
    loesung: "12"
    fehler:
      - wert: "0"
        meldung: '$0$ ist keine Nullstelle, denn das konstante Glied ist $12$.'
  - typ: text
    label: 'b) Verhalten im Unendlichen'
    muster: 'Der Leitterm ist $x^3$. Für $x \to +\infty$ geht $f(x) \to +\infty$, für $x \to -\infty$ geht $f(x) \to -\infty$.'
  - typ: auswahl
    label: 'c) $f(x) > 0$ für'
    optionen:
      - '$-2 < x < 2$ und $x > 3$'
      - '$x < -2$ und $2 < x < 3$'
      - '$x > 3$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Prüfe $x = 0$: $f(0) = 12 > 0$. Die Null liegt aber nicht im angegebenen Bereich.'
      - wert: 2
        meldung: 'Auch zwischen $-2$ und $2$ ist $f$ positiv, etwa $f(0) = 12$.'
hinweise:
  - '$x^3 - 3x^2 = x^2(x - 3)$ und $-4x + 12 = -4(x - 3)$. Welcher Faktor ist beiden gemeinsam?'
  - 'Bei drei einfachen Nullstellen wechselt das Vorzeichen jedes Mal. Beginne rechts mit dem Vorzeichen des Leitterms.'
loesung: |
  **Ansatz:** Gruppieren, damit ein gemeinsamer Faktor sichtbar wird. $f(x) = x^2(x - 3) - 4(x - 3) = (x - 3)(x^2 - 4) = (x - 3)(x - 2)(x + 2)$.
  ---
  a) Nullstellen $-2$, $2$ und $3$, alle einfach.
  ---
  b) $f(0) = 12$. Der Leitterm $x^3$ zeigt: links nach $-\infty$, rechts nach $+\infty$.
  ---
  c) Rechts von $3$ ist $f$ positiv (Leitterm). An jeder einfachen Nullstelle wechselt das Vorzeichen: Zwischen $2$ und $3$ negativ, zwischen $-2$ und $2$ positiv, links von $-2$ negativ.
  **Antwort:** $f(x) > 0$ für $-2 < x < 2$ und für $x > 3$. Probe: $f(0) = 12 > 0$ und $f(2{,}5) = -0{,}5\cdot 0{,}5\cdot 4{,}5 < 0$.
```

## Rationale Funktionen und Wurzelfunktionen

```aufgabe
id: fu-rat-check-kuerzen
titel: Einen Bruchterm kürzen
niveau: 1
art: check
angabe: |
  Kürze den Bruchterm $\dfrac{x^2 - 9}{x - 3}$ für $x \ne 3$.
  Herkunft: [1.13 Bruchterme](/lernen/mathe3/zahlen/bruchterme).
teile:
  - typ: term
    label: 'gekürzt'
    loesung: "x + 3"
    fehler:
      - wert: "x - 3"
        meldung: 'Nach der dritten binomischen Formel ist $x^2 - 9 = (x - 3)(x + 3)$. Gekürzt wird der gemeinsame Faktor $(x - 3)$.'
      - wert: "x + 3/x"
        meldung: 'Nur gemeinsame **Faktoren** darf man kürzen. Zerlege $x^2 - 9$ mit der dritten binomischen Formel.'
hinweise:
  - 'Dritte binomische Formel: $a^2 - b^2 = (a - b)(a + b)$.'
loesung: |
  Der Zähler ist eine dritte binomische Formel: $x^2 - 9 = (x - 3)(x + 3)$.
  ---
  Für $x \ne 3$ kürzen wir den gemeinsamen Faktor $(x - 3)$: $\dfrac{(x - 3)(x + 3)}{x - 3} = x + 3$.
```

Teilt man ein Polynom durch ein anderes, entsteht eine **rationale Funktion**. Das Wort „rational“ kommt vom
lateinischen *ratio*, „Verhältnis“, wie bei den rationalen Zahlen, den Brüchen. Rationale Funktionen haben zwei neue
Eigenschaften, die Polynome nicht haben. Erstens können sie an einzelnen Stellen nicht definiert sein. Zweitens kann
sich ihr Graph einer Geraden immer weiter annähern, ohne sie zu erreichen.

### Rationale Funktionen und ihre Lücken

:::definition[Rationale Funktion]
Ein Quotient zweier Polynome
$$f(x) = \frac{p(x)}{q(x)}$$
heißt **rationale Funktion** (auch gebrochenrationale Funktion). Ihre Definitionsmenge ist $\R$ ohne die Nullstellen
des Nenners $q$. Diese ausgeschlossenen Stellen heißen **Definitionslücken**.
:::

Beispiele sind $\tfrac1x$, $\tfrac{2x + 1}{x - 3}$ und $\tfrac{x^2 - 4}{x^2 + 1}$. **Keine** rationale Funktion ist
$\tfrac{\sqrt x}{x + 1}$, denn $\sqrt x$ ist kein Polynom. An einer Definitionslücke $x_0$ kann zweierlei passieren.

:::satz[Polstelle oder hebbare Lücke]
Sei $q(x_0) = 0$. Man kürzt zuerst alle gemeinsamen Linearfaktoren von Zähler und Nenner.

- Bleibt $x_0$ danach Nullstelle des **Nenners**, ist $x_0$ eine **Polstelle**. Der Betrag $|f(x)|$ wird bei
  Annäherung an $x_0$ beliebig groß. Der Graph hat dort eine **senkrechte Asymptote** $x = x_0$. Eine **Asymptote** ist
  eine Gerade, der sich der Graph beliebig nahe anschmiegt.
- Verschwindet $x_0$ durch das Kürzen aus dem Nenner, ist $x_0$ eine **hebbare Lücke**. Der Graph ist eine gewöhnliche
  Kurve, aus der genau ein Punkt fehlt.
:::

:::beispiel[Polstelle und hebbare Lücke]
$$f(x) = \frac{x^2 - 4}{x^2 - x - 2} = \frac{(x - 2)(x + 2)}{(x - 2)(x + 1)}, \qquad D = \R \setminus \{-1, 2\}.$$
Für $x \ne 2$ dürfen wir kürzen: $f(x) = \dfrac{x + 2}{x + 1}$.

- $x = -1$ bleibt Nullstelle des Nenners. Das ist eine **Polstelle**. Links davon ist $f$ stark negativ, rechts stark
  positiv. Der Grund: Der einfache Faktor $(x + 1)$ wechselt dort sein Vorzeichen.
- $x = 2$ ist **hebbar**. Der gekürzte Term hätte dort den Wert $\tfrac43$. Dem Graphen fehlt der Punkt
  $(2 \mid \tfrac43)$. Man zeichnet ihn als leeren Kreis.
- Die einzige Nullstelle ist $x = -2$. Die Stelle $x = 2$ ist **keine** Nullstelle, obwohl dort der ursprüngliche
  Zähler null ist. Denn $2$ liegt nicht in $D$.
:::

```plot
x: [-6, 6]
y: [-6, 8]
graphen:
  - { f: "(x+2)/(x+1)", label: "f(x)", farbe: 0 }
  - { f: "1", label: "y = 1", farbe: 2, gestrichelt: true }
strecken:
  - { von: [-1, -6], nach: [-1, 8], gestrichelt: true, farbe: 1 }
punkte:
  - { x: 2, y: "4/3", label: "Lücke (2 | 4/3)", offen: true }
  - { x: -2, y: 0, label: "Nullstelle −2" }
beschriftung: Graph von f(x) = (x² − 4)/(x² − x − 2) mit der Polstelle x = −1 (senkrechte Asymptote), der waagrechten Asymptote y = 1 und der hebbaren Lücke bei x = 2.
```

:::achtung[Eine hebbare Lücke ist keine Nullstelle]
Eine typische Fehlrechnung bei $g(x) = \dfrac{x^2 - 4}{x - 2}$: „Der Zähler ist bei $x = 2$ null, also ist $2$ eine
Nullstelle.“ Das ist falsch. Bei $x = 2$ ist auch der Nenner null, und $\tfrac00$ ist nicht definiert. **Richtig:**
Für $x \ne 2$ ist $g(x) = x + 2$. Die Stelle $2$ ist eine hebbare Lücke, der Graph ist die Gerade $y = x + 2$ ohne den
Punkt $(2 \mid 4)$. Die einzige Nullstelle ist $-2$.
:::

### Asymptoten im Unendlichen

Was passiert mit $\tfrac{p(x)}{q(x)}$, wenn $x$ sehr groß wird? Zähler und Nenner verhalten sich dann wie ihre
**Leitterme**. Entscheidend ist also, welcher Grad größer ist. Wir schreiben $m$ für den Grad des Zählers und $n$ für
den Grad des Nenners.

:::beispiel[Waagrechte Asymptote bei gleichem Grad]
$f(x) = \dfrac{2x + 1}{x - 3}$. Wir heben in Zähler und Nenner $x$ heraus und kürzen:
$$\frac{2x + 1}{x - 3} = \frac{x\,(2 + \frac1x)}{x\,(1 - \frac3x)} = \frac{2 + \frac1x}{1 - \frac3x}.$$
Für große $|x|$ werden $\tfrac1x$ und $\tfrac3x$ sehr klein. Der Bruch nähert sich $\tfrac{2}{1} = 2$. Die Gerade
$y = 2$ ist eine **waagrechte Asymptote**. Probe mit einer großen Zahl: $f(1000) = \tfrac{2001}{997} \approx 2{,}007$.
Die genaue Grenzwertrechnung zeigt [12.7 Grenzwerte im Unendlichen und Asymptoten](/lernen/mathe3/grenzwerte-stetigkeit/grenzwerte-im-unendlichen-und-asymptoten).
:::

Ist der Zählergrad um genau $1$ größer, nähert sich der Graph einer schrägen Geraden. Diese Gerade findet man mit der
**Polynomdivision**: Man teilt den Zähler durch den Nenner wie bei einer schriftlichen Division. Was übrig bleibt, ist
ein Rest mit kleinerem Grad als der Nenner. Dieser Rest geteilt durch den Nenner wird für große $|x|$ beliebig klein.

:::beispiel[Schräge Asymptote mit Polynomdivision]
$f(x) = \dfrac{2x^2 + 3x - 1}{x + 2}$. Der Zähler hat Grad $2$, der Nenner Grad $1$.

1. Erster Schritt der Division: $2x^2 : x = 2x$. Wir multiplizieren zurück: $2x\cdot(x + 2) = 2x^2 + 4x$. Abziehen vom
   Zähler lässt $3x - 4x - 1 = -x - 1$ übrig.
2. Zweiter Schritt: $-x : x = -1$. Zurückmultiplizieren: $-1\cdot(x + 2) = -x - 2$. Abziehen lässt
   $-x - 1 - (-x - 2) = 1$ übrig. Das ist der Rest.
3. Ergebnis: $(2x^2 + 3x - 1) : (x + 2) = 2x - 1$ mit Rest $1$. Also
   $$f(x) = 2x - 1 + \frac{1}{x + 2}.$$
4. Für große $|x|$ wird $\tfrac{1}{x + 2}$ sehr klein. Der Graph nähert sich der Geraden $y = 2x - 1$. Das ist die
   **schräge Asymptote**. Dazu kommt die Polstelle $x = -2$.

Probe der Division: $(2x - 1)(x + 2) + 1 = 2x^2 + 4x - x - 2 + 1 = 2x^2 + 3x - 1$.
:::

```plot
x: [-8, 6]
y: [-14, 12]
graphen:
  - { f: "(2*x^2 + 3*x - 1)/(x + 2)", label: "f(x)", farbe: 0 }
  - { f: "2*x - 1", label: "y = 2x − 1", farbe: 2, gestrichelt: true }
strecken:
  - { von: [-2, -14], nach: [-2, 12], gestrichelt: true, farbe: 1 }
beschriftung: Die Funktion f(x) = (2x² + 3x − 1)/(x + 2) hat die Polstelle x = −2 und nähert sich für große |x| der schrägen Asymptote y = 2x − 1 (grün gestrichelt).
```

:::merke[Asymptoten einer rationalen Funktion]
Der Zähler habe den Grad $m$, der Nenner den Grad $n$.
- **$m < n$:** waagrechte Asymptote $y = 0$. Beispiel: $\tfrac{3x}{x^2 + 1}$ geht gegen $0$.
- **$m = n$:** waagrechte Asymptote $y = \tfrac{a_m}{b_n}$, der Quotient der Leitkoeffizienten.
- **$m = n + 1$:** schräge Asymptote. Man findet sie durch Polynomdivision. Das Ergebnis der Division ohne den Rest,
  also $kx + d$, ist die Asymptote. Der Rest durch den Nenner fällt für große $|x|$ weg.
- **$m > n + 1$:** keine Gerade als Asymptote. Der Graph verhält sich wie ein Polynom.

**Senkrechte** Asymptoten liegen an den Polstellen, also an den Nennernullstellen, die nach dem Kürzen bleiben.
:::

:::achtung[Falsche waagrechte Asymptote]
Eine typische Fehlrechnung bei $f(x) = \dfrac{3x + 1}{x - 2}$: „Asymptote $y = \tfrac{1}{-2} = -0{,}5$.“ Hier wurden die
konstanten Glieder geteilt. Für große $x$ zählen aber die **Leitterme** $3x$ und $x$. **Richtig:** $y = \tfrac31 = 3$.
Probe: $f(1000) = \tfrac{3001}{998} \approx 3{,}007$. Ein ähnlicher Fehler bei schrägen Asymptoten: Nur
$\tfrac{2x^2}{x} = 2x$ zu nehmen und den zweiten Divisionsschritt zu vergessen. Bei $\tfrac{2x^2 + 3x - 1}{x + 2}$ ist die
Asymptote $y = 2x - 1$, nicht $y = 2x$.
:::

:::beispiel[Stückkosten einer Produktion]
Ein Betrieb hat Fixkosten von $3000$ Euro und variable Kosten von $12$ Euro pro Stück. Die Kosten **pro Stück** bei $x$
Stück sind
$$k(x) = \frac{3000 + 12x}{x} = 12 + \frac{3000}{x} \qquad (k \text{ in Euro},\ x > 0).$$
Zähler und Nenner haben Grad $1$. Die waagrechte Asymptote ist $y = 12$. Ihre Bedeutung: Bei sehr großen Stückzahlen
verteilen sich die Fixkosten auf so viele Stück, dass fast nur die $12$ Euro variable Kosten bleiben. Bei $x = 100$
kostet ein Stück noch $42$ Euro, bei $x = 1000$ nur $15$ Euro. Die Stückkosten erreichen $12$ Euro aber nie.
:::

### Wurzelfunktionen

Die Quadratwurzel $f(x) = \sqrt{x}$ ist für $x \ge 0$ definiert und hat die Wertemenge $[0, \infty)$. Sie ist streng
monoton steigend, wächst aber immer langsamer: Von $\sqrt{0} = 0$ bis $\sqrt{1} = 1$ steigt sie um $1$, von $\sqrt{100} = 10$
bis $\sqrt{121} = 11$ ebenfalls nur um $1$. Ihr Graph ist der rechte Ast der Normalparabel, gespiegelt an der Geraden
$y = x$. Der Grund: $\sqrt x$ ist die Umkehrfunktion von $x^2$ auf $[0, \infty)$, siehe
[4.8 Verkettung und Umkehrfunktion](/lernen/mathe3/funktionen/verkettung-und-umkehrfunktion).

Die Kubikwurzel $\sqrt[3]{x}$ ist dagegen auf ganz $\R$ definiert, denn auch negative Zahlen haben eine dritte Wurzel:
$\sqrt[3]{-8} = -2$, weil $(-2)^3 = -8$ ist.

```plot
x: [-3, 9]
y: [-3, 5]
gleich: true
graphen:
  - { f: "sqrt(x)", label: "√x", farbe: 0 }
  - { f: "x^2", label: "x² (x ≥ 0)", farbe: 1, von: 0, bis: 2.3, gestrichelt: true }
  - { f: "nthRoot(x, 3)", label: "∛x", farbe: 2 }
  - { f: "x", farbe: 3, gestrichelt: true }
beschriftung: Die Wurzelfunktion √x ist das Spiegelbild des rechten Parabelasts an der Geraden y = x. Die Kubikwurzel ∛x ist auch für negative x definiert.
```

:::beispiel[Schwingungsdauer eines Pendels]
Ein Fadenpendel der Länge $l$ (in m) braucht für eine Hin- und Herbewegung die Zeit
$$T(l) = 2\pi\sqrt{\frac{l}{9{,}81}} \qquad (T \text{ in s}).$$
Das ist eine Wurzelfunktion von $l$. Für $l = 1$ m ist $T = 2\pi\sqrt{0{,}1019} \approx 2{,}006$ s. Vervierfacht man die
Länge auf $4$ m, ist $T = 2\pi\sqrt{0{,}4077} \approx 4{,}012$ s. Die Dauer verdoppelt sich nur, denn $\sqrt{4} = 2$.
Wer die Dauer verdoppeln will, muss die Länge also vervierfachen.
:::

:::achtung[Die Wurzel aus einem Quadrat]
Eine typische Fehlrechnung: $\sqrt{x^2} = x$. Für $x = -3$ ergibt die linke Seite $\sqrt{(-3)^2} = \sqrt9 = 3$, die
rechte aber $-3$. **Richtig:** $\sqrt{x^2} = |x|$. Die Quadratwurzel ist per Definition nie negativ. Nur für $x \ge 0$
gilt $\sqrt{x^2} = x$.
:::

```reflexion
frage: Warum ist bei $f(x) = \dfrac{x^2 - 4}{x - 2}$ die Stelle $2$ eine Lücke im Graphen, obwohl der gekürzte Term $x + 2$ dort ohne Probleme den Wert $4$ hat?
antwort: |
  Die Funktion ist durch den ursprünglichen Term festgelegt, und der ist bei $x = 2$ nicht ausrechenbar: Es entsteht
  $\tfrac00$. Also gehört $2$ nicht zur Definitionsmenge. Das Kürzen ist nur für $x \ne 2$ erlaubt, denn man dividiert
  dabei durch $x - 2$. Für alle anderen $x$ stimmen $f$ und $x + 2$ überein. Deshalb sieht der Graph aus wie die Gerade
  $y = x + 2$, aber der Punkt $(2 \mid 4)$ fehlt. Man kann die Lücke „heben“, indem man $f(2) = 4$ zusätzlich festlegt.
  Das ist die stetige Fortsetzung aus [12.9 Unstetigkeitsstellen und stetige Fortsetzung](/lernen/mathe3/grenzwerte-stetigkeit/unstetigkeitsstellen-und-stetige-fortsetzung).
```

```aufgabe
id: fu-rational-asymptote
titel: Polstelle und Asymptote
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Gegeben ist $f(x) = \dfrac{2x + 4}{x - 3}$. Bestimme die Polstelle, die Zahl $c$ der waagrechten Asymptote $y = c$
  und die Nullstelle.
teile:
  - typ: zahl
    label: 'Polstelle'
    loesung: "3"
    fehler:
      - wert: "-3"
        meldung: 'Der Nenner $x - 3$ ist null für $x = 3$.'
      - wert: "-2"
        meldung: 'Das ist die Nullstelle des **Zählers**. Polstellen sind Nullstellen des Nenners.'
  - typ: zahl
    label: '$c$'
    loesung: "2"
    fehler:
      - wert: "4/(-3)"
        meldung: 'Für große $x$ zählen die Leitterme $2x$ und $x$, nicht die konstanten Glieder.'
      - wert: "0"
        meldung: '$y = 0$ ist die Asymptote, wenn der Zählergrad kleiner ist. Hier sind beide Grade gleich.'
  - typ: zahl
    label: 'Nullstelle'
    loesung: "-2"
    fehler:
      - wert: "2"
        meldung: 'Aus $2x + 4 = 0$ folgt $x = -2$.'
hinweise:
  - 'Zähler- und Nennergrad sind gleich. Dann ist die Asymptote der Quotient der Leitkoeffizienten.'
loesung: |
  **Ansatz:** Polstellen sind Nullstellen des Nenners, die nach dem Kürzen bleiben. $x - 3 = 0$ ergibt $x = 3$. Der Zähler ist dort $10 \ne 0$, also kann man nicht kürzen: Polstelle.
  ---
  Gleicher Grad: Asymptote $y = \tfrac21 = 2$. Nullstelle: $2x + 4 = 0$, also $x = -2$, und $-2$ liegt in $D$.
  Probe: $f(-2) = \tfrac{0}{-5} = 0$.
```

```aufgabe
id: fu-wurzel-definition
titel: Eine Wurzelfunktion untersuchen
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Gegeben ist $f(x) = \sqrt{6 - 2x}$.

  a) Die Definitionsmenge ist $(-\infty, b]$. Bestimme $b$.

  b) Berechne $f(-5)$.
teile:
  - typ: zahl
    label: 'a) $b$'
    loesung: "3"
    fehler:
      - wert: "-3"
        meldung: 'Aus $6 - 2x \ge 0$ folgt $6 \ge 2x$, also $x \le 3$.'
  - typ: zahl
    label: 'b) $f(-5)$'
    loesung: "sqrt(16)"
    anzeige: '4'
    fehler:
      - wert: "sqrt(-4)"
        meldung: 'Mit Klammern: $6 - 2\cdot(-5) = 6 + 10 = 16$.'
      - wert: "16"
        meldung: 'Der Radikand ist $16$. Gesucht ist die Wurzel daraus.'
hinweise:
  - 'Radikand $\ge 0$: $6 - 2x \ge 0$. Für b) mit Klammern einsetzen.'
loesung: |
  **Ansatz:** Unter der Wurzel darf keine negative Zahl stehen. $6 - 2x \ge 0$ ergibt $6 \ge 2x$, also $x \le 3$. Damit ist $D = (-\infty, 3]$ und $b = 3$.
  ---
  $f(-5) = \sqrt{6 - 2\cdot(-5)} = \sqrt{16} = 4$. Die Stelle $-5$ liegt in $D$, wie es sein muss.
```

```aufgabe
id: fu-asymptote-art
titel: Welche Asymptote?
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: |
  Beurteile jede Aussage über das Verhalten für große $|x|$.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '$f_1(x) = \dfrac{3x^2 + 1}{x^2 - 4}$ hat die waagrechte Asymptote $y = 3$.'
        richtig: true
        erklaerung: 'Gleicher Grad $2$. Der Quotient der Leitkoeffizienten ist $\tfrac31 = 3$.'
      - text: '$f_2(x) = \dfrac{x + 5}{x^2 + 1}$ hat die waagrechte Asymptote $y = 5$.'
        richtig: false
        erklaerung: 'Der Zählergrad ist kleiner als der Nennergrad. Die Asymptote ist $y = 0$.'
      - text: '$f_3(x) = \dfrac{x^3}{x + 1}$ hat eine schräge Asymptote.'
        richtig: false
        erklaerung: 'Der Zählergrad ist um $2$ größer. Der Graph verhält sich wie eine Parabel, nicht wie eine Gerade.'
      - text: '$f_4(x) = \dfrac{4x - 2}{2x + 1}$ hat die waagrechte Asymptote $y = 2$.'
        richtig: true
        erklaerung: 'Gleicher Grad $1$. Der Quotient der Leitkoeffizienten ist $\tfrac42 = 2$.'
    fehler:
      - wert: [r, r, f, r]
        meldung: 'Bei $f_2$ wächst der Nenner schneller als der Zähler. Was passiert dann mit dem Bruch?'
      - wert: [r, f, r, r]
        meldung: 'Eine schräge Asymptote gibt es nur, wenn der Zählergrad um genau $1$ größer ist.'
      - wert: [r, f, f, f]
        meldung: 'Bei $f_4$ zählen die Leitterme $4x$ und $2x$, nicht die Konstanten $-2$ und $1$.'
hinweise:
  - 'Vergleiche jeweils Zählergrad $m$ und Nennergrad $n$.'
  - '$m < n$: $y = 0$. $m = n$: Quotient der Leitkoeffizienten. $m = n + 1$: schräg.'
loesung: |
  **Ansatz:** Für große $|x|$ zählen nur die Leitterme. Entscheidend ist der Vergleich der Grade.
  ---
  $f_1$: $m = n = 2$, Asymptote $y = 3$. Richtig. $f_2$: $m = 1 < n = 2$, Asymptote $y = 0$. Falsch.
  ---
  $f_3$: $m = 3 = n + 2$, keine Gerade als Asymptote. Falsch. $f_4$: $m = n = 1$, Asymptote $y = 2$. Richtig.
```

```aufgabe
id: fu-schiefe-asymptote
titel: Eine schräge Asymptote bestimmen
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Gegeben ist $f(x) = \dfrac{x^2 + x - 4}{x - 1}$.

  a) Führe die Polynomdivision durch und schreibe $f(x) = kx + d + \dfrac{r}{x - 1}$.

  b) Gib die schräge Asymptote und die Polstelle an.
teile:
  - typ: term
    label: 'a) schräge Asymptote $y = kx + d$'
    loesung: "x + 2"
    fehler:
      - wert: "x"
        meldung: 'Nach dem ersten Divisionsschritt fehlt noch der zweite. $x^2 : x = x$ ist nur der Anfang.'
      - wert: "x + 1"
        meldung: 'Nach dem ersten Schritt bleibt $x - (-x) = 2x$ übrig, nicht $x$. Rechne $x^2 + x - (x^2 - x)$ genau nach.'
  - typ: zahl
    label: 'a) Rest $r$'
    loesung: "-2"
    fehler:
      - wert: "2"
        meldung: 'Im letzten Schritt: $-4 - (-2) = -2$.'
      - wert: "-6"
        meldung: 'Zurückmultipliziert wird $2\cdot(x - 1) = 2x - 2$. Dann $-4 - (-2) = -2$.'
  - typ: zahl
    label: 'b) Polstelle'
    loesung: "1"
    fehler:
      - wert: "-1"
        meldung: 'Der Nenner $x - 1$ ist bei $x = 1$ null. Der Zähler ist dort $-2 \ne 0$.'
hinweise:
  - 'Erster Schritt: $x^2 : x = x$. Multipliziere $x\cdot(x - 1)$ zurück und ziehe ab.'
  - 'Zweiter Schritt mit dem, was übrig bleibt: $2x : x = 2$. Der letzte Rest ist $r$.'
loesung: |
  **Ansatz:** Der Zählergrad ist um $1$ größer als der Nennergrad. Die schräge Asymptote liefert die Polynomdivision.
  ---
  $x^2 : x = x$. Zurück: $x(x - 1) = x^2 - x$. Abziehen: $(x^2 + x - 4) - (x^2 - x) = 2x - 4$.
  ---
  $2x : x = 2$. Zurück: $2(x - 1) = 2x - 2$. Abziehen: $(2x - 4) - (2x - 2) = -2$. Also $f(x) = x + 2 - \dfrac{2}{x - 1}$.
  ---
  Schräge Asymptote $y = x + 2$, Polstelle $x = 1$. Probe: $(x + 2)(x - 1) - 2 = x^2 + x - 2 - 2 = x^2 + x - 4$.
gefuehrt:
  - text: 'Erster Divisionsschritt: Was ergibt $x^2 : x$?'
    teil: { typ: term, loesung: "x" }
    erklaerung: '$x^2 : x = x$. Das ist das erste Glied der Asymptote.'
  - text: 'Multipliziere $x\cdot(x - 1)$ und ziehe das vom Zähler $x^2 + x - 4$ ab. Was bleibt übrig?'
    teil: { typ: term, loesung: "2x - 4", fehler: [ { wert: "-4", meldung: 'Beim Abziehen wird aus $-(-x)$ ein $+x$. Also $x - (-x) = 2x$.' } ] }
    erklaerung: '$(x^2 + x - 4) - (x^2 - x) = 2x - 4$.'
  - text: 'Zweiter Schritt: $2x : x = 2$. Ziehe $2(x - 1)$ von $2x - 4$ ab. Welcher Rest bleibt?'
    teil: { typ: zahl, loesung: "-2" }
    erklaerung: '$(2x - 4) - (2x - 2) = -2$.'
  - text: Schreibe das Ergebnis zusammen und lies die Asymptote ab.
    erklaerung: '$f(x) = x + 2 - \tfrac{2}{x - 1}$. Der Bruch wird für große $|x|$ sehr klein, also ist $y = x + 2$ die schräge Asymptote.'
```

```aufgabe
id: fu-stueckkosten
titel: Stückkosten
niveau: 2
lernziel: 4
kompetenz: modellieren
angabe: |
  Die Herstellung von $x$ Stück eines Produkts kostet $K(x) = 2000 + 15x$ Euro.

  a) Ab welcher Stückzahl liegen die Stückkosten $k(x) = \tfrac{K(x)}{x}$ bei höchstens $20$ Euro?

  b) Welchen Wert können die Stückkosten nie unterschreiten?
teile:
  - typ: zahl
    label: 'a) Mindeststückzahl'
    loesung: "2000/5"
    anzeige: '400'
    fehler:
      - wert: "100"
        meldung: 'Du hast $2000 : 20$ gerechnet. Die variablen Kosten $15$ Euro pro Stück zählen mit: $\tfrac{2000}{x} \le 5$.'
      - wert: "133.33"
        meldung: 'Du hast $2000 : 15$ gerechnet. Gesucht ist $x$ mit $15 + \tfrac{2000}{x} \le 20$.'
  - typ: zahl
    label: 'b) Untergrenze'
    einheit: Euro
    loesung: "15"
    fehler:
      - wert: "20"
        meldung: 'Bei mehr Stück sinken die Stückkosten weiter. Wohin nähern sie sich für sehr große $x$?'
hinweise:
  - 'Zerlege $k(x) = \tfrac{2000 + 15x}{x} = 15 + \tfrac{2000}{x}$.'
  - 'Für a) $15 + \tfrac{2000}{x} \le 20$. Weil $x > 0$ ist, darf man mit $x$ multiplizieren, ohne das Zeichen umzudrehen.'
loesung: |
  **Ansatz:** Die Stückkosten sind eine rationale Funktion. Zerlegen: $k(x) = 15 + \dfrac{2000}{x}$.
  ---
  a) $15 + \dfrac{2000}{x} \le 20$ heißt $\dfrac{2000}{x} \le 5$. Multiplikation mit $x > 0$: $2000 \le 5x$, also $x \ge 400$.
  ---
  Ab $400$ Stück sind die Stückkosten höchstens $20$ Euro. Probe: $k(400) = 15 + 5 = 20$.
  ---
  b) Wegen $\tfrac{2000}{x} > 0$ ist immer $k(x) > 15$. **Antwort:** Die Stückkosten nähern sich der Asymptote $15$ Euro, unterschreiten sie aber nie.
```

```aufgabe
id: fu-sichtweite
titel: Wie weit sieht man vom Turm?
niveau: 2
lernziel: 3
kompetenz: modellieren
angabe: |
  Von einem Aussichtspunkt in der Höhe $h$ (in m) über dem Meer sieht man bei klarer Sicht ungefähr bis zur Entfernung
  $$d(h) = 3{,}57\,\sqrt{h} \qquad (d \text{ in km}).$$
  a) Wie weit sieht man aus $100$ m Höhe?

  b) Wie hoch muss man stehen, um $50$ km weit zu sehen? Runde auf ganze Meter.

  c) Um welchen Faktor wächst die Sichtweite, wenn man die Höhe vervierfacht?
teile:
  - typ: zahl
    label: 'a) $d(100)$'
    einheit: km
    loesung: "3.57*sqrt(100)"
    anzeige: '35{,}7'
    fehler:
      - wert: "357"
        meldung: 'Es ist $\sqrt{100} = 10$, nicht $100$.'
  - typ: zahl
    label: 'b) Höhe'
    einheit: m
    loesung: "(50/3.57)^2"
    toleranz: 1
    anzeige: '\left(\tfrac{50}{3{,}57}\right)^2 \approx 196'
    fehler:
      - wert: "50/3.57"
        meldung: 'Aus $\sqrt h = \tfrac{50}{3{,}57}$ folgt $h$ erst durch Quadrieren.'
  - typ: zahl
    label: 'c) Faktor'
    loesung: "sqrt(4)"
    anzeige: '2'
    fehler:
      - wert: "4"
        meldung: 'Die Höhe steht unter der Wurzel. Aus $4h$ wird $\sqrt{4h} = 2\sqrt h$.'
hinweise:
  - 'Für b) $3{,}57\sqrt h = 50$ zuerst durch $3{,}57$ dividieren, dann quadrieren.'
  - 'Für c) vergleiche $\sqrt{4h}$ mit $\sqrt h$.'
loesung: |
  **Ansatz:** $d$ ist eine Wurzelfunktion der Höhe. Einsetzen beziehungsweise nach $h$ umstellen.
  ---
  a) $d(100) = 3{,}57\cdot 10 = 35{,}7$ km.
  ---
  b) $3{,}57\sqrt h = 50$ ergibt $\sqrt h = \tfrac{50}{3{,}57} \approx 14{,}006$. Quadrieren: $h \approx 196{,}2$, also rund $196$ m.
  ---
  c) $d(4h) = 3{,}57\sqrt{4h} = 2\cdot 3{,}57\sqrt h = 2\,d(h)$. **Antwort:** Die Sichtweite verdoppelt sich nur.
```

```aufgabe
id: fu-rational-aufstellen
titel: Eine rationale Funktion konstruieren
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Gesucht ist eine Funktion der Form $f(x) = \dfrac{a\,(x - u)}{x - v}$ mit diesen Eigenschaften: Nullstelle bei $-1$,
  Polstelle bei $2$ und waagrechte Asymptote $y = 3$. Gib den Term an.
teile:
  - typ: term
    label: '$f(x)$'
    loesung: "3*(x + 1)/(x - 2)"
    bereich: [3, 8]
    fehler:
      - wert: "(x + 1)/(x - 2)"
        meldung: 'Dieser Term hat die Asymptote $y = 1$. Für $y = 3$ brauchst du den Faktor $3$ im Zähler.'
      - wert: "3*(x - 1)/(x + 2)"
        meldung: 'Die Vorzeichen sind vertauscht. Eine Nullstelle bei $-1$ gehört zum Faktor $(x + 1)$.'
hinweise:
  - 'Nullstelle bei $-1$ heißt Faktor $(x + 1)$ im Zähler. Polstelle bei $2$ heißt Faktor $(x - 2)$ im Nenner.'
  - 'Die Asymptote ist der Quotient der Leitkoeffizienten, also $\tfrac{a}{1}$.'
loesung: |
  **Ansatz:** Jede gewünschte Eigenschaft legt einen Teil des Terms fest. Das ist eine Umkehraufgabe.
  ---
  Nullstelle $-1$: Zähler $a(x + 1)$. Polstelle $2$: Nenner $x - 2$, und der Zähler ist dort $3a \ne 0$.
  ---
  Asymptote: Gleicher Grad, also $y = \tfrac a1 = a$. Mit $a = 3$ ist $f(x) = \dfrac{3(x + 1)}{x - 2}$.
  Probe: $f(-1) = 0$, und $f(1000) = \tfrac{3003}{998} \approx 3{,}009$.
```

```aufgabe
id: fu-hebbare-luecke
titel: Hebbar oder Pol?
niveau: 3
lernziel: 4
kompetenz: rechnen
angabe: |
  Untersuche $f(x) = \dfrac{x^2 - 9}{x^2 + x - 6}$.

  a) Gib die Definitionslücken an und entscheide jeweils, ob Pol oder hebbare Lücke vorliegt.

  b) Welchen Wert müsste man $f$ an der hebbaren Lücke geben, damit die Lücke geschlossen wird?

  c) Gib die Nullstelle(n) und die waagrechte Asymptote an.
teile:
  - typ: zahl
    label: 'a) Polstelle'
    loesung: "2"
    fehler:
      - wert: "-3"
        meldung: 'Die Stelle $-3$ verschwindet durch Kürzen aus dem Nenner. Sie ist hebbar, nicht Pol.'
  - typ: zahl
    label: 'a) hebbare Lücke bei'
    loesung: "-3"
    fehler:
      - wert: "3"
        meldung: '$3$ ist keine Nullstelle des Nenners: $9 + 3 - 6 = 6 \ne 0$.'
  - typ: zahl
    label: 'b) Wert an der hebbaren Lücke'
    loesung: "(-3-3)/(-3-2)"
    anzeige: '\tfrac65'
    fehler:
      - wert: "0"
        meldung: 'Den Wert bekommst du aus dem **gekürzten** Term $\tfrac{x - 3}{x - 2}$ an der Stelle $-3$.'
  - typ: menge
    label: 'c) Nullstellen'
    loesung: ["3"]
    fehler:
      - wert: ["3", "-3"]
        meldung: 'Die Stelle $-3$ liegt nicht in der Definitionsmenge. Sie kann keine Nullstelle sein.'
  - typ: zahl
    label: 'c) waagrechte Asymptote $y =$'
    loesung: "1"
    fehler:
      - wert: "0"
        meldung: 'Zähler und Nenner haben denselben Grad. Die Asymptote ist der Quotient der Leitkoeffizienten.'
hinweise:
  - 'Zerlege Zähler und Nenner: $x^2 - 9 = (x - 3)(x + 3)$ und $x^2 + x - 6 = (x + 3)(x - 2)$.'
  - 'Eine Stelle, die durch Kürzen aus dem Nenner verschwindet, ist hebbar. Den Ersatzwert liefert der gekürzte Term.'
loesung: |
  **Ansatz:** Zerlegen und kürzen. $f(x) = \dfrac{(x - 3)(x + 3)}{(x + 3)(x - 2)}$ mit $D = \R \setminus \{-3, 2\}$.
  ---
  Kürzen für $x \ne -3$: $f(x) = \dfrac{x - 3}{x - 2}$. Die Stelle $2$ bleibt im Nenner: **Pol**. Die Stelle $-3$ verschwindet: **hebbare Lücke**.
  ---
  Wert an der Lücke: $\dfrac{-3 - 3}{-3 - 2} = \dfrac{-6}{-5} = \dfrac65$.
  ---
  Nullstelle: Der gekürzte Zähler $x - 3$ ist bei $x = 3$ null, und $3 \in D$. Gleicher Grad mit Leitkoeffizienten $1$ und $1$: Asymptote $y = 1$.
  **Antwort:** Pol bei $2$, hebbare Lücke bei $-3$ mit Ersatzwert $\tfrac65$, Nullstelle $3$, Asymptote $y = 1$.
```

## Graphen verschieben, strecken und spiegeln

```aufgabe
id: fu-trans-check-einsetzen
titel: Einen Term einsetzen
niveau: 1
art: check
angabe: |
  Es sei $f(x) = x^2$. Welcher Term ist $f(x - 3)$?
  Herkunft: [4.1 Was ist eine Funktion?](/lernen/mathe3/funktionen/was-ist-eine-funktion), Abschnitt Einsetzen.
teile:
  - typ: auswahl
    optionen: ['$(x - 3)^2$', '$x^2 - 3$', '$x^2 - 9$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$x^2 - 3$ ist $f(x) - 3$. Bei $f(x - 3)$ wird die ganze Klammer $x - 3$ für $x$ eingesetzt.'
      - wert: 2
        meldung: 'Beim Einsetzen entsteht $(x - 3)^2$. Ausmultipliziert ist das $x^2 - 6x + 9$, nicht $x^2 - 9$.'
hinweise:
  - 'Ersetze jedes $x$ in $f(x) = x^2$ durch $(x - 3)$.'
loesung: |
  Die Klammer von $f$ sagt, was eingesetzt wird: hier der ganze Term $x - 3$.
  ---
  Also $f(x - 3) = (x - 3)^2$. Das ist etwas anderes als $f(x) - 3 = x^2 - 3$.
```

Wer die Grundfunktionen $x^2$, $x^3$, $\tfrac1x$, $\sqrt x$, $|x|$, $e^x$ und $\ln x$ kennt, kann daraus mit wenigen
Handgriffen sehr viele weitere Graphen skizzieren. Es gibt nur drei Handgriffe: **verschieben**, **strecken** und
**spiegeln**. In dieser Lektion lernst du, wie man jeden davon am Funktionsterm erkennt. Die wichtigste Frage dabei
lautet: Wird die Änderung **innen** an der Eingabe $x$ vorgenommen oder **außen** am Ergebnis $f(x)$?

### Innen oder außen: f(x) + 1 und f(x + 1)

Wir vergleichen drei Funktionen mit einer Wertetabelle: $f(x) = x^2$, dann $g(x) = f(x) + 1$ und $h(x) = f(x + 1)$.

|$x$|$-2$|$-1$|$0$|$1$|$2$|
|---|---|---|---|---|---|
|$f(x) = x^2$|$4$|$1$|$0$|$1$|$4$|
|$g(x) = f(x) + 1$|$5$|$2$|$1$|$2$|$5$|
|$h(x) = f(x + 1)$|$1$|$0$|$1$|$4$|$9$|

- Bei $g$ wird **zum Ergebnis** $1$ addiert. Jeder Wert ist um $1$ größer. Der Graph rutscht um $1$ **nach oben**.
- Bei $h$ wird **zur Eingabe** $1$ addiert, bevor $f$ rechnet. Der Scheitelwert $0$, den $f$ bei $x = 0$ hat, taucht
  bei $h$ schon bei $x = -1$ auf. Denn $h(-1) = f(-1 + 1) = f(0)$. Alles passiert eine Stelle **früher**, also weiter
  links. Der Graph rutscht um $1$ **nach links**.

:::beispiel[f(x) + 1 und f(x + 1) bei der Normalparabel]
Für $f(x) = x^2$ ist $g(x) = f(x) + 1 = x^2 + 1$. Der Scheitel wandert von $(0 \mid 0)$ nach $(0 \mid 1)$.

Dagegen ist $h(x) = f(x + 1) = (x + 1)^2$. Der Scheitel liegt dort, wo die Klammer null ist, also bei $x = -1$. Er
wandert von $(0 \mid 0)$ nach $(-1 \mid 0)$.

Kontrolle an einer Stelle: $g(2) = 4 + 1 = 5$ und $h(2) = 3^2 = 9$. Die beiden Funktionen sind also verschieden.
:::

:::intuition
Warum verschiebt $f(x - 3)$ nach **rechts**, obwohl ein Minus dasteht? Die neue Funktion $g(x) = f(x - 3)$ nimmt an der
Stelle $x$ den Wert an, den $f$ **drei Einheiten weiter links** hatte. Was $f$ bei $0$ tut, tut $g$ erst bei $x = 3$,
denn dort ist die Eingabe $x - 3 = 0$. Der ganze Graph kommt also um $3$ später, er ist nach rechts gerückt. Ein Bild
aus dem Alltag: Ein Zug, der dieselbe Strecke $3$ Stunden später fährt, ist zu jeder Zeit dort, wo der erste Zug vor
$3$ Stunden war.
:::

### Alle Transformationen im Überblick

:::satz[Transformationen von Graphen]
Es sei $c > 0$. Aus dem Graphen von $f$ entsteht der Graph von $g$ so:

| neue Funktion | Wirkung auf den Graphen von $f$ |
|---|---|
| $g(x) = f(x) + c$ | um $c$ nach **oben** verschieben. |
| $g(x) = f(x) - c$ | um $c$ nach **unten** verschieben. |
| $g(x) = f(x - c)$ | um $c$ nach **rechts** verschieben. |
| $g(x) = f(x + c)$ | um $c$ nach **links** verschieben. |
| $g(x) = a\cdot f(x)$ mit $a > 0$ | in $y$-Richtung mit dem Faktor $a$ strecken. Für $a < 1$ wird gestaucht. |
| $g(x) = f(b\,x)$ mit $b > 0$ | in $x$-Richtung mit dem Faktor $\tfrac1b$ strecken. Für $b > 1$ wird zusammengedrückt. |
| $g(x) = -f(x)$ | an der $x$-Achse spiegeln. |
| $g(x) = f(-x)$ | an der $y$-Achse spiegeln. |
:::

Die Regel hinter der Tabelle: **Was außen an $f(x)$ geschieht, wirkt auf die $y$-Werte, und zwar so, wie es dasteht.
Was innen an $x$ geschieht, wirkt auf die $x$-Werte, und zwar umgekehrt.** Innen plus heißt links, innen mal $2$ heißt
halb so breit.

:::beispiel[Schrittweise aufbauen]
$g(x) = -2(x + 1)^2 + 3$ entsteht aus $f(x) = x^2$ in dieser Reihenfolge. Wir arbeiten von innen nach außen.
1. $x^2 \to (x + 1)^2$: Die Eingabe wird um $1$ erhöht. Der Graph rückt um $1$ nach links.
2. $\to 2(x + 1)^2$: Das Ergebnis wird mit $2$ multipliziert. Der Graph wird in $y$-Richtung doppelt so hoch.
3. $\to -2(x + 1)^2$: Das Ergebnis wechselt das Vorzeichen. Der Graph wird an der $x$-Achse gespiegelt.
4. $\to -2(x + 1)^2 + 3$: Zum Ergebnis kommt $3$ dazu. Der Graph rückt um $3$ nach oben.

Ergebnis: eine nach unten offene, schmale Parabel mit Scheitel $(-1 \mid 3)$. Das ist genau die Scheitelform aus
[4.4 Quadratische Funktionen](/lernen/mathe3/funktionen/quadratische-funktionen).
:::

:::achtung[Innen verschiebt umgekehrt]
Eine typische Fehlrechnung: „Bei $g(x) = (x + 3)^2$ ist der Graph der Normalparabel um $3$ nach rechts verschoben.“ Das
ist falsch. Die Klammer ist bei $x = -3$ null, also liegt der Scheitel bei $(-3 \mid 0)$. **Richtig:** um $3$ nach
**links**. Prüfe die Richtung immer an der Stelle, an der die Klammer null wird.
:::

:::achtung[Die Reihenfolge von Strecken und Verschieben]
Eine typische Fehlrechnung: „Erst mit dem Faktor $2$ strecken, dann um $3$ nach oben: $g(x) = 2(x^2 + 3)$.“ Das ist
falsch. $2(x^2 + 3) = 2x^2 + 6$ bedeutet: erst um $3$ hoch, dann strecken. Dabei wird auch die Verschiebung verdoppelt.
**Richtig:** $g(x) = 2x^2 + 3$. Der Scheitel liegt bei $(0 \mid 3)$ und nicht bei $(0 \mid 6)$. Die Reihenfolge der
Schritte ist die Reihenfolge, in der man den Term von innen nach außen aufbaut.
:::

:::beispiel[Ein Lieferwagen startet später]
Ein Lieferwagen fährt um $8$ Uhr los und legt in $t$ Stunden den Weg $s(t) = 60\,t$ zurück ($s$ in km). Ein zweiter
Wagen fährt dieselbe Strecke gleich schnell, startet aber $1{,}5$ Stunden später. Sein Weg zur Zeit $t$ (gemessen ab
$8$ Uhr) ist
$$s_2(t) = s(t - 1{,}5) = 60\,(t - 1{,}5) \qquad (t \ge 1{,}5).$$
Der Graph von $s$ ist um $1{,}5$ h nach **rechts** verschoben. Kontrolle: Um halb zehn, also bei $t = 1{,}5$, ist
$s_2(1{,}5) = 0$. Der zweite Wagen steht noch am Start. Um $11$ Uhr ist $s(3) = 180$ km und $s_2(3) = 90$ km.
:::

:::beispiel[Strecken in x-Richtung und Spiegeln]
Aus $f(x) = \sqrt{x}$ mit $D = [0, \infty)$ bauen wir drei neue Funktionen.
- $g(x) = \sqrt{4x}$: Die Eingabe wird mit $4$ multipliziert. Der Graph wird in $x$-Richtung auf ein Viertel
  zusammengedrückt. Den Wert $f(8) = \sqrt8$ erreicht $g$ schon bei $x = 2$.
- $h(x) = -\sqrt{x}$: Spiegelung an der $x$-Achse. Alle Werte sind nicht positiv, $D$ bleibt $[0, \infty)$.
- $k(x) = \sqrt{-x}$: Spiegelung an der $y$-Achse. Jetzt ist $D = (-\infty, 0]$, denn unter der Wurzel muss
  $-x \ge 0$ stehen. Zum Beispiel ist $k(-9) = \sqrt9 = 3$.
:::

:::achtung[Strecken in x-Richtung verwechselt]
Eine typische Fehlüberlegung: „$g(x) = f(2x)$ macht den Graphen von $f$ doppelt so breit.“ Das ist falsch. Bei
$f(x) = x^2$ mit $f(3) = 9$ erreicht $g(x) = (2x)^2$ den Wert $9$ schon bei $x = 1{,}5$. **Richtig:** $f(2x)$ drückt den
Graphen in $x$-Richtung auf die **Hälfte** zusammen. Auch hier wirkt das Innen umgekehrt.
:::

```aufgabe
id: fu-trans-check-widget
titel: Was passiert, wenn c wächst?
niveau: 1
art: check
angabe: |
  Im Widget nach dieser Frage siehst du $g(x) = a\cdot\big(b\,(x - c)\big)^2 + d$ und zum Vergleich die Normalparabel.
  Sage zuerst vorher: Was passiert mit dem Graphen, wenn du nur $c$ von $0$ auf $2$ erhöhst?
teile:
  - typ: auswahl
    optionen:
      - 'Er wandert um $2$ nach links.'
      - 'Er wandert um $2$ nach rechts.'
      - 'Er wandert um $2$ nach oben.'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Bei $c = 2$ steht $(x - 2)$ in der Klammer. Sie ist bei $x = 2$ null. Dort liegt dann der Scheitel.'
      - wert: 2
        meldung: '$c$ steht innen bei $x$, nicht außen beim Ergebnis. Es verschiebt also waagrecht.'
hinweise:
  - 'Wo ist die Klammer $(x - c)$ für $c = 2$ gleich null?'
loesung: |
  Für $c = 2$ steht innen $(x - 2)$. Die Klammer ist bei $x = 2$ null, also liegt der Scheitel jetzt bei $x = 2$.
  ---
  Der Graph wandert um $2$ nach rechts. Das Minus in $(x - c)$ ist der Grund, warum ein positives $c$ nach rechts schiebt.
```

```widget
name: parameter
titel: Transformationen an der Normalparabel
props:
  f: "a*(b*(x-c))^2 + d"
  parameter:
    - { name: a, min: -3, max: 3, step: 0.5, wert: 1 }
    - { name: b, min: 0.5, max: 3, step: 0.5, wert: 1 }
    - { name: c, min: -4, max: 4, step: 0.5, wert: 0 }
    - { name: d, min: -4, max: 4, step: 0.5, wert: 0 }
  x: [-6, 6]
  y: [-6, 6]
  zusatz: ["x^2"]
```

**Arbeitsauftrag:** Prüfe zuerst deine Vorhersage mit $c$. Stelle danach $a = -1$ ein und beschreibe, was passiert.
Setze dann $a = 1$ und ziehe $b$ von $1$ auf $2$. Erkläre mit dem Satz „Innen wirkt umgekehrt“, warum die Parabel dabei
schmäler wird und nicht breiter.

```plot
x: [-4, 4]
y: [-3, 5]
gleich: true
graphen:
  - { f: "abs(x)", label: "|x|", farbe: 0, gestrichelt: true }
  - { f: "abs(x - 2) - 1", label: "|x − 2| − 1", farbe: 1 }
  - { f: "-abs(x) + 4", label: "−|x| + 4", farbe: 2 }
beschriftung: Dieselben Regeln gelten für jede Grundfunktion. Aus |x| entsteht durch Verschieben um 2 nach rechts und 1 nach unten der orange Graph. Durch Spiegeln an der x-Achse und Verschieben um 4 nach oben entsteht der grüne.
```

```reflexion
frage: Erkläre einer Freundin in zwei oder drei Sätzen, warum $f(x - 3)$ den Graphen nach rechts verschiebt, obwohl dort ein Minus steht. Verwende dabei das Wort „Eingabe“.
antwort: |
  $f(x - 3)$ bedeutet: Bevor $f$ rechnet, wird von der Eingabe $3$ abgezogen. Damit $f$ dieselbe Eingabe bekommt wie
  vorher an der Stelle $0$, muss man jetzt $x = 3$ wählen. Alles, was $f$ an einer Stelle tut, passiert also drei
  Einheiten weiter rechts. Deshalb wirkt eine Änderung an der Eingabe immer umgekehrt auf die $x$-Richtung.
```

```aufgabe
id: fu-transformation-term
titel: Verschobene Funktion aufstellen
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Der Graph von $f(x) = x^2$ wird um $2$ Einheiten nach rechts und um $3$ Einheiten nach oben verschoben. Gib den Term der
  neuen Funktion $g$ an.
teile:
  - typ: term
    label: '$g(x)$'
    loesung: "(x-2)^2 + 3"
    fehler:
      - wert: "(x+2)^2 + 3"
        meldung: 'Nach rechts verschieben heißt: $x$ durch $x - 2$ ersetzen. Mit $x + 2$ wandert der Graph nach links.'
      - wert: "x^2 - 2 + 3"
        meldung: 'Die $-2$ muss **innen** stehen, also in der Klammer mit $x$. Außen verschiebt sie nur nach unten.'
hinweise:
  - 'Nach rechts verschieben heißt: $x$ durch $x - 2$ ersetzen. Nach oben verschieben heißt: zum Ergebnis addieren.'
loesung: |
  **Ansatz:** Waagrechte Verschiebung wirkt innen und umgekehrt, senkrechte außen. Rechtsverschiebung um $2$: $x^2 \to (x - 2)^2$.
  ---
  Verschiebung um $3$ nach oben: $g(x) = (x - 2)^2 + 3$. Kontrolle: Der Scheitel liegt bei $(2 \mid 3)$, denn $g(2) = 3$.
```

```aufgabe
id: fu-verschiebung-richtung
titel: Eine verschobene Wurzelfunktion
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Gegeben sind $f(x) = \sqrt{x}$ und $g(x) = \sqrt{x + 4}$.

  a) Wie entsteht der Graph von $g$ aus dem von $f$?

  b) Bei welcher Zahl beginnt die Definitionsmenge von $g$?
teile:
  - typ: auswahl
    label: 'a)'
    optionen: ['um $4$ nach rechts', 'um $4$ nach links', 'um $4$ nach oben']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Die Wurzel beginnt dort, wo der Radikand null ist: $x + 4 = 0$ bei $x = -4$. Das liegt links.'
      - wert: 2
        meldung: 'Die $4$ steht unter der Wurzel bei $x$, also innen. Nach oben verschiebt nur eine Zahl außen.'
  - typ: zahl
    label: 'b) Beginn von $D_g$'
    loesung: "-4"
    fehler:
      - wert: "4"
        meldung: 'Radikand $\ge 0$: $x + 4 \ge 0$, also $x \ge -4$.'
hinweise:
  - 'Bestimme, wo der Radikand null ist. Dort beginnt der Graph.'
loesung: |
  **Ansatz:** Die Änderung steht innen, sie wirkt also umgekehrt in $x$-Richtung. $x + 4$ statt $x$: Verschiebung um $4$ nach links.
  ---
  Radikand $x + 4 \ge 0$, also $x \ge -4$. Der Graph von $g$ beginnt im Punkt $(-4 \mid 0)$. Probe: $g(0) = 2 = f(4)$.
```

```aufgabe
id: fu-transformation-erkennen
titel: Transformationen ablesen
niveau: 2
lernziel: 5
kompetenz: verstehen
angabe: |
  Wie entsteht der Graph von $g(x) = \dfrac{1}{x + 3} - 2$ aus dem Graphen von $f(x) = \dfrac1x$? Gib außerdem die
  senkrechte und die waagrechte Asymptote von $g$ an.
teile:
  - typ: auswahl
    label: 'Transformation'
    optionen:
      - 'um $3$ nach rechts und um $2$ nach unten'
      - 'um $3$ nach links und um $2$ nach unten'
      - 'um $3$ nach links und um $2$ nach oben'
      - 'um $2$ nach links und um $3$ nach unten'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Innen wirkt umgekehrt: $x + 3$ verschiebt nach links.'
      - wert: 2
        meldung: 'Außen wirkt wie es dasteht: $-2$ verschiebt nach unten.'
      - wert: 3
        meldung: 'Die $3$ steht innen bei $x$ und gehört zur waagrechten Richtung. Die $2$ steht außen.'
  - typ: zahl
    label: 'senkrechte Asymptote $x =$'
    loesung: "-3"
    fehler:
      - wert: "3"
        meldung: 'Der Nenner $x + 3$ ist bei $x = -3$ null.'
  - typ: zahl
    label: 'waagrechte Asymptote $y =$'
    loesung: "-2"
    fehler:
      - wert: "0"
        meldung: 'Die Asymptote $y = 0$ von $\tfrac1x$ wandert mit, wenn der Graph um $2$ nach unten verschoben wird.'
hinweise:
  - 'Wo im Term steht die $3$, wo die $2$? Innen wirkt auf $x$ (umgekehrt), außen auf $y$.'
  - 'Die Asymptoten von $\tfrac1x$ sind $x = 0$ und $y = 0$. Sie werden mitverschoben.'
loesung: |
  **Ansatz:** Innen und außen getrennt lesen. $x \to x + 3$ (innen): Verschiebung um $3$ nach **links**.
  ---
  $-2$ (außen): Verschiebung um $2$ nach **unten**.
  ---
  Die Asymptoten $x = 0$ und $y = 0$ von $\tfrac1x$ wandern mit: $x = -3$ und $y = -2$. Probe: $g$ ist bei $x = -3$ nicht definiert.
```

```aufgabe
id: fu-tabelle-verschieben
titel: Transformationen an einer Wertetabelle
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Von einer Funktion $f$ kennt man nur diese Werte:

  | $x$ | $0$ | $1$ | $2$ | $3$ | $4$ |
  |---|---|---|---|---|---|
  | $f(x)$ | $2$ | $5$ | $7$ | $8$ | $6$ |

  Berechne $g(3)$ für $g(x) = f(x - 1) + 2$, außerdem $h(1)$ für $h(x) = f(x + 2)$ und $k(2)$ für $k(x) = 3\,f(x)$.
teile:
  - typ: zahl
    label: '$g(3)$'
    loesung: "7 + 2"
    anzeige: '9'
    fehler:
      - wert: "10"
        meldung: 'Du hast $f(3) + 2$ gerechnet. Bei $g(3)$ bekommt $f$ die Eingabe $3 - 1 = 2$.'
      - wert: "8"
        meldung: 'Erst $f(2) = 7$ ablesen, dann außen $2$ addieren: $7 + 2$.'
  - typ: zahl
    label: '$h(1)$'
    loesung: "8"
    fehler:
      - wert: "7"
        meldung: 'Das ist $f(1) + 2$. Bei $h(1)$ bekommt $f$ die Eingabe $1 + 2 = 3$.'
  - typ: zahl
    label: '$k(2)$'
    loesung: "3*7"
    anzeige: '21'
    fehler:
      - wert: "8"
        meldung: 'Der Wert $8$ ist $f(3)$. Die $3$ in $3\,f(x)$ ist aber keine Eingabe: Bei $3\,f(x)$ wird das **Ergebnis** $f(2)$ mit $3$ multipliziert.'
hinweise:
  - 'Berechne zuerst die Eingabe für $f$, lies dann in der Tabelle ab und rechne zuletzt außen weiter.'
  - 'Beispiel: Für $g(3)$ ist die Eingabe $3 - 1 = 2$.'
loesung: |
  **Ansatz:** Von innen nach außen. Zuerst die Eingabe für $f$ bestimmen, dann ablesen, dann außen weiterrechnen.
  ---
  $g(3) = f(3 - 1) + 2 = f(2) + 2 = 7 + 2 = 9$.
  ---
  $h(1) = f(1 + 2) = f(3) = 8$. Und $k(2) = 3\cdot f(2) = 3\cdot 7 = 21$.
```

```aufgabe
id: fu-transformation-reihenfolge
titel: Fehler bei der Reihenfolge finden
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  Der Graph von $f(x) = x^2$ soll zuerst in $y$-Richtung mit dem Faktor $3$ gestreckt und danach um $2$ nach oben
  verschoben werden. Ein Mitschüler schreibt $g(x) = 3(x^2 + 2)$.

  a) Gib den richtigen Term an.

  b) Wo liegt der Scheitel beim falschen Term des Mitschülers?
teile:
  - typ: term
    label: 'a) richtiger Term'
    loesung: "3x^2 + 2"
    fehler:
      - wert: "3*(x^2 + 2)"
        meldung: 'Das ist der Term des Mitschülers. Ausmultipliziert ist er $3x^2 + 6$: Die Verschiebung wurde mitgestreckt.'
      - wert: "3*(x + 2)^2"
        meldung: 'Eine Verschiebung nach oben wirkt außen am Ergebnis, nicht innen bei $x$.'
  - typ: vektor
    label: 'b) Scheitel des falschen Terms'
    namen: ["x_S", "y_S"]
    loesung: ["0", "6"]
    fehler:
      - wert: ["0", "2"]
        meldung: 'Der falsche Term ist $3x^2 + 6$. Sein Scheitel liegt bei $y = 6$.'
hinweise:
  - 'Strecken heißt: das Ergebnis $x^2$ mit $3$ multiplizieren. Verschieben heißt danach: $2$ addieren.'
  - 'Multipliziere den falschen Term aus, um seinen Scheitel zu sehen.'
loesung: |
  **Ansatz:** Die Schritte werden in der angegebenen Reihenfolge am Ergebnis ausgeführt. Strecken: $x^2 \to 3x^2$.
  ---
  Danach nach oben: $g(x) = 3x^2 + 2$. Der Scheitel liegt bei $(0 \mid 2)$.
  ---
  Der Mitschüler hat erst verschoben und dann gestreckt: $3(x^2 + 2) = 3x^2 + 6$. Sein Scheitel liegt bei $(0 \mid 6)$. Die Reihenfolge ist also nicht egal.
```

```aufgabe
id: fu-strecken-nullstellen
titel: Nullstellen nach dem Strecken
niveau: 2
lernziel: 5
kompetenz: verstehen
angabe: |
  Eine Funktion $f$ hat genau die Nullstellen $-2$ und $6$. Bestimme die Nullstellen von $g(x) = f(2x)$ und von
  $h(x) = 3\,f(x)$.
teile:
  - typ: menge
    label: 'Nullstellen von $g$'
    loesung: ["-1", "3"]
    fehler:
      - wert: ["-4", "12"]
        meldung: 'Innen wirkt umgekehrt. $g(x) = 0$ heißt $f(2x) = 0$, also $2x = -2$ oder $2x = 6$.'
      - wert: ["-2", "6"]
        meldung: 'Das sind die Nullstellen von $f$. Bei $g$ muss $2x$ eine Nullstelle von $f$ sein.'
  - typ: menge
    label: 'Nullstellen von $h$'
    loesung: ["-2", "6"]
    fehler:
      - wert: ["-6", "18"]
        meldung: 'Das Strecken in $y$-Richtung ändert die $x$-Werte nicht. Aus $3\cdot 0$ wird wieder $0$.'
hinweise:
  - '$g(x) = 0$ bedeutet $f(2x) = 0$. Welche Werte darf $2x$ annehmen?'
  - 'Bei $h$ wird nur das Ergebnis mit $3$ multipliziert. Was ist $3\cdot 0$?'
loesung: |
  **Ansatz:** Eine Nullstelle ist eine Eingabe, für die das Ergebnis $0$ ist. Bei $g$ geht die Eingabe $2x$ in $f$.
  ---
  $f(2x) = 0$ gilt für $2x = -2$ oder $2x = 6$, also $x = -1$ oder $x = 3$. Der Graph ist auf die Hälfte zusammengedrückt.
  ---
  $h(x) = 3\,f(x) = 0$ gilt genau dann, wenn $f(x) = 0$ ist. Die Nullstellen bleiben $-2$ und $6$. Strecken in $y$-Richtung lässt Punkte auf der $x$-Achse an ihrem Platz.
```

```aufgabe
id: fu-transformation-punkte
titel: Wohin wandert der Hochpunkt?
niveau: 3
lernziel: 5
kompetenz: begruenden
angabe: |
  Der Graph einer Funktion $f$ hat den Hochpunkt $H(2 \mid 4)$ und die Nullstelle $5$. Betrachte
  $$g(x) = -2\,f(x - 1) + 3.$$
  a) In welchen Punkt geht $H$ über?

  b) Ist dieser Punkt ein Hoch- oder ein Tiefpunkt von $g$?

  c) In welchen Punkt geht der Punkt $(5 \mid 0)$ über?
teile:
  - typ: vektor
    label: 'a) Bild von $H$'
    namen: ["x", "y"]
    loesung: ["3", "-5"]
    fehler:
      - wert: ["1", "-5"]
        meldung: 'Innen steht $x - 1$. Das verschiebt um $1$ nach **rechts**, also von $2$ nach $3$.'
      - wert: ["3", "11"]
        meldung: 'Erst mit $-2$ multiplizieren, dann $3$ addieren: $-2\cdot 4 + 3 = -5$.'
      - wert: ["3", "-2"]
        meldung: 'Erst mit $-2$ multiplizieren: $-8$. Dann $+3$. Das ergibt $-5$.'
  - typ: auswahl
    label: 'b)'
    optionen: ['Hochpunkt', 'Tiefpunkt']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Der Faktor $-2$ spiegelt an der $x$-Achse. Aus dem höchsten Punkt wird der tiefste.'
  - typ: vektor
    label: 'c) Bild von $(5 \mid 0)$'
    namen: ["x", "y"]
    loesung: ["6", "3"]
    fehler:
      - wert: ["6", "0"]
        meldung: 'Der Wert $0$ wird mit $-2$ multipliziert, das bleibt $0$. Danach kommt aber noch $+3$ dazu.'
hinweise:
  - 'Waagrecht: Für welches $x$ ist die Eingabe $x - 1$ gleich $2$? Senkrecht: Rechne mit dem Wert $4$ außen weiter.'
  - 'Die Reihenfolge außen ist: mit $-2$ multiplizieren, dann $3$ addieren. Ein negativer Faktor spiegelt.'
loesung: |
  **Ansatz:** Ein Punkt $(u \mid v)$ des Graphen von $f$ geht in den Punkt über, an dem $g$ dieselbe Eingabe für $f$ verwendet. Die $x$-Koordinate folgt aus $x - 1 = u$, die $y$-Koordinate aus $-2v + 3$.
  ---
  a) $x - 1 = 2$ ergibt $x = 3$. Der Wert ist $g(3) = -2\cdot f(2) + 3 = -2\cdot 4 + 3 = -5$. Also $H$ geht über in $(3 \mid -5)$.
  ---
  b) Der Faktor $-2$ spiegelt an der $x$-Achse. Aus dem höchsten Punkt in der Umgebung wird der tiefste. Es ist ein **Tiefpunkt**.
  ---
  c) $x - 1 = 5$ ergibt $x = 6$, und $g(6) = -2\cdot 0 + 3 = 3$. **Antwort:** Der Punkt $(5 \mid 0)$ geht über in $(6 \mid 3)$. Die Nullstelle von $f$ ist bei $g$ also keine Nullstelle mehr.
gefuehrt:
  - text: 'Welche Eingabe bekommt $f$ in $g(x) = -2\,f(x - 1) + 3$ an der Stelle $x = 3$?'
    teil: { typ: zahl, loesung: "2" }
    erklaerung: 'Die Eingabe ist $3 - 1 = 2$. An der Stelle $3$ verwendet $g$ also den Wert $f(2) = 4$.'
  - text: 'Rechne außen weiter: Was ist $-2\cdot 4 + 3$?'
    teil: { typ: zahl, loesung: "-5", fehler: [ { wert: "-14", meldung: 'Zuerst multiplizieren, dann addieren: $-8 + 3$.' } ] }
    erklaerung: '$-8 + 3 = -5$. Der Hochpunkt $(2 \mid 4)$ geht in $(3 \mid -5)$ über.'
  - text: 'Überlege, was der negative Faktor $-2$ mit einem Hochpunkt macht.'
    erklaerung: 'Ein negativer Faktor spiegelt an der $x$-Achse. Was vorher am höchsten war, ist jetzt am tiefsten. Also wird ein Tiefpunkt daraus.'
  - text: 'An welcher Stelle $x$ bekommt $f$ die Eingabe $5$?'
    teil: { typ: zahl, loesung: "6" }
    erklaerung: '$x - 1 = 5$ ergibt $x = 6$. Dort ist $g(6) = -2\cdot 0 + 3 = 3$.'
```

## Verkettung und Umkehrfunktion

```aufgabe
id: fu-umk-check-umstellen
titel: Eine Formel nach x umstellen
niveau: 1
art: check
angabe: |
  Stelle $y = 3x - 6$ nach $x$ um.
  Herkunft: [2.12 Formeln umstellen](/lernen/mathe3/gleichungen/formeln-umstellen).
teile:
  - typ: term
    label: '$x =$'
    variable: y
    loesung: "(y + 6)/3"
    fehler:
      - wert: "y/3 + 6"
        meldung: 'Zuerst $6$ addieren, dann durch $3$ dividieren. Dabei wird auch die $6$ durch $3$ geteilt: $\tfrac{y + 6}{3} = \tfrac y3 + 2$.'
      - wert: "(y - 6)/3"
        meldung: 'Um $-6$ wegzubekommen, addierst du $6$ auf beiden Seiten.'
hinweise:
  - 'Addiere $6$ auf beiden Seiten und dividiere dann durch $3$.'
loesung: |
  Wir addieren $6$ auf beiden Seiten: $y + 6 = 3x$.
  ---
  Division durch $3$: $x = \tfrac{y + 6}{3}$. Probe mit $x = 4$: $y = 6$, und $\tfrac{6 + 6}{3} = 4$.
```

In dieser Lektion geht es um zwei Arten, aus Funktionen neue zu machen. Bei der **Verkettung** schaltet man zwei
Funktionen hintereinander: Die Ausgabe der ersten wird die Eingabe der zweiten. Bei der **Umkehrfunktion** läuft man
eine Funktion rückwärts: Man kennt die Ausgabe und fragt nach der Eingabe. Beides braucht man später ständig, die
Verkettung für die Kettenregel und die Umkehrfunktion für den Logarithmus.

### Verkettung: zwei Maschinen hintereinander

Viele Funktionen sind aus einfacheren zusammengesetzt. $h(x) = \sqrt{x^2 + 1}$ rechnet erst $x^2 + 1$ aus und zieht dann
die Wurzel. Im Bild der Maschinen: Die erste Maschine rechnet $x^2 + 1$, ihre Ausgabe fällt direkt in die zweite
Maschine, und die zieht die Wurzel.

:::definition[Verkettung]
Für Funktionen $f$ und $g$ heißt
$$(f \circ g)(x) = f\big(g(x)\big)$$
die **Verkettung** von $f$ und $g$. Man liest $f \circ g$ als „$f$ nach $g$“. Zuerst wird $g$ angewendet, die **innere
Funktion**. Dann wird $f$ angewendet, die **äußere Funktion**. Definiert ist das für alle $x$ aus $D_g$, für die
$g(x)$ in $D_f$ liegt.
:::

:::beispiel[Verkettung in beiden Reihenfolgen]
$f(x) = x^2 + 1$ und $g(x) = 2x - 3$.

1. $f(g(x))$: In $f$ wird für jedes $x$ der ganze Term $g(x) = 2x - 3$ eingesetzt:
   $f(g(x)) = (2x - 3)^2 + 1 = 4x^2 - 12x + 10$.
2. $g(f(x))$: In $g$ wird der ganze Term $f(x) = x^2 + 1$ eingesetzt: $g(f(x)) = 2(x^2 + 1) - 3 = 2x^2 - 1$.
3. An der Stelle $x = 2$: $g(2) = 1$, also $f(g(2)) = f(1) = 2$. Dagegen ist $f(2) = 5$, also $g(f(2)) = g(5) = 7$.

Das Beispiel zeigt: **Die Reihenfolge zählt.** Im Allgemeinen ist $f \circ g \ne g \circ f$. Ein Nichtbeispiel für
eine Verkettung ist das Produkt $f(x)\cdot g(x) = (x^2 + 1)(2x - 3)$. Dort rechnen beide Funktionen nebeneinander, nicht
hintereinander.
:::

:::achtung[Verkettung mit Produkt verwechselt]
Eine typische Fehlrechnung bei $f(x) = x^2 + 1$ und $g(x) = 2x - 3$:
$$f(g(x)) = (x^2 + 1)\cdot(2x - 3) \qquad\text{(falsch)}.$$
Das ist das Produkt, nicht die Verkettung. **Richtig:** $g(x)$ wird **in** $f$ eingesetzt, also
$f(g(x)) = (2x - 3)^2 + 1$. Kontrolle an $x = 2$: Die richtige Formel ergibt $2$, das Produkt ergibt $5\cdot 1 = 5$.
:::

:::beispiel[Spritkosten als Verkettung]
Ein Auto verbraucht $6$ Liter auf $100$ km. Für $s$ Kilometer braucht es also $L(s) = 0{,}06\,s$ Liter. Ein Liter kostet
$1{,}70$ Euro, also kosten $L$ Liter $K(L) = 1{,}70\,L$ Euro. Die Kosten für $s$ Kilometer sind die Verkettung:
$$K(L(s)) = 1{,}70\cdot 0{,}06\,s = 0{,}102\,s \qquad (\text{Euro},\ s \text{ in km}).$$
Die innere Funktion macht aus Kilometern Liter, die äußere aus Litern Euro. Die Einheiten passen zusammen: km mal
Liter pro km mal Euro pro Liter ergibt Euro. Für $250$ km sind das $25{,}50$ Euro.
:::

**Zerlegen** ist die Umkehrung des Verkettens: Bei $h(x) = (3x + 1)^4$ ist $3x + 1$ innen und „hoch $4$“ außen. Wer
innere und äußere Funktion sicher erkennt, hat später mit der Kettenregel kein Problem, siehe
[9.7 Kettenregel, höhere Ableitungen und die Wahl der richtigen Regel](/lernen/mathe3/differentialrechnung/kettenregel-hoehere-ableitungen-und-die-wahl-der-richtigen-regel).
Bei $e^{-0{,}2t}$ ist $-0{,}2t$ innen und die $e$-Funktion außen.

```aufgabe
id: fu-umk-check-rueckwaerts
titel: Kann man zurückrechnen?
niveau: 1
art: check
angabe: |
  Bei welcher Funktion kannst du aus jeder Ausgabe eindeutig auf die Eingabe zurückschließen? Überlege, bevor du weiterliest.
teile:
  - typ: auswahl
    optionen: ['$f(x) = x^2$ auf $\R$', '$g(x) = x^3$ auf $\R$', '$h(x) = |x|$ auf $\R$']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Zur Ausgabe $4$ gehören die Eingaben $2$ und $-2$. Rückwärts ist nicht klar, welche gemeint war.'
      - wert: 2
        meldung: 'Zur Ausgabe $5$ gehören die Eingaben $5$ und $-5$. Der Rückschluss ist nicht eindeutig.'
hinweise:
  - 'Suche bei jeder Funktion zwei verschiedene Eingaben mit derselben Ausgabe.'
loesung: |
  Bei $x^2$ und $|x|$ haben $a$ und $-a$ dieselbe Ausgabe. Dort ist kein eindeutiger Rückschluss möglich.
  ---
  Bei $x^3$ haben verschiedene Eingaben immer verschiedene Ausgaben, denn $x^3$ steigt streng. Zu jeder Ausgabe gehört genau eine Eingabe, zum Beispiel zu $-8$ nur $-2$.
```

### Umkehrfunktion: rückwärts rechnen

Eine Funktion beantwortet die Frage: Welche Ausgabe gehört zur Eingabe $x$? Oft will man es umgekehrt wissen. Zu
welcher Eingabe gehört eine bekannte Ausgabe $y$? Beim Taxi: Wie weit komme ich für $25$ Euro? Beim Wachstum: Wann ist
der Bestand doppelt so groß? Eindeutig beantworten kann man das nur, wenn verschiedene Eingaben verschiedene Ausgaben
haben. Sonst wüsste man nicht, welche Eingabe gemeint ist.

:::definition[Injektiv, Umkehrfunktion]
$f\colon D \to W$ heißt **injektiv** oder **umkehrbar**, wenn verschiedene Eingaben immer verschiedene Ausgaben haben:
Aus $x_1 \ne x_2$ folgt $f(x_1) \ne f(x_2)$. Dann gibt es zu jedem $y \in W$ genau ein $x \in D$ mit $f(x) = y$, und die
Funktion
$$f^{-1}\colon W \to D, \qquad y \mapsto \text{das } x \text{ mit } f(x) = y,$$
heißt **Umkehrfunktion** von $f$. Man liest $f^{-1}$ als „$f$ invers“. Es gilt $f^{-1}(f(x)) = x$ für alle $x \in D$
und $f(f^{-1}(y)) = y$ für alle $y \in W$.
:::

Die Umkehrfunktion vertauscht also Eingabe und Ausgabe. Die Definitionsmenge von $f^{-1}$ ist die Wertemenge von $f$,
und die Wertemenge von $f^{-1}$ ist die Definitionsmenge von $f$. **Nicht umkehrbar** ist zum Beispiel $x^2$ auf $\R$:
Zur Ausgabe $9$ gehören die Eingaben $3$ und $-3$. Rückwärts wüsste man nicht, welche gemeint ist.

:::satz[Streng monotone Funktionen sind umkehrbar]
Ist $f$ auf $D$ streng monoton steigend oder streng monoton fallend, dann ist $f$ injektiv und besitzt eine
Umkehrfunktion. Diese ist im gleichen Sinn streng monoton.
:::

:::beweis
Sei $f$ streng monoton steigend, und seien $x_1 \ne x_2$. Wir dürfen die Namen so wählen, dass $x_1 < x_2$ ist. Wegen
der strengen Monotonie ist dann $f(x_1) < f(x_2)$. Insbesondere sind die beiden Werte verschieden. Das ist genau die
Injektivität. Für fallende Funktionen läuft der Beweis gleich, nur mit $f(x_1) > f(x_2)$.
:::

:::beispiel[Umkehrfunktion einer linearen Funktion]
$f(x) = 3x - 6$ ist streng monoton steigend, denn $k = 3 > 0$.
1. Wir schreiben $y = 3x - 6$ und lösen nach $x$ auf: $x = \tfrac{y + 6}{3}$.
2. Wir benennen um, damit die Eingabe wieder $x$ heißt: $f^{-1}(x) = \tfrac{x + 6}{3} = \tfrac13 x + 2$.
3. Probe: $f(4) = 6$ und $f^{-1}(6) = \tfrac{12}{3} = 4$. Die Umkehrfunktion bringt uns zurück zum Start.
:::

:::merke[Umkehrfunktion berechnen]
1. Prüfen, ob $f$ umkehrbar ist, etwa durch strenge Monotonie. Wenn nicht: Definitionsmenge einschränken.
2. $y = f(x)$ hinschreiben und **nach $x$ auflösen**.
3. Die Variablen umbenennen, damit man wieder $f^{-1}(x)$ schreiben kann.
4. Definitionsmenge von $f^{-1}$ ist die Wertemenge von $f$.
5. Probe: $f^{-1}(f(x)) = x$ an einer Stelle prüfen.
:::

**Geometrisch** entsteht der Graph von $f^{-1}$ durch **Spiegelung an der Geraden $y = x$**. Liegt der Punkt $(a \mid b)$
auf dem Graphen von $f$, dann gilt $f(a) = b$, also $f^{-1}(b) = a$. Der Punkt $(b \mid a)$ liegt auf dem Graphen von
$f^{-1}$. Vertauschen der Koordinaten ist genau die Spiegelung an $y = x$.

:::beispiel[Einschränken der Definitionsmenge]
$f(x) = x^2$ ist auf $\R$ nicht umkehrbar, denn $f(-2) = f(2)$. Auf $[0, \infty)$ ist $f$ aber streng monoton steigend.
Dort gilt: Aus $y = x^2$ folgt $x = \sqrt{y}$, denn die negative Wurzel entfällt wegen $x \ge 0$. Die Umkehrfunktion
ist $\sqrt{x}$ auf $[0, \infty)$. Genau deshalb ist $\sqrt{x}$ als nichtnegative Zahl festgelegt.
:::

```plot
x: [-1, 5]
y: [-1, 5]
gleich: true
graphen:
  - { f: "x^2", label: "x² auf [0, ∞)", farbe: 0, von: 0, bis: 2.2 }
  - { f: "sqrt(x)", label: "√x", farbe: 1 }
  - { f: "x", label: "y = x", farbe: 3, gestrichelt: true }
punkte:
  - { x: 2, y: 4, label: "(2 | 4)", farbe: 0 }
  - { x: 4, y: 2, label: "(4 | 2)", farbe: 1 }
beschriftung: Der rechte Ast der Normalparabel und die Wurzelfunktion sind Spiegelbilder an der Geraden y = x. Aus dem Punkt (2 | 4) wird der Punkt (4 | 2).
```

:::achtung[Die Umkehrfunktion ist nicht der Kehrwert]
Eine typische Fehlrechnung bei $f(x) = 2x + 1$: „$f^{-1}(x) = \tfrac{1}{2x + 1}$.“ Das hochgestellte $-1$ verleitet
dazu, an $\tfrac1f$ zu denken. Probe: $f(1) = 3$, aber $\tfrac{1}{2\cdot 3 + 1} = \tfrac17 \ne 1$. **Richtig:** Aus
$y = 2x + 1$ folgt $x = \tfrac{y - 1}{2}$, also $f^{-1}(x) = \tfrac{x - 1}{2}$. Probe: $f^{-1}(3) = 1$.
:::

:::achtung[Beim Wurzelziehen die Einschränkung vergessen]
Eine typische Fehlrechnung bei $f(x) = (x + 2)^2 - 1$ auf $[-2, \infty)$: „$x + 2 = \pm\sqrt{y + 1}$, also
$f^{-1}(x) = -2 \pm \sqrt{x + 1}$.“ Das ist keine Funktion, denn jeder Eingabe $x > -1$ würden zwei Werte zugeordnet.
**Richtig:** Wegen $x \ge -2$ ist $x + 2 \ge 0$. Nur die positive Wurzel passt: $f^{-1}(x) = -2 + \sqrt{x + 1}$ mit
$x \ge -1$. Probe: $f(0) = 3$ und $f^{-1}(3) = -2 + \sqrt4 = 0$.
:::

Die wichtigsten Paare aus Funktion und Umkehrfunktion:

| $f$ | $f^{-1}$ | Bedingung |
|---|---|---|
| $x^2$ | $\sqrt x$ | nur für $x \ge 0$. |
| $x^3$ | $\sqrt[3]{x}$ | für alle reellen $x$. |
| $e^x$ | $\ln x$ | $\ln$ nur für $x > 0$. |
| $a^x$ | $\log_a x$ | $a > 0$ und $a \ne 1$. |

Das Paar $e^x$ und $\ln x$ behandelt [4.11 Logarithmusfunktionen](/lernen/mathe3/funktionen/logarithmusfunktionen).

```reflexion
frage: Warum gilt immer $f^{-1}(f(x)) = x$? Erkläre es mit dem Bild der Maschine, die vorwärts und rückwärts läuft.
antwort: |
  Die Maschine $f$ macht aus der Eingabe $x$ die Ausgabe $y = f(x)$. Die Umkehrmaschine $f^{-1}$ bekommt diese Ausgabe und
  sucht die Eingabe, die zu ihr geführt hat. Weil $f$ injektiv ist, gibt es genau eine solche Eingabe, nämlich das
  ursprüngliche $x$. Vorwärts und dann rückwärts landet man also wieder am Start. Bei einer nicht injektiven Funktion wie
  $x^2$ auf $\R$ ginge das nicht: Aus der Ausgabe $9$ könnte die Maschine nicht erkennen, ob vorher $3$ oder $-3$ hineinkam.
```

```aufgabe
id: fu-verkettung
titel: Verkettung berechnen
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Es sei $f(x) = x^2 - 1$ und $g(x) = 3x + 2$. Berechne $(f \circ g)(x)$, $(g \circ f)(x)$ und $(f \circ g)(-1)$.
teile:
  - typ: term
    label: '$f(g(x))$'
    loesung: "(3x+2)^2 - 1"
    fehler:
      - wert: "3*(x^2-1) + 2"
        meldung: 'Das ist $g(f(x))$. Bei $f(g(x))$ ist $g$ innen: $g(x)$ wird in $f$ eingesetzt.'
      - wert: "(x^2-1)*(3x+2)"
        meldung: 'Das ist das Produkt. Bei der Verkettung wird $g(x)$ **in** $f$ eingesetzt.'
  - typ: term
    label: '$g(f(x))$'
    loesung: "3*(x^2-1) + 2"
    fehler:
      - wert: "3x^2 - 1 + 2"
        meldung: 'Die $3$ multipliziert die ganze Klammer $(x^2 - 1)$, also auch die $-1$.'
  - typ: zahl
    label: '$f(g(-1))$'
    loesung: "0"
    fehler:
      - wert: "-1"
        meldung: '$g(-1) = -1$ ist nur das Zwischenergebnis. Danach wird noch $f$ angewendet: $f(-1) = 0$.'
      - wert: "2"
        meldung: 'Das ist $g(f(-1)) = g(0) = 2$. Bei $f(g(-1))$ ist $g$ innen und wird zuerst ausgewertet.'
hinweise:
  - 'Bei $f(g(x))$ setzt du den ganzen Term $g(x)$ für jedes $x$ in $f$ ein.'
loesung: |
  **Ansatz:** Von innen nach außen. $f(g(x)) = (3x + 2)^2 - 1 = 9x^2 + 12x + 3$.
  ---
  $g(f(x)) = 3(x^2 - 1) + 2 = 3x^2 - 1$.
  ---
  $g(-1) = -1$ und $f(-1) = 1 - 1 = 0$. Also $f(g(-1)) = 0$. Kontrolle mit dem Term: $9 - 12 + 3 = 0$.
```

```aufgabe
id: fu-umkehr-linear
titel: Umkehrfunktion einer linearen Funktion
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Bestimme die Umkehrfunktion von $f(x) = \dfrac{2x - 1}{3}$.
teile:
  - typ: term
    label: '$f^{-1}(x)$'
    loesung: "(3x+1)/2"
    fehler:
      - wert: "3/(2x - 1)"
        meldung: 'Das ist der Kehrwert von $f$. Die Umkehrfunktion bekommst du, indem du $y = f(x)$ nach $x$ auflöst.'
      - wert: "(3x - 1)/2"
        meldung: 'Aus $3y = 2x - 1$ folgt $2x = 3y + 1$. Das Vorzeichen der $1$ wechselt.'
hinweise:
  - '$y = \tfrac{2x - 1}{3}$ nach $x$ auflösen: zuerst mit $3$ multiplizieren.'
loesung: |
  **Ansatz:** $y = f(x)$ nach $x$ auflösen. $y = \dfrac{2x - 1}{3}$, mal $3$: $3y = 2x - 1$. Plus $1$ und durch $2$: $x = \dfrac{3y + 1}{2}$.
  ---
  Umbenennen: $f^{-1}(x) = \dfrac{3x + 1}{2}$. Probe: $f(2) = 1$ und $f^{-1}(1) = \tfrac{4}{2} = 2$.
```

```aufgabe
id: fu-verkettung-zerlegen
titel: Innere und äußere Funktion erkennen
niveau: 2
lernziel: 6
kompetenz: verstehen
angabe: |
  Schreibe $h_1(x) = \sqrt{5 - 2x}$ und $h_2(x) = (3x + 1)^4$ jeweils als Verkettung $f(g(x))$. Gib die innere Funktion
  $g$ als Term in $x$ an und die äußere Funktion $f$ als Term in der Variablen $u$.
teile:
  - typ: term
    label: '$h_1$: innere Funktion $g(x)$'
    loesung: "5 - 2x"
    fehler:
      - wert: "sqrt(x)"
        meldung: 'Die Wurzel wird zuletzt angewendet. Sie ist die äußere Funktion.'
  - typ: term
    label: '$h_1$: äußere Funktion $f(u)$'
    variable: u
    loesung: "sqrt(u)"
    bereich: [0.5, 4]
    fehler:
      - wert: "5 - 2u"
        meldung: 'Zuerst wird $5 - 2x$ ausgerechnet. Das ist innen. Was passiert danach mit dem Ergebnis?'
  - typ: term
    label: '$h_2$: innere Funktion $g(x)$'
    loesung: "3x + 1"
    fehler:
      - wert: "x^4"
        meldung: 'Hoch $4$ wird zuletzt gerechnet, auf die ganze Klammer. Das ist die äußere Funktion.'
  - typ: term
    label: '$h_2$: äußere Funktion $f(u)$'
    variable: u
    loesung: "u^4"
    fehler:
      - wert: "3u + 1"
        meldung: 'Das ist die innere Funktion. Die äußere nimmt deren Ergebnis $u$ und rechnet $u^4$.'
hinweise:
  - 'Frage dich: Was rechnet ein Taschenrechner zuerst, was zuletzt? Zuerst ist innen.'
  - 'Bei $h_1$ rechnet man zuerst $5 - 2x$ und zieht dann die Wurzel.'
loesung: |
  **Ansatz:** Die innere Funktion wird zuerst ausgewertet, die äußere zuletzt.
  ---
  $h_1$: zuerst $5 - 2x$, dann die Wurzel. Also $g(x) = 5 - 2x$ und $f(u) = \sqrt u$.
  ---
  $h_2$: zuerst $3x + 1$, dann hoch $4$. Also $g(x) = 3x + 1$ und $f(u) = u^4$. Probe: $f(g(x)) = (3x + 1)^4 = h_2(x)$.
```

```aufgabe
id: fu-verkettung-definitionsmenge
titel: Definitionsmenge einer Verkettung
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Es sei $f(x) = \sqrt{x}$ und $g(x) = 4 - x^2$.

  a) Gib $f(g(x))$ an und berechne $f(g(1))$ auf drei Nachkommastellen.

  b) Für welche $x$ ist $f(g(x))$ definiert? Gib die Ränder des Intervalls $[u, o]$ an.
teile:
  - typ: zahl
    label: 'a) $f(g(1))$'
    loesung: "sqrt(3)"
    anzeige: '\sqrt3 \approx 1{,}732'
    fehler:
      - wert: "3"
        meldung: '$g(1) = 3$ stimmt. Danach wendet man noch $f$ an: $f(3) = \sqrt3$.'
  - typ: vektor
    label: 'b) $[u, o]$'
    namen: ["u", "o"]
    loesung: ["-2", "2"]
    fehler:
      - wert: ["0", "4"]
        meldung: 'Gesucht sind die $x$, für die $g(x) = 4 - x^2 \ge 0$ ist, nicht die Werte von $g$.'
      - wert: ["0", "2"]
        meldung: 'Auch negative $x$ erlaubt: $g(-1) = 3 \ge 0$.'
hinweise:
  - 'Die äußere Funktion $\sqrt{\ }$ braucht eine Eingabe $\ge 0$. Die Eingabe ist $g(x)$.'
  - 'Löse $4 - x^2 \ge 0$, also $x^2 \le 4$.'
loesung: |
  **Ansatz:** $f(g(x)) = \sqrt{4 - x^2}$ ist definiert, wenn die Ausgabe von $g$ in der Definitionsmenge von $f$ liegt, also $4 - x^2 \ge 0$.
  ---
  a) $g(1) = 3$, also $f(g(1)) = \sqrt3 \approx 1{,}732$.
  ---
  b) $x^2 \le 4$ gilt für $-2 \le x \le 2$. **Antwort:** $f \circ g$ ist auf $[-2, 2]$ definiert. Der Graph ist der obere Halbkreis mit Radius $2$.
```

```aufgabe
id: fu-umkehr-graph
titel: Umkehrfunktion ohne Term
niveau: 2
lernziel: 6
kompetenz: verstehen
angabe: |
  Von einer streng monoton steigenden Funktion $f$ weiß man: $f(2) = 5$, $f(3) = 7$ und $f(4) = 11$.

  a) Bestimme $f^{-1}(7)$.

  b) Welcher Punkt liegt sicher auf dem Graphen von $f^{-1}$?

  c) Berechne $f^{-1}(f(4))$.
teile:
  - typ: zahl
    label: 'a) $f^{-1}(7)$'
    loesung: "3"
    fehler:
      - wert: "1/7"
        meldung: '$f^{-1}$ ist nicht der Kehrwert. Gesucht ist die Eingabe, die bei $f$ zur Ausgabe $7$ führt.'
      - wert: "11"
        meldung: 'Gesucht ist das $x$ mit $f(x) = 7$. In der Angabe steht $f(3) = 7$.'
  - typ: auswahl
    label: 'b)'
    optionen: ['$(2 \mid 5)$', '$(5 \mid 2)$', '$(-2 \mid -5)$']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Dieser Punkt liegt auf dem Graphen von $f$. Für $f^{-1}$ werden die Koordinaten vertauscht.'
      - wert: 2
        meldung: 'Spiegeln an $y = x$ vertauscht die Koordinaten. Es ändert keine Vorzeichen.'
  - typ: zahl
    label: 'c) $f^{-1}(f(4))$'
    loesung: "4"
    fehler:
      - wert: "11"
        meldung: '$f(4) = 11$, und $f^{-1}$ führt die $11$ wieder zur Eingabe $4$ zurück.'
hinweise:
  - '$f^{-1}(y)$ ist das $x$ mit $f(x) = y$.'
  - 'Spiegeln an der Geraden $y = x$ vertauscht $x$- und $y$-Koordinate.'
loesung: |
  **Ansatz:** Die Umkehrfunktion vertauscht Eingabe und Ausgabe. Aus $f(a) = b$ wird $f^{-1}(b) = a$.
  ---
  a) $f(3) = 7$, also $f^{-1}(7) = 3$. b) Aus $(2 \mid 5)$ auf dem Graphen von $f$ wird $(5 \mid 2)$ auf dem Graphen von $f^{-1}$.
  ---
  c) $f(4) = 11$ und $f^{-1}(11) = 4$. Vorwärts und rückwärts führt zum Start zurück.
```

```aufgabe
id: fu-umkehr-taxi
titel: Wie weit für 25 Euro?
niveau: 3
lernziel: 6
kompetenz: modellieren
angabe: |
  Eine Taxifahrt über $s$ Kilometer kostet $K(s) = 2{,}4\,s + 3{,}8$ Euro.

  a) Bestimme die Umkehrfunktion $s(K)$, also die Strecke in Abhängigkeit vom Preis.

  b) Wie weit kommt man mit $25$ Euro? Runde auf zwei Nachkommastellen.

  c) Welche Bedeutung hat die Zahl $3{,}8$ für die Definitionsmenge der Umkehrfunktion?
teile:
  - typ: term
    label: 'a) $s(K)$'
    variable: K
    loesung: "(K - 3.8)/2.4"
    fehler:
      - wert: "1/(2.4*K + 3.8)"
        meldung: 'Das ist der Kehrwert, nicht die Umkehrfunktion. Löse $K = 2{,}4\,s + 3{,}8$ nach $s$ auf.'
      - wert: "K/2.4 - 3.8"
        meldung: 'Zuerst $3{,}8$ abziehen, dann durch $2{,}4$ teilen. Dabei wird auch die $3{,}8$ geteilt.'
  - typ: zahl
    label: 'b) Strecke'
    einheit: km
    loesung: "(25 - 3.8)/2.4"
    toleranz: 0.01
    anzeige: '8{,}83'
    fehler:
      - wert: "25/2.4"
        meldung: 'Die Grundgebühr $3{,}80$ Euro ist schon weg, bevor der erste Kilometer gefahren ist.'
  - typ: text
    label: 'c)'
    muster: 'Die $3{,}80$ Euro sind die Grundgebühr. Weniger kostet keine Fahrt. Die Umkehrfunktion ist daher erst ab $K = 3{,}8$ sinnvoll, ihre Definitionsmenge ist $[3{,}8;\ \infty)$.'
hinweise:
  - 'Setze $K = 2{,}4\,s + 3{,}8$ an und löse nach $s$ auf.'
  - 'Die Definitionsmenge der Umkehrfunktion ist die Wertemenge von $K$. Was kostet die kürzeste Fahrt?'
loesung: |
  **Ansatz:** Die Umkehrfunktion beantwortet die Frage „Welche Strecke gehört zu einem Preis?“. Aus $K = 2{,}4\,s + 3{,}8$ folgt $s = \dfrac{K - 3{,}8}{2{,}4}$.
  ---
  b) $s(25) = \dfrac{25 - 3{,}8}{2{,}4} = \dfrac{21{,}2}{2{,}4} \approx 8{,}83$ km.
  ---
  c) Die kürzeste Fahrt kostet die Grundgebühr $3{,}80$ Euro. Die Wertemenge von $K$ beginnt bei $3{,}8$, also beginnt dort die Definitionsmenge von $s(K)$.
  **Antwort:** Mit $25$ Euro kommt man etwa $8{,}83$ km weit. Probe: $2{,}4\cdot 8{,}83 + 3{,}8 \approx 25$.
```

```aufgabe
id: fu-umkehr-quadratisch
titel: Umkehrfunktion mit Einschränkung
niveau: 3
lernziel: 6
kompetenz: begruenden
angabe: |
  Gegeben ist $f(x) = (x - 1)^2 + 2$.

  a) Begründe, warum $f$ auf $\R$ keine Umkehrfunktion besitzt.

  b) Schränke $f$ auf $D = [1, \infty)$ ein und bestimme die Umkehrfunktion samt Definitionsmenge.
teile:
  - typ: text
    label: 'a)'
    muster: |
      $f$ ist nicht injektiv: $f(0) = 3 = f(2)$. Zur Ausgabe $3$ gehören zwei Eingaben. Rückwärts wäre nicht klar, welche gemeint ist.
  - typ: term
    label: 'b) $f^{-1}(x)$'
    loesung: "1 + sqrt(x-2)"
    bereich: [2.5, 8]
    fehler:
      - wert: "1 - sqrt(x-2)"
        meldung: 'Auf $[1, \infty)$ ist $x - 1 \ge 0$. Darum gilt die positive Wurzel.'
      - wert: "sqrt(x-2) - 1"
        meldung: 'Aus $x - 1 = \sqrt{y - 2}$ folgt $x = 1 + \sqrt{y - 2}$. Das Vorzeichen der $1$ ändert sich beim Auflösen.'
  - typ: zahl
    label: 'b) linker Rand der Definitionsmenge von $f^{-1}$'
    loesung: "2"
    fehler:
      - wert: "1"
        meldung: 'Die Definitionsmenge von $f^{-1}$ ist die **Wertemenge** von $f$. Der kleinste Wert von $f$ ist $f(1) = 2$.'
hinweise:
  - 'Auf $[1, \infty)$ ist $x - 1 \ge 0$. Beim Wurzelziehen bleibt deshalb nur die positive Wurzel.'
  - 'Die Definitionsmenge von $f^{-1}$ ist die Wertemenge von $f$ auf $[1, \infty)$.'
loesung: |
  **Ansatz:** Ohne Injektivität keine Umkehrfunktion. a) $f(0) = 1 + 2 = 3$ und $f(2) = 1 + 2 = 3$. Zwei Eingaben, eine Ausgabe: nicht injektiv.
  ---
  b) Auf $[1, \infty)$ ist $f$ streng monoton steigend, der rechte Parabelast. Aus $y = (x - 1)^2 + 2$ folgt $(x - 1)^2 = y - 2$.
  ---
  Wegen $x - 1 \ge 0$ gilt $x - 1 = +\sqrt{y - 2}$, also $x = 1 + \sqrt{y - 2}$.
  ---
  $f^{-1}(x) = 1 + \sqrt{x - 2}$ mit $D_{f^{-1}} = W_f = [2, \infty)$. Probe: $f(3) = 6$ und $f^{-1}(6) = 1 + \sqrt4 = 3$.
gefuehrt:
  - text: 'Finde zwei verschiedene Eingaben mit derselben Ausgabe. Berechne dazu $f(0)$.'
    teil: { typ: zahl, loesung: "3" }
    erklaerung: '$f(0) = 1 + 2 = 3$ und ebenso $f(2) = 3$. Also ist $f$ auf $\R$ nicht injektiv.'
  - text: 'Löse $y = (x - 1)^2 + 2$ nach $(x - 1)^2$ auf.'
    teil: { typ: term, variable: y, loesung: "y - 2" }
    erklaerung: 'Wir subtrahieren $2$: $(x - 1)^2 = y - 2$.'
  - text: 'Wegen $x \ge 1$ ist $x - 1 \ge 0$. Gib $x$ als Term in $y$ an.'
    teil: { typ: term, variable: y, loesung: "1 + sqrt(y - 2)", bereich: [2.5, 8], fehler: [ { wert: "1 - sqrt(y - 2)", meldung: 'Die negative Wurzel würde $x < 1$ liefern. Das liegt nicht in der eingeschränkten Definitionsmenge.' } ] }
    erklaerung: '$x - 1 = \sqrt{y - 2}$, also $x = 1 + \sqrt{y - 2}$.'
  - text: Benenne um und bestimme die Definitionsmenge der Umkehrfunktion.
    erklaerung: '$f^{-1}(x) = 1 + \sqrt{x - 2}$. Die Wertemenge von $f$ auf $[1, \infty)$ ist $[2, \infty)$. Das ist die Definitionsmenge von $f^{-1}$.'
```

```aufgabe
id: fu-umkehr-rational
titel: Umkehrfunktion einer rationalen Funktion
niveau: 3
lernziel: 6
kompetenz: rechnen
angabe: |
  Gegeben ist $f(x) = \dfrac{2x + 1}{x - 4}$ mit $D = \R \setminus \{4\}$.

  a) Bestimme die Umkehrfunktion $f^{-1}$.

  b) Welche Zahl gehört nicht zur Definitionsmenge von $f^{-1}$? Erkläre den Zusammenhang mit der Asymptote von $f$.
teile:
  - typ: term
    label: 'a) $f^{-1}(x)$'
    loesung: "(4x + 1)/(x - 2)"
    bereich: [3, 9]
    fehler:
      - wert: "(x - 4)/(2x + 1)"
        meldung: 'Das ist der Kehrwert. Löse $y(x - 4) = 2x + 1$ nach $x$ auf.'
      - wert: "(4x - 1)/(x - 2)"
        meldung: 'Aus $xy - 4y = 2x + 1$ folgt $xy - 2x = 4y + 1$. Prüfe das Vorzeichen der $1$.'
  - typ: zahl
    label: 'b) ausgeschlossene Zahl'
    loesung: "2"
    fehler:
      - wert: "4"
        meldung: '$4$ fehlt in der Definitionsmenge von $f$. Bei $f^{-1}$ fehlt der Wert, den $f$ nie annimmt.'
hinweise:
  - 'Setze $y = \tfrac{2x + 1}{x - 3}$ an und multipliziere mit $x - 4$. Bringe alle Glieder mit $x$ auf eine Seite.'
  - 'Hebe $x$ heraus und dividiere. Die Definitionsmenge von $f^{-1}$ ist die Wertemenge von $f$.'
loesung: |
  **Ansatz:** $y = f(x)$ nach $x$ auflösen. Multiplikation mit $x - 4$: $y(x - 4) = 2x + 1$, also $xy - 4y = 2x + 1$.
  ---
  Alle Glieder mit $x$ nach links: $xy - 2x = 4y + 1$. Herausheben: $x(y - 2) = 4y + 1$, also $x = \dfrac{4y + 1}{y - 2}$ für $y \ne 2$.
  ---
  Umbenennen: $f^{-1}(x) = \dfrac{4x + 1}{x - 2}$. Probe: $f(5) = 11$ und $f^{-1}(11) = \tfrac{45}{9} = 5$.
  ---
  b) Ausgeschlossen ist $x = 2$. Das passt: $f$ hat die waagrechte Asymptote $y = 2$ und nimmt den Wert $2$ nie an. Also ist $2$ nicht in der Wertemenge von $f$ und nicht in der Definitionsmenge von $f^{-1}$.
```

## Betragsfunktion und stückweise definierte Funktionen

```aufgabe
id: fu-betr-check-betrag
titel: Beträge ausrechnen
niveau: 1
art: check
angabe: |
  Berechne $|3 - 8| + |-2|$.
  Herkunft: [1.15 Betrag und Intervalle](/lernen/mathe3/zahlen/betrag-und-intervalle).
teile:
  - typ: zahl
    label: 'Ergebnis'
    loesung: "abs(3 - 8) + abs(-2)"
    anzeige: '7'
    fehler:
      - wert: "-3"
        meldung: 'Ein Betrag ist nie negativ. $|3 - 8| = |-5| = 5$, nicht $-5$.'
      - wert: "13"
        meldung: 'Zuerst wird innen gerechnet: $3 - 8 = -5$. Danach der Betrag: $5$. Man darf nicht $|3| + |8|$ rechnen.'
hinweise:
  - 'Rechne zuerst innerhalb der Betragsstriche, dann nimm den Abstand zur Null.'
loesung: |
  Innen zuerst: $3 - 8 = -5$. Der Betrag ist der Abstand zur Null: $|-5| = 5$. Ebenso ist $|-2| = 2$.
  ---
  Zusammen: $5 + 2 = 7$.
```

Bisher hatte jede Funktion einen einzigen Term. Im Alltag sind viele Zusammenhänge aber **stückweise** geregelt: Bis
$5$ GB Datenvolumen zahlt man einen Grundpreis, darüber kostet jedes weitere GB extra. Bis zu einer Grenze gilt eine
Regel, ab der Grenze eine andere. Die einfachste Funktion dieser Art ist die Betragsfunktion.

### Die Betragsfunktion

Der **Betrag** $|x|$ einer Zahl ist ihr Abstand von der Null auf der Zahlengeraden. Abstände sind nie negativ. Es ist
$|5| = 5$, $|-5| = 5$ und $|0| = 0$. Für negative Zahlen dreht der Betrag also das Vorzeichen um.

:::definition[Betragsfunktion]
$$|x| = \begin{cases} x & \text{für } x \ge 0,\\ -x & \text{für } x < 0. \end{cases}$$
:::

Die zweite Zeile verwirrt oft: Wie kann $-x$ positiv sein? Für negative $x$ ist $-x$ positiv. Für $x = -5$ ist
$-x = -(-5) = 5$. Das Minus macht aus einer negativen Zahl eine positive.

Der Graph von $|x|$ ist ein „V“ mit der Spitze im Ursprung. Rechts ist er die Gerade $y = x$, links die Gerade
$y = -x$. Die Funktion ist gerade, denn $|-x| = |x|$. An der Stelle $0$ hat der Graph einen **Knick**. Links fällt er
mit der Steigung $-1$, rechts steigt er mit der Steigung $1$. Deshalb gibt es dort keine eindeutige Tangente. Das
untersucht [13.2 Einseitige Ableitungen](/lernen/mathe3/differenzierbarkeit/einseitige-ableitungen-knick-senkrechte-tangente-oszillation)
genauer.

### Betragsterme auflösen

Um mit $|\ldots|$ zu rechnen, schreibt man den Betrag ohne Striche. Dazu braucht man eine **Fallunterscheidung**: Wo
ist der Inhalt $\ge 0$, wo ist er $< 0$? Die Stelle, an der der Inhalt null wird, trennt die beiden Fälle. Dort liegt
die Spitze des V.

:::beispiel[Einen Betrag auflösen]
$f(x) = |2x - 4| - 2$.

1. Wo wechselt der Inhalt das Vorzeichen? $2x - 4 = 0$ bei $x = 2$. Für $x \ge 2$ ist $2x - 4 \ge 0$.
2. Fall $x \ge 2$: Die Striche fallen weg. $f(x) = 2x - 4 - 2 = 2x - 6$.
3. Fall $x < 2$: Der Inhalt ist negativ, also kommt ein Minus davor. $f(x) = -(2x - 4) - 2 = -2x + 2$.

$$f(x) = \begin{cases} 2x - 6 & \text{für } x \ge 2,\\ -2x + 2 & \text{für } x < 2.\end{cases}$$
Nullstellen: Rechts ist $2x - 6 = 0$ bei $x = 3$. Das liegt im Fall $x \ge 2$, also gilt es. Links ist $-2x + 2 = 0$ bei
$x = 1$. Das liegt im Fall $x < 2$, also gilt es auch. Die Spitze des V liegt bei $(2 \mid -2)$.
:::

:::achtung[Den Fallbereich nicht geprüft]
Eine typische Fehlrechnung bei $|x - 3| = 2x$: Fall $x \ge 3$ ergibt $x - 3 = 2x$, also $x = -3$. Fall $x < 3$ ergibt
$-(x - 3) = 2x$, also $x = 1$. „Lösungen: $-3$ und $1$.“ Das ist falsch. Die Zahl $-3$ ist im Fall $x \ge 3$
entstanden, liegt aber nicht in diesem Bereich. **Richtig:** Nur $x = 1$ ist eine Lösung. Probe: $|1 - 3| = 2 = 2\cdot 1$.
Für $-3$ gilt dagegen $|-6| = 6 \ne -6$.
:::

:::achtung[Den Betrag summandenweise genommen]
Eine typische Fehlrechnung: $|x - 5| = |x| - 5$. Für $x = -2$ ergibt die linke Seite $|-7| = 7$, die rechte aber
$2 - 5 = -3$. **Richtig:** Ein Betrag wirkt auf den ganzen Inhalt, man darf ihn nicht auf Summanden verteilen. Nur bei
Produkten gilt $|a\cdot b| = |a|\cdot|b|$.
:::

### Stückweise definierte Funktionen

:::definition[Stückweise definierte Funktion]
Eine Funktion heißt **stückweise definiert**, wenn auf verschiedenen Teilen ihrer Definitionsmenge verschiedene Terme
gelten. Die Stellen, an denen die Terme wechseln, heißen **Nahtstellen**.
:::

Beim Auswerten wählt man zuerst den passenden Term. Dabei kommt es an den Nahtstellen auf die Zeichen $<$ und $\le$ an.
Ein Nichtbeispiel: Eine Vorschrift wie „$x^2$ für $x \le 1$ und $x + 5$ für $x \ge 1$“ ist **keine** Funktion. An der
Stelle $1$ gelten beide Zeilen und liefern $1$ und $6$. Die Eingabe $1$ hätte zwei Ausgaben.

:::beispiel[Wasserkosten mit Staffelpreis]
Ein Versorger verrechnet für die ersten $50$ m³ Wasser $1{,}80$ Euro pro m³. Jeder weitere m³ kostet $2{,}40$ Euro. Die
Kosten für $x$ m³ sind
$$K(x) = \begin{cases} 1{,}8\,x & \text{für } 0 \le x \le 50,\\ 90 + 2{,}4\,(x - 50) & \text{für } x > 50. \end{cases}$$
Die $90$ Euro sind die Kosten der ersten $50$ m³. Nur die Menge über $50$ m³, also $x - 50$, kostet den höheren Preis.
Für $70$ m³ zahlt man $K(70) = 90 + 2{,}4\cdot 20 = 138$ Euro. Am Graphen sieht man bei $x = 50$ einen Knick, aber
keinen Sprung: Beide Terme liefern dort $90$ Euro.
:::

:::beispiel[Stücke ohne Sprung zusammenfügen]
$$f(x) = \begin{cases} x^2 & \text{für } x < 1,\\ 2x - a & \text{für } x \ge 1.\end{cases}$$
Für welches $a$ passen die Stücke zusammen, sodass der Graph keinen Sprung hat? Der linke Ast kommt bei $x = 1$ auf
die Höhe $1^2 = 1$. Der rechte beginnt auf der Höhe $2\cdot 1 - a = 2 - a$. Ohne Sprung muss $2 - a = 1$ sein, also
$a = 1$. Was „ohne Sprung“ exakt bedeutet, ist die Stetigkeit aus
[12.10 Stückweise definierte Funktionen](/lernen/mathe3/grenzwerte-stetigkeit/stueckweise-definierte-funktionen).
:::

```plot
x: [-2, 4]
y: [-1, 5]
gleich: true
graphen:
  - { f: "x^2", von: -2, bis: 1, farbe: 0, label: "x² für x < 1" }
  - { f: "2*x - 1", von: 1, bis: 4, farbe: 1, label: "2x − 1 für x ≥ 1" }
punkte:
  - { x: 1, y: 1, label: "(1 | 1)" }
beschriftung: Mit a = 1 schließen die beiden Äste bei x = 1 lückenlos aneinander an. Der rechte Ast ist hier sogar die Tangente an die Parabel im Punkt (1 | 1).
```

:::merke[Mit Beträgen und Stücken rechnen]
1. Nahtstellen bestimmen: beim Betrag dort, wo der Inhalt null ist.
2. Für jeden Bereich den passenden Term ohne Betragsstriche aufschreiben.
3. Jede Lösung, die in einem Bereich entsteht, mit diesem Bereich vergleichen. Liegt sie außerhalb, gilt sie nicht.
4. An Nahtstellen genau auf $<$ und $\le$ achten.
:::

```reflexion
frage: Warum steht in der Definition des Betrags für negative $x$ der Term $-x$, und warum ist das Ergebnis trotzdem nie negativ?
antwort: |
  Für negative Zahlen soll der Betrag das Vorzeichen umdrehen, denn der Abstand zur Null ist positiv. Das Umdrehen des
  Vorzeichens schreibt man als „mal $-1$“, also $-x$. Ist $x$ negativ, etwa $x = -4$, dann ist $-x = -(-4) = 4$ positiv.
  Das Minus in $-x$ bedeutet also nicht „negativ“, sondern „Gegenzahl“. Für $x \ge 0$ braucht man nichts umzudrehen, dort
  ist $|x| = x$.
```

```aufgabe
id: fu-betrag-werte
titel: Eine verschobene Betragsfunktion
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Gegeben ist $f(x) = |x - 4| + 1$. Berechne $f(1)$ und $f(6)$ und gib die Spitze des V an.
teile:
  - typ: zahl
    label: '$f(1)$'
    loesung: "abs(1 - 4) + 1"
    anzeige: '4'
    fehler:
      - wert: "-2"
        meldung: 'Ein Betrag ist nie negativ: $|1 - 4| = |-3| = 3$. Dann $3 + 1$.'
  - typ: zahl
    label: '$f(6)$'
    loesung: "abs(6 - 4) + 1"
    anzeige: '3'
    fehler:
      - wert: "11"
        meldung: 'Zuerst innen rechnen: $6 - 4 = 2$. Der Betrag ist $2$, nicht $|6| + |4|$.'
  - typ: vektor
    label: 'Spitze'
    namen: ["x", "y"]
    loesung: ["4", "1"]
    fehler:
      - wert: ["-4", "1"]
        meldung: 'Die Spitze liegt dort, wo der Inhalt null ist: $x - 4 = 0$ bei $x = 4$.'
hinweise:
  - 'Die Spitze liegt dort, wo $x - 4 = 0$ ist. Dort ist der Betrag am kleinsten.'
loesung: |
  **Ansatz:** Innen rechnen, dann Betrag, dann außen weiter. $f(1) = |-3| + 1 = 4$ und $f(6) = |2| + 1 = 3$.
  ---
  Der Betrag ist am kleinsten, nämlich null, wenn $x - 4 = 0$ ist. Die Spitze liegt bei $(4 \mid 1)$. Das ist der Graph von $|x|$, um $4$ nach rechts und $1$ nach oben verschoben.
```

```aufgabe
id: fu-stueckweise-auswerten
titel: Eine stückweise Funktion auswerten
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  $$f(x) = \begin{cases} x + 3 & \text{für } x < 0,\\ x^2 & \text{für } 0 \le x \le 2,\\ 6 - x & \text{für } x > 2.\end{cases}$$
  Berechne $f(-1)$, $f(0)$, $f(2)$ und $f(5)$.
teile:
  - typ: zahl
    label: '$f(-1)$'
    loesung: "-1 + 3"
    anzeige: '2'
    fehler:
      - wert: "1"
        meldung: '$-1 < 0$, also gilt die erste Zeile: $-1 + 3 = 2$.'
  - typ: zahl
    label: '$f(0)$'
    loesung: "0"
    fehler:
      - wert: "3"
        meldung: 'Die erste Zeile gilt nur für $x < 0$. Für $x = 0$ gilt die zweite Zeile mit $0 \le x$.'
  - typ: zahl
    label: '$f(2)$'
    loesung: "4"
    fehler:
      - wert: "2"
        meldung: 'Für $0 \le x \le 2$ gilt die zweite Zeile $x^2$. Also $f(2) = 2^2$, nicht $2$.'
  - typ: zahl
    label: '$f(5)$'
    loesung: "6 - 5"
    anzeige: '1'
    fehler:
      - wert: "25"
        meldung: 'Die zweite Zeile gilt nur bis $x = 2$. Für $x = 5$ gilt die dritte.'
hinweise:
  - 'Prüfe für jede Eingabe zuerst, in welchem Bereich sie liegt. Achte genau auf $<$ und $\le$.'
loesung: |
  **Ansatz:** Für jede Eingabe zuerst den Bereich bestimmen, dann den passenden Term verwenden.
  $f(-1) = -1 + 3 = 2$, denn $-1 < 0$. $f(0) = 0^2 = 0$, denn $0 \le 0 \le 2$.
  ---
  $f(2) = 2^2 = 4$, denn $2 \le 2$ gehört noch zum mittleren Bereich. $f(5) = 6 - 5 = 1$, denn $5 > 2$.
  An der Nahtstelle $2$ liefert auch die dritte Zeile $6 - 2 = 4$. Dort hat der Graph also keinen Sprung. An der Nahtstelle $0$ springt er dagegen von knapp $3$ auf $0$.
```

```aufgabe
id: fu-betrag-nullstellen
titel: Betragsfunktion ohne Striche schreiben
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Gegeben ist $f(x) = |x + 1| - 3$.

  a) Schreibe $f$ ohne Betragsstriche als stückweise definierte Funktion.

  b) Bestimme alle Nullstellen und den tiefsten Punkt des Graphen.
teile:
  - typ: text
    label: 'a)'
    muster: |
      $f(x) = x - 2$ für $x \ge -1$ und $f(x) = -x - 4$ für $x < -1$.
  - typ: menge
    label: 'b) Nullstellen'
    loesung: ["-4", "2"]
    fehler:
      - wert: ["2"]
        meldung: 'Auch der linke Ast hat eine Nullstelle: $-x - 4 = 0$ bei $x = -4$, und $-4 < -1$.'
      - wert: ["4", "-2"]
        meldung: 'Prüfe mit Einsetzen: $|4 + 1| - 3 = 2 \ne 0$.'
  - typ: vektor
    label: 'b) tiefster Punkt'
    namen: ["x", "y"]
    loesung: ["-1", "-3"]
    fehler:
      - wert: ["1", "-3"]
        meldung: 'Der Inhalt $x + 1$ ist bei $x = -1$ null. Dort liegt die Spitze.'
hinweise:
  - 'Der Inhalt $x + 1$ ist $\ge 0$ genau für $x \ge -1$.'
  - 'Löse in jedem Fall $f(x) = 0$ und prüfe, ob die Lösung im Fallbereich liegt.'
loesung: |
  **Ansatz:** Fallunterscheidung an der Stelle, an der der Inhalt null ist, also bei $x = -1$.
  Fall $x \ge -1$: $|x + 1| = x + 1$, also $f(x) = x - 2$.
  ---
  Fall $x < -1$: $|x + 1| = -(x + 1)$, also $f(x) = -x - 4$.
  ---
  Nullstellen: $x - 2 = 0$ ergibt $x = 2$, und $2 \ge -1$ passt. $-x - 4 = 0$ ergibt $x = -4$, und $-4 < -1$ passt.
  ---
  Spitze bei $x = -1$: $f(-1) = 0 - 3 = -3$. Der tiefste Punkt ist $(-1 \mid -3)$, denn $|x + 1| \ge 0$.
gefuehrt:
  - text: 'An welcher Stelle wird der Inhalt $x + 1$ null?'
    teil: { typ: zahl, loesung: "-1", fehler: [ { wert: "1", meldung: '$x + 1 = 0$ ergibt $x = -1$.' } ] }
    erklaerung: 'Bei $x = -1$. Dort trennen sich die beiden Fälle.'
  - text: 'Für $x \ge -1$ fallen die Striche einfach weg. Wie lautet $f(x)$ dort?'
    teil: { typ: term, loesung: "x - 2" }
    erklaerung: '$f(x) = x + 1 - 3 = x - 2$.'
  - text: 'Für $x < -1$ kommt ein Minus vor den Inhalt. Wie lautet $f(x)$ dort?'
    teil: { typ: term, loesung: "-x - 4", fehler: [ { wert: "-x + 1 - 3", meldung: 'Das Minus gilt für den ganzen Inhalt: $-(x + 1) = -x - 1$.' } ] }
    erklaerung: '$f(x) = -(x + 1) - 3 = -x - 4$.'
  - text: Bestimme in jedem Fall die Nullstelle und prüfe, ob sie im Fallbereich liegt.
    erklaerung: 'Rechts: $x = 2$, passt. Links: $x = -4$, passt. Beide sind Nullstellen.'
```

```aufgabe
id: fu-stueckweise-parameter
titel: Stücke zusammenfügen
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  $$f(x) = \begin{cases} 3 - x^2 & \text{für } x \le 2,\\ k\,x - 5 & \text{für } x > 2.\end{cases}$$
  Bestimme $k$ so, dass der Graph bei $x = 2$ keinen Sprung hat, und berechne dann $f(4)$.
teile:
  - typ: zahl
    label: '$k$'
    loesung: "(3 - 4 + 5)/2"
    anzeige: '2'
    fehler:
      - wert: "4"
        meldung: 'Der linke Ast endet bei $3 - 4 = -1$. Aus $2k - 5 = -1$ folgt $2k = 4$, also $k = 2$.'
      - wert: "-1"
        meldung: '$-1$ ist die Höhe an der Nahtstelle. Gesucht ist $k$ mit $2k - 5 = -1$.'
  - typ: zahl
    label: '$f(4)$'
    loesung: "2*4 - 5"
    anzeige: '3'
    fehler:
      - wert: "-13"
        meldung: '$4 > 2$, also gilt der rechte Ast $2x - 5$, nicht $3 - x^2$.'
hinweise:
  - 'Linker Ast bei $x = 2$: $3 - 4 = -1$.'
  - 'Der rechte Ast muss bei $x = 2$ denselben Wert ergeben: $2k - 5 = -1$.'
loesung: |
  **Ansatz:** Kein Sprung heißt: Beide Äste haben an der Nahtstelle $x = 2$ dieselbe Höhe. Linker Ast: $3 - 2^2 = -1$.
  ---
  Rechter Ast an der Nahtstelle: $2k - 5$. Gleichsetzen: $2k - 5 = -1$, also $k = 2$.
  ---
  $f(4)$ liegt im rechten Ast: $f(4) = 2\cdot 4 - 5 = 3$.
```

```aufgabe
id: fu-betrag-gleichung-fehler
titel: Eine falsche Lösung finden
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  Eine Mitschülerin löst $|x + 2| = 2x - 1$ so:

  Fall 1: $x + 2 = 2x - 1$, also $x = 3$. Fall 2: $-(x + 2) = 2x - 1$, also $x = -\tfrac13$.
  „Die Lösungsmenge ist $\{3;\ -\tfrac13\}$.“

  a) Gib die richtige Lösungsmenge an.

  b) Welcher Schritt fehlt in ihrer Rechnung?
teile:
  - typ: menge
    label: 'a) $L$'
    loesung: ["3"]
    fehler:
      - wert: ["3", "-1/3"]
        meldung: 'Setze $-\tfrac13$ ein: links $|\tfrac53| = \tfrac53$, rechts $-\tfrac23 - 1 = -\tfrac53$. Das stimmt nicht.'
      - wert: ["-1/3"]
        meldung: 'Prüfe $x = 3$: $|5| = 5$ und $2\cdot 3 - 1 = 5$. Diese Lösung stimmt.'
  - typ: auswahl
    label: 'b)'
    optionen:
      - 'Die Fallbereiche wurden nicht angegeben und nicht geprüft.'
      - 'Fall 2 hätte $x + 2 = -(2x - 1)$ heißen müssen.'
      - 'Man darf bei Beträgen keine Fälle unterscheiden.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Die Gleichung im Fall 2 ist richtig. Es fehlt die Bedingung, für welche $x$ dieser Fall überhaupt gilt.'
      - wert: 2
        meldung: 'Fälle sind genau der richtige Weg. Jeder Fall gilt aber nur in seinem Bereich.'
hinweise:
  - 'Für welche $x$ gilt Fall 1, für welche Fall 2? Der Inhalt $x + 2$ wechselt bei $-2$ das Vorzeichen.'
  - 'Liegt $-\tfrac13$ im Bereich $x < -2$?'
loesung: |
  **Ansatz:** Jeder Fall gilt nur in seinem Bereich. Fall 1 gilt für $x \ge -2$, Fall 2 für $x < -2$.
  ---
  Fall 1 liefert $x = 3$. Wegen $3 \ge -2$ ist das eine Lösung.
  ---
  Fall 2 liefert $x = -\tfrac13$. Aber $-\tfrac13 < -2$ ist falsch. Also ist das keine Lösung.
  ---
  **Antwort:** $L = \{3\}$. Der fehlende Schritt ist der Vergleich mit dem Fallbereich. Probe: $|3 + 2| = 5 = 2\cdot 3 - 1$.
```

```aufgabe
id: fu-tarif-stueckweise
titel: Ein Datentarif
niveau: 2
lernziel: 5
kompetenz: modellieren
angabe: |
  Ein Handytarif kostet $10$ Euro pro Monat und enthält $5$ GB Daten. Jedes weitere GB kostet $2$ Euro.

  a) Stelle die Monatskosten $K(x)$ für $x$ GB als stückweise definierte Funktion auf. Gib den Term für $x > 5$ an.

  b) Berechne $K(8)$.

  c) Wie viele GB kann man für $25$ Euro verbrauchen?
teile:
  - typ: term
    label: 'a) $K(x)$ für $x > 5$'
    loesung: "10 + 2*(x - 5)"
    fehler:
      - wert: "10 + 2*x"
        meldung: 'Die ersten $5$ GB sind im Grundpreis enthalten. Extra bezahlt wird nur die Menge über $5$ GB, also $x - 5$.'
      - wert: "2*(x - 5)"
        meldung: 'Der Grundpreis $10$ Euro fällt auch an, wenn man mehr verbraucht.'
  - typ: zahl
    label: 'b) $K(8)$'
    einheit: Euro
    loesung: "10 + 2*3"
    anzeige: '16'
    fehler:
      - wert: "26"
        meldung: 'Bezahlt werden nur die $3$ GB über der Grenze, nicht alle $8$ GB.'
  - typ: zahl
    label: 'c) Datenmenge'
    einheit: GB
    loesung: "5 + 15/2"
    anzeige: '12{,}5'
    fehler:
      - wert: "7.5"
        meldung: '$7{,}5$ GB sind die **zusätzlichen** GB. Dazu kommen die $5$ GB aus dem Grundpreis.'
hinweise:
  - 'Für $0 \le x \le 5$ ist $K(x) = 10$. Für $x > 5$ kommt für jedes GB über $5$ ein Betrag von $2$ Euro dazu.'
  - 'Für c) löse $10 + 2(x - 5) = 25$.'
loesung: |
  **Ansatz:** Bis $5$ GB gilt der feste Preis, darüber kostet nur der Überschuss $x - 5$ extra.
  $K(x) = 10$ für $0 \le x \le 5$ und $K(x) = 10 + 2(x - 5)$ für $x > 5$.
  ---
  b) $K(8) = 10 + 2\cdot 3 = 16$ Euro.
  ---
  c) $10 + 2(x - 5) = 25$ ergibt $2(x - 5) = 15$, also $x - 5 = 7{,}5$ und $x = 12{,}5$.
  **Antwort:** Für $25$ Euro kann man $12{,}5$ GB verbrauchen. Probe: $10 + 2\cdot 7{,}5 = 25$.
```

```aufgabe
id: fu-betrag-parabel
titel: Der Betrag einer Parabel
niveau: 3
lernziel: 5
kompetenz: begruenden
angabe: |
  Gegeben ist $f(x) = |x^2 - 4|$.

  a) Berechne $f(1)$ und gib alle Nullstellen an.

  b) Beschreibe, wie der Graph aus der Parabel $y = x^2 - 4$ entsteht.

  c) Wie viele Lösungen hat die Gleichung $f(x) = 3$? Gib alle an.
teile:
  - typ: zahl
    label: 'a) $f(1)$'
    loesung: "abs(1 - 4)"
    anzeige: '3'
    fehler:
      - wert: "-3"
        meldung: 'Ein Betrag ist nie negativ: $|1 - 4| = |-3| = 3$.'
  - typ: menge
    label: 'a) Nullstellen'
    loesung: ["-2", "2"]
    fehler:
      - wert: ["2"]
        meldung: 'Auch $(-2)^2 - 4 = 0$. Die Funktion ist gerade.'
  - typ: text
    label: 'b)'
    muster: |
      Wo die Parabel $y = x^2 - 4$ über der $x$-Achse liegt, also für $|x| \ge 2$, bleibt sie gleich. Zwischen $-2$ und $2$ liegt
      sie unter der Achse. Dort wird sie an der $x$-Achse nach oben geklappt. Es entsteht ein Bogen mit dem höchsten Punkt $(0 \mid 4)$.
  - typ: menge
    label: 'c) Lösungen von $f(x) = 3$'
    loesung: ["-sqrt(7)", "-1", "1", "sqrt(7)"]
    fehler:
      - wert: ["-sqrt(7)", "sqrt(7)"]
        meldung: 'Das sind nur die Lösungen von $x^2 - 4 = 3$. Auch $x^2 - 4 = -3$ führt auf $f(x) = 3$.'
      - wert: ["-1", "1"]
        meldung: 'Auch $x^2 - 4 = 3$ ergibt $f(x) = 3$. Das liefert $x = \pm\sqrt7$.'
hinweise:
  - 'Für $|x| \ge 2$ ist $x^2 - 4 \ge 0$. Für $|x| < 2$ ist $x^2 - 4 < 0$, dort wird das Vorzeichen umgedreht.'
  - 'Für c) unterscheide zwei Fälle: $x^2 - 4 = 3$ und $x^2 - 4 = -3$.'
loesung: |
  **Ansatz:** Der Betrag dreht nur die negativen Werte um. Wir prüfen also, wo $x^2 - 4$ negativ ist.
  a) $f(1) = |1 - 4| = 3$. Nullstellen: $x^2 - 4 = 0$ bei $x = \pm 2$.
  ---
  b) Für $|x| \ge 2$ ist $x^2 - 4 \ge 0$, der Graph bleibt die Parabel. Für $|x| < 2$ ist $x^2 - 4 < 0$, der Graph wird nach oben geklappt. Dort ist $f(x) = 4 - x^2$ mit dem Hochpunkt $(0 \mid 4)$.
  ---
  c) $|x^2 - 4| = 3$ heißt $x^2 - 4 = 3$ oder $x^2 - 4 = -3$. Das ergibt $x^2 = 7$ oder $x^2 = 1$.
  ---
  **Antwort:** Vier Lösungen: $x = \pm\sqrt7 \approx \pm 2{,}646$ und $x = \pm 1$. Probe: $|7 - 4| = 3$ und $|1 - 4| = 3$.
```

## Exponentialfunktionen

```aufgabe
id: fu-exp-check-potenzregel
titel: Eine Potenz zerlegen
niveau: 1
art: check
angabe: |
  Welcher Term ist für alle $x$ gleich $2^{x + 3}$?
  Herkunft: [1.9 Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln).
teile:
  - typ: auswahl
    optionen: ['$8\cdot 2^x$', '$2^x + 8$', '$2^{3x}$', '$6\cdot 2^x$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Eine Summe in der Hochzahl wird zu einem **Produkt** der Potenzen: $2^{x + 3} = 2^x\cdot 2^3$.'
      - wert: 2
        meldung: '$2^{3x}$ wäre $(2^x)^3$. Hier werden die Hochzahlen aber addiert, nicht multipliziert.'
      - wert: 3
        meldung: '$2^3 = 2\cdot 2\cdot 2 = 8$, nicht $2\cdot 3$.'
hinweise:
  - 'Regel: $a^{m + n} = a^m\cdot a^n$.'
loesung: |
  Nach der Regel $a^{m + n} = a^m\cdot a^n$ ist $2^{x + 3} = 2^x\cdot 2^3$.
  ---
  Wegen $2^3 = 8$ gilt $2^{x + 3} = 8\cdot 2^x$. Probe mit $x = 1$: $2^4 = 16$ und $8\cdot 2 = 16$.
```

Bei einer Potenzfunktion wie $x^2$ steht die Variable in der **Basis**, die Hochzahl ist fest. Setzt man die Variable
stattdessen in die **Hochzahl**, entsteht eine Funktion mit völlig anderem Verhalten: die Exponentialfunktion.
Exponentialfunktionen beschreiben alles, was sich pro Zeitschritt um denselben **Faktor** ändert: Zinseszins,
Bakterienwachstum, radioaktiver Zerfall, das Abkühlen eines Getränks.

### Potenz oder Exponential?

Diese Verwechslung ist die häufigste Fehlerquelle in diesem Teil des Kurses. Darum vergleichen wir zuerst $x^2$ und
$2^x$ an einer Wertetabelle.

:::beispiel[x² und 2ˣ im Vergleich]
|$x$|$0$|$1$|$2$|$3$|$4$|$5$|$6$|$10$|
|---|---|---|---|---|---|---|---|---|
|$x^2$|$0$|$1$|$4$|$9$|$16$|$25$|$36$|$100$|
|$2^x$|$1$|$2$|$4$|$8$|$16$|$32$|$64$|$1024$|

1. Bei $x^2$ wird die Eingabe **mit sich selbst** multipliziert. Von Schritt zu Schritt kommen $1, 3, 5, 7, \ldots$
   dazu, also immer etwas mehr.
2. Bei $2^x$ wird die Zahl $2$ genau $x$-mal mit sich multipliziert. Bei jedem Schritt um $1$ **verdoppelt** sich der
   Wert. Der Zuwachs ist immer so groß wie der ganze bisherige Wert.
3. Bei $x = 2$ und $x = 4$ sind beide gleich. Ab $x = 5$ zieht $2^x$ davon. Bei $x = 10$ ist $2^x$ schon zehnmal so
   groß wie $x^2$.

Merksatz: **Potenzfunktion** heißt „Variable unten, Hochzahl fest“. **Exponentialfunktion** heißt „Basis fest,
Variable oben“.
:::

:::achtung[Exponential wie Potenz ausgerechnet]
Eine typische Fehlrechnung bei $f(x) = 2^x$: „$f(5) = 5^2 = 25$.“ Hier wurden Basis und Hochzahl vertauscht.
**Richtig:** $f(5) = 2^5 = 32$. Bei einer Exponentialfunktion steht die Eingabe in der Hochzahl. Ein zweiter Fehler
derselben Art: $f(-1) = -2$. **Richtig:** $2^{-1} = \tfrac12$, denn eine negative Hochzahl bildet den Kehrwert.
:::

```aufgabe
id: fu-exp-check-einsetzen
titel: Eingabe in der Hochzahl
niveau: 1
art: check
angabe: |
  Es sei $g(x) = 3^x$ und $p(x) = x^3$. Berechne $g(4)$ und $p(4)$.
teile:
  - typ: zahl
    label: '$g(4)$'
    loesung: "3^4"
    anzeige: '81'
    fehler:
      - wert: "64"
        meldung: 'Das ist $4^3 = p(4)$. Bei $g$ steht die Eingabe $4$ in der Hochzahl: $3^4 = 3\cdot 3\cdot 3\cdot 3$.'
      - wert: "12"
        meldung: 'Eine Hochzahl ist kein Faktor. $3^4$ heißt $3\cdot 3\cdot 3\cdot 3$, nicht $3\cdot 4$.'
  - typ: zahl
    label: '$p(4)$'
    loesung: "4^3"
    anzeige: '64'
    fehler:
      - wert: "81"
        meldung: 'Das ist $3^4$. Bei $p(x) = x^3$ ist die Eingabe die Basis: $4^3 = 4\cdot 4\cdot 4$.'
hinweise:
  - 'Bei $g$ steht die Eingabe oben, bei $p$ unten.'
loesung: |
  $g(4) = 3^4 = 81$, denn bei der Exponentialfunktion steht die Eingabe in der Hochzahl.
  ---
  $p(4) = 4^3 = 64$, denn bei der Potenzfunktion ist die Eingabe die Basis. Die beiden Werte sind verschieden.
```

### Definition und Eigenschaften

:::definition[Exponentialfunktion]
Für eine Basis $a > 0$ mit $a \ne 1$ heißt
$$f(x) = a^x, \qquad x \in \R,$$
**Exponentialfunktion zur Basis $a$**. Allgemeiner nennt man auch $f(x) = c\cdot a^x$ mit $c \ne 0$ eine
Exponentialfunktion. Dabei ist $c = f(0)$ der **Anfangswert** und $a$ der **Wachstumsfaktor** pro Schritt.
:::

Warum muss $a > 0$ sein? Für negative Basen ist $a^x$ nicht für alle $x$ definiert. So ist $(-4)^{1/2} = \sqrt{-4}$ keine
reelle Zahl. Der Fall $a = 1$ ist ausgeschlossen, weil $1^x = 1$ konstant ist. **Keine** Exponentialfunktionen sind
also $x^3$ (Potenz), $(-2)^x$ (negative Basis) und $1^x$ (konstant).

Dass $a^x$ für **jede** reelle Zahl $x$ einen Sinn hat, ist nicht selbstverständlich. Für natürliche $x$ ist es
wiederholte Multiplikation, für $x = -n$ der Kehrwert, für Brüche $x = \tfrac pq$ eine Wurzel:
$a^{p/q} = \sqrt[q]{a^p}$. Für irrationale $x$ wie $\sqrt2$ nähert man $x$ durch Brüche an, etwa
$2^{1{,}4}, 2^{1{,}41}, 2^{1{,}414}, \ldots$. Die Werte nähern sich einer Zahl, die man $2^{\sqrt2}$ nennt. Alle
Potenzregeln aus [1.9 Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln) bleiben dabei gültig:
$$a^{x + y} = a^x a^y, \qquad a^{x - y} = \frac{a^x}{a^y}, \qquad (a^x)^y = a^{xy}, \qquad a^0 = 1, \qquad a^{-x} = \frac{1}{a^x}.$$

:::satz[Eigenschaften der Exponentialfunktion]
Für $a > 0$ und $a \ne 1$ gilt:
1. $a^x > 0$ für alle $x$. Die Wertemenge ist $(0, \infty)$. Es gibt **keine Nullstelle**.
2. Der Graph geht durch $(0 \mid 1)$ und $(1 \mid a)$.
3. Für $a > 1$ ist $a^x$ streng monoton steigend, für $0 < a < 1$ streng monoton fallend.
4. Die $x$-Achse ist waagrechte Asymptote. Für $a > 1$ kommt $a^x$ der $0$ nach links beliebig nahe.
5. Der Graph von $\left(\tfrac1a\right)^x = a^{-x}$ ist das Spiegelbild von $a^x$ an der $y$-Achse.
:::

```plot
x: [-3, 3]
y: [-0.5, 8]
graphen:
  - { f: "2^x", label: "2ˣ", farbe: 0 }
  - { f: "e^x", label: "eˣ", farbe: 1 }
  - { f: "0.5^x", label: "(1/2)ˣ", farbe: 2 }
  - { f: "x^2", label: "x²", farbe: 3, gestrichelt: true }
punkte:
  - { x: 0, y: 1, label: "(0 | 1)" }
beschriftung: Exponentialfunktionen gehen alle durch (0 | 1) und bleiben über der x-Achse. Die Basis 1/2 liefert das Spiegelbild von 2ˣ an der y-Achse. Die Parabel x² zum Vergleich wird von 2ˣ auf Dauer überholt.
```

:::achtung[Faktor und Basis zusammengefasst]
Eine typische Fehlrechnung: $3\cdot 2^x = 6^x$. Probe bei $x = 2$: Links steht $3\cdot 4 = 12$, rechts $36$. Das ist
falsch, denn die Hochzahl gehört nur zur $2$, nicht zur $3$. Potenz geht vor Punkt. **Richtig:** $3\cdot 2^x$ bleibt so
stehen. Der Anfangswert ist $3$, der Wachstumsfaktor $2$. Zusammenfassen darf man nur gleiche Basen, etwa
$2\cdot 2^x = 2^{x + 1}$.
:::

:::intuition[Exponentiell schlägt jede Potenz]
Die Funktion $2^x$ verdoppelt sich bei jedem Schritt um $1$. Die Potenz $x^{10}$ wächst dagegen von $x = 100$ auf
$x = 101$ nur um den Faktor $1{,}01^{10} \approx 1{,}105$, also um gut $10\,\%$. Ein fester Faktor $2$ pro Schritt
schlägt auf Dauer jedes solche Wachstum. Für jede noch so große Potenz $x^n$ gilt: $a^x$ mit $a > 1$ überholt sie
irgendwann und bleibt dann für immer darüber. Das ist der Kern exponentiellen Wachstums. In der Informatik ist das der
Grund, warum Algorithmen mit exponentieller Laufzeit schon bei mittelgroßen Eingaben unbrauchbar werden.
:::

```aufgabe
id: fu-exp-check-wachstum
titel: Was ist größer?
niveau: 1
art: check
angabe: |
  Schätze zuerst, ohne zu rechnen: Welche Zahl ist größer, $2^{20}$ oder $20^2$?
teile:
  - typ: auswahl
    optionen: ['$2^{20}$', '$20^2$', 'beide sind gleich']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$20^2 = 400$. Dagegen ist $2^{10} = 1024$, und $2^{20} = 1024^2$ ist über eine Million.'
      - wert: 2
        meldung: 'Rechne beide aus: $20^2 = 400$ und $2^{20} = 1\,048\,576$.'
hinweise:
  - 'Es gilt $2^{10} = 1024$, also $2^{20} = 1024\cdot 1024$.'
loesung: |
  $20^2 = 400$. Dagegen ist $2^{20} = 2^{10}\cdot 2^{10} = 1024\cdot 1024 = 1\,048\,576$.
  ---
  $2^{20}$ ist also mehr als zweitausendmal so groß. Zwanzig Verdopplungen wachsen viel schneller als ein Quadrat.
```

### Die eulersche Zahl e

Unter allen Basen ist eine besonders wichtig: die **eulersche Zahl**
$$e = \lim_{n \to \infty}\left(1 + \frac1n\right)^n = 2{,}718\,281\,828\ldots$$
Das Zeichen $\lim$ steht für „Grenzwert“: der Wert, dem sich der Ausdruck nähert, wenn $n$ immer größer wird. Die Zahl
$e$ ist irrational. Unter allen Exponentialfunktionen $a^x$ hat nur $e^x$ diese Eigenschaft: An jeder Stelle ist die
Steigung des Graphen gleich dem Funktionswert. Im Punkt $(0 \mid 1)$ hat $e^x$ also genau die Steigung $1$. Das macht $e^x$ zur
natürlichen Funktion für Wachstum und für die Differentialrechnung in [9.5 Grundregeln: Potenz-, Faktor- und Summenregel und die wichtigsten Ableitungen](/lernen/mathe3/differentialrechnung/grundregeln-potenz-faktor-und-summenregel-und-die-wichtigsten-ableitungen).

Die Definition hat eine Deutung beim Sparen. Verzinst man $1$ Euro ein Jahr lang mit $100\,\%$, hat man am Ende $2$ Euro.
Verzinst man in $12$ Teilen zu je $\tfrac{100}{12}\,\%$ mit Zinseszins, sind es $\left(1 + \tfrac{1}{12}\right)^{12}
\approx 2{,}613$ Euro. Je öfter man verzinst, desto näher kommt man an $e \approx 2{,}718$ Euro heran. Den Grenzwert
selbst behandelt [11.9 Rationale Folgen, Wurzeltrick und Standardgrenzwerte](/lernen/mathe3/grenzwerte-folgen/rationale-folgen-wurzeltrick-und-standardgrenzwerte).

### Jede Basis lässt sich durch e ausdrücken

Der natürliche Logarithmus $\ln a$ ist die Hochzahl, mit der man $e$ potenzieren muss, um $a$ zu erhalten. Also ist
$a = e^{\ln a}$. Mit der Regel $(a^x)^y = a^{xy}$ folgt
$$a^x = \left(e^{\ln a}\right)^x = e^{x\ln a}.$$

:::satz[Basiswechsel zu e]
Für $a > 0$ und alle $x \in \R$ gilt
$$a^x = e^{\lambda x} \qquad\text{mit}\qquad \lambda = \ln a.$$
Für $a > 1$ ist $\lambda > 0$ (Wachstum), für $0 < a < 1$ ist $\lambda < 0$ (Abnahme).
:::

:::beispiel[Eine Exponentialfunktion in e-Form bringen]
$f(x) = 4\cdot 1{,}5^x$ soll in der Form $\alpha\,e^{\lambda x}$ geschrieben werden.

1. Die Basis wird ersetzt: $1{,}5 = e^{\ln 1{,}5}$ mit $\ln 1{,}5 \approx 0{,}4055$.
2. Einsetzen: $f(x) = 4\cdot\left(e^{\ln 1{,}5}\right)^x = 4\,e^{(\ln 1{,}5)\,x} \approx 4\,e^{0{,}4055\,x}$.
3. Also ist $\alpha = 4$ und $\lambda = \ln 1{,}5 \approx 0{,}4055$.
4. Probe bei $x = 2$: $4\cdot 1{,}5^2 = 9$ und $4\,e^{0{,}811} \approx 4\cdot 2{,}250 = 9{,}00$.

Der Anfangswert $\alpha = f(0)$ bleibt beim Umschreiben gleich. Nur die Basis wird anders geschrieben.
:::

:::beispiel[Ein Sparbuch in beiden Formen]
Ein Kapital von $5000$ Euro wird jährlich mit $2{,}5\,\%$ verzinst. Nach $t$ Jahren beträgt es
$K(t) = 5000\cdot 1{,}025^t$ Euro. Mit $\lambda = \ln 1{,}025 \approx 0{,}02469$ ist auch $K(t) = 5000\,e^{0{,}02469\,t}$.
Nach $10$ Jahren sind es $5000\cdot 1{,}025^{10} \approx 6400{,}42$ Euro. Beachte: $\lambda \approx 0{,}0247$ ist etwas
kleiner als $0{,}025$. Die Zahl $\lambda$ ist also nicht der Zinssatz. Den genauen Zusammenhang klärt
[4.12 Wachstums- und Zerfallsmodelle](/lernen/mathe3/funktionen/wachstums-und-zerfallsmodelle).
:::

```aufgabe
id: fu-exp-check-widget
titel: Was passiert, wenn a kleiner als 1 wird?
niveau: 1
art: check
angabe: |
  Im Widget nach dieser Frage siehst du $f(x) = c\cdot a^x$. Sage zuerst vorher: Wie verändert sich der Graph, wenn du
  bei $c = 1$ die Basis $a$ von $2$ auf $0{,}5$ stellst?
teile:
  - typ: auswahl
    optionen:
      - 'Er wird an der $y$-Achse gespiegelt und fällt nun.'
      - 'Er wird an der $x$-Achse gespiegelt und liegt unter der Achse.'
      - 'Er wird flacher, steigt aber weiter.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Eine Potenz mit positiver Basis ist immer positiv. Der Graph bleibt über der $x$-Achse.'
      - wert: 2
        meldung: 'Bei einem Faktor kleiner als $1$ wird der Wert pro Schritt kleiner. Der Graph fällt.'
hinweise:
  - 'Vergleiche $0{,}5^x$ mit $2^{-x}$.'
loesung: |
  $0{,}5^x = \left(\tfrac12\right)^x = 2^{-x}$. Das ist $2^x$ mit $-x$ statt $x$, also an der $y$-Achse gespiegelt.
  ---
  Der Graph fällt nun von links nach rechts, bleibt aber über der $x$-Achse und geht weiter durch $(0 \mid 1)$.
```

```widget
name: parameter
titel: Die Exponentialfunktion c·aˣ
props:
  f: "c*a^x"
  parameter:
    - { name: c, min: -3, max: 5, step: 0.5, wert: 1 }
    - { name: a, min: 0.1, max: 4, step: 0.1, wert: 2 }
  x: [-4, 4]
  y: [-4, 10]
  zusatz: ["e^x"]
```

**Arbeitsauftrag:** Prüfe zuerst deine Vorhersage mit $a = 0{,}5$. Stelle dann $a = 1$ ein und beschreibe den Graphen.
Erkläre damit, warum $a = 1$ in der Definition ausgeschlossen ist. Verändere zum Schluss $c$: Wo schneidet der Graph
die $y$-Achse, und kommt er der $x$-Achse trotzdem beliebig nahe? Bei $a \approx 2{,}7$ liegt der Graph auf der
Vergleichskurve $e^x$.

```reflexion
frage: Warum hat eine Exponentialfunktion $c\cdot a^x$ mit $c > 0$ nie eine Nullstelle, eine Potenzfunktion wie $x^3$ aber schon?
antwort: |
  Bei $a^x$ wird die positive Zahl $a$ mit sich selbst multipliziert oder ihr Kehrwert gebildet. Dabei kann nie $0$
  herauskommen: Ein Produkt positiver Zahlen ist positiv. Man sieht es auch so: $a^x\cdot a^{-x} = a^0 = 1$. Wäre
  $a^x = 0$, dann wäre das Produkt $0$ und nicht $1$. Mal $c > 0$ bleibt der Wert positiv.

  Bei $x^3$ ist die Eingabe selbst die Basis. Für die Eingabe $0$ ist $0^3 = 0$. Die Potenzfunktion hat also bei $x = 0$
  eine Nullstelle.
```

```aufgabe
id: fu-exp-werte
titel: Werte einer Exponentialfunktion
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Gegeben ist $f(x) = 5\cdot 2^x$. Berechne $f(-2)$, $f(0)$ und $f(3)$.
teile:
  - typ: zahl
    label: '$f(-2)$'
    loesung: "5*2^(-2)"
    anzeige: '\tfrac54 = 1{,}25'
    fehler:
      - wert: "-20"
        meldung: 'Eine negative Hochzahl macht den Wert nicht negativ. $2^{-2} = \tfrac{1}{2^2} = \tfrac14$.'
      - wert: "10^(-2)"
        meldung: 'Potenz vor Punkt: Die Hochzahl gehört nur zur $2$. Erst $2^{-2} = \tfrac14$, dann mal $5$.'
  - typ: zahl
    label: '$f(0)$'
    loesung: "5"
    fehler:
      - wert: "0"
        meldung: 'Es ist $2^0 = 1$, nicht $0$. Also $f(0) = 5\cdot 1$.'
  - typ: zahl
    label: '$f(3)$'
    loesung: "5*2^3"
    anzeige: '40'
    fehler:
      - wert: "1000"
        meldung: 'Das wäre $10^3$. Die Hochzahl gehört nur zur $2$: $5\cdot 2^3 = 5\cdot 8$.'
      - wert: "45"
        meldung: 'Das wäre $5\cdot 3^2$. Bei $2^x$ steht die Eingabe $3$ in der Hochzahl: $2^3 = 8$.'
hinweise:
  - 'Potenz vor Punkt: zuerst $2^x$ ausrechnen, dann mit $5$ multiplizieren. $2^{-2} = \tfrac{1}{4}$.'
loesung: |
  **Ansatz:** Die Eingabe steht in der Hochzahl. Zuerst die Potenz, dann mal $5$.
  $f(-2) = 5\cdot\tfrac14 = 1{,}25$ und $f(0) = 5\cdot 1 = 5$.
  ---
  $f(3) = 5\cdot 8 = 40$. Kontrolle: Jeder Schritt um $1$ nach rechts verdoppelt den Wert, von $1{,}25$ über $2{,}5$, $5$, $10$, $20$ auf $40$.
```

```aufgabe
id: fu-exp-oder-potenz
titel: Exponential- oder Potenzfunktion?
niveau: 1
lernziel: 7
kompetenz: verstehen
angabe: |
  Welche der folgenden Funktionen sind Exponentialfunktionen?
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$f_1(x) = 3x^2$'
      - '$f_2(x) = 3^x$'
      - '$f_3(x) = x^{3}$'
      - '$f_4(x) = 7\cdot 0{,}8^x$'
      - '$f_5(x) = x^{-2}$'
      - '$f_6(x) = e^{x}$'
    richtig: [1, 3, 5]
    fehler:
      - wert: [1, 5]
        meldung: 'Auch $7\cdot 0{,}8^x$ ist eine Exponentialfunktion: feste Basis $0{,}8$, die Variable steht oben.'
      - wert: [0, 1, 3, 5]
        meldung: 'Bei $3x^2$ steht die Variable in der Basis, die Hochzahl $2$ ist fest. Das ist eine Potenzfunktion.'
      - wert: [1, 3, 4, 5]
        meldung: '$x^{-2}$ hat die Variable unten und die feste Hochzahl $-2$. Das ist eine Potenzfunktion.'
hinweise:
  - 'Frage bei jeder Funktion: Steht die Variable oben in der Hochzahl oder unten in der Basis?'
loesung: |
  **Ansatz:** Exponentialfunktion heißt „Basis fest, Variable in der Hochzahl“.
  ---
  Exponentialfunktionen sind $3^x$, $7\cdot 0{,}8^x$ und $e^x$. Bei $3x^2$, $x^3$ und $x^{-2}$ steht die Variable in der Basis. Das sind Potenzfunktionen.
```

```aufgabe
id: fu-exp-eigenschaften
titel: Eine fallende Exponentialfunktion
niveau: 1
lernziel: 7
kompetenz: verstehen
angabe: |
  Gegeben ist $f(x) = 3\cdot 0{,}5^x$.

  a) Berechne $f(0)$ und $f(-2)$.

  b) Welche Aussage trifft zu?
teile:
  - typ: zahl
    label: 'a) $f(0)$'
    loesung: "3"
    fehler:
      - wert: "0"
        meldung: '$0{,}5^0 = 1$. Jede Zahl ungleich $0$ hoch $0$ ist $1$.'
      - wert: "1.5"
        meldung: 'Das ist $f(1)$. Bei $x = 0$ ist der Faktor $0{,}5^0 = 1$.'
  - typ: zahl
    label: 'a) $f(-2)$'
    loesung: "3*0.5^(-2)"
    anzeige: '12'
    fehler:
      - wert: "0.75"
        meldung: 'Das wäre $3\cdot 0{,}5^2$. Eine negative Hochzahl bildet den Kehrwert: $0{,}5^{-2} = 2^2 = 4$.'
      - wert: "-3"
        meldung: 'Eine negative Hochzahl macht den Wert nicht negativ, sie bildet den Kehrwert.'
  - typ: auswahl
    label: 'b)'
    optionen:
      - '$f$ fällt streng, hat keine Nullstelle und die Wertemenge $(0, \infty)$.'
      - '$f$ fällt streng und hat bei großen $x$ eine Nullstelle.'
      - '$f$ steigt streng, weil der Anfangswert $3$ positiv ist.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Die Werte halbieren sich bei jedem Schritt, werden aber nie $0$. Die $x$-Achse ist Asymptote.'
      - wert: 2
        meldung: 'Ob $f$ steigt oder fällt, entscheidet die Basis. Bei $0{,}5 < 1$ fällt $f$.'
hinweise:
  - '$0{,}5^{-2} = \left(\tfrac12\right)^{-2} = 2^2$.'
  - 'Die Basis $0{,}5$ liegt zwischen $0$ und $1$. Was bedeutet das für die Monotonie?'
loesung: |
  **Ansatz:** Anfangswert $c = 3$, Faktor $0{,}5$ pro Schritt. a) $f(0) = 3\cdot 1 = 3$.
  ---
  $f(-2) = 3\cdot 0{,}5^{-2} = 3\cdot 4 = 12$. Nach links verdoppelt sich der Wert pro Schritt.
  ---
  b) Wegen $0 < 0{,}5 < 1$ fällt $f$ streng. Alle Werte sind positiv, die $x$-Achse ist Asymptote. Also ist $W = (0, \infty)$, und es gibt keine Nullstelle.
```

```aufgabe
id: fu-exp-umschreiben
titel: Basis e einführen
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Schreibe $f(x) = 5\cdot 3^x$ und $g(x) = 8\cdot 0{,}75^x$ jeweils in der Form $\alpha\,e^{\lambda x}$. Gib $\lambda$ auf
  vier Nachkommastellen an.
teile:
  - typ: zahl
    label: '$\lambda$ für $f$'
    loesung: "ln(3)"
    toleranz: 0.0001
    anzeige: '\ln 3 \approx 1{,}0986'
    fehler:
      - wert: "3"
        meldung: '$\lambda$ ist nicht die Basis selbst, sondern ihr natürlicher Logarithmus: $3 = e^{\ln 3}$.'
      - wert: "ln(15)"
        meldung: 'Der Faktor $5$ gehört nicht in die Hochzahl. Nur die Basis $3$ wird als $e^{\ln 3}$ geschrieben.'
  - typ: zahl
    label: '$\lambda$ für $g$'
    loesung: "ln(0.75)"
    toleranz: 0.0001
    anzeige: '\ln 0{,}75 \approx -0{,}2877'
    fehler:
      - wert: "-0.25"
        meldung: 'Der Prozentsatz $-25\,\%$ ist nicht dasselbe wie $\lambda$. Es gilt $\lambda = \ln 0{,}75$.'
      - wert: "0.2877"
        meldung: 'Bei einer Basis kleiner als $1$ ist der Logarithmus negativ.'
  - typ: zahl
    label: '$\alpha$ für $g$'
    loesung: "8"
    fehler:
      - wert: "ln(8)"
        meldung: 'Der Anfangswert bleibt beim Umschreiben unverändert: $\alpha = g(0) = 8$.'
hinweise:
  - 'Es gilt $a = e^{\ln a}$, also $a^x = e^{x\ln a}$.'
  - 'Der Faktor vor der Potenz ändert sich nicht. Nur die Basis wird umgeschrieben.'
loesung: |
  **Ansatz:** Basiswechsel $a^x = e^{x\ln a}$. Der Anfangswert bleibt stehen.
  ---
  $3 = e^{\ln 3}$, also $3^x = e^{(\ln 3)x}$ und $f(x) = 5\,e^{(\ln 3)x}$ mit $\lambda = \ln 3 \approx 1{,}0986$.
  ---
  $0{,}75^x = e^{(\ln 0{,}75)x}$, also $g(x) = 8\,e^{-0{,}2877x}$ mit $\alpha = 8$.
  Kontrolle: $\lambda < 0$ passt zu einer Abnahme, denn $0{,}75 < 1$.
```

```aufgabe
id: fu-exp-zwei-punkte
titel: Exponentialfunktion durch zwei Punkte
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Eine Funktion $f(x) = c\cdot a^x$ geht durch $P(1 \mid 6)$ und $Q(3 \mid 54)$. Bestimme $c$ und $a$ mit $a > 0$.
teile:
  - typ: zahl
    label: '$a$'
    loesung: "sqrt(54/6)"
    anzeige: '3'
    fehler:
      - wert: "9"
        meldung: 'Aus der Division folgt $a^2 = 9$. Gesucht ist $a$ selbst, also die Wurzel.'
      - wert: "24"
        meldung: 'Der Unterschied $54 - 6$ geteilt durch $2$ wäre ein linearer Ansatz. Exponentiell vergleicht man Quotienten.'
  - typ: zahl
    label: '$c$'
    loesung: "6/3"
    anzeige: '2'
    fehler:
      - wert: "6"
        meldung: '$6$ ist $f(1) = c\cdot a$, nicht $f(0)$. Teile durch $a = 3$.'
hinweise:
  - 'Stelle die zwei Gleichungen $c\cdot a = 6$ und $c\cdot a^3 = 54$ auf.'
  - 'Dividiere die zweite Gleichung durch die erste. Dann fällt $c$ weg.'
loesung: |
  **Ansatz:** Beide Punkte einsetzen: $c\cdot a = 6$ und $c\cdot a^3 = 54$.
  ---
  Division der Gleichungen: $\dfrac{c a^3}{c a} = a^2 = \dfrac{54}{6} = 9$, also $a = 3$, denn $a > 0$.
  ---
  $c = \dfrac{6}{a} = 2$. Also $f(x) = 2\cdot 3^x$. Probe: $f(3) = 2\cdot 27 = 54$.
gefuehrt:
  - text: 'Setze $P(1 \mid 6)$ in $f(x) = c\cdot a^x$ ein. Was ergibt $c\cdot a$?'
    teil: { typ: zahl, loesung: "6" }
    erklaerung: '$f(1) = c\cdot a^1 = 6$.'
  - text: 'Dividiere $c\cdot a^3 = 54$ durch $c\cdot a = 6$. Welchen Wert hat $a^2$?'
    teil: { typ: zahl, loesung: "9", fehler: [ { wert: "48", meldung: 'Exponentiell vergleicht man Quotienten, nicht Differenzen: $54 : 6$.' } ] }
    erklaerung: '$c$ kürzt sich weg: $a^2 = 54 : 6 = 9$.'
  - text: 'Bestimme $a$. Beachte $a > 0$.'
    teil: { typ: zahl, loesung: "3" }
    erklaerung: '$a = \sqrt9 = 3$. Die Lösung $-3$ scheidet aus, weil die Basis positiv sein muss.'
  - text: 'Berechne $c$ aus $c\cdot a = 6$.'
    teil: { typ: zahl, loesung: "2" }
    erklaerung: '$c = 6 : 3 = 2$. Ergebnis: $f(x) = 2\cdot 3^x$.'
```

```aufgabe
id: fu-exp-fehler
titel: Fehler beim Zusammenfassen finden
niveau: 2
lernziel: 7
kompetenz: begruenden
angabe: |
  Ein Mitschüler vereinfacht $f(x) = 4\cdot 3^x$ zu $f(x) = 12^x$.

  a) Berechne $f(2)$ mit dem ursprünglichen Term.

  b) Welcher Term ist tatsächlich gleich $4\cdot 3^x$?
teile:
  - typ: zahl
    label: 'a) $f(2)$'
    loesung: "4*3^2"
    anzeige: '36'
    fehler:
      - wert: "144"
        meldung: 'Das ist $12^2$, also der falsche Term. Mit dem ursprünglichen Term: $4\cdot 3^2 = 4\cdot 9$.'
  - typ: auswahl
    label: 'b)'
    optionen: ['$12^x$', '$4\cdot 3^x$ lässt sich nicht als $b^x$ schreiben, aber als $4\,e^{x\ln 3}$', '$3^{4x}$']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Die Hochzahl gehört nur zur $3$. Probe bei $x = 2$: $36 \ne 144$.'
      - wert: 2
        meldung: '$3^{4x} = 81^x$. Probe bei $x = 1$: $81 \ne 12$.'
hinweise:
  - 'Setze $x = 2$ in beide Terme ein und vergleiche.'
  - 'Potenz geht vor Punkt. Wie viele Faktoren $3$ und wie viele Faktoren $4$ stecken in $4\cdot 3^2$?'
loesung: |
  **Ansatz:** Eine Probe an einer Stelle zeigt, ob zwei Terme gleich sind. a) $f(2) = 4\cdot 9 = 36$, aber $12^2 = 144$.
  ---
  Der Fehler: Die Hochzahl gehört nur zur $3$, nicht zur $4$. Potenz geht vor Punkt. Deshalb darf man $4$ und $3$ nicht zu $12$ zusammenfassen.
  ---
  b) Richtig umformen kann man nur die Basis: $4\cdot 3^x = 4\,e^{x\ln 3}$. Der Faktor $4$ bleibt außen stehen. Probe bei $x = 2$: $4\,e^{2\ln 3} = 4\cdot 9 = 36$.
```

```aufgabe
id: fu-exp-ueberholt-potenz
titel: Wann überholt 2ˣ die Funktion x⁴?
niveau: 3
lernziel: 7
kompetenz: begruenden
angabe: |
  Wir vergleichen $f(x) = 2^x$ und $g(x) = x^4$ für $x > 2$.

  a) Berechne $f(10)$ und $g(10)$. Welche Funktion ist dort größer?

  b) Zeige, dass bei $x = 16$ beide gleich sind.

  c) Bestimme die kleinste ganze Zahl $n \ge 3$, für die gilt: $2^m > m^4$ für jede ganze Zahl $m \ge n$. Begründe mit
  den Verhältnissen $\tfrac{f(x + 1)}{f(x)}$ und $\tfrac{g(x + 1)}{g(x)}$.
teile:
  - typ: zahl
    label: 'a) $f(10)$'
    loesung: "2^10"
    anzeige: '1024'
    fehler:
      - wert: "100"
        meldung: 'Das wäre $10^2$. Bei $2^x$ steht die $10$ in der Hochzahl.'
  - typ: zahl
    label: 'a) $g(10)$'
    loesung: "10^4"
    anzeige: '10000'
    fehler:
      - wert: "1048576"
        meldung: 'Das ist $4^{10}$. Bei $x^4$ ist die Eingabe die Basis: $10^4$.'
  - typ: zahl
    label: 'c) $n$'
    loesung: "17"
    fehler:
      - wert: "16"
        meldung: 'Bei $16$ sind beide genau gleich: $2^{16} = 65536 = 16^4$. Größer ist $2^n$ erst danach.'
      - wert: "10"
        meldung: 'Bei $10$ ist $x^4 = 10\,000$ noch viel größer als $2^{10} = 1024$.'
  - typ: text
    label: 'c) Begründung'
    muster: |
      Bei $2^x$ ist das Verhältnis $\tfrac{f(x + 1)}{f(x)} = 2$ immer gleich. Bei $x^4$ ist es $\left(\tfrac{x + 1}{x}\right)^4$.
      Für $x \ge 16$ ist das höchstens $\left(\tfrac{17}{16}\right)^4 \approx 1{,}27 < 2$. Ab $x = 16$, wo beide gleich sind,
      wächst $2^x$ pro Schritt also stärker. Deshalb bleibt $2^n > n^4$ für alle $n \ge 17$.
hinweise:
  - 'Für b) $2^{16} = (2^4)^4 = 16^4$.'
  - 'Für c) vergleiche, um welchen Faktor jede Funktion bei einem Schritt um $1$ wächst. Für $x^4$ ist der Faktor $\left(1 + \tfrac1x\right)^4$.'
loesung: |
  **Ansatz:** Wir vergleichen nicht nur Werte, sondern die Wachstumsfaktoren pro Schritt. Das ist der Kern des Unterschieds.
  a) $f(10) = 1024$ und $g(10) = 10\,000$. Hier ist $x^4$ noch fast zehnmal so groß.
  ---
  b) $2^{16} = (2^4)^4 = 16^4 = 65\,536$. Beide sind bei $x = 16$ gleich.
  ---
  c) Pro Schritt wird $2^x$ immer verdoppelt. $x^4$ wächst um den Faktor $\left(\tfrac{x + 1}{x}\right)^4$, und der wird mit wachsendem $x$ kleiner. Für $x \ge 16$ ist er höchstens $\left(\tfrac{17}{16}\right)^4 \approx 1{,}27$.
  ---
  Ab dem Gleichstand bei $16$ wächst $2^x$ also in jedem Schritt stärker. **Antwort:** Für alle ganzen $n \ge 17$ gilt $2^n > n^4$. Probe: $2^{17} = 131\,072 > 83\,521 = 17^4$.
```

## Logarithmusfunktionen

```aufgabe
id: fu-log-check-umkehr
titel: Rückwärts bei 2ˣ
niveau: 1
art: check
angabe: |
  Es sei $f(x) = 2^x$. Welche Eingabe $x$ liefert die Ausgabe $8$? Gesucht ist also $f^{-1}(8)$.
  Herkunft: [4.8 Verkettung und Umkehrfunktion](/lernen/mathe3/funktionen/verkettung-und-umkehrfunktion).
teile:
  - typ: zahl
    label: '$f^{-1}(8)$'
    loesung: "3"
    fehler:
      - wert: "256"
        meldung: 'Das ist $f(8) = 2^8$. Gesucht ist umgekehrt die Eingabe, die zur Ausgabe $8$ führt.'
      - wert: "4"
        meldung: 'Rückwärts rechnen ist hier nicht Dividieren. Gesucht ist die Hochzahl $x$ mit $2^x = 8$.'
      - wert: "1/8"
        meldung: '$f^{-1}$ ist nicht der Kehrwert. Gesucht ist das $x$ mit $2^x = 8$.'
hinweise:
  - 'Suche die Hochzahl $x$ mit $2^x = 8$.'
loesung: |
  Die Umkehrfunktion beantwortet die Frage: Welche Eingabe führt zu dieser Ausgabe? Gesucht ist $x$ mit $2^x = 8$.
  ---
  Wegen $2^3 = 8$ ist $f^{-1}(8) = 3$. Genau diese Rückwärtsfrage beantwortet der Logarithmus.
```

Eine Exponentialfunktion rechnet aus einer Hochzahl einen Wert aus: $2^3 = 8$. Sehr oft braucht man die umgekehrte
Richtung. Man kennt den Wert und sucht die Hochzahl. „Wann hat sich der Bestand verdoppelt?“ ist genau so eine Frage.
Die Funktion, die diese Rückwärtsfrage beantwortet, ist der **Logarithmus**. Merke dir einen Satz: **Ein Logarithmus
ist eine Hochzahl.**

### Der Logarithmus als Umkehrfunktion

Für $a > 0$ und $a \ne 1$ ist $a^x$ streng monoton. Nach dem Satz aus
[4.8 Verkettung und Umkehrfunktion](/lernen/mathe3/funktionen/verkettung-und-umkehrfunktion) hat sie also eine
Umkehrfunktion. Diese vertauscht Eingabe und Ausgabe. Am deutlichsten sieht man das an einer Wertetabelle.

:::beispiel[Die Tabelle von 2ˣ rückwärts gelesen]
|$x$|$-2$|$-1$|$0$|$1$|$2$|$3$|
|---|---|---|---|---|---|---|
|$2^x$|$\tfrac14$|$\tfrac12$|$1$|$2$|$4$|$8$|

Liest man die Tabelle von unten nach oben, erhält man die Umkehrfunktion $\log_2$:
$$\log_2\tfrac14 = -2, \quad \log_2\tfrac12 = -1, \quad \log_2 1 = 0, \quad \log_2 2 = 1, \quad \log_2 4 = 2, \quad \log_2 8 = 3.$$
Die Eingaben von $\log_2$ sind die früheren Ausgaben, also nur positive Zahlen. Die Ausgaben von $\log_2$ sind die
früheren Hochzahlen. Das sind beliebige reelle Zahlen, auch negative.
:::

:::definition[Logarithmus]
Für $a > 0$, $a \ne 1$ und $y > 0$ ist $\log_a y$ die eindeutig bestimmte Zahl $x$ mit $a^x = y$:
$$\log_a y = x \quad\text{genau dann, wenn}\quad a^x = y.$$
Man liest $\log_a y$ als „Logarithmus von $y$ zur Basis $a$“. Die Funktion $x \mapsto \log_a x$ auf $(0, \infty)$ heißt
**Logarithmusfunktion zur Basis $a$**. Besondere Namen haben $\ln x = \log_e x$, der **natürliche Logarithmus**, und
$\lg x = \log_{10} x$, der **Zehnerlogarithmus**.
:::

:::beispiel[Logarithmen ohne Taschenrechner]
Bei jedem Logarithmus fragt man: Mit welcher Hochzahl muss ich die Basis potenzieren?
- $\log_3 81 = 4$, weil $3^4 = 81$.
- $\lg 0{,}01 = -2$, weil $10^{-2} = \tfrac{1}{100} = 0{,}01$.
- $\ln 1 = 0$, weil $e^0 = 1$. Das gilt für jede Basis: $\log_a 1 = 0$.
- $\log_5 \sqrt5 = \tfrac12$, weil $5^{1/2} = \sqrt5$.

**Nichtbeispiele:** $\log_2(-4)$ gibt es nicht, denn $2^x$ ist nie negativ. $\log_2 0$ gibt es auch nicht, denn $2^x$ ist
nie null. Und $\log_1 5$ gibt es nicht, denn $1^x = 1$ für jedes $x$.
:::

:::achtung[Der Logarithmus ist keine Division]
Eine typische Fehlrechnung: „$\log_2 8 = \tfrac82 = 4$.“ Der Logarithmus teilt nicht durch die Basis. Er fragt nach der
Hochzahl. **Richtig:** $\log_2 8 = 3$, weil $2^3 = 8$. Probe der falschen Antwort: $2^4 = 16 \ne 8$. Wer unsicher ist,
schreibt die Frage als Potenz hin: $2^{?} = 8$.
:::

Weil Logarithmus und Exponentialfunktion einander umkehren, heben sie sich gegenseitig auf:
$$a^{\log_a x} = x \quad (x > 0) \qquad\text{und}\qquad \log_a(a^x) = x \quad (x \in \R).$$
Speziell gilt $e^{\ln x} = x$ und $\ln(e^x) = x$. Die Rechenregeln stehen mit Beweisen in
[1.11 Logarithmen](/lernen/mathe3/zahlen/logarithmen). Hier sind sie zum Nachschlagen:
$$\log_a(xy) = \log_a x + \log_a y, \qquad \log_a\frac{x}{y} = \log_a x - \log_a y, \qquad \log_a(x^r) = r\log_a x.$$
Der Taschenrechner kennt meist nur $\ln$ und $\lg$. Mit dem **Basiswechsel** $\log_a x = \dfrac{\ln x}{\ln a}$ rechnet
man jeden anderen Logarithmus aus. So ist $\log_2 10 = \tfrac{\ln 10}{\ln 2} \approx \tfrac{2{,}3026}{0{,}6931} \approx 3{,}32$.

:::achtung[Logarithmus einer Summe]
Eine typische Fehlrechnung: $\ln(2 + 3) = \ln 2 + \ln 3$. Rechne nach: Links steht $\ln 5 \approx 1{,}609$, rechts
$\ln 2 + \ln 3 = \ln 6 \approx 1{,}792$. **Richtig:** Die Regel $\ln(xy) = \ln x + \ln y$ gilt für ein **Produkt** im
Argument, nicht für eine Summe. Für $\ln(x + y)$ gibt es keine Vereinfachung. Ebenso ist $\ln(3x) = \ln 3 + \ln x$
und nicht $3\ln x$.
:::

### Eigenschaften und Graph

Der Graph von $\log_a$ entsteht durch Spiegelung des Graphen von $a^x$ an der Geraden $y = x$. Daher übertragen sich alle
Eigenschaften mit vertauschten Rollen von $x$ und $y$.

:::satz[Eigenschaften von log_a für a > 1]
1. Definitionsmenge $(0, \infty)$, Wertemenge $\R$.
2. Einzige Nullstelle bei $x = 1$. Der Graph geht durch $(1 \mid 0)$ und $(a \mid 1)$.
3. Streng monoton steigend. Für $0 < x < 1$ ist $\log_a x < 0$, für $x > 1$ ist $\log_a x > 0$.
4. Die $y$-Achse ist senkrechte Asymptote: Für $x$ nahe bei $0$ wird $\log_a x$ beliebig stark negativ.
5. Für $x \to \infty$ wächst $\log_a x$ über alle Grenzen, aber **extrem langsam**: $\lg x$ erreicht den Wert $6$ erst bei
   einer Million.
:::

```plot
x: [-3, 8]
y: [-3, 8]
gleich: true
graphen:
  - { f: "e^x", label: "eˣ", farbe: 0 }
  - { f: "ln(x)", label: "ln x", farbe: 1 }
  - { f: "x", label: "y = x", farbe: 3, gestrichelt: true }
punkte:
  - { x: 0, y: 1, label: "(0 | 1)", farbe: 0 }
  - { x: 1, y: 0, label: "(1 | 0)", farbe: 1 }
beschriftung: Der natürliche Logarithmus ist das Spiegelbild der e-Funktion an der Geraden y = x. Aus dem Punkt (0 | 1) wird (1 | 0), aus der waagrechten Asymptote wird die senkrechte.
```

Für $0 < a < 1$ ist $\log_a x$ streng monoton **fallend**. Diese Basen kommen in der Praxis selten vor.

### Der Logarithmus als Werkzeug

In Anwendungen braucht man den Logarithmus fast nur für eine Aufgabe: **die Hochzahl aus einer Exponentialgleichung
holen.**
$$a^x = b \quad\text{ergibt}\quad x = \log_a b = \frac{\ln b}{\ln a}, \qquad e^{\lambda t} = b \quad\text{ergibt}\quad t = \frac{\ln b}{\lambda}.$$
Genau das passiert bei jeder Frage „Wann ist …?“ in den Wachstumsaufgaben. Ausführlich geübt wird das in
[2.9 Exponential- und Logarithmusgleichungen](/lernen/mathe3/gleichungen/exponential-und-logarithmusgleichungen).

:::beispiel[Lautstärke in Dezibel]
Der Schallpegel wird mit dem Zehnerlogarithmus gemessen. Ist $I$ die Schallintensität und $I_0$ eine feste
Bezugsintensität, dann ist der Pegel
$$L = 10\cdot\lg\frac{I}{I_0} \qquad (L \text{ in Dezibel, kurz dB}).$$
1. Ein Rasenmäher hat die $10^9$-fache Bezugsintensität: $L = 10\cdot\lg 10^9 = 10\cdot 9 = 90$ dB.
2. Zwei gleiche Rasenmäher haben die doppelte Intensität. Der Pegel steigt nur um
   $10\cdot\lg 2 \approx 3{,}01$ dB auf rund $93$ dB.
3. Der Logarithmus macht aus einem **Faktor** einen **Summanden**. Deshalb kann man riesige Intensitäten mit kleinen,
   handlichen Zahlen beschreiben.
:::

:::merke[Den Logarithmus richtig verwenden]
1. Ein Logarithmus ist eine Hochzahl: $\log_a b$ ist die Zahl $x$ mit $a^x = b$.
2. Logarithmen gibt es nur von positiven Zahlen. Bei Gleichungen am Ende die Definitionsmenge prüfen.
3. Produkt im Argument wird Summe, Potenz im Argument wird Faktor. Für Summen im Argument gibt es keine Regel.
4. Um eine Hochzahl zu befreien: Potenz allein auf eine Seite bringen, dann logarithmieren.
:::

```reflexion
frage: Warum ist $\ln x$ nur für positive $x$ definiert? Erkläre es mit dem Zusammenhang zur Exponentialfunktion.
antwort: |
  $\ln x$ ist die Hochzahl, mit der man $e$ potenzieren muss, um $x$ zu erhalten. Die Ausgaben von $e^t$ sind aber immer
  positiv, egal welche Hochzahl $t$ man wählt. Zu einer Zahl $x \le 0$ gibt es also keine Hochzahl $t$ mit $e^t = x$.
  Die Definitionsmenge der Umkehrfunktion ist die Wertemenge der ursprünglichen Funktion. Die Wertemenge von $e^t$ ist
  $(0, \infty)$, also ist das die Definitionsmenge von $\ln$.
```

```aufgabe
id: fu-log-werte
titel: Logarithmen ohne Taschenrechner
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Berechne ohne Taschenrechner $\log_2 32$, $\lg 0{,}001$, $\ln e^3$ und $\log_3 \tfrac19$.
teile:
  - typ: zahl
    label: '$\log_2 32$'
    loesung: "log(32, 2)"
    anzeige: '5'
    fehler:
      - wert: "16"
        meldung: 'Der Logarithmus ist keine Division. Gesucht ist die Hochzahl $x$ mit $2^x = 32$.'
  - typ: zahl
    label: '$\lg 0{,}001$'
    loesung: "lg(0.001)"
    anzeige: '-3'
    fehler:
      - wert: "3"
        meldung: '$10^3 = 1000$. Für $0{,}001 = \tfrac{1}{1000}$ braucht man die negative Hochzahl $-3$.'
  - typ: zahl
    label: '$\ln e^3$'
    loesung: "ln(e^3)"
    anzeige: '3'
    fehler:
      - wert: "e^3"
        meldung: '$\ln$ und $e$ heben sich auf: $\ln(e^3) = 3$.'
  - typ: zahl
    label: '$\log_3 \tfrac19$'
    loesung: "log(1/9, 3)"
    anzeige: '-2'
    fehler:
      - wert: "2"
        meldung: '$3^2 = 9$. Für $\tfrac19$ braucht man den Kehrwert, also die Hochzahl $-2$.'
hinweise:
  - 'Frage dich jeweils, mit welcher Hochzahl man die Basis potenzieren muss.'
loesung: |
  **Ansatz:** Jeder Logarithmus ist eine Hochzahl. $2^5 = 32$, also $\log_2 32 = 5$. $10^{-3} = 0{,}001$, also $\lg 0{,}001 = -3$.
  ---
  $\ln e^3 = 3$, weil sich Logarithmus und $e$-Funktion aufheben. $3^{-2} = \tfrac19$, also $\log_3\tfrac19 = -2$.
```

```aufgabe
id: fu-log-umkehr-punkte
titel: Punkte auf dem Logarithmusgraphen
niveau: 1
lernziel: 7
kompetenz: verstehen
angabe: |
  Der Graph von $f(x) = 3^x$ geht durch die Punkte $(2 \mid 9)$ und $(-1 \mid \tfrac13)$.

  a) Welche zwei Punkte liegen deshalb auf dem Graphen von $g(x) = \log_3 x$?

  b) Berechne $g(81)$.
teile:
  - typ: auswahl
    label: 'a)'
    optionen:
      - '$(9 \mid 2)$ und $(\tfrac13 \mid -1)$'
      - '$(2 \mid 9)$ und $(-1 \mid \tfrac13)$'
      - '$(-2 \mid -9)$ und $(1 \mid -\tfrac13)$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Das sind die Punkte von $3^x$. Für die Umkehrfunktion werden die Koordinaten vertauscht.'
      - wert: 2
        meldung: 'Die Umkehrfunktion vertauscht die Koordinaten. Sie ändert keine Vorzeichen.'
  - typ: zahl
    label: 'b) $g(81)$'
    loesung: "log(81, 3)"
    anzeige: '4'
    fehler:
      - wert: "27"
        meldung: 'Gesucht ist die Hochzahl $x$ mit $3^x = 81$, nicht $81 : 3$.'
hinweise:
  - 'Der Logarithmus ist die Umkehrfunktion. Aus $(a \mid b)$ wird $(b \mid a)$.'
loesung: |
  **Ansatz:** $\log_3$ ist die Umkehrfunktion von $3^x$. Punkte werden durch Vertauschen der Koordinaten gespiegelt.
  a) Aus $(2 \mid 9)$ wird $(9 \mid 2)$, aus $(-1 \mid \tfrac13)$ wird $(\tfrac13 \mid -1)$. Denn $\log_3 9 = 2$ und $\log_3\tfrac13 = -1$.
  ---
  b) $3^4 = 81$, also $g(81) = \log_3 81 = 4$.
```

```aufgabe
id: fu-log-definition
titel: Eine verschobene Logarithmusfunktion
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Gegeben ist $f(x) = \ln(x - 2) + 1$.

  a) Bestimme die Definitionsmenge. Gib ihren linken Rand an.

  b) Bestimme die Nullstelle exakt und auf drei Nachkommastellen.

  c) Wie entsteht der Graph aus dem von $\ln x$?
teile:
  - typ: zahl
    label: 'a) linker Rand von $D$'
    loesung: "2"
    fehler:
      - wert: "-2"
        meldung: 'Das Argument $x - 2$ muss positiv sein: $x > 2$.'
  - typ: zahl
    label: 'b) Nullstelle'
    loesung: "2 + e^(-1)"
    toleranz: 0.001
    anzeige: '2 + \tfrac1e \approx 2{,}368'
    fehler:
      - wert: "2 + e"
        meldung: 'Aus $\ln(x - 2) = -1$ folgt $x - 2 = e^{-1}$. Die Hochzahl ist $-1$, nicht $1$.'
      - wert: "1"
        meldung: 'Die Nullstelle muss in $D = (2, \infty)$ liegen. Löse $\ln(x - 2) = -1$.'
  - typ: auswahl
    label: 'c)'
    optionen:
      - 'um $2$ nach rechts und $1$ nach oben'
      - 'um $2$ nach links und $1$ nach oben'
      - 'um $2$ nach rechts und $1$ nach unten'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Innen wirkt umgekehrt: $x - 2$ verschiebt nach rechts.'
      - wert: 2
        meldung: 'Außen wirkt wie es dasteht: $+1$ verschiebt nach oben.'
hinweise:
  - 'Das Argument des Logarithmus muss größer als $0$ sein.'
  - 'Für die Nullstelle: $\ln(x - 2) = -1$ heißt $x - 2 = e^{-1}$.'
loesung: |
  **Ansatz:** Definitionsmenge über das Argument, Nullstelle über die Umkehrung von $\ln$.
  a) $x - 2 > 0$, also $x > 2$ und $D = (2, \infty)$.
  ---
  b) $\ln(x - 2) + 1 = 0$ heißt $\ln(x - 2) = -1$. Die Umkehrung von $\ln$ ist $e^{(\cdot)}$: $x - 2 = e^{-1}$, also $x = 2 + \tfrac1e \approx 2{,}368$. Das liegt in $D$.
  ---
  c) $x \to x - 2$ verschiebt um $2$ nach rechts, die Asymptote wandert nach $x = 2$. Die $+1$ verschiebt um $1$ nach oben.
```

```aufgabe
id: fu-log-gleichung-wann
titel: Die Hochzahl befreien
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Löse und runde auf zwei Nachkommastellen.

  a) $1{,}08^t = 3$

  b) $e^{0{,}2t} = 5$
teile:
  - typ: zahl
    label: 'a) $t$'
    loesung: "ln(3)/ln(1.08)"
    toleranz: 0.01
    anzeige: '14{,}27'
    fehler:
      - wert: "ln(3/1.08)"
        meldung: 'Aus $\ln(1{,}08^t)$ wird $t\cdot\ln 1{,}08$. Dann dividierst du durch $\ln 1{,}08$, statt $3$ durch $1{,}08$ zu teilen.'
      - wert: "3/1.08"
        meldung: 'Die Unbekannte steht in der Hochzahl. Dividieren hilft nicht. Logarithmiere beide Seiten.'
  - typ: zahl
    label: 'b) $t$'
    loesung: "ln(5)/0.2"
    toleranz: 0.01
    anzeige: '8{,}05'
    fehler:
      - wert: "ln(5*0.2)"
        meldung: 'Aus $\ln(e^{0{,}2t}) = 0{,}2t$ folgt $0{,}2t = \ln 5$. Dividiere dann durch $0{,}2$.'
      - wert: "5/0.2"
        meldung: 'Zuerst logarithmieren: $0{,}2t = \ln 5$. Erst dann durch $0{,}2$ dividieren.'
hinweise:
  - 'Logarithmiere beide Seiten mit $\ln$. Die Regel $\ln(a^t) = t\ln a$ holt die Hochzahl herunter.'
  - 'Bei b) hebt $\ln$ die $e$-Funktion auf: $\ln(e^{0{,}2t}) = 0{,}2t$.'
loesung: |
  **Ansatz:** Die Potenz steht schon allein. Wir logarithmieren beide Seiten, damit die Hochzahl ein Faktor wird.
  ---
  a) $t\cdot\ln 1{,}08 = \ln 3$, also $t = \dfrac{\ln 3}{\ln 1{,}08} \approx \dfrac{1{,}0986}{0{,}07696} \approx 14{,}27$. Probe: $1{,}08^{14{,}27} \approx 3{,}00$.
  ---
  b) $0{,}2t = \ln 5$, also $t = \dfrac{\ln 5}{0{,}2} \approx 8{,}05$. Probe: $e^{0{,}2\cdot 8{,}05} = e^{1{,}61} \approx 5{,}00$.
```

```aufgabe
id: fu-log-regeln-fehler
titel: Fehler bei einer Logarithmusregel finden
niveau: 2
lernziel: 7
kompetenz: begruenden
angabe: |
  Eine Mitschülerin schreibt $\ln(4x) = 4\ln x$.

  a) Berechne beide Seiten für $x = e$ auf drei Nachkommastellen.

  b) Welche Umformung ist richtig?
teile:
  - typ: zahl
    label: 'a) $\ln(4e)$'
    loesung: "ln(4*e)"
    toleranz: 0.001
    anzeige: '\ln 4 + 1 \approx 2{,}386'
    fehler:
      - wert: "4"
        meldung: 'Das ist die rechte Seite $4\ln e = 4$. Gefragt ist zuerst die linke Seite $\ln(4e)$.'
  - typ: auswahl
    label: 'b)'
    optionen: ['$\ln(4x) = \ln 4 + \ln x$', '$\ln(4x) = 4\ln x$', '$\ln(4x) = \ln 4\cdot\ln x$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$4\ln x = \ln(x^4)$. Ein Faktor vor dem Logarithmus gehört zu einer Hochzahl im Argument, nicht zu einem Faktor.'
      - wert: 2
        meldung: 'Ein Produkt im Argument wird zu einer **Summe** der Logarithmen, nicht zu einem Produkt.'
hinweise:
  - 'Es ist $\ln e = 1$. Für die linke Seite verwende $\ln(4e) = \ln 4 + \ln e$.'
  - 'Produktregel: $\ln(ab) = \ln a + \ln b$. Potenzregel: $\ln(a^r) = r\ln a$.'
loesung: |
  **Ansatz:** Eine Probe an einer Stelle zeigt, ob die Umformung stimmt.
  a) $\ln(4e) = \ln 4 + \ln e = 1{,}386 + 1 = 2{,}386$. Die rechte Seite ist $4\ln e = 4$.
  ---
  Die Werte sind verschieden, also ist die Umformung falsch. Die Mitschülerin hat die Produktregel mit der Potenzregel verwechselt.
  ---
  b) Richtig ist die Produktregel: $\ln(4x) = \ln 4 + \ln x$. Dagegen wäre $4\ln x = \ln(x^4)$.
```

```aufgabe
id: fu-log-dezibel
titel: Wie laut sind zwei Geräte?
niveau: 2
lernziel: 7
kompetenz: modellieren
angabe: |
  Für den Schallpegel gilt $L = 10\cdot\lg\dfrac{I}{I_0}$ in dB. Dabei ist $I$ die Schallintensität und $I_0$ eine feste
  Bezugsintensität.

  a) Ein Staubsauger hat die $10^7$-fache Bezugsintensität. Berechne seinen Pegel.

  b) Um wie viel dB steigt der Pegel, wenn die Intensität mit $100$ multipliziert wird?

  c) Um wie viel dB steigt er bei der $5$-fachen Intensität? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    label: 'a) Pegel'
    einheit: dB
    loesung: "10*lg(10^7)"
    anzeige: '70'
    fehler:
      - wert: "7"
        meldung: '$\lg 10^7 = 7$ stimmt. Danach wird noch mit $10$ multipliziert.'
  - typ: zahl
    label: 'b) Zunahme'
    einheit: dB
    loesung: "10*lg(100)"
    anzeige: '20'
    fehler:
      - wert: "1000"
        meldung: 'Der Pegel wird nicht mit $100$ multipliziert. Der Logarithmus macht aus dem Faktor $100$ den Summanden $10\cdot\lg 100$.'
  - typ: zahl
    label: 'c) Zunahme'
    einheit: dB
    loesung: "10*lg(5)"
    toleranz: 0.01
    anzeige: '6{,}99'
    fehler:
      - wert: "50"
        meldung: 'Ein Faktor wird zu einem Summanden: $10\cdot\lg 5$, nicht $10\cdot 5$.'
hinweise:
  - 'Bei $k$-facher Intensität ist $L_{\text{neu}} = 10\cdot\lg\tfrac{kI}{I_0} = 10\cdot\lg k + 10\cdot\lg\tfrac{I}{I_0}$.'
  - 'Die Zunahme ist also $10\cdot\lg k$, unabhängig vom alten Pegel.'
loesung: |
  **Ansatz:** Der Logarithmus verwandelt einen Faktor in einen Summanden. Das ist die Produktregel.
  a) $L = 10\cdot\lg 10^7 = 10\cdot 7 = 70$ dB.
  ---
  b) $10\cdot\lg\tfrac{100\,I}{I_0} = 10\cdot\lg 100 + 10\cdot\lg\tfrac{I}{I_0}$. Die Zunahme ist $10\cdot 2 = 20$ dB.
  ---
  c) Zunahme $10\cdot\lg 5 \approx 10\cdot 0{,}69897 \approx 6{,}99$ dB. **Deutung:** Fünf gleiche Staubsauger sind nur um rund $7$ dB lauter als einer.
```

```aufgabe
id: fu-log-umkehr-verschoben
titel: Eine Logarithmusfunktion vollständig untersuchen
niveau: 3
lernziel: 7
kompetenz: rechnen
angabe: |
  Gegeben ist $f(x) = \log_2(x + 4) - 1$.

  a) Gib den linken Rand der Definitionsmenge an.

  b) Bestimme die Nullstelle und den Schnittpunkt mit der $y$-Achse.

  c) Bestimme die Umkehrfunktion $f^{-1}$.
teile:
  - typ: zahl
    label: 'a) linker Rand'
    loesung: "-4"
    fehler:
      - wert: "4"
        meldung: 'Das Argument $x + 4$ muss positiv sein, also $x > -4$.'
  - typ: zahl
    label: 'b) Nullstelle'
    loesung: "-2"
    fehler:
      - wert: "2"
        meldung: 'Aus $\log_2(x + 4) = 1$ folgt $x + 4 = 2^1 = 2$, also $x = -2$.'
      - wert: "-3"
        meldung: '$\log_2(x + 4) = 1$ heißt $x + 4 = 2$, nicht $x + 4 = 1$.'
  - typ: zahl
    label: 'b) $f(0)$'
    loesung: "log(4, 2) - 1"
    anzeige: '1'
    fehler:
      - wert: "3"
        meldung: '$\log_2 4 = 2$, denn $2^2 = 4$. Dann $2 - 1 = 1$.'
  - typ: term
    label: 'c) $f^{-1}(x)$'
    loesung: "2^(x + 1) - 4"
    fehler:
      - wert: "2^x + 1 - 4"
        meldung: 'Aus $y + 1 = \log_2(x + 4)$ folgt $x + 4 = 2^{y + 1}$. Die $1$ gehört in die Hochzahl.'
      - wert: "2^(x - 1) + 4"
        meldung: 'Prüfe die Vorzeichen. Erst $1$ addieren, dann potenzieren, dann $4$ abziehen.'
hinweise:
  - 'Für die Nullstelle: $\log_2(x + 4) = 1$ bedeutet $x + 4 = 2^1$.'
  - 'Für die Umkehrfunktion: $y = \log_2(x + 4) - 1$ nach $x$ auflösen. Zuerst $1$ addieren, dann die Umkehrung von $\log_2$ anwenden.'
loesung: |
  **Ansatz:** Der Logarithmus wird mit seiner Umkehrfunktion $2^{(\cdot)}$ aufgelöst.
  a) $x + 4 > 0$, also $x > -4$. Der linke Rand ist $-4$, dort liegt die senkrechte Asymptote.
  ---
  b) Nullstelle: $\log_2(x + 4) = 1$ heißt $x + 4 = 2$, also $x = -2$. $y$-Achse: $f(0) = \log_2 4 - 1 = 2 - 1 = 1$, also der Punkt $(0 \mid 1)$.
  ---
  c) $y = \log_2(x + 4) - 1$. Plus $1$: $y + 1 = \log_2(x + 4)$. Umkehrung von $\log_2$: $x + 4 = 2^{y + 1}$, also $x = 2^{y + 1} - 4$.
  ---
  Umbenennen: $f^{-1}(x) = 2^{x + 1} - 4$. Probe: $f(0) = 1$ und $f^{-1}(1) = 2^2 - 4 = 0$.
gefuehrt:
  - text: 'Bringe in $y = \log_2(x + 4) - 1$ die $1$ auf die andere Seite. Was steht dann allein?'
    teil: { typ: term, variable: y, loesung: "y + 1" }
    erklaerung: '$y + 1 = \log_2(x + 4)$. Jetzt steht der Logarithmus allein.'
  - text: 'Wende die Umkehrung von $\log_2$ an. Gib $x + 4$ als Term in $y$ an.'
    teil: { typ: term, variable: y, loesung: "2^(y + 1)", fehler: [ { wert: "2^y + 1", meldung: 'Potenziert wird die ganze linke Seite $y + 1$. Die $1$ steht mit in der Hochzahl.' } ] }
    erklaerung: 'Ein Logarithmus ist eine Hochzahl: $\log_2(x + 4) = y + 1$ heißt $2^{y + 1} = x + 4$.'
  - text: 'Löse nach $x$ auf und benenne um. Wie lautet $f^{-1}(x)$?'
    teil: { typ: term, loesung: "2^(x + 1) - 4" }
    erklaerung: '$x = 2^{y + 1} - 4$. Umbenennen ergibt $f^{-1}(x) = 2^{x + 1} - 4$.'
```

## Wachstums- und Zerfallsmodelle

```aufgabe
id: fu-wachs-check-zweimal
titel: Zweimal zehn Prozent
niveau: 1
art: check
angabe: |
  Ein Bestand wächst zuerst um $10\,\%$ und danach noch einmal um $10\,\%$. Um wie viel Prozent ist er insgesamt gewachsen?
  Herkunft: [1.6 Prozentrechnung](/lernen/mathe3/zahlen/prozentrechnung).
teile:
  - typ: zahl
    label: 'Zunahme insgesamt'
    einheit: '%'
    loesung: "(1.1^2 - 1)*100"
    anzeige: '21'
    fehler:
      - wert: "20"
        meldung: 'Die zweiten $10\,\%$ werden vom **schon gewachsenen** Bestand genommen. Rechne mit Faktoren: $1{,}1\cdot 1{,}1$.'
      - wert: "121"
        meldung: '$1{,}21$ ist der Faktor, also $121\,\%$ des Anfangsbestands. Die **Zunahme** ist $121\,\% - 100\,\%$.'
hinweise:
  - 'Jede Zunahme um $10\,\%$ ist eine Multiplikation mit $1{,}1$.'
loesung: |
  Jede Zunahme um $10\,\%$ heißt mal $1{,}1$. Zweimal hintereinander: $1{,}1\cdot 1{,}1 = 1{,}21$.
  ---
  Der Bestand ist auf $121\,\%$ gewachsen, also um $21\,\%$. Das ist mehr als $20\,\%$, weil die zweite Zunahme auch auf die erste wirkt. Das ist der Zinseszinseffekt.
```

Das ist die prüfungsrelevanteste Lektion dieses Kapitels. Zwei der drei Musterprüfungen enthalten eine
Wachstumsaufgabe, und die Fragen sind immer ähnlich. Man soll das Wachstumsgesetz aufstellen und den Prozentsatz pro
Zeiteinheit bestimmen. Dazu kommen die Verdopplungs- oder Halbwertszeit, die Frage „Wann wird ein Wert erreicht?“ und
eine Deutung des Ergebnisses. Alle diese Fragen beantwortest du nach dieser Lektion mit demselben Werkzeugkasten.

### Linear oder exponentiell?

:::definition[Lineares und exponentielles Wachstum]
Eine Größe $N(t)$ wächst
- **linear**, wenn sie in gleichen Zeitabständen um **denselben Betrag** $k$ zunimmt: $N(t + 1) = N(t) + k$. Dann ist
  $N(t) = N_0 + k\,t$.
- **exponentiell**, wenn sie in gleichen Zeitabständen um **denselben Prozentsatz** zunimmt, also mit **demselben
  Faktor** $q$ multipliziert wird: $N(t + 1) = N(t)\cdot q$. Dann ist $N(t) = N_0\cdot q^t$.

Dabei ist $N_0 = N(0)$ der **Anfangsbestand** und $q$ der **Wachstumsfaktor** pro Zeiteinheit.
:::

Beides heißt „Wachstum“, aber der Unterschied ist gewaltig. Beim linearen Wachstum kommt jedes Jahr gleich viel dazu. Beim
exponentiellen Wachstum kommt jedes Jahr gleich viel **Prozent** dazu. Weil der Bestand wächst, wird der Zuwachs selbst
immer größer.

:::beispiel[Zwei Tabellen vergleichen]
|$t$|$0$|$1$|$2$|$3$|$4$|
|---|---|---|---|---|---|
|linear $+50$|$1000$|$1050$|$1100$|$1150$|$1200$|
|exponentiell $+5\,\%$|$1000$|$1050$|$1102{,}5$|$1157{,}6$|$1215{,}5$|

1. Im ersten Jahr sehen beide gleich aus.
2. Linear: Die **Differenzen** aufeinanderfolgender Werte sind immer $50$.
3. Exponentiell: Die **Quotienten** sind immer $1{,}05$. Die Differenzen wachsen: $50$, dann $52{,}5$, dann $55{,}1$.
4. Langfristig: Nach $50$ Schritten hat das lineare Modell $3500$, das exponentielle $1000\cdot 1{,}05^{50} \approx 11\,467$.

So erkennt man den Typ in einer Tabelle mit gleichen Zeitschritten: konstante Differenzen heißt linear, konstante
Quotienten heißt exponentiell.
:::

### Änderungsmaße: absolut, relativ und als Faktor

Wie stark sich eine Größe zwischen zwei Zeitpunkten verändert, kann man auf drei Arten angeben. Für einen Bestand, der
in einem Jahr von $N_1$ auf $N_2$ wächst, ist

- die **absolute Änderung** $N_2 - N_1$, in der Einheit der Größe,
- die **relative Änderung** $\dfrac{N_2 - N_1}{N_1}$, meist in Prozent angegeben,
- der **Änderungsfaktor** $\dfrac{N_2}{N_1}$, und es gilt: Änderungsfaktor $= 1 +$ relative Änderung.

:::beispiel[Drei Änderungsmaße]
Ein Verein hat $400$ Mitglieder, ein Jahr später $460$.
1. Absolute Änderung: $460 - 400 = 60$ Mitglieder.
2. Relative Änderung: $\tfrac{60}{400} = 0{,}15 = 15\,\%$.
3. Änderungsfaktor: $\tfrac{460}{400} = 1{,}15$. Das ist $1 + 0{,}15$.

Bei linearem Wachstum ist die **absolute** Änderung pro Zeitschritt konstant. Bei exponentiellem Wachstum ist die
**relative** Änderung konstant, und damit auch der Faktor. Mehr zu Änderungsmaßen zeigt
[9.1 Änderungen messen](/lernen/mathe3/differentialrechnung/aenderungen-messen-absolute-relative-und-mittlere-aenderung).
:::

### Prozentsatz und Wachstumsfaktor

Bei einer Zunahme um $p\,\%$ pro Zeiteinheit ist der Faktor $q = 1 + \tfrac{p}{100}$. Bei einer Abnahme um $p\,\%$ ist
$q = 1 - \tfrac{p}{100}$.

| Beschreibung | Faktor $q$ |
|---|---|
| Zunahme um $6{,}5\,\%$ pro Stunde. | $1{,}065$ |
| Zunahme um $100\,\%$, also Verdopplung. | $2$ |
| Abnahme um $15\,\%$ pro Stunde. | $0{,}85$ |
| Abnahme um $3\,\%$ pro Jahr. | $0{,}97$ |

:::achtung[Prozentsatz statt Faktor]
Eine typische Fehlrechnung bei „Die Fläche wächst pro Stunde um $6{,}5\,\%$“: $A(t) = A_0\cdot 6{,}5^t$ oder
$A(t) = A_0\cdot 0{,}065^t$. Beides ist falsch. Mit $6{,}5$ würde die Fläche pro Stunde mehr als versechsfacht, mit
$0{,}065$ würde sie fast verschwinden. **Richtig:** $q = 1{,}065$. Ebenso heißt eine Abnahme um $15\,\%$ der Faktor
$0{,}85$ und nicht $0{,}15$ oder $-0{,}15$. Das ist der häufigste Fehler bei Wachstumsaufgaben überhaupt.
:::

```aufgabe
id: fu-wachs-check-faktor
titel: Welcher Faktor gehört zur Abnahme?
niveau: 1
art: check
angabe: |
  Ein Gletscher verliert pro Jahr $4\,\%$ seines Volumens. Mit welchem Faktor $q$ wird das Volumen jedes Jahr multipliziert?
teile:
  - typ: zahl
    label: '$q$'
    loesung: "0.96"
    fehler:
      - wert: "0.04"
        meldung: 'Mit $0{,}04$ bekommst du nur den **Verlust**. Es bleiben $100\,\% - 4\,\% = 96\,\%$.'
      - wert: "1.04"
        meldung: '$1{,}04$ gehört zu einer Zunahme. Bei einer Abnahme ist der Faktor kleiner als $1$.'
      - wert: "-0.04"
        meldung: 'Ein negativer Faktor würde das Volumen negativ machen. Es bleiben $96\,\%$.'
hinweise:
  - 'Was bleibt nach einem Jahr übrig, wenn $4\,\%$ verloren gehen?'
loesung: |
  Nach einem Jahr sind $100\,\% - 4\,\% = 96\,\%$ des Volumens übrig.
  ---
  Der Faktor ist $q = 0{,}96$. Das Gesetz lautet $V(t) = V_0\cdot 0{,}96^t$.
```

### Zwei Schreibweisen: q hoch t und e hoch λt

Ein exponentielles Gesetz kann mit einer beliebigen Basis $q$ oder mit der Basis $e$ angegeben sein. Man muss zwischen
beiden Formen sicher wechseln. Das funktioniert mit dem Basiswechsel aus
[4.10 Exponentialfunktionen](/lernen/mathe3/funktionen/exponentialfunktionen).

:::satz[Umrechnung zwischen Wachstumsfaktor und Wachstumskonstante]
$$N_0\, q^t = N_0\, e^{\lambda t} \quad\text{für alle } t \qquad\text{genau dann, wenn}\qquad \lambda = \ln q, \quad\text{also}\quad q = e^\lambda.$$
Die Zahl $\lambda$ heißt **Wachstumskonstante**, bei $\lambda < 0$ **Zerfallskonstante**. Der Prozentsatz pro Zeiteinheit ist
$$p = (q - 1)\cdot 100\,\% = \left(e^{\lambda} - 1\right)\cdot 100\,\%.$$
:::

Die Begründung ist kurz: $q^t = \left(e^{\ln q}\right)^t = e^{t\ln q}$.

:::achtung[λ ist nicht der Prozentsatz]
Eine typische Fehlrechnung bei $N(t) = N_0\,e^{0{,}07t}$ mit $t$ in Wochen: „Die Zunahme beträgt $7\,\%$ pro Woche.“ Das
ist falsch. Der Faktor pro Woche ist $e^{0{,}07} \approx 1{,}0725$. **Richtig:** Die Zunahme ist $7{,}25\,\%$ pro Woche.
Für kleine $\lambda$ sind $\lambda$ und $q - 1$ fast gleich, darum fällt der Fehler nicht sofort auf. Bei $\lambda = 0{,}5$ wäre es
schon $64{,}9\,\%$ statt $50\,\%$. In der Prüfung ist genau diese Umrechnung gefragt.
:::

:::intuition
Warum ist $e^\lambda - 1$ etwas größer als $\lambda$? Die Form $e^{\lambda t}$ beschreibt **kontinuierliches** Wachstum.
Der Zuwachs wird in jedem Augenblick sofort wieder mitverzinst. Eine kontinuierliche Rate von $7\,\%$ pro Woche ergibt
über eine ganze Woche durch diesen Zinseszinseffekt etwas mehr als $7\,\%$. Es ist dasselbe Phänomen wie bei
$\left(1 + \tfrac1n\right)^n$, das sich $e$ nähert.
:::

```aufgabe
id: fu-wachs-check-lambda
titel: Ist λ der Prozentsatz?
niveau: 1
art: check
angabe: |
  Ein Bestand wächst nach $N(t) = N_0\,e^{0{,}2t}$ mit $t$ in Jahren. Um wie viel Prozent wächst er pro Jahr ungefähr?
teile:
  - typ: auswahl
    optionen: ['um genau $20\,\%$', 'um etwa $22{,}1\,\%$', 'um etwa $2\,\%$']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: '$\lambda = 0{,}2$ ist nicht der Prozentsatz. Der Faktor pro Jahr ist $e^{0{,}2} \approx 1{,}221$.'
      - wert: 2
        meldung: 'Rechne den Faktor $e^{0{,}2}$ aus. Er liegt über $1{,}2$.'
hinweise:
  - 'Vergleiche $N(t + 1)$ mit $N(t)$. Der Faktor ist $e^{0{,}2}$.'
loesung: |
  Von einem Jahr zum nächsten wird mit $e^{0{,}2} \approx 1{,}2214$ multipliziert.
  ---
  Die Zunahme ist also etwa $22{,}1\,\%$ pro Jahr, etwas mehr als $20\,\%$.
```

### Verdopplungszeit und Halbwertszeit

:::definition[Verdopplungszeit, Halbwertszeit]
Bei exponentiellem Wachstum heißt die Zeit $T_2$, nach der sich der Bestand verdoppelt hat, **Verdopplungszeit**. Bei
exponentieller Abnahme heißt die Zeit $T_{1/2}$, nach der nur noch die Hälfte vorhanden ist, **Halbwertszeit**.
:::

:::satz[Formeln für Verdopplungs- und Halbwertszeit]
Für $N(t) = N_0\,e^{\lambda t}$ beziehungsweise $N(t) = N_0\,q^t$ gilt
$$T_2 = \frac{\ln 2}{\lambda} = \frac{\ln 2}{\ln q} \quad(\lambda > 0), \qquad T_{1/2} = \frac{\ln 2}{|\lambda|} = -\frac{\ln 2}{\ln q} \quad(\lambda < 0).$$
Diese Zeiten hängen **nicht** vom Anfangsbestand und **nicht** vom Startzeitpunkt ab. Von jedem Zeitpunkt aus dauert die
Verdopplung gleich lang.
:::

:::beweis
Gesucht ist $T$ mit $N(t + T) = 2N(t)$ für einen beliebigen Zeitpunkt $t$:
$$N_0 e^{\lambda(t + T)} = 2 N_0 e^{\lambda t}, \qquad\text{also}\qquad e^{\lambda t}\,e^{\lambda T} = 2\,e^{\lambda t}.$$
Wir dividieren durch $N_0\,e^{\lambda t}$, das ist erlaubt, weil es positiv ist: $e^{\lambda T} = 2$. Logarithmieren
ergibt $\lambda T = \ln 2$, also $T = \tfrac{\ln 2}{\lambda}$. Weder $N_0$ noch $t$ kommen darin vor. Für die Halbwertszeit
ersetzt man $2$ durch $\tfrac12$. Mit $\ln\tfrac12 = -\ln 2$ und $\lambda < 0$ folgt $T = \tfrac{-\ln 2}{\lambda} = \tfrac{\ln 2}{|\lambda|}$.
:::

Diese Unabhängigkeit ist ein **Kennzeichen** exponentiellen Wachstums. Bei linearem Wachstum dauert jede weitere
Verdopplung länger. Bei $+50$ pro Jahr dauert es von $1000$ auf $2000$ genau $20$ Jahre, von $2000$ auf $4000$ schon $40$.

:::beispiel[Wachstum in e-Darstellung]
Eine Population wächst nach $N(t) = 500\,e^{0{,}04t}$, $t$ in Jahren.
1. Jährliche Zunahme: Der Faktor ist $e^{0{,}04} \approx 1{,}0408$, also etwa $4{,}08\,\%$ pro Jahr.
2. Verdopplungszeit: $T_2 = \tfrac{\ln 2}{0{,}04} \approx 17{,}33$ Jahre.
3. Bestand nach $10$ Jahren: $500\,e^{0{,}4} \approx 745{,}9$, also etwa $746$ Tiere.
4. Wann sind es $2000$ Tiere? $500\,e^{0{,}04t} = 2000$ heißt $e^{0{,}04t} = 4$, also $t = \tfrac{\ln 4}{0{,}04} \approx 34{,}66$ Jahre.
   Das sind genau zwei Verdopplungszeiten, denn $4 = 2^2$.
:::

:::merke[Rezept: Wann wird der Wert B erreicht?]
1. Wachstumsgesetz aufstellen: $N(t) = N_0\,q^t$ oder $N_0\,e^{\lambda t}$.
2. Gleichung ansetzen: $N_0\,q^t = B$.
3. Durch $N_0$ dividieren: $q^t = \tfrac{B}{N_0}$.
4. Logarithmieren: $t = \dfrac{\ln(B/N_0)}{\ln q}$ beziehungsweise $t = \dfrac{\ln(B/N_0)}{\lambda}$.
5. Mit Einheit und sinnvoller Rundung antworten und die Plausibilität prüfen.

Für Vervielfachungen ist $\tfrac{B}{N_0}$ einfach der Faktor: verdoppeln $2$, verzehnfachen $10$, halbieren $\tfrac12$.
:::

:::tipp[Faustregel 70]
Wegen $\ln 2 \approx 0{,}693$ und $\ln\left(1 + \tfrac{p}{100}\right) \approx \tfrac{p}{100}$ für kleine $p$ gilt
näherungsweise $T_2 \approx \dfrac{70}{p}$. Bei $5\,\%$ pro Jahr ist $T_2 \approx 14$ Jahre. Exakt sind es
$\tfrac{\ln 2}{\ln 1{,}05} \approx 14{,}21$ Jahre. Die Regel eignet sich gut für eine schnelle Kontrolle.
:::

### Exponentielle Abnahme

Radioaktiver Zerfall, der Abbau eines Wirkstoffs im Körper oder der Wertverlust eines Autos werden mit $q < 1$
beziehungsweise $\lambda < 0$ beschrieben. Aus der Halbwertszeit bekommt man direkt das Gesetz:
$$N(t) = N_0\left(\frac12\right)^{t/T_{1/2}} = N_0\, e^{-\frac{\ln 2}{T_{1/2}}\,t}.$$
Nach einer Halbwertszeit ist der Exponent $1$, und es ist die Hälfte da. Nach zwei Halbwertszeiten ist es ein Viertel.
Nach zehn ist es weniger als ein Tausendstel, denn $2^{-10} = \tfrac{1}{1024}$.

:::beispiel[Koffein im Blut]
Der Körper baut Koffein so ab, dass pro Stunde etwa $13\,\%$ der vorhandenen Menge verschwinden. Der Faktor pro Stunde
ist $q = 0{,}87$. Die Halbwertszeit folgt aus $0{,}87^T = 0{,}5$:
$$T = \frac{\ln 0{,}5}{\ln 0{,}87} \approx \frac{-0{,}6931}{-0{,}1393} \approx 4{,}98 \text{ Stunden}.$$
Wer um $16$ Uhr einen Kaffee mit $100$ mg Koffein trinkt, hat um $21$ Uhr noch etwa $100\cdot 0{,}87^5 \approx 49{,}8$ mg im
Blut, also rund die Hälfte. Das passt zur Halbwertszeit von knapp $5$ Stunden.
:::

### Modellkritik

Jedes Modell gilt nur in einem bestimmten Bereich. In Prüfungen wird oft verlangt, ein Ergebnis „im gegebenen Kontext zu
interpretieren“. Das heißt: prüfen, ob die Zahl realistisch ist. Eine Bakterienkultur in einer Petrischale mit $9$ cm
Durchmesser hat nur rund $64\text{ cm}^2$ Platz. Liefert ein exponentielles Modell nach einigen Tagen $300\text{ cm}^2$,
dann ist seine Gültigkeitsgrenze überschritten. In Wirklichkeit bremsen Platz und Nährstoffe das Wachstum. Modelle mit
einer Obergrenze zeigt [4.13 Beschränktes und logistisches Wachstum](/lernen/mathe3/funktionen/beschraenktes-und-logistisches-wachstum).

```reflexion
frage: Warum dauert beim exponentiellen Wachstum jede Verdopplung gleich lang, beim linearen Wachstum aber jede länger als die vorige?
antwort: |
  Beim exponentiellen Wachstum wird in jedem Zeitschritt mit demselben Faktor multipliziert. Verdoppeln heißt: so oft
  multiplizieren, bis das Produkt der Faktoren $2$ ergibt. Wie oft das ist, hängt nur vom Faktor ab und nicht davon, wie
  groß der Bestand gerade ist. Deshalb ist die Verdopplungszeit überall gleich.

  Beim linearen Wachstum kommt pro Schritt ein fester Betrag dazu. Um $1000$ zu verdoppeln, braucht man $1000$
  zusätzliche Einheiten. Um $2000$ zu verdoppeln, braucht man $2000$. Bei gleichem Zuwachs pro Jahr dauert das doppelt
  so lange.
```

```aufgabe
id: fu-linear-oder-exponentiell
titel: Linear oder exponentiell?
niveau: 1
lernziel: 8
kompetenz: verstehen
angabe: |
  Welche Tabellen können zu einem **exponentiellen** Modell gehören? Die Zeitschritte sind jeweils gleich.

  (A) $t$: $0, 1, 2, 3$ und $N$: $200, 260, 320, 380$

  (B) $t$: $0, 1, 2, 3$ und $N$: $200, 240, 288, 345{,}6$

  (C) $t$: $0, 1, 2, 3$ und $N$: $800, 400, 200, 100$

  (D) $t$: $0, 1, 2, 3$ und $N$: $100, 120, 150, 190$
teile:
  - typ: auswahl
    mehrfach: true
    optionen: ['(A)', '(B)', '(C)', '(D)']
    richtig: [1, 2]
    fehler:
      - wert: [0, 1, 2]
        meldung: 'Bei (A) sind die **Differenzen** konstant ($60$). Das ist linear, nicht exponentiell.'
      - wert: [1]
        meldung: 'Auch eine Abnahme kann exponentiell sein. Bei (C) ist der Quotient immer $0{,}5$.'
      - wert: [1, 2, 3]
        meldung: 'Prüfe (D): $\tfrac{120}{100} = 1{,}2$, aber $\tfrac{150}{120} = 1{,}25$. Die Quotienten sind nicht gleich.'
hinweise:
  - 'Berechne die Quotienten aufeinanderfolgender Werte. Sind sie alle gleich?'
loesung: |
  **Ansatz:** Exponentiell heißt konstanter Faktor, also konstante Quotienten. (A) Differenzen immer $60$: linear.
  ---
  (B) Quotienten $\tfrac{240}{200} = \tfrac{288}{240} = \tfrac{345{,}6}{288} = 1{,}2$: exponentiell, $+20\,\%$ pro Schritt. (C) Quotienten immer $0{,}5$: exponentielle Abnahme.
  ---
  (D) Differenzen $20, 30, 40$ und Quotienten $1{,}2$, $1{,}25$, $1{,}27$: weder linear noch exponentiell. Exponentiell sind also (B) und (C).
```

```aufgabe
id: fu-prozent-lambda
titel: Prozentsatz und Wachstumskonstante
niveau: 1
lernziel: 8
kompetenz: rechnen
angabe: |
  a) Ein Kapital wächst um $3\,\%$ pro Jahr. Schreibe $K(t) = K_0\cdot 1{,}03^t$ in der Form $K_0\,e^{\lambda t}$. Gib
  $\lambda$ auf fünf Nachkommastellen an.

  b) Ein Bestand wächst nach $N(t) = N_0\,e^{0{,}12t}$ mit $t$ in Jahren. Um wie viel Prozent nimmt er pro Jahr zu? Runde
  auf zwei Nachkommastellen.
teile:
  - typ: zahl
    label: 'a) $\lambda$'
    loesung: "ln(1.03)"
    toleranz: 0.00001
    anzeige: '\ln 1{,}03 \approx 0{,}02956'
    fehler:
      - wert: "0.03"
        meldung: '$\lambda$ ist nicht der Prozentsatz. Es gilt $\lambda = \ln q = \ln 1{,}03$.'
      - wert: "ln(3)"
        meldung: 'Der Faktor ist $q = 1{,}03$, nicht $3$. Also $\lambda = \ln 1{,}03$.'
  - typ: zahl
    label: 'b) Zunahme pro Jahr'
    einheit: '%'
    loesung: "(e^0.12 - 1)*100"
    toleranz: 0.01
    anzeige: '12{,}75'
    fehler:
      - wert: "12"
        meldung: 'Der Faktor pro Jahr ist $e^{0{,}12}$, nicht $1{,}12$. Rechne $e^{0{,}12} - 1$ aus.'
      - wert: "112.75"
        meldung: 'Das ist der Faktor in Prozent. Die **Zunahme** ist $112{,}75\,\% - 100\,\%$.'
hinweise:
  - 'Es gilt $\lambda = \ln q$ und umgekehrt $q = e^\lambda$. Die Zunahme ist $q - 1$.'
loesung: |
  **Ansatz:** Faktor und Wachstumskonstante hängen über $\lambda = \ln q$ zusammen.
  a) $q = 1{,}03$, also $\lambda = \ln 1{,}03 \approx 0{,}02956$ und $K(t) = K_0\,e^{0{,}02956\,t}$.
  ---
  b) $q = e^{0{,}12} \approx 1{,}1275$. Die Zunahme pro Jahr ist $q - 1 \approx 0{,}1275 = 12{,}75\,\%$, nicht $12\,\%$.
```

```aufgabe
id: fu-aenderungsmasse
titel: Änderungsmaße aus zwei Werten
niveau: 2
lernziel: 8
kompetenz: rechnen
angabe: |
  Eine Stadt hatte im Jahr 2020 genau $800$ Fahrradabstellplätze, im Jahr 2021 waren es $860$.

  a) Berechne die absolute Änderung, die relative Änderung in Prozent und den Änderungsfaktor.

  b) Angenommen, die relative Änderung bleibt jedes Jahr gleich. Wie viele Plätze gibt es dann im Jahr 2024? Runde auf ganze Plätze.
teile:
  - typ: zahl
    label: 'a) absolute Änderung'
    loesung: "860 - 800"
    anzeige: '60'
    fehler:
      - wert: "7.5"
        meldung: 'Das ist die relative Änderung in Prozent. Die absolute Änderung ist die bloße Differenz.'
  - typ: zahl
    label: 'a) relative Änderung'
    einheit: '%'
    loesung: "60/800*100"
    anzeige: '7{,}5'
    fehler:
      - wert: "60/860*100"
        meldung: 'Die relative Änderung bezieht sich auf den **alten** Wert $800$, nicht auf den neuen.'
  - typ: zahl
    label: 'a) Änderungsfaktor'
    loesung: "860/800"
    anzeige: '1{,}075'
    fehler:
      - wert: "0.075"
        meldung: 'Der Faktor ist $1 +$ relative Änderung, also $1{,}075$.'
  - typ: zahl
    label: 'b) Plätze 2024'
    loesung: "800*1.075^4"
    toleranz: 1
    anzeige: '1068'
    fehler:
      - wert: "800 + 4*60"
        meldung: 'Das wäre lineares Wachstum mit gleicher **absoluter** Änderung. Gefordert ist gleiche **relative** Änderung.'
hinweise:
  - 'Relative Änderung: absolute Änderung geteilt durch den alten Wert. Faktor: neuer Wert durch alten Wert.'
  - 'Gleiche relative Änderung heißt exponentielles Modell. Von 2020 bis 2024 sind es $4$ Jahre.'
loesung: |
  **Ansatz:** Die drei Änderungsmaße vergleichen den neuen Wert $860$ mit dem alten Wert $800$.
  a) Absolut: $860 - 800 = 60$ Plätze. Relativ: $\tfrac{60}{800} = 0{,}075 = 7{,}5\,\%$. Faktor: $\tfrac{860}{800} = 1{,}075$.
  ---
  b) Gleiche relative Änderung heißt gleicher Faktor, also exponentielles Modell $N(t) = 800\cdot 1{,}075^t$ mit $t$ in Jahren ab 2020.
  ---
  $N(4) = 800\cdot 1{,}075^4 \approx 800\cdot 1{,}3355 \approx 1068$ Plätze. Zum Vergleich: Linear mit $+60$ pro Jahr wären es $1040$.
```

```aufgabe
id: fu-halbwertszeit
titel: Halbwertszeit eines Medikaments
niveau: 2
lernziel: 8
kompetenz: anwenden
angabe: |
  Ein Wirkstoff wird im Körper so abgebaut, dass pro Stunde $20\,\%$ der vorhandenen Menge verschwinden. Zu Beginn sind
  $400$ mg im Blut.

  a) Wie viel ist nach $5$ Stunden noch vorhanden? Runde auf eine Nachkommastelle.

  b) Berechne die Halbwertszeit. Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    label: 'a) Menge nach 5 h'
    einheit: mg
    loesung: "400*0.8^5"
    anzeige: '131{,}1'
    fehler:
      - wert: "400*0.2^5"
        meldung: 'Pro Stunde **verschwinden** $20\,\%$, es **bleiben** also $80\,\%$. Der Faktor ist $0{,}8$.'
      - wert: "0"
        meldung: 'Das wäre lineare Abnahme um $80$ mg pro Stunde. Hier verschwinden aber $20\,\%$ der jeweils **vorhandenen** Menge.'
  - typ: zahl
    label: 'b) Halbwertszeit'
    einheit: h
    loesung: "ln(0.5)/ln(0.8)"
    toleranz: 0.01
    anzeige: '3{,}11'
    fehler:
      - wert: "2.5"
        meldung: 'Das wäre linear gedacht: $50\,\%$ durch $20\,\%$ pro Stunde. Exponentiell löst man $0{,}8^T = 0{,}5$.'
hinweise:
  - 'Abnahme um $20\,\%$ heißt Faktor $q = 0{,}8$.'
  - 'Für die Halbwertszeit $0{,}8^T = 0{,}5$ logarithmieren.'
loesung: |
  **Ansatz:** Gleicher Prozentsatz pro Stunde heißt exponentielle Abnahme: $m(t) = 400\cdot 0{,}8^t$, $t$ in Stunden, $m$ in mg.
  ---
  a) $m(5) = 400\cdot 0{,}8^5 = 400\cdot 0{,}32768 \approx 131{,}1$ mg.
  ---
  b) $0{,}8^T = 0{,}5$, also $T = \dfrac{\ln 0{,}5}{\ln 0{,}8} \approx \dfrac{-0{,}6931}{-0{,}2231} \approx 3{,}11$ h.
  ---
  Plausibel: Nach $3$ Stunden sind $0{,}8^3 = 51{,}2\,\%$ übrig, knapp über der Hälfte.
```

```aufgabe
id: fu-verdopplung-e
titel: Wasserlinsen auf einem Teich
niveau: 2
lernziel: 8
kompetenz: anwenden
angabe: |
  Die von Wasserlinsen bedeckte Fläche eines Teichs wächst nach $A(t) = A_0\,e^{0{,}09t}$ mit $t$ in Tagen.

  a) Um wie viel Prozent nimmt die Fläche pro Tag zu? Runde auf zwei Nachkommastellen.

  b) Nach wie vielen Tagen hat sich die Fläche verdoppelt, nach wie vielen verfünffacht? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    label: 'a) Zunahme pro Tag'
    einheit: '%'
    loesung: "(e^0.09 - 1)*100"
    toleranz: 0.01
    anzeige: '9{,}42'
    fehler:
      - wert: "9"
        meldung: '$\lambda = 0{,}09$ ist nicht der Prozentsatz. Der Faktor pro Tag ist $e^{0{,}09}$.'
  - typ: zahl
    label: 'b) Verdopplungszeit'
    einheit: Tage
    loesung: "ln(2)/0.09"
    toleranz: 0.01
    anzeige: '7{,}70'
    fehler:
      - wert: "2/0.09"
        meldung: 'Aus $e^{0{,}09t} = 2$ folgt $0{,}09t = \ln 2$, nicht $0{,}09t = 2$.'
  - typ: zahl
    label: 'b) Verfünffachungszeit'
    einheit: Tage
    loesung: "ln(5)/0.09"
    toleranz: 0.01
    anzeige: '17{,}88'
    fehler:
      - wert: "5*ln(2)/0.09"
        meldung: 'Verfünffachen heißt nicht fünfmal verdoppeln. Löse $e^{0{,}09t} = 5$.'
hinweise:
  - 'Der Faktor pro Tag ist $q = e^{0{,}09}$. Die Zunahme ist $q - 1$.'
  - 'Verdoppeln: $A_0 e^{0{,}09t} = 2A_0$. Kürze $A_0$ und logarithmiere.'
loesung: |
  **Ansatz:** Vom Tag $t$ zum Tag $t + 1$ wird mit $e^{0{,}09}$ multipliziert. a) $e^{0{,}09} \approx 1{,}0942$, also eine Zunahme von $9{,}42\,\%$ pro Tag.
  ---
  b) Verdopplung: $e^{0{,}09t} = 2$, also $t = \dfrac{\ln 2}{0{,}09} \approx 7{,}70$ Tage. $A_0$ hat sich weggekürzt.
  ---
  Verfünffachung: $e^{0{,}09t} = 5$, also $t = \dfrac{\ln 5}{0{,}09} \approx 17{,}88$ Tage.
  Kontrolle: $5 \approx 2^{2{,}32}$, und $2{,}32\cdot 7{,}70 \approx 17{,}9$.
```

```aufgabe
id: fu-gehalt-vergleich
titel: Zwei Gehaltsmodelle
niveau: 3
lernziel: 8
kompetenz: modellieren
angabe: |
  Ein Jobangebot startet mit $30\,000$ Euro Jahresgehalt. Modell A erhöht jedes Jahr um $1500$ Euro, Modell B jedes Jahr um
  $4\,\%$. Es sei $t$ die Anzahl der Jahre.

  a) Stelle beide Gehälter $A(t)$ und $B(t)$ auf.

  b) Berechne beide Gehälter nach $10$ und nach $20$ Jahren. Runde auf ganze Euro.
teile:
  - typ: term
    label: 'a) $B(t)$'
    variable: t
    loesung: "30000*1.04^t"
    fehler:
      - wert: "30000*0.04^t"
        meldung: 'Eine Zunahme um $4\,\%$ heißt Faktor $1{,}04$, nicht $0{,}04$.'
      - wert: "30000 + 0.04*t"
        meldung: 'Das ist ein lineares Modell. Bei gleichem Prozentsatz wird jedes Jahr multipliziert.'
  - typ: zahl
    label: 'b) $A(10)$'
    einheit: Euro
    loesung: "30000 + 1500*10"
    anzeige: '45\,000'
    fehler:
      - wert: "30000*1.05^10"
        meldung: 'Modell A ist linear: Jedes Jahr kommen fest $1500$ Euro dazu.'
  - typ: zahl
    label: 'b) $B(10)$'
    einheit: Euro
    loesung: "30000*1.04^10"
    toleranz: 1
    anzeige: '44\,407'
    fehler:
      - wert: "30000*1.4"
        meldung: 'Zehnmal $4\,\%$ sind wegen des Zinseszinses mehr als $40\,\%$. Rechne $1{,}04^{10}$.'
  - typ: zahl
    label: 'b) $B(20)$'
    einheit: Euro
    loesung: "30000*1.04^20"
    toleranz: 1
    anzeige: '65\,734'
    fehler:
      - wert: "30000*1.8"
        meldung: 'Rechne mit dem Faktor: $1{,}04^{20} \approx 2{,}19$, nicht $1{,}8$.'
hinweise:
  - 'A ist linear mit $k = 1500$. B ist exponentiell mit $q = 1{,}04$.'
  - 'Setze $t = 10$ und $t = 20$ in beide Terme ein.'
loesung: |
  **Ansatz:** A wächst um einen festen Betrag, also linear: $A(t) = 30\,000 + 1500\,t$. B wächst um einen festen Prozentsatz, also exponentiell: $B(t) = 30\,000\cdot 1{,}04^t$.
  ---
  Nach $10$ Jahren: $A(10) = 45\,000$ Euro und $B(10) \approx 44\,407$ Euro. Noch liegt A vorne.
  ---
  Nach $20$ Jahren: $A(20) = 60\,000$ Euro und $B(20) \approx 65\,734$ Euro. Jetzt liegt B deutlich vorne.
  ---
  **Deutung:** Exponentielles Wachstum startet langsamer, überholt aber auf Dauer jedes lineare.
```

```aufgabe
id: fu-zwei-messungen
titel: Wachstumsrate aus zwei Messungen
niveau: 3
lernziel: 8
kompetenz: modellieren
angabe: |
  Eine Gemeinde hatte im Jahr 2010 genau $1200$ Einwohnerinnen und Einwohner, im Jahr 2015 waren es $1500$. Es wird
  exponentielles Wachstum angenommen.

  a) Bestimme die jährliche Wachstumsrate in Prozent. Runde auf zwei Nachkommastellen.

  b) Welche Einwohnerzahl sagt das Modell für 2030 voraus? Runde auf ganze Personen.

  c) In welchem Jahr wird die Zahl $2000$ erstmals überschritten, wenn man jeweils zum selben Stichtag wie 2010 zählt?
teile:
  - typ: zahl
    label: 'a) jährliche Rate'
    einheit: '%'
    loesung: "((1500/1200)^(1/5) - 1)*100"
    toleranz: 0.01
    anzeige: '4{,}56'
    fehler:
      - wert: "5"
        meldung: '$25\,\%$ in $5$ Jahren sind nicht $5\,\%$ pro Jahr. Exponentiell gilt $q^5 = 1{,}25$, also $q = 1{,}25^{1/5}$.'
  - typ: zahl
    label: 'b) Prognose 2030'
    loesung: "1200*1.25^4"
    toleranz: 1
    anzeige: '2930'
    fehler:
      - wert: "2400"
        meldung: 'Das wäre linear mit $+60$ pro Jahr. Exponentiell wird alle $5$ Jahre mit $1{,}25$ multipliziert.'
  - typ: zahl
    label: 'c) Jahr'
    loesung: "2022"
    toleranz: 0.1
    fehler:
      - wert: "2021"
        meldung: 'Laut Modell wird $2000$ nach $11{,}45$ Jahren erreicht, also im Lauf von 2021. Zum Stichtag 2021 ($t = 11$) ist es noch weniger als $2000$.'
hinweise:
  - 'Ansatz $N(t) = 1200\cdot q^t$ mit $t$ in Jahren ab 2010. Aus $N(5) = 1500$ folgt $q^5 = 1{,}25$.'
  - '2030 ist $t = 20 = 4\cdot 5$. Also $N(20) = 1200\cdot(q^5)^4$. Für c) löse $1200\,q^t = 2000$.'
loesung: |
  **Ansatz:** $N(t) = 1200\cdot q^t$, $t$ in Jahren seit 2010. Aus $N(5) = 1500$ folgt $q^5 = \tfrac{1500}{1200} = 1{,}25$.
  ---
  a) $q = 1{,}25^{1/5} \approx 1{,}04564$, also etwa $4{,}56\,\%$ pro Jahr.
  ---
  b) $N(20) = 1200\cdot (q^5)^4 = 1200\cdot 1{,}25^4 = 1200\cdot 2{,}44140625 \approx 2930$.
  ---
  c) $1200\, q^t = 2000$ heißt $q^t = \tfrac53$, also $t = \dfrac{\ln(5/3)}{\ln q} = \dfrac{5\ln(5/3)}{\ln 1{,}25} \approx 11{,}45$.
  ---
  Die Marke wird nach $11{,}45$ Jahren erreicht, also im Lauf von 2021. Zum Stichtag ist sie **erstmals 2022** ($t = 12$) überschritten. Probe: $N(11) \approx 1961$ und $N(12) \approx 2050$.
gefuehrt:
  - text: 'Setze $N(5) = 1500$ in $N(t) = 1200\cdot q^t$ ein. Welchen Wert hat $q^5$?'
    teil: { typ: zahl, loesung: "1.25", fehler: [ { wert: "300", meldung: 'Exponentiell vergleicht man Quotienten: $1500 : 1200$.' } ] }
    erklaerung: '$1200\cdot q^5 = 1500$, also $q^5 = 1{,}25$.'
  - text: 'Bestimme $q$ auf fünf Nachkommastellen.'
    teil: { typ: zahl, loesung: "1.25^(1/5)", toleranz: 0.00001 }
    erklaerung: '$q = 1{,}25^{1/5} \approx 1{,}04564$. Die Rate ist $4{,}56\,\%$ pro Jahr.'
  - text: 'Wie oft passt der $5$-Jahres-Faktor $1{,}25$ in die Zeit von 2010 bis 2030?'
    teil: { typ: zahl, loesung: "4" }
    erklaerung: '$20$ Jahre sind $4$ mal $5$ Jahre. Also $N(20) = 1200\cdot 1{,}25^4 \approx 2930$.'
  - text: Überlege, warum die Lösung $t \approx 11{,}45$ in c) auf das Jahr 2022 führt.
    erklaerung: '$t = 11{,}45$ liegt zwischen den Stichtagen 2021 ($t = 11$) und 2022 ($t = 12$). Erst zum Stichtag 2022 ist $2000$ überschritten.'
```

```aufgabe
id: fu-schimmel-flaeche
titel: Schimmel auf einer Brotscheibe
niveau: 3
lernziel: 8
kompetenz: modellieren
quelle: "nach Musterprüfung Schranz-Kirlinger 1.4 (abgewandelt)"
angabe: |
  Ein Schimmelfleck auf einer Brotscheibe bedeckt anfangs $3\text{ cm}^2$. Seine Fläche nimmt exponentiell zu, und zwar um
  $6{,}5\,\%$ pro Stunde. Dabei ist $t$ die Zeit in Stunden.

  a) Gib das Wachstumsgesetz $A(t)$ an.

  b) Wann bedeckt der Fleck $40\text{ cm}^2$? Runde auf zwei Nachkommastellen.

  c) Berechne $A(72)$ und deute das Ergebnis, wenn die Brotscheibe etwa $120\text{ cm}^2$ groß ist.
teile:
  - typ: term
    label: 'a) $A(t)$ in cm²'
    variable: t
    loesung: "3*1.065^t"
    bereich: [0, 10]
    fehler:
      - wert: "3*0.065^t"
        meldung: 'Eine Zunahme um $6{,}5\,\%$ heißt Faktor $1{,}065$, nicht $0{,}065$.'
      - wert: "3 + 0.065*t"
        meldung: 'Das ist ein lineares Modell. Exponentiell wird pro Stunde mit dem Faktor multipliziert.'
  - typ: zahl
    label: 'b) Zeitpunkt'
    einheit: h
    loesung: "ln(40/3)/ln(1.065)"
    toleranz: 0.01
    anzeige: '41{,}13'
    fehler:
      - wert: "ln(40)/ln(1.065)"
        meldung: 'Zuerst durch den Anfangswert $3$ dividieren: $1{,}065^t = \tfrac{40}{3}$.'
  - typ: zahl
    label: 'c) $A(72)$'
    einheit: 'cm²'
    loesung: "3*1.065^72"
    toleranz: 0.5
    anzeige: '279{,}4'
    fehler:
      - wert: "3*1.065*72"
        meldung: 'Die $72$ ist eine Hochzahl, kein Faktor: $1{,}065^{72}$.'
  - typ: text
    label: 'c) Deutung'
    muster: |
      Laut Modell wären es nach $72$ Stunden rund $279\text{ cm}^2$, mehr als doppelt so viel wie die ganze Brotscheibe mit
      etwa $120\text{ cm}^2$. Das ist unmöglich. Das exponentielle Modell gilt nur, solange genug Platz da ist. Danach
      passt ein Modell mit Obergrenze besser.
hinweise:
  - 'Pro Stunde wird die Fläche mit $1 + \tfrac{6{,}5}{100} = 1{,}065$ multipliziert.'
  - 'Für b) die Potenz isolieren: $1{,}065^t = \tfrac{40}{3}$. Dann logarithmieren.'
loesung: |
  **Ansatz:** Gleicher Prozentsatz pro Stunde heißt exponentielles Wachstum mit dem Faktor $1{,}065$.
  a) $A(t) = 3\cdot 1{,}065^t$, $A$ in cm², $t$ in Stunden.
  ---
  b) $3\cdot 1{,}065^t = 40$. Division durch $3$: $1{,}065^t = \tfrac{40}{3} \approx 13{,}33$. Logarithmieren: $t = \dfrac{\ln(40/3)}{\ln 1{,}065} \approx 41{,}13$ h.
  ---
  c) $A(72) = 3\cdot 1{,}065^{72} \approx 3\cdot 93{,}15 \approx 279{,}4\text{ cm}^2$.
  ---
  **Deutung:** Das ist mehr als die ganze Brotscheibe von etwa $120\text{ cm}^2$. Das exponentielle Modell kann die Wirklichkeit nur für eine begrenzte Zeit beschreiben. Danach bremst der fehlende Platz das Wachstum.
```

## Beschränktes und logistisches Wachstum

```aufgabe
id: fu-beschr-check-abnahme
titel: Was passiert mit e hoch minus kt?
niveau: 1
art: check
angabe: |
  Wie verhält sich $50\,e^{-0{,}1t}$, wenn $t$ sehr groß wird?
  Herkunft: [4.12 Wachstums- und Zerfallsmodelle](/lernen/mathe3/funktionen/wachstums-und-zerfallsmodelle), Abschnitt Exponentielle Abnahme.
teile:
  - typ: auswahl
    optionen:
      - 'Der Wert kommt $0$ beliebig nahe, wird aber nie $0$.'
      - 'Der Wert wird nach $t = 500$ genau $0$.'
      - 'Der Wert wird beliebig groß.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Eine Exponentialfunktion hat keine Nullstelle. $e^{-0{,}1t}$ ist für jedes $t$ positiv.'
      - wert: 2
        meldung: 'Wegen des Minus in der Hochzahl wird $e^{-0{,}1t} = \tfrac{1}{e^{0{,}1t}}$ immer kleiner.'
hinweise:
  - 'Schreibe $e^{-0{,}1t} = \tfrac{1}{e^{0{,}1t}}$. Was passiert mit dem Nenner?'
loesung: |
  $e^{-0{,}1t} = \tfrac{1}{e^{0{,}1t}}$. Der Nenner wird für große $t$ beliebig groß, also wird der Bruch beliebig klein.
  ---
  Er bleibt aber positiv. $50\,e^{-0{,}1t}$ kommt der $0$ also beliebig nahe, ohne sie zu erreichen. Die $t$-Achse ist waagrechte Asymptote.
```

Exponentielles Wachstum kann in der Wirklichkeit nie lange anhalten. Platz, Nahrung oder Käufer gehen irgendwann aus.
Für solche Vorgänge braucht man Modelle mit einer **Obergrenze**. In dieser Lektion lernst du zwei davon kennen. Beim
**beschränkten Wachstum** wird der Zuwachs von Anfang an langsamer. Beim **logistischen Wachstum** beginnt es fast
exponentiell und wird erst später gebremst.

### Beschränktes Wachstum

Das Bild dahinter: Ein Bestand $N(t)$ nähert sich einer Grenze $S$. Der noch freie Raum bis zur Grenze ist $S - N(t)$.
Beim beschränkten Wachstum nimmt **dieser freie Raum** exponentiell ab. Ein heißer Tee zeigt das gut. Er kühlt
schnell ab, solange er viel wärmer ist als der Raum. Je näher er der Raumtemperatur kommt, desto langsamer geht es.

:::definition[Beschränktes Wachstum]
Eine Größe wächst **beschränkt**, wenn sie sich durch
$$N(t) = S - (S - N_0)\,e^{-kt} \qquad (k > 0)$$
beschreiben lässt. Dabei ist $S$ die **Sättigungsgrenze** (auch Schranke oder Kapazität), $N_0 = N(0)$ der
**Anfangswert** und $k$ die **Wachstumskonstante**. Der Abstand zur Grenze $S - N(t) = (S - N_0)\,e^{-kt}$ nimmt
exponentiell ab.
:::

Für $t \to \infty$ geht $e^{-kt}$ gegen $0$, also $N(t)$ gegen $S$. Die Gerade $y = S$ ist waagrechte Asymptote. Die
Grenze wird nie ganz erreicht. Liegt $N_0$ unter $S$, wächst der Bestand. Liegt $N_0$ über $S$, nimmt er ab und nähert
sich $S$ von oben. Ein Nichtbeispiel ist $N(t) = 100 + 20\,e^{0{,}1t}$. Wegen des positiven Exponenten wächst der Abstand
zu $100$ immer weiter, eine Grenze gibt es nicht.

:::beispiel[Ein Tee kühlt ab]
Ein Tee hat $95\,°\text{C}$, der Raum $22\,°\text{C}$. Die Temperatur nach $t$ Minuten ist
$$T(t) = 22 + 73\,e^{-0{,}05t} \qquad (T \text{ in } °\text{C}).$$
1. Deutung der Zahlen: $22$ ist die Grenze, also die Raumtemperatur. $73 = 95 - 22$ ist der anfängliche Unterschied
   zum Raum. $k = 0{,}05$ pro Minute gibt an, wie schnell der Unterschied schrumpft.
2. Nach $10$ Minuten: $T(10) = 22 + 73\,e^{-0{,}5} \approx 22 + 44{,}28 = 66{,}28\,°\text{C}$.
3. Wann hat der Tee $50\,°\text{C}$? $73\,e^{-0{,}05t} = 28$, also $e^{-0{,}05t} = \tfrac{28}{73}$ und
   $t = \tfrac{\ln(73/28)}{0{,}05} \approx 19{,}16$ Minuten.

Dieses Modell heißt in der Physik **newtonsches Abkühlungsgesetz**. Hier ist $S$ eine untere Grenze.
:::

:::beispiel[Ein neues Gerät verbreitet sich]
In einer Stadt gibt es $10\,000$ Haushalte. Ein neues Gerät wird ab $t = 0$ verkauft. Die Zahl der Haushalte mit Gerät
nach $t$ Monaten sei $N(t) = 10\,000\,(1 - e^{-0{,}3t})$. Hier ist $S = 10\,000$ und $N_0 = 0$.
1. Nach $3$ Monaten: $N(3) = 10\,000\,(1 - e^{-0{,}9}) \approx 5934$ Haushalte.
2. Wann haben $90\,\%$ das Gerät? Dann ist der freie Raum nur noch $10\,\%$: $e^{-0{,}3t} = 0{,}1$, also
   $t = \tfrac{\ln 10}{0{,}3} \approx 7{,}68$ Monate.
3. Der Zuwachs ist am Anfang am größten. Jeder Monat erreicht nur noch einen festen Anteil der übrigen Haushalte.
:::

:::achtung[Anfangswert und Grenze vertauscht]
Eine typische Fehlrechnung beim Tee: „$T(t) = 95 - 73\,e^{-0{,}05t}$.“ Probe bei $t = 0$: $95 - 73 = 22$. Der Tee wäre
dann am Anfang so kalt wie der Raum, und er würde sich auf $95\,°\text{C}$ erwärmen. **Richtig:** Außen steht die
**Grenze**, also $22$. Der Faktor vor $e^{-kt}$ ist der **Anfangsabstand** $N_0 - S$, hier $95 - 22 = 73$. Eine Probe
bei $t = 0$ muss den Anfangswert liefern.
:::

:::achtung[Die Grenze wird nie erreicht]
Eine typische Fehlrechnung: „Wann hat der Tee Raumtemperatur? $22 + 73\,e^{-0{,}05t} = 22$, also $e^{-0{,}05t} = 0$ und
$t = \tfrac{\ln 0}{-0{,}05}$.“ Den Logarithmus von $0$ gibt es nicht, denn $e^{-0{,}05t}$ ist nie null. **Richtig:** Die
Raumtemperatur wird im Modell nie genau erreicht. Sinnvoll ist die Frage „Wann liegt der Tee weniger als $1\,°\text{C}$
über der Raumtemperatur?“. Das führt auf $73\,e^{-0{,}05t} = 1$ und $t = \tfrac{\ln 73}{0{,}05} \approx 85{,}8$ Minuten.
:::

Wie beim Zerfall gibt es eine Halbwertszeit, und zwar für den **Abstand** zur Grenze. Er halbiert sich jeweils nach
$\tfrac{\ln 2}{k}$. Beim Tee sind das $\tfrac{\ln 2}{0{,}05} \approx 13{,}86$ Minuten. Nach dieser Zeit ist der Tee nur
noch $36{,}5\,°\text{C}$ wärmer als der Raum, hat also $58{,}5\,°\text{C}$.

```aufgabe
id: fu-beschr-check-widget
titel: Was passiert, wenn der Anfangswert über der Grenze liegt?
niveau: 1
art: check
angabe: |
  Im Widget nach dieser Frage siehst du $N(x) = S - (S - N_0)\,e^{-kx}$ mit $S = 100$. Sage zuerst vorher: Wie verläuft
  der Graph, wenn du $N_0 = 120$ einstellst?
teile:
  - typ: auswahl
    optionen:
      - 'Er fällt und nähert sich $100$ von oben.'
      - 'Er steigt immer weiter über $120$ hinaus.'
      - 'Er fällt unter $0$.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Der Abstand zur Grenze, hier $N_0 - S = 20$, wird mit $e^{-kx}$ immer kleiner. Also rückt $N$ an $100$ heran.'
      - wert: 2
        meldung: 'Der Abstand zur Grenze schrumpft gegen $0$. Der Graph kommt also bei $100$ an, nicht bei $0$.'
hinweise:
  - 'Bei $N_0 = 120$ ist $S - N_0 = -20$. Setze ein: $N(x) = 100 + 20\,e^{-kx}$.'
loesung: |
  Mit $N_0 = 120$ ist $N(x) = 100 - (-20)\,e^{-kx} = 100 + 20\,e^{-kx}$.
  ---
  Der Summand $20\,e^{-kx}$ ist positiv und schrumpft gegen $0$. Der Graph startet bei $120$, fällt und nähert sich $100$ von oben. So verhält sich ein heißes Getränk beim Abkühlen.
```

```widget
name: parameter
titel: Beschränktes Wachstum S − (S − N₀)·e^(−kx)
props:
  f: "S - (S - N0)*e^(-k*x)"
  parameter:
    - { name: S, min: 20, max: 120, step: 5, wert: 100 }
    - { name: N0, min: 0, max: 120, step: 5, wert: 10 }
    - { name: k, min: 0.05, max: 1, step: 0.05, wert: 0.2 }
  x: [0, 30]
  y: [0, 130]
```

**Arbeitsauftrag:** Prüfe zuerst deine Vorhersage mit $N_0 = 120$. Setze dann $N_0 = 10$ und vergleiche $k = 0{,}1$ mit
$k = 0{,}5$. Beschreibe, was $k$ am Graphen ändert und was es nicht ändert. Begründe mit dem Term, warum alle Graphen
derselben Geraden $y = S$ zustreben.

### Logistisches Wachstum (Vertiefung)

Beschränktes Wachstum passt gut zu Abkühlung und Sättigung. Für Populationen passt es weniger gut, denn eine kleine
Population wächst zuerst fast exponentiell. Erst wenn es eng wird, bremst das Wachstum. Das beschreibt das
**logistische Wachstum**. Der Zuwachs ist hier proportional zum Bestand **und** zum freien Raum. Der Graph ist S-förmig.

:::definition[Logistisches Wachstum]
Eine Größe wächst **logistisch**, wenn sie sich durch
$$N(t) = \frac{S}{1 + a\,e^{-kt}} \qquad\text{mit}\quad a = \frac{S}{N_0} - 1,\quad k > 0,$$
beschreiben lässt. Dabei ist $S$ die Sättigungsgrenze und $N_0 = N(0)$ der Anfangswert.
:::

Für $t = 0$ ist $N(0) = \tfrac{S}{1 + a} = N_0$, so ist $a$ gewählt. Für großes $t$ wird $a\,e^{-kt}$ sehr klein, und
$N(t)$ nähert sich $S$. Am schnellsten wächst der Bestand, wenn er die halbe Grenze $\tfrac S2$ erreicht. Dort hat der
S-förmige Graph seinen Wendepunkt.

:::beispiel[Eine Fischpopulation in einem Teich]
In einen Teich werden $50$ Fische gesetzt. Der Teich bietet Platz für etwa $1000$ Fische. Das Modell ist
$$N(t) = \frac{1000}{1 + 19\,e^{-0{,}4t}} \qquad (t \text{ in Monaten}).$$
1. Kontrolle des Anfangswerts: $a = \tfrac{1000}{50} - 1 = 19$, und $N(0) = \tfrac{1000}{20} = 50$.
2. Nach $5$ Monaten: $N(5) = \tfrac{1000}{1 + 19\,e^{-2}} \approx \tfrac{1000}{3{,}571} \approx 280$ Fische.
3. Wann ist die halbe Grenze erreicht? $1 + 19\,e^{-0{,}4t} = 2$, also $e^{-0{,}4t} = \tfrac{1}{19}$ und
   $t = \tfrac{\ln 19}{0{,}4} \approx 7{,}36$ Monate. Bis dahin wächst die Population immer schneller, danach immer langsamer.
:::

```plot
x: [0, 30]
y: [0, 130]
achsen: { x: "t", y: "N(t)" }
graphen:
  - { f: "10*e^(0.2*x)", label: "exponentiell", farbe: 1 }
  - { f: "100 - 90*e^(-0.2*x)", label: "beschränkt", farbe: 0 }
  - { f: "100/(1 + 9*e^(-0.3*x))", label: "logistisch", farbe: 2 }
  - { f: "100", label: "S = 100", farbe: 3, gestrichelt: true }
beschriftung: Drei Wachstumsmodelle mit dem Anfangswert 10. Das exponentielle Modell wächst unbegrenzt. Das beschränkte nähert sich S = 100 von Anfang an immer langsamer. Das logistische wächst zuerst fast exponentiell und biegt dann S-förmig zur Grenze ab.
```

:::merke[Welches Modell passt?]
Entscheidend ist, wovon der Zuwachs pro Zeitschritt abhängt.
1. **Gleicher Betrag** pro Zeitschritt: linear, $N(t) = N_0 + k\,t$.
2. **Gleicher Prozentsatz** des Bestands: exponentiell, $N(t) = N_0\,q^t$ oder $N_0\,e^{\lambda t}$.
3. Zuwachs **proportional zum freien Raum** $S - N$: beschränkt, $N(t) = S - (S - N_0)\,e^{-kt}$.
4. Zuwachs proportional zu **Bestand und freiem Raum**: logistisch, $N(t) = \tfrac{S}{1 + a\,e^{-kt}}$.
:::

```reflexion
frage: Warum kann ein exponentielles Wachstumsmodell eine echte Population nie für alle Zeiten richtig beschreiben? Welche Eigenschaft der Exponentialfunktion ist das Problem?
antwort: |
  Eine Exponentialfunktion mit $q > 1$ wächst über alle Grenzen. Sie ist nach oben nicht beschränkt. Jede echte Population
  lebt aber in einer begrenzten Umgebung mit begrenzter Nahrung und begrenztem Platz. Irgendwann würde das Modell mehr
  Tiere vorhersagen, als überhaupt Platz haben. Darum gilt ein exponentielles Modell nur für einen begrenzten Zeitraum, meist
  am Anfang. Modelle mit einer Sättigungsgrenze $S$, also beschränktes oder logistisches Wachstum, bauen diese Grenze ein.
```

```aufgabe
id: fu-beschraenkt-ablesen
titel: Parameter eines beschränkten Modells
niveau: 1
lernziel: 8
kompetenz: verstehen
angabe: |
  Ein Bestand entwickelt sich nach $N(t) = 500 - 400\,e^{-0{,}2t}$ mit $t$ in Jahren. Bestimme den Anfangswert und die
  Sättigungsgrenze.
teile:
  - typ: zahl
    label: 'Anfangswert $N(0)$'
    loesung: "500 - 400"
    anzeige: '100'
    fehler:
      - wert: "400"
        meldung: '$400$ ist der Anfangs**abstand** zur Grenze. Der Anfangswert ist $N(0) = 500 - 400\cdot 1$.'
      - wert: "500"
        meldung: 'Bei $t = 0$ ist $e^0 = 1$, nicht $0$. Also $N(0) = 500 - 400$.'
  - typ: zahl
    label: 'Sättigungsgrenze $S$'
    loesung: "500"
    fehler:
      - wert: "100"
        meldung: 'Das ist der Anfangswert. Die Grenze ist der Wert für $t \to \infty$, wenn $e^{-0{,}2t}$ gegen $0$ geht.'
hinweise:
  - 'Setze $t = 0$ ein. Für die Grenze überlege, wohin $e^{-0{,}2t}$ für große $t$ geht.'
loesung: |
  **Ansatz:** Vergleich mit $N(t) = S - (S - N_0)\,e^{-kt}$. $N(0) = 500 - 400\cdot e^0 = 100$.
  ---
  Für $t \to \infty$ geht $e^{-0{,}2t} \to 0$, also $N(t) \to 500$. Die Grenze ist $S = 500$. Kontrolle: $S - N_0 = 400$ ist genau der Faktor vor $e^{-0{,}2t}$.
```

```aufgabe
id: fu-modell-zuordnen
titel: Welches Modell passt?
niveau: 1
lernziel: 8
kompetenz: modellieren
angabe: |
  Ordne jeder Beschreibung das passende Modell zu. Gerechnet wird nichts.

  (1) Ein Sparschwein bekommt jede Woche $5$ Euro dazu.

  (2) Ein Kapital wird jedes Jahr mit $3\,\%$ verzinst.

  (3) Eine kalte Limonade erwärmt sich im Garten auf Lufttemperatur.
teile:
  - typ: auswahl
    label: '(1)'
    optionen: ['linear', 'exponentiell', 'beschränkt']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Pro Woche kommt ein fester **Betrag** dazu, kein fester Prozentsatz.'
      - wert: 2
        meldung: 'Es gibt keine Grenze, die das Sparschwein nicht überschreiten kann.'
  - typ: auswahl
    label: '(2)'
    optionen: ['linear', 'exponentiell', 'beschränkt']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Die Zinsen werden vom jeweils aktuellen Kapital berechnet. Der Betrag wächst also mit, der Prozentsatz bleibt gleich.'
      - wert: 2
        meldung: 'Beim Zinseszins gibt es keine Obergrenze.'
  - typ: auswahl
    label: '(3)'
    optionen: ['linear', 'exponentiell', 'beschränkt']
    richtig: [2]
    fehler:
      - wert: 1
        meldung: 'Die Limonade wird nicht beliebig warm. Sie nähert sich der Lufttemperatur als Grenze.'
      - wert: 0
        meldung: 'Je näher die Limonade der Lufttemperatur kommt, desto langsamer erwärmt sie sich. Der Zuwachs ist nicht gleich.'
hinweise:
  - 'Frage: Kommt pro Zeitschritt ein fester Betrag, ein fester Prozentsatz oder ein fester Anteil des Abstands zu einer Grenze dazu?'
loesung: |
  **Ansatz:** Das Modell richtet sich danach, wovon der Zuwachs abhängt.
  (1) Fester Betrag pro Woche: linear. (2) Fester Prozentsatz des aktuellen Kapitals: exponentiell.
  ---
  (3) Die Erwärmung hängt vom Abstand zur Lufttemperatur ab und wird immer langsamer: beschränktes Wachstum mit der Lufttemperatur als Grenze.
```

```aufgabe
id: fu-abkuehlung
titel: Abkühlung eines Kaffees
niveau: 2
lernziel: 8
kompetenz: anwenden
angabe: |
  Die Temperatur eines Kaffees ist $T(t) = 20 + 70\,e^{-0{,}08t}$, $T$ in °C, $t$ in Minuten.

  a) Welche Anfangstemperatur hat der Kaffee, welche Raumtemperatur liegt vor?

  b) Nach welcher Zeit hat der Kaffee $50\,°\text{C}$? Runde auf zwei Nachkommastellen.

  c) Nach welcher Zeit hat sich der Temperaturunterschied zum Raum halbiert? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    label: 'a) Anfangstemperatur'
    einheit: '°C'
    loesung: "20 + 70"
    anzeige: '90'
    fehler:
      - wert: "70"
        meldung: '$70$ ist der Anfangsunterschied zum Raum. Die Anfangstemperatur ist $T(0) = 20 + 70$.'
  - typ: zahl
    label: 'a) Raumtemperatur'
    einheit: '°C'
    loesung: "20"
    fehler:
      - wert: "0"
        meldung: 'Für großes $t$ geht nur der Summand $70\,e^{-0{,}08t}$ gegen $0$. Die $20$ bleibt.'
  - typ: zahl
    label: 'b) Zeit bis 50 °C'
    einheit: min
    loesung: "ln(70/30)/0.08"
    toleranz: 0.01
    anzeige: '10{,}59'
    fehler:
      - wert: "ln(50/70)/(-0.08)"
        meldung: 'Zuerst die $20$ abziehen: $70\,e^{-0{,}08t} = 30$, nicht $50$.'
  - typ: zahl
    label: 'c) Halbierungszeit des Unterschieds'
    einheit: min
    loesung: "ln(2)/0.08"
    toleranz: 0.01
    anzeige: '8{,}66'
    fehler:
      - wert: "ln(25/70)/(-0.08)"
        meldung: 'Du hast ausgerechnet, wann die Temperatur von $90\,°\text{C}$ auf $45\,°\text{C}$ gefallen ist. Gefragt ist die Halbierung des **Unterschieds** zum Raum, also von $70\,°\text{C}$ auf $35\,°\text{C}$. Der Unterschied ist $70\,e^{-0{,}08t}$.'
hinweise:
  - 'Die Raumtemperatur ist der Grenzwert für $t \to \infty$.'
  - 'Für b) zuerst $20$ abziehen und durch $70$ teilen. Für c) ist der Unterschied $70\,e^{-0{,}08t}$, eine exponentielle Abnahme.'
plot:
  x: [0, 40]
  y: [0, 100]
  achsen: { x: "t in min", y: "T in °C" }
  graphen:
    - { f: "20 + 70*e^(-0.08*x)" }
    - { f: "20", gestrichelt: true }
loesung: |
  **Ansatz:** Beschränktes Modell mit der Grenze $20\,°$C und dem Anfangsunterschied $70\,°$C.
  a) $T(0) = 20 + 70 = 90\,°$C. Für $t \to \infty$ geht $e^{-0{,}08t} \to 0$, also $T \to 20\,°$C: Raumtemperatur.
  ---
  b) $70\,e^{-0{,}08t} = 30$, also $e^{-0{,}08t} = \tfrac37$ und $-0{,}08t = \ln\tfrac37$. Damit $t = \dfrac{\ln(7/3)}{0{,}08} \approx 10{,}59$ min.
  ---
  c) Der Unterschied $70\,e^{-0{,}08t}$ hat die Halbwertszeit $\dfrac{\ln 2}{0{,}08} \approx 8{,}66$ min.
  ---
  Probe: Nach $8{,}66$ min ist der Unterschied $35\,°$C, die Temperatur also $55\,°$C. Das passt dazu, dass $50\,°$C erst nach $10{,}59$ min erreicht wird.
gefuehrt:
  - text: 'Wie groß ist der Temperaturunterschied zum Raum am Anfang?'
    teil: { typ: zahl, loesung: "70" }
    erklaerung: 'Bei $t = 0$ ist $T = 90\,°$C, der Raum hat $20\,°$C. Der Unterschied ist $70\,°$C, der Faktor vor $e^{-0{,}08t}$.'
  - text: 'Für b): Wie groß muss der Unterschied sein, wenn der Kaffee $50\,°\text{C}$ hat?'
    teil: { typ: zahl, loesung: "30", fehler: [ { wert: "50", meldung: 'Gefragt ist der Unterschied zum Raum: $50 - 20$.' } ] }
    erklaerung: '$50 - 20 = 30$. Also $70\,e^{-0{,}08t} = 30$.'
  - text: 'Löse $e^{-0{,}08t} = \tfrac37$ nach $t$. Runde auf zwei Nachkommastellen.'
    teil: { typ: zahl, loesung: "ln(7/3)/0.08", toleranz: 0.01 }
    erklaerung: '$-0{,}08t = \ln\tfrac37$, also $t = \tfrac{\ln(7/3)}{0{,}08} \approx 10{,}59$ min.'
```

```aufgabe
id: fu-akku-laden
titel: Einen Akku laden
niveau: 3
lernziel: 8
kompetenz: modellieren
angabe: |
  Ein Handyakku wird geladen. Sein Ladestand in Prozent nach $t$ Minuten wird durch
  $$L(t) = 100 - 80\,e^{-kt}$$
  beschrieben. Nach $30$ Minuten zeigt er $60\,\%$.

  a) Welchen Ladestand hatte der Akku zu Beginn?

  b) Bestimme $k$ auf vier Nachkommastellen.

  c) Nach wie vielen Minuten zeigt er $90\,\%$?
teile:
  - typ: zahl
    label: 'a) Anfangsstand'
    einheit: '%'
    loesung: "100 - 80"
    anzeige: '20'
    fehler:
      - wert: "80"
        meldung: '$80$ ist der Abstand zur Grenze $100$. Der Anfangswert ist $L(0) = 100 - 80$.'
  - typ: zahl
    label: 'b) $k$'
    loesung: "ln(2)/30"
    toleranz: 0.0001
    anzeige: '\tfrac{\ln 2}{30} \approx 0{,}0231'
    fehler:
      - wert: "ln(60/100)/(-30)"
        meldung: 'Der Ansatz lautet $100 - 80\,e^{-30k} = 60$, also $80\,e^{-30k} = 40$. Rechne mit dem Abstand zur Grenze.'
  - typ: zahl
    label: 'c) Zeit bis 90 %'
    einheit: min
    loesung: "90"
    fehler:
      - wert: "45"
        meldung: 'Von $60\,\%$ auf $90\,\%$ geht es nicht im gleichen Tempo weiter. Der Abstand zur Grenze halbiert sich alle $30$ Minuten: $80$, $40$, $20$, $10$.'
hinweise:
  - 'Setze $L(30) = 60$ ein: $80\,e^{-30k} = 40$.'
  - 'Der Abstand zur Grenze halbiert sich in $30$ Minuten. Wie oft muss sich $80$ halbieren, bis $10$ übrig ist?'
loesung: |
  **Ansatz:** Beschränktes Wachstum mit der Grenze $100\,\%$. Der Abstand zur Grenze ist $80\,e^{-kt}$.
  a) $L(0) = 100 - 80 = 20\,\%$.
  ---
  b) $100 - 80\,e^{-30k} = 60$ heißt $e^{-30k} = \tfrac12$. Also $k = \dfrac{\ln 2}{30} \approx 0{,}0231$ pro Minute.
  ---
  c) $90\,\%$ heißt Abstand $10$. Aus $80\,e^{-kt} = 10$ folgt $e^{-kt} = \tfrac18 = \left(\tfrac12\right)^3$. Das sind drei Halbierungen zu je $30$ Minuten.
  ---
  **Antwort:** Nach $90$ Minuten zeigt der Akku $90\,\%$. Probe: $100 - 80\cdot\tfrac18 = 90$.
```

```aufgabe
id: fu-logistisch
titel: Ein logistisches Modell auswerten
niveau: 2
lernziel: 8
kompetenz: anwenden
angabe: |
  Die Zahl der Nutzerinnen und Nutzer einer neuen App in einer Kleinstadt wird durch
  $$N(t) = \frac{2000}{1 + 39\,e^{-0{,}5t}}$$
  beschrieben, $t$ in Wochen.

  a) Wie viele Nutzer hat die App zu Beginn?

  b) Welche Sättigungsgrenze sagt das Modell voraus?

  c) Wann ist die Hälfte der Grenze erreicht? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    label: 'a) $N(0)$'
    loesung: "2000/40"
    anzeige: '50'
    fehler:
      - wert: "2000/39"
        meldung: 'Bei $t = 0$ ist $e^0 = 1$. Im Nenner steht dann $1 + 39 = 40$.'
  - typ: zahl
    label: 'b) Grenze'
    loesung: "2000"
    fehler:
      - wert: "2000/39"
        meldung: 'Für große $t$ wird $39\,e^{-0{,}5t}$ sehr klein. Der Nenner nähert sich $1$.'
  - typ: zahl
    label: 'c) Zeitpunkt'
    einheit: Wochen
    loesung: "ln(39)/0.5"
    toleranz: 0.01
    anzeige: '7{,}33'
    fehler:
      - wert: "ln(19.5)/0.5"
        meldung: 'Aus $\tfrac{2000}{1 + 39\,e^{-0{,}5t}} = 1000$ folgt $1 + 39\,e^{-0{,}5t} = 2$, also $39\,e^{-0{,}5t} = 1$.'
hinweise:
  - 'Für a) $t = 0$ einsetzen. Für b) überlege, wohin der Nenner für große $t$ geht.'
  - 'Für c) setze $N(t) = 1000$. Dann muss der Nenner $2$ sein.'
loesung: |
  **Ansatz:** Logistisches Modell $\tfrac{S}{1 + a\,e^{-kt}}$ mit $S = 2000$, $a = 39$, $k = 0{,}5$.
  a) $N(0) = \tfrac{2000}{1 + 39} = 50$ Nutzer.
  ---
  b) Für $t \to \infty$ geht $39\,e^{-0{,}5t} \to 0$, der Nenner gegen $1$. Die Grenze ist $2000$.
  ---
  c) $N(t) = 1000$ heißt $1 + 39\,e^{-0{,}5t} = 2$, also $e^{-0{,}5t} = \tfrac{1}{39}$ und $t = \dfrac{\ln 39}{0{,}5} \approx 7{,}33$ Wochen.
  ---
  **Deutung:** Bis etwa zur siebten Woche wächst die Zahl der Nutzer immer schneller, danach immer langsamer. Probe: $N(7{,}33) = \tfrac{2000}{1 + 39\,e^{-3{,}665}} \approx \tfrac{2000}{2{,}00} = 1000$.
```

```aufgabe
id: fu-modell-messdaten
titel: Ein Modell aus Messdaten wählen
niveau: 3
lernziel: 8
kompetenz: modellieren
angabe: |
  Eine Biologin zählt jeden Monat die Kaninchen auf einer Insel:

  |$t$ in Monaten|$0$|$1$|$2$|$3$|$4$|$5$|$6$|
  |---|---|---|---|---|---|---|---|
  |Anzahl|$100$|$180$|$310$|$480$|$640$|$760$|$830$|

  a) Berechne die Zunahme in jedem Monat. In welchem Monat ist sie am größten? Gib das Ende des Monats als $t$ an.

  b) Welches Modell passt am besten?

  c) Begründe deine Wahl mit den Zunahmen.
teile:
  - typ: zahl
    label: 'a) größte Zunahme bis $t =$'
    loesung: "3"
    fehler:
      - wert: "6"
        meldung: 'Die Zahlen selbst sind bei $t = 6$ am größten. Gefragt ist die größte **Zunahme**: $80, 130, 170, 160, 120, 70$.'
      - wert: "4"
        meldung: 'Von $3$ nach $4$ kommen $640 - 480 = 160$ dazu. Von $2$ nach $3$ sind es aber $480 - 310 = 170$.'
  - typ: auswahl
    label: 'b)'
    optionen: ['linear', 'exponentiell', 'beschränkt', 'logistisch']
    richtig: [3]
    fehler:
      - wert: 1
        meldung: 'Exponentiell würde der Zuwachs immer größer. Hier wird er nach einiger Zeit wieder kleiner.'
      - wert: 2
        meldung: 'Beim beschränkten Wachstum ist der Zuwachs von Anfang an am größten. Hier wächst er zuerst.'
      - wert: 0
        meldung: 'Linear wären alle Zunahmen gleich groß.'
  - typ: text
    label: 'c)'
    muster: |
      Die Zunahmen sind $80, 130, 170, 160, 120, 70$. Sie wachsen zuerst und werden dann wieder kleiner. Das passt zum
      S-förmigen logistischen Wachstum: anfangs fast exponentiell, später gebremst durch eine Obergrenze. Die stärkste
      Zunahme liegt zwischen $t = 2$ und $t = 3$, bei etwa der Hälfte der späteren Grenze.
hinweise:
  - 'Bilde die Differenzen aufeinanderfolgender Werte.'
  - 'Vergleiche mit den vier Modellen: Wie verhalten sich die Zunahmen jeweils im Lauf der Zeit?'
loesung: |
  **Ansatz:** Das Modell erkennt man am Verlauf der Zunahmen pro Monat.
  ---
  a) Zunahmen: $180 - 100 = 80$, $130$, $170$, $160$, $120$, $70$. Die größte Zunahme ist $170$, im Monat von $t = 2$ bis $t = 3$.
  ---
  b) Die Zunahmen wachsen zuerst und nehmen dann ab. Linear (konstant), exponentiell (immer größer) und beschränkt (immer kleiner) passen nicht.
  ---
  **Antwort:** Logistisches Wachstum passt am besten. Die Grenze liegt vermutlich knapp unter $1000$ Kaninchen, denn die Zunahmen werden schnell kleiner.
```

## Funktionen mit mehreren Variablen (Vertiefung)

```aufgabe
id: fu-mehr-check-formel
titel: Eine Formel mit zwei Größen auswerten
niveau: 1
art: check
angabe: |
  Das Volumen eines Zylinders ist $V = \pi r^2 h$. Berechne $V$ für $r = 3$ cm und $h = 10$ cm. Runde auf eine
  Nachkommastelle.
  Herkunft: [2.12 Formeln umstellen](/lernen/mathe3/gleichungen/formeln-umstellen).
teile:
  - typ: zahl
    label: '$V$'
    einheit: 'cm³'
    loesung: "pi*3^2*10"
    toleranz: 0.1
    anzeige: '90\pi \approx 282{,}7'
    fehler:
      - wert: "pi*6*10"
        meldung: 'Das Quadrat gilt für den Radius: $r^2 = 3^2 = 9$, nicht $2\cdot 3$.'
      - wert: "(pi*3)^2*10"
        meldung: 'Nur $r$ wird quadriert, nicht $\pi$. Potenz geht vor Punkt.'
hinweise:
  - 'Zuerst $r^2 = 9$, dann mit $\pi$ und $h$ multiplizieren.'
loesung: |
  Wir setzen ein: $V = \pi\cdot 3^2\cdot 10 = 90\pi$.
  ---
  $90\pi \approx 282{,}7$ cm³. Das Ergebnis hängt von **zwei** Eingaben ab, nämlich von $r$ und von $h$.
```

Bisher hatte jede Funktion genau eine Eingabe. Viele Formeln aus Physik, Geometrie und Wirtschaft haben aber
**mehrere** Eingaben. Das Volumen eines Zylinders hängt vom Radius **und** von der Höhe ab. Die Fahrzeit hängt vom Weg
**und** von der Geschwindigkeit ab. Solche Formeln sind Funktionen mehrerer Variablen. Im SBP-Stoff stehen sie nicht
ausdrücklich, im Schullehrplan aber schon. Für die Prüfung ist vor allem eine Fähigkeit wichtig: vorhersagen, wie sich
das Ergebnis ändert, wenn man eine Eingabe verändert.

### Formeln als Funktionen

:::definition[Funktion zweier Variablen]
Eine **Funktion zweier Variablen** $f$ ordnet jedem erlaubten Zahlenpaar $(x, y)$ **genau einen** Wert $f(x, y)$ zu.
Die Menge der erlaubten Paare ist die Definitionsmenge $D$. Man schreibt $f\colon D \to \R$ mit $D \subseteq \R^2$.
Dabei ist $\R^2$ die Menge aller Zahlenpaare.
:::

Das ist dieselbe Idee wie bisher, nur ist die Eingabe jetzt ein Paar. Beispiele sind der Flächeninhalt eines Rechtecks
$A(a, b) = a\cdot b$ und das Zylindervolumen $V(r, h) = \pi r^2 h$. Für drei Eingaben gilt dasselbe, etwa bei
$V(a, b, c) = a\,b\,c$ für einen Quader. **Keine** Funktion ist die Vorschrift „jedem Paar $(x, y)$ wird eine Zahl $z$ mit
$z^2 = x + y$ zugeordnet“. Für $(1, 3)$ passen $z = 2$ und $z = -2$. Eine Eingabe hätte zwei Ausgaben.

:::beispiel[Den Body-Mass-Index als Funktion lesen]
Der Body-Mass-Index ist $B(m, l) = \dfrac{m}{l^2}$. Dabei ist $m$ die Masse in kg und $l$ die Körpergröße in m.
1. Für $m = 70$ kg und $l = 1{,}75$ m ist $B = \tfrac{70}{3{,}0625} \approx 22{,}9$.
2. Die Definitionsmenge im Sachzusammenhang: Beide Größen müssen positiv sein, also $m > 0$ und $l > 0$.
3. $B$ hängt von beiden Eingaben ab, aber auf verschiedene Weise. Steigt $m$, steigt $B$. Steigt $l$, sinkt $B$, und
   zwar wegen des Quadrats besonders deutlich.
:::

### Eine Variable festhalten

Die wichtigste Technik: Man hält alle Eingaben bis auf eine fest. Dann bleibt eine gewöhnliche Funktion **einer**
Variablen übrig, und alles aus diesem Kapitel ist wieder anwendbar.

:::beispiel[Das Zylindervolumen bei fester Höhe und bei festem Radius]
$V(r, h) = \pi r^2 h$.
1. **Höhe fest**, etwa $h = 10$ cm: $V = 10\pi\,r^2$. Das ist eine quadratische Funktion von $r$. Verdoppelt man $r$,
   wird das Volumen vervierfacht, denn $(2r)^2 = 4r^2$.
2. **Radius fest**, etwa $r = 3$ cm: $V = 9\pi\,h$. Das ist eine lineare Funktion von $h$ ohne Achsenabschnitt.
   Verdoppelt man $h$, verdoppelt sich das Volumen.
3. Beides zusammen: Verdoppelt man $r$ **und** $h$, wird $V$ mit $4\cdot 2 = 8$ multipliziert.
:::

So kann man Abhängigkeiten in Worten beschreiben. Eine Größe ist **direkt proportional** zu einer Eingabe, wenn sie
sich mit ihr im gleichen Verhältnis ändert, also doppelt so groß bei doppelter Eingabe. Sie ist **indirekt proportional**,
wenn sie im umgekehrten Verhältnis ändert, also halb so groß bei doppelter Eingabe. Bei der Fahrzeit $t = \tfrac sv$ ist
$t$ direkt proportional zum Weg $s$ und indirekt proportional zur Geschwindigkeit $v$.

:::achtung[Doppelter Radius heißt nicht doppeltes Volumen]
Eine typische Fehlüberlegung: „Ein Topf mit doppeltem Radius fasst doppelt so viel.“ Rechne nach mit $h = 10$ cm: Bei
$r = 5$ cm ist $V = 250\pi \approx 785$ cm³. Bei $r = 10$ cm ist $V = 1000\pi \approx 3142$ cm³. Das ist das
**Vierfache**. **Richtig:** Steht eine Variable im Quadrat, bewirkt der Faktor $2$ bei ihr den Faktor $2^2 = 4$ im
Ergebnis. Der Faktor, mit dem sich das Ergebnis ändert, hängt von der Hochzahl der Variablen ab.
:::

:::achtung[Prozente bei indirekter Proportionalität]
Eine typische Fehlrechnung bei $t = \tfrac sv$: „Wenn $v$ um $20\,\%$ steigt, sinkt $t$ um $20\,\%$.“ Prüfe mit
$s = 120$ km und $v = 100$ km/h: Vorher ist $t = 1{,}2$ h. Mit $v = 120$ km/h ist $t = 1$ h. Das ist eine Abnahme um
$\tfrac{0{,}2}{1{,}2} \approx 16{,}7\,\%$. **Richtig:** Der neue Wert ist $\tfrac{1}{1{,}2} \approx 0{,}833$-mal der alte.
Bei indirekter Proportionalität wird durch den Faktor **dividiert**, und das ergibt eine andere Prozentzahl.
:::

### Höhenlinien

Eine Funktion zweier Variablen kann man in der Ebene zeichnen, indem man alle Paare $(x, y)$ mit demselben Wert
verbindet. Diese Kurven heißen **Höhenlinien**. Man kennt sie von Wanderkarten: Jede Linie verbindet Punkte gleicher
Seehöhe. Auf Wetterkarten verbinden Isobaren Orte mit gleichem Luftdruck.

:::beispiel[Rechtecke mit gleichem Flächeninhalt]
Für $A(a, b) = a\cdot b$ ist die Höhenlinie zum Wert $12$ die Menge aller Paare mit $a\,b = 12$. Umgestellt nach $b$:
$b = \tfrac{12}{a}$ mit $a > 0$. Das ist eine Potenzfunktion mit der Hochzahl $-1$. Ihr Graph ist ein Hyperbelast. Zu
$a = 3$ cm gehört $b = 4$ cm, zu $a = 6$ cm gehört $b = 2$ cm. Doppelte Länge heißt halbe Breite, wenn die Fläche gleich
bleiben soll.
:::

```plot
x: [0, 10]
y: [0, 10]
gleich: true
achsen: { x: "a", y: "b" }
graphen:
  - { f: "6/x", label: "A = 6", farbe: 0, von: 0.6, bis: 10 }
  - { f: "12/x", label: "A = 12", farbe: 1, von: 1.2, bis: 10 }
  - { f: "24/x", label: "A = 24", farbe: 2, von: 2.4, bis: 10 }
punkte:
  - { x: 3, y: 4, label: "(3 | 4)", farbe: 1 }
  - { x: 6, y: 2, label: "(6 | 2)", farbe: 1 }
beschriftung: Höhenlinien der Funktion A(a, b) = a·b für die Werte 6, 12 und 24. Jede Kurve verbindet alle Rechtecke mit demselben Flächeninhalt. Je weiter außen die Kurve liegt, desto größer ist die Fläche.
```

:::merke[Wie wirkt eine Änderung auf das Ergebnis?]
1. Alle anderen Eingaben festhalten.
2. Die veränderte Eingabe durch das Vielfache ersetzen, zum Beispiel $x \to 2x$.
3. Den neuen Wert durch den alten dividieren. Der Quotient ist der Faktor, mit dem sich das Ergebnis ändert.
4. Kontrolle mit konkreten Zahlen.
:::

```reflexion
frage: Bei der Formel $E = \tfrac12 m v^2$ für die Bewegungsenergie verdoppelt man einmal die Masse und einmal die Geschwindigkeit. Was ändert sich jeweils, und warum ist es nicht dasselbe?
antwort: |
  Verdoppelt man $m$ und hält $v$ fest, wird $E$ verdoppelt, denn $m$ steht ohne Hochzahl: $\tfrac12 (2m) v^2 = 2E$.
  Verdoppelt man $v$ und hält $m$ fest, wird $E$ vervierfacht, denn $v$ steht im Quadrat: $\tfrac12 m (2v)^2 = 4E$.
  Die Hochzahl der Variablen bestimmt den Faktor. Deshalb ist eine höhere Geschwindigkeit beim Bremsen so viel
  gefährlicher als eine größere Masse.
```

```aufgabe
id: fu-mehrvar-einsetzen
titel: Den Body-Mass-Index berechnen
niveau: 1
lernziel: 9
kompetenz: rechnen
angabe: |
  Berechne $B(m, l) = \dfrac{m}{l^2}$ für $m = 72$ kg und $l = 1{,}80$ m. Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    label: '$B$'
    loesung: "72/1.8^2"
    toleranz: 0.05
    anzeige: '22{,}2'
    fehler:
      - wert: "72/1.8"
        meldung: 'Die Größe steht im Quadrat: $1{,}80^2 = 3{,}24$.'
      - wert: "(72/1.8)^2"
        meldung: 'Nur die Größe wird quadriert, nicht der ganze Bruch.'
hinweise:
  - 'Zuerst $l^2 = 1{,}8^2 = 3{,}24$, dann $72$ durch $3{,}24$ teilen.'
loesung: |
  **Ansatz:** Beide Eingaben einsetzen. Zuerst $l^2 = 1{,}8^2 = 3{,}24$.
  ---
  $B = \tfrac{72}{3{,}24} \approx 22{,}2$. Der Wert hat die Einheit kg/m².
```

```aufgabe
id: fu-mehrvar-proportional
titel: Was passiert beim Verdoppeln?
niveau: 1
lernziel: 9
kompetenz: verstehen
angabe: |
  Für die Leistung eines Windrads gilt näherungsweise $P = \tfrac12\,\rho\,A\,v^3$. Dabei ist $\rho$ (lies „rho“) die
  Dichte der Luft, $A$ die Fläche, die der Rotor überstreicht, und $v$ die Windgeschwindigkeit. Mit welchem Faktor
  ändert sich $P$, wenn man

  a) nur die Fläche $A$ verdoppelt,

  b) nur die Windgeschwindigkeit $v$ verdoppelt?
teile:
  - typ: zahl
    label: 'a) Faktor'
    loesung: "2"
    fehler:
      - wert: "4"
        meldung: 'Die Fläche steht ohne Hochzahl. Doppelte Fläche heißt doppelte Leistung.'
  - typ: zahl
    label: 'b) Faktor'
    loesung: "2^3"
    anzeige: '8'
    fehler:
      - wert: "2"
        meldung: 'Die Geschwindigkeit steht hoch $3$: $(2v)^3 = 2^3 v^3 = 8v^3$.'
      - wert: "6"
        meldung: 'Eine Hochzahl ist kein Faktor. $(2v)^3 = 2\cdot 2\cdot 2\cdot v^3$, also $2^3 = 8$ und nicht $2\cdot 3$.'
hinweise:
  - 'Ersetze $A$ durch $2A$ beziehungsweise $v$ durch $2v$ und vergleiche mit der alten Leistung.'
loesung: |
  **Ansatz:** Die veränderte Größe durch das Doppelte ersetzen und durch die alte Leistung dividieren. Alle anderen Größen bleiben fest.
  a) $\tfrac12\,\rho\,(2A)\,v^3 = 2\cdot\tfrac12\,\rho\,A\,v^3$. Faktor $2$.
  ---
  b) $\tfrac12\,\rho\,A\,(2v)^3 = 8\cdot\tfrac12\,\rho\,A\,v^3$. Faktor $8$. Probe mit Zahlen: $1^3 = 1$ und $2^3 = 8$.
  Darum baut man Windräder dort, wo der Wind kräftig weht: Schon etwas mehr Wind bringt deutlich mehr Leistung.
```

```aufgabe
id: fu-mehrvar-schnitt
titel: Eine Variable festhalten
niveau: 2
lernziel: 9
kompetenz: rechnen
angabe: |
  Gegeben ist $f(x, y) = x^2 y - 3y$.

  a) Halte $y = 2$ fest. Gib $f(x, 2)$ als Term in $x$ an.

  b) Bestimme die Nullstellen dieser Funktion von $x$.

  c) Für welche Paare $(x, y)$ mit $y \ne 0$ ist $f(x, y) = 0$? Gib die Werte von $x$ an.
teile:
  - typ: term
    label: 'a) $f(x, 2)$'
    loesung: "2x^2 - 6"
    fehler:
      - wert: "x^2*2 - 3"
        meldung: 'Auch im zweiten Summanden steht $y$: $-3\cdot 2 = -6$.'
  - typ: menge
    label: 'b) Nullstellen'
    loesung: ["-sqrt(3)", "sqrt(3)"]
    fehler:
      - wert: ["sqrt(3)"]
        meldung: 'Aus $x^2 = 3$ folgen zwei Lösungen.'
      - wert: ["-3", "3"]
        meldung: 'Aus $2x^2 = 6$ folgt $x^2 = 3$, also $x = \pm\sqrt3$.'
  - typ: menge
    label: 'c) $x$-Werte'
    loesung: ["-sqrt(3)", "sqrt(3)"]
    fehler:
      - wert: ["0"]
        meldung: 'Hebe $y$ heraus: $f(x, y) = y(x^2 - 3)$. Für $y \ne 0$ muss die Klammer null sein.'
hinweise:
  - 'Setze $y = 2$ überall ein, wo $y$ steht.'
  - 'Für c) hebe $y$ heraus: $f(x, y) = y\,(x^2 - 3)$.'
loesung: |
  **Ansatz:** Mit einer festen Eingabe wird $f$ zu einer gewöhnlichen Funktion von $x$.
  a) $f(x, 2) = 2x^2 - 6$.
  ---
  b) $2x^2 - 6 = 0$ heißt $x^2 = 3$, also $x = \pm\sqrt3 \approx \pm 1{,}732$.
  ---
  c) $f(x, y) = y\,(x^2 - 3)$. Für $y \ne 0$ ist das genau dann null, wenn $x^2 = 3$ ist. Also für $x = \pm\sqrt3$ und jedes $y \ne 0$.
  Die Nullstellen hängen also gar nicht vom festen Wert $y$ ab.
```

```aufgabe
id: fu-mehrvar-hoehenlinie
titel: Rechtecke mit gleicher Fläche
niveau: 1
lernziel: 9
kompetenz: verstehen
angabe: |
  Alle Rechtecke mit dem Flächeninhalt $18$ cm² bilden eine Höhenlinie von $A(a, b) = a\cdot b$.

  a) Gib $b$ als Funktion von $a$ an.

  b) Berechne $b$ für $a = 4$ cm.

  c) Welcher Funktionstyp ist $b(a)$?
teile:
  - typ: term
    label: 'a) $b(a)$'
    variable: a
    loesung: "18/a"
    bereich: [1, 6]
    fehler:
      - wert: "18 - a"
        meldung: 'Fest ist das **Produkt** $a\cdot b = 18$, nicht die Summe. Also wird dividiert.'
  - typ: zahl
    label: 'b) $b(4)$'
    einheit: cm
    loesung: "18/4"
    anzeige: '4{,}5'
    fehler:
      - wert: "14"
        meldung: 'Das wäre $18 - 4$. Fest ist das Produkt: $4\cdot b = 18$.'
  - typ: auswahl
    label: 'c)'
    optionen: ['linear', 'Potenzfunktion mit Hochzahl $-1$, indirekt proportional', 'exponentiell']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Bei doppeltem $a$ halbiert sich $b$. Eine Gerade würde sich anders verhalten.'
      - wert: 2
        meldung: 'Die Variable steht im Nenner, nicht in einer Hochzahl.'
hinweise:
  - 'Löse $a\cdot b = 18$ nach $b$ auf.'
  - 'Was passiert mit $b$, wenn $a$ verdoppelt wird?'
loesung: |
  **Ansatz:** Auf der Höhenlinie ist der Funktionswert fest: $a\cdot b = 18$.
  a) $b(a) = \tfrac{18}{a}$ mit $a > 0$.
  ---
  b) $b(4) = \tfrac{18}{4} = 4{,}5$ cm. Probe: $4\cdot 4{,}5 = 18$.
  ---
  c) $b(a) = 18\,a^{-1}$ ist eine Potenzfunktion mit der Hochzahl $-1$. $b$ ist indirekt proportional zu $a$: doppeltes $a$, halbes $b$.
```

```aufgabe
id: fu-mehrvar-prozent
titel: Schneller fahren, wie viel Zeit spart man?
niveau: 2
lernziel: 9
kompetenz: begruenden
angabe: |
  Für die Fahrzeit gilt $t = \dfrac{s}{v}$. Ein Mitschüler behauptet: „Fahre ich um $25\,\%$ schneller, brauche ich $25\,\%$
  weniger Zeit.“

  a) Mit welchem Faktor ändert sich $t$, wenn $v$ um $25\,\%$ steigt?

  b) Um wie viel Prozent sinkt die Fahrzeit tatsächlich?
teile:
  - typ: zahl
    label: 'a) Faktor'
    loesung: "1/1.25"
    anzeige: '0{,}8'
    fehler:
      - wert: "0.75"
        meldung: 'Die Geschwindigkeit steht im Nenner. Der neue Wert ist $\tfrac{s}{1{,}25\,v} = \tfrac{1}{1{,}25}\cdot t$.'
      - wert: "1.25"
        meldung: 'Mehr Geschwindigkeit heißt weniger Zeit. Der Faktor muss kleiner als $1$ sein.'
  - typ: zahl
    label: 'b) Abnahme'
    einheit: '%'
    loesung: "(1 - 1/1.25)*100"
    anzeige: '20'
    fehler:
      - wert: "25"
        meldung: 'Das ist die Behauptung des Mitschülers. Bei indirekter Proportionalität wird durch $1{,}25$ dividiert: $1 - 0{,}8 = 0{,}2$.'
hinweise:
  - 'Ersetze $v$ durch $1{,}25\,v$ und vergleiche mit $\tfrac sv$.'
  - 'Teste mit Zahlen: $s = 100$ km und $v = 80$ km/h.'
loesung: |
  **Ansatz:** $s$ bleibt fest, $v$ wird mit $1{,}25$ multipliziert. Die neue Zeit ist $\tfrac{s}{1{,}25\,v} = \tfrac{1}{1{,}25}\cdot\tfrac sv$.
  ---
  a) Der Faktor ist $\tfrac{1}{1{,}25} = 0{,}8$.
  ---
  b) Die Zeit sinkt auf $80\,\%$, also um $20\,\%$, nicht um $25\,\%$. Probe: $\tfrac{100}{80} = 1{,}25$ h und $\tfrac{100}{100} = 1$ h, das sind $20\,\%$ weniger.
```

```aufgabe
id: fu-mehrvar-zins
titel: Zinssatz oder Laufzeit verdoppeln?
niveau: 3
lernziel: 9
kompetenz: modellieren
angabe: |
  Das Endkapital beim Zinseszins ist $K(K_0, p, n) = K_0\left(1 + \tfrac{p}{100}\right)^n$. Dabei ist $K_0$ das Startkapital in
  Euro, $p$ der Zinssatz in Prozent und $n$ die Laufzeit in Jahren. Runde jeweils auf ganze Euro.

  a) Berechne $K(1000, 4, 10)$.

  b) Berechne den Wert bei doppeltem Zinssatz, also $K(1000, 8, 10)$.

  c) Berechne den Wert bei doppelter Laufzeit, also $K(1000, 4, 20)$.
teile:
  - typ: zahl
    label: 'a)'
    einheit: Euro
    loesung: "1000*1.04^10"
    toleranz: 1
    anzeige: '1480'
    fehler:
      - wert: "1400"
        meldung: 'Das wäre ohne Zinseszins, also linear. Rechne $1{,}04^{10}$.'
  - typ: zahl
    label: 'b)'
    einheit: Euro
    loesung: "1000*1.08^10"
    toleranz: 1
    anzeige: '2159'
    fehler:
      - wert: "2*1000*1.04^10"
        meldung: 'Doppelter Zinssatz verdoppelt nicht das Endkapital. Rechne mit dem neuen Faktor $1{,}08$.'
  - typ: zahl
    label: 'c)'
    einheit: Euro
    loesung: "1000*1.04^20"
    toleranz: 1
    anzeige: '2191'
    fehler:
      - wert: "2*1000*1.04^10"
        meldung: 'Doppelte Laufzeit heißt: Der Faktor $1{,}04^{10}$ wird zweimal angewendet, also quadriert, nicht verdoppelt.'
hinweise:
  - 'Setze die drei Eingaben ein und rechne die Potenz zuerst aus.'
  - 'Bei c) gilt $1{,}04^{20} = \left(1{,}04^{10}\right)^2$.'
loesung: |
  **Ansatz:** $K$ ist eine Funktion dreier Variablen. Wir verändern jeweils nur eine Eingabe.
  a) $K = 1000\cdot 1{,}04^{10} \approx 1000\cdot 1{,}4802 \approx 1480$ Euro.
  ---
  b) $K = 1000\cdot 1{,}08^{10} \approx 2159$ Euro. c) $K = 1000\cdot 1{,}04^{20} \approx 2191$ Euro.
  ---
  **Deutung:** Beide Verdopplungen bringen fast gleich viel. Die Laufzeit gewinnt knapp, weil $1{,}04^2 = 1{,}0816$ etwas größer als $1{,}08$ ist. Der Zinsertrag wächst bei beiden auf deutlich mehr als das Doppelte: von $480$ auf rund $1160$ beziehungsweise $1190$ Euro.
```

```aufgabe
id: fu-mehrvar-gas
titel: Druck eines Gases
niveau: 3
lernziel: 9
kompetenz: modellieren
angabe: |
  Für ein Mol eines idealen Gases gilt näherungsweise
  $$p(T, V) = \frac{8{,}314\cdot T}{V}$$
  mit dem Druck $p$ in Pa, der Temperatur $T$ in K und dem Volumen $V$ in m³.

  a) Berechne den Druck bei $T = 300$ K und $V = 0{,}025$ m³. Runde auf ganze Pa.

  b) Mit welchem Faktor ändert sich der Druck, wenn man $T$ verdoppelt und gleichzeitig $V$ halbiert?

  c) Welches Volumen ergibt bei $T = 300$ K einen Druck von $200\,000$ Pa? Runde auf fünf Nachkommastellen.
teile:
  - typ: zahl
    label: 'a) $p$'
    einheit: Pa
    loesung: "8.314*300/0.025"
    toleranz: 1
    anzeige: '99\,768'
    fehler:
      - wert: "8.314*300*0.025"
        meldung: 'Das Volumen steht im Nenner. Es wird dividiert, nicht multipliziert.'
  - typ: zahl
    label: 'b) Faktor'
    loesung: "2/0.5"
    anzeige: '4'
    fehler:
      - wert: "1"
        meldung: 'Die Wirkungen heben sich nicht auf. Doppeltes $T$ verdoppelt $p$, halbes $V$ verdoppelt $p$ noch einmal.'
      - wert: "2"
        meldung: 'Beide Änderungen erhöhen den Druck. Halbes Volumen im Nenner wirkt wie ein Faktor $2$.'
  - typ: zahl
    label: 'c) $V$'
    einheit: 'm³'
    loesung: "8.314*300/200000"
    toleranz: 0.00001
    anzeige: '0{,}01247'
    fehler:
      - wert: "200000/(8.314*300)"
        meldung: 'Aus $p = \tfrac{8{,}314\,T}{V}$ folgt $V = \tfrac{8{,}314\,T}{p}$, nicht der Kehrwert davon.'
hinweise:
  - 'Für b) ersetze $T$ durch $2T$ und $V$ durch $\tfrac V2$ und vergleiche mit dem alten Druck.'
  - 'Für c) stelle die Formel nach $V$ um: Multipliziere mit $V$ und dividiere durch $p$.'
loesung: |
  **Ansatz:** $p$ ist direkt proportional zu $T$ und indirekt proportional zu $V$.
  a) $p = \tfrac{8{,}314\cdot 300}{0{,}025} = \tfrac{2494{,}2}{0{,}025} = 99\,768$ Pa, also knapp $1$ bar.
  ---
  b) $p(2T, \tfrac V2) = \tfrac{8{,}314\cdot 2T}{V/2} = 4\cdot\tfrac{8{,}314\,T}{V}$. Der Druck wird mit $4$ multipliziert.
  ---
  c) Umgestellt nach $V$: $V = \tfrac{8{,}314\cdot T}{p} = \tfrac{2494{,}2}{200\,000} \approx 0{,}01247$ m³.
  ---
  **Kontrolle:** Der Druck ist ungefähr doppelt so groß wie in a), also muss das Volumen ungefähr halb so groß sein: $0{,}025 : 2 = 0{,}0125$. Das passt.
gefuehrt:
  - text: 'Setze $T = 300$ und $V = 0{,}025$ ein. Was steht im Zähler?'
    teil: { typ: zahl, loesung: "8.314*300" }
    erklaerung: '$8{,}314\cdot 300 = 2494{,}2$.'
  - text: 'Dividiere durch das Volumen. Welcher Druck ergibt sich in Pa?'
    teil: { typ: zahl, loesung: "8.314*300/0.025", toleranz: 1 }
    erklaerung: '$2494{,}2 : 0{,}025 = 99\,768$ Pa.'
  - text: 'Doppelte Temperatur: Mit welchem Faktor ändert sich $p$, wenn sonst alles gleich bleibt?'
    teil: { typ: zahl, loesung: "2" }
    erklaerung: '$T$ steht im Zähler ohne Hochzahl. Doppeltes $T$ heißt doppeltes $p$.'
  - text: 'Halbes Volumen: Mit welchem Faktor ändert sich $p$ zusätzlich?'
    teil: { typ: zahl, loesung: "2", fehler: [ { wert: "0.5", meldung: '$V$ steht im Nenner. Ein kleinerer Nenner macht den Bruch größer.' } ] }
    erklaerung: 'Durch $\tfrac V2$ zu teilen heißt mit $\tfrac 2V$ zu multiplizieren. Zusammen also $2\cdot 2 = 4$.'
```

## Gemischte Wiederholung

In dieser Lektion sind die Aufgaben bewusst gemischt. Manche wiederholen Stoff aus den Kapiteln 1, 2 und 3, den du in
diesem Kapitel gebraucht hast. Manche verbinden mehrere Funktionstypen. Bei zwei Aufgaben musst du nur entscheiden,
welches Verfahren passt. Genau diese Entscheidung ist in der Prüfung oft der schwerste Schritt, weil dort nicht
dabeisteht, zu welcher Lektion eine Aufgabe gehört.

```aufgabe
id: fu-misch-prozent
titel: Drei Preiserhöhungen hintereinander
niveau: 1
lernziel: 8
kompetenz: rechnen
angabe: |
  Ein Preis steigt drei Jahre lang um jeweils $5\,\%$. Um wie viel Prozent ist er insgesamt gestiegen? Runde auf zwei
  Nachkommastellen.
  Wiederholung: [1.6 Prozentrechnung](/lernen/mathe3/zahlen/prozentrechnung).
teile:
  - typ: zahl
    label: 'Zunahme insgesamt'
    einheit: '%'
    loesung: "(1.05^3 - 1)*100"
    toleranz: 0.01
    anzeige: '15{,}76'
    fehler:
      - wert: "15"
        meldung: 'Die Erhöhungen werden jeweils vom schon erhöhten Preis berechnet. Rechne mit dem Faktor $1{,}05^3$.'
      - wert: "115.76"
        meldung: 'Das ist der neue Preis in Prozent des alten. Die **Zunahme** ist $115{,}76\,\% - 100\,\%$.'
hinweise:
  - 'Jede Erhöhung um $5\,\%$ heißt mal $1{,}05$. Dreimal hintereinander ergibt $1{,}05^3$.'
loesung: |
  **Ansatz:** Gleicher Prozentsatz pro Jahr heißt exponentielles Wachstum mit dem Faktor $1{,}05$. Nach drei Jahren: $1{,}05^3 = 1{,}157625$.
  ---
  Der Preis ist auf $115{,}76\,\%$ gestiegen, also um $15{,}76\,\%$. Das ist mehr als $3\cdot 5\,\% = 15\,\%$, wegen des Zinseszinseffekts.
```

```aufgabe
id: fu-misch-bruchterm
titel: Eine Lücke durch Kürzen finden
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Kürze $f(x) = \dfrac{x^2 - 4x}{x^2 - 16}$ und gib den Wert an, den $f$ an der hebbaren Lücke bekommen müsste.
  Wiederholung: [1.13 Bruchterme](/lernen/mathe3/zahlen/bruchterme).
teile:
  - typ: term
    label: 'gekürzt'
    loesung: "x/(x + 4)"
    bereich: [0.5, 3]
    fehler:
      - wert: "(x - 4)/(x - 16)"
        meldung: 'Aus Summen darf man nicht kürzen. Zerlege zuerst: $x^2 - 4x = x(x - 4)$ und $x^2 - 16 = (x - 4)(x + 4)$.'
      - wert: "x/(x - 4)"
        meldung: 'Gekürzt wird der gemeinsame Faktor $(x - 4)$. Im Nenner bleibt $(x + 4)$.'
  - typ: zahl
    label: 'Wert an der hebbaren Lücke'
    loesung: "4/8"
    anzeige: '\tfrac12'
    fehler:
      - wert: "0"
        meldung: 'Die Lücke liegt bei $x = 4$. Setze $4$ in den **gekürzten** Term $\tfrac{x}{x + 4}$ ein.'
hinweise:
  - 'Hebe im Zähler $x$ heraus und verwende im Nenner die dritte binomische Formel.'
loesung: |
  **Ansatz:** Zerlegen und den gemeinsamen Faktor kürzen. $f(x) = \dfrac{x(x - 4)}{(x - 4)(x + 4)} = \dfrac{x}{x + 4}$ für $x \ne 4$.
  ---
  Die Stelle $4$ verschwindet durch Kürzen aus dem Nenner: hebbare Lücke. Der gekürzte Term hat dort den Wert $\tfrac{4}{8} = \tfrac12$. Die Stelle $-4$ bleibt eine Polstelle.
```

```aufgabe
id: fu-misch-logregel
titel: Logarithmus einer Potenz von e
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Berechne $\ln\!\left(e^2\cdot\sqrt{e}\right)$ ohne Taschenrechner.
  Wiederholung: [1.11 Logarithmen](/lernen/mathe3/zahlen/logarithmen).
teile:
  - typ: zahl
    label: 'Ergebnis'
    loesung: "2.5"
    anzeige: '\tfrac52'
    fehler:
      - wert: "1"
        meldung: 'Ein Produkt im Argument wird zu einer **Summe**: $\ln e^2 + \ln\sqrt e = 2 + \tfrac12$.'
      - wert: "2"
        meldung: 'Auch $\sqrt e = e^{1/2}$ liefert einen Beitrag, nämlich $\tfrac12$.'
hinweise:
  - 'Schreibe $\sqrt e = e^{1/2}$ und fasse zusammen: $e^2\cdot e^{1/2} = e^{5/2}$.'
loesung: |
  **Ansatz:** Alles als Potenz von $e$ schreiben. $\sqrt e = e^{1/2}$, also $e^2\cdot e^{1/2} = e^{2 + 1/2} = e^{5/2}$.
  ---
  $\ln e^{5/2} = \tfrac52 = 2{,}5$, weil $\ln$ und $e$ sich aufheben.
```

```aufgabe
id: fu-misch-ungleichung
titel: Definitionsmenge mit quadratischer Ungleichung
niveau: 2
lernziel: 0
kompetenz: rechnen
angabe: |
  Bestimme die maximale Definitionsmenge von $f(x) = \sqrt{x^2 - 5x + 6}$.
  Wiederholung: [2.11 Bruch-, Betrags- und Wurzelungleichungen](/lernen/mathe3/gleichungen/bruch-betrags-und-wurzelungleichungen).
teile:
  - typ: auswahl
    optionen:
      - '$[2, 3]$'
      - '$(-\infty, 2] \cup [3, \infty)$'
      - '$[3, \infty)$'
      - '$\R$'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Prüfe $x = 2{,}5$: $6{,}25 - 12{,}5 + 6 = -0{,}25 < 0$. Zwischen $2$ und $3$ ist der Radikand negativ.'
      - wert: 2
        meldung: 'Auch kleine Zahlen sind erlaubt: Für $x = 0$ ist der Radikand $6 > 0$.'
      - wert: 3
        meldung: 'Für $x = 2{,}5$ wäre der Radikand negativ. Nicht alle Zahlen sind erlaubt.'
hinweise:
  - 'Radikand $\ge 0$: $x^2 - 5x + 6 = (x - 2)(x - 3) \ge 0$.'
  - 'Die Parabel ist nach oben offen. Wo liegt sie über oder auf der $x$-Achse?'
loesung: |
  **Ansatz:** Unter der Wurzel muss eine Zahl $\ge 0$ stehen. $x^2 - 5x + 6 = (x - 2)(x - 3) \ge 0$.
  ---
  Die Parabel $y = (x - 2)(x - 3)$ ist nach oben offen und hat die Nullstellen $2$ und $3$. Außerhalb davon liegt sie über der Achse, dazwischen darunter.
  ---
  Also $D = (-\infty, 2] \cup [3, \infty)$. Probe: $f(0) = \sqrt6$ ist erlaubt, $f(2{,}5) = \sqrt{-0{,}25}$ nicht.
```

```aufgabe
id: fu-misch-parabel-lgs
titel: Eine Parabel durch drei Punkte
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Bestimme die quadratische Funktion $f(x) = ax^2 + bx + c$, deren Graph durch $(0 \mid 1)$, $(1 \mid 0)$ und $(2 \mid 3)$ geht.
  Wiederholung: [3.3 Das Gauß-Verfahren](/lernen/mathe3/lgs-matrizen/das-gauss-verfahren).
teile:
  - typ: term
    label: '$f(x)$'
    loesung: "2x^2 - 3x + 1"
    fehler:
      - wert: "x^2 - 2x + 1"
        meldung: 'Prüfe den dritten Punkt: $4 - 4 + 1 = 1 \ne 3$. Löse das Gleichungssystem vollständig.'
      - wert: "-2x^2 + x + 1"
        meldung: 'Prüfe den dritten Punkt: $-8 + 2 + 1 = -5 \ne 3$.'
hinweise:
  - 'Setze die drei Punkte ein. Aus $(0 \mid 1)$ folgt sofort $c = 1$.'
  - 'Es bleiben $a + b = -1$ und $4a + 2b = 2$. Löse dieses System mit zwei Unbekannten.'
loesung: |
  **Ansatz:** Jeder Punkt liefert eine lineare Gleichung für $a$, $b$, $c$. Aus $(0 \mid 1)$: $c = 1$.
  ---
  Aus $(1 \mid 0)$: $a + b + 1 = 0$, also $a + b = -1$. Aus $(2 \mid 3)$: $4a + 2b + 1 = 3$, also $2a + b = 1$.
  ---
  Subtraktion der beiden Gleichungen: $(2a + b) - (a + b) = 1 - (-1)$, also $a = 2$. Dann $b = -1 - 2 = -3$.
  ---
  $f(x) = 2x^2 - 3x + 1$. Probe: $f(2) = 8 - 6 + 1 = 3$.
```

```aufgabe
id: fu-misch-verfahren-wachstum
titel: Welches Verfahren passt? Wachstum
niveau: 1
lernziel: 8
kompetenz: verstehen
angabe: |
  Gerechnet wird nichts. Wähle nur das passende Verfahren.

  Gesucht ist der Zeitpunkt, zu dem sich ein Bestand $N(t) = 3\cdot 1{,}07^t$ verdoppelt hat.
teile:
  - typ: auswahl
    optionen:
      - 'Lösungsformel für quadratische Gleichungen'
      - 'Potenz isolieren und logarithmieren'
      - 'Substitution $u = t^2$'
      - 'Polynomdivision'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Die Unbekannte steht nicht im Quadrat, sondern in der Hochzahl.'
      - wert: 2
        meldung: 'Substitution $u = t^2$ hilft bei Polynomen mit $t^4$ und $t^2$. Hier steht $t$ in der Hochzahl.'
      - wert: 3
        meldung: 'Polynomdivision braucht man bei Polynomen und rationalen Funktionen. Hier ist eine Exponentialgleichung zu lösen.'
hinweise:
  - 'Wo steht die Unbekannte $t$?'
loesung: |
  **Ansatz:** Die Unbekannte steht in der Hochzahl. Das verlangt den Logarithmus.
  ---
  $3\cdot 1{,}07^t = 6$ wird zu $1{,}07^t = 2$ und dann zu $t = \tfrac{\ln 2}{\ln 1{,}07} \approx 10{,}24$. Der Anfangswert $3$ kürzt sich dabei weg.
```

```aufgabe
id: fu-misch-verfahren-polynom
titel: Welches Verfahren passt? Polynome und Brüche
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Gerechnet wird nichts. Wähle jeweils das passende Verfahren.

  a) Gesucht sind die Nullstellen von $f(x) = x^4 - 7x^2 + 12$.

  b) Gesucht ist die schräge Asymptote von $g(x) = \dfrac{x^3 + 1}{x^2 - 1}$.
teile:
  - typ: auswahl
    label: 'a)'
    optionen: ['Substitution $u = x^2$', 'Polynomdivision durch den Nenner', 'Logarithmieren']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Es gibt keinen Nenner. Es kommen nur $x^4$, $x^2$ und eine Konstante vor.'
      - wert: 2
        meldung: 'Die Unbekannte steht in der Basis, nicht in der Hochzahl.'
  - typ: auswahl
    label: 'b)'
    optionen: ['Substitution $u = x^2$', 'Polynomdivision', 'Quotient der Leitkoeffizienten']
    richtig: [1]
    fehler:
      - wert: 2
        meldung: 'Der Quotient der Leitkoeffizienten gibt die waagrechte Asymptote bei gleichem Grad. Hier ist der Zählergrad um $1$ größer.'
      - wert: 0
        meldung: 'Die Substitution löst Gleichungen. Eine Asymptote findet man durch Division von Zähler durch Nenner.'
hinweise:
  - 'Bei a) kommen nur gerade Hochzahlen vor. Bei b) vergleiche Zähler- und Nennergrad.'
loesung: |
  **Ansatz:** Das Verfahren richtet sich nach der Gestalt des Terms.
  a) Nur $x^4$, $x^2$ und eine Konstante: Substitution $u = x^2$ führt auf $u^2 - 7u + 12 = 0$ mit $u = 3$ und $u = 4$.
  ---
  b) Zählergrad $3$, Nennergrad $2$: Die schräge Asymptote liefert die Polynomdivision. Sie ergibt $x$ mit Rest $x + 1$, also die Asymptote $y = x$.
```

```aufgabe
id: fu-misch-modell-term
titel: Den passenden Term auswählen
niveau: 2
lernziel: 8
kompetenz: modellieren
angabe: |
  Eine Tasse Kakao hat $80\,°\text{C}$ und steht in einem Raum mit $20\,°\text{C}$. Der Temperaturunterschied zum Raum
  halbiert sich alle $10$ Minuten. Welcher Term beschreibt die Temperatur nach $t$ Minuten?
teile:
  - typ: auswahl
    optionen:
      - '$T(t) = 80\cdot 0{,}5^{t/10}$'
      - '$T(t) = 20 + 60\cdot 0{,}5^{t/10}$'
      - '$T(t) = 80 - 6t$'
      - '$T(t) = 20 + 60\cdot 0{,}5^{10t}$'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Dieser Term geht gegen $0\,°\text{C}$. Der Kakao kühlt aber nur bis zur Raumtemperatur ab.'
      - wert: 2
        meldung: 'Lineare Abnahme würde nach $13{,}3$ Minuten $0\,°\text{C}$ erreichen. Die Abkühlung wird aber immer langsamer.'
      - wert: 3
        meldung: 'Mit $0{,}5^{10t}$ halbiert sich der Unterschied alle $\tfrac{1}{10}$ Minuten. Die Hochzahl muss $\tfrac{t}{10}$ sein.'
hinweise:
  - 'Welcher Wert ist die Grenze? Welche Größe halbiert sich?'
  - 'Der Unterschied ist am Anfang $60\,°\text{C}$ und halbiert sich alle $10$ Minuten.'
loesung: |
  **Ansatz:** Beschränktes Modell: Grenze $20\,°$C, Anfangsunterschied $80 - 20 = 60\,°$C.
  ---
  Der Unterschied halbiert sich alle $10$ Minuten, also ist er $60\cdot 0{,}5^{t/10}$.
  ---
  $T(t) = 20 + 60\cdot 0{,}5^{t/10}$. Probe: $T(0) = 80$, $T(10) = 50$, und für große $t$ geht $T$ gegen $20$.
```

```aufgabe
id: fu-misch-umkehr-exp
titel: Umkehrfunktion einer verschobenen Exponentialfunktion
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Gegeben ist $g(x) = 2^{x - 1} + 3$.

  a) Wie entsteht der Graph aus dem von $2^x$?

  b) Bestimme die Umkehrfunktion $g^{-1}$.

  c) Berechne $g^{-1}(7)$.
teile:
  - typ: auswahl
    label: 'a)'
    optionen: ['um $1$ nach rechts und $3$ nach oben', 'um $1$ nach links und $3$ nach oben', 'um $3$ nach rechts und $1$ nach oben']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Innen wirkt umgekehrt: $x - 1$ verschiebt nach rechts.'
      - wert: 2
        meldung: 'Die $1$ steht innen in der Hochzahl, die $3$ außen. Innen ist waagrecht, außen senkrecht.'
  - typ: term
    label: 'b) $g^{-1}(x)$'
    loesung: "log(x - 3, 2) + 1"
    bereich: [3.5, 10]
    fehler:
      - wert: "log(x, 2) - 3 + 1"
        meldung: 'Zuerst muss die $3$ weg: $y - 3 = 2^{x - 1}$. Erst dann logarithmieren.'
      - wert: "log(x - 3, 2) - 1"
        meldung: 'Aus $\log_2(y - 3) = x - 1$ folgt $x = \log_2(y - 3) + 1$.'
  - typ: zahl
    label: 'c) $g^{-1}(7)$'
    loesung: "3"
    fehler:
      - wert: "67"
        meldung: 'Das wäre $g(7)$. Gesucht ist die Eingabe $x$ mit $g(x) = 7$.'
hinweise:
  - 'Für b): $y = 2^{x - 1} + 3$ nach $x$ auflösen. Zuerst $3$ abziehen, dann mit $\log_2$ die Hochzahl befreien.'
  - 'Für c): Für welches $x$ ist $2^{x - 1} + 3 = 7$?'
loesung: |
  **Ansatz:** Transformationen innen und außen lesen, die Umkehrfunktion durch Auflösen nach $x$.
  a) $x - 1$ innen: $1$ nach rechts. $+3$ außen: $3$ nach oben.
  ---
  b) $y - 3 = 2^{x - 1}$, also $x - 1 = \log_2(y - 3)$ und $x = \log_2(y - 3) + 1$. Umbenennen: $g^{-1}(x) = \log_2(x - 3) + 1$ für $x > 3$.
  ---
  c) $g^{-1}(7) = \log_2 4 + 1 = 2 + 1 = 3$. Probe: $g(3) = 2^2 + 3 = 7$.
```

```aufgabe
id: fu-misch-polynom-symmetrie
titel: Ein gerades Polynom konstruieren
niveau: 3
lernziel: 3
kompetenz: anwenden
angabe: |
  Ein Polynom vierten Grades ist gerade, hat die Nullstellen $1$ und $3$ und schneidet die $y$-Achse bei $9$.

  a) Gib alle Nullstellen an.

  b) Gib den Funktionsterm an.

  c) Berechne $f(2)$. Liegt der Graph bei $x = 2$ über oder unter der $x$-Achse?
teile:
  - typ: menge
    label: 'a) Nullstellen'
    loesung: ["-3", "-1", "1", "3"]
    fehler:
      - wert: ["1", "3"]
        meldung: 'Ein gerades Polynom ist symmetrisch zur $y$-Achse. Zu jeder Nullstelle gehört auch ihr Gegenstück.'
  - typ: term
    label: 'b) $f(x)$'
    loesung: "(x^2 - 1)*(x^2 - 9)"
    fehler:
      - wert: "9*(x^2 - 1)*(x^2 - 9)"
        meldung: 'Dann wäre $f(0) = 9\cdot 9 = 81$. Bestimme den Faktor $a$ aus $f(0) = 9$.'
      - wert: "(x - 1)*(x - 3)"
        meldung: 'Das ist nur Grad $2$ und nicht gerade. Es fehlen die Nullstellen $-1$ und $-3$.'
  - typ: zahl
    label: 'c) $f(2)$'
    loesung: "(4 - 1)*(4 - 9)"
    anzeige: '-15'
    fehler:
      - wert: "15"
        meldung: '$(4 - 1)(4 - 9) = 3\cdot(-5)$. Das Ergebnis ist negativ.'
hinweise:
  - 'Gerade heißt symmetrisch zur $y$-Achse. Ansatz: $f(x) = a(x - 1)(x + 1)(x - 3)(x + 3) = a(x^2 - 1)(x^2 - 9)$.'
  - 'Bestimme $a$ aus $f(0) = 9$.'
loesung: |
  **Ansatz:** Gerade bedeutet Symmetrie zur $y$-Achse. Mit $1$ und $3$ sind auch $-1$ und $-3$ Nullstellen. Vier Nullstellen bei Grad $4$: $f(x) = a(x^2 - 1)(x^2 - 9)$.
  ---
  $f(0) = a\cdot(-1)\cdot(-9) = 9a = 9$, also $a = 1$ und $f(x) = (x^2 - 1)(x^2 - 9) = x^4 - 10x^2 + 9$.
  ---
  $f(2) = 3\cdot(-5) = -15$. Der Graph liegt bei $x = 2$ unter der $x$-Achse. Das passt: Zwischen den einfachen Nullstellen $1$ und $3$ wechselt das Vorzeichen.
```

## Prüfungsaufgaben

Diese Aufgaben haben das Format der schriftlichen Prüfung: mehrere Teilaufgaben, ein Sachzusammenhang und Punkte. Zwei
davon sind abgewandelte Varianten von Aufgaben der Musterprüfungen, die übrigen haben keine Vorlage. Die
Originalaufgaben der Musterprüfungen findest du in den Prüfungssimulationen. Rechne mit Taschenrechner und Uhr. Der
Zeitrichtwert steht jeweils in der Angabe. Schreib immer den Ansatz, die Rechnung mit Zwischenergebnissen und einen
Antwortsatz mit Einheit hin.

```aufgabe
id: fu-pruefung-zuchtteich
titel: Fische in einem Zuchtteich
niveau: 3
lernziel: 8
kompetenz: modellieren
punkte: 10
quelle: "nach Musterprüfung Karigl, Aufgabe 3 (abgewandelt)"
angabe: |
  *Zeitrichtwert: 15 Minuten.* Die Zahl der Fische in einem Zuchtteich wächst nach dem Gesetz
  $$N(t) = N_0\,e^{0{,}042t}$$
  Dabei ist $N$ die Anzahl der Fische und $t$ die Zeit in Monaten.

  a) Berechne die monatliche prozentuelle Zunahme. Runde auf zwei Nachkommastellen.

  b) Nach welcher Zeit hat sich die Zahl der Fische verdoppelt, nach welcher verdreifacht? Runde auf zwei Nachkommastellen.

  c) Zu Beginn sind es $N_0 = 300$ Fische. Nach wie vielen Monaten sind es $5000$? Runde auf zwei Nachkommastellen.

  d) Der Teich bietet Platz für etwa $3000$ Fische. Beurteile, ob das Modell für c) sinnvoll ist.
teile:
  - typ: zahl
    label: 'a) monatliche Zunahme'
    einheit: '%'
    loesung: "(e^0.042 - 1)*100"
    toleranz: 0.01
    anzeige: '4{,}29'
    fehler:
      - wert: "4.2"
        meldung: '$\lambda = 0{,}042$ ist nicht der Prozentsatz. Der Faktor pro Monat ist $e^{0{,}042}$.'
  - typ: zahl
    label: 'b) Verdopplungszeit'
    einheit: Monate
    loesung: "ln(2)/0.042"
    toleranz: 0.01
    anzeige: '16{,}50'
    fehler:
      - wert: "2/0.042"
        meldung: 'Aus $e^{0{,}042t} = 2$ folgt $0{,}042t = \ln 2$, nicht $0{,}042t = 2$.'
  - typ: zahl
    label: 'b) Verdreifachungszeit'
    einheit: Monate
    loesung: "ln(3)/0.042"
    toleranz: 0.01
    anzeige: '26{,}16'
    fehler:
      - wert: "3*ln(2)/0.042"
        meldung: 'Verdreifachen heißt nicht dreimal verdoppeln. Löse $e^{0{,}042t} = 3$.'
  - typ: zahl
    label: 'c) Zeit bis 5000 Fische'
    einheit: Monate
    loesung: "ln(5000/300)/0.042"
    toleranz: 0.01
    anzeige: '66{,}99'
    fehler:
      - wert: "ln(5000)/0.042"
        meldung: 'Zuerst durch $N_0 = 300$ dividieren: $e^{0{,}042t} = \tfrac{5000}{300}$.'
  - typ: text
    label: 'd) Beurteilung'
    muster: |
      Nein. Laut Modell gäbe es nach rund $67$ Monaten $5000$ Fische, aber der Teich hat nur für etwa $3000$ Platz. Das
      exponentielle Modell kennt keine Obergrenze. Spätestens wenn es eng wird, wächst die Zahl langsamer. Ein logistisches
      Modell mit der Grenze $3000$ wäre realistischer.
hinweise:
  - 'Prozentuelle Zunahme pro Monat: Vergleiche $N(t + 1)$ mit $N(t)$. Der Faktor ist $e^{0{,}042}$.'
  - 'Verdopplung: $N_0\,e^{0{,}042t} = 2N_0$. Kürze $N_0$ und logarithmiere. Für c) gilt $e^{0{,}042t} = \tfrac{5000}{300}$.'
loesung: |
  **a)** Ansatz: Der Faktor von einem Monat zum nächsten ist $\dfrac{N(t + 1)}{N(t)} = \dfrac{N_0\,e^{0{,}042(t + 1)}}{N_0\,e^{0{,}042t}} = e^{0{,}042} \approx 1{,}0429$.
  Die Zahl der Fische nimmt pro Monat um etwa $4{,}29\,\%$ zu, nicht um $4{,}2\,\%$.
  ---
  **b)** Verdopplung: $N_0\,e^{0{,}042t} = 2N_0$, also $e^{0{,}042t} = 2$ und $t = \dfrac{\ln 2}{0{,}042} \approx 16{,}50$ Monate.
  Verdreifachung: $e^{0{,}042t} = 3$, also $t = \dfrac{\ln 3}{0{,}042} \approx 26{,}16$ Monate.
  ---
  Kontrolle: $3 \approx 2^{1{,}585}$, also braucht die Verdreifachung etwa $1{,}585$ Verdopplungszeiten: $1{,}585\cdot 16{,}50 \approx 26{,}15$.
  ---
  **c)** $300\,e^{0{,}042t} = 5000$, also $e^{0{,}042t} = \tfrac{50}{3}$ und $t = \dfrac{\ln(50/3)}{0{,}042} \approx 66{,}99$ Monate, also gut fünfeinhalb Jahre.
  ---
  **d)** Das Ergebnis aus c) überschreitet die Kapazität des Teichs von etwa $3000$ Fischen. Das exponentielle Modell gilt also höchstens, solange der Bestand deutlich unter $3000$ liegt.
```

```aufgabe
id: fu-pruefung-winkler
titel: Eine Exponentialfunktion zur Basis 3
niveau: 3
lernziel: 7
kompetenz: rechnen
punkte: 10
quelle: "nach Musterprüfung Winkler, Aufgabe 3 (abgewandelt)"
angabe: |
  *Zeitrichtwert: 15 Minuten.* Gegeben ist die reelle Funktion $f(x) = \dfrac{3^x}{9}$. Sie nimmt nur positive Werte an.

  a) Berechne $f(x)$ an den Stellen $x = -1, 0, 1, 2, 3$ und skizziere den Graphen.

  b) Berechne $f\!\left(\tfrac12\right)^2$. Gib $f\!\left(\tfrac52\right)$ auf eine Nachkommastelle gerundet an.

  c) Wegen $3 = e^{\ln 3}$ kann man $f$ in der Form $f(x) = \alpha\,e^{\lambda x}$ schreiben. Bestimme $\alpha$ und $\lambda$.

  d) Wie lautet die Ableitung $f'(x)$? Verwende die Kettenregel aus
  [9.7 Kettenregel](/lernen/mathe3/differentialrechnung/kettenregel-hoehere-ableitungen-und-die-wahl-der-richtigen-regel).
teile:
  - typ: vektor
    label: 'a) $f(-1), f(0), f(1), f(2), f(3)$'
    loesung: ["1/27", "1/9", "1/3", "1", "3"]
    fehler:
      - wert: ["-1/9", "0", "1/9", "8/9", "3"]
        meldung: 'Das sind die Werte von $\tfrac{x^3}{9}$, also Basis und Hochzahl vertauscht. Bei einer Exponentialfunktion steht die Eingabe in der Hochzahl: $f(2) = \tfrac{3^2}{9} = 1$, nicht $\tfrac{2^3}{9}$.'
  - typ: zahl
    label: 'b) $f(1/2)^2$'
    loesung: "(sqrt(3)/9)^2"
    anzeige: '\tfrac{1}{27}'
    fehler:
      - wert: "1/9"
        meldung: '$f\!\left(\tfrac12\right) = \tfrac{\sqrt3}{9}$. Quadriert ergibt das $\tfrac{3}{81} = \tfrac{1}{27}$.'
  - typ: zahl
    label: 'b) $f(5/2)$'
    loesung: "3^2.5/9"
    toleranz: 0.05
    anzeige: '\sqrt3 \approx 1{,}7'
    fehler:
      - wert: "3^2.5"
        meldung: '$3^{5/2} = 9\sqrt3$ stimmt. Danach musst du noch durch $9$ teilen.'
  - typ: zahl
    label: 'c) $\alpha$'
    loesung: "1/9"
    fehler:
      - wert: "9"
        meldung: 'Durch $9$ teilen heißt mal $\tfrac19$. Der Anfangswert ist $f(0) = \tfrac19$.'
  - typ: zahl
    label: 'c) $\lambda$'
    loesung: "ln(3)"
    toleranz: 0.0001
    anzeige: '\ln 3 \approx 1{,}0986'
    fehler:
      - wert: "3"
        meldung: '$\lambda$ ist der natürliche Logarithmus der Basis: $3 = e^{\ln 3}$.'
  - typ: term
    label: "d) $f'(x)$"
    loesung: "ln(3)/9 * 3^x"
    fehler:
      - wert: "x*3^(x-1)/9"
        meldung: 'Das ist die Potenzregel. Sie gilt für $x^n$, nicht für $3^x$. Leite $\tfrac19\,e^{(\ln 3)x}$ mit der Kettenregel ab.'
hinweise:
  - '$f(x) = \tfrac{3^x}{3^2} = 3^{x - 2}$ ist eine nützliche Kontrollform.'
  - 'Für c): $3^x = \left(e^{\ln 3}\right)^x = e^{(\ln 3)x}$. Für d): $\left(e^{\lambda x}\right)'' = \lambda\,e^{\lambda x}$.'
plot:
  x: [-2, 3.5]
  y: [-0.5, 4]
  graphen:
    - { f: "3^x/9" }
  punkte:
    - { x: -1, y: "1/27" }
    - { x: 0, y: "1/9" }
    - { x: 1, y: "1/3" }
    - { x: 2, y: 1 }
    - { x: 3, y: 3 }
loesung: |
  **a)** Ansatz: Die Eingabe steht in der Hochzahl, also $f(x) = 3^{x - 2}$. $f(-1) = 3^{-3} = \tfrac{1}{27}$, $f(0) = \tfrac19$, $f(1) = \tfrac13$, $f(2) = 1$, $f(3) = 3$.
  Jeder Schritt nach rechts verdreifacht den Wert. Der Graph steigt streng und nähert sich nach links der $x$-Achse.
  ---
  **b)** $f\!\left(\tfrac12\right) = \tfrac{3^{1/2}}{9} = \tfrac{\sqrt3}{9}$, also $f\!\left(\tfrac12\right)^2 = \tfrac{3}{81} = \tfrac{1}{27}$.
  $f\!\left(\tfrac52\right) = \tfrac{3^2\cdot\sqrt3}{9} = \sqrt3 \approx 1{,}7$.
  ---
  **c)** $f(x) = \tfrac19\cdot\left(e^{\ln 3}\right)^x = \tfrac19\,e^{(\ln 3)x}$. Also $\alpha = \tfrac19$ und $\lambda = \ln 3 \approx 1{,}0986$.
  ---
  **d)** Kettenregel: $f'(x) = \tfrac19\cdot\ln 3\cdot e^{(\ln 3)x} = \tfrac{\ln 3}{9}\cdot 3^x \approx 0{,}1221\cdot 3^x$.
  Die Ableitung ist ein konstantes Vielfaches von $f$: $f'(x) = \ln 3\cdot f(x)$. Das ist typisch für Exponentialfunktionen.
```

```aufgabe
id: fu-pruefung-iod
titel: Radioaktives Iod
niveau: 3
lernziel: 8
kompetenz: anwenden
punkte: 8
angabe: |
  *Zeitrichtwert: 12 Minuten.* Das radioaktive Isotop Iod-131 hat eine Halbwertszeit von $8$ Tagen.

  a) Stelle das Zerfallsgesetz in der Form $N(t) = N_0\,e^{-\lambda t}$ auf, $t$ in Tagen. Gib $\lambda$ auf vier
  Nachkommastellen an.

  b) Wie viel Prozent der Anfangsmenge sind nach $30$ Tagen noch vorhanden? Runde auf zwei Nachkommastellen.

  c) Nach wie vielen Tagen ist weniger als $1\,\%$ der Anfangsmenge übrig? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    label: 'a) $\lambda$'
    einheit: '1/Tag'
    loesung: "ln(2)/8"
    toleranz: 0.0001
    anzeige: '0{,}0866'
    fehler:
      - wert: "1/16"
        meldung: 'Die Halbwertszeit ist nicht $\tfrac{1}{2\lambda}$. Aus $e^{-8\lambda} = \tfrac12$ folgt $\lambda = \tfrac{\ln 2}{8}$.'
      - wert: "8*ln(2)"
        meldung: 'Aus $8\lambda = \ln 2$ folgt $\lambda = \tfrac{\ln 2}{8}$. Du hast mit $8$ multipliziert statt durch $8$ dividiert.'
  - typ: zahl
    label: 'b) Anteil nach 30 Tagen'
    einheit: '%'
    loesung: "100*0.5^(30/8)"
    toleranz: 0.01
    anzeige: '7{,}43'
    fehler:
      - wert: "100 - 30/8*50"
        meldung: 'Radioaktiver Zerfall ist nicht linear. Pro Halbwertszeit halbiert sich der Rest: $0{,}5^{30/8}$.'
  - typ: zahl
    label: 'c) Zeit bis unter 1 %'
    einheit: Tage
    loesung: "8*ln(100)/ln(2)"
    toleranz: 0.01
    anzeige: '53{,}15'
    fehler:
      - wert: "8*99/50"
        meldung: 'Das wäre linear gedacht: alle $8$ Tage $50\,\%$ weniger, bis $99\,\%$ weg sind. Beim Zerfall halbiert sich aber der jeweils **vorhandene** Rest. Löse $0{,}5^{t/8} = 0{,}01$ mit dem Logarithmus.'
hinweise:
  - 'Halbwertszeit: $e^{-8\lambda} = \tfrac12$ liefert $\lambda$.'
  - 'Einfacher für b) und c): $N(t) = N_0\cdot 0{,}5^{t/8}$. Dann $0{,}5^{t/8} = 0{,}01$ logarithmieren.'
loesung: |
  **a)** Ansatz: Nach der Halbwertszeit ist die Hälfte übrig. $e^{-8\lambda} = \tfrac12$, also $\lambda = \dfrac{\ln 2}{8} \approx 0{,}0866$ pro Tag.
  Das Gesetz lautet $N(t) = N_0\,e^{-0{,}0866t}$.
  ---
  **b)** $\dfrac{N(30)}{N_0} = 0{,}5^{30/8} = 0{,}5^{3{,}75} \approx 0{,}0743$. Nach $30$ Tagen sind noch etwa $7{,}43\,\%$ vorhanden.
  ---
  **c)** $0{,}5^{t/8} = 0{,}01$, also $\dfrac{t}{8}\ln 0{,}5 = \ln 0{,}01$ und $t = 8\cdot\dfrac{\ln 100}{\ln 2} \approx 53{,}15$ Tage.
  ---
  Plausibel: Nach $48$ Tagen, also $6$ Halbwertszeiten, ist $2^{-6} \approx 1{,}6\,\%$ übrig. Nach $56$ Tagen sind es $2^{-7} \approx 0{,}8\,\%$. Das Ergebnis liegt dazwischen.
```

```aufgabe
id: fu-pruefung-ueberholen
titel: Wann überholt eine Population die andere?
niveau: 3
lernziel: 8
kompetenz: modellieren
punkte: 6
angabe: |
  *Zeitrichtwert: 12 Minuten.* Population A umfasst $500$ Tiere und wächst um $6\,\%$ pro Jahr. Population B umfasst $800$
  Tiere und wächst um $2\,\%$ pro Jahr.

  a) Stelle für beide das Wachstumsgesetz auf.

  b) Nach wie vielen Jahren sind beide Populationen gleich groß? Runde auf zwei Nachkommastellen.

  c) Wie groß sind sie dann? Runde auf ganze Tiere.
teile:
  - typ: term
    label: 'a) $A(t)$'
    variable: t
    loesung: "500*1.06^t"
    fehler:
      - wert: "500*0.06^t"
        meldung: 'Eine Zunahme um $6\,\%$ heißt Faktor $1{,}06$.'
  - typ: zahl
    label: 'b) Zeitpunkt'
    einheit: Jahre
    loesung: "ln(800/500)/ln(1.06/1.02)"
    toleranz: 0.01
    anzeige: '12{,}22'
    fehler:
      - wert: "300/(0.06*500 - 0.02*800)"
        meldung: 'Das wäre ein lineares Modell. Beide wachsen um einen Prozentsatz, also exponentiell.'
      - wert: "ln(1.6)/ln(1.04)"
        meldung: 'Die Faktoren werden nicht subtrahiert, sondern dividiert: $\left(\tfrac{1{,}06}{1{,}02}\right)^t = 1{,}6$.'
  - typ: zahl
    label: 'c) Größe dann'
    loesung: "500*1.06^(ln(1.6)/ln(1.06/1.02))"
    toleranz: 2
    anzeige: '1019'
    fehler:
      - wert: "800"
        meldung: 'Auch Population B wächst bis dahin. Setze den Zeitpunkt aus b) in eines der Gesetze ein.'
hinweise:
  - '$500\cdot 1{,}06^t = 800\cdot 1{,}02^t$. Bringe die Potenzen auf eine Seite und die Zahlen auf die andere.'
  - 'Es gilt $\tfrac{1{,}06^t}{1{,}02^t} = \left(\tfrac{1{,}06}{1{,}02}\right)^t$. Danach logarithmieren.'
loesung: |
  **a)** Ansatz: Beide wachsen um einen festen Prozentsatz, also exponentiell. $A(t) = 500\cdot 1{,}06^t$ und $B(t) = 800\cdot 1{,}02^t$, $t$ in Jahren.
  ---
  **b)** Gleichsetzen: $500\cdot 1{,}06^t = 800\cdot 1{,}02^t$. Division durch $500\cdot 1{,}02^t$: $\left(\dfrac{1{,}06}{1{,}02}\right)^t = 1{,}6$.
  ---
  Logarithmieren: $t = \dfrac{\ln 1{,}6}{\ln(1{,}06/1{,}02)} \approx \dfrac{0{,}4700}{0{,}03847} \approx 12{,}22$ Jahre.
  ---
  **c)** $A(12{,}22) = 500\cdot 1{,}06^{12{,}22} \approx 1019$ Tiere. Kontrolle: $B(12{,}22) = 800\cdot 1{,}02^{12{,}22} \approx 1019$.
  Danach ist A größer, weil A den größeren Wachstumsfaktor hat.
```

```aufgabe
id: fu-pruefung-stueckkosten
titel: Stückkosten einer Produktion
niveau: 3
lernziel: 4
kompetenz: modellieren
punkte: 8
angabe: |
  *Zeitrichtwert: 15 Minuten.* Die Gesamtkosten für $x$ Stück eines Produkts sind $K(x) = 0{,}02x^2 + 8x + 1800$ Euro. Die
  Stückkosten sind $k(x) = \dfrac{K(x)}{x}$ für $x > 0$.

  a) Berechne $k(100)$ und $k(300)$.

  b) Schreibe $k(x)$ als Summe ohne Bruch mit Zähler $x$. Gib die schräge Asymptote $y = mx + n$ an und deute sie.

  c) Für welche Stückzahlen sind die Stückkosten höchstens $22$ Euro? Gib die kleinste und die größte ganze Stückzahl an.
teile:
  - typ: zahl
    label: 'a) $k(100)$'
    einheit: Euro
    loesung: "(0.02*100^2 + 8*100 + 1800)/100"
    anzeige: '28'
    fehler:
      - wert: "2800"
        meldung: 'Das sind die Gesamtkosten $K(100)$. Die Stückkosten bekommst du durch Division durch $100$.'
  - typ: zahl
    label: 'a) $k(300)$'
    einheit: Euro
    loesung: "(0.02*300^2 + 8*300 + 1800)/300"
    anzeige: '20'
    fehler:
      - wert: "6000"
        meldung: 'Das sind die Gesamtkosten $K(300)$. Teile durch $300$.'
  - typ: term
    label: 'b) Asymptote $y = mx + n$'
    loesung: "0.02x + 8"
    fehler:
      - wert: "0.02x"
        meldung: 'Beim Teilen durch $x$ wird aus $8x$ der Summand $8$. Er gehört zur Asymptote.'
  - typ: text
    label: 'b) Deutung'
    muster: |
      $k(x) = 0{,}02x + 8 + \tfrac{1800}{x}$. Für große Stückzahlen verteilen sich die Fixkosten $1800$ Euro auf so viele Stück,
      dass $\tfrac{1800}{x}$ kaum noch zählt. Dann wachsen die Stückkosten fast linear wie $0{,}02x + 8$, weil der Term
      $0{,}02x^2$ in den Gesamtkosten die Produktion bei großen Mengen verteuert.
  - typ: vektor
    label: 'c) kleinste und größte Stückzahl'
    namen: ["von", "bis"]
    loesung: ["170", "530"]
    toleranz: 0.1
    fehler:
      - wert: ["169", "530"]
        meldung: 'Die Grenze liegt bei $169{,}72$. Bei $169$ Stück sind die Stückkosten noch über $22$ Euro.'
      - wert: ["170", "531"]
        meldung: 'Die obere Grenze liegt bei $530{,}28$. Bei $531$ Stück sind die Stückkosten schon über $22$ Euro.'
hinweise:
  - 'Teile jeden Summanden von $K(x)$ durch $x$.'
  - 'Für c) multipliziere $k(x) \le 22$ mit $x > 0$. Es entsteht eine quadratische Ungleichung $0{,}02x^2 - 14x + 1800 \le 0$.'
loesung: |
  **a)** Ansatz: Stückkosten sind Gesamtkosten durch Stückzahl. $k(100) = \tfrac{200 + 800 + 1800}{100} = 28$ Euro und $k(300) = \tfrac{1800 + 2400 + 1800}{300} = 20$ Euro.
  ---
  **b)** Summandenweise durch $x$ teilen: $k(x) = 0{,}02x + 8 + \dfrac{1800}{x}$. Für große $x$ wird $\tfrac{1800}{x}$ sehr klein. Die schräge Asymptote ist $y = 0{,}02x + 8$.
  ---
  **c)** $0{,}02x + 8 + \tfrac{1800}{x} \le 22$. Multiplikation mit $x > 0$ ändert das Zeichen nicht: $0{,}02x^2 + 8x + 1800 \le 22x$, also $0{,}02x^2 - 14x + 1800 \le 0$.
  ---
  Mal $50$: $x^2 - 700x + 90\,000 \le 0$. Nullstellen: $x = \tfrac{700 \pm \sqrt{490\,000 - 360\,000}}{2} = \tfrac{700 \pm 360{,}56}{2}$, also $169{,}72$ und $530{,}28$.
  ---
  Die nach oben offene Parabel ist zwischen den Nullstellen negativ. **Antwort:** Von $170$ bis $530$ Stück liegen die Stückkosten bei höchstens $22$ Euro. Probe: $k(300) = 20 \le 22$.
```

```aufgabe
id: fu-pruefung-pizzaofen
titel: Ein Pizzaofen heizt auf
niveau: 3
lernziel: 8
kompetenz: modellieren
punkte: 8
angabe: |
  *Zeitrichtwert: 15 Minuten.* Ein Pizzaofen wird eingeschaltet. Seine Innentemperatur nach $t$ Minuten ist
  $$T(t) = 250 - 230\,e^{-0{,}15t} \qquad (T \text{ in } °\text{C}).$$
  a) Welche Temperatur hat der Ofen beim Einschalten? Welcher Temperatur nähert er sich?

  b) Nach wie vielen Minuten hat er $200\,°\text{C}$? Runde auf zwei Nachkommastellen.

  c) Bestimme die Umkehrfunktion $t(T)$. Was gibt sie im Sachzusammenhang an?

  d) Der Bäcker sagt: „Nach $30$ Minuten hat der Ofen genau $250\,°\text{C}$.“ Nimm Stellung.
teile:
  - typ: zahl
    label: 'a) Anfangstemperatur'
    einheit: '°C'
    loesung: "250 - 230"
    anzeige: '20'
    fehler:
      - wert: "230"
        meldung: '$230$ ist der Anfangsabstand zur Grenze. Bei $t = 0$ ist $T = 250 - 230$.'
  - typ: zahl
    label: 'a) Grenztemperatur'
    einheit: '°C'
    loesung: "250"
    fehler:
      - wert: "20"
        meldung: 'Das ist die Anfangstemperatur. Für große $t$ geht $e^{-0{,}15t}$ gegen $0$.'
  - typ: zahl
    label: 'b) Zeit bis 200 °C'
    einheit: min
    loesung: "ln(230/50)/0.15"
    toleranz: 0.01
    anzeige: '10{,}17'
    fehler:
      - wert: "ln(200/230)/(-0.15)"
        meldung: 'Zuerst den Abstand zur Grenze bestimmen: $230\,e^{-0{,}15t} = 250 - 200 = 50$.'
  - typ: term
    label: 'c) $t(T)$'
    variable: T
    loesung: "ln(230/(250 - T))/0.15"
    bereich: [30, 240]
    fehler:
      - wert: "ln((250 - T)/230)/0.15"
        meldung: 'Vorzeichen prüfen: Aus $e^{-0{,}15t} = \tfrac{250 - T}{230}$ folgt $-0{,}15t = \ln\tfrac{250 - T}{230}$. Das Minus dreht den Bruch um.'
  - typ: text
    label: 'd) Stellungnahme'
    muster: |
      Das stimmt nicht. Die Grenze $250\,°\text{C}$ wird im Modell nie erreicht, denn $230\,e^{-0{,}15t}$ ist nie null. Nach
      $30$ Minuten ist $T(30) = 250 - 230\,e^{-4{,}5} \approx 247{,}4\,°\text{C}$. Das ist praktisch heiß genug, aber nicht genau $250\,°\text{C}$.
hinweise:
  - 'Für b) $250 - 230\,e^{-0{,}15t} = 200$ umformen: $e^{-0{,}15t} = \tfrac{50}{230}$.'
  - 'Für c) dieselben Schritte mit einem allgemeinen $T$ statt $200$. Der Logarithmus befreit die Hochzahl.'
loesung: |
  **a)** Ansatz: beschränktes Wachstum $S - (S - T_0)\,e^{-kt}$ mit der Grenze $S = 250$. $T(0) = 250 - 230 = 20\,°$C, also Raumtemperatur. Für $t \to \infty$ geht $T \to 250\,°$C.
  ---
  **b)** $230\,e^{-0{,}15t} = 50$, also $e^{-0{,}15t} = \tfrac{5}{23}$ und $t = \dfrac{\ln(23/5)}{0{,}15} \approx 10{,}17$ min.
  ---
  **c)** Allgemein: $230\,e^{-0{,}15t} = 250 - T$, also $e^{-0{,}15t} = \tfrac{250 - T}{230}$. Logarithmieren und durch $-0{,}15$ dividieren: $t(T) = \dfrac{\ln\big(230/(250 - T)\big)}{0{,}15}$ für $20 \le T < 250$.
  Die Umkehrfunktion gibt an, wie lange man warten muss, bis der Ofen die Temperatur $T$ erreicht. Probe: $t(200) \approx 10{,}17$ wie in b).
  ---
  **d)** $250\,°$C wird nie genau erreicht: Für $T = 250$ wäre der Nenner $250 - T$ null, die Umkehrfunktion ist dort nicht definiert. Nach $30$ Minuten hat der Ofen etwa $247{,}4\,°$C.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, bevor du weiterliest. Was würdest du jemandem sagen, der wissen will, was eine Funktion ist und wie man mit Wachstum rechnet?
antwort: |
  Eine mögliche Antwort mit drei Aussagen:
  1. Eine Funktion ordnet jeder erlaubten Eingabe genau eine Ausgabe zu. Was in der Klammer von $f(\ldots)$ steht,
     wird eingesetzt. Was außerhalb steht, wird erst mit dem Ergebnis gerechnet. Darum ist $f(x + 1)$ etwas anderes als
     $f(x) + 1$.
  2. Jeder Funktionstyp hat ein Erkennungszeichen: Gerade mit konstanter Änderung, Parabel mit Scheitel, Polynom mit
     Leitterm, rationale Funktion mit Polen und Asymptoten, Exponentialfunktion mit konstantem Faktor.
  3. Bei exponentiellem Wachstum ist der Faktor pro Zeitschritt fest. Den Zeitpunkt, zu dem ein Wert erreicht wird,
     holt man mit dem Logarithmus aus der Hochzahl. Der Logarithmus ist die Umkehrfunktion der Exponentialfunktion.

  Vergleiche mit dem Kasten „Zusammenfassung“ direkt nach dieser Frage. Fehlt dir eine Aussage, lies die zugehörige Lektion noch einmal.
```

:::zusammenfassung
1. **Funktion:** Jede Eingabe aus der Definitionsmenge bekommt **genau eine** Ausgabe. Die Definitionsmenge schränken Nenner ($\ne 0$), gerade Wurzeln ($\ge 0$), Logarithmen ($> 0$) und der Sachzusammenhang ein. Die Wertemenge enthält alle Ausgaben, die wirklich vorkommen.
2. **Eigenschaften:** Monotonie weist man mit $f(x_2) - f(x_1)$ für beliebige $x_1 < x_2$ nach. Gerade heißt $f(-x) = f(x)$, ungerade heißt $f(-x) = -f(x)$, und die meisten Funktionen sind keines von beiden.
3. **Lineare und quadratische Funktionen:** Bei $kx + d$ ist $k$ die konstante Änderung pro Einheit und $d$ der Startwert. Die Scheitelform $a(x - x_S)^2 + y_S$ zeigt den höchsten oder tiefsten Punkt.
4. **Polynome und rationale Funktionen:** Ein Polynom vom Grad $n$ hat höchstens $n$ Nullstellen und verhält sich außen wie sein Leitterm. Bei rationalen Funktionen unterscheidet man Pole und hebbare Lücken. Asymptoten ergeben sich aus dem Gradvergleich oder der Polynomdivision.
5. **Transformationen und Verkettung:** Außen wirkt auf die $y$-Werte wie es dasteht, innen wirkt auf die $x$-Werte umgekehrt. Bei $f(g(x))$ wird $g$ zuerst angewendet.
6. **Umkehrfunktion:** Streng monotone Funktionen sind umkehrbar. Man löst $y = f(x)$ nach $x$ auf, und der Graph wird an $y = x$ gespiegelt. $\sqrt x$ und $\ln x$ sind Umkehrfunktionen von $x^2$ auf $[0, \infty)$ und von $e^x$.
7. **Exponential und Logarithmus:** $a^x$ hat die Variable in der Hochzahl, ist immer positiv und schlägt jede Potenz. Es gilt $a^x = e^{x\ln a}$. Ein Logarithmus ist eine Hochzahl: $\log_a b$ ist die Zahl $x$ mit $a^x = b$.
8. **Wachstumsmodelle:** Linear heißt gleicher Betrag, exponentiell gleicher Faktor $q = 1 \pm \tfrac{p}{100} = e^{\lambda}$. Verdopplungs- und Halbwertszeit sind $\tfrac{\ln 2}{|\lambda|}$. Beschränktes und logistisches Wachstum haben eine Obergrenze.
:::

### Die häufigsten Fehler

Jeder Fehler wird von mindestens einer Aufgabe im Kapitel trainiert. Wenn dir ein Fehler bekannt vorkommt, löse die
genannte Aufgabe noch einmal.

1. **$f(a + 1)$ wie $f(a) + 1$ behandelt.** Was in der Klammer steht, ersetzt jedes $x$. Training: „Einsetzen mit Klammern“ in [4.1 Was ist eine Funktion?](/lernen/mathe3/funktionen/was-ist-eine-funktion) und „Transformationen an einer Wertetabelle“ in [4.7 Graphen verschieben, strecken und spiegeln](/lernen/mathe3/funktionen/graphen-verschieben-strecken-und-spiegeln).
2. **Negative Zahl ohne Klammern eingesetzt.** $-3^2 = -9$, aber $(-3)^2 = 9$. Training: „Einsetzen mit Klammern“ in [4.1 Was ist eine Funktion?](/lernen/mathe3/funktionen/was-ist-eine-funktion).
3. **Eine Bedingung der Definitionsmenge vergessen**, meist den Nenner. Training: „Maximale Definitionsmenge“ in [4.1 Was ist eine Funktion?](/lernen/mathe3/funktionen/was-ist-eine-funktion).
4. **Monotonie mit zwei Funktionswerten „bewiesen“.** Zwei Werte können Monotonie nur widerlegen. Training: „Wo ist der Fehler im Monotonie-Argument?“ in [4.2 Eigenschaften von Funktionen](/lernen/mathe3/funktionen/eigenschaften-von-funktionen).
5. **„Nicht gerade“ für „ungerade“ gehalten.** Training: „Symmetrie mit Rechnung entscheiden“ in [4.2 Eigenschaften von Funktionen](/lernen/mathe3/funktionen/eigenschaften-von-funktionen).
6. **Reihenfolge im Steigungsdreieck gemischt.** Training: „Fehler im Steigungsdreieck finden“ in [4.3 Lineare Funktionen](/lernen/mathe3/funktionen/lineare-funktionen).
7. **Beim quadratischen Ergänzen die Ergänzung nicht mit $a$ multipliziert.** Training: „Scheitelform bei a ungleich 1“ in [4.4 Quadratische Funktionen](/lernen/mathe3/funktionen/quadratische-funktionen).
8. **Rücksubstitution vergessen oder negative $u$ behalten.** Training: „Biquadratisches Polynom“ in [4.5 Potenz- und Polynomfunktionen](/lernen/mathe3/funktionen/potenz-und-polynomfunktionen).
9. **Hebbare Lücke als Nullstelle gezählt** und **Asymptote aus den konstanten Gliedern** bestimmt. Training: „Hebbar oder Pol?“ und „Polstelle und Asymptote“ in [4.6 Rationale Funktionen und Wurzelfunktionen](/lernen/mathe3/funktionen/rationale-funktionen-und-wurzelfunktionen).
10. **Innen in die falsche Richtung verschoben**, etwa $(x + 3)^2$ nach rechts. Training: „Transformationen ablesen“ in [4.7 Graphen verschieben, strecken und spiegeln](/lernen/mathe3/funktionen/graphen-verschieben-strecken-und-spiegeln).
11. **Umkehrfunktion mit dem Kehrwert verwechselt.** Training: „Umkehrfunktion einer linearen Funktion“ und „Wie weit für 25 Euro?“ in [4.8 Verkettung und Umkehrfunktion](/lernen/mathe3/funktionen/verkettung-und-umkehrfunktion).
12. **Beim Betrag den Fallbereich nicht geprüft.** Training: „Eine falsche Lösung finden“ in [4.9 Betragsfunktion und stückweise definierte Funktionen](/lernen/mathe3/funktionen/betragsfunktion-und-stueckweise-definierte-funktionen).
13. **Exponential- wie Potenzfunktion gerechnet**, etwa $2^5 = 25$ oder $3\cdot 2^x = 6^x$. Training: „Werte einer Exponentialfunktion“ und „Fehler beim Zusammenfassen finden“ in [4.10 Exponentialfunktionen](/lernen/mathe3/funktionen/exponentialfunktionen).
14. **Logarithmus einer Summe zerlegt** oder Produkt- mit Potenzregel verwechselt. Training: „Fehler bei einer Logarithmusregel finden“ in [4.11 Logarithmusfunktionen](/lernen/mathe3/funktionen/logarithmusfunktionen).
15. **Prozentsatz statt Faktor** und **$\lambda$ für den Prozentsatz gehalten.** Training: „Prozentsatz und Wachstumskonstante“ und „Wasserlinsen auf einem Teich“ in [4.12 Wachstums- und Zerfallsmodelle](/lernen/mathe3/funktionen/wachstums-und-zerfallsmodelle) sowie die Prüfungsaufgabe „Fische in einem Zuchtteich“.
16. **Beim beschränkten Modell Grenze und Anfangswert vertauscht.** Training: „Parameter eines beschränkten Modells“ in [4.13 Beschränktes und logistisches Wachstum](/lernen/mathe3/funktionen/beschraenktes-und-logistisches-wachstum).
17. **Bei indirekter Proportionalität dieselbe Prozentzahl übernommen.** Training: „Schneller fahren, wie viel Zeit spart man?“ in [4.14 Funktionen mit mehreren Variablen](/lernen/mathe3/funktionen/funktionen-mit-mehreren-variablen-vertiefung).

### Selbstcheck zu den Lernzielen

Schätze für jedes Lernziel ein, wie sicher du bist: **sicher**, **unsicher** oder **noch nicht**. Vergleiche dann mit
deinen Ergebnissen in den Aufgaben. Wo du dich überschätzt hast, lohnt sich eine Wiederholung am meisten.

1. Ich erkenne, ob eine Zuordnung eine Funktion ist, und bestimme Definitions- und Wertemenge.
2. Ich untersuche Nullstellen, Monotonie, Symmetrie und Beschränktheit und begründe sie mit der Definition.
3. Ich stelle lineare und quadratische Funktionen auf, bringe Parabeln in Scheitelform und deute die Parameter.
4. Ich skizziere Potenz-, Wurzel- und Polynomfunktionen und bestimme Nullstellen mit Vielfachheit.
5. Ich unterscheide Pole und hebbare Lücken und bestimme waagrechte und schräge Asymptoten.
6. Ich verschiebe, strecke und spiegle Graphen und rechne mit Beträgen und stückweise definierten Funktionen.
7. Ich bilde und zerlege Verkettungen und berechne Umkehrfunktionen.
8. Ich unterscheide Exponential- von Potenzfunktionen, rechne $a^x$ in $e^{\lambda x}$ um und verwende den Logarithmus als Umkehrfunktion.
9. Ich stelle Wachstumsmodelle auf, berechne Prozentsatz, Verdopplungs- und Halbwertszeit und beurteile das Ergebnis.
10. Ich lese Formeln als Funktionen mehrerer Variablen und sage voraus, wie sich das Ergebnis ändert.

## Mündliche Prüfung

```karten
- id: fu-k-funktion
  frage: Was ist eine Funktion? Gib ein Beispiel und ein Nichtbeispiel.
  antwort: |
    Eine Funktion $f\colon D \to Z$ ordnet **jedem** Element $x$ der Definitionsmenge $D$ **genau ein** Element $f(x)$ zu.
    Verschiedene Eingaben dürfen denselben Wert haben, aber eine Eingabe nie zwei Werte. Beispiel: Jeder Person wird ihr
    Geburtsdatum zugeordnet. Nichtbeispiel: der Kreis $x^2 + y^2 = 4$, denn zu $x = 0$ gehören $y = 2$ und $y = -2$. Am
    Graphen prüft man das mit senkrechten Geraden: Jede darf ihn höchstens einmal schneiden.
  kernpunkte:
    - jede Eingabe bekommt genau eine Ausgabe
    - verschiedene Eingaben dürfen denselben Wert haben
    - Nichtbeispiel Kreis, Senkrechtentest am Graphen
- id: fu-k-definitionsmenge
  frage: Was ist der Unterschied zwischen Definitionsmenge und Wertemenge? Was schränkt die maximale Definitionsmenge ein?
  antwort: |
    Die Definitionsmenge enthält die erlaubten Eingaben, die Wertemenge die Ausgaben, die tatsächlich vorkommen. Bei
    $x^2 + 3$ ist $D = \R$, aber $W = [3, \infty)$. Bei den Termen dieses Kapitels schränken im Reellen drei Dinge ein: Nenner dürfen nicht null sein,
    unter geraden Wurzeln muss eine Zahl $\ge 0$ stehen, und das Argument eines Logarithmus muss positiv sein. In
    Anwendungen kommt der Sachzusammenhang dazu, etwa dass Zeiten nicht negativ sind.
  kernpunkte:
    - D sind die Eingaben, W die tatsächlichen Ausgaben
    - Nenner, gerade Wurzel, Logarithmus
    - Sachzusammenhang schränkt zusätzlich ein
- id: fu-k-einsetzen
  frage: Warum ist f(x + 1) etwas anderes als f(x) + 1? Erkläre es an f(x) = x².
  antwort: |
    Bei $f(x + 1)$ wird zuerst die Eingabe um $1$ erhöht, dann rechnet $f$. Bei $f(x) + 1$ rechnet $f$ zuerst, und das
    Ergebnis wird um $1$ erhöht. Für $f(x) = x^2$ ist $f(x + 1) = (x + 1)^2 = x^2 + 2x + 1$, aber $f(x) + 1 = x^2 + 1$. Am
    Graphen verschiebt $f(x + 1)$ um $1$ nach links, $f(x) + 1$ um $1$ nach oben. Merksatz: Innen wirkt auf die $x$-Werte
    und umgekehrt, außen wirkt auf die $y$-Werte wie es dasteht.
  kernpunkte:
    - innen wird die Eingabe verändert, außen das Ergebnis
    - Rechnung mit x² zeigt verschiedene Terme
    - links verschoben gegen nach oben verschoben
- id: fu-k-monotonie
  frage: Wann heißt eine Funktion streng monoton steigend, und wie weist man das nach? Ist 1/x monoton fallend?
  antwort: |
    Wenn für alle $x_1 < x_2$ im betrachteten Intervall $f(x_1) < f(x_2)$ gilt. Nachweis: Für beliebige $x_1 < x_2$ zeigt man,
    dass $f(x_2) - f(x_1) > 0$ ist. Zwei einzelne Werte genügen nicht. $\tfrac1x$ fällt auf $(0, \infty)$ und auf
    $(-\infty, 0)$, aber nicht auf $\R\setminus\{0\}$: Es ist $-1 < 1$, aber $f(-1) = -1 < 1 = f(1)$. Monotonie gibt man
    darum immer zusammen mit einem Intervall an.
  kernpunkte:
    - Definition mit beliebigen x₁ < x₂
    - Nachweis über das Vorzeichen der Differenz
    - Gegenbeispiel 1/x auf ℝ ohne 0
- id: fu-k-symmetrie
  frage: Was bedeutet gerade und ungerade? Gib eine Funktion an, die keines von beiden ist.
  antwort: |
    Gerade heißt $f(-x) = f(x)$, der Graph ist achsensymmetrisch zur $y$-Achse, etwa $x^2$ oder $x^4 - 4x^2 + 1$. Ungerade
    heißt $f(-x) = -f(x)$, der Graph ist punktsymmetrisch zum Ursprung, etwa $x^3$. Keines von beiden ist $x^2 + x$, denn
    $f(1) = 2$ und $f(-1) = 0$. Zum Widerlegen genügt eine Stelle. „Nicht gerade“ heißt also nicht automatisch „ungerade“.
  kernpunkte:
    - gerade f(−x) = f(x), Achsensymmetrie
    - ungerade f(−x) = −f(x), Punktsymmetrie
    - Gegenbeispiel x² + x
- id: fu-k-linear
  frage: Was bedeuten k und d bei f(x) = kx + d, und was zeichnet lineare Funktionen aus?
  antwort: |
    $d = f(0)$ ist der Startwert, der Schnitt mit der $y$-Achse. $k$ ist die Änderung von $f(x)$, wenn $x$ um $1$ wächst.
    Allgemein ist $k = \tfrac{\Delta y}{\Delta x}$ für jedes Paar von Stellen gleich. Diese konstante Änderungsrate zeichnet
    lineare Funktionen aus. In Anwendungen hat $k$ die Einheit „Einheit von $y$ pro Einheit von $x$“, etwa Euro pro Minute.
  kernpunkte:
    - d ist der Startwert f(0)
    - k ist die konstante Änderung pro Einheit
    - Einheiten zur Deutung im Sachzusammenhang
- id: fu-k-scheitelform
  frage: Wie bringt man eine quadratische Funktion auf Scheitelform, und was liest man daraus ab?
  antwort: |
    Durch quadratisches Ergänzen: $a$ aus den Gliedern mit $x$ herausheben, das Quadrat der Hälfte des Koeffizienten von
    $x$ addieren und subtrahieren und die Ergänzung beim Auflösen mit $a$ multiplizieren. Aus $a(x - x_S)^2 + y_S$ liest man
    den Scheitel $(x_S \mid y_S)$ ab. Das Vorzeichen von $a$ sagt, ob er Hoch- oder Tiefpunkt ist, und $|a|$ sagt, ob die
    Parabel schmäler oder breiter als die Normalparabel ist.
  kernpunkte:
    - quadratisches Ergänzen mit der Hälfte des Koeffizienten
    - Scheitel ablesen, Vorzeichen in der Klammer beachten
    - a entscheidet über Öffnung und Breite
- id: fu-k-polynom
  frage: Wie viele Nullstellen kann ein Polynom vom Grad n haben, und warum hat eines mit ungeradem Grad immer mindestens eine? Wie hängt das mit Kapitel 12 zusammen?
  antwort: |
    Höchstens $n$, weil man zu jeder Nullstelle einen Linearfaktor abspalten kann und der Grad dabei um $1$ sinkt. Bei
    ungeradem Grad bestimmt der Leitterm, dass $f$ für $x \to -\infty$ und $x \to +\infty$ verschiedene Vorzeichen hat. Ein
    Polynom ist stetig, sein Graph hat keine Sprünge. Nach dem Nullstellensatz aus
    [12.11 Zwischenwertsatz, Nullstellensatz und Bisektion](/lernen/mathe3/grenzwerte-stetigkeit/zwischenwertsatz-nullstellensatz-und-bisektion)
    muss es deshalb dazwischen die $x$-Achse treffen.
  kernpunkte:
    - Abspalten von Linearfaktoren senkt den Grad
    - Leitterm bestimmt das Verhalten außen
    - Nullstellensatz aus Kapitel 12
- id: fu-k-pol-hebbar
  frage: Was ist der Unterschied zwischen einer Polstelle und einer hebbaren Lücke?
  antwort: |
    Beides sind Nullstellen des Nenners einer rationalen Funktion. Man kürzt zuerst gemeinsame Linearfaktoren. Bleibt die
    Stelle Nullstelle des Nenners, ist sie eine Polstelle mit senkrechter Asymptote, und $|f(x)|$ wird beliebig groß.
    Verschwindet sie durch das Kürzen, ist sie hebbar: Dem Graphen fehlt nur ein Punkt. Bei $\tfrac{x^2 - 4}{x - 2}$ ist $2$
    hebbar, der Graph ist die Gerade $y = x + 2$ ohne den Punkt $(2 \mid 4)$. Eine hebbare Lücke ist nie eine Nullstelle.
  kernpunkte:
    - Nenner null, zuerst kürzen
    - Pol bleibt im Nenner, senkrechte Asymptote
    - hebbar fehlt nur ein Punkt, keine Nullstelle
- id: fu-k-asymptote
  frage: Wie bestimmt man die Asymptote einer rationalen Funktion für große |x|?
  antwort: |
    Man vergleicht Zählergrad $m$ und Nennergrad $n$. Bei $m < n$ ist $y = 0$ die Asymptote. Bei $m = n$ ist es der
    Quotient der Leitkoeffizienten. Bei $m = n + 1$ gibt es eine schräge Asymptote, die man durch Polynomdivision findet:
    Der ganzzahlige Teil ist die Asymptote, der Rest durch den Nenner wird beliebig klein. Bei $\tfrac{2x^2 + 3x - 1}{x + 2}$
    ist das $y = 2x - 1$.
  kernpunkte:
    - Gradvergleich von Zähler und Nenner
    - gleicher Grad ergibt Quotient der Leitkoeffizienten
    - schräge Asymptote durch Polynomdivision
- id: fu-k-verschieben
  frage: Warum verschiebt f(x − 3) den Graphen nach rechts und nicht nach links?
  antwort: |
    $g(x) = f(x - 3)$ nimmt an der Stelle $x$ den Wert an, den $f$ an der Stelle $x - 3$ hatte, also drei Einheiten weiter
    links. Was $f$ bei $0$ tut, tut $g$ erst bei $x = 3$, denn dort ist die Eingabe $x - 3 = 0$. Der ganze Graph kommt um $3$
    später, er wandert nach rechts. Allgemein wirkt eine Änderung innen an der Eingabe umgekehrt auf die $x$-Richtung.
  kernpunkte:
    - g an der Stelle x hat den Wert von f an der Stelle x − 3
    - Kontrolle dort, wo die Klammer null ist
    - innen wirkt umgekehrt
- id: fu-k-betrag
  frage: Wie schreibt man |x| ohne Betragsstriche, und was hat die Betragsfunktion an der Stelle 0 Besonderes? Wo braucht man das später?
  antwort: |
    $|x| = x$ für $x \ge 0$ und $|x| = -x$ für $x < 0$. Für negative $x$ ist $-x$ positiv, der Betrag ist der Abstand zur
    Null. Der Graph ist ein V mit Spitze im Ursprung. Links hat er die Steigung $-1$, rechts die Steigung $1$. Darum hat er
    bei $0$ einen Knick und keine eindeutige Tangente. In
    [13.2 Einseitige Ableitungen](/lernen/mathe3/differenzierbarkeit/einseitige-ableitungen-knick-senkrechte-tangente-oszillation) ist $|x|$ das Standardbeispiel für eine Funktion, die
    stetig, aber nicht differenzierbar ist.
  kernpunkte:
    - stückweise Definition mit −x für negative x
    - Knick bei 0, Steigungen −1 und 1
    - Beispiel für stetig, aber nicht differenzierbar in Kapitel 13
- id: fu-k-umkehr
  frage: Wann besitzt eine Funktion eine Umkehrfunktion? Warum ist √x die Umkehrfunktion von x², obwohl x² auf ℝ nicht umkehrbar ist?
  antwort: |
    Wenn sie injektiv ist, also verschiedene Eingaben immer verschiedene Ausgaben haben. Hinreichend ist strenge Monotonie.
    Die Umkehrfunktion vertauscht Eingabe und Ausgabe, ihr Graph ist das Spiegelbild an $y = x$. $x^2$ ist auf $\R$ nicht
    injektiv, denn $(-2)^2 = 2^2$. Auf $[0, \infty)$ ist $x^2$ streng steigend, und dort ist $\sqrt x$ die Umkehrfunktion.
    Deshalb ist $\sqrt x$ nie negativ, und es gilt $\sqrt{x^2} = |x|$, nicht $x$.
  kernpunkte:
    - injektiv, hinreichend streng monoton
    - Spiegelung an y = x, D und W vertauscht
    - x² erst auf [0, ∞) umkehrbar, √(x²) = |x|
- id: fu-k-verkettung
  frage: Was ist eine Verkettung, und warum ist f∘g im Allgemeinen nicht g∘f? Wofür braucht man das in Kapitel 9?
  antwort: |
    Bei $(f \circ g)(x) = f(g(x))$ wird zuerst die innere Funktion $g$ angewendet und auf ihr Ergebnis die äußere Funktion
    $f$. Die Reihenfolge zählt: Für $f(x) = x^2 + 1$ und $g(x) = 2x - 3$ ist $f(g(2)) = 2$, aber $g(f(2)) = 7$. In der
    Differentialrechnung leitet die Kettenregel genau solche Verkettungen ab. Dafür muss man innere und äußere Funktion sicher
    erkennen, etwa bei $e^{-0{,}2t}$.
  kernpunkte:
    - innere Funktion zuerst, dann äußere
    - Gegenbeispiel zeigt, dass die Reihenfolge zählt
    - Kettenregel in Kapitel 9
- id: fu-k-exponential
  frage: Was unterscheidet eine Exponentialfunktion von einer Potenzfunktion, und warum verlangt man eine Basis a > 0?
  antwort: |
    Bei der Potenzfunktion $x^n$ steht die Variable in der Basis, bei der Exponentialfunktion $a^x$ in der Hochzahl. $a^x$
    wird bei jedem Schritt um $1$ mit demselben Faktor $a$ multipliziert und überholt deshalb für $a > 1$ jede Potenz. Für
    negative Basen ist $a^x$ nicht für alle $x$ definiert, etwa $(-4)^{1/2}$. Für $a = 1$ wäre die Funktion konstant. $a^x$
    hat keine Nullstelle, weil $a^x\cdot a^{-x} = 1$ ist.
  kernpunkte:
    - Variable in der Hochzahl statt in der Basis
    - fester Faktor pro Schritt, überholt jede Potenz
    - a > 0 und a ≠ 1, keine Nullstelle
- id: fu-k-logarithmus
  frage: Was ist der natürliche Logarithmus, und warum ist er nur für positive Zahlen definiert?
  antwort: |
    $\ln y$ ist die Hochzahl $x$ mit $e^x = y$, also die Umkehrfunktion der $e$-Funktion. Weil $e^x$ nur positive Werte annimmt,
    gibt es nur für $y > 0$ eine passende Hochzahl. Der Graph ist das Spiegelbild von $e^x$ an $y = x$: Nullstelle bei $1$,
    senkrechte Asymptote $x = 0$. Man braucht ihn, um Hochzahlen aus Exponentialgleichungen zu befreien.
  kernpunkte:
    - Logarithmus ist eine Hochzahl
    - Umkehrfunktion von eˣ, Wertemenge von eˣ ist (0, ∞)
    - Werkzeug zum Lösen von Exponentialgleichungen
- id: fu-k-lambda
  frage: Bei N(t) = N₀·e^(0,07t) – nimmt der Bestand um 7 % pro Zeiteinheit zu?
  antwort: |
    Nein. Der Faktor pro Zeiteinheit ist $e^{0{,}07} \approx 1{,}0725$, die Zunahme also $7{,}25\,\%$. Allgemein gilt
    $q = e^\lambda$ und $\lambda = \ln q$, der Prozentsatz ist $q - 1$. Für kleine $\lambda$ sind beide Zahlen fast gleich,
    weil $e^\lambda \approx 1 + \lambda$ ist. $\lambda$ beschreibt das kontinuierliche Wachstum, $q - 1$ das tatsächliche
    Wachstum pro Zeiteinheit.
  kernpunkte:
    - Faktor ist e hoch λ
    - λ = ln q, Prozentsatz ist q − 1
    - kontinuierliche gegen tatsächliche Rate
- id: fu-k-verdopplung
  frage: Warum ist die Verdopplungszeit beim exponentiellen Wachstum konstant, beim linearen aber nicht?
  antwort: |
    Aus $N_0 e^{\lambda(t + T)} = 2N_0 e^{\lambda t}$ kürzen sich $N_0$ und $e^{\lambda t}$ weg. Es bleibt $e^{\lambda T} = 2$,
    also $T = \tfrac{\ln 2}{\lambda}$, unabhängig vom Startzeitpunkt und vom Anfangsbestand. Bei linearem Wachstum kommt pro
    Zeitschritt ein fester Betrag dazu. Um einen größeren Bestand zu verdoppeln, braucht man mehr Zuwachs, also mehr Zeit.
  kernpunkte:
    - Ansatz N(t + T) = 2N(t)
    - N₀ und t kürzen sich weg
    - linear dauert jede Verdopplung länger
- id: fu-k-modelle
  frage: Wie unterscheiden sich exponentielles, beschränktes und logistisches Wachstum, und wann nimmt man welches?
  antwort: |
    Exponentiell wächst der Bestand um einen festen Prozentsatz und ohne Grenze. Beim beschränkten Wachstum
    $S - (S - N_0)e^{-kt}$ nimmt der Abstand zur Grenze $S$ exponentiell ab. Der Zuwachs ist von Anfang an am größten, etwa
    beim Abkühlen. Logistisches Wachstum beginnt fast exponentiell und wird später gebremst. Der Graph ist S-förmig, mit dem
    stärksten Zuwachs bei $\tfrac S2$. Das passt zu Populationen mit begrenztem Lebensraum.
  kernpunkte:
    - exponentiell ohne Grenze
    - beschränkt, Abstand zur Grenze nimmt exponentiell ab
    - logistisch S-förmig, stärkster Zuwachs bei S/2
- id: fu-k-mehrvar
  frage: Wie ändert sich das Volumen V = πr²h, wenn man den Radius oder die Höhe verdoppelt? Was lernt man daraus über Formeln mit mehreren Variablen?
  antwort: |
    Doppelte Höhe ergibt doppeltes Volumen, weil $h$ ohne Hochzahl vorkommt. Doppelter Radius ergibt das vierfache Volumen,
    weil $r$ im Quadrat steht. Man hält alle Variablen bis auf eine fest und erhält eine gewöhnliche Funktion einer Variablen.
    Die Hochzahl der Variablen bestimmt, mit welchem Faktor sich das Ergebnis ändert. Steht sie im Nenner, wie $v$ bei
    $t = \tfrac sv$, ist die Abhängigkeit indirekt proportional.
  kernpunkte:
    - andere Variablen festhalten
    - Hochzahl bestimmt den Faktor
    - direkte und indirekte Proportionalität
```
