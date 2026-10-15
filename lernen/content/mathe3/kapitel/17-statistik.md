---
nummer: 17
titel: Beschreibende Statistik
kurz: Merkmale und Skalen, Häufigkeiten und Diagramme, Mittelwerte, Streuung, Boxplot, Regression, Korrelation, Konfidenzintervall und ein erster Hypothesentest.
teil: B
stunden: 12
pruefungsgewicht: 2
voraussetzungen: [zahlen, funktionen, folgen-reihen, wahrscheinlichkeit]
lernziele:
  - Merkmale nach Skalenniveau einordnen, Stichproben auf Repräsentativität prüfen und passende Kennzahlen und Diagramme auswählen
  - absolute, relative und kumulierte Häufigkeiten bestimmen, die empirische Verteilungsfunktion lesen und Histogramme mit ungleichen Klassenbreiten richtig zeichnen und lesen
  - arithmetisches, gewichtetes und geometrisches Mittel, Median und Modus berechnen und je nach Daten begründet auswählen
  - Quartile und Interquartilsabstand bestimmen, Boxplots zeichnen und lesen und Ausreißer mit der 1,5-IQR-Regel erkennen
  - Varianz, Standardabweichung, Variationskoeffizient und z-Werte berechnen und im Sachzusammenhang deuten
  - eine Regressionsgerade mit der Methode der kleinsten Quadrate berechnen, Steigung und Achsenabschnitt deuten und Prognosen mit ihren Grenzen angeben
  - den Korrelationskoeffizienten berechnen und deuten und Korrelation von Kausalität unterscheiden
  - ein Konfidenzintervall für einen Anteil berechnen, richtig deuten und den nötigen Stichprobenumfang bestimmen
  - einen einfachen Hypothesentest für einen Anteil durchführen und die beiden Fehlerarten erklären (Vertiefung)
---

**Worum geht es?** In [Kapitel 16](/lernen/mathe3/wahrscheinlichkeit) hast du Modelle für den Zufall kennengelernt.
Dort waren die Wahrscheinlichkeiten bekannt, und du hast ausgerechnet, was passieren wird. In der Statistik ist es
umgekehrt. Du hast echte Daten vor dir, zum Beispiel Messwerte, Umfrageergebnisse oder Antwortzeiten eines Servers.
Daraus willst du verstehen, was dahintersteckt.

Die **beschreibende Statistik** fasst Daten mit Tabellen, Diagrammen und wenigen Kennzahlen zusammen. Die
**schließende Statistik** geht einen Schritt weiter. Sie schließt von einer Stichprobe auf die Gesamtheit, aus der
sie stammt. Dafür braucht sie die Wahrscheinlichkeitsrechnung. Beides lernst du in diesem Kapitel.

**Was kommt in der Prüfung?** In den drei Musterprüfungen gibt es keine eigene Statistikaufgabe, die
Wahrscheinlichkeitsrechnung kommt dagegen immer vor. Statistik ist trotzdem prüfungsrelevant:

- Mittelwert, Median, Streuung und Regression können als **Teilaufgabe** in der schriftlichen Prüfung auftauchen.
- In der **mündlichen** Prüfung sind es Standardfragen, etwa „Wann ist der Median besser als der Mittelwert?“ oder „Was bedeutet $r = 0{,}9$?“.
- Konfidenzintervall und Hypothesentest verbinden Statistik mit der Binomial- und Normalverteilung aus Kapitel 16.

**Wozu brauchst du das später?** Antwortzeiten von Servern, Benchmarks, A/B-Tests und Monitoring sind
beschreibende Statistik. Nach diesem Kapitel kannst du zum Beispiel genau begründen, warum ein Dashboard den Median
und nicht den Mittelwert der Antwortzeiten zeigt. Im Studium triffst du Statistik in Lehrveranstaltungen zu
Datenanalyse, maschinellem Lernen und Messtechnik wieder.

:::vorwissen
Du brauchst aus früheren Kapiteln:

- **Prozentrechnung und Wurzeln** aus [1.6 Prozentrechnung](/lernen/mathe3/zahlen/prozentrechnung) und [1.9 Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln): Anteile, Prozentpunkte und Quadratwurzeln kommen ständig vor.
- **Lineare und quadratische Funktionen** aus [4.3 Lineare Funktionen](/lernen/mathe3/funktionen/lineare-funktionen) und [4.4 Quadratische Funktionen](/lernen/mathe3/funktionen/quadratische-funktionen): Eine Regressionsgerade ist eine lineare Funktion, und ihre Herleitung sucht den Scheitel einer Parabel.
- **Das Summenzeichen** aus [8.4 Das Summenzeichen](/lernen/mathe3/folgen-reihen/das-summenzeichen): Fast jede Kennzahl ist eine Summe.
- **Erwartungswert, Binomial- und Normalverteilung** aus [16.10 Zufallsvariablen und Erwartungswert](/lernen/mathe3/wahrscheinlichkeit/zufallsvariablen-und-erwartungswert), [16.12 Bernoulli-Kette und Binomialverteilung](/lernen/mathe3/wahrscheinlichkeit/bernoulli-kette-und-binomialverteilung) und [16.16 Normalverteilung und Standardisieren](/lernen/mathe3/wahrscheinlichkeit/normalverteilung-und-standardisieren): Sie sind die Modelle hinter den Daten.

Die folgenden sieben Fragen zeigen dir, ob du diese Werkzeuge noch sicher beherrschst. Wenn eine Frage nicht klappt,
wiederhole zuerst den verlinkten Abschnitt.
:::

```aufgabe
id: st-ein-prozent
titel: Anteil in Prozent
niveau: 1
art: check
angabe: |
  Von $360$ Befragten nutzen $54$ privat Linux. Wie groß ist dieser Anteil? Gib ihn als Dezimalzahl an.
  (Wiederholung: [1.6 Prozentrechnung](/lernen/mathe3/zahlen/prozentrechnung))
teile:
  - typ: zahl
    loesung: "54/360"
    anzeige: '0{,}15'
    fehler:
      - wert: "360/54"
        meldung: Du hast die Gesamtzahl durch den Teil geteilt. Ein Anteil ist immer „Teil durch Ganzes“, also $54$ durch $360$.
loesung: |
  Ein Anteil ist „Teil durch Ganzes“: $\tfrac{54}{360}$.
  ---
  $\tfrac{54}{360} = 0{,}15$. Das sind $15\,\%$ der Befragten.
```

```aufgabe
id: st-ein-summe
titel: Summenzeichen mit Abweichungen
niveau: 1
art: check
angabe: |
  Gegeben sind $x_1 = 3$, $x_2 = 4$, $x_3 = 7$ und $x_4 = 6$. Berechne $\displaystyle\sum_{i=1}^{4} (x_i - 5)$.
  (Wiederholung: [8.4 Das Summenzeichen](/lernen/mathe3/folgen-reihen/das-summenzeichen))
teile:
  - typ: zahl
    loesung: "(3-5) + (4-5) + (7-5) + (6-5)"
    fehler:
      - wert: "3 + 4 + 7 + 6 - 5"
        meldung: Die $5$ wird in **jedem** Summanden abgezogen, also viermal. Schreib die Summe zuerst ausführlich mit vier Klammern hin.
loesung: |
  Das Summenzeichen bedeutet: Für $i = 1, 2, 3, 4$ den Ausdruck $x_i - 5$ bilden und alles addieren.
  ---
  $(3 - 5) + (4 - 5) + (7 - 5) + (6 - 5) = -2 - 1 + 2 + 1 = 0$.
```

```aufgabe
id: st-ein-wurzel
titel: Wurzel aus einer kleinen Zahl
niveau: 1
art: check
angabe: |
  Berechne $\sqrt{0{,}0009}$. (Wiederholung: [1.9 Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln))
teile:
  - typ: zahl
    loesung: "sqrt(0.0009)"
    anzeige: '0{,}03'
    fehler:
      - wert: "0.3"
        meldung: 'Probe: $0{,}3^2 = 0{,}09$, nicht $0{,}0009$. Beim Wurzelziehen halbiert sich die Zahl der Nachkommastellen: aus vier werden zwei.'
loesung: |
  Gesucht ist die positive Zahl, deren Quadrat $0{,}0009$ ist.
  ---
  $0{,}03^2 = 0{,}0009$, also $\sqrt{0{,}0009} = 0{,}03$.
```

```aufgabe
id: st-ein-gerade
titel: Gerade durch einen Punkt
niveau: 1
art: check
angabe: |
  Eine Gerade $y = kx + d$ hat die Steigung $k = 3$ und geht durch den Punkt $(2 \mid 5)$. Berechne den
  Achsenabschnitt $d$. (Wiederholung: [4.3 Lineare Funktionen](/lernen/mathe3/funktionen/lineare-funktionen))
teile:
  - typ: zahl
    loesung: "5 - 3*2"
    fehler:
      - wert: "5 + 3*2"
        meldung: 'Setz den Punkt ein: $5 = 3 \cdot 2 + d$. Dann musst du $6$ auf beiden Seiten **abziehen**, nicht addieren.'
loesung: |
  Der Punkt liegt auf der Geraden, also gilt $5 = 3 \cdot 2 + d$.
  ---
  $5 = 6 + d$, also $d = 5 - 6 = -1$.
```

```aufgabe
id: st-ein-scheitel
titel: Scheitel einer Parabel
niveau: 1
art: check
angabe: |
  Für welches $a$ ist $Q(a) = (a - 2)^2 + (a - 6)^2$ am kleinsten?
  (Wiederholung: [4.4 Quadratische Funktionen](/lernen/mathe3/funktionen/quadratische-funktionen))
teile:
  - typ: zahl
    loesung: "4"
    fehler:
      - wert: "8"
        meldung: Du hast $2 + 6$ addiert. Multipliziere aus, dann siehst du eine Parabel $2a^2 - 16a + 40$. Ihr Scheitel liegt bei $a = \tfrac{16}{2 \cdot 2}$.
loesung: |
  Ausmultiplizieren: $Q(a) = a^2 - 4a + 4 + a^2 - 12a + 36 = 2a^2 - 16a + 40$. Das ist eine nach oben offene Parabel.
  ---
  Ihr Scheitel liegt bei $a = \tfrac{16}{2 \cdot 2} = 4$. Das ist genau die Mitte zwischen $2$ und $6$, also deren Mittelwert.
```

```aufgabe
id: st-ein-erwartungswert
titel: Erwartungswert einer Zufallsvariablen
niveau: 1
art: check
angabe: |
  Eine Zufallsvariable $X$ nimmt die Werte $0$, $1$ und $2$ mit den Wahrscheinlichkeiten $0{,}5$, $0{,}3$ und $0{,}2$ an.
  Berechne $E(X)$. (Wiederholung: [16.10 Zufallsvariablen und Erwartungswert](/lernen/mathe3/wahrscheinlichkeit/zufallsvariablen-und-erwartungswert))
teile:
  - typ: zahl
    loesung: "0*0.5 + 1*0.3 + 2*0.2"
    anzeige: '0{,}7'
    fehler:
      - wert: "1"
        meldung: Das ist das einfache Mittel der Werte $0$, $1$, $2$. Beim Erwartungswert zählt jeder Wert so stark, wie er wahrscheinlich ist.
loesung: |
  $E(X) = \sum x_i \, p_i$: Jeder Wert wird mit seiner Wahrscheinlichkeit gewichtet.
  ---
  $E(X) = 0 \cdot 0{,}5 + 1 \cdot 0{,}3 + 2 \cdot 0{,}2 = 0{,}7$.
```

```aufgabe
id: st-ein-binomial-sigma
titel: Standardabweichung der Binomialverteilung
niveau: 1
art: check
angabe: |
  $X \sim B(400;\, 0{,}5)$. Berechne die Standardabweichung $\sigma$.
  (Wiederholung: [16.12 Bernoulli-Kette und Binomialverteilung](/lernen/mathe3/wahrscheinlichkeit/bernoulli-kette-und-binomialverteilung))
teile:
  - typ: zahl
    loesung: "sqrt(400*0.5*0.5)"
    fehler:
      - wert: "100"
        meldung: Das ist die Varianz $np(1-p)$. Die Standardabweichung ist die Wurzel daraus.
loesung: |
  Für $X \sim B(n;\, p)$ gilt $\sigma = \sqrt{np(1-p)}$.
  ---
  $\sigma = \sqrt{400 \cdot 0{,}5 \cdot 0{,}5} = \sqrt{100} = 10$.
```

## Grundbegriffe: Merkmale, Skalen und Stichproben

```aufgabe
id: st-gk-check-anteil
titel: Anteil oder Anzahl?
niveau: 1
art: check
angabe: |
  In einer Firma mit $250$ Beschäftigten werden $40$ Personen befragt. $10$ davon fahren mit dem Rad zur Arbeit.
  Welcher Anteil der **Befragten** fährt mit dem Rad? Gib eine Dezimalzahl an.
  (Wiederholung: [1.6 Prozentrechnung](/lernen/mathe3/zahlen/prozentrechnung))
teile:
  - typ: zahl
    loesung: "10/40"
    anzeige: '0{,}25'
    fehler:
      - wert: "10/250"
        meldung: Du hast durch alle Beschäftigten geteilt. Befragt wurden aber nur $40$ Personen. Der Anteil bezieht sich auf die Befragten.
loesung: |
  „Anteil der Befragten“ heißt: Teil durch die Zahl der **Befragten**.
  ---
  $\tfrac{10}{40} = 0{,}25$, also $25\,\%$ der Befragten.
```

Bevor du etwas ausrechnest, musst du wissen, **was** du eigentlich vor dir hast. Wer wurde untersucht? Was wurde
gemessen? Und welche Rechnungen sind mit diesen Werten überhaupt erlaubt? Diese drei Fragen klärt dieser Abschnitt.

### Merkmalsträger, Merkmale und Ausprägungen

Jede Statistik beginnt mit einer **Datenerhebung**. Dabei untersucht man Dinge oder Personen und notiert an ihnen
bestimmte Eigenschaften.

- Die untersuchten Personen oder Dinge heißen **Merkmalsträger**. Beispiele sind Studierende, Server oder Bauteile.
- Die erhobene Eigenschaft heißt **Merkmal**. Beispiele sind das Alter, die Antwortzeit oder die Farbe.
- Der konkrete Wert, den ein Merkmalsträger hat, heißt **Merkmalsausprägung** oder kurz **Wert**. Beispiele sind „23 Jahre“, „140 ms“ oder „rot“.

:::beispiel[Eine Umfrage in der Mensa]
In einer Mensa werden 80 Gäste befragt. Notiert werden das gewählte Menü (A, B oder vegetarisch), die
Zufriedenheit („sehr gut“, „gut“, „mittel“, „schlecht“) und die Wartezeit an der Kasse in Minuten.

- **Merkmalsträger** sind die 80 befragten Gäste.
- **Merkmale** sind Menü, Zufriedenheit und Wartezeit.
- **Ausprägungen** sind zum Beispiel „vegetarisch“, „gut“ und „3,5 Minuten“ bei einem bestimmten Gast.

Die drei Merkmale sind von ganz verschiedener Art. Mit Wartezeiten kann man rechnen, mit Menünamen nicht. Genau
diesen Unterschied beschreiben die Skalenniveaus.
:::

### Skalenniveaus: Was darf man mit den Werten tun?

Einen Mittelwert von Lieblingsfarben gibt es nicht. Einen Mittelwert von Körpergrößen gibt es sehr wohl. Das
**Skalenniveau** eines Merkmals sagt, welche Rechenoperationen mit seinen Werten sinnvoll sind.

:::definition[Skalenniveaus]
- **Nominalskala:** Die Werte sind nur Namen ohne natürliche Reihenfolge. Man kann nur prüfen, ob zwei Werte gleich sind. Beispiele: Menü, Betriebssystem, Studienrichtung.
- **Ordinalskala:** Die Werte haben eine Rangfolge, aber die Abstände zwischen ihnen sind nicht messbar. Beispiele: Zufriedenheit von „schlecht“ bis „sehr gut“, Schulnoten, Platzierung in einem Rennen.
- **Metrische Skala:** Die Werte sind Zahlen, bei denen Differenzen eine feste Bedeutung haben. Beispiele: Wartezeit in Minuten, Körpergröße, Einkommen.
:::

Das Wort *nominal* kommt vom lateinischen *nomen*, also „Name“. *Ordinal* kommt von *ordo*, also „Ordnung“.
*Metrisch* heißt „messend“. Die Reihenfolge der drei Skalen ist wichtig: Jede höhere Skala kann alles, was die
niedrigere kann, und noch etwas dazu.

**Ein Nicht-Beispiel für metrisch:** Postleitzahlen sind Zahlen, aber keine metrischen Werte. Die Differenz
$1100 - 1040 = 60$ hat keine Bedeutung. Postleitzahlen sind nur Namen für Gebiete, also nominal.

Bei metrischen Merkmalen unterscheidet man noch zwei Arten:

- **Diskret** heißt: Es gibt nur einzelne, abzählbare Werte, meist ganze Zahlen. Beispiel: Anzahl der Geschwister.
- **Stetig** heißt: Jeder Wert in einem Intervall ist möglich. Beispiel: Wartezeit, Länge, Temperatur.

Stetige Werte fasst man oft zu **Klassen** zusammen, zum Beispiel „zwischen 2 und 4 Minuten“. Darum geht es in
[17.3 Diagramme: Säulen, Kreis und Histogramm](/lernen/mathe3/statistik/diagramme-saeulen-kreis-und-histogramm).

:::beispiel[Skalenniveau bestimmen mit zwei Fragen]
Du kannst das Skalenniveau mit zwei Fragen bestimmen.

1. **Gibt es eine natürliche Reihenfolge?** Wenn nein, ist das Merkmal nominal.
2. **Haben Abstände eine feste Bedeutung?** Wenn ja, ist es metrisch. Wenn nein, ist es ordinal.

Angewendet auf die Mensa-Umfrage:

- **Menü:** Zwischen „A“, „B“ und „vegetarisch“ gibt es keine natürliche Reihenfolge. Also nominal.
- **Zufriedenheit:** „sehr gut“ ist besser als „gut“. Ob der Abstand von „sehr gut“ zu „gut“ genauso groß ist wie von „mittel“ zu „schlecht“, kann niemand messen. Also ordinal.
- **Wartezeit:** 4 Minuten sind genau 1 Minute mehr als 3 Minuten. Also metrisch, und zwar stetig.
:::

:::merke[Welche Kennzahl passt zu welcher Skala?]
- **Nominal:** nur der Modus (der häufigste Wert).
- **Ordinal:** zusätzlich Median und Quartile, denn dafür braucht man nur eine Reihenfolge.
- **Metrisch:** zusätzlich Mittelwert, Varianz und Standardabweichung, denn dafür braucht man Differenzen.

Alle diese Kennzahlen lernst du in diesem Kapitel kennen.
:::

:::achtung[Mittelwert von Namen]
Eine Erhebung notiert die Postleitzahlen von drei Personen: $1040$, $1100$ und $1220$. Eine typische falsche Rechnung:
$$\bar x = \frac{1040 + 1100 + 1220}{3} = 1120. \qquad \text{(falsch)}$$
Die Zahl $1120$ ist zwar eine Wiener Postleitzahl, aber sie sagt nichts über die drei Personen aus. Postleitzahlen
sind nominal, also darf man sie nicht mitteln. Richtig wäre hier höchstens der Modus, und den gibt es nicht, weil
jeder Wert nur einmal vorkommt.
:::

:::achtung[Notendurchschnitt]
Schulnoten sind streng genommen ordinal. Eine typische Rechnung ist
$$\text{Durchschnitt von } 1, 1, 4 = \frac{1 + 1 + 4}{3} = 2. \qquad \text{(nur eine Konvention)}$$
Der Durchschnitt $2$ tut so, als wäre der Abstand von „Sehr gut“ zu „Genügend“ dreimal so groß wie der von „Sehr gut“
zu „Gut“. Das ist eine Annahme, keine Messung. Notendurchschnitte werden trotzdem ständig berechnet. In der mündlichen
Prüfung punktest du, wenn du sagst: „Streng genommen ist das ordinal, der Median $1$ wäre das passende Maß.“
:::

```aufgabe
id: st-skalen
titel: Skalenniveau bestimmen
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Welche der folgenden Merkmale sind **metrisch**? Wähle alle passenden aus.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - 'Antwortzeit eines Servers in Millisekunden'
      - 'Programmiersprache eines Projekts'
      - 'Platzierung bei einem Programmierwettbewerb'
      - 'Anzahl der Commits pro Woche'
      - 'Kundenzufriedenheit auf der Skala „gut / mittel / schlecht“'
    richtig: [0, 3]
    fehler:
      - wert: [0, 2, 3]
        meldung: Die Platzierung hat eine Rangfolge, aber keine festen Abstände. Platz 1 kann knapp oder weit vor Platz 2 liegen. Sie ist ordinal.
      - wert: [0]
        meldung: Auch Anzahlen sind metrisch. $12$ Commits sind genau $4$ mehr als $8$ Commits, der Abstand hat also eine feste Bedeutung. Das Merkmal ist diskret metrisch.
hinweise:
  - 'Frag bei jedem Merkmal: Haben Differenzen wie „4 mehr als“ eine feste Bedeutung?'
loesung: |
  Ansatz: Für jedes Merkmal die zwei Fragen stellen, Reihenfolge und feste Abstände.
  ---
  Antwortzeit: feste Abstände, metrisch und stetig. Anzahl der Commits: feste Abstände, metrisch und diskret.
  ---
  Programmiersprache: keine Reihenfolge, nominal. Platzierung und Zufriedenheit: Reihenfolge ohne messbare Abstände, ordinal.
```

```aufgabe
id: st-skalen-kennzahl
titel: Sinnvolle Kennzahl
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  In einer Umfrage wurde das bevorzugte Betriebssystem erhoben (Windows, macOS, Linux, Sonstiges).
  Welche Kennzahl ist zur Beschreibung sinnvoll?
teile:
  - typ: auswahl
    optionen:
      - 'arithmetisches Mittel'
      - 'Median'
      - 'Modus'
      - 'Standardabweichung'
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Für einen Mittelwert müsste man Betriebssysteme addieren. Das geht nicht, denn ihre Werte sind keine Zahlen.
      - wert: 1
        meldung: Für den Median muss man die Werte ordnen. Bei Betriebssystemen gibt es aber keine natürliche Reihenfolge.
      - wert: 3
        meldung: Die Standardabweichung misst Abstände zum Mittelwert. Ohne Zahlen gibt es weder Mittelwert noch Abstände.
hinweise:
  - Bestimme zuerst das Skalenniveau des Merkmals.
loesung: |
  Das Merkmal ist nominal: keine Reihenfolge, keine Zahlenwerte.
  ---
  Sinnvoll ist nur der Modus, also die häufigste Ausprägung. Für den Median bräuchte man eine Reihenfolge, für Mittelwert und Standardabweichung Zahlen.
```

### Grundgesamtheit und Stichprobe

Meist kann man nicht alle Merkmalsträger untersuchen. Man befragt nicht alle 6,4 Millionen Wahlberechtigten in
Österreich, sondern vielleicht 1000 davon.

:::definition[Grundgesamtheit und Stichprobe]
Die **Grundgesamtheit** ist die Menge aller Merkmalsträger, über die man etwas aussagen will. Eine **Stichprobe** ist
der Teil der Grundgesamtheit, der tatsächlich untersucht wird. Ihre Größe $n$ heißt **Stichprobenumfang**.

Eine Stichprobe heißt **repräsentativ**, wenn sie die Grundgesamtheit in den wichtigen Merkmalen gut abbildet. Am
sichersten erreicht man das durch eine **Zufallsstichprobe**: Jeder Merkmalsträger hat dieselbe Chance, ausgewählt zu werden.
:::

:::beispiel[Fahrzeiten an einer Hochschule]
Eine Hochschule will wissen, wie lange ihre 12 000 Studierenden im Durchschnitt zur Uni fahren. Sie lost 300
Matrikelnummern aus und befragt diese Personen.

- Die **Grundgesamtheit** sind alle 12 000 Studierenden.
- Die **Stichprobe** sind die 300 ausgelosten Personen, also ist $n = 300$.
- Weil das Los entscheidet, ist es eine **Zufallsstichprobe**.
:::

**Nicht-Beispiel:** Die Hochschule befragt stattdessen die ersten 300 Personen, die morgens um 8 Uhr in die Bibliothek
kommen. Das ist keine Zufallsstichprobe. Wer weit weg wohnt, kommt seltener so früh, und die Fahrzeiten würden zu
kurz geschätzt. Einen solchen systematischen Fehler nennt man **Verzerrung**.

:::achtung[Großes n heilt keine Verzerrung]
Eine Online-Umfrage auf einer Technikseite erhält $20\,000$ Antworten. $70\,\%$ der Teilnehmenden nutzen Linux.
Eine typische falsche Folgerung:
„Bei $n = 20\,000$ ist das Ergebnis sicher: $70\,\%$ aller Menschen nutzen Linux.“ Diese Folgerung ist falsch.
An der Umfrage nehmen nur Leute teil, die diese Seite lesen und Lust zum Antworten haben. Die Stichprobe ist
**selbstausgewählt** und damit verzerrt. Ein großes $n$ macht ein verzerrtes Ergebnis nur genauer verzerrt. Eine
kleine Zufallsstichprobe ist hier viel aussagekräftiger.
:::

```plot
x: [-0.8, 3.8]
y: [0, 0.55]
achsen: { x: "Betriebssystem (0 Windows, 1 macOS, 2 Linux, 3 Sonstiges)", y: "relative Häufigkeit" }
balken:
  - { x: 0, y: 0.45 }
  - { x: 1, y: 0.30 }
  - { x: 2, y: 0.20 }
  - { x: 3, y: 0.05 }
beschriftung: "Säulendiagramm eines nominalen Merkmals: Anteile der Betriebssysteme in einer Zufallsstichprobe. Die Reihenfolge der Säulen ist frei gewählt, man könnte sie beliebig umstellen. Sinnvoll ist hier nur der Modus Windows."
```

Am Diagramm siehst du einen typischen Unterschied zu metrischen Daten: Die Zahlen $0$ bis $3$ auf der Achse sind nur
Nummern für die Säulen. Man könnte Linux genauso gut nach links stellen. Ein „mittleres Betriebssystem“ gibt es nicht.

```reflexion
frage: Warum darf man bei einem ordinalen Merkmal den Median bilden, aber eigentlich keinen Mittelwert?
antwort: |
  Für den Median muss man die Werte nur der Größe nach ordnen und den mittleren nehmen. Dafür reicht eine Rangfolge,
  und die hat ein ordinales Merkmal. Für den Mittelwert addiert man die Werte. Eine Summe ist aber nur sinnvoll, wenn
  gleiche Abstände dasselbe bedeuten. Genau das ist bei ordinalen Daten nicht gesichert, zum Beispiel beim Abstand
  zwischen „gut“ und „mittel“ gegenüber „mittel“ und „schlecht“.
```

```aufgabe
id: st-gk-diskret-stetig
titel: Diskret oder stetig?
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Beurteile die Aussagen über metrische Merkmale.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: 'Die Anzahl der Fehlermeldungen pro Tag ist diskret.'
        richtig: true
        erklaerung: 'Man kann nur $0, 1, 2, \dots$ Meldungen haben, keine $2{,}7$.'
      - text: 'Die Dauer eines Downloads in Sekunden ist stetig.'
        richtig: true
        erklaerung: 'Jede Dauer in einem Intervall ist möglich, auch $3{,}417$ Sekunden.'
      - text: 'Das Gewicht eines Pakets ist diskret, weil die Waage nur auf 10 g genau anzeigt.'
        richtig: false
        erklaerung: 'Das Merkmal selbst ist stetig. Nur die Messung rundet. Ob ein Merkmal stetig ist, hängt von der Größe ab, nicht vom Messgerät.'
      - text: 'Die Hausnummer ist metrisch und diskret.'
        richtig: false
        erklaerung: 'Hausnummern sind Namen für Häuser. Die Differenz zweier Hausnummern hat keine feste Bedeutung. Sie sind nominal, höchstens ordinal.'
    fehler:
      - wert: [r, r, r, f]
        meldung: Bei der dritten Aussage verwechselst du das Merkmal mit der Messung. Das Gewicht kann jeden Wert annehmen. Die Waage rundet nur.
      - wert: [r, r, f, r]
        meldung: Bei der vierten Aussage reicht „es ist eine Zahl“ nicht. Frag, ob die Differenz zweier Hausnummern etwas bedeutet.
hinweise:
  - 'Diskret: einzelne abzählbare Werte. Stetig: jeder Wert in einem Intervall möglich. Und vorher: Ist das Merkmal überhaupt metrisch?'
loesung: |
  Ansatz: Zuerst prüfen, ob das Merkmal metrisch ist. Dann fragen, ob jeder Zwischenwert möglich ist.
  ---
  Fehlermeldungen: abzählbar, diskret. Downloaddauer: jeder Zwischenwert möglich, stetig.
  ---
  Paketgewicht: stetig, die Waage rundet nur. Hausnummer: nicht metrisch, also ist die Aussage falsch.
```

```aufgabe
id: st-gk-stichprobe
titel: Welche Stichprobe ist repräsentativ?
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Ein Verkehrsverbund will wissen, wie zufrieden **alle** seine Fahrgäste sind. Welches Vorgehen liefert am ehesten
  eine repräsentative Stichprobe?
teile:
  - typ: auswahl
    optionen:
      - 'Auf der Webseite wird ein Fragebogen angeboten, den jeder ausfüllen kann.'
      - 'An zufällig ausgelosten Tagen und Uhrzeiten werden in zufällig gewählten Fahrzeugen alle Fahrgäste befragt.'
      - 'Es werden alle Personen befragt, die sich im letzten Monat beschwert haben.'
      - 'Montags um 8 Uhr werden 2000 Fahrgäste in der U-Bahn befragt.'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Das ist eine selbstausgewählte Stichprobe. Es antworten vor allem sehr zufriedene oder sehr verärgerte Personen.
      - wert: 2
        meldung: Wer sich beschwert hat, ist eher unzufrieden. Diese Gruppe bildet nicht alle Fahrgäste ab.
      - wert: 3
        meldung: Montags um 8 Uhr fahren vor allem Berufstätige im Berufsverkehr. Abendfahrgäste oder Busfahrgäste fehlen ganz. Ein großes $n$ ändert daran nichts.
hinweise:
  - Frag bei jeder Variante, ob jeder Fahrgast dieselbe Chance hat, befragt zu werden.
  - Achte auf Gruppen, die systematisch fehlen oder zu oft vorkommen.
loesung: |
  Ansatz: Repräsentativ ist eine Stichprobe dann am ehesten, wenn der Zufall auswählt und keine Gruppe bevorzugt wird.
  ---
  Webseite und Beschwerden: Die Teilnehmenden wählen sich selbst aus oder sind vorab sortiert. Beides verzerrt.
  ---
  Montag 8 Uhr: Nur eine Uhrzeit und ein Verkehrsmittel, also fehlen ganze Gruppen.
  ---
  Zufällige Tage, Zeiten und Fahrzeuge: Jeder Fahrgast hat ungefähr dieselbe Chance. Diese Variante ist die beste.
```

```aufgabe
id: st-gk-begriffe
titel: Begriffe in einem Sachtext erkennen
niveau: 2
lernziel: 0
kompetenz: modellieren
angabe: |
  Ein Webshop hat im letzten Jahr $48\,000$ Bestellungen erhalten. Aus diesen werden $600$ zufällig ausgewählt. Für
  jede ausgewählte Bestellung werden die Zahlungsart (Karte, Rechnung, Sofortüberweisung), die Bewertung (1 bis 5 Sterne)
  und der Bestellwert in Euro notiert.

  a) Wie groß ist der Stichprobenumfang $n$?

  b) Welches Merkmal ist ordinal?
teile:
  - typ: zahl
    label: 'a) $n$'
    loesung: "600"
    fehler:
      - wert: "48000"
        meldung: '$48\,000$ ist die Größe der Grundgesamtheit, also aller Bestellungen. Untersucht wurden nur die ausgewählten Bestellungen.'
      - wert: "3"
        meldung: Drei ist die Zahl der Merkmale. Der Stichprobenumfang zählt die untersuchten Merkmalsträger.
  - typ: auswahl
    label: 'b) ordinales Merkmal'
    optionen: ['Zahlungsart', 'Bewertung in Sternen', 'Bestellwert in Euro']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Die Zahlungsarten haben keine natürliche Reihenfolge. Sie sind nominal.
      - wert: 2
        meldung: Beim Bestellwert haben Differenzen eine feste Bedeutung, $10$ Euro mehr sind immer $10$ Euro mehr. Er ist metrisch.
hinweise:
  - Merkmalsträger sind hier die Bestellungen. Welche davon werden wirklich untersucht?
  - 'Sterne haben eine Rangfolge. Ist der Abstand von 1 zu 2 Sternen sicher genauso groß wie von 4 zu 5 Sternen?'
loesung: |
  Ansatz: Zuerst Merkmalsträger, Grundgesamtheit und Stichprobe trennen, dann jedes Merkmal mit den zwei Fragen einordnen.
  ---
  a) Grundgesamtheit sind alle $48\,000$ Bestellungen, die Stichprobe die $600$ ausgewählten. Also $n = 600$.
  ---
  b) Zahlungsart: nominal. Sterne: Rangfolge, aber die Abstände sind Empfindungen und nicht messbar, also ordinal. Bestellwert: metrisch.
```

```aufgabe
id: st-gk-mittel-sinnvoll
titel: Sinnvolle Rechnung oder nicht?
niveau: 2
lernziel: 0
kompetenz: begruenden
angabe: |
  Beurteile, ob die Rechnung sinnvoll ist.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: 'Die mittlere Wartezeit an der Kasse beträgt $3{,}2$ Minuten.'
        richtig: true
        erklaerung: 'Wartezeit ist metrisch. Ein Mittelwert ist sinnvoll.'
      - text: 'Die mittlere Kleidergröße (S, M, L, XL) der Belegschaft ist „M bis L“.'
        richtig: false
        erklaerung: 'Kleidergrößen sind ordinal. Sinnvoll ist der Median, zum Beispiel „Die Hälfte trägt höchstens M“.'
      - text: 'Der Median der Platzierungen in einem Lauf ist sinnvoll.'
        richtig: true
        erklaerung: 'Platzierungen haben eine Rangfolge. Für den Median reicht das.'
      - text: 'Die häufigste Studienrichtung ist Informatik.'
        richtig: true
        erklaerung: 'Das ist der Modus. Er ist schon für nominale Daten erlaubt.'
    fehler:
      - wert: [r, r, r, r]
        meldung: Bei den Kleidergrößen gibt es keine festen Abstände zwischen S, M, L und XL. Einen Mittelwert darf man daher nicht bilden.
hinweise:
  - Bestimme bei jedem Merkmal das Skalenniveau.
  - 'Vergleiche dann mit der Regel: Modus ab nominal, Median ab ordinal, Mittelwert nur metrisch.'
loesung: |
  Ansatz: Skalenniveau bestimmen und mit der Kennzahl vergleichen.
  ---
  Wartezeit metrisch, Mittelwert erlaubt. Kleidergröße ordinal, Mittelwert nicht sinnvoll.
  ---
  Platzierung ordinal, Median erlaubt. Studienrichtung nominal, Modus erlaubt.
```

```aufgabe
id: st-gk-umfrage-kritik
titel: Eine Umfrage beurteilen
niveau: 3
lernziel: 0
kompetenz: begruenden
angabe: |
  Ein Fitnessstudio befragt an einem Samstagvormittag $150$ Personen, die gerade trainieren. $82\,\%$ sagen, sie
  trainieren mindestens dreimal pro Woche. Die Zeitung schreibt daraus: „Vier von fünf Erwachsenen trainieren
  mindestens dreimal pro Woche.“

  a) Was ist hier die Stichprobe, und welche Grundgesamtheit hat die Zeitung im Kopf?

  b) Begründe, warum der Schluss nicht zulässig ist. Nenne mindestens zwei Gründe für eine Verzerrung.

  c) Wie könnte man die Frage besser untersuchen?
teile:
  - typ: text
    muster: |
      a) Stichprobe: die $150$ Personen, die am Samstagvormittag im Studio waren. Die Zeitung meint alle Erwachsenen.

      b) Die Stichprobe stammt aus einer ganz anderen Gruppe. Erstens trainieren dort nur Mitglieder eines Fitnessstudios.
      Wer nie trainiert, kann gar nicht befragt werden. Zweitens trifft man zu einem bestimmten Zeitpunkt vor allem
      Leute, die oft kommen: Wer täglich trainiert, ist viel wahrscheinlicher gerade da als jemand, der einmal pro Monat
      kommt. Beide Effekte treiben den Anteil nach oben.

      c) Eine Zufallsstichprobe aus allen Erwachsenen ziehen, zum Beispiel über ein Melderegister, und diese Personen
      befragen, egal ob sie trainieren oder nicht.
hinweise:
  - Vergleiche die Gruppe der Befragten mit der Gruppe, über die eine Aussage getroffen wird.
  - 'Überlege: Wer ist an einem Samstagvormittag mit größerer Wahrscheinlichkeit im Studio, jemand, der täglich kommt, oder jemand, der selten kommt?'
loesung: |
  Ansatz: Eine Aussage gilt nur für die Grundgesamtheit, aus der die Stichprobe zufällig gezogen wurde.
  ---
  a) Stichprobe sind die $150$ anwesenden Personen. Gemeint sind aber alle Erwachsenen.
  ---
  b) Nichtmitglieder fehlen ganz. Außerdem sind Vielbesucher zu einem zufälligen Zeitpunkt häufiger anwesend. Beides verzerrt nach oben.
  ---
  c) Besser: eine Zufallsstichprobe aus allen Erwachsenen. Antwortsatz: Die $82\,\%$ beschreiben nur die Anwesenden, nicht die Bevölkerung.
```

```aufgabe
id: st-gk-gefuehrt
titel: Skalenniveau Schritt für Schritt
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  In einer Erhebung über Smartphones wird der **Akkustand in Prozent** beim Verlassen des Hauses notiert. Welches
  Skalenniveau hat dieses Merkmal?
teile:
  - typ: auswahl
    optionen: ['nominal', 'ordinal', 'metrisch']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Akkustände lassen sich der Größe nach ordnen, $80\,\%$ ist mehr als $40\,\%$. Nominal ist also zu wenig.
      - wert: 1
        meldung: 'Eine Rangfolge gibt es. Aber hier haben auch die Abstände eine feste Bedeutung: $10$ Prozentpunkte mehr sind überall gleich viel Ladung.'
hinweise:
  - Stell die zwei Fragen nacheinander. Erstens Reihenfolge, zweitens feste Abstände.
gefuehrt:
  - text: 'Erste Frage: Gibt es eine natürliche Reihenfolge der Werte?'
    teil: { typ: auswahl, optionen: ['ja', 'nein'], richtig: [0] }
    erklaerung: 'Ja. $90\,\%$ ist mehr Ladung als $30\,\%$. Das Merkmal ist also mindestens ordinal.'
  - text: 'Zweite Frage: Bedeutet ein Unterschied von $10$ Prozentpunkten überall dasselbe?'
    teil: { typ: auswahl, optionen: ['ja', 'nein'], richtig: [0] }
    erklaerung: 'Ja. Von $20$ auf $30\,\%$ kommt gleich viel Ladung dazu wie von $70$ auf $80\,\%$. Die Abstände sind messbar.'
  - text: 'Welches Skalenniveau folgt daraus?'
    teil: { typ: auswahl, optionen: ['nominal', 'ordinal', 'metrisch'], richtig: [2] }
    erklaerung: 'Reihenfolge und feste Abstände: metrisch. Weil jeder Zwischenwert möglich ist, ist das Merkmal sogar stetig.'
loesung: |
  Ansatz: zwei Fragen, Reihenfolge und feste Abstände.
  ---
  Es gibt eine Reihenfolge, und Differenzen in Prozentpunkten bedeuten überall dieselbe Ladungsmenge. Also ist das Merkmal metrisch.
```

## Häufigkeiten und empirische Verteilungsfunktion

```aufgabe
id: st-hf-check-bruch
titel: Bruch als Dezimalzahl
niveau: 1
art: check
angabe: |
  Schreib $\tfrac{7}{20}$ als Dezimalzahl und in Prozent. Gib die Dezimalzahl ein.
  (Wiederholung: [1.6 Prozentrechnung](/lernen/mathe3/zahlen/prozentrechnung))
teile:
  - typ: zahl
    loesung: "7/20"
    anzeige: '0{,}35'
    fehler:
      - wert: "0.7"
        meldung: 'Probe: $0{,}7 \cdot 20 = 14$, nicht $7$. Erweitere $\tfrac{7}{20}$ mit $5$ auf $\tfrac{35}{100}$.'
loesung: |
  Erweitern mit $5$, damit im Nenner $100$ steht: $\tfrac{7}{20} = \tfrac{35}{100}$.
  ---
  $\tfrac{35}{100} = 0{,}35 = 35\,\%$.
```

Die Rohdaten einer Erhebung, die **Urliste**, sind eine ungeordnete Folge von Werten. Wer 20 Werte in zufälliger
Reihenfolge sieht, erkennt darin kaum etwas. Der erste Schritt ist daher fast immer: zählen und ordnen. Daraus
entsteht eine **Häufigkeitstabelle**.

### Absolute, relative und kumulierte Häufigkeit

:::beispiel[Von der Urliste zur Häufigkeitstabelle]
Ein Server protokolliert für 20 Anmeldungen, wie viele Fehlversuche es vor der erfolgreichen Anmeldung gab. Die Urliste lautet:
$$0,\ 1,\ 0,\ 2,\ 1,\ 0,\ 0,\ 3,\ 1,\ 0,\ 2,\ 0,\ 1,\ 0,\ 4,\ 1,\ 0,\ 2,\ 0,\ 1.$$

**Schritt 1, zählen:** Wir gehen die Liste durch und machen für jeden Wert einen Strich. Die $0$ kommt $9$-mal vor,
die $1$ sechsmal, die $2$ dreimal, die $3$ und die $4$ je einmal. Kontrolle: $9 + 6 + 3 + 1 + 1 = 20$.

**Schritt 2, Anteile:** Jede Anzahl wird durch $n = 20$ geteilt, zum Beispiel $\tfrac{9}{20} = 0{,}45$.

**Schritt 3, aufsummieren:** Von links nach rechts werden die Anteile addiert, zum Beispiel $0{,}45 + 0{,}30 = 0{,}75$.

|Fehlversuche $a_j$|0|1|2|3|4|
|---|---|---|---|---|---|
|absolut $H$|9|6|3|1|1|
|relativ $h$|$0{,}45$|$0{,}30$|$0{,}15$|$0{,}05$|$0{,}05$|
|kumuliert $F$|$0{,}45$|$0{,}75$|$0{,}90$|$0{,}95$|$1{,}00$|

Ablesen: $75\,\%$ der Anmeldungen hatten **höchstens** einen Fehlversuch. Bei $1 - 0{,}75 = 25\,\%$ waren es mindestens zwei.
:::

Die drei Zeilen der Tabelle haben eigene Namen. Ab jetzt sind $x_1, \dots, x_n$ die $n$ erhobenen Werte, und
$a_1 < a_2 < \dots < a_m$ sind die verschiedenen Ausprägungen, die darin vorkommen.

:::definition[Häufigkeiten]
- Die **absolute Häufigkeit** $H(a_j)$ ist die Anzahl der Werte, die gleich $a_j$ sind.
- Die **relative Häufigkeit** $h(a_j) = \dfrac{H(a_j)}{n}$ ist der Anteil dieser Werte, oft in Prozent.
- Die **kumulierte relative Häufigkeit** $F(a_j) = h(a_1) + h(a_2) + \dots + h(a_j)$ ist der Anteil der Werte, die **höchstens** $a_j$ sind.
:::

Dabei ist $n$ der Stichprobenumfang. Zwei Kontrollen helfen immer: Die absoluten Häufigkeiten ergeben zusammen $n$,
und die relativen Häufigkeiten ergeben zusammen $1$. Die kumulierte Häufigkeit endet deshalb immer bei $1$. Das Wort
**kumuliert** kommt vom lateinischen *cumulus*, „Haufen“, und heißt „aufgehäuft“.

Kumulieren ist nur sinnvoll, wenn die Werte eine Reihenfolge haben, also ab der Ordinalskala. Bei Betriebssystemen
wäre „höchstens macOS“ sinnlos.

Die relative Häufigkeit ist das Gegenstück zur Wahrscheinlichkeit aus
[16.2 Laplace-Wahrscheinlichkeit und relative Häufigkeit](/lernen/mathe3/wahrscheinlichkeit/laplace-wahrscheinlichkeit-und-relative-haeufigkeit).
Dort ist die Wahrscheinlichkeit der Wert, um den sich die relative Häufigkeit bei sehr vielen Versuchen einpendelt.

:::beispiel[Anzahl der Geschwister]
25 Personen wurden nach der Anzahl ihrer Geschwister gefragt:

|Geschwister $a_j$|0|1|2|3|4|
|---|---|---|---|---|---|
|absolut $H$|5|10|6|3|1|
|relativ $h$|$0{,}20$|$0{,}40$|$0{,}24$|$0{,}12$|$0{,}04$|
|kumuliert $F$|$0{,}20$|$0{,}60$|$0{,}84$|$0{,}96$|$1{,}00$|

Die relativen Häufigkeiten entstehen durch Teilen durch $25$, zum Beispiel $\tfrac{10}{25} = 0{,}40$.

- „Höchstens ein Geschwister“ liest man direkt ab: $F(1) = 0{,}60$, also $60\,\%$.
- „Mindestens drei Geschwister“ ist das Gegenteil von „höchstens zwei“: $1 - F(2) = 1 - 0{,}84 = 0{,}16$, also $16\,\%$.
- „Genau zwei“ ist der Sprung von $F(1)$ auf $F(2)$: $0{,}84 - 0{,}60 = 0{,}24$.
:::

```plot
x: [-1, 5]
y: [0, 0.45]
achsen: { x: "Anzahl Geschwister", y: "relative Häufigkeit" }
balken:
  - { x: 0, y: 0.20 }
  - { x: 1, y: 0.40 }
  - { x: 2, y: 0.24 }
  - { x: 3, y: 0.12 }
  - { x: 4, y: 0.04 }
beschriftung: Säulendiagramm der relativen Häufigkeiten der Geschwisteranzahl von 25 Personen. Am häufigsten ist ein Geschwister mit 40 Prozent.
```

:::achtung[„Mindestens“ mit der falschen Grenze]
Gesucht ist der Anteil der Personen mit **mindestens zwei** Geschwistern. Eine typische falsche Rechnung:
$$1 - F(2) = 1 - 0{,}84 = 0{,}16. \qquad \text{(falsch)}$$
$F(2)$ enthält auch die Personen mit genau zwei Geschwistern. Zieht man es ab, fehlen genau diese. Das Gegenteil von
„mindestens zwei“ ist „höchstens eins“. Richtig ist $1 - F(1) = 1 - 0{,}60 = 0{,}40$. Kontrolle durch Addieren:
$0{,}24 + 0{,}12 + 0{,}04 = 0{,}40$.
:::

:::achtung[Durch die falsche Zahl geteilt]
Bei den Geschwistern gibt es fünf verschiedene Ausprägungen. Eine typische falsche Rechnung:
$$h(1) = \frac{10}{5} = 2. \qquad \text{(falsch)}$$
Ein Anteil kann nie größer als $1$ sein. Geteilt wird durch die Zahl der **Personen** $n = 25$, nicht durch die Zahl der
verschiedenen Werte. Richtig ist $h(1) = \tfrac{10}{25} = 0{,}4$.
:::

```aufgabe
id: st-haeufigkeit-tabelle
titel: Häufigkeitstabelle auswerten
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Die Noten von 20 Studierenden in einer Klausur:

  |Note|1|2|3|4|5|
  |---|---|---|---|---|---|
  |Anzahl|3|5|7|3|2|

  a) Wie groß ist die relative Häufigkeit der Note 3?

  b) Welcher Anteil hat **höchstens** die Note 3?

  c) Welcher Anteil hat nicht bestanden (Note 5)?

  Gib alle Anteile als Dezimalzahlen an.
teile:
  - typ: zahl
    label: 'a) $h(3)$'
    loesung: "7/20"
    anzeige: '0{,}35'
    fehler:
      - wert: "7/5"
        meldung: Du hast durch die Zahl der verschiedenen Noten geteilt. Geteilt wird durch die Zahl der Studierenden, $n = 20$.
  - typ: zahl
    label: 'b) $F(3)$'
    loesung: "(3+5+7)/20"
    anzeige: '0{,}75'
    fehler:
      - wert: "7/20"
        meldung: Das ist nur der Anteil mit **genau** Note 3. „Höchstens 3“ umfasst auch die Noten 1 und 2.
  - typ: zahl
    label: 'c) $h(5)$'
    loesung: "2/20"
    anzeige: '0{,}1'
    fehler:
      - wert: "2"
        meldung: Das ist die absolute Häufigkeit. Gefragt ist der Anteil, also durch $n$ teilen.
hinweise:
  - 'Bestimme zuerst $n$, die Summe aller Anzahlen. „Höchstens 3“ heißt: Note 1, 2 oder 3.'
loesung: |
  Ansatz: $n$ als Summe der Anzahlen, dann relative Häufigkeit $= \tfrac{\text{Anzahl}}{n}$. Es ist $n = 3 + 5 + 7 + 3 + 2 = 20$.
  ---
  a) $h(3) = \tfrac{7}{20} = 0{,}35$. b) $F(3) = \tfrac{3 + 5 + 7}{20} = \tfrac{15}{20} = 0{,}75$.
  ---
  c) $h(5) = \tfrac{2}{20} = 0{,}1$. Antwortsatz: $35\,\%$ haben eine 3, $75\,\%$ höchstens eine 3, und $10\,\%$ sind durchgefallen.
```

```aufgabe
id: st-hf-urliste
titel: Aus der Urliste zählen
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  15 Personen geben an, wie viele Tassen Kaffee sie täglich trinken:
  $$2,\ 0,\ 1,\ 3,\ 2,\ 2,\ 1,\ 0,\ 2,\ 4,\ 1,\ 2,\ 3,\ 1,\ 2.$$
  a) Wie oft kommt der Wert $2$ vor?

  b) Wie groß ist seine relative Häufigkeit?

  c) Welcher Anteil trinkt **höchstens** eine Tasse?
teile:
  - typ: zahl
    label: 'a) $H(2)$'
    loesung: "6"
    fehler:
      - wert: "5"
        meldung: Zähl noch einmal mit Strichen. Am sichersten streichst du jeden gezählten Wert in der Liste durch.
  - typ: zahl
    label: 'b) $h(2)$'
    loesung: "6/15"
    anzeige: '0{,}4'
    fehler:
      - wert: "6/5"
        meldung: Geteilt wird durch die Zahl der Personen, $15$, nicht durch die Zahl der verschiedenen Werte.
  - typ: zahl
    label: 'c) $F(1)$'
    loesung: "(2+4)/15"
    anzeige: '0{,}4'
    fehler:
      - wert: "4/15"
        meldung: Das ist nur „genau eine Tasse“. „Höchstens eine“ schließt auch die Personen mit null Tassen ein.
hinweise:
  - 'Zähle für jeden Wert $0$ bis $4$ die Striche. Kontrolle: Zusammen müssen es $15$ sein.'
loesung: |
  Ansatz: Strichliste anlegen. Es ergibt sich $H(0) = 2$, $H(1) = 4$, $H(2) = 6$, $H(3) = 2$, $H(4) = 1$. Kontrolle: $2 + 4 + 6 + 2 + 1 = 15$.
  ---
  a) $H(2) = 6$. b) $h(2) = \tfrac{6}{15} = 0{,}4$.
  ---
  c) $F(1) = \tfrac{2 + 4}{15} = \tfrac{6}{15} = 0{,}4$. Antwortsatz: $40\,\%$ trinken höchstens eine Tasse.
```

### Die empirische Verteilungsfunktion

Die kumulierten Häufigkeiten kann man als Funktion über der ganzen Zahlengeraden auffassen. Das Wort **empirisch**
bedeutet „aus Beobachtungen gewonnen“.

:::definition[Empirische Verteilungsfunktion]
Für Daten $x_1, \dots, x_n$ und jede reelle Zahl $x$ ist
$$F_n(x) = \frac{\text{Anzahl der Werte, die} \le x \text{ sind}}{n}.$$
:::

Dabei ist $n$ wieder der Stichprobenumfang. $F_n(x)$ beantwortet die Frage: Welcher Anteil der Daten ist höchstens $x$?

Der Graph ist eine **Treppenfunktion**. Links von allen Daten ist $F_n = 0$, rechts von allen Daten ist $F_n = 1$.
An jeder Ausprägung $a_j$ springt $F_n$ um die relative Häufigkeit $h(a_j)$ nach oben, dazwischen bleibt es konstant.
Die **Sprunghöhe** an einer Stelle ist also der Anteil genau dieses Werts.

```plot
x: [-1, 5.5]
y: [0, 1.1]
achsen: { x: "Anzahl Geschwister", y: "F(x)" }
strecken:
  - { von: [-1, 0], nach: [0, 0], farbe: 0 }
  - { von: [0, 0.2], nach: [1, 0.2], farbe: 0 }
  - { von: [1, 0.6], nach: [2, 0.6], farbe: 0 }
  - { von: [2, 0.84], nach: [3, 0.84], farbe: 0 }
  - { von: [3, 0.96], nach: [4, 0.96], farbe: 0 }
  - { von: [4, 1], nach: [5.5, 1], farbe: 0 }
  - { von: [-1, 0.5], nach: [5.5, 0.5], gestrichelt: true }
punkte:
  - { x: 0, y: 0.2, farbe: 0 }
  - { x: 1, y: 0.6, label: "Median = 1", farbe: 1 }
  - { x: 2, y: 0.84, farbe: 0 }
  - { x: 3, y: 0.96, farbe: 0 }
  - { x: 4, y: 1, farbe: 0 }
beschriftung: "Empirische Verteilungsfunktion der Geschwisterzahlen. Bei x = 1 springt sie von 0,2 auf 0,6 und überschreitet damit die gestrichelte Höhe 0,5. Der Median ist daher 1."
```

Am Graphen kann man den **Median** ablesen, also den mittleren Wert der geordneten Daten. Er liegt dort, wo $F_n$ über
die Höhe $0{,}5$ springt. Bei den Geschwistern springt $F_n$ bei $x = 1$ von $0{,}2$ auf $0{,}6$.
Mindestens die Hälfte hat also höchstens ein Geschwister, und der Median ist $1$. Bleibt $F_n$ auf einer Stufe genau bei
$0{,}5$ stehen, ist der Median die Mitte zwischen dieser Stelle und dem nächsten Datenwert. Genauer behandeln wir den
Median in [17.4 Mittelwert, Median und Modus](/lernen/mathe3/statistik/mittelwert-median-und-modus).

Allgemeiner heißt ein Wert, unter dem ein Anteil $p$ der Daten liegt, **Quantil**. In diesem Abschnitt verwenden wir
die einfache Festlegung: Das $90\,\%$-Quantil ist der kleinste Wert $x$ mit $F_n(x) \ge 0{,}9$. Bei den Fehlversuchen im
ersten Beispiel ist $F_n(2) = 0{,}90$, also ist das $90\,\%$-Quantil nach dieser Festlegung gleich $2$. Manche Bücher und
Programme mitteln in so einem Grenzfall, in dem $F_n$ genau $0{,}9$ erreicht, wie beim Median zwei Werte. Monitoring-Werkzeuge nennen solche Werte **Perzentile**, etwa „p90“.

:::merke[Häufigkeiten in drei Schritten]
1. **Zählen:** Für jede Ausprägung die absolute Häufigkeit $H$ bestimmen. Kontrolle: Summe gleich $n$.
2. **Teilen:** $h = H / n$. Kontrolle: Summe gleich $1$.
3. **Aufsummieren:** $F$ von links nach rechts. „Höchstens $a$“ ist $F(a)$. „Mindestens $a$“ ist $1 - F(\text{Wert vor } a)$. „Genau $a$“ ist die Sprunghöhe.
:::

Die empirische Verteilungsfunktion ist das Gegenstück zur Verteilungsfunktion $F(x) = P(X \le x)$ einer
Zufallsvariablen aus [16.10 Zufallsvariablen und Erwartungswert](/lernen/mathe3/wahrscheinlichkeit/zufallsvariablen-und-erwartungswert). Je größer die Zufallsstichprobe, desto näher kommt $F_n$ der Verteilungsfunktion der
Grundgesamtheit. Das ist eine Form des Gesetzes der großen Zahlen.

```aufgabe
id: st-hf-mindestens
titel: Mindestens und mehr als
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Ein Lieferdienst notiert bei 40 Bestellungen die Verspätung in ganzen Tagen:

  |Verspätung in Tagen|0|1|2|3|4|5|
  |---|---|---|---|---|---|---|
  |Anzahl|12|9|7|5|4|3|

  a) Welcher Anteil der Bestellungen war **mindestens** 3 Tage verspätet?

  b) Welcher Anteil war **mehr als** 1 Tag verspätet?

  Gib beide Anteile als Dezimalzahlen an.
teile:
  - typ: zahl
    label: 'a) mindestens 3 Tage'
    loesung: "(5+4+3)/40"
    anzeige: '0{,}3'
    fehler:
      - wert: "(4+3)/40"
        meldung: Du hast die Bestellungen mit genau 3 Tagen weggelassen. „Mindestens 3“ schließt die 3 ein. Das Gegenteil ist „höchstens 2“.
  - typ: zahl
    label: 'b) mehr als 1 Tag'
    loesung: "1 - (12+9)/40"
    anzeige: '0{,}475'
    fehler:
      - wert: "1 - 12/40"
        meldung: „Mehr als 1“ heißt mindestens 2. Das Gegenteil ist „höchstens 1“, also $0$ **und** $1$ Tag.
      - wert: "1 - (12+9+7)/40"
        meldung: Du hast auch die Bestellungen mit genau 2 Tagen abgezogen. „Mehr als 1“ schließt die 2 ein.
hinweise:
  - Übersetze zuerst in Werte. „Mindestens 3“ heißt 3, 4 oder 5. „Mehr als 1“ heißt 2, 3, 4 oder 5.
  - Entweder diese Anzahlen direkt addieren oder über das Gegenteil rechnen, also $1 - F(\text{letzter Wert, der nicht dazugehört})$.
loesung: |
  Ansatz: Die Formulierung in eine Menge von Werten übersetzen und deren Anteil bestimmen.
  ---
  a) „Mindestens 3“ sind die Werte 3, 4, 5: $\tfrac{5 + 4 + 3}{40} = \tfrac{12}{40} = 0{,}3$.
  ---
  b) „Mehr als 1“ ist das Gegenteil von „höchstens 1“: $1 - \tfrac{12 + 9}{40} = 1 - 0{,}525 = 0{,}475$.
  ---
  Probe für b) durch direktes Addieren: $\tfrac{7 + 5 + 4 + 3}{40} = \tfrac{19}{40} = 0{,}475$.
```

```aufgabe
id: st-hf-verteilungsfunktion
titel: Die Treppe lesen
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: |
  Der Graph zeigt die empirische Verteilungsfunktion der Noten einer Prüfung (Noten 1 bis 5).
  a) Welcher Anteil hat genau die Note 3?

  b) Welcher Anteil hat eine schlechtere Note als 2?

  c) Welche Note ist der Median?
plot:
  x: [0, 6]
  y: [0, 1.1]
  achsen: { x: "Note", y: "F(x)" }
  strecken:
    - { von: [0, 0], nach: [1, 0], farbe: 0 }
    - { von: [1, 0.1], nach: [2, 0.1], farbe: 0 }
    - { von: [2, 0.35], nach: [3, 0.35], farbe: 0 }
    - { von: [3, 0.7], nach: [4, 0.7], farbe: 0 }
    - { von: [4, 0.9], nach: [5, 0.9], farbe: 0 }
    - { von: [5, 1], nach: [6, 1], farbe: 0 }
  punkte:
    - { x: 1, y: 0.1, label: "0,1" }
    - { x: 2, y: 0.35, label: "0,35" }
    - { x: 3, y: 0.7, label: "0,7" }
    - { x: 4, y: 0.9, label: "0,9" }
    - { x: 5, y: 1, label: "1" }
teile:
  - typ: zahl
    label: 'a) $h(3)$'
    loesung: "0.7 - 0.35"
    anzeige: '0{,}35'
    fehler:
      - wert: "0.7"
        meldung: '$0{,}7$ ist $F(3)$, also der Anteil mit **höchstens** Note 3. Der Anteil genau dieser Note ist die Sprunghöhe bei $3$.'
  - typ: zahl
    label: 'b) schlechter als 2'
    loesung: "1 - 0.35"
    anzeige: '0{,}65'
    fehler:
      - wert: "1 - 0.1"
        meldung: Du hast nur die Note 1 abgezogen. „Schlechter als 2“ heißt Note 3, 4 oder 5. Das Gegenteil sind die Noten 1 **und** 2.
  - typ: zahl
    label: 'c) Median'
    loesung: "3"
    fehler:
      - wert: "2"
        meldung: 'Bei Note 2 ist $F$ erst $0{,}35$. Weniger als die Hälfte hat höchstens eine 2. Der Median liegt dort, wo die Treppe über die Höhe $0{,}5$ springt.'
hinweise:
  - Die Höhe einer Stufe ist $F$, der Anteil mit höchstens dieser Note. Die Sprunghöhe ist der Anteil genau dieser Note.
  - 'Für b) ist das Gegenteil „Note 1 oder 2“, also $F(2)$. Für c) suche die Stelle, an der $F$ zum ersten Mal mindestens $0{,}5$ ist.'
loesung: |
  Ansatz: Stufenhöhe ist kumuliert, Sprunghöhe ist die relative Häufigkeit.
  ---
  a) Bei $3$ springt $F$ von $0{,}35$ auf $0{,}7$. Also $h(3) = 0{,}7 - 0{,}35 = 0{,}35$.
  ---
  b) Schlechter als 2 ist das Gegenteil von „höchstens 2“: $1 - F(2) = 1 - 0{,}35 = 0{,}65$.
  ---
  c) $F(2) = 0{,}35 < 0{,}5$ und $F(3) = 0{,}7 \ge 0{,}5$. Der Median ist die Note 3.
```

```aufgabe
id: st-hf-rueckwaerts
titel: Von der kumulierten Häufigkeit zurück
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  In einer Umfrage unter $40$ Personen zur Zahl der genutzten Streamingdienste gilt $F(1) = 0{,}45$ und $F(2) = 0{,}8$.
  Wie viele Personen nutzen **genau** zwei Dienste?
teile:
  - typ: zahl
    loesung: "(0.8 - 0.45)*40"
    fehler:
      - wert: "0.8*40"
        meldung: '$0{,}8 \cdot 40 = 32$ Personen nutzen **höchstens** zwei Dienste. Davon musst du die abziehen, die höchstens einen nutzen.'
      - wert: "0.8 - 0.45"
        meldung: Das ist der Anteil. Gefragt ist die Anzahl der Personen, also mit $n = 40$ multiplizieren.
hinweise:
  - Genau zwei ist der Sprung von $F(1)$ auf $F(2)$.
  - 'Aus dem Anteil wird eine Anzahl, wenn du mit $n$ multiplizierst.'
loesung: |
  Ansatz: „genau 2“ ist die Sprunghöhe $h(2) = F(2) - F(1)$.
  ---
  $h(2) = 0{,}8 - 0{,}45 = 0{,}35$.
  ---
  $H(2) = 0{,}35 \cdot 40 = 14$. Antwortsatz: $14$ Personen nutzen genau zwei Streamingdienste.
```

```aufgabe
id: st-hf-fehler-finden
titel: Wo steckt der Fehler?
niveau: 2
lernziel: 1
kompetenz: begruenden
angabe: |
  Eine Mitschülerin wertet aus, wie viele Bücher 30 Personen im letzten Monat gelesen haben.

  |Bücher|0|1|2|3|
  |---|---|---|---|---|
  |Anzahl|9|12|6|3|
  |relativ|$0{,}3$|$0{,}4$|$0{,}2$|$0{,}15$|

  Die relativen Häufigkeiten ergeben zusammen $1{,}05$. Was ist passiert?
teile:
  - typ: auswahl
    optionen:
      - 'Bei 3 Büchern hat sie falsch geteilt. Richtig ist $\tfrac{3}{30} = 0{,}1$.'
      - 'Das ist ein normaler Rundungsfehler und kein Problem.'
      - 'Bei 1 Buch hat sie falsch geteilt. Richtig ist $\tfrac{12}{30} = 0{,}36$.'
      - 'Die Summe der relativen Häufigkeiten muss nicht $1$ sein.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Hier wird gar nicht gerundet. Alle Brüche mit Nenner $30$ ergeben hier exakte Dezimalzahlen. Eine Abweichung von $0{,}05$ ist ein echter Fehler.
      - wert: 2
        meldung: 'Rechne nach: $\tfrac{12}{30} = 0{,}4$. Dieser Wert stimmt.'
      - wert: 3
        meldung: Alle Personen zusammen sind $100\,\%$. Die relativen Häufigkeiten müssen also immer $1$ ergeben, höchstens mit kleinen Rundungsabweichungen.
hinweise:
  - Rechne jede relative Häufigkeit nach, also Anzahl durch $30$.
  - Die Summe muss $1$ sein. Welcher Wert ist um $0{,}05$ zu groß?
loesung: |
  Ansatz: Die Summe der relativen Häufigkeiten ist immer $1$. Jeden Eintrag einzeln nachrechnen.
  ---
  $\tfrac{9}{30} = 0{,}3$, $\tfrac{12}{30} = 0{,}4$ und $\tfrac{6}{30} = 0{,}2$ stimmen. Aber $\tfrac{3}{30} = 0{,}1$, nicht $0{,}15$.
  ---
  Probe: $0{,}3 + 0{,}4 + 0{,}2 + 0{,}1 = 1$. Der Fehler steckt beim Wert 3.
```

```aufgabe
id: st-hf-quantil
titel: Wie viele Fehler sind normal?
niveau: 3
lernziel: 1
kompetenz: modellieren
angabe: |
  Ein Team zählt bei 50 Software-Releases die gemeldeten Fehler in der ersten Woche:

  |Fehler|0|1|2|3|4|5|
  |---|---|---|---|---|---|---|
  |Releases|14|16|10|6|3|1|

  a) Berechne die kumulierte Häufigkeit $F(2)$.

  b) Bestimme das $90\,\%$-Quantil, also den kleinsten Wert $x$ mit $F(x) \ge 0{,}9$.

  c) Bestimme den Median.

  d) Das Team will intern warnen, wenn ein Release „ungewöhnlich viele“ Fehler hat. Schlage mit dem Ergebnis aus b) eine
  Regel vor und sag in einem Satz, was sie bedeutet.
teile:
  - typ: zahl
    label: 'a) $F(2)$'
    loesung: "(14+16+10)/50"
    anzeige: '0{,}8'
    fehler:
      - wert: "10/50"
        meldung: Das ist nur der Anteil mit genau zwei Fehlern. Kumuliert heißt, alle Werte bis einschließlich 2 zu addieren.
  - typ: zahl
    label: 'b) $90\,\%$-Quantil'
    loesung: "3"
    fehler:
      - wert: "2"
        meldung: 'Bei $2$ ist $F$ erst $0{,}8$. Das ist noch weniger als $0{,}9$. Geh zum nächsten Wert weiter.'
      - wert: "4"
        meldung: 'Bei $3$ ist $F = 0{,}92$, das reicht schon. Gesucht ist der **kleinste** Wert mit $F \ge 0{,}9$.'
  - typ: zahl
    label: 'c) Median'
    loesung: "1"
    fehler:
      - wert: "2.5"
        meldung: Das ist die Mitte der Werteskala von $0$ bis $5$. Der Median ist die Mitte der **Daten**, also dort, wo $F$ über die Höhe $0{,}5$ springt.
  - typ: text
    label: 'd) Regel'
    muster: |
      Regel: Warnung bei mehr als 3 Fehlern, also bei 4 oder mehr. Begründung: Bisher hatten $92\,\%$ der Releases
      höchstens 3 Fehler. Ein Release mit 4 oder mehr Fehlern gehört zu den schlechtesten $8\,\%$ der bisherigen Releases.
hinweise:
  - 'Bilde zuerst die ganze Zeile $F$: Teile die laufende Summe der Anzahlen durch $50$.'
  - 'Suche dann in dieser Zeile die erste Stelle mit $F \ge 0{,}9$ und die erste mit $F \ge 0{,}5$.'
loesung: |
  Ansatz: kumulierte Häufigkeiten bilden und darin Schwellen suchen.
  ---
  Laufende Summen $14, 30, 40, 46, 49, 50$, geteilt durch $50$: $F = 0{,}28;\ 0{,}60;\ 0{,}80;\ 0{,}92;\ 0{,}98;\ 1$.
  ---
  a) $F(2) = 0{,}8$. b) Erste Stelle mit $F \ge 0{,}9$ ist $x = 3$ mit $F(3) = 0{,}92$. c) Erste Stelle mit $F \ge 0{,}5$ ist $x = 1$ mit $F(1) = 0{,}6$.
  ---
  d) Mehr als 3 Fehler hatten nur $1 - 0{,}92 = 8\,\%$ der Releases. Eine Warnung ab 4 Fehlern meldet also nur auffällige Releases.
```

```aufgabe
id: st-hf-gefuehrt
titel: Häufigkeiten Schritt für Schritt
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Bei 25 Würfen eines Spielwürfels kam die Augenzahl 6 genau $5$-mal und die 5 viermal vor. Die Augenzahlen 1 bis 4
  kamen zusammen $16$-mal vor. Welcher Anteil der Würfe zeigte **mindestens** eine 5?
teile:
  - typ: zahl
    loesung: "(5+4)/25"
    anzeige: '0{,}36'
    fehler:
      - wert: "5/25"
        meldung: Das sind nur die Sechsen. „Mindestens 5“ umfasst die 5 **und** die 6.
      - wert: "16/25"
        meldung: Das ist der Anteil der Würfe mit höchstens 4, also das Gegenteil.
hinweise:
  - '„Mindestens 5“ heißt: 5 oder 6.'
gefuehrt:
  - text: Wie viele Würfe zeigten mindestens eine 5?
    teil: { typ: zahl, loesung: "5+4" }
    erklaerung: Die 5 kam viermal, die 6 fünfmal, zusammen $9$-mal.
  - text: Wie viele Würfe gab es insgesamt?
    teil: { typ: zahl, loesung: "25" }
    erklaerung: 'Kontrolle: $9 + 16 = 25$. Das passt.'
  - text: Berechne den Anteil als Dezimalzahl.
    teil: { typ: zahl, loesung: "9/25" }
    erklaerung: '$\tfrac{9}{25} = 0{,}36$, also $36\,\%$.'
  - text: Berechne denselben Anteil über das Gegenteil, also $1 - $ Anteil von „höchstens 4“.
    teil: { typ: zahl, loesung: "1 - 16/25" }
    erklaerung: '$1 - \tfrac{16}{25} = 1 - 0{,}64 = 0{,}36$. Beide Wege führen zum gleichen Ergebnis.'
loesung: |
  Ansatz: „mindestens 5“ in die Werte 5 und 6 übersetzen und deren Anteil bilden.
  ---
  $\tfrac{5 + 4}{25} = \tfrac{9}{25} = 0{,}36$. Probe über das Gegenteil: $1 - \tfrac{16}{25} = 0{,}36$.
```

## Diagramme: Säulen, Kreis und Histogramm

```aufgabe
id: st-dg-check-prozent
titel: Prozent vom Vollwinkel
niveau: 1
art: check
angabe: |
  Wie viel sind $18\,\%$ von $360°$? (Wiederholung: [1.6 Prozentrechnung](/lernen/mathe3/zahlen/prozentrechnung))
teile:
  - typ: zahl
    einheit: "°"
    loesung: "0.18*360"
    anzeige: '64{,}8'
    fehler:
      - wert: "18*360"
        meldung: '$18\,\%$ heißt $\tfrac{18}{100} = 0{,}18$. Du hast mit $18$ statt mit $0{,}18$ multipliziert.'
loesung: |
  $18\,\%$ ist der Faktor $0{,}18$.
  ---
  $0{,}18 \cdot 360° = 64{,}8°$.
```

Ein gutes Diagramm zeigt die Struktur von Daten auf einen Blick. Ein schlechtes Diagramm kann dagegen täuschen,
auch wenn jede einzelne Zahl stimmt. In diesem Abschnitt lernst du, welches Diagramm zu welchem Merkmal passt und wie
du ein Histogramm mit ungleich breiten Klassen richtig zeichnest.

### Säulen- und Kreisdiagramm

- Im **Säulendiagramm** steht über jeder Ausprägung eine Säule. Ihre Höhe ist die absolute oder relative Häufigkeit. Es passt zu nominalen, ordinalen und diskreten metrischen Merkmalen.
- Im **Kreisdiagramm** ist jede Ausprägung ein Kreissektor. Es zeigt Anteile eines Ganzen, typisch bei nominalen Merkmalen.

Beim Kreisdiagramm bekommt jede Ausprägung den Anteil $h(a_j)$ am Vollwinkel. Der **Mittelpunktswinkel** des Sektors ist
$$\alpha_j = h(a_j) \cdot 360°.$$
Dabei ist $h(a_j)$ die relative Häufigkeit der Ausprägung $a_j$.

:::beispiel[Kreisdiagramm für Betriebssysteme]
Bei einer Umfrage nutzen $45\,\%$ Windows, $30\,\%$ macOS, $20\,\%$ Linux und $5\,\%$ Sonstiges.

- Windows: $0{,}45 \cdot 360° = 162°$.
- macOS: $0{,}30 \cdot 360° = 108°$.
- Linux: $0{,}20 \cdot 360° = 72°$.
- Sonstiges: $0{,}05 \cdot 360° = 18°$.

Kontrolle: $162° + 108° + 72° + 18° = 360°$. Der Vollkreis ist genau aufgeteilt.
:::

Kreisdiagramme sind nur sinnvoll, wenn die Teile zusammen ein Ganzes bilden. Wenn bei einer Umfrage mehrere Antworten
erlaubt sind, ergeben die Anteile mehr als $100\,\%$. Dann ist ein Säulendiagramm die richtige Wahl.

### Klassen und Histogramm

Bei stetigen Merkmalen wie Fahrzeiten kommt fast jeder Wert nur einmal vor. Ein Säulendiagramm hätte dann lauter
Säulen der Höhe $1$. Man teilt den Wertebereich deshalb in **Klassen** ein, also in Intervalle, und zählt, wie viele
Werte in jede Klasse fallen.

- Die Klassen müssen **lückenlos** und **überschneidungsfrei** sein. Jeder Wert gehört zu genau einer Klasse.
- Üblich sind halboffene Intervalle wie $[10;\, 20)$. Das heißt: $10$ gehört dazu, $20$ nicht mehr.
- Durch die Klassenbildung verliert man Information. Man weiß nur noch, **in welcher** Klasse ein Wert liegt, nicht mehr **wo genau**.

Das Diagramm für klassierte Daten ist das **Histogramm**. Seine Rechtecke stoßen ohne Lücke aneinander, weil die
Klassen lückenlos sind. Die entscheidende Regel lautet: Im Histogramm zählt die **Fläche** eines Rechtecks, nicht seine Höhe.

:::definition[Häufigkeitsdichte]
Im Histogramm ist die Höhe eines Rechtecks die **Häufigkeitsdichte**
$$\text{Höhe} = \frac{\text{Häufigkeit der Klasse}}{\text{Klassenbreite}}.$$
Dann ist die Fläche eines Rechtecks, also Breite mal Höhe, genau die Häufigkeit der Klasse.
:::

Sind alle Klassen gleich breit, ist die Höhe proportional zur Häufigkeit. Das Histogramm sieht dann aus wie ein
Säulendiagramm ohne Lücken. Bei **ungleichen** Breiten musst du durch die Breite teilen.

:::beispiel[Fahrzeiten zur Uni]
30 Studierende geben ihre Fahrzeit zur Uni in Minuten an. Die Werte werden in vier Klassen eingeteilt.

|Klasse|$[0;\,10)$|$[10;\,20)$|$[20;\,40)$|$[40;\,60)$|
|---|---|---|---|---|
|Anzahl|4|10|12|4|
|Breite|10|10|20|20|
|Dichte pro Minute|$0{,}4$|$1{,}0$|$0{,}6$|$0{,}2$|

Die Dichte entsteht durch Teilen, zum Beispiel $\tfrac{12}{20} = 0{,}6$ Personen pro Minute.

In der Klasse $[20;\, 40)$ liegen die meisten Studierenden. Ihr Rechteck ist trotzdem niedriger als das von
$[10;\, 20)$. Die Klasse ist doppelt so breit, und **pro Minute** Fahrzeit gibt es dort weniger Studierende. Kontrolle
über die Fläche: $20 \cdot 0{,}6 = 12$ Personen.
:::

```plot
x: [-2, 62]
y: [0, 1.2]
achsen: { x: "Fahrzeit in min", y: "Personen pro min" }
flaechen:
  - { f: "0.4", von: 0, bis: 10, farbe: 0 }
  - { f: "1.0", von: 10, bis: 20, farbe: 0 }
  - { f: "0.6", von: 20, bis: 40, farbe: 0 }
  - { f: "0.2", von: 40, bis: 60, farbe: 0 }
strecken:
  - { von: [0, 0], nach: [0, 0.4], farbe: 0 }
  - { von: [0, 0.4], nach: [10, 0.4], farbe: 0 }
  - { von: [10, 0], nach: [10, 1.0], farbe: 0 }
  - { von: [10, 1.0], nach: [20, 1.0], farbe: 0 }
  - { von: [20, 0], nach: [20, 1.0], farbe: 0 }
  - { von: [20, 0.6], nach: [40, 0.6], farbe: 0 }
  - { von: [40, 0], nach: [40, 0.6], farbe: 0 }
  - { von: [40, 0.2], nach: [60, 0.2], farbe: 0 }
  - { von: [60, 0], nach: [60, 0.2], farbe: 0 }
beschriftung: "Histogramm der Fahrzeiten mit ungleichen Klassenbreiten. Die Höhe ist die Häufigkeitsdichte, die Fläche jedes Rechtecks die Anzahl der Personen: 4, 10, 12 und 4."
```

:::achtung[Absolute Häufigkeit als Höhe]
Bei den Fahrzeiten zeichnet jemand die Anzahl direkt als Höhe. Eine typische falsche Darstellung:
$$[10;\,20) \text{ mit Höhe } 10, \qquad [20;\,40) \text{ mit Höhe } 12. \qquad \text{(falsch)}$$
Das Rechteck über $[20;\,40)$ hätte dann die Fläche $20 \cdot 12 = 240$, das über $[10;\,20)$ nur $10 \cdot 10 = 100$.
Das Auge vergleicht Flächen und sieht mehr als doppelt so viele Personen. In Wahrheit sind es $12$ gegen $10$. Richtig
sind die Höhen $\tfrac{10}{10} = 1$ und $\tfrac{12}{20} = 0{,}6$.
:::

:::achtung[Achse, die nicht bei null beginnt]
Zwei Parteien kommen auf $51\,\%$ und $49\,\%$. Ein Säulendiagramm lässt die Achse bei $48\,\%$ beginnen. Dann sind
die sichtbaren Säulen $51 - 48 = 3$ und $49 - 48 = 1$ Einheiten hoch:
„Partei A ist dreimal so stark.“ Dieser Eindruck ist falsch.
Tatsächlich ist A nur um den Faktor $\tfrac{51}{49} \approx 1{,}04$ stärker. Bei Säulen muss die Achse bei $0$ beginnen,
oder die Unterbrechung muss deutlich markiert sein.
:::

```aufgabe
id: st-kreisdiagramm
titel: Winkel im Kreisdiagramm
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  a) In einem Kreisdiagramm soll ein Anteil von $35\,\%$ dargestellt werden. Wie groß ist der Mittelpunktswinkel des Sektors?

  b) Welchen Anteil stellt ein Sektor mit $54°$ dar? Gib eine Dezimalzahl an.
teile:
  - typ: zahl
    label: 'a) Winkel für $35\,\%$'
    einheit: "°"
    loesung: "0.35*360"
    fehler:
      - wert: "35"
        meldung: 'Prozent und Grad sind nicht dasselbe. Der Vollkreis hat $360°$, nicht $100°$. Rechne $0{,}35 \cdot 360°$.'
  - typ: zahl
    label: 'b) Anteil für $54°$'
    loesung: "54/360"
    anzeige: '0{,}15'
    fehler:
      - wert: "0.54"
        meldung: Du hast die Gradzahl wie Prozent gelesen. Der Anteil ist Winkel durch Vollwinkel, also $\tfrac{54°}{360°}$.
hinweise:
  - 'Winkel $= h \cdot 360°$ und umgekehrt $h = \tfrac{\text{Winkel}}{360°}$.'
loesung: |
  Ansatz: Der Sektor bekommt den Anteil $h$ am Vollwinkel $360°$.
  ---
  a) $0{,}35 \cdot 360° = 126°$. b) $h = \tfrac{54°}{360°} = 0{,}15$, also $15\,\%$.
```

```aufgabe
id: st-dg-welches-diagramm
titel: Welches Diagramm passt?
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Für 200 Downloads wurde die Dauer in Sekunden gemessen und in die Klassen $[0;\,2)$, $[2;\,5)$ und $[5;\,15)$ eingeteilt.
  Welches Diagramm stellt die Daten richtig dar?
teile:
  - typ: auswahl
    optionen:
      - 'ein Histogramm mit der Häufigkeitsdichte als Höhe'
      - 'ein Kreisdiagramm'
      - 'ein Säulendiagramm mit der Anzahl als Säulenhöhe'
      - 'ein Histogramm mit der Anzahl als Höhe'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Ein Kreisdiagramm zeigt Anteile, aber nicht, wie die Werte auf der Zahlengeraden liegen. Bei einem stetigen Merkmal geht so die wichtigste Information verloren.
      - wert: 2
        meldung: Säulen mit Lücken passen zu einzelnen Werten. Hier sind es lückenlose Intervalle, also Rechtecke ohne Abstand.
      - wert: 3
        meldung: Die Klassen sind verschieden breit, $2$, $3$ und $10$ Sekunden. Mit der Anzahl als Höhe würde die breite Klasse viel zu groß wirken.
hinweise:
  - Achte auf zwei Dinge. Ist das Merkmal stetig und klassiert? Sind die Klassen gleich breit?
loesung: |
  Ansatz: Klassierte stetige Daten zeigt man im Histogramm.
  ---
  Die Klassen haben die Breiten $2$, $3$ und $10$. Deshalb muss die Höhe die Häufigkeitsdichte sein, damit die Flächen den Anzahlen entsprechen.
```

```aufgabe
id: st-histogramm
titel: Histogramm richtig zeichnen
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Die Downloadzeiten von 50 Dateien in Sekunden wurden klassiert:

  |Klasse|$[0;\,2)$|$[2;\,4)$|$[4;\,10)$|$[10;\,20)$|
  |---|---|---|---|---|
  |Anzahl|12|18|15|5|

  a) Berechne die Höhen der Rechtecke (Häufigkeitsdichte in Dateien pro Sekunde) für die Klassen $[4;\,10)$ und $[10;\,20)$.

  b) Welche Klasse hat das höchste Rechteck?
teile:
  - typ: zahl
    label: 'a) Höhe für $[4;\,10)$'
    loesung: "15/6"
    anzeige: '2{,}5'
    fehler:
      - wert: "15"
        meldung: Das ist die Anzahl. Die Höhe ist Anzahl durch Klassenbreite, und die Breite ist hier $6$.
      - wert: "15/10"
        meldung: 'Die Klassenbreite ist $10 - 4 = 6$, nicht $10$. Breite heißt obere minus untere Grenze.'
  - typ: zahl
    label: 'a) Höhe für $[10;\,20)$'
    loesung: "5/10"
    anzeige: '0{,}5'
    fehler:
      - wert: "5"
        meldung: Das ist die Anzahl. Teile noch durch die Breite $10$.
  - typ: auswahl
    label: 'b) höchstes Rechteck'
    optionen: ['$[0;\,2)$', '$[2;\,4)$', '$[4;\,10)$', '$[10;\,20)$']
    richtig: [1]
    fehler:
      - wert: 2
        meldung: 'In $[4;\,10)$ liegen zwar viele Dateien, aber verteilt auf $6$ Sekunden. Vergleiche die Dichten, nicht die Anzahlen.'
hinweise:
  - Höhe gleich Anzahl durch Klassenbreite.
  - 'Die Breiten sind $2$, $2$, $6$ und $10$. Berechne alle vier Dichten und vergleiche sie.'
loesung: |
  Ansatz: Höhe ist Häufigkeitsdichte, also Anzahl durch Breite. Die Breiten sind $2$, $2$, $6$ und $10$.
  ---
  Dichten: $\tfrac{12}{2} = 6$, $\tfrac{18}{2} = 9$, $\tfrac{15}{6} = 2{,}5$ und $\tfrac{5}{10} = 0{,}5$.
  ---
  Das höchste Rechteck hat $[2;\,4)$ mit Höhe $9$. Probe über Flächen: $2 \cdot 6 + 2 \cdot 9 + 6 \cdot 2{,}5 + 10 \cdot 0{,}5 = 12 + 18 + 15 + 5 = 50$.
```

```aufgabe
id: st-dg-flaeche
titel: Anzahlen aus einem Histogramm ablesen
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: |
  Das Histogramm zeigt die Dauer von Telefonaten einer Hotline in Minuten. Die Höhe ist die Häufigkeitsdichte in
  Anrufen pro Minute.

  a) Wie viele Anrufe dauerten zwischen 10 und 20 Minuten?

  b) Welcher Anteil aller Anrufe dauerte 20 Minuten oder länger? (3 Nachkommastellen)
plot:
  x: [-2, 42]
  y: [0, 5]
  achsen: { x: "Dauer in min", y: "Anrufe pro min" }
  flaechen:
    - { f: "2", von: 0, bis: 5, farbe: 0 }
    - { f: "4", von: 5, bis: 10, farbe: 0 }
    - { f: "3", von: 10, bis: 20, farbe: 0 }
    - { f: "0.5", von: 20, bis: 40, farbe: 0 }
  strecken:
    - { von: [0, 2], nach: [5, 2], farbe: 0 }
    - { von: [5, 4], nach: [10, 4], farbe: 0 }
    - { von: [10, 3], nach: [20, 3], farbe: 0 }
    - { von: [20, 0.5], nach: [40, 0.5], farbe: 0 }
    - { von: [5, 0], nach: [5, 4], farbe: 0 }
    - { von: [10, 0], nach: [10, 4], farbe: 0 }
    - { von: [20, 0], nach: [20, 3], farbe: 0 }
teile:
  - typ: zahl
    label: 'a) Anzahl in $[10;\,20)$'
    loesung: "3*10"
    fehler:
      - wert: "3"
        meldung: '$3$ ist die Höhe, also Anrufe **pro Minute**. Die Klasse ist $10$ Minuten breit. Die Anzahl ist die Fläche.'
  - typ: zahl
    label: 'b) Anteil ab 20 min'
    loesung: "0.5*20/(2*5 + 4*5 + 3*10 + 0.5*20)"
    toleranz: 0.0005
    anzeige: '0{,}143'
    fehler:
      - wert: "0.5*20/60"
        meldung: Du hast die Gesamtzahl ohne die letzte Klasse gebildet. Alle vier Flächen zusammen ergeben die Gesamtzahl.
hinweise:
  - Im Histogramm ist die Anzahl einer Klasse die Fläche des Rechtecks, also Breite mal Höhe.
  - 'Berechne alle vier Flächen. Die Gesamtzahl ist ihre Summe.'
loesung: |
  Ansatz: Anzahl gleich Fläche gleich Breite mal Höhe.
  ---
  Flächen: $5 \cdot 2 = 10$, $5 \cdot 4 = 20$, $10 \cdot 3 = 30$ und $20 \cdot 0{,}5 = 10$. Zusammen $70$ Anrufe.
  ---
  a) In $[10;\,20)$ liegen $30$ Anrufe. b) Ab 20 Minuten: $\tfrac{10}{70} \approx 0{,}143$, also gut $14\,\%$.
```

```aufgabe
id: st-dg-kreis-rueckwaerts
titel: Gesamtzahl aus einem Sektor
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  In einem Kreisdiagramm über die Lieblingssportart einer Klasse hat der Sektor „Klettern“ einen Mittelpunktswinkel von
  $72°$. Er steht für $45$ Personen einer Befragung. Wie viele Personen wurden insgesamt befragt?
teile:
  - typ: zahl
    loesung: "45*360/72"
    fehler:
      - wert: "72/360*45"
        meldung: 'Damit hast du $\tfrac15$ von $45$ berechnet. Die $45$ Personen sind selbst schon $\tfrac15$ der Gesamtzahl.'
      - wert: "45*100/72"
        meldung: 'Der Vollkreis hat $360°$, nicht $100°$.'
hinweise:
  - 'Welchen Anteil hat der Sektor? $\tfrac{72°}{360°}$.'
  - '$45$ Personen sind dieser Anteil von der Gesamtzahl $N$. Stelle die Gleichung $h \cdot N = 45$ auf.'
loesung: |
  Ansatz: Der Sektor zeigt den Anteil $h = \tfrac{72°}{360°} = 0{,}2$ aller Befragten.
  ---
  Gleichung: $0{,}2 \cdot N = 45$, also $N = \tfrac{45}{0{,}2} = 225$.
  ---
  Probe: $\tfrac{45}{225} = 0{,}2$ und $0{,}2 \cdot 360° = 72°$. Antwortsatz: Es wurden $225$ Personen befragt.
```

```aufgabe
id: st-dg-klassen
titel: Klassen bilden
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Die Ladezeiten einer Webseite in Sekunden bei 15 Aufrufen:
  $$1{,}2;\ 3{,}5;\ 0{,}8;\ 2{,}9;\ 5{,}1;\ 1{,}7;\ 4{,}4;\ 2{,}2;\ 7{,}9;\ 3{,}1;\ 0{,}5;\ 2{,}6;\ 6{,}3;\ 1{,}9;\ 3{,}8.$$
  Teile sie in die Klassen $[0;\,2)$, $[2;\,4)$ und $[4;\,8)$ ein. Wie viele Werte liegen in jeder Klasse?
teile:
  - typ: zahl
    label: '$[0;\,2)$'
    loesung: "5"
    fehler:
      - wert: "4"
        meldung: Hast du die $1{,}9$ übersehen? Sie liegt noch in $[0;\,2)$.
  - typ: zahl
    label: '$[2;\,4)$'
    loesung: "6"
    fehler:
      - wert: "5"
        meldung: 'Zähle noch einmal: $3{,}5;\ 2{,}9;\ 2{,}2;\ 3{,}1;\ 2{,}6;\ 3{,}8$.'
  - typ: zahl
    label: '$[4;\,8)$'
    loesung: "4"
    fehler:
      - wert: "5"
        meldung: Du hast vermutlich einen Wert doppelt gezählt. Kontrolliere, dass alle drei Anzahlen zusammen $15$ ergeben.
hinweise:
  - 'Geh die Liste einmal durch und mach für jeden Wert einen Strich bei seiner Klasse. Kontrolle: Zusammen müssen es $15$ sein.'
loesung: |
  Ansatz: Strichliste, jeder Wert genau einer Klasse zugeordnet.
  ---
  $[0;\,2)$: $1{,}2;\ 0{,}8;\ 1{,}7;\ 0{,}5;\ 1{,}9$, also $5$. $[2;\,4)$: $3{,}5;\ 2{,}9;\ 2{,}2;\ 3{,}1;\ 2{,}6;\ 3{,}8$, also $6$. $[4;\,8)$: $5{,}1;\ 4{,}4;\ 7{,}9;\ 6{,}3$, also $4$.
  ---
  Kontrolle: $5 + 6 + 4 = 15$. Für ein Histogramm wären die Höhen $\tfrac52 = 2{,}5$, $\tfrac62 = 3$ und $\tfrac44 = 1$.
```

```aufgabe
id: st-dg-taeuschung
titel: Ein irreführendes Diagramm
niveau: 3
lernziel: 1
kompetenz: begruenden
angabe: |
  Ein Prospekt zeigt die Verfügbarkeit zweier Webhosting-Anbieter als Säulen: Anbieter A $99{,}8\,\%$, Anbieter B
  $99{,}6\,\%$. Die senkrechte Achse beginnt bei $99{,}5\,\%$.

  a) Wie oft so hoch wie die Säule von B erscheint die Säule von A im Bild?

  b) Um welchen Faktor ist die Verfügbarkeit von A tatsächlich größer? (3 Nachkommastellen)

  c) Ist der Unterschied trotzdem bedeutsam? Denk an die **Ausfallzeit** pro Jahr ($365 \cdot 24 = 8760$ Stunden) und begründe.
teile:
  - typ: zahl
    label: 'a) sichtbares Verhältnis'
    loesung: "(99.8-99.5)/(99.6-99.5)"
    fehler:
      - wert: "99.8/99.6"
        meldung: Das ist das echte Verhältnis. Im Bild sieht man aber nur die Teile der Säulen oberhalb von $99{,}5\,\%$.
  - typ: zahl
    label: 'b) echter Faktor'
    loesung: "99.8/99.6"
    toleranz: 0.0005
    anzeige: '1{,}002'
    fehler:
      - wert: "3"
        meldung: Das ist der Eindruck aus dem Bild. Der echte Faktor ist $99{,}8$ durch $99{,}6$.
  - typ: text
    label: 'c) Begründung'
    muster: |
      Die Ausfallzeit ist der Rest auf $100\,\%$. Bei A fällt der Dienst $0{,}2\,\%$ der Zeit aus, also etwa
      $0{,}002 \cdot 8760 \approx 17{,}5$ Stunden pro Jahr. Bei B sind es $0{,}4\,\%$, also etwa $35{,}0$ Stunden. Bei der
      Ausfallzeit ist B doppelt so schlecht. Das Diagramm übertreibt also den Unterschied der Verfügbarkeit. Die Frage nach
      den Ausfällen zeigt aber, dass der Unterschied für die Nutzer trotzdem wichtig ist. Ehrlich wäre ein Diagramm der
      Ausfallstunden mit Achse ab $0$.
hinweise:
  - Im Bild sieht man nur die Säulenteile über $99{,}5\,\%$, also $0{,}3$ und $0{,}1$ Prozentpunkte.
  - 'Ausfallzeit pro Jahr: $(100\,\% - \text{Verfügbarkeit}) \cdot 8760$ Stunden.'
loesung: |
  Ansatz: Sichtbare Höhe ist Wert minus Achsenbeginn. Der echte Vergleich nutzt die ganzen Werte.
  ---
  a) Sichtbar: $99{,}8 - 99{,}5 = 0{,}3$ gegen $99{,}6 - 99{,}5 = 0{,}1$. A erscheint dreimal so hoch.
  ---
  b) Tatsächlich: $\tfrac{99{,}8}{99{,}6} \approx 1{,}002$, also nur etwa $0{,}2\,\%$ mehr.
  ---
  c) Ausfall: A $0{,}002 \cdot 8760 \approx 17{,}5$ Stunden, B $0{,}004 \cdot 8760 \approx 35{,}0$ Stunden. Der Unterschied ist für Nutzer bedeutsam. Das Diagramm zeigt ihn aber verzerrt.
```

```aufgabe
id: st-dg-gefuehrt
titel: Ein Histogramm vorbereiten
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Das Alter von 60 Teilnehmenden eines Kurses wurde klassiert: $[18;\,25)$: $21$ Personen, $[25;\,35)$: $24$ Personen,
  $[35;\,65)$: $15$ Personen. Berechne die Höhe des Rechtecks über $[35;\,65)$ in Personen pro Lebensjahr.
teile:
  - typ: zahl
    loesung: "15/30"
    anzeige: '0{,}5'
    fehler:
      - wert: "15"
        meldung: Das ist die Anzahl. Weil die Klasse $30$ Jahre breit ist, musst du noch durch $30$ teilen.
      - wert: "15/65"
        meldung: Die Breite ist obere minus untere Grenze, $65 - 35 = 30$, nicht die obere Grenze allein.
hinweise:
  - Höhe gleich Anzahl durch Klassenbreite.
  - Die Breite einer Klasse ist obere Grenze minus untere Grenze.
gefuehrt:
  - text: Wie breit ist die Klasse $[35;\,65)$?
    teil: { typ: zahl, loesung: "65-35" }
    erklaerung: '$65 - 35 = 30$ Jahre.'
  - text: Berechne die Höhe des Rechtecks.
    teil: { typ: zahl, loesung: "15/30" }
    erklaerung: '$\tfrac{15}{30} = 0{,}5$ Personen pro Jahr.'
  - text: Berechne zum Vergleich die Höhe über $[18;\,25)$.
    teil: { typ: zahl, loesung: "21/7" }
    erklaerung: 'Breite $7$, also $\tfrac{21}{7} = 3$ Personen pro Jahr. Das Rechteck ist sechsmal so hoch, obwohl die Klasse nur $1{,}4$-mal so viele Personen enthält.'
  - text: Kontrolle über die Fläche. Wie viele Personen ergibt Breite mal Höhe über $[35;\,65)$?
    teil: { typ: zahl, loesung: "30*0.5" }
    erklaerung: '$30 \cdot 0{,}5 = 15$. Die Fläche ist wieder die Anzahl, so wie es sein soll.'
loesung: |
  Ansatz: Höhe ist Häufigkeitsdichte, also Anzahl durch Breite.
  ---
  Breite $65 - 35 = 30$ Jahre, Höhe $\tfrac{15}{30} = 0{,}5$ Personen pro Lebensjahr.
  ---
  Probe: Fläche $30 \cdot 0{,}5 = 15$ Personen.
```

```reflexion
frage: Warum muss im Histogramm die Fläche und nicht die Höhe der Häufigkeit entsprechen?
antwort: |
  Weil das Auge Flächen vergleicht. Eine doppelt so breite Klasse würde mit der Anzahl als Höhe doppelt so viel Fläche
  bekommen und damit doppelt so wichtig wirken, obwohl sie nicht mehr Werte enthält. Teilt man durch die Breite, zeigt die
  Höhe, wie dicht die Werte pro Einheit liegen, und die Fläche zeigt die Anzahl. So kann man Klassen verschiedener Breite
  ehrlich vergleichen. Dasselbe Prinzip steckt hinter der Dichtefunktion einer stetigen Zufallsvariablen in
  [16.15 Stetige Zufallsvariablen: Wahrscheinlichkeit als Fläche](/lernen/mathe3/wahrscheinlichkeit/stetige-zufallsvariablen-wahrscheinlichkeit-als-flaeche).
```

## Mittelwert, Median und Modus

```aufgabe
id: st-mw-check-erwartung
titel: Erwartungswert als Durchschnitt
niveau: 1
art: check
angabe: |
  Eine Zufallsvariable $X$ nimmt die Werte $1$, $2$ und $3$ mit den Wahrscheinlichkeiten $0{,}2$, $0{,}5$ und $0{,}3$ an.
  Berechne $E(X)$. (Wiederholung: [16.10 Zufallsvariablen und Erwartungswert](/lernen/mathe3/wahrscheinlichkeit/zufallsvariablen-und-erwartungswert))
teile:
  - typ: zahl
    loesung: "1*0.2 + 2*0.5 + 3*0.3"
    anzeige: '2{,}1'
    fehler:
      - wert: "2"
        meldung: Das ist das einfache Mittel von $1$, $2$ und $3$. Beim Erwartungswert wird jeder Wert mit seiner Wahrscheinlichkeit gewichtet.
loesung: |
  $E(X) = \sum x_i\, p_i$.
  ---
  $E(X) = 1 \cdot 0{,}2 + 2 \cdot 0{,}5 + 3 \cdot 0{,}3 = 0{,}2 + 1 + 0{,}9 = 2{,}1$.
```

Ein **Lageparameter** beschreibt mit einer einzigen Zahl, wo die Daten im Wesentlichen liegen. Es gibt mehrere, und
jeder beantwortet eine etwas andere Frage. Das arithmetische Mittel fragt: „Wie viel bekäme jeder, wenn man gerecht
verteilt?“ Der Median fragt: „Welcher Wert steht in der Mitte?“ Der Modus fragt: „Was kommt am häufigsten vor?“

### Das arithmetische Mittel

:::definition[Arithmetisches Mittel]
Für metrische Daten $x_1, \dots, x_n$ ist das **arithmetische Mittel**
$$\bar x = \frac{1}{n}\sum_{i=1}^{n} x_i = \frac{x_1 + x_2 + \dots + x_n}{n}.$$
Liegen die Daten als Häufigkeitstabelle mit Ausprägungen $a_j$ und relativen Häufigkeiten $h_j$ vor, so ist
$$\bar x = \sum_{j} a_j\, h_j.$$
:::

Dabei ist $n$ die Anzahl der Werte, und $\bar x$ liest man „x quer“. Umgangssprachlich heißt das arithmetische Mittel
**Durchschnitt** oder **Mittelwert**.

Die zweite Formel ist dieselbe Rechnung, nur zusammengefasst. Jeder Wert $a_j$ kommt $H_j$-mal vor. Statt ihn
$H_j$-mal zu addieren, rechnet man $a_j \cdot H_j$ und teilt am Ende durch $n$. Weil $\tfrac{H_j}{n} = h_j$ ist, wird
daraus $\sum a_j h_j$. Das ist genau die Formel des Erwartungswerts $E(X) = \sum x_i p_i$ aus
[16.10 Zufallsvariablen und Erwartungswert](/lernen/mathe3/wahrscheinlichkeit/zufallsvariablen-und-erwartungswert), nur mit
relativen Häufigkeiten statt Wahrscheinlichkeiten.

:::beispiel[Mittelwert aus einer Häufigkeitstabelle]
Wir nehmen die 25 Personen mit ihren Geschwistern aus
[17.2 Häufigkeiten und empirische Verteilungsfunktion](/lernen/mathe3/statistik/haeufigkeiten-und-empirische-verteilungsfunktion).
Die relativen Häufigkeiten für $0$ bis $4$ Geschwister waren $0{,}20$, $0{,}40$, $0{,}24$, $0{,}12$ und $0{,}04$.

$$\bar x = 0 \cdot 0{,}20 + 1 \cdot 0{,}40 + 2 \cdot 0{,}24 + 3 \cdot 0{,}12 + 4 \cdot 0{,}04 = 0 + 0{,}40 + 0{,}48 + 0{,}36 + 0{,}16 = 1{,}4.$$

Im Durchschnitt hat eine Person also $1{,}4$ Geschwister. Diesen Wert hat niemand wirklich. Das ist kein Fehler: Ein
Mittelwert muss kein möglicher Datenwert sein.
:::

:::achtung[Die Werte der Tabelle ohne Gewichte gemittelt]
Bei den Geschwistern lautet eine typische falsche Rechnung:
$$\bar x = \frac{0 + 1 + 2 + 3 + 4}{5} = 2. \qquad \text{(falsch)}$$
Damit zählt die Ausprägung „4 Geschwister“ genauso viel wie „1 Geschwister“, obwohl sie nur bei einer statt bei zehn
Personen vorkommt. Jeder Wert muss mit seiner Häufigkeit gewichtet werden. Richtig ist $\bar x = 1{,}4$.
:::

Das arithmetische Mittel hat drei Eigenschaften, die du in der mündlichen Prüfung erklären können solltest.

:::satz[Eigenschaften des arithmetischen Mittels]
1. **Schwerpunkteigenschaft:** Die Abweichungen vom Mittelwert heben sich auf: $\sum_{i=1}^n (x_i - \bar x) = 0$.
2. **Minimaleigenschaft:** Die Summe der quadrierten Abweichungen $Q(a) = \sum_{i=1}^n (x_i - a)^2$ ist für $a = \bar x$ am kleinsten.
3. **Lineare Transformation:** Für $y_i = c\,x_i + d$ ist $\bar y = c\,\bar x + d$.
:::

Dabei ist $a$ eine beliebige Vergleichszahl, und $c$ und $d$ sind feste Zahlen. Punkt 3 heißt zum Beispiel: Rechnest
du alle Temperaturen von Celsius in Fahrenheit um, kannst du einfach den Mittelwert umrechnen.

:::beweis
(1) Wir teilen die Summe auf: $\sum (x_i - \bar x) = \sum x_i - \sum \bar x$. Die zweite Summe hat $n$ gleiche
Summanden, also ist sie $n\bar x$. Nach Definition ist $\sum x_i = n\bar x$. Zusammen: $n\bar x - n\bar x = 0$.

(2) $Q(a)$ ist eine Summe von Quadraten. Ausmultiplizieren ergibt $Q(a) = n a^2 - 2a\sum x_i + \sum x_i^2$. Das ist eine
nach oben offene Parabel in $a$, denn der Faktor vor $a^2$ ist $n > 0$. Ihr Scheitel liegt nach
[4.4 Quadratische Funktionen](/lernen/mathe3/funktionen/quadratische-funktionen) bei
$a = \frac{2\sum x_i}{2n} = \frac{\sum x_i}{n} = \bar x$.

(3) $\bar y = \frac1n \sum (c x_i + d) = c \cdot \frac1n \sum x_i + \frac1n \cdot n d = c\bar x + d$.
:::

:::intuition
Stell dir die Werte als gleich schwere Gewichte auf einem masselosen Lineal vor. Das arithmetische Mittel ist der
Punkt, an dem das Lineal im Gleichgewicht ist. Die Abweichungen nach links und nach rechts heben sich genau auf, das
sagt die Schwerpunkteigenschaft. Deshalb zieht ein einzelnes weit entferntes Gewicht den Gleichgewichtspunkt stark zu sich.
:::

```aufgabe
id: st-mittel-tabelle
titel: Mittelwert aus der Häufigkeitstabelle
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Die Noten von 20 Teilnehmenden eines Sprachkurses:

  |Note|1|2|3|4|5|
  |---|---|---|---|---|---|
  |Anzahl|2|6|8|3|1|

  Berechne den Notendurchschnitt (2 Nachkommastellen) und den Median.
teile:
  - typ: zahl
    label: 'Durchschnitt'
    loesung: "(1*2 + 2*6 + 3*8 + 4*3 + 5*1)/20"
    anzeige: '2{,}75'
    fehler:
      - wert: "3"
        meldung: Du hast die fünf Noten ohne ihre Anzahlen gemittelt. Jede Note muss so oft zählen, wie sie vorkommt.
  - typ: zahl
    label: 'Median'
    loesung: "3"
    fehler:
      - wert: "8"
        meldung: '$8$ ist die größte Anzahl. Der Median ist eine Note, nämlich die des 10. und 11. Werts der geordneten Liste.'
hinweise:
  - Für den Durchschnitt jede Note mit ihrer Anzahl multiplizieren, addieren und durch $20$ teilen.
  - Für den Median brauchst du den 10. und 11. Wert der geordneten Liste. Benutze die laufenden Summen der Anzahlen.
loesung: |
  Ansatz: gewichtete Summe durch $n = 20$. Für den Median die Positionen 10 und 11 suchen.
  ---
  $\bar x = \tfrac{1 \cdot 2 + 2 \cdot 6 + 3 \cdot 8 + 4 \cdot 3 + 5 \cdot 1}{20} = \tfrac{2 + 12 + 24 + 12 + 5}{20} = \tfrac{55}{20} = 2{,}75$.
  ---
  Laufende Summen: Note 1 bis Platz 2, Note 2 bis Platz 8, Note 3 bis Platz 16. Platz 10 und 11 haben Note 3, also $\tilde x = 3$.
```

### Der Median

:::definition[Median]
Ordne die Daten der Größe nach: $x_{(1)} \le x_{(2)} \le \dots \le x_{(n)}$. Der **Median** $\tilde x$ ist der Wert in der Mitte:
$$\tilde x = \begin{cases} x_{\left(\frac{n+1}{2}\right)} & \text{wenn } n \text{ ungerade ist},\\[4pt] \dfrac{1}{2}\left(x_{\left(\frac n2\right)} + x_{\left(\frac n2 + 1\right)}\right) & \text{wenn } n \text{ gerade ist.}\end{cases}$$
:::

Dabei bezeichnet $x_{(k)}$ mit Klammer den $k$-ten Wert der **geordneten** Liste. $\tilde x$ liest man „x Schlange“.
Bei $n = 7$ ist der Median also der 4. Wert. Bei $n = 8$ ist er das Mittel aus dem 4. und 5. Wert.

Der Median teilt die Daten in zwei Hälften: Mindestens die Hälfte der Werte ist höchstens $\tilde x$, und mindestens die
Hälfte ist mindestens $\tilde x$. Er braucht nur eine Reihenfolge und ist daher schon für ordinale Merkmale definiert.

:::beispiel[Einkommen: Mittelwert gegen Median]
Sechs Personen verdienen monatlich in Euro: $2100$, $2300$, $2400$, $2500$, $2700$ und $15\,000$.

- Mittelwert: $\bar x = \frac{2100 + 2300 + 2400 + 2500 + 2700 + 15\,000}{6} = \frac{27\,000}{6} = 4500$.
- Median: $n = 6$ ist gerade, die Liste ist schon geordnet. Also $\tilde x = \frac{2400 + 2500}{2} = 2450$.

Fünf von sechs Personen verdienen weniger als den Durchschnitt. Der eine Spitzenverdiener verschiebt $\bar x$ um mehr
als $2000$ Euro, den Median aber kaum. Man sagt: Der Median ist **robust** gegenüber Ausreißern, das arithmetische Mittel nicht.
:::

**Robust** heißt hier: Ein einzelner extremer Wert verändert die Kennzahl kaum. Ein **Ausreißer** ist ein Wert, der
weit von den übrigen entfernt liegt. Eine genaue Regel dafür folgt in
[17.6 Quartile, Boxplot und Ausreißer](/lernen/mathe3/statistik/quartile-boxplot-und-ausreisser).

:::achtung[Median ohne Ordnen]
Für die Daten $7, 2, 9, 4, 5$ lautet eine typische falsche Rechnung:
$$\tilde x = \text{mittlerer Wert der Liste} = 9. \qquad \text{(falsch)}$$
Der Median ist der mittlere Wert der **geordneten** Liste. Geordnet lautet sie $2, 4, 5, 7, 9$, und der 3. Wert ist
$5$. Ordne also immer zuerst.
:::

```aufgabe
id: st-mittel-median
titel: Mittelwert, Median, Modus
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Bei acht Testläufen wurde die Anzahl der gefundenen Fehler notiert: $4, 8, 6, 5, 3, 10, 7, 6$.
  Berechne arithmetisches Mittel (3 Nachkommastellen), Median und Modus.
teile:
  - typ: zahl
    label: '$\bar x$'
    loesung: "mean([4, 8, 6, 5, 3, 10, 7, 6])"
    anzeige: '6{,}125'
    fehler:
      - wert: "49/7"
        meldung: Die Summe $49$ stimmt. Geteilt wird aber durch die Anzahl der Werte, und das sind $8$.
  - typ: zahl
    label: '$\tilde x$'
    loesung: "median([4, 8, 6, 5, 3, 10, 7, 6])"
    fehler:
      - wert: "4"
        meldung: Du hast die beiden mittleren Werte der **ungeordneten** Liste genommen, $5$ und $3$. Ordne zuerst.
  - typ: zahl
    label: 'Modus'
    loesung: "6"
    fehler:
      - wert: "2"
        meldung: '$2$ ist die Häufigkeit des Modus. Gefragt ist der Wert, der am häufigsten vorkommt.'
hinweise:
  - Ordne die acht Werte zuerst der Größe nach.
loesung: |
  Ansatz: Mittel aus der Summe, Median aus der geordneten Liste, Modus durch Zählen.
  ---
  Summe $4 + 8 + 6 + 5 + 3 + 10 + 7 + 6 = 49$, also $\bar x = \tfrac{49}{8} = 6{,}125$.
  ---
  Geordnet: $3, 4, 5, 6, 6, 7, 8, 10$. $n = 8$ ist gerade, also Mittel aus dem 4. und 5. Wert: $\tilde x = \tfrac{6 + 6}{2} = 6$. Modus: $6$ kommt als einziger Wert zweimal vor.
```

### Der Modus

Der **Modus** oder **Modalwert** ist die Ausprägung, die am häufigsten vorkommt. Er ist der einzige Lageparameter für
nominale Daten, zum Beispiel das beliebteste Betriebssystem. Er muss nicht eindeutig sein. Gibt es zwei gleich hohe
Gipfel, spricht man von einer **bimodalen** Verteilung. Das ist oft ein Hinweis auf zwei vermischte Gruppen.

**Beispiel:** Bei den Daten $3, 5, 5, 6, 8, 8, 8$ ist der Modus $8$. **Nicht-Beispiel:** Bei $1, 2, 3, 4$ kommt jeder
Wert einmal vor. Hier gibt es keinen sinnvollen Modus.

### Die Form einer Verteilung

Wie Mittelwert und Median zueinander liegen, hängt von der **Form** der Verteilung ab.

- **Symmetrisch:** Linke und rechte Hälfte sind annähernd Spiegelbilder, zum Beispiel bei Körpergrößen. Dann ist $\bar x \approx \tilde x$.
- **Rechtsschief:** Die meisten Werte sind klein, wenige sind sehr groß, und der lange Ausläufer zeigt nach rechts. Typisch sind Einkommen, Antwortzeiten und Wartezeiten. Meist ist dann $\bar x > \tilde x$.
- **Linksschief:** Spiegelbildlich dazu, zum Beispiel die Punkte in einer leichten Klausur. Meist ist dann $\bar x < \tilde x$.

```plot
x: [0, 13]
y: [0, 0.3]
achsen: { x: "Antwortzeit in 100 ms", y: "relative Häufigkeit" }
balken:
  - { x: 1, y: 0.08 }
  - { x: 2, y: 0.26 }
  - { x: 3, y: 0.22 }
  - { x: 4, y: 0.15 }
  - { x: 5, y: 0.1 }
  - { x: 6, y: 0.07 }
  - { x: 7, y: 0.05 }
  - { x: 8, y: 0.03 }
  - { x: 9, y: 0.02 }
  - { x: 10, y: 0.01 }
  - { x: 11, y: 0.01 }
strecken:
  - { von: [3, 0], nach: [3, 0.28], farbe: 2 }
  - { von: [3.76, 0], nach: [3.76, 0.28], farbe: 1, gestrichelt: true }
punkte:
  - { x: 3, y: 0.28, label: "Median 3", farbe: 2 }
  - { x: 3.76, y: 0.28, label: "Mittel 3,76", farbe: 1 }
beschriftung: "Rechtsschiefe Verteilung von Antwortzeiten, gerundet auf 100 ms. Der lange Ausläufer nach rechts zieht das arithmetische Mittel 3,76 über den Median 3."
```

:::beispiel[Antwortzeiten eines Servers]
Das Bild zeigt Antwortzeiten in Einheiten von 100 ms mit den Werten $1$ bis $11$.

- **Mittelwert:** $\bar x = \sum a_j h_j = 1 \cdot 0{,}08 + 2 \cdot 0{,}26 + 3 \cdot 0{,}22 + \dots + 11 \cdot 0{,}01 = 3{,}76$, also $376$ ms.
- **Median:** Die kumulierte Häufigkeit ist bei $2$ erst $0{,}08 + 0{,}26 = 0{,}34$ und bei $3$ schon $0{,}56$. Sie überschreitet $0{,}5$ also bei $3$. Der Median ist $300$ ms.

Die wenigen sehr langsamen Antworten ziehen den Mittelwert nach oben. Die typische Anfrage dauert eher $300$ ms.
Deshalb zeigen Monitoring-Werkzeuge oft den Median und hohe Perzentile wie p95 und p99, statt nur den Mittelwert.
:::

:::merke[Mittelwert oder Median?]
1. **Ordinale** Daten: Median, nicht Mittelwert.
2. **Symmetrische** metrische Daten ohne Ausreißer: Beide sind fast gleich. Das Mittel nutzt alle Werte und ist bequemer.
3. **Schiefe** Daten oder Ausreißer, etwa Einkommen oder Antwortzeiten: Median verwenden oder beide angeben.
4. Wenn es auf die **Summe** ankommt, etwa beim Gesamtumsatz: Mittelwert, denn $n \cdot \bar x$ ist die Summe.
:::

```aufgabe
id: st-mittel-fehlend
titel: Fehlender Wert
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Der Mittelwert von fünf Messwerten ist $12$. Vier der Werte sind $10$, $15$, $8$ und $14$. Wie groß ist der fünfte Wert?
teile:
  - typ: zahl
    label: 'fünfter Wert'
    loesung: "5*12 - (10 + 15 + 8 + 14)"
    fehler:
      - wert: "4*12 - (10 + 15 + 8 + 14)"
        meldung: Der Mittelwert gehört zu **fünf** Werten. Die Summe aller fünf ist $5 \cdot 12$, nicht $4 \cdot 12$.
      - wert: "12"
        meldung: Der fünfte Wert muss nicht gleich dem Mittelwert sein. Er muss nur die Summe auf $5 \cdot 12$ ergänzen.
hinweise:
  - 'Aus $\bar x = 12$ und $n = 5$ folgt die Summe aller Werte: $\sum x_i = n \cdot \bar x$.'
  - Zieh von dieser Summe die vier bekannten Werte ab.
loesung: |
  Ansatz: Aus der Definition $\bar x = \tfrac{1}{n}\sum x_i$ folgt $\sum x_i = n \cdot \bar x = 5 \cdot 12 = 60$.
  ---
  Bekannte Summe: $10 + 15 + 8 + 14 = 47$. Fünfter Wert: $60 - 47 = 13$.
  ---
  Probe: $\tfrac{47 + 13}{5} = \tfrac{60}{5} = 12$.
```

```aufgabe
id: st-median-robust
titel: Mittelwert oder Median?
niveau: 2
lernziel: 2
kompetenz: begruenden
angabe: |
  Die Antwortzeiten eines Webservers in ms für zehn Anfragen sind:
  $42, 38, 45, 40, 41, 39, 44, 43, 40, 950$.

  a) Berechne Mittelwert und Median.

  b) Welche Kennzahl beschreibt die typische Antwortzeit besser? Begründe.
teile:
  - typ: zahl
    label: 'a) $\bar x$ in ms'
    loesung: "mean([42, 38, 45, 40, 41, 39, 44, 43, 40, 950])"
    anzeige: '132{,}2'
    fehler:
      - wert: "372/9"
        meldung: Du hast den Wert $950$ einfach weggelassen. Beim Mittelwert zählen alle zehn Werte.
  - typ: zahl
    label: 'a) $\tilde x$ in ms'
    loesung: "median([42, 38, 45, 40, 41, 39, 44, 43, 40, 950])"
    anzeige: '41{,}5'
    fehler:
      - wert: "40"
        meldung: Du hast den 5. und 6. Wert der ungeordneten Liste gemittelt. Ordne die Werte zuerst.
  - typ: text
    label: 'b) Begründung'
    muster: |
      Der Median mit $41{,}5$ ms. Neun der zehn Anfragen liegen zwischen 38 und 45 ms. Der eine Ausreißer mit 950 ms,
      etwa durch einen kurzen Hänger des Servers, zieht den Mittelwert auf $132{,}2$ ms. Diesen Wert hatte keine einzige Anfrage auch nur annähernd.
      Der Median ist robust gegenüber Ausreißern. Den Ausreißer sollte man trotzdem nicht verschweigen, sondern getrennt
      berichten, zum Beispiel mit dem Maximum.
hinweise:
  - Ordne die Werte zuerst. Bei $n = 10$ ist der Median das Mittel aus dem 5. und 6. Wert.
  - Vergleiche beide Ergebnisse mit den neun „normalen“ Werten.
loesung: |
  Ansatz: Mittel aus der Summe aller zehn Werte, Median aus der geordneten Liste.
  ---
  Summe der ersten neun: $372$. Mit dem Ausreißer: $1322$, also $\bar x = 132{,}2$ ms.
  ---
  Geordnet: $38, 39, 40, 40, 41, 42, 43, 44, 45, 950$. Median: $\tfrac{41 + 42}{2} = 41{,}5$ ms.
  ---
  Der Median beschreibt die typische Antwortzeit, der Mittelwert ist durch einen einzigen Wert stark verzerrt.
```

```aufgabe
id: st-mw-schief
titel: Form aus Mittel und Median erkennen
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  Für die Wohnungsmieten einer Stadt gilt: Mittelwert $950$ Euro, Median $780$ Euro. Was kannst du daraus am ehesten über
  die Verteilung schließen?
teile:
  - typ: auswahl
    optionen:
      - 'Sie ist rechtsschief: Wenige sehr teure Wohnungen ziehen den Mittelwert nach oben.'
      - 'Sie ist linksschief: Viele Wohnungen sind teurer als der Mittelwert.'
      - 'Sie ist symmetrisch, denn beide Kennzahlen liegen im selben Bereich.'
      - 'Man kann nichts sagen, weil man die Standardabweichung nicht kennt.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Bei linksschiefen Daten liegt der Mittelwert typischerweise **unter** dem Median. Hier ist es umgekehrt.
      - wert: 2
        meldung: '$170$ Euro Unterschied ist bei Mieten um $800$ Euro viel. Bei symmetrischen Daten wären beide Werte fast gleich.'
      - wert: 3
        meldung: Für die Richtung der Schiefe reicht der Vergleich von Mittelwert und Median. Die Standardabweichung sagt etwas über die Breite.
hinweise:
  - Mindestens die Hälfte der Mieten liegt bei höchstens $780$ Euro. Warum ist der Mittelwert dann trotzdem höher?
  - Welche Werte können ein Mittel nach oben ziehen, ohne den Median zu verändern?
loesung: |
  Ansatz: Den Abstand und die Richtung zwischen Mittelwert und Median deuten.
  ---
  Der Median sagt: Mindestens die Hälfte der Mieten ist höchstens $780$ Euro.
  ---
  Der Mittelwert liegt deutlich darüber. Das passiert, wenn wenige sehr hohe Werte die Summe vergrößern. Die Verteilung ist rechtsschief.
```

```aufgabe
id: st-schwerpunkt-beweis
titel: Schwerpunkteigenschaft beweisen
niveau: 3
lernziel: 2
kompetenz: begruenden
angabe: |
  a) Zeige: Für beliebige Daten $x_1, \dots, x_n$ mit arithmetischem Mittel $\bar x$ gilt $\sum_{i=1}^n (x_i - \bar x) = 0$.

  b) Folgere daraus: Erhöht man **einen** Wert $x_k$ um $\Delta$, so steigt der Mittelwert um $\tfrac{\Delta}{n}$. Was sagt das über die Robustheit des Mittelwerts?
teile:
  - typ: text
    muster: |
      a) $\sum (x_i - \bar x) = \sum x_i - \sum \bar x$. In der zweiten Summe steht $n$-mal derselbe Summand, also ist sie
      $n\bar x$. Nach Definition ist $\sum x_i = n\bar x$. Zusammen ergibt sich $n\bar x - n\bar x = 0$.

      b) Nach der Änderung ist die Summe aller Werte $\sum x_i + \Delta$. Der neue Mittelwert ist
      $\frac1n\big(\sum x_i + \Delta\big) = \bar x + \frac{\Delta}{n}$. Weil $\Delta$ beliebig groß sein kann, kann ein einziger
      Wert den Mittelwert beliebig weit verschieben. Der Mittelwert ist also nicht robust. Den Median verändert ein
      einzelner Wert dagegen höchstens bis zum Nachbarwert in der geordneten Liste.
hinweise:
  - Die Summe darf man aufteilen. Wie oft kommt $\bar x$ in $\sum_{i=1}^n \bar x$ vor?
  - 'Für b): Was passiert mit der Summe aller Werte, wenn ein Wert um $\Delta$ wächst?'
loesung: |
  Ansatz: Summe aufteilen und die Definition $\sum x_i = n \bar x$ benutzen.
  ---
  a) $\sum (x_i - \bar x) = \sum x_i - n\bar x = n\bar x - n\bar x = 0$.
  ---
  b) Die Summe wächst um $\Delta$, also der Mittelwert um $\tfrac{\Delta}{n}$. Für großes $\Delta$ wird das beliebig groß.
  ---
  Folgerung: Ein einzelner Ausreißer kann den Mittelwert beliebig verschieben. Er ist nicht robust.
```

```aufgabe
id: st-mw-gehalt
titel: Ein hohes Gehalt kommt dazu
niveau: 3
lernziel: 2
kompetenz: anwenden
angabe: |
  Neun Beschäftigte einer kleinen Firma verdienen monatlich in Euro:
  $2400,\ 2600,\ 2700,\ 2900,\ 3000,\ 3100,\ 3200,\ 3400,\ 3700$.
  Nun wird eine Geschäftsführerin mit $12\,000$ Euro eingestellt.

  a) Berechne Mittelwert und Median **vorher**.

  b) Berechne Mittelwert und Median **nachher**.

  c) Die Firma wirbt mit „Durchschnittsgehalt 3900 Euro“. Beurteile diese Aussage.
teile:
  - typ: zahl
    label: 'a) $\bar x$ vorher'
    loesung: "mean([2400, 2600, 2700, 2900, 3000, 3100, 3200, 3400, 3700])"
    fehler:
      - wert: "27000/10"
        meldung: Vorher sind es nur neun Personen. Die Geschäftsführerin kommt erst in b) dazu.
  - typ: zahl
    label: 'a) $\tilde x$ vorher'
    loesung: "3000"
    fehler:
      - wert: "3050"
        meldung: Das ist schon der Median mit zehn Personen. Vorher ist $n = 9$ ungerade, der Median ist der 5. Wert.
  - typ: zahl
    label: 'b) $\bar x$ nachher'
    loesung: "(27000 + 12000)/10"
    fehler:
      - wert: "(3000 + 12000)/2"
        meldung: Du hast den alten Mittelwert und das neue Gehalt gleich gewichtet. Der alte Mittelwert steht aber für neun Personen.
  - typ: zahl
    label: 'b) $\tilde x$ nachher'
    loesung: "(3000 + 3100)/2"
    fehler:
      - wert: "3000"
        meldung: 'Jetzt ist $n = 10$ gerade. Der Median ist das Mittel aus dem 5. und 6. Wert der geordneten Liste.'
  - typ: text
    label: 'c) Beurteilung'
    muster: |
      Rechnerisch stimmt die Aussage, der Mittelwert ist $3900$ Euro. Sie ist aber irreführend: Neun von zehn Personen
      verdienen weniger, die meisten deutlich. Der Mittelwert ist durch ein einziges hohes Gehalt um $900$ Euro gestiegen,
      der Median nur um $50$ Euro. Für das typische Gehalt ist der Median mit $3050$ Euro die ehrlichere Angabe.
hinweise:
  - 'Die Summe der neun Gehälter ist $27\,000$ Euro. Die Liste ist schon geordnet.'
  - 'Nachher ist $n = 10$. Die neue Summe ist $27\,000 + 12\,000$, und $12\,000$ steht in der geordneten Liste ganz hinten.'
loesung: |
  Ansatz: Mittelwert über die Summe, Median über die Position in der geordneten Liste.
  ---
  a) $\bar x = \tfrac{27\,000}{9} = 3000$. Bei $n = 9$ ist der Median der 5. Wert: $\tilde x = 3000$.
  ---
  b) $\bar x = \tfrac{27\,000 + 12\,000}{10} = 3900$. Bei $n = 10$: Mittel aus 5. und 6. Wert, $\tilde x = \tfrac{3000 + 3100}{2} = 3050$.
  ---
  c) Der Mittelwert steigt um $900$ Euro, der Median um $50$ Euro. „Durchschnittsgehalt 3900 Euro“ stimmt rechnerisch, beschreibt das typische Gehalt aber schlecht.
```

```aufgabe
id: st-mw-gefuehrt
titel: Median aus einer Tabelle
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  21 Haushalte wurden nach der Zahl ihrer Haustiere gefragt:

  |Haustiere|0|1|2|3|
  |---|---|---|---|---|
  |Haushalte|7|8|4|2|

  Bestimme den Median.
teile:
  - typ: zahl
    loesung: "1"
    fehler:
      - wert: "1.5"
        meldung: 'Das ist die Mitte der Werteskala $0$ bis $3$. Der Median ist der mittlere **Datenwert**, hier der 11. von 21.'
      - wert: "8"
        meldung: '$8$ ist eine Anzahl von Haushalten. Der Median ist eine Zahl von Haustieren.'
hinweise:
  - '$n = 21$ ist ungerade. Der Median ist der Wert auf Platz $\tfrac{21 + 1}{2}$.'
  - Bilde laufende Summen der Anzahlen, um zu sehen, bis zu welchem Platz jeder Wert reicht.
gefuehrt:
  - text: Auf welchem Platz der geordneten Liste steht der Median?
    teil: { typ: zahl, loesung: "(21+1)/2" }
    erklaerung: 'Bei $n = 21$ ist es Platz $\tfrac{22}{2} = 11$.'
  - text: Bis zu welchem Platz reichen die Haushalte mit $0$ oder $1$ Haustier?
    teil: { typ: zahl, loesung: "7+8" }
    erklaerung: 'Die Nullen belegen die Plätze 1 bis 7, die Einsen die Plätze 8 bis 15.'
  - text: Welcher Wert steht also auf Platz 11?
    teil: { typ: zahl, loesung: "1" }
    erklaerung: 'Platz 11 liegt zwischen 8 und 15. Dort steht eine $1$. Der Median ist $1$ Haustier.'
  - text: 'Vergleiche mit dem Mittelwert. Berechne $\bar x$ auf 2 Nachkommastellen.'
    teil: { typ: zahl, loesung: "(0*7 + 1*8 + 2*4 + 3*2)/21", toleranz: 0.005 }
    erklaerung: '$\bar x = \tfrac{0 + 8 + 8 + 6}{21} = \tfrac{22}{21} \approx 1{,}05$. Beide liegen hier nahe beieinander.'
loesung: |
  Ansatz: Position des Medians bestimmen und mit laufenden Summen den Wert dort finden.
  ---
  $n = 21$, also Platz 11. Laufende Summen: $7$ Haushalte mit 0, bis Platz $15$ mit 1.
  ---
  Auf Platz 11 steht eine $1$. Der Median ist $1$ Haustier.
```

## Gewichtetes und geometrisches Mittel

```aufgabe
id: st-gm-check-faktor
titel: Prozent als Wachstumsfaktor
niveau: 1
art: check
angabe: |
  Ein Wert wächst um $8\,\%$. Mit welchem Faktor wird er multipliziert?
  (Wiederholung: [4.12 Wachstums- und Zerfallsmodelle](/lernen/mathe3/funktionen/wachstums-und-zerfallsmodelle))
teile:
  - typ: zahl
    loesung: "1.08"
    anzeige: '1{,}08'
    fehler:
      - wert: "0.08"
        meldung: Mit $0{,}08$ multipliziert bekommst du nur den **Zuwachs**. Der neue Wert ist alter Wert plus Zuwachs, also das $1{,}08$-Fache.
loesung: |
  Neuer Wert $=$ alter Wert $+ 8\,\%$ davon $=$ alter Wert $\cdot (1 + 0{,}08)$.
  ---
  Der Wachstumsfaktor ist $1{,}08$.
```

Das arithmetische Mittel behandelt alle Werte gleich und addiert sie. Zwei häufige Situationen passen nicht dazu.
Manchmal zählen Werte **unterschiedlich viel**, zum Beispiel Noten von Lehrveranstaltungen mit verschieden vielen
ECTS. Und manchmal werden Werte nicht addiert, sondern **multipliziert**, zum Beispiel Wachstumsfaktoren. Für beide
Fälle gibt es ein eigenes Mittel.

### Das gewichtete Mittel

:::definition[Gewichtetes Mittel]
Haben die Werte $x_1, \dots, x_n$ die Gewichte $w_1, \dots, w_n > 0$, so ist das **gewichtete Mittel**
$$\bar x_w = \frac{w_1 x_1 + w_2 x_2 + \dots + w_n x_n}{w_1 + w_2 + \dots + w_n} = \frac{\sum w_i x_i}{\sum w_i}.$$
:::

Dabei sagt das **Gewicht** $w_i$, wie stark der Wert $x_i$ zählen soll. Sind alle Gewichte gleich, erhält man das
gewöhnliche arithmetische Mittel. Der Mittelwert aus einer Häufigkeitstabelle ist ein gewichtetes Mittel mit den
Häufigkeiten als Gewichten.

:::beispiel[Notendurchschnitt nach ECTS]
Eine Lehrveranstaltung mit 6 ECTS wurde mit 2 abgeschlossen, eine mit 3 ECTS mit 1 und eine mit 9 ECTS mit 3. Die
ECTS sind die Gewichte.
$$\bar x_w = \frac{6 \cdot 2 + 3 \cdot 1 + 9 \cdot 3}{6 + 3 + 9} = \frac{12 + 3 + 27}{18} = \frac{42}{18} \approx 2{,}33.$$
Das ungewichtete Mittel $\tfrac{2 + 1 + 3}{3} = 2$ wäre zu günstig. Es lässt die große Lehrveranstaltung mit der
schlechtesten Note genauso viel zählen wie die kleine mit der besten.
:::

Eine wichtige Anwendung: Das **Gesamtmittel zweier Gruppen** ist das mit den Gruppengrößen gewichtete Mittel der
Gruppenmittel. Der Grund: Gruppengröße mal Gruppenmittel ist die Summe der Werte in der Gruppe. Addiert man beide
Summen und teilt durch die Gesamtzahl, erhält man genau das gewichtete Mittel.

:::achtung[Gruppenmittel einfach gemittelt]
10 Personen haben im Schnitt 80 Punkte, 30 andere Personen im Schnitt 60 Punkte. Eine typische falsche Rechnung:
$$\text{Gesamtschnitt} = \frac{80 + 60}{2} = 70. \qquad \text{(falsch)}$$
Damit zählt die kleine Gruppe genauso viel wie die dreimal so große. Richtig sind die Punktesummen $10 \cdot 80 = 800$
und $30 \cdot 60 = 1800$. Der Gesamtschnitt ist $\frac{800 + 1800}{40} = 65$.
:::

```aufgabe
id: st-gewichtet
titel: Gesamtmittel zweier Gruppen
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  In Gruppe A erreichten 12 Studierende im Schnitt 68 Punkte, in Gruppe B 28 Studierende im Schnitt 53 Punkte.
  Berechne den Durchschnitt aller 40 Studierenden.
teile:
  - typ: zahl
    label: 'Gesamtdurchschnitt'
    loesung: "(12*68 + 28*53)/40"
    anzeige: '57{,}5'
    fehler:
      - wert: "(68 + 53)/2"
        meldung: Die Gruppen sind verschieden groß. Gruppe B hat mehr als doppelt so viele Personen und muss stärker zählen.
hinweise:
  - Berechne zuerst die Punktesumme jeder Gruppe, also Anzahl mal Schnitt.
loesung: |
  Ansatz: Gesamtmittel ist Gesamtsumme durch Gesamtzahl. Punktesummen: A $12 \cdot 68 = 816$, B $28 \cdot 53 = 1484$.
  ---
  Gesamtmittel: $\tfrac{816 + 1484}{40} = \tfrac{2300}{40} = 57{,}5$.
  ---
  Kontrolle: Das Ergebnis liegt zwischen $53$ und $68$, und zwar näher an $53$, weil Gruppe B größer ist.
```

```aufgabe
id: st-gm-ects
titel: Notenschnitt nach ECTS
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Drei Lehrveranstaltungen mit $4$, $6$ und $10$ ECTS wurden mit den Noten $1$, $3$ und $2$ abgeschlossen. Berechne den
  nach ECTS gewichteten Notendurchschnitt.
teile:
  - typ: zahl
    loesung: "(4*1 + 6*3 + 10*2)/(4 + 6 + 10)"
    anzeige: '2{,}1'
    fehler:
      - wert: "(1 + 3 + 2)/3"
        meldung: Das ist der ungewichtete Schnitt. Jede Note muss mit ihren ECTS multipliziert werden.
      - wert: "(4*1 + 6*3 + 10*2)/3"
        meldung: Geteilt wird durch die Summe der Gewichte, also $4 + 6 + 10 = 20$, nicht durch die Zahl der Lehrveranstaltungen.
hinweise:
  - 'Zähler: Note mal ECTS, aufsummiert. Nenner: Summe der ECTS.'
loesung: |
  Ansatz: gewichtetes Mittel mit den ECTS als Gewichten.
  ---
  $\bar x_w = \tfrac{4 \cdot 1 + 6 \cdot 3 + 10 \cdot 2}{4 + 6 + 10} = \tfrac{4 + 18 + 20}{20} = \tfrac{42}{20} = 2{,}1$.
```

### Das geometrische Mittel für Wachstumsfaktoren

Wächst ein Kapital ein Jahr um $20\,\%$ und fällt im nächsten um $10\,\%$, dann wird es nacheinander mit $1{,}2$ und
mit $0{,}9$ **multipliziert**. Gesucht ist der gleichbleibende Faktor $q$, der in derselben Zeit zum selben Ergebnis
führt. Er muss $q \cdot q = 1{,}2 \cdot 0{,}9$ erfüllen.

:::definition[Geometrisches Mittel]
Für positive Zahlen $x_1, \dots, x_n$ ist das **geometrische Mittel**
$$\bar x_g = \sqrt[n]{x_1 \cdot x_2 \cdots x_n}.$$
:::

Dabei ist $\sqrt[n]{\ }$ die $n$-te Wurzel. Wächst ein Wert in $n$ aufeinanderfolgenden Perioden mit den Faktoren
$q_1, \dots, q_n$, ist der Endwert $K_0 \cdot q_1 q_2 \cdots q_n$. Dabei ist $K_0$ der Anfangswert. Der konstante Faktor
$q$ mit demselben Endwert erfüllt $q^n = q_1 \cdots q_n$, also ist genau $q = \bar x_g$.

:::beispiel[Aktienkurs über drei Jahre]
Eine Aktie steigt im ersten Jahr um $20\,\%$, fällt im zweiten um $10\,\%$ und steigt im dritten um $5\,\%$.

1. **Faktoren:** $1{,}2$, $0{,}9$ und $1{,}05$.
2. **Gesamtfaktor:** $1{,}2 \cdot 0{,}9 \cdot 1{,}05 = 1{,}134$. Insgesamt ist die Aktie um $13{,}4\,\%$ gestiegen.
3. **Mittlerer Faktor:** $q = \sqrt[3]{1{,}134} \approx 1{,}0428$.

Die durchschnittliche jährliche Rendite ist also etwa $4{,}28\,\%$. Das arithmetische Mittel der Prozentsätze,
$\tfrac{20 - 10 + 5}{3} = 5\,\%$, wäre zu hoch: $1{,}05^3 \approx 1{,}158$, und das ist mehr als $1{,}134$.
:::

:::merke[Durchschnittliche Wachstumsrate in drei Schritten]
1. Prozentsätze in Faktoren umrechnen: $+p\,\%$ wird $1 + \tfrac{p}{100}$, $-p\,\%$ wird $1 - \tfrac{p}{100}$.
2. Alle Faktoren multiplizieren und die $n$-te Wurzel ziehen.
3. Vom Ergebnis $1$ abziehen und mal $100$ nehmen. Das ist die mittlere Rate in Prozent.
:::

Allgemein gilt $\bar x_g \le \bar x$: Das geometrische Mittel positiver Zahlen ist höchstens so groß wie das
arithmetische. Gleich sind beide nur, wenn alle Werte gleich sind. Darum überschätzt das arithmetische Mittel der
Prozentsätze das Wachstum, sobald die Raten schwanken.

:::achtung[Plus 50 und minus 50 ist nicht null]
Ein Kurs steigt um $50\,\%$ und fällt danach um $50\,\%$. Eine typische falsche Rechnung:
$$\frac{+50\,\% + (-50\,\%)}{2} = 0\,\%. \qquad \text{(falsch)}$$
Aus $100$ Euro werden erst $150$ Euro und dann die Hälfte davon, also $75$ Euro. Der Gesamtfaktor ist $1{,}5 \cdot 0{,}5 = 0{,}75$,
also ein Verlust von $25\,\%$. Das geometrische Mittel $\sqrt{0{,}75} \approx 0{,}866$ zeigt richtig ein mittleres
Minus von gut $13\,\%$ pro Periode.
:::

:::tipp[Vertiefung: das harmonische Mittel]
Du fährst eine Strecke hin mit $60$ km/h und zurück mit $40$ km/h. Die Durchschnittsgeschwindigkeit ist nicht
$50$ km/h. Für eine Strecke $s$ brauchst du $\tfrac{s}{60} + \tfrac{s}{40}$ Stunden für insgesamt $2s$. Also ist die
Durchschnittsgeschwindigkeit $\tfrac{2}{1/60 + 1/40} = 48$ km/h. Das ist das **harmonische Mittel** $\tfrac{n}{\sum 1/x_i}$.
Es passt, wenn Geschwindigkeiten über gleiche Strecken statt über gleiche Zeiten gemittelt werden.
:::

```aufgabe
id: st-gm-welches-mittel
titel: Welches Mittel passt?
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Die Mitgliederzahl eines Vereins ist in drei Jahren um $4\,\%$, $10\,\%$ und $-2\,\%$ gewachsen. Mit welchem Mittel
  bestimmst du die durchschnittliche jährliche Wachstumsrate richtig?
teile:
  - typ: auswahl
    optionen:
      - 'geometrisches Mittel der Faktoren $1{,}04$, $1{,}10$ und $0{,}98$'
      - 'arithmetisches Mittel der Prozentsätze $4$, $10$ und $-2$'
      - 'Median der Prozentsätze'
      - 'gewichtetes Mittel mit den Mitgliederzahlen als Gewichten'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Wachstumsraten wirken multiplikativ. Das arithmetische Mittel der Prozentsätze überschätzt das Wachstum, wenn die Raten schwanken.
      - wert: 2
        meldung: Der Median ignoriert, wie groß die einzelnen Raten sind. Er liefert nicht den Faktor, der zum selben Endwert führt.
      - wert: 3
        meldung: Gewichte helfen, wenn Werte verschieden stark zählen. Hier geht es darum, dass Faktoren nacheinander multipliziert werden.
hinweise:
  - Was passiert mathematisch mit dem Mitgliederstand von Jahr zu Jahr, wird addiert oder multipliziert?
loesung: |
  Ansatz: Jedes Jahr wird der Stand mit einem Faktor multipliziert.
  ---
  Der konstante Faktor mit demselben Endwert ist das geometrische Mittel $\sqrt[3]{1{,}04 \cdot 1{,}10 \cdot 0{,}98}$.
```

```aufgabe
id: st-geometrisch
titel: Durchschnittliches Wachstum
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Der Umsatz eines Start-ups änderte sich in vier aufeinanderfolgenden Jahren um $+8\,\%$, $+12\,\%$, $-5\,\%$ und $+3\,\%$.

  a) Um wie viel Prozent ist der Umsatz insgesamt gestiegen? (2 Nachkommastellen)

  b) Wie groß ist die durchschnittliche jährliche Wachstumsrate in Prozent? (2 Nachkommastellen)
teile:
  - typ: zahl
    label: 'a) Gesamtwachstum in %'
    loesung: "(1.08*1.12*0.95*1.03 - 1)*100"
    toleranz: 0.01
    anzeige: '18{,}36'
    fehler:
      - wert: "8 + 12 - 5 + 3"
        meldung: Prozentsätze darf man nicht einfach addieren. Jeder Prozentsatz bezieht sich auf den Stand des Vorjahres. Multipliziere die Faktoren.
  - typ: zahl
    label: 'b) mittlere Rate in %'
    loesung: "(nthRoot(1.08*1.12*0.95*1.03, 4) - 1)*100"
    toleranz: 0.01
    anzeige: '4{,}30'
    fehler:
      - wert: "(8 + 12 - 5 + 3)/4"
        meldung: Das ist das arithmetische Mittel der Prozentsätze. Es ist zu hoch. Nimm das geometrische Mittel der Faktoren.
      - wert: "18.35936/4"
        meldung: Du hast das Gesamtwachstum durch $4$ geteilt. Wachstum verteilt sich multiplikativ, also mit der vierten Wurzel.
hinweise:
  - 'Mit Wachstumsfaktoren rechnen: $+8\,\%$ entspricht $1{,}08$, $-5\,\%$ entspricht $0{,}95$.'
  - 'Der durchschnittliche Faktor ist das geometrische Mittel der Faktoren, also $\sqrt[4]{\text{Gesamtfaktor}}$.'
loesung: |
  Ansatz: Prozentsätze in Faktoren umrechnen und multiplizieren.
  ---
  a) Gesamtfaktor $1{,}08 \cdot 1{,}12 \cdot 0{,}95 \cdot 1{,}03 \approx 1{,}1836$, also ein Plus von $18{,}36\,\%$.
  ---
  b) $q = \sqrt[4]{1{,}1836} \approx 1{,}0430$, also durchschnittlich $4{,}30\,\%$ pro Jahr.
  ---
  Vergleich: Das arithmetische Mittel der Prozentsätze wäre $\tfrac{8 + 12 - 5 + 3}{4} = 4{,}5\,\%$, also zu hoch. Probe: $1{,}043^4 \approx 1{,}1835$.
```

```aufgabe
id: st-gm-preis
titel: Rabatt nach Preiserhöhung
niveau: 1
lernziel: 2
kompetenz: anwenden
angabe: |
  Ein Händler erhöht einen Preis um $20\,\%$ und gewährt danach einen Rabatt von $20\,\%$ auf den neuen Preis. Um wie
  viel Prozent hat sich der Preis insgesamt verändert? Gib das Ergebnis mit Vorzeichen an.
teile:
  - typ: zahl
    loesung: "(1.2*0.8 - 1)*100"
    fehler:
      - wert: "0"
        meldung: 'Die $20\,\%$ Rabatt beziehen sich auf den **erhöhten** Preis. Rechne mit den Faktoren $1{,}2$ und $0{,}8$.'
      - wert: "96"
        meldung: '$96$ ist der neue Preis in Prozent des alten. Gefragt ist die Veränderung.'
hinweise:
  - 'Erhöhung um $20\,\%$ ist der Faktor $1{,}2$, Rabatt von $20\,\%$ der Faktor $0{,}8$.'
  - Multipliziere beide Faktoren und vergleiche mit $1$.
loesung: |
  Ansatz: Beide Änderungen sind Faktoren, die nacheinander wirken.
  ---
  Gesamtfaktor $1{,}2 \cdot 0{,}8 = 0{,}96$.
  ---
  Der Preis ist um $4\,\%$ gesunken, Ergebnis $-4$. Probe mit $100$ Euro: $120$ Euro, davon $20\,\%$ weg ergibt $96$ Euro.
```

```aufgabe
id: st-gm-umkehr
titel: Fehlendes Gruppenmittel
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  In einem Kurs mit 40 Personen beträgt der Gesamtschnitt einer Klausur $62$ Punkte. Die 15 Personen aus Gruppe A haben
  im Schnitt $70$ Punkte. Welchen Schnitt haben die übrigen 25 Personen aus Gruppe B?
teile:
  - typ: zahl
    loesung: "(62*40 - 15*70)/25"
    anzeige: '57{,}2'
    fehler:
      - wert: "2*62 - 70"
        meldung: Das gilt nur, wenn beide Gruppen gleich groß sind. Hier zählt Gruppe B mit 25 Personen stärker.
hinweise:
  - Die Gesamtsumme der Punkte ist $40 \cdot 62$.
  - Zieh die Punktesumme von Gruppe A ab und teile den Rest durch die Größe von Gruppe B.
loesung: |
  Ansatz: mit Punktesummen rechnen. Gesamtsumme $40 \cdot 62 = 2480$, Summe von A $15 \cdot 70 = 1050$.
  ---
  Summe von B: $2480 - 1050 = 1430$. Schnitt von B: $\tfrac{1430}{25} = 57{,}2$.
  ---
  Probe: $\tfrac{15 \cdot 70 + 25 \cdot 57{,}2}{40} = \tfrac{1050 + 1430}{40} = 62$.
```

```aufgabe
id: st-gm-verdopplung
titel: Verdopplung in sechs Jahren
niveau: 3
lernziel: 2
kompetenz: begruenden
angabe: |
  Ein Fonds hat seinen Wert in sechs Jahren genau verdoppelt.

  a) Wie groß war die durchschnittliche jährliche Wachstumsrate in Prozent? (2 Nachkommastellen)

  b) Ein Prospekt rechnet „$100\,\%$ in 6 Jahren, also $16{,}67\,\%$ pro Jahr“. Begründe, warum das falsch ist.
teile:
  - typ: zahl
    label: 'a) Rate in %'
    loesung: "(nthRoot(2, 6) - 1)*100"
    toleranz: 0.01
    anzeige: '12{,}25'
    fehler:
      - wert: "100/6"
        meldung: Damit verteilst du den Zuwachs gleichmäßig auf die Jahre wie bei linearem Wachstum. Beim Fonds wächst aber jedes Jahr auch der Gewinn des Vorjahres mit.
  - typ: text
    label: 'b) Begründung'
    muster: |
      Wachstum wirkt multiplikativ. Mit $16{,}67\,\%$ pro Jahr wäre der Endwert $1{,}1667^6 \approx 2{,}52$, also mehr als
      das Doppelte. Der Zinseszins-Effekt fehlt in der Rechnung. Richtig ist der konstante Faktor $q$ mit $q^6 = 2$, also
      das geometrische Mittel $q = \sqrt[6]{2} \approx 1{,}1225$.
hinweise:
  - 'Gesucht ist $q$ mit $q^6 = 2$.'
  - 'Für b): Rechne zur Probe $1{,}1667^6$ aus.'
loesung: |
  Ansatz: konstanter Faktor $q$ mit $q^6 = 2$.
  ---
  a) $q = \sqrt[6]{2} \approx 1{,}1225$, also durchschnittlich $12{,}25\,\%$ pro Jahr.
  ---
  b) Probe der Prospektrechnung: $1{,}1667^6 \approx 2{,}52$. Das wäre mehr als eine Verdopplung.
  ---
  Antwortsatz: Die $16{,}67\,\%$ ignorieren den Zinseszins und überschätzen das jährliche Wachstum deutlich.
```

```aufgabe
id: st-gm-fonds
titel: Schwankende Renditen
niveau: 3
lernziel: 2
kompetenz: modellieren
angabe: |
  Ein Anlagefonds hatte in vier Jahren die Renditen $+30\,\%$, $-20\,\%$, $+10\,\%$ und $-5\,\%$. Angelegt wurden
  $10\,000$ Euro.

  a) Wie viel Euro sind nach vier Jahren vorhanden?

  b) Wie groß war die durchschnittliche jährliche Rendite in Prozent? (2 Nachkommastellen)

  c) Ein Werbetext nennt die „mittlere Rendite $3{,}75\,\%$“. Welchen Endwert würde man damit fälschlich erwarten? (auf ganze Euro)
teile:
  - typ: zahl
    label: 'a) Endwert in Euro'
    loesung: "10000*1.3*0.8*1.1*0.95"
    fehler:
      - wert: "10000*1.15"
        meldung: Du hast die Prozentsätze zu $15\,\%$ addiert. Jede Rendite wirkt aber auf den Stand des Vorjahres. Multipliziere die Faktoren.
  - typ: zahl
    label: 'b) mittlere Rendite in %'
    loesung: "(nthRoot(1.3*0.8*1.1*0.95, 4) - 1)*100"
    toleranz: 0.01
    anzeige: '2{,}10'
    fehler:
      - wert: "3.75"
        meldung: Das ist das arithmetische Mittel der Prozentsätze. Es passt nicht zu multiplikativem Wachstum.
  - typ: zahl
    label: 'c) falsch erwarteter Endwert'
    loesung: "10000*1.0375^4"
    toleranz: 1
    anzeige: '11\,587'
    fehler:
      - wert: "10000*1.0375*4"
        meldung: Vier Jahre mit $3{,}75\,\%$ heißt viermal mit $1{,}0375$ multiplizieren, also hoch $4$.
hinweise:
  - Rechne alle Renditen in Faktoren um und multipliziere sie.
  - 'b) Vierte Wurzel aus dem Gesamtfaktor. c) $10\,000 \cdot 1{,}0375^4$.'
loesung: |
  Ansatz: Renditen sind Faktoren $1{,}3$, $0{,}8$, $1{,}1$ und $0{,}95$.
  ---
  a) Gesamtfaktor $1{,}3 \cdot 0{,}8 \cdot 1{,}1 \cdot 0{,}95 = 1{,}0868$. Endwert $10\,868$ Euro.
  ---
  b) $\sqrt[4]{1{,}0868} \approx 1{,}0210$, also $2{,}10\,\%$ pro Jahr.
  ---
  c) $10\,000 \cdot 1{,}0375^4 \approx 11\,587$ Euro. Das arithmetische Mittel verspricht also rund $719$ Euro zu viel.
```

```aufgabe
id: st-gm-gefuehrt
titel: Mittleres Bevölkerungswachstum
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Die Einwohnerzahl einer Gemeinde änderte sich in drei Jahren um $+2\,\%$, $+5\,\%$ und $-1\,\%$. Wie groß war die
  durchschnittliche jährliche Wachstumsrate in Prozent? (2 Nachkommastellen)
teile:
  - typ: zahl
    loesung: "(nthRoot(1.02*1.05*0.99, 3) - 1)*100"
    toleranz: 0.01
    anzeige: '1{,}97'
    fehler:
      - wert: "(2 + 5 - 1)/3"
        meldung: Das arithmetische Mittel der Prozentsätze ist zu hoch. Nimm das geometrische Mittel der Faktoren.
hinweise:
  - Faktoren bilden, multiplizieren, dritte Wurzel ziehen.
  - 'Am Ende $1$ abziehen und mal $100$.'
gefuehrt:
  - text: 'Schreib $-1\,\%$ als Faktor.'
    teil: { typ: zahl, loesung: "0.99" }
    erklaerung: 'Ein Minus von $1\,\%$ lässt $99\,\%$ übrig, also den Faktor $0{,}99$.'
  - text: Berechne den Gesamtfaktor (5 Nachkommastellen).
    teil: { typ: zahl, loesung: "1.02*1.05*0.99", toleranz: 0.00001 }
    erklaerung: '$1{,}02 \cdot 1{,}05 \cdot 0{,}99 = 1{,}06029$.'
  - text: Ziehe die dritte Wurzel (4 Nachkommastellen).
    teil: { typ: zahl, loesung: "nthRoot(1.06029, 3)", toleranz: 0.0001 }
    erklaerung: '$\sqrt[3]{1{,}06029} \approx 1{,}0197$. Das ist der mittlere jährliche Faktor.'
  - text: Gib die mittlere Rate in Prozent an.
    teil: { typ: zahl, loesung: "(nthRoot(1.06029, 3) - 1)*100", toleranz: 0.01 }
    erklaerung: '$(1{,}0197 - 1) \cdot 100 \approx 1{,}97\,\%$. Das arithmetische Mittel $2\,\%$ wäre etwas zu hoch.'
loesung: |
  Ansatz: geometrisches Mittel der Faktoren $1{,}02$, $1{,}05$ und $0{,}99$.
  ---
  Gesamtfaktor $1{,}06029$, dritte Wurzel $\approx 1{,}0197$.
  ---
  Die Gemeinde ist im Mittel um $1{,}97\,\%$ pro Jahr gewachsen. Probe: $1{,}0197^3 \approx 1{,}0603$.
```

```reflexion
frage: Warum ist das geometrische Mittel der richtige Durchschnitt für Wachstumsfaktoren, das arithmetische aber nicht?
antwort: |
  Weil Wachstumsfaktoren nacheinander **multipliziert** werden. Der Durchschnitt soll der konstante Faktor sein, der
  in derselben Zeit zum selben Endwert führt. Das verlangt $q^n = q_1 \cdots q_n$, und die Lösung ist das geometrische
  Mittel. Das arithmetische Mittel beantwortet eine andere Frage, nämlich welcher konstante **Summand** dieselbe Summe
  ergibt. Bei schwankenden Raten ist es zu groß, denn ein Verlust wirkt auf einen höheren Stand stärker als ein
  gleich großer Gewinn auf einen niedrigeren.
```

## Quartile, Boxplot und Ausreißer

```aufgabe
id: st-qb-check-median
titel: Median einer kleinen Liste
niveau: 1
art: check
angabe: |
  Bestimme den Median von $3, 11, 5, 8$.
  (Wiederholung: [17.4 Mittelwert, Median und Modus](/lernen/mathe3/statistik/mittelwert-median-und-modus))
teile:
  - typ: zahl
    loesung: "(5+8)/2"
    anzeige: '6{,}5'
    fehler:
      - wert: "(11+5)/2"
        meldung: Das sind die beiden mittleren Werte der **ungeordneten** Liste. Ordne zuerst zu $3, 5, 8, 11$.
loesung: |
  Geordnet: $3, 5, 8, 11$. Bei $n = 4$ ist der Median das Mittel aus dem 2. und 3. Wert.
  ---
  $\tilde x = \tfrac{5 + 8}{2} = 6{,}5$.
```

Lageparameter sagen, **wo** die Daten liegen. Genauso wichtig ist, **wie weit** sie auseinanderliegen. Die Datensätze
$5, 5, 5, 5$ und $0, 2, 8, 10$ haben beide den Mittelwert $5$ und den Median $5$, sehen aber völlig verschieden aus.
In diesem Abschnitt lernst du die robusten Streuungsmaße kennen, die auf der Reihenfolge der Daten beruhen. Varianz und
Standardabweichung folgen in [17.7 Varianz, Standardabweichung und z-Werte](/lernen/mathe3/statistik/varianz-standardabweichung-und-z-werte).

### Spannweite und Quartile

Die **Spannweite** $R = x_{\max} - x_{\min}$ ist der Abstand zwischen größtem und kleinstem Wert. Sie ist einfach, hängt
aber nur von den zwei extremsten Werten ab. Ein einziger Ausreißer macht sie riesig. Robuster sind die Quartile. Das
Wort **Quartil** kommt von lateinisch *quarta*, „Viertel“: Die Quartile teilen die geordneten Daten in vier etwa gleich
große Teile.

:::definition[Quartile und Interquartilsabstand]
Ordne die Daten und bestimme den Median $\tilde x$. Teile die geordneten Daten in eine untere und eine obere Hälfte.
Bei **ungeradem** $n$ gehört der Median zu **keiner** der beiden Hälften.

- Das **erste Quartil** $q_1$ ist der Median der unteren Hälfte.
- Das **dritte Quartil** $q_3$ ist der Median der oberen Hälfte.
- Der Median selbst ist das zweite Quartil $q_2$.

Der **Interquartilsabstand** ist $\text{IQR} = q_3 - q_1$. Zwischen $q_1$ und $q_3$ liegen etwa die mittleren $50\,\%$ der Daten.
:::

Die Abkürzung IQR kommt vom englischen *interquartile range*. Ungefähr ein Viertel der Daten liegt unter $q_1$, und
ungefähr ein Viertel liegt über $q_3$.

:::beispiel[Quartile bei ungeradem n]
Sieben Messwerte, schon geordnet: $2, 4, 5, 7, 8, 9, 12$.

1. **Median:** $n = 7$ ist ungerade, also ist der 4. Wert der Median: $\tilde x = 7$.
2. **Hälften ohne den Median:** unten $2, 4, 5$ und oben $8, 9, 12$.
3. **Quartile:** $q_1 = 4$ (Mitte von $2, 4, 5$) und $q_3 = 9$ (Mitte von $8, 9, 12$).
4. **Streuungsmaße:** $R = 12 - 2 = 10$ und $\text{IQR} = 9 - 4 = 5$.
:::

:::achtung[Median in die Hälften mitgenommen]
Bei $2, 4, 5, 7, 8, 9, 12$ lautet eine typische falsche Rechnung:
$$\text{untere Hälfte } 2, 4, 5, 7 \quad\Rightarrow\quad q_1 = \frac{4 + 5}{2} = 4{,}5. \qquad \text{(falsch in diesem Kurs)}$$
Bei ungeradem $n$ gehört der Median in diesem Kurs zu keiner Hälfte. Richtig ist die untere Hälfte $2, 4, 5$ mit $q_1 = 4$.
:::

:::achtung[Verschiedene Konventionen]
Für Quartile gibt es mehrere leicht unterschiedliche Definitionen. Taschenrechner, Tabellenkalkulationen,
Programmiersprachen und Schulbücher rechnen teils verschieden, zum Beispiel mit Interpolation. Bei großen Datensätzen
sind die Unterschiede klein. In diesem Kurs gilt immer die Definition aus diesem Abschnitt ($q_1$ und $q_3$ als Mediane
der unteren und oberen Hälfte), auch im Widget dieses Abschnitts. Schreib in der
Prüfung einen Satz dazu, wie du die Quartile bestimmt hast, etwa „$q_1$ als Median der unteren Hälfte ohne den Median“.
:::

```aufgabe
id: st-quartile
titel: Fünf-Punkte-Zusammenfassung
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Bestimme für die Daten $12, 15, 9, 14, 10, 18, 13$ Minimum, $q_1$, Median, $q_3$, Maximum sowie Spannweite und
  Interquartilsabstand.
teile:
  - typ: zahl
    label: '$x_{\min}$'
    loesung: "9"
    fehler:
      - wert: "12"
        meldung: '$12$ ist der erste Wert der ungeordneten Liste. Das Minimum ist der kleinste Wert.'
  - typ: zahl
    label: '$q_1$'
    loesung: "10"
    fehler:
      - wert: "11"
        meldung: 'Du hast den Median $13$ in die untere Hälfte genommen. Bei ungeradem $n$ gehört er zu keiner Hälfte: unten bleiben $9, 10, 12$.'
  - typ: zahl
    label: '$\tilde x$'
    loesung: "13"
    fehler:
      - wert: "14"
        meldung: Das ist der mittlere Wert der ungeordneten Liste. Ordne zuerst.
  - typ: zahl
    label: '$q_3$'
    loesung: "15"
    fehler:
      - wert: "14.5"
        meldung: Der Median $13$ gehört nicht zur oberen Hälfte. Oben bleiben $14, 15, 18$.
  - typ: zahl
    label: '$x_{\max}$'
    loesung: "18"
  - typ: zahl
    label: 'Spannweite $R$'
    loesung: "18 - 9"
    fehler:
      - wert: "18 - 12"
        meldung: Die Spannweite ist Maximum minus **Minimum**, und das Minimum ist $9$.
  - typ: zahl
    label: 'IQR'
    loesung: "15 - 10"
    fehler:
      - wert: "18 - 9"
        meldung: Das ist die Spannweite. Der IQR ist $q_3 - q_1$.
hinweise:
  - 'Ordne die Daten zuerst. $n = 7$ ist ungerade: Der Median ist der 4. Wert und gehört zu keiner Hälfte.'
loesung: |
  Ansatz: ordnen, Median bestimmen, Hälften ohne Median bilden. Geordnet: $9, 10, 12, 13, 14, 15, 18$.
  ---
  Median: 4. Wert, $\tilde x = 13$. Untere Hälfte $9, 10, 12$: $q_1 = 10$. Obere Hälfte $14, 15, 18$: $q_3 = 15$.
  ---
  $R = 18 - 9 = 9$ und $\text{IQR} = 15 - 10 = 5$.
```

### Der Boxplot

Die fünf Zahlen $x_{\min}$, $q_1$, $\tilde x$, $q_3$ und $x_{\max}$ heißen **Fünf-Punkte-Zusammenfassung**. Der
**Boxplot** zeichnet sie als Bild.

- Eine **Box** reicht von $q_1$ bis $q_3$. Sie enthält die mittleren $50\,\%$ der Daten.
- Ein Strich in der Box markiert den **Median**.
- Zwei **Antennen**, auch **Whisker** genannt, reichen von der Box nach außen bis zum kleinsten und größten Wert, der kein Ausreißer ist.
- **Ausreißer** werden als einzelne Punkte eingezeichnet.

Wann ist ein Wert ein Ausreißer? Dafür gibt es eine weit verbreitete Faustregel des Statistikers John Tukey.

:::definition[Ausreißerregel nach Tukey]
Ein Wert heißt **Ausreißer**, wenn er außerhalb des Intervalls
$$\big[\,q_1 - 1{,}5 \cdot \text{IQR};\ q_3 + 1{,}5 \cdot \text{IQR}\,\big]$$
liegt. Die beiden Intervallgrenzen heißen **Ausreißergrenzen**.
:::

Die Regel misst also, wie weit ein Wert über die Box hinausragt, und zwar in Einheiten der Boxbreite. Liegt er mehr
als anderthalb Boxbreiten außerhalb, gilt er als Ausreißer.

:::beispiel[Bearbeitungszeiten von Tickets]
Zwölf Bearbeitungszeiten von Support-Tickets in Stunden, bereits geordnet:
$$3,\ 5,\ 6,\ 6,\ 7,\ 8,\ 9,\ 10,\ 11,\ 12,\ 14,\ 25.$$

1. **Median:** $n = 12$ ist gerade, also $\tilde x = \frac{8 + 9}{2} = 8{,}5$.
2. **Quartile:** untere Hälfte $3, 5, 6, 6, 7, 8$ mit $q_1 = \frac{6 + 6}{2} = 6$. Obere Hälfte $9, 10, 11, 12, 14, 25$ mit $q_3 = \frac{11 + 12}{2} = 11{,}5$.
3. **Grenzen:** $\text{IQR} = 5{,}5$ und $1{,}5 \cdot 5{,}5 = 8{,}25$. Also $6 - 8{,}25 = -2{,}25$ und $11{,}5 + 8{,}25 = 19{,}75$.
4. **Ausreißer:** $25 > 19{,}75$, also ist $25$ ein Ausreißer. Die obere Antenne reicht nur bis $14$, die untere bis $3$.

Zum Vergleich: Der Mittelwert ist $\bar x = \frac{116}{12} \approx 9{,}67$. Er liegt über dem Median, weil der Ausreißer ihn nach oben zieht.
:::

```plot
x: [0, 27]
y: [0, 3]
achsen: { x: "Bearbeitungszeit in h", y: "" }
strecken:
  - { von: [6, 1], nach: [11.5, 1], farbe: 0 }
  - { von: [6, 2], nach: [11.5, 2], farbe: 0 }
  - { von: [6, 1], nach: [6, 2], farbe: 0 }
  - { von: [11.5, 1], nach: [11.5, 2], farbe: 0 }
  - { von: [8.5, 1], nach: [8.5, 2], farbe: 1 }
  - { von: [3, 1.5], nach: [6, 1.5], farbe: 0 }
  - { von: [11.5, 1.5], nach: [14, 1.5], farbe: 0 }
  - { von: [3, 1.25], nach: [3, 1.75], farbe: 0 }
  - { von: [14, 1.25], nach: [14, 1.75], farbe: 0 }
  - { von: [19.75, 0.6], nach: [19.75, 2.4], gestrichelt: true }
punkte:
  - { x: 25, y: 1.5, label: "Ausreißer 25", farbe: 1 }
  - { x: 8.5, y: 2, label: "Median 8,5", farbe: 1 }
beschriftung: "Boxplot der Bearbeitungszeiten: Box von q1 = 6 bis q3 = 11,5, Median 8,5, Antennen bis 3 und 14. Der Wert 25 liegt rechts der gestrichelten Ausreißergrenze 19,75 und wird einzeln eingezeichnet."
```

Am Boxplot sieht man auch die **Schiefe**. Hier ist die rechte Hälfte der Box länger als die linke ($3$ gegen $2{,}5$
Stunden). Die rechte Antenne ist zwar etwas kürzer als die linke, aber rechts liegt zusätzlich der Ausreißer $25$
weit draußen. Die Daten sind also rechtsschief.

:::achtung[Antenne bis zur Ausreißergrenze gezeichnet]
Bei den Tickets lautet eine typische falsche Zeichnung:
$$\text{obere Antenne von } 11{,}5 \text{ bis } 19{,}75. \qquad \text{(falsch)}$$
Die Grenze $19{,}75$ ist kein Datenwert. Die Antenne endet beim größten **Datenwert** innerhalb der Grenzen, also bei $14$.
Die Grenze selbst zeichnet man höchstens als Hilfslinie.
:::

:::merke[Boxplot in fünf Schritten]
1. Daten ordnen und den Median bestimmen.
2. Hälften bilden, bei ungeradem $n$ ohne den Median, und daraus $q_1$ und $q_3$.
3. $\text{IQR} = q_3 - q_1$ und die Grenzen $q_1 - 1{,}5\,\text{IQR}$ und $q_3 + 1{,}5\,\text{IQR}$ berechnen.
4. Werte außerhalb der Grenzen als Punkte markieren.
5. Box von $q_1$ bis $q_3$ mit Medianstrich zeichnen, Antennen bis zum extremsten Wert innerhalb der Grenzen.
:::

```aufgabe
id: st-qb-check-widget
titel: Was passiert bei einem extremen Ausreißer?
niveau: 1
art: check
angabe: |
  Im Widget direkt nach dieser Frage stehen die Bearbeitungszeiten der Tickets. Sag voraus: Was passiert, wenn du den Wert $25$ durch $60$
  ersetzt?
teile:
  - typ: auswahl
    optionen:
      - 'Der Mittelwert steigt deutlich, Median und Quartile bleiben gleich.'
      - 'Mittelwert, Median und Quartile steigen alle.'
      - 'Nur der Median steigt, der Mittelwert bleibt gleich.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Median und Quartile hängen nur von der Position der Werte ab. Der größte Wert bleibt der größte, egal ob er $25$ oder $60$ ist.
      - wert: 2
        meldung: Der Mittelwert nutzt die Summe aller Werte. Wenn ein Wert um $35$ wächst, wächst die Summe um $35$.
loesung: |
  Der Mittelwert steigt um $\tfrac{35}{12} \approx 2{,}9$ auf etwa $12{,}58$ Stunden.
  ---
  Median und Quartile ändern sich nicht, denn die Reihenfolge der Werte bleibt gleich. Probiere es im Widget aus.
```

```widget
name: statistik
titel: Kennzahlen und Boxplot
props:
  daten: [3, 5, 6, 6, 7, 8, 9, 10, 11, 12, 14, 25]
```

Das Widget berechnet die Quartile nach der Kursregel. Seine Antennen reichen bis zum kleinsten und größten Wert, auch
wenn das ein Ausreißer ist. Die Ausreißergrenzen musst du also selbst ausrechnen. Ändere im Eingabefeld den Wert $25$
zu $14$ oder zu $60$. Du siehst: Der Mittelwert $\bar x$ in der Liste der Kennzahlen ändert sich, Median, $q_1$ und $q_3$
bleiben gleich. Im Bild passt sich die Achse dem neuen Maximum an. Darum rutscht die Box auf dem Bildschirm ein Stück,
obwohl ihre Werte gleich bleiben. Vergleiche deshalb die Zahlen, nicht die Lage im Bild.

Unter den Kennzahlen zeigt das Widget auch schon die Varianz und die Standardabweichung. Sie kommen erst in
[17.7 Varianz, Standardabweichung und z-Werte](/lernen/mathe3/statistik/varianz-standardabweichung-und-z-werte).
Das Widget nennt den Wert mit Nenner $n$ „$\sigma$“ und den mit Nenner $n - 1$ „$s$“.

```aufgabe
id: st-qb-gerade
titel: Quartile bei geradem n
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Zehn Laufzeiten eines Programms in Sekunden: $31, 25, 40, 28, 35, 22, 38, 30, 27, 33$.
  Bestimme Median, $q_1$, $q_3$ und den Interquartilsabstand.
teile:
  - typ: zahl
    label: '$\tilde x$'
    loesung: "(30+31)/2"
    anzeige: '30{,}5'
    fehler:
      - wert: "(35+22)/2"
        meldung: Das sind die beiden mittleren Werte der ungeordneten Liste. Ordne zuerst.
  - typ: zahl
    label: '$q_1$'
    loesung: "27"
    fehler:
      - wert: "(25+27)/2"
        meldung: 'Die untere Hälfte hat fünf Werte: $22, 25, 27, 28, 30$. Ihr Median ist der 3. Wert, also kein Mittel aus zwei Werten.'
  - typ: zahl
    label: '$q_3$'
    loesung: "35"
  - typ: zahl
    label: 'IQR'
    loesung: "35 - 27"
    fehler:
      - wert: "40 - 22"
        meldung: Das ist die Spannweite. Der IQR ist $q_3 - q_1$.
hinweise:
  - Ordne die Werte. Bei $n = 10$ besteht jede Hälfte aus fünf Werten.
loesung: |
  Ansatz: ordnen, dann in zwei Hälften zu je fünf Werten teilen. Geordnet: $22, 25, 27, 28, 30, 31, 33, 35, 38, 40$.
  ---
  Median: $\tfrac{30 + 31}{2} = 30{,}5$. Untere Hälfte $22, 25, 27, 28, 30$: $q_1 = 27$. Obere Hälfte $31, 33, 35, 38, 40$: $q_3 = 35$.
  ---
  $\text{IQR} = 35 - 27 = 8$. Die mittlere Hälfte der Laufzeiten liegt zwischen 27 und 35 Sekunden.
```

```aufgabe
id: st-ausreisser
titel: Ist das ein Ausreißer?
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Die Ladezeiten einer App in Sekunden bei zehn Starts: $21, 23, 24, 25, 25, 26, 28, 29, 30, 48$.

  a) Bestimme $q_1$ und $q_3$.

  b) Berechne die obere Ausreißergrenze $q_3 + 1{,}5\,\text{IQR}$.

  c) Entscheide, ob $48$ ein Ausreißer ist.
teile:
  - typ: zahl
    label: 'a) $q_1$'
    loesung: "24"
  - typ: zahl
    label: 'a) $q_3$'
    loesung: "29"
  - typ: zahl
    label: 'b) obere Grenze'
    loesung: "29 + 1.5*(29 - 24)"
    anzeige: '36{,}5'
    fehler:
      - wert: "29 + (29 - 24)"
        meldung: Der Faktor $1{,}5$ fehlt. Die Grenze liegt anderthalb IQR über $q_3$.
      - wert: "25.5 + 1.5*(29 - 24)"
        meldung: Die obere Grenze wird von $q_3$ aus gemessen, nicht vom Median.
  - typ: auswahl
    label: 'c) Ist 48 ein Ausreißer?'
    optionen: ['ja', 'nein']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Vergleiche $48$ mit der oberen Grenze aus b). Liegt der Wert darüber, ist er ein Ausreißer.
hinweise:
  - '$n = 10$: Die untere Hälfte sind die ersten fünf Werte, die obere Hälfte die letzten fünf.'
  - '$\text{IQR} = q_3 - q_1$, danach $q_3 + 1{,}5 \cdot \text{IQR}$.'
loesung: |
  Ansatz: Quartile aus den Hälften, dann Tukey-Regel.
  ---
  a) Untere Hälfte $21, 23, 24, 25, 25$: $q_1 = 24$. Obere Hälfte $26, 28, 29, 30, 48$: $q_3 = 29$.
  ---
  b) $\text{IQR} = 5$, obere Grenze $29 + 1{,}5 \cdot 5 = 36{,}5$.
  ---
  c) $48 > 36{,}5$, also ein Ausreißer. Im Boxplot reicht die obere Antenne nur bis $30$, und die $48$ wird als Punkt eingezeichnet.
```

```aufgabe
id: st-qb-boxplot-lesen
titel: Einen Boxplot lesen
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: |
  Der Boxplot zeigt die Pendelzeiten von 200 Beschäftigten in Minuten. Ausreißer gibt es keine.

  a) Wie groß ist der Interquartilsabstand?

  b) Ungefähr wie viele der 200 Beschäftigten pendeln länger als 30 Minuten?

  c) Ab welcher Pendelzeit würde ein Wert nach der Tukey-Regel als Ausreißer nach oben gelten?
plot:
  x: [5, 50]
  y: [0, 3]
  achsen: { x: "Pendelzeit in min", y: "" }
  strecken:
    - { von: [18, 1], nach: [30, 1], farbe: 0 }
    - { von: [18, 2], nach: [30, 2], farbe: 0 }
    - { von: [18, 1], nach: [18, 2], farbe: 0 }
    - { von: [30, 1], nach: [30, 2], farbe: 0 }
    - { von: [22, 1], nach: [22, 2], farbe: 1 }
    - { von: [12, 1.5], nach: [18, 1.5], farbe: 0 }
    - { von: [30, 1.5], nach: [41, 1.5], farbe: 0 }
    - { von: [12, 1.25], nach: [12, 1.75], farbe: 0 }
    - { von: [41, 1.25], nach: [41, 1.75], farbe: 0 }
  punkte:
    - { x: 12, y: 1.5, label: "12" }
    - { x: 18, y: 2, label: "18" }
    - { x: 22, y: 2, label: "22" }
    - { x: 30, y: 2, label: "30" }
    - { x: 41, y: 1.5, label: "41" }
teile:
  - typ: zahl
    label: 'a) IQR in min'
    loesung: "30 - 18"
    fehler:
      - wert: "41 - 12"
        meldung: Das ist die Spannweite von Antennenende zu Antennenende. Der IQR ist die Breite der Box.
  - typ: zahl
    label: 'b) Anzahl über 30 min'
    loesung: "200/4"
    fehler:
      - wert: "200/2"
        meldung: 'Die Hälfte liegt über dem Median $22$. Über $q_3 = 30$ liegt nur etwa ein Viertel.'
  - typ: zahl
    label: 'c) obere Ausreißergrenze in min'
    loesung: "30 + 1.5*12"
    fehler:
      - wert: "41"
        meldung: '$41$ ist der größte Wert. Die Grenze berechnet man aus $q_3$ und dem IQR.'
hinweise:
  - 'Box von $q_1$ bis $q_3$, Strich beim Median, Antennen bis zu den extremen Werten.'
  - Über $q_3$ liegt etwa ein Viertel der Daten.
loesung: |
  Ansatz: Aus dem Bild ablesen: $x_{\min} = 12$, $q_1 = 18$, $\tilde x = 22$, $q_3 = 30$, $x_{\max} = 41$.
  ---
  a) $\text{IQR} = 30 - 18 = 12$ Minuten.
  ---
  b) Über $q_3$ liegt etwa ein Viertel der Daten: $\tfrac{200}{4} = 50$ Personen.
  ---
  c) $30 + 1{,}5 \cdot 12 = 48$ Minuten. Der größte Wert $41$ liegt darunter, passend zur Angabe „keine Ausreißer“.
```

```aufgabe
id: st-qb-umkehr
titel: Wie groß darf ein Wert sein?
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Für eine Messreihe gilt $q_1 = 14$ und $q_3 = 22$. In welchem Bereich muss ein Wert liegen, damit er nach der
  Tukey-Regel **kein** Ausreißer ist? Gib die untere und die obere Grenze an.
teile:
  - typ: zahl
    label: 'untere Grenze'
    loesung: "14 - 1.5*(22 - 14)"
    fehler:
      - wert: "14 - 8"
        meldung: Der Faktor $1{,}5$ fehlt. Die Grenze liegt $1{,}5 \cdot 8 = 12$ unter $q_1$.
  - typ: zahl
    label: 'obere Grenze'
    loesung: "22 + 1.5*(22 - 14)"
    fehler:
      - wert: "14 + 1.5*(22 - 14)"
        meldung: Die obere Grenze wird von $q_3$ aus gemessen, nicht von $q_1$.
hinweise:
  - Berechne zuerst den IQR.
  - 'Grenzen: $q_1 - 1{,}5\,\text{IQR}$ und $q_3 + 1{,}5\,\text{IQR}$.'
loesung: |
  Ansatz: Tukey-Grenzen aus $q_1$, $q_3$ und dem IQR.
  ---
  $\text{IQR} = 22 - 14 = 8$ und $1{,}5 \cdot 8 = 12$.
  ---
  Grenzen: $14 - 12 = 2$ und $22 + 12 = 34$. Jeder Wert von $2$ bis $34$ ist kein Ausreißer.
```

```aufgabe
id: st-qb-vergleich
titel: Zwei Boxplots vergleichen
niveau: 3
lernziel: 3
kompetenz: begruenden
angabe: |
  Zwei Server wurden je eine Woche gemessen. Antwortzeiten in ms:

  - Server A: $x_{\min} = 20$, $q_1 = 35$, $\tilde x = 40$, $q_3 = 45$, $x_{\max} = 60$.
  - Server B: $x_{\min} = 15$, $q_1 = 25$, $\tilde x = 30$, $q_3 = 70$, $x_{\max} = 120$.

  Beurteile die Aussagen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: 'Mindestens die Hälfte der Antwortzeiten von B ist kürzer als das untere Quartil $q_1$ von A.'
        richtig: true
        erklaerung: 'Der Median von B ist $30$ ms, und $30 < 35 = q_1$ von A. Mindestens die Hälfte der B-Werte ist höchstens $30$ ms, also kürzer als $35$ ms. Etwa drei Viertel der A-Werte liegen bei $35$ ms oder darüber.'
      - text: 'Server B ist gleichmäßiger als Server A.'
        richtig: false
        erklaerung: 'Der IQR von B ist $45$ ms, der von A nur $10$ ms. B streut viel stärker.'
      - text: 'Die Verteilung von B ist rechtsschief.'
        richtig: true
        erklaerung: 'Bei B ist der Abstand vom Median zu $q_3$ ($40$) viel größer als zu $q_1$ ($5$), und die rechte Antenne ist lang.'
      - text: 'Server A hat sicher keine Ausreißer.'
        richtig: true
        erklaerung: 'Grenzen für A: $35 - 15 = 20$ und $45 + 15 = 60$. Minimum und Maximum liegen genau auf den Grenzen, also nicht außerhalb.'
    fehler:
      - wert: [r, r, r, r]
        meldung: Gleichmäßigkeit misst man mit der Streuung, zum Beispiel mit dem IQR. Vergleiche die Breite der beiden Boxen.
hinweise:
  - Für die Lage vergleichst du Mediane und Quartile, für die Streuung die IQR.
  - 'Für die Ausreißerfrage: Berechne die Tukey-Grenzen von A.'
loesung: |
  Ansatz: Lage über Median, Streuung über IQR, Schiefe über die Lage des Medians in der Box.
  ---
  Lage: Median B $30$ liegt unter $q_1$ von A. Streuung: IQR A $10$, IQR B $45$.
  ---
  Schiefe: B hat den Median nahe am unteren Boxrand und eine lange rechte Antenne, also rechtsschief. Grenzen A: $20$ und $60$, kein Wert liegt außerhalb.
```

```aufgabe
id: st-qb-pruefung
titel: Ausreißer auf beiden Seiten
niveau: 3
lernziel: 3
kompetenz: rechnen
angabe: |
  Elf Personen geben an, wie viele Minuten sie täglich lesen:
  $$24,\ 3,\ 21,\ 26,\ 18,\ 44,\ 22,\ 30,\ 25,\ 20,\ 28.$$

  a) Bestimme Median, $q_1$ und $q_3$.

  b) Berechne die beiden Ausreißergrenzen.

  c) Gib an, bis wohin die Antennen des Boxplots reichen, und nenne die Ausreißer. Beschreibe die Schiefe der Box.
teile:
  - typ: zahl
    label: 'a) $\tilde x$'
    loesung: "24"
    fehler:
      - wert: "44"
        meldung: Das ist der 6. Wert der ungeordneten Liste. Ordne zuerst.
  - typ: zahl
    label: 'a) $q_1$'
    loesung: "20"
    fehler:
      - wert: "(20+21)/2"
        meldung: 'Bei $n = 11$ gehört der Median zu keiner Hälfte. Die untere Hälfte $3, 18, 20, 21, 22$ hat fünf Werte, ihr Median ist $20$.'
  - typ: zahl
    label: 'a) $q_3$'
    loesung: "28"
  - typ: zahl
    label: 'b) untere Grenze'
    loesung: "20 - 1.5*8"
    fehler:
      - wert: "20 - 8"
        meldung: Der Faktor $1{,}5$ fehlt.
  - typ: zahl
    label: 'b) obere Grenze'
    loesung: "28 + 1.5*8"
  - typ: text
    label: 'c) Antennen, Ausreißer und Schiefe'
    muster: |
      Ausreißer sind $3 < 8$ und $44 > 40$. Die untere Antenne reicht bis $18$, die obere bis $30$, das sind die extremsten
      Werte innerhalb der Grenzen. Die Box reicht von $20$ bis $28$ mit Medianstrich bei $24$, genau in der Mitte. Die Box
      selbst ist also symmetrisch. Die zwei Ausreißer liegen auf verschiedenen Seiten.
hinweise:
  - 'Ordne die Werte. Bei $n = 11$ ist der 6. Wert der Median.'
  - '$\text{IQR} = q_3 - q_1$, Grenzen $q_1 - 1{,}5\,\text{IQR}$ und $q_3 + 1{,}5\,\text{IQR}$. Die Antennen enden beim letzten Datenwert innerhalb der Grenzen.'
loesung: |
  Ansatz: Fünf-Punkte-Zusammenfassung und Tukey-Regel. Geordnet: $3, 18, 20, 21, 22, 24, 25, 26, 28, 30, 44$.
  ---
  a) Median: 6. Wert, $24$. Untere Hälfte $3, 18, 20, 21, 22$: $q_1 = 20$. Obere Hälfte $25, 26, 28, 30, 44$: $q_3 = 28$.
  ---
  b) $\text{IQR} = 8$, $1{,}5 \cdot 8 = 12$. Grenzen $20 - 12 = 8$ und $28 + 12 = 40$.
  ---
  c) Ausreißer: $3$ und $44$. Antennen bis $18$ und bis $30$. Die Box ist symmetrisch um den Median $24$.
```

```aufgabe
id: st-qb-gefuehrt
titel: Ausreißer prüfen Schritt für Schritt
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Neun Paketgewichte in kg, geordnet: $1{,}2;\ 1{,}5;\ 1{,}8;\ 2{,}0;\ 2{,}1;\ 2{,}3;\ 2{,}6;\ 2{,}8;\ 5{,}9$.
  Ist $5{,}9$ kg nach der Tukey-Regel ein Ausreißer? Gib die obere Ausreißergrenze an.
teile:
  - typ: zahl
    label: 'obere Grenze in kg'
    loesung: "2.7 + 1.5*(2.7 - 1.65)"
    anzeige: '4{,}275'
    fehler:
      - wert: "2.7 + (2.7 - 1.65)"
        meldung: Der Faktor $1{,}5$ fehlt.
hinweise:
  - '$n = 9$: Der Median ist der 5. Wert und gehört zu keiner Hälfte. Jede Hälfte hat vier Werte.'
  - 'Der Median einer Hälfte mit vier Werten ist das Mittel aus dem 2. und 3. Wert.'
gefuehrt:
  - text: Bestimme $q_1$ als Median von $1{,}2;\ 1{,}5;\ 1{,}8;\ 2{,}0$.
    teil: { typ: zahl, loesung: "(1.5+1.8)/2" }
    erklaerung: '$q_1 = \tfrac{1{,}5 + 1{,}8}{2} = 1{,}65$.'
  - text: Bestimme $q_3$ als Median von $2{,}3;\ 2{,}6;\ 2{,}8;\ 5{,}9$.
    teil: { typ: zahl, loesung: "(2.6+2.8)/2" }
    erklaerung: '$q_3 = \tfrac{2{,}6 + 2{,}8}{2} = 2{,}7$. Der Median $2{,}1$ gehört zu keiner Hälfte.'
  - text: Berechne den IQR.
    teil: { typ: zahl, loesung: "2.7 - 1.65" }
    erklaerung: '$\text{IQR} = 2{,}7 - 1{,}65 = 1{,}05$.'
  - text: Berechne die obere Grenze.
    teil: { typ: zahl, loesung: "2.7 + 1.5*1.05" }
    erklaerung: '$2{,}7 + 1{,}575 = 4{,}275$. Weil $5{,}9 > 4{,}275$ ist, ist das Paket ein Ausreißer.'
loesung: |
  Ansatz: Quartile aus den Hälften ohne Median, dann Tukey-Regel.
  ---
  $q_1 = 1{,}65$, $q_3 = 2{,}7$, $\text{IQR} = 1{,}05$.
  ---
  Obere Grenze $2{,}7 + 1{,}5 \cdot 1{,}05 = 4{,}275$ kg. Da $5{,}9 > 4{,}275$, ist $5{,}9$ kg ein Ausreißer.
```

```reflexion
frage: Warum ist der Interquartilsabstand robust gegenüber Ausreißern, die Spannweite aber nicht?
antwort: |
  Die Spannweite ist Maximum minus Minimum. Wird der größte Wert extrem, wird sie beliebig groß. Der IQR hängt nur von den
  Werten in der Mitte der geordneten Liste ab, nämlich von $q_1$ und $q_3$. Ein einzelner extremer Wert bleibt am Rand der
  Liste und verschiebt diese mittleren Positionen nicht. Deshalb eignet sich der IQR auch als Maßstab, um Ausreißer zu
  erkennen: Ein Maßstab, der selbst von Ausreißern verzerrt würde, wäre dafür unbrauchbar.
```

## Varianz, Standardabweichung und z-Werte

```aufgabe
id: st-vs-check-varianz
titel: Varianz einer Zufallsvariablen
niveau: 1
art: check
angabe: |
  Eine Zufallsvariable $X$ nimmt die Werte $0$ und $2$ mit je der Wahrscheinlichkeit $0{,}5$ an. Ihr Erwartungswert ist $1$.
  Berechne die Varianz $V(X)$.
  (Wiederholung: [16.11 Varianz und Standardabweichung: wie stark der Zufall streut](/lernen/mathe3/wahrscheinlichkeit/varianz-und-standardabweichung-wie-stark-der-zufall-streut))
teile:
  - typ: zahl
    loesung: "0.5*(0-1)^2 + 0.5*(2-1)^2"
    fehler:
      - wert: "0"
        meldung: Du hast die Abweichungen $-1$ und $+1$ ohne Quadrat addiert. Sie heben sich auf. Darum quadriert man sie vorher.
loesung: |
  $V(X) = \sum (x_i - \mu)^2\, p_i$ mit $\mu = 1$.
  ---
  $V(X) = 0{,}5 \cdot (0 - 1)^2 + 0{,}5 \cdot (2 - 1)^2 = 0{,}5 + 0{,}5 = 1$.
```

Der Interquartilsabstand aus [17.6 Quartile, Boxplot und Ausreißer](/lernen/mathe3/statistik/quartile-boxplot-und-ausreisser)
nutzt nur die Reihenfolge der Daten. Das wichtigste Streuungsmaß für metrische Daten nutzt dagegen jeden einzelnen Wert.
Es misst, wie weit die Werte im Mittel vom arithmetischen Mittel entfernt sind.

### Warum man die Abweichungen quadriert

Die naheliegende Idee wäre, die Abweichungen $x_i - \bar x$ einfach zu mitteln. Das bringt aber nichts. Nach der
Schwerpunkteigenschaft aus [17.4 Mittelwert, Median und Modus](/lernen/mathe3/statistik/mittelwert-median-und-modus)
ist ihre Summe immer $0$. Positive und negative Abweichungen heben sich auf. Man quadriert sie deshalb vorher. Quadrate
sind nie negativ, und große Abweichungen zählen besonders stark.

:::definition[Empirische Varianz und Standardabweichung]
Für Daten $x_1, \dots, x_n$ mit Mittelwert $\bar x$ heißt
$$s^2 = \frac{1}{n}\sum_{i=1}^{n}(x_i - \bar x)^2$$
die **empirische Varianz**, und $s = \sqrt{s^2}$ heißt **Standardabweichung**.

Will man aus einer Stichprobe die Streuung der Grundgesamtheit schätzen, verwendet man die **Stichprobenvarianz**
$$s_{n-1}^2 = \frac{1}{n - 1}\sum_{i=1}^{n}(x_i - \bar x)^2.$$
:::

Die Varianz ist die mittlere **quadrierte** Abweichung. Ihre Einheit ist das Quadrat der Dateneinheit, etwa
Minuten zum Quadrat. Erst die Wurzel bringt die Standardabweichung $s$ in die Einheit der Daten zurück. Deshalb deutet
man meistens $s$ und nicht $s^2$.

:::beispiel[Varianz von Hand]
Daten: $2, 4, 4, 4, 5, 5, 7, 9$. Es ist $n = 8$ und $\bar x = \frac{40}{8} = 5$.

|$x_i$|2|4|4|4|5|5|7|9|
|---|---|---|---|---|---|---|---|---|
|$x_i - \bar x$|$-3$|$-1$|$-1$|$-1$|$0$|$0$|$2$|$4$|
|$(x_i - \bar x)^2$|9|1|1|1|0|0|4|16|

Kontrolle: Die zweite Zeile ergibt zusammen $0$, wie es die Schwerpunkteigenschaft verlangt. Die Quadratsumme ist
$9 + 1 + 1 + 1 + 0 + 0 + 4 + 16 = 32$. Also ist $s^2 = \frac{32}{8} = 4$ und $s = 2$.

Mit Nenner $n - 1$: $s_{n-1}^2 = \frac{32}{7} \approx 4{,}571$ und $s_{n-1} \approx 2{,}138$.
:::

**Warum $n - 1$?** Die Abweichungen werden vom Stichprobenmittel $\bar x$ aus gemessen. Nach der Minimaleigenschaft
macht genau $\bar x$ die Quadratsumme so klein wie möglich. Mit dem unbekannten wahren Mittelwert der Grundgesamtheit
wäre sie also mindestens so groß, meist größer. Teilt man durch $n$, unterschätzt man die Streuung der Grundgesamtheit deshalb im Mittel. Der Nenner
$n - 1$ gleicht das aus. Für großes $n$ ist der Unterschied klein. In Aufgaben steht meist dabei, welche Formel gemeint ist.

:::beispiel[Lieferzeiten mit Einheit]
Ein Pizzadienst misst fünf Lieferzeiten in Minuten: $18, 22, 20, 25, 15$.

1. **Mittelwert:** $\bar x = \frac{100}{5} = 20$ Minuten.
2. **Abweichungen:** $-2, 2, 0, 5, -5$ Minuten. Kontrolle: Summe $0$.
3. **Quadrate:** $4, 4, 0, 25, 25$, Summe $58$ Minuten zum Quadrat.
4. **Varianz:** $s^2 = \frac{58}{5} = 11{,}6\ \text{min}^2$.
5. **Standardabweichung:** $s = \sqrt{11{,}6} \approx 3{,}41$ Minuten.

Deutung: Die Lieferzeiten weichen typischerweise um gut drei Minuten von $20$ Minuten ab.
:::

:::achtung[Die Varianz als Standardabweichung angegeben]
Bei den Lieferzeiten lautet eine typische falsche Antwort:
$$s = \frac{58}{5} = 11{,}6 \text{ Minuten.} \qquad \text{(falsch)}$$
$11{,}6$ ist die Varianz in Minuten zum Quadrat. Eine typische Abweichung von $11{,}6$ Minuten passt auch gar nicht zu
Daten, die alle höchstens $5$ Minuten vom Mittel entfernt sind. Die Standardabweichung ist $\sqrt{11{,}6} \approx 3{,}41$ Minuten.
:::

```aufgabe
id: st-varianz
titel: Varianz und Standardabweichung
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Berechne für die Daten $6, 8, 10, 12, 14$ die empirische Varianz $s^2$ (Division durch $n$) und die
  Standardabweichung $s$ (2 Nachkommastellen).
teile:
  - typ: zahl
    label: '$s^2$'
    loesung: 'variance([6, 8, 10, 12, 14], "uncorrected")'
    fehler:
      - wert: "40"
        meldung: '$40$ ist die Quadratsumme. Für die Varianz teilst du sie noch durch $n = 5$.'
      - wert: "10"
        meldung: Du hast durch $n - 1 = 4$ geteilt. Hier ist die empirische Varianz mit Nenner $n$ gefragt.
  - typ: zahl
    label: '$s$'
    loesung: 'std([6, 8, 10, 12, 14], "uncorrected")'
    toleranz: 0.005
    anzeige: '2\sqrt{2} \approx 2{,}83'
    fehler:
      - wert: "8"
        meldung: Das ist die Varianz. Die Standardabweichung ist ihre Wurzel.
hinweise:
  - 'Mittelwert, Abweichungen, Quadrate, Summe, durch $n$, Wurzel.'
loesung: |
  Ansatz: Definition $s^2 = \tfrac1n \sum (x_i - \bar x)^2$. Es ist $\bar x = \tfrac{50}{5} = 10$, die Abweichungen sind $-4, -2, 0, 2, 4$.
  ---
  Quadrate $16, 4, 0, 4, 16$, Summe $40$. Also $s^2 = \tfrac{40}{5} = 8$.
  ---
  $s = \sqrt 8 = 2\sqrt2 \approx 2{,}83$. Die Werte weichen typischerweise um knapp $3$ vom Mittel $10$ ab.
```

```aufgabe
id: st-stichprobenvarianz
titel: Stichprobenvarianz
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Fünf zufällig entnommene Schrauben aus einer großen Produktion sind $6$, $8$, $10$, $12$ und $14$ Hundertstelmillimeter
  länger als das Sollmaß. Schätze Varianz und Standardabweichung der ganzen Produktion mit der Stichprobenvarianz (Division durch
  $n - 1$, 2 Nachkommastellen).
teile:
  - typ: zahl
    label: '$s_{n-1}^2$'
    loesung: 'variance([6, 8, 10, 12, 14])'
    fehler:
      - wert: "8"
        meldung: Das ist die empirische Varianz mit Nenner $n$. Für eine Schätzung der Grundgesamtheit teilst du durch $n - 1 = 4$.
  - typ: zahl
    label: '$s_{n-1}$'
    loesung: 'std([6, 8, 10, 12, 14])'
    toleranz: 0.005
    anzeige: '\sqrt{10} \approx 3{,}16'
    fehler:
      - wert: "10"
        meldung: Das ist die Varianz. Zieh noch die Wurzel.
hinweise:
  - Die Quadratsumme der Abweichungen ist dieselbe wie bei der empirischen Varianz. Nur der Nenner ändert sich.
  - 'Hier sind es fünf Werte, also Nenner $5 - 1 = 4$.'
loesung: |
  Ansatz: Stichprobenvarianz, weil von einer Stichprobe auf die Produktion geschlossen wird. $\bar x = 10$, Quadratsumme $40$.
  ---
  $s_{n-1}^2 = \tfrac{40}{4} = 10$ und $s_{n-1} = \sqrt{10} \approx 3{,}16$ Hundertstelmillimeter.
  ---
  Die Schätzung ist größer als die empirische Varianz $8$. Sie gleicht die systematische Unterschätzung aus.
```

### Der Verschiebungssatz

:::satz[Verschiebungssatz]
$$s^2 = \frac{1}{n}\sum_{i=1}^n x_i^2 - \bar x^2 = \overline{x^2} - \bar x^2.$$
:::

Dabei ist $\overline{x^2}$ der Mittelwert der quadrierten Daten. In Worten: Varianz ist „Mittelwert der Quadrate
minus Quadrat des Mittelwerts“.

:::beweis
Wir multiplizieren das Quadrat mit der binomischen Formel aus und ziehen die Summe auseinander:
$\frac1n \sum (x_i - \bar x)^2 = \frac1n \sum x_i^2 - 2\bar x \cdot \frac1n \sum x_i + \frac1n \cdot n\bar x^2$.
Weil $\frac1n \sum x_i = \bar x$ ist, wird daraus $\overline{x^2} - 2\bar x^2 + \bar x^2 = \overline{x^2} - \bar x^2$.
Das ist dieselbe Rechnung wie beim Verschiebungssatz $V(X) = E(X^2) - \mu^2$ in
[16.11 Varianz und Standardabweichung: wie stark der Zufall streut](/lernen/mathe3/wahrscheinlichkeit/varianz-und-standardabweichung-wie-stark-der-zufall-streut).
:::

Der Verschiebungssatz ist praktisch, wenn man nur Summen kennt, etwa $\sum x_i$ und $\sum x_i^2$ vom Taschenrechner.
Für die Daten $2, 4, 4, 4, 5, 5, 7, 9$ ist $\sum x_i^2 = 232$, also $s^2 = \frac{232}{8} - 5^2 = 29 - 25 = 4$. Das
passt zum Ergebnis von Hand.

### Lineare Transformation

:::satz[Lineare Transformation]
Für $y_i = c\,x_i + d$ gilt $s_y^2 = c^2\, s_x^2$ und $s_y = |c|\, s_x$.
:::

Dabei sind $c$ und $d$ feste Zahlen. Eine Verschiebung aller Werte um $d$ ändert die Streuung nicht, denn alle
Abweichungen vom Mittelwert bleiben gleich. Eine Streckung um $c$ streckt jede Abweichung um $c$. So kann man
Einheiten umrechnen, ohne die Daten neu auszuwerten.

:::achtung[Die Verschiebung auf die Standardabweichung angewendet]
Messwerte haben in Grad Celsius $s = 4$. Umgerechnet wird mit $F = 1{,}8\,C + 32$. Eine typische falsche Rechnung:
$$s_F = 1{,}8 \cdot 4 + 32 = 39{,}2. \qquad \text{(falsch)}$$
Die $+32$ verschiebt alle Werte gleich weit und ändert keinen Abstand. Richtig ist $s_F = 1{,}8 \cdot 4 = 7{,}2$ Grad Fahrenheit.
:::

```aufgabe
id: st-verschiebungssatz
titel: Varianz aus Summen
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Von $n = 10$ Messwerten kennt man nur $\sum x_i = 50$ und $\sum x_i^2 = 290$. Berechne $\bar x$, die empirische
  Varianz $s^2$ und $s$.
teile:
  - typ: zahl
    label: '$\bar x$'
    loesung: "50/10"
  - typ: zahl
    label: '$s^2$'
    loesung: "290/10 - (50/10)^2"
    fehler:
      - wert: "29 - 5"
        meldung: Abgezogen wird das **Quadrat** des Mittelwerts, also $5^2 = 25$.
      - wert: "290 - 50^2/10"
        meldung: Das ist die Quadratsumme der Abweichungen. Teile sie noch durch $n = 10$.
  - typ: zahl
    label: '$s$'
    loesung: "sqrt(290/10 - (50/10)^2)"
    fehler:
      - wert: "4"
        meldung: Das ist die Varianz. Die Standardabweichung ist ihre Wurzel.
hinweise:
  - 'Verschiebungssatz: $s^2 = \overline{x^2} - \bar x^2$.'
  - '$\overline{x^2} = \tfrac{\sum x_i^2}{n}$ und $\bar x = \tfrac{\sum x_i}{n}$.'
loesung: |
  Ansatz: Verschiebungssatz, weil nur Summen bekannt sind.
  ---
  $\bar x = \tfrac{50}{10} = 5$ und $\overline{x^2} = \tfrac{290}{10} = 29$.
  ---
  $s^2 = 29 - 5^2 = 4$ und $s = 2$.
```

```aufgabe
id: st-transformation
titel: Einheiten umrechnen
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Eine Temperaturmessreihe hat in Grad Celsius den Mittelwert $20$ und die Standardabweichung $4$.
  Berechne Mittelwert und Standardabweichung in Grad Fahrenheit ($F = 1{,}8\,C + 32$).
teile:
  - typ: zahl
    label: '$\bar F$'
    loesung: "1.8*20 + 32"
    fehler:
      - wert: "1.8*20"
        meldung: Beim Mittelwert wirkt die Verschiebung um $32$ sehr wohl mit. Nur bei der Streuung fällt sie weg.
  - typ: zahl
    label: '$s_F$'
    loesung: "1.8*4"
    anzeige: '7{,}2'
    fehler:
      - wert: "1.8*4 + 32"
        meldung: Die $+32$ verschiebt alle Werte gleich weit. Abstände zum Mittelwert ändern sich dadurch nicht.
hinweise:
  - Der Mittelwert wird genauso umgerechnet wie jeder einzelne Wert.
  - Die Verschiebung um $32$ wirkt nur auf den Mittelwert, die Streckung um $1{,}8$ auch auf die Standardabweichung.
loesung: |
  Ansatz: lineare Transformation $F = 1{,}8\,C + 32$ mit $c = 1{,}8$ und $d = 32$.
  ---
  Mittelwert: $\bar F = 1{,}8 \cdot 20 + 32 = 68$.
  ---
  Standardabweichung: $s_F = |1{,}8| \cdot 4 = 7{,}2$. Die $+32$ ändert die Streuung nicht.
```

### Was sagt die Standardabweichung aus?

Für glockenförmige, also annähernd normalverteilte Daten gelten die σ-Regeln aus
[16.16 Normalverteilung und Standardisieren](/lernen/mathe3/wahrscheinlichkeit/normalverteilung-und-standardisieren)
sinngemäß. Etwa zwei Drittel der Werte liegen im Bereich $\bar x \pm s$, etwa $95\,\%$ im Bereich $\bar x \pm 2s$. Für
**beliebige** Daten gibt es eine schwächere, aber immer gültige Garantie.

:::satz[Ungleichung von Tschebyscheff für Daten]
Für jede Datenreihe mit Standardabweichung $s > 0$ und jede Zahl $c > 1$ gilt: Der Anteil der Werte mit
$|x_i - \bar x| \ge c\,s$ ist höchstens $\dfrac{1}{c^2}$.
:::

**Beispiel:** Mit $c = 2$ sind höchstens $\tfrac14 = 25\,\%$ der Werte zwei oder mehr Standardabweichungen vom Mittelwert
entfernt, egal wie die Daten verteilt sind. **Zum Vergleich:** Bei glockenförmigen Daten sind es nur
etwa $5\,\%$. Die Ungleichung gibt also nur eine obere Schranke, keinen genauen Anteil.

:::beweis
Es seien $m$ Werte mit $|x_i - \bar x| \ge cs$. In der Quadratsumme lassen wir alle anderen Summanden weg, denn sie
sind nicht negativ. Jeden der $m$ verbleibenden Summanden schätzen wir nach unten durch $(cs)^2$ ab:
$$n s^2 = \sum_{i=1}^n (x_i - \bar x)^2 \ge m \cdot c^2 s^2.$$
Wir teilen durch die positive Zahl $n c^2 s^2$ und erhalten $\frac{m}{n} \le \frac{1}{c^2}$.
:::

```aufgabe
id: st-vs-tschebyscheff
titel: Was garantiert die Standardabweichung?
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: |
  Die Füllmengen einer Abfüllanlage haben $\bar x = 500$ ml und $s = 5$ ml. Über die Form der Verteilung ist nichts bekannt.

  a) Welcher Anteil der Füllmengen liegt nach Tschebyscheff **mindestens** zwischen $490$ und $510$ ml? (Dezimalzahl)

  b) Welcher Anteil wäre es ungefähr, wenn die Füllmengen glockenförmig verteilt wären?
teile:
  - typ: zahl
    label: 'a) Mindestanteil'
    loesung: "1 - 1/2^2"
    anzeige: '0{,}75'
    fehler:
      - wert: "1/2^2"
        meldung: '$\tfrac{1}{c^2}$ ist der **Höchstanteil außerhalb**. Innerhalb liegt mindestens der Rest.'
      - wert: "1 - 1/2"
        meldung: In der Ungleichung steht $c^2$, nicht $c$. Mit $c = 2$ ist das $\tfrac14$.
  - typ: auswahl
    label: 'b) bei Glockenform'
    optionen: ['etwa $68\,\%$', 'etwa $95\,\%$', 'genau $75\,\%$']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: '$68\,\%$ gehören zum Bereich $\bar x \pm s$. Hier ist der Bereich $\bar x \pm 2s$.'
      - wert: 2
        meldung: '$75\,\%$ ist nur die Mindestgarantie für jede beliebige Verteilung. Bei Glockenform liegt viel mehr im Bereich.'
hinweise:
  - '$490$ und $510$ liegen $10$ ml vom Mittel entfernt. Wie viele Standardabweichungen sind das?'
  - 'Mit $c = 2$ liegen höchstens $\tfrac{1}{c^2}$ außerhalb.'
loesung: |
  Ansatz: Abstand in Standardabweichungen: $\tfrac{10}{5} = 2$, also $c = 2$.
  ---
  a) Außerhalb liegen höchstens $\tfrac{1}{4} = 0{,}25$. Innerhalb liegen also mindestens $0{,}75$.
  ---
  b) Bei Glockenform liegen nach den σ-Regeln etwa $95\,\%$ in $\bar x \pm 2s$. Tschebyscheff ist schwächer, gilt aber immer.
```

### Variationskoeffizient und z-Werte

Die Standardabweichung hat dieselbe Einheit wie die Daten. Um die Streuung von Größen mit ganz verschiedenem Niveau zu
vergleichen, bezieht man sie auf den Mittelwert.

:::definition[Variationskoeffizient und z-Wert]
Für positive Daten ist $v = \dfrac{s}{\bar x}$ der **Variationskoeffizient**, oft in Prozent angegeben.

Der **z-Wert** eines einzelnen Werts $x_i$ ist $z_i = \dfrac{x_i - \bar x}{s}$.
:::

Der Variationskoeffizient ist eine **relative** Streuung ohne Einheit. Der z-Wert sagt, um wie viele
Standardabweichungen ein Wert über oder unter dem Mittel liegt. Das ist dieselbe Standardisierung wie bei der
Normalverteilung. $z = 2$ heißt „zwei Standardabweichungen über dem Durchschnitt“, $z = -0{,}5$ heißt „eine halbe
Standardabweichung darunter“.

:::merke[Standardabweichung von Hand in fünf Schritten]
1. Mittelwert $\bar x$ berechnen.
2. Abweichungen $x_i - \bar x$ bilden. Kontrolle: Summe $0$.
3. Abweichungen quadrieren und addieren.
4. Durch $n$ teilen (empirische Varianz) oder durch $n - 1$ (Stichprobenvarianz).
5. Wurzel ziehen. Ergebnis mit Einheit und einem Satz zur Bedeutung angeben.
:::

:::pruefung[Taschenrechner im Statistikmodus]
Viele erlaubte Taschenrechner wie der Casio fx-82 oder fx-991 haben einen **Statistikmodus**. Du tippst die Daten ein
und liest $\bar x$ und zwei Standardabweichungen ab. Der Wert mit Nenner $n$ heißt dort meist $\sigma_x$, der mit Nenner
$n - 1$ heißt $s_x$. Auch im Widget aus [17.6 Quartile, Boxplot und Ausreißer](/lernen/mathe3/statistik/quartile-boxplot-und-ausreisser) heißt der Wert mit Nenner $n$ „$\sigma$“ und der mit Nenner $n - 1$ „$s$“.
Schreib in der Prüfung immer dazu, welchen Nenner du verwendet hast, und notiere die Zwischensummen $\sum x_i$ und
$\sum x_i^2$. Wenn du dich vertippst, bekommst du für den Ansatz trotzdem Punkte.
:::

```aufgabe
id: st-zwert
titel: Leistung einordnen
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  In einer Klausur betrug der Durchschnitt $60$ Punkte bei einer Standardabweichung von $8$ Punkten. Anna erreichte
  $76$ Punkte, Ben $54$ Punkte. Berechne beide $z$-Werte.
teile:
  - typ: zahl
    label: '$z_{\text{Anna}}$'
    loesung: "(76 - 60)/8"
    fehler:
      - wert: "76/8"
        meldung: Zuerst den Mittelwert abziehen. Der $z$-Wert misst den **Abstand** zum Mittel in Standardabweichungen.
  - typ: zahl
    label: '$z_{\text{Ben}}$'
    loesung: "(54 - 60)/8"
    anzeige: '-0{,}75'
    fehler:
      - wert: "(60 - 54)/8"
        meldung: Ben liegt **unter** dem Durchschnitt, also ist sein $z$-Wert negativ. Rechne Wert minus Mittel.
hinweise:
  - '$z = \tfrac{x - \bar x}{s}$.'
loesung: |
  Ansatz: $z = \tfrac{x - \bar x}{s}$ mit $\bar x = 60$ und $s = 8$.
  ---
  $z_{\text{Anna}} = \tfrac{76 - 60}{8} = 2$: zwei Standardabweichungen über dem Schnitt. $z_{\text{Ben}} = \tfrac{54 - 60}{8} = -0{,}75$: etwas darunter.
```

```aufgabe
id: st-variationskoeffizient
titel: Relative Streuung vergleichen
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Server A hat eine mittlere Antwortzeit von $50$ ms bei einer Standardabweichung von $5$ ms. Server B hat $400$ ms bei
  $20$ ms. Berechne beide Variationskoeffizienten. Welcher Server antwortet relativ gesehen gleichmäßiger?
teile:
  - typ: zahl
    label: '$v_A$'
    loesung: "5/50"
    anzeige: '0{,}1'
    fehler:
      - wert: "50/5"
        meldung: Der Variationskoeffizient ist Standardabweichung **durch** Mittelwert, nicht umgekehrt.
  - typ: zahl
    label: '$v_B$'
    loesung: "20/400"
    anzeige: '0{,}05'
  - typ: auswahl
    label: 'gleichmäßiger'
    optionen: ['Server A', 'Server B']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Absolut streut A weniger. Relativ zu seinem Niveau streut aber B weniger, und das fragt der Variationskoeffizient.
hinweise:
  - '$v = s / \bar x$.'
  - Vergleiche die beiden Ergebnisse. Kleinerer Wert heißt relativ gleichmäßiger.
loesung: |
  Ansatz: Streuung relativ zum Niveau, also $v = \tfrac{s}{\bar x}$.
  ---
  $v_A = \tfrac{5}{50} = 0{,}10 = 10\,\%$ und $v_B = \tfrac{20}{400} = 0{,}05 = 5\,\%$.
  ---
  Absolut streut B stärker, relativ zu seinem Niveau aber nur halb so stark. Relativ gleichmäßiger ist Server B.
```

```aufgabe
id: st-vs-vergleich
titel: Wer war relativ besser?
niveau: 3
lernziel: 4
kompetenz: begruenden
angabe: |
  Lea schrieb in Klausur A $78$ Punkte. Dort war der Schnitt $70$ bei einer Standardabweichung von $4$. Tom schrieb in
  Klausur B $85$ Punkte bei einem Schnitt von $75$ und einer Standardabweichung von $8$.

  a) Berechne beide $z$-Werte.

  b) Wer hat im Vergleich zum eigenen Kurs besser abgeschnitten? Begründe, warum der Vergleich der Rohpunkte hier nicht reicht.
teile:
  - typ: zahl
    label: 'a) $z_{\text{Lea}}$'
    loesung: "(78 - 70)/4"
    fehler:
      - wert: "(78 - 70)/16"
        meldung: Du hast durch die Varianz $4^2$ geteilt. Gegeben ist die Standardabweichung $4$.
  - typ: zahl
    label: 'a) $z_{\text{Tom}}$'
    loesung: "(85 - 75)/8"
    fehler:
      - wert: "85 - 75"
        meldung: Das ist der Abstand in Punkten. Teile durch die Standardabweichung $8$, um ihn in Standardabweichungen zu messen.
  - typ: text
    label: 'b) Begründung'
    muster: |
      Lea liegt $2$ Standardabweichungen über ihrem Schnitt, Tom nur $1{,}25$. Relativ zum eigenen Kurs war Lea besser.
      Die Rohpunkte sind nicht vergleichbar, weil die Klausuren verschiedene Schnitte und Streuungen haben. Toms $10$
      Punkte Vorsprung sind in einem Kurs, in dem die Punkte stark streuen, weniger ungewöhnlich als Leas $8$ Punkte in
      einem Kurs mit kleiner Streuung.
hinweise:
  - '$z = \tfrac{x - \bar x}{s}$, jeweils mit den Kennzahlen des eigenen Kurses.'
  - Ein größerer $z$-Wert heißt, der Wert ist im eigenen Kurs ungewöhnlicher gut.
loesung: |
  Ansatz: Leistungen in verschiedenen Kursen über $z$-Werte vergleichbar machen.
  ---
  a) $z_{\text{Lea}} = \tfrac{78 - 70}{4} = 2$ und $z_{\text{Tom}} = \tfrac{85 - 75}{8} = 1{,}25$.
  ---
  b) $2 > 1{,}25$: Lea war relativ zu ihrem Kurs besser.
  ---
  Die Rohpunkte allein ignorieren Niveau und Streuung der Kurse. Erst der $z$-Wert misst, wie außergewöhnlich ein Ergebnis im eigenen Umfeld ist.
```

```aufgabe
id: st-vs-gefuehrt
titel: Standardabweichung Schritt für Schritt
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Ein Läufer misst seine Zeiten für eine Runde in Sekunden: $72, 75, 70, 79, 74$. Berechne die empirische
  Standardabweichung (Division durch $n$, 2 Nachkommastellen).
teile:
  - typ: zahl
    loesung: 'std([72, 75, 70, 79, 74], "uncorrected")'
    toleranz: 0.005
    anzeige: '3{,}03'
    fehler:
      - wert: 'variance([72, 75, 70, 79, 74], "uncorrected")'
        meldung: Das ist die Varianz. Zieh noch die Wurzel.
      - wert: 'std([72, 75, 70, 79, 74])'
        meldung: Du hast durch $n - 1$ geteilt. Gefragt ist die empirische Standardabweichung mit Nenner $n = 5$.
hinweise:
  - 'Mittelwert: $\tfrac{370}{5}$.'
  - Abweichungen bilden, quadrieren, addieren, durch $5$ teilen, Wurzel ziehen.
gefuehrt:
  - text: Berechne den Mittelwert.
    teil: { typ: zahl, loesung: "(72+75+70+79+74)/5" }
    erklaerung: '$\bar x = \tfrac{370}{5} = 74$ Sekunden.'
  - text: Berechne die Summe der quadrierten Abweichungen.
    teil: { typ: zahl, loesung: "(72-74)^2 + (75-74)^2 + (70-74)^2 + (79-74)^2 + (74-74)^2" }
    erklaerung: 'Abweichungen $-2, 1, -4, 5, 0$ mit Summe $0$. Quadrate $4 + 1 + 16 + 25 + 0 = 46$.'
  - text: Berechne die empirische Varianz.
    teil: { typ: zahl, loesung: "46/5" }
    erklaerung: '$s^2 = \tfrac{46}{5} = 9{,}2$ Sekunden zum Quadrat.'
  - text: Berechne die Standardabweichung.
    teil: { typ: zahl, loesung: "sqrt(46/5)", toleranz: 0.005 }
    erklaerung: '$s = \sqrt{9{,}2} \approx 3{,}03$ Sekunden.'
loesung: |
  Ansatz: Definition der empirischen Varianz. $\bar x = 74$ Sekunden.
  ---
  Quadratsumme $46$, also $s^2 = 9{,}2$.
  ---
  $s \approx 3{,}03$ Sekunden. Die Rundenzeiten schwanken typischerweise um etwa drei Sekunden um $74$ Sekunden.
```

```reflexion
frage: Warum zieht man aus der Varianz die Wurzel, bevor man die Streuung deutet?
antwort: |
  Die Varianz ist eine mittlere **quadrierte** Abweichung. Ihre Einheit ist das Quadrat der Dateneinheit, bei
  Lieferzeiten also Minuten zum Quadrat. Damit kann man sich nichts vorstellen, und die Zahl ist oft viel größer als die
  tatsächlichen Abweichungen. Die Wurzel bringt das Maß in die ursprüngliche Einheit zurück. Die Standardabweichung kann
  man direkt mit den Daten vergleichen, etwa „typischerweise drei Minuten Abweichung vom Mittel“.
```

## Lineare Regression: die Methode der kleinsten Quadrate

```aufgabe
id: st-rg-check-gerade
titel: Wert einer linearen Funktion
niveau: 1
art: check
angabe: |
  Berechne für die Gerade $y = 2{,}5x + 4$ den Wert an der Stelle $x = 6$.
  (Wiederholung: [4.3 Lineare Funktionen](/lernen/mathe3/funktionen/lineare-funktionen))
teile:
  - typ: zahl
    loesung: "2.5*6 + 4"
    fehler:
      - wert: "2.5*(6 + 4)"
        meldung: Punkt vor Strich. Erst $2{,}5 \cdot 6$ rechnen, dann $4$ addieren.
loesung: |
  Einsetzen: $y = 2{,}5 \cdot 6 + 4$.
  ---
  $y = 15 + 4 = 19$.
```

Bisher hatte jeder Merkmalsträger **ein** Merkmal. Oft misst man aber zwei, etwa Lernzeit und Prüfungspunkte,
Dateigröße und Übertragungszeit oder Temperatur und Stromverbrauch. Dann fragt man: Hängen die beiden zusammen, und
wie? Die Daten sind nun **Paare** $(x_1 \mid y_1), \dots, (x_n \mid y_n)$. Man zeichnet sie als Punkte in ein
**Streudiagramm**, auch Punktwolke genannt.

Die **Regression** sucht eine Gerade, die die Punktwolke möglichst gut beschreibt. Mit ihr kann man aus $x$ einen
Wert für $y$ vorhersagen. Das Wort heißt wörtlich „Rückschritt“ und stammt aus der Biologie des 19. Jahrhunderts:
Francis Galton beobachtete, dass Kinder sehr großer Eltern im Mittel wieder etwas näher am Durchschnitt liegen. Heute
ist es einfach der Fachbegriff für das Anpassen einer Geraden oder Kurve an Daten.

:::beispiel[Lernzeit und Punkte]
Fünf Studierende geben an, wie viele Stunden sie gelernt haben ($x$) und wie viele Punkte sie in der Klausur erreicht haben ($y$):

|Lernzeit $x_i$ in h|2|4|6|8|10|
|---|---|---|---|---|---|
|Punkte $y_i$|35|45|60|70|80|

Die Punkte liegen fast auf einer steigenden Geraden. Welche Gerade beschreibt sie am besten? Wir beantworten die Frage
in drei Schritten: ein Maß für gemeinsames Steigen, ein Maß für „gut passend“ und dann die Formel.
:::

### Die Kovarianz: steigen x und y gemeinsam?

Verschiebe gedanklich den Ursprung in den **Schwerpunkt** $(\bar x \mid \bar y)$ der Punktwolke. Ein Punkt rechts oben
hat zwei positive Abweichungen $x_i - \bar x$ und $y_i - \bar y$. Ihr Produkt ist positiv. Ein Punkt links unten hat zwei
negative Abweichungen, ihr Produkt ist ebenfalls positiv. Punkte links oben und rechts unten liefern negative Produkte.

:::definition[Kovarianz]
$$s_{xy} = \frac1n \sum_{i=1}^n (x_i - \bar x)(y_i - \bar y) = \overline{xy} - \bar x\, \bar y.$$
:::

Dabei ist $\overline{xy}$ der Mittelwert der Produkte $x_i y_i$. Die zweite Form ist wieder ein Verschiebungssatz.
Man beweist ihn durch Ausmultiplizieren, so wie bei der Varianz.

- Ist $s_{xy} > 0$, liegen die Punkte überwiegend rechts oben und links unten. Die Wolke steigt.
- Ist $s_{xy} < 0$, liegen sie überwiegend links oben und rechts unten. Die Wolke fällt.
- Für $y = x$ ergibt die Formel genau die Varianz: $s_{xx} = s_x^2$.

```aufgabe
id: st-rg-kovarianz
titel: Vorzeichen der Kovarianz
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Für zehn Wintertage werden die Außentemperatur $x$ in °C und der Gasverbrauch $y$ eines Hauses in kWh notiert. An
  kalten Tagen wird mehr geheizt. Welches Vorzeichen erwartest du für die Kovarianz $s_{xy}$?
teile:
  - typ: auswahl
    optionen: ['$s_{xy} < 0$', '$s_{xy} > 0$', '$s_{xy} = 0$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Ein kalter Tag hat $x_i < \bar x$ und hohen Verbrauch $y_i > \bar y$. Das Produkt der Abweichungen ist dann negativ.'
      - wert: 2
        meldung: Null wäre zu erwarten, wenn Temperatur und Verbrauch nichts miteinander zu tun hätten. Hier hängen sie deutlich zusammen.
hinweise:
  - 'Überlege, in welchem Viertel um den Schwerpunkt ein kalter Tag mit hohem Verbrauch liegt.'
loesung: |
  Ansatz: Je kälter, desto mehr Verbrauch. Die Punktwolke fällt also von links oben nach rechts unten.
  ---
  Punkte links oben und rechts unten liefern negative Produkte $(x_i - \bar x)(y_i - \bar y)$. Also ist $s_{xy} < 0$.
```

### Die Methode der kleinsten Quadrate

Gesucht ist eine Gerade $y = kx + d$. Dabei ist $k$ die Steigung und $d$ der Achsenabschnitt. Für jeden Punkt misst
das **Residuum**
$$e_i = y_i - (kx_i + d)$$
den senkrechten Abstand zur Geraden, also Messwert minus Vorhersage. Das Wort *Residuum* heißt „Rest“.

Die Idee geht auf Carl Friedrich Gauß und Adrien-Marie Legendre zurück: Wähle $k$ und $d$ so, dass die **Summe der quadrierten Residuen**
$$Q(k, d) = \sum_{i=1}^n \big(y_i - kx_i - d\big)^2$$
so klein wie möglich wird. Quadriert wird aus zwei Gründen. Positive und negative Abweichungen sollen sich nicht
aufheben. Und das Minimum lässt sich dann mit Schulmitteln ausrechnen, wie der folgende Satz zeigt.

:::satz[Regressionsgerade]
Sind nicht alle $x_i$ gleich, also $s_x^2 > 0$, dann wird $Q(k, d)$ genau für
$$k = \frac{s_{xy}}{s_x^2} = \frac{\sum (x_i - \bar x)(y_i - \bar y)}{\sum (x_i - \bar x)^2}, \qquad d = \bar y - k\,\bar x$$
minimal. Die Regressionsgerade geht also immer durch den Schwerpunkt $(\bar x \mid \bar y)$.
:::

In der zweiten Form von $k$ kürzt sich der Faktor $\frac1n$ aus Zähler und Nenner weg. Mit dieser Form rechnet man von Hand.

:::beweis
**Schritt 1, $d$ bei festem $k$:** Für festes $k$ schreiben wir $z_i = y_i - kx_i$. Dann ist $Q = \sum (z_i - d)^2$. Nach
der Minimaleigenschaft des Mittelwerts aus
[17.4 Mittelwert, Median und Modus](/lernen/mathe3/statistik/mittelwert-median-und-modus) ist das minimal für
$d = \bar z = \bar y - k\bar x$.

**Schritt 2, $k$:** Wir setzen dieses $d$ ein. Dann wird $y_i - kx_i - d = (y_i - \bar y) - k(x_i - \bar x)$. Ausmultiplizieren und Aufteilen der Summe ergibt
$$Q(k) = n\big(s_y^2 - 2k\,s_{xy} + k^2 s_x^2\big).$$
Das ist eine nach oben offene Parabel in $k$, denn $s_x^2 > 0$. Ihr Scheitel liegt nach
[4.4 Quadratische Funktionen](/lernen/mathe3/funktionen/quadratische-funktionen) bei $k = \frac{2s_{xy}}{2s_x^2} = \frac{s_{xy}}{s_x^2}$.
:::

:::beispiel[Lernzeit und Punkte, ausgerechnet]
Mittelwerte: $\bar x = \frac{30}{5} = 6$ und $\bar y = \frac{290}{5} = 58$.

|$x_i - \bar x$|$-4$|$-2$|$0$|$2$|$4$|Summe|
|---|---|---|---|---|---|---|
|$y_i - \bar y$|$-23$|$-13$|$2$|$12$|$22$|$0$|
|$(x_i - \bar x)^2$|16|4|0|4|16|40|
|$(x_i - \bar x)(y_i - \bar y)$|92|26|0|24|88|230|

$$k = \frac{230}{40} = 5{,}75, \qquad d = 58 - 5{,}75 \cdot 6 = 23{,}5.$$

Die Regressionsgerade ist $y = 5{,}75\,x + 23{,}5$.

- **Deutung der Steigung:** Pro zusätzlicher Lernstunde steigen die Punkte im Mittel um etwa $5{,}75$.
- **Prognose** für 7 Stunden: $5{,}75 \cdot 7 + 23{,}5 = 63{,}75$, also etwa 64 Punkte.
- **Probe:** Der Schwerpunkt erfüllt die Gleichung, denn $5{,}75 \cdot 6 + 23{,}5 = 58$.
:::

```plot
x: [0, 12]
y: [0, 100]
achsen: { x: "Lernzeit in h", y: "Punkte" }
graphen:
  - { f: "5.75*x + 23.5", label: "y = 5,75x + 23,5", farbe: 1, von: 0, bis: 12 }
punkte:
  - { x: 2, y: 35 }
  - { x: 4, y: 45 }
  - { x: 6, y: 60 }
  - { x: 8, y: 70 }
  - { x: 10, y: 80 }
  - { x: 6, y: 58, label: "Schwerpunkt (6 | 58)", farbe: 2, offen: true }
strecken:
  - { von: [4, 45], nach: [4, 46.5], gestrichelt: true }
  - { von: [6, 60], nach: [6, 58], gestrichelt: true }
  - { von: [8, 70], nach: [8, 69.5], gestrichelt: true }
  - { von: [10, 80], nach: [10, 81], gestrichelt: true }
beschriftung: "Streudiagramm der Lernzeiten mit Regressionsgerade y = 5,75x + 23,5. Die Gerade geht durch den Schwerpunkt (6 | 58). Die kurzen gestrichelten Strecken sind die Residuen."
```

:::merke[Regressionsgerade von Hand]
1. $\bar x$ und $\bar y$ berechnen.
2. Tabelle mit $x_i - \bar x$, $y_i - \bar y$, $(x_i - \bar x)^2$ und $(x_i - \bar x)(y_i - \bar y)$ anlegen. Kontrolle: Die ersten beiden Zeilen ergeben jeweils $0$.
3. $k = \dfrac{\sum (x_i - \bar x)(y_i - \bar y)}{\sum (x_i - \bar x)^2}$.
4. $d = \bar y - k\bar x$.
5. Probe: Liegt $(\bar x \mid \bar y)$ auf der Geraden? Passt das Vorzeichen von $k$ zur Punktwolke?

Im Statistikmodus vieler Taschenrechner heißt die Gerade $y = A + Bx$. Dort ist $B$ die Steigung $k$ und $A$ der Achsenabschnitt $d$.
:::

:::achtung[Vorzeichenfehler beim Achsenabschnitt]
Bei den Lernzeiten lautet eine typische falsche Rechnung:
$$d = \bar y + k\bar x = 58 + 5{,}75 \cdot 6 = 92{,}5. \qquad \text{(falsch)}$$
Die Gerade muss durch den Schwerpunkt gehen: $\bar y = k\bar x + d$. Nach $d$ umgeformt heißt das $d = \bar y - k\bar x = 23{,}5$.
Die Probe deckt den Fehler sofort auf: $5{,}75 \cdot 6 + 92{,}5 = 127$ ist nicht $58$.
:::

```aufgabe
id: st-regression-schwerpunkt
titel: Achsenabschnitt aus dem Schwerpunkt
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Für eine Messreihe gilt $\bar x = 12$ und $\bar y = 40$. Die Steigung der Regressionsgeraden ist $k = 2{,}5$.
  Bestimme den Achsenabschnitt $d$ und die Prognose für $x = 15$.
teile:
  - typ: zahl
    label: '$d$'
    loesung: "40 - 2.5*12"
    fehler:
      - wert: "40 + 2.5*12"
        meldung: 'Vorzeichenfehler. Aus $\bar y = k\bar x + d$ folgt $d = \bar y - k\bar x$.'
  - typ: zahl
    label: 'Prognose $y(15)$'
    loesung: "2.5*15 + (40 - 2.5*12)"
    anzeige: '47{,}5'
    fehler:
      - wert: "2.5*15"
        meldung: Der Achsenabschnitt fehlt. Die Prognose ist $k \cdot 15 + d$.
hinweise:
  - Die Regressionsgerade geht durch den Schwerpunkt $(\bar x \mid \bar y)$.
loesung: |
  Ansatz: Die Gerade geht durch $(12 \mid 40)$, also $40 = 2{,}5 \cdot 12 + d$.
  ---
  $d = 40 - 30 = 10$. Prognose: $y(15) = 2{,}5 \cdot 15 + 10 = 47{,}5$.
```

```aufgabe
id: st-rg-steigung-deuten
titel: Steigung und Achsenabschnitt deuten
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Für Wohnungen in einem Bezirk ergibt die Regression der Monatsmiete $y$ in Euro auf die Wohnfläche $x$ in m² die
  Gerade $y = 11{,}5\,x + 120$. Welche Deutung der Steigung ist richtig?
teile:
  - typ: auswahl
    optionen:
      - 'Pro zusätzlichem Quadratmeter ist die Miete im Mittel um $11{,}50$ Euro höher.'
      - 'Jede Wohnung kostet $11{,}50$ Euro.'
      - 'Eine Wohnung mit $1$ m² kostet genau $131{,}50$ Euro.'
      - 'Die Miete steigt jedes Jahr um $11{,}50$ Euro.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die Steigung ist eine Änderung pro Einheit von $x$, also Euro **pro Quadratmeter**, kein Preis einer Wohnung.
      - wert: 2
        meldung: Rechnerisch stimmt der Wert. Aber $1$ m² liegt weit außerhalb der Daten, und die Regression sagt nichts „genau“ voraus. Die Frage war außerdem nach der Deutung der Steigung.
      - wert: 3
        meldung: In den Daten kommt keine Zeit vor. $x$ ist die Wohnfläche.
hinweise:
  - Die Steigung sagt, um wie viel $y$ im Mittel wächst, wenn $x$ um $1$ wächst. Achte auf die Einheiten von $x$ und $y$.
loesung: |
  Ansatz: $k$ hat die Einheit „Einheit von $y$ pro Einheit von $x$“, hier Euro pro m².
  ---
  Pro Quadratmeter mehr steigt die Miete im Mittel um $11{,}50$ Euro. Das ist eine Durchschnittsaussage, keine Aussage über eine einzelne Wohnung.
```

:::beispiel[Übertragungszeit und Dateigröße]
Ein Server misst, wie lange das Hochladen von Dateien dauert:

|Größe $x_i$ in MB|10|20|30|40|50|
|---|---|---|---|---|---|
|Zeit $y_i$ in s|$3{,}1$|$4{,}9$|$7{,}2$|$8{,}8$|$11{,}0$|

1. **Mittelwerte:** $\bar x = 30$ MB und $\bar y = \frac{35}{5} = 7$ s.
2. **Summen:** $\sum (x_i - \bar x)^2 = 400 + 100 + 0 + 100 + 400 = 1000$ und $\sum (x_i - \bar x)(y_i - \bar y) = 78 + 21 + 0 + 18 + 80 = 197$.
3. **Gerade:** $k = \frac{197}{1000} = 0{,}197$ s pro MB und $d = 7 - 0{,}197 \cdot 30 = 1{,}09$ s.

Deutung: Jedes zusätzliche Megabyte kostet im Mittel knapp $0{,}2$ Sekunden. Der Achsenabschnitt $1{,}09$ s passt zu
einer festen Zeit für den Verbindungsaufbau, die auch bei einer sehr kleinen Datei anfällt. Hier hat $d$ also eine
sinnvolle Bedeutung.
:::

### Residuen und Grenzen von Prognosen

Die Residuen zeigen, wie gut die Gerade passt. Für die Lernzeiten sind sie $e_i = y_i - (5{,}75x_i + 23{,}5)$:

|$x_i$|2|4|6|8|10|
|---|---|---|---|---|---|
|Vorhersage $\hat y_i$|35|$46{,}5$|58|$69{,}5$|81|
|Residuum $e_i$|$0$|$-1{,}5$|$2$|$0{,}5$|$-1$|

Das Dach in $\hat y_i$ liest man „y Dach“. Es kennzeichnet die Vorhersage der Geraden. Die Summe der Residuen ist $0$.
Das ist kein Zufall: Weil die Gerade durch den Schwerpunkt geht, gleichen sich Über- und Unterschätzungen aus. Die
kleinste mögliche Quadratsumme ist $Q_{\min} = 0 + 2{,}25 + 4 + 0{,}25 + 1 = 7{,}5$. Keine andere Gerade erreicht
einen kleineren Wert.

Ein **Residuenplot** trägt die Residuen über $x$ auf. Er sollte keine Struktur zeigen. Bilden die Residuen einen Bogen,
ist der Zusammenhang nicht linear, und eine Gerade ist das falsche Modell.

:::achtung[Weit extrapoliert]
Bei den Lernzeiten lautet eine typische falsche Prognose:
$$y(20) = 5{,}75 \cdot 20 + 23{,}5 = 138{,}5 \text{ Punkte.} \qquad \text{(sinnlos)}$$
Die Klausur hat vielleicht nur $100$ Punkte. Beobachtet wurden Lernzeiten von $2$ bis $10$ Stunden. Eine Vorhersage
innerhalb dieses Bereichs heißt **Interpolation** und ist meist vertretbar. Eine Vorhersage weit außerhalb heißt
**Extrapolation** und ist gefährlich, denn niemand weiß, ob der lineare Zusammenhang dort noch gilt.
:::

:::achtung[Die falsche Richtung der Regression]
Die Regression von $y$ auf $x$ minimiert **senkrechte** Abstände. Wer die Lernzeit aus den Punkten vorhersagen will,
braucht eine andere Gerade. Eine typische falsche Rechnung ist, die Gleichung einfach umzustellen:
$$x = \frac{y - 23{,}5}{5{,}75}. \qquad \text{(nicht die beste Gerade für diese Frage)}$$
Die beste Gerade für $x$ aus $y$ minimiert waagrechte Abstände und hat im Allgemeinen eine andere Steigung. Wähle
deshalb immer als $x$ die Größe, **aus der** vorhergesagt wird.
:::

```aufgabe
id: st-rg-check-widget
titel: Welcher Punkt liegt sicher auf der Geraden?
niveau: 1
art: check
angabe: |
  Das Widget direkt nach dieser Frage zeigt die Lernzeit-Daten mit ihrer Regressionsgeraden. Sag vorher: Welcher Punkt liegt **sicher**
  auf der Regressionsgeraden, ganz gleich, wie die Daten aussehen?
teile:
  - typ: auswahl
    optionen:
      - 'der Schwerpunkt $(\bar x \mid \bar y)$'
      - 'der erste Datenpunkt'
      - 'der Ursprung $(0 \mid 0)$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Datenpunkte können neben der Geraden liegen. Ihr Abstand ist gerade das Residuum.
      - wert: 2
        meldung: Der Achsenabschnitt $d$ ist meist nicht $0$. Dann geht die Gerade nicht durch den Ursprung.
loesung: |
  Aus $d = \bar y - k\bar x$ folgt $\bar y = k\bar x + d$. Der Schwerpunkt liegt also immer auf der Geraden.
  ---
  Im Widget ist er als Ring markiert, hier bei $(6 \mid 58)$.
```

```widget
name: statistik
titel: Regressionsgerade und Korrelation
props:
  daten: [35, 45, 60, 70, 80]
  paare: [[2, 35], [4, 45], [6, 60], [8, 70], [10, 80]]
```

Beobachte im Widget: Die Gerade läuft mitten durch die Punktwolke und durch den markierten Schwerpunkt. Unter dem
Streudiagramm stehen Steigung und Achsenabschnitt. Vergleiche sie mit der Rechnung von Hand.

```aufgabe
id: st-regression
titel: Regressionsgerade berechnen
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Die Nutzerzahl einer App in Tausend in den ersten fünf Monaten:

  |Monat $x$|1|2|3|4|5|
  |---|---|---|---|---|---|
  |Nutzer $y$|12|15|15|19|22|

  Bestimme die Regressionsgerade $y = kx + d$ und prognostiziere die Nutzerzahl im Monat 7 (in Tausend).
teile:
  - typ: zahl
    label: '$k$'
    loesung: "24/10"
    anzeige: '2{,}4'
    fehler:
      - wert: "24/5"
        meldung: Du hast durch $n = 5$ geteilt. Im Nenner steht $\sum (x_i - \bar x)^2 = 10$.
      - wert: "24/61.2"
        meldung: Im Nenner steht die Quadratsumme der **x**-Abweichungen, nicht die der y-Abweichungen.
  - typ: zahl
    label: '$d$'
    loesung: "16.6 - 2.4*3"
    anzeige: '9{,}4'
    fehler:
      - wert: "16.6 + 2.4*3"
        meldung: 'Vorzeichenfehler: $d = \bar y - k\bar x$.'
  - typ: zahl
    label: 'Prognose Monat 7'
    loesung: "2.4*7 + 16.6 - 2.4*3"
    anzeige: '26{,}2'
hinweise:
  - '$\bar x = 3$ und $\bar y = 16{,}6$.'
  - '$\sum (x_i - \bar x)(y_i - \bar y) = 24$ und $\sum (x_i - \bar x)^2 = 10$.'
loesung: |
  Ansatz: Rezept mit Abweichungstabelle. $\bar x = 3$, $\bar y = \tfrac{83}{5} = 16{,}6$.
  ---
  $x_i - \bar x$: $-2, -1, 0, 1, 2$. $y_i - \bar y$: $-4{,}6;\ -1{,}6;\ -1{,}6;\ 2{,}4;\ 5{,}4$.
  Produkte $9{,}2 + 1{,}6 + 0 + 2{,}4 + 10{,}8 = 24$, Quadrate $4 + 1 + 0 + 1 + 4 = 10$.
  ---
  $k = \tfrac{24}{10} = 2{,}4$ und $d = 16{,}6 - 2{,}4 \cdot 3 = 9{,}4$. Also $y = 2{,}4x + 9{,}4$.
  ---
  Prognose: $y(7) = 2{,}4 \cdot 7 + 9{,}4 = 26{,}2$, also etwa $26\,200$ Nutzer. Das ist eine Extrapolation, also mit Vorsicht zu lesen.
```

```aufgabe
id: st-rg-residuen
titel: Residuen berechnen
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Für die App-Daten ($x$: 1 bis 5, $y$: $12, 15, 15, 19, 22$) lautet die Regressionsgerade $y = 2{,}4x + 9{,}4$.

  a) Berechne das Residuum im Monat 3.

  b) Berechne die Summe der quadrierten Residuen $Q_{\min}$.
teile:
  - typ: zahl
    label: 'a) $e_3$'
    loesung: "15 - (2.4*3 + 9.4)"
    anzeige: '-1{,}6'
    fehler:
      - wert: "(2.4*3 + 9.4) - 15"
        meldung: 'Das Residuum ist Messwert **minus** Vorhersage: $e_i = y_i - \hat y_i$.'
  - typ: zahl
    label: 'b) $Q_{\min}$'
    loesung: "(12-11.8)^2 + (15-14.2)^2 + (15-16.6)^2 + (19-19)^2 + (22-21.4)^2"
    anzeige: '3{,}6'
    fehler:
      - wert: "0"
        meldung: Das ist die Summe der Residuen ohne Quadrat. Sie ist immer $0$. Gefragt ist die Summe der **Quadrate**.
hinweise:
  - 'Vorhersagen $\hat y_i = 2{,}4x_i + 9{,}4$: $11{,}8;\ 14{,}2;\ 16{,}6;\ 19;\ 21{,}4$.'
  - 'Residuum $e_i = y_i - \hat y_i$. Für $Q_{\min}$ jedes Residuum quadrieren und addieren.'
loesung: |
  Ansatz: Vorhersagen berechnen, dann Residuen als Messwert minus Vorhersage.
  ---
  Vorhersagen: $11{,}8;\ 14{,}2;\ 16{,}6;\ 19;\ 21{,}4$. Residuen: $0{,}2;\ 0{,}8;\ -1{,}6;\ 0;\ 0{,}6$. Kontrolle: Summe $0$.
  ---
  a) $e_3 = 15 - 16{,}6 = -1{,}6$. Im Monat 3 lag die Nutzerzahl unter dem Trend.
  ---
  b) $Q_{\min} = 0{,}04 + 0{,}64 + 2{,}56 + 0 + 0{,}36 = 3{,}6$.
```

```aufgabe
id: st-rg-summen
titel: Regression aus Summen
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Ein Taschenrechner liefert für $n = 6$ Wertepaare: $\sum x_i = 21$, $\sum y_i = 60$, $\sum x_i^2 = 91$ und
  $\sum x_i y_i = 245$. Bestimme $k$ und $d$ der Regressionsgeraden.
teile:
  - typ: zahl
    label: '$k$'
    loesung: "(245/6 - 21/6*60/6)/(91/6 - (21/6)^2)"
    fehler:
      - wert: "245/91"
        meldung: Du hast die Summen direkt geteilt. Nötig sind die Verschiebungssätze, also $s_{xy} = \overline{xy} - \bar x \bar y$ und $s_x^2 = \overline{x^2} - \bar x^2$.
  - typ: zahl
    label: '$d$'
    loesung: "60/6 - 2*21/6"
    fehler:
      - wert: "60/6 + 2*21/6"
        meldung: 'Vorzeichenfehler: $d = \bar y - k\bar x$.'
hinweise:
  - '$\bar x = 3{,}5$ und $\bar y = 10$.'
  - '$s_{xy} = \tfrac{245}{6} - 3{,}5 \cdot 10$ und $s_x^2 = \tfrac{91}{6} - 3{,}5^2$.'
loesung: |
  Ansatz: Mittelwerte aus den Summen, dann Verschiebungssätze. $\bar x = \tfrac{21}{6} = 3{,}5$, $\bar y = \tfrac{60}{6} = 10$.
  ---
  $s_{xy} = \tfrac{245}{6} - 35 = \tfrac{35}{6} \approx 5{,}833$ und $s_x^2 = \tfrac{91}{6} - 12{,}25 = \tfrac{35}{12} \approx 2{,}917$.
  ---
  $k = \tfrac{35/6}{35/12} = 2$ und $d = 10 - 2 \cdot 3{,}5 = 3$. Probe: $(3{,}5 \mid 10)$ liegt auf $y = 2x + 3$.
```

```aufgabe
id: st-rg-fehler-finden
titel: Fehler in einer Regressionsrechnung
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  Ein Mitschüler rechnet mit $\bar x = 3$, $\bar y = 16{,}6$ und $k = 2{,}4$:
  $$d = 16{,}6 + 2{,}4 \cdot 3 = 23{,}8, \qquad y = 2{,}4x + 23{,}8.$$
  Woran erkennst du ohne neue Rechnung, dass das Ergebnis falsch ist?
teile:
  - typ: auswahl
    optionen:
      - 'Der Schwerpunkt $(3 \mid 16{,}6)$ liegt nicht auf der Geraden, denn $2{,}4 \cdot 3 + 23{,}8 = 31$.'
      - 'Die Steigung müsste negativ sein.'
      - 'Der Achsenabschnitt darf nie größer als $\bar y$ sein.'
      - 'Man darf bei Regressionen keine Dezimalzahlen verwenden.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Das Vorzeichen von $k$ hängt von der Kovarianz ab. Mit $k = 2{,}4$ ist hier nichts falsch.
      - wert: 2
        meldung: Ein großes $d$ ist möglich, etwa bei fallenden Geraden. Der sichere Test ist die Probe mit dem Schwerpunkt.
      - wert: 3
        meldung: Dezimalzahlen sind völlig normal. Der Fehler steckt in der Formel für $d$.
hinweise:
  - Welcher Punkt liegt immer auf der Regressionsgeraden?
  - 'Setz diesen Punkt in die Gleichung $y = 2{,}4x + 23{,}8$ ein.'
loesung: |
  Ansatz: Die Probe mit dem Schwerpunkt prüft jede Regressionsgerade.
  ---
  Eingesetzt: $2{,}4 \cdot 3 + 23{,}8 = 31 \ne 16{,}6$. Der Schwerpunkt liegt nicht auf der Geraden.
  ---
  Ursache: Vorzeichenfehler. Richtig ist $d = 16{,}6 - 7{,}2 = 9{,}4$.
```

```aufgabe
id: st-rg-extrapolation
titel: Wachstum von Kindern
niveau: 3
lernziel: 5
kompetenz: modellieren
angabe: |
  Die Körpergröße eines Kindes in cm wurde jährlich gemessen:

  |Alter $x$ in Jahren|2|3|4|5|6|
  |---|---|---|---|---|---|
  |Größe $y$ in cm|86|95|102|109|116|

  a) Bestimme die Regressionsgerade $y = kx + d$.

  b) Deute $k$ im Sachzusammenhang.

  c) Welche Größe sagt die Gerade für das Alter 40 voraus? Beurteile diese Prognose.
teile:
  - typ: zahl
    label: 'a) $k$'
    loesung: "74/10"
    anzeige: '7{,}4'
    fehler:
      - wert: "74/5"
        meldung: 'Im Nenner steht $\sum (x_i - \bar x)^2 = 10$, nicht $n = 5$.'
  - typ: zahl
    label: 'a) $d$'
    loesung: "101.6 - 7.4*4"
    fehler:
      - wert: "101.6 + 7.4*4"
        meldung: 'Vorzeichenfehler: $d = \bar y - k\bar x$.'
  - typ: zahl
    label: 'c) Prognose für 40 Jahre in cm'
    loesung: "7.4*40 + 72"
    fehler:
      - wert: "7.4*40"
        meldung: Der Achsenabschnitt $d = 72$ fehlt.
  - typ: text
    label: 'b) und c) Deutung'
    muster: |
      b) Zwischen 2 und 6 Jahren wuchs das Kind im Mittel um etwa $7{,}4$ cm pro Jahr.

      c) Die Gerade sagt $368$ cm voraus. Das ist absurd. Beobachtet wurden nur 2 bis 6 Jahre, und das Wachstum hört mit
      dem Ende der Pubertät auf. Die Prognose ist eine weite Extrapolation, der lineare Zusammenhang gilt dort nicht mehr.
hinweise:
  - '$\bar x = 4$ und $\bar y = \tfrac{508}{5} = 101{,}6$.'
  - '$\sum (x_i - \bar x)(y_i - \bar y) = 74$ und $\sum (x_i - \bar x)^2 = 10$.'
loesung: |
  Ansatz: Rezept für die Regressionsgerade. $\bar x = 4$, $\bar y = 101{,}6$.
  ---
  Abweichungen $x$: $-2, -1, 0, 1, 2$. Abweichungen $y$: $-15{,}6;\ -6{,}6;\ 0{,}4;\ 7{,}4;\ 14{,}4$. Produkte: $31{,}2 + 6{,}6 + 0 + 7{,}4 + 28{,}8 = 74$.
  ---
  a) $k = \tfrac{74}{10} = 7{,}4$ und $d = 101{,}6 - 7{,}4 \cdot 4 = 72$. b) Etwa $7{,}4$ cm pro Jahr.
  ---
  c) $y(40) = 7{,}4 \cdot 40 + 72 = 368$ cm. Antwortsatz: Diese Extrapolation ist unbrauchbar, weil das Modell nur für das beobachtete Alter gilt.
```

```aufgabe
id: st-rg-gefuehrt
titel: Regressionsgerade Schritt für Schritt
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Bestimme die Regressionsgerade für die Punkte $(1 \mid 3)$, $(2 \mid 5)$, $(3 \mid 4)$ und $(4 \mid 8)$.
  Gib die Steigung $k$ ein.
teile:
  - typ: zahl
    loesung: "7/5"
    anzeige: '1{,}4'
    fehler:
      - wert: "7/4"
        meldung: 'Im Nenner steht $\sum (x_i - \bar x)^2 = 5$, nicht $n = 4$.'
hinweise:
  - Erst die Mittelwerte, dann die Tabelle der Abweichungen.
  - '$k = \tfrac{\sum (x_i - \bar x)(y_i - \bar y)}{\sum (x_i - \bar x)^2}$.'
gefuehrt:
  - text: Berechne $\bar x$ und dann $\bar y$. Gib $\bar y$ ein.
    teil: { typ: zahl, loesung: "(3+5+4+8)/4" }
    erklaerung: '$\bar x = \tfrac{10}{4} = 2{,}5$ und $\bar y = \tfrac{20}{4} = 5$.'
  - text: 'Berechne $\sum (x_i - \bar x)(y_i - \bar y)$.'
    teil: { typ: zahl, loesung: "(1-2.5)*(3-5) + (2-2.5)*(5-5) + (3-2.5)*(4-5) + (4-2.5)*(8-5)" }
    erklaerung: '$(-1{,}5)(-2) + (-0{,}5) \cdot 0 + 0{,}5 \cdot (-1) + 1{,}5 \cdot 3 = 3 + 0 - 0{,}5 + 4{,}5 = 7$.'
  - text: 'Berechne $\sum (x_i - \bar x)^2$.'
    teil: { typ: zahl, loesung: "1.5^2 + 0.5^2 + 0.5^2 + 1.5^2" }
    erklaerung: '$2{,}25 + 0{,}25 + 0{,}25 + 2{,}25 = 5$.'
  - text: Berechne $k$.
    teil: { typ: zahl, loesung: "7/5" }
    erklaerung: '$k = \tfrac{7}{5} = 1{,}4$.'
  - text: Berechne $d$.
    teil: { typ: zahl, loesung: "5 - 1.4*2.5" }
    erklaerung: '$d = 5 - 1{,}4 \cdot 2{,}5 = 1{,}5$. Die Gerade ist $y = 1{,}4x + 1{,}5$.'
loesung: |
  Ansatz: Rezept mit Mittelwerten und Abweichungstabelle. $\bar x = 2{,}5$, $\bar y = 5$.
  ---
  $\sum (x_i - \bar x)(y_i - \bar y) = 7$ und $\sum (x_i - \bar x)^2 = 5$. Also $k = 1{,}4$.
  ---
  $d = 5 - 1{,}4 \cdot 2{,}5 = 1{,}5$. Probe: $1{,}4 \cdot 2{,}5 + 1{,}5 = 5 = \bar y$.
```

```reflexion
frage: Warum minimiert man bei der Regression die Summe der **quadrierten** Residuen und nicht einfach die Summe der Residuen?
antwort: |
  Die Summe der Residuen ist für jede Gerade durch den Schwerpunkt gleich $0$, auch für eine völlig schiefe Gerade.
  Positive und negative Abweichungen heben sich auf. Sie taugt deshalb nicht als Maß für die Güte. Quadrate sind nie
  negativ, also kann sich nichts aufheben. Außerdem werden große Abweichungen stärker bestraft. Und rechnerisch führt
  das Quadrat auf eine Parabel, deren Scheitel man mit Schulmitteln findet.
```

## Korrelation und Kausalität

```aufgabe
id: st-kz-check-steigung
titel: Was sagt das Vorzeichen der Steigung?
niveau: 1
art: check
angabe: |
  Eine Regressionsgerade hat die Steigung $k = -3{,}2$. Was folgt daraus für die Punktwolke?
  (Wiederholung: [17.8 Lineare Regression: die Methode der kleinsten Quadrate](/lernen/mathe3/statistik/lineare-regression-die-methode-der-kleinsten-quadrate))
teile:
  - typ: auswahl
    optionen:
      - 'Sie fällt tendenziell von links oben nach rechts unten.'
      - 'Alle Punkte liegen genau auf einer fallenden Geraden.'
      - 'Die Punkte haben keinen Zusammenhang.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die Steigung sagt nur die Richtung des Trends. Wie eng die Punkte an der Geraden liegen, verrät sie nicht.
      - wert: 2
        meldung: Ohne Zusammenhang wäre die Steigung nahe $0$. Ein deutlich negatives $k$ zeigt einen fallenden Trend.
loesung: |
  $k$ hat dasselbe Vorzeichen wie die Kovarianz. Negativ heißt: fallender Trend.
  ---
  Über die Enge des Zusammenhangs sagt $k$ nichts. Dafür brauchst du den Korrelationskoeffizienten aus diesem Abschnitt.
```

Die Steigung $k$ sagt, **wie stark** $y$ mit $x$ wächst. Sie sagt aber nicht, **wie gut** die Punkte auf der Geraden
liegen. Außerdem hängt $k$ von den Einheiten ab: Punkte pro Stunde sind ein anderer Zahlenwert als Punkte pro Minute.
Gesucht ist ein Maß für die Enge des linearen Zusammenhangs, das keine Einheit hat. Das ist der Korrelationskoeffizient.
Das Wort **Korrelation** heißt „Wechselbeziehung“.

:::definition[Korrelationskoeffizient nach Pearson]
$$r = \frac{s_{xy}}{s_x\, s_y} = \frac{\sum (x_i - \bar x)(y_i - \bar y)}{\sqrt{\sum (x_i - \bar x)^2 \cdot \sum (y_i - \bar y)^2}}.$$
Dabei dürfen weder alle $x$-Werte noch alle $y$-Werte gleich sein, sonst steht im Nenner $0$.
:::

Dabei ist $s_{xy}$ die Kovarianz und $s_x$, $s_y$ sind die Standardabweichungen der $x$- und der $y$-Werte. In der
zweiten Form kürzen sich die Faktoren $\frac1n$ weg. Weil die Kovarianz durch beide Standardabweichungen geteilt wird,
heben sich die Einheiten auf.

:::satz[Eigenschaften von r]
1. Es gilt immer $-1 \le r \le 1$.
2. $|r| = 1$ gilt genau dann, wenn alle Punkte exakt auf einer nicht waagrechten Geraden liegen. Dabei ist $r = 1$ bei steigender und $r = -1$ bei fallender Geraden.
3. $r$ hat dasselbe Vorzeichen wie $s_{xy}$ und wie die Steigung $k$ der Regressionsgeraden.
4. Die kleinste Residuenquadratsumme ist $Q_{\min} = n\,s_y^2\,(1 - r^2)$.
:::

:::beweis
Im Beweis der Regressionsgeraden in [17.8 Lineare Regression: die Methode der kleinsten Quadrate](/lernen/mathe3/statistik/lineare-regression-die-methode-der-kleinsten-quadrate) stand $Q(k) = n(s_y^2 - 2k s_{xy} + k^2 s_x^2)$. Wir setzen das beste
$k = s_{xy}/s_x^2$ ein:
$$Q_{\min} = n\left(s_y^2 - \frac{2 s_{xy}^2}{s_x^2} + \frac{s_{xy}^2}{s_x^2}\right) = n\left(s_y^2 - \frac{s_{xy}^2}{s_x^2}\right) = n\,s_y^2\left(1 - \frac{s_{xy}^2}{s_x^2 s_y^2}\right) = n\,s_y^2(1 - r^2).$$
Das ist Punkt 4. Weil $Q_{\min}$ eine Summe von Quadraten ist, gilt $Q_{\min} \ge 0$. Daraus folgt $1 - r^2 \ge 0$,
also Punkt 1. Gleichheit $r^2 = 1$ heißt $Q_{\min} = 0$, also sind alle Residuen null. Dann liegen alle Punkte auf der
Geraden, das ist Punkt 2. Punkt 3 gilt, weil $s_x$ und $s_y$ positiv sind.
:::

In Worten: Der Beweis zeigt, dass $r$ genau misst, wie viel Rest übrig bleibt, wenn man die Punkte durch die beste
Gerade ersetzt. Je näher $|r|$ bei $1$ liegt, desto kleiner ist dieser Rest.

### Das Bestimmtheitsmaß

Die Zahl $r^2$ heißt **Bestimmtheitsmaß**. Nach Punkt 4 ist $1 - r^2 = \frac{Q_{\min}}{n s_y^2}$ der Anteil der
Streuung der $y$-Werte, den die Gerade **nicht** erklärt. Also gibt $r^2$ den Anteil an, den die Gerade erklärt.

:::beispiel[Korrelation bei den Lernzeiten]
Aus der Regressionsrechnung kennen wir $\sum (x_i - \bar x)(y_i - \bar y) = 230$ und $\sum (x_i - \bar x)^2 = 40$. Neu brauchen wir
$\sum (y_i - \bar y)^2 = 529 + 169 + 4 + 144 + 484 = 1330$.
$$r = \frac{230}{\sqrt{40 \cdot 1330}} = \frac{230}{\sqrt{53\,200}} \approx 0{,}997, \qquad r^2 \approx 0{,}994.$$
Über $99\,\%$ der Streuung der Punkte wird durch den linearen Zusammenhang mit der Lernzeit erklärt. Echte Daten sind
selten so sauber.

Kontrolle mit Punkt 4: $n s_y^2 = 1330$ und $1330 \cdot (1 - 0{,}99436) \approx 7{,}5$. Das ist genau die
Residuenquadratsumme $Q_{\min} = 7{,}5$ der Regressionsgeraden.
:::

:::merke[r deuten (Faustregeln)]
- $|r|$ nahe $0$: kein linearer Zusammenhang.
- $|r|$ um $0{,}3$: schwacher Zusammenhang.
- $|r|$ um $0{,}5$ bis $0{,}7$: mittlerer Zusammenhang.
- $|r|$ über $0{,}8$: starker Zusammenhang.
- $|r| = 1$: exakt linear.

Diese Grenzen sind Konventionen und hängen vom Fachgebiet ab. Sieh dir immer zuerst das Streudiagramm an.
:::

:::achtung[Steigung mit Korrelation verwechselt]
Bei den Lernzeiten lautet eine typische falsche Rechnung:
$$r = \frac{\sum (x_i - \bar x)(y_i - \bar y)}{\sum (x_i - \bar x)^2} = \frac{230}{40} = 5{,}75. \qquad \text{(falsch)}$$
Das ist die Steigung $k$. Ein Korrelationskoeffizient über $1$ ist unmöglich. Im Nenner von $r$ steht die Wurzel aus
dem Produkt **beider** Quadratsummen. Richtig ist $r \approx 0{,}997$.
:::

:::achtung[r = 0 heißt nicht „kein Zusammenhang“]
Die Punkte $(-2 \mid 4)$, $(-1 \mid 1)$, $(0 \mid 0)$, $(1 \mid 1)$ und $(2 \mid 4)$ liegen exakt auf der Parabel
$y = x^2$. Eine typische falsche Folgerung:
$$s_{xy} = 0, \text{ also } r = 0, \text{ also hängen } x \text{ und } y \text{ nicht zusammen.} \qquad \text{(falsch)}$$
Der Zusammenhang ist perfekt, nur nicht **linear**. Die Produkte links und rechts heben sich wegen der Symmetrie auf.
$r$ misst nur lineare Zusammenhänge.
:::

```aufgabe
id: st-r-zuordnen
titel: Korrelation am Streudiagramm
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  Welcher Wert passt am besten zum Korrelationskoeffizienten der abgebildeten Daten?
plot:
  x: [0, 7]
  y: [10, 35]
  achsen: { x: "x", y: "y" }
  punkte:
    - { x: 1, y: 30 }
    - { x: 2, y: 28 }
    - { x: 3, y: 25 }
    - { x: 4, y: 24 }
    - { x: 5, y: 20 }
    - { x: 6, y: 17 }
teile:
  - typ: auswahl
    optionen:
      - '$r \approx 0{,}99$'
      - '$r \approx -0{,}99$'
      - '$r \approx 0$'
      - '$r \approx -0{,}3$'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Die Punkte fallen von links nach rechts. Dann ist auch $r$ negativ.
      - wert: 2
        meldung: Die Punkte liegen fast auf einer Geraden. Das ist ein sehr enger Zusammenhang, also $|r|$ nahe $1$.
      - wert: 3
        meldung: Das Vorzeichen stimmt, aber $-0{,}3$ wäre ein schwacher Zusammenhang mit stark verstreuten Punkten.
hinweise:
  - Prüfe zuerst die Richtung, dann wie eng die Punkte an einer Geraden liegen.
loesung: |
  Ansatz: Vorzeichen aus der Richtung, Betrag aus der Enge.
  ---
  Die Punkte fallen, also $r < 0$. Sie liegen fast auf einer Geraden, also $|r|$ nahe $1$.
  ---
  Nachrechnen: $s_{xy} = -7{,}5$, $s_x^2 \approx 2{,}917$, $s_y^2 \approx 19{,}667$, also $r = \tfrac{-7{,}5}{\sqrt{2{,}917 \cdot 19{,}667}} \approx -0{,}99$.
```

```aufgabe
id: st-kz-r2
titel: Bestimmtheitsmaß deuten
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Zwischen der Werbeausgabe und dem Umsatz von zwölf Filialen wurde $r = 0{,}6$ berechnet. Welcher Anteil der
  Umsatzstreuung wird durch den linearen Zusammenhang erklärt? Gib eine Dezimalzahl an.
teile:
  - typ: zahl
    loesung: "0.6^2"
    anzeige: '0{,}36'
    fehler:
      - wert: "0.6"
        meldung: Der erklärte Anteil ist $r^2$, nicht $r$. Aus $r = 0{,}6$ wird nur gut ein Drittel erklärt.
hinweise:
  - Der erklärte Anteil der Streuung ist das Bestimmtheitsmaß $r^2$.
loesung: |
  Ansatz: Bestimmtheitsmaß $r^2$.
  ---
  $r^2 = 0{,}6^2 = 0{,}36$. Antwortsatz: Nur $36\,\%$ der Umsatzstreuung werden durch die Werbeausgabe linear erklärt, $64\,\%$ bleiben unerklärt.
```

:::beispiel[Ein Ausreißer verändert r drastisch]
Nimm zu den fünf Lernzeit-Daten mit $r \approx 0{,}997$ einen sechsten Punkt $(12 \mid 20)$ hinzu. Er entstand durch
einen Tippfehler, gemeint waren 90 Punkte. Mit dem Statistikmodus des Taschenrechners erhält man für die sechs Punkte
$r \approx 0{,}09$ und eine fast waagrechte Gerade $y \approx 0{,}57x + 47{,}7$.

Ein einziger falscher Wert zerstört den fast perfekten Zusammenhang. Deshalb gilt: Vor jeder Regression das
Streudiagramm zeichnen und auffällige Punkte prüfen. Ausreißer darf man aber nur entfernen, wenn sie nachweislich
fehlerhaft sind, nicht nur, weil sie stören.
:::

### Korrelation ist nicht Kausalität

**Kausalität** heißt Ursache-Wirkungs-Beziehung. Ein starker Zusammenhang in den Daten beweist nicht, dass $x$ die
Ursache von $y$ ist. Es gibt drei typische Gründe für eine Korrelation ohne direkte Ursache.

1. **Drittvariable:** Eisverkauf und Badeunfälle korrelieren positiv. Die gemeinsame Ursache ist das warme Wetter. Eine solche versteckte Ursache heißt auf Englisch *Confounder*.
2. **Umgekehrte Richtung:** Wer häufiger zum Arzt geht, ist im Schnitt kränker. Nicht der Arztbesuch macht krank, sondern die Krankheit führt zum Arzt.
3. **Zufall:** Bei kleinen Stichproben oder wenn man sehr viele Merkmalspaare durchsucht, findet man fast sicher irgendwo hohe Korrelationen. Solche Zufallsfunde heißen **Scheinkorrelationen**.

Eine Ursache weist man am sichersten mit einem **kontrollierten Experiment** nach. Man verändert die vermutete Ursache
gezielt und teilt die Versuchspersonen zufällig in Gruppen ein. In der Softwareentwicklung heißt das **A/B-Test**: Ein
zufälliger Teil der Nutzer sieht Variante A, der Rest Variante B.

```aufgabe
id: st-korrelation
titel: Korrelationskoeffizient berechnen
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Berechne für die App-Daten ($x$: 1 bis 5, $y$: $12, 15, 15, 19, 22$) den Korrelationskoeffizienten $r$ und das
  Bestimmtheitsmaß $r^2$ (je 4 Nachkommastellen). Bekannt sind $\sum (x_i - \bar x)(y_i - \bar y) = 24$ und $\sum (x_i - \bar x)^2 = 10$.
teile:
  - typ: zahl
    label: '$r$'
    loesung: "24/sqrt(10*61.2)"
    toleranz: 0.0005
    anzeige: '0{,}9701'
    fehler:
      - wert: "24/(10*61.2)"
        meldung: Die Wurzel im Nenner fehlt. Ohne sie ist $r$ viel zu klein.
      - wert: "24^2/(10*61.2)"
        meldung: Das ist $r^2$. Für $r$ brauchst du die Wurzel im Nenner und nicht das Quadrat im Zähler.
  - typ: zahl
    label: '$r^2$'
    loesung: "24^2/(10*61.2)"
    toleranz: 0.0005
    anzeige: '0{,}9412'
hinweise:
  - '$\bar y = 16{,}6$. Berechne $\sum (y_i - \bar y)^2$ aus den Abweichungen $-4{,}6;\ -1{,}6;\ -1{,}6;\ 2{,}4;\ 5{,}4$.'
  - '$r = \dfrac{24}{\sqrt{10 \cdot \sum (y_i - \bar y)^2}}$.'
loesung: |
  Ansatz: Formel für $r$ mit den drei Summen.
  ---
  $\sum (y_i - \bar y)^2 = 21{,}16 + 2{,}56 + 2{,}56 + 5{,}76 + 29{,}16 = 61{,}2$.
  ---
  $r = \tfrac{24}{\sqrt{10 \cdot 61{,}2}} = \tfrac{24}{\sqrt{612}} \approx 0{,}9701$ und $r^2 \approx 0{,}9412$.
  ---
  Deutung: starker positiver linearer Zusammenhang. Rund $94\,\%$ der Schwankung der Nutzerzahlen erklärt der lineare Trend.
```

```aufgabe
id: st-kausalitaet
titel: Nachhilfe und Noten
niveau: 2
lernziel: 6
kompetenz: begruenden
angabe: |
  Eine Schule findet: Je mehr Nachhilfestunden jemand nimmt, desto schlechter ist im Schnitt die Mathematiknote.
  Zwischen der Zahl der Nachhilfestunden und der Note von 1 bis 5 gilt $r = 0{,}6$. Ein Elternbrief folgert:
  „Nachhilfe schadet.“ Nimm Stellung.
teile:
  - typ: text
    muster: |
      Die Korrelation zeigt nur, dass viel Nachhilfe und schlechte Noten gemeinsam auftreten. Naheliegend ist die
      **umgekehrte Richtung**: Wer schlechte Noten hat, nimmt eher Nachhilfe. Die schlechte Note ist dann Ursache der
      Nachhilfe und nicht ihre Folge. Auch Drittvariablen sind möglich, etwa wenig Zeit zum Üben. Ob Nachhilfe wirkt,
      könnte man nur mit einem Experiment prüfen: Schülerinnen mit gleichen Ausgangsnoten werden zufällig auf eine
      Gruppe mit und eine ohne Nachhilfe verteilt.
hinweise:
  - Was war zuerst da, die schlechte Note oder die Nachhilfe?
  - Wie müsste ein Versuch aussehen, der die Wirkung von Nachhilfe wirklich misst?
loesung: |
  Ansatz: Korrelation ist kein Ursachenbeweis. Mögliche andere Erklärungen suchen.
  ---
  Umgekehrte Richtung: Schlechte Noten führen zur Nachhilfe. Dann ist der Zusammenhang zu erwarten, auch wenn Nachhilfe hilft.
  ---
  Nachweis einer Wirkung nur durch ein kontrolliertes Experiment mit zufälliger Zuteilung.
```

```aufgabe
id: st-kz-umrechnen
titel: Korrelation aus der Steigung
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Für eine Messreihe gilt: Steigung der Regressionsgeraden $k = 2{,}5$, Standardabweichungen $s_x = 4$ und $s_y = 12{,}5$.
  Berechne $r$.
teile:
  - typ: zahl
    loesung: "2.5*4/12.5"
    anzeige: '0{,}8'
    fehler:
      - wert: "2.5*12.5/4"
        meldung: Die Standardabweichungen sind vertauscht. Aus $k = \tfrac{s_{xy}}{s_x^2}$ und $r = \tfrac{s_{xy}}{s_x s_y}$ folgt $r = k \cdot \tfrac{s_x}{s_y}$.
      - wert: "2.5"
        meldung: Steigung und Korrelation sind verschiedene Größen. $r$ ist nie größer als $1$.
hinweise:
  - 'Aus $k = \tfrac{s_{xy}}{s_x^2}$ folgt $s_{xy} = k \cdot s_x^2$.'
  - 'Setz das in $r = \tfrac{s_{xy}}{s_x s_y}$ ein.'
loesung: |
  Ansatz: beide Formeln über die Kovarianz verbinden. $s_{xy} = k\,s_x^2 = 2{,}5 \cdot 16 = 40$.
  ---
  $r = \tfrac{40}{4 \cdot 12{,}5} = \tfrac{40}{50} = 0{,}8$.
  ---
  Allgemein gilt $r = k \cdot \tfrac{s_x}{s_y}$. Probe: $2{,}5 \cdot \tfrac{4}{12{,}5} = 0{,}8$. Starker positiver Zusammenhang.
```

```aufgabe
id: st-r-parabel
titel: Perfekter Zusammenhang, r = 0
niveau: 3
lernziel: 6
kompetenz: begruenden
angabe: |
  Gegeben sind die Punkte $(-3 \mid 9)$, $(-1 \mid 1)$, $(0 \mid 0)$, $(1 \mid 1)$ und $(3 \mid 9)$.

  a) Berechne $\bar y$ und die Kovarianz $s_{xy}$ (Division durch $n$).

  b) Was folgt für $r$ und für die Regressionsgerade? Wie passt das zur Lage der Punkte?
teile:
  - typ: zahl
    label: 'a) $\bar y$'
    loesung: "(9+1+0+1+9)/5"
    fehler:
      - wert: "0"
        meldung: Das ist $\bar x$. Die $y$-Werte sind alle nicht negativ, ihr Mittel ist größer als $0$.
  - typ: zahl
    label: 'a) $s_{xy}$'
    loesung: "((-3)*(9-4) + (-1)*(1-4) + 0*(0-4) + 1*(1-4) + 3*(9-4))/5"
    fehler:
      - wert: "4"
        meldung: Das ist $\bar y$. Die Kovarianz ist das Mittel der Produkte $(x_i - \bar x)(y_i - \bar y)$.
  - typ: text
    label: 'b) Deutung'
    muster: |
      Wegen $s_{xy} = 0$ ist $r = 0$ und $k = 0$. Die Regressionsgerade ist waagrecht, $y = 4$. Es gibt also keinen
      **linearen** Zusammenhang. Trotzdem hängt $y$ exakt von $x$ ab, denn alle Punkte liegen auf $y = x^2$. Die Punkte
      links und rechts liefern Produkte mit entgegengesetztem Vorzeichen, die sich wegen der Symmetrie genau aufheben.
      Deshalb muss man immer auch das Streudiagramm ansehen.
hinweise:
  - '$\bar x = 0$. Berechne $\bar y$ und dann die Produkte $(x_i - \bar x)(y_i - \bar y)$.'
  - Vergleiche die Produkte für $x = -3$ und $x = 3$ sowie für $x = -1$ und $x = 1$.
loesung: |
  Ansatz: Kovarianz aus der Definition. $\bar x = 0$ und $\bar y = \tfrac{20}{5} = 4$.
  ---
  Produkte: $(-3) \cdot 5 = -15$, $(-1)(-3) = 3$, $0$, $1 \cdot (-3) = -3$, $3 \cdot 5 = 15$. Summe $0$, also $s_{xy} = 0$.
  ---
  b) $r = 0$ und $k = 0$, die Gerade ist $y = 4$. Die Punkte liegen aber exakt auf $y = x^2$: Der Zusammenhang ist perfekt, nur nicht linear.
```

```aufgabe
id: st-kz-ausreisser
titel: Ein Punkt dreht das Vorzeichen
niveau: 3
lernziel: 6
kompetenz: anwenden
angabe: |
  Gegeben sind die Punkte $(1 \mid 2)$, $(2 \mid 4)$, $(3 \mid 5)$, $(4 \mid 4)$ und $(5 \mid 6)$.

  a) Berechne $r$ (3 Nachkommastellen). Es gilt $\sum (x_i - \bar x)(y_i - \bar y) = 8$, $\sum (x_i - \bar x)^2 = 10$ und $\sum (y_i - \bar y)^2 = 8{,}8$.

  b) Ein sechster Punkt $(6 \mid -4)$ kommt dazu. Dann ist $\sum (x_i - \bar x)(y_i - \bar y) = -12{,}5$, $\sum (x_i - \bar x)^2 = 17{,}5$ und $\sum (y_i - \bar y)^2 \approx 64{,}833$. Berechne das neue $r$ (3 Nachkommastellen).

  c) Was lernst du daraus für die Praxis?
teile:
  - typ: zahl
    label: 'a) $r$'
    loesung: "8/sqrt(10*8.8)"
    toleranz: 0.001
    anzeige: '0{,}853'
    fehler:
      - wert: "8/10"
        meldung: Das ist die Steigung $k$. Für $r$ brauchst du im Nenner die Wurzel aus dem Produkt beider Quadratsummen.
  - typ: zahl
    label: 'b) neues $r$'
    loesung: "-12.5/sqrt(17.5*(64+5/6))"
    toleranz: 0.001
    anzeige: '-0{,}371'
    fehler:
      - wert: "12.5/sqrt(17.5*(64+5/6))"
        meldung: Das Vorzeichen fehlt. Die Kovarianzsumme ist jetzt negativ.
  - typ: text
    label: 'c) Folgerung'
    muster: |
      Ein einziger Punkt hat aus einem starken positiven Zusammenhang ($r \approx 0{,}85$) einen schwachen negativen
      ($r \approx -0{,}37$) gemacht. $r$ ist nicht robust. Man muss vor jeder Rechnung das Streudiagramm ansehen und
      auffällige Punkte prüfen. Entfernen darf man einen Punkt nur, wenn er nachweislich fehlerhaft ist.
hinweise:
  - '$r = \dfrac{\sum (x_i - \bar x)(y_i - \bar y)}{\sqrt{\sum (x_i - \bar x)^2 \cdot \sum (y_i - \bar y)^2}}$.'
  - Setz in a) und b) jeweils die angegebenen Summen ein und achte auf das Vorzeichen.
loesung: |
  Ansatz: Formel für $r$ mit den gegebenen Summen.
  ---
  a) $r = \tfrac{8}{\sqrt{10 \cdot 8{,}8}} = \tfrac{8}{\sqrt{88}} \approx 0{,}853$.
  ---
  b) $r = \tfrac{-12{,}5}{\sqrt{17{,}5 \cdot 64{,}833}} \approx -0{,}371$.
  ---
  c) Ein Ausreißer kann sogar das Vorzeichen von $r$ umdrehen. Streudiagramm immer zuerst ansehen.
```

```aufgabe
id: st-kz-gefuehrt
titel: Korrelationskoeffizient Schritt für Schritt
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Berechne $r$ für die Punkte $(1 \mid 2)$, $(2 \mid 4)$, $(3 \mid 5)$ und $(4 \mid 9)$ (3 Nachkommastellen).
teile:
  - typ: zahl
    loesung: "11/sqrt(5*26)"
    toleranz: 0.001
    anzeige: '0{,}965'
    fehler:
      - wert: "11/5"
        meldung: Das ist die Steigung $k$, nicht $r$.
hinweise:
  - '$\bar x = 2{,}5$ und $\bar y = 5$.'
  - Du brauchst drei Summen, die Produktsumme und die beiden Quadratsummen.
gefuehrt:
  - text: 'Berechne $\sum (x_i - \bar x)(y_i - \bar y)$.'
    teil: { typ: zahl, loesung: "(-1.5)*(-3) + (-0.5)*(-1) + 0.5*0 + 1.5*4" }
    erklaerung: 'Abweichungen $x$: $-1{,}5;\ -0{,}5;\ 0{,}5;\ 1{,}5$. Abweichungen $y$: $-3, -1, 0, 4$. Produkte $4{,}5 + 0{,}5 + 0 + 6 = 11$.'
  - text: 'Berechne $\sum (x_i - \bar x)^2$.'
    teil: { typ: zahl, loesung: "2.25 + 0.25 + 0.25 + 2.25" }
    erklaerung: 'Die Summe ist $5$.'
  - text: 'Berechne $\sum (y_i - \bar y)^2$.'
    teil: { typ: zahl, loesung: "9 + 1 + 0 + 16" }
    erklaerung: 'Die Summe ist $26$.'
  - text: Berechne $r$.
    teil: { typ: zahl, loesung: "11/sqrt(130)", toleranz: 0.001 }
    erklaerung: '$r = \tfrac{11}{\sqrt{5 \cdot 26}} = \tfrac{11}{\sqrt{130}} \approx 0{,}965$. Starker positiver Zusammenhang.'
loesung: |
  Ansatz: Formel für $r$ mit drei Summen. $\bar x = 2{,}5$, $\bar y = 5$.
  ---
  Produktsumme $11$, Quadratsummen $5$ und $26$.
  ---
  $r = \tfrac{11}{\sqrt{130}} \approx 0{,}965$. Das liegt zwischen $-1$ und $1$, die Rechnung ist also plausibel.
```

```reflexion
frage: Warum sagt ein großes |r| nichts darüber, ob x die Ursache von y ist?
antwort: |
  $r$ wird nur aus den Zahlenpaaren berechnet. Die Formel ist symmetrisch in $x$ und $y$, sie weiß also nicht einmal,
  welche Größe die Ursache sein soll. Ein gemeinsamer Trend kann durch eine dritte Größe entstehen, durch die umgekehrte
  Richtung oder durch Zufall. Eine Ursache zeigt man erst, wenn man $x$ gezielt verändert und zufällig zuteilt, also mit
  einem Experiment wie einem A/B-Test.
```

## Konfidenzintervall für einen Anteil

```aufgabe
id: st-ki-check-streubereich
titel: Streubereich einer relativen Häufigkeit
niveau: 1
art: check
angabe: |
  In einer Bevölkerung haben $40\,\%$ eine bestimmte Meinung. Es werden $600$ Personen zufällig befragt. Berechne die
  halbe Breite $1{,}96\sqrt{\tfrac{p(1-p)}{n}}$ des $95\,\%$-Streubereichs der relativen Häufigkeit (4 Nachkommastellen).
  (Wiederholung: [16.17 Normalapproximation und Streubereiche](/lernen/mathe3/wahrscheinlichkeit/normalapproximation-und-streubereiche))
teile:
  - typ: zahl
    loesung: "1.96*sqrt(0.4*0.6/600)"
    toleranz: 0.0005
    anzeige: '0{,}0392'
    fehler:
      - wert: "1.96*0.4*0.6/600"
        meldung: Die Wurzel fehlt. Rechne zuerst $\tfrac{0{,}4 \cdot 0{,}6}{600} = 0{,}0004$ und zieh dann die Wurzel.
loesung: |
  $\tfrac{p(1-p)}{n} = \tfrac{0{,}24}{600} = 0{,}0004$, die Wurzel daraus ist $0{,}02$.
  ---
  Halbe Breite $1{,}96 \cdot 0{,}02 = 0{,}0392$. Der Anteil in der Stichprobe liegt also mit etwa $95\,\%$ Wahrscheinlichkeit zwischen $36{,}1\,\%$ und $43{,}9\,\%$.
```

Hier treffen sich Statistik und Wahrscheinlichkeitsrechnung. In
[16.17 Normalapproximation und Streubereiche](/lernen/mathe3/wahrscheinlichkeit/normalapproximation-und-streubereiche)
war der wahre Anteil $p$ bekannt, und du
hast vorhergesagt, wo der Anteil in einer Stichprobe landen wird. Das war der **Streubereich**. In der Praxis ist es
umgekehrt: Du kennst nur die Stichprobe und willst etwas über das unbekannte $p$ sagen. Diese Umkehrung heißt
**Schätzen**, und ihr Ergebnis ist ein **Konfidenzintervall**. *Konfidenz* heißt „Vertrauen“.

### Die Idee: den Streubereich umdrehen

Eine Umfrage unter 1000 zufällig ausgewählten Wahlberechtigten ergibt, dass 420 eine bestimmte Partei wählen würden.
Der naheliegende Schätzwert für $p$ ist die relative Häufigkeit $h = \frac{420}{1000} = 0{,}42$. Man nennt ihn
**Punktschätzer**. Eine andere Stichprobe hätte aber einen etwas anderen Wert geliefert. Wie weit kann $h$ vom wahren
$p$ entfernt sein?

Die Anzahl $H$ der Zustimmenden ist bei großer Grundgesamtheit binomialverteilt, $H \sim B(n;\, p)$. Daraus folgt
$$E(h) = p \qquad \text{und} \qquad \sigma(h) = \frac{\sqrt{np(1-p)}}{n} = \sqrt{\frac{p(1-p)}{n}}.$$
Dabei ist $\sigma(h)$ die Standardabweichung der relativen Häufigkeit. Nach dem Streubereich aus
[16.17 Normalapproximation und Streubereiche](/lernen/mathe3/wahrscheinlichkeit/normalapproximation-und-streubereiche) liegt $h$ mit
etwa $95\,\%$ Wahrscheinlichkeit im Bereich $p \pm 1{,}96\,\sigma(h)$. Der Abstand zwischen $h$ und $p$ ist also mit
etwa $95\,\%$ Wahrscheinlichkeit höchstens $1{,}96\,\sigma(h)$.

Jetzt drehen wir die Blickrichtung um. Wenn $h$ nahe bei $p$ liegt, dann liegt auch $p$ nahe bei $h$. Das unbekannte
$p$ in der Wurzel ersetzen wir durch den Schätzwert $h$. So entsteht das Intervall im folgenden Satz.

:::satz[Näherungsweises Konfidenzintervall für einen Anteil]
Ist $h$ die relative Häufigkeit in einer Zufallsstichprobe vom Umfang $n$ und gilt die Faustregel $n\,h\,(1 - h) > 9$, dann ist
$$\left[\,h - z\sqrt{\frac{h(1-h)}{n}}\,;\ h + z\sqrt{\frac{h(1-h)}{n}}\,\right]$$
ein Konfidenzintervall für $p$. Für das Niveau $95\,\%$ ist $z = 1{,}96$, für $99\,\%$ ist $z = 2{,}576$.
:::

Dabei heißt $z\sqrt{h(1-h)/n}$ die **halbe Breite** oder **Fehlerspanne** des Intervalls. Die Zahlen $1{,}96$ und
$2{,}576$ kommen aus den σ-Regeln der Normalverteilung in
[16.16 Normalverteilung und Standardisieren](/lernen/mathe3/wahrscheinlichkeit/normalverteilung-und-standardisieren).

:::beispiel[Wahlumfrage]
$n = 1000$ und $h = 0{,}42$. Faustregel: $1000 \cdot 0{,}42 \cdot 0{,}58 = 243{,}6 > 9$.

1. **Wurzel:** $\sqrt{\frac{0{,}42 \cdot 0{,}58}{1000}} = \sqrt{0{,}0002436} \approx 0{,}01561$.
2. **Halbe Breite:** $1{,}96 \cdot 0{,}01561 \approx 0{,}0306$.
3. **Intervall:** $[0{,}42 - 0{,}0306;\ 0{,}42 + 0{,}0306] \approx [0{,}389;\ 0{,}451]$.

Die Umfrage sagt also: etwa $42\,\%$, plus oder minus $3$ Prozentpunkte. Genau so werden Umfragen in Zeitungen angegeben.
:::

:::beispiel[Ausschuss in der Produktion]
Bei einer Kontrolle von $800$ zufällig entnommenen Bauteilen sind $36$ defekt. Gesucht ist ein $95\,\%$-Konfidenzintervall
für den Ausschussanteil der ganzen Produktion.

1. **Schätzwert:** $h = \frac{36}{800} = 0{,}045$.
2. **Faustregel:** $800 \cdot 0{,}045 \cdot 0{,}955 \approx 34{,}4 > 9$.
3. **Halbe Breite:** $1{,}96 \cdot \sqrt{\frac{0{,}045 \cdot 0{,}955}{800}} \approx 1{,}96 \cdot 0{,}00733 \approx 0{,}0144$.
4. **Intervall:** $[0{,}0306;\ 0{,}0594]$, also zwischen etwa $3{,}1\,\%$ und $5{,}9\,\%$.

Verspricht der Hersteller „höchstens $3\,\%$ Ausschuss“, passt das schlecht zu diesem Ergebnis. Der ganze Bereich
plausibler Werte liegt über $3\,\%$.
:::

:::achtung[Die Wurzel vergessen]
Bei der Wahlumfrage lautet eine typische falsche Rechnung:
$$1{,}96 \cdot \frac{0{,}42 \cdot 0{,}58}{1000} \approx 0{,}00048, \quad \text{Intervall } [0{,}4195;\ 0{,}4205]. \qquad \text{(falsch)}$$
Eine Umfrage mit 1000 Personen auf fünf Hundertstel Prozentpunkte genau wäre ein Wunder. Ohne die Wurzel wird die
Fehlerspanne viel zu klein. Richtig ist $0{,}0306$.
:::

### Was bedeutet „95 Prozent“?

Diese Stelle verstehen fast alle zuerst falsch. Lies sie langsam.

Das wahre $p$ ist eine feste Zahl. Es ist nicht zufällig. Zufällig ist die **Stichprobe** und damit das **Intervall**.
Jede neue Stichprobe liefert ein anderes Intervall. Das Verfahren ist so gebaut, dass etwa $95\,\%$ aller dieser
Intervalle das wahre $p$ enthalten.

```plot
x: [0.15, 0.5]
y: [0, 11]
achsen: { x: "Anteil", y: "Stichprobe Nr." }
strecken:
  - { von: [0.3, 0], nach: [0.3, 11], gestrichelt: true, farbe: 1 }
  - { von: [0.199, 1], nach: [0.321, 1], farbe: 0 }
  - { von: [0.241, 2], nach: [0.369, 2], farbe: 0 }
  - { von: [0.284, 3], nach: [0.416, 3], farbe: 0 }
  - { von: [0.227, 4], nach: [0.353, 4], farbe: 0 }
  - { von: [0.327, 5], nach: [0.463, 5], farbe: 3 }
  - { von: [0.255, 6], nach: [0.385, 6], farbe: 0 }
  - { von: [0.213, 7], nach: [0.337, 7], farbe: 0 }
  - { von: [0.27, 8], nach: [0.4, 8], farbe: 0 }
  - { von: [0.236, 9], nach: [0.364, 9], farbe: 0 }
  - { von: [0.251, 10], nach: [0.379, 10], farbe: 0 }
punkte:
  - { x: 0.26, y: 1 }
  - { x: 0.305, y: 2 }
  - { x: 0.35, y: 3 }
  - { x: 0.29, y: 4 }
  - { x: 0.395, y: 5, label: "verfehlt p", farbe: 3 }
  - { x: 0.32, y: 6 }
  - { x: 0.275, y: 7 }
  - { x: 0.335, y: 8 }
  - { x: 0.3, y: 9 }
  - { x: 0.315, y: 10 }
beschriftung: "Zehn 95-Prozent-Konfidenzintervalle aus zehn verschiedenen Stichproben vom Umfang 200. Der wahre Anteil ist p = 0,3 (gestrichelt). Neun Intervalle enthalten p, Stichprobe 5 verfehlt es. Auf lange Sicht verfehlen etwa 5 Prozent der Intervalle das wahre p."
```

:::achtung[Falsche Deutung]
Zur Wahlumfrage lautet eine typische falsche Deutung:
„Mit $95\,\%$ Wahrscheinlichkeit liegt $p$ in $[0{,}389;\ 0{,}451]$.“ Diese Deutung ist ungenau.
Für dieses eine Intervall ist die Sache entschieden: Entweder enthält es $p$, oder nicht. Wir wissen es nur nicht.
Richtig ist: „Das Verfahren liefert in etwa $95\,\%$ aller Stichproben ein Intervall, das $p$ enthält. Aufgrund dieser
Stichprobe halten wir Werte zwischen $38{,}9\,\%$ und $45{,}1\,\%$ für plausibel.“ Außerdem setzt die Formel eine
**Zufallsstichprobe** voraus. Bei einer selbstausgewählten Online-Umfrage ist das Intervall wertlos, egal wie groß $n$ ist.
:::

```aufgabe
id: st-ki-halbe-breite
titel: Mitte und Fehlerspanne ablesen
niveau: 1
lernziel: 7
kompetenz: verstehen
angabe: |
  Eine Studie meldet das $95\,\%$-Konfidenzintervall $[0{,}31;\ 0{,}39]$ für einen Anteil.

  a) Wie groß war die relative Häufigkeit $h$ in der Stichprobe?

  b) Wie groß ist die halbe Breite?
teile:
  - typ: zahl
    label: 'a) $h$'
    loesung: "(0.31 + 0.39)/2"
    anzeige: '0{,}35'
    fehler:
      - wert: "0.39 - 0.31"
        meldung: Das ist die ganze Breite des Intervalls. $h$ liegt genau in der Mitte.
  - typ: zahl
    label: 'b) halbe Breite'
    loesung: "(0.39 - 0.31)/2"
    anzeige: '0{,}04'
    fehler:
      - wert: "0.39 - 0.31"
        meldung: Das ist die ganze Breite. Die halbe Breite reicht von der Mitte bis zu einer Grenze.
hinweise:
  - Das Intervall ist $h \pm$ halbe Breite. Die Mitte ist also $h$.
loesung: |
  Ansatz: Das Intervall ist symmetrisch um $h$.
  ---
  a) $h = \tfrac{0{,}31 + 0{,}39}{2} = 0{,}35$. b) Halbe Breite $= \tfrac{0{,}39 - 0{,}31}{2} = 0{,}04$, also $\pm 4$ Prozentpunkte.
```

```aufgabe
id: st-konfidenz
titel: Konfidenzintervall berechnen
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Von $500$ zufällig ausgewählten Nutzerinnen und Nutzern einer Software verwenden $140$ den Dunkelmodus. Bestimme ein
  $95\,\%$-Konfidenzintervall für den Anteil $p$ aller Nutzenden, die den Dunkelmodus verwenden (Grenzen auf 4 Nachkommastellen).
teile:
  - typ: zahl
    label: 'untere Grenze'
    loesung: "0.28 - 1.96*sqrt(0.28*0.72/500)"
    toleranz: 0.0005
    anzeige: '0{,}2406'
    fehler:
      - wert: "0.28 - 1.96*0.28*0.72/500"
        meldung: Die Wurzel fehlt. Ohne sie wird das Intervall viel zu schmal.
      - wert: "0.28 - sqrt(0.28*0.72/500)"
        meldung: Der Faktor $1{,}96$ fehlt. Ohne ihn hat das Intervall nur etwa $68\,\%$ Sicherheit.
  - typ: zahl
    label: 'obere Grenze'
    loesung: "0.28 + 1.96*sqrt(0.28*0.72/500)"
    toleranz: 0.0005
    anzeige: '0{,}3194'
    fehler:
      - wert: "0.28 + 1.96*0.28*0.72/500"
        meldung: Die Wurzel fehlt.
hinweise:
  - '$h = \tfrac{140}{500} = 0{,}28$. Prüfe die Faustregel $nh(1-h) > 9$.'
  - 'Halbe Breite: $1{,}96\sqrt{\tfrac{h(1-h)}{n}}$. Dann $h$ minus und plus halbe Breite.'
loesung: |
  Ansatz: Konfidenzintervall für einen Anteil. $h = 0{,}28$, Faustregel $500 \cdot 0{,}28 \cdot 0{,}72 = 100{,}8 > 9$.
  ---
  $\sqrt{\tfrac{0{,}28 \cdot 0{,}72}{500}} = \sqrt{0{,}0004032} \approx 0{,}02008$, halbe Breite $1{,}96 \cdot 0{,}02008 \approx 0{,}0394$.
  ---
  Intervall $[0{,}28 - 0{,}0394;\ 0{,}28 + 0{,}0394] \approx [0{,}2406;\ 0{,}3194]$, also zwischen etwa $24\,\%$ und $32\,\%$.
```

```aufgabe
id: st-ki-99
titel: Höheres Niveau, breiteres Intervall
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  In einer Zufallsstichprobe von $400$ Haushalten besitzen $88$ ein E-Auto. Bestimme ein $99\,\%$-Konfidenzintervall für den
  Anteil aller Haushalte mit E-Auto ($z = 2{,}576$, Grenzen auf 4 Nachkommastellen).
teile:
  - typ: zahl
    label: 'untere Grenze'
    loesung: "0.22 - 2.576*sqrt(0.22*0.78/400)"
    toleranz: 0.0005
    anzeige: '0{,}1666'
    fehler:
      - wert: "0.22 - 1.96*sqrt(0.22*0.78/400)"
        meldung: Das ist das $95\,\%$-Intervall. Für $99\,\%$ brauchst du $z = 2{,}576$.
  - typ: zahl
    label: 'obere Grenze'
    loesung: "0.22 + 2.576*sqrt(0.22*0.78/400)"
    toleranz: 0.0005
    anzeige: '0{,}2734'
    fehler:
      - wert: "0.22 + 1.96*sqrt(0.22*0.78/400)"
        meldung: Das ist das $95\,\%$-Intervall. Für $99\,\%$ brauchst du $z = 2{,}576$.
hinweise:
  - '$h = \tfrac{88}{400} = 0{,}22$.'
  - 'Halbe Breite: $2{,}576\sqrt{\tfrac{0{,}22 \cdot 0{,}78}{400}}$.'
loesung: |
  Ansatz: $h = 0{,}22$, Faustregel $400 \cdot 0{,}22 \cdot 0{,}78 = 68{,}64 > 9$.
  ---
  $\sqrt{\tfrac{0{,}22 \cdot 0{,}78}{400}} \approx 0{,}02071$, halbe Breite $2{,}576 \cdot 0{,}02071 \approx 0{,}0534$.
  ---
  Intervall $\approx [0{,}1666;\ 0{,}2734]$. Höhere Sicherheit kostet Genauigkeit: Das Intervall ist breiter als das $95\,\%$-Intervall.
```

### Wie viele muss man befragen?

Die halbe Breite $z\sqrt{h(1-h)/n}$ enthält $n$ unter der Wurzel im Nenner. Sie ist also proportional zu
$\frac{1}{\sqrt n}$. Um die Fehlerspanne zu **halbieren**, braucht man den **vierfachen** Stichprobenumfang. Das ist
dasselbe Wurzel-$n$-Gesetz wie beim Streubereich in
[16.17 Normalapproximation und Streubereiche](/lernen/mathe3/wahrscheinlichkeit/normalapproximation-und-streubereiche).

Will man eine vorgegebene halbe Breite $\varepsilon$ erreichen, verlangt man $z\sqrt{h(1-h)/n} \le \varepsilon$. Dabei
ist $\varepsilon$ (sprich „Epsilon“) die gewünschte Fehlerspanne. Wir lösen nach $n$ auf: durch $z$ teilen, quadrieren
und umstellen. Das ergibt
$$n \ge \frac{z^2\, h(1-h)}{\varepsilon^2}.$$
Kennt man $h$ vorher nicht, nimmt man den ungünstigsten Fall. Die Parabel $h(1 - h)$ hat ihren Scheitel bei $h = \frac12$,
also ist immer $h(1-h) \le \frac14$.

:::beispiel[Umfang für eine Umfrage]
Ein Institut will einen Anteil mit $95\,\%$ Sicherheit auf $\pm 3$ Prozentpunkte genau schätzen. Über den Anteil ist nichts bekannt.
$$n \ge \frac{1{,}96^2 \cdot 0{,}25}{0{,}03^2} = \frac{0{,}9604}{0{,}0009} \approx 1067{,}1.$$
Man braucht also mindestens $1068$ Befragte. Das erklärt, warum seriöse Umfragen oft etwa $1000$ Personen befragen.
:::

:::achtung[Abgerundet]
Im Beispiel lautet eine typische falsche Antwort:
$$n \ge 1067{,}1, \text{ also } n = 1067. \qquad \text{(falsch)}$$
Mit $1067$ Befragten ist die Bedingung $n \ge 1067{,}1$ nicht erfüllt. Bei einem Mindestumfang wird immer **aufgerundet**, hier auf $1068$.
:::

```aufgabe
id: st-ki-vervierfachen
titel: Doppelt so genau
niveau: 1
lernziel: 7
kompetenz: verstehen
angabe: |
  Eine Umfrage mit $n = 500$ hat eine Fehlerspanne von $\pm 4{,}4$ Prozentpunkten. Wie viele Personen braucht man ungefähr
  für $\pm 2{,}2$ Prozentpunkte bei gleichem Niveau?
teile:
  - typ: zahl
    loesung: "4*500"
    fehler:
      - wert: "2*500"
        meldung: Die Fehlerspanne ist proportional zu $\tfrac{1}{\sqrt n}$. Doppelt so viele Personen machen sie nur um den Faktor $\sqrt2 \approx 1{,}41$ kleiner.
hinweise:
  - Die halbe Breite ist proportional zu $\tfrac{1}{\sqrt n}$. Für die halbe Fehlerspanne muss $\sqrt n$ doppelt so groß werden.
loesung: |
  Ansatz: Wurzel-$n$-Gesetz. Halbe Fehlerspanne verlangt doppeltes $\sqrt n$.
  ---
  Doppeltes $\sqrt n$ heißt vierfaches $n$: $4 \cdot 500 = 2000$ Personen.
```

```aufgabe
id: st-ki-deutung
titel: Ein Konfidenzintervall richtig deuten
niveau: 2
lernziel: 7
kompetenz: begruenden
angabe: |
  Eine Zufallsstichprobe ergibt das $95\,\%$-Konfidenzintervall $[0{,}52;\ 0{,}58]$ für den Anteil der Befürworter
  eines Projekts. Beurteile die Aussagen.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: 'Würde man sehr viele solche Stichproben ziehen, enthielten etwa $95\,\%$ der Intervalle den wahren Anteil.'
        richtig: true
        erklaerung: 'Genau das bedeutet das Niveau $95\,\%$. Es ist eine Eigenschaft des Verfahrens.'
      - text: '$95\,\%$ der Befragten sind Befürworter.'
        richtig: false
        erklaerung: 'In der Stichprobe waren es $55\,\%$, die Mitte des Intervalls. Die $95\,\%$ beziehen sich auf die Sicherheit des Verfahrens.'
      - text: 'Mit einem $99\,\%$-Intervall aus derselben Stichprobe wäre das Intervall breiter.'
        richtig: true
        erklaerung: 'Mehr Sicherheit verlangt ein größeres $z$, nämlich $2{,}576$ statt $1{,}96$.'
      - text: 'Eine Mehrheit für das Projekt ist mit dieser Stichprobe gut belegt.'
        richtig: true
        erklaerung: 'Das ganze Intervall liegt über $0{,}5$. Alle plausiblen Werte für $p$ bedeuten eine Mehrheit.'
    fehler:
      - wert: [r, r, r, r]
        meldung: 'Die $95\,\%$ beschreiben nicht den Anteil der Befürworter. Der geschätzte Anteil ist die Mitte des Intervalls.'
hinweise:
  - Das Niveau ist eine Eigenschaft des Verfahrens, nicht der Befragten.
  - Für die Mehrheit prüfe, ob das ganze Intervall über $0{,}5$ liegt.
loesung: |
  Ansatz: Das Niveau sagt, wie oft das Verfahren den wahren Anteil trifft.
  ---
  Aussage 1 ist die Definition. Aussage 2 verwechselt Niveau und Anteil. Aussage 3 folgt aus $z = 2{,}576 > 1{,}96$.
  ---
  Aussage 4: Die untere Grenze $0{,}52$ liegt über $0{,}5$. Eine Mehrheit ist gut belegt.
```

```aufgabe
id: st-ki-vorwissen-h
titel: Umfang bei bekanntem Anteil
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Eine Bank weiß aus früheren Jahren, dass etwa $10\,\%$ der Kundschaft ein bestimmtes Produkt nutzen. Sie will den aktuellen
  Anteil mit $95\,\%$ Sicherheit auf $\pm 2$ Prozentpunkte genau schätzen. Wie viele Kundinnen und Kunden muss sie
  mindestens zufällig auswählen?
teile:
  - typ: zahl
    loesung: "ceil(1.96^2*0.1*0.9/0.02^2)"
    toleranz: 0.1
    fehler:
      - wert: "ceil(1.96^2*0.25/0.02^2)"
        meldung: Das ist der ungünstigste Fall mit $h(1-h) = 0{,}25$. Hier ist $h \approx 0{,}1$ bekannt, das spart viele Befragungen.
      - wert: "floor(1.96^2*0.1*0.9/0.02^2)"
        meldung: Ein Mindestumfang wird immer aufgerundet.
hinweise:
  - '$n \ge \dfrac{z^2\, h(1-h)}{\varepsilon^2}$ mit $h = 0{,}1$ und $\varepsilon = 0{,}02$.'
  - Am Ende aufrunden.
loesung: |
  Ansatz: Mindestumfang mit Vorwissen $h \approx 0{,}1$, also $h(1-h) = 0{,}09$.
  ---
  $n \ge \tfrac{1{,}96^2 \cdot 0{,}09}{0{,}02^2} = \tfrac{0{,}345744}{0{,}0004} \approx 864{,}4$.
  ---
  Aufrunden: mindestens $865$ Personen. Ohne Vorwissen wären es $2401$.
```

```aufgabe
id: st-stichprobenumfang
titel: Wie viele Befragte?
niveau: 3
lernziel: 7
kompetenz: begruenden
angabe: |
  Ein Meinungsforschungsinstitut will einen Anteil mit einem $95\,\%$-Konfidenzintervall der halben Breite höchstens
  $\varepsilon = 0{,}025$ schätzen. Über den Anteil ist vorab nichts bekannt.

  a) Wie viele Personen müssen mindestens befragt werden?

  b) Wie viele wären es für $\varepsilon = 0{,}0125$? Begründe das Ergebnis, ohne die Formel neu anzuwenden.
teile:
  - typ: zahl
    label: 'a) Mindestumfang $n$'
    loesung: "ceil(1.96^2*0.25/0.025^2)"
    toleranz: 0.1
    fehler:
      - wert: "floor(1.96^2*0.25/0.025^2)"
        meldung: Ein Mindestumfang wird immer aufgerundet.
      - wert: "ceil(1.96*0.25/0.025)"
        meldung: 'Beim Umformen von $1{,}96\sqrt{0{,}25/n} \le 0{,}025$ wird quadriert. Es heißt $\tfrac{1{,}96^2 \cdot 0{,}25}{0{,}025^2}$.'
  - typ: text
    label: 'b) Begründung'
    muster: |
      Die halbe Breite ist proportional zu $\tfrac{1}{\sqrt n}$. Halbiert man $\varepsilon$, muss $\sqrt n$ doppelt so groß
      werden, also $n$ viermal so groß. Aus $n \ge 1536{,}64$ wird $n \ge 6146{,}56$, also mindestens $6147$ Personen.
hinweise:
  - 'Ungünstigster Fall: $h(1-h) = \tfrac14$.'
  - '$n \ge \dfrac{z^2 \cdot h(1-h)}{\varepsilon^2}$, am Ende aufrunden.'
loesung: |
  Ansatz: Bedingung $1{,}96\sqrt{\tfrac{h(1-h)}{n}} \le 0{,}025$ mit dem ungünstigsten $h(1-h) = 0{,}25$.
  ---
  a) $n \ge \tfrac{1{,}96^2 \cdot 0{,}25}{0{,}025^2} = \tfrac{0{,}9604}{0{,}000625} = 1536{,}64$, also mindestens $1537$ Personen.
  ---
  b) Halbe Fehlerspanne verlangt vierfaches $n$: $4 \cdot 1536{,}64 = 6146{,}56$, also $6147$ Personen.
```

```aufgabe
id: st-ki-gefuehrt
titel: Konfidenzintervall Schritt für Schritt
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  In einer Zufallsstichprobe von $625$ Studierenden fahren $250$ mit dem Rad zur Uni. Bestimme die untere Grenze des
  $95\,\%$-Konfidenzintervalls für den Anteil aller Studierenden (4 Nachkommastellen).
teile:
  - typ: zahl
    loesung: "0.4 - 1.96*sqrt(0.4*0.6/625)"
    toleranz: 0.0005
    anzeige: '0{,}3616'
    fehler:
      - wert: "0.4 - sqrt(0.4*0.6/625)"
        meldung: Der Faktor $1{,}96$ fehlt.
hinweise:
  - '$h = \tfrac{250}{625}$.'
  - 'Untere Grenze $h - 1{,}96\sqrt{\tfrac{h(1-h)}{n}}$.'
gefuehrt:
  - text: Berechne $h$.
    teil: { typ: zahl, loesung: "250/625" }
    erklaerung: '$h = \tfrac{250}{625} = 0{,}4$.'
  - text: Prüfe die Faustregel. Berechne $nh(1-h)$.
    teil: { typ: zahl, loesung: "625*0.4*0.6" }
    erklaerung: '$625 \cdot 0{,}4 \cdot 0{,}6 = 150 > 9$. Die Näherung ist erlaubt.'
  - text: 'Berechne $\sqrt{\tfrac{h(1-h)}{n}}$ (4 Nachkommastellen).'
    teil: { typ: zahl, loesung: "sqrt(0.24/625)", toleranz: 0.0001 }
    erklaerung: '$\sqrt{\tfrac{0{,}24}{625}} = \sqrt{0{,}000384} \approx 0{,}0196$.'
  - text: Berechne die untere Grenze.
    teil: { typ: zahl, loesung: "0.4 - 1.96*sqrt(0.24/625)", toleranz: 0.0005 }
    erklaerung: '$0{,}4 - 1{,}96 \cdot 0{,}0196 \approx 0{,}4 - 0{,}0384 = 0{,}3616$. Die obere Grenze ist $0{,}4384$.'
loesung: |
  Ansatz: $h = 0{,}4$, Faustregel $150 > 9$ erfüllt.
  ---
  Halbe Breite $1{,}96 \cdot \sqrt{0{,}000384} \approx 0{,}0384$.
  ---
  Intervall $\approx [0{,}3616;\ 0{,}4384]$. Antwortsatz: Zwischen etwa $36\,\%$ und $44\,\%$ der Studierenden fahren mit dem Rad.
```

```reflexion
frage: Was ist der Unterschied zwischen dem Streubereich aus Kapitel 16 und dem Konfidenzintervall?
antwort: |
  Beim Streubereich ist $p$ bekannt, und man sagt voraus, wo die relative Häufigkeit $h$ einer künftigen Stichprobe mit
  $95\,\%$ Wahrscheinlichkeit landet: $p \pm 1{,}96\sqrt{p(1-p)/n}$. Beim Konfidenzintervall ist $h$ beobachtet und $p$
  unbekannt. Man dreht die Aussage um und erhält $h \pm 1{,}96\sqrt{h(1-h)/n}$. Der Streubereich ist eine Prognose für die
  Stichprobe, das Konfidenzintervall eine Schätzung für die Grundgesamtheit. (Den Streubereich findest du in
  [16.17 Normalapproximation und Streubereiche](/lernen/mathe3/wahrscheinlichkeit/normalapproximation-und-streubereiche).)
```

## Hypothesentest für einen Anteil (Vertiefung)

```aufgabe
id: st-ht-check-binomial
titel: Höchstens einmal
niveau: 1
art: check
angabe: |
  $X \sim B(10;\, 0{,}2)$. Berechne $P(X \le 1)$ (4 Nachkommastellen).
  (Wiederholung: [16.13 Binomialverteilung anwenden: genau, höchstens, mindestens](/lernen/mathe3/wahrscheinlichkeit/binomialverteilung-anwenden-genau-hoechstens-mindestens))
teile:
  - typ: zahl
    loesung: "binomcdf(10, 0.2, 1)"
    toleranz: 0.0005
    anzeige: '0{,}3758'
    fehler:
      - wert: "binompdf(10, 0.2, 1)"
        meldung: Das ist nur $P(X = 1)$. „Höchstens 1“ heißt $0$ oder $1$ Treffer.
loesung: |
  $P(X \le 1) = P(X = 0) + P(X = 1) = 0{,}8^{10} + 10 \cdot 0{,}2 \cdot 0{,}8^9$.
  ---
  $\approx 0{,}1074 + 0{,}2684 = 0{,}3758$.
```

Dieser Abschnitt geht über den Kern der Studienberechtigungsprüfung hinaus. Er ist Stoff der 8. Klasse AHS und kommt in
jeder Statistik-Lehrveranstaltung an der Uni vor. Die Grundidee kennst du schon aus der Aufgabe „Ist die Münze fair?“ in
[16.17 Normalapproximation und Streubereiche](/lernen/mathe3/wahrscheinlichkeit/normalapproximation-und-streubereiche).
Hier machst du daraus ein festes Verfahren.

### Worum geht es?

Ein **Hypothesentest** beantwortet die Frage: Passt eine Beobachtung zu einer Behauptung, oder ist sie so ungewöhnlich,
dass man die Behauptung verwerfen sollte?

**Ein Bild dafür ist ein Gerichtsverfahren.** Die Angeklagte gilt als unschuldig, bis die Beweise **deutlich** dagegen
sprechen. Die Unschuld entspricht der **Nullhypothese**. Ein Freispruch beweist aber nicht die Unschuld. Er heißt nur:
Die Beweise reichen nicht. Genauso beweist ein Test nie, dass die Nullhypothese stimmt.

:::definition[Bausteine eines Tests]
- Die **Nullhypothese** $H_0$ ist die Behauptung, die geprüft wird, zum Beispiel $p = 0{,}05$.
- Die **Alternativhypothese** $H_1$ ist das, wofür man Belege sucht, zum Beispiel $p > 0{,}05$.
- Das **Signifikanzniveau** $\alpha$ (sprich „Alpha“) ist die höchste Wahrscheinlichkeit, mit der man $H_0$ zu Unrecht verwirft. Üblich ist $\alpha = 5\,\%$.
- Der **Ablehnungsbereich** enthält die Werte der Trefferzahl $X$, bei denen man $H_0$ verwirft. Er wird so gewählt, dass er unter $H_0$ höchstens die Wahrscheinlichkeit $\alpha$ hat.
:::

Ein Test heißt **rechtsseitig**, wenn große Werte gegen $H_0$ sprechen, und **linksseitig**, wenn kleine Werte dagegen
sprechen. Sprechen beide Richtungen dagegen, heißt er **zweiseitig**.

:::beispiel[Ist der Ausschuss zu hoch?]
Ein Lieferant behauptet, höchstens $5\,\%$ seiner Bauteile seien defekt. Ein Kunde prüft $50$ zufällig gewählte Teile.
$X$ ist die Zahl der defekten Teile. Getestet wird mit $\alpha = 5\,\%$.

1. **Hypothesen:** $H_0\colon p = 0{,}05$ (die Behauptung) gegen $H_1\colon p > 0{,}05$ (der Verdacht). Viele defekte Teile sprechen gegen $H_0$, also ist der Test rechtsseitig.
2. **Modell unter $H_0$:** $X \sim B(50;\, 0{,}05)$, der Erwartungswert ist $2{,}5$.
3. **Ablehnungsbereich:** Gesucht ist das kleinste $k$ mit $P(X \ge k) \le 0{,}05$. Mit dem Taschenrechner: $P(X \ge 5) = 1 - P(X \le 4) \approx 0{,}104$, das ist zu groß. $P(X \ge 6) = 1 - P(X \le 5) \approx 0{,}038 \le 0{,}05$.
4. **Entscheidungsregel:** Sind mindestens $6$ Teile defekt, verwirft der Kunde die Behauptung. Bei höchstens $5$ defekten Teilen bleibt er bei $H_0$.

In Worten: Bei einem ehrlichen Lieferanten wären $6$ oder mehr defekte Teile so selten, nämlich unter $5\,\%$, dass man
dann lieber an der Behauptung zweifelt.
:::

:::achtung[Mit P(X = k) statt P(X ≥ k) gesucht]
Im Beispiel lautet eine typische falsche Rechnung:
$$P(X = 5) \approx 0{,}066 \text{ und } P(X = 6) \approx 0{,}026, \text{ also schon ab } 5 \text{ ablehnen?} \qquad \text{(falsch gedacht)}$$
Auf einzelne Wahrscheinlichkeiten kommt es nicht an. Wer ab $k$ ablehnt, lehnt auch bei allen größeren Werten ab.
Die Irrtumswahrscheinlichkeit ist deshalb $P(X \ge k)$, die Summe über den ganzen Ablehnungsbereich. Erst bei $k = 6$
ist sie mit $0{,}038$ höchstens $5\,\%$.
:::

### Die beiden Fehlerarten

Ein Test kann auf zwei Arten danebenliegen.

- **Fehler 1. Art:** $H_0$ stimmt, wird aber verworfen. Im Bild: Eine Unschuldige wird verurteilt. Seine Wahrscheinlichkeit ist höchstens $\alpha$.
- **Fehler 2. Art:** $H_0$ ist falsch, wird aber beibehalten. Im Bild: Ein Schuldiger wird freigesprochen. Seine Wahrscheinlichkeit heißt $\beta$ (sprich „Beta“) und hängt vom wahren $p$ ab.

:::beispiel[Fehler 2. Art beim Ausschuss]
Angenommen, in Wahrheit sind $15\,\%$ der Teile defekt. Der Test aus dem ersten Beispiel behält $H_0$ bei, wenn
höchstens $5$ Teile defekt sind. Also ist
$$\beta = P(X \le 5) \quad \text{mit} \quad X \sim B(50;\, 0{,}15), \qquad \beta \approx 0{,}219.$$
In etwa jedem fünften Fall merkt der Kunde also nicht, dass der Ausschuss dreimal so hoch ist wie behauptet. Bei einem
wahren Ausschuss von $10\,\%$ wäre $\beta \approx 0{,}616$. Kleine Abweichungen bleiben oft unentdeckt.
:::

Bei festem Stichprobenumfang kann man nicht beide Fehler gleichzeitig beliebig klein machen. Ein kleineres $\alpha$
macht den Ablehnungsbereich kleiner und damit $\beta$ größer. Beide zugleich senkt man mit einem größeren
Stichprobenumfang $n$.

:::achtung[„Nicht verworfen“ heißt nicht „bewiesen“]
Bei $4$ defekten Teilen von $50$ lautet eine typische falsche Folgerung:
„Der Test hat bewiesen, dass höchstens $5\,\%$ defekt sind.“ Diese Folgerung ist falsch.
$4$ defekte Teile passen zu $5\,\%$, aber auch zu $10\,\%$ Ausschuss. Wie das letzte Beispiel zeigt, übersieht der Test
einen Ausschuss von $10\,\%$ in über $60\,\%$ der Fälle. Richtig ist: „Die Daten reichen nicht aus, um die Behauptung zu verwerfen.“
:::

```aufgabe
id: st-ht-hypothesen
titel: Hypothesen aufstellen
niveau: 1
lernziel: 8
kompetenz: modellieren
angabe: |
  Ein Onlineshop hatte bisher eine Rücksendequote von $30\,\%$. Nach einer besseren Größenberatung hofft er auf weniger
  Rücksendungen und will das mit einem Test belegen. Welche Hypothesen passen?
teile:
  - typ: auswahl
    optionen:
      - '$H_0\colon p = 0{,}3$ gegen $H_1\colon p < 0{,}3$'
      - '$H_0\colon p < 0{,}3$ gegen $H_1\colon p = 0{,}3$'
      - '$H_0\colon p = 0{,}3$ gegen $H_1\colon p > 0{,}3$'
      - '$H_0\colon p \ne 0{,}3$ gegen $H_1\colon p = 0{,}3$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Belegen will man die Verbesserung. Das, wofür man Belege sucht, gehört in $H_1$. Der alte Zustand ist $H_0$.
      - wert: 2
        meldung: Der Shop hofft auf **weniger** Rücksendungen. Die Alternative zeigt also nach unten.
      - wert: 3
        meldung: Die Nullhypothese ist eine konkrete Behauptung mit Gleichheitszeichen, damit man unter ihr rechnen kann.
hinweise:
  - In $H_0$ steht der bisherige Zustand, in $H_1$ das, was man nachweisen möchte.
loesung: |
  Ansatz: $H_0$ ist der alte Zustand, $H_1$ die erhoffte Änderung.
  ---
  $H_0\colon p = 0{,}3$ gegen $H_1\colon p < 0{,}3$. Der Test ist linksseitig, denn wenige Rücksendungen sprechen gegen $H_0$.
```

```aufgabe
id: st-ht-fehlerart
titel: Welche Fehlerart?
niveau: 1
lernziel: 8
kompetenz: verstehen
angabe: |
  Ein Test prüft $H_0$: „Das neue Medikament wirkt nicht besser als das alte.“ Das Medikament wirkt in Wahrheit nicht
  besser, aber der Test verwirft $H_0$. Welcher Fehler liegt vor?
teile:
  - typ: auswahl
    optionen: ['Fehler 1. Art', 'Fehler 2. Art', 'kein Fehler']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Ein Fehler 2. Art wäre, eine falsche Nullhypothese beizubehalten. Hier stimmt $H_0$ und wird verworfen.
      - wert: 2
        meldung: '$H_0$ ist wahr, wurde aber verworfen. Das ist eine Fehlentscheidung.'
hinweise:
  - 'Frag zuerst: Stimmt $H_0$ in Wahrheit? Dann: Was hat der Test entschieden?'
loesung: |
  Ansatz: Wahrheit und Entscheidung vergleichen.
  ---
  $H_0$ stimmt, wurde aber verworfen. Das ist ein Fehler 1. Art. Seine Wahrscheinlichkeit ist höchstens $\alpha$.
```

```aufgabe
id: st-ht-ablehnungsbereich
titel: Kann sie Weine erkennen?
niveau: 2
lernziel: 8
kompetenz: rechnen
angabe: |
  Eine Bewerberin behauptet, vier Weinsorten am Geschmack unterscheiden zu können. Sie bekommt $20$ Proben und nennt jedes
  Mal eine Sorte. Wer nur rät, trifft mit $p = 0{,}25$. Getestet wird $H_0\colon p = 0{,}25$ gegen $H_1\colon p > 0{,}25$
  mit $\alpha = 5\,\%$. Ab wie vielen Treffern wird $H_0$ verworfen?
teile:
  - typ: zahl
    loesung: "9"
    fehler:
      - wert: "8"
        meldung: 'Prüfe $P(X \ge 8) = 1 - P(X \le 7) \approx 0{,}10$. Das ist mehr als $5\,\%$.'
      - wert: "5"
        meldung: '$5$ Treffer ist der Erwartungswert beim Raten. Das ist ganz normal und kein Beleg für Können.'
hinweise:
  - 'Gesucht ist das kleinste $k$ mit $P(X \ge k) \le 0{,}05$ für $X \sim B(20;\, 0{,}25)$.'
  - '$P(X \ge k) = 1 - P(X \le k - 1)$. Probiere $k = 8$ und $k = 9$.'
loesung: |
  Ansatz: Rechtsseitiger Test. Unter $H_0$ gilt $X \sim B(20;\, 0{,}25)$ mit Erwartungswert $5$.
  ---
  $P(X \ge 8) = 1 - P(X \le 7) \approx 0{,}102 > 0{,}05$. $P(X \ge 9) = 1 - P(X \le 8) \approx 0{,}041 \le 0{,}05$.
  ---
  Ablehnungsbereich: $9$ bis $20$ Treffer. Antwortsatz: Ab $9$ Treffern glaubt man ihr, dass sie nicht nur rät.
```

```aufgabe
id: st-ht-p-wert
titel: Acht Treffer
niveau: 2
lernziel: 8
kompetenz: anwenden
angabe: |
  Im Weintest mit $20$ Proben und Ratewahrscheinlichkeit $0{,}25$ erzielt die Bewerberin $8$ Treffer.

  a) Berechne die Wahrscheinlichkeit, beim reinen Raten **mindestens** $8$ Treffer zu erzielen (4 Nachkommastellen).

  b) Wird $H_0$ bei $\alpha = 5\,\%$ verworfen?
teile:
  - typ: zahl
    label: 'a) $P(X \ge 8)$'
    loesung: "1 - binomcdf(20, 0.25, 7)"
    toleranz: 0.0005
    anzeige: '0{,}1018'
    fehler:
      - wert: "1 - binomcdf(20, 0.25, 8)"
        meldung: Das ist $P(X \ge 9)$. „Mindestens 8“ schließt die $8$ ein, das Gegenteil ist $X \le 7$.
      - wert: "binompdf(20, 0.25, 8)"
        meldung: Das ist nur $P(X = 8)$. Man fragt, wie wahrscheinlich ein **so großes oder noch größeres** Ergebnis ist.
  - typ: auswahl
    label: 'b) Entscheidung'
    optionen: ['$H_0$ wird verworfen.', '$H_0$ wird nicht verworfen.']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: '$0{,}1018$ ist größer als $0{,}05$. Acht Treffer sind beim Raten noch nicht selten genug.'
hinweise:
  - '$P(X \ge 8) = 1 - P(X \le 7)$ mit $X \sim B(20;\, 0{,}25)$.'
  - Ist die Wahrscheinlichkeit aus a) kleiner oder gleich $\alpha$, wird $H_0$ verworfen.
loesung: |
  Ansatz: Die Wahrscheinlichkeit für ein mindestens so extremes Ergebnis unter $H_0$ heißt **p-Wert**.
  ---
  a) $P(X \ge 8) = 1 - P(X \le 7) \approx 0{,}1018$.
  ---
  b) $0{,}1018 > 0{,}05$, also wird $H_0$ nicht verworfen. Das passt zum Ablehnungsbereich ab $9$ Treffern. Bewiesen ist damit nicht, dass sie rät.
```

:::beispiel[Weniger Rücksendungen? Mit der Normalverteilung]
Der Onlineshop aus der Aufgabe „Hypothesen aufstellen“ prüft $200$ zufällige Bestellungen. $46$ davon werden
zurückgeschickt. Getestet wird $H_0\colon p = 0{,}3$ gegen $H_1\colon p < 0{,}3$ mit $\alpha = 5\,\%$.

1. **Kennzahlen unter $H_0$:** $\mu = 200 \cdot 0{,}3 = 60$ und $\sigma = \sqrt{200 \cdot 0{,}3 \cdot 0{,}7} = \sqrt{42} \approx 6{,}48$. Die Faustregel $42 > 9$ ist erfüllt.
2. **Grenze:** Links von $z = -1{,}645$ liegen bei der Standardnormalverteilung genau $5\,\%$ der Fläche, denn $\Phi(-1{,}645) \approx 0{,}05$. Dabei ist $\Phi$ die Verteilungsfunktion der Standardnormalverteilung aus [16.16 Normalverteilung und Standardisieren](/lernen/mathe3/wahrscheinlichkeit/normalverteilung-und-standardisieren). Also liegt die Grenze bei $60 - 1{,}645 \cdot 6{,}48 \approx 49{,}3$.
3. **Ablehnungsbereich mit Stetigkeitskorrektur:** $k + 0{,}5 \le 49{,}3$, also $k \le 48$. Exakt gerechnet ist $P(X \le 48) \approx 0{,}036$ und $P(X \le 49) \approx 0{,}051$. Beides bestätigt den Bereich $0$ bis $48$.
4. **Entscheidung:** $46$ liegt im Ablehnungsbereich. $H_0$ wird verworfen, die Rücksendequote ist signifikant gesunken.

Der p-Wert ist $P(X \le 46) \approx \Phi\big(\frac{46{,}5 - 60}{6{,}48}\big) \approx 0{,}019$. Exakt binomial ergibt sich $0{,}017$.
:::

:::merke[Hypothesentest in fünf Schritten]
1. **Hypothesen:** $H_0$ mit Gleichheitszeichen, $H_1$ mit der vermuteten Richtung. Daraus folgt links-, rechts- oder zweiseitig.
2. **Modell unter $H_0$:** $X \sim B(n;\, p_0)$, für großes $n$ mit Normalnäherung.
3. **Ablehnungsbereich:** Er liegt auf der Seite von $H_1$ und hat unter $H_0$ höchstens die Wahrscheinlichkeit $\alpha$.
4. **Entscheidung:** Liegt der beobachtete Wert im Ablehnungsbereich, wird $H_0$ verworfen.
5. **Antwortsatz** im Kontext, ohne „bewiesen“.
:::

```aufgabe
id: st-ht-normal
titel: Zweiseitiger Test mit großem n
niveau: 2
lernziel: 8
kompetenz: rechnen
angabe: |
  Laut Hersteller nutzen $40\,\%$ der Kundschaft eine App-Funktion. Eine Zufallsstichprobe von $500$ Personen soll das
  prüfen. Getestet wird zweiseitig $H_0\colon p = 0{,}4$ gegen $H_1\colon p \ne 0{,}4$ mit $\alpha = 5\,\%$.

  a) Berechne die Grenzen $\mu \pm 1{,}96\,\sigma$ unter $H_0$ (1 Nachkommastelle).

  b) In der Stichprobe nutzen $225$ Personen die Funktion. Wird $H_0$ verworfen?
teile:
  - typ: zahl
    label: 'a) untere Grenze'
    loesung: "200 - 1.96*sqrt(500*0.4*0.6)"
    toleranz: 0.1
    anzeige: '178{,}5'
    fehler:
      - wert: "200 - 1.96*500*0.4*0.6"
        meldung: Du hast mit der Varianz $120$ statt mit $\sigma = \sqrt{120}$ gerechnet.
      - wert: "200 - 1.645*sqrt(500*0.4*0.6)"
        meldung: '$1{,}645$ gehört zu einem einseitigen Test. Zweiseitig teilen sich die $5\,\%$ auf beide Seiten auf, deshalb $1{,}96$.'
  - typ: zahl
    label: 'a) obere Grenze'
    loesung: "200 + 1.96*sqrt(500*0.4*0.6)"
    toleranz: 0.1
    anzeige: '221{,}5'
  - typ: auswahl
    label: 'b) Entscheidung'
    optionen: ['$H_0$ wird verworfen.', '$H_0$ wird nicht verworfen.']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$225$ liegt über der oberen Grenze $221{,}5$, also außerhalb des Bereichs, in dem die Trefferzahl unter $H_0$ mit $95\,\%$ landet.'
hinweise:
  - '$\mu = 500 \cdot 0{,}4$ und $\sigma = \sqrt{500 \cdot 0{,}4 \cdot 0{,}6}$.'
  - Liegt der beobachtete Wert außerhalb von $\mu \pm 1{,}96\sigma$, wird $H_0$ verworfen.
loesung: |
  Ansatz: Normalnäherung unter $H_0$. $\mu = 200$, $\sigma = \sqrt{120} \approx 10{,}95$, Faustregel $120 > 9$.
  ---
  a) $200 \pm 1{,}96 \cdot 10{,}95 \approx [178{,}5;\ 221{,}5]$. Mit ganzen Zahlen bleibt $H_0$ bei $179$ bis $221$ Nutzenden bestehen.
  ---
  b) $225 > 221{,}5$, also wird $H_0$ verworfen. Antwortsatz: Der Anteil weicht signifikant von $40\,\%$ ab, vermutlich nach oben.
```

```aufgabe
id: st-ht-beta
titel: Wie oft wird echtes Können übersehen?
niveau: 3
lernziel: 8
kompetenz: anwenden
angabe: |
  Im Weintest wird $H_0\colon p = 0{,}25$ verworfen, wenn die Bewerberin mindestens $9$ von $20$ Proben richtig benennt.
  Angenommen, sie erkennt in Wahrheit jede Probe mit Wahrscheinlichkeit $0{,}5$.

  a) Wie groß ist die Wahrscheinlichkeit $\beta$, dass der Test ihr Können trotzdem nicht erkennt? (4 Nachkommastellen)

  b) Welche Fehlerart ist das, und wie könnte man $\beta$ verkleinern, ohne $\alpha$ zu vergrößern?
teile:
  - typ: zahl
    label: 'a) $\beta$'
    loesung: "binomcdf(20, 0.5, 8)"
    toleranz: 0.0005
    anzeige: '0{,}2517'
    fehler:
      - wert: "binomcdf(20, 0.25, 8)"
        meldung: Du hast mit $p = 0{,}25$ gerechnet. Der Fehler 2. Art wird mit dem **wahren** $p = 0{,}5$ berechnet.
      - wert: "1 - binomcdf(20, 0.5, 8)"
        meldung: Das ist die Wahrscheinlichkeit, dass der Test ihr Können **erkennt**. $\beta$ ist das Gegenteil.
  - typ: text
    label: 'b) Fehlerart und Abhilfe'
    muster: |
      Das ist ein Fehler 2. Art: $H_0$ („sie rät nur“) ist falsch, wird aber beibehalten. Bei gleichem $\alpha$ hilft nur
      ein größerer Stichprobenumfang, also mehr Proben. Dann rücken die Verteilungen unter $p = 0{,}25$ und $p = 0{,}5$
      im Verhältnis zu ihrer Streuung weiter auseinander, und die Fehler werden seltener.
hinweise:
  - 'Der Test behält $H_0$ bei, wenn höchstens $8$ Treffer kommen.'
  - '$\beta = P(X \le 8)$ mit $X \sim B(20;\, 0{,}5)$.'
loesung: |
  Ansatz: $\beta$ ist die Wahrscheinlichkeit, unter dem wahren $p$ im Annahmebereich zu landen.
  ---
  a) $\beta = P(X \le 8)$ für $X \sim B(20;\, 0{,}5)$, also $\beta \approx 0{,}2517$.
  ---
  b) Fehler 2. Art. In etwa einem Viertel der Fälle wird echtes Können übersehen. Abhilfe bei gleichem $\alpha$: mehr Proben.
```

```aufgabe
id: st-ht-deutung
titel: Was ein Test aussagt
niveau: 3
lernziel: 8
kompetenz: begruenden
angabe: |
  Eine Firma testet, ob eine neue Startseite mehr Käufe bringt. $H_0$: Die Kaufquote ist gleich geblieben. Der Test
  verwirft $H_0$ **nicht**. Der Chef sagt: „Damit ist bewiesen, dass die neue Seite nichts bringt.“

  a) Beurteile die Aussage.

  b) Nenne zwei Gründe, warum ein Test eine echte, aber kleine Verbesserung übersehen kann.
teile:
  - typ: text
    muster: |
      a) Die Aussage ist falsch. Ein nicht verworfenes $H_0$ heißt nur: Die Daten sind mit „keine Änderung“ vereinbar.
      Sie sind oft auch mit einer kleinen Verbesserung vereinbar. Ein Test kann $H_0$ nie beweisen, so wie ein Freispruch
      die Unschuld nicht beweist.

      b) Erstens war die Stichprobe vielleicht zu klein. Dann ist die Wahrscheinlichkeit $\beta$ für einen Fehler 2. Art
      groß. Zweitens ist eine kleine Verbesserung schwer von Zufallsschwankungen zu unterscheiden. Auch ein sehr kleines
      $\alpha$ macht den Ablehnungsbereich kleiner und $\beta$ größer.
hinweise:
  - Denk an das Bild vom Gerichtsverfahren. Was bedeutet ein Freispruch?
  - Welche Größen beeinflussen die Wahrscheinlichkeit für einen Fehler 2. Art?
loesung: |
  Ansatz: Ein Test kann $H_0$ verwerfen oder nicht verwerfen, aber nie bestätigen.
  ---
  a) „Nicht verworfen“ heißt „nicht genug Belege dagegen“, nicht „bewiesen“.
  ---
  b) Kleine Stichprobe und kleiner Effekt machen $\beta$ groß. Ein strenges $\alpha$ verstärkt das.
  ---
  Antwortsatz: Die Firma sollte mit größerer Stichprobe weitertesten, bevor sie die Seite verwirft.
```

```aufgabe
id: st-ht-gefuehrt
titel: Zeigt der Würfel zu oft die Sechs?
niveau: 2
lernziel: 8
kompetenz: rechnen
angabe: |
  Ein Würfel steht im Verdacht, zu oft die Sechs zu zeigen. Er wird $60$-mal geworfen. Getestet wird
  $H_0\colon p = \tfrac16$ gegen $H_1\colon p > \tfrac16$ mit $\alpha = 5\,\%$. Ab wie vielen Sechsen wird $H_0$ verworfen?
teile:
  - typ: zahl
    loesung: "16"
    fehler:
      - wert: "15"
        meldung: '$P(X \ge 15) \approx 0{,}065$ ist noch größer als $5\,\%$.'
hinweise:
  - Suche das kleinste $k$ mit $P(X \ge k) \le 0{,}05$ für $X \sim B(60;\, \tfrac16)$.
  - 'Der Erwartungswert ist $10$. Probiere $k$-Werte ab etwa $14$.'
gefuehrt:
  - text: Berechne den Erwartungswert unter $H_0$.
    teil: { typ: zahl, loesung: "60/6" }
    erklaerung: '$\mu = 60 \cdot \tfrac16 = 10$. Erst deutlich mehr als 10 Sechsen sind verdächtig.'
  - text: 'Berechne $P(X \ge 15) = 1 - P(X \le 14)$ (3 Nachkommastellen).'
    teil: { typ: zahl, loesung: "1 - binomcdf(60, 1/6, 14)", toleranz: 0.001 }
    erklaerung: '$P(X \ge 15) \approx 0{,}065$. Das ist mehr als $0{,}05$, also gehört $15$ noch nicht zum Ablehnungsbereich.'
  - text: 'Berechne $P(X \ge 16) = 1 - P(X \le 15)$ (3 Nachkommastellen).'
    teil: { typ: zahl, loesung: "1 - binomcdf(60, 1/6, 15)", toleranz: 0.001 }
    erklaerung: '$P(X \ge 16) \approx 0{,}034 \le 0{,}05$.'
  - text: Ab wie vielen Sechsen wird $H_0$ verworfen?
    teil: { typ: zahl, loesung: "16" }
    erklaerung: 'Der Ablehnungsbereich ist $16$ bis $60$. Die tatsächliche Irrtumswahrscheinlichkeit ist $0{,}034$.'
loesung: |
  Ansatz: Rechtsseitiger Test mit $X \sim B(60;\, \tfrac16)$ unter $H_0$.
  ---
  $P(X \ge 15) \approx 0{,}065 > 0{,}05$ und $P(X \ge 16) \approx 0{,}034 \le 0{,}05$.
  ---
  Antwortsatz: Ab $16$ Sechsen in $60$ Würfen wird der Würfel als verfälscht angesehen.
```

```reflexion
frage: Warum steht die Behauptung, die man widerlegen möchte, in der Nullhypothese und nicht in der Alternative?
antwort: |
  Weil man nur unter einer konkreten Annahme rechnen kann. $H_0$ legt einen Wert wie $p = 0{,}25$ fest, und damit kennt
  man die Verteilung von $X$ und kann den Ablehnungsbereich bestimmen. Außerdem kontrolliert der Test nur die
  Wahrscheinlichkeit des Fehlers 1. Art. Deshalb stellt man das, was man nachweisen möchte, in $H_1$: Ein Verwerfen von
  $H_0$ ist dann ein gut abgesicherter Beleg, denn es passiert zu Unrecht höchstens mit Wahrscheinlichkeit $\alpha$.
```

## Gemischte Wiederholung

In diesem Abschnitt sind die Aufgaben bunt gemischt, auch mit Werkzeugen aus früheren Kapiteln. Das ist Absicht: In
der Prüfung steht nicht dabei, welcher Abschnitt gemeint ist. Bei den ersten beiden Aufgaben musst du nichts rechnen.
Du entscheidest nur, welches Verfahren passt. Genau diese Entscheidung ist in der Prüfung oft der schwierigste Schritt.

```aufgabe
id: st-mix-verfahren-mittel
titel: "Welches Verfahren passt? Drei Durchschnitte"
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Ordne jeder Frage die passende Kennzahl zu. Du musst nicht rechnen.

  a) Wie hoch ist die typische Wartezeit beim Arzt, wenn einige Patientinnen sehr lange warten mussten?

  b) Wie stark ist ein Aktiendepot pro Jahr durchschnittlich gewachsen?

  c) Wie groß ist der Notenschnitt über Lehrveranstaltungen mit verschiedenen ECTS?
teile:
  - typ: auswahl
    label: 'a)'
    optionen: ['Median', 'geometrisches Mittel', 'gewichtetes Mittel']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Wartezeiten werden nicht multipliziert. Gesucht ist ein robuster Wert gegen die wenigen sehr langen Wartezeiten.
      - wert: 2
        meldung: Hier gibt es keine natürlichen Gewichte. Das Problem sind die Ausreißer nach oben.
  - typ: auswahl
    label: 'b)'
    optionen: ['Median', 'geometrisches Mittel', 'gewichtetes Mittel']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Wachstumsfaktoren wirken nacheinander multiplikativ. Dafür ist das geometrische Mittel gemacht.
      - wert: 2
        meldung: Es geht nicht um verschieden wichtige Werte, sondern um Faktoren, die multipliziert werden.
  - typ: auswahl
    label: 'c)'
    optionen: ['Median', 'geometrisches Mittel', 'gewichtetes Mittel']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Der Median ignoriert, dass große Lehrveranstaltungen mehr zählen sollen.
      - wert: 1
        meldung: Noten werden nicht multipliziert. Die ECTS sind Gewichte.
hinweise:
  - 'Frag bei jeder Situation: Gibt es Ausreißer? Werden Werte multipliziert? Zählen Werte verschieden stark?'
loesung: |
  Ansatz: Die Art der Daten entscheidet über das Mittel.
  ---
  a) Schiefe Daten mit Ausreißern: Median. b) Multiplikatives Wachstum: geometrisches Mittel der Faktoren.
  ---
  c) Verschieden wichtige Werte: gewichtetes Mittel mit den ECTS als Gewichten.
```

```aufgabe
id: st-mix-verfahren-schaetzen
titel: "Welches Verfahren passt? Vorhersagen oder schätzen"
niveau: 1
lernziel: 7
kompetenz: verstehen
angabe: |
  Ordne zu. Du musst nicht rechnen.

  a) Eine Münze ist fair. In welchem Bereich wird die Anzahl „Kopf“ bei $500$ Würfen mit $95\,\%$ Wahrscheinlichkeit liegen?

  b) Bei $500$ Würfen einer unbekannten Münze kam $270$-mal „Kopf“. Welche Werte sind für die Kopf-Wahrscheinlichkeit plausibel?
teile:
  - typ: auswahl
    label: 'a)'
    optionen: ['Streubereich $p \pm 1{,}96\sqrt{p(1-p)/n}$ aus Kapitel 16', 'Konfidenzintervall $h \pm 1{,}96\sqrt{h(1-h)/n}$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Hier ist $p = 0{,}5$ bekannt, und man sagt ein künftiges Ergebnis voraus. Das ist ein Streubereich.
  - typ: auswahl
    label: 'b)'
    optionen: ['Streubereich $p \pm 1{,}96\sqrt{p(1-p)/n}$ aus Kapitel 16', 'Konfidenzintervall $h \pm 1{,}96\sqrt{h(1-h)/n}$']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Hier ist $p$ unbekannt, und $h = 0{,}54$ ist beobachtet. Man schätzt also $p$ aus den Daten.
hinweise:
  - Ist $p$ bekannt, oder will man $p$ erst herausfinden?
loesung: |
  Ansatz: Bekanntes $p$ und Vorhersage heißt Streubereich, siehe [16.17 Normalapproximation und Streubereiche](/lernen/mathe3/wahrscheinlichkeit/normalapproximation-und-streubereiche).
  ---
  Unbekanntes $p$ und Schätzung aus Daten heißt Konfidenzintervall. Also a) Streubereich, b) Konfidenzintervall.
```

```aufgabe
id: st-mix-prozentpunkte
titel: Prozent und Prozentpunkte
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Eine Partei steigt in Umfragen von $20\,\%$ auf $25\,\%$.
  (Wiederholung: [1.6 Prozentrechnung](/lernen/mathe3/zahlen/prozentrechnung))

  a) Um wie viele Prozentpunkte ist sie gestiegen?

  b) Um wie viel Prozent ist ihr Anteil gestiegen?
teile:
  - typ: zahl
    label: 'a) Prozentpunkte'
    loesung: "25 - 20"
    fehler:
      - wert: "25"
        meldung: '$25$ ist der neue Umfragewert (und zufällig auch die relative Änderung in Prozent). Prozentpunkte sind die einfache Differenz der beiden Prozentzahlen.'
  - typ: zahl
    label: 'b) Prozent'
    loesung: "(25 - 20)/20*100"
    fehler:
      - wert: "5"
        meldung: '$5$ sind die Prozentpunkte. Die relative Änderung bezieht die Zunahme auf den Ausgangswert $20$.'
hinweise:
  - 'Prozentpunkte: Differenz. Prozent: Differenz durch Ausgangswert, mal $100$.'
loesung: |
  Ansatz: Absolute und relative Änderung unterscheiden.
  ---
  a) $25 - 20 = 5$ Prozentpunkte. b) $\tfrac{5}{20} = 0{,}25$, also $25\,\%$ mehr.
```

```aufgabe
id: st-mix-summenzeichen
titel: Quadratsumme mit dem Summenzeichen
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Für $x_1 = 1$, $x_2 = 3$, $x_3 = 5$ und $x_4 = 7$ ist $\bar x = 4$. Berechne $\displaystyle\sum_{i=1}^{4}(x_i - \bar x)^2$.
  (Wiederholung: [8.4 Das Summenzeichen](/lernen/mathe3/folgen-reihen/das-summenzeichen))
teile:
  - typ: zahl
    loesung: "(1-4)^2 + (3-4)^2 + (5-4)^2 + (7-4)^2"
    fehler:
      - wert: "0"
        meldung: Ohne Quadrat heben sich die Abweichungen auf. Jede Abweichung wird **vor** dem Addieren quadriert.
      - wert: "(1+3+5+7-16)^2"
        meldung: Du hast erst summiert und dann quadriert. Das Quadrat gehört zu jedem einzelnen Summanden.
hinweise:
  - 'Abweichungen $-3, -1, 1, 3$, dann jede quadrieren.'
loesung: |
  Ansatz: Für jedes $i$ den Summanden $(x_i - 4)^2$ bilden und addieren.
  ---
  $9 + 1 + 1 + 9 = 20$. Die empirische Varianz wäre $\tfrac{20}{4} = 5$.
```

```aufgabe
id: st-mix-nullstelle
titel: Wann ist das Lager leer?
niveau: 1
lernziel: 5
kompetenz: anwenden
angabe: |
  Die Regression des Lagerbestands $y$ in Stück auf die Zeit $x$ in Tagen ergibt $y = -2{,}5x + 40$. Nach wie vielen
  Tagen sagt das Modell einen leeren Lagerbestand voraus?
  (Wiederholung: [4.3 Lineare Funktionen](/lernen/mathe3/funktionen/lineare-funktionen))
teile:
  - typ: zahl
    loesung: "40/2.5"
    fehler:
      - wert: "40*2.5"
        meldung: 'Löse $-2{,}5x + 40 = 0$ nach $x$: Du musst durch $2{,}5$ teilen, nicht multiplizieren.'
hinweise:
  - Leeres Lager heißt $y = 0$. Setz das ein und löse nach $x$.
loesung: |
  Ansatz: Nullstelle der linearen Funktion, also $-2{,}5x + 40 = 0$.
  ---
  $2{,}5x = 40$, also $x = 16$. Nach etwa $16$ Tagen ist das Lager laut Modell leer, sofern der Trend anhält.
```

```aufgabe
id: st-mix-normal
titel: Wie viele sind größer als 186 cm?
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Die Körpergrößen einer großen Gruppe sind annähernd normalverteilt mit $\bar x = 170$ cm und $s = 8$ cm.

  a) Berechne den $z$-Wert von $186$ cm.

  b) Welcher Anteil ist größer als $186$ cm? (4 Nachkommastellen)
  (Wiederholung: [16.16 Normalverteilung und Standardisieren](/lernen/mathe3/wahrscheinlichkeit/normalverteilung-und-standardisieren))
teile:
  - typ: zahl
    label: 'a) $z$'
    loesung: "(186 - 170)/8"
    fehler:
      - wert: "(186 - 170)/64"
        meldung: Geteilt wird durch die Standardabweichung $8$, nicht durch die Varianz $64$.
  - typ: zahl
    label: 'b) Anteil'
    loesung: "1 - normcdf(2)"
    toleranz: 0.0005
    anzeige: '0{,}0228'
    fehler:
      - wert: "normcdf(2)"
        meldung: '$\Phi(2)$ ist die Fläche **links**, also der Anteil bis $186$ cm. Für „größer als“ brauchst du $1 - \Phi(2)$.'
hinweise:
  - '$z = \tfrac{x - \bar x}{s}$.'
  - 'Gesucht ist die Fläche rechts von $z$, also $1 - \Phi(z)$.'
loesung: |
  Ansatz: Standardisieren und die Normalverteilung nutzen.
  ---
  a) $z = \tfrac{186 - 170}{8} = 2$.
  ---
  b) $1 - \Phi(2) \approx 1 - 0{,}9772 = 0{,}0228$. Etwa $2{,}3\,\%$ sind größer als $186$ cm.
```

```aufgabe
id: st-mix-wuerfel
titel: Ein verdächtiger Würfel
niveau: 3
lernziel: 8
kompetenz: modellieren
angabe: |
  Ein Würfel wird $120$-mal geworfen:

  |Augenzahl|1|2|3|4|5|6|
  |---|---|---|---|---|---|---|
  |Anzahl|17|19|20|16|18|30|

  a) Berechne den Mittelwert der Augenzahlen (3 Nachkommastellen) und vergleiche mit dem Erwartungswert $3{,}5$ eines fairen Würfels.

  b) Berechne für einen fairen Würfel den $95\,\%$-Streubereich $\mu \pm 1{,}96\,\sigma$ der Anzahl der Sechsen (1 Nachkommastelle).

  c) Was folgt für die beobachteten $30$ Sechsen?
teile:
  - typ: zahl
    label: 'a) $\bar x$'
    loesung: "(1*17 + 2*19 + 3*20 + 4*16 + 5*18 + 6*30)/120"
    toleranz: 0.0005
    anzeige: '3{,}742'
    fehler:
      - wert: "3.5"
        meldung: Das ist der Erwartungswert des fairen Würfels. Der Mittelwert wird aus den beobachteten Anzahlen berechnet.
  - typ: zahl
    label: 'b) untere Grenze'
    loesung: "20 - 1.96*sqrt(120*1/6*5/6)"
    toleranz: 0.1
    anzeige: '12{,}0'
    fehler:
      - wert: "20 - 1.96*120*1/6*5/6"
        meldung: Du hast mit der Varianz statt mit der Standardabweichung gerechnet.
  - typ: zahl
    label: 'b) obere Grenze'
    loesung: "20 + 1.96*sqrt(120*1/6*5/6)"
    toleranz: 0.1
    anzeige: '28{,}0'
  - typ: text
    label: 'c) Folgerung'
    muster: |
      $30$ Sechsen liegen außerhalb des Streubereichs von etwa $12$ bis $28$. Bei einem fairen Würfel ist das ein
      ungewöhnliches Ergebnis. Es spricht dafür, dass die Sechs häufiger fällt. Bewiesen ist es nicht, denn auch ein fairer
      Würfel liefert in etwa $5\,\%$ der Serien ein Ergebnis außerhalb des Bereichs. Der erhöhte Mittelwert $3{,}74$ passt dazu.
hinweise:
  - 'a) Gewichtetes Mittel mit den Anzahlen als Gewichten. b) Für die Sechsen gilt $X \sim B(120;\, \tfrac16)$.'
  - '$\mu = 120 \cdot \tfrac16 = 20$ und $\sigma = \sqrt{120 \cdot \tfrac16 \cdot \tfrac56}$.'
loesung: |
  Ansatz: Mittelwert aus der Häufigkeitstabelle, dann Streubereich der Binomialverteilung aus
  [16.17 Normalapproximation und Streubereiche](/lernen/mathe3/wahrscheinlichkeit/normalapproximation-und-streubereiche).
  ---
  a) $\bar x = \tfrac{17 + 38 + 60 + 64 + 90 + 180}{120} = \tfrac{449}{120} \approx 3{,}742$. Das ist etwas mehr als $3{,}5$.
  ---
  b) $\mu = 20$, $\sigma = \sqrt{16{,}67} \approx 4{,}08$. Streubereich $20 \pm 8{,}0$, also $[12{,}0;\ 28{,}0]$.
  ---
  c) $30$ liegt außerhalb: auffällig, ein Hinweis auf einen gezinkten Würfel, aber kein Beweis.
```

```aufgabe
id: st-mix-akku
titel: Akkulaufzeiten mit einem Ausreißer
niveau: 3
lernziel: 3
kompetenz: anwenden
angabe: |
  Neun Akkus eines Modells halten in Stunden:
  $$9{,}5;\ 10{,}2;\ 10{,}8;\ 11{,}0;\ 11{,}3;\ 11{,}5;\ 11{,}9;\ 12{,}4;\ 4{,}1.$$

  a) Berechne Mittelwert und Median.

  b) Bestimme $q_1$, $q_3$ und die untere Ausreißergrenze. Ist $4{,}1$ h ein Ausreißer?

  c) Welche Laufzeit sollte der Hersteller als „typisch“ angeben? Begründe kurz.
teile:
  - typ: zahl
    label: 'a) $\bar x$'
    loesung: "mean([9.5, 10.2, 10.8, 11.0, 11.3, 11.5, 11.9, 12.4, 4.1])"
    fehler:
      - wert: "(92.7 - 4.1)/8"
        meldung: Du hast den Wert $4{,}1$ weggelassen. Der Mittelwert nutzt alle neun Werte.
  - typ: zahl
    label: 'a) $\tilde x$'
    loesung: "11"
    fehler:
      - wert: "11.3"
        meldung: Das ist der 5. Wert der **ungeordneten** Liste. Geordnet steht $4{,}1$ ganz vorne.
  - typ: zahl
    label: 'b) $q_1$'
    loesung: "(9.5 + 10.2)/2"
    anzeige: '9{,}85'
    fehler:
      - wert: "9.5"
        meldung: 'Die untere Hälfte hat vier Werte: $4{,}1;\ 9{,}5;\ 10{,}2;\ 10{,}8$. Ihr Median ist das Mittel aus dem 2. und 3. Wert.'
  - typ: zahl
    label: 'b) $q_3$'
    loesung: "(11.5 + 11.9)/2"
    anzeige: '11{,}7'
  - typ: zahl
    label: 'b) untere Grenze'
    loesung: "9.85 - 1.5*(11.7 - 9.85)"
    anzeige: '7{,}075'
    fehler:
      - wert: "9.85 - (11.7 - 9.85)"
        meldung: Der Faktor $1{,}5$ fehlt.
  - typ: text
    label: 'c) Begründung'
    muster: |
      $4{,}1 < 7{,}075$, also ist $4{,}1$ h ein Ausreißer, vielleicht ein defekter Akku. Als typische Laufzeit eignet sich
      der Median $11{,}0$ h. Der Mittelwert $10{,}3$ h wird durch den Ausreißer nach unten gezogen. Ohne ihn wäre er
      etwa $11{,}1$ h. Den defekten Akku sollte man getrennt untersuchen.
hinweise:
  - 'Ordne zuerst. Bei $n = 9$ ist der Median der 5. Wert, die Hälften haben je vier Werte.'
  - 'Untere Grenze $q_1 - 1{,}5 \cdot \text{IQR}$.'
loesung: |
  Ansatz: Lage und Streuung robust bestimmen. Geordnet: $4{,}1;\ 9{,}5;\ 10{,}2;\ 10{,}8;\ 11{,}0;\ 11{,}3;\ 11{,}5;\ 11{,}9;\ 12{,}4$.
  ---
  a) Summe $92{,}7$, also $\bar x = 10{,}3$ h. Median: 5. Wert, $11{,}0$ h.
  ---
  b) $q_1 = \tfrac{9{,}5 + 10{,}2}{2} = 9{,}85$, $q_3 = \tfrac{11{,}5 + 11{,}9}{2} = 11{,}7$, $\text{IQR} = 1{,}85$. Untere Grenze $9{,}85 - 2{,}775 = 7{,}075$.
  ---
  c) $4{,}1$ h ist ein Ausreißer. Typisch ist der Median $11$ h.
```

```aufgabe
id: st-mix-schlaf
titel: Bildschirmzeit und Schlaf
niveau: 3
lernziel: 6
kompetenz: modellieren
angabe: |
  Fünf Jugendliche geben ihre tägliche Bildschirmzeit am Abend $x$ und ihre Schlafdauer $y$ an, beides in Stunden:

  |$x$|2|3|4|5|6|
  |---|---|---|---|---|---|
  |$y$|$8{,}1$|$7{,}6$|$7{,}4$|$6{,}9$|$6{,}5$|

  a) Bestimme die Regressionsgerade. Es gilt $\sum (x_i - \bar x)(y_i - \bar y) = -3{,}9$ und $\sum (x_i - \bar x)^2 = 10$.

  b) Berechne $r$ mit $\sum (y_i - \bar y)^2 = 1{,}54$ (3 Nachkommastellen).

  c) Eine Schulzeitung schreibt: „Jede Stunde am Bildschirm kostet 23 Minuten Schlaf.“ Beurteile das.
teile:
  - typ: zahl
    label: 'a) $k$'
    loesung: "-3.9/10"
    anzeige: '-0{,}39'
    fehler:
      - wert: "3.9/10"
        meldung: Das Vorzeichen fehlt. Mehr Bildschirmzeit geht hier mit weniger Schlaf einher.
  - typ: zahl
    label: 'a) $d$'
    loesung: "7.3 + 0.39*4"
    anzeige: '8{,}86'
    fehler:
      - wert: "7.3 - 0.39*4"
        meldung: 'Mit $k = -0{,}39$ ist $d = \bar y - k\bar x = 7{,}3 + 0{,}39 \cdot 4$. Minus mal minus ergibt plus.'
  - typ: zahl
    label: 'b) $r$'
    loesung: "-3.9/sqrt(10*1.54)"
    toleranz: 0.001
    anzeige: '-0{,}994'
    fehler:
      - wert: "3.9/sqrt(10*1.54)"
        meldung: Das Vorzeichen fehlt. $r$ hat dasselbe Vorzeichen wie die Kovarianz.
  - typ: text
    label: 'c) Beurteilung'
    muster: |
      Die Steigung $-0{,}39$ h entspricht etwa $23$ Minuten weniger Schlaf pro Bildschirmstunde, und $r \approx -0{,}99$
      zeigt einen sehr engen linearen Zusammenhang. Das „kostet“ behauptet aber eine Ursache. Aus fünf Personen und einer
      Korrelation folgt das nicht. Drittvariablen sind möglich, etwa Stress oder spätes Training, die beides beeinflussen.
      Außerdem ist $n = 5$ sehr klein. Nachweisen ließe sich eine Wirkung nur mit einem Experiment.
hinweise:
  - '$\bar x = 4$ und $\bar y = 7{,}3$.'
  - '$r = \tfrac{-3{,}9}{\sqrt{10 \cdot 1{,}54}}$. Für c) rechne $0{,}39$ Stunden in Minuten um.'
loesung: |
  Ansatz: Regressionsgerade und $r$ aus den Summen, dann kritisch deuten.
  ---
  a) $k = \tfrac{-3{,}9}{10} = -0{,}39$ und $d = 7{,}3 - (-0{,}39) \cdot 4 = 8{,}86$. Also $y = -0{,}39x + 8{,}86$.
  ---
  b) $r = \tfrac{-3{,}9}{\sqrt{15{,}4}} \approx -0{,}994$: sehr starker negativer linearer Zusammenhang.
  ---
  c) $0{,}39 \cdot 60 \approx 23$ Minuten. Die Zahl stimmt als Beschreibung, aber „kostet“ ist eine Kausalaussage, die eine Korrelation nicht trägt.
```

## Prüfungsaufgaben

Diese Aufgaben kombinieren mehrere Techniken in der Form, in der Statistik in der schriftlichen Prüfung als Teilaufgabe
vorkommen kann. Jede hat einen Zeitrichtwert. Rechne mit Stoppuhr und mit dem Taschenrechner, aber notiere die
Zwischenschritte. Schreib zu jedem Teil zuerst den Ansatz hin. Dafür gibt es auch dann Punkte, wenn sich später ein
Rechenfehler einschleicht. Die letzte Aufgabe gehört zur Vertiefung.

```aufgabe
id: st-pruefung-messreihe
titel: Messreihe vollständig auswerten
niveau: 3
lernziel: 3
kompetenz: rechnen
punkte: 10
angabe: |
  Zeitrichtwert: 20 Minuten.

  Die Temperatur eines Prozessors in °C wurde elfmal gemessen:
  $$52,\ 47,\ 55,\ 61,\ 49,\ 53,\ 58,\ 50,\ 54,\ 79,\ 51.$$

  a) Berechne arithmetisches Mittel (2 Nachkommastellen) und Median.

  b) Bestimme $q_1$, $q_3$ und den Interquartilsabstand. Gibt es Ausreißer nach der 1,5-IQR-Regel?

  c) Berechne die empirische Standardabweichung $s$ (Division durch $n$, 2 Nachkommastellen).

  d) Beschreibe den Boxplot und begründe, welcher Lageparameter die typische Temperatur besser beschreibt.
teile:
  - typ: zahl
    label: 'a) $\bar x$'
    loesung: "mean([52, 47, 55, 61, 49, 53, 58, 50, 54, 79, 51])"
    toleranz: 0.005
    anzeige: '55{,}36'
    fehler:
      - wert: "609/10"
        meldung: Es sind elf Messwerte, also durch $11$ teilen.
  - typ: zahl
    label: 'a) $\tilde x$'
    loesung: "median([52, 47, 55, 61, 49, 53, 58, 50, 54, 79, 51])"
    fehler:
      - wert: "53.5"
        meldung: 'Bei $n = 11$ ist der Median genau der 6. Wert der geordneten Liste, kein Mittel aus zwei Werten.'
  - typ: zahl
    label: 'b) $q_1$'
    loesung: "50"
    fehler:
      - wert: "50.5"
        meldung: Bei ungeradem $n$ gehört der Median zu keiner Hälfte. Die untere Hälfte ist $47, 49, 50, 51, 52$.
  - typ: zahl
    label: 'b) $q_3$'
    loesung: "58"
    fehler:
      - wert: "56.5"
        meldung: Der Median $53$ gehört nicht zur oberen Hälfte. Sie ist $54, 55, 58, 61, 79$.
  - typ: zahl
    label: 'b) obere Ausreißergrenze'
    loesung: "58 + 1.5*(58 - 50)"
    fehler:
      - wert: "58 + (58 - 50)"
        meldung: Der Faktor $1{,}5$ fehlt.
  - typ: zahl
    label: 'c) $s$'
    loesung: 'std([52, 47, 55, 61, 49, 53, 58, 50, 54, 79, 51], "uncorrected")'
    toleranz: 0.005
    anzeige: '8{,}39'
    fehler:
      - wert: 'std([52, 47, 55, 61, 49, 53, 58, 50, 54, 79, 51])'
        meldung: Du hast durch $n - 1$ geteilt. Gefragt ist die empirische Standardabweichung mit Nenner $n$.
  - typ: text
    label: 'd) Boxplot und Begründung'
    muster: |
      Box von $q_1 = 50$ bis $q_3 = 58$, Medianstrich bei $53$, untere Antenne bis $47$, obere Antenne bis $61$, dem
      größten Wert innerhalb der Grenzen. Der Wert $79$ wird als einzelner Punkt gezeichnet, denn $79 > 70$. Der Median
      $53$ beschreibt die typische Temperatur besser als das Mittel $55{,}36$, weil der Ausreißer das Mittel nach oben zieht.
      Ohne ihn wäre das Mittel genau $53$. Den Ausreißer sollte man gesondert untersuchen, etwa als Messfehler oder kurze Überhitzung.
hinweise:
  - 'Ordne die Daten. $n = 11$ ist ungerade, der Median ist der 6. Wert und gehört zu keiner Hälfte.'
  - 'Ausreißergrenzen: $q_1 - 1{,}5\,\text{IQR}$ und $q_3 + 1{,}5\,\text{IQR}$. Für $s$: $\sum x_i = 609$ und $\sum x_i^2 = 34\,491$.'
loesung: |
  Ansatz: Fünf-Punkte-Zusammenfassung, Tukey-Regel und Verschiebungssatz. Geordnet: $47, 49, 50, 51, 52, 53, 54, 55, 58, 61, 79$.
  ---
  **a)** $\sum x_i = 609$, $\bar x = \tfrac{609}{11} \approx 55{,}36$. Median: 6. Wert, $\tilde x = 53$.
  ---
  **b)** Untere Hälfte $47, 49, 50, 51, 52$: $q_1 = 50$. Obere Hälfte $54, 55, 58, 61, 79$: $q_3 = 58$. $\text{IQR} = 8$.
  Grenzen $50 - 12 = 38$ und $58 + 12 = 70$. Der Wert $79$ ist ein Ausreißer.
  ---
  **c)** $\sum x_i^2 = 34\,491$. Mit Brüchen, damit sich keine Rundungsfehler aufschaukeln:
  $s^2 = \tfrac{34\,491}{11} - \left(\tfrac{609}{11}\right)^2 = \tfrac{11 \cdot 34\,491 - 609^2}{121} = \tfrac{8520}{121} \approx 70{,}41$, also $s \approx 8{,}39$.
  ---
  **d)** Box $[50;\, 58]$, Median $53$, Antennen bis $47$ und $61$, Punkt bei $79$. Typische Temperatur: Median $53$ °C, weil robust.
```

```aufgabe
id: st-pruefung-regression
titel: Temperatur und Eisverkauf
niveau: 3
lernziel: 5
kompetenz: modellieren
punkte: 10
angabe: |
  Zeitrichtwert: 20 Minuten.

  Ein Eisstand notiert an fünf Tagen die Tageshöchsttemperatur $x$ in °C und die verkauften Portionen $y$:

  |$x$|16|18|20|22|24|
  |---|---|---|---|---|---|
  |$y$|110|140|150|170|200|

  a) Berechne die Regressionsgerade $y = kx + d$.

  b) Berechne den Korrelationskoeffizienten $r$ (4 Nachkommastellen) und deute ihn.

  c) Prognostiziere den Absatz bei $26$ °C.

  d) Deute $k$ und $d$ im Sachzusammenhang. Ist eine Prognose für $5$ °C sinnvoll?
teile:
  - typ: zahl
    label: 'a) $k$'
    loesung: "420/40"
    anzeige: '10{,}5'
    fehler:
      - wert: "420/5"
        meldung: 'Im Nenner steht $\sum (x_i - \bar x)^2 = 40$, nicht $n$.'
  - typ: zahl
    label: 'a) $d$'
    loesung: "154 - 10.5*20"
    fehler:
      - wert: "154 + 10.5*20"
        meldung: 'Vorzeichenfehler: $d = \bar y - k\bar x$.'
  - typ: zahl
    label: 'b) $r$'
    loesung: "420/sqrt(40*4520)"
    toleranz: 0.0005
    anzeige: '0{,}9878'
    fehler:
      - wert: "420^2/(40*4520)"
        meldung: Das ist $r^2$. Für $r$ brauchst du die Wurzel im Nenner.
  - typ: zahl
    label: 'c) Prognose für 26 °C'
    loesung: "10.5*26 - 56"
  - typ: text
    label: 'd) Deutung'
    muster: |
      $k = 10{,}5$: Pro Grad mehr werden im Mittel etwa $10{,}5$ Portionen mehr verkauft. $d = -56$ wäre der Absatz bei
      $0$ °C. Ein negativer Absatz ist sinnlos, $d$ hat hier keine eigene Bedeutung. Er ist nur ein Parameter der Geraden
      im beobachteten Bereich von 16 bis 24 °C. Die Prognose für 5 °C wäre $-3{,}5$ Portionen. Das ist eine weite
      Extrapolation und unbrauchbar. Die hohe Korrelation zeigt einen starken linearen Zusammenhang im beobachteten
      Bereich. Dass die Temperatur den Absatz beeinflusst, ist plausibel, folgt aber nicht allein aus $r$.
hinweise:
  - '$\bar x = 20$ und $\bar y = 154$.'
  - '$\sum (x_i - \bar x)(y_i - \bar y) = 420$, $\sum (x_i - \bar x)^2 = 40$ und $\sum (y_i - \bar y)^2 = 4520$.'
loesung: |
  Ansatz: Rezept für die Regressionsgerade. $\bar x = 20$, $\bar y = \tfrac{770}{5} = 154$.
  ---
  Abweichungen: $x_i - \bar x = -4, -2, 0, 2, 4$ und $y_i - \bar y = -44, -14, -4, 16, 46$.
  Produkte $176 + 28 + 0 + 32 + 184 = 420$. Quadrate der $x$-Abweichungen: $40$.
  ---
  **a)** $k = \tfrac{420}{40} = 10{,}5$ und $d = 154 - 10{,}5 \cdot 20 = -56$. Gerade: $y = 10{,}5x - 56$.
  ---
  **b)** $\sum (y_i - \bar y)^2 = 1936 + 196 + 16 + 256 + 2116 = 4520$. $r = \tfrac{420}{\sqrt{40 \cdot 4520}} \approx 0{,}9878$: sehr starker positiver linearer Zusammenhang, $r^2 \approx 0{,}976$.
  ---
  **c)** $y(26) = 10{,}5 \cdot 26 - 56 = 217$ Portionen, eine leichte Extrapolation.
  ---
  **d)** $k$: etwa $10{,}5$ Portionen pro Grad. $d$: im Kontext sinnlos. $5$ °C liegt weit außerhalb der Daten, die Prognose ist unzulässig.
```

```aufgabe
id: st-pruefung-umfrage
titel: Umfrage unter Studierenden
niveau: 3
lernziel: 7
kompetenz: anwenden
punkte: 8
angabe: |
  Zeitrichtwert: 15 Minuten.

  In einer Zufallsstichprobe von $1200$ Studierenden gaben $300$ an, privat Linux zu verwenden.

  a) Berechne ein $95\,\%$-Konfidenzintervall für den Anteil $p$ aller Studierenden, die Linux verwenden (4 Nachkommastellen).

  b) Interpretiere das Intervall in einem Satz.

  c) Wie viele Studierende müsste man befragen, damit die halbe Breite höchstens $1{,}5$ Prozentpunkte beträgt? Verwende $h = 0{,}25$.
teile:
  - typ: zahl
    label: 'a) untere Grenze'
    loesung: "0.25 - 1.96*sqrt(0.25*0.75/1200)"
    toleranz: 0.0005
    anzeige: '0{,}2255'
    fehler:
      - wert: "0.25 - 1.96*0.25*0.75/1200"
        meldung: Die Wurzel fehlt.
  - typ: zahl
    label: 'a) obere Grenze'
    loesung: "0.25 + 1.96*sqrt(0.25*0.75/1200)"
    toleranz: 0.0005
    anzeige: '0{,}2745'
  - typ: text
    label: 'b) Interpretation'
    muster: |
      Das Verfahren liefert in rund $95\,\%$ aller Zufallsstichproben ein Intervall, das den wahren Anteil enthält. Auf
      Basis dieser Stichprobe ist ein Anteil zwischen etwa $22{,}6\,\%$ und $27{,}5\,\%$ der Studierenden plausibel.
  - typ: zahl
    label: 'c) Mindestumfang $n$'
    loesung: "ceil(1.96^2*0.25*0.75/0.015^2)"
    toleranz: 0.1
    fehler:
      - wert: "floor(1.96^2*0.25*0.75/0.015^2)"
        meldung: Ein Mindestumfang wird immer aufgerundet.
      - wert: "ceil(1.96^2*0.25/0.015^2)"
        meldung: Hier ist $h = 0{,}25$ bekannt, also $h(1 - h) = 0{,}1875$ und nicht der ungünstigste Fall $0{,}25$.
hinweise:
  - '$h = \tfrac{300}{1200} = 0{,}25$ und $\sqrt{\tfrac{0{,}25 \cdot 0{,}75}{1200}} = 0{,}0125$.'
  - 'c) $n \ge \tfrac{1{,}96^2 \cdot h(1-h)}{\varepsilon^2}$ mit $\varepsilon = 0{,}015$, dann aufrunden.'
loesung: |
  Ansatz: Konfidenzintervall für einen Anteil. Faustregel $1200 \cdot 0{,}25 \cdot 0{,}75 = 225 > 9$.
  ---
  **a)** $\sqrt{\tfrac{0{,}1875}{1200}} = \sqrt{0{,}00015625} = 0{,}0125$. Halbe Breite $1{,}96 \cdot 0{,}0125 = 0{,}0245$. Intervall $[0{,}2255;\ 0{,}2745]$.
  ---
  **b)** Das Verfahren trifft in $95\,\%$ der Stichproben den wahren Anteil. Plausibel sind etwa $22{,}6\,\%$ bis $27{,}5\,\%$.
  ---
  **c)** $n \ge \tfrac{1{,}96^2 \cdot 0{,}1875}{0{,}015^2} = \tfrac{0{,}7203}{0{,}000225} \approx 3201{,}3$, also mindestens $3202$ Studierende.
```

```aufgabe
id: st-pruefung-wachstum
titel: Mittleres Wachstum und Prognose
niveau: 3
lernziel: 2
kompetenz: modellieren
punkte: 6
angabe: |
  Zeitrichtwert: 10 Minuten.

  Eine Plattform hatte Ende 2020 $1{,}2$ Millionen Nutzerinnen und Nutzer, Ende 2024 $2{,}0$ Millionen.

  a) Berechne die durchschnittliche jährliche Wachstumsrate in Prozent (2 Nachkommastellen).

  b) Prognostiziere die Nutzerzahl Ende 2027, wenn dieses Wachstum anhält (in Millionen, 2 Nachkommastellen).

  c) Warum ist das arithmetische Mittel der jährlichen Prozentsätze hier nicht geeignet?
teile:
  - typ: zahl
    label: 'a) Rate in %'
    loesung: "(nthRoot(2/1.2, 4) - 1)*100"
    toleranz: 0.01
    anzeige: '13{,}62'
    fehler:
      - wert: "(2/1.2 - 1)/4*100"
        meldung: Du hast das Gesamtwachstum gleichmäßig auf die Jahre verteilt. Wachstum ist multiplikativ, also vierte Wurzel aus dem Gesamtfaktor.
      - wert: "(nthRoot(2/1.2, 5) - 1)*100"
        meldung: Von Ende 2020 bis Ende 2024 sind es vier Wachstumsjahre, nicht fünf.
  - typ: zahl
    label: 'b) Ende 2027 in Mio.'
    loesung: "2*nthRoot(2/1.2, 4)^3"
    toleranz: 0.005
    anzeige: '2{,}93'
    fehler:
      - wert: "2*nthRoot(2/1.2, 4)^7"
        meldung: Ausgangswert ist schon der Stand Ende 2024, also nur noch drei Jahre Wachstum.
  - typ: text
    label: 'c) Begründung'
    muster: |
      Wachstum wirkt multiplikativ: Der Endwert ist der Anfangswert mal dem Produkt der Wachstumsfaktoren. Der konstante
      Faktor, der dasselbe Produkt ergibt, ist das geometrische Mittel der Faktoren. Das arithmetische Mittel der
      Prozentsätze überschätzt das Wachstum, sobald die Raten schwanken, denn es gilt $\bar x_g \le \bar x$.
hinweise:
  - 'Vier Wachstumsjahre: $1{,}2 \cdot q^4 = 2{,}0$.'
  - 'Für b) drei weitere Jahre ab $2{,}0$ Millionen: $2{,}0 \cdot q^3$.'
loesung: |
  Ansatz: konstanter jährlicher Faktor $q$ mit $1{,}2 \cdot q^4 = 2{,}0$.
  ---
  **a)** $q^4 = \tfrac{2{,}0}{1{,}2} = \tfrac53$, also $q = \sqrt[4]{5/3} \approx 1{,}1362$: durchschnittlich $13{,}62\,\%$ pro Jahr.
  ---
  **b)** Drei weitere Jahre: $2{,}0 \cdot 1{,}1362^3 \approx 2{,}93$ Millionen.
  ---
  **c)** Wachstum ist multiplikativ, das passende Mittel der Faktoren ist das geometrische. Antwortsatz: Bei anhaltendem Trend sind es Ende 2027 rund $2{,}93$ Millionen.
```

```aufgabe
id: st-pruefung-histogramm
titel: Wartezeiten an einer Hotline
niveau: 3
lernziel: 1
kompetenz: rechnen
punkte: 8
angabe: |
  Zeitrichtwert: 15 Minuten.

  Die Wartezeiten von $80$ Anrufen bei einer Hotline in Minuten wurden klassiert:

  |Klasse|$[0;\,2)$|$[2;\,5)$|$[5;\,10)$|$[10;\,20)$|
  |---|---|---|---|---|
  |Anzahl|18|27|25|10|

  a) Berechne die Höhen der Rechtecke eines Histogramms (Anrufe pro Minute) für alle vier Klassen.

  b) Schätze den Mittelwert mit den Klassenmitten.

  c) In welcher Klasse liegt der Median?

  d) Welcher Anteil der Anrufer wartete mindestens 5 Minuten?
teile:
  - typ: zahl
    label: 'a) Höhe $[0;\,2)$'
    loesung: "18/2"
    fehler:
      - wert: "18"
        meldung: Das ist die Anzahl. Teile durch die Klassenbreite $2$.
  - typ: zahl
    label: 'a) Höhe $[2;\,5)$'
    loesung: "27/3"
    fehler:
      - wert: "27/5"
        meldung: 'Die Breite ist $5 - 2 = 3$, nicht $5$.'
  - typ: zahl
    label: 'a) Höhe $[5;\,10)$'
    loesung: "25/5"
  - typ: zahl
    label: 'a) Höhe $[10;\,20)$'
    loesung: "10/10"
  - typ: zahl
    label: 'b) geschätzter Mittelwert'
    loesung: "(1*18 + 3.5*27 + 7.5*25 + 15*10)/80"
    toleranz: 0.005
    anzeige: '5{,}625'
    fehler:
      - wert: "(2*18 + 5*27 + 10*25 + 20*10)/80"
        meldung: Du hast die oberen Klassengrenzen genommen. Ohne weitere Information schätzt man jeden Wert durch die **Mitte** seiner Klasse.
  - typ: auswahl
    label: 'c) Klasse des Medians'
    optionen: ['$[0;\,2)$', '$[2;\,5)$', '$[5;\,10)$', '$[10;\,20)$']
    richtig: [1]
    fehler:
      - wert: 2
        meldung: 'Bis $5$ Minuten liegen schon $18 + 27 = 45$ Anrufe, also mehr als die Hälfte von $80$.'
  - typ: zahl
    label: 'd) Anteil ab 5 min'
    loesung: "(25+10)/80"
    toleranz: 0.0005
    anzeige: '0{,}4375'
    fehler:
      - wert: "10/80"
        meldung: Du hast nur die letzte Klasse gezählt. „Mindestens 5 Minuten“ umfasst auch $[5;\,10)$.
hinweise:
  - 'Breiten $2$, $3$, $5$ und $10$. Klassenmitten $1$, $3{,}5$, $7{,}5$ und $15$.'
  - 'Der Median ist der Wert in der Mitte, also zwischen dem 40. und 41. Anruf. Bilde laufende Summen der Anzahlen.'
loesung: |
  Ansatz: Histogramm über Häufigkeitsdichten, Mittelwert über Klassenmitten als gewichtetes Mittel.
  ---
  **a)** $\tfrac{18}{2} = 9$, $\tfrac{27}{3} = 9$, $\tfrac{25}{5} = 5$ und $\tfrac{10}{10} = 1$ Anrufe pro Minute.
  ---
  **b)** $\bar x \approx \tfrac{1 \cdot 18 + 3{,}5 \cdot 27 + 7{,}5 \cdot 25 + 15 \cdot 10}{80} = \tfrac{18 + 94{,}5 + 187{,}5 + 150}{80} = \tfrac{450}{80} = 5{,}625$ Minuten.
  ---
  **c)** Laufende Summen $18, 45, 70, 80$. Der 40. und 41. Anruf liegen in $[2;\,5)$.
  ---
  **d)** $\tfrac{25 + 10}{80} = 0{,}4375$. Antwortsatz: Gut $40\,\%$ warteten mindestens 5 Minuten, der Mittelwert $5{,}6$ min liegt wegen der langen Wartezeiten über dem Median.
```

```aufgabe
id: st-pruefung-test
titel: Pünktliche Zustellung (Vertiefung)
niveau: 3
lernziel: 8
kompetenz: modellieren
punkte: 10
angabe: |
  Zeitrichtwert: 20 Minuten.

  Ein Paketdienst wirbt: „$90\,\%$ aller Pakete kommen innerhalb von 24 Stunden an.“ Eine Verbraucherorganisation prüft
  $400$ zufällig ausgewählte Pakete. $348$ davon kommen pünktlich an.

  a) Formuliere Nullhypothese und Alternative, wenn die Organisation die Werbeaussage widerlegen will.

  b) Berechne unter $H_0$ den Erwartungswert und die Standardabweichung der Anzahl pünktlicher Pakete.

  c) Bestimme mit der Normalverteilung und Stetigkeitskorrektur den Ablehnungsbereich für $\alpha = 5\,\%$. Gib die größte Anzahl an, bei der $H_0$ noch verworfen wird.

  d) Wie lautet die Entscheidung? Formuliere einen Antwortsatz.
teile:
  - typ: auswahl
    label: 'a) Hypothesen'
    optionen:
      - '$H_0\colon p = 0{,}9$ gegen $H_1\colon p < 0{,}9$'
      - '$H_0\colon p < 0{,}9$ gegen $H_1\colon p = 0{,}9$'
      - '$H_0\colon p = 0{,}9$ gegen $H_1\colon p > 0{,}9$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die Werbeaussage ist die konkrete Behauptung und gehört in $H_0$. Belegen will die Organisation, dass es weniger sind.
      - wert: 2
        meldung: Die Organisation vermutet **weniger** pünktliche Pakete. Die Alternative zeigt nach unten.
  - typ: zahl
    label: 'b) $\mu$'
    loesung: "400*0.9"
  - typ: zahl
    label: 'b) $\sigma$'
    loesung: "sqrt(400*0.9*0.1)"
    fehler:
      - wert: "36"
        meldung: Das ist die Varianz. Die Standardabweichung ist ihre Wurzel.
  - typ: zahl
    label: 'c) größte Anzahl im Ablehnungsbereich'
    loesung: "349"
    toleranz: 0.1
    fehler:
      - wert: "350"
        meldung: 'Mit Stetigkeitskorrektur muss $k + 0{,}5 \le 360 - 1{,}645 \cdot 6 = 350{,}13$ gelten. Für $k = 350$ ist $350{,}5$ zu groß.'
      - wert: "348"
        meldung: 'Prüfe $k = 349$: $349{,}5 \le 350{,}13$. Auch $349$ gehört noch zum Ablehnungsbereich.'
  - typ: text
    label: 'd) Entscheidung'
    muster: |
      $348$ liegt im Ablehnungsbereich von $0$ bis $349$. $H_0$ wird verworfen. Antwortsatz: Auf dem Niveau $5\,\%$ ist
      die Werbeaussage widerlegt, der Anteil pünktlicher Pakete ist signifikant kleiner als $90\,\%$. Der p-Wert ist etwa
      $\Phi\big(\frac{348{,}5 - 360}{6}\big) \approx 0{,}028$.
hinweise:
  - '$X \sim B(400;\, 0{,}9)$ unter $H_0$. Faustregel $400 \cdot 0{,}9 \cdot 0{,}1 = 36 > 9$.'
  - 'Linksseitig mit $5\,\%$: Grenze $\mu - 1{,}645\,\sigma$. Mit Stetigkeitskorrektur gilt $k$ als abgelehnt, wenn $k + 0{,}5$ nicht über dieser Grenze liegt.'
loesung: |
  Ansatz: linksseitiger Test für einen Anteil mit Normalnäherung.
  ---
  **a)** $H_0\colon p = 0{,}9$ gegen $H_1\colon p < 0{,}9$.
  ---
  **b)** $\mu = 360$ und $\sigma = \sqrt{36} = 6$.
  ---
  **c)** Grenze $360 - 1{,}645 \cdot 6 = 350{,}13$. Bedingung $k + 0{,}5 \le 350{,}13$, also $k \le 349$. Exakt binomial: $P(X \le 349) \approx 0{,}044$ und $P(X \le 350) \approx 0{,}060$. Das bestätigt den Bereich.
  ---
  **d)** $348 \le 349$: $H_0$ wird verworfen. Die Werbeaussage hält der Prüfung nicht stand.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, ohne nachzuschauen. Vergleiche danach mit der Zusammenfassung direkt nach dieser Frage.
antwort: |
  Eine mögliche Auswahl: (1) Das Skalenniveau und die Form der Daten entscheiden, welche Kennzahl passt. Bei Ausreißern
  und schiefen Daten ist der Median robuster als der Mittelwert. (2) Die Regressionsgerade minimiert die Summe der
  quadrierten senkrechten Abstände und geht durch den Schwerpunkt. Der Korrelationskoeffizient misst nur lineare
  Zusammenhänge und beweist keine Ursache. (3) Ein Konfidenzintervall $h \pm 1{,}96\sqrt{h(1-h)/n}$ schätzt einen
  unbekannten Anteil. Seine Breite schrumpft nur mit $\tfrac{1}{\sqrt n}$. Andere gute Antworten sind die Tukey-Regel
  für Ausreißer oder das geometrische Mittel für Wachstumsraten.
```

:::zusammenfassung
1. **Skalenniveau:** Nominal erlaubt nur den Modus, ordinal zusätzlich Median und Quartile, metrisch auch Mittelwert und Standardabweichung. Verlässlich von einer Stichprobe auf die Grundgesamtheit schließen kann man vor allem mit einer Zufallsstichprobe.
2. **Häufigkeiten:** $h = H/n$, kumuliert $F$. „Höchstens $a$“ ist $F(a)$, „mindestens $a$“ ist $1 - F(\text{Wert vor } a)$. Im Histogramm ist die Fläche die Häufigkeit, die Höhe ist Anzahl durch Klassenbreite.
3. **Lage:** $\bar x = \frac1n\sum x_i$ ist der Schwerpunkt und empfindlich gegen Ausreißer. Der Median ist robust. Gruppen mittelt man gewichtet, Wachstumsfaktoren geometrisch.
4. **Streuung robust:** Quartile als Mediane der Hälften, $\text{IQR} = q_3 - q_1$. Ausreißer liegen außerhalb von $[q_1 - 1{,}5\,\text{IQR};\ q_3 + 1{,}5\,\text{IQR}]$.
5. **Streuung mit allen Werten:** $s^2 = \frac1n\sum(x_i - \bar x)^2 = \overline{x^2} - \bar x^2$, $s = \sqrt{s^2}$. Zum Schätzen der Grundgesamtheit teilt man durch $n - 1$. $z = \frac{x - \bar x}{s}$ ordnet einen Wert ein.
6. **Regression:** $k = \frac{s_{xy}}{s_x^2}$ und $d = \bar y - k\bar x$. Die Gerade geht durch $(\bar x \mid \bar y)$. Weite Extrapolation ist unzulässig.
7. **Korrelation:** $r = \frac{s_{xy}}{s_x s_y}$ mit $-1 \le r \le 1$, $r^2$ ist der erklärte Anteil. $r$ misst nur lineare Zusammenhänge, ist nicht robust und beweist keine Ursache.
8. **Schließen:** Das Konfidenzintervall $h \pm z\sqrt{h(1-h)/n}$ schätzt einen Anteil. Ein Hypothesentest verwirft $H_0$, wenn ein so extremes Ergebnis unter $H_0$ höchstens mit Wahrscheinlichkeit $\alpha$ aufträte. Er beweist $H_0$ nie.
:::

:::merke[Alle Kennzahlen auf einen Blick]
- **Modus:** häufigster Wert, ab nominal.
- **Median $\tilde x$:** mittlerer Wert der geordneten Liste, ab ordinal, robust.
- **Arithmetisches Mittel $\bar x$:** $\frac1n\sum x_i$, metrisch, empfindlich gegen Ausreißer.
- **Gewichtetes Mittel:** $\frac{\sum w_i x_i}{\sum w_i}$, für Gruppen verschiedener Größe.
- **Geometrisches Mittel:** $\sqrt[n]{x_1 \cdots x_n}$, für Wachstumsfaktoren.
- **Spannweite und IQR:** $x_{\max} - x_{\min}$ ist ausreißerempfindlich, $q_3 - q_1$ ist robust.
- **Varianz und Standardabweichung:** $s^2 = \overline{x^2} - \bar x^2$ und $s = \sqrt{s^2}$, in der Einheit der Daten.
- **Variationskoeffizient:** $v = s/\bar x$, relative Streuung.
- **Kovarianz, Regression, Korrelation:** $s_{xy}$ gibt die Richtung, $k$ die Stärke des Anstiegs, $r$ die Enge.
:::

### Die häufigsten Fehler

Jeder Fehler steht mit einer Aufgabe, die ihn gezielt trainiert. Wenn dir ein Fehler bekannt vorkommt, rechne die
genannte Aufgabe noch einmal.

1. **Mittelwert von nominalen oder ordinalen Daten** gebildet, etwa von Postleitzahlen. Training: „Sinnvolle Rechnung oder nicht?“ und „Sinnvolle Kennzahl“ in [17.1 Grundbegriffe: Merkmale, Skalen und Stichproben](/lernen/mathe3/statistik/grundbegriffe-merkmale-skalen-und-stichproben).
2. **Aus einer großen, aber selbstausgewählten Stichprobe** auf alle geschlossen. Training: „Eine Umfrage beurteilen“ und „Welche Stichprobe ist repräsentativ?“ in [17.1 Grundbegriffe: Merkmale, Skalen und Stichproben](/lernen/mathe3/statistik/grundbegriffe-merkmale-skalen-und-stichproben).
3. **„Mindestens“ mit der falschen Grenze** übersetzt, etwa $1 - F(2)$ statt $1 - F(1)$ für „mindestens 2“. Training: „Mindestens und mehr als“ in [17.2 Häufigkeiten und empirische Verteilungsfunktion](/lernen/mathe3/statistik/haeufigkeiten-und-empirische-verteilungsfunktion).
4. **Im Histogramm die Anzahl als Höhe** gezeichnet, obwohl die Klassen verschieden breit sind. Training: „Histogramm richtig zeichnen“ und „Anzahlen aus einem Histogramm ablesen“ in [17.3 Diagramme: Säulen, Kreis und Histogramm](/lernen/mathe3/statistik/diagramme-saeulen-kreis-und-histogramm).
5. **Den Median ohne Ordnen** bestimmt oder die Werte einer Häufigkeitstabelle ungewichtet gemittelt. Training: „Mittelwert, Median, Modus“ und „Mittelwert aus der Häufigkeitstabelle“ in [17.4 Mittelwert, Median und Modus](/lernen/mathe3/statistik/mittelwert-median-und-modus).
6. **Prozentsätze von Wachstumsraten arithmetisch gemittelt** oder Gruppenmittel ohne Gewichte gemittelt. Training: „Durchschnittliches Wachstum“ und „Gesamtmittel zweier Gruppen“ in [17.5 Gewichtetes und geometrisches Mittel](/lernen/mathe3/statistik/gewichtetes-und-geometrisches-mittel).
7. **Bei ungeradem n den Median in die Hälften mitgenommen** oder die Antenne bis zur Ausreißergrenze gezeichnet. Training: „Fünf-Punkte-Zusammenfassung“ und „Ausreißer auf beiden Seiten“ in [17.6 Quartile, Boxplot und Ausreißer](/lernen/mathe3/statistik/quartile-boxplot-und-ausreisser).
8. **Die Varianz als Standardabweichung angegeben** oder $n$ und $n - 1$ verwechselt. Training: „Varianz und Standardabweichung“ und „Stichprobenvarianz“ in [17.7 Varianz, Standardabweichung und z-Werte](/lernen/mathe3/statistik/varianz-standardabweichung-und-z-werte).
9. **Eine Verschiebung auf die Standardabweichung angewendet,** etwa $s_F = 1{,}8 \cdot 4 + 32$. Training: „Einheiten umrechnen“ in [17.7 Varianz, Standardabweichung und z-Werte](/lernen/mathe3/statistik/varianz-standardabweichung-und-z-werte).
10. **Beim Achsenabschnitt das Vorzeichen falsch,** $d = \bar y + k\bar x$. Training: „Fehler in einer Regressionsrechnung“ und „Achsenabschnitt aus dem Schwerpunkt“ in [17.8 Lineare Regression: die Methode der kleinsten Quadrate](/lernen/mathe3/statistik/lineare-regression-die-methode-der-kleinsten-quadrate).
11. **Weit extrapoliert,** etwa die Körpergröße mit 40 Jahren. Training: „Wachstum von Kindern“ in [17.8 Lineare Regression: die Methode der kleinsten Quadrate](/lernen/mathe3/statistik/lineare-regression-die-methode-der-kleinsten-quadrate).
12. **Steigung mit Korrelation verwechselt** oder aus $r = 0$ auf „kein Zusammenhang“ geschlossen. Training: „Korrelation aus der Steigung“ und „Perfekter Zusammenhang, r = 0“ in [17.9 Korrelation und Kausalität](/lernen/mathe3/statistik/korrelation-und-kausalitaet).
13. **Aus einer Korrelation auf eine Ursache geschlossen.** Training: „Nachhilfe und Noten“ und „Bildschirmzeit und Schlaf“ in [17.9 Korrelation und Kausalität](/lernen/mathe3/statistik/korrelation-und-kausalitaet) und in [17.12 Gemischte Wiederholung](/lernen/mathe3/statistik/gemischte-wiederholung).
14. **Im Konfidenzintervall die Wurzel vergessen** oder den Mindestumfang abgerundet. Training: „Konfidenzintervall berechnen“ und „Wie viele Befragte?“ in [17.10 Konfidenzintervall für einen Anteil](/lernen/mathe3/statistik/konfidenzintervall-fuer-einen-anteil).
15. **Aus „nicht verworfen“ auf „bewiesen“ geschlossen.** Training: „Was ein Test aussagt“ in [17.11 Hypothesentest für einen Anteil (Vertiefung)](/lernen/mathe3/statistik/hypothesentest-fuer-einen-anteil-vertiefung).

### Selbstcheck zu den Lernzielen

Schätze für jedes Lernziel ein, wie sicher du bist: **1** = noch unsicher, **2** = meistens richtig, **3** = sicher,
auch unter Zeitdruck. Vergleiche danach mit deinen Ergebnissen in den Aufgaben. Wo du dich bei 3 eingeschätzt hast,
aber Fehler machst, liegt deine wichtigste Baustelle.

1. Skalenniveau bestimmen, Stichproben beurteilen, passende Kennzahl wählen.
2. Häufigkeiten, empirische Verteilungsfunktion und Histogramm.
3. Mittelwert, Median, Modus, gewichtetes und geometrisches Mittel.
4. Quartile, Boxplot und Ausreißer.
5. Varianz, Standardabweichung, Variationskoeffizient und z-Werte.
6. Regressionsgerade berechnen und deuten.
7. Korrelationskoeffizient und Kausalität.
8. Konfidenzintervall und Stichprobenumfang.
9. Hypothesentest und Fehlerarten (Vertiefung).

## Mündliche Prüfung

Die Karten zeigen typische Fragen der mündlichen Prüfung. Formuliere zuerst laut eine eigene Antwort in ganzen Sätzen.
Decke erst dann die Musterantwort auf und vergleiche sie mit den Kernpunkten.

```karten
- id: st-karte-skalen
  frage: Welche Skalenniveaus gibt es, und warum sind sie wichtig?
  antwort: |
    Nominal heißt: nur Namen, etwa Betriebssysteme. Ordinal heißt: Rangfolge ohne messbare Abstände, etwa Schulnoten.
    Metrisch heißt: Zahlen mit sinnvollen Differenzen, etwa Zeiten. Das Skalenniveau bestimmt, welche Kennzahlen
    sinnvoll sind. Den Modus gibt es ab nominal, den Median ab ordinal, Mittelwert und Standardabweichung nur bei
    metrischen Daten. Ein Mittelwert von Postleitzahlen ist deshalb sinnlos.
  kernpunkte:
    - drei Skalen mit Beispiel
    - Kennzahl hängt vom Skalenniveau ab
    - Gegenbeispiel Mittelwert von Namen
- id: st-karte-stichprobe
  frage: Warum macht ein großes n eine selbstausgewählte Umfrage nicht verlässlich?
  antwort: |
    Ein großes $n$ verringert nur die zufälligen Schwankungen. Bei einer selbstausgewählten Stichprobe antworten aber
    systematisch bestimmte Gruppen, zum Beispiel nur Leser einer Technikseite. Dieser Fehler heißt Verzerrung, und er
    wird mit wachsendem $n$ nicht kleiner. Aussagekräftig ist eine Zufallsstichprobe, in der jeder Merkmalsträger
    dieselbe Chance hat, ausgewählt zu werden.
  kernpunkte:
    - Zufallsfehler gegen systematische Verzerrung
    - großes n heilt keine Verzerrung
    - Zufallsstichprobe als Lösung
- id: st-karte-histogramm
  frage: Worauf muss man bei einem Histogramm mit ungleichen Klassenbreiten achten?
  antwort: |
    Die **Fläche** jedes Rechtecks muss der Häufigkeit der Klasse entsprechen, weil das Auge Flächen vergleicht. Als Höhe
    nimmt man deshalb die Häufigkeitsdichte, also Häufigkeit durch Klassenbreite. Sonst wirkt eine doppelt so breite
    Klasse doppelt so wichtig. Dasselbe Prinzip steckt hinter der Dichtefunktion einer stetigen Zufallsvariablen.
  kernpunkte:
    - Fläche entspricht Häufigkeit
    - Höhe gleich Häufigkeit durch Breite
    - Verbindung zur Dichtefunktion
- id: st-karte-median
  frage: Wann verwendet man den Median statt des arithmetischen Mittels?
  antwort: |
    Bei schiefen Verteilungen, bei Ausreißern und bei ordinalen Daten. Der Median ist robust: Ein einzelner extremer Wert
    verschiebt ihn kaum. Das Mittel verschiebt sich dagegen um $\Delta / n$, wenn ein Wert um $\Delta$ wächst. Typische
    Beispiele sind Einkommen und Antwortzeiten von Servern, wo deshalb oft Median und hohe Perzentile angegeben werden.
  kernpunkte:
    - schief, Ausreißer, ordinal
    - Median robust, Mittel verschiebt sich um Δ/n
    - Beispiel Einkommen oder Antwortzeiten
- id: st-karte-minimal
  frage: Welche Schwerpunkt- und Minimaleigenschaft hat das arithmetische Mittel?
  antwort: |
    Die Abweichungen vom Mittelwert summieren sich zu null, $\sum (x_i - \bar x) = 0$. Und die Summe der quadrierten
    Abweichungen $\sum (x_i - a)^2$ ist für $a = \bar x$ am kleinsten. Ausmultipliziert ist das eine nach oben offene
    Parabel in $a$ mit Scheitel bei $\bar x$. Der Median minimiert dagegen die Summe der Beträge $\sum |x_i - a|$.
  kernpunkte:
    - Summe der Abweichungen ist null
    - Quadratsumme minimal bei x quer
    - Begründung über den Scheitel der Parabel
- id: st-karte-geometrisch
  frage: Warum braucht man für Wachstumsraten das geometrische Mittel?
  antwort: |
    Weil Wachstumsfaktoren multipliziert werden. Der mittlere Faktor $q$ muss $q^n = q_1 \cdots q_n$ erfüllen, also ist
    $q = \sqrt[n]{q_1 \cdots q_n}$. Das arithmetische Mittel der Prozentsätze ist zu groß, sobald die Raten schwanken.
    Zum Beispiel ergeben $+50\,\%$ und $-50\,\%$ insgesamt $-25\,\%$ und nicht $0\,\%$. Das hängt mit der Zinseszinsrechnung aus [8.7 Zinseszins, Barwert und unterjährige Verzinsung](/lernen/mathe3/folgen-reihen/zinseszins-barwert-und-unterjaehrige-verzinsung) zusammen.
  kernpunkte:
    - Faktoren werden multipliziert
    - q hoch n gleich Produkt der Faktoren
    - Gegenbeispiel plus 50 und minus 50 Prozent
- id: st-karte-boxplot
  frage: Was sind Quartile, und wie liest man einen Boxplot?
  antwort: |
    $q_1$ und $q_3$ sind die Mediane der unteren und oberen Hälfte der geordneten Daten. Bei ungeradem $n$ gehört der
    Median zu keiner Hälfte. Die Box reicht von $q_1$ bis $q_3$ und enthält die mittleren $50\,\%$, der Strich ist der
    Median. Die Antennen reichen bis zu den extremsten Werten, die keine Ausreißer sind. Ausreißer liegen außerhalb von
    $[q_1 - 1{,}5\,\text{IQR};\ q_3 + 1{,}5\,\text{IQR}]$ und werden als Punkte gezeichnet.
  kernpunkte:
    - Quartile als Mediane der Hälften
    - Box enthält die mittleren 50 Prozent
    - Tukey-Regel für Ausreißer
- id: st-karte-varianz
  frage: Wie ist die Varianz definiert, und warum teilt man bei der Stichprobenvarianz durch n − 1?
  antwort: |
    $s^2 = \frac1n \sum (x_i - \bar x)^2$ ist die mittlere quadratische Abweichung vom Mittelwert, und $s = \sqrt{s^2}$
    hat die Einheit der Daten. Die Abweichungen werden vom Stichprobenmittel aus gemessen, und genau dieses Mittel
    macht die Quadratsumme am kleinsten. Teilt man durch $n$, unterschätzt man daher die Streuung der Grundgesamtheit im
    Mittel. Der Nenner $n - 1$ gleicht das aus.
  kernpunkte:
    - Definition als mittlere quadratische Abweichung
    - Stichprobenmittel minimiert die Quadratsumme
    - n − 1 gleicht die Unterschätzung aus
- id: st-karte-tschebyscheff
  frage: Was garantiert die Standardabweichung für beliebige Daten?
  antwort: |
    Nach Tschebyscheff liegen höchstens $\frac{1}{c^2}$ der Werte $c$ oder mehr Standardabweichungen vom Mittelwert
    entfernt, für $c = 2$ also höchstens $25\,\%$. Beweis: Wenn $m$ solche Werte existieren, ist
    $n s^2 \ge m c^2 s^2$. Bei glockenförmigen Daten sind es nach den σ-Regeln aus [16.16 Normalverteilung und Standardisieren](/lernen/mathe3/wahrscheinlichkeit/normalverteilung-und-standardisieren) nur etwa $5\,\%$.
  kernpunkte:
    - höchstens 1/c² weit draußen
    - Beweisidee über die Quadratsumme
    - Vergleich mit den σ-Regeln
- id: st-karte-regression
  frage: Wie berechnet man die Regressionsgerade, und was minimiert sie?
  antwort: |
    Sie minimiert die Summe der quadrierten senkrechten Abstände $\sum (y_i - kx_i - d)^2$. Das ist die Methode der
    kleinsten Quadrate. Ergebnis: $k = s_{xy}/s_x^2$ und $d = \bar y - k\bar x$. Die Gerade geht deshalb immer durch den
    Schwerpunkt $(\bar x \mid \bar y)$. Prognosen sind nur innerhalb des beobachteten Bereichs vertretbar.
  kernpunkte:
    - Summe der quadrierten senkrechten Abstände
    - Formeln für k und d
    - Gerade durch den Schwerpunkt, keine weite Extrapolation
- id: st-karte-korrelation
  frage: Was misst der Korrelationskoeffizient r, und warum gilt −1 ≤ r ≤ 1?
  antwort: |
    $r = s_{xy}/(s_x s_y)$ misst die Enge des **linearen** Zusammenhangs und hat keine Einheit. Für die kleinste
    Residuenquadratsumme gilt $Q_{\min} = n s_y^2 (1 - r^2)$. Weil $Q_{\min} \ge 0$ ist, folgt $r^2 \le 1$. Genau bei
    $|r| = 1$ ist $Q_{\min} = 0$, dann liegen alle Punkte auf einer Geraden. $r^2$ ist der erklärte Anteil der Streuung.
  kernpunkte:
    - Definition und lineare Enge
    - Beweis über Q_min ≥ 0
    - r² als erklärter Anteil
- id: st-karte-r-null
  frage: Kann r = 0 sein, obwohl x und y exakt zusammenhängen?
  antwort: |
    Ja. Die Punkte $(-2 \mid 4)$, $(-1 \mid 1)$, $(0 \mid 0)$, $(1 \mid 1)$ und $(2 \mid 4)$ liegen auf $y = x^2$, haben aber
    $s_{xy} = 0$ und damit $r = 0$. Die Produkte der Abweichungen links und rechts heben sich wegen der Symmetrie auf.
    $r$ erfasst nur lineare Zusammenhänge, darum muss man immer das Streudiagramm ansehen.
  kernpunkte:
    - Gegenbeispiel Parabel
    - Symmetrie hebt die Produkte auf
    - Streudiagramm immer ansehen
- id: st-karte-kausal
  frage: Warum folgt aus einer hohen Korrelation keine Ursache-Wirkungs-Beziehung? Nenne ein Beispiel.
  antwort: |
    Eine Korrelation kann durch eine Drittvariable entstehen, etwa Eisverkauf und Badeunfälle, die beide von der Hitze
    abhängen. Sie kann auch durch die umgekehrte Richtung entstehen, etwa Nachhilfe und schlechte Noten, oder durch Zufall.
    Eine Ursache weist man mit einem kontrollierten Experiment mit zufälliger Zuteilung nach, in der Softwareentwicklung
    mit einem A/B-Test.
  kernpunkte:
    - Drittvariable, umgekehrte Richtung, Zufall
    - konkretes Beispiel
    - Experiment mit zufälliger Zuteilung
- id: st-karte-konfidenz
  frage: Was ist ein Konfidenzintervall für einen Anteil, und wie hängt es mit dem Streubereich aus Kapitel 16 zusammen?
  antwort: |
    Der Streubereich $p \pm 1{,}96\sqrt{p(1-p)/n}$ aus [16.17 Normalapproximation und Streubereiche](/lernen/mathe3/wahrscheinlichkeit/normalapproximation-und-streubereiche) sagt bei bekanntem $p$ voraus, wo die relative Häufigkeit landet.
    Das Konfidenzintervall dreht das um: Aus beobachtetem $h$ schätzt man $h \pm 1{,}96\sqrt{h(1-h)/n}$ für das
    unbekannte $p$. Das Verfahren erfasst in etwa $95\,\%$ der Stichproben das wahre $p$. Die Breite ist proportional zu
    $1/\sqrt n$, für die halbe Breite braucht man also den vierfachen Umfang.
  kernpunkte:
    - Streubereich als Vorhersage, Intervall als Schätzung
    - 95 Prozent beziehen sich auf das Verfahren
    - Breite proportional zu 1/√n
- id: st-karte-test
  frage: Wie läuft ein Hypothesentest ab, und welche Fehler kann er machen?
  antwort: |
    Man stellt $H_0$ mit einem festen Wert auf, etwa $p = 0{,}25$, und eine Alternative $H_1$. Unter $H_0$ bestimmt man
    einen Ablehnungsbereich, der höchstens die Wahrscheinlichkeit $\alpha$ hat. Liegt das Ergebnis darin, verwirft man
    $H_0$. Ein Fehler 1. Art verwirft ein wahres $H_0$, seine Wahrscheinlichkeit ist höchstens $\alpha$. Ein Fehler
    2. Art behält ein falsches $H_0$. Deshalb beweist „nicht verworfen“ niemals $H_0$.
  kernpunkte:
    - Hypothesen und Signifikanzniveau
    - Ablehnungsbereich unter H0
    - Fehler 1. und 2. Art, nicht verworfen ist nicht bewiesen
```

