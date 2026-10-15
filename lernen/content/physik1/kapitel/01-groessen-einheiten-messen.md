---
nummer: 1
titel: "Physik als Wissenschaft: Größen, Einheiten, Messen"
kurz: Wie Physik arbeitet, das SI-Einheitensystem, sicheres Umrechnen, Dimensionsanalyse, Längen- und Zeitmessung, Messunsicherheit, Messreihen und Diagramme auswerten, Abschätzen und Vektoren.
teil: grundlagen
stunden: 9
pruefungsgewicht: 2
voraussetzungen: [zahlen, gleichungen, trigonometrie, vektoren]
lernziele:
  - den Erkenntnisweg der Physik (Beobachtung, Hypothese, Experiment, Modell, Theorie) an einem Beispiel erklären, ein Experiment mit veränderter, gemessener und konstant gehaltener Größe planen und die Grenzen eines Modells begründen
  - die sieben SI-Basisgrößen mit ihren Einheiten nennen und abgeleitete Einheiten wie Newton, Joule, Watt, Pascal, Coulomb und Volt auf Basiseinheiten zurückführen
  - mit Vorsilben und Zehnerpotenzen rechnen und Einheiten sicher umrechnen, auch bei Flächen-, Volumen- und zusammengesetzten Einheiten
  - Formeln mit der Dimensionsanalyse prüfen und die Form eines Zusammenhangs bis auf einen Zahlenfaktor erschließen
  - die Definitionen von Meter und Sekunde erklären und Verfahren der Längen- und Zeitmessung (Nonius, Mikrometerschraube, Laufzeit, Triangulation, Uhren) anwenden
  - Messergebnisse mit absoluter und relativer Unsicherheit und sinnvollen signifikanten Stellen angeben und systematische von zufälligen Abweichungen unterscheiden
  - Messreihen mit Mittelwert, Standardabweichung und Unsicherheit des Mittelwerts auswerten und Unsicherheiten mit den Größtfehlerregeln fortpflanzen
  - Messdaten in Diagrammen darstellen und ablesen, Ausgleichsgeraden zeichnen, Zusammenhänge linearisieren und aus der Steigung physikalische Größen bestimmen
  - Größenordnungen mit Fermi-Abschätzungen und Proportionalitätsschlüssen bestimmen
  - Skalare und Vektoren unterscheiden, Vektoren in Komponenten zerlegen und addieren
---

Dieses Kapitel ist das Fundament für alles Weitere. Hier lernst du die Sprache, in der die Physik ihre
Aussagen macht: Zahlen mit Einheiten, gemessen mit einer bekannten Genauigkeit.

**Wozu brauchst du das?** In der schriftlichen Prüfung kommt dieses Kapitel selten als eigene Aufgabe
vor. Es steckt aber in **jeder** Aufgabe. Wer km/h nicht sicher in m/s umrechnet, verliert Punkte, obwohl
die Physik stimmt. Dasselbe gilt für $\text{cm}^2$ und $\text{m}^2$. Einheitenfehler sind der häufigste
Grund für falsche Endergebnisse.

**Was kommt in der Prüfung?** Die Prüfungsordnung nennt ausdrücklich den Stoffpunkt „Arbeitsweisen,
Fragestellungen und Probleme der Physik; Grundgrößen, abgeleitete Größen; Längen- und Zeitmessung“. In
der **mündlichen** Prüfung ist das ein beliebter Einstieg. Typische Fragen sind:

- „Wie ist der Meter definiert, und warum gerade so?“
- „Was ist ein physikalisches Modell?“
- „Warum misst man mehrmals, und was bringt das?“

Auf solche Fragen solltest du in ganzen Sätzen antworten können. In der **schriftlichen** Prüfung
brauchst du vor allem das Umrechnen, die Messunsicherheit und das Auswerten von Messdaten.

**Eine Analogie für Programmierer.** Einheiten sind in der Physik das, was Typen in einer
Programmiersprache sind. Man kann Meter und Sekunden genauso wenig addieren wie einen `String` und einen
`Integer`. Die **Dimensionsanalyse** ist der Typchecker der Physik. Sie findet keine Logikfehler. Sie
findet aber erstaunlich viele Tippfehler, bevor sie Schaden anrichten.

:::vorwissen
Für dieses Kapitel brauchst du aus dem Mathematikkurs:

- **Potenzen mit ganzzahligen Exponenten** und die Potenzgesetze, zum Beispiel $10^3\cdot 10^{-5} = 10^{-2}$.
  Wiederholen: [1.9 Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln).
- **Zehnerpotenzen und signifikante Stellen**, zum Beispiel $0{,}0042 = 4{,}2\cdot 10^{-3}$.
  Wiederholen: [1.16 Runden, signifikante Stellen und Zehnerpotenzen](/lernen/mathe3/zahlen/runden-signifikante-stellen-und-zehnerpotenzen).
- **Bruchrechnen**, vor allem Doppelbrüche, denn Einheiten wie $\frac{\text{m}}{\text{m/s}}$ sind Doppelbrüche.
  Wiederholen: [1.5 Bruchrechnen](/lernen/mathe3/zahlen/bruchrechnen).
- **Prozentrechnung** für relative Unsicherheiten. Wiederholen: [1.6 Prozentrechnung](/lernen/mathe3/zahlen/prozentrechnung).
- **Formeln umstellen**, zum Beispiel $v = s/t$ nach $t$. Wiederholen: [2.12 Formeln umstellen](/lernen/mathe3/gleichungen/formeln-umstellen).
- **Sinus, Kosinus und Pythagoras** im rechtwinkligen Dreieck für Vektoren und Vermessung.
  Wiederholen: [5.1 Das rechtwinklige Dreieck](/lernen/mathe3/trigonometrie/das-rechtwinklige-dreieck).
:::

### Eingangsdiagnose: Bist du bereit?

Die folgenden kurzen Fragen prüfen dieses Vorwissen. Wenn du bei einer Frage unsicher bist, folge dem
Link in der Lösung und wiederhole den Abschnitt kurz. Das kostet zehn Minuten und spart dir später viel
Ärger.

```aufgabe
id: p1-e-potenzgesetz
art: check
titel: Zehnerpotenzen multiplizieren
niveau: 1
angabe: |
  Schreibe $10^{5}\cdot 10^{-2}$ als eine einzige Zehnerpotenz $10^{n}$. Gib den Exponenten $n$ ein.
teile:
  - typ: zahl
    label: '$n$'
    loesung: "5 + (-2)"
    fehler:
      - wert: "-10"
        meldung: Du hast die Exponenten multipliziert. Beim **Multiplizieren** von Potenzen mit gleicher Basis werden die Exponenten **addiert**. Multipliziert werden sie erst beim Potenzieren einer Potenz.
      - wert: "7"
        meldung: Du hast die Exponenten subtrahiert. Subtrahieren musst du beim **Dividieren** von Potenzen. Hier wird multipliziert, also addiert man die Exponenten.
hinweise:
  - Beim Multiplizieren von Potenzen mit gleicher Basis addiert man die Exponenten.
loesung: |
  Das Potenzgesetz lautet $10^{a}\cdot 10^{b} = 10^{a+b}$. Wir addieren also die Exponenten.
  ---
  $10^{5}\cdot 10^{-2} = 10^{5 + (-2)} = 10^{3}$, also $n = 3$. Probe: $100\,000\cdot 0{,}01 = 1000$. Wiederholen: [1.9 Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln).
```

```aufgabe
id: p1-e-zehnerpotenz
art: check
titel: Eine kleine Zahl in Zehnerpotenzschreibweise
niveau: 1
angabe: |
  Schreibe $0{,}000\,42$ in der Form $4{,}2\cdot 10^{n}$. Wie lautet der Exponent $n$?
teile:
  - typ: zahl
    label: '$n$'
    loesung: "-4"
    fehler:
      - wert: "-5"
        meldung: Du hast alle Nullen gezählt, auch die vor dem Komma. Zähle stattdessen, um wie viele Stellen das Komma nach rechts wandern muss, bis eine Zahl zwischen 1 und 10 dasteht.
      - wert: "4"
        meldung: Das Vorzeichen stimmt nicht. Die Zahl ist kleiner als 1, also ist der Exponent negativ.
hinweise:
  - Schiebe das Komma so weit nach rechts, bis $4{,}2$ dasteht. Jede Stelle nach rechts bedeutet einen Faktor $10^{-1}$.
loesung: |
  Wir verschieben das Komma von $0{,}000\,42$ nach rechts, bis $4{,}2$ dasteht. Das sind vier Stellen.
  ---
  Jede Verschiebung nach rechts muss durch einen Faktor $10^{-1}$ ausgeglichen werden. Also gilt $0{,}000\,42 = 4{,}2\cdot 10^{-4}$ und $n = -4$. Wiederholen: [1.16 Runden, signifikante Stellen und Zehnerpotenzen](/lernen/mathe3/zahlen/runden-signifikante-stellen-und-zehnerpotenzen).
```

```aufgabe
id: p1-e-potenz-potenz
art: check
titel: Eine Zehnerpotenz quadrieren
niveau: 1
angabe: |
  Ein Zentimeter ist $10^{-2}\,\text{m}$. Berechne $(10^{-2})^2 = 10^{n}$. Wie lautet $n$?
teile:
  - typ: zahl
    label: '$n$'
    loesung: "-2*2"
    fehler:
      - wert: "0"
        meldung: Du hast die Exponenten $-2$ und $2$ addiert. Beim **Potenzieren** einer Potenz werden die Exponenten **multipliziert**.
      - wert: "-2"
        meldung: Du hast den Exponenten nicht verändert. Quadrieren heißt, die Zahl mit sich selbst zu multiplizieren. Dabei verdoppelt sich der Exponent.
hinweise:
  - '$(10^{a})^{b} = 10^{a\cdot b}$.'
loesung: |
  Das Potenzgesetz für eine Potenz einer Potenz lautet $(10^{a})^{b} = 10^{a\cdot b}$.
  ---
  $(10^{-2})^2 = 10^{-2}\cdot 10^{-2} = 10^{-4}$, also $n = -4$. Das brauchst du gleich beim Umrechnen von $\text{cm}^2$ in $\text{m}^2$. Wiederholen: [1.9 Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln).
```

```aufgabe
id: p1-e-doppelbruch
art: check
titel: Ein Doppelbruch
niveau: 1
angabe: |
  Berechne $\dfrac{3}{\tfrac14}$.
teile:
  - typ: zahl
    loesung: "3/(1/4)"
    fehler:
      - wert: "3/4"
        meldung: Du hast $3$ durch $4$ geteilt. Durch einen Bruch teilt man aber, indem man mit seinem **Kehrwert** multipliziert. Der Kehrwert von $\tfrac14$ ist $4$.
hinweise:
  - Durch einen Bruch dividiert man, indem man mit dem Kehrwert multipliziert.
loesung: |
  Wir dividieren durch $\tfrac14$, indem wir mit dem Kehrwert $\tfrac41 = 4$ multiplizieren.
  ---
  $\dfrac{3}{\tfrac14} = 3\cdot 4 = 12$. Probe: In $3$ Ganzen stecken $12$ Viertel. Genauso rechnest du später mit Einheiten, etwa $\frac{\text{m}}{\text{m/s}} = \text{m}\cdot\frac{\text{s}}{\text{m}} = \text{s}$. Wiederholen: [1.5 Bruchrechnen](/lernen/mathe3/zahlen/bruchrechnen).
```

```aufgabe
id: p1-e-prozent
art: check
titel: Ein Anteil in Prozent
niveau: 1
angabe: |
  Wie viel Prozent sind $0{,}3$ von $12$?
teile:
  - typ: zahl
    loesung: "0.3/12*100"
    einheit: "%"
    anzeige: '2{,}5'
    fehler:
      - wert: "0.3/12"
        meldung: Das ist der Anteil als Dezimalzahl. Für Prozent musst du noch mit $100$ multiplizieren.
      - wert: "12/0.3"
        meldung: Du hast Grundwert und Prozentwert vertauscht. Der Anteil ist „Teil durch Ganzes“, also $0{,}3$ durch $12$.
hinweise:
  - Anteil = Teil durch Ganzes. Für Prozent mit $100$ multiplizieren.
loesung: |
  Der Anteil ist Teil durch Ganzes: $\dfrac{0{,}3}{12} = 0{,}025$.
  ---
  In Prozent: $0{,}025\cdot 100\,\% = 2{,}5\,\%$. Genau so rechnest du später relative Messunsicherheiten aus. Wiederholen: [1.6 Prozentrechnung](/lernen/mathe3/zahlen/prozentrechnung).
```

```aufgabe
id: p1-e-umstellen
art: check
titel: Eine Formel nach der Zeit umstellen
niveau: 1
angabe: |
  Für eine gleichförmige Bewegung gilt $v = \dfrac{s}{t}$. Ein Läufer legt $s = 150\,\text{m}$ mit $v = 12\,\text{m/s}$ zurück. Wie lange braucht er (in s)?
teile:
  - typ: zahl
    loesung: "150/12"
    einheit: "s"
    anzeige: '12{,}5'
    fehler:
      - wert: "150*12"
        meldung: Du hast multipliziert. Prüfe die Einheit, dann siehst du es. $\text{m}\cdot\text{m/s}$ ist keine Zeit. Stelle die Formel schrittweise nach $t$ um.
      - wert: "12/150"
        meldung: Du hast den Kehrwert berechnet. Die Einheit wäre $\frac{\text{m/s}}{\text{m}} = \frac{1}{\text{s}}$, also keine Zeit.
hinweise:
  - Multipliziere $v = s/t$ mit $t$ und teile dann durch $v$.
loesung: |
  Wir multiplizieren beide Seiten mit $t$, damit $t$ nicht mehr im Nenner steht: $v\cdot t = s$. Dann teilen wir durch $v$: $t = \dfrac{s}{v}$.
  ---
  $t = \dfrac{150\,\text{m}}{12\,\text{m/s}} = 12{,}5\,\text{s}$. Die Meter kürzen sich, übrig bleiben Sekunden. Wiederholen: [2.12 Formeln umstellen](/lernen/mathe3/gleichungen/formeln-umstellen).
```

```aufgabe
id: p1-e-sinus
art: check
titel: Gegenkathete mit dem Sinus
niveau: 1
angabe: |
  In einem rechtwinkligen Dreieck ist die Hypotenuse $20\,\text{cm}$ lang. Ein spitzer Winkel beträgt $30^\circ$. Wie lang ist die Seite, die diesem Winkel gegenüberliegt (in cm)?
teile:
  - typ: zahl
    loesung: "20*sin(inRad(30))"
    einheit: "cm"
    anzeige: '10'
    fehler:
      - wert: "20*cos(inRad(30))"
        meldung: Du hast den Kosinus verwendet. Der Kosinus gehört zur **Ankathete**, also zur Seite, die am Winkel anliegt. Für die gegenüberliegende Seite brauchst du den Sinus.
hinweise:
  - '$\sin\alpha = \dfrac{\text{Gegenkathete}}{\text{Hypotenuse}}$.'
loesung: |
  Der Sinus eines Winkels ist Gegenkathete durch Hypotenuse. Also ist die Gegenkathete gleich Hypotenuse mal Sinus.
  ---
  $20\,\text{cm}\cdot\sin 30^\circ = 20\,\text{cm}\cdot 0{,}5 = 10\,\text{cm}$. Wiederholen: [5.1 Das rechtwinklige Dreieck](/lernen/mathe3/trigonometrie/das-rechtwinklige-dreieck).
```

## Wie Physik arbeitet

```aufgabe
id: p1-1-check
art: check
titel: "Vorwissen: Was ist eine überprüfbare Aussage?"
niveau: 1
angabe: |
  Welche der folgenden Aussagen kann man mit einer Messung **eindeutig** überprüfen?
teile:
  - typ: auswahl
    optionen:
      - "Der Stein fällt schnell."
      - "Der Stein fällt in der ersten Sekunde $4{,}9\\,\\text{m}$ tief."
      - "Der Stein fällt schneller als man denkt."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: „Schnell“ ist ein Gefühl, keine Messgröße. Für die eine Person ist es schnell, für die andere nicht. Erst eine Zahl mit Einheit kann man nachmessen.
      - wert: 2
        meldung: Was „man denkt“, ist von Person zu Person verschieden. Man kann es nicht mit einem Maßstab und einer Uhr nachprüfen.
hinweise:
  - Suche die Aussage, die eine Zahl und eine Einheit enthält.
loesung: |
  Überprüfbar ist nur eine Aussage, die angibt, **wie viel** passiert, also eine Zahl mit Einheit.
  ---
  „$4{,}9\,\text{m}$ in der ersten Sekunde“ kann jede Person mit Maßband und Stoppuhr nachmessen. Die anderen beiden Aussagen sind Eindrücke. Warum die Physik auf Zahlen besteht, erklärt dieser Abschnitt.
```

**Physik** ist die Wissenschaft von den grundlegenden Gesetzmäßigkeiten der unbelebten Natur. Sie fragt
nach Bewegung und Kräften, Wärme, Elektrizität, Licht und dem Aufbau der Materie. Ihr wichtigstes
Kennzeichen ist, dass sie **quantitativ** arbeitet. Quantitativ heißt: Sie gibt an, **wie viel** von
etwas da ist, mit einer Zahl und einer Einheit.

Eine physikalische Aussage lautet also nicht „der Stein fällt schnell“. Sie lautet „der Stein fällt in der
ersten Sekunde $4{,}9\,\text{m}$ tief, in den ersten zwei Sekunden $19{,}6\,\text{m}$“. Nur eine solche
Aussage kann jemand anderer nachmessen und bestätigen oder widerlegen.

### Der Erkenntnisweg der Physik

Physikalisches Wissen entsteht in einem Kreislauf aus fünf Schritten. Wir gehen ihn an einem Beispiel
durch: dem Fadenpendel, also einer Kugel an einem Faden, die hin und her schwingt.

1. **Beobachtung.** Ein Vorgang fällt auf. Ein Pendel schwingt erstaunlich gleichmäßig, auch wenn die
   Schwingungen langsam kleiner werden.
2. **Fragestellung und Hypothese.** Man fragt: Wovon hängt die Dauer einer Schwingung ab? Eine
   **Hypothese** ist eine begründete Vermutung, die man prüfen kann. Hier etwa: „Die Schwingungsdauer hängt
   von der Fadenlänge ab, aber nicht von der Masse der Kugel.“
3. **Experiment.** Man verändert gezielt **eine** Größe und misst, was passiert. Alle anderen Größen
   hält man fest.
4. **Modell.** Aus den Messdaten entsteht eine vereinfachte, meist mathematische Beschreibung. Beim
   Pendel ist das eine Formel für die Schwingungsdauer.
5. **Theorie.** Viele Modelle und Gesetze werden zu einem widerspruchsfreien Gebäude verbunden. Aus ihm
   folgen **neue Vorhersagen**. Diese prüft man wieder im Experiment, und der Kreislauf beginnt von vorn.

```aufgabe
id: p1-1-reihenfolge
art: check
titel: Den Erkenntnisweg ordnen
niveau: 1
angabe: |
  Bringe die Schritte des Erkenntniswegs in die richtige Reihenfolge.
teile:
  - typ: reihenfolge
    elemente: ["Beobachtung", "Hypothese", "Experiment", "Modell", "Theorie mit neuen Vorhersagen"]
hinweise:
  - Am Anfang steht etwas, das einem auffällt. Am Ende steht etwas, das neue Experimente anstößt.
loesung: |
  Zuerst fällt etwas auf (Beobachtung). Dann formuliert man eine prüfbare Vermutung (Hypothese) und prüft sie (Experiment).
  ---
  Aus den Daten entsteht ein Modell, mehrere Modelle bilden eine Theorie. Ihre Vorhersagen führen zu neuen Experimenten.
```

### Ein gutes Experiment

:::definition[Unabhängige, abhängige und konstant gehaltene Größe]
Die **unabhängige Größe** (auch unabhängige Variable) ist die Größe, die du im Experiment absichtlich
veränderst. Die **abhängige Größe** ist die Größe, die du misst, um die Wirkung zu sehen. Alle anderen
Größen, die das Ergebnis beeinflussen könnten, hältst du **konstant**. Man nennt sie Kontrollgrößen.

**Beispiel:** Du hängst nacheinander Kugeln mit $50\,\text{g}$, $100\,\text{g}$ und $200\,\text{g}$ an
denselben Faden. Die Masse ist die unabhängige Größe. Die Schwingungsdauer ist die abhängige Größe.
Fadenlänge und Auslenkung sind Kontrollgrößen.

**Kein gutes Experiment:** Du veränderst Masse **und** Fadenlänge gleichzeitig. Dann weißt du nicht,
welche der beiden Änderungen die Wirkung verursacht hat.
:::

Ein gutes Experiment ist außerdem **reproduzierbar**. Das heißt: Eine andere Person, an einem anderen Ort,
mit anderen Geräten, erhält im Rahmen der Messgenauigkeit dasselbe Ergebnis. Was nur einmal und nur bei
einer Person klappt, gilt in der Physik nicht als Ergebnis.

:::beispiel[Hängt die Schwingungsdauer eines Pendels von der Masse ab?]
**Plan:** Die Fadenlänge bleibt bei $0{,}50\,\text{m}$, die Auslenkung bei etwa $5^\circ$. Wir verändern
nur die Masse der Kugel. Gemessen wird die Zeit für $10$ Schwingungen.

**Messwerte:**

- $50\,\text{g}$: $14{,}2\,\text{s}$ für $10$ Schwingungen, also $T = 1{,}42\,\text{s}$.
- $100\,\text{g}$: $14{,}1\,\text{s}$, also $T = 1{,}41\,\text{s}$.
- $200\,\text{g}$: $14{,}2\,\text{s}$, also $T = 1{,}42\,\text{s}$.

**Warum zehn Schwingungen?** Beim Stoppen mit der Hand irrt man sich um etwa $0{,}2\,\text{s}$. Diese
Unsicherheit verteilt sich auf zehn Schwingungen. Für eine Schwingung bleiben
$0{,}2\,\text{s} : 10 = 0{,}02\,\text{s}$.

**Auswertung:** Die drei Werte unterscheiden sich höchstens um $0{,}01\,\text{s}$. Das ist weniger als
die Messunsicherheit von $0{,}02\,\text{s}$. Die Masse hat also keinen messbaren Einfluss.

**Antwort:** Die Schwingungsdauer hängt im Rahmen der Messgenauigkeit nicht von der Masse ab. Die
Hypothese ist bestätigt.
:::

:::achtung[Zwei Größen gleichzeitig verändert]
Eine Schülerin misst ein Pendel mit $50\,\text{g}$ an einem $0{,}50\,\text{m}$ langen Faden: $T = 1{,}42\,\text{s}$.
Dann hängt sie $200\,\text{g}$ an einen $1{,}00\,\text{m}$ langen Faden: $T = 2{,}01\,\text{s}$. Sie schließt:
„Schwerere Pendel schwingen langsamer.“

**Der Fehler:** Sie hat Masse und Länge gleichzeitig verändert. Die längere Schwingungsdauer kommt in
Wahrheit von der doppelten Fadenlänge. Bei gleicher Fadenlänge von $0{,}50\,\text{m}$ schwingen eine
$50$-g-Kugel und eine $200$-g-Kugel gleich schnell, beide mit $T = 1{,}42\,\text{s}$. **Richtig:** immer nur
eine Größe verändern und alle anderen konstant halten.
:::

```aufgabe
id: p1-variablen-zuordnen
titel: Welche Größe wird verändert?
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Du willst herausfinden, ob Tee in einer Porzellantasse langsamer abkühlt als in einer Glastasse. Du füllst beide Tassen mit gleich viel Tee von $80\,^\circ\text{C}$ und misst nach $10$ Minuten die Temperatur. Welche Größe ist die **unabhängige** Größe, also die, die du absichtlich veränderst?
teile:
  - typ: auswahl
    optionen:
      - "die Temperatur nach 10 Minuten"
      - "das Material der Tasse"
      - "die Teemenge"
      - "die Anfangstemperatur"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Die Temperatur nach 10 Minuten **misst** du. Sie ist die abhängige Größe, also die Wirkung, die du beobachten willst.
      - wert: 2
        meldung: Die Teemenge hältst du absichtlich gleich. Sie ist eine Kontrollgröße. Würdest du sie ändern, wüsstest du nicht, ob der Unterschied vom Material oder von der Menge kommt.
      - wert: 3
        meldung: Die Anfangstemperatur ist in beiden Tassen gleich, also eine Kontrollgröße. Verändert wird nur eine Größe.
hinweise:
  - Was ist der einzige Unterschied zwischen den beiden Tassen?
loesung: |
  **Ansatz:** Die unabhängige Größe ist die, in der sich die Versuche absichtlich unterscheiden.
  ---
  Der einzige gewollte Unterschied ist das **Material** der Tasse. Die Temperatur nach 10 Minuten ist die abhängige Größe. Teemenge und Anfangstemperatur sind Kontrollgrößen.
```

### Modell und Idealisierung

:::definition[Modell und Idealisierung]
Ein **physikalisches Modell** ist eine vereinfachte Beschreibung der Wirklichkeit. Es erfasst für eine
bestimmte Frage das Wesentliche und lässt Unwichtiges weg. Das bewusste Weglassen unwichtiger
Eigenschaften heißt **Idealisierung**.

**Beispiele:** Massenpunkt, starrer Körper, ideales Gas, Bewegung ohne Reibung, Lichtstrahl, punktförmige
Ladung.

**Kein Modell:** Ein Foto des Pendels ist kein Modell. Es lässt nichts weg und erklärt nichts. Man kann
damit nichts vorhersagen.
:::

Das wichtigste Modell der Mechanik ist der **Massenpunkt**. In der Prüfungsordnung heißt er „materieller
Punkt“. Man denkt sich die ganze Masse eines Körpers in einem einzigen Punkt vereinigt. Das ist erlaubt,
wenn Größe und Form des Körpers für die Frage keine Rolle spielen. Vor allem dürfen Drehungen des Körpers
um sich selbst unwichtig sein.

- **Massenpunkt erlaubt:** die Erde auf ihrer Bahn um die Sonne. Der Erdradius von $6370\,\text{km}$ ist
  winzig gegen den Bahnradius von $150\,000\,000\,\text{km}$.
- **Massenpunkt nicht erlaubt:** die Erde, wenn du Tag und Nacht erklären willst. Dann geht es gerade um
  ihre Drehung.

:::intuition
Ein Modell ist wie eine Landkarte. Eine Karte im Maßstab 1:1 wäre perfekt genau und völlig nutzlos. Die
Kunst besteht darin, genau so viel wegzulassen, dass die Frage noch richtig beantwortet wird.
:::

:::beispiel[Wann passt das Modell „freier Fall ohne Luftwiderstand“?]
Das Modell sagt für die Fallzeit aus der Höhe $h$ voraus: $t = \sqrt{\dfrac{2h}{g}}$. Dabei ist
$g = 9{,}81\,\text{m/s}^2$ die Fallbeschleunigung. Woher die Formel kommt, lernst du im
[Kapitel Kinematik](/lernen/physik1/kinematik).

**Schritt 1, Vorhersage für $h = 5{,}0\,\text{m}$:**
$t = \sqrt{\dfrac{2\cdot 5{,}0\,\text{m}}{9{,}81\,\text{m/s}^2}} = \sqrt{1{,}019\,\text{s}^2} = 1{,}0\,\text{s}$.
Die Meter kürzen sich, unter der Wurzel bleibt $\text{s}^2$.

**Schritt 2, Vergleich mit Messungen:** Ein Stein braucht gemessen $1{,}0\,\text{s}$. Ein flaches Blatt
Papier braucht etwa $3\,\text{s}$, also dreimal so lang.

**Schritt 3, Deutung:** Für den Stein ist der Luftwiderstand unwichtig, das Modell passt. Für das Blatt
ist der Luftwiderstand die wichtigste Kraft. Das Modell ist hier außerhalb seines Gültigkeitsbereichs.

**Antwort:** Ein Modell ist nicht „richtig“ oder „falsch“, sondern für eine Frage passend oder unpassend.
:::

```aufgabe
id: p1-modell-massenpunkt
titel: Modell Massenpunkt
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  In welchen Situationen darf man den genannten Körper als **Massenpunkt** behandeln? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "die Erde bei ihrem Umlauf um die Sonne"
      - "ein Kreisel, dessen Drehbewegung untersucht wird"
      - "ein Auto auf der Fahrt Wien–Salzburg, gesucht ist die Fahrzeit"
      - "eine Tür, die sich in den Angeln dreht"
      - "ein Satellit, dessen Umlaufdauer berechnet wird"
    richtig: [0, 2, 4]
    fehler:
      - wert: [0, 1, 2, 4]
        meldung: Beim Kreisel geht es gerade um seine **Drehung** um sich selbst. Ein Punkt kann sich nicht um sich selbst drehen. Das Modell Massenpunkt lässt genau das weg, was hier gefragt ist.
      - wert: [0, 4]
        meldung: Auch das Auto darf ein Massenpunkt sein. Seine $4\,\text{m}$ Länge spielen bei einer Strecke von $300\,\text{km}$ keine Rolle.
hinweise:
  - Frage bei jeder Situation, ob die Größe des Körpers oder seine Drehung um sich selbst für die Frage wichtig ist.
loesung: |
  **Kriterium:** Ein Massenpunkt ist erlaubt, wenn Größe und Form für die Frage keine Rolle spielen und Drehungen um sich selbst unwichtig sind.
  ---
  Erde um die Sonne und Satellit um die Erde: Die Körper sind winzig gegen ihren Bahnradius. Auto auf $300\,\text{km}$: Die $4\,\text{m}$ Autolänge sind unwichtig.
  ---
  Bei Kreisel und Tür ist gerade die Drehung das Thema. Dort versagt das Modell, man braucht das Modell „starrer Körper“.
```

```aufgabe
id: p1-experiment-planen
titel: Ein Experiment planen
niveau: 2
lernziel: 0
kompetenz: modellieren
angabe: |
  Du willst prüfen, ob die Schwingungsdauer eines Fadenpendels von der **Auslenkung** abhängt, also davon, wie weit du es am Anfang zur Seite ziehst. Beschreibe dein Experiment in drei bis fünf Sätzen: Was veränderst du, was hältst du konstant, was misst du, und wie machst du die Zeitmessung genauer?
teile:
  - typ: text
    muster: |
      Die unabhängige Größe ist die Auslenkung: Ich starte das Pendel nacheinander bei 5°, 10° und 20°. Konstant halte ich
      die Fadenlänge (gemessen bis zur Mitte der Kugel) und die Masse der Kugel. Die abhängige Größe ist die
      Schwingungsdauer T. Um den Einfluss meiner Reaktionszeit zu verkleinern, stoppe ich die Zeit für 10 Schwingungen und
      teile durch 10. Jede Messung wiederhole ich dreimal und bilde den Mittelwert.
hinweise:
  - Lege zuerst fest, welche Größe du veränderst und welche du misst.
  - Welche anderen Größen könnten die Schwingungsdauer beeinflussen und müssen deshalb gleich bleiben?
loesung: |
  **Größen festlegen:** Die Auslenkung wird verändert, die Schwingungsdauer $T$ wird gemessen.
  ---
  **Kontrollgrößen:** gleiche Fadenlänge (bis zur Kugelmitte gemessen), gleiche Masse, gleicher Ort. Sonst wüsstest du nicht, welche Änderung wirkt.
  ---
  **Genauigkeit:** Zeit für $10$ Schwingungen stoppen, dann verteilt sich die Reaktionsunsicherheit von etwa $0{,}2\,\text{s}$ auf zehn Schwingungen. Jede Messung mehrmals wiederholen und den Mittelwert bilden. Bei kleinen Auslenkungen bis etwa $15^\circ$ findet man keinen messbaren Einfluss.
```

### Gesetz, Theorie und Gültigkeitsbereich

Ein **Naturgesetz** ist ein vielfach im Experiment bestätigter, allgemeiner Zusammenhang zwischen Größen.
Ein Beispiel ist das Ohmsche Gesetz $U = R\cdot I$ aus der Elektrizitätslehre. Eine **Theorie** verbindet
viele Gesetze und erklärt sie aus wenigen Grundannahmen. Die klassische Mechanik zum Beispiel leitet
Planetenbahnen, Pendelschwingungen und Wurfbahnen aus den drei Newtonschen Axiomen ab, also aus drei Grundgesetzen der Bewegung (bei den Planeten
kommt noch das Gravitationsgesetz dazu). Diese lernst du im
[Kapitel Dynamik](/lernen/physik1/dynamik).

Eine Theorie lässt sich **nie endgültig beweisen**. Das nächste Experiment könnte ihr ja widersprechen.
Sie lässt sich aber durch ein einziges reproduzierbares Experiment **widerlegen**. Das Fachwort dafür ist
**falsifizieren** (von lateinisch *falsus*, falsch). Eine gute Theorie macht deshalb riskante Vorhersagen,
die man überprüfen kann.

Jedes Gesetz hat einen **Gültigkeitsbereich**, also einen Bereich, in dem es die Messungen genau genug
beschreibt. Die Newtonsche Mechanik versagt bei Geschwindigkeiten nahe der Lichtgeschwindigkeit. Dort gilt
die Relativitätstheorie. Im Bereich der Atome gilt die Quantenphysik. Das macht die Newtonsche Mechanik
nicht „falsch“. Für Autos, Brücken und Raketen liefert sie hervorragende Ergebnisse.

:::achtung[„Newton ist widerlegt, also falsch“]
Ein Mitschüler sagt: „Seit Einstein ist die Newtonsche Mechanik falsch. Man darf sie nicht mehr verwenden.“

**Nachgerechnet:** Wie groß ist der relative Unterschied zwischen beiden Theorien bei einem Auto mit
$v = 30\,\text{m/s}$? Er beträgt ungefähr $\dfrac{v^2}{2c^2}$. Dabei ist
$c = 3\cdot 10^{8}\,\text{m/s}$ die Lichtgeschwindigkeit:
$$\frac{(30\,\text{m/s})^2}{2\cdot(3\cdot 10^{8}\,\text{m/s})^2} = \frac{900}{1{,}8\cdot 10^{17}} = 5\cdot 10^{-15}.$$
Der Unterschied liegt bei fünf Billiardstel. Kein Messgerät in einer Werkstatt kann das sehen.

**Richtig:** Die Newtonsche Mechanik gilt in ihrem Gültigkeitsbereich ausgezeichnet. Die
Relativitätstheorie geht bei kleinen Geschwindigkeiten in sie über.
:::

```aufgabe
id: p1-falsifizieren
titel: Beweisen oder widerlegen?
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  Welche Aussagen über physikalische Theorien sind richtig? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Eine Theorie gilt als bewiesen, wenn sie in 1000 Experimenten bestätigt wurde."
      - "Ein einziges reproduzierbares Experiment kann eine Theorie widerlegen."
      - "Die Newtonsche Mechanik ist falsch, weil es die Relativitätstheorie gibt."
      - "Jedes physikalische Gesetz hat einen Gültigkeitsbereich."
      - "Gute Theorien machen überprüfbare Vorhersagen."
    richtig: [1, 3, 4]
    fehler:
      - wert: [0, 1, 3, 4]
        meldung: Viele Bestätigungen machen eine Theorie glaubwürdig, aber nicht bewiesen. Das nächste Experiment könnte ihr widersprechen.
      - wert: [1, 2, 3, 4]
        meldung: Die Newtonsche Mechanik ist nicht falsch, sie hat einen Gültigkeitsbereich. Bei Alltagsgeschwindigkeiten weicht sie nur um winzige Bruchteile von der Relativitätstheorie ab.
hinweise:
  - Denk an den Unterschied zwischen „noch nicht widerlegt“ und „bewiesen“.
  - Was bedeutet „Gültigkeitsbereich“ für eine ältere Theorie?
loesung: |
  **Ansatz:** Experimente können eine Theorie bestätigen oder widerlegen, aber nicht endgültig beweisen.
  ---
  Richtig sind: Ein reproduzierbares Gegen-Experiment widerlegt eine Theorie. Jedes Gesetz hat einen Gültigkeitsbereich. Gute Theorien machen überprüfbare Vorhersagen.
  ---
  Falsch sind „1000 Bestätigungen beweisen“ und „Newton ist falsch“. Die Newtonsche Mechanik ist ein Grenzfall der Relativitätstheorie für kleine Geschwindigkeiten.
```

### Gedankenexperimente

Manche Fragen kann man nicht direkt im Labor prüfen. Dann hilft ein **Gedankenexperiment**: ein
Experiment, das man nur im Kopf durchführt und streng logisch zu Ende denkt. Das berühmteste stammt von
Galileo Galilei (um 1600). Es widerlegt die alte Lehre, dass schwere Körper schneller fallen als leichte.

1. **Annahme:** Schwere Körper fallen schneller als leichte.
2. **Gedankenversuch:** Wir binden einen schweren und einen leichten Stein mit einer Schnur zusammen.
3. **Erste Folgerung:** Der leichte Stein fällt langsamer und bremst den schweren. Das Paar fällt also
   **langsamer** als der schwere Stein allein.
4. **Zweite Folgerung:** Das Paar ist aber schwerer als der schwere Stein allein. Nach der Annahme fällt es
   also **schneller**.
5. **Widerspruch:** Beides zugleich geht nicht. Die Annahme ist falsch. Ohne Luftwiderstand fallen alle
   Körper gleich schnell.

Was haben wir gezeigt? Ohne ein einziges Messgerät hat reines Nachdenken eine Behauptung widerlegt. Das
Experiment muss die Vorhersage aber trotzdem bestätigen. Im luftleeren Raum fallen Feder und Hammer
tatsächlich gleich schnell. Astronauten haben das 1971 auf dem Mond vorgeführt.

```aufgabe
id: p1-gedankenexperiment-galilei
titel: Galileis Gedankenexperiment erklären
niveau: 3
lernziel: 0
kompetenz: begruenden
angabe: |
  Erkläre Galileis Gedankenexperiment mit den zwei zusammengebundenen Steinen. Zeige, warum die Annahme „schwere Körper fallen schneller als leichte“ zu einem Widerspruch führt. Nenne außerdem, warum man das Ergebnis trotzdem noch im Experiment prüfen muss.
teile:
  - typ: text
    muster: |
      Angenommen, schwere Körper fallen schneller. Bindet man einen schweren und einen leichten Stein zusammen, dann
      bremst der langsamere leichte Stein den schweren. Das Paar müsste langsamer fallen als der schwere Stein allein.
      Zugleich ist das Paar schwerer als der schwere Stein, müsste also nach der Annahme schneller fallen. Beides kann
      nicht gleichzeitig gelten, also ist die Annahme falsch: Ohne Luftwiderstand fallen alle Körper gleich schnell.
      Ein Gedankenexperiment zeigt nur, dass eine Annahme in sich widersprüchlich ist. Ob die Natur sich so verhält,
      muss man messen, zum Beispiel mit Feder und Hammer im Vakuum.
hinweise:
  - Was folgt aus der Annahme für das Paar, wenn du den leichten Stein als „Bremse“ betrachtest?
  - Was folgt aus der Annahme für das Paar, wenn du nur auf seine Gesamtmasse schaust?
loesung: |
  **Annahme:** Schwere Körper fallen schneller als leichte.
  ---
  **Erste Folgerung:** Der leichte Stein fällt langsamer und bremst den schweren. Das Paar fällt langsamer als der schwere Stein allein.
  ---
  **Zweite Folgerung:** Das Paar ist schwerer als der schwere Stein allein. Nach der Annahme fällt es schneller.
  ---
  **Schluss:** Die beiden Folgerungen widersprechen sich, also ist die Annahme falsch. Das Experiment bleibt nötig, weil reines Denken nur Widersprüche aufdeckt. Ob die Natur wirklich so ist, zeigt erst die Messung im Vakuum.
```

### Fragestellungen und Probleme der Physik

Die Physik umfasst riesige Größenbereiche. Sie reichen vom Proton mit etwa $10^{-15}\,\text{m}$ bis zum
beobachtbaren Universum mit etwa $10^{26}\,\text{m}$. Sie ist die Grundlage aller Technik:

- Elektromotor und Generator beruhen auf dem Elektromagnetismus.
- Computerchip und Solarzelle beruhen auf der Halbleiterphysik.
- Kühlschrank und Verbrennungsmotor beruhen auf der Wärmelehre.
- GPS funktioniert nur, weil man die Relativitätstheorie berücksichtigt.

Neben dem Experiment arbeitet die Physik heute mit der **Simulation**. Das ist die Berechnung eines
Modells am Computer, etwa für Wettervorhersagen oder Crashtests. Eine dritte Arbeitsweise ist die
**Abschätzung**, die du in diesem Kapitel noch kennenlernst. Offene Probleme reichen von der Natur der
Dunklen Materie bis zu technischen Fragen wie der Speicherung von Energie.

:::merke[Der Erkenntnisweg in Kurzform]
- Beobachtung, Hypothese, Experiment, Modell, Theorie, dann neue Vorhersagen und neue Experimente.
- Im Experiment veränderst du genau eine Größe, misst eine zweite und hältst alle anderen konstant.
- Ein Modell lässt bewusst Unwichtiges weg und gilt nur in seinem Gültigkeitsbereich.
- Eine Theorie kann widerlegt, aber nie endgültig bewiesen werden.
:::

```reflexion
frage: Warum kann eine physikalische Theorie durch ein einziges Experiment widerlegt, aber durch tausend Experimente nicht bewiesen werden? Erkläre es in zwei bis drei Sätzen.
antwort: |
  Eine Theorie macht eine allgemeine Aussage, sie soll für **alle** Fälle gelten. Tausend bestätigte Fälle zeigen
  nur, dass sie in diesen tausend Fällen stimmt. Der tausendunderste Fall könnte anders ausgehen. Ein einziger
  reproduzierbarer Fall, der der Vorhersage widerspricht, zeigt dagegen sicher, dass die allgemeine Aussage
  nicht für alle Fälle stimmt.
```

```aufgabe
id: p1-modell-federball
titel: Passt das Modell für einen Federball?
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Ein Federball wird aus $2{,}5\,\text{m}$ Höhe fallen gelassen. Gemessen wird eine Fallzeit von $1{,}9\,\text{s}$. Das Modell „freier Fall ohne Luftwiderstand“ sagt $t = \sqrt{2h/g}$ voraus ($g = 9{,}81\,\text{m/s}^2$).

  a) Berechne die Fallzeit nach dem Modell in s (zwei signifikante Stellen).

  b) Um welchen Faktor ist die gemessene Zeit länger?
teile:
  - typ: zahl
    label: a) Fallzeit im Modell
    loesung: "sqrt(2*2.5/9.81)"
    einheit: "s"
    toleranz: 0.005
    anzeige: '0{,}71'
    fehler:
      - wert: "2*2.5/9.81"
        meldung: Du hast die Wurzel vergessen. Unter der Wurzel steht $\text{s}^2$, erst die Wurzel ergibt Sekunden.
      - wert: "sqrt(2.5/9.81)"
        meldung: Der Faktor $2$ unter der Wurzel fehlt. Die Formel lautet $t = \sqrt{2h/g}$.
  - typ: zahl
    label: b) Faktor gemessen durch Modell
    loesung: "1.9/sqrt(2*2.5/9.81)"
    toleranz: 0.05
    anzeige: '2{,}7'
    fehler:
      - wert: "sqrt(2*2.5/9.81)/1.9"
        meldung: Du hast den Kehrwert gebildet. Gefragt ist, wie oft die Modellzeit in die gemessene Zeit passt, also gemessen durch Modell.
hinweise:
  - Setze $h = 2{,}5\,\text{m}$ und $g = 9{,}81\,\text{m/s}^2$ in die Formel ein. Prüfe, dass unter der Wurzel $\text{s}^2$ steht.
  - Für b) teilst du die gemessene Zeit durch die Modellzeit.
loesung: |
  **Ansatz:** Wir vergleichen die Vorhersage des Modells mit der Messung. Weichen sie stark voneinander ab, ist das Modell für diesen Körper ungeeignet.
  ---
  **a)** $t = \sqrt{\dfrac{2\cdot 2{,}5\,\text{m}}{9{,}81\,\text{m/s}^2}} = \sqrt{0{,}510\,\text{s}^2} = 0{,}71\,\text{s}$. Die Meter kürzen sich.
  ---
  **b)** $\dfrac{1{,}9\,\text{s}}{0{,}714\,\text{s}} \approx 2{,}7$. Die Sekunden kürzen sich, der Faktor hat keine Einheit.
  ---
  **Deutung:** Der Federball braucht fast dreimal so lang. Für ihn ist der Luftwiderstand entscheidend, das Modell ohne Luftwiderstand passt nicht.
```

```aufgabe
id: p1-messung-widerspricht
titel: Eine Messung widerspricht der Vorhersage
niveau: 3
lernziel: 0
kompetenz: begruenden
angabe: |
  Eine Theorie sagt für ein Pendel $T = 2{,}01\,\text{s}$ voraus. Eine Studentin misst einmal $T = 2{,}35\,\text{s}$. Was ist der **beste** nächste Schritt?
teile:
  - typ: auswahl
    optionen:
      - "Die Theorie ist widerlegt. Man sollte sie sofort verwerfen."
      - "Die Messung ist sicher falsch, weil die Theorie gut bestätigt ist. Man ignoriert sie."
      - "Man prüft die Messung auf Fehler, wiederholt sie und lässt sie von anderen wiederholen. Erst eine reproduzierbare Abweichung widerlegt die Theorie."
      - "Man bildet den Mittelwert aus Vorhersage und Messung, also etwa 2,18 s."
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Eine **einzelne** Messung kann einen Fehler enthalten, etwa eine falsch gemessene Fadenlänge. Widerlegen kann nur ein **reproduzierbares** Ergebnis.
      - wert: 1
        meldung: Eine Messung zu ignorieren, weil sie nicht ins Bild passt, ist unwissenschaftlich. So wurden schon wichtige Entdeckungen übersehen.
      - wert: 3
        meldung: Eine Vorhersage und eine Messung kann man nicht mitteln. Das eine ist eine Theorie, das andere ein Messwert. Der Mittelwert hätte keine Bedeutung.
hinweise:
  - Was unterscheidet eine einzelne Messung von einem reproduzierbaren Ergebnis?
  - Welche Fehlerquellen könnte es bei der Messung geben?
loesung: |
  **Ansatz:** Eine Theorie wird durch ein **reproduzierbares** Experiment widerlegt, nicht durch eine einzelne Messung.
  ---
  Die Abweichung beträgt $0{,}34\,\text{s}$, also etwa $17\,\%$. Das ist viel. Mögliche Ursachen sind eine falsch gemessene Fadenlänge, eine zu große Auslenkung oder ein Ablesefehler.
  ---
  **Antwort:** Erst die Messung prüfen und wiederholen, dann von anderen wiederholen lassen. Bleibt die Abweichung bestehen, muss die Theorie überarbeitet werden.
```

```aufgabe
id: p1-experiment-gefuehrt
titel: Wie genau ist eine Pendelmessung?
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Du stoppst die Zeit für $20$ Schwingungen eines Pendels und erhältst $36{,}4\,\text{s}$. Deine Reaktionsunsicherheit beim Starten und Stoppen beträgt zusammen etwa $0{,}2\,\text{s}$.

  a) Wie groß ist die Schwingungsdauer $T$ in s?

  b) Wie groß ist die Unsicherheit von $T$ in s?
teile:
  - typ: zahl
    label: a) Schwingungsdauer
    loesung: "36.4/20"
    einheit: "s"
    anzeige: '1{,}82'
    fehler:
      - wert: "36.4"
        meldung: Das ist die Zeit für alle $20$ Schwingungen. Für eine Schwingung musst du noch durch $20$ teilen.
  - typ: zahl
    label: b) Unsicherheit von T
    loesung: "0.2/20"
    einheit: "s"
    anzeige: '0{,}01'
    fehler:
      - wert: "0.2"
        meldung: Die $0{,}2\,\text{s}$ betreffen die Gesamtzeit. Sie verteilen sich auf alle $20$ Schwingungen, also wird die Unsicherheit für eine Schwingung kleiner.
hinweise:
  - Eine Schwingung dauert ein Zwanzigstel der Gesamtzeit.
  - Die Unsicherheit der Gesamtzeit verteilt sich ebenso auf die $20$ Schwingungen.
gefuehrt:
  - text: Welche Zeit hast du direkt gemessen, eine Schwingung oder alle 20? Gib die gemessene Zeit in s ein.
    teil: { typ: zahl, loesung: "36.4" }
    erklaerung: Gestoppt wurde die Zeit für alle $20$ Schwingungen, also $36{,}4\,\text{s}$.
  - text: Berechne die Dauer einer Schwingung in s.
    teil: { typ: zahl, loesung: "36.4/20" }
    erklaerung: '$T = 36{,}4\,\text{s} / 20 = 1{,}82\,\text{s}$.'
  - text: Die Reaktionsunsicherheit von $0{,}2\,\text{s}$ steckt in der Gesamtzeit. Wie groß ist sie für eine Schwingung (in s)?
    teil: { typ: zahl, loesung: "0.2/20" }
    erklaerung: '$0{,}2\,\text{s} / 20 = 0{,}01\,\text{s}$. Die Unsicherheit wird genauso geteilt wie die Zeit.'
  - text: Überlege, wie groß die Unsicherheit wäre, wenn du nur eine einzige Schwingung gestoppt hättest.
    erklaerung: Dann wären es die vollen $0{,}2\,\text{s}$, also mehr als $10\,\%$ von $1{,}82\,\text{s}$. Mit $20$ Schwingungen sind es nur etwa $0{,}5\,\%$.
loesung: |
  **Ansatz:** Gemessen wurde die Zeit für $20$ Schwingungen. Zeit und Unsicherheit werden beide durch $20$ geteilt.
  ---
  **a)** $T = \dfrac{36{,}4\,\text{s}}{20} = 1{,}82\,\text{s}$.
  ---
  **b)** $\Delta T = \dfrac{0{,}2\,\text{s}}{20} = 0{,}01\,\text{s}$. Ergebnis: $T = (1{,}82 \pm 0{,}01)\,\text{s}$.
  ---
  **Plausibilität:** Bei einer einzelnen Schwingung wäre die Unsicherheit $0{,}2\,\text{s}$, also über $10\,\%$. Deshalb stoppt man immer viele Schwingungen.
```

## Physikalische Größen und das SI

```aufgabe
id: p1-2-check
art: check
titel: "Vorwissen: negative Exponenten"
niveau: 1
angabe: |
  Die Einheit der Beschleunigung ist $\dfrac{\text{m}}{\text{s}^2}$. Man schreibt sie auch als $\text{m}\cdot\text{s}^{n}$. Wie lautet $n$?
teile:
  - typ: zahl
    label: '$n$'
    loesung: "-2"
    fehler:
      - wert: "2"
        meldung: Die Sekunden stehen im **Nenner**. Ein Faktor im Nenner bekommt beim Hochholen einen negativen Exponenten, denn $\frac{1}{a^2} = a^{-2}$.
hinweise:
  - '$\dfrac{1}{a^{k}} = a^{-k}$.'
loesung: |
  Eine Potenz im Nenner schreibt man mit negativem Exponenten in den Zähler: $\dfrac{1}{\text{s}^2} = \text{s}^{-2}$.
  ---
  Also $\dfrac{\text{m}}{\text{s}^2} = \text{m}\cdot\text{s}^{-2}$ und $n = -2$. Diese Schreibweise brauchst du in diesem Abschnitt ständig. Wiederholen: [1.9 Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln).
```

Messen heißt vergleichen. Der Satz „Der Tisch ist $1{,}2\,\text{m}$ lang“ bedeutet: Der Tisch ist
$1{,}2$-mal so lang wie die festgelegte Vergleichslänge „ein Meter“. Diese Vergleichsgröße heißt
**Einheit**.

:::definition[Physikalische Größe]
Eine **physikalische Größe** ist eine messbare Eigenschaft eines Körpers oder eines Vorgangs. Sie ist das
Produkt aus **Zahlenwert** und **Einheit**:
$$G = \{G\}\cdot[G].$$
Dabei ist $G$ die Größe, $\{G\}$ (geschweifte Klammern) ihr Zahlenwert und $[G]$ (eckige Klammern) ihre
Einheit.

**Beispiel:** $m = 2{,}5\,\text{kg}$. Der Zahlenwert ist $\{m\} = 2{,}5$, die Einheit ist $[m] = \text{kg}$.

**Keine physikalische Größe:** „Schönheit“ oder „Lieblingsfarbe“. Dafür gibt es keine festgelegte
Einheit und kein Messverfahren, das bei allen Menschen dasselbe Ergebnis liefert.
:::

Eine Zahl ohne Einheit ist in der Physik keine Antwort. „Die Geschwindigkeit ist $20$“ sagt nichts. Es
könnten $20\,\text{m/s}$ oder $20\,\text{km/h}$ sein, und das ist ein Unterschied um den Faktor $3{,}6$.
Ausnahmen sind echte Verhältnisgrößen wie ein Wirkungsgrad von $0{,}35$.

Für die Schreibweise gibt es feste Regeln. Das **Formelzeichen** steht kursiv ($m$, $v$, $t$). Die
**Einheit** steht aufrecht ($\text{kg}$, $\text{m/s}$, $\text{s}$). Zwischen Zahl und Einheit steht ein
Leerzeichen: $2{,}5\,\text{kg}$, nicht $2{,}5\text{kg}$.

```aufgabe
id: p1-2-schreibweise
art: check
titel: Größen richtig schreiben
niveau: 1
angabe: |
  Welche Angabe ist eine vollständige und richtig geschriebene physikalische Größe?
teile:
  - typ: auswahl
    optionen:
      - "Die Geschwindigkeit ist 20."
      - '$v = 20\,\text{m/s}$'
      - '$v = 20\text{ms}$'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Hier fehlt die Einheit. $20\,\text{m/s}$ und $20\,\text{km/h}$ unterscheiden sich um den Faktor $3{,}6$.
      - wert: 2
        meldung: '„ms“ bedeutet Millisekunde, also eine Zeit. Meter pro Sekunde schreibt man $\text{m/s}$, mit Leerzeichen zwischen Zahl und Einheit.'
hinweise:
  - Eine Größe ist Zahlenwert mal Einheit.
loesung: |
  Eine Größe braucht Zahlenwert **und** Einheit, getrennt durch ein Leerzeichen.
  ---
  Richtig ist $v = 20\,\text{m/s}$. Ohne Einheit fehlt die Hälfte der Information, und „ms“ wäre eine Millisekunde.
```

### Die sieben Basisgrößen

Das **Internationale Einheitensystem** heißt kurz **SI** (französisch *Système international d'unités*).
Es legt sieben **Basisgrößen** fest. Alle anderen Größen setzt man aus ihnen zusammen.

- **Länge** (Formelzeichen $l$ oder $s$): Einheit Meter, Zeichen m, festgelegt über die Lichtgeschwindigkeit $c$.
- **Masse** ($m$): Einheit Kilogramm, Zeichen kg, festgelegt über die Planck-Konstante $h$.
- **Zeit** ($t$): Einheit Sekunde, Zeichen s, festgelegt über eine Schwingung im Cäsium-Atom.
- **Elektrische Stromstärke** ($I$): Einheit Ampere, Zeichen A, festgelegt über die Elementarladung $e$.
- **Temperatur** ($T$): Einheit Kelvin, Zeichen K, festgelegt über die Boltzmann-Konstante $k_B$.
- **Stoffmenge** ($n$): Einheit Mol, Zeichen mol, festgelegt über die Avogadro-Konstante $N_A$.
- **Lichtstärke** ($I_v$): Einheit Candela, Zeichen cd, festgelegt über eine feste Lichtausbeute.

Seit 2019 sind alle sieben Einheiten über **feste Werte von Naturkonstanten** definiert. Vorher war das
Kilogramm die Masse eines Metallzylinders bei Paris, des „Urkilogramms“. Dieser Zylinder hat im Lauf der
Jahrzehnte winzige Mengen Masse verloren oder gewonnen. Eine Naturkonstante dagegen ist überall und zu
jeder Zeit gleich.

Beachte: Im SI ist die **Stromstärke** die Basisgröße, nicht die Ladung. Die Ladung ist abgeleitet. Sie
ist Stromstärke mal Zeit, $Q = I\cdot t$. Deshalb gilt $1\,\text{C} = 1\,\text{A}\cdot\text{s}$. Das C
steht für Coulomb, die Einheit der Ladung.

```aufgabe
id: p1-basisgroessen
titel: Basisgrößen erkennen
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Welche der folgenden Größen sind **Basisgrößen** des SI? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Masse"
      - "Kraft"
      - "elektrische Stromstärke"
      - "elektrische Ladung"
      - "Temperatur"
      - "Energie"
      - "Stoffmenge"
    richtig: [0, 2, 4, 6]
    fehler:
      - wert: [0, 2, 3, 4, 6]
        meldung: Die Ladung ist im SI **abgeleitet**, $Q = I\cdot t$. Basisgröße ist die Stromstärke.
      - wert: [0, 1, 2, 4, 6]
        meldung: Die Kraft ist abgeleitet. Sie entsteht aus Masse und Beschleunigung, $F = m\cdot a$.
hinweise:
  - Es gibt genau sieben Basisgrößen. Zu ihnen gehören Länge, Masse und Zeit.
loesung: |
  Die sieben Basisgrößen sind Länge, Masse, Zeit, Stromstärke, Temperatur, Stoffmenge und Lichtstärke.
  ---
  Kraft ($F = m a$), Ladung ($Q = I t$) und Energie ($W = F s$) sind abgeleitet. Im SI ist die **Stromstärke** Basisgröße, nicht die Ladung.
```

### Abgeleitete Größen

:::definition[Abgeleitete Größe]
Eine **abgeleitete Größe** entsteht aus Basisgrößen über eine **Definitionsgleichung**. Ihre Einheit
ergibt sich aus dieser Gleichung, indem man die Einheiten einsetzt.

**Beispiel:** Die Geschwindigkeit ist definiert als Weg durch Zeit, $v = \dfrac{s}{t}$. Also ist ihre
Einheit $\dfrac{\text{m}}{\text{s}}$.

**Keine abgeleitete Größe:** Die Zeit. Sie ist eine Basisgröße und wird nicht aus anderen Größen gebildet.
:::

Viele abgeleitete Einheiten haben eigene Namen zu Ehren von Forschern. Die wichtigsten sind:

- **Kraft** $F = m\cdot a$: Newton, $1\,\text{N} = 1\,\text{kg}\,\text{m}\,\text{s}^{-2}$.
- **Energie und Arbeit** $W = F\cdot s$: Joule, $1\,\text{J} = 1\,\text{N}\,\text{m} = 1\,\text{kg}\,\text{m}^2\,\text{s}^{-2}$.
- **Leistung** $P = W/t$: Watt, $1\,\text{W} = 1\,\text{J/s} = 1\,\text{kg}\,\text{m}^2\,\text{s}^{-3}$.
- **Druck** $p = F/A$: Pascal, $1\,\text{Pa} = 1\,\text{N/m}^2 = 1\,\text{kg}\,\text{m}^{-1}\,\text{s}^{-2}$.
- **Frequenz** $f = 1/T$: Hertz, $1\,\text{Hz} = 1\,\text{s}^{-1}$.
- **Ladung** $Q = I\cdot t$: Coulomb, $1\,\text{C} = 1\,\text{A}\,\text{s}$.
- **Spannung** $U = W/Q$: Volt, $1\,\text{V} = 1\,\text{J/C}$.

Dabei ist $m$ die Masse, $a$ die Beschleunigung, $s$ der Weg, $t$ die Zeit, $A$ eine Fläche, $T$ die
Dauer einer Schwingung und $I$ die Stromstärke. Du musst diese Liste nicht auswendig lernen. Du musst sie
**herleiten** können. Das geht immer gleich, wie das folgende Beispiel zeigt.

:::beispiel[Das Watt in Basiseinheiten]
**Schritt 1, Definitionsgleichungen sammeln:** $P = \dfrac{W}{t}$, dabei $W = F\cdot s$ und $F = m\cdot a$.

**Schritt 2, Einheiten einsetzen:** Die Einheit der Kraft ist
$\text{kg}\cdot\dfrac{\text{m}}{\text{s}^2}$. Die des Weges ist m, die der Zeit s.

**Schritt 3, zusammenfassen:**
$$[P] = \frac{[F]\cdot[s]}{[t]} = \frac{\text{kg}\cdot\frac{\text{m}}{\text{s}^2}\cdot\text{m}}{\text{s}} = \text{kg}\,\text{m}^2\,\text{s}^{-3}.$$
Im Zähler stehen zweimal Meter, das ergibt $\text{m}^2$. Im Nenner stehen $\text{s}^2$ und noch einmal s,
das ergibt $\text{s}^3$.

**Antwort:** $1\,\text{W} = 1\,\text{kg}\,\text{m}^2\,\text{s}^{-3}$.
:::

:::merke[Rezept: Einheit einer abgeleiteten Größe bestimmen]
1. Definitionsgleichung hinschreiben, bei Bedarf eine Kette von Gleichungen.
2. Für jede Größe ihre Einheit einsetzen.
3. Gleiche Einheiten zusammenfassen und Potenzen bilden.
:::

### Einheiten außerhalb des SI

Einige Einheiten gehören nicht zum SI, sind aber erlaubt und üblich. Du musst sie umrechnen können.

- Liter: $1\,\text{L} = 1\,\text{dm}^3 = 10^{-3}\,\text{m}^3$.
- Tonne: $1\,\text{t} = 1000\,\text{kg}$.
- Stunde: $1\,\text{h} = 3600\,\text{s}$.
- Kilowattstunde: $1\,\text{kWh} = 1000\,\text{W}\cdot 3600\,\text{s} = 3{,}6\cdot 10^{6}\,\text{J}$.
- Bar: $1\,\text{bar} = 10^5\,\text{Pa}$.
- Elektronvolt: $1\,\text{eV} = 1{,}602\cdot 10^{-19}\,\text{J}$.

Die Kilowattstunde ist eine **Energie**, keine Leistung. Sie ist die Energie, die ein Gerät mit
$1000\,\text{W}$ in einer Stunde umsetzt.

:::beispiel[Wie viel Energie braucht ein Wasserkocher?]
Ein Wasserkocher mit $2000\,\text{W}$ läuft $3$ Minuten. Wie viel Energie setzt er um, in Joule und in kWh?

**Schritt 1, Zeit in Sekunden:** $t = 3\cdot 60\,\text{s} = 180\,\text{s}$.

**Schritt 2, Energie in Joule:** Aus $P = W/t$ folgt durch Multiplizieren mit $t$ die Formel $W = P\cdot t$.
$W = 2000\,\text{W}\cdot 180\,\text{s} = 360\,000\,\text{J}$, denn $\text{W}\cdot\text{s} = \text{J}$.

**Schritt 3, in kWh umrechnen:** $\dfrac{360\,000\,\text{J}}{3{,}6\cdot 10^{6}\,\text{J/kWh}} = 0{,}1\,\text{kWh}$.

**Antwort:** Der Wasserkocher setzt $360\,\text{kJ}$ um, das sind $0{,}1\,\text{kWh}$. Bei $0{,}30$ Euro pro
kWh kostet das $3$ Cent.
:::

:::achtung[Watt mal Minuten ist keine Kilowattstunde]
Ein Schüler rechnet für den Wasserkocher: $2000\,\text{W}\cdot 3\,\text{min} = 6000\,\text{kWh}$.

**Der Fehler:** Er hat Watt statt Kilowatt und Minuten statt Stunden eingesetzt und trotzdem „kWh“
dazugeschrieben. **Richtig:** $2\,\text{kW}\cdot 0{,}05\,\text{h} = 0{,}1\,\text{kWh}$. Sein Ergebnis ist um
den Faktor $60\,000$ zu groß. Schreib die Einheiten in jedem Schritt mit, dann fällt so etwas auf.
:::

:::beispiel[Wie viel Ladung steckt in einem Handyakku?]
Auf einem Handyakku steht $4000\,\text{mAh}$ (Milliamperestunden). Wie viel Ladung in Coulomb ist das?

**Schritt 1, Bedeutung:** mAh ist Stromstärke mal Zeit, also eine **Ladung**, denn $Q = I\cdot t$.

**Schritt 2, in SI umrechnen:** $4000\,\text{mA} = 4\,\text{A}$ und $1\,\text{h} = 3600\,\text{s}$.

**Schritt 3, rechnen:** $Q = 4\,\text{A}\cdot 3600\,\text{s} = 14\,400\,\text{A}\,\text{s} = 14\,400\,\text{C}$.

**Antwort:** Der Akku kann $14\,400\,\text{C}$ Ladung liefern, zum Beispiel $4\,\text{A}$ eine Stunde lang.
:::

:::achtung[Newton falsch hergeleitet]
Eine Schülerin will die Einheit der Kraft herleiten und schreibt $F = m\cdot v$, also
$1\,\text{N} = 1\,\text{kg}\cdot\text{m/s}$.

**Der Fehler:** In der Definitionsgleichung steht die Beschleunigung $a$, nicht die Geschwindigkeit $v$.
$\text{kg}\cdot\text{m/s}$ ist die Einheit des Impulses. **Richtig:** $F = m\cdot a$ ergibt
$1\,\text{N} = 1\,\text{kg}\cdot\text{m/s}^2$.
:::

```aufgabe
id: p1-basiseinheiten-joule
titel: Joule in Basiseinheiten
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Welche Darstellung von $1\,\text{J}$ in SI-Basiseinheiten ist richtig?
teile:
  - typ: auswahl
    optionen:
      - '$\text{kg}\,\text{m}\,\text{s}^{-2}$'
      - '$\text{kg}\,\text{m}^2\,\text{s}^{-2}$'
      - '$\text{kg}\,\text{m}^2\,\text{s}^{-3}$'
      - '$\text{kg}\,\text{m}^{-1}\,\text{s}^{-2}$'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Das ist das Newton, also eine Kraft. Ein Joule ist Kraft **mal Weg**, dazu kommt noch ein Meter.
      - wert: 2
        meldung: Das ist das Watt, also Energie pro Sekunde. Ein Joule hat eine Sekunde weniger im Nenner.
      - wert: 3
        meldung: Das ist das Pascal, also Kraft pro Fläche.
hinweise:
  - '$1\,\text{J} = 1\,\text{N}\cdot\text{m}$, und $1\,\text{N} = 1\,\text{kg}\,\text{m}\,\text{s}^{-2}$.'
loesung: |
  Die Arbeit ist Kraft mal Weg, $W = F\cdot s$, also $1\,\text{J} = 1\,\text{N}\cdot\text{m}$.
  ---
  $1\,\text{J} = 1\,\text{kg}\,\dfrac{\text{m}}{\text{s}^2}\cdot\text{m} = 1\,\text{kg}\,\text{m}^2\,\text{s}^{-2}$. Die anderen Antworten sind Newton, Watt und Pascal.
```

```aufgabe
id: p1-einheit-kuerzen
titel: Einheiten kürzen
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Am Ende einer Rechnung steht die Einheit $\dfrac{\text{m/s}}{\text{m/s}^2}$. Welche Einheit hat das Ergebnis?
teile:
  - typ: auswahl
    optionen:
      - '$\text{m}^2/\text{s}^3$'
      - '$1/\text{s}$'
      - '$\text{s}$'
      - '$\text{m/s}$'
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Du hast Zähler und Nenner multipliziert. Durch einen Bruch teilt man aber, indem man mit seinem Kehrwert multipliziert.
      - wert: 1
        meldung: Zähle die Sekunden noch einmal. Durch $\text{m/s}^2$ teilst du, indem du mit dem Kehrwert $\text{s}^2/\text{m}$ multiplizierst. Dann steht $\text{s}^2$ im Zähler und nur ein einzelnes $\text{s}$ im Nenner.
hinweise:
  - Teile durch $\text{m/s}^2$, indem du mit $\text{s}^2/\text{m}$ multiplizierst.
loesung: |
  Doppelbruch auflösen: mit dem Kehrwert des Nenners multiplizieren, $\dfrac{\text{m}}{\text{s}}\cdot\dfrac{\text{s}^2}{\text{m}}$.
  ---
  Meter kürzen sich, von $\text{s}^2/\text{s}$ bleibt $\text{s}$. Das ist sinnvoll: Geschwindigkeit durch Beschleunigung ergibt eine Zeit, zum Beispiel die Bremsdauer $t = v/a$.
```

```aufgabe
id: p1-pascal-herleiten
titel: Pascal in Basiseinheiten
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Leite die Einheit Pascal ($1\,\text{Pa} = 1\,\text{N/m}^2$) in SI-Basiseinheiten her. Gib die Exponenten von kg, m und s an.
teile:
  - typ: vektor
    namen: ["kg", "m", "s"]
    loesung: ["1", "-1", "-2"]
    fehler:
      - wert: ["1", "1", "-2"]
        meldung: Das sind die Exponenten des Newton. Du musst noch durch $\text{m}^2$ teilen, das senkt den Exponenten von m um $2$.
      - wert: ["1", "-2", "-2"]
        meldung: Im Newton steckt schon ein Meter im Zähler. Teilst du durch $\text{m}^2$, bleibt $\text{m}^{1-2} = \text{m}^{-1}$.
hinweise:
  - Ersetze zuerst das Newton durch Basiseinheiten.
  - Teilen durch $\text{m}^2$ heißt, vom Exponenten von m die Zahl $2$ abzuziehen.
gefuehrt:
  - text: Wie lautet der Exponent von m im Newton, $1\,\text{N} = 1\,\text{kg}\,\text{m}^{?}\,\text{s}^{-2}$?
    teil: { typ: zahl, loesung: "1" }
    erklaerung: 'Aus $F = m\cdot a$ folgt $1\,\text{N} = 1\,\text{kg}\,\text{m}\,\text{s}^{-2}$, der Exponent von m ist $1$.'
  - text: Beim Teilen durch $\text{m}^2$ ändert sich nur der Exponent von m. Wie lautet er danach?
    teil: { typ: zahl, loesung: "1-2" }
    erklaerung: 'Beim Dividieren subtrahiert man die Exponenten, $1 - 2 = -1$.'
  - text: Ändern sich die Exponenten von kg und s?
    erklaerung: Nein. In $\text{m}^2$ kommen weder kg noch s vor. Sie bleiben $1$ und $-2$.
loesung: |
  **Ansatz:** Druck ist Kraft durch Fläche, also $1\,\text{Pa} = \dfrac{1\,\text{N}}{1\,\text{m}^2}$. Zuerst ersetzen wir das Newton.
  ---
  $1\,\text{N} = 1\,\text{kg}\,\text{m}\,\text{s}^{-2}$, weil $F = m\cdot a$.
  ---
  $1\,\text{Pa} = \dfrac{\text{kg}\,\text{m}\,\text{s}^{-2}}{\text{m}^2} = \text{kg}\,\text{m}^{-1}\,\text{s}^{-2}$. Die Exponenten sind $(1 \mid -1 \mid -2)$.
```

```aufgabe
id: p1-kwh-joule
titel: Jahresverbrauch in Joule
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Ein Haushalt verbraucht im Jahr $3500\,\text{kWh}$ elektrische Energie. Wie viel ist das in Joule?
teile:
  - typ: zahl
    loesung: "3500*1000*3600"
    einheit: "J"
    anzeige: '1{,}26\cdot 10^{10}'
    fehler:
      - wert: "3500*3600"
        meldung: Du hast das „Kilo“ vergessen. Eine kWh ist $1000\,\text{W}$ mal $3600\,\text{s}$.
      - wert: "3500*1000*60"
        meldung: Eine Stunde hat $3600$ Sekunden, nicht $60$.
hinweise:
  - Eine Kilowattstunde ist die Energie, die bei $1000\,\text{W}$ in $3600\,\text{s}$ umgesetzt wird.
  - Rechne zuerst $1\,\text{kWh}$ in Joule um.
loesung: |
  **Ansatz:** Energie ist Leistung mal Zeit, $W = P\cdot t$. Damit rechnen wir eine kWh in Joule um.
  ---
  $1\,\text{kWh} = 1000\,\text{W}\cdot 3600\,\text{s} = 3{,}6\cdot 10^{6}\,\text{J}$.
  ---
  $3500\,\text{kWh} = 3500\cdot 3{,}6\cdot 10^{6}\,\text{J} = 1{,}26\cdot 10^{10}\,\text{J}$. Das sind rund zwölfeinhalb Milliarden Joule, deshalb rechnet man im Haushalt lieber in kWh.
```

```aufgabe
id: p1-powerbank
titel: Ladung und Energie einer Powerbank
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Eine Powerbank trägt die Aufschrift $10\,000\,\text{mAh}$ und $3{,}7\,\text{V}$.

  a) Wie groß ist die gespeicherte Ladung in C?

  b) Die Energie ist Ladung mal Spannung, $W = Q\cdot U$. Wie viel Energie in kJ speichert die Powerbank? Runde auf drei signifikante Stellen.
teile:
  - typ: zahl
    label: a) Ladung
    loesung: "10*3600"
    einheit: "C"
    anzeige: '36\,000'
    fehler:
      - wert: "10000*3600"
        meldung: Du hast die Milliampere nicht in Ampere umgerechnet. $10\,000\,\text{mA} = 10\,\text{A}$.
      - wert: "10*60"
        meldung: Eine Stunde hat $3600$ Sekunden, nicht $60$.
  - typ: zahl
    label: b) Energie
    loesung: "10*3600*3.7/1000"
    einheit: "kJ"
    anzeige: '133'
    fehler:
      - wert: "10*3600*3.7"
        meldung: Das ist die Energie in Joule. Gefragt ist die Angabe in Kilojoule, also durch $1000$ teilen.
hinweise:
  - mAh ist Stromstärke mal Zeit, also eine Ladung. Rechne mA in A und h in s um.
  - '$1\,\text{V}\cdot 1\,\text{C} = 1\,\text{J}$.'
loesung: |
  **Ansatz:** mAh ist eine Ladung, weil $Q = I\cdot t$. Wir rechnen in Ampere und Sekunden um.
  ---
  **a)** $Q = 10\,\text{A}\cdot 3600\,\text{s} = 36\,000\,\text{A}\,\text{s} = 36\,000\,\text{C}$.
  ---
  **b)** $W = Q\cdot U = 36\,000\,\text{C}\cdot 3{,}7\,\text{V} = 133\,200\,\text{J} \approx 133\,\text{kJ}$. Die Einheit stimmt, weil $1\,\text{V} = 1\,\text{J/C}$.
  ---
  **Plausibilität:** $133\,\text{kJ}$ sind $133\,200 / 3600 = 37\,\text{Wh}$. Genau so viel steht oft als Wattstunden auf Powerbanks.
```

```aufgabe
id: p1-volt-basis
titel: Das Volt in Basiseinheiten
niveau: 3
lernziel: 1
kompetenz: rechnen
angabe: |
  Die Spannung ist definiert als Energie pro Ladung, $U = \dfrac{W}{Q}$. Leite die Einheit Volt in SI-Basiseinheiten her. Gib die Exponenten von kg, m, s und A an.
teile:
  - typ: vektor
    namen: ["kg", "m", "s", "A"]
    loesung: ["1", "2", "-3", "-1"]
    fehler:
      - wert: ["1", "2", "-2", "-1"]
        meldung: Beim Exponenten von s fehlt etwas. Die Ladung ist $\text{A}\cdot\text{s}$. Teilst du durch sie, kommt noch eine Sekunde in den Nenner.
      - wert: ["1", "2", "-1", "-1"]
        meldung: Du hast die Sekunde der Ladung in den Zähler geholt. Die Ladung steht aber im Nenner, also wird der Exponent von s kleiner.
hinweise:
  - Schreibe zuerst das Joule und das Coulomb in Basiseinheiten.
  - '$1\,\text{J} = 1\,\text{kg}\,\text{m}^2\,\text{s}^{-2}$ und $1\,\text{C} = 1\,\text{A}\,\text{s}$. Teile das eine durch das andere.'
loesung: |
  **Ansatz:** $1\,\text{V} = \dfrac{1\,\text{J}}{1\,\text{C}}$. Wir ersetzen Joule und Coulomb durch Basiseinheiten.
  ---
  Joule: $1\,\text{J} = 1\,\text{kg}\,\text{m}^2\,\text{s}^{-2}$, weil Arbeit Kraft mal Weg ist. Coulomb: $1\,\text{C} = 1\,\text{A}\,\text{s}$, weil Ladung Stromstärke mal Zeit ist.
  ---
  $1\,\text{V} = \dfrac{\text{kg}\,\text{m}^2\,\text{s}^{-2}}{\text{A}\,\text{s}} = \text{kg}\,\text{m}^2\,\text{s}^{-3}\,\text{A}^{-1}$. Beim Teilen durch s sinkt der Exponent von $-2$ auf $-3$.
  ---
  **Probe:** Leistung ist Spannung mal Stromstärke, $P = U\cdot I$. Tatsächlich ergibt $\text{kg}\,\text{m}^2\,\text{s}^{-3}\,\text{A}^{-1}\cdot\text{A} = \text{kg}\,\text{m}^2\,\text{s}^{-3} = \text{W}$.
```

```aufgabe
id: p1-strom-basisgroesse
titel: Warum Stromstärke und nicht Ladung?
niveau: 3
lernziel: 1
kompetenz: begruenden
angabe: |
  Im SI ist die Stromstärke eine Basisgröße und die Ladung abgeleitet. Erkläre in zwei bis drei Sätzen, wie man die Einheit Coulomb aus dem Ampere gewinnt, und begründe, warum es im Prinzip auch umgekehrt ginge.
teile:
  - typ: text
    muster: |
      Die Ladung ist Stromstärke mal Zeit, Q = I·t. Deshalb ist 1 C die Ladung, die bei 1 A in 1 s durch einen Leiter
      fließt, also 1 C = 1 A·s. Umgekehrt könnte man die Ladung als Basisgröße nehmen und den Strom als Ladung pro Zeit,
      I = Q/t, ableiten. Welche Größe man als Basis wählt, ist eine Festlegung. Entscheidend ist, dass alle Einheiten
      eindeutig und genau messbar zusammenhängen.
hinweise:
  - Welche Gleichung verbindet Ladung, Stromstärke und Zeit?
  - Kann man diese Gleichung auch nach der Stromstärke auflösen?
loesung: |
  **Zusammenhang:** $Q = I\cdot t$. Deshalb gilt $1\,\text{C} = 1\,\text{A}\cdot 1\,\text{s}$.
  ---
  **Umkehrung:** Man könnte ebenso $I = Q/t$ schreiben und die Ladung zur Basisgröße machen. Die Gleichung gilt in beide Richtungen.
  ---
  **Begründung:** Welche Größen Basisgrößen sind, ist eine Vereinbarung. Wichtig ist nur, dass alle anderen Einheiten eindeutig daraus folgen und genau messbar sind.
```

## Vorsilben, Zehnerpotenzen und Umrechnen

```aufgabe
id: p1-3-check
art: check
titel: "Vorwissen: Zahlenteile und Zehnerpotenzen getrennt"
niveau: 1
angabe: |
  Berechne $(3\cdot 10^{4})\cdot(2\cdot 10^{-6}) = 6\cdot 10^{n}$. Wie lautet $n$?
teile:
  - typ: zahl
    label: '$n$'
    loesung: "4 + (-6)"
    fehler:
      - wert: "-24"
        meldung: Du hast die Exponenten multipliziert. Beim Multiplizieren von Zehnerpotenzen addiert man die Exponenten.
      - wert: "10"
        meldung: Das Vorzeichen von $-6$ ist verloren gegangen. $4 + (-6) = -2$.
hinweise:
  - Multipliziere die Zahlenteile $3\cdot 2$ und addiere die Exponenten $4 + (-6)$.
loesung: |
  Wir ordnen um und rechnen Zahlenteile und Zehnerpotenzen getrennt: $(3\cdot 2)\cdot(10^{4}\cdot 10^{-6})$.
  ---
  $3\cdot 2 = 6$ und $10^{4}\cdot 10^{-6} = 10^{4-6} = 10^{-2}$. Also $n = -2$. Wiederholen: [1.9 Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln).
```

Physikalische Größen überspannen viele Zehnerpotenzen. Die Wellenlänge von blauem Licht beträgt
$0{,}000\,000\,450\,\text{m}$. So eine Zahl kann man kaum lesen und leicht falsch abschreiben. Deshalb gibt
es zwei Hilfsmittel: **Vorsilben** vor der Einheit und die **wissenschaftliche Schreibweise** mit
Zehnerpotenzen. Beide Schreibweisen sagen dasselbe: $450\,\text{nm} = 4{,}5\cdot 10^{-7}\,\text{m}$.

### Die Vorsilben

Eine **Vorsilbe** (auch Präfix) ist ein Buchstabe vor der Einheit, der für eine Zehnerpotenz steht. Das
„k“ in „km“ bedeutet zum Beispiel „mal tausend“: $1\,\text{km} = 10^{3}\,\text{m}$. Die Vorsilben für
große Faktoren lauten:

- Tera, Zeichen T, Faktor $10^{12}$.
- Giga, Zeichen G, Faktor $10^{9}$.
- Mega, Zeichen M, Faktor $10^{6}$.
- Kilo, Zeichen k, Faktor $10^{3}$.
- Hekto, Zeichen h, Faktor $10^{2}$.

Die Vorsilben für kleine Faktoren lauten:

- Dezi, Zeichen d, Faktor $10^{-1}$.
- Zenti, Zeichen c, Faktor $10^{-2}$.
- Milli, Zeichen m, Faktor $10^{-3}$.
- Mikro, Zeichen $\mu$, Faktor $10^{-6}$.
- Nano, Zeichen n, Faktor $10^{-9}$.
- Piko, Zeichen p, Faktor $10^{-12}$.
- Femto, Zeichen f, Faktor $10^{-15}$.

Achte auf Groß- und Kleinschreibung. Das große M (Mega) ist eine Million, das kleine m (Milli) ein
Tausendstel. Das Zeichen $\mu$ ist der griechische Buchstabe „my“.

### Wissenschaftliche Schreibweise

In der **wissenschaftlichen Schreibweise** schreibt man eine Zahl als $a\cdot 10^{n}$. Dabei ist $a$ eine
Zahl mit $1 \le |a| < 10$, also genau eine Ziffer vor dem Komma, und $n$ eine ganze Zahl. Ein Beispiel ist
die Lichtgeschwindigkeit $c = 3{,}00\cdot 10^{8}\,\text{m/s}$. **Keine** wissenschaftliche Schreibweise ist
$30\cdot 10^{7}$, denn $30$ hat zwei Ziffern vor dem Komma.

Gerechnet wird mit den **Potenzgesetzen**:
$$10^{a}\cdot 10^{b} = 10^{a+b}, \qquad \frac{10^{a}}{10^{b}} = 10^{a-b}, \qquad (10^{a})^{b} = 10^{a\cdot b}.$$
Man rechnet die Zahlenteile und die Zehnerpotenzen getrennt aus. Mehr dazu findest du in
[1.9 Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln).

:::beispiel[Wie lange braucht das Licht von der Sonne zur Erde?]
Der Abstand Erde–Sonne beträgt $s = 1{,}5\cdot 10^{11}\,\text{m}$, die Lichtgeschwindigkeit
$c = 3{,}0\cdot 10^{8}\,\text{m/s}$. Gesucht ist die Laufzeit $t = s/c$.

**Schritt 1, Zahlenteile teilen:** $\dfrac{1{,}5}{3{,}0} = 0{,}5$.

**Schritt 2, Zehnerpotenzen teilen:** $\dfrac{10^{11}}{10^{8}} = 10^{11-8} = 10^{3}$.

**Schritt 3, zusammensetzen:** $t = 0{,}5\cdot 10^{3}\,\text{s} = 500\,\text{s}$. Die Einheit ist
$\dfrac{\text{m}}{\text{m/s}} = \text{s}$.

**Antwort:** Das Licht braucht $500\,\text{s}$, also gut $8$ Minuten. Wir sehen die Sonne so, wie sie vor
acht Minuten war.
:::

Am Taschenrechner gibst du $6\cdot 10^{24}$ mit der Taste **EXP** oder **×10ˣ** ein, also `6 EXP 24`.
Diese Taste setzt die Zehnerpotenz automatisch wie in Klammern.

:::achtung[Der häufigste Tippfehler am Taschenrechner]
Gesucht ist $\dfrac{1}{2\cdot 10^{3}} = 0{,}0005$. Jemand tippt `1 ÷ 2 × 10 ^ 3` und erhält $500$.

**Der Fehler:** Der Rechner arbeitet von links nach rechts. Er rechnet $\tfrac12\cdot 10^{3} = 500$.
Das Ergebnis ist um den Faktor $10^{6}$ falsch. **Richtig:** `1 ÷ 2 EXP 3` tippen oder den Nenner in
Klammern setzen, `1 ÷ (2 × 10 ^ 3)`.
:::

```aufgabe
id: p1-vorsilben
titel: Vorsilben anwenden
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Rechne in die Grundeinheit um. Gib jeweils nur die Zahl ein. Zehnerpotenzen tippst du mit e, zum Beispiel $1{,}2\cdot 10^{-5}$ als 1,2e-5.
teile:
  - typ: zahl
    label: '$450\,\text{nm}$ in m'
    loesung: "450e-9"
    anzeige: '4{,}5\cdot 10^{-7}'
    fehler:
      - wert: "450e-6"
        meldung: Du hast Nano mit Mikro verwechselt. Nano ist $10^{-9}$, Mikro ist $10^{-6}$.
  - typ: zahl
    label: '$2{,}3\,\mu\text{s}$ in s'
    loesung: "2.3e-6"
    anzeige: '2{,}3\cdot 10^{-6}'
    fehler:
      - wert: "2.3e-3"
        meldung: Du hast Mikro mit Milli verwechselt. Milli ist $10^{-3}$, Mikro ist $10^{-6}$.
  - typ: zahl
    label: '$3{,}1\,\text{GW}$ in W'
    loesung: "3.1e9"
    anzeige: '3{,}1\cdot 10^{9}'
    fehler:
      - wert: "3.1e6"
        meldung: Du hast Giga mit Mega verwechselt. Mega ist $10^{6}$, Giga ist $10^{9}$.
hinweise:
  - Ersetze die Vorsilbe durch ihre Zehnerpotenz aus der Tabelle.
loesung: |
  Nano bedeutet $10^{-9}$: $450\,\text{nm} = 450\cdot 10^{-9}\,\text{m} = 4{,}5\cdot 10^{-7}\,\text{m}$. Beim Umschreiben wandert das Komma zwei Stellen nach links, der Exponent steigt um $2$.
  ---
  Mikro bedeutet $10^{-6}$: $2{,}3\,\mu\text{s} = 2{,}3\cdot 10^{-6}\,\text{s}$.
  ---
  Giga bedeutet $10^{9}$: $3{,}1\,\text{GW} = 3{,}1\cdot 10^{9}\,\text{W}$. So viel leistet ein großes Kraftwerk.
```

```aufgabe
id: p1-wissenschaftlich
titel: Rechnen mit Zehnerpotenzen
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Berechne ohne Taschenrechner:
  $$\frac{(3\cdot 10^{8})^2\cdot 2\cdot 10^{-3}}{6\cdot 10^{4}}$$
teile:
  - typ: zahl
    loesung: "(3e8)^2*2e-3/6e4"
    anzeige: '3\cdot 10^{9}'
    fehler:
      - wert: "3e8*2*2e-3/6e4"
        meldung: Beim Quadrieren hast du nur verdoppelt. $(3\cdot 10^{8})^2 = 9\cdot 10^{16}$, denn Zahlenteil und Zehnerpotenz werden beide quadriert.
      - wert: "3*1e8^2*2e-3/6e4"
        meldung: Du hast nur die Zehnerpotenz quadriert. Auch der Zahlenteil $3$ wird quadriert.
hinweise:
  - Quadriere Zahlenteil und Zehnerpotenz getrennt, dann rechne Zahlenteile und Zehnerpotenzen getrennt aus.
loesung: |
  **Zähler:** $(3\cdot 10^{8})^2 = 9\cdot 10^{16}$. Mal $2\cdot 10^{-3}$ ergibt $18\cdot 10^{13}$.
  ---
  **Bruch:** $\dfrac{18\cdot 10^{13}}{6\cdot 10^{4}} = 3\cdot 10^{13-4} = 3\cdot 10^{9}$.
```

### Umrechnen wie mit Variablen

Die sicherste Methode zum Umrechnen hat nur eine Regel. **Ersetze jede Einheit durch ihren Wert in der
Zieleinheit. Dann rechne wie mit Variablen.** Einheiten verhalten sich in Rechnungen wie Buchstaben.
Man kann sie multiplizieren, teilen und kürzen.

:::beispiel[72 km/h in m/s]
**Schritt 1, Einheiten ersetzen:** $1\,\text{km} = 1000\,\text{m}$ und $1\,\text{h} = 3600\,\text{s}$. Also
$$72\,\frac{\text{km}}{\text{h}} = 72\cdot\frac{1000\,\text{m}}{3600\,\text{s}}.$$

**Schritt 2, Zahlen ausrechnen:** $\dfrac{1000}{3600} = \dfrac{1}{3{,}6}$. Also
$72\cdot\dfrac{1}{3{,}6}\,\dfrac{\text{m}}{\text{s}} = \dfrac{72}{3{,}6}\,\dfrac{\text{m}}{\text{s}}$.

**Schritt 3, Ergebnis:** $\dfrac{72}{3{,}6} = 20$, also $72\,\text{km/h} = 20\,\text{m/s}$.

**Plausibilität:** In einer Sekunde kommt man viel weniger weit als in einer Stunde. Deshalb ist die Zahl
in m/s kleiner.
:::

Aus dem Beispiel folgt eine Regel, die du auswendig können solltest.

:::merke[km/h und m/s]
- Von km/h nach m/s: **durch $3{,}6$ teilen**.
- Von m/s nach km/h: **mit $3{,}6$ multiplizieren**.
- Kontrolle: Der Zahlenwert in m/s ist immer der kleinere.
:::

:::achtung[Mit 3,6 multipliziert statt geteilt]
Ein Schüler rechnet $72\,\text{km/h} = 72\cdot 3{,}6\,\text{m/s} = 259\,\text{m/s}$.

**Der Fehler:** Er hat in die falsche Richtung umgerechnet. $259\,\text{m/s}$ wären über
$900\,\text{km/h}$, so schnell wie ein Verkehrsflugzeug. **Richtig:** $72 : 3{,}6 = 20\,\text{m/s}$. Die
Plausibilitätsprüfung hätte den Fehler sofort gezeigt.
:::

```aufgabe
id: p1-einheit-kmh
titel: km/h in m/s
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Ein Auto fährt mit $108\,\text{km/h}$. Gib die Geschwindigkeit in m/s an.
teile:
  - typ: zahl
    loesung: "108/3.6"
    einheit: "m/s"
    anzeige: '30'
    fehler:
      - wert: "108*3.6"
        meldung: Du hast mit $3{,}6$ multipliziert. Der Zahlenwert in m/s muss aber **kleiner** sein als in km/h, denn in einer Sekunde kommt man weniger weit als in einer Stunde.
hinweise:
  - '$1\,\text{km/h} = \dfrac{1000\,\text{m}}{3600\,\text{s}}$.'
loesung: |
  Wir ersetzen die Einheiten: $108\,\dfrac{\text{km}}{\text{h}} = 108\cdot\dfrac{1000\,\text{m}}{3600\,\text{s}}$.
  ---
  $= \dfrac{108}{3{,}6}\,\dfrac{\text{m}}{\text{s}} = 30\,\text{m/s}$. Probe: $30\cdot 3{,}6 = 108$.
```

```aufgabe
id: p1-einheit-ms-kmh
titel: m/s in km/h
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Ein Sprinter erreicht $11{,}5\,\text{m/s}$. Wie viel ist das in km/h?
teile:
  - typ: zahl
    loesung: "11.5*3.6"
    einheit: "km/h"
    anzeige: '41{,}4'
    fehler:
      - wert: "11.5/3.6"
        meldung: Du hast durch $3{,}6$ geteilt. In km/h muss die Zahl **größer** werden, denn in einer Stunde kommt man viel weiter als in einer Sekunde.
hinweise:
  - Von m/s nach km/h multipliziert man mit $3{,}6$.
loesung: |
  Wir ersetzen die Einheiten: $1\,\text{m} = 0{,}001\,\text{km}$ und $1\,\text{s} = \tfrac{1}{3600}\,\text{h}$. Also $1\,\dfrac{\text{m}}{\text{s}} = \dfrac{0{,}001\,\text{km}}{\tfrac{1}{3600}\,\text{h}} = 3{,}6\,\dfrac{\text{km}}{\text{h}}$.
  ---
  $11{,}5\,\text{m/s} = 11{,}5\cdot 3{,}6\,\text{km/h} = 41{,}4\,\text{km/h}$. Das ist ein sehr schneller Sprint.
```

### Potenzierte Einheiten

Steht eine Einheit im Quadrat oder in der dritten Potenz, dann wird die **Vorsilbe mitpotenziert**. Das
ist die wichtigste Regel dieses Abschnitts. Ein Zentimeter ist $10^{-2}\,\text{m}$. Also gilt
$$1\,\text{cm}^2 = (10^{-2}\,\text{m})^2 = 10^{-4}\,\text{m}^2, \qquad 1\,\text{cm}^3 = (10^{-2}\,\text{m})^3 = 10^{-6}\,\text{m}^3.$$
Anschaulich: Ein Quadratmeter ist ein Quadrat mit $100\,\text{cm}$ Seitenlänge. In ihm liegen
$100\cdot 100 = 10\,000$ kleine Quadrate mit $1\,\text{cm}$ Seitenlänge.

Wichtige Volumenbeziehungen sind $1\,\text{L} = 1\,\text{dm}^3 = 10^{-3}\,\text{m}^3$ und
$1\,\text{mL} = 1\,\text{cm}^3$.

:::beispiel[Eine Zimmerfläche in Quadratzentimetern]
Ein Zimmer hat $18\,\text{m}^2$. Wie viele $\text{cm}^2$ sind das?

**Schritt 1, Umrechnung der Einheit:** $1\,\text{m} = 100\,\text{cm}$, also
$1\,\text{m}^2 = (100\,\text{cm})^2 = 10\,000\,\text{cm}^2 = 10^{4}\,\text{cm}^2$.

**Schritt 2, einsetzen:** $18\,\text{m}^2 = 18\cdot 10^{4}\,\text{cm}^2 = 1{,}8\cdot 10^{5}\,\text{cm}^2$.

**Antwort:** $180\,000\,\text{cm}^2$. Der Faktor ist $10^4$, nicht $100$.
:::

:::achtung[Der Quadratmeter-Fehler]
Falsch ist $1\,\text{m}^2 = 100\,\text{cm}^2$. Wer so rechnet, hat nur die Zahl umgerechnet, nicht das
Quadrat. **Richtig:** $1\,\text{m}^2 = (100\,\text{cm})^2 = 10\,000\,\text{cm}^2$.

Genauso gilt $1\,\text{m}^3 = (100\,\text{cm})^3 = 10^{6}\,\text{cm}^3 = 1000\,\text{L}$. Ein Würfel mit
$1\,\text{m}$ Kantenlänge fasst $1000$ Liter, nicht $100$.
:::

```aufgabe
id: p1-flaeche-umrechnen
titel: Flächeneinheiten
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Ein Blatt Papier im Format A4 hat die Fläche $623{,}7\,\text{cm}^2$. Gib die Fläche in $\text{m}^2$ an.
teile:
  - typ: zahl
    loesung: "623.7e-4"
    einheit: "m²"
    anzeige: '0{,}06237'
    fehler:
      - wert: "623.7e-2"
        meldung: Du hast nur durch $100$ geteilt. Beim Quadrat wird auch die Vorsilbe quadriert, $1\,\text{cm}^2 = 10^{-4}\,\text{m}^2$.
hinweise:
  - '$1\,\text{cm}^2 = (10^{-2}\,\text{m})^2$.'
loesung: |
  **Ansatz:** Die Vorsilbe wird mitquadriert: $1\,\text{cm}^2 = (10^{-2}\,\text{m})^2 = 10^{-4}\,\text{m}^2$.
  ---
  $623{,}7\,\text{cm}^2 = 623{,}7\cdot 10^{-4}\,\text{m}^2 = 0{,}06237\,\text{m}^2$. Das ist ziemlich genau $\tfrac{1}{16}\,\text{m}^2$. Ein A0-Bogen hat $1\,\text{m}^2$, und A4 entsteht durch viermaliges Halbieren.
```

```aufgabe
id: p1-volumen-umrechnen
titel: Volumeneinheiten
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Ein Motor hat einen Hubraum von $1598\,\text{cm}^3$. Gib ihn in Litern und in $\text{m}^3$ an.
teile:
  - typ: zahl
    label: in Litern
    loesung: "1598/1000"
    einheit: "L"
    anzeige: '1{,}598'
    fehler:
      - wert: "1598/100"
        meldung: Ein Liter ist ein Kubikdezimeter. $1\,\text{dm}^3 = (10\,\text{cm})^3 = 1000\,\text{cm}^3$, nicht $100$.
  - typ: zahl
    label: in m³
    loesung: "1598e-6"
    einheit: "m³"
    anzeige: '1{,}598\cdot 10^{-3}'
    fehler:
      - wert: "1598e-2"
        meldung: Bei einer Volumeneinheit wird die Vorsilbe hoch drei genommen. $1\,\text{cm}^3 = (10^{-2}\,\text{m})^3 = 10^{-6}\,\text{m}^3$.
hinweise:
  - '$1\,\text{L} = 1\,\text{dm}^3 = 1000\,\text{cm}^3$.'
loesung: |
  **Liter:** $1\,\text{L} = 1000\,\text{cm}^3$, also $1598\,\text{cm}^3 = 1{,}598\,\text{L}$.
  ---
  **Kubikmeter:** $1\,\text{cm}^3 = 10^{-6}\,\text{m}^3$, also $1598\,\text{cm}^3 = 1598\cdot 10^{-6}\,\text{m}^3 = 1{,}598\cdot 10^{-3}\,\text{m}^3$. Probe: $1{,}598\,\text{L} = 1{,}598\cdot 10^{-3}\,\text{m}^3$, beide Wege passen zusammen.
```

### Zusammengesetzte Einheiten

Bei Dichten, Drücken und Ähnlichem ersetzt man Zähler und Nenner **einzeln**. Die **Dichte** $\rho$
(griechisch „rho“) ist Masse pro Volumen, $\rho = m/V$.

:::beispiel[Die Dichte von Gold in kg/m³]
Gold hat die Dichte $19{,}3\,\text{g/cm}^3$. Wie viel ist das in $\text{kg/m}^3$?

**Schritt 1, Zähler ersetzen:** $1\,\text{g} = 10^{-3}\,\text{kg}$.

**Schritt 2, Nenner ersetzen:** $1\,\text{cm}^3 = 10^{-6}\,\text{m}^3$, denn die Vorsilbe wird hoch drei genommen.

**Schritt 3, zusammenrechnen:**
$$19{,}3\,\frac{\text{g}}{\text{cm}^3} = 19{,}3\cdot\frac{10^{-3}\,\text{kg}}{10^{-6}\,\text{m}^3} = 19{,}3\cdot 10^{3}\,\frac{\text{kg}}{\text{m}^3} = 19\,300\,\frac{\text{kg}}{\text{m}^3}.$$

**Antwort:** Ein Kubikmeter Gold hätte eine Masse von $19{,}3$ Tonnen. Merke: $\text{g/cm}^3$ mal $1000$
ergibt $\text{kg/m}^3$. Wasser hat $1\,\text{g/cm}^3 = 1000\,\text{kg/m}^3$.
:::

:::pruefung[Erst alles in SI, dann rechnen]
**Was du tun sollst:** Rechne in der Prüfung **zuerst alle Angaben in SI-Einheiten** um, also in m, kg, s,
A und K. Schreib die umgerechneten Werte als Liste hin.

**Warum:** Dann setzt du nur noch Zahlen ein, und das Ergebnis kommt automatisch in SI-Einheiten heraus.
Gemischte Einheiten wie Gramm und Kilogramm in einer Formel sind die häufigste Fehlerquelle.

**Wie es konkret klingt:** „Gegeben: $m = 450\,\text{g} = 0{,}450\,\text{kg}$, $v = 72\,\text{km/h} = 20\,\text{m/s}$.“
Erst ganz am Ende rechnest du, falls verlangt, in km/h oder kWh zurück.
:::

```aufgabe
id: p1-dichte-umrechnen
titel: Dichte umrechnen
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Aluminium hat die Dichte $2{,}70\,\text{g/cm}^3$. Gib die Dichte in $\text{kg/m}^3$ an.
teile:
  - typ: zahl
    loesung: "2.70e-3/1e-6"
    einheit: "kg/m³"
    anzeige: '2700'
    fehler:
      - wert: "2.70e-3/1e-2"
        meldung: Du hast beim Volumen nur durch $100$ geteilt. $1\,\text{cm}^3 = 10^{-6}\,\text{m}^3$, die Vorsilbe wird hoch drei genommen.
      - wert: "2.70e-3"
        meldung: Du hast nur die Gramm umgerechnet. Auch der Nenner $\text{cm}^3$ muss in $\text{m}^3$ umgerechnet werden.
hinweise:
  - Ersetze g durch $10^{-3}\,\text{kg}$ und $\text{cm}^3$ durch $10^{-6}\,\text{m}^3$.
  - Teile dann die beiden Zehnerpotenzen durcheinander.
loesung: |
  **Ansatz:** Zähler und Nenner werden einzeln ersetzt: $1\,\text{g} = 10^{-3}\,\text{kg}$, $1\,\text{cm}^3 = 10^{-6}\,\text{m}^3$.
  ---
  $2{,}70\,\dfrac{\text{g}}{\text{cm}^3} = 2{,}70\cdot\dfrac{10^{-3}\,\text{kg}}{10^{-6}\,\text{m}^3} = 2{,}70\cdot 10^{3}\,\dfrac{\text{kg}}{\text{m}^3}$.
  ---
  $= 2700\,\text{kg/m}^3$. Plausibel: Aluminium ist knapp dreimal so dicht wie Wasser mit $1000\,\text{kg/m}^3$.
```

```aufgabe
id: p1-druck-umrechnen
titel: Reifendruck
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Ein Autoreifen ist auf $2{,}2\,\text{bar}$ Überdruck aufgepumpt. Wie groß ist der Überdruck in Pascal und in $\text{N/cm}^2$?
teile:
  - typ: zahl
    label: in Pa
    loesung: "2.2e5"
    einheit: "Pa"
    anzeige: '2{,}2\cdot 10^{5}'
    fehler:
      - wert: "2.2e3"
        meldung: Ein Bar sind $10^{5}\,\text{Pa}$, nicht $10^{3}$. Das „Bar“ hat keine Vorsilbe, die Zahl musst du dir merken.
  - typ: zahl
    label: in N/cm²
    loesung: "2.2e5*1e-4"
    einheit: "N/cm²"
    anzeige: '22'
    fehler:
      - wert: "2.2e5*1e-2"
        meldung: Du hast nur durch $100$ geteilt. Ein Quadratmeter hat $10^{4}$ Quadratzentimeter.
hinweise:
  - '$1\,\text{bar} = 10^5\,\text{Pa} = 10^5\,\text{N/m}^2$.'
  - '$1\,\text{m}^2 = 10^4\,\text{cm}^2$, also ist $1\,\text{N/m}^2 = 10^{-4}\,\text{N/cm}^2$.'
loesung: |
  **Ansatz:** Erst in die SI-Einheit Pascal, dann den Nenner $\text{m}^2$ durch $\text{cm}^2$ ersetzen.
  ---
  $2{,}2\,\text{bar} = 2{,}2\cdot 10^{5}\,\text{Pa} = 2{,}2\cdot 10^5\,\text{N/m}^2$.
  ---
  $\dfrac{2{,}2\cdot 10^5\,\text{N}}{10^4\,\text{cm}^2} = 22\,\text{N/cm}^2$. Auf jeden Quadratzentimeter Reifenwand drückt eine Kraft wie das Gewicht von gut $2\,\text{kg}$.
```

```aufgabe
id: p1-lichtjahr
titel: Das Lichtjahr
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Ein Lichtjahr ist die Strecke, die Licht in einem Jahr mit $365{,}25$ Tagen zurücklegt. Berechne sie in Metern ($c = 2{,}998\cdot 10^{8}\,\text{m/s}$). Runde auf drei signifikante Stellen.
teile:
  - typ: zahl
    loesung: "2.998e8*365.25*86400"
    einheit: "m"
    anzeige: '9{,}46\cdot 10^{15}'
    fehler:
      - wert: "2.998e8*365.25*24*60"
        meldung: Du hast die Zeit in Minuten statt in Sekunden umgerechnet. Ein Tag hat $86\,400\,\text{s}$.
hinweise:
  - Ein Tag hat $24\cdot 3600\,\text{s} = 86\,400\,\text{s}$.
  - Rechne zuerst das Jahr in Sekunden um, dann $s = c\cdot t$.
loesung: |
  **Ansatz:** Licht bewegt sich gleichförmig, also gilt $s = c\cdot t$. Die Zeit muss in Sekunden stehen.
  ---
  $t = 365{,}25\cdot 86\,400\,\text{s} = 3{,}156\cdot 10^{7}\,\text{s}$.
  ---
  $s = 2{,}998\cdot 10^{8}\,\text{m/s}\cdot 3{,}156\cdot 10^{7}\,\text{s} \approx 9{,}46\cdot 10^{15}\,\text{m}$. Die Sekunden kürzen sich. Ein Lichtjahr ist also eine **Länge**, keine Zeit.
```

```aufgabe
id: p1-durchfluss
titel: Wasserdurchfluss in SI-Einheiten
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Aus einem Gartenschlauch fließen $45$ Liter pro Minute. Gib den Durchfluss in $\text{m}^3/\text{s}$ an.
teile:
  - typ: zahl
    loesung: "45e-3/60"
    einheit: "m³/s"
    anzeige: '7{,}5\cdot 10^{-4}'
    fehler:
      - wert: "45/60"
        meldung: Du hast die Minuten umgerechnet, die Liter aber nicht. $1\,\text{L} = 10^{-3}\,\text{m}^3$.
      - wert: "45e-3*60"
        meldung: Du hast mit $60$ multipliziert. „Pro Minute“ steht im Nenner. Eine Minute sind $60\,\text{s}$, also teilst du durch $60$.
hinweise:
  - Ersetze Liter durch $10^{-3}\,\text{m}^3$ und Minute durch $60\,\text{s}$.
  - Der Nenner wird größer, also wird der Zahlenwert kleiner.
gefuehrt:
  - text: Wie viele Kubikmeter sind $45$ Liter? Gib die Zahl ein.
    teil: { typ: zahl, loesung: "45e-3" }
    erklaerung: '$1\,\text{L} = 10^{-3}\,\text{m}^3$, also $45\,\text{L} = 0{,}045\,\text{m}^3$.'
  - text: Wie viele Sekunden hat eine Minute?
    teil: { typ: zahl, loesung: "60" }
    erklaerung: Eine Minute hat $60\,\text{s}$.
  - text: Teile jetzt das Volumen in $\text{m}^3$ durch die Zeit in s.
    teil: { typ: zahl, loesung: "45e-3/60" }
    erklaerung: '$0{,}045\,\text{m}^3 / 60\,\text{s} = 7{,}5\cdot 10^{-4}\,\text{m}^3/\text{s}$.'
  - text: Überlege, ob das Ergebnis plausibel ist.
    erklaerung: Ein Kubikmeter sind $1000$ Liter. Bei $45$ Litern pro Minute dauert es gut $20$ Minuten, bis ein Kubikmeter durch ist. Pro Sekunde fließt also nur ein winziger Bruchteil eines Kubikmeters.
loesung: |
  **Ansatz:** Zähler und Nenner einzeln ersetzen: $1\,\text{L} = 10^{-3}\,\text{m}^3$ und $1\,\text{min} = 60\,\text{s}$.
  ---
  $45\,\dfrac{\text{L}}{\text{min}} = \dfrac{45\cdot 10^{-3}\,\text{m}^3}{60\,\text{s}}$.
  ---
  $= 7{,}5\cdot 10^{-4}\,\text{m}^3/\text{s}$. Probe: $7{,}5\cdot 10^{-4}\,\text{m}^3/\text{s}\cdot 60\,\text{s} = 0{,}045\,\text{m}^3 = 45\,\text{L}$.
```

```aufgabe
id: p1-umrechnen-fehler-finden
titel: Fehler beim Kabelquerschnitt finden
niveau: 2
lernziel: 2
kompetenz: begruenden
angabe: |
  Ein Mitschüler rechnet den Querschnitt eines Stromkabels um: „$1{,}5\,\text{mm}^2 = 1{,}5\cdot 10^{-3}\,\text{m}^2$, weil ein Millimeter $10^{-3}\,\text{m}$ ist.“ Wie lautet der richtige Wert in $\text{m}^2$?
teile:
  - typ: zahl
    loesung: "1.5e-6"
    einheit: "m²"
    anzeige: '1{,}5\cdot 10^{-6}'
    fehler:
      - wert: "1.5e-3"
        meldung: Das ist genau der Fehler des Mitschülers. Bei $\text{mm}^2$ wird die Vorsilbe mitquadriert.
      - wert: "1.5e-9"
        meldung: Du hast hoch drei genommen. Eine Fläche hat die Einheit hoch zwei, also $(10^{-3})^2$.
hinweise:
  - Was passiert mit der Vorsilbe, wenn die Einheit quadriert wird?
  - '$1\,\text{mm}^2 = (10^{-3}\,\text{m})^2$.'
loesung: |
  **Der Fehler:** Der Mitschüler hat nur die Länge umgerechnet, nicht die Fläche. Die Vorsilbe muss mitquadriert werden.
  ---
  $1\,\text{mm}^2 = (10^{-3}\,\text{m})^2 = 10^{-6}\,\text{m}^2$.
  ---
  $1{,}5\,\text{mm}^2 = 1{,}5\cdot 10^{-6}\,\text{m}^2$. Plausibel: Ein Quadratmeter enthält eine Million Quadratmillimeter, also ist ein Quadratmillimeter ein Millionstel.
```

```aufgabe
id: p1-regenmenge
titel: Wie viel Wasser bringt ein Regen?
niveau: 3
lernziel: 2
kompetenz: modellieren
angabe: |
  Bei einem Gewitter fallen $12\,\text{mm}$ Niederschlag. Das heißt: Bliebe das Wasser liegen, stünde es $12\,\text{mm}$ hoch. Ein Feld ist $1\,\text{ha}$ groß ($1\,\text{ha} = 10\,000\,\text{m}^2$).

  a) Wie viel Wasser in $\text{m}^3$ ist auf das Feld gefallen?

  b) Wie viele Liter sind das? Wie viele Liter fallen auf einen Quadratmeter?
teile:
  - typ: zahl
    label: a) Volumen in m³
    loesung: "0.012*1e4"
    einheit: "m³"
    anzeige: '120'
    fehler:
      - wert: "12*1e4"
        meldung: Du hast die Höhe in Millimetern eingesetzt. Für ein Volumen in $\text{m}^3$ muss die Höhe in Metern stehen, $12\,\text{mm} = 0{,}012\,\text{m}$.
  - typ: zahl
    label: b) Liter auf dem Feld
    loesung: "0.012*1e4*1000"
    einheit: "L"
    anzeige: '120\,000'
  - typ: zahl
    label: b) Liter pro Quadratmeter
    loesung: "0.012*1*1000"
    einheit: "L"
    anzeige: '12'
hinweise:
  - Stell dir das Wasser als flache Schicht vor. Ihr Volumen ist Grundfläche mal Höhe.
  - Rechne die Höhe in Meter um. $1\,\text{m}^3 = 1000\,\text{L}$.
loesung: |
  **Modell:** Das Regenwasser bildet eine Schicht mit der Grundfläche des Feldes und der Höhe $h = 12\,\text{mm} = 0{,}012\,\text{m}$. Ihr Volumen ist $V = A\cdot h$.
  ---
  **a)** $V = 10\,000\,\text{m}^2\cdot 0{,}012\,\text{m} = 120\,\text{m}^3$. Die Einheit ist $\text{m}^2\cdot\text{m} = \text{m}^3$.
  ---
  **b)** $120\,\text{m}^3 = 120\cdot 1000\,\text{L} = 120\,000\,\text{L}$. Auf $1\,\text{m}^2$ fallen $1\,\text{m}^2\cdot 0{,}012\,\text{m} = 0{,}012\,\text{m}^3 = 12\,\text{L}$.
  ---
  **Merkregel und Probe:** $1\,\text{mm}$ Niederschlag sind genau $1\,\text{L}$ pro Quadratmeter. Probe: $12\,\text{L/m}^2\cdot 10\,000\,\text{m}^2 = 120\,000\,\text{L}$.
```

```reflexion
frage: Warum ist $1\,\text{m}^3$ eine Million Kubikzentimeter, obwohl ein Meter nur hundert Zentimeter hat? Erkläre es mit einem Würfel.
antwort: |
  Ein Würfel mit $1\,\text{m}$ Kantenlänge hat entlang jeder Kante $100$ Zentimeter. Man kann ihn also in
  $100$ Schichten zerlegen, jede Schicht in $100$ Reihen und jede Reihe in $100$ kleine Würfel mit
  $1\,\text{cm}$ Kantenlänge. Das sind $100\cdot 100\cdot 100 = 10^{6}$ Würfelchen. Weil das Volumen in drei
  Richtungen wächst, wird der Umrechnungsfaktor $100$ dreimal genommen.
```

## Dimensionsanalyse

```aufgabe
id: p1-4-check
art: check
titel: "Vorwissen: Potenzen gleicher Basis"
niveau: 1
angabe: |
  Vereinfache $\dfrac{\text{m}^3}{\text{m}}\cdot\text{m}^{-1}$ zu $\text{m}^{n}$. Wie lautet $n$?
teile:
  - typ: zahl
    label: '$n$'
    loesung: "3-1-1"
    fehler:
      - wert: "3"
        meldung: Teilen durch $\text{m}$ und Multiplizieren mit $\text{m}^{-1}$ verkleinern beide den Exponenten um $1$.
      - wert: "2"
        meldung: Du hast nur einen der beiden Schritte gemacht. Auch $\text{m}^{-1}$ verkleinert den Exponenten noch einmal um $1$.
hinweise:
  - Beim Teilen subtrahiert man Exponenten, beim Multiplizieren addiert man sie.
loesung: |
  Teilen durch $\text{m} = \text{m}^1$: Exponent $3 - 1 = 2$. Multiplizieren mit $\text{m}^{-1}$: Exponent $2 + (-1) = 1$.
  ---
  Also $n = 1$. Mit Einheiten rechnest du genau wie mit Potenzen einer Variablen. Wiederholen: [1.9 Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln).
```

Die **Dimension** einer Größe sagt, welche Art von Größe sie ist: eine Länge, eine Zeit, eine Masse oder
eine Kombination daraus. Kilometer und Zentimeter sind verschiedene Einheiten, haben aber dieselbe
Dimension „Länge“. Man darf sie ineinander umrechnen und addieren. Meter und Sekunden haben verschiedene
Dimensionen. Sie lassen sich nie ineinander umrechnen.

Jede physikalisch richtige Gleichung ist **dimensionsrichtig**. Das heißt: Links und rechts steht dieselbe
Dimension. Daraus folgen drei Regeln.

:::satz[Regeln der Dimensionsanalyse]
1. Beide Seiten einer Gleichung haben dieselbe Dimension.
2. Alle Summanden einer Summe haben dieselbe Dimension. Man kann Meter nicht zu Sekunden addieren.
3. Die Argumente von $\sin$, $\cos$, $e^{x}$ und $\ln$ sind **dimensionslos**, also reine Zahlen ohne Einheit.
   Ein Winkel im Bogenmaß gilt als dimensionslos.
:::

Das **Argument** einer Funktion ist das, was in der Klammer steht. In $\sin(\omega t)$ ist das Argument
$\omega t$. Es muss eine reine Zahl sein, denn „Sinus von drei Sekunden“ hat keine Bedeutung.

### Anwendung 1: Ein Ergebnis kontrollieren

Mit der Dimensionsanalyse prüfst du eine Formel, ohne sie herzuleiten. Du setzt nur die Einheiten ein.

:::beispiel[Stimmt die Weg-Zeit-Formel?]
Für eine Bewegung aus der Ruhe mit konstanter Beschleunigung $a$ steht in einer Mitschrift $s = \tfrac12 a t^2$.
Dabei ist $s$ der Weg in m, $a$ die Beschleunigung in $\text{m/s}^2$ und $t$ die Zeit in s.

**Schritt 1, rechte Seite:** Der Faktor $\tfrac12$ hat keine Einheit. Also
$[a t^2] = \dfrac{\text{m}}{\text{s}^2}\cdot\text{s}^2 = \text{m}$.

**Schritt 2, Vergleich:** Links steht ein Weg in m, rechts auch. Die Formel ist dimensionsrichtig.

**Gegenprobe:** Hätte jemand $s = \tfrac12 a t$ geschrieben, ergäbe sich
$\dfrac{\text{m}}{\text{s}^2}\cdot\text{s} = \dfrac{\text{m}}{\text{s}}$. Das ist eine Geschwindigkeit, kein
Weg. Diese Formel ist sicher falsch.
:::

:::achtung[Dimensionsrichtig heißt nicht richtig]
Eine Schülerin schreibt $s = a t^2$ statt $s = \tfrac12 a t^2$. Die Einheiten stimmen, denn
$\text{m/s}^2\cdot\text{s}^2 = \text{m}$. Mit $a = 2\,\text{m/s}^2$ und $t = 3\,\text{s}$ erhält sie
$s = 2\cdot 9\,\text{m} = 18\,\text{m}$.

**Richtig** ist $s = \tfrac12\cdot 2\cdot 9\,\text{m} = 9\,\text{m}$. Die Dimensionsanalyse findet keine
fehlenden Zahlenfaktoren wie $\tfrac12$, $2\pi$ oder $\sqrt2$. Sie findet auch keine Vorzeichenfehler.
**Merke:** Eine dimensionsfalsche Formel ist immer falsch. Eine dimensionsrichtige kann trotzdem falsch sein.
:::

```aufgabe
id: p1-dimension-pruefen
titel: Dimensionsrichtige Formel
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  Für die Aufprallgeschwindigkeit $v$ eines aus der Höhe $h$ frei fallenden Körpers werden vier Formeln vorgeschlagen. Dabei ist $g$ die Fallbeschleunigung in $\text{m/s}^2$. Welche Formel ist **dimensionsrichtig**?
teile:
  - typ: auswahl
    optionen:
      - '$v = 2gh$'
      - '$v = \sqrt{2gh}$'
      - '$v = \sqrt{2g/h}$'
      - '$v = g h^2$'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: '$2gh$ hat die Einheit $\text{m/s}^2\cdot\text{m} = \text{m}^2/\text{s}^2$. Das ist das **Quadrat** einer Geschwindigkeit. Es fehlt eine Wurzel.'
      - wert: 2
        meldung: '$g/h$ hat die Einheit $\frac{\text{m/s}^2}{\text{m}} = \text{s}^{-2}$. Die Wurzel daraus ist $1/\text{s}$, eine Frequenz, keine Geschwindigkeit.'
      - wert: 3
        meldung: '$gh^2$ hat die Einheit $\text{m}^3/\text{s}^2$. Das ist keine Geschwindigkeit.'
hinweise:
  - Setze für $g$ die Einheit $\text{m/s}^2$ und für $h$ die Einheit m ein. Vergleiche mit m/s.
loesung: |
  **Ansatz:** Wir setzen in jede Formel die Einheiten ein und vergleichen mit der Einheit einer Geschwindigkeit, m/s.
  ---
  $[2gh] = \text{m/s}^2\cdot\text{m} = \text{m}^2/\text{s}^2$. Also ist $[\sqrt{2gh}] = \text{m/s}$, dimensionsrichtig. Die anderen ergeben $\text{m}^2/\text{s}^2$, $1/\text{s}$ und $\text{m}^3/\text{s}^2$.
```

```aufgabe
id: p1-dimension-einheit-ergebnis
titel: Welche Größe hast du berechnet?
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  Am Ende einer Rechnung, in der eigentlich eine **Energie** herauskommen sollte, steht die Einheit $\text{kg}\cdot\text{m/s}$. Welche Größe hast du in Wahrheit berechnet?
teile:
  - typ: auswahl
    optionen:
      - "eine Kraft"
      - "einen Impuls (Masse mal Geschwindigkeit)"
      - "eine Leistung"
      - "doch eine Energie, die Einheit ist nur anders geschrieben"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Eine Kraft hat die Einheit $\text{kg}\cdot\text{m/s}^2$. Hier fehlt im Nenner eine Sekunde.'
      - wert: 3
        meldung: 'Eine Energie hat die Einheit $\text{J} = \text{kg}\,\text{m}^2/\text{s}^2$. Das ist eine andere Kombination, man kann sie nicht ineinander umschreiben.'
      - wert: 2
        meldung: 'Eine Leistung hat die Einheit $\text{W} = \text{kg}\,\text{m}^2/\text{s}^3$.'
hinweise:
  - Welche bekannte Formel ist Masse mal Geschwindigkeit?
loesung: |
  **Ansatz:** Wir zerlegen die Einheit: $\text{kg}\cdot\text{m/s}$ ist Masse mal Geschwindigkeit.
  ---
  Masse mal Geschwindigkeit ist der **Impuls**, $p = m\cdot v$. Eine Energie wie $\tfrac12 m v^2$ hätte $\text{kg}\,\text{m}^2/\text{s}^2$. Wahrscheinlich fehlt in der Rechnung ein Quadrat bei $v$.
```

### Anwendung 2: Einen Zusammenhang erschließen

Die Dimensionsanalyse kann noch mehr. Sie kann die Form eines Zusammenhangs vorhersagen, bevor man ihn
gemessen oder hergeleitet hat. Das ist eine schwierige, aber sehr elegante Idee. Lies das folgende
Beispiel langsam.

:::beispiel[Wovon hängt die Schwingungsdauer eines Pendels ab?]
**Frage:** Wovon hängt die Schwingungsdauer $T$ (in s) eines Fadenpendels ab? In Frage kommen die
Fadenlänge $l$ (in m), die Masse $m$ (in kg) und die Fallbeschleunigung $g$ (in $\text{m/s}^2$).

**Schritt 1, Ansatz als Produkt von Potenzen:**
$$T = C\cdot l^{\alpha}\cdot m^{\beta}\cdot g^{\gamma}.$$
Dabei ist $C$ eine reine Zahl ohne Einheit. Die Exponenten $\alpha$, $\beta$, $\gamma$ (griechisch alpha,
beta, gamma) sind gesucht.

**Schritt 2, Einheiten einsetzen:** Links steht $\text{s}^1$. Rechts steht
$\text{m}^{\alpha}\cdot\text{kg}^{\beta}\cdot(\text{m}\,\text{s}^{-2})^{\gamma} = \text{m}^{\alpha+\gamma}\,\text{kg}^{\beta}\,\text{s}^{-2\gamma}$.

**Schritt 3, Exponenten vergleichen:** Jede Basiseinheit muss links und rechts denselben Exponenten haben.

- Kilogramm: Links kommt kg nicht vor, also $\beta = 0$.
- Sekunde: $1 = -2\gamma$. Wir teilen durch $-2$ und erhalten $\gamma = -\tfrac12$.
- Meter: Links kommt m nicht vor, also $\alpha + \gamma = 0$ und damit $\alpha = \tfrac12$.

**Schritt 4, Ergebnis:**
$$T = C\cdot l^{1/2}\cdot g^{-1/2} = C\sqrt{\frac{l}{g}}.$$

**Was haben wir gezeigt?** Ohne jede Physik folgt: Die Masse spielt keine Rolle. Ein viermal so langes
Pendel schwingt $\sqrt4 = 2$-mal so lange. Nur die Zahl $C$ liefert die Dimensionsanalyse nicht. Eine
Herleitung im [Kapitel Schwingungen](/lernen/physik1/schwingungen) zeigt $C = 2\pi$.
:::

Das Vergleichen der Exponenten führt auf ein kleines lineares Gleichungssystem. Wie man solche Systeme
löst, steht in [3.2 Systeme mit zwei Unbekannten](/lernen/mathe3/lgs-matrizen/systeme-mit-zwei-unbekannten).
Oft enthält jede Gleichung nur eine Unbekannte, dann löst du sie einzeln wie in
[2.2 Lineare Gleichungen](/lernen/mathe3/gleichungen/lineare-gleichungen).

:::merke[Rezept: Zusammenhang mit der Dimensionsanalyse finden]
1. Ansatz: gesuchte Größe gleich $C$ mal Produkt der möglichen Einflussgrößen hoch unbekannte Exponenten.
2. Alle Größen durch Basiseinheiten ersetzen und gleiche Einheiten zusammenfassen.
3. Für jede Basiseinheit die Exponenten links und rechts gleichsetzen.
4. Das Gleichungssystem lösen. Die Zahl $C$ bleibt unbestimmt.
:::

:::achtung[Summanden mit verschiedener Einheit]
In einer Mitschrift steht $v = a t + s$. Dabei ist $a$ eine Beschleunigung, $t$ eine Zeit, $s$ ein Weg.
Mit $a = 2\,\text{m/s}^2$, $t = 3\,\text{s}$ und $s = 5\,\text{m}$ rechnet jemand $v = 6 + 5 = 11$.

**Der Fehler:** Der erste Summand hat die Einheit m/s, der zweite m. Solche Größen kann man nicht addieren,
die „$11$“ hat keine Einheit und keine Bedeutung. **Richtig** wäre zum Beispiel $v = v_0 + a t$ mit einer
Anfangsgeschwindigkeit $v_0$. Wenn Summanden verschiedene Einheiten haben, ist die Formel immer falsch.
:::

```aufgabe
id: p1-dimension-summanden
titel: Ein Fehler in der Formel
niveau: 2
lernziel: 3
kompetenz: begruenden
angabe: |
  Eine Mitschrift enthält die Formel $s = v_0 t + \tfrac12 a t^3$ für den Weg. Dabei ist $v_0$ eine Geschwindigkeit, $a$ eine Beschleunigung, $t$ eine Zeit. Welche Einheit hat der zweite Summand, und ist die Formel dimensionsrichtig?
teile:
  - typ: auswahl
    optionen:
      - "m, die Formel ist dimensionsrichtig"
      - "m·s, die Formel ist falsch"
      - "m/s, die Formel ist falsch"
      - "m/s², die Formel ist falsch"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Rechne $[a]\cdot[t^3]$ genau nach. $\text{s}^3$ geteilt durch $\text{s}^2$ lässt eine Sekunde übrig.'
      - wert: 2
        meldung: 'Die Sekunden stehen im Zähler, nicht im Nenner. $\frac{\text{m}}{\text{s}^2}\cdot\text{s}^3 = \text{m}\cdot\text{s}$.'
hinweise:
  - '$[a]\cdot[t^3] = \dfrac{\text{m}}{\text{s}^2}\cdot\text{s}^3$.'
  - Vergleiche das Ergebnis mit der Einheit des ersten Summanden $v_0 t$.
loesung: |
  **Ansatz:** Alle Summanden müssen dieselbe Einheit haben wie die linke Seite, also m.
  ---
  $[v_0 t] = \text{m/s}\cdot\text{s} = \text{m}$. Aber $[a t^3] = \text{m}\,\text{s}^{-2}\cdot\text{s}^3 = \text{m}\cdot\text{s}$.
  ---
  **Schluss:** Die Summanden haben verschiedene Einheiten, die Formel ist sicher falsch. Richtig ist $s = v_0 t + \tfrac12 a t^2$, dann hat auch der zweite Summand die Einheit m.
```

```aufgabe
id: p1-dimension-exponent
titel: Was steht im Exponenten?
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Die Temperaturdifferenz einer abkühlenden Tasse Tee folgt dem Gesetz $\Delta T(t) = \Delta T_0\cdot e^{-t/\tau}$. Dabei ist $t$ die Zeit in s und $\tau$ (griechisch „tau“) eine Konstante. Welche Einheit muss $\tau$ haben?
teile:
  - typ: auswahl
    optionen:
      - "s"
      - "1/s"
      - "K"
      - "keine, $\\tau$ ist eine reine Zahl"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Dann hätte $t/\tau$ die Einheit $\text{s}\cdot\text{s} = \text{s}^2$. Das Argument der e-Funktion muss aber eine reine Zahl sein.'
      - wert: 3
        meldung: 'Dann hätte $t/\tau$ die Einheit s. „e hoch Sekunden“ ist nicht definiert. Das Argument muss dimensionslos sein.'
      - wert: 2
        meldung: 'Kelvin kürzt sich nicht gegen die Sekunden von $t$. Das Argument wäre dann $\text{s}/\text{K}$.'
hinweise:
  - Das Argument der e-Funktion muss dimensionslos sein.
  - Welche Einheit muss $\tau$ haben, damit sich die Einheit von $t$ wegkürzt?
loesung: |
  **Ansatz:** Nach Regel 3 ist das Argument $-t/\tau$ der e-Funktion dimensionslos.
  ---
  $t$ hat die Einheit s. Damit $t/\tau$ keine Einheit hat, muss $\tau$ ebenfalls in s gemessen werden.
  ---
  **Deutung:** $\tau$ ist eine charakteristische Zeit. Nach der Zeit $\tau$ ist die Temperaturdifferenz auf $1/e \approx 37\,\%$ gesunken.
```

```aufgabe
id: p1-dimension-fallzeit
titel: Die Fallzeit mit der Dimensionsanalyse
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Die Fallzeit $t$ eines Steins hängt von der Fallhöhe $h$ (in m) und der Fallbeschleunigung $g$ (in $\text{m/s}^2$) ab. Bestimme mit dem Ansatz $t = C\cdot h^{\alpha}\cdot g^{\beta}$ die Exponenten.
teile:
  - typ: zahl
    label: '$\alpha$'
    loesung: "1/2"
    anzeige: '\tfrac12'
    fehler:
      - wert: "1"
        meldung: 'Mit $\alpha = 1$ blieben rechts Meter übrig, denn $g$ bringt schon $\text{m}^{\beta}$ mit. Links steht kein Meter, also muss der Exponent von m rechts null sein: $\alpha + \beta = 0$.'
  - typ: zahl
    label: '$\beta$'
    loesung: "-1/2"
    anzeige: '-\tfrac12'
    fehler:
      - wert: "1/2"
        meldung: 'Das Vorzeichen stimmt nicht. Aus $1 = -2\beta$ folgt $\beta = -\tfrac12$.'
      - wert: "-2"
        meldung: 'Du hast den Exponenten von s in $g$ genommen. Gesucht ist $\beta$ mit $-2\beta = 1$.'
hinweise:
  - 'Rechts steht $\text{m}^{\alpha}\cdot(\text{m}\,\text{s}^{-2})^{\beta} = \text{m}^{\alpha+\beta}\,\text{s}^{-2\beta}$.'
  - 'Links steht $\text{s}^1$. Vergleiche die Exponenten von s und von m.'
gefuehrt:
  - text: Schreibe die Einheiten der rechten Seite zusammen. Welchen Exponenten hat s rechts, ausgedrückt durch $\beta$? Gib den Faktor vor $\beta$ ein.
    teil: { typ: zahl, loesung: "-2" }
    erklaerung: '$g$ hat $\text{s}^{-2}$, hoch $\beta$ ergibt $\text{s}^{-2\beta}$. Der Faktor ist $-2$.'
  - text: Links steht $\text{s}^1$. Berechne $\beta$ aus $-2\beta = 1$.
    teil: { typ: zahl, loesung: "-1/2" }
    erklaerung: Wir teilen beide Seiten durch $-2$ und erhalten $\beta = -\tfrac12$.
  - text: Für m gilt $\alpha + \beta = 0$, weil links kein Meter steht. Berechne $\alpha$.
    teil: { typ: zahl, loesung: "1/2" }
    erklaerung: '$\alpha = -\beta = \tfrac12$.'
  - text: Überlege, was das für die Formel bedeutet.
    erklaerung: '$t = C\sqrt{h/g}$. Die genaue Rechnung im Kapitel Kinematik liefert $C = \sqrt2$, also $t = \sqrt{2h/g}$.'
loesung: |
  **Ansatz:** Einheiten einsetzen: $\text{s}^1 = \text{m}^{\alpha}\cdot(\text{m}\,\text{s}^{-2})^{\beta} = \text{m}^{\alpha+\beta}\,\text{s}^{-2\beta}$.
  ---
  **Sekunden:** $1 = -2\beta$, also $\beta = -\tfrac12$.
  ---
  **Meter:** $\alpha + \beta = 0$, also $\alpha = \tfrac12$.
  ---
  **Ergebnis und Probe:** $t = C\sqrt{h/g}$. Einheit: $\sqrt{\text{m}/(\text{m/s}^2)} = \sqrt{\text{s}^2} = \text{s}$. Die genaue Herleitung ergibt $C = \sqrt2$.
```

```aufgabe
id: p1-dimension-feder
titel: Dimensionsanalyse beim Federpendel
niveau: 3
lernziel: 3
kompetenz: rechnen
angabe: |
  Die Schwingungsdauer $T$ eines Federpendels hängt von der Masse $m$ und der Federkonstanten $D$ (Einheit N/m) ab. Bestimme mit dem Ansatz $T = C\,m^{\alpha} D^{\beta}$ die Exponenten. Um welchen Faktor ändert sich $T$, wenn man die Masse vervierfacht?
teile:
  - typ: zahl
    label: '$\alpha$'
    loesung: "1/2"
    anzeige: '\tfrac12'
  - typ: zahl
    label: '$\beta$'
    loesung: "-1/2"
    anzeige: '-\tfrac12'
  - typ: zahl
    label: Faktor bei vierfacher Masse
    loesung: "sqrt(4)"
    anzeige: '2'
hinweise:
  - 'Schreibe zuerst die Federkonstante in Basiseinheiten: $\text{N/m} = \text{kg}\,\text{m}\,\text{s}^{-2}/\text{m}$.'
  - Vergleiche die Exponenten von kg und s auf beiden Seiten.
loesung: |
  **Ansatz:** $[D] = \text{N/m} = \text{kg}\,\text{m}\,\text{s}^{-2}/\text{m} = \text{kg}\,\text{s}^{-2}$. Der Meter kürzt sich.
  ---
  Einheiten einsetzen: $\text{s}^1 = \text{kg}^{\alpha}\cdot\text{kg}^{\beta}\,\text{s}^{-2\beta} = \text{kg}^{\alpha+\beta}\,\text{s}^{-2\beta}$.
  ---
  Sekunden: $1 = -2\beta$, also $\beta = -\tfrac12$. Kilogramm: $\alpha + \beta = 0$, also $\alpha = \tfrac12$.
  ---
  **Ergebnis:** $T = C\sqrt{m/D}$, die genaue Herleitung liefert $C = 2\pi$. Bei vierfacher Masse wächst $T$ um $\sqrt4 = 2$, die Schwingung dauert doppelt so lang.
```

```aufgabe
id: p1-dimension-wasserwelle
titel: Geschwindigkeit von Wasserwellen
niveau: 3
lernziel: 3
kompetenz: modellieren
angabe: |
  Die Ausbreitungsgeschwindigkeit $v$ von Wellen auf tiefem Wasser hängt nur von der Wellenlänge $\lambda$ (griechisch „lambda“, in m) und von $g$ ab. Bestimme mit dem Ansatz $v = C\,\lambda^{\alpha} g^{\beta}$ die Exponenten. Um welchen Faktor ist eine Welle mit vierfacher Wellenlänge schneller?
teile:
  - typ: zahl
    label: '$\alpha$'
    loesung: "1/2"
    anzeige: '\tfrac12'
  - typ: zahl
    label: '$\beta$'
    loesung: "1/2"
    anzeige: '\tfrac12'
  - typ: zahl
    label: Faktor bei vierfacher Wellenlänge
    loesung: "sqrt(4)"
    anzeige: '2'
    fehler:
      - wert: "4"
        meldung: Die Geschwindigkeit wächst nicht proportional zur Wellenlänge, sondern mit ihrer Wurzel.
hinweise:
  - 'Vergleiche $\text{m}^1\,\text{s}^{-1}$ mit $\text{m}^{\alpha}\,\text{m}^{\beta}\,\text{s}^{-2\beta}$.'
  - Löse zuerst die Gleichung für die Sekunden, dann die für die Meter.
loesung: |
  **Ansatz:** Einheiten einsetzen: $\text{m}\,\text{s}^{-1} = \text{m}^{\alpha}\cdot(\text{m}\,\text{s}^{-2})^{\beta} = \text{m}^{\alpha+\beta}\,\text{s}^{-2\beta}$.
  ---
  Sekunden: $-1 = -2\beta$, also $\beta = \tfrac12$. Meter: $\alpha + \beta = 1$, also $\alpha = \tfrac12$. Damit $v = C\sqrt{g\lambda}$.
  ---
  **Proportionalitätsschluss:** $v$ ist proportional zu $\sqrt\lambda$. Bei vierfacher Wellenlänge wächst $v$ um $\sqrt4 = 2$.
  ---
  **Deutung:** Lange Wellen laufen schneller. Deshalb erreicht die lange Dünung eines fernen Sturms die Küste vor den kurzen Wellen.
```

```reflexion
frage: Die Dimensionsanalyse hat beim Pendel gezeigt, dass die Masse keine Rolle spielt. Warum konnte sie das erkennen, ohne die Physik des Pendels zu kennen?
antwort: |
  Die Masse ist die einzige Größe im Ansatz, die die Einheit Kilogramm enthält. Weder die Länge noch $g$ noch
  die gesuchte Zeit enthalten kg. Hätte die Masse einen Exponenten ungleich null, bliebe rechts ein Kilogramm
  übrig, das links fehlt. Also muss ihr Exponent null sein. Die Einheiten allein erzwingen das.
```

## Längenmessung

```aufgabe
id: p1-5-check
art: check
titel: "Vorwissen: Millimeter in Meter"
niveau: 1
angabe: |
  Wie viele Meter sind $0{,}01\,\text{mm}$? Gib die Zahl in Zehnerpotenzschreibweise ein. Zehnerpotenzen tippst du mit e, zum Beispiel $2\cdot 10^{-4}$ als 2e-4.
teile:
  - typ: zahl
    loesung: "0.01e-3"
    einheit: "m"
    anzeige: '10^{-5}'
    fehler:
      - wert: "0.01e-2"
        meldung: Ein Millimeter ist $10^{-3}\,\text{m}$, nicht $10^{-2}\,\text{m}$. $10^{-2}\,\text{m}$ ist ein Zentimeter.
hinweise:
  - '$1\,\text{mm} = 10^{-3}\,\text{m}$ und $0{,}01 = 10^{-2}$.'
loesung: |
  $0{,}01\,\text{mm} = 10^{-2}\cdot 10^{-3}\,\text{m}$.
  ---
  Exponenten addieren: $10^{-2-3}\,\text{m} = 10^{-5}\,\text{m}$, also ein Hundertstel Millimeter. Wiederholen: [1.3 Vorsilben, Zehnerpotenzen und Umrechnen](/lernen/physik1/groessen-einheiten-messen/vorsilben-zehnerpotenzen-und-umrechnen).
```

### Was ein Meter ist

Eine Länge messen heißt, sie mit einer festgelegten Einheitslänge zu vergleichen. Die Geschichte des
Meters zeigt, wie schwer es ist, eine gute Einheit festzulegen.

- **1799:** Der Meter war der zehnmillionste Teil der Strecke vom Nordpol zum Äquator, gemessen entlang
  eines Längenkreises durch Paris.
- **1889:** Der Meter war der Abstand zweier Striche auf einem Stab aus Platin und Iridium bei Paris, dem
  **Urmeter**. Kopien wurden an viele Länder verteilt.
- **1960:** Der Meter wurde über die Wellenlänge eines bestimmten Lichts von Krypton-Atomen festgelegt.
- **Seit 1983:** Der Meter ist über die Lichtgeschwindigkeit festgelegt.

Das Urmeter hatte zwei Nachteile. Es war nur so genau, wie man die Striche ablesen konnte. Außerdem gab
es nur ein Original, und jede Kopie konnte sich durch Wärme oder Abnutzung verändern.

:::definition[Meter (seit 1983)]
Ein **Meter** ist die Strecke, die Licht im Vakuum in $\dfrac{1}{299\,792\,458}$ Sekunden zurücklegt.

Dadurch ist die Lichtgeschwindigkeit **exakt** $c = 299\,792\,458\,\text{m/s}$. Sie wird nicht mehr
gemessen, sondern ist festgelegt.

**Beispiel:** In einer Nanosekunde ($10^{-9}\,\text{s}$) legt Licht knapp $30\,\text{cm}$ zurück. Diese
Strecke ist damit über eine Zeitmessung bestimmt.

**Keine Definition des Meters:** „Die Länge des Urmeters bei Paris“. Das war eine alte Festlegung. Der Stab
wird noch aufbewahrt, hat aber keine Bedeutung für die Einheit mehr.
:::

**Warum über die Zeit?** Zeit lässt sich viel genauer messen als jede Länge. Atomuhren erreichen eine
relative Genauigkeit von etwa $10^{-16}$. Wer die Länge auf eine Zeitmessung zurückführt, erbt diese
Genauigkeit. Eine Längenmessung ist damit letztlich eine Laufzeitmessung von Licht.

```aufgabe
id: p1-meter-definition
titel: Was ist seit 1983 festgelegt?
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Welche Aussage über den Meter und die Lichtgeschwindigkeit ist richtig?
teile:
  - typ: auswahl
    optionen:
      - "Man misst die Lichtgeschwindigkeit immer genauer und passt den Meter laufend an."
      - "Die Lichtgeschwindigkeit ist exakt festgelegt. Der Meter folgt aus ihr und aus der Sekunde."
      - "Der Meter ist die Länge des Urmeters in Paris. Die Lichtgeschwindigkeit wird damit gemessen."
      - "Meter und Lichtgeschwindigkeit sind unabhängig voneinander festgelegt."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Seit 1983 wird $c$ nicht mehr gemessen. Sein Wert $299\,792\,458\,\text{m/s}$ ist per Definition exakt. Eine genauere Messung verbessert nur die Verwirklichung des Meters, nicht den Wert von $c$.
      - wert: 2
        meldung: Das war die Festlegung von 1889 bis 1960. Heute spielt das Urmeter für die Definition keine Rolle mehr.
      - wert: 3
        meldung: Wären beide unabhängig festgelegt, könnte eine Messung von $c$ einen anderen Wert ergeben. Genau das verhindert die heutige Definition, die beide fest verbindet.
hinweise:
  - Was ist in der heutigen Definition fest, was wird daraus abgeleitet?
loesung: |
  **Definition:** Der Meter ist die Strecke, die Licht in $1/299\,792\,458\,\text{s}$ zurücklegt.
  ---
  Damit ist $c$ exakt festgelegt, und der Meter folgt aus $c$ und der Sekunde. Richtig ist die zweite Aussage.
```

### Messgeräte für verschiedene Längen

Welches Verfahren man wählt, hängt von der Größe der Länge und der nötigen Genauigkeit ab.

- **Maßband und Lineal** für Millimeter bis Meter, genau auf etwa $1\,\text{mm}$.
- **Messschieber mit Nonius** für Millimeter bis Dezimeter, genau auf $0{,}1\,\text{mm}$ bis $0{,}02\,\text{mm}$.
- **Mikrometerschraube** für Mikrometer bis einige Zentimeter, genau auf $0{,}01\,\text{mm}$.
- **Laufzeitmessung** mit Laser, Radar oder Ultraschall für Meter bis Kilometer, genau auf Millimeter bis Zentimeter.
- **Triangulation und Parallaxe** für große Entfernungen bis zu den Sternen.
- **Mikroskop und Interferometer** für Längen im Bereich der Lichtwellenlänge, also unter einem Mikrometer.

### Der Nonius

Ein **Messschieber** (auch Schublehre) hat eine feste Hauptskala in Millimetern und einen verschiebbaren
Schieber. Auf dem Schieber sitzt eine kleine Hilfsskala, der **Nonius**. Beim häufigsten Nonius sind
$10$ Noniusstriche zusammen $9\,\text{mm}$ lang. Jeder Abstand auf dem Nonius ist also $0{,}9\,\text{mm}$,
um $0{,}1\,\text{mm}$ kürzer als ein Millimeter.

**So liest du ab:**

1. Die **ganzen Millimeter** liest du auf der Hauptskala links neben der Nullmarke des Nonius ab.
2. Dann suchst du den Noniusstrich, der **genau** mit einem Strich der Hauptskala zusammenfällt. Seine
   Nummer gibt die **Zehntelmillimeter**.

Warum funktioniert das? Liegt die Nullmarke $0{,}3\,\text{mm}$ hinter einem Millimeterstrich, dann holt
jeder Noniusstrich $0{,}1\,\text{mm}$ auf. Nach drei Strichen ist der Rückstand aufgeholt. Der dritte
Noniusstrich trifft genau einen Hauptstrich.

```plot
x: [9.5, 23.5]
y: [-1.6, 1.6]
hoehe: 200
achsen: { x: "Hauptskala in mm" }
strecken:
  - { von: [10, 0], nach: [10, 0.9] }
  - { von: [11, 0], nach: [11, 0.6] }
  - { von: [12, 0], nach: [12, 0.6] }
  - { von: [13, 0], nach: [13, 0.6] }
  - { von: [14, 0], nach: [14, 0.6] }
  - { von: [15, 0], nach: [15, 0.9] }
  - { von: [16, 0], nach: [16, 0.6] }
  - { von: [17, 0], nach: [17, 0.6] }
  - { von: [18, 0], nach: [18, 0.6] }
  - { von: [19, 0], nach: [19, 0.6] }
  - { von: [20, 0], nach: [20, 0.9] }
  - { von: [21, 0], nach: [21, 0.6] }
  - { von: [22, 0], nach: [22, 0.6] }
  - { von: [23, 0], nach: [23, 0.6] }
  - { von: [12.3, 0], nach: [12.3, -0.9], farbe: 1 }
  - { von: [13.2, 0], nach: [13.2, -0.6], farbe: 1 }
  - { von: [14.1, 0], nach: [14.1, -0.6], farbe: 1 }
  - { von: [15.0, 0], nach: [15.0, -0.6], farbe: 1 }
  - { von: [15.9, 0], nach: [15.9, -0.6], farbe: 1 }
  - { von: [16.8, 0], nach: [16.8, -0.9], farbe: 1 }
  - { von: [17.7, 0], nach: [17.7, -0.6], farbe: 1 }
  - { von: [18.6, 0], nach: [18.6, -0.6], farbe: 1 }
  - { von: [19.5, 0], nach: [19.5, -0.6], farbe: 1 }
  - { von: [20.4, 0], nach: [20.4, -0.6], farbe: 1 }
  - { von: [21.3, 0], nach: [21.3, -0.9], farbe: 1 }
punkte:
  - { x: 12.3, y: -1.2, label: "Nullmarke", farbe: 1 }
  - { x: 15, y: 1.2, label: "Treffer", farbe: 2 }
beschriftung: "Messschieber mit Zehntel-Nonius. Oben die Hauptskala in Millimetern von 10 bis 23 mm, unten der Nonius mit 10 Abständen von je 0,9 mm. Die Nullmarke des Nonius liegt zwischen 12 und 13 mm. Der dritte Noniusstrich trifft genau den Hauptstrich bei 15 mm."
```

:::beispiel[Einen Messschieber ablesen]
**Schritt 1, ganze Millimeter:** Die Nullmarke des Nonius steht zwischen $12$ und $13\,\text{mm}$. Also
sind es $12\,\text{mm}$ und ein Rest.

**Schritt 2, Zehntel:** Der **dritte** Noniusstrich (die Nullmarke zählt als nullter) trifft genau einen
Strich der Hauptskala, nämlich bei $15\,\text{mm}$.

**Schritt 3, Ergebnis:** $12\,\text{mm} + 3\cdot 0{,}1\,\text{mm} = 12{,}3\,\text{mm}$.

**Probe:** Die Nullmarke liegt bei $12{,}3$, der dritte Strich bei $12{,}3 + 3\cdot 0{,}9 = 15{,}0\,\text{mm}$.
:::

```aufgabe
id: p1-nonius
titel: Messschieber mit Nonius
niveau: 1
lernziel: 4
kompetenz: anwenden
angabe: |
  Bei einem Messschieber mit Zehntel-Nonius steht die Nullmarke des Nonius zwischen $23\,\text{mm}$ und $24\,\text{mm}$. Der 7. Noniusstrich fällt genau mit einem Strich der Hauptskala zusammen. Wie lautet der Messwert in mm?
teile:
  - typ: zahl
    loesung: "23+7*0.1"
    einheit: "mm"
    anzeige: '23{,}7'
    fehler:
      - wert: "23+7*0.9"
        meldung: Ein Noniusstrich ist $0{,}9\,\text{mm}$ lang, aber jeder Strich holt nur $0{,}1\,\text{mm}$ auf. Die Nummer des Treffers gibt die Zehntelmillimeter.
      - wert: "24.7"
        meldung: Die ganzen Millimeter liest du **links** neben der Nullmarke ab, also beim kleineren Wert.
hinweise:
  - Jeder Noniusstrich ist um $0{,}1\,\text{mm}$ kürzer als ein Millimeter.
loesung: |
  **Ganze Millimeter:** links neben der Nullmarke, also $23\,\text{mm}$.
  ---
  **Zehntel:** Der 7. Strich trifft, also liegt die Nullmarke $7\cdot 0{,}1\,\text{mm} = 0{,}7\,\text{mm}$ hinter dem $23$-mm-Strich. Messwert $23{,}7\,\text{mm}$.
```

```aufgabe
id: p1-nonius-bild
titel: Einen Nonius im Bild ablesen
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Lies den Messschieber im Bild ab. Oben ist die Hauptskala in Millimetern, unten der Zehntel-Nonius. Die lange untere Linie ganz links ist die Nullmarke. Gib den Messwert in mm an.
plot:
  x: [28.5, 42.5]
  y: [-1.6, 1.6]
  hoehe: 200
  achsen: { x: "Hauptskala in mm" }
  strecken:
    - { von: [29, 0], nach: [29, 0.6] }
    - { von: [30, 0], nach: [30, 0.9] }
    - { von: [31, 0], nach: [31, 0.6] }
    - { von: [32, 0], nach: [32, 0.6] }
    - { von: [33, 0], nach: [33, 0.6] }
    - { von: [34, 0], nach: [34, 0.6] }
    - { von: [35, 0], nach: [35, 0.9] }
    - { von: [36, 0], nach: [36, 0.6] }
    - { von: [37, 0], nach: [37, 0.6] }
    - { von: [38, 0], nach: [38, 0.6] }
    - { von: [39, 0], nach: [39, 0.6] }
    - { von: [40, 0], nach: [40, 0.9] }
    - { von: [41, 0], nach: [41, 0.6] }
    - { von: [42, 0], nach: [42, 0.6] }
    - { von: [31.6, 0], nach: [31.6, -0.9], farbe: 1 }
    - { von: [32.5, 0], nach: [32.5, -0.6], farbe: 1 }
    - { von: [33.4, 0], nach: [33.4, -0.6], farbe: 1 }
    - { von: [34.3, 0], nach: [34.3, -0.6], farbe: 1 }
    - { von: [35.2, 0], nach: [35.2, -0.6], farbe: 1 }
    - { von: [36.1, 0], nach: [36.1, -0.9], farbe: 1 }
    - { von: [37.0, 0], nach: [37.0, -0.6], farbe: 1 }
    - { von: [37.9, 0], nach: [37.9, -0.6], farbe: 1 }
    - { von: [38.8, 0], nach: [38.8, -0.6], farbe: 1 }
    - { von: [39.7, 0], nach: [39.7, -0.6], farbe: 1 }
    - { von: [40.6, 0], nach: [40.6, -0.9], farbe: 1 }
teile:
  - typ: zahl
    loesung: "31+6*0.1"
    einheit: "mm"
    anzeige: '31{,}6'
    fehler:
      - wert: "37"
        meldung: Das ist die Stelle auf der Hauptskala, an der zwei Striche zusammenfallen. Der Messwert ist aber die Lage der **Nullmarke** des Nonius.
      - wert: "31+6*0.9"
        meldung: Jeder Noniusstrich holt nur $0{,}1\,\text{mm}$ auf. Die Nummer des Treffers gibt die Zehntelmillimeter.
hinweise:
  - Lies zuerst die ganzen Millimeter links neben der Nullmarke ab. Die Hauptstriche bei $30$ und $35\,\text{mm}$ sind länger gezeichnet.
  - Zähle dann die Noniusstriche von der Nullmarke bis zu dem Strich, der genau unter einem Hauptstrich liegt.
loesung: |
  **Ansatz:** Ganze Millimeter von der Hauptskala, Zehntel aus dem Noniusstrich, der genau mit einem Hauptstrich zusammenfällt.
  ---
  Die Nullmarke liegt zwischen $31$ und $32\,\text{mm}$. Also $31\,\text{mm}$ und ein Rest.
  ---
  Der 6. Noniusstrich trifft den Hauptstrich bei $37\,\text{mm}$. Ergebnis: $31\,\text{mm} + 6\cdot 0{,}1\,\text{mm} = 31{,}6\,\text{mm}$. Probe: $31{,}6 + 6\cdot 0{,}9 = 37{,}0$.
```

:::achtung[Den Treffer statt der Nullmarke abgelesen]
Beim Messschieber aus dem Beispiel trifft der dritte Noniusstrich den Hauptstrich bei $15\,\text{mm}$. Ein
Schüler schreibt als Messwert „$15{,}3\,\text{mm}$“.

**Der Fehler:** Er hat die ganzen Millimeter an der Trefferstelle abgelesen statt an der Nullmarke. Der
Messwert ist immer die Lage der **Nullmarke**. **Richtig:** $12\,\text{mm} + 0{,}3\,\text{mm} = 12{,}3\,\text{mm}$.
:::

### Die Mikrometerschraube

Die **Mikrometerschraube** misst noch genauer. Eine Gewindespindel schiebt sich bei jeder Umdrehung um die
**Steigung** des Gewindes vor, meist $0{,}5\,\text{mm}$. Auf der drehbaren Messtrommel sind $50$ Teilstriche.
Ein Teilstrich entspricht also
$$\frac{0{,}5\,\text{mm}}{50} = 0{,}01\,\text{mm}.$$
Die Schraube wirkt wie eine Übersetzung: Ein großer Drehweg am Umfang der Trommel wird in einen
winzigen Weg entlang der Spindel umgewandelt. Darum kann man so kleine Längen ablesen.

**So liest du ab:** Auf der festen Hülse siehst du eine Skala mit ganzen und halben Millimetern. Dazu
addierst du den Trommelwert mal $0{,}01\,\text{mm}$.

:::achtung[Den halben Millimeter vergessen]
Auf der Hülse sind die Striche bis $6{,}5\,\text{mm}$ sichtbar, die Trommel zeigt $23$. Eine Schülerin liest
nur den ganzen Millimeterstrich $6$ und rechnet $6\,\text{mm} + 0{,}23\,\text{mm} = 6{,}23\,\text{mm}$.

**Der Fehler:** Der Halbmillimeterstrich ist schon sichtbar. Die Trommel zählt nur bis $0{,}49\,\text{mm}$,
danach beginnt sie von vorn. **Richtig:** $6{,}5\,\text{mm} + 23\cdot 0{,}01\,\text{mm} = 6{,}73\,\text{mm}$.
:::

```aufgabe
id: p1-mikrometer
titel: Mikrometerschraube ablesen
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Eine Mikrometerschraube hat eine Gewindesteigung von $0{,}5\,\text{mm}$, die Messtrommel ist in $50$ Teile geteilt. Auf der Hülse sind die Striche bis $8{,}5\,\text{mm}$ sichtbar. Die Trommel zeigt den Teilstrich $37$.

  a) Wie groß ist die Auflösung, also ein Trommelteil, in mm?

  b) Wie lautet der Messwert in mm?
teile:
  - typ: zahl
    label: a) Auflösung
    loesung: "0.5/50"
    einheit: "mm"
    anzeige: '0{,}01'
    fehler:
      - wert: "1/50"
        meldung: Eine Umdrehung schiebt die Spindel nur um die Steigung $0{,}5\,\text{mm}$ vor, nicht um $1\,\text{mm}$.
  - typ: zahl
    label: b) Messwert
    loesung: "8.5+37*0.01"
    einheit: "mm"
    anzeige: '8{,}87'
    fehler:
      - wert: "8+37*0.01"
        meldung: Der Halbmillimeterstrich ist schon sichtbar. Du musst von $8{,}5\,\text{mm}$ aus weiterzählen.
      - wert: "8.5+37*0.1"
        meldung: Ein Trommelteil ist $0{,}01\,\text{mm}$, nicht $0{,}1\,\text{mm}$.
hinweise:
  - Eine volle Umdrehung schiebt die Spindel um die Steigung vor. Diese Strecke verteilt sich auf $50$ Teilstriche.
  - Zum Hülsenwert addierst du Trommelwert mal Auflösung.
gefuehrt:
  - text: Um wie viele mm schiebt sich die Spindel bei einer vollen Umdrehung vor?
    teil: { typ: zahl, loesung: "0.5" }
    erklaerung: Um die Gewindesteigung, also $0{,}5\,\text{mm}$.
  - text: Diese Strecke verteilt sich auf $50$ Teilstriche. Wie viel mm ist ein Teilstrich?
    teil: { typ: zahl, loesung: "0.5/50" }
    erklaerung: '$0{,}5\,\text{mm} / 50 = 0{,}01\,\text{mm}$.'
  - text: Wie viel mm zeigt die Trommel bei Teilstrich $37$ an?
    teil: { typ: zahl, loesung: "37*0.01" }
    erklaerung: '$37\cdot 0{,}01\,\text{mm} = 0{,}37\,\text{mm}$.'
  - text: Addiere den Wert der Hülse. Wie lautet der Messwert in mm?
    teil: { typ: zahl, loesung: "8.5+0.37" }
    erklaerung: '$8{,}5\,\text{mm} + 0{,}37\,\text{mm} = 8{,}87\,\text{mm}$.'
loesung: |
  **Ansatz:** Eine Umdrehung schiebt um die Steigung vor, verteilt auf $50$ Trommelteile.
  ---
  **a)** Auflösung: $\dfrac{0{,}5\,\text{mm}}{50} = 0{,}01\,\text{mm}$.
  ---
  **b)** Messwert: $8{,}5\,\text{mm} + 37\cdot 0{,}01\,\text{mm} = 8{,}5\,\text{mm} + 0{,}37\,\text{mm} = 8{,}87\,\text{mm}$.
  ---
  **Plausibilität:** Die Trommel kann höchstens $0{,}49\,\text{mm}$ beitragen. Der Messwert liegt also zwischen $8{,}5$ und $9{,}0\,\text{mm}$, wie es sein muss.
```

### Laufzeitmessung

Für größere Strecken sendet man ein Signal zum Ziel und misst die Zeit $t$ bis zum Echo. Das Signal kann
Licht, eine Radiowelle oder Schall sein. Weil es hin **und** zurück läuft, legt es den doppelten Abstand
zurück. Mit der Signalgeschwindigkeit $v$ gilt deshalb
$$d = \frac{v\cdot t}{2}.$$
Dabei ist $d$ der Abstand zum Ziel. Laser-Entfernungsmesser, Radar, Echolot und Fledermäuse arbeiten so.

:::beispiel[Die Einparkhilfe]
Ein Ultraschallsensor am Auto empfängt das Echo nach $t = 5{,}9\,\text{ms}$. Die Schallgeschwindigkeit in
Luft ist $v = 340\,\text{m/s}$. Wie weit ist das Hindernis entfernt?

**Schritt 1, Zeit in SI:** $5{,}9\,\text{ms} = 5{,}9\cdot 10^{-3}\,\text{s} = 0{,}0059\,\text{s}$.

**Schritt 2, Weg des Signals:** $v\cdot t = 340\,\text{m/s}\cdot 0{,}0059\,\text{s} = 2{,}0\,\text{m}$. Das ist
der Weg hin und zurück.

**Schritt 3, Abstand:** $d = \dfrac{2{,}0\,\text{m}}{2} = 1{,}0\,\text{m}$.

**Antwort:** Das Hindernis ist etwa $1{,}0\,\text{m}$ entfernt. Die Einparkhilfe piept schon schneller.
:::

:::achtung[Hin- und Rückweg vergessen]
Für die Einparkhilfe rechnet jemand $d = v\cdot t = 340\,\text{m/s}\cdot 0{,}0059\,\text{s} = 2{,}0\,\text{m}$.

**Der Fehler:** $v\cdot t$ ist der **ganze** Weg des Schalls, hin zum Hindernis und wieder zurück. Das
Ergebnis ist doppelt so groß wie der Abstand. **Richtig:** $d = \dfrac{v\,t}{2} = 1{,}0\,\text{m}$.
:::

```aufgabe
id: p1-laufzeit-laser
titel: Laser-Entfernungsmessung zum Mond
niveau: 1
lernziel: 4
kompetenz: anwenden
angabe: |
  Ein Laserpuls wird zu einem Reflektor auf dem Mond geschickt und kommt nach $2{,}56\,\text{s}$ zurück. Wie weit ist der Mond entfernt ($c = 3{,}00\cdot 10^8\,\text{m/s}$)? Gib das Ergebnis in km an.
teile:
  - typ: zahl
    loesung: "3.00e8*2.56/2/1000"
    einheit: "km"
    anzeige: '3{,}84\cdot 10^{5}'
    fehler:
      - wert: "3.00e8*2.56/1000"
        meldung: Das ist der Weg hin **und** zurück. Der Abstand ist die Hälfte davon.
      - wert: "3.00e8*2.56/2"
        meldung: Das ist der Abstand in Metern. Gefragt sind Kilometer, also noch durch $1000$ teilen.
hinweise:
  - Das Licht legt den Weg zweimal zurück.
loesung: |
  **Ansatz:** Hin- und Rückweg zusammen sind $2d = c\,t$, also $d = \dfrac{c\,t}{2}$.
  ---
  $d = \dfrac{3{,}00\cdot 10^8\,\text{m/s}\cdot 2{,}56\,\text{s}}{2} = 3{,}84\cdot 10^{8}\,\text{m} = 3{,}84\cdot 10^{5}\,\text{km}$.
```

```aufgabe
id: p1-echolot
titel: Echolot
niveau: 1
lernziel: 4
kompetenz: anwenden
angabe: |
  Ein Echolot auf einem Schiff sendet einen Schallimpuls senkrecht nach unten. Das Echo vom Meeresboden kommt nach $0{,}84\,\text{s}$ zurück. Die Schallgeschwindigkeit in Meerwasser beträgt $1500\,\text{m/s}$. Wie tief ist das Meer?
teile:
  - typ: zahl
    loesung: "1500*0.84/2"
    einheit: "m"
    anzeige: '630'
    fehler:
      - wert: "1500*0.84"
        meldung: Der Schall läuft hinunter **und** wieder hinauf. Das Produkt $v\cdot t$ ist der doppelte Weg.
      - wert: "340*0.84/2"
        meldung: Das ist die Schallgeschwindigkeit in Luft. Im Wasser ist Schall etwa viermal so schnell.
hinweise:
  - Der Schall läuft hinunter und wieder hinauf.
  - Verwende die Schallgeschwindigkeit im Wasser, nicht in der Luft.
loesung: |
  **Ansatz:** Laufzeitmessung mit Echo: $h = \dfrac{v\,t}{2}$.
  ---
  $h = \dfrac{1500\,\text{m/s}\cdot 0{,}84\,\text{s}}{2} = \dfrac{1260\,\text{m}}{2} = 630\,\text{m}$.
  ---
  **Probe:** Der Schall braucht für eine Richtung $0{,}42\,\text{s}$. In dieser Zeit legt er $1500\,\text{m/s}\cdot 0{,}42\,\text{s} = 630\,\text{m}$ zurück.
```

### Triangulation und Parallaxe

Manche Ziele kann man nicht erreichen, etwa einen Baum am anderen Flussufer oder einen Stern. Dann misst
man von den Enden einer bekannten **Basislinie** aus die Winkel zum Ziel. Aus Basis und Winkeln folgt die
Entfernung mit Trigonometrie. Dieses Verfahren heißt **Triangulation**. Die nötige Trigonometrie steht in
[5.2 Steigung, Höhenwinkel und Vermessung](/lernen/mathe3/trigonometrie/steigung-hoehenwinkel-und-vermessung).

Bei Sternen ist die Basislinie der Durchmesser der Erdbahn. Ein naher Stern scheint sich im Lauf eines
halben Jahres vor dem fernen Hintergrund ein winziges Stück zu verschieben. Diese scheinbare Verschiebung
heißt **Parallaxe**. Je größer die Parallaxe, desto näher ist der Stern.

:::beispiel[Wie breit ist der Fluss?]
Ein Baum $C$ steht am anderen Ufer genau gegenüber dem Punkt $A$. Der Winkel bei $A$ ist also $90^\circ$.
Man steckt am eigenen Ufer die Strecke $\overline{AB} = 40\,\text{m}$ ab. Von $B$ aus erscheint der Baum unter
$\beta = 55^\circ$ gegen die Uferlinie.

**Schritt 1, Modell:** Das Dreieck $ABC$ ist rechtwinklig mit dem rechten Winkel bei $A$. Die Flussbreite
$\overline{AC}$ ist die Gegenkathete von $\beta$, die Basis $\overline{AB}$ die Ankathete.

**Schritt 2, Formel:** $\tan\beta = \dfrac{\overline{AC}}{\overline{AB}}$, also $\overline{AC} = \overline{AB}\cdot\tan\beta$.

**Schritt 3, rechnen:** $\overline{AC} = 40\,\text{m}\cdot\tan 55^\circ = 40\,\text{m}\cdot 1{,}428 = 57\,\text{m}$.

**Antwort:** Der Fluss ist etwa $57\,\text{m}$ breit, ohne dass jemand hinüberschwimmen musste.
:::

```aufgabe
id: p1-messgeraet-waehlen
titel: Das passende Messgerät
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Du sollst die Dicke eines menschlichen Haares messen. Sie liegt bei etwa $0{,}07\,\text{mm}$. Du willst eine relative Unsicherheit unter $20\,\%$ erreichen. Welches Gerät ist am besten geeignet?
teile:
  - typ: auswahl
    optionen:
      - "Lineal mit Millimeterteilung"
      - "Messschieber mit Zehntel-Nonius"
      - "Mikrometerschraube mit 0,01 mm Auflösung"
      - "Laser-Entfernungsmesser"
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Ein Millimeter ist mehr als zehnmal so viel wie die ganze Haardicke. Mit dem Lineal sieht man nur „weniger als ein Millimeter“.
      - wert: 1
        meldung: Mit $0{,}1\,\text{mm}$ Auflösung ist die Unsicherheit größer als das Haar selbst. Die relative Unsicherheit läge über $100\,\%$.
      - wert: 3
        meldung: Laser-Entfernungsmesser messen Abstände von Metern mit Millimetergenauigkeit. Für Hundertstelmillimeter sind sie nicht gebaut.
hinweise:
  - Teile die Auflösung jedes Geräts durch $0{,}07\,\text{mm}$.
  - Welches Ergebnis liegt unter $0{,}2$?
loesung: |
  **Ansatz:** Die relative Unsicherheit ist ungefähr Auflösung durch Messwert.
  ---
  Lineal: $1/0{,}07 \approx 14$, also über $1000\,\%$. Messschieber: $0{,}1/0{,}07 \approx 1{,}4$, also $140\,\%$. Mikrometerschraube: $0{,}01/0{,}07 \approx 0{,}14$, also $14\,\%$.
  ---
  **Antwort:** Nur die Mikrometerschraube bleibt unter $20\,\%$. Noch genauer misst man Haardicken mit einem Laser über die Beugung von Licht.
```

```aufgabe
id: p1-parallaxe
titel: Triangulation über einen Fluss
niveau: 3
lernziel: 4
kompetenz: modellieren
angabe: |
  Um die Breite eines Flusses zu messen, steckt man am Ufer eine Basislinie $\overline{AB} = 50{,}0\,\text{m}$ ab. Ein Baum $C$ am gegenüberliegenden Ufer liegt genau gegenüber von $A$, der Winkel bei $A$ beträgt also $90^\circ$. Von $B$ aus sieht man den Baum unter dem Winkel $\beta = 62^\circ$ gegen die Basislinie. Wie breit ist der Fluss? Runde auf drei signifikante Stellen.
teile:
  - typ: zahl
    loesung: "50*tan(inRad(62))"
    einheit: "m"
    anzeige: '94{,}0'
    fehler:
      - wert: "50*sin(inRad(62))"
        meldung: Der Sinus gehört zum Verhältnis Gegenkathete durch **Hypotenuse**. Die Hypotenuse ist hier die Sichtlinie $\overline{BC}$, nicht die Basis. Basis und Flussbreite sind die beiden Katheten.
      - wert: "50/tan(inRad(62))"
        meldung: Du hast durch den Tangens geteilt. Aus $\tan\beta = \overline{AC}/\overline{AB}$ folgt durch Multiplizieren mit $\overline{AB}$ die Formel $\overline{AC} = \overline{AB}\cdot\tan\beta$.
hinweise:
  - Skizziere das Dreieck $ABC$ mit dem rechten Winkel bei $A$.
  - Die Flussbreite ist die Gegenkathete von $\beta$, die Basislinie die Ankathete.
loesung: |
  **Modell:** Das Dreieck $ABC$ ist rechtwinklig mit dem rechten Winkel bei $A$. Für den Winkel $\beta$ bei $B$ ist $\overline{AC}$ die Gegenkathete und $\overline{AB}$ die Ankathete.
  ---
  **Formel:** $\tan\beta = \dfrac{\overline{AC}}{\overline{AB}}$. Wir multiplizieren mit $\overline{AB}$: $\overline{AC} = \overline{AB}\cdot\tan\beta$.
  ---
  **Rechnung:** $\overline{AC} = 50{,}0\,\text{m}\cdot\tan 62^\circ = 50{,}0\,\text{m}\cdot 1{,}881 = 94{,}0\,\text{m}$.
  ---
  **Plausibilität:** Der Winkel ist größer als $45^\circ$, also muss die Breite größer als die Basis von $50\,\text{m}$ sein. Das passt.
```

```reflexion
frage: Warum legt man heute den Meter über die Lichtgeschwindigkeit fest und nicht mehr über einen Metallstab? Nenne zwei Gründe.
antwort: |
  Erstens lässt sich Zeit mit Atomuhren viel genauer messen als jede Länge. Über die festgelegte
  Lichtgeschwindigkeit überträgt sich diese Genauigkeit auf die Länge. Zweitens ist eine Naturkonstante
  überall und jederzeit gleich. Jedes gut ausgestattete Labor der Welt kann den Meter selbst verwirklichen.
  Ein Metallstab dagegen gibt es nur einmal, und er kann sich durch Wärme oder Abnutzung verändern.
```

## Zeitmessung

```aufgabe
id: p1-6-check
art: check
titel: "Vorwissen: Wie viele Sekunden hat ein Tag?"
niveau: 1
angabe: |
  Wie viele Sekunden hat ein Tag mit $24$ Stunden?
teile:
  - typ: zahl
    loesung: "24*3600"
    einheit: "s"
    anzeige: '86\,400'
    fehler:
      - wert: "24*60"
        meldung: Das sind die Minuten eines Tages. Jede Minute hat noch einmal $60$ Sekunden.
hinweise:
  - Eine Stunde hat $60$ Minuten zu je $60$ Sekunden, also $3600\,\text{s}$.
loesung: |
  Eine Stunde hat $60\cdot 60\,\text{s} = 3600\,\text{s}$.
  ---
  Ein Tag hat $24\cdot 3600\,\text{s} = 86\,400\,\text{s}$. Umrechnen mit Faktoren übst du in [1.3 Vorsilben, Zehnerpotenzen und Umrechnen](/lernen/physik1/groessen-einheiten-messen/vorsilben-zehnerpotenzen-und-umrechnen).
```

Jede Uhr **zählt periodische Vorgänge**. Ein **periodischer Vorgang** wiederholt sich immer wieder in
gleichen Zeitabständen, etwa die Drehung der Erde, die Schwingung eines Pendels oder eines Quarzkristalls.
Die Uhr zählt die Wiederholungen und rechnet sie in Sekunden um. Je regelmäßiger der Vorgang und je öfter
er sich pro Sekunde wiederholt, desto genauer ist die Uhr.

- **Sonnenuhr:** zählt die Erdrotation. Sie geht im Lauf des Jahres um Minuten falsch.
- **Pendeluhr:** zählt Pendelschwingungen. Sie geht pro Tag um einige Sekunden falsch.
- **Mechanische Armbanduhr:** zählt die Schwingungen eines kleinen Drehpendels, der Unruh. Auch sie weicht
  um einige Sekunden pro Tag ab.
- **Quarzuhr:** zählt die Schwingungen eines Quarzkristalls, meist $32\,768$ pro Sekunde. Sie weicht nur um
  Bruchteile einer Sekunde pro Tag ab.
- **Atomuhr:** zählt die Schwingungen einer Strahlung des Cäsiumatoms. Sie weicht pro Tag um weniger als
  eine Milliardstelsekunde ab.

Die Zahl $32\,768$ ist kein Zufall. Es gilt $32\,768 = 2^{15}$. Ein elektronischer Zähler kann eine Frequenz
sehr einfach halbieren. Nach $15$ Halbierungen bleibt genau eine Schwingung pro Sekunde übrig.

:::definition[Sekunde]
Eine **Sekunde** ist die Dauer von $9\,192\,631\,770$ Schwingungen der Strahlung, die ein Cäsium-133-Atom bei
einem bestimmten Übergang zwischen zwei Energiezuständen aussendet.

**Beispiel:** Eine Atomuhr zählt diese Schwingungen. Nach $9\,192\,631\,770$ Schwingungen ist genau eine
Sekunde vergangen.

**Keine Definition der Sekunde:** „Der $86\,400$. Teil eines Tages.“ Das war die alte Festlegung. Die
Erdrotation ist aber unregelmäßig. Die Länge eines Tages schwankt um Millisekunden, und über Jahrhunderte
werden die Tage langsam länger.
:::

Atomuhren erreichen relative Unsicherheiten um $10^{-16}$. Weil die Erde unregelmäßiger läuft als die
Atomuhren, schiebt man gelegentlich eine **Schaltsekunde** ein. So bleibt die Uhrzeit im Takt mit Tag und
Nacht.

:::beispiel[Warum braucht GPS Atomuhren?]
Ein GPS-Empfänger bestimmt seinen Abstand zu einem Satelliten aus der Laufzeit des Funksignals,
$d = c\cdot t$. Das Signal läuft mit Lichtgeschwindigkeit $c = 3\cdot 10^{8}\,\text{m/s}$. Wie groß ist der
Ortsfehler, wenn die Uhr um $\Delta t = 1\,\mu\text{s}$ falsch geht?

**Schritt 1, Zeit in SI:** $1\,\mu\text{s} = 10^{-6}\,\text{s}$.

**Schritt 2, Fehler im Abstand:** $\Delta d = c\cdot\Delta t = 3\cdot 10^{8}\,\text{m/s}\cdot 10^{-6}\,\text{s} = 300\,\text{m}$.

**Antwort:** Eine Mikrosekunde Uhrenfehler bedeutet $300\,\text{m}$ Ortsfehler. Für eine Genauigkeit von
wenigen Metern müssen die Uhren auf Milliardstelsekunden genau laufen. Sogar die Zeitdehnung der
Relativitätstheorie muss korrigiert werden.
:::

```aufgabe
id: p1-gps-fehler
titel: Warum GPS Atomuhren braucht
niveau: 1
lernziel: 4
kompetenz: anwenden
angabe: |
  Ein GPS-Empfänger berechnet Entfernungen aus Signallaufzeiten. Wie groß ist der Entfernungsfehler in m, wenn die Uhr um $50\,\text{ns}$ falsch geht? ($c = 3{,}00\cdot 10^{8}\,\text{m/s}$)
teile:
  - typ: zahl
    loesung: "3.00e8*50e-9"
    einheit: "m"
    anzeige: '15'
    fehler:
      - wert: "3.00e8*50e-6"
        meldung: Du hast Nano mit Mikro verwechselt. Eine Nanosekunde ist $10^{-9}\,\text{s}$.
hinweise:
  - Der Fehler im Abstand ist Lichtgeschwindigkeit mal Fehler in der Zeit.
loesung: |
  **Ansatz:** $\Delta d = c\cdot\Delta t$ mit $\Delta t = 50\,\text{ns} = 50\cdot 10^{-9}\,\text{s}$.
  ---
  $\Delta d = 3{,}00\cdot 10^{8}\,\text{m/s}\cdot 5{,}0\cdot 10^{-8}\,\text{s} = 15\,\text{m}$. Die Sekunden kürzen sich.
```

```aufgabe
id: p1-sekunde-definition
titel: Was legt die Sekunde fest?
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Warum ist die Sekunde heute über eine Schwingung im Cäsiumatom festgelegt und nicht mehr über die Drehung der Erde?
teile:
  - typ: auswahl
    optionen:
      - "Weil sich die Erde nicht mehr dreht."
      - "Weil die Drehung der Erde unregelmäßig ist, alle Cäsiumatome aber exakt gleich schwingen."
      - "Weil Cäsium radioaktiv zerfällt und so die Zeit misst."
      - "Weil ein Tag genau 86 400 Cäsium-Schwingungen hat."
    richtig: [1]
    fehler:
      - wert: 2
        meldung: Die Atomuhr nutzt keinen Zerfall, sondern die Schwingung einer Strahlung, die das Atom aussendet. Cäsium-133 ist nicht radioaktiv.
      - wert: 3
        meldung: Eine Sekunde allein hat schon über neun Milliarden Cäsium-Schwingungen. Die Zahl $86\,400$ ist die Zahl der Sekunden eines Tages.
      - wert: 0
        meldung: Die Erde dreht sich weiter. Sie dreht sich aber nicht ganz gleichmäßig, die Tageslänge schwankt um Millisekunden.
hinweise:
  - Eine gute Uhr braucht einen Vorgang, der sich immer exakt gleich wiederholt.
loesung: |
  **Kriterium:** Eine Zeiteinheit braucht einen völlig regelmäßigen periodischen Vorgang.
  ---
  Die Erdrotation schwankt durch Gezeitenreibung und Massenverlagerungen. Alle Cäsium-133-Atome sind dagegen gleich gebaut und schwingen überall exakt gleich. Richtig ist die zweite Aussage.
```

```aufgabe
id: p1-zeit-umrechnen
titel: Eine Fahrtzeit in Sekunden
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Eine Zugfahrt dauert $2\,\text{h}\;15\,\text{min}$. Wie viele Sekunden sind das?
teile:
  - typ: zahl
    loesung: "2*3600+15*60"
    einheit: "s"
    anzeige: '8100'
    fehler:
      - wert: "2.15*3600"
        meldung: '$2\,\text{h}\;15\,\text{min}$ sind nicht $2{,}15\,\text{h}$. $15$ Minuten sind eine Viertelstunde, also $0{,}25\,\text{h}$.'
      - wert: "2*60+15"
        meldung: Das sind Minuten, keine Sekunden. Multipliziere noch mit $60$.
hinweise:
  - Rechne Stunden und Minuten getrennt in Sekunden um und addiere.
loesung: |
  **Stunden:** $2\,\text{h} = 2\cdot 3600\,\text{s} = 7200\,\text{s}$. **Minuten:** $15\,\text{min} = 15\cdot 60\,\text{s} = 900\,\text{s}$.
  ---
  Zusammen: $7200\,\text{s} + 900\,\text{s} = 8100\,\text{s}$. Probe: $8100\,\text{s} / 3600\,\text{s/h} = 2{,}25\,\text{h}$, also zwei und eine Viertelstunde.
```

:::achtung[Ein Jahr in „Sekunden“]
Jemand rechnet die Sekunden eines Jahres aus: $365\cdot 24\cdot 60 = 525\,600\,\text{s}$.

**Der Fehler:** Er hat nur bis zu den **Minuten** umgerechnet. $525\,600$ ist die Zahl der Minuten eines
Jahres. **Richtig:** $365\cdot 24\cdot 3600\,\text{s} = 3{,}15\cdot 10^{7}\,\text{s}$. Eine Merkhilfe: Ein
Jahr hat ungefähr $\pi\cdot 10^{7}$ Sekunden.
:::

### Zeit mit der Hand stoppen

Wer mit der Hand stoppt, reagiert verzögert. Die **Reaktionszeit** liegt bei etwa $0{,}1$ bis $0{,}3\,\text{s}$.
Sie wirkt beim Starten und beim Stoppen. Bei kurzen Vorgängen wäre der Fehler damit riesig.

Der Ausweg: Man misst ein **Vielfaches**. Man stoppt etwa die Zeit für $20$ Schwingungen eines Pendels und
teilt durch $20$. Die Unsicherheit beim Starten und Stoppen tritt nur einmal auf. Sie verteilt sich auf
$20$ Schwingungen und wird für eine Schwingung zwanzigmal kleiner. Viel genauer messen
**Lichtschranken**, die elektronisch starten und stoppen.

:::achtung[Die Unsicherheit multipliziert statt geteilt]
Für $20$ Schwingungen werden $35{,}8\,\text{s}$ mit $\pm 0{,}2\,\text{s}$ gestoppt. Eine Schülerin rechnet
$T = 35{,}8\,\text{s} / 20 = 1{,}79\,\text{s}$, aber $\Delta T = 0{,}2\,\text{s}\cdot 20 = 4\,\text{s}$.

**Der Fehler:** Die Unsicherheit gehört zur Gesamtzeit. Sie wird genauso durch $20$ geteilt wie die Zeit
selbst. Eine Unsicherheit von $4\,\text{s}$ bei $1{,}79\,\text{s}$ wäre absurd. **Richtig:**
$\Delta T = 0{,}2\,\text{s} / 20 = 0{,}01\,\text{s}$.
:::

```aufgabe
id: p1-pendel-vielfaches
titel: Vielfache Perioden stoppen
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Du stoppst die Zeit für $30$ Schwingungen eines Pendels und erhältst $47{,}7\,\text{s}$. Deine Unsicherheit beim Starten und Stoppen beträgt zusammen $\pm 0{,}3\,\text{s}$. Gib die Schwingungsdauer und ihre Unsicherheit in s an.
teile:
  - typ: zahl
    label: Schwingungsdauer T
    loesung: "47.7/30"
    einheit: "s"
    anzeige: '1{,}59'
    fehler:
      - wert: "47.7"
        meldung: Das ist die Zeit für alle $30$ Schwingungen. Für eine Schwingung teilst du durch $30$.
  - typ: zahl
    label: Unsicherheit von T
    loesung: "0.3/30"
    einheit: "s"
    anzeige: '0{,}01'
    fehler:
      - wert: "0.3"
        meldung: Die $0{,}3\,\text{s}$ gelten für die Gesamtzeit. Für eine Schwingung wird auch die Unsicherheit durch $30$ geteilt.
      - wert: "0.3*30"
        meldung: Die Unsicherheit wird nicht größer, wenn man viele Schwingungen misst, sondern kleiner. Teile durch $30$.
hinweise:
  - Teile die Gesamtzeit durch die Zahl der Schwingungen.
  - Die Unsicherheit der Gesamtzeit verteilt sich ebenfalls auf alle $30$ Schwingungen.
loesung: |
  **Ansatz:** Gemessen wurde das Dreißigfache der Schwingungsdauer. Zeit und Unsicherheit werden beide durch $30$ geteilt.
  ---
  $T = \dfrac{47{,}7\,\text{s}}{30} = 1{,}59\,\text{s}$.
  ---
  $\Delta T = \dfrac{0{,}3\,\text{s}}{30} = 0{,}01\,\text{s}$, also $T = (1{,}59 \pm 0{,}01)\,\text{s}$. Mit nur einer gestoppten Schwingung wären es $\pm 0{,}3\,\text{s}$, fast $20\,\%$.
```

:::beispiel[Wie ungenau ist eine Quarzuhr in einem Monat?]
Ein Uhrenquarz hat eine Gangabweichung von $20\,\text{ppm}$. „ppm“ heißt *parts per million*, also
Millionstel. Die Uhr geht pro Sekunde um $20\cdot 10^{-6}\,\text{s}$ falsch. Wie viel ist das in $30$ Tagen?

**Schritt 1, Zeitraum in Sekunden:** $30\cdot 86\,400\,\text{s} = 2{,}592\cdot 10^{6}\,\text{s}$.

**Schritt 2, Abweichung:** relative Abweichung mal Zeitraum,
$20\cdot 10^{-6}\cdot 2{,}592\cdot 10^{6}\,\text{s} = 51{,}8\,\text{s}$.

**Antwort:** Die Uhr geht nach einem Monat knapp eine Minute falsch. Deshalb stellen sich Funk- und
Handyuhren regelmäßig nach einer Atomuhr.
:::

```aufgabe
id: p1-quarz-gang
titel: Die Quarzuhr in einem Jahr
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Eine Quarzuhr hat eine Gangabweichung von $15\,\text{ppm}$, sie geht also pro Sekunde um $15\cdot 10^{-6}\,\text{s}$ falsch. Um wie viele Minuten weicht sie nach einem Jahr ($365$ Tage) ab? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "15e-6*365*86400/60"
    einheit: "min"
    anzeige: '7{,}9'
    fehler:
      - wert: "15e-6*365*86400"
        meldung: Das ist die Abweichung in Sekunden. Gefragt sind Minuten, also durch $60$ teilen.
      - wert: "15e-6*365*86400/3600"
        meldung: Durch $3600$ geteilt ergibt Stunden. Für Minuten teilst du die Sekunden durch $60$.
hinweise:
  - Rechne das Jahr zuerst in Sekunden um.
  - Abweichung = relative Abweichung mal Zeitraum. Danach in Minuten umrechnen.
gefuehrt:
  - text: Wie viele Sekunden hat ein Jahr mit $365$ Tagen?
    teil: { typ: zahl, loesung: "365*86400" }
    erklaerung: '$365\cdot 86\,400\,\text{s} = 3{,}15\cdot 10^{7}\,\text{s}$.'
  - text: Multipliziere mit der relativen Abweichung $15\cdot 10^{-6}$. Wie viele Sekunden sind das?
    teil: { typ: zahl, loesung: "15e-6*365*86400" }
    erklaerung: '$15\cdot 10^{-6}\cdot 3{,}15\cdot 10^{7}\,\text{s} = 473\,\text{s}$.'
  - text: Rechne in Minuten um.
    teil: { typ: zahl, loesung: "15e-6*365*86400/60" }
    erklaerung: '$473\,\text{s} / 60 = 7{,}9\,\text{min}$.'
  - text: Ist das plausibel?
    erklaerung: Eine einfache Armbanduhr, die man zweimal im Jahr stellen muss, passt dazu. Pro Tag sind es nur $1{,}3\,\text{s}$, im Jahr summiert es sich.
loesung: |
  **Ansatz:** Die Abweichung ist die relative Abweichung mal den ganzen Zeitraum.
  ---
  Zeitraum: $365\cdot 86\,400\,\text{s} = 3{,}15\cdot 10^{7}\,\text{s}$.
  ---
  Abweichung: $15\cdot 10^{-6}\cdot 3{,}15\cdot 10^{7}\,\text{s} = 473\,\text{s}$.
  ---
  In Minuten: $473\,\text{s} / 60\,\text{s/min} = 7{,}9\,\text{min}$. Pro Tag sind das nur $1{,}3\,\text{s}$.
```

```aufgabe
id: p1-quarz
titel: Die Teilerstufen der Quarzuhr
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Ein Uhrenquarz schwingt mit $32\,768\,\text{Hz}$, also $32\,768$-mal pro Sekunde. Jede Teilerstufe halbiert die Frequenz. Wie viele Stufen braucht man, um auf genau $1\,\text{Hz}$ zu kommen?
teile:
  - typ: zahl
    loesung: "log(32768, 2)"
    anzeige: '15'
    fehler:
      - wert: "32768/2"
        meldung: Das ist die Frequenz nach **einer** Halbierung. Gesucht ist die Anzahl der Halbierungen bis $1\,\text{Hz}$.
hinweise:
  - 'Nach $n$ Stufen ist die Frequenz $32\,768\,\text{Hz} / 2^{n}$.'
  - 'Suche $n$ mit $2^n = 32\,768$, zum Beispiel mit dem Logarithmus zur Basis $2$.'
loesung: |
  **Ansatz:** Nach $n$ Halbierungen ist die Frequenz $\dfrac{32\,768\,\text{Hz}}{2^n}$. Sie soll $1\,\text{Hz}$ sein, also $2^n = 32\,768$.
  ---
  Wir lösen mit dem Logarithmus: $n = \log_2 32\,768 = 15$. Siehe [1.11 Logarithmen](/lernen/mathe3/zahlen/logarithmen).
  ---
  **Probe:** $2^{10} = 1024$ und $2^{5} = 32$, also $2^{15} = 1024\cdot 32 = 32\,768$.
```

```aufgabe
id: p1-reaktionszeit-lineal
titel: Reaktionszeit mit einem fallenden Lineal
niveau: 3
lernziel: 4
kompetenz: modellieren
angabe: |
  Eine Person hält ein Lineal am oberen Ende, eine zweite hält Daumen und Zeigefinger offen an der Nullmarke. Ohne Vorwarnung lässt die erste los. Die zweite fängt das Lineal nach $18\,\text{cm}$ Fallweg. Für den freien Fall aus der Ruhe gilt $s = \tfrac12 g t^2$ mit $g = 9{,}81\,\text{m/s}^2$.

  a) Wie groß ist die Reaktionszeit in s? Runde auf zwei signifikante Stellen.

  b) Warum misst man Reaktionszeiten so und nicht mit einer Handstoppuhr?
teile:
  - typ: zahl
    label: a) Reaktionszeit
    loesung: "sqrt(2*0.18/9.81)"
    einheit: "s"
    toleranz: 0.005
    anzeige: '0{,}19'
    fehler:
      - wert: "sqrt(2*18/9.81)"
        meldung: Du hast die Zentimeter direkt eingesetzt. Mit $g$ in $\text{m/s}^2$ muss der Weg in Metern stehen, $18\,\text{cm} = 0{,}18\,\text{m}$.
      - wert: "sqrt(0.18/9.81)"
        meldung: Der Faktor $2$ fehlt. Aus $s = \tfrac12 g t^2$ folgt $t^2 = 2s/g$.
  - typ: text
    label: b) Begründung
    muster: |
      Mit einer Handstoppuhr müsste man selbst starten und stoppen, dabei kommt die eigene Reaktionszeit doppelt
      hinein. Beim Lineal-Versuch misst man eine Länge, die genau und ohne Reaktionszeit abgelesen werden kann.
      Die Fallbewegung rechnet sie über eine bekannte Formel in eine Zeit um.
hinweise:
  - 'Stelle $s = \tfrac12 g t^2$ nach $t$ um: mit $2$ multiplizieren, durch $g$ teilen, Wurzel ziehen.'
  - Rechne den Fallweg zuerst in Meter um.
loesung: |
  **Modell:** Das Lineal fällt frei aus der Ruhe. Während der Reaktionszeit $t$ legt es $s = \tfrac12 g t^2$ zurück.
  ---
  **Umstellen:** Wir multiplizieren mit $2$ und teilen durch $g$: $t^2 = \dfrac{2s}{g}$. Dann ziehen wir die Wurzel: $t = \sqrt{\dfrac{2s}{g}}$.
  ---
  **a)** $t = \sqrt{\dfrac{2\cdot 0{,}18\,\text{m}}{9{,}81\,\text{m/s}^2}} = \sqrt{0{,}0367\,\text{s}^2} = 0{,}19\,\text{s}$. Die Meter kürzen sich.
  ---
  **b)** Eine Länge kann man ohne Reaktionszeit ablesen. Die Physik des freien Falls verwandelt die Länge in eine Zeit. Eine Handstoppuhr würde die zu messende Reaktionszeit selbst enthalten.
```

```aufgabe
id: p1-atomuhr-abweichung
titel: Wie lange bis eine Sekunde Fehler?
niveau: 3
lernziel: 4
kompetenz: anwenden
angabe: |
  Eine moderne Atomuhr hat eine relative Unsicherheit von $10^{-16}$. Sie geht also pro Sekunde höchstens um $10^{-16}\,\text{s}$ falsch. Nach wie vielen Jahren könnte sich ein Fehler von einer ganzen Sekunde angesammelt haben? Ein Jahr hat $3{,}16\cdot 10^{7}\,\text{s}$. Gib das Ergebnis in wissenschaftlicher Schreibweise mit drei signifikanten Stellen an.
teile:
  - typ: zahl
    loesung: "1/1e-16/3.16e7"
    einheit: "Jahre"
    anzeige: '3{,}16\cdot 10^{8}'
    fehler:
      - wert: "1e16"
        meldung: Das ist die Zeit in **Sekunden**. Gefragt sind Jahre, also durch $3{,}16\cdot 10^{7}$ teilen.
      - wert: "1e-16*3.16e7"
        meldung: Das ist der Fehler nach einem Jahr in Sekunden. Gesucht ist umgekehrt die Zeit, bis der Fehler eine Sekunde erreicht.
hinweise:
  - Der Fehler wächst proportional zur Zeit. Nach der Zeit $t$ beträgt er $10^{-16}\cdot t$.
  - Setze $10^{-16}\cdot t = 1\,\text{s}$ und löse nach $t$ auf.
loesung: |
  **Ansatz (Proportionalität):** Der angesammelte Fehler ist relative Unsicherheit mal Laufzeit, $\Delta t = 10^{-16}\cdot t$.
  ---
  Aus $10^{-16}\cdot t = 1\,\text{s}$ folgt durch Teilen durch $10^{-16}$: $t = 10^{16}\,\text{s}$.
  ---
  In Jahren: $\dfrac{10^{16}\,\text{s}}{3{,}16\cdot 10^{7}\,\text{s/a}} = 3{,}16\cdot 10^{8}\,\text{a}$.
  ---
  **Deutung:** Über $300$ Millionen Jahre. Das ist länger, als es Dinosaurier gab. Deshalb ist die Zeit die am genauesten messbare Größe.
```

```reflexion
frage: Warum misst man bei einem Pendel die Zeit für 20 Schwingungen statt für eine? Würde es helfen, eine einzelne Schwingung zwanzigmal zu messen?
antwort: |
  Die Reaktionsunsicherheit tritt beim Starten und Stoppen auf, unabhängig davon, wie lange man misst. Bei
  20 Schwingungen verteilt sie sich auf 20 Perioden, die Unsicherheit einer Periode wird zwanzigmal kleiner.
  Zwanzig Einzelmessungen helfen auch, aber weniger: Der Mittelwert wird nur um den Faktor $\sqrt{20} \approx 4{,}5$
  genauer, nicht um den Faktor 20. Warum das so ist, zeigt [1.8 Messreihen auswerten: Mittelwert und Standardabweichung](/lernen/physik1/groessen-einheiten-messen/messreihen-auswerten-mittelwert-und-standardabweichung).
```

## Messunsicherheit und signifikante Stellen

```aufgabe
id: p1-7-check
art: check
titel: "Vorwissen: Runden auf eine Stelle"
niveau: 1
angabe: |
  Runde $0{,}0874$ auf **eine** signifikante Stelle, also auf die erste Ziffer, die nicht null ist.
teile:
  - typ: zahl
    loesung: "0.09"
    anzeige: '0{,}09'
    fehler:
      - wert: "0.08"
        meldung: Du hast abgeschnitten statt gerundet. Die nächste Ziffer ist $7$, also wird aufgerundet.
      - wert: "0.1"
        meldung: Das ist auf eine Nachkommastelle gerundet. Signifikante Stellen zählen erst ab der ersten Ziffer, die nicht null ist, hier ab der $8$.
hinweise:
  - Die erste Ziffer ungleich null ist die $8$. Schau auf die Ziffer danach.
loesung: |
  Die erste signifikante Ziffer ist die $8$ an der zweiten Nachkommastelle. Die nächste Ziffer ist $7 \ge 5$, also runden wir auf.
  ---
  Ergebnis: $0{,}09$. Wiederholen: [1.16 Runden, signifikante Stellen und Zehnerpotenzen](/lernen/mathe3/zahlen/runden-signifikante-stellen-und-zehnerpotenzen).
```

Keine Messung ist exakt. Das liegt nicht an Schlamperei, sondern an der Natur des Messens. Jedes Gerät hat
eine begrenzte Auflösung, jeder Mensch liest etwas anders ab, und die Umgebung schwankt. Ein Messergebnis
besteht deshalb aus **zwei** Zahlen: dem besten Schätzwert und seiner **Messunsicherheit**. Die
Messunsicherheit sagt, in welchem Bereich der wahre Wert vermutlich liegt.

### Wie genau kann man ablesen?

Die einfachste Unsicherheit ist die **Ablesegenauigkeit**. Als Faustregel gilt:

- Bei einer **Skala** mit Teilstrichen liest man auf etwa einen halben bis einen ganzen Skalenteil genau ab.
  Beim Lineal mit Millimeterteilung sind das etwa $\pm 0{,}5\,\text{mm}$ bis $\pm 1\,\text{mm}$.
- Bei einer **Digitalanzeige** ist die Unsicherheit mindestens eine Einheit der letzten angezeigten Stelle.
  Zeigt eine Waage $152{,}3\,\text{g}$, ist die Unsicherheit mindestens $\pm 0{,}1\,\text{g}$.

### Zufällige und systematische Abweichungen

:::definition[Zufällige und systematische Abweichungen]
**Zufällige Abweichungen** streuen unvorhersehbar mal nach oben, mal nach unten. Ursachen sind etwa die
schwankende Reaktionszeit, kleine Ablesefehler oder Erschütterungen. Sie werden durch **Wiederholen und
Mittelwertbildung** kleiner.

**Systematische Abweichungen** verschieben **alle** Messwerte in dieselbe Richtung. Ursachen sind etwa ein
falsch eingestelltes Gerät, ein Nullpunktfehler oder schräges Ablesen. Mittelwertbildung hilft hier
**nicht**. Man muss die Ursache finden und beseitigen oder herausrechnen.

**Beispiel für systematisch:** Ein Maßband ist durch Wärme um $0{,}2\,\%$ gedehnt. Jede Länge wird zu kurz
abgelesen.

**Kein Beispiel für systematisch:** Die Reaktionszeit ist mal $0{,}15\,\text{s}$, mal $0{,}25\,\text{s}$. Sie
streut in beide Richtungen, das ist zufällig.
:::

:::achtung[Mitteln hilft nicht gegen einen Nullpunktfehler]
Eine Waage zeigt ohne Last schon $3\,\text{g}$ an. Ein Schüler wiegt einen Körper dreimal und erhält
$253\,\text{g}$, $252\,\text{g}$ und $254\,\text{g}$. Er bildet den Mittelwert $253\,\text{g}$ und hält das für
sehr genau.

**Der Fehler:** Jede Messung ist um $3\,\text{g}$ zu groß, also auch der Mittelwert. Mitteln verkleinert nur
das zufällige Streuen. **Richtig:** den Nullpunktfehler abziehen, $253\,\text{g} - 3\,\text{g} = 250\,\text{g}$,
oder die Waage vorher auf null stellen.
:::

```aufgabe
id: p1-fehlerart
titel: Systematisch oder zufällig?
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Welche der folgenden Ursachen führen zu **systematischen** Messabweichungen? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Ein Maßband ist durch Wärme um 0,2 % gedehnt."
      - "Die Reaktionszeit beim Stoppen schwankt."
      - "Eine Waage zeigt ohne Last bereits 3 g an."
      - "Die Ablesung einer Skala erfolgt mal etwas zu hoch, mal zu tief."
      - "Man liest eine Skala immer schräg von oben ab."
    richtig: [0, 2, 4]
    fehler:
      - wert: [0, 1, 2, 4]
        meldung: Eine **schwankende** Reaktionszeit wirkt mal in die eine, mal in die andere Richtung. Das ist eine zufällige Abweichung.
      - wert: [0, 2]
        meldung: Auch das immer gleich schräge Ablesen ist systematisch. Es verschiebt jede Ablesung in dieselbe Richtung. Man nennt das Parallaxenfehler.
hinweise:
  - Frage bei jeder Ursache, ob sie **jede** Messung in **dieselbe** Richtung verschiebt.
loesung: |
  **Kriterium:** Systematisch ist, was jede Messung in dieselbe Richtung verschiebt.
  ---
  Gedehntes Maßband, Nullpunktfehler der Waage und immer gleich schräges Ablesen sind systematisch. Schwankende Reaktionszeit und Ablesestreuung sind zufällig.
```

### Absolute und relative Unsicherheit

Man schreibt ein Messergebnis als $x = \bar x \pm \Delta x$. Dabei ist $\bar x$ (gelesen „x quer“) der beste
Schätzwert und $\Delta x$ (gelesen „Delta x“) die **absolute Unsicherheit**. Sie hat dieselbe Einheit wie
die Größe. Ein Beispiel ist $l = (12{,}4 \pm 0{,}2)\,\text{cm}$. Die Klammer zeigt, dass die Einheit für
beide Zahlen gilt.

Die **relative Unsicherheit** ist die absolute Unsicherheit geteilt durch den Messwert, $\dfrac{\Delta x}{x}$.
Sie hat keine Einheit und wird meist in Prozent angegeben. Für das Beispiel gilt
$\dfrac{0{,}2\,\text{cm}}{12{,}4\,\text{cm}} = 0{,}016 = 1{,}6\,\%$. Die relative Unsicherheit sagt, wie gut eine
Messung **im Verhältnis** zur gemessenen Größe ist.

:::beispiel[Dasselbe Lineal, sehr verschiedene Genauigkeit]
Mit einem Lineal liest man auf $\pm 1\,\text{mm}$ genau ab. Gemessen werden eine Schraube mit $2{,}0\,\text{cm}$
und ein Tisch mit $2{,}000\,\text{m}$.

**Schritt 1, Schraube:** $\dfrac{\Delta l}{l} = \dfrac{0{,}1\,\text{cm}}{2{,}0\,\text{cm}} = 0{,}05 = 5\,\%$. Wir haben
$1\,\text{mm}$ in $0{,}1\,\text{cm}$ umgerechnet, damit die Einheiten zueinander passen.

**Schritt 2, Tisch:** $\dfrac{\Delta l}{l} = \dfrac{0{,}001\,\text{m}}{2{,}000\,\text{m}} = 0{,}0005 = 0{,}05\,\%$.

**Antwort:** Die absolute Unsicherheit ist in beiden Fällen gleich. Relativ ist die Tischmessung aber
hundertmal genauer. Kleine Längen braucht man deshalb mit feineren Geräten, etwa einer Mikrometerschraube.
:::

```aufgabe
id: p1-relativer-fehler
titel: Relative Unsicherheit
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Die Länge eines Tisches wird zu $l = (1{,}250 \pm 0{,}005)\,\text{m}$ gemessen. Gib die relative Unsicherheit in Prozent an.
teile:
  - typ: zahl
    loesung: "0.005/1.250*100"
    einheit: "%"
    anzeige: '0{,}4'
    fehler:
      - wert: "0.005/1.250"
        meldung: Das ist die relative Unsicherheit als Dezimalzahl. Für Prozent mit $100$ multiplizieren.
      - wert: "1.250/0.005"
        meldung: Du hast den Kehrwert berechnet. Relative Unsicherheit ist Unsicherheit **durch** Messwert.
hinweise:
  - Relative Unsicherheit ist absolute Unsicherheit geteilt durch den Messwert.
loesung: |
  **Ansatz:** $\dfrac{\Delta l}{l}$, die Meter kürzen sich.
  ---
  $\dfrac{0{,}005\,\text{m}}{1{,}250\,\text{m}} = 0{,}004 = 0{,}4\,\%$.
```

```aufgabe
id: p1-ablesegenauigkeit
titel: Wie genau ist ein Messzylinder?
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Ein Messzylinder hat Teilstriche im Abstand von $2\,\text{mL}$. Du liest auf einen halben Teilstrich genau ab. Der Wasserstand zeigt $46\,\text{mL}$.

  a) Wie groß ist die absolute Ableseunsicherheit in mL?

  b) Wie groß ist die relative Unsicherheit in Prozent? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    label: a) absolute Unsicherheit
    loesung: "2/2"
    einheit: "mL"
    anzeige: '1'
    fehler:
      - wert: "2"
        meldung: Das ist ein ganzer Teilstrich. Laut Angabe liest du auf einen **halben** Teilstrich genau ab.
  - typ: zahl
    label: b) relative Unsicherheit
    loesung: "1/46*100"
    einheit: "%"
    anzeige: '2{,}17'
    fehler:
      - wert: "2/46*100"
        meldung: Du hast mit einem ganzen Teilstrich gerechnet. Die Unsicherheit ist ein halber Teilstrich, also $1\,\text{mL}$.
hinweise:
  - Ein halber Teilstrich von $2\,\text{mL}$ ist wie viel?
  - Relative Unsicherheit ist absolute Unsicherheit durch Messwert, mal $100\,\%$.
loesung: |
  **Ansatz:** Die Ableseunsicherheit ist ein halber Skalenteil. Daraus folgt die relative Unsicherheit.
  ---
  **a)** $\Delta V = \tfrac12\cdot 2\,\text{mL} = 1\,\text{mL}$, also $V = (46 \pm 1)\,\text{mL}$.
  ---
  **b)** $\dfrac{\Delta V}{V} = \dfrac{1\,\text{mL}}{46\,\text{mL}} = 0{,}0217 = 2{,}17\,\%$. Bei wenig Wasser im selben Zylinder wäre die relative Unsicherheit größer.
```

### Signifikante Stellen

**Signifikant** (bedeutsam) sind alle Ziffern einer Zahl ab der ersten Ziffer, die nicht null ist. Die
Zahl $0{,}00340$ hat drei signifikante Stellen: $3$, $4$ und die letzte $0$.

- Die Nullen **vorne** zählen nicht. Sie zeigen nur, wo das Komma steht.
- Die Null **am Ende** zählt. Sie sagt, dass auf Hunderttausendstel genau gemessen wurde.
- Bei großen Zahlen ist $3000\,\text{m}$ unklar. Schreib $3{,}0\cdot 10^{3}\,\text{m}$ für zwei signifikante
  Stellen oder $3{,}000\cdot 10^{3}\,\text{m}$ für vier.

Die Zahl der signifikanten Stellen verrät, wie genau ein Wert gemessen ist. Ein Ergebnis darf deshalb
nicht genauer erscheinen als die Messwerte, aus denen es berechnet wurde.

:::beispiel[Wie viele Stellen hat das Ergebnis?]
**Fall 1, Division:** Ein Läufer schafft $12{,}4\,\text{m}$ in $3{,}1\,\text{s}$. Der Taschenrechner zeigt
$12{,}4 : 3{,}1 = 4{,}0000000$.

- $12{,}4$ hat drei, $3{,}1$ hat zwei signifikante Stellen.
- Bei Produkten und Quotienten bestimmt der **ungenaueste** Wert die Stellenzahl. Also zwei Stellen.
- Ergebnis: $v = 4{,}0\,\text{m/s}$. Die Null nach dem Komma ist wichtig, sie zeigt zwei Stellen.

**Fall 2, Addition:** $12{,}45\,\text{m} + 3{,}1\,\text{m} = 15{,}55\,\text{m}$.

- Bei Summen und Differenzen zählen die **Nachkommastellen**. $3{,}1$ ist nur auf Zehntel genau.
- Ergebnis: $15{,}6\,\text{m}$, auf Zehntel gerundet.
:::

:::merke[Runden und Angeben]
- Bei Produkten und Quotienten hat das Ergebnis so viele signifikante Stellen wie der ungenaueste Eingangswert.
- Bei Summen und Differenzen hat es so viele Nachkommastellen wie der ungenaueste Summand.
- Zwischenergebnisse mit ein bis zwei Stellen mehr weiterrechnen, erst am Ende runden.
- Die Unsicherheit rundet man auf **eine**, höchstens zwei signifikante Stellen. Den Messwert rundet man auf
  **dieselbe Dezimalstelle** wie die Unsicherheit.
:::

```aufgabe
id: p1-sig-stellen-zaehlen
titel: Signifikante Stellen zählen
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Wie viele signifikante Stellen hat der Messwert $0{,}04050\,\text{m}$?
teile:
  - typ: zahl
    loesung: "4"
    fehler:
      - wert: "6"
        meldung: Die beiden Nullen **vor** der $4$ zählen nicht. Sie zeigen nur, wo das Komma steht.
      - wert: "3"
        meldung: Die Null am Ende zählt mit. Sie sagt, dass auch die letzte Stelle gemessen wurde.
hinweise:
  - Beginne beim Zählen mit der ersten Ziffer, die nicht null ist.
loesung: |
  **Regel:** Signifikant sind alle Ziffern ab der ersten, die nicht null ist. Nullen am Ende zählen mit.
  ---
  Signifikant sind $4$, $0$, $5$, $0$, also **vier** Stellen. In Zehnerpotenzen sieht man es deutlicher: $4{,}050\cdot 10^{-2}\,\text{m}$.
```

```aufgabe
id: p1-signifikant
titel: Sinnvoll runden
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Ein Wagen legt $7{,}35\,\text{m}$ in $2{,}1\,\text{s}$ zurück. Der Taschenrechner zeigt für die Geschwindigkeit $3{,}5$. Wie viele signifikante Stellen sind im Ergebnis sinnvoll?
teile:
  - typ: zahl
    loesung: "2"
    fehler:
      - wert: "3"
        meldung: Drei Stellen hat die Strecke. Bei einem Quotienten bestimmt aber der **ungenaueste** Wert die Stellenzahl, hier die Zeit.
hinweise:
  - Zähle die signifikanten Stellen von $7{,}35$ und von $2{,}1$. Der kleinere Wert zählt.
loesung: |
  **Regel:** Bei einem Quotienten hat das Ergebnis so viele signifikante Stellen wie der ungenaueste Wert.
  ---
  $7{,}35$ hat drei, $2{,}1$ hat zwei Stellen. Also zwei: $v = 3{,}5\,\text{m/s}$.
```

```aufgabe
id: p1-summe-runden
titel: Eine Summe richtig runden
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Ein Becher wiegt $152{,}3\,\text{g}$ (Küchenwaage). Hinein kommt eine Probe mit $4{,}27\,\text{g}$ (Feinwaage). Gib die Gesamtmasse sinnvoll gerundet in g an.
teile:
  - typ: zahl
    loesung: "156.6"
    einheit: "g"
    anzeige: '156{,}6'
    toleranz: 0.01
    fehler:
      - wert: "156.57"
        meldung: Das Ergebnis täuscht eine Genauigkeit vor, die es nicht gibt. Die Becherwaage zeigt nur Zehntelgramm. Bei einer Summe zählt die Nachkommastelle des ungenauesten Summanden.
      - wert: "157"
        meldung: Du hast nach signifikanten Stellen wie bei einem Produkt gerundet. Bei einer Summe zählt die Zahl der Nachkommastellen.
hinweise:
  - Bei Summen zählen die Nachkommastellen, nicht die signifikanten Stellen.
  - Welcher Summand ist nur auf Zehntelgramm genau?
loesung: |
  **Ansatz:** Bei einer Summe bestimmt der Summand mit den wenigsten Nachkommastellen die Genauigkeit.
  ---
  Rechnung: $152{,}3\,\text{g} + 4{,}27\,\text{g} = 156{,}57\,\text{g}$.
  ---
  $152{,}3\,\text{g}$ ist nur auf Zehntel genau. Also runden wir auf Zehntel: $156{,}6\,\text{g}$. Die genaue Feinwaage nützt nichts, wenn die grobe Waage den größeren Teil wiegt.
```

### Ein Messergebnis vollständig angeben

:::beispiel[Ein Ergebnis aus dem Taschenrechner richtig angeben]
Eine Auswertung liefert für die Fallbeschleunigung $g = 9{,}8146\,\text{m/s}^2$ mit der Unsicherheit
$\Delta g = 0{,}0532\,\text{m/s}^2$.

**Schritt 1, Unsicherheit runden:** auf eine signifikante Stelle, $0{,}0532 \approx 0{,}05$.

**Schritt 2, Messwert runden:** auf dieselbe Dezimalstelle wie die Unsicherheit, also auf Hundertstel:
$9{,}8146 \approx 9{,}81$.

**Schritt 3, angeben:** $g = (9{,}81 \pm 0{,}05)\,\text{m/s}^2$.

**Deutung:** Die dritte Nachkommastelle wäre bedeutungslos, denn schon die zweite ist um bis zu $5$ Einheiten
unsicher.
:::

:::achtung[Zu viele Stellen aus dem Taschenrechner]
Ein Protokoll enthält $l = (2{,}03846 \pm 0{,}1)\,\text{m}$.

**Der Fehler:** Die Unsicherheit liegt bei Zehntelmetern. Die Ziffern $3$, $8$, $4$, $6$ danach täuschen eine
Genauigkeit von Hunderttausendstel Metern vor. **Richtig:** $l = (2{,}0 \pm 0{,}1)\,\text{m}$. Der Messwert
endet an derselben Stelle wie die Unsicherheit.
:::

```aufgabe
id: p1-ergebnis-runden
titel: Ein Ergebnis normgerecht angeben
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Eine Rechnung liefert $v = 8{,}1342\,\text{m/s}$ mit der Unsicherheit $\Delta v = 0{,}0874\,\text{m/s}$. Runde die Unsicherheit auf eine signifikante Stelle und den Messwert auf dieselbe Dezimalstelle. Gib beide Zahlen in m/s an.
teile:
  - typ: zahl
    label: gerundeter Messwert
    loesung: "8.13"
    einheit: "m/s"
    toleranz: 0.001
    anzeige: '8{,}13'
    fehler:
      - wert: "8.1342"
        meldung: Der Messwert hat zu viele Stellen. Er endet an derselben Dezimalstelle wie die gerundete Unsicherheit, hier bei den Hundertsteln.
      - wert: "8.1"
        meldung: Du hast zu stark gerundet. Die Unsicherheit $0{,}09$ steht bei den Hundertsteln, also behält der Messwert zwei Nachkommastellen.
  - typ: zahl
    label: gerundete Unsicherheit
    loesung: "0.09"
    einheit: "m/s"
    toleranz: 0.001
    anzeige: '0{,}09'
    fehler:
      - wert: "0.08"
        meldung: Du hast abgeschnitten. Nach der $8$ folgt eine $7$, also wird aufgerundet.
hinweise:
  - Die erste signifikante Ziffer der Unsicherheit ist die $8$ bei den Hundertsteln.
  - Runde den Messwert dann ebenfalls auf Hundertstel.
gefuehrt:
  - text: Runde die Unsicherheit $0{,}0874$ auf eine signifikante Stelle.
    teil: { typ: zahl, loesung: "0.09", toleranz: 0.001 }
    erklaerung: Die erste signifikante Ziffer ist die $8$. Danach kommt $7$, also wird aufgerundet auf $0{,}09$.
  - text: An welcher Dezimalstelle steht die gerundete Unsicherheit? Gib die Zahl der Nachkommastellen ein.
    teil: { typ: zahl, loesung: "2" }
    erklaerung: Die $9$ steht an der zweiten Nachkommastelle, bei den Hundertsteln.
  - text: Runde den Messwert $8{,}1342$ auf Hundertstel.
    teil: { typ: zahl, loesung: "8.13", toleranz: 0.001 }
    erklaerung: Nach der $3$ folgt eine $4$, also wird abgerundet auf $8{,}13$.
  - text: Schreibe das vollständige Ergebnis auf.
    erklaerung: '$v = (8{,}13 \pm 0{,}09)\,\text{m/s}$. Die relative Unsicherheit ist $0{,}09/8{,}13 \approx 1{,}1\,\%$.'
loesung: |
  **Ansatz:** Erst die Unsicherheit auf eine signifikante Stelle runden, dann den Messwert auf dieselbe Dezimalstelle.
  ---
  **Unsicherheit:** $0{,}0874 \approx 0{,}09\,\text{m/s}$, denn die Ziffer nach der $8$ ist eine $7$.
  ---
  **Messwert:** auf Hundertstel, $8{,}1342 \approx 8{,}13\,\text{m/s}$.
  ---
  **Antwortsatz:** $v = (8{,}13 \pm 0{,}09)\,\text{m/s}$. Die relative Unsicherheit beträgt etwa $1{,}1\,\%$.
```

```aufgabe
id: p1-sys-zufall-text
titel: Hilft öfter messen immer?
niveau: 3
lernziel: 5
kompetenz: begruenden
angabe: |
  Ein Mitschüler misst die Fallzeit einer Kugel mit einer Lichtschranke, deren Uhr um $0{,}020\,\text{s}$ zu spät startet. Er sagt: „Wenn ich hundertmal messe und mittle, wird mein Ergebnis beliebig genau.“ Nimm Stellung. Erkläre den Unterschied zwischen zufälligen und systematischen Abweichungen und sag, was er tun sollte.
teile:
  - typ: text
    muster: |
      Das stimmt nur für zufällige Abweichungen. Die verspätet startende Uhr verschiebt jede Messung um
      0,020 s nach unten, das ist eine systematische Abweichung. Der Mittelwert aus hundert Messungen ist genauso
      um 0,020 s zu klein wie jede Einzelmessung. Mitteln verkleinert nur die Streuung. Er muss die Ursache beheben
      oder die 0,020 s zu jedem Wert addieren. Zum Beispiel kann er die Uhr mit einer bekannten Zeit vergleichen.
hinweise:
  - Verschiebt die verspätete Uhr die Messwerte mal nach oben, mal nach unten, oder immer gleich?
  - Was passiert mit einer immer gleichen Verschiebung, wenn man mittelt?
loesung: |
  **Einordnung:** Die verspätete Uhr verschiebt jede Messung in dieselbe Richtung um $0{,}020\,\text{s}$. Das ist eine systematische Abweichung.
  ---
  **Wirkung des Mittelns:** Der Mittelwert aus gleich verschobenen Werten ist ebenfalls um $0{,}020\,\text{s}$ verschoben. Mitteln verkleinert nur die zufällige Streuung.
  ---
  **Abhilfe:** Die Ursache beheben oder die bekannte Verschiebung korrigieren. Eine Kontrolle mit einer bekannten Zeit oder einem zweiten Messverfahren deckt solche Fehler auf.
```

```reflexion
frage: Zwei Messungen liefern $(9{,}8 \pm 0{,}3)\,\text{m/s}^2$ und $(9{,}2 \pm 0{,}2)\,\text{m/s}^2$. Widersprechen sie sich? Was könnte man vermuten, wenn der Literaturwert $9{,}81\,\text{m/s}^2$ ist?
antwort: |
  Die erste Messung erlaubt Werte von $9{,}5$ bis $10{,}1$, die zweite von $9{,}0$ bis $9{,}4$. Die Bereiche überlappen
  sich nicht, die Messungen widersprechen sich also. Der Literaturwert liegt im Bereich der ersten Messung, aber weit
  außerhalb der zweiten. Bei der zweiten Messung steckt vermutlich eine systematische Abweichung, die in der
  angegebenen Unsicherheit nicht enthalten ist.
```

## Messreihen auswerten: Mittelwert und Standardabweichung

```aufgabe
id: p1-8-check
art: check
titel: "Vorwissen: der Mittelwert"
niveau: 1
angabe: |
  Berechne den Mittelwert der vier Zahlen $3$, $5$, $4$ und $8$.
teile:
  - typ: zahl
    loesung: "(3+5+4+8)/4"
    fehler:
      - wert: "3+5+4+8"
        meldung: Das ist die Summe. Für den Mittelwert teilst du sie noch durch die Anzahl der Werte.
      - wert: "(4+5)/2"
        meldung: Das ist der Median, also der mittlere Wert der sortierten Liste. Der Mittelwert ist Summe durch Anzahl.
hinweise:
  - Mittelwert = Summe aller Werte geteilt durch ihre Anzahl.
loesung: |
  Summe: $3 + 5 + 4 + 8 = 20$.
  ---
  Mittelwert: $20 : 4 = 5$. Wiederholen: [17.4 Mittelwert, Median und Modus](/lernen/mathe3/statistik/mittelwert-median-und-modus).
```

Misst man dieselbe Größe mehrmals, erhält man meist leicht verschiedene Werte. Schuld sind die zufälligen
Abweichungen, die du in [1.7 Messunsicherheit und signifikante Stellen](/lernen/physik1/groessen-einheiten-messen/messunsicherheit-und-signifikante-stellen)
kennengelernt hast. Eine solche Liste von Messwerten heißt **Messreihe**. Aus ihr gewinnt man drei Zahlen:
den Mittelwert, die Standardabweichung und die Unsicherheit des Mittelwerts.

### Der Mittelwert

Der **Mittelwert** (genauer: arithmetisches Mittel) einer Messreihe $x_1, x_2, \dots, x_n$ ist
$$\bar x = \frac{x_1 + x_2 + \dots + x_n}{n}.$$
Dabei ist $n$ die Anzahl der Messungen und $x_1$ bis $x_n$ sind die einzelnen Messwerte. Der Mittelwert ist
der beste Schätzwert für den wahren Wert. Zufällige Abweichungen nach oben und unten gleichen sich in der
Summe teilweise aus.

```aufgabe
id: p1-mittelwert
titel: Mittelwert einer Messreihe
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Die Schwingungsdauer eines Pendels wird fünfmal gemessen: $2{,}03\,\text{s}$; $1{,}98\,\text{s}$; $2{,}01\,\text{s}$; $2{,}05\,\text{s}$; $1{,}98\,\text{s}$. Berechne den Mittelwert in s.
teile:
  - typ: zahl
    loesung: "(2.03+1.98+2.01+2.05+1.98)/5"
    einheit: "s"
    anzeige: '2{,}01'
    toleranz: 0.004
    fehler:
      - wert: "(2.03+1.98+2.01+2.05)/4"
        meldung: Du hast einen Wert vergessen. Der Wert $1{,}98\,\text{s}$ kommt zweimal vor und zählt auch zweimal.
      - wert: "(1.98+2.05)/2"
        meldung: Das ist die Mitte zwischen kleinstem und größtem Wert. Der Mittelwert berücksichtigt **alle** Messwerte.
hinweise:
  - Addiere alle fünf Werte und teile durch $5$.
loesung: |
  **Ansatz:** Mittelwert ist Summe durch Anzahl.
  ---
  $\bar T = \dfrac{2{,}03 + 1{,}98 + 2{,}01 + 2{,}05 + 1{,}98}{5}\,\text{s} = \dfrac{10{,}05}{5}\,\text{s} = 2{,}01\,\text{s}$. Probe: Die Abweichungen $+0{,}02$, $-0{,}03$, $0$, $+0{,}04$, $-0{,}03$ ergeben zusammen null.
```

### Die Standardabweichung

Der Mittelwert sagt nicht, wie stark die Werte streuen. Die Reihen $2{,}0$; $2{,}0$; $2{,}0$ und
$1{,}0$; $2{,}0$; $3{,}0$ haben denselben Mittelwert $2{,}0$. Die zweite ist aber viel unzuverlässiger. Ein
Maß für die Streuung ist die **Standardabweichung**.

:::definition[Standardabweichung einer Messreihe]
Die **Standardabweichung** $s$ einer Messreihe ist
$$s = \sqrt{\frac{(x_1 - \bar x)^2 + (x_2 - \bar x)^2 + \dots + (x_n - \bar x)^2}{n - 1}}.$$
Dabei ist $x_i - \bar x$ die **Abweichung** des $i$-ten Messwerts vom Mittelwert. Sie wird quadriert, damit
sich positive und negative Abweichungen nicht wegheben. Man teilt durch $n - 1$ und nicht durch $n$. Der
Grund: Der Mittelwert wurde aus denselben Daten berechnet und liegt deshalb etwas zu nah an ihnen.

**Bedeutung:** Bei vielen Messreihen liegen etwa zwei Drittel der Einzelwerte im Bereich $\bar x \pm s$.
Genauer gilt das für normalverteilte Werte, siehe
[16.16 Normalverteilung und Standardisieren](/lernen/mathe3/wahrscheinlichkeit/normalverteilung-und-standardisieren).

**Beispiel:** Die Reihe $1{,}0$; $2{,}0$; $3{,}0$ hat $s = \sqrt{\frac{1 + 0 + 1}{2}} = 1{,}0$.

**Keine Standardabweichung:** die Differenz zwischen größtem und kleinstem Wert. Diese heißt **Spannweite**.
Sie hängt nur von den zwei äußersten Werten ab.
:::

Die Standardabweichung beschreibt, wie genau eine **einzelne** Messung ist. Sie wird durch mehr Messungen
nicht kleiner, denn die einzelnen Werte streuen ja weiterhin. Mehr zu Streuungsmaßen steht in
[17.7 Varianz, Standardabweichung und z-Werte](/lernen/mathe3/statistik/varianz-standardabweichung-und-z-werte).

### Die Unsicherheit des Mittelwerts

Der Mittelwert aus vielen Messungen ist genauer als eine Einzelmessung. Wie viel genauer, sagt die
**Unsicherheit des Mittelwerts**:
$$\Delta\bar x = \frac{s}{\sqrt n}.$$
Sie sinkt mit der Wurzel aus der Zahl der Messungen. Viermal so viele Messungen halbieren sie, denn
$\sqrt4 = 2$. Hundertmal so viele Messungen machen sie zehnmal kleiner. Das Ergebnis der Messreihe gibt man
dann als $x = \bar x \pm \Delta\bar x$ an.

:::beispiel[Wie oft muss man messen?]
Eine Stoppuhrmessung hat die Standardabweichung $s = 0{,}05\,\text{s}$. Nach $5$ Messungen ist die
Unsicherheit des Mittelwerts $0{,}05\,\text{s}/\sqrt5 = 0{,}022\,\text{s}$. Wie oft muss man messen, damit sie
auf $0{,}01\,\text{s}$ sinkt?

**Schritt 1, Gleichung aufstellen:** $\dfrac{s}{\sqrt n} = 0{,}01\,\text{s}$.

**Schritt 2, nach $\sqrt n$ umstellen:** Wir multiplizieren mit $\sqrt n$ und teilen durch $0{,}01\,\text{s}$:
$\sqrt n = \dfrac{0{,}05\,\text{s}}{0{,}01\,\text{s}} = 5$. Die Sekunden kürzen sich.

**Schritt 3, quadrieren:** $n = 5^2 = 25$.

**Antwort:** Man braucht $25$ Messungen, fünfmal so viele wie vorher. Für eine nur gut doppelt so kleine
Unsicherheit ist das viel Aufwand. Oft lohnt sich ein besseres Messverfahren mehr, etwa eine Lichtschranke.
:::

```plot
x: [0, 6]
y: [0.43, 0.47]
hoehe: 300
achsen: { x: "Nummer der Messung", y: "Fallzeit in s" }
punkte:
  - { x: 1, y: 0.452 }
  - { x: 2, y: 0.448 }
  - { x: 3, y: 0.461 }
  - { x: 4, y: 0.439 }
  - { x: 5, y: 0.455 }
strecken:
  - { von: [0.3, 0.451], nach: [5.7, 0.451], farbe: 1 }
  - { von: [0.3, 0.4428], nach: [5.7, 0.4428], gestrichelt: true, farbe: 2 }
  - { von: [0.3, 0.4592], nach: [5.7, 0.4592], gestrichelt: true, farbe: 2 }
beschriftung: "Fünf Messungen der Fallzeit einer Kugel als Punkte. Die durchgezogene Linie ist der Mittelwert 0,451 s. Die gestrichelten Linien liegen eine Standardabweichung darüber und darunter, bei 0,443 s und 0,459 s. Drei der fünf Punkte liegen in diesem Band."
```

:::beispiel[Eine Messreihe der Fallzeit auswerten]
Eine Kugel fällt fünfmal aus derselben Höhe. Gemessen werden $0{,}452$; $0{,}448$; $0{,}461$; $0{,}439$ und
$0{,}455\,\text{s}$.

**Schritt 1, Mittelwert:** $\bar t = \dfrac{0{,}452 + 0{,}448 + 0{,}461 + 0{,}439 + 0{,}455}{5}\,\text{s} = \dfrac{2{,}255}{5}\,\text{s} = 0{,}451\,\text{s}$.

**Schritt 2, Abweichungen:** $+0{,}001$; $-0{,}003$; $+0{,}010$; $-0{,}012$; $+0{,}004$ (alle in s). Ihre Summe
ist null. Das ist eine gute Probe für den Mittelwert.

**Schritt 3, Quadrate addieren:** $0{,}000\,001 + 0{,}000\,009 + 0{,}000\,100 + 0{,}000\,144 + 0{,}000\,016 = 0{,}000\,270\,\text{s}^2$.

**Schritt 4, Standardabweichung:** $s = \sqrt{\dfrac{0{,}000\,270\,\text{s}^2}{5 - 1}} = \sqrt{0{,}000\,067\,5\,\text{s}^2} = 0{,}0082\,\text{s}$.

**Schritt 5, Unsicherheit des Mittelwerts:** $\Delta\bar t = \dfrac{0{,}0082\,\text{s}}{\sqrt5} = 0{,}0037\,\text{s} \approx 0{,}004\,\text{s}$.

**Antwort:** $t = (0{,}451 \pm 0{,}004)\,\text{s}$. Eine Einzelmessung schwankt um etwa $\pm 0{,}008\,\text{s}$,
der Mittelwert ist gut doppelt so genau.
:::

```aufgabe
id: p1-messungen-vervierfachen
titel: Was bringen mehr Messungen?
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  Eine Studentin misst eine Länge $100$-mal statt bisher $25$-mal. Was passiert mit der Standardabweichung $s$ der Einzelwerte und mit der Unsicherheit des Mittelwerts?
teile:
  - typ: auswahl
    optionen:
      - "Beide werden viermal kleiner."
      - "$s$ bleibt etwa gleich, die Unsicherheit des Mittelwerts halbiert sich."
      - "$s$ halbiert sich, die Unsicherheit des Mittelwerts bleibt gleich."
      - "Beide bleiben gleich, mehr Messungen bringen nichts."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Die Unsicherheit des Mittelwerts sinkt mit $\sqrt n$, nicht mit $n$. Viermal so viele Messungen ergeben nur den Faktor $\sqrt4 = 2$. Und $s$ beschreibt die Streuung der Einzelwerte, die bleibt.
      - wert: 2
        meldung: Die Einzelwerte streuen mit mehr Messungen nicht weniger. Kleiner wird nur die Unsicherheit des **Mittelwerts**.
      - wert: 3
        meldung: Der Mittelwert wird mit mehr Messungen sehr wohl genauer, weil sich zufällige Abweichungen stärker ausgleichen.
hinweise:
  - '$s$ beschreibt eine einzelne Messung, $s/\sqrt n$ den Mittelwert.'
loesung: |
  **Ansatz:** Die Streuung der Einzelwerte hängt vom Messverfahren ab, nicht von der Zahl der Messungen. Die Unsicherheit des Mittelwerts ist $s/\sqrt n$.
  ---
  $n$ wächst von $25$ auf $100$, also um den Faktor $4$. $\sqrt4 = 2$, also halbiert sich $s/\sqrt n$, während $s$ etwa gleich bleibt.
```

```aufgabe
id: p1-standardabweichung
titel: Die Standardabweichung berechnen
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Eine Strecke wird fünfmal gemessen: $12{,}3$; $12{,}7$; $12{,}5$; $12{,}4$; $12{,}6\,\text{cm}$. Berechne den Mittelwert und die Standardabweichung (mit $n - 1$) in cm. Runde die Standardabweichung auf drei signifikante Stellen.
teile:
  - typ: zahl
    label: Mittelwert
    loesung: "mean([12.3, 12.7, 12.5, 12.4, 12.6])"
    einheit: "cm"
    anzeige: '12{,}5'
    fehler:
      - wert: "12.3+12.7+12.5+12.4+12.6"
        meldung: Das ist die Summe. Teile sie durch die Anzahl $5$.
  - typ: zahl
    label: Standardabweichung
    loesung: "std([12.3, 12.7, 12.5, 12.4, 12.6])"
    einheit: "cm"
    anzeige: '0{,}158'
    fehler:
      - wert: "std([12.3, 12.7, 12.5, 12.4, 12.6], \"uncorrected\")"
        meldung: Du hast durch $n = 5$ geteilt. Bei einer Messreihe teilt man durch $n - 1 = 4$, weil der Mittelwert aus denselben Daten stammt.
      - wert: "0.1/4"
        meldung: Du hast die Wurzel vergessen. Ohne Wurzel hat das Ergebnis die Einheit $\text{cm}^2$.
hinweise:
  - Berechne zuerst den Mittelwert, dann die Abweichungen jedes Werts davon.
  - Quadriere die Abweichungen, addiere sie, teile durch $4$ und ziehe die Wurzel.
loesung: |
  **Mittelwert:** $\bar x = \dfrac{62{,}5}{5}\,\text{cm} = 12{,}5\,\text{cm}$.
  ---
  **Abweichungen:** $-0{,}2$; $+0{,}2$; $0$; $-0{,}1$; $+0{,}1$ (in cm). Quadrate: $0{,}04 + 0{,}04 + 0 + 0{,}01 + 0{,}01 = 0{,}10\,\text{cm}^2$.
  ---
  **Standardabweichung:** $s = \sqrt{\dfrac{0{,}10\,\text{cm}^2}{4}} = \sqrt{0{,}025\,\text{cm}^2} = 0{,}158\,\text{cm}$.
  ---
  **Deutung:** Eine Einzelmessung streut um etwa $\pm 0{,}16\,\text{cm}$. Drei der fünf Werte liegen im Bereich $12{,}5 \pm 0{,}16\,\text{cm}$.
```

:::achtung[Standardabweichung und Unsicherheit des Mittelwerts verwechselt]
Für die Fallzeit aus dem Beispiel schreibt ein Schüler $t = (0{,}451 \pm 0{,}008)\,\text{s}$ und meint, das sei
das Ergebnis der Messreihe.

**Der Fehler:** $0{,}008\,\text{s}$ ist die Standardabweichung $s$. Sie beschreibt eine **einzelne** Messung.
Der Mittelwert aus fünf Messungen ist genauer. **Richtig:** $\Delta\bar t = s/\sqrt5 = 0{,}004\,\text{s}$, also
$t = (0{,}451 \pm 0{,}004)\,\text{s}$.
:::

:::achtung[Durch n statt durch n − 1 geteilt]
Für die Reihe $12{,}3$; $12{,}7$; $12{,}5$; $12{,}4$; $12{,}6\,\text{cm}$ rechnet jemand
$s = \sqrt{0{,}10/5}\,\text{cm} = 0{,}141\,\text{cm}$.

**Der Fehler:** Er hat durch $n = 5$ geteilt. Das unterschätzt die Streuung, bei fünf Werten um gut $10\,\%$.
**Richtig:** $s = \sqrt{0{,}10/4}\,\text{cm} = 0{,}158\,\text{cm}$. Am Taschenrechner heißt dieser Wert meist
$s_x$ oder $\sigma_{n-1}$.
:::

```aufgabe
id: p1-mittelwert-unsicherheit
titel: Wie genau ist der Mittelwert?
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Eine Länge wird $16$-mal gemessen. Die Einzelwerte haben die Standardabweichung $s = 0{,}8\,\text{mm}$.

  a) Wie groß ist die Unsicherheit des Mittelwerts in mm?

  b) Wie oft müsste man messen, damit sie nur noch $0{,}1\,\text{mm}$ beträgt?
teile:
  - typ: zahl
    label: a) Unsicherheit des Mittelwerts
    loesung: "0.8/sqrt(16)"
    einheit: "mm"
    anzeige: '0{,}2'
    fehler:
      - wert: "0.8/16"
        meldung: Die Unsicherheit sinkt mit der **Wurzel** aus der Zahl der Messungen, nicht mit der Zahl selbst.
      - wert: "0.8"
        meldung: Das ist die Streuung einer Einzelmessung. Der Mittelwert aus $16$ Messungen ist genauer.
  - typ: zahl
    label: b) nötige Anzahl
    loesung: "(0.8/0.1)^2"
    anzeige: '64'
    fehler:
      - wert: "0.8/0.1"
        meldung: 'Aus $s/\sqrt n = 0{,}1$ folgt $\sqrt n = 8$. Gesucht ist aber $n$ selbst, also musst du noch quadrieren.'
hinweise:
  - '$\Delta\bar x = s/\sqrt n$.'
  - 'Für b) stelle $s/\sqrt n = 0{,}1\,\text{mm}$ nach $n$ um: erst nach $\sqrt n$, dann quadrieren.'
loesung: |
  **Ansatz:** Die Unsicherheit des Mittelwerts ist $\Delta\bar x = \dfrac{s}{\sqrt n}$.
  ---
  **a)** $\Delta\bar x = \dfrac{0{,}8\,\text{mm}}{\sqrt{16}} = \dfrac{0{,}8\,\text{mm}}{4} = 0{,}2\,\text{mm}$.
  ---
  **b)** Aus $\dfrac{0{,}8\,\text{mm}}{\sqrt n} = 0{,}1\,\text{mm}$ folgt durch Umstellen $\sqrt n = 8$, also $n = 64$.
  ---
  **Proportionalitätsschluss:** Die Unsicherheit soll halbiert werden ($0{,}2 \to 0{,}1$). Dafür braucht man viermal so viele Messungen, $4\cdot 16 = 64$.
```

### Ausreißer

Manchmal passt ein Messwert gar nicht zu den anderen. Ein solcher **Ausreißer** entsteht oft durch einen
groben Fehler, etwa einen Tippfehler oder eine vergessene Schwingung beim Zählen. Man darf ihn nur
weglassen, wenn man einen **Grund** dafür nennen kann. Eine Faustregel: Ein Wert, der mehr als drei
Standardabweichungen vom Mittelwert der übrigen entfernt liegt, verdient einen kritischen Blick.

```aufgabe
id: p1-ausreisser
titel: Ein verdächtiger Messwert
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Sechs Messungen einer Zeit ergeben $1{,}52$; $1{,}49$; $1{,}51$; $1{,}87$; $1{,}50$; $1{,}48\,\text{s}$. Im Protokoll steht beim vierten Wert: „Stoppuhr zu spät gestartet“.

  a) Berechne den Mittelwert **ohne** den begründet ausgeschlossenen Wert in s.

  b) Berechne die Standardabweichung der verbleibenden Werte in s (drei signifikante Stellen).
teile:
  - typ: zahl
    label: a) Mittelwert
    loesung: "mean([1.52, 1.49, 1.51, 1.50, 1.48])"
    einheit: "s"
    anzeige: '1{,}50'
    fehler:
      - wert: "mean([1.52, 1.49, 1.51, 1.87, 1.50, 1.48])"
        meldung: Du hast den Ausreißer mitgenommen. Für ihn gibt es einen protokollierten Grund, er wird ausgeschlossen.
  - typ: zahl
    label: b) Standardabweichung
    loesung: "std([1.52, 1.49, 1.51, 1.50, 1.48])"
    einheit: "s"
    anzeige: '0{,}0158'
    fehler:
      - wert: "std([1.52, 1.49, 1.51, 1.87, 1.50, 1.48])"
        meldung: Mit dem Ausreißer wird die Standardabweichung fast zehnmal so groß. Er verfälscht die Streuung stark.
hinweise:
  - Lass den Wert $1{,}87\,\text{s}$ weg und rechne mit fünf Werten.
  - Für $s$ teilst du die Summe der Abweichungsquadrate durch $5 - 1 = 4$.
loesung: |
  **Ansatz:** Der Wert $1{,}87\,\text{s}$ hat einen protokollierten Grund. Er wird ausgeschlossen, es bleiben $n = 5$ Werte.
  ---
  **a)** $\bar t = \dfrac{1{,}52 + 1{,}49 + 1{,}51 + 1{,}50 + 1{,}48}{5}\,\text{s} = \dfrac{7{,}50}{5}\,\text{s} = 1{,}50\,\text{s}$.
  ---
  **b)** Abweichungen $+0{,}02$; $-0{,}01$; $+0{,}01$; $0$; $-0{,}02$. Quadratsumme $0{,}0010\,\text{s}^2$. $s = \sqrt{0{,}0010/4}\,\text{s} = 0{,}0158\,\text{s} \approx 0{,}016\,\text{s}$.
  ---
  **Plausibilität:** Der ausgeschlossene Wert liegt $0{,}37\,\text{s}$ über dem Mittelwert, über zwanzig Standardabweichungen. Selbst ohne Protokollnotiz wäre er verdächtig.
```

```aufgabe
id: p1-messreihe-gefuehrt
titel: Eine kurze Messreihe Schritt für Schritt
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Vier Messungen einer Schwingungsdauer ergeben $2{,}04$; $1{,}98$; $2{,}02$; $2{,}00\,\text{s}$. Gib den Mittelwert, die Standardabweichung und die Unsicherheit des Mittelwerts in s an. Runde Standardabweichung und Unsicherheit auf zwei signifikante Stellen.
teile:
  - typ: zahl
    label: Mittelwert
    loesung: "mean([2.04, 1.98, 2.02, 2.00])"
    einheit: "s"
    anzeige: '2{,}01'
    fehler:
      - wert: "8.04/3"
        meldung: Beim Mittelwert teilst du durch die Anzahl $n = 4$. Durch $n - 1$ teilt man erst bei der Standardabweichung.
  - typ: zahl
    label: Standardabweichung
    loesung: "std([2.04, 1.98, 2.02, 2.00])"
    einheit: "s"
    toleranz: 0.0005
    anzeige: '0{,}026'
    fehler:
      - wert: "std([2.04, 1.98, 2.02, 2.00], \"uncorrected\")"
        meldung: Du hast durch $4$ geteilt. Bei einer Messreihe teilt man durch $n - 1 = 3$.
  - typ: zahl
    label: Unsicherheit des Mittelwerts
    loesung: "std([2.04, 1.98, 2.02, 2.00])/2"
    einheit: "s"
    toleranz: 0.0005
    anzeige: '0{,}013'
    fehler:
      - wert: "std([2.04, 1.98, 2.02, 2.00])/4"
        meldung: Geteilt wird durch $\sqrt n = \sqrt4 = 2$, nicht durch $n = 4$.
hinweise:
  - Erst den Mittelwert, dann die Abweichungen, deren Quadrate und deren Summe.
  - '$s = \sqrt{\text{Quadratsumme}/(n-1)}$ und $\Delta\bar x = s/\sqrt n$.'
gefuehrt:
  - text: Berechne den Mittelwert in s.
    teil: { typ: zahl, loesung: "8.04/4" }
    erklaerung: 'Summe $8{,}04\,\text{s}$, geteilt durch $4$ ergibt $2{,}01\,\text{s}$.'
  - text: Berechne die Summe der quadrierten Abweichungen in $\text{s}^2$.
    teil: { typ: zahl, loesung: "0.03^2+0.03^2+0.01^2+0.01^2" }
    erklaerung: 'Abweichungen $+0{,}03$; $-0{,}03$; $+0{,}01$; $-0{,}01$. Quadrate $0{,}0009 + 0{,}0009 + 0{,}0001 + 0{,}0001 = 0{,}0020\,\text{s}^2$.'
  - text: Teile durch $n - 1$ und ziehe die Wurzel. Wie groß ist $s$ in s?
    teil: { typ: zahl, loesung: "sqrt(0.002/3)", toleranz: 0.0005 }
    erklaerung: '$s = \sqrt{0{,}0020/3}\,\text{s} = 0{,}026\,\text{s}$.'
  - text: Teile $s$ durch $\sqrt n$.
    teil: { typ: zahl, loesung: "sqrt(0.002/3)/2", toleranz: 0.0005 }
    erklaerung: '$\Delta\bar T = 0{,}026\,\text{s}/2 = 0{,}013\,\text{s}$. Ergebnis $T = (2{,}01 \pm 0{,}01)\,\text{s}$.'
loesung: |
  **Mittelwert:** $\bar T = \dfrac{2{,}04 + 1{,}98 + 2{,}02 + 2{,}00}{4}\,\text{s} = \dfrac{8{,}04}{4}\,\text{s} = 2{,}01\,\text{s}$.
  ---
  **Standardabweichung:** Abweichungsquadrate $0{,}0009 + 0{,}0009 + 0{,}0001 + 0{,}0001 = 0{,}0020\,\text{s}^2$. $s = \sqrt{0{,}0020\,\text{s}^2/3} = 0{,}026\,\text{s}$.
  ---
  **Unsicherheit des Mittelwerts:** $\Delta\bar T = \dfrac{0{,}026\,\text{s}}{\sqrt4} = 0{,}013\,\text{s}$.
  ---
  **Ergebnis:** $T = (2{,}01 \pm 0{,}01)\,\text{s}$, die Unsicherheit auf eine Stelle gerundet.
```

```aufgabe
id: p1-messreihe-auswerten
titel: Eine Pendelmessung vollständig auswerten
niveau: 3
lernziel: 6
kompetenz: anwenden
angabe: |
  Sechs Messungen der Schwingungsdauer eines Pendels ergeben (in s): $1{,}42$; $1{,}45$; $1{,}39$; $1{,}43$; $1{,}41$; $1{,}44$.

  a) Berechne den Mittelwert in s (drei Nachkommastellen).

  b) Berechne die Standardabweichung in s (drei signifikante Stellen).

  c) Berechne die Unsicherheit des Mittelwerts in s (zwei signifikante Stellen) und gib das Ergebnis vollständig an.
teile:
  - typ: zahl
    label: a) Mittelwert
    loesung: "mean([1.42, 1.45, 1.39, 1.43, 1.41, 1.44])"
    einheit: "s"
    anzeige: '1{,}423'
  - typ: zahl
    label: b) Standardabweichung
    loesung: "std([1.42, 1.45, 1.39, 1.43, 1.41, 1.44])"
    einheit: "s"
    anzeige: '0{,}0216'
  - typ: zahl
    label: c) Unsicherheit des Mittelwerts
    loesung: "std([1.42, 1.45, 1.39, 1.43, 1.41, 1.44])/sqrt(6)"
    einheit: "s"
    anzeige: '0{,}0088'
hinweise:
  - Arbeite in Schritten wie im Beispiel zur Fallzeit, mit einer Tabelle für die Abweichungen und ihre Quadrate.
  - Teile die Quadratsumme durch $5$, ziehe die Wurzel und teile danach durch $\sqrt6$.
loesung: |
  **a)** Summe $8{,}54\,\text{s}$, also $\bar T = 8{,}54\,\text{s}/6 = 1{,}4233\,\text{s}$.
  ---
  **b)** Abweichungen (in s): $-0{,}0033$; $+0{,}0267$; $-0{,}0333$; $+0{,}0067$; $-0{,}0133$; $+0{,}0167$. Quadratsumme $0{,}002\,333\,\text{s}^2$. $s = \sqrt{0{,}002\,333\,\text{s}^2/5} = 0{,}0216\,\text{s}$.
  ---
  **c)** $\Delta\bar T = \dfrac{0{,}0216\,\text{s}}{\sqrt6} = \dfrac{0{,}0216\,\text{s}}{2{,}449} = 0{,}0088\,\text{s} \approx 0{,}009\,\text{s}$.
  ---
  **Ergebnis:** $T = (1{,}423 \pm 0{,}009)\,\text{s}$. Probe: Vier der sechs Werte liegen im Band $\bar T \pm s$, also zwischen $1{,}402$ und $1{,}445\,\text{s}$. Nur $1{,}39$ und $1{,}45$ liegen außerhalb. Das sind zwei Drittel, wie erwartet.
```

```reflexion
frage: Warum wird der Mittelwert mit mehr Messungen genauer, die Standardabweichung aber nicht kleiner?
antwort: |
  Die Standardabweichung beschreibt, wie stark eine **einzelne** Messung schwankt. Das hängt vom Gerät und vom
  Messenden ab, nicht davon, wie oft man misst. Beim Mittelwert dagegen gleichen sich zufällige Abweichungen nach
  oben und unten teilweise aus. Je mehr Werte man mittelt, desto vollständiger ist dieser Ausgleich. Die
  Unsicherheit des Mittelwerts sinkt deshalb mit $\sqrt n$.
```

## Fehlerfortpflanzung

```aufgabe
id: p1-9-check
art: check
titel: "Vorwissen: relative Unsicherheit"
niveau: 1
angabe: |
  Eine Zeit ist $t = (12{,}5 \pm 0{,}1)\,\text{s}$. Wie groß ist die relative Unsicherheit in Prozent?
teile:
  - typ: zahl
    loesung: "0.1/12.5*100"
    einheit: "%"
    anzeige: '0{,}8'
    fehler:
      - wert: "0.1/12.5"
        meldung: Das ist die relative Unsicherheit als Dezimalzahl. In Prozent mit $100$ multiplizieren.
      - wert: "0.1"
        meldung: Das ist die absolute Unsicherheit in Sekunden. Relativ heißt, durch den Messwert zu teilen.
hinweise:
  - Relative Unsicherheit = absolute Unsicherheit durch Messwert.
loesung: |
  $\dfrac{\Delta t}{t} = \dfrac{0{,}1\,\text{s}}{12{,}5\,\text{s}} = 0{,}008$.
  ---
  In Prozent: $0{,}8\,\%$. Wiederholen: [1.7 Messunsicherheit und signifikante Stellen](/lernen/physik1/groessen-einheiten-messen/messunsicherheit-und-signifikante-stellen) und [1.6 Prozentrechnung](/lernen/mathe3/zahlen/prozentrechnung).
```

Meist misst man eine Größe nicht direkt, sondern berechnet sie aus anderen. Die Geschwindigkeit etwa
berechnet man aus Weg und Zeit, $v = s/t$. Sind Weg und Zeit unsicher, ist es auch die Geschwindigkeit. Man
sagt: Die Unsicherheit **pflanzt sich fort**. Dieser Abschnitt zeigt, wie groß die Unsicherheit des
Ergebnisses höchstens ist. Diesen ungünstigsten Fall nennt man den **Größtfehler**.

:::satz[Regeln für den Größtfehler]
1. **Summe und Differenz:** Die **absoluten** Unsicherheiten addieren sich,
   $\Delta(x + y) = \Delta(x - y) = \Delta x + \Delta y$.
2. **Produkt und Quotient:** Die **relativen** Unsicherheiten addieren sich,
   $\dfrac{\Delta(x\cdot y)}{x\cdot y} = \dfrac{\Delta(x/y)}{x/y} = \dfrac{\Delta x}{x} + \dfrac{\Delta y}{y}$.
3. **Potenz:** Bei $x^n$ wird die relative Unsicherheit mit $|n|$ multipliziert,
   $\dfrac{\Delta(x^n)}{x^n} = |n|\cdot\dfrac{\Delta x}{x}$. Das gilt auch für Wurzeln mit $n = \tfrac12$.
4. **Exakte Zahlen** wie $\tfrac12$, $\pi$ oder $4\pi^2$ haben keine Unsicherheit und tragen nichts bei.
:::

Dabei ist $\Delta x$ die absolute Unsicherheit von $x$ und $\dfrac{\Delta x}{x}$ ihre relative Unsicherheit.
Auch bei einer Differenz werden die Unsicherheiten **addiert**, nicht subtrahiert. Der ungünstigste Fall
ist, dass die eine Größe zu groß und die andere zu klein gemessen wurde.

**Warum addieren sich bei Produkten die relativen Unsicherheiten?** Ein Zahlenbeispiel zeigt es. Ist $x$ um
$1\,\%$ zu groß und $y$ um $2\,\%$ zu groß, dann ist das Produkt
$1{,}01\cdot 1{,}02 = 1{,}0302$-mal so groß, also um $3{,}02\,\% \approx 3\,\%$ zu groß. Den kleinen Rest
$0{,}01\cdot 0{,}02 = 0{,}0002$ vernachlässigt man. Für die Potenz $x^2 = x\cdot x$ ergibt dieselbe Regel
$1\,\% + 1\,\% = 2\,\%$. Das erklärt Regel 3.

:::beispiel[Unsicherheit einer Geschwindigkeit]
Eine Läuferin legt $s = (50{,}0 \pm 0{,}1)\,\text{m}$ in $t = (6{,}4 \pm 0{,}1)\,\text{s}$ zurück.

**Schritt 1, Wert:** $v = \dfrac{s}{t} = \dfrac{50{,}0\,\text{m}}{6{,}4\,\text{s}} = 7{,}81\,\text{m/s}$.

**Schritt 2, relative Unsicherheiten:** $\dfrac{0{,}1\,\text{m}}{50{,}0\,\text{m}} = 0{,}2\,\%$ und
$\dfrac{0{,}1\,\text{s}}{6{,}4\,\text{s}} = 1{,}6\,\%$.

**Schritt 3, addieren (Quotient):** $\dfrac{\Delta v}{v} = 0{,}2\,\% + 1{,}6\,\% = 1{,}8\,\%$.

**Schritt 4, absolut:** $\Delta v = 0{,}018\cdot 7{,}81\,\text{m/s} = 0{,}14\,\text{m/s}$.

**Antwort:** $v = (7{,}8 \pm 0{,}1)\,\text{m/s}$. Die Zeitmessung bestimmt fast die ganze Unsicherheit. Wer
genauer messen will, braucht eine bessere Uhr, kein besseres Maßband.
:::

:::achtung[Absolute Unsicherheiten beim Produkt addiert]
Ein Rechteck misst $l = (4{,}0 \pm 0{,}1)\,\text{m}$ und $b = (2{,}5 \pm 0{,}1)\,\text{m}$. Ein Schüler rechnet
$A = 10{,}0\,\text{m}^2$ und $\Delta A = 0{,}1\,\text{m} + 0{,}1\,\text{m} = 0{,}2\,\text{m}$.

**Der Fehler:** Schon die Einheit verrät es. $\Delta A$ müsste in $\text{m}^2$ sein. Bei einem Produkt
addiert man die **relativen** Unsicherheiten. **Richtig:** $2{,}5\,\% + 4{,}0\,\% = 6{,}5\,\%$, also
$\Delta A = 0{,}065\cdot 10{,}0\,\text{m}^2 = 0{,}65\,\text{m}^2$ und $A = (10{,}0 \pm 0{,}7)\,\text{m}^2$.
:::

```aufgabe
id: p1-fehler-summe
titel: Zwei Bretter hintereinander
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Zwei Bretter werden hintereinandergelegt. Sie messen $(1{,}20 \pm 0{,}01)\,\text{m}$ und $(0{,}85 \pm 0{,}01)\,\text{m}$. Gib die Gesamtlänge und ihre Unsicherheit in m an.
teile:
  - typ: zahl
    label: Gesamtlänge
    loesung: "1.20+0.85"
    einheit: "m"
    anzeige: '2{,}05'
    fehler:
      - wert: "1.20-0.85"
        meldung: Hintereinanderlegen heißt addieren, nicht subtrahieren.
  - typ: zahl
    label: Unsicherheit
    loesung: "0.01+0.01"
    einheit: "m"
    anzeige: '0{,}02'
    fehler:
      - wert: "0.01"
        meldung: Beide Längen sind unsicher. Im ungünstigsten Fall sind beide zu lang. Bei einer Summe addieren sich die absoluten Unsicherheiten.
hinweise:
  - Bei einer Summe addieren sich die absoluten Unsicherheiten.
loesung: |
  **Ansatz:** Summe, also addieren sich Werte und absolute Unsicherheiten.
  ---
  $L = 1{,}20\,\text{m} + 0{,}85\,\text{m} = 2{,}05\,\text{m}$ und $\Delta L = 0{,}01\,\text{m} + 0{,}01\,\text{m} = 0{,}02\,\text{m}$. Ergebnis: $L = (2{,}05 \pm 0{,}02)\,\text{m}$.
```

```aufgabe
id: p1-kugel-volumen-fehler
titel: Fehler bei einer Potenz
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Der Durchmesser einer Kugel wird mit einer relativen Unsicherheit von $1{,}5\,\%$ gemessen. Das Volumen ist $V = \dfrac{\pi}{6} d^3$. Mit welcher relativen Unsicherheit in Prozent ist das berechnete Volumen behaftet?
teile:
  - typ: zahl
    loesung: "3*1.5"
    einheit: "%"
    anzeige: '4{,}5'
    fehler:
      - wert: "1.5"
        meldung: Der Durchmesser steht hoch drei in der Formel. Die relative Unsicherheit wird mit dem Exponenten multipliziert.
      - wert: "1.5^3"
        meldung: Die relative Unsicherheit wird mit dem Exponenten **multipliziert**, nicht selbst potenziert.
hinweise:
  - Bei einer Potenz $d^3$ wird die relative Unsicherheit mit $3$ multipliziert.
loesung: |
  **Ansatz:** $V \propto d^3$. Nach der Potenzregel wird die relative Unsicherheit mit $3$ multipliziert. Der Faktor $\pi/6$ ist exakt.
  ---
  $\dfrac{\Delta V}{V} = 3\cdot\dfrac{\Delta d}{d} = 3\cdot 1{,}5\,\% = 4{,}5\,\%$. Ein kleiner Fehler im Durchmesser wird im Volumen verdreifacht.
```

:::beispiel[Das Volumen eines Würfels]
Ein Würfel hat die Kantenlänge $a = (3{,}00 \pm 0{,}02)\,\text{cm}$. Wie genau ist sein Volumen?

**Schritt 1, Wert:** $V = a^3 = (3{,}00\,\text{cm})^3 = 27{,}0\,\text{cm}^3$.

**Schritt 2, relative Unsicherheit der Kante:** $\dfrac{0{,}02\,\text{cm}}{3{,}00\,\text{cm}} = 0{,}67\,\%$.

**Schritt 3, Potenzregel:** $\dfrac{\Delta V}{V} = 3\cdot 0{,}67\,\% = 2{,}0\,\%$.

**Schritt 4, absolut:** $\Delta V = 0{,}020\cdot 27{,}0\,\text{cm}^3 = 0{,}54\,\text{cm}^3$.

**Antwort:** $V = (27{,}0 \pm 0{,}5)\,\text{cm}^3$.
:::

:::achtung[Bei der Differenz die Unsicherheiten abgezogen]
Ein Becher wiegt leer $(152{,}3 \pm 0{,}2)\,\text{g}$ und gefüllt $(163{,}1 \pm 0{,}2)\,\text{g}$. Eine Schülerin
rechnet für das Wasser $10{,}8\,\text{g}$ und $\Delta m = 0{,}2\,\text{g} - 0{,}2\,\text{g} = 0$.

**Der Fehler:** Eine Unsicherheit von null hieße, die Wassermasse sei exakt bekannt. Das ist unmöglich, wenn
beide Wägungen unsicher sind. Auch bei Differenzen addieren sich die absoluten Unsicherheiten.
**Richtig:** $\Delta m = 0{,}4\,\text{g}$, relativ $0{,}4/10{,}8 = 3{,}7\,\%$.
:::

```aufgabe
id: p1-differenz-fehler
titel: Gefährliche Differenz
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Ein Glas wiegt leer $m_1 = (210{,}5 \pm 0{,}5)\,\text{g}$, mit Saft $m_2 = (228{,}0 \pm 0{,}5)\,\text{g}$. Berechne die Saftmasse in g und ihre relative Unsicherheit in Prozent (eine Nachkommastelle).
teile:
  - typ: zahl
    label: Saftmasse
    loesung: "228.0-210.5"
    einheit: "g"
    anzeige: '17{,}5'
    fehler:
      - wert: "228.0+210.5"
        meldung: Gesucht ist der Unterschied der beiden Wägungen, also eine Differenz.
  - typ: zahl
    label: relative Unsicherheit
    loesung: "1.0/17.5*100"
    einheit: "%"
    toleranz: 0.1
    anzeige: '5{,}7'
    fehler:
      - wert: "0"
        meldung: Unsicherheiten heben sich bei einer Differenz nicht auf. Im ungünstigsten Fall ist das volle Glas zu schwer und das leere zu leicht gemessen.
      - wert: "0.5/17.5*100"
        meldung: Du hast nur eine Wägung berücksichtigt. Beide Unsicherheiten addieren sich, $\Delta m = 1{,}0\,\text{g}$.
hinweise:
  - Bei einer Differenz addieren sich die absoluten Unsicherheiten.
  - Teile die Summe der Unsicherheiten durch die Saftmasse.
loesung: |
  **Ansatz:** Die Saftmasse ist eine Differenz. Ihre absolute Unsicherheit ist die Summe der beiden Unsicherheiten.
  ---
  $m = 228{,}0\,\text{g} - 210{,}5\,\text{g} = 17{,}5\,\text{g}$ und $\Delta m = 0{,}5\,\text{g} + 0{,}5\,\text{g} = 1{,}0\,\text{g}$.
  ---
  **Relativ:** $\dfrac{1{,}0\,\text{g}}{17{,}5\,\text{g}} = 5{,}7\,\%$, obwohl jede Wägung auf etwa $0{,}2\,\%$ genau war.
  ---
  **Lehre:** Die Differenz zweier fast gleich großer Werte ist relativ sehr unsicher. Besser misst man eine größere Saftmenge.
```

```aufgabe
id: p1-fehler-geschwindigkeit
titel: Fehlerfortpflanzung beim Quotienten
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Eine Strecke $s = (100{,}0 \pm 0{,}2)\,\text{m}$ wird in $t = (12{,}5 \pm 0{,}1)\,\text{s}$ zurückgelegt. Berechne $v$ und die Größtunsicherheit $\Delta v$ in m/s.
teile:
  - typ: zahl
    label: v
    loesung: "100/12.5"
    einheit: "m/s"
    anzeige: '8{,}00'
    fehler:
      - wert: "12.5/100"
        meldung: Geschwindigkeit ist Weg **durch** Zeit, nicht umgekehrt.
  - typ: zahl
    label: Δv
    loesung: "8*(0.2/100+0.1/12.5)"
    einheit: "m/s"
    toleranz: 0.01
    anzeige: '0{,}08'
    fehler:
      - wert: "0.2+0.1"
        meldung: Meter und Sekunden kann man nicht addieren. Beim Quotienten addiert man die **relativen** Unsicherheiten.
      - wert: "8*(0.1/12.5)"
        meldung: Du hast die Unsicherheit des Weges vergessen. Beide relativen Unsicherheiten werden addiert.
hinweise:
  - Beim Quotienten addieren sich die relativen Unsicherheiten.
  - Multipliziere die gesamte relative Unsicherheit mit $v$.
loesung: |
  **Wert:** $v = \dfrac{100{,}0\,\text{m}}{12{,}5\,\text{s}} = 8{,}00\,\text{m/s}$.
  ---
  **Relativ:** $\dfrac{\Delta v}{v} = \dfrac{0{,}2}{100} + \dfrac{0{,}1}{12{,}5} = 0{,}002 + 0{,}008 = 0{,}010$.
  ---
  **Absolut:** $\Delta v = 0{,}010\cdot 8{,}00\,\text{m/s} = 0{,}08\,\text{m/s}$, also $v = (8{,}00 \pm 0{,}08)\,\text{m/s}$. Die Zeitmessung trägt vier Fünftel der Unsicherheit bei.
```

```aufgabe
id: p1-fehler-flaeche
titel: Unsicherheit einer Fläche
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Ein Blatt misst $l = (12{,}0 \pm 0{,}2)\,\text{cm}$ und $b = (8{,}0 \pm 0{,}2)\,\text{cm}$. Berechne die Fläche und ihre absolute Unsicherheit in $\text{cm}^2$.
teile:
  - typ: zahl
    label: Fläche
    loesung: "12*8"
    einheit: "cm²"
    anzeige: '96'
    fehler:
      - wert: "2*(12+8)"
        meldung: Das ist der Umfang. Die Fläche eines Rechtecks ist Länge mal Breite.
  - typ: zahl
    label: Unsicherheit der Fläche
    loesung: "96*(0.2/12+0.2/8)"
    einheit: "cm²"
    toleranz: 0.05
    anzeige: '4{,}0'
    fehler:
      - wert: "0.4"
        meldung: Du hast die absoluten Unsicherheiten addiert. Das Ergebnis hätte die Einheit cm, nicht $\text{cm}^2$. Beim Produkt addiert man relative Unsicherheiten.
hinweise:
  - Die Fläche ist ein Produkt. Addiere die relativen Unsicherheiten.
  - Multipliziere die relative Unsicherheit der Fläche mit der Fläche.
loesung: |
  **Wert:** $A = 12{,}0\,\text{cm}\cdot 8{,}0\,\text{cm} = 96\,\text{cm}^2$.
  ---
  **Relativ:** $\dfrac{0{,}2}{12{,}0} + \dfrac{0{,}2}{8{,}0} = 1{,}67\,\% + 2{,}50\,\% = 4{,}17\,\%$.
  ---
  **Absolut:** $\Delta A = 0{,}0417\cdot 96\,\text{cm}^2 = 4{,}0\,\text{cm}^2$, also $A = (96 \pm 4)\,\text{cm}^2$.
```

```aufgabe
id: p1-fehler-dichte-quader
titel: Die Dichte eines Quaders
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Ein Quader hat die Masse $m = (240 \pm 1)\,\text{g}$ und die Kanten $a = 5{,}0\,\text{cm}$, $b = 4{,}0\,\text{cm}$, $c = 3{,}0\,\text{cm}$, jede mit $\pm 0{,}05\,\text{cm}$. Berechne die Dichte in $\text{g/cm}^3$ und ihre absolute Unsicherheit in $\text{g/cm}^3$.
teile:
  - typ: zahl
    label: Dichte
    loesung: "240/(5*4*3)"
    einheit: "g/cm³"
    anzeige: '4{,}0'
    fehler:
      - wert: "5*4*3/240"
        meldung: Dichte ist Masse **durch** Volumen, nicht umgekehrt.
  - typ: zahl
    label: Unsicherheit der Dichte
    loesung: "4*(1/240+0.05/5+0.05/4+0.05/3)"
    einheit: "g/cm³"
    toleranz: 0.01
    anzeige: '0{,}17'
    fehler:
      - wert: "4*(1/240)"
        meldung: Du hast nur die Masse berücksichtigt. Auch die drei Kantenlängen sind unsicher und tragen sogar mehr bei.
      - wert: "4*(1/240+0.05/5)"
        meldung: Das Volumen hat **drei** unsichere Kanten. Alle drei relativen Unsicherheiten kommen dazu.
hinweise:
  - '$\rho = \dfrac{m}{a\cdot b\cdot c}$ ist ein Quotient aus Produkten. Alle relativen Unsicherheiten addieren sich.'
  - Berechne vier relative Unsicherheiten, addiere sie und multipliziere mit $\rho$.
gefuehrt:
  - text: Berechne das Volumen in $\text{cm}^3$.
    teil: { typ: zahl, loesung: "5*4*3" }
    erklaerung: '$V = 5{,}0\cdot 4{,}0\cdot 3{,}0\,\text{cm}^3 = 60\,\text{cm}^3$.'
  - text: Berechne die Dichte in $\text{g/cm}^3$.
    teil: { typ: zahl, loesung: "240/60" }
    erklaerung: '$\rho = 240\,\text{g} / 60\,\text{cm}^3 = 4{,}0\,\text{g/cm}^3$.'
  - text: Addiere die relativen Unsicherheiten von $m$, $a$, $b$ und $c$. Gib das Ergebnis als Dezimalzahl ein.
    teil: { typ: zahl, loesung: "1/240+0.05/5+0.05/4+0.05/3", toleranz: 0.0005 }
    erklaerung: '$0{,}0042 + 0{,}0100 + 0{,}0125 + 0{,}0167 = 0{,}0433$, also $4{,}3\,\%$.'
  - text: Berechne die absolute Unsicherheit der Dichte.
    teil: { typ: zahl, loesung: "4*(1/240+0.05/5+0.05/4+0.05/3)", toleranz: 0.01 }
    erklaerung: '$\Delta\rho = 0{,}0433\cdot 4{,}0\,\text{g/cm}^3 = 0{,}17\,\text{g/cm}^3$. Die kürzeste Kante ist relativ am ungenauesten.'
loesung: |
  **Ansatz:** $\rho = \dfrac{m}{a\,b\,c}$ besteht nur aus Produkten und Quotienten. Also addieren sich alle vier relativen Unsicherheiten.
  ---
  **Wert:** $V = 60\,\text{cm}^3$, $\rho = \dfrac{240\,\text{g}}{60\,\text{cm}^3} = 4{,}0\,\text{g/cm}^3$.
  ---
  **Relativ:** $\dfrac{1}{240} + \dfrac{0{,}05}{5{,}0} + \dfrac{0{,}05}{4{,}0} + \dfrac{0{,}05}{3{,}0} = 0{,}4\,\% + 1{,}0\,\% + 1{,}25\,\% + 1{,}67\,\% = 4{,}3\,\%$.
  ---
  **Absolut:** $\Delta\rho = 0{,}043\cdot 4{,}0\,\text{g/cm}^3 = 0{,}17\,\text{g/cm}^3$, also $\rho = (4{,}0 \pm 0{,}2)\,\text{g/cm}^3$. Die Masse ist am genauesten gemessen, die kurze Kante $c$ am ungenauesten.
```

### Vertiefung: Fehlerfortpflanzung mit der Ableitung

Die Regeln für den Größtfehler sind Sonderfälle einer allgemeinen Idee aus der Mathematik. Hängt eine
Größe $f$ von einer Messgröße $x$ ab, dann gilt für kleine Unsicherheiten
$$\Delta f \approx |f'(x)|\cdot\Delta x.$$
Dabei ist $f'(x)$ die **Ableitung**, also die Steigung der Funktion an der Messstelle. Die Idee: Für kleine
Änderungen verhält sich jede glatte Funktion fast wie ihre Tangente. Das heißt **Linearisierung** und steht
ausführlich in [9.10 Die Tangente als Näherung: Linearisierung und Fehlerfortpflanzung](/lernen/mathe3/differentialrechnung/die-tangente-als-naeherung-linearisierung-und-fehlerfortpflanzung).

:::beispiel[Fallhöhe aus der Fallzeit]
Aus der gemessenen Fallzeit $t = (0{,}451 \pm 0{,}004)\,\text{s}$ soll die Fallhöhe $h = \tfrac12 g t^2$ folgen,
mit $g = 9{,}81\,\text{m/s}^2$.

**Schritt 1, Wert:** $h = \tfrac12\cdot 9{,}81\,\text{m/s}^2\cdot(0{,}451\,\text{s})^2 = 0{,}998\,\text{m}$.

**Schritt 2, Ableitung:** $h'(t) = g\,t$. An der Messstelle: $9{,}81\,\text{m/s}^2\cdot 0{,}451\,\text{s} = 4{,}42\,\text{m/s}$.

**Schritt 3, Unsicherheit:** $\Delta h \approx 4{,}42\,\text{m/s}\cdot 0{,}004\,\text{s} = 0{,}018\,\text{m}$.

**Probe mit der Potenzregel:** $\dfrac{\Delta h}{h} = 2\cdot\dfrac{0{,}004}{0{,}451} = 1{,}8\,\%$, und
$0{,}018\cdot 0{,}998\,\text{m} = 0{,}018\,\text{m}$. Beide Wege liefern dasselbe.

**Antwort:** $h = (1{,}00 \pm 0{,}02)\,\text{m}$.
:::

```aufgabe
id: p1-fehler-linearisierung
titel: Fehlerfortpflanzung über die Ableitung
niveau: 3
lernziel: 6
kompetenz: anwenden
angabe: |
  Ein Stein fällt in einen Brunnen. Gemessen wird die Fallzeit $t = (0{,}64 \pm 0{,}01)\,\text{s}$. Die Tiefe ist $h = \tfrac12 g t^2$ mit $g = 9{,}81\,\text{m/s}^2$ (Schalllaufzeit vernachlässigt).

  a) Berechne $h$ in m (drei signifikante Stellen).

  b) Berechne $\Delta h$ in m mit $\Delta h \approx |h'(t)|\cdot\Delta t$.
teile:
  - typ: zahl
    label: a) Tiefe
    loesung: "0.5*9.81*0.64^2"
    einheit: "m"
    anzeige: '2{,}01'
  - typ: zahl
    label: b) Unsicherheit
    loesung: "9.81*0.64*0.01"
    einheit: "m"
    toleranz: 0.002
    anzeige: '0{,}063'
    fehler:
      - wert: "0.5*9.81*0.01^2"
        meldung: Du hast die Unsicherheit in die Formel eingesetzt. Die Unsicherheit ist die Steigung $h'(t) = g t$ mal $\Delta t$.
hinweise:
  - Leite $h(t) = \tfrac12 g t^2$ nach $t$ ab. Die Ableitung von $t^2$ ist $2t$.
  - Setze $t = 0{,}64\,\text{s}$ in die Ableitung ein und multipliziere mit $\Delta t$.
loesung: |
  **a)** $h = \tfrac12\cdot 9{,}81\,\text{m/s}^2\cdot(0{,}64\,\text{s})^2 = \tfrac12\cdot 9{,}81\cdot 0{,}4096\,\text{m} = 2{,}01\,\text{m}$.
  ---
  **Ableitung:** $h'(t) = \tfrac12 g\cdot 2t = g t = 9{,}81\,\text{m/s}^2\cdot 0{,}64\,\text{s} = 6{,}28\,\text{m/s}$.
  ---
  **b)** $\Delta h \approx 6{,}28\,\text{m/s}\cdot 0{,}01\,\text{s} = 0{,}063\,\text{m}$, also $h = (2{,}01 \pm 0{,}06)\,\text{m}$.
  ---
  **Probe:** Potenzregel $\dfrac{\Delta h}{h} = 2\cdot\dfrac{0{,}01}{0{,}64} = 3{,}1\,\%$, und $0{,}031\cdot 2{,}01\,\text{m} = 0{,}063\,\text{m}$.
```

```aufgabe
id: p1-fehler-pendel-g
titel: Welche Messung bestimmt die Unsicherheit von g?
niveau: 3
lernziel: 6
kompetenz: begruenden
angabe: |
  Aus einem Fadenpendel bestimmt man $g = \dfrac{4\pi^2 l}{T^2}$. Gemessen wurden $l = (0{,}800 \pm 0{,}002)\,\text{m}$ und $T = (1{,}794 \pm 0{,}005)\,\text{s}$.

  a) Berechne $g$ in $\text{m/s}^2$ (drei Nachkommastellen).

  b) Berechne die relative Unsicherheit von $g$ in Prozent.

  c) Welche Messung sollte man verbessern? Begründe.
teile:
  - typ: zahl
    label: a) g
    loesung: "4*pi^2*0.8/1.794^2"
    einheit: "m/s²"
    anzeige: '9{,}813'
  - typ: zahl
    label: b) relative Unsicherheit
    loesung: "(0.002/0.8+2*0.005/1.794)*100"
    einheit: "%"
    toleranz: 0.02
    anzeige: '0{,}81'
  - typ: text
    label: c) Begründung
    muster: |
      Die Länge trägt 0,25 % bei, die Schwingungsdauer wegen des Quadrats 2 · 0,28 % = 0,56 %. Die Zeitmessung
      dominiert, also sollte man T genauer messen, etwa über mehr Schwingungen oder mit einer Lichtschranke.
hinweise:
  - '$4\pi^2$ ist exakt. $l$ steht hoch $1$, $T$ hoch $-2$.'
  - Bei $T^{-2}$ zählt die relative Unsicherheit von $T$ doppelt.
loesung: |
  **a)** $g = \dfrac{4\pi^2\cdot 0{,}800\,\text{m}}{(1{,}794\,\text{s})^2} = \dfrac{31{,}58\,\text{m}}{3{,}218\,\text{s}^2} = 9{,}813\,\text{m/s}^2$.
  ---
  **b)** Länge: $\dfrac{0{,}002}{0{,}800} = 0{,}25\,\%$. Zeit: $2\cdot\dfrac{0{,}005}{1{,}794} = 2\cdot 0{,}28\,\% = 0{,}56\,\%$. Zusammen $0{,}81\,\%$.
  ---
  **Absolut:** $\Delta g = 0{,}0081\cdot 9{,}813\,\text{m/s}^2 = 0{,}08\,\text{m/s}^2$, also $g = (9{,}81 \pm 0{,}08)\,\text{m/s}^2$.
  ---
  **c)** Die Zeitmessung trägt mehr als doppelt so viel bei wie die Länge, weil $T$ im Quadrat steht. Man misst $T$ über mehr Schwingungen oder mit einer Lichtschranke.
```

```reflexion
frage: Warum zählt die Unsicherheit der Schwingungsdauer bei $g = 4\pi^2 l/T^2$ doppelt, die der Länge aber nur einfach?
antwort: |
  $T^2$ ist $T\cdot T$. Ist $T$ um $1\,\%$ zu groß, sind beide Faktoren um $1\,\%$ zu groß, und das Produkt ist um
  etwa $2\,\%$ zu groß. Dass $T^2$ im Nenner steht, ändert nur die Richtung der Abweichung, nicht ihre Größe. Die
  Länge steht nur einmal in der Formel, ihre relative Unsicherheit geht deshalb einfach ein.
```

## Diagramme, Ausgleichsgerade und Linearisierung

```aufgabe
id: p1-10-check
art: check
titel: "Vorwissen: Steigung einer Geraden"
niveau: 1
angabe: |
  Eine Gerade geht durch die Punkte $P(1 \mid 3)$ und $Q(5 \mid 11)$. Wie groß ist ihre Steigung?
teile:
  - typ: zahl
    loesung: "(11-3)/(5-1)"
    fehler:
      - wert: "(5-1)/(11-3)"
        meldung: Du hast den Kehrwert berechnet. Die Steigung ist Höhenunterschied durch waagrechten Unterschied, also $\Delta y/\Delta x$.
      - wert: "11/5"
        meldung: Du hast nur einen Punkt verwendet. Die Steigung braucht die **Differenzen** zwischen zwei Punkten.
hinweise:
  - 'Steigung $k = \dfrac{y_2 - y_1}{x_2 - x_1}$.'
loesung: |
  $k = \dfrac{11 - 3}{5 - 1} = \dfrac{8}{4} = 2$.
  ---
  Probe: Von $x = 1$ bis $x = 5$ steigt die Gerade um $4\cdot 2 = 8$, von $3$ auf $11$. Wiederholen: [4.3 Lineare Funktionen](/lernen/mathe3/funktionen/lineare-funktionen).
```

Eine Tabelle mit Messwerten zeigt Zahlen. Ein **Diagramm** zeigt den Zusammenhang auf einen Blick: Steigt
eine Größe mit der anderen? Gleichmäßig oder immer schneller? Gibt es Ausreißer? Außerdem kann man aus
einem Diagramm Größen bestimmen, die man gar nicht direkt gemessen hat. Darum geht es in diesem Abschnitt.

### Messwerte als Diagramm

Für ein gutes Diagramm gelten einfache Regeln:

- Die **unabhängige** Größe, die du eingestellt hast, kommt auf die waagrechte Achse.
- Die **abhängige**, gemessene Größe kommt auf die senkrechte Achse.
- Jede Achse bekommt Größe **und** Einheit, etwa „$x$ in cm“.
- Messwerte werden als **Punkte** eingetragen, nicht durch eine Zickzacklinie verbunden.

### Die Ausgleichsgerade

Liegen die Punkte ungefähr auf einer Geraden, zeichnet man eine **Ausgleichsgerade**. Das ist die Gerade,
die möglichst gut zu **allen** Punkten passt. Nach Augenmaß zeichnet man sie so, dass etwa gleich viele
Punkte darüber wie darunter liegen. Sie muss durch keinen einzigen Messpunkt gehen. Die Rechenmethode
dafür heißt lineare Regression und steht in
[17.8 Lineare Regression: die Methode der kleinsten Quadrate](/lernen/mathe3/statistik/lineare-regression-die-methode-der-kleinsten-quadrate).

Die **Steigung** der Ausgleichsgeraden bestimmt man aus zwei weit auseinanderliegenden Punkten **auf der
Geraden**, nicht aus zwei Messpunkten. So fließen alle Messungen ein, nicht nur zwei.

Geht die Gerade durch den Ursprung, sind die beiden Größen **proportional**. Das heißt: Verdoppelt man die
eine, verdoppelt sich die andere. Eine Gerade, die nicht durch den Ursprung geht, beschreibt einen
**linearen**, aber nicht proportionalen Zusammenhang.

```plot
x: [0, 14]
y: [0, 3]
hoehe: 300
achsen: { x: "Dehnung x in cm", y: "Kraft F in N" }
graphen:
  - { f: "0.2*x", label: "Ausgleichsgerade", farbe: 0, von: 0, bis: 13.5 }
punkte:
  - { x: 2.4, y: 0.5, farbe: 1 }
  - { x: 5.1, y: 1.0, farbe: 1 }
  - { x: 7.4, y: 1.5, farbe: 1 }
  - { x: 10.2, y: 2.0, farbe: 1 }
  - { x: 12.4, y: 2.5, farbe: 1 }
  - { x: 12.5, y: 2.5, label: "Ablesepunkt (12,5 | 2,5)", farbe: 2 }
beschriftung: "Kraft gegen Dehnung einer Feder. Fünf Messpunkte liegen nahe an einer Ausgleichsgeraden durch den Ursprung. Auf der Geraden liest man den Punkt bei 12,5 cm und 2,5 N ab. Die Steigung ist 0,2 N pro cm."
```

:::beispiel[Die Federkonstante aus einem Diagramm]
An eine Feder werden Gewichte gehängt. Gemessen werden Kraft $F$ und Dehnung $x$:
$0{,}5\,\text{N}$ bei $2{,}4\,\text{cm}$, $1{,}0\,\text{N}$ bei $5{,}1\,\text{cm}$, $1{,}5\,\text{N}$ bei
$7{,}4\,\text{cm}$, $2{,}0\,\text{N}$ bei $10{,}2\,\text{cm}$ und $2{,}5\,\text{N}$ bei $12{,}4\,\text{cm}$.

**Schritt 1, Diagramm:** Die Punkte liegen gut auf einer Geraden durch den Ursprung. Kraft und Dehnung sind
also proportional, $F = D\cdot x$. Die Konstante $D$ heißt **Federkonstante**.

**Schritt 2, Ablesepunkt auf der Geraden:** Die Ausgleichsgerade geht durch $(0 \mid 0)$ und
$(12{,}5\,\text{cm} \mid 2{,}5\,\text{N})$.

**Schritt 3, Steigung:** $D = \dfrac{2{,}5\,\text{N} - 0}{12{,}5\,\text{cm} - 0} = 0{,}20\,\text{N/cm}$.

**Schritt 4, in SI umrechnen:** $1\,\text{cm} = 0{,}01\,\text{m}$, also
$D = \dfrac{0{,}20\,\text{N}}{0{,}01\,\text{m}} = 20\,\text{N/m}$.

**Antwort:** Die Federkonstante ist $20\,\text{N/m}$. Diese Feder dehnt sich pro Newton um $5\,\text{cm}$.
:::

:::achtung[Die Einheit der Achse vergessen]
Aus demselben Diagramm liest ein Schüler die Steigung $0{,}2$ ab und schreibt $D = 0{,}2\,\text{N/m}$.

**Der Fehler:** Die waagrechte Achse ist in **Zentimetern** beschriftet. Die Steigung ist $0{,}2\,\text{N/cm}$.
Sein Ergebnis ist hundertmal zu klein. **Richtig:** $0{,}2\,\text{N/cm} = 20\,\text{N/m}$. Lies bei jeder
Steigung die Einheiten beider Achsen mit ab.
:::

```aufgabe
id: p1-diagramm-steigung
titel: Dichte aus einem Diagramm
niveau: 1
lernziel: 7
kompetenz: anwenden
angabe: |
  Das Diagramm zeigt die Masse verschieden großer Aluminiumstücke gegen ihr Volumen, mit Ausgleichsgerade. Bestimme die Dichte aus der Steigung in $\text{g/cm}^3$.
plot:
  x: [0, 50]
  y: [0, 140]
  achsen: { x: "Volumen V in cm³", y: "Masse m in g" }
  graphen:
    - { f: "2.7*x", farbe: 0, von: 0, bis: 48 }
  punkte:
    - { x: 10, y: 28 }
    - { x: 20, y: 53 }
    - { x: 30, y: 82 }
    - { x: 40, y: 107 }
    - { x: 40, y: 108, label: "(40 | 108)", farbe: 2 }
teile:
  - typ: zahl
    loesung: "108/40"
    einheit: "g/cm³"
    anzeige: '2{,}7'
    fehler:
      - wert: "40/108"
        meldung: Du hast Volumen durch Masse gerechnet. Die Steigung ist senkrechter Unterschied durch waagrechten, hier also Masse durch Volumen.
hinweise:
  - Nimm den markierten Punkt auf der Geraden und den Ursprung.
loesung: |
  **Ansatz:** Die Gerade geht durch den Ursprung, also $m = \rho\cdot V$. Die Steigung ist die Dichte.
  ---
  $\rho = \dfrac{108\,\text{g} - 0}{40\,\text{cm}^3 - 0} = 2{,}7\,\text{g/cm}^3$. Das passt zum Tabellenwert von Aluminium.
```

```aufgabe
id: p1-proportional-erkennen
titel: Wann sind zwei Größen proportional?
niveau: 1
lernziel: 7
kompetenz: verstehen
angabe: |
  Welcher Graph zeigt, dass $y$ **proportional** zu $x$ ist?
teile:
  - typ: auswahl
    optionen:
      - "eine steigende Gerade, die die $y$-Achse bei $y = 3$ schneidet"
      - "eine Gerade durch den Ursprung"
      - "eine Kurve, die immer steiler wird"
      - "jede steigende Kurve, denn mit größerem $x$ wird $y$ größer"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Das ist ein linearer, aber kein proportionaler Zusammenhang. Verdoppelt man $x$, verdoppelt sich $y$ nicht, weil der Startwert $3$ fest dazukommt.
      - wert: 3
        meldung: „Je mehr, desto mehr“ reicht nicht. Proportional heißt genauer, dass sich $y$ **im selben Verhältnis** ändert wie $x$.
      - wert: 2
        meldung: Bei einer immer steiler werdenden Kurve wächst $y$ schneller als $x$, zum Beispiel wie $x^2$. Das ist nicht proportional.
hinweise:
  - Proportional heißt $y = k\cdot x$. Wo liegt dann der Punkt mit $x = 0$?
loesung: |
  **Kriterium:** Proportional heißt $y = k\cdot x$. Für $x = 0$ ist dann $y = 0$, und der Graph ist eine Gerade.
  ---
  Nur die Gerade durch den Ursprung erfüllt beides. Die Gerade mit Achsenabschnitt $3$ ist linear, aber nicht proportional.
```

### Linearisieren: krumme Zusammenhänge gerade machen

Viele Zusammenhänge sind keine Geraden. Beim Fadenpendel zum Beispiel gilt
$$T = 2\pi\sqrt{\frac{l}{g}}.$$
Dabei ist $T$ die Schwingungsdauer, $l$ die Fadenlänge und $g$ die Fallbeschleunigung. Trägt man $T$ gegen
$l$ auf, erhält man eine gekrümmte Kurve. Aus einer Kurve kann man $g$ schlecht ablesen.

Der Trick heißt **Linearisieren**: Man formt die Gleichung so um, dass eine Gerade entsteht. Quadrieren
beider Seiten ergibt
$$T^2 = \frac{4\pi^2}{g}\cdot l.$$
Das hat die Form $y = k\cdot x$ mit $y = T^2$, $x = l$ und der Steigung $k = \dfrac{4\pi^2}{g}$. Trägt man
also $T^2$ gegen $l$ auf, liegen die Punkte auf einer Geraden durch den Ursprung. Aus ihrer Steigung $k$
folgt die Fallbeschleunigung $g = \dfrac{4\pi^2}{k}$.

```plot
x: [0, 1.1]
y: [0, 4.5]
hoehe: 300
achsen: { x: "Fadenlänge l in m", y: "T in s (Kurve) und T² in s² (Gerade)" }
graphen:
  - { f: "2*pi*sqrt(x/9.81)", label: "T gegen l", farbe: 1, von: 0, bis: 1.05 }
  - { f: "4.04*x", label: "T² gegen l", farbe: 0, von: 0, bis: 1.05 }
punkte:
  - { x: 0.2, y: 0.81, farbe: 0 }
  - { x: 0.4, y: 1.613, farbe: 0 }
  - { x: 0.6, y: 2.403, farbe: 0 }
  - { x: 0.8, y: 3.24, farbe: 0 }
  - { x: 1.0, y: 4.04, farbe: 0 }
beschriftung: "Fadenpendel. Die orange Kurve zeigt die Schwingungsdauer T gegen die Länge l, sie ist gekrümmt. Die blauen Punkte zeigen T² gegen l, sie liegen auf einer Geraden durch den Ursprung mit der Steigung 4,04 s² pro m."
```

:::beispiel[Die Fallbeschleunigung aus einer Pendelmessung]
Gemessen werden für $l = 0{,}20$; $0{,}40$; $0{,}60$; $0{,}80$; $1{,}00\,\text{m}$ die Schwingungsdauern
$T = 0{,}90$; $1{,}27$; $1{,}55$; $1{,}80$; $2{,}01\,\text{s}$.

**Schritt 1, linearisieren:** Wir quadrieren jede Schwingungsdauer:
$T^2 = 0{,}81$; $1{,}61$; $2{,}40$; $3{,}24$; $4{,}04\,\text{s}^2$.

**Schritt 2, Diagramm:** $T^2$ gegen $l$ ergibt eine Gerade durch den Ursprung. Auf ihr liest man bei
$l = 1{,}00\,\text{m}$ den Wert $T^2 = 4{,}04\,\text{s}^2$ ab.

**Schritt 3, Steigung:** $k = \dfrac{4{,}04\,\text{s}^2}{1{,}00\,\text{m}} = 4{,}04\,\text{s}^2/\text{m}$.

**Schritt 4, Fallbeschleunigung:** $g = \dfrac{4\pi^2}{k} = \dfrac{39{,}48}{4{,}04\,\text{s}^2/\text{m}} = 9{,}77\,\text{m/s}^2$.

**Antwort:** $g \approx 9{,}8\,\text{m/s}^2$. Der Literaturwert $9{,}81\,\text{m/s}^2$ liegt nur $0{,}4\,\%$
daneben. Die Einheit stimmt: $1/(\text{s}^2/\text{m}) = \text{m/s}^2$.
:::

:::merke[Rezept: Linearisieren und auswerten]
1. Die Formel so umformen, dass sie die Form $y = k\cdot x$ oder $y = k\cdot x + d$ hat.
2. Aus den Messwerten die neuen Größen $x$ und $y$ berechnen, etwa $T^2$ oder $t^2$.
3. $y$ gegen $x$ auftragen und eine Ausgleichsgerade zeichnen.
4. Die Steigung aus zwei weit entfernten Punkten **auf der Geraden** bestimmen, mit Einheit.
5. Aus der Steigung die gesuchte Größe berechnen.
:::

:::achtung[Steigung aus einem einzigen Punkt]
Ein Wagen fährt mit $v = 2{,}0\,\text{m/s} + 1{,}5\,\text{m/s}^2\cdot t$. Im v-t-Diagramm liest jemand bei
$t = 4{,}0\,\text{s}$ den Wert $v = 8{,}0\,\text{m/s}$ ab. Er rechnet $a = \dfrac{8{,}0\,\text{m/s}}{4{,}0\,\text{s}} = 2{,}0\,\text{m/s}^2$.

**Der Fehler:** Die Gerade geht nicht durch den Ursprung, sie beginnt bei $2{,}0\,\text{m/s}$. Ein Quotient aus
**einem** Punkt ist nur bei Proportionalität die Steigung. **Richtig:** zwei Punkte der Geraden verwenden,
$a = \dfrac{8{,}0 - 2{,}0}{4{,}0 - 0}\,\text{m/s}^2 = 1{,}5\,\text{m/s}^2$.
:::

```aufgabe
id: p1-linearisieren-waehlen
titel: Welches Diagramm wird eine Gerade?
niveau: 2
lernziel: 7
kompetenz: verstehen
angabe: |
  Eine Kugel rollt aus der Ruhe eine Rinne hinab. Für ihren Weg gilt $s = \tfrac12 a t^2$. Du willst die Beschleunigung $a$ aus einer Ausgleichsgeraden bestimmen. Was trägst du gegen was auf?
teile:
  - typ: auswahl
    optionen:
      - "$s$ gegen $t$"
      - "$s$ gegen $t^2$"
      - "$\\sqrt s$ gegen $t^2$"
      - "$t$ gegen $s^2$"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: '$s$ gegen $t$ ergibt eine Parabel, weil $t$ im Quadrat steht. Aus einer gekrümmten Kurve liest man keine konstante Steigung ab.'
      - wert: 2
        meldung: '$\sqrt s$ ist proportional zu $t$, nicht zu $t^2$. Diese Auftragung wäre wieder gekrümmt.'
      - wert: 3
        meldung: 'Aus $s = \tfrac12 a t^2$ folgt $t \propto \sqrt s$. Gegen $s^2$ aufgetragen wäre das gekrümmt.'
hinweise:
  - Vergleiche $s = \tfrac12 a\cdot t^2$ mit $y = k\cdot x$. Was spielt die Rolle von $x$?
  - Welche Steigung hat dann die Gerade, und wie folgt daraus $a$?
loesung: |
  **Ansatz:** Wir suchen die Form $y = k\cdot x$. In $s = \tfrac12 a\cdot t^2$ ist $y = s$ und $x = t^2$.
  ---
  Also trägt man $s$ gegen $t^2$ auf. Man erhält eine Gerade durch den Ursprung mit der Steigung $k = \tfrac12 a$.
  ---
  **Auswertung:** $a = 2k$. Mit der Einheit $\text{m}/\text{s}^2$ der Steigung ist das tatsächlich eine Beschleunigung.
```

```aufgabe
id: p1-fallrinne-auswerten
titel: Beschleunigung aus einer linearisierten Messung
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Eine Kugel rollt aus der Ruhe eine schwach geneigte Rinne hinab. Gemessen werden: nach $1{,}0\,\text{s}$ ist sie $0{,}15\,\text{m}$ weit, nach $2{,}0\,\text{s}$ $0{,}61\,\text{m}$, nach $3{,}0\,\text{s}$ $1{,}34\,\text{m}$ und nach $4{,}0\,\text{s}$ $2{,}41\,\text{m}$. Die Ausgleichsgerade im $s$-$t^2$-Diagramm geht durch den Ursprung und durch $(16\,\text{s}^2 \mid 2{,}40\,\text{m})$. Bestimme die Steigung in $\text{m/s}^2$ und die Beschleunigung $a$ in $\text{m/s}^2$.
teile:
  - typ: zahl
    label: Steigung
    loesung: "2.40/16"
    einheit: "m/s²"
    anzeige: '0{,}15'
    fehler:
      - wert: "2.41/4"
        meldung: Du hast $s$ durch $t$ geteilt. Im linearisierten Diagramm steht auf der waagrechten Achse $t^2$, also $16\,\text{s}^2$.
  - typ: zahl
    label: Beschleunigung
    loesung: "2*2.40/16"
    einheit: "m/s²"
    anzeige: '0{,}30'
    fehler:
      - wert: "2.40/16"
        meldung: Das ist die Steigung $k = \tfrac12 a$. Die Beschleunigung ist doppelt so groß.
hinweise:
  - Berechne zuerst die Werte von $t^2$. Die Steigung ist $\Delta s/\Delta(t^2)$.
  - Wegen $s = \tfrac12 a\,t^2$ ist die Steigung $\tfrac12 a$.
gefuehrt:
  - text: Welche Werte hat $t^2$ für die vier Messungen? Gib den größten in $\text{s}^2$ ein.
    teil: { typ: zahl, loesung: "4^2" }
    erklaerung: '$t^2 = 1$; $4$; $9$; $16\,\text{s}^2$. Der größte ist $16\,\text{s}^2$.'
  - text: Berechne die Steigung der Ausgleichsgeraden aus Ursprung und $(16\,\text{s}^2 \mid 2{,}40\,\text{m})$.
    teil: { typ: zahl, loesung: "2.40/16" }
    erklaerung: '$k = 2{,}40\,\text{m} / 16\,\text{s}^2 = 0{,}15\,\text{m/s}^2$.'
  - text: Vergleiche $s = \tfrac12 a\,t^2$ mit $s = k\,t^2$. Berechne $a$.
    teil: { typ: zahl, loesung: "2*0.15" }
    erklaerung: 'Aus $k = \tfrac12 a$ folgt $a = 2k = 0{,}30\,\text{m/s}^2$.'
  - text: Prüfe einen Messwert mit dem Ergebnis.
    erklaerung: 'Bei $t = 3{,}0\,\text{s}$ sagt das Modell $s = 0{,}15\,\text{m/s}^2\cdot 9\,\text{s}^2 = 1{,}35\,\text{m}$ voraus. Gemessen sind $1{,}34\,\text{m}$, das passt gut.'
loesung: |
  **Linearisieren:** Wegen $s = \tfrac12 a\,t^2$ trägt man $s$ gegen $t^2$ auf. Die $t^2$-Werte sind $1$; $4$; $9$; $16\,\text{s}^2$.
  ---
  **Steigung:** $k = \dfrac{2{,}40\,\text{m} - 0}{16\,\text{s}^2 - 0} = 0{,}15\,\text{m/s}^2$.
  ---
  **Beschleunigung:** $k = \tfrac12 a$, also $a = 2k = 0{,}30\,\text{m/s}^2$.
  ---
  **Probe:** Bei $t = 2{,}0\,\text{s}$ sagt das Modell $0{,}15\cdot 4\,\text{m} = 0{,}60\,\text{m}$ voraus, gemessen sind $0{,}61\,\text{m}$.
```

```aufgabe
id: p1-diagramm-ablesen
titel: Ein v-t-Diagramm lesen
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Das Diagramm zeigt die Geschwindigkeit eines Wagens gegen die Zeit.

  a) Lies die Anfangsgeschwindigkeit bei $t = 0$ in m/s ab.

  b) Bestimme die Beschleunigung, also die Steigung der Geraden, in $\text{m/s}^2$.
plot:
  x: [0, 6]
  y: [0, 12]
  achsen: { x: "t in s", y: "v in m/s" }
  graphen:
    - { f: "3 + 1.5*x", farbe: 0, von: 0, bis: 6 }
  punkte:
    - { x: 0, y: 3, label: "(0 | 3)" }
    - { x: 4, y: 9, label: "(4 | 9)" }
teile:
  - typ: zahl
    label: a) Anfangsgeschwindigkeit
    loesung: "3"
    einheit: "m/s"
    fehler:
      - wert: "0"
        meldung: Die Gerade beginnt nicht im Ursprung. Lies den Wert auf der senkrechten Achse bei $t = 0$ ab.
  - typ: zahl
    label: b) Beschleunigung
    loesung: "(9-3)/4"
    einheit: "m/s²"
    anzeige: '1{,}5'
    fehler:
      - wert: "9/4"
        meldung: Du hast nur einen Punkt verwendet. Die Gerade geht nicht durch den Ursprung, also brauchst du die Differenz zweier Punkte.
hinweise:
  - Der Achsenabschnitt ist der Wert bei $t = 0$.
  - Steigung = Änderung von $v$ geteilt durch Änderung von $t$, zwischen den beiden markierten Punkten.
loesung: |
  **Ansatz:** Die Gerade hat die Form $v = v_0 + a\,t$. Der Achsenabschnitt ist $v_0$, die Steigung ist $a$.
  ---
  **a)** Bei $t = 0$ liest man $v_0 = 3\,\text{m/s}$ ab.
  ---
  **b)** $a = \dfrac{9\,\text{m/s} - 3\,\text{m/s}}{4\,\text{s} - 0\,\text{s}} = \dfrac{6\,\text{m/s}}{4\,\text{s}} = 1{,}5\,\text{m/s}^2$. Mehr zu solchen Diagrammen im [Kapitel Kinematik](/lernen/physik1/kinematik).
```

### Proportionalitätsschlüsse

Wer einen Zusammenhang als Formel kennt, kann Fragen wie „Was passiert, wenn man $x$ verdoppelt?“ ohne
Rechnen beantworten. Ist $y$ proportional zu $x^n$, kurz $y \propto x^n$, dann gilt: Wird $x$ mit dem Faktor
$c$ multipliziert, wird $y$ mit $c^n$ multipliziert. Das Zeichen $\propto$ liest man „proportional zu“.

- $y \propto x$: doppeltes $x$ ergibt doppeltes $y$.
- $y \propto x^2$: doppeltes $x$ ergibt vierfaches $y$.
- $y \propto \sqrt x$: vierfaches $x$ ergibt doppeltes $y$.
- $y \propto 1/x$: doppeltes $x$ ergibt halbes $y$.

```aufgabe
id: p1-proportional-schluss
titel: Doppelte Geschwindigkeit, wie viel Bremsweg?
niveau: 2
lernziel: 7
kompetenz: begruenden
angabe: |
  Bei gleicher Bremsverzögerung gilt für den Bremsweg $s = \dfrac{v^2}{2a}$. Ein Auto hat bei $50\,\text{km/h}$ einen Bremsweg von $14\,\text{m}$. Wie lang ist der Bremsweg bei $100\,\text{km/h}$ in m?
teile:
  - typ: zahl
    loesung: "14*(100/50)^2"
    einheit: "m"
    anzeige: '56'
    fehler:
      - wert: "14*2"
        meldung: Der Bremsweg ist nicht proportional zu $v$, sondern zu $v^2$. Doppelte Geschwindigkeit bedeutet vierfachen Bremsweg.
hinweise:
  - Der Bremsweg ist proportional zu $v^2$.
  - Um welchen Faktor ändert sich $v$, und welchen Faktor ergibt das für $v^2$?
loesung: |
  **Ansatz:** Bei gleichem $a$ ist $s \propto v^2$.
  ---
  Die Geschwindigkeit verdoppelt sich, Faktor $2$. Der Bremsweg ändert sich um $2^2 = 4$.
  ---
  $s = 4\cdot 14\,\text{m} = 56\,\text{m}$. Die Umrechnung in m/s ist hier gar nicht nötig, weil nur das Verhältnis zählt. Das ist der Grund, warum hohe Geschwindigkeiten so gefährlich sind.
```

```aufgabe
id: p1-pendel-g-auswerten
titel: Die Fallbeschleunigung aus einer Messreihe
niveau: 3
lernziel: 7
kompetenz: modellieren
angabe: |
  Ein Pendel wird bei vier Längen gemessen: $l = 0{,}30$; $0{,}50$; $0{,}70$; $0{,}90\,\text{m}$ mit $T = 1{,}10$; $1{,}42$; $1{,}68$; $1{,}90\,\text{s}$. Es gilt $T^2 = \dfrac{4\pi^2}{g}\cdot l$.

  a) Berechne $T^2$ für die kürzeste und die längste Länge in $\text{s}^2$.

  b) Die Punkte liegen so gut auf einer Geraden, dass die Ausgleichsgerade hier praktisch durch den ersten und den letzten Messpunkt geht. Normalerweise nimmt man zwei Punkte auf der Ausgleichsgeraden, hier darfst du ausnahmsweise diese beiden Messpunkte verwenden. Bestimme die Steigung $k$ in $\text{s}^2/\text{m}$.

  c) Berechne $g$ in $\text{m/s}^2$.
teile:
  - typ: zahl
    label: a) T² bei 0,30 m
    loesung: "1.10^2"
    einheit: "s²"
    anzeige: '1{,}21'
  - typ: zahl
    label: a) T² bei 0,90 m
    loesung: "1.90^2"
    einheit: "s²"
    anzeige: '3{,}61'
  - typ: zahl
    label: b) Steigung k
    loesung: "(1.90^2-1.10^2)/(0.90-0.30)"
    einheit: "s²/m"
    anzeige: '4{,}00'
  - typ: zahl
    label: c) g
    loesung: "4*pi^2/((1.90^2-1.10^2)/(0.90-0.30))"
    einheit: "m/s²"
    anzeige: '9{,}87'
hinweise:
  - Trage $T^2$ gegen $l$ auf, denn dann ist die Gleichung eine Gerade $y = k\,x$.
  - 'Die Steigung ist $k = 4\pi^2/g$, also $g = 4\pi^2/k$.'
loesung: |
  **Modell:** Wegen $T^2 = \dfrac{4\pi^2}{g}\,l$ liegen die Punkte $(l \mid T^2)$ auf einer Geraden mit der Steigung $k = 4\pi^2/g$.
  ---
  **a)** $T^2 = (1{,}10\,\text{s})^2 = 1{,}21\,\text{s}^2$ und $(1{,}90\,\text{s})^2 = 3{,}61\,\text{s}^2$.
  ---
  **b)** $k = \dfrac{3{,}61\,\text{s}^2 - 1{,}21\,\text{s}^2}{0{,}90\,\text{m} - 0{,}30\,\text{m}} = \dfrac{2{,}40\,\text{s}^2}{0{,}60\,\text{m}} = 4{,}00\,\text{s}^2/\text{m}$.
  ---
  **c)** $g = \dfrac{4\pi^2}{4{,}00\,\text{s}^2/\text{m}} = 9{,}87\,\text{m/s}^2$. Das liegt $0{,}6\,\%$ über dem Literaturwert, gut im Rahmen einer Schulmessung.
```

```reflexion
frage: Warum bestimmt man die Steigung aus zwei Punkten auf der Ausgleichsgeraden und nicht aus zwei Messpunkten?
antwort: |
  Jeder einzelne Messpunkt ist zufällig etwas zu hoch oder zu tief. Nimmt man zwei Messpunkte, übernimmt man genau
  deren zufällige Abweichungen. Die Ausgleichsgerade ist dagegen an alle Punkte angepasst. Ihre Abweichungen
  gleichen sich teilweise aus, wie beim Mittelwert. Darum ist eine Steigung von der Geraden genauer. Weit
  auseinanderliegende Punkte wählt man, damit kleine Ablesefehler die Steigung wenig verändern.
```

## Abschätzen und Größenordnungen

```aufgabe
id: p1-11-check
art: check
titel: "Vorwissen: der Zehnerlogarithmus"
niveau: 1
angabe: |
  Wie groß ist $\lg 10\,000$, also der Logarithmus zur Basis $10$?
teile:
  - typ: zahl
    loesung: "lg(10000)"
    fehler:
      - wert: "5"
        meldung: Du hast die Ziffern gezählt. $\lg 10\,000$ ist der Exponent in $10\,000 = 10^{n}$, also die Zahl der Nullen.
hinweise:
  - 'Gesucht ist $n$ mit $10^{n} = 10\,000$.'
loesung: |
  Der Zehnerlogarithmus beantwortet die Frage: „$10$ hoch wie viel ergibt die Zahl?“
  ---
  $10\,000 = 10^{4}$, also $\lg 10\,000 = 4$. Wiederholen: [1.11 Logarithmen](/lernen/mathe3/zahlen/logarithmen).
```

Physikerinnen und Physiker schätzen ständig ab. Ist ein Ergebnis plausibel? Lohnt sich eine genaue
Rechnung überhaupt? In der mündlichen Prüfung sind solche Fragen beliebt. Sie heißen **Fermi-Fragen**,
nach dem Physiker Enrico Fermi. Er schätzte 1945 die Sprengkraft der ersten Atombombe ab, indem er
beobachtete, wie weit die Druckwelle fallende Papierschnipsel trug.

### Die Größenordnung

:::definition[Größenordnung]
Die **Größenordnung** einer Zahl ist die Zehnerpotenz, der sie am nächsten liegt. Man findet sie, indem
man den Zehnerlogarithmus $\lg$ der Zahl auf eine ganze Zahl rundet.

**Beispiel:** $2{,}9\cdot 10^{9}$ hat $\lg(2{,}9\cdot 10^{9}) = 9{,}46$. Gerundet ergibt das $9$, die
Größenordnung ist $10^{9}$.

**Nicht einfach der Exponent:** $5\cdot 10^{9}$ hat $\lg(5\cdot 10^{9}) = 9{,}70$. Die Größenordnung ist
$10^{10}$, obwohl in der wissenschaftlichen Schreibweise $10^{9}$ steht. Eine Faustregel: Ab einem
Zahlenteil von $\sqrt{10} \approx 3{,}16$ rundet man zur nächsten Zehnerpotenz auf, denn
$\lg 3{,}16 \approx 0{,}5$. Bei $2{,}9\cdot 10^{9}$ rundet man also noch ab.
:::

Zwei Größen „unterscheiden sich um drei Größenordnungen“ heißt: Die eine ist etwa tausendmal so groß wie
die andere.

```aufgabe
id: p1-groessenordnung-bestimmen
titel: Die Größenordnung bestimmen
niveau: 1
lernziel: 8
kompetenz: rechnen
angabe: |
  Ein großes Fußballfeld hat eine Rasenfläche von etwa $7{,}1\cdot 10^{3}\,\text{m}^2$. Gib die Größenordnung der Fläche als Exponent $n$ von $10^{n}\,\text{m}^2$ an.
teile:
  - typ: zahl
    loesung: "round(lg(7.1e3))"
    fehler:
      - wert: "3"
        meldung: '$3$ ist der Exponent in der wissenschaftlichen Schreibweise. Der Zahlenteil $7{,}1$ ist aber näher an $10$ als an $1$, logarithmisch gerechnet. $\lg(7{,}1\cdot 10^3) = 3{,}85$.'
hinweise:
  - Berechne $\lg(7{,}1\cdot 10^{3})$ und runde auf eine ganze Zahl.
loesung: |
  **Ansatz:** Die Größenordnung ist der gerundete Zehnerlogarithmus.
  ---
  $\lg(7{,}1\cdot 10^{3}) = \lg 7{,}1 + 3 = 0{,}85 + 3 = 3{,}85$. Gerundet $4$, die Größenordnung ist $10^{4}\,\text{m}^2$.
```

:::achtung[Einen Umrechnungsfaktor vergessen]
Jemand schätzt das Wasser, das eine Person in einem Jahr trinkt: $2\,\text{L}$ pro Tag, also
„$2\,\text{L}\cdot 365 = 730\,\text{L}$ pro Jahr“. Das stimmt. Für ein Leben von $80$ Jahren schreibt er dann
$2\,\text{L}\cdot 80 = 160\,\text{L}$.

**Der Fehler:** Er hat Tage und Jahre verwechselt und den Faktor $365$ vergessen. Das Ergebnis ist um mehr als
zwei Größenordnungen zu klein. **Richtig:** $730\,\text{L}\cdot 80 \approx 6\cdot 10^{4}\,\text{L}$. Schreib die
Einheiten in jedem Schritt mit, etwa $\text{L/d}\cdot\text{d/a}\cdot\text{a}$.
:::

### So geht eine Fermi-Abschätzung

1. **Zerlegen:** Teile die Frage in Faktoren, die du ungefähr kennst oder schätzen kannst.
2. **Runde Zahlen:** Rechne mit einer signifikanten Stelle. Genauer weißt du die Faktoren ohnehin nicht.
3. **Ergebnis als Größenordnung:** Gib das Ergebnis als Zehnerpotenz an, höchstens mit einer Ziffer davor.
4. **Prüfen:** Passt das Ergebnis zu dem, was du sonst weißt?

Warum funktioniert das? Die Fehler der einzelnen Faktoren sind mal zu groß, mal zu klein. Sie heben sich
oft teilweise auf, ähnlich wie zufällige Abweichungen beim Mittelwert.

:::beispiel[Wie viel Wasser verbraucht Wien pro Tag?]
**Schritt 1, zerlegen:** Wasser pro Tag = Einwohner mal Verbrauch pro Person und Tag.

**Schritt 2, schätzen:** Wien hat etwa $2\cdot 10^{6}$ Einwohner. Eine Person verbraucht im Haushalt rund
$130\,\text{L}$ pro Tag.

**Schritt 3, rechnen:** $2\cdot 10^{6}\cdot 130\,\text{L} = 2{,}6\cdot 10^{8}\,\text{L} \approx 3\cdot 10^{8}\,\text{L}$.
Wegen $1000\,\text{L} = 1\,\text{m}^3$ sind das $3\cdot 10^{5}\,\text{m}^3$.

**Schritt 4, veranschaulichen:** Ein Würfel mit $3\cdot 10^{5}\,\text{m}^3$ hat die Kantenlänge
$\sqrt[3]{3\cdot 10^{5}}\,\text{m} \approx 67\,\text{m}$.

**Antwort:** Wien verbraucht jeden Tag einen Wasserwürfel von knapp $70\,\text{m}$ Kantenlänge.
:::

:::beispiel[Wie schwer ist die Luft in einem Klassenzimmer?]
**Schritt 1, zerlegen:** Masse = Dichte mal Volumen, $m = \rho\cdot V$.

**Schritt 2, schätzen:** Ein Klassenzimmer ist etwa $8\,\text{m}$ lang, $6\,\text{m}$ breit und $3\,\text{m}$
hoch. Luft hat die Dichte $\rho \approx 1{,}2\,\text{kg/m}^3$.

**Schritt 3, rechnen:** $V = 8\cdot 6\cdot 3\,\text{m}^3 = 144\,\text{m}^3$.
$m = 1{,}2\,\text{kg/m}^3\cdot 144\,\text{m}^3 \approx 170\,\text{kg}$.

**Antwort:** Etwa $2\cdot 10^{2}\,\text{kg}$, so viel wie zwei bis drei Erwachsene. Das überrascht die
meisten, weil man Luft für „nichts“ hält.
:::

:::achtung[Eine Schätzung mit zehn Stellen]
Ein Schüler schätzt die Herzschläge in einem Leben: $70\cdot 60\cdot 24\cdot 365\cdot 80 = 2\,943\,360\,000$. Er
schreibt dieses Ergebnis so hin.

**Der Fehler:** Der Puls schwankt zwischen etwa $60$ und $100$, die Lebensdauer um Jahrzehnte. Schon die
erste Ziffer ist unsicher. Zehn Stellen täuschen eine Genauigkeit vor, die es nicht gibt. **Richtig:**
„etwa $3\cdot 10^{9}$“, Größenordnung $10^{9}$.
:::

**Referenzwerte, die man kennen sollte:**

- Ein Mensch hat etwa $70\,\text{kg}$ und $1{,}75\,\text{m}$, geht mit $1{,}4\,\text{m/s}$ und leistet dauerhaft etwa $100\,\text{W}$.
- Der Erdradius beträgt $6370\,\text{km}$.
- Der Abstand Erde–Mond beträgt $3{,}84\cdot 10^{8}\,\text{m}$, der Abstand Erde–Sonne $1{,}5\cdot 10^{11}\,\text{m}$.
- Ein Atom ist etwa $10^{-10}\,\text{m}$ groß, ein Atomkern etwa $10^{-15}\,\text{m}$ bis $10^{-14}\,\text{m}$.
- Wasser hat die Dichte $1000\,\text{kg/m}^3$, Luft etwa $1{,}2\,\text{kg/m}^3$.
- Der Luftdruck beträgt etwa $10^{5}\,\text{Pa}$, die Schallgeschwindigkeit in Luft $340\,\text{m/s}$.

```aufgabe
id: p1-referenzwerte
titel: Wie viele Erdradien bis zum Mond?
niveau: 1
lernziel: 8
kompetenz: rechnen
angabe: |
  Wie viele Erdradien passen etwa in den Abstand Erde–Mond? Verwende $r_E = 6370\,\text{km}$ und $d = 3{,}84\cdot 10^{8}\,\text{m}$. Runde auf eine ganze Zahl.
teile:
  - typ: zahl
    loesung: "3.84e8/6.37e6"
    toleranz: 0.6
    anzeige: '60'
    fehler:
      - wert: "3.84e8/6370"
        meldung: Du hast Meter durch Kilometer geteilt. Rechne zuerst beide Längen in dieselbe Einheit um, $6370\,\text{km} = 6{,}37\cdot 10^{6}\,\text{m}$.
hinweise:
  - Bringe beide Längen auf dieselbe Einheit und teile.
loesung: |
  **Ansatz:** Anzahl = Abstand durch Erdradius, beide in Metern.
  ---
  $\dfrac{3{,}84\cdot 10^{8}\,\text{m}}{6{,}37\cdot 10^{6}\,\text{m}} = 60{,}3 \approx 60$. Der Mond ist also rund sechzig Erdradien entfernt. Die Meter kürzen sich, das Ergebnis ist eine reine Zahl.
```

```aufgabe
id: p1-fermi-herz
titel: Abschätzung Herzschläge
niveau: 2
lernziel: 8
kompetenz: modellieren
angabe: |
  Schätze ab, wie oft ein menschliches Herz in einem $80$-jährigen Leben schlägt. Nimm einen mittleren Puls von $70$ Schlägen pro Minute an. Gib die Größenordnung als Exponent $n$ von $10^{n}$ an.
teile:
  - typ: zahl
    loesung: "round(lg(70*60*24*365*80))"
    anzeige: '9'
    fehler:
      - wert: "round(lg(70*60*24*80))"
        meldung: Du hast die $365$ Tage pro Jahr vergessen. Prüfe die Einheiten in jedem Schritt, dann fällt so etwas auf.
      - wert: "round(lg(70*24*365*80))"
        meldung: Der Puls ist pro **Minute** angegeben. Eine Stunde hat $60$ Minuten, dieser Faktor fehlt.
hinweise:
  - Rechne zuerst die Schläge pro Tag, dann pro Jahr aus.
  - Runde den Logarithmus des Ergebnisses auf eine ganze Zahl.
loesung: |
  **Zerlegen:** Schläge = Puls mal Minuten pro Leben.
  ---
  Pro Jahr: $70\cdot 60\cdot 24\cdot 365 \approx 3{,}7\cdot 10^{7}$. Die Einheiten: Schläge/min mal min/h mal h/d mal d/a ergibt Schläge pro Jahr.
  ---
  In $80$ Jahren: $3{,}7\cdot 10^{7}\cdot 80 \approx 2{,}9\cdot 10^{9}$. $\lg(2{,}9\cdot 10^{9}) = 9{,}5$, gerundet $9$. Größenordnung $10^{9}$, rund drei Milliarden Schläge.
```

```aufgabe
id: p1-fermi-haare
titel: Abschätzung Haare auf dem Kopf
niveau: 2
lernziel: 8
kompetenz: modellieren
angabe: |
  Schätze die Zahl der Haare auf einem menschlichen Kopf. Annahmen: behaarte Fläche etwa $600\,\text{cm}^2$, etwa $2$ Haare pro $\text{mm}^2$. Gib das Ergebnis in Tausend an.
teile:
  - typ: zahl
    label: Haare in Tausend
    loesung: "600*100*2/1000"
    anzeige: '120'
    fehler:
      - wert: "600*10*2/1000"
        meldung: Du hast nur mit $10$ umgerechnet. $1\,\text{cm}^2 = (10\,\text{mm})^2 = 100\,\text{mm}^2$, die Vorsilbe wird mitquadriert.
      - wert: "600*2/1000"
        meldung: Du hast Quadratzentimeter und Quadratmillimeter nicht umgerechnet. Die Haardichte ist pro $\text{mm}^2$ angegeben.
hinweise:
  - '$1\,\text{cm}^2 = 100\,\text{mm}^2$.'
  - Anzahl = Fläche in $\text{mm}^2$ mal Haare pro $\text{mm}^2$.
loesung: |
  **Zerlegen:** Anzahl = Fläche mal Haardichte. Beide müssen sich auf dieselbe Flächeneinheit beziehen.
  ---
  Fläche: $600\,\text{cm}^2 = 600\cdot 100\,\text{mm}^2 = 6\cdot 10^{4}\,\text{mm}^2$.
  ---
  Anzahl: $6\cdot 10^{4}\,\text{mm}^2\cdot 2\,\text{mm}^{-2} = 1{,}2\cdot 10^{5}$, also etwa $120$ Tausend. Bücher nennen $100\,000$ bis $150\,000$, die Schätzung passt.
```

```aufgabe
id: p1-fermi-plausibel
titel: Wie viel wiegt die Luft im Wohnzimmer?
niveau: 1
lernziel: 8
kompetenz: verstehen
angabe: |
  Ein Wohnzimmer hat ein Volumen von etwa $50\,\text{m}^3$. Welche Masse hat die Luft darin ungefähr? Die Dichte von Luft ist etwa $1{,}2\,\text{kg/m}^3$.
teile:
  - typ: auswahl
    optionen:
      - "etwa 60 g"
      - "etwa 60 kg"
      - "etwa 6 t"
      - "praktisch null, Luft wiegt nichts"
    richtig: [1]
    fehler:
      - wert: 3
        meldung: Luft hat Masse. Ein Kubikmeter wiegt gut ein Kilogramm. Wir spüren es nur nicht, weil wir in ihr leben, so wie Fische das Wasser nicht spüren.
      - wert: 0
        meldung: Das wäre die Masse von etwa $0{,}05\,\text{m}^3$ Luft. Rechne mit dem ganzen Volumen von $50\,\text{m}^3$.
      - wert: 2
        meldung: Das wäre so dicht wie Wasser in einem Zehntel des Raums. Luft ist rund tausendmal weniger dicht als Wasser.
hinweise:
  - Masse = Dichte mal Volumen.
  - '$1{,}2\,\text{kg/m}^3\cdot 50\,\text{m}^3$.'
loesung: |
  **Ansatz:** $m = \rho\cdot V$.
  ---
  $m = 1{,}2\,\text{kg/m}^3\cdot 50\,\text{m}^3 = 60\,\text{kg}$. Die Kubikmeter kürzen sich.
  ---
  **Deutung:** So viel wie ein Erwachsener. Die Fehlvorstellung „Luft wiegt nichts“ entsteht, weil die Luft überall gleich verteilt ist.
```

```aufgabe
id: p1-skalierung
titel: Ein Modellauto im Maßstab 1:18
niveau: 2
lernziel: 8
kompetenz: begruenden
angabe: |
  Ein Auto mit $1300\,\text{kg}$ wird im Maßstab $1:18$ nachgebaut, also mit $\tfrac{1}{18}$ aller Längen. Nimm an, das Modell besteht aus ähnlichem Material mit gleicher Dichte. Welche Masse hätte es in g? Runde auf ganze Gramm.
teile:
  - typ: zahl
    loesung: "1300/18^3*1000"
    einheit: "g"
    toleranz: 1
    anzeige: '223'
    fehler:
      - wert: "1300/18*1000"
        meldung: Die Masse hängt vom Volumen ab. Das Volumen schrumpft mit der **dritten** Potenz des Längenfaktors, nicht mit dem Faktor selbst.
      - wert: "1300/18^2*1000"
        meldung: Mit dem Quadrat schrumpft die Fläche. Für das Volumen braucht man die dritte Potenz.
hinweise:
  - Masse = Dichte mal Volumen. Bei gleicher Dichte ist die Masse proportional zum Volumen.
  - Wenn alle Längen durch $18$ geteilt werden, wird das Volumen durch $18^3$ geteilt.
loesung: |
  **Ansatz (Proportionalität):** Bei gleicher Dichte gilt $m \propto V$, und das Volumen ist proportional zu Länge hoch drei.
  ---
  Längenfaktor $\tfrac{1}{18}$, also Volumen- und Massenfaktor $\tfrac{1}{18^3} = \tfrac{1}{5832}$.
  ---
  $m = \dfrac{1300\,\text{kg}}{5832} = 0{,}223\,\text{kg} = 223\,\text{g}$. Echte Modelle sind innen hohl und leichter, aber die Größenordnung stimmt.
```

```aufgabe
id: p1-fermi-dusche
titel: Wie viel Wasser verduscht man im Jahr?
niveau: 2
lernziel: 8
kompetenz: modellieren
angabe: |
  Eine Person duscht täglich $7$ Minuten. Die Brause liefert etwa $8$ Liter pro Minute. Schätze den Wasserverbrauch für das Duschen in einem Jahr in Litern ab und gib die Größenordnung als Exponent an.
teile:
  - typ: zahl
    label: Liter pro Jahr
    loesung: "8*7*365"
    einheit: "L"
    toleranz: 500
    anzeige: '2\cdot 10^{4}'
    fehler:
      - wert: "8*7"
        meldung: Das ist der Verbrauch an **einem** Tag. Ein Jahr hat $365$ Tage.
  - typ: zahl
    label: Größenordnung (Exponent)
    loesung: "round(lg(8*7*365))"
    fehler:
      - wert: "5"
        meldung: '$\lg(2\cdot 10^{4}) = 4{,}3$. Gerundet ergibt das $4$, nicht $5$.'
hinweise:
  - Liter pro Tag = Liter pro Minute mal Minuten pro Tag.
  - Multipliziere mit den Tagen eines Jahres und runde den Logarithmus.
gefuehrt:
  - text: Wie viele Liter verbraucht die Person an einem Tag?
    teil: { typ: zahl, loesung: "8*7" }
    erklaerung: '$8\,\text{L/min}\cdot 7\,\text{min} = 56\,\text{L}$. Die Minuten kürzen sich.'
  - text: Wie viele Liter sind das in $365$ Tagen?
    teil: { typ: zahl, loesung: "56*365" }
    erklaerung: '$56\,\text{L}\cdot 365 = 20\,440\,\text{L}$. Sinnvoll gerundet etwa $2\cdot 10^{4}\,\text{L}$.'
  - text: Welche Größenordnung hat das? Gib den Exponenten ein.
    teil: { typ: zahl, loesung: "4" }
    erklaerung: '$\lg 20\,440 = 4{,}3$, gerundet $4$. Größenordnung $10^{4}\,\text{L}$.'
  - text: Wie viele Kubikmeter sind das, und ist das plausibel?
    erklaerung: 'Etwa $20\,\text{m}^3$. Ein Gartenpool fasst ungefähr so viel. Für ein ganzes Jahr tägliches Duschen klingt das stimmig.'
loesung: |
  **Zerlegen:** Jahresverbrauch = Durchfluss mal Duschdauer mal Tage.
  ---
  Pro Tag: $8\,\text{L/min}\cdot 7\,\text{min} = 56\,\text{L}$.
  ---
  Pro Jahr: $56\,\text{L}\cdot 365 = 20\,440\,\text{L} \approx 2\cdot 10^{4}\,\text{L}$.
  ---
  **Größenordnung:** $\lg 20\,440 = 4{,}3$, also $10^{4}\,\text{L}$, das sind etwa $20\,\text{m}^3$.
```

```aufgabe
id: p1-fermi-atome
titel: Moleküle in einem Wassertropfen
niveau: 3
lernziel: 8
kompetenz: modellieren
angabe: |
  Ein Wassertropfen hat das Volumen $0{,}05\,\text{cm}^3$. Wie viele Wassermoleküle enthält er? Verwende die molare Masse $M = 18\,\text{g/mol}$, die Avogadro-Konstante $N_A = 6{,}02\cdot 10^{23}\,\text{mol}^{-1}$ und die Dichte $1\,\text{g/cm}^3$. Gib das Ergebnis in Vielfachen von $10^{21}$ an.
teile:
  - typ: zahl
    label: Anzahl in 10²¹
    loesung: "0.05/18*6.02e23/1e21"
    toleranz: 0.05
    anzeige: '1{,}67'
    fehler:
      - wert: "0.05*18*6.02e23/1e21"
        meldung: Du hast mit der molaren Masse multipliziert. Die Stoffmenge ist Masse **durch** molare Masse, $n = m/M$.
hinweise:
  - Rechne in drei Schritten, Masse, dann Stoffmenge, dann Teilchenzahl.
  - '$m = \rho V$, $n = m/M$ und $N = n\cdot N_A$.'
loesung: |
  **Masse:** $m = \rho V = 1\,\text{g/cm}^3\cdot 0{,}05\,\text{cm}^3 = 0{,}05\,\text{g}$.
  ---
  **Stoffmenge:** $n = \dfrac{m}{M} = \dfrac{0{,}05\,\text{g}}{18\,\text{g/mol}} = 2{,}8\cdot 10^{-3}\,\text{mol}$. Die Gramm kürzen sich.
  ---
  **Teilchenzahl:** $N = n\cdot N_A = 2{,}8\cdot 10^{-3}\,\text{mol}\cdot 6{,}02\cdot 10^{23}\,\text{mol}^{-1} = 1{,}7\cdot 10^{21}$.
  ---
  **Vergleich:** Das ist rund $200$ Milliarden Mal die Zahl der Menschen auf der Erde, in einem einzigen Tropfen.
```

```reflexion
frage: Bei einer Fermi-Abschätzung kennt man jeden Faktor nur ungefähr. Warum ist das Ergebnis trotzdem oft in der richtigen Größenordnung?
antwort: |
  Weil die Fehler der einzelnen Faktoren in verschiedene Richtungen gehen. Einen Faktor schätzt man vielleicht zu
  groß, einen anderen zu klein. In einem Produkt gleichen sich solche Abweichungen teilweise aus. Außerdem fragt
  man nur nach der Zehnerpotenz. Ein Faktor zwei Fehler ändert die Größenordnung meist nicht.
```

## Skalare und Vektoren

```aufgabe
id: p1-12-check
art: check
titel: "Vorwissen: Pythagoras"
niveau: 1
angabe: |
  Die beiden Katheten eines rechtwinkligen Dreiecks sind $5\,\text{cm}$ und $12\,\text{cm}$ lang. Wie lang ist die Hypotenuse in cm?
teile:
  - typ: zahl
    loesung: "sqrt(5^2+12^2)"
    einheit: "cm"
    anzeige: '13'
    fehler:
      - wert: "17"
        meldung: Du hast die Seiten einfach addiert. Im rechtwinkligen Dreieck gilt der Satz des Pythagoras, $c^2 = a^2 + b^2$.
hinweise:
  - '$c = \sqrt{a^2 + b^2}$.'
loesung: |
  Nach Pythagoras gilt $c^2 = a^2 + b^2 = 25\,\text{cm}^2 + 144\,\text{cm}^2 = 169\,\text{cm}^2$.
  ---
  $c = \sqrt{169\,\text{cm}^2} = 13\,\text{cm}$. Wiederholen: [5.1 Das rechtwinklige Dreieck](/lernen/mathe3/trigonometrie/das-rechtwinklige-dreieck).
```

Manche Größen sind durch eine Zahl mit Einheit vollständig beschrieben. Eine Masse von $3\,\text{kg}$ ist eine
Masse von $3\,\text{kg}$, die Frage „in welche Richtung?“ ergibt keinen Sinn. Bei einer Kraft von $3\,\text{N}$
ist die Richtung dagegen entscheidend. Es ist ein Unterschied, ob sie eine Kiste nach oben hebt oder zur
Seite schiebt.

:::definition[Skalar und Vektor]
Ein **Skalar** ist eine Größe, die durch Zahlenwert und Einheit vollständig bestimmt ist.

Ein **Vektor** hat zusätzlich eine **Richtung**. Man zeichnet ihn als Pfeil. Die Länge des Pfeils ist der
**Betrag**, die Pfeilspitze zeigt die Richtung. Man schreibt einen Vektor mit Pfeil, $\vec F$, und seinen
Betrag ohne Pfeil, $F = |\vec F|$.

**Beispiele für Skalare:** Masse, Zeit, Temperatur, Energie, Leistung, Ladung, Weglänge.

**Beispiele für Vektoren:** Verschiebung, Geschwindigkeit, Beschleunigung, Kraft, Impuls.

**Kein Vektor:** die Temperatur. „$20\,^\circ\text{C}$ nach Norden“ hat keine Bedeutung, auch wenn eine
Temperatur negativ sein kann. Ein Vorzeichen ist noch keine Richtung im Raum.
:::

Mehr zum mathematischen Vektorbegriff steht in [6.1 Was ist ein Vektor?](/lernen/mathe3/vektoren/was-ist-ein-vektor-pfeile-punkte-und-koordinaten)
und [6.9 Vektor oder Skalar?](/lernen/mathe3/vektoren/vektor-oder-skalar-terme-richtig-lesen).

:::beispiel[Weg und Verschiebung einer Wanderung]
Eine Wanderin geht $3\,\text{km}$ nach Norden und dann $4\,\text{km}$ nach Osten.

**Schritt 1, Weglänge (Skalar):** Sie ist $3\,\text{km} + 4\,\text{km} = 7\,\text{km}$ gegangen. Die Weglänge
addiert man wie Zahlen.

**Schritt 2, Verschiebung (Vektor):** Die beiden Teilstrecken stehen senkrecht aufeinander. Die direkte
Verbindung vom Start zum Ziel ist die Hypotenuse: $\sqrt{(3\,\text{km})^2 + (4\,\text{km})^2} = 5\,\text{km}$.

**Schritt 3, Richtung:** Der Winkel gegen die Nordrichtung ist
$\arctan\dfrac{4\,\text{km}}{3\,\text{km}} = 53^\circ$ nach Osten.

**Antwort:** Gegangen ist sie $7\,\text{km}$, vom Start entfernt ist sie aber nur $5\,\text{km}$, Richtung
Nordost. Weglänge und Verschiebung sind verschiedene Größen.
:::

```aufgabe
id: p1-skalar-vektor
titel: Skalar oder Vektor?
niveau: 1
lernziel: 9
kompetenz: verstehen
angabe: |
  Welche der folgenden Größen sind **Vektoren**? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Geschwindigkeit"
      - "Energie"
      - "Kraft"
      - "Temperatur"
      - "Impuls"
      - "Leistung"
    richtig: [0, 2, 4]
    fehler:
      - wert: [0, 1, 2, 4]
        meldung: Die Energie hat keine Richtung. Ein Körper hat $50\,\text{J}$ Energie, aber nicht „$50\,\text{J}$ nach links“.
      - wert: [0, 2, 3, 4]
        meldung: Die Temperatur kann zwar negativ sein, hat aber keine Richtung im Raum. Ein Vorzeichen ist keine Richtung.
hinweise:
  - Frage bei jeder Größe, ob „in welche Richtung?“ einen Sinn ergibt.
loesung: |
  **Kriterium:** Ein Vektor hat eine Richtung im Raum.
  ---
  Geschwindigkeit, Kraft und Impuls haben eine Richtung, sie sind Vektoren. Energie, Temperatur und Leistung sind durch Zahl und Einheit vollständig beschrieben, sie sind Skalare.
```

```aufgabe
id: p1-weg-verschiebung
titel: Eine Runde im Stadion
niveau: 1
lernziel: 9
kompetenz: verstehen
angabe: |
  Eine Läuferin läuft genau eine Runde auf der $400$-m-Bahn und kommt am Startpunkt wieder an. Wie groß ist der **Betrag ihrer Verschiebung** in m?
teile:
  - typ: zahl
    loesung: "0"
    einheit: "m"
    fehler:
      - wert: "400"
        meldung: '$400\,\text{m}$ ist die Weglänge, ein Skalar. Die Verschiebung ist der Pfeil vom Start zum Ziel. Start und Ziel sind hier derselbe Punkt.'
hinweise:
  - Die Verschiebung ist der Pfeil vom Startpunkt zum Endpunkt, egal auf welchem Weg.
loesung: |
  **Ansatz:** Die Verschiebung zeigt vom Start zum Ziel. Der Weg dazwischen spielt keine Rolle.
  ---
  Start und Ziel fallen zusammen, also ist die Verschiebung der Nullvektor mit Betrag $0\,\text{m}$. Die Weglänge beträgt dagegen $400\,\text{m}$.
```

### Komponenten

In der Ebene zerlegt man einen Vektor in zwei **Komponenten** entlang der Koordinatenachsen. Ist
$\alpha$ der Winkel gegen die positive $x$-Achse, dann gilt
$$F_x = F\cos\alpha,\qquad F_y = F\sin\alpha.$$
Dabei ist $F$ der Betrag, $F_x$ die waagrechte und $F_y$ die senkrechte Komponente. Umgekehrt erhält man
Betrag und Winkel aus den Komponenten:
$$F = \sqrt{F_x^2 + F_y^2},\qquad \tan\alpha = \frac{F_y}{F_x}.$$
Die Komponentenzerlegung ist die Trigonometrie des rechtwinkligen Dreiecks. Der Vektor ist die Hypotenuse,
die Komponenten sind die Katheten.

:::beispiel[Einen Koffer schräg ziehen]
Ein Rollkoffer wird mit $F = 80\,\text{N}$ am Griff gezogen. Der Griff ist um $35^\circ$ gegen die
Waagrechte geneigt.

**Schritt 1, waagrechte Komponente:** Sie ist die Ankathete des Winkels, also Kosinus.
$F_x = 80\,\text{N}\cdot\cos 35^\circ = 80\,\text{N}\cdot 0{,}819 = 65{,}5\,\text{N}$.

**Schritt 2, senkrechte Komponente:** Sie ist die Gegenkathete, also Sinus.
$F_y = 80\,\text{N}\cdot\sin 35^\circ = 80\,\text{N}\cdot 0{,}574 = 45{,}9\,\text{N}$.

**Schritt 3, Probe:** $\sqrt{65{,}5^2 + 45{,}9^2}\,\text{N} = 80\,\text{N}$.

**Antwort:** Nur $65{,}5\,\text{N}$ ziehen den Koffer vorwärts. Die übrigen $45{,}9\,\text{N}$ heben ihn ein
wenig an.
:::

```aufgabe
id: p1-vektor-betrag
titel: Betrag und Richtung eines Vektors
niveau: 1
lernziel: 9
kompetenz: rechnen
angabe: |
  Eine Kraft hat die Komponenten $F_x = 6\,\text{N}$ und $F_y = 8\,\text{N}$. Berechne den Betrag in N und den Winkel zur $x$-Achse in Grad.
teile:
  - typ: zahl
    label: Betrag F
    loesung: "sqrt(6^2+8^2)"
    einheit: "N"
    anzeige: '10'
    fehler:
      - wert: "14"
        meldung: Komponenten darf man nicht einfach addieren. Sie stehen senkrecht aufeinander, also gilt Pythagoras.
  - typ: zahl
    label: Winkel α in Grad
    loesung: "inGrad(atan(8/6))"
    einheit: "°"
    anzeige: '53{,}1'
    fehler:
      - wert: "inGrad(atan(6/8))"
        meldung: Du hast den Winkel zur $y$-Achse berechnet. Für den Winkel zur $x$-Achse gilt $\tan\alpha = F_y/F_x$.
hinweise:
  - Pythagoras für den Betrag, Tangens für den Winkel.
loesung: |
  **Betrag:** $F = \sqrt{6^2 + 8^2}\,\text{N} = \sqrt{100}\,\text{N} = 10\,\text{N}$.
  ---
  **Winkel:** $\tan\alpha = \dfrac{8}{6}$, also $\alpha = 53{,}1^\circ$. Beide Komponenten sind positiv, der Winkel liegt im ersten Quadranten.
```

```aufgabe
id: p1-vektor-zerlegen
titel: Kraft zerlegen
niveau: 2
lernziel: 9
kompetenz: anwenden
angabe: |
  Ein Schlitten wird mit einer Seilkraft von $250\,\text{N}$ gezogen. Das Seil ist um $30^\circ$ gegen die Waagrechte geneigt. Berechne die waagrechte und die senkrechte Komponente in N.
teile:
  - typ: zahl
    label: waagrecht
    loesung: "250*cos(inRad(30))"
    einheit: "N"
    anzeige: '217'
    fehler:
      - wert: "250*sin(inRad(30))"
        meldung: Sinus und Kosinus vertauscht. Die waagrechte Komponente liegt am Winkel an, sie ist die Ankathete, also Kosinus.
  - typ: zahl
    label: senkrecht
    loesung: "250*sin(inRad(30))"
    einheit: "N"
    anzeige: '125'
    fehler:
      - wert: "250*cos(inRad(30))"
        meldung: Sinus und Kosinus vertauscht. Die senkrechte Komponente liegt dem Winkel gegenüber, also Sinus.
hinweise:
  - Die waagrechte Komponente ist die Ankathete des Winkels.
  - Zeichne das rechtwinklige Dreieck mit der Seilkraft als Hypotenuse.
loesung: |
  **Ansatz:** Seilkraft ist die Hypotenuse, die Komponenten sind die Katheten. Der Winkel liegt an der Waagrechten.
  ---
  $F_x = 250\,\text{N}\cdot\cos 30^\circ = 250\,\text{N}\cdot 0{,}866 = 217\,\text{N}$. Sie zieht den Schlitten vorwärts.
  ---
  $F_y = 250\,\text{N}\cdot\sin 30^\circ = 250\,\text{N}\cdot 0{,}5 = 125\,\text{N}$. Sie hebt den Schlitten etwas an und verringert so die Reibung. Probe: $\sqrt{217^2 + 125^2} \approx 250$.
```

### Vektoren addieren

Vektoren addiert man **komponentenweise**: $x$-Komponenten addieren, $y$-Komponenten addieren. Grafisch
hängt man die Pfeile **Spitze an Fuß** aneinander. Der Summenpfeil führt vom Fuß des ersten zur Spitze des
letzten. Die Summe aller Kräfte auf einen Körper heißt **resultierende Kraft**. Das Rechnen mit Vektoren
steht ausführlich in [6.2 Rechnen mit Vektoren](/lernen/mathe3/vektoren/rechnen-mit-vektoren-addition-vielfache-und-rechengesetze).

```plot
x: [-1, 6]
y: [-1, 5]
gleich: true
achsen: { x: "x in N", y: "y in N" }
vektoren:
  - { nach: [4, 1], label: "F₁", farbe: 0 }
  - { von: [4, 1], nach: [5, 4], label: "F₂", farbe: 1 }
  - { nach: [5, 4], label: "F₁ + F₂", farbe: 2 }
strecken:
  - { von: [0, 0], nach: [1, 3], gestrichelt: true }
  - { von: [1, 3], nach: [5, 4], gestrichelt: true }
beschriftung: "Vektoraddition. F₁ = (4|1) N und F₂ = (1|3) N werden Spitze an Fuß gehängt. Die Summe ist F₁ + F₂ = (5|4) N mit dem Betrag √41 ≈ 6,4 N. Gestrichelt ist das Parallelogramm, das dieselbe Summe liefert."
```

```aufgabe
id: p1-12-vorhersage
art: check
titel: "Vorhersage: Wie groß kann die Summe werden?"
niveau: 1
angabe: |
  Zwei Kräfte haben die Beträge $3\,\text{N}$ und $4\,\text{N}$. Ihre Richtungen kannst du frei wählen. Wie groß ist der **größtmögliche** Betrag ihrer Summe in N? Probiere es danach im Widget aus.
teile:
  - typ: zahl
    loesung: "3+4"
    einheit: "N"
    fehler:
      - wert: "5"
        meldung: '$5\,\text{N}$ ergibt sich, wenn die Kräfte senkrecht aufeinander stehen. Gleich gerichtete Kräfte ergeben mehr.'
      - wert: "1"
        meldung: '$1\,\text{N}$ ist der **kleinstmögliche** Betrag, bei entgegengesetzten Richtungen.'
hinweise:
  - Bei welcher Anordnung verstärken sich zwei Pfeile am meisten?
loesung: |
  Am größten wird die Summe, wenn beide Pfeile in dieselbe Richtung zeigen. Dann addieren sich die Beträge: $7\,\text{N}$.
  ---
  Bei entgegengesetzter Richtung bleibt $4\,\text{N} - 3\,\text{N} = 1\,\text{N}$. Jeder andere Winkel liefert einen Wert dazwischen.
```

```widget
name: vektoren
titel: Vektoren addieren
props:
  a: [4, 0]
  b: [0, 3]
  bereich: 8
  zeige: [summe]
```

**Arbeitsauftrag:** Der Pfeil $\vec a = (4 \mid 0)$ steht für eine Kraft von $4\,\text{N}$, der Pfeil
$\vec b$ für eine Kraft von $3\,\text{N}$. Lass $\vec a$ stehen und zieh die Spitze von $\vec b$ nacheinander
auf $(3 \mid 0)$, auf $(0 \mid 3)$ und auf $(-3 \mid 0)$. Lies jedes Mal die Summe $\vec a + \vec b$ unter dem
Bild ab und berechne ihren Betrag mit Pythagoras. Du erhältst $7\,\text{N}$, $5\,\text{N}$ und $1\,\text{N}$.

**Beobachte:** Der Betrag der Summe liegt immer zwischen $4\,\text{N} - 3\,\text{N} = 1\,\text{N}$ (Pfeile
entgegengesetzt) und $4\,\text{N} + 3\,\text{N} = 7\,\text{N}$ (Pfeile gleich gerichtet). **Erklärung:** Nur bei gleicher Richtung
addieren sich die Beträge. Bei jedem anderen Winkel heben sich die Pfeile teilweise auf.

:::achtung[Beträge einfach addiert]
Zwei Hunde ziehen an einem Seilknoten, der eine mit $3\,\text{N}$ nach Osten, der andere mit $4\,\text{N}$
nach Norden. Jemand rechnet: „Zusammen ziehen sie mit $7\,\text{N}$.“

**Der Fehler:** Beträge darf man nur addieren, wenn die Kräfte in dieselbe Richtung zeigen. Hier stehen sie
senkrecht aufeinander. **Richtig:** $\sqrt{(3\,\text{N})^2 + (4\,\text{N})^2} = 5\,\text{N}$. Je nach Winkel
liegt die Summe zwischen $1\,\text{N}$ und $7\,\text{N}$.
:::

:::achtung[Der Taschenrechner kennt den Quadranten nicht]
Eine Kraft hat die Komponenten $F_x = -3\,\text{N}$ und $F_y = 4\,\text{N}$. Jemand rechnet
$\alpha = \arctan\dfrac{4}{-3} = -53{,}1^\circ$.

**Der Fehler:** Der Arcustangens liefert nur Winkel zwischen $-90^\circ$ und $90^\circ$. Der Vektor zeigt aber
nach links oben, in den zweiten Quadranten. **Richtig:** $\alpha = 180^\circ - 53{,}1^\circ = 126{,}9^\circ$.
Skizziere den Vektor immer, bevor du den Winkel berechnest.
:::

```aufgabe
id: p1-vektor-summe
titel: Resultierende zweier Kräfte
niveau: 2
lernziel: 9
kompetenz: rechnen
angabe: |
  Auf einen Körper wirken $\vec F_1 = \begin{pmatrix}3\\ 4\end{pmatrix}\,\text{N}$ und $\vec F_2 = \begin{pmatrix}5\\ -10\end{pmatrix}\,\text{N}$. Bestimme die resultierende Kraft (Komponenten in N) und ihren Betrag in N.
teile:
  - typ: vektor
    label: Resultierende in N
    loesung: ["8", "-6"]
    namen: ["F_x", "F_y"]
    fehler:
      - wert: ["8", "14"]
        meldung: Bei der $y$-Komponente hast du das Minus von $-10$ verloren. $4 + (-10) = -6$.
  - typ: zahl
    label: Betrag
    loesung: "sqrt(8^2+6^2)"
    einheit: "N"
    anzeige: '10'
    fehler:
      - wert: "sqrt(3^2+4^2)+sqrt(5^2+10^2)"
        meldung: Du hast die Beträge der Einzelkräfte addiert. Berechne erst die Summe als Vektor und dann deren Betrag.
hinweise:
  - Komponentenweise addieren.
  - Den Betrag erst aus der fertigen Summe berechnen.
loesung: |
  **Ansatz:** Vektoren addiert man komponentenweise.
  ---
  $\vec F = \begin{pmatrix}3+5\\ 4-10\end{pmatrix}\,\text{N} = \begin{pmatrix}8\\ -6\end{pmatrix}\,\text{N}$.
  ---
  $F = \sqrt{64 + 36}\,\text{N} = 10\,\text{N}$. Die Beträge der Einzelkräfte sind $5\,\text{N}$ und $11{,}2\,\text{N}$. Die Summe ist kleiner als $16{,}2\,\text{N}$, weil die Kräfte teilweise gegeneinander wirken.
```

```aufgabe
id: p1-vektor-rechter-winkel
titel: Senkrechte Kräfte
niveau: 2
lernziel: 9
kompetenz: anwenden
angabe: |
  Zwei Kinder ziehen an einem Schlitten, eines mit $30\,\text{N}$ nach Osten, das andere mit $40\,\text{N}$ nach Norden. Wie groß ist die resultierende Kraft in N, und welchen Winkel in Grad schließt sie mit der Ostrichtung ein?
teile:
  - typ: zahl
    label: Betrag
    loesung: "sqrt(30^2+40^2)"
    einheit: "N"
    anzeige: '50'
    fehler:
      - wert: "70"
        meldung: Die Kräfte stehen senkrecht aufeinander. Ihre Beträge darf man nicht einfach addieren.
  - typ: zahl
    label: Winkel gegen Ost
    loesung: "inGrad(atan(40/30))"
    einheit: "°"
    anzeige: '53{,}1'
    fehler:
      - wert: "inGrad(atan(30/40))"
        meldung: Das ist der Winkel gegen die Nordrichtung. Gegen Ost ist die Ost-Komponente die Ankathete.
hinweise:
  - Die Kräfte stehen senkrecht aufeinander, also Pythagoras.
  - Für den Winkel gegen Ost ist $40\,\text{N}$ die Gegenkathete und $30\,\text{N}$ die Ankathete.
loesung: |
  **Ansatz:** Senkrechte Komponenten, also Pythagoras und Tangens.
  ---
  $F = \sqrt{30^2 + 40^2}\,\text{N} = \sqrt{2500}\,\text{N} = 50\,\text{N}$, nicht $70\,\text{N}$.
  ---
  $\tan\alpha = \dfrac{40}{30}$, also $\alpha = 53{,}1^\circ$ nördlich von Ost.
```

```aufgabe
id: p1-vektor-schraeg-gefuehrt
titel: Zwei Kräfte unter einem Winkel
niveau: 2
lernziel: 9
kompetenz: rechnen
angabe: |
  Auf einen Haken wirken $F_1 = 20\,\text{N}$ waagrecht nach rechts und $F_2 = 30\,\text{N}$ unter $60^\circ$ gegen die Waagrechte nach rechts oben. Berechne den Betrag der resultierenden Kraft in N und ihren Winkel gegen die Waagrechte in Grad.
teile:
  - typ: zahl
    label: Betrag
    loesung: "sqrt((20+30*cos(inRad(60)))^2+(30*sin(inRad(60)))^2)"
    einheit: "N"
    anzeige: '43{,}6'
    fehler:
      - wert: "50"
        meldung: Die Kräfte zeigen nicht in dieselbe Richtung. Du musst sie in Komponenten zerlegen und komponentenweise addieren.
  - typ: zahl
    label: Winkel
    loesung: "inGrad(atan2(30*sin(inRad(60)), 20+30*cos(inRad(60))))"
    einheit: "°"
    anzeige: '36{,}6'
    fehler:
      - wert: "30"
        meldung: Der Winkel der Summe ist nicht einfach der Mittelwert der Winkel $0^\circ$ und $60^\circ$. Die größere Kraft zieht die Summe stärker zu sich.
hinweise:
  - Zerlege $F_2$ in eine waagrechte und eine senkrechte Komponente.
  - Addiere die Komponenten, dann Pythagoras und Tangens.
gefuehrt:
  - text: Wie groß ist die waagrechte Komponente von $F_2$ in N?
    teil: { typ: zahl, loesung: "30*cos(inRad(60))" }
    erklaerung: '$30\,\text{N}\cdot\cos 60^\circ = 30\,\text{N}\cdot 0{,}5 = 15\,\text{N}$.'
  - text: Wie groß ist die senkrechte Komponente von $F_2$ in N?
    teil: { typ: zahl, loesung: "30*sin(inRad(60))" }
    erklaerung: '$30\,\text{N}\cdot\sin 60^\circ = 26{,}0\,\text{N}$.'
  - text: Addiere die waagrechten Komponenten beider Kräfte.
    teil: { typ: zahl, loesung: "20+15" }
    erklaerung: '$F_1$ ist ganz waagrecht, also $20\,\text{N} + 15\,\text{N} = 35\,\text{N}$. Senkrecht bleibt nur $26{,}0\,\text{N}$.'
  - text: Berechne den Betrag der Summe.
    teil: { typ: zahl, loesung: "sqrt(35^2+(30*sin(inRad(60)))^2)" }
    erklaerung: '$\sqrt{35^2 + 26{,}0^2}\,\text{N} = 43{,}6\,\text{N}$. Der Winkel ist $\arctan(26{,}0/35) = 36{,}6^\circ$.'
loesung: |
  **Ansatz:** Beide Kräfte in Komponenten zerlegen und komponentenweise addieren.
  ---
  $F_1 = (20 \mid 0)\,\text{N}$, $F_2 = (30\cos 60^\circ \mid 30\sin 60^\circ)\,\text{N} = (15{,}0 \mid 26{,}0)\,\text{N}$.
  ---
  Summe: $(35{,}0 \mid 26{,}0)\,\text{N}$. Betrag $\sqrt{35{,}0^2 + 26{,}0^2}\,\text{N} = 43{,}6\,\text{N}$.
  ---
  Winkel: $\tan\alpha = \dfrac{26{,}0}{35{,}0}$, also $\alpha = 36{,}6^\circ$. Plausibel: Der Betrag liegt zwischen $10\,\text{N}$ und $50\,\text{N}$, der Winkel zwischen $0^\circ$ und $60^\circ$.
```

```aufgabe
id: p1-vektor-quadrant
titel: Fehler beim Winkel finden
niveau: 3
lernziel: 9
kompetenz: begruenden
angabe: |
  Eine Kraft hat die Komponenten $F_x = -5\,\text{N}$ und $F_y = 12\,\text{N}$. Eine Mitschülerin rechnet: „$F = 13\,\text{N}$ und $\alpha = \arctan(12/(-5)) = -67{,}4^\circ$.“

  a) Gib den richtigen Winkel gegen die positive $x$-Achse in Grad an, gemessen gegen den Uhrzeigersinn.

  b) Erkläre den Fehler in einem Satz.
teile:
  - typ: zahl
    label: a) Winkel
    loesung: "inGrad(atan2(12, -5))"
    einheit: "°"
    anzeige: '112{,}6'
  - typ: text
    label: b) Erklärung
    muster: |
      Der Arcustangens liefert nur Winkel zwischen −90° und 90°. Der Vektor zeigt aber nach links oben in den
      zweiten Quadranten, deshalb muss man 180° addieren: −67,4° + 180° = 112,6°.
hinweise:
  - Skizziere den Vektor. In welchem Quadranten liegt er?
  - Der Taschenrechner liefert einen Winkel, der um $180^\circ$ daneben liegen kann.
loesung: |
  **Skizze:** $F_x < 0$ und $F_y > 0$, der Vektor zeigt nach links oben. Er liegt im zweiten Quadranten, sein Winkel liegt zwischen $90^\circ$ und $180^\circ$.
  ---
  **Fehler:** $\arctan$ liefert nur Werte zwischen $-90^\circ$ und $90^\circ$. Das Ergebnis $-67{,}4^\circ$ zeigt nach rechts unten, also genau in die Gegenrichtung.
  ---
  **Korrektur:** $\alpha = -67{,}4^\circ + 180^\circ = 112{,}6^\circ$. Der Betrag $13\,\text{N}$ war richtig, denn $\sqrt{25 + 144} = 13$.
  ---
  **Probe:** $13\,\text{N}\cdot\cos 112{,}6^\circ = -5{,}0\,\text{N}$ und $13\,\text{N}\cdot\sin 112{,}6^\circ = 12{,}0\,\text{N}$.
```

```reflexion
frage: Warum ist „ein Vektor ist eine Zahl mit Vorzeichen“ keine richtige Beschreibung? Denk an die Temperatur.
antwort: |
  Auch Skalare können ein Vorzeichen haben, etwa eine Temperatur von $-5\,^\circ\text{C}$ oder eine Ladung von
  $-2\,\text{C}$. Das Vorzeichen sagt dort „unter null“, nicht „in eine Richtung im Raum“. Ein Vektor hat dagegen
  eine Richtung im Raum, in der Ebene braucht man dafür zwei Komponenten. Nur bei Bewegungen auf einer Geraden
  reicht ein Vorzeichen, um die Richtung anzugeben.
```

## Gemischte Wiederholung

Hier sind Aufgaben aus diesem Kapitel mit Aufgaben aus dem Mathematikkurs gemischt. Das ist Absicht: In
der Prüfung steht nicht dabei, zu welchem Abschnitt eine Aufgabe gehört. Bei den Aufgaben „Welches
Verfahren passt?“ musst du nichts rechnen, sondern nur den richtigen Weg erkennen. Das ist oft der
schwerste Teil.

```aufgabe
id: p1-mix-potenzen
titel: Zehnerpotenzen quadrieren und multiplizieren
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Berechne ohne Taschenrechner: $(2\cdot 10^{-3})^2\cdot 5\cdot 10^{4}$.
teile:
  - typ: zahl
    loesung: "(2e-3)^2*5e4"
    anzeige: '0{,}2'
    fehler:
      - wert: "2e-6*5e4"
        meldung: Beim Quadrieren muss auch der Zahlenteil $2$ quadriert werden, $(2\cdot 10^{-3})^2 = 4\cdot 10^{-6}$.
      - wert: "4e-9*5e4"
        meldung: Du hast den Exponenten mit $3$ multipliziert. Quadrieren heißt mal $2$, also $(10^{-3})^2 = 10^{-6}$.
hinweise:
  - Quadriere Zahlenteil und Zehnerpotenz getrennt.
loesung: |
  **Quadrieren:** $(2\cdot 10^{-3})^2 = 2^2\cdot 10^{-3\cdot 2} = 4\cdot 10^{-6}$.
  ---
  **Multiplizieren:** $4\cdot 10^{-6}\cdot 5\cdot 10^{4} = 20\cdot 10^{-2} = 0{,}2$. Wiederholen: [1.9 Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln).
```

```aufgabe
id: p1-mix-vektor-raum
titel: Betrag eines Vektors im Raum
niveau: 1
lernziel: 9
kompetenz: rechnen
angabe: |
  Eine Kraft im Raum hat die Komponenten $(2 \mid 3 \mid 6)\,\text{N}$. Wie groß ist ihr Betrag in N?
teile:
  - typ: zahl
    loesung: "sqrt(2^2+3^2+6^2)"
    einheit: "N"
    anzeige: '7'
    fehler:
      - wert: "11"
        meldung: Du hast die Komponenten addiert. Der Betrag ist die Wurzel aus der Summe der **Quadrate**, wie beim Satz des Pythagoras.
hinweise:
  - Im Raum gilt $|\vec F| = \sqrt{F_x^2 + F_y^2 + F_z^2}$.
loesung: |
  **Ansatz:** Pythagoras in drei Dimensionen.
  ---
  $F = \sqrt{4 + 9 + 36}\,\text{N} = \sqrt{49}\,\text{N} = 7\,\text{N}$. Wiederholen: [6.3 Betrag, Abstand und Einheitsvektor](/lernen/mathe3/vektoren/betrag-abstand-und-einheitsvektor).
```

```aufgabe
id: p1-mix-formel-umstellen
titel: Die Pendellänge aus der Schwingungsdauer
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Für ein Fadenpendel gilt $T = 2\pi\sqrt{\dfrac{l}{g}}$. Welche Länge in m braucht ein Pendel für $T = 1{,}5\,\text{s}$? ($g = 9{,}81\,\text{m/s}^2$, drei signifikante Stellen.)
teile:
  - typ: zahl
    loesung: "9.81*1.5^2/(4*pi^2)"
    einheit: "m"
    anzeige: '0{,}559'
    fehler:
      - wert: "9.81*1.5/(2*pi)"
        meldung: Du hast die Wurzel nicht aufgelöst. Nach dem Teilen durch $2\pi$ musst du beide Seiten **quadrieren**.
      - wert: "1.5^2/(4*pi^2*9.81)"
        meldung: '$g$ steht im Nenner unter der Wurzel. Beim Umstellen wandert es auf die andere Seite in den Zähler, $l = g T^2/(4\pi^2)$.'
hinweise:
  - Teile durch $2\pi$, quadriere dann beide Seiten.
  - Multipliziere zuletzt mit $g$.
loesung: |
  **Umstellen:** Wir teilen durch $2\pi$: $\dfrac{T}{2\pi} = \sqrt{\dfrac{l}{g}}$. Quadrieren beseitigt die Wurzel: $\dfrac{T^2}{4\pi^2} = \dfrac{l}{g}$.
  ---
  Mit $g$ multiplizieren: $l = \dfrac{g\,T^2}{4\pi^2}$.
  ---
  **Einsetzen:** $l = \dfrac{9{,}81\,\text{m/s}^2\cdot(1{,}5\,\text{s})^2}{39{,}48} = 0{,}559\,\text{m}$. Die Einheit: $\text{m/s}^2\cdot\text{s}^2 = \text{m}$. Wiederholen: [2.12 Formeln umstellen](/lernen/mathe3/gleichungen/formeln-umstellen).
```

```aufgabe
id: p1-mix-steigung-winkel
titel: Eine Straße mit 12 Prozent Steigung
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Ein Verkehrsschild zeigt $12\,\%$ Steigung. Das heißt: Auf $100\,\text{m}$ waagrechter Strecke steigt die Straße um $12\,\text{m}$. Wie groß ist der Steigungswinkel in Grad? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    loesung: "inGrad(atan(0.12))"
    einheit: "°"
    anzeige: '6{,}84'
    fehler:
      - wert: "12"
        meldung: Prozent sind keine Grad. $12\,\%$ ist das Verhältnis Höhe zu waagrechter Strecke, also der Tangens des Winkels.
      - wert: "inGrad(asin(0.12))"
        meldung: Die $100\,\text{m}$ sind waagrecht gemessen, also die Ankathete. Dann gehört der Tangens dazu, nicht der Sinus.
hinweise:
  - Steigung in Prozent ist Höhenunterschied durch waagrechte Strecke.
  - Das ist der Tangens des Steigungswinkels.
loesung: |
  **Ansatz:** $\tan\alpha = \dfrac{\text{Höhe}}{\text{waagrechte Strecke}} = \dfrac{12\,\text{m}}{100\,\text{m}} = 0{,}12$.
  ---
  $\alpha = \arctan 0{,}12 = 6{,}84^\circ$. Taschenrechner auf Grad stellen.
  ---
  **Plausibilität:** Eine steile Straße hat also nur knapp $7^\circ$. Wiederholen: [5.2 Steigung, Höhenwinkel und Vermessung](/lernen/mathe3/trigonometrie/steigung-hoehenwinkel-und-vermessung).
```

```aufgabe
id: p1-mix-median
titel: Mittelwert oder Median?
niveau: 2
lernziel: 6
kompetenz: begruenden
angabe: |
  Fünf Messungen einer Zeit ergeben $4{,}1$; $4{,}3$; $4{,}2$; $6{,}0$; $4{,}4\,\text{s}$. Der Wert $6{,}0\,\text{s}$ ist vermutlich ein Bedienfehler, im Protokoll steht aber nichts dazu.

  a) Berechne den Mittelwert in s.

  b) Berechne den Median in s.
teile:
  - typ: zahl
    label: a) Mittelwert
    loesung: "mean([4.1, 4.3, 4.2, 6.0, 4.4])"
    einheit: "s"
    anzeige: '4{,}6'
    fehler:
      - wert: "4.2"
        meldung: Das ist der mittlere Wert der **unsortierten** Liste. Der Mittelwert ist Summe durch Anzahl.
  - typ: zahl
    label: b) Median
    loesung: "median([4.1, 4.3, 4.2, 6.0, 4.4])"
    einheit: "s"
    anzeige: '4{,}3'
    fehler:
      - wert: "4.2"
        meldung: Für den Median musst du die Werte zuerst **sortieren**, $4{,}1$; $4{,}2$; $4{,}3$; $4{,}4$; $6{,}0$.
hinweise:
  - Mittelwert ist Summe durch Anzahl.
  - Für den Median sortierst du die Werte und nimmst den mittleren.
loesung: |
  **a)** $\bar t = \dfrac{4{,}1 + 4{,}3 + 4{,}2 + 6{,}0 + 4{,}4}{5}\,\text{s} = \dfrac{23{,}0}{5}\,\text{s} = 4{,}6\,\text{s}$.
  ---
  **b)** Sortiert: $4{,}1$; $4{,}2$; $4{,}3$; $4{,}4$; $6{,}0$. Der mittlere Wert ist $4{,}3\,\text{s}$.
  ---
  **Deutung:** Der Ausreißer zieht den Mittelwert nach oben, über vier der fünf Werte. Der Median bleibt fast unberührt. Ohne protokollierten Grund darf man den Wert nicht streichen, aber man sollte die Messung wiederholen. Wiederholen: [17.4 Mittelwert, Median und Modus](/lernen/mathe3/statistik/mittelwert-median-und-modus).
```

```aufgabe
id: p1-mix-verfahren-fehler
titel: "Welches Verfahren passt? Unsicherheiten"
niveau: 2
lernziel: 6
kompetenz: verstehen
angabe: |
  Ordne zu, ohne zu rechnen. Für welche Rechnung addiert man die **relativen** Unsicherheiten? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Gesamtlänge zweier hintereinandergelegter Stäbe"
      - "Dichte aus Masse und Volumen"
      - "Wassermasse als Differenz zweier Wägungen"
      - "Fläche eines Rechtecks aus Länge und Breite"
      - "Volumen einer Kugel aus ihrem Radius"
    richtig: [1, 3, 4]
    fehler:
      - wert: [0, 1, 3, 4]
        meldung: Die Gesamtlänge ist eine **Summe**. Bei Summen addiert man die absoluten Unsicherheiten.
      - wert: [1, 2, 3, 4]
        meldung: Die Wassermasse ist eine **Differenz**. Auch dort addiert man die absoluten Unsicherheiten.
      - wert: [1, 3]
        meldung: Auch das Kugelvolumen gehört dazu. $r^3$ ist ein Produkt $r\cdot r\cdot r$, die relative Unsicherheit wird verdreifacht.
hinweise:
  - Summe und Differenz oder Produkt, Quotient und Potenz?
loesung: |
  **Kriterium:** Relative Unsicherheiten addiert man bei Produkten, Quotienten und Potenzen. Absolute bei Summen und Differenzen.
  ---
  Dichte $m/V$ (Quotient), Fläche $l\cdot b$ (Produkt) und Kugelvolumen $\tfrac43\pi r^3$ (Potenz) gehören zu den relativen. Gesamtlänge und Wassermasse sind Summe und Differenz.
```

```aufgabe
id: p1-mix-verfahren-werkzeug
titel: "Welches Verfahren passt? Das richtige Werkzeug"
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: |
  Ordne jeder Frage das passende Werkzeug aus diesem Kapitel zu. Welche Zuordnung ist vollständig richtig?

  (1) „Hängt die Schwingungsdauer einer Saite von ihrer Länge, Spannkraft und Masse pro Länge ab, und wie?“ (ohne Herleitung)

  (2) „Wie viele Klavierstimmer gibt es in Wien?“

  (3) „Aus fünf Fallhöhen und Fallzeiten soll $g$ bestimmt werden.“
teile:
  - typ: auswahl
    optionen:
      - "(1) Dimensionsanalyse, (2) Fermi-Abschätzung, (3) Linearisieren mit Ausgleichsgerade"
      - "(1) Fermi-Abschätzung, (2) Dimensionsanalyse, (3) Mittelwert"
      - "(1) Linearisieren, (2) Fermi-Abschätzung, (3) Dimensionsanalyse"
      - "(1) Dimensionsanalyse, (2) Mittelwert, (3) Fehlerfortpflanzung"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Eine Fermi-Abschätzung liefert eine Zahl, aber nicht die Form eines Zusammenhangs. Für „wie hängt es ab?“ ohne Herleitung ist die Dimensionsanalyse da.
      - wert: 2
        meldung: Zum Linearisieren braucht man Messdaten. Bei (1) gibt es keine, nur die möglichen Einflussgrößen. Und bei (3) helfen Messdaten mit einer Ausgleichsgeraden mehr als Einheitenvergleich.
      - wert: 3
        meldung: Bei (2) gibt es keine Messreihe, aus der man einen Mittelwert bilden könnte. Hier hilft nur geschicktes Abschätzen.
hinweise:
  - Gibt es Messdaten, oder nur Einflussgrößen, oder nur Alltagswissen?
loesung: |
  **(1)** Gesucht ist die Form eines Zusammenhangs aus bekannten Einflussgrößen, ohne Messung: **Dimensionsanalyse**.
  ---
  **(2)** Keine Daten, nur grobe Kenntnisse wie Einwohnerzahl und Zahl der Klaviere: **Fermi-Abschätzung**.
  ---
  **(3)** Messreihe mit $h = \tfrac12 g t^2$: $h$ gegen $t^2$ auftragen, **Ausgleichsgerade**, Steigung $\tfrac12 g$.
```

```aufgabe
id: p1-mix-kupferdraht
titel: Wie schwer ist eine Kabelrolle?
niveau: 3
lernziel: 2
kompetenz: modellieren
angabe: |
  Eine Rolle Kupferkabel enthält $50\,\text{m}$ Draht mit $1{,}5\,\text{mm}^2$ Querschnitt. Kupfer hat die Dichte $8{,}96\,\text{g/cm}^3$. Wie groß ist die Masse des Kupfers in kg? Rechne zuerst alles in SI-Einheiten um.
teile:
  - typ: zahl
    loesung: "8960*1.5e-6*50"
    einheit: "kg"
    anzeige: '0{,}672'
    fehler:
      - wert: "8960*1.5e-3*50"
        meldung: Beim Querschnitt wurde die Vorsilbe nicht mitquadriert. $1\,\text{mm}^2 = 10^{-6}\,\text{m}^2$.
      - wert: "8.96*1.5e-6*50"
        meldung: Die Dichte muss in $\text{kg/m}^3$ stehen, $8{,}96\,\text{g/cm}^3 = 8960\,\text{kg/m}^3$.
hinweise:
  - Stell dir den Draht als langen Zylinder vor. Sein Volumen ist Querschnitt mal Länge.
  - '$1\,\text{mm}^2 = 10^{-6}\,\text{m}^2$ und $1\,\text{g/cm}^3 = 1000\,\text{kg/m}^3$.'
loesung: |
  **Modell:** Volumen des Drahts = Querschnittsfläche mal Länge, Masse = Dichte mal Volumen.
  ---
  **SI:** $A = 1{,}5\cdot 10^{-6}\,\text{m}^2$, $l = 50\,\text{m}$, $\rho = 8960\,\text{kg/m}^3$.
  ---
  **Volumen:** $V = 1{,}5\cdot 10^{-6}\,\text{m}^2\cdot 50\,\text{m} = 7{,}5\cdot 10^{-5}\,\text{m}^3$, also $75\,\text{cm}^3$.
  ---
  **Masse:** $m = 8960\,\text{kg/m}^3\cdot 7{,}5\cdot 10^{-5}\,\text{m}^3 = 0{,}672\,\text{kg}$. Plausibel: Eine solche Rolle wiegt im Baumarkt um ein Kilogramm, mit Isolierung und Spule.
```

```aufgabe
id: p1-mix-messen-text
titel: Messen, Modell und Unsicherheit verbinden
niveau: 3
lernziel: 0
kompetenz: begruenden
angabe: |
  Ein Schüler bestimmt $g$ mit einem Fadenpendel und erhält $(9{,}3 \pm 0{,}1)\,\text{m/s}^2$. Der Literaturwert ist $9{,}81\,\text{m/s}^2$. Nenne zwei mögliche Ursachen für die Abweichung, ordne sie als zufällig oder systematisch ein und schlage je eine Verbesserung vor.
teile:
  - typ: text
    muster: |
      Die Abweichung ist fünfmal so groß wie die angegebene Unsicherheit, also vermutlich systematisch.
      Ursache 1: Die Fadenlänge wurde nur bis zum Aufhängepunkt der Kugel gemessen statt bis zu ihrer Mitte.
      Das ist systematisch, jede Messung ist gleich verfälscht. Abhilfe: bis zum Schwerpunkt messen.
      Ursache 2: Die Auslenkung war zu groß, dann gilt die Formel nur näherungsweise und T wird größer.
      Auch das ist systematisch. Abhilfe: kleine Auslenkungen unter 10°. Zufällige Ursachen wie die
      Reaktionszeit erklären die Abweichung nicht, sie sind in den ±0,1 schon enthalten.
hinweise:
  - Vergleiche die Abweichung mit der angegebenen Unsicherheit. Ist das Zufall?
  - Welche Annahmen des Modells „Fadenpendel“ könnten im Experiment verletzt sein?
loesung: |
  **Einordnung:** Die Abweichung $0{,}5\,\text{m/s}^2$ ist fünfmal so groß wie die angegebene Unsicherheit. Zufall ist unwahrscheinlich, es liegt vermutlich eine systematische Ursache vor.
  ---
  **Ursache 1:** Falsch gemessene Länge, etwa nur bis zum oberen Rand der Kugel. Systematisch. Abhilfe: bis zur Kugelmitte messen.
  ---
  **Ursache 2:** Zu große Auslenkung, das Modell gilt nur für kleine Winkel. Systematisch. Abhilfe: unter $10^\circ$ auslenken. Die erste Ursache macht das gemessene $l$ zu kurz, die zweite macht $T$ zu lang. Wegen $g = 4\pi^2 l/T^2$ liefern beide ein zu kleines $g$.
```

## Prüfungsaufgaben

Diese Aufgaben haben das Format der schriftlichen Prüfung: mehrere Teilaufgaben, Punkte und ein
Sachkontext. Für jede gilt: zuerst alle Angaben in SI-Einheiten umrechnen, dann rechnen, am Ende das
Ergebnis sinnvoll runden und auf Plausibilität prüfen. Als Faustregel gelten etwa zwei Minuten pro Punkt.

```aufgabe
id: p1-pruefung-tropfen
titel: Ein tropfender Wasserhahn
niveau: 3
punkte: 6
lernziel: 2
kompetenz: modellieren
angabe: |
  *Zeitrichtwert: 12 Minuten.* Ein undichter Wasserhahn tropft einmal pro Sekunde. Ein Tropfen hat das Volumen $0{,}05\,\text{mL}$.

  a) Wie viele Liter gehen in einem Jahr mit $365$ Tagen verloren? (2 P)

  b) Wie viele Tropfen braucht man für einen Kubikmeter? (2 P)

  c) Ein Kubikmeter Wasser kostet $2{,}0$ Euro. Was kostet der tropfende Hahn pro Jahr in Euro? (2 P)
teile:
  - typ: zahl
    label: a) Liter pro Jahr
    loesung: "0.05e-3*365*86400"
    einheit: "L"
    anzeige: '1577'
  - typ: zahl
    label: b) Tropfen pro m³
    loesung: "1/(0.05e-6)"
    anzeige: '2\cdot 10^{7}'
  - typ: zahl
    label: c) Kosten in Euro
    loesung: "0.05e-6*365*86400*2.0"
    einheit: "Euro"
    anzeige: '3{,}15'
hinweise:
  - '$0{,}05\,\text{mL} = 0{,}05\cdot 10^{-3}\,\text{L} = 0{,}05\cdot 10^{-6}\,\text{m}^3$.'
  - Ein Jahr hat $365\cdot 86\,400\,\text{s} = 3{,}15\cdot 10^{7}\,\text{s}$, also ebenso viele Tropfen.
loesung: |
  **Modell:** Jede Sekunde fällt ein Tropfen. Die Zahl der Tropfen ist also die Zahl der Sekunden.
  ---
  **a)** Tropfen pro Jahr: $365\cdot 86\,400 = 3{,}15\cdot 10^{7}$. Volumen: $3{,}15\cdot 10^{7}\cdot 0{,}05\cdot 10^{-3}\,\text{L} = 1577\,\text{L} \approx 1{,}6\,\text{m}^3$.
  ---
  **b)** $\dfrac{1\,\text{m}^3}{0{,}05\cdot 10^{-6}\,\text{m}^3} = 2\cdot 10^{7}$ Tropfen. Die Kubikmeter kürzen sich.
  ---
  **c)** $1{,}577\,\text{m}^3\cdot 2{,}0\,\text{Euro/m}^3 \approx 3{,}15$ Euro. Wenig Geld, aber $1{,}6$ Tonnen Wasser, die ungenutzt abfließen.
```

```aufgabe
id: p1-pruefung-dichte-messung
titel: Dichte einer Stahlkugel mit Unsicherheit
niveau: 3
punkte: 8
lernziel: 6
kompetenz: anwenden
angabe: |
  *Zeitrichtwert: 16 Minuten.* Eine Stahlkugel hat den Durchmesser $d = (2{,}00 \pm 0{,}01)\,\text{cm}$ und die Masse $m = (32{,}8 \pm 0{,}1)\,\text{g}$. Das Volumen einer Kugel ist $V = \dfrac{\pi}{6} d^3$.

  a) Berechne das Volumen in $\text{cm}^3$. (2 P)

  b) Berechne die Dichte in $\text{kg/m}^3$. (2 P)

  c) Wie groß ist die relative Unsicherheit der Dichte in Prozent? Welche Messung sollte man verbessern? (4 P)
teile:
  - typ: zahl
    label: a) Volumen
    loesung: "pi/6*2^3"
    einheit: "cm³"
    anzeige: '4{,}19'
  - typ: zahl
    label: b) Dichte
    loesung: "32.8/(pi/6*8)*1000"
    einheit: "kg/m³"
    anzeige: '7830'
  - typ: zahl
    label: c) relative Unsicherheit
    loesung: "(0.1/32.8 + 3*0.01/2)*100"
    einheit: "%"
    toleranz: 0.1
    anzeige: '1{,}8'
hinweise:
  - '$1\,\text{g/cm}^3 = 1000\,\text{kg/m}^3$.'
  - 'Für $\rho = m/V$ addieren sich die relativen Unsicherheiten. Die von $V$ ist dreimal die von $d$.'
loesung: |
  **a)** $V = \dfrac{\pi}{6}\cdot(2{,}00\,\text{cm})^3 = \dfrac{\pi}{6}\cdot 8\,\text{cm}^3 = 4{,}19\,\text{cm}^3$.
  ---
  **b)** $\rho = \dfrac{32{,}8\,\text{g}}{4{,}19\,\text{cm}^3} = 7{,}83\,\text{g/cm}^3 = 7830\,\text{kg/m}^3$. Das ist typisch für Stahl.
  ---
  **c)** $\dfrac{\Delta m}{m} = \dfrac{0{,}1}{32{,}8} = 0{,}3\,\%$. $\dfrac{\Delta V}{V} = 3\cdot\dfrac{0{,}01}{2{,}00} = 1{,}5\,\%$. Zusammen $1{,}8\,\%$, also $\rho = (7830 \pm 140)\,\text{kg/m}^3$.
  ---
  **Verbesserung:** Der Durchmesser trägt fünfmal so viel bei wie die Masse, weil er hoch drei eingeht. Man sollte $d$ genauer messen, etwa mit der Mikrometerschraube.
```

```aufgabe
id: p1-pruefung-pendel-g
titel: Die Fallbeschleunigung im Labor
niveau: 3
punkte: 10
lernziel: 7
kompetenz: modellieren
angabe: |
  *Zeitrichtwert: 20 Minuten.* In einem Laborversuch wird die Schwingungsdauer $T$ eines Fadenpendels für vier Längen gemessen: $l = 0{,}25$; $0{,}50$; $0{,}75$; $1{,}00\,\text{m}$ mit $T = 1{,}00$; $1{,}42$; $1{,}74$; $2{,}01\,\text{s}$. Für das Pendel gilt $T = 2\pi\sqrt{l/g}$.

  a) Zeige durch Umformen, dass $T^2$ proportional zu $l$ ist, und gib die Steigung $k$ der Geraden im $T^2$-$l$-Diagramm als Formel in $g$ an. (3 P)

  b) Berechne $T^2$ für $l = 1{,}00\,\text{m}$. Die Ausgleichsgerade geht durch den Ursprung und durch diesen Punkt. Wie groß ist die Steigung in $\text{s}^2/\text{m}$? (3 P)

  c) Berechne $g$ in $\text{m/s}^2$. (2 P)

  d) Die Steigung ist auf $2\,\%$ unsicher. Wie groß ist die absolute Unsicherheit von $g$ in $\text{m/s}^2$? (2 P)
teile:
  - typ: text
    label: a) Umformung
    muster: |
      Quadrieren von T = 2π√(l/g) ergibt T² = 4π² l / g = (4π²/g) · l. Das ist die Form y = k·x mit y = T², x = l
      und der Steigung k = 4π²/g. Also ist T² proportional zu l, die Gerade geht durch den Ursprung.
  - typ: zahl
    label: b) Steigung k
    loesung: "2.01^2/1.00"
    einheit: "s²/m"
    anzeige: '4{,}04'
  - typ: zahl
    label: c) g
    loesung: "4*pi^2/2.01^2"
    einheit: "m/s²"
    anzeige: '9{,}77'
  - typ: zahl
    label: d) Unsicherheit von g
    loesung: "0.02*4*pi^2/2.01^2"
    einheit: "m/s²"
    toleranz: 0.01
    anzeige: '0{,}2'
hinweise:
  - Quadriere beide Seiten der Pendelformel.
  - '$g = 4\pi^2/k$. Eine Konstante hoch $-1$ übernimmt die relative Unsicherheit unverändert.'
loesung: |
  **a)** Quadrieren: $T^2 = 4\pi^2\cdot\dfrac{l}{g} = \dfrac{4\pi^2}{g}\cdot l$. Das ist $y = k\cdot x$ mit $y = T^2$, $x = l$ und $k = \dfrac{4\pi^2}{g}$.
  ---
  **b)** $T^2 = (2{,}01\,\text{s})^2 = 4{,}04\,\text{s}^2$. Die Steigung ist $k = \dfrac{4{,}04\,\text{s}^2}{1{,}00\,\text{m}} = 4{,}04\,\text{s}^2/\text{m}$. Die anderen Punkte, $T^2 = 1{,}00$; $2{,}02$; $3{,}03\,\text{s}^2$, liegen gut auf dieser Geraden.
  ---
  **c)** $g = \dfrac{4\pi^2}{k} = \dfrac{39{,}48}{4{,}04\,\text{s}^2/\text{m}} = 9{,}77\,\text{m/s}^2$.
  ---
  **d)** $g$ ist proportional zu $k^{-1}$, also hat $g$ dieselbe relative Unsicherheit von $2\,\%$. $\Delta g = 0{,}02\cdot 9{,}77\,\text{m/s}^2 = 0{,}2\,\text{m/s}^2$. Ergebnis $g = (9{,}8 \pm 0{,}2)\,\text{m/s}^2$, der Literaturwert $9{,}81\,\text{m/s}^2$ liegt in diesem Bereich.
```

```aufgabe
id: p1-pruefung-laser-raum
titel: Ein Zimmer mit dem Laser vermessen
niveau: 3
punkte: 8
lernziel: 4
kompetenz: anwenden
angabe: |
  *Zeitrichtwert: 16 Minuten.* Ein Laser-Entfernungsmesser misst die Laufzeit eines Lichtpulses bis zur gegenüberliegenden Wand und zurück: $t = 33{,}3\,\text{ns}$ ($c = 3{,}00\cdot 10^{8}\,\text{m/s}$). Das Zimmer ist außerdem $3{,}6\,\text{m}$ breit und $2{,}6\,\text{m}$ hoch.

  a) Wie lang ist das Zimmer in m? (2 P)

  b) Berechne das Raumvolumen in $\text{m}^3$. (2 P)

  c) Luft hat die Dichte $1{,}2\,\text{kg/m}^3$. Welche Masse hat die Luft im Zimmer in kg? (2 P)

  d) Das Gerät misst Zeiten auf $\pm 0{,}1\,\text{ns}$ genau. Wie groß ist die Unsicherheit der Länge in cm? (2 P)
teile:
  - typ: zahl
    label: a) Länge
    loesung: "3e8*33.3e-9/2"
    einheit: "m"
    anzeige: '5{,}0'
  - typ: zahl
    label: b) Volumen
    loesung: "3e8*33.3e-9/2*3.6*2.6"
    einheit: "m³"
    anzeige: '46{,}8'
  - typ: zahl
    label: c) Luftmasse
    loesung: "3e8*33.3e-9/2*3.6*2.6*1.2"
    einheit: "kg"
    anzeige: '56'
  - typ: zahl
    label: d) Unsicherheit der Länge
    loesung: "3e8*0.1e-9/2*100"
    einheit: "cm"
    anzeige: '1{,}5'
hinweise:
  - Der Lichtpuls läuft hin und zurück. $1\,\text{ns} = 10^{-9}\,\text{s}$.
  - 'Für d) gilt $\Delta d = c\,\Delta t/2$.'
loesung: |
  **a)** Laufzeitmessung mit Echo: $d = \dfrac{c\,t}{2} = \dfrac{3{,}00\cdot 10^{8}\,\text{m/s}\cdot 33{,}3\cdot 10^{-9}\,\text{s}}{2} = 5{,}0\,\text{m}$.
  ---
  **b)** $V = 5{,}0\,\text{m}\cdot 3{,}6\,\text{m}\cdot 2{,}6\,\text{m} = 46{,}8\,\text{m}^3$.
  ---
  **c)** $m = \rho V = 1{,}2\,\text{kg/m}^3\cdot 46{,}8\,\text{m}^3 = 56\,\text{kg}$, so viel wie ein leichter Erwachsener.
  ---
  **d)** $\Delta d = \dfrac{c\,\Delta t}{2} = \dfrac{3{,}00\cdot 10^{8}\,\text{m/s}\cdot 0{,}1\cdot 10^{-9}\,\text{s}}{2} = 0{,}015\,\text{m} = 1{,}5\,\text{cm}$. Für Zentimetergenauigkeit muss das Gerät also Zehntel-Nanosekunden auflösen.
```

```aufgabe
id: p1-pruefung-schlepper
titel: Zwei Schlepper ziehen ein Schiff
niveau: 3
punkte: 8
lernziel: 9
kompetenz: anwenden
angabe: |
  *Zeitrichtwert: 16 Minuten.* Zwei Schlepper ziehen ein Schiff. Der erste zieht mit $12\,\text{kN}$ unter $20^\circ$ nach links von der Fahrtrichtung, der zweite mit $15\,\text{kN}$ unter $25^\circ$ nach rechts. Die Fahrtrichtung ist die $x$-Achse, links ist die positive $y$-Richtung.

  a) Berechne die $x$-Komponente der resultierenden Kraft in kN. (3 P)

  b) Berechne die $y$-Komponente in kN. (3 P)

  c) Berechne den Betrag der resultierenden Kraft in kN und erkläre, warum er kleiner als $27\,\text{kN}$ ist. (2 P)
teile:
  - typ: zahl
    label: a) x-Komponente
    loesung: "12*cos(inRad(20))+15*cos(inRad(25))"
    einheit: "kN"
    anzeige: '24{,}9'
  - typ: zahl
    label: b) y-Komponente
    loesung: "12*sin(inRad(20))-15*sin(inRad(25))"
    einheit: "kN"
    anzeige: '-2{,}24'
  - typ: zahl
    label: c) Betrag
    loesung: "sqrt((12*cos(inRad(20))+15*cos(inRad(25)))^2+(12*sin(inRad(20))-15*sin(inRad(25)))^2)"
    einheit: "kN"
    anzeige: '25{,}0'
hinweise:
  - Zerlege jede Kraft mit Kosinus (Fahrtrichtung) und Sinus (seitlich). Achte auf das Vorzeichen der seitlichen Komponente.
  - Addiere die Komponenten und berechne den Betrag mit Pythagoras.
loesung: |
  **Ansatz:** Beide Kräfte zerlegen und komponentenweise addieren. Die seitliche Komponente des zweiten Schleppers zeigt nach rechts, also negativ.
  ---
  **a)** $F_x = 12\,\text{kN}\cdot\cos 20^\circ + 15\,\text{kN}\cdot\cos 25^\circ = 11{,}28\,\text{kN} + 13{,}59\,\text{kN} = 24{,}9\,\text{kN}$.
  ---
  **b)** $F_y = 12\,\text{kN}\cdot\sin 20^\circ - 15\,\text{kN}\cdot\sin 25^\circ = 4{,}10\,\text{kN} - 6{,}34\,\text{kN} = -2{,}24\,\text{kN}$, also leicht nach rechts.
  ---
  **c)** $F = \sqrt{24{,}9^2 + 2{,}24^2}\,\text{kN} = 25{,}0\,\text{kN}$. Die Summe der Beträge wäre $27\,\text{kN}$. Weil die Seile schräg ziehen, heben sich die seitlichen Komponenten teilweise auf. Nur bei gleicher Richtung addieren sich Beträge.
```

```aufgabe
id: p1-pruefung-modell-text
titel: Messen und Modellieren erklären
niveau: 3
punkte: 6
lernziel: 0
kompetenz: begruenden
angabe: |
  *Zeitrichtwert: 12 Minuten.*

  a) Erkläre an einem selbst gewählten Beispiel, was ein physikalisches Modell ist und wo seine Grenzen liegen. (3 P)

  b) Beschreibe, wie heute Meter und Sekunde festgelegt sind, und begründe, warum man die Länge auf eine Zeitmessung zurückführt. (3 P)
teile:
  - typ: text
    label: a)
    muster: |
      Beispiel Massenpunkt: Für die Bahn eines geworfenen Steins denkt man sich seine Masse in einem Punkt vereinigt und
      vernachlässigt Luftwiderstand und Drehung. Das Modell liefert die Wurfparabel. Grenzen: Bei leichten, großflächigen
      Körpern wie einem Federball dominiert der Luftwiderstand. Interessiert die Drehung, etwa der Effet beim Fußball,
      braucht man das Modell des starren Körpers.
  - typ: text
    label: b)
    muster: |
      Die Sekunde ist die Dauer von 9 192 631 770 Schwingungen einer Strahlung des Cäsium-133-Atoms. Der Meter ist die
      Strecke, die Licht im Vakuum in 1/299 792 458 s zurücklegt. Damit ist c exakt festgelegt. Zeit lässt sich mit
      Atomuhren viel genauer messen als jede Länge. Über die feste Lichtgeschwindigkeit überträgt sich diese Genauigkeit
      auf die Länge.
hinweise:
  - Nenne für a) die Idealisierung, den Zweck und einen Fall, in dem das Modell versagt.
  - Für b) braucht es die beiden Definitionen und den Hinweis auf die Genauigkeit von Atomuhren.
loesung: |
  **a)** Ein Modell ist eine vereinfachte Beschreibung für eine bestimmte Frage. Beim Massenpunkt lässt man Ausdehnung und Drehung weg.
  ---
  **Grenzen zu a):** Das Modell versagt, wenn das Weggelassene wichtig wird, etwa der Luftwiderstand beim Federball oder die Drehung beim Effet.
  ---
  **b)** Sekunde über eine Cäsium-Schwingung, Meter über die exakt festgelegte Lichtgeschwindigkeit. Zeit ist die am genauesten messbare Größe, deshalb definiert man die Länge über eine Laufzeit.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, ohne nachzusehen. Vergleiche dann mit der Zusammenfassung darunter.
antwort: |
  Zum Beispiel: (1) Eine physikalische Größe ist Zahlenwert mal Einheit. Vor jeder Rechnung rechnet man alles in
  SI-Einheiten um, und bei Flächen und Volumina wird die Vorsilbe mitpotenziert. (2) Jede Messung ist unsicher.
  Ein Ergebnis gibt man als Wert plus Unsicherheit mit sinnvollen Stellen an. Bei Summen addiert man absolute, bei
  Produkten relative Unsicherheiten. (3) Physik arbeitet mit Modellen, die für eine Frage das Wesentliche
  beschreiben, nur in ihrem Gültigkeitsbereich gelten und durch Experimente geprüft werden.
```

:::zusammenfassung
- **Erkenntnisweg:** Beobachtung, Hypothese, Experiment, Modell, Theorie. Im Experiment verändert man genau eine
  Größe und hält die anderen konstant. Modelle idealisieren und haben einen Gültigkeitsbereich. Theorien kann
  man widerlegen, aber nicht endgültig beweisen.
- **Größen und SI:** Größe = Zahlenwert mal Einheit. Sieben Basisgrößen mit den Einheiten m, kg, s, A, K, mol und cd, alle über
  Naturkonstanten festgelegt. Abgeleitete Einheiten folgen aus Definitionsgleichungen, etwa
  $1\,\text{N} = 1\,\text{kg}\,\text{m}\,\text{s}^{-2}$.
- **Umrechnen:** Einheiten wie Variablen ersetzen. km/h durch $3{,}6$ ergibt m/s. Bei $\text{cm}^2$ und
  $\text{cm}^3$ wird die Vorsilbe mitpotenziert: $1\,\text{cm}^2 = 10^{-4}\,\text{m}^2$.
- **Dimensionsanalyse:** Beide Seiten und alle Summanden haben dieselbe Dimension. Sie prüft Formeln und
  liefert Zusammenhänge bis auf einen Zahlenfaktor, findet aber keine Faktoren wie $\tfrac12$.
- **Länge und Zeit:** Die Sekunde ist über eine Cäsium-Schwingung festgelegt, der Meter über die exakte
  Lichtgeschwindigkeit. Messverfahren sind Nonius, Mikrometerschraube, Laufzeit mit $d = vt/2$, Triangulation
  und Uhren, die periodische Vorgänge zählen.
- **Unsicherheit:** Ergebnis als $\bar x \pm \Delta x$, Unsicherheit auf eine Stelle, Wert auf dieselbe
  Dezimalstelle. Mitteln verkleinert nur zufällige, nicht systematische Abweichungen. Die Unsicherheit des
  Mittelwerts ist $s/\sqrt n$.
- **Fehlerfortpflanzung:** Summe und Differenz addieren absolute, Produkt und Quotient relative
  Unsicherheiten. Potenzen multiplizieren die relative Unsicherheit mit dem Exponenten.
- **Diagramme und Abschätzen:** Linearisieren macht krumme Zusammenhänge gerade, die Steigung liefert die
  gesuchte Größe. Fermi-Abschätzungen geben die Größenordnung. Vektoren addiert man komponentenweise, nicht
  über ihre Beträge.
:::

### Die häufigsten Fehler

Jeder Fehler wird von einer Aufgabe in diesem Kapitel gezielt trainiert. Wenn du einen davon bei dir
wiedererkennst, rechne die genannte Aufgabe noch einmal.

1. **Zwei Größen im Experiment gleichzeitig verändert.** Training: „Welche Größe wird verändert?“ und
   „Ein Experiment planen“.
2. **km/h mit $3{,}6$ multipliziert statt geteilt.** Training: „km/h in m/s“ und „m/s in km/h“.
3. **Vorsilbe beim Quadrat oder Würfel nicht mitpotenziert**, etwa $1\,\text{m}^2 = 100\,\text{cm}^2$.
   Training: „Flächeneinheiten“, „Fehler beim Kabelquerschnitt finden“ und „Wie schwer ist eine Kabelrolle?“.
4. **Watt und Kilowattstunde verwechselt.** Training: „Jahresverbrauch in Joule“.
5. **Dimensionsanalyse falsch eingesetzt:** Summanden mit verschiedenen Einheiten übersehen oder geglaubt, sie liefere auch Zahlenfaktoren wie $\tfrac12$. Training: „Ein Fehler in der Formel“ und
   „Die Fallzeit mit der Dimensionsanalyse“.
6. **Bei der Laufzeitmessung nicht durch $2$ geteilt.** Training: „Echolot“ und „Laser-Entfernungsmessung zum Mond“.
7. **Beim Nonius den Treffer statt der Nullmarke abgelesen.** Training: „Einen Nonius im Bild ablesen“.
8. **Zu viele Stellen aus dem Taschenrechner übernommen.** Training: „Ein Ergebnis normgerecht angeben“ und
   „Eine Summe richtig runden“.
9. **Geglaubt, Mitteln beseitige systematische Fehler.** Training: „Hilft öfter messen immer?“.
10. **Standardabweichung mit der Unsicherheit des Mittelwerts verwechselt.** Training: „Wie genau ist der
    Mittelwert?“ und „Eine kurze Messreihe Schritt für Schritt“.
11. **Bei Produkten absolute Unsicherheiten addiert oder bei Differenzen abgezogen.** Training:
    „Unsicherheit einer Fläche“ und „Gefährliche Differenz“.
12. **Steigung aus einem einzelnen Punkt einer Geraden mit Achsenabschnitt.** Training: „Ein v-t-Diagramm lesen“.
13. **Beträge von Vektoren einfach addiert oder den Quadranten beim Arcustangens übersehen.** Training:
    „Senkrechte Kräfte“ und „Fehler beim Winkel finden“.

### Lernziel-Selbstcheck

Schätze für jedes Lernziel ein, wie sicher du bist: **1** heißt „noch unsicher“, **2** „mit Nachsehen“,
**3** „sicher, auch in der Prüfung“. Bei einer 1 wiederhole den Abschnitt und rechne seine Aufgabe auf
Niveau 3.

1. Den Erkenntnisweg erklären, ein Experiment planen, Modellgrenzen begründen.
2. Die SI-Basisgrößen nennen und abgeleitete Einheiten herleiten.
3. Mit Vorsilben und Zehnerpotenzen sicher umrechnen.
4. Formeln mit der Dimensionsanalyse prüfen und Zusammenhänge erschließen.
5. Meter und Sekunde erklären, Nonius, Mikrometer, Laufzeit und Triangulation anwenden.
6. Messergebnisse mit Unsicherheit und sinnvollen Stellen angeben.
7. Messreihen auswerten und Unsicherheiten fortpflanzen.
8. Diagramme lesen, linearisieren und aus der Steigung Größen bestimmen.
9. Größenordnungen abschätzen und Proportionalitätsschlüsse ziehen.
10. Vektoren zerlegen und addieren.

## Mündliche Prüfung

```karten
- id: p1-k-arbeitsweise
  frage: Beschreibe die Arbeitsweise der Physik an einem Beispiel.
  antwort: |
    Am Anfang steht eine Beobachtung, etwa dass ein Pendel sehr gleichmäßig schwingt. Daraus wird eine prüfbare
    Hypothese, zum Beispiel: Die Schwingungsdauer hängt nur von der Länge ab. Im Experiment verändert man genau eine
    Größe, etwa die Masse, und hält Länge und Auslenkung konstant. Aus reproduzierbaren Messungen entsteht ein Modell,
    hier die Pendelformel. Mehrere Modelle bilden eine Theorie, die neue Vorhersagen macht, die man wieder prüft.
  kernpunkte: ["Beobachtung, Hypothese, Experiment, Modell, Theorie", "eine Größe verändern, andere konstant", "reproduzierbar", "neue Vorhersagen prüfen"]
- id: p1-k-modell
  frage: Was ist ein physikalisches Modell? Nenne Beispiele und eine Grenze.
  antwort: |
    Ein Modell ist eine vereinfachte Beschreibung der Wirklichkeit, die für eine bestimmte Frage das Wesentliche erfasst
    und Unwichtiges bewusst weglässt. Das Weglassen heißt Idealisierung. Beispiele sind Massenpunkt, ideales Gas,
    reibungsfreie Bewegung und Lichtstrahl. Der Massenpunkt passt für die Erdbahn um die Sonne, aber nicht für Tag und
    Nacht, weil es dort gerade um die Drehung geht.
  kernpunkte: ["vereinfachte Beschreibung für eine Frage", "Idealisierung", "Beispiele", "Gültigkeitsbereich"]
- id: p1-k-theorie-beweisen
  frage: Warum kann man eine physikalische Theorie nicht beweisen, wohl aber widerlegen?
  antwort: |
    Eine Theorie macht allgemeine Aussagen für alle Fälle. Jedes bestätigende Experiment prüft nur einen Fall, der
    nächste könnte anders ausgehen. Ein einziges reproduzierbares Experiment, das der Vorhersage widerspricht, zeigt
    dagegen sicher, dass die allgemeine Aussage nicht stimmt. Außerdem hat jede Theorie einen Gültigkeitsbereich. Die
    Newtonsche Mechanik ist nicht falsch, sie gilt nur nicht nahe der Lichtgeschwindigkeit.
  kernpunkte: ["allgemeine Aussage, endlich viele Tests", "ein reproduzierbares Gegenbeispiel widerlegt", "Gültigkeitsbereich"]
- id: p1-k-gedankenexperiment
  frage: Was ist ein Gedankenexperiment? Erkläre ein Beispiel.
  antwort: |
    Ein Experiment, das man nur im Kopf durchführt und logisch zu Ende denkt. Galilei nahm an, schwere Körper fielen
    schneller. Bindet man einen schweren und einen leichten Stein zusammen, bremst der leichte den schweren, das Paar
    fiele langsamer. Zugleich ist das Paar schwerer, es fiele schneller. Der Widerspruch zeigt: Ohne Luftwiderstand
    fallen alle Körper gleich schnell. Im Vakuum hat man das später bestätigt.
  kernpunkte: ["nur im Kopf, logisch zu Ende gedacht", "Galileis zusammengebundene Steine", "Widerspruch widerlegt die Annahme", "Experiment bestätigt"]
- id: p1-k-groesse-si
  frage: Was ist eine physikalische Größe, und welche Basisgrößen hat das SI?
  antwort: |
    Eine physikalische Größe ist eine messbare Eigenschaft, das Produkt aus Zahlenwert und Einheit, etwa
    $m = 2{,}5\,\text{kg}$. Das SI hat sieben Basisgrößen: Länge (Meter), Masse (Kilogramm), Zeit (Sekunde),
    Stromstärke (Ampere), Temperatur (Kelvin), Stoffmenge (Mol) und Lichtstärke (Candela). Seit 2019 sind alle über
    feste Werte von Naturkonstanten definiert.
  kernpunkte: ["Zahlenwert mal Einheit", "sieben Basisgrößen mit Einheiten", "über Naturkonstanten festgelegt"]
- id: p1-k-abgeleitet
  frage: Was ist eine abgeleitete Größe? Zeig an einem Beispiel, wie man ihre Einheit bestimmt.
  antwort: |
    Eine Größe, die über eine Definitionsgleichung aus Basisgrößen gebildet wird. Die Leistung ist $P = W/t$, die Arbeit
    $W = F\cdot s$ und die Kraft $F = m\cdot a$. Setzt man die Einheiten ein, erhält man
    $1\,\text{W} = 1\,\text{kg}\,\text{m}^2\,\text{s}^{-3}$. Man muss die Einheiten also nicht auswendig wissen,
    sondern kann sie aus den Definitionen herleiten.
  kernpunkte: ["Definitionsgleichung", "Einheiten einsetzen und zusammenfassen", "Beispiel Watt oder Newton"]
- id: p1-k-quadratmeter
  frage: Warum ist ein Quadratmeter nicht hundert Quadratzentimeter?
  antwort: |
    Weil bei potenzierten Einheiten die Vorsilbe mitpotenziert wird. Ein Meter sind hundert Zentimeter, also ist
    $1\,\text{m}^2 = (100\,\text{cm})^2 = 10\,000\,\text{cm}^2$. Anschaulich passen in ein Quadrat mit einem Meter
    Seitenlänge hundert Reihen zu je hundert Zentimeterquadraten. Bei Volumina wird die Vorsilbe hoch drei genommen,
    ein Kubikmeter sind eine Million Kubikzentimeter oder tausend Liter.
  kernpunkte: ["Vorsilbe wird mitpotenziert", "100 · 100 = 10 000", "Volumen hoch drei, 1 m³ = 1000 L"]
- id: p1-k-dimensionsanalyse
  frage: Wozu dient die Dimensionsanalyse, und wo liegen ihre Grenzen?
  antwort: |
    Sie prüft, ob beide Seiten einer Gleichung und alle Summanden dieselbe Dimension haben. Eine dimensionsfalsche Formel
    ist sicher falsch. Außerdem kann man mit ihr die Form eines Zusammenhangs erschließen, etwa $T \propto \sqrt{l/g}$
    beim Pendel, und erkennt, dass die Masse keine Rolle spielt. Zahlenfaktoren wie $2\pi$ oder $\tfrac12$ und
    Vorzeichenfehler findet sie nicht. Eine dimensionsrichtige Formel kann also trotzdem falsch sein.
  kernpunkte: ["gleiche Dimension auf beiden Seiten und in Summen", "Zusammenhänge bis auf Faktor", "findet keine Zahlenfaktoren"]
- id: p1-k-meter
  frage: Wie ist der Meter definiert, und warum gerade so?
  antwort: |
    Der Meter ist die Strecke, die Licht im Vakuum in $1/299\,792\,458$ Sekunden zurücklegt. Damit ist die
    Lichtgeschwindigkeit exakt festgelegt. Weil man Zeit mit Atomuhren viel genauer messen kann als jede Länge, überträgt
    sich diese Genauigkeit auf die Länge. Außerdem kann jedes Labor den Meter selbst verwirklichen, statt sich auf einen
    Metallstab wie das alte Urmeter zu verlassen.
  kernpunkte: ["Lichtweg in 1/299 792 458 s", "c exakt festgelegt", "Zeit am genauesten messbar", "überall reproduzierbar"]
- id: p1-k-sekunde-uhr
  frage: Wie ist die Sekunde definiert, und wie funktioniert eine Uhr grundsätzlich?
  antwort: |
    Die Sekunde ist die Dauer von $9\,192\,631\,770$ Schwingungen einer Strahlung des Cäsium-133-Atoms. Jede Uhr zählt
    einen periodischen Vorgang: Erdrotation, Pendel, Unruh, Schwingquarz oder Atomübergang. Je regelmäßiger und häufiger
    der Vorgang, desto genauer die Uhr. Quarzuhren schwingen mit $32\,768 = 2^{15}$ Hertz, Atomuhren erreichen eine
    relative Genauigkeit um $10^{-16}$.
  kernpunkte: ["Cäsium-133-Schwingung", "Uhren zählen periodische Vorgänge", "Beispiele Quarz und Atomuhr"]
- id: p1-k-laengenmessung
  frage: Nenne Verfahren der Längenmessung für verschiedene Größenordnungen.
  antwort: |
    Für Meter nimmt man Maßband oder Lineal. Für Millimeter bis Hundertstelmillimeter gibt es den Messschieber mit Nonius
    und die Mikrometerschraube. Große Strecken misst man über die Laufzeit von Licht, Radar oder Schall mit
    $d = v\,t/2$, sehr große mit Triangulation und Parallaxe. Sehr kleine Längen misst man mit Mikroskop und
    Interferometrie.
  kernpunkte: ["Lineal, Nonius, Mikrometer", "Laufzeit d = vt/2", "Triangulation und Parallaxe", "Mikroskop für sehr Kleines"]
- id: p1-k-messabweichungen
  frage: Was ist der Unterschied zwischen systematischen und zufälligen Messabweichungen?
  antwort: |
    Zufällige Abweichungen streuen mal nach oben, mal nach unten, etwa durch die Reaktionszeit. Mittelwertbildung
    verkleinert sie. Systematische Abweichungen verschieben alle Messwerte in dieselbe Richtung, etwa durch einen
    Nullpunktfehler einer Waage. Gegen sie hilft Mitteln nicht. Man muss die Ursache finden und beseitigen oder
    herausrechnen.
  kernpunkte: ["zufällig streut beidseitig, Mitteln hilft", "systematisch einseitig", "Ursache finden und korrigieren"]
- id: p1-k-mehrmals-messen
  frage: Warum misst man mehrmals, und wie viel bringt das?
  antwort: |
    Weil sich zufällige Abweichungen im Mittelwert teilweise ausgleichen. Die Streuung einer Einzelmessung, die
    Standardabweichung $s$, bleibt gleich. Die Unsicherheit des Mittelwerts sinkt aber mit $s/\sqrt n$. Viermal so viele
    Messungen halbieren sie. Das hilft nur gegen zufällige Abweichungen. Beim Pendel stoppt man außerdem viele
    Schwingungen auf einmal, damit sich die Reaktionszeit verteilt.
  kernpunkte: ["zufällige Abweichungen gleichen sich aus", "s bleibt, s/√n sinkt", "vierfach messen halbiert", "nicht gegen systematische"]
- id: p1-k-fehlerfortpflanzung
  frage: Wie pflanzen sich Messunsicherheiten fort? Gib je ein Beispiel.
  antwort: |
    Bei Summen und Differenzen addieren sich die absoluten Unsicherheiten, etwa bei zwei hintereinandergelegten Stäben.
    Bei Produkten und Quotienten addieren sich die relativen, etwa bei der Dichte $m/V$. Bei einer Potenz $x^n$ wird die
    relative Unsicherheit mit $|n|$ multipliziert, das Kugelvolumen ist also dreimal so unsicher wie der Durchmesser.
    Allgemein gilt $\Delta f \approx |f'(x)|\,\Delta x$, das ist die Linearisierung aus der Differentialrechnung.
  kernpunkte: ["Summe: absolute addieren", "Produkt: relative addieren", "Potenz: mal Exponent", "Brücke zur Ableitung"]
- id: p1-k-linearisieren
  frage: Wie bestimmt man aus einer Pendelmessreihe die Fallbeschleunigung? Warum linearisiert man?
  antwort: |
    Aus $T = 2\pi\sqrt{l/g}$ folgt durch Quadrieren $T^2 = (4\pi^2/g)\cdot l$. Trägt man $T^2$ gegen $l$ auf, erhält man
    eine Gerade durch den Ursprung mit der Steigung $k = 4\pi^2/g$. Man zeichnet eine Ausgleichsgerade, liest die
    Steigung aus zwei Punkten auf der Geraden ab und berechnet $g = 4\pi^2/k$. Eine Gerade nutzt alle Messpunkte
    zugleich und lässt sich viel leichter auswerten als eine Kurve. Das Pendel selbst behandelt das Kapitel Schwingungen.
  kernpunkte: ["T² gegen l ist eine Gerade", "Steigung 4π²/g", "Ausgleichsgerade nutzt alle Punkte", "Verbindung zum Kapitel Schwingungen"]
- id: p1-k-fermi
  frage: Was ist eine Fermi-Abschätzung? Führe eine vor.
  antwort: |
    Eine Abschätzung einer Größenordnung aus grob bekannten Faktoren. Wie schwer ist die Luft in einem Klassenzimmer?
    Das Zimmer hat etwa $8\cdot 6\cdot 3 = 144\,\text{m}^3$, Luft hat etwa $1{,}2\,\text{kg/m}^3$. Das ergibt rund
    $170\,\text{kg}$, Größenordnung $10^2\,\text{kg}$. Man rechnet mit runden Zahlen und gibt das Ergebnis als
    Zehnerpotenz an, weil sich die Fehler der Faktoren teilweise ausgleichen.
  kernpunkte: ["in bekannte Faktoren zerlegen", "runde Zahlen", "Ergebnis als Größenordnung", "Plausibilität prüfen"]
- id: p1-k-skalar-vektor
  frage: Was ist der Unterschied zwischen Skalar und Vektor, und wie addiert man Vektoren?
  antwort: |
    Ein Skalar ist durch Zahl und Einheit bestimmt, etwa Masse, Energie, Temperatur. Ein Vektor hat zusätzlich eine
    Richtung, etwa Kraft, Geschwindigkeit, Verschiebung. Vektoren addiert man komponentenweise oder grafisch Spitze an
    Fuß, nicht über ihre Beträge. $3\,\text{N}$ und $4\,\text{N}$ senkrecht zueinander ergeben $5\,\text{N}$. Im Kapitel
    Dynamik braucht man das für die resultierende Kraft im Freikörperbild.
  kernpunkte: ["Skalar ohne, Vektor mit Richtung", "komponentenweise addieren", "Beträge nicht addieren", "Brücke zur Dynamik"]
```
