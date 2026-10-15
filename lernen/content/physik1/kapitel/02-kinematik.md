---
nummer: 2
titel: Kinematik des Massenpunktes
kurz: Ort, Geschwindigkeit und Beschleunigung, gleichförmige und gleichmäßig beschleunigte Bewegung, Bewegungsdiagramme, freier Fall, Würfe und Relativbewegung.
teil: grundlagen
stunden: 12
pruefungsgewicht: 3
voraussetzungen: [groessen-einheiten-messen]
lernziele:
  - ein Bezugssystem festlegen und Ort, Verschiebung und zurückgelegten Weg mit Vorzeichen angeben und voneinander unterscheiden
  - mittlere Geschwindigkeit und Momentangeschwindigkeit berechnen und als Steigung von Sekante und Tangente im s-t-Diagramm deuten
  - die Beschleunigung als Änderungsrate der Geschwindigkeit berechnen, sie von der Geschwindigkeit unterscheiden und am Vorzeichen erkennen, ob ein Körper schneller oder langsamer wird
  - die Gleichungen der gleichmäßig beschleunigten Bewegung herleiten, die passende Gleichung auswählen und auf Anfahr-, Brems- und Anhaltewege anwenden
  - s-t-, v-t- und a-t-Diagramme ineinander übersetzen, Steigungen ablesen und den Weg als Fläche unter dem v-t-Graphen bestimmen, auch bei nicht konstanter Beschleunigung
  - Begegnungs-, Einhol- und Überholaufgaben rechnerisch und mit Diagrammen lösen
  - freien Fall und senkrechten Wurf mit und ohne Anfangshöhe berechnen und die Fallbeschleunigung aus Messdaten mit Unsicherheit bestimmen
  - waagrechten und schiefen Wurf mit dem Superpositionsprinzip zerlegen und Flugzeit, Wurfweite, Steighöhe und Auftreffgeschwindigkeit berechnen
  - Geschwindigkeiten in verschiedenen Bezugssystemen nach Galilei vektoriell addieren und erklären, was ein Inertialsystem ist
---

Die **Kinematik** (von griechisch *kinema*, Bewegung) ist die Lehre von der Beschreibung der Bewegung.
Sie fragt, **wie** sich ein Körper bewegt: wo er ist, wie schnell er ist und wie sich seine
Geschwindigkeit ändert. Sie fragt noch nicht, **warum** er sich so bewegt. Die Ursachen, die Kräfte,
kommen erst im [Kapitel Dynamik](/lernen/physik1/dynamik). Wer Ort, Geschwindigkeit und Beschleunigung
sicher auseinanderhält, hat das Fundament für Kräfte, Energie und Schwingungen gelegt.

**Was kommt in der Prüfung?** In der schriftlichen Prüfung beginnt fast jede Mechanikaufgabe mit einer
Bewegung. Typische Aufgaben sind:

- Ein Auto bremst vor einem Hindernis. Reicht der Platz?
- Ein Stein fällt in einen Brunnen. Wie tief ist er?
- Ein Ball wird schräg abgeworfen. Wie weit fliegt er?
- Ein Diagramm zeigt die Geschwindigkeit eines Lifts. Wie hoch fährt er?

Die Rechenwege sind standardisiert. Wer sie beherrscht, sammelt verlässlich Punkte. In der
**mündlichen** Prüfung kommen gern Fragen wie „Was ist der Unterschied zwischen Geschwindigkeit und
Beschleunigung?“ oder „Was bedeutet die Fläche unter dem v-t-Diagramm?“.

**Die drei eigentlichen Hürden** sind nicht die Formeln, sondern drei Gedanken:

1. **Geschwindigkeit und Beschleunigung sind verschiedene Dinge.** Ein Körper kann ruhen und trotzdem
   beschleunigt sein. Ein Körper kann sehr schnell sein und gar nicht beschleunigt.
2. **Diagramme lesen:** Im s-t-Diagramm ist die Geschwindigkeit die Steigung. Im v-t-Diagramm ist die
   Beschleunigung die Steigung und der Weg die Fläche.
3. **Vorzeichen hängen vom Bezugssystem ab.** Ein Minus bei der Beschleunigung heißt nicht automatisch
   „bremsen“.

Jedem dieser Gedanken widmet das Kapitel eigene Erklärungen, Beispiele und Aufgaben. Nimm dir dort Zeit.

Für dich als künftigen Informatiker gibt es eine nützliche Sichtweise. Eine Bewegung ist eine Funktion,
die jedem Zeitpunkt $t$ einen Ort $x(t)$ zuordnet. Geschwindigkeit und Beschleunigung sind ihre erste und
zweite Ableitung. Wer schon einmal eine Spielphysik programmiert hat (`v += a*dt; x += v*dt;`), hat
Kinematik in kleinen Zeitschritten gelöst. In diesem Kapitel lösen wir sie exakt.

:::vorwissen
Für dieses Kapitel brauchst du:

- **Einheiten umrechnen**, vor allem km/h in m/s, und **Vektoren** als Pfeile mit Betrag und Richtung aus
  den Abschnitten [1.3 Vorsilben, Zehnerpotenzen und Umrechnen](/lernen/physik1/groessen-einheiten-messen/vorsilben-zehnerpotenzen-und-umrechnen)
  und [1.12 Skalare und Vektoren](/lernen/physik1/groessen-einheiten-messen/skalare-und-vektoren).
- **Steigung einer Geraden** und die **mittlere Änderungsrate** aus dem Mathematikkurs, Abschnitt
  [9.1 Änderungen messen](/lernen/mathe3/differentialrechnung/aenderungen-messen-absolute-relative-und-mittlere-aenderung).
- **Ableiten von Polynomen** aus dem Abschnitt
  [9.5 Grundregeln](/lernen/mathe3/differentialrechnung/grundregeln-potenz-faktor-und-summenregel-und-die-wichtigsten-ableitungen).
  Das ist für das Verständnis wichtig, im Rechnen genügen meist fertige Formeln.
- **Flächen von Rechteck, Dreieck und Trapez** und den Gedanken „Integral als Fläche“ aus dem Abschnitt
  [10.2 Das bestimmte Integral als Flächenbilanz](/lernen/mathe3/integralrechnung/das-bestimmte-integral-als-flaechenbilanz).
- **Quadratische Gleichungen** lösen aus dem Abschnitt [2.3 Quadratische Gleichungen](/lernen/mathe3/gleichungen/quadratische-gleichungen) und
  **Sinus und Kosinus** im rechtwinkligen Dreieck aus dem Abschnitt [5.2 Das rechtwinklige Dreieck](/lernen/mathe3/trigonometrie/das-rechtwinklige-dreieck).
:::

### Eingangsdiagnose: Bist du bereit?

Die folgenden sieben kurzen Fragen prüfen dieses Vorwissen. Wenn du bei einer Frage unsicher bist, folge
dem Link in der Lösung und wiederhole den Abschnitt kurz. Das kostet zehn Minuten und spart dir später viel Ärger.

```aufgabe
id: p2-e-umrechnen
art: check
titel: km/h in m/s
niveau: 1
angabe: |
  Rechne $72\,\text{km/h}$ in $\text{m/s}$ um.
teile:
  - typ: zahl
    loesung: "72/3.6"
    einheit: "m/s"
    anzeige: '20'
    fehler:
      - wert: "72*3.6"
        meldung: Du hast mit $3{,}6$ multipliziert. In einer Sekunde kommt man viel weniger weit als in einer Stunde, also muss die Zahl in m/s **kleiner** sein. Du musst durch $3{,}6$ teilen.
      - wert: "72/3600"
        meldung: Du hast nur die Stunde in Sekunden umgerechnet, aber die Kilometer nicht in Meter. Ein Kilometer sind $1000\,\text{m}$.
hinweise:
  - '$1\,\text{km/h} = \dfrac{1000\,\text{m}}{3600\,\text{s}} = \dfrac{1}{3{,}6}\,\text{m/s}$.'
loesung: |
  Ein Kilometer hat $1000\,\text{m}$, eine Stunde $3600\,\text{s}$. Also ist $1\,\text{km/h} = \dfrac{1000\,\text{m}}{3600\,\text{s}} = \dfrac{1}{3{,}6}\,\text{m/s}$.
  ---
  $72\,\text{km/h} = \dfrac{72}{3{,}6}\,\text{m/s} = 20\,\text{m/s}$. Wiederholen: [1.3 Vorsilben, Zehnerpotenzen und Umrechnen](/lernen/physik1/groessen-einheiten-messen/vorsilben-zehnerpotenzen-und-umrechnen).
```

```aufgabe
id: p2-e-steigung
art: check
titel: Steigung aus zwei Punkten
niveau: 1
angabe: |
  Eine Gerade geht durch die Punkte $P(2 \mid 5)$ und $Q(6 \mid 17)$. Wie groß ist ihre Steigung?
teile:
  - typ: zahl
    loesung: "(17-5)/(6-2)"
    anzeige: '3'
    fehler:
      - wert: "(6-2)/(17-5)"
        meldung: Du hast den Kehrwert berechnet. Die Steigung ist „Höhenunterschied durch Breitenunterschied“, also $\Delta y$ durch $\Delta x$, nicht umgekehrt.
      - wert: "17/6"
        meldung: Du hast nur die Koordinaten eines Punktes geteilt. Die Steigung braucht die **Unterschiede** zwischen zwei Punkten.
hinweise:
  - 'Steigung $k = \dfrac{\Delta y}{\Delta x} = \dfrac{y_2 - y_1}{x_2 - x_1}$.'
loesung: |
  Die Steigung ist der Quotient aus der Änderung von $y$ und der Änderung von $x$: $k = \dfrac{y_2 - y_1}{x_2 - x_1}$.
  ---
  $k = \dfrac{17 - 5}{6 - 2} = \dfrac{12}{4} = 3$. Wiederholen: [9.1 Änderungen messen](/lernen/mathe3/differentialrechnung/aenderungen-messen-absolute-relative-und-mittlere-aenderung).
```

```aufgabe
id: p2-e-ableitung
art: check
titel: Ein Polynom ableiten
niveau: 1
angabe: |
  Gegeben ist $f(t) = 3t^2 + 4t$. Berechne $f'(2)$, also die Ableitung an der Stelle $t = 2$.
teile:
  - typ: zahl
    loesung: "6*2+4"
    anzeige: '16'
    fehler:
      - wert: "3*2^2+4*2"
        meldung: Das ist der Funktionswert $f(2)$, nicht die Ableitung. Leite zuerst ab und setze dann ein.
      - wert: "6*2"
        meldung: Du hast den Summanden $4t$ beim Ableiten vergessen. Seine Ableitung ist $4$.
hinweise:
  - 'Potenzregel: $(t^n)'' = n\,t^{n-1}$. Also ist $(3t^2)'' = 6t$ und $(4t)'' = 4$.'
loesung: |
  Mit Potenz-, Faktor- und Summenregel gilt $f'(t) = 6t + 4$.
  ---
  $f'(2) = 6\cdot 2 + 4 = 16$. Wiederholen: [9.5 Grundregeln](/lernen/mathe3/differentialrechnung/grundregeln-potenz-faktor-und-summenregel-und-die-wichtigsten-ableitungen).
```

```aufgabe
id: p2-e-flaeche
art: check
titel: Fläche eines Trapezes
niveau: 1
angabe: |
  Ein Trapez hat die parallelen Seiten $a = 3\,\text{cm}$ und $c = 7\,\text{cm}$ und die Höhe $h = 4\,\text{cm}$. Wie groß ist seine Fläche in $\text{cm}^2$?
teile:
  - typ: zahl
    loesung: "(3+7)/2*4"
    einheit: "cm²"
    anzeige: '20'
    fehler:
      - wert: "(3+7)*4"
        meldung: Du hast die Summe der parallelen Seiten mal die Höhe gerechnet und den Faktor $\tfrac12$ vergessen. Das wäre ein Rechteck, das doppelt so groß ist wie das Trapez.
      - wert: "3*7*4"
        meldung: Ein Produkt aus drei Längen hat die Einheit $\text{cm}^3$, das ist ein Volumen. Die Trapezfläche ist „Mittelwert der parallelen Seiten mal Höhe“.
hinweise:
  - 'Trapezfläche $A = \dfrac{a + c}{2}\cdot h$: Mittelwert der parallelen Seiten mal Höhe.'
loesung: |
  Das Trapez ist so groß wie ein Rechteck, dessen Breite der Mittelwert der parallelen Seiten ist: $\dfrac{3 + 7}{2}\,\text{cm} = 5\,\text{cm}$.
  ---
  $A = 5\,\text{cm}\cdot 4\,\text{cm} = 20\,\text{cm}^2$. Diese Rechnung brauchst du für den Weg unter einem v-t-Diagramm. Wiederholen: [10.2 Das bestimmte Integral als Flächenbilanz](/lernen/mathe3/integralrechnung/das-bestimmte-integral-als-flaechenbilanz).
```

```aufgabe
id: p2-e-quadratisch
art: check
titel: Eine quadratische Gleichung lösen
niveau: 1
angabe: |
  Löse $t^2 - 2t - 8 = 0$. Gib die **positive** Lösung an.
teile:
  - typ: zahl
    loesung: "1+sqrt(1+8)"
    anzeige: '4'
    fehler:
      - wert: "-2"
        meldung: Das ist die negative Lösung. In der Physik ist $t$ oft eine Zeit nach dem Start, dann zählt nur die positive Lösung.
      - wert: "2"
        meldung: Prüfe durch Einsetzen. $2^2 - 2\cdot 2 - 8 = -8$, nicht null. Verwende die kleine Lösungsformel $t = -\tfrac p2 \pm \sqrt{(\tfrac p2)^2 - q}$ mit $p = -2$, $q = -8$.
hinweise:
  - 'Kleine Lösungsformel: $t_{1,2} = -\dfrac p2 \pm \sqrt{\left(\dfrac p2\right)^2 - q}$ mit $p = -2$ und $q = -8$.'
loesung: |
  Mit $p = -2$ und $q = -8$ gilt $t_{1,2} = 1 \pm \sqrt{1 + 8} = 1 \pm 3$.
  ---
  Die Lösungen sind $t_1 = 4$ und $t_2 = -2$. Positiv ist $t = 4$. Probe: $16 - 8 - 8 = 0$. Wiederholen: [2.3 Quadratische Gleichungen](/lernen/mathe3/gleichungen/quadratische-gleichungen).
```

```aufgabe
id: p2-e-zerlegen
art: check
titel: Einen Pfeil zerlegen
niveau: 1
angabe: |
  Ein Pfeil der Länge $10$ zeigt unter $30^\circ$ schräg nach oben (gemessen gegen die Waagrechte). Wie lang ist sein **waagrechter** Anteil? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    loesung: "10*cos(inRad(30))"
    anzeige: '8{,}66'
    fehler:
      - wert: "10*sin(inRad(30))"
        meldung: Du hast den Sinus genommen. Der waagrechte Anteil liegt **am** Winkel an, er ist die Ankathete. Zur Ankathete gehört der Kosinus.
hinweise:
  - 'Im rechtwinkligen Dreieck gilt $\cos\alpha = \dfrac{\text{Ankathete}}{\text{Hypotenuse}}$.'
loesung: |
  Der Pfeil ist die Hypotenuse, der waagrechte Anteil ist die Ankathete des Winkels $30^\circ$.
  ---
  Waagrechter Anteil $= 10\cdot\cos 30^\circ = 10\cdot 0{,}866 = 8{,}66$. Wiederholen: [5.2 Das rechtwinklige Dreieck](/lernen/mathe3/trigonometrie/das-rechtwinklige-dreieck).
```

```aufgabe
id: p2-e-pythagoras
art: check
titel: Zwei Geschwindigkeiten im rechten Winkel
niveau: 1
angabe: |
  Ein Boot bewegt sich gleichzeitig mit $3\,\text{m/s}$ nach Osten und mit $4\,\text{m/s}$ nach Norden. Wie groß ist der Betrag seiner Geschwindigkeit?
teile:
  - typ: zahl
    loesung: "sqrt(3^2+4^2)"
    einheit: "m/s"
    anzeige: '5'
    fehler:
      - wert: "7"
        meldung: Du hast die Beträge einfach addiert. Das gilt nur für Pfeile in **dieselbe** Richtung. Hier stehen sie senkrecht aufeinander, also brauchst du den Satz des Pythagoras.
hinweise:
  - Zeichne die beiden Pfeile hintereinander. Sie bilden mit dem Gesamtpfeil ein rechtwinkliges Dreieck.
loesung: |
  Geschwindigkeiten sind Vektoren. Zwei senkrechte Pfeile ergeben zusammen die Hypotenuse eines rechtwinkligen Dreiecks.
  ---
  $v = \sqrt{(3\,\text{m/s})^2 + (4\,\text{m/s})^2} = \sqrt{25\,\text{m}^2/\text{s}^2} = 5\,\text{m/s}$. Wiederholen: [1.12 Skalare und Vektoren](/lernen/physik1/groessen-einheiten-messen/skalare-und-vektoren).
```

## Bezugssystem, Massenpunkt und Ort

```aufgabe
id: p2-1-check
art: check
titel: "Vorwissen: Zahlen mit Vorzeichen"
niveau: 1
angabe: |
  Auf einer Zahlengeraden liegt der Punkt A bei $-3$, der Punkt B bei $+5$. Wie groß ist der Abstand zwischen A und B?
teile:
  - typ: zahl
    loesung: "5-(-3)"
    anzeige: '8'
    fehler:
      - wert: "2"
        meldung: Du hast $5 + (-3)$ gerechnet. Der Abstand ist aber die **Differenz** der beiden Zahlen, $5 - (-3)$. Minus minus ergibt plus.
hinweise:
  - Der Abstand zweier Punkte auf der Zahlengeraden ist die größere Zahl minus die kleinere.
loesung: |
  Der Abstand ist die Differenz der Koordinaten: $5 - (-3) = 5 + 3$.
  ---
  Das ergibt $8$. Zeichne es dir auf: Von $-3$ bis $0$ sind es $3$ Schritte, von $0$ bis $5$ noch $5$ Schritte. Wiederholen: [1.15 Betrag und Intervalle](/lernen/mathe3/zahlen/betrag-und-intervalle), dort geht es um Abstände auf der Zahlengeraden.
```

### Bewegung ist relativ

Du sitzt im Zug und liest. Bewegst du dich? Die ehrliche Antwort lautet: Das kommt darauf an, **von wo
aus** man schaut. Relativ zum Zug ruhst du. Relativ zum Bahnsteig fährst du mit $120\,\text{km/h}$.
Relativ zur Sonne rast du mit etwa $30\,\text{km/s}$ dahin, weil die Erde um die Sonne läuft. Alle drei
Aussagen sind richtig. Sie beziehen sich nur auf verschiedene Bezugskörper.

Bevor man eine Bewegung beschreibt, muss man also sagen, worauf man sich bezieht. Dafür gibt es einen
Fachbegriff.

:::definition[Bezugssystem]
Ein **Bezugssystem** ist ein Körper, von dem aus man eine Bewegung beschreibt, zusammen mit

- einem **Koordinatensystem**: Ursprung (Nullpunkt), Richtung der Achsen und Längeneinheit, und
- einer **Uhr** mit einem festgelegten Zeitnullpunkt $t = 0$.

Bewegung und Ruhe gibt es nur relativ zu einem Bezugssystem.

**Beispiel:** „Ursprung an der Haltelinie der Ampel, $x$-Achse in Fahrtrichtung, $t = 0$ beim Umschalten
auf Grün.“ Damit hat jeder Ort und jede Geschwindigkeit ein eindeutiges Vorzeichen.

**Kein Beispiel:** „Das Auto ist $50\,\text{m}$ entfernt.“ Hier fehlt, von wo aus und in welche Richtung
gemessen wird. Ein Ort ist das noch nicht.
:::

Im Alltag ist das Bezugssystem fast immer stillschweigend die Erdoberfläche. In der Prüfung lohnt es
sich trotzdem, es hinzuschreiben. Ein einziger Satz wie „Ursprung am Abwurfpunkt, Achse nach oben“
verhindert die meisten Vorzeichenfehler.

```aufgabe
id: p2-1-check-relativ
art: check
titel: Ruht die Schaffnerin?
niveau: 1
angabe: |
  Eine Schaffnerin steht still im Gang eines Zuges, der mit $100\,\text{km/h}$ fährt. Welche Aussage ist richtig?
teile:
  - typ: auswahl
    optionen:
      - "Sie ruht, denn sie macht keinen Schritt."
      - "Sie bewegt sich mit 100 km/h, denn der Zug fährt."
      - "Beides kann stimmen: Sie ruht relativ zum Zug und bewegt sich relativ zum Bahndamm."
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Relativ zum Zug stimmt das. Relativ zum Bahndamm fährt sie aber mit dem Zug mit. „Ruhe“ ohne Bezugssystem ist keine vollständige Aussage.
      - wert: 1
        meldung: Relativ zum Bahndamm stimmt das. Relativ zum Zug ruht sie aber. Ohne Bezugssystem ist keine der beiden Aussagen vollständig.
hinweise:
  - Frage dich bei jeder Aussage, relativ wozu sie gemeint ist.
loesung: |
  Bewegung und Ruhe gibt es nur relativ zu einem Bezugssystem.
  ---
  Relativ zum Zug ruht die Schaffnerin, relativ zum Bahndamm bewegt sie sich mit $100\,\text{km/h}$. Beide Aussagen sind mit dem passenden Bezugssystem richtig.
```

### Das Modell Massenpunkt

Ein Auto hat Räder, die sich drehen, und Insassen, die beim Bremsen nach vorn kippen. Für die Frage „Wie
lange braucht es von Wien nach Linz?“ ist das alles egal. Man ersetzt das Auto durch einen
**Massenpunkt**: einen gedachten Punkt, der die ganze Masse des Körpers trägt und sich so bewegt wie
der Körper als Ganzes.

Ein **Modell** ist eine bewusste Vereinfachung der Wirklichkeit. Es lässt weg, was für die Frage keine
Rolle spielt. Ob das Modell Massenpunkt passt, hängt also von der **Frage** ab, nicht von der Größe des Körpers.

- **Passt:** die Erde auf ihrer Bahn um die Sonne. Die Erde ist riesig, aber winzig im Vergleich zu
  ihrem Abstand von der Sonne. Ihre Drehung spielt für die Bahn keine Rolle.
- **Passt nicht:** ein Kreisel, der sich auf dem Tisch dreht. Hier ist die Drehung gerade das, was
  man beschreiben will. Drehbewegungen ausgedehnter Körper folgen im Abschnitt [5.8 Drehbewegung: Winkelgeschwindigkeit und Trägheitsmoment](/lernen/physik1/drehbewegung-einfache-maschinen/drehbewegung-winkelgeschwindigkeit-und-traegheitsmoment).

Alle Bewegungen in diesem Kapitel sind Bewegungen von Massenpunkten.

### Ort, Verschiebung und Weg

Bewegt sich ein Körper auf einer Geraden, genügt eine einzige Koordinatenachse. Der **Ort** $x$ ist dann
eine Zahl mit Einheit, die auch negativ sein kann. „$x = -20\,\text{m}$“ heißt: $20\,\text{m}$ vom
Ursprung entfernt, und zwar auf der Seite, die **entgegen** der Achsenrichtung liegt.

```plot
x: [-6, 9]
y: [-1.5, 2]
strecken:
  - { von: [-5.5, 0], nach: [8.5, 0] }
  - { von: [0, -0.3], nach: [0, 0.3] }
vektoren:
  - { von: [2, 1.1], nach: [7, 1.1], label: "hin: 5 km", farbe: 1 }
  - { von: [7, 0.6], nach: [-3, 0.6], label: "zurück: 10 km", farbe: 0 }
punkte:
  - { x: 0, y: 0, label: "0 (Ursprung)" }
  - { x: 2, y: 0, label: "Start x = 2 km" }
  - { x: 7, y: 0, label: "Umkehr x = 7 km" }
  - { x: -3, y: 0, label: "Ziel x = −3 km" }
beschriftung: "Ein Radfahrer auf einer geraden Straße, x-Achse nach rechts, Einheit Kilometer. Er startet bei x = 2 km, fährt 5 km nach rechts bis x = 7 km und dann 10 km nach links bis x = −3 km. Verschiebung −5 km, Weg 15 km."
```

Für eine Bewegung von einem Zeitpunkt $t_1$ zu einem späteren Zeitpunkt $t_2$ gibt es zwei Größen, die man
leicht verwechselt.

:::definition[Verschiebung und zurückgelegter Weg]
Die **Verschiebung** (Ortsänderung) zwischen $t_1$ und $t_2$ ist
$$\Delta x = x(t_2) - x(t_1),$$
also „Endort minus Anfangsort“. Das Zeichen $\Delta$ (großes griechisches Delta) liest man „Änderung von“.
Die Verschiebung hat ein **Vorzeichen**. Es sagt, in welche Richtung sich der Körper insgesamt bewegt hat.

Der **zurückgelegte Weg** $s$ ist die Länge der ganzen Strecke, die der Körper entlang seiner Bahn
gefahren ist. Er ist nie negativ und nimmt mit der Zeit nie ab.

**Beispiel:** Du gehst $5\,\text{m}$ nach vorn. Verschiebung $+5\,\text{m}$, Weg $5\,\text{m}$. Beide sind gleich groß.

**Kein Beispiel für Gleichheit:** Ein Ball fliegt $5\,\text{m}$ hoch und landet wieder in der Hand.
Verschiebung null, Weg $10\,\text{m}$.
:::

Solange sich ein Körper nur in **eine** Richtung bewegt, ist der Weg gleich dem Betrag der Verschiebung.
Sobald er umkehrt, sind die beiden Größen verschieden.

:::beispiel[Ein Radfahrer kehrt um]
Ein Radfahrer startet bei $x_1 = 2\,\text{km}$. Er fährt $5\,\text{km}$ in positive Richtung, kehrt um und
fährt $10\,\text{km}$ zurück. Die Zeichnung zeigt die Situation.

**Schritt 1, Endort bestimmen:** Nach dem Hinweg ist er bei $2\,\text{km} + 5\,\text{km} = 7\,\text{km}$.
Nach dem Rückweg ist er bei $7\,\text{km} - 10\,\text{km} = -3\,\text{km}$.

**Schritt 2, Verschiebung:** $\Delta x = x_2 - x_1 = -3\,\text{km} - 2\,\text{km} = -5\,\text{km}$. Das Minus
heißt: Er steht am Ende $5\,\text{km}$ **links** vom Start.

**Schritt 3, Weg:** Beide Teilstrecken zählen positiv, also $s = 5\,\text{km} + 10\,\text{km} = 15\,\text{km}$.

**Antwort:** Der Radfahrer ist $15\,\text{km}$ gefahren, hat sich aber insgesamt nur um $5\,\text{km}$ nach
links verschoben.
:::

:::achtung[Fehler: den Weg als „Endort minus Anfangsort“ berechnen]
Ein Hund läuft im Garten von $x = 0$ bis $x = 12\,\text{m}$ zum Zaun und dann zurück bis $x = 4\,\text{m}$.
Ein Schüler rechnet: „Weg $= 4\,\text{m} - 0 = 4\,\text{m}$.“

Das ist die **Verschiebung**, nicht der Weg. Der Hund ist $12\,\text{m}$ hin und $8\,\text{m}$ zurück
gelaufen, also $s = 20\,\text{m}$. „Endort minus Anfangsort“ liefert den Weg nur, wenn der Körper nie umkehrt.
:::

:::achtung[Fehler: das Vorzeichen des Anfangsorts vergessen]
Ein Auto steht bei $x_1 = -40\,\text{m}$ (also $40\,\text{m}$ vor der Ampel) und fährt bis $x_2 = 25\,\text{m}$.
Eine Schülerin rechnet: „$\Delta x = 25\,\text{m} - 40\,\text{m} = -15\,\text{m}$.“

Sie hat das Minus von $x_1$ verloren. Richtig ist $\Delta x = 25\,\text{m} - (-40\,\text{m}) = 65\,\text{m}$.
Eine Skizze zeigt es sofort: Von $40\,\text{m}$ vor der Ampel bis $25\,\text{m}$ dahinter sind es
$65\,\text{m}$. Das Auto fährt in positive Richtung, also muss $\Delta x$ positiv sein.
:::

### Dieselbe Bewegung, zwei Koordinatensysteme

Das Bezugssystem kannst du frei wählen. Die Bewegung selbst ändert sich dadurch nicht, aber die Zahlen
und Vorzeichen ändern sich. Das ist kein Widerspruch, sondern eine Frage der Buchhaltung.

:::beispiel[Ein Lift, zweimal beschrieben]
Ein Lift fährt vom 3. Stock in $9\,\text{m}$ Höhe hinunter ins Erdgeschoss. Wir beschreiben das zweimal.

**System A:** Ursprung im Erdgeschoss, Achse nach **oben**. Start $x_1 = +9\,\text{m}$, Ende $x_2 = 0$.
Verschiebung $\Delta x = 0 - 9\,\text{m} = -9\,\text{m}$. Das Minus heißt „nach unten“.

**System B:** Ursprung im 3. Stock, Achse nach **unten**. Start $x_1 = 0$, Ende $x_2 = +9\,\text{m}$.
Verschiebung $\Delta x = +9\,\text{m}$. Das Plus heißt hier ebenfalls „nach unten“, weil die Achse nach unten zeigt.

**Was haben wir gezeigt?** Das Vorzeichen allein sagt nichts. Erst zusammen mit der Achsenrichtung wird
daraus eine Richtung. Der Weg ist in beiden Systemen $9\,\text{m}$, denn er hängt nicht von der Achsenrichtung ab.
:::

:::merke
1. Lege vor jeder Rechnung **Ursprung**, **positive Richtung** und **Zeitnullpunkt** fest und schreib sie hin.
2. **Verschiebung** $\Delta x = x_{\text{Ende}} - x_{\text{Anfang}}$, mit Vorzeichen.
3. **Weg** $s$ = Summe der Längen aller Teilstrecken, immer positiv. Bei jeder Umkehr neu ansetzen.
:::

```reflexion
frage: Kann der zurückgelegte Weg jemals kleiner sein als der Betrag der Verschiebung? Begründe in zwei Sätzen.
antwort: |
  Nein. Die Verschiebung ist die kürzeste Verbindung von Anfangs- und Endort entlang der Geraden. Jeder
  tatsächliche Weg muss mindestens diese Strecke überbrücken, Umwege und Umkehrungen machen ihn nur länger.
  Gleich groß sind beide genau dann, wenn der Körper nie umkehrt.
```

```aufgabe
id: p2-weg-verschiebung
titel: Weg und Verschiebung
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Ein Radfahrer fährt auf einer geraden Straße $3{,}0\,\text{km}$ nach Norden, dann $1{,}2\,\text{km}$ zurück nach Süden. Die $x$-Achse zeigt nach Norden.
teile:
  - typ: zahl
    label: zurückgelegter Weg in km
    loesung: "3.0+1.2"
    einheit: "km"
    anzeige: '4{,}2'
    fehler:
      - wert: "3.0-1.2"
        meldung: Das ist die Verschiebung, „Endort minus Anfangsort“. Beim Weg zählt jede gefahrene Strecke positiv, auch die nach Süden.
  - typ: zahl
    label: Verschiebung Δx in km
    loesung: "3.0-1.2"
    einheit: "km"
    anzeige: '1{,}8'
    fehler:
      - wert: "3.0+1.2"
        meldung: Das ist der Weg. Die Verschiebung fragt nur, wo der Radfahrer am Ende im Vergleich zum Start steht. Die Fahrt nach Süden macht einen Teil der Fahrt nach Norden rückgängig.
      - wert: "-1.8"
        meldung: Das Vorzeichen stimmt nicht. Der Radfahrer steht am Ende nördlich vom Start, und die Achse zeigt nach Norden.
hinweise:
  - Zeichne eine Zahlengerade mit Norden nach rechts und markiere Start, Umkehrpunkt und Ziel.
loesung: |
  **Weg:** Beide Teilstrecken zählen positiv: $s = 3{,}0\,\text{km} + 1{,}2\,\text{km} = 4{,}2\,\text{km}$.
  ---
  **Verschiebung:** Start bei $x_1 = 0$, Ende bei $x_2 = 3{,}0\,\text{km} - 1{,}2\,\text{km} = 1{,}8\,\text{km}$. Also $\Delta x = 1{,}8\,\text{km} - 0 = +1{,}8\,\text{km}$, nach Norden. Probe: Der Weg ist größer als der Betrag der Verschiebung, weil der Radfahrer umgekehrt ist.
```

```aufgabe
id: p2-1-ort-ablesen
titel: Orte und Verschiebung auf der Zahlengeraden
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Eine Läuferin bewegt sich auf einer geraden Laufbahn. Die Zeichnung zeigt ihren Ort zu Beginn (P) und am Ende (Q). Die $x$-Achse zeigt nach rechts, ein Kästchen entspricht $10\,\text{m}$. Sie ist ohne Umkehr von P nach Q gelaufen.
plot:
  x: [-6, 6]
  y: [-1, 1]
  strecken:
    - { von: [-5.5, 0], nach: [5.5, 0] }
  punkte:
    - { x: 0, y: 0, label: "0" }
    - { x: 4, y: 0, label: "P" }
    - { x: -3, y: 0, label: "Q" }
teile:
  - typ: zahl
    label: Ort von P in m
    loesung: "40"
    einheit: "m"
    fehler:
      - wert: "4"
        meldung: Das ist die Zahl der Kästchen. Ein Kästchen entspricht aber $10\,\text{m}$.
  - typ: zahl
    label: Ort von Q in m
    loesung: "-30"
    einheit: "m"
    fehler:
      - wert: "30"
        meldung: Q liegt links vom Ursprung, also entgegen der Achsenrichtung. Der Ort ist deshalb negativ.
  - typ: zahl
    label: Verschiebung Δx in m
    loesung: "-30-40"
    einheit: "m"
    anzeige: '-70'
    fehler:
      - wert: "70"
        meldung: Der Betrag stimmt, das Vorzeichen nicht. Die Läuferin bewegt sich nach links, also entgegen der Achse. $\Delta x = x_Q - x_P$ ist negativ.
      - wert: "-10"
        meldung: Du hast $-30 + 40$ gerechnet. Die Verschiebung ist Endort **minus** Anfangsort, $-30\,\text{m} - 40\,\text{m}$.
hinweise:
  - 'Zähle die Kästchen vom Ursprung aus und achte auf die Seite. Dann gilt $\Delta x = x_Q - x_P$.'
loesung: |
  **Orte ablesen:** P liegt $4$ Kästchen rechts vom Ursprung, also $x_P = 4\cdot 10\,\text{m} = 40\,\text{m}$. Q liegt $3$ Kästchen links davon, also $x_Q = -30\,\text{m}$.
  ---
  **Verschiebung:** $\Delta x = x_Q - x_P = -30\,\text{m} - 40\,\text{m} = -70\,\text{m}$. Das Minus heißt: $70\,\text{m}$ nach links. Probe: Ohne Umkehr ist der Weg gleich dem Betrag, $70\,\text{m}$, und das passt zur Zeichnung ($7$ Kästchen).
```

```aufgabe
id: p2-1-lift-koordinaten
titel: Ein Lift in zwei Koordinatensystemen
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Ein Lift fährt vom Erdgeschoss ($0\,\text{m}$) zuerst in den 5. Stock ($15\,\text{m}$ Höhe), dann zurück in den 2. Stock ($6\,\text{m}$ Höhe).

  a) Wie groß ist der zurückgelegte Weg?

  b) Wie groß ist die Verschiebung, wenn die Achse nach **oben** zeigt und der Ursprung im Erdgeschoss liegt?

  c) Wie groß ist die Verschiebung, wenn die Achse nach **unten** zeigt und der Ursprung im 5. Stock liegt?
teile:
  - typ: zahl
    label: a) Weg in m
    loesung: "15+9"
    einheit: "m"
    anzeige: '24'
    fehler:
      - wert: "6"
        meldung: Das ist der Betrag der Verschiebung. Der Lift ist aber erst $15\,\text{m}$ hinauf und dann $9\,\text{m}$ hinunter gefahren. Beim Weg zählt beides.
  - typ: zahl
    label: b) Δx in m (Achse nach oben)
    loesung: "6-0"
    einheit: "m"
    anzeige: '6'
    fehler:
      - wert: "24"
        meldung: Das ist der Weg. Die Verschiebung vergleicht nur End- und Anfangsort.
  - typ: zahl
    label: c) Δx in m (Achse nach unten)
    loesung: "9-15"
    einheit: "m"
    anzeige: '-6'
    fehler:
      - wert: "6"
        meldung: In diesem System zeigt die Achse nach **unten**. Der Lift steht am Ende höher als am Anfang, er hat sich also entgegen der Achse bewegt. Das Vorzeichen muss negativ sein.
hinweise:
  - Der Weg hängt nicht vom Koordinatensystem ab. Rechne ihn Teilstrecke für Teilstrecke.
  - 'Für c): Im neuen System liegt das Erdgeschoss bei $x = +15\,\text{m}$ und der 2. Stock bei $x = +9\,\text{m}$, denn die Achse zeigt vom 5. Stock nach unten.'
gefuehrt:
  - text: Wie viele Meter fährt der Lift auf dem ersten Teil (Erdgeschoss bis 5. Stock)?
    teil: { typ: zahl, loesung: "15" }
    erklaerung: Von $0\,\text{m}$ bis $15\,\text{m}$ sind es $15\,\text{m}$.
  - text: Wie viele Meter fährt er auf dem zweiten Teil (5. Stock bis 2. Stock)?
    teil: { typ: zahl, loesung: "15-6" }
    erklaerung: Von $15\,\text{m}$ hinunter auf $6\,\text{m}$ sind es $9\,\text{m}$. Beim Weg zählt das positiv.
  - text: Im System „Achse nach unten, Ursprung im 5. Stock“ – bei welchem $x$ liegt das Erdgeschoss (in m)?
    teil: { typ: zahl, loesung: "15" }
    erklaerung: Das Erdgeschoss liegt $15\,\text{m}$ unter dem 5. Stock, und „unten“ ist hier die positive Richtung.
  - text: Bei welchem $x$ liegt in diesem System der 2. Stock (in m)?
    teil: { typ: zahl, loesung: "9" }
    erklaerung: Der 2. Stock liegt $15\,\text{m} - 6\,\text{m} = 9\,\text{m}$ unter dem 5. Stock.
  - text: Bilde jetzt Endort minus Anfangsort.
    erklaerung: $\Delta x = 9\,\text{m} - 15\,\text{m} = -6\,\text{m}$. Das Minus bedeutet hier „nach oben“, weil die Achse nach unten zeigt.
loesung: |
  **a) Weg:** Erst $15\,\text{m}$ hinauf, dann $15\,\text{m} - 6\,\text{m} = 9\,\text{m}$ hinunter: $s = 15\,\text{m} + 9\,\text{m} = 24\,\text{m}$.
  ---
  **b) Achse nach oben, Ursprung im Erdgeschoss:** Start $x_1 = 0$, Ende $x_2 = 6\,\text{m}$, also $\Delta x = 6\,\text{m} - 0 = +6\,\text{m}$. Plus heißt nach oben.
  ---
  **c) Achse nach unten, Ursprung im 5. Stock:** Das Erdgeschoss liegt bei $x_1 = +15\,\text{m}$, der 2. Stock bei $x_2 = +9\,\text{m}$. Also $\Delta x = 9\,\text{m} - 15\,\text{m} = -6\,\text{m}$. Minus heißt hier ebenfalls nach oben.
  ---
  **Probe:** In beiden Systemen ist der Betrag der Verschiebung $6\,\text{m}$, nur das Vorzeichen hängt von der Achsenrichtung ab. Der Weg ist in jedem System $24\,\text{m}$.
```

```aufgabe
id: p2-1-massenpunkt
titel: Wann passt das Modell Massenpunkt?
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  In welchen Fragen darf man den Körper als **Massenpunkt** behandeln? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Wie lange braucht ein Flugzeug von Wien nach New York?"
      - "Wie schnell dreht sich ein Rad eines Fahrrads?"
      - "In welcher Zeit umrundet der Mond die Erde?"
      - "Wie weit kippt ein Bus in einer scharfen Kurve zur Seite?"
    richtig: [0, 2]
    fehler:
      - wert: [0]
        meldung: Auch der Mond darf ein Massenpunkt sein. Er ist zwar groß, aber klein gegen seinen Abstand zur Erde, und gefragt ist nur seine Bahn. Ob das Modell passt, hängt von der **Frage** ab, nicht von der Größe.
      - wert: [0, 1, 2]
        meldung: Beim Rad geht es um die **Drehung**. Ein Punkt kann sich nicht um sich selbst drehen, also passt das Modell hier nicht.
      - wert: [0, 2, 3]
        meldung: Das Kippen des Busses ist eine Drehung des ausgedehnten Körpers. Ein Punkt kann nicht kippen.
hinweise:
  - Frage dich bei jeder Situation, ob Form, Ausdehnung oder Drehung des Körpers für die Antwort eine Rolle spielen.
  - Die Größe des Körpers allein entscheidet nichts. Entscheidend ist, ob er klein gegen die zurückgelegten Strecken ist und ob seine Drehung gefragt ist.
loesung: |
  **Ansatz:** Ein Massenpunkt hat keine Ausdehnung und kann sich nicht drehen. Das Modell passt, wenn nur die Bahn des Körpers als Ganzes gefragt ist.
  ---
  **Passt:** Flugzeug (seine Länge ist winzig gegen $7000\,\text{km}$ Flugstrecke) und Mond (gefragt ist nur die Bahn).
  ---
  **Passt nicht:** Rad und kippender Bus. In beiden Fällen ist gerade die Drehung des ausgedehnten Körpers gefragt. Merke: Auch ein riesiger Körper kann ein Massenpunkt sein, und ein kleiner Körper muss es nicht.
```

```aufgabe
id: p2-1-pendelbus
titel: Ein Pendelbus
niveau: 2
lernziel: 0
kompetenz: rechnen
angabe: |
  Ein Bus pendelt auf einer geraden Strecke zwischen der Haltestelle A ($x = 0$) und der Haltestelle B ($x = 6{,}5\,\text{km}$). Er startet in A, fährt nach B, zurück nach A und dann noch bis zur Mitte der Strecke.

  a) Welchen Weg legt er zurück (in km)?

  b) Wie groß ist seine Verschiebung (in km)?
teile:
  - typ: zahl
    label: a) Weg
    loesung: "6.5+6.5+3.25"
    einheit: "km"
    anzeige: '16{,}25'
    fehler:
      - wert: "3.25"
        meldung: Das ist die Verschiebung. Der Bus ist aber zweimal die ganze Strecke gefahren und dann noch die Hälfte.
      - wert: "6.5+3.25"
        meldung: Du hast eine Teilstrecke vergessen. Der Bus fährt A nach B, B nach A und dann A zur Mitte, das sind drei Teilstrecken.
  - typ: zahl
    label: b) Verschiebung
    loesung: "3.25-0"
    einheit: "km"
    anzeige: '3{,}25'
    fehler:
      - wert: "16.25"
        meldung: Das ist der Weg. Die Verschiebung vergleicht nur Ende und Anfang, egal wie oft der Bus dazwischen hin und her gefahren ist.
hinweise:
  - Zähle die Teilstrecken einzeln auf und notiere jeweils ihre Länge.
  - 'Für b) brauchst du nur den Endort. Der Anfangsort ist $x = 0$.'
loesung: |
  **Teilstrecken:** A nach B $6{,}5\,\text{km}$, B nach A $6{,}5\,\text{km}$, A bis zur Mitte $3{,}25\,\text{km}$.
  ---
  **a) Weg:** $s = 6{,}5\,\text{km} + 6{,}5\,\text{km} + 3{,}25\,\text{km} = 16{,}25\,\text{km}$.
  ---
  **b) Verschiebung:** Der Bus endet bei $x = 3{,}25\,\text{km}$ und startete bei $x = 0$, also $\Delta x = +3{,}25\,\text{km}$. Probe: Der Weg ist fünfmal so lang wie die Verschiebung, weil der Bus zweimal umgekehrt hat.
```

```aufgabe
id: p2-1-wanderung
titel: Eine Wanderung aus einer Ortstabelle
niveau: 3
lernziel: 0
kompetenz: modellieren
angabe: |
  Ein GPS-Gerät zeichnet den Ort einer Wanderin auf einem geraden Uferweg auf. Die $x$-Achse zeigt nach Osten, der Ursprung ist der Parkplatz. Zwischen zwei Messungen geht sie immer nur in eine Richtung.

  - $t = 0$: $x = 0$
  - $t = 10\,\text{min}$: $x = 600\,\text{m}$
  - $t = 20\,\text{min}$: $x = 1000\,\text{m}$
  - $t = 30\,\text{min}$: $x = 400\,\text{m}$
  - $t = 40\,\text{min}$: $x = -200\,\text{m}$

  a) Wie groß ist die Verschiebung zwischen $t = 0$ und $t = 40\,\text{min}$?

  b) Welchen Weg hat sie in diesen $40$ Minuten zurückgelegt?

  c) Wie groß ist die Verschiebung zwischen $t = 20\,\text{min}$ und $t = 40\,\text{min}$?
teile:
  - typ: zahl
    label: a) Verschiebung in m
    loesung: "-200-0"
    einheit: "m"
    anzeige: '-200'
    fehler:
      - wert: "200"
        meldung: Sie steht am Ende westlich vom Parkplatz, also entgegen der Achse. Das Vorzeichen muss negativ sein.
  - typ: zahl
    label: b) Weg in m
    loesung: "600+400+600+600"
    einheit: "m"
    anzeige: '2200'
    fehler:
      - wert: "200"
        meldung: Das ist der Betrag der Verschiebung. Die Wanderin ist aber bei $t = 20\,\text{min}$ umgekehrt. Rechne jede Teilstrecke einzeln.
      - wert: "1000"
        meldung: Das ist nur der Hinweg nach Osten. Nach $t = 20\,\text{min}$ geht die Wanderin noch $1200\,\text{m}$ zurück nach Westen, und auch dieser Teil zählt zum Weg.
  - typ: zahl
    label: c) Verschiebung in m
    loesung: "-200-1000"
    einheit: "m"
    anzeige: '-1200'
    fehler:
      - wert: "-200+1000"
        meldung: Endort minus Anfangsort, also $-200\,\text{m} - 1000\,\text{m}$, nicht plus.
hinweise:
  - Zeichne die fünf Orte auf eine Zahlengerade. Wo kehrt die Wanderin um?
  - 'Der Weg ist die Summe der Beträge aller Änderungen von Messung zu Messung, also $|600 - 0| + |1000 - 600| + \dots$ in Metern.'
loesung: |
  **Modell:** Zwischen zwei Messungen geht sie nur in eine Richtung. Der Weg eines Zeitabschnitts ist deshalb der Betrag seiner Ortsänderung.
  ---
  **a)** $\Delta x = x(40) - x(0) = -200\,\text{m} - 0\,\text{m} = -200\,\text{m}$, also $200\,\text{m}$ nach Westen.
  ---
  **b)** Teilstrecken: $600\,\text{m}$, $400\,\text{m}$, $|400 - 1000|\,\text{m} = 600\,\text{m}$ und $|-200 - 400|\,\text{m} = 600\,\text{m}$. Summe $s = 2200\,\text{m}$.
  ---
  **c)** $\Delta x = x(40) - x(20) = -200\,\text{m} - 1000\,\text{m} = -1200\,\text{m}$.
  ---
  **Probe:** Bis $t = 20\,\text{min}$ geht sie $1000\,\text{m}$ nach Osten, danach $1200\,\text{m}$ nach Westen. $1000\,\text{m} + 1200\,\text{m} = 2200\,\text{m}$ Weg, und $1000\,\text{m} - 1200\,\text{m} = -200\,\text{m}$ Verschiebung. Beides passt.
```

```aufgabe
id: p2-1-weg-kleiner
titel: Weg und Verschiebung begründen
niveau: 2
lernziel: 0
kompetenz: begruenden
angabe: |
  Ein Schüler behauptet: „Bei einer Runde auf der $400$-m-Bahn im Stadion bin ich $0\,\text{m}$ gelaufen, denn ich bin wieder am Start.“ Was ist an der Aussage richtig, was falsch? Verwende die Fachbegriffe Weg und Verschiebung.
teile:
  - typ: text
    muster: |
      Richtig ist: Die Verschiebung ist null, weil Anfangs- und Endort gleich sind. Falsch ist „$0\,\text{m}$ gelaufen“:
      Der zurückgelegte Weg ist die Länge der ganzen Bahn, also $400\,\text{m}$. Der Weg ist nie kleiner als der Betrag der
      Verschiebung, und er nimmt beim Laufen ständig zu.
hinweise:
  - Was misst die Verschiebung, was misst der Weg?
  - Der Schüler verwechselt die beiden Größen. Welche von beiden ist bei einer geschlossenen Runde null?
loesung: |
  **Ansatz:** Verschiebung $=$ Endort minus Anfangsort. Weg $=$ Länge der ganzen gelaufenen Strecke.
  ---
  **Verschiebung:** Start und Ziel sind derselbe Punkt, also ist die Verschiebung null. Dieser Teil der Aussage stimmt.
  ---
  **Weg:** Der Schüler ist die ganze Bahn entlanggelaufen, also $400\,\text{m}$. „$0\,\text{m}$ gelaufen“ verwechselt den Weg mit der Verschiebung.
```

```aufgabe
id: p2-1-ampel-vorzeichen
titel: Vor und hinter der Ampel
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Der Ursprung liegt an der Haltelinie einer Ampel, die $x$-Achse zeigt in Fahrtrichtung. Ein Moped steht $25\,\text{m}$ **vor** der Ampel und fährt ohne Umkehr bis $60\,\text{m}$ **hinter** die Ampel. Wie groß ist seine Verschiebung?
teile:
  - typ: zahl
    loesung: "60-(-25)"
    einheit: "m"
    anzeige: '85'
    fehler:
      - wert: "60-25"
        meldung: Du hast den Anfangsort als $+25\,\text{m}$ eingesetzt. „Vor der Ampel“ liegt entgegen der Fahrtrichtung, also bei $x_1 = -25\,\text{m}$.
hinweise:
  - 'Schreib zuerst beide Orte mit Vorzeichen auf: $x_1 = ?$ und $x_2 = ?$.'
loesung: |
  **Orte mit Vorzeichen:** Vor der Ampel liegt entgegen der Achse, also $x_1 = -25\,\text{m}$. Hinter der Ampel ist $x_2 = +60\,\text{m}$.
  ---
  **Verschiebung:** $\Delta x = x_2 - x_1 = 60\,\text{m} - (-25\,\text{m}) = 85\,\text{m}$. Probe: $25\,\text{m}$ bis zur Linie und $60\,\text{m}$ danach ergeben zusammen $85\,\text{m}$.
```

## Geschwindigkeit

```aufgabe
id: p2-2-check
art: check
titel: "Vorwissen: mittlere Änderungsrate"
niveau: 1
angabe: |
  Ein Wassertank enthält um 8 Uhr $200$ Liter und um 12 Uhr $80$ Liter. Um wie viele Liter pro Stunde hat sich die Wassermenge im Mittel geändert? Achte auf das Vorzeichen.
teile:
  - typ: zahl
    loesung: "(80-200)/(12-8)"
    einheit: "l/h"
    anzeige: '-30'
    fehler:
      - wert: "30"
        meldung: Der Betrag stimmt, aber die Wassermenge **nimmt ab**. Eine Abnahme hat eine negative Änderungsrate.
      - wert: "(80-200)/12"
        meldung: Du hast durch die Uhrzeit $12$ geteilt. Teilen musst du durch die **Zeitspanne**, also $12 - 8 = 4$ Stunden.
hinweise:
  - 'Mittlere Änderungsrate $= \dfrac{\text{Endwert} - \text{Anfangswert}}{\text{Endzeit} - \text{Anfangszeit}}$.'
loesung: |
  Die Änderung der Wassermenge ist $80\,\text{l} - 200\,\text{l} = -120\,\text{l}$, die Zeitspanne $4\,\text{h}$.
  ---
  Mittlere Änderungsrate: $\dfrac{-120\,\text{l}}{4\,\text{h}} = -30\,\text{l/h}$. Genau dieselbe Rechnung mit Ort statt Wassermenge liefert gleich die mittlere Geschwindigkeit. Wiederholen: [9.1 Änderungen messen](/lernen/mathe3/differentialrechnung/aenderungen-messen-absolute-relative-und-mittlere-aenderung).
```

### Mittlere Geschwindigkeit

Die Geschwindigkeit sagt, wie schnell sich der Ort ändert. Am einfachsten misst man sie über eine ganze
Strecke: Man teilt die Ortsänderung durch die dafür gebrauchte Zeit.

:::definition[Mittlere Geschwindigkeit]
Die **mittlere Geschwindigkeit** im Zeitintervall von $t_1$ bis $t_2$ ist
$$\bar v = \frac{\Delta x}{\Delta t} = \frac{x(t_2) - x(t_1)}{t_2 - t_1}.$$
Dabei ist $\Delta x$ die Verschiebung und $\Delta t = t_2 - t_1$ die Dauer. Der Strich über dem $v$ bedeutet
„Mittelwert“. Die SI-Einheit ist $\text{m/s}$. Es gilt $1\,\text{m/s} = 3{,}6\,\text{km/h}$.

**Beispiel:** Du fährst in $1{,}5$ Stunden $120\,\text{km}$ nach Linz. Deine mittlere Geschwindigkeit ist
$120\,\text{km} / 1{,}5\,\text{h} = 80\,\text{km/h}$, auch wenn du zwischendurch an einer Ampel gestanden bist.

**Kein Beispiel:** Die Anzeige des Tachos ist **keine** mittlere Geschwindigkeit. Sie zeigt, wie schnell
du **in diesem Augenblick** fährst.
:::

Die mittlere Geschwindigkeit verrät nichts darüber, was zwischen $t_1$ und $t_2$ passiert ist. Wer
$80\,\text{km/h}$ im Mittel fährt, kann zeitweise $130\,\text{km/h}$ und zeitweise $0$ gefahren sein.

Typische Werte:

- Fußgänger: etwa $1{,}4\,\text{m/s}$, das sind rund $5\,\text{km/h}$.
- Radfahrer: etwa $5\,\text{m/s}$, also $18\,\text{km/h}$.
- Weltklasse-Sprinter: etwa $10\,\text{m/s}$ im Mittel über $100\,\text{m}$.
- Auto auf der Autobahn: $130\,\text{km/h}$, also $36\,\text{m/s}$.
- Verkehrsflugzeug: etwa $250\,\text{m/s}$, Schall in Luft: $340\,\text{m/s}$.

Sie helfen bei der Plausibilitätsprüfung: Ein Radfahrer mit $50\,\text{m/s}$ ist ein Rechenfehler.

:::achtung[Fehler: den Mittelwert der Geschwindigkeiten bilden]
Ein Auto fährt $60\,\text{km}$ mit $60\,\text{km/h}$ hin und dieselben $60\,\text{km}$ mit $40\,\text{km/h}$
zurück. Ein Schüler rechnet: „Durchschnitt $= (60 + 40)/2 = 50\,\text{km/h}$.“

Gemeint ist das **mittlere Tempo**: Gesamtweg durch Gesamtzeit. (Die mittlere Geschwindigkeit $\Delta x/\Delta t$
ist null, das Auto steht wieder am Start.) Die Hinfahrt dauert $1\,\text{h}$, die Rückfahrt $1{,}5\,\text{h}$.
Das ergibt $120\,\text{km}$ in $2{,}5\,\text{h}$, also $48\,\text{km/h}$. Man verbringt mehr
**Zeit** mit der langsamen Fahrt, deshalb zählt sie stärker. Den einfachen Mittelwert darf man nur bilden,
wenn beide Abschnitte gleich **lange dauern**.
:::

:::achtung[Fehler: Ort durch Zeit statt Ortsänderung durch Zeitspanne]
Eine Läuferin ist bei $t = 0$ an der Markierung $x = 100\,\text{m}$ und bei $t = 20\,\text{s}$ an der Markierung
$x = 260\,\text{m}$. Eine Schülerin rechnet: „$v = 260\,\text{m} / 20\,\text{s} = 13\,\text{m/s}$.“

Sie hat den **Ort** durch die Zeit geteilt. Gelaufen ist die Läuferin aber nur von $100\,\text{m}$ bis
$260\,\text{m}$. Richtig ist $\bar v = (260\,\text{m} - 100\,\text{m}) / 20\,\text{s} = 8\,\text{m/s}$. Die Formel
$v = x/t$ stimmt nur, wenn der Körper bei $t = 0$ im Ursprung startet.
:::

```aufgabe
id: p2-mittlere-geschw
titel: Mittlere Geschwindigkeit eines Zuges
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Ein Zug legt $135\,\text{km}$ in $1\,\text{h}\;30\,\text{min}$ zurück. Berechne die mittlere Geschwindigkeit in km/h und in m/s. Runde in m/s auf eine Nachkommastelle.
teile:
  - typ: zahl
    label: in km/h
    loesung: "135/1.5"
    einheit: "km/h"
    anzeige: '90'
    fehler:
      - wert: "135/1.3"
        meldung: „1 h 30 min“ sind nicht $1{,}3\,\text{h}$. Eine halbe Stunde ist $0{,}5\,\text{h}$, also sind es $1{,}5\,\text{h}$.
      - wert: "135*1.5"
        meldung: Geschwindigkeit ist Strecke **durch** Zeit. Prüfe die Einheit, $\text{km}\cdot\text{h}$ ist keine Geschwindigkeit.
  - typ: zahl
    label: in m/s
    loesung: "135/1.5/3.6"
    einheit: "m/s"
    anzeige: '25'
    fehler:
      - wert: "135/1.5*3.6"
        meldung: Du hast mit $3{,}6$ multipliziert. Die Zahl in m/s ist immer kleiner als die in km/h, also teilen.
hinweise:
  - 'Rechne zuerst die Zeit in Stunden um: $30\,\text{min} = 0{,}5\,\text{h}$.'
loesung: |
  **Zeit in Stunden:** $1\,\text{h}\;30\,\text{min} = 1{,}5\,\text{h}$. Dann ist $\bar v = \dfrac{135\,\text{km}}{1{,}5\,\text{h}} = 90\,\text{km/h}$.
  ---
  **In m/s:** $90\,\text{km/h} = \dfrac{90}{3{,}6}\,\text{m/s} = 25\,\text{m/s}$. Plausibel: ein Regionalzug zwischen zwei Städten.
```

```aufgabe
id: p2-2-handy
titel: Blindflug beim Blick aufs Handy
niveau: 1
lernziel: 1
kompetenz: modellieren
angabe: |
  Eine Autofahrerin schaut in der Stadt bei $50\,\text{km/h}$ für etwa $2\,\text{s}$ auf ihr Handy. Schätze ab, wie viele Meter sie in dieser Zeit „blind“ fährt. Runde auf ganze Meter.
teile:
  - typ: zahl
    loesung: "50/3.6*2"
    einheit: "m"
    anzeige: '28'
    toleranz: 1
    fehler:
      - wert: "50*2"
        meldung: Du hast km/h mit Sekunden multipliziert. Die Einheiten passen nicht zusammen. Rechne zuerst $50\,\text{km/h}$ in m/s um.
hinweise:
  - 'Rechne $50\,\text{km/h}$ in m/s um und multipliziere mit der Zeit, denn bei konstanter Geschwindigkeit gilt $s = v\,t$.'
loesung: |
  **Modell:** In den zwei Sekunden ändert sich die Geschwindigkeit kaum. Wir rechnen mit gleichförmiger Bewegung, $s = v\,t$.
  ---
  **Rechnung:** $v = 50/3{,}6\,\text{m/s} = 13{,}9\,\text{m/s}$, also $s = 13{,}9\,\text{m/s}\cdot 2\,\text{s} \approx 28\,\text{m}$. Die Sekunden kürzen sich, es bleiben Meter.
  ---
  **Einordnung:** Das sind etwa sechs Autolängen oder die Breite einer großen Kreuzung. In dieser Zeit kann ein Kind auf die Fahrbahn laufen.
```

### Momentangeschwindigkeit

Der Tacho zeigt nicht die mittlere Geschwindigkeit der letzten Stunde, sondern die Geschwindigkeit
**jetzt**. Wie bekommt man diese „Geschwindigkeit in einem Augenblick“, wenn in einem einzigen Augenblick
gar keine Strecke zurückgelegt wird?

Die Idee: Man berechnet die mittlere Geschwindigkeit über immer **kürzere** Zeitintervalle. Diese Werte
nähern sich einer festen Zahl. Diese Zahl nennt man die Momentangeschwindigkeit.

:::beispiel[Die Geschwindigkeit nach 3 Sekunden, Schritt für Schritt]
Ein Wagen bewegt sich nach $x(t) = 2t^2$ (mit $x$ in m und $t$ in s). Wie schnell ist er bei $t = 3\,\text{s}$?

**Schritt 1, ein langes Intervall:** Von $3\,\text{s}$ bis $4\,\text{s}$ ist $\bar v = \dfrac{x(4) - x(3)}{1\,\text{s}} = \dfrac{32\,\text{m} - 18\,\text{m}}{1\,\text{s}} = 14\,\text{m/s}$.

**Schritt 2, kürzer:** Von $3\,\text{s}$ bis $3{,}1\,\text{s}$ ist $\bar v = \dfrac{19{,}22\,\text{m} - 18\,\text{m}}{0{,}1\,\text{s}} = 12{,}2\,\text{m/s}$.

**Schritt 3, noch kürzer:** Von $3\,\text{s}$ bis $3{,}01\,\text{s}$ ist $\bar v = \dfrac{18{,}1202\,\text{m} - 18\,\text{m}}{0{,}01\,\text{s}} = 12{,}02\,\text{m/s}$.

**Schritt 4, Muster erkennen:** Die Werte nähern sich $12\,\text{m/s}$. Das ist die Momentangeschwindigkeit
bei $t = 3\,\text{s}$. Die Ableitung bestätigt es: $x'(t) = 4t$, also $x'(3) = 12\,\text{m/s}$.
:::

:::definition[Momentangeschwindigkeit]
Die **Momentangeschwindigkeit** ist der Grenzwert der mittleren Geschwindigkeit für immer kürzere Intervalle:
$$v(t) = \lim_{\Delta t \to 0}\frac{\Delta x}{\Delta t} = \frac{\dd x}{\dd t} = \dot x(t).$$
„$\lim_{\Delta t \to 0}$“ liest man „Grenzwert für $\Delta t$ gegen null“. $\dfrac{\dd x}{\dd t}$ und $\dot x$
(gesprochen „x Punkt“) sind zwei Schreibweisen für die **Ableitung des Ortes nach der Zeit**.

**Beispiel:** Bei $x(t) = 2t^2$ ist $v(t) = 4t$, also nach $3\,\text{s}$ genau $12\,\text{m/s}$.

**Kein Beispiel:** Der Quotient $x(3)/3 = 18\,\text{m}/3\,\text{s} = 6\,\text{m/s}$ ist **nicht** die
Momentangeschwindigkeit. Er ist die mittlere Geschwindigkeit der ersten drei Sekunden.
:::

Das ist genau der Übergang von der Sekante zur Tangente aus dem Mathematikkurs, Abschnitt
[9.2 Von der Sekante zur Tangente](/lernen/mathe3/differentialrechnung/von-der-sekante-zur-tangente-die-ableitung-an-einer-stelle).
Im **s-t-Diagramm** (Ort über der Zeit) gilt deshalb:

- Die **mittlere** Geschwindigkeit ist die Steigung der **Sekante** durch zwei Punkte des Graphen.
- Die **Momentan**geschwindigkeit ist die Steigung der **Tangente** in einem Punkt.

```plot
x: [0, 5]
y: [0, 50]
achsen: { x: "t in s", y: "x in m" }
graphen:
  - { f: "2*x^2", label: "x(t) = 2t²", farbe: 0, von: 0, bis: 5 }
  - { f: "14*x - 24", label: "Sekante, Steigung 14 m/s", farbe: 1, von: 2, bis: 5, gestrichelt: true }
  - { f: "12*x - 18", label: "Tangente, Steigung 12 m/s", farbe: 2, von: 1.8, bis: 5 }
punkte:
  - { x: 3, y: 18, label: "t = 3 s" }
  - { x: 4, y: 32 }
beschriftung: "s-t-Diagramm von x(t) = 2t². Die gestrichelte Sekante durch die Punkte bei 3 s und 4 s hat die Steigung 14 m/s, das ist die mittlere Geschwindigkeit. Die Tangente bei 3 s hat die Steigung 12 m/s, das ist die Momentangeschwindigkeit."
```

Physikalisch liest man daraus: Ein steiler Graph bedeutet schnelle Bewegung, ein waagrechter Graph
Stillstand, ein fallender Graph Bewegung in negative Richtung.

### Geschwindigkeit hat eine Richtung

Die Geschwindigkeit ist ein **Vektor**, sie hat Betrag und Richtung. Bei einer Bewegung auf einer Geraden
steckt die Richtung im Vorzeichen. $v = -3\,\text{m/s}$ heißt: $3\,\text{m/s}$ entgegen der Achsenrichtung.
Den Betrag $|v|$ nennt man im Alltag „Tempo“. Der Tacho zeigt nur den Betrag, er weiß nichts von deinem
Koordinatensystem.

### Die gleichförmige Bewegung

Ist die Geschwindigkeit konstant, legt ein Körper in gleichen Zeiten gleiche Strecken zurück. Man nennt das
eine **gleichförmige Bewegung**.

:::satz[Gleichförmige Bewegung]
Bei konstanter Geschwindigkeit $v$ und Anfangsort $x_0$ (Ort bei $t = 0$) gilt
$$x(t) = x_0 + v\,t.$$
Das s-t-Diagramm ist eine **Gerade** mit der Steigung $v$ und dem Achsenabschnitt $x_0$. Das v-t-Diagramm
ist eine **waagrechte Linie** in der Höhe $v$.
:::

```plot
x: [0, 8]
y: [-1, 8]
achsen: { x: "t in s", y: "x in m" }
strecken:
  - { von: [0, 0], nach: [2, 6], farbe: 0 }
  - { von: [2, 6], nach: [5, 6], farbe: 0 }
  - { von: [5, 6], nach: [7, 0], farbe: 0 }
punkte:
  - { x: 2, y: 6, label: "A" }
  - { x: 5, y: 6, label: "B" }
beschriftung: "s-t-Diagramm in drei Phasen: bis A steigt der Ort von 0 auf 6 m in 2 s, von A bis B bleibt er bei 6 m, danach fällt er in 2 s auf 0 zurück."
```

:::beispiel[Ein Spaziergang in drei Phasen]
Das s-t-Diagramm über diesem Kasten zeigt eine Person auf einem geraden Weg. Wie schnell ist sie in jeder Phase?

**Phase 1, bis A:** Steigung $\dfrac{6\,\text{m} - 0\,\text{m}}{2\,\text{s} - 0\,\text{s}} = 3\,\text{m/s}$. Die Person geht in positive Richtung.

**Phase 2, A bis B:** Der Graph ist waagrecht, Steigung $0$. Die Person steht $3\,\text{s}$ lang still.

**Phase 3, nach B:** Steigung $\dfrac{0\,\text{m} - 6\,\text{m}}{7\,\text{s} - 5\,\text{s}} = -3\,\text{m/s}$. Sie geht mit
gleichem Tempo zurück.

**Antwort:** $+3\,\text{m/s}$, $0$, $-3\,\text{m/s}$. Das Diagramm ist **kein Bild des Weges**. Der fallende Teil
heißt nicht „bergab“, sondern „zurück in negative Richtung“.
:::

:::merke
- Mittlere Geschwindigkeit $\bar v = \Delta x / \Delta t$: Steigung der **Sekante** im s-t-Diagramm.
- Momentangeschwindigkeit $v = \dd x/\dd t$: Steigung der **Tangente** im s-t-Diagramm.
- Gleichförmige Bewegung: $x(t) = x_0 + v\,t$, das s-t-Diagramm ist eine Gerade.
- Mittlere Geschwindigkeit $=$ **Gesamtverschiebung durch Gesamtzeit**, mittleres Tempo $=$ **Gesamtweg durch Gesamtzeit**. Nie einfach die Geschwindigkeiten der Teilstrecken mitteln.
:::

```reflexion
frage: Im s-t-Diagramm schneiden sich die Graphen zweier Radfahrer in einem Punkt. Haben die beiden dort dieselbe Geschwindigkeit? Erkläre.
antwort: |
  Nein, nicht unbedingt. Ein Schnittpunkt im s-t-Diagramm heißt nur: Zur selben Zeit sind beide am selben **Ort**, sie
  begegnen einander oder einer überholt den anderen. Die Geschwindigkeit ist die **Steigung**. Gleich schnell sind die
  beiden dort nur, wenn die Graphen dort gleich steil sind, sich also berühren statt zu schneiden.
```

```aufgabe
id: p2-st-ablesen
titel: Geschwindigkeit aus dem s-t-Diagramm
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Das s-t-Diagramm zeigt einen Roboter, der auf einer Schiene fährt. Lies die Geschwindigkeit in den drei Phasen ab (in m/s).
plot:
  x: [0, 11]
  y: [-5, 9]
  achsen: { x: "t in s", y: "x in m" }
  strecken:
    - { von: [0, 0], nach: [4, 8], farbe: 0 }
    - { von: [4, 8], nach: [6, 8], farbe: 0 }
    - { von: [6, 8], nach: [10, -4], farbe: 0 }
  punkte:
    - { x: 4, y: 8 }
    - { x: 6, y: 8 }
    - { x: 10, y: -4 }
teile:
  - typ: zahl
    label: 0 bis 4 s
    loesung: "8/4"
    einheit: "m/s"
    anzeige: '2'
    fehler:
      - wert: "4/8"
        meldung: Du hast Zeit durch Ort geteilt. Die Geschwindigkeit ist $\Delta x / \Delta t$, also Meter durch Sekunden.
  - typ: zahl
    label: 4 bis 6 s
    loesung: "0"
    einheit: "m/s"
    fehler:
      - wert: "8"
        meldung: Das ist der Ort, an dem der Roboter steht. Seine Geschwindigkeit ist die **Steigung**, und die ist bei einem waagrechten Graphen null.
  - typ: zahl
    label: 6 bis 10 s
    loesung: "(-4-8)/(10-6)"
    einheit: "m/s"
    anzeige: '-3'
    fehler:
      - wert: "3"
        meldung: Der Betrag stimmt. Der Graph fällt aber, der Roboter fährt also in negative Richtung. Die Geschwindigkeit ist negativ.
      - wert: "-4/4"
        meldung: Du hast den Endort $-4\,\text{m}$ durch die Dauer geteilt. Nimm die **Ortsänderung**, $-4\,\text{m} - 8\,\text{m} = -12\,\text{m}$.
hinweise:
  - 'Lies in jeder Phase Anfangs- und Endpunkt ab und bilde $\Delta x / \Delta t$.'
loesung: |
  **Ansatz:** Im s-t-Diagramm ist die Geschwindigkeit die Steigung, $v = \Delta x / \Delta t$.
  ---
  **0 bis 4 s:** $\dfrac{8\,\text{m} - 0\,\text{m}}{4\,\text{s}} = 2\,\text{m/s}$. **4 bis 6 s:** waagrecht, also $0\,\text{m/s}$.
  ---
  **6 bis 10 s:** $\dfrac{-4\,\text{m} - 8\,\text{m}}{10\,\text{s} - 6\,\text{s}} = \dfrac{-12\,\text{m}}{4\,\text{s}} = -3\,\text{m/s}$. Der Roboter fährt schneller zurück, als er hingefahren ist, und landet hinter dem Start.
```

```aufgabe
id: p2-durchschnitt-falle
titel: Die Durchschnittsfalle
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Eine Motorradfahrerin fährt die $45\,\text{km}$ von A nach B mit $90\,\text{km/h}$ und auf derselben Strecke zurück mit $60\,\text{km/h}$. Wie groß ist ihre Durchschnittsgeschwindigkeit (Gesamtweg durch Gesamtzeit) für Hin- und Rückfahrt?
teile:
  - typ: zahl
    loesung: "90/(45/90+45/60)"
    einheit: "km/h"
    anzeige: '72'
    fehler:
      - wert: "(90+60)/2"
        meldung: Das ist der einfache Mittelwert. Sie ist aber länger mit $60\,\text{km/h}$ unterwegs als mit $90\,\text{km/h}$. Rechne die beiden Fahrzeiten aus.
      - wert: "45/(45/90+45/60)"
        meldung: Du hast nur eine Strecke durch die Gesamtzeit geteilt. Hin und zurück sind zusammen $90\,\text{km}$.
hinweise:
  - Berechne zuerst die Fahrzeiten für Hin- und Rückfahrt einzeln.
  - Teile dann den gesamten Weg durch die gesamte Zeit.
gefuehrt:
  - text: Wie lange dauert die Hinfahrt in Stunden?
    teil: { typ: zahl, loesung: "45/90" }
    erklaerung: $t_1 = \dfrac{45\,\text{km}}{90\,\text{km/h}} = 0{,}5\,\text{h}$.
  - text: Wie lange dauert die Rückfahrt in Stunden?
    teil: { typ: zahl, loesung: "45/60" }
    erklaerung: $t_2 = \dfrac{45\,\text{km}}{60\,\text{km/h}} = 0{,}75\,\text{h}$. Die langsame Fahrt dauert länger.
  - text: Wie lang ist die gesamte Strecke in km?
    teil: { typ: zahl, loesung: "90" }
    erklaerung: Hin und zurück sind $2\cdot 45\,\text{km} = 90\,\text{km}$.
  - text: Teile jetzt Gesamtweg durch Gesamtzeit.
    teil: { typ: zahl, loesung: "90/1.25" }
    erklaerung: Durchschnittsgeschwindigkeit $= \dfrac{90\,\text{km}}{1{,}25\,\text{h}} = 72\,\text{km/h}$, also weniger als der einfache Mittelwert $75\,\text{km/h}$.
loesung: |
  **Ansatz:** Durchschnittsgeschwindigkeit ist Gesamtweg durch Gesamtzeit. Die Zeiten sind verschieden lang, deshalb darf man die Geschwindigkeiten nicht einfach mitteln.
  ---
  **Zeiten:** $t_1 = \dfrac{45\,\text{km}}{90\,\text{km/h}} = 0{,}5\,\text{h}$ und $t_2 = \dfrac{45\,\text{km}}{60\,\text{km/h}} = 0{,}75\,\text{h}$, zusammen $1{,}25\,\text{h}$.
  ---
  **Ergebnis:** Durchschnittsgeschwindigkeit $= \dfrac{90\,\text{km}}{1{,}25\,\text{h}} = 72\,\text{km/h}$. Probe: Das liegt näher bei $60$ als bei $90$, weil die langsame Fahrt länger dauert. Beachte: Gefragt war ausdrücklich Gesamtweg durch Gesamtzeit, also das mittlere Tempo. Die mittlere Geschwindigkeit $\Delta x/\Delta t$ wäre null, weil die Fahrerin wieder in A ankommt.
```

```aufgabe
id: p2-2-sekante
titel: Sekante und Tangente einer Parabel
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Ein Spielzeugauto bewegt sich nach $x(t) = 3t^2$ ($x$ in m, $t$ in s).

  a) Berechne die mittlere Geschwindigkeit zwischen $t = 1\,\text{s}$ und $t = 3\,\text{s}$.

  b) Berechne die Momentangeschwindigkeit bei $t = 2\,\text{s}$.

  c) Berechne die Momentangeschwindigkeit bei $t = 3\,\text{s}$.
teile:
  - typ: zahl
    label: a) mittlere Geschwindigkeit
    loesung: "(3*3^2-3*1^2)/(3-1)"
    einheit: "m/s"
    anzeige: '12'
    fehler:
      - wert: "3*3^2/3"
        meldung: Du hast den Ort bei $3\,\text{s}$ durch $3\,\text{s}$ geteilt. Gefragt ist das Intervall **ab** $1\,\text{s}$. Nimm die Ortsänderung $x(3) - x(1)$ und die Dauer $2\,\text{s}$.
  - typ: zahl
    label: b) v(2 s)
    loesung: "6*2"
    einheit: "m/s"
    anzeige: '12'
    fehler:
      - wert: "3*2^2/2"
        meldung: Das ist die mittlere Geschwindigkeit von $0$ bis $2\,\text{s}$. Für den Augenblick brauchst du die Ableitung.
  - typ: zahl
    label: c) v(3 s)
    loesung: "6*3"
    einheit: "m/s"
    anzeige: '18'
    fehler:
      - wert: "3*3^2/3"
        meldung: Ort durch Zeit ist die mittlere Geschwindigkeit seit dem Start, nicht die Geschwindigkeit bei $3\,\text{s}$.
hinweise:
  - 'Für a): $\bar v = \dfrac{x(3) - x(1)}{3\,\text{s} - 1\,\text{s}}$.'
  - 'Für b) und c): Leite ab. Aus $x(t) = 3t^2$ folgt $v(t) = 6t$.'
loesung: |
  **a)** $x(1) = 3\,\text{m}$ und $x(3) = 27\,\text{m}$, also $\bar v = \dfrac{27\,\text{m} - 3\,\text{m}}{2\,\text{s}} = 12\,\text{m/s}$. Das ist die Steigung der Sekante.
  ---
  **b)** Die Momentangeschwindigkeit ist die Ableitung: $v(t) = x'(t) = 6t$ in m/s. Also $v(2\,\text{s}) = 12\,\text{m/s}$.
  ---
  **c)** $v(3\,\text{s}) = 6\cdot 3\,\text{m/s} = 18\,\text{m/s}$.
  ---
  **Beobachtung:** Die mittlere Geschwindigkeit von $1$ bis $3\,\text{s}$ ist gleich der Momentangeschwindigkeit in der Intervallmitte. Das gilt für jede Parabel. Im Abschnitt [2.4 Gleichmäßig beschleunigte Bewegung](/lernen/physik1/kinematik/gleichmaessig-beschleunigte-bewegung) siehst du, dass genau diese Bewegungen eine konstante Beschleunigung haben.
```

```aufgabe
id: p2-2-tangente-ablesen
titel: Momentangeschwindigkeit aus einer Tangente ablesen
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: |
  Das s-t-Diagramm zeigt die Bewegung eines Radfahrers (blau) und die Tangente bei $t = 2\,\text{s}$ (orange). Die Tangente geht durch die Punkte $(2\,\text{s} \mid 3\,\text{m})$ und $(4\,\text{s} \mid 7\,\text{m})$.

  a) Wie groß ist die Momentangeschwindigkeit bei $t = 2\,\text{s}$?

  b) Wie groß ist die mittlere Geschwindigkeit von $t = 0$ bis $t = 2\,\text{s}$? Der Graph beginnt bei $x = 1\,\text{m}$.
plot:
  x: [0, 5]
  y: [0, 14]
  achsen: { x: "t in s", y: "x in m" }
  graphen:
    - { f: "0.5*x^2 + 1", farbe: 0, von: 0, bis: 5 }
    - { f: "2*x - 1", farbe: 1, von: 0.5, bis: 5 }
  punkte:
    - { x: 2, y: 3 }
    - { x: 4, y: 7 }
    - { x: 0, y: 1 }
teile:
  - typ: zahl
    label: a) v(2 s)
    loesung: "(7-3)/(4-2)"
    einheit: "m/s"
    anzeige: '2'
    fehler:
      - wert: "3/2"
        meldung: Du hast Ort durch Zeit gerechnet. Die Momentangeschwindigkeit ist die **Steigung der Tangente**, also Höhenunterschied durch Zeitunterschied zwischen zwei Punkten auf der Tangente.
  - typ: zahl
    label: b) mittlere Geschwindigkeit 0 bis 2 s
    loesung: "(3-1)/2"
    einheit: "m/s"
    anzeige: '1'
    fehler:
      - wert: "3/2"
        meldung: Der Radfahrer startet nicht bei $x = 0$, sondern bei $x = 1\,\text{m}$. Nimm die Ortsänderung $3\,\text{m} - 1\,\text{m}$.
      - wert: "2"
        meldung: Das ist die Momentangeschwindigkeit bei $2\,\text{s}$. Gefragt ist die mittlere Geschwindigkeit über die ersten zwei Sekunden, also die Steigung der Sekante von $(0 \mid 1)$ nach $(2 \mid 3)$.
hinweise:
  - 'Für a) bildest du die Steigung der Tangente aus ihren zwei gegebenen Punkten.'
  - 'Für b) verbindest du die Punkte des Graphen bei $t = 0$ und $t = 2\,\text{s}$ zu einer Sekante und bildest deren Steigung.'
loesung: |
  **Ansatz:** Tangentensteigung ergibt die Momentangeschwindigkeit, Sekantensteigung die mittlere Geschwindigkeit.
  ---
  **a)** $v(2\,\text{s}) = \dfrac{7\,\text{m} - 3\,\text{m}}{4\,\text{s} - 2\,\text{s}} = 2\,\text{m/s}$.
  ---
  **b)** $\bar v = \dfrac{3\,\text{m} - 1\,\text{m}}{2\,\text{s} - 0\,\text{s}} = 1\,\text{m/s}$. Der Radfahrer wird schneller, deshalb ist die Geschwindigkeit am Ende größer als der Mittelwert davor.
```

```aufgabe
id: p2-2-abschnittskontrolle
titel: Abschnittskontrolle im Tunnel
niveau: 3
lernziel: 1
kompetenz: modellieren
angabe: |
  In einem $2{,}5\,\text{km}$ langen Tunnel gilt $80\,\text{km/h}$. Eine **Abschnittskontrolle** misst, wann ein Auto in den Tunnel einfährt und wann es ihn verlässt. Ein Auto braucht $1\,\text{min}\;45\,\text{s}$.

  a) Welche mittlere Geschwindigkeit in km/h misst die Anlage? Runde auf eine Nachkommastelle.

  b) Wie viele Sekunden muss die Durchfahrt mindestens dauern, damit keine Strafe droht?

  c) Ein anderer Fahrer braucht genau $120\,\text{s}$. Kann man daraus schließen, dass er nie schneller als $80\,\text{km/h}$ war? Begründe.
teile:
  - typ: zahl
    label: a) mittlere Geschwindigkeit
    loesung: "2.5/(105/3600)"
    einheit: "km/h"
    anzeige: '85{,}7'
    fehler:
      - wert: "2.5/1.45*60"
        meldung: „1 min 45 s“ sind nicht $1{,}45\,\text{min}$. $45\,\text{s}$ sind $0{,}75\,\text{min}$, insgesamt also $105\,\text{s}$.
      - wert: "2500/105"
        meldung: Das ist die Geschwindigkeit in m/s. Gefragt ist km/h, also noch mit $3{,}6$ multiplizieren.
  - typ: zahl
    label: b) Mindestdauer
    loesung: "2.5/80*3600"
    einheit: "s"
    anzeige: '112{,}5'
    fehler:
      - wert: "80/2.5"
        meldung: Zeit ist Strecke **durch** Geschwindigkeit, $t = s/v$, nicht umgekehrt.
  - typ: text
    label: c) Begründung
    muster: |
      Nein. Die Anlage misst nur die **mittlere** Geschwindigkeit, hier $2{,}5\,\text{km}$ in $120\,\text{s}$, also $75\,\text{km/h}$.
      Er kann zeitweise schneller als $80\,\text{km/h}$ und zeitweise langsamer gefahren sein. Über die Momentangeschwindigkeit
      sagt der Mittelwert nichts. Man weiß nur: Irgendwann war er mindestens $75\,\text{km/h}$ schnell.
hinweise:
  - 'Rechne die Zeit in Stunden um: $105\,\text{s} = \dfrac{105}{3600}\,\text{h}$.'
  - 'Für b): $t = s/v$ mit $s = 2{,}5\,\text{km}$ und $v = 80\,\text{km/h}$, dann in Sekunden umrechnen.'
  - 'Für c): Welche Art von Geschwindigkeit misst die Anlage, die mittlere oder die momentane?'
loesung: |
  **Modell:** Die Anlage kennt nur Einfahrts- und Ausfahrtszeit. Sie berechnet die mittlere Geschwindigkeit $\bar v = \Delta x / \Delta t$.
  ---
  **a)** $\Delta t = 105\,\text{s} = 0{,}02917\,\text{h}$, also $\bar v = \dfrac{2{,}5\,\text{km}}{0{,}02917\,\text{h}} = 85{,}7\,\text{km/h}$. Das Auto war im Mittel zu schnell.
  ---
  **b)** $t_{\min} = \dfrac{2{,}5\,\text{km}}{80\,\text{km/h}} = 0{,}03125\,\text{h} = 112{,}5\,\text{s}$.
  ---
  **c)** Nein. $120\,\text{s}$ ergeben $\bar v = 75\,\text{km/h}$. Ein Mittelwert schließt Spitzen über $80\,\text{km/h}$ nicht aus. Die Abschnittskontrolle prüft also nur, ob man **im Mittel** zu schnell war.
```

## Beschleunigung

```aufgabe
id: p2-3-check
art: check
titel: "Vorwissen: Geschwindigkeitsänderung"
niveau: 1
angabe: |
  Ein Auto fährt zuerst mit $20\,\text{m/s}$ und kurz darauf mit $26\,\text{m/s}$ in dieselbe Richtung. Um wie viel hat sich seine Geschwindigkeit geändert?
teile:
  - typ: zahl
    loesung: "26-20"
    einheit: "m/s"
    anzeige: '6'
    fehler:
      - wert: "20-26"
        meldung: Eine Änderung rechnet man immer „neu minus alt“. Das Auto ist schneller geworden, die Änderung ist positiv.
      - wert: "46"
        meldung: Du hast die Geschwindigkeiten addiert. Gefragt ist der **Unterschied**.
hinweise:
  - 'Änderung $= \text{Endwert} - \text{Anfangswert}$, also $\Delta v = v_2 - v_1$.'
loesung: |
  Die Änderung einer Größe ist immer „Endwert minus Anfangswert“, hier $\Delta v = v_2 - v_1$.
  ---
  $\Delta v = 26\,\text{m/s} - 20\,\text{m/s} = 6\,\text{m/s}$. Wie schnell diese Änderung passiert, beschreibt die Beschleunigung. Wiederholen: [2.2 Geschwindigkeit](/lernen/physik1/kinematik/geschwindigkeit).
```

### Wie schnell sich die Geschwindigkeit ändert

Beim Anfahren, beim Bremsen und in jeder Kurve ändert sich die Geschwindigkeit. Wie schnell sie sich
ändert, beschreibt eine neue Größe, die **Beschleunigung**. Sie ist für die Geschwindigkeit das, was die
Geschwindigkeit für den Ort ist: eine Änderungsrate.

:::definition[Beschleunigung]
Die **mittlere Beschleunigung** im Zeitintervall $\Delta t$ ist
$$\bar a = \frac{\Delta v}{\Delta t} = \frac{v(t_2) - v(t_1)}{t_2 - t_1}.$$
Die **Momentanbeschleunigung** ist der Grenzwert für $\Delta t \to 0$, also die Ableitung der
Geschwindigkeit nach der Zeit:
$$a(t) = \frac{\dd v}{\dd t} = \dot v(t) = \ddot x(t).$$
$\ddot x$ (gesprochen „x zwei Punkt“) ist die zweite Ableitung des Ortes. Die Einheit ist
$\dfrac{\text{m/s}}{\text{s}} = \text{m/s}^2$.

**Beispiel:** Ein Auto wird in $4\,\text{s}$ von $10\,\text{m/s}$ auf $22\,\text{m/s}$ schneller. Dann ist
$\bar a = \dfrac{12\,\text{m/s}}{4\,\text{s}} = 3\,\text{m/s}^2$.

**Kein Beispiel:** Ein Verkehrsflugzeug fliegt mit konstant $250\,\text{m/s}$ geradeaus. Es ist sehr schnell,
aber seine Beschleunigung ist **null**, weil sich die Geschwindigkeit nicht ändert.
:::

Die Einheit $\text{m/s}^2$ liest man am besten als „Meter pro Sekunde, pro Sekunde“. Eine Beschleunigung von
$3\,\text{m/s}^2$ heißt: In jeder Sekunde wird die Geschwindigkeit um $3\,\text{m/s}$ größer.

Zur Größenvorstellung: Ein Familienauto beschleunigt mit etwa $3\,\text{m/s}^2$, ein Sportwagen mit
$8\,\text{m/s}^2$. Eine Vollbremsung auf trockenem Asphalt schafft rund $8\,\text{m/s}^2$ entgegen der
Fahrtrichtung. Die Fallbeschleunigung beträgt $g = 9{,}81\,\text{m/s}^2$.

:::beispiel[Sprinter gegen Verkehrsflugzeug]
Ein Sprinter kommt in $2{,}0\,\text{s}$ aus dem Stand auf $8{,}0\,\text{m/s}$. Ein Flugzeug kommt auf der
Startbahn in $30\,\text{s}$ von $0$ auf $75\,\text{m/s}$. Wer hat die größere Beschleunigung?

**Schritt 1, Sprinter:** $\bar a = \dfrac{8{,}0\,\text{m/s} - 0}{2{,}0\,\text{s}} = 4{,}0\,\text{m/s}^2$.

**Schritt 2, Flugzeug:** $\bar a = \dfrac{75\,\text{m/s} - 0}{30\,\text{s}} = 2{,}5\,\text{m/s}^2$.

**Antwort:** Der Sprinter beschleunigt stärker, obwohl das Flugzeug am Ende fast zehnmal so schnell ist.
Die Beschleunigung misst nicht, **wie schnell** etwas ist, sondern **wie rasch** sich das ändert.
:::

### Geschwindigkeit und Beschleunigung auseinanderhalten

Diese Unterscheidung ist die wichtigste des Kapitels. Für fast alle ist sie am Anfang ungewohnt. Lies diesen
Teil deshalb langsam.

**Worum geht es?** Die Geschwindigkeit sagt, wie schnell sich der **Ort** ändert. Die Beschleunigung sagt,
wie schnell sich die **Geschwindigkeit** ändert. Das sind zwei verschiedene Fragen mit unabhängigen Antworten.

**Ein Bild:** Denk an den Tacho. Die **Stellung** der Nadel ist die Geschwindigkeit. Wie schnell sich die Nadel
**dreht**, ist die Beschleunigung. Die Nadel kann weit rechts stehen und sich gar nicht bewegen (Autobahn mit
Tempomat). Sie kann auf null stehen und gerade losschnellen (Anfahren an der Ampel).

**Vier Fälle, die zeigen, dass beides unabhängig ist:**

1. Großes $v$, $a = 0$: das Flugzeug im Reiseflug.
2. $v = 0$, aber $a \neq 0$: ein Auto im Augenblick des Anfahrens. Gerade steht es, im nächsten Moment nicht mehr.
3. $v = 0$ und $a \neq 0$ beim Umkehren: ein Ball am höchsten Punkt seines Wurfs.
4. Geschwindigkeit nach vorn, Beschleunigung nach hinten: ein bremsendes Auto.

**Zurückübersetzt:** Aus dem Wert der Geschwindigkeit kann man nie auf die Beschleunigung schließen. Man muss
schauen, wie sich die Geschwindigkeit **verändert**.

```plot
x: [0, 2.6]
y: [-12, 16]
achsen: { x: "t in s", y: "v in m/s" }
graphen:
  - { f: "14.715 - 9.81*x", label: "v(t)", farbe: 0, von: 0, bis: 2.5 }
punkte:
  - { x: 1.5, y: 0, label: "höchster Punkt: v = 0" }
  - { x: 1, y: 4.905 }
  - { x: 2, y: -4.905 }
beschriftung: "v-t-Diagramm eines senkrecht hochgeworfenen Balls, Achse nach oben. Die Geschwindigkeit nimmt gleichmäßig ab, wird bei 1,5 s null und dann negativ. Die Steigung, also die Beschleunigung, ist überall gleich, auch im Nullpunkt der Geschwindigkeit."
```

:::achtung[Fehler: „Am höchsten Punkt ist die Beschleunigung null“]
Ein Ball fliegt senkrecht nach oben. Ein Sensor misst bei $t = 1{,}0\,\text{s}$ die Geschwindigkeit
$+4{,}9\,\text{m/s}$, bei $t = 1{,}5\,\text{s}$ genau $0$ und bei $t = 2{,}0\,\text{s}$ dann $-4{,}9\,\text{m/s}$.
Eine Schülerin schreibt: „Bei $1{,}5\,\text{s}$ ist $v = 0$, also ist dort auch $a = 0$.“

Rechne nach: Von $1{,}0\,\text{s}$ bis $2{,}0\,\text{s}$ ist $\bar a = \dfrac{-4{,}9\,\text{m/s} - 4{,}9\,\text{m/s}}{1{,}0\,\text{s}} = -9{,}8\,\text{m/s}^2$.
Die Geschwindigkeit ändert sich gerade um den Zeitpunkt $1{,}5\,\text{s}$ herum ganz gleichmäßig weiter.
Wäre dort $a = 0$, bliebe der Ball oben in der Luft stehen.
:::

### Das Vorzeichen der Beschleunigung

In einer Dimension steckt die Richtung der Beschleunigung im Vorzeichen. Hier lauert ein weiterer häufiger Denkfehler:
Ein Minus bedeutet **nicht** automatisch „bremsen“.

:::satz[Schneller oder langsamer?]
Ein Körper wird **schneller** (der Betrag $|v|$ wächst), wenn $v$ und $a$ **dasselbe** Vorzeichen haben.
Er wird **langsamer**, wenn $v$ und $a$ **entgegengesetzte** Vorzeichen haben. Ist $a = 0$, bleibt die
Geschwindigkeit gleich.
:::

Warum? Gleiches Vorzeichen heißt: Die Beschleunigung zeigt in Bewegungsrichtung und schiebt den Körper
voran. Entgegengesetzte Vorzeichen heißen: Sie zeigt gegen die Bewegung und bremst. Ob das Vorzeichen
dabei Plus oder Minus ist, hängt nur davon ab, wohin du deine Achse gelegt hast.

:::beispiel[Ein Zug fährt in negative Richtung]
Die $x$-Achse zeigt nach Osten. Ein Zug fährt nach Westen. Seine Geschwindigkeit ändert sich in $5{,}0\,\text{s}$
von $-10\,\text{m/s}$ auf $-18\,\text{m/s}$. Wird er schneller oder langsamer?

**Schritt 1, Beschleunigung:** $\bar a = \dfrac{-18\,\text{m/s} - (-10\,\text{m/s})}{5{,}0\,\text{s}} = \dfrac{-8\,\text{m/s}}{5{,}0\,\text{s}} = -1{,}6\,\text{m/s}^2$.

**Schritt 2, Vorzeichen vergleichen:** $v < 0$ und $a < 0$, also gleiches Vorzeichen.

**Antwort:** Der Zug wird **schneller**, obwohl die Beschleunigung negativ ist. Das Tempo steigt von
$10\,\text{m/s}$ auf $18\,\text{m/s}$. Hätten wir die Achse nach Westen gelegt, wären $v$ und $a$ beide positiv,
und an der Aussage „schneller“ ändert sich nichts.
:::

:::achtung[Fehler: „Negative Beschleunigung heißt bremsen“]
Ein Radfahrer fährt in negative $x$-Richtung mit $v = -6\,\text{m/s}$ und hat $a = -0{,}5\,\text{m/s}^2$.
Ein Schüler sagt: „$a$ ist negativ, also bremst er. Nach $4\,\text{s}$ fährt er nur noch $4\,\text{m/s}$.“

Richtig ist $v(4\,\text{s}) = -6\,\text{m/s} + (-0{,}5\,\text{m/s}^2)\cdot 4\,\text{s} = -8\,\text{m/s}$. Der Radfahrer wird
schneller, denn $v$ und $a$ zeigen beide in negative Richtung. Für „bremsen“ müssen die Vorzeichen verschieden sein.
:::

### Beschleunigung als zweite Ableitung

Kennt man den Ort als Funktion der Zeit, erhält man die Geschwindigkeit durch einmaliges und die Beschleunigung
durch zweimaliges Ableiten. Im s-t-Diagramm erkennt man die Beschleunigung an der **Krümmung**: Ist der Graph
nach oben gekrümmt (linksgekrümmt), nimmt seine Steigung zu, also ist $a > 0$. Ist er nach unten gekrümmt
(rechtsgekrümmt), ist $a < 0$. Den mathematischen Hintergrund findest du im Abschnitt
[9.12 Krümmung und Wendepunkte](/lernen/mathe3/differentialrechnung/kruemmung-und-wendepunkte).

:::merke
1. Geschwindigkeit $=$ Änderungsrate des Ortes, Beschleunigung $=$ Änderungsrate der Geschwindigkeit.
2. $\bar a = \Delta v / \Delta t$, Einheit $\text{m/s}^2$. Momentan: $a = \dot v = \ddot x$.
3. Aus $v = 0$ folgt **nicht** $a = 0$, und aus großem $v$ folgt **nicht** großes $a$.
4. Gleiche Vorzeichen von $v$ und $a$: schneller. Verschiedene Vorzeichen: langsamer.
:::

```reflexion
frage: Kann ein Auto schneller werden, während seine Beschleunigung kleiner wird? Erkläre mit einem Alltagsbeispiel.
antwort: |
  Ja. Solange die Beschleunigung positiv ist (in Fahrtrichtung zeigt), wird das Auto schneller, auch wenn sie abnimmt.
  Es wird dann nur immer **weniger rasch** schneller. Beispiel: Ein Auto beschleunigt auf der Autobahnauffahrt. Am Anfang
  steigt die Geschwindigkeit pro Sekunde stark, später wegen des Luftwiderstands nur noch wenig. Die Geschwindigkeit
  wächst die ganze Zeit, die Beschleunigung sinkt.
```

```aufgabe
id: p2-vorzeichen-beschl
titel: Schneller oder langsamer?
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Die $x$-Achse zeigt nach rechts. In welchen Fällen wird der Körper **schneller**, wächst also der Betrag der Geschwindigkeit? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$v = +5\,\text{m/s}$, $a = +2\,\text{m/s}^2$'
      - '$v = +5\,\text{m/s}$, $a = -2\,\text{m/s}^2$'
      - '$v = -5\,\text{m/s}$, $a = -2\,\text{m/s}^2$'
      - '$v = -5\,\text{m/s}$, $a = +2\,\text{m/s}^2$'
    richtig: [0, 2]
    fehler:
      - wert: [0, 3]
        meldung: Du hast „positive Beschleunigung“ mit „schneller“ gleichgesetzt. Entscheidend ist, ob $v$ und $a$ **dasselbe** Vorzeichen haben. Im letzten Fall zeigt die Beschleunigung gegen die Bewegung, der Körper bremst.
      - wert: [0]
        meldung: Auch Fall 3 wird schneller. Dort zeigen Geschwindigkeit und Beschleunigung beide nach links. Die Beschleunigung schiebt also in Bewegungsrichtung.
hinweise:
  - Vergleiche in jeder Zeile die Vorzeichen von $v$ und $a$.
loesung: |
  **Regel:** Schneller wird der Körper, wenn $v$ und $a$ in dieselbe Richtung zeigen, also gleiche Vorzeichen haben.
  ---
  **Ergebnis:** Fälle 1 und 3. In den Fällen 2 und 4 bremst der Körper. Fall 3 zeigt: Eine negative Beschleunigung kann einen Körper schneller machen.
```

```aufgabe
id: p2-3-sprinter
titel: Beschleunigung einer Radfahrerin
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Eine Radfahrerin wird an einer Steigung in $6{,}0\,\text{s}$ gleichmäßig von $7{,}5\,\text{m/s}$ auf $4{,}5\,\text{m/s}$ langsamer. Die Achse zeigt in Fahrtrichtung. Wie groß ist ihre Beschleunigung?
teile:
  - typ: zahl
    loesung: "(4.5-7.5)/6"
    einheit: "m/s²"
    anzeige: '-0{,}5'
    fehler:
      - wert: "0.5"
        meldung: Der Betrag stimmt, aber sie wird langsamer, während sie in positive Richtung fährt. Dann zeigt die Beschleunigung gegen die Fahrtrichtung und ist negativ.
      - wert: "4.5/6"
        meldung: Du hast die Endgeschwindigkeit durch die Zeit geteilt. Die Beschleunigung ist die **Änderung** der Geschwindigkeit pro Zeit.
hinweise:
  - '$\bar a = \dfrac{v_2 - v_1}{\Delta t}$, Endwert minus Anfangswert.'
loesung: |
  **Ansatz:** $\bar a = \dfrac{\Delta v}{\Delta t}$ mit $\Delta v = 4{,}5\,\text{m/s} - 7{,}5\,\text{m/s} = -3{,}0\,\text{m/s}$.
  ---
  **Ergebnis:** $\bar a = \dfrac{-3{,}0\,\text{m/s}}{6{,}0\,\text{s}} = -0{,}50\,\text{m/s}^2$. Probe: $v > 0$ und $a < 0$ haben verschiedene Vorzeichen, also bremst sie. Das passt.
```

```aufgabe
id: p2-3-umkehrpunkt
titel: Im Umkehrpunkt
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  Ein Wagen rollt eine Rampe hinauf, wird langsamer, bleibt einen Augenblick stehen und rollt wieder hinunter. Reibung vernachlässigen wir, die Beschleunigung zeigt also die ganze Zeit gleich stark hangabwärts. Welche Aussage über den Augenblick des Stillstands ist richtig?
teile:
  - typ: auswahl
    optionen:
      - "$v = 0$ und $a = 0$, denn der Wagen steht."
      - "$v = 0$, aber die Beschleunigung zeigt weiterhin hangabwärts."
      - "$v \\neq 0$, denn der Wagen bewegt sich ja gleich wieder."
      - "$v = 0$, und die Beschleunigung ändert in diesem Moment ihre Richtung."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Das ist die häufigste Fehlvorstellung. Stillstand heißt nur $v = 0$. Wäre auch $a = 0$, würde sich die Geschwindigkeit nicht mehr ändern, und der Wagen bliebe für immer stehen.
      - wert: 2
        meldung: Im Umkehrpunkt wechselt die Geschwindigkeit von hangaufwärts nach hangabwärts. Dazwischen ist sie für einen Augenblick genau null.
      - wert: 3
        meldung: Die **Geschwindigkeit** ändert ihre Richtung, nicht die Beschleunigung. Die Beschleunigung zeigt die ganze Zeit hangabwärts, beim Hinauf- wie beim Hinunterrollen.
hinweise:
  - Trenne die beiden Fragen. Wie groß ist $v$ im Umkehrpunkt? Ändert sich $v$ dort gerade?
  - Wenn sich die Geschwindigkeit ändert, ist die Beschleunigung nicht null.
loesung: |
  **Geschwindigkeit:** Im Umkehrpunkt wechselt $v$ das Vorzeichen, also ist $v$ dort für einen Augenblick null.
  ---
  **Beschleunigung:** Kurz davor ist $v$ hangaufwärts, kurz danach hangabwärts. Die Geschwindigkeit ändert sich also gerade, das heißt $a \neq 0$.
  ---
  **Ergebnis:** Antwort 2. Die Beschleunigung zeigt die ganze Zeit hangabwärts, ihr Betrag bleibt gleich. Nur die Geschwindigkeit wechselt die Richtung.
```

```aufgabe
id: p2-3-zug-west
titel: Ein Bus fährt rückwärts
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Die $x$-Achse zeigt nach vorn. Ein Bus fährt rückwärts aus einer Parklücke. Seine Geschwindigkeit ändert sich in $2{,}5\,\text{s}$ gleichmäßig von $-2{,}0\,\text{m/s}$ auf $-0{,}5\,\text{m/s}$.

  a) Berechne die Beschleunigung.

  b) Wird der Bus schneller oder langsamer? Gib $1$ für „schneller“ und $-1$ für „langsamer“ ein.
teile:
  - typ: zahl
    label: a) Beschleunigung
    loesung: "(-0.5-(-2))/2.5"
    einheit: "m/s²"
    anzeige: '0{,}6'
    fehler:
      - wert: "-0.6"
        meldung: Endwert minus Anfangswert ist $-0{,}5 - (-2{,}0) = +1{,}5$. Minus minus ergibt plus. Die Beschleunigung ist positiv.
      - wert: "(-0.5-2)/2.5"
        meldung: Du hast das Minus der Anfangsgeschwindigkeit verloren. Sie ist $-2{,}0\,\text{m/s}$, also rechnest du $-0{,}5 - (-2{,}0)$.
  - typ: zahl
    label: b) schneller (1) oder langsamer (−1)
    loesung: "-1"
    fehler:
      - wert: "1"
        meldung: Eine positive Beschleunigung macht nicht automatisch schneller. Hier ist $v < 0$ und $a > 0$, die Vorzeichen sind verschieden. Das Tempo sinkt von $2{,}0$ auf $0{,}5\,\text{m/s}$.
hinweise:
  - 'Setze in $\bar a = (v_2 - v_1)/\Delta t$ die Geschwindigkeiten **mit** Vorzeichen ein.'
  - Vergleiche dann die Vorzeichen von $v$ und $a$.
gefuehrt:
  - text: Wie groß ist die Geschwindigkeitsänderung $\Delta v = v_2 - v_1$ in m/s?
    teil: { typ: zahl, loesung: "-0.5-(-2)" }
    erklaerung: $\Delta v = -0{,}5\,\text{m/s} - (-2{,}0\,\text{m/s}) = +1{,}5\,\text{m/s}$.
  - text: Teile durch die Zeit. Wie groß ist $\bar a$ in $\text{m/s}^2$?
    teil: { typ: zahl, loesung: "1.5/2.5" }
    erklaerung: $\bar a = 1{,}5\,\text{m/s} / 2{,}5\,\text{s} = 0{,}6\,\text{m/s}^2$.
  - text: Welches Vorzeichen hat die Geschwindigkeit, welches die Beschleunigung? Was folgt daraus?
    erklaerung: $v$ ist negativ, $a$ ist positiv. Verschiedene Vorzeichen bedeuten bremsen. Der Bus wird langsamer, das Tempo fällt von $2{,}0$ auf $0{,}5\,\text{m/s}$.
loesung: |
  **Ansatz:** $\bar a = \dfrac{v_2 - v_1}{\Delta t}$, Geschwindigkeiten mit Vorzeichen einsetzen.
  ---
  **a)** $\bar a = \dfrac{-0{,}5\,\text{m/s} - (-2{,}0\,\text{m/s})}{2{,}5\,\text{s}} = \dfrac{1{,}5\,\text{m/s}}{2{,}5\,\text{s}} = 0{,}60\,\text{m/s}^2$.
  ---
  **b)** $v < 0$ und $a > 0$: verschiedene Vorzeichen, also wird der Bus langsamer. Probe: Das Tempo sinkt von $2{,}0\,\text{m/s}$ auf $0{,}5\,\text{m/s}$, das passt zu einem Bus, der beim Ausparken abbremst.
```

```aufgabe
id: p2-ableitung
titel: Geschwindigkeit und Beschleunigung als Ableitung
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Ein Körper bewegt sich nach $x(t) = 2t^3 - 3t^2 + 4$ ($x$ in m, $t$ in s).

  a) Gib $v(t)$ an.

  b) Berechne Geschwindigkeit und Beschleunigung zur Zeit $t = 2\,\text{s}$.
teile:
  - typ: term
    label: a) v(t)
    variable: t
    loesung: "6t^2 - 6t"
    fehler:
      - wert: "6t^2 - 6t + 4"
        meldung: Die Ableitung einer Konstanten ist null. Der Summand $4$ fällt beim Ableiten weg.
  - typ: zahl
    label: b) v(2 s)
    loesung: "6*2^2 - 6*2"
    einheit: "m/s"
    anzeige: '12'
    fehler:
      - wert: "2*2^3 - 3*2^2 + 4"
        meldung: Das ist der Ort $x(2)$. Für die Geschwindigkeit setzt du in die **Ableitung** $v(t)$ ein.
  - typ: zahl
    label: b) a(2 s)
    loesung: "12*2 - 6"
    einheit: "m/s²"
    anzeige: '18'
    fehler:
      - wert: "12/2"
        meldung: Du hast $v/t$ gerechnet. Das ist die mittlere Beschleunigung seit dem Start. Die Momentanbeschleunigung ist die Ableitung $a(t) = v'(t) = 12t - 6$.
hinweise:
  - '$v = \dot x$: Leite $x(t)$ mit der Potenzregel ab.'
  - '$a = \dot v$: Leite $v(t)$ noch einmal ab und setze dann $t = 2$ ein.'
loesung: |
  **Ansatz:** Geschwindigkeit ist die erste, Beschleunigung die zweite Ableitung des Ortes.
  ---
  **a)** $v(t) = \dot x(t) = 6t^2 - 6t$ in m/s.
  ---
  **b)** $a(t) = \dot v(t) = 12t - 6$ in $\text{m/s}^2$. Mit $t = 2$: $v(2\,\text{s}) = 24 - 12 = 12\,\text{m/s}$ und $a(2\,\text{s}) = 24 - 6 = 18\,\text{m/s}^2$.
  ---
  **Einordnung:** Die Beschleunigung hängt hier von der Zeit ab. Die Formeln der gleichmäßig beschleunigten Bewegung gelten für diesen Körper also **nicht**.
```

```aufgabe
id: p2-3-datenlogger
titel: Ist das Auto gleichmäßig beschleunigt?
niveau: 3
lernziel: 2
kompetenz: modellieren
angabe: |
  Ein Datenlogger misst beim Anfahren eines Autos die Geschwindigkeit: bei $t = 0$ genau $0$, bei $t = 2\,\text{s}$ dann $7{,}0\,\text{m/s}$, bei $t = 4\,\text{s}$ dann $12{,}0\,\text{m/s}$ und bei $t = 6\,\text{s}$ dann $15{,}0\,\text{m/s}$.

  a) Berechne die mittlere Beschleunigung von $0$ bis $2\,\text{s}$.

  b) Berechne die mittlere Beschleunigung von $4$ bis $6\,\text{s}$.

  c) Berechne die mittlere Beschleunigung über die ganzen $6\,\text{s}$.

  d) Ist die Bewegung gleichmäßig beschleunigt? Begründe mit deinen Ergebnissen.
teile:
  - typ: zahl
    label: a) 0 bis 2 s
    loesung: "7/2"
    einheit: "m/s²"
    anzeige: '3{,}5'
  - typ: zahl
    label: b) 4 bis 6 s
    loesung: "(15-12)/2"
    einheit: "m/s²"
    anzeige: '1{,}5'
    fehler:
      - wert: "15/6"
        meldung: Das ist die mittlere Beschleunigung seit dem Start. Gefragt ist nur das Intervall von $4$ bis $6\,\text{s}$.
  - typ: zahl
    label: c) 0 bis 6 s
    loesung: "15/6"
    einheit: "m/s²"
    anzeige: '2{,}5'
    fehler:
      - wert: "6/15"
        meldung: Du hast die Zeit durch die Geschwindigkeitsänderung geteilt. Die Beschleunigung ist $\Delta v / \Delta t$, also Meter pro Sekunde **durch** Sekunden.
  - typ: text
    label: d) Begründung
    muster: |
      Nein. In gleich langen Zeitabschnitten nimmt die Geschwindigkeit um $7{,}0$, $5{,}0$ und $3{,}0\,\text{m/s}$ zu. Die
      Beschleunigung sinkt also von $3{,}5$ über $2{,}5$ auf $1{,}5\,\text{m/s}^2$. Bei gleichmäßiger Beschleunigung müsste die
      Geschwindigkeit in gleichen Zeiten um gleich viel wachsen. Das Auto wird zwar die ganze Zeit schneller, aber immer weniger rasch.
hinweise:
  - 'Bilde für jedes Intervall $\Delta v / \Delta t$ und vergleiche die Ergebnisse.'
  - Gleichmäßig beschleunigt heißt, die Geschwindigkeit nimmt in gleichen Zeitspannen um gleich viel zu.
loesung: |
  **Modell:** Zwischen zwei Messungen kennen wir nur Mittelwerte, also $\bar a = \Delta v / \Delta t$ je Intervall.
  ---
  **a)** $\bar a = \dfrac{7{,}0\,\text{m/s} - 0}{2\,\text{s}} = 3{,}5\,\text{m/s}^2$. **b)** $\bar a = \dfrac{15{,}0\,\text{m/s} - 12{,}0\,\text{m/s}}{2\,\text{s}} = 1{,}5\,\text{m/s}^2$.
  ---
  **c)** $\bar a = \dfrac{15{,}0\,\text{m/s}}{6\,\text{s}} = 2{,}5\,\text{m/s}^2$. Der Zwischenwert von $2$ bis $4\,\text{s}$ ist $\dfrac{5{,}0\,\text{m/s}}{2\,\text{s}} = 2{,}5\,\text{m/s}^2$.
  ---
  **d)** Die Beschleunigung sinkt von Intervall zu Intervall. Also ist die Bewegung **nicht** gleichmäßig beschleunigt, obwohl das Auto immer schneller wird. Typisch für echte Autos: Mit wachsender Geschwindigkeit bremst der Luftwiderstand stärker.
```

```aufgabe
id: p2-3-begruenden
titel: Schnell heißt nicht stark beschleunigt
niveau: 2
lernziel: 2
kompetenz: begruenden
angabe: |
  Ein Mitschüler sagt: „Ein ICE mit $300\,\text{km/h}$ hat natürlich eine viel größere Beschleunigung als ein Moped, das gerade an der Ampel losfährt.“ Nimm Stellung und gib je ein Zahlenbeispiel.
teile:
  - typ: text
    muster: |
      Die Aussage verwechselt Geschwindigkeit und Beschleunigung. Fährt der ICE mit konstant $300\,\text{km/h}$ geradeaus,
      ändert sich seine Geschwindigkeit nicht, also ist $a = 0$. Das Moped wird zum Beispiel in $4\,\text{s}$ von $0$ auf
      $8\,\text{m/s}$ schneller und hat damit $a = 2\,\text{m/s}^2$. Das Moped hat die größere Beschleunigung, obwohl
      der ICE viel schneller ist.
hinweise:
  - Was misst die Beschleunigung, die Geschwindigkeit selbst oder ihre Änderung?
  - Überlege, wie groß die Beschleunigung eines Zuges ist, der mit konstanter Geschwindigkeit geradeaus fährt.
loesung: |
  **Ansatz:** Die Beschleunigung ist die Änderungsrate der Geschwindigkeit, nicht die Geschwindigkeit selbst.
  ---
  **ICE:** Bei konstant $300\,\text{km/h}$ auf gerader Strecke ist $\Delta v = 0$, also $a = 0$.
  ---
  **Moped:** Zum Beispiel $\Delta v = 8\,\text{m/s}$ in $4\,\text{s}$, also $a = 2\,\text{m/s}^2$. Das Moped beschleunigt stärker. Die Aussage ist falsch.
```

## Gleichmäßig beschleunigte Bewegung

```aufgabe
id: p2-4-check
art: check
titel: "Vorwissen: Geschwindigkeit nach einigen Sekunden"
niveau: 1
angabe: |
  Ein Skateboarder fährt mit $3{,}0\,\text{m/s}$ und wird $5{,}0\,\text{s}$ lang mit konstant $2{,}0\,\text{m/s}^2$ schneller. Wie schnell ist er danach?
teile:
  - typ: zahl
    loesung: "3+2*5"
    einheit: "m/s"
    anzeige: '13'
    fehler:
      - wert: "2*5"
        meldung: Das ist nur die **Zunahme** der Geschwindigkeit. Er war aber schon $3{,}0\,\text{m/s}$ schnell, bevor er beschleunigt hat.
hinweise:
  - 'In jeder Sekunde kommen $2{,}0\,\text{m/s}$ dazu. Wie viel ist das in $5$ Sekunden?'
loesung: |
  Bei konstanter Beschleunigung wächst die Geschwindigkeit jede Sekunde um denselben Betrag: $\Delta v = a\,\Delta t = 2{,}0\,\text{m/s}^2\cdot 5{,}0\,\text{s} = 10\,\text{m/s}$.
  ---
  Endgeschwindigkeit $v = 3{,}0\,\text{m/s} + 10\,\text{m/s} = 13\,\text{m/s}$. Wiederholen: [2.3 Beschleunigung](/lernen/physik1/kinematik/beschleunigung).
```

Die wichtigste Bewegung der Schulphysik ist die mit **konstanter Beschleunigung**. Man nennt sie
**gleichmäßig beschleunigte Bewegung**. Anfahren und Bremsen gehören näherungsweise dazu, der freie Fall und alle Würfe ebenfalls, solange man den Luftwiderstand vernachlässigt.
In diesem Abschnitt leiten wir ihre Gleichungen her. Wer die Herleitung versteht, muss sie nicht auswendig lernen.

### Die Geschwindigkeit wächst linear

Ist die Beschleunigung $a$ konstant, ändert sich die Geschwindigkeit in jeder Sekunde um denselben Betrag.
Nach der Zeit $t$ hat sie sich um $a\cdot t$ geändert. Mit der Anfangsgeschwindigkeit $v_0$ (Geschwindigkeit bei $t = 0$) gilt:
$$v(t) = v_0 + a\,t.$$
Das v-t-Diagramm ist eine **Gerade** mit der Steigung $a$ und dem Achsenabschnitt $v_0$.

### Der Ort als Fläche unter dem v-t-Graphen

Bei konstanter Geschwindigkeit ist der Weg $v\cdot t$. Im v-t-Diagramm ist das die Fläche eines Rechtecks
mit Höhe $v$ und Breite $t$. Das gilt allgemein: **Die Verschiebung ist die Fläche zwischen v-t-Graph und
Zeitachse.** Mathematisch ist das das Integral der Geschwindigkeit, siehe
[10.8 Bestand aus Änderungsrate: Weg und Bremsweg](/lernen/mathe3/integralrechnung/bestand-aus-aenderungsrate-weg-und-bremsweg).

```plot
x: [0, 5]
y: [0, 12]
achsen: { x: "t in s", y: "v in m/s" }
graphen:
  - { f: "2 + 2*x", label: "v(t) = v₀ + at", farbe: 0, von: 0, bis: 5 }
flaechen:
  - { f: "2", g: "0", von: 0, bis: 4, farbe: 1 }
  - { f: "2 + 2*x", g: "2", von: 0, bis: 4, farbe: 2 }
strecken:
  - { von: [4, 0], nach: [4, 10], gestrichelt: true }
beschriftung: "v-t-Diagramm mit v₀ = 2 m/s und a = 2 m/s². Die Fläche bis t = 4 s besteht aus einem Rechteck (orange, v₀·t = 8 m) und einem Dreieck (grün, ½·a·t² = 16 m), zusammen 24 m."
```

Die Fläche unter einer schrägen Geraden zerlegen wir in zwei bekannte Flächen:

- ein **Rechteck** mit Höhe $v_0$ und Breite $t$: Fläche $v_0\,t$,
- ein **Dreieck** mit Breite $t$ und Höhe $a\,t$ (so viel ist die Geschwindigkeit gewachsen): Fläche $\tfrac12\cdot t\cdot a t = \tfrac12 a t^2$.

Zusammen mit dem Anfangsort $x_0$ ergibt das
$$x(t) = x_0 + v_0\,t + \tfrac12\,a\,t^2.$$
Wer ableiten kann, prüft das sofort: $\dot x = v_0 + a t = v$ und $\ddot x = a$.

:::beispiel[Die Fläche im Diagramm, in Zahlen]
Ein Wagen fährt mit $v_0 = 2\,\text{m/s}$ und beschleunigt mit $a = 2\,\text{m/s}^2$. Wie weit kommt er in $4\,\text{s}$?

**Schritt 1, Rechteck:** $v_0\,t = 2\,\text{m/s}\cdot 4\,\text{s} = 8\,\text{m}$. So weit käme er ohne Beschleunigung.

**Schritt 2, Dreieck:** $\tfrac12 a t^2 = \tfrac12\cdot 2\,\text{m/s}^2\cdot (4\,\text{s})^2 = 16\,\text{m}$. Das ist der Zusatzweg durch die Beschleunigung.

**Schritt 3, Summe:** $\Delta x = 8\,\text{m} + 16\,\text{m} = 24\,\text{m}$.

**Probe mit der Mittelwertformel:** Die Endgeschwindigkeit ist $v = 2 + 2\cdot 4 = 10\,\text{m/s}$. Bei linear wachsender
Geschwindigkeit ist der Mittelwert $\tfrac12(2 + 10)\,\text{m/s} = 6\,\text{m/s}$, und $6\,\text{m/s}\cdot 4\,\text{s} = 24\,\text{m}$. ✓
:::

### Die zeitfreie Gleichung

In vielen Aufgaben ist die Zeit weder gegeben noch gesucht, zum Beispiel beim Bremsweg. Dann hilft eine
dritte Gleichung, in der $t$ gar nicht vorkommt. Wir gewinnen sie in drei Schritten:

1. Aus $v = v_0 + a t$ folgt durch Umstellen $t = \dfrac{v - v_0}{a}$.
2. Für die Verschiebung nehmen wir die Mittelwertform $\Delta x = \tfrac12(v_0 + v)\,t$ und setzen $t$ ein:
   $\Delta x = \tfrac12(v_0 + v)\cdot\dfrac{v - v_0}{a} = \dfrac{v^2 - v_0^2}{2a}$, denn $(v + v_0)(v - v_0) = v^2 - v_0^2$.
3. Mit $2a$ multiplizieren und umstellen:

$$v^2 = v_0^2 + 2\,a\,\Delta x.$$

:::formel[Gleichmäßig beschleunigte Bewegung]
$$
\begin{aligned}
v(t) &= v_0 + a\,t\\
x(t) &= x_0 + v_0\,t + \tfrac12\,a\,t^2\\
v^2 &= v_0^2 + 2\,a\,\Delta x\\
\Delta x &= \tfrac12\,(v_0 + v)\,t
\end{aligned}
$$

Dabei ist $a$ die konstante Beschleunigung, $v_0$ und $x_0$ sind Geschwindigkeit und Ort bei $t = 0$,
$v$ die Geschwindigkeit zur Zeit $t$ und $\Delta x = x - x_0$ die Verschiebung.
Aus der Ruhe ($v_0 = 0$, $x_0 = 0$) vereinfacht sich das zu $v = a t$, $x = \tfrac12 a t^2$ und $v = \sqrt{2 a x}$.
:::

:::intuition
Warum steht dort $t^2$? Die Geschwindigkeit wächst selbst mit $t$. In doppelter Zeit fährst du im Mittel doppelt
so schnell und das doppelt so lang, also viermal so weit. Aus demselben Grund ist der Bremsweg bei doppelter
Geschwindigkeit viermal so lang.
:::

### Welche Gleichung wann?

Jede der vier Gleichungen verbindet vier der fünf Größen $v_0$, $v$, $a$, $t$ und $\Delta x$. Schau, welche
Größe **weder gegeben noch gesucht** ist, und nimm die Gleichung, in der sie fehlt.

| fehlt | Gleichung |
|---|---|
| $\Delta x$ | $v = v_0 + a t$ |
| $v$ | $\Delta x = v_0 t + \tfrac12 a t^2$ |
| $t$ | $v^2 = v_0^2 + 2 a\Delta x$ |
| $a$ | $\Delta x = \tfrac12(v_0 + v)\,t$ |

```aufgabe
id: p2-4-check-widget
art: check
titel: "Vorhersage: Was passiert mit der Kurve?"
niveau: 1
angabe: |
  Im folgenden Werkzeug siehst du den Ort $x(t) = x_0 + v_0 t + \tfrac a2 t^2$ als Kurve. Sage voraus, bevor du es ausprobierst: Wie sieht die Kurve aus, wenn du $a = 0$ einstellst?
teile:
  - typ: auswahl
    optionen:
      - "eine waagrechte Gerade"
      - "eine schräge Gerade mit der Steigung $v_0$"
      - "weiterhin eine Parabel"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Eine waagrechte Gerade im s-t-Diagramm bedeutet Stillstand. Mit $a = 0$ fährt der Körper aber gleichförmig mit $v_0$ weiter.
      - wert: 2
        meldung: Der quadratische Summand ist $\tfrac a2 t^2$. Mit $a = 0$ verschwindet er, es bleibt $x_0 + v_0 t$.
hinweise:
  - Setze $a = 0$ in die Formel ein. Welche Summanden bleiben übrig?
loesung: |
  Mit $a = 0$ fällt der Summand $\tfrac a2 t^2$ weg. Übrig bleibt $x(t) = x_0 + v_0 t$.
  ---
  Das ist eine Gerade mit der Steigung $v_0$: eine gleichförmige Bewegung. Probiere es gleich im Werkzeug aus.
```

```widget
name: parameter
titel: Ort bei gleichmäßig beschleunigter Bewegung
props:
  f: "x0 + v0*x + a/2*x^2"
  parameter:
    - { name: "x0", min: -10, max: 10, step: 1, wert: 0 }
    - { name: "v0", min: -10, max: 10, step: 0.5, wert: 2 }
    - { name: "a", min: -5, max: 5, step: 0.5, wert: 1 }
  x: [0, 8]
  y: [-20, 60]
```

**Arbeitsauftrag:** Die waagrechte Achse ist die Zeit $t$ in s, die senkrechte der Ort in m.

1. **Beobachte:** Stell $a = 0$ ein und prüfe deine Vorhersage.
2. **Vorhersage:** Was passiert mit $v_0 = 6\,\text{m/s}$ und $a = -2\,\text{m/s}^2$? Überlege zuerst, dann probiere es.
3. **Erklärung:** Du siehst einen Scheitelpunkt bei $t = 3\,\text{s}$. Dort ist die Steigung null, also $v = 0$. Der Körper kehrt um. Rechnerisch: $v = 6 - 2t = 0$ ergibt $t = 3\,\text{s}$.

### Eine Lösungsstrategie für Kinematikaufgaben

Kinematikaufgaben sehen verschieden aus, folgen aber fast immer demselben Muster. Wenn du dir diese sechs
Schritte angewöhnst, brauchst du kein eigenes Rezept für jeden Aufgabentyp.

1. **Skizze:** Zeichne die Situation mit Startpunkt, Richtungen und allen Phasen (Anfahren, Fahren, Bremsen).
2. **Koordinatensystem:** Lege Ursprung, positive Richtung und Zeitnullpunkt fest und schreib sie hin.
3. **Angaben in SI:** Rechne alles in m, s, m/s und $\text{m/s}^2$ um und schreib es mit Formelzeichen auf.
4. **Bewegungstyp je Phase:** gleichförmig ($a = 0$) oder gleichmäßig beschleunigt? Die Endwerte einer Phase sind die Anfangswerte der nächsten.
5. **Gleichung wählen und allgemein umformen**, erst dann Zahlen einsetzen.
6. **Plausibilität:** Stimmen Einheit, Größenordnung und Vorzeichen?

### Anhalteweg: Reaktion plus Bremsen

Der wichtigste Alltagsfall ist der **Anhalteweg** eines Autos. Er besteht aus zwei Teilen:

1. **Reaktionsweg:** Während der Reaktionszeit $t_R$ (typisch $1\,\text{s}$) fährt das Auto ungebremst weiter, $s_R = v_0\,t_R$.
2. **Bremsweg:** Danach bremst es gleichmäßig bis zum Stillstand. Aus $0 = v_0^2 + 2 a s_B$ mit $a = -|a|$ folgt
   $$s_B = \frac{v_0^2}{2|a|}.$$
   Dabei ist $|a|$ der Betrag der Bremsverzögerung.

Der Reaktionsweg wächst **linear** mit der Geschwindigkeit, der Bremsweg **quadratisch**.

:::beispiel[Anhalteweg auf der Landstraße]
Ein Auto fährt mit $80\,\text{km/h}$. Die Fahrerin reagiert nach $0{,}9\,\text{s}$ und bremst dann mit
$7{,}0\,\text{m/s}^2$. Wie lang ist der Anhalteweg?

**Schritt 1, SI-Einheiten:** $v_0 = 80/3{,}6\,\text{m/s} = 22{,}2\,\text{m/s}$.

**Schritt 2, Reaktionsweg:** $s_R = 22{,}2\,\text{m/s}\cdot 0{,}9\,\text{s} = 20{,}0\,\text{m}$. Die Sekunden kürzen sich.

**Schritt 3, Bremsweg:** $s_B = \dfrac{(22{,}2\,\text{m/s})^2}{2\cdot 7{,}0\,\text{m/s}^2} = \dfrac{494\,\text{m}^2/\text{s}^2}{14\,\text{m/s}^2} = 35{,}3\,\text{m}$.

**Schritt 4, Summe:** $s_A = 20{,}0\,\text{m} + 35{,}3\,\text{m} = 55{,}3\,\text{m}$. Das ist gut die halbe Länge eines Fußballfeldes.
Mehr als ein Drittel davon fährt das Auto, bevor überhaupt gebremst wird.
:::

:::achtung[Fehler: km/h nicht umgerechnet]
Für dasselbe Auto rechnet ein Schüler: „$s_B = \dfrac{80^2}{2\cdot 7{,}0} = 457\,\text{m}$.“ Er hat km/h und
$\text{m/s}^2$ gemischt. Die Einheit des Ergebnisses wäre $\dfrac{(\text{km/h})^2}{\text{m/s}^2}$, also keine Länge in
Metern. Die Plausibilitätsprüfung hätte es gezeigt: Kein Auto braucht fast einen halben Kilometer zum Bremsen.
Immer zuerst in m/s umrechnen.
:::

:::achtung[Fehler: falsches Vorzeichen der Bremsbeschleunigung]
Eine Schülerin setzt beim Bremsen $a = +7{,}0\,\text{m/s}^2$ in $v^2 = v_0^2 + 2a\Delta x$ ein und sucht $\Delta x$ für $v = 0$:
„$0 = 494 + 14\,\Delta x$, also $\Delta x = -35{,}3\,\text{m}$.“ Ein negativer Bremsweg ergibt keinen Sinn.

Die Achse zeigt in Fahrtrichtung, also ist $v_0 > 0$. Beim Bremsen zeigt die Beschleunigung entgegen, also gilt
$a = -7{,}0\,\text{m/s}^2$. Dann folgt $0 = 494 - 14\,\Delta x$ und $\Delta x = +35{,}3\,\text{m}$.
:::

:::merke
1. $v = v_0 + a t$, $\Delta x = v_0 t + \tfrac12 a t^2$, $v^2 = v_0^2 + 2a\Delta x$, $\Delta x = \tfrac12(v_0 + v)t$.
2. Die Gleichung wählen, in der die Größe fehlt, die weder gegeben noch gesucht ist.
3. Anhalteweg $=$ Reaktionsweg $v_0 t_R$ $+$ Bremsweg $v_0^2/(2|a|)$. Doppelte Geschwindigkeit, vierfacher Bremsweg.
:::

```reflexion
frage: Warum wächst der Bremsweg mit dem Quadrat der Geschwindigkeit, der Reaktionsweg aber nur linear? Erkläre ohne Formeln.
antwort: |
  Beim Reaktionsweg fährt das Auto einfach mit $v_0$ weiter. Doppelte Geschwindigkeit in derselben Reaktionszeit ergibt
  doppelten Weg. Beim Bremsen verdoppelt sich bei doppelter Geschwindigkeit zweierlei: Das Bremsen dauert doppelt so lange,
  weil doppelt so viel Geschwindigkeit abgebaut werden muss. Und während dieser Zeit fährt das Auto im Mittel doppelt so
  schnell. Zweimal „doppelt“ ergibt vierfach.
```

```aufgabe
id: p2-anfahren
titel: Anfahren
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Ein Auto beschleunigt gleichmäßig in $8{,}0\,\text{s}$ von $0$ auf $100\,\text{km/h}$. Berechne die Beschleunigung (zwei Nachkommastellen) und den dabei zurückgelegten Weg (ganze Meter).
teile:
  - typ: zahl
    label: Beschleunigung
    loesung: "100/3.6/8"
    einheit: "m/s²"
    anzeige: '3{,}47'
    fehler:
      - wert: "100/8"
        meldung: Du hast km/h durch Sekunden geteilt. Rechne die Geschwindigkeit zuerst in m/s um, sonst stimmt die Einheit nicht.
  - typ: zahl
    label: Weg
    loesung: "0.5*(100/3.6/8)*8^2"
    einheit: "m"
    anzeige: '111'
    fehler:
      - wert: "100/3.6*8"
        meldung: Du hast die Endgeschwindigkeit mal die Zeit gerechnet. Das Auto ist aber nicht die ganze Zeit so schnell gefahren. Im Mittel war es nur halb so schnell.
hinweise:
  - 'Rechne $100\,\text{km/h}$ in m/s um. Dann $a = \Delta v / \Delta t$ und $s = \tfrac12 a t^2$.'
loesung: |
  **SI-Einheiten:** $v = 100/3{,}6\,\text{m/s} = 27{,}8\,\text{m/s}$.
  ---
  **Beschleunigung:** $a = \dfrac{\Delta v}{\Delta t} = \dfrac{27{,}8\,\text{m/s}}{8{,}0\,\text{s}} = 3{,}47\,\text{m/s}^2$.
  ---
  **Weg:** $s = \tfrac12 a t^2 = \tfrac12\cdot 3{,}47\,\text{m/s}^2\cdot (8{,}0\,\text{s})^2 = 111\,\text{m}$. Probe: $s = \bar v\,t = 13{,}9\,\text{m/s}\cdot 8{,}0\,\text{s} = 111\,\text{m}$. ✓
```

```aufgabe
id: p2-4-skater
titel: Eine Inlineskaterin gibt Gas
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Eine Inlineskaterin fährt mit $1{,}5\,\text{m/s}$ und beschleunigt dann $5{,}0\,\text{s}$ lang gleichmäßig mit $0{,}80\,\text{m/s}^2$. Welchen Weg legt sie in diesen $5{,}0\,\text{s}$ zurück?
teile:
  - typ: zahl
    loesung: "1.5*5+0.5*0.8*5^2"
    einheit: "m"
    anzeige: '17{,}5'
    fehler:
      - wert: "0.5*0.8*5^2"
        meldung: Du hast die Anfangsgeschwindigkeit vergessen. Sie war schon vorher $1{,}5\,\text{m/s}$ schnell, das ergibt den Zusatzweg $v_0\,t$.
      - wert: "1.5*5+0.8*5^2"
        meldung: Der Faktor $\tfrac12$ fehlt. Der Zusatzweg durch die Beschleunigung ist ein **Dreieck** im v-t-Diagramm, also $\tfrac12 a t^2$.
hinweise:
  - '$\Delta x = v_0 t + \tfrac12 a t^2$: Rechteck plus Dreieck im v-t-Diagramm.'
loesung: |
  **Ansatz:** Gegeben sind $v_0$, $a$ und $t$, gesucht ist $\Delta x$. Die Endgeschwindigkeit ist nicht gefragt, also nehmen wir $\Delta x = v_0 t + \tfrac12 a t^2$.
  ---
  **Rechnung:** $\Delta x = 1{,}5\,\text{m/s}\cdot 5{,}0\,\text{s} + \tfrac12\cdot 0{,}80\,\text{m/s}^2\cdot (5{,}0\,\text{s})^2 = 7{,}5\,\text{m} + 10\,\text{m} = 17{,}5\,\text{m}$.
  ---
  **Probe:** Endgeschwindigkeit $1{,}5 + 0{,}8\cdot 5 = 5{,}5\,\text{m/s}$, Mittelwert $3{,}5\,\text{m/s}$, mal $5{,}0\,\text{s}$ ergibt $17{,}5\,\text{m}$. ✓
```

```aufgabe
id: p2-flugzeug-start
titel: Startbahn
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Ein Verkehrsflugzeug hebt bei $280\,\text{km/h}$ ab. Die Startbahn ist $1800\,\text{m}$ lang. Welche konstante Beschleunigung braucht es mindestens (zwei Nachkommastellen), und wie lange dauert der Startlauf (eine Nachkommastelle)?
teile:
  - typ: zahl
    label: Beschleunigung
    loesung: "(280/3.6)^2/(2*1800)"
    einheit: "m/s²"
    anzeige: '1{,}68'
    fehler:
      - wert: "(280/3.6)^2/1800"
        meldung: Der Faktor $2$ fehlt. Aus $v^2 = 2 a s$ folgt $a = v^2/(2s)$.
      - wert: "280^2/(2*1800)"
        meldung: Du hast km/h eingesetzt. Rechne zuerst in m/s um.
  - typ: zahl
    label: Zeit
    loesung: "2*1800/(280/3.6)"
    einheit: "s"
    anzeige: '46{,}3'
    fehler:
      - wert: "1800/(280/3.6)"
        meldung: Das wäre die Zeit bei **konstant** $77{,}8\,\text{m/s}$. Das Flugzeug startet aber aus dem Stand, im Mittel ist es nur halb so schnell.
hinweise:
  - 'Die Zeit ist weder gegeben noch gesucht, wenn du $a$ bestimmst. Nimm die zeitfreie Gleichung $v^2 = 2as$.'
  - 'Für die Zeit hilft die Mittelwertform $s = \tfrac12 (v_0 + v)\,t$ mit $v_0 = 0$.'
loesung: |
  **SI:** $v = 280/3{,}6\,\text{m/s} = 77{,}8\,\text{m/s}$, $v_0 = 0$, $s = 1800\,\text{m}$.
  ---
  **Beschleunigung:** $v^2 = 2 a s$, also $a = \dfrac{v^2}{2s} = \dfrac{(77{,}8\,\text{m/s})^2}{3600\,\text{m}} = 1{,}68\,\text{m/s}^2$.
  ---
  **Zeit:** $s = \tfrac12 v t$, also $t = \dfrac{2s}{v} = \dfrac{3600\,\text{m}}{77{,}8\,\text{m/s}} = 46{,}3\,\text{s}$.
  ---
  **Plausibilität:** Etwa eine dreiviertel Minute Startlauf und eine Beschleunigung, die man als sanften Druck in den Sitz spürt. Beides passt zur Erfahrung.
```

```aufgabe
id: p2-bremsweg
titel: Anhalteweg in der Stadt
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Ein Auto fährt mit $50\,\text{km/h}$. Die Reaktionszeit des Fahrers beträgt $1{,}0\,\text{s}$, die Bremsverzögerung $6{,}0\,\text{m/s}^2$. Runde auf eine Nachkommastelle.

  a) Wie lang ist der Bremsweg?

  b) Wie lang ist der Anhalteweg?

  c) Wie lang ist der Anhalteweg bei $100\,\text{km/h}$?
teile:
  - typ: zahl
    label: a) Bremsweg
    loesung: "(50/3.6)^2/(2*6)"
    einheit: "m"
    anzeige: '16{,}1'
    fehler:
      - wert: "50^2/(2*6)"
        meldung: Du hast km/h eingesetzt. Das ergibt über $200\,\text{m}$, viel zu lang. Zuerst in m/s umrechnen.
      - wert: "(50/3.6)^2/6"
        meldung: Der Faktor $2$ im Nenner fehlt. $s_B = v_0^2/(2|a|)$.
  - typ: zahl
    label: b) Anhalteweg
    loesung: "50/3.6*1.0 + (50/3.6)^2/(2*6)"
    einheit: "m"
    anzeige: '30{,}0'
    fehler:
      - wert: "(50/3.6)^2/(2*6)"
        meldung: Das ist nur der Bremsweg. Während der Reaktionszeit fährt das Auto ungebremst weiter, dieser Reaktionsweg gehört zum Anhalteweg dazu.
  - typ: zahl
    label: c) Anhalteweg bei 100 km/h
    loesung: "100/3.6*1.0 + (100/3.6)^2/(2*6)"
    einheit: "m"
    anzeige: '92{,}1'
    fehler:
      - wert: "2*(50/3.6*1.0 + (50/3.6)^2/(2*6))"
        meldung: Du hast den Anhalteweg einfach verdoppelt. Der Reaktionsweg verdoppelt sich, der Bremsweg aber vervierfacht sich.
hinweise:
  - '$50\,\text{km/h} = 13{,}9\,\text{m/s}$. Rechne Reaktionsweg und Bremsweg getrennt.'
  - 'Bremsweg $s_B = v_0^2/(2|a|)$, Reaktionsweg $s_R = v_0 t_R$.'
gefuehrt:
  - text: Rechne $50\,\text{km/h}$ in m/s um.
    teil: { typ: zahl, loesung: "50/3.6" }
    erklaerung: $50/3{,}6 = 13{,}9\,\text{m/s}$.
  - text: Wie lang ist der Reaktionsweg in m?
    teil: { typ: zahl, loesung: "50/3.6*1.0" }
    erklaerung: $s_R = 13{,}9\,\text{m/s}\cdot 1{,}0\,\text{s} = 13{,}9\,\text{m}$.
  - text: Wie lang ist der Bremsweg in m?
    teil: { typ: zahl, loesung: "(50/3.6)^2/(2*6)" }
    erklaerung: $s_B = (13{,}9\,\text{m/s})^2 / (2\cdot 6{,}0\,\text{m/s}^2) = 16{,}1\,\text{m}$.
  - text: Addiere beide Teile.
    teil: { typ: zahl, loesung: "50/3.6 + (50/3.6)^2/12" }
    erklaerung: $13{,}9\,\text{m} + 16{,}1\,\text{m} = 30{,}0\,\text{m}$.
loesung: |
  **a)** $v_0 = 50/3{,}6\,\text{m/s} = 13{,}9\,\text{m/s}$. Bremsweg $s_B = \dfrac{(13{,}9\,\text{m/s})^2}{2\cdot 6{,}0\,\text{m/s}^2} = 16{,}1\,\text{m}$.
  ---
  **b)** Reaktionsweg $s_R = 13{,}9\,\text{m/s}\cdot 1{,}0\,\text{s} = 13{,}9\,\text{m}$. Anhalteweg $s_A = 13{,}9\,\text{m} + 16{,}1\,\text{m} = 30{,}0\,\text{m}$.
  ---
  **c)** $v_0 = 27{,}8\,\text{m/s}$: $s_R = 27{,}8\,\text{m}$ und $s_B = \dfrac{(27{,}8\,\text{m/s})^2}{12\,\text{m/s}^2} = 64{,}3\,\text{m}$, zusammen $92{,}1\,\text{m}$.
  ---
  **Einordnung:** Doppelte Geschwindigkeit ergibt hier gut dreifachen Anhalteweg. Der Reaktionsweg verdoppelt sich, der Bremsweg vervierfacht sich.
```

```aufgabe
id: p2-4-welche-gleichung
titel: Welche Gleichung passt?
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: |
  Ein Zug bremst gleichmäßig von $v_0$ auf $v$. Bekannt sind $v_0$, $v$ und der Bremsweg $\Delta x$. Gesucht ist die **Bremsdauer** $t$. Mit welcher Gleichung kommst du in einem Schritt zum Ziel? Rechnen musst du nicht.
teile:
  - typ: auswahl
    optionen:
      - '$v = v_0 + a t$'
      - '$\Delta x = v_0 t + \tfrac12 a t^2$'
      - '$v^2 = v_0^2 + 2a\Delta x$'
      - '$\Delta x = \tfrac12(v_0 + v)\,t$'
    richtig: [3]
    fehler:
      - wert: 0
        meldung: In dieser Gleichung steht $a$, und $a$ kennst du nicht. Du bräuchtest zwei Schritte.
      - wert: 1
        meldung: Auch hier steht das unbekannte $a$, und zusätzlich müsstest du eine quadratische Gleichung lösen.
      - wert: 2
        meldung: Diese Gleichung enthält gar kein $t$. Mit ihr findest du $a$, aber nicht die Zeit.
hinweise:
  - Welche der fünf Größen $v_0$, $v$, $a$, $t$, $\Delta x$ ist weder gegeben noch gesucht?
  - Nimm die Gleichung, in der genau diese Größe nicht vorkommt.
loesung: |
  **Ansatz:** Gegeben $v_0$, $v$, $\Delta x$, gesucht $t$. Weder gegeben noch gesucht ist $a$.
  ---
  **Auswahl:** Die einzige Gleichung ohne $a$ ist $\Delta x = \tfrac12(v_0 + v)\,t$.
  ---
  **Umstellen:** $t = \dfrac{2\Delta x}{v_0 + v}$. Ein Schritt, fertig.
```

```aufgabe
id: p2-4-proportional
titel: Was passiert bei doppelter Geschwindigkeit?
niveau: 2
lernziel: 3
kompetenz: begruenden
angabe: |
  Ein Radfahrer hat bei $15\,\text{km/h}$ einen Bremsweg von $3{,}0\,\text{m}$. Er bremst immer gleich stark.

  a) Wie lang ist sein Bremsweg bei $30\,\text{km/h}$?

  b) Wie lang ist er bei $45\,\text{km/h}$?
teile:
  - typ: zahl
    label: a) bei 30 km/h
    loesung: "3*(30/15)^2"
    einheit: "m"
    anzeige: '12'
    fehler:
      - wert: "3*2"
        meldung: Du hast angenommen, dass der Bremsweg proportional zur Geschwindigkeit ist. Er wächst aber mit dem **Quadrat** der Geschwindigkeit, $s_B = v_0^2/(2|a|)$.
  - typ: zahl
    label: b) bei 45 km/h
    loesung: "3*(45/15)^2"
    einheit: "m"
    anzeige: '27'
    fehler:
      - wert: "3*3"
        meldung: Dreifache Geschwindigkeit heißt nicht dreifacher Bremsweg. Der Faktor ist $3^2 = 9$.
hinweise:
  - 'Bei gleicher Bremsverzögerung gilt $s_B \propto v_0^2$. Das Zeichen $\propto$ liest man „ist proportional zu“.'
  - Um welchen Faktor ändert sich die Geschwindigkeit, und um welchen Faktor dann ihr Quadrat?
loesung: |
  **Ansatz:** $s_B = \dfrac{v_0^2}{2|a|}$. Bei gleichem $|a|$ ist der Bremsweg proportional zu $v_0^2$. Wir brauchen also keine Umrechnung in m/s, nur das Verhältnis der Geschwindigkeiten.
  ---
  **a)** Faktor $30/15 = 2$, quadriert $4$: $s_B = 4\cdot 3{,}0\,\text{m} = 12\,\text{m}$.
  ---
  **b)** Faktor $45/15 = 3$, quadriert $9$: $s_B = 9\cdot 3{,}0\,\text{m} = 27\,\text{m}$. Dreimal so schnell heißt neunmal so langer Bremsweg.
```

```aufgabe
id: p2-bremsen-restgeschw
titel: Reicht der Platz?
niveau: 3
lernziel: 3
kompetenz: modellieren
angabe: |
  Ein Auto fährt mit $72\,\text{km/h}$. Plötzlich taucht $40\,\text{m}$ vor ihm ein Hindernis auf. Die Reaktionszeit beträgt $0{,}8\,\text{s}$, die Bremsverzögerung $5{,}0\,\text{m/s}^2$.

  a) Wie lang wäre der Anhalteweg?

  b) Mit welcher Geschwindigkeit (in km/h, eine Nachkommastelle) prallt das Auto auf das Hindernis?
teile:
  - typ: zahl
    label: a) Anhalteweg
    loesung: "20*0.8 + 20^2/(2*5)"
    einheit: "m"
    anzeige: '56'
    fehler:
      - wert: "20^2/(2*5)"
        meldung: Das ist nur der Bremsweg. Der Reaktionsweg $20\,\text{m/s}\cdot 0{,}8\,\text{s}$ kommt dazu.
  - typ: zahl
    label: b) Aufprallgeschwindigkeit in km/h
    loesung: "sqrt(20^2 - 2*5*(40-20*0.8))*3.6"
    einheit: "km/h"
    anzeige: '45{,}5'
    fehler:
      - wert: "sqrt(20^2 - 2*5*40)*3.6"
        meldung: Du hast die ganzen $40\,\text{m}$ als Bremsstrecke genommen. Während der Reaktionszeit wird aber noch nicht gebremst. Zum Bremsen bleiben nur $40\,\text{m} - s_R$.
hinweise:
  - Berechne zuerst den Anhalteweg und vergleiche mit $40\,\text{m}$.
  - 'Zum Bremsen bleiben nur $40\,\text{m} - s_R$. Nutze $v^2 = v_0^2 - 2|a|\,\Delta x$.'
loesung: |
  **SI:** $v_0 = 72/3{,}6\,\text{m/s} = 20\,\text{m/s}$. **Anhalteweg:** $s_R = 20\,\text{m/s}\cdot 0{,}8\,\text{s} = 16\,\text{m}$, $s_B = \dfrac{(20\,\text{m/s})^2}{2\cdot 5{,}0\,\text{m/s}^2} = 40\,\text{m}$, zusammen $56\,\text{m} > 40\,\text{m}$. Es reicht nicht.
  ---
  **Bremsstrecke bis zum Hindernis:** $40\,\text{m} - 16\,\text{m} = 24\,\text{m}$. Zeitfrei: $v^2 = (20\,\text{m/s})^2 - 2\cdot 5{,}0\,\text{m/s}^2\cdot 24\,\text{m} = 400\,\text{m}^2/\text{s}^2 - 240\,\text{m}^2/\text{s}^2 = 160\,\text{m}^2/\text{s}^2$.
  ---
  **Ergebnis:** $v = \sqrt{160}\,\text{m/s} = 12{,}6\,\text{m/s} = 45{,}5\,\text{km/h}$.
  ---
  **Deutung:** Obwohl nur $16\,\text{m}$ fehlen, prallt das Auto noch mit über $45\,\text{km/h}$ auf. Die Geschwindigkeit nimmt am **Ende** des Bremsweges am schnellsten pro Meter ab. Am Anfang bremst man viele Meter lang kaum spürbar Tempo weg.
```

## Bewegungsdiagramme ineinander übersetzen

```aufgabe
id: p2-5-check
art: check
titel: "Vorwissen: Steigung im v-t-Diagramm"
niveau: 1
angabe: |
  Im v-t-Diagramm eines Autos verläuft der Graph geradlinig von $(0\,\text{s} \mid 4\,\text{m/s})$ nach $(5\,\text{s} \mid 14\,\text{m/s})$. Welche physikalische Größe ist die Steigung dieser Geraden, und wie groß ist sie? Gib den Zahlenwert in SI-Einheiten ein.
teile:
  - typ: zahl
    loesung: "(14-4)/5"
    einheit: "m/s²"
    anzeige: '2'
    fehler:
      - wert: "14/5"
        meldung: Du hast die Endgeschwindigkeit durch die Zeit geteilt. Die Steigung ist die **Änderung** $\Delta v$ durch $\Delta t$.
      - wert: "(4+14)/2*5"
        meldung: Das ist die **Fläche** unter dem Graphen, also der Weg. Gefragt ist die Steigung, also die Beschleunigung.
hinweise:
  - 'Die Steigung im v-t-Diagramm ist $\Delta v / \Delta t$, und das ist die Beschleunigung.'
loesung: |
  Die Steigung eines v-t-Graphen ist $\Delta v / \Delta t$, also die Beschleunigung.
  ---
  $a = \dfrac{14\,\text{m/s} - 4\,\text{m/s}}{5\,\text{s}} = 2\,\text{m/s}^2$. Wiederholen: [2.3 Beschleunigung](/lernen/physik1/kinematik/beschleunigung).
```

In der Prüfung wird oft ein Diagramm vorgegeben. Du sollst Werte ablesen oder ein anderes Diagramm daraus
skizzieren. Dafür musst du nur zwei Werkzeuge beherrschen: **Steigung** und **Fläche**. Diese beiden Gedanken
sind für viele die größte Hürde des Kapitels. Wir gehen sie deshalb einzeln und langsam durch.

### Die Übersetzungsregeln

Es gibt drei Diagramme: Ort über Zeit (s-t), Geschwindigkeit über Zeit (v-t) und Beschleunigung über Zeit (a-t).
Sie hängen so zusammen:

- **Von s-t nach v-t:** Steigung ablesen. Die Steigung des s-t-Graphen ist die Geschwindigkeit (Ableiten).
- **Von v-t nach a-t:** Steigung ablesen. Die Steigung des v-t-Graphen ist die Beschleunigung (Ableiten).
- **Von a-t nach v-t:** Fläche bilden. Die Fläche unter dem a-t-Graphen ist die Geschwindigkeits**änderung** (Integrieren).
- **Von v-t nach s-t:** Fläche bilden. Die Fläche unter dem v-t-Graphen ist die **Verschiebung** (Integrieren).

Beim Integrieren fehlt immer der Startwert: Die Fläche liefert nur die **Änderung**. Den Anfangsort oder die
Anfangsgeschwindigkeit muss man zusätzlich kennen. Das ist genau die Integrationskonstante aus dem Abschnitt
[10.1 Stammfunktionen](/lernen/mathe3/integralrechnung/stammfunktionen-ableiten-rueckwaerts).

```plot
x: [0, 6]
y: [-1, 10]
achsen: { x: "t in s", y: "Wert in SI-Einheiten" }
graphen:
  - { f: "1.5", label: "a(t) in m/s²", farbe: 2, von: 0, bis: 6 }
  - { f: "1.5*x", label: "v(t) in m/s", farbe: 1, von: 0, bis: 6 }
  - { f: "0.75*x^2", label: "s(t) in m", farbe: 0, von: 0, bis: 3.6 }
beschriftung: "Anfahren aus der Ruhe mit a = 1,5 m/s². Das a-t-Diagramm ist waagrecht, das v-t-Diagramm eine schräge Gerade, das s-t-Diagramm eine Parabel. Der Wert von a ist die Steigung des v-Graphen, der Wert von v die Steigung des s-Graphen."
```

Für die gleichmäßig beschleunigte Bewegung ergibt sich ein einprägsames Muster: a-t waagrecht, v-t schräge
Gerade, s-t Parabel. Jeder Schritt vom Ort zur Beschleunigung senkt den Grad des Polynoms um eins, wie beim
Ableiten. Wie man Graphen zeichnerisch ableitet, zeigt der Abschnitt
[9.4 Graphisch differenzieren](/lernen/mathe3/differentialrechnung/graphisch-differenzieren-vom-graphen-von-f-zum-graphen-von-f-und-zurueck).

### Merkmale, an denen man Diagramme schnell beurteilt

- Ein **Hoch- oder Tiefpunkt** im s-t-Diagramm bedeutet $v = 0$, einen Umkehrpunkt.
- Ein v-t-Graph, der die Zeitachse **schneidet**, bedeutet Richtungsumkehr.
- Ist das s-t-Diagramm **nach oben gekrümmt**, ist $a > 0$. Nach unten gekrümmt heißt $a < 0$.
- Ein **Knick** im s-t-Diagramm bedeutet einen Sprung der Geschwindigkeit. In der Natur gibt es das nur näherungsweise, etwa bei einem Stoß.
- Die **Höhe** eines Punkts im v-t-Diagramm ist eine Geschwindigkeit, **kein** Ort.

:::beispiel[Eine Straßenbahn zwischen zwei Haltestellen]
Eine Straßenbahn beschleunigt $5\,\text{s}$ lang gleichmäßig aus dem Stand auf $10\,\text{m/s}$, fährt $20\,\text{s}$ mit
dieser Geschwindigkeit und bremst in $5\,\text{s}$ gleichmäßig bis zum Stillstand.

**Schritt 1, Beschleunigungen (Steigungen):** Anfahren $a = 10\,\text{m/s} / 5\,\text{s} = 2\,\text{m/s}^2$, Fahren $a = 0$,
Bremsen $a = -10\,\text{m/s} / 5\,\text{s} = -2\,\text{m/s}^2$.

**Schritt 2, Weg (Fläche):** Dreieck $\tfrac12\cdot 5\,\text{s}\cdot 10\,\text{m/s} = 25\,\text{m}$, Rechteck
$20\,\text{s}\cdot 10\,\text{m/s} = 200\,\text{m}$, Dreieck $25\,\text{m}$. Zusammen $250\,\text{m}$.

**Schritt 3, s-t-Diagramm skizzieren:** Zuerst kommt eine nach oben gekrümmte Parabel bis $25\,\text{m}$. Dann folgt
eine Gerade mit Steigung $10\,\text{m/s}$ bis $225\,\text{m}$. Zum Schluss kommt eine nach unten gekrümmte Parabel, die bei
$250\,\text{m}$ waagrecht ausläuft.
:::

```plot
x: [0, 32]
y: [0, 12]
achsen: { x: "t in s", y: "v in m/s" }
graphen:
  - { f: "min(2*x, 10, 10 - 2*(x - 25))", farbe: 0, von: 0, bis: 30 }
flaechen:
  - { f: "min(2*x, 10, 10 - 2*(x - 25))", von: 0, bis: 30, farbe: 0 }
beschriftung: "v-t-Diagramm der Straßenbahn: Anstieg auf 10 m/s in 5 s, 20 s waagrecht, Abfall auf 0 in 5 s. Die gefärbte Trapezfläche ist der Weg von 250 m."
```

### Die Fläche unter der Zeitachse

Ist die Geschwindigkeit negativ, liegt der v-t-Graph unter der Zeitachse. Der Körper bewegt sich dann zurück.
Diese Fläche zählt für die **Verschiebung** negativ. Für den **Weg** zählt sie positiv.

:::beispiel[Ein Wagen kehrt um]
Ein Wagen fährt mit $6\,\text{m/s}$ eine Rampe hinauf und wird mit konstant $2\,\text{m/s}^2$ gebremst. Nach $5\,\text{s}$ hat er
$v = 6 - 2\cdot 5 = -4\,\text{m/s}$, rollt also schon wieder hinunter.

**Schritt 1, Umkehrzeitpunkt:** $v = 0$ bei $t = 6/2\,\text{s} = 3\,\text{s}$.

**Schritt 2, Fläche über der Achse:** Dreieck $\tfrac12\cdot 3\,\text{s}\cdot 6\,\text{m/s} = 9\,\text{m}$ hinauf.

**Schritt 3, Fläche unter der Achse:** Dreieck $\tfrac12\cdot 2\,\text{s}\cdot 4\,\text{m/s} = 4\,\text{m}$ hinunter.

**Antwort:** Verschiebung $9\,\text{m} - 4\,\text{m} = 5\,\text{m}$, Weg $9\,\text{m} + 4\,\text{m} = 13\,\text{m}$. Probe mit der Formel:
$\Delta x = 6\cdot 5 - \tfrac12\cdot 2\cdot 25 = 30 - 25 = 5\,\text{m}$. ✓
:::

:::achtung[Fehler: die Fläche unter der Achse positiv zur Verschiebung zählen]
Für den Wagen aus dem Beispiel „Ein Wagen kehrt um“ rechnet ein Schüler: „Verschiebung $= 9\,\text{m} + 4\,\text{m} = 13\,\text{m}$.
Der Wagen steht $13\,\text{m}$ über dem Start.“ Das ist der **Weg**. Der Wagen ist $4\,\text{m}$ wieder hinuntergerollt, er steht nur
$5\,\text{m}$ über dem Start. Für die Verschiebung zählt die Fläche unter der Achse negativ.
:::

:::achtung[Fehler: die Höhe im v-t-Diagramm als Ort lesen]
Ein v-t-Graph zeigt bei $t = 4\,\text{s}$ den Wert $8\,\text{m/s}$. Eine Schülerin schreibt: „Nach $4\,\text{s}$ ist der Körper $8\,\text{m}$
vom Start entfernt.“ Die Höhe ist aber die **Geschwindigkeit**. Wie weit er ist, steht in der **Fläche** unter dem Graphen.
Startet er aus der Ruhe mit konstanter Beschleunigung, ist die Fläche ein Dreieck: $\tfrac12\cdot 4\,\text{s}\cdot 8\,\text{m/s} = 16\,\text{m}$.
:::

### Fläche unter einem krummen v-t-Graphen

Ist die Beschleunigung nicht konstant, ist der v-t-Graph gekrümmt. Die Regel „Fläche $=$ Verschiebung“ gilt trotzdem.
Nur kann man die Fläche nicht mehr aus Rechtecken und Dreiecken genau zusammensetzen. Man hat zwei Wege:

1. **Näherung:** Kästchen zählen oder die Fläche in schmale Trapeze zerlegen.
2. **Exakt:** Ist $v(t)$ als Formel bekannt, berechnet man das Integral $\Delta x = \int_{t_1}^{t_2} v(t)\,\dd t$, siehe
   [10.2 Das bestimmte Integral als Flächenbilanz](/lernen/mathe3/integralrechnung/das-bestimmte-integral-als-flaechenbilanz).

:::beispiel[Ein Fahrzeug, das immer stärker beschleunigt]
Ein Fahrzeug fährt nach $v(t) = 0{,}3\,t^2$ ($v$ in m/s, $t$ in s) los. Wie weit kommt es in den ersten $6\,\text{s}$?

**Schritt 1, Werte ablesen:** $v(0) = 0$, $v(2) = 1{,}2$, $v(4) = 4{,}8$, $v(6) = 10{,}8$ (alles in m/s).

**Schritt 2, drei Trapeze mit je $2\,\text{s}$ Breite:** $2\cdot\tfrac{0 + 1{,}2}{2} + 2\cdot\tfrac{1{,}2 + 4{,}8}{2} + 2\cdot\tfrac{4{,}8 + 10{,}8}{2} = 1{,}2 + 6{,}0 + 15{,}6 = 22{,}8$, in Metern.

**Schritt 3, exakt mit dem Integral:** $\int_0^6 0{,}3\,t^2\,\dd t = 0{,}1\,t^3\Big|_0^6 = 21{,}6\,\text{m}$.

**Deutung:** Die Trapeze liegen hier ein wenig über der Kurve, weil sie nach oben gekrümmt ist. Mit schmaleren
Trapezen käme die Näherung dem exakten Wert immer näher.
:::

:::merke
1. Steigung im s-t-Diagramm $=$ Geschwindigkeit. Steigung im v-t-Diagramm $=$ Beschleunigung.
2. Fläche unter dem v-t-Graphen $=$ Verschiebung (unter der Achse negativ). Fläche unter dem a-t-Graphen $=$ Geschwindigkeitsänderung.
3. Für den Weg alle Flächen positiv zählen.
4. Bei krummen Graphen: Trapeze als Näherung, Integral für den exakten Wert.
:::

:::pruefung
Beschrifte beim Skizzieren beide Achsen mit Größe und Einheit, etwa „$t$ in s“ und „$v$ in m/s“. Markiere besondere
Punkte mit ihren Werten, zum Beispiel den Umkehrpunkt. Ein Diagramm ohne Achsenbeschriftung bekommt auch bei richtiger
Form kaum Punkte, weil man nicht erkennt, ob es ein s-t- oder ein v-t-Diagramm sein soll.
:::

```reflexion
frage: Zwei v-t-Graphen enden zur selben Zeit bei derselben Geschwindigkeit. Haben die beiden Körper dann denselben Weg zurückgelegt? Erkläre mit dem Flächenargument.
antwort: |
  Nicht unbedingt. Der Weg ist die **Fläche** unter dem Graphen, nicht der Endwert. Ein Körper, der früh schnell wird,
  hat eine größere Fläche unter seinem Graphen als einer, der erst am Ende beschleunigt. Gleiche Endgeschwindigkeit sagt
  also nichts über gleiche Wege. Gleich sind die Wege nur, wenn die Flächen gleich groß sind.
```

```aufgabe
id: p2-diagramm-zuordnen
titel: Welches v-t-Diagramm passt zum Wurf?
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Ein Ball wird senkrecht nach oben geworfen und wieder gefangen. Die Achse zeigt nach oben. Wie sieht sein v-t-Diagramm aus?
teile:
  - typ: auswahl
    optionen:
      - "eine waagrechte Linie über der t-Achse"
      - "eine fallende Gerade, die die t-Achse im Umkehrpunkt schneidet"
      - "eine nach unten geöffnete Parabel"
      - "eine steigende Gerade durch den Ursprung"
    richtig: [1]
    fehler:
      - wert: 2
        meldung: Die Parabel ist das **s-t**-Diagramm, also die Höhe über der Zeit. Die Geschwindigkeit nimmt gleichmäßig ab, ihr Graph ist eine Gerade.
      - wert: 0
        meldung: Eine waagrechte Linie hieße konstante Geschwindigkeit. Der Ball wird aber langsamer und kehrt um.
      - wert: 3
        meldung: Eine steigende Gerade hieße, der Ball wird immer schneller nach oben. Die Beschleunigung zeigt aber nach unten, die Steigung muss negativ sein.
hinweise:
  - Die Beschleunigung ist konstant $-g$. Welche Form hat dann der v-t-Graph, und welche Steigung?
loesung: |
  **Ansatz:** $v(t) = v_0 - g t$ ist linear mit der negativen Steigung $-g$.
  ---
  **Ergebnis:** Zu Beginn positiv (aufwärts), im Umkehrpunkt null, danach negativ (abwärts). Also eine fallende Gerade, die die Zeitachse schneidet. Die Parabel gehört zum s-t-Diagramm.
```

```aufgabe
id: p2-krummung
titel: Krümmung im s-t-Diagramm
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Ein s-t-Diagramm ist an einer Stelle nach unten gekrümmt (wie ein umgedrehtes U) und steigt dort noch. Was gilt an dieser Stelle?
teile:
  - typ: auswahl
    optionen:
      - '$v > 0$ und $a > 0$: Der Körper wird schneller.'
      - '$v > 0$ und $a < 0$: Der Körper wird langsamer.'
      - '$v < 0$ und $a < 0$: Der Körper wird schneller.'
      - '$v = 0$ und $a = 0$: Der Körper ruht.'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Der Graph steigt, also $v > 0$, das stimmt. Nach unten gekrümmt heißt aber, die Steigung wird **kleiner**. Die Geschwindigkeit nimmt ab, also $a < 0$.
      - wert: 2
        meldung: Ein steigender s-t-Graph hat positive Steigung, also $v > 0$. Negativ wäre $v$ nur bei einem fallenden Graphen.
hinweise:
  - Steigung des s-t-Graphen ist $v$. Wie ändert sich die Steigung bei einem umgedrehten U?
loesung: |
  **Geschwindigkeit:** Der Graph steigt, also ist die Steigung positiv, $v > 0$.
  ---
  **Beschleunigung:** Nach unten gekrümmt heißt, die Steigung nimmt ab, also $a < 0$. Der Körper bremst, etwa ein Ball kurz vor dem höchsten Punkt.
```

```aufgabe
id: p2-vt-flaeche
titel: Weg aus dem v-t-Diagramm
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Ein Zug beschleunigt aus dem Stand in $4\,\text{s}$ gleichmäßig auf $12\,\text{m/s}$, fährt $6\,\text{s}$ mit konstanter Geschwindigkeit und bremst dann in $3\,\text{s}$ gleichmäßig bis zum Stillstand. Welchen Weg legt er insgesamt zurück? Welche Bremsbeschleunigung hat er?
plot:
  x: [0, 14]
  y: [0, 14]
  achsen: { x: "t in s", y: "v in m/s" }
  graphen:
    - { f: "min(3*x, 12, 12 - 4*(x - 10))", von: 0, bis: 13, farbe: 0 }
  flaechen:
    - { f: "min(3*x, 12, 12 - 4*(x - 10))", von: 0, bis: 13, farbe: 0 }
teile:
  - typ: zahl
    label: Gesamtweg
    loesung: "0.5*4*12 + 6*12 + 0.5*3*12"
    einheit: "m"
    anzeige: '114'
    fehler:
      - wert: "13*12"
        meldung: Du hast so gerechnet, als wäre der Zug die ganzen $13\,\text{s}$ mit $12\,\text{m/s}$ gefahren, also ohne den Faktor $\tfrac12$ beim Anfahren und Bremsen. In diesen Phasen ist er langsamer, dort sind die Flächen Dreiecke, keine Rechtecke.
      - wert: "0.5*13*12"
        meldung: Du hast ein einziges Dreieck über die ganzen $13\,\text{s}$ gebildet. Zwischen $4\,\text{s}$ und $10\,\text{s}$ fährt der Zug aber konstant $12\,\text{m/s}$, dort ist die Fläche ein Rechteck.
  - typ: zahl
    label: Bremsbeschleunigung
    loesung: "-12/3"
    einheit: "m/s²"
    anzeige: '-4'
    fehler:
      - wert: "4"
        meldung: Der Zug fährt in positive Richtung und wird langsamer. Die Beschleunigung zeigt entgegen, sie ist negativ.
hinweise:
  - Zerlege die Fläche in zwei Dreiecke und ein Rechteck.
  - Die Bremsbeschleunigung ist die Steigung des letzten Abschnitts, $\Delta v / \Delta t$.
loesung: |
  **Ansatz:** Der Weg ist die Fläche unter dem v-t-Graphen. Wir zerlegen sie in drei einfache Flächen.
  ---
  **Anfahren (Dreieck):** $\tfrac12\cdot 4\,\text{s}\cdot 12\,\text{m/s} = 24\,\text{m}$. **Konstante Fahrt (Rechteck):** $6\,\text{s}\cdot 12\,\text{m/s} = 72\,\text{m}$.
  ---
  **Bremsen (Dreieck):** $\tfrac12\cdot 3\,\text{s}\cdot 12\,\text{m/s} = 18\,\text{m}$. Gesamt: $24\,\text{m} + 72\,\text{m} + 18\,\text{m} = 114\,\text{m}$.
  ---
  **Bremsbeschleunigung:** $a = \dfrac{0 - 12\,\text{m/s}}{3\,\text{s}} = -4\,\text{m/s}^2$. Probe: Die steilere Bremsflanke im Diagramm passt zu $|a| = 4$ gegenüber $3\,\text{m/s}^2$ beim Anfahren.
```

```aufgabe
id: p2-flaeche-at
titel: Geschwindigkeit aus dem a-t-Diagramm
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Ein Radfahrer fährt mit $4{,}0\,\text{m/s}$. Dann beschleunigt er $5\,\text{s}$ lang mit $0{,}6\,\text{m/s}^2$ und anschließend $2\,\text{s}$ lang mit $-1{,}5\,\text{m/s}^2$. Das a-t-Diagramm zeigt diese zwei Phasen. Welche Geschwindigkeit hat er am Ende?
plot:
  x: [0, 8]
  y: [-2, 1]
  achsen: { x: "t in s", y: "a in m/s²" }
  strecken:
    - { von: [0, 0.6], nach: [5, 0.6], farbe: 0 }
    - { von: [5, -1.5], nach: [7, -1.5], farbe: 0 }
teile:
  - typ: zahl
    loesung: "4 + 0.6*5 - 1.5*2"
    einheit: "m/s"
    anzeige: '4'
    fehler:
      - wert: "0.6*5 - 1.5*2"
        meldung: Das ist nur die gesamte **Änderung** der Geschwindigkeit. Die Fläche unter dem a-t-Graphen liefert keinen Anfangswert, die $4{,}0\,\text{m/s}$ vom Anfang musst du dazuzählen.
      - wert: "4 + 0.6*5 + 1.5*2"
        meldung: Die Fläche der zweiten Phase liegt unter der Achse und zählt negativ. Der Radfahrer bremst dort.
hinweise:
  - 'Die Geschwindigkeitsänderung je Phase ist die Fläche unter dem a-t-Graphen, $\Delta v = a\cdot\Delta t$.'
  - Zähle beide Änderungen zur Anfangsgeschwindigkeit dazu, die zweite mit ihrem Minus.
loesung: |
  **Ansatz:** Die Fläche unter dem a-t-Graphen ist die Geschwindigkeitsänderung. Den Startwert muss man dazuzählen.
  ---
  **Phase 1:** $\Delta v_1 = 0{,}6\,\text{m/s}^2\cdot 5\,\text{s} = 3{,}0\,\text{m/s}$, also danach $7{,}0\,\text{m/s}$.
  ---
  **Phase 2:** $\Delta v_2 = -1{,}5\,\text{m/s}^2\cdot 2\,\text{s} = -3{,}0\,\text{m/s}$, also am Ende wieder $4{,}0\,\text{m/s}$. Die beiden Flächen sind gleich groß und heben sich auf.
```

```aufgabe
id: p2-5-umkehr
titel: Weg und Verschiebung aus einem v-t-Diagramm
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Ein Puck gleitet eine schräge Eisrampe hinauf. Sein v-t-Diagramm ist eine Gerade von $(0\,\text{s} \mid 8\,\text{m/s})$ bis $(6\,\text{s} \mid -4\,\text{m/s})$. Die Achse zeigt rampenaufwärts.

  a) Wie groß ist die Verschiebung nach $6\,\text{s}$?

  b) Welchen Weg hat der Puck zurückgelegt?
plot:
  x: [0, 7]
  y: [-6, 10]
  achsen: { x: "t in s", y: "v in m/s" }
  graphen:
    - { f: "8 - 2*x", von: 0, bis: 6, farbe: 0 }
  flaechen:
    - { f: "8 - 2*x", von: 0, bis: 4, farbe: 1 }
    - { f: "8 - 2*x", von: 4, bis: 6, farbe: 0 }
teile:
  - typ: zahl
    label: a) Verschiebung
    loesung: "0.5*4*8 - 0.5*2*4"
    einheit: "m"
    anzeige: '12'
    fehler:
      - wert: "0.5*4*8 + 0.5*2*4"
        meldung: Das ist der Weg. Für die Verschiebung zählt die Fläche unter der Zeitachse negativ, denn dort gleitet der Puck zurück.
  - typ: zahl
    label: b) Weg
    loesung: "0.5*4*8 + 0.5*2*4"
    einheit: "m"
    anzeige: '20'
    fehler:
      - wert: "0.5*4*8 - 0.5*2*4"
        meldung: Das ist die Verschiebung. Beim Weg zählt auch das Zurückgleiten positiv.
      - wert: "0.5*6*8"
        meldung: Du hast ein Dreieck über die ganzen $6\,\text{s}$ gebildet. Der Graph schneidet aber die Zeitachse. Teile die Fläche am Nulldurchgang.
hinweise:
  - Bestimme zuerst, wann der Graph die Zeitachse schneidet. Dort kehrt der Puck um.
  - Berechne die Dreiecke über und unter der Achse einzeln.
gefuehrt:
  - text: Wie groß ist die Beschleunigung (Steigung) in $\text{m/s}^2$?
    teil: { typ: zahl, loesung: "(-4-8)/6" }
    erklaerung: $a = \dfrac{-4 - 8}{6}\,\text{m/s}^2 = -2\,\text{m/s}^2$.
  - text: Zu welcher Zeit ist $v = 0$ (in s)?
    teil: { typ: zahl, loesung: "8/2" }
    erklaerung: $8 - 2t = 0$ ergibt $t = 4\,\text{s}$. Dort kehrt der Puck um.
  - text: Wie groß ist die Fläche über der Achse (in m)?
    teil: { typ: zahl, loesung: "0.5*4*8" }
    erklaerung: Dreieck $\tfrac12\cdot 4\,\text{s}\cdot 8\,\text{m/s} = 16\,\text{m}$ rampenaufwärts.
  - text: Wie groß ist die Fläche unter der Achse (Betrag, in m)?
    teil: { typ: zahl, loesung: "0.5*2*4" }
    erklaerung: Dreieck $\tfrac12\cdot 2\,\text{s}\cdot 4\,\text{m/s} = 4\,\text{m}$ zurück. Verschiebung $16 - 4 = 12\,\text{m}$, Weg $16 + 4 = 20\,\text{m}$.
loesung: |
  **Umkehrpunkt:** Die Steigung ist $a = -2\,\text{m/s}^2$, also $v = 8 - 2t$ in m/s. $v = 0$ bei $t = 4\,\text{s}$.
  ---
  **Flächen:** Über der Achse $\tfrac12\cdot 4\,\text{s}\cdot 8\,\text{m/s} = 16\,\text{m}$, unter der Achse $\tfrac12\cdot 2\,\text{s}\cdot 4\,\text{m/s} = 4\,\text{m}$.
  ---
  **a)** Verschiebung $16\,\text{m} - 4\,\text{m} = 12\,\text{m}$. **b)** Weg $16\,\text{m} + 4\,\text{m} = 20\,\text{m}$.
  ---
  **Probe:** $\Delta x = v_0 t + \tfrac12 a t^2 = 8\cdot 6 - \tfrac12\cdot 2\cdot 36 = 48 - 36 = 12\,\text{m}$. ✓
```

```aufgabe
id: p2-5-st-aus-vt
titel: Vom v-t- zum s-t-Diagramm
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: |
  Das v-t-Diagramm einer Läuferin besteht aus drei waagrechten Stücken: zuerst $v = +3\,\text{m/s}$, dann $v = 0$, dann $v = -2\,\text{m/s}$. Welches s-t-Diagramm passt dazu?
teile:
  - typ: auswahl
    optionen:
      - "drei waagrechte Stücke in den Höhen 3, 0 und −2"
      - "eine steigende Gerade, dann ein waagrechtes Stück, dann eine fallende Gerade, die flacher ist als die erste"
      - "eine steigende Gerade, dann ein Sprung auf null, dann eine fallende Gerade"
      - "eine nach oben gekrümmte Parabel, dann eine nach unten gekrümmte"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Du hast das v-t-Diagramm einfach abgeschrieben. Im s-t-Diagramm ist die Geschwindigkeit die **Steigung**, nicht die Höhe.
      - wert: 2
        meldung: Ein Ort kann nicht springen. Bei $v = 0$ bleibt der Ort einfach gleich, der s-t-Graph wird waagrecht.
      - wert: 3
        meldung: Gekrümmte s-t-Graphen gehören zu Beschleunigung. Hier ist die Geschwindigkeit in jeder Phase konstant, also sind die Stücke gerade.
hinweise:
  - Konstante Geschwindigkeit ergibt im s-t-Diagramm eine Gerade mit Steigung $v$.
  - Vergleiche die Beträge $3\,\text{m/s}$ und $2\,\text{m/s}$. Welche Gerade ist steiler?
loesung: |
  **Ansatz:** Konstantes $v$ heißt gerades Stück im s-t-Diagramm mit Steigung $v$.
  ---
  **Phasen:** Steigung $+3$ (steigend), Steigung $0$ (waagrecht), Steigung $-2$ (fallend, aber flacher als die erste Gerade, weil $2 < 3$).
  ---
  **Ergebnis:** Antwort 2. Der Ort ändert sich stetig, er springt nie.
```

```aufgabe
id: p2-5-krumm
titel: Bremsen mit nachlassender Verzögerung
niveau: 3
lernziel: 4
kompetenz: modellieren
angabe: |
  Ein Auto bremst bis zum Stillstand. Die Fahrerin tritt zuerst kräftig auf die Bremse und lässt dann immer mehr nach. Die Geschwindigkeit folgt $v(t) = 0{,}5\,(6 - t)^2$ für $0 \le t \le 6$ ($v$ in m/s, $t$ in s).

  a) Lies $v$ bei $t = 0$, $2$, $4$ und $6\,\text{s}$ ab und schätze den Weg mit drei Trapezen der Breite $2\,\text{s}$.

  b) Berechne den Weg exakt mit dem Integral.

  c) Wie groß ist die mittlere Beschleunigung in den $6\,\text{s}$?
plot:
  x: [0, 7]
  y: [0, 20]
  achsen: { x: "t in s", y: "v in m/s" }
  graphen:
    - { f: "0.5*(6-x)^2", von: 0, bis: 6, farbe: 0 }
  punkte:
    - { x: 0, y: 18 }
    - { x: 2, y: 8 }
    - { x: 4, y: 2 }
    - { x: 6, y: 0 }
teile:
  - typ: zahl
    label: a) Weg mit Trapezen
    loesung: "2*(18+8)/2 + 2*(8+2)/2 + 2*(2+0)/2"
    einheit: "m"
    anzeige: '38'
  - typ: zahl
    label: b) exakter Weg
    loesung: "integral(\"0.5*(6-x)^2\", 0, 6)"
    einheit: "m"
    anzeige: '36'
    fehler:
      - wert: "0.5*6*18"
        meldung: Das wäre ein Dreieck unter einer **geraden** Linie von $18\,\text{m/s}$ auf $0$. Der Graph ist aber nach oben gekrümmt und liegt unter dieser Geraden. Integriere $v(t)$.
  - typ: zahl
    label: c) mittlere Beschleunigung
    loesung: "(0-18)/6"
    einheit: "m/s²"
    anzeige: '-3'
hinweise:
  - 'Trapezfläche $= \text{Breite}\cdot\dfrac{\text{linker Wert} + \text{rechter Wert}}{2}$, für jedes der drei Stücke einzeln.'
  - 'Eine Stammfunktion von $0{,}5\,(6 - t)^2$ ist $-\tfrac16 (6 - t)^3$. Prüfe das durch Ableiten (Kettenregel).'
  - 'Mittlere Beschleunigung $\Delta v / \Delta t$ zwischen $t = 0$ und $t = 6\,\text{s}$.'
loesung: |
  **Modell:** Der Weg ist die Fläche unter dem v-t-Graphen, auch wenn der Graph gekrümmt ist.
  ---
  **a)** $v(0) = 18$, $v(2) = 8$, $v(4) = 2$, $v(6) = 0$ in m/s. Trapeze: $2\,\text{s}\cdot\tfrac{18 + 8}{2}\,\text{m/s} + 2\,\text{s}\cdot\tfrac{8 + 2}{2}\,\text{m/s} + 2\,\text{s}\cdot\tfrac{2 + 0}{2}\,\text{m/s} = 26\,\text{m} + 10\,\text{m} + 2\,\text{m} = 38\,\text{m}$.
  ---
  **b)** $\int_0^6 0{,}5\,(6 - t)^2\,\dd t = \left[-\tfrac16 (6 - t)^3\right]_0^6 = 0 - \left(-\tfrac{216}{6}\right) = 36$, also $36\,\text{m}$. Die Trapeze überschätzen um $2\,\text{m}$, weil die Kurve nach oben gekrümmt ist und unter ihren Sehnen liegt.
  ---
  **c)** $\bar a = \dfrac{0 - 18\,\text{m/s}}{6\,\text{s}} = -3\,\text{m/s}^2$. Die momentane Verzögerung ist am Anfang größer und wird immer kleiner. Das erkennt man daran, dass der Graph immer flacher wird.
```

## Begegnen, Einholen und Überholen

```aufgabe
id: p2-6-check
art: check
titel: "Vorwissen: eine lineare Gleichung lösen"
niveau: 1
angabe: |
  Löse die Gleichung $30\,t = 400 - 50\,t$ nach $t$ auf.
teile:
  - typ: zahl
    loesung: "400/80"
    anzeige: '5'
    fehler:
      - wert: "400/20"
        meldung: Du hast $50t$ von $30t$ abgezogen statt dazugezählt. Bringe $-50t$ auf die linke Seite, indem du auf beiden Seiten $50t$ **addierst**.
hinweise:
  - Bringe alle Summanden mit $t$ auf eine Seite.
loesung: |
  Wir addieren auf beiden Seiten $50t$: $80\,t = 400$.
  ---
  Dann teilen wir durch $80$: $t = 5$. Probe: $30\cdot 5 = 150$ und $400 - 250 = 150$. Wiederholen: [2.2 Lineare Gleichungen](/lernen/mathe3/gleichungen/lineare-gleichungen).
```

Zwei Fahrzeuge fahren einander entgegen. Wann und wo begegnen sie sich? Ein schnelleres Fahrzeug startet
später. Wann holt es das langsamere ein? Das sind Klassiker der Prüfung. Sie sehen verschieden aus, werden
aber alle mit demselben Rezept gelöst.

### Das Rezept: Ortsfunktionen gleichsetzen

**Begegnen** oder **Einholen** heißt: Zur selben Zeit am selben Ort. In Formeln: $x_1(t) = x_2(t)$. Daraus
folgt das Vorgehen:

1. **Ein gemeinsames Koordinatensystem** für beide Körper wählen: ein Ursprung, eine positive Richtung, eine Uhr.
2. Für jeden Körper die **Ortsfunktion** $x(t)$ aufstellen, mit Anfangsort, Geschwindigkeit samt Vorzeichen und gegebenenfalls Startverzögerung.
3. **Gleichsetzen** und nach $t$ auflösen. Dann $t$ in eine der beiden Funktionen einsetzen, um den Ort zu finden.

:::beispiel[Zwei Züge begegnen einander]
Zwischen A und B liegen $360\,\text{km}$. Um 8:00 Uhr fährt Zug 1 von A mit $120\,\text{km/h}$ los, gleichzeitig Zug 2
von B mit $120\,\text{km/h}$ in Richtung A.

**Schritt 1, Koordinatensystem:** Ursprung in A, Achse Richtung B, $t = 0$ um 8:00 Uhr. $x$ in km, $t$ in h.

**Schritt 2, Ortsfunktionen:** $x_1(t) = 120\,t$. Zug 2 startet bei $360$ und fährt gegen die Achse, also mit $-120$:
$x_2(t) = 360 - 120\,t$.

**Schritt 3, gleichsetzen:** $120\,t = 360 - 120\,t$. Wir addieren $120t$: $240\,t = 360$, also $t = 1{,}5\,\text{h}$.

**Antwort:** Um 9:30 Uhr bei $x_1 = 120\,\text{km/h}\cdot 1{,}5\,\text{h} = 180\,\text{km}$, genau in der Mitte. Abkürzung: Die Züge
nähern sich mit $120 + 120 = 240\,\text{km/h}$. Die Lücke von $360\,\text{km}$ ist nach $360/240\,\text{h} = 1{,}5\,\text{h}$ geschlossen.
:::

Diese Abkürzung heißt **Relativgeschwindigkeit**: die Geschwindigkeit, mit der sich der Abstand zweier
Körper ändert. Bei Gegenverkehr **addieren** sich die Tempi, bei gleicher Fahrtrichtung **subtrahiert** man sie.

:::achtung[Fehler: bei Gegenverkehr die Geschwindigkeiten subtrahieren]
Zwei Wanderer sind $6\,\text{km}$ voneinander entfernt und gehen einander mit $5\,\text{km/h}$ und $4\,\text{km/h}$ entgegen.
Ein Schüler rechnet: „Der Abstand schrumpft um $5 - 4 = 1\,\text{km/h}$, also treffen sie sich nach $6\,\text{h}$.“

Beide verkürzen den Abstand, jeder mit seinem eigenen Tempo. In einer Stunde schrumpft er um $5 + 4 = 9\,\text{km}$.
Richtig ist $t = 6\,\text{km} / 9\,\text{km/h} = \tfrac23\,\text{h} = 40\,\text{min}$.
:::

### Einholen mit Startverzögerung

Startet ein Körper später, verschiebt sich seine Ortsfunktion auf der Zeitachse nach rechts.

:::beispiel[Das Moped holt das Rad ein]
Ein Radfahrer startet um 8:00 Uhr mit $18\,\text{km/h}$. Um 8:30 Uhr startet am selben Ort ein Moped mit $45\,\text{km/h}$
in dieselbe Richtung. Wann und wo holt das Moped das Rad ein?

**Schritt 1, Koordinatensystem:** Ursprung am Startort, $t = 0$ um 8:00 Uhr, $x$ in km, $t$ in h.

**Schritt 2, Ortsfunktionen:** Rad $x_R(t) = 18\,t$. Das Moped fährt erst ab $t = 0{,}5\,\text{h}$, seine Fahrzeit ist
also $t - 0{,}5$: $x_M(t) = 45\,(t - 0{,}5)$ für $t \ge 0{,}5$.

**Schritt 3, gleichsetzen:** $18\,t = 45\,t - 22{,}5$. Wir ziehen $18t$ ab: $27\,t = 22{,}5$, also $t = 0{,}833\,\text{h} = 50\,\text{min}$.

**Antwort:** Um 8:50 Uhr bei $x_R = 18\,\text{km/h}\cdot 0{,}833\,\text{h} = 15\,\text{km}$. Probe: Das Moped ist $20\,\text{min}$
gefahren, $45\,\text{km/h}\cdot\tfrac13\,\text{h} = 15\,\text{km}$. ✓
:::

```plot
x: [0, 1.2]
y: [0, 25]
achsen: { x: "t in h (ab 8:00 Uhr)", y: "x in km" }
graphen:
  - { f: "18*x", label: "Rad", farbe: 0, von: 0, bis: 1.2 }
  - { f: "45*(x - 0.5)", label: "Moped", farbe: 1, von: 0.5, bis: 1.05 }
punkte:
  - { x: 0.8333, y: 15, label: "Treffpunkt 8:50 Uhr, 15 km" }
beschriftung: "s-t-Diagramm von Rad (blau) und Moped (orange). Das Moped startet eine halbe Stunde später, seine Gerade ist steiler. Der Schnittpunkt der Geraden ist der Treffpunkt: 50 Minuten nach 8:00 Uhr bei 15 km."
```

### Begegnen und Einholen im Diagramm

Jeder Treffpunkt ist im s-t-Diagramm ein **Schnittpunkt** der beiden Graphen: gleiche Zeit, gleicher Ort.
Man kann die Aufgabe deshalb auch grafisch lösen: beide Graphen sauber zeichnen und den Schnittpunkt
ablesen. Das ist eine gute Kontrolle für die Rechnung.

Vorsicht: Ein Schnittpunkt bedeutet **nicht** gleiche Geschwindigkeit. Die Geschwindigkeit ist die
Steigung, und im Schnittpunkt sind die Geraden verschieden steil. Gleich schnell sind zwei Körper dort, wo
ihre **v-t**-Graphen sich schneiden.

:::achtung[Fehler: die Startverzögerung falsch eingebaut]
Für das Moped aus dem Beispiel „Das Moped holt das Rad ein“ schreibt eine Schülerin $x_M(t) = 45\,t - 0{,}5$.
Damit zieht sie $0{,}5\,\text{km}$ ab statt einer halben Stunde Fahrzeit. Sie erhält $18t = 45t - 0{,}5$, also
$t = 0{,}0185\,\text{h}$, gut eine Minute nach 8:00 Uhr. Zu diesem Zeitpunkt steht das Moped noch.
Richtig ist $x_M = 45\,(t - 0{,}5)$: Die Klammer verschiebt die **Zeit**, nicht den Ort.
:::

### Einholen aus dem Stand

Startet der Verfolger aus der Ruhe und beschleunigt, ist seine Ortsfunktion eine Parabel. Das Gleichsetzen
führt dann auf eine quadratische Gleichung.

:::beispiel[Auto und Radfahrer an der Ampel]
An einer Ampel fährt ein Auto bei Grün mit $a = 2{,}0\,\text{m/s}^2$ los. Im selben Moment fährt ein Radfahrer mit konstant
$6{,}0\,\text{m/s}$ an ihm vorbei.

**Schritt 1, Ortsfunktionen:** Ursprung an der Haltelinie. Rad $x_R = 6{,}0\,t$, Auto $x_A = \tfrac12\cdot 2{,}0\,t^2 = 1{,}0\,t^2$.

**Schritt 2, gleichsetzen:** $6{,}0\,t = 1{,}0\,t^2$. Ausklammern: $t\,(t - 6{,}0) = 0$. Die Lösung $t = 0$ ist der Start,
die gesuchte Lösung ist $t = 6{,}0\,\text{s}$ bei $x = 36\,\text{m}$.

**Schritt 3, Geschwindigkeit des Autos:** $v_A = 2{,}0\,\text{m/s}^2\cdot 6{,}0\,\text{s} = 12\,\text{m/s}$, doppelt so schnell wie
das Rad. Das ist kein Zufall: Gleicher Weg in gleicher Zeit heißt gleiche mittlere Geschwindigkeit. Aus der Ruhe
ist die mittlere Geschwindigkeit die Hälfte der Endgeschwindigkeit.

**Schritt 4, größter Abstand:** Solange das Rad schneller ist, wächst sein Vorsprung. Am größten ist er bei gleicher
Geschwindigkeit, $2{,}0\,t = 6{,}0$, also $t = 3{,}0\,\text{s}$: $d = 6\cdot 3 - 1\cdot 9 = 9{,}0\,\text{m}$.
:::

:::merke
1. Treffen heißt $x_1(t) = x_2(t)$: gemeinsames Koordinatensystem, Ortsfunktionen aufstellen, gleichsetzen.
2. Späterer Start um $t_0$: Fahrzeit $(t - t_0)$ in die Ortsfunktion einsetzen.
3. Abkürzung Relativgeschwindigkeit: Gegenverkehr addieren, gleiche Richtung subtrahieren.
4. Im s-t-Diagramm ist der Treffpunkt der Schnittpunkt der Graphen. Größter Abstand bei gleicher Geschwindigkeit.
:::

```reflexion
frage: Warum ist der Abstand zwischen Radfahrer und anfahrendem Auto genau dann am größten, wenn beide gleich schnell sind?
antwort: |
  Solange der Radfahrer schneller ist, vergrößert er seinen Vorsprung in jeder Sekunde. Sobald das Auto schneller ist,
  schrumpft der Vorsprung. Der Übergang zwischen „wächst“ und „schrumpft“ ist der Augenblick gleicher Geschwindigkeit.
  Mathematisch: Die Ableitung des Abstands ist die Differenz der Geschwindigkeiten. Am Maximum ist sie null.
```

```aufgabe
id: p2-6-spaziergang
titel: Zwei Spaziergänger
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Zwei Spaziergänger sind $2{,}4\,\text{km}$ voneinander entfernt und gehen einander auf einem geraden Weg entgegen, der eine mit $1{,}4\,\text{m/s}$, der andere mit $1{,}0\,\text{m/s}$. Nach wie vielen Sekunden treffen sie sich?
teile:
  - typ: zahl
    loesung: "2400/(1.4+1.0)"
    einheit: "s"
    anzeige: '1000'
    fehler:
      - wert: "2400/(1.4-1.0)"
        meldung: Bei Gegenverkehr verkürzen **beide** den Abstand. Die Relativgeschwindigkeit ist die Summe der Tempi.
      - wert: "2.4/(1.4+1.0)"
        meldung: Du hast Kilometer durch m/s geteilt. Rechne die Entfernung zuerst in Meter um.
hinweise:
  - 'Der Abstand schrumpft pro Sekunde um $1{,}4\,\text{m} + 1{,}0\,\text{m}$.'
loesung: |
  **Relativgeschwindigkeit:** Der Abstand schrumpft mit $1{,}4\,\text{m/s} + 1{,}0\,\text{m/s} = 2{,}4\,\text{m/s}$.
  ---
  **Zeit:** $t = \dfrac{2400\,\text{m}}{2{,}4\,\text{m/s}} = 1000\,\text{s}$, also knapp $17$ Minuten. Probe: $1{,}4\cdot 1000 + 1{,}0\cdot 1000 = 2400\,\text{m}$. ✓
```

```aufgabe
id: p2-6-graph-ablesen
titel: Treffpunkt aus zwei Graphen ablesen
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Das s-t-Diagramm zeigt zwei Roboter A (blau) und B (orange) auf derselben Schiene. Lies ab, wann und wo sie sich treffen.
plot:
  x: [0, 8]
  y: [0, 32]
  achsen: { x: "t in s", y: "x in m" }
  graphen:
    - { f: "4*x", farbe: 0, von: 0, bis: 7.5 }
    - { f: "30 - 2*x", farbe: 1, von: 0, bis: 8 }
  punkte:
    - { x: 5, y: 20 }
teile:
  - typ: zahl
    label: Zeitpunkt
    loesung: "5"
    einheit: "s"
    fehler:
      - wert: "20"
        meldung: Das ist der **Ort** des Treffpunkts. Die Zeit liest du auf der waagrechten Achse ab.
  - typ: zahl
    label: Ort
    loesung: "20"
    einheit: "m"
    fehler:
      - wert: "5"
        meldung: Das ist die Zeit. Der Ort steht auf der senkrechten Achse.
hinweise:
  - Ein Treffpunkt ist der Schnittpunkt der beiden Graphen. Lies seine Koordinaten auf beiden Achsen ab.
loesung: |
  **Ansatz:** Gleiche Zeit und gleicher Ort bedeutet im s-t-Diagramm: Schnittpunkt der Graphen.
  ---
  **Ablesen:** Der Schnittpunkt liegt bei $t = 5\,\text{s}$ und $x = 20\,\text{m}$. Probe mit den Steigungen: A fährt mit $4\,\text{m/s}$ ab $0$, nach $5\,\text{s}$ also bei $20\,\text{m}$. B fährt mit $-2\,\text{m/s}$ ab $30\,\text{m}$, also bei $30 - 10 = 20\,\text{m}$. ✓
```

```aufgabe
id: p2-6-schnittpunkt-konzept
titel: Was bedeutet der Schnittpunkt?
niveau: 2
lernziel: 5
kompetenz: verstehen
angabe: |
  Im s-t-Diagramm schneiden sich die Geraden zweier Läufer bei $t = 12\,\text{s}$. Welche Aussage ist sicher richtig?
teile:
  - typ: auswahl
    optionen:
      - "Bei 12 s sind beide gleich schnell."
      - "Bei 12 s sind beide am selben Ort."
      - "Bei 12 s haben beide denselben Weg zurückgelegt."
      - "Ab 12 s laufen beide gemeinsam weiter."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Die Geschwindigkeit ist die **Steigung**. Schneiden sich zwei Geraden, sind sie verschieden steil, die Läufer also verschieden schnell. Das ist eine sehr häufige Verwechslung.
      - wert: 2
        meldung: Gleicher Ort heißt nicht gleicher Weg. Die Läufer können an verschiedenen Orten gestartet sein.
      - wert: 3
        meldung: Verschiedene Steigungen bedeuten verschiedene Geschwindigkeiten. Nach dem Schnittpunkt laufen die Graphen wieder auseinander.
hinweise:
  - Was steht auf den beiden Achsen eines s-t-Diagramms?
  - Wo sieht man im s-t-Diagramm die Geschwindigkeit?
loesung: |
  **Ansatz:** Ein Punkt im s-t-Diagramm gibt eine Zeit und einen Ort an.
  ---
  **Schnittpunkt:** Zur gleichen Zeit derselbe Ort, also treffen sich die Läufer. Antwort 2.
  ---
  **Warum nicht gleich schnell?** Die Geschwindigkeit ist die Steigung. Sich schneidende Geraden haben verschiedene Steigungen.
```

```aufgabe
id: p2-zuege-begegnung
titel: Begegnung mit ungleichen Geschwindigkeiten
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Die Strecke zwischen A und B ist $450\,\text{km}$ lang. Zug 1 fährt von A mit $100\,\text{km/h}$, gleichzeitig startet Zug 2 von B mit $150\,\text{km/h}$ in Richtung A. Nach wie vielen Minuten begegnen sie einander, und wie weit ist der Treffpunkt von A entfernt?
teile:
  - typ: zahl
    label: Zeit in min
    loesung: "450/(100+150)*60"
    einheit: "min"
    anzeige: '108'
    fehler:
      - wert: "450/(150-100)*60"
        meldung: Die Züge fahren einander entgegen. Die Relativgeschwindigkeit ist deshalb die **Summe** der Geschwindigkeiten.
      - wert: "450/(100+150)"
        meldung: Das ist die Zeit in Stunden. Gefragt sind Minuten.
  - typ: zahl
    label: Entfernung von A in km
    loesung: "100*450/(100+150)"
    einheit: "km"
    anzeige: '180'
    fehler:
      - wert: "150*450/(100+150)"
        meldung: Das ist die Strecke, die Zug 2 gefahren ist, also die Entfernung von **B**.
hinweise:
  - 'Stelle $x_1(t) = 100\,t$ und $x_2(t) = 450 - 150\,t$ auf ($x$ in km, $t$ in h).'
  - Setze gleich und löse nach $t$. Den Ort erhältst du durch Einsetzen in $x_1$.
loesung: |
  **Ansatz:** Ursprung in A, Achse Richtung B. $x_1(t) = 100\,t$ und $x_2(t) = 450 - 150\,t$ ($x$ in km, $t$ in h).
  ---
  **Gleichsetzen:** $100\,t = 450 - 150\,t$, also $250\,t = 450$ und $t = 1{,}8\,\text{h} = 108\,\text{min}$.
  ---
  **Treffpunkt:** $x_1 = 100\,\text{km/h}\cdot 1{,}8\,\text{h} = 180\,\text{km}$ von A.
  ---
  **Probe:** Zug 2 fährt $150\,\text{km/h}\cdot 1{,}8\,\text{h} = 270\,\text{km}$, und $180\,\text{km} + 270\,\text{km} = 450\,\text{km}$. ✓
```

```aufgabe
id: p2-6-zeitversatz
titel: Das Auto holt den Bus ein
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Ein Reisebus verlässt um 9:00 Uhr den Busbahnhof mit konstant $60\,\text{km/h}$. Um 9:20 Uhr fährt am selben Ort ein Auto mit konstant $90\,\text{km/h}$ hinterher. Wann holt das Auto den Bus ein, und wie weit sind beide dann vom Busbahnhof entfernt?
teile:
  - typ: zahl
    label: Zeit nach 9:00 Uhr in min
    loesung: "30/(90-60)*60"
    einheit: "min"
    anzeige: '60'
    fehler:
      - wert: "20"
        meldung: Das ist die Startverzögerung des Autos. Gesucht ist der Zeitpunkt des Einholens, gemessen ab 9:00 Uhr.
      - wert: "40"
        meldung: Das ist die Fahrzeit des **Autos**. Gesucht ist die Zeit ab 9:00 Uhr. Das Auto ist $20\,\text{min}$ später gestartet.
  - typ: zahl
    label: Entfernung in km
    loesung: "60*1"
    einheit: "km"
    anzeige: '60'
    fehler:
      - wert: "90*1"
        meldung: Das Auto fährt nicht die ganze Stunde, sondern erst ab 9:20 Uhr. Setze seine Fahrzeit $t - \tfrac13\,\text{h}$ ein oder rechne mit dem Bus.
hinweise:
  - 'Wähle $t = 0$ um 9:00 Uhr. Dann gilt für den Bus $x_B = 60\,t$ und für das Auto $x_A = 90\,(t - \tfrac13)$, $x$ in km und $t$ in h.'
  - Setze gleich und löse nach $t$ auf.
gefuehrt:
  - text: Wie viele Kilometer Vorsprung hat der Bus um 9:20 Uhr?
    teil: { typ: zahl, loesung: "60/3" }
    erklaerung: In $\tfrac13\,\text{h}$ fährt der Bus $60\,\text{km/h}\cdot\tfrac13\,\text{h} = 20\,\text{km}$.
  - text: Um wie viele km/h ist das Auto schneller als der Bus?
    teil: { typ: zahl, loesung: "90-60" }
    erklaerung: Die Relativgeschwindigkeit bei gleicher Fahrtrichtung ist $90 - 60 = 30\,\text{km/h}$.
  - text: Wie viele Minuten braucht das Auto, um den Vorsprung aufzuholen?
    teil: { typ: zahl, loesung: "20/30*60" }
    erklaerung: $20\,\text{km} / 30\,\text{km/h} = \tfrac23\,\text{h} = 40\,\text{min}$.
  - text: Um wie viel Uhr ist das, und wo?
    erklaerung: 9:20 Uhr plus $40\,\text{min}$ ergibt 10:00 Uhr, also $60\,\text{min}$ nach 9:00 Uhr. Der Bus ist dann $60\,\text{km/h}\cdot 1\,\text{h} = 60\,\text{km}$ weit.
loesung: |
  **Ansatz:** $t = 0$ um 9:00 Uhr, Ursprung am Busbahnhof. Bus $x_B = 60\,t$, Auto $x_A = 90\,(t - \tfrac13)$ für $t \ge \tfrac13$ ($x$ in km, $t$ in h).
  ---
  **Gleichsetzen:** $60\,t = 90\,t - 30$. Wir ziehen $60t$ ab und addieren $30$: $30 = 30\,t$, also $t = 1\,\text{h}$, um 10:00 Uhr.
  ---
  **Ort:** $x_B = 60\,\text{km/h}\cdot 1\,\text{h} = 60\,\text{km}$.
  ---
  **Probe:** Das Auto fährt $40\,\text{min}$, also $90\,\text{km/h}\cdot\tfrac23\,\text{h} = 60\,\text{km}$. ✓
```

```aufgabe
id: p2-zuege-vorbeifahrt
titel: Wie lange dauert die Vorbeifahrt?
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Ein $200\,\text{m}$ langer Zug fährt mit $25\,\text{m/s}$, ein $150\,\text{m}$ langer Zug auf dem Nachbargleis mit $20\,\text{m/s}$. Runde auf zwei Nachkommastellen.

  a) Wie lange dauert es vom Treffen der Lokspitzen bis zum Ende der Vorbeifahrt, wenn die Züge einander entgegenkommen?

  b) Wie lange dauert das Überholen, wenn sie in dieselbe Richtung fahren? Gemeint ist die Zeit von „Spitze des schnellen Zuges am Ende des langsamen“ bis „Ende des schnellen an der Spitze des langsamen“.
teile:
  - typ: zahl
    label: a) in s
    loesung: "(200+150)/(25+20)"
    einheit: "s"
    anzeige: '7{,}78'
    fehler:
      - wert: "200/(25+20)"
        meldung: Relativ zueinander müssen die Züge die Länge **beider** Züge überwinden, also $350\,\text{m}$.
  - typ: zahl
    label: b) in s
    loesung: "(200+150)/(25-20)"
    einheit: "s"
    anzeige: '70'
    fehler:
      - wert: "(200+150)/(25+20)"
        meldung: Bei gleicher Fahrtrichtung ist die Relativgeschwindigkeit die **Differenz**, $25 - 20 = 5\,\text{m/s}$.
hinweise:
  - Rechne im Bezugssystem eines der Züge. Dann ruht dieser, und der andere bewegt sich mit der Relativgeschwindigkeit.
  - Der relative Weg ist die Summe beider Zuglängen.
loesung: |
  **Ansatz:** Im Bezugssystem eines Zuges muss der andere die Länge beider Züge zurücklegen: $200\,\text{m} + 150\,\text{m} = 350\,\text{m}$.
  ---
  **a)** Gegenverkehr: $v_{\text{rel}} = 25\,\text{m/s} + 20\,\text{m/s} = 45\,\text{m/s}$, $t = \dfrac{350\,\text{m}}{45\,\text{m/s}} = 7{,}78\,\text{s}$.
  ---
  **b)** Gleiche Richtung: $v_{\text{rel}} = 5\,\text{m/s}$, $t = \dfrac{350\,\text{m}}{5\,\text{m/s}} = 70\,\text{s}$. Überholen mit kleinem Geschwindigkeitsunterschied dauert neunmal so lange.
```

```aufgabe
id: p2-einholen
titel: Polizeiauto holt Raser ein
niveau: 3
lernziel: 5
kompetenz: modellieren
angabe: |
  Ein Raser fährt mit konstant $30\,\text{m/s}$ an einem stehenden Polizeiauto vorbei. Im selben Moment startet die Polizei mit konstant $3{,}0\,\text{m/s}^2$.

  a) Nach welcher Zeit holt die Polizei den Raser ein?

  b) Welchen Weg haben beide dann zurückgelegt?

  c) Wie schnell ist das Polizeiauto in diesem Moment?

  d) Wie groß ist der Vorsprung des Rasers höchstens?
teile:
  - typ: zahl
    label: a) Zeit
    loesung: "2*30/3"
    einheit: "s"
    anzeige: '20'
    fehler:
      - wert: "30/3"
        meldung: Nach $10\,\text{s}$ ist die Polizei erst **gleich schnell** wie der Raser. Eingeholt hat sie ihn da noch nicht, denn bis dahin war sie langsamer. Setze die **Orte** gleich.
  - typ: zahl
    label: b) Weg
    loesung: "30*20"
    einheit: "m"
    anzeige: '600'
  - typ: zahl
    label: c) Geschwindigkeit
    loesung: "3*20"
    einheit: "m/s"
    anzeige: '60'
  - typ: zahl
    label: d) größter Vorsprung
    loesung: "30*10 - 1.5*10^2"
    einheit: "m"
    anzeige: '150'
    fehler:
      - wert: "600"
        meldung: Das ist der Ort des Einholens. Der größte Vorsprung entsteht früher, wenn beide gleich schnell sind.
hinweise:
  - 'Raser: $x_R = 30\,t$. Polizei: $x_P = \tfrac12\cdot 3{,}0\,t^2$ ($x$ in m, $t$ in s). Gleichsetzen.'
  - 'Die Lösung $t = 0$ ist der Start. Für d): Der Vorsprung ist am größten, wenn beide gleich schnell sind.'
loesung: |
  **Ansatz:** Ursprung beim Polizeiauto, $t = 0$ beim Vorbeifahren. $x_R = 30\,t$ und $x_P = 1{,}5\,t^2$ ($x$ in m, $t$ in s).
  ---
  **a)** $30\,t = 1{,}5\,t^2$, also $t\,(1{,}5\,t - 30) = 0$. Die Lösung $t = 0$ ist der Start, gesucht ist $t = 20\,\text{s}$.
  ---
  **b)** $x = 30\,\text{m/s}\cdot 20\,\text{s} = 600\,\text{m}$. **c)** $v_P = 3{,}0\,\text{m/s}^2\cdot 20\,\text{s} = 60\,\text{m/s} = 216\,\text{km/h}$, doppelt so schnell wie der Raser.
  ---
  **d)** Gleich schnell bei $3{,}0\,t = 30$, also $t = 10\,\text{s}$. Vorsprung $d = 30\cdot 10 - 1{,}5\cdot 100 = 150\,\text{m}$.
  ---
  **Deutung:** Die Polizei braucht nach dem Gleichstand noch einmal $10\,\text{s}$, um die $150\,\text{m}$ aufzuholen. Die Zahlen sind für eine Modellrechnung gewählt, im echten Verkehr wäre $216\,\text{km/h}$ lebensgefährlich.
```

```aufgabe
id: p2-6-ueberholen
titel: Wie viel freie Strecke braucht ein Überholmanöver?
niveau: 3
lernziel: 5
kompetenz: modellieren
angabe: |
  Ein Pkw fährt mit $100\,\text{km/h}$ hinter einem Lkw, der konstant $80\,\text{km/h}$ fährt. Um sicher zu überholen, muss der Pkw relativ zum Lkw insgesamt $50\,\text{m}$ gutmachen: Sicherheitsabstand vorher, Länge des Lkw, eigene Länge und Sicherheitsabstand nachher. Der Pkw fährt die ganze Zeit konstant $100\,\text{km/h}$.

  a) Wie lange dauert das Überholen?

  b) Welche Strecke legt der Pkw dabei auf der Straße zurück?

  c) Ein Gegenfahrzeug kommt mit $100\,\text{km/h}$ entgegen. Wie weit muss die Gegenfahrbahn zu Beginn mindestens frei sein?
teile:
  - typ: zahl
    label: a) Dauer
    loesung: "50/(20/3.6)"
    einheit: "s"
    anzeige: '9'
    fehler:
      - wert: "50/(100/3.6)"
        meldung: Mit $100\,\text{km/h}$ rechnest du gegenüber der Straße. Gutmachen muss der Pkw die $50\,\text{m}$ aber **gegenüber dem Lkw**, und dort ist er nur $20\,\text{km/h}$ schneller.
      - wert: "50/20"
        meldung: Du hast Meter durch km/h geteilt. Rechne die Relativgeschwindigkeit in m/s um.
  - typ: zahl
    label: b) Strecke des Pkw
    loesung: "100/3.6*50/(20/3.6)"
    einheit: "m"
    anzeige: '250'
    fehler:
      - wert: "50"
        meldung: Die $50\,\text{m}$ gewinnt der Pkw nur **gegenüber dem Lkw**. Gegenüber der Straße fährt er in dieser Zeit viel weiter.
  - typ: zahl
    label: c) freie Strecke
    loesung: "2*100/3.6*50/(20/3.6)"
    einheit: "m"
    anzeige: '500'
    fehler:
      - wert: "100/3.6*50/(20/3.6)"
        meldung: Das ist nur die Strecke des Pkw. Das Gegenfahrzeug kommt ihm in derselben Zeit ebenfalls entgegen.
hinweise:
  - Rechne zuerst im Bezugssystem des Lkw. Dort bewegt sich der Pkw mit $100 - 80 = 20\,\text{km/h}$.
  - 'Für b) und c) wieder im Bezugssystem der Straße: Strecke $=$ Geschwindigkeit mal Dauer, für Pkw und Gegenfahrzeug.'
loesung: |
  **Modell:** Im Bezugssystem des Lkw ruht der Lkw, und der Pkw muss $50\,\text{m}$ mit der Relativgeschwindigkeit $v_{\text{rel}} = 20\,\text{km/h} = 5{,}56\,\text{m/s}$ zurücklegen.
  ---
  **a)** $t = \dfrac{50\,\text{m}}{5{,}56\,\text{m/s}} = 9{,}0\,\text{s}$.
  ---
  **b)** Gegenüber der Straße fährt der Pkw $27{,}8\,\text{m/s}\cdot 9{,}0\,\text{s} = 250\,\text{m}$.
  ---
  **c)** Das Gegenfahrzeug fährt in derselben Zeit ebenfalls $250\,\text{m}$. Frei sein müssen also $250\,\text{m} + 250\,\text{m} = 500\,\text{m}$.
  ---
  **Deutung:** Ein halber Kilometer für ein einziges Überholmanöver. Deshalb sind Überholmanöver mit kleinem Geschwindigkeitsunterschied auf Landstraßen so gefährlich.
```

## Freier Fall

```aufgabe
id: p2-7-check
art: check
titel: "Vorwissen: Anfahren aus der Ruhe"
niveau: 1
angabe: |
  Ein Körper startet aus der Ruhe und wird $2{,}0\,\text{s}$ lang gleichmäßig mit $9{,}81\,\text{m/s}^2$ beschleunigt. Wie schnell ist er dann? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "9.81*2"
    einheit: "m/s"
    anzeige: '19{,}6'
    fehler:
      - wert: "9.81*2^2"
        meldung: Die Zeit wird hier nicht quadriert. $t^2$ steckt im Weg $\tfrac12 a t^2$, für die Geschwindigkeit gilt aus der Ruhe $v = a\,t$.
hinweise:
  - 'Aus der Ruhe gilt $v = a\,t$.'
loesung: |
  Aus der Ruhe wächst die Geschwindigkeit linear: $v = a\,t$.
  ---
  $v = 9{,}81\,\text{m/s}^2\cdot 2{,}0\,\text{s} = 19{,}6\,\text{m/s}$. Wiederholen: [2.4 Gleichmäßig beschleunigte Bewegung](/lernen/physik1/kinematik/gleichmaessig-beschleunigte-bewegung).
```

### Fallen schwere Körper schneller?

Der griechische Philosoph **Aristoteles** lehrte, schwere Körper fielen schneller als leichte. Das scheint
die Erfahrung zu bestätigen: Eine Feder schwebt langsam zu Boden, ein Stein fällt schnell. **Galileo Galilei**
erkannte um 1600, dass der Unterschied am **Luftwiderstand** liegt. Ohne Luft fallen alle Körper gleich schnell.

Galilei begründete das zuerst mit einem **Gedankenexperiment**, also einem Experiment, das man nur im Kopf
durchführt. Es hat drei Schritte:

1. **Annahme:** Schwere Körper fallen schneller als leichte. Ein schwerer Stein fällt also schnell, ein leichter langsam.
2. **Zusammenbinden:** Nun binden wir die beiden Steine mit einer Schnur zusammen. Der langsame Stein bremst den
   schnellen. Das Paar müsste also **langsamer** fallen als der schwere Stein allein.
3. **Widerspruch:** Das Paar ist aber schwerer als der schwere Stein allein. Nach der Annahme müsste es also
   **schneller** fallen.

Beides zugleich geht nicht. Die Annahme war falsch. Die einzige widerspruchsfreie Möglichkeit: Ohne Luftwiderstand
fallen alle Körper gleich schnell.

Später hat man das direkt gezeigt. In einem luftleer gepumpten Rohr fallen Feder und Münze gleich schnell.
1971 ließ der Astronaut David Scott auf dem Mond einen Hammer und eine Falkenfeder gleichzeitig fallen. Beide
kamen zur selben Zeit am Boden an, denn der Mond hat keine Lufthülle.

:::definition[Freier Fall]
Der **freie Fall** ist die Bewegung eines Körpers, auf den nur die Schwerkraft wirkt, ohne Luftwiderstand. Er ist eine
gleichmäßig beschleunigte Bewegung mit der **Fallbeschleunigung**
$$g = 9{,}81\,\text{m/s}^2.$$
Alle Körper fallen am selben Ort mit derselben Beschleunigung. Der Wert gilt für Mitteleuropa. Am Äquator ist $g$ etwa
$9{,}78\,\text{m/s}^2$, an den Polen $9{,}83\,\text{m/s}^2$.

**Beispiel:** Ein Stein, der aus $2\,\text{m}$ Höhe fällt. Der Luftwiderstand ist hier verschwindend klein.

**Kein Beispiel:** Ein Fallschirmspringer nach $15\,\text{s}$ Fall. Er wird nicht mehr schneller, weil der Luftwiderstand so
groß ist wie seine Gewichtskraft. Seine Endgeschwindigkeit liegt bei rund $55\,\text{m/s}$.
:::

Warum alle Körper gleich schnell fallen, erklärt erst die Dynamik: Die Gewichtskraft ist proportional zur Masse,
die Trägheit ebenfalls. Ein doppelt so schwerer Körper wird doppelt so stark gezogen, ist aber auch doppelt so
träge. Mehr dazu in [3.2 Das zweite Newtonsche Axiom](/lernen/physik1/dynamik/das-zweite-newtonsche-axiom-kraft-aendert-die-bewegung).

```aufgabe
id: p2-7-konzept
titel: Zwei Kugeln fallen
niveau: 2
lernziel: 6
kompetenz: verstehen
angabe: |
  Von einem $5\,\text{m}$ hohen Gerüst lässt du gleichzeitig eine Stahlkugel mit $1\,\text{kg}$ und eine gleich große Stahlkugel mit $5\,\text{kg}$ (innen massiv statt hohl) fallen. Der Luftwiderstand ist bei dieser Höhe vernachlässigbar. Was beobachtest du?
teile:
  - typ: auswahl
    optionen:
      - "Die 5-kg-Kugel kommt fünfmal so schnell unten an."
      - "Die 5-kg-Kugel kommt etwas früher an, weil sie schwerer ist."
      - "Beide kommen gleichzeitig an."
      - "Die 1-kg-Kugel kommt früher an, weil sie leichter zu bewegen ist."
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Das ist die Vorstellung von Aristoteles. Galileis Gedankenexperiment mit den zusammengebundenen Steinen zeigt, dass sie zu einem Widerspruch führt.
      - wert: 1
        meldung: Ohne Luftwiderstand hängt die Fallbeschleunigung nicht von der Masse ab. Die größere Gewichtskraft wird genau durch die größere Trägheit ausgeglichen.
      - wert: 3
        meldung: Die leichtere Kugel ist zwar leichter zu beschleunigen, wird aber auch schwächer angezogen. Beide Effekte heben sich genau auf.
hinweise:
  - Ist der Luftwiderstand hier wichtig? Wovon hängt dann die Fallbeschleunigung ab?
  - Denk an Galileis Gedankenexperiment mit den zwei zusammengebundenen Steinen.
loesung: |
  **Modell:** Bei $5\,\text{m}$ Fallhöhe und kompakten Kugeln ist der Luftwiderstand vernachlässigbar. Es handelt sich um freien Fall.
  ---
  **Ergebnis:** Im freien Fall haben alle Körper dieselbe Beschleunigung $g$. Beide Kugeln brauchen $t = \sqrt{2\cdot 5\,\text{m}/9{,}81\,\text{m/s}^2} = 1{,}01\,\text{s}$ und kommen gleichzeitig an.
  ---
  **Grund:** Die $5$-kg-Kugel wird fünfmal so stark angezogen, ist aber auch fünfmal so träge.
```

### Die Fallgesetze

Wir legen die Achse nach **unten** und starten aus der Ruhe. Dann sind $v$, $a$ und die Fallstrecke $h$ positiv,
und die Gleichungen der gleichmäßig beschleunigten Bewegung werden mit $a = g$ zu:
$$v = g\,t, \qquad h = \tfrac12\,g\,t^2, \qquad v = \sqrt{2\,g\,h}, \qquad t = \sqrt{\frac{2h}{g}}.$$
Dabei ist $h$ die Fallstrecke, $t$ die Fallzeit und $v$ die Geschwindigkeit am Ende.

Einige Werte zur Orientierung:

- Nach $1\,\text{s}$: $v = 9{,}81\,\text{m/s}$ (rund $35\,\text{km/h}$), Fallstrecke $4{,}9\,\text{m}$.
- Nach $2\,\text{s}$: $v = 19{,}6\,\text{m/s}$ (rund $71\,\text{km/h}$), Fallstrecke $19{,}6\,\text{m}$.
- Nach $3\,\text{s}$: $v = 29{,}4\,\text{m/s}$ (rund $106\,\text{km/h}$), Fallstrecke $44{,}1\,\text{m}$.

Die Strecken in aufeinanderfolgenden Sekunden verhalten sich wie $1 : 3 : 5 : \dots$, also $4{,}9\,\text{m}$, dann
$14{,}7\,\text{m}$, dann $24{,}5\,\text{m}$. Das ist Galileis **Gesetz der ungeraden Zahlen**.

```plot
x: [0, 3.3]
y: [0, 50]
achsen: { x: "t in s", y: "Fallstrecke h in m" }
graphen:
  - { f: "0.5*9.81*x^2", label: "h(t) = ½gt²", farbe: 0, von: 0, bis: 3.2 }
punkte:
  - { x: 1, y: 4.905, label: "4,9 m" }
  - { x: 2, y: 19.62, label: "19,6 m" }
  - { x: 3, y: 44.145, label: "44,1 m" }
beschriftung: "Fallstrecke über der Zeit beim freien Fall (Achse nach unten). Nach 1, 2 und 3 Sekunden ist der Körper 4,9 m, 19,6 m und 44,1 m gefallen. Die Abstände der Punkte wachsen wie 1 : 3 : 5."
```

:::beispiel[Ein Stein fällt von einer Mauer]
Ein Stein fällt aus $20\,\text{m}$ Höhe frei herab. Wie lange fällt er, und wie schnell ist er unten?

**Schritt 1, Modell:** Freier Fall aus der Ruhe, Achse nach unten, $h = 20\,\text{m}$, $a = g$.

**Schritt 2, Fallzeit:** Aus $h = \tfrac12 g t^2$ folgt $t = \sqrt{\dfrac{2h}{g}} = \sqrt{\dfrac{40\,\text{m}}{9{,}81\,\text{m/s}^2}} = \sqrt{4{,}08\,\text{s}^2} = 2{,}02\,\text{s}$.

**Schritt 3, Geschwindigkeit:** $v = g\,t = 9{,}81\,\text{m/s}^2\cdot 2{,}02\,\text{s} = 19{,}8\,\text{m/s}$, gut $71\,\text{km/h}$.

**Probe:** $v = \sqrt{2gh} = \sqrt{2\cdot 9{,}81\cdot 20}\,\text{m/s} = \sqrt{392{,}4}\,\text{m/s} = 19{,}8\,\text{m/s}$. ✓
:::

:::achtung[Fehler: den Faktor ½ vergessen]
Für den Stein aus $20\,\text{m}$ rechnet eine Schülerin mit $h = g t^2$: „$t = \sqrt{20/9{,}81}\,\text{s} = 1{,}43\,\text{s}$.“
Das ist zu kurz. Der Faktor $\tfrac12$ kommt aus der Dreiecksfläche unter dem v-t-Graphen. Im Mittel fällt der Stein nur
halb so schnell wie am Ende. Richtig sind $2{,}02\,\text{s}$.
:::

:::achtung[Fehler: doppelte Höhe, doppelte Fallzeit]
Aus $5{,}0\,\text{m}$ Höhe dauert der freie Fall $1{,}01\,\text{s}$. Ein Schüler folgert: „Aus $20\,\text{m}$, also viermal so hoch,
dauert er $4{,}04\,\text{s}$.“ Die Fallzeit wächst aber nur mit der **Wurzel** der Höhe, $t = \sqrt{2h/g}$. Viermal so hoch
heißt $\sqrt4 = 2$-mal so lang, also $2{,}02\,\text{s}$. Das stimmt mit dem Beispiel „Ein Stein fällt von einer Mauer“ überein.
:::

### Wie man g misst

Die Fallbeschleunigung lässt sich mit einfachen Mitteln erstaunlich genau bestimmen:

- **Fallröhre mit Lichtschranken:** Eine Stahlkugel fällt eine bekannte Strecke $h$. Man misst die Fallzeit und erhält $g = 2h/t^2$.
- **Stroboskopaufnahme:** Eine Kamera belichtet einen fallenden Ball mehrmals im Abstand $\tau$. Aus den Abständen der Bilder folgt $g$.
- **Fadenpendel:** Aus der Schwingungsdauer folgt $g$, mehr dazu im Abschnitt [7.5 Das Fadenpendel](/lernen/physik1/schwingungen/das-fadenpendel-kleinwinkelnaeherung-und-schwingungsdauer).

Jede Messung streut. Wie man aus mehreren Messwerten einen Mittelwert mit **Messunsicherheit** gewinnt, steht im
Abschnitt [1.8 Messreihen auswerten](/lernen/physik1/groessen-einheiten-messen/messreihen-auswerten-mittelwert-und-standardabweichung). Hier wenden wir es an.

:::beispiel[g aus fünf Fallzeiten]
Eine Kugel fällt $h = 1{,}000\,\text{m}$ (Unsicherheit $\pm 1\,\text{mm}$). Fünf Messungen der Fallzeit ergeben
$0{,}452$, $0{,}450$, $0{,}454$, $0{,}449$ und $0{,}452$ Sekunden.

**Schritt 1, Mittelwert:** $\bar t = 2{,}257\,\text{s} / 5 = 0{,}4514\,\text{s}$.

**Schritt 2, Streuung:** Die Standardabweichung der Einzelwerte ist $s = 0{,}0019\,\text{s}$. Die Unsicherheit des Mittelwerts
ist $\Delta\bar t = s/\sqrt5 = 0{,}00087\,\text{s}$, relativ $0{,}00087/0{,}4514 = 0{,}19\,\%$.

**Schritt 3, g berechnen:** $g = \dfrac{2h}{\bar t^2} = \dfrac{2\cdot 1{,}000\,\text{m}}{(0{,}4514\,\text{s})^2} = 9{,}815\,\text{m/s}^2$.

**Schritt 4, Unsicherheit fortpflanzen:** In $g = 2h/t^2$ steht $t$ im Quadrat. Nach der Größtfehlerregel addieren sich die
relativen Unsicherheiten, die von $t$ doppelt: $0{,}10\,\% + 2\cdot 0{,}19\,\% = 0{,}48\,\%$. Das sind $0{,}0048\cdot 9{,}815\,\text{m/s}^2 \approx 0{,}05\,\text{m/s}^2$.

**Ergebnis:** $g = (9{,}82 \pm 0{,}05)\,\text{m/s}^2$. Der Literaturwert $9{,}81\,\text{m/s}^2$ liegt im Unsicherheitsbereich.
:::

:::merke
1. Freier Fall: gleichmäßig beschleunigt mit $g = 9{,}81\,\text{m/s}^2$, unabhängig von der Masse.
2. Aus der Ruhe, Achse nach unten: $v = g t$, $h = \tfrac12 g t^2$, $v = \sqrt{2gh}$, $t = \sqrt{2h/g}$.
3. Vierfache Höhe ergibt doppelte Fallzeit und doppelte Aufprallgeschwindigkeit.
:::

```reflexion
frage: Auf dem Mond ist die Fallbeschleunigung etwa sechsmal kleiner als auf der Erde. Fallen Hammer und Feder dort trotzdem gleich schnell? Und fallen sie gleich schnell wie auf der Erde?
antwort: |
  Gleich schnell **wie einander**: ja, denn auf dem Mond gibt es keine Luft, und ohne Luftwiderstand fallen alle Körper mit
  derselben Beschleunigung. Gleich schnell **wie auf der Erde**: nein. Die Beschleunigung beträgt dort nur etwa
  $1{,}6\,\text{m/s}^2$, beide fallen also deutlich langsamer. Die Gleichheit für alle Körper gilt an jedem Ort, der Wert von
  $g$ hängt aber vom Ort ab.
```

```aufgabe
id: p2-freier-fall
titel: Stein von einer Brücke
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Ein Stein fällt aus $45\,\text{m}$ Höhe frei herunter. Wie lange fällt er, und mit welcher Geschwindigkeit trifft er auf? Runde jeweils auf drei signifikante Stellen.
teile:
  - typ: zahl
    label: Fallzeit
    loesung: "sqrt(2*45/9.81)"
    einheit: "s"
    anzeige: '3{,}03'
    fehler:
      - wert: "sqrt(45/9.81)"
        meldung: Der Faktor $2$ unter der Wurzel fehlt. Aus $h = \tfrac12 g t^2$ folgt $t = \sqrt{2h/g}$.
      - wert: "45/9.81"
        meldung: Die Wurzel fehlt. Die Fallstrecke wächst mit $t^2$, also musst du am Ende die Wurzel ziehen.
  - typ: zahl
    label: Aufprallgeschwindigkeit
    loesung: "sqrt(2*9.81*45)"
    einheit: "m/s"
    anzeige: '29{,}7'
    fehler:
      - wert: "9.81*45"
        meldung: Du hast $g\cdot h$ gerechnet. Die Einheit $\text{m}^2/\text{s}^2$ zeigt, dass noch die Wurzel fehlt, und auch der Faktor $2$. Richtig ist $v = \sqrt{2gh}$.
hinweise:
  - 'Fallzeit aus $h = \tfrac12 g t^2$, Geschwindigkeit aus $v = g t$ oder $v = \sqrt{2gh}$.'
loesung: |
  **Fallzeit:** $h = \tfrac12 g t^2$, also $t = \sqrt{\dfrac{2h}{g}} = \sqrt{\dfrac{90\,\text{m}}{9{,}81\,\text{m/s}^2}} = 3{,}03\,\text{s}$.
  ---
  **Geschwindigkeit:** $v = g t = 9{,}81\,\text{m/s}^2\cdot 3{,}03\,\text{s} = 29{,}7\,\text{m/s}$, gut $100\,\text{km/h}$. Probe: $\sqrt{2gh} = \sqrt{882{,}9}\,\text{m/s} = 29{,}7\,\text{m/s}$. ✓
```

```aufgabe
id: p2-7-schluessel
titel: Der Schlüssel fällt aus der Hand
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Dir fällt ein Schlüsselbund aus $1{,}8\,\text{m}$ Höhe aus der Hand. Wie lange dauert es, bis er am Boden ist? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    loesung: "sqrt(2*1.8/9.81)"
    einheit: "s"
    anzeige: '0{,}61'
    fehler:
      - wert: "sqrt(1.8/9.81)"
        meldung: Der Faktor $2$ fehlt. $t = \sqrt{2h/g}$.
hinweise:
  - '$t = \sqrt{2h/g}$.'
loesung: |
  **Modell:** Freier Fall aus der Ruhe, Luftwiderstand beim schweren Schlüsselbund vernachlässigbar.
  ---
  **Rechnung:** $t = \sqrt{\dfrac{2\cdot 1{,}8\,\text{m}}{9{,}81\,\text{m/s}^2}} = \sqrt{0{,}367\,\text{s}^2} = 0{,}61\,\text{s}$. Plausibel: kaum Zeit zum Nachgreifen.
```

```aufgabe
id: p2-fallstrecke-sekunde
titel: Strecke in der vierten Sekunde
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Welche Strecke legt ein frei fallender Körper (aus der Ruhe) **während der vierten Sekunde** zurück, also zwischen $t = 3\,\text{s}$ und $t = 4\,\text{s}$? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "0.5*9.81*(4^2-3^2)"
    einheit: "m"
    anzeige: '34{,}3'
    fehler:
      - wert: "0.5*9.81*4^2"
        meldung: Das ist die Strecke in den **ersten vier** Sekunden. Gefragt ist nur die vierte Sekunde, also ziehst du die Strecke nach drei Sekunden ab.
      - wert: "0.5*9.81*1^2"
        meldung: Du hast $\Delta t = 1\,\text{s}$ in $\tfrac12 g t^2$ eingesetzt. Das gilt nur für die erste Sekunde, in der der Körper aus der Ruhe startet. Zu Beginn der vierten Sekunde ist er schon schnell.
hinweise:
  - 'Berechne $h(4\,\text{s})$ und $h(3\,\text{s})$ mit $h = \tfrac12 g t^2$.'
  - Die Strecke der vierten Sekunde ist die Differenz der beiden Werte.
loesung: |
  **Ansatz:** Strecke in der vierten Sekunde $= h(4\,\text{s}) - h(3\,\text{s})$.
  ---
  **Werte:** $h(4\,\text{s}) = \tfrac12\cdot 9{,}81\,\text{m/s}^2\cdot 16\,\text{s}^2 = 78{,}5\,\text{m}$ und $h(3\,\text{s}) = \tfrac12\cdot 9{,}81\,\text{m/s}^2\cdot 9\,\text{s}^2 = 44{,}1\,\text{m}$.
  ---
  **Differenz:** $34{,}3\,\text{m}$. Probe: Das ist $7\cdot 4{,}9\,\text{m}$. Die Strecken der einzelnen Sekunden verhalten sich wie $1 : 3 : 5 : 7$, und zur vierten Sekunde gehört die $7$. ✓
```

```aufgabe
id: p2-7-proportional
titel: Wie hoch für die doppelte Fallzeit?
niveau: 2
lernziel: 6
kompetenz: begruenden
angabe: |
  Ein Ball braucht aus einer bestimmten Höhe $0{,}80\,\text{s}$ bis zum Boden.

  a) Aus welcher Höhe fällt er? Runde auf zwei Nachkommastellen.

  b) Aus wie viel Mal so großer Höhe muss er fallen, damit die Fallzeit doppelt so lang wird?
teile:
  - typ: zahl
    label: a) Höhe
    loesung: "0.5*9.81*0.8^2"
    einheit: "m"
    anzeige: '3{,}14'
    fehler:
      - wert: "9.81*0.8^2"
        meldung: Der Faktor $\tfrac12$ fehlt. $h = \tfrac12 g t^2$.
  - typ: zahl
    label: b) Faktor
    loesung: "2^2"
    anzeige: '4'
    fehler:
      - wert: "2"
        meldung: Die Fallstrecke ist proportional zu $t^2$. Doppelte Zeit ergibt $2^2 = 4$-fache Höhe.
      - wert: "sqrt(2)"
        meldung: Du hast die Richtung des Zusammenhangs vertauscht. Die **Zeit** wächst mit der Wurzel der Höhe. Umgekehrt wächst die **Höhe** mit dem Quadrat der Zeit.
hinweise:
  - '$h = \tfrac12 g t^2$, also ist $h$ proportional zu $t^2$.'
  - Um welchen Faktor ändert sich $t^2$, wenn $t$ doppelt so groß wird?
loesung: |
  **a)** $h = \tfrac12 g t^2 = \tfrac12\cdot 9{,}81\,\text{m/s}^2\cdot (0{,}80\,\text{s})^2 = 3{,}14\,\text{m}$.
  ---
  **b) Proportionalitätsschluss:** $h \propto t^2$. Wird $t$ verdoppelt, wird $t^2$ vervierfacht. Also braucht man die vierfache Höhe.
  ---
  **Probe:** $\tfrac12\cdot 9{,}81\cdot 1{,}6^2\,\text{m} = 12{,}6\,\text{m} = 4\cdot 3{,}14\,\text{m}$. ✓
```

```aufgabe
id: p2-7-messreihe
titel: g aus einer Messreihe mit Unsicherheit
niveau: 3
lernziel: 6
kompetenz: modellieren
angabe: |
  Bei einem Fallversuch fällt eine Kugel durch zwei Lichtschranken im Abstand $h = 0{,}800\,\text{m}$ (Unsicherheit $\pm 1\,\text{mm}$). Sie startet in Ruhe genau an der oberen Lichtschranke. Fünf Messungen der Fallzeit ergeben $0{,}405$, $0{,}402$, $0{,}407$, $0{,}401$ und $0{,}405$ Sekunden.

  a) Berechne den Mittelwert der Fallzeit in s.

  b) Berechne $g$ aus dem Mittelwert (zwei Nachkommastellen).

  c) Die Unsicherheit des Mittelwerts der Zeit ist $\Delta\bar t = 0{,}0011\,\text{s}$. Berechne die Unsicherheit $\Delta g$ mit der Größtfehlerregel (zwei Nachkommastellen).
teile:
  - typ: zahl
    label: a) Mittelwert
    loesung: "(0.405+0.402+0.407+0.401+0.405)/5"
    einheit: "s"
    anzeige: '0{,}404'
  - typ: zahl
    label: b) g
    loesung: "2*0.8/0.404^2"
    einheit: "m/s²"
    anzeige: '9{,}80'
    fehler:
      - wert: "0.8/0.404^2"
        meldung: Der Faktor $2$ fehlt. Aus $h = \tfrac12 g t^2$ folgt $g = 2h/t^2$.
  - typ: zahl
    label: c) Δg
    loesung: "2*0.8/0.404^2*(0.001/0.8 + 2*0.0011/0.404)"
    einheit: "m/s²"
    anzeige: '0{,}07'
    toleranz: 0.01
    fehler:
      - wert: "2*0.8/0.404^2*(0.001/0.8 + 0.0011/0.404)"
        meldung: Die Zeit steht in $g = 2h/t^2$ im **Quadrat**. Ihre relative Unsicherheit zählt deshalb doppelt.
hinweise:
  - 'Aus $h = \tfrac12 g t^2$ folgt $g = 2h/t^2$. Setze den Mittelwert der Zeit ein.'
  - 'Größtfehlerregel für $g = 2h/t^2$: relative Unsicherheiten addieren, die von $t$ doppelt, also $\dfrac{\Delta g}{g} = \dfrac{\Delta h}{h} + 2\,\dfrac{\Delta t}{t}$.'
gefuehrt:
  - text: Berechne den Mittelwert der fünf Zeiten in s.
    teil: { typ: zahl, loesung: "2.020/5" }
    erklaerung: Summe $2{,}020\,\text{s}$, geteilt durch $5$ ergibt $0{,}404\,\text{s}$.
  - text: Berechne $g = 2h/\bar t^2$ in $\text{m/s}^2$.
    teil: { typ: zahl, loesung: "1.6/0.404^2" }
    erklaerung: $g = 1{,}600\,\text{m} / (0{,}404\,\text{s})^2 = 9{,}80\,\text{m/s}^2$.
  - text: Wie groß ist die relative Unsicherheit von $g$ in Prozent?
    teil: { typ: zahl, loesung: "(0.001/0.8 + 2*0.0011/0.404)*100", toleranz: 0.05 }
    erklaerung: $\dfrac{0{,}001}{0{,}800} + 2\cdot\dfrac{0{,}0011}{0{,}404} = 0{,}125\,\% + 0{,}545\,\% \approx 0{,}67\,\%$.
  - text: Wie formulierst du das Ergebnis?
    erklaerung: $\Delta g = 0{,}67\,\%\cdot 9{,}80\,\text{m/s}^2 \approx 0{,}07\,\text{m/s}^2$, also $g = (9{,}80 \pm 0{,}07)\,\text{m/s}^2$. Der Literaturwert liegt darin.
loesung: |
  **Modell:** Freier Fall aus der Ruhe über die Strecke $h$: $h = \tfrac12 g t^2$, also $g = \dfrac{2h}{t^2}$.
  ---
  **a)** $\bar t = \dfrac{2{,}020\,\text{s}}{5} = 0{,}404\,\text{s}$.
  ---
  **b)** $g = \dfrac{2\cdot 0{,}800\,\text{m}}{(0{,}404\,\text{s})^2} = \dfrac{1{,}600\,\text{m}}{0{,}1632\,\text{s}^2} = 9{,}80\,\text{m/s}^2$.
  ---
  **c)** Relative Unsicherheit: $\dfrac{\Delta h}{h} + 2\dfrac{\Delta\bar t}{\bar t} = \dfrac{0{,}001}{0{,}800} + 2\cdot\dfrac{0{,}0011}{0{,}404} = 0{,}0067$. Also $\Delta g = 0{,}0067\cdot 9{,}80\,\text{m/s}^2 = 0{,}07\,\text{m/s}^2$.
  ---
  **Ergebnis:** $g = (9{,}80 \pm 0{,}07)\,\text{m/s}^2$. Der Literaturwert $9{,}81\,\text{m/s}^2$ liegt im Bereich. Die Zeitmessung bestimmt die Unsicherheit fast allein, weil sie im Quadrat eingeht.
```

```aufgabe
id: p2-brunnen
titel: Wie tief ist der Brunnen?
niveau: 3
lernziel: 6
kompetenz: modellieren
angabe: |
  Du lässt einen Stein in einen Brunnen fallen und hörst den Aufprall nach $2{,}5\,\text{s}$. Die Schallgeschwindigkeit beträgt $340\,\text{m/s}$. Wie tief ist der Brunnen? Luftwiderstand vernachlässigen, eine Nachkommastelle.
teile:
  - typ: zahl
    label: Tiefe
    loesung: "0.5*9.81*((-1 + sqrt(1 + 4*(9.81/(2*340))*2.5))/(2*9.81/(2*340)))^2"
    einheit: "m"
    anzeige: '28{,}6'
    fehler:
      - wert: "0.5*9.81*2.5^2"
        meldung: Du hast die ganzen $2{,}5\,\text{s}$ als Fallzeit genommen. Ein Teil dieser Zeit braucht aber der Schall für den Weg nach oben.
hinweise:
  - 'Die gemessene Zeit setzt sich aus Fallzeit $t_1$ und Schalllaufzeit $t_2$ zusammen: $t_1 + t_2 = 2{,}5\,\text{s}$.'
  - 'Mit $h = \tfrac12 g t_1^2$ und $t_2 = h/c$ entsteht eine quadratische Gleichung für $t_1$.'
loesung: |
  **Modell:** Der Stein fällt frei die Tiefe $h$ in der Zeit $t_1$. Dann läuft der Schall mit konstant $c = 340\,\text{m/s}$ dieselbe Strecke zurück, $t_2 = h/c$. Ansatz: $t_1 + \dfrac{h}{c} = 2{,}5\,\text{s}$ mit $h = \tfrac12 g t_1^2$.
  ---
  **Einsetzen:** $t_1 + \dfrac{g}{2c}\,t_1^2 = 2{,}5\,\text{s}$, mit $\dfrac{g}{2c} = \dfrac{9{,}81\,\text{m/s}^2}{680\,\text{m/s}} = 0{,}014426\,\text{s}^{-1}$. Also $0{,}014426\,t_1^2 + t_1 - 2{,}5 = 0$ ($t_1$ in s).
  ---
  **Lösungsformel** (positive Lösung): $t_1 = \dfrac{-1 + \sqrt{1 + 4\cdot 0{,}014426\cdot 2{,}5}}{2\cdot 0{,}014426}\,\text{s} = 2{,}416\,\text{s}$.
  ---
  **Tiefe:** $h = \tfrac12\cdot 9{,}81\,\text{m/s}^2\cdot (2{,}416\,\text{s})^2 = 28{,}6\,\text{m}$. Probe: Der Schall braucht $28{,}6\,\text{m} / 340\,\text{m/s} = 0{,}084\,\text{s}$, zusammen $2{,}50\,\text{s}$. ✓ Ohne Schallkorrektur käme man auf $30{,}7\,\text{m}$.
```

```aufgabe
id: p2-fenster
titel: Ball am Fenster
niveau: 3
lernziel: 6
kompetenz: modellieren
angabe: |
  Ein Ball fällt aus der Ruhe an einem $1{,}5\,\text{m}$ hohen Fenster vorbei. Er braucht vom oberen bis zum unteren Fensterrand $0{,}12\,\text{s}$. Aus welcher Höhe über dem oberen Fensterrand wurde er losgelassen? Zwei Nachkommastellen.
teile:
  - typ: zahl
    loesung: "((1.5 - 0.5*9.81*0.12^2)/0.12)^2/(2*9.81)"
    einheit: "m"
    anzeige: '7{,}23'
    fehler:
      - wert: "(1.5/0.12)^2/(2*9.81)"
        meldung: Du hast $1{,}5\,\text{m} / 0{,}12\,\text{s}$ als Geschwindigkeit am oberen Rand genommen. Das ist die **mittlere** Geschwindigkeit am Fenster. Am oberen Rand ist der Ball langsamer.
hinweise:
  - 'Bestimme zuerst die Geschwindigkeit $v_1$ am oberen Fensterrand aus $1{,}5\,\text{m} = v_1 t + \tfrac12 g t^2$.'
  - 'Dann liefert $v_1^2 = 2 g h$ die Fallhöhe bis zum oberen Rand.'
loesung: |
  **Ansatz:** Am Fenster ist der Ball schon schnell. Mit der Anfangsgeschwindigkeit $v_1$ am oberen Rand gilt $1{,}5\,\text{m} = v_1\cdot 0{,}12\,\text{s} + \tfrac12\cdot 9{,}81\,\text{m/s}^2\cdot (0{,}12\,\text{s})^2 = v_1\cdot 0{,}12\,\text{s} + 0{,}0706\,\text{m}$.
  ---
  **Geschwindigkeit am oberen Rand:** $v_1 = \dfrac{1{,}5\,\text{m} - 0{,}0706\,\text{m}}{0{,}12\,\text{s}} = 11{,}9\,\text{m/s}$.
  ---
  **Fallhöhe bis dort:** Aus $v_1^2 = 2 g h$ folgt $h = \dfrac{v_1^2}{2g} = \dfrac{(11{,}91\,\text{m/s})^2}{19{,}62\,\text{m/s}^2} = 7{,}23\,\text{m}$ über dem oberen Fensterrand. Plausibel: etwa zwei Stockwerke.
```

## Senkrechter Wurf

```aufgabe
id: p2-8-check
art: check
titel: "Vorwissen: Vorzeichen der Fallbeschleunigung"
niveau: 1
angabe: |
  Die Achse zeigt nach **oben**. Welchen Wert hat die Beschleunigung eines Balls, der nach dem Abwurf frei fliegt (ohne Luftwiderstand)?
teile:
  - typ: zahl
    loesung: "-9.81"
    einheit: "m/s²"
    anzeige: '-9{,}81'
    fehler:
      - wert: "9.81"
        meldung: Die Fallbeschleunigung zeigt immer nach **unten**. Zeigt die Achse nach oben, ist sie negativ.
      - wert: "0"
        meldung: Auch ein fliegender Ball wird von der Erde angezogen. Seine Geschwindigkeit ändert sich die ganze Zeit, also ist $a \neq 0$.
hinweise:
  - Die Erde zieht den Ball immer nach unten. Welches Vorzeichen hat „nach unten“, wenn die Achse nach oben zeigt?
loesung: |
  Nach dem Abwurf wirkt nur die Schwerkraft. Die Beschleunigung ist also $g$ nach unten, egal ob der Ball steigt oder fällt.
  ---
  Mit der Achse nach oben ist „nach unten“ negativ: $a = -9{,}81\,\text{m/s}^2$. Wiederholen: [2.7 Freier Fall](/lernen/physik1/kinematik/freier-fall).
```

Wirfst du einen Ball senkrecht nach oben, wird er langsamer, kehrt um und fällt zurück. Viele rechnen
Aufstieg und Fall getrennt. Das geht, ist aber umständlich und fehleranfällig. Es geht einfacher: Die
Beschleunigung ist **während der ganzen Bewegung** dieselbe, nämlich $g$ nach unten. Also beschreibt **eine**
Gleichung die ganze Bewegung, auch den Umkehrpunkt.

### Eine Gleichung für den ganzen Flug

Wir legen die Achse nach **oben**, den Ursprung an den Boden und $t = 0$ in den Abwurf. Der Ball startet in der
Höhe $h_0$ mit der Geschwindigkeit $v_0$. Mit $a = -g$ werden die Gleichungen der gleichmäßig beschleunigten
Bewegung zu
$$v(t) = v_0 - g\,t, \qquad h(t) = h_0 + v_0\,t - \tfrac12\,g\,t^2.$$
Dabei ist $v_0 > 0$ ein Wurf nach oben und $v_0 < 0$ ein Wurf nach unten.

Im **Umkehrpunkt** ist $v = 0$. Daraus folgen Steigzeit und größte Höhe:
$$t_S = \frac{v_0}{g}, \qquad h_{\max} = h_0 + \frac{v_0^2}{2g}.$$
Die größte Höhe folgt aus der zeitfreien Gleichung $0 = v_0^2 - 2g\,(h_{\max} - h_0)$.

:::beispiel[Ein Ball senkrecht nach oben]
Ein Ball wird vom Boden mit $12\,\text{m/s}$ senkrecht nach oben geworfen.

**Schritt 1, Steigzeit:** $t_S = \dfrac{v_0}{g} = \dfrac{12\,\text{m/s}}{9{,}81\,\text{m/s}^2} = 1{,}22\,\text{s}$.

**Schritt 2, Steighöhe:** $h_{\max} = \dfrac{v_0^2}{2g} = \dfrac{144\,\text{m}^2/\text{s}^2}{19{,}62\,\text{m/s}^2} = 7{,}34\,\text{m}$.

**Schritt 3, Rückkehr:** $h(t) = 12\,t - 4{,}905\,t^2 = t\,(12 - 4{,}905\,t) = 0$ ergibt $t = 0$ (Abwurf) oder
$t = 12/4{,}905\,\text{s} = 2{,}45\,\text{s}$. Das ist genau $2\,t_S$.

**Schritt 4, Geschwindigkeit bei der Rückkehr:** $v = 12 - 9{,}81\cdot 2{,}45 = -12\,\text{m/s}$. Gleiches Tempo wie beim Abwurf,
nur nach unten.
:::

Das Beispiel zeigt eine **Symmetrie**: Aufstieg und Abstieg dauern gleich lang, und der Ball passiert jede
Höhe zweimal mit gleichem Tempo, einmal aufwärts und einmal abwärts. Das gilt aber nur, wenn Abwurf- und Landehöhe gleich sind.

:::achtung[Fehler: a = +g mit der Achse nach oben]
Ein Schüler berechnet für den Ball mit $12\,\text{m/s}$ die Höhe nach $1{,}0\,\text{s}$. Er schreibt: „$h = 12 + \tfrac12\cdot 9{,}81 = 16{,}9\,\text{m}$.“
Das ist mehr als die größte Höhe von $7{,}34\,\text{m}$, also sicher falsch. Er hat $a = +g$ eingesetzt, obwohl die Achse nach
oben und die Beschleunigung nach unten zeigt. Richtig: $h = 12 - 4{,}905 = 7{,}1\,\text{m}$.
:::

### Wurf von einer erhöhten Stelle

Startet der Ball nicht am Boden, ist die Bewegung nicht mehr symmetrisch. Die Landezeit findet man aus
$h(t) = 0$. Das ist eine quadratische Gleichung. Sie hat eine positive und eine negative Lösung. Die negative
Lösung gehört zu einem Zeitpunkt vor dem Abwurf und hat hier keine Bedeutung.

```plot
x: [0, 2.3]
y: [-1, 11]
achsen: { x: "t in s", y: "h in m" }
graphen:
  - { f: "8 + 6*x - 4.905*x^2", label: "h(t)", farbe: 0, von: 0, bis: 2.028 }
strecken:
  - { von: [0, 8], nach: [2.3, 8], gestrichelt: true }
punkte:
  - { x: 0, y: 8, label: "Abwurf" }
  - { x: 0.6116, y: 9.835, label: "höchster Punkt" }
  - { x: 2.028, y: 0, label: "Landung" }
beschriftung: "Höhe über der Zeit beim Wurf vom Balkon: Abwurf in 8 m Höhe mit 6 m/s nach oben. Der Ball steigt bis 9,8 m, kehrt nach 0,61 s um, passiert die Abwurfhöhe (gestrichelt) nach 1,22 s und landet nach 2,03 s."
```

:::beispiel[Wurf vom Balkon]
Von einem Balkon in $8{,}0\,\text{m}$ Höhe wird ein Ball mit $6{,}0\,\text{m/s}$ senkrecht nach oben geworfen. Wann und mit welcher
Geschwindigkeit landet er?

**Schritt 1, Ansatz:** $h(t) = 8{,}0 + 6{,}0\,t - 4{,}905\,t^2$ ($h$ in m, $t$ in s). Landung bei $h = 0$.

**Schritt 2, quadratische Gleichung:** $4{,}905\,t^2 - 6{,}0\,t - 8{,}0 = 0$. Mit der großen Lösungsformel:
$t = \dfrac{6{,}0 + \sqrt{36 + 4\cdot 4{,}905\cdot 8{,}0}}{2\cdot 4{,}905} = \dfrac{6{,}0 + 13{,}89}{9{,}81}\,\text{s} = 2{,}03\,\text{s}$.

**Schritt 3, Geschwindigkeit:** $v = 6{,}0 - 9{,}81\cdot 2{,}03 = -13{,}9\,\text{m/s}$, also $13{,}9\,\text{m/s}$ nach unten.

**Probe zeitfrei:** $v^2 = v_0^2 + 2\cdot(-g)\cdot(0 - 8{,}0\,\text{m}) = 36 + 157 = 193\,\text{m}^2/\text{s}^2$, also $|v| = 13{,}9\,\text{m/s}$. ✓
:::

:::achtung[Fehler: Flugzeit gleich doppelte Steigzeit, auch vom Balkon]
Für den Wurf vom Balkon rechnet eine Schülerin: „$T = 2\cdot\dfrac{6{,}0}{9{,}81}\,\text{s} = 1{,}22\,\text{s}$.“ Nach $1{,}22\,\text{s}$ ist der Ball
aber erst wieder auf **Balkonhöhe**. Er fällt dann noch $8\,\text{m}$ weiter. Die Formel $T = 2t_S$ gilt nur, wenn
Abwurf- und Landehöhe gleich sind. Sonst muss man $h(t) = 0$ lösen und kommt auf $2{,}03\,\text{s}$.
:::

:::merke
1. Achse nach oben, $a = -g$ für den ganzen Flug: $v = v_0 - g t$, $h = h_0 + v_0 t - \tfrac12 g t^2$.
2. Umkehrpunkt: $v = 0$, aber $a = -g$. Steigzeit $t_S = v_0/g$, Steighöhe $v_0^2/(2g)$ über der Abwurfhöhe.
3. Landung aus $h(t) = 0$, die positive Lösung nehmen. $T = 2t_S$ nur bei gleicher Abwurf- und Landehöhe.
4. Doppelte Abwurfgeschwindigkeit ergibt vierfache Steighöhe.
:::

```reflexion
frage: Warum passiert ein senkrecht geworfener Ball (ohne Luftwiderstand) jede Höhe auf dem Rückweg mit demselben Tempo wie auf dem Hinweg?
antwort: |
  Die zeitfreie Gleichung $v^2 = v_0^2 - 2g\,(h - h_0)$ hängt nur von der Höhe ab, nicht von der Richtung. In derselben
  Höhe ist also $v^2$ gleich, und damit das Tempo $|v|$. Nur das Vorzeichen ist verschieden: aufwärts positiv, abwärts negativ.
  Anschaulich: Was der Ball auf dem Weg nach oben an Geschwindigkeit verliert, gewinnt er auf demselben Wegstück nach unten zurück.
```

```aufgabe
id: p2-senkrechter-wurf
titel: Ball senkrecht nach oben
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Ein Ball wird mit $15\,\text{m/s}$ senkrecht nach oben geworfen. Die Abwurfhöhe ist das Nullniveau. Runde auf drei signifikante Stellen.
teile:
  - typ: zahl
    label: maximale Höhe
    loesung: "15^2/(2*9.81)"
    einheit: "m"
    anzeige: '11{,}5'
    fehler:
      - wert: "15^2/9.81"
        meldung: Der Faktor $2$ fehlt. Aus $0 = v_0^2 - 2 g h$ folgt $h = v_0^2/(2g)$.
  - typ: zahl
    label: Steigzeit
    loesung: "15/9.81"
    einheit: "s"
    anzeige: '1{,}53'
    fehler:
      - wert: "2*15/9.81"
        meldung: Das ist die Zeit bis zur Rückkehr. Gefragt ist nur der Aufstieg bis zum höchsten Punkt.
  - typ: zahl
    label: Zeit bis zur Rückkehr
    loesung: "2*15/9.81"
    einheit: "s"
    anzeige: '3{,}06'
    fehler:
      - wert: "15/9.81"
        meldung: Das ist nur die Steigzeit. Der Ball muss auch wieder herunterfallen.
hinweise:
  - 'Im höchsten Punkt ist $v = 0$. Daraus folgen $t_S = v_0/g$ und $h_{\max} = v_0^2/(2g)$.'
loesung: |
  **Steigzeit:** Im Umkehrpunkt ist $v = 0$, also $t_S = \dfrac{v_0}{g} = \dfrac{15\,\text{m/s}}{9{,}81\,\text{m/s}^2} = 1{,}53\,\text{s}$.
  ---
  **Höhe:** $h_{\max} = \dfrac{v_0^2}{2g} = \dfrac{225\,\text{m}^2/\text{s}^2}{19{,}62\,\text{m/s}^2} = 11{,}5\,\text{m}$.
  ---
  **Rückkehr:** Wegen der Symmetrie nach $2\,t_S = 3{,}06\,\text{s}$, wieder mit $15\,\text{m/s}$, jetzt nach unten.
```

```aufgabe
id: p2-8-steigzeit
titel: Ein Ball fliegt senkrecht hoch
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Ein Kind wirft einen Ball mit $9{,}0\,\text{m/s}$ senkrecht nach oben. Nach welcher Zeit erreicht er den höchsten Punkt? Zwei Nachkommastellen.
teile:
  - typ: zahl
    loesung: "9/9.81"
    einheit: "s"
    anzeige: '0{,}92'
    fehler:
      - wert: "9.81/9"
        meldung: Du hast den Kehrwert gebildet. Aus $0 = v_0 - g t$ folgt $t = v_0/g$, Meter pro Sekunde durch Meter pro Sekunde zum Quadrat ergibt Sekunden.
hinweise:
  - Im höchsten Punkt ist die Geschwindigkeit null. Setze $v = v_0 - g t = 0$.
loesung: |
  **Ansatz:** Im höchsten Punkt ist $v = 0$, also $0 = v_0 - g\,t_S$.
  ---
  **Rechnung:** $t_S = \dfrac{v_0}{g} = \dfrac{9{,}0\,\text{m/s}}{9{,}81\,\text{m/s}^2} = 0{,}92\,\text{s}$. Plausibel: Der Ball steigt dabei gut $4\,\text{m}$ hoch ($v_0^2/(2g) = 4{,}1\,\text{m}$), und knapp eine Sekunde Steigzeit passt zu einem kräftigen Wurf.
```

```aufgabe
id: p2-8-konzept
titel: Was gilt beim senkrechten Wurf?
niveau: 2
lernziel: 6
kompetenz: verstehen
angabe: |
  Ein Ball wird senkrecht nach oben geworfen, ohne Luftwiderstand. Welche Aussagen sind richtig? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Auf dem Weg nach oben zeigt die Beschleunigung nach oben."
      - "Im höchsten Punkt ist die Geschwindigkeit null."
      - "Im höchsten Punkt ist die Beschleunigung null."
      - "Auf dem Weg nach unten ist die Beschleunigung genauso groß wie auf dem Weg nach oben."
    richtig: [1, 3]
    fehler:
      - wert: [0, 1, 3]
        meldung: Auf dem Weg nach oben wird der Ball **langsamer**. Dann zeigt die Beschleunigung gegen die Bewegung, also nach unten. Es gibt keine „Wurfkraft“, die den Ball weiter nach oben beschleunigt.
      - wert: [1, 2]
        meldung: Im höchsten Punkt ist nur die Geschwindigkeit null. Die Beschleunigung ist die ganze Zeit $g$ nach unten, sonst bliebe der Ball oben stehen.
      - wert: [1, 2, 3]
        meldung: Im höchsten Punkt ändert sich die Geschwindigkeit gerade von aufwärts nach abwärts. Eine Änderung der Geschwindigkeit heißt $a \neq 0$.
hinweise:
  - Welche Kraft wirkt nach dem Abwurf auf den Ball, und in welche Richtung zeigt sie?
  - Trenne bei jeder Aussage Geschwindigkeit und Beschleunigung.
loesung: |
  **Ansatz:** Nach dem Abwurf wirkt nur die Schwerkraft. Die Beschleunigung ist also die ganze Zeit $g$ nach unten.
  ---
  **Richtig:** Im höchsten Punkt ist $v = 0$ (Aussage 2). Die Beschleunigung ist auf- und abwärts gleich groß (Aussage 4).
  ---
  **Falsch:** Aussage 1, weil der Ball beim Steigen langsamer wird. Aussage 3, weil sich $v$ im Umkehrpunkt gerade ändert.
```

```aufgabe
id: p2-8-umkehr-v0
titel: Wie schnell muss man werfen?
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Ein Jongleur will einen Ball genau $5{,}0\,\text{m}$ über die Abwurfhöhe werfen. Mit welcher Geschwindigkeit muss er ihn senkrecht nach oben werfen? Zwei Nachkommastellen.
teile:
  - typ: zahl
    loesung: "sqrt(2*9.81*5)"
    einheit: "m/s"
    anzeige: '9{,}90'
    fehler:
      - wert: "2*9.81*5"
        meldung: Das ist $v_0^2$ in $\text{m}^2/\text{s}^2$. Die Wurzel fehlt noch.
      - wert: "sqrt(9.81*5)"
        meldung: Der Faktor $2$ fehlt. Aus $h = v_0^2/(2g)$ folgt $v_0 = \sqrt{2 g h}$.
hinweise:
  - 'Die Steighöhe ist $h = v_0^2/(2g)$. Stelle nach $v_0$ um.'
  - 'Multipliziere mit $2g$ und ziehe die Wurzel.'
loesung: |
  **Ansatz (Umkehraufgabe):** Die Höhe ist gegeben, gesucht ist $v_0$. Aus $h_{\max} = \dfrac{v_0^2}{2g}$ folgt durch Multiplizieren mit $2g$: $v_0^2 = 2 g h$.
  ---
  **Rechnung:** $v_0 = \sqrt{2\cdot 9{,}81\,\text{m/s}^2\cdot 5{,}0\,\text{m}} = \sqrt{98{,}1\,\text{m}^2/\text{s}^2} = 9{,}90\,\text{m/s}$.
  ---
  **Probe:** $\dfrac{(9{,}90\,\text{m/s})^2}{2\cdot 9{,}81\,\text{m/s}^2} = 5{,}0\,\text{m}$. ✓
```

```aufgabe
id: p2-wurf-vom-turm
titel: Wurf vom Turm
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Von einem $20\,\text{m}$ hohen Turm wird ein Stein mit $10\,\text{m/s}$ senkrecht nach oben geworfen. Wann und mit welcher Geschwindigkeit trifft er am Boden auf? Drei signifikante Stellen.
teile:
  - typ: zahl
    label: Flugzeit
    loesung: "(10 + sqrt(10^2 + 2*9.81*20))/9.81"
    einheit: "s"
    anzeige: '3{,}28'
    fehler:
      - wert: "2*10/9.81"
        meldung: Nach $2 t_S$ ist der Stein erst wieder auf Turmhöhe. Er fällt dann noch $20\,\text{m}$ bis zum Boden. Löse $h(t) = 0$.
  - typ: zahl
    label: Aufprallgeschwindigkeit (Betrag)
    loesung: "sqrt(10^2 + 2*9.81*20)"
    einheit: "m/s"
    anzeige: '22{,}2'
    fehler:
      - wert: "sqrt(2*9.81*20)"
        meldung: Das wäre der freie Fall aus $20\,\text{m}$ aus der Ruhe. Der Stein hat aber auf Turmhöhe schon wieder $10\,\text{m/s}$ nach unten.
hinweise:
  - 'Setze $h(t) = 20 + 10\,t - 4{,}905\,t^2 = 0$ und löse die quadratische Gleichung.'
  - 'Für die Geschwindigkeit hilft die zeitfreie Gleichung $v^2 = v_0^2 + 2 g h_0$.'
gefuehrt:
  - text: Stelle $h(t)$ auf. Wie groß ist der Koeffizient von $t^2$ (mit Vorzeichen)?
    teil: { typ: zahl, loesung: "-9.81/2" }
    erklaerung: $h(t) = 20 + 10\,t - \tfrac12\cdot 9{,}81\,t^2$, also $-4{,}905$.
  - text: Löse $h(t) = 0$. Wie groß ist die positive Lösung in s?
    teil: { typ: zahl, loesung: "(10 + sqrt(10^2 + 2*9.81*20))/9.81" }
    erklaerung: $t = \dfrac{10 + \sqrt{100 + 392{,}4}}{9{,}81}\,\text{s} = 3{,}28\,\text{s}$. Die negative Lösung liegt vor dem Abwurf.
  - text: Berechne $v = v_0 - g t$ in m/s.
    teil: { typ: zahl, loesung: "10 - (10 + sqrt(10^2 + 2*9.81*20))" }
    erklaerung: $v = 10 - 9{,}81\cdot 3{,}28 = -22{,}2\,\text{m/s}$. Das Minus heißt, dass er nach unten fliegt.
loesung: |
  **Ansatz:** Achse nach oben, Ursprung am Boden: $h(t) = 20 + 10\,t - 4{,}905\,t^2$ ($h$ in m, $t$ in s). Landung bei $h = 0$.
  ---
  **Zeit:** $4{,}905\,t^2 - 10\,t - 20 = 0$, also $t = \dfrac{10 + \sqrt{100 + 392{,}4}}{9{,}81}\,\text{s} = \dfrac{10 + 22{,}19}{9{,}81}\,\text{s} = 3{,}28\,\text{s}$. Die negative Lösung entfällt.
  ---
  **Geschwindigkeit:** $v = 10\,\text{m/s} - 9{,}81\,\text{m/s}^2\cdot 3{,}28\,\text{s} = -22{,}2\,\text{m/s}$, also $22{,}2\,\text{m/s}$ nach unten.
  ---
  **Probe zeitfrei:** $v^2 = (10\,\text{m/s})^2 + 2\cdot 9{,}81\,\text{m/s}^2\cdot 20\,\text{m} = 492{,}4\,\text{m}^2/\text{s}^2$, also $|v| = 22{,}2\,\text{m/s}$. ✓
```

```aufgabe
id: p2-8-nach-unten
titel: Ein Stein wird nach unten geworfen
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Von einer $30\,\text{m}$ hohen Brücke wird ein Stein mit $5{,}0\,\text{m/s}$ senkrecht **nach unten** geworfen. Nach welcher Zeit trifft er auf das Wasser? Zwei Nachkommastellen.
teile:
  - typ: zahl
    loesung: "(-5 + sqrt(25 + 2*9.81*30))/9.81"
    einheit: "s"
    anzeige: '2{,}02'
    fehler:
      - wert: "sqrt(2*30/9.81)"
        meldung: Das ist der freie Fall aus der Ruhe. Der Stein hat aber schon $5{,}0\,\text{m/s}$ nach unten, er kommt also früher an.
      - wert: "(5 + sqrt(25 + 2*9.81*30))/9.81"
        meldung: Das Vorzeichen von $v_0$ ist falsch. Mit der Achse nach oben ist ein Wurf nach unten $v_0 = -5{,}0\,\text{m/s}$. So rechnest du einen Wurf nach oben.
hinweise:
  - 'Achse nach oben, Ursprung am Wasser: $h(t) = 30 - 5{,}0\,t - 4{,}905\,t^2$.'
  - Setze $h = 0$ und nimm die positive Lösung der quadratischen Gleichung.
loesung: |
  **Ansatz:** Achse nach oben, $h_0 = 30\,\text{m}$, $v_0 = -5{,}0\,\text{m/s}$: $h(t) = 30 - 5{,}0\,t - 4{,}905\,t^2$ ($h$ in m, $t$ in s).
  ---
  **Gleichung:** $4{,}905\,t^2 + 5{,}0\,t - 30 = 0$, also $t = \dfrac{-5{,}0 + \sqrt{25 + 588{,}6}}{9{,}81}\,\text{s} = \dfrac{-5{,}0 + 24{,}77}{9{,}81}\,\text{s} = 2{,}02\,\text{s}$.
  ---
  **Plausibilität:** Aus der Ruhe wären es $\sqrt{60/9{,}81}\,\text{s} = 2{,}47\,\text{s}$. Mit Anfangsgeschwindigkeit nach unten geht es schneller. ✓
```

```aufgabe
id: p2-8-zwei-zeitpunkte
titel: Zweimal in derselben Höhe
niveau: 3
lernziel: 6
kompetenz: begruenden
angabe: |
  Ein Ball wird vom Boden mit $20\,\text{m/s}$ senkrecht nach oben geschossen.

  a) Zu welchen zwei Zeitpunkten ist er $15\,\text{m}$ hoch? Gib die frühere und die spätere Zeit an (zwei Nachkommastellen).

  b) Wie groß ist das Tempo in $15\,\text{m}$ Höhe?

  c) Erkläre, warum die Gleichung zwei positive Lösungen hat.
teile:
  - typ: zahl
    label: a) frühere Zeit
    loesung: "(20 - sqrt(400 - 2*9.81*15))/9.81"
    einheit: "s"
    anzeige: '0{,}99'
  - typ: zahl
    label: a) spätere Zeit
    loesung: "(20 + sqrt(400 - 2*9.81*15))/9.81"
    einheit: "s"
    anzeige: '3{,}09'
  - typ: zahl
    label: b) Tempo
    loesung: "sqrt(400 - 2*9.81*15)"
    einheit: "m/s"
    anzeige: '10{,}3'
    fehler:
      - wert: "sqrt(400 + 2*9.81*15)"
        meldung: Der Ball wird auf dem Weg nach oben **langsamer**. In $v^2 = v_0^2 - 2 g h$ steht ein Minus.
  - typ: text
    label: c) Begründung
    muster: |
      Der Ball erreicht $15\,\text{m}$ zweimal: einmal auf dem Weg nach oben und einmal auf dem Weg nach unten. Beide
      Zeitpunkte liegen nach dem Abwurf, deshalb sind beide Lösungen positiv und physikalisch sinnvoll. Ihr Mittelwert
      $\tfrac12(0{,}99 + 3{,}09)\,\text{s} = 2{,}04\,\text{s}$ ist die Steigzeit $v_0/g$.
hinweise:
  - 'Setze $h(t) = 20\,t - 4{,}905\,t^2 = 15$ und bringe alles auf eine Seite.'
  - Die Lösungsformel liefert zwei Zeiten. Überlege, was der Ball zu jeder der beiden Zeiten gerade tut.
  - 'Für b) die zeitfreie Gleichung $v^2 = v_0^2 - 2 g h$.'
loesung: |
  **Ansatz:** $h(t) = 20\,t - 4{,}905\,t^2 = 15$, also $4{,}905\,t^2 - 20\,t + 15 = 0$ ($h$ in m, $t$ in s).
  ---
  **a)** $t = \dfrac{20 \pm \sqrt{400 - 294{,}3}}{9{,}81}\,\text{s} = \dfrac{20 \pm 10{,}28}{9{,}81}\,\text{s}$, also $t_1 = 0{,}99\,\text{s}$ und $t_2 = 3{,}09\,\text{s}$.
  ---
  **b)** $v^2 = (20\,\text{m/s})^2 - 2\cdot 9{,}81\,\text{m/s}^2\cdot 15\,\text{m} = 105{,}7\,\text{m}^2/\text{s}^2$, also $|v| = 10{,}3\,\text{m/s}$, beim ersten Mal nach oben, beim zweiten Mal nach unten.
  ---
  **c)** Die zwei Lösungen sind Aufstieg und Abstieg. Probe: Die Mitte $2{,}04\,\text{s}$ ist die Steigzeit $20/9{,}81\,\text{s} = 2{,}04\,\text{s}$. Das bestätigt die Symmetrie.
```

## Waagrechter und schiefer Wurf

```aufgabe
id: p2-9-check
art: check
titel: "Vorwissen: eine Geschwindigkeit zerlegen"
niveau: 1
angabe: |
  Ein Ball wird mit $12\,\text{m/s}$ unter $60^\circ$ gegen die Waagrechte abgeworfen. Wie groß ist der **senkrechte** Anteil der Geschwindigkeit? Zwei Nachkommastellen.
teile:
  - typ: zahl
    loesung: "12*sin(inRad(60))"
    einheit: "m/s"
    anzeige: '10{,}39'
    fehler:
      - wert: "12*cos(inRad(60))"
        meldung: Das ist der waagrechte Anteil. Der senkrechte Anteil liegt dem Winkel gegenüber, er ist die Gegenkathete, also gehört der Sinus dazu.
hinweise:
  - 'Senkrechter Anteil $v_y = v_0\sin\alpha$, waagrechter Anteil $v_x = v_0\cos\alpha$.'
loesung: |
  Der Geschwindigkeitspfeil ist die Hypotenuse. Der senkrechte Anteil liegt dem Abwurfwinkel gegenüber.
  ---
  $v_y = 12\,\text{m/s}\cdot\sin 60^\circ = 12\,\text{m/s}\cdot 0{,}866 = 10{,}39\,\text{m/s}$. Wiederholen: [5.2 Das rechtwinklige Dreieck](/lernen/mathe3/trigonometrie/das-rechtwinklige-dreieck).
```

### Das Superpositionsprinzip

Rollt eine Kugel über eine Tischkante, fliegt sie auf einer gekrümmten Bahn zu Boden. Wie beschreibt man so
eine zweidimensionale Bewegung? Galilei fand den Schlüssel: Die waagrechte und die senkrechte Bewegung
**stören einander nicht**. Man kann sie getrennt berechnen und danach zusammensetzen.

:::satz[Superpositionsprinzip (Unabhängigkeitsprinzip)]
Führt ein Körper gleichzeitig mehrere Bewegungen aus, so überlagern sich diese ungestört. „Superposition“ heißt
wörtlich „Überlagerung“. Beim Wurf ohne Luftwiderstand gilt:

- **waagrecht** ($x$-Richtung): gleichförmige Bewegung, $a_x = 0$, also bleibt $v_x$ konstant;
- **senkrecht** ($y$-Richtung, Achse nach oben): gleichmäßig beschleunigt mit $a_y = -g$, wie beim senkrechten Wurf.

**Beispiel:** Eine Kugel wird waagrecht abgeschossen, gleichzeitig fällt eine zweite aus derselben Höhe senkrecht
herunter. Beide treffen **gleichzeitig** am Boden auf. Die waagrechte Geschwindigkeit ändert die Fallzeit nicht.

**Kein Beispiel:** Ein Federball. Hier ist der Luftwiderstand groß und hängt von der **gesamten** Geschwindigkeit ab.
Waagrechte und senkrechte Bewegung beeinflussen sich dann gegenseitig, das Prinzip gilt nicht mehr.
:::

```aufgabe
id: p2-9-fallzeit-konzept
titel: Welche Kugel landet zuerst?
niveau: 1
lernziel: 7
kompetenz: verstehen
angabe: |
  Aus $1{,}5\,\text{m}$ Höhe lässt du eine Kugel einfach fallen. Im selben Moment schießt ein Federmechanismus eine gleiche Kugel aus derselben Höhe mit $5\,\text{m/s}$ waagrecht ab. Der Luftwiderstand ist vernachlässigbar. Welche Kugel landet zuerst?
teile:
  - typ: auswahl
    optionen:
      - "die fallengelassene Kugel"
      - "die waagrecht geschossene Kugel"
      - "beide gleichzeitig"
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Viele denken, der längere Weg dauere länger. Die waagrechte Bewegung ändert aber nichts an der senkrechten. Beide fallen in derselben Zeit dieselbe Höhe.
      - wert: 1
        meldung: Die waagrechte Geschwindigkeit „trägt“ die Kugel nicht und beschleunigt auch nicht ihren Fall. Senkrecht starten beide mit $v_y = 0$.
hinweise:
  - Betrachte nur die senkrechte Bewegung. Womit starten beide Kugeln senkrecht, und welche Beschleunigung haben sie?
loesung: |
  **Superposition:** Die senkrechte Bewegung ist bei beiden ein freier Fall aus der Ruhe mit $a_y = -g$. Die waagrechte Bewegung läuft unabhängig davon.
  ---
  **Ergebnis:** Beide brauchen $t = \sqrt{2\cdot 1{,}5\,\text{m}/9{,}81\,\text{m/s}^2} = 0{,}55\,\text{s}$ und landen gleichzeitig. Die geschossene Kugel landet nur weiter weg.
```

### Waagrechter Wurf

Ein Körper wird aus der Höhe $h$ mit der waagrechten Geschwindigkeit $v_0$ abgeworfen. Wir legen den Ursprung
an den Boden unter dem Abwurfpunkt, $x$ nach vorn, $y$ nach oben. Nach dem Superpositionsprinzip gilt
$$x(t) = v_0\,t, \qquad y(t) = h - \tfrac12 g t^2.$$
Die **Fallzeit** ist dieselbe wie beim freien Fall, $t_F = \sqrt{2h/g}$, denn senkrecht startet der Körper aus der Ruhe.
Die **Wurfweite** ist $w = v_0\,t_F$. Die **Auftreffgeschwindigkeit** setzt sich aus $v_x = v_0$ und $v_y = -g\,t_F$ zusammen:
$$v = \sqrt{v_x^2 + v_y^2}, \qquad \tan\beta = \frac{|v_y|}{v_x}.$$
Dabei ist $\beta$ der Winkel, unter dem der Körper gegen die Waagrechte auftrifft. Löst man $x = v_0 t$ nach $t$ auf und setzt
in $y(t)$ ein, folgt die Bahnkurve $y = h - \dfrac{g}{2v_0^2}\,x^2$, eine nach unten geöffnete **Parabel**.

:::beispiel[Ein Ball aus dem Fenster]
Ein Kind wirft einen Ball aus einem Fenster in $5{,}0\,\text{m}$ Höhe mit $4{,}0\,\text{m/s}$ waagrecht hinaus.

**Schritt 1, Fallzeit (nur senkrecht):** $t_F = \sqrt{\dfrac{2\cdot 5{,}0\,\text{m}}{9{,}81\,\text{m/s}^2}} = 1{,}01\,\text{s}$.

**Schritt 2, Weite (nur waagrecht):** $w = 4{,}0\,\text{m/s}\cdot 1{,}01\,\text{s} = 4{,}04\,\text{m}$.

**Schritt 3, Auftreffgeschwindigkeit:** $v_y = -9{,}81\,\text{m/s}^2\cdot 1{,}01\,\text{s} = -9{,}90\,\text{m/s}$. Pythagoras:
$v = \sqrt{(4{,}0\,\text{m/s})^2 + (9{,}90\,\text{m/s})^2} = 10{,}7\,\text{m/s}$.

**Schritt 4, Winkel:** $\tan\beta = \dfrac{9{,}90}{4{,}0} = 2{,}48$, also $\beta = 68^\circ$ gegen den Boden. Der Ball kommt steil herunter,
weil die senkrechte Geschwindigkeit inzwischen viel größer ist als die waagrechte.
:::

:::achtung[Fehler: die Komponenten der Auftreffgeschwindigkeit einfach addieren]
Für den Ball aus dem Fenster schreibt ein Schüler: „$v = 4{,}0\,\text{m/s} + 9{,}90\,\text{m/s} = 13{,}9\,\text{m/s}$.“ Die beiden Anteile stehen aber
senkrecht aufeinander. Pfeile, die einen rechten Winkel bilden, setzt man mit dem Satz des Pythagoras zusammen:
$\sqrt{4{,}0^2 + 9{,}90^2}\,\text{m/s} = 10{,}7\,\text{m/s}$. Die Summe der Beträge ist immer zu groß.
:::

### Schiefer Wurf

Wird ein Körper mit $v_0$ unter dem Winkel $\alpha$ gegen die Waagrechte abgeworfen, zerlegt man zuerst die
Anfangsgeschwindigkeit in ihre Komponenten:
$$v_{0x} = v_0\cos\alpha, \qquad v_{0y} = v_0\sin\alpha.$$
Damit gilt mit der Abwurfhöhe $h_0$:
$$x(t) = v_0\cos\alpha\cdot t, \qquad y(t) = h_0 + v_0\sin\alpha\cdot t - \tfrac12 g t^2.$$

Für Abwurf und Landung auf **gleicher Höhe** folgen vier Formeln:

:::formel[Schiefer Wurf auf ebenem Boden]
$$t_S = \frac{v_0\sin\alpha}{g}, \qquad T = \frac{2v_0\sin\alpha}{g}, \qquad H = \frac{v_0^2\sin^2\alpha}{2g}, \qquad W = \frac{v_0^2\sin(2\alpha)}{g}.$$
Dabei ist $t_S$ die Steigzeit, $T$ die Flugzeit, $H$ die Steighöhe und $W$ die Wurfweite.
:::

**Woher kommen die Formeln?**

1. **Steigzeit:** Senkrecht ist es ein senkrechter Wurf mit $v_{0y}$. Oben ist $v_y = 0$: $v_0\sin\alpha - g t_S = 0$.
2. **Flugzeit:** Auf- und Abstieg sind symmetrisch, also $T = 2 t_S$.
3. **Steighöhe:** wie beim senkrechten Wurf mit $v_{0y}$, also $H = v_{0y}^2/(2g)$.
4. **Weite:** waagrechte Geschwindigkeit mal Flugzeit, $W = v_0\cos\alpha\cdot\dfrac{2v_0\sin\alpha}{g}$. Mit der Doppelwinkelformel
   $2\sin\alpha\cos\alpha = \sin(2\alpha)$ folgt die Formel.

Die Weite ist am größten, wenn $\sin(2\alpha) = 1$ ist, also bei $\alpha = 45^\circ$. Weil $\sin(2\alpha) = \sin(180^\circ - 2\alpha)$
gilt, liefern **komplementäre Winkel** wie $30^\circ$ und $60^\circ$ dieselbe Weite. Der flache Wurf ist schnell, der steile hoch und langsam.

:::beispiel[Ein Abstoß beim Fußball]
Ein Tormann schießt den Ball mit $18\,\text{m/s}$ unter $35^\circ$ ab. Der Ball landet auf gleicher Höhe.

**Schritt 1, zerlegen:** $v_{0x} = 18\,\text{m/s}\cdot\cos 35^\circ = 14{,}7\,\text{m/s}$, $v_{0y} = 18\,\text{m/s}\cdot\sin 35^\circ = 10{,}3\,\text{m/s}$.

**Schritt 2, Flugzeit:** $T = \dfrac{2\cdot 10{,}3\,\text{m/s}}{9{,}81\,\text{m/s}^2} = 2{,}10\,\text{s}$.

**Schritt 3, Steighöhe:** $H = \dfrac{(10{,}3\,\text{m/s})^2}{2\cdot 9{,}81\,\text{m/s}^2} = 5{,}43\,\text{m}$.

**Schritt 4, Weite:** $W = 14{,}7\,\text{m/s}\cdot 2{,}10\,\text{s} = 31{,}0\,\text{m}$. Probe: $\dfrac{18^2\cdot\sin 70^\circ}{9{,}81}\,\text{m} = 31{,}0\,\text{m}$. ✓
:::

:::achtung[Fehler: die Steighöhe mit dem ganzen v₀ rechnen]
Für den Abstoß rechnet eine Schülerin: „$H = \dfrac{18^2}{2\cdot 9{,}81}\,\text{m} = 16{,}5\,\text{m}$.“ Das wäre die Höhe bei einem Wurf
**senkrecht** nach oben. Beim schiefen Wurf zählt für die Höhe nur der senkrechte Anteil $v_{0y} = 10{,}3\,\text{m/s}$.
Richtig ist $H = 5{,}43\,\text{m}$. Zuerst zerlegen, dann rechnen.
:::

:::achtung[Fehler: die Weitenformel bei erhöhtem Abwurf]
Eine Kugelstoßerin stößt aus $2{,}0\,\text{m}$ Höhe mit $13\,\text{m/s}$ unter $42^\circ$. Ein Schüler rechnet:
„$W = \dfrac{13^2\cdot\sin 84^\circ}{9{,}81}\,\text{m} = 17{,}1\,\text{m}$.“ Die Formel gilt aber nur bei gleicher Abwurf- und Landehöhe.
Die Kugel fällt hier noch $2\,\text{m}$ weiter. Richtig löst man $y(t) = 0$:
$t = \dfrac{8{,}70 + \sqrt{8{,}70^2 + 2\cdot 9{,}81\cdot 2{,}0}}{9{,}81}\,\text{s} = 1{,}98\,\text{s}$, also $x = 9{,}66\,\text{m/s}\cdot 1{,}98\,\text{s} = 19{,}1\,\text{m}$.
:::

Bei erhöhtem Abwurf ist auch der beste Winkel kleiner als $45^\circ$. Mit Luftwiderstand wird die Bahn eine
unsymmetrische **ballistische Kurve**: Der absteigende Ast ist steiler, die Weite deutlich kleiner. Beim Golfball ist
der Unterschied enorm, beim Kugelstoß ist das Parabelmodell recht gut.

```aufgabe
id: p2-9-check-widget
art: check
titel: "Vorhersage: 30 Grad oder 60 Grad?"
niveau: 1
angabe: |
  Ein Ball wird auf ebenem Boden ohne Luftwiderstand mit $15\,\text{m/s}$ abgeworfen, einmal unter $30^\circ$ und einmal unter $60^\circ$. Sage voraus, bevor du es im Werkzeug ausprobierst: Wie verhalten sich die Wurfweiten?
teile:
  - typ: auswahl
    optionen:
      - "Unter 60° fliegt der Ball doppelt so weit."
      - "Beide Weiten sind gleich."
      - "Unter 30° fliegt der Ball weiter, weil er schneller nach vorn fliegt."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Unter $60^\circ$ fliegt der Ball zwar länger, aber mit kleinerer waagrechter Geschwindigkeit. Beide Effekte gleichen sich genau aus.
      - wert: 2
        meldung: Unter $30^\circ$ ist $v_x$ zwar größer, die Flugzeit aber kürzer. Rechne $\sin(2\alpha)$ für beide Winkel aus.
hinweise:
  - 'Die Weite ist proportional zu $\sin(2\alpha)$. Vergleiche $\sin 60^\circ$ und $\sin 120^\circ$.'
loesung: |
  $W = v_0^2\sin(2\alpha)/g$. Für $30^\circ$ steht dort $\sin 60^\circ$, für $60^\circ$ steht $\sin 120^\circ$.
  ---
  Beide sind $0{,}866$, also sind die Weiten gleich, je $19{,}9\,\text{m}$. Prüfe es im Werkzeug.
```

```widget
name: wurf
titel: Schiefer Wurf ohne Luftwiderstand
props:
  v0: 15
  winkel: 30
  h0: 0
```

**Arbeitsauftrag:**

1. **Beobachte:** Vergleiche $30^\circ$ und $60^\circ$ bei $v_0 = 15\,\text{m/s}$. Stimmt deine Vorhersage? Welche Flugzeit und welche Höhe zeigt das Werkzeug jeweils?
2. **Vorhersage:** Stell die Abwurfhöhe auf $10\,\text{m}$. Liefert $45^\circ$ dann noch die größte Weite? Überlege zuerst, dann suche den besten Winkel.
3. **Erklärung:** Bewege den Zeitregler. Der waagrechte Pfeil $v_x$ bleibt immer gleich lang, der senkrechte $v_y$ wird gleichmäßig kleiner und wechselt im höchsten Punkt das Vorzeichen. Das ist das Superpositionsprinzip: waagrecht gleichförmig, senkrecht gleichmäßig beschleunigt.

:::merke
1. Zerlegen: $v_{0x} = v_0\cos\alpha$, $v_{0y} = v_0\sin\alpha$.
2. Waagrecht gleichförmig: $x = v_{0x}\,t$. Senkrecht wie ein senkrechter Wurf: $y = h_0 + v_{0y}t - \tfrac12 g t^2$.
3. Die Zeit verbindet beide Richtungen. Meist zuerst $t$ aus der senkrechten Bewegung, dann $x$.
4. $W = v_0^2\sin(2\alpha)/g$ und $T = 2t_S$ nur bei gleicher Abwurf- und Landehöhe.
5. Auftreffgeschwindigkeit mit Pythagoras, Winkel mit $\tan\beta = |v_y|/v_x$.
:::

```reflexion
frage: Ein Flugzeug wirft in großer Höhe ein Hilfspaket ab, während es mit konstanter Geschwindigkeit geradeaus fliegt. Wo befindet sich das Paket (ohne Luftwiderstand) während des Falls im Vergleich zum Flugzeug? Begründe mit dem Superpositionsprinzip.
antwort: |
  Das Paket bleibt immer genau **unter** dem Flugzeug. Beim Abwurf hat es dieselbe waagrechte Geschwindigkeit wie das Flugzeug.
  Waagrecht wirkt keine Beschleunigung, also behält es diese Geschwindigkeit, genau wie das Flugzeug. Senkrecht fällt es frei.
  Deshalb muss man das Paket lange **vor** dem Ziel abwerfen.
```

```aufgabe
id: p2-9-zerlegen
titel: Komponenten der Abwurfgeschwindigkeit
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Ein Speer wird mit $25\,\text{m/s}$ unter $40^\circ$ gegen die Waagrechte abgeworfen. Berechne die waagrechte und die senkrechte Komponente der Anfangsgeschwindigkeit. Eine Nachkommastelle.
teile:
  - typ: zahl
    label: waagrecht
    loesung: "25*cos(inRad(40))"
    einheit: "m/s"
    anzeige: '19{,}2'
    fehler:
      - wert: "25*sin(inRad(40))"
        meldung: Sinus und Kosinus sind vertauscht. Der waagrechte Anteil liegt am Winkel an (Ankathete), also $v_0\cos\alpha$.
      - wert: "25*cos(40)"
        meldung: Dein Taschenrechner steht im Bogenmaß. Stelle ihn auf Grad (DEG) um.
  - typ: zahl
    label: senkrecht
    loesung: "25*sin(inRad(40))"
    einheit: "m/s"
    anzeige: '16{,}1'
    fehler:
      - wert: "25*cos(inRad(40))"
        meldung: Das ist die waagrechte Komponente. Für die senkrechte brauchst du den Sinus.
hinweise:
  - '$v_{0x} = v_0\cos\alpha$, $v_{0y} = v_0\sin\alpha$. Taschenrechner auf Grad stellen.'
loesung: |
  **Zerlegen:** $v_{0x} = 25\,\text{m/s}\cdot\cos 40^\circ = 25\,\text{m/s}\cdot 0{,}766 = 19{,}2\,\text{m/s}$.
  ---
  $v_{0y} = 25\,\text{m/s}\cdot\sin 40^\circ = 25\,\text{m/s}\cdot 0{,}643 = 16{,}1\,\text{m/s}$. Probe: $\sqrt{19{,}2^2 + 16{,}1^2}\,\text{m/s} = 25\,\text{m/s}$. ✓
```

```aufgabe
id: p2-max-weite
titel: Welcher Winkel trägt am weitesten?
niveau: 1
lernziel: 7
kompetenz: verstehen
angabe: |
  Ein Ball wird auf ebenem Boden ohne Luftwiderstand immer mit derselben Geschwindigkeit geworfen. Welche Aussagen stimmen? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - 'Die größte Weite erreicht man bei $45^\circ$.'
      - 'Bei $20^\circ$ und $70^\circ$ ist die Weite gleich.'
      - 'Bei $70^\circ$ ist die Flugzeit länger als bei $20^\circ$.'
      - 'Die waagrechte Geschwindigkeit nimmt während des Fluges ab.'
    richtig: [0, 1, 2]
    fehler:
      - wert: [0, 1, 2, 3]
        meldung: Ohne Luftwiderstand gibt es waagrecht keine Beschleunigung. Die waagrechte Geschwindigkeit bleibt konstant.
      - wert: [0, 2]
        meldung: $20^\circ$ und $70^\circ$ ergänzen sich zu $90^\circ$. Dann ist $\sin 40^\circ = \sin 140^\circ$, die Weiten sind gleich.
hinweise:
  - 'Die Weite ist proportional zu $\sin(2\alpha)$, die Flugzeit zu $\sin\alpha$.'
loesung: |
  **Weite:** $W \propto \sin(2\alpha)$ ist bei $2\alpha = 90^\circ$ maximal. Außerdem ist $\sin 40^\circ = \sin 140^\circ$, also sind die Weiten bei $20^\circ$ und $70^\circ$ gleich.
  ---
  **Flugzeit:** $T \propto \sin\alpha$, beim steilen Wurf länger. Ohne Luftwiderstand bleibt $v_x$ konstant, Aussage 4 ist falsch.
```

```aufgabe
id: p2-waagrechter-wurf
titel: Kugel rollt vom Tisch
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Eine Kugel rollt mit $2{,}5\,\text{m/s}$ über die Kante eines $0{,}80\,\text{m}$ hohen Tisches. Drei signifikante Stellen.

  a) Wie lange ist sie in der Luft?

  b) Wie weit von der Tischkante trifft sie am Boden auf?

  c) Mit welcher Geschwindigkeit trifft sie auf?
teile:
  - typ: zahl
    label: a) Flugzeit
    loesung: "sqrt(2*0.8/9.81)"
    einheit: "s"
    anzeige: '0{,}404'
    fehler:
      - wert: "0.8/2.5"
        meldung: Du hast Höhe durch waagrechte Geschwindigkeit geteilt. Die Fallzeit hängt nur von der Höhe ab, senkrecht ist es ein freier Fall.
  - typ: zahl
    label: b) Weite
    loesung: "2.5*sqrt(2*0.8/9.81)"
    einheit: "m"
    anzeige: '1{,}01'
    fehler:
      - wert: "2.5*sqrt(0.8/9.81)"
        meldung: In der Fallzeit fehlt der Faktor $2$, richtig ist $t = \sqrt{2h/g}$.
  - typ: zahl
    label: c) Geschwindigkeit
    loesung: "sqrt(2.5^2 + 2*9.81*0.8)"
    einheit: "m/s"
    anzeige: '4{,}68'
    fehler:
      - wert: "2.5 + sqrt(2*9.81*0.8)"
        meldung: Du hast die Komponenten addiert. Sie stehen senkrecht aufeinander, also Pythagoras.
hinweise:
  - Die Fallzeit hängt nur von der Höhe ab.
  - 'Für c): $v_y = g t$, dann Pythagoras.'
loesung: |
  **a)** Senkrecht freier Fall: $t = \sqrt{\dfrac{2h}{g}} = \sqrt{\dfrac{1{,}6\,\text{m}}{9{,}81\,\text{m/s}^2}} = 0{,}404\,\text{s}$.
  ---
  **b)** Waagrecht gleichförmig: $w = v_0 t = 2{,}5\,\text{m/s}\cdot 0{,}404\,\text{s} = 1{,}01\,\text{m}$.
  ---
  **c)** $v_y = 9{,}81\,\text{m/s}^2\cdot 0{,}404\,\text{s} = 3{,}96\,\text{m/s}$, also $v = \sqrt{(2{,}5\,\text{m/s})^2 + (3{,}96\,\text{m/s})^2} = 4{,}68\,\text{m/s}$. Plausibel: fast doppelt so schnell wie beim Abrollen, weil die Kugel beim Fallen senkrecht Tempo gewinnt.
```

```aufgabe
id: p2-schiefer-wurf
titel: Schiefer Wurf auf ebenem Boden
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Ein Golfball wird mit $20\,\text{m/s}$ unter $30^\circ$ gegen die Horizontale abgeschlagen und landet wieder auf gleicher Höhe. Berechne Flugzeit, Steighöhe und Wurfweite ohne Luftwiderstand (drei signifikante Stellen).
teile:
  - typ: zahl
    label: Flugzeit
    loesung: "2*20*sin(inRad(30))/9.81"
    einheit: "s"
    anzeige: '2{,}04'
    fehler:
      - wert: "20*sin(inRad(30))/9.81"
        meldung: Das ist nur die Steigzeit bis zum höchsten Punkt. Die Flugzeit ist doppelt so lang.
  - typ: zahl
    label: Steighöhe
    loesung: "(20*sin(inRad(30)))^2/(2*9.81)"
    einheit: "m"
    anzeige: '5{,}10'
    fehler:
      - wert: "20^2/(2*9.81)"
        meldung: Für die Höhe zählt nur der senkrechte Anteil $v_0\sin\alpha$, nicht das ganze $v_0$.
  - typ: zahl
    label: Wurfweite
    loesung: "20^2*sin(inRad(60))/9.81"
    einheit: "m"
    anzeige: '35{,}3'
    fehler:
      - wert: "20*2*20*sin(inRad(30))/9.81"
        meldung: Du hast das ganze $v_0$ mit der Flugzeit multipliziert. Waagrecht bewegt sich der Ball nur mit $v_0\cos\alpha$.
hinweise:
  - 'Zerlege: $v_{0x} = 20\cos 30^\circ$ und $v_{0y} = 20\sin 30^\circ$, beides in m/s.'
  - 'Flugzeit aus der senkrechten Bewegung ($T = 2v_{0y}/g$), Weite aus der waagrechten ($W = v_{0x}T$).'
gefuehrt:
  - text: Wie groß ist $v_{0y}$ in m/s?
    teil: { typ: zahl, loesung: "20*sin(inRad(30))" }
    erklaerung: $v_{0y} = 20\,\text{m/s}\cdot\sin 30^\circ = 10\,\text{m/s}$.
  - text: Wie groß ist $v_{0x}$ in m/s?
    teil: { typ: zahl, loesung: "20*cos(inRad(30))" }
    erklaerung: $v_{0x} = 20\,\text{m/s}\cdot\cos 30^\circ = 17{,}3\,\text{m/s}$.
  - text: Wie lange fliegt der Ball (in s)?
    teil: { typ: zahl, loesung: "2*10/9.81" }
    erklaerung: Senkrecht wie ein senkrechter Wurf mit $10\,\text{m/s}$, also $T = 2\cdot 10/9{,}81\,\text{s} = 2{,}04\,\text{s}$.
  - text: Wie weit fliegt er (in m)?
    teil: { typ: zahl, loesung: "20*cos(inRad(30))*2*10/9.81" }
    erklaerung: $W = 17{,}3\,\text{m/s}\cdot 2{,}04\,\text{s} = 35{,}3\,\text{m}$.
loesung: |
  **Zerlegen:** $v_{0y} = 20\,\text{m/s}\cdot\sin 30^\circ = 10\,\text{m/s}$, $v_{0x} = 20\,\text{m/s}\cdot\cos 30^\circ = 17{,}3\,\text{m/s}$.
  ---
  **Flugzeit:** $T = \dfrac{2 v_{0y}}{g} = \dfrac{20\,\text{m/s}}{9{,}81\,\text{m/s}^2} = 2{,}04\,\text{s}$.
  ---
  **Steighöhe:** $H = \dfrac{v_{0y}^2}{2g} = \dfrac{100\,\text{m}^2/\text{s}^2}{19{,}62\,\text{m/s}^2} = 5{,}10\,\text{m}$.
  ---
  **Weite:** $W = v_{0x}\,T = 17{,}32\,\text{m/s}\cdot 2{,}039\,\text{s} = 35{,}3\,\text{m}$. Probe: $\dfrac{v_0^2\sin 60^\circ}{g} = 35{,}3\,\text{m}$. ✓ Ein echter Golfball fliegt wegen des Luftwiderstands und des Dralls anders.
```

```aufgabe
id: p2-9-weitsprung
titel: Wie schnell muss der Weitspringer sein?
niveau: 3
lernziel: 7
kompetenz: modellieren
angabe: |
  Ein Weitspringer springt unter $22^\circ$ ab und landet $7{,}5\,\text{m}$ weiter. Wir behandeln seinen Schwerpunkt als Massenpunkt, der auf gleicher Höhe landet, und vernachlässigen den Luftwiderstand.

  a) Mit welcher Geschwindigkeit ist er abgesprungen? Zwei Nachkommastellen.

  b) Wie hoch hebt sich sein Schwerpunkt dabei?
teile:
  - typ: zahl
    label: a) Absprunggeschwindigkeit
    loesung: "sqrt(7.5*9.81/sin(inRad(44)))"
    einheit: "m/s"
    anzeige: '10{,}29'
    fehler:
      - wert: "sqrt(7.5*9.81/sin(inRad(22)))"
        meldung: In der Weitenformel steht $\sin(2\alpha)$, also $\sin 44^\circ$, nicht $\sin 22^\circ$.
      - wert: "7.5*9.81/sin(inRad(44))"
        meldung: Das ist $v_0^2$. Die Wurzel fehlt.
  - typ: zahl
    label: b) Steighöhe des Schwerpunkts
    loesung: "(sqrt(7.5*9.81/sin(inRad(44)))*sin(inRad(22)))^2/(2*9.81)"
    einheit: "m"
    anzeige: '0{,}76'
    fehler:
      - wert: "7.5*9.81/sin(inRad(44))/(2*9.81)"
        meldung: Für die Höhe zählt nur der senkrechte Anteil der Geschwindigkeit, $v_0\sin 22^\circ$.
hinweise:
  - 'Stelle $W = v_0^2\sin(2\alpha)/g$ nach $v_0$ um.'
  - 'Für b): $H = (v_0\sin\alpha)^2/(2g)$.'
loesung: |
  **Modell:** Schwerpunkt als Massenpunkt, Absprung- und Landehöhe gleich, ohne Luftwiderstand. Dann gilt die Weitenformel.
  ---
  **a) Umkehraufgabe:** Aus $W = \dfrac{v_0^2\sin(2\alpha)}{g}$ folgt $v_0 = \sqrt{\dfrac{W g}{\sin(2\alpha)}} = \sqrt{\dfrac{7{,}5\,\text{m}\cdot 9{,}81\,\text{m/s}^2}{\sin 44^\circ}} = \sqrt{105{,}9\,\text{m}^2/\text{s}^2} = 10{,}29\,\text{m/s}$.
  ---
  **b)** $v_{0y} = 10{,}29\,\text{m/s}\cdot\sin 22^\circ = 3{,}86\,\text{m/s}$, also $H = \dfrac{(3{,}86\,\text{m/s})^2}{19{,}62\,\text{m/s}^2} = 0{,}76\,\text{m}$.
  ---
  **Einordnung:** Weltklasse-Weitspringer erreichen beim Absprung etwa $10\,\text{m/s}$. Sie springen flacher als $45^\circ$, weil sie aus vollem Lauf viel mehr waagrechte als senkrechte Geschwindigkeit erzeugen können.
```

```aufgabe
id: p2-kugelstoss
titel: Kugelstoß
niveau: 3
lernziel: 7
kompetenz: modellieren
angabe: |
  Eine Kugelstoßerin stößt die Kugel aus $2{,}0\,\text{m}$ Höhe mit $14\,\text{m/s}$ unter $40^\circ$ ab. Drei signifikante Stellen.

  a) Wie lange fliegt die Kugel?

  b) Wie weit fliegt sie (waagrecht gemessen)?

  c) Wie hoch über dem Boden ist ihr höchster Punkt?
teile:
  - typ: zahl
    label: a) Flugzeit
    loesung: "(14*sin(inRad(40)) + sqrt((14*sin(inRad(40)))^2 + 2*9.81*2))/9.81"
    einheit: "s"
    anzeige: '2{,}04'
    fehler:
      - wert: "2*14*sin(inRad(40))/9.81"
        meldung: $T = 2 t_S$ gilt nur bei gleicher Abwurf- und Landehöhe. Die Kugel fällt hier noch $2\,\text{m}$ tiefer.
  - typ: zahl
    label: b) Weite
    loesung: "14*cos(inRad(40))*(14*sin(inRad(40)) + sqrt((14*sin(inRad(40)))^2 + 2*9.81*2))/9.81"
    einheit: "m"
    anzeige: '21{,}8'
    fehler:
      - wert: "14^2*sin(inRad(80))/9.81"
        meldung: Die Weitenformel gilt nur bei gleicher Abwurf- und Landehöhe. Du musst $y(t) = 0$ lösen.
  - typ: zahl
    label: c) Gipfelhöhe
    loesung: "2 + (14*sin(inRad(40)))^2/(2*9.81)"
    einheit: "m"
    anzeige: '6{,}13'
    fehler:
      - wert: "(14*sin(inRad(40)))^2/(2*9.81)"
        meldung: Das ist die Höhe **über der Abwurfstelle**. Gefragt ist die Höhe über dem Boden, also kommen die $2{,}0\,\text{m}$ dazu.
hinweise:
  - Die Formel für die Wurfweite auf ebenem Boden gilt hier nicht.
  - 'Löse $0 = 2{,}0 + v_{0y} t - 4{,}905\,t^2$ mit $v_{0y} = 14\sin 40^\circ = 9{,}00\,\text{m/s}$.'
loesung: |
  **Zerlegen:** $v_{0x} = 14\,\text{m/s}\cdot\cos 40^\circ = 10{,}72\,\text{m/s}$, $v_{0y} = 14\,\text{m/s}\cdot\sin 40^\circ = 9{,}00\,\text{m/s}$.
  ---
  **a)** $4{,}905\,t^2 - 9{,}00\,t - 2{,}0 = 0$ ($t$ in s). Mit der großen Lösungsformel und der positiven Lösung: $t = \dfrac{9{,}00 + \sqrt{9{,}00^2 + 4\cdot 4{,}905\cdot 2{,}0}}{9{,}81}\,\text{s} = \dfrac{9{,}00 + 10{,}96}{9{,}81}\,\text{s} = 2{,}04\,\text{s}$.
  ---
  **b)** $x = v_{0x}\,t = 10{,}72\,\text{m/s}\cdot 2{,}035\,\text{s} = 21{,}8\,\text{m}$. Plausibel: Die Weltrekorde im Kugelstoßen liegen bei gut $22{,}5\,\text{m}$ (Frauen) und gut $23{,}5\,\text{m}$ (Männer). $21{,}8\,\text{m}$ ist also ein Stoß der Weltklasse.
  ---
  **c)** $H = h_0 + \dfrac{v_{0y}^2}{2g} = 2{,}0\,\text{m} + \dfrac{80{,}98\,\text{m}^2/\text{s}^2}{19{,}62\,\text{m/s}^2} = 6{,}13\,\text{m}$. Das ist etwa die Höhe eines zweistöckigen Hauses.
```

## Relativbewegung und Inertialsysteme

```aufgabe
id: p2-10-check
art: check
titel: "Vorwissen: Geschwindigkeit hängt vom Bezugssystem ab"
niveau: 1
angabe: |
  Ein Zug fährt mit $20\,\text{m/s}$ nach vorn. Ein Fahrgast geht im Gang mit $2{,}0\,\text{m/s}$ nach **hinten** (relativ zum Zug). Wie schnell bewegt er sich relativ zum Bahnsteig, und in welche Richtung? Gib den Wert mit Vorzeichen an, „nach vorn“ ist positiv.
teile:
  - typ: zahl
    loesung: "20-2"
    einheit: "m/s"
    anzeige: '18'
    fehler:
      - wert: "22"
        meldung: Der Fahrgast geht **gegen** die Fahrtrichtung. Seine Geschwindigkeit relativ zum Zug ist negativ, $-2{,}0\,\text{m/s}$.
      - wert: "-2"
        meldung: Das ist seine Geschwindigkeit relativ zum **Zug**. Relativ zum Bahnsteig wird er vom Zug mitgenommen.
hinweise:
  - Geschwindigkeit relativ zum Bahnsteig $=$ Geschwindigkeit relativ zum Zug $+$ Geschwindigkeit des Zuges.
loesung: |
  Relativ zum Zug hat der Fahrgast $-2{,}0\,\text{m/s}$, der Zug relativ zum Bahnsteig $+20\,\text{m/s}$.
  ---
  Zusammen: $-2{,}0\,\text{m/s} + 20\,\text{m/s} = +18\,\text{m/s}$, also nach vorn. Wiederholen: [2.1 Bezugssystem, Massenpunkt und Ort](/lernen/physik1/kinematik/bezugssystem-massenpunkt-und-ort).
```

### Geschwindigkeiten addieren

Gehst du im fahrenden Zug mit $1{,}5\,\text{m/s}$ nach vorn, während der Zug mit $30\,\text{m/s}$ fährt, bewegst du dich
relativ zum Bahndamm mit $31{,}5\,\text{m/s}$. Deine Geschwindigkeit setzt sich aus zwei Teilen zusammen: deiner
Bewegung im Zug und der Bewegung des Zuges.

:::satz[Galileische Geschwindigkeitsaddition]
Ein Bezugssystem S′ (zum Beispiel ein Zug) bewegt sich relativ zu einem Bezugssystem S (zum Beispiel dem Boden) mit der
konstanten Geschwindigkeit $\vec u$. Ein Körper hat in S′ die Geschwindigkeit $\vec v\,'$. Dann hat er in S die Geschwindigkeit
$$\vec v = \vec v\,' + \vec u.$$
Die Pfeile über den Buchstaben zeigen: Die Addition ist **vektoriell**, Richtungen zählen mit.

**Beispiel:** Fahrgast $\vec v\,' = 1{,}5\,\text{m/s}$ nach vorn, Zug $\vec u = 30\,\text{m/s}$ nach vorn, zusammen $31{,}5\,\text{m/s}$ nach vorn.

**Kein Beispiel:** Licht. Eine Taschenlampe im fahrenden Zug sendet Licht, das auch vom Bahnsteig aus genau mit
$3{,}00\cdot 10^8\,\text{m/s}$ gemessen wird, nicht schneller. Die Galilei-Addition gilt nur für Geschwindigkeiten weit unter der
Lichtgeschwindigkeit. Für sehr schnelle Körper braucht man die Relativitätstheorie.
:::

:::beispiel[Das Laufband am Flughafen]
Ein Laufband ist $60\,\text{m}$ lang und läuft mit $0{,}75\,\text{m/s}$. Ein Reisender geht darauf mit $1{,}25\,\text{m/s}$ (relativ zum Band) in Laufrichtung.

**Schritt 1, Geschwindigkeit relativ zum Boden:** $v = v' + u = 1{,}25\,\text{m/s} + 0{,}75\,\text{m/s} = 2{,}0\,\text{m/s}$.

**Schritt 2, Zeit:** $t = \dfrac{60\,\text{m}}{2{,}0\,\text{m/s}} = 30\,\text{s}$. Ohne Band bräuchte er $60\,\text{m} / 1{,}25\,\text{m/s} = 48\,\text{s}$.

**Antwort:** Das Laufband spart $18\,\text{s}$. Die Länge des Bandes ist in beiden Bezugssystemen dieselbe, nur die Geschwindigkeit ist verschieden.
:::

### Relativbewegung in zwei Dimensionen

Zeigen die Geschwindigkeiten in verschiedene Richtungen, addiert man sie als Pfeile. Das klassische Beispiel ist ein
Boot im Fluss: Das Boot fährt relativ zum **Wasser**, das Wasser fließt relativ zum **Ufer**.

```plot
x: [-1, 4]
y: [-0.5, 6]
gleich: true
achsen: { x: "flussabwärts in m/s", y: "quer zum Fluss in m/s" }
vektoren:
  - { von: [0, 0], nach: [0, 5], label: "Boot relativ zum Wasser 5,0 m/s", farbe: 0 }
  - { von: [0, 5], nach: [2, 5], label: "Strömung 2,0 m/s", farbe: 1 }
  - { von: [0, 0], nach: [2, 5], label: "über Grund 5,4 m/s", farbe: 2 }
beschriftung: "Geschwindigkeiten eines Bootes, das quer zum Fluss steuert: Der Pfeil relativ zum Wasser (blau, 5,0 m/s quer) und der Pfeil der Strömung (orange, 2,0 m/s flussabwärts) ergeben hintereinandergesetzt die Geschwindigkeit über Grund (grün, 5,4 m/s schräg)."
```

:::beispiel[Ein Boot quert einen Fluss]
Ein Fluss ist $60\,\text{m}$ breit und fließt mit $2{,}0\,\text{m/s}$. Ein Boot fährt mit $5{,}0\,\text{m/s}$ relativ zum Wasser, der Bug zeigt
senkrecht zum Ufer.

**Schritt 1, Zeit für die Überfahrt:** Quer zum Fluss bewegt sich das Boot nur mit seinen $5{,}0\,\text{m/s}$, die Strömung wirkt
längs. Nach dem Superpositionsprinzip gilt $t = \dfrac{60\,\text{m}}{5{,}0\,\text{m/s}} = 12\,\text{s}$.

**Schritt 2, Abdrift:** In diesen $12\,\text{s}$ trägt die Strömung das Boot $2{,}0\,\text{m/s}\cdot 12\,\text{s} = 24\,\text{m}$ flussabwärts.

**Schritt 3, Geschwindigkeit über Grund:** Die beiden Pfeile stehen senkrecht aufeinander:
$v = \sqrt{(5{,}0\,\text{m/s})^2 + (2{,}0\,\text{m/s})^2} = 5{,}4\,\text{m/s}$, unter $\arctan(2{,}0/5{,}0) = 21{,}8^\circ$ gegen die Querrichtung.

**Antwort:** Das Boot braucht $12\,\text{s}$ und kommt $24\,\text{m}$ flussabwärts an.
:::

:::achtung[Fehler: senkrechte Geschwindigkeiten als Zahlen addieren]
Für das Boot rechnet ein Schüler: „Geschwindigkeit über Grund $= 5{,}0 + 2{,}0 = 7{,}0\,\text{m/s}$.“ Das stimmt nur, wenn Boot und Strömung in
**dieselbe** Richtung zeigen, also flussabwärts. Hier stehen die Pfeile im rechten Winkel. Richtig ist der Satz des
Pythagoras: $5{,}4\,\text{m/s}$.
:::

:::achtung[Fehler: die Überfahrtszeit mit der Geschwindigkeit über Grund rechnen]
Eine Schülerin rechnet: „$t = \dfrac{60\,\text{m}}{5{,}4\,\text{m/s}} = 11{,}1\,\text{s}$.“ Sie teilt die Flussbreite durch die schräge
Geschwindigkeit. Mit $5{,}4\,\text{m/s}$ legt das Boot aber den **schrägen** Weg zurück, und der ist $64{,}6\,\text{m}$ lang. Richtig ist
entweder Breite durch Quergeschwindigkeit, $60\,\text{m} / 5{,}0\,\text{m/s} = 12\,\text{s}$, oder schräger Weg durch schräge Geschwindigkeit,
$64{,}6\,\text{m} / 5{,}4\,\text{m/s} = 12\,\text{s}$. Man darf nur Größen derselben Richtung kombinieren.
:::

:::beispiel[Ein Kleinflugzeug im Seitenwind]
Ein Kleinflugzeug fliegt mit $200\,\text{km/h}$ relativ zur Luft. Die Luft strömt mit $50\,\text{km/h}$ von Westen nach Osten.
Der Pilot will genau nach Norden fliegen.

**Schritt 1, Vorhalt:** Er muss den Bug so weit nach Westen drehen, dass der westwärts gerichtete Anteil seiner Geschwindigkeit den Wind aufhebt:
$200\,\text{km/h}\cdot\sin\varphi = 50\,\text{km/h}$, also $\sin\varphi = 0{,}25$ und $\varphi = 14{,}5^\circ$.

**Schritt 2, Geschwindigkeit über Grund:** Nach Norden bleibt der Anteil $200\,\text{km/h}\cdot\cos\varphi = \sqrt{200^2 - 50^2}\,\text{km/h} = 194\,\text{km/h}$.

**Antwort:** $14{,}5^\circ$ Vorhalt nach Westen, $194\,\text{km/h}$ über Grund. Der Wind kostet also Zeit, auch wenn er von der Seite kommt.
:::

### Inertialsysteme

In welchem Bezugssystem gelten die Gesetze der Mechanik in ihrer einfachsten Form? Im Zug, der mit konstanter
Geschwindigkeit geradeaus fährt, fällt ein Apfel genauso senkrecht nach unten wie im Bahnhof. Bremst der Zug dagegen,
rollt eine Flasche auf dem Tisch nach vorn, obwohl niemand sie anstößt.

:::definition[Inertialsystem]
Ein **Inertialsystem** (von lateinisch *iners*, träge) ist ein Bezugssystem, in dem ein Körper, auf den keine Kraft wirkt,
in Ruhe bleibt oder sich gleichförmig geradlinig bewegt. Jedes Bezugssystem, das sich relativ zu einem Inertialsystem
**gleichförmig geradlinig** bewegt, ist wieder ein Inertialsystem.

**Beispiel:** Der Bahnsteig, in sehr guter Näherung. Ebenso ein Zug, der mit konstant $30\,\text{m/s}$ geradeaus fährt.

**Kein Beispiel:** Ein bremsender Bus oder ein Karussell. Dort setzen sich Körper scheinbar ohne Kraft in Bewegung.
:::

```aufgabe
id: p2-10-inertial-auswahl
titel: Welche Bezugssysteme sind Inertialsysteme?
niveau: 2
lernziel: 8
kompetenz: verstehen
angabe: |
  Welche Bezugssysteme sind (in guter Näherung) Inertialsysteme? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "ein Flugzeug im ruhigen Reiseflug mit konstanter Geschwindigkeit geradeaus"
      - "ein Auto, das in eine Kurve fährt, mit konstant 50 km/h"
      - "ein Zug, der gerade anfährt"
      - "ein Schiff, das mit konstant 20 km/h geradeaus fährt"
    richtig: [0, 3]
    fehler:
      - wert: [0, 1, 3]
        meldung: In der Kurve ändert sich die **Richtung** der Geschwindigkeit, auch wenn das Tempo gleich bleibt. Eine Richtungsänderung ist eine Beschleunigung. Das Auto ist kein Inertialsystem.
      - wert: [0, 2, 3]
        meldung: Ein anfahrender Zug wird schneller, er ist beschleunigt. Darin rollen Gegenstände scheinbar ohne Kraft nach hinten.
hinweise:
  - Ein Inertialsystem bewegt sich gleichförmig **und** geradlinig. Prüfe bei jedem System beides.
  - Auch eine Kurve mit gleichem Tempo ist eine Beschleunigung, denn die Richtung ändert sich.
loesung: |
  **Kriterium:** Konstante Geschwindigkeit nach Betrag **und** Richtung.
  ---
  **Inertialsysteme:** Flugzeug im ruhigen Reiseflug und Schiff mit konstanter Geschwindigkeit geradeaus.
  ---
  **Keine Inertialsysteme:** Das Auto in der Kurve (Richtung ändert sich) und der anfahrende Zug (Tempo ändert sich).
```

Galilei beschrieb das mit einem Gedankenexperiment. Stell dir den Laderaum eines Schiffes vor, das ruhig und gleichmäßig
fährt. Schmetterlinge fliegen dort in alle Richtungen gleich leicht. Tropfen fallen senkrecht in das Gefäß darunter. Kein
Experiment im Laderaum verrät, ob das Schiff fährt oder im Hafen liegt. Das nennt man das **Galileische
Relativitätsprinzip**: In allen Inertialsystemen gelten dieselben Gesetze der Mechanik. Einstein hat es später auf alle
Naturgesetze erweitert.

Die Erdoberfläche ist wegen der Erddrehung streng genommen kein Inertialsystem. Für fast alle Alltagsrechnungen ist sie
aber eine sehr gute Näherung. Was in beschleunigten Bezugssystemen passiert, behandelt der Abschnitt
[3.9 Beschleunigte Bezugssysteme, Scheinkräfte und Schwerelosigkeit](/lernen/physik1/dynamik/beschleunigte-bezugssysteme-scheinkraefte-und-schwerelosigkeit).

:::merke
1. Galilei: $\vec v = \vec v\,' + \vec u$, als Pfeile addieren. In einer Dimension mit Vorzeichen, bei rechtem Winkel mit Pythagoras.
2. Beim Boot im Fluss bestimmt nur die **Querkomponente** die Überfahrtszeit.
3. Um genau gegenüber anzukommen, muss man gegen die Strömung vorhalten: $v'\sin\varphi = u$.
4. Inertialsysteme bewegen sich gleichförmig geradlinig gegeneinander. In ihnen gelten dieselben Gesetze.
:::

```reflexion
frage: Du sitzt in einem ruhig fahrenden Zug ohne Fenster und wirfst einen Ball senkrecht nach oben. Landet er wieder in deiner Hand? Wie sieht seine Bahn für jemanden am Bahnsteig aus?
antwort: |
  Ja, er landet wieder in deiner Hand. Der Zug ist ein Inertialsystem, und der Ball hat beim Abwurf schon die
  Geschwindigkeit des Zuges. Für dich fliegt er senkrecht hoch und runter. Für jemanden am Bahnsteig fliegt er auf einer
  **Wurfparabel** nach vorn, genau so weit wie der Zug in dieser Zeit fährt. Beide Beschreibungen sind richtig, sie gehören
  nur zu verschiedenen Bezugssystemen.
```

```aufgabe
id: p2-rolltreppe
titel: Auf der Rolltreppe
niveau: 1
lernziel: 8
kompetenz: rechnen
angabe: |
  Eine Rolltreppe fährt mit $0{,}50\,\text{m/s}$ nach oben. Du gehst auf ihr mit $0{,}80\,\text{m/s}$ (relativ zur Treppe) nach oben. Wie schnell bewegst du dich relativ zum Gebäude? Und wenn du (unvernünftigerweise) mit $0{,}80\,\text{m/s}$ nach unten gehst? „Nach oben“ ist positiv.
teile:
  - typ: zahl
    label: nach oben gehend
    loesung: "0.5+0.8"
    einheit: "m/s"
    anzeige: '1{,}3'
    fehler:
      - wert: "0.8"
        meldung: Das ist deine Geschwindigkeit relativ zur **Treppe**. Die Treppe trägt dich zusätzlich nach oben.
  - typ: zahl
    label: nach unten gehend
    loesung: "0.5-0.8"
    einheit: "m/s"
    anzeige: '-0{,}3'
    fehler:
      - wert: "0.3"
        meldung: Der Betrag stimmt. Weil du schneller nach unten gehst, als die Treppe nach oben fährt, kommst du insgesamt nach **unten**. Das Vorzeichen ist negativ.
hinweise:
  - '$v = v'' + u$ mit $u = +0{,}50\,\text{m/s}$. Gehst du nach unten, ist $v'' = -0{,}80\,\text{m/s}$.'
loesung: |
  **Ansatz:** $v = v' + u$ mit der Treppengeschwindigkeit $u = +0{,}50\,\text{m/s}$.
  ---
  **Nach oben:** $0{,}80\,\text{m/s} + 0{,}50\,\text{m/s} = 1{,}30\,\text{m/s}$. **Nach unten:** $-0{,}80\,\text{m/s} + 0{,}50\,\text{m/s} = -0{,}30\,\text{m/s}$, du kommst also langsam nach unten.
```

```aufgabe
id: p2-10-zug-ball
titel: Ein Ball im fahrenden Zug
niveau: 1
lernziel: 8
kompetenz: rechnen
angabe: |
  In einem Zug, der mit $25\,\text{m/s}$ fährt, rollt ein Kind einen Ball mit $3{,}0\,\text{m/s}$ (relativ zum Zug) nach **hinten**. Wie schnell bewegt sich der Ball relativ zum Gleis? Fahrtrichtung positiv.
teile:
  - typ: zahl
    loesung: "25-3"
    einheit: "m/s"
    anzeige: '22'
    fehler:
      - wert: "-3"
        meldung: Das ist die Geschwindigkeit relativ zum Zug. Der Zug nimmt den Ball mit, relativ zum Gleis fährt er weiterhin nach vorn.
      - wert: "28"
        meldung: Der Ball rollt **nach hinten**, also gegen die Fahrtrichtung. Seine Geschwindigkeit relativ zum Zug ist negativ.
hinweise:
  - '$v = v'' + u$ mit $v'' = -3{,}0\,\text{m/s}$ und $u = +25\,\text{m/s}$.'
loesung: |
  **Ansatz:** Galilei-Addition mit Vorzeichen: $v = v' + u$.
  ---
  **Rechnung:** $v = -3{,}0\,\text{m/s} + 25\,\text{m/s} = 22\,\text{m/s}$. Vom Gleis aus gesehen fährt der Ball also immer noch nach vorn, nur etwas langsamer als der Zug.
```


```aufgabe
id: p2-fluss
titel: Boot überquert einen Fluss
niveau: 2
lernziel: 8
kompetenz: anwenden
angabe: |
  Ein Boot fährt mit $4{,}0\,\text{m/s}$ relativ zum Wasser, der Bug zeigt senkrecht zum Ufer. Der Fluss ist $80\,\text{m}$ breit und fließt mit $3{,}0\,\text{m/s}$.

  a) Wie lange dauert die Überfahrt?

  b) Wie weit wird das Boot flussabwärts abgetrieben?

  c) Wie schnell ist das Boot relativ zum Ufer?
teile:
  - typ: zahl
    label: a) Zeit
    loesung: "80/4"
    einheit: "s"
    anzeige: '20'
    fehler:
      - wert: "80/5"
        meldung: Du hast die Breite durch die schräge Geschwindigkeit geteilt. Quer zum Fluss bewegt sich das Boot aber nur mit $4{,}0\,\text{m/s}$.
      - wert: "80/(4-3)"
        meldung: Die Strömung bremst das Boot nicht, sie wirkt **quer** zur Fahrtrichtung. Für die Überfahrt zählt nur die Querkomponente.
  - typ: zahl
    label: b) Abdrift
    loesung: "3*80/4"
    einheit: "m"
    anzeige: '60'
    fehler:
      - wert: "3*80/5"
        meldung: Die Abdrift ist Strömungsgeschwindigkeit mal **Überfahrtszeit**. Prüfe zuerst die Zeit in a).
  - typ: zahl
    label: c) Geschwindigkeit über Grund
    loesung: "sqrt(4^2+3^2)"
    einheit: "m/s"
    anzeige: '5'
    fehler:
      - wert: "7"
        meldung: Die beiden Geschwindigkeiten stehen senkrecht aufeinander. Du musst sie mit dem Satz des Pythagoras zusammensetzen.
hinweise:
  - Die Strömung ändert nichts an der Geschwindigkeitskomponente quer zum Fluss.
  - Abdrift $=$ Strömungsgeschwindigkeit mal Überfahrtszeit. Die Geschwindigkeit über Grund mit Pythagoras.
gefuehrt:
  - text: Welche Geschwindigkeit hat das Boot quer zum Fluss (in m/s)?
    teil: { typ: zahl, loesung: "4" }
    erklaerung: Der Bug zeigt quer, also bewegt sich das Boot quer mit seinen $4{,}0\,\text{m/s}$. Die Strömung wirkt längs.
  - text: Wie lange dauert die Überfahrt (in s)?
    teil: { typ: zahl, loesung: "80/4" }
    erklaerung: $80\,\text{m} / 4{,}0\,\text{m/s} = 20\,\text{s}$.
  - text: Wie weit treibt die Strömung das Boot in dieser Zeit ab (in m)?
    teil: { typ: zahl, loesung: "3*20" }
    erklaerung: $3{,}0\,\text{m/s}\cdot 20\,\text{s} = 60\,\text{m}$.
  - text: Wie schnell ist das Boot über Grund (in m/s)?
    teil: { typ: zahl, loesung: "sqrt(4^2+3^2)" }
    erklaerung: $\sqrt{4{,}0^2 + 3{,}0^2}\,\text{m/s} = 5{,}0\,\text{m/s}$.
loesung: |
  **Ansatz:** Superposition: quer zum Fluss nur die Bootsgeschwindigkeit, längs nur die Strömung.
  ---
  **a)** $t = \dfrac{80\,\text{m}}{4{,}0\,\text{m/s}} = 20\,\text{s}$.
  ---
  **b)** Abdrift $3{,}0\,\text{m/s}\cdot 20\,\text{s} = 60\,\text{m}$.
  ---
  **c)** Vektorsumme senkrechter Geschwindigkeiten: $\sqrt{(4{,}0\,\text{m/s})^2 + (3{,}0\,\text{m/s})^2} = 5{,}0\,\text{m/s}$. Probe: Schräger Weg $\sqrt{80^2 + 60^2}\,\text{m} = 100\,\text{m}$, geteilt durch $5{,}0\,\text{m/s}$ ergibt wieder $20\,\text{s}$. ✓
```

```aufgabe
id: p2-10-wind
titel: Ein Segelflieger im Seitenwind
niveau: 2
lernziel: 8
kompetenz: anwenden
angabe: |
  Ein Segelflugzeug fliegt mit $150\,\text{km/h}$ relativ zur Luft, der Bug zeigt genau nach Osten. Der Wind weht mit $40\,\text{km/h}$ von Norden nach Süden.

  a) Wie schnell ist das Flugzeug über Grund? Ganze km/h.

  b) Um welchen Winkel wird es von der Ostrichtung nach Süden abgelenkt? Eine Nachkommastelle.
teile:
  - typ: zahl
    label: a) Geschwindigkeit über Grund
    loesung: "sqrt(150^2+40^2)"
    einheit: "km/h"
    anzeige: '155'
    fehler:
      - wert: "150+40"
        meldung: Wind und Flugrichtung stehen senkrecht aufeinander. Die Beträge darf man nicht einfach addieren, man braucht den Satz des Pythagoras.
      - wert: "150-40"
        meldung: Der Wind bläst nicht von vorn, sondern von der Seite. Er bremst nicht, er lenkt ab.
  - typ: zahl
    label: b) Ablenkwinkel
    loesung: "inGrad(atan(40/150))"
    einheit: "°"
    anzeige: '14{,}9'
    fehler:
      - wert: "inGrad(atan(150/40))"
        meldung: Du hast den Winkel zur **Südrichtung** berechnet. Gefragt ist die Abweichung von Osten, also $\tan\beta = 40/150$.
hinweise:
  - Zeichne den Pfeil des Flugzeugs nach Osten und hänge den Windpfeil nach Süden an. Die Summe ist die Hypotenuse.
  - 'Für den Winkel: $\tan\beta = \dfrac{\text{Wind}}{\text{Eigengeschwindigkeit}}$.'
loesung: |
  **Ansatz:** $\vec v = \vec v\,' + \vec u$: $150\,\text{km/h}$ nach Osten plus $40\,\text{km/h}$ nach Süden, im rechten Winkel.
  ---
  **a)** $v = \sqrt{(150\,\text{km/h})^2 + (40\,\text{km/h})^2} = 155\,\text{km/h}$.
  ---
  **b)** $\tan\beta = \dfrac{40}{150} = 0{,}267$, also $\beta = 14{,}9^\circ$ südlich von Ost. Plausibel: Der Wind ist schwach gegen die Eigengeschwindigkeit, die Ablenkung entsprechend klein.
```

```aufgabe
id: p2-inertialsystem
titel: Im fensterlosen Waggon
niveau: 2
lernziel: 8
kompetenz: begruenden
angabe: |
  Du sitzt in einem fensterlosen Eisenbahnwaggon. Kannst du mit mechanischen Experimenten feststellen, ob der Zug steht, gleichförmig geradeaus fährt oder beschleunigt? Begründe.
teile:
  - typ: text
    muster: |
      Ruhe und gleichförmig geradlinige Bewegung lassen sich nicht unterscheiden. Beide Bezugssysteme sind Inertialsysteme, in
      ihnen gelten dieselben Gesetze (Galileisches Relativitätsprinzip). Ein Ball fällt senkrecht, eine Kugel bleibt liegen.
      Beschleunigung dagegen merkt man: Ein frei hängendes Pendel stellt sich schräg, eine Kugel rollt ohne erkennbare Ursache
      nach vorn oder hinten. Der Waggon ist dann kein Inertialsystem.
hinweise:
  - Denk an eine Kugel auf dem Tisch oder an ein Pendel an der Decke.
  - Was sagt das Galileische Relativitätsprinzip über Inertialsysteme?
loesung: |
  **Ansatz:** Ein stehender und ein gleichförmig fahrender Zug sind beide Inertialsysteme.
  ---
  **Ruhe oder gleichförmige Fahrt:** nicht unterscheidbar. In allen Inertialsystemen laufen mechanische Vorgänge gleich ab.
  ---
  **Beschleunigung:** erkennbar, weil Körper scheinbar ohne Kraft in Bewegung geraten, zum Beispiel hängt ein Pendel schräg. Ein beschleunigter Waggon ist kein Inertialsystem.
```

```aufgabe
id: p2-fluss-gegensteuern
titel: Genau gegenüber ankommen
niveau: 3
lernziel: 8
kompetenz: modellieren
angabe: |
  Dasselbe Boot ($4{,}0\,\text{m/s}$ relativ zum Wasser, Fluss $3{,}0\,\text{m/s}$, $80\,\text{m}$ breit) will genau gegenüber anlegen. Unter welchem Winkel gegen die Senkrechte zum Ufer muss es flussaufwärts steuern (eine Nachkommastelle), und wie lange dauert die Überfahrt nun?
teile:
  - typ: zahl
    label: Winkel in Grad
    loesung: "inGrad(asin(3/4))"
    einheit: "°"
    anzeige: '48{,}6'
    fehler:
      - wert: "inGrad(atan(3/4))"
        meldung: Der Tangens passt nicht. Die $4{,}0\,\text{m/s}$ sind hier die **Hypotenuse** (der ganze Bootspfeil), und die $3{,}0\,\text{m/s}$ die Gegenkathete. Also Sinus.
  - typ: zahl
    label: Zeit
    loesung: "80/sqrt(4^2-3^2)"
    einheit: "s"
    anzeige: '30{,}2'
    fehler:
      - wert: "80/4"
        meldung: Mit $4{,}0\,\text{m/s}$ quer würde die Strömung das Boot abtreiben. Wenn es vorhält, bleibt quer nur ein Teil der Geschwindigkeit übrig.
hinweise:
  - 'Die flussaufwärts gerichtete Komponente der Bootsgeschwindigkeit muss die Strömung genau aufheben: $4{,}0\sin\varphi = 3{,}0$.'
  - 'Quer zum Fluss bleibt $4{,}0\cos\varphi = \sqrt{4{,}0^2 - 3{,}0^2}$ in m/s.'
loesung: |
  **Bedingung:** $v'\sin\varphi = u$, also $\sin\varphi = \dfrac{3{,}0\,\text{m/s}}{4{,}0\,\text{m/s}} = 0{,}75$ und $\varphi = 48{,}6^\circ$.
  ---
  **Quergeschwindigkeit:** $v_\perp = v'\cos\varphi = \sqrt{(4{,}0\,\text{m/s})^2 - (3{,}0\,\text{m/s})^2} = 2{,}65\,\text{m/s}$.
  ---
  **Zeit:** $t = \dfrac{80\,\text{m}}{2{,}65\,\text{m/s}} = 30{,}2\,\text{s}$, also länger als beim Abtreibenlassen. Wäre die Strömung schneller als das Boot, könnte es gar nicht genau gegenüber ankommen.
```

```aufgabe
id: p2-10-regen
titel: Schräge Regenspuren am Autofenster
niveau: 3
lernziel: 8
kompetenz: modellieren
angabe: |
  Regentropfen fallen bei Windstille senkrecht mit $6{,}0\,\text{m/s}$. Ein Auto fährt mit $20\,\text{m/s}$ geradeaus.

  a) Wie schnell bewegen sich die Tropfen relativ zum Auto? Eine Nachkommastelle.

  b) Unter welchem Winkel gegen die Senkrechte verlaufen die Regenspuren auf der Seitenscheibe? Eine Nachkommastelle.
teile:
  - typ: zahl
    label: a) Geschwindigkeit relativ zum Auto
    loesung: "sqrt(20^2+6^2)"
    einheit: "m/s"
    anzeige: '20{,}9'
    fehler:
      - wert: "20+6"
        meldung: Die beiden Geschwindigkeiten stehen senkrecht aufeinander. Pythagoras statt Summe.
  - typ: zahl
    label: b) Winkel gegen die Senkrechte
    loesung: "inGrad(atan(20/6))"
    einheit: "°"
    anzeige: '73{,}3'
    fehler:
      - wert: "inGrad(atan(6/20))"
        meldung: Das ist der Winkel gegen die **Waagrechte**. Gegen die Senkrechte gilt $\tan\beta = 20/6$.
hinweise:
  - 'Im Bezugssystem des Autos steht das Auto still, und die Straße samt Luft bewegt sich mit $20\,\text{m/s}$ nach hinten. Welche waagrechte Geschwindigkeit haben die Tropfen dann?'
  - 'Setze $6{,}0\,\text{m/s}$ nach unten und $20\,\text{m/s}$ nach hinten zu einem Pfeil zusammen. Der Winkel gegen die Senkrechte ist $\arctan(20/6)$.'
loesung: |
  **Modell:** Wir wechseln ins Bezugssystem des Autos. Dort gilt $\vec v\,' = \vec v - \vec u$: Die Tropfen haben zusätzlich $20\,\text{m/s}$ nach **hinten**.
  ---
  **a)** $v' = \sqrt{(20\,\text{m/s})^2 + (6{,}0\,\text{m/s})^2} = 20{,}9\,\text{m/s}$.
  ---
  **b)** $\tan\beta = \dfrac{20}{6{,}0} = 3{,}33$, also $\beta = 73{,}3^\circ$ gegen die Senkrechte. Die Spuren laufen fast waagrecht nach hinten, wie man es bei schneller Fahrt beobachtet. Im Stand wären sie senkrecht.
```

## Gemischte Wiederholung

Hier sind Aufgaben aus diesem Kapitel mit Aufgaben aus dem [Kapitel Größen, Einheiten, Messen](/lernen/physik1/groessen-einheiten-messen)
und aus dem Mathematikkurs ([Differentialrechnung](/lernen/mathe3/differentialrechnung) und
[Integralrechnung](/lernen/mathe3/integralrechnung)) gemischt. Das ist Absicht: In der Prüfung steht nicht dabei, zu welchem
Abschnitt eine Aufgabe gehört. Bei den Aufgaben „Welches Verfahren passt?“ musst du nichts rechnen, sondern nur den
richtigen Weg erkennen. Das ist oft der schwierigste Teil.

```aufgabe
id: p2-mix-einheiten
titel: Beschleunigung aus km/h
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Ein Elektroroller beschleunigt in $4{,}0\,\text{s}$ gleichmäßig aus dem Stand auf $36\,\text{km/h}$. Wie groß ist seine Beschleunigung in $\text{m/s}^2$?
teile:
  - typ: zahl
    loesung: "36/3.6/4"
    einheit: "m/s²"
    anzeige: '2{,}5'
    fehler:
      - wert: "36/4"
        meldung: Du hast km/h durch Sekunden geteilt. Die Einheit wäre $\text{km}/(\text{h}\cdot\text{s})$. Rechne zuerst in m/s um.
      - wert: "36*3.6/4"
        meldung: Beim Umrechnen von km/h in m/s teilt man durch $3{,}6$.
hinweise:
  - 'Zuerst $36\,\text{km/h}$ in m/s umrechnen, dann $a = \Delta v/\Delta t$.'
loesung: |
  **Umrechnen** (siehe [1.3 Vorsilben, Zehnerpotenzen und Umrechnen](/lernen/physik1/groessen-einheiten-messen/vorsilben-zehnerpotenzen-und-umrechnen)): $36\,\text{km/h} = 36/3{,}6\,\text{m/s} = 10\,\text{m/s}$.
  ---
  **Beschleunigung:** $a = \dfrac{10\,\text{m/s}}{4{,}0\,\text{s}} = 2{,}5\,\text{m/s}^2$. Wiederholen: [2.3 Beschleunigung](/lernen/physik1/kinematik/beschleunigung).
```

```aufgabe
id: p2-mix-unsicherheit
titel: Sprintzeit mit Messunsicherheit
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Eine Läuferin läuft $100\,\text{m}$ (Länge genau bekannt). Die Handstoppung ergibt $12{,}4\,\text{s}$ mit einer Unsicherheit von $\pm 0{,}2\,\text{s}$.

  a) Berechne ihre mittlere Geschwindigkeit in m/s (zwei Nachkommastellen).

  b) Wie groß ist die Unsicherheit der Geschwindigkeit in m/s (zwei Nachkommastellen)?
teile:
  - typ: zahl
    label: a) mittlere Geschwindigkeit
    loesung: "100/12.4"
    einheit: "m/s"
    anzeige: '8{,}06'
    fehler:
      - wert: "12.4/100"
        meldung: Geschwindigkeit ist Strecke durch Zeit, nicht umgekehrt.
  - typ: zahl
    label: b) Unsicherheit
    loesung: "100/12.4*0.2/12.4"
    einheit: "m/s"
    anzeige: '0{,}13'
    toleranz: 0.005
    fehler:
      - wert: "0.2"
        meldung: Das ist die Unsicherheit der **Zeit** in Sekunden. Für die Geschwindigkeit überträgst du die **relative** Unsicherheit.
      - wert: "100/0.2"
        meldung: Strecke durch Zeitunsicherheit ist keine sinnvolle Größe. Berechne zuerst die relative Unsicherheit $0{,}2/12{,}4$.
hinweise:
  - 'Für b): Bei einem Quotienten addieren sich die relativen Unsicherheiten. Die Strecke ist genau, also bleibt nur $\Delta t/t$.'
  - 'Relative Unsicherheit $\Delta t/t = 0{,}2/12{,}4$, dann mal $v$.'
loesung: |
  **a)** $\bar v = \dfrac{100\,\text{m}}{12{,}4\,\text{s}} = 8{,}06\,\text{m/s}$.
  ---
  **b) Relative Unsicherheit** (Größtfehlerregel aus [1.9 Fehlerfortpflanzung](/lernen/physik1/groessen-einheiten-messen/fehlerfortpflanzung)): $\dfrac{\Delta t}{t} = \dfrac{0{,}2\,\text{s}}{12{,}4\,\text{s}} = 1{,}6\,\%$. Diese überträgt sich auf den Quotienten.
  ---
  **Ergebnis:** $\Delta v = 0{,}016\cdot 8{,}06\,\text{m/s} = 0{,}13\,\text{m/s}$, also $v = (8{,}06 \pm 0{,}13)\,\text{m/s}$. Die Handstoppung begrenzt die Genauigkeit.
```

```aufgabe
id: p2-mix-regentropfen
titel: Wie schnell wäre ein Regentropfen ohne Luft?
niveau: 2
lernziel: 6
kompetenz: modellieren
angabe: |
  Regentropfen entstehen in Wolken etwa $1\,\text{km}$ über dem Boden.

  a) Mit welcher Geschwindigkeit kämen sie unten an, wenn sie frei fielen (ohne Luftwiderstand)? Ganze m/s.

  b) Tatsächlich kommen große Tropfen mit rund $9\,\text{m/s}$ an. Was folgt daraus für das Modell „freier Fall“?
teile:
  - typ: zahl
    label: a) Geschwindigkeit
    loesung: "sqrt(2*9.81*1000)"
    einheit: "m/s"
    anzeige: '140'
    toleranz: 2
    fehler:
      - wert: "sqrt(2*9.81*1)"
        meldung: Du hast $1$ statt $1000$ eingesetzt. Rechne Kilometer in Meter um.
  - typ: text
    label: b) Folgerung
    muster: |
      Das Modell „freier Fall“ versagt hier völlig: $140\,\text{m/s}$ sind über $500\,\text{km/h}$. Der Luftwiderstand ist für
      kleine, leichte Tropfen über so lange Strecken entscheidend. Er bremst sie auf eine konstante Endgeschwindigkeit ab.
      Das Modell taugt nur für kompakte Körper und kurze Fallstrecken.
hinweise:
  - '$v = \sqrt{2gh}$ mit $h = 1000\,\text{m}$.'
  - Vergleiche dein Ergebnis mit $9\,\text{m/s}$. Welche Annahme des Modells stimmt nicht?
loesung: |
  **a)** $v = \sqrt{2\cdot 9{,}81\,\text{m/s}^2\cdot 1000\,\text{m}} = \sqrt{19\,620\,\text{m}^2/\text{s}^2} = 140\,\text{m/s}$.
  ---
  **b) Plausibilitätsprüfung** (siehe [1.11 Abschätzen und Größenordnungen](/lernen/physik1/groessen-einheiten-messen/abschaetzen-und-groessenordnungen)): Das Ergebnis ist etwa fünfzehnmal zu groß. Der Fehler liegt nicht in der Rechnung, sondern im Modell.
  ---
  **Folgerung:** Der Luftwiderstand ist hier nicht vernachlässigbar. Wie er wirkt, behandelt der Abschnitt [3.5 Reibung und Luftwiderstand](/lernen/physik1/dynamik/reibung-und-luftwiderstand). Zum Glück, denn Regen mit $500\,\text{km/h}$ wäre gefährlich.
```

```aufgabe
id: p2-mix-ableitung
titel: Wann kehrt der Körper um?
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Ein Körper bewegt sich nach $x(t) = 5 + 12\,t - 1{,}5\,t^2$ ($x$ in m, $t$ in s).

  a) Zu welchem Zeitpunkt kehrt er um?

  b) An welchem Ort ist er dann?

  c) Wie groß ist seine Beschleunigung?
teile:
  - typ: zahl
    label: a) Umkehrzeitpunkt
    loesung: "12/3"
    einheit: "s"
    anzeige: '4'
    fehler:
      - wert: "12/1.5"
        meldung: Du hast $x(t) = 5$ gesetzt, also den Zeitpunkt gesucht, an dem er wieder am Start ist. Umkehren heißt aber $v = 0$, also $x'(t) = 0$.
  - typ: zahl
    label: b) Ort
    loesung: "5 + 12*4 - 1.5*16"
    einheit: "m"
    anzeige: '29'
    fehler:
      - wert: "12*4 - 1.5*16"
        meldung: Das ist die Verschiebung seit dem Start. Der Körper startet aber bei $x = 5\,\text{m}$.
  - typ: zahl
    label: c) Beschleunigung
    loesung: "-3"
    einheit: "m/s²"
    fehler:
      - wert: "-1.5"
        meldung: In $x = x_0 + v_0 t + \tfrac12 a t^2$ steht $\tfrac12 a$ vor $t^2$. Aus $\tfrac12 a = -1{,}5$ folgt $a = -3$. Du kannst auch zweimal ableiten.
hinweise:
  - 'Umkehrpunkt heißt $v = 0$. Leite ab: $v(t) = x''(t)$.'
  - 'Mathematisch ist das ein Hochpunkt der Funktion $x(t)$, siehe [9.11 Monotonie und Extremstellen](/lernen/mathe3/differentialrechnung/monotonie-und-extremstellen).'
loesung: |
  **Ansatz:** Umkehren heißt $v = 0$. Das ist ein Extrempunkt von $x(t)$, also $x'(t) = 0$.
  ---
  **a)** $v(t) = x'(t) = 12 - 3t$ in m/s. $12 - 3t = 0$ ergibt $t = 4\,\text{s}$.
  ---
  **b)** $x(4\,\text{s}) = 5 + 48 - 24 = 29\,\text{m}$. **c)** $a = v'(t) = -3\,\text{m/s}^2$, konstant. Wiederholen: [9.11 Monotonie und Extremstellen](/lernen/mathe3/differentialrechnung/monotonie-und-extremstellen).
```

```aufgabe
id: p2-mix-integral
titel: Verschiebung als Integral
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Die Geschwindigkeit eines Körpers ist $v(t) = 3t^2 - 2t$ ($v$ in m/s, $t$ in s). Wie groß ist seine Verschiebung zwischen $t = 0$ und $t = 3\,\text{s}$?
teile:
  - typ: zahl
    loesung: "3^3 - 3^2"
    einheit: "m"
    anzeige: '18'
    fehler:
      - wert: "3*3^2 - 2*3"
        meldung: Das ist die Geschwindigkeit $v(3)$, kein Weg. Die Verschiebung ist die **Fläche** unter dem v-t-Graphen, also das Integral.
      - wert: "6*3 - 2"
        meldung: Du hast abgeleitet statt integriert. Vom v-t- zum s-t-Diagramm geht es mit dem Integral.
hinweise:
  - 'Verschiebung $= \int_0^3 v(t)\,\dd t$. Eine Stammfunktion von $3t^2 - 2t$ ist $t^3 - t^2$.'
  - Setze die obere Grenze ein und ziehe den Wert an der unteren Grenze ab.
loesung: |
  **Ansatz:** Die Verschiebung ist die Fläche unter dem v-t-Graphen: $\Delta x = \int_0^3 (3t^2 - 2t)\,\dd t$.
  ---
  **Stammfunktion:** $t^3 - t^2$. Probe durch Ableiten: $3t^2 - 2t$. ✓
  ---
  **Grenzen einsetzen:** $(27 - 9) - (0 - 0) = 18$, also $\Delta x = 18\,\text{m}$. Wiederholen: [10.3 Der Hauptsatz](/lernen/mathe3/integralrechnung/der-hauptsatz-der-differential-und-integralrechnung).
```

```aufgabe
id: p2-mix-drohne
titel: Eine Drohne fliegt um die Ecke
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: |
  Eine Drohne fliegt in $10\,\text{s}$ zuerst $30\,\text{m}$ nach Osten und dann $40\,\text{m}$ nach Norden.

  a) Wie groß ist der Betrag ihrer mittleren Geschwindigkeit (Verschiebung durch Zeit)?

  b) Wie groß ist ihr mittleres Tempo (Weg durch Zeit)?
teile:
  - typ: zahl
    label: a) Betrag der mittleren Geschwindigkeit
    loesung: "sqrt(30^2+40^2)/10"
    einheit: "m/s"
    anzeige: '5'
    fehler:
      - wert: "(30+40)/10"
        meldung: Das ist das mittlere Tempo, also Weg durch Zeit. Die mittlere Geschwindigkeit verwendet die **Verschiebung**, die Luftlinie vom Start zum Ziel.
  - typ: zahl
    label: b) mittleres Tempo
    loesung: "(30+40)/10"
    einheit: "m/s"
    anzeige: '7'
    fehler:
      - wert: "sqrt(30^2+40^2)/10"
        meldung: Das ist der Betrag der mittleren Geschwindigkeit. Beim Tempo zählt der ganze geflogene Weg, $30\,\text{m} + 40\,\text{m}$.
hinweise:
  - Die Verschiebung ist ein Vektor. Ihre Länge findest du mit dem Satz des Pythagoras.
  - Der Weg ist die Summe der beiden Teilstrecken.
loesung: |
  **Verschiebung** (Vektoren aus [1.12 Skalare und Vektoren](/lernen/physik1/groessen-einheiten-messen/skalare-und-vektoren)): $|\Delta\vec r| = \sqrt{(30\,\text{m})^2 + (40\,\text{m})^2} = 50\,\text{m}$.
  ---
  **a)** $|\bar{\vec v}| = \dfrac{50\,\text{m}}{10\,\text{s}} = 5{,}0\,\text{m/s}$.
  ---
  **b)** Weg $70\,\text{m}$, also mittleres Tempo $\dfrac{70\,\text{m}}{10\,\text{s}} = 7{,}0\,\text{m/s}$. Wie in einer Dimension gilt: Das Tempo ist mindestens so groß wie der Betrag der mittleren Geschwindigkeit.
```

```aufgabe
id: p2-mix-verfahren-bremsen
titel: "Welches Verfahren passt? Bremsen auf bekannter Strecke"
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  Ein Lkw bremst gleichmäßig von $25\,\text{m/s}$ auf $0$ und braucht dafür $50\,\text{m}$. Gesucht ist die Bremsverzögerung. Welche Gleichung führt direkt zum Ziel? Rechnen musst du nicht.
teile:
  - typ: auswahl
    optionen:
      - '$v = v_0 + a t$'
      - '$v^2 = v_0^2 + 2a\Delta x$'
      - '$\Delta x = \tfrac12 (v_0 + v)\,t$'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: In dieser Gleichung steht die Zeit, und die kennst du nicht. Du bräuchtest einen Umweg.
      - wert: 2
        meldung: Diese Gleichung enthält gar kein $a$. Mit ihr könntest du die Bremszeit finden, aber nicht die Verzögerung.
hinweise:
  - Welche der fünf Größen ist weder gegeben noch gesucht?
loesung: |
  **Gegeben:** $v_0$, $v$, $\Delta x$. **Gesucht:** $a$. Weder gegeben noch gesucht ist die Zeit $t$.
  ---
  **Auswahl:** die zeitfreie Gleichung $v^2 = v_0^2 + 2a\Delta x$. Damit $a = -\dfrac{v_0^2}{2\Delta x} = -6{,}25\,\text{m/s}^2$.
```

```aufgabe
id: p2-mix-verfahren-tisch
titel: "Welches Verfahren passt? Eine Münze rutscht vom Tisch"
niveau: 1
lernziel: 7
kompetenz: verstehen
angabe: |
  Eine Münze rutscht mit bekannter Geschwindigkeit waagrecht über die Tischkante. Die Tischhöhe ist bekannt. Gesucht ist, wie weit von der Kante sie am Boden landet. Womit beginnst du?
teile:
  - typ: auswahl
    optionen:
      - "mit der Weitenformel $W = v_0^2\\sin(2\\alpha)/g$"
      - "mit der Fallzeit aus der Höhe, $t = \\sqrt{2h/g}$, danach $w = v_0 t$"
      - "mit dem Bremsweg $v_0^2/(2a)$"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Die Weitenformel gilt nur für Abwurf und Landung auf gleicher Höhe. Hier fällt die Münze vom Tisch auf den Boden, und der Abwurfwinkel ist null.
      - wert: 2
        meldung: Die Münze wird in der Luft waagrecht nicht gebremst. Ohne Luftwiderstand bleibt $v_x$ konstant.
hinweise:
  - Superpositionsprinzip. Welche Richtung legt die Flugzeit fest?
loesung: |
  **Superposition:** Senkrecht fällt die Münze frei aus der Ruhe. Das legt die Flugzeit fest, $t = \sqrt{2h/g}$.
  ---
  **Danach waagrecht:** gleichförmig mit $v_0$, also $w = v_0\,t$. Antwort 2.
```

```aufgabe
id: p2-mix-verfahren-treffen
titel: "Welches Verfahren passt? Zwei Läufer"
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Läufer A startet um 10:00 Uhr. Läuferin B startet um 10:05 Uhr am selben Ort und läuft schneller. Gesucht ist, wann B den Läufer A einholt. Welcher erste Schritt ist richtig?
teile:
  - typ: auswahl
    optionen:
      - "Die beiden Geschwindigkeiten addieren und den Abstand durch die Summe teilen."
      - "Beide Ortsfunktionen in einem gemeinsamen Koordinatensystem aufstellen, für B mit der Fahrzeit $(t - 5\\,\\text{min})$, und gleichsetzen."
      - "Die Zeit berechnen, zu der beide gleich schnell sind."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Geschwindigkeiten addiert man bei **Gegenverkehr**. Hier laufen beide in dieselbe Richtung, die Relativgeschwindigkeit ist die Differenz.
      - wert: 2
        meldung: Beide laufen mit konstantem Tempo, sie sind nie gleich schnell. Einholen heißt gleicher **Ort** zur gleichen Zeit.
hinweise:
  - Was bedeutet „einholen“ in Formeln?
loesung: |
  **Einholen** heißt $x_A(t) = x_B(t)$, gleicher Ort zur gleichen Zeit.
  ---
  **Verfahren:** gemeinsames Koordinatensystem, Ortsfunktionen mit Startverzögerung $x_B = v_B\,(t - 5\,\text{min})$, gleichsetzen. Antwort 2.
```

## Prüfungsaufgaben

Rechne diese Aufgaben unter Prüfungsbedingungen: Skizze, Koordinatensystem, Angaben in SI, Ansatz, Ergebnis mit Einheit,
Plausibilitätsprüfung. Für eine Aufgabe hast du etwa $15$ bis $20$ Minuten. Die Aufgaben sind eigene Aufgaben im Stil der
Prüfung. Die Musterprüfungen selbst findest du in den Prüfungssimulationen.

```aufgabe
id: p2-pruefung-ampel
titel: Anfahren an der Ampel
niveau: 3
punkte: 10
lernziel: 5
kompetenz: modellieren
angabe: |
  Eine Ampel schaltet auf Grün. Ein Auto fährt mit $a = 2{,}5\,\text{m/s}^2$ an. Im selben Moment überholt es ein Lkw, der mit konstant $54\,\text{km/h}$ fährt. (Zeitrichtwert: 15 Minuten)

  a) Nach welcher Zeit und welcher Strecke holt das Auto den Lkw ein?

  b) Wie schnell ist das Auto dann (in km/h)?

  c) Wie groß ist der größte Abstand zwischen Lkw und Auto vor dem Einholen?
teile:
  - typ: zahl
    label: a) Zeit
    loesung: "2*15/2.5"
    einheit: "s"
    anzeige: '12'
    fehler:
      - wert: "15/2.5"
        meldung: Nach $6\,\text{s}$ sind beide nur **gleich schnell**. Einholen heißt gleicher Ort, also Ortsfunktionen gleichsetzen.
  - typ: zahl
    label: a) Strecke
    loesung: "15*12"
    einheit: "m"
    anzeige: '180'
  - typ: zahl
    label: b) Geschwindigkeit in km/h
    loesung: "2.5*12*3.6"
    einheit: "km/h"
    anzeige: '108'
    fehler:
      - wert: "2.5*12"
        meldung: Das ist die Geschwindigkeit in m/s. Gefragt ist km/h, also mal $3{,}6$.
  - typ: zahl
    label: c) größter Abstand
    loesung: "15*6 - 0.5*2.5*6^2"
    einheit: "m"
    anzeige: '45'
    fehler:
      - wert: "15*12 - 0.5*2.5*12^2"
        meldung: Beim Einholen ist der Abstand null. Der größte Abstand liegt dazwischen, dort wo beide gleich schnell sind.
hinweise:
  - '$54\,\text{km/h} = 15\,\text{m/s}$. Lkw: $x_L = 15t$, Auto: $x_A = 1{,}25\,t^2$ ($x$ in m, $t$ in s).'
  - 'Der Abstand $d(t) = 15t - 1{,}25t^2$ ist maximal, wenn beide gleich schnell sind.'
loesung: |
  **Ansatz:** Ursprung an der Haltelinie, $t = 0$ bei Grün. $54\,\text{km/h} = 15\,\text{m/s}$. Lkw $x_L = 15\,t$, Auto $x_A = \tfrac12\cdot 2{,}5\,t^2 = 1{,}25\,t^2$.
  ---
  **a)** $15\,t = 1{,}25\,t^2$, also $t\,(1{,}25\,t - 15) = 0$ und $t = 12\,\text{s}$ (die Lösung $t = 0$ ist der Start). Strecke $x = 15\,\text{m/s}\cdot 12\,\text{s} = 180\,\text{m}$.
  ---
  **b)** $v_A = a t = 2{,}5\,\text{m/s}^2\cdot 12\,\text{s} = 30\,\text{m/s} = 108\,\text{km/h}$, doppelt so schnell wie der Lkw.
  ---
  **c)** Gleiche Geschwindigkeit bei $2{,}5\,t = 15$, also $t = 6\,\text{s}$. $d = 15\cdot 6\,\text{m} - 1{,}25\cdot 36\,\text{m} = 90\,\text{m} - 45\,\text{m} = 45\,\text{m}$. Mit Ableitung: $d'(t) = 15 - 2{,}5\,t = 0$.
```

```aufgabe
id: p2-pruefung-rakete
titel: Modellrakete
niveau: 3
punkte: 10
lernziel: 6
kompetenz: modellieren
angabe: |
  Eine Modellrakete startet senkrecht und beschleunigt $3{,}0\,\text{s}$ lang mit $a = 20\,\text{m/s}^2$. Dann ist der Treibstoff verbraucht, und sie fliegt antriebslos weiter (Luftwiderstand vernachlässigt). (Zeitrichtwert: 20 Minuten)

  a) Welche Höhe und Geschwindigkeit hat sie bei Brennschluss?

  b) Welche maximale Höhe erreicht sie? Ganze Meter.

  c) Wie lange dauert der gesamte Flug bis zum Aufschlag? Eine Nachkommastelle.
teile:
  - typ: zahl
    label: a) Höhe bei Brennschluss
    loesung: "0.5*20*3^2"
    einheit: "m"
    anzeige: '90'
    fehler:
      - wert: "20*3^2"
        meldung: Der Faktor $\tfrac12$ fehlt in $h = \tfrac12 a t^2$.
  - typ: zahl
    label: a) Geschwindigkeit bei Brennschluss
    loesung: "20*3"
    einheit: "m/s"
    anzeige: '60'
  - typ: zahl
    label: b) maximale Höhe
    loesung: "90 + 60^2/(2*9.81)"
    einheit: "m"
    anzeige: '273'
    fehler:
      - wert: "90"
        meldung: Bei Brennschluss steigt die Rakete mit $60\,\text{m/s}$ weiter. Sie ist erst oben, wenn $v = 0$ ist.
      - wert: "60^2/(2*9.81)"
        meldung: Das ist nur der Höhengewinn **nach** Brennschluss. Die $90\,\text{m}$ der Antriebsphase kommen dazu.
  - typ: zahl
    label: c) Gesamtflugzeit
    loesung: "3 + 60/9.81 + sqrt(2*(90 + 60^2/(2*9.81))/9.81)"
    einheit: "s"
    anzeige: '16{,}6'
hinweise:
  - 'Teile den Flug in drei Phasen: Antrieb, antriebsloser Aufstieg, freier Fall vom Gipfel.'
  - 'Nach Brennschluss ist die Beschleunigung $-g$, auch wenn die Rakete noch steigt.'
loesung: |
  **Modell:** drei Phasen, jede gleichmäßig beschleunigt. Die Endwerte einer Phase sind die Anfangswerte der nächsten.
  ---
  **a) Antriebsphase:** $h_1 = \tfrac12\cdot 20\,\text{m/s}^2\cdot (3{,}0\,\text{s})^2 = 90\,\text{m}$, $v_1 = 20\,\text{m/s}^2\cdot 3{,}0\,\text{s} = 60\,\text{m/s}$.
  ---
  **b) Antriebslos weiter:** zusätzliche Höhe $\dfrac{v_1^2}{2g} = \dfrac{3600\,\text{m}^2/\text{s}^2}{19{,}62\,\text{m/s}^2} = 183\,\text{m}$, also $h_{\max} = 273\,\text{m}$. Steigzeit dafür $\dfrac{60\,\text{m/s}}{9{,}81\,\text{m/s}^2} = 6{,}12\,\text{s}$.
  ---
  **c) Freier Fall aus $273\,\text{m}$:** $t = \sqrt{\dfrac{2\cdot 273\,\text{m}}{9{,}81\,\text{m/s}^2}} = 7{,}46\,\text{s}$. Gesamt: $3{,}0\,\text{s} + 6{,}12\,\text{s} + 7{,}46\,\text{s} = 16{,}6\,\text{s}$.
```

```aufgabe
id: p2-pruefung-wasserstrahl
titel: Wasserstrahl aus dem Schlauch
niveau: 3
punkte: 8
lernziel: 7
kompetenz: anwenden
angabe: |
  Ein Gärtner hält den Schlauch in $1{,}0\,\text{m}$ Höhe waagrecht. Das Wasser trifft den Boden $3{,}0\,\text{m}$ vor ihm. (Zeitrichtwert: 12 Minuten)

  a) Mit welcher Geschwindigkeit tritt das Wasser aus? Zwei Nachkommastellen.

  b) Unter welchem Winkel (gegen die Horizontale) trifft der Strahl auf den Boden? Eine Nachkommastelle.

  c) Wie weit reicht der Strahl, wenn er den Schlauch in $2{,}0\,\text{m}$ Höhe hält?
teile:
  - typ: zahl
    label: a) Austrittsgeschwindigkeit
    loesung: "3/sqrt(2*1/9.81)"
    einheit: "m/s"
    anzeige: '6{,}64'
    fehler:
      - wert: "sqrt(2*9.81*1)"
        meldung: Das ist die senkrechte Geschwindigkeit beim Aufprall. Die Austrittsgeschwindigkeit ist waagrecht, $v_0 = w/t$.
  - typ: zahl
    label: b) Auftreffwinkel in Grad
    loesung: "inGrad(atan(9.81*sqrt(2/9.81)/(3/sqrt(2/9.81))))"
    einheit: "°"
    anzeige: '33{,}7'
  - typ: zahl
    label: c) neue Weite
    loesung: "3*sqrt(2)"
    einheit: "m"
    anzeige: '4{,}24'
    fehler:
      - wert: "6"
        meldung: Die Weite ist nicht proportional zur Höhe. Die Fallzeit wächst mit $\sqrt h$, und die Weite ist $v_0$ mal Fallzeit.
hinweise:
  - 'Fallzeit aus der Höhe: $t = \sqrt{2h/g}$.'
  - 'Für b): $\tan\beta = v_y/v_x$ mit $v_y = g t$.'
  - 'Für c): Die Weite ist proportional zu $\sqrt h$.'
loesung: |
  **a)** $t = \sqrt{\dfrac{2\cdot 1{,}0\,\text{m}}{9{,}81\,\text{m/s}^2}} = 0{,}452\,\text{s}$; $v_0 = \dfrac{3{,}0\,\text{m}}{0{,}452\,\text{s}} = 6{,}64\,\text{m/s}$.
  ---
  **b)** $v_y = 9{,}81\,\text{m/s}^2\cdot 0{,}452\,\text{s} = 4{,}43\,\text{m/s}$; $\tan\beta = \dfrac{4{,}43}{6{,}64} = 0{,}667$, also $\beta = 33{,}7^\circ$. Kurz: $\tan\beta = 2h/w = 2/3$.
  ---
  **c) Proportionalitätsschluss:** $w = v_0\sqrt{2h/g}$, also $w \propto \sqrt h$. Doppelte Höhe ergibt die $\sqrt2$-fache Weite: $3{,}0\,\text{m}\cdot\sqrt2 = 4{,}24\,\text{m}$.
```

```aufgabe
id: p2-pruefung-diagramm
titel: Eine Liftfahrt aus dem Diagramm
niveau: 3
punkte: 6
lernziel: 4
kompetenz: verstehen
angabe: |
  Das v-t-Diagramm zeigt die Fahrt eines Liftes (Achse nach oben). (Zeitrichtwert: 10 Minuten)

  a) Beschreibe die Bewegung in den drei Phasen in Worten.

  b) Wie hoch fährt der Lift insgesamt?

  c) Wie groß ist die Beschleunigung in der letzten Phase?
plot:
  x: [0, 12]
  y: [0, 3]
  achsen: { x: "t in s", y: "v in m/s" }
  graphen:
    - { f: "min(1.25*x, 2.5, 2.5 - 1.25*(x - 8))", von: 0, bis: 10, farbe: 0 }
teile:
  - typ: text
    label: a)
    muster: |
      0 bis 2 s: gleichmäßig beschleunigt nach oben (Anfahren), die Geschwindigkeit steigt von 0 auf 2,5 m/s.
      2 bis 8 s: gleichförmige Fahrt mit 2,5 m/s. 8 bis 10 s: gleichmäßig verzögert (Bremsen) bis zum Stillstand.
  - typ: zahl
    label: b) Höhe
    loesung: "0.5*2*2.5 + 6*2.5 + 0.5*2*2.5"
    einheit: "m"
    anzeige: '20'
    fehler:
      - wert: "2.5"
        meldung: Das ist die größte **Geschwindigkeit**. Die Höhe ist die **Fläche** unter dem Graphen.
  - typ: zahl
    label: c) Beschleunigung
    loesung: "-2.5/2"
    einheit: "m/s²"
    anzeige: '-1{,}25'
    fehler:
      - wert: "1.25"
        meldung: Der Lift fährt nach oben und wird langsamer. Die Beschleunigung zeigt nach unten, sie ist negativ.
hinweise:
  - Die Höhe ist die Fläche unter dem Graphen (Trapez).
  - Die Beschleunigung ist die Steigung des letzten Abschnitts.
loesung: |
  **a)** Anfahren (0 bis 2 s), gleichförmige Fahrt (2 bis 8 s), Bremsen (8 bis 10 s). Die Geschwindigkeit ist immer positiv, der Lift fährt durchgehend nach oben.
  ---
  **b)** Trapezfläche: $\tfrac12\cdot 2\,\text{s}\cdot 2{,}5\,\text{m/s} + 6\,\text{s}\cdot 2{,}5\,\text{m/s} + \tfrac12\cdot 2\,\text{s}\cdot 2{,}5\,\text{m/s} = 2{,}5\,\text{m} + 15\,\text{m} + 2{,}5\,\text{m} = 20\,\text{m}$.
  ---
  **c)** $a = \dfrac{\Delta v}{\Delta t} = \dfrac{-2{,}5\,\text{m/s}}{2\,\text{s}} = -1{,}25\,\text{m/s}^2$: Der Lift bremst, obwohl er noch nach oben fährt.
```

```aufgabe
id: p2-pruefung-zwei-autos
titel: Einholen aus zwei v-t-Diagrammen
niveau: 3
punkte: 10
lernziel: 4
kompetenz: modellieren
angabe: |
  Zwei Autos A und B starten bei $t = 0$ am selben Ort in dieselbe Richtung. Das Diagramm zeigt ihre Geschwindigkeiten: A (blau) fährt konstant $15\,\text{m/s}$. B (orange) beschleunigt aus dem Stand gleichmäßig in $10\,\text{s}$ auf $20\,\text{m/s}$ und fährt dann konstant weiter. (Zeitrichtwert: 20 Minuten)

  a) Zu welchem Zeitpunkt sind beide gleich schnell?

  b) Wie groß ist der Vorsprung von A in diesem Moment?

  c) Wann holt B das Auto A ein, und wie weit sind beide dann vom Start entfernt?
plot:
  x: [0, 25]
  y: [0, 24]
  achsen: { x: "t in s", y: "v in m/s" }
  graphen:
    - { f: "15", farbe: 0, von: 0, bis: 25 }
    - { f: "min(2*x, 20)", farbe: 1, von: 0, bis: 25 }
teile:
  - typ: zahl
    label: a) Zeitpunkt
    loesung: "15/2"
    einheit: "s"
    anzeige: '7{,}5'
    fehler:
      - wert: "10"
        meldung: Nach $10\,\text{s}$ hat B seine Höchstgeschwindigkeit erreicht. Gleich schnell wie A ist B aber schon früher, dort wo sich die beiden Graphen schneiden.
  - typ: zahl
    label: b) Vorsprung von A
    loesung: "15*7.5 - 0.5*7.5*15"
    einheit: "m"
    anzeige: '56{,}25'
    fehler:
      - wert: "15*7.5"
        meldung: Das ist nur der Weg von A. Der Vorsprung ist die **Differenz** der Wege, also die Fläche zwischen den beiden Graphen.
  - typ: zahl
    label: c) Zeitpunkt des Einholens
    loesung: "20"
    einheit: "s"
    fehler:
      - wert: "7.5"
        meldung: Der Schnittpunkt im **v-t**-Diagramm bedeutet gleiche Geschwindigkeit, nicht gleichen Ort. Einholen heißt gleiche Fläche unter beiden Graphen.
      - wert: "15"
        meldung: Du hast vermutlich $x_B = \tfrac12\cdot 2\,t^2 = t^2$ mit $x_A = 15\,t$ gleichgesetzt, als würde B die ganze Zeit beschleunigen. B beschleunigt aber nur bis $10\,\text{s}$ und legt dabei $100\,\text{m}$ zurück. Danach fährt B konstant, also $x_B = 100 + 20\,(t - 10)$.
  - typ: zahl
    label: c) Entfernung vom Start
    loesung: "15*20"
    einheit: "m"
    anzeige: '300'
hinweise:
  - Im v-t-Diagramm ist der Weg die Fläche unter dem Graphen. Gleich schnell sind die Autos am Schnittpunkt der Graphen.
  - 'Für c): Prüfe zuerst, ob B vor $10\,\text{s}$ einholt. Danach gilt $x_B = 100 + 20\,(t - 10)$ und $x_A = 15\,t$ ($x$ in m, $t$ in s).'
  - Setze die Wege gleich, mit der passenden Formel für die Phase, in der das Einholen passiert.
loesung: |
  **a)** B hat $a = 20\,\text{m/s} / 10\,\text{s} = 2\,\text{m/s}^2$. Gleich schnell bei $2\,t = 15$, also $t = 7{,}5\,\text{s}$, am Schnittpunkt der Graphen.
  ---
  **b)** Fläche unter A: $15\,\text{m/s}\cdot 7{,}5\,\text{s} = 112{,}5\,\text{m}$. Fläche unter B (Dreieck): $\tfrac12\cdot 7{,}5\,\text{s}\cdot 15\,\text{m/s} = 56{,}25\,\text{m}$. Vorsprung $56{,}25\,\text{m}$.
  ---
  **c) Phase prüfen:** Bei $t = 10\,\text{s}$ hat A $150\,\text{m}$, B nur $\tfrac12\cdot 10\,\text{s}\cdot 20\,\text{m/s} = 100\,\text{m}$. B holt also erst später ein. Danach: $100 + 20\,(t - 10) = 15\,t$, also $5\,t = 100$ und $t = 20\,\text{s}$. Ort: $15\,\text{m/s}\cdot 20\,\text{s} = 300\,\text{m}$.
  ---
  **Probe:** B: $100\,\text{m} + 20\,\text{m/s}\cdot 10\,\text{s} = 300\,\text{m}$. ✓ Im v-t-Diagramm ist dann die Fläche unter beiden Graphen gleich groß.
```

```aufgabe
id: p2-pruefung-basketball
titel: Ein Distanzwurf beim Basketball
niveau: 3
punkte: 10
lernziel: 7
kompetenz: modellieren
angabe: |
  Ein Basketballspieler wirft den Ball aus $2{,}0\,\text{m}$ Höhe unter $50^\circ$ gegen die Waagrechte ab. Der Korb hängt $3{,}05\,\text{m}$ hoch und ist waagrecht $6{,}0\,\text{m}$ entfernt. Luftwiderstand vernachlässigen. (Zeitrichtwert: 20 Minuten)

  a) Mit welcher Geschwindigkeit muss er werfen, damit der Ball genau durch den Korb geht? Zwei Nachkommastellen.

  b) Wie lange ist der Ball bis zum Korb unterwegs? Zwei Nachkommastellen.

  c) Wie hoch über dem Boden ist der höchste Punkt der Bahn? Zwei Nachkommastellen.

  d) Fällt der Ball beim Korb schon wieder? Begründe mit dem Vorzeichen von $v_y$.
teile:
  - typ: zahl
    label: a) Abwurfgeschwindigkeit
    loesung: "sqrt(9.81*6^2/(2*cos(inRad(50))^2*(2 + 6*tan(inRad(50)) - 3.05)))"
    einheit: "m/s"
    anzeige: '8{,}37'
    fehler:
      - wert: "sqrt(6*9.81/sin(inRad(100)))"
        meldung: Die Weitenformel gilt nur bei gleicher Abwurf- und Landehöhe. Hier liegt der Korb $1{,}05\,\text{m}$ höher als die Abwurfstelle. Nimm die Bahngleichung $y(x)$.
  - typ: zahl
    label: b) Flugzeit bis zum Korb
    loesung: "6/(sqrt(9.81*6^2/(2*cos(inRad(50))^2*(2 + 6*tan(inRad(50)) - 3.05)))*cos(inRad(50)))"
    einheit: "s"
    anzeige: '1{,}12'
  - typ: zahl
    label: c) Gipfelhöhe
    loesung: "2 + (sqrt(9.81*6^2/(2*cos(inRad(50))^2*(2 + 6*tan(inRad(50)) - 3.05)))*sin(inRad(50)))^2/(2*9.81)"
    einheit: "m"
    anzeige: '4{,}10'
  - typ: text
    label: d) Begründung
    muster: |
      Ja. $v_y = v_0\sin 50^\circ - g t = 6{,}41\,\text{m/s} - 9{,}81\,\text{m/s}^2\cdot 1{,}12\,\text{s} \approx -4{,}5\,\text{m/s}$. Das
      Minus heißt (Achse nach oben), dass der Ball schon wieder fällt. Er hat den höchsten Punkt nach $0{,}65\,\text{s}$
      überschritten und fällt von oben in den Korb. Das ist für einen Treffer auch nötig.
hinweise:
  - 'Bahngleichung: $y(x) = h_0 + x\tan\alpha - \dfrac{g\,x^2}{2v_0^2\cos^2\alpha}$. Setze $x = 6{,}0\,\text{m}$, $y = 3{,}05\,\text{m}$ ein und löse nach $v_0$.'
  - 'Flugzeit aus der waagrechten Bewegung: $t = x/(v_0\cos\alpha)$.'
  - 'Gipfelhöhe $h_0 + (v_0\sin\alpha)^2/(2g)$. Für d) setze $t$ in $v_y = v_0\sin\alpha - g t$ ein.'
loesung: |
  **Modell:** Schiefer Wurf von erhöhter Stelle. Wir verwenden die Bahngleichung, die $x$ und $y$ ohne die Zeit verbindet: $y(x) = h_0 + x\tan\alpha - \dfrac{g\,x^2}{2v_0^2\cos^2\alpha}$.
  ---
  **a) Umstellen nach $v_0$:** $v_0^2 = \dfrac{g\,x^2}{2\cos^2\alpha\,(h_0 + x\tan\alpha - y)}$. Mit $h_0 + x\tan\alpha - y = 2{,}0\,\text{m} + 7{,}15\,\text{m} - 3{,}05\,\text{m} = 6{,}10\,\text{m}$ folgt $v_0^2 = \dfrac{9{,}81\,\text{m/s}^2\cdot 36\,\text{m}^2}{2\cdot 0{,}413\cdot 6{,}10\,\text{m}} = 70{,}1\,\text{m}^2/\text{s}^2$, also $v_0 = 8{,}37\,\text{m/s}$.
  ---
  **b)** $v_{0x} = 8{,}37\,\text{m/s}\cdot\cos 50^\circ = 5{,}38\,\text{m/s}$, also $t = \dfrac{6{,}0\,\text{m}}{5{,}38\,\text{m/s}} = 1{,}12\,\text{s}$.
  ---
  **c)** $v_{0y} = 8{,}37\,\text{m/s}\cdot\sin 50^\circ = 6{,}41\,\text{m/s}$, Gipfelhöhe $2{,}0\,\text{m} + \dfrac{(6{,}41\,\text{m/s})^2}{19{,}62\,\text{m/s}^2} = 4{,}10\,\text{m}$.
  ---
  **d)** $v_y = 6{,}41\,\text{m/s} - 9{,}81\,\text{m/s}^2\cdot 1{,}12\,\text{s} = -4{,}5\,\text{m/s}$. Negativ heißt abwärts: Der Ball fällt von oben in den Korb. Probe für a): $y(1{,}12\,\text{s}) = 2{,}0 + 6{,}41\cdot 1{,}115 - 4{,}905\cdot 1{,}115^2 = 3{,}05$ (in m). ✓
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, ohne nachzusehen. Vergleiche dann mit der Zusammenfassung darunter.
antwort: |
  Zum Beispiel: (1) Geschwindigkeit ist die Änderungsrate des Ortes, Beschleunigung die Änderungsrate der Geschwindigkeit.
  Beide sind unabhängig voneinander, ein Körper mit $v = 0$ kann beschleunigt sein. (2) Im s-t-Diagramm ist die Steigung die
  Geschwindigkeit, im v-t-Diagramm ist die Steigung die Beschleunigung und die Fläche die Verschiebung. (3) Würfe zerlegt man
  in eine gleichförmige waagrechte und eine gleichmäßig beschleunigte senkrechte Bewegung.
```

:::zusammenfassung
- **Bezugssystem:** Bewegung gibt es nur relativ zu einem Bezugssystem (Ursprung, Achsenrichtung, Uhr). Die Verschiebung
  $\Delta x = x_2 - x_1$ hat ein Vorzeichen, der Weg ist die ganze zurückgelegte Strecke und nie negativ.
- **Geschwindigkeit:** $\bar v = \Delta x/\Delta t$ ist die Sekantensteigung im s-t-Diagramm, $v = \dd x/\dd t$ die Tangentensteigung.
  Mittlere Geschwindigkeit ist Gesamtverschiebung durch Gesamtzeit, mittleres Tempo ist Gesamtweg durch Gesamtzeit.
- **Beschleunigung:** $a = \dd v/\dd t$, Einheit $\text{m/s}^2$. Aus $v = 0$ folgt nicht $a = 0$. Gleiche Vorzeichen von $v$ und $a$:
  schneller, verschiedene: langsamer.
- **Gleichmäßig beschleunigt:** $v = v_0 + at$, $x = x_0 + v_0 t + \tfrac12 a t^2$, $v^2 = v_0^2 + 2a\Delta x$,
  $\Delta x = \tfrac12(v_0 + v)t$. Anhalteweg $= v_0 t_R + v_0^2/(2|a|)$, der Bremsweg wächst mit $v_0^2$.
- **Diagramme:** Steigung ableiten, Fläche integrieren. Fläche unter dem v-t-Graphen $=$ Verschiebung, unter der Achse negativ.
- **Begegnen und Einholen:** Ortsfunktionen in einem gemeinsamen Koordinatensystem gleichsetzen. Im s-t-Diagramm ist der
  Treffpunkt der Schnittpunkt der Graphen.
- **Freier Fall und Würfe:** Alle Körper fallen ohne Luft mit $g = 9{,}81\,\text{m/s}^2$. Achse nach oben, $a = -g$ für den ganzen
  Flug. Würfe nach dem Superpositionsprinzip zerlegen, $W = v_0^2\sin(2\alpha)/g$ nur bei gleicher Abwurf- und Landehöhe.
- **Relativbewegung:** $\vec v = \vec v\,' + \vec u$ als Pfeile addieren. Inertialsysteme bewegen sich gleichförmig geradlinig
  gegeneinander, in ihnen gelten dieselben Gesetze.
:::

### Die häufigsten Fehler

Jeder Fehler wird von einer Aufgabe in diesem Kapitel gezielt trainiert. Wenn du einen davon bei dir wiedererkennst,
rechne die genannte Aufgabe noch einmal.

1. **Weg und Verschiebung verwechselt**, vor allem bei Umkehr. Training: „Eine Wanderung aus einer Ortstabelle“ und
   „Weg und Verschiebung aus einem v-t-Diagramm“.
2. **Vorzeichen eines Ortes oder einer Geschwindigkeit verloren.** Training: „Vor und hinter der Ampel“ und „Ein Bus fährt rückwärts“.
3. **Mittelwert der Geschwindigkeiten statt Gesamtweg durch Gesamtzeit.** Training: „Die Durchschnittsfalle“.
4. **Ort durch Zeit statt Ortsänderung durch Zeitspanne.** Training: „Momentangeschwindigkeit aus einer Tangente ablesen“.
5. **„Am höchsten Punkt ist die Beschleunigung null.“** Training: „Im Umkehrpunkt“ und „Was gilt beim senkrechten Wurf?“.
6. **„Negative Beschleunigung heißt bremsen.“** Training: „Schneller oder langsamer?“.
7. **km/h nicht in m/s umgerechnet.** Training: „Anhalteweg in der Stadt“ und „Beschleunigung aus km/h“.
8. **Bremsweg proportional zur Geschwindigkeit angenommen.** Training: „Was passiert bei doppelter Geschwindigkeit?“.
9. **Höhe im v-t-Diagramm als Ort gelesen oder das v-t-Diagramm abgeschrieben.** Training: „Vom v-t- zum s-t-Diagramm“.
10. **Schnittpunkt im s-t-Diagramm als „gleich schnell“ gedeutet.** Training: „Was bedeutet der Schnittpunkt?“ und „Einholen aus zwei v-t-Diagrammen“.
11. **Startverzögerung falsch eingebaut.** Training: „Das Auto holt den Bus ein“.
12. **Faktor ½ in $h = \tfrac12 g t^2$ vergessen.** Training: „Stein von einer Brücke“.
13. **Weitenformel bei erhöhtem Abwurf benutzt.** Training: „Kugelstoß“ und „Ein Distanzwurf beim Basketball“.
14. **Senkrechte Komponenten einfach addiert statt Pythagoras.** Training: „Kugel rollt vom Tisch“ und „Boot überquert einen Fluss“.

### Lernziel-Selbstcheck

Schätze für jedes Lernziel ein, wie sicher du bist: **1** heißt „noch unsicher“, **2** „mit Nachsehen“, **3** „sicher, auch in
der Prüfung“. Bei einer 1 wiederhole den Abschnitt und rechne seine Aufgabe auf Niveau 3.

1. Bezugssystem festlegen, Ort, Verschiebung und Weg mit Vorzeichen unterscheiden.
2. Mittlere und momentane Geschwindigkeit berechnen und im s-t-Diagramm deuten.
3. Beschleunigung berechnen, von der Geschwindigkeit unterscheiden, Vorzeichen deuten.
4. Die Gleichungen der gleichmäßig beschleunigten Bewegung herleiten und auf Anhaltewege anwenden.
5. Diagramme ineinander übersetzen, Steigungen und Flächen bestimmen.
6. Begegnungs-, Einhol- und Überholaufgaben lösen.
7. Freien Fall und senkrechten Wurf berechnen, $g$ aus Messdaten bestimmen.
8. Waagrechten und schiefen Wurf berechnen.
9. Geschwindigkeiten nach Galilei addieren, Inertialsysteme erklären.

## Mündliche Prüfung

```karten
- id: p2-k-bezugssystem
  frage: Was ist ein Bezugssystem, und warum braucht man es?
  antwort: |
    Ein Bezugssystem ist ein Körper, von dem aus man eine Bewegung beschreibt, mit einem Koordinatensystem (Ursprung,
    Achsenrichtung, Einheit) und einer Uhr. Bewegung und Ruhe sind relativ: Im Zug ruhe ich relativ zum Waggon, relativ zum
    Bahndamm bewege ich mich. Ohne Bezugssystem ist eine Orts- oder Geschwindigkeitsangabe unvollständig, und auch die
    Vorzeichen in jeder Rechnung hängen von der gewählten Achsenrichtung ab.
  kernpunkte: ["Bezugskörper mit Koordinatensystem und Uhr", "Ruhe und Bewegung sind relativ", "Vorzeichen hängen von der Achse ab"]
- id: p2-k-weg-verschiebung
  frage: Was ist der Unterschied zwischen Weg und Verschiebung? Gib ein Gegenbeispiel dafür, dass beide gleich sind.
  antwort: |
    Die Verschiebung ist die Ortsänderung $\Delta x = x_2 - x_1$, sie hat ein Vorzeichen. Der Weg ist die ganze entlang der Bahn
    zurückgelegte Strecke und ist nie negativ. Gleich groß sind sie nur, wenn der Körper nicht umkehrt. Gegenbeispiel: Nach
    einer Runde auf der $400$-m-Bahn ist die Verschiebung null, der Weg $400\,\text{m}$.
  kernpunkte: ["Verschiebung = Endort minus Anfangsort, mit Vorzeichen", "Weg = gesamte Strecke, nie negativ", "verschieden bei Umkehr"]
- id: p2-k-momentan
  frage: Wie sind mittlere Geschwindigkeit und Momentangeschwindigkeit definiert, und wie sieht man sie im s-t-Diagramm?
  antwort: |
    Die mittlere Geschwindigkeit ist $\bar v = \Delta x/\Delta t$, im s-t-Diagramm die Steigung der Sekante durch zwei Punkte.
    Die Momentangeschwindigkeit ist der Grenzwert für $\Delta t \to 0$, also die Ableitung $v = \dd x/\dd t$, die Steigung der
    Tangente. Das ist genau der Übergang vom Differenzenquotienten zum Differentialquotienten aus der Mathematik.
  kernpunkte: ["Sekantensteigung = mittlere Geschwindigkeit", "Grenzwert Δt → 0, Ableitung", "Tangentensteigung = Momentangeschwindigkeit"]
- id: p2-k-durchschnitt
  frage: Warum ist die Durchschnittsgeschwindigkeit (Gesamtweg durch Gesamtzeit) bei 60 km/h hin und 40 km/h zurück nicht 50 km/h?
  antwort: |
    Weil man länger mit der langsamen Geschwindigkeit unterwegs ist. Für je $60\,\text{km}$ braucht man $1\,\text{h}$ hin und
    $1{,}5\,\text{h}$ zurück. Gesamtweg durch Gesamtzeit ergibt $120\,\text{km}$ in $2{,}5\,\text{h}$, also $48\,\text{km/h}$. Den
    einfachen Mittelwert darf man nur bei gleich langen Zeitabschnitten bilden.
  kernpunkte: ["Gesamtweg durch Gesamtzeit", "langsame Phase dauert länger", "Mittelwert nur bei gleichen Zeiten"]
- id: p2-k-beschleunigung
  frage: Was ist Beschleunigung? Kann ein Körper mit v = 0 beschleunigt sein?
  antwort: |
    Die Beschleunigung ist die Änderungsrate der Geschwindigkeit, $a = \dd v/\dd t$, Einheit $\text{m/s}^2$. Ja, ein Körper mit
    $v = 0$ kann beschleunigt sein: Ein senkrecht hochgeworfener Ball hat im Umkehrpunkt $v = 0$, aber $a = g$ nach unten.
    Wäre dort auch $a = 0$, bliebe er oben stehen. Umgekehrt hat ein Flugzeug im Reiseflug große Geschwindigkeit, aber $a = 0$.
  kernpunkte: ["a = dv/dt, Einheit m/s²", "Umkehrpunkt: v = 0, a = g", "großes v heißt nicht großes a"]
- id: p2-k-vorzeichen
  frage: Heißt eine negative Beschleunigung immer, dass der Körper langsamer wird?
  antwort: |
    Nein. Das Vorzeichen hängt von der Achsenrichtung ab. Entscheidend ist, ob $v$ und $a$ dasselbe Vorzeichen haben. Dann wird
    der Körper schneller. Bei verschiedenen Vorzeichen wird er langsamer. Ein Auto, das in negative Richtung fährt und
    $a < 0$ hat, wird schneller.
  kernpunkte: ["Vorzeichen hängt von der Achse ab", "gleiche Vorzeichen: schneller", "verschiedene Vorzeichen: langsamer"]
- id: p2-k-herleitung
  frage: Leite die Weg-Zeit-Formel der gleichmäßig beschleunigten Bewegung her.
  antwort: |
    Bei konstantem $a$ wächst die Geschwindigkeit linear, $v = v_0 + at$. Die Verschiebung ist die Fläche unter dem v-t-Graphen.
    Sie besteht aus einem Rechteck $v_0 t$ und einem Dreieck mit Breite $t$ und Höhe $at$, also $\tfrac12 a t^2$. Zusammen
    $x = x_0 + v_0 t + \tfrac12 a t^2$. Mathematisch ist das das Integral der Geschwindigkeit.
  kernpunkte: ["v = v₀ + at, linear", "Fläche unter v-t = Verschiebung", "Rechteck plus Dreieck"]
- id: p2-k-bremsweg
  frage: Warum vervierfacht sich der Bremsweg bei doppelter Geschwindigkeit, der Reaktionsweg aber nur verdoppelt?
  antwort: |
    Der Reaktionsweg ist $v_0 t_R$, also proportional zu $v_0$. Für den Bremsweg folgt aus $0 = v_0^2 - 2|a|s$ die Formel
    $s = v_0^2/(2|a|)$, er wächst mit dem Quadrat. Anschaulich dauert das Bremsen doppelt so lang, und man fährt dabei im Mittel
    doppelt so schnell. Zweimal doppelt ergibt vierfach.
  kernpunkte: ["Reaktionsweg ∝ v₀", "Bremsweg ∝ v₀²", "doppelte Dauer mal doppelte mittlere Geschwindigkeit"]
- id: p2-k-diagramme
  frage: Was kann man aus s-t-, v-t- und a-t-Diagrammen ablesen?
  antwort: |
    Im s-t-Diagramm ist die Steigung die Geschwindigkeit, die Krümmung zeigt das Vorzeichen der Beschleunigung. Im v-t-Diagramm
    ist die Steigung die Beschleunigung und die Fläche unter dem Graphen die Verschiebung, Flächen unter der Achse zählen negativ.
    Im a-t-Diagramm ist die Fläche die Geschwindigkeitsänderung. Ableiten heißt Steigung, Integrieren heißt Fläche.
  kernpunkte: ["s-t: Steigung = v", "v-t: Steigung = a, Fläche = Verschiebung", "a-t: Fläche = Δv", "Zusammenhang Ableitung und Integral"]
- id: p2-k-schnittpunkt
  frage: Was bedeutet ein Schnittpunkt zweier Graphen im s-t-Diagramm, und was im v-t-Diagramm?
  antwort: |
    Im s-t-Diagramm sind die beiden Körper zur selben Zeit am selben Ort, sie treffen sich oder einer überholt den anderen.
    Gleich schnell sind sie dort nicht, sonst wären die Graphen gleich steil. Im v-t-Diagramm bedeutet ein Schnittpunkt gleiche
    Geschwindigkeit. Bei einer Verfolgung ist dort der Abstand am größten oder am kleinsten.
  kernpunkte: ["s-t: gleicher Ort, Treffpunkt", "nicht gleich schnell", "v-t: gleiche Geschwindigkeit, extremer Abstand"]
- id: p2-k-freier-fall
  frage: Warum fallen im Vakuum alle Körper gleich schnell? Wie hat Galilei das begründet?
  antwort: |
    Galilei nahm an, schwere Körper fielen schneller, und band in Gedanken einen schweren und einen leichten Stein zusammen. Der
    leichte müsste den schweren bremsen, das Paar ist aber schwerer und müsste schneller fallen. Dieser Widerspruch widerlegt
    die Annahme. Die Dynamik erklärt es so: Die Gewichtskraft ist proportional zur Masse, die Trägheit auch, deshalb ist
    $a = F/m = g$ für alle Körper gleich. Im Alltag macht nur der Luftwiderstand Unterschiede.
  kernpunkte: ["Gedankenexperiment mit zwei Steinen", "Gewichtskraft und Trägheit ∝ Masse", "Unterschiede nur durch Luftwiderstand"]
- id: p2-k-g-messen
  frage: Wie kann man die Fallbeschleunigung messen, und wovon hängt die Genauigkeit ab?
  antwort: |
    Zum Beispiel mit einer Fallröhre und zwei Lichtschranken: Man misst die Fallzeit $t$ über die Strecke $h$ und erhält
    $g = 2h/t^2$. Man wiederholt die Messung und bildet den Mittelwert. Weil $t$ im Quadrat eingeht, zählt die relative
    Unsicherheit der Zeit doppelt. Die Zeitmessung bestimmt also meist die Genauigkeit.
  kernpunkte: ["g = 2h/t²", "Messreihe, Mittelwert", "Unsicherheit der Zeit zählt doppelt"]
- id: p2-k-superposition
  frage: Was besagt das Superpositionsprinzip, und wie nutzt man es beim Wurf?
  antwort: |
    Gleichzeitige Bewegungen überlagern sich ungestört. Beim Wurf ohne Luftwiderstand ist die waagrechte Bewegung gleichförmig
    und die senkrechte ein senkrechter Wurf mit $a = -g$. Man rechnet beide getrennt, die Zeit verbindet sie. Die Bahn ist eine
    Parabel. Deshalb landet eine waagrecht geschossene Kugel gleichzeitig mit einer fallengelassenen.
  kernpunkte: ["Bewegungen überlagern sich ungestört", "waagrecht gleichförmig, senkrecht beschleunigt", "Bahn ist Parabel"]
- id: p2-k-winkel
  frage: Unter welchem Winkel fliegt ein Ball am weitesten, und wann gilt das nicht?
  antwort: |
    Auf ebenem Boden ohne Luftwiderstand bei $45^\circ$, weil $W = v_0^2\sin(2\alpha)/g$ bei $2\alpha = 90^\circ$ maximal ist.
    Komplementäre Winkel wie $30^\circ$ und $60^\circ$ ergeben dieselbe Weite. Bei erhöhtem Abwurf, etwa beim Kugelstoß, und mit
    Luftwiderstand ist der beste Winkel kleiner.
  kernpunkte: ["45° wegen sin(2α)", "komplementäre Winkel gleiche Weite", "erhöhter Abwurf oder Luft: kleiner"]
- id: p2-k-galilei
  frage: Wie addiert man Geschwindigkeiten in verschiedenen Bezugssystemen? Gib ein Beispiel mit zwei Dimensionen.
  antwort: |
    Nach Galilei vektoriell: $\vec v = \vec v\,' + \vec u$, wobei $\vec u$ die Geschwindigkeit des bewegten Systems ist. Ein Boot fährt
    mit $4\,\text{m/s}$ quer zum Fluss, die Strömung hat $3\,\text{m/s}$. Über Grund ist es $5\,\text{m/s}$ schnell, die
    Überfahrtszeit hängt aber nur von der Querkomponente ab. Das gilt nur weit unter der Lichtgeschwindigkeit.
  kernpunkte: ["v = v′ + u vektoriell", "Pythagoras bei rechtem Winkel", "nur für v ≪ c"]
- id: p2-k-inertialsystem
  frage: Was ist ein Inertialsystem, und warum braucht man den Begriff in der Dynamik?
  antwort: |
    Ein Bezugssystem, in dem ein kräftefreier Körper ruht oder sich gleichförmig geradlinig bewegt. Systeme, die sich gleichförmig
    geradlinig gegeneinander bewegen, sind gleichwertig, kein mechanisches Experiment unterscheidet sie (Galileis Schiff). In der
    Dynamik gelten die Newtonschen Axiome nur in Inertialsystemen. In beschleunigten Systemen wie einem bremsenden Bus braucht
    man zusätzlich Scheinkräfte.
  kernpunkte: ["kräftefreier Körper ruht oder bewegt sich gleichförmig", "gleichförmig bewegte Systeme gleichwertig", "Newton gilt nur dort, sonst Scheinkräfte"]
```
