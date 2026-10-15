---
nummer: 16
titel: Wahrscheinlichkeitsrechnung
kurz: Ereignisse, Laplace, Kombinatorik mit Entscheidungsbaum, Baumdiagramme, bedingte Wahrscheinlichkeit und Bayes, Zufallsvariablen sowie Binomial-, hypergeometrische und Normalverteilung.
teil: B
stunden: 20
pruefungsgewicht: 3
voraussetzungen: [zahlen, gleichungen, funktionen, folgen-reihen, integralrechnung]
lernziele:
  - Ereignisse als Mengen beschreiben und Wahrscheinlichkeiten mit Gegenereignis, Additionssatz und Laplace-Formel berechnen
  - für eine Zählfrage mit dem Entscheidungsbaum das passende Zählverfahren wählen und damit Anzahlen und Laplace-Wahrscheinlichkeiten berechnen
  - mehrstufige Zufallsexperimente mit Baumdiagramm und Pfadregeln auswerten und „mindestens einmal“ sowie „wie oft mindestens“ über das Gegenereignis lösen
  - bedingte Wahrscheinlichkeiten aus Vierfeldertafel und Baum berechnen, P(B | A) von P(A | B) unterscheiden und Unabhängigkeit rechnerisch prüfen
  - mit der totalen Wahrscheinlichkeit und dem Satz von Bayes einen Baum „umdrehen“ und das Ergebnis mit natürlichen Häufigkeiten deuten
  - Erwartungswert, Varianz und Standardabweichung einer diskreten Zufallsvariablen berechnen, deuten und auf lineare Transformationen und Summen anwenden
  - erkennen, wann eine Binomialverteilung vorliegt, und Wahrscheinlichkeiten für „genau“, „höchstens“, „mindestens“ und „mehr als“ sicher berechnen
  - Ziehen ohne Zurücklegen mit der hypergeometrischen Verteilung und Wartezeiten mit der geometrischen Verteilung berechnen und beide vom Binomialmodell abgrenzen
  - bei stetigen Zufallsvariablen Wahrscheinlichkeiten als Flächen unter einer Dichte berechnen und normalverteilte Wahrscheinlichkeiten und Grenzen durch Standardisieren bestimmen
  - die Binomialverteilung mit Stetigkeitskorrektur durch die Normalverteilung nähern und Streubereiche (Prognoseintervalle) angeben
---

**Worum geht es?** Wahrscheinlichkeitsrechnung beschreibt mit Zahlen, wie sicher etwas eintritt, das man
nicht vorhersagen kann. Ein Würfelwurf, ein defektes Bauteil oder ein positiver Test sind solche Fälle.
Im Einzelfall weißt du nie, was passiert. Über viele Fälle hinweg zeigen sich aber feste Muster, und
genau diese Muster lernst du hier zu berechnen.

**Was kommt in der Prüfung?** In zwei der drei Musterprüfungen für Mathematik 3 steht eine
Wahrscheinlichkeitsaufgabe, auch in der von Prof. Schranz-Kirlinger, die derzeit prüft. Typisch sind zwei Arten:

- **Zählen:** Auf wie viele Arten kann man eine Auswahl treffen? Dafür brauchst du die Kombinatorik und den Entscheidungsbaum „Welches Zählverfahren?“.
- **Wiederholte Versuche:** Jemand rät bei einem Test oder würfelt mehrmals. Gefragt ist „genau“, „höchstens“, „mindestens“ oder „mehr als“ eine bestimmte Anzahl. Dafür brauchst du die Binomialverteilung.

Beide Aufgabenarten sind in wenigen Minuten lösbar, wenn du sicher erkennst, welches Modell passt.
In der mündlichen Prüfung wirst du außerdem gefragt, *warum* eine Formel gilt. Deshalb leiten wir
jede Formel her, statt sie nur hinzuschreiben.

**Wozu brauchst du das später?** In der Informatik stecken diese Begriffe in randomisierten
Algorithmen, in Hashtabellen, in Spamfiltern, in der Zuverlässigkeit von Servern und im maschinellen
Lernen. Die beschreibende Statistik (Mittelwert, Streuung, Regression) folgt in
[Kapitel 17](/lernen/mathe3/statistik).

:::vorwissen
Du brauchst aus früheren Kapiteln:

- **Bruchrechnen und Prozent** aus Kapitel 1 ([Bruchrechnen](/lernen/mathe3/zahlen/bruchrechnen), [Prozentrechnung](/lernen/mathe3/zahlen/prozentrechnung)): Wahrscheinlichkeiten sind Brüche, Dezimalzahlen oder Prozentangaben.
- **Potenzen und Logarithmen** aus Kapitel 1 ([Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln), [Logarithmen](/lernen/mathe3/zahlen/logarithmen)) und Exponentialungleichungen aus [Kapitel 2, Exponential- und Logarithmusgleichungen](/lernen/mathe3/gleichungen/exponential-und-logarithmusgleichungen): Damit beantwortest du Fragen wie „Wie oft muss man mindestens würfeln?“.
- **Das Summenzeichen** aus [Kapitel 8, Das Summenzeichen](/lernen/mathe3/folgen-reihen/das-summenzeichen): Erwartungswerte sind Summen.
- **Bestimmte Integrale** aus [Kapitel 10, Das bestimmte Integral als Flächenbilanz](/lernen/mathe3/integralrechnung/das-bestimmte-integral-als-flaechenbilanz): Bei stetigen Größen sind Wahrscheinlichkeiten Flächen.

Die folgenden sechs Fragen zeigen dir, ob du diese Werkzeuge noch sicher beherrschst. Wenn eine Frage
nicht klappt, wiederhole zuerst den verlinkten Abschnitt.
:::

```aufgabe
id: wk-ein-bruch
titel: Brüche addieren
niveau: 1
art: check
angabe: |
  Berechne $\tfrac38 + \tfrac16$ und gib das Ergebnis als vollständig gekürzten Bruch ein.
  (Wiederholung: [Kapitel 1, Abschnitt „Bruchrechnen“](/lernen/mathe3/zahlen/bruchrechnen))
teile:
  - typ: zahl
    loesung: "3/8 + 1/6"
    anzeige: '\tfrac{13}{24}'
    fehler:
      - wert: "4/14"
        meldung: |
          Du hast Zähler und Nenner einzeln addiert. Brüche addiert man erst, wenn sie denselben Nenner haben.
          Suche das kleinste gemeinsame Vielfache von $8$ und $6$.
loesung: |
  Gemeinsamer Nenner ist $24$, denn $24$ ist das kleinste gemeinsame Vielfache von $8$ und $6$.
  ---
  $\tfrac38 = \tfrac{9}{24}$ und $\tfrac16 = \tfrac{4}{24}$, also $\tfrac{9}{24} + \tfrac{4}{24} = \tfrac{13}{24}$.
```

```aufgabe
id: wk-ein-prozent
titel: Prozent von Prozent
niveau: 1
art: check
angabe: |
  $40\,\%$ der Kundschaft eines Shops bestellen per App. Davon zahlen $30\,\%$ mit Karte.
  Welcher Anteil **aller** Kundinnen und Kunden bestellt per App und zahlt mit Karte? Gib eine Dezimalzahl an.
  (Wiederholung: [Kapitel 1, Abschnitt „Prozentrechnung“](/lernen/mathe3/zahlen/prozentrechnung))
teile:
  - typ: zahl
    loesung: "0.4*0.3"
    anzeige: '0{,}12'
    fehler:
      - wert: "0.7"
        meldung: |
          Du hast die Prozentsätze addiert. „$30\,\%$ **von** $40\,\%$“ heißt multiplizieren:
          Man nimmt einen Anteil von einem Anteil.
loesung: |
  „$30\,\%$ von den $40\,\%$“ bedeutet: Anteil vom Anteil, also multiplizieren.
  ---
  $0{,}4 \cdot 0{,}3 = 0{,}12$. Das sind $12\,\%$ aller Kundinnen und Kunden.
```

```aufgabe
id: wk-ein-potenz
titel: Potenz einer Dezimalzahl
niveau: 1
art: check
angabe: |
  Berechne $0{,}9^3$. (Wiederholung: [Kapitel 1, Abschnitt „Potenzen und Wurzeln“](/lernen/mathe3/zahlen/potenzen-und-wurzeln))
teile:
  - typ: zahl
    loesung: "0.9^3"
    anzeige: '0{,}729'
    fehler:
      - wert: "2.7"
        meldung: Du hast $0{,}9 \cdot 3$ gerechnet. Die Hochzahl $3$ bedeutet „dreimal mit sich selbst multiplizieren“.
loesung: |
  $0{,}9^3 = 0{,}9 \cdot 0{,}9 \cdot 0{,}9$.
  ---
  $0{,}9 \cdot 0{,}9 = 0{,}81$ und $0{,}81 \cdot 0{,}9 = 0{,}729$.
```

```aufgabe
id: wk-ein-ungleichung
titel: Exponentialungleichung
niveau: 1
art: check
angabe: |
  Welche ist die kleinste natürliche Zahl $n$ mit $0{,}5^n \le 0{,}01$?
  (Wiederholung: [Kapitel 2, Abschnitt „Exponential- und Logarithmusgleichungen“](/lernen/mathe3/gleichungen/exponential-und-logarithmusgleichungen))
teile:
  - typ: zahl
    loesung: "ceil(ln(0.01)/ln(0.5))"
    fehler:
      - wert: "6"
        meldung: |
          Du hast abgerundet. $\tfrac{\ln 0{,}01}{\ln 0{,}5} \approx 6{,}64$, und $n = 6$ erfüllt die Ungleichung noch nicht:
          $0{,}5^6 \approx 0{,}0156 > 0{,}01$. Hier muss man aufrunden.
loesung: |
  Logarithmieren: $n \cdot \ln 0{,}5 \le \ln 0{,}01$. Weil $\ln 0{,}5$ negativ ist, dreht sich beim Dividieren das Zeichen um.
  ---
  $n \ge \tfrac{\ln 0{,}01}{\ln 0{,}5} \approx 6{,}64$. Die kleinste natürliche Zahl ist $n = 7$.
  Probe: $0{,}5^7 \approx 0{,}0078 \le 0{,}01$.
```

```aufgabe
id: wk-ein-summe
titel: Summenzeichen
niveau: 1
art: check
angabe: |
  Berechne $\displaystyle\sum_{k=1}^{4} k^2$.
  (Wiederholung: [Kapitel 8, Abschnitt „Das Summenzeichen“](/lernen/mathe3/folgen-reihen/das-summenzeichen))
teile:
  - typ: zahl
    loesung: "1 + 4 + 9 + 16"
    fehler:
      - wert: "100"
        meldung: Du hast erst summiert und dann quadriert, also $(1 + 2 + 3 + 4)^2$. Das Quadrat gehört zu jedem einzelnen Summanden.
loesung: |
  Für $k = 1, 2, 3, 4$ setzt man ein und addiert: $1^2 + 2^2 + 3^2 + 4^2$.
  ---
  $1 + 4 + 9 + 16 = 30$.
```

```aufgabe
id: wk-ein-integral
titel: Bestimmtes Integral
niveau: 1
art: check
angabe: |
  Berechne $\displaystyle\int_0^2 \tfrac{x}{2}\,\dd x$.
  (Wiederholung: [Kapitel 10, Abschnitt „Der Hauptsatz der Differential- und Integralrechnung“](/lernen/mathe3/integralrechnung/der-hauptsatz-der-differential-und-integralrechnung))
teile:
  - typ: zahl
    loesung: "integral(\"x/2\", 0, 2)"
    anzeige: '1'
    fehler:
      - wert: "2"
        meldung: Du hast vermutlich $\int_0^2 x\,\dd x$ berechnet und den Faktor $\tfrac12$ vergessen.
loesung: |
  Eine Stammfunktion von $\tfrac{x}{2}$ ist $F(x) = \tfrac{x^2}{4}$, denn $F'(x) = \tfrac{2x}{4} = \tfrac{x}{2}$.
  ---
  $F(2) - F(0) = \tfrac44 - 0 = 1$.
```

## Zufallsexperimente, Ereignisse und die Grundregeln

```aufgabe
id: wk-ereignis-check-menge
titel: Durchschnitt zweier Mengen
niveau: 1
art: check
angabe: |
  Welche Zahlen liegen in **beiden** Mengen $\{1, 2, 3, 4\}$ und $\{3, 4, 5, 6\}$?
  (Mengen kennst du aus [Kapitel 1, Abschnitt „Mengen und Aussagen“](/lernen/mathe3/zahlen/mengen-und-aussagen-die-sprache-der-mathematik).)
teile:
  - typ: menge
    loesung: [3, 4]
    fehler:
      - wert: [1, 2, 3, 4, 5, 6]
        meldung: Das sind alle Zahlen, die in *mindestens einer* Menge liegen. Gefragt sind die Zahlen, die in *beiden* liegen.
loesung: |
  Gesucht sind die gemeinsamen Elemente.
  ---
  Nur $3$ und $4$ kommen in beiden Mengen vor.
```

In diesem Abschnitt legst du das Fundament: Was genau ist ein „Ereignis“, und welche Regeln gelten für
Wahrscheinlichkeiten? Alles Weitere im Kapitel baut darauf auf.

### Zufallsexperiment und Ergebnisraum

Ein **Zufallsexperiment** ist ein Vorgang, dessen Ausgang du nicht vorhersagen kannst, obwohl du alle
Bedingungen kennst. Man kann ihn zumindest in Gedanken beliebig oft unter gleichen Bedingungen
wiederholen. Beispiele sind ein Würfelwurf, ein Münzwurf oder das zufällige Ziehen eines Bauteils aus
einer Produktion.

**Kein** Zufallsexperiment ist es, Wasser auf Meereshöhe zu erhitzen und die Siedetemperatur abzulesen.
Das Ergebnis ist immer ungefähr $100\,^\circ\text{C}$, es ist vorhersagbar.

:::definition[Ergebnisraum und Ereignis]
Die Menge aller möglichen Ergebnisse eines Zufallsexperiments heißt **Ergebnisraum**. Man schreibt dafür
den griechischen Buchstaben $\Omega$ (sprich „Omega“).

Jede Teilmenge $A$ von $\Omega$ heißt **Ereignis**. Man schreibt $A \subseteq \Omega$ und liest „$A$ ist
Teilmenge von $\Omega$“. Das Ereignis $A$ **tritt ein**, wenn das Ergebnis des Experiments in $A$ liegt.

- Ein Ereignis mit genau einem Element, etwa $\{3\}$, heißt **Elementarereignis**.
- $\Omega$ selbst heißt **sicheres Ereignis**, denn es tritt immer ein.
- Die leere Menge $\emptyset$ heißt **unmögliches Ereignis**, denn sie tritt nie ein.
- $\bar A = \Omega \setminus A$ heißt **Gegenereignis** von $A$. Man liest „$A$ quer“. Es enthält alle Ergebnisse, die nicht in $A$ liegen.
:::

:::beispiel[Ereignisse beim Würfeln]
Beim Werfen eines Würfels ist $\Omega = \{1, 2, 3, 4, 5, 6\}$.

- „Gerade Augenzahl“ ist das Ereignis $A = \{2, 4, 6\}$.
- „Mindestens 5“ ist das Ereignis $B = \{5, 6\}$.
- Das Gegenereignis von $B$ ist $\bar B = \{1, 2, 3, 4\}$, in Worten „höchstens 4“.
- „Augenzahl 7“ ist das unmögliche Ereignis $\emptyset$, denn keine Seite zeigt 7.

Fällt eine 6, so treten $A$ und $B$ gleichzeitig ein. Fällt eine 3, tritt keines von beiden ein.
:::

### Mengenoperationen als Sprache

Weil Ereignisse Mengen sind, wird aus jedem „und“, „oder“ und „nicht“ eine Mengenoperation. Die
Tabelle verwendet $A = \{2, 4, 6\}$ und $B = \{5, 6\}$ aus dem Beispiel.

|In Worten|Als Menge|Beim Würfel|
|---|---|---|
|$A$ oder $B$, also mindestens eines|$A \cup B$ (Vereinigung)|$\{2, 4, 5, 6\}$|
|$A$ und $B$, also beide|$A \cap B$ (Durchschnitt)|$\{6\}$|
|nicht $A$|$\bar A$|$\{1, 3, 5\}$|
|$A$, aber nicht $B$|$A \cap \bar B$|$\{2, 4\}$|
|weder $A$ noch $B$|$\bar A \cap \bar B$|$\{1, 3\}$|

Zwei Ereignisse mit $A \cap B = \emptyset$ heißen **unvereinbar** (auch **disjunkt**). Sie können nicht
gleichzeitig eintreten. Beispiel: „Augenzahl 1“ und „Augenzahl 2“.

:::satz[Regeln von De Morgan]
Für alle Ereignisse $A$ und $B$ gilt
$$\overline{A \cup B} = \bar A \cap \bar B \qquad \text{und} \qquad \overline{A \cap B} = \bar A \cup \bar B.$$
:::

In Worten: „Nicht (A oder B)“ bedeutet „weder A noch B“. Und „nicht (A und B)“ bedeutet „mindestens
eines von beiden tritt nicht ein“. Prüfe die erste Regel am Würfel: $A \cup B = \{2, 4, 5, 6\}$, das
Gegenereignis ist $\{1, 3\}$. Das ist genau die Zeile „weder $A$ noch $B$“ in der Tabelle.

```aufgabe
id: wk-ereignisse-wuerfel
titel: Ereignisse am Glücksrad
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Ein Glücksrad hat zehn gleich große Felder mit den Zahlen $1$ bis $10$. Es sei $A$ = „Primzahl“ und
  $B$ = „größer als 5“. Gib die Ereignisse als Mengen an (Elemente mit Strichpunkt getrennt).
teile:
  - typ: menge
    label: '$A \cap B$'
    loesung: [7]
    fehler:
      - wert: [2, 3, 5, 6, 7, 8, 9, 10]
        meldung: Das ist die Vereinigung $A \cup B$ („mindestens eines“). Der Durchschnitt $A \cap B$ enthält nur Zahlen, die **beide** Bedingungen erfüllen.
  - typ: menge
    label: '$A \cup B$'
    loesung: [2, 3, 5, 6, 7, 8, 9, 10]
    fehler:
      - wert: [7]
        meldung: Das ist der Durchschnitt („beide“). Die Vereinigung enthält jede Zahl, die **mindestens eine** Bedingung erfüllt.
      - wert: [1, 2, 3, 5, 6, 7, 8, 9, 10]
        meldung: Ist $1$ eine Primzahl? Eine Primzahl hat genau zwei verschiedene Teiler. Die $1$ hat nur einen.
  - typ: menge
    label: '$\bar A \cap B$'
    loesung: [6, 8, 9, 10]
    fehler:
      - wert: [1, 4, 6, 8, 9, 10]
        meldung: Das ist nur $\bar A$. Du musst davon noch die Zahlen behalten, die auch in $B$ liegen.
hinweise:
  - 'Schreib zuerst $A$ und $B$ als Mengen auf. Primzahlen bis 10 sind $2, 3, 5, 7$.'
loesung: |
  Zuerst die Ereignisse als Mengen: $A = \{2, 3, 5, 7\}$ und $B = \{6, 7, 8, 9, 10\}$.
  ---
  $A \cap B$ enthält die gemeinsamen Elemente: $\{7\}$.
  $A \cup B$ enthält alle Elemente, die in mindestens einer Menge liegen: $\{2, 3, 5, 6, 7, 8, 9, 10\}$.
  ---
  $\bar A = \{1, 4, 6, 8, 9, 10\}$ („keine Primzahl“). Davon liegen in $B$: $\bar A \cap B = \{6, 8, 9, 10\}$.
  Kontrolle in Worten: größer als 5, aber keine Primzahl. Das passt.
```

### Was ist eine Wahrscheinlichkeit?

Eine **Wahrscheinlichkeit** $P(A)$ ist eine Zahl zwischen 0 und 1. Sie sagt, wie sicher das Ereignis $A$
eintritt. $P(A) = 0$ heißt „tritt praktisch nie ein“, $P(A) = 1$ heißt „tritt praktisch sicher ein“. Der
Buchstabe $P$ kommt vom lateinischen *probabilitas*.

Woher kommen die Zahlen? Es gibt drei Zugänge, die sich ergänzen:

1. **Klassisch (Laplace):** Alle Ergebnisse sind gleich wahrscheinlich. Dann zählt man günstige und mögliche Fälle. Das ist Thema von [16.2 Laplace-Wahrscheinlichkeit und relative Häufigkeit](/lernen/mathe3/wahrscheinlichkeit/laplace-wahrscheinlichkeit-und-relative-haeufigkeit).
2. **Über Häufigkeiten:** $P(A)$ ist der Wert, um den sich der Anteil der Versuche mit $A$ bei sehr vielen Wiederholungen einpendelt.
3. **Axiomatisch:** Man legt nur fest, welche Rechenregeln jede Wahrscheinlichkeit erfüllen muss. Alles andere wird daraus bewiesen.

Den dritten Zugang hat Andrei Kolmogorow 1933 eingeführt. Ein **Axiom** ist eine Grundregel, die man
nicht beweist, sondern festlegt. Erstaunlich: Drei Regeln genügen.

:::definition[Axiome von Kolmogorow (endlicher Ergebnisraum)]
Eine **Wahrscheinlichkeit** ordnet jedem Ereignis $A \subseteq \Omega$ eine reelle Zahl $P(A)$ zu, sodass gilt:

1. $P(A) \ge 0$ für jedes Ereignis $A$. (Wahrscheinlichkeiten sind nie negativ.)
2. $P(\Omega) = 1$. (Irgendein Ergebnis tritt sicher ein.)
3. $P(A \cup B) = P(A) + P(B)$, falls $A \cap B = \emptyset$. (Bei unvereinbaren Ereignissen addiert man.)
:::

```aufgabe
id: wk-axiome-check
titel: Welche Zahl geht nicht?
niveau: 1
art: check
angabe: |
  Welcher der folgenden Werte kann **keine** Wahrscheinlichkeit sein?
teile:
  - typ: auswahl
    optionen:
      - '$0$'
      - '$\tfrac{7}{8}$'
      - '$1{,}2$'
      - '$1$'
    richtig: [2]
    fehler:
      - wert: 0
        meldung: '$P(A) = 0$ ist erlaubt. Das unmögliche Ereignis hat genau diese Wahrscheinlichkeit.'
      - wert: 3
        meldung: '$P(A) = 1$ ist erlaubt. Nach Axiom 2 hat das sichere Ereignis $\Omega$ diese Wahrscheinlichkeit.'
loesung: |
  Jede Wahrscheinlichkeit liegt zwischen $0$ und $1$ (das folgt gleich aus den Axiomen).
  ---
  $1{,}2$ ist größer als $1$ und deshalb unmöglich. $0$, $\tfrac78$ und $1$ sind erlaubt.
```

Aus diesen drei Regeln folgen alle Rechenregeln, die du brauchst. Die Beweise sind kurz. Lies sie
genau, denn genau solche Begründungen werden in der mündlichen Prüfung gefragt.

:::satz[Folgerungen aus den Axiomen]
Für alle Ereignisse $A$ und $B$ gilt:

1. $P(\bar A) = 1 - P(A)$ (Regel vom Gegenereignis).
2. $P(\emptyset) = 0$.
3. Wenn $A \subseteq B$ ist, dann ist $P(A) \le P(B)$. Insbesondere gilt immer $0 \le P(A) \le 1$.
4. $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ (**Additionssatz**).
:::

:::beweis
**(1)** $A$ und $\bar A$ sind unvereinbar, und zusammen ergeben sie $\Omega$. Nach Axiom 3 und Axiom 2 ist
$P(A) + P(\bar A) = P(\Omega) = 1$. Wir ziehen $P(A)$ auf beiden Seiten ab: $P(\bar A) = 1 - P(A)$.

**(2)** Die leere Menge ist das Gegenereignis von $\Omega$. Mit (1) folgt $P(\emptyset) = 1 - P(\Omega) = 1 - 1 = 0$.

**(3)** Wenn $A$ in $B$ liegt, zerlegen wir $B$ in die unvereinbaren Teile $A$ und $B \setminus A$. Nach
Axiom 3 ist $P(B) = P(A) + P(B \setminus A)$. Der zweite Summand ist nach Axiom 1 nicht negativ. Also
ist $P(B) \ge P(A)$. Mit $B = \Omega$ folgt $P(A) \le 1$.

**(4)** Wir zerlegen $A \cup B$ in die unvereinbaren Teile $A$ und $B \setminus A$. Das liefert
$P(A \cup B) = P(A) + P(B \setminus A)$. Ebenso ist $B$ die unvereinbare Vereinigung von $B \setminus A$
und $A \cap B$. Daher ist $P(B \setminus A) = P(B) - P(A \cap B)$. Einsetzen ergibt den Additionssatz.
:::

:::intuition[Warum man beim Additionssatz etwas abzieht]
Stell dir zwei sich überlappende Kreise vor. Zählst du die Fläche von $A$ und die Fläche von $B$
zusammen, so hast du das Überlappungsstück $A \cap B$ **zweimal** gezählt. Deshalb ziehst du es
einmal ab. Sind $A$ und $B$ unvereinbar, gibt es keine Überlappung. Dann ist $P(A \cap B) = 0$, und es
bleibt die einfache Summe aus Axiom 3.
:::

:::beispiel[Additionssatz bei Sprachkenntnissen]
In einer Firma sprechen $60\,\%$ der Mitarbeiter:innen Englisch, $35\,\%$ Französisch und $20\,\%$
beide Sprachen. Wir wählen eine Person zufällig aus. $E$ sei „spricht Englisch“, $F$ sei „spricht
Französisch“.

- **Mindestens eine der beiden Sprachen:** Additionssatz, $P(E \cup F) = 0{,}60 + 0{,}35 - 0{,}20 = 0{,}75$.
- **Keine der beiden:** Das ist das Gegenereignis von „mindestens eine“. Nach De Morgan ist $P(\bar E \cap \bar F) = 1 - 0{,}75 = 0{,}25$.
- **Nur Englisch:** Von den Englischsprechenden ziehen wir die Zweisprachigen ab: $P(E \cap \bar F) = 0{,}60 - 0{,}20 = 0{,}40$.

Kontrolle: nur Englisch $0{,}40$, nur Französisch $0{,}15$, beide $0{,}20$, keine $0{,}25$. Zusammen ergibt das $1$.
:::

:::achtung[Doppelt gezählt]
Eine typische falsche Rechnung zum Beispiel „Additionssatz bei Sprachkenntnissen“ lautet:
$$P(E \cup F) = 0{,}60 + 0{,}35 = 0{,}95. \qquad \text{(falsch)}$$
Hier sind die $20\,\%$ Zweisprachigen doppelt gezählt. Richtig ist $0{,}60 + 0{,}35 - 0{,}20 = 0{,}75$.
Die einfache Summe ist nur bei **unvereinbaren** Ereignissen erlaubt. Ein Ergebnis über 1 ist immer
ein Alarmsignal.
:::

:::achtung[Das falsche Gegenereignis]
Das Gegenereignis von „mindestens 5“ beim Würfel ist **nicht** „höchstens 5“. Die falsche Rechnung
$$P(\text{höchstens } 5) = 1 - P(\text{mindestens } 5) = 1 - \tfrac26 = \tfrac46 \qquad \text{(falsch)}$$
übersieht, dass die 5 in beiden Ereignissen liegt. Das Gegenereignis enthält genau die übrigen
Ergebnisse $\{1, 2, 3, 4\}$, also „höchstens 4“. Richtig ist $P(\text{höchstens } 5) = \tfrac56$.
Prüfe bei jedem Gegenereignis: Zusammen müssen beide Ereignisse ganz $\Omega$ ergeben, ohne Überlappung.
:::

```aufgabe
id: wk-additionssatz-gefuehrt
titel: Lesegewohnheiten
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  In einer Bibliothek leihen $40\,\%$ der Besucher:innen Krimis aus, $30\,\%$ Sachbücher und $12\,\%$ beides.
  Eine Person wird zufällig ausgewählt. Berechne die Wahrscheinlichkeit, dass sie
  a) mindestens eine der beiden Arten, b) keine der beiden, c) nur Krimis ausleiht.
teile:
  - typ: zahl
    label: 'a) mindestens eine Art'
    loesung: "0.40 + 0.30 - 0.12"
    anzeige: '0{,}58'
    fehler:
      - wert: "0.7"
        meldung: Du hast die $12\,\%$ doppelt gezählt. Wer beides ausleiht, steckt in den $40\,\%$ **und** in den $30\,\%$.
  - typ: zahl
    label: 'b) keine der beiden'
    loesung: "1 - (0.40 + 0.30 - 0.12)"
    anzeige: '0{,}42'
    fehler:
      - wert: "0.88"
        meldung: Du hast das Gegenereignis von „beides“ berechnet. Gesucht ist das Gegenereignis von „mindestens eine Art“.
  - typ: zahl
    label: 'c) nur Krimis'
    loesung: "0.40 - 0.12"
    anzeige: '0{,}28'
    fehler:
      - wert: "0.4"
        meldung: In den $40\,\%$ stecken auch die Personen, die zusätzlich Sachbücher ausleihen. Die musst du abziehen.
hinweise:
  - 'Bezeichne $K$ = „Krimi“ und $S$ = „Sachbuch“. Gegeben sind $P(K)$, $P(S)$ und $P(K \cap S)$.'
gefuehrt:
  - text: Welche Formel brauchst du für „mindestens eine der beiden Arten“, also für $P(K \cup S)$?
    erklaerung: Den Additionssatz $P(K \cup S) = P(K) + P(S) - P(K \cap S)$, weil sich $K$ und $S$ überlappen.
  - text: Berechne $P(K \cup S)$.
    teil:
      typ: zahl
      loesung: "0.40 + 0.30 - 0.12"
    erklaerung: $0{,}40 + 0{,}30 - 0{,}12 = 0{,}58$.
  - text: „Keine der beiden“ ist das Gegenereignis von „mindestens eine“. Berechne es.
    teil:
      typ: zahl
      loesung: "1 - 0.58"
    erklaerung: $1 - 0{,}58 = 0{,}42$.
  - text: „Nur Krimis“ heißt Krimi, aber kein Sachbuch. Berechne $P(K \cap \bar S)$.
    teil:
      typ: zahl
      loesung: "0.40 - 0.12"
    erklaerung: Von allen Krimi-Leser:innen ziehen wir die ab, die auch Sachbücher leihen. $0{,}40 - 0{,}12 = 0{,}28$.
loesung: |
  **Ansatz:** $K$ und $S$ überlappen sich ($12\,\%$ leihen beides). Deshalb brauchen wir den Additionssatz.
  ---
  a) $P(K \cup S) = 0{,}40 + 0{,}30 - 0{,}12 = 0{,}58$.
  ---
  b) Gegenereignis von a): $1 - 0{,}58 = 0{,}42$.
  ---
  c) $P(K \cap \bar S) = P(K) - P(K \cap S) = 0{,}40 - 0{,}12 = 0{,}28$.
  Kontrolle: nur Krimi $0{,}28$, nur Sachbuch $0{,}18$, beides $0{,}12$, keines $0{,}42$. Summe $1$.
```

```aufgabe
id: wk-ereignis-sprache
titel: Weder noch
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  $A$ sei „der Server ist überlastet“, $B$ sei „das Netzwerk ist gestört“.
  Welcher Ausdruck beschreibt das Ereignis „**weder** überlastet **noch** gestört“?
teile:
  - typ: auswahl
    optionen:
      - '$\bar A \cap \bar B$'
      - '$\bar A \cup \bar B$'
      - '$A \cap \bar B$'
      - '$\overline{A \cap B}$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$\bar A \cup \bar B$ heißt „mindestens eines tritt nicht ein“. Das ist auch erfüllt, wenn nur das Netzwerk gestört ist.'
      - wert: 2
        meldung: '$A \cap \bar B$ heißt „überlastet, aber nicht gestört“. Gesucht ist aber, dass **keines** von beiden eintritt.'
      - wert: 3
        meldung: '$\overline{A \cap B}$ heißt „nicht beide gleichzeitig“. Nach De Morgan ist das $\bar A \cup \bar B$, also zu schwach.'
hinweise:
  - '„Weder A noch B“ heißt: nicht $A$ **und** nicht $B$.'
loesung: |
  „Weder A noch B“ bedeutet „nicht A und nicht B“. Das „und“ wird zum Durchschnitt $\cap$.
  ---
  Also $\bar A \cap \bar B$. Nach De Morgan ist das dasselbe wie $\overline{A \cup B}$, also „nicht mindestens eines“.
```

```aufgabe
id: wk-additionssatz
titel: Additionssatz anwenden
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Bei einer Umfrage unter Studierenden nutzen $70\,\%$ Linux, $45\,\%$ Windows und $25\,\%$ beide Systeme.
  Mit welcher Wahrscheinlichkeit nutzt eine zufällig gewählte Person
  a) mindestens eines der beiden Systeme, b) keines der beiden, c) genau eines der beiden?
teile:
  - typ: zahl
    label: 'a) mindestens eines'
    loesung: "0.70 + 0.45 - 0.25"
    anzeige: '0{,}9'
    fehler:
      - wert: "1.15"
        meldung: Ein Ergebnis über 1 ist unmöglich. Die $25\,\%$, die beide nutzen, stecken in beiden Anteilen und sind doppelt gezählt.
  - typ: zahl
    label: 'b) keines'
    loesung: "1 - (0.70 + 0.45 - 0.25)"
    anzeige: '0{,}1'
    fehler:
      - wert: "0.75"
        meldung: Du hast das Gegenereignis von „beide“ gebildet. „Keines“ ist das Gegenereignis von „mindestens eines“.
  - typ: zahl
    label: 'c) genau eines'
    loesung: "(0.70 + 0.45 - 0.25) - 0.25"
    anzeige: '0{,}65'
    fehler:
      - wert: "0.9"
        meldung: Das ist „mindestens eines“. Darin stecken noch die Personen, die **beide** Systeme nutzen.
hinweise:
  - 'Additionssatz: $P(L \cup W) = P(L) + P(W) - P(L \cap W)$.'
  - '„Genau eines“ heißt: mindestens eines, aber nicht beide.'
loesung: |
  **Ansatz:** $L$ = „nutzt Linux“, $W$ = „nutzt Windows“. Die Ereignisse überlappen sich, also Additionssatz.
  ---
  a) $P(L \cup W) = 0{,}70 + 0{,}45 - 0{,}25 = 0{,}90$.
  ---
  b) „Keines“ ist das Gegenereignis von „mindestens eines“: $1 - 0{,}90 = 0{,}10$.
  ---
  c) „Genau eines“ ist „mindestens eines“ ohne „beide“: $0{,}90 - 0{,}25 = 0{,}65$.
  Kontrolle: nur Linux $0{,}45$ plus nur Windows $0{,}20$ ergibt $0{,}65$.
```

```aufgabe
id: wk-gegenereignis-demorgan
titel: De Morgan in Zahlen
niveau: 2
lernziel: 0
kompetenz: rechnen
angabe: |
  Für zwei Ereignisse gilt $P(A) = 0{,}3$, $P(B) = 0{,}5$ und $P(A \cap B) = 0{,}1$.
  Berechne a) $P(\bar A \cap \bar B)$, b) $P(\bar A \cup \bar B)$, c) $P(A \cap \bar B)$.
teile:
  - typ: zahl
    label: 'a) $P(\bar A \cap \bar B)$'
    loesung: "1 - (0.3 + 0.5 - 0.1)"
    anzeige: '0{,}3'
    fehler:
      - wert: "0.35"
        meldung: |
          Du hast $(1 - 0{,}3) \cdot (1 - 0{,}5)$ gerechnet. Multiplizieren darf man nur bei **unabhängigen** Ereignissen,
          und davon steht hier nichts. Nutze De Morgan: $\bar A \cap \bar B$ ist das Gegenereignis von $A \cup B$.
  - typ: zahl
    label: 'b) $P(\bar A \cup \bar B)$'
    loesung: "1 - 0.1"
    anzeige: '0{,}9'
    fehler:
      - wert: "0.3"
        meldung: Das ist $P(\bar A \cap \bar B)$ aus Teil a). Bei $\bar A \cup \bar B$ steht „oder“. Nach De Morgan ist es das Gegenereignis von $A \cap B$.
  - typ: zahl
    label: 'c) $P(A \cap \bar B)$'
    loesung: "0.3 - 0.1"
    anzeige: '0{,}2'
    fehler:
      - wert: "0.3"
        meldung: In $P(A)$ steckt auch der Teil, in dem zusätzlich $B$ eintritt. Ziehe $P(A \cap B)$ ab.
hinweise:
  - 'Berechne zuerst $P(A \cup B)$ mit dem Additionssatz.'
  - 'De Morgan: $\bar A \cap \bar B = \overline{A \cup B}$ und $\bar A \cup \bar B = \overline{A \cap B}$.'
loesung: |
  **Ansatz:** Wir brauchen $P(A \cup B)$ und die Regeln von De Morgan.
  $P(A \cup B) = 0{,}3 + 0{,}5 - 0{,}1 = 0{,}7$.
  ---
  a) $\bar A \cap \bar B$ ist das Gegenereignis von $A \cup B$: $1 - 0{,}7 = 0{,}3$.
  ---
  b) $\bar A \cup \bar B$ ist das Gegenereignis von $A \cap B$: $1 - 0{,}1 = 0{,}9$.
  ---
  c) $A \cap \bar B$ heißt „$A$, aber nicht $B$“: $P(A) - P(A \cap B) = 0{,}3 - 0{,}1 = 0{,}2$.
  Plausibel: $0{,}2 \le P(A) = 0{,}3$.
```

```reflexion
frage: Warum gilt für beliebige Ereignisse immer $P(A \cup B) \le P(A) + P(B)$? Begründe mit dem Additionssatz und mit einem Bild.
antwort: |
  Nach dem Additionssatz ist $P(A \cup B) = P(A) + P(B) - P(A \cap B)$. Der abgezogene Teil $P(A \cap B)$ ist nach
  Axiom 1 nie negativ. Zieht man etwas Nicht-Negatives ab, wird das Ergebnis höchstens kleiner. Also ist
  $P(A \cup B) \le P(A) + P(B)$. Im Bild: Die Fläche zweier überlappender Kreise ist höchstens so groß wie die Summe
  der Einzelflächen. Gleichheit gilt genau dann, wenn sich die Kreise nicht überlappen, also bei unvereinbaren Ereignissen.
```

```aufgabe
id: wk-additionssatz-umkehr
titel: Den Durchschnitt zurückrechnen
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Ein Onlineshop weiß: $45\,\%$ der Bestellungen enthalten Bücher ($B$), $40\,\%$ enthalten Spiele ($S$), und
  $65\,\%$ enthalten mindestens eines davon. Berechne a) $P(B \cap S)$ und b) die Wahrscheinlichkeit, dass eine
  Bestellung **genau eine** der beiden Warengruppen enthält.
teile:
  - typ: zahl
    label: 'a) $P(B \cap S)$'
    loesung: "0.45 + 0.40 - 0.65"
    anzeige: '0{,}2'
    fehler:
      - wert: "-0.2"
        meldung: Ein Vorzeichenfehler beim Umstellen. Eine Wahrscheinlichkeit ist nie negativ. Stelle $0{,}65 = 0{,}45 + 0{,}40 - P(B \cap S)$ sorgfältig um.
      - wert: "0.18"
        meldung: |
          Du hast $0{,}45 \cdot 0{,}40$ gerechnet. Das wäre nur bei unabhängigen Ereignissen richtig.
          Hier ist $P(B \cup S)$ gegeben, also hilft der Additionssatz.
  - typ: zahl
    label: 'b) genau eine Gruppe'
    loesung: "0.65 - (0.45 + 0.40 - 0.65)"
    anzeige: '0{,}45'
    fehler:
      - wert: "0.65"
        meldung: Das ist „mindestens eine“. Davon musst du die Bestellungen abziehen, die **beide** Gruppen enthalten.
hinweise:
  - 'Setze die bekannten Werte in den Additionssatz $P(B \cup S) = P(B) + P(S) - P(B \cap S)$ ein.'
  - 'Die Gleichung hat nur noch eine Unbekannte: $P(B \cap S)$. Stelle nach ihr um.'
loesung: |
  **Ansatz:** Der Additionssatz verbindet die vier Größen. Drei davon sind bekannt, also können wir die vierte ausrechnen.
  ---
  a) $0{,}65 = 0{,}45 + 0{,}40 - P(B \cap S)$. Wir addieren $P(B \cap S)$ und ziehen $0{,}65$ ab:
  $P(B \cap S) = 0{,}45 + 0{,}40 - 0{,}65 = 0{,}20$.
  ---
  b) „Genau eine“ ist „mindestens eine“ ohne „beide“: $0{,}65 - 0{,}20 = 0{,}45$.
  ---
  Kontrolle: nur Bücher $0{,}25$, nur Spiele $0{,}20$, zusammen $0{,}45$.
```

```aufgabe
id: wk-drei-ereignisse
titel: Drei Programmiersprachen
niveau: 3
lernziel: 0
kompetenz: modellieren
angabe: |
  In einem Informatikstudiengang beherrschen $50\,\%$ Python ($Y$), $40\,\%$ Java ($J$) und $30\,\%$ C ($C$). (Python heißt hier $Y$, weil der Buchstabe $P$ schon für „Wahrscheinlichkeit“ steht.)
  Außerdem gilt $P(Y \cap J) = 0{,}20$, $P(Y \cap C) = 0{,}15$, $P(J \cap C) = 0{,}10$ und $P(Y \cap J \cap C) = 0{,}05$.
  a) Mit welcher Wahrscheinlichkeit beherrscht eine zufällig gewählte Person mindestens eine der drei Sprachen?
  b) Mit welcher Wahrscheinlichkeit keine der drei?
teile:
  - typ: zahl
    label: 'a) mindestens eine'
    loesung: "0.5 + 0.4 + 0.3 - 0.2 - 0.15 - 0.1 + 0.05"
    anzeige: '0{,}8'
    fehler:
      - wert: "0.75"
        meldung: |
          Du hast den dreifachen Durchschnitt vergessen. Er wurde in den Einzelwerten dreimal addiert und in den
          Paaren dreimal abgezogen. Er fehlt also noch einmal.
  - typ: zahl
    label: 'b) keine'
    loesung: "1 - (0.5 + 0.4 + 0.3 - 0.2 - 0.15 - 0.1 + 0.05)"
    anzeige: '0{,}2'
hinweise:
  - 'Zeichne drei sich überlappende Kreise. Überlege, wie oft ein Bereich, der in allen drei Kreisen liegt, gezählt wird.'
  - 'Der Additionssatz für drei Ereignisse lautet $P(Y \cup J \cup C) = P(Y) + P(J) + P(C) - P(Y \cap J) - P(Y \cap C) - P(J \cap C) + P(Y \cap J \cap C)$.'
loesung: |
  **Ansatz:** Wir verallgemeinern den Additionssatz. Wer alle drei Sprachen kann, wird bei den Einzelwerten dreimal
  gezählt und bei den drei Paaren dreimal abgezogen. Er muss also einmal wieder dazukommen.
  ---
  a) $0{,}5 + 0{,}4 + 0{,}3 - 0{,}20 - 0{,}15 - 0{,}10 + 0{,}05 = 1{,}2 - 0{,}45 + 0{,}05 = 0{,}80$.
  ---
  b) Gegenereignis: $1 - 0{,}80 = 0{,}20$.
  ---
  Plausibilität: $0{,}8$ ist größer als jeder Einzelwert und kleiner als $1$. Rund jede fünfte Person kann keine der drei Sprachen.
```

## Laplace-Wahrscheinlichkeit und relative Häufigkeit

```aufgabe
id: wk-laplace-check-kuerzen
titel: Bruch kürzen
niveau: 1
art: check
angabe: |
  Kürze $\tfrac{6}{36}$ vollständig. (Wiederholung: [Kapitel 1, Abschnitt „Bruchrechnen“](/lernen/mathe3/zahlen/bruchrechnen))
teile:
  - typ: zahl
    loesung: "6/36"
    anzeige: '\tfrac16'
loesung: |
  Zähler und Nenner haben den größten gemeinsamen Teiler $6$.
  ---
  $\tfrac{6}{36} = \tfrac{6 : 6}{36 : 6} = \tfrac16$.
```

Bei vielen Zufallsexperimenten gibt es keinen Grund, ein Ergebnis einem anderen vorzuziehen. Ein
fairer Würfel ist symmetrisch. Gut gemischte Karten sind gleichberechtigt. Dann wird das Berechnen
einer Wahrscheinlichkeit zu einer Zählaufgabe. Benannt ist das nach dem französischen Mathematiker
Pierre-Simon Laplace.

:::definition[Laplace-Experiment]
Ein Zufallsexperiment mit **endlich vielen, gleich wahrscheinlichen** Ergebnissen heißt
**Laplace-Experiment**. Für jedes Ereignis $A$ gilt dann
$$P(A) = \frac{|A|}{|\Omega|} = \frac{\text{Anzahl der für } A \text{ günstigen Ergebnisse}}{\text{Anzahl aller möglichen Ergebnisse}}.$$
Dabei bezeichnet $|A|$ die Anzahl der Elemente von $A$.
:::

Die Laplace-Formel erfüllt die drei Axiome. Zähler und Nenner sind nicht negativ, und für
$A = \Omega$ ergibt sich $\tfrac{|\Omega|}{|\Omega|} = 1$. Für unvereinbare Ereignisse addieren sich
die Anzahlen im Zähler.

:::beispiel[Augensumme zweier Würfel]
Ein roter und ein blauer Würfel werden geworfen. Ein Ergebnis ist ein Paar $(a, b)$: $a$ ist die rote,
$b$ die blaue Augenzahl. Zu jeder der 6 roten Augenzahlen gibt es 6 blaue, also $6 \cdot 6 = 36$ Paare. Diese Produktregel erklärt [16.3 Zählen mit Reihenfolge: Produktregel, Permutationen, Variationen](/lernen/mathe3/wahrscheinlichkeit/zaehlen-mit-reihenfolge-produktregel-permutationen-variationen) genauer. Alle sind gleich
wahrscheinlich, denn jeder Würfel ist für sich fair.

- **Augensumme 7:** günstig sind $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$. Das sind 6 Paare, also $P = \tfrac{6}{36} = \tfrac16$.
- **Augensumme 2:** günstig ist nur $(1,1)$, also $P = \tfrac{1}{36}$.

Die Summe 7 ist also sechsmal so wahrscheinlich wie die Summe 2.
:::

```plot
x: [1, 13]
y: [0, 0.19]
achsen: { x: "Augensumme", y: "P" }
balken:
  - { x: 2, y: "1/36" }
  - { x: 3, y: "2/36" }
  - { x: 4, y: "3/36" }
  - { x: 5, y: "4/36" }
  - { x: 6, y: "5/36" }
  - { x: 7, y: "6/36", farbe: 1 }
  - { x: 8, y: "5/36" }
  - { x: 9, y: "4/36" }
  - { x: 10, y: "3/36" }
  - { x: 11, y: "2/36" }
  - { x: 12, y: "1/36" }
beschriftung: Verteilung der Augensumme zweier Würfel. Die Summe 7 hat mit 6/36 die höchste Säule, die Summen 2 und 12 haben je nur 1/36.
```

:::achtung[Nicht gleich wahrscheinliche Ergebnisse gezählt]
Eine typische falsche Überlegung lautet: Es gibt die Augensummen $2, 3, \dots, 12$, das sind 11 Werte. Also sei
$$P(\text{Summe } 7) = \tfrac{1}{11}. \qquad \text{(falsch)}$$
Die Laplace-Formel gilt nur, wenn die gezählten Ergebnisse **gleich wahrscheinlich** sind. Die Augensummen
sind es nicht, wie das Säulendiagramm zeigt. Wähle den Ergebnisraum so, dass die Ergebnisse wirklich
gleich wahrscheinlich sind. Bei zwei Würfeln sind das die 36 geordneten Paare. Denke dir die Würfel
verschieden gefärbt, auch wenn sie gleich aussehen.
:::

:::beispiel[Drei Münzwürfe]
Eine Münze wird dreimal geworfen. Wie wahrscheinlich ist „genau zweimal Kopf“? Wir schreiben K für
Kopf und Z für Zahl und listen alle Ergebnisse auf:
$$\Omega = \{KKK, KKZ, KZK, ZKK, KZZ, ZKZ, ZZK, ZZZ\}.$$
Das sind $2 \cdot 2 \cdot 2 = 8$ gleich wahrscheinliche Folgen. Genau zweimal Kopf zeigen $KKZ$, $KZK$
und $ZKK$. Also ist $P(\text{genau zweimal Kopf}) = \tfrac38$.

Nicht-Beispiel: Wer nur „0, 1, 2 oder 3 mal Kopf“ zählt und $\tfrac14$ antwortet, macht den Fehler aus dem
Achtung-Kasten. Diese vier Anzahlen sind nicht gleich wahrscheinlich.
:::

```aufgabe
id: wk-laplace-gefuehrt
titel: Augensumme 9
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Zwei faire Würfel werden geworfen. Wie groß ist die Wahrscheinlichkeit für die Augensumme $9$?
teile:
  - typ: zahl
    loesung: "4/36"
    anzeige: '\tfrac19'
    fehler:
      - wert: "1/11"
        meldung: Die elf möglichen Augensummen sind nicht gleich wahrscheinlich. Zähle stattdessen die geordneten Paare.
      - wert: "2/36"
        meldung: Du hast vermutlich nur $(3,6)$ und $(4,5)$ gezählt. Bei unterscheidbaren Würfeln sind $(3,6)$ und $(6,3)$ verschiedene Ergebnisse.
hinweise:
  - Denke dir einen roten und einen blauen Würfel. Wie viele Paare gibt es insgesamt?
gefuehrt:
  - text: Wie viele gleich wahrscheinliche geordnete Paare gibt es bei zwei Würfeln?
    teil:
      typ: zahl
      loesung: "36"
    erklaerung: Für jede der 6 roten Augenzahlen gibt es 6 blaue, also $6 \cdot 6 = 36$ Paare.
  - text: Wie viele Paare haben die Augensumme 9?
    teil:
      typ: zahl
      loesung: "4"
    erklaerung: $(3,6), (4,5), (5,4), (6,3)$. Das sind 4 Paare.
  - text: Berechne die Wahrscheinlichkeit mit der Laplace-Formel.
    teil:
      typ: zahl
      loesung: "4/36"
    erklaerung: $P = \tfrac{4}{36} = \tfrac19 \approx 0{,}111$.
loesung: |
  **Ansatz:** Die 36 geordneten Paare sind gleich wahrscheinlich, also Laplace.
  ---
  Günstig: $(3,6), (4,5), (5,4), (6,3)$, also 4 Paare.
  ---
  $P(\text{Summe } 9) = \tfrac{4}{36} = \tfrac19 \approx 0{,}111$. Das passt zur Säule bei 9 im Diagramm.
```

### Relative Häufigkeit und das Gesetz der großen Zahlen

Wirft man eine Reißzwecke, landet sie auf dem Kopf oder auf der Seite. Hier gibt es keine Symmetrie.
Die Laplace-Formel ist nicht anwendbar. Man kann die Wahrscheinlichkeit aber durch viele Versuche
**schätzen**.

:::definition[Absolute und relative Häufigkeit]
Ein Experiment wird $n$-mal durchgeführt, und das Ereignis $A$ tritt dabei $H_n(A)$-mal ein. Dann heißt
$H_n(A)$ die **absolute Häufigkeit** von $A$, und
$$h_n(A) = \frac{H_n(A)}{n}$$
heißt **relative Häufigkeit** von $A$. Sie ist der Anteil der Versuche, in denen $A$ eingetreten ist.
:::

Beispiel: Bei $50$ Würfen fällt $7$-mal eine Sechs. Dann ist $H_{50} = 7$ und $h_{50} = \tfrac{7}{50} = 0{,}14$.
Die relative Häufigkeit erfüllt dieselben Rechenregeln wie eine Wahrscheinlichkeit: Sie liegt
zwischen 0 und 1, ergibt für $\Omega$ den Wert 1 und ist bei unvereinbaren Ereignissen additiv.

:::satz[Empirisches Gesetz der großen Zahlen]
Wiederholt man ein Zufallsexperiment sehr oft und unabhängig, so pendelt sich die relative
Häufigkeit $h_n(A)$ in der Nähe der Wahrscheinlichkeit $P(A)$ ein. Die Schwankungen werden mit
wachsendem $n$ kleiner.
:::

:::beispiel[Eine Simulation am Computer]
Ein Computer hat $10\,000$ Würfelwürfe simuliert und nach jeder Anzahl $n$ gezählt, wie oft eine Sechs
gefallen ist:

|$n$|10|50|100|500|1000|5000|10 000|
|---|---|---|---|---|---|---|---|
|Sechsen|1|7|22|99|181|800|1655|
|$h_n$|0,1|0,14|0,22|0,198|0,181|0,16|0,1655|

Am Anfang springt die relative Häufigkeit stark. Ab etwa 1000 Würfen bleibt sie nahe bei
$\tfrac16 \approx 0{,}1667$. Genau das sagt das Gesetz der großen Zahlen.
:::

```plot
x: [0.8, 4.2]
y: [0, 0.25]
achsen: { x: "lg n (n = Anzahl der Würfe)", y: "relative Häufigkeit" }
graphen:
  - { f: "1/6", label: "P = 1/6", farbe: 1, gestrichelt: true }
punkte:
  - { x: 1, y: 0.1, label: "n = 10" }
  - { x: "log(50, 10)", y: 0.14 }
  - { x: 2, y: 0.22, label: "n = 100" }
  - { x: "log(500, 10)", y: 0.198 }
  - { x: 3, y: 0.181, label: "n = 1000" }
  - { x: "log(5000, 10)", y: 0.16 }
  - { x: 4, y: 0.1655, label: "n = 10000" }
beschriftung: Relative Häufigkeit der Sechs in einer Computersimulation, aufgetragen über dem Zehnerlogarithmus der Wurfzahl. Die Punkte nähern sich der gestrichelten Linie bei 1/6.
```

:::achtung[Der Spielerfehlschluss]
Nach fünfmal „Kopf“ hintereinander denken viele: „Jetzt ist Zahl fällig.“ Eine typische falsche Rechnung:
$$P(\text{Zahl im sechsten Wurf}) = 1 - \left(\tfrac12\right)^6 \approx 0{,}98. \qquad \text{(falsch)}$$
Die Münze hat kein Gedächtnis. Jeder Wurf ist unabhängig von den vorigen, also ist
$P(\text{Zahl im sechsten Wurf}) = \tfrac12$. Die Zahl $1 - \left(\tfrac12\right)^6$ beantwortet eine andere Frage:
„Mindestens einmal Zahl in sechs Würfen“, gefragt **vor** dem ersten Wurf. Die relative Häufigkeit nähert
sich $\tfrac12$, weil die vielen späteren Würfe die Ausreißer verdünnen, nicht weil sie ausgeglichen werden.
:::

```aufgabe
id: wk-zwei-wuerfel
titel: Zwei Würfel
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Zwei faire Würfel werden geworfen. Berechne die Wahrscheinlichkeit für
  a) die Augensumme 8, b) eine Augensumme von mindestens 10,
  c) zwei Augenzahlen, die sich um genau 1 unterscheiden.
teile:
  - typ: zahl
    label: 'a) $P(\text{Summe } 8)$'
    loesung: "5/36"
    anzeige: '\tfrac{5}{36} \approx 0{,}1389'
    fehler:
      - wert: "1/11"
        meldung: Die elf Augensummen sind nicht gleich wahrscheinlich. Zähle die 36 geordneten Paare.
      - wert: "3/36"
        meldung: Du hast Paare wie $(2,6)$ und $(6,2)$ als ein Ergebnis gezählt. Bei unterscheidbaren Würfeln sind das zwei verschiedene Ergebnisse.
  - typ: zahl
    label: 'b) $P(\text{Summe} \ge 10)$'
    loesung: "6/36"
    anzeige: '\tfrac{1}{6}'
    fehler:
      - wert: "3/36"
        meldung: „Mindestens 10“ umfasst die Summen 10, 11 **und** 12. Du hast vermutlich nur die Summe 10 gezählt.
  - typ: zahl
    label: 'c) Unterschied genau 1'
    loesung: "10/36"
    anzeige: '\tfrac{5}{18}'
    fehler:
      - wert: "5/36"
        meldung: Du hast nur Paare wie $(1,2)$ gezählt. Auch $(2,1)$ hat den Unterschied 1, also jede Möglichkeit doppelt.
hinweise:
  - 'Schreib die günstigen Paare $(a, b)$ auf. Es gibt insgesamt 36.'
loesung: |
  **Ansatz:** Laplace mit $36$ gleich wahrscheinlichen geordneten Paaren.
  ---
  a) Summe 8: $(2,6), (3,5), (4,4), (5,3), (6,2)$, also $\tfrac{5}{36} \approx 0{,}1389$.
  ---
  b) Summe 10: drei Paare, Summe 11: zwei Paare, Summe 12: ein Paar. Zusammen $6$, also $\tfrac{6}{36} = \tfrac16$.
  ---
  c) $(1,2), (2,3), (3,4), (4,5), (5,6)$ und dieselben Paare umgedreht: $10$ Paare, also $\tfrac{10}{36} = \tfrac{5}{18}$.
```

```aufgabe
id: wk-laplace-karten
titel: Kartenspiel
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Aus einem gut gemischten Kartenspiel mit 52 Karten (4 Farben Herz, Karo, Pik und Kreuz zu je 13 Karten, darunter je ein Ass)
  wird eine Karte gezogen. Berechne $P(\text{Herz})$, $P(\text{Ass})$ und $P(\text{Herz oder Ass})$.
teile:
  - typ: zahl
    label: '$P(\text{Herz})$'
    loesung: "13/52"
    anzeige: '\tfrac{1}{4}'
    fehler:
      - wert: "1/13"
        meldung: Das ist die Wahrscheinlichkeit für einen bestimmten Kartenwert. Herz gibt es 13-mal unter 52 Karten.
  - typ: zahl
    label: '$P(\text{Ass})$'
    loesung: "4/52"
    anzeige: '\tfrac{1}{13}'
  - typ: zahl
    label: '$P(\text{Herz oder Ass})$'
    loesung: "13/52 + 4/52 - 1/52"
    anzeige: '\tfrac{16}{52} = \tfrac{4}{13}'
    fehler:
      - wert: "17/52"
        meldung: Das Herz-Ass ist sowohl Herz als auch Ass. Du hast es doppelt gezählt.
hinweise:
  - Beim „oder“ an das Herz-Ass denken, das in beiden Ereignissen steckt.
loesung: |
  **Ansatz:** 52 gleich wahrscheinliche Karten, also Laplace.
  $P(\text{Herz}) = \tfrac{13}{52} = \tfrac14$ und $P(\text{Ass}) = \tfrac{4}{52} = \tfrac{1}{13}$.
  ---
  Das Herz-Ass ist in beiden Ereignissen enthalten: $P(\text{Herz} \cap \text{Ass}) = \tfrac{1}{52}$.
  ---
  Additionssatz: $\tfrac{13}{52} + \tfrac{4}{52} - \tfrac{1}{52} = \tfrac{16}{52} = \tfrac{4}{13} \approx 0{,}3077$.
  Kontrolle durch Zählen: 13 Herzkarten und 3 weitere Asse sind 16 günstige Karten.
```

```aufgabe
id: wk-laplace-muenzen
titel: Vier Münzwürfe
niveau: 2
lernziel: 0
kompetenz: rechnen
angabe: |
  Eine faire Münze wird viermal geworfen. Berechne die Wahrscheinlichkeit für
  a) genau zweimal Kopf, b) mindestens einmal Kopf.
teile:
  - typ: zahl
    label: 'a) genau zweimal Kopf'
    loesung: "6/16"
    anzeige: '\tfrac{3}{8}'
    fehler:
      - wert: "1/5"
        meldung: Du hast die fünf Anzahlen $0, 1, 2, 3, 4$ als gleich wahrscheinlich behandelt. Zähle die $16$ gleich wahrscheinlichen Folgen aus K und Z.
  - typ: zahl
    label: 'b) mindestens einmal Kopf'
    loesung: "15/16"
    anzeige: '\tfrac{15}{16}'
    fehler:
      - wert: "4/5"
        meldung: Auch hier sind die Anzahlen nicht gleich wahrscheinlich. Nutze das Gegenereignis „keinmal Kopf“, also die eine Folge ZZZZ.
hinweise:
  - 'Wie viele Folgen aus K und Z mit vier Zeichen gibt es?'
  - 'Bei a) musst du entscheiden, an welchen zwei der vier Stellen das K steht. Liste die Möglichkeiten auf.'
loesung: |
  **Ansatz:** Ergebnisse sind Folgen aus vier Zeichen K oder Z. Es gibt $2^4 = 16$ gleich wahrscheinliche Folgen.
  ---
  a) Genau zwei K: KKZZ, KZKZ, KZZK, ZKKZ, ZKZK, ZZKK. Das sind 6 Folgen, also $\tfrac{6}{16} = \tfrac38$.
  ---
  b) Gegenereignis „keinmal Kopf“ ist nur ZZZZ. Also $1 - \tfrac{1}{16} = \tfrac{15}{16}$.
  ---
  Plausibilität: „Mindestens einmal Kopf in vier Würfen“ ist fast sicher. Das passt zu $0{,}9375$.
```

```aufgabe
id: wk-relative-haeufigkeit
titel: Reißzwecke
niveau: 2
lernziel: 0
kompetenz: begruenden
angabe: |
  Eine Reißzwecke wurde 1000-mal geworfen und landete 612-mal auf dem Kopf.
  a) Schätze die Wahrscheinlichkeit für „Kopf“.
  b) Wie oft erwartest du „Kopf“ ungefähr bei 250 weiteren Würfen?
  c) Warum ist der Wert aus a) nur ein Schätzwert, und wie könnte man ihn verbessern?
teile:
  - typ: zahl
    label: 'a) Schätzwert für $P(\text{Kopf})$'
    loesung: "612/1000"
    anzeige: '0{,}612'
    fehler:
      - wert: "0.5"
        meldung: Eine Reißzwecke ist nicht symmetrisch. Die beiden Lagen sind nicht gleich wahrscheinlich. Verwende die beobachtete relative Häufigkeit.
  - typ: zahl
    label: 'b) erwartete Anzahl'
    loesung: "0.612*250"
    anzeige: '153'
    toleranz: 1
    fehler:
      - wert: "125"
        meldung: Du hast mit $\tfrac12$ gerechnet. Nimm den Schätzwert aus a).
  - typ: text
    label: 'c) Begründung'
    muster: |
      Eine Reißzwecke ist nicht symmetrisch, die Laplace-Formel ist nicht anwendbar. Man verwendet die relative
      Häufigkeit $0{,}612$ als Schätzwert. Sie schwankt zufällig von Versuchsserie zu Versuchsserie. Nach dem
      Gesetz der großen Zahlen werden die Schwankungen bei mehr Würfen kleiner. Mehr Würfe verbessern also die Schätzung.
hinweise:
  - Relative Häufigkeit ist absolute Häufigkeit geteilt durch die Anzahl der Versuche.
  - 'Für b): Anzahl der Würfe mal geschätzte Wahrscheinlichkeit.'
loesung: |
  **Ansatz:** Ohne Symmetrie schätzt man $P$ durch die relative Häufigkeit.
  ---
  a) $h_{1000}(\text{Kopf}) = \tfrac{612}{1000} = 0{,}612$.
  ---
  b) Erwartet werden etwa $250 \cdot 0{,}612 = 153$ Kopf-Landungen.
  ---
  c) Die relative Häufigkeit ist selbst zufällig. Bei mehr Würfen stabilisiert sie sich (Gesetz der großen Zahlen),
  die Schätzung wird genauer. Wie genau, lässt sich mit einem Konfidenzintervall angeben (siehe [Kapitel 17, Konfidenzintervall für einen Anteil](/lernen/mathe3/statistik/konfidenzintervall-fuer-einen-anteil)).
```

```aufgabe
id: wk-laplace-teilbar
titel: Teilbar durch 3 oder 5
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Ein Zufallszahlengenerator liefert eine ganze Zahl von $1$ bis $100$, alle gleich wahrscheinlich.
  Wie groß ist die Wahrscheinlichkeit, dass die Zahl durch $3$ **oder** durch $5$ teilbar ist?
teile:
  - typ: zahl
    loesung: "(33 + 20 - 6)/100"
    anzeige: '0{,}47'
    fehler:
      - wert: "0.53"
        meldung: Zahlen wie $15$ oder $30$ sind durch $3$ **und** durch $5$ teilbar. Du hast sie doppelt gezählt.
hinweise:
  - 'Zähle die Vielfachen von 3, die Vielfachen von 5 und die Vielfachen von beiden, also von 15.'
  - 'Danach Additionssatz in der Zählform: $|A \cup B| = |A| + |B| - |A \cap B|$.'
loesung: |
  **Ansatz:** Laplace mit 100 gleich wahrscheinlichen Zahlen. Wir zählen die günstigen Zahlen mit dem Additionssatz.
  ---
  Vielfache von 3 bis 100: $3, 6, \dots, 99$, das sind $33$. Vielfache von 5: $20$. Vielfache von 15: $15, 30, 45, 60, 75, 90$, also $6$.
  ---
  Günstig: $33 + 20 - 6 = 47$. Also $P = \tfrac{47}{100} = 0{,}47$.
```

```reflexion
frage: Warum muss man sich bei zwei gleich aussehenden Würfeln vorstellen, dass sie verschieden gefärbt sind?
antwort: |
  Nur die geordneten Paare $(a, b)$ sind gleich wahrscheinlich. Das Ergebnis „eine 1 und eine 2“ entsteht auf zwei Wegen,
  $(1, 2)$ und $(2, 1)$. Das Ergebnis „zwei Einsen“ entsteht nur auf einem Weg. Die Würfel wissen nicht, ob wir sie
  unterscheiden können. Färben ändert nichts an den Wahrscheinlichkeiten, macht aber sichtbar, dass es 36 gleich
  wahrscheinliche Ergebnisse gibt. Erst mit diesem Ergebnisraum darf man die Laplace-Formel anwenden.
```

```aufgabe
id: wk-laplace-galilei
titel: Das Problem des Fürsten
niveau: 3
lernziel: 0
kompetenz: begruenden
angabe: |
  Um 1620 fragte ein italienischer Fürst den Physiker Galileo Galilei: Beim Wurf von drei Würfeln gibt es für die
  Augensumme 9 und für die Augensumme 10 jeweils sechs Zerlegungen. Beispiele sind $9 = 1 + 2 + 6$ und $10 = 1 + 3 + 6$.
  Trotzdem kommt 10 in der Praxis häufiger vor. Warum?
  a) Berechne $P(\text{Summe } 10)$. b) Berechne $P(\text{Summe } 9)$. c) Erkläre den scheinbaren Widerspruch.
teile:
  - typ: zahl
    label: 'a) $P(\text{Summe } 10)$'
    loesung: "27/216"
    anzeige: '\tfrac{1}{8} = 0{,}125'
  - typ: zahl
    label: 'b) $P(\text{Summe } 9)$'
    loesung: "25/216"
    anzeige: '\tfrac{25}{216} \approx 0{,}1157'
  - typ: text
    label: 'c) Erklärung'
    muster: |
      Gleich wahrscheinlich sind nicht die Zerlegungen, sondern die $6^3 = 216$ geordneten Tripel. Eine Zerlegung mit drei
      verschiedenen Zahlen wie $1 + 2 + 6$ entsteht auf $3! = 6$ Arten, eine mit zwei gleichen Zahlen wie $2 + 2 + 5$ auf 3 Arten
      und $3 + 3 + 3$ nur auf eine Art. Beide Summen haben je drei Zerlegungen mit drei verschiedenen Zahlen. Bei der 10
      haben die übrigen drei Zerlegungen je zwei gleiche Zahlen (je 3 Arten). Bei der 9 ist eine davon $3 + 3 + 3$, die nur
      auf 1 Art entsteht. Deshalb kommt 10 auf $18 + 9 = 27$ Tripel, die 9 nur auf $18 + 6 + 1 = 25$.
hinweise:
  - 'Es gibt $6 \cdot 6 \cdot 6 = 216$ gleich wahrscheinliche geordnete Tripel.'
  - 'Zerlegungen der 9: $1+2+6$, $1+3+5$, $1+4+4$, $2+2+5$, $2+3+4$, $3+3+3$. Überlege für jede, wie viele Reihenfolgen sie hat.'
loesung: |
  **Ansatz:** Gleich wahrscheinlich sind die geordneten Tripel. Wir zählen für jede Zerlegung ihre Reihenfolgen:
  drei verschiedene Zahlen ergeben $6$, zwei gleiche $3$, drei gleiche $1$.
  ---
  Summe 9: $1{+}2{+}6$ (6), $1{+}3{+}5$ (6), $1{+}4{+}4$ (3), $2{+}2{+}5$ (3), $2{+}3{+}4$ (6), $3{+}3{+}3$ (1). Zusammen $25$.
  ---
  Summe 10: $1{+}3{+}6$ (6), $1{+}4{+}5$ (6), $2{+}2{+}6$ (3), $2{+}3{+}5$ (6), $2{+}4{+}4$ (3), $3{+}3{+}4$ (3). Zusammen $27$.
  ---
  Also $P(10) = \tfrac{27}{216} = 0{,}125$ und $P(9) = \tfrac{25}{216} \approx 0{,}1157$.
  Der Fürst hatte richtig beobachtet. Sein Fehler war, ungleich wahrscheinliche Zerlegungen als gleich wahrscheinlich zu zählen.
```

## Zählen mit Reihenfolge: Produktregel, Permutationen, Variationen

```aufgabe
id: wk-zaehlen-check-potenz
titel: Zweierpotenz
niveau: 1
art: check
angabe: |
  Berechne $2^5$. (Wiederholung: [Kapitel 1, Abschnitt „Potenzen und Wurzeln“](/lernen/mathe3/zahlen/potenzen-und-wurzeln))
teile:
  - typ: zahl
    loesung: "2^5"
    fehler:
      - wert: "10"
        meldung: Du hast $2 \cdot 5$ gerechnet. $2^5$ heißt, fünfmal den Faktor $2$ zu nehmen.
loesung: |
  $2^5 = 2 \cdot 2 \cdot 2 \cdot 2 \cdot 2$.
  ---
  Das ergibt $32$.
```

Die Laplace-Formel verlangt, günstige und mögliche Fälle zu **zählen**. Bei 36 Würfelpaaren geht das
noch mit einer Liste. Bei einem achtstelligen Passwort gibt es aber mehr als hundert Billionen
Möglichkeiten. Die **Kombinatorik** ist die Kunst, solche Anzahlen zu berechnen, ohne alles
aufzulisten. Alle Formeln dieser Lektion und von [16.4 Zählen ohne Reihenfolge: Kombinationen und Binomialkoeffizient](/lernen/mathe3/wahrscheinlichkeit/zaehlen-ohne-reihenfolge-kombinationen-und-binomialkoeffizient) beruhen auf einer einzigen Regel.

### Die Produktregel

Stell dir vor, du ziehst dich an. Du hast 3 Hosen und 4 T-Shirts. Zu jeder Hose passt jedes T-Shirt.
Zu Hose 1 gibt es also 4 Möglichkeiten, zu Hose 2 wieder 4, zu Hose 3 wieder 4. Insgesamt sind das
$3 \cdot 4 = 12$ Kombinationen. Man rechnet „mal“, weil sich jede Wahl im ersten Schritt mit jeder Wahl
im zweiten Schritt verbindet.

:::satz[Produktregel (Zählprinzip)]
Eine Auswahl wird in $k$ Schritten getroffen. Im 1. Schritt gibt es $n_1$ Möglichkeiten, im 2. Schritt
$n_2$ Möglichkeiten, und so weiter bis $n_k$ Möglichkeiten im $k$-ten Schritt. Hängt die **Anzahl** der
Möglichkeiten in jedem Schritt nicht davon ab, was vorher gewählt wurde, so gibt es insgesamt
$$n_1 \cdot n_2 \cdot \ldots \cdot n_k$$
Möglichkeiten.
:::

Im Bild ist das ein Baum. Von der Wurzel gehen $n_1$ Äste aus, jeder verzweigt sich in $n_2$ Äste, und
so weiter. Die Anzahl der Blätter am Ende ist das Produkt.

:::beispiel[PIN-Code]
Ein vierstelliger PIN besteht aus den Ziffern $0$ bis $9$.

- **Ziffern dürfen sich wiederholen:** Für jede der 4 Stellen gibt es 10 Möglichkeiten. Produktregel: $10 \cdot 10 \cdot 10 \cdot 10 = 10^4 = 10\,000$ PINs.
- **Alle Ziffern verschieden:** Für die erste Stelle gibt es 10 Möglichkeiten. Für die zweite bleiben 9, weil eine Ziffer verbraucht ist. Dann 8, dann 7. Also $10 \cdot 9 \cdot 8 \cdot 7 = 5040$ PINs.

Beachte: Im zweiten Fall hängt **welche** Ziffern noch frei sind vom ersten Schritt ab, aber nicht **wie
viele**. Deshalb darf man die Produktregel verwenden.
:::

:::achtung[Wenn die Anzahl doch vom Vorschritt abhängt]
Wie viele vierstellige Zahlen mit lauter verschiedenen Ziffern gibt es? Eine Zahl darf nicht mit $0$
beginnen. Eine typische falsche Rechnung:
$$9 \cdot 8 \cdot 7 \cdot 6 = 3024. \qquad \text{(falsch)}$$
Für die erste Stelle gibt es 9 Möglichkeiten (1 bis 9). Für die zweite Stelle ist die $0$ aber wieder
erlaubt. Es bleiben also 9 Ziffern, nämlich alle außer der ersten. Richtig ist
$9 \cdot 9 \cdot 8 \cdot 7 = 4536$. Überlege bei jedem Schritt neu, wie viele Möglichkeiten es gibt.
:::

```aufgabe
id: wk-kennzeichen-gefuehrt
titel: Kennzeichen
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Ein Kennzeichen besteht aus 2 Buchstaben (je 26 Möglichkeiten) gefolgt von 3 Ziffern (je 10 Möglichkeiten).
  Buchstaben und Ziffern dürfen sich wiederholen. Wie viele verschiedene Kennzeichen gibt es?
teile:
  - typ: zahl
    loesung: "26^2*10^3"
    anzeige: '676\,000'
    fehler:
      - wert: "26*2 + 10*3"
        meldung: Du hast addiert. Jede Buchstabenfolge lässt sich mit jeder Ziffernfolge kombinieren, also wird multipliziert.
      - wert: "26*25*10*9*8"
        meldung: Hier dürfen sich Buchstaben und Ziffern wiederholen. Für jede Stelle stehen also wieder alle 26 Buchstaben und alle 10 Ziffern zur Verfügung.
hinweise:
  - Zerlege das Kennzeichen in fünf Stellen. Wie viele Möglichkeiten gibt es für jede Stelle?
gefuehrt:
  - text: Wie viele Möglichkeiten gibt es für die beiden Buchstaben zusammen?
    teil:
      typ: zahl
      loesung: "26^2"
    erklaerung: Für jeden der 26 ersten Buchstaben gibt es 26 zweite, also $26 \cdot 26 = 676$.
  - text: Wie viele Möglichkeiten gibt es für die drei Ziffern zusammen?
    teil:
      typ: zahl
      loesung: "10^3"
    erklaerung: $10 \cdot 10 \cdot 10 = 1000$.
  - text: Wie viele Kennzeichen gibt es insgesamt?
    teil:
      typ: zahl
      loesung: "26^2*10^3"
    erklaerung: Jede der 676 Buchstabenfolgen passt zu jeder der 1000 Ziffernfolgen. Produktregel $676 \cdot 1000 = 676\,000$.
loesung: |
  **Ansatz:** Produktregel. Das Kennzeichen entsteht in fünf Schritten, und jeder Schritt hat eine feste Anzahl an Möglichkeiten.
  ---
  Buchstaben: $26 \cdot 26 = 676$. Ziffern: $10 \cdot 10 \cdot 10 = 1000$.
  ---
  Insgesamt $676 \cdot 1000 = 676\,000$ Kennzeichen.
```

### Permutationen: alle Objekte anordnen

Wie viele Reihenfolgen gibt es für 4 verschiedene Bücher auf einem Regal? Für den ersten Platz hast du
4 Bücher zur Auswahl. Für den zweiten Platz bleiben 3, für den dritten 2, für den letzten genau eines.
Nach der Produktregel sind das $4 \cdot 3 \cdot 2 \cdot 1 = 24$ Reihenfolgen.

:::definition[Fakultät und Permutation]
Eine Anordnung von $n$ verschiedenen Objekten in einer Reihe heißt **Permutation** (von lateinisch
*permutare*, vertauschen). Es gibt
$$n! = n \cdot (n - 1) \cdot \ldots \cdot 2 \cdot 1$$
Permutationen. Man liest $n!$ als „$n$ Fakultät“. Zusätzlich legt man $0! = 1$ fest.
:::

Die Fakultät wächst extrem schnell: $5! = 120$, $10! = 3\,628\,800$, und $20!$ ist schon etwa
$2{,}4 \cdot 10^{18}$. Am Taschenrechner heißt die Taste meist `x!`.

**Permutationen mit gleichen Objekten.** Was passiert, wenn manche Objekte gleich sind? Nimm das Wort
OTTO. Würde man die beiden T als $T_1$ und $T_2$ unterscheiden, gäbe es $4! = 24$ Anordnungen. Aber
$OT_1T_2O$ und $OT_2T_1O$ sehen gleich aus. Jede sichtbare Anordnung wird also mehrfach gezählt: so oft,
wie man die gleichen Buchstaben untereinander vertauschen kann.

:::satz[Permutationen mit gleichen Objekten]
Eine Reihe besteht aus $n$ Objekten. Davon sind $k_1$ von Sorte 1 (untereinander gleich), $k_2$ von
Sorte 2, und so weiter bis $k_r$ von Sorte $r$. Es gilt $k_1 + k_2 + \ldots + k_r = n$. Dann gibt es
$$\frac{n!}{k_1! \cdot k_2! \cdot \ldots \cdot k_r!}$$
verschiedene Anordnungen.
:::

Dabei teilt man durch $k_1!$, weil die $k_1$ gleichen Objekte der Sorte 1 auf $k_1!$ Arten vertauscht
werden können, ohne dass sich etwas ändert. Für jede Sorte gilt dasselbe.

:::beispiel[Anagramme von ANANAS]
Das Wort ANANAS hat 6 Buchstaben: A dreimal, N zweimal, S einmal. Wären alle verschieden, gäbe es
$6! = 720$ Anordnungen. Die drei A lassen sich auf $3! = 6$ Arten vertauschen, die zwei N auf $2! = 2$
Arten. Also gibt es
$$\frac{6!}{3! \cdot 2! \cdot 1!} = \frac{720}{6 \cdot 2 \cdot 1} = 60$$
verschiedene Buchstabenfolgen. Kontrolle an OTTO: $\tfrac{4!}{2! \cdot 2!} = \tfrac{24}{4} = 6$, nämlich
OOTT, OTOT, OTTO, TOOT, TOTO, TTOO.
:::

:::achtung[Fakultät mit Potenz verwechselt]
„Wie viele Reihenfolgen gibt es für 4 Bücher?“ Eine typische falsche Rechnung:
$$4^4 = 256. \qquad \text{(falsch)}$$
$4^4$ würde erlauben, dass dasselbe Buch auf mehreren Plätzen steht. Jedes Buch steht aber genau einmal
im Regal. Nach jedem Platz gibt es ein Buch weniger: $4 \cdot 3 \cdot 2 \cdot 1 = 4! = 24$.
:::

```aufgabe
id: wk-perm-buecher
titel: Bücher ins Regal
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Sechs verschiedene Bücher werden nebeneinander ins Regal gestellt. Wie viele Reihenfolgen gibt es?
teile:
  - typ: zahl
    loesung: "6!"
    anzeige: '720'
    fehler:
      - wert: "6^6"
        meldung: Bei $6^6$ könnte dasselbe Buch mehrfach im Regal stehen. Jedes Buch kommt aber genau einmal vor.
      - wert: "36"
        meldung: Du hast $6 \cdot 6$ gerechnet. Überlege Platz für Platz, wie viele Bücher noch übrig sind.
hinweise:
  - Für den ersten Platz gibt es 6 Bücher zur Auswahl. Wie viele bleiben für den zweiten Platz?
loesung: |
  **Ansatz:** Alle 6 Bücher werden angeordnet, jedes genau einmal. Das ist eine Permutation.
  ---
  $6! = 6 \cdot 5 \cdot 4 \cdot 3 \cdot 2 \cdot 1 = 720$ Reihenfolgen.
```

### Variationen: einige Objekte geordnet auswählen

Oft ordnet man nicht alle $n$ Objekte an, sondern wählt nur $k$ davon aus, und die Reihenfolge zählt.
Solche geordneten Auswahlen heißen **Variationen**. Es gibt zwei Fälle.

- **Mit Wiederholung** (jedes Objekt darf mehrfach vorkommen, man spricht auch von „mit Zurücklegen“): Jeder der $k$ Schritte hat $n$ Möglichkeiten. Das ergibt $n^k$. Beispiel: vierstelliger PIN, $10^4$.
- **Ohne Wiederholung** (jedes Objekt höchstens einmal): Die Möglichkeiten werden in jedem Schritt um eins weniger. Das ergibt $n \cdot (n - 1) \cdot \ldots \cdot (n - k + 1)$.

Den zweiten Fall kann man mit Fakultäten kürzer schreiben:
$$n \cdot (n - 1) \cdot \ldots \cdot (n - k + 1) = \frac{n!}{(n - k)!}.$$
Warum? Im Bruch kürzen sich alle Faktoren von $(n-k)$ abwärts weg. Beispiel: $\tfrac{8!}{5!} = \tfrac{8 \cdot 7 \cdot 6 \cdot 5!}{5!} = 8 \cdot 7 \cdot 6$.

:::beispiel[Siegerpodest]
Bei einem Rennen mit 8 Läuferinnen werden Gold, Silber und Bronze vergeben. Die Reihenfolge zählt: Wer
Gold bekommt, ist etwas anderes als wer Bronze bekommt. Niemand bekommt zwei Medaillen.

Für Gold gibt es 8 Kandidatinnen, für Silber noch 7, für Bronze noch 6:
$$8 \cdot 7 \cdot 6 = \frac{8!}{5!} = 336 \text{ mögliche Podeste.}$$
:::

```reflexion
frage: Warum ist es sinnvoll, $0! = 1$ festzulegen? Denke an die Formel $\frac{n!}{(n-k)!}$ für $k = n$.
antwort: |
  Für $k = n$ ordnet man alle $n$ Objekte an, das sind $n!$ Möglichkeiten. Die Formel liefert $\frac{n!}{(n-n)!} = \frac{n!}{0!}$.
  Damit das wieder $n!$ ergibt, muss $0! = 1$ sein. Anschaulich: Null Objekte kann man auf genau eine Art anordnen,
  nämlich gar nicht. Die Festlegung sorgt dafür, dass alle Formeln auch in den Randfällen stimmen.
```

```aufgabe
id: wk-kombi-pin
titel: Fünfstelliger Code
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Ein fünfstelliger Zugangscode wird zufällig aus den Ziffern $0$ bis $9$ erzeugt. Alle $10^5$ Codes sind gleich wahrscheinlich.
  a) Wie viele Codes haben lauter verschiedene Ziffern?
  b) Mit welcher Wahrscheinlichkeit hat ein zufälliger Code lauter verschiedene Ziffern?
  c) Mit welcher Wahrscheinlichkeit kommt mindestens eine Ziffer mehrfach vor?
teile:
  - typ: zahl
    label: 'a) Anzahl'
    loesung: "10*9*8*7*6"
    anzeige: '30\,240'
    fehler:
      - wert: "binom(10, 5)"
        meldung: Das zählt nur, **welche** fünf Ziffern vorkommen. Beim Code zählt aber auch die Reihenfolge.
  - typ: zahl
    label: 'b) Wahrscheinlichkeit'
    loesung: "10*9*8*7*6/10^5"
    anzeige: '0{,}3024'
  - typ: zahl
    label: 'c) Wahrscheinlichkeit'
    loesung: "1 - 10*9*8*7*6/10^5"
    anzeige: '0{,}6976'
    fehler:
      - wert: "0.3024"
        meldung: Das ist die Wahrscheinlichkeit aus b). „Mindestens eine Ziffer mehrfach“ ist das Gegenereignis.
hinweise:
  - 'Für a): Wie viele Ziffern stehen für die erste, zweite, … Stelle noch zur Verfügung?'
loesung: |
  **Ansatz:** Geordnete Auswahl. Bei a) ohne Wiederholung, als Nenner in b) alle $10^5$ Codes.
  ---
  a) $10 \cdot 9 \cdot 8 \cdot 7 \cdot 6 = 30\,240$.
  ---
  b) Laplace: $\tfrac{30\,240}{100\,000} = 0{,}3024$.
  ---
  c) Gegenereignis von b): $1 - 0{,}3024 = 0{,}6976$. Mehr als zwei Drittel aller Codes enthalten also eine doppelte Ziffer.
```

```aufgabe
id: wk-kombi-anagramm
titel: Buchstaben anordnen
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Wie viele verschiedene Buchstabenfolgen lassen sich aus den Buchstaben des Wortes STATISTIK bilden? Alle neun Buchstaben werden verwendet.
teile:
  - typ: zahl
    loesung: "9!/(2!*3!*2!)"
    anzeige: '15\,120'
    fehler:
      - wert: "9!"
        meldung: Das gilt nur für neun verschiedene Buchstaben. Gleiche Buchstaben untereinander zu vertauschen ergibt keine neue Folge.
      - wert: "9!/(2+3+2)"
        meldung: Du musst durch die **Fakultäten** der Häufigkeiten teilen, nicht durch ihre Summe.
hinweise:
  - Zähle, wie oft jeder Buchstabe vorkommt.
  - 'S kommt zweimal, T dreimal, I zweimal, A und K je einmal vor.'
loesung: |
  **Ansatz:** Permutation mit gleichen Objekten, weil Buchstaben mehrfach vorkommen.
  ---
  Häufigkeiten: S (2), T (3), A (1), I (2), K (1). Zusammen 9 Buchstaben.
  ---
  $$\frac{9!}{2! \cdot 3! \cdot 1! \cdot 2! \cdot 1!} = \frac{362\,880}{2 \cdot 6 \cdot 2} = \frac{362\,880}{24} = 15\,120.$$
```

```aufgabe
id: wk-kombi-sitzordnung
titel: Sitzordnung
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Fünf Personen, darunter Anna und Ben, setzen sich zufällig auf fünf Stühle in einer Reihe.
  a) Wie viele Sitzordnungen gibt es?
  b) In wie vielen Sitzordnungen sitzen Anna und Ben nebeneinander?
  c) Mit welcher Wahrscheinlichkeit sitzen die beiden nebeneinander?
teile:
  - typ: zahl
    label: 'a)'
    loesung: "5!"
    fehler:
      - wert: "5^5"
        meldung: Jede Person sitzt genau einmal. Nach jedem besetzten Stuhl gibt es eine Person weniger zur Auswahl.
  - typ: zahl
    label: 'b)'
    loesung: "2*4!"
    fehler:
      - wert: "4!"
        meldung: Im Block „Anna und Ben“ kann Anna links oder rechts sitzen. Diese zwei Möglichkeiten fehlen noch.
  - typ: zahl
    label: 'c)'
    loesung: "2*4!/5!"
    anzeige: '0{,}4'
    fehler:
      - wert: "24/120"
        meldung: Du hast die Reihenfolge innerhalb des Blocks vergessen. Es gibt doppelt so viele günstige Sitzordnungen.
hinweise:
  - 'Für b): Fasse Anna und Ben zu einem „Block“ zusammen. Wie viele Objekte sind dann anzuordnen?'
  - Innerhalb des Blocks gibt es zwei Reihenfolgen.
loesung: |
  **Ansatz:** Sitzordnungen sind Permutationen. Für b) behandeln wir das Paar als ein einziges Objekt.
  ---
  a) $5! = 120$ Sitzordnungen.
  ---
  b) Der Block und die drei anderen Personen sind 4 Objekte: $4! = 24$ Anordnungen. Im Block kann Anna links oder rechts sitzen, also $2 \cdot 24 = 48$.
  ---
  c) Laplace: $\tfrac{48}{120} = 0{,}4$.
  Kontrolle über die Plätze: Es gibt 4 Paare benachbarter Stühle unter $10$ möglichen Stuhlpaaren, also ebenfalls $\tfrac{4}{10} = 0{,}4$.
```

```aufgabe
id: wk-variation-podest
titel: Podest und Toto
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  a) Bei einem Schwimmwettkampf mit 12 Teilnehmerinnen werden Platz 1, 2 und 3 vergeben. Wie viele Podeste gibt es?
  b) Beim Fußballtoto tippt man für 12 Spiele jeweils „1“ (Heimsieg), „X“ (Unentschieden) oder „2“ (Auswärtssieg).
  Wie viele verschiedene Tippscheine gibt es?
teile:
  - typ: zahl
    label: 'a) Podeste'
    loesung: "12*11*10"
    fehler:
      - wert: "binom(12, 3)"
        meldung: Das zählt nur, **welche** drei auf dem Podest stehen. Wer Gold und wer Bronze bekommt, ist aber ein Unterschied.
      - wert: "12^3"
        meldung: Bei $12^3$ könnte dieselbe Schwimmerin zwei Plätze belegen.
  - typ: zahl
    label: 'b) Tippscheine'
    loesung: "3^12"
    anzeige: '531\,441'
    fehler:
      - wert: "12^3"
        meldung: Basis und Hochzahl vertauscht. Es gibt 12 Schritte (Spiele) mit je 3 Möglichkeiten. Die Anzahl der Möglichkeiten je Schritt ist die Basis.
hinweise:
  - Entscheide jeweils, ob die Reihenfolge zählt und ob sich etwas wiederholen darf.
  - 'Bei b) hat jedes der 12 Spiele 3 Möglichkeiten, und dasselbe Zeichen darf mehrfach vorkommen.'
loesung: |
  **Ansatz:** In beiden Fällen ist die Auswahl geordnet. Bei a) ohne, bei b) mit Wiederholung.
  ---
  a) Variation ohne Wiederholung: $12 \cdot 11 \cdot 10 = 1320$ Podeste.
  ---
  b) Variation mit Wiederholung: $3^{12} = 531\,441$ Tippscheine.
  ---
  Plausibilität: Bei b) gibt es viel mehr Möglichkeiten, weil jedes der 12 Spiele frei getippt wird.
```

```aufgabe
id: wk-reihenfolge-passwort
titel: Passwortsicherheit
niveau: 3
lernziel: 1
kompetenz: modellieren
angabe: |
  Ein Passwort besteht aus genau 8 Zeichen. Erlaubt sind 26 Kleinbuchstaben, 26 Großbuchstaben und 10 Ziffern,
  jedes Zeichen beliebig oft.
  a) Wie viele Passwörter gibt es? (Angabe in Zehnerpotenzschreibweise, 3 gültige Stellen)
  b) Ein Angreifer probiert $10^9$ Passwörter pro Sekunde. Wie viele Stunden braucht er höchstens, um alle durchzuprobieren? (1 Nachkommastelle)
  c) Ein Passwort wird zufällig erzeugt. Mit welcher Wahrscheinlichkeit enthält es mindestens eine Ziffer? (4 Nachkommastellen)
teile:
  - typ: zahl
    label: 'a) Anzahl'
    loesung: "62^8"
    anzeige: '2{,}18 \cdot 10^{14}'
  - typ: zahl
    label: 'b) Stunden'
    loesung: "62^8/10^9/3600"
    toleranz: 0.1
    anzeige: '60{,}7'
  - typ: zahl
    label: 'c) mindestens eine Ziffer'
    loesung: "1 - (52/62)^8"
    toleranz: 0.0005
    anzeige: '0{,}7552'
hinweise:
  - 'Wie viele Zeichen stehen für jede Stelle zur Verfügung? Die Reihenfolge zählt, Wiederholung ist erlaubt.'
  - 'Für c): Das Gegenereignis ist „keine Ziffer“. Dann stehen für jede Stelle nur 52 Zeichen zur Verfügung.'
loesung: |
  **Ansatz:** Jede der 8 Stellen wird unabhängig aus $26 + 26 + 10 = 62$ Zeichen gewählt. Das ist eine Variation mit Wiederholung.
  ---
  a) $62^8 \approx 2{,}18 \cdot 10^{14}$ Passwörter.
  ---
  b) $\tfrac{62^8}{10^9} \approx 218\,340$ Sekunden. Geteilt durch $3600$ ergibt das etwa $60{,}7$ Stunden, also gut zweieinhalb Tage.
  ---
  c) Ohne Ziffer gibt es $52^8$ Passwörter. Laplace für das Gegenereignis: $\left(\tfrac{52}{62}\right)^8 \approx 0{,}2448$.
  Also $P(\text{mindestens eine Ziffer}) = 1 - 0{,}2448 = 0{,}7552$.
  ---
  Deutung: Schon zweieinhalb Tage reichen für alle Passwörter dieser Art. Längere Passwörter wachsen exponentiell: Jedes weitere Zeichen multipliziert die Zeit mit 62.
```

## Zählen ohne Reihenfolge: Kombinationen und Binomialkoeffizient

```aufgabe
id: wk-kombi-check-fakultaet
titel: Reihenfolgen von drei Personen
niveau: 1
art: check
angabe: |
  Auf wie viele Arten können sich drei Personen A, B und C in einer Reihe aufstellen?
  (Das ist eine Permutation, siehe [16.3 Zählen mit Reihenfolge: Produktregel, Permutationen, Variationen](/lernen/mathe3/wahrscheinlichkeit/zaehlen-mit-reihenfolge-produktregel-permutationen-variationen).)
teile:
  - typ: zahl
    loesung: "3!"
    fehler:
      - wert: "3"
        meldung: Schreib alle Reihenfolgen auf. ABC, ACB, BAC, … Es sind mehr als drei.
      - wert: "9"
        meldung: $3 \cdot 3$ würde erlauben, dass dieselbe Person zweimal in der Reihe steht.
loesung: |
  Für den ersten Platz gibt es 3 Personen, für den zweiten 2, für den dritten 1.
  ---
  $3! = 6$: ABC, ACB, BAC, BCA, CAB, CBA.
```

Bei Lotto, bei einem Team oder bei Prüfungsfragen ist die Reihenfolge **egal**. Die Ziehung
$\{3, 17, 21, 30, 38, 44\}$ ist dieselbe, egal in welcher Reihenfolge die Kugeln aus der Trommel kommen.
Solche ungeordneten Auswahlen heißen **Kombinationen**. Wie zählt man sie?

### Die Idee: erst geordnet zählen, dann durch die Reihenfolgen teilen

Aus 5 Personen A, B, C, D, E soll ein Team aus 3 Personen gebildet werden. Geordnet ausgewählt gäbe es
$5 \cdot 4 \cdot 3 = 60$ Möglichkeiten. Aber das Team $\{A, B, C\}$ taucht darin mehrfach auf: als ABC,
ACB, BAC, BCA, CAB und CBA. Das sind genau $3! = 6$ Reihenfolgen.

Jedes Team wird in den 60 geordneten Auswahlen also **genau 6-mal** gezählt. Deshalb gibt es
$\tfrac{60}{6} = 10$ Teams.

:::beispiel[Alle Dreierteams aus fünf Personen]
Die 10 Teams lassen sich vollständig aufzählen:
$$ABC,\ ABD,\ ABE,\ ACD,\ ACE,\ ADE,\ BCD,\ BCE,\ BDE,\ CDE.$$
Die Rechnung $\tfrac{5 \cdot 4 \cdot 3}{3!} = \tfrac{60}{6} = 10$ stimmt also. In der Liste ist jedes Team
alphabetisch geschrieben. So vermeidet man, dasselbe Team zweimal aufzuschreiben.
:::

:::definition[Binomialkoeffizient]
Für natürliche Zahlen $n$ und $k$ mit $0 \le k \le n$ ist
$$\binom{n}{k} = \frac{n!}{k! \cdot (n - k)!}.$$
Man liest $\binom{n}{k}$ als „$n$ über $k$“. Am Taschenrechner heißt die Taste meist `nCr`.
:::

:::satz[Kombinationen ohne Wiederholung]
Aus $n$ verschiedenen Objekten kann man auf genau $\binom{n}{k}$ Arten $k$ Objekte **ohne Beachtung der
Reihenfolge** und ohne Wiederholung auswählen. Anders gesagt: Eine Menge mit $n$ Elementen hat
$\binom{n}{k}$ Teilmengen mit $k$ Elementen.
:::

:::beweis
Wir zählen zuerst die *geordneten* Auswahlen. Das sind $\frac{n!}{(n-k)!}$ Variationen ohne
Wiederholung. Jede ungeordnete Auswahl von $k$ Objekten kommt darin genau $k!$-mal vor, nämlich einmal
in jeder ihrer $k!$ Reihenfolgen. Also ist die Anzahl der ungeordneten Auswahlen
$$\frac{n!}{(n-k)!} : k! = \frac{n!}{k! \cdot (n-k)!} = \binom{n}{k}.$$
:::

:::tipp[Kürzen statt Fakultäten ausrechnen]
Rechne $\binom{n}{k}$ möglichst nicht über die volle Fakultät $n!$ aus. Schon $70!$ ist größer als $10^{100}$,
und viele Schultaschenrechner zeigen dann nur noch eine Fehlermeldung. Außerdem sind die Zahlen unnötig groß. Kürze $(n-k)!$ sofort: Im Zähler bleiben die $k$ größten Faktoren $n(n-1) \cdots (n-k+1)$, im
Nenner steht $k!$. Beispiel: $\binom{10}{3} = \frac{10 \cdot 9 \cdot 8}{3 \cdot 2 \cdot 1} = \frac{720}{6} = 120$.
:::

:::beispiel[Pizza mit drei Belägen]
Eine Pizzeria bietet 12 Beläge an. Du wählst 3 verschiedene Beläge. Die Reihenfolge ist egal, denn
die Pizza schmeckt gleich, egal in welcher Reihenfolge der Belag draufkommt. Also
$$\binom{12}{3} = \frac{12 \cdot 11 \cdot 10}{3 \cdot 2 \cdot 1} = \frac{1320}{6} = 220 \text{ Pizzen.}$$
Gegenprobe: Geordnet wären es $1320$ Auswahlen, und jede Pizza kommt darin $3! = 6$-mal vor.
:::

:::achtung[Produktregel bei ungeordneter Auswahl]
„Aus 10 Personen werden 3 für ein Team ausgewählt.“ Eine typische falsche Rechnung:
$$10 \cdot 9 \cdot 8 = 720. \qquad \text{(falsch)}$$
Das zählt jedes Team $3! = 6$-mal, einmal in jeder Reihenfolge. Teams haben aber keine Reihenfolge.
Richtig ist $\tfrac{720}{6} = 120 = \binom{10}{3}$. Prüfe am kleinen Beispiel: Aus $\{A, B, C\}$ zwei
auswählen gibt $AB$, $AC$, $BC$, also 3 und nicht $3 \cdot 2 = 6$.
:::

:::achtung[Den Faktor (n − k)! vergessen]
Eine typische falsche Rechnung für $\binom{10}{3}$:
$$\binom{10}{3} = \frac{10!}{3!} = 604\,800. \qquad \text{(falsch)}$$
Im Nenner fehlt $(10 - 3)! = 7!$. Richtig ist $\tfrac{10!}{3! \cdot 7!} = 120$. Faustregel zur Kontrolle:
$\binom{n}{k}$ ist nie größer als die Anzahl der geordneten Auswahlen $\tfrac{n!}{(n-k)!}$, hier also
nie größer als $720$.
:::

```aufgabe
id: wk-kombi-team
titel: Projektteam
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Aus 11 Mitarbeitenden wird ein Projektteam aus 4 Personen gebildet. Alle Teammitglieder sind gleichberechtigt.
  Wie viele verschiedene Teams gibt es?
teile:
  - typ: zahl
    loesung: "binom(11, 4)"
    anzeige: '330'
    fehler:
      - wert: "11*10*9*8"
        meldung: Das sind geordnete Auswahlen. Jedes Team wird darin $4! = 24$-mal gezählt, einmal in jeder Reihenfolge.
      - wert: "11^4"
        meldung: Bei $11^4$ könnte dieselbe Person mehrfach im Team sein, und die Reihenfolge würde zählen. Beides trifft hier nicht zu.
hinweise:
  - Die Teammitglieder sind gleichberechtigt. Spielt die Reihenfolge der Auswahl dann eine Rolle?
loesung: |
  **Ansatz:** Ungeordnete Auswahl ohne Wiederholung, also Kombination.
  ---
  $\binom{11}{4} = \frac{11 \cdot 10 \cdot 9 \cdot 8}{4 \cdot 3 \cdot 2 \cdot 1} = \frac{7920}{24} = 330$ Teams.
```

### Eigenschaften der Binomialkoeffizienten

:::satz[Rechenregeln]
Für $0 \le k \le n$ gilt:

1. $\binom{n}{0} = \binom{n}{n} = 1$ und $\binom{n}{1} = n$.
2. $\binom{n}{k} = \binom{n}{n - k}$ (Symmetrie).
3. $\binom{n}{k-1} + \binom{n}{k} = \binom{n+1}{k}$ für $1 \le k \le n$ (Regel des Pascalschen Dreiecks).
:::

:::beweis
**(2)** Wählt man $k$ Objekte aus, die man **nimmt**, so legt man zugleich die $n - k$ Objekte fest, die
man **nicht** nimmt. Beide Zählungen ergeben dieselbe Anzahl. Algebraisch ändert sich
$\frac{n!}{k!(n-k)!}$ nicht, wenn man $k$ und $n - k$ vertauscht.

**(3)** Wir zählen die $k$-elementigen Teilmengen von $\{1, \dots, n+1\}$ auf zwei Arten. Entweder enthält
die Teilmenge das Element $n+1$. Dann müssen noch $k - 1$ Elemente aus den übrigen $n$ gewählt werden,
das geht auf $\binom{n}{k-1}$ Arten. Oder sie enthält $n + 1$ nicht. Dann werden alle $k$ Elemente aus
den übrigen $n$ gewählt, das geht auf $\binom{n}{k}$ Arten. Zusammen sind es $\binom{n+1}{k}$.
:::

Schreibt man die Binomialkoeffizienten zeilenweise auf, entsteht das **Pascalsche Dreieck**. Jede Zahl
ist die Summe der beiden Zahlen schräg darüber:

$$\begin{aligned}
&n = 0: & & 1\\
&n = 1: & & 1 \quad 1\\
&n = 2: & & 1 \quad 2 \quad 1\\
&n = 3: & & 1 \quad 3 \quad 3 \quad 1\\
&n = 4: & & 1 \quad 4 \quad 6 \quad 4 \quad 1
\end{aligned}$$

Der Name „Binomialkoeffizient“ kommt aus dem **binomischen Lehrsatz**. Er verallgemeinert die
binomischen Formeln aus [Kapitel 1, Terme umformen](/lernen/mathe3/zahlen/terme-umformen-binomische-formeln-und-faktorisieren):
$$(a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^k b^{n-k}.$$
Für $n = 2$ ergibt das $b^2 + 2ab + a^2$, also die erste binomische Formel. Warum stimmt der Satz? Beim
Ausmultiplizieren von $n$ Klammern $(a + b)$ nimmt man aus jeder Klammer entweder $a$ oder $b$. Der
Summand $a^k b^{n-k}$ entsteht so oft, wie man $k$ der $n$ Klammern für das $a$ auswählen kann. Das
sind $\binom{n}{k}$ Möglichkeiten. Genau dieses Argument kehrt bei der Binomialverteilung wieder.

```aufgabe
id: wk-binom-rechnen
titel: Binomialkoeffizienten berechnen
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Berechne ohne Taschenrechner a) $\binom{9}{2}$, b) $\binom{9}{7}$, c) $\binom{20}{18}$.
teile:
  - typ: zahl
    label: 'a)'
    loesung: "binom(9, 2)"
    fehler:
      - wert: "72"
        meldung: '$9 \cdot 8 = 72$ ist die Anzahl der geordneten Auswahlen. Teile noch durch $2! = 2$.'
  - typ: zahl
    label: 'b)'
    loesung: "binom(9, 7)"
    fehler:
      - wert: "72"
        meldung: Nutze die Symmetrie $\binom{9}{7} = \binom{9}{2}$ und vergiss nicht, durch $2!$ zu teilen.
  - typ: zahl
    label: 'c)'
    loesung: "binom(20, 18)"
    fehler:
      - wert: "380"
        meldung: '$20 \cdot 19 = 380$ zählt geordnet. Teile durch $2! = 2$.'
hinweise:
  - 'Symmetrie: $\binom{n}{k} = \binom{n}{n-k}$. Rechne immer mit dem kleineren $k$.'
loesung: |
  **Ansatz:** Kürzen, sodass im Zähler nur die $k$ größten Faktoren stehen.
  ---
  a) $\binom92 = \frac{9 \cdot 8}{2} = 36$.
  ---
  b) Symmetrie: $\binom97 = \binom92 = 36$.
  ---
  c) $\binom{20}{18} = \binom{20}{2} = \frac{20 \cdot 19}{2} = 190$.
```

### Kombinationen mit Wiederholung (Vertiefung)

Im Eissalon wählst du 3 Kugeln aus 5 Sorten. Dieselbe Sorte darf mehrfach vorkommen, die Reihenfolge
im Becher ist egal. Diesen Fall verlangt die Prüfung selten, er rundet aber die Übersicht ab.

**Der Trick mit Sternen und Strichen.** Schreib jede Kugel als Stern ★ und trenne die 5 Sorten durch
4 Striche |. Zum Beispiel bedeutet ★★||★|| „zweimal Sorte 1, einmal Sorte 3“. Jede Auswahl entspricht
genau einer Reihe aus 3 Sternen und 4 Strichen. Eine solche Reihe hat $3 + 4 = 7$ Plätze. Man muss nur
festlegen, welche 3 Plätze Sterne sind.

:::satz[Kombinationen mit Wiederholung]
Wählt man $k$ Objekte aus $n$ Sorten, ohne Reihenfolge und mit erlaubter Wiederholung, so gibt es
$$\binom{n + k - 1}{k}$$
Möglichkeiten.
:::

Im Eissalon sind das $\binom{5 + 3 - 1}{3} = \binom{7}{3} = 35$ Becher.

```reflexion
frage: Erkläre ohne Formel, warum $\binom{20}{17} = \binom{20}{3}$ gilt. Welche der beiden Zahlen rechnet man leichter aus?
antwort: |
  Wählt man aus 20 Personen 17 aus, die mitfahren, so legt man zugleich die 3 fest, die zu Hause bleiben. Jede
  Auswahl der 17 entspricht genau einer Auswahl der 3. Also sind beide Anzahlen gleich. Rechnen ist mit $\binom{20}{3}$
  viel bequemer: $\frac{20 \cdot 19 \cdot 18}{6} = 1140$. Bei $\binom{20}{17}$ hätte man 17 Faktoren im Zähler.
```

```aufgabe
id: wk-kombi-ausschuss
titel: Ausschuss mit Frauen und Männern
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Aus 8 Frauen und 6 Männern wird ein vierköpfiger Ausschuss zufällig ausgelost.
  a) Wie viele verschiedene Ausschüsse gibt es?
  b) Wie viele davon bestehen aus genau 2 Frauen und 2 Männern?
  c) Mit welcher Wahrscheinlichkeit besteht der Ausschuss aus genau 2 Frauen und 2 Männern? (4 Nachkommastellen)
teile:
  - typ: zahl
    label: 'a)'
    loesung: "binom(14, 4)"
    fehler:
      - wert: "14*13*12*11"
        meldung: Ein Ausschuss hat keine Reihenfolge. Du hast jeden Ausschuss $4! = 24$-mal gezählt.
  - typ: zahl
    label: 'b)'
    loesung: "binom(8, 2)*binom(6, 2)"
    fehler:
      - wert: "binom(8, 2) + binom(6, 2)"
        meldung: Jedes Frauenpaar lässt sich mit jedem Männerpaar kombinieren. Die Anzahlen werden multipliziert, nicht addiert.
  - typ: zahl
    label: 'c)'
    loesung: "binom(8, 2)*binom(6, 2)/binom(14, 4)"
    toleranz: 0.0005
    anzeige: '\tfrac{420}{1001} \approx 0{,}4196'
    fehler:
      - wert: "420/24024"
        meldung: Zähler und Nenner müssen auf dieselbe Art zählen. Der Zähler ist ungeordnet, dein Nenner geordnet.
hinweise:
  - Die Reihenfolge im Ausschuss spielt keine Rolle.
  - 'Für b): Frauen und Männer getrennt auswählen und mit der Produktregel verbinden.'
gefuehrt:
  - text: Auf wie viele Arten kann man 2 der 8 Frauen auswählen?
    teil:
      typ: zahl
      loesung: "binom(8, 2)"
    erklaerung: $\binom82 = \frac{8 \cdot 7}{2} = 28$.
  - text: Auf wie viele Arten kann man 2 der 6 Männer auswählen?
    teil:
      typ: zahl
      loesung: "binom(6, 2)"
    erklaerung: $\binom62 = \frac{6 \cdot 5}{2} = 15$.
  - text: Wie viele Ausschüsse mit 2 Frauen und 2 Männern gibt es?
    teil:
      typ: zahl
      loesung: "binom(8, 2)*binom(6, 2)"
    erklaerung: Jedes Frauenpaar passt zu jedem Männerpaar. Produktregel $28 \cdot 15 = 420$.
  - text: Wie viele Ausschüsse gibt es insgesamt?
    teil:
      typ: zahl
      loesung: "binom(14, 4)"
    erklaerung: 4 aus 14 Personen ohne Reihenfolge, $\binom{14}{4} = \frac{14 \cdot 13 \cdot 12 \cdot 11}{24} = 1001$.
  - text: Berechne die Wahrscheinlichkeit.
    teil:
      typ: zahl
      loesung: "420/1001"
      toleranz: 0.0005
    erklaerung: Laplace, günstige durch mögliche Ausschüsse, $\tfrac{420}{1001} \approx 0{,}4196$.
loesung: |
  **Ansatz:** Alle Ausschüsse sind gleich wahrscheinlich (Losentscheid), also Laplace. Gezählt wird ungeordnet.
  ---
  a) $\binom{14}{4} = \frac{14 \cdot 13 \cdot 12 \cdot 11}{24} = 1001$.
  ---
  b) 2 von 8 Frauen: $\binom82 = 28$. 2 von 6 Männern: $\binom62 = 15$. Produktregel: $28 \cdot 15 = 420$.
  ---
  c) $\tfrac{420}{1001} \approx 0{,}4196$. Gut zwei von fünf Ausschüssen sind also ausgeglichen besetzt.
```

```aufgabe
id: wk-kombi-handschlag
titel: Handschläge
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  a) Bei einem Treffen geben sich 12 Personen gegenseitig je einmal die Hand. Wie viele Handschläge sind das?
  b) Bei einem anderen Treffen gab es 45 Handschläge. Wie viele Personen waren anwesend?
teile:
  - typ: zahl
    label: 'a) Handschläge'
    loesung: "binom(12, 2)"
    fehler:
      - wert: "132"
        meldung: '$12 \cdot 11$ zählt jeden Handschlag doppelt: einmal aus Sicht jeder der beiden Personen.'
  - typ: zahl
    label: 'b) Personen'
    loesung: "10"
    fehler:
      - wert: "9"
        meldung: Setze zur Probe ein. Bei 9 Personen gibt es $\binom92 = 36$ Handschläge, das ist zu wenig.
hinweise:
  - Ein Handschlag ist ein ungeordnetes Paar von Personen.
  - 'Für b): Löse $\binom{n}{2} = \frac{n(n-1)}{2} = 45$, also $n(n-1) = 90$.'
loesung: |
  **Ansatz:** Jeder Handschlag gehört zu genau einem ungeordneten Paar. Also zählt man Paare mit $\binom{n}{2}$.
  ---
  a) $\binom{12}{2} = \frac{12 \cdot 11}{2} = 66$ Handschläge.
  ---
  b) $\frac{n(n-1)}{2} = 45$ ergibt $n^2 - n - 90 = 0$. Die Lösungsformel aus [Kapitel 2, Quadratische Gleichungen](/lernen/mathe3/gleichungen/quadratische-gleichungen) liefert $n = 10$ oder $n = -9$.
  Nur $n = 10$ ist sinnvoll. Probe: $\binom{10}{2} = 45$.
```

```aufgabe
id: wk-kombi-symmetrie
titel: Welche Zahl ist gleich?
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: |
  Welcher Ausdruck hat denselben Wert wie $\binom{25}{22}$?
teile:
  - typ: auswahl
    optionen:
      - '$\binom{25}{3}$'
      - '$\binom{22}{3}$'
      - '$25 \cdot 24 \cdot 23$'
      - '$\dfrac{25!}{22!}$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Bei der Symmetrie bleibt $n$ gleich. Es wird nur $k$ durch $n - k$ ersetzt.
      - wert: 2
        meldung: Das ist die Anzahl der geordneten Auswahlen von 3 aus 25. Es fehlt die Division durch $3!$.
      - wert: 3
        meldung: '$\tfrac{25!}{22!} = 25 \cdot 24 \cdot 23$ zählt geordnet. Es fehlt der Faktor $3!$ im Nenner.'
hinweise:
  - 'Symmetrie: $\binom{n}{k} = \binom{n}{n-k}$.'
  - 'Hier ist $n = 25$ und $n - k = 3$.'
loesung: |
  **Ansatz:** Symmetrie der Binomialkoeffizienten.
  ---
  $\binom{25}{22} = \binom{25}{25 - 22} = \binom{25}{3}$.
  ---
  Zahlenwert: $\frac{25 \cdot 24 \cdot 23}{6} = 2300$. Die Optionen 3 und 4 ergeben $13\,800$, also das Sechsfache.
```

```aufgabe
id: wk-kombi-wiederholung
titel: Eisbecher
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  (Vertiefung) Ein Eissalon hat 6 Sorten. Ein Becher enthält 3 Kugeln. Dieselbe Sorte darf mehrfach vorkommen,
  die Reihenfolge im Becher ist egal. Wie viele verschiedene Becher gibt es?
teile:
  - typ: zahl
    loesung: "binom(6 + 3 - 1, 3)"
    anzeige: '56'
    fehler:
      - wert: "binom(6, 3)"
        meldung: Das zählt nur Becher mit drei **verschiedenen** Sorten. Hier darf eine Sorte mehrfach vorkommen.
      - wert: "6^3"
        meldung: '$6^3$ unterscheidet die Reihenfolge der Kugeln. Im Becher ist die Reihenfolge aber egal.'
hinweise:
  - Ungeordnet und mit Wiederholung. Denke an Sterne (Kugeln) und Striche (Trennwände zwischen den Sorten).
  - '3 Sterne und 5 Striche ergeben eine Reihe mit 8 Plätzen.'
loesung: |
  **Ansatz:** Kombination mit Wiederholung, $n = 6$ Sorten, $k = 3$ Kugeln.
  ---
  Sterne-und-Striche: 3 Sterne und $6 - 1 = 5$ Striche, also 8 Plätze. Davon sind 3 Sterne zu wählen.
  ---
  $\binom{8}{3} = \frac{8 \cdot 7 \cdot 6}{6} = 56$ Becher.
```

```aufgabe
id: wk-kombi-poker
titel: Pokerhände
niveau: 3
lernziel: 1
kompetenz: modellieren
angabe: |
  Aus einem gut gemischten Kartenspiel mit 52 Karten (4 Farben zu je 13 Werten) erhältst du 5 Karten.
  a) Wie viele verschiedene Hände gibt es?
  b) Mit welcher Wahrscheinlichkeit sind alle 5 Karten von derselben Farbe? (3 gültige Stellen)
  c) Mit welcher Wahrscheinlichkeit enthält die Hand genau 2 Asse? (4 Nachkommastellen)
teile:
  - typ: zahl
    label: 'a) Hände'
    loesung: "binom(52, 5)"
    anzeige: '2\,598\,960'
  - typ: zahl
    label: 'b) eine Farbe'
    loesung: "4*binom(13, 5)/binom(52, 5)"
    anzeige: '0{,}00198'
  - typ: zahl
    label: 'c) genau 2 Asse'
    loesung: "binom(4, 2)*binom(48, 3)/binom(52, 5)"
    toleranz: 0.0005
    anzeige: '0{,}0399'
hinweise:
  - Eine Hand ist eine ungeordnete Auswahl von 5 aus 52 Karten.
  - 'Für b): Wähle zuerst die Farbe (4 Möglichkeiten), dann 5 der 13 Karten dieser Farbe.'
  - 'Für c): 2 der 4 Asse und 3 der 48 übrigen Karten.'
loesung: |
  **Ansatz:** Alle Hände sind gleich wahrscheinlich, also Laplace. Gezählt wird ungeordnet mit Binomialkoeffizienten.
  ---
  a) $\binom{52}{5} = 2\,598\,960$.
  ---
  b) Farbe wählen: 4 Arten. Dann 5 aus 13 Karten: $\binom{13}{5} = 1287$. Produktregel: $4 \cdot 1287 = 5148$.
  $P = \tfrac{5148}{2\,598\,960} \approx 0{,}00198$.
  ---
  c) $\binom42 = 6$ Arten für die Asse, $\binom{48}{3} = 17\,296$ für den Rest. $P = \tfrac{6 \cdot 17\,296}{2\,598\,960} = \tfrac{103\,776}{2\,598\,960} \approx 0{,}0399$.
  ---
  Deutung: Nur etwa jede 500. Hand ist einfarbig, aber jede 25. enthält genau zwei Asse.
```

## Welches Zählverfahren passt? Der Entscheidungsbaum

```aufgabe
id: wk-entscheid-check-lotto
titel: Reihenfolge beim Lotto
niveau: 1
art: check
angabe: |
  Beim Lotto „6 aus 45“ werden 6 Kugeln nacheinander gezogen. Kommt es für den Gewinn auf die Reihenfolge an, in der die Kugeln fallen?
teile:
  - typ: auswahl
    optionen:
      - 'Ja, die Reihenfolge zählt.'
      - 'Nein, nur zählt, welche Zahlen gezogen werden.'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Vergleiche die Ziehungen „3, 17, 21, 30, 38, 44“ und „44, 3, 30, 17, 21, 38“. Gewinnt man mit demselben Tipp?'
loesung: |
  Der Tipp vergleicht nur die Menge der gezogenen Zahlen.
  ---
  Die Reihenfolge ist egal. Lotto ist eine ungeordnete Auswahl ohne Wiederholung.
```

Die Formeln aus [16.3 Zählen mit Reihenfolge: Produktregel, Permutationen, Variationen](/lernen/mathe3/wahrscheinlichkeit/zaehlen-mit-reihenfolge-produktregel-permutationen-variationen) und [16.4 Zählen ohne Reihenfolge: Kombinationen und Binomialkoeffizient](/lernen/mathe3/wahrscheinlichkeit/zaehlen-ohne-reihenfolge-kombinationen-und-binomialkoeffizient) sind einfach. Schwer ist, die **richtige** zu wählen. Die meisten
Fehler bei Zählaufgaben passieren bei dieser Wahl, nicht beim Rechnen. Deshalb bekommst du in diesem Abschnitt ein
festes Vorgehen: drei Fragen, die du der Reihe nach beantwortest.

### Drei Fragen, eine Formel

**Frage 1: Werden alle $n$ Objekte angeordnet, oder werden nur $k$ von $n$ Objekten ausgewählt?**
Bei einer Sitzordnung für alle Gäste ordnest du alle an. Bei einem Team aus einer Gruppe wählst du aus.

**Frage 2: Spielt die Reihenfolge eine Rolle?** Dafür gibt es einen einfachen **Tauschtest**: Vertausche
zwei ausgewählte Objekte. Entsteht etwas anderes, zählt die Reihenfolge. Beim Podest macht es einen
Unterschied, wer Gold und wer Silber hat. Beim Team ist nach dem Tausch dasselbe Team da.

**Frage 3: Darf dasselbe Objekt mehrfach vorkommen?** Auch dafür gibt es einen Test: Kann man nach einer
Wahl dieselbe Wahl noch einmal treffen? Bei einem Zahlenschloss darf jede Ziffer mehrfach vorkommen
(„mit Wiederholung“, wie beim Ziehen **mit** Zurücklegen). Eine Person kann aber nicht zweimal im Team sein.

```plot
x: [-0.5, 17]
y: [-0.8, 10]
hoehe: 400
achsen: { x: "", y: "" }
strecken:
  - { von: [0, 5], nach: [3, 8] }
  - { von: [0, 5], nach: [3, 2.5] }
  - { von: [3, 8], nach: [6.5, 9.2], farbe: 2 }
  - { von: [3, 8], nach: [6.5, 7], farbe: 2 }
  - { von: [3, 2.5], nach: [6.5, 4], farbe: 1 }
  - { von: [3, 2.5], nach: [6.5, 1], farbe: 3 }
  - { von: [6.5, 4], nach: [10, 5], farbe: 1 }
  - { von: [6.5, 4], nach: [10, 3.3], farbe: 1 }
  - { von: [6.5, 1], nach: [10, 1.7], farbe: 3 }
  - { von: [6.5, 1], nach: [10, 0], farbe: 3 }
punkte:
  - { x: 0, y: 5, label: "Start" }
  - { x: 3, y: 8, label: "alle n anordnen" }
  - { x: 3, y: 2.5, label: "k aus n auswählen" }
  - { x: 6.5, y: 9.2, label: "alle verschieden: n!", farbe: 2 }
  - { x: 6.5, y: 7, label: "gleiche dabei: n!/(k₁!·…·kᵣ!)", farbe: 2 }
  - { x: 6.5, y: 4, label: "Reihenfolge zählt", farbe: 1 }
  - { x: 6.5, y: 1, label: "Reihenfolge egal", farbe: 3 }
  - { x: 10, y: 5, label: "mit Wiederholung: nᵏ", farbe: 1 }
  - { x: 10, y: 3.3, label: "ohne Wiederholung: n!/(n−k)!", farbe: 1 }
  - { x: 10, y: 1.7, label: "mit Wiederholung: (n+k−1 über k)", farbe: 3 }
  - { x: 10, y: 0, label: "ohne Wiederholung: (n über k)", farbe: 3 }
beschriftung: "Entscheidungsbaum „Welches Zählverfahren?“. Erste Verzweigung: alle n Objekte anordnen oder k aus n auswählen. Beim Auswählen zweite Verzweigung: Reihenfolge zählt (orange) oder ist egal (violett). Dritte Verzweigung: mit oder ohne Wiederholung. Am Ende jedes Astes steht die Formel."
```

:::merke[Der Entscheidungsbaum als Tabelle]
Wer **alle $n$** Objekte anordnet, rechnet $n!$. Sind gleiche Objekte dabei, rechnet man $\dfrac{n!}{k_1! \cdots k_r!}$.

Wer **$k$ aus $n$ auswählt**, liest die Formel hier ab:

||mit Wiederholung|ohne Wiederholung|
|---|---|---|
|**Reihenfolge zählt**|$n^k$ (PIN, Zahlenschloss, Toto)|$\dfrac{n!}{(n-k)!}$ (Podest, Ämterwahl)|
|**Reihenfolge egal**|$\dbinom{n+k-1}{k}$ (Eisbecher, Vertiefung)|$\dbinom{n}{k}$ (Lotto, Team, Ausschuss)|

Die beiden Tests: **Tauschtest** für die Reihenfolge, **Nochmal-Test** für die Wiederholung.
:::

:::beispiel[Vier Situationen sortieren]
Wir gehen jede Situation mit den drei Fragen durch.

1. **Vorstand mit Ämtern:** Aus 15 Mitgliedern werden Obfrau, Kassier und Schriftführerin gewählt. Auswählen, nicht alle anordnen. Tauschtest: Tauscht man Obfrau und Kassier, ist das ein anderer Vorstand. Also zählt die Reihenfolge. Niemand hat zwei Ämter, also ohne Wiederholung: $15 \cdot 14 \cdot 13 = 2730$.
2. **Arbeitsgruppe:** Aus denselben 15 Mitgliedern werden 3 für eine gleichberechtigte Arbeitsgruppe gewählt. Tauschtest: Nach dem Tausch ist es dieselbe Gruppe. Also $\binom{15}{3} = 455$.
3. **Zahlenschloss:** 3 Rädchen mit je 10 Ziffern. Tauschtest: 1-2-3 und 3-2-1 öffnen nicht dasselbe Schloss, die Reihenfolge zählt. Nochmal-Test: 7-7-7 ist erlaubt. Also $10^3 = 1000$.
4. **Startreihenfolge:** 6 Läuferinnen bekommen die Bahnen 1 bis 6. Alle werden angeordnet: $6! = 720$.

Vergleiche 1 und 2: Dieselben Menschen, dieselbe Anzahl, aber das Ergebnis unterscheidet sich um den Faktor $3! = 6$. Der Tauschtest entscheidet.
:::

:::achtung[Das „Kombinationsschloss“ ist keine Kombination]
Im Alltag heißt ein Zahlenschloss oft „Kombinationsschloss“. Eine typische falsche Rechnung für ein Schloss
mit 3 Rädchen:
$$\binom{10}{3} = 120 \text{ Codes.} \qquad \text{(falsch)}$$
Mathematisch ist das keine Kombination: Die Reihenfolge der Ziffern zählt, und Ziffern dürfen sich
wiederholen. Richtig ist $10^3 = 1000$. Lass dich nicht von Alltagswörtern leiten, sondern von den beiden Tests.
:::

:::achtung[Ungeordnete Ergebnisse sind oft nicht gleich wahrscheinlich]
Zwei Münzen werden geworfen. Eine typische falsche Überlegung lautet: Es gibt drei Ergebnisse, nämlich zweimal Kopf,
zweimal Zahl und einmal von jedem. Also sei
$$P(\text{einmal Kopf, einmal Zahl}) = \tfrac13. \qquad \text{(falsch)}$$
Ungeordnet gezählt sind die Ergebnisse nicht gleich wahrscheinlich. „Einmal von jedem“ entsteht als KZ
und als ZK. Richtig ist $\tfrac24 = \tfrac12$. Für Wahrscheinlichkeiten mit der Laplace-Formel zählt man
deshalb Ergebnisse so, dass sie gleich wahrscheinlich sind. Bei Würfen mit Wiederholung heißt das: geordnet.
:::

### Drei Fallen beim Erkennen

Die drei Fragen sind einfach. Trotzdem führen manche Wörter in der Angabe in die Irre. Diese drei Fallen
kommen in Aufgaben häufig vor.

**Falle 1: „nacheinander“ heißt nicht „Reihenfolge zählt“.** Beim Lotto werden die Kugeln nacheinander
gezogen. Für den Gewinn zählt aber nur, **welche** Zahlen gezogen wurden. Entscheidend ist also nicht, wie
die Auswahl abläuft, sondern ob das **Ergebnis** eine Reihenfolge hat. Genau das prüft der Tauschtest.

```aufgabe
id: wk-zaehl-check-falle
titel: Nacheinander gezogen
niveau: 1
art: check
angabe: |
  Aus 10 Losen werden nacheinander 3 Gewinnerlose gezogen. Alle drei Gewinner bekommen denselben Preis. Zählt die Reihenfolge?
teile:
  - typ: auswahl
    optionen: ['Ja, weil nacheinander gezogen wird.', 'Nein, weil alle denselben Preis bekommen.']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Mach den Tauschtest. Tauschen zwei Gewinnerlose ihren Ziehungsplatz, bekommen trotzdem dieselben drei Lose denselben Preis. Das Ergebnis ist gleich.
loesung: |
  Entscheidend ist das Ergebnis, nicht der Ablauf. Bei gleichen Preisen zählt nur, **welche** drei Lose gewinnen.
  ---
  Also ungeordnet: $\binom{10}{3} = 120$ Möglichkeiten.
```

**Falle 2: „verschieden“ heißt nicht „Reihenfolge zählt“.** „Drei verschiedene Beläge“ bedeutet nur, dass
sich kein Belag wiederholt. Das ist eine Antwort auf Frage 3 (ohne Wiederholung), nicht auf Frage 2.

**Falle 3: Zähler und Nenner verschieden gezählt.** Bei einer Laplace-Wahrscheinlichkeit dürfen günstige
und mögliche Fälle beide geordnet oder beide ungeordnet gezählt werden. Gemischt wird es falsch. Das
folgende Beispiel zeigt, dass beide Wege zum selben Ergebnis führen, wenn man sie sauber durchhält.

:::beispiel[Zwei Kugeln, zwei Zählweisen]
In einer Urne liegen 3 rote und 2 blaue Kugeln. Du ziehst 2 Kugeln ohne Zurücklegen. Wie wahrscheinlich sind beide rot?

**Geordnet gezählt:** Für die erste Kugel gibt es 5, für die zweite 4 Möglichkeiten, also $5 \cdot 4 = 20$
geordnete Paare. Günstig sind $3 \cdot 2 = 6$ Paare aus zwei roten Kugeln. $P = \tfrac{6}{20} = 0{,}3$.

**Ungeordnet gezählt:** Es gibt $\binom52 = 10$ Paare ohne Reihenfolge. Günstig sind $\binom32 = 3$ Paare. $P = \tfrac{3}{10} = 0{,}3$.

**Falsch gemischt:** Günstig ungeordnet ($3$), möglich geordnet ($20$), ergibt $\tfrac{3}{20} = 0{,}15$. Das ist nur die Hälfte.
:::

**Zusammengesetzte Aufgaben.** Viele Prüfungsaufgaben verlangen mehrere Auswahlen hintereinander, etwa
„2 Frauen **und** 2 Männer“. Dann zerlegst du die Aufgabe in Teilauswahlen. Für jede Teilauswahl wendest du
den Entscheidungsbaum an. Die Teilergebnisse verbindest du mit der Produktregel. Bei „mindestens eine Frau“
rechnest du am schnellsten über das Gegenereignis „keine Frau“.

### Kombinatorik und Laplace zusammen: das Geburtstagsproblem

Wie wahrscheinlich ist es, dass in einer Gruppe zwei Personen am selben Tag Geburtstag haben? Wir nehmen
an: 365 gleich wahrscheinliche Geburtstage, kein 29. Februar.

:::beispiel[Geburtstage in einer Gruppe von 23 Personen]
Die Geburtstage der 23 Personen bilden eine geordnete Liste mit Wiederholung. Es gibt also $365^{23}$
gleich wahrscheinliche Listen.

**Gegenereignis:** Alle Geburtstage sind verschieden. Das sind geordnete Listen ohne Wiederholung:
$365 \cdot 364 \cdot \ldots \cdot 343$ Stück. Der letzte Faktor ist $365 - 22 = 343$.

Also gilt
$$P(\text{mindestens zwei gleich}) = 1 - \frac{365 \cdot 364 \cdot \ldots \cdot 343}{365^{23}} \approx 1 - 0{,}4927 = 0{,}5073.$$
Schon bei 23 Personen ist ein gemeinsamer Geburtstag wahrscheinlicher als keiner. Das überrascht fast
alle. Der Grund: Es gibt $\binom{23}{2} = 253$ Paare von Personen, und jedes Paar ist eine Chance.
:::

```aufgabe
id: wk-zaehl-gefuehrt
titel: Kapitänin und Stellvertreterin
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Aus 9 Spielerinnen einer Mannschaft werden eine Kapitänin und eine Stellvertreterin bestimmt.
  Wie viele Möglichkeiten gibt es?
teile:
  - typ: zahl
    loesung: "9*8"
    fehler:
      - wert: "binom(9, 2)"
        meldung: Mache den Tauschtest. Ist es dasselbe, wenn Lea Kapitänin und Mia Stellvertreterin ist oder umgekehrt?
      - wert: "81"
        meldung: Mache den Nochmal-Test. Kann dieselbe Spielerin beide Ämter haben?
hinweise:
  - Geh die drei Fragen des Entscheidungsbaums durch.
gefuehrt:
  - text: 'Frage 1: Werden alle 9 Spielerinnen angeordnet, oder werden 2 von 9 ausgewählt?'
    erklaerung: Es werden nur 2 von 9 ausgewählt, also $n = 9$ und $k = 2$.
  - text: 'Frage 2 (Tauschtest): Vertausche die beiden Gewählten. Ist das ein anderes Ergebnis?'
    teil:
      typ: auswahl
      optionen: ['Ja, die Reihenfolge zählt.', 'Nein, die Reihenfolge ist egal.']
      richtig: [0]
    erklaerung: Kapitänin und Stellvertreterin sind verschiedene Ämter. Nach dem Tausch hat eine andere Person das Kapitänsamt.
  - text: 'Frage 3 (Nochmal-Test): Darf dieselbe Spielerin beide Ämter haben?'
    teil:
      typ: auswahl
      optionen: ['Ja, mit Wiederholung.', 'Nein, ohne Wiederholung.']
      richtig: [1]
    erklaerung: Eine Person hat höchstens ein Amt, also ohne Wiederholung.
  - text: Berechne die Anzahl mit der passenden Formel.
    teil:
      typ: zahl
      loesung: "9*8"
    erklaerung: Variation ohne Wiederholung, $\tfrac{9!}{7!} = 9 \cdot 8 = 72$.
loesung: |
  **Ansatz:** Entscheidungsbaum. Es wird ausgewählt, die Reihenfolge zählt (verschiedene Ämter), ohne Wiederholung.
  ---
  Variation ohne Wiederholung: $9 \cdot 8 = 72$ Möglichkeiten.
  ---
  Gegenprobe: Ungeordnet gäbe es $\binom92 = 36$ Paare. Jedes Paar kann die Ämter auf 2 Arten verteilen, $36 \cdot 2 = 72$.
```

```aufgabe
id: wk-zaehl-welches-schloss
titel: Fahrradschloss
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Ein Fahrradschloss hat 4 Ringe mit den Ziffern 0 bis 9. Welcher Term gibt die Anzahl der möglichen Codes an?
teile:
  - typ: auswahl
    optionen:
      - '$10^4$'
      - '$\binom{10}{4}$'
      - '$10 \cdot 9 \cdot 8 \cdot 7$'
      - '$4^{10}$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Mache den Tauschtest. 1-2-3-4 und 4-3-2-1 sind verschiedene Codes. Die Reihenfolge zählt also.
      - wert: 2
        meldung: Mache den Nochmal-Test. Der Code 5-5-5-5 ist erlaubt. Ziffern dürfen sich also wiederholen.
      - wert: 3
        meldung: Basis und Hochzahl vertauscht. 4 Ringe sind 4 Schritte mit je 10 Möglichkeiten.
hinweise:
  - Geh die drei Fragen durch. Zählt die Reihenfolge? Dürfen Ziffern mehrfach vorkommen?
loesung: |
  **Ansatz:** Auswählen von 4 Ziffern. Tauschtest: Reihenfolge zählt. Nochmal-Test: Wiederholung erlaubt.
  ---
  Variation mit Wiederholung: $10^4 = 10\,000$ Codes.
```

```aufgabe
id: wk-zaehl-welches-bewerbung
titel: Einladungen zum Gespräch
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Aus 15 Bewerbungen werden 4 Personen zum Vorstellungsgespräch eingeladen. Welcher Term gibt die Anzahl der Möglichkeiten an?
teile:
  - typ: auswahl
    optionen:
      - '$15 \cdot 14 \cdot 13 \cdot 12$'
      - '$\binom{15}{4}$'
      - '$15^4$'
      - '$4!$'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Tauschtest. Ist die Gruppe der Eingeladenen eine andere, wenn man zwei Namen auf der Liste vertauscht?
      - wert: 2
        meldung: Nochmal-Test. Kann dieselbe Person zweimal eingeladen werden?
      - wert: 3
        meldung: '$4!$ zählt nur die Reihenfolgen von 4 festen Personen. Gesucht ist, **welche** 4 aus 15 eingeladen werden.'
hinweise:
  - Zählt die Reihenfolge? Darf sich etwas wiederholen?
loesung: |
  **Ansatz:** Auswählen ohne Reihenfolge (Tauschtest negativ) und ohne Wiederholung.
  ---
  Kombination: $\binom{15}{4} = 1365$.
```

```aufgabe
id: wk-kombi-modell
titel: Preise verlosen
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: |
  Unter 25 Mitarbeitenden werden Preise verlost. Niemand kann zwei Preise gewinnen.
  a) Es gibt drei **verschiedene** Preise: eine Reise, ein Tablet und einen Gutschein. Welcher Term zählt die Möglichkeiten?
  b) Es gibt drei **gleiche** Gutscheine. Welcher Term zählt die Möglichkeiten?
teile:
  - typ: auswahl
    label: 'a) verschiedene Preise'
    optionen:
      - '$25^3$'
      - '$\binom{25}{3}$'
      - '$25 \cdot 24 \cdot 23$'
      - '$3^{25}$'
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Nochmal-Test. Niemand gewinnt zwei Preise, also ohne Wiederholung.
      - wert: 1
        meldung: Tauschtest. Tauschen die Gewinnerin der Reise und der Gewinner des Tablets, ist das ein anderes Ergebnis.
      - wert: 3
        meldung: Basis und Hochzahl vertauscht. Außerdem darf niemand mehrfach gewinnen.
  - typ: auswahl
    label: 'b) gleiche Gutscheine'
    optionen:
      - '$25^3$'
      - '$\binom{25}{3}$'
      - '$25 \cdot 24 \cdot 23$'
      - '$3!$'
    richtig: [1]
    fehler:
      - wert: 2
        meldung: Tauschtest. Bei gleichen Gutscheinen ändert ein Tausch der Gewinner nichts. Die Reihenfolge ist egal.
hinweise:
  - Mache für jeden Teil den Tauschtest.
  - Bei gleichen Preisen zählt nur, **wer** gewinnt.
loesung: |
  **Ansatz:** Beide Male wird 3 aus 25 ohne Wiederholung ausgewählt. Der Unterschied liegt im Tauschtest.
  ---
  a) Verschiedene Preise: Die Reihenfolge zählt. $25 \cdot 24 \cdot 23 = 13\,800$.
  ---
  b) Gleiche Preise: Die Reihenfolge ist egal. $\binom{25}{3} = 2300$.
  ---
  Zusammenhang: $13\,800 = 2300 \cdot 3!$. Jede Gewinnergruppe kann die drei verschiedenen Preise auf $3! = 6$ Arten verteilen.
```

```aufgabe
id: wk-geburtstag
titel: Geburtstagsproblem
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  In einem Hörsaal sitzen 30 Personen. Wir nehmen 365 gleich wahrscheinliche Geburtstage an.
  a) Mit welcher Wahrscheinlichkeit haben mindestens zwei Personen am selben Tag Geburtstag? (4 Nachkommastellen)
  b) Wie groß ist diese Wahrscheinlichkeit bei nur 10 Personen? (4 Nachkommastellen)
teile:
  - typ: zahl
    label: 'a) 30 Personen'
    loesung: "1 - binom(365, 30)*factorial(30)/365^30"
    toleranz: 0.0005
    anzeige: '0{,}7063'
    fehler:
      - wert: "30/365"
        meldung: Das wäre die Chance, dass **eine** bestimmte weitere Person einen der 30 Geburtstage trifft. Gesucht ist irgendein gemeinsamer Tag unter allen Paaren.
  - typ: zahl
    label: 'b) 10 Personen'
    loesung: "1 - binom(365, 10)*factorial(10)/365^10"
    toleranz: 0.0005
    anzeige: '0{,}1169'
    fehler:
      - wert: "10/365"
        meldung: Rechne über das Gegenereignis „alle Geburtstage verschieden“. Dort multiplizierst du $\tfrac{365}{365} \cdot \tfrac{364}{365} \cdots$.
hinweise:
  - 'Gegenereignis: Alle Geburtstage sind verschieden.'
  - 'Mögliche Listen: $365^{30}$. Listen ohne Wiederholung: $365 \cdot 364 \cdot \ldots \cdot 336$.'
loesung: |
  **Ansatz:** Die Geburtstage bilden eine geordnete Liste mit Wiederholung. Das Gegenereignis „alle verschieden“ ist eine Variation ohne Wiederholung.
  ---
  a) $P(\text{alle verschieden}) = \frac{365 \cdot 364 \cdot \ldots \cdot 336}{365^{30}} \approx 0{,}2937$. Also $P(\text{mindestens zwei gleich}) \approx 1 - 0{,}2937 = 0{,}7063$.
  ---
  b) Mit 10 Faktoren von $365$ bis $356$: $P(\text{alle verschieden}) \approx 0{,}8831$, also $1 - 0{,}8831 = 0{,}1169$.
  ---
  Deutung: Die Wahrscheinlichkeit wächst schnell. Bei 10 Personen ist ein gemeinsamer Geburtstag noch selten (etwa $12\,\%$), bei 30 Personen kommt er in etwa 7 von 10 Gruppen vor.
```

```aufgabe
id: wk-zaehl-laplace-wort
titel: Mit L am Anfang
niveau: 2
lernziel: 1
kompetenz: begruenden
angabe: |
  Die sieben Buchstaben des Wortes LAPLACE werden zufällig angeordnet.
  a) Wie viele verschiedene Buchstabenfolgen gibt es?
  b) Mit welcher Wahrscheinlichkeit beginnt die Folge mit L?
teile:
  - typ: zahl
    label: 'a) Anzahl'
    loesung: "7!/(2!*2!)"
    anzeige: '1260'
    fehler:
      - wert: "7!"
        meldung: L und A kommen je zweimal vor. Vertauscht man die beiden L, entsteht keine neue Folge.
  - typ: zahl
    label: 'b) Wahrscheinlichkeit'
    loesung: "2/7"
    anzeige: '\tfrac27'
    fehler:
      - wert: "1/7"
        meldung: Es gibt zwei L. Jeder der beiden kann vorne stehen.
      - wert: "1/5"
        meldung: Die fünf verschiedenen Buchstaben L, A, P, C, E sind nicht gleich wahrscheinlich am Anfang. L und A kommen doppelt vor.
hinweise:
  - 'Häufigkeiten: L (2), A (2), P, C, E (je 1).'
  - 'Für b): Halte ein L vorne fest und ordne die restlichen 6 Buchstaben an. Oder überlege, welcher der 7 Buchstaben vorne steht.'
loesung: |
  **Ansatz:** Permutation mit gleichen Objekten. Alle Anordnungen der 7 Buchstaben sind gleich wahrscheinlich.
  ---
  a) $\frac{7!}{2! \cdot 2!} = \frac{5040}{4} = 1260$.
  ---
  b) Mit L vorne bleiben A, P, L, A, C, E. Dabei kommt A zweimal vor: $\frac{6!}{2!} = 360$ Folgen. Laplace: $\tfrac{360}{1260} = \tfrac27$.
  ---
  Kürzere Begründung: Jeder der 7 Buchstaben steht mit gleicher Wahrscheinlichkeit vorne. Zwei davon sind L, also $\tfrac27$.
```

```reflexion
frage: Warum spricht man bei einem Fahrradschloss mathematisch nicht von einer „Kombination“? Formuliere es mit dem Tauschtest und dem Nochmal-Test.
antwort: |
  Eine Kombination ist eine Auswahl, bei der die Reihenfolge egal ist. Beim Fahrradschloss öffnet 1-2-3-4 das
  Schloss, 4-3-2-1 aber nicht. Der Tauschtest zeigt also: Die Reihenfolge zählt. Außerdem ist 5-5-5-5 erlaubt,
  der Nochmal-Test zeigt Wiederholung. Damit ist es eine Variation mit Wiederholung, $10^4$ Codes. Das Wort
  „Kombinationsschloss“ ist Alltagssprache und kein mathematischer Begriff.
```

```aufgabe
id: wk-zaehl-klasse
titel: Eine Klasse, vier Fragen
niveau: 3
lernziel: 1
kompetenz: modellieren
angabe: |
  Eine Lehrveranstaltung hat 24 Teilnehmende.
  a) Es werden eine Sprecherin und eine Stellvertretung gewählt. Wie viele Möglichkeiten gibt es?
  b) Es wird ein gleichberechtigtes Dreierteam für ein Projekt gebildet. Wie viele Teams gibt es?
  c) Jede Person bekommt einen vierstelligen Code aus den Buchstaben A bis F, Buchstaben dürfen sich wiederholen. Wie viele Codes gibt es?
  d) Mit welcher Wahrscheinlichkeit hat ein zufälliger Code aus c) lauter verschiedene Buchstaben? (4 Nachkommastellen)
teile:
  - typ: zahl
    label: 'a)'
    loesung: "24*23"
  - typ: zahl
    label: 'b)'
    loesung: "binom(24, 3)"
  - typ: zahl
    label: 'c)'
    loesung: "6^4"
  - typ: zahl
    label: 'd)'
    loesung: "6*5*4*3/6^4"
    toleranz: 0.0005
    anzeige: '0{,}2778'
hinweise:
  - Beantworte für jeden Teil die drei Fragen des Entscheidungsbaums.
  - 'Für d): Günstig sind die geordneten Codes ohne Wiederholung, möglich sind alle aus c).'
loesung: |
  **Ansatz:** Für jeden Teil Entscheidungsbaum: alle anordnen oder auswählen, Tauschtest, Nochmal-Test.
  ---
  a) Verschiedene Ämter (Reihenfolge zählt), ohne Wiederholung: $24 \cdot 23 = 552$.
  ---
  b) Gleichberechtigt (Reihenfolge egal), ohne Wiederholung: $\binom{24}{3} = \frac{24 \cdot 23 \cdot 22}{6} = 2024$.
  ---
  c) Reihenfolge zählt, mit Wiederholung: $6^4 = 1296$.
  ---
  d) Ohne Wiederholung: $6 \cdot 5 \cdot 4 \cdot 3 = 360$. Laplace: $\tfrac{360}{1296} = \tfrac{5}{18} \approx 0{,}2778$.
```


## Mehrstufige Experimente: Baumdiagramme und Pfadregeln

```aufgabe
id: wk-baum-check-bruch
titel: Brüche multiplizieren
niveau: 1
art: check
angabe: |
  Berechne $\tfrac23 \cdot \tfrac34$ und gib das Ergebnis vollständig gekürzt an.
  (Wiederholung: [Kapitel 1, Abschnitt „Bruchrechnen“](/lernen/mathe3/zahlen/bruchrechnen))
teile:
  - typ: zahl
    loesung: "2/3*3/4"
    anzeige: '\tfrac12'
    fehler:
      - wert: "17/12"
        meldung: Du hast addiert. Gefragt ist das Produkt. Man multipliziert Zähler mit Zähler und Nenner mit Nenner.
loesung: |
  Zähler mal Zähler und Nenner mal Nenner: $\tfrac{2 \cdot 3}{3 \cdot 4} = \tfrac{6}{12}$.
  ---
  Kürzen durch $6$ ergibt $\tfrac12$.
```

Viele Zufallsexperimente laufen in **Stufen** ab. Man zieht zweimal aus einer Urne. Ein Bauteil durchläuft
zwei Prüfstationen. Ein Würfel wird viermal geworfen. In diesem Abschnitt lernst du, solche Experimente
mit einem Bild zu ordnen und daraus Wahrscheinlichkeiten abzulesen.

### Das Baumdiagramm

**Worum geht es?** Ein **Baumdiagramm** zeichnet alle möglichen Abläufe eines mehrstufigen Experiments
auf. Jede Verzweigung ist eine Stufe. An jeden Ast schreibst du, mit welcher Wahrscheinlichkeit man ihn
geht, wenn man an seinem Ausgangspunkt steht. Diese Zahl heißt **Astwahrscheinlichkeit**.

Ein Weg vom Startpunkt (der **Wurzel**) bis zu einem Endpunkt (einem **Blatt**) heißt **Pfad**. Jeder
Pfad beschreibt einen vollständigen Ablauf, also ein Ergebnis des ganzen Experiments.

:::beispiel[Zwei Kugeln ohne Zurücklegen]
In einer Urne liegen 3 rote und 2 blaue Kugeln. Du ziehst nacheinander zwei Kugeln und legst die erste
**nicht** zurück.

- **Erste Stufe:** 5 Kugeln, davon 3 rot. Also ist $P(r) = \tfrac35$ und $P(b) = \tfrac25$.
- **Zweite Stufe nach einer roten Kugel:** Jetzt liegen nur noch 4 Kugeln in der Urne, davon 2 rot und 2 blau. Der Ast „rot“ hat also $\tfrac24$, der Ast „blau“ ebenfalls $\tfrac24$.
- **Zweite Stufe nach einer blauen Kugel:** Es liegen 3 rote und 1 blaue Kugel in der Urne. Also $\tfrac34$ für rot und $\tfrac14$ für blau.

Die Astwahrscheinlichkeiten der zweiten Stufe hängen davon ab, was in der ersten Stufe passiert ist.
Das ist typisch für Ziehen ohne Zurücklegen.
:::

```plot
x: [-0.5, 10]
y: [-3.8, 3.8]
achsen: { x: "", y: "" }
strecken:
  - { von: [0, 0], nach: [3, 2], farbe: 1 }
  - { von: [0, 0], nach: [3, -2], farbe: 0 }
  - { von: [3, 2], nach: [6, 3], farbe: 1 }
  - { von: [3, 2], nach: [6, 1], farbe: 0 }
  - { von: [3, -2], nach: [6, -1], farbe: 1 }
  - { von: [3, -2], nach: [6, -3], farbe: 0 }
punkte:
  - { x: 0, y: 0, label: "Start", farbe: 3 }
  - { x: 3, y: 2, label: "r (3/5)", farbe: 1 }
  - { x: 3, y: -2, label: "b (2/5)", farbe: 0 }
  - { x: 6, y: 3, label: "r (2/4): P(rr) = 6/20", farbe: 1 }
  - { x: 6, y: 1, label: "b (2/4): P(rb) = 6/20", farbe: 0 }
  - { x: 6, y: -1, label: "r (3/4): P(br) = 6/20", farbe: 1 }
  - { x: 6, y: -3, label: "b (1/4): P(bb) = 2/20", farbe: 0 }
beschriftung: Baumdiagramm für zweimaliges Ziehen ohne Zurücklegen aus einer Urne mit 3 roten und 2 blauen Kugeln. In Klammern steht die Astwahrscheinlichkeit, rechts die Wahrscheinlichkeit des ganzen Pfades.
```

### Die beiden Pfadregeln

Wie kommt man von den Ästen zur Wahrscheinlichkeit eines ganzen Pfades? Denk dir, du führst das
Experiment **100-mal** durch. Etwa 60-mal ist die erste Kugel rot, denn $\tfrac35$ von 100 sind 60. In
diesen 60 Fällen ist die zweite Kugel ungefähr in der Hälfte der Fälle wieder rot, denn der Ast hat
$\tfrac24$. Das sind etwa 30 von 100 Durchgängen. Also ist $P(rr) \approx \tfrac{30}{100} = 0{,}3$.

Genau das ergibt die Rechnung $\tfrac35 \cdot \tfrac24 = \tfrac{6}{20} = 0{,}3$. Man nimmt einen **Anteil
von einem Anteil**, und das heißt multiplizieren.

:::satz[Pfadregeln]
1. **Produktregel für Pfade:** Die Wahrscheinlichkeit eines Pfades ist das Produkt der Astwahrscheinlichkeiten entlang dieses Pfades.
2. **Summenregel für Pfade:** Die Wahrscheinlichkeit eines Ereignisses ist die Summe der Wahrscheinlichkeiten aller Pfade, die zu diesem Ereignis gehören.
:::

Warum darf man bei der Summenregel einfach addieren? Zwei verschiedene Pfade können nicht gleichzeitig
eintreten. Sie sind also unvereinbar, und für unvereinbare Ereignisse erlaubt Axiom 3 aus
[16.1 Zufallsexperimente, Ereignisse und die Grundregeln](/lernen/mathe3/wahrscheinlichkeit/zufallsexperimente-ereignisse-und-die-grundregeln) die einfache Summe.

Im Urnenbeispiel ergibt das:

- **Beide rot:** ein Pfad, also $P(rr) = \tfrac35 \cdot \tfrac24 = \tfrac{6}{20} = 0{,}3$.
- **Zwei verschiedene Farben:** zwei Pfade, nämlich $rb$ und $br$. Also $\tfrac35 \cdot \tfrac24 + \tfrac25 \cdot \tfrac34 = \tfrac{6}{20} + \tfrac{6}{20} = 0{,}6$.
- **Kontrolle:** Alle vier Pfade zusammen ergeben $\tfrac{6 + 6 + 6 + 2}{20} = 1$.

Die Astwahrscheinlichkeiten ab der zweiten Stufe sind Wahrscheinlichkeiten „unter der Bedingung, dass
vorher schon etwas Bestimmtes passiert ist“. In [16.7 Bedingte Wahrscheinlichkeit und Vierfeldertafel](/lernen/mathe3/wahrscheinlichkeit/bedingte-wahrscheinlichkeit-und-vierfeldertafel) bekommen sie einen eigenen Namen:
**bedingte Wahrscheinlichkeiten**.

:::beispiel[Dieselbe Urne mit Zurücklegen]
Jetzt legst du die erste Kugel wieder zurück. Dann sieht die Urne beim zweiten Zug genau so aus wie beim
ersten. Jede Stufe hat dieselben Äste $\tfrac35$ und $\tfrac25$.

- **Beide rot:** $P(rr) = \tfrac35 \cdot \tfrac35 = \tfrac{9}{25} = 0{,}36$.
- **Zwei verschiedene Farben:** $\tfrac35 \cdot \tfrac25 + \tfrac25 \cdot \tfrac35 = \tfrac{12}{25} = 0{,}48$.

Vergleich: Ohne Zurücklegen war $P(rr) = 0{,}3$, also kleiner. Das ist plausibel. Nach einer roten Kugel
fehlt eine rote in der Urne, und eine zweite rote wird seltener.
:::

:::merke[So arbeitest du mit einem Baum]
1. Stufen festlegen: Was passiert zuerst, was danach?
2. An jeden Ast die Wahrscheinlichkeit schreiben, **ausgehend vom Knoten davor**.
3. Kontrolle an jedem Knoten: Die Äste, die von ihm ausgehen, ergeben zusammen $1$.
4. Gesuchte Pfade markieren, entlang jedes Pfades multiplizieren, die Pfade addieren.
5. Kontrolle am Ende: Alle Pfade zusammen ergeben $1$.

Beim Ziehen **mit** Zurücklegen sind die Äste jeder Stufe gleich. Beim Ziehen **ohne** Zurücklegen ändern sie sich.
:::

:::achtung[Entlang des Pfades addiert]
Eine typische falsche Rechnung für „beide rot“ in der Urne mit 3 roten und 2 blauen Kugeln:
$$P(rr) = \tfrac35 + \tfrac24 = 1{,}1. \qquad \text{(falsch)}$$
Ein Ergebnis über $1$ ist unmöglich. Entlang **eines** Pfades wird multipliziert, denn man nimmt einen
Anteil vom Anteil. Addiert wird nur **zwischen verschiedenen** Pfaden. Richtig ist $\tfrac35 \cdot \tfrac24 = 0{,}3$.
:::

:::achtung[Ohne Zurücklegen, aber mit festen Ästen gerechnet]
Zwei Kugeln werden **ohne** Zurücklegen gezogen. Eine typische falsche Rechnung:
$$P(rr) = \tfrac35 \cdot \tfrac35 = 0{,}36. \qquad \text{(falsch)}$$
Das wäre richtig mit Zurücklegen. Ohne Zurücklegen fehlt nach dem ersten Zug eine Kugel. Für die zweite
Stufe zählst du neu: noch 4 Kugeln, davon 2 rot. Richtig ist $\tfrac35 \cdot \tfrac24 = 0{,}3$.
:::

```aufgabe
id: wk-baum-gefuehrt
titel: Socken aus der Schublade
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  In einer Schublade liegen 5 schwarze und 3 graue Socken, gut gemischt. Du ziehst im Dunkeln nacheinander zwei Socken,
  ohne die erste zurückzulegen. Mit welcher Wahrscheinlichkeit haben beide Socken dieselbe Farbe? Gib einen gekürzten Bruch an.
teile:
  - typ: zahl
    loesung: "5/8*4/7 + 3/8*2/7"
    anzeige: '\tfrac{13}{28} \approx 0{,}4643'
    fehler:
      - wert: "5/8*5/8 + 3/8*3/8"
        meldung: So rechnet man mit Zurücklegen. Nach dem ersten Zug liegen aber nur noch 7 Socken in der Schublade.
      - wert: "5/8*4/7"
        meldung: Das ist nur der Pfad „beide schwarz“. „Dieselbe Farbe“ gilt auch für „beide grau“. Addiere diesen Pfad dazu.
hinweise:
  - Zeichne einen Baum mit zwei Stufen. Nach dem ersten Zug sind nur noch 7 Socken in der Schublade.
gefuehrt:
  - text: Wie groß ist die Wahrscheinlichkeit, dass die erste Socke schwarz ist?
    teil: { typ: zahl, loesung: "5/8" }
    erklaerung: 5 der 8 Socken sind schwarz, also $\tfrac58$.
  - text: Die erste Socke war schwarz. Mit welcher Wahrscheinlichkeit ist die zweite auch schwarz?
    teil: { typ: zahl, loesung: "4/7" }
    erklaerung: Jetzt liegen noch 7 Socken in der Schublade, davon 4 schwarze. Also $\tfrac47$.
  - text: Berechne die Wahrscheinlichkeit des Pfades „schwarz, schwarz“.
    teil: { typ: zahl, loesung: "5/8*4/7" }
    erklaerung: Produktregel entlang des Pfades, $\tfrac58 \cdot \tfrac47 = \tfrac{20}{56}$.
  - text: Berechne ebenso den Pfad „grau, grau“.
    teil: { typ: zahl, loesung: "3/8*2/7" }
    erklaerung: Erst $\tfrac38$, danach sind noch 2 graue unter 7 Socken, also $\tfrac38 \cdot \tfrac27 = \tfrac{6}{56}$.
  - text: Wie groß ist die Wahrscheinlichkeit für dieselbe Farbe?
    teil: { typ: zahl, loesung: "5/8*4/7 + 3/8*2/7" }
    erklaerung: Summenregel über beide Pfade, $\tfrac{20}{56} + \tfrac{6}{56} = \tfrac{26}{56} = \tfrac{13}{28}$.
loesung: |
  **Ansatz:** Zweistufiger Baum ohne Zurücklegen. „Dieselbe Farbe“ besteht aus den zwei Pfaden „schwarz, schwarz“ und „grau, grau“.
  ---
  Produktregel: $P(ss) = \tfrac58 \cdot \tfrac47 = \tfrac{20}{56}$ und $P(gg) = \tfrac38 \cdot \tfrac27 = \tfrac{6}{56}$.
  ---
  Summenregel: $\tfrac{20}{56} + \tfrac{6}{56} = \tfrac{26}{56} = \tfrac{13}{28} \approx 0{,}4643$. Etwas weniger als jedes zweite Mal passen die Socken zusammen.
```

```aufgabe
id: wk-baum-urne
titel: Zwei Kugeln ziehen
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  In einer Urne liegen 4 weiße und 6 schwarze Kugeln. Es werden zwei Kugeln ohne Zurücklegen gezogen.
  Berechne die Wahrscheinlichkeit, dass a) beide weiß sind, b) beide dieselbe Farbe haben, c) mindestens eine weiß ist.
  Gib gekürzte Brüche an.
teile:
  - typ: zahl
    label: 'a) beide weiß'
    loesung: "4/10*3/9"
    anzeige: '\tfrac{2}{15} \approx 0{,}1333'
    fehler:
      - wert: "4/10*4/10"
        meldung: So rechnet man mit Zurücklegen. Nach einer weißen Kugel sind nur noch 3 weiße unter 9 Kugeln übrig.
  - typ: zahl
    label: 'b) gleiche Farbe'
    loesung: "4/10*3/9 + 6/10*5/9"
    anzeige: '\tfrac{7}{15} \approx 0{,}4667'
    fehler:
      - wert: "4/10*3/9"
        meldung: Das ist nur „beide weiß“. Auch „beide schwarz“ ist dieselbe Farbe. Addiere diesen Pfad.
  - typ: zahl
    label: 'c) mindestens eine weiß'
    loesung: "1 - 6/10*5/9"
    anzeige: '\tfrac{2}{3}'
    fehler:
      - wert: "4/10*6/9"
        meldung: Das ist nur der Pfad „erst weiß, dann schwarz“. „Mindestens eine weiß“ umfasst drei Pfade. Schneller geht es mit dem Gegenereignis.
hinweise:
  - 'Zeichne den Baum. Erster Zug: $\tfrac{4}{10}$ weiß, $\tfrac{6}{10}$ schwarz. Im zweiten Zug sind nur noch 9 Kugeln da.'
loesung: |
  **Ansatz:** Zweistufiger Baum ohne Zurücklegen. Erster Zug $P(w) = \tfrac{4}{10}$, $P(s) = \tfrac{6}{10}$. Im zweiten Zug ist eine Kugel weniger da.
  ---
  a) $P(ww) = \tfrac{4}{10} \cdot \tfrac39 = \tfrac{12}{90} = \tfrac{2}{15}$.
  ---
  b) $P(ww) + P(ss) = \tfrac{12}{90} + \tfrac{6}{10} \cdot \tfrac59 = \tfrac{12}{90} + \tfrac{30}{90} = \tfrac{42}{90} = \tfrac{7}{15}$.
  ---
  c) Das Gegenereignis von „mindestens eine weiß“ ist „keine weiß“, also der Pfad $ss$. Daher $1 - \tfrac{30}{90} = \tfrac{60}{90} = \tfrac23$.
  Kontrolle: Die Pfade $ws$, $sw$ und $ww$ ergeben $\tfrac{24}{90} + \tfrac{24}{90} + \tfrac{12}{90} = \tfrac{60}{90}$.
```

### „Mindestens einmal“: der Trick mit dem Gegenereignis

Wie wahrscheinlich ist **mindestens eine** Sechs bei vier Würfen? Direkt müsstest du die Fälle „genau
eine“, „genau zwei“, „genau drei“ und „genau vier Sechsen“ einzeln berechnen und addieren. Das sind viele
Pfade. Das Gegenereignis „**keine** Sechs“ hat dagegen genau **einen** Pfad: viermal „keine Sechs“.

:::beispiel[Die Wette des Chevalier de Méré]
Ein französischer Adeliger, der Chevalier de Méré, wettete im 17. Jahrhundert darauf, dass bei vier Würfen
mindestens eine Sechs fällt. Jeder Wurf ist mit Wahrscheinlichkeit $\tfrac56$ keine Sechs. Die Würfe
beeinflussen sich nicht, also multiplizierst du entlang des Pfades:
$$P(\text{mindestens eine } 6) = 1 - P(\text{keine } 6) = 1 - \left(\tfrac56\right)^4 \approx 1 - 0{,}4823 = 0{,}5177.$$
Die Wette war also günstig. Danach wettete er auf mindestens einen Sechserpasch (zwei Sechsen gleichzeitig)
in 24 Würfen mit zwei Würfeln. Ein Pasch hat die Wahrscheinlichkeit $\tfrac{1}{36}$, kein Pasch also $\tfrac{35}{36}$:
$$1 - \left(\tfrac{35}{36}\right)^{24} \approx 0{,}4914.$$
Das ist knapp unter $0{,}5$, und de Méré verlor auf Dauer. Blaise Pascal rechnete das nach. Sein
Briefwechsel mit Pierre de Fermat gilt als Geburtsstunde der Wahrscheinlichkeitsrechnung.
:::

:::merke[Mindestens ein Treffer]
$$P(\text{mindestens ein Treffer}) = 1 - P(\text{kein Treffer}).$$
Bei $n$ Versuchen, die sich gegenseitig nicht beeinflussen, mit Trefferwahrscheinlichkeit $p$ in jedem Versuch gilt
$$P(\text{mindestens ein Treffer}) = 1 - (1 - p)^n.$$
Dabei ist $1 - p$ die Wahrscheinlichkeit, dass **ein** Versuch kein Treffer ist, und $(1 - p)^n$ die
Wahrscheinlichkeit, dass **alle** $n$ Versuche kein Treffer sind.
:::

Eng verwandt ist die umgekehrte Frage: **Wie oft muss man es mindestens versuchen**, damit mit einer
vorgegebenen Sicherheit, etwa $90\,\%$, mindestens ein Treffer dabei ist? Jetzt ist $n$ unbekannt. Es
steht in der Hochzahl, also brauchst du den Logarithmus aus [Kapitel 1, Logarithmen](/lernen/mathe3/zahlen/logarithmen).

:::beispiel[Wie oft würfeln?]
Wie oft musst du würfeln, damit mit mindestens $90\,\%$ Wahrscheinlichkeit mindestens eine Sechs fällt?

1. **Ansatz:** $1 - \left(\tfrac56\right)^n \ge 0{,}9$.
2. **Umstellen:** Wir ziehen $1$ ab und multiplizieren mit $-1$. Dabei dreht sich das Zeichen um: $\left(\tfrac56\right)^n \le 0{,}1$.
3. **Logarithmieren:** Der Logarithmus ist wachsend, das Zeichen bleibt: $n \cdot \ln\tfrac56 \le \ln 0{,}1$.
4. **Durch $\ln\tfrac56$ teilen:** Diese Zahl ist negativ, weil $\tfrac56 < 1$ ist. Beim Teilen durch eine negative Zahl dreht sich das Zeichen um: $n \ge \dfrac{\ln 0{,}1}{\ln \frac56} \approx 12{,}63$.
5. **Aufrunden:** $n$ muss eine ganze Zahl sein, also $n = 13$.

Probe: Bei 12 Würfen ist $1 - \left(\tfrac56\right)^{12} \approx 0{,}888$, das reicht nicht. Bei 13 Würfen ist
$1 - \left(\tfrac56\right)^{13} \approx 0{,}907$, das reicht. Du brauchst also **mindestens 13 Würfe**.
:::

:::achtung[Zeichen nicht umgedreht, falsch gerundet]
Eine typische falsche Rechnung beim letzten Beispiel:
$$n \le \frac{\ln 0{,}1}{\ln \frac56} \approx 12{,}63, \text{ also höchstens } 12 \text{ Würfe.} \qquad \text{(falsch)}$$
Hier sind zwei Fehler passiert. Erstens ist $\ln\tfrac56$ negativ. Beim Teilen durch eine negative Zahl
dreht sich das Ungleichheitszeichen um, es heißt also $n \ge 12{,}63$. Zweitens wird bei „mindestens“
immer **aufgerundet**, denn $n = 12$ erfüllt die Bedingung nicht. Richtig sind mindestens 13 Würfe.
Mach am Ende immer die Probe mit $n$ und $n - 1$.
:::

```aufgabe
id: wk-baum-mindestens
titel: Mindestens ein Gewinn am Glücksrad
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Ein Glücksrad bleibt bei jeder Drehung mit Wahrscheinlichkeit $0{,}2$ auf „Gewinn“ stehen, unabhängig von früheren Drehungen.
  Du drehst fünfmal. Wie groß ist die Wahrscheinlichkeit für mindestens einen Gewinn? (4 Nachkommastellen)
teile:
  - typ: zahl
    loesung: "1 - 0.8^5"
    toleranz: 0.0005
    anzeige: '0{,}6723'
    fehler:
      - wert: "5*0.2"
        meldung: |
          Du hast die fünf Einzelwahrscheinlichkeiten addiert. Das ergibt $1$, also „sicher“. Das kann nicht stimmen,
          denn man kann auch fünfmal verlieren. Rechne über das Gegenereignis „kein Gewinn“.
      - wert: "0.8^5"
        meldung: Das ist die Wahrscheinlichkeit für **keinen** Gewinn. Gesucht ist das Gegenereignis davon.
hinweise:
  - Was ist das Gegenereignis von „mindestens ein Gewinn“?
loesung: |
  **Ansatz:** Gegenereignis „kein Gewinn“. Das ist ein einziger Pfad im Baum, nämlich fünfmal „kein Gewinn“.
  ---
  Ein Dreh ist mit $1 - 0{,}2 = 0{,}8$ kein Gewinn. Fünfmal hintereinander: $0{,}8^5 \approx 0{,}3277$.
  ---
  $P(\text{mindestens ein Gewinn}) = 1 - 0{,}3277 = 0{,}6723$. In gut zwei von drei Fällen gewinnst du also mindestens einmal.
```

```aufgabe
id: wk-baum-system
titel: Zuverlässigkeit von Systemen
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Ein Server hängt von zwei Komponenten ab, die unabhängig voneinander arbeiten. Komponente A funktioniert ein Jahr lang
  mit Wahrscheinlichkeit $0{,}9$, Komponente B mit $0{,}95$.
  a) **Reihenschaltung:** Der Server läuft nur, wenn beide Komponenten funktionieren. Mit welcher Wahrscheinlichkeit läuft er?
  b) **Parallelschaltung:** Der Server läuft, wenn mindestens eine Komponente funktioniert. Mit welcher Wahrscheinlichkeit läuft er?
teile:
  - typ: zahl
    label: 'a) Reihenschaltung'
    loesung: "0.9*0.95"
    anzeige: '0{,}855'
    fehler:
      - wert: "0.95"
        meldung: Der Server braucht **beide** Komponenten. Dann ist er höchstens so zuverlässig wie die schwächere, und meist sogar weniger. Multipliziere.
  - typ: zahl
    label: 'b) Parallelschaltung'
    loesung: "1 - 0.1*0.05"
    anzeige: '0{,}995'
    fehler:
      - wert: "0.9*0.95"
        meldung: Das ist „beide funktionieren“. Bei der Parallelschaltung reicht **eine** funktionierende Komponente.
      - wert: "0.1*0.05"
        meldung: Das ist die Wahrscheinlichkeit, dass **beide ausfallen**. Der Server läuft im Gegenereignis davon.
hinweise:
  - 'Zeichne einen Baum mit den Stufen „A funktioniert oder nicht“ und „B funktioniert oder nicht“.'
  - 'Bei b) ist das Gegenereignis „beide fallen aus“. Es hat nur einen Pfad.'
loesung: |
  **Ansatz:** Zweistufiger Baum. Weil die Komponenten unabhängig sind, sind die Äste der zweiten Stufe überall gleich.
  ---
  a) Ein Pfad, „A funktioniert und B funktioniert“: $0{,}9 \cdot 0{,}95 = 0{,}855$.
  ---
  b) Der Server fällt nur aus, wenn beide ausfallen: $0{,}1 \cdot 0{,}05 = 0{,}005$. Also läuft er mit $1 - 0{,}005 = 0{,}995$.
  ---
  Deutung: Die Reihenschaltung ist **schlechter** als jede einzelne Komponente. Die doppelte Ausführung (Redundanz) macht das System dagegen viel zuverlässiger.
```

```aufgabe
id: wk-baum-anschluss
titel: Den Zug erreichen
niveau: 2
lernziel: 2
kompetenz: modellieren
angabe: |
  Ein Bus ist mit Wahrscheinlichkeit $0{,}8$ pünktlich. Ist er pünktlich, erreichst du den Anschlusszug mit Wahrscheinlichkeit $0{,}95$.
  Ist er verspätet, erreichst du den Zug nur mit Wahrscheinlichkeit $0{,}4$.
  a) Mit welcher Wahrscheinlichkeit erreichst du den Zug?
  b) Mit welcher Wahrscheinlichkeit ist der Bus verspätet **und** du verpasst den Zug?
teile:
  - typ: zahl
    label: 'a) Zug erreicht'
    loesung: "0.8*0.95 + 0.2*0.4"
    anzeige: '0{,}84'
    fehler:
      - wert: "0.8*0.95"
        meldung: Das ist nur der Pfad „Bus pünktlich, Zug erreicht“. Auch mit verspätetem Bus kann man den Zug noch erreichen.
      - wert: "0.95*0.4"
        meldung: Du hast die beiden Astwahrscheinlichkeiten der zweiten Stufe multipliziert. Sie liegen auf **verschiedenen** Pfaden. Jeder Pfad beginnt an der Wurzel.
  - typ: zahl
    label: 'b) verspätet und verpasst'
    loesung: "0.2*0.6"
    anzeige: '0{,}12'
    fehler:
      - wert: "0.2*0.4"
        meldung: '$0{,}4$ ist die Wahrscheinlichkeit, den Zug trotz Verspätung zu **erreichen**. Für „verpasst“ brauchst du den anderen Ast, $1 - 0{,}4$.'
hinweise:
  - 'Erste Stufe: Bus pünktlich ($0{,}8$) oder verspätet ($0{,}2$). Zweite Stufe: Zug erreicht oder verpasst.'
  - 'Bei a) führen zwei Pfade zu „Zug erreicht“. Multipliziere entlang jedes Pfades und addiere die beiden Ergebnisse.'
loesung: |
  **Ansatz:** Zweistufiger Baum. Die Äste der zweiten Stufe hängen davon ab, ob der Bus pünktlich war.
  ---
  Äste: pünktlich $0{,}8$, dann erreicht $0{,}95$ und verpasst $0{,}05$. Verspätet $0{,}2$, dann erreicht $0{,}4$ und verpasst $0{,}6$.
  ---
  a) Zwei Pfade: $0{,}8 \cdot 0{,}95 + 0{,}2 \cdot 0{,}4 = 0{,}76 + 0{,}08 = 0{,}84$.
  ---
  b) Ein Pfad: $0{,}2 \cdot 0{,}6 = 0{,}12$.
  Kontrolle: Die vier Pfade $0{,}76 + 0{,}04 + 0{,}08 + 0{,}12$ ergeben $1$.
```

```aufgabe
id: wk-baum-drei-stufen
titel: Drei Sicherungen prüfen
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  In einer Packung liegen 10 Sicherungen, davon sind 2 defekt. Du entnimmst nacheinander drei Sicherungen ohne Zurücklegen.
  Berechne die Wahrscheinlichkeit, dass a) alle drei intakt sind, b) genau eine defekt ist, c) mindestens eine defekt ist.
  Gib gekürzte Brüche an.
teile:
  - typ: zahl
    label: 'a) alle intakt'
    loesung: "8/10*7/9*6/8"
    anzeige: '\tfrac{7}{15}'
    fehler:
      - wert: "(8/10)^3"
        meldung: So rechnet man mit Zurücklegen. Nach jeder entnommenen intakten Sicherung ist eine intakte weniger in der Packung.
  - typ: zahl
    label: 'b) genau eine defekt'
    loesung: "3*(2/10*8/9*7/8)"
    anzeige: '\tfrac{7}{15}'
    fehler:
      - wert: "2/10*8/9*7/8"
        meldung: Das ist nur der Pfad „defekt, intakt, intakt“. Die defekte Sicherung kann auch an zweiter oder dritter Stelle kommen.
  - typ: zahl
    label: 'c) mindestens eine defekt'
    loesung: "1 - 8/10*7/9*6/8"
    anzeige: '\tfrac{8}{15}'
    fehler:
      - wert: "2/10"
        meldung: Das ist nur die Wahrscheinlichkeit, dass die **erste** Sicherung defekt ist. Nutze das Gegenereignis „alle intakt“ aus a).
hinweise:
  - 'Der Baum hat drei Stufen. Schreib bei jedem Zug auf, wie viele Sicherungen noch da sind und wie viele davon intakt sind.'
  - 'Bei b) gibt es drei Pfade: Die defekte Sicherung kommt im ersten, zweiten oder dritten Zug. Berechne einen Pfad und vergleiche mit den anderen.'
loesung: |
  **Ansatz:** Dreistufiger Baum ohne Zurücklegen. Bei jedem Zug ist eine Sicherung weniger in der Packung.
  ---
  a) Pfad „intakt, intakt, intakt“: $\tfrac{8}{10} \cdot \tfrac79 \cdot \tfrac68 = \tfrac{336}{720} = \tfrac{7}{15}$.
  ---
  b) Pfad „defekt, intakt, intakt“: $\tfrac{2}{10} \cdot \tfrac89 \cdot \tfrac78 = \tfrac{112}{720}$.
  Die Pfade „intakt, defekt, intakt“ ($\tfrac{8}{10} \cdot \tfrac29 \cdot \tfrac78$) und „intakt, intakt, defekt“ ($\tfrac{8}{10} \cdot \tfrac79 \cdot \tfrac28$)
  haben dieselben Faktoren in anderer Reihenfolge, also auch $\tfrac{112}{720}$. Zusammen $\tfrac{336}{720} = \tfrac{7}{15}$.
  ---
  c) Gegenereignis von a): $1 - \tfrac{7}{15} = \tfrac{8}{15}$.
  Plausibilität: Zwei von zehn Sicherungen sind defekt, und du ziehst fast ein Drittel der Packung. Dass du dann in gut der Hälfte der Fälle eine defekte erwischst, passt.
```

```reflexion
frage: Warum multipliziert man entlang eines Pfades, addiert aber zwischen verschiedenen Pfaden? Erkläre es mit 100 gedachten Durchgängen.
antwort: |
  Entlang eines Pfades nimmt man einen Anteil vom Anteil. Bei der Urne mit 3 roten und 2 blauen Kugeln ist in etwa 60 von 100
  Durchgängen die erste Kugel rot. Nur von **diesen** 60 Durchgängen ist bei etwa der Hälfte auch die zweite rot, also bei 30.
  „Die Hälfte von drei Fünfteln“ ist $\tfrac24 \cdot \tfrac35$, ein Produkt. Verschiedene Pfade dagegen schließen sich aus:
  In einem Durchgang passiert genau ein Pfad. Die Durchgänge von Pfad 1 und die von Pfad 2 sind also verschiedene
  Durchgänge, und man darf sie zusammenzählen. Das ist Axiom 3 für unvereinbare Ereignisse.
```

```aufgabe
id: wk-baum-wie-oft
titel: Wie viele Spiele?
niveau: 3
lernziel: 2
kompetenz: anwenden
angabe: |
  Bei einem Spielautomaten gewinnt man pro Spiel mit Wahrscheinlichkeit $0{,}2$, unabhängig von früheren Spielen.
  Wie viele Spiele muss man mindestens spielen, damit man mit mindestens $95\,\%$ Wahrscheinlichkeit mindestens einmal gewinnt?
teile:
  - typ: zahl
    label: 'Mindestanzahl $n$'
    loesung: "ceil(ln(0.05)/ln(0.8))"
    fehler:
      - wert: "13"
        meldung: Du hast abgerundet. Bei 13 Spielen ist $1 - 0{,}8^{13} \approx 0{,}945$, das ist weniger als $0{,}95$.
      - wert: "5"
        meldung: Du hast vielleicht $n \cdot 0{,}2 \ge 0{,}95$ gerechnet. Wahrscheinlichkeiten mehrerer Spiele darf man nicht addieren. Nutze das Gegenereignis „kein Gewinn in $n$ Spielen“.
hinweise:
  - 'Stell die Ungleichung auf: $P(\text{mindestens ein Gewinn}) = 1 - 0{,}8^n \ge 0{,}95$.'
  - 'Forme zu $0{,}8^n \le 0{,}05$ um und logarithmiere. Achtung: $\ln 0{,}8 < 0$, beim Teilen dreht sich das Ungleichheitszeichen um.'
loesung: |
  **Ansatz:** „Mindestens einmal“ über das Gegenereignis. Kein Gewinn in $n$ Spielen hat die Wahrscheinlichkeit $0{,}8^n$.
  Bedingung: $1 - 0{,}8^n \ge 0{,}95$, also $0{,}8^n \le 0{,}05$.
  ---
  Logarithmieren: $n \cdot \ln 0{,}8 \le \ln 0{,}05$. Wir teilen durch die negative Zahl $\ln 0{,}8$, deshalb dreht sich das Zeichen:
  $n \ge \dfrac{\ln 0{,}05}{\ln 0{,}8} \approx 13{,}43$.
  ---
  Aufrunden, weil $n$ ganz sein muss: $n = 14$.
  ---
  Probe: $1 - 0{,}8^{13} \approx 0{,}945$ reicht nicht, $1 - 0{,}8^{14} \approx 0{,}956$ reicht. Antwort: Man muss mindestens 14-mal spielen.
```

## Bedingte Wahrscheinlichkeit und Vierfeldertafel

```aufgabe
id: wk-bedingt-check-anteil
titel: Anteil als Dezimalzahl
niveau: 1
art: check
angabe: |
  In einer Gruppe von 120 Personen tragen 18 eine Brille. Welcher Anteil der Gruppe ist das? Gib eine Dezimalzahl an.
  (Wiederholung: [Kapitel 1, Abschnitt „Prozentrechnung“](/lernen/mathe3/zahlen/prozentrechnung))
teile:
  - typ: zahl
    loesung: "18/120"
    anzeige: '0{,}15'
    fehler:
      - wert: "120/18"
        meldung: Du hast Gesamtzahl durch Teil gerechnet. Ein Anteil ist immer „Teil durch Ganzes“ und liegt deshalb zwischen 0 und 1.
loesung: |
  Anteil = Teil durch Ganzes: $\tfrac{18}{120}$.
  ---
  $\tfrac{18}{120} = 0{,}15$, also $15\,\%$.
```

Diese Stelle ist für fast alle Lernenden ungewohnt. Nimm dir Zeit und lies sie langsam, gern zweimal.
Danach wird der Rest des Kapitels viel leichter.

### Worum geht es?

**In einem Satz:** Eine bedingte Wahrscheinlichkeit beantwortet die Frage „Wie wahrscheinlich ist $B$,
**wenn ich schon weiß**, dass $A$ eingetreten ist?“

Oft hast du eine Zusatzinformation. Ein Test war positiv. Eine Mail enthält das Wort „Gewinn“. Der erste
Würfel zeigt schon eine 6. Diese Information ändert die Lage, und damit ändert sich die Wahrscheinlichkeit.

**Das Bild dazu: eine Lupe.** Ohne Zusatzinformation schaust du auf alle möglichen Fälle. Mit der
Information „$A$ ist eingetreten“ legst du eine Lupe auf die Fälle von $A$ und vergisst alle anderen.
Die Frage ist dann nur noch: Welcher Anteil **dieser** Fälle gehört auch zu $B$?

:::beispiel[Hausübung und Test]
In einem Kurs mit 40 Personen haben 25 die Hausübung gemacht. Von diesen 25 haben 20 den Test bestanden.
Von den 15 Personen ohne Hausübung haben 6 bestanden. Wir ordnen die Zahlen in einer Tabelle. $H$ heißt
„Hausübung gemacht“, $B$ heißt „Test bestanden“. Der Strich über einem Buchstaben bedeutet „nicht“.

||$B$ (bestanden)|$\bar B$ (nicht bestanden)|Summe|
|---|---|---|---|
|$H$ (Hausübung)|$20$|$5$|$25$|
|$\bar H$ (keine Hausübung)|$6$|$9$|$15$|
|Summe|$26$|$14$|$40$|

Wir wählen eine Person zufällig. Drei Fragen klingen ähnlich, sind aber verschieden.

1. **Hat sie die Hausübung gemacht und bestanden?** Das betrifft alle 40 Personen. Günstig sind 20, also $\tfrac{20}{40} = 0{,}5$.
2. **Sie hat die Hausübung gemacht. Hat sie bestanden?** Die Lupe liegt auf den 25 Personen der Zeile $H$. Davon haben 20 bestanden, also $\tfrac{20}{25} = 0{,}8$.
3. **Sie hat bestanden. Hat sie die Hausübung gemacht?** Die Lupe liegt auf den 26 Personen der Spalte $B$. Davon haben 20 die Hausübung gemacht, also $\tfrac{20}{26} \approx 0{,}769$.

Der Zähler ist jedes Mal $20$. Was sich ändert, ist die Gruppe, auf die du schaust: der **Nenner**.
:::

Frage 2 ist eine **bedingte Wahrscheinlichkeit**. Man schreibt $P(B \mid H)$ und liest „$P$ von $B$
unter der Bedingung $H$“ oder kurz „$P$ von $B$ gegeben $H$“. Der senkrechte Strich bedeutet „unter der
Bedingung“. **Hinter** dem Strich steht, was du schon weißt. **Vor** dem Strich steht, wonach du fragst.

Frage 3 ist $P(H \mid B)$. Frage 1 ist überhaupt keine bedingte Wahrscheinlichkeit, sondern
$P(H \cap B)$, also „$H$ und $B$“.

```plot
x: [0, 1]
y: [0, 1]
gleich: true
hoehe: 320
achsen: { x: "Anteil der Personen", y: "Anteil innerhalb der Gruppe" }
flaechen:
  - { f: "0.8", g: "0", von: 0, bis: 0.625, farbe: 0 }
  - { f: "1", g: "0.8", von: 0, bis: 0.625, farbe: 1 }
  - { f: "0.4", g: "0", von: 0.625, bis: 1, farbe: 2 }
  - { f: "1", g: "0.4", von: 0.625, bis: 1, farbe: 3 }
strecken:
  - { von: [0.625, 0], nach: [0.625, 1] }
punkte:
  - { x: 0.31, y: 0.4, label: "H und B: 20" }
  - { x: 0.31, y: 0.9, label: "H, nicht B: 5" }
  - { x: 0.81, y: 0.2, label: "nicht H, B: 6" }
  - { x: 0.81, y: 0.7, label: "nicht H, nicht B: 9" }
beschriftung: "Flächenbild des Kurses. Die linke Spalte ist die Gruppe H (25 von 40, Breite 0,625), die rechte die Gruppe ohne Hausübung. Innerhalb der linken Spalte sind 80 Prozent der Höhe blau (bestanden), rechts 40 Prozent grün. Die bedingte Wahrscheinlichkeit P(B | H) ist der Höhenanteil innerhalb der linken Spalte, die Wahrscheinlichkeit P(H und B) ist die blaue Fläche am ganzen Quadrat."
```

### Die Definition

Im Beispiel haben wir $P(B \mid H) = \tfrac{20}{25}$ gerechnet, also „Anzahl in $H$ und $B$“ durch „Anzahl in
$H$“. Teilst du Zähler und Nenner beide durch die Gesamtzahl 40, ändert sich der Bruch nicht:
$$\frac{20}{25} = \frac{20/40}{25/40} = \frac{P(H \cap B)}{P(H)}.$$
So entsteht die allgemeine Definition. Sie funktioniert auch dann, wenn du keine Anzahlen, sondern nur
Wahrscheinlichkeiten kennst.

:::definition[Bedingte Wahrscheinlichkeit]
Es seien $A$ und $B$ Ereignisse, und es sei $P(A) > 0$. Die **bedingte Wahrscheinlichkeit von $B$ unter
der Bedingung $A$** ist
$$P(B \mid A) = \frac{P(A \cap B)}{P(A)}.$$
Dabei ist $P(A \cap B)$ die Wahrscheinlichkeit, dass $A$ **und** $B$ eintreten, und $P(A)$ die
Wahrscheinlichkeit der Bedingung. Die Voraussetzung $P(A) > 0$ braucht man, weil man nicht durch $0$
teilen darf.
:::

**Was haben wir gerade gesagt?** Du schaust nur auf die Fälle von $A$. Darin misst du, welchen Anteil
die Fälle einnehmen, in denen zusätzlich $B$ eintritt. Bei einem Laplace-Experiment, also mit gleich
wahrscheinlichen Ergebnissen, heißt das einfach
$$P(B \mid A) = \frac{|A \cap B|}{|A|} = \frac{\text{Anzahl der Ergebnisse in } A \text{ und } B}{\text{Anzahl der Ergebnisse in } A}.$$
Ein Kontrollfall: $P(A \mid A) = \tfrac{P(A)}{P(A)} = 1$. Wer schon weiß, dass $A$ eingetreten ist, ist sich bei $A$ sicher.

:::beispiel[Zwei Würfel mit Zusatzinformation]
Zwei Würfel werden geworfen. Jemand verrät dir: Die Augensumme ist 8. Wie wahrscheinlich ist es, dass
ein Würfel eine 3 zeigt?

- **Bedingung $A$:** „Summe 8“. Das sind die 5 Paare $(2,6), (3,5), (4,4), (5,3), (6,2)$.
- **Davon auch in $B$** („mindestens ein Würfel zeigt 3“): nur $(3,5)$ und $(5,3)$.
- **Ergebnis:** $P(B \mid A) = \tfrac25 = 0{,}4$.

Ohne die Zusatzinformation wäre $P(B) = 1 - \left(\tfrac56\right)^2 = \tfrac{11}{36} \approx 0{,}31$.
Die Information „Summe 8“ macht eine 3 also wahrscheinlicher.

**Nicht-Beispiel:** $P(A \cap B) = \tfrac{2}{36} \approx 0{,}056$ ist **keine** bedingte Wahrscheinlichkeit.
Hier wird durch alle 36 Paare geteilt, also ohne Lupe.
:::

:::achtung[Bedingung und Frage vertauscht]
Im Kurs-Beispiel fragt jemand: „Wie wahrscheinlich ist es, dass eine Person, die bestanden hat, die
Hausübung gemacht hat?“ Eine typische falsche Rechnung:
$$P(H \mid B) = \tfrac{20}{25} = 0{,}8. \qquad \text{(falsch)}$$
Das ist $P(B \mid H)$. Die Bedingung ist hier aber „hat bestanden“. Die Lupe liegt also auf den 26
Personen der Spalte $B$. Richtig ist $P(H \mid B) = \tfrac{20}{26} \approx 0{,}769$. Frag dich immer zuerst:
**Was weiß ich schon?** Das kommt hinter den Strich und bestimmt den Nenner.
:::

```aufgabe
id: wk-bedingt-check-nenner
titel: Welcher Nenner?
niveau: 1
art: check
angabe: |
  Im Kurs-Beispiel (40 Personen, 25 mit Hausübung, davon 20 bestanden und 5 nicht bestanden) ist $P(\bar B \mid H)$ gesucht.
  Gib den Wert als Dezimalzahl an.
teile:
  - typ: zahl
    loesung: "5/25"
    anzeige: '0{,}2'
    fehler:
      - wert: "5/40"
        meldung: Du hast durch alle 40 Personen geteilt. Hinter dem Strich steht $H$, die Lupe liegt also auf den 25 Personen mit Hausübung.
      - wert: "5/14"
        meldung: Das ist $P(H \mid \bar B)$. Hier wäre bekannt, dass die Person nicht bestanden hat. Gefragt ist aber die Bedingung $H$.
loesung: |
  Bedingung $H$: Die Lupe liegt auf den 25 Personen mit Hausübung. Davon haben 5 nicht bestanden.
  ---
  $P(\bar B \mid H) = \tfrac{5}{25} = 0{,}2$. Kontrolle: $P(B \mid H) + P(\bar B \mid H) = 0{,}8 + 0{,}2 = 1$.
```

:::achtung[Durch alle geteilt statt durch die Bedingung]
„Unter den Personen mit Hausübung: Wie viele haben bestanden?“ Eine typische falsche Rechnung:
$$P(B \mid H) = \tfrac{20}{40} = 0{,}5. \qquad \text{(falsch)}$$
Das ist $P(H \cap B)$, gemessen an **allen** 40 Personen. Die Formulierung „unter den Personen mit
Hausübung“ verlangt aber die Lupe auf die 25 Personen der Zeile $H$. Richtig ist $\tfrac{20}{25} = 0{,}8$.
:::

:::merke[Bedingte Wahrscheinlichkeit in drei Schritten]
1. **Bedingung finden:** Was ist schon bekannt? Signalwörter sind „von den …“, „unter den …“, „falls …“, „wenn …“, „bei …“ und „gegeben …“.
2. **Lupe anlegen:** Nur die Fälle der Bedingung zählen. Sie bilden den Nenner.
3. **Zähler bestimmen:** Wie viele dieser Fälle erfüllen auch die Frage? Dann teilen.

In Formeln: $P(B \mid A) = \dfrac{P(A \cap B)}{P(A)}$. Was hinter dem Strich steht, steht im Nenner.
:::

```aufgabe
id: wk-bedingt-check-signal
titel: Die Bedingung erkennen
niveau: 1
art: check
angabe: |
  „Unter den Personen ohne Hausübung haben $40\,\%$ bestanden.“ Welche Wahrscheinlichkeit ist das?
teile:
  - typ: auswahl
    optionen:
      - '$P(B \mid \bar H)$'
      - '$P(\bar H \mid B)$'
      - '$P(\bar H \cap B)$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Dann wäre bekannt, dass die Person bestanden hat. Das Signalwort „unter den Personen ohne Hausübung“ nennt aber $\bar H$ als Bedingung.
      - wert: 2
        meldung: Das wäre ein Anteil an allen Personen. Der Satz spricht nur über die Personen ohne Hausübung.
loesung: |
  „Unter den …“ nennt die Bedingung: ohne Hausübung, also $\bar H$.
  ---
  Gefragt ist „bestanden“. Also $P(B \mid \bar H) = 0{,}4$, im Kurs-Beispiel $\tfrac{6}{15}$.
```

### Der Multiplikationssatz: die Produktregel im Baum

Multipliziert man die Definition mit $P(A)$, erhält man eine Formel für „$A$ und $B$“.

:::satz[Multiplikationssatz]
Für Ereignisse $A$ und $B$ mit $P(A) > 0$ gilt
$$P(A \cap B) = P(A) \cdot P(B \mid A).$$
Bei drei Stufen gilt entsprechend, falls $P(A \cap B) > 0$ ist:
$$P(A \cap B \cap C) = P(A) \cdot P(B \mid A) \cdot P(C \mid A \cap B).$$
:::

Das ist genau die Produktregel für Pfade aus [16.6 Mehrstufige Experimente: Baumdiagramme und Pfadregeln](/lernen/mathe3/wahrscheinlichkeit/mehrstufige-experimente-baumdiagramme-und-pfadregeln). Die Astwahrscheinlichkeiten ab der
zweiten Stufe **sind** bedingte Wahrscheinlichkeiten. Im Urnenbeispiel mit 3 roten und 2 blauen Kugeln
ist der Ast „zweite Kugel rot“ nach einer roten Kugel genau $P(r_2 \mid r_1) = \tfrac24$. Bei drei Stufen
steht am dritten Ast die Wahrscheinlichkeit unter der Bedingung, dass **beide** vorigen Stufen so
ausgegangen sind wie auf diesem Pfad.

Beispiel mit den 10 Sicherungen, von denen 2 defekt sind: Die Wahrscheinlichkeit, dreimal hintereinander
eine intakte zu ziehen, ist
$$P(I_1 \cap I_2 \cap I_3) = P(I_1) \cdot P(I_2 \mid I_1) \cdot P(I_3 \mid I_1 \cap I_2) = \tfrac{8}{10} \cdot \tfrac79 \cdot \tfrac68.$$
Dabei heißt $I_1$ „erste Sicherung intakt“, $I_2$ „zweite intakt“ und $I_3$ „dritte intakt“.

### Die Vierfeldertafel

Bei zwei Merkmalen mit je zwei Ausprägungen (zum Beispiel „Hausübung ja oder nein“ und „bestanden ja
oder nein“) ordnet man alles in einer **Vierfeldertafel**. Sie hat vier innere Felder und dazu die Summen.
Man kann Anzahlen oder Wahrscheinlichkeiten eintragen.

||$B$|$\bar B$|Summe|
|---|---|---|---|
|$A$|$P(A \cap B)$|$P(A \cap \bar B)$|$P(A)$|
|$\bar A$|$P(\bar A \cap B)$|$P(\bar A \cap \bar B)$|$P(\bar A)$|
|Summe|$P(B)$|$P(\bar B)$|$1$|

Jede Zeile und jede Spalte geht in der Summe auf. Deshalb genügen oft drei passende Werte, um die ganze
Tafel zu ergänzen. Eine **bedingte** Wahrscheinlichkeit liest du so ab: Ein inneres Feld durch die Summe
**seiner Zeile** (Bedingung $A$ oder $\bar A$) oder durch die Summe **seiner Spalte** (Bedingung $B$ oder $\bar B$).

```aufgabe
id: wk-bedingt-vierfelder
titel: Sport und Rauchen
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Unter 200 Studierenden treiben 120 regelmäßig Sport. Von den Sportlichen rauchen 18, von den übrigen 80 rauchen 30.
  Eine Person wird zufällig ausgewählt. $R$ heißt „raucht“, $S$ heißt „treibt Sport“.
  Berechne $P(R)$, $P(R \mid S)$ und $P(S \mid R)$ als Dezimalzahlen.
teile:
  - typ: zahl
    label: '$P(R)$'
    loesung: "48/200"
    anzeige: '0{,}24'
    fehler:
      - wert: "18/200"
        meldung: Das sind nur die rauchenden **Sportlichen**. Auch unter den 80 anderen rauchen 30 Personen.
  - typ: zahl
    label: '$P(R \mid S)$'
    loesung: "18/120"
    anzeige: '0{,}15'
    fehler:
      - wert: "18/200"
        meldung: Das ist $P(R \cap S)$. Die Bedingung $S$ verlangt die Lupe auf die 120 Sportlichen. Sie gehören in den Nenner.
      - wert: "18/48"
        meldung: Das ist $P(S \mid R)$, die Bedingung ist vertauscht. Bei $P(R \mid S)$ weißt du, dass die Person Sport treibt.
  - typ: zahl
    label: '$P(S \mid R)$'
    loesung: "18/48"
    anzeige: '0{,}375'
    fehler:
      - wert: "18/120"
        meldung: Das ist $P(R \mid S)$. Hier ist bekannt, dass die Person raucht. Die Lupe liegt auf den 48 Rauchenden.
hinweise:
  - 'Lege eine Vierfeldertafel mit den Zeilen $S$ und $\bar S$ und den Spalten $R$ und $\bar R$ an.'
gefuehrt:
  - text: Wie viele Personen rauchen insgesamt?
    teil: { typ: zahl, loesung: "18 + 30" }
    erklaerung: 18 Sportliche und 30 andere, also 48 Rauchende.
  - text: Wie groß ist $P(R)$?
    teil: { typ: zahl, loesung: "48/200" }
    erklaerung: 48 von 200, also $0{,}24$.
  - text: Bei $P(R \mid S)$ ist bekannt, dass die Person Sport treibt. Wie viele Personen stehen im Nenner?
    teil: { typ: zahl, loesung: "120" }
    erklaerung: Die Lupe liegt auf den 120 Sportlichen.
  - text: Berechne $P(R \mid S)$.
    teil: { typ: zahl, loesung: "18/120" }
    erklaerung: 18 der 120 Sportlichen rauchen, also $0{,}15$.
  - text: Berechne jetzt $P(S \mid R)$. Auf welcher Gruppe liegt diesmal die Lupe?
    teil: { typ: zahl, loesung: "18/48" }
    erklaerung: Auf den 48 Rauchenden. 18 davon treiben Sport, also $\tfrac{18}{48} = 0{,}375$.
loesung: |
  **Ansatz:** Vierfeldertafel mit absoluten Zahlen. Bedingte Wahrscheinlichkeiten liest man ab, indem man durch die Zeilen- oder Spaltensumme der Bedingung teilt.

  ||$R$|$\bar R$|Summe|
  |---|---|---|---|
  |$S$|18|102|120|
  |$\bar S$|30|50|80|
  |Summe|48|152|200|
  ---
  $P(R) = \tfrac{48}{200} = 0{,}24$.
  ---
  $P(R \mid S)$: Bedingung $S$, also Zeile $S$ mit 120 Personen. $\tfrac{18}{120} = 0{,}15$.
  ---
  $P(S \mid R)$: Bedingung $R$, also Spalte $R$ mit 48 Personen. $\tfrac{18}{48} = 0{,}375$.
  Deutung: Unter den Sportlichen rauchen weniger ($15\,\%$) als im Durchschnitt ($24\,\%$).
```

```aufgabe
id: wk-bedingt-signalwort
titel: Was steht hinter dem Strich?
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  In einer Firma bezeichne $F$ „ist eine Frau“ und $D$ „hat ein Dienstauto“. Ein Bericht sagt:
  „**Von den Frauen** in der Firma haben $12\,\%$ ein Dienstauto.“ Welche Wahrscheinlichkeit ist damit angegeben?
teile:
  - typ: auswahl
    optionen:
      - '$P(D \mid F) = 0{,}12$'
      - '$P(F \mid D) = 0{,}12$'
      - '$P(D \cap F) = 0{,}12$'
      - '$P(D) = 0{,}12$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Hier wäre bekannt, dass die Person ein Dienstauto hat. Der Satz beginnt aber mit „Von den Frauen“. Die Frauen sind die Gruppe unter der Lupe.
      - wert: 2
        meldung: '$P(D \cap F)$ wäre der Anteil an **allen** Beschäftigten, die Frau sind und ein Dienstauto haben. Der Satz spricht nur über die Frauen.'
      - wert: 3
        meldung: '$P(D)$ wäre der Anteil an allen Beschäftigten. Der Satz schränkt aber auf die Frauen ein.'
hinweise:
  - '„Von den …“ nennt die Gruppe, auf die du schaust. Diese Gruppe ist die Bedingung und steht hinter dem Strich.'
loesung: |
  „Von den Frauen“ ist das Signal für die Bedingung. Bekannt ist: Die Person ist eine Frau.
  ---
  Gefragt ist, ob sie ein Dienstauto hat. Also $P(D \mid F) = 0{,}12$.
```

```aufgabe
id: wk-bedingt-wuerfel
titel: Mindestens eine Sechs ist gefallen
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Zwei faire Würfel werden geworfen. Du erfährst nur: **Mindestens ein Würfel zeigt eine 6.**
  a) Mit welcher Wahrscheinlichkeit ist die Augensumme dann mindestens 10?
  b) Umgekehrt: Die Augensumme ist mindestens 10. Mit welcher Wahrscheinlichkeit zeigt mindestens ein Würfel eine 6?
  Gib gekürzte Brüche an.
teile:
  - typ: zahl
    label: 'a)'
    loesung: "5/11"
    anzeige: '\tfrac{5}{11}'
    fehler:
      - wert: "5/36"
        meldung: Du hast durch alle 36 Paare geteilt. Bekannt ist aber, dass mindestens eine 6 dabei ist. Nur diese 11 Paare kommen noch in Frage.
      - wert: "6/36"
        meldung: Das ist $P(\text{Summe} \ge 10)$ ohne Zusatzinformation. Lege die Lupe auf die Paare mit mindestens einer 6.
  - typ: zahl
    label: 'b)'
    loesung: "5/6"
    anzeige: '\tfrac56'
    fehler:
      - wert: "5/11"
        meldung: Das ist die Antwort auf a). Hier ist die Bedingung „Summe mindestens 10“. Sie umfasst 6 Paare.
hinweise:
  - 'Schreib die Paare mit mindestens einer 6 auf. Es sind 11.'
  - 'Schreib die Paare mit Summe 10, 11 oder 12 auf. Es sind 6. Welche Paare liegen in beiden Listen?'
loesung: |
  **Ansatz:** Laplace mit den 36 Paaren. Bedingte Wahrscheinlichkeit heißt: nur die Paare der Bedingung zählen.
  ---
  $A$ = „mindestens eine 6“: $(1,6), \dots, (6,6)$ und $(6,1), \dots, (6,5)$, zusammen $6 + 5 = 11$ Paare.
  $B$ = „Summe mindestens 10“: $(4,6), (5,5), (6,4), (5,6), (6,5), (6,6)$, also 6 Paare.
  ---
  In beiden Listen: $(4,6), (6,4), (5,6), (6,5), (6,6)$, also 5 Paare.
  ---
  a) $P(B \mid A) = \tfrac{5}{11} \approx 0{,}455$. b) $P(A \mid B) = \tfrac56 \approx 0{,}833$.
  Gleicher Zähler, verschiedene Nenner: Die Bedingung entscheidet.
```

```aufgabe
id: wk-bedingt-tafel-ergaenzen
titel: Wohnen und Arbeiten
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Von allen Studierenden einer Universität wohnen $55\,\%$ bei den Eltern ($E$). $30\,\%$ aller Studierenden wohnen bei den
  Eltern **und** arbeiten neben dem Studium ($A$). $20\,\%$ aller Studierenden arbeiten und wohnen **nicht** bei den Eltern.
  Berechne a) $P(A)$, b) $P(A \mid E)$, c) $P(E \mid A)$. (b und c auf 4 Nachkommastellen)
teile:
  - typ: zahl
    label: 'a) $P(A)$'
    loesung: "0.30 + 0.20"
    anzeige: '0{,}5'
    fehler:
      - wert: "0.3"
        meldung: Das sind nur die Arbeitenden, die bei den Eltern wohnen. Auch die $20\,\%$ der anderen arbeiten.
  - typ: zahl
    label: 'b) $P(A \mid E)$'
    loesung: "0.30/0.55"
    toleranz: 0.0005
    anzeige: '0{,}5455'
    fehler:
      - wert: "0.3"
        meldung: Das ist $P(E \cap A)$, bezogen auf alle Studierenden. Die Bedingung $E$ verlangt, durch $P(E) = 0{,}55$ zu teilen.
      - wert: "0.6"
        meldung: Das ist $P(E \mid A)$. Bei $P(A \mid E)$ ist bekannt, dass die Person bei den Eltern wohnt.
  - typ: zahl
    label: 'c) $P(E \mid A)$'
    loesung: "0.30/(0.30 + 0.20)"
    anzeige: '0{,}6'
    fehler:
      - wert: "0.30/0.55"
        meldung: Das ist $P(A \mid E)$. Hier ist bekannt, dass die Person arbeitet. Teile durch $P(A)$.
hinweise:
  - 'Trage die drei Angaben in eine Vierfeldertafel mit Zeilen $E$, $\bar E$ und Spalten $A$, $\bar A$ ein.'
  - 'Ergänze fehlende Felder über die Summen. Für b) teilst du durch die Zeilensumme $P(E)$, für c) durch die Spaltensumme $P(A)$.'
loesung: |
  **Ansatz:** Vierfeldertafel mit Wahrscheinlichkeiten. Gegeben sind $P(E) = 0{,}55$, $P(E \cap A) = 0{,}30$ und $P(\bar E \cap A) = 0{,}20$.

  ||$A$|$\bar A$|Summe|
  |---|---|---|---|
  |$E$|$0{,}30$|$0{,}25$|$0{,}55$|
  |$\bar E$|$0{,}20$|$0{,}25$|$0{,}45$|
  |Summe|$0{,}50$|$0{,}50$|$1$|
  ---
  a) Spalte $A$: $P(A) = 0{,}30 + 0{,}20 = 0{,}50$.
  ---
  b) Bedingung $E$, also durch die Zeilensumme teilen: $P(A \mid E) = \tfrac{0{,}30}{0{,}55} \approx 0{,}5455$.
  ---
  c) Bedingung $A$, also durch die Spaltensumme teilen: $P(E \mid A) = \tfrac{0{,}30}{0{,}50} = 0{,}6$.
  Deutung: Von den Arbeitenden wohnen $60\,\%$ bei den Eltern, von den bei den Eltern Wohnenden arbeiten gut $54\,\%$.
```

```aufgabe
id: wk-bedingt-multiplikation
titel: Fehler, die entdeckt werden
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  In einem Betrieb sind $8\,\%$ der Werkstücke fehlerhaft. Die Endkontrolle entdeckt bei einem fehlerhaften Werkstück den Fehler
  mit Wahrscheinlichkeit $90\,\%$. Welcher Anteil **aller** Werkstücke ist
  a) fehlerhaft und wird entdeckt, b) fehlerhaft und wird nicht entdeckt?
teile:
  - typ: zahl
    label: 'a)'
    loesung: "0.08*0.9"
    anzeige: '0{,}072'
    fehler:
      - wert: "0.9"
        meldung: '$90\,\%$ beziehen sich nur auf die **fehlerhaften** Werkstücke, also $P(\text{entdeckt} \mid \text{fehlerhaft})$. Gefragt ist ein Anteil an allen Werkstücken.'
      - wert: "0.98"
        meldung: Du hast die Wahrscheinlichkeiten addiert. „Fehlerhaft und entdeckt“ ist ein Anteil vom Anteil, also ein Produkt.
  - typ: zahl
    label: 'b)'
    loesung: "0.08*0.1"
    anzeige: '0{,}008'
    fehler:
      - wert: "0.1"
        meldung: '$10\,\%$ der **fehlerhaften** Werkstücke werden übersehen. Bezogen auf alle Werkstücke musst du noch mit $0{,}08$ multiplizieren.'
hinweise:
  - 'Bezeichne $F$ = „fehlerhaft“ und $E$ = „Fehler entdeckt“. Gegeben sind $P(F)$ und $P(E \mid F)$.'
  - 'Multiplikationssatz: $P(F \cap E) = P(F) \cdot P(E \mid F)$.'
loesung: |
  **Ansatz:** Die $90\,\%$ gelten nur unter der Bedingung „fehlerhaft“. Gegeben sind also $P(F) = 0{,}08$ und $P(E \mid F) = 0{,}9$.
  ---
  a) Multiplikationssatz: $P(F \cap E) = 0{,}08 \cdot 0{,}9 = 0{,}072$. Das sind $7{,}2\,\%$ aller Werkstücke.
  ---
  b) $P(\bar E \mid F) = 1 - 0{,}9 = 0{,}1$. Also $P(F \cap \bar E) = 0{,}08 \cdot 0{,}1 = 0{,}008$.
  ---
  Kontrolle: $0{,}072 + 0{,}008 = 0{,}08 = P(F)$. Von 1000 Werkstücken gehen also etwa 8 fehlerhafte unentdeckt an die Kundschaft.
```

```aufgabe
id: wk-bedingt-fehler-finden
titel: Fehler finden
niveau: 2
lernziel: 3
kompetenz: begruenden
angabe: |
  In einem Ort fahren $40\,\%$ der Berufstätigen mit dem Rad zur Arbeit ($R$). Von den Radfahrenden wohnen $75\,\%$ weniger als
  5 km vom Arbeitsplatz entfernt ($N$). Ein Mitschüler rechnet:

  „Gesucht ist der Anteil der Berufstätigen, die mit dem Rad fahren und weniger als 5 km entfernt wohnen.
  Also $P(R \cap N) = 0{,}75$.“

  a) Berechne den richtigen Wert. b) Erkläre den Fehler in einem Satz.
teile:
  - typ: zahl
    label: 'a) $P(R \cap N)$'
    loesung: "0.4*0.75"
    anzeige: '0{,}3'
    fehler:
      - wert: "0.75"
        meldung: Das ist genau die Rechnung des Mitschülers. Die $75\,\%$ gelten nur innerhalb der Radfahrenden.
      - wert: "0.4"
        meldung: Das ist nur $P(R)$. Von den Radfahrenden wohnt nicht jede Person in der Nähe.
  - typ: text
    label: 'b) Erklärung'
    muster: |
      Die $75\,\%$ sind eine bedingte Wahrscheinlichkeit, nämlich $P(N \mid R)$: Sie beziehen sich nur auf die Radfahrenden.
      Gefragt ist aber ein Anteil an allen Berufstätigen. Nach dem Multiplikationssatz gilt
      $P(R \cap N) = P(R) \cdot P(N \mid R) = 0{,}4 \cdot 0{,}75 = 0{,}3$.
hinweise:
  - '„Von den Radfahrenden“ ist ein Signalwort. Welche Wahrscheinlichkeit sind also die $75\,\%$?'
  - 'Mit dem Multiplikationssatz kommst du von $P(N \mid R)$ zu $P(R \cap N)$.'
loesung: |
  **Ansatz:** „Von den Radfahrenden“ heißt: Die $75\,\%$ sind $P(N \mid R)$, eine bedingte Wahrscheinlichkeit.
  ---
  Multiplikationssatz: $P(R \cap N) = P(R) \cdot P(N \mid R) = 0{,}4 \cdot 0{,}75 = 0{,}3$.
  ---
  Der Fehler: Der Mitschüler hat $P(N \mid R)$ mit $P(R \cap N)$ verwechselt. Plausibilitätscheck: $P(R \cap N)$ kann nie größer sein als $P(R) = 0{,}4$. Der Wert $0{,}75$ ist also sicher falsch.
```

```reflexion
frage: Warum kann $P(A \cap B)$ nie größer sein als $P(B \mid A)$? Begründe mit dem Multiplikationssatz und mit der Lupe.
antwort: |
  Nach dem Multiplikationssatz ist $P(A \cap B) = P(A) \cdot P(B \mid A)$. Der Faktor $P(A)$ liegt zwischen $0$ und $1$.
  Multipliziert man eine Zahl mit einem Faktor höchstens $1$, wird sie höchstens kleiner. Also ist $P(A \cap B) \le P(B \mid A)$.
  Mit der Lupe: Bei $P(B \mid A)$ misst man die Fälle von „$A$ und $B$“ an der kleineren Gruppe $A$. Bei $P(A \cap B)$ misst man
  dieselben Fälle an allen Fällen. Derselbe Zähler mit einem größeren Nenner ergibt einen kleineren Bruch.
```

```aufgabe
id: wk-bedingt-drei-stufen
titel: Drei Bewerbungsrunden
niveau: 3
lernziel: 3
kompetenz: modellieren
angabe: |
  Ein Auswahlverfahren hat drei Runden. Runde 1 bestehen $40\,\%$ aller Bewerberinnen und Bewerber. Von denen, die Runde 1
  bestanden haben, bestehen $50\,\%$ Runde 2. Von denen, die Runde 1 und Runde 2 bestanden haben, bestehen $30\,\%$ Runde 3.
  Wer eine Runde nicht besteht, scheidet aus.
  a) Mit welcher Wahrscheinlichkeit besteht eine zufällig gewählte Person alle drei Runden?
  b) Mit welcher Wahrscheinlichkeit scheidet sie genau in Runde 2 aus?
  c) Eine Person ist ausgeschieden. Mit welcher Wahrscheinlichkeit war das schon in Runde 1? (4 Nachkommastellen)
teile:
  - typ: zahl
    label: 'a)'
    loesung: "0.4*0.5*0.3"
    anzeige: '0{,}06'
    fehler:
      - wert: "0.3"
        meldung: Die $30\,\%$ gelten nur für Personen, die schon zwei Runden geschafft haben. Gefragt ist ein Anteil an allen Bewerbungen.
      - wert: "0.4 + 0.5 + 0.3"
        meldung: Entlang eines Pfades wird multipliziert. Eine Summe über $1$ kann keine Wahrscheinlichkeit sein.
  - typ: zahl
    label: 'b)'
    loesung: "0.4*0.5"
    anzeige: '0{,}2'
    fehler:
      - wert: "0.5"
        meldung: '$50\,\%$ scheitern in Runde 2, aber nur unter denen, die Runde 1 bestanden haben. Multipliziere mit $0{,}4$.'
  - typ: zahl
    label: 'c)'
    loesung: "0.6/(1 - 0.4*0.5*0.3)"
    toleranz: 0.0005
    anzeige: '0{,}6383'
    fehler:
      - wert: "0.6"
        meldung: '$0{,}6$ ist der Anteil an **allen** Bewerbungen. Bekannt ist aber, dass die Person ausgeschieden ist. Teile durch die Wahrscheinlichkeit, auszuscheiden.'
hinweise:
  - 'Zeichne einen Baum mit drei Stufen. An jedem Knoten geht es entweder weiter oder man scheidet aus.'
  - 'Für c): Die Bedingung ist „ausgeschieden“. Ihre Wahrscheinlichkeit ist das Gegenereignis von a). Teile $P(\text{Aus in Runde 1})$ dadurch.'
loesung: |
  **Ansatz:** Dreistufiger Baum. Jeder Ast ab Runde 2 ist eine bedingte Wahrscheinlichkeit. Mit $R_1, R_2, R_3$ für „Runde bestanden“ gilt der Multiplikationssatz für drei Stufen.
  ---
  a) $P(R_1 \cap R_2 \cap R_3) = P(R_1) \cdot P(R_2 \mid R_1) \cdot P(R_3 \mid R_1 \cap R_2) = 0{,}4 \cdot 0{,}5 \cdot 0{,}3 = 0{,}06$.
  ---
  b) Aus in Runde 2 heißt: Runde 1 bestanden, Runde 2 nicht. $0{,}4 \cdot (1 - 0{,}5) = 0{,}2$.
  ---
  c) Ausgeschieden ist das Gegenereignis von a): $1 - 0{,}06 = 0{,}94$. Aus in Runde 1: $0{,}6$.
  Also $P(\text{Aus in Runde 1} \mid \text{ausgeschieden}) = \tfrac{0{,}6}{0{,}94} \approx 0{,}6383$.
  ---
  Kontrolle: Aus in Runde 1 $0{,}6$, in Runde 2 $0{,}2$, in Runde 3 $0{,}4 \cdot 0{,}5 \cdot 0{,}7 = 0{,}14$. Mit den $0{,}06$ ergibt das $1$.
```

## Totale Wahrscheinlichkeit und Satz von Bayes: den Baum umdrehen

```aufgabe
id: wk-bayes-check-pfad
titel: Ein Pfad im Baum
niveau: 1
art: check
angabe: |
  In einem Baum hat der erste Ast die Wahrscheinlichkeit $P(A) = 0{,}3$. Der anschließende Ast hat $P(B \mid A) = 0{,}5$.
  Wie groß ist $P(A \cap B)$? (Wiederholung: Multiplikationssatz in [16.7 Bedingte Wahrscheinlichkeit und Vierfeldertafel](/lernen/mathe3/wahrscheinlichkeit/bedingte-wahrscheinlichkeit-und-vierfeldertafel))
teile:
  - typ: zahl
    loesung: "0.3*0.5"
    anzeige: '0{,}15'
    fehler:
      - wert: "0.8"
        meldung: Entlang eines Pfades wird multipliziert, nicht addiert. Man nimmt die Hälfte von $0{,}3$.
loesung: |
  Multiplikationssatz: $P(A \cap B) = P(A) \cdot P(B \mid A)$.
  ---
  $0{,}3 \cdot 0{,}5 = 0{,}15$.
```

**Worum geht es?** Oft kennst du die Wahrscheinlichkeit in der „falschen“ Richtung. Ein Labor weiß, wie
oft ein Test bei Kranken positiv ist. Die Patientin will aber wissen: **Ich bin positiv getestet. Wie
wahrscheinlich bin ich krank?** Aus $P(\text{positiv} \mid \text{krank})$ soll also
$P(\text{krank} \mid \text{positiv})$ werden. Dafür brauchst du zwei Werkzeuge: die totale
Wahrscheinlichkeit und den Satz von Bayes.

Diese Stelle gilt als eine der schwierigsten der Wahrscheinlichkeitsrechnung. Sie wird viel einfacher, wenn du
statt mit Prozenten mit **gedachten Anzahlen** rechnest. Genau so gehen wir vor.

### Schritt 1: die totale Wahrscheinlichkeit

:::beispiel[Zwei Lieferanten]
Eine Firma bezieht Bauteile von zwei Lieferanten. Lieferant $A$ liefert $60\,\%$ der Teile, davon sind
$2\,\%$ defekt. Lieferant $B$ liefert $40\,\%$ der Teile, davon sind $4{,}5\,\%$ defekt. Wie groß ist der
Anteil defekter Teile insgesamt?

**Mit gedachten Anzahlen.** Stell dir $10\,000$ Teile vor.

- Von Lieferant $A$ kommen $6000$ Teile. Davon sind $2\,\%$ defekt, also $120$ Teile.
- Von Lieferant $B$ kommen $4000$ Teile. Davon sind $4{,}5\,\%$ defekt, also $180$ Teile.
- Defekt sind insgesamt $120 + 180 = 300$ von $10\,000$ Teilen, also $3\,\%$.

**Dasselbe im Baum.** Erste Stufe: Lieferant. Zweite Stufe: defekt ($D$) oder nicht. Zu „defekt“ führen
zwei Pfade:
$$P(D) = 0{,}6 \cdot 0{,}02 + 0{,}4 \cdot 0{,}045 = 0{,}012 + 0{,}018 = 0{,}03.$$
:::

Das ist schon die ganze Idee: Man summiert über alle Pfade, die im gesuchten Ereignis enden. Weil es so
oft vorkommt, hat es einen eigenen Namen.

:::satz[Satz von der totalen Wahrscheinlichkeit]
Es sei $0 < P(A) < 1$. Dann gilt für jedes Ereignis $B$
$$P(B) = P(A) \cdot P(B \mid A) + P(\bar A) \cdot P(B \mid \bar A).$$
Dabei ist $\bar A$ das Gegenereignis von $A$. Gibt es mehr als zwei Fälle $A_1, A_2, A_3, \dots$, die sich
gegenseitig ausschließen und zusammen alles abdecken, so summiert man über alle Fälle.
:::

:::beweis
$B$ tritt entweder zusammen mit $A$ ein oder zusammen mit $\bar A$. Diese beiden Teile $A \cap B$ und
$\bar A \cap B$ sind unvereinbar. Nach Axiom 3 ist also $P(B) = P(A \cap B) + P(\bar A \cap B)$. Jeden
Summanden schreiben wir mit dem Multiplikationssatz um: $P(A \cap B) = P(A) \cdot P(B \mid A)$ und
$P(\bar A \cap B) = P(\bar A) \cdot P(B \mid \bar A)$. Einsetzen ergibt die Formel.
:::

```aufgabe
id: wk-bayes-check-total
titel: Zwei Pfade addieren
niveau: 1
art: check
angabe: |
  Es gilt $P(A) = 0{,}5$, $P(B \mid A) = 0{,}2$ und $P(B \mid \bar A) = 0{,}4$. Berechne $P(B)$.
teile:
  - typ: zahl
    loesung: "0.5*0.2 + 0.5*0.4"
    anzeige: '0{,}3'
    fehler:
      - wert: "0.6"
        meldung: Du hast $0{,}2$ und $0{,}4$ addiert, ohne sie mit $P(A)$ und $P(\bar A)$ zu gewichten.
      - wert: "0.1"
        meldung: Das ist nur der Pfad „$A$ und $B$“. Auch über $\bar A$ führt ein Pfad zu $B$.
loesung: |
  Totale Wahrscheinlichkeit: $P(B) = P(A) \cdot P(B \mid A) + P(\bar A) \cdot P(B \mid \bar A)$.
  ---
  $0{,}5 \cdot 0{,}2 + 0{,}5 \cdot 0{,}4 = 0{,}1 + 0{,}2 = 0{,}3$.
```

### Schritt 2: den Baum umdrehen

Im Beispiel mit den Lieferanten zieht die Qualitätskontrolle ein Teil und stellt fest: **Es ist defekt.**
Von welchem Lieferanten stammt es wahrscheinlich?

Mit gedachten Anzahlen ist das leicht. Es gibt $300$ defekte Teile. Davon kommen $180$ von Lieferant $B$.
Also ist
$$P(B \mid D) = \frac{180}{300} = 0{,}6.$$
Obwohl $B$ nur $40\,\%$ der Teile liefert, stammen $60\,\%$ der defekten Teile von $B$. Der Grund: $B$
liefert mehr als doppelt so oft defekte Teile.

In Wahrscheinlichkeiten steht im Zähler der eine Pfad „$B$ und defekt“ und im Nenner die Summe aller
Pfade, die in „defekt“ enden:
$$P(B \mid D) = \frac{0{,}4 \cdot 0{,}045}{0{,}6 \cdot 0{,}02 + 0{,}4 \cdot 0{,}045} = \frac{0{,}018}{0{,}03} = 0{,}6.$$

:::satz[Satz von Bayes]
Es sei $0 < P(A) < 1$ und $P(B) > 0$. Dann gilt
$$P(A \mid B) = \frac{P(A) \cdot P(B \mid A)}{P(A) \cdot P(B \mid A) + P(\bar A) \cdot P(B \mid \bar A)}.$$
Im Zähler steht die Wahrscheinlichkeit des Pfades „$A$ und $B$“. Im Nenner steht $P(B)$, berechnet mit der
totalen Wahrscheinlichkeit.
:::

:::beweis
Wir starten bei der Definition der bedingten Wahrscheinlichkeit: $P(A \mid B) = \frac{P(A \cap B)}{P(B)}$.
Den Zähler schreiben wir mit dem Multiplikationssatz als $P(A) \cdot P(B \mid A)$. Den Nenner schreiben wir
mit der totalen Wahrscheinlichkeit. Mehr steckt nicht dahinter.
:::

**Was haben wir gezeigt?** Der Satz von Bayes ist keine neue Idee. Er ist die Definition der bedingten
Wahrscheinlichkeit, bei der Zähler und Nenner mit den Werkzeugen aus dem Baum ausgerechnet werden.

### Der berühmte Fall: ein medizinischer Test

:::beispiel[Positiv getestet: Wie wahrscheinlich krank?]
Eine Krankheit betrifft $1\,\%$ der Bevölkerung. Diesen Anteil nennt man **Prävalenz**. Ein Test erkennt
Kranke mit $98\,\%$ Wahrscheinlichkeit. Diese Zahl heißt **Sensitivität**. Bei Gesunden zeigt der Test
mit $5\,\%$ Wahrscheinlichkeit trotzdem „positiv“ an. Man spricht von einem **falsch positiven** Ergebnis.
Eine zufällig ausgewählte Person wird positiv getestet. Wie wahrscheinlich ist sie krank?

**Gedachte Anzahlen für $10\,000$ Personen:**

- Krank sind $1\,\%$, also $100$ Personen. Davon testet der Test $98\,\%$ positiv: $98$ Personen.
- Gesund sind $9900$ Personen. Davon testet der Test $5\,\%$ positiv: $495$ Personen.
- Positiv sind also $98 + 495 = 593$ Personen. Nur $98$ davon sind krank.

$$P(\text{krank} \mid \text{positiv}) = \frac{98}{593} \approx 0{,}165.$$

**Mit dem Satz von Bayes:** $K$ heißt „krank“, $T$ heißt „Test positiv“.
$$P(K \mid T) = \frac{0{,}01 \cdot 0{,}98}{0{,}01 \cdot 0{,}98 + 0{,}99 \cdot 0{,}05} = \frac{0{,}0098}{0{,}0593} \approx 0{,}165.$$
Nur etwa jede sechste positiv getestete Person ist wirklich krank.
:::

```plot
x: [-0.5, 11]
y: [-3.8, 3.8]
achsen: { x: "", y: "" }
strecken:
  - { von: [0, 0], nach: [3, 2], farbe: 1 }
  - { von: [0, 0], nach: [3, -2], farbe: 0 }
  - { von: [3, 2], nach: [6, 3], farbe: 1 }
  - { von: [3, 2], nach: [6, 1], farbe: 0 }
  - { von: [3, -2], nach: [6, -1], farbe: 1 }
  - { von: [3, -2], nach: [6, -3], farbe: 0 }
punkte:
  - { x: 0, y: 0, label: "10 000 Personen", farbe: 3 }
  - { x: 3, y: 2, label: "krank: 100", farbe: 1 }
  - { x: 3, y: -2, label: "gesund: 9900", farbe: 0 }
  - { x: 6, y: 3, label: "positiv: 98", farbe: 1 }
  - { x: 6, y: 1, label: "negativ: 2", farbe: 0 }
  - { x: 6, y: -1, label: "positiv: 495", farbe: 1 }
  - { x: 6, y: -3, label: "negativ: 9405", farbe: 0 }
beschriftung: "Baum mit gedachten Anzahlen für 10 000 Personen. Orange markiert sind die positiven Tests: 98 bei den Kranken und 495 bei den Gesunden. Von 593 positiven Tests stammen nur 98 von Kranken."
```

Warum ist das Ergebnis so niedrig, obwohl der Test gut ist? Schau auf die beiden orangen Blätter. Die
Kranken sind sehr wenige, also gibt es auch nur wenige echte Treffer: $98$. Die Gesunden sind sehr
viele. Schon $5\,\%$ von ihnen sind $495$ Fehlalarme. Die Fehlalarme sind fünfmal so viele wie die
echten Treffer.

:::intuition[Vorher und nachher]
Vor dem Test lag die Wahrscheinlichkeit, krank zu sein, bei $1\,\%$. Man nennt sie **a-priori-Wahrscheinlichkeit**,
lateinisch für „vom Früheren her“. Nach dem positiven Test liegt sie bei $16{,}5\,\%$. Das ist die
**a-posteriori-Wahrscheinlichkeit**, „vom Späteren her“. Der Test hat die Wahrscheinlichkeit also
etwa versechzehnfacht. Weil sie aber sehr klein begonnen hat, ist sie immer noch klein. Dasselbe Prinzip
steckt in Spamfiltern: Jedes verdächtige Wort aktualisiert die Wahrscheinlichkeit für „Spam“.
:::

```reflexion
frage: Eine Krankheit ist sehr selten. Warum ist ein positiver Test dann oft wenig aussagekräftig, selbst wenn der Test sehr gut ist? Erkläre es ohne Formel mit gedachten Anzahlen.
antwort: |
  Bei einer seltenen Krankheit gibt es unter $10\,000$ Personen nur wenige Kranke, zum Beispiel $100$. Selbst wenn der Test fast
  alle davon findet, sind das höchstens $100$ echte Treffer. Die Gesunden sind dagegen sehr viele, hier $9900$. Schon ein kleiner
  Anteil Fehlalarme, etwa $5\,\%$, ergibt fast $500$ positive Tests bei Gesunden. Unter allen Positiven sind die Gesunden dann in
  der Mehrheit. Der Test ist also nicht schlecht. Die geringe Häufigkeit der Krankheit (die Basisrate) zieht das Ergebnis nach unten.
```

:::achtung[Die Sensitivität für die Antwort halten]
Eine typische falsche Antwort auf die Frage nach $P(K \mid T)$ lautet „Der Test stimmt zu $98\,\%$, also gilt“
$$P(K \mid T) = 0{,}98. \qquad \text{(falsch)}$$
$0{,}98$ ist $P(T \mid K)$: die Lupe auf die Kranken. Gefragt ist aber $P(K \mid T)$: die Lupe auf die
Positiven. Unter den Positiven sind die vielen Fehlalarme der Gesunden. Richtig ist $\tfrac{98}{593} \approx 0{,}165$.
Dieser Fehler hat einen eigenen Namen: **Vernachlässigung der Basisrate**. Die Basisrate ist die Prävalenz von $1\,\%$.
:::

:::achtung[Im Nenner einen Pfad vergessen]
Eine typische falsche Rechnung:
$$P(K \mid T) = \frac{0{,}01 \cdot 0{,}98}{0{,}01} = 0{,}98. \qquad \text{(falsch)}$$
Im Nenner muss $P(T)$ stehen, also die Wahrscheinlichkeit für einen positiven Test. Zu „positiv“ führen
**zwei** Pfade: krank und positiv ($0{,}0098$) sowie gesund und positiv ($0{,}0495$). Richtig ist
$\tfrac{0{,}0098}{0{,}0593} \approx 0{,}165$. Kontrolle: Der Nenner muss mindestens so groß sein wie der Zähler.
:::

:::merke[Bayes-Aufgaben in vier Schritten]
1. **Ereignisse benennen:** Was ist die Ursache ($A$, zum Beispiel krank)? Was ist die Beobachtung ($B$, zum Beispiel positiv)?
2. **Baum zeichnen:** erste Stufe die Ursache, zweite Stufe die Beobachtung. Gegeben sind meist $P(A)$, $P(B \mid A)$ und $P(B \mid \bar A)$.
3. **Totale Wahrscheinlichkeit:** alle Pfade addieren, die in $B$ enden. Das ergibt $P(B)$.
4. **Umdrehen:** Teile die Wahrscheinlichkeit des Pfades „$A$ und $B$“ durch $P(B)$. Das ergibt $P(A \mid B) = \dfrac{P(A) \cdot P(B \mid A)}{P(B)}$.

Kontrolle mit gedachten Anzahlen, etwa für $10\,000$ Fälle. Wenn Zahlen krumm werden, nimm $100\,000$.
:::

```aufgabe
id: wk-bayes-total
titel: Bus bei Regen
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  An $30\,\%$ der Tage regnet es. An Regentagen kommt der Bus mit Wahrscheinlichkeit $0{,}4$ zu spät, an trockenen Tagen mit
  Wahrscheinlichkeit $0{,}1$. Mit welcher Wahrscheinlichkeit kommt der Bus an einem zufälligen Tag zu spät?
teile:
  - typ: zahl
    loesung: "0.3*0.4 + 0.7*0.1"
    anzeige: '0{,}19'
    fehler:
      - wert: "0.5"
        meldung: Du hast $0{,}4$ und $0{,}1$ addiert. Beide Werte gelten aber nur für einen Teil der Tage. Jeder muss mit dem Anteil seiner Tage gewichtet werden.
      - wert: "0.12"
        meldung: Das ist nur der Pfad „Regen und zu spät“. Auch an trockenen Tagen kommt der Bus manchmal zu spät.
      - wert: "0.25"
        meldung: Du hast den Mittelwert von $0{,}4$ und $0{,}1$ gebildet. Es regnet aber nicht an der Hälfte der Tage, sondern nur an $30\,\%$.
hinweise:
  - 'Zeichne einen Baum: erste Stufe Regen oder trocken, zweite Stufe zu spät oder pünktlich. Zwei Pfade enden in „zu spät“.'
loesung: |
  **Ansatz:** Totale Wahrscheinlichkeit. Wir addieren die beiden Pfade, die in „zu spät“ enden.
  ---
  $P(\text{zu spät}) = 0{,}3 \cdot 0{,}4 + 0{,}7 \cdot 0{,}1 = 0{,}12 + 0{,}07 = 0{,}19$.
  ---
  Kontrolle mit 100 Tagen: 30 Regentage mit 12 Verspätungen, 70 trockene Tage mit 7 Verspätungen. Zusammen 19 von 100.
```

```aufgabe
id: wk-bayes-umkehr
titel: Aus dem Baum zurückrechnen
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  In einem Baum führen genau zwei Pfade zum Ereignis $B$. Der Pfad „$A$ und $B$“ hat die Wahrscheinlichkeit $0{,}12$.
  Der Pfad „nicht $A$ und $B$“ hat die Wahrscheinlichkeit $0{,}28$. Berechne $P(A \mid B)$.
teile:
  - typ: zahl
    loesung: "0.12/(0.12 + 0.28)"
    anzeige: '0{,}3'
    fehler:
      - wert: "0.12"
        meldung: Das ist $P(A \cap B)$, bezogen auf alles. Bekannt ist aber, dass $B$ eingetreten ist. Teile durch $P(B)$.
      - wert: "0.12/0.28"
        meldung: Im Nenner steht nicht der andere Pfad, sondern $P(B)$, also die Summe **beider** Pfade.
hinweise:
  - 'Zuerst $P(B)$ als Summe der beiden Pfade berechnen, dann $P(A \mid B) = \frac{P(A \cap B)}{P(B)}$.'
loesung: |
  **Ansatz:** Bayes in Kurzform: der eine Pfad durch die Summe aller Pfade nach $B$.
  ---
  $P(B) = 0{,}12 + 0{,}28 = 0{,}40$. Also $P(A \mid B) = \tfrac{0{,}12}{0{,}40} = 0{,}3$.
  ---
  In Worten: Unter allen Fällen mit $B$ gehören $30\,\%$ zu $A$.
```

```aufgabe
id: wk-bayes-gefuehrt
titel: Alarm im Virenscanner
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  $5\,\%$ der Dateien auf einem Firmenserver sind infiziert. Ein Virenscanner schlägt bei infizierten Dateien mit Wahrscheinlichkeit
  $96\,\%$ Alarm. Bei sauberen Dateien schlägt er mit Wahrscheinlichkeit $3\,\%$ fälschlich Alarm.
  Der Scanner schlägt bei einer zufällig gewählten Datei Alarm. Mit welcher Wahrscheinlichkeit ist sie infiziert? (4 Nachkommastellen)
teile:
  - typ: zahl
    loesung: "0.05*0.96/(0.05*0.96 + 0.95*0.03)"
    toleranz: 0.0005
    anzeige: '\tfrac{480}{765} \approx 0{,}6275'
    fehler:
      - wert: "0.96"
        meldung: Das ist $P(\text{Alarm} \mid \text{infiziert})$. Gefragt ist die Umkehrung. Unter den Alarmen sind auch Fehlalarme bei sauberen Dateien.
      - wert: "0.048"
        meldung: Das ist der Anteil aller Dateien, die infiziert sind **und** Alarm auslösen. Du musst noch durch den Anteil aller Alarme teilen.
hinweise:
  - Stell dir $10\,000$ Dateien vor. Wie viele sind infiziert, wie viele sauber?
  - Zähle die Alarme in beiden Gruppen. Dann teilst du die echten Alarme durch alle Alarme.
gefuehrt:
  - text: Von $10\,000$ Dateien, wie viele sind infiziert?
    teil: { typ: zahl, loesung: "10000*0.05" }
    erklaerung: $5\,\%$ von $10\,000$ sind $500$ Dateien.
  - text: Bei wie vielen davon schlägt der Scanner Alarm?
    teil: { typ: zahl, loesung: "500*0.96" }
    erklaerung: $96\,\%$ von $500$ sind $480$ echte Alarme.
  - text: Wie viele saubere Dateien lösen einen Fehlalarm aus?
    teil: { typ: zahl, loesung: "9500*0.03" }
    erklaerung: Sauber sind $9500$ Dateien. $3\,\%$ davon sind $285$ Fehlalarme.
  - text: Wie viele Alarme gibt es insgesamt?
    teil: { typ: zahl, loesung: "480 + 285" }
    erklaerung: $480 + 285 = 765$. Das entspricht der totalen Wahrscheinlichkeit $P(\text{Alarm}) = 0{,}0765$.
  - text: Welcher Anteil der Alarme betrifft eine infizierte Datei?
    teil: { typ: zahl, loesung: "480/765", toleranz: 0.0005 }
    erklaerung: $\tfrac{480}{765} \approx 0{,}6275$. Das ist $P(\text{infiziert} \mid \text{Alarm})$.
loesung: |
  **Ansatz:** Bayes mit gedachten Anzahlen für $10\,000$ Dateien. Ursache: infiziert oder sauber. Beobachtung: Alarm.
  ---
  Infiziert: $500$ Dateien, davon $480$ mit Alarm. Sauber: $9500$ Dateien, davon $285$ mit Fehlalarm.
  ---
  Alarme insgesamt: $765$. Also $P(\text{infiziert} \mid \text{Alarm}) = \tfrac{480}{765} \approx 0{,}6275$.
  ---
  Mit der Formel: $\dfrac{0{,}05 \cdot 0{,}96}{0{,}05 \cdot 0{,}96 + 0{,}95 \cdot 0{,}03} = \dfrac{0{,}048}{0{,}0765} \approx 0{,}6275$.
  Deutung: Gut ein Drittel aller Alarme sind Fehlalarme.
```

```aufgabe
id: wk-bayes-test
titel: Positiver Schnelltest
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Eine Krankheit tritt bei $2\,\%$ der Bevölkerung auf. Ein Schnelltest ist bei Kranken mit Wahrscheinlichkeit $90\,\%$ positiv,
  bei Gesunden mit Wahrscheinlichkeit $4\,\%$ (falsch positiv).
  a) Mit welcher Wahrscheinlichkeit ist der Test einer zufällig gewählten Person positiv?
  b) Mit welcher Wahrscheinlichkeit ist eine positiv getestete Person krank? (beide auf 4 Nachkommastellen)
teile:
  - typ: zahl
    label: 'a) $P(T)$'
    loesung: "0.02*0.9 + 0.98*0.04"
    toleranz: 0.0005
    anzeige: '0{,}0572'
    fehler:
      - wert: "0.018"
        meldung: Das ist nur der Pfad „krank und positiv“. Auch Gesunde werden manchmal positiv getestet. Addiere diesen Pfad.
      - wert: "0.94"
        meldung: Du hast $0{,}9$ und $0{,}04$ addiert. Jeder Wert muss mit dem Anteil seiner Gruppe gewichtet werden.
  - typ: zahl
    label: 'b) $P(K \mid T)$'
    loesung: "0.02*0.9/(0.02*0.9 + 0.98*0.04)"
    toleranz: 0.0005
    anzeige: '0{,}3147'
    fehler:
      - wert: "0.9"
        meldung: Das ist $P(T \mid K)$, die Sensitivität. Gefragt ist die umgekehrte Richtung. Dafür brauchst du den Satz von Bayes.
hinweise:
  - 'Baum: erste Stufe krank oder gesund, zweite Stufe Test positiv oder negativ.'
  - 'Satz von Bayes: $P(K \mid T) = \dfrac{P(K) \cdot P(T \mid K)}{P(T)}$ mit $P(T)$ aus a).'
loesung: |
  **Ansatz:** Gegeben sind $P(K) = 0{,}02$, $P(T \mid K) = 0{,}9$ und $P(T \mid \bar K) = 0{,}04$. Gesucht ist zuerst $P(T)$, dann die Umkehrung.
  ---
  a) Totale Wahrscheinlichkeit: $P(T) = 0{,}02 \cdot 0{,}9 + 0{,}98 \cdot 0{,}04 = 0{,}018 + 0{,}0392 = 0{,}0572$.
  ---
  b) Bayes: $P(K \mid T) = \tfrac{0{,}018}{0{,}0572} \approx 0{,}3147$.
  ---
  Kontrolle mit $10\,000$ Personen: 200 Kranke, davon 180 positiv. 9800 Gesunde, davon 392 positiv. $\tfrac{180}{572} \approx 0{,}3147$.
  Trotz positivem Test ist die Person also nur mit etwa $31\,\%$ krank.
```

```aufgabe
id: wk-bayes-produktion
titel: Welche Maschine war es?
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Drei Maschinen produzieren Schrauben. $M_1$ liefert $50\,\%$ der Produktion mit $2\,\%$ Ausschuss, $M_2$ liefert $30\,\%$ mit
  $3\,\%$ Ausschuss, $M_3$ liefert $20\,\%$ mit $5\,\%$ Ausschuss.
  a) Wie groß ist der Ausschussanteil der Gesamtproduktion?
  b) Eine zufällig entnommene Schraube ist defekt. Mit welcher Wahrscheinlichkeit stammt sie von $M_3$? (4 Nachkommastellen)
teile:
  - typ: zahl
    label: 'a) $P(D)$'
    loesung: "0.5*0.02 + 0.3*0.03 + 0.2*0.05"
    anzeige: '0{,}029'
    fehler:
      - wert: "0.1"
        meldung: Du hast die drei Ausschussquoten addiert. Jede gilt nur für den Anteil ihrer Maschine und muss damit gewichtet werden.
      - wert: "0.0333"
        meldung: Du hast den einfachen Mittelwert der drei Quoten gebildet. Die Maschinen liefern aber verschieden viel.
  - typ: zahl
    label: 'b) $P(M_3 \mid D)$'
    loesung: "0.2*0.05/(0.5*0.02 + 0.3*0.03 + 0.2*0.05)"
    toleranz: 0.0005
    anzeige: '0{,}3448'
    fehler:
      - wert: "0.2"
        meldung: Das ist der Anteil von $M_3$ an **allen** Schrauben. Bekannt ist aber, dass die Schraube defekt ist. $M_3$ produziert überdurchschnittlich viel Ausschuss.
      - wert: "0.01"
        meldung: Das ist $P(M_3 \cap D)$. Teile noch durch $P(D)$ aus a).
hinweise:
  - 'Die totale Wahrscheinlichkeit funktioniert genauso mit drei Ästen in der ersten Stufe.'
  - 'Für b): Pfad „$M_3$ und defekt“ durch die Summe aller drei Pfade, die in „defekt“ enden.'
loesung: |
  **Ansatz:** Baum mit drei Ästen in der ersten Stufe (Maschine) und zwei in der zweiten (defekt oder nicht).
  ---
  a) Summe über alle drei Pfade, die in „defekt“ enden: $0{,}5 \cdot 0{,}02 + 0{,}3 \cdot 0{,}03 + 0{,}2 \cdot 0{,}05 = 0{,}010 + 0{,}009 + 0{,}010 = 0{,}029$.
  ---
  b) Bayes: $P(M_3 \mid D) = \tfrac{0{,}010}{0{,}029} \approx 0{,}3448$.
  ---
  Deutung: $M_3$ produziert nur $20\,\%$ der Schrauben, aber gut ein Drittel des Ausschusses.
```

```aufgabe
id: wk-bayes-zweiter-test
titel: Ein zweiter Test
niveau: 3
lernziel: 4
kompetenz: begruenden
angabe: |
  Wir bleiben beim Schnelltest der Aufgabe „Positiver Schnelltest“: Prävalenz $2\,\%$, positiv bei Kranken mit $90\,\%$,
  positiv bei Gesunden mit $4\,\%$. Eine Person war positiv. Danach hat sie mit $0{,}3147$ die Krankheit.
  Nun macht sie einen zweiten Test derselben Art. Wir nehmen an: Bei gegebenem Gesundheitszustand fällt der zweite Test unabhängig
  vom ersten aus.
  a) Auch der zweite Test ist positiv. Mit welcher Wahrscheinlichkeit ist die Person krank? (4 Nachkommastellen)
  b) Erkläre, warum man im zweiten Schritt $0{,}3147$ statt $0{,}02$ als Ausgangswahrscheinlichkeit verwendet.
teile:
  - typ: zahl
    label: 'a)'
    loesung: "0.3147*0.9/(0.3147*0.9 + 0.6853*0.04)"
    toleranz: 0.001
    anzeige: '0{,}9118'
    fehler:
      - wert: "0.3147"
        meldung: Das ist der Stand nach dem **ersten** Test. Der zweite positive Test liefert neue Information. Wende Bayes noch einmal an.
      - wert: "0.02*0.9/(0.02*0.9 + 0.98*0.04)"
        meldung: Damit hast du nur den ersten Test ausgewertet. Für den zweiten Test ist die neue Ausgangswahrscheinlichkeit $0{,}3147$.
  - typ: text
    label: 'b) Begründung'
    muster: |
      Nach dem ersten positiven Test weiß man mehr als vorher. Die Person gehört jetzt zur Gruppe der positiv Getesteten, und in
      dieser Gruppe sind $31{,}47\,\%$ krank. Für den zweiten Test ist das die neue a-priori-Wahrscheinlichkeit. Man setzt also
      $P(K) = 0{,}3147$ und $P(\bar K) = 0{,}6853$ in den Satz von Bayes ein. Weil die Tests bei gegebenem Zustand unabhängig sind,
      bleiben $P(T \mid K) = 0{,}9$ und $P(T \mid \bar K) = 0{,}04$ gleich.
hinweise:
  - 'Wende den Satz von Bayes noch einmal an. Ersetze die Prävalenz $0{,}02$ durch das Ergebnis des ersten Tests.'
  - 'Die neue Ausgangswahrscheinlichkeit ist $P(K) = 0{,}3147$, also $P(\bar K) = 0{,}6853$. Sensitivität und Fehlalarmrate bleiben gleich.'
loesung: |
  **Ansatz:** Bayes Schritt für Schritt. Was nach dem ersten Test gilt, ist die Ausgangslage für den zweiten Test.
  ---
  Neue Ausgangswerte: $P(K) = 0{,}3147$ und $P(\bar K) = 1 - 0{,}3147 = 0{,}6853$.
  ---
  Totale Wahrscheinlichkeit für den zweiten positiven Test: $0{,}3147 \cdot 0{,}9 + 0{,}6853 \cdot 0{,}04 \approx 0{,}2832 + 0{,}0274 = 0{,}3106$.
  ---
  Bayes: $P(K \mid \text{zweimal positiv}) \approx \tfrac{0{,}2832}{0{,}3106} \approx 0{,}9118$.
  ---
  Deutung: Ein einzelner positiver Test hob die Wahrscheinlichkeit von $2\,\%$ auf rund $31\,\%$. Der zweite hebt sie auf rund $91\,\%$.
  Deshalb bestätigt man in der Medizin positive Suchtests durch einen zweiten Test.
```

## Unabhängigkeit von Ereignissen

```aufgabe
id: wk-unabh-check-zweimal
titel: Zweimal die Sechs
niveau: 1
art: check
angabe: |
  Ein fairer Würfel wird zweimal geworfen. Wie groß ist die Wahrscheinlichkeit, zweimal eine 6 zu werfen? Gib einen Bruch an.
  (Wiederholung: [16.6 Mehrstufige Experimente: Baumdiagramme und Pfadregeln](/lernen/mathe3/wahrscheinlichkeit/mehrstufige-experimente-baumdiagramme-und-pfadregeln))
teile:
  - typ: zahl
    loesung: "1/6*1/6"
    anzeige: '\tfrac{1}{36}'
    fehler:
      - wert: "2/6"
        meldung: Du hast addiert. Entlang des Pfades „6, dann 6“ wird multipliziert.
loesung: |
  Pfad „6 und dann 6“ im Baum. Die Äste haben jeweils $\tfrac16$.
  ---
  Produktregel: $\tfrac16 \cdot \tfrac16 = \tfrac{1}{36}$.
```

**Worum geht es?** Zwei Ereignisse heißen **unabhängig**, wenn das Wissen über das eine die
Wahrscheinlichkeit des anderen **nicht verändert**. Beim zweimaligen Würfeln ist das so: Der erste Wurf
verrät nichts über den zweiten. Beim Kurs-Beispiel in [16.7 Bedingte Wahrscheinlichkeit und Vierfeldertafel](/lernen/mathe3/wahrscheinlichkeit/bedingte-wahrscheinlichkeit-und-vierfeldertafel) war
das anders: Wer die Hausübung gemacht hatte, bestand häufiger.

**Das Bild dazu:** Lege die Lupe auf $A$. Wenn $B$ innerhalb von $A$ denselben Anteil hat wie in der
ganzen Menge, dann hat die Lupe nichts verändert. Dann gilt $P(B \mid A) = P(B)$.

### Die Definition

Wir setzen $P(B \mid A) = P(B)$ in die Definition der bedingten Wahrscheinlichkeit ein:
$$\frac{P(A \cap B)}{P(A)} = P(B).$$
Wir multiplizieren beide Seiten mit $P(A)$, damit der Bruch verschwindet. Es bleibt
$P(A \cap B) = P(A) \cdot P(B)$. Diese Form nimmt man als Definition. Sie hat zwei Vorteile: Sie ist
symmetrisch in $A$ und $B$. Und sie funktioniert auch, wenn $P(A) = 0$ ist und man gar nicht durch $P(A)$ teilen darf.

:::definition[Stochastische Unabhängigkeit]
Zwei Ereignisse $A$ und $B$ heißen **(stochastisch) unabhängig**, wenn
$$P(A \cap B) = P(A) \cdot P(B).$$
Ist $P(A) > 0$, so ist das gleichwertig mit $P(B \mid A) = P(B)$. Gilt die Gleichung nicht, heißen $A$ und $B$ **abhängig**.
:::

Das Wort „stochastisch“ kommt aus dem Griechischen und bedeutet „zum Vermuten gehörig“. Es sagt nur, dass
diese Unabhängigkeit über Wahrscheinlichkeiten definiert ist und nicht über Ursache und Wirkung.

:::beispiel[Unabhängigkeit nachrechnen]
Ein Würfel wird einmal geworfen. Wir betrachten $A$ = „gerade“ $= \{2, 4, 6\}$, $B$ = „höchstens 4“ $= \{1, 2, 3, 4\}$
und $C$ = „höchstens 3“ $= \{1, 2, 3\}$.

- **$A$ und $B$:** $A \cap B = \{2, 4\}$, also $P(A \cap B) = \tfrac26 = \tfrac13$. Das Produkt ist $P(A) \cdot P(B) = \tfrac12 \cdot \tfrac23 = \tfrac13$. Beide Seiten sind gleich, also sind $A$ und $B$ **unabhängig**.
- **$A$ und $C$:** $A \cap C = \{2\}$, also $P(A \cap C) = \tfrac16$. Das Produkt ist $\tfrac12 \cdot \tfrac12 = \tfrac14$. Die Seiten sind verschieden, also sind $A$ und $C$ **abhängig**.

Mit der Lupe: Unter $\{1, 2, 3, 4\}$ ist die Hälfte gerade, genau wie unter allen sechs Zahlen. Unter
$\{1, 2, 3\}$ ist nur ein Drittel gerade. Unabhängigkeit ist also eine Eigenschaft der **Zahlen**. Man
kann sie nicht immer „sehen“, man muss sie nachrechnen.
:::

:::beispiel[Brille und Linkshändigkeit]
In einer Gruppe von 200 Personen sind 50 Linkshänder ($L$) und 80 tragen eine Brille ($T$). 20 Personen
sind Linkshänder und tragen eine Brille. Sind die Merkmale bei zufälliger Auswahl unabhängig?

- $P(L) = \tfrac{50}{200} = 0{,}25$ und $P(T) = \tfrac{80}{200} = 0{,}4$.
- Produkt: $0{,}25 \cdot 0{,}4 = 0{,}1$.
- Tatsächlich: $P(L \cap T) = \tfrac{20}{200} = 0{,}1$.

Beide Werte stimmen überein, also sind $L$ und $T$ unabhängig. Kontrolle mit der Lupe: Unter den 50
Linkshändern tragen 20 eine Brille, das sind $40\,\%$. In der ganzen Gruppe sind es ebenfalls $40\,\%$.
:::

:::achtung[Unvereinbar mit unabhängig verwechselt]
Beim Würfel sind $A$ = „Augenzahl 1“ und $B$ = „Augenzahl 2“ unvereinbar. Eine typische falsche Überlegung:
Die beiden haben nichts miteinander zu tun, also seien sie unabhängig, und
$$P(A \cap B) = \tfrac16 \cdot \tfrac16 = \tfrac{1}{36}. \qquad \text{(falsch)}$$
Unvereinbar heißt: Beide zugleich gehen **nicht**. Also ist $P(A \cap B) = 0$. Das Produkt $\tfrac{1}{36}$
ist aber nicht $0$. Unvereinbare Ereignisse mit positiver Wahrscheinlichkeit sind sogar **stark abhängig**:
Wenn $A$ eintritt, weißt du sicher, dass $B$ nicht eintritt.
:::

:::achtung[Multipliziert, ohne Unabhängigkeit zu prüfen]
Im Kurs-Beispiel aus [16.7 Bedingte Wahrscheinlichkeit und Vierfeldertafel](/lernen/mathe3/wahrscheinlichkeit/bedingte-wahrscheinlichkeit-und-vierfeldertafel) haben von 40 Personen 25 die Hausübung gemacht ($H$) und 26 bestanden ($B$). 20 Personen haben beides. Eine
typische falsche Rechnung:
$$P(H \cap B) = \tfrac{25}{40} \cdot \tfrac{26}{40} \approx 0{,}406. \qquad \text{(falsch)}$$
Die Produktformel gilt nur bei unabhängigen Ereignissen. Hier hängen Hausübung und Bestehen zusammen.
Richtig liest man in der Tabelle ab: $P(H \cap B) = \tfrac{20}{40} = 0{,}5$. Allgemein gilt immer der
Multiplikationssatz $P(H \cap B) = P(H) \cdot P(B \mid H) = \tfrac{25}{40} \cdot \tfrac{20}{25} = 0{,}5$.
:::

:::merke[Unabhängigkeit prüfen]
1. $P(A)$, $P(B)$ und $P(A \cap B)$ bestimmen, zum Beispiel aus einer Vierfeldertafel.
2. Das Produkt $P(A) \cdot P(B)$ ausrechnen.
3. Vergleichen. Gleich heißt unabhängig, verschieden heißt abhängig.

Gleichwertig: $P(B \mid A)$ mit $P(B)$ vergleichen. In Anwendungen setzt man Unabhängigkeit voraus, wenn sich
Teilexperimente nicht beeinflussen. Beispiele sind wiederholte Würfe, Ziehen **mit** Zurücklegen und
Ausfälle getrennter Bauteile. Nur dann darf man $P(A)$ und $P(B)$ einfach multiplizieren.
:::

### Mehr als zwei Ereignisse: paarweise reicht nicht

Bei drei Ereignissen $A$, $B$, $C$ verlangt man mehr. Sie heißen **gemeinsam unabhängig**, wenn die
Produktformel für **jede** Auswahl gilt:
$$P(A \cap B) = P(A)P(B), \quad P(A \cap C) = P(A)P(C), \quad P(B \cap C) = P(B)P(C)$$
und zusätzlich
$$P(A \cap B \cap C) = P(A)P(B)P(C).$$
Die ersten drei Gleichungen heißen **paarweise Unabhängigkeit**. Sie genügen nicht, wie das folgende
Gegenbeispiel zeigt. Es passt gut in die mündliche Prüfung.

:::beispiel[Zwei Münzen und „beide gleich“]
Zwei faire Münzen werden geworfen. Die vier Ergebnisse $KK$, $KZ$, $ZK$, $ZZ$ sind gleich wahrscheinlich.
Es sei $A$ = „erste Münze Kopf“, $B$ = „zweite Münze Kopf“ und $C$ = „beide Münzen zeigen dasselbe“.
Jedes Ereignis hat die Wahrscheinlichkeit $\tfrac12$.

- $A \cap B = \{KK\}$, also $\tfrac14 = \tfrac12 \cdot \tfrac12$. Paar unabhängig.
- $A \cap C = \{KK\}$, also $\tfrac14 = \tfrac12 \cdot \tfrac12$. Paar unabhängig.
- $B \cap C = \{KK\}$, also $\tfrac14 = \tfrac12 \cdot \tfrac12$. Paar unabhängig.
- Aber $A \cap B \cap C = \{KK\}$ hat $\tfrac14$, und das Produkt ist $\tfrac18$. Nicht gleich.

Die drei Ereignisse sind also paarweise unabhängig, aber **nicht** gemeinsam unabhängig. Anschaulich:
Kennst du $A$ und $B$ zusammen, dann kennst du auch $C$ sicher. Jedes einzelne Ereignis verrät aber
nichts über ein anderes einzelnes.
:::

```aufgabe
id: wk-unabh-gefuehrt
titel: Onlinekauf und Kundenkarte
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Ein Geschäft hat 400 Stammkundinnen und Stammkunden. 160 davon kaufen auch online ($O$), 100 haben eine Kundenkarte ($K$),
  und 50 kaufen online **und** haben eine Kundenkarte. Eine Person wird zufällig gewählt.
  Berechne $P(O \cap K)$ und $P(O) \cdot P(K)$ und entscheide: Sind $O$ und $K$ unabhängig?
teile:
  - typ: zahl
    label: '$P(O \cap K)$'
    loesung: "50/400"
    anzeige: '0{,}125'
    fehler:
      - wert: "0.1"
        meldung: Das ist das Produkt $P(O) \cdot P(K)$. Gefragt ist hier der tatsächliche Anteil der Personen mit beiden Merkmalen.
  - typ: zahl
    label: '$P(O) \cdot P(K)$'
    loesung: "160/400*100/400"
    anzeige: '0{,}1'
    fehler:
      - wert: "0.65"
        meldung: Du hast $P(O)$ und $P(K)$ addiert. Für den Vergleich brauchst du das Produkt.
  - typ: auswahl
    label: 'Entscheidung'
    optionen: ['unabhängig', 'abhängig']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Vergleiche die beiden Zahlen. $0{,}125$ und $0{,}1$ sind verschieden. Unabhängig wären die Merkmale nur bei Gleichheit.
hinweise:
  - 'Rechne zuerst $P(O) = \tfrac{160}{400}$ und $P(K) = \tfrac{100}{400}$ aus.'
gefuehrt:
  - text: Berechne $P(O)$.
    teil: { typ: zahl, loesung: "160/400" }
    erklaerung: $\tfrac{160}{400} = 0{,}4$.
  - text: Berechne $P(K)$.
    teil: { typ: zahl, loesung: "100/400" }
    erklaerung: $\tfrac{100}{400} = 0{,}25$.
  - text: Was müsste $P(O \cap K)$ bei Unabhängigkeit sein?
    teil: { typ: zahl, loesung: "0.4*0.25" }
    erklaerung: Das Produkt $0{,}4 \cdot 0{,}25 = 0{,}1$.
  - text: Wie groß ist $P(O \cap K)$ tatsächlich?
    teil: { typ: zahl, loesung: "50/400" }
    erklaerung: $\tfrac{50}{400} = 0{,}125$. Das ist mehr als $0{,}1$, also sind $O$ und $K$ abhängig.
loesung: |
  **Ansatz:** Unabhängigkeit prüft man, indem man $P(O \cap K)$ mit $P(O) \cdot P(K)$ vergleicht.
  ---
  $P(O) = 0{,}4$, $P(K) = 0{,}25$, Produkt $0{,}1$. Tatsächlich ist $P(O \cap K) = \tfrac{50}{400} = 0{,}125$.
  ---
  $0{,}125 \ne 0{,}1$, also abhängig. Mit der Lupe: Unter den Onlinekäufern haben $\tfrac{50}{160} \approx 31\,\%$ eine Kundenkarte, insgesamt nur $25\,\%$.
```

```aufgabe
id: wk-unabh-wuerfel
titel: Primzahl und gerade
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  Ein fairer Würfel wird einmal geworfen. $A$ heißt „Primzahl“, $B$ heißt „gerade Augenzahl“.
  a) Berechne $P(A \cap B)$ als Bruch. b) Sind $A$ und $B$ unabhängig?
teile:
  - typ: zahl
    label: 'a) $P(A \cap B)$'
    loesung: "1/6"
    anzeige: '\tfrac16'
    fehler:
      - wert: "1/4"
        meldung: Das ist das Produkt $P(A) \cdot P(B)$. Für $P(A \cap B)$ zählst du die Augenzahlen, die Primzahl **und** gerade sind.
      - wert: "0"
        meldung: Gibt es keine gerade Primzahl? Denk an die kleinste Primzahl.
  - typ: auswahl
    label: 'b)'
    optionen: ['unabhängig', 'abhängig']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Vergleiche $P(A \cap B)$ mit $P(A) \cdot P(B) = \tfrac12 \cdot \tfrac12$. Die Werte sind verschieden.
hinweise:
  - 'Primzahlen auf dem Würfel sind $2$, $3$ und $5$. Gerade sind $2$, $4$ und $6$.'
loesung: |
  **Ansatz:** Mengen aufschreiben und die Produktformel prüfen. $A = \{2, 3, 5\}$, $B = \{2, 4, 6\}$.
  ---
  a) $A \cap B = \{2\}$, also $P(A \cap B) = \tfrac16$.
  ---
  b) $P(A) \cdot P(B) = \tfrac12 \cdot \tfrac12 = \tfrac14 \ne \tfrac16$. Also abhängig.
  Mit der Lupe: Unter den geraden Zahlen ist nur ein Drittel prim, unter allen Zahlen die Hälfte.
```

```aufgabe
id: wk-bedingt-unabhaengig
titel: Unabhängigkeit prüfen
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Für zwei Ereignisse gilt $P(A) = 0{,}4$, $P(B) = 0{,}5$ und $P(A \cup B) = 0{,}7$.
  a) Berechne $P(A \cap B)$. b) Sind $A$ und $B$ unabhängig? c) Berechne $P(A \mid B)$.
teile:
  - typ: zahl
    label: 'a) $P(A \cap B)$'
    loesung: "0.4 + 0.5 - 0.7"
    anzeige: '0{,}2'
    fehler:
      - wert: "-0.2"
        meldung: Vorzeichenfehler beim Umstellen des Additionssatzes. Eine Wahrscheinlichkeit ist nie negativ.
  - typ: auswahl
    label: 'b)'
    optionen:
      - 'Ja, unabhängig'
      - 'Nein, abhängig'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Vergleiche $P(A \cap B)$ aus a) mit $P(A) \cdot P(B) = 0{,}4 \cdot 0{,}5$.
  - typ: zahl
    label: 'c) $P(A \mid B)$'
    loesung: "0.2/0.5"
    anzeige: '0{,}4'
    fehler:
      - wert: "0.5"
        meldung: Das ist $P(B \mid A) = \tfrac{0{,}2}{0{,}4}$. Bei $P(A \mid B)$ steht $B$ hinter dem Strich, also teilst du durch $P(B)$.
hinweise:
  - 'Stelle den Additionssatz $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ nach $P(A \cap B)$ um.'
  - 'Für b) vergleichst du mit dem Produkt $P(A) \cdot P(B)$.'
loesung: |
  **Ansatz:** Der Additionssatz liefert den Durchschnitt. Dann vergleichen wir mit dem Produkt.
  ---
  a) $P(A \cap B) = P(A) + P(B) - P(A \cup B) = 0{,}4 + 0{,}5 - 0{,}7 = 0{,}2$.
  ---
  b) $P(A) \cdot P(B) = 0{,}4 \cdot 0{,}5 = 0{,}2 = P(A \cap B)$. Also unabhängig.
  ---
  c) $P(A \mid B) = \tfrac{0{,}2}{0{,}5} = 0{,}4$. Das ist genau $P(A)$, wie es bei Unabhängigkeit sein muss.
```

```aufgabe
id: wk-unabh-fehlender-wert
titel: Den fehlenden Wert finden
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Zwei unabhängige Ereignisse $A$ und $B$ haben $P(A) = 0{,}3$ und $P(A \cup B) = 0{,}58$. Berechne $P(B)$.
teile:
  - typ: zahl
    loesung: "(0.58 - 0.3)/(1 - 0.3)"
    anzeige: '0{,}4'
    fehler:
      - wert: "0.28"
        meldung: Du hast $P(A \cup B) = P(A) + P(B)$ verwendet. Das gilt nur bei unvereinbaren Ereignissen. Hier musst du $P(A \cap B)$ abziehen.
hinweise:
  - 'Additionssatz: $P(A \cup B) = P(A) + P(B) - P(A \cap B)$.'
  - 'Wegen der Unabhängigkeit ist $P(A \cap B) = 0{,}3 \cdot P(B)$. Setze ein und löse nach $P(B)$ auf.'
loesung: |
  **Ansatz:** Additionssatz und Produktformel zusammen. Wir nennen die Unbekannte $x = P(B)$.
  ---
  Einsetzen: $0{,}58 = 0{,}3 + x - 0{,}3x$. Zusammenfassen: $0{,}58 = 0{,}3 + 0{,}7x$.
  ---
  Wir ziehen $0{,}3$ ab und teilen durch $0{,}7$: $x = \tfrac{0{,}28}{0{,}7} = 0{,}4$.
  ---
  Probe: $0{,}3 + 0{,}4 - 0{,}3 \cdot 0{,}4 = 0{,}7 - 0{,}12 = 0{,}58$.
```

```aufgabe
id: wk-unabh-paarweise
titel: Gerade Würfe
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: |
  Ein Würfel wird zweimal geworfen. $A$ heißt „erster Wurf gerade“, $B$ heißt „zweiter Wurf gerade“, $C$ heißt „Augensumme gerade“.
  Jedes der drei Ereignisse hat die Wahrscheinlichkeit $\tfrac12$.
  a) Berechne $P(A \cap C)$. b) Berechne $P(A \cap B \cap C)$. c) Welche Aussage stimmt?
teile:
  - typ: zahl
    label: 'a) $P(A \cap C)$'
    loesung: "1/4"
    anzeige: '\tfrac14'
    fehler:
      - wert: "1/2"
        meldung: Das ist nur $P(A)$. Bei $A \cap C$ muss der erste Wurf gerade **und** die Summe gerade sein. Dann ist auch der zweite Wurf gerade.
  - typ: zahl
    label: 'b) $P(A \cap B \cap C)$'
    loesung: "1/4"
    anzeige: '\tfrac14'
    fehler:
      - wert: "1/8"
        meldung: Das wäre das Produkt $\tfrac12 \cdot \tfrac12 \cdot \tfrac12$. Es gilt nur bei gemeinsamer Unabhängigkeit. Überlege, was $C$ verrät, wenn $A$ und $B$ eingetreten sind.
  - typ: auswahl
    label: 'c)'
    optionen:
      - '$A$, $B$, $C$ sind gemeinsam unabhängig.'
      - '$A$, $B$, $C$ sind paarweise unabhängig, aber nicht gemeinsam unabhängig.'
      - '$A$ und $C$ sind abhängig.'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Prüfe die Dreifach-Bedingung. $P(A \cap B \cap C)$ ist nicht gleich $\tfrac18$.
      - wert: 2
        meldung: Vergleiche $P(A \cap C)$ aus a) mit $P(A) \cdot P(C) = \tfrac14$. Das Paar ist unabhängig.
hinweise:
  - 'Die Summe zweier Zahlen ist gerade, wenn beide gerade oder beide ungerade sind.'
  - 'Wenn $A$ und $B$ eintreten, sind beide Würfe gerade. Dann ist $C$ sicher. Was folgt für $A \cap B \cap C$?'
loesung: |
  **Ansatz:** Paare und das Tripel getrennt mit der Produktformel prüfen.
  ---
  a) $A \cap C$: Erster Wurf gerade und Summe gerade, also auch der zweite Wurf gerade. Das ist $A \cap B$ mit $\tfrac12 \cdot \tfrac12 = \tfrac14$.
  Produkt $P(A) P(C) = \tfrac14$. Das Paar ist unabhängig. Ebenso $B$ und $C$, und $A$ und $B$ sowieso.
  ---
  b) Wenn $A$ und $B$ eintreten, ist $C$ sicher. Also $A \cap B \cap C = A \cap B$ mit $\tfrac14$. Das Produkt wäre $\tfrac18$.
  ---
  c) Paarweise unabhängig, aber nicht gemeinsam unabhängig. Wer weiß, ob beide Würfe gerade sind, weiß auch, ob die Summe gerade ist.
```

```aufgabe
id: wk-disjunkt-unabhaengig
titel: Unvereinbar und unabhängig?
niveau: 3
lernziel: 3
kompetenz: begruenden
angabe: |
  Begründe: Sind $A$ und $B$ unvereinbar mit $P(A) > 0$ und $P(B) > 0$, so sind $A$ und $B$ **nicht** unabhängig.
  Erkläre das Ergebnis auch anschaulich, und gib ein Beispiel beim Würfeln an.
teile:
  - typ: text
    muster: |
      Unvereinbar heißt $A \cap B = \emptyset$, also $P(A \cap B) = 0$. Wegen $P(A) > 0$ und $P(B) > 0$ ist aber das Produkt
      $P(A) \cdot P(B) > 0$. Damit ist $P(A \cap B) \ne P(A) \cdot P(B)$, die Ereignisse sind abhängig.
      Anschaulich: Weiß man, dass $A$ eingetreten ist, so ist $B$ sicher nicht eingetreten. Es gilt $P(B \mid A) = 0$,
      obwohl $P(B) > 0$ ist. Die Information über $A$ verändert die Wahrscheinlichkeit von $B$ also maximal.
      Beispiel: „Augenzahl 1“ und „Augenzahl 2“ beim Würfel. Beide haben $\tfrac16$, gemeinsam aber $0$, nicht $\tfrac{1}{36}$.
hinweise:
  - Was ist $P(A \cap B)$ bei unvereinbaren Ereignissen?
  - Was müsste bei Unabhängigkeit herauskommen, und warum ist das hier positiv?
loesung: |
  **Ansatz:** Wir vergleichen $P(A \cap B)$ mit dem Produkt $P(A) \cdot P(B)$, wie es die Definition verlangt.
  ---
  Unvereinbar heißt $A \cap B = \emptyset$. Daraus folgt $P(A \cap B) = 0$.
  ---
  Unabhängig würde $P(A \cap B) = P(A) \cdot P(B)$ verlangen. Das Produkt zweier positiver Zahlen ist positiv, also nicht $0$. Widerspruch.
  ---
  Anschaulich: $P(B \mid A) = 0$, obwohl $P(B) > 0$. Das Eintreten von $A$ schließt $B$ aus. Das ist die stärkste Form der Abhängigkeit.
```

## Zufallsvariablen und Erwartungswert

```aufgabe
id: wk-zv-check-gewichtet
titel: Gewichtete Summe
niveau: 1
art: check
angabe: |
  Berechne $2 \cdot 0{,}5 + 4 \cdot 0{,}3 + 6 \cdot 0{,}2$.
  (Summen mit Gewichten kennst du vom Summenzeichen aus [Kapitel 8, Das Summenzeichen](/lernen/mathe3/folgen-reihen/das-summenzeichen).)
teile:
  - typ: zahl
    loesung: "2*0.5 + 4*0.3 + 6*0.2"
    anzeige: '3{,}4'
    fehler:
      - wert: "4"
        meldung: Du hast den einfachen Mittelwert von $2$, $4$ und $6$ gebildet. Hier hat jede Zahl ein eigenes Gewicht.
loesung: |
  Punkt vor Strich: $2 \cdot 0{,}5 = 1$, $4 \cdot 0{,}3 = 1{,}2$ und $6 \cdot 0{,}2 = 1{,}2$.
  ---
  Summe: $1 + 1{,}2 + 1{,}2 = 3{,}4$.
```

Bei vielen Experimenten interessiert nicht das Ergebnis selbst, sondern eine **Zahl**, die davon
abhängt. Beim Würfelspiel ist es der Gewinn in Euro. Bei einer Lieferung ist es die Anzahl defekter Teile.
In diesem Abschnitt lernst du, solche Zahlen zu beschreiben und ihren „Durchschnitt auf lange Sicht“ zu berechnen.

### Zufallsvariable und Wahrscheinlichkeitsverteilung

**Worum geht es?** Eine **Zufallsvariable** ist eine Regel, die jedem Ergebnis eines Zufallsexperiments
eine Zahl zuordnet. Man schreibt sie mit Großbuchstaben, meist $X$, $Y$ oder $G$.

:::beispiel[Zwei Münzen und die Anzahl Kopf]
Zwei Münzen werden geworfen. Die Ergebnisse sind $KK$, $KZ$, $ZK$ und $ZZ$, alle gleich wahrscheinlich.
$X$ sei die **Anzahl Kopf**. Dann ordnet $X$ zu: $KK \mapsto 2$, $KZ \mapsto 1$, $ZK \mapsto 1$, $ZZ \mapsto 0$.
Der Pfeil $\mapsto$ heißt „wird abgebildet auf“.

Die Wahrscheinlichkeiten der Werte heißen zusammen die **Verteilung** von $X$:

|$x$|$0$|$1$|$2$|
|---|---|---|---|
|$P(X = x)$|$\tfrac14$|$\tfrac24$|$\tfrac14$|

Der Wert $1$ hat $\tfrac24$, weil er auf zwei Arten entsteht. Zusammen ergeben die Wahrscheinlichkeiten $1$.
:::

**Nicht-Beispiel:** „Die Farbe der gezogenen Kugel“ ist keine Zufallsvariable. Eine Farbe ist keine Zahl.
Erst wenn du festlegst „rot zählt 1, blau zählt 0“, wird daraus eine Zufallsvariable.

:::definition[Zufallsvariable und Verteilung]
Eine **Zufallsvariable** $X$ ordnet jedem Ergebnis $\omega$ (sprich „omega“) des Ergebnisraums $\Omega$
eine reelle Zahl $X(\omega)$ zu. Sie heißt **diskret**, wenn sie nur endlich viele oder abzählbar viele
Werte $x_1, x_2, \dots$ annehmen kann. „Abzählbar“ heißt: Man kann die Werte wie $1, 2, 3, \dots$ der Reihe
nach durchnummerieren, auch wenn die Liste nie endet.

Die **Wahrscheinlichkeitsverteilung** von $X$ gibt zu jedem Wert $x_i$ die Wahrscheinlichkeit $p_i = P(X = x_i)$ an.
Dabei gilt immer $p_1 + p_2 + \ldots = 1$.

Die **Verteilungsfunktion** ist $F(x) = P(X \le x)$. Sie gibt an, wie wahrscheinlich ein Wert **höchstens** $x$ ist.
:::

Der Name täuscht: Eine Zufallsvariable ist keine Unbekannte wie in einer Gleichung. Sie ist eine
**Funktion** im Sinn von [Kapitel 4, Was ist eine Funktion?](/lernen/mathe3/funktionen/was-ist-eine-funktion), also eine Zuordnung. Bei den zwei Münzen
ist zum Beispiel $F(1) = P(X \le 1) = \tfrac14 + \tfrac24 = \tfrac34$.

```plot
x: [-0.8, 2.8]
y: [0, 0.6]
achsen: { x: "x = Anzahl Kopf", y: "P(X = x)" }
balken:
  - { x: 0, y: 0.25 }
  - { x: 1, y: 0.5, farbe: 1 }
  - { x: 2, y: 0.25 }
beschriftung: Säulendiagramm der Verteilung von X = Anzahl Kopf bei zwei Münzwürfen. Der Wert 1 hat mit 0,5 die höchste Säule, die Werte 0 und 2 je 0,25.
```

### Der Erwartungswert: der Durchschnitt auf lange Sicht

Stell dir vor, du wirfst die zwei Münzen $1000$-mal und schreibst jedes Mal $X$ auf. Etwa $250$-mal
steht dort $0$, etwa $500$-mal $1$ und etwa $250$-mal $2$. Der Durchschnitt aller $1000$ Zahlen ist dann ungefähr
$$\frac{250 \cdot 0 + 500 \cdot 1 + 250 \cdot 2}{1000} = 0 \cdot \tfrac14 + 1 \cdot \tfrac24 + 2 \cdot \tfrac14 = 1.$$
Man multipliziert also jeden Wert mit seiner Wahrscheinlichkeit und addiert. Das ist ein **gewichteter Mittelwert**.

:::definition[Erwartungswert]
Eine diskrete Zufallsvariable $X$ nehme die Werte $x_1, \dots, x_n$ mit den Wahrscheinlichkeiten $p_1, \dots, p_n$ an.
Ihr **Erwartungswert** ist
$$\mu = E(X) = \sum_{i=1}^{n} x_i \cdot p_i = x_1 p_1 + x_2 p_2 + \ldots + x_n p_n.$$
Dabei ist $\mu$ der griechische Buchstabe „my“. $E$ steht für „Erwartung“.
:::

Nach dem Gesetz der großen Zahlen liegt der Durchschnitt vieler unabhängiger Wiederholungen nahe bei $E(X)$.
Der Erwartungswert ist also der **langfristige Mittelwert**, nicht der Wert, den man beim nächsten Versuch erwartet.

:::beispiel[Ein Würfel]
$X$ sei die Augenzahl eines fairen Würfels. Jede Zahl hat die Wahrscheinlichkeit $\tfrac16$.
$$E(X) = 1 \cdot \tfrac16 + 2 \cdot \tfrac16 + \ldots + 6 \cdot \tfrac16 = \tfrac{21}{6} = 3{,}5.$$
Der Erwartungswert muss also kein möglicher Wert sein. Kein Würfel zeigt $3{,}5$. Aber der Durchschnitt
vieler Würfe liegt nahe bei $3{,}5$.
:::

:::beispiel[Ist das Spiel fair?]
Bei einem Würfelspiel zahlst du $1{,}50$ Euro Einsatz. Bei einer Sechs bekommst du $6$ Euro ausbezahlt, bei
einer Fünf $3$ Euro, sonst nichts. Der **Reingewinn** $G$ ist Auszahlung minus Einsatz:

|$g$ in Euro|$4{,}5$|$1{,}5$|$-1{,}5$|
|---|---|---|---|
|$P(G = g)$|$\tfrac16$|$\tfrac16$|$\tfrac46$|

$$E(G) = 4{,}5 \cdot \tfrac16 + 1{,}5 \cdot \tfrac16 + (-1{,}5) \cdot \tfrac46 = 0{,}75 + 0{,}25 - 1 = 0.$$
Ein Spiel mit erwartetem Reingewinn $0$ heißt **fair**. Auf lange Sicht gewinnt weder die Spielerin noch die
Bank. Bei Casinospielen ist $E(G) < 0$ für die Spielenden. Davon lebt das Casino.
:::

:::achtung[Erwartungswert mit dem wahrscheinlichsten Wert verwechselt]
Eine typische falsche Überlegung lautet: „Beim Würfel erwarte ich $3{,}5$. Also werfe ich beim nächsten Wurf am
wahrscheinlichsten eine 3 oder 4.“ Das ist **falsch**. Jede Augenzahl hat $\tfrac16$, also ist $P(X = 3) = P(X = 1) = \tfrac16$.
Der Erwartungswert sagt nichts über den nächsten Versuch. Er beschreibt nur den Durchschnitt über sehr viele Versuche.
:::

:::achtung[Den Einsatz vergessen]
Im Spiel oben ist der erwartete Gewinn gesucht. Eine typische falsche Rechnung:
$$E = 6 \cdot \tfrac16 + 3 \cdot \tfrac16 = 1{,}5 \text{ Euro Gewinn.} \qquad \text{(falsch)}$$
Das ist die erwartete **Auszahlung**. Der Einsatz von $1{,}50$ Euro ist bei jedem Spiel weg. Der erwartete
Reingewinn ist $1{,}5 - 1{,}5 = 0$ Euro. Schreib bei Spielen immer zuerst auf, ob $X$ Auszahlung oder Gewinn bedeutet.
:::

```aufgabe
id: wk-zv-verteilung-gefuehrt
titel: Rote Kugeln zählen
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  In einer Urne liegen 2 rote und 3 blaue Kugeln. Du ziehst zwei Kugeln ohne Zurücklegen. $X$ sei die Anzahl der roten Kugeln.
  Stelle die Verteilung von $X$ auf und berechne $E(X)$.
teile:
  - typ: zahl
    label: '$P(X = 1)$'
    loesung: "2*(2/5*3/4)"
    anzeige: '0{,}6'
    fehler:
      - wert: "2/5*3/4"
        meldung: Das ist nur der Pfad „erst rot, dann blau“. Auch „erst blau, dann rot“ ergibt genau eine rote Kugel.
  - typ: zahl
    label: '$E(X)$'
    loesung: "0*0.3 + 1*0.6 + 2*0.1"
    anzeige: '0{,}8'
    fehler:
      - wert: "1"
        meldung: Du hast den einfachen Mittelwert der Werte $0$, $1$, $2$ gebildet. Jeder Wert muss mit seiner Wahrscheinlichkeit gewichtet werden.
hinweise:
  - 'Zeichne einen Baum mit zwei Stufen. $X$ kann $0$, $1$ oder $2$ sein.'
gefuehrt:
  - text: Wie groß ist $P(X = 0)$, also „beide blau“?
    teil: { typ: zahl, loesung: "3/5*2/4" }
    erklaerung: $\tfrac35 \cdot \tfrac24 = \tfrac{6}{20} = 0{,}3$.
  - text: Wie groß ist $P(X = 2)$, also „beide rot“?
    teil: { typ: zahl, loesung: "2/5*1/4" }
    erklaerung: $\tfrac25 \cdot \tfrac14 = \tfrac{2}{20} = 0{,}1$.
  - text: Wie groß ist $P(X = 1)$? Tipp – die Summe aller Wahrscheinlichkeiten ist 1.
    teil: { typ: zahl, loesung: "1 - 0.3 - 0.1" }
    erklaerung: $1 - 0{,}3 - 0{,}1 = 0{,}6$. Zur Kontrolle über die Pfade $rb$ und $br$ – $2 \cdot \tfrac25 \cdot \tfrac34 = 0{,}6$.
  - text: Berechne den Erwartungswert.
    teil: { typ: zahl, loesung: "0*0.3 + 1*0.6 + 2*0.1" }
    erklaerung: $0 \cdot 0{,}3 + 1 \cdot 0{,}6 + 2 \cdot 0{,}1 = 0{,}8$.
loesung: |
  **Ansatz:** Verteilung über den Baum (ohne Zurücklegen), danach Erwartungswert als gewichteter Mittelwert.
  ---
  $P(X = 0) = \tfrac35 \cdot \tfrac24 = 0{,}3$, $P(X = 2) = \tfrac25 \cdot \tfrac14 = 0{,}1$, $P(X = 1) = 2 \cdot \tfrac25 \cdot \tfrac34 = 0{,}6$. Summe $1$.
  ---
  $E(X) = 0 \cdot 0{,}3 + 1 \cdot 0{,}6 + 2 \cdot 0{,}1 = 0{,}8$.
  Plausibel: $40\,\%$ der Kugeln sind rot, und von zwei gezogenen Kugeln erwartet man im Mittel $2 \cdot 0{,}4 = 0{,}8$ rote.
```

```aufgabe
id: wk-zv-erwartung-rad
titel: Glücksrad mit drei Feldern
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Ein Glücksrad zahlt mit Wahrscheinlichkeit $\tfrac12$ nichts, mit Wahrscheinlichkeit $\tfrac13$ zwei Euro und mit
  Wahrscheinlichkeit $\tfrac16$ fünf Euro aus. Berechne die erwartete Auszahlung $E(X)$ in Euro.
teile:
  - typ: zahl
    loesung: "0*1/2 + 2*1/3 + 5*1/6"
    einheit: Euro
    anzeige: '1{,}5'
    fehler:
      - wert: "7/3"
        meldung: Du hast die drei Beträge einfach gemittelt. Der Betrag $0$ kommt aber viel häufiger vor als $5$ Euro. Gewichte mit den Wahrscheinlichkeiten.
hinweise:
  - 'Jeden Betrag mit seiner Wahrscheinlichkeit multiplizieren und addieren.'
loesung: |
  **Ansatz:** Erwartungswert als gewichteter Mittelwert.
  ---
  $E(X) = 0 \cdot \tfrac12 + 2 \cdot \tfrac13 + 5 \cdot \tfrac16 = \tfrac46 + \tfrac56 = \tfrac96 = 1{,}5$ Euro.
  ---
  Deutung: Über viele Drehungen zahlt das Rad im Durchschnitt $1{,}50$ Euro pro Drehung aus.
```

### Der Erwartungswert einer Summe

Oft setzt sich eine Zufallsvariable aus mehreren Teilen zusammen. Dann hilft eine sehr praktische Regel.

:::satz[Erwartungswert von Summen]
Für zwei Zufallsvariablen $X$ und $Y$ gilt **immer**
$$E(X + Y) = E(X) + E(Y).$$
Das gilt auch für mehr als zwei Summanden. Unabhängigkeit wird dafür **nicht** gebraucht.
:::

Warum? Der Erwartungswert ist ein langfristiger Durchschnitt. Notierst du bei jedem Versuch $X$ und $Y$
und addierst, dann ist der Durchschnitt der Summen gleich der Summe der Durchschnitte.

:::beispiel[Augensumme ohne Verteilung]
Zwei Würfel werden geworfen. Die Augensumme ist $S = X_1 + X_2$, wobei $X_1$ und $X_2$ die beiden Augenzahlen sind.
Ohne die Verteilung von $S$ zu kennen, folgt sofort
$$E(S) = E(X_1) + E(X_2) = 3{,}5 + 3{,}5 = 7.$$
Das passt zum Säulendiagramm in [16.2 Laplace-Wahrscheinlichkeit und relative Häufigkeit](/lernen/mathe3/wahrscheinlichkeit/laplace-wahrscheinlichkeit-und-relative-haeufigkeit): Die Verteilung der Augensumme ist symmetrisch um $7$.

**Zählen mit Summen.** Wie viele Sechsen erwartest du bei $10$ Würfen? Setze $Y_i = 1$, wenn der $i$-te
Wurf eine Sechs ist, und sonst $Y_i = 0$. Jedes $Y_i$ hat $E(Y_i) = 1 \cdot \tfrac16 + 0 \cdot \tfrac56 = \tfrac16$.
Die Anzahl der Sechsen ist $Y_1 + \ldots + Y_{10}$, also ist ihr Erwartungswert $10 \cdot \tfrac16 = \tfrac53 \approx 1{,}67$.
Diesen Trick verwenden wir wieder bei der Binomialverteilung.
:::

:::merke[Erwartungswert berechnen]
1. Werte von $X$ und ihre Wahrscheinlichkeiten in eine Tabelle schreiben.
2. Kontrolle: Die Wahrscheinlichkeiten ergeben zusammen $1$.
3. Jeden Wert mit seiner Wahrscheinlichkeit multiplizieren und alles addieren.
4. Bei Summen: $E(X + Y) = E(X) + E(Y)$ spart oft die ganze Verteilung.

Ein Spiel ist **fair**, wenn der erwartete Reingewinn $0$ ist. Gleichwertig: Der Einsatz ist gleich der erwarteten Auszahlung.
:::

```aufgabe
id: wk-zv-gluecksrad
titel: Fairer Einsatz
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Bei einem Glücksrad gewinnt man mit Wahrscheinlichkeit $0{,}05$ den Betrag $10$ Euro, mit Wahrscheinlichkeit $0{,}2$ den Betrag
  $2$ Euro, sonst nichts.
  a) Wie hoch muss der Einsatz sein, damit das Spiel fair ist?
  b) Der Einsatz beträgt $1$ Euro. Welchen Reingewinn erwartet der Betreiber bei $1000$ Spielen?
teile:
  - typ: zahl
    label: 'a) fairer Einsatz'
    einheit: Euro
    loesung: "10*0.05 + 2*0.2"
    anzeige: '0{,}9'
    fehler:
      - wert: "6"
        meldung: Du hast die Beträge gemittelt. Gewichte jeden Betrag mit seiner Wahrscheinlichkeit.
  - typ: zahl
    label: 'b) erwarteter Gewinn des Betreibers'
    einheit: Euro
    loesung: "1000*(1 - (10*0.05 + 2*0.2))"
    anzeige: '100'
    fehler:
      - wert: "900"
        meldung: Das ist die erwartete **Auszahlung** in 1000 Spielen. Der Betreiber nimmt aber $1000$ Euro Einsatz ein. Sein Gewinn ist die Differenz.
hinweise:
  - Fair heißt, der Einsatz ist gleich der erwarteten Auszahlung.
  - 'Für b): Pro Spiel nimmt der Betreiber $1$ Euro ein und zahlt im Mittel $0{,}90$ Euro aus.'
loesung: |
  **Ansatz:** Erwartete Auszahlung berechnen und mit dem Einsatz vergleichen.
  ---
  Erwartete Auszahlung: $10 \cdot 0{,}05 + 2 \cdot 0{,}2 + 0 \cdot 0{,}75 = 0{,}5 + 0{,}4 = 0{,}9$ Euro.
  ---
  a) Fair ist das Spiel bei einem Einsatz von $0{,}90$ Euro.
  ---
  b) Pro Spiel verdient der Betreiber im Mittel $1 - 0{,}9 = 0{,}1$ Euro, bei $1000$ Spielen also etwa $100$ Euro.
```

```aufgabe
id: wk-zv-fair-umkehr
titel: Die faire Auszahlung finden
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Ein Würfelspiel kostet $2$ Euro Einsatz. Bei einer Fünf bekommt man $3$ Euro ausbezahlt, bei einer Sechs $a$ Euro, sonst nichts.
  Wie groß muss $a$ sein, damit das Spiel fair ist?
teile:
  - typ: zahl
    loesung: "6*(2 - 3/6)"
    einheit: Euro
    anzeige: '9'
    fehler:
      - wert: "12"
        meldung: Du hast die Fünf vergessen. Auch sie trägt zur erwarteten Auszahlung bei, nämlich $3 \cdot \tfrac16 = 0{,}5$ Euro.
      - wert: "2"
        meldung: Der Einsatz wird nicht bei jedem Wurf zurückgezahlt. Die Auszahlung $a$ gibt es nur mit Wahrscheinlichkeit $\tfrac16$.
hinweise:
  - 'Fair heißt: erwartete Auszahlung = Einsatz.'
  - 'Stelle die Gleichung $3 \cdot \tfrac16 + a \cdot \tfrac16 = 2$ auf und löse nach $a$.'
loesung: |
  **Ansatz:** Fair bedeutet: Die erwartete Auszahlung ist gleich dem Einsatz von $2$ Euro.
  ---
  $E(\text{Auszahlung}) = 3 \cdot \tfrac16 + a \cdot \tfrac16 = \tfrac{3 + a}{6}$.
  ---
  $\tfrac{3 + a}{6} = 2$. Wir multiplizieren mit $6$: $3 + a = 12$, also $a = 9$ Euro.
  ---
  Probe: $3 \cdot \tfrac16 + 9 \cdot \tfrac16 = 0{,}5 + 1{,}5 = 2$ Euro.
```

```aufgabe
id: wk-zv-summe
titel: Raten mit Minuspunkten
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  Ein Test hat 20 Fragen mit je 5 Antwortmöglichkeiten, von denen genau eine richtig ist. Eine richtige Antwort bringt $+1$ Punkt,
  eine falsche $-\tfrac14$ Punkt. Jemand rät bei allen Fragen.
  a) Berechne den Erwartungswert der Punkte für **eine** Frage.
  b) Berechne den Erwartungswert der Gesamtpunkte.
  c) Lohnt sich Raten? Begründe.
teile:
  - typ: zahl
    label: 'a) eine Frage'
    loesung: "1*1/5 + (-1/4)*4/5"
    anzeige: '0'
    fehler:
      - wert: "0.2"
        meldung: Du hast die Minuspunkte vergessen. Mit Wahrscheinlichkeit $\tfrac45$ ist die Antwort falsch und kostet $\tfrac14$ Punkt.
  - typ: zahl
    label: 'b) 20 Fragen'
    loesung: "20*(1*1/5 + (-1/4)*4/5)"
    anzeige: '0'
    fehler:
      - wert: "4"
        meldung: Das wären die erwarteten Punkte ohne Abzug, $20 \cdot \tfrac15$. Rechne mit dem Erwartungswert pro Frage aus a).
  - typ: text
    label: 'c) Begründung'
    muster: |
      Pro Frage ist der Erwartungswert $\tfrac15 \cdot 1 + \tfrac45 \cdot \left(-\tfrac14\right) = 0$. Nach der Summenregel ist der
      Erwartungswert der Gesamtpunkte $20 \cdot 0 = 0$. Reines Raten bringt auf lange Sicht also nichts, schadet aber auch nicht.
      Kann man eine falsche Antwort ausschließen, steigt die Trefferwahrscheinlichkeit auf $\tfrac14$, und der Erwartungswert wird positiv.
hinweise:
  - 'Für eine Frage gibt es zwei Werte: $+1$ mit Wahrscheinlichkeit $\tfrac15$ und $-\tfrac14$ mit Wahrscheinlichkeit $\tfrac45$.'
  - 'Die Gesamtpunkte sind die Summe der Punkte der 20 Fragen. Nutze $E(X_1 + \ldots + X_{20}) = E(X_1) + \ldots + E(X_{20})$.'
loesung: |
  **Ansatz:** Für jede Frage eine eigene Zufallsvariable, danach die Summenregel für Erwartungswerte.
  ---
  a) $E(X_1) = 1 \cdot \tfrac15 + \left(-\tfrac14\right) \cdot \tfrac45 = \tfrac15 - \tfrac15 = 0$.
  ---
  b) $E(X_1 + \ldots + X_{20}) = 20 \cdot 0 = 0$.
  ---
  c) Die Minuspunkte sind genau so gewählt, dass reines Raten im Mittel $0$ Punkte bringt. Wer eine Antwort sicher ausschließen
  kann, hat $\tfrac14$ Trefferchance und erwartet $\tfrac14 - \tfrac34 \cdot \tfrac14 = \tfrac{1}{16} > 0$ Punkte pro Frage.
```

```reflexion
frage: Ein Freund sagt „Der Erwartungswert beim Würfeln ist $3{,}5$, also ist das Spiel unfair, denn $3{,}5$ kann ich nie werfen“. Was missversteht er?
antwort: |
  Er hält den Erwartungswert für ein mögliches oder typisches Einzelergebnis. Der Erwartungswert ist aber ein gewichteter
  Mittelwert über sehr viele Versuche. Bei vielen Würfen liegt der Durchschnitt der Augenzahlen nahe bei $3{,}5$, auch wenn kein
  einzelner Wurf $3{,}5$ zeigt. Mit Fairness hat das nichts zu tun. Fair ist ein Spiel, wenn der erwartete Reingewinn $0$ ist.
```

```aufgabe
id: wk-zv-pooling
titel: Proben gemeinsam testen
niveau: 3
lernziel: 5
kompetenz: modellieren
angabe: |
  Ein Labor soll Blutproben von 10 Personen auf eine Infektion testen. Jede Person ist unabhängig von den anderen mit
  Wahrscheinlichkeit $0{,}02$ infiziert. Statt 10 Einzeltests mischt das Labor zuerst alle 10 Proben und testet die Mischung.
  Ist sie negativ, sind alle gesund, und es bleibt bei 1 Test. Ist sie positiv, werden zusätzlich alle 10 Proben einzeln getestet.
  a) Mit welcher Wahrscheinlichkeit ist die Mischung negativ? (4 Nachkommastellen)
  b) Wie viele Tests erwartet das Labor für die 10 Personen? (2 Nachkommastellen)
  c) Wie viele Tests spart das Verfahren im Mittel gegenüber 10 Einzeltests? (2 Nachkommastellen)
teile:
  - typ: zahl
    label: 'a) Mischung negativ'
    loesung: "0.98^10"
    toleranz: 0.0005
    anzeige: '0{,}8171'
  - typ: zahl
    label: 'b) erwartete Anzahl Tests'
    loesung: "1*0.98^10 + 11*(1 - 0.98^10)"
    toleranz: 0.01
    anzeige: '2{,}83'
  - typ: zahl
    label: 'c) Ersparnis'
    loesung: "10 - (1*0.98^10 + 11*(1 - 0.98^10))"
    toleranz: 0.01
    anzeige: '7{,}17'
hinweise:
  - 'Die Mischung ist negativ, wenn alle 10 Personen gesund sind. Die Personen sind unabhängig.'
  - 'Die Anzahl der Tests $T$ hat nur zwei Werte: $1$ (Mischung negativ) und $11$ (Mischung positiv). Berechne $E(T)$ als gewichteten Mittelwert.'
loesung: |
  **Ansatz:** Die Anzahl der Tests $T$ ist eine Zufallsvariable mit zwei Werten. Wir brauchen ihre Verteilung.
  ---
  a) Alle 10 gesund: $0{,}98^{10} \approx 0{,}8171$.
  ---
  b) $P(T = 1) \approx 0{,}8171$ und $P(T = 11) \approx 1 - 0{,}8171 = 0{,}1829$.
  $E(T) = 1 \cdot 0{,}8171 + 11 \cdot 0{,}1829 \approx 2{,}83$ Tests.
  ---
  c) $10 - 2{,}83 = 7{,}17$ Tests werden im Mittel gespart, also über $70\,\%$.
  ---
  Deutung: Bei seltenen Infektionen ist das Mischen von Proben (englisch „pooling“) sehr effizient. Bei häufigen Infektionen wäre die
  Mischung fast immer positiv, und das Verfahren würde sich nicht lohnen.
```

## Varianz und Standardabweichung: wie stark der Zufall streut

```aufgabe
id: wk-var-check-quadrat
titel: Quadrate negativer Zahlen
niveau: 1
art: check
angabe: |
  Berechne $(-3)^2 \cdot 0{,}5 + 3^2 \cdot 0{,}5$.
  (Wiederholung: [Kapitel 1, Abschnitt „Potenzen und Wurzeln“](/lernen/mathe3/zahlen/potenzen-und-wurzeln))
teile:
  - typ: zahl
    loesung: "(-3)^2*0.5 + 3^2*0.5"
    anzeige: '9'
    fehler:
      - wert: "0"
        meldung: '$(-3)^2$ ist $(-3) \cdot (-3) = +9$, nicht $-9$. Das Quadrat einer negativen Zahl ist positiv.'
loesung: |
  $(-3)^2 = 9$ und $3^2 = 9$.
  ---
  $9 \cdot 0{,}5 + 9 \cdot 0{,}5 = 9$.
```

**Worum geht es?** Der Erwartungswert sagt, wo der Zufall im Mittel landet. Er sagt aber nichts darüber,
**wie weit** einzelne Ergebnisse davon abweichen. Dafür gibt es die Varianz und die Standardabweichung.

:::beispiel[Zwei Spiele mit gleichem Erwartungswert]
Spiel A: Du gewinnst oder verlierst $1$ Euro, jeweils mit Wahrscheinlichkeit $\tfrac12$.
Spiel B: Du gewinnst oder verlierst $100$ Euro, jeweils mit Wahrscheinlichkeit $\tfrac12$.

Beide Spiele haben den Erwartungswert $0$. Trotzdem fühlt sich Spiel B ganz anders an. Die Ergebnisse
liegen viel weiter vom Erwartungswert entfernt. Das **Risiko** ist größer. Wir brauchen eine Zahl, die
diesen Unterschied misst.
:::

### Warum man Abweichungen quadriert

Die erste Idee: Man nimmt die Abweichungen $x_i - \mu$ vom Erwartungswert und bildet ihren gewichteten
Mittelwert. Das funktioniert nicht. Positive und negative Abweichungen heben sich auf, und es kommt
**immer** $0$ heraus. In Spiel B: $(100 - 0) \cdot \tfrac12 + (-100 - 0) \cdot \tfrac12 = 0$.

Deshalb **quadriert** man die Abweichungen zuerst. Quadrate sind nie negativ, also kann sich nichts mehr
aufheben. Große Abweichungen zählen dabei besonders stark. Weil die Quadrate eine andere Einheit haben
(zum Beispiel „Euro zum Quadrat“), zieht man am Ende die Wurzel.

:::definition[Varianz und Standardabweichung]
Eine diskrete Zufallsvariable $X$ habe die Werte $x_i$ mit den Wahrscheinlichkeiten $p_i$ und den Erwartungswert $\mu$.
Die **Varianz** ist der gewichtete Mittelwert der quadrierten Abweichungen:
$$V(X) = \sigma^2 = \sum_i (x_i - \mu)^2 \cdot p_i.$$
Die **Standardabweichung** ist $\sigma = \sqrt{V(X)}$. Dabei ist $\sigma$ der griechische Buchstabe „sigma“.
Die Standardabweichung hat dieselbe Einheit wie $X$ und beschreibt die **typische Abweichung** vom Erwartungswert.
:::

Für die beiden Spiele: In Spiel A ist $V = 1^2 \cdot \tfrac12 + (-1)^2 \cdot \tfrac12 = 1$, also $\sigma = 1$ Euro.
In Spiel B ist $V = 100^2 \cdot \tfrac12 + (-100)^2 \cdot \tfrac12 = 10\,000$, also $\sigma = 100$ Euro. Genau
diesen Unterschied wollten wir messen. **Nicht-Beispiel:** Eine Zufallsvariable, die sicher immer den
Wert $5$ hat, streut gar nicht. Ihre Varianz ist $0$.

```plot
x: [-3.5, 3.5]
y: [0, 0.6]
achsen: { x: "Wert", y: "Wahrscheinlichkeit" }
balken:
  - { x: -1, y: 0.25, farbe: 0 }
  - { x: 0, y: 0.5, farbe: 0 }
  - { x: 1, y: 0.25, farbe: 0 }
  - { x: -3, y: 0.5, farbe: 1 }
  - { x: 3, y: 0.5, farbe: 1 }
beschriftung: "Zwei Verteilungen mit demselben Erwartungswert 0. Blau sind die Werte −1, 0 und 1 mit den Wahrscheinlichkeiten 0,25, 0,5 und 0,25 (Standardabweichung etwa 0,71). Orange sind die Werte −3 und 3 mit je 0,5 (Standardabweichung 3). Die orange Verteilung streut viel weiter."
```

:::beispiel[Varianz beim Würfel]
$X$ sei die Augenzahl, $\mu = 3{,}5$. Die Abweichungen sind $-2{,}5$, $-1{,}5$, $-0{,}5$, $0{,}5$, $1{,}5$ und $2{,}5$.
Jede hat die Wahrscheinlichkeit $\tfrac16$.
$$V(X) = \tfrac16 \big[(-2{,}5)^2 + (-1{,}5)^2 + (-0{,}5)^2 + 0{,}5^2 + 1{,}5^2 + 2{,}5^2\big] = \tfrac16 \cdot 17{,}5 = \tfrac{35}{12} \approx 2{,}917.$$
Also ist $\sigma = \sqrt{35/12} \approx 1{,}708$. Ein Wurf weicht typischerweise um etwa $1{,}7$ Augen von $3{,}5$ ab.
:::

### Der Verschiebungssatz: schneller rechnen

Die Abweichungen $x_i - \mu$ sind oft krumme Zahlen. Mit dem folgenden Satz rechnet man mit den Werten selbst.

:::satz[Verschiebungssatz]
$$V(X) = E(X^2) - \big(E(X)\big)^2 = \sum_i x_i^2 \, p_i - \mu^2.$$
In Worten: „Mittelwert der Quadrate minus Quadrat des Mittelwerts“.
:::

:::beweis
Wir multiplizieren das Quadrat aus: $(x_i - \mu)^2 = x_i^2 - 2\mu x_i + \mu^2$ (zweite binomische Formel). Dann teilen wir die
Summe in drei Summen auf:
$$V(X) = \sum_i x_i^2 p_i - 2\mu \sum_i x_i p_i + \mu^2 \sum_i p_i.$$
Die mittlere Summe ist $E(X) = \mu$, die letzte ist $1$. Also $V(X) = E(X^2) - 2\mu^2 + \mu^2 = E(X^2) - \mu^2$.
:::

Kontrolle am Würfel: $E(X^2) = \tfrac16(1 + 4 + 9 + 16 + 25 + 36) = \tfrac{91}{6}$. Also
$V(X) = \tfrac{91}{6} - 3{,}5^2 = \tfrac{91}{6} - \tfrac{49}{4} = \tfrac{182 - 147}{12} = \tfrac{35}{12}$. Das stimmt mit oben überein.

:::achtung[Quadrat vergessen]
Eine typische falsche Rechnung für die Varianz beim Würfel:
$$V(X) = \tfrac16\big[(-2{,}5) + (-1{,}5) + (-0{,}5) + 0{,}5 + 1{,}5 + 2{,}5\big] = 0. \qquad \text{(falsch)}$$
Ohne Quadrate heben sich die Abweichungen immer auf. Diese Summe ist für **jede** Zufallsvariable $0$.
Richtig ist $\tfrac16 \cdot 17{,}5 = \tfrac{35}{12}$. Ein Ergebnis $V = 0$ ist nur möglich, wenn $X$ gar nicht streut.
:::

:::achtung[E(X) statt E(X²) im Verschiebungssatz]
Für $X$ mit den Werten $0$, $1$, $2$ und $P = 0{,}3;\ 0{,}6;\ 0{,}1$ ist $\mu = 0{,}8$. Eine typische falsche Rechnung:
$$V(X) = E(X) - \mu^2 = 0{,}8 - 0{,}64 = 0{,}16. \qquad \text{(falsch)}$$
Hier wurde $E(X)$ statt $E(X^2)$ verwendet. Richtig ist $E(X^2) = 0 \cdot 0{,}3 + 1 \cdot 0{,}6 + 4 \cdot 0{,}1 = 1$, also
$V(X) = 1 - 0{,}64 = 0{,}36$. Eine Varianz ist nie negativ. Kommt doch etwas Negatives heraus, liegt ein Rechenfehler vor.
:::

```aufgabe
id: wk-zv-varianz-gefuehrt
titel: Varianz Schritt für Schritt
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  $X$ nimmt die Werte $-1$, $0$ und $2$ mit den Wahrscheinlichkeiten $0{,}2$, $0{,}5$ und $0{,}3$ an.
  Berechne $E(X)$, $V(X)$ und $\sigma$ (auf 4 Nachkommastellen).
teile:
  - typ: zahl
    label: '$E(X)$'
    loesung: "(-1)*0.2 + 0*0.5 + 2*0.3"
    anzeige: '0{,}4'
    fehler:
      - wert: "0.8"
        meldung: Das Vorzeichen bei $-1$ ging verloren. $(-1) \cdot 0{,}2 = -0{,}2$.
  - typ: zahl
    label: '$V(X)$'
    loesung: "(1*0.2 + 0*0.5 + 4*0.3) - 0.4^2"
    anzeige: '1{,}24'
    fehler:
      - wert: "1.4"
        meldung: Das ist $E(X^2)$. Beim Verschiebungssatz musst du noch $\mu^2$ abziehen.
      - wert: "1.4 - 0.4"
        meldung: Du hast $\mu$ statt $\mu^2$ abgezogen. Der Verschiebungssatz lautet $V(X) = E(X^2) - \mu^2$.
  - typ: zahl
    label: '$\sigma$'
    loesung: "sqrt((1*0.2 + 0*0.5 + 4*0.3) - 0.4^2)"
    toleranz: 0.0005
    anzeige: '1{,}1136'
    fehler:
      - wert: "1.24"
        meldung: Das ist die Varianz. Die Standardabweichung ist ihre Wurzel.
hinweise:
  - 'Zuerst $E(X)$, dann $E(X^2) = \sum x_i^2 p_i$, dann der Verschiebungssatz.'
gefuehrt:
  - text: Berechne $E(X)$.
    teil: { typ: zahl, loesung: "(-1)*0.2 + 0*0.5 + 2*0.3" }
    erklaerung: $-0{,}2 + 0 + 0{,}6 = 0{,}4$.
  - text: Berechne $E(X^2)$. Quadriere dazu jeden Wert und gewichte ihn.
    teil: { typ: zahl, loesung: "1*0.2 + 0*0.5 + 4*0.3" }
    erklaerung: $(-1)^2 \cdot 0{,}2 + 0^2 \cdot 0{,}5 + 2^2 \cdot 0{,}3 = 0{,}2 + 0 + 1{,}2 = 1{,}4$.
  - text: Berechne $V(X)$ mit dem Verschiebungssatz.
    teil: { typ: zahl, loesung: "1.4 - 0.4^2" }
    erklaerung: $1{,}4 - 0{,}16 = 1{,}24$.
  - text: Berechne $\sigma$.
    teil: { typ: zahl, loesung: "sqrt(1.24)", toleranz: 0.0005 }
    erklaerung: $\sqrt{1{,}24} \approx 1{,}1136$.
loesung: |
  **Ansatz:** Erwartungswert, dann Verschiebungssatz $V(X) = E(X^2) - \mu^2$, dann Wurzel.
  ---
  $E(X) = -0{,}2 + 0 + 0{,}6 = 0{,}4$ und $E(X^2) = 0{,}2 + 0 + 1{,}2 = 1{,}4$.
  ---
  $V(X) = 1{,}4 - 0{,}4^2 = 1{,}24$ und $\sigma = \sqrt{1{,}24} \approx 1{,}1136$.
```

### Lineare Transformationen und Summen

Was passiert mit Erwartungswert und Streuung, wenn man alle Werte verschiebt oder streckt? Ein Beispiel:
$X$ sei die Punktezahl bei einem Quiz. Für die Gesamtwertung zählt jeder Punkt doppelt, und alle bekommen
einen Bonuspunkt dazu. Die Wertung ist also $Y = 2X + 1$.

:::satz[Lineare Transformation]
Für reelle Zahlen $a$ und $b$ gilt
$$E(aX + b) = a\,E(X) + b, \qquad V(aX + b) = a^2\, V(X), \qquad \sigma(aX + b) = |a|\,\sigma(X).$$
:::

Warum? Eine **Verschiebung** um $b$ verschiebt alle Werte und den Mittelwert gleich weit. Die Abstände
zum Mittelwert ändern sich nicht, also bleibt die Streuung gleich. Eine **Streckung** um den Faktor $a$
streckt alle Abstände um $a$. Ihre Quadrate wachsen deshalb um $a^2$. Die Betragsstriche bei $|a|$ sorgen
dafür, dass $\sigma$ auch bei negativem $a$ positiv bleibt.

:::beispiel[Temperatur umrechnen]
Die Mittagstemperatur $X$ in Grad Celsius habe $E(X) = 20$ und $\sigma(X) = 5$. In Grad Fahrenheit ist
$Y = 1{,}8X + 32$. Dann gilt
$$E(Y) = 1{,}8 \cdot 20 + 32 = 68, \qquad \sigma(Y) = 1{,}8 \cdot 5 = 9, \qquad V(Y) = 1{,}8^2 \cdot 25 = 81.$$
Die $+32$ verschiebt nur und ändert die Streuung nicht.
:::

:::satz[Varianz einer Summe unabhängiger Zufallsvariablen]
Sind $X$ und $Y$ **unabhängig**, so gilt $V(X + Y) = V(X) + V(Y)$.
:::

Anders als beim Erwartungswert braucht man hier die Unabhängigkeit. Den Beweis lassen wir weg. Beispiel: Die
Augensumme zweier Würfel hat $V = \tfrac{35}{12} + \tfrac{35}{12} = \tfrac{35}{6} \approx 5{,}83$. Die
Standardabweichungen addieren sich dagegen **nicht**: $\sigma = \sqrt{35/6} \approx 2{,}42$ und nicht $2 \cdot 1{,}71$.

:::merke[Streuung berechnen]
1. $\mu = E(X)$ berechnen.
2. $E(X^2) = \sum x_i^2 p_i$ berechnen.
3. $V(X) = E(X^2) - \mu^2$. Ergebnis muss $\ge 0$ sein.
4. $\sigma = \sqrt{V(X)}$, mit derselben Einheit wie $X$.

Bei $aX + b$: Erwartungswert mittransformieren, Varianz mal $a^2$, Standardabweichung mal $|a|$.
:::

```aufgabe
id: wk-zv-kennzahlen
titel: Kennzahlen einer Verteilung
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Eine Zufallsvariable $X$ hat folgende Verteilung:

  |$x$|0|1|2|3|
  |---|---|---|---|---|
  |$P(X = x)$|$0{,}1$|$0{,}3$|$0{,}4$|$0{,}2$|

  Berechne $E(X)$, $V(X)$ und $\sigma$.
teile:
  - typ: zahl
    label: '$E(X)$'
    loesung: "0*0.1 + 1*0.3 + 2*0.4 + 3*0.2"
    anzeige: '1{,}7'
    fehler:
      - wert: "1.5"
        meldung: Du hast den einfachen Mittelwert der Werte $0$ bis $3$ gebildet. Gewichte jeden Wert mit seiner Wahrscheinlichkeit.
  - typ: zahl
    label: '$V(X)$'
    loesung: "(0*0.1 + 1*0.3 + 4*0.4 + 9*0.2) - 1.7^2"
    anzeige: '0{,}81'
    fehler:
      - wert: "3.7"
        meldung: Das ist $E(X^2)$. Ziehe noch $\mu^2 = 1{,}7^2$ ab.
  - typ: zahl
    label: '$\sigma$'
    loesung: "sqrt((0*0.1 + 1*0.3 + 4*0.4 + 9*0.2) - 1.7^2)"
    anzeige: '0{,}9'
    fehler:
      - wert: "0.81"
        meldung: Das ist die Varianz. Die Standardabweichung ist ihre Wurzel.
hinweise:
  - 'Verschiebungssatz: $V(X) = E(X^2) - \mu^2$.'
loesung: |
  **Ansatz:** Erwartungswert als gewichteter Mittelwert, Varianz mit dem Verschiebungssatz.
  ---
  $E(X) = 0 \cdot 0{,}1 + 1 \cdot 0{,}3 + 2 \cdot 0{,}4 + 3 \cdot 0{,}2 = 0{,}3 + 0{,}8 + 0{,}6 = 1{,}7$.
  ---
  $E(X^2) = 0 + 1 \cdot 0{,}3 + 4 \cdot 0{,}4 + 9 \cdot 0{,}2 = 0{,}3 + 1{,}6 + 1{,}8 = 3{,}7$.
  ---
  $V(X) = 3{,}7 - 1{,}7^2 = 3{,}7 - 2{,}89 = 0{,}81$, also $\sigma = \sqrt{0{,}81} = 0{,}9$.
```

```aufgabe
id: wk-zv-transformation
titel: Lineare Transformation
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Für eine Zufallsvariable gilt $E(X) = 4$ und $V(X) = 2{,}25$. Es sei $Y = 3X - 5$.
  Berechne $E(Y)$, $V(Y)$ und $\sigma(Y)$.
teile:
  - typ: zahl
    label: '$E(Y)$'
    loesung: "3*4 - 5"
    fehler:
      - wert: "12"
        meldung: Die Verschiebung um $-5$ wirkt auch auf den Erwartungswert.
  - typ: zahl
    label: '$V(Y)$'
    loesung: "9*2.25"
    anzeige: '20{,}25'
    fehler:
      - wert: "3*2.25"
        meldung: Der Faktor geht **quadratisch** in die Varianz ein, denn alle Abweichungen werden mit $3$ gestreckt und dann quadriert.
      - wert: "9*2.25 - 5"
        meldung: Eine Verschiebung ändert die Streuung nicht. Die $-5$ hat in der Varianz nichts verloren.
  - typ: zahl
    label: '$\sigma(Y)$'
    loesung: "3*sqrt(2.25)"
    anzeige: '4{,}5'
    fehler:
      - wert: "9*1.5"
        meldung: Die Standardabweichung wird nur mit $|a| = 3$ multipliziert, nicht mit $a^2$.
hinweise:
  - 'Die Konstante $-5$ verschiebt nur. Der Faktor $3$ geht quadratisch in die Varianz ein.'
  - 'Für $\sigma(Y)$ entweder die Wurzel aus $V(Y)$ ziehen oder $\sigma(X) = 1{,}5$ mit $3$ multiplizieren.'
loesung: |
  **Ansatz:** Regeln für lineare Transformationen mit $a = 3$ und $b = -5$.
  ---
  $E(Y) = 3 \cdot 4 - 5 = 7$.
  ---
  $V(Y) = 3^2 \cdot 2{,}25 = 20{,}25$. Die $-5$ ändert die Streuung nicht.
  ---
  $\sigma(Y) = \sqrt{20{,}25} = 4{,}5$. Kontrolle: $3 \cdot \sigma(X) = 3 \cdot 1{,}5 = 4{,}5$.
```

```aufgabe
id: wk-zv-risiko
titel: Zwei Anlagen vergleichen
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  Anlage A bringt mit Wahrscheinlichkeit $0{,}5$ einen Gewinn von $100$ Euro und mit Wahrscheinlichkeit $0{,}5$ einen Verlust von $50$ Euro.
  Anlage B bringt mit Wahrscheinlichkeit $0{,}8$ einen Gewinn von $35$ Euro und mit Wahrscheinlichkeit $0{,}2$ einen Verlust von $15$ Euro.
  a) Berechne beide Erwartungswerte. b) Berechne beide Standardabweichungen. c) Welche Anlage ist riskanter? Begründe kurz.
teile:
  - typ: zahl
    label: 'a) $E(A)$ in Euro'
    loesung: "100*0.5 + (-50)*0.5"
    fehler:
      - wert: "75"
        meldung: Der Verlust zählt negativ. $-50 \cdot 0{,}5 = -25$.
  - typ: zahl
    label: 'a) $E(B)$ in Euro'
    loesung: "35*0.8 + (-15)*0.2"
    fehler:
      - wert: "31"
        meldung: Der Verlust zählt negativ. $-15 \cdot 0{,}2 = -3$.
  - typ: zahl
    label: 'b) $\sigma(A)$ in Euro'
    loesung: "sqrt((100-25)^2*0.5 + (-50-25)^2*0.5)"
    fehler:
      - wert: "5625"
        meldung: Das ist die Varianz. Die Standardabweichung ist ihre Wurzel.
  - typ: zahl
    label: 'b) $\sigma(B)$ in Euro'
    loesung: "sqrt((35-25)^2*0.8 + (-15-25)^2*0.2)"
    fehler:
      - wert: "400"
        meldung: Das ist die Varianz. Die Standardabweichung ist ihre Wurzel.
  - typ: text
    label: 'c) Begründung'
    muster: |
      Beide Anlagen haben denselben Erwartungswert von $25$ Euro. Anlage A streut aber mit $\sigma = 75$ Euro viel stärker als
      Anlage B mit $\sigma = 20$ Euro. Bei A weicht das Ergebnis typischerweise um $75$ Euro vom Mittel ab, also ist A riskanter.
hinweise:
  - 'Beide Erwartungswerte sind gleich. Rechne sie trotzdem aus, du brauchst sie für die Varianz.'
  - 'Varianz: $\sum (x_i - \mu)^2 p_i$. Bei A sind die Abweichungen $75$ und $-75$.'
loesung: |
  **Ansatz:** Erwartungswert und Standardabweichung für beide Anlagen. Die Standardabweichung misst das Risiko.
  ---
  a) $E(A) = 50 - 25 = 25$ Euro und $E(B) = 28 - 3 = 25$ Euro.
  ---
  b) $V(A) = 75^2 \cdot 0{,}5 + (-75)^2 \cdot 0{,}5 = 5625$, also $\sigma(A) = 75$ Euro.
  $V(B) = 10^2 \cdot 0{,}8 + (-40)^2 \cdot 0{,}2 = 80 + 320 = 400$, also $\sigma(B) = 20$ Euro.
  ---
  c) Gleicher Erwartungswert, aber A streut fast viermal so stark. A ist riskanter.
```

```aufgabe
id: wk-zv-summe-varianz
titel: Zwei Würfel zusammen
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Ein roter und ein blauer Würfel werden geworfen. $S$ ist die Augensumme. Für einen Würfel gilt $E = 3{,}5$ und $V = \tfrac{35}{12}$.
  Berechne $E(S)$, $V(S)$ und $\sigma(S)$ (auf 2 Nachkommastellen).
teile:
  - typ: zahl
    label: '$E(S)$'
    loesung: "3.5 + 3.5"
    fehler:
      - wert: "3.5"
        meldung: Das ist der Erwartungswert **eines** Würfels. Bei der Summe addieren sich die Erwartungswerte.
  - typ: zahl
    label: '$V(S)$'
    loesung: "35/12 + 35/12"
    toleranz: 0.01
    anzeige: '\tfrac{35}{6} \approx 5{,}83'
    fehler:
      - wert: "4*35/12"
        meldung: Das wäre die Varianz von $2X$, also eines Würfels, dessen Augenzahl verdoppelt wird. Zwei **unabhängige** Würfel addieren nur ihre Varianzen.
  - typ: zahl
    label: '$\sigma(S)$'
    loesung: "sqrt(35/6)"
    toleranz: 0.01
    anzeige: '2{,}42'
    fehler:
      - wert: "2*sqrt(35/12)"
        meldung: Standardabweichungen addieren sich nicht. Addiere die Varianzen und zieh danach die Wurzel.
hinweise:
  - 'Erwartungswerte addieren sich immer.'
  - 'Die Würfel sind unabhängig, also addieren sich auch die Varianzen. Erst danach die Wurzel ziehen.'
loesung: |
  **Ansatz:** Summenregeln. Die beiden Würfel beeinflussen sich nicht, sie sind unabhängig.
  ---
  $E(S) = 3{,}5 + 3{,}5 = 7$.
  ---
  $V(S) = \tfrac{35}{12} + \tfrac{35}{12} = \tfrac{35}{6} \approx 5{,}83$.
  ---
  $\sigma(S) = \sqrt{35/6} \approx 2{,}42$. Das ist weniger als $2 \cdot 1{,}71 = 3{,}42$. Bei zwei Würfeln gleichen sich Ausreißer teilweise aus.
```

```reflexion
frage: Warum ist die Varianz einer verschobenen Zufallsvariablen $X + 10$ genauso groß wie die von $X$, ihr Erwartungswert aber um $10$ größer?
antwort: |
  Wenn man zu jedem Wert $10$ addiert, rückt die ganze Verteilung um $10$ nach rechts. Der Mittelwert rückt mit, also wächst
  $E$ um $10$. Die Abstände der Werte zum Mittelwert bleiben aber genau gleich: Jeder Wert und der Mittelwert sind um dieselben $10$
  verschoben. Varianz und Standardabweichung messen nur diese Abstände. Deshalb ändern sie sich nicht.
```

```aufgabe
id: wk-zv-umkehr
titel: Werte aus Kennzahlen zurückrechnen
niveau: 3
lernziel: 5
kompetenz: anwenden
angabe: |
  Eine Zufallsvariable $X$ nimmt nur die Werte $0$ und $a$ an, mit $a > 0$. Es gilt $P(X = a) = p$. Bekannt sind $E(X) = 2$ und $V(X) = 6$.
  Berechne $a$ und $p$.
teile:
  - typ: zahl
    label: '$a$'
    loesung: "(6 + 2^2)/2"
    fehler:
      - wert: "3"
        meldung: Du hast vermutlich $a^2 p = V(X)$ gesetzt. Nach dem Verschiebungssatz ist aber $E(X^2) = V(X) + \mu^2 = 6 + 4$.
  - typ: zahl
    label: '$p$'
    loesung: "2/((6 + 2^2)/2)"
    anzeige: '0{,}4'
    fehler:
      - wert: "2/3"
        meldung: Das folgt aus dem falschen Wert $a = 3$. Prüfe zuerst $E(X^2) = V(X) + \mu^2$.
hinweise:
  - 'Schreib $E(X)$ und $E(X^2)$ mit $a$ und $p$ auf. Der Wert $0$ trägt zu beiden Summen nichts bei.'
  - 'Aus dem Verschiebungssatz folgt $E(X^2) = V(X) + \mu^2 = 10$. Teile die Gleichung $a^2 p = 10$ durch $a p = 2$.'
loesung: |
  **Ansatz:** Zwei Unbekannte, zwei Gleichungen. Die eine kommt aus $E(X)$, die andere aus dem Verschiebungssatz.
  ---
  $E(X) = 0 \cdot (1 - p) + a \cdot p = ap = 2$.
  ---
  $E(X^2) = a^2 p$. Verschiebungssatz umgestellt: $E(X^2) = V(X) + \mu^2 = 6 + 4 = 10$. Also $a^2 p = 10$.
  ---
  Wir teilen $a^2 p = 10$ durch $ap = 2$: Es bleibt $a = 5$. Dann ist $p = \tfrac{2}{5} = 0{,}4$.
  ---
  Probe: $E(X) = 5 \cdot 0{,}4 = 2$ und $V(X) = 25 \cdot 0{,}4 - 4 = 6$.
```

## Bernoulli-Kette und Binomialverteilung

```aufgabe
id: wk-binom-check-koeffizient
titel: Binomialkoeffizient
niveau: 1
art: check
angabe: |
  Berechne $\binom{5}{2}$. (Wiederholung: [16.4 Zählen ohne Reihenfolge: Kombinationen und Binomialkoeffizient](/lernen/mathe3/wahrscheinlichkeit/zaehlen-ohne-reihenfolge-kombinationen-und-binomialkoeffizient))
teile:
  - typ: zahl
    loesung: "binom(5, 2)"
    fehler:
      - wert: "20"
        meldung: '$5 \cdot 4 = 20$ zählt geordnet. Für $\binom52$ teilst du noch durch $2! = 2$.'
loesung: |
  Kürzen: $\binom52 = \frac{5 \cdot 4}{2 \cdot 1}$.
  ---
  $\frac{20}{2} = 10$.
```

Jetzt kommt eines der wichtigsten Modelle für die schriftliche Prüfung. Viele Situationen haben dieselbe Struktur:
Ein Versuch mit nur zwei interessierenden Ausgängen wird mehrmals **gleich und unabhängig** wiederholt,
und man **zählt die Erfolge**. Zwölf Fragen raten, zehnmal würfeln, zwanzig Bauteile prüfen: Immer
steckt dieselbe Formel dahinter.

### Bernoulli-Experiment und Bernoulli-Kette

:::definition[Bernoulli-Experiment und Bernoulli-Kette]
Ein Zufallsexperiment mit genau zwei Ausgängen heißt **Bernoulli-Experiment**. Den einen Ausgang nennt man
**Treffer** (oder Erfolg), er hat die Wahrscheinlichkeit $p$. Den anderen nennt man **Niete**, er hat die
Wahrscheinlichkeit $1 - p$.

Wird ein Bernoulli-Experiment $n$-mal **unabhängig** und **mit gleichbleibendem $p$** wiederholt, heißt das
eine **Bernoulli-Kette** der Länge $n$. Benannt ist sie nach dem Schweizer Mathematiker Jakob Bernoulli.
:::

„Treffer“ ist nur ein Name für den Ausgang, den man zählt. Er muss nichts Gutes sein. Zählst du defekte
Bauteile, dann ist „defekt“ der Treffer.

**Beispiele für Bernoulli-Ketten:**

- Zehn Würfe mit einem Würfel, Treffer ist „Sechs“, also $n = 10$ und $p = \tfrac16$.
- Zwanzig Chips aus der laufenden Produktion, Treffer ist „defekt“, zum Beispiel $p = 0{,}04$.
- Zehn Multiple-Choice-Fragen mit je drei Antworten raten, Treffer ist „richtig“, also $p = \tfrac13$.

**Nicht-Beispiele:**

- Fünf Kugeln **ohne Zurücklegen** aus einer kleinen Urne ziehen. Nach jedem Zug ändert sich $p$.
- Würfeln, **bis** die erste Sechs fällt. Die Anzahl $n$ der Versuche steht nicht vorher fest.
- Bei jeder Klausurfrage steigt die Nervosität, und die Fehler werden häufiger. Die Versuche sind nicht unabhängig.

### Die Formel, zuerst an einem kleinen Beispiel

:::beispiel[Zwei Sechsen in drei Würfen]
Ein Würfel wird dreimal geworfen. Wie wahrscheinlich sind **genau zwei** Sechsen? Wir schreiben $T$ für
Sechs (Treffer, $p = \tfrac16$) und $N$ für keine Sechs (Niete, $\tfrac56$).

**Schritt 1: Welche Pfade gehören dazu?** Genau zwei $T$ und ein $N$: $TTN$, $TNT$ und $NTT$. Das sind 3 Pfade.

**Schritt 2: Wie wahrscheinlich ist ein Pfad?** Die Würfe sind unabhängig, also multiplizieren wir:
$$P(TTN) = \tfrac16 \cdot \tfrac16 \cdot \tfrac56 = \left(\tfrac16\right)^2 \cdot \tfrac56 = \tfrac{5}{216}.$$
Die anderen beiden Pfade enthalten dieselben Faktoren in anderer Reihenfolge. Sie haben also dieselbe Wahrscheinlichkeit.

**Schritt 3: Pfade addieren.** $P(X = 2) = 3 \cdot \tfrac{5}{216} = \tfrac{15}{216} \approx 0{,}0694$.

Die Zahl $3$ beantwortet die Frage: „An welchen 2 der 3 Stellen stehen die Treffer?“ Das ist eine Auswahl
ohne Reihenfolge, also $\binom32 = 3$.
:::

Dieselben drei Schritte funktionieren für jedes $n$ und jedes $k$. Ein Pfad mit $k$ Treffern und $n - k$
Nieten hat immer die Wahrscheinlichkeit $p^k (1 - p)^{n-k}$. Die Anzahl solcher Pfade ist $\binom{n}{k}$.

:::satz[Binomialverteilung]
Es sei $X$ die Anzahl der Treffer in einer Bernoulli-Kette der Länge $n$ mit Trefferwahrscheinlichkeit $p$.
Dann gilt für $k = 0, 1, \dots, n$
$$P(X = k) = \binom{n}{k} \cdot p^k \cdot (1 - p)^{n - k}.$$
Man nennt $X$ **binomialverteilt** mit den Parametern $n$ und $p$ und schreibt kurz $X \sim B(n;\, p)$.
Das Zeichen $\sim$ liest man „ist verteilt nach“.
:::

:::beweis
Ein Ergebnis der Kette ist eine Folge aus $n$ Zeichen $T$ oder $N$. Eine bestimmte Folge mit genau $k$-mal $T$
und $(n - k)$-mal $N$ hat wegen der Unabhängigkeit die Wahrscheinlichkeit $p^k (1 - p)^{n-k}$, egal wo die $T$ stehen.
Wie viele solche Folgen gibt es? Man wählt die $k$ Trefferstellen aus den $n$ Stellen aus, ohne Reihenfolge.
Das geht auf $\binom{n}{k}$ Arten. Die Folgen sind unvereinbar, also addiert man: $\binom{n}{k} p^k (1-p)^{n-k}$.
:::

Daher kommt auch der Name: Nach dem binomischen Lehrsatz ist die Summe aller dieser Wahrscheinlichkeiten
$\sum_k \binom{n}{k} p^k (1-p)^{n-k} = \big(p + (1 - p)\big)^n = 1^n = 1$, wie es sein muss.

:::beispiel[Werbung anklicken]
$20\,\%$ der Besucherinnen einer Webseite klicken auf eine Anzeige, unabhängig voneinander. Sechs Personen
besuchen die Seite. $X$ sei die Anzahl der Klicks, also $X \sim B(6;\, 0{,}2)$. Wie wahrscheinlich sind genau 2 Klicks?
$$P(X = 2) = \binom62 \cdot 0{,}2^2 \cdot 0{,}8^4 = 15 \cdot 0{,}04 \cdot 0{,}4096 \approx 0{,}2458.$$
Dabei ist $\binom62 = 15$ die Anzahl der Möglichkeiten, welche 2 der 6 Personen klicken. Die Hochzahl von
$0{,}8$ ist $6 - 2 = 4$, denn 4 Personen klicken nicht.
:::

:::achtung[Den Binomialkoeffizienten vergessen]
Für „genau zwei Sechsen in drei Würfen“ lautet eine typische falsche Rechnung:
$$P(X = 2) = \left(\tfrac16\right)^2 \cdot \tfrac56 = \tfrac{5}{216} \approx 0{,}023. \qquad \text{(falsch)}$$
Das ist nur **ein** Pfad, nämlich $TTN$. Die Treffer können aber auch an anderen Stellen stehen. Es fehlt der Faktor $\binom32 = 3$.
Richtig ist $\tfrac{15}{216} \approx 0{,}069$.
:::

:::achtung[Falsche Hochzahl bei der Niete]
Beim Werbe-Beispiel lautet eine typische falsche Rechnung:
$$P(X = 2) = \binom62 \cdot 0{,}2^2 \cdot 0{,}8^6 \approx 0{,}157. \qquad \text{(falsch)}$$
Die Hochzahl der Niete ist die Anzahl der **Nieten**, also $n - k = 4$, nicht $n = 6$. Kontrolle: Die beiden
Hochzahlen müssen zusammen $n$ ergeben, hier $2 + 4 = 6$.
:::

### Erwartungswert und Standardabweichung

:::satz[Kennzahlen der Binomialverteilung]
Für $X \sim B(n;\, p)$ gilt
$$E(X) = n \cdot p, \qquad V(X) = n \cdot p \cdot (1 - p), \qquad \sigma = \sqrt{n \cdot p \cdot (1 - p)}.$$
:::

:::beweis
Wir schreiben $X$ als Summe $X = X_1 + X_2 + \ldots + X_n$. Dabei ist $X_i = 1$, wenn der $i$-te Versuch ein Treffer ist,
und sonst $X_i = 0$. Jedes $X_i$ hat $E(X_i) = 1 \cdot p + 0 \cdot (1 - p) = p$. Mit dem Verschiebungssatz ist
$V(X_i) = E(X_i^2) - p^2 = p - p^2 = p(1 - p)$, denn $X_i^2 = X_i$. Erwartungswerte von Summen addieren sich immer,
also $E(X) = np$. Die $X_i$ sind unabhängig, also addieren sich auch die Varianzen: $V(X) = np(1 - p)$.
:::

Das Ergebnis $E(X) = np$ ist genau das, was man erwartet: Bei 600 Würfen erwartet man
$600 \cdot \tfrac16 = 100$ Sechsen. Beim Werbe-Beispiel ist $E(X) = 6 \cdot 0{,}2 = 1{,}2$ Klicks und
$\sigma = \sqrt{6 \cdot 0{,}2 \cdot 0{,}8} \approx 0{,}98$.

```plot
x: [-1, 11]
y: [0, 0.3]
achsen: { x: "k (Anzahl der Treffer)", y: "P(X = k)" }
balken:
  - { x: 0, y: "binompdf(10, 0.3, 0)" }
  - { x: 1, y: "binompdf(10, 0.3, 1)" }
  - { x: 2, y: "binompdf(10, 0.3, 2)" }
  - { x: 3, y: "binompdf(10, 0.3, 3)", farbe: 1 }
  - { x: 4, y: "binompdf(10, 0.3, 4)" }
  - { x: 5, y: "binompdf(10, 0.3, 5)" }
  - { x: 6, y: "binompdf(10, 0.3, 6)" }
  - { x: 7, y: "binompdf(10, 0.3, 7)" }
  - { x: 8, y: "binompdf(10, 0.3, 8)" }
  - { x: 9, y: "binompdf(10, 0.3, 9)" }
  - { x: 10, y: "binompdf(10, 0.3, 10)" }
beschriftung: "Verteilung von X ~ B(10; 0,3). Der höchste Balken liegt bei k = 3, also beim Erwartungswert np = 3. Rechts davon fallen die Balken schnell ab, ab k = 8 sind sie kaum noch sichtbar."
```

```aufgabe
id: wk-binom-check-widget
titel: Vorhersage vor dem Ausprobieren
niveau: 1
art: check
angabe: |
  Im Widget unten ist $n = 10$ und $p = 0{,}3$ eingestellt. Was passiert mit dem höchsten Balken, wenn du $p$ auf $0{,}6$ erhöhst?
teile:
  - typ: auswahl
    optionen:
      - 'Er wandert nach rechts, ungefähr zu $k = 6$.'
      - 'Er bleibt bei $k = 3$ und wird nur höher.'
      - 'Er wandert nach links.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Der höchste Balken liegt in der Nähe von $np$. Wenn $p$ sich verdoppelt, verdoppelt sich auch $np$.
      - wert: 2
        meldung: Mit größerem $p$ gibt es im Mittel **mehr** Treffer. Der Schwerpunkt der Verteilung rückt nach rechts.
loesung: |
  Der höchste Balken liegt in der Nähe des Erwartungswerts $np$.
  ---
  Bei $p = 0{,}6$ ist $np = 6$. Der Balken wandert also nach rechts zu $k = 6$. Probier es im Widget aus.
```

```widget
name: binomial
titel: Binomialverteilung erkunden
props:
  n: 10
  p: 0.3
  bereich: [2, 4]
```

Verändere im Widget $n$ und $p$ und beobachte. Der höchste Balken liegt immer in der Nähe von $np$. Für
$p = 0{,}5$ ist die Verteilung symmetrisch, für kleine $p$ hat sie rechts einen langen Ausläufer. Mit wachsendem
$n$ wird sie breiter, denn $\sigma$ wächst wie $\sqrt n$. Gleichzeitig wird sie immer glockenförmiger. Das ist die
Grundlage der Normalapproximation am Ende des Kapitels.

:::merke[Binomialaufgaben lösen]
1. **Modell prüfen und aufschreiben:** „$X$ = Anzahl der …, $X \sim B(n;\, p)$ mit $n = \dots$ und $p = \dots$, weil die Versuche unabhängig sind, zwei Ausgänge haben und $p$ gleich bleibt.“
2. **Formel:** $P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$. Die Hochzahlen ergeben zusammen $n$.
3. **Kennzahlen:** $E(X) = np$ und $\sigma = \sqrt{np(1-p)}$.
4. **Plausibilität:** Die wahrscheinlichsten Werte liegen in der Nähe von $np$.
:::

```aufgabe
id: wk-binom-genau
titel: Genau zwei Treffer
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Ein Basketballspieler trifft einen Dreipunktewurf mit Wahrscheinlichkeit $0{,}3$, unabhängig von den anderen Würfen.
  Er wirft fünfmal. Mit welcher Wahrscheinlichkeit trifft er genau zweimal? (4 Nachkommastellen)
teile:
  - typ: zahl
    label: '$P(X = 2)$'
    loesung: "binompdf(5, 0.3, 2)"
    toleranz: 0.0005
    anzeige: '0{,}3087'
    fehler:
      - wert: "0.3^2*0.7^3"
        meldung: Das ist nur ein einzelner Pfad, etwa „Treffer, Treffer, dann drei Fehlwürfe“. Es fehlt der Faktor $\binom52$ für die Lage der Treffer.
      - wert: "binom(5, 2)*0.3^2*0.7^5"
        meldung: Die Hochzahl bei $0{,}7$ ist die Anzahl der Fehlwürfe, also $5 - 2 = 3$.
hinweise:
  - '$X$ = Anzahl der Treffer, $X \sim B(5;\, 0{,}3)$.'
gefuehrt:
  - text: Auf wie viele Arten können die 2 Treffer auf die 5 Würfe verteilt sein?
    teil: { typ: zahl, loesung: "binom(5, 2)" }
    erklaerung: $\binom52 = 10$.
  - text: Wie wahrscheinlich ist ein einzelner Pfad mit 2 Treffern und 3 Fehlwürfen?
    teil: { typ: zahl, loesung: "0.3^2*0.7^3", toleranz: 0.0001 }
    erklaerung: $0{,}3^2 \cdot 0{,}7^3 = 0{,}09 \cdot 0{,}343 = 0{,}03087$.
  - text: Wie groß ist $P(X = 2)$?
    teil: { typ: zahl, loesung: "binompdf(5, 0.3, 2)", toleranz: 0.0005 }
    erklaerung: $10 \cdot 0{,}03087 = 0{,}3087$.
loesung: |
  **Ansatz:** Bernoulli-Kette mit $n = 5$ und $p = 0{,}3$, denn die Würfe sind unabhängig und die Trefferquote bleibt gleich.
  ---
  $P(X = 2) = \binom52 \cdot 0{,}3^2 \cdot 0{,}7^3 = 10 \cdot 0{,}09 \cdot 0{,}343 = 0{,}3087$.
  ---
  Plausibel: $np = 1{,}5$. Die Werte 1 und 2 sind die wahrscheinlichsten.
```

```aufgabe
id: wk-binom-kennzahlen
titel: Erwartungswert und Streuung
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  In einer großen Lieferung sind $20\,\%$ der Teile fehlerhaft. Es werden 50 Teile zufällig entnommen.
  $X$ sei die Anzahl fehlerhafter Teile. Berechne $E(X)$ und $\sigma$ (2 Nachkommastellen).
teile:
  - typ: zahl
    label: '$E(X)$'
    loesung: "50*0.2"
    fehler:
      - wert: "0.2"
        meldung: '$0{,}2$ ist die Wahrscheinlichkeit für **ein** Teil. Bei 50 Teilen erwartest du $50$-mal so viele fehlerhafte.'
  - typ: zahl
    label: '$\sigma$'
    loesung: "sqrt(50*0.2*0.8)"
    toleranz: 0.005
    anzeige: '2\sqrt{2} \approx 2{,}83'
    fehler:
      - wert: "8"
        meldung: Das ist die Varianz $np(1-p)$. Die Standardabweichung ist ihre Wurzel.
      - wert: "sqrt(50*0.2)"
        meldung: Unter der Wurzel fehlt der Faktor $1 - p = 0{,}8$.
hinweise:
  - 'Bei einer großen Lieferung ändert die Entnahme $p$ kaum. Rechne binomial mit $n = 50$ und $p = 0{,}2$.'
loesung: |
  **Ansatz:** $X \sim B(50;\, 0{,}2)$. Die Lieferung ist groß, eine Entnahme ändert den Anteil praktisch nicht.
  ---
  $E(X) = np = 50 \cdot 0{,}2 = 10$.
  ---
  $\sigma = \sqrt{np(1-p)} = \sqrt{50 \cdot 0{,}2 \cdot 0{,}8} = \sqrt{8} \approx 2{,}83$. Typisch sind also etwa 7 bis 13 fehlerhafte Teile.
```

```aufgabe
id: wk-binom-erkennen
titel: Welche Situation passt nicht?
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  Welche der folgenden Zufallsgrößen ist **nicht** binomialverteilt?
teile:
  - typ: auswahl
    optionen:
      - 'Anzahl der Sechsen bei 8 Würfen eines fairen Würfels'
      - 'Anzahl der Würfe, bis zum ersten Mal eine Sechs fällt'
      - 'Anzahl der richtigen Antworten, wenn man 10 Fragen mit je 3 Möglichkeiten rät'
      - 'Anzahl der defekten Teile unter 30 Teilen aus einer sehr großen Produktion mit $2\,\%$ Ausschuss'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Das ist eine Bernoulli-Kette: 8 unabhängige Würfe, Treffer „Sechs“ mit $p = \tfrac16$.'
      - wert: 2
        meldung: 'Das ist eine Bernoulli-Kette: 10 unabhängige Fragen, Treffer „richtig“ mit $p = \tfrac13$.'
      - wert: 3
        meldung: Bei einer sehr großen Produktion ändert die Entnahme von 30 Teilen den Ausschussanteil praktisch nicht. Man rechnet binomial mit $n = 30$, $p = 0{,}02$.
hinweise:
  - 'Prüfe bei jeder Situation: Steht die Anzahl $n$ der Versuche vorher fest? Bleibt $p$ gleich? Sind die Versuche unabhängig?'
loesung: |
  Eine Binomialverteilung braucht eine **feste** Anzahl $n$ von Versuchen.
  ---
  Bei „Würfe bis zur ersten Sechs“ steht $n$ nicht fest. Man zählt auch nicht Treffer, sondern Versuche. Diese Wartezeit ist geometrisch verteilt, siehe [16.14 Ziehen ohne Zurücklegen und Warten auf den ersten Treffer](/lernen/mathe3/wahrscheinlichkeit/ziehen-ohne-zuruecklegen-und-warten-auf-den-ersten-treffer).
```

```aufgabe
id: wk-binom-tabelle
titel: Eine ganze Verteilung
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  $X \sim B(3;\, 0{,}4)$. Berechne $P(X = 0)$, $P(X = 1)$, $P(X = 2)$ und $P(X = 3)$ auf 3 Nachkommastellen. Prüfe, ob die Summe $1$ ergibt.
teile:
  - typ: zahl
    label: '$P(X = 0)$'
    loesung: "0.6^3"
    toleranz: 0.0005
    anzeige: '0{,}216'
    fehler:
      - wert: "0"
        meldung: Kein Treffer ist möglich, nämlich wenn alle drei Versuche Nieten sind. Das hat die Wahrscheinlichkeit $0{,}6^3$.
  - typ: zahl
    label: '$P(X = 1)$'
    loesung: "binompdf(3, 0.4, 1)"
    toleranz: 0.0005
    anzeige: '0{,}432'
    fehler:
      - wert: "0.4*0.6^2"
        meldung: Das ist nur ein Pfad. Der eine Treffer kann im ersten, zweiten oder dritten Versuch kommen, also mal $\binom31 = 3$.
  - typ: zahl
    label: '$P(X = 2)$'
    loesung: "binompdf(3, 0.4, 2)"
    toleranz: 0.0005
    anzeige: '0{,}288'
    fehler:
      - wert: "0.4^2*0.6"
        meldung: Das ist nur ein Pfad. Es fehlt der Faktor $\binom32 = 3$.
  - typ: zahl
    label: '$P(X = 3)$'
    loesung: "0.4^3"
    toleranz: 0.0005
    anzeige: '0{,}064'
    fehler:
      - wert: "3*0.4^3"
        meldung: Für drei Treffer in drei Versuchen gibt es nur einen Pfad, denn $\binom33 = 1$.
hinweise:
  - 'Für jedes $k$: $\binom3k \cdot 0{,}4^k \cdot 0{,}6^{3-k}$.'
  - 'Die Binomialkoeffizienten für $n = 3$ sind $1, 3, 3, 1$ (Pascalsches Dreieck).'
loesung: |
  **Ansatz:** Binomialformel für jedes $k$ von $0$ bis $3$.
  ---
  $P(X = 0) = 0{,}6^3 = 0{,}216$ und $P(X = 1) = 3 \cdot 0{,}4 \cdot 0{,}36 = 0{,}432$.
  ---
  $P(X = 2) = 3 \cdot 0{,}16 \cdot 0{,}6 = 0{,}288$ und $P(X = 3) = 0{,}4^3 = 0{,}064$.
  ---
  Kontrolle: $0{,}216 + 0{,}432 + 0{,}288 + 0{,}064 = 1$. Der wahrscheinlichste Wert ist $1$, nahe bei $np = 1{,}2$.
```

```aufgabe
id: wk-binom-modell
titel: Ist das binomialverteilt?
niveau: 2
lernziel: 6
kompetenz: begruenden
angabe: |
  In einer Schachtel liegen 20 Glühbirnen, davon 4 defekte. Man entnimmt 5 Glühbirnen ohne Zurücklegen und zählt die defekten.
  Begründe, warum $X$ = „Anzahl defekter Birnen“ nicht binomialverteilt ist. Gib an, wie man die Situation abändern müsste,
  damit das Binomialmodell passt.
teile:
  - typ: text
    muster: |
      Eine Bernoulli-Kette verlangt unabhängige Versuche mit gleichbleibender Trefferwahrscheinlichkeit. Beim Ziehen ohne
      Zurücklegen ändert sich die Wahrscheinlichkeit, eine defekte Birne zu ziehen, nach jedem Zug. Nach einer defekten Birne
      sinkt sie zum Beispiel von $\tfrac{4}{20}$ auf $\tfrac{3}{19}$. Die Züge sind also abhängig, $X$ ist hypergeometrisch verteilt.
      Binomialverteilt wäre $X$ beim Ziehen **mit** Zurücklegen, dann $X \sim B(5;\, 0{,}2)$. Näherungsweise passt das Binomialmodell
      auch, wenn die Gesamtzahl sehr groß gegenüber der Stichprobe ist.
hinweise:
  - Bleibt die Wahrscheinlichkeit für „defekt“ bei jedem Zug gleich?
  - Was ändert sich, wenn man jede Birne nach dem Prüfen zurücklegt?
loesung: |
  **Ansatz:** Wir prüfen die Voraussetzungen einer Bernoulli-Kette: feste Anzahl $n$, zwei Ausgänge, **gleichbleibendes $p$** und **unabhängige Versuche**.
  ---
  Ohne Zurücklegen ändert sich $p$: erster Zug $\tfrac{4}{20}$, nach einer defekten Birne nur noch $\tfrac{3}{19}$. Die Züge sind abhängig.
  ---
  Mit Zurücklegen wäre $X \sim B(5;\, 0{,}2)$. Ohne Zurücklegen ist $X$ hypergeometrisch verteilt, siehe [16.14 Ziehen ohne Zurücklegen und Warten auf den ersten Treffer](/lernen/mathe3/wahrscheinlichkeit/ziehen-ohne-zuruecklegen-und-warten-auf-den-ersten-treffer).
```

```aufgabe
id: wk-binom-umkehr
titel: n und p aus den Kennzahlen
niveau: 3
lernziel: 6
kompetenz: anwenden
angabe: |
  Eine binomialverteilte Zufallsvariable hat den Erwartungswert $6$ und die Standardabweichung $2$. Bestimme $n$ und $p$.
teile:
  - typ: zahl
    label: '$p$'
    loesung: "1 - 4/6"
    anzeige: '\tfrac13'
    fehler:
      - wert: "2/3"
        meldung: 'Zwei häufige Ursachen. Entweder hast du $1 - p$ statt $p$ angegeben, oder du hast $\sigma = 2$ statt $\sigma^2 = 4$ für die Varianz eingesetzt. Es gilt $np(1-p) = 4$.'
  - typ: zahl
    label: '$n$'
    loesung: "6/(1 - 4/6)"
    fehler:
      - wert: "9"
        meldung: Das folgt aus $p = \tfrac23$. Prüfe, ob du $p$ und $1 - p$ vertauscht hast.
hinweise:
  - 'Schreib zwei Gleichungen auf: $np = 6$ und $np(1-p) = 2^2 = 4$.'
  - 'Teile die zweite Gleichung durch die erste. Dann bleibt nur $1 - p$ übrig.'
loesung: |
  **Ansatz:** Die Formeln für die Kennzahlen liefern zwei Gleichungen für die zwei Unbekannten $n$ und $p$.
  ---
  $np = 6$ und $np(1-p) = \sigma^2 = 4$.
  ---
  Zweite durch erste Gleichung: $1 - p = \tfrac46 = \tfrac23$, also $p = \tfrac13$.
  ---
  Einsetzen: $n \cdot \tfrac13 = 6$, also $n = 18$.
  Probe: $E = 18 \cdot \tfrac13 = 6$ und $\sigma = \sqrt{18 \cdot \tfrac13 \cdot \tfrac23} = \sqrt4 = 2$.
```

## Binomialverteilung anwenden: genau, höchstens, mindestens

```aufgabe
id: wk-binom-check-gegen
titel: Das Gegenereignis von „mindestens 3“
niveau: 1
art: check
angabe: |
  $X$ kann die Werte $0, 1, 2, \dots, 10$ annehmen. Welches Ereignis ist das Gegenereignis von $X \ge 3$?
  (Wiederholung: Gegenereignis in [16.1 Zufallsexperimente, Ereignisse und die Grundregeln](/lernen/mathe3/wahrscheinlichkeit/zufallsexperimente-ereignisse-und-die-grundregeln))
teile:
  - typ: auswahl
    optionen:
      - '$X \le 2$'
      - '$X \le 3$'
      - '$X < 2$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die $3$ gehört schon zu „mindestens 3“. Ein Wert darf nicht in beiden Ereignissen liegen.
      - wert: 2
        meldung: Dann fehlt der Wert $2$. Zusammen müssen beide Ereignisse alle Werte von $0$ bis $10$ abdecken.
loesung: |
  „Mindestens 3“ umfasst $3, 4, \dots, 10$.
  ---
  Übrig bleiben $0, 1, 2$, also $X \le 2$.
```

Die Formel kennst du jetzt. Die meisten Fehler bei Binomialaufgaben passieren aber nicht beim Rechnen,
sondern beim **Übersetzen** der Frage. „Mindestens“, „höchstens“, „mehr als“ und „weniger als“ klingen
ähnlich, meinen aber verschiedene Mengen von Werten. In diesem Abschnitt lernst du, sie sicher zu übersetzen.

### Von der Formulierung zur Menge der Werte

Der wichtigste Gedanke: $X$ nimmt nur **ganze Zahlen** an. Deshalb ist „mehr als 4“ dasselbe wie „mindestens 5“.
Schreib dir vor jeder Rechnung die Werte hin, die zum Ereignis gehören. Oft hilft ein Zahlenstrahl von $0$ bis $n$.

:::beispiel[Glücksrad, achtmal gedreht]
Ein Glücksrad bleibt mit Wahrscheinlichkeit $0{,}25$ auf „Gewinn“ stehen. Es wird achtmal unabhängig gedreht.
$X$ sei die Anzahl der Gewinne, also $X \sim B(8;\, 0{,}25)$.

**(i) Genau einmal Gewinn.** Ein Wert, eine Formel:
$$P(X = 1) = \binom81 \cdot 0{,}25 \cdot 0{,}75^7 \approx 0{,}2670.$$

**(ii) Höchstens siebenmal Gewinn.** Das sind die Werte $0, 1, \dots, 7$, also acht Summanden. Das Gegenereignis
hat nur einen Wert, nämlich „achtmal Gewinn“:
$$P(X \le 7) = 1 - P(X = 8) = 1 - 0{,}25^8 \approx 1 - 0{,}0000153 = 0{,}99998.$$

**(iii) Mindestens zweimal und höchstens siebenmal.** Das sind die Werte $2$ bis $7$. Das Gegenereignis sind die
Werte $0$, $1$ und $8$:
$$P(2 \le X \le 7) = 1 - P(X = 0) - P(X = 1) - P(X = 8) \approx 1 - 0{,}1001 - 0{,}2670 - 0{,}0000 = 0{,}6329.$$
Dabei ist $P(X = 0) = 0{,}75^8 \approx 0{,}1001$.
:::

```plot
x: [-1, 11]
y: [0, 0.3]
achsen: { x: "k", y: "P(X = k)" }
balken:
  - { x: 0, y: "binompdf(10, 0.3, 0)" }
  - { x: 1, y: "binompdf(10, 0.3, 1)" }
  - { x: 2, y: "binompdf(10, 0.3, 2)" }
  - { x: 3, y: "binompdf(10, 0.3, 3)" }
  - { x: 4, y: "binompdf(10, 0.3, 4)", farbe: 1 }
  - { x: 5, y: "binompdf(10, 0.3, 5)", farbe: 1 }
  - { x: 6, y: "binompdf(10, 0.3, 6)", farbe: 1 }
  - { x: 7, y: "binompdf(10, 0.3, 7)", farbe: 1 }
  - { x: 8, y: "binompdf(10, 0.3, 8)", farbe: 1 }
  - { x: 9, y: "binompdf(10, 0.3, 9)", farbe: 1 }
  - { x: 10, y: "binompdf(10, 0.3, 10)", farbe: 1 }
beschriftung: "Das Ereignis „mehr als 3 Treffer“ bei X ~ B(10; 0,3) besteht aus den orangen Balken k = 4 bis 10. Die blauen Balken k = 0 bis 3 bilden das Gegenereignis „höchstens 3“. Weil es weniger Balken sind, rechnet man P(X > 3) = 1 − P(X ≤ 3)."
```

Die Wahrscheinlichkeiten für „höchstens $k$“ heißen **kumulierte** Wahrscheinlichkeiten (von lateinisch
*cumulare*, anhäufen). Man schreibt sie als $P(X \le k) = P(X = 0) + P(X = 1) + \ldots + P(X = k)$.
Im Säulendiagramm sind das alle Balken von links bis einschließlich $k$.

:::beispiel[Defekte Chips]
Ein Hersteller produziert Chips mit $5\,\%$ Ausschuss. Eine Packung enthält 15 Chips aus der laufenden
Produktion. $X$ sei die Anzahl defekter Chips, $X \sim B(15;\, 0{,}05)$.

- **Höchstens einer defekt:** $P(X \le 1) = 0{,}95^{15} + 15 \cdot 0{,}05 \cdot 0{,}95^{14} \approx 0{,}4633 + 0{,}3658 = 0{,}8290$.
- **Mindestens zwei defekt:** Gegenereignis von „höchstens einer“, also $1 - 0{,}8290 = 0{,}1710$.

Die direkte Rechnung für „mindestens zwei“ hätte 14 Summanden gebraucht. Über das Gegenereignis sind es zwei.
:::

:::merke[Formulierungen übersetzen]
|Formulierung|Werte|Rechnung|
|---|---|---|
|genau $k$|$X = k$|$\binom{n}{k}p^k(1-p)^{n-k}$|
|höchstens $k$|$X \le k$|$P(X = 0) + \ldots + P(X = k)$|
|weniger als $k$|$X \le k - 1$|$P(X = 0) + \ldots + P(X = k-1)$|
|mindestens $k$|$X \ge k$|$1 - P(X \le k - 1)$|
|mehr als $k$|$X \ge k + 1$|$1 - P(X \le k)$|
|von $a$ bis $b$|$a \le X \le b$|$P(X \le b) - P(X \le a - 1)$|

**Faustregel:** Summiere immer über die **kürzere** Seite. Wenn das Gegenereignis weniger Werte hat, rechne mit $1 - \ldots$.
:::

:::achtung[Die Grenze ins Gegenereignis mitgenommen]
„Mindestens 3 Treffer“ bei $X \sim B(10;\, 0{,}3)$. Eine typische falsche Rechnung:
$$P(X \ge 3) = 1 - P(X \le 3) \approx 1 - 0{,}6496 = 0{,}3504. \qquad \text{(falsch)}$$
Hier wurde die $3$ abgezogen, obwohl sie zu „mindestens 3“ gehört. Das Gegenereignis von $X \ge 3$ ist
$X \le 2$. Richtig ist $1 - P(X \le 2) \approx 1 - 0{,}3828 = 0{,}6172$.
:::

:::achtung[„Mehr als“ wie „mindestens“ behandelt]
„Mehr als 4 Treffer“ bei $X \sim B(10;\, 0{,}3)$. Eine typische falsche Übersetzung ist $X \ge 4$, also
$$P(X > 4) = 1 - P(X \le 3) \approx 0{,}3504. \qquad \text{(falsch)}$$
„Mehr als 4“ heißt $5, 6, \dots, 10$, also $X \ge 5$. Richtig ist $1 - P(X \le 4) \approx 1 - 0{,}8497 = 0{,}1503$.
Prüfe jede Grenze mit der Frage: „Gehört dieser Wert dazu?“
:::

:::pruefung[So schreibst du eine Binomialaufgabe in der Prüfung auf]
1. **Modell mit Begründung:** „$X$ = Anzahl der defekten Chips. $X \sim B(15;\, 0{,}05)$, weil die 15 Chips unabhängig voneinander mit gleicher Wahrscheinlichkeit defekt sind.“ Diese Zeile zeigt den richtigen Ansatz und kann Punkte bringen, auch wenn später eine Rechnung danebengeht.
2. **Ereignis formal:** Schreib zuerst zum Beispiel $P(X \ge 2) = 1 - P(X \le 1)$ hin, dann erst die Zahlen.
3. **Taschenrechner:** Ein nicht programmierbarer Rechner wie der Casio fx-82 hat meist keine Binomialfunktion. Du rechnest $\binom{n}{k}$ mit der Taste `nCr` und den Rest mit Potenzen. Zwischenergebnisse mit mindestens 4 gültigen Stellen.
4. **Plausibilität:** Liegt jedes Ergebnis zwischen 0 und 1? Liegen die wahrscheinlichsten Werte nahe $np$?
:::

```aufgabe
id: wk-binom-formulierung
titel: Formulierung übersetzen
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  $X \sim B(20;\, 0{,}3)$. Welcher Ausdruck ist gleich $P(\text{mehr als } 6 \text{ Treffer})$?
teile:
  - typ: auswahl
    optionen:
      - '$1 - P(X \le 6)$'
      - '$1 - P(X \le 5)$'
      - '$P(X \le 6)$'
      - '$1 - P(X = 6)$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$1 - P(X \le 5)$ ist $P(X \ge 6)$, also „mindestens 6“. Bei „mehr als 6“ gehört die $6$ nicht dazu.'
      - wert: 2
        meldung: '$P(X \le 6)$ ist „höchstens 6“, das Gegenereignis des Gesuchten.'
      - wert: 3
        meldung: '$1 - P(X = 6)$ ist „nicht genau 6“. Darin stecken auch die Werte $0$ bis $5$.'
hinweise:
  - 'Schreib die Werte auf, die zu „mehr als 6“ gehören. Was ist das Gegenereignis?'
loesung: |
  „Mehr als 6“ heißt $X \ge 7$, also $X \in \{7, 8, \dots, 20\}$.
  ---
  Gegenereignis: $X \le 6$. Daher $P(X > 6) = 1 - P(X \le 6)$.
```

```aufgabe
id: wk-binom-mindestens-gefuehrt
titel: Mindestens zwei Gewinne
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Wir bleiben beim Glücksrad mit Gewinnwahrscheinlichkeit $0{,}25$, aber jetzt wird es **sechsmal** gedreht.
  Mit welcher Wahrscheinlichkeit gewinnt man mindestens zweimal? (4 Nachkommastellen)
teile:
  - typ: zahl
    loesung: "1 - binomcdf(6, 0.25, 1)"
    toleranz: 0.0005
    anzeige: '0{,}4661'
    fehler:
      - wert: "1 - binomcdf(6, 0.25, 2)"
        meldung: Du hast auch $P(X = 2)$ abgezogen. Die $2$ gehört aber zu „mindestens zwei“. Das Gegenereignis ist $X \le 1$.
      - wert: "1 - binompdf(6, 0.25, 0)"
        meldung: Das ist „mindestens einmal“. Für „mindestens zweimal“ musst du auch $P(X = 1)$ abziehen.
hinweise:
  - '$X \sim B(6;\, 0{,}25)$. Das Gegenereignis von „mindestens 2“ ist „höchstens 1“, also $X = 0$ oder $X = 1$.'
gefuehrt:
  - text: Berechne $P(X = 0)$.
    teil: { typ: zahl, loesung: "0.75^6", toleranz: 0.0005 }
    erklaerung: $0{,}75^6 \approx 0{,}1780$.
  - text: Berechne $P(X = 1)$.
    teil: { typ: zahl, loesung: "binompdf(6, 0.25, 1)", toleranz: 0.0005 }
    erklaerung: $6 \cdot 0{,}25 \cdot 0{,}75^5 \approx 0{,}3560$.
  - text: Berechne $P(X \ge 2)$ über das Gegenereignis.
    teil: { typ: zahl, loesung: "1 - binomcdf(6, 0.25, 1)", toleranz: 0.0005 }
    erklaerung: $1 - 0{,}1780 - 0{,}3560 = 0{,}4661$ (mit ungerundeten Zwischenwerten).
loesung: |
  **Ansatz:** $X \sim B(6;\, 0{,}25)$. „Mindestens 2“ hat fünf Werte, das Gegenereignis „höchstens 1“ nur zwei.
  ---
  $P(X = 0) = 0{,}75^6 \approx 0{,}1780$ und $P(X = 1) = 6 \cdot 0{,}25 \cdot 0{,}75^5 \approx 0{,}3560$.
  ---
  $P(X \ge 2) = 1 - P(X \le 1) \approx 1 - 0{,}5339 = 0{,}4661$.
```

```aufgabe
id: wk-binom-chips
titel: Speicherchips in der Packung
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Ein Hersteller produziert Speicherchips mit einer Ausschussquote von $4\,\%$. Eine Packung enthält 20 Chips aus der laufenden
  Produktion. Berechne die Wahrscheinlichkeit, dass a) kein Chip defekt ist, b) höchstens ein Chip defekt ist,
  c) mindestens zwei Chips defekt sind. (4 Nachkommastellen)
teile:
  - typ: zahl
    label: 'a) $P(X = 0)$'
    loesung: "0.96^20"
    toleranz: 0.0005
    anzeige: '0{,}4420'
    fehler:
      - wert: "0.04^20"
        meldung: Das wäre „alle 20 defekt“. Kein Chip defekt heißt, jeder der 20 Chips ist intakt, mit $0{,}96$.
  - typ: zahl
    label: 'b) $P(X \le 1)$'
    loesung: "binomcdf(20, 0.04, 1)"
    toleranz: 0.0005
    anzeige: '0{,}8103'
    fehler:
      - wert: "binompdf(20, 0.04, 1)"
        meldung: Das ist nur „genau einer“. „Höchstens einer“ umfasst auch „keiner“.
  - typ: zahl
    label: 'c) $P(X \ge 2)$'
    loesung: "1 - binomcdf(20, 0.04, 1)"
    toleranz: 0.0005
    anzeige: '0{,}1897'
    fehler:
      - wert: "1 - binomcdf(20, 0.04, 2)"
        meldung: Das Gegenereignis von „mindestens zwei“ ist „höchstens einer“. Die $2$ darfst du nicht abziehen.
hinweise:
  - '$X$ = Anzahl defekter Chips, $X \sim B(20;\, 0{,}04)$.'
  - '„Mindestens zwei“ ist das Gegenereignis von „höchstens eins“. Verwende das Ergebnis aus b).'
loesung: |
  **Ansatz:** $X$ = Anzahl defekter Chips, $X \sim B(20;\, 0{,}04)$, weil die Chips aus der laufenden Produktion unabhängig voneinander defekt sind.
  ---
  a) $P(X = 0) = 0{,}96^{20} \approx 0{,}4420$.
  ---
  b) $P(X = 1) = 20 \cdot 0{,}04 \cdot 0{,}96^{19} \approx 0{,}3683$, also $P(X \le 1) \approx 0{,}4420 + 0{,}3683 = 0{,}8103$.
  ---
  c) $P(X \ge 2) = 1 - P(X \le 1) \approx 0{,}1897$. In knapp jeder fünften Packung sind also zwei oder mehr defekte Chips.
```

```aufgabe
id: wk-binom-intervall
titel: Zwischen zwei Grenzen
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  $X \sim B(10;\, 0{,}3)$. Berechne $P(2 \le X \le 4)$ auf 4 Nachkommastellen.
teile:
  - typ: zahl
    loesung: "binomcdf(10, 0.3, 4) - binomcdf(10, 0.3, 1)"
    toleranz: 0.0005
    anzeige: '0{,}7004'
    fehler:
      - wert: "binomcdf(10, 0.3, 4) - binomcdf(10, 0.3, 2)"
        meldung: Du hast auch $P(X = 2)$ abgezogen. Die $2$ gehört aber zum Ereignis. Abziehen musst du nur $P(X \le 1)$.
      - wert: "binompdf(10, 0.3, 2) + binompdf(10, 0.3, 4)"
        meldung: Du hast nur die beiden Grenzen addiert. Auch der Wert $3$ dazwischen gehört dazu.
hinweise:
  - 'Welche Werte gehören dazu? Es sind drei: $2$, $3$ und $4$.'
  - 'Entweder die drei Einzelwahrscheinlichkeiten addieren oder $P(X \le 4) - P(X \le 1)$ rechnen.'
loesung: |
  **Ansatz:** Die Werte $2$, $3$ und $4$ gehören zum Ereignis. Drei Summanden sind schnell gerechnet.
  ---
  $P(X = 2) \approx 0{,}2335$, $P(X = 3) \approx 0{,}2668$ und $P(X = 4) \approx 0{,}2001$.
  ---
  Summe: $P(2 \le X \le 4) \approx 0{,}7004$. Plausibel, denn $np = 3$ liegt in der Mitte dieses Bereichs.
```

```aufgabe
id: wk-binom-lose
titel: Wie viele Lose?
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Bei einer Lotterie gewinnt jedes Los unabhängig mit Wahrscheinlichkeit $5\,\%$.
  Wie viele Lose muss man mindestens kaufen, um mit mindestens $90\,\%$ Wahrscheinlichkeit mindestens einen Gewinn zu haben?
teile:
  - typ: zahl
    label: 'Mindestanzahl $n$'
    loesung: "ceil(ln(0.1)/ln(0.95))"
    fehler:
      - wert: "44"
        meldung: Abgerundet. Bei 44 Losen ist $1 - 0{,}95^{44} \approx 0{,}895$, das reicht nicht.
      - wert: "18"
        meldung: Du hast vermutlich $n \cdot 0{,}05 \ge 0{,}9$ gerechnet. Wahrscheinlichkeiten mehrerer Lose darf man nicht einfach addieren.
hinweise:
  - '$X \sim B(n;\, 0{,}05)$. „Mindestens ein Gewinn“ hat die Wahrscheinlichkeit $1 - 0{,}95^n$.'
  - 'Löse $1 - 0{,}95^n \ge 0{,}9$ mit dem Logarithmus. Beim Teilen durch $\ln 0{,}95 < 0$ dreht sich das Zeichen.'
loesung: |
  **Ansatz:** $P(X \ge 1) = 1 - P(X = 0) = 1 - 0{,}95^n$. Bedingung: $1 - 0{,}95^n \ge 0{,}9$, also $0{,}95^n \le 0{,}1$.
  ---
  Logarithmieren und durch die negative Zahl $\ln 0{,}95$ teilen: $n \ge \dfrac{\ln 0{,}1}{\ln 0{,}95} \approx 44{,}89$.
  ---
  Aufrunden: mindestens $45$ Lose.
  ---
  Probe: $1 - 0{,}95^{45} \approx 0{,}9006$ reicht, $1 - 0{,}95^{44} \approx 0{,}8953$ reicht nicht.
```

```reflexion
frage: Warum rechnet man bei „mindestens 2 Treffer unter 20 Versuchen“ fast immer über das Gegenereignis? Und wann wäre der direkte Weg kürzer?
antwort: |
  „Mindestens 2“ umfasst die 19 Werte $2, 3, \dots, 20$. Das Gegenereignis „höchstens 1“ umfasst nur die 2 Werte $0$ und $1$.
  Über das Gegenereignis braucht man also 2 statt 19 Summanden. Allgemein summiert man über die Seite mit weniger Werten.
  Bei „mindestens 19 Treffer unter 20 Versuchen“ wäre der direkte Weg kürzer: Dort gehören nur die Werte $19$ und $20$ dazu,
  das Gegenereignis hätte 19 Werte.
```

```aufgabe
id: wk-binom-server
titel: Ausfallsicherer Dienst
niveau: 3
lernziel: 6
kompetenz: modellieren
angabe: |
  Ein Onlinedienst läuft auf mehreren gleichen Servern. Jeder Server ist an einem Tag unabhängig von den anderen mit
  Wahrscheinlichkeit $0{,}9$ verfügbar. Der Dienst funktioniert, wenn **mindestens 4** Server verfügbar sind.
  a) Es gibt 6 Server. Mit welcher Wahrscheinlichkeit funktioniert der Dienst? (4 Nachkommastellen)
  b) Wie viele Server braucht man mindestens, damit der Dienst mit mindestens $99\,\%$ Wahrscheinlichkeit funktioniert?
teile:
  - typ: zahl
    label: 'a) 6 Server'
    loesung: "1 - binomcdf(6, 0.9, 3)"
    toleranz: 0.0005
    anzeige: '0{,}9842'
    fehler:
      - wert: "binompdf(6, 0.9, 4)"
        meldung: Das ist „genau 4 verfügbar“. Der Dienst läuft auch mit 5 oder 6 verfügbaren Servern.
      - wert: "0.9^4"
        meldung: Das wäre „4 bestimmte Server sind verfügbar“. Es ist aber egal, welche 4 laufen, und es dürfen auch mehr sein.
  - typ: zahl
    label: 'b) Mindestanzahl Server'
    loesung: "7"
    fehler:
      - wert: "6"
        meldung: Mit 6 Servern sind es nur gut $98\,\%$, siehe a). Probiere 7 Server aus.
hinweise:
  - 'Bei a) ist $X \sim B(6;\, 0{,}9)$ die Anzahl verfügbarer Server. Gesucht ist $P(X \ge 4) = P(X = 4) + P(X = 5) + P(X = 6)$.'
  - 'Für b) gibt es keine Formel zum Umstellen. Berechne $P(X \ge 4)$ für $n = 7$ und vergleiche mit $0{,}99$.'
loesung: |
  **Ansatz:** $X$ = Anzahl verfügbarer Server. Die Server fallen unabhängig aus, also $X \sim B(n;\, 0{,}9)$. Gesucht ist jeweils $P(X \ge 4)$.
  ---
  a) $P(X = 4) = 15 \cdot 0{,}9^4 \cdot 0{,}1^2 \approx 0{,}0984$, $P(X = 5) = 6 \cdot 0{,}9^5 \cdot 0{,}1 \approx 0{,}3543$, $P(X = 6) = 0{,}9^6 \approx 0{,}5314$.
  Summe: $P(X \ge 4) \approx 0{,}9842$.
  ---
  b) Bei $n = 6$ ist $0{,}9842 < 0{,}99$, das reicht nicht. Bei $n = 7$ ist $P(X \ge 4) = 1 - P(X \le 3) \approx 1 - 0{,}0027 = 0{,}9973$.
  ---
  Antwort: Mit 7 Servern funktioniert der Dienst mit über $99\,\%$ Wahrscheinlichkeit. Ein zusätzlicher Server senkt das Ausfallrisiko von etwa $1{,}6\,\%$ auf etwa $0{,}3\,\%$.
```

## Ziehen ohne Zurücklegen und Warten auf den ersten Treffer

```aufgabe
id: wk-hyper-check-kombi
titel: Teams auslosen
niveau: 1
art: check
angabe: |
  Auf wie viele Arten kann man aus 10 Personen 3 auswählen, wenn die Reihenfolge egal ist?
  (Wiederholung: [16.4 Zählen ohne Reihenfolge: Kombinationen und Binomialkoeffizient](/lernen/mathe3/wahrscheinlichkeit/zaehlen-ohne-reihenfolge-kombinationen-und-binomialkoeffizient))
teile:
  - typ: zahl
    loesung: "binom(10, 3)"
    fehler:
      - wert: "720"
        meldung: '$10 \cdot 9 \cdot 8 = 720$ zählt geordnet. Jede Dreiergruppe kommt darin $3! = 6$-mal vor.'
loesung: |
  Ungeordnete Auswahl ohne Wiederholung: $\binom{10}{3} = \frac{10 \cdot 9 \cdot 8}{3 \cdot 2 \cdot 1}$.
  ---
  $\frac{720}{6} = 120$.
```

Die Binomialverteilung hat zwei Bedingungen, die im Alltag oft verletzt sind. Erstens: $p$ bleibt gleich.
Beim Ziehen **ohne Zurücklegen** aus einer kleinen Gesamtheit stimmt das nicht. Zweitens: Die Anzahl $n$
der Versuche steht vorher fest. Beim **Warten auf den ersten Treffer** stimmt das nicht. Für beide Fälle
gibt es eigene Verteilungen.

### Die hypergeometrische Verteilung

**Worum geht es?** Aus einer Urne mit $N$ Kugeln, davon $M$ „Treffer“, ziehst du $n$ Kugeln **ohne
Zurücklegen**. Wie wahrscheinlich sind genau $k$ Treffer dabei? Statt mit einem Baum rechnest du hier am
einfachsten mit der Laplace-Formel und Binomialkoeffizienten.

:::beispiel[Wer aus Wien kommt]
In einer Gruppe von 10 Studierenden kommen 4 aus Wien. Für ein Projekt werden 3 Personen ausgelost. Wie
wahrscheinlich ist genau eine Person aus Wien dabei?

**Mögliche Fälle:** Jede Dreiergruppe ist gleich wahrscheinlich. Es gibt $\binom{10}{3} = 120$ Dreiergruppen.

**Günstige Fälle:** Wir wählen in zwei Schritten. Eine Person aus den 4 Wienerinnen und Wienern: $\binom41 = 4$ Arten.
Zwei Personen aus den 6 anderen: $\binom62 = 15$ Arten. Mit der Produktregel sind das $4 \cdot 15 = 60$ Gruppen.

**Laplace:** $P(X = 1) = \dfrac{60}{120} = 0{,}5$.
:::

:::satz[Hypergeometrische Verteilung]
In einer Urne liegen $N$ Kugeln, davon $M$ Treffer und $N - M$ Nieten. Es werden $n$ Kugeln ohne Zurücklegen
gezogen. Für die Anzahl $X$ der gezogenen Treffer gilt
$$P(X = k) = \frac{\dbinom{M}{k} \cdot \dbinom{N - M}{n - k}}{\dbinom{N}{n}}.$$
Der Erwartungswert ist $E(X) = n \cdot \dfrac{M}{N}$.
:::

Dabei ist $N$ die Gesamtzahl, $M$ die Anzahl der Treffer in der Urne, $n$ die Anzahl der gezogenen Kugeln
und $k$ die Anzahl der Treffer unter den gezogenen.

:::beweis
Jede ungeordnete Auswahl von $n$ der $N$ Kugeln ist gleich wahrscheinlich. Das sind $\binom{N}{n}$ mögliche Fälle.
Günstig sind die Auswahlen mit genau $k$ Treffern. Man wählt $k$ der $M$ Treffer, das geht auf $\binom{M}{k}$ Arten.
Unabhängig davon wählt man $n - k$ der $N - M$ Nieten, das geht auf $\binom{N-M}{n-k}$ Arten. Die Produktregel
und die Laplace-Formel ergeben die Formel.
:::

Kontrolle der Formel im Beispiel: $N = 10$, $M = 4$, $n = 3$, $k = 1$. Im Zähler steht $\binom41 \cdot \binom62 = 60$,
im Nenner $\binom{10}{3} = 120$. Merkhilfe: **Oben** in den Binomialkoeffizienten des Zählers stehen die beiden
Gruppen in der Urne ($M$ und $N - M$), **unten** die Anzahlen, die man aus ihnen zieht ($k$ und $n - k$).
Oben ergibt die Summe $N$, unten ergibt sie $n$.

:::beispiel[Lotto: kein Richtiger]
Beim Lotto „6 aus 45“ kreuzt du 6 Zahlen an. Gezogen werden 6 der 45 Zahlen ohne Zurücklegen. Deine 6 Zahlen
sind die Treffer, also $N = 45$, $M = 6$ und $n = 6$. Wie wahrscheinlich ist **kein** Richtiger?
$$P(X = 0) = \frac{\binom60 \cdot \binom{39}{6}}{\binom{45}{6}} = \frac{3\,262\,623}{8\,145\,060} \approx 0{,}4006.$$
Bei etwa vier von zehn Tipps ist also keine einzige Zahl richtig.
:::

:::intuition[Wann reicht trotzdem die Binomialverteilung?]
Der Erwartungswert $n \cdot \frac{M}{N}$ ist derselbe wie bei der Binomialverteilung mit $p = \frac{M}{N}$. Ist die
Gesamtheit $N$ sehr groß im Vergleich zur Stichprobe $n$, ändert ein einzelner Zug die Zusammensetzung kaum.
Dann ist die Binomialverteilung eine gute Näherung. Eine übliche Faustregel ist $n \le 0{,}05 \cdot N$, die
Stichprobe umfasst also höchstens $5\,\%$ der Gesamtheit. Deshalb rechnet man bei Stichproben aus der laufenden
Produktion binomial.
:::

:::achtung[Binomial gerechnet, obwohl ohne Zurücklegen gezogen wird]
Eine Lieferung hat 10 Teile, davon 3 defekte. Zwei Teile werden ohne Zurücklegen geprüft. Eine typische
falsche Rechnung für „keines defekt“:
$$P(X = 0) = 0{,}7^2 = 0{,}49. \qquad \text{(falsch)}$$
Das wäre richtig mit Zurücklegen. Nach einem intakten Teil sind aber nur noch 6 intakte unter 9 Teilen übrig.
Richtig ist $\dfrac{\binom72}{\binom{10}{2}} = \dfrac{21}{45} \approx 0{,}467$. Zur Kontrolle mit dem Baum: $\tfrac{7}{10} \cdot \tfrac69 = \tfrac{42}{90} \approx 0{,}467$.
:::

```aufgabe
id: wk-hyper-gefuehrt
titel: Losentscheid in der Klasse
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  In einer Klasse sind 12 Mädchen und 8 Buben. Für eine Delegation werden 4 Personen ausgelost.
  Mit welcher Wahrscheinlichkeit sind genau 2 Mädchen in der Delegation? (4 Nachkommastellen)
teile:
  - typ: zahl
    loesung: "binom(12, 2)*binom(8, 2)/binom(20, 4)"
    toleranz: 0.0005
    anzeige: '\tfrac{1848}{4845} \approx 0{,}3814'
    fehler:
      - wert: "binompdf(4, 0.6, 2)"
        meldung: Das ist die Binomialverteilung, also Ziehen mit Zurücklegen. Beim Losen kann aber niemand zweimal gezogen werden.
      - wert: "binom(12, 2)/binom(20, 4)"
        meldung: Im Zähler fehlen die Buben. Die beiden anderen Plätze werden mit 2 der 8 Buben besetzt, das ergibt den Faktor $\binom82$.
hinweise:
  - 'Hypergeometrisch mit $N = 20$, $M = 12$ Mädchen, $n = 4$ und $k = 2$.'
gefuehrt:
  - text: Wie viele Delegationen gibt es insgesamt?
    teil: { typ: zahl, loesung: "binom(20, 4)" }
    erklaerung: $\binom{20}{4} = 4845$.
  - text: Auf wie viele Arten kann man 2 der 12 Mädchen auswählen?
    teil: { typ: zahl, loesung: "binom(12, 2)" }
    erklaerung: $\binom{12}{2} = 66$.
  - text: Auf wie viele Arten kann man 2 der 8 Buben auswählen?
    teil: { typ: zahl, loesung: "binom(8, 2)" }
    erklaerung: $\binom82 = 28$.
  - text: Berechne die Wahrscheinlichkeit.
    teil: { typ: zahl, loesung: "66*28/4845", toleranz: 0.0005 }
    erklaerung: Produktregel für die günstigen Fälle, $66 \cdot 28 = 1848$. Laplace ergibt $\tfrac{1848}{4845} \approx 0{,}3814$.
loesung: |
  **Ansatz:** Ziehen ohne Zurücklegen, alle Delegationen gleich wahrscheinlich. Also hypergeometrisch mit $N = 20$, $M = 12$, $n = 4$, $k = 2$.
  ---
  Günstig: $\binom{12}{2} \cdot \binom82 = 66 \cdot 28 = 1848$. Möglich: $\binom{20}{4} = 4845$.
  ---
  $P(X = 2) = \tfrac{1848}{4845} \approx 0{,}3814$.
```

```aufgabe
id: wk-hyper-qualitaet
titel: Stichprobe aus einer Lieferung
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Eine Lieferung besteht aus 20 Teilen, davon sind 4 defekt. Bei der Eingangskontrolle werden 3 Teile zufällig ohne Zurücklegen
  entnommen. Berechne die Wahrscheinlichkeit, dass a) keines, b) genau eines der entnommenen Teile defekt ist. (4 Nachkommastellen)
teile:
  - typ: zahl
    label: 'a) $P(X = 0)$'
    loesung: "binom(16, 3)/binom(20, 3)"
    toleranz: 0.0005
    anzeige: '\tfrac{560}{1140} \approx 0{,}4912'
    fehler:
      - wert: "0.8^3"
        meldung: So rechnet man mit Zurücklegen. Ohne Zurücklegen sinkt nach jedem intakten Teil der Anteil intakter Teile.
  - typ: zahl
    label: 'b) $P(X = 1)$'
    loesung: "binom(4, 1)*binom(16, 2)/binom(20, 3)"
    toleranz: 0.0005
    anzeige: '\tfrac{480}{1140} \approx 0{,}4211'
    fehler:
      - wert: "binom(16, 2)/binom(20, 3)"
        meldung: Es fehlt der Faktor $\binom41 = 4$ für die Auswahl des defekten Teils.
hinweise:
  - '$N = 20$, $M = 4$ defekte, $n = 3$ Ziehungen.'
  - 'Für a) wählst du alle 3 Teile aus den 16 intakten. Für b) ein defektes aus 4 und zwei intakte aus 16.'
loesung: |
  **Ansatz:** Hypergeometrisch mit $N = 20$, $M = 4$ und $n = 3$. Mögliche Fälle: $\binom{20}{3} = 1140$.
  ---
  a) Alle drei aus den 16 intakten: $\binom{16}{3} = 560$, also $P(X = 0) = \tfrac{560}{1140} \approx 0{,}4912$.
  ---
  b) Ein defektes aus 4 und zwei intakte aus 16: $4 \cdot \binom{16}{2} = 4 \cdot 120 = 480$, also $P(X = 1) = \tfrac{480}{1140} \approx 0{,}4211$.
  ---
  Kontrolle über den Baum: $P(X = 0) = \tfrac{16}{20} \cdot \tfrac{15}{19} \cdot \tfrac{14}{18} = \tfrac{3360}{6840} \approx 0{,}4912$.
```

```aufgabe
id: wk-hyper-lotto
titel: Lotto 6 aus 45
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Beim Lotto „6 aus 45“ gibt jemand einen Tipp ab. Berechne die Wahrscheinlichkeit für
  a) genau 3 Richtige (4 Nachkommastellen), b) genau 5 Richtige (3 gültige Stellen).
teile:
  - typ: zahl
    label: 'a) $P(X = 3)$'
    loesung: "binom(6, 3)*binom(39, 3)/binom(45, 6)"
    toleranz: 0.0005
    anzeige: '0{,}0224'
    fehler:
      - wert: "binom(6, 3)/binom(45, 6)"
        meldung: Im Zähler fehlen die drei falschen Zahlen. Sie werden aus den 39 Zahlen gewählt, die du nicht angekreuzt hast.
  - typ: zahl
    label: 'b) $P(X = 5)$'
    loesung: "binom(6, 5)*binom(39, 1)/binom(45, 6)"
    anzeige: '2{,}87 \cdot 10^{-5}'
    fehler:
      - wert: "6/binom(45, 6)"
        meldung: Für die sechste, falsche Zahl gibt es 39 Möglichkeiten. Der Faktor $\binom{39}{1} = 39$ fehlt.
hinweise:
  - 'Hypergeometrisch mit $N = 45$, $M = 6$ (deine angekreuzten Zahlen) und $n = 6$ (gezogene Zahlen).'
  - 'Bei $k$ Richtigen kommen $k$ gezogene Zahlen aus deinen 6 und $6 - k$ aus den übrigen 39.'
loesung: |
  **Ansatz:** Hypergeometrisch. Mögliche Ziehungen: $\binom{45}{6} = 8\,145\,060$.
  ---
  a) $\binom63 \cdot \binom{39}{3} = 20 \cdot 9139 = 182\,780$, also $P(X = 3) \approx 0{,}0224$. Etwa jeder 45. Tipp hat genau drei Richtige.
  ---
  b) $\binom65 \cdot \binom{39}{1} = 6 \cdot 39 = 234$, also $P(X = 5) \approx 2{,}87 \cdot 10^{-5}$.
```

### Die geometrische Verteilung: Warten auf den ersten Treffer

**Worum geht es?** Du wiederholst einen Versuch so lange, **bis** der erste Treffer kommt. $X$ ist die Nummer
des Versuchs mit dem ersten Treffer. Die Anzahl der Versuche steht also nicht vorher fest.

:::beispiel[Würfeln bis zur ersten Sechs]
Wie wahrscheinlich fällt die erste Sechs genau im **dritten** Wurf? Dann müssen die ersten beiden Würfe keine
Sechs sein und der dritte eine Sechs. Im Baum ist das ein einziger Pfad:
$$P(X = 3) = \tfrac56 \cdot \tfrac56 \cdot \tfrac16 = \tfrac{25}{216} \approx 0{,}116.$$
Wie wahrscheinlich braucht man **mehr als 6** Würfe? Dann sind die ersten 6 Würfe alle keine Sechs:
$$P(X > 6) = \left(\tfrac56\right)^6 \approx 0{,}335.$$
Im Mittel wartet man $E(X) = 6$ Würfe auf die erste Sechs.
:::

:::satz[Geometrische Verteilung]
Ein Versuch mit Trefferwahrscheinlichkeit $p$ wird unabhängig wiederholt, bis der erste Treffer kommt. Für die
Nummer $X$ dieses Versuchs gilt für $k = 1, 2, 3, \dots$
$$P(X = k) = (1 - p)^{k-1} \cdot p, \qquad P(X > k) = (1 - p)^k, \qquad E(X) = \frac1p.$$
:::

Die Hochzahl $k - 1$ zählt die Nieten **vor** dem ersten Treffer. Die Formel $P(X > k) = (1-p)^k$ sagt: Mehr
als $k$ Versuche braucht man genau dann, wenn die ersten $k$ Versuche alle Nieten sind. $E(X) = \tfrac1p$ ist
anschaulich: Bei $p = \tfrac16$ ist im Mittel jeder sechste Wurf eine Sechs. Den Beweis dieser Formel
lassen wir weg, er braucht eine unendliche Reihe (siehe [Kapitel 11, Unendliche Reihen](/lernen/mathe3/grenzwerte-folgen/unendliche-reihen-partialsummen-geometrische-und-harmonische-reihe)).

```plot
x: [0, 13]
y: [0, 0.2]
achsen: { x: "k (Wurf mit der ersten Sechs)", y: "P(X = k)" }
balken:
  - { x: 1, y: "1/6" }
  - { x: 2, y: "(5/6)*(1/6)" }
  - { x: 3, y: "(5/6)^2*(1/6)", farbe: 1 }
  - { x: 4, y: "(5/6)^3*(1/6)" }
  - { x: 5, y: "(5/6)^4*(1/6)" }
  - { x: 6, y: "(5/6)^5*(1/6)" }
  - { x: 7, y: "(5/6)^6*(1/6)" }
  - { x: 8, y: "(5/6)^7*(1/6)" }
  - { x: 9, y: "(5/6)^8*(1/6)" }
  - { x: 10, y: "(5/6)^9*(1/6)" }
  - { x: 11, y: "(5/6)^10*(1/6)" }
  - { x: 12, y: "(5/6)^11*(1/6)" }
beschriftung: "Geometrische Verteilung für das Warten auf die erste Sechs. Der höchste Balken ist immer k = 1. Jeder weitere Balken ist um den Faktor 5/6 niedriger. Orange markiert ist k = 3 mit 25/216."
```

:::achtung[Eine Niete zu viel]
„Erste Sechs genau im dritten Wurf“. Eine typische falsche Rechnung:
$$P(X = 3) = \left(\tfrac56\right)^3 \cdot \tfrac16 \approx 0{,}096. \qquad \text{(falsch)}$$
Das wären drei Nieten und danach ein Treffer, also die erste Sechs im **vierten** Wurf. Vor dem dritten Wurf
liegen nur zwei Würfe. Richtig ist $\left(\tfrac56\right)^2 \cdot \tfrac16 \approx 0{,}116$.
:::

:::merke[Welche Verteilung passt?]
- **Feste Anzahl $n$, Versuche unabhängig, $p$ bleibt gleich** (würfeln, mit Zurücklegen, große Produktion): **Binomialverteilung**.
- **Feste Anzahl $n$, ohne Zurücklegen aus einer kleinen Gesamtheit** (Lotto, Losentscheid, kleine Lieferung): **hypergeometrische Verteilung**.
- **Wiederholen bis zum ersten Treffer**, gezählt wird die Nummer dieses Versuchs: **geometrische Verteilung**.
:::

```aufgabe
id: wk-geom-rad
titel: Der erste Gewinn
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Ein Glücksrad zeigt bei jeder Drehung mit Wahrscheinlichkeit $0{,}2$ „Gewinn“, unabhängig von früheren Drehungen.
  a) Mit welcher Wahrscheinlichkeit kommt der erste Gewinn genau bei der vierten Drehung? (4 Nachkommastellen)
  b) Wie viele Drehungen braucht man im Mittel bis zum ersten Gewinn?
teile:
  - typ: zahl
    label: 'a) $P(X = 4)$'
    loesung: "0.8^3*0.2"
    toleranz: 0.0005
    anzeige: '0{,}1024'
    fehler:
      - wert: "0.8^4*0.2"
        meldung: Vor der vierten Drehung liegen nur **drei** Drehungen ohne Gewinn. Die Hochzahl ist $k - 1 = 3$.
      - wert: "binompdf(4, 0.2, 1)"
        meldung: Das ist „genau ein Gewinn in 4 Drehungen“, egal wann. Hier muss der Gewinn aber genau bei der vierten Drehung kommen.
  - typ: zahl
    label: 'b) $E(X)$'
    loesung: "1/0.2"
    fehler:
      - wert: "0.2"
        meldung: Das ist die Gewinnwahrscheinlichkeit. Die mittlere Wartezeit ist ihr Kehrwert.
hinweise:
  - 'Drei Nieten und dann ein Treffer: ein einziger Pfad im Baum.'
loesung: |
  **Ansatz:** Warten auf den ersten Treffer, also geometrische Verteilung mit $p = 0{,}2$.
  ---
  a) $P(X = 4) = 0{,}8^3 \cdot 0{,}2 = 0{,}512 \cdot 0{,}2 = 0{,}1024$.
  ---
  b) $E(X) = \tfrac{1}{0{,}2} = 5$ Drehungen.
```

```aufgabe
id: wk-geom-bewerbung
titel: Bewerbungen schreiben
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Eine Absolventin schickt nacheinander Bewerbungen ab. Jede führt unabhängig mit Wahrscheinlichkeit $0{,}15$ zu einer Zusage.
  a) Mit welcher Wahrscheinlichkeit braucht sie mehr als 5 Bewerbungen bis zur ersten Zusage? (4 Nachkommastellen)
  b) Wie viele Bewerbungen braucht sie im Mittel? (2 Nachkommastellen)
teile:
  - typ: zahl
    label: 'a) $P(X > 5)$'
    loesung: "0.85^5"
    toleranz: 0.0005
    anzeige: '0{,}4437'
    fehler:
      - wert: "0.85^4*0.15"
        meldung: Das ist „erste Zusage genau bei der fünften Bewerbung“. Mehr als 5 heißt, die ersten 5 Bewerbungen sind alle Absagen.
      - wert: "1 - 0.85^5"
        meldung: Das ist „mindestens eine Zusage unter den ersten 5“, also das Gegenereignis.
  - typ: zahl
    label: 'b) $E(X)$'
    loesung: "1/0.15"
    toleranz: 0.01
    anzeige: '6{,}67'
    fehler:
      - wert: "0.15*5"
        meldung: Der Erwartungswert der geometrischen Verteilung hängt nur von $p$ ab, $E(X) = \tfrac1p$.
hinweise:
  - '„Mehr als 5 Bewerbungen nötig“ heißt: Die ersten 5 sind alle Absagen.'
  - 'Mittlere Wartezeit $E(X) = \tfrac1p$.'
loesung: |
  **Ansatz:** Geometrische Verteilung mit $p = 0{,}15$. $X$ ist die Nummer der ersten erfolgreichen Bewerbung.
  ---
  a) $P(X > 5) = 0{,}85^5 \approx 0{,}4437$. In fast der Hälfte der Fälle reichen 5 Bewerbungen nicht.
  ---
  b) $E(X) = \tfrac{1}{0{,}15} \approx 6{,}67$ Bewerbungen.
  ---
  Plausibilität: Wenn im Mittel etwa jede siebente Bewerbung klappt, ist ein Bedarf von mehr als 5 nicht selten.
```

```aufgabe
id: wk-verteilung-waehlen
titel: Welche Verteilung?
niveau: 2
lernziel: 7
kompetenz: verstehen
angabe: |
  Ordne jeder Situation die passende Verteilung zu.
  a) Aus einem Kartenspiel mit 20 Karten, darunter 4 Asse, werden 5 Karten ausgeteilt. $X$ = Anzahl der Asse.
  b) Ein Würfel wird 20-mal geworfen. $X$ = Anzahl der Würfe mit Augenzahl 1.
  c) Ein Programm wird so oft neu gestartet, bis es ohne Fehler läuft (jeder Start unabhängig mit $p = 0{,}7$). $X$ = Anzahl der Starts.
teile:
  - typ: auswahl
    label: 'a)'
    optionen: ['binomial', 'hypergeometrisch', 'geometrisch']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Ausgeteilte Karten kommen nicht zurück ins Spiel. Bei nur 20 Karten ändert sich der Anteil der Asse nach jeder Karte deutlich.
      - wert: 2
        meldung: Hier wird nicht gewartet, bis ein Ass kommt. Es werden genau 5 Karten ausgeteilt.
  - typ: auswahl
    label: 'b)'
    optionen: ['binomial', 'hypergeometrisch', 'geometrisch']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Ein Würfelwurf „verbraucht“ keine Augenzahl. Die Wahrscheinlichkeit $\tfrac16$ bleibt bei jedem Wurf gleich.
      - wert: 2
        meldung: Die Anzahl der Würfe steht mit 20 fest. Gezählt werden die Treffer, nicht die Wartezeit.
  - typ: auswahl
    label: 'c)'
    optionen: ['binomial', 'hypergeometrisch', 'geometrisch']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Die Anzahl der Starts steht nicht vorher fest. Man wiederholt, bis der erste Erfolg kommt.
      - wert: 1
        meldung: Es wird nichts aus einer Urne gezogen. Jeder Start hat dieselbe Erfolgswahrscheinlichkeit.
hinweise:
  - 'Frage dich bei jeder Situation: Steht die Anzahl der Versuche fest? Ändert sich die Wahrscheinlichkeit von Versuch zu Versuch?'
  - 'Ohne Zurücklegen aus einer kleinen Gesamtheit spricht für hypergeometrisch, „bis zum ersten Erfolg“ für geometrisch.'
loesung: |
  **Ansatz:** Für jede Situation die beiden Fragen aus dem Merke-Kasten prüfen: Steht $n$ fest? Bleibt $p$ gleich?
  ---
  a) $n = 5$ fest, aber ohne Zurücklegen aus 20 Karten: hypergeometrisch mit $N = 20$, $M = 4$, $n = 5$.
  ---
  b) $n = 20$ fest, $p = \tfrac16$ gleichbleibend und unabhängig: binomial, $X \sim B(20;\, \tfrac16)$.
  ---
  c) Wiederholen bis zum ersten Erfolg: geometrisch mit $p = 0{,}7$.
```

```aufgabe
id: wk-hyper-vergleich
titel: Mit oder ohne Zurücklegen?
niveau: 3
lernziel: 7
kompetenz: begruenden
angabe: |
  Aus einer Lieferung mit 20 Teilen, davon 4 defekt, werden 3 Teile entnommen. Ohne Zurücklegen ist $P(X = 0) \approx 0{,}4912$
  (siehe Aufgabe „Stichprobe aus einer Lieferung“). Jetzt wird jedes Teil nach der Prüfung **zurückgelegt**.
  a) Berechne $P(X = 0)$ für diesen Fall.
  b) Vergleiche mit dem Ergebnis ohne Zurücklegen und erkläre den Unterschied.
teile:
  - typ: zahl
    label: 'a) $P(X = 0)$ mit Zurücklegen'
    loesung: "0.8^3"
    anzeige: '0{,}512'
    fehler:
      - wert: "16/20*15/19*14/18"
        meldung: Das ist die Rechnung ohne Zurücklegen. Mit Zurücklegen sind in jedem Zug wieder 16 von 20 Teilen intakt.
  - typ: text
    label: 'b) Vergleich'
    muster: |
      Mit Zurücklegen ist $X \sim B(3;\, 0{,}2)$ und $P(X = 0) = 0{,}8^3 = 0{,}512$. Ohne Zurücklegen ist die Wahrscheinlichkeit
      kleiner ($0{,}4912$). Jedes gezogene intakte Teil fehlt danach in der Lieferung, also steigt der Anteil defekter Teile
      auf $\tfrac{4}{19}$ und dann auf $\tfrac{4}{18}$. Der Unterschied ist spürbar, weil die Stichprobe von 3 Teilen
      $15\,\%$ der Lieferung ausmacht. Bei sehr großen Lieferungen wären beide Werte fast gleich.
hinweise:
  - 'Mit Zurücklegen bleibt $p = \tfrac{4}{20} = 0{,}2$ bei jedem Zug gleich.'
  - 'Überlege, wie sich der Anteil defekter Teile verändert, wenn ein intaktes Teil nicht zurückgelegt wird.'
loesung: |
  **Ansatz:** Mit Zurücklegen liegt eine Bernoulli-Kette vor, $X \sim B(3;\, 0{,}2)$.
  ---
  a) $P(X = 0) = 0{,}8^3 = 0{,}512$.
  ---
  b) Ohne Zurücklegen: $\tfrac{16}{20} \cdot \tfrac{15}{19} \cdot \tfrac{14}{18} \approx 0{,}4912$. Jeder intakte Zug erhöht den Anteil defekter Teile im Rest.
  ---
  Die Binomialverteilung nähert die hypergeometrische nur gut, wenn $n$ klein gegenüber $N$ ist. Hier ist $\tfrac{n}{N} = \tfrac{3}{20} = 15\,\%$, also zu groß für die Faustregel $5\,\%$.
```

## Stetige Zufallsvariablen: Wahrscheinlichkeit als Fläche

```aufgabe
id: wk-dichte-check-integral
titel: Ein Integral zur Auffrischung
niveau: 1
art: check
angabe: |
  Berechne $\displaystyle\int_0^1 3x^2 \,\dd x$.
  (Wiederholung: [Kapitel 10, Abschnitt „Der Hauptsatz der Differential- und Integralrechnung“](/lernen/mathe3/integralrechnung/der-hauptsatz-der-differential-und-integralrechnung))
teile:
  - typ: zahl
    loesung: "integral(\"3*x^2\", 0, 1)"
    anzeige: '1'
    fehler:
      - wert: "6"
        meldung: Du hast abgeleitet statt integriert. Eine Stammfunktion von $3x^2$ ist $x^3$.
      - wert: "3"
        meldung: Du hast vermutlich nur $3x^2$ an der Stelle $1$ eingesetzt. Gesucht ist die Fläche, also $F(1) - F(0)$ mit einer Stammfunktion $F$.
loesung: |
  Eine Stammfunktion von $3x^2$ ist $F(x) = x^3$, denn $F'(x) = 3x^2$.
  ---
  $F(1) - F(0) = 1 - 0 = 1$.
```

Bisher hatten unsere Zufallsvariablen einzelne Werte: $0, 1, 2, \dots$ Treffer. Viele Größen sind aber
**Messgrößen**: eine Wartezeit, eine Länge, eine Füllmenge. Sie können jeden Wert in einem Intervall
annehmen, also unendlich viele. Solche Zufallsvariablen heißen **stetig**. Für sie brauchst du die
Integralrechnung aus [Kapitel 10, Das bestimmte Integral als Flächenbilanz](/lernen/mathe3/integralrechnung/das-bestimmte-integral-als-flaechenbilanz).

**Wichtig für die Prüfung:** In der Verordnung steht nur „Einführung in Wahrscheinlichkeitsrechnung und Statistik“. Eigene Dichtefunktionen aufstellen, normieren und den Erwartungswert mit einem Integral berechnen ist deshalb eine **Vertiefung über die Prüfung hinaus**. Für die folgenden Lektionen (Normalverteilung) reicht dir die Idee „Wahrscheinlichkeit = Fläche unter der Kurve“.

### Worum geht es?

**In einem Satz:** Bei einer stetigen Zufallsvariablen ist eine Wahrscheinlichkeit eine **Fläche unter
einer Kurve**.

**Das Bild dazu.** Stell dir ein Säulendiagramm vor, in dem jede Säule die Breite $1$ hat. Dann ist die
Wahrscheinlichkeit einer Säule ihre Höhe mal $1$, also ihre Fläche. Machst du die Säulen immer schmaler,
werden sie zu einer glatten Kurve. Die Wahrscheinlichkeit eines Intervalls ist dann die Fläche unter dieser
Kurve über dem Intervall. Die Kurve heißt **Dichtefunktion** oder kurz **Dichte**.

:::beispiel[Wartezeit an der Haltestelle]
Ein Bus fährt genau alle 10 Minuten. Du kommst zu einem zufälligen Zeitpunkt an. Deine Wartezeit $X$ in Minuten
liegt zwischen $0$ und $10$, und kein Teil dieses Intervalls ist bevorzugt.

Die Dichte ist deshalb überall gleich hoch, also eine waagrechte Linie. Wie hoch? Die Gesamtfläche muss $1$ sein,
denn irgendeine Wartezeit zwischen 0 und 10 tritt sicher ein. Ein Rechteck der Breite $10$ hat die Fläche $1$,
wenn es die Höhe $0{,}1$ hat. Also ist $f(x) = 0{,}1$ für $0 \le x \le 10$ und $f(x) = 0$ sonst.

**Höchstens 3 Minuten warten:** Fläche über $[0;\, 3]$, also $P(X \le 3) = 3 \cdot 0{,}1 = 0{,}3$.

Das passt zur Anschauung: In 3 von 10 Minuten kommt man so an, dass der Bus höchstens 3 Minuten später kommt.
Diese Verteilung heißt **Gleichverteilung** auf $[0;\, 10]$.
:::

:::definition[Stetige Zufallsvariable und Dichte]
Eine Zufallsvariable $X$ heißt **stetig** mit der **Dichtefunktion** $f$, wenn gilt:

1. $f(x) \ge 0$ für alle $x$. (Flächen sind nie negativ.)
2. $\displaystyle\int_{-\infty}^{\infty} f(x)\,\dd x = 1$. (Die Gesamtfläche ist $1$.)
3. Für alle $a \le b$ ist $\displaystyle P(a \le X \le b) = \int_a^b f(x)\,\dd x$.

Das Zeichen $\infty$ heißt „unendlich“. Ist $f$ außerhalb eines Intervalls $[u;\, v]$ gleich $0$, genügt das Integral von $u$ bis $v$.
:::

**Nicht-Beispiel:** $f(x) = x$ auf $[0;\, 2]$ (und $0$ sonst) ist **keine** Dichte. Die Fläche ist
$\int_0^2 x\,\dd x = 2$ und nicht $1$. Auch $g(x) = 1 - x$ auf $[0;\, 2]$ ist keine Dichte, denn für $x > 1$ ist $g(x)$ negativ.

### Eine wichtige Folgerung: Einzelne Werte haben Wahrscheinlichkeit null

Ein einzelner Wert $a$ ist ein Intervall der Breite $0$. Die Fläche darüber ist $0$:
$$P(X = a) = \int_a^a f(x)\,\dd x = 0.$$
Das klingt seltsam, ist aber vernünftig. Die Wartezeit ist praktisch nie **genau** $3{,}000\,000\ldots$ Minuten.
Für die Rechnung heißt das: Bei stetigen Zufallsvariablen ist es egal, ob man $<$ oder $\le$ schreibt.
Es gilt $P(X < 3) = P(X \le 3)$.

```aufgabe
id: wk-dichte-check-punkt
titel: Kleiner oder kleiner-gleich?
niveau: 1
art: check
angabe: |
  Für die Wartezeit $X$ aus dem Beispiel (Gleichverteilung auf $[0;\, 10]$) ist $P(X \le 3) = 0{,}3$. Wie groß ist $P(X < 3)$?
teile:
  - typ: zahl
    loesung: "0.3"
    fehler:
      - wert: "0.2"
        meldung: Bei einer stetigen Größe hat der einzelne Wert $3$ die Wahrscheinlichkeit $0$. Weglassen ändert die Fläche nicht.
loesung: |
  $P(X \le 3) = P(X < 3) + P(X = 3)$.
  ---
  Bei einer stetigen Zufallsvariablen ist $P(X = 3) = 0$. Also $P(X < 3) = 0{,}3$.
```

:::beispiel[Eine Dichte normieren]
Eine Größe $X$ (zum Beispiel die Bearbeitungszeit einer Serveranfrage in Sekunden) hat auf $[0;\, 2]$ die Dichte $f(x) = c \cdot x$ und
außerhalb $0$. Dabei ist $c$ eine noch unbekannte Zahl.

**Schritt 1: $c$ bestimmen.** Die Gesamtfläche muss $1$ sein:
$$\int_0^2 c\,x\,\dd x = c \cdot \left[\tfrac{x^2}{2}\right]_0^2 = c \cdot 2 = 1, \quad \text{also } c = \tfrac12.$$
Dieses Festlegen von $c$ heißt **Normieren**.

**Schritt 2: eine Wahrscheinlichkeit.** Höchstens eine Sekunde:
$$P(X \le 1) = \int_0^1 \tfrac{x}{2}\,\dd x = \left[\tfrac{x^2}{4}\right]_0^1 = \tfrac14.$$
Die Wahrscheinlichkeit für $1 \le X \le 2$ ist der Rest, also $\tfrac34$. Das passt zum Bild: Die Dichte steigt
an, rechts ist mehr Fläche als links.

**Schritt 3: der Erwartungswert.** Bei stetigen Größen ersetzt das Integral die Summe:
$$E(X) = \int_0^2 x \cdot \tfrac{x}{2}\,\dd x = \left[\tfrac{x^3}{6}\right]_0^2 = \tfrac86 = \tfrac43 \approx 1{,}33.$$
Der Erwartungswert liegt rechts von der Mitte $1$, weil die Dichte rechts höher ist.
:::

```plot
x: [-0.3, 2.5]
y: [0, 1.2]
achsen: { x: "x (Bearbeitungszeit in s)", y: "f(x)" }
graphen:
  - { f: "x/2", von: 0, bis: 2, label: "f(x) = x/2", farbe: 0 }
flaechen:
  - { f: "x/2", von: 0, bis: 1, farbe: 1 }
  - { f: "x/2", von: 1, bis: 2, farbe: 0 }
strecken:
  - { von: [2, 0], nach: [2, 1], gestrichelt: true }
punkte:
  - { x: 0.75, y: 0.1, label: "1/4", farbe: 1 }
  - { x: 1.6, y: 0.35, label: "3/4", farbe: 0 }
beschriftung: "Dichte f(x) = x/2 auf dem Intervall von 0 bis 2. Die orange Fläche über [0; 1] ist P(X ≤ 1) = 1/4, die blaue Fläche über [1; 2] ist 3/4. Die Gesamtfläche des Dreiecks ist 1."
```

:::definition[Erwartungswert und Varianz einer stetigen Zufallsvariablen]
Für eine stetige Zufallsvariable mit Dichte $f$ ist
$$\mu = E(X) = \int_{-\infty}^{\infty} x \, f(x)\,\dd x \qquad \text{und} \qquad V(X) = \sigma^2 = \int_{-\infty}^{\infty} (x - \mu)^2 f(x)\,\dd x.$$
Auch hier gilt der Verschiebungssatz $V(X) = E(X^2) - \mu^2$ mit $E(X^2) = \int x^2 f(x)\,\dd x$.
:::

Im Beispiel ist $E(X^2) = \int_0^2 x^2 \cdot \tfrac{x}{2}\,\dd x = \left[\tfrac{x^4}{8}\right]_0^2 = 2$. Also ist
$V(X) = 2 - \left(\tfrac43\right)^2 = 2 - \tfrac{16}{9} = \tfrac29$ und $\sigma = \sqrt{2/9} \approx 0{,}47$.

:::achtung[Die Dichte für eine Wahrscheinlichkeit gehalten]
Bei der Dichte $f(x) = \tfrac{x}{2}$ auf $[0;\, 2]$ lautet eine typische falsche Rechnung:
$$P(X = 2) = f(2) = 1. \qquad \text{(falsch)}$$
Ein Funktionswert der Dichte ist **keine** Wahrscheinlichkeit. Er kann sogar größer als $1$ sein. Erst eine
Fläche ist eine Wahrscheinlichkeit, und über einem einzelnen Punkt ist die Fläche $0$. Richtig ist $P(X = 2) = 0$.
:::

:::achtung[Vor dem Normieren gerechnet]
Bei $f(x) = c \cdot x$ auf $[0;\, 2]$ lautet eine typische falsche Rechnung, bei der $c$ einfach weggelassen wird:
$$P(X \le 1) = \int_0^1 x\,\dd x = \tfrac12. \qquad \text{(falsch)}$$
Ohne Normieren ist die Gesamtfläche $2$ statt $1$, alle Werte wären doppelt so groß. Zuerst $c = \tfrac12$
bestimmen, dann rechnen. Richtig ist $P(X \le 1) = \tfrac14$.
:::

:::merke[Mit einer Dichte rechnen]
1. **Normieren:** Unbekannte Konstante aus $\int f(x)\,\dd x = 1$ bestimmen.
2. **Wahrscheinlichkeit:** $P(a \le X \le b) = \int_a^b f(x)\,\dd x$. Ob $<$ oder $\le$, ist egal.
3. **Erwartungswert:** $E(X) = \int x f(x)\,\dd x$. Varianz mit dem Verschiebungssatz.
4. **Kontrolle:** Eine Wahrscheinlichkeit liegt zwischen $0$ und $1$. Eine Skizze der Dichte zeigt, ob das Ergebnis plausibel ist.
:::

```aufgabe
id: wk-dichte-gefuehrt
titel: Warten auf die U-Bahn
niveau: 1
lernziel: 8
kompetenz: rechnen
angabe: |
  Eine U-Bahn fährt genau alle 5 Minuten. Du kommst zu einem zufälligen Zeitpunkt an. Die Wartezeit $X$ in Minuten ist auf $[0;\, 5]$
  gleichverteilt. Bestimme die Höhe $c$ der Dichte, $P(X > 3)$ und den Erwartungswert $E(X)$.
teile:
  - typ: zahl
    label: 'Höhe $c$'
    loesung: "1/5"
    anzeige: '0{,}2'
    fehler:
      - wert: "5"
        meldung: Die Fläche des Rechtecks ist Breite mal Höhe. Bei Höhe $5$ wäre die Fläche $25$ und nicht $1$.
  - typ: zahl
    label: '$P(X > 3)$'
    loesung: "(5 - 3)*0.2"
    anzeige: '0{,}4'
    fehler:
      - wert: "0.6"
        meldung: Das ist $P(X \le 3)$. „Mehr als 3 Minuten“ ist die Fläche über $[3;\, 5]$.
  - typ: zahl
    label: '$E(X)$ in Minuten'
    loesung: "integral(\"x*0.2\", 0, 5)"
    anzeige: '2{,}5'
    fehler:
      - wert: "0.2"
        meldung: Das ist die Höhe der Dichte. Der Erwartungswert ist $\int_0^5 x \cdot 0{,}2\,\dd x$.
hinweise:
  - 'Die Dichte ist ein Rechteck der Breite $5$. Seine Fläche muss $1$ sein.'
gefuehrt:
  - text: Wie hoch muss das Rechteck der Breite 5 sein, damit seine Fläche 1 ist?
    teil: { typ: zahl, loesung: "1/5" }
    erklaerung: $5 \cdot c = 1$, also $c = 0{,}2$.
  - text: Wie breit ist das Intervall für „mehr als 3 Minuten“?
    teil: { typ: zahl, loesung: "2" }
    erklaerung: Von $3$ bis $5$, also Breite $2$.
  - text: Berechne $P(X > 3)$ als Rechtecksfläche.
    teil: { typ: zahl, loesung: "2*0.2" }
    erklaerung: $2 \cdot 0{,}2 = 0{,}4$.
  - text: Berechne $E(X) = \int_0^5 0{,}2\,x\,\dd x$.
    teil: { typ: zahl, loesung: "integral(\"0.2*x\", 0, 5)" }
    erklaerung: $\left[0{,}1 x^2\right]_0^5 = 2{,}5$. Das ist genau die Mitte des Intervalls.
loesung: |
  **Ansatz:** Gleichverteilung, die Dichte ist ein Rechteck über $[0;\, 5]$ mit Fläche $1$.
  ---
  $c = \tfrac15 = 0{,}2$ und $P(X > 3) = (5 - 3) \cdot 0{,}2 = 0{,}4$.
  ---
  $E(X) = \int_0^5 0{,}2\,x\,\dd x = \left[0{,}1\,x^2\right]_0^5 = 2{,}5$ Minuten. Bei einer Gleichverteilung liegt der Erwartungswert in der Mitte.
```

```aufgabe
id: wk-dichte-normieren
titel: Konstante bestimmen
niveau: 1
lernziel: 8
kompetenz: rechnen
angabe: |
  Die Funktion $f(x) = c \cdot x^2$ für $0 \le x \le 3$ und $f(x) = 0$ sonst soll eine Dichte sein. Bestimme $c$ als Bruch.
teile:
  - typ: zahl
    loesung: "1/integral(\"x^2\", 0, 3)"
    anzeige: '\tfrac19'
    fehler:
      - wert: "1/27"
        meldung: Du hast vermutlich $3^3 = 27$ als Fläche genommen. Eine Stammfunktion von $x^2$ ist aber $\tfrac{x^3}{3}$, also ist die Fläche $\tfrac{27}{3} = 9$.
      - wert: "1/3"
        meldung: Du hast die Breite des Intervalls verwendet. Hier ist die Dichte keine Konstante, du musst integrieren.
hinweise:
  - 'Bedingung: $\int_0^3 c\,x^2\,\dd x = 1$.'
loesung: |
  **Ansatz:** Normieren, also die Gesamtfläche gleich $1$ setzen.
  ---
  $\int_0^3 c\,x^2\,\dd x = c \cdot \left[\tfrac{x^3}{3}\right]_0^3 = c \cdot 9$.
  ---
  $9c = 1$, also $c = \tfrac19$. Kontrolle: $f(x) = \tfrac{x^2}{9} \ge 0$ auf $[0;\, 3]$.
```

```aufgabe
id: wk-dichte-wahrscheinlichkeit
titel: Flächen unter einer Dichte
niveau: 2
lernziel: 8
kompetenz: rechnen
angabe: |
  $X$ hat die Dichte $f(x) = \tfrac{x^2}{9}$ für $0 \le x \le 3$ und $f(x) = 0$ sonst.
  Berechne $P(X \le 1)$, $P(1 \le X \le 2)$ und $E(X)$. Gib Brüche oder Dezimalzahlen an.
teile:
  - typ: zahl
    label: '$P(X \le 1)$'
    loesung: "integral(\"x^2/9\", 0, 1)"
    anzeige: '\tfrac{1}{27}'
    fehler:
      - wert: "1/9"
        meldung: Das ist $f(1)$, also ein Funktionswert. Eine Wahrscheinlichkeit ist eine Fläche, du musst integrieren.
  - typ: zahl
    label: '$P(1 \le X \le 2)$'
    loesung: "integral(\"x^2/9\", 1, 2)"
    anzeige: '\tfrac{7}{27}'
    fehler:
      - wert: "8/27"
        meldung: Das ist $P(X \le 2)$. Ziehe noch die Fläche über $[0;\, 1]$ ab.
  - typ: zahl
    label: '$E(X)$'
    loesung: "integral(\"x^3/9\", 0, 3)"
    anzeige: '2{,}25'
    fehler:
      - wert: "1.5"
        meldung: Das ist die Mitte des Intervalls. Die Dichte steigt aber an, rechts liegt mehr Wahrscheinlichkeit. Rechne $\int_0^3 x \cdot f(x)\,\dd x$.
hinweise:
  - 'Eine Stammfunktion von $\tfrac{x^2}{9}$ ist $\tfrac{x^3}{27}$.'
  - 'Für $E(X)$ integrierst du $x \cdot f(x) = \tfrac{x^3}{9}$. Eine Stammfunktion davon ist $\tfrac{x^4}{36}$.'
loesung: |
  **Ansatz:** Wahrscheinlichkeiten sind Integrale der Dichte, der Erwartungswert ist $\int x f(x)\,\dd x$.
  ---
  $P(X \le 1) = \left[\tfrac{x^3}{27}\right]_0^1 = \tfrac{1}{27} \approx 0{,}037$.
  ---
  $P(1 \le X \le 2) = \tfrac{8}{27} - \tfrac{1}{27} = \tfrac{7}{27} \approx 0{,}259$.
  ---
  $E(X) = \left[\tfrac{x^4}{36}\right]_0^3 = \tfrac{81}{36} = 2{,}25$. Plausibel: Die Dichte ist rechts viel höher, also liegt $E(X)$ rechts von der Mitte $1{,}5$.
```

```aufgabe
id: wk-dichte-ist-dichte
titel: Welche Funktion ist eine Dichte?
niveau: 2
lernziel: 8
kompetenz: verstehen
angabe: |
  Jede Funktion ist auf dem angegebenen Intervall definiert und außerhalb $0$. Welche ist eine Dichtefunktion?
teile:
  - typ: auswahl
    optionen:
      - '$f(x) = 2x$ auf $[0;\, 2]$'
      - '$f(x) = \tfrac32 - x$ auf $[0;\, 2]$'
      - '$f(x) = \tfrac38 x^2$ auf $[0;\, 2]$'
      - '$f(x) = x^2$ auf $[0;\, 1]$'
    richtig: [2]
    fehler:
      - wert: 0
        meldung: 'Die Fläche ist $\int_0^2 2x\,\dd x = 4$. Eine Dichte braucht die Gesamtfläche $1$.'
      - wert: 1
        meldung: 'Die Fläche ist zwar $\int_0^2 \left(\tfrac32 - x\right)\dd x = 3 - 2 = 1$. Aber für $x > \tfrac32$ ist $f(x)$ negativ, und eine Dichte darf nie negativ sein.'
      - wert: 3
        meldung: 'Die Fläche ist $\int_0^1 x^2\,\dd x = \tfrac13$, nicht $1$.'
hinweise:
  - 'Prüfe zwei Bedingungen: Ist $f(x) \ge 0$ überall? Ist die Gesamtfläche genau $1$?'
  - 'Bei $\tfrac38 x^2$ auf $[0;\, 2]$: Eine Stammfunktion ist $\tfrac18 x^3$.'
loesung: |
  **Ansatz:** Eine Dichte ist nie negativ und hat die Gesamtfläche $1$.
  ---
  $2x$ auf $[0;\, 2]$ hat Fläche $4$. $\tfrac32 - x$ hat zwar Fläche $1$, wird aber für $x > \tfrac32$ negativ. $x^2$ auf $[0;\, 1]$ hat Fläche $\tfrac13$.
  ---
  $\tfrac38 x^2$ ist nicht negativ, und $\int_0^2 \tfrac38 x^2\,\dd x = \left[\tfrac18 x^3\right]_0^2 = 1$. Das ist eine Dichte.
```

```aufgabe
id: wk-dichte-gleich-streuung
titel: Streuung der Wartezeit
niveau: 2
lernziel: 8
kompetenz: anwenden
angabe: |
  Die Wartezeit $X$ an einer Haltestelle mit 12-Minuten-Takt ist auf $[0;\, 12]$ gleichverteilt, mit Dichte $f(x) = \tfrac{1}{12}$.
  Berechne $E(X)$, $E(X^2)$ und $\sigma$ (2 Nachkommastellen).
teile:
  - typ: zahl
    label: '$E(X)$'
    loesung: "integral(\"x/12\", 0, 12)"
    fehler:
      - wert: "12"
        meldung: Das ist die längste mögliche Wartezeit. Im Mittel wartet man nur halb so lang.
  - typ: zahl
    label: '$E(X^2)$'
    loesung: "integral(\"x^2/12\", 0, 12)"
    anzeige: '48'
    fehler:
      - wert: "36"
        meldung: Das ist $\big(E(X)\big)^2$. Für $E(X^2)$ integrierst du $x^2 \cdot f(x)$.
  - typ: zahl
    label: '$\sigma$'
    loesung: "sqrt(48 - 36)"
    toleranz: 0.01
    anzeige: '\sqrt{12} \approx 3{,}46'
    fehler:
      - wert: "48 - 36"
        meldung: Das ist die Varianz. Die Standardabweichung ist ihre Wurzel.
hinweise:
  - '$E(X) = \int_0^{12} \tfrac{x}{12}\,\dd x$ und $E(X^2) = \int_0^{12} \tfrac{x^2}{12}\,\dd x$.'
  - 'Verschiebungssatz: $V(X) = E(X^2) - \big(E(X)\big)^2$.'
loesung: |
  **Ansatz:** Erwartungswerte als Integrale, Varianz mit dem Verschiebungssatz.
  ---
  $E(X) = \left[\tfrac{x^2}{24}\right]_0^{12} = \tfrac{144}{24} = 6$ Minuten.
  ---
  $E(X^2) = \left[\tfrac{x^3}{36}\right]_0^{12} = \tfrac{1728}{36} = 48$.
  ---
  $V(X) = 48 - 6^2 = 12$, also $\sigma = \sqrt{12} \approx 3{,}46$ Minuten. Typisch weicht die Wartezeit also um etwa $3{,}5$ Minuten vom Mittel ab.
```

```reflexion
frage: Bei der Dichte $f(x) = 2x$ auf $[0;\, 1]$ ist $f(1) = 2$. Warum ist das kein Widerspruch dazu, dass Wahrscheinlichkeiten höchstens $1$ sind?
antwort: |
  Ein Funktionswert der Dichte ist keine Wahrscheinlichkeit, sondern eine „Wahrscheinlichkeit pro Längeneinheit“.
  Wahrscheinlichkeiten sind erst Flächen unter der Dichte. Ein sehr schmales Intervall der Breite $0{,}01$ bei $x = 1$ hat ungefähr die
  Wahrscheinlichkeit $2 \cdot 0{,}01 = 0{,}02$. Die Gesamtfläche ist $\int_0^1 2x\,\dd x = 1$. Die Dichte darf also stellenweise größer
  als $1$ sein, solange die Fläche insgesamt $1$ bleibt.
```

```aufgabe
id: wk-dichte-lebensdauer
titel: Brenndauer einer Glühbirne
niveau: 3
lernziel: 8
kompetenz: modellieren
angabe: |
  Die Brenndauer $X$ einer Glühbirne in tausend Stunden wird durch die Dichte $f(x) = c \cdot (4 - x^2)$ für $0 \le x \le 2$ und $f(x) = 0$ sonst beschrieben.
  a) Bestimme $c$.
  b) Mit welcher Wahrscheinlichkeit brennt eine Glühbirne höchstens $1000$ Stunden, also $X \le 1$?
  c) Berechne die mittlere Brenndauer $E(X)$ in tausend Stunden.
  d) Begründe, warum die Dichte für dieses Modell plausibel ist.
teile:
  - typ: zahl
    label: 'a) $c$'
    loesung: "1/integral(\"4 - x^2\", 0, 2)"
    anzeige: '\tfrac{3}{16}'
    fehler:
      - wert: "1/8"
        meldung: Du hast nur $\int_0^2 4\,\dd x = 8$ berechnet. Der Teil $-x^2$ verkleinert die Fläche um $\tfrac83$.
  - typ: zahl
    label: 'b) $P(X \le 1)$'
    loesung: "integral(\"3/16*(4 - x^2)\", 0, 1)"
    anzeige: '\tfrac{11}{16} = 0{,}6875'
    fehler:
      - wert: "3/16*3"
        meldung: Das ist $f(1)$. Eine Wahrscheinlichkeit ist eine Fläche, also musst du von $0$ bis $1$ integrieren.
  - typ: zahl
    label: 'c) $E(X)$ in tausend Stunden'
    loesung: "integral(\"3/16*x*(4 - x^2)\", 0, 2)"
    anzeige: '0{,}75'
    fehler:
      - wert: "1"
        meldung: Das ist die Mitte des Intervalls. Die Dichte ist links aber höher als rechts.
  - typ: text
    label: 'd) Begründung'
    muster: |
      Die Dichte ist am Anfang am größten ($f(0) = \tfrac34$) und fällt bis $x = 2$ auf $0$. Kurze Lebensdauern sind also häufiger
      als lange, und keine Glühbirne brennt länger als $2000$ Stunden. Das passt zu einem Produkt mit begrenzter Lebensdauer. Passend dazu liegt
      $E(X) = 0{,}75$, also $750$ Stunden, links von der Intervallmitte $1$.
hinweise:
  - 'Normieren: $\int_0^2 c\,(4 - x^2)\,\dd x = 1$. Eine Stammfunktion von $4 - x^2$ ist $4x - \tfrac{x^3}{3}$.'
  - 'Für $E(X)$ integrierst du $x \cdot f(x) = c\,(4x - x^3)$. Eine Stammfunktion ist $c\left(2x^2 - \tfrac{x^4}{4}\right)$.'
loesung: |
  **Ansatz:** Zuerst normieren, dann Wahrscheinlichkeiten und Erwartungswert als Integrale.
  ---
  a) $\int_0^2 (4 - x^2)\,\dd x = \left[4x - \tfrac{x^3}{3}\right]_0^2 = 8 - \tfrac83 = \tfrac{16}{3}$. Also $c \cdot \tfrac{16}{3} = 1$ und $c = \tfrac{3}{16}$.
  ---
  b) $P(X \le 1) = \tfrac{3}{16} \left[4x - \tfrac{x^3}{3}\right]_0^1 = \tfrac{3}{16} \cdot \tfrac{11}{3} = \tfrac{11}{16} = 0{,}6875$.
  ---
  c) $E(X) = \tfrac{3}{16} \left[2x^2 - \tfrac{x^4}{4}\right]_0^2 = \tfrac{3}{16} \cdot (8 - 4) = \tfrac34 = 0{,}75$, also im Mittel $750$ Stunden.
  ---
  d) Die Dichte fällt von $\tfrac34$ auf $0$. Kurze Brenndauern sind häufiger, und mehr als $2000$ Stunden sind ausgeschlossen. Deshalb liegt $E(X)$ unter $1$.
```

## Normalverteilung und Standardisieren

```aufgabe
id: wk-normal-check-symmetrie
titel: Eine symmetrische Funktion
niveau: 1
art: check
angabe: |
  Für $f(x) = e^{-x^2/2}$ gilt $f(1) \approx 0{,}607$. Wie groß ist $f(-1)$?
  (Symmetrie von Funktionen: [Kapitel 4, Eigenschaften von Funktionen](/lernen/mathe3/funktionen/eigenschaften-von-funktionen))
teile:
  - typ: zahl
    loesung: "exp(-1/2)"
    anzeige: '0{,}607'
    toleranz: 0.001
    fehler:
      - wert: "-0.607"
        meldung: In der Hochzahl steht $x^2$. Das Quadrat von $-1$ ist wieder $1$, also ändert sich nichts.
loesung: |
  $(-1)^2 = 1$, also steht in der Hochzahl dasselbe wie bei $x = 1$.
  ---
  $f(-1) = f(1) \approx 0{,}607$. Die Funktion ist symmetrisch zur $y$-Achse.
```

Körpergrößen, Messfehler, Abfüllmengen, Prüfungspunkte großer Gruppen: Sehr viele Messgrößen streuen
**glockenförmig** um einen Mittelwert. Werte nahe am Mittelwert sind häufig, weit entfernte sind selten,
und nach beiden Seiten geht es gleich schnell bergab. Das Modell dafür ist die **Normalverteilung**. Sie ist
die wichtigste stetige Verteilung.

### Die Glockenkurve

:::definition[Normalverteilung]
Eine stetige Zufallsvariable $X$ heißt **normalverteilt** mit Erwartungswert $\mu$ und Standardabweichung $\sigma > 0$,
wenn sie die Dichte
$$f(x) = \frac{1}{\sigma\sqrt{2\pi}} \cdot e^{-\frac{(x - \mu)^2}{2\sigma^2}}$$
hat. Man schreibt $X \sim N(\mu;\, \sigma^2)$. Achtung: In der Klammer steht die **Varianz** $\sigma^2$, nicht $\sigma$.

Für $\mu = 0$ und $\sigma = 1$ heißt sie **Standardnormalverteilung**. Ihre Verteilungsfunktion schreibt man
$\Phi(z) = P(Z \le z)$. Dabei ist $\Phi$ der griechische Großbuchstabe „Phi“.
:::

Die Formel musst du nicht auswendig können. Wichtig sind ihre Eigenschaften. Man kann sie mit den
Methoden aus [Kapitel 9, Krümmung und Wendepunkte](/lernen/mathe3/differentialrechnung/kruemmung-und-wendepunkte) nachrechnen:

- Die Kurve ist **symmetrisch** zur senkrechten Geraden $x = \mu$.
- Sie hat dort ihr **Maximum** mit dem Wert $\frac{1}{\sigma\sqrt{2\pi}}$.
- Ihre **Wendepunkte** liegen bei $\mu - \sigma$ und $\mu + \sigma$.
- Je größer $\sigma$, desto **flacher und breiter** die Kurve. Die Gesamtfläche bleibt immer $1$.

```plot
x: [-4, 4]
y: [0, 0.45]
achsen: { x: "z", y: "φ(z)" }
graphen:
  - { f: "exp(-x^2/2)/sqrt(2*pi)", label: "φ(z)", farbe: 0 }
flaechen:
  - { f: "exp(-x^2/2)/sqrt(2*pi)", von: -1, bis: 1, farbe: 0 }
  - { f: "exp(-x^2/2)/sqrt(2*pi)", von: -2, bis: -1, farbe: 1 }
  - { f: "exp(-x^2/2)/sqrt(2*pi)", von: 1, bis: 2, farbe: 1 }
punkte:
  - { x: -1, y: "exp(-0.5)/sqrt(2*pi)", label: "Wendepunkt", farbe: 3 }
  - { x: 1, y: "exp(-0.5)/sqrt(2*pi)", farbe: 3 }
beschriftung: Dichte der Standardnormalverteilung. Blau die Fläche zwischen −1 und 1 (rund 68,3 Prozent), orange die Flächen zwischen einer und zwei Standardabweichungen (zusammen rund 27,2 Prozent). Die Wendepunkte liegen bei −1 und 1.
```

### Standardisieren: jede Normalverteilung auf eine einzige Tabelle zurückführen

Die Fläche unter der Glockenkurve lässt sich nicht mit einer elementaren Stammfunktion ausrechnen. Man liest
sie in einer **Tabelle** ab, die in der Schulformelsammlung steht, oder nimmt den Taschenrechner. Damit eine
einzige Tabelle für alle $\mu$ und $\sigma$ reicht, rechnet man jede Normalverteilung auf die
Standardnormalverteilung um.

**Die Idee:** Man misst den Abstand zum Mittelwert in der Einheit $\sigma$. Der **$z$-Wert**
$$z = \frac{x - \mu}{\sigma}$$
sagt, **wie viele Standardabweichungen** der Wert $x$ vom Mittelwert entfernt ist. Ein positives $z$ liegt
rechts vom Mittelwert, ein negatives links.

:::satz[Standardisierung]
Ist $X \sim N(\mu;\, \sigma^2)$, dann ist $Z = \dfrac{X - \mu}{\sigma}$ standardnormalverteilt. Folglich gilt
$$P(X \le x) = \Phi\!\left(\frac{x - \mu}{\sigma}\right) \qquad \text{und} \qquad P(a \le X \le b) = \Phi\!\left(\frac{b - \mu}{\sigma}\right) - \Phi\!\left(\frac{a - \mu}{\sigma}\right).$$
Wegen der Symmetrie ist $\Phi(-z) = 1 - \Phi(z)$.
:::

Die Symmetrieformel brauchst du, weil viele Tabellen nur $z \ge 0$ enthalten. Im Bild: Die Fläche links von $-z$
ist genauso groß wie die Fläche rechts von $+z$.

:::beispiel[Körpergröße]
Die Körpergröße erwachsener Männer sei näherungsweise $N(178;\, 7^2)$, in Zentimetern. Also ist $\mu = 178$ und $\sigma = 7$.

**Größer als 190 cm.** $z = \frac{190 - 178}{7} \approx 1{,}71$. „Größer als“ ist die Fläche **rechts**, also
$$P(X > 190) = 1 - \Phi(1{,}71) \approx 1 - 0{,}9564 = 0{,}0436.$$
Mit dem ungerundeten $z = \tfrac{12}{7} \approx 1{,}7143$ erhält man $0{,}0432$. Rund $4\,\%$ der Männer sind größer als 190 cm.

**Zwischen 170 und 185 cm.** $z_1 = \frac{170 - 178}{7} \approx -1{,}14$ und $z_2 = \frac{185 - 178}{7} = 1$. Also
$$P(170 \le X \le 185) = \Phi(1) - \Phi(-1{,}14) = \Phi(1) - \big(1 - \Phi(1{,}14)\big) \approx 0{,}8413 - 0{,}1271 = 0{,}7142.$$
Mit ungerundetem $z_1$ erhält man $0{,}7148$. Abweichungen in der dritten Nachkommastelle durch das Runden von $z$ sind normal.
:::

```aufgabe
id: wk-normal-check-widget
titel: Vorhersage zur Glockenkurve
niveau: 1
art: check
angabe: |
  Im Widget unten ist die Fläche zwischen $\mu - \sigma$ und $\mu + \sigma$ markiert. Was passiert mit dieser Fläche, wenn du $\sigma$
  verdoppelst und die Grenzen wieder auf $\mu \pm \sigma$ setzt?
teile:
  - typ: auswahl
    optionen:
      - 'Sie bleibt gleich, etwa $68\,\%$.'
      - 'Sie wird doppelt so groß.'
      - 'Sie wird halb so groß.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die Kurve wird breiter, aber auch flacher. Gemessen in Standardabweichungen bleibt alles gleich, $z$ läuft immer von $-1$ bis $1$.
      - wert: 2
        meldung: Die Kurve wird zwar flacher, aber das Intervall wird auch doppelt so breit. Beides gleicht sich genau aus.
loesung: |
  Die Grenzen $\mu \pm \sigma$ haben immer die $z$-Werte $-1$ und $1$.
  ---
  Also ist die Fläche immer $\Phi(1) - \Phi(-1) \approx 0{,}683$. Probier es im Widget aus.
```

```widget
name: normal
titel: Flächen unter der Glockenkurve
props:
  mu: 178
  sigma: 7
  a: 171
  b: 185
```

Spiele im Widget mit $\sigma$. Bei kleinem $\sigma$ ist die Kurve hoch und schmal, bei großem flach und breit.
Die Fläche zwischen $\mu - \sigma$ und $\mu + \sigma$ bleibt aber immer gleich.

### σ-Regeln und Quantile

:::satz[σ-Regeln]
Für $X \sim N(\mu;\, \sigma^2)$ gilt ungefähr
$$P(\mu - \sigma \le X \le \mu + \sigma) \approx 0{,}683, \quad P(\mu - 2\sigma \le X \le \mu + 2\sigma) \approx 0{,}954, \quad P(\mu - 3\sigma \le X \le \mu + 3\sigma) \approx 0{,}997.$$
Umgekehrt liegen genau $90\,\%$, $95\,\%$ und $99\,\%$ der Werte in den Intervallen $\mu \pm 1{,}645\,\sigma$, $\mu \pm 1{,}96\,\sigma$ und $\mu \pm 2{,}576\,\sigma$.
:::

Die Zahlen folgen aus der Standardisierung, zum Beispiel $P(-1 \le Z \le 1) = 2\Phi(1) - 1 \approx 0{,}683$. Mit den
σ-Regeln kann man ohne Tabelle abschätzen: Ein Wert, der mehr als $3\sigma$ vom Mittelwert entfernt ist, ist sehr ungewöhnlich.

Oft ist die Frage umgekehrt: **Welcher Wert** wird nur mit einer bestimmten Wahrscheinlichkeit unter- oder
überschritten? Dann ist eine Grenze gesucht, ein sogenanntes **Quantil**. Man sucht in der Tabelle rückwärts das $z$
mit $\Phi(z) = p$ und rechnet zurück: $x = \mu + z \cdot \sigma$.

:::beispiel[Lieferzeit]
Die Lieferzeit eines Pizzadienstes sei $N(30;\, 6^2)$ in Minuten. Welche Lieferzeit wird nur in $10\,\%$ der Fälle **überschritten**?

1. Gesucht ist $x$ mit $P(X > x) = 0{,}1$, also $P(X \le x) = 0{,}9$.
2. Tabelle rückwärts: $\Phi(z) = 0{,}9$ für $z \approx 1{,}28$.
3. Zurückrechnen: $x = 30 + 1{,}28 \cdot 6 \approx 37{,}7$ Minuten.

In $90\,\%$ der Fälle ist die Pizza also nach spätestens etwa 38 Minuten da.
:::

:::achtung[Mit der Varianz standardisiert]
Für $X \sim N(178;\, 49)$ lautet eine typische falsche Rechnung:
$$z = \frac{190 - 178}{49} \approx 0{,}24, \quad \text{also} \quad P(X > 190) \approx 0{,}40. \qquad \text{(falsch)}$$
In $N(178;\, 49)$ ist $49 = \sigma^2$ die Varianz. Standardisiert wird mit $\sigma = \sqrt{49} = 7$. Richtig ist
$z \approx 1{,}71$ und $P(X > 190) \approx 0{,}043$. Kontrolle: 190 cm liegt fast $2\sigma$ über dem Mittel, das kann nicht $40\,\%$ betreffen.
:::

:::achtung[Φ ist immer die Fläche links]
Für „größer als 190 cm“ lautet eine typische falsche Rechnung:
$$P(X > 190) = \Phi(1{,}71) \approx 0{,}956. \qquad \text{(falsch)}$$
$\Phi(z)$ ist die Fläche **links** von $z$, also $P(X \le 190)$. Für „größer als“ brauchst du die Fläche rechts:
$1 - \Phi(1{,}71) \approx 0{,}044$. Mach dir vorher eine Skizze: Glockenkurve, $\mu$ markieren, gesuchte Fläche schraffieren.
Dann siehst du, ob das Ergebnis über oder unter $0{,}5$ liegen muss.
:::

:::merke[Normalverteilte Wahrscheinlichkeiten in vier Schritten]
1. **Skizze:** Glockenkurve, $\mu$ in der Mitte, gesuchte Fläche schraffieren.
2. **Standardisieren:** $z = \frac{x - \mu}{\sigma}$ mit $\sigma$, nicht mit $\sigma^2$.
3. **Ablesen:** $\Phi(z)$ ist die Fläche links. Rechts: $1 - \Phi(z)$. Dazwischen: $\Phi(z_2) - \Phi(z_1)$. Negatives $z$: $\Phi(-z) = 1 - \Phi(z)$.
4. **Rückwärts (Quantil):** $z$ aus der Tabelle, dann $x = \mu + z\sigma$.
:::

```aufgabe
id: wk-normal-gefuehrt
titel: Akkulaufzeit
niveau: 1
lernziel: 8
kompetenz: rechnen
angabe: |
  Die Laufzeit eines Handyakkus ist normalverteilt mit $\mu = 12$ Stunden und $\sigma = 1{,}5$ Stunden.
  Mit welcher Wahrscheinlichkeit hält ein Akku weniger als 10 Stunden? (3 Nachkommastellen)
teile:
  - typ: zahl
    loesung: "normcdf(10, 12, 1.5)"
    toleranz: 0.002
    anzeige: '0{,}091'
    fehler:
      - wert: "1 - normcdf(10, 12, 1.5)"
        meldung: Das ist „mehr als 10 Stunden“. Für „weniger als“ brauchst du die Fläche links, also $\Phi(z)$ selbst.
      - wert: "normcdf((10 - 12)/2.25)"
        meldung: Du hast mit der Varianz $1{,}5^2 = 2{,}25$ standardisiert. Geteilt wird durch $\sigma = 1{,}5$.
hinweise:
  - 'Standardisieren: $z = \frac{10 - 12}{1{,}5}$. Das Ergebnis ist negativ, also brauchst du $\Phi(-z) = 1 - \Phi(z)$.'
gefuehrt:
  - text: Berechne den $z$-Wert für 10 Stunden (2 Nachkommastellen).
    teil: { typ: zahl, loesung: "(10 - 12)/1.5", toleranz: 0.01 }
    erklaerung: $z = \frac{10 - 12}{1{,}5} \approx -1{,}33$. 10 Stunden liegen also $1{,}33$ Standardabweichungen unter dem Mittel.
  - text: Lies $\Phi(1{,}33)$ in der Tabelle ab.
    teil: { typ: zahl, loesung: "normcdf(1.33)", toleranz: 0.001 }
    erklaerung: $\Phi(1{,}33) \approx 0{,}9082$.
  - text: Berechne $P(X < 10) = \Phi(-1{,}33)$ mit der Symmetrieformel.
    teil: { typ: zahl, loesung: "1 - normcdf(1.33)", toleranz: 0.002 }
    erklaerung: $\Phi(-1{,}33) = 1 - 0{,}9082 = 0{,}0918$. Mit ungerundetem $z$ erhält man $0{,}0912$.
loesung: |
  **Ansatz:** $X \sim N(12;\, 1{,}5^2)$. Gesucht ist die Fläche links von 10, also $P(X < 10)$.
  ---
  $z = \frac{10 - 12}{1{,}5} \approx -1{,}33$.
  ---
  $P(X < 10) = \Phi(-1{,}33) = 1 - \Phi(1{,}33) \approx 1 - 0{,}9082 = 0{,}092$. Mit ungerundetem $z$ ergibt sich $0{,}091$.
  Etwa jeder elfte Akku hält also weniger als 10 Stunden.
```

```aufgabe
id: wk-normal-standard
titel: Mit Φ rechnen
niveau: 1
lernziel: 8
kompetenz: rechnen
angabe: |
  $Z$ sei standardnormalverteilt. Berechne mit Tabelle oder Taschenrechner auf 4 Nachkommastellen:
  $P(Z \le 1{,}5)$, $P(Z > -0{,}8)$ und $P(-1 \le Z \le 2)$.
teile:
  - typ: zahl
    label: '$P(Z \le 1{,}5)$'
    loesung: "normcdf(1.5)"
    toleranz: 0.0005
    anzeige: '0{,}9332'
    fehler:
      - wert: "1 - normcdf(1.5)"
        meldung: Das ist die Fläche rechts von $1{,}5$. $\Phi(1{,}5)$ ist bereits die Fläche links.
  - typ: zahl
    label: '$P(Z > -0{,}8)$'
    loesung: "1 - normcdf(-0.8)"
    toleranz: 0.0005
    anzeige: '0{,}7881'
    fehler:
      - wert: "normcdf(-0.8)"
        meldung: Das ist die Fläche **links** von $-0{,}8$. Gesucht ist die Fläche rechts davon.
  - typ: zahl
    label: '$P(-1 \le Z \le 2)$'
    loesung: "normcdf(2) - normcdf(-1)"
    toleranz: 0.0005
    anzeige: '0{,}8186'
    fehler:
      - wert: "normcdf(2) - normcdf(1)"
        meldung: 'Du hast $\Phi(1)$ statt $\Phi(-1)$ abgezogen. Mit der Symmetrie ist $\Phi(-1) = 1 - \Phi(1) \approx 0{,}1587$.'
hinweise:
  - 'Symmetrie: $\Phi(-z) = 1 - \Phi(z)$.'
loesung: |
  **Ansatz:** $\Phi(z)$ ist die Fläche links von $z$. Rechts davon liegt $1 - \Phi(z)$.
  ---
  $P(Z \le 1{,}5) = \Phi(1{,}5) \approx 0{,}9332$.
  ---
  $P(Z > -0{,}8) = 1 - \Phi(-0{,}8) = 1 - (1 - \Phi(0{,}8)) = \Phi(0{,}8) \approx 0{,}7881$.
  ---
  $P(-1 \le Z \le 2) = \Phi(2) - \Phi(-1) = 0{,}9772 - (1 - 0{,}8413) = 0{,}8185$, genauer $0{,}8186$.
```

```aufgabe
id: wk-normal-iq
titel: σ-Regeln beim IQ
niveau: 1
lernziel: 8
kompetenz: anwenden
angabe: |
  Intelligenztests sind so normiert, dass der IQ näherungsweise $N(100;\, 15^2)$-verteilt ist.
  a) In welchem symmetrischen Intervall um 100 liegen etwa $95{,}4\,\%$ der Werte? Gib die Grenzen an.
  b) Wie groß ist laut σ-Regel der Anteil der Personen mit einem IQ über 130? (3 Nachkommastellen)
teile:
  - typ: zahl
    label: 'a) untere Grenze'
    loesung: "100 - 2*15"
    fehler:
      - wert: "85"
        meldung: Das ist $\mu - \sigma$. Für $95{,}4\,\%$ brauchst du zwei Standardabweichungen.
  - typ: zahl
    label: 'a) obere Grenze'
    loesung: "100 + 2*15"
    fehler:
      - wert: "115"
        meldung: Das ist $\mu + \sigma$. Für $95{,}4\,\%$ brauchst du zwei Standardabweichungen.
  - typ: zahl
    label: 'b) $P(X > 130)$'
    loesung: "1 - normcdf(130, 100, 15)"
    toleranz: 0.001
    anzeige: '0{,}023'
    fehler:
      - wert: "0.046"
        meldung: '$4{,}6\,\%$ liegen außerhalb des Intervalls, aber auf **beiden** Seiten. Über 130 liegt nur die Hälfte davon.'
hinweise:
  - '$95{,}4\,\%$ gehört zur $2\sigma$-Regel.'
  - 'Außerhalb von $\mu \pm 2\sigma$ liegen $4{,}6\,\%$, wegen der Symmetrie je zur Hälfte links und rechts.'
loesung: |
  **Ansatz:** $\mu = 100$, $\sigma = 15$. Die Zahl $95{,}4\,\%$ gehört zur $2\sigma$-Regel.
  ---
  a) $[100 - 30;\ 100 + 30] = [70;\ 130]$.
  ---
  b) Außerhalb liegen $100\,\% - 95{,}4\,\% = 4{,}6\,\%$, wegen der Symmetrie die Hälfte oberhalb, also $\approx 0{,}023$.
  Genauer: $1 - \Phi(2) \approx 0{,}0228$.
```

```aufgabe
id: wk-normal-abfuellung
titel: Abfüllmaschine
niveau: 2
lernziel: 8
kompetenz: anwenden
angabe: |
  Eine Maschine füllt Mehlpackungen ab. Die Füllmenge ist normalverteilt mit $\mu = 500$ g und $\sigma = 4$ g.
  a) Wie viel Prozent der Packungen enthalten weniger als 495 g?
  b) Mit welcher Wahrscheinlichkeit weicht die Füllmenge um höchstens 8 g vom Sollwert 500 g ab?
  (Wahrscheinlichkeiten auf 3 Nachkommastellen)
teile:
  - typ: zahl
    label: 'a) $P(X < 495)$'
    loesung: "normcdf(495, 500, 4)"
    toleranz: 0.002
    anzeige: '0{,}106'
    fehler:
      - wert: "normcdf(1.25)"
        meldung: 'Das Vorzeichen von $z$ fehlt. $495$ liegt **unter** dem Mittelwert, also ist $z = -1{,}25$ und die Fläche links davon klein.'
  - typ: zahl
    label: 'b) $P(492 \le X \le 508)$'
    loesung: "normcdf(508, 500, 4) - normcdf(492, 500, 4)"
    toleranz: 0.002
    anzeige: '0{,}954'
    fehler:
      - wert: "normcdf(2)"
        meldung: Das ist nur die Fläche links von $508$ g. Ziehe noch die Fläche links von $492$ g ab.
hinweise:
  - 'Standardisieren: $z = \frac{x - \mu}{\sigma}$.'
  - 'Bei b) liegen die Grenzen genau $2\sigma$ links und rechts von $\mu$.'
loesung: |
  **Ansatz:** $X \sim N(500;\, 4^2)$. Beide Teile durch Standardisieren lösen.
  ---
  a) $z = \frac{495 - 500}{4} = -1{,}25$. $P(X < 495) = \Phi(-1{,}25) = 1 - \Phi(1{,}25) \approx 1 - 0{,}8944 = 0{,}1056$, also rund $10{,}6\,\%$.
  ---
  b) $z_{1,2} = \pm\frac{8}{4} = \pm 2$. $P = \Phi(2) - \Phi(-2) = 2\Phi(2) - 1 \approx 2 \cdot 0{,}9772 - 1 = 0{,}9545$. Das ist die $2\sigma$-Regel.
```

```aufgabe
id: wk-normal-quantil
titel: Mindestfüllmenge
niveau: 2
lernziel: 8
kompetenz: anwenden
angabe: |
  Für die Maschine aus der Aufgabe „Abfüllmaschine“ ($\mu = 500$ g, $\sigma = 4$ g): Welche Füllmenge wird nur von $5\,\%$ der
  Packungen unterschritten? (in g, 1 Nachkommastelle)
teile:
  - typ: zahl
    label: 'Grenze $x$'
    einheit: g
    loesung: "invnorm(0.05, 500, 4)"
    toleranz: 0.1
    anzeige: '493{,}4'
    fehler:
      - wert: "506.6"
        meldung: Das ist die Grenze, die nur von $5\,\%$ **überschritten** wird. Unterschreiten heißt, das $z$ ist negativ.
      - wert: "492.2"
        meldung: Du hast $z = -1{,}96$ verwendet. Das gehört zu $2{,}5\,\%$ auf jeder Seite. Für $5\,\%$ auf einer Seite ist $z \approx -1{,}645$.
hinweise:
  - 'Gesucht ist $x$ mit $P(X \le x) = 0{,}05$. In der Tabelle suchst du $\Phi(z) = 0{,}95$ und nimmst dann $-z$.'
  - 'Rückrechnen mit $x = \mu + z \cdot \sigma$.'
loesung: |
  **Ansatz:** Quantil gesucht. Bedingung: $P(X \le x) = 0{,}05$, also $\Phi\big(\frac{x - 500}{4}\big) = 0{,}05$.
  ---
  Aus der Tabelle: $\Phi(1{,}645) \approx 0{,}95$. Wegen der Symmetrie ist $\Phi(-1{,}645) \approx 0{,}05$, also $z = -1{,}645$.
  ---
  $x = 500 + (-1{,}645) \cdot 4 \approx 493{,}4$ g. Nur jede zwanzigste Packung enthält weniger.
```

```aufgabe
id: wk-normal-punkt
titel: Warum P(X = a) = 0?
niveau: 2
lernziel: 8
kompetenz: begruenden
angabe: |
  Die Füllmenge $X$ einer Packung ist normalverteilt mit $\mu = 500$ g. Jemand behauptet:
  „Die Wahrscheinlichkeit, dass eine Packung genau 500 g enthält, ist am größten, weil die Dichte dort ihr Maximum hat.“
  Nimm Stellung.
teile:
  - typ: text
    muster: |
      Bei einer stetigen Zufallsvariablen sind Wahrscheinlichkeiten Flächen unter der Dichte. Für einen einzelnen Wert ist
      $P(X = 500) = \int_{500}^{500} f(x)\,\dd x = 0$. Die Behauptung ist also falsch, kein einzelner Wert hat eine positive
      Wahrscheinlichkeit. Richtig ist: Ein **kleines Intervall** um 500 g, zum Beispiel von 499,5 g bis 500,5 g, hat eine größere
      Wahrscheinlichkeit als ein gleich breites Intervall anderswo, weil die Dichte dort am höchsten ist. Die Dichte selbst ist keine Wahrscheinlichkeit.
hinweise:
  - Wie berechnet man bei einer stetigen Verteilung Wahrscheinlichkeiten?
  - Wie breit ist das „Intervall“, das nur aus dem Wert 500 besteht?
loesung: |
  **Ansatz:** Wahrscheinlichkeiten stetiger Zufallsvariablen sind Integrale der Dichte über Intervalle.
  ---
  Ein Punkt ist ein Intervall der Breite $0$: $P(X = 500) = \int_{500}^{500} f(x)\,\dd x = 0$.
  ---
  Die Aussage stimmt nur sinngemäß für kleine Intervalle gleicher Breite: Das Intervall um $\mu$ hat die größte Wahrscheinlichkeit.
```

```aufgabe
id: wk-normal-mu
titel: Sollwert einstellen
niveau: 3
lernziel: 8
kompetenz: modellieren
angabe: |
  Die Abfüllmaschine arbeitet mit $\sigma = 4$ g. Auf welchen Mittelwert $\mu$ muss man sie einstellen, damit nur $2\,\%$ der
  Packungen weniger als 490 g enthalten? (in g, 1 Nachkommastelle)
teile:
  - typ: zahl
    label: '$\mu$'
    einheit: g
    loesung: "490 - invnorm(0.02)*4"
    toleranz: 0.1
    anzeige: '498{,}2'
    fehler:
      - wert: "481.8"
        meldung: Vorzeichenfehler. Der Mittelwert muss **über** 490 g liegen, damit nur wenige Packungen darunter fallen.
hinweise:
  - 'Ansatz: $\Phi\big(\frac{490 - \mu}{4}\big) = 0{,}02$.'
  - '$\Phi(z) = 0{,}02$ für $z \approx -2{,}054$. Setze $\frac{490 - \mu}{4} = -2{,}054$ und löse nach $\mu$.'
loesung: |
  **Ansatz:** Jetzt ist nicht $x$, sondern $\mu$ unbekannt. Bedingung: $P(X < 490) = \Phi\big(\frac{490 - \mu}{4}\big) = 0{,}02$.
  ---
  Tabelle rückwärts: $\Phi(2{,}054) \approx 0{,}98$, also $\Phi(-2{,}054) \approx 0{,}02$. Daher $\frac{490 - \mu}{4} = -2{,}054$.
  ---
  Wir multiplizieren mit $4$ und stellen um: $\mu = 490 + 2{,}054 \cdot 4 \approx 498{,}2$ g.
  ---
  Probe: $z = \frac{490 - 498{,}2}{4} = -2{,}05$ und $\Phi(-2{,}05) \approx 0{,}020$.
```

## Normalapproximation und Streubereiche

```aufgabe
id: wk-approx-check-sigma
titel: Standardabweichung einer Binomialverteilung
niveau: 1
art: check
angabe: |
  $X \sim B(100;\, 0{,}5)$. Berechne $\sigma$.
  (Wiederholung: [16.12 Bernoulli-Kette und Binomialverteilung](/lernen/mathe3/wahrscheinlichkeit/bernoulli-kette-und-binomialverteilung))
teile:
  - typ: zahl
    loesung: "sqrt(100*0.5*0.5)"
    fehler:
      - wert: "25"
        meldung: Das ist die Varianz $np(1-p)$. Die Standardabweichung ist ihre Wurzel.
loesung: |
  $\sigma = \sqrt{np(1-p)} = \sqrt{100 \cdot 0{,}5 \cdot 0{,}5}$.
  ---
  $\sqrt{25} = 5$.
```

Bei großem $n$ wird die Binomialformel mühsam. Wie wahrscheinlich sind bei 600 Würfen zwischen 90 und 110 Sechsen?
Das wären 21 Summanden mit riesigen Binomialkoeffizienten. Zum Glück sieht die Binomialverteilung für großes $n$
aus wie eine Glockenkurve. Dann darf man mit der Normalverteilung rechnen.

### Die Binomialverteilung wird zur Glocke

```plot
x: [7, 33]
y: [0, 0.13]
achsen: { x: "k", y: "P(X = k)" }
balken:
  - { x: 10, y: "binompdf(50, 0.4, 10)" }
  - { x: 11, y: "binompdf(50, 0.4, 11)" }
  - { x: 12, y: "binompdf(50, 0.4, 12)" }
  - { x: 13, y: "binompdf(50, 0.4, 13)" }
  - { x: 14, y: "binompdf(50, 0.4, 14)" }
  - { x: 15, y: "binompdf(50, 0.4, 15)" }
  - { x: 16, y: "binompdf(50, 0.4, 16)" }
  - { x: 17, y: "binompdf(50, 0.4, 17)" }
  - { x: 18, y: "binompdf(50, 0.4, 18)" }
  - { x: 19, y: "binompdf(50, 0.4, 19)" }
  - { x: 20, y: "binompdf(50, 0.4, 20)" }
  - { x: 21, y: "binompdf(50, 0.4, 21)" }
  - { x: 22, y: "binompdf(50, 0.4, 22)" }
  - { x: 23, y: "binompdf(50, 0.4, 23)" }
  - { x: 24, y: "binompdf(50, 0.4, 24)" }
  - { x: 25, y: "binompdf(50, 0.4, 25)" }
  - { x: 26, y: "binompdf(50, 0.4, 26)" }
  - { x: 27, y: "binompdf(50, 0.4, 27)" }
  - { x: 28, y: "binompdf(50, 0.4, 28)" }
  - { x: 29, y: "binompdf(50, 0.4, 29)" }
  - { x: 30, y: "binompdf(50, 0.4, 30)" }
graphen:
  - { f: "exp(-(x-20)^2/24)/sqrt(24*pi)", label: "N(20; 12)", farbe: 1 }
beschriftung: "Binomialverteilung B(50; 0,4) als Balken, darüber die Dichte der Normalverteilung mit μ = 20 und σ² = 12. Die Kurve geht fast genau durch die Mitten der Balkenoberkanten."
```

:::satz[Satz von de Moivre und Laplace (Normalapproximation)]
Ist $X \sim B(n;\, p)$ und $n$ groß, dann ist $X$ näherungsweise normalverteilt mit
$$\mu = n p \qquad \text{und} \qquad \sigma = \sqrt{n p (1 - p)}.$$
Mit **Stetigkeitskorrektur** gilt für ganze Zahlen $a \le b$:
$$P(a \le X \le b) \approx \Phi\!\left(\frac{b + 0{,}5 - \mu}{\sigma}\right) - \Phi\!\left(\frac{a - 0{,}5 - \mu}{\sigma}\right).$$
:::

**Wann ist $n$ „groß genug“?** Eine übliche Faustregel lautet $\sigma^2 = np(1 - p) > 9$. Manche Schulbücher
verwenden stattdessen die Bedingung $np \ge 5$ **und** $n(1 - p) \ge 5$. Beide Regeln verfolgen dasselbe Ziel: Die Verteilung
darf nicht zu schief sein, also müssen im Mittel genug Treffer **und** genug Nieten vorkommen. Eine Garantie ist
keine der Regeln. Weit draußen am Rand der Verteilung und bei $p$ nahe $0$ oder $1$ wird die Näherung schlechter.

**Warum $\pm 0{,}5$?** Der Balken bei $k$ hat die Breite $1$ und reicht von $k - 0{,}5$ bis $k + 0{,}5$. Willst du die
Balken von $a$ bis $b$ durch eine Fläche unter der Glockenkurve ersetzen, musst du von $a - 0{,}5$ bis $b + 0{,}5$
integrieren. Ohne Korrektur verlierst du an beiden Enden je einen halben Balken.

:::beispiel[600 Würfe]
Ein Würfel wird 600-mal geworfen. $X$ sei die Anzahl der Sechsen, also $X \sim B(600;\, \tfrac16)$.

1. **Kennzahlen:** $\mu = 600 \cdot \tfrac16 = 100$ und $\sigma^2 = 600 \cdot \tfrac16 \cdot \tfrac56 = \tfrac{250}{3} \approx 83{,}3$. Das ist größer als $9$, die Faustregel ist erfüllt. $\sigma \approx 9{,}129$.
2. **Grenzen korrigieren:** „90 bis 110“ wird zu $89{,}5$ bis $110{,}5$.
3. **Standardisieren:** $\frac{110{,}5 - 100}{9{,}129} \approx 1{,}150$ und $\frac{89{,}5 - 100}{9{,}129} \approx -1{,}150$.
4. **Ablesen:** $P(90 \le X \le 110) \approx \Phi(1{,}150) - \Phi(-1{,}150) = 2\Phi(1{,}150) - 1 \approx 0{,}750$.

Der exakte Binomialwert ist $0{,}7501$. Die Näherung ist also hervorragend.
:::

:::achtung[Stetigkeitskorrektur in die falsche Richtung]
Gesucht ist $P(X \ge 110)$ bei 600 Würfen. Eine typische falsche Rechnung:
$$P(X \ge 110) \approx 1 - \Phi\!\left(\frac{110{,}5 - 100}{9{,}129}\right) \approx 0{,}125. \qquad \text{(falsch)}$$
Der Balken bei $110$ gehört zum Ereignis. Er beginnt bei $109{,}5$, also muss die Fläche dort beginnen. Richtig ist
$1 - \Phi\big(\frac{109{,}5 - 100}{9{,}129}\big) \approx 0{,}149$, der exakte Wert ist $0{,}1492$. Merke: Die Korrektur
schiebt jede Grenze so, dass ihr eigener Balken **ganz drin** liegt, wenn er dazugehört, und **ganz draußen**, wenn nicht.
:::

:::achtung[Faustregel nicht geprüft]
$X \sim B(1000;\, 0{,}005)$. Gesucht ist $P(X = 0)$. Eine typische falsche Rechnung mit der Normalverteilung:
$$P(X = 0) \approx \Phi\!\left(\frac{0{,}5 - 5}{\sqrt{4{,}975}}\right) \approx 0{,}022. \qquad \text{(falsch)}$$
Hier ist $\sigma^2 = 1000 \cdot 0{,}005 \cdot 0{,}995 \approx 4{,}98 < 9$. Trotz großem $n$ ist die Verteilung sehr schief,
weil $p$ winzig ist. Der exakte Wert $0{,}995^{1000} \approx 0{,}0067$ ist nur ein Drittel davon. Prüfe die Faustregel immer zuerst.
:::

```aufgabe
id: wk-approx-check-widget
titel: Was passiert bei größerem n?
niveau: 1
art: check
angabe: |
  Im Widget unten liegt über $B(50;\, 0{,}4)$ die passende Glockenkurve. Was erwartest du, wenn du $n$ auf $200$ erhöhst?
teile:
  - typ: auswahl
    optionen:
      - 'Die Balken passen noch besser zur Kurve, und die Verteilung wird breiter.'
      - 'Die Balken passen schlechter, weil es mehr Balken gibt.'
      - 'Die Verteilung wird schmaler.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Mehr Balken bedeuten, dass jeder einzelne Balken im Verhältnis schmaler ist. Die Treppe schmiegt sich dann besser an die Kurve.
      - wert: 2
        meldung: '$\sigma = \sqrt{np(1-p)}$ wächst mit $n$. Die Verteilung wird also breiter, nicht schmaler.'
loesung: |
  Mit wachsendem $n$ wird die Binomialverteilung immer symmetrischer und glockenförmiger.
  ---
  Gleichzeitig wächst $\sigma = \sqrt{np(1-p)}$, die Verteilung wird breiter. Bei $n = 200$ ist $\sigma \approx 6{,}9$ statt $3{,}5$.
```

```widget
name: binomial
titel: Binomialverteilung und Normalkurve
props:
  n: 50
  p: 0.4
  bereich: [15, 25]
  normal: true
```

### Streubereiche: Wo liegt die Trefferzahl mit 95 Prozent Sicherheit?

Oft fragt man umgekehrt: In welchem Bereich um den Erwartungswert wird die Trefferzahl **mit großer
Wahrscheinlichkeit** liegen? So ein Bereich heißt **Streubereich** oder **Prognoseintervall**. Die σ-Regeln der
Normalverteilung liefern ihn sofort.

:::satz[Streubereich einer binomialverteilten Größe]
Ist $X \sim B(n;\, p)$ und die Faustregel $np(1-p) > 9$ erfüllt, dann liegt $X$ mit etwa $95\,\%$ Wahrscheinlichkeit im Intervall
$$\big[\mu - 1{,}96\,\sigma;\ \mu + 1{,}96\,\sigma\big] \qquad \text{mit } \mu = np,\ \sigma = \sqrt{np(1-p)}.$$
Für die **relative Häufigkeit** $h = \frac{X}{n}$ heißt das: $h$ liegt mit etwa $95\,\%$ Wahrscheinlichkeit in
$$\left[p - 1{,}96\sqrt{\tfrac{p(1-p)}{n}};\ p + 1{,}96\sqrt{\tfrac{p(1-p)}{n}}\right].$$
:::

Für die zweite Formel teilt man das erste Intervall durch $n$. Dabei wird aus $\frac{\sigma}{n}$ der Ausdruck
$\sqrt{\frac{p(1-p)}{n}}$. Das $n$ steht unter der Wurzel im **Nenner**. Viermal so viele Versuche machen den
Streubereich der relativen Häufigkeit also nur halb so breit. Dieses „Wurzel-$n$-Gesetz“ sagt genauer als das
Gesetz der großen Zahlen, wie schnell sich die relative Häufigkeit einpendelt. In [Kapitel 17, Konfidenzintervall für einen Anteil](/lernen/mathe3/statistik/konfidenzintervall-fuer-einen-anteil) kehrt es beim Konfidenzintervall wieder.

:::beispiel[Wie viele Sechsen sind normal?]
Bei 600 Würfen ist $\mu = 100$ und $\sigma \approx 9{,}129$. Der $95\,\%$-Streubereich ist
$$\big[100 - 1{,}96 \cdot 9{,}129;\ 100 + 1{,}96 \cdot 9{,}129\big] \approx [82{,}1;\ 117{,}9].$$
Mit etwa $95\,\%$ Wahrscheinlichkeit fallen also zwischen 83 und 117 Sechsen. Wer 130 Sechsen wirft, hat ein sehr
ungewöhnliches Ergebnis. Das ist ein Hinweis darauf, dass der Würfel vielleicht nicht fair ist.

**Für die relative Häufigkeit:** Eine Umfrage befragt $n = 1000$ Personen. In der Bevölkerung haben $30\,\%$ eine
bestimmte Meinung. Dann liegt der Anteil in der Stichprobe mit etwa $95\,\%$ Wahrscheinlichkeit in
$$0{,}3 \pm 1{,}96 \cdot \sqrt{\tfrac{0{,}3 \cdot 0{,}7}{1000}} \approx 0{,}3 \pm 0{,}028, \quad \text{also zwischen } 27{,}2\,\% \text{ und } 32{,}8\,\%.$$
:::

:::merke[Normalapproximation in fünf Schritten]
1. **Modell:** $X \sim B(n;\, p)$ begründen.
2. **Faustregel prüfen:** $np(1-p) > 9$.
3. **Kennzahlen:** $\mu = np$, $\sigma = \sqrt{np(1-p)}$.
4. **Grenzen korrigieren:** Jede Grenze um $0{,}5$ so verschieben, dass ihr Balken richtig drin oder draußen liegt.
5. **Standardisieren und ablesen.**

Streubereich mit $95\,\%$: $\mu \pm 1{,}96\,\sigma$. Für die relative Häufigkeit: $p \pm 1{,}96\sqrt{p(1-p)/n}$.
:::

```aufgabe
id: wk-approx-faustregel
titel: Ist die Näherung erlaubt?
niveau: 1
lernziel: 9
kompetenz: verstehen
angabe: |
  Prüfe die Faustregel $np(1-p) > 9$ für $X \sim B(1000;\, 0{,}005)$.
  a) Berechne $np(1-p)$. b) Darf man mit der Normalverteilung nähern?
teile:
  - typ: zahl
    label: 'a) $np(1-p)$'
    loesung: "1000*0.005*0.995"
    anzeige: '4{,}975'
    fehler:
      - wert: "5"
        meldung: Das ist nur $np$. Für die Faustregel brauchst du noch den Faktor $1 - p = 0{,}995$.
  - typ: auswahl
    label: 'b)'
    optionen: ['Ja, denn $n = 1000$ ist groß.', 'Nein, denn $np(1-p) < 9$.']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Ein großes $n$ allein reicht nicht. Bei sehr kleinem $p$ ist die Verteilung trotzdem schief. Entscheidend ist $np(1-p)$.
hinweise:
  - 'Setze $n = 1000$ und $p = 0{,}005$ ein.'
loesung: |
  **Ansatz:** Faustregel $np(1-p) > 9$ prüfen.
  ---
  a) $1000 \cdot 0{,}005 \cdot 0{,}995 = 4{,}975$.
  ---
  b) $4{,}975 < 9$, die Faustregel ist verletzt. Trotz großem $n$ ist $p$ so klein, dass im Mittel nur 5 Treffer vorkommen. Die Verteilung ist dann deutlich schief.
```

```aufgabe
id: wk-approx-gefuehrt
titel: Münzwürfe nähern
niveau: 1
lernziel: 9
kompetenz: rechnen
angabe: |
  Eine faire Münze wird 100-mal geworfen. $X$ sei die Anzahl „Kopf“. Berechne $P(X \le 45)$ näherungsweise mit der
  Normalverteilung und Stetigkeitskorrektur. (4 Nachkommastellen)
teile:
  - typ: zahl
    loesung: "normcdf(45.5, 50, 5)"
    toleranz: 0.001
    anzeige: '0{,}1841'
    fehler:
      - wert: "normcdf(45, 50, 5)"
        meldung: Die Stetigkeitskorrektur fehlt. Der Balken bei 45 reicht bis $45{,}5$ und gehört ganz dazu.
      - wert: "normcdf(44.5, 50, 5)"
        meldung: Korrektur in die falsche Richtung. Bei „höchstens 45“ gehört der Balken bei 45 dazu, also schiebst du die Grenze auf $45{,}5$.
hinweise:
  - '$\mu = 50$, $\sigma = 5$. Bei „höchstens 45“ wird die Grenze auf $45{,}5$ geschoben.'
gefuehrt:
  - text: Berechne $\mu$.
    teil: { typ: zahl, loesung: "100*0.5" }
    erklaerung: $\mu = np = 50$.
  - text: Berechne $\sigma$.
    teil: { typ: zahl, loesung: "sqrt(100*0.5*0.5)" }
    erklaerung: $\sigma = \sqrt{25} = 5$. Die Faustregel ist mit $25 > 9$ erfüllt.
  - text: Welche Grenze verwendest du mit Stetigkeitskorrektur?
    teil: { typ: zahl, loesung: "45.5" }
    erklaerung: Der Balken bei 45 gehört dazu und endet bei $45{,}5$.
  - text: Berechne den $z$-Wert.
    teil: { typ: zahl, loesung: "(45.5 - 50)/5" }
    erklaerung: $z = \frac{45{,}5 - 50}{5} = -0{,}9$.
  - text: Berechne $\Phi(-0{,}9)$.
    teil: { typ: zahl, loesung: "normcdf(-0.9)", toleranz: 0.001 }
    erklaerung: $\Phi(-0{,}9) = 1 - \Phi(0{,}9) \approx 1 - 0{,}8159 = 0{,}1841$.
loesung: |
  **Ansatz:** $X \sim B(100;\, 0{,}5)$. Die Faustregel ist mit $np(1-p) = 25 > 9$ erfüllt. Also Normalapproximation mit $\mu = 50$ und $\sigma = 5$.
  ---
  Stetigkeitskorrektur: $P(X \le 45) \approx \Phi\big(\frac{45{,}5 - 50}{5}\big) = \Phi(-0{,}9)$.
  ---
  $\Phi(-0{,}9) = 1 - \Phi(0{,}9) \approx 0{,}1841$. Der exakte Binomialwert ist ebenfalls $0{,}1841$.
```

```aufgabe
id: wk-approx-umfrage
titel: Mobile Zugriffe
niveau: 2
lernziel: 9
kompetenz: anwenden
angabe: |
  $30\,\%$ aller Zugriffe auf einen Webserver kommen von Mobilgeräten. Es werden 500 unabhängige Zugriffe betrachtet,
  $X$ sei die Anzahl der mobilen Zugriffe.
  a) Prüfe die Faustregel und gib $\mu$ und $\sigma$ an (2 Nachkommastellen).
  b) Berechne $P(X > 160)$ näherungsweise mit der Normalverteilung und Stetigkeitskorrektur (3 Nachkommastellen).
teile:
  - typ: zahl
    label: 'a) $\mu$'
    loesung: "500*0.3"
    fehler:
      - wert: "0.3"
        meldung: Das ist die Wahrscheinlichkeit für **einen** Zugriff. Der Erwartungswert ist $np$.
  - typ: zahl
    label: 'a) $\sigma$'
    loesung: "sqrt(500*0.3*0.7)"
    toleranz: 0.005
    anzeige: '10{,}25'
    fehler:
      - wert: "105"
        meldung: Das ist die Varianz. Die Standardabweichung ist ihre Wurzel.
  - typ: zahl
    label: 'b) $P(X > 160)$'
    loesung: "1 - normcdf(160.5, 150, sqrt(105))"
    toleranz: 0.002
    anzeige: '0{,}153'
    fehler:
      - wert: "1 - normcdf(159.5, 150, sqrt(105))"
        meldung: „Mehr als 160“ heißt $X \ge 161$. Der Balken bei 160 gehört nicht dazu, die Grenze liegt also bei $160{,}5$.
      - wert: "normcdf(160.5, 150, sqrt(105))"
        meldung: Das ist $P(X \le 160)$. Für „mehr als“ brauchst du die Fläche rechts.
hinweise:
  - '$\sigma^2 = np(1-p) = 105 > 9$.'
  - '„Mehr als 160“ heißt $X \ge 161$, also Grenze $160{,}5$ und Fläche rechts davon.'
loesung: |
  **Ansatz:** $X \sim B(500;\, 0{,}3)$, weil die Zugriffe unabhängig sind und jeder mit $0{,}3$ mobil ist.
  ---
  a) $\mu = 500 \cdot 0{,}3 = 150$ und $\sigma^2 = 500 \cdot 0{,}3 \cdot 0{,}7 = 105 > 9$. Die Faustregel ist erfüllt, $\sigma = \sqrt{105} \approx 10{,}25$.
  ---
  b) $P(X > 160) = 1 - P(X \le 160) \approx 1 - \Phi\big(\frac{160{,}5 - 150}{10{,}25}\big) = 1 - \Phi(1{,}02) \approx 1 - 0{,}8461 = 0{,}1539$.
  ---
  Mit ungerundetem $z = 1{,}0247$ ergibt sich $0{,}1528$. Der exakte Binomialwert ist ebenfalls $0{,}1528$.
```

```aufgabe
id: wk-approx-streubereich
titel: Streubereich für Sechsen
niveau: 2
lernziel: 9
kompetenz: rechnen
angabe: |
  Ein fairer Würfel wird 1200-mal geworfen. Gib den $95\,\%$-Streubereich $[\mu - 1{,}96\sigma;\ \mu + 1{,}96\sigma]$ für die
  Anzahl der Sechsen an. (Grenzen auf 1 Nachkommastelle)
teile:
  - typ: zahl
    label: 'untere Grenze'
    loesung: "200 - 1.96*sqrt(1200*1/6*5/6)"
    toleranz: 0.1
    anzeige: '174{,}7'
    fehler:
      - wert: "200 - 1.96*1200*1/6*5/6"
        meldung: Du hast mit der Varianz statt mit der Standardabweichung gerechnet. Zieh zuerst die Wurzel.
      - wert: "200 - sqrt(1200*1/6*5/6)"
        meldung: Das ist nur $\mu - \sigma$, also etwa $68\,\%$. Für $95\,\%$ brauchst du $1{,}96\,\sigma$.
  - typ: zahl
    label: 'obere Grenze'
    loesung: "200 + 1.96*sqrt(1200*1/6*5/6)"
    toleranz: 0.1
    anzeige: '225{,}3'
    fehler:
      - wert: "200 + sqrt(1200*1/6*5/6)"
        meldung: Das ist nur $\mu + \sigma$. Für $95\,\%$ brauchst du $1{,}96\,\sigma$.
hinweise:
  - '$\mu = 1200 \cdot \tfrac16$ und $\sigma = \sqrt{1200 \cdot \tfrac16 \cdot \tfrac56}$.'
  - 'Dann $\mu \pm 1{,}96\,\sigma$ ausrechnen.'
loesung: |
  **Ansatz:** $X \sim B(1200;\, \tfrac16)$. Die Faustregel ist mit $\sigma^2 = \tfrac{500}{3} \approx 166{,}7 > 9$ erfüllt.
  ---
  $\mu = 200$ und $\sigma = \sqrt{166{,}7} \approx 12{,}91$.
  ---
  $200 \pm 1{,}96 \cdot 12{,}91 \approx 200 \pm 25{,}3$, also $[174{,}7;\ 225{,}3]$.
  ---
  Deutung: In etwa $95\,\%$ aller Serien zu 1200 Würfen fallen zwischen 175 und 225 Sechsen.
```

```aufgabe
id: wk-approx-relativ
titel: Wie genau ist eine Umfrage?
niveau: 2
lernziel: 9
kompetenz: anwenden
angabe: |
  Bei einer Abstimmung sind genau die Hälfte der Wahlberechtigten für einen Vorschlag ($p = 0{,}5$). Eine Umfrage befragt $n$ zufällig gewählte Personen.
  a) Für $n = 400$: Berechne die halbe Breite $1{,}96\sqrt{p(1-p)/n}$ des $95\,\%$-Streubereichs der relativen Häufigkeit.
  b) Wie viele Personen muss man mindestens befragen, damit die halbe Breite höchstens $0{,}02$ ist?
teile:
  - typ: zahl
    label: 'a) halbe Breite'
    loesung: "1.96*sqrt(0.25/400)"
    anzeige: '0{,}049'
    fehler:
      - wert: "1.96*0.25/400"
        meldung: Die Wurzel fehlt. Es heißt $\sqrt{p(1-p)/n}$, also $\sqrt{0{,}25/400} = 0{,}025$.
  - typ: zahl
    label: 'b) Mindestanzahl $n$'
    loesung: "ceil((1.96/0.02)^2*0.25)"
    fehler:
      - wert: "49"
        meldung: Du hast vermutlich $\tfrac{1{,}96}{0{,}02}$ ohne Quadrat genommen. Löse $1{,}96\sqrt{0{,}25/n} \le 0{,}02$ sauber nach $n$ auf, dabei wird quadriert.
hinweise:
  - 'Bei a): $p(1-p) = 0{,}25$.'
  - 'Bei b): $1{,}96 \cdot \sqrt{0{,}25/n} \le 0{,}02$. Teile durch $1{,}96$, quadriere beide Seiten und löse nach $n$.'
loesung: |
  **Ansatz:** Streubereich der relativen Häufigkeit $p \pm 1{,}96\sqrt{p(1-p)/n}$ mit $p = 0{,}5$.
  ---
  a) $1{,}96 \cdot \sqrt{0{,}25/400} = 1{,}96 \cdot 0{,}025 = 0{,}049$. Die Umfrage trifft also mit $95\,\%$ auf etwa $\pm 5$ Prozentpunkte.
  ---
  b) $1{,}96\sqrt{0{,}25/n} \le 0{,}02$. Wir teilen durch $1{,}96$ und quadrieren: $\tfrac{0{,}25}{n} \le \left(\tfrac{0{,}02}{1{,}96}\right)^2$.
  Umgestellt: $n \ge 0{,}25 \cdot \left(\tfrac{1{,}96}{0{,}02}\right)^2 = 0{,}25 \cdot 9604 = 2401$.
  ---
  Antwort: mindestens 2401 Personen. Für eine knapp zweieinhalbmal so genaue Umfrage ($0{,}049 : 0{,}02 \approx 2{,}45$) braucht man also etwa sechsmal so viele Personen. Das ist das Wurzel-$n$-Gesetz.
```

```reflexion
frage: Warum wird der Streubereich der **Anzahl** $X$ mit wachsendem $n$ breiter, der Streubereich der **relativen Häufigkeit** $h = X/n$ aber schmaler?
antwort: |
  Für die Anzahl ist $\sigma = \sqrt{np(1-p)}$. Sie wächst wie $\sqrt n$, also wird der Bereich in absoluten Zahlen breiter.
  Für den Anteil teilt man durch $n$. Dann ist die Streuung $\frac{\sqrt{np(1-p)}}{n} = \sqrt{\frac{p(1-p)}{n}}$, und die
  wird mit wachsendem $n$ kleiner. In Worten: Bei mehr Würfen schwankt die Zahl der Sechsen absolut stärker, aber im Verhältnis
  zur Wurfzahl immer weniger. Genau das sagt das Gesetz der großen Zahlen.
```

```aufgabe
id: wk-approx-auffaellig
titel: Ist die Münze fair?
niveau: 3
lernziel: 9
kompetenz: begruenden
angabe: |
  Eine Münze zeigt bei 400 Würfen 230-mal „Kopf“.
  a) Gib für eine faire Münze den $95\,\%$-Streubereich der Anzahl „Kopf“ an (Grenzen auf 1 Nachkommastelle).
  b) Berechne für eine faire Münze näherungsweise $P(X \ge 230)$ mit Stetigkeitskorrektur (4 Nachkommastellen).
  c) Spricht das Ergebnis gegen eine faire Münze? Begründe.
teile:
  - typ: zahl
    label: 'a) untere Grenze'
    loesung: "200 - 1.96*sqrt(400*0.25)"
    toleranz: 0.1
    anzeige: '180{,}4'
    fehler:
      - wert: "200 - 1.96*100"
        meldung: Du hast mit der Varianz $100$ statt mit $\sigma = 10$ gerechnet.
  - typ: zahl
    label: 'a) obere Grenze'
    loesung: "200 + 1.96*sqrt(400*0.25)"
    toleranz: 0.1
    anzeige: '219{,}6'
  - typ: zahl
    label: 'b) $P(X \ge 230)$'
    loesung: "1 - normcdf(229.5, 200, 10)"
    toleranz: 0.0001
    anzeige: '0{,}0016'
    fehler:
      - wert: "1 - normcdf(230.5, 200, 10)"
        meldung: Der Balken bei 230 gehört zu „mindestens 230“. Die Fläche beginnt also bei $229{,}5$.
  - typ: text
    label: 'c) Begründung'
    muster: |
      Bei einer fairen Münze liegt die Anzahl „Kopf“ mit etwa $95\,\%$ Wahrscheinlichkeit zwischen 181 und 219. Der beobachtete
      Wert 230 liegt deutlich außerhalb. Mindestens 230-mal Kopf hätte bei einer fairen Münze nur eine Wahrscheinlichkeit von
      etwa $0{,}16\,\%$. Das spricht deutlich gegen eine faire Münze. Ein Beweis ist es nicht, denn auch seltene Ereignisse kommen vor.
      Solche Überlegungen sind die Grundidee eines Hypothesentests.
hinweise:
  - 'Für eine faire Münze ist $X \sim B(400;\, 0{,}5)$ mit $\mu = 200$ und $\sigma = 10$.'
  - 'Für b): $P(X \ge 230) \approx 1 - \Phi\big(\frac{229{,}5 - 200}{10}\big)$.'
loesung: |
  **Ansatz:** Wir nehmen an, die Münze sei fair, und prüfen, wie gut 230 dazu passt. Dann ist $X \sim B(400;\, 0{,}5)$, $\mu = 200$, $\sigma = \sqrt{100} = 10$.
  ---
  a) $200 \pm 1{,}96 \cdot 10 = [180{,}4;\ 219{,}6]$.
  ---
  b) $P(X \ge 230) \approx 1 - \Phi\big(\frac{229{,}5 - 200}{10}\big) = 1 - \Phi(2{,}95) \approx 0{,}0016$.
  ---
  c) 230 liegt außerhalb des Streubereichs, und das Ergebnis wäre bei einer fairen Münze sehr selten. Das spricht gegen Fairness, beweist aber nichts.
```

## Gemischte Wiederholung

In diesem Abschnitt sind die Aufgaben bunt gemischt, auch mit Werkzeugen aus früheren Kapiteln. Das ist
Absicht: In der Prüfung steht nicht dabei, welcher Abschnitt gemeint ist. Bei den ersten drei Aufgaben musst du
nichts rechnen. Du entscheidest nur, welches Verfahren passt. Genau diese Entscheidung ist in der Prüfung oft der schwerste Schritt.

```aufgabe
id: wk-mix-verfahren-modell
titel: Welches Modell passt?
niveau: 2
lernziel: 7
kompetenz: verstehen
angabe: |
  Ordne jeder Frage das passende Werkzeug zu. Du musst nichts ausrechnen.
  a) Ein Test ist bei Kranken zu $95\,\%$ positiv. Eine Person ist positiv. Wie wahrscheinlich ist sie krank?
  b) Aus 12 Glühbirnen, darunter 3 defekte, werden 4 entnommen. Wie wahrscheinlich ist genau eine defekte dabei?
  c) Ein Würfel wird 30-mal geworfen. Wie wahrscheinlich fallen mindestens 8 Sechsen?
teile:
  - typ: auswahl
    label: 'a)'
    optionen: ['Satz von Bayes', 'Binomialverteilung', 'hypergeometrische Verteilung']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Hier wird nichts wiederholt und gezählt. Gegeben ist $P(\text{positiv} \mid \text{krank})$, gefragt ist die umgekehrte Richtung.
      - wert: 2
        meldung: Es wird nicht ohne Zurücklegen gezogen. Gefragt ist eine Umkehrung der Bedingung.
  - typ: auswahl
    label: 'b)'
    optionen: ['Satz von Bayes', 'Binomialverteilung', 'hypergeometrische Verteilung']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Es gibt keine Bedingung, die umgedreht werden soll. Es wird aus einer kleinen Menge gezogen.
      - wert: 1
        meldung: Die Glühbirnen werden nicht zurückgelegt. Bei nur 12 Birnen ändert sich der Anteil defekter nach jedem Zug deutlich.
  - typ: auswahl
    label: 'c)'
    optionen: ['Satz von Bayes', 'Binomialverteilung', 'hypergeometrische Verteilung']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Es soll keine Bedingung umgedreht werden. Gezählt werden Treffer in unabhängigen Würfen.
      - wert: 2
        meldung: Würfeln „verbraucht“ keine Augenzahl. Die Wahrscheinlichkeit $\tfrac16$ bleibt bei jedem Wurf gleich.
hinweise:
  - 'Frag dich: Soll eine Bedingung umgedreht werden? Wird ohne Zurücklegen gezogen? Werden unabhängige Versuche wiederholt?'
  - 'Umdrehen spricht für Bayes, ohne Zurücklegen aus einer kleinen Menge für hypergeometrisch, gleiche unabhängige Versuche für binomial.'
loesung: |
  **Ansatz:** Für jede Frage klären, was gegeben und was gesucht ist.
  ---
  a) Gegeben $P(T \mid K)$, gesucht $P(K \mid T)$: Satz von Bayes.
  ---
  b) Ohne Zurücklegen aus 12 Birnen: hypergeometrisch mit $N = 12$, $M = 3$, $n = 4$.
  ---
  c) 30 unabhängige Würfe mit gleichem $p = \tfrac16$: binomial, $X \sim B(30;\, \tfrac16)$, gesucht $P(X \ge 8)$.
```

```aufgabe
id: wk-mix-verfahren-zaehlen
titel: Welches Zählverfahren passt?
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Welcher Term zählt die Möglichkeiten? Du musst nicht ausrechnen.
  a) Unter 30 Losen werden ein erster, ein zweiter und ein dritter Preis gezogen. Jedes Los kann höchstens einen Preis gewinnen.
  b) Ein Code besteht aus 5 Zeichen, jedes Zeichen ist einer der 26 Buchstaben.
teile:
  - typ: auswahl
    label: 'a)'
    optionen: ['$30 \cdot 29 \cdot 28$', '$\binom{30}{3}$', '$30^3$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Tauschtest. Tauschen der erste und der dritte Preis ihre Gewinnerlose, ist das ein anderes Ergebnis. Die Reihenfolge zählt.
      - wert: 2
        meldung: Nochmal-Test. Ein Los kann nicht zwei Preise gewinnen, also ohne Wiederholung.
  - typ: auswahl
    label: 'b)'
    optionen: ['$26 \cdot 25 \cdot 24 \cdot 23 \cdot 22$', '$\binom{26}{5}$', '$26^5$']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Nochmal-Test. Im Code darf derselbe Buchstabe mehrfach vorkommen, zum Beispiel AABBA.
      - wert: 1
        meldung: Tauschtest. ABCDE und EDCBA sind verschiedene Codes. Die Reihenfolge zählt.
hinweise:
  - 'Mache für jede Situation den Tauschtest (zählt die Reihenfolge?) und den Nochmal-Test (darf sich etwas wiederholen?).'
loesung: |
  **Ansatz:** Entscheidungsbaum mit Tauschtest und Nochmal-Test.
  ---
  a) Reihenfolge zählt, ohne Wiederholung: $30 \cdot 29 \cdot 28 = 24\,360$.
  ---
  b) Reihenfolge zählt, mit Wiederholung: $26^5 = 11\,881\,376$.
```

```aufgabe
id: wk-mix-verfahren-normal
titel: Exakt oder genähert?
niveau: 2
lernziel: 9
kompetenz: verstehen
angabe: |
  Entscheide jeweils, wie du die Wahrscheinlichkeit sinnvoll berechnest. Du musst nichts ausrechnen.
  a) $X \sim B(8;\, 0{,}3)$, gesucht $P(X \le 2)$.
  b) $X \sim B(900;\, 0{,}5)$, gesucht $P(430 \le X \le 470)$.
teile:
  - typ: auswahl
    label: 'a)'
    optionen: ['exakt mit der Binomialformel', 'Normalapproximation mit Stetigkeitskorrektur']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Hier ist $np(1-p) = 1{,}68 < 9$. Die Näherung wäre ungenau. Drei Summanden rechnet man ohnehin schnell exakt.'
  - typ: auswahl
    label: 'b)'
    optionen: ['exakt mit der Binomialformel', 'Normalapproximation mit Stetigkeitskorrektur']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Das wären 41 Summanden mit riesigen Binomialkoeffizienten. Prüfe die Faustregel. Mit $np(1-p) = 225 > 9$ ist die Näherung sehr gut.
hinweise:
  - 'Berechne jeweils $np(1-p)$ und zähle, wie viele Summanden die exakte Rechnung bräuchte.'
loesung: |
  **Ansatz:** Faustregel $np(1-p) > 9$ prüfen und den Aufwand der exakten Rechnung abschätzen.
  ---
  a) $8 \cdot 0{,}3 \cdot 0{,}7 = 1{,}68$. Die Faustregel ist verletzt, und es sind nur drei Summanden. Exakt rechnen.
  ---
  b) $900 \cdot 0{,}25 = 225$. Die Faustregel ist klar erfüllt, exakt wären es 41 Summanden. Normalapproximation mit $\mu = 450$ und $\sigma = 15$.
```

```aufgabe
id: wk-mix-quadratisch
titel: Zwei gleich wahrscheinliche Ereignisse
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Zwei unabhängige Ereignisse $A$ und $B$ haben dieselbe Wahrscheinlichkeit $p$. Es gilt $P(A \cup B) = 0{,}64$. Berechne $p$.
  (Quadratische Gleichungen: [Kapitel 2, Quadratische Gleichungen](/lernen/mathe3/gleichungen/quadratische-gleichungen))
teile:
  - typ: zahl
    loesung: "1 - sqrt(1 - 0.64)"
    anzeige: '0{,}4'
    fehler:
      - wert: "0.32"
        meldung: Du hast $P(A \cup B) = 2p$ gesetzt. Das gilt nur bei unvereinbaren Ereignissen. Hier musst du $P(A \cap B) = p^2$ abziehen.
      - wert: "1.6"
        meldung: Das ist die zweite Lösung der quadratischen Gleichung. Eine Wahrscheinlichkeit kann aber nicht größer als $1$ sein.
hinweise:
  - 'Additionssatz und Unabhängigkeit: $P(A \cup B) = p + p - p \cdot p$.'
  - 'Die Gleichung $2p - p^2 = 0{,}64$ ist quadratisch. Bring alles auf eine Seite und nutze die Lösungsformel.'
loesung: |
  **Ansatz:** Additionssatz, wobei $P(A \cap B) = p^2$ wegen der Unabhängigkeit.
  ---
  $2p - p^2 = 0{,}64$, also $p^2 - 2p + 0{,}64 = 0$.
  ---
  Lösungsformel: $p = 1 \pm \sqrt{1 - 0{,}64} = 1 \pm 0{,}6$. Also $p = 0{,}4$ oder $p = 1{,}6$.
  ---
  Nur $p = 0{,}4$ ist eine Wahrscheinlichkeit. Probe: $0{,}4 + 0{,}4 - 0{,}16 = 0{,}64$.
```

```aufgabe
id: wk-mix-geometrische-reihe
titel: Wer würfelt zuerst eine Sechs?
niveau: 3
lernziel: 2
kompetenz: modellieren
angabe: |
  Anna und Ben würfeln abwechselnd, Anna beginnt. Wer zuerst eine Sechs wirft, gewinnt. Mit welcher Wahrscheinlichkeit gewinnt Anna?
  Gib einen Bruch an. (Unendliche geometrische Reihe: [Kapitel 11, Unendliche Reihen](/lernen/mathe3/grenzwerte-folgen/unendliche-reihen-partialsummen-geometrische-und-harmonische-reihe))
teile:
  - typ: zahl
    loesung: "(1/6)/(1 - (5/6)^2)"
    anzeige: '\tfrac{6}{11}'
    fehler:
      - wert: "1/2"
        meldung: Das Spiel ist nicht symmetrisch. Anna würfelt zuerst und hat deshalb einen kleinen Vorteil.
      - wert: "1/6"
        meldung: Das ist nur die Chance, dass Anna gleich im ersten Wurf gewinnt. Sie kann auch in ihrer zweiten, dritten, … Runde gewinnen.
hinweise:
  - 'Anna gewinnt im 1., 3., 5., … Wurf. Vorher müssen alle Würfe keine Sechs gewesen sein.'
  - 'Die Summe ist $\tfrac16 + \left(\tfrac56\right)^2 \cdot \tfrac16 + \left(\tfrac56\right)^4 \cdot \tfrac16 + \ldots$, eine geometrische Reihe mit $q = \left(\tfrac56\right)^2$.'
loesung: |
  **Ansatz:** Anna gewinnt, wenn die erste Sechs im Wurf 1, 3, 5, … fällt. Diese Fälle sind unvereinbar, also addieren wir.
  ---
  Gewinn im Wurf $2k + 1$: Davor $2k$ Würfe ohne Sechs, dann eine Sechs. Wahrscheinlichkeit $\left(\tfrac{25}{36}\right)^k \cdot \tfrac16$.
  ---
  Geometrische Reihe mit $a = \tfrac16$ und $q = \tfrac{25}{36}$: $\dfrac{a}{1 - q} = \dfrac{1/6}{11/36} = \dfrac{36}{66} = \dfrac{6}{11}$.
  ---
  Kontrolle: $\tfrac{6}{11} \approx 0{,}545$ ist etwas mehr als $\tfrac12$. Das passt zum Vorteil des ersten Wurfs.
```

```aufgabe
id: wk-mix-exponential
titel: Wartezeit mit fallender Dichte
niveau: 2
lernziel: 8
kompetenz: rechnen
angabe: |
  (Vertiefung) Die Zeit $X$ in Minuten bis zum nächsten Anruf in einer Hotline hat die Dichte $f(x) = 0{,}5\,e^{-0{,}5x}$ für $x \ge 0$.
  Berechne $P(X \le 2)$ auf 4 Nachkommastellen. (Integral der Exponentialfunktion: [Kapitel 10, Stammfunktionen](/lernen/mathe3/integralrechnung/stammfunktionen-ableiten-rueckwaerts))
teile:
  - typ: zahl
    loesung: "1 - exp(-1)"
    toleranz: 0.0005
    anzeige: '1 - e^{-1} \approx 0{,}6321'
    fehler:
      - wert: "exp(-1)"
        meldung: Das ist $P(X > 2)$. Die Stammfunktion $-e^{-0{,}5x}$ ergibt an der oberen Grenze $-e^{-1}$, an der unteren $-1$.
      - wert: "0.5*exp(-1)"
        meldung: Das ist der Funktionswert $f(2)$. Eine Wahrscheinlichkeit ist eine Fläche, du musst integrieren.
hinweise:
  - 'Eine Stammfunktion von $0{,}5\,e^{-0{,}5x}$ ist $-e^{-0{,}5x}$. Prüfe das durch Ableiten.'
  - '$P(X \le 2) = \int_0^2 0{,}5\,e^{-0{,}5x}\,\dd x = F(2) - F(0)$.'
loesung: |
  **Ansatz:** Wahrscheinlichkeit als Fläche unter der Dichte von $0$ bis $2$.
  ---
  Stammfunktion: $F(x) = -e^{-0{,}5x}$, denn $F'(x) = -e^{-0{,}5x} \cdot (-0{,}5) = 0{,}5\,e^{-0{,}5x}$ (Kettenregel).
  ---
  $P(X \le 2) = F(2) - F(0) = -e^{-1} - (-1) = 1 - e^{-1} \approx 0{,}6321$.
  ---
  Deutung: In knapp zwei Drittel der Fälle kommt der nächste Anruf innerhalb von 2 Minuten.
```

```aufgabe
id: wk-mix-logarithmus
titel: Ein Passwort erraten
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Ein Angreifer rät bei jedem Versuch unabhängig und trifft mit Wahrscheinlichkeit $10^{-6}$. Wie viele Versuche braucht er mindestens,
  damit er mit mindestens $50\,\%$ Wahrscheinlichkeit mindestens einmal trifft? (Logarithmen: [Kapitel 1, Logarithmen](/lernen/mathe3/zahlen/logarithmen))
teile:
  - typ: zahl
    loesung: "ceil(ln(0.5)/ln(1 - 10^(-6)))"
    toleranz: 1
    anzeige: '693\,147'
    fehler:
      - wert: "500000"
        meldung: Du hast $n \cdot 10^{-6} \ge 0{,}5$ gerechnet. Wahrscheinlichkeiten mehrerer Versuche darf man nicht addieren. Rechne über das Gegenereignis.
hinweise:
  - 'Ansatz: $1 - (1 - 10^{-6})^n \ge 0{,}5$.'
  - 'Umformen zu $(1 - 10^{-6})^n \le 0{,}5$ und logarithmieren. Der Logarithmus von $1 - 10^{-6}$ ist negativ.'
loesung: |
  **Ansatz:** „Mindestens einmal“ über das Gegenereignis: $1 - (1 - 10^{-6})^n \ge 0{,}5$.
  ---
  Umformen: $(1 - 10^{-6})^n \le 0{,}5$. Logarithmieren und durch die negative Zahl $\ln(1 - 10^{-6})$ teilen:
  $n \ge \dfrac{\ln 0{,}5}{\ln(1 - 10^{-6})} \approx 693\,146{,}8$.
  ---
  Aufrunden: $n = 693\,147$ Versuche. Das ist deutlich mehr als die naive Schätzung $500\,000$. Die naive Rechnung addiert Wahrscheinlichkeiten und zählt dabei Fälle mit mehreren Treffern mehrfach.
```

```aufgabe
id: wk-mix-maximum
titel: Wann ist ein einziger Treffer am wahrscheinlichsten?
niveau: 3
lernziel: 6
kompetenz: begruenden
angabe: |
  $X \sim B(10;\, p)$. Die Wahrscheinlichkeit für genau einen Treffer ist $f(p) = 10\,p\,(1-p)^9$ für $0 \le p \le 1$.
  a) Für welches $p$ ist $f(p)$ maximal? b) Wie groß ist dieses Maximum (4 Nachkommastellen)? c) Deute das Ergebnis.
  (Extremwerte: [Kapitel 9, Monotonie und Extremstellen](/lernen/mathe3/differentialrechnung/monotonie-und-extremstellen))
teile:
  - typ: zahl
    label: 'a) $p$'
    loesung: "1/10"
    anzeige: '0{,}1'
    fehler:
      - wert: "0.5"
        meldung: Bei $p = 0{,}5$ erwartet man 5 Treffer. Dann ist genau einer eher selten. Leite $f$ mit der Produkt- und Kettenregel ab.
  - typ: zahl
    label: 'b) $f(p)$'
    loesung: "10*0.1*0.9^9"
    toleranz: 0.0005
    anzeige: '0{,}3874'
  - typ: text
    label: 'c) Deutung'
    muster: |
      Der Wert $p = \tfrac{1}{10}$ ist genau der, bei dem der Erwartungswert $np = 1$ ist. Genau ein Treffer ist also dann am
      wahrscheinlichsten, wenn man im Mittel genau einen Treffer erwartet. Selbst dann tritt er nur mit etwa $39\,\%$ ein.
hinweise:
  - 'Produktregel: $f''(p) = 10(1-p)^9 + 10p \cdot 9(1-p)^8 \cdot (-1)$.'
  - 'Klammere $10(1-p)^8$ aus: $f''(p) = 10(1-p)^8 \cdot (1 - p - 9p)$. Setze den letzten Faktor gleich $0$.'
loesung: |
  **Ansatz:** Extremwertaufgabe. $f'(p) = 0$ setzen und prüfen, dass ein Maximum vorliegt.
  ---
  $f'(p) = 10(1-p)^9 - 90p(1-p)^8 = 10(1-p)^8 \cdot (1 - 10p)$.
  ---
  Für $0 < p < 1$ ist $10(1-p)^8 > 0$. Also ist $f'(p) = 0$ genau bei $p = 0{,}1$. Links davon ist $f' > 0$, rechts $f' < 0$: ein Maximum.
  ---
  $f(0{,}1) = 10 \cdot 0{,}1 \cdot 0{,}9^9 \approx 0{,}3874$. Bei $p = 0{,}1$ ist $np = 1$: Man erwartet im Mittel genau einen Treffer.
```

```aufgabe
id: wk-mix-erwartung-binom
titel: Gewinnspiel mit Erwartungswert
niveau: 2
lernziel: 5
kompetenz: modellieren
angabe: |
  Bei einem Spiel dreht man ein Glücksrad viermal. Es zeigt jedes Mal unabhängig mit Wahrscheinlichkeit $0{,}25$ „Stern“.
  Für jeden Stern gibt es $2$ Euro, der Einsatz beträgt $3$ Euro. $G$ sei der Reingewinn.
  a) Berechne den erwarteten Reingewinn $E(G)$. b) Mit welcher Wahrscheinlichkeit macht man Gewinn, also $G > 0$? (4 Nachkommastellen)
teile:
  - typ: zahl
    label: 'a) $E(G)$ in Euro'
    loesung: "2*4*0.25 - 3"
    fehler:
      - wert: "2"
        meldung: Das ist die erwartete **Auszahlung** $2 \cdot E(X)$. Der Einsatz von $3$ Euro muss noch abgezogen werden.
  - typ: zahl
    label: 'b) $P(G > 0)$'
    loesung: "1 - binomcdf(4, 0.25, 1)"
    toleranz: 0.0005
    anzeige: '0{,}2617'
    fehler:
      - wert: "1 - binomcdf(4, 0.25, 0)"
        meldung: 'Mit einem Stern bekommst du $2$ Euro, hast aber $3$ Euro eingesetzt. Das ist noch Verlust. Gewinn gibt es erst ab zwei Sternen.'
hinweise:
  - '$X$ = Anzahl der Sterne, $X \sim B(4;\, 0{,}25)$. Dann ist $G = 2X - 3$.'
  - 'Für b): $G > 0$ heißt $2X > 3$, also $X \ge 2$.'
loesung: |
  **Ansatz:** $X \sim B(4;\, 0{,}25)$ zählt die Sterne. Der Reingewinn ist die lineare Transformation $G = 2X - 3$.
  ---
  a) $E(X) = 4 \cdot 0{,}25 = 1$, also $E(G) = 2 \cdot 1 - 3 = -1$ Euro. Das Spiel ist ungünstig.
  ---
  b) $G > 0$ heißt $X \ge 2$. $P(X \le 1) = 0{,}75^4 + 4 \cdot 0{,}25 \cdot 0{,}75^3 \approx 0{,}3164 + 0{,}4219 = 0{,}7383$.
  Also $P(X \ge 2) \approx 0{,}2617$.
```

## Prüfungsaufgaben

Die folgenden Aufgaben haben das Niveau der schriftlichen Prüfung. Die ersten beiden sind abgewandelte Varianten
von Musterprüfungsaufgaben. Die Originale mit ihren Zahlen findest du in den Prüfungssimulationen. Plane pro Aufgabe
die angegebene Zeit ein und schreib den Lösungsweg so auf, wie du ihn abgeben würdest: Modell mit Begründung, Ansatz,
Rechnung und Antwortsatz.

```aufgabe
id: wk-pruefung-karigl
titel: Raten beim Multiple-Choice-Test
niveau: 3
punkte: 10
lernziel: 6
kompetenz: anwenden
quelle: nach Musterprüfung Karigl, Aufgabe 5 (abgewandelt)
angabe: |
  (Zeitrichtwert: 15 Minuten) Eine Studentin muss bei einem Test 10 Fragen beantworten. Zu jeder Frage gibt es drei Antworten,
  von denen genau eine richtig ist. Sie hat sich nicht vorbereitet und kreuzt bei jeder Frage zufällig an.
  Wie groß ist die Wahrscheinlichkeit, dass sie auf diese Weise
  a) keine einzige Frage, b) mindestens 3 Fragen, c) mehr als 8 Fragen richtig beantwortet?
  Gib a) und b) auf 4 Nachkommastellen an, c) auf 3 gültige Stellen. Begründe das verwendete Modell.
teile:
  - typ: zahl
    label: 'a) $P(X = 0)$'
    loesung: "binompdf(10, 1/3, 0)"
    toleranz: 0.0005
    anzeige: '0{,}0173'
    fehler:
      - wert: "1/3^10"
        meldung: Das wäre „alle 10 richtig“. Keine richtige Antwort heißt, jede Frage ist mit $\tfrac23$ falsch.
  - typ: zahl
    label: 'b) $P(X \ge 3)$'
    loesung: "1 - binomcdf(10, 1/3, 2)"
    toleranz: 0.0005
    anzeige: '0{,}7009'
    fehler:
      - wert: "1 - binomcdf(10, 1/3, 3)"
        meldung: Die $3$ gehört zu „mindestens 3“. Das Gegenereignis ist $X \le 2$.
  - typ: zahl
    label: 'c) $P(X > 8)$'
    loesung: "binompdf(10, 1/3, 9) + binompdf(10, 1/3, 10)"
    anzeige: '3{,}56 \cdot 10^{-4}'
    fehler:
      - wert: "binompdf(10, 1/3, 9)"
        meldung: „Mehr als 8“ heißt 9 **oder** 10. Der Fall „alle 10 richtig“ fehlt noch.
hinweise:
  - '$X$ = Anzahl richtiger Antworten. Begründe, warum $X \sim B(10;\, \tfrac13)$ gilt.'
  - '„Mindestens 3“: Gegenereignis „höchstens 2“, also $X \in \{0, 1, 2\}$. „Mehr als 8“ heißt $X = 9$ oder $X = 10$.'
loesung: |
  **Modell:** Jede Frage ist ein Bernoulli-Experiment mit Treffer „richtig“ und $p = \tfrac13$. Die Fragen werden unabhängig geraten,
  und $p$ ist bei jeder Frage gleich. $X$ = Anzahl richtiger Antworten, also $X \sim B(10;\, \tfrac13)$.
  ---
  **a)** $P(X = 0) = \left(\tfrac23\right)^{10} \approx 0{,}0173$.
  ---
  **b)** $P(X = 1) = 10 \cdot \tfrac13 \cdot \left(\tfrac23\right)^9 \approx 0{,}0867$ und $P(X = 2) = 45 \cdot \left(\tfrac13\right)^2 \cdot \left(\tfrac23\right)^8 \approx 0{,}1951$.
  $$P(X \ge 3) = 1 - P(X \le 2) \approx 1 - (0{,}0173 + 0{,}0867 + 0{,}1951) = 0{,}7009.$$
  ---
  **c)** $P(X > 8) = P(X = 9) + P(X = 10) = 10 \cdot \left(\tfrac13\right)^9 \cdot \tfrac23 + \left(\tfrac13\right)^{10} \approx 3{,}39 \cdot 10^{-4} + 0{,}17 \cdot 10^{-4} \approx 3{,}56 \cdot 10^{-4}$.
  ---
  **Antwortsatz:** Mit rund $1{,}7\,\%$ ist keine Antwort richtig, mit rund $70\,\%$ mindestens drei. Mehr als acht richtige Antworten
  sind durch Raten praktisch ausgeschlossen. Zur Plausibilität: $E(X) = \tfrac{10}{3} \approx 3{,}3$.
```

```aufgabe
id: wk-pruefung-sk
titel: Prüfungsfragen und Würfel
niveau: 3
punkte: 8
lernziel: 1
kompetenz: anwenden
quelle: nach Musterprüfung Schranz-Kirlinger 2023, Beispiel 4.2 (abgewandelt)
angabe: |
  (Zeitrichtwert: 14 Minuten)
  a) Für eine mündliche Prüfung werden aus einem Katalog von 40 Fragen sechs Fragen ausgewählt. Die Reihenfolge spielt keine Rolle.
  Auf wie viele Arten ist das möglich?

  b) Ein Würfel wird achtmal geworfen. Wie groß ist die Wahrscheinlichkeit, dass die Augenzahl 6
  (i) genau zweimal, (ii) höchstens siebenmal, (iii) mindestens einmal und höchstens siebenmal kommt?
  (4 Nachkommastellen, bei (ii) 6 Nachkommastellen)
teile:
  - typ: zahl
    label: 'a) Anzahl'
    loesung: "binom(40, 6)"
    anzeige: '3\,838\,380'
    fehler:
      - wert: "40*39*38*37*36*35"
        meldung: Das zählt geordnet. Die Reihenfolge der Fragen spielt laut Angabe keine Rolle, also teilst du noch durch $6!$.
  - typ: zahl
    label: 'b) (i) $P(X = 2)$'
    loesung: "binompdf(8, 1/6, 2)"
    toleranz: 0.0005
    anzeige: '0{,}2605'
    fehler:
      - wert: "(1/6)^2*(5/6)^6"
        meldung: Das ist nur ein Pfad. Die beiden Sechsen können an $\binom82 = 28$ verschiedenen Stellen liegen.
  - typ: zahl
    label: 'b) (ii) $P(X \le 7)$'
    loesung: "1 - (1/6)^8"
    toleranz: 0.000001
    anzeige: '0{,}999999'
    fehler:
      - wert: "(5/6)^8"
        meldung: Das ist „keine Sechs“. „Höchstens siebenmal“ schließt nur den Fall „achtmal Sechs“ aus.
  - typ: zahl
    label: 'b) (iii) $P(1 \le X \le 7)$'
    loesung: "1 - binompdf(8, 1/6, 0) - binompdf(8, 1/6, 8)"
    toleranz: 0.0005
    anzeige: '0{,}7674'
    fehler:
      - wert: "1 - (1/6)^8"
        meldung: Das ist nur „höchstens siebenmal“ aus (ii). Für „mindestens einmal“ musst du zusätzlich $P(X = 0) = \left(\tfrac56\right)^8$ abziehen.
hinweise:
  - 'a) Reihenfolge egal, keine Wiederholung.'
  - 'b) $X$ = Anzahl der Sechsen, $X \sim B(8;\, \tfrac16)$. Bei (ii) und (iii) mit dem Gegenereignis arbeiten.'
loesung: |
  **a)** Ungeordnete Auswahl ohne Wiederholung (Entscheidungsbaum: auswählen, Tauschtest negativ, Nochmal-Test negativ):
  $\binom{40}{6} = 3\,838\,380$ Möglichkeiten.
  ---
  **b)** Modell: Die Würfe sind unabhängig, „Sechs“ hat jedes Mal $p = \tfrac16$. Also $X \sim B(8;\, \tfrac16)$.
  ---
  (i) $P(X = 2) = \binom82 \cdot \left(\tfrac16\right)^2 \cdot \left(\tfrac56\right)^6 = 28 \cdot \tfrac{1}{36} \cdot \left(\tfrac56\right)^6 \approx 0{,}2605$.
  ---
  (ii) Gegenereignis „achtmal“: $P(X \le 7) = 1 - \left(\tfrac16\right)^8 \approx 1 - 5{,}95 \cdot 10^{-7} \approx 0{,}999999$.
  ---
  (iii) Gegenereignis $X \in \{0, 8\}$ mit $P(X = 0) = \left(\tfrac56\right)^8 \approx 0{,}2326$:
  $$P(1 \le X \le 7) = 1 - 0{,}2326 - 0{,}0000006 \approx 0{,}7674.$$
```

```aufgabe
id: wk-pruefung-spam
titel: Spamfilter
niveau: 3
punkte: 10
lernziel: 4
kompetenz: modellieren
angabe: |
  (Zeitrichtwert: 18 Minuten) $30\,\%$ aller eingehenden Mails sind Spam. Ein Filter markiert $95\,\%$ der Spam-Mails als „verdächtig“,
  aber auch $2\,\%$ der erwünschten Mails.
  a) Stelle die Situation in einem Baumdiagramm oder einer Vierfeldertafel dar.
  b) Mit welcher Wahrscheinlichkeit wird eine Mail als verdächtig markiert?
  c) Eine Mail wurde markiert. Mit welcher Wahrscheinlichkeit ist sie tatsächlich Spam? (4 Nachkommastellen)
  d) Mit welcher Wahrscheinlichkeit ist eine **nicht** markierte Mail Spam? (4 Nachkommastellen)
teile:
  - typ: text
    label: 'a) Baum oder Vierfeldertafel'
    muster: |
      Erste Stufe: Spam $S$ ($0{,}3$) oder kein Spam $\bar S$ ($0{,}7$). Zweite Stufe: markiert $M$ oder nicht markiert $\bar M$,
      bei $S$ mit $0{,}95$ und $0{,}05$, bei $\bar S$ mit $0{,}02$ und $0{,}98$.
      Vierfeldertafel: $P(S \cap M) = 0{,}285$, $P(S \cap \bar M) = 0{,}015$, $P(\bar S \cap M) = 0{,}014$, $P(\bar S \cap \bar M) = 0{,}686$.
      Spaltensummen: $P(M) = 0{,}299$ und $P(\bar M) = 0{,}701$.
  - typ: zahl
    label: 'b) $P(M)$'
    loesung: "0.3*0.95 + 0.7*0.02"
    anzeige: '0{,}299'
    fehler:
      - wert: "0.285"
        meldung: Das ist nur der Pfad „Spam und markiert“. Auch erwünschte Mails werden manchmal markiert.
  - typ: zahl
    label: 'c) $P(S \mid M)$'
    loesung: "0.3*0.95/(0.3*0.95 + 0.7*0.02)"
    toleranz: 0.0005
    anzeige: '0{,}9532'
    fehler:
      - wert: "0.95"
        meldung: Das ist $P(M \mid S)$. Gefragt ist die umgekehrte Richtung, also Bayes.
  - typ: zahl
    label: 'd) $P(S \mid \bar M)$'
    loesung: "0.3*0.05/(0.3*0.05 + 0.7*0.98)"
    toleranz: 0.0005
    anzeige: '0{,}0214'
    fehler:
      - wert: "0.05"
        meldung: Das ist $P(\bar M \mid S)$. Gefragt ist der Anteil Spam unter den **nicht markierten** Mails.
      - wert: "0.015"
        meldung: Das ist $P(S \cap \bar M)$. Teile noch durch $P(\bar M)$.
hinweise:
  - 'Bezeichnungen: $S$ = Spam, $M$ = markiert. Gegeben sind $P(S)$, $P(M \mid S)$ und $P(M \mid \bar S)$.'
  - 'Für c) und d) den Satz von Bayes oder die Vierfeldertafel verwenden. Bei d) ist die Bedingung $\bar M$.'
loesung: |
  **a)** $P(S) = 0{,}3$, $P(M \mid S) = 0{,}95$, $P(M \mid \bar S) = 0{,}02$. Pfadwahrscheinlichkeiten:
  $P(S \cap M) = 0{,}285$, $P(S \cap \bar M) = 0{,}015$, $P(\bar S \cap M) = 0{,}014$, $P(\bar S \cap \bar M) = 0{,}686$. Die Summe ist $1$.
  ---
  **b)** Totale Wahrscheinlichkeit: $P(M) = 0{,}285 + 0{,}014 = 0{,}299$.
  ---
  **c)** Bayes: $P(S \mid M) = \tfrac{0{,}285}{0{,}299} \approx 0{,}9532$.
  ---
  **d)** $P(\bar M) = 1 - 0{,}299 = 0{,}701$, also $P(S \mid \bar M) = \tfrac{0{,}015}{0{,}701} \approx 0{,}0214$.
  ---
  **Deutung:** Eine markierte Mail ist zu gut $95\,\%$ Spam, im Posteingang landen nur gut $2\,\%$ Spam. Anders als beim seltenen
  medizinischen Befund ist hier die Vorab-Wahrscheinlichkeit von $30\,\%$ groß. Deshalb ist der Filter so treffsicher.
```

```aufgabe
id: wk-pruefung-flug
titel: Überbuchung
niveau: 3
punkte: 10
lernziel: 9
kompetenz: modellieren
angabe: |
  (Zeitrichtwert: 18 Minuten) Eine Fluglinie verkauft für einen Flug mit 205 Plätzen 220 Tickets. Erfahrungsgemäß erscheint jeder
  Fluggast unabhängig von den anderen mit Wahrscheinlichkeit $0{,}9$.
  a) Begründe, warum die Anzahl $X$ der erscheinenden Fluggäste binomialverteilt ist, und gib $E(X)$ und $\sigma$ an (2 Nachkommastellen).
  b) Prüfe die Faustregel für die Normalapproximation.
  c) Berechne näherungsweise (Normalverteilung mit Stetigkeitskorrektur) die Wahrscheinlichkeit, dass mehr Fluggäste erscheinen als
  Plätze vorhanden sind. (3 Nachkommastellen)
teile:
  - typ: zahl
    label: 'a) $E(X)$'
    loesung: "220*0.9"
    fehler:
      - wert: "205"
        meldung: 205 ist die Zahl der Plätze. Der Erwartungswert hängt von den verkauften Tickets ab, $np = 220 \cdot 0{,}9$.
  - typ: zahl
    label: 'a) $\sigma$'
    loesung: "sqrt(220*0.9*0.1)"
    toleranz: 0.005
    anzeige: '4{,}45'
    fehler:
      - wert: "19.8"
        meldung: Das ist die Varianz. Die Standardabweichung ist ihre Wurzel.
  - typ: text
    label: 'a), b) Begründung und Faustregel'
    muster: |
      Jeder der 220 Fluggäste erscheint oder erscheint nicht (zwei Ausgänge), mit derselben Wahrscheinlichkeit $0{,}9$ und unabhängig
      von den anderen. Das ist eine Bernoulli-Kette mit $n = 220$ und $p = 0{,}9$, also $X \sim B(220;\, 0{,}9)$.
      Faustregel: $\sigma^2 = 220 \cdot 0{,}9 \cdot 0{,}1 = 19{,}8 > 9$. Auch $np = 198 \ge 5$ und $n(1-p) = 22 \ge 5$ sind erfüllt.
      Die Normalapproximation ist also zulässig.
  - typ: zahl
    label: 'c) $P(X > 205)$'
    loesung: "1 - normcdf(205.5, 198, sqrt(19.8))"
    toleranz: 0.002
    anzeige: '0{,}046'
    fehler:
      - wert: "1 - normcdf(204.5, 198, sqrt(19.8))"
        meldung: „Mehr als 205“ heißt $X \ge 206$. Der Balken bei 205 gehört nicht dazu, die Grenze liegt bei $205{,}5$.
hinweise:
  - '$\mu = np$ und $\sigma = \sqrt{np(1-p)}$.'
  - '„Mehr als 205“ heißt $X \ge 206$. Mit Stetigkeitskorrektur: $P(X > 205) \approx 1 - \Phi\big(\frac{205{,}5 - \mu}{\sigma}\big)$.'
loesung: |
  **a)** Bernoulli-Kette (zwei Ausgänge, gleiches $p$, Unabhängigkeit), also $X \sim B(220;\, 0{,}9)$.
  $E(X) = 220 \cdot 0{,}9 = 198$ und $\sigma = \sqrt{220 \cdot 0{,}9 \cdot 0{,}1} = \sqrt{19{,}8} \approx 4{,}45$.
  ---
  **b)** $\sigma^2 = 19{,}8 > 9$, außerdem $np = 198 \ge 5$ und $n(1-p) = 22 \ge 5$. Die Faustregeln sind erfüllt.
  ---
  **c)** $$P(X > 205) = 1 - P(X \le 205) \approx 1 - \Phi\!\left(\frac{205{,}5 - 198}{4{,}45}\right) = 1 - \Phi(1{,}69) \approx 1 - 0{,}9545 = 0{,}0455.$$
  Mit ungerundetem $z = 1{,}6855$ ergibt sich $0{,}0459$.
  ---
  **Antwortsatz:** Bei etwa $4{,}6\,\%$ der Flüge erscheinen mehr Fluggäste als Plätze da sind.
  **Wie gut ist die Näherung?** Der exakte Binomialwert ist $0{,}0398$. Die Näherung liegt also rund $15\,\%$ zu hoch, obwohl die
  Faustregeln erfüllt sind. Der Grund: $p = 0{,}9$ liegt nahe bei $1$, die Verteilung ist leicht schief, und gefragt ist ein Wert
  am Rand. Faustregeln garantieren keine Genauigkeit.
```

```aufgabe
id: wk-pruefung-versicherung
titel: Versicherungsprämie
niveau: 3
punkte: 8
lernziel: 5
kompetenz: modellieren
angabe: |
  (Zeitrichtwert: 12 Minuten) Eine Versicherung schätzt, dass ein Vertrag pro Jahr mit Wahrscheinlichkeit $0{,}002$ einen Großschaden
  von $10\,000$ Euro und mit Wahrscheinlichkeit $0{,}01$ einen Kleinschaden von $2000$ Euro verursacht. Sonst gibt es keinen Schaden.
  $X$ sei die Schadenssumme pro Jahr.
  a) Berechne $E(X)$.
  b) Berechne die Standardabweichung $\sigma(X)$ (2 Nachkommastellen).
  c) Wie hoch muss die Jahresprämie sein, damit die Versicherung pro Vertrag im Mittel 10 Euro verdient?
teile:
  - typ: zahl
    label: 'a) $E(X)$'
    einheit: Euro
    loesung: "10000*0.002 + 2000*0.01"
    fehler:
      - wert: "6000"
        meldung: Du hast die beiden Schadenshöhen gemittelt. Gewichte jede mit ihrer Wahrscheinlichkeit.
  - typ: zahl
    label: 'b) $\sigma(X)$'
    einheit: Euro
    loesung: "sqrt(10000^2*0.002 + 2000^2*0.01 - 40^2)"
    toleranz: 0.01
    anzeige: '488{,}26'
    fehler:
      - wert: "sqrt(10000^2*0.002 + 2000^2*0.01)"
        meldung: Beim Verschiebungssatz fehlt $-\mu^2 = -1600$.
  - typ: zahl
    label: 'c) Prämie'
    einheit: Euro
    loesung: "10000*0.002 + 2000*0.01 + 10"
    fehler:
      - wert: "10"
        meldung: Die Prämie muss zuerst den erwarteten Schaden decken. Erst darauf kommen die 10 Euro Gewinn.
hinweise:
  - 'Wahrscheinlichkeit für „kein Schaden“: $1 - 0{,}002 - 0{,}01 = 0{,}988$.'
  - 'Verschiebungssatz: $V(X) = E(X^2) - \mu^2$.'
loesung: |
  **Modell:** Verteilung $P(X = 10\,000) = 0{,}002$, $P(X = 2000) = 0{,}01$, $P(X = 0) = 0{,}988$. Die Summe ist $1$.
  ---
  **a)** $E(X) = 10\,000 \cdot 0{,}002 + 2000 \cdot 0{,}01 = 20 + 20 = 40$ Euro.
  ---
  **b)** $E(X^2) = 10^8 \cdot 0{,}002 + 4 \cdot 10^6 \cdot 0{,}01 = 200\,000 + 40\,000 = 240\,000$.
  $V(X) = 240\,000 - 40^2 = 238\,400$, also $\sigma \approx 488{,}26$ Euro.
  ---
  **c)** Prämie $= E(X) + 10 = 50$ Euro.
  ---
  **Deutung:** Die Streuung ist riesig im Vergleich zum Erwartungswert. Einzelne Verträge sind unberechenbar. Erst bei sehr vielen
  Verträgen gleicht sich das aus (Gesetz der großen Zahlen). Genau davon lebt eine Versicherung.
```

```aufgabe
id: wk-pruefung-annahme
titel: Annahmeprüfung einer Lieferung
niveau: 3
punkte: 10
lernziel: 7
kompetenz: modellieren
angabe: |
  (Zeitrichtwert: 16 Minuten) Ein Betrieb erhält eine Lieferung von 50 Steckern, von denen (ohne dass der Betrieb es weiß) 4 defekt sind.
  Bei der Annahmeprüfung werden 5 Stecker ohne Zurücklegen entnommen. Die Lieferung wird angenommen, wenn höchstens ein
  entnommener Stecker defekt ist.
  a) Mit welcher Wahrscheinlichkeit ist kein entnommener Stecker defekt? (4 Nachkommastellen)
  b) Mit welcher Wahrscheinlichkeit wird die Lieferung angenommen? (4 Nachkommastellen)
  c) Berechne dieselbe Annahmewahrscheinlichkeit näherungsweise mit der Binomialverteilung (4 Nachkommastellen).
  d) Beurteile, ob die Binomialnäherung hier gerechtfertigt ist.
teile:
  - typ: zahl
    label: 'a) $P(X = 0)$'
    loesung: "binom(46, 5)/binom(50, 5)"
    toleranz: 0.0005
    anzeige: '0{,}6470'
    fehler:
      - wert: "0.92^5"
        meldung: Das ist die Rechnung mit Zurücklegen. Bei der Annahmeprüfung werden die Stecker nicht zurückgelegt.
  - typ: zahl
    label: 'b) $P(X \le 1)$'
    loesung: "(binom(46, 5) + 4*binom(46, 4))/binom(50, 5)"
    toleranz: 0.0005
    anzeige: '0{,}9550'
    fehler:
      - wert: "4*binom(46, 4)/binom(50, 5)"
        meldung: Das ist nur $P(X = 1)$. Angenommen wird auch, wenn kein Stecker defekt ist.
  - typ: zahl
    label: 'c) Binomialnäherung'
    loesung: "binomcdf(5, 0.08, 1)"
    toleranz: 0.0005
    anzeige: '0{,}9456'
    fehler:
      - wert: "binompdf(5, 0.08, 0)"
        meldung: Das ist nur $P(X = 0)$. Addiere noch $P(X = 1)$.
  - typ: text
    label: 'd) Beurteilung'
    muster: |
      Die Stichprobe umfasst $\tfrac{5}{50} = 10\,\%$ der Lieferung. Das ist mehr als die Faustregel $5\,\%$. Die Binomialnäherung
      ist deshalb nur grob: Sie liefert $0{,}9456$ statt $0{,}9550$. Weil die Lieferung klein ist, sollte man hypergeometrisch rechnen.
hinweise:
  - 'Hypergeometrisch mit $N = 50$, $M = 4$ defekten Steckern und $n = 5$.'
  - 'Für c): $p = \tfrac{4}{50} = 0{,}08$ und $X \sim B(5;\, 0{,}08)$. Für d): Vergleiche $\tfrac{n}{N}$ mit $5\,\%$.'
loesung: |
  **Modell:** Ziehen ohne Zurücklegen aus 50 Steckern, davon 4 defekt. $X$ = Anzahl defekter Stecker in der Stichprobe, hypergeometrisch mit $N = 50$, $M = 4$, $n = 5$.
  Mögliche Stichproben: $\binom{50}{5} = 2\,118\,760$.
  ---
  **a)** Alle 5 aus den 46 intakten: $\binom{46}{5} = 1\,370\,754$, also $P(X = 0) \approx 0{,}6470$.
  ---
  **b)** Genau ein defekter: $\binom41 \cdot \binom{46}{4} = 4 \cdot 163\,185 = 652\,740$, also $P(X = 1) \approx 0{,}3081$.
  Annahme: $P(X \le 1) \approx 0{,}6470 + 0{,}3081 = 0{,}9550$.
  ---
  **c)** Binomial mit $p = 0{,}08$: $0{,}92^5 + 5 \cdot 0{,}08 \cdot 0{,}92^4 \approx 0{,}6591 + 0{,}2866 = 0{,}9456$.
  ---
  **d)** $\tfrac{n}{N} = 10\,\% > 5\,\%$. Die Näherung weicht um etwa einen Prozentpunkt ab. Hypergeometrisch rechnen ist hier richtig.
  **Antwortsatz:** Eine Lieferung mit $8\,\%$ Ausschuss wird mit rund $95\,\%$ Wahrscheinlichkeit trotzdem angenommen. Die Prüfung ist also recht lasch.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, ohne nachzuschauen. Vergleiche danach mit dem Kasten unten.
antwort: |
  Eine mögliche Auswahl: (1) Wahrscheinlichkeiten von „mindestens einmal“ und ähnlichen Ereignissen rechnet man fast immer
  über das Gegenereignis. (2) Bei einer bedingten Wahrscheinlichkeit entscheidet die Bedingung über den Nenner, und
  $P(A \mid B)$ ist etwas anderes als $P(B \mid A)$. (3) Die Binomialverteilung $P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$ gilt nur
  für unabhängige Wiederholungen mit gleichem $p$ und fester Anzahl $n$. Andere gute Antworten sind die Laplace-Formel mit ihrer
  Voraussetzung „gleich wahrscheinlich“ oder der Entscheidungsbaum für Zählaufgaben.
```

:::zusammenfassung
1. **Ereignisse sind Mengen.** „Und“ ist der Durchschnitt, „oder“ die Vereinigung, „nicht“ das Gegenereignis. Es gilt $P(\bar A) = 1 - P(A)$ und $P(A \cup B) = P(A) + P(B) - P(A \cap B)$.
2. **Laplace** $P(A) = \frac{|A|}{|\Omega|}$ gilt nur bei gleich wahrscheinlichen Ergebnissen. Gezählt wird mit dem Entscheidungsbaum: alle anordnen ($n!$) oder auswählen, dann Tauschtest (Reihenfolge?) und Nochmal-Test (Wiederholung?).
3. **Im Baum** wird entlang eines Pfades multipliziert und zwischen Pfaden addiert. „Mindestens einmal“ ist $1 - P(\text{keinmal})$.
4. **Bedingte Wahrscheinlichkeit** $P(B \mid A) = \frac{P(A \cap B)}{P(A)}$: Die Bedingung bestimmt den Nenner. Mit totaler Wahrscheinlichkeit und Satz von Bayes dreht man einen Baum um. Gedachte Anzahlen machen das anschaulich.
5. **Unabhängig** heißt $P(A \cap B) = P(A) \cdot P(B)$. Unvereinbare Ereignisse mit positiver Wahrscheinlichkeit sind abhängig, und paarweise Unabhängigkeit reicht für drei Ereignisse nicht.
6. **Erwartungswert** $E(X) = \sum x_i p_i$ ist der langfristige Mittelwert, **Varianz** $V(X) = E(X^2) - \mu^2$ misst die Streuung. Es gilt $E(aX + b) = aE(X) + b$ und $V(aX + b) = a^2 V(X)$.
7. **Modelle:** binomial bei $n$ unabhängigen gleichen Versuchen mit $E = np$ und $\sigma = \sqrt{np(1-p)}$. Hypergeometrisch beim Ziehen ohne Zurücklegen, geometrisch beim Warten auf den ersten Treffer.
8. **Stetige Größen** haben eine Dichte, Wahrscheinlichkeiten sind Flächen. Normalverteilte Werte standardisiert man mit $z = \frac{x - \mu}{\sigma}$. Für großes $n$ nähert man die Binomialverteilung mit Stetigkeitskorrektur, und $\mu \pm 1{,}96\sigma$ ist der $95\,\%$-Streubereich.
:::

### Die häufigsten Fehler

Jeder Fehler steht mit einer Aufgabe, die ihn gezielt trainiert. Wenn dir ein Fehler bekannt vorkommt, rechne
die genannte Aufgabe noch einmal.

1. **Beim „oder“ den Durchschnitt doppelt gezählt**, zum Beispiel $0{,}6 + 0{,}35 = 0{,}95$ statt $0{,}75$. Training: „Lesegewohnheiten“ und „Additionssatz anwenden“. Zu finden in [16.1 Zufallsexperimente, Ereignisse und die Grundregeln](/lernen/mathe3/wahrscheinlichkeit/zufallsexperimente-ereignisse-und-die-grundregeln).
2. **Das falsche Gegenereignis gebildet:** Das Gegenereignis von $X \ge 3$ ist $X \le 2$, nicht $X \le 3$. Training: „Das Gegenereignis von ‚mindestens 3‘“ und „Speicherchips in der Packung“. Zu finden in [16.13 Binomialverteilung anwenden: genau, höchstens, mindestens](/lernen/mathe3/wahrscheinlichkeit/binomialverteilung-anwenden-genau-hoechstens-mindestens).
3. **Laplace mit nicht gleich wahrscheinlichen Ergebnissen,** etwa $\tfrac{1}{11}$ für die Augensumme 7. Training: „Zwei Würfel“ und „Das Problem des Fürsten“. Zu finden in [16.2 Laplace-Wahrscheinlichkeit und relative Häufigkeit](/lernen/mathe3/wahrscheinlichkeit/laplace-wahrscheinlichkeit-und-relative-haeufigkeit).
4. **Das falsche Zählverfahren,** meist weil Tauschtest oder Nochmal-Test fehlen. Training: „Kapitänin und Stellvertreterin“ und „Preise verlosen“. Zu finden in [16.5 Welches Zählverfahren passt? Der Entscheidungsbaum](/lernen/mathe3/wahrscheinlichkeit/welches-zaehlverfahren-passt-der-entscheidungsbaum).
5. **Im Baum entlang eines Pfades addiert** oder ohne Zurücklegen mit gleichbleibenden Ästen gerechnet. Training: „Socken aus der Schublade“ und „Drei Sicherungen prüfen“. Zu finden in [16.6 Mehrstufige Experimente: Baumdiagramme und Pfadregeln](/lernen/mathe3/wahrscheinlichkeit/mehrstufige-experimente-baumdiagramme-und-pfadregeln).
6. **$P(B \mid A)$ mit $P(A \mid B)$ oder mit $P(A \cap B)$ verwechselt.** Training: „Sport und Rauchen“ und „Fehler finden“. Zu finden in [16.7 Bedingte Wahrscheinlichkeit und Vierfeldertafel](/lernen/mathe3/wahrscheinlichkeit/bedingte-wahrscheinlichkeit-und-vierfeldertafel).
7. **Die Basisrate vernachlässigt:** „Der Test stimmt zu $98\,\%$, also ist man zu $98\,\%$ krank.“ Training: „Positiver Schnelltest“ und „Alarm im Virenscanner“. Zu finden in [16.8 Totale Wahrscheinlichkeit und Satz von Bayes: den Baum umdrehen](/lernen/mathe3/wahrscheinlichkeit/totale-wahrscheinlichkeit-und-satz-von-bayes-den-baum-umdrehen).
8. **Unvereinbar mit unabhängig verwechselt** oder ohne Unabhängigkeit multipliziert. Training: „Unvereinbar und unabhängig?“ und „De Morgan in Zahlen“. Zu finden in [16.9 Unabhängigkeit von Ereignissen](/lernen/mathe3/wahrscheinlichkeit/unabhaengigkeit-von-ereignissen) und [16.1 Zufallsexperimente, Ereignisse und die Grundregeln](/lernen/mathe3/wahrscheinlichkeit/zufallsexperimente-ereignisse-und-die-grundregeln).
9. **Beim Logarithmieren das Zeichen nicht umgedreht oder abgerundet.** Training: „Wie viele Spiele?“ und „Wie viele Lose?“. Zu finden in [16.6 Mehrstufige Experimente: Baumdiagramme und Pfadregeln](/lernen/mathe3/wahrscheinlichkeit/mehrstufige-experimente-baumdiagramme-und-pfadregeln) und [16.13 Binomialverteilung anwenden: genau, höchstens, mindestens](/lernen/mathe3/wahrscheinlichkeit/binomialverteilung-anwenden-genau-hoechstens-mindestens).
10. **In der Binomialformel den Binomialkoeffizienten vergessen** oder die falsche Hochzahl bei der Niete verwendet. Training: „Genau zwei Treffer“ und „Eine ganze Verteilung“. Zu finden in [16.12 Bernoulli-Kette und Binomialverteilung](/lernen/mathe3/wahrscheinlichkeit/bernoulli-kette-und-binomialverteilung).
11. **„Mehr als“ und „mindestens“ falsch übersetzt.** Training: „Formulierung übersetzen“ und „Mindestens zwei Gewinne“. Zu finden in [16.13 Binomialverteilung anwenden: genau, höchstens, mindestens](/lernen/mathe3/wahrscheinlichkeit/binomialverteilung-anwenden-genau-hoechstens-mindestens).
12. **Bei der Varianz das Quadrat vergessen** oder $V(3X) = 3V(X)$ gerechnet. Training: „Varianz Schritt für Schritt“ und „Lineare Transformation“. Zu finden in [16.11 Varianz und Standardabweichung: wie stark der Zufall streut](/lernen/mathe3/wahrscheinlichkeit/varianz-und-standardabweichung-wie-stark-der-zufall-streut).
13. **Mit der Varianz statt mit $\sigma$ standardisiert** oder bei „größer als“ $\Phi(z)$ statt $1 - \Phi(z)$ genommen. Training: „Akkulaufzeit“ und „Mit Φ rechnen“. Zu finden in [16.16 Normalverteilung und Standardisieren](/lernen/mathe3/wahrscheinlichkeit/normalverteilung-und-standardisieren).
14. **Die Stetigkeitskorrektur in die falsche Richtung geschoben.** Training: „Münzwürfe nähern“ und „Mobile Zugriffe“. Zu finden in [16.17 Normalapproximation und Streubereiche](/lernen/mathe3/wahrscheinlichkeit/normalapproximation-und-streubereiche).
15. **Einen Wert der Dichte für eine Wahrscheinlichkeit gehalten.** Training: „Flächen unter einer Dichte“ und „Warum P(X = a) = 0?“. Zu finden in [16.15 Stetige Zufallsvariablen: Wahrscheinlichkeit als Fläche](/lernen/mathe3/wahrscheinlichkeit/stetige-zufallsvariablen-wahrscheinlichkeit-als-flaeche) und [16.16 Normalverteilung und Standardisieren](/lernen/mathe3/wahrscheinlichkeit/normalverteilung-und-standardisieren).

### Selbstcheck zu den Lernzielen

Schätze für jedes Lernziel ein, wie sicher du bist: **1** = noch unsicher, **2** = meistens richtig, **3** = sicher, auch unter Zeitdruck.
Vergleiche danach mit deinen Ergebnissen in den Aufgaben. Wo du dich bei 3 eingeschätzt hast, aber Fehler machst, liegt deine wichtigste Baustelle.

1. Ereignisse als Mengen, Gegenereignis, Additionssatz und Laplace.
2. Das passende Zählverfahren mit dem Entscheidungsbaum wählen.
3. Baumdiagramme, Pfadregeln, „mindestens einmal“ und „wie oft mindestens“.
4. Bedingte Wahrscheinlichkeit, Vierfeldertafel und Unabhängigkeit.
5. Totale Wahrscheinlichkeit und Satz von Bayes.
6. Erwartungswert, Varianz und Standardabweichung.
7. Binomialverteilung mit „genau“, „höchstens“, „mindestens“ und „mehr als“.
8. Hypergeometrische und geometrische Verteilung.
9. Dichten, Normalverteilung und Standardisieren.
10. Normalapproximation und Streubereiche.

## Mündliche Prüfung

Die Karten zeigen typische Fragen der mündlichen Prüfung. Formuliere zuerst laut eine eigene Antwort in ganzen Sätzen.
Decke erst dann die Musterantwort auf und vergleiche sie mit den Kernpunkten.

```karten
- id: wk-karte-ereignis
  frage: Was ist ein Ereignis, und was bedeuten A ∪ B, A ∩ B und das Gegenereignis?
  antwort: |
    Ein Ereignis ist eine Teilmenge des Ergebnisraums $\Omega$, also eine Menge möglicher Ergebnisse. $A \cup B$ tritt ein, wenn
    mindestens eines der beiden eintritt („oder“). $A \cap B$ tritt ein, wenn beide eintreten („und“). Das Gegenereignis
    $\bar A = \Omega \setminus A$ tritt genau dann ein, wenn $A$ nicht eintritt. Zum Beispiel ist beim Würfel das Gegenereignis
    von „mindestens 5“ das Ereignis „höchstens 4“.
  kernpunkte:
    - Ereignis als Teilmenge von Ω
    - Vereinigung = oder, Durchschnitt = und
    - Gegenereignis enthält genau die übrigen Ergebnisse
- id: wk-karte-axiome
  frage: Wie lauten die Axiome von Kolmogorow, und wie beweist man daraus P(nicht A) = 1 − P(A)?
  antwort: |
    Erstens $P(A) \ge 0$, zweitens $P(\Omega) = 1$, drittens $P(A \cup B) = P(A) + P(B)$ für unvereinbare $A$ und $B$.
    Der Beweis: $A$ und $\bar A$ sind unvereinbar und ergeben zusammen $\Omega$. Nach Axiom 3 und 2 ist also
    $P(A) + P(\bar A) = P(\Omega) = 1$. Zieht man $P(A)$ ab, folgt $P(\bar A) = 1 - P(A)$.
  kernpunkte:
    - drei Axiome vollständig nennen
    - A und Gegenereignis sind unvereinbar und ergeben Ω
    - Axiom 3 und 2 anwenden
- id: wk-karte-laplace
  frage: Wann darf man die Laplace-Formel verwenden? Nenne ein Gegenbeispiel.
  antwort: |
    Nur wenn es endlich viele Ergebnisse gibt und alle **gleich wahrscheinlich** sind. Dann ist $P(A)$ gleich der Anzahl der
    günstigen durch die Anzahl der möglichen Ergebnisse. Gegenbeispiel: Die elf Augensummen zweier Würfel sind nicht gleich
    wahrscheinlich, die Summe 7 hat $\tfrac{6}{36}$, die Summe 2 nur $\tfrac{1}{36}$. Man muss mit den 36 geordneten Paaren zählen.
  kernpunkte:
    - endlich viele, gleich wahrscheinliche Ergebnisse
    - günstige durch mögliche Fälle
    - Gegenbeispiel Augensummen
- id: wk-karte-zaehlen
  frage: Wie entscheidest du, welches Zählverfahren passt, und wie leitet man die Formel für „n über k“ her?
  antwort: |
    Drei Fragen: Werden alle Objekte angeordnet ($n!$) oder $k$ ausgewählt? Zählt die Reihenfolge (Tauschtest)? Darf sich etwas
    wiederholen (Nochmal-Test)? Für „ungeordnet ohne Wiederholung“ zählt man zuerst geordnet, das sind $\frac{n!}{(n-k)!}$
    Möglichkeiten. Jede ungeordnete Auswahl kommt darin in $k!$ Reihenfolgen vor. Also gibt es $\frac{n!}{k!(n-k)!} = \binom{n}{k}$.
  kernpunkte:
    - Anordnen oder Auswählen
    - Tauschtest und Nochmal-Test
    - geordnete Anzahl durch k! teilen
- id: wk-karte-pfadregeln
  frage: Warum multipliziert man im Baumdiagramm entlang eines Pfades und addiert zwischen den Pfaden?
  antwort: |
    Entlang eines Pfades nimmt man einen Anteil vom Anteil. Ist in 60 von 100 Fällen die erste Kugel rot und danach in der Hälfte
    davon auch die zweite, dann sind das 30 von 100 Fällen. Das ist das Produkt $0{,}6 \cdot 0{,}5$. Formal ist das der
    Multiplikationssatz $P(A \cap B) = P(A) \cdot P(B \mid A)$. Verschiedene Pfade schließen sich gegenseitig aus. Für unvereinbare
    Ereignisse darf man nach Axiom 3 addieren.
  kernpunkte:
    - Produkt = Anteil vom Anteil, Multiplikationssatz
    - Äste ab Stufe 2 sind bedingte Wahrscheinlichkeiten
    - Pfade sind unvereinbar, deshalb Summe
- id: wk-karte-mindestens
  frage: Wie berechnet man „mindestens ein Treffer“ und „wie oft muss man es mindestens versuchen“?
  antwort: |
    Über das Gegenereignis: $P(\text{mindestens ein Treffer}) = 1 - (1-p)^n$ bei $n$ unabhängigen Versuchen. Für „wie oft“ löst man
    $1 - (1-p)^n \ge c$ durch Logarithmieren und erhält $n \ge \frac{\ln(1-c)}{\ln(1-p)}$. Das Ungleichheitszeichen dreht sich, weil
    $\ln(1-p)$ negativ ist. Am Ende rundet man auf, und eine Probe mit $n$ und $n - 1$ bestätigt das Ergebnis.
  kernpunkte:
    - Gegenereignis „kein Treffer“
    - Logarithmieren, Zeichen dreht sich wegen ln(1−p) < 0
    - aufrunden und Probe
- id: wk-karte-bedingt
  frage: Was ist eine bedingte Wahrscheinlichkeit, und warum ist P(A | B) meist nicht gleich P(B | A)?
  antwort: |
    $P(B \mid A) = \frac{P(A \cap B)}{P(A)}$ für $P(A) > 0$. Man schaut nur auf die Fälle, in denen $A$ eingetreten ist, und misst
    darin den Anteil von $B$. Bei $P(A \mid B)$ schaut man dagegen auf die Fälle von $B$. Der Zähler ist derselbe, aber der Nenner
    ist ein anderer. Beispiel: Von den Personen mit Hausübung bestehen $80\,\%$, aber von den Bestandenen hatten nur $77\,\%$ die Hausübung gemacht.
  kernpunkte:
    - Definition mit P(A) > 0
    - Bedingung bestimmt den Nenner
    - gleicher Zähler, verschiedener Nenner
- id: wk-karte-bayes
  frage: Was sagt der Satz von Bayes, und warum ist ein positiver Test bei einer seltenen Krankheit oft wenig aussagekräftig?
  antwort: |
    $P(A \mid B) = \frac{P(A) P(B \mid A)}{P(A) P(B \mid A) + P(\bar A) P(B \mid \bar A)}$. Er dreht die Bedingung um. Im Nenner steht die
    totale Wahrscheinlichkeit $P(B)$. Bei einer seltenen Krankheit gibt es viel mehr Gesunde als Kranke. Schon wenige Prozent
    Fehlalarme bei den vielen Gesunden sind dann mehr als die echten Treffer bei den wenigen Kranken. Mit $1\,\%$ Prävalenz, $98\,\%$
    Sensitivität und $5\,\%$ Fehlalarmen ist eine positiv getestete Person nur zu etwa $16{,}5\,\%$ krank.
  kernpunkte:
    - Formel mit totaler Wahrscheinlichkeit im Nenner
    - Bedingung wird umgedreht
    - Basisrate und Fehlalarme bei vielen Gesunden
- id: wk-karte-unabhaengig
  frage: Wann heißen zwei Ereignisse unabhängig? Sind unvereinbare Ereignisse unabhängig? Reicht paarweise Unabhängigkeit?
  antwort: |
    Wenn $P(A \cap B) = P(A) \cdot P(B)$ gilt, gleichwertig $P(B \mid A) = P(B)$ für $P(A) > 0$. Unvereinbare Ereignisse mit positiver
    Wahrscheinlichkeit sind **abhängig**: $P(A \cap B) = 0$, aber $P(A) P(B) > 0$. Für drei Ereignisse reicht paarweise Unabhängigkeit
    nicht. Bei zwei Münzen sind „erste Kopf“, „zweite Kopf“ und „beide gleich“ paarweise unabhängig, aber zusammen ist
    $P = \tfrac14 \ne \tfrac18$.
  kernpunkte:
    - Produktformel als Definition
    - unvereinbar mit positiver Wahrscheinlichkeit heißt abhängig
    - Gegenbeispiel zwei Münzen mit „beide gleich“
- id: wk-karte-erwartung
  frage: Was ist eine Zufallsvariable, und wie sind Erwartungswert und Varianz definiert und zu deuten?
  antwort: |
    Eine Zufallsvariable ist eine Funktion, die jedem Ergebnis eine reelle Zahl zuordnet. $E(X) = \sum x_i p_i$ ist der gewichtete
    Mittelwert, nach dem Gesetz der großen Zahlen der langfristige Durchschnitt. Er muss kein möglicher Wert sein, beim Würfel ist er
    $3{,}5$. $V(X) = \sum (x_i - \mu)^2 p_i = E(X^2) - \mu^2$ ist die mittlere quadratische Abweichung, $\sigma = \sqrt{V(X)}$ die typische Abweichung.
  kernpunkte:
    - Zufallsvariable als Funktion
    - Erwartungswert als langfristiger Mittelwert
    - Varianz mit Quadraten, Verschiebungssatz
- id: wk-karte-binomial
  frage: Welche Voraussetzungen hat die Binomialverteilung? Leite die Formel her.
  antwort: |
    Eine Bernoulli-Kette: $n$ unabhängige Wiederholungen eines Experiments mit zwei Ausgängen und gleichbleibender
    Trefferwahrscheinlichkeit $p$. Jeder Pfad mit $k$ Treffern hat die Wahrscheinlichkeit $p^k (1-p)^{n-k}$. Es gibt $\binom{n}{k}$
    solche Pfade, denn man wählt die Trefferstellen aus. Also $P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}$. Außerdem gilt $E(X) = np$ und $V(X) = np(1-p)$.
  kernpunkte:
    - feste Anzahl n, unabhängig, gleiches p
    - Pfadwahrscheinlichkeit mal Anzahl der Pfade
    - E = np und V = np(1 − p)
- id: wk-karte-hypergeometrisch
  frage: Wann verwendet man die hypergeometrische und wann die geometrische Verteilung statt der Binomialverteilung?
  antwort: |
    Hypergeometrisch beim Ziehen **ohne** Zurücklegen aus einer kleinen Gesamtheit, weil sich die Trefferwahrscheinlichkeit nach
    jedem Zug ändert: $P(X = k) = \binom{M}{k}\binom{N-M}{n-k} / \binom{N}{n}$. Ist die Stichprobe höchstens $5\,\%$ der Gesamtheit,
    reicht die Binomialverteilung als Näherung. Geometrisch, wenn man bis zum ersten Treffer wiederholt. Dann ist
    $P(X = k) = (1-p)^{k-1} p$ und $E(X) = \tfrac1p$.
  kernpunkte:
    - ohne Zurücklegen heißt hypergeometrisch
    - Faustregel n ≤ 5 % von N
    - Warten auf den ersten Treffer heißt geometrisch
- id: wk-karte-dichte
  frage: Wie beschreibt man eine stetige Zufallsvariable, und warum ist P(X = a) = 0?
  antwort: |
    Durch eine Dichtefunktion $f$ mit $f(x) \ge 0$ und Gesamtfläche $1$. Wahrscheinlichkeiten sind Flächen:
    $P(a \le X \le b) = \int_a^b f(x)\,\dd x$. Ein einzelner Wert ist ein Intervall der Breite $0$, die Fläche darüber ist $0$.
    Deshalb ist es egal, ob man $<$ oder $\le$ schreibt. Ein Funktionswert der Dichte ist keine Wahrscheinlichkeit und darf
    sogar größer als $1$ sein. Hier hängt die Wahrscheinlichkeitsrechnung direkt an der Integralrechnung aus Kapitel 10.
  kernpunkte:
    - Dichte nicht negativ, Gesamtfläche 1
    - Wahrscheinlichkeit = Integral
    - einzelner Punkt hat Fläche 0
- id: wk-karte-normal
  frage: Was ist eine Normalverteilung, und wie berechnet man damit Wahrscheinlichkeiten? Was besagen die σ-Regeln?
  antwort: |
    Eine stetige Verteilung mit der Glockenkurve als Dichte, symmetrisch um $\mu$, mit Wendepunkten bei $\mu \pm \sigma$. Man
    standardisiert mit $z = \frac{x - \mu}{\sigma}$ und liest $\Phi(z)$ ab, die Fläche links von $z$. Die σ-Regeln: Etwa $68{,}3\,\%$
    der Werte liegen in $\mu \pm \sigma$, $95{,}4\,\%$ in $\mu \pm 2\sigma$ und $99{,}7\,\%$ in $\mu \pm 3\sigma$. Für genau $95\,\%$ nimmt man $\mu \pm 1{,}96\sigma$.
  kernpunkte:
    - Glockenkurve, Symmetrie, Wendepunkte bei μ ± σ
    - Standardisieren mit σ, Φ ist die Fläche links
    - σ-Regeln 68, 95, 99,7 Prozent
- id: wk-karte-approx
  frage: Wann und wie nähert man die Binomialverteilung durch die Normalverteilung? Warum braucht man die Stetigkeitskorrektur?
  antwort: |
    Für großes $n$, Faustregel $np(1-p) > 9$ (oder $np \ge 5$ und $n(1-p) \ge 5$). Man nimmt $\mu = np$ und $\sigma = \sqrt{np(1-p)}$.
    Jeder Balken der Binomialverteilung hat die Breite $1$ und reicht von $k - 0{,}5$ bis $k + 0{,}5$. Deshalb schiebt man die
    Grenzen um $0{,}5$ nach außen: $P(a \le X \le b) \approx \Phi\big(\frac{b + 0{,}5 - \mu}{\sigma}\big) - \Phi\big(\frac{a - 0{,}5 - \mu}{\sigma}\big)$.
    Am Rand der Verteilung und bei $p$ nahe 0 oder 1 bleibt die Näherung trotzdem ungenau.
  kernpunkte:
    - Faustregel nennen
    - μ = np und σ = √(np(1 − p))
    - Balkenbreite 1 begründet ± 0,5
- id: wk-karte-statistik
  frage: Wie hängen Wahrscheinlichkeitsrechnung und Statistik über das Gesetz der großen Zahlen zusammen?
  antwort: |
    Die relative Häufigkeit eines Ereignisses pendelt sich bei vielen unabhängigen Wiederholungen bei seiner Wahrscheinlichkeit ein.
    Genauer: Ihr $95\,\%$-Streubereich ist $p \pm 1{,}96\sqrt{p(1-p)/n}$ und wird mit wachsendem $n$ schmaler, viermal so viele
    Versuche halbieren die Breite. Die Statistik in Kapitel 17 dreht diese Überlegung um: Aus einer beobachteten relativen
    Häufigkeit schätzt man die unbekannte Wahrscheinlichkeit mit einem Konfidenzintervall.
  kernpunkte:
    - relative Häufigkeit nähert sich der Wahrscheinlichkeit
    - Streubereich schrumpft wie 1/√n
    - Statistik schließt umgekehrt von Daten auf p
```

