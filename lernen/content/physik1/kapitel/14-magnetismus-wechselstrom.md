---
nummer: 14
titel: Magnetfeld, Induktion, Wechselstrom und elektrische Maschinen
kurz: Magnetfelder von Magneten und Strömen, Kraft auf Leiter und Lorentzkraft, Induktionsgesetz und Lenzsche Regel, Selbstinduktion, Wechselspannung mit Effektivwerten, Spule und Kondensator im Wechselstromkreis, Wirk- und Blindleistung, Schwingkreis, Motor, Generator, Transformator, Hochspannung und Drehstrom.
teil: elektrizitaet
stunden: 12
pruefungsgewicht: 3
voraussetzungen: [gleichstrom, elektrostatik, kreisbewegung-gravitation, dynamik, arbeit-energie-impuls, schwingungen]
lernziele:
  - Magnetfelder von Dauermagneten, geraden Leitern und Spulen beschreiben und zeichnen, ihre Richtung mit der Rechte-Hand-Regel bestimmen und Flussdichten von Leiter und Spule berechnen
  - die magnetische Flussdichte über die Kraft auf einen Leiter erklären, Kräfte auf Leiter mit F = B·I·l·sin α berechnen und ihre Richtung mit der Drei-Finger-Regel bestimmen
  - die Lorentzkraft auf bewegte Ladungen berechnen und Kreisbahnen im Fadenstrahlrohr, im Massenspektrometer, im Wien-Filter und beim Hall-Effekt auswerten
  - den magnetischen Fluss berechnen und das Induktionsgesetz für Feldänderung, Flächenänderung, Drehung und bewegte Leiter anwenden, auch aus einem Diagramm
  - die Richtung induzierter Ströme mit der Lenzschen Regel bestimmen und mit der Energieerhaltung begründen, auch bei Wirbelströmen
  - Selbstinduktion erklären und Induktionsspannungen beim Ein- und Ausschalten einer Spule berechnen
  - Wechselspannung beschreiben und mit Scheitelwert, Effektivwert, Periodendauer und mittlerer Leistung rechnen
  - induktiven und kapazitiven Widerstand, Phasenverschiebung, Wirk- und Blindleistung sowie die Eigenfrequenz eines Schwingkreises berechnen und deuten
  - Elektromotor, Generator und Transformator erklären und Transformatoren, Drehmomente und Generatorspannungen berechnen
  - begründen, warum Energie mit Hochspannung übertragen wird, Leitungsverluste und Drehstromspannungen berechnen und den Zusammenhang mit elektromagnetischen Wellen erklären
---

Im [Kapitel Gleichstrom](/lernen/physik1/gleichstrom) hast du Ströme durch Drähte geschickt und ihre Wärmewirkung
berechnet. Ströme haben aber noch eine zweite, ganz andere Wirkung: Sie erzeugen **Magnetfelder**. Und umgekehrt
kann ein Magnetfeld, das sich ändert, eine Spannung erzeugen. Diese beiden Entdeckungen aus dem 19. Jahrhundert
tragen die gesamte Elektrotechnik.

**Wozu brauchst du das?** In jedem Kraftwerk dreht sich ein **Generator**. In jedem Ladegerät steckt ein
**Transformator** oder ein Schaltnetzteil. Jede Festplatte, jeder Lautsprecher und jeder Elektromotor arbeitet mit
Magnetfeldern. Auch das kabellose Laden eines Handys und die Bankomatkarte am Kassenterminal beruhen auf dem
Induktionsgesetz, das du hier lernst.

**Was kommt in der Prüfung?** Schriftlich sind diese Aufgaben typisch:

- Die Kraft auf einen Leiter im Magnetfeld berechnen.
- Die Kreisbahn eines Elektrons oder Ions im Magnetfeld berechnen, etwa im Fadenstrahlrohr oder im Massenspektrometer.
- Die induzierte Spannung in einem bewegten Leiter oder in einer Spule berechnen.
- Mit Scheitel- und Effektivwerten der Netzspannung rechnen.
- Einen Transformator berechnen und die Verluste einer Fernleitung vergleichen.

In der mündlichen Prüfung kommen oft diese Fragen:

- „Wie funktioniert ein Generator?“
- „Was sagt die Lenzsche Regel, und warum gilt sie?“
- „Was ist der Effektivwert einer Wechselspannung?“
- „Warum überträgt man elektrische Energie mit Hochspannung?“

Nach diesem Kapitel kannst du jede dieser Fragen in ganzen Sätzen beantworten.

**So ist das Kapitel aufgebaut:** Zuerst lernst du Magnetfelder kennen und wie sie auf Ströme und bewegte Ladungen
wirken. Dann folgt die **Induktion**, also die Erzeugung von Spannung durch ein sich änderndes Magnetfeld. Zwei
Stellen sind für fast alle Lernenden schwer: die **Lenzsche Regel** (in welche Richtung fließt der induzierte Strom?)
und der **Effektivwert** (welche Spannung „hat“ eine Wechselspannung?). Beide bekommen einen eigenen Abschnitt mit
viel Zeit. Am Ende stehen die Maschinen: Motor, Generator, Transformator und das Stromnetz.

:::vorwissen
Für dieses Kapitel brauchst du:

- **Strom, Spannung, Widerstand** und das Ohmsche Gesetz $U = R\cdot I$ sowie die **elektrische Leistung**
  $P = U\cdot I$ aus dem [Kapitel Gleichstrom](/lernen/physik1/gleichstrom).
- Die **Elementarladung** $e$, das **elektrische Feld**, Feldlinien und den **Kondensator** mit $Q = C\cdot U$ aus dem
  [Kapitel Elektrostatik](/lernen/physik1/elektrostatik).
- Die **Zentripetalkraft** $F = mv^2/r$ aus dem [Kapitel Kreisbewegung und Gravitation](/lernen/physik1/kreisbewegung-gravitation).
- **Arbeit** und **Energieerhaltung** aus dem [Kapitel Arbeit, Energie, Impuls](/lernen/physik1/arbeit-energie-impuls).
- **Periodendauer, Frequenz** und **Kreisfrequenz** $\omega = 2\pi f$ aus dem [Kapitel Schwingungen](/lernen/physik1/schwingungen).
- Aus dem Mathematikkurs die **Sinusfunktion** aus dem Kapitel [Trigonometrie](/lernen/mathe3/trigonometrie) und
  die **Ableitung als Änderungsrate** aus [9.1 Änderungen messen: absolute, relative und mittlere Änderung](/lernen/mathe3/differentialrechnung/aenderungen-messen-absolute-relative-und-mittlere-aenderung).
:::

### Eingangsdiagnose: Bist du bereit?

Die folgenden kurzen Fragen prüfen dein Vorwissen. Bist du bei einer Frage unsicher, folge dem Link in der Lösung
und wiederhole das Thema kurz. Diese zehn Minuten sparen dir später viel Ärger.

```aufgabe
id: p14-e-ohm
art: check
titel: Strom aus Spannung und Widerstand
niveau: 1
angabe: |
  Ein Heizdraht mit dem Widerstand $46\,\Omega$ liegt an $230\,\text{V}$. Wie groß ist der Strom?
teile:
  - typ: zahl
    loesung: "230/46"
    einheit: "A"
    anzeige: '5{,}0'
    fehler:
      - wert: "230*46"
        meldung: Du hast multipliziert. Aus $U = R\cdot I$ folgt durch Teilen durch $R$ die Formel $I = U/R$. Ein großer Widerstand bremst den Strom, er macht ihn kleiner.
      - wert: "46/230"
        meldung: Du hast den Kehrwert berechnet. Die Spannung steht im Zähler, der Widerstand im Nenner, also $I = U/R$.
hinweise:
  - Das Ohmsche Gesetz lautet $U = R\cdot I$. Stelle es nach $I$ um.
loesung: |
  Wir stellen $U = R\cdot I$ nach dem Strom um, indem wir beide Seiten durch $R$ teilen: $I = U/R$.
  ---
  $I = \dfrac{230\,\text{V}}{46\,\Omega} = 5{,}0\,\text{A}$, denn $1\,\text{V}/\Omega = 1\,\text{A}$. Wiederholen: [Kapitel Gleichstrom](/lernen/physik1/gleichstrom), Ohmsches Gesetz.
```

```aufgabe
id: p14-e-leistung
art: check
titel: Elektrische Leistung
niveau: 1
angabe: |
  Eine Autolampe liegt an $12\,\text{V}$, durch sie fließen $2{,}5\,\text{A}$. Welche Leistung nimmt sie auf?
teile:
  - typ: zahl
    loesung: "12*2.5"
    einheit: "W"
    anzeige: '30'
    fehler:
      - wert: "12/2.5"
        meldung: Das ist der Widerstand $R = U/I$ in Ohm, nicht die Leistung. Die Leistung ist Spannung **mal** Strom.
hinweise:
  - Die elektrische Leistung ist $P = U\cdot I$.
loesung: |
  Die elektrische Leistung ist das Produkt aus Spannung und Strom: $P = U\cdot I$.
  ---
  $P = 12\,\text{V}\cdot 2{,}5\,\text{A} = 30\,\text{W}$, denn $1\,\text{V}\cdot\text{A} = 1\,\text{W}$. Wiederholen: [Kapitel Gleichstrom](/lernen/physik1/gleichstrom), elektrische Arbeit und Leistung.
```

```aufgabe
id: p14-e-zentripetal
art: check
titel: Zentripetalkraft
niveau: 1
angabe: |
  Ein Körper mit $0{,}50\,\text{kg}$ läuft mit $4{,}0\,\text{m/s}$ auf einem Kreis mit dem Radius $2{,}0\,\text{m}$. Wie groß ist die Zentripetalkraft?
teile:
  - typ: zahl
    loesung: "0.5*4^2/2"
    einheit: "N"
    anzeige: '4{,}0'
    fehler:
      - wert: "0.5*4/2"
        meldung: Die Geschwindigkeit steht im **Quadrat** in der Formel, $F = mv^2/r$. Doppelt so schnell heißt viermal so viel Kraft.
      - wert: "0.5*4^2*2"
        meldung: Der Radius gehört in den Nenner. Ein enger Kreis (kleines $r$) braucht eine größere Kraft.
hinweise:
  - Die Zentripetalkraft ist $F = \dfrac{m v^2}{r}$.
loesung: |
  Für eine gleichförmige Kreisbewegung gilt $F = \dfrac{m v^2}{r}$. Diese Kraft zeigt immer zum Kreismittelpunkt.
  ---
  $F = \dfrac{0{,}50\,\text{kg}\cdot(4{,}0\,\text{m/s})^2}{2{,}0\,\text{m}} = 4{,}0\,\text{N}$, denn $\text{kg}\cdot\text{m}^2/\text{s}^2/\text{m} = \text{kg}\cdot\text{m/s}^2 = \text{N}$. Wiederholen: [Kapitel Kreisbewegung und Gravitation](/lernen/physik1/kreisbewegung-gravitation), Zentripetalkraft.
```

```aufgabe
id: p14-e-energie-ladung
art: check
titel: Energie eines beschleunigten Elektrons
niveau: 1
angabe: |
  Ein Elektron (Ladung $e = 1{,}602\cdot 10^{-19}\,\text{C}$) durchläuft aus der Ruhe die Spannung $100\,\text{V}$. Wie viel Bewegungsenergie gewinnt es? Gib das Ergebnis in $10^{-17}\,\text{J}$ an.
teile:
  - typ: zahl
    loesung: "1.602e-19*100/1e-17"
    anzeige: '1{,}602'
    fehler:
      - wert: "1.602e-19/100/1e-17"
        meldung: Du hast durch die Spannung geteilt. Die Energie ist Ladung **mal** Spannung, $E = eU$. Mehr Spannung heißt mehr Energie.
hinweise:
  - Beim Durchlaufen der Spannung $U$ gewinnt eine Ladung $q$ die Energie $q\cdot U$.
loesung: |
  Die Spannung ist Energie pro Ladung. Eine Ladung $e$, die die Spannung $U$ durchläuft, gewinnt deshalb die Energie $E = e\cdot U$.
  ---
  $E = 1{,}602\cdot 10^{-19}\,\text{C}\cdot 100\,\text{V} = 1{,}602\cdot 10^{-17}\,\text{J}$, denn $\text{C}\cdot\text{V} = \text{J}$. Wiederholen: [Kapitel Elektrostatik](/lernen/physik1/elektrostatik), Potential und Spannung.
```

```aufgabe
id: p14-e-kondensator
art: check
titel: Ladung auf einem Kondensator
niveau: 1
angabe: |
  Ein Kondensator mit $C = 10\,\mu\text{F}$ wird auf $12\,\text{V}$ geladen. Welche Ladung trägt er? Gib das Ergebnis in $\mu\text{C}$ an.
teile:
  - typ: zahl
    loesung: "10*12"
    einheit: "µC"
    anzeige: '120'
    fehler:
      - wert: "10/12"
        meldung: Du hast geteilt. Es gilt $Q = C\cdot U$. Je größer die Spannung, desto mehr Ladung sitzt auf den Platten.
hinweise:
  - Die Kapazität ist Ladung pro Spannung, $C = Q/U$. Also ist $Q = C\cdot U$.
loesung: |
  Die Kapazität sagt, wie viel Ladung pro Volt auf den Kondensator passt: $C = Q/U$, also $Q = C\cdot U$.
  ---
  $Q = 10\cdot 10^{-6}\,\text{F}\cdot 12\,\text{V} = 1{,}2\cdot 10^{-4}\,\text{C} = 120\,\mu\text{C}$. Wiederholen: [Kapitel Elektrostatik](/lernen/physik1/elektrostatik), Kondensator.
```

```aufgabe
id: p14-e-kreisfrequenz
art: check
titel: Kreisfrequenz aus der Frequenz
niveau: 1
angabe: |
  Ein Vorgang wiederholt sich $50$-mal pro Sekunde. Wie groß sind Periodendauer (in ms) und Kreisfrequenz $\omega$ (in $1/\text{s}$)?
teile:
  - typ: zahl
    label: Periodendauer in ms
    loesung: "1/50*1000"
    einheit: "ms"
    anzeige: '20'
    fehler:
      - wert: "50"
        meldung: Das ist die Frequenz selbst. Die Periodendauer ist ihr Kehrwert, $T = 1/f$.
  - typ: zahl
    label: Kreisfrequenz in 1/s
    loesung: "2*pi*50"
    einheit: "1/s"
    anzeige: '314'
    fehler:
      - wert: "50"
        meldung: Das ist die Frequenz $f$. Die Kreisfrequenz zählt den Winkel im Bogenmaß pro Sekunde. Eine Periode sind $2\pi$, also $\omega = 2\pi f$.
hinweise:
  - Es gilt $T = 1/f$ und $\omega = 2\pi f$, weil eine volle Periode einem Winkel von $2\pi$ entspricht.
loesung: |
  Die Frequenz ist $f = 50\,\text{Hz}$. Die Periodendauer ist ihr Kehrwert: $T = 1/f = 1/50\,\text{s} = 0{,}020\,\text{s} = 20\,\text{ms}$.
  ---
  Die Kreisfrequenz ist $\omega = 2\pi f = 2\pi\cdot 50\,\text{s}^{-1} = 314\,\text{s}^{-1}$. Wiederholen: [Kapitel Schwingungen](/lernen/physik1/schwingungen), Kenngrößen periodischer Bewegungen.
```

```aufgabe
id: p14-e-senkrecht
art: check
titel: Arbeit einer Kraft senkrecht zur Bewegung
niveau: 1
angabe: |
  Ein Körper bewegt sich, und auf ihn wirkt eine Kraft, die **immer senkrecht** zu seiner Bewegungsrichtung steht. Wie viel Arbeit verrichtet diese Kraft?
teile:
  - typ: auswahl
    optionen:
      - "Keine, weil Kraft und Weg senkrecht zueinander stehen."
      - "Kraft mal zurückgelegter Weg, wie immer."
      - "Das hängt davon ab, wie groß die Kraft ist."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Arbeit ist nur „Kraft mal Weg“, wenn beide in dieselbe Richtung zeigen. Allgemein gilt $W = F\cdot s\cdot\cos\alpha$, und bei $90^\circ$ ist $\cos\alpha = 0$.
      - wert: 2
        meldung: Auch eine große Kraft verrichtet keine Arbeit, wenn sie senkrecht zum Weg steht. Es zählt nur der Kraftanteil in Wegrichtung, und der ist hier null.
hinweise:
  - Die Arbeit ist $W = F\cdot s\cdot\cos\alpha$, wobei $\alpha$ der Winkel zwischen Kraft und Weg ist.
loesung: |
  Arbeit zählt nur den Teil der Kraft, der in Wegrichtung zeigt: $W = F\cdot s\cdot\cos\alpha$.
  ---
  Bei $\alpha = 90^\circ$ ist $\cos\alpha = 0$, also $W = 0$. Die Kraft ändert nur die Richtung der Bewegung, nicht das Tempo. Das brauchst du gleich bei der Lorentzkraft. Wiederholen: [Kapitel Arbeit, Energie, Impuls](/lernen/physik1/arbeit-energie-impuls), mechanische Arbeit.
```

## Magnetfelder von Dauermagneten, Leitern und Spulen

```aufgabe
id: p14-1-check
art: check
titel: "Vorwissen: Wo beginnen elektrische Feldlinien?"
niveau: 1
angabe: |
  Im Kapitel Elektrostatik hast du elektrische Feldlinien kennengelernt. Wo beginnen und wo enden sie?
teile:
  - typ: auswahl
    optionen:
      - "Sie beginnen an positiven Ladungen und enden an negativen Ladungen."
      - "Sie sind geschlossene Kreise ohne Anfang und Ende."
      - "Sie beginnen an negativen Ladungen und enden an positiven Ladungen."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Geschlossene Feldlinien gibt es beim **Magnetfeld**, wie du in diesem Abschnitt lernst. Elektrische Feldlinien haben einen Anfang und ein Ende, nämlich die Ladungen.
      - wert: 2
        meldung: Die Richtung ist umgekehrt. Die Feldlinie zeigt, wohin eine positive Probeladung gedrückt wird, also von Plus weg und zu Minus hin.
hinweise:
  - Eine Feldlinie zeigt die Richtung der Kraft auf eine kleine **positive** Probeladung.
loesung: |
  Eine positive Probeladung wird von positiven Ladungen weggedrückt und von negativen angezogen.
  ---
  Deshalb beginnen elektrische Feldlinien an positiven Ladungen und enden an negativen. Gleich siehst du, dass magnetische Feldlinien ganz anders aussehen: Sie haben weder Anfang noch Ende. Wiederholen: [Kapitel Elektrostatik](/lernen/physik1/elektrostatik), elektrisches Feld.
```

**Worum geht es in diesem Abschnitt?** Du lernst, was ein Magnetfeld ist, wie man es mit Feldlinien zeichnet und
woher es kommt. Es gibt zwei Quellen: Dauermagnete und elektrische Ströme. Für den geraden Draht und für die Spule
lernst du außerdem, wie stark das Feld ist.

### Dauermagnete und ihre Pole

Ein **Dauermagnet** ist ein Körper, der ohne Strom dauerhaft magnetisch ist, zum Beispiel ein Kühlschrankmagnet. Ein
Stabmagnet zieht Gegenstände aus Eisen, Nickel und Kobalt an. Seine Wirkung ist an den Enden am stärksten. Diese
Enden heißen **Pole**.

Hängt man einen Stabmagneten drehbar auf, richtet er sich in Nord-Süd-Richtung aus. Das Ende, das nach Norden zeigt,
heißt **Nordpol** (N), das andere **Südpol** (S). Eine Kompassnadel ist nichts anderes als ein kleiner, leichter
Stabmagnet. Für zwei Magnete gilt:

- Gleichnamige Pole stoßen einander ab (N und N, S und S).
- Ungleichnamige Pole ziehen einander an (N und S).

Das erinnert an elektrische Ladungen. Es gibt aber einen entscheidenden Unterschied: **Magnetische Pole treten immer
paarweise auf.** Zerbricht man einen Stabmagneten in der Mitte, erhält man nicht einen einzelnen Nordpol und einen
einzelnen Südpol. Man erhält zwei vollständige Magnete mit je einem Nord- und einem Südpol. Einen einzelnen Magnetpol,
einen sogenannten **Monopol**, hat noch niemand gefunden.

Warum ist das so? Magnetismus entsteht durch **bewegte Ladungen**. In den Atomen verhalten sich die Elektronen wie
winzige Kreisströme. Genauer gesagt liegt es an einer Eigenschaft der Elektronen, die man **Spin** nennt. Jeder
solche Kreisstrom ist ein winziger Magnet mit zwei Seiten, einer Nord- und einer Südseite. Man nennt ihn
**Elementarmagnet**. Wie oft man ein Stück Eisen auch teilt, man zerteilt nie einen Elementarmagneten in zwei Hälften.

```aufgabe
id: p14-magnet-auswahl
titel: Einen Stabmagneten zerbrechen
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Ein Stabmagnet wird in der Mitte durchgebrochen. Was erhält man?
teile:
  - typ: auswahl
    optionen:
      - "Zwei vollständige Magnete, jeder mit einem Nord- und einem Südpol."
      - "Einen einzelnen Nordpol und einen einzelnen Südpol."
      - "Zwei unmagnetische Eisenstücke, weil die Pole getrennt wurden."
      - "Zwei Magnete, die beide nur Nordpole haben."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: So würde es bei elektrischen Ladungen funktionieren. Magnetische Pole gibt es aber nur paarweise, denn jeder Elementarmagnet im Inneren hat selbst schon zwei Seiten.
      - wert: 2
        meldung: Die Elementarmagnete im Inneren bleiben ausgerichtet, auch nach dem Bruch. Deshalb bleibt jedes Bruchstück magnetisch.
      - wert: 3
        meldung: Jedes Bruchstück enthält ausgerichtete Elementarmagnete mit je einer Nord- und einer Südseite. Deshalb hat auch jedes Bruchstück beide Pole.
hinweise:
  - Denk an die Elementarmagnete im Inneren. Was passiert mit ihnen beim Zerbrechen?
loesung: |
  **Ansatz:** Ein Magnet besteht aus vielen gleich ausgerichteten Elementarmagneten. Jeder davon hat eine Nord- und eine Südseite.
  ---
  Beim Zerbrechen bleiben die Elementarmagnete ausgerichtet. An der Bruchstelle entstehen deshalb ein neuer Südpol und ein neuer Nordpol. Man erhält zwei vollständige Magnete. Einzelne Magnetpole (Monopole) gibt es nicht.
```

:::achtung[Fehler: Magnetpole für Ladungen halten]
Eine Schülerin argumentiert: „Der Nordpol eines Magneten ist positiv geladen. Ein ruhendes Elektron wird von ihm also
angezogen, und zwar mit der Coulomb-Kraft.“

Das ist falsch. Ein Magnetpol ist **keine** Ladung. Ein Magnet ist elektrisch neutral. Eine ruhende Ladung spürt
neben einem Magneten **gar keine** Kraft. Ein Magnetfeld wirkt nur auf **bewegte** Ladungen und auf andere Magnete.
Wie das genau geht, lernst du in [14.3 Geladene Teilchen im Magnetfeld: Lorentzkraft und Kreisbahn](/lernen/physik1/magnetismus-wechselstrom/geladene-teilchen-im-magnetfeld-lorentzkraft-und-kreisbahn).
Merke dir drei Unterschiede: Pole gibt es nur paarweise, Pole sind ungeladen, und ein Magnet zieht auch ein
unmagnetisches Stück Eisen an.
:::


### Feldlinien des Magnetfeldes

Um einen Magneten herum ist der Raum verändert: Eine Kompassnadel dreht sich dort in eine bestimmte Richtung. Diesen
veränderten Raum nennt man **Magnetfeld**. Wie beim elektrischen Feld zeichnet man es mit **Feldlinien**.

- **Richtung:** Eine Feldlinie zeigt an jeder Stelle dorthin, wohin der **Nordpol** einer kleinen Kompassnadel zeigt.
- **Außerhalb** eines Magneten laufen die Feldlinien vom Nordpol zum Südpol.
- **Innerhalb** des Magneten laufen sie vom Südpol zurück zum Nordpol. Magnetische Feldlinien sind deshalb
  **geschlossen**. Sie haben keinen Anfang und kein Ende, weil es keine magnetischen Ladungen gibt.
- **Dichte:** Wo die Linien eng beieinander liegen, ist das Feld stark. An den Polen ist das so.

Sichtbar machen kann man die Feldlinien mit Eisenfeilspänen. Jeder Span wird selbst zu einem kleinen Magneten und
richtet sich entlang des Feldes aus.

```plot
x: [-4, 4]
y: [-3.2, 3.2]
gleich: true
hoehe: 330
kurven:
  - { x: "1.6*sin(t)^2*cos(t)", y: "1.6*sin(t)^3", t: [0.609, 2.532], farbe: 0 }
  - { x: "2.4*sin(t)^2*cos(t)", y: "2.4*sin(t)^3", t: [0.525, 2.617], farbe: 0 }
  - { x: "3.6*sin(t)^2*cos(t)", y: "3.6*sin(t)^3", t: [0.452, 2.689], farbe: 0 }
  - { x: "1.6*sin(t)^2*cos(t)", y: "-1.6*sin(t)^3", t: [0.609, 2.532], farbe: 0 }
  - { x: "2.4*sin(t)^2*cos(t)", y: "-2.4*sin(t)^3", t: [0.525, 2.617], farbe: 0 }
  - { x: "3.6*sin(t)^2*cos(t)", y: "-3.6*sin(t)^3", t: [0.452, 2.689], farbe: 0 }
strecken:
  - { von: [-1, -0.3], nach: [1, -0.3], farbe: 3 }
  - { von: [-1, 0.3], nach: [1, 0.3], farbe: 3 }
  - { von: [-1, -0.3], nach: [-1, 0.3], farbe: 3 }
  - { von: [1, -0.3], nach: [1, 0.3], farbe: 3 }
  - { von: [0, -0.3], nach: [0, 0.3], farbe: 3 }
  - { von: [1, 0], nach: [4, 0], farbe: 0 }
  - { von: [-4, 0], nach: [-1, 0], farbe: 0 }
vektoren:
  - { von: [0.2, 1.6], nach: [-0.2, 1.6], farbe: 0 }
  - { von: [0.2, 2.4], nach: [-0.2, 2.4], farbe: 0 }
  - { von: [0.2, -1.6], nach: [-0.2, -1.6], farbe: 0 }
  - { von: [0.2, -2.4], nach: [-0.2, -2.4], farbe: 0 }
  - { von: [2.4, 0], nach: [2.9, 0], farbe: 0 }
  - { von: [-2.9, 0], nach: [-2.4, 0], farbe: 0 }
  - { von: [-0.25, 0], nach: [0.25, 0], farbe: 1, label: "innen" }
punkte:
  - { x: 0.5, y: -0.6, label: "N" }
  - { x: -0.5, y: -0.6, label: "S" }
beschriftung: "Feldlinien eines Stabmagneten (Nordpol rechts, Südpol links). Außen laufen die Linien vom Nordpol in Bögen zum Südpol, die Pfeile zeigen die Richtung. Im Inneren des Magneten laufen sie vom Südpol zum Nordpol zurück (oranger Pfeil). Jede Linie ist geschlossen. An den Polen liegen die Linien am dichtesten, dort ist das Feld am stärksten."
```

**Ferromagnetismus.** Nur wenige Stoffe lassen sich stark magnetisieren: Eisen, Nickel, Kobalt und manche Legierungen.
Man nennt sie **ferromagnetisch** (von lateinisch *ferrum*, Eisen). In ihnen sind die Elementarmagnete in kleinen
Bereichen gleich ausgerichtet. Diese Bereiche heißen **Weißsche Bezirke** und sind typisch einige Mikrometer groß. In
unmagnetisiertem Eisen zeigen die Bezirke in alle Richtungen, und ihre Wirkungen heben sich auf. Ein äußeres Feld
richtet sie aus, dann wird das Eisen selbst magnetisch.

- **Weichmagnetische** Stoffe wie Weicheisen verlieren diese Ausrichtung fast ganz, wenn das äußere Feld verschwindet.
  Man braucht sie für Elektromagnete und Transformatorkerne.
- **Hartmagnetische** Stoffe wie Stahl oder Neodym-Eisen-Bor behalten die Ausrichtung. Aus ihnen baut man Dauermagnete.

Oberhalb der **Curie-Temperatur** zerstört die Wärmebewegung die Ordnung, für Eisen bei $768\,^\circ\text{C}$. Dann ist
der Stoff nicht mehr ferromagnetisch. Für Informatiker interessant: Eine Festplatte speichert jedes Bit als winzigen,
in eine von zwei Richtungen magnetisierten Bereich einer hartmagnetischen Schicht.

```reflexion
frage: Ein Stück unmagnetisches Eisen wird von **beiden** Polen eines Magneten angezogen, ein zweiter Magnet aber nur von einem Pol. Warum?
antwort: |
  Im unmagnetischen Eisen sind die Weißschen Bezirke ungeordnet. Nähert man einen Pol, richtet sein Feld die Bezirke
  so aus, dass dem Pol ein ungleichnamiger Pol gegenübersteht. Das Eisen wird also selbst zum Magneten, und zwar
  immer passend zum nähernden Pol. Deshalb zieht jeder Pol es an. Ein Dauermagnet hat dagegen feste Pole. Ihm kann
  man einen gleichnamigen Pol gegenüberstellen, dann stoßen sich die beiden ab.
```

### Das Erdmagnetfeld

Die Erde ist selbst ein großer Magnet. Ihr Feld entsteht durch Ströme im flüssigen, eisenhaltigen äußeren Erdkern.
Der Nordpol der Kompassnadel zeigt nach Norden, wird dort also **angezogen**. Ungleichnamige Pole ziehen einander an.
Deshalb liegt in der Nähe des geographischen Nordpols ein **magnetischer Südpol**. Das klingt verwirrend, folgt aber
direkt aus der Regel.

Das Erdfeld verläuft in Mitteleuropa nicht waagrecht. Es zeigt schräg nach Norden **in den Boden hinein**. Den Winkel
zwischen Feld und Waagrechter nennt man **Inklination** (Neigung). Eine Kompassnadel, die sich nur waagrecht drehen
kann, spürt nur den waagrechten Anteil des Feldes, die **Horizontalkomponente**. Das Zerlegen eines Vektors in zwei
senkrechte Anteile kennst du aus dem Mathematikkurs, Kapitel [Vektoren](/lernen/mathe3/vektoren).

Die Stärke eines Magnetfeldes gibt man als **magnetische Flussdichte** $B$ an. Ihre Einheit ist das **Tesla** (T).
Genau definiert wird $B$ über die Kraft auf einen Strom in [14.2 Die Kraft auf einen stromdurchflossenen Leiter](/lernen/physik1/magnetismus-wechselstrom/die-kraft-auf-einen-stromdurchflossenen-leiter).
Fürs Erste genügen Größenordnungen: Das Erdfeld hat etwa $50\,\mu\text{T}$, ein Kühlschrankmagnet einige Millitesla,
ein starker Neodym-Magnet etwa $1\,\text{T}$.

:::beispiel[Das Erdfeld in Wien zerlegen]
In Wien beträgt die Flussdichte des Erdfeldes etwa $B = 48\,\mu\text{T}$. Die Inklination ist $64^\circ$. Wie groß
sind der waagrechte und der senkrechte Anteil?

**Schritt 1, Skizze:** Das Feld ist ein Pfeil der Länge $48\,\mu\text{T}$, der um $64^\circ$ unter die Waagrechte
zeigt. Der waagrechte und der senkrechte Anteil bilden mit ihm ein rechtwinkliges Dreieck. Der Feldpfeil ist die
Hypotenuse.

**Schritt 2, waagrechter Anteil:** Die Horizontalkomponente liegt am Winkel an, also gehört der Kosinus dazu:
$B_h = B\cos 64^\circ = 48\,\mu\text{T}\cdot 0{,}438 = 21\,\mu\text{T}$.

**Schritt 3, senkrechter Anteil:** Die Vertikalkomponente liegt dem Winkel gegenüber:
$B_v = B\sin 64^\circ = 48\,\mu\text{T}\cdot 0{,}899 = 43\,\mu\text{T}$.

**Probe:** $\sqrt{21^2 + 43^2}\,\mu\text{T} = \sqrt{2290}\,\mu\text{T} \approx 48\,\mu\text{T}$. Die Kompassnadel
spürt also nur $21\,\mu\text{T}$, weniger als die Hälfte des ganzen Feldes.
:::

```aufgabe
id: p14-1-erdfeld
titel: Das ganze Erdfeld aus der Horizontalkomponente
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  An einem Ort misst man die Horizontalkomponente des Erdfeldes zu $B_h = 20\,\mu\text{T}$. Die Inklination beträgt $65^\circ$. Wie groß ist die gesamte Flussdichte $B$? Gib das Ergebnis in $\mu\text{T}$ auf drei Stellen an.
teile:
  - typ: zahl
    loesung: "20/cos(inRad(65))"
    einheit: "µT"
    anzeige: '47{,}3'
    fehler:
      - wert: "20*cos(inRad(65))"
        meldung: Du hast mit dem Kosinus multipliziert. Das ergäbe einen Wert, der **kleiner** als die Komponente ist. Das ganze Feld ist aber die Hypotenuse und damit länger als jede Komponente.
      - wert: "20/sin(inRad(65))"
        meldung: Die Horizontalkomponente liegt am Inklinationswinkel **an**. Zur Ankathete gehört der Kosinus, nicht der Sinus.
hinweise:
  - Zeichne das rechtwinklige Dreieck aus $B$ (Hypotenuse), $B_h$ (waagrecht) und $B_v$ (senkrecht). Der Winkel $65^\circ$ liegt zwischen $B$ und der Waagrechten.
  - Es gilt $B_h = B\cos 65^\circ$. Stelle nach $B$ um.
loesung: |
  **Ansatz:** Das Feld $B$ ist die Hypotenuse, die Horizontalkomponente die Ankathete zum Inklinationswinkel. Also gilt $B_h = B\cos 65^\circ$.
  ---
  **Umformen:** Wir teilen beide Seiten durch $\cos 65^\circ$: $B = \dfrac{B_h}{\cos 65^\circ}$.
  ---
  **Rechnung:** $B = \dfrac{20\,\mu\text{T}}{0{,}423} = 47{,}3\,\mu\text{T}$. Plausibel: Das Ergebnis ist größer als $20\,\mu\text{T}$, weil die Hypotenuse die längste Seite ist.
```

### Ørsteds Entdeckung: Strom erzeugt ein Magnetfeld

1820 legte Hans Christian Ørsted einen Draht über eine Kompassnadel und schaltete einen Strom ein. Die Nadel schlug aus.
Damit war gezeigt: **Jeder elektrische Strom ist von einem Magnetfeld umgeben.** Elektrizität und Magnetismus
hängen zusammen.

**Der gerade Leiter.** Um einen langen geraden Draht bilden die Feldlinien **konzentrische Kreise**. Das sind Kreise
mit gemeinsamem Mittelpunkt, nämlich dem Draht. Die Richtung bestimmst du mit der **Rechte-Hand-Regel**: Umfasse den
Draht mit der rechten Hand so, dass der Daumen in die **technische Stromrichtung** zeigt (von Plus nach Minus). Dann
zeigen die gekrümmten Finger in die Richtung der Feldlinien.

```plot
x: [-3.5, 3.5]
y: [-3.5, 3.5]
gleich: true
hoehe: 300
kurven:
  - { x: "1*cos(t)", y: "1*sin(t)", t: [0, "2*pi"], farbe: 0 }
  - { x: "2*cos(t)", y: "2*sin(t)", t: [0, "2*pi"], farbe: 0 }
  - { x: "3*cos(t)", y: "3*sin(t)", t: [0, "2*pi"], farbe: 0 }
vektoren:
  - { von: [1, -0.3], nach: [1, 0.3], farbe: 0 }
  - { von: [0.3, 2], nach: [-0.3, 2], farbe: 0 }
  - { von: [-3, 0.3], nach: [-3, -0.3], farbe: 0 }
  - { von: [-0.3, -3], nach: [0.3, -3], farbe: 0 }
punkte:
  - { x: 0, y: 0, label: "Strom aus der Ebene" }
beschriftung: "Blick von oben auf einen senkrechten Draht, in dem der Strom aus der Zeichenebene heraus auf dich zu fließt (Punkt in der Mitte). Die Feldlinien sind Kreise um den Draht und laufen gegen den Uhrzeigersinn. Nach außen werden sie lockerer, das Feld wird schwächer."
```

Die Flussdichte im Abstand $r$ vom Draht ist
$$B = \frac{\mu_0\,I}{2\pi\,r}.$$
Dabei ist $I$ der Strom im Draht, $r$ der Abstand von der Drahtmitte und $\mu_0$ die **magnetische Feldkonstante**
$\mu_0 = 4\pi\cdot 10^{-7}\,\text{T}\,\text{m}/\text{A}$. Sie ist eine Naturkonstante wie $\varepsilon_0$ in der
Elektrostatik. Die Formel sagt: Doppelter Strom gibt doppeltes Feld, doppelter Abstand halbes Feld.

:::beispiel[Ein Kabel neben dem Kompass]
Ein Kabel führt $16\,\text{A}$. Wie stark ist sein Feld im Abstand $1{,}0\,\text{cm}$? Vergleiche mit der
Horizontalkomponente des Erdfeldes, rund $21\,\mu\text{T}$.

**Schritt 1, Einheiten:** $r = 1{,}0\,\text{cm} = 0{,}010\,\text{m}$.

**Schritt 2, Einsetzen:** Zuerst kürzen wir $\pi$: $\dfrac{\mu_0}{2\pi} = \dfrac{4\pi\cdot 10^{-7}}{2\pi}\,\dfrac{\text{T m}}{\text{A}} = 2\cdot 10^{-7}\,\dfrac{\text{T m}}{\text{A}}$. Damit ist
$B = 2\cdot 10^{-7}\,\dfrac{\text{T m}}{\text{A}}\cdot\dfrac{16\,\text{A}}{0{,}010\,\text{m}} = 3{,}2\cdot 10^{-4}\,\text{T} = 320\,\mu\text{T}$.
Ampere und Meter kürzen sich, es bleibt Tesla.

**Schritt 3, Vergleich:** $320/21 \approx 15$. Das Feld des Kabels ist fünfzehnmal so stark wie das, wonach sich
der Kompass richtet. Ein Kompass direkt neben einem Kabel mit starkem Strom zeigt deshalb falsch.
:::

:::achtung[Fehler: Abstand in Zentimetern eingesetzt]
Ein Schüler rechnet für $I = 16\,\text{A}$ und $r = 1{,}0\,\text{cm}$:
„$B = 2\cdot 10^{-7}\cdot\dfrac{16}{1{,}0} = 3{,}2\cdot 10^{-6}\,\text{T}$.“

Das Ergebnis ist hundertmal zu klein. $\mu_0$ enthält die Einheit Meter, also muss auch $r$ in Metern stehen:
$r = 0{,}010\,\text{m}$. Richtig ist $B = 3{,}2\cdot 10^{-4}\,\text{T}$. Rechne vor dem Einsetzen **jede** Länge in
Meter um.
:::

```aufgabe
id: p14-b-leiter
titel: Feld eines geraden Leiters
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Durch einen langen, geraden Draht fließen $12\,\text{A}$. Wie groß ist die magnetische Flussdichte im Abstand $3{,}0\,\text{cm}$? Gib das Ergebnis in $\mu\text{T}$ an.
teile:
  - typ: zahl
    loesung: "4*pi*1e-7*12/(2*pi*0.030)*1e6"
    einheit: "µT"
    anzeige: '80'
    fehler:
      - wert: "4*pi*1e-7*12/(2*pi*3)*1e6"
        meldung: Du hast den Abstand in Zentimetern eingesetzt. $\mu_0$ rechnet mit Metern, also $r = 0{,}030\,\text{m}$.
      - wert: "4*pi*1e-7*12/0.030*1e6"
        meldung: Im Nenner fehlt $2\pi$. Die Formel lautet $B = \mu_0 I/(2\pi r)$, weil sich das Feld auf den Kreisumfang $2\pi r$ verteilt.
hinweise:
  - 'Verwende $B = \dfrac{\mu_0 I}{2\pi r}$ mit $\mu_0 = 4\pi\cdot 10^{-7}\,\text{T m/A}$ und $r$ in Metern.'
loesung: |
  **Ansatz:** Für einen langen geraden Leiter gilt $B = \dfrac{\mu_0 I}{2\pi r}$. Mit $\dfrac{\mu_0}{2\pi} = 2\cdot 10^{-7}\,\text{T m/A}$ wird die Rechnung einfacher.
  ---
  **Rechnung:** $B = 2\cdot 10^{-7}\,\dfrac{\text{T m}}{\text{A}}\cdot\dfrac{12\,\text{A}}{0{,}030\,\text{m}} = 8{,}0\cdot 10^{-5}\,\text{T} = 80\,\mu\text{T}$. Das ist deutlich mehr als das ganze Erdfeld mit rund $50\,\mu\text{T}$.
```

```aufgabe
id: p14-rechte-hand
titel: Richtung der Feldlinien um einen Draht
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Ein senkrechter Draht führt Strom (technische Stromrichtung) **nach unten**, also von dir weg, wenn du von oben auf ihn schaust. In welche Richtung laufen die Feldlinien um den Draht, von oben gesehen?
teile:
  - typ: auswahl
    optionen:
      - "im Uhrzeigersinn"
      - "gegen den Uhrzeigersinn"
      - "radial vom Draht weg nach außen"
      - "parallel zum Draht nach unten"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Das gilt, wenn der Strom auf dich **zu** fließt. Hier zeigt der Daumen von dir weg nach unten. Dreh die rechte Hand entsprechend.
      - wert: 2
        meldung: Radiale Feldlinien gibt es beim elektrischen Feld einer Punktladung. Magnetische Feldlinien um einen Draht sind geschlossene Kreise.
      - wert: 3
        meldung: Das Feld umkreist den Draht, es läuft nicht entlang des Drahtes. Eine Kompassnadel neben dem Draht stellt sich quer zu ihm.
hinweise:
  - 'Rechte-Hand-Regel: Der Daumen zeigt in Stromrichtung, die gekrümmten Finger zeigen die Feldrichtung.'
loesung: |
  **Ansatz:** Rechte-Hand-Regel. Der Daumen zeigt in die technische Stromrichtung, hier von dir weg nach unten.
  ---
  Schaust du von oben auf deine Faust, während der Daumen von dir weg zeigt, laufen die Finger **im Uhrzeigersinn**. Das ist die Richtung der Feldlinien. Fließt der Strom umgekehrt auf dich zu, laufen sie gegen den Uhrzeigersinn.
```

```aufgabe
id: p14-1-abstand
titel: Was passiert bei doppeltem Abstand?
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  Im Abstand $r$ von einem langen geraden Draht misst man die Flussdichte $B_0$. Nun misst man im Abstand $2r$, der Strom bleibt gleich. Welche Flussdichte misst man jetzt?
teile:
  - typ: auswahl
    optionen:
      - '$B_0/2$'
      - '$B_0/4$'
      - '$2B_0$'
      - '$B_0$, weil der Strom gleich bleibt'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Das gilt für das elektrische Feld einer **Punktladung**, das mit $1/r^2$ abnimmt. Beim langen Draht steht $r$ in $B = \mu_0 I/(2\pi r)$ nur in der ersten Potenz.
      - wert: 2
        meldung: Weiter weg vom Draht wird das Feld schwächer, nicht stärker. Die Feldlinien liegen außen lockerer.
      - wert: 3
        meldung: Der Strom bleibt gleich, aber der Abstand steht im Nenner der Formel. Größerer Abstand heißt schwächeres Feld.
hinweise:
  - Schau, wie $r$ in $B = \dfrac{\mu_0 I}{2\pi r}$ vorkommt.
  - '$B$ ist umgekehrt proportional zu $r$. Was passiert mit einem Bruch, wenn sich sein Nenner verdoppelt?'
loesung: |
  **Ansatz:** $B = \dfrac{\mu_0 I}{2\pi r}$. Strom und Konstanten bleiben gleich, nur $r$ ändert sich.
  ---
  $B$ ist umgekehrt proportional zu $r$. Verdoppelt sich der Nenner, halbiert sich der Bruch: $B(2r) = \dfrac{\mu_0 I}{2\pi\cdot 2r} = \dfrac{B_0}{2}$.
  ---
  **Bild dazu:** Die Feldlinien sind Kreise. Ein Kreis mit doppeltem Radius hat den doppelten Umfang, die gleiche „Feldmenge“ verteilt sich auf die doppelte Länge.
```

### Die Spule: ein Magnet zum Einschalten

Biegt man einen Draht zu einer Schleife, zeigen die Felder aller Drahtstücke im Inneren in dieselbe Richtung und
verstärken sich. Viele Windungen hintereinander bilden eine **Spule**. Im Inneren einer langen, schlanken Spule
verlaufen die Feldlinien parallel und gleich dicht. Ein solches Feld heißt **homogen**, also überall gleich stark und
gleich gerichtet. Außen gleicht das Feld dem eines Stabmagneten.

**Rechte-Hand-Regel für die Spule:** Krümme die Finger der rechten Hand in Stromrichtung um die Windungen. Dann zeigt
der Daumen zum **Nordpol** der Spule, also in Richtung der Feldlinien im Inneren.

```plot
x: [-4, 4]
y: [-3, 3]
gleich: true
hoehe: 300
strecken:
  - { von: [-3, 0.4], nach: [3, 0.4], farbe: 0 }
  - { von: [-3, -0.4], nach: [3, -0.4], farbe: 0 }
kurven:
  - { x: "3.2*cos(t)", y: "2.4*sin(t)", t: [0.15, 2.99], farbe: 0 }
  - { x: "3.2*cos(t)", y: "-2.4*sin(t)", t: [0.15, 2.99], farbe: 0 }
vektoren:
  - { von: [-0.4, 0.4], nach: [0.4, 0.4], farbe: 0 }
  - { von: [-0.4, -0.4], nach: [0.4, -0.4], farbe: 0 }
  - { von: [0.3, 2.4], nach: [-0.3, 2.4], farbe: 0 }
  - { von: [0.3, -2.4], nach: [-0.3, -2.4], farbe: 0 }
punkte:
  - { x: -2, y: 1, label: "⊙" }
  - { x: -1, y: 1, label: "⊙" }
  - { x: 0, y: 1, label: "⊙" }
  - { x: 1, y: 1, label: "⊙" }
  - { x: 2, y: 1, label: "⊙" }
  - { x: -2, y: -1, label: "⊗" }
  - { x: -1, y: -1, label: "⊗" }
  - { x: 0, y: -1, label: "⊗" }
  - { x: 1, y: -1, label: "⊗" }
  - { x: 2, y: -1, label: "⊗" }
  - { x: 3.4, y: 0, label: "N" }
  - { x: -3.4, y: 0, label: "S" }
beschriftung: "Längsschnitt durch eine Spule. Oben kommt der Strom in jeder Windung aus der Zeichenebene heraus (⊙), unten fließt er hinein (⊗). Im Inneren verlaufen die Feldlinien parallel nach rechts, das Feld ist homogen. Außen laufen sie in weiten Bögen zurück. Rechts liegt der Nordpol, links der Südpol, wie bei einem Stabmagneten."
```

:::satz[Magnetfeld einer langen Spule]
Im Inneren einer langen Spule mit $N$ Windungen, der Länge $l$ und dem Strom $I$ gilt
$$B = \mu_0\,\mu_r\,\frac{N\,I}{l}.$$
Dabei ist $\mu_r$ die **Permeabilitätszahl** des Materials im Inneren, eine Zahl ohne Einheit. Sie sagt, um wie viel
das Material das Feld verstärkt. Für Luft gilt $\mu_r \approx 1$, für Eisen einige hundert bis einige tausend.
:::

Der Bruch $N/l$ ist die **Windungsdichte**, also die Zahl der Windungen pro Meter. Die Länge des Drahtes und der
Durchmesser der Spule kommen in der Formel nicht vor. Eine Spule mit Eisenkern heißt **Elektromagnet**. Man kann sie
ein- und ausschalten. Elektromagnete stecken in Relais, Türöffnern, Lautsprechern, Lasthebemagneten und
Kernspintomographen.

:::beispiel[Eine Spule mit und ohne Eisenkern]
Eine Spule hat $400$ Windungen, ist $20\,\text{cm}$ lang und führt $1{,}5\,\text{A}$. Wie groß ist $B$ im Inneren
ohne Kern und mit einem Eisenkern mit $\mu_r = 300$?

**Schritt 1, Windungsdichte:** $\dfrac{N}{l} = \dfrac{400}{0{,}20\,\text{m}} = 2000\,\dfrac{1}{\text{m}}$.

**Schritt 2, ohne Kern** ($\mu_r = 1$):
$B = 4\pi\cdot 10^{-7}\,\dfrac{\text{T m}}{\text{A}}\cdot 2000\,\dfrac{1}{\text{m}}\cdot 1{,}5\,\text{A} = 3{,}77\cdot 10^{-3}\,\text{T} = 3{,}77\,\text{mT}$.

**Schritt 3, mit Eisenkern:** Das Feld wird $300$-mal so stark:
$B = 300\cdot 3{,}77\,\text{mT} = 1{,}13\,\text{T}$.

**Deutung:** Der Eisenkern macht aus einem schwachen Feld ein Feld, das stärker ist als die meisten Dauermagnete.
Ganz beliebig geht das nicht: Ab etwa $2\,\text{T}$ sind alle Weißschen Bezirke ausgerichtet, und Eisen verstärkt
kaum noch weiter.
:::

:::achtung[Fehler: Windungszahl mal Länge statt durch Länge]
Eine Schülerin rechnet für $N = 400$, $l = 20\,\text{cm}$ und $I = 1{,}5\,\text{A}$:
„$B = 4\pi\cdot 10^{-7}\cdot 400\cdot 1{,}5\cdot 0{,}20 = 1{,}5\cdot 10^{-4}\,\text{T}$.“

Sie hat mit der Länge multipliziert statt durch sie zu teilen. Eine längere Spule mit gleich vielen Windungen hat
weniger Windungen pro Meter und daher ein **schwächeres** Feld. Richtig ist
$B = \mu_0\cdot\dfrac{400\cdot 1{,}5}{0{,}20}\,\text{T} = 3{,}77\,\text{mT}$. Die Einheitenprobe deckt den Fehler auf:
$\text{T m/A}\cdot\text{A}\cdot\text{m}$ ergibt $\text{T m}^2$ und nicht Tesla.
:::

:::merke[Flussdichten von Leiter und Spule berechnen]
1. Alle Längen in Meter umrechnen.
2. Gerader Leiter: $B = \dfrac{\mu_0 I}{2\pi r}$, mit $\dfrac{\mu_0}{2\pi} = 2\cdot 10^{-7}\,\text{T m/A}$.
3. Lange Spule: $B = \mu_0\mu_r\dfrac{NI}{l}$, zuerst die Windungsdichte $N/l$ berechnen.
4. Richtung mit der rechten Hand: Daumen in Stromrichtung (Leiter) oder Daumen zum Nordpol (Spule).
5. Größenordnung prüfen: Erdfeld rund $50\,\mu\text{T}$, Eisenkern höchstens etwa $2\,\text{T}$.
:::

```aufgabe
id: p14-spule
titel: Feld einer Spule
niveau: 2
lernziel: 0
kompetenz: rechnen
angabe: |
  Eine $30\,\text{cm}$ lange Spule hat $600$ Windungen und führt $0{,}80\,\text{A}$.

  a) Berechne die Flussdichte im Inneren ohne Kern in mT.

  b) Welche Flussdichte ergibt sich mit einem Eisenkern mit $\mu_r = 250$? Gib sie in T an.
teile:
  - typ: zahl
    label: a) B ohne Kern in mT
    loesung: "4*pi*1e-7*600*0.80/0.30*1000"
    einheit: "mT"
    anzeige: '2{,}01'
    fehler:
      - wert: "4*pi*1e-7*600*0.80/30*1000"
        meldung: Du hast die Länge in Zentimetern eingesetzt. Mit $l = 0{,}30\,\text{m}$ wird das Ergebnis hundertmal größer.
      - wert: "4*pi*1e-7*600*0.80*0.30*1000"
        meldung: Die Länge gehört in den Nenner. Entscheidend ist die Windungsdichte $N/l$, die Zahl der Windungen pro Meter.
  - typ: zahl
    label: b) B mit Eisenkern in T
    loesung: "250*4*pi*1e-7*600*0.80/0.30"
    einheit: "T"
    anzeige: '0{,}503'
    fehler:
      - wert: "250*4*pi*1e-7*600*0.80/0.30*1000"
        meldung: Das ist der Wert in Millitesla. Gefragt ist Tesla, also durch $1000$ teilen.
hinweise:
  - Berechne zuerst die Windungsdichte $N/l$ in Windungen pro Meter.
  - '$B = \mu_0\mu_r\,\dfrac{NI}{l}$. Ohne Kern ist $\mu_r = 1$, mit Kern multiplizierst du das Ergebnis mit $\mu_r$.'
loesung: |
  **Ansatz:** Im Inneren einer langen Spule gilt $B = \mu_0\mu_r\dfrac{NI}{l}$. Die Windungsdichte ist $\dfrac{N}{l} = \dfrac{600}{0{,}30\,\text{m}} = 2000\,\text{m}^{-1}$.
  ---
  **a)** $B = 4\pi\cdot 10^{-7}\,\dfrac{\text{T m}}{\text{A}}\cdot 2000\,\text{m}^{-1}\cdot 0{,}80\,\text{A} = 2{,}01\cdot 10^{-3}\,\text{T} = 2{,}01\,\text{mT}$.
  ---
  **b)** Der Eisenkern verstärkt um den Faktor $\mu_r = 250$: $B = 250\cdot 2{,}01\,\text{mT} = 503\,\text{mT} = 0{,}503\,\text{T}$. Das liegt unter der Sättigung von etwa $2\,\text{T}$, also ist das Ergebnis plausibel.
```

```aufgabe
id: p14-1-kompass
titel: Kompass über einem Draht
niveau: 3
lernziel: 0
kompetenz: modellieren
angabe: |
  Ein langer Draht liegt in Nord-Süd-Richtung genau $5{,}0\,\text{cm}$ über einer Kompassnadel. Ohne Strom zeigt die Nadel nach Norden. Dann fließen $5{,}0\,\text{A}$ durch den Draht. Die Horizontalkomponente des Erdfeldes beträgt $21\,\mu\text{T}$. Um welchen Winkel dreht sich die Nadel aus der Nordrichtung? Runde auf ganze Grad.
teile:
  - typ: zahl
    loesung: "inGrad(atan((2e-7*5.0/0.050)/21e-6))"
    einheit: "°"
    toleranz: 1
    anzeige: '44'
    fehler:
      - wert: "inGrad(atan(21e-6/(2e-7*5.0/0.050)))"
        meldung: Du hast den Bruch umgedreht. Der Tangens des Ablenkwinkels ist das Feld des Drahtes (Gegenkathete) durch das Erdfeld (Ankathete), weil die Nadel ohne Draht nach Norden zeigt.
      - wert: "inGrad(asin((2e-7*5.0/0.050)/21e-6))"
        meldung: Die beiden Felder stehen senkrecht aufeinander und bilden die Katheten eines rechtwinkligen Dreiecks. Der Sinus bräuchte die Hypotenuse, also passt hier der Tangens.
hinweise:
  - Unter dem Draht zeigt sein Feld waagrecht nach Osten oder Westen, also senkrecht zum Erdfeld. Die Nadel stellt sich in Richtung des Gesamtfeldes.
  - 'Berechne zuerst $B_D = \mu_0 I/(2\pi r)$. Für den Winkel gegen Norden gilt $\tan\alpha = B_D/B_h$.'
gefuehrt:
  - text: Wie groß ist die Flussdichte des Drahtes am Ort der Nadel? Gib sie in $\mu\text{T}$ an.
    teil: { typ: zahl, loesung: "2e-7*5.0/0.050*1e6" }
    erklaerung: $B_D = 2\cdot 10^{-7}\,\text{T m/A}\cdot 5{,}0\,\text{A}/0{,}050\,\text{m} = 2{,}0\cdot 10^{-5}\,\text{T} = 20\,\mu\text{T}$.
  - text: Das Drahtfeld zeigt unter dem Draht waagrecht quer zur Nord-Süd-Richtung. In welchem Winkel steht es zum Erdfeld? Gib den Winkel in Grad an.
    teil: { typ: zahl, loesung: "90" }
    erklaerung: Die Kreise um den Draht stehen senkrecht zum Draht. Der Draht läuft nach Norden, also zeigt sein Feld unter ihm nach Osten oder Westen, senkrecht zum Erdfeld.
  - text: Wie groß ist der Tangens des Ablenkwinkels?
    teil: { typ: zahl, loesung: "20/21" }
    erklaerung: Die Felder bilden die Katheten eines rechtwinkligen Dreiecks. Gegenkathete zum Winkel gegen Norden ist das Drahtfeld, Ankathete das Erdfeld, also $\tan\alpha = 20/21 = 0{,}952$.
  - text: Wie groß ist der Winkel in Grad?
    teil: { typ: zahl, loesung: "inGrad(atan(20/21))", toleranz: 1 }
    erklaerung: $\alpha = \arctan 0{,}952 \approx 44^\circ$. Die Nadel dreht sich fast um einen halben rechten Winkel.
loesung: |
  **Modell:** Die Nadel richtet sich nach dem waagrechten Gesamtfeld. Es setzt sich aus der Horizontalkomponente des Erdfeldes (nach Norden) und dem Feld des Drahtes (quer dazu) zusammen.
  ---
  **Feld des Drahtes:** $B_D = \dfrac{\mu_0 I}{2\pi r} = 2\cdot 10^{-7}\,\dfrac{\text{T m}}{\text{A}}\cdot\dfrac{5{,}0\,\text{A}}{0{,}050\,\text{m}} = 2{,}0\cdot 10^{-5}\,\text{T} = 20\,\mu\text{T}$.
  ---
  **Winkel:** Die beiden Felder stehen senkrecht aufeinander. Im rechtwinkligen Dreieck gilt $\tan\alpha = \dfrac{B_D}{B_h} = \dfrac{20\,\mu\text{T}}{21\,\mu\text{T}} = 0{,}952$, also $\alpha = 44^\circ$.
  ---
  **Plausibilität:** Beide Felder sind fast gleich stark, also muss die Nadel fast genau in der Mitte zwischen den Richtungen stehen, bei knapp $45^\circ$. Genau so hat Ørsted 1820 den Zusammenhang entdeckt.
```

```aufgabe
id: p14-1-monopol-text
titel: Pole und Ladungen vergleichen
niveau: 3
lernziel: 0
kompetenz: begruenden
angabe: |
  Ein Mitschüler sagt: „Magnetismus ist dasselbe wie Elektrizität. Der Nordpol ist die positive, der Südpol die negative Ladung.“ Nenne drei Beobachtungen, die dieser Aussage widersprechen, und erkläre, woher Magnetismus tatsächlich kommt.
teile:
  - typ: text
    muster: |
      1. Ladungen lassen sich trennen, Magnetpole nicht: Ein zerbrochener Magnet ergibt zwei vollständige Magnete. Es gibt keine Monopole.
      2. Ein Magnet ist elektrisch neutral. Eine ruhende Ladung spürt neben ihm keine Kraft. Ein Magnetfeld wirkt nur auf bewegte Ladungen.
      3. Magnetische Feldlinien sind geschlossen, elektrische beginnen und enden an Ladungen.
      Magnetismus entsteht durch bewegte Ladungen: Ströme in Drähten und die Kreisströme (Spins) der Elektronen in den Atomen. Jeder Kreisstrom ist ein Elementarmagnet mit zwei Seiten.
hinweise:
  - Was passiert, wenn man einen Magneten zerbricht? Was passiert mit einer ruhenden Ladung neben einem Magneten?
  - Vergleiche die Feldlinienbilder. Wo beginnen elektrische Feldlinien, wo magnetische?
loesung: |
  **Ansatz:** Man vergleicht, wie sich Ladungen und Pole verhalten, wenn man sie trennt, wenn man eine Probeladung hinlegt und wenn man Feldlinien zeichnet.
  ---
  **Drei Widersprüche:** Pole lassen sich nicht trennen, Ladungen schon. Eine ruhende Ladung spürt neben einem Magneten keine Kraft. Magnetische Feldlinien sind geschlossen, elektrische nicht.
  ---
  **Ursache:** Magnetismus entsteht durch bewegte Ladungen. In Drähten sind das Ströme, in Dauermagneten die Kreisströme der Elektronen. Jeder Kreisstrom hat zwei Seiten, deshalb gibt es Pole nur paarweise. Elektrizität und Magnetismus hängen also eng zusammen, sind aber nicht dasselbe.
```

## Die Kraft auf einen stromdurchflossenen Leiter

```aufgabe
id: p14-2-check
art: check
titel: "Vorwissen: Gewichtskraft eines Drahtes"
niveau: 1
angabe: |
  Ein Kupferdraht hat die Masse $15\,\text{g}$. Wie groß ist seine Gewichtskraft ($g = 9{,}81\,\text{m/s}^2$)? Gib das Ergebnis in N auf drei Stellen an.
teile:
  - typ: zahl
    loesung: "0.015*9.81"
    einheit: "N"
    anzeige: '0{,}147'
    fehler:
      - wert: "15*9.81"
        meldung: Du hast die Masse in Gramm eingesetzt. Für Newton brauchst du Kilogramm, also $m = 0{,}015\,\text{kg}$.
hinweise:
  - Die Gewichtskraft ist $F_G = m\cdot g$ mit der Masse in Kilogramm.
loesung: |
  Die Gewichtskraft ist $F_G = m\cdot g$. Dafür rechnen wir die Masse in Kilogramm um: $15\,\text{g} = 0{,}015\,\text{kg}$.
  ---
  $F_G = 0{,}015\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 0{,}147\,\text{N}$. Wiederholen: [3.4 Gewichtskraft, Normalkraft, Federkraft und Seilkraft](/lernen/physik1/dynamik/gewichtskraft-normalkraft-federkraft-und-seilkraft).
```

**Worum geht es in diesem Abschnitt?** Ein Magnetfeld übt auf einen Draht, durch den Strom fließt, eine Kraft aus.
Über genau diese Kraft definiert man die Stärke des Magnetfeldes, die **magnetische Flussdichte** $B$. Du lernst,
wie groß die Kraft ist, in welche Richtung sie zeigt und warum sich eine Leiterschleife im Feld dreht. Das ist das
Grundprinzip jedes Elektromotors.

### Die Leiterschaukel

Man hängt ein kurzes, waagrechtes Drahtstück an zwei biegsamen Zuleitungen zwischen die Pole eines Hufeisenmagneten.
Diese Anordnung heißt **Leiterschaukel**. Solange kein Strom fließt, hängt sie still. Schaltet man einen Strom ein,
schwingt der Draht zur Seite. Dreht man die Stromrichtung um, schwingt er zur anderen Seite. Messungen zeigen:

- Die Kraft steht **senkrecht** auf dem Draht und **senkrecht** auf den Feldlinien.
- Sie ist proportional zur Stromstärke $I$: doppelter Strom, doppelte Kraft.
- Sie ist proportional zur Länge $l$ des Drahtstücks im Feld.
- Sie ist am größten, wenn der Draht senkrecht zu den Feldlinien liegt, und null, wenn er parallel zu ihnen liegt.

Die Kraft ist also proportional zum Produkt $I\cdot l$. Der Proportionalitätsfaktor hängt nur vom Magneten ab. Bei
einem starken Magneten ist er groß, bei einem schwachen klein. Genau diesen Faktor nimmt man als Maß für die Stärke
des Feldes.

:::definition[Magnetische Flussdichte]
Ein gerader Leiter der Länge $l$, durch den der Strom $I$ **senkrecht** zu den Feldlinien fließt, erfährt die Kraft
$$F = B\cdot I\cdot l.$$
Die Größe $B = \dfrac{F}{I\cdot l}$ heißt **magnetische Flussdichte**. Ihre Einheit ist das Tesla:
$1\,\text{T} = 1\,\dfrac{\text{N}}{\text{A}\,\text{m}}$.

Schließen Leiter und Feldlinien den Winkel $\alpha$ ein, zählt nur der Stromanteil senkrecht zum Feld:
$$F = B\cdot I\cdot l\cdot\sin\alpha.$$
**Beispiel:** $B = 1\,\text{T}$ heißt, dass ein $1\,\text{m}$ langer Draht mit $1\,\text{A}$ senkrecht zum Feld die
Kraft $1\,\text{N}$ erfährt. **Kein Beispiel für eine Kraft:** Liegt der Draht parallel zu den Feldlinien
($\alpha = 0^\circ$), ist $\sin\alpha = 0$, und es wirkt **keine** Kraft, egal wie stark Strom und Feld sind.
:::

Zur Einordnung: Das Erdfeld hat etwa $50\,\mu\text{T} = 5\cdot 10^{-5}\,\text{T}$. Ein Kühlschrankmagnet hat einige
Millitesla, ein starker Neodym-Magnet etwa $1\,\text{T}$, ein Kernspintomograph $1{,}5$ bis $3\,\text{T}$.

:::beispiel[Kraft auf die Leiterschaukel]
Das Drahtstück einer Leiterschaukel ist $5{,}0\,\text{cm}$ lang und liegt senkrecht zu einem Feld mit
$B = 0{,}25\,\text{T}$. Es fließen $4{,}0\,\text{A}$. Wie groß ist die Kraft?

**Schritt 1, Einheiten:** $l = 5{,}0\,\text{cm} = 0{,}050\,\text{m}$.

**Schritt 2, Formel:** Der Draht liegt senkrecht zum Feld, also $\sin 90^\circ = 1$ und $F = BIl$.

**Schritt 3, Rechnung:** $F = 0{,}25\,\dfrac{\text{N}}{\text{A m}}\cdot 4{,}0\,\text{A}\cdot 0{,}050\,\text{m} = 0{,}050\,\text{N} = 50\,\text{mN}$.
Ampere und Meter kürzen sich, es bleibt Newton.

**Einordnung:** $50\,\text{mN}$ entspricht dem Gewicht von etwa $5\,\text{g}$. Das reicht, um einen leichten Draht
deutlich auszulenken.
:::

### Die Richtung der Kraft: Drei-Finger-Regel

Die Kraft steht senkrecht auf Strom und Feld. Zu welcher der beiden möglichen Seiten sie zeigt, sagt die
**Drei-Finger-Regel der rechten Hand**:

1. Der **Daumen** zeigt in die technische Stromrichtung. Der Strom ist die **U**rsache.
2. Der **Zeigefinger** zeigt in Richtung der Feldlinien, also vom Nord- zum Südpol. Das Feld ist die **V**ermittlung.
3. Der abgespreizte **Mittelfinger** zeigt dann in Richtung der Kraft. Sie ist die **W**irkung.

Merkspruch: **U-V-W**, Daumen, Zeigefinger, Mittelfinger. Alle drei Finger stehen senkrecht aufeinander, wie die
Kanten einer Würfelecke.

In Zeichnungen stellt man ein Feld, das senkrecht in die Zeichenebene hineinzeigt, mit Kreuzen dar (⊗, wie das Ende
eines Pfeils von hinten). Ein Feld, das aus der Ebene herauszeigt, zeichnet man mit Punkten (⊙, wie eine Pfeilspitze
von vorne).

```plot
x: [-3, 3]
y: [-2, 3]
gleich: true
hoehe: 290
punkte:
  - { x: -2, y: 1.5, label: "×" }
  - { x: -1, y: 1.5, label: "×" }
  - { x: 1, y: 1.5, label: "×" }
  - { x: 2, y: 1.5, label: "×" }
  - { x: -2, y: -1, label: "×" }
  - { x: -1, y: -1, label: "×" }
  - { x: 0, y: -1, label: "×" }
  - { x: 1, y: -1, label: "×" }
  - { x: 2, y: -1, label: "×" }
  - { x: -2.6, y: 2.6, label: "B in die Ebene" }
strecken:
  - { von: [-2.8, 0.2], nach: [2.8, 0.2], farbe: 3 }
vektoren:
  - { von: [-1.6, 0.5], nach: [-0.2, 0.5], label: "I", farbe: 1 }
  - { von: [0.6, 0.2], nach: [0.6, 2.2], label: "F", farbe: 2 }
beschriftung: "Ein waagrechter Draht (violett) liegt in einem Magnetfeld, das in die Zeichenebene hineinzeigt (Kreuze). Der Strom I fließt nach rechts. Nach der Drei-Finger-Regel zeigt die Kraft F nach oben, senkrecht auf Strom und Feld."
```

Prüfe die Regel am Bild: Daumen nach rechts, Zeigefinger in die Ebene hinein, dann zeigt der Mittelfinger nach oben.
Für Elektronen, die sich in die Gegenrichtung bewegen, kehrt sich die Kraft um. Deshalb richtet man den Daumen immer
nach der **technischen** Stromrichtung aus.

:::achtung[Fehler: linke Hand statt rechter Hand]
Ein Schüler bestimmt die Kraft im Bild mit der **linken** Hand: Daumen nach rechts, Zeigefinger in die Ebene. Sein
Mittelfinger zeigt nach unten, und er schreibt: „Die Kraft zeigt nach unten.“

Mit der linken Hand kommt immer genau die **Gegenrichtung** heraus. Richtig ist „nach oben“. Die linke Hand gibt nur
dann das richtige Ergebnis, wenn man den Daumen in die Bewegungsrichtung der **Elektronen** hält. Am sichersten ist:
immer rechte Hand, immer technische Stromrichtung.
:::

```aufgabe
id: p14-2-richtung
titel: Richtung der Kraft bestimmen
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Ein Draht liegt in der Zeichenebene, der Strom fließt im Bild **nach oben**. Das Magnetfeld zeigt **aus der Zeichenebene heraus** (Punkte). In welche Richtung zeigt die Kraft auf den Draht?
teile:
  - typ: auswahl
    optionen:
      - "nach rechts"
      - "nach links"
      - "nach unten"
      - "aus der Zeichenebene heraus"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Das ist die Gegenrichtung. Prüfe, ob du die rechte Hand verwendest und ob der Zeigefinger wirklich **aus** der Ebene heraus auf dich zeigt.
      - wert: 2
        meldung: Die Kraft steht senkrecht auf dem Strom. Nach unten wäre parallel zum Draht, also kann das nicht sein.
      - wert: 3
        meldung: Die Kraft steht auch senkrecht auf dem Feld. Das Feld zeigt aus der Ebene heraus, also kann die Kraft nicht in diese Richtung zeigen.
hinweise:
  - 'Rechte Hand: Daumen nach oben (Strom), Zeigefinger zu dir (Feld aus der Ebene). Wohin zeigt der Mittelfinger?'
loesung: |
  **Ansatz:** Drei-Finger-Regel der rechten Hand. Daumen in Stromrichtung (nach oben), Zeigefinger in Feldrichtung (aus der Ebene heraus, zu dir).
  ---
  Der abgespreizte Mittelfinger zeigt dann **nach rechts**. Probe: Die Kraft steht senkrecht auf dem Strom (oben) und senkrecht auf dem Feld (zu dir). Nur rechts und links erfüllen das, und die rechte Hand wählt rechts.
```

:::beispiel[Eine Oberleitung im Erdfeld]
Eine Straßenbahn zieht $400\,\text{A}$ durch ihre Oberleitung. Ein $50\,\text{m}$ langes Stück zwischen zwei Masten
verläuft waagrecht von Ost nach West. Die Horizontalkomponente des Erdfeldes beträgt $21\,\mu\text{T}$ und zeigt
nach Norden. Wie groß ist die Kraft, die diese Horizontalkomponente auf das Leitungsstück ausübt?

**Schritt 1, Winkel:** Die Leitung läuft von Ost nach West, das Feld nach Norden. Beide stehen senkrecht
aufeinander, also $\alpha = 90^\circ$.

**Schritt 2, Rechnung:** $F = BIl = 21\cdot 10^{-6}\,\dfrac{\text{N}}{\text{A m}}\cdot 400\,\text{A}\cdot 50\,\text{m} = 0{,}42\,\text{N}$.

**Schritt 3, Einordnung:** Das entspricht dem Gewicht von gut $40\,\text{g}$, verteilt auf $50\,\text{m}$ Draht.
Die Leitung selbst wiegt hunderte Kilogramm. Auch die senkrechte Komponente des Erdfeldes (in Wien rund
$43\,\mu\text{T}$) steht senkrecht auf der Leitung und drückt sie mit etwa $0{,}86\,\text{N}$ waagrecht zur Seite.
Selbst beide zusammen sind winzig. Das Erdfeld ist für Kräfte auf Leitungen also bedeutungslos. Bei einer Leitung in
Nord-Süd-Richtung wäre der Winkel zur Horizontalkomponente $0^\circ$, dann gäbe es von ihr gar keine Kraft.
:::

:::achtung[Fehler: Kosinus statt Sinus]
Ein Draht mit $10\,\text{cm}$ Länge führt $2{,}5\,\text{A}$ in einem Feld mit $0{,}80\,\text{T}$. Er schließt mit den
Feldlinien $30^\circ$ ein. Eine Schülerin rechnet:
„$F = BIl\cos 30^\circ = 0{,}80\cdot 2{,}5\cdot 0{,}10\cdot 0{,}866\,\text{N} = 0{,}173\,\text{N}$.“

Der Winkel ist zwischen Draht und **Feld** gemessen. Bei $0^\circ$ liegt der Draht parallel zum Feld, und die Kraft
muss null sein. Mit dem Kosinus käme dort aber der größte Wert heraus. Richtig ist der Sinus:
$F = 0{,}80\cdot 2{,}5\cdot 0{,}10\cdot\sin 30^\circ\,\text{N} = 0{,}10\,\text{N}$. Prüfe immer den Grenzfall
„parallel“, dann wählst du die richtige Winkelfunktion.
:::

```aufgabe
id: p14-kraft-leiter
titel: Kraft auf einen Leiter
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Ein Leiterstück von $20\,\text{cm}$ Länge führt $3{,}0\,\text{A}$ in einem Magnetfeld mit $B = 0{,}50\,\text{T}$.

  a) Wie groß ist die Kraft in N, wenn der Leiter senkrecht zu den Feldlinien liegt?

  b) Wie groß ist sie in N, wenn er mit den Feldlinien einen Winkel von $30^\circ$ einschließt?
teile:
  - typ: zahl
    label: a) in N
    loesung: "0.50*3.0*0.20"
    einheit: "N"
    anzeige: '0{,}30'
    fehler:
      - wert: "0.50*3.0*20"
        meldung: Du hast die Länge in Zentimetern eingesetzt. Ein Tesla ist $1\,\text{N}/(\text{A m})$, also muss $l = 0{,}20\,\text{m}$ eingesetzt werden.
  - typ: zahl
    label: b) in N
    loesung: "0.50*3.0*0.20*sin(inRad(30))"
    einheit: "N"
    anzeige: '0{,}15'
    fehler:
      - wert: "0.50*3.0*0.20*cos(inRad(30))"
        meldung: Du hast den Kosinus genommen. Bei $0^\circ$ liegt der Leiter parallel zum Feld, und die Kraft muss null sein. Das liefert nur der Sinus.
hinweise:
  - '$F = B\cdot I\cdot l\cdot\sin\alpha$, wobei $\alpha$ der Winkel zwischen Leiter und Feldlinien ist. Länge in Meter.'
loesung: |
  **a)** Senkrecht heißt $\sin 90^\circ = 1$: $F = BIl = 0{,}50\,\dfrac{\text{N}}{\text{A m}}\cdot 3{,}0\,\text{A}\cdot 0{,}20\,\text{m} = 0{,}30\,\text{N}$.
  ---
  **b)** Nur der Stromanteil senkrecht zum Feld zählt: $F = BIl\sin 30^\circ = 0{,}30\,\text{N}\cdot 0{,}5 = 0{,}15\,\text{N}$. Die halbe Kraft, weil $\sin 30^\circ = \tfrac12$ ist.
```

```aufgabe
id: p14-leiter-gleichgewicht
titel: Schwebender Draht
niveau: 2
lernziel: 1
kompetenz: modellieren
angabe: |
  Ein waagrechter Kupferstab mit der Masse $12\,\text{g}$ und der Länge $0{,}15\,\text{m}$ liegt senkrecht zu einem waagrechten Magnetfeld mit $B = 0{,}40\,\text{T}$. Welcher Strom muss durch den Stab fließen, damit die magnetische Kraft sein Gewicht gerade trägt? Gib das Ergebnis in A auf drei Stellen an.
teile:
  - typ: zahl
    loesung: "0.012*9.81/(0.40*0.15)"
    einheit: "A"
    anzeige: '1{,}96'
    fehler:
      - wert: "12*9.81/(0.40*0.15)"
        meldung: Du hast die Masse in Gramm eingesetzt. Mit $m = 0{,}012\,\text{kg}$ wird der Strom tausendmal kleiner.
      - wert: "0.012/(0.40*0.15)"
        meldung: Die magnetische Kraft muss die **Gewichtskraft** $m\cdot g$ tragen, nicht die Masse. Du hast $g = 9{,}81\,\text{m/s}^2$ vergessen.
hinweise:
  - 'Zeichne die Kräfte auf den Stab: Die Gewichtskraft zeigt nach unten, die magnetische Kraft muss nach oben zeigen.'
  - 'Gleichgewicht heißt: Beide Kräfte sind gleich groß, $B\cdot I\cdot l = m\cdot g$. Stelle nach $I$ um.'
gefuehrt:
  - text: Wie groß ist die Gewichtskraft des Stabes in N?
    teil: { typ: zahl, loesung: "0.012*9.81" }
    erklaerung: $F_G = 0{,}012\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 0{,}118\,\text{N}$.
  - text: Die magnetische Kraft $F = BIl$ muss genau so groß sein. Welche Kraft liefert $1\,\text{A}$ in diesem Feld? Gib sie in N an.
    teil: { typ: zahl, loesung: "0.40*1*0.15" }
    erklaerung: $B\cdot 1\,\text{A}\cdot l = 0{,}40\cdot 1\cdot 0{,}15\,\text{N} = 0{,}060\,\text{N}$ pro Ampere.
  - text: Wie viele Ampere braucht man also?
    teil: { typ: zahl, loesung: "0.012*9.81/(0.40*0.15)" }
    erklaerung: $I = 0{,}118\,\text{N} / 0{,}060\,\text{N/A} = 1{,}96\,\text{A}$.
  - text: Überlege, ohne zu rechnen, warum die Stromrichtung wichtig ist.
    erklaerung: Bei falscher Stromrichtung zeigt die magnetische Kraft nach unten und verstärkt das Gewicht. Die Richtung wählt man mit der Drei-Finger-Regel so, dass die Kraft nach oben zeigt.
loesung: |
  **Modell:** Auf den Stab wirken zwei Kräfte, die Gewichtskraft nach unten und die magnetische Kraft nach oben. Er schwebt, wenn beide gleich groß sind (erstes Newtonsches Axiom).

  ```plot
  x: [-2, 2]
  y: [-2, 2]
  gleich: true
  hoehe: 220
  strecken:
    - { von: [-1.5, 0], nach: [1.5, 0], farbe: 3 }
  vektoren:
    - { von: [0, 0], nach: [0, 1.6], label: "F = B·I·l", farbe: 2 }
    - { von: [0, 0], nach: [0, -1.6], label: "F_G = m·g", farbe: 1 }
  ```
  ---
  **Gleichung:** $B\cdot I\cdot l = m\cdot g$. Wir teilen durch $B\cdot l$: $I = \dfrac{m g}{B l}$.
  ---
  **Rechnung:** $I = \dfrac{0{,}012\,\text{kg}\cdot 9{,}81\,\text{m/s}^2}{0{,}40\,\text{T}\cdot 0{,}15\,\text{m}} = \dfrac{0{,}118\,\text{N}}{0{,}060\,\text{N/A}} = 1{,}96\,\text{A}$.
  ---
  **Richtung:** Der Strom muss so fließen, dass die Kraft nach der Drei-Finger-Regel nach oben zeigt. Sonst würde der Stab nach unten gedrückt.
```

```aufgabe
id: p14-2-stromwaage
titel: Flussdichte mit einer Stromwaage messen
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Mit einer Stromwaage misst man die Kraft auf ein $6{,}0\,\text{cm}$ langes Leiterstück senkrecht zum Feld eines Magneten. Bei $2{,}5\,\text{A}$ zeigt die Waage $9{,}0\,\text{mN}$ an. Wie groß ist die Flussdichte? Gib sie in mT an.
teile:
  - typ: zahl
    loesung: "0.009/(2.5*0.060)*1000"
    einheit: "mT"
    anzeige: '60'
    fehler:
      - wert: "0.009/(2.5*6)*1000"
        meldung: Du hast die Länge in Zentimetern eingesetzt. Mit $l = 0{,}060\,\text{m}$ wird das Ergebnis hundertmal größer.
      - wert: "0.009*2.5*0.060*1000"
        meldung: |
          Du hast multipliziert. Aus $F = BIl$ folgt durch Teilen durch $I\cdot l$: $B = F/(I l)$.
hinweise:
  - Stelle $F = B\cdot I\cdot l$ nach $B$ um.
  - 'Rechne vorher um: $9{,}0\,\text{mN} = 0{,}0090\,\text{N}$ und $6{,}0\,\text{cm} = 0{,}060\,\text{m}$. Das Ergebnis kommt in Tesla heraus.'
loesung: |
  **Ansatz:** Die Definition der Flussdichte lautet $B = \dfrac{F}{I\cdot l}$. Das ist eine Umkehraufgabe: Die Kraft ist gegeben, das Feld gesucht.
  ---
  **Rechnung:** $B = \dfrac{0{,}0090\,\text{N}}{2{,}5\,\text{A}\cdot 0{,}060\,\text{m}} = 0{,}060\,\dfrac{\text{N}}{\text{A m}} = 0{,}060\,\text{T}$.
  ---
  **Ergebnis:** $B = 60\,\text{mT}$. Das ist ein typischer Wert für einen Hufeisenmagneten aus der Schulsammlung.
```

### Zwei parallele Leiter

Zwei parallele Drähte, durch die Strom fließt, beeinflussen einander. Jeder Draht liegt im kreisförmigen Feld des
anderen und spürt deshalb eine Kraft. Mit der Rechte-Hand-Regel und der Drei-Finger-Regel findet man:

- **Gleichsinnige** Ströme (gleiche Richtung) **ziehen einander an**.
- **Gegensinnige** Ströme **stoßen einander ab**.

Das ist genau umgekehrt wie bei Ladungen, wo Gleiches einander abstößt. Die Kraft pro Länge folgt, wenn man das Feld
des einen Drahtes, $B = \mu_0 I_1/(2\pi d)$, in $F = B I_2 l$ einsetzt:
$$\frac{F}{l} = \frac{\mu_0\,I_1\,I_2}{2\pi\,d}.$$
Dabei ist $d$ der Abstand der Drähte. Bis 2019 war das **Ampere** über diese Kraft definiert: Zwei Drähte im Abstand
$1\,\text{m}$ mit je $1\,\text{A}$ ziehen einander pro Meter mit $2\cdot 10^{-7}\,\text{N}$ an. Heute definiert man das
Ampere über die Elementarladung.

```aufgabe
id: p14-parallele-leiter
titel: Zwei parallele Leiter
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Zwei parallele Drähte führen Ströme in **dieselbe** Richtung. Wie verhalten sie sich?
teile:
  - typ: auswahl
    optionen:
      - "Sie ziehen einander an."
      - "Sie stoßen einander ab, weil Gleiches einander abstößt."
      - "Sie üben keine Kraft aufeinander aus, weil Drähte elektrisch neutral sind."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: „Gleiches stößt sich ab“ gilt für Ladungen und für Magnetpole. Für Ströme ist es umgekehrt. Bestimme mit der Drei-Finger-Regel die Kraft auf einen Draht im Feld des anderen.
      - wert: 2
        meldung: Die Drähte sind zwar neutral, aber jeder erzeugt ein Magnetfeld. In diesem Feld wirkt auf den Strom im anderen Draht eine Kraft.
hinweise:
  - Bestimme mit der Rechte-Hand-Regel das Feld von Draht 1 am Ort von Draht 2 und dann mit der Drei-Finger-Regel die Kraft auf Draht 2.
loesung: |
  **Ansatz:** Jeder Draht liegt im kreisförmigen Magnetfeld des anderen. Wir bestimmen das Feld des linken Drahtes am Ort des rechten.
  ---
  Fließen beide Ströme nach oben, zeigt das Feld des linken Drahtes am rechten Draht in die Zeichenebene hinein. Drei-Finger-Regel für den rechten Draht: Daumen nach oben, Zeigefinger in die Ebene, Mittelfinger nach links, also zum linken Draht hin. Gleichsinnige Ströme ziehen einander an.
```

```aufgabe
id: p14-2-kabelkraft
titel: Kraft zwischen zwei Kabeln
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  In einem Verteilerkasten laufen zwei parallele Schienen im Abstand $1{,}0\,\text{cm}$. Beide führen $50\,\text{A}$ in entgegengesetzte Richtungen. Wie groß ist die Kraft pro Meter Länge? Gib sie in N/m an und gib an, ob sie anziehend oder abstoßend ist.
teile:
  - typ: zahl
    loesung: "4*pi*1e-7*50*50/(2*pi*0.010)"
    einheit: "N/m"
    anzeige: '0{,}050'
    fehler:
      - wert: "4*pi*1e-7*50/(2*pi*0.010)"
        meldung: Das ist das Feld eines Drahtes in Tesla. Die Kraft auf den zweiten Draht ist $B\cdot I_2\cdot l$, du musst also noch mit $I_2 = 50\,\text{A}$ multiplizieren.
      - wert: "4*pi*1e-7*50*50/(2*pi*1)"
        meldung: Du hast den Abstand in Zentimetern eingesetzt. Mit $d = 0{,}010\,\text{m}$ wird das Ergebnis hundertmal größer.
hinweise:
  - Berechne zuerst das Feld des ersten Drahtes am Ort des zweiten, dann die Kraft auf den zweiten.
  - '$\dfrac{F}{l} = \dfrac{\mu_0 I_1 I_2}{2\pi d}$. Gegensinnige Ströme stoßen einander ab.'
loesung: |
  **Ansatz:** Draht 1 erzeugt am Ort von Draht 2 das Feld $B = \dfrac{\mu_0 I_1}{2\pi d}$. Darin wirkt auf Draht 2 die Kraft $F = B I_2 l$.
  ---
  **Feld:** $B = 2\cdot 10^{-7}\,\dfrac{\text{T m}}{\text{A}}\cdot\dfrac{50\,\text{A}}{0{,}010\,\text{m}} = 1{,}0\cdot 10^{-3}\,\text{T}$.
  ---
  **Kraft pro Meter:** $\dfrac{F}{l} = B I_2 = 1{,}0\cdot 10^{-3}\,\text{T}\cdot 50\,\text{A} = 0{,}050\,\text{N/m}$. Die Ströme sind gegensinnig, die Schienen **stoßen einander ab**. Bei einem Kurzschluss mit tausendfachem Strom wird die Kraft millionenfach größer. Deshalb müssen Stromschienen fest verschraubt sein.
```

### Das Drehmoment auf eine Leiterschleife

Eine rechteckige Leiterschleife steht drehbar in einem homogenen Feld. Durch die beiden Seiten, die senkrecht zum Feld
liegen, fließt der Strom in **entgegengesetzte** Richtungen. Also erfahren sie entgegengesetzte Kräfte. Die beiden
Kräfte greifen an verschiedenen Stellen an und bilden ein **Kräftepaar**: Sie heben sich in der Summe auf, drehen die
Schleife aber. Das Drehmoment ist
$$M = N\cdot B\cdot I\cdot A\cdot\sin\varphi.$$
Dabei ist $N$ die Zahl der Windungen, $A$ die Fläche der Schleife und $\varphi$ der Winkel zwischen der **Senkrechten
auf die Schleifenfläche** und dem Feld. Das Drehmoment ist am größten, wenn die Schleifenebene parallel zum Feld liegt
($\varphi = 90^\circ$). Es ist null, wenn die Ebene senkrecht zum Feld steht ($\varphi = 0^\circ$). In dieser Stellung
bleibt die Schleife stehen.

Darauf beruht das **Drehspulinstrument** aus dem [Kapitel Gleichstrom](/lernen/physik1/gleichstrom): Eine Spiralfeder
hält die drehbare Spule zurück, und der Zeigerausschlag ist proportional zum Strom. Damit sich eine Schleife dauernd
weiterdreht, muss man den Strom im richtigen Moment umpolen. Wie das geht, steht in
[14.10 Elektromotor, Generator und Transformator](/lernen/physik1/magnetismus-wechselstrom/elektromotor-generator-und-transformator).

```aufgabe
id: p14-2-drehspule
titel: Drehmoment in einem Messinstrument
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Die Drehspule eines Messinstruments hat $100$ Windungen und ist $2{,}0\,\text{cm}$ lang und $1{,}5\,\text{cm}$ breit. Sie liegt mit ihrer Ebene parallel zu einem Feld von $0{,}20\,\text{T}$ und führt $1{,}0\,\text{mA}$. Wie groß ist das Drehmoment? Gib es in $10^{-6}\,\text{N m}$ an.
teile:
  - typ: zahl
    loesung: "100*0.20*1.0e-3*(0.020*0.015)/1e-6"
    anzeige: '6{,}0'
    fehler:
      - wert: "100*0.20*1.0e-3*(2.0*1.5)/1e-6"
        meldung: Du hast die Fläche in $\text{cm}^2$ eingesetzt. $3{,}0\,\text{cm}^2 = 3{,}0\cdot 10^{-4}\,\text{m}^2$, weil $1\,\text{cm}^2 = 10^{-4}\,\text{m}^2$ ist.
      - wert: "100*0.20*1.0*(0.020*0.015)/1e-6"
        meldung: Du hast den Strom in mA eingesetzt. $1{,}0\,\text{mA} = 1{,}0\cdot 10^{-3}\,\text{A}$.
hinweise:
  - Liegt die Spulenebene parallel zum Feld, steht ihre Flächensenkrechte senkrecht zum Feld, also $\varphi = 90^\circ$.
  - '$M = N B I A$ mit $A$ in $\text{m}^2$ und $I$ in A.'
loesung: |
  **Ansatz:** Die Ebene liegt parallel zum Feld, also ist $\sin\varphi = 1$ und das Drehmoment maximal: $M = NBIA$.
  ---
  **Einheiten:** $A = 0{,}020\,\text{m}\cdot 0{,}015\,\text{m} = 3{,}0\cdot 10^{-4}\,\text{m}^2$, $I = 1{,}0\cdot 10^{-3}\,\text{A}$.
  ---
  **Rechnung:** $M = 100\cdot 0{,}20\,\dfrac{\text{N}}{\text{A m}}\cdot 1{,}0\cdot 10^{-3}\,\text{A}\cdot 3{,}0\cdot 10^{-4}\,\text{m}^2 = 6{,}0\cdot 10^{-6}\,\text{N m}$. Das ist winzig. Deshalb braucht ein Messinstrument eine sehr weiche Spiralfeder und ein leichtes Lager.
```

```aufgabe
id: p14-2-messreihe
titel: Flussdichte aus einer Messreihe mit Unsicherheit
niveau: 3
lernziel: 1
kompetenz: anwenden
angabe: |
  Mit einer Stromwaage misst man die Kraft $F$ auf ein Leiterstück der Länge $l = (5{,}0 \pm 0{,}1)\,\text{cm}$ senkrecht zum Feld bei verschiedenen Strömen. Das Diagramm zeigt die Messpunkte und eine Ausgleichsgerade durch den Ursprung.

  Die Messwerte sind: bei $1\,\text{A}$ $6{,}1\,\text{mN}$, bei $2\,\text{A}$ $11{,}8\,\text{mN}$, bei $3\,\text{A}$ $18{,}2\,\text{mN}$ und bei $4\,\text{A}$ $24{,}0\,\text{mN}$.

  a) Lies die Steigung der Ausgleichsgeraden in mN/A ab und berechne daraus $B$ in T.

  b) Die Steigung ist auf $\pm 0{,}15\,\text{mN/A}$ genau. Wie groß ist die Unsicherheit $\Delta B$ in mT? Bei einem Quotienten addieren sich die relativen Unsicherheiten.
plot:
  x: [0, 4.5]
  y: [0, 28]
  achsen: { x: "I in A", y: "F in mN" }
  graphen:
    - { f: "6*x", farbe: 0, von: 0, bis: 4.5 }
  punkte:
    - { x: 0, y: 0 }
    - { x: 1, y: 6.1 }
    - { x: 2, y: 11.8 }
    - { x: 3, y: 18.2 }
    - { x: 4, y: 24.0 }
teile:
  - typ: zahl
    label: a) B in T
    loesung: "6.0e-3/0.050"
    einheit: "T"
    anzeige: '0{,}12'
  - typ: zahl
    label: b) ΔB in mT
    loesung: "0.12*(0.15/6.0+0.1/5.0)*1000"
    einheit: "mT"
    toleranz: 0.3
    anzeige: '5{,}4'
hinweise:
  - Die Steigung ist $F/I$. Lies einen gut ablesbaren Punkt auf der Geraden ab, zum Beispiel bei $I = 4\,\text{A}$.
  - 'Aus $F = BIl$ folgt Steigung $= F/I = B\cdot l$, also $B = \text{Steigung}/l$. Für b) relative Unsicherheiten von Steigung und Länge addieren.'
loesung: |
  **Ansatz:** Nach $F = B\cdot l\cdot I$ ist die Kraft proportional zum Strom. Die Gerade durch den Ursprung hat die Steigung $B\cdot l$.
  ---
  **Steigung:** Bei $I = 4{,}0\,\text{A}$ liegt die Gerade bei $24\,\text{mN}$. Steigung $= 24\,\text{mN}/4{,}0\,\text{A} = 6{,}0\,\text{mN/A} = 6{,}0\cdot 10^{-3}\,\text{N/A}$.
  ---
  **a)** $B = \dfrac{\text{Steigung}}{l} = \dfrac{6{,}0\cdot 10^{-3}\,\text{N/A}}{0{,}050\,\text{m}} = 0{,}12\,\dfrac{\text{N}}{\text{A m}} = 0{,}12\,\text{T}$.
  ---
  **b)** Relative Unsicherheiten: Steigung $0{,}15/6{,}0 = 2{,}5\,\%$, Länge $0{,}1/5{,}0 = 2{,}0\,\%$. Zusammen $4{,}5\,\%$. $\Delta B = 0{,}045\cdot 0{,}12\,\text{T} = 0{,}0054\,\text{T} = 5{,}4\,\text{mT}$.
  ---
  **Ergebnis:** $B = (0{,}120 \pm 0{,}005)\,\text{T}$. Die Ausgleichsgerade nutzt alle fünf Messpunkte. Das ist genauer als ein einzelner Messwert. Mehr zur Messunsicherheit steht im [Kapitel Größen, Einheiten, Messen](/lernen/physik1/groessen-einheiten-messen).
```

```aufgabe
id: p14-2-schleife-text
titel: Warum bleibt eine Leiterschleife stehen?
niveau: 3
lernziel: 1
kompetenz: begruenden
angabe: |
  Eine drehbare rechteckige Leiterschleife mit konstantem Gleichstrom steht zu Beginn mit ihrer Ebene parallel zu einem homogenen Magnetfeld. Sie beginnt sich zu drehen, pendelt dann aber aus und bleibt in einer bestimmten Stellung stehen. Begründe mit den Kräften auf die Seiten der Schleife, in welcher Stellung sie stehen bleibt und warum. Was müsste man tun, damit sie sich dauernd weiterdreht?
teile:
  - typ: text
    muster: |
      Auf die beiden Seiten senkrecht zum Feld wirken entgegengesetzte Kräfte, weil der Strom dort entgegengesetzt fließt. Sie bilden ein Kräftepaar.
      Solange die Schleifenebene schräg zum Feld steht, haben die Kräfte einen Hebelarm und drehen die Schleife. Steht die Ebene senkrecht zum Feld,
      zeigen beide Kräfte genau voneinander weg in der Ebene der Schleife. Der Hebelarm ist null, also ist das Drehmoment null, $M = NBIA\sin\varphi$
      mit $\varphi = 0^\circ$. Die Schleife schwingt durch Trägheit etwas darüber hinaus, wird zurückgedreht und bleibt durch Reibung in dieser Stellung stehen.
      Damit sie sich weiterdreht, muss man den Strom genau in dieser Stellung umpolen. Dann kehren sich die Kräfte um und drehen die Schleife weiter. Das macht der Kommutator im Gleichstrommotor.
hinweise:
  - Zeichne die Schleife von oben in zwei Stellungen. Wo greifen die beiden Kräfte an, und wie groß ist ihr Hebelarm?
  - 'Nutze $M = NBIA\sin\varphi$. Bei welchem Winkel wird $M$ null?'
loesung: |
  **Ansatz:** Die beiden Seiten der Schleife senkrecht zum Feld führen entgegengesetzte Ströme. Sie erfahren daher entgegengesetzte Kräfte, die ein Kräftepaar bilden.
  ---
  **Drehung:** Steht die Schleife schräg, haben die Kräfte einen Hebelarm und erzeugen ein Drehmoment. Steht die Schleifenebene senkrecht zum Feld, liegen beide Kräfte auf einer Linie. Der Hebelarm ist null, also $M = NBIA\sin 0^\circ = 0$. In dieser Stellung bleibt die Schleife nach einigem Pendeln stehen.
  ---
  **Dauerdrehung:** Man polt den Strom genau in dieser Stellung um. Dann kehren sich die Kräfte um und drehen die Schleife weiter. Diese Aufgabe übernimmt im Gleichstrommotor der Kommutator.
```

## Geladene Teilchen im Magnetfeld: Lorentzkraft und Kreisbahn

```aufgabe
id: p14-3-check
art: check
titel: "Vorwissen: Geschwindigkeit nach der Beschleunigungsspannung"
niveau: 1
angabe: |
  Ein Elektron ($e = 1{,}602\cdot 10^{-19}\,\text{C}$, $m_e = 9{,}109\cdot 10^{-31}\,\text{kg}$) wird aus der Ruhe durch die Spannung $200\,\text{V}$ beschleunigt. Welche Geschwindigkeit erreicht es? Gib sie in $10^{6}\,\text{m/s}$ an.
teile:
  - typ: zahl
    loesung: "sqrt(2*1.602e-19*200/9.109e-31)/1e6"
    anzeige: '8{,}39'
    fehler:
      - wert: "2*1.602e-19*200/9.109e-31/1e6"
        meldung: Du hast die Wurzel vergessen. Aus $\tfrac12 m v^2 = eU$ folgt $v^2 = 2eU/m$, also $v = \sqrt{2eU/m}$.
      - wert: "sqrt(1.602e-19*200/9.109e-31)/1e6"
        meldung: Der Faktor $2$ fehlt. Er kommt aus dem $\tfrac12$ in der Bewegungsenergie $\tfrac12 m v^2$.
hinweise:
  - Die gewonnene Energie $eU$ wird zu Bewegungsenergie $\tfrac12 m v^2$. Stelle nach $v$ um.
loesung: |
  Energieerhaltung: Die elektrische Energie $eU$ wird ganz zu Bewegungsenergie, $eU = \tfrac12 m_e v^2$. Umgestellt: $v = \sqrt{\dfrac{2eU}{m_e}}$.
  ---
  $v = \sqrt{\dfrac{2\cdot 1{,}602\cdot 10^{-19}\,\text{C}\cdot 200\,\text{V}}{9{,}109\cdot 10^{-31}\,\text{kg}}} = 8{,}39\cdot 10^{6}\,\text{m/s}$. Wiederholen: [Kapitel Elektrostatik](/lernen/physik1/elektrostatik), geladene Teilchen im homogenen Feld.
```

**Worum geht es in diesem Abschnitt?** Ein Strom ist nichts anderes als viele bewegte Ladungen. Die Kraft auf einen
Draht ist also die Summe der Kräfte auf alle Ladungsträger darin. Hier betrachten wir ein **einzelnes** geladenes
Teilchen, das durch ein Magnetfeld fliegt. Es läuft auf einer Kreisbahn. Damit misst man die Masse von Elektronen und
Atomen, filtert Geschwindigkeiten und baut Magnetfeldsensoren.

### Die Lorentzkraft

Wir übertragen $F = BIl$ auf ein einzelnes Teilchen mit der Ladung $q$ und der Geschwindigkeit $v$ senkrecht zum Feld.
Das Teilchen braucht für die Strecke $l$ die Zeit $t = l/v$. Während dieser Zeit transportiert es die Ladung $q$ durch
das Leiterstück. Das entspricht dem Strom $I = q/t = qv/l$. Setzt man das ein, wird $I\cdot l = q\cdot v$.

:::satz[Lorentzkraft]
Auf eine Ladung $q$, die sich mit der Geschwindigkeit $v$ senkrecht zu einem Magnetfeld $B$ bewegt, wirkt die
**Lorentzkraft**
$$F_L = q\cdot v\cdot B.$$
Schließen Geschwindigkeit und Feld den Winkel $\alpha$ ein, gilt $F_L = qvB\sin\alpha$. Die Kraft steht immer
senkrecht auf der Geschwindigkeit und senkrecht auf dem Feld.

**Beispiel:** Ein Elektron fliegt quer durch das Feld eines Magneten und wird abgelenkt. **Kein Beispiel für eine
Lorentzkraft:** Ein ruhendes Elektron ($v = 0$) oder eines, das genau entlang der Feldlinien fliegt ($\alpha = 0^\circ$),
spürt keine magnetische Kraft.
:::

Die Richtung findest du mit der Drei-Finger-Regel der rechten Hand. Der Daumen zeigt dabei in die Bewegungsrichtung
einer **positiven** Ladung. Bei einer negativen Ladung, etwa einem Elektron, zeigt die Kraft genau in die
Gegenrichtung.

**Die Lorentzkraft verrichtet keine Arbeit.** Arbeit verrichtet nur der Kraftanteil in Bewegungsrichtung. Die
Lorentzkraft steht aber immer senkrecht zur Bewegung. Sie ändert deshalb die **Richtung** der Geschwindigkeit, aber nie
ihren **Betrag**. Ein Magnetfeld kann ein Teilchen ablenken, aber weder beschleunigen noch bremsen.

:::beispiel[Lorentzkraft gegen Gewichtskraft]
Ein Elektron fliegt mit $3{,}0\cdot 10^{6}\,\text{m/s}$ senkrecht durch ein Feld mit $B = 0{,}050\,\text{T}$. Wie groß
ist die Lorentzkraft, und wie verhält sie sich zur Gewichtskraft des Elektrons?

**Schritt 1, Lorentzkraft:** $F_L = evB = 1{,}602\cdot 10^{-19}\,\text{C}\cdot 3{,}0\cdot 10^{6}\,\text{m/s}\cdot 0{,}050\,\text{T} = 2{,}4\cdot 10^{-14}\,\text{N}$.
Die Einheit stimmt: $\text{C}\cdot\dfrac{\text{m}}{\text{s}}\cdot\dfrac{\text{N}}{\text{A m}} = \dfrac{\text{C}}{\text{s}}\cdot\dfrac{\text{N}}{\text{A}} = \text{N}$, weil $\text{C/s} = \text{A}$ ist.

**Schritt 2, Gewichtskraft:** $F_G = m_e g = 9{,}109\cdot 10^{-31}\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 8{,}9\cdot 10^{-30}\,\text{N}$.

**Schritt 3, Vergleich:** Die Lorentzkraft ist etwa $10^{15}$-mal so groß. Bei Elektronen und Ionen darf man die
Schwerkraft deshalb immer weglassen.
:::

:::achtung[Fehler: Richtung beim Elektron nicht umgedreht]
Ein Elektron fliegt nach rechts durch ein Feld, das in die Zeichenebene zeigt. Eine Schülerin hält den Daumen nach
rechts, den Zeigefinger in die Ebene und liest ab: „Die Kraft zeigt nach oben.“

Das gilt für eine **positive** Ladung. Das Elektron ist negativ, also zeigt die Kraft nach **unten**. Man kann sich
das so merken: Ein Elektron, das nach rechts fliegt, ist wie ein technischer Strom nach links. Halte den Daumen also
gegen die Flugrichtung des Elektrons, dann stimmt die Regel wieder.
:::

```aufgabe
id: p14-3-ruhend
titel: Ein ruhendes Elektron im Magnetfeld
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Ein Elektron ruht genau zwischen den Polen eines starken Hufeisenmagneten. Was passiert mit ihm?
teile:
  - typ: auswahl
    optionen:
      - "Nichts. Auf eine ruhende Ladung wirkt keine magnetische Kraft."
      - "Es wird zum Nordpol gezogen, weil der Nordpol positiv ist."
      - "Es beginnt, auf einem Kreis um die Feldlinien zu laufen."
      - "Es wird entlang der Feldlinien zum Südpol beschleunigt."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Magnetpole sind keine Ladungen. Ein Magnet ist elektrisch neutral. Ein ruhendes Elektron spürt deshalb keine Kraft von ihm.
      - wert: 2
        meldung: Kreisen würde es nur, wenn es sich schon bewegt. Für $v = 0$ ist $F_L = qvB = 0$, und aus der Ruhe kann keine Bewegung entstehen.
      - wert: 3
        meldung: Die Lorentzkraft wirkt nie entlang der Feldlinien, sondern senkrecht zu ihnen. Und für $v = 0$ ist sie ohnehin null.
hinweise:
  - Schau dir die Formel $F_L = q\cdot v\cdot B$ an. Was ist hier $v$?
loesung: |
  **Ansatz:** Die magnetische Kraft auf eine Ladung ist $F_L = qvB$. Sie hängt von der Geschwindigkeit ab.
  ---
  Das Elektron ruht, also $v = 0$ und $F_L = 0$. Es bleibt einfach liegen. Ein Magnetfeld wirkt nur auf **bewegte** Ladungen. Die verbreitete Vorstellung, Magnetpole seien Ladungen, ist falsch.
```

```aufgabe
id: p14-lorentz-elektron
titel: Elektron im Magnetfeld
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Ein Elektron fliegt mit $2{,}0\cdot 10^{6}\,\text{m/s}$ senkrecht zu einem Magnetfeld mit $B = 0{,}10\,\text{T}$.

  a) Wie groß ist die Lorentzkraft? Gib sie in $10^{-14}\,\text{N}$ an.

  b) Welchen Radius hat seine Kreisbahn? Gib ihn in mm an.
teile:
  - typ: zahl
    label: a) F in 10⁻¹⁴ N
    loesung: "1.602e-19*2.0e6*0.10/1e-14"
    anzeige: '3{,}20'
    fehler:
      - wert: "1.602e-19*2.0e6/0.10/1e-14"
        meldung: Du hast durch $B$ geteilt. Die Lorentzkraft ist das **Produkt** $q\cdot v\cdot B$. Ein stärkeres Feld gibt eine größere Kraft.
  - typ: zahl
    label: b) r in mm
    loesung: "9.109e-31*2.0e6/(1.602e-19*0.10)*1000"
    einheit: "mm"
    anzeige: '0{,}114'
    fehler:
      - wert: "1.602e-19*0.10/(9.109e-31*2.0e6)*1000"
        meldung: Du hast den Bruch umgedreht. Aus $evB = m v^2/r$ folgt $r = mv/(eB)$. Ein schnelleres oder schwereres Teilchen läuft auf einem **größeren** Kreis.
hinweise:
  - 'a) $F_L = evB$. b) Die Lorentzkraft wirkt als Zentripetalkraft, $evB = m_e v^2/r$.'
loesung: |
  **a)** $F_L = evB = 1{,}602\cdot 10^{-19}\,\text{C}\cdot 2{,}0\cdot 10^{6}\,\text{m/s}\cdot 0{,}10\,\text{T} = 3{,}20\cdot 10^{-14}\,\text{N}$.
  ---
  **b)** Aus $evB = \dfrac{m_e v^2}{r}$ folgt nach Kürzen eines $v$ und Umstellen $r = \dfrac{m_e v}{eB} = \dfrac{9{,}109\cdot 10^{-31}\,\text{kg}\cdot 2{,}0\cdot 10^{6}\,\text{m/s}}{1{,}602\cdot 10^{-19}\,\text{C}\cdot 0{,}10\,\text{T}} = 1{,}14\cdot 10^{-4}\,\text{m} = 0{,}114\,\text{mm}$. Ein winziger Kreis, weil das Elektron so leicht ist.
```

### Die Kreisbahn im homogenen Feld

Fliegt ein Teilchen senkrecht in ein homogenes Magnetfeld, ist die Lorentzkraft überall gleich groß und zeigt immer
quer zur Bewegung. Genau das braucht eine gleichförmige **Kreisbewegung**: eine Kraft konstanter Größe, die immer zum
Mittelpunkt zeigt. Die Lorentzkraft spielt also die Rolle der **Zentripetalkraft** aus dem
[Kapitel Kreisbewegung und Gravitation](/lernen/physik1/kreisbewegung-gravitation):
$$q\,v\,B = \frac{m\,v^2}{r}.$$
Wir teilen beide Seiten durch $v$ und stellen nach $r$ um:
$$r = \frac{m\,v}{q\,B}.$$
Dabei ist $m$ die Masse und $q$ die Ladung des Teilchens. Schnelle und schwere Teilchen laufen auf großen Kreisen.
Ein starkes Feld zwingt sie auf enge Kreise.

```plot
x: [-3, 3]
y: [-2.6, 2.8]
gleich: true
hoehe: 300
kurven:
  - { x: "2*cos(t)", y: "2*sin(t)", t: [0, "2*pi"], farbe: 0, gestrichelt: true }
vektoren:
  - { von: [0, 2], nach: [1.4, 2], label: "v", farbe: 1 }
  - { von: [0, 2], nach: [0, 0.6], label: "F", farbe: 2 }
punkte:
  - { x: 0, y: 2, label: "+q" }
  - { x: -2.5, y: 2.4, label: "⊙" }
  - { x: 2.5, y: 2.4, label: "⊙" }
  - { x: -2.5, y: -2.2, label: "⊙" }
  - { x: 2.5, y: -2.2, label: "⊙" }
  - { x: 0, y: 0, label: "M" }
beschriftung: "Ein positiv geladenes Teilchen im Magnetfeld, das aus der Zeichenebene herauszeigt (Punkte). Oben auf der Bahn fliegt es nach rechts, die Lorentzkraft F zeigt zum Mittelpunkt M. Das Teilchen läuft im Uhrzeigersinn auf einem Kreis. Ein Elektron würde gegen den Uhrzeigersinn kreisen."
```

Für einen Umlauf braucht das Teilchen die Zeit $T = \dfrac{2\pi r}{v}$. Setzt man $r = mv/(qB)$ ein, kürzt sich $v$:
$$T = \frac{2\pi\,m}{q\,B}.$$
Die **Umlaufdauer hängt nicht von der Geschwindigkeit ab.** Ein doppelt so schnelles Teilchen läuft auf einem doppelt so
großen Kreis und braucht für den doppelten Weg genauso lang. Darauf beruht das **Zyklotron**, ein runder
Teilchenbeschleuniger.

```reflexion
frage: Ein Proton läuft im Magnetfeld auf einem Kreis. Warum wird es dabei nicht schneller, obwohl ständig eine Kraft auf es wirkt?
antwort: |
  Eine Kraft ändert die Geschwindigkeit in der Richtung, in die sie zeigt. Die Lorentzkraft zeigt immer senkrecht zur
  Bewegung, also zum Kreismittelpunkt. Sie hat keinen Anteil in Bewegungsrichtung und verrichtet deshalb keine Arbeit.
  Die Bewegungsenergie bleibt gleich, und damit auch der Betrag der Geschwindigkeit. Die Kraft lenkt nur um. Genauso
  wird der Mond von der Erde ständig angezogen, ohne auf seiner Kreisbahn schneller zu werden.
```

:::beispiel[Elektronen im Fadenstrahlrohr]
In einem **Fadenstrahlrohr** werden Elektronen durch eine Spannung beschleunigt und fliegen dann senkrecht in ein
homogenes Magnetfeld. Das Rohr enthält etwas Gas, das entlang der Bahn leuchtet. So sieht man den Kreis. Die Spannung
ist $U = 250\,\text{V}$, das Feld $B = 0{,}80\,\text{mT}$. Welchen Radius hat der Kreis?

**Schritt 1, Geschwindigkeit aus der Spannung:** Mit $eU = \tfrac12 m_e v^2$ ist
$v = \sqrt{\dfrac{2eU}{m_e}} = \sqrt{\dfrac{2\cdot 1{,}602\cdot 10^{-19}\,\text{C}\cdot 250\,\text{V}}{9{,}109\cdot 10^{-31}\,\text{kg}}} = 9{,}38\cdot 10^{6}\,\text{m/s}$.

**Schritt 2, Radius:** $r = \dfrac{m_e v}{eB} = \dfrac{9{,}109\cdot 10^{-31}\,\text{kg}\cdot 9{,}38\cdot 10^{6}\,\text{m/s}}{1{,}602\cdot 10^{-19}\,\text{C}\cdot 0{,}80\cdot 10^{-3}\,\text{T}} = 0{,}0667\,\text{m}$.

**Schritt 3, Antwort:** Der Kreis hat einen Radius von $6{,}7\,\text{cm}$, gut passend für einen Glaskolben mit etwa
$16\,\text{cm}$ Durchmesser.
:::

:::achtung[Fehler: Spannung statt Geschwindigkeit eingesetzt]
Für das Fadenstrahlrohr mit $U = 250\,\text{V}$ und $B = 0{,}80\,\text{mT}$ rechnet ein Schüler:
„$r = \dfrac{m_e v}{eB} = \dfrac{9{,}109\cdot 10^{-31}\cdot 250}{1{,}602\cdot 10^{-19}\cdot 0{,}80\cdot 10^{-3}}\,\text{m} = 1{,}8\cdot 10^{-6}\,\text{m}$.“

Er hat die Spannung $250\,\text{V}$ als Geschwindigkeit eingesetzt. Spannung ist aber keine Geschwindigkeit. Die
Einheitenprobe zeigt es: $\text{kg}\cdot\text{V}/(\text{C}\cdot\text{T})$ ist kein Meter. Richtig ist der Weg in zwei
Schritten: erst $v$ aus $eU = \tfrac12 m_e v^2$, dann $r$. Ergebnis $6{,}7\,\text{cm}$, nicht wenige Mikrometer.
:::

**Die spezifische Ladung des Elektrons.** Kombiniert man die beiden Gleichungen des Beispiels und eliminiert $v$,
erhält man
$$\frac{e}{m_e} = \frac{2U}{B^2\,r^2}.$$
Man misst $U$, $B$ und $r$ und erhält die **spezifische Ladung** $e/m_e \approx 1{,}76\cdot 10^{11}\,\text{C/kg}$, also
Ladung pro Masse. Zusammen mit $e$ aus dem Millikan-Versuch im [Kapitel Elektrostatik](/lernen/physik1/elektrostatik)
ergibt das die Masse des Elektrons.

```aufgabe
id: p14-fadenstrahlrohr
titel: Spezifische Ladung des Elektrons
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  In einem Fadenstrahlrohr werden Elektronen mit $U = 300\,\text{V}$ beschleunigt. Im Magnetfeld $B = 1{,}2\,\text{mT}$ beschreiben sie einen Kreis mit dem Radius $4{,}87\,\text{cm}$. Berechne $e/m_e$ und gib das Ergebnis in $10^{11}\,\text{C/kg}$ an.
teile:
  - typ: zahl
    loesung: "2*300/((1.2e-3)^2*0.0487^2)/1e11"
    anzeige: '1{,}76'
    fehler:
      - wert: "300/((1.2e-3)^2*0.0487^2)/1e11"
        meldung: Der Faktor $2$ fehlt. Er stammt aus der Bewegungsenergie $\tfrac12 m v^2$.
      - wert: "2*300/((1.2e-3)*0.0487)/1e11"
        meldung: In der Formel stehen $B$ und $r$ im **Quadrat**, $e/m = 2U/(B^2 r^2)$. Beide kommen über $v^2$ hinein.
hinweise:
  - Du brauchst zwei Gleichungen, $eU = \tfrac12 m v^2$ und $r = mv/(eB)$. Die Geschwindigkeit ist unbekannt und muss eliminiert werden.
  - 'Löse die zweite Gleichung nach $v$ auf und setze in die erste ein. Dann ergibt sich $e/m = 2U/(B^2 r^2)$.'
gefuehrt:
  - text: Löse $r = \dfrac{mv}{eB}$ nach $v$ auf. Was steht dann für $v$? Überlege zuerst selbst.
    erklaerung: Multipliziere mit $eB$ und teile durch $m$, also $v = \dfrac{eBr}{m}$.
  - text: Setze das in $eU = \tfrac12 m v^2$ ein und forme nach $e/m$ um. Berechne zuerst $B^2 r^2$ in $\text{T}^2\text{m}^2$, angegeben in $10^{-9}$.
    teil: { typ: zahl, loesung: "(1.2e-3)^2*0.0487^2/1e-9" }
    erklaerung: Aus $eU = \tfrac12 m\,\dfrac{e^2B^2r^2}{m^2}$ folgt $\dfrac{e}{m} = \dfrac{2U}{B^2r^2}$. Hier ist $B^2r^2 = (1{,}2\cdot 10^{-3})^2\cdot 0{,}0487^2 = 3{,}42\cdot 10^{-9}$.
  - text: Berechne nun $e/m$ in $10^{11}\,\text{C/kg}$.
    teil: { typ: zahl, loesung: "2*300/((1.2e-3)^2*0.0487^2)/1e11" }
    erklaerung: $\dfrac{e}{m} = \dfrac{600\,\text{V}}{3{,}42\cdot 10^{-9}\,\text{T}^2\text{m}^2} = 1{,}76\cdot 10^{11}\,\text{C/kg}$.
loesung: |
  **Ansatz:** Zwei Gleichungen mit der Unbekannten $v$: Energie $eU = \tfrac12 m v^2$ und Kreisbahn $r = \dfrac{mv}{eB}$.
  ---
  **Eliminieren:** Aus der Kreisbahn folgt $v = \dfrac{eBr}{m}$. Einsetzen: $eU = \tfrac12 m\dfrac{e^2B^2r^2}{m^2} = \dfrac{e^2B^2r^2}{2m}$. Teilen durch $e$ und Umstellen ergibt $\dfrac{e}{m} = \dfrac{2U}{B^2r^2}$.
  ---
  **Rechnung:** $\dfrac{e}{m} = \dfrac{2\cdot 300\,\text{V}}{(1{,}2\cdot 10^{-3}\,\text{T})^2\cdot(0{,}0487\,\text{m})^2} = 1{,}76\cdot 10^{11}\,\dfrac{\text{C}}{\text{kg}}$. Das ist der Literaturwert.
```

```aufgabe
id: p14-proton-kreis
titel: Proton auf der Kreisbahn
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Ein Proton ($m_p = 1{,}673\cdot 10^{-27}\,\text{kg}$) fliegt mit $1{,}0\cdot 10^{6}\,\text{m/s}$ senkrecht in ein Magnetfeld von $0{,}50\,\text{T}$. Berechne den Bahnradius in cm und die Umlaufdauer in $10^{-7}\,\text{s}$.
teile:
  - typ: zahl
    label: r in cm
    loesung: "1.673e-27*1.0e6/(1.602e-19*0.50)*100"
    einheit: "cm"
    anzeige: '2{,}09'
    fehler:
      - wert: "9.109e-31*1.0e6/(1.602e-19*0.50)*100"
        meldung: Du hast die Elektronenmasse eingesetzt. Das Proton ist rund $1840$-mal schwerer.
  - typ: zahl
    label: T in 10⁻⁷ s
    loesung: "2*pi*1.673e-27/(1.602e-19*0.50)/1e-7"
    anzeige: '1{,}31'
    fehler:
      - wert: "pi*1.673e-27/(1.602e-19*0.50)/1e-7"
        meldung: Du hast nur den halben Umfang genommen. Ein voller Umlauf ist der Kreisumfang $2\pi r$.
hinweise:
  - 'Lorentzkraft gleich Zentripetalkraft: $evB = m_p v^2/r$.'
  - 'Für die Umlaufdauer gilt $T = 2\pi r/v = 2\pi m_p/(eB)$.'
loesung: |
  **Ansatz:** Die Lorentzkraft ist die Zentripetalkraft, also $r = \dfrac{m_p v}{eB}$.
  ---
  **Radius:** $r = \dfrac{1{,}673\cdot 10^{-27}\,\text{kg}\cdot 1{,}0\cdot 10^{6}\,\text{m/s}}{1{,}602\cdot 10^{-19}\,\text{C}\cdot 0{,}50\,\text{T}} = 0{,}0209\,\text{m} = 2{,}09\,\text{cm}$.
  ---
  **Umlaufdauer:** $T = \dfrac{2\pi r}{v} = \dfrac{2\pi\cdot 0{,}0209\,\text{m}}{1{,}0\cdot 10^{6}\,\text{m/s}} = 1{,}31\cdot 10^{-7}\,\text{s}$. Das Proton umrundet den Kreis also rund $7{,}6$ Millionen Mal pro Sekunde, unabhängig von seiner Geschwindigkeit.
```

```aufgabe
id: p14-lorentz-arbeit
titel: Was passiert bei doppelter Geschwindigkeit?
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  Ein Elektron läuft im homogenen Magnetfeld auf einer Kreisbahn. Nun schießt man ein zweites Elektron mit **doppelter** Geschwindigkeit senkrecht in dasselbe Feld. Was gilt für seinen Bahnradius und seine Umlaufdauer?
teile:
  - typ: auswahl
    optionen:
      - "Der Radius verdoppelt sich, die Umlaufdauer bleibt gleich."
      - "Der Radius verdoppelt sich, die Umlaufdauer halbiert sich."
      - "Der Radius halbiert sich, weil die Lorentzkraft doppelt so groß ist."
      - "Radius und Umlaufdauer bleiben gleich, weil das Magnetfeld das Elektron auf die alte Geschwindigkeit abbremst."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Doppelte Geschwindigkeit, aber auch doppelter Kreisumfang. Die Zeit für einen Umlauf bleibt deshalb gleich, $T = 2\pi m/(eB)$ enthält kein $v$.
      - wert: 2
        meldung: Die Kraft verdoppelt sich, aber die nötige Zentripetalkraft $mv^2/r$ wächst mit $v^2$. Zusammen ergibt das $r = mv/(eB)$, also einen **größeren** Kreis.
      - wert: 3
        meldung: Das Magnetfeld kann nicht bremsen. Die Lorentzkraft steht senkrecht zur Bewegung und verrichtet keine Arbeit, der Betrag der Geschwindigkeit bleibt.
hinweise:
  - Schau dir an, wie $v$ in $r = \dfrac{mv}{eB}$ und in $T = \dfrac{2\pi m}{eB}$ vorkommt.
  - '$r$ ist proportional zu $v$. In $T$ kommt $v$ gar nicht vor.'
loesung: |
  **Ansatz:** $r = \dfrac{mv}{eB}$ und $T = \dfrac{2\pi m}{eB}$. Masse, Ladung und Feld bleiben gleich.
  ---
  **Radius:** $r$ ist proportional zu $v$. Doppelte Geschwindigkeit gibt den doppelten Radius.
  ---
  **Umlaufdauer:** $T$ enthält kein $v$, bleibt also gleich. Anschaulich: doppelter Weg mit doppeltem Tempo dauert gleich lang.
```

### Anwendungen: Massenspektrometer, Wien-Filter, Hall-Effekt, Polarlicht

**Massenspektrometer.** Ionen gleicher Ladung werden durch dieselbe Spannung $U$ beschleunigt und fliegen dann in ein
Magnetfeld. Setzt man $v = \sqrt{2qU/m}$ in $r = mv/(qB)$ ein, ergibt sich
$r = \dfrac{1}{B}\sqrt{\dfrac{2mU}{q}}$. Der Radius wächst also mit der Wurzel der Masse. Schwerere Ionen landen
weiter außen. So trennt man **Isotope**, also Atome desselben Elements mit verschiedener Masse, etwa Kohlenstoff-12 und
Kohlenstoff-14.

**Geschwindigkeitsfilter (Wien-Filter).** Ein elektrisches Feld $E$ und ein Magnetfeld $B$ stehen senkrecht zueinander
und senkrecht zum Teilchenstrahl. Die elektrische Kraft $qE$ drückt die Teilchen zur einen Seite, die Lorentzkraft
$qvB$ zur anderen. Geradeaus fliegen nur Teilchen, bei denen sich beide Kräfte aufheben: $qE = qvB$, also $v = E/B$.
Die Ladung kürzt sich heraus.

**Hall-Effekt.** Durch ein flaches Metall- oder Halbleiterplättchen der Breite $b$ fließt ein Strom, quer dazu steht
ein Magnetfeld. Die Lorentzkraft drängt die bewegten Ladungsträger an einen Rand. Dort sammelt sich Ladung, und quer
zum Strom entsteht die **Hall-Spannung** $U_H$. Ihr elektrisches Feld $U_H/b$ hält am Ende der Lorentzkraft die Waage:
$e\,U_H/b = e\,v\,B$, also
$$U_H = v\cdot B\cdot b.$$
Dabei ist $v$ die mittlere Geschwindigkeit der Ladungsträger. Weil $U_H$ proportional zu $B$ ist, misst man mit
**Hall-Sensoren** Magnetfelder, zum Beispiel im Kompass eines Smartphones.

**Polarlichter.** Geladene Teilchen von der Sonne werden vom Erdfeld abgelenkt und auf Schraubenbahnen entlang der
Feldlinien zu den Polgebieten geführt. Dort regen sie die Luft zum Leuchten an. Das Erdmagnetfeld hält so einen
Großteil dieser Teilchenstrahlung von uns fern.

```aufgabe
id: p14-wienfilter
titel: Geschwindigkeitsfilter
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  In einem Wien-Filter herrschen das elektrische Feld $E = 1{,}0\cdot 10^{4}\,\text{V/m}$ und senkrecht dazu das Magnetfeld $B = 0{,}020\,\text{T}$. Welche Geschwindigkeit haben die Teilchen, die unabgelenkt hindurchfliegen? Gib sie in m/s an.
teile:
  - typ: zahl
    loesung: "1.0e4/0.020"
    einheit: "m/s"
    anzeige: '5{,}0\cdot 10^{5}'
    fehler:
      - wert: "1.0e4*0.020"
        meldung: |
          Du hast multipliziert. Aus $qE = qvB$ folgt durch Teilen durch $qB$: $v = E/B$.
      - wert: "0.020/1.0e4"
        meldung: |
          Du hast den Kehrwert berechnet. Die Einheit zeigt es: $\text{T}/(\text{V/m})$ ist keine Geschwindigkeit, $(\text{V/m})/\text{T}$ dagegen schon.
hinweise:
  - Geradeaus fliegt ein Teilchen nur, wenn sich elektrische und magnetische Kraft aufheben.
  - 'Setze $qE = qvB$ und stelle nach $v$ um.'
loesung: |
  **Ansatz:** Die elektrische Kraft $qE$ und die Lorentzkraft $qvB$ zeigen in entgegengesetzte Richtungen. Unabgelenkt fliegt ein Teilchen, wenn beide gleich groß sind: $qE = qvB$.
  ---
  **Umformen:** Wir teilen durch $qB$: $v = \dfrac{E}{B}$. Die Ladung kürzt sich weg.
  ---
  **Rechnung:** $v = \dfrac{1{,}0\cdot 10^{4}\,\text{V/m}}{0{,}020\,\text{T}} = 5{,}0\cdot 10^{5}\,\text{m/s}$. Einheit: $\dfrac{\text{V}}{\text{m}\cdot\text{T}} = \dfrac{\text{V}\,\text{m}^2}{\text{m}\cdot\text{V s}} = \text{m/s}$. Das Ergebnis gilt für Elektronen, Protonen und Ionen gleichermaßen.
```

```aufgabe
id: p14-3-hall
titel: Hall-Spannung in einem Sensor
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  In einem Hall-Sensor aus Halbleitermaterial bewegen sich die Ladungsträger mit der mittleren Geschwindigkeit $2{,}0\,\text{m/s}$. Das Plättchen ist $5{,}0\,\text{mm}$ breit und liegt senkrecht in einem Feld mit $0{,}40\,\text{T}$. Wie groß ist die Hall-Spannung? Gib sie in mV an.
teile:
  - typ: zahl
    loesung: "2.0*0.40*0.0050*1000"
    einheit: "mV"
    anzeige: '4{,}0'
    fehler:
      - wert: "2.0*0.40*5.0*1000"
        meldung: Du hast die Breite in Millimetern eingesetzt. Mit $b = 0{,}0050\,\text{m}$ kommt die Spannung in Volt heraus, dann rechnest du in mV um.
      - wert: "2.0*0.40*0.0050"
        meldung: Das ist die Spannung in Volt. Gefragt sind Millivolt, also mal $1000$.
hinweise:
  - Im Gleichgewicht hält das elektrische Feld der Hall-Spannung der Lorentzkraft die Waage, $e\,U_H/b = evB$.
  - '$U_H = v\cdot B\cdot b$ mit $b$ in Metern.'
loesung: |
  **Ansatz:** Die Ladungsträger werden so lange zur Seite gedrängt, bis das entstehende elektrische Feld die Lorentzkraft ausgleicht. Daraus folgt $U_H = vBb$.
  ---
  **Rechnung:** $U_H = 2{,}0\,\text{m/s}\cdot 0{,}40\,\text{T}\cdot 0{,}0050\,\text{m} = 4{,}0\cdot 10^{-3}\,\text{V}$. Einheit: $\text{m/s}\cdot\text{V s/m}^2\cdot\text{m} = \text{V}$.
  ---
  **Ergebnis:** $U_H = 4{,}0\,\text{mV}$. Das ist gut messbar. In Metallen sind die Elektronen viel langsamer unterwegs, dort ist die Hall-Spannung winzig. Deshalb baut man Hall-Sensoren aus Halbleitern.
```

:::achtung[Fehler: atomare Masseneinheit nicht umgerechnet]
Für ein Kohlenstoff-12-Ion schreibt eine Schülerin $m = 12$ in die Formel $r = \dfrac{1}{B}\sqrt{\dfrac{2mU}{q}}$ und
erhält einen absurd großen Radius. Bei $U = 1000\,\text{V}$ und $B = 0{,}10\,\text{T}$ kommen rund
$4\cdot 10^{12}\,\text{m}$ heraus, also einige Milliarden Kilometer.

Die Masse muss in Kilogramm stehen. Ein Kohlenstoff-12-Atom hat die Masse $12\,\text{u}$, und eine **atomare
Masseneinheit** ist $1\,\text{u} = 1{,}6605\cdot 10^{-27}\,\text{kg}$. Richtig ist
$m = 12\cdot 1{,}6605\cdot 10^{-27}\,\text{kg} = 1{,}993\cdot 10^{-26}\,\text{kg}$. Dann ergibt sich bei denselben
Werten ein Radius von $15{,}8\,\text{cm}$, wie er in ein Messgerät passt.
:::

```aufgabe
id: p14-3-messreihe
titel: Spezifische Ladung aus einer Messreihe
niveau: 3
lernziel: 2
kompetenz: anwenden
angabe: |
  In einem Fadenstrahlrohr mit $B = 1{,}00\,\text{mT}$ werden drei Messungen gemacht: Bei $150\,\text{V}$ misst man den Kreisradius $4{,}1\,\text{cm}$, bei $200\,\text{V}$ den Radius $4{,}8\,\text{cm}$ und bei $250\,\text{V}$ den Radius $5{,}3\,\text{cm}$.

  a) Berechne $e/m_e$ für jede Messung und daraus den Mittelwert in $10^{11}\,\text{C/kg}$ (drei Nachkommastellen).

  b) Schätze die Unsicherheit des Mittelwerts als halbe Spannweite, also halbe Differenz zwischen größtem und kleinstem Einzelwert. Gib sie in $10^{11}\,\text{C/kg}$ an.
teile:
  - typ: zahl
    label: a) Mittelwert in 10¹¹ C/kg
    loesung: "(2*150/(1e-6*0.041^2)+2*200/(1e-6*0.048^2)+2*250/(1e-6*0.053^2))/3/1e11"
    toleranz: 0.005
    anzeige: '1{,}767'
  - typ: zahl
    label: b) Unsicherheit in 10¹¹ C/kg
    loesung: "(2*150/(1e-6*0.041^2)-2*200/(1e-6*0.048^2))/2/1e11"
    toleranz: 0.004
    anzeige: '0{,}024'
hinweise:
  - Verwende für jede Messung $e/m = 2U/(B^2r^2)$ mit $B$ in Tesla und $r$ in Metern.
  - 'Die drei Einzelwerte sind etwa $1{,}785$, $1{,}736$ und $1{,}780$ (je in $10^{11}\,\text{C/kg}$). Mittelwert ist die Summe durch drei, die Spannweite ist größter minus kleinster Wert.'
loesung: |
  **Ansatz:** Für jede Messung gilt $e/m = \dfrac{2U}{B^2r^2}$. Mit $B^2 = (10^{-3}\,\text{T})^2 = 10^{-6}\,\text{T}^2$.
  ---
  **Einzelwerte:** $\dfrac{2\cdot 150\,\text{V}}{10^{-6}\,\text{T}^2\cdot(0{,}041\,\text{m})^2} = 1{,}785\cdot 10^{11}\,\text{C/kg}$, ebenso $\dfrac{400\,\text{V}}{10^{-6}\cdot 0{,}048^2\,\text{T}^2\text{m}^2} = 1{,}736\cdot 10^{11}\,\text{C/kg}$ und $\dfrac{500\,\text{V}}{10^{-6}\cdot 0{,}053^2\,\text{T}^2\text{m}^2} = 1{,}780\cdot 10^{11}\,\text{C/kg}$.
  ---
  **a)** Mittelwert: $(1{,}785 + 1{,}736 + 1{,}780)/3 = 1{,}767$, also $1{,}767\cdot 10^{11}\,\text{C/kg}$.
  ---
  **b)** Spannweite $1{,}785 - 1{,}736 = 0{,}049$. Die halbe Spannweite ist $0{,}024$. Ergebnis: $e/m_e = (1{,}77 \pm 0{,}03)\cdot 10^{11}\,\text{C/kg}$, die Unsicherheit aufgerundet.
  ---
  **Vergleich:** Der Literaturwert $1{,}759\cdot 10^{11}\,\text{C/kg}$ liegt innerhalb dieser Unsicherheit. Die Radien sind nur auf einen Millimeter genau abgelesen. Weil $r$ im Quadrat eingeht, macht schon $1\,\text{mm}$ bei $5\,\text{cm}$ etwa $4\,\%$ Unterschied.
```

## Magnetischer Fluss und Induktionsgesetz

```aufgabe
id: p14-4-check
art: check
titel: "Vorwissen: Mittlere Änderungsrate"
niveau: 1
angabe: |
  Der Wasserstand in einem Becken steigt in $20\,\text{s}$ gleichmäßig von $0$ auf $4{,}0\,\text{cm}$. Wie groß ist die mittlere Änderungsrate des Wasserstands in cm pro Sekunde?
teile:
  - typ: zahl
    loesung: "4.0/20"
    einheit: "cm/s"
    anzeige: '0{,}20'
    fehler:
      - wert: "20/4.0"
        meldung: Du hast Zeit durch Höhe geteilt. Die Änderungsrate ist „Änderung der Größe durch Änderung der Zeit“, also $\Delta h/\Delta t$.
      - wert: "4.0"
        meldung: Das ist die gesamte Änderung. Die Rate sagt, wie viel sich **pro Sekunde** ändert. Teile also noch durch die Zeit.
hinweise:
  - Die mittlere Änderungsrate ist $\dfrac{\Delta h}{\Delta t}$, Änderung der Größe durch die dafür gebrauchte Zeit.
loesung: |
  Die mittlere Änderungsrate ist der Quotient aus der Änderung und der Zeitspanne: $\dfrac{\Delta h}{\Delta t}$.
  ---
  $\dfrac{4{,}0\,\text{cm} - 0}{20\,\text{s}} = 0{,}20\,\text{cm/s}$. Genau so eine Änderungsrate, nämlich die des magnetischen Flusses, bestimmt gleich die induzierte Spannung. Wiederholen: [9.1 Änderungen messen: absolute, relative und mittlere Änderung](/lernen/mathe3/differentialrechnung/aenderungen-messen-absolute-relative-und-mittlere-aenderung).
```

**Worum geht es in diesem Abschnitt?** Ströme erzeugen Magnetfelder. Können umgekehrt Magnetfelder Ströme erzeugen?
Ja, aber nur, wenn sich etwas **ändert**. Diese Entdeckung heißt **elektromagnetische Induktion**. Du lernst die
Größe kennen, deren Änderung zählt, den **magnetischen Fluss**, und das Gesetz, das die erzeugte Spannung angibt.

### Faradays Entdeckung

Michael Faraday verband 1831 eine Spule mit einem empfindlichen Strommesser. Dann machte er drei Versuche:

1. Ein Stabmagnet liegt ruhig in der Spule. Der Zeiger bleibt auf null.
2. Er schiebt den Magneten schnell hinein. Der Zeiger schlägt aus. Zieht er ihn heraus, schlägt der Zeiger zur anderen
   Seite aus.
3. Je schneller er den Magneten bewegt und je mehr Windungen die Spule hat, desto größer ist der Ausschlag.

Ein Magnetfeld allein erzeugt also keine Spannung, auch kein starkes. Es kommt auf die **Änderung** an. Diesen Vorgang
nennt man **Induktion** (von lateinisch *inducere*, hineinführen), die entstehende Spannung **Induktionsspannung**.

### Der magnetische Fluss

Was genau muss sich ändern? Es ist die „Menge an Feld“, die durch die Spule hindurchtritt. Anschaulich ist das die
Zahl der Feldlinien, die durch die Fläche einer Windung gehen. Diese Größe heißt **magnetischer Fluss**.

:::definition[Magnetischer Fluss]
Eine ebene Fläche $A$ liegt in einem homogenen Feld $B$. Die Senkrechte auf die Fläche schließt mit den Feldlinien den
Winkel $\varphi$ ein. Dann ist der magnetische Fluss durch die Fläche
$$\Phi = B\cdot A\cdot\cos\varphi.$$
Seine Einheit ist $1\,\text{T}\cdot\text{m}^2 = 1\,\text{V s} = 1\,\text{Wb}$ (Weber).

**Beispiel:** Eine Schleife mit $A = 0{,}010\,\text{m}^2$ steht senkrecht zu einem Feld mit $0{,}50\,\text{T}$. Ihre
Flächensenkrechte zeigt entlang der Feldlinien, also $\varphi = 0^\circ$ und
$\Phi = 0{,}50\,\text{T}\cdot 0{,}010\,\text{m}^2 = 5{,}0\cdot 10^{-3}\,\text{Wb}$.

**Kein Fluss:** Dreht man dieselbe Schleife so, dass die Feldlinien parallel zu ihrer Fläche verlaufen, ist
$\varphi = 90^\circ$ und $\Phi = 0$. Keine Feldlinie geht durch die Schleife hindurch, sie streifen nur vorbei.
:::

Der Fluss hängt also von drei Dingen ab: von der Stärke des Feldes $B$, von der Fläche $A$ und von der Lage der
Fläche zum Feld, also dem Winkel $\varphi$.

```aufgabe
id: p14-fluss
titel: Magnetischer Fluss
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Eine Leiterschleife mit $50\,\text{cm}^2$ Fläche steht senkrecht zu einem homogenen Feld mit $B = 0{,}20\,\text{T}$.

  a) Wie groß ist der Fluss durch die Schleife in mWb?

  b) Wie groß ist er, wenn die Feldlinien parallel zur Schleifenfläche verlaufen?
teile:
  - typ: zahl
    label: a) senkrecht, in mWb
    loesung: "0.20*50e-4*1000"
    einheit: "mWb"
    anzeige: '1{,}0'
    fehler:
      - wert: "0.20*50*1000"
        meldung: Du hast die Fläche in $\text{cm}^2$ eingesetzt. $50\,\text{cm}^2 = 50\cdot 10^{-4}\,\text{m}^2 = 5{,}0\cdot 10^{-3}\,\text{m}^2$.
  - typ: zahl
    label: b) parallel, in mWb
    loesung: "0"
    einheit: "mWb"
    anzeige: '0'
    fehler:
      - wert: "1"
        meldung: Der Fluss hängt von der Lage ab. Laufen die Feldlinien an der Fläche entlang, tritt keine einzige durch sie hindurch. Dann ist $\cos 90^\circ = 0$.
hinweise:
  - '$\Phi = B\cdot A\cdot\cos\varphi$, wobei $\varphi$ der Winkel zwischen Flächensenkrechte und Feld ist. Fläche in $\text{m}^2$ umrechnen.'
loesung: |
  **a)** Die Schleife steht senkrecht zum Feld, ihre Flächensenkrechte zeigt also entlang der Feldlinien ($\varphi = 0^\circ$): $\Phi = BA = 0{,}20\,\text{T}\cdot 5{,}0\cdot 10^{-3}\,\text{m}^2 = 1{,}0\cdot 10^{-3}\,\text{Wb} = 1{,}0\,\text{mWb}$.
  ---
  **b)** Verlaufen die Feldlinien parallel zur Fläche, ist $\varphi = 90^\circ$ und $\cos 90^\circ = 0$. Es tritt keine Feldlinie hindurch: $\Phi = 0$.
```

### Das Induktionsgesetz

:::satz[Induktionsgesetz]
Ändert sich der magnetische Fluss durch eine Spule mit $N$ Windungen in der Zeit $\Delta t$ um $\Delta\Phi$, so wird die
Spannung
$$U_\text{ind} = -N\cdot\frac{\Delta\Phi}{\Delta t}$$
induziert. Ändert sich der Fluss ungleichmäßig, nimmt man die momentane Änderungsrate, also die Ableitung:
$U_\text{ind} = -N\cdot\dot\Phi$. Der Punkt über $\Phi$ bedeutet „Ableitung nach der Zeit“.
:::

In Worten: Die induzierte Spannung ist umso größer, je **schneller** sich der Fluss ändert und je mehr Windungen die
Spule hat. Jede Windung liefert ihren Beitrag, und alle Windungen sind hintereinandergeschaltet. Deshalb steht $N$ als
Faktor davor. Das Minuszeichen gibt die Richtung an. Es ist so wichtig, dass es in
[14.5 Die Lenzsche Regel: Richtung des Induktionsstroms](/lernen/physik1/magnetismus-wechselstrom/die-lenzsche-regel-richtung-des-induktionsstroms)
einen eigenen Abschnitt bekommt. Für Rechnungen mit Beträgen lässt man es weg.

Die Änderungsrate $\Delta\Phi/\Delta t$ ist genau die mittlere Änderungsrate aus dem Mathematikkurs. Die Ableitung als
momentane Änderungsrate findest du in
[9.3 Die Ableitungsfunktion: die Steigung an jeder Stelle](/lernen/mathe3/differentialrechnung/die-ableitungsfunktion-die-steigung-an-jeder-stelle).
Im Diagramm $\Phi(t)$ ist die induzierte Spannung also die **Steigung** der Kurve, mal $N$.

Weil $\Phi = BA\cos\varphi$ ist, kann sich der Fluss auf drei Arten ändern:

- **Das Feld ändert sich:** Ein Magnet wird bewegt, oder der Strom in einer Nachbarspule wird geschaltet.
- **Die Fläche ändert sich:** Ein Leiter wird durch das Feld bewegt, eine Schleife wird verformt.
- **Der Winkel ändert sich:** Eine Spule dreht sich im Feld. So arbeitet jeder Generator.

:::beispiel[Ein Elektromagnet wird eingeschaltet]
Eine Spule mit $250$ Windungen und $12\,\text{cm}^2$ Querschnitt steht senkrecht in einem Feld. Das Feld steigt in
$50\,\text{ms}$ gleichmäßig von $0$ auf $0{,}30\,\text{T}$. Wie groß ist die induzierte Spannung?

**Schritt 1, Flussänderung:** Nur $B$ ändert sich. $\Delta\Phi = \Delta B\cdot A = 0{,}30\,\text{T}\cdot 12\cdot 10^{-4}\,\text{m}^2 = 3{,}6\cdot 10^{-4}\,\text{Wb}$.

**Schritt 2, Änderungsrate:** $\dfrac{\Delta\Phi}{\Delta t} = \dfrac{3{,}6\cdot 10^{-4}\,\text{Wb}}{0{,}050\,\text{s}} = 7{,}2\cdot 10^{-3}\,\text{V}$, denn $\text{Wb/s} = \text{V s/s} = \text{V}$.

**Schritt 3, mal Windungszahl:** $|U_\text{ind}| = 250\cdot 7{,}2\cdot 10^{-3}\,\text{V} = 1{,}8\,\text{V}$.

**Deutung:** Eine einzelne Windung liefert nur $7{,}2\,\text{mV}$. Erst die vielen Windungen machen daraus eine gut
messbare Spannung. Nach den $50\,\text{ms}$ bleibt das Feld konstant, und die Spannung fällt sofort auf null.
:::

:::achtung[Fehler: Quadratzentimeter nicht umgerechnet]
Für das Beispiel rechnet ein Schüler $A = 12\,\text{cm}^2 = 12\cdot 10^{-2}\,\text{m}^2$ und erhält
$|U| = 250\cdot\dfrac{0{,}30\cdot 0{,}12}{0{,}050}\,\text{V} = 180\,\text{V}$.

Beim Umrechnen von Flächen wird der Faktor **quadriert**: $1\,\text{cm} = 10^{-2}\,\text{m}$, also
$1\,\text{cm}^2 = (10^{-2}\,\text{m})^2 = 10^{-4}\,\text{m}^2$. Richtig ist $A = 12\cdot 10^{-4}\,\text{m}^2$ und
$|U| = 1{,}8\,\text{V}$. Der Fehler macht das Ergebnis hundertmal zu groß.
:::

:::achtung[Fehler: ein starkes Feld mit einer Änderung verwechselt]
Eine Spule mit $100$ Windungen und $0{,}010\,\text{m}^2$ Fläche liegt seit einer Stunde ruhig in einem Feld von
$1{,}0\,\text{T}$. Eine Schülerin rechnet: „$U = N\cdot\dfrac{BA}{t} = 100\cdot\dfrac{1{,}0\cdot 0{,}010}{3600}\,\text{V} = 0{,}28\,\text{mV}$.“

Sie hat den Fluss selbst statt seiner **Änderung** eingesetzt. Der Fluss ist seit einer Stunde konstant, also ist
$\Delta\Phi = 0$ und $U = 0$. Ein Magnetfeld induziert nur dann eine Spannung, wenn sich der Fluss ändert, egal wie
stark das Feld ist.
:::

```aufgabe
id: p14-induktion-spule
titel: Induktion in einer Spule
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Der Fluss durch eine Spule mit $200$ Windungen steigt in $20\,\text{ms}$ gleichmäßig von $0$ auf $4{,}0\,\text{mWb}$. Wie groß ist der Betrag der induzierten Spannung?
teile:
  - typ: zahl
    loesung: "200*4.0e-3/20e-3"
    einheit: "V"
    anzeige: '40'
    fehler:
      - wert: "4.0e-3/20e-3"
        meldung: Das ist die Spannung einer einzigen Windung. Die $200$ Windungen sind hintereinandergeschaltet, ihre Spannungen addieren sich. Multipliziere mit $N$.
      - wert: "200*4.0e-3/20"
        meldung: Du hast die Zeit in Millisekunden eingesetzt. $20\,\text{ms} = 0{,}020\,\text{s}$.
hinweise:
  - '$|U_\text{ind}| = N\cdot\dfrac{\Delta\Phi}{\Delta t}$ mit $\Delta\Phi$ in Wb und $\Delta t$ in s.'
loesung: |
  **Ansatz:** Induktionsgesetz für Beträge: $|U_\text{ind}| = N\dfrac{\Delta\Phi}{\Delta t}$. Hier ist $\Delta\Phi = 4{,}0\cdot 10^{-3}\,\text{Wb}$ und $\Delta t = 0{,}020\,\text{s}$.
  ---
  **Rechnung:** $|U_\text{ind}| = 200\cdot\dfrac{4{,}0\cdot 10^{-3}\,\text{Wb}}{0{,}020\,\text{s}} = 200\cdot 0{,}20\,\text{V} = 40\,\text{V}$. Jede Windung liefert $0{,}20\,\text{V}$.
```

```aufgabe
id: p14-4-wann
titel: Wann wird eine Spannung induziert?
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: |
  Eine Spule ist an ein Messgerät angeschlossen. In welchem Fall wird **keine** Spannung induziert?
teile:
  - typ: auswahl
    optionen:
      - "Ein sehr starker Magnet liegt ruhig in der Spule."
      - "Ein Magnet wird langsam aus der Spule gezogen."
      - "Die Spule wird in einem konstanten Feld um eine Achse quer zum Feld gedreht."
      - "Der Strom in einer Nachbarspule wird eingeschaltet."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Auch eine langsame Bewegung ändert den Fluss, nur langsamer. Es wird eine kleine Spannung induziert. Null ist sie nur ohne Änderung.
      - wert: 2
        meldung: Beim Drehen ändert sich der Winkel zwischen Flächensenkrechte und Feld und damit $\Phi = BA\cos\varphi$. So funktioniert ein Generator.
      - wert: 3
        meldung: Beim Einschalten baut sich das Feld der Nachbarspule auf. Ein Teil davon geht durch unsere Spule, ihr Fluss ändert sich. So arbeitet ein Transformator.
hinweise:
  - Entscheidend ist nicht, wie stark das Feld ist, sondern ob sich der Fluss durch die Spule **ändert**.
  - 'Prüfe für jeden Fall, ob sich $B$, $A$ oder $\varphi$ ändert.'
loesung: |
  **Ansatz:** Nach dem Induktionsgesetz entsteht nur dann eine Spannung, wenn sich der Fluss $\Phi = BA\cos\varphi$ ändert.
  ---
  Beim Herausziehen ändert sich $B$, beim Drehen $\varphi$, beim Einschalten der Nachbarspule ebenfalls $B$. In allen drei Fällen wird eine Spannung induziert.
  ---
  Der ruhende Magnet erzeugt einen konstanten Fluss, egal wie stark. Hier ist $\Delta\Phi = 0$ und damit $U = 0$.
```

### Der bewegte Leiter

Ein Leiterstab der Länge $l$ gleitet auf zwei Schienen mit der Geschwindigkeit $v$ durch ein Feld $B$, das senkrecht
auf der Schienenebene steht. Die Schienen sind an einem Ende mit einem Widerstand verbunden. Stab, Schienen und
Widerstand bilden eine Leiterschleife, deren Fläche wächst. In der Zeit $\Delta t$ legt der Stab die Strecke
$v\,\Delta t$ zurück, und die Fläche wächst um $\Delta A = l\cdot v\,\Delta t$. Also ist
$\Delta\Phi = B\cdot l\cdot v\,\Delta t$, und das Induktionsgesetz liefert
$$U_\text{ind} = B\cdot l\cdot v.$$

```plot
x: [-0.5, 6]
y: [-0.8, 3]
gleich: true
hoehe: 260
strecken:
  - { von: [0, 0], nach: [5.5, 0], farbe: 3 }
  - { von: [0, 2], nach: [5.5, 2], farbe: 3 }
  - { von: [0, 0], nach: [0, 2], farbe: 3 }
  - { von: [3.5, -0.2], nach: [3.5, 2.2], farbe: 1 }
vektoren:
  - { von: [3.6, 1], nach: [5, 1], label: "v", farbe: 2 }
punkte:
  - { x: 0, y: 1, label: "R" }
  - { x: 3.2, y: 2.6, label: "Stab, Länge l" }
  - { x: 1, y: 0.5, label: "×" }
  - { x: 2, y: 0.5, label: "×" }
  - { x: 1, y: 1.5, label: "×" }
  - { x: 2, y: 1.5, label: "×" }
  - { x: 4.5, y: 0.5, label: "×" }
  - { x: 4.5, y: 1.5, label: "×" }
beschriftung: "Ein Stab (orange) gleitet mit der Geschwindigkeit v nach rechts auf zwei Schienen. Links verbindet ein Widerstand R die Schienen. Das Feld zeigt in die Zeichenebene hinein (Kreuze). Die eingeschlossene Fläche wächst, also wächst der Fluss, und es wird die Spannung U = B·l·v induziert."
```

Man kann die Spannung auch **mikroskopisch** verstehen. Die Elektronen im Stab bewegen sich mit ihm durch das Feld.
Also wirkt auf jedes von ihnen eine Lorentzkraft, und zwar entlang des Stabes. Die Elektronen sammeln sich an einem
Ende, das andere Ende wird positiv. Zwischen den Enden entsteht eine Spannung. Beide Erklärungen liefern dasselbe
Ergebnis $U = Blv$.

:::beispiel[Ein Stab auf Schienen]
Ein $40\,\text{cm}$ langer Stab gleitet mit $5{,}0\,\text{m/s}$ über Schienen in einem Feld mit $0{,}20\,\text{T}$.
Welche Spannung wird induziert?

**Schritt 1, Einheiten:** $l = 0{,}40\,\text{m}$.

**Schritt 2, Formel:** Der Stab, die Bewegung und das Feld stehen paarweise senkrecht aufeinander, also gilt
$U = Blv$.

**Schritt 3, Rechnung:** $U = 0{,}20\,\dfrac{\text{V s}}{\text{m}^2}\cdot 0{,}40\,\text{m}\cdot 5{,}0\,\dfrac{\text{m}}{\text{s}} = 0{,}40\,\text{V}$.
Die Einheiten kürzen sich zu Volt.

**Probe über den Fluss:** In $1\,\text{s}$ wächst die Fläche um $0{,}40\,\text{m}\cdot 5{,}0\,\text{m} = 2{,}0\,\text{m}^2$,
der Fluss also um $0{,}20\,\text{T}\cdot 2{,}0\,\text{m}^2 = 0{,}40\,\text{Wb}$. Das sind $0{,}40\,\text{Wb/s} = 0{,}40\,\text{V}$.
:::

```aufgabe
id: p14-bewegter-leiter
titel: Bewegter Leiterstab
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Ein $30\,\text{cm}$ langer Stab wird mit $4{,}0\,\text{m/s}$ senkrecht zu einem Magnetfeld von $0{,}50\,\text{T}$ bewegt. Welche Spannung wird zwischen seinen Enden induziert?
teile:
  - typ: zahl
    loesung: "0.50*0.30*4.0"
    einheit: "V"
    anzeige: '0{,}60'
    fehler:
      - wert: "0.50*30*4.0"
        meldung: Du hast die Länge in Zentimetern eingesetzt. $30\,\text{cm} = 0{,}30\,\text{m}$, dann kommt die Spannung in Volt heraus.
hinweise:
  - Für einen Stab, der sich senkrecht zum Feld bewegt, gilt $U = B\cdot l\cdot v$.
loesung: |
  **Ansatz:** Der Stab überstreicht pro Sekunde die Fläche $l\cdot v$. Die Flussänderung pro Sekunde ist $B\cdot l\cdot v$, also $U = Blv$.
  ---
  **Rechnung:** $U = 0{,}50\,\text{T}\cdot 0{,}30\,\text{m}\cdot 4{,}0\,\text{m/s} = 0{,}60\,\text{V}$.
```

```aufgabe
id: p14-flugzeug
titel: Spannung zwischen den Flügelspitzen
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Ein Flugzeug mit $60\,\text{m}$ Spannweite fliegt waagrecht mit $250\,\text{m/s}$. Die senkrechte Komponente des Erdmagnetfeldes beträgt $45\,\mu\text{T}$. Welche Spannung wird zwischen den Flügelspitzen induziert? Gib sie in V auf drei Stellen an.
teile:
  - typ: zahl
    loesung: "45e-6*60*250"
    einheit: "V"
    anzeige: '0{,}675'
    fehler:
      - wert: "45*60*250"
        meldung: Du hast Mikrotesla wie Tesla eingesetzt. $45\,\mu\text{T} = 45\cdot 10^{-6}\,\text{T}$.
      - wert: "45e-6*60*250/3.6"
        meldung: Die Geschwindigkeit ist schon in m/s angegeben. Die Umrechnung durch $3{,}6$ braucht man nur bei km/h.
hinweise:
  - Die Flügel sind ein Leiter, der sich durch das Erdfeld bewegt.
  - Die Flügel liegen waagrecht und bewegen sich waagrecht. Senkrecht zu beiden steht nur die **senkrechte** Feldkomponente, also zählt nur sie in $U = Blv$.
loesung: |
  **Ansatz:** Die Flügel sind ein bewegter Leiter der Länge $l = 60\,\text{m}$. Damit $U = Blv$ gilt, müssen Leiter, Bewegung und Feld senkrecht aufeinander stehen. Das erfüllt die senkrechte Feldkomponente.
  ---
  **Rechnung:** $U = 45\cdot 10^{-6}\,\text{T}\cdot 60\,\text{m}\cdot 250\,\text{m/s} = 0{,}675\,\text{V}$.
  ---
  **Deutung:** Eine Lampe kann man damit nicht betreiben. Ein Draht zur Lampe würde mitfliegen und dieselbe Spannung induziert bekommen, nur gegen die Flügel gerichtet. Im geschlossenen, mitbewegten Kreis ändert sich der Fluss nicht, die Spannungen heben sich auf.
```

### Die Induktionsspannung aus einem Diagramm ablesen

Oft ist der Fluss als Diagramm $\Phi(t)$ gegeben. Dann gilt: Die Spannung ist $N$ mal die **Steigung** des Graphen.
Steigt der Fluss gleichmäßig, ist die Spannung konstant. Bleibt er konstant, ist sie null. Fällt er, dreht sich das
Vorzeichen um.

:::beispiel[Vom Fluss-Diagramm zum Spannungs-Diagramm]
Durch eine Spule mit $N = 50$ Windungen ändert sich der Fluss so: Von $0$ bis $20\,\text{ms}$ steigt er gleichmäßig von
$0$ auf $4{,}0\,\text{mWb}$. Von $20$ bis $40\,\text{ms}$ bleibt er konstant. Von $40$ bis $50\,\text{ms}$ fällt er
gleichmäßig auf $0$. Wie sieht die Spannung aus?

**Schritt 1, Anstieg:** Steigung $\dfrac{4{,}0\cdot 10^{-3}\,\text{Wb}}{0{,}020\,\text{s}} = 0{,}20\,\text{V}$. Mit dem
Minuszeichen und $N = 50$ ist $U = -50\cdot 0{,}20\,\text{V} = -10\,\text{V}$.

**Schritt 2, konstanter Fluss:** Die Steigung ist null, also $U = 0$.

**Schritt 3, Abfall:** Steigung $\dfrac{-4{,}0\cdot 10^{-3}\,\text{Wb}}{0{,}010\,\text{s}} = -0{,}40\,\text{V}$. Also
$U = -50\cdot(-0{,}40\,\text{V}) = +20\,\text{V}$.

**Ergebnis:** Der schnellere Abfall erzeugt die doppelte Spannung mit umgekehrtem Vorzeichen. Die Diagramme zeigen es.
:::

```plot
x: [0, 60]
y: [0, 5]
hoehe: 200
achsen: { x: "t in ms", y: "Φ in mWb" }
strecken:
  - { von: [0, 0], nach: [20, 4], farbe: 0 }
  - { von: [20, 4], nach: [40, 4], farbe: 0 }
  - { von: [40, 4], nach: [50, 0], farbe: 0 }
  - { von: [50, 0], nach: [60, 0], farbe: 0 }
beschriftung: "Fluss durch die Spule über der Zeit: gleichmäßiger Anstieg auf 4 mWb in 20 ms, dann 20 ms konstant, dann Abfall auf null in 10 ms."
```

```plot
x: [0, 60]
y: [-15, 25]
hoehe: 200
achsen: { x: "t in ms", y: "U in V" }
strecken:
  - { von: [0, -10], nach: [20, -10], farbe: 1 }
  - { von: [20, 0], nach: [40, 0], farbe: 1 }
  - { von: [40, 20], nach: [50, 20], farbe: 1 }
  - { von: [50, 0], nach: [60, 0], farbe: 1 }
  - { von: [20, -10], nach: [20, 0], farbe: 1, gestrichelt: true }
  - { von: [40, 0], nach: [40, 20], farbe: 1, gestrichelt: true }
  - { von: [50, 20], nach: [50, 0], farbe: 1, gestrichelt: true }
beschriftung: "Die zugehörige Induktionsspannung bei 50 Windungen: −10 V während des Anstiegs, 0 V bei konstantem Fluss, +20 V während des schnellen Abfalls. Die Spannung ist die negative Steigung des Fluss-Diagramms mal N."
```

:::merke[Induktionsaufgaben lösen]
1. **Was ändert sich?** Das Feld $B$, die Fläche $A$ oder der Winkel $\varphi$?
2. **Flussänderung** $\Delta\Phi$ in Wb berechnen, Flächen in $\text{m}^2$ ($1\,\text{cm}^2 = 10^{-4}\,\text{m}^2$).
3. **Durch die Zeit teilen**, Zeit in Sekunden. Bei einem Diagramm: Steigung ablesen.
4. **Mit $N$ multiplizieren.** Für den bewegten Leiter direkt $U = Blv$.
5. **Richtung** mit der Lenzschen Regel bestimmen, nicht aus einer Formel.
:::

```aufgabe
id: p14-4-diagramm
titel: Spannung aus einem Fluss-Diagramm
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Das Diagramm zeigt den Fluss durch eine Spule mit $100$ Windungen. Bestimme den Betrag der induzierten Spannung in den drei Zeitabschnitten.
plot:
  x: [0, 40]
  y: [0, 4]
  achsen: { x: "t in ms", y: "Φ in mWb" }
  strecken:
    - { von: [0, 0], nach: [10, 3], farbe: 0 }
    - { von: [10, 3], nach: [30, 3], farbe: 0 }
    - { von: [30, 3], nach: [36, 0], farbe: 0 }
    - { von: [36, 0], nach: [40, 0], farbe: 0 }
teile:
  - typ: zahl
    label: 0 bis 10 ms, |U| in V
    loesung: "100*3e-3/0.010"
    einheit: "V"
    anzeige: '30'
    fehler:
      - wert: "3e-3/0.010"
        meldung: Das ist die Spannung einer Windung. Multipliziere mit $N = 100$.
      - wert: "100*3e-3/10"
        meldung: Du hast die Zeit in Millisekunden eingesetzt. $10\,\text{ms} = 0{,}010\,\text{s}$.
  - typ: zahl
    label: 10 bis 30 ms, |U| in V
    loesung: "0"
    einheit: "V"
    anzeige: '0'
    fehler:
      - wert: "100*3e-3/0.020"
        meldung: In diesem Abschnitt ist der Fluss zwar groß, aber **konstant**. Die Steigung ist null, also wird nichts induziert.
  - typ: zahl
    label: 30 bis 36 ms, |U| in V
    loesung: "100*3e-3/0.006"
    einheit: "V"
    anzeige: '50'
    fehler:
      - wert: "100*3e-3/0.010"
        meldung: Der Abfall dauert nur $6\,\text{ms}$, nicht $10\,\text{ms}$. Lies die Zeitpunkte genau ab, $36 - 30 = 6$.
hinweise:
  - Die Spannung ist $N$ mal die Steigung des Graphen. Lies für jeden Abschnitt ab, wie stark sich $\Phi$ in welcher Zeit ändert.
  - 'Abschnitt 1: $3\,\text{mWb}$ in $10\,\text{ms}$. Abschnitt 3: $3\,\text{mWb}$ in $6\,\text{ms}$. Rechne in Wb und s.'
loesung: |
  **Ansatz:** $|U| = N\cdot\left|\dfrac{\Delta\Phi}{\Delta t}\right|$. Im Diagramm ist $\dfrac{\Delta\Phi}{\Delta t}$ die Steigung jedes geraden Stücks.
  ---
  **0 bis 10 ms:** $|U| = 100\cdot\dfrac{3\cdot 10^{-3}\,\text{Wb}}{0{,}010\,\text{s}} = 30\,\text{V}$.
  ---
  **10 bis 30 ms:** Waagrechtes Stück, Steigung null, also $U = 0$.
  ---
  **30 bis 36 ms:** $|U| = 100\cdot\dfrac{3\cdot 10^{-3}\,\text{Wb}}{0{,}006\,\text{s}} = 50\,\text{V}$, mit umgekehrtem Vorzeichen wie im ersten Abschnitt. Der steilere Abfall gibt die größere Spannung.
```

```aufgabe
id: p14-4-drehung
titel: Eine Schleife wird gedreht
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Eine Spule mit $20$ Windungen und $200\,\text{cm}^2$ Fläche steht zuerst senkrecht zu einem Feld mit $0{,}50\,\text{T}$, die Feldlinien gehen also voll hindurch. In $0{,}10\,\text{s}$ wird sie um $90^\circ$ gedreht, bis die Feldlinien parallel zu ihrer Fläche verlaufen. Wie groß ist die mittlere induzierte Spannung?
teile:
  - typ: zahl
    loesung: "20*0.50*200e-4/0.10"
    einheit: "V"
    anzeige: '2{,}0'
    fehler:
      - wert: "0.50*200e-4/0.10"
        meldung: Das gilt für eine einzige Windung. Mit $N = 20$ Windungen ist die Spannung zwanzigmal so groß.
      - wert: "20*0.50*200/0.10"
        meldung: Du hast die Fläche in $\text{cm}^2$ eingesetzt. $200\,\text{cm}^2 = 0{,}020\,\text{m}^2$.
hinweise:
  - Berechne den Fluss am Anfang ($\varphi = 0^\circ$) und am Ende ($\varphi = 90^\circ$).
  - '$\Delta\Phi = BA\cos 0^\circ - BA\cos 90^\circ = BA$. Dann $|U| = N\,\Delta\Phi/\Delta t$.'
loesung: |
  **Ansatz:** Hier ändert sich der Winkel. Am Anfang ist $\Phi_1 = BA\cos 0^\circ = BA$, am Ende $\Phi_2 = BA\cos 90^\circ = 0$.
  ---
  **Flussänderung:** $|\Delta\Phi| = BA = 0{,}50\,\text{T}\cdot 0{,}020\,\text{m}^2 = 0{,}010\,\text{Wb}$.
  ---
  **Spannung:** $|U| = N\dfrac{|\Delta\Phi|}{\Delta t} = 20\cdot\dfrac{0{,}010\,\text{Wb}}{0{,}10\,\text{s}} = 2{,}0\,\text{V}$. Das ist ein Mittelwert. Bei gleichmäßiger Drehung schwankt die Spannung, wie in [14.7 Wechselspannung: Scheitelwert und Effektivwert](/lernen/physik1/magnetismus-wechselstrom/wechselspannung-scheitelwert-und-effektivwert) gezeigt wird.
```

```aufgabe
id: p14-4-feldspule
titel: Eine Spule in einer Spule
niveau: 3
lernziel: 3
kompetenz: modellieren
angabe: |
  Eine lange Feldspule hat $1000$ Windungen und ist $50\,\text{cm}$ lang. In ihrer Mitte steckt eine kleine Induktionsspule mit $100$ Windungen und $4{,}0\,\text{cm}^2$ Querschnitt, ihre Windungen liegen senkrecht zur Achse. Der Strom in der Feldspule steigt in $0{,}10\,\text{s}$ gleichmäßig von $0$ auf $2{,}0\,\text{A}$. Welche Spannung wird in der kleinen Spule induziert? Gib sie in mV auf drei Stellen an.
teile:
  - typ: zahl
    loesung: "100*(4*pi*1e-7*1000*2.0/0.50)*4.0e-4/0.10*1000"
    einheit: "mV"
    anzeige: '2{,}01'
hinweise:
  - Zwei Schritte. Zuerst das Feld der Feldspule am Ende, $B = \mu_0 N_1 I/l$. Dann das Induktionsgesetz für die kleine Spule.
  - 'Nur der Querschnitt der **kleinen** Spule zählt für ihren Fluss, also $\Delta\Phi = \Delta B\cdot A_2$.'
gefuehrt:
  - text: Wie groß ist die Flussdichte in der Feldspule, wenn $2{,}0\,\text{A}$ fließen? Gib sie in mT an.
    teil: { typ: zahl, loesung: "4*pi*1e-7*1000*2.0/0.50*1000" }
    erklaerung: $B = \mu_0\dfrac{N_1 I}{l} = 4\pi\cdot 10^{-7}\cdot\dfrac{1000\cdot 2{,}0}{0{,}50}\,\text{T} = 5{,}03\,\text{mT}$.
  - text: Um wie viel ändert sich der Fluss durch **eine** Windung der kleinen Spule? Gib ihn in $10^{-6}\,\text{Wb}$ an.
    teil: { typ: zahl, loesung: "4*pi*1e-7*1000*2.0/0.50*4.0e-4/1e-6" }
    erklaerung: $\Delta\Phi = \Delta B\cdot A_2 = 5{,}03\cdot 10^{-3}\,\text{T}\cdot 4{,}0\cdot 10^{-4}\,\text{m}^2 = 2{,}01\cdot 10^{-6}\,\text{Wb}$.
  - text: Wie groß ist die induzierte Spannung in mV?
    teil: { typ: zahl, loesung: "100*(4*pi*1e-7*1000*2.0/0.50)*4.0e-4/0.10*1000" }
    erklaerung: $|U| = N_2\dfrac{\Delta\Phi}{\Delta t} = 100\cdot\dfrac{2{,}01\cdot 10^{-6}\,\text{Wb}}{0{,}10\,\text{s}} = 2{,}01\cdot 10^{-3}\,\text{V} = 2{,}01\,\text{mV}$.
  - text: Überlege, ohne zu rechnen, was passiert, wenn der Strom danach konstant bei $2{,}0\,\text{A}$ bleibt.
    erklaerung: Dann ist das Feld konstant, der Fluss ändert sich nicht mehr, und die induzierte Spannung fällt auf null.
loesung: |
  **Modell:** Der wachsende Strom in der Feldspule erzeugt ein wachsendes, homogenes Feld. Es durchsetzt die kleine Spule, deren Fluss sich dadurch ändert.
  ---
  **Feld am Ende:** $B = \mu_0\dfrac{N_1 I}{l} = 4\pi\cdot 10^{-7}\,\dfrac{\text{T m}}{\text{A}}\cdot\dfrac{1000\cdot 2{,}0\,\text{A}}{0{,}50\,\text{m}} = 5{,}03\cdot 10^{-3}\,\text{T}$. Am Anfang war $B = 0$.
  ---
  **Flussänderung:** $\Delta\Phi = \Delta B\cdot A_2 = 5{,}03\cdot 10^{-3}\,\text{T}\cdot 4{,}0\cdot 10^{-4}\,\text{m}^2 = 2{,}01\cdot 10^{-6}\,\text{Wb}$.
  ---
  **Spannung:** $|U| = N_2\dfrac{\Delta\Phi}{\Delta t} = 100\cdot\dfrac{2{,}01\cdot 10^{-6}\,\text{Wb}}{0{,}10\,\text{s}} = 2{,}01\cdot 10^{-3}\,\text{V} = 2{,}01\,\text{mV}$. Das ist klein, aber gut messbar. Genau diese Kopplung zweier Spulen nutzt der Transformator.
```

```aufgabe
id: p14-4-elektronen-text
titel: Warum entsteht im bewegten Stab eine Spannung?
niveau: 3
lernziel: 3
kompetenz: begruenden
angabe: |
  Ein Metallstab bewegt sich quer durch ein Magnetfeld, ohne an etwas angeschlossen zu sein. Erkläre mit der Lorentzkraft, warum zwischen seinen Enden eine Spannung entsteht, warum sie nicht immer weiter wächst und warum sie verschwindet, sobald der Stab stehen bleibt.
teile:
  - typ: text
    muster: |
      Die freien Elektronen im Stab bewegen sich mit dem Stab durch das Feld. Auf jede bewegte Ladung wirkt die Lorentzkraft $evB$, hier entlang des Stabes.
      Die Elektronen wandern deshalb zu einem Ende. Dort entsteht ein Elektronenüberschuss, am anderen Ende ein Mangel. Zwischen den Enden baut sich ein elektrisches Feld auf.
      Dieses Feld drückt die Elektronen zurück. Sobald die elektrische Kraft $eE$ so groß ist wie die Lorentzkraft, wandern keine weiteren Elektronen mehr: $eE = evB$.
      Mit $E = U/l$ folgt $U = Blv$. Bleibt der Stab stehen, ist $v = 0$, die Lorentzkraft verschwindet, und die getrennten Ladungen gleichen sich wieder aus.
hinweise:
  - Auf welche Ladungen im Stab wirkt eine Lorentzkraft, und in welche Richtung?
  - Die verschobenen Ladungen erzeugen selbst ein elektrisches Feld. Wann sind elektrische Kraft und Lorentzkraft gleich groß?
loesung: |
  **Ansatz:** Die freien Elektronen bewegen sich mit dem Stab. Bewegte Ladungen im Magnetfeld spüren die Lorentzkraft, hier entlang des Stabes.
  ---
  **Ladungstrennung:** Die Elektronen sammeln sich an einem Ende. Die getrennten Ladungen erzeugen ein elektrisches Feld, das weitere Elektronen zurückdrängt. Das Gleichgewicht ist erreicht, wenn $eE = evB$ gilt.
  ---
  **Ergebnis:** Mit $E = U/l$ folgt $U = Blv$, dasselbe wie aus dem Induktionsgesetz. Steht der Stab still, fehlt die Lorentzkraft, und die Spannung verschwindet.
```

## Die Lenzsche Regel: Richtung des Induktionsstroms

```aufgabe
id: p14-5-check
art: check
titel: "Vorwissen: Nordpol einer Spule"
niveau: 1
angabe: |
  Du schaust auf das rechte Ende einer Spule. Der Strom läuft in den Windungen, von dir aus gesehen, **gegen den Uhrzeigersinn**. Welches Ende ist der Nordpol?
teile:
  - typ: auswahl
    optionen:
      - "das rechte Ende, auf das du schaust"
      - "das linke Ende"
      - "Eine Spule hat keine Pole."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Krümme die Finger der rechten Hand gegen den Uhrzeigersinn, wie du es von vorne siehst. Der Daumen zeigt dann auf dich zu, also zum rechten Ende.
      - wert: 2
        meldung: Außen gleicht das Feld einer Spule dem eines Stabmagneten. Sie hat einen Nord- und einen Südpol.
hinweise:
  - 'Rechte-Hand-Regel für die Spule: Finger in Stromrichtung um die Windungen, dann zeigt der Daumen zum Nordpol.'
loesung: |
  Rechte-Hand-Regel für die Spule: Die Finger folgen dem Strom, der Daumen zeigt in Richtung des Feldes im Inneren, also zum Nordpol.
  ---
  Läuft der Strom von dir aus gesehen gegen den Uhrzeigersinn, zeigt der Daumen auf dich zu. Das rechte Ende ist der Nordpol. Wiederholen: [14.1 Magnetfelder von Dauermagneten, Leitern und Spulen](/lernen/physik1/magnetismus-wechselstrom/magnetfelder-von-dauermagneten-leitern-und-spulen).
```

**Worum geht es in diesem Abschnitt?** Das Induktionsgesetz sagt, wie **groß** die induzierte Spannung ist. Hier geht
es um ihre **Richtung**, also um das Minuszeichen. Diese Stelle ist für fast alle Lernenden ungewohnt. Lies sie
langsam, und rechne die Beispiele mit der Hand mit.

### Die Regel in einem Satz

Ein Bild vorweg: Eine geschlossene Leiterschleife verhält sich wie ein träger Körper. Ein träger Körper „wehrt sich“
gegen jede Änderung seiner Geschwindigkeit. Eine Leiterschleife wehrt sich gegen jede Änderung des Flusses durch sie.
Dafür setzt sie einen Strom in Gang, dessen eigenes Magnetfeld die Änderung bremst.

:::satz[Lenzsche Regel]
Der induzierte Strom fließt immer so, dass sein Magnetfeld der **Änderung** des Flusses **entgegenwirkt**, die ihn
hervorruft.

**Beispiel:** Nimmt der Fluss durch einen Ring zu, erzeugt der Induktionsstrom ein Feld in der Gegenrichtung. **Kein
„immer entgegengesetzt“:** Nimmt der Fluss ab, zeigt das induzierte Feld in **dieselbe** Richtung wie das äußere
Feld. Es versucht, den alten Fluss zu erhalten.
:::

Wichtig ist das Wort **Änderung**. Der Induktionsstrom kämpft nicht gegen das Feld des Magneten, sondern gegen die
Zunahme oder Abnahme des Flusses. Daraus folgt ein Rezept in vier Schritten.

:::merke[Richtung des Induktionsstroms in vier Schritten]
1. **Feld:** In welche Richtung zeigt das äußere Feld durch die Schleife?
2. **Änderung:** Nimmt der Fluss zu oder ab?
3. **Gegenwirkung:** Bei Zunahme zeigt das induzierte Feld **entgegen** dem äußeren Feld. Bei Abnahme zeigt es in
   **dieselbe** Richtung.
4. **Strom:** Aus der Richtung des induzierten Feldes folgt mit der Rechte-Hand-Regel für Spulen die Stromrichtung.
:::

:::beispiel[Ein Nordpol nähert sich einem Ring]
Ein Aluminiumring hängt an einem Faden. Von links nähert man ihm den **Nordpol** eines Stabmagneten. Wie fließt der
Strom im Ring, und was passiert mit dem Ring?

**Schritt 1, Feld:** Feldlinien laufen aus dem Nordpol heraus. Am Ring zeigt das Feld des Magneten also nach rechts,
vom Magneten weg.

**Schritt 2, Änderung:** Der Magnet kommt näher, das Feld am Ring wird stärker. Der Fluss nach rechts **nimmt zu**.

**Schritt 3, Gegenwirkung:** Das induzierte Feld muss die Zunahme bremsen. Es zeigt also nach **links**, zum Magneten.

**Schritt 4, Strom:** Ein Feld nach links heißt: Die linke Seite des Rings ist ein Nordpol. Vom Magneten aus gesehen
fließt der Strom deshalb gegen den Uhrzeigersinn, denn dann zeigt der Daumen der rechten Hand auf den Betrachter zu.

**Folge:** Dem Nordpol des Magneten steht ein Nordpol gegenüber. Gleichnamige Pole stoßen sich ab. Der Ring weicht
zurück. Er „wehrt sich“ gegen die Annäherung. Diesen Versuch nennt man den **Ringversuch zur Lenzschen Regel**. Eine
bekannte Variante ist der **Thomsonsche Ringversuch**: Dort liegt der Ring auf dem Eisenkern einer Spule und springt
hoch, sobald man den Strom einschaltet.
:::

```plot
x: [-5, 4]
y: [-2.2, 2.2]
gleich: true
hoehe: 240
strecken:
  - { von: [-4.5, -0.4], nach: [-1.5, -0.4], farbe: 3 }
  - { von: [-4.5, 0.4], nach: [-1.5, 0.4], farbe: 3 }
  - { von: [-4.5, -0.4], nach: [-4.5, 0.4], farbe: 3 }
  - { von: [-1.5, -0.4], nach: [-1.5, 0.4], farbe: 3 }
kurven:
  - { x: "1 + 0.3*cos(t)", y: "1.5*sin(t)", t: [0, "2*pi"], farbe: 4 }
vektoren:
  - { von: [-3.6, 1.2], nach: [-2.4, 1.2], label: "v", farbe: 3 }
  - { von: [-0.8, 0.2], nach: [0.5, 0.2], label: "B Magnet", farbe: 0 }
  - { von: [2.3, -0.3], nach: [1.3, -0.3], label: "B induziert", farbe: 1 }
  - { von: [1.6, -1.6], nach: [2.8, -1.6], label: "F", farbe: 2 }
punkte:
  - { x: -1.9, y: 0, label: "N" }
  - { x: -4.1, y: 0, label: "S" }
  - { x: 1, y: 1.9, label: "Ring" }
beschriftung: "Ein Stabmagnet bewegt sich mit dem Nordpol voran auf einen Aluminiumring zu. Sein Feld am Ring zeigt nach rechts und wird stärker. Der Induktionsstrom erzeugt ein Feld nach links (orange), der Ring wird zum Magneten mit dem Nordpol links. Gleichnamige Pole stoßen sich ab, die Kraft F drückt den Ring nach rechts weg."
```

:::achtung[Fehler: „Das induzierte Feld zeigt immer gegen das Magnetfeld“]
Der Nordpol wird jetzt vom Ring **weggezogen**. Ein Schüler argumentiert: „Das induzierte Feld zeigt gegen das Feld
des Magneten, also wieder nach links. Der Ring hat links einen Nordpol und wird wieder abgestoßen.“

Das ist falsch. Beim Wegziehen **nimmt der Fluss ab**. Das induzierte Feld will den alten Fluss erhalten und zeigt
deshalb in **dieselbe** Richtung wie das Magnetfeld, nach rechts. Links am Ring entsteht ein Südpol, der Ring wird
**angezogen** und folgt dem Magneten. Der Ring wehrt sich also immer gegen die Bewegung, beim Nähern wie beim Entfernen.
:::

```aufgabe
id: p14-lenz
titel: Lenzsche Regel am Ring
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Ein Aluminiumring hängt an einem Faden. Man nähert ihm schnell den **Südpol** eines Stabmagneten. Was passiert mit dem Ring?
teile:
  - typ: auswahl
    optionen:
      - "Er wird vom Magneten weggestoßen."
      - "Er wird zum Magneten hingezogen, weil Aluminium magnetisch ist."
      - "Er bleibt in Ruhe, weil Aluminium nicht ferromagnetisch ist."
      - "Er wird angezogen, weil ein Südpol anders wirkt als ein Nordpol."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Aluminium wird von einem ruhenden Magneten kaum angezogen. Hier wirkt der Induktionsstrom. Nach Lenz bremst er die Annäherung, also stößt er ab.
      - wert: 2
        meldung: Aluminium ist kein Ferromagnet, aber ein guter Leiter. Die Flussänderung erzeugt einen Strom im Ring, und dessen Feld wirkt auf den Magneten.
      - wert: 3
        meldung: Für die Lenzsche Regel spielt der Pol keine Rolle. Bei jeder Annäherung entsteht gegenüber ein gleichnamiger Pol, der Ring wird abgestoßen.
hinweise:
  - Der Induktionsstrom wirkt seiner Ursache, der Annäherung, entgegen.
loesung: |
  **Ansatz:** Lenzsche Regel. Die Ursache der Induktion ist die Annäherung des Magneten. Das induzierte Feld wirkt ihr entgegen.
  ---
  Bei Annäherung des Südpols nimmt der Fluss zu. Der Ring wird zu einem Magneten, der dem Südpol einen **Südpol** entgegenstellt. Gleichnamige Pole stoßen sich ab, der Ring weicht zurück. Es geht nicht um Ferromagnetismus, sondern um den Induktionsstrom im leitenden Ring.
```

```aufgabe
id: p14-5-offen
titel: Ein aufgeschnittener Ring
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Der Ringversuch zur Lenzschen Regel (ein Aluminiumring hängt an einem Faden) wird mit einem Ring wiederholt, der an einer Stelle aufgeschnitten ist. Man nähert ihm schnell einen Magneten. Was passiert?
teile:
  - typ: auswahl
    optionen:
      - "Es wird eine Spannung induziert, aber kein Strom fließt, also bewegt sich der Ring praktisch nicht."
      - "Es wird gar keine Spannung induziert, weil der Ring offen ist."
      - "Der Ring wird genauso stark abgestoßen wie ein geschlossener Ring."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die Spannung hängt nur von der Flussänderung ab, nicht davon, ob der Kreis geschlossen ist. Sie liegt zwischen den beiden Schnittenden an.
      - wert: 2
        meldung: Die Kraft entsteht durch das Magnetfeld des **Stroms** im Ring. Im offenen Ring kann kein Strom im Kreis fließen, also gibt es kein solches Feld.
hinweise:
  - Unterscheide Spannung und Strom. Wovon hängt die Induktionsspannung ab, und was braucht ein Strom?
loesung: |
  **Ansatz:** Die Induktionsspannung hängt nur von der Flussänderung ab. Ein Strom braucht zusätzlich einen geschlossenen Kreis.
  ---
  Zwischen den Schnittenden entsteht eine Spannung. Strom fließt aber nicht, also entsteht kein Feld, das auf den Magneten wirkt. Der Ring bleibt praktisch in Ruhe. Mit genau diesem Versuch zeigt man, dass der Strom und nicht der Ring selbst die Kraft verursacht.
```

### Warum die Lenzsche Regel gelten muss: Energieerhaltung

Stell dir für einen Moment das Gegenteil vor: Der induzierte Strom würde die Änderung **verstärken**. Ein Magnet, der
auf einen Ring zufällt, würde dann zusätzlich angezogen. Er würde schneller, die Flussänderung größer, der Strom stärker,
die Anziehung größer und so weiter. Aus einem kleinen Anstoß entstünden ohne Ende Bewegungsenergie und Wärme. Das wäre
ein **Perpetuum mobile**, eine Maschine, die Energie aus dem Nichts erzeugt.

Die Natur verbietet das. Weil der Induktionsstrom die Bewegung bremst, muss man **Arbeit** verrichten, um den Magneten
zu bewegen. Genau diese Arbeit erscheint als elektrische Energie im Ring und am Ende als Wärme. Die Lenzsche Regel ist
also eine Folge der Energieerhaltung aus dem [Kapitel Arbeit, Energie, Impuls](/lernen/physik1/arbeit-energie-impuls).

**Die Energiebilanz beim bewegten Bügel.** Ein Bügel der Länge $l$ wird mit der Geschwindigkeit $v$ über Schienen
gezogen. Der Stromkreis hat den Widerstand $R$. Dann gilt Schritt für Schritt:

- Induzierte Spannung $U = Blv$, Strom $I = U/R$.
- Auf den stromdurchflossenen Bügel wirkt im Feld die Kraft $F = BIl$. Nach Lenz zeigt sie **gegen** die Bewegung.
- Wer die Geschwindigkeit halten will, muss mit $F$ ziehen und die mechanische Leistung $P = F\cdot v$ aufbringen.
- Im Widerstand wird die elektrische Leistung $P = U\cdot I$ in Wärme umgesetzt. Beide Leistungen sind gleich groß.

:::beispiel[Die Energiebilanz geht auf]
Ein Bügel mit $l = 0{,}25\,\text{m}$ wird mit $v = 4{,}0\,\text{m/s}$ durch ein Feld mit $B = 0{,}60\,\text{T}$ gezogen.
Der Stromkreis hat $R = 0{,}20\,\Omega$.

**Schritt 1, Spannung und Strom:** $U = Blv = 0{,}60\,\text{T}\cdot 0{,}25\,\text{m}\cdot 4{,}0\,\text{m/s} = 0{,}60\,\text{V}$,
$I = \dfrac{U}{R} = \dfrac{0{,}60\,\text{V}}{0{,}20\,\Omega} = 3{,}0\,\text{A}$.

**Schritt 2, Bremskraft:** $F = BIl = 0{,}60\,\text{T}\cdot 3{,}0\,\text{A}\cdot 0{,}25\,\text{m} = 0{,}45\,\text{N}$,
entgegen der Bewegung.

**Schritt 3, Leistungen:** mechanisch $P = Fv = 0{,}45\,\text{N}\cdot 4{,}0\,\text{m/s} = 1{,}8\,\text{W}$, elektrisch
$P = UI = 0{,}60\,\text{V}\cdot 3{,}0\,\text{A} = 1{,}8\,\text{W}$.

**Deutung:** Jedes Watt, das man mechanisch hineinsteckt, kommt als elektrische Leistung heraus. Das ist das Prinzip
jedes Generators.
:::

:::achtung[Fehler: Spannung statt Strom in die Kraftformel eingesetzt]
Für das Beispiel rechnet eine Schülerin die Bremskraft als
„$F = B\cdot U\cdot l = 0{,}60\cdot 0{,}60\cdot 0{,}25\,\text{N} = 0{,}090\,\text{N}$“.

Die Kraft auf einen Leiter hängt vom **Strom** ab, $F = BIl$. Die Einheitenprobe zeigt den Fehler:
$\text{T}\cdot\text{V}\cdot\text{m}$ ist kein Newton. Richtig ist $I = U/R = 3{,}0\,\text{A}$ und $F = 0{,}45\,\text{N}$.
Ohne geschlossenen Kreis gäbe es übrigens trotz Spannung gar keine Bremskraft.
:::

```aufgabe
id: p14-5-bremskraft
titel: Bremskraft auf einen Bügel
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Ein Bügel der Länge $0{,}20\,\text{m}$ wird mit $3{,}0\,\text{m/s}$ über Schienen durch ein Feld mit $0{,}50\,\text{T}$ gezogen. Der Stromkreis hat den Widerstand $0{,}10\,\Omega$.

  a) Wie groß ist der Induktionsstrom in A?

  b) Mit welcher Kraft in N muss man ziehen, damit die Geschwindigkeit konstant bleibt?
teile:
  - typ: zahl
    label: a) I in A
    loesung: "0.50*0.20*3.0/0.10"
    einheit: "A"
    anzeige: '3{,}0'
    fehler:
      - wert: "0.50*0.20*3.0"
        meldung: Das ist die Spannung in Volt. Der Strom folgt mit dem Ohmschen Gesetz, $I = U/R$.
  - typ: zahl
    label: b) F in N
    loesung: "0.50*(0.50*0.20*3.0/0.10)*0.20"
    einheit: "N"
    anzeige: '0{,}30'
    fehler:
      - wert: "0.50*(0.50*0.20*3.0)*0.20"
        meldung: Du hast die Spannung statt des Stroms in $F = BIl$ eingesetzt. Einheitenprobe, $\text{T}\cdot\text{V}\cdot\text{m}$ ist kein Newton.
hinweise:
  - Erst $U = Blv$, dann $I = U/R$, dann die Kraft auf den Bügel $F = BIl$.
  - Bei konstanter Geschwindigkeit muss die Zugkraft genau so groß sein wie die bremsende Kraft des Feldes (erstes Newtonsches Axiom).
loesung: |
  **Ansatz:** Die Bewegung induziert eine Spannung, sie treibt einen Strom, und auf diesen Strom wirkt im Feld eine Kraft gegen die Bewegung.
  ---
  **a)** $U = Blv = 0{,}50\,\text{T}\cdot 0{,}20\,\text{m}\cdot 3{,}0\,\text{m/s} = 0{,}30\,\text{V}$ und $I = \dfrac{U}{R} = \dfrac{0{,}30\,\text{V}}{0{,}10\,\Omega} = 3{,}0\,\text{A}$.
  ---
  **b)** Bremskraft $F = BIl = 0{,}50\,\text{T}\cdot 3{,}0\,\text{A}\cdot 0{,}20\,\text{m} = 0{,}30\,\text{N}$. Bei konstanter Geschwindigkeit muss die Zugkraft gleich groß sein, also $0{,}30\,\text{N}$.
  ---
  **Probe:** $Fv = 0{,}30\,\text{N}\cdot 3{,}0\,\text{m/s} = 0{,}90\,\text{W}$ und $UI = 0{,}30\,\text{V}\cdot 3{,}0\,\text{A} = 0{,}90\,\text{W}$. Die Bilanz stimmt.
```

```aufgabe
id: p14-5-richtung
titel: Ein Südpol wird aus der Spule gezogen
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Links neben einer Spule liegt ein Stabmagnet, sein **Südpol** zeigt zur Spule. Der Magnet wird nach links weggezogen. Welcher Pol entsteht am linken Spulenende, und wie fließt der Strom, wenn man vom Magneten aus auf die Spule schaut?
teile:
  - typ: auswahl
    optionen:
      - "Links entsteht ein Nordpol, der Strom fließt gegen den Uhrzeigersinn."
      - "Links entsteht ein Südpol, der Strom fließt im Uhrzeigersinn."
      - "Links entsteht ein Nordpol, der Strom fließt im Uhrzeigersinn."
      - "Es entsteht kein Pol, weil der Magnet sich entfernt."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: So wäre es beim **Annähern** des Südpols. Beim Wegziehen nimmt der Fluss ab, und die Spule wehrt sich gegen das Entfernen, indem sie den Magneten anzieht.
      - wert: 2
        meldung: Der Pol stimmt, die Stromrichtung nicht. Wenn das linke Ende ein Nordpol ist, zeigt das Feld innen nach links, auf dich zu. Dann läuft der Strom von links gesehen gegen den Uhrzeigersinn.
      - wert: 3
        meldung: Auch beim Entfernen ändert sich der Fluss. Jede Änderung, Zunahme oder Abnahme, induziert einen Strom.
hinweise:
  - Arbeite die vier Schritte ab. Feldlinien laufen in einen Südpol **hinein**. Wohin zeigt also das Feld des Magneten in der Spule?
  - Der Fluss nimmt ab. Dann zeigt das induzierte Feld in **dieselbe** Richtung wie das Feld des Magneten.
gefuehrt:
  - text: Schritt 1. In welche Richtung zeigt das Feld des Magneten in der Spule?
    teil:
      typ: auswahl
      optionen: ["nach links, zum Magneten", "nach rechts, vom Magneten weg"]
      richtig: [0]
    erklaerung: Feldlinien laufen außen in den Südpol hinein. Das Feld in der Spule zeigt also nach links, zum Magneten hin.
  - text: Schritt 2. Nimmt der Fluss durch die Spule zu oder ab?
    teil:
      typ: auswahl
      optionen: ["Er nimmt zu.", "Er nimmt ab."]
      richtig: [1]
    erklaerung: Der Magnet entfernt sich, sein Feld in der Spule wird schwächer. Der Fluss nimmt ab.
  - text: Schritt 3. In welche Richtung zeigt das induzierte Feld in der Spule?
    teil:
      typ: auswahl
      optionen: ["nach links", "nach rechts"]
      richtig: [0]
    erklaerung: Bei einer Abnahme will der Induktionsstrom den alten Fluss erhalten. Das induzierte Feld zeigt also auch nach links. Am linken Ende tritt es aus, dort ist ein Nordpol.
  - text: Schritt 4. Wie fließt der Strom, vom Magneten aus gesehen?
    teil:
      typ: auswahl
      optionen: ["gegen den Uhrzeigersinn", "im Uhrzeigersinn"]
      richtig: [0]
    erklaerung: Das Feld zeigt auf den Betrachter zu. Der Daumen der rechten Hand zeigt also zu dir, die Finger laufen gegen den Uhrzeigersinn. Nordpol gegenüber Südpol heißt Anziehung, die Spule bremst das Wegziehen.
loesung: |
  **Feld:** Feldlinien laufen in den Südpol hinein. In der Spule zeigt das Feld des Magneten nach links.
  ---
  **Änderung:** Der Magnet entfernt sich, der Fluss nach links nimmt ab.
  ---
  **Gegenwirkung:** Das induzierte Feld will die Abnahme bremsen und zeigt ebenfalls nach links. Links tritt es aus der Spule aus, dort entsteht ein **Nordpol**.
  ---
  **Strom und Probe:** Vom Magneten aus gesehen zeigt das induzierte Feld auf den Betrachter zu, der Strom läuft also **gegen den Uhrzeigersinn**. Nordpol der Spule und Südpol des Magneten ziehen sich an. Die Spule hält den Magneten fest, sie wehrt sich gegen das Wegziehen.
```

### Wirbelströme

Induktionsströme fließen nicht nur in Drähten. In jedem Metallstück, durch das sich der Fluss ändert, entstehen
kreisförmige Ströme. Man nennt sie **Wirbelströme**. Nach Lenz bremsen sie die Bewegung, die sie erzeugt, und
wandeln Bewegungsenergie in Wärme um.

- **Magnet im Kupferrohr:** Ein starker Magnet fällt durch ein senkrechtes Kupferrohr sehr langsam. Unter ihm nimmt
  der Fluss im Rohr zu, über ihm ab. Beide Wirbelströme bremsen ihn.
- **Wirbelstrombremse:** Züge und Achterbahnen bremsen verschleißfrei, indem Magnete Wirbelströme in Schienen oder
  Metallfinnen erzeugen. Die Bremswirkung ist umso stärker, je schneller das Fahrzeug ist.
- **Induktionsherd:** Unter der Glaskeramik liegt eine Spule mit schnell wechselndem Strom. Ihr Feld induziert
  Wirbelströme im Topfboden, und der Boden erwärmt sich direkt.
- **Transformatorkerne** baut man aus dünnen, isolierten Blechen. Dann können sich keine großen Wirbelströme ausbilden,
  und es geht wenig Energie als Wärme verloren.

```aufgabe
id: p14-5-rohr
titel: Ein Magnet fällt durch drei Rohre
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: |
  Ein starker Magnet wird durch drei gleich lange, senkrechte Rohre fallen gelassen: ein Kupferrohr, ein Kunststoffrohr und ein Kupferrohr mit einem durchgehenden Längsschlitz. Wo fällt er am **langsamsten**?
teile:
  - typ: auswahl
    optionen:
      - "im geschlossenen Kupferrohr"
      - "im Kunststoffrohr, weil Kunststoff isoliert und den Magneten festhält"
      - "im geschlitzten Kupferrohr, weil der Schlitz das Feld bündelt"
      - "überall gleich, weil Kupfer nicht magnetisch ist"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: In einem Isolator können keine Ströme fließen. Ohne Wirbelströme gibt es keine Bremskraft, der Magnet fällt frei.
      - wert: 2
        meldung: Der Schlitz unterbricht die Kreisbahnen der Wirbelströme um das Rohr. Dann fließen nur noch schwache Ströme, und die Bremsung ist viel kleiner.
      - wert: 3
        meldung: Kupfer ist zwar nicht ferromagnetisch, aber ein sehr guter Leiter. Die Bremsung kommt von Induktionsströmen, nicht von einer Anziehung des Kupfers.
hinweise:
  - Die Bremsung entsteht durch Induktionsströme im Rohr. Wo können solche Ströme ungehindert im Kreis um das Rohr fließen?
  - Ein Strom braucht einen Leiter und einen geschlossenen Weg.
loesung: |
  **Ansatz:** Der fallende Magnet ändert den Fluss durch die Rohrquerschnitte. Wo ein Leiter einen geschlossenen Weg um das Rohr bietet, fließen Wirbelströme, die ihn nach Lenz bremsen.
  ---
  Im Kunststoffrohr fließt kein Strom, der Magnet fällt frei. Im geschlitzten Rohr ist der Weg um das Rohr unterbrochen, die Bremsung ist schwach.
  ---
  Im geschlossenen Kupferrohr fließen starke Wirbelströme rund um das Rohr. Dort fällt der Magnet am langsamsten. Seine Lageenergie wird zu Wärme im Kupfer.
```

```aufgabe
id: p14-energiebilanz
titel: Energiebilanz eines bewegten Bügels
niveau: 3
lernziel: 4
kompetenz: begruenden
angabe: |
  Ein Metallbügel der Länge $0{,}10\,\text{m}$ wird auf Schienen mit $2{,}0\,\text{m/s}$ durch ein Magnetfeld $B = 0{,}80\,\text{T}$ gezogen. Der geschlossene Stromkreis hat den Widerstand $0{,}050\,\Omega$.

  a) Berechne die induzierte Spannung in V und den Strom in A.

  b) Welche Kraft in N ist nötig, um die Geschwindigkeit zu halten?

  c) Zeige, dass die mechanische Leistung gleich der elektrischen ist, und gib sie in W an.
teile:
  - typ: zahl
    label: a) U in V
    loesung: "0.80*0.10*2.0"
    einheit: "V"
    anzeige: '0{,}16'
  - typ: zahl
    label: a) I in A
    loesung: "0.80*0.10*2.0/0.050"
    einheit: "A"
    anzeige: '3{,}2'
  - typ: zahl
    label: b) F in N
    loesung: "0.80*(0.80*0.10*2.0/0.050)*0.10"
    einheit: "N"
    anzeige: '0{,}256'
  - typ: zahl
    label: c) P in W
    loesung: "0.80*(0.80*0.10*2.0/0.050)*0.10*2.0"
    einheit: "W"
    anzeige: '0{,}512'
hinweise:
  - '$U = Blv$, $I = U/R$, $F = BIl$.'
  - 'Mechanische Leistung $P = F\cdot v$, elektrische Leistung $P = U\cdot I$. Berechne beide getrennt.'
loesung: |
  **a)** $U = Blv = 0{,}80\,\text{T}\cdot 0{,}10\,\text{m}\cdot 2{,}0\,\text{m/s} = 0{,}16\,\text{V}$ und $I = \dfrac{U}{R} = \dfrac{0{,}16\,\text{V}}{0{,}050\,\Omega} = 3{,}2\,\text{A}$.
  ---
  **b)** $F = BIl = 0{,}80\,\text{T}\cdot 3{,}2\,\text{A}\cdot 0{,}10\,\text{m} = 0{,}256\,\text{N}$, nach Lenz entgegen der Bewegung. Genau so stark muss man ziehen.
  ---
  **c)** $P_\text{mech} = Fv = 0{,}256\,\text{N}\cdot 2{,}0\,\text{m/s} = 0{,}512\,\text{W}$ und $P_\text{el} = UI = 0{,}16\,\text{V}\cdot 3{,}2\,\text{A} = 0{,}512\,\text{W}$.
  ---
  **Begründung:** Allgemein ist $Fv = B\dfrac{Blv}{R}l\cdot v = \dfrac{B^2l^2v^2}{R}$ und $UI = Blv\cdot\dfrac{Blv}{R} = \dfrac{B^2l^2v^2}{R}$. Beide Ausdrücke sind identisch. Die Energie bleibt erhalten, mechanische Arbeit wird vollständig zu elektrischer Energie.
```

```aufgabe
id: p14-5-gedanken
titel: "Gedankenexperiment: Was wäre, wenn Lenz falsch wäre?"
niveau: 3
lernziel: 4
kompetenz: begruenden
angabe: |
  Stell dir eine Welt vor, in der der Induktionsstrom die Änderung des Flusses **verstärkt** statt bremst. Ein Magnet wird mit einem kleinen Stoß auf einen geschlossenen Kupferring zugeschoben. Beschreibe, was dann passieren würde, und begründe damit, warum die Lenzsche Regel gelten muss.
teile:
  - typ: text
    muster: |
      Der Fluss durch den Ring nimmt zu. Würde der Induktionsstrom diese Zunahme verstärken, stünde dem vorderen Pol des Magneten ein ungleichnamiger Pol gegenüber. Der Magnet würde angezogen.
      Er würde schneller, die Flussänderung größer, der Strom stärker, die Anziehung noch größer. Die Bewegungsenergie des Magneten und die Wärme im Ring würden immer weiter wachsen, ohne dass jemand Arbeit verrichtet.
      Das widerspricht der Energieerhaltung, es wäre ein Perpetuum mobile. Also muss der Induktionsstrom die Änderung bremsen. Dann muss man Arbeit gegen die Bremskraft verrichten, und genau diese Arbeit wird zu elektrischer Energie und Wärme.
hinweise:
  - Verfolge die Kette Schritt für Schritt. Was bewirkt eine Anziehung bei der Bewegung des Magneten, und was folgt daraus für den Strom?
  - Woher käme die Energie für die immer schnellere Bewegung und die Wärme im Ring?
loesung: |
  **Ansatz:** Wir nehmen das Gegenteil der Lenzschen Regel an und verfolgen die Folgen, bis ein Widerspruch entsteht.
  ---
  **Kette:** Ein verstärkender Induktionsstrom würde den Magneten anziehen. Der Magnet würde schneller, die Flussänderung größer, der Strom stärker, die Anziehung größer. Die Bewegung würde sich selbst immer weiter antreiben.
  ---
  **Widerspruch:** Bewegungsenergie und Wärme würden ohne zugeführte Arbeit unbegrenzt wachsen. Das verbietet der Energieerhaltungssatz. Also muss der Induktionsstrom seiner Ursache entgegenwirken. Dann kostet die Bewegung Arbeit, und genau diese Arbeit wird zu elektrischer Energie.
```

## Selbstinduktion: Die Spule bremst Stromänderungen

```aufgabe
id: p14-6-check
art: check
titel: "Vorwissen: Induktionsgesetz"
niveau: 1
angabe: |
  Der Fluss durch eine Spule mit $500$ Windungen ändert sich in $0{,}10\,\text{s}$ gleichmäßig um $2{,}0\,\text{mWb}$. Wie groß ist der Betrag der induzierten Spannung?
teile:
  - typ: zahl
    loesung: "500*2.0e-3/0.10"
    einheit: "V"
    anzeige: '10'
    fehler:
      - wert: "2.0e-3/0.10"
        meldung: Das ist die Spannung einer einzigen Windung. Multipliziere mit der Windungszahl $N = 500$.
hinweise:
  - '$|U| = N\cdot\Delta\Phi/\Delta t$, mit $\Delta\Phi$ in Wb.'
loesung: |
  Induktionsgesetz für Beträge: $|U| = N\dfrac{\Delta\Phi}{\Delta t}$.
  ---
  $|U| = 500\cdot\dfrac{2{,}0\cdot 10^{-3}\,\text{Wb}}{0{,}10\,\text{s}} = 10\,\text{V}$. Wiederholen: [14.4 Magnetischer Fluss und Induktionsgesetz](/lernen/physik1/magnetismus-wechselstrom/magnetischer-fluss-und-induktionsgesetz).
```

**Worum geht es in diesem Abschnitt?** Bisher kam die Flussänderung von außen, etwa von einem bewegten Magneten. Eine
Spule erzeugt aber auch selbst ein Magnetfeld. Ändert sich ihr eigener Strom, ändert sich ihr eigener Fluss, und sie
induziert in sich selbst eine Spannung. Das heißt **Selbstinduktion**. Sie erklärt, warum Spulen beim Einschalten
bremsen und beim Ausschalten Funken schlagen.

### Die Spule als „träges“ Bauteil

Ein Bild hilft: Ein schwerer Wagen lässt sich nicht schlagartig in Bewegung setzen und nicht schlagartig anhalten. Er
ist **träge**. Eine Spule ist in derselben Weise träge gegenüber Stromänderungen. Nach der Lenzschen Regel wirkt die
selbstinduzierte Spannung immer gegen die Änderung des Stroms:

- Steigt der Strom, wirkt die Spannung gegen den Anstieg. Der Strom wächst nur allmählich.
- Fällt der Strom, wirkt die Spannung gegen den Abfall. Sie versucht, den Strom weiterfließen zu lassen.

:::satz[Selbstinduktion]
Ändert sich der Strom in einer Spule in der Zeit $\Delta t$ um $\Delta I$, so wird in ihr die Spannung
$$U_\text{ind} = -L\cdot\frac{\Delta I}{\Delta t}$$
induziert. Die Größe $L$ heißt **Induktivität**. Ihre Einheit ist das **Henry**, $1\,\text{H} = 1\,\dfrac{\text{V s}}{\text{A}}$.

Für eine lange Spule mit $N$ Windungen, Querschnitt $A$ und Länge $l$ gilt
$$L = \mu_0\,\mu_r\,\frac{N^2 A}{l}.$$
:::

Woher kommt das $N^2$? Die Windungszahl geht **zweimal** ein. Erstens macht jede Windung das Feld stärker,
$B \propto N$. Zweitens trägt jede Windung zur induzierten Spannung bei, $U \propto N$. Zusammen ergibt das $N^2$.
**Beispiel:** Eine Spule mit $L = 1\,\text{H}$ erzeugt $1\,\text{V}$, wenn sich ihr Strom um $1\,\text{A}$ pro Sekunde
ändert. **Kein Fall von Selbstinduktion:** Fließt ein **konstanter** Gleichstrom, ist $\Delta I = 0$ und die Spule
verhält sich wie ein gewöhnlicher Draht.

:::beispiel[Induktivität mit und ohne Eisenkern]
Eine Spule hat $500$ Windungen, $10\,\text{cm}^2$ Querschnitt und $20\,\text{cm}$ Länge. Wie groß ist ihre
Induktivität ohne Kern und mit einem Eisenkern mit $\mu_r = 400$?

**Schritt 1, Einheiten:** $A = 10\cdot 10^{-4}\,\text{m}^2 = 1{,}0\cdot 10^{-3}\,\text{m}^2$, $l = 0{,}20\,\text{m}$, $N^2 = 250\,000$.

**Schritt 2, ohne Kern:** $L = 4\pi\cdot 10^{-7}\,\dfrac{\text{V s}}{\text{A m}}\cdot\dfrac{250\,000\cdot 1{,}0\cdot 10^{-3}\,\text{m}^2}{0{,}20\,\text{m}} = 1{,}57\cdot 10^{-3}\,\text{H} = 1{,}57\,\text{mH}$.

**Schritt 3, mit Eisenkern:** $L = 400\cdot 1{,}57\,\text{mH} = 0{,}628\,\text{H}$.

**Deutung:** Der Eisenkern macht aus einer kaum merklichen Induktivität eine große. Spulen mit Eisenkern verzögern
das Einschalten deshalb deutlich.
:::

:::achtung[Fehler: Windungszahl nicht quadriert]
Für die Spule aus dem Beispiel rechnet ein Schüler
„$L = \mu_0\dfrac{N A}{l} = 4\pi\cdot 10^{-7}\cdot\dfrac{500\cdot 1{,}0\cdot 10^{-3}}{0{,}20}\,\text{H} = 3{,}1\cdot 10^{-6}\,\text{H}$“.

Das ist $500$-mal zu klein. In der Induktivität steht $N^2$, weil die Windungszahl sowohl das Feld als auch die
induzierte Spannung vervielfacht. Richtig ist $L = 1{,}57\,\text{mH}$. Verdoppelt man die Windungszahl bei gleicher
Länge, **vervierfacht** sich die Induktivität.
:::

```aufgabe
id: p14-6-induktivitaet
titel: Induktivität einer Luftspule
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Eine Luftspule hat $800$ Windungen, $5{,}0\,\text{cm}^2$ Querschnitt und $40\,\text{cm}$ Länge. Berechne ihre Induktivität in mH.
teile:
  - typ: zahl
    loesung: "4*pi*1e-7*800^2*5.0e-4/0.40*1000"
    einheit: "mH"
    anzeige: '1{,}01'
    fehler:
      - wert: "4*pi*1e-7*800*5.0e-4/0.40*1000"
        meldung: Die Windungszahl muss **quadriert** werden. Sie vergrößert das Feld und vervielfacht die induzierte Spannung, also steht $N^2$ in der Formel.
      - wert: "4*pi*1e-7*800^2*5.0/0.40*1000"
        meldung: Du hast die Fläche in $\text{cm}^2$ eingesetzt. $5{,}0\,\text{cm}^2 = 5{,}0\cdot 10^{-4}\,\text{m}^2$.
hinweise:
  - '$L = \mu_0\mu_r\dfrac{N^2A}{l}$ mit $\mu_r = 1$ für Luft.'
  - 'Rechne $A$ in $\text{m}^2$ und $l$ in m um. $N^2 = 640\,000$.'
loesung: |
  **Ansatz:** Lange Spule ohne Kern: $L = \mu_0\dfrac{N^2A}{l}$.
  ---
  **Einheiten:** $N^2 = 800^2 = 640\,000$, $A = 5{,}0\cdot 10^{-4}\,\text{m}^2$, $l = 0{,}40\,\text{m}$.
  ---
  **Rechnung:** $L = 4\pi\cdot 10^{-7}\,\dfrac{\text{V s}}{\text{A m}}\cdot\dfrac{640\,000\cdot 5{,}0\cdot 10^{-4}\,\text{m}^2}{0{,}40\,\text{m}} = 1{,}01\cdot 10^{-3}\,\text{H} = 1{,}01\,\text{mH}$.
```

### Einschalten: Der Strom steigt allmählich

Ein bekannter Versuch zeigt die Trägheit der Spule. Zwei gleiche Lämpchen liegen parallel an einer Batterie. Vor dem
einen liegt ein Widerstand, vor dem anderen eine Spule mit Eisenkern und gleichem Drahtwiderstand. Schließt man den
Schalter, leuchtet das Lämpchen mit dem Widerstand sofort auf. Das Lämpchen mit der Spule leuchtet erst nach einem
Augenblick voll. Nach einiger Zeit leuchten beide gleich hell.

```plot
x: [0, 10]
y: [0, 6]
gleich: true
hoehe: 260
strecken:
  - { von: [1, 1], nach: [1, 5], farbe: 3 }
  - { von: [1, 5], nach: [9, 5], farbe: 3 }
  - { von: [1, 1], nach: [9, 1], farbe: 3 }
  - { von: [5, 1], nach: [5, 5], farbe: 3 }
  - { von: [9, 1], nach: [9, 5], farbe: 3 }
  - { von: [0.6, 3.2], nach: [1.4, 3.2], farbe: 3 }
  - { von: [0.8, 2.8], nach: [1.2, 2.8], farbe: 3 }
punkte:
  - { x: 0.2, y: 3, label: "Batterie" }
  - { x: 2.5, y: 5.4, label: "Schalter" }
  - { x: 5.6, y: 4, label: "R" }
  - { x: 5.6, y: 2, label: "Lampe 1" }
  - { x: 9.5, y: 4, label: "L" }
  - { x: 9.5, y: 2, label: "Lampe 2" }
beschriftung: "Schaltskizze des Einschaltversuchs. Eine Batterie mit Schalter speist zwei parallele Zweige. Im mittleren Zweig liegen ein Widerstand R und Lampe 1, im rechten Zweig eine Spule L mit Eisenkern und Lampe 2. Lampe 2 leuchtet beim Einschalten verzögert auf."
```

Der Strom durch die Spule wächst nicht sprunghaft, sondern nähert sich seinem Endwert $I_0 = U/R$ immer langsamer an:
$$I(t) = I_0\left(1 - e^{-t/\tau}\right) \quad\text{mit}\quad \tau = \frac{L}{R}.$$
Dabei ist $R$ der Widerstand im Stromkreis und $\tau$ die **Zeitkonstante**. Nach der Zeit $\tau$ hat der Strom
$63\,\%$ seines Endwerts erreicht. Die Exponentialfunktion kennst du aus dem Mathematikkurs, Kapitel
[Funktionen](/lernen/mathe3/funktionen). Woher diese Formel kommt, zeigt
[10.11 Wachstum, Zerfall, Abkühlung: einfache Differentialgleichungen (Vertiefung)](/lernen/mathe3/integralrechnung/wachstum-zerfall-abkuehlung-einfache-differentialgleichungen-vertiefung).
Die Formel selbst brauchst du in der Prüfung nicht, das qualitative Bild schon.

```plot
x: [0, 0.3]
y: [0, 2.4]
hoehe: 240
achsen: { x: "t in s", y: "I in A" }
graphen:
  - { f: "2*(1-exp(-x/0.05))", label: "Zweig mit Spule", farbe: 0, von: 0, bis: 0.3 }
  - { f: "2", label: "Zweig mit Widerstand", farbe: 1, von: 0, bis: 0.3, gestrichelt: true }
punkte:
  - { x: 0.05, y: 1.264, label: "nach τ: 63 %" }
beschriftung: "Strom nach dem Einschalten für L = 0,5 H und R = 10 Ω, also τ = 50 ms und Endstrom 2 A. Im Zweig mit Widerstand fließt sofort der volle Strom (gestrichelt). Im Zweig mit Spule steigt er allmählich und erreicht nach 50 ms erst 63 %."
```

```aufgabe
id: p14-6-lampen
titel: Zwei Lampen beim Einschalten
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Im Einschaltversuch liegt vor Lampe 1 ein Widerstand, vor Lampe 2 eine Spule mit Eisenkern. Beide Zweige haben denselben ohmschen Widerstand. Was beobachtet man beim Schließen des Schalters?
teile:
  - typ: auswahl
    optionen:
      - "Lampe 1 leuchtet sofort, Lampe 2 erst etwas später voll. Danach leuchten beide gleich."
      - "Lampe 2 leuchtet zuerst, weil die Spule Energie gespeichert hat."
      - "Beide leuchten sofort gleich hell, weil die Zweige denselben Widerstand haben."
      - "Lampe 2 bleibt dauerhaft dunkler, weil die Spule ständig eine Gegenspannung erzeugt."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Vor dem Einschalten floss kein Strom, also hatte die Spule auch kein Feld und keine gespeicherte Energie. Sie muss ihr Feld erst aufbauen.
      - wert: 2
        meldung: Der ohmsche Widerstand ist gleich, aber die Spule wirkt zusätzlich gegen jede **Änderung** des Stroms. Beim Einschalten ändert sich der Strom stark.
      - wert: 3
        meldung: Die Gegenspannung entsteht nur, solange sich der Strom ändert. Ist der Endwert erreicht, ist $\Delta I = 0$, und die Spule wirkt wie ein Draht.
hinweise:
  - Die Spule induziert eine Gegenspannung, solange sich ihr Strom ändert. Wann ändert er sich, und wann nicht mehr?
loesung: |
  **Ansatz:** Selbstinduktion wirkt nur bei Stromänderungen, $U = -L\,\Delta I/\Delta t$.
  ---
  Beim Einschalten steigt der Strom, die Spule erzeugt eine Gegenspannung, Lampe 2 leuchtet verzögert auf. Sobald der Strom konstant ist, verschwindet die Gegenspannung. Weil beide Zweige denselben ohmschen Widerstand haben, leuchten dann beide gleich hell.
```

### Ausschalten: Die Spule erzeugt eine Spannungsspitze

Unterbricht man den Strom durch eine Spule plötzlich, fällt er in sehr kurzer Zeit auf null. $\Delta I/\Delta t$ ist
dann riesig, und die Spule induziert eine **hohe Spannung**, oft viel höher als die Betriebsspannung. Sie versucht,
den Strom weiterzutreiben. Am offenen Schalter springt deshalb ein Funke über. Diese Spitze nutzt man gezielt:

- Die **Zündspule** im Benzinmotor erzeugt aus $12\,\text{V}$ über $20\,000\,\text{V}$ für die Zündkerze. Dazu sitzt
  auf ihrem Eisenkern eine zweite Spule mit sehr vielen Windungen, wie bei einem Transformator.
- Ein **Weidezaungerät** erzeugt kurze, hohe Spannungsstöße.

In Elektronik ist die Spitze dagegen gefährlich. Deshalb schaltet man parallel zu Relaisspulen eine **Freilaufdiode**.
Sie lässt den Strom nach dem Abschalten langsam im Kreis abklingen.

Die Spule speichert in ihrem Magnetfeld Energie. Für eine Spule mit dem Strom $I$ ist sie $W = \tfrac12 L I^2$. Beim
Abschalten muss diese Energie irgendwohin, zum Beispiel in den Funken.

:::beispiel[Spannungsspitze beim Abschalten]
Durch eine Spule mit $L = 0{,}50\,\text{H}$ fließen $3{,}0\,\text{A}$. Ein Schalter unterbricht den Strom in
$2{,}0\,\text{ms}$. Wie groß ist die induzierte Spannung, und wie viel Energie war gespeichert?

**Schritt 1, Änderungsrate:** $\dfrac{\Delta I}{\Delta t} = \dfrac{3{,}0\,\text{A}}{2{,}0\cdot 10^{-3}\,\text{s}} = 1500\,\text{A/s}$.

**Schritt 2, Spannung:** $|U| = L\dfrac{\Delta I}{\Delta t} = 0{,}50\,\dfrac{\text{V s}}{\text{A}}\cdot 1500\,\dfrac{\text{A}}{\text{s}} = 750\,\text{V}$.

**Schritt 3, Energie:** $W = \tfrac12 L I^2 = \tfrac12\cdot 0{,}50\,\text{H}\cdot(3{,}0\,\text{A})^2 = 2{,}25\,\text{J}$,
denn $\text{H}\cdot\text{A}^2 = \text{V s A} = \text{W s} = \text{J}$.

**Deutung:** Eine Batterie mit vielleicht $12\,\text{V}$ liefert beim Abschalten eine Spitze von $750\,\text{V}$.
:::

:::achtung[Fehler: Millisekunden nicht umgerechnet]
Für das Beispiel rechnet eine Schülerin „$|U| = 0{,}50\cdot\dfrac{3{,}0}{2{,}0}\,\text{V} = 0{,}75\,\text{V}$“ und
schließt, beim Abschalten passiere nichts Besonderes.

Sie hat $2{,}0\,\text{ms}$ als $2{,}0\,\text{s}$ eingesetzt. Richtig ist $\Delta t = 2{,}0\cdot 10^{-3}\,\text{s}$, und
die Spannung wird tausendmal größer, $750\,\text{V}$. Gerade die kurze Schaltzeit macht die Spitze so gefährlich.
:::

```aufgabe
id: p14-selbstinduktion
titel: Abschalten einer Spule
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Durch eine Spule mit $L = 0{,}20\,\text{H}$ fließen $2{,}0\,\text{A}$. Der Schalter unterbricht den Strom in $1{,}0\,\text{ms}$. Wie groß ist der Betrag der induzierten Spannung?
teile:
  - typ: zahl
    loesung: "0.20*2.0/1.0e-3"
    einheit: "V"
    anzeige: '400'
    fehler:
      - wert: "0.20*2.0/1.0"
        meldung: Du hast die Zeit in Millisekunden eingesetzt. $1{,}0\,\text{ms} = 1{,}0\cdot 10^{-3}\,\text{s}$.
      - wert: "0.20*2.0"
        meldung: Du hast nicht durch die Zeit geteilt. Die Spannung hängt davon ab, wie **schnell** sich der Strom ändert.
hinweise:
  - '$|U| = L\cdot\Delta I/\Delta t$ mit $\Delta t$ in Sekunden.'
loesung: |
  **Ansatz:** Selbstinduktion, $|U| = L\dfrac{\Delta I}{\Delta t}$. Der Strom fällt um $\Delta I = 2{,}0\,\text{A}$ in $\Delta t = 1{,}0\cdot 10^{-3}\,\text{s}$.
  ---
  **Rechnung:** $|U| = 0{,}20\,\dfrac{\text{V s}}{\text{A}}\cdot\dfrac{2{,}0\,\text{A}}{1{,}0\cdot 10^{-3}\,\text{s}} = 400\,\text{V}$. Aus einer kleinen Betriebsspannung entsteht eine Spitze von hunderten Volt, am Schalter kann ein Funke überspringen.
```

```aufgabe
id: p14-6-umkehr
titel: Induktivität aus einer Messung
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Der Strom durch eine Spule wird in $50\,\text{ms}$ gleichmäßig von $0$ auf $1{,}5\,\text{A}$ erhöht. Währenddessen misst man an der Spule eine induzierte Spannung von $6{,}0\,\text{V}$. Wie groß ist ihre Induktivität in H?
teile:
  - typ: zahl
    loesung: "6.0*0.050/1.5"
    einheit: "H"
    anzeige: '0{,}20'
    fehler:
      - wert: "1.5/(6.0*0.050)"
        meldung: Du hast den Kehrwert berechnet. Aus $U = L\,\Delta I/\Delta t$ folgt $L = U\cdot\Delta t/\Delta I$.
      - wert: "6.0*1.5/0.050"
        meldung: Du hast $\Delta I$ und $\Delta t$ vertauscht. Die Einheit zeigt es, $\text{V}\cdot\text{A}/\text{s}$ ist kein Henry. Ein Henry ist $\text{V s/A}$.
hinweise:
  - Stelle $|U| = L\cdot\dfrac{\Delta I}{\Delta t}$ nach $L$ um.
  - 'Multipliziere beide Seiten mit $\Delta t$ und teile durch $\Delta I$. Zeit in Sekunden.'
loesung: |
  **Ansatz:** $|U| = L\dfrac{\Delta I}{\Delta t}$. Gegeben sind $U$, $\Delta I$ und $\Delta t$, gesucht ist $L$.
  ---
  **Umformen:** $L = \dfrac{U\cdot\Delta t}{\Delta I}$.
  ---
  **Rechnung:** $L = \dfrac{6{,}0\,\text{V}\cdot 0{,}050\,\text{s}}{1{,}5\,\text{A}} = 0{,}20\,\dfrac{\text{V s}}{\text{A}} = 0{,}20\,\text{H}$.
```

```aufgabe
id: p14-6-doppelt
titel: Doppelte Windungszahl
niveau: 2
lernziel: 5
kompetenz: verstehen
angabe: |
  Eine lange Spule wird neu gewickelt: gleiche Länge, gleicher Querschnitt, aber **doppelt so viele** Windungen. Wie ändert sich ihre Induktivität?
teile:
  - typ: auswahl
    optionen:
      - "Sie wird viermal so groß."
      - "Sie wird doppelt so groß."
      - "Sie bleibt gleich, weil Länge und Querschnitt gleich sind."
      - "Sie halbiert sich, weil der dünnere Draht mehr Widerstand hat."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Doppelte Windungszahl verdoppelt das Feld, und jede der doppelt so vielen Windungen liefert ihren Teil der Spannung. Zusammen ist das der Faktor $2\cdot 2 = 4$.
      - wert: 2
        meldung: Die Windungszahl steht in $L = \mu_0\mu_r N^2A/l$ im Quadrat. Sie ändert $L$ auch bei gleicher Geometrie.
      - wert: 3
        meldung: Der ohmsche Widerstand des Drahtes ist eine andere Größe als die Induktivität. In $L$ kommt er nicht vor.
hinweise:
  - Schau, wie $N$ in $L = \mu_0\mu_r\dfrac{N^2A}{l}$ vorkommt.
  - 'Steht $N$ im Quadrat, wächst $L$ mit dem Quadrat des Faktors, um den sich $N$ ändert.'
loesung: |
  **Ansatz:** $L = \mu_0\mu_r\dfrac{N^2A}{l}$. Nur $N$ ändert sich.
  ---
  $L$ ist proportional zu $N^2$. Bei doppeltem $N$ wird $N^2 = (2N)^2 = 4N^2$, also viermal so groß.
  ---
  **Anschaulich:** Doppelt so viele Windungen machen das Feld doppelt so stark, und jede der doppelt so vielen Windungen liefert Spannung. Zusammen ergibt das den Faktor $2\cdot 2 = 4$.
```

```aufgabe
id: p14-6-diagramm
titel: Spannung an einer Spule aus dem Strom-Diagramm
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Das Diagramm zeigt den Strom durch eine Spule mit $L = 50\,\text{mH}$. Bestimme den Betrag der selbstinduzierten Spannung in den Abschnitten $0$ bis $4\,\text{ms}$ und $8$ bis $9\,\text{ms}$.
plot:
  x: [0, 10]
  y: [0, 2.5]
  achsen: { x: "t in ms", y: "I in A" }
  strecken:
    - { von: [0, 0], nach: [4, 2], farbe: 0 }
    - { von: [4, 2], nach: [8, 2], farbe: 0 }
    - { von: [8, 2], nach: [9, 0], farbe: 0 }
    - { von: [9, 0], nach: [10, 0], farbe: 0 }
teile:
  - typ: zahl
    label: 0 bis 4 ms, |U| in V
    loesung: "0.050*2/0.004"
    einheit: "V"
    anzeige: '25'
    fehler:
      - wert: "0.050*2/4"
        meldung: Du hast die Zeit in Millisekunden eingesetzt. $4\,\text{ms} = 0{,}004\,\text{s}$.
      - wert: "50*2/0.004"
        meldung: Du hast $L$ in mH eingesetzt. $50\,\text{mH} = 0{,}050\,\text{H}$.
  - typ: zahl
    label: 8 bis 9 ms, |U| in V
    loesung: "0.050*2/0.001"
    einheit: "V"
    anzeige: '100'
    fehler:
      - wert: "0.050*2/0.004"
        meldung: Der Abfall dauert nur $1\,\text{ms}$. Lies die Zeitpunkte genau ab. Der steilere Abschnitt gibt die größere Spannung.
hinweise:
  - Die Spannung ist $L$ mal die Steigung des Strom-Diagramms.
  - 'Abschnitt 1: $2\,\text{A}$ in $4\,\text{ms}$. Abschnitt 2: $2\,\text{A}$ in $1\,\text{ms}$.'
loesung: |
  **Ansatz:** $|U| = L\left|\dfrac{\Delta I}{\Delta t}\right|$. Die Änderungsrate ist die Steigung jedes Geradenstücks.
  ---
  **0 bis 4 ms:** $|U| = 0{,}050\,\text{H}\cdot\dfrac{2{,}0\,\text{A}}{0{,}004\,\text{s}} = 25\,\text{V}$.
  ---
  **8 bis 9 ms:** $|U| = 0{,}050\,\text{H}\cdot\dfrac{2{,}0\,\text{A}}{0{,}001\,\text{s}} = 100\,\text{V}$. Zwischen $4$ und $8\,\text{ms}$ ist der Strom konstant, dort ist $U = 0$. Der schnelle Abfall erzeugt die größte Spannung.
```

```aufgabe
id: p14-6-zuendspule
titel: Die Zündspule eines Motors
niveau: 3
lernziel: 5
kompetenz: modellieren
angabe: |
  Die Primärspule einer Zündspule hat die Induktivität $6{,}0\,\text{mH}$ und führt $4{,}0\,\text{A}$. Eine elektronische Schaltung unterbricht den Strom in $0{,}10\,\text{ms}$.

  a) Wie groß ist die Spannungsspitze an der Primärspule in V?

  b) Wie viel Energie war im Magnetfeld gespeichert? Gib sie in mJ an.
teile:
  - typ: zahl
    label: a) |U| in V
    loesung: "0.0060*4.0/0.10e-3"
    einheit: "V"
    anzeige: '240'
  - typ: zahl
    label: b) W in mJ
    loesung: "0.5*0.0060*4.0^2*1000"
    einheit: "mJ"
    anzeige: '48'
hinweise:
  - 'a) $|U| = L\,\Delta I/\Delta t$, alles in SI-Einheiten.'
  - 'b) Die Energie im Magnetfeld ist $W = \tfrac12 L I^2$.'
gefuehrt:
  - text: Wie groß ist die Änderungsrate des Stroms in A/s?
    teil: { typ: zahl, loesung: "4.0/0.10e-3" }
    erklaerung: $\dfrac{\Delta I}{\Delta t} = \dfrac{4{,}0\,\text{A}}{1{,}0\cdot 10^{-4}\,\text{s}} = 40\,000\,\text{A/s}$.
  - text: Wie groß ist die Spannungsspitze in V?
    teil: { typ: zahl, loesung: "0.0060*4.0/0.10e-3" }
    erklaerung: $|U| = 6{,}0\cdot 10^{-3}\,\text{H}\cdot 40\,000\,\text{A/s} = 240\,\text{V}$.
  - text: Wie viel Energie in mJ steckt im Feld?
    teil: { typ: zahl, loesung: "0.5*0.0060*4.0^2*1000" }
    erklaerung: $W = \tfrac12\cdot 6{,}0\cdot 10^{-3}\,\text{H}\cdot(4{,}0\,\text{A})^2 = 0{,}048\,\text{J} = 48\,\text{mJ}$.
  - text: Überlege, ohne zu rechnen, wie aus $240\,\text{V}$ die über $20\,000\,\text{V}$ für die Zündkerze werden.
    erklaerung: Auf demselben Eisenkern sitzt eine Sekundärspule mit rund hundertmal so vielen Windungen. Wie beim Transformator ist ihre Spannung etwa hundertmal so groß.
loesung: |
  **Modell:** Beim Unterbrechen fällt der Strom in sehr kurzer Zeit auf null. Die Spule induziert nach $U = -L\,\Delta I/\Delta t$ eine hohe Spannung.
  ---
  **a)** $|U| = L\dfrac{\Delta I}{\Delta t} = 6{,}0\cdot 10^{-3}\,\dfrac{\text{V s}}{\text{A}}\cdot\dfrac{4{,}0\,\text{A}}{1{,}0\cdot 10^{-4}\,\text{s}} = 240\,\text{V}$.
  ---
  **b)** $W = \tfrac12 L I^2 = \tfrac12\cdot 6{,}0\cdot 10^{-3}\,\text{H}\cdot 16\,\text{A}^2 = 0{,}048\,\text{J} = 48\,\text{mJ}$.
  ---
  **Einordnung:** Diese $48\,\text{mJ}$ reichen für einen kräftigen Zündfunken. Die Sekundärspule mit vielen Windungen macht aus den $240\,\text{V}$ die nötige Hochspannung, wie in [14.10 Elektromotor, Generator und Transformator](/lernen/physik1/magnetismus-wechselstrom/elektromotor-generator-und-transformator) erklärt.
```

```aufgabe
id: p14-6-funke-text
titel: Warum funkt es beim Ausschalten?
niveau: 3
lernziel: 5
kompetenz: begruenden
angabe: |
  Ein Relais mit einer Spule wird über einen Schalter mit $12\,\text{V}$ betrieben. Beim **Einschalten** passiert nichts Auffälliges, beim **Ausschalten** springt am Schalter ein kleiner Funke über. Erkläre diesen Unterschied und warum eine Freilaufdiode parallel zur Spule hilft.
teile:
  - typ: text
    muster: |
      Beim Einschalten steigt der Strom allmählich an. Die Gegenspannung der Spule ist höchstens so groß wie die Batteriespannung, weil der Strom langsam wachsen darf.
      Beim Ausschalten soll der Strom dagegen in sehr kurzer Zeit auf null fallen. $\Delta I/\Delta t$ ist riesig, also auch die induzierte Spannung $L\,\Delta I/\Delta t$.
      Sie kann hunderte Volt erreichen und treibt den Strom als Funken über den sich öffnenden Schalter. Die Energie $\tfrac12 LI^2$ aus dem Magnetfeld wird dabei frei.
      Eine Freilaufdiode bietet dem Strom einen Weg im Kreis durch die Spule. Er klingt dann langsam ab, $\Delta I/\Delta t$ bleibt klein, und es entsteht keine Spannungsspitze.
hinweise:
  - Vergleiche, wie schnell sich der Strom beim Einschalten und beim Ausschalten ändert.
  - Wohin kann die Energie des Magnetfeldes beim Ausschalten fließen, mit und ohne Diode?
loesung: |
  **Ansatz:** Die selbstinduzierte Spannung ist $L\,\Delta I/\Delta t$. Sie hängt davon ab, wie schnell sich der Strom ändert.
  ---
  **Einschalten:** Der Strom steigt mit der Zeitkonstante $L/R$ an. Die Gegenspannung bleibt unter der Batteriespannung, nichts Auffälliges passiert.
  ---
  **Ausschalten:** Der Schalter will den Strom fast schlagartig beenden. Die Spule erzeugt eine hohe Spannung, die den Strom als Funken weitertreibt und die Feldenergie $\tfrac12 LI^2$ freisetzt. Eine Freilaufdiode lässt den Strom im Kreis durch die Spule langsam abklingen. Dann bleibt die Spannung klein, und Schalter und Elektronik sind geschützt.
```

## Wechselspannung: Scheitelwert und Effektivwert

```aufgabe
id: p14-7-check
art: check
titel: "Vorwissen: Amplitude und Periode einer Sinusfunktion"
niveau: 1
angabe: |
  Gegeben ist $u(t) = 5\cdot\sin(100\pi\cdot t)$ mit $t$ in Sekunden. Wie groß ist die Periodendauer in ms?
teile:
  - typ: zahl
    loesung: "2*pi/(100*pi)*1000"
    einheit: "ms"
    anzeige: '20'
    fehler:
      - wert: "1/(100*pi)*1000"
        meldung: Eine volle Periode des Sinus entspricht dem Winkel $2\pi$, nicht $1$. Also ist $T = 2\pi/\omega$.
      - wert: "100"
        meldung: Das ist (bis auf $\pi$) die Kreisfrequenz $\omega$. Die Periodendauer ist $T = 2\pi/\omega$.
hinweise:
  - 'Bei $\sin(\omega t)$ ist die Periodendauer $T = 2\pi/\omega$. Hier ist $\omega = 100\pi\,\text{s}^{-1}$.'
loesung: |
  Der Sinus wiederholt sich, wenn sein Argument um $2\pi$ wächst. Aus $\omega T = 2\pi$ folgt $T = 2\pi/\omega$.
  ---
  $T = \dfrac{2\pi}{100\pi\,\text{s}^{-1}} = 0{,}020\,\text{s} = 20\,\text{ms}$. Die Amplitude ist $5$. Wiederholen: [5.10 Die allgemeine Sinusfunktion](/lernen/mathe3/trigonometrie/die-allgemeine-sinusfunktion).
```

**Worum geht es in diesem Abschnitt?** Aus der Steckdose kommt keine Gleichspannung, sondern eine Spannung, die
$50$-mal pro Sekunde ihre Richtung wechselt. Du lernst, wie ein Generator sie erzeugt und wie man sie beschreibt.
Vor allem lernst du, was „$230\,\text{V}$“ bei einer Spannung bedeutet, die ständig zwischen $+325\,\text{V}$ und
$-325\,\text{V}$ schwankt. Diese Frage ist die zweite große Hürde des Kapitels. Nimm dir Zeit.

### Erzeugung im Generator

Eine Spule mit $N$ Windungen und der Fläche $A$ dreht sich gleichmäßig in einem homogenen Feld $B$. Die
Winkelgeschwindigkeit ist $\omega$, sie heißt hier **Kreisfrequenz**. Der Winkel zwischen Flächensenkrechte und Feld
wächst dann gleichmäßig, $\varphi = \omega t$. Der Fluss schwankt deshalb wie ein Kosinus:
$\Phi(t) = BA\cos(\omega t)$.

Nach dem Induktionsgesetz ist die Spannung $-N$ mal die Ableitung des Flusses. Die Ableitung von $\cos(\omega t)$ ist
$-\omega\sin(\omega t)$. Wie man so etwas ableitet, steht in
[13.5 Grundfunktionen ableiten: e-Funktion, Logarithmus, sin, cos, arcsin, arctan](/lernen/mathe3/differenzierbarkeit/grundfunktionen-ableiten-e-funktion-logarithmus-sin-cos-arcsin-arctan).
Zusammen ergibt das
$$u(t) = N\,B\,A\,\omega\cdot\sin(\omega t) = \hat U\cdot\sin(\omega t), \qquad \hat U = NBA\omega,\quad \omega = 2\pi f.$$
Das ist eine **sinusförmige Wechselspannung**. Die Größen darin:

- $u(t)$ ist der **Momentanwert**, die Spannung zu einem bestimmten Zeitpunkt. Kleinbuchstaben stehen für
  zeitabhängige Größen.
- $\hat U$ (gesprochen „U Dach“) ist der **Scheitelwert** oder die Amplitude, der größte Wert.
- $f$ ist die **Frequenz**, die Zahl der Perioden pro Sekunde, und $T = 1/f$ die **Periodendauer**.

Das europäische Netz hat $f = 50\,\text{Hz}$. Eine Periode dauert $20\,\text{ms}$. In jeder Periode wechselt die
Spannung zweimal das Vorzeichen, also hundertmal pro Sekunde.

:::beispiel[Spannung eines Generators]
Eine Generatorspule hat $150$ Windungen und $0{,}020\,\text{m}^2$ Fläche. Sie dreht sich $50$-mal pro Sekunde in einem
Feld von $0{,}30\,\text{T}$. Wie groß ist der Scheitelwert der Spannung?

**Schritt 1, Kreisfrequenz:** $\omega = 2\pi f = 2\pi\cdot 50\,\text{s}^{-1} = 314\,\text{s}^{-1}$.

**Schritt 2, Scheitelwert:** $\hat U = NBA\omega = 150\cdot 0{,}30\,\dfrac{\text{V s}}{\text{m}^2}\cdot 0{,}020\,\text{m}^2\cdot 314\,\text{s}^{-1} = 283\,\text{V}$.

**Schritt 3, Deutung:** Die Spannung schwankt zwischen $+283\,\text{V}$ und $-283\,\text{V}$. Mehr Windungen, ein
stärkeres Feld, eine größere Fläche oder eine schnellere Drehung erhöhen den Scheitelwert. Die schnellere Drehung
erhöht dabei zugleich die Frequenz.
:::

```aufgabe
id: p14-7-vorhersage
art: check
titel: "Vorhersage: doppelte Frequenz"
niveau: 1
angabe: |
  Im Widget darunter stellst du Scheitelwert $a$ und Frequenz $b$ einer Wechselspannung ein. Sag vorher: Was passiert mit dem Graphen, wenn du die Frequenz von $50$ auf $100\,\text{Hz}$ verdoppelst und den Scheitelwert gleich lässt?
teile:
  - typ: auswahl
    optionen:
      - "Die Kurve wird doppelt so hoch."
      - "In derselben Zeit passen doppelt so viele Perioden, die Höhe bleibt gleich."
      - "Die Kurve wird flacher, weil sich die Energie auf mehr Perioden verteilt."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Die Höhe ist der Scheitelwert $a$, und den lässt du gleich. Die Frequenz bestimmt nur, wie schnell sich die Kurve wiederholt.
      - wert: 2
        meldung: Scheitelwert und Frequenz sind unabhängige Einstellungen. Die Höhe der Kurve bleibt bei $a$.
hinweise:
  - Die Frequenz zählt die Perioden pro Sekunde.
loesung: |
  Die Frequenz gibt an, wie viele Perioden pro Sekunde ablaufen. Doppelte Frequenz heißt halbe Periodendauer.
  ---
  Im gleichen Zeitfenster siehst du doppelt so viele Perioden. Die Höhe bleibt gleich, weil der Scheitelwert nicht verändert wurde. Prüfe es im Widget.
```

```widget
name: parameter
titel: Wechselspannung u(t) = Û·sin(2πft)
props:
  f: "a*sin(2*pi*b*x)"
  parameter:
    - { name: "a", min: 0, max: 400, step: 5, wert: 325 }
    - { name: "b", min: 10, max: 100, step: 5, wert: 50 }
  x: [0, 0.06]
  y: [-400, 400]
```

**Arbeitsauftrag:** Im Widget ist $a$ der Scheitelwert $\hat U$ in Volt, $b$ die Frequenz in Hz und $x$ die Zeit in
Sekunden. Mit $a = 325$ und $b = 50$ siehst du die europäische Netzspannung, drei Perioden in $60\,\text{ms}$.
Stelle nun $b = 100$ ein und vergleiche mit deiner Vorhersage. Stelle danach $b = 60$ ein, das ist die Netzfrequenz in
Nordamerika. Zähle die Perioden im Fenster und erkläre, warum es jetzt $3{,}6$ sind.

### Der Effektivwert: Welche Spannung „hat“ die Steckdose?

**Worum geht es in einem Satz?** Wir suchen eine einzige Zahl, die angibt, wie stark eine Wechselspannung **wirkt**,
obwohl sie ständig schwankt.

**Das Bild dazu:** Ein Heizstrahler wird an Wechselspannung angeschlossen. Wir fragen: Welche **Gleichspannung** würde
denselben Heizstrahler genau gleich warm machen? Diese Gleichspannung nennt man den **Effektivwert** der
Wechselspannung. „Effektiv“ heißt „wirksam“.

Warum nimmt man nicht einfach den Mittelwert? Weil der Mittelwert einer Sinusspannung über eine Periode **null** ist.
Die positive Halbwelle und die negative Halbwelle heben sich genau auf. Trotzdem wird der Heizstrahler heiß. Für die
Wärme spielt das Vorzeichen keine Rolle: Elektronen, die nach links geschoben werden, reiben genauso wie Elektronen,
die nach rechts geschoben werden.

**In kleinen Schritten:**

1. An einem Widerstand $R$ ist die Leistung in jedem Augenblick $p(t) = \dfrac{u(t)^2}{R} = \dfrac{\hat U^2}{R}\sin^2(\omega t)$.
   Wegen des Quadrats ist sie nie negativ.
2. Die Funktion $\sin^2$ schwankt zwischen $0$ und $1$. Ihr Mittelwert über eine Periode ist genau $\tfrac12$. Das
   Diagramm zeigt warum: Die Kurve liegt symmetrisch um die Linie $\tfrac12$. Was über der Linie herausragt, füllt genau
   die Täler darunter.
3. Also ist die mittlere Leistung $\bar P = \dfrac{\hat U^2}{R}\cdot\dfrac12 = \dfrac{\hat U^2}{2R}$.
4. Eine Gleichspannung $U_\text{eff}$ liefert die Leistung $\dfrac{U_\text{eff}^2}{R}$. Gleichsetzen ergibt
   $\dfrac{U_\text{eff}^2}{R} = \dfrac{\hat U^2}{2R}$. Wir multiplizieren mit $R$ und ziehen die Wurzel:
   $U_\text{eff} = \dfrac{\hat U}{\sqrt 2}$.

```plot
x: [0, 40]
y: [-0.2, 1.2]
hoehe: 230
achsen: { x: "t in ms", y: "p(t) / p_max" }
graphen:
  - { f: "sin(2*pi*x/20)^2", label: "sin²(ωt)", farbe: 0, von: 0, bis: 40 }
  - { f: "0.5", label: "Mittelwert ½", farbe: 1, von: 0, bis: 40, gestrichelt: true }
flaechen:
  - { f: "sin(2*pi*x/20)^2", g: "0", von: 0, bis: 40, farbe: 0 }
beschriftung: "Die Leistung an einem Widerstand bei Wechselspannung, bezogen auf ihren Höchstwert. Sie pulsiert zweimal pro Periode zwischen 0 und dem Höchstwert und ist nie negativ. Ihr Mittelwert ist genau die Hälfte des Höchstwerts (gestrichelte Linie). Die Bögen über der Linie füllen genau die Täler darunter."
```

**Zurück in Worte:** Wir haben gezeigt, dass eine Sinusspannung mit dem Scheitelwert $\hat U$ an einem Widerstand
genauso viel Wärme erzeugt wie eine Gleichspannung, die um den Faktor $\sqrt 2 \approx 1{,}41$ kleiner ist. Das
Mitteln einer Funktion über ein Intervall kennst du aus
[10.9 Mittelwert, Rotationsvolumen und Arbeit](/lernen/mathe3/integralrechnung/mittelwert-rotationsvolumen-und-arbeit).

:::satz[Effektivwerte sinusförmiger Größen]
$$U_\text{eff} = \frac{\hat U}{\sqrt 2}, \qquad I_\text{eff} = \frac{\hat I}{\sqrt 2}, \qquad \bar P = U_\text{eff}\cdot I_\text{eff}\quad\text{(ohmscher Verbraucher)}.$$
Alle Angaben auf Geräten und die „$230\,\text{V}$“ der Steckdose sind **Effektivwerte**. Der Scheitelwert der
Netzspannung ist $230\,\text{V}\cdot\sqrt 2 = 325\,\text{V}$.

**Kein allgemeiner Faktor:** $1/\sqrt 2$ gilt nur für **sinusförmige** Größen. Eine Rechteckspannung, die zwischen
$+10\,\text{V}$ und $-10\,\text{V}$ springt, hat den Effektivwert $10\,\text{V}$, weil ihr Quadrat immer $100\,\text{V}^2$ ist.
:::

Mit Effektivwerten rechnet man an ohmschen Verbrauchern genauso wie mit Gleichstrom: $U_\text{eff} = R\cdot I_\text{eff}$
und $\bar P = U_\text{eff}\cdot I_\text{eff}$. Messgeräte für Wechselspannung zeigen Effektivwerte an.

:::beispiel[Ein Wasserkocher am Netz]
Auf einem Wasserkocher steht „$230\,\text{V}$, $2000\,\text{W}$“. Wie groß sind der Effektivwert des Stroms, der
Widerstand, der Scheitelwert des Stroms und die größte Augenblicksleistung?

**Schritt 1, Effektivstrom:** $I_\text{eff} = \dfrac{\bar P}{U_\text{eff}} = \dfrac{2000\,\text{W}}{230\,\text{V}} = 8{,}70\,\text{A}$.

**Schritt 2, Widerstand:** $R = \dfrac{U_\text{eff}}{I_\text{eff}} = \dfrac{230\,\text{V}}{8{,}70\,\text{A}} = 26{,}5\,\Omega$.

**Schritt 3, Scheitelstrom:** $\hat I = \sqrt 2\cdot I_\text{eff} = 1{,}414\cdot 8{,}70\,\text{A} = 12{,}3\,\text{A}$.

**Schritt 4, Spitzenleistung:** $p_\text{max} = \hat U\cdot\hat I = 325\,\text{V}\cdot 12{,}3\,\text{A} \approx 4000\,\text{W}$.
Die Leistung pulsiert zwischen $0$ und $4000\,\text{W}$, im Mittel sind es die angegebenen $2000\,\text{W}$.
:::

:::achtung[Fehler: mit dem Faktor √2 in die falsche Richtung gerechnet]
Ein Oszilloskop zeigt eine Sinusspannung mit dem Scheitelwert $325\,\text{V}$. Ein Schüler rechnet:
„$U_\text{eff} = 325\,\text{V}\cdot\sqrt 2 = 460\,\text{V}$.“

Der Effektivwert ist immer **kleiner** als der Scheitelwert, denn die Spannung erreicht ihren Höchstwert nur kurz.
Richtig ist $U_\text{eff} = 325\,\text{V}/\sqrt 2 = 230\,\text{V}$. Merkhilfe: Der Scheitelwert ist die Spitze, also
der größte Wert. Alles andere muss kleiner sein.
:::

:::achtung[Fehler: Spitzenwerte multipliziert, um die Leistung zu bekommen]
Für den Wasserkocher rechnet eine Schülerin: „$\bar P = \hat U\cdot\hat I = 325\,\text{V}\cdot 12{,}3\,\text{A} = 4000\,\text{W}$.“

Das ist nur die Spitzenleistung im kurzen Moment der Scheitelwerte. Die **mittlere** Leistung ist halb so groß:
$\bar P = U_\text{eff}\cdot I_\text{eff} = \dfrac{\hat U}{\sqrt 2}\cdot\dfrac{\hat I}{\sqrt 2} = \dfrac{\hat U\hat I}{2} = 2000\,\text{W}$.
Für Leistungen immer Effektivwerte verwenden.
:::

:::merke[Mit Wechselspannung rechnen]
1. Prüfe, ob ein Scheitelwert ($\hat U$, Spitze im Diagramm) oder ein Effektivwert (Geräteangabe, Messgerät) gegeben ist.
2. Umrechnen bei Sinusform: $\hat U = \sqrt 2\cdot U_\text{eff}$, $U_\text{eff} = \hat U/\sqrt 2$.
3. Leistung, Ohmsches Gesetz und Energie immer mit Effektivwerten wie bei Gleichstrom.
4. Periodendauer $T = 1/f$, Kreisfrequenz $\omega = 2\pi f$.
:::

```aufgabe
id: p14-effektiv
titel: Netzspannung in Nordamerika
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  In Nordamerika hat die Netzspannung den Effektivwert $120\,\text{V}$ und die Frequenz $60\,\text{Hz}$. Berechne den Scheitelwert in V und die Periodendauer in ms.
teile:
  - typ: zahl
    label: Scheitelwert in V
    loesung: "120*sqrt(2)"
    einheit: "V"
    anzeige: '170'
    fehler:
      - wert: "120/sqrt(2)"
        meldung: Du hast durch $\sqrt 2$ geteilt. Der Scheitelwert ist die Spitze und muss **größer** als der Effektivwert sein.
  - typ: zahl
    label: Periodendauer in ms
    loesung: "1/60*1000"
    einheit: "ms"
    anzeige: '16{,}7'
    fehler:
      - wert: "1/50*1000"
        meldung: Das ist die europäische Periodendauer. Hier ist $f = 60\,\text{Hz}$.
hinweise:
  - '$\hat U = \sqrt 2\cdot U_\text{eff}$ und $T = 1/f$.'
loesung: |
  **Scheitelwert:** Bei Sinusform ist $\hat U = \sqrt 2\cdot U_\text{eff} = 1{,}414\cdot 120\,\text{V} = 170\,\text{V}$.
  ---
  **Periodendauer:** $T = \dfrac{1}{f} = \dfrac{1}{60\,\text{s}^{-1}} = 0{,}0167\,\text{s} = 16{,}7\,\text{ms}$.
```

```aufgabe
id: p14-wechsel-leistung
titel: Heizwiderstand am Netz
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Ein Heizwiderstand von $52{,}9\,\Omega$ hängt an der Netzspannung mit $230\,\text{V}$ Effektivwert. Berechne den Effektivwert des Stroms in A und die mittlere Leistung in W.
teile:
  - typ: zahl
    label: I_eff in A
    loesung: "230/52.9"
    einheit: "A"
    anzeige: '4{,}35'
    fehler:
      - wert: "325/52.9"
        meldung: Du hast mit dem Scheitelwert $325\,\text{V}$ gerechnet. Das ergibt den Scheitelstrom. Gefragt ist der Effektivwert, also $230\,\text{V}$ einsetzen.
  - typ: zahl
    label: P in W
    loesung: "230^2/52.9"
    einheit: "W"
    anzeige: '1000'
    fehler:
      - wert: "325^2/52.9"
        meldung: Mit dem Scheitelwert erhältst du die Spitzenleistung, doppelt so viel wie im Mittel. Für die mittlere Leistung gehören Effektivwerte in die Formel.
hinweise:
  - Mit Effektivwerten rechnet man wie mit Gleichstrom, $I = U/R$ und $P = U\cdot I$.
loesung: |
  **Strom:** $I_\text{eff} = \dfrac{U_\text{eff}}{R} = \dfrac{230\,\text{V}}{52{,}9\,\Omega} = 4{,}35\,\text{A}$.
  ---
  **Leistung:** $\bar P = U_\text{eff}\cdot I_\text{eff} = 230\,\text{V}\cdot 4{,}35\,\text{A} = 1000\,\text{W}$. Ein Kilowatt-Heizstrahler.
```

```aufgabe
id: p14-generator
titel: Spannung eines Generators
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Eine Spule mit $100$ Windungen und $0{,}010\,\text{m}^2$ Fläche dreht sich mit $50$ Umdrehungen pro Sekunde in einem Feld von $0{,}20\,\text{T}$. Berechne Scheitelwert und Effektivwert der induzierten Spannung in V.
teile:
  - typ: zahl
    label: Scheitelwert in V
    loesung: "100*0.20*0.010*2*pi*50"
    einheit: "V"
    anzeige: '62{,}8'
    fehler:
      - wert: "100*0.20*0.010*50"
        meldung: In $\hat U = NBA\omega$ steht die Kreisfrequenz $\omega = 2\pi f$, nicht die Drehzahl $f$. Der Faktor $2\pi$ fehlt.
  - typ: zahl
    label: Effektivwert in V
    loesung: "100*0.20*0.010*2*pi*50/sqrt(2)"
    einheit: "V"
    anzeige: '44{,}4'
    fehler:
      - wert: "100*0.20*0.010*2*pi*50/2"
        meldung: Der Effektivwert ist nicht die Hälfte des Scheitelwerts. Bei Sinusform teilt man durch $\sqrt 2 \approx 1{,}41$, weil der Mittelwert von $\sin^2$ genau $\tfrac12$ ist.
hinweise:
  - 'Berechne zuerst die Kreisfrequenz $\omega = 2\pi f$.'
  - '$\hat U = NBA\omega$, $U_\text{eff} = \hat U/\sqrt 2$.'
loesung: |
  **Kreisfrequenz:** $\omega = 2\pi\cdot 50\,\text{s}^{-1} = 314\,\text{s}^{-1}$.
  ---
  **Scheitelwert:** $\hat U = NBA\omega = 100\cdot 0{,}20\,\text{T}\cdot 0{,}010\,\text{m}^2\cdot 314\,\text{s}^{-1} = 62{,}8\,\text{V}$, denn $\text{T}\cdot\text{m}^2/\text{s} = \text{V s}/\text{s} = \text{V}$.
  ---
  **Effektivwert:** $U_\text{eff} = \dfrac{62{,}8\,\text{V}}{\sqrt 2} = 44{,}4\,\text{V}$.
```

```aufgabe
id: p14-7-oszilloskop
titel: Ein Oszilloskopbild auswerten
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Das Diagramm zeigt eine sinusförmige Spannung, wie sie ein Oszilloskop darstellt. Lies Scheitelwert und Periodendauer ab und bestimme den Effektivwert in V und die Frequenz in Hz.
plot:
  x: [0, 10]
  y: [-15, 15]
  achsen: { x: "t in ms", y: "u in V" }
  graphen:
    - { f: "12*sin(2*pi*x/4)", farbe: 0, von: 0, bis: 10 }
  strecken:
    - { von: [1, 0], nach: [1, 12], gestrichelt: true }
    - { von: [0, 12], nach: [1, 12], gestrichelt: true }
teile:
  - typ: zahl
    label: U_eff in V
    loesung: "12/sqrt(2)"
    einheit: "V"
    anzeige: '8{,}49'
    fehler:
      - wert: "24/sqrt(2)"
        meldung: Du hast den Abstand von Spitze zu Spitze ($24\,\text{V}$) genommen. Der Scheitelwert wird von der Nulllinie bis zur Spitze gemessen, hier $12\,\text{V}$.
      - wert: "12"
        meldung: Das ist der Scheitelwert. Der Effektivwert ist bei Sinusform um den Faktor $\sqrt 2$ kleiner.
  - typ: zahl
    label: f in Hz
    loesung: "1/0.004"
    einheit: "Hz"
    anzeige: '250'
    fehler:
      - wert: "1/0.002"
        meldung: Du hast nur eine halbe Periode abgelesen, von Nulldurchgang zu Nulldurchgang. Eine volle Periode reicht von einem Maximum bis zum nächsten, hier $4\,\text{ms}$.
hinweise:
  - Der Scheitelwert ist der Abstand von der Nulllinie zur Spitze. Die Periodendauer ist der Abstand zwischen zwei gleichen Punkten, etwa zwei Maxima.
  - 'Abgelesen: $\hat U = 12\,\text{V}$ und $T = 4\,\text{ms}$. Dann $U_\text{eff} = \hat U/\sqrt 2$ und $f = 1/T$.'
loesung: |
  **Ablesen:** Die Kurve reicht bis $12\,\text{V}$, also $\hat U = 12\,\text{V}$. Die Maxima liegen bei $1\,\text{ms}$ und $5\,\text{ms}$, also $T = 4\,\text{ms}$.
  ---
  **Effektivwert:** $U_\text{eff} = \dfrac{12\,\text{V}}{\sqrt 2} = 8{,}49\,\text{V}$.
  ---
  **Frequenz:** $f = \dfrac{1}{T} = \dfrac{1}{0{,}004\,\text{s}} = 250\,\text{Hz}$.
```

```aufgabe
id: p14-7-mittelwert
titel: Mittelwert null und trotzdem heiß
niveau: 2
lernziel: 6
kompetenz: verstehen
angabe: |
  Der zeitliche Mittelwert der Netzspannung über eine Periode ist null. Warum wird eine Herdplatte trotzdem heiß?
teile:
  - typ: auswahl
    optionen:
      - "Die Wärme hängt von $u^2$ ab, und das ist nie negativ. Der Mittelwert der Leistung ist deshalb positiv."
      - "Der Mittelwert ist nur in der Theorie null. In Wirklichkeit überwiegt die positive Halbwelle."
      - "Die Herdplatte wird nur während der positiven Halbwelle geheizt, die negative macht sie nicht kälter."
      - "Die Herdplatte speichert die Ladung der positiven Halbwelle."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die beiden Halbwellen sind genau gleich groß. Der Mittelwert ist tatsächlich null, das ist kein Rechentrick.
      - wert: 2
        meldung: Beide Halbwellen heizen gleich stark. Während der negativen Halbwelle fließt der Strom nur in die Gegenrichtung, und Reibungswärme entsteht in beiden Richtungen.
      - wert: 3
        meldung: Eine Herdplatte ist ein Widerstand, kein Kondensator. Sie speichert keine Ladung. Die Wärme entsteht in jedem Augenblick neu.
hinweise:
  - Wie hängt die Leistung an einem Widerstand von der Spannung ab, $p = u^2/R$?
  - Was passiert mit einer negativen Zahl, wenn man sie quadriert?
loesung: |
  **Ansatz:** Die Leistung an einem Widerstand ist $p(t) = u(t)^2/R$.
  ---
  **Vorzeichen:** In der negativen Halbwelle ist $u < 0$, aber $u^2 > 0$. Auch dann wird Wärme erzeugt, weil der Strom in die Gegenrichtung genauso reibt.
  ---
  Das Quadrat ist in beiden Halbwellen positiv. Die Leistung pulsiert zwischen $0$ und ihrem Höchstwert und hat den Mittelwert $\hat U^2/(2R)$. Die Spannung mittelt sich weg, die Leistung nicht. Genau deshalb braucht man den Effektivwert.
```

```aufgabe
id: p14-7-drehzahl
titel: Was passiert bei doppelter Drehzahl?
niveau: 2
lernziel: 6
kompetenz: verstehen
angabe: |
  Ein Fahrraddynamo arbeitet wie ein kleiner Generator. Du fährst doppelt so schnell, sein Rad dreht sich also doppelt so schnell. Was passiert mit dem Scheitelwert und der Frequenz der erzeugten Spannung?
teile:
  - typ: auswahl
    optionen:
      - "Beide verdoppeln sich."
      - "Nur die Frequenz verdoppelt sich, der Scheitelwert bleibt gleich."
      - "Nur der Scheitelwert verdoppelt sich, die Frequenz bleibt bei 50 Hz."
      - "Der Scheitelwert vervierfacht sich, die Frequenz verdoppelt sich."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: In $\hat U = NBA\omega$ steht die Kreisfrequenz. Schnellere Drehung bedeutet schnellere Flussänderung und damit eine größere Spannung.
      - wert: 2
        meldung: Ein Dynamo ist nicht ans Netz gekoppelt. Seine Frequenz ist an die Drehzahl gebunden, und die verdoppelt sich.
      - wert: 3
        meldung: $\omega$ steht in $\hat U = NBA\omega$ nur in der ersten Potenz. Doppeltes $\omega$ heißt doppelter Scheitelwert, nicht vierfacher.
hinweise:
  - 'Schau, wie $\omega$ in $\hat U = NBA\omega$ vorkommt, und was $\omega = 2\pi f$ für die Frequenz heißt.'
  - Im einfachen Modell mit einer Spule und einem Magneten ist die Frequenz der Spannung die Zahl der Umdrehungen pro Sekunde.
loesung: |
  **Ansatz:** $\hat U = NBA\omega$ mit $\omega = 2\pi f$. Doppelte Drehzahl heißt doppeltes $f$ und doppeltes $\omega$.
  ---
  **Frequenz:** Jede Umdrehung erzeugt eine Periode. Doppelt so viele Umdrehungen pro Sekunde heißt doppelte Frequenz.
  ---
  Der Scheitelwert ist proportional zu $\omega$, er verdoppelt sich. Die Frequenz verdoppelt sich ebenfalls. Deshalb leuchtet die Fahrradlampe bei schneller Fahrt heller, und bei langsamer Fahrt flackert sie sichtbar.
```

```aufgabe
id: p14-7-rechteck
titel: Effektivwert einer pulsierenden Spannung
niveau: 3
lernziel: 6
kompetenz: begruenden
angabe: |
  Eine Steuerung schaltet eine Heizfolie ($R = 6{,}0\,\Omega$) abwechselnd ein und aus: Eine Millisekunde liegen $12\,\text{V}$ Gleichspannung an, eine Millisekunde $0\,\text{V}$, und so weiter. Bestimme die mittlere Leistung in W und daraus den Effektivwert der Spannung in V. Begründe, warum der Effektivwert nicht $6\,\text{V}$ ist.
teile:
  - typ: zahl
    label: mittlere Leistung in W
    loesung: "12^2/6.0/2"
    einheit: "W"
    anzeige: '12'
  - typ: zahl
    label: U_eff in V
    loesung: "sqrt(12^2/2)"
    einheit: "V"
    anzeige: '8{,}49'
hinweise:
  - 'Der Effektivwert ist über die **Wärmewirkung** definiert: die Gleichspannung mit derselben mittleren Leistung.'
  - 'Während der Einschaltzeit ist $P = U^2/R$, während der Pause null. Mittle die Leistung und setze $U_\text{eff}^2/R = \bar P$.'
gefuehrt:
  - text: Welche Leistung in W nimmt die Folie auf, solange $12\,\text{V}$ anliegen?
    teil: { typ: zahl, loesung: "12^2/6.0" }
    erklaerung: $P = \dfrac{U^2}{R} = \dfrac{(12\,\text{V})^2}{6{,}0\,\Omega} = 24\,\text{W}$.
  - text: Die Hälfte der Zeit ist sie eingeschaltet. Wie groß ist die mittlere Leistung in W?
    teil: { typ: zahl, loesung: "12^2/6.0/2" }
    erklaerung: Die Hälfte der Zeit $24\,\text{W}$, die Hälfte $0\,\text{W}$, im Mittel $12\,\text{W}$.
  - text: Welche Gleichspannung in V würde dauerhaft $12\,\text{W}$ liefern?
    teil: { typ: zahl, loesung: "sqrt(12*6.0)" }
    erklaerung: Aus $U_\text{eff}^2/R = 12\,\text{W}$ folgt $U_\text{eff} = \sqrt{12\,\text{W}\cdot 6{,}0\,\Omega} = \sqrt{72}\,\text{V} = 8{,}49\,\text{V}$.
  - text: Überlege, warum der Mittelwert der Spannung, $6\,\text{V}$, zu wenig Wärme liefern würde.
    erklaerung: $6\,\text{V}$ dauerhaft ergäbe $36/6 = 6\,\text{W}$, nur halb so viel. Die Leistung hängt vom **Quadrat** der Spannung ab. Deshalb zählen hohe Spannungen überproportional.
loesung: |
  **Ansatz:** Der Effektivwert ist die Gleichspannung, die im selben Widerstand dieselbe mittlere Leistung erzeugt. Wir berechnen also zuerst die mittlere Leistung.
  ---
  **Leistung:** Eingeschaltet $P = \dfrac{(12\,\text{V})^2}{6{,}0\,\Omega} = 24\,\text{W}$, ausgeschaltet $0$. Im Mittel $\bar P = 12\,\text{W}$.
  ---
  **Effektivwert:** $\dfrac{U_\text{eff}^2}{R} = \bar P$, also $U_\text{eff} = \sqrt{\bar P R} = \sqrt{12\,\text{W}\cdot 6{,}0\,\Omega} = 8{,}49\,\text{V}$.
  ---
  **Begründung:** Der Mittelwert der Spannung ist $6\,\text{V}$, er würde aber nur $6\,\text{W}$ liefern. Weil die Leistung quadratisch von der Spannung abhängt, ist der Effektivwert größer als der einfache Mittelwert. Zufällig ist er hier wieder $12\,\text{V}/\sqrt 2$, weil die Spannung genau die Hälfte der Zeit anliegt.
```

```aufgabe
id: p14-7-erklaeren-text
titel: Den Effektivwert erklären
niveau: 3
lernziel: 6
kompetenz: begruenden
angabe: |
  In der mündlichen Prüfung wirst du gefragt: „Was bedeutet es, dass die Steckdose 230 Volt hat, obwohl die Spannung zwischen +325 V und −325 V schwankt?“ Formuliere eine vollständige Antwort.

  Begründe dabei auch den Faktor $\sqrt 2$.
teile:
  - typ: text
    muster: |
      Die 230 V sind der Effektivwert. Das ist die Gleichspannung, die in einem ohmschen Widerstand dieselbe mittlere Leistung, also dieselbe Wärme, erzeugt wie die Wechselspannung.
      Den einfachen Mittelwert kann man nicht nehmen, er ist bei einer Sinusspannung null. Die Leistung hängt aber von $u^2$ ab: $p = \hat U^2\sin^2(\omega t)/R$. Der Mittelwert von $\sin^2$ über eine Periode ist $\tfrac12$.
      Also ist die mittlere Leistung $\hat U^2/(2R)$. Gleichgesetzt mit $U_\text{eff}^2/R$ folgt $U_\text{eff} = \hat U/\sqrt 2$. Mit $\hat U = 325\,\text{V}$ ergibt das $230\,\text{V}$.
hinweise:
  - Beginne mit der Definition über die Wärmewirkung. Erkläre dann, warum der einfache Mittelwert nicht taugt.
  - 'Der Schlüssel ist der Mittelwert von $\sin^2$, nämlich $\tfrac12$.'
loesung: |
  **Definition:** Der Effektivwert ist die Gleichspannung mit derselben Wärmewirkung im ohmschen Widerstand.
  ---
  **Warum nicht der Mittelwert:** Er ist bei Sinusform null, aber die Leistung $p = u^2/R$ ist immer positiv.
  ---
  **Faktor:** Mittelwert von $\sin^2$ ist $\tfrac12$, also $\bar P = \hat U^2/(2R) = U_\text{eff}^2/R$ und $U_\text{eff} = \hat U/\sqrt 2 = 325\,\text{V}/1{,}414 = 230\,\text{V}$.
```

## Spule und Kondensator im Wechselstromkreis

```aufgabe
id: p14-8-check
art: check
titel: "Vorwissen: Gleichstrom und Kondensator"
niveau: 1
angabe: |
  Ein Kondensator wird an eine Batterie angeschlossen. Was passiert mit dem Strom in den Zuleitungen?
teile:
  - typ: auswahl
    optionen:
      - "Kurz fließt ein Ladestrom, dann ist der Kondensator geladen und der Strom hört auf."
      - "Es fließt dauerhaft ein konstanter Strom durch den Kondensator."
      - "Es fließt nie ein Strom, weil zwischen den Platten ein Isolator ist."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Zwischen den Platten ist ein Isolator. Durch ihn kann kein Dauerstrom fließen. Sobald die Platten geladen sind, steht der Strom still.
      - wert: 2
        meldung: Durch den Isolator fließt kein Strom, in den Zuleitungen aber schon, solange sich die Platten aufladen. Diese Ladung muss ja irgendwie auf die Platten kommen.
hinweise:
  - Auf die Platten fließt Ladung, bis $Q = C\cdot U$ erreicht ist. Was passiert danach?
loesung: |
  Beim Anschließen fließt Ladung auf die eine Platte und von der anderen weg. In den Zuleitungen fließt also kurz ein Strom.
  ---
  Ist $Q = C\cdot U$ erreicht, hört der Strom auf. Gleichstrom kann einen Kondensator nicht dauerhaft durchfließen. Bei Wechselspannung wird er aber ständig umgeladen, das ist der Kern dieses Abschnitts. Wiederholen: [Kapitel Elektrostatik](/lernen/physik1/elektrostatik), Kondensator.
```

**Worum geht es in diesem Abschnitt?** An einem ohmschen Widerstand gilt bei Wechselspannung einfach $U = R\cdot I$
mit Effektivwerten. Spule und Kondensator verhalten sich anders, weil sie Energie zwischenspeichern: die Spule im
Magnetfeld, der Kondensator im elektrischen Feld. Ihr Widerstand hängt von der Frequenz ab, und Strom und Spannung sind
gegeneinander verschoben.

**Der ohmsche Widerstand.** Bei einem Widerstand $R$ folgen Strom und Spannung einander im Gleichtakt. Wenn die Spannung
ihren Höchstwert hat, hat auch der Strom seinen. Man sagt: Strom und Spannung sind **in Phase**. Der Widerstand hängt
nicht von der Frequenz ab.

### Die Spule: induktiver Widerstand

Eine Spule wehrt sich durch Selbstinduktion gegen jede Stromänderung. Bei Wechselstrom ändert sich der Strom ständig,
und zwar umso schneller, je höher die Frequenz ist. Deshalb wächst die Gegenspannung mit der Frequenz, und die Spule
lässt weniger Strom durch. Ihren Wechselstromwiderstand nennt man **induktiven Widerstand**:
$$X_L = \omega L = 2\pi f L.$$
Dabei ist $L$ die Induktivität in Henry und $f$ die Frequenz. Die Einheit ist Ohm, denn $\text{s}^{-1}\cdot\text{V s/A} = \text{V/A}$.
Bei Gleichstrom ($f = 0$) ist $X_L = 0$. Dann ist die Spule nur ein Stück Draht. Der Effektivstrom ist
$I = U/X_L$.

**Phasenlage:** Der Strom in der Spule **eilt der Spannung um eine Viertelperiode nach**. Das heißt: Die Spannung
erreicht ihr Maximum eine Viertelperiode früher als der Strom. Grund: Die Gegenspannung ist am größten, wenn sich der
Strom am schnellsten ändert, also beim Nulldurchgang des Stroms.

```plot
x: [0, 40]
y: [-1.3, 1.3]
hoehe: 220
achsen: { x: "t in ms", y: "relativ" }
graphen:
  - { f: "sin(2*pi*x/20)", label: "Spannung u", farbe: 0, von: 0, bis: 40 }
  - { f: "0.7*sin(2*pi*x/20 - pi/2)", label: "Strom i", farbe: 1, von: 0, bis: 40 }
punkte:
  - { x: 5, y: 1, label: "u max" }
  - { x: 10, y: 0.7, label: "i max" }
beschriftung: "Spannung (blau) und Strom (orange) an einer Spule bei 50 Hz. Der Strom erreicht sein Maximum 5 ms, also eine Viertelperiode, nach der Spannung. Der Strom eilt der Spannung nach."
```

:::beispiel[Eine Spule am Netz]
Eine Spule mit $L = 0{,}40\,\text{H}$ und vernachlässigbarem Drahtwiderstand liegt an $230\,\text{V}$, $50\,\text{Hz}$.
Wie groß sind der induktive Widerstand und der Strom?

**Schritt 1, Kreisfrequenz:** $\omega = 2\pi\cdot 50\,\text{s}^{-1} = 314\,\text{s}^{-1}$.

**Schritt 2, induktiver Widerstand:** $X_L = \omega L = 314\,\text{s}^{-1}\cdot 0{,}40\,\dfrac{\text{V s}}{\text{A}} = 126\,\Omega$.

**Schritt 3, Strom:** $I = \dfrac{U}{X_L} = \dfrac{230\,\text{V}}{126\,\Omega} = 1{,}83\,\text{A}$.

**Deutung:** An $230\,\text{V}$ Gleichspannung würde nur der winzige Drahtwiderstand den Strom begrenzen. Die Spule
würde durchbrennen. Bei Wechselspannung begrenzt die Selbstinduktion den Strom auf weniger als $2\,\text{A}$.
:::

```aufgabe
id: p14-induktiver-widerstand
titel: Spule am Netz
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Eine Spule mit $L = 0{,}50\,\text{H}$ und vernachlässigbarem ohmschem Widerstand liegt an $230\,\text{V}$, $50\,\text{Hz}$. Berechne den induktiven Widerstand in Ω und den Effektivwert des Stroms in A.
teile:
  - typ: zahl
    label: X_L in Ω
    loesung: "2*pi*50*0.50"
    einheit: "Ω"
    anzeige: '157'
    fehler:
      - wert: "50*0.50"
        meldung: Der Faktor $2\pi$ fehlt. In $X_L = \omega L$ steht die Kreisfrequenz $\omega = 2\pi f$, nicht die Frequenz.
  - typ: zahl
    label: I in A
    loesung: "230/(2*pi*50*0.50)"
    einheit: "A"
    anzeige: '1{,}46'
    fehler:
      - wert: "230/(50*0.50)"
        meldung: Du hast mit $X_L = fL$ statt $2\pi fL$ gerechnet. Der Widerstand ist größer, der Strom also kleiner.
hinweise:
  - '$X_L = 2\pi f L$, dann $I = U/X_L$ mit Effektivwerten.'
loesung: |
  **Ansatz:** Die Spule hat den induktiven Widerstand $X_L = 2\pi fL$. Mit Effektivwerten gilt $I = U/X_L$.
  ---
  **Rechnung:** $X_L = 2\pi\cdot 50\,\text{s}^{-1}\cdot 0{,}50\,\text{H} = 157\,\Omega$ und $I = \dfrac{230\,\text{V}}{157\,\Omega} = 1{,}46\,\text{A}$.
```

### Der Kondensator: kapazitiver Widerstand

Gleichstrom kann einen Kondensator nicht dauerhaft durchfließen. Bei Wechselspannung wird er aber ständig umgeladen.
Die Ladung fließt in den Zuleitungen hin und her, also fließt dort ein Wechselstrom. Je höher die Frequenz, desto öfter
wird umgeladen und desto größer ist der Strom. Der **kapazitive Widerstand** sinkt deshalb mit der Frequenz:
$$X_C = \frac{1}{\omega C} = \frac{1}{2\pi f C}.$$
Dabei ist $C$ die Kapazität in Farad. Bei Gleichstrom ($f = 0$) wird $X_C$ unendlich groß: Der Kondensator sperrt.

**Phasenlage:** Beim Kondensator **eilt der Strom der Spannung um eine Viertelperiode voraus**. Grund: Der Ladestrom
ist am größten, wenn sich die Spannung am schnellsten ändert, also bei ihrem Nulldurchgang. Wenn die Spannung ihr
Maximum erreicht, ist der Kondensator voll, und der Strom ist gerade null.

Zusammengefasst:

- **Widerstand $R$:** Strom und Spannung in Phase, unabhängig von der Frequenz.
- **Spule:** $X_L = \omega L$ wächst mit der Frequenz, der Strom eilt nach. Bei Gleichstrom ein Kurzschluss.
- **Kondensator:** $X_C = 1/(\omega C)$ sinkt mit der Frequenz, der Strom eilt voraus. Bei Gleichstrom eine Sperre.

```plot
x: [0, 1000]
y: [0, 700]
hoehe: 240
achsen: { x: "f in Hz", y: "X in Ω" }
graphen:
  - { f: "2*pi*x*0.1", label: "X_L für L = 0,1 H", farbe: 0, von: 0, bis: 1000 }
  - { f: "1/(2*pi*x*10e-6)", label: "X_C für C = 10 µF", farbe: 1, von: 25, bis: 1000 }
  - { f: "200", label: "R = 200 Ω", farbe: 2, von: 0, bis: 1000, gestrichelt: true }
beschriftung: "Widerstände in Abhängigkeit von der Frequenz. Der induktive Widerstand einer Spule (blau) wächst gleichmäßig mit der Frequenz. Der kapazitive Widerstand eines Kondensators (orange) ist bei kleinen Frequenzen sehr groß und fällt dann ab. Ein ohmscher Widerstand (grün, gestrichelt) hängt nicht von der Frequenz ab."
```

:::beispiel[Ein Kondensator am Netz und bei doppelter Frequenz]
Ein Kondensator mit $C = 4{,}7\,\mu\text{F}$ liegt an $230\,\text{V}$, $50\,\text{Hz}$. Wie groß sind kapazitiver
Widerstand und Strom? Was ändert sich bei $100\,\text{Hz}$?

**Schritt 1, Einheiten:** $C = 4{,}7\cdot 10^{-6}\,\text{F}$, $\omega = 314\,\text{s}^{-1}$.

**Schritt 2, kapazitiver Widerstand:** $X_C = \dfrac{1}{\omega C} = \dfrac{1}{314\,\text{s}^{-1}\cdot 4{,}7\cdot 10^{-6}\,\text{F}} = 677\,\Omega$,
denn $1/(\text{s}^{-1}\cdot\text{A s/V}) = \text{V/A} = \Omega$.

**Schritt 3, Strom:** $I = \dfrac{U}{X_C} = \dfrac{230\,\text{V}}{677\,\Omega} = 0{,}340\,\text{A}$.

**Schritt 4, doppelte Frequenz:** $X_C$ halbiert sich auf $339\,\Omega$, der Strom verdoppelt sich auf $0{,}679\,\text{A}$.
:::

:::achtung[Fehler: kapazitiven Widerstand wie den induktiven berechnet]
Für $C = 4{,}7\,\mu\text{F}$ bei $50\,\text{Hz}$ rechnet ein Schüler
„$X_C = 2\pi fC = 2\pi\cdot 50\cdot 4{,}7\cdot 10^{-6}\,\Omega = 0{,}0015\,\Omega$“.

Das ist die Formel der Spule mit $C$ statt $L$. Beim Kondensator steht $\omega C$ im **Nenner**. Prüfe den Grenzfall:
Bei Gleichstrom sperrt der Kondensator, sein Widerstand muss also für kleine $f$ riesig werden. Das liefert nur
$X_C = 1/(2\pi fC) = 677\,\Omega$.
:::

:::achtung[Fehler: Frequenz statt Kreisfrequenz eingesetzt]
Eine Schülerin rechnet für eine Spule mit $L = 0{,}40\,\text{H}$ bei $50\,\text{Hz}$:
„$X_L = f\cdot L = 50\cdot 0{,}40\,\Omega = 20\,\Omega$, also $I = 230/20\,\text{A} = 11{,}5\,\text{A}$.“

Der Faktor $2\pi$ fehlt. In den Formeln steht die Kreisfrequenz $\omega = 2\pi f = 314\,\text{s}^{-1}$. Richtig ist
$X_L = 126\,\Omega$ und $I = 1{,}83\,\text{A}$. Der Fehler macht den Strom mehr als sechsmal zu groß.
:::

```aufgabe
id: p14-kapazitiver-widerstand
titel: Kondensator am Netz
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Ein Kondensator mit $10\,\mu\text{F}$ liegt an $230\,\text{V}$, $50\,\text{Hz}$. Berechne den kapazitiven Widerstand in Ω und den Effektivwert des Stroms in A.
teile:
  - typ: zahl
    label: X_C in Ω
    loesung: "1/(2*pi*50*10e-6)"
    einheit: "Ω"
    anzeige: '318'
    fehler:
      - wert: "2*pi*50*10e-6"
        meldung: Du hast $\omega C$ berechnet statt $1/(\omega C)$. Der Kondensator sperrt bei kleinen Frequenzen, sein Widerstand muss dort groß sein.
      - wert: "1/(50*10e-6)"
        meldung: Der Faktor $2\pi$ fehlt. Im Nenner steht die Kreisfrequenz $\omega = 2\pi f$.
  - typ: zahl
    label: I in A
    loesung: "230*2*pi*50*10e-6"
    einheit: "A"
    anzeige: '0{,}723'
    fehler:
      - wert: "325*2*pi*50*10e-6"
        meldung: Du hast den Scheitelwert $325\,\text{V}$ verwendet. Mit dem Effektivwert $230\,\text{V}$ erhältst du den Effektivstrom.
hinweise:
  - '$X_C = \dfrac{1}{2\pi fC}$ mit $C$ in Farad. Dann $I = U/X_C$.'
loesung: |
  **Ansatz:** $X_C = \dfrac{1}{2\pi fC}$ und $I = U/X_C$ mit Effektivwerten. $C = 10\cdot 10^{-6}\,\text{F}$.
  ---
  **Rechnung:** $X_C = \dfrac{1}{2\pi\cdot 50\,\text{s}^{-1}\cdot 10^{-5}\,\text{F}} = 318\,\Omega$ und $I = \dfrac{230\,\text{V}}{318\,\Omega} = 0{,}723\,\text{A}$.
```

```aufgabe
id: p14-8-umkehr
titel: Kondensator für eine Frequenzweiche wählen
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Ein Kondensator soll bei $1{,}0\,\text{kHz}$ einen kapazitiven Widerstand von $100\,\Omega$ haben. Welche Kapazität braucht er? Gib sie in $\mu\text{F}$ an.
teile:
  - typ: zahl
    loesung: "1/(2*pi*1000*100)*1e6"
    einheit: "µF"
    anzeige: '1{,}59'
    fehler:
      - wert: "1/(1000*100)*1e6"
        meldung: Der Faktor $2\pi$ fehlt. Aus $X_C = 1/(2\pi fC)$ folgt $C = 1/(2\pi f X_C)$.
      - wert: "2*pi*1000*100*1e6"
        meldung: Du hast nicht umgestellt, sondern multipliziert. Beim Umstellen tauschen $C$ und $X_C$ ihre Plätze im Nenner, $C = 1/(2\pi f X_C)$.
hinweise:
  - Stelle $X_C = \dfrac{1}{2\pi fC}$ nach $C$ um.
  - 'Multipliziere beide Seiten mit $C$ und teile durch $X_C$. Dann ist $C = \dfrac{1}{2\pi f X_C}$, mit $f = 1000\,\text{Hz}$.'
loesung: |
  **Ansatz:** $X_C = \dfrac{1}{2\pi fC}$, gesucht ist $C$.
  ---
  **Umformen:** Beide Seiten mal $C$ und durch $X_C$ teilen: $C = \dfrac{1}{2\pi f X_C}$.
  ---
  **Rechnung:** $C = \dfrac{1}{2\pi\cdot 1000\,\text{s}^{-1}\cdot 100\,\Omega} = 1{,}59\cdot 10^{-6}\,\text{F} = 1{,}59\,\mu\text{F}$.
```

```aufgabe
id: p14-frequenz
titel: Frequenz verdoppeln
niveau: 2
lernziel: 7
kompetenz: verstehen
angabe: |
  Die Frequenz einer Wechselspannung wird bei gleichem Effektivwert verdoppelt. Was passiert mit dem Strom durch eine ideale Spule und mit dem Strom durch einen Kondensator?
teile:
  - typ: auswahl
    optionen:
      - "Der Spulenstrom halbiert sich, der Kondensatorstrom verdoppelt sich."
      - "Der Spulenstrom verdoppelt sich, der Kondensatorstrom halbiert sich."
      - "Beide Ströme bleiben gleich, weil die Spannung gleich bleibt."
      - "Beide Ströme verdoppeln sich, weil alles doppelt so schnell geht."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Genau verkehrt. Die Spule wehrt sich stärker gegen schnellere Änderungen, $X_L$ wächst mit $f$. Der Kondensator wird öfter umgeladen, $X_C$ sinkt.
      - wert: 2
        meldung: Das gilt nur für einen ohmschen Widerstand. Die Widerstände von Spule und Kondensator hängen von der Frequenz ab.
      - wert: 3
        meldung: Beim Kondensator stimmt das. Die Spule bremst schnellere Stromänderungen aber stärker, ihr Strom wird kleiner.
hinweise:
  - '$X_L = 2\pi fL$ ist proportional zu $f$, $X_C = 1/(2\pi fC)$ umgekehrt proportional.'
  - 'Der Strom ist $I = U/X$. Was passiert mit $I$, wenn $X$ sich verdoppelt oder halbiert?'
loesung: |
  **Ansatz:** $I = U/X$ bei gleicher Spannung. Entscheidend ist, wie $X$ von $f$ abhängt.
  ---
  **Spule:** $X_L \propto f$ verdoppelt sich, der Strom halbiert sich.
  ---
  **Kondensator:** $X_C \propto 1/f$ halbiert sich, der Strom verdoppelt sich. Ein ohmscher Widerstand würde sich nicht ändern.
```

```aufgabe
id: p14-8-xf-diagramm
titel: Induktivität aus einem Diagramm
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Das Diagramm zeigt den gemessenen Wechselstromwiderstand einer Spule in Abhängigkeit von der Frequenz. Lies den Widerstand bei $200\,\text{Hz}$ ab und bestimme daraus die Induktivität in mH.
plot:
  x: [0, 500]
  y: [0, 300]
  achsen: { x: "f in Hz", y: "X_L in Ω" }
  graphen:
    - { f: "2*pi*x*0.080", farbe: 0, von: 0, bis: 500 }
  punkte:
    - { x: 200, y: 100.5, label: "(200 | 100)" }
  strecken:
    - { von: [200, 0], nach: [200, 100.5], gestrichelt: true }
    - { von: [0, 100.5], nach: [200, 100.5], gestrichelt: true }
teile:
  - typ: zahl
    loesung: "100/(2*pi*200)*1000"
    einheit: "mH"
    toleranz: 3
    anzeige: '80'
    fehler:
      - wert: "100/200*1000"
        meldung: Der Faktor $2\pi$ fehlt. Die Steigung der Geraden ist $2\pi L$, nicht $L$.
      - wert: "200/100*1000"
        meldung: Du hast Frequenz durch Widerstand geteilt. Aus $X_L = 2\pi fL$ folgt $L = X_L/(2\pi f)$.
hinweise:
  - 'Die Gerade geht durch den Ursprung, weil $X_L = 2\pi f L$ proportional zu $f$ ist.'
  - 'Abgelesen: $X_L \approx 100\,\Omega$ bei $200\,\text{Hz}$. Stelle nach $L$ um.'
loesung: |
  **Ablesen:** Bei $200\,\text{Hz}$ zeigt das Diagramm $X_L \approx 100\,\Omega$.
  ---
  **Umformen:** Aus $X_L = 2\pi fL$ folgt $L = \dfrac{X_L}{2\pi f}$.
  ---
  **Rechnung:** $L = \dfrac{100\,\Omega}{2\pi\cdot 200\,\text{s}^{-1}} = 0{,}0796\,\text{H} \approx 80\,\text{mH}$. Probe an einem zweiten Punkt: Bei $500\,\text{Hz}$ müsste $X_L = 2\pi\cdot 500\cdot 0{,}080\,\Omega = 251\,\Omega$ sein, das passt zum Diagramm.
```

### Phasenverschiebung im Experiment

```aufgabe
id: p14-8-vorhersage
art: check
titel: "Vorhersage: Welches Bauteil?"
niveau: 1
angabe: |
  Im Widget darunter ist die feste Kurve die Netzspannung, die verstellbare der Strom. Der Regler $c$ verschiebt den Strom. Sag vorher: Welchen Wert muss $c$ ungefähr haben, damit das Bild zu einem **Kondensator** passt?
teile:
  - typ: auswahl
    optionen:
      - '$c \approx -1{,}57$, der Strom ist nach links verschoben und erreicht sein Maximum vor der Spannung'
      - '$c = 0$, Strom und Spannung in Phase'
      - '$c \approx +1{,}57$, der Strom erreicht sein Maximum nach der Spannung'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: In Phase sind Strom und Spannung nur beim ohmschen Widerstand.
      - wert: 2
        meldung: Ein Strom, der nach der Spannung sein Maximum erreicht, eilt nach. Das passt zur Spule, nicht zum Kondensator.
hinweise:
  - Beim Kondensator eilt der Strom der Spannung voraus.
loesung: |
  Beim Kondensator eilt der Strom eine Viertelperiode voraus. Er erreicht sein Maximum früher als die Spannung, die Kurve ist nach links verschoben.
  ---
  In $\sin(\omega t - c)$ verschiebt ein negatives $c$ die Kurve nach links. Mit $c = -\pi/2 \approx -1{,}57$ passt das Bild zum Kondensator.
```

```widget
name: parameter
titel: Phasenverschiebung zwischen Spannung und Strom
props:
  f: "a*sin(2*pi*50*x - c)"
  parameter:
    - { name: "a", min: 0, max: 300, step: 10, wert: 200 }
    - { name: "c", min: -1.6, max: 1.6, step: 0.01, wert: 1.57 }
  zusatz: ["325*sin(2*pi*50*x)"]
  x: [0, 0.04]
  y: [-350, 350]
```

**Arbeitsauftrag:** Die feste Kurve ist die Netzspannung, die verstellbare ein maßstäblich vergrößerter Strom. Prüfe
deine Vorhersage: Stelle $c = -1{,}57$ ein, dann eilt der Strom voraus wie beim Kondensator. Mit $c = +1{,}57$ eilt er
nach wie bei der Spule, mit $c = 0$ sind beide in Phase wie beim Widerstand. Multipliziere in Gedanken die beiden
Kurven: Bei $c = \pm 1{,}57$ ist das Produkt $u\cdot i$ abwechselnd positiv und negativ. Was das für die Leistung
bedeutet, klärt [14.9 Wirkleistung, Blindleistung und Schwingkreis](/lernen/physik1/magnetismus-wechselstrom/wirkleistung-blindleistung-und-schwingkreis).

**Anwendung Frequenzweiche.** In einer Lautsprecherbox teilt eine Frequenzweiche das Musiksignal auf. Vor dem
Tieftöner liegt eine Spule: Sie lässt tiefe Töne durch und sperrt hohe. Vor dem Hochtöner liegt ein Kondensator: Er
sperrt tiefe Töne und lässt hohe durch. Ähnliche Filter trennen in jedem Radio und jedem Netzwerkkabel Signale nach
ihrer Frequenz.

```plot
x: [0, 10]
y: [0, 5]
gleich: true
hoehe: 220
strecken:
  - { von: [1, 1], nach: [1, 4], farbe: 3 }
  - { von: [1, 4], nach: [9, 4], farbe: 3 }
  - { von: [1, 1], nach: [9, 1], farbe: 3 }
  - { von: [5, 1], nach: [5, 4], farbe: 3 }
  - { von: [9, 1], nach: [9, 4], farbe: 3 }
punkte:
  - { x: 0.4, y: 2.5, label: "Signal ~" }
  - { x: 3, y: 4.4, label: "Spule L" }
  - { x: 5.9, y: 2.5, label: "Tieftöner" }
  - { x: 7, y: 4.4, label: "Kondensator C" }
  - { x: 9.7, y: 2.5, label: "Hochtöner" }
beschriftung: "Schaltskizze einer einfachen Frequenzweiche. Das Musiksignal (Wechselspannung, links) speist zwei Zweige. Im Zweig zum Tieftöner liegt eine Spule, die hohe Frequenzen sperrt. Im Zweig zum Hochtöner liegt ein Kondensator, der tiefe Frequenzen sperrt."
```

```aufgabe
id: p14-8-weiche
titel: Grenzfrequenz einer Frequenzweiche
niveau: 3
lernziel: 7
kompetenz: modellieren
angabe: |
  Vor einem Hochtöner mit dem Widerstand $8{,}0\,\Omega$ liegt ein Kondensator mit $10\,\mu\text{F}$. Als Grenze zwischen „sperrt“ und „lässt durch“ nimmt man die Frequenz, bei der der kapazitive Widerstand gleich dem Widerstand des Lautsprechers ist. Berechne diese Frequenz in Hz und entscheide, ob ein Ton mit $200\,\text{Hz}$ den Hochtöner gut erreicht.
teile:
  - typ: zahl
    loesung: "1/(2*pi*8.0*10e-6)"
    einheit: "Hz"
    anzeige: '1989'
hinweise:
  - Setze $X_C = R$ und löse nach $f$ auf.
  - '$\dfrac{1}{2\pi fC} = R$ ergibt $f = \dfrac{1}{2\pi RC}$.'
gefuehrt:
  - text: Schreib die Bedingung als Gleichung hin. Welche Größe ist gesucht?
    erklaerung: Gesucht ist $f$ in $\dfrac{1}{2\pi fC} = R$. Der kapazitive Widerstand soll gleich $8{,}0\,\Omega$ sein.
  - text: Berechne das Produkt $2\pi RC$ in Sekunden, angegeben in $10^{-4}\,\text{s}$.
    teil: { typ: zahl, loesung: "2*pi*8.0*10e-6/1e-4" }
    erklaerung: $2\pi\cdot 8{,}0\,\Omega\cdot 10\cdot 10^{-6}\,\text{F} = 5{,}03\cdot 10^{-4}\,\text{s}$, denn $\Omega\cdot\text{F} = \tfrac{\text{V}}{\text{A}}\cdot\tfrac{\text{A s}}{\text{V}} = \text{s}$.
  - text: Wie groß ist die Grenzfrequenz in Hz?
    teil: { typ: zahl, loesung: "1/(2*pi*8.0*10e-6)" }
    erklaerung: $f = \dfrac{1}{5{,}03\cdot 10^{-4}\,\text{s}} = 1989\,\text{Hz} \approx 2{,}0\,\text{kHz}$.
  - text: Wie groß ist $X_C$ bei $200\,\text{Hz}$ in Ω?
    teil: { typ: zahl, loesung: "1/(2*pi*200*10e-6)" }
    erklaerung: $X_C = \dfrac{1}{2\pi\cdot 200\cdot 10^{-5}}\,\Omega = 79{,}6\,\Omega$, also zehnmal so viel wie der Lautsprecher. Der tiefe Ton wird weitgehend gesperrt.
loesung: |
  **Modell:** Kondensator und Hochtöner liegen in Reihe. Ist $X_C$ viel größer als $R$, fällt fast die ganze Spannung am Kondensator ab. Ist $X_C$ viel kleiner, erreicht sie den Lautsprecher.
  ---
  **Grenzfrequenz:** $X_C = R$, also $\dfrac{1}{2\pi fC} = R$ und $f = \dfrac{1}{2\pi RC} = \dfrac{1}{2\pi\cdot 8{,}0\,\Omega\cdot 1{,}0\cdot 10^{-5}\,\text{F}} = 1989\,\text{Hz}$.
  ---
  **Ton mit 200 Hz:** $X_C = \dfrac{1}{2\pi\cdot 200\,\text{s}^{-1}\cdot 1{,}0\cdot 10^{-5}\,\text{F}} = 79{,}6\,\Omega$. Das ist zehnmal so viel wie der Lautsprecherwiderstand, der Ton erreicht den Hochtöner kaum. Genau das ist gewollt, tiefe Töne gehören zum Tieftöner.
```

```aufgabe
id: p14-8-warum-text
titel: Warum hängen die Widerstände von der Frequenz ab?
niveau: 3
lernziel: 7
kompetenz: begruenden
angabe: |
  Erkläre ohne Formeln, warum der Widerstand einer Spule mit der Frequenz **wächst** und der eines Kondensators mit der Frequenz **sinkt**. Nenne für beide den Grenzfall Gleichstrom.
teile:
  - typ: text
    muster: |
      Spule: Bei Wechselstrom ändert sich der Strom ständig. Die Spule induziert eine Gegenspannung, die umso größer ist, je schneller sich der Strom ändert. Bei hoher Frequenz ändert sich der Strom schnell, die Gegenspannung ist groß, es fließt wenig Strom. Bei Gleichstrom ändert sich nichts, die Spule ist nur ein Draht.
      Kondensator: Bei Wechselspannung wird der Kondensator ständig umgeladen. Bei hoher Frequenz geschieht das oft pro Sekunde, viel Ladung fließt pro Sekunde hin und her, der Strom ist groß. Bei Gleichstrom wird er nur einmal geladen, danach fließt nichts mehr, er sperrt.
hinweise:
  - Was bremst die Spule, und wann bremst sie stark?
  - Was transportiert beim Kondensator den Strom, und wie oft passiert das pro Sekunde?
loesung: |
  **Ansatz:** Beide Bauteile reagieren auf Änderungen. Bei hoher Frequenz ändern sich Strom und Spannung schneller.
  ---
  **Spule:** Die Gegenspannung wächst mit der Änderungsgeschwindigkeit des Stroms, also mit der Frequenz. Ihr Widerstand wächst. Bei Gleichstrom keine Änderung, keine Gegenspannung, die Spule wirkt wie ein Draht.
  ---
  **Kondensator:** Der Strom ist die pro Sekunde umgeladene Ladung. Bei hoher Frequenz wird öfter umgeladen, der Strom wächst, der Widerstand sinkt. Bei Gleichstrom wird nur einmal geladen, danach sperrt er.
```

## Wirkleistung, Blindleistung und Schwingkreis

```aufgabe
id: p14-9-check
art: check
titel: "Vorwissen: Leistung mit Effektivwerten"
niveau: 1
angabe: |
  Ein Heizlüfter nimmt an $230\,\text{V}$ (Effektivwert) den Strom $8{,}0\,\text{A}$ (Effektivwert) auf. Wie groß ist seine mittlere Leistung in W?
teile:
  - typ: zahl
    loesung: "230*8.0"
    einheit: "W"
    anzeige: '1840'
    fehler:
      - wert: "230*8.0/2"
        meldung: Den Faktor $\tfrac12$ braucht man nur, wenn man mit **Scheitelwerten** rechnet. Mit Effektivwerten gilt einfach $\bar P = U_\text{eff}\cdot I_\text{eff}$.
hinweise:
  - Mit Effektivwerten rechnet man an einem ohmschen Verbraucher wie mit Gleichstrom.
loesung: |
  An einem ohmschen Verbraucher gilt mit Effektivwerten $\bar P = U_\text{eff}\cdot I_\text{eff}$.
  ---
  $\bar P = 230\,\text{V}\cdot 8{,}0\,\text{A} = 1840\,\text{W}$. Wiederholen: [14.7 Wechselspannung: Scheitelwert und Effektivwert](/lernen/physik1/magnetismus-wechselstrom/wechselspannung-scheitelwert-und-effektivwert).
```

**Worum geht es in diesem Abschnitt?** Bei Spule und Kondensator sind Strom und Spannung gegeneinander verschoben. Dann
stimmt $P = U\cdot I$ nicht mehr. Du lernst, welcher Teil der Leistung wirklich genutzt wird (**Wirkleistung**) und
welcher nur hin und her pendelt (**Blindleistung**). Danach koppeln wir Spule und Kondensator zu einem
**Schwingkreis**, dem Herz jedes Radios.

### Leistung bei Phasenverschiebung

Die Augenblicksleistung ist immer $p(t) = u(t)\cdot i(t)$. An einer idealen Spule ist der Strom um eine Viertelperiode
verschoben. Dann ist das Produkt abwechselnd positiv und negativ. Eine Viertelperiode lang nimmt die Spule Energie auf
und baut ihr Magnetfeld auf. In der nächsten Viertelperiode baut sie das Feld ab und gibt die Energie an die Quelle
zurück. Im Mittel nimmt sie **keine** Leistung auf. Beim Kondensator ist es genauso, nur mit dem elektrischen Feld.

```plot
x: [0, 20]
y: [-1.3, 1.3]
hoehe: 230
achsen: { x: "t in ms", y: "relativ" }
graphen:
  - { f: "sin(2*pi*x/20)", label: "u", farbe: 0, von: 0, bis: 20 }
  - { f: "sin(2*pi*x/20 - pi/2)", label: "i (Spule)", farbe: 1, von: 0, bis: 20 }
  - { f: "sin(2*pi*x/20)*sin(2*pi*x/20 - pi/2)", label: "p = u·i", farbe: 2, von: 0, bis: 20 }
beschriftung: "Spannung (blau), Strom (orange) und Augenblicksleistung (grün) an einer idealen Spule während einer Periode. Die Leistung ist abwechselnd negativ und positiv, die Flächen über und unter der Achse sind gleich groß. Im Mittel nimmt die Spule keine Energie auf, sie pendelt nur hin und her."
```

Allgemein sei $\varphi$ der **Phasenwinkel** zwischen Strom und Spannung. Bei $\varphi = 0^\circ$ sind sie in Phase,
bei $\varphi = 90^\circ$ um eine Viertelperiode verschoben. Dann unterscheidet man drei Leistungen:

:::definition[Wirk-, Blind- und Scheinleistung]
Mit den Effektivwerten $U$ und $I$ und dem Phasenwinkel $\varphi$ gilt:

- **Wirkleistung** $P = U\cdot I\cdot\cos\varphi$, Einheit Watt. Sie wird wirklich umgesetzt, in Wärme, Licht oder Arbeit.
- **Blindleistung** $Q = U\cdot I\cdot\sin\varphi$, Einheit var (Volt-Ampere reaktiv). Sie pendelt zwischen Quelle und
  Feld hin und her.
- **Scheinleistung** $S = U\cdot I$, Einheit VA. Sie bestimmt, wie stark Leitungen und Generatoren belastet werden.

Die Zahl $\cos\varphi$ heißt **Leistungsfaktor**. **Beispiel:** Ein Heizstab hat $\cos\varphi = 1$, alles ist Wirkleistung.
**Kein Fall von Wirkleistung:** Eine ideale Spule hat $\varphi = 90^\circ$, $\cos\varphi = 0$. Ihre Leistung ist reine
Blindleistung.
:::

:::beispiel[Ein Elektromotor am Netz]
Ein Motor nimmt an $230\,\text{V}$ den Strom $5{,}0\,\text{A}$ auf. Sein Leistungsfaktor ist $\cos\varphi = 0{,}80$.

**Schritt 1, Scheinleistung:** $S = UI = 230\,\text{V}\cdot 5{,}0\,\text{A} = 1150\,\text{VA}$.

**Schritt 2, Wirkleistung:** $P = S\cos\varphi = 1150\,\text{VA}\cdot 0{,}80 = 920\,\text{W}$.

**Schritt 3, Blindleistung:** Aus $\cos\varphi = 0{,}80$ folgt $\sin\varphi = \sqrt{1 - 0{,}80^2} = 0{,}60$, also
$Q = 1150\cdot 0{,}60\,\text{var} = 690\,\text{var}$.

**Deutung:** Nur $920\,\text{W}$ werden genutzt. Die Leitung muss aber den vollen Strom von $5{,}0\,\text{A}$ tragen und
erwärmt sich entsprechend. Deshalb verlangen Netzbetreiber bei großen Betrieben einen Leistungsfaktor nahe $1$ und
gleichen Blindleistung mit Kondensatoren aus.
:::

:::achtung[Fehler: Scheinleistung als Wirkleistung genommen]
Für den Motor aus dem Beispiel rechnet ein Schüler: „$P = U\cdot I = 230\cdot 5{,}0\,\text{W} = 1150\,\text{W}$.
In einer Stunde verbraucht er also $1{,}15\,\text{kWh}$.“

Das Produkt $U\cdot I$ ist die Scheinleistung. Bei Phasenverschiebung pendelt ein Teil davon nur hin und her. Die
Wirkleistung ist $P = UI\cos\varphi = 920\,\text{W}$, die Energie in einer Stunde also $0{,}92\,\text{kWh}$. Den
Faktor $\cos\varphi$ darf man nur bei ohmschen Verbrauchern weglassen.
:::

```aufgabe
id: p14-9-wirkleistung
titel: Wirkleistung eines Geräts
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Ein Gerät nimmt an $230\,\text{V}$ den Strom $2{,}0\,\text{A}$ auf, der Leistungsfaktor ist $\cos\varphi = 0{,}50$. Wie groß ist die Wirkleistung in W?
teile:
  - typ: zahl
    loesung: "230*2.0*0.50"
    einheit: "W"
    anzeige: '230'
    fehler:
      - wert: "230*2.0"
        meldung: Das ist die Scheinleistung in VA. Die Wirkleistung enthält zusätzlich den Leistungsfaktor, $P = UI\cos\varphi$.
hinweise:
  - '$P = U\cdot I\cdot\cos\varphi$ mit Effektivwerten.'
loesung: |
  **Ansatz:** Wirkleistung $P = U\cdot I\cdot\cos\varphi$.
  ---
  **Rechnung:** $P = 230\,\text{V}\cdot 2{,}0\,\text{A}\cdot 0{,}50 = 230\,\text{W}$. Die Scheinleistung ist doppelt so groß, $460\,\text{VA}$.
```

```aufgabe
id: p14-9-spule-leistung
titel: Wie viel Leistung nimmt eine ideale Spule auf?
niveau: 1
lernziel: 7
kompetenz: verstehen
angabe: |
  Eine ideale Spule ohne Drahtwiderstand liegt an $230\,\text{V}$, $50\,\text{Hz}$, und es fließen $1{,}5\,\text{A}$. Wie viel Wirkleistung nimmt sie im Mittel auf?
teile:
  - typ: auswahl
    optionen:
      - "keine, weil sie die Energie jede Viertelperiode an die Quelle zurückgibt"
      - '$230\,\text{V}\cdot 1{,}5\,\text{A} = 345\,\text{W}$'
      - "die Hälfte davon, weil der Mittelwert von sin² gleich ½ ist"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: $U\cdot I$ ist die Scheinleistung. Strom und Spannung sind um $90^\circ$ verschoben, $\cos 90^\circ = 0$. Die Spule wird auch nicht warm.
      - wert: 2
        meldung: Der Faktor $\tfrac12$ steckt schon in den Effektivwerten. Hier kommt es auf die Phasenverschiebung an, und bei $90^\circ$ ist die Wirkleistung null.
hinweise:
  - Bei einer idealen Spule beträgt die Phasenverschiebung $90^\circ$. Was ist $\cos 90^\circ$?
loesung: |
  **Ansatz:** Wirkleistung $P = UI\cos\varphi$, bei der idealen Spule ist $\varphi = 90^\circ$.
  ---
  $\cos 90^\circ = 0$, also $P = 0$. Die Spule speichert in einer Viertelperiode Energie im Magnetfeld und gibt sie in der nächsten zurück. Sie belastet die Leitung mit $345\,\text{VA}$ Scheinleistung, verbraucht aber nichts.
```

### Zeiger und Scheinwiderstand (Vertiefung)

Liegen ein Widerstand $R$ und eine Spule in Reihe, sind die Spannungen an beiden um eine Viertelperiode verschoben. Man
kann sie deshalb nicht einfach addieren. Man stellt sie als **Zeiger** dar, als Pfeile, die senkrecht aufeinander
stehen: $R$ waagrecht, $X_L$ senkrecht. Der Gesamtwiderstand, der **Scheinwiderstand** $Z$, ist die Länge des
Summenpfeils:
$$Z = \sqrt{R^2 + X_L^2}, \qquad \tan\varphi = \frac{X_L}{R}.$$
In der Elektrotechnik schreibt man das kurz mit komplexen Zahlen: $Z = R + \mathrm{j}X_L$, wobei man $\mathrm{j}$ statt
$i$ schreibt, um Verwechslungen mit dem Strom zu vermeiden. Der Betrag einer komplexen Zahl und ihr Winkel in der
Zahlenebene sind genau $Z$ und $\varphi$. Das steht im Mathematikkurs in
[15.5 Polarform und Exponentialform](/lernen/mathe3/komplexe-zahlen/polarform-und-exponentialform).

:::beispiel[Spule mit Drahtwiderstand am Netz (Vertiefung)]
Eine Spule hat den Drahtwiderstand $R = 30\,\Omega$ und bei $50\,\text{Hz}$ den induktiven Widerstand $X_L = 40\,\Omega$.
Sie liegt an $230\,\text{V}$.

**Schritt 1, Scheinwiderstand:** $Z = \sqrt{30^2 + 40^2}\,\Omega = \sqrt{2500}\,\Omega = 50\,\Omega$.

**Schritt 2, Strom:** $I = \dfrac{U}{Z} = \dfrac{230\,\text{V}}{50\,\Omega} = 4{,}6\,\text{A}$.

**Schritt 3, Phasenwinkel:** $\tan\varphi = 40/30$, also $\varphi = 53{,}1^\circ$ und $\cos\varphi = 0{,}60$.

**Schritt 4, Wirkleistung:** $P = UI\cos\varphi = 230\,\text{V}\cdot 4{,}6\,\text{A}\cdot 0{,}60 = 635\,\text{W}$.
Probe: Wärme entsteht nur im Drahtwiderstand, $I^2R = (4{,}6\,\text{A})^2\cdot 30\,\Omega = 635\,\text{W}$.
:::

:::achtung[Fehler: Widerstände einfach addiert]
Für die Spule aus dem Beispiel rechnet eine Schülerin: „$Z = R + X_L = 30\,\Omega + 40\,\Omega = 70\,\Omega$, also
$I = 230/70\,\text{A} = 3{,}3\,\text{A}$.“

Die Spannungen an $R$ und an $X_L$ erreichen ihr Maximum zu verschiedenen Zeiten. Sie addieren sich wie senkrechte
Pfeile, nach Pythagoras. Richtig ist $Z = \sqrt{30^2 + 40^2}\,\Omega = 50\,\Omega$ und $I = 4{,}6\,\text{A}$.
:::

```aufgabe
id: p14-9-scheinwiderstand
titel: Scheinwiderstand berechnen (Vertiefung)
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Ein Widerstand mit $60\,\Omega$ und eine ideale Spule mit $X_L = 80\,\Omega$ liegen in Reihe an $230\,\text{V}$. Berechne den Scheinwiderstand in Ω und den Strom in A.
teile:
  - typ: zahl
    label: Z in Ω
    loesung: "sqrt(60^2+80^2)"
    einheit: "Ω"
    anzeige: '100'
    fehler:
      - wert: "60+80"
        meldung: Die Widerstände sind um $90^\circ$ phasenverschoben und addieren sich wie senkrechte Pfeile, $Z = \sqrt{R^2 + X_L^2}$.
  - typ: zahl
    label: I in A
    loesung: "230/sqrt(60^2+80^2)"
    einheit: "A"
    anzeige: '2{,}3'
    fehler:
      - wert: "230/140"
        meldung: Du hast mit $Z = 140\,\Omega$ gerechnet. Der Scheinwiderstand folgt aus Pythagoras und ist $100\,\Omega$.
hinweise:
  - Zeichne $R$ waagrecht und $X_L$ senkrecht. Der Scheinwiderstand ist die Hypotenuse.
  - '$Z = \sqrt{R^2 + X_L^2}$, dann $I = U/Z$.'
loesung: |
  **Ansatz:** $R$ und $X_L$ sind Zeiger, die senkrecht aufeinander stehen. Der Scheinwiderstand ist die Länge des Summenzeigers.
  ---
  **Scheinwiderstand:** $Z = \sqrt{(60\,\Omega)^2 + (80\,\Omega)^2} = \sqrt{10\,000}\,\Omega = 100\,\Omega$.
  ---
  **Strom:** $I = \dfrac{230\,\text{V}}{100\,\Omega} = 2{,}3\,\text{A}$.
```

### Der Schwingkreis

Verbindet man einen geladenen Kondensator mit einer Spule, entsteht ein **Schwingkreis** (Thomsonscher Schwingkreis).
Was passiert, Schritt für Schritt:

1. Der Kondensator entlädt sich über die Spule. Wegen der Selbstinduktion steigt der Strom nur allmählich.
2. Ist der Kondensator leer, fließt der größte Strom. Die Energie steckt jetzt ganz im Magnetfeld der Spule.
3. Die Spule hält den Strom aufrecht, während ihr Feld zusammenbricht. Der Kondensator wird umgekehrt aufgeladen.
4. Dann läuft alles rückwärts. Die Energie pendelt zwischen elektrischem Feld und Magnetfeld hin und her.

Das gleicht dem Federpendel aus dem [Kapitel Schwingungen](/lernen/physik1/schwingungen): Dort pendelt die Energie
zwischen Spannenergie der Feder und Bewegungsenergie. Die Eigenfrequenz des Schwingkreises ist die Frequenz, bei der
$X_L = X_C$ gilt. Aus $\omega L = \dfrac{1}{\omega C}$ folgt $\omega^2 = \dfrac{1}{LC}$ und damit die
**Thomsonsche Schwingungsgleichung**
$$f_0 = \frac{1}{2\pi\sqrt{LC}}.$$
Dabei ist $L$ die Induktivität und $C$ die Kapazität. Ein Radioempfänger stellt mit einem verstellbaren Kondensator
seine Eigenfrequenz auf die Frequenz eines Senders ein. Bei dieser **Resonanz** schwingt der Kreis besonders stark mit.

```plot
x: [0, 8]
y: [0, 5]
gleich: true
hoehe: 200
strecken:
  - { von: [1, 1], nach: [7, 1], farbe: 3 }
  - { von: [1, 4], nach: [7, 4], farbe: 3 }
  - { von: [1, 1], nach: [1, 2.2], farbe: 3 }
  - { von: [1, 2.8], nach: [1, 4], farbe: 3 }
  - { von: [0.4, 2.2], nach: [1.6, 2.2], farbe: 0 }
  - { von: [0.4, 2.8], nach: [1.6, 2.8], farbe: 0 }
  - { von: [7, 1], nach: [7, 4], farbe: 1 }
punkte:
  - { x: 2.3, y: 2.5, label: "C" }
  - { x: 7.6, y: 2.5, label: "L" }
beschriftung: "Schaltskizze eines Schwingkreises. Links ein Kondensator C (zwei kurze Platten), rechts eine Spule L (orange). Die Energie pendelt zwischen dem elektrischen Feld im Kondensator und dem Magnetfeld in der Spule."
```

:::beispiel[Ein Radio auf Mittelwelle]
Ein Schwingkreis hat $L = 0{,}25\,\text{mH}$ und $C = 100\,\text{pF}$. Auf welche Frequenz ist er abgestimmt?

**Schritt 1, Einheiten:** $L = 2{,}5\cdot 10^{-4}\,\text{H}$, $C = 100\cdot 10^{-12}\,\text{F} = 1{,}0\cdot 10^{-10}\,\text{F}$.

**Schritt 2, Produkt:** $LC = 2{,}5\cdot 10^{-14}\,\text{s}^2$, denn $\text{H}\cdot\text{F} = \tfrac{\text{V s}}{\text{A}}\cdot\tfrac{\text{A s}}{\text{V}} = \text{s}^2$.
Die Wurzel ist $\sqrt{LC} = 1{,}58\cdot 10^{-7}\,\text{s}$.

**Schritt 3, Frequenz:** $f_0 = \dfrac{1}{2\pi\cdot 1{,}58\cdot 10^{-7}\,\text{s}} = 1{,}01\cdot 10^{6}\,\text{Hz} = 1{,}01\,\text{MHz}$.

**Deutung:** Das liegt im Mittelwellenbereich. Mit einem größeren Kondensator sinkt die Frequenz.
:::

:::achtung[Fehler: den Faktor 2π vergessen]
Für das Beispiel rechnet ein Schüler „$f_0 = \dfrac{1}{\sqrt{LC}} = \dfrac{1}{1{,}58\cdot 10^{-7}}\,\text{Hz} = 6{,}3\,\text{MHz}$“.

$1/\sqrt{LC}$ ist die **Kreisfrequenz** $\omega_0$, nicht die Frequenz. Wegen $\omega = 2\pi f$ muss man noch durch
$2\pi$ teilen. Richtig ist $f_0 = 1{,}01\,\text{MHz}$.
:::

```aufgabe
id: p14-schwingkreis
titel: Eigenfrequenz eines Schwingkreises
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Ein Schwingkreis besteht aus einer Spule mit $L = 10\,\text{mH}$ und einem Kondensator mit $C = 100\,\text{nF}$. Berechne seine Eigenfrequenz in kHz. Bei dieser Frequenz sind $X_L$ und $X_C$ gleich groß. Berechne auch diesen Wert in Ω.
teile:
  - typ: zahl
    label: f₀ in kHz
    loesung: "1/(2*pi*sqrt(10e-3*100e-9))/1000"
    einheit: "kHz"
    anzeige: '5{,}03'
    fehler:
      - wert: "1/sqrt(10e-3*100e-9)/1000"
        meldung: Das ist die Kreisfrequenz $\omega_0$ in $1/\text{ms}$. Für die Frequenz musst du noch durch $2\pi$ teilen.
  - typ: zahl
    label: X in Ω
    loesung: "sqrt(10e-3/100e-9)"
    einheit: "Ω"
    anzeige: '316'
    fehler:
      - wert: "sqrt(10e-3*100e-9)"
        meldung: Du hast $\sqrt{LC}$ berechnet, das ist eine Zeit. Aus $\omega L = 1/(\omega C)$ folgt für den Widerstand $X = \sqrt{L/C}$.
hinweise:
  - '$f_0 = \dfrac{1}{2\pi\sqrt{LC}}$ mit $L$ in H und $C$ in F.'
  - 'Bei $f_0$ ist $X_L = 2\pi f_0 L$. Das lässt sich zu $\sqrt{L/C}$ vereinfachen.'
loesung: |
  **Produkt:** $LC = 10\cdot 10^{-3}\,\text{H}\cdot 100\cdot 10^{-9}\,\text{F} = 1{,}0\cdot 10^{-9}\,\text{s}^2$, $\sqrt{LC} = 3{,}16\cdot 10^{-5}\,\text{s}$.
  ---
  **Eigenfrequenz:** $f_0 = \dfrac{1}{2\pi\cdot 3{,}16\cdot 10^{-5}\,\text{s}} = 5{,}03\,\text{kHz}$.
  ---
  **Widerstand bei Resonanz:** $X_L = 2\pi f_0 L = \dfrac{L}{\sqrt{LC}} = \sqrt{\dfrac{L}{C}} = \sqrt{10^{5}}\,\Omega = 316\,\Omega$, und genauso groß ist $X_C$.
```

```aufgabe
id: p14-9-sender
titel: Einen Sender einstellen
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Ein Radio soll einen Sender mit $1{,}5\,\text{MHz}$ empfangen. Die Spule des Schwingkreises hat $L = 0{,}20\,\text{mH}$. Auf welche Kapazität muss der Drehkondensator eingestellt werden? Gib sie in pF an.
teile:
  - typ: zahl
    loesung: "1/((2*pi*1.5e6)^2*0.20e-3)*1e12"
    einheit: "pF"
    anzeige: '56{,}3'
    fehler:
      - wert: "1/((1.5e6)^2*0.20e-3)*1e12"
        meldung: Der Faktor $(2\pi)^2$ fehlt. In der Formel steht $\omega_0 = 2\pi f_0$, und beim Umstellen wird sie quadriert.
      - wert: "1/(2*pi*1.5e6*0.20e-3)*1e12"
        meldung: Du hast vergessen zu quadrieren. Aus $f_0 = 1/(2\pi\sqrt{LC})$ folgt durch Quadrieren $C = 1/((2\pi f_0)^2 L)$.
hinweise:
  - Stelle $f_0 = \dfrac{1}{2\pi\sqrt{LC}}$ nach $C$ um. Quadriere dazu beide Seiten.
  - '$C = \dfrac{1}{(2\pi f_0)^2 L}$. Ein Picofarad ist $10^{-12}\,\text{F}$.'
loesung: |
  **Umformen:** $2\pi f_0\sqrt{LC} = 1$. Quadrieren ergibt $(2\pi f_0)^2 LC = 1$, also $C = \dfrac{1}{(2\pi f_0)^2 L}$.
  ---
  **Rechnung:** $2\pi f_0 = 9{,}42\cdot 10^{6}\,\text{s}^{-1}$, quadriert $8{,}88\cdot 10^{13}\,\text{s}^{-2}$. $C = \dfrac{1}{8{,}88\cdot 10^{13}\,\text{s}^{-2}\cdot 2{,}0\cdot 10^{-4}\,\text{H}} = 5{,}63\cdot 10^{-11}\,\text{F}$.
  ---
  **Ergebnis:** $C = 56{,}3\,\text{pF}$. Das ist ein typischer Wert für einen Drehkondensator.
```

```aufgabe
id: p14-9-vierfach
titel: Vierfache Kapazität
niveau: 2
lernziel: 7
kompetenz: verstehen
angabe: |
  In einem Schwingkreis wird der Kondensator durch einen mit **vierfacher** Kapazität ersetzt. Was passiert mit der Eigenfrequenz?
teile:
  - typ: auswahl
    optionen:
      - "Sie halbiert sich."
      - "Sie wird ein Viertel so groß."
      - "Sie verdoppelt sich."
      - "Sie bleibt gleich, weil die Spule gleich bleibt."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: $C$ steht unter einer **Wurzel**. Vierfaches $C$ macht $\sqrt{LC}$ nur doppelt so groß.
      - wert: 2
        meldung: $C$ steht im Nenner. Eine größere Kapazität macht die Frequenz kleiner, nicht größer. Ein großer Kondensator braucht länger zum Umladen.
      - wert: 3
        meldung: Die Eigenfrequenz hängt von $L$ **und** $C$ ab, $f_0 = 1/(2\pi\sqrt{LC})$.
hinweise:
  - Wie kommt $C$ in $f_0 = \dfrac{1}{2\pi\sqrt{LC}}$ vor?
  - '$f_0$ ist proportional zu $1/\sqrt C$. Was ist $\sqrt 4$?'
loesung: |
  **Ansatz:** $f_0 = \dfrac{1}{2\pi\sqrt{LC}}$, also $f_0 \propto \dfrac{1}{\sqrt C}$.
  ---
  Bei vierfachem $C$ wird $\sqrt{C}$ doppelt so groß, weil $\sqrt 4 = 2$ ist.
  ---
  Die Eigenfrequenz halbiert sich. Ein größerer Kondensator braucht länger zum Umladen, die Schwingung wird langsamer.
```

```aufgabe
id: p14-9-motor
titel: Blindleistung eines Motors
niveau: 3
lernziel: 7
kompetenz: modellieren
angabe: |
  Ein Motor nimmt an $230\,\text{V}$ die Wirkleistung $1{,}5\,\text{kW}$ aus dem Netz auf. Sein Leistungsfaktor ist $\cos\varphi = 0{,}75$.

  a) Welcher Strom in A fließt in der Zuleitung?

  b) Wie groß ist die Blindleistung in var?

  c) Wie groß wäre der Strom bei gleicher Wirkleistung und $\cos\varphi = 1$?
teile:
  - typ: zahl
    label: a) I in A
    loesung: "1500/(230*0.75)"
    einheit: "A"
    anzeige: '8{,}70'
  - typ: zahl
    label: b) Q in var
    loesung: "sqrt((1500/0.75)^2-1500^2)"
    einheit: "var"
    anzeige: '1323'
  - typ: zahl
    label: c) I in A
    loesung: "1500/230"
    einheit: "A"
    anzeige: '6{,}52'
hinweise:
  - 'Aus $P = UI\cos\varphi$ folgt $I = P/(U\cos\varphi)$.'
  - 'Scheinleistung $S = P/\cos\varphi$, dann $Q = \sqrt{S^2 - P^2}$, weil $P$, $Q$ und $S$ ein rechtwinkliges Dreieck bilden.'
gefuehrt:
  - text: Wie groß ist die Scheinleistung in VA?
    teil: { typ: zahl, loesung: "1500/0.75" }
    erklaerung: $S = P/\cos\varphi = 1500\,\text{W}/0{,}75 = 2000\,\text{VA}$.
  - text: Welcher Strom in A gehört zu dieser Scheinleistung?
    teil: { typ: zahl, loesung: "1500/(230*0.75)" }
    erklaerung: $I = S/U = 2000\,\text{VA}/230\,\text{V} = 8{,}70\,\text{A}$.
  - text: Wie groß ist die Blindleistung in var?
    teil: { typ: zahl, loesung: "sqrt((1500/0.75)^2-1500^2)" }
    erklaerung: $Q = \sqrt{2000^2 - 1500^2}\,\text{var} = \sqrt{1{,}75\cdot 10^{6}}\,\text{var} = 1323\,\text{var}$.
  - text: Überlege, warum der Netzbetreiber einen kleinen Leistungsfaktor nicht mag.
    erklaerung: Bei $\cos\varphi = 1$ bräuchte der Motor nur $6{,}52\,\text{A}$. Der zusätzliche Strom erwärmt die Leitungen, obwohl er keine nutzbare Leistung liefert.
loesung: |
  **Modell:** Wirk-, Blind- und Scheinleistung bilden ein rechtwinkliges Dreieck mit $S$ als Hypotenuse und $P = S\cos\varphi$.
  ---
  **a)** $I = \dfrac{P}{U\cos\varphi} = \dfrac{1500\,\text{W}}{230\,\text{V}\cdot 0{,}75} = 8{,}70\,\text{A}$.
  ---
  **b)** $S = UI = 2000\,\text{VA}$, $Q = \sqrt{S^2 - P^2} = \sqrt{2000^2 - 1500^2}\,\text{var} = 1323\,\text{var}$.
  ---
  **c)** Bei $\cos\varphi = 1$ wäre $I = \dfrac{1500\,\text{W}}{230\,\text{V}} = 6{,}52\,\text{A}$. Die Leitung trägt beim realen Motor also ein Drittel mehr Strom, als für die Wirkleistung nötig wäre. Die Leitungsverluste $I^2R$ sind sogar $(8{,}70/6{,}52)^2 = 1{,}78$-mal so groß.
```

```aufgabe
id: p14-9-schwingkreis-text
titel: Den Schwingkreis erklären
niveau: 3
lernziel: 7
kompetenz: begruenden
angabe: |
  Ein Kondensator wird geladen und dann mit einer Spule verbunden. Erkläre, warum eine elektrische Schwingung entsteht, wo die Energie zu welchem Zeitpunkt steckt und warum die Schwingung in der Praxis allmählich abklingt.
teile:
  - typ: text
    muster: |
      Am Anfang steckt die ganze Energie im elektrischen Feld des Kondensators. Er entlädt sich über die Spule. Wegen der Selbstinduktion wächst der Strom nur allmählich.
      Ist der Kondensator leer, ist der Strom am größten, und die Energie steckt im Magnetfeld der Spule. Die Spule hält den Strom aufrecht, während ihr Feld abnimmt, und lädt den Kondensator umgekehrt auf.
      Danach wiederholt sich alles in Gegenrichtung. Die Energie pendelt zwischen elektrischem und magnetischem Feld, mit der Frequenz $f_0 = 1/(2\pi\sqrt{LC})$.
      In der Praxis haben Draht und Spule einen ohmschen Widerstand. In ihm wird bei jedem Durchgang Energie in Wärme umgesetzt, und die Schwingung klingt ab, wie ein gedämpftes Federpendel.
hinweise:
  - Verfolge vier Zeitpunkte, Kondensator voll, Strom maximal, Kondensator umgekehrt voll, Strom maximal in Gegenrichtung.
  - Vergleiche mit dem Federpendel. Was entspricht der Spannenergie, was der Bewegungsenergie, was der Reibung?
loesung: |
  **Ansatz:** Der Schwingkreis hat zwei Energiespeicher, das elektrische Feld im Kondensator und das Magnetfeld in der Spule.
  ---
  **Ablauf:** Kondensator entlädt sich, der Strom wächst wegen der Selbstinduktion langsam. Bei leerem Kondensator steckt alle Energie im Magnetfeld. Die Spule treibt den Strom weiter und lädt den Kondensator umgekehrt auf. Dann läuft alles zurück.
  ---
  **Dämpfung:** Der ohmsche Widerstand wandelt bei jedem Durchgang einen Teil der Energie in Wärme um. Die Amplitude nimmt ab, wie beim gedämpften Federpendel aus dem [Kapitel Schwingungen](/lernen/physik1/schwingungen).
```

## Elektromotor, Generator und Transformator

```aufgabe
id: p14-10-check
art: check
titel: "Vorwissen: Drehmoment auf eine Leiterschleife"
niveau: 1
angabe: |
  Eine stromdurchflossene Leiterschleife steht drehbar in einem homogenen Magnetfeld. In welcher Stellung ist das Drehmoment auf sie **null**?
teile:
  - typ: auswahl
    optionen:
      - "wenn die Schleifenebene senkrecht zum Feld steht"
      - "wenn die Schleifenebene parallel zum Feld liegt"
      - "in jeder Stellung gleich groß, weil Strom und Feld konstant sind"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: In dieser Stellung haben die Kräfte auf die beiden Seiten den größten Hebelarm. Dort ist das Drehmoment am **größten**.
      - wert: 2
        meldung: Die Kräfte bleiben gleich groß, aber ihr Hebelarm ändert sich mit der Stellung. Deshalb gilt $M = NBIA\sin\varphi$.
hinweise:
  - '$M = NBIA\sin\varphi$, wobei $\varphi$ der Winkel zwischen Flächensenkrechte und Feld ist.'
loesung: |
  Das Drehmoment ist $M = NBIA\sin\varphi$. Es ist null, wenn $\sin\varphi = 0$, also wenn die Flächensenkrechte parallel zum Feld zeigt.
  ---
  Dann steht die Schleifenebene senkrecht zum Feld, beide Kräfte liegen auf einer Linie, der Hebelarm ist null. Wiederholen: [14.2 Die Kraft auf einen stromdurchflossenen Leiter](/lernen/physik1/magnetismus-wechselstrom/die-kraft-auf-einen-stromdurchflossenen-leiter).
```

**Worum geht es in diesem Abschnitt?** Drei Maschinen tragen die Elektrotechnik. Der **Motor** wandelt elektrische
Energie in Bewegung um, der **Generator** Bewegung in elektrische Energie, der **Transformator** eine Wechselspannung in
eine andere. Alle drei beruhen auf den Gesetzen dieses Kapitels: der Kraft auf Ströme im Feld und der Induktion.

### Der Elektromotor

Ein Gleichstrommotor besteht aus einem feststehenden Teil, dem **Stator**, und einem drehbaren Teil, dem **Rotor**. Der
Stator erzeugt ein Magnetfeld, mit Dauermagneten oder Feldspulen. Auf dem Rotor sitzt eine Spule, durch die Strom
fließt. Wie in [14.2 Die Kraft auf einen stromdurchflossenen Leiter](/lernen/physik1/magnetismus-wechselstrom/die-kraft-auf-einen-stromdurchflossenen-leiter)
gezeigt, wirkt auf sie das Drehmoment $M = NBIA\sin\varphi$.

Allein würde sich die Spule nur so weit drehen, bis ihre Ebene senkrecht zum Feld steht. Dort ist das Drehmoment null.
Damit sie sich weiterdreht, muss man den Strom in genau dieser Stellung **umpolen**. Das erledigt der **Kommutator**,
auch Stromwender genannt: ein in zwei Hälften geteilter Ring auf der Achse, an dem zwei Kohlebürsten schleifen. Nach jeder
halben Umdrehung tauschen die Ringhälften die Bürsten, und der Strom in der Spule kehrt sich um. Reale Motoren haben
viele Spulen rund um den Rotor, damit das Drehmoment gleichmäßig bleibt.

**Die Gegenspannung.** Ein drehender Motor ist zugleich ein Generator: Seine Spule bewegt sich im Magnetfeld, also wird
in ihr eine Spannung induziert. Nach Lenz wirkt sie gegen den antreibenden Strom. Diese **Gegenspannung** wächst mit der
Drehzahl. Für den Strom bleibt nur die Differenz zwischen Betriebsspannung und Gegenspannung:
$$I = \frac{U - U_\text{gegen}}{R}.$$
Dabei ist $R$ der Widerstand der Wicklung. Beim Anlaufen dreht der Motor noch nicht, die Gegenspannung fehlt, und der
Strom ist sehr groß.

:::beispiel[Anlaufstrom und Betriebsstrom]
Ein Gleichstrommotor hängt an $24\,\text{V}$, seine Wicklung hat $1{,}2\,\Omega$. Im Betrieb induziert die Drehung
eine Gegenspannung von $21{,}6\,\text{V}$.

**Schritt 1, Anlaufstrom:** Im Stillstand ist $U_\text{gegen} = 0$, also $I = \dfrac{24\,\text{V}}{1{,}2\,\Omega} = 20\,\text{A}$.

**Schritt 2, Betriebsstrom:** $I = \dfrac{24\,\text{V} - 21{,}6\,\text{V}}{1{,}2\,\Omega} = \dfrac{2{,}4\,\text{V}}{1{,}2\,\Omega} = 2{,}0\,\text{A}$.

**Deutung:** Beim Einschalten fließt zehnmal so viel Strom wie im Betrieb. Deshalb flackert das Licht, wenn ein großer
Motor anläuft. Wird ein Motor blockiert, fehlt die Gegenspannung dauerhaft, und die Wicklung kann durchbrennen.
:::

```aufgabe
id: p14-motor-drehmoment
titel: Drehmoment eines Motors
niveau: 2
lernziel: 8
kompetenz: rechnen
angabe: |
  Die Rotorspule eines kleinen Motors hat $50$ Windungen und eine Fläche von $40\,\text{cm}^2$. Sie führt $2{,}0\,\text{A}$ in einem Feld von $0{,}50\,\text{T}$. Wie groß ist das größte Drehmoment in N m?
teile:
  - typ: zahl
    loesung: "50*0.50*2.0*40e-4"
    einheit: "N m"
    anzeige: '0{,}20'
    fehler:
      - wert: "50*0.50*2.0*40"
        meldung: Du hast die Fläche in $\text{cm}^2$ eingesetzt. $40\,\text{cm}^2 = 4{,}0\cdot 10^{-3}\,\text{m}^2$.
      - wert: "0.50*2.0*40e-4"
        meldung: Die Windungszahl fehlt. Jede der $50$ Windungen trägt ihr Kräftepaar bei.
hinweise:
  - Das Drehmoment ist am größten, wenn die Spulenebene parallel zum Feld liegt, $\sin\varphi = 1$.
  - '$M_\text{max} = NBIA$ mit $A$ in $\text{m}^2$.'
loesung: |
  **Ansatz:** Größtes Drehmoment bei $\sin\varphi = 1$: $M_\text{max} = NBIA$.
  ---
  **Einheiten:** $A = 40\,\text{cm}^2 = 40\cdot 10^{-4}\,\text{m}^2 = 4{,}0\cdot 10^{-3}\,\text{m}^2$.
  ---
  **Rechnung:** $M_\text{max} = 50\cdot 0{,}50\,\dfrac{\text{N}}{\text{A m}}\cdot 2{,}0\,\text{A}\cdot 4{,}0\cdot 10^{-3}\,\text{m}^2 = 0{,}20\,\text{N m}$.
```

```aufgabe
id: p14-10-gegenspannung
titel: Gegenspannung eines Motors
niveau: 2
lernziel: 8
kompetenz: anwenden
angabe: |
  Ein Spielzeugmotor hängt an $12\,\text{V}$, seine Wicklung hat $0{,}80\,\Omega$. Im Betrieb fließen $1{,}5\,\text{A}$.

  a) Wie groß ist die Gegenspannung in V?

  b) Wie groß ist der Strom in A, wenn man die Achse festhält?
teile:
  - typ: zahl
    label: a) Gegenspannung in V
    loesung: "12-1.5*0.80"
    einheit: "V"
    anzeige: '10{,}8'
    fehler:
      - wert: "1.5*0.80"
        meldung: Das ist die Spannung, die an der Wicklung abfällt. Die Gegenspannung ist der Rest der Betriebsspannung, $U_\text{gegen} = U - IR$.
  - typ: zahl
    label: b) Strom bei festgehaltener Achse in A
    loesung: "12/0.80"
    einheit: "A"
    anzeige: '15'
    fehler:
      - wert: "1.5"
        meldung: Hält man die Achse fest, dreht sich der Rotor nicht. Dann fehlt die Gegenspannung, und nur der kleine Wicklungswiderstand begrenzt den Strom.
hinweise:
  - 'Im Betrieb gilt $U = U_\text{gegen} + I\cdot R$.'
  - Ohne Drehung wird keine Gegenspannung induziert.
loesung: |
  **Ansatz:** Die Betriebsspannung teilt sich auf: Ein Teil treibt den Strom durch den Wicklungswiderstand, der Rest hält der Gegenspannung die Waage. $U = U_\text{gegen} + IR$.
  ---
  **a)** $U_\text{gegen} = U - IR = 12\,\text{V} - 1{,}5\,\text{A}\cdot 0{,}80\,\Omega = 12\,\text{V} - 1{,}2\,\text{V} = 10{,}8\,\text{V}$.
  ---
  **b)** Bei festgehaltener Achse ist $U_\text{gegen} = 0$ und $I = \dfrac{12\,\text{V}}{0{,}80\,\Omega} = 15\,\text{A}$. Das ist zehnmal so viel wie im Betrieb. Die Wicklung wird schnell heiß.
```

### Der Generator

Der Generator ist die Umkehrung des Motors. Eine Spule wird mechanisch in einem Magnetfeld gedreht, etwa von einer
Wasserturbine, einer Dampfturbine oder einem Windrad. Dabei entsteht durch Induktion eine Wechselspannung mit
$\hat U = NBA\omega$, wie in [14.7 Wechselspannung: Scheitelwert und Effektivwert](/lernen/physik1/magnetismus-wechselstrom/wechselspannung-scheitelwert-und-effektivwert)
hergeleitet. Abgegriffen wird sie über zwei **Schleifringe**, auf denen Bürsten gleiten. Ersetzt man die Schleifringe
durch einen Kommutator, erhält man einen pulsierenden Gleichstrom.

In Kraftwerken dreht sich meist ein Elektromagnet, das **Polrad**, im Inneren feststehender Spulen. So müssen die großen
erzeugten Ströme nicht über Schleifkontakte fließen.

Wer einen Generator dreht, muss Arbeit verrichten. Sobald Strom fließt, bremst die Lenzsche Regel die Drehung. Je mehr
elektrische Leistung entnommen wird, desto schwerer lässt sich der Generator drehen. Das spürst du beim Fahrraddynamo:
Mit eingeschaltetem Licht tritt es sich schwerer. Motor und Generator sind dieselbe Maschine. Ein Elektroauto nutzt das
beim Bremsen: Der Motor arbeitet als Generator, bremst das Auto und lädt dabei den Akku. Das heißt **Rekuperation**.

```aufgabe
id: p14-motor
titel: Motor oder Generator?
niveau: 2
lernziel: 8
kompetenz: verstehen
angabe: |
  Welche Aussage über Motor und Generator ist richtig?
teile:
  - typ: auswahl
    optionen:
      - "Der Motor beruht auf der Kraft auf Ströme im Magnetfeld, der Generator auf Induktion. Dieselbe Maschine kann beides."
      - "Der Generator beruht auf der Kraft auf Ströme im Magnetfeld, der Motor auf Induktion."
      - "Ein Generator erzeugt Energie, deshalb lässt er sich mit Last genauso leicht drehen wie ohne Last."
      - "Motor und Generator sind grundsätzlich verschiedene Maschinen, ein Motor kann keine Spannung erzeugen."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Das ist vertauscht. Beim Motor fließt Strom, und das Feld übt eine Kraft aus. Beim Generator wird die Spule bewegt, und es entsteht eine Spannung.
      - wert: 2
        meldung: Ein Generator erzeugt keine Energie, er wandelt sie um. Mit Last fließt Strom, und nach Lenz bremst dieser die Drehung. Man muss mehr Arbeit verrichten.
      - wert: 3
        meldung: Jeder drehende Motor induziert eine Gegenspannung, ist also zugleich ein Generator. Elektroautos nutzen das beim Bremsen.
hinweise:
  - Was ist beim Motor gegeben und was entsteht? Was ist beim Generator gegeben und was entsteht?
  - 'Motor: Strom im Feld ergibt Kraft. Generator: Bewegung im Feld ergibt Spannung.'
loesung: |
  **Motor:** Strom fließt durch eine Spule im Feld, die Kraft auf den Strom dreht sie.
  ---
  **Generator:** Die Spule wird gedreht, der Fluss ändert sich, eine Spannung wird induziert.
  ---
  Beide Vorgänge laufen in derselben Maschine ab. Ein Motor erzeugt beim Drehen eine Gegenspannung, ein belasteter Generator spürt eine bremsende Kraft.
```

### Der Transformator

Ein **Transformator** (kurz Trafo) besteht aus zwei Spulen auf einem gemeinsamen, geschlossenen **Eisenkern**. An der
**Primärspule** mit $N_1$ Windungen liegt eine Wechselspannung $U_1$. Sie erzeugt einen wechselnden Fluss. Der
Eisenkern führt diesen Fluss fast vollständig durch die **Sekundärspule** mit $N_2$ Windungen. Weil durch jede Windung
beider Spulen derselbe Fluss tritt, wird in jeder Windung dieselbe Spannung induziert. Also verhalten sich die
Spannungen wie die Windungszahlen.

```plot
x: [0, 10]
y: [0, 6]
gleich: true
hoehe: 240
strecken:
  - { von: [3, 1], nach: [7, 1], farbe: 3 }
  - { von: [3, 5], nach: [7, 5], farbe: 3 }
  - { von: [3, 1], nach: [3, 5], farbe: 3 }
  - { von: [7, 1], nach: [7, 5], farbe: 3 }
  - { von: [3.6, 1.6], nach: [6.4, 1.6], farbe: 3 }
  - { von: [3.6, 4.4], nach: [6.4, 4.4], farbe: 3 }
  - { von: [3.6, 1.6], nach: [3.6, 4.4], farbe: 3 }
  - { von: [6.4, 1.6], nach: [6.4, 4.4], farbe: 3 }
  - { von: [1, 2], nach: [3, 2], farbe: 0 }
  - { von: [1, 4], nach: [3, 4], farbe: 0 }
  - { von: [7, 2], nach: [9, 2], farbe: 1 }
  - { von: [7, 4], nach: [9, 4], farbe: 1 }
punkte:
  - { x: 0.6, y: 3, label: "U₁ ~" }
  - { x: 2.2, y: 4.6, label: "N₁" }
  - { x: 7.8, y: 4.6, label: "N₂" }
  - { x: 9.4, y: 3, label: "U₂" }
  - { x: 5, y: 5.5, label: "Eisenkern" }
beschriftung: "Schaltskizze eines Transformators. Ein geschlossener Eisenkern (violetter Rahmen) trägt links die Primärspule mit N₁ Windungen an der Wechselspannung U₁ und rechts die Sekundärspule mit N₂ Windungen, an der die Spannung U₂ abgenommen wird. Der Kern führt den wechselnden Fluss von einer Spule zur anderen."
```

:::satz[Idealer Transformator]
$$\frac{U_2}{U_1} = \frac{N_2}{N_1}, \qquad \frac{I_2}{I_1} = \frac{N_1}{N_2}, \qquad U_1 I_1 = U_2 I_2.$$
Die Spannungen verhalten sich wie die Windungszahlen, die Ströme umgekehrt. Beim idealen Transformator geht keine
Leistung verloren. Reale Transformatoren erreichen Wirkungsgrade von $95$ bis über $99\,\%$.

**Beispiel:** $N_1 = 1150$, $N_2 = 60$ macht aus $230\,\text{V}$ genau $12\,\text{V}$. **Kein Transformator im Betrieb:**
An einer Gleichspannung ist der Fluss konstant, es wird nichts induziert, $U_2 = 0$.
:::

Warum verhalten sich die Ströme umgekehrt? Ein idealer Transformator gibt genau die Leistung ab, die er aufnimmt,
$U_1I_1 = U_2I_2$. Wo die Spannung kleiner wird, muss der Strom größer werden. Ein Transformator „erzeugt“ also keine
Leistung. Er tauscht nur Spannung gegen Strom.

:::beispiel[Ein Netzteil für eine Halogenlampe]
Ein Transformator mit $N_1 = 1150$ und $N_2 = 60$ Windungen hängt an $230\,\text{V}$. Er versorgt eine Lampe mit
$24\,\text{W}$.

**Schritt 1, Sekundärspannung:** $U_2 = U_1\cdot\dfrac{N_2}{N_1} = 230\,\text{V}\cdot\dfrac{60}{1150} = 12\,\text{V}$.

**Schritt 2, Sekundärstrom:** $I_2 = \dfrac{P}{U_2} = \dfrac{24\,\text{W}}{12\,\text{V}} = 2{,}0\,\text{A}$.

**Schritt 3, Primärstrom:** $I_1 = I_2\cdot\dfrac{N_2}{N_1} = 2{,}0\,\text{A}\cdot\dfrac{60}{1150} = 0{,}104\,\text{A}$.

**Probe:** $U_1I_1 = 230\,\text{V}\cdot 0{,}104\,\text{A} = 24\,\text{W}$. Die Leistung stimmt auf beiden Seiten.
:::

:::achtung[Fehler: Ströme im selben Verhältnis wie die Spannungen]
Für das Netzteil rechnet eine Schülerin: „Die Spannung sinkt im Verhältnis $60:1150$, also ist
$I_2 = I_1\cdot\dfrac{60}{1150}$. Bei $I_1 = 0{,}104\,\text{A}$ ergibt das $I_2 = 5{,}4\,\text{mA}$.“

Damit wäre die abgegebene Leistung $12\,\text{V}\cdot 0{,}0054\,\text{A} = 0{,}065\,\text{W}$ statt $24\,\text{W}$. Energie
ginge verloren. Richtig ist das **umgekehrte** Verhältnis: $I_2 = I_1\cdot\dfrac{N_1}{N_2} = 2{,}0\,\text{A}$. Die
Leistungsprobe $U_1I_1 = U_2I_2$ deckt den Fehler sofort auf.
:::

:::achtung[Fehler: Transformator an Gleichspannung]
Ein Schüler will aus einer $12$-V-Autobatterie mit einem Transformator $N_1 = 60$, $N_2 = 1150$ eine Spannung von
„$12\,\text{V}\cdot\dfrac{1150}{60} = 230\,\text{V}$“ machen.

Das funktioniert nicht. Eine Batterie liefert Gleichspannung. Nach dem Einschalten ist der Fluss im Kern konstant, und
ohne Flussänderung wird in der Sekundärspule nichts induziert. Außerdem begrenzt nur der kleine Drahtwiderstand der
Primärspule den Strom, sie würde überhitzen. Spannungswandler für das Auto zerhacken die Gleichspannung deshalb zuerst
elektronisch in eine Wechselspannung.
:::

Den Eisenkern baut man aus dünnen, gegeneinander isolierten Blechen. So können sich darin keine großen Wirbelströme
ausbilden, die Energie in Wärme verwandeln würden. Anwendungen: Netzteile, Schweißtransformatoren mit wenigen
Sekundärwindungen und riesigen Strömen, Zündspulen und die großen Transformatoren der Umspannwerke.

```aufgabe
id: p14-trafo-spannung
titel: Transformator berechnen
niveau: 1
lernziel: 8
kompetenz: rechnen
angabe: |
  Ein idealer Transformator hat primär $800$ und sekundär $48$ Windungen. Die Primärspannung beträgt $230\,\text{V}$, der Sekundärstrom $3{,}0\,\text{A}$. Berechne die Sekundärspannung in V und den Primärstrom in A.
teile:
  - typ: zahl
    label: U₂ in V
    loesung: "230*48/800"
    einheit: "V"
    anzeige: '13{,}8'
    fehler:
      - wert: "230*800/48"
        meldung: Du hast das Verhältnis umgedreht. Die Sekundärspule hat weniger Windungen, also ist auch ihre Spannung kleiner.
  - typ: zahl
    label: I₁ in A
    loesung: "3.0*48/800"
    einheit: "A"
    anzeige: '0{,}18'
    fehler:
      - wert: "3.0*800/48"
        meldung: Die Ströme verhalten sich **umgekehrt** wie die Windungszahlen. Auf der Seite mit der hohen Spannung fließt der kleine Strom.
hinweise:
  - '$U_2/U_1 = N_2/N_1$ und $I_1/I_2 = N_2/N_1$.'
loesung: |
  **Sekundärspannung:** $U_2 = U_1\dfrac{N_2}{N_1} = 230\,\text{V}\cdot\dfrac{48}{800} = 13{,}8\,\text{V}$.
  ---
  **Primärstrom:** $I_1 = I_2\dfrac{N_2}{N_1} = 3{,}0\,\text{A}\cdot 0{,}06 = 0{,}18\,\text{A}$.
  ---
  **Probe:** $U_1I_1 = 230\,\text{V}\cdot 0{,}18\,\text{A} = 41{,}4\,\text{W}$ und $U_2I_2 = 13{,}8\,\text{V}\cdot 3{,}0\,\text{A} = 41{,}4\,\text{W}$. Die Leistungen stimmen überein.
```

```aufgabe
id: p14-trafo-windungen
titel: Windungszahl eines Ladegeräts
niveau: 1
lernziel: 8
kompetenz: anwenden
angabe: |
  Ein Ladegerät soll aus $230\,\text{V}$ eine Wechselspannung von $5{,}0\,\text{V}$ machen. Die Primärspule hat $2300$ Windungen. Wie viele Windungen braucht die Sekundärspule?
teile:
  - typ: zahl
    loesung: "2300*5.0/230"
    anzeige: '50'
    fehler:
      - wert: "2300*230/5.0"
        meldung: Du hast das Verhältnis umgedreht. Für eine kleinere Spannung braucht die Sekundärspule **weniger** Windungen.
hinweise:
  - Stelle $U_2/U_1 = N_2/N_1$ nach $N_2$ um.
loesung: |
  **Ansatz:** $\dfrac{N_2}{N_1} = \dfrac{U_2}{U_1}$, also $N_2 = N_1\dfrac{U_2}{U_1}$.
  ---
  **Rechnung:** $N_2 = 2300\cdot\dfrac{5{,}0\,\text{V}}{230\,\text{V}} = 50$ Windungen. Pro Windung entfallen auf beiden Seiten $0{,}10\,\text{V}$.
```

```aufgabe
id: p14-10-gleichspannung
titel: Warum braucht der Transformator Wechselspannung?
niveau: 2
lernziel: 8
kompetenz: verstehen
angabe: |
  Ein Transformator wird an eine Gleichspannung angeschlossen. Was beobachtet man an der Sekundärspule, nachdem der Strom einmal eingeschaltet ist?
teile:
  - typ: auswahl
    optionen:
      - "Keine Spannung, weil der Fluss im Kern konstant ist."
      - "Eine Gleichspannung im Verhältnis der Windungszahlen."
      - "Eine Wechselspannung, weil der Transformator Gleichspannung umwandelt."
      - "Eine Spannung nur dann, wenn die Gleichspannung groß genug ist."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Das Windungsverhältnis gilt nur, wenn überhaupt induziert wird. Induktion braucht eine Flussänderung, und bei Gleichstrom ändert sich nach dem Einschalten nichts.
      - wert: 2
        meldung: Ein Transformator kann keine Wechselspannung aus Gleichspannung machen. Er überträgt nur Änderungen des Flusses.
      - wert: 3
        meldung: Auf die Größe kommt es nicht an. Auch ein sehr starkes, aber konstantes Feld induziert keine Spannung.
hinweise:
  - Die Sekundärspannung entsteht durch Induktion. Was braucht Induktion?
  - Ändert sich der Fluss im Kern, wenn ein konstanter Gleichstrom fließt?
loesung: |
  **Ansatz:** Die Sekundärspannung ist eine Induktionsspannung, $U_2 = -N_2\,\Delta\Phi/\Delta t$.
  ---
  Bei Gleichstrom ist der Fluss nach dem Einschalten konstant, $\Delta\Phi = 0$.
  ---
  Also ist $U_2 = 0$. Nur im Augenblick des Ein- oder Ausschaltens entsteht ein kurzer Spannungsstoß.
```

```aufgabe
id: p14-10-schweisstrafo
titel: Ein Schweißtransformator
niveau: 3
lernziel: 8
kompetenz: modellieren
angabe: |
  Ein Schweißtransformator hat $N_1 = 460$ und $N_2 = 12$ Windungen und hängt an $230\,\text{V}$. Beim Schweißen fließen sekundär $150\,\text{A}$.

  a) Wie groß ist die Sekundärspannung in V?

  b) Wie groß wäre der Primärstrom in A bei einem idealen Transformator?

  c) Der reale Transformator hat den Wirkungsgrad $95\,\%$. Wie groß ist der Primärstrom dann in A?
teile:
  - typ: zahl
    label: a) U₂ in V
    loesung: "230*12/460"
    einheit: "V"
    anzeige: '6{,}0'
  - typ: zahl
    label: b) I₁ ideal in A
    loesung: "150*12/460"
    einheit: "A"
    anzeige: '3{,}91'
  - typ: zahl
    label: c) I₁ real in A
    loesung: "(230*12/460)*150/(0.95*230)"
    einheit: "A"
    anzeige: '4{,}12'
hinweise:
  - 'a) und b) mit den Gleichungen des idealen Transformators.'
  - 'c) Die aufgenommene Leistung ist größer als die abgegebene: $P_1 = P_2/\eta$. Dann $I_1 = P_1/U_1$.'
gefuehrt:
  - text: Wie groß ist die Sekundärspannung in V?
    teil: { typ: zahl, loesung: "230*12/460" }
    erklaerung: $U_2 = 230\,\text{V}\cdot 12/460 = 6{,}0\,\text{V}$. Eine kleine Spannung, ungefährlich beim Schweißen.
  - text: Welche Leistung in W gibt der Transformator ab?
    teil: { typ: zahl, loesung: "6.0*150" }
    erklaerung: $P_2 = U_2 I_2 = 6{,}0\,\text{V}\cdot 150\,\text{A} = 900\,\text{W}$.
  - text: Welche Leistung in W nimmt er bei $95\,\%$ Wirkungsgrad auf?
    teil: { typ: zahl, loesung: "900/0.95" }
    erklaerung: $P_1 = P_2/\eta = 900\,\text{W}/0{,}95 = 947\,\text{W}$. Die fehlenden $47\,\text{W}$ werden im Kern und in den Wicklungen zu Wärme.
  - text: Wie groß ist der Primärstrom in A?
    teil: { typ: zahl, loesung: "900/0.95/230" }
    erklaerung: $I_1 = P_1/U_1 = 947\,\text{W}/230\,\text{V} = 4{,}12\,\text{A}$, etwas mehr als die $3{,}91\,\text{A}$ des idealen Transformators.
loesung: |
  **a)** $U_2 = U_1\dfrac{N_2}{N_1} = 230\,\text{V}\cdot\dfrac{12}{460} = 6{,}0\,\text{V}$.
  ---
  **b)** Ideal: $I_1 = I_2\dfrac{N_2}{N_1} = 150\,\text{A}\cdot\dfrac{12}{460} = 3{,}91\,\text{A}$.
  ---
  **c)** Abgegeben werden $P_2 = 6{,}0\,\text{V}\cdot 150\,\text{A} = 900\,\text{W}$, aufgenommen $P_1 = \dfrac{900\,\text{W}}{0{,}95} = 947\,\text{W}$. Also $I_1 = \dfrac{947\,\text{W}}{230\,\text{V}} = 4{,}12\,\text{A}$.
  ---
  **Deutung:** Aus einem harmlosen Netzstrom von gut $4\,\text{A}$ macht der Transformator $150\,\text{A}$, genug, um Stahl an der Schweißstelle zu schmelzen.
```

```aufgabe
id: p14-10-generator-text
titel: Warum tritt es sich mit Licht schwerer?
niveau: 3
lernziel: 8
kompetenz: begruenden
angabe: |
  Ein Fahrraddynamo lässt sich leicht drehen, solange das Licht ausgeschaltet ist. Mit eingeschaltetem Licht muss man spürbar stärker treten. Erkläre das mit der Lenzschen Regel und mit der Energieerhaltung.
teile:
  - typ: text
    muster: |
      Der Dynamo ist ein Generator: Ein Magnet dreht sich in einer Spule, der Fluss ändert sich, eine Spannung wird induziert.
      Bei ausgeschaltetem Licht ist der Kreis offen. Es entsteht zwar eine Spannung, aber es fließt kein Strom, und es gibt keine Gegenkraft.
      Mit eingeschaltetem Licht fließt ein Strom. Sein Magnetfeld wirkt nach Lenz der Drehung entgegen, die Drehung wird gebremst.
      Energetisch: Die Lampe gibt Leistung als Licht und Wärme ab. Diese Energie muss als mechanische Arbeit über die Pedale hineingesteckt werden.
hinweise:
  - Fließt ein Strom, wenn das Licht ausgeschaltet ist?
  - Woher kommt die Energie, die die Lampe abstrahlt?
loesung: |
  **Ansatz:** Der Dynamo ist ein Generator. Die Drehung ändert den Fluss und induziert eine Spannung.
  ---
  **Ohne Licht:** offener Kreis, kein Strom, keine Bremskraft. Man dreht nur gegen die Lagerreibung.
  ---
  **Mit Licht:** Es fließt Strom, sein Feld bremst nach Lenz die Drehung. Die Lampe gibt Energie ab, und genau diese Energie muss man als zusätzliche Arbeit beim Treten aufbringen.
```

## Hochspannung, Drehstrom und elektromagnetische Wellen

```aufgabe
id: p14-11-check
art: check
titel: "Vorwissen: Wärme in einem Kabel"
niveau: 1
angabe: |
  Ein Verlängerungskabel hat den Widerstand $2{,}0\,\Omega$ und führt $5{,}0\,\text{A}$. Welche Leistung wird im Kabel in Wärme umgesetzt?
teile:
  - typ: zahl
    loesung: "5.0^2*2.0"
    einheit: "W"
    anzeige: '50'
    fehler:
      - wert: "5.0*2.0"
        meldung: Das ist die Spannung, die am Kabel abfällt, in Volt. Die Leistung ist $P = U\cdot I = I^2 R$.
hinweise:
  - Am Widerstand ist $U = RI$, also $P = UI = I^2R$.
loesung: |
  Mit $U = R I$ wird aus $P = U I$ die Formel $P = I^2 R$. Sie zeigt: Die Verluste wachsen mit dem **Quadrat** des Stroms.
  ---
  $P = (5{,}0\,\text{A})^2\cdot 2{,}0\,\Omega = 50\,\text{W}$. Wiederholen: [Kapitel Gleichstrom](/lernen/physik1/gleichstrom), elektrische Arbeit und Leistung.
```

**Worum geht es in diesem Abschnitt?** Elektrische Energie wird oft hunderte Kilometer weit vom Kraftwerk zu den
Verbrauchern transportiert. Du lernst, warum man dafür Hochspannung verwendet, wie das Drehstromnetz aufgebaut ist und
wie die Gesetze von Elektrizität und Magnetismus am Ende das Licht erklären.

### Warum Hochspannung?

Ein Kraftwerk soll die Leistung $P$ über eine Leitung mit dem Widerstand $R$ übertragen. Der Strom in der Leitung ist
$I = P/U$, wobei $U$ die Übertragungsspannung ist. In der Leitung wird die Leistung $I^2R$ in Wärme umgesetzt. Setzt
man den Strom ein, ergibt sich die **Verlustleistung**
$$P_V = I^2 R = \frac{P^2\,R}{U^2}.$$
Die Verluste sinken mit dem **Quadrat** der Spannung. Zehnfache Spannung heißt ein Zehntel des Stroms und ein
Hundertstel der Verluste.

:::beispiel[50 Megawatt über eine Fernleitung]
Ein Kraftwerk überträgt $50\,\text{MW}$ über eine Leitung mit dem Gesamtwiderstand $20\,\Omega$. Wir vergleichen
$110\,\text{kV}$ und $380\,\text{kV}$.

**Schritt 1, Strom bei 110 kV:** $I = \dfrac{P}{U} = \dfrac{5{,}0\cdot 10^{7}\,\text{W}}{1{,}1\cdot 10^{5}\,\text{V}} = 455\,\text{A}$.

**Schritt 2, Verlust bei 110 kV:** $P_V = I^2R = (455\,\text{A})^2\cdot 20\,\Omega = 4{,}13\,\text{MW}$, also $8{,}3\,\%$ der Leistung.

**Schritt 3, bei 380 kV:** $I = 132\,\text{A}$ und $P_V = (132\,\text{A})^2\cdot 20\,\Omega = 0{,}35\,\text{MW}$, nur $0{,}7\,\%$.

**Vergleich:** Die Spannung steigt um den Faktor $380/110 = 3{,}45$, die Verluste sinken um $3{,}45^2 = 11{,}9$.
:::

```plot
x: [0, 400]
y: [0, 10]
hoehe: 230
achsen: { x: "U in kV", y: "P_V in MW" }
graphen:
  - { f: "(50e6/(x*1000))^2*20/1e6", label: "P_V für 50 MW und 20 Ω", farbe: 0, von: 75, bis: 400 }
punkte:
  - { x: 110, y: 4.13, label: "110 kV" }
  - { x: 380, y: 0.35, label: "380 kV" }
beschriftung: "Leitungsverluste bei der Übertragung von 50 MW über 20 Ω in Abhängigkeit von der Übertragungsspannung. Die Kurve fällt mit 1/U². Bei 110 kV gehen 4,1 MW verloren, bei 380 kV nur 0,35 MW."
```

Deshalb transformiert man im Kraftwerk hoch und in der Nähe der Verbraucher stufenweise wieder hinunter. Genau das
kann nur Wechselspannung: Sie lässt sich mit Transformatoren einfach und mit sehr kleinen Verlusten umsetzen. Das war um
1890 das entscheidende Argument von Tesla und Westinghouse gegen Edisons Gleichstromnetz. Der Weg der Energie in
Österreich:

- Der Generator im Kraftwerk liefert etwa $10$ bis $27\,\text{kV}$.
- Ein Maschinentransformator erhöht auf $220$ oder $380\,\text{kV}$, das Übertragungsnetz quer durch Europa.
- Umspannwerke senken auf $110\,\text{kV}$ für die überregionale Verteilung und auf $10$ bis $30\,\text{kV}$ für die
  Mittelspannung in den Regionen.
- Ein Ortsnetztransformator liefert schließlich $400/230\,\text{V}$ in die Häuser.

Für sehr lange Strecken und Seekabel verwendet man heute auch **Hochspannungs-Gleichstrom-Übertragung** (HGÜ). Bei
Wechselspannung würden die Kapazität und die Induktivität des langen Kabels große Blindströme verursachen. Leistungsstarke
Halbleiterschalter wandeln an beiden Enden zwischen Wechsel- und Gleichspannung um.

:::achtung[Fehler: die Übertragungsspannung in U²/R eingesetzt]
Für das Beispiel rechnet ein Schüler: „$P_V = \dfrac{U^2}{R} = \dfrac{(110\,000\,\text{V})^2}{20\,\Omega} = 605\,\text{MW}$.
Bei höherer Spannung wären die Verluste also noch größer.“

Die Formel $U^2/R$ verlangt die Spannung, die **an der Leitung selbst abfällt**. Die $110\,\text{kV}$ liegen aber
zwischen Hin- und Rückleiter, also am Verbraucher. Dass etwas nicht stimmt, zeigt schon die Größenordnung: $605\,\text{MW}$
Verlust bei $50\,\text{MW}$ Übertragung ist unmöglich. Richtig ist $P_V = I^2R$ mit $I = P/U$, also $4{,}13\,\text{MW}$.
:::

```aufgabe
id: p14-11-verlust
titel: Verluste in einer Leitung
niveau: 1
lernziel: 9
kompetenz: rechnen
angabe: |
  Durch eine Zuleitung mit dem Widerstand $0{,}50\,\Omega$ fließen $20\,\text{A}$. Wie groß ist die Verlustleistung in der Leitung in W?
teile:
  - typ: zahl
    loesung: "20^2*0.50"
    einheit: "W"
    anzeige: '200'
    fehler:
      - wert: "20*0.50"
        meldung: Das ist die Spannung, die an der Leitung abfällt, in Volt. Die Verlustleistung ist $I^2 R$.
hinweise:
  - '$P_V = I^2 R$.'
loesung: |
  **Ansatz:** In der Leitung wird $P_V = I^2 R$ in Wärme umgesetzt.
  ---
  **Rechnung:** $P_V = (20\,\text{A})^2\cdot 0{,}50\,\Omega = 400\,\text{A}^2\cdot 0{,}50\,\Omega = 200\,\text{W}$. Bei halbem Strom wären es nur $50\,\text{W}$.
```

```aufgabe
id: p14-11-doppelt
titel: Was passiert bei doppelter Übertragungsspannung?
niveau: 2
lernziel: 9
kompetenz: verstehen
angabe: |
  Eine Leitung überträgt eine feste Leistung. Nun wird die Übertragungsspannung verdoppelt, die Leitung bleibt gleich. Wie ändern sich die Verluste in der Leitung?
teile:
  - typ: auswahl
    optionen:
      - "Sie sinken auf ein Viertel."
      - "Sie halbieren sich."
      - "Sie vervierfachen sich, weil die Spannung im Quadrat eingeht."
      - "Sie bleiben gleich, weil der Widerstand gleich bleibt."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Der Strom halbiert sich. Die Verluste hängen aber vom **Quadrat** des Stroms ab, $P_V = I^2R$. Ein halber Strom gibt ein Viertel der Verluste.
      - wert: 2
        meldung: Das wäre $U^2/R$ mit der Übertragungsspannung, die aber nicht an der Leitung abfällt. Richtig ist $P_V = P^2R/U^2$, die Spannung steht im Nenner.
      - wert: 3
        meldung: Der Widerstand bleibt gleich, aber der Strom $I = P/U$ ändert sich. Bei doppelter Spannung braucht man nur den halben Strom.
hinweise:
  - Bei fester Leistung ist $I = P/U$. Was passiert mit $I$?
  - '$P_V = I^2 R$. Was passiert mit $I^2$, wenn sich $I$ halbiert?'
loesung: |
  **Ansatz:** Bei fester Leistung $P$ ist $I = P/U$. Die Verluste sind $P_V = I^2 R = \dfrac{P^2R}{U^2}$.
  ---
  Doppelte Spannung, halber Strom. Das Quadrat des Stroms wird ein Viertel.
  ---
  Die Verluste sinken auf ein Viertel. Darum lohnt sich jede höhere Spannungsebene.
```

```aufgabe
id: p14-11-fernleitung
titel: Mittelspannung oder Hochspannung?
niveau: 2
lernziel: 9
kompetenz: anwenden
angabe: |
  Ein Windpark liefert $20\,\text{MW}$ über eine Leitung mit $5{,}0\,\Omega$ Gesamtwiderstand. Berechne die Verlustleistung in MW bei $20\,\text{kV}$ und bei $110\,\text{kV}$.
teile:
  - typ: zahl
    label: bei 20 kV in MW
    loesung: "(20e6/20e3)^2*5.0/1e6"
    einheit: "MW"
    anzeige: '5{,}0'
    fehler:
      - wert: "(20e3)^2/5.0/1e6"
        meldung: Du hast $U^2/R$ mit der Übertragungsspannung gerechnet. An der Leitung fällt aber nicht die ganze Spannung ab. Rechne $I = P/U$ und dann $I^2R$.
  - typ: zahl
    label: bei 110 kV in MW
    loesung: "(20e6/110e3)^2*5.0/1e6"
    einheit: "MW"
    anzeige: '0{,}165'
    fehler:
      - wert: "(20e6/110e3)*5.0/1e6"
        meldung: Du hast $I\cdot R$ berechnet, das ist eine Spannung. Die Verlustleistung ist $I^2R$, der Strom muss quadriert werden.
hinweise:
  - Berechne zuerst den Strom $I = P/U$ für jede Spannung.
  - 'Dann $P_V = I^2R$. Bei $20\,\text{kV}$ ist $I = 1000\,\text{A}$.'
loesung: |
  **Ansatz:** $I = P/U$ und $P_V = I^2R$.
  ---
  **20 kV:** $I = \dfrac{2{,}0\cdot 10^{7}\,\text{W}}{2{,}0\cdot 10^{4}\,\text{V}} = 1000\,\text{A}$ und $P_V = (1000\,\text{A})^2\cdot 5{,}0\,\Omega = 5{,}0\,\text{MW}$, ein Viertel der Leistung.
  ---
  **110 kV:** $I = 182\,\text{A}$ und $P_V = (182\,\text{A})^2\cdot 5{,}0\,\Omega = 0{,}165\,\text{MW}$, weniger als ein Prozent. Der Faktor ist $(110/20)^2 = 30{,}25$.
```

```aufgabe
id: p14-11-fermi
titel: "Abschätzung: Strom für eine ganze Stadt"
niveau: 2
lernziel: 9
kompetenz: modellieren
angabe: |
  Wien hat rund eine Million Haushalte. Schätze, dass jeder Haushalt im Mittel $0{,}5\,\text{kW}$ braucht. Welcher Strom müsste fließen, wenn man diese Leistung bei $230\,\text{V}$ übertragen wollte? Welcher Strom fließt bei $380\,\text{kV}$? Gib den zweiten Wert in A an (Größenordnung genügt).
teile:
  - typ: zahl
    label: Strom bei 380 kV in A
    loesung: "1e6*500/380e3"
    einheit: "A"
    toleranz: 65
    anzeige: '1300'
    fehler:
      - wert: "1e6*500/230"
        meldung: Das ist der Strom bei $230\,\text{V}$, über zwei Millionen Ampere. Gefragt ist der Strom bei $380\,\text{kV}$.
hinweise:
  - Gesamtleistung $= $ Zahl der Haushalte mal Leistung pro Haushalt.
  - '$P \approx 10^6\cdot 500\,\text{W} = 5\cdot 10^{8}\,\text{W}$. Dann $I = P/U$.'
loesung: |
  **Modell:** $10^6$ Haushalte mit je $500\,\text{W}$ ergeben $P \approx 5\cdot 10^{8}\,\text{W} = 500\,\text{MW}$. Das ist grob die Leistung eines großen Kraftwerksblocks.
  ---
  **Bei 230 V:** $I = \dfrac{5\cdot 10^{8}\,\text{W}}{230\,\text{V}} \approx 2\cdot 10^{6}\,\text{A}$. So viel Strom könnte kein Kabel tragen.
  ---
  **Bei 380 kV:** $I = \dfrac{5\cdot 10^{8}\,\text{W}}{3{,}8\cdot 10^{5}\,\text{V}} \approx 1300\,\text{A}$. Das tragen die Seile einer Hochspannungsleitung. Die Abschätzung zeigt, warum ohne Hochspannung keine Großstadt versorgt werden könnte.
```

```aufgabe
id: p14-11-mindestspannung
titel: Welche Spannungsebene ist nötig?
niveau: 3
lernziel: 9
kompetenz: modellieren
angabe: |
  Eine Leitung mit $8{,}0\,\Omega$ Gesamtwiderstand soll $100\,\text{MW}$ übertragen. Höchstens $1\,\%$ der Leistung dürfen verloren gehen. Wie groß muss die Übertragungsspannung mindestens sein? Gib sie in kV an und wähle die passende Spannungsebene ($110$, $220$ oder $380\,\text{kV}$).
teile:
  - typ: zahl
    loesung: "sqrt((100e6)^2*8.0/1e6)/1000"
    einheit: "kV"
    anzeige: '283'
hinweise:
  - 'Erlaubter Verlust: $1\,\%$ von $100\,\text{MW}$, also $1{,}0\,\text{MW}$.'
  - 'Setze $P_V = P^2R/U^2 = 1{,}0\,\text{MW}$ und löse nach $U$ auf.'
gefuehrt:
  - text: Wie groß ist der erlaubte Verlust in W?
    teil: { typ: zahl, loesung: "0.01*100e6" }
    erklaerung: $1\,\%$ von $10^8\,\text{W}$ sind $10^6\,\text{W} = 1{,}0\,\text{MW}$.
  - text: Welcher Strom in A ist höchstens erlaubt, damit $I^2R \le 1{,}0\,\text{MW}$ bleibt?
    teil: { typ: zahl, loesung: "sqrt(1e6/8.0)" }
    erklaerung: $I = \sqrt{P_V/R} = \sqrt{10^6\,\text{W}/8{,}0\,\Omega} = 354\,\text{A}$.
  - text: Welche Spannung in kV braucht man, um mit diesem Strom $100\,\text{MW}$ zu übertragen?
    teil: { typ: zahl, loesung: "100e6/sqrt(1e6/8.0)/1000" }
    erklaerung: $U = P/I = 10^8\,\text{W}/354\,\text{A} = 283\,\text{kV}$.
  - text: Überlege, welche Spannungsebene man wählt.
    erklaerung: $220\,\text{kV}$ reichen nicht, man braucht die nächsthöhere Ebene, $380\,\text{kV}$.
loesung: |
  **Ansatz:** $P_V = \dfrac{P^2R}{U^2} \le 0{,}01\cdot P$. Gesucht ist das kleinste $U$.
  ---
  **Umformen:** $U^2 \ge \dfrac{P^2R}{P_V}$, also $U \ge P\sqrt{\dfrac{R}{P_V}}$.
  ---
  **Rechnung:** $U \ge 10^8\,\text{W}\cdot\sqrt{\dfrac{8{,}0\,\Omega}{10^6\,\text{W}}} = 10^8\cdot 2{,}83\cdot 10^{-3}\,\text{V} = 2{,}83\cdot 10^{5}\,\text{V} = 283\,\text{kV}$. Einheit: $\text{W}\sqrt{\Omega/\text{W}} = \sqrt{\text{W}\,\Omega} = \sqrt{\text{V}^2} = \text{V}$.
  ---
  **Antwort:** Mindestens $283\,\text{kV}$, also die $380$-kV-Ebene. Bei $380\,\text{kV}$ gehen nur $0{,}55\,\%$ verloren.
```

### Drehstrom

Ordnet man im Generator **drei** Spulen um je $120^\circ$ versetzt an, entstehen drei Wechselspannungen, die um je ein
Drittel Periode gegeneinander verschoben sind. Das ist **Drehstrom**, auch Dreiphasenwechselstrom genannt. Die drei
Leitungen heißen **Außenleiter** $L_1$, $L_2$, $L_3$. Dazu kommt der **Neutralleiter** $N$.

```plot
x: [0, 40]
y: [-400, 400]
hoehe: 230
achsen: { x: "t in ms", y: "u in V" }
graphen:
  - { f: "325*sin(2*pi*x/20)", label: "L1", farbe: 0, von: 0, bis: 40 }
  - { f: "325*sin(2*pi*x/20 - 2*pi/3)", label: "L2", farbe: 1, von: 0, bis: 40 }
  - { f: "325*sin(2*pi*x/20 - 4*pi/3)", label: "L3", farbe: 2, von: 0, bis: 40 }
beschriftung: "Die drei Spannungen des Drehstromnetzes gegen den Neutralleiter. Jede hat den Scheitelwert 325 V und ist gegenüber der vorigen um ein Drittel Periode (6,7 ms) verschoben. In jedem Augenblick ist die Summe der drei Spannungen null."
```

Die Vorteile:

- Die Summe der drei Spannungen ist in jedem Augenblick null. Bei gleichmäßiger Last heben sich deshalb auch die Ströme
  im Neutralleiter auf. Für drei Stromkreise braucht man nur vier Leiter statt sechs.
- Drei versetzte Spulen erzeugen ein **Drehfeld**, ein rotierendes Magnetfeld. Ihm folgt der Rotor eines Drehstrommotors
  ohne Kommutator.
- Zwischen Außenleiter und Neutralleiter liegen $230\,\text{V}$. Zwischen zwei Außenleitern liegt die **Leiterspannung**
  $\sqrt 3\cdot 230\,\text{V} \approx 400\,\text{V}$. Herd, Durchlauferhitzer und Wallbox nutzen sie.

:::beispiel[Die Leiterspannung]
Warum ist die Spannung zwischen zwei Außenleitern $400\,\text{V}$ und nicht $2\cdot 230\,\text{V} = 460\,\text{V}$?

**Schritt 1, Zeiger:** Die beiden Spannungen sind Zeiger der Länge $230\,\text{V}$, die einen Winkel von $120^\circ$
einschließen. Die Spannung zwischen den Leitern ist ihre **Differenz**.

**Schritt 2, Dreieck:** Die Differenz ist die dritte Seite eines gleichschenkligen Dreiecks mit zwei Seiten
$230\,\text{V}$ und dem Winkel $120^\circ$ dazwischen. Ihre Länge ist $2\cdot 230\,\text{V}\cdot\sin 60^\circ$.

**Schritt 3, Rechnung:** $2\cdot 230\,\text{V}\cdot 0{,}866 = 398\,\text{V} \approx 400\,\text{V}$, also $\sqrt 3\cdot 230\,\text{V}$.

**Deutung:** Die beiden Spannungen erreichen ihr Maximum nicht gleichzeitig. Deshalb addieren sich ihre Beträge nicht
einfach.
:::

:::achtung[Fehler: Leiterspannung als doppelte Strangspannung]
Ein Elektrolehrling meint: „Zwischen zwei Phasen liegen $230\,\text{V} + 230\,\text{V} = 460\,\text{V}$.“

Das wäre nur richtig, wenn beide Spannungen gleichzeitig ihr Maximum in entgegengesetzter Richtung hätten, also um
$180^\circ$ verschoben wären. Sie sind aber nur um $120^\circ$ verschoben. Richtig ist $\sqrt 3\cdot 230\,\text{V} = 398\,\text{V}$,
im Alltag „$400\,\text{V}$“.
:::

```aufgabe
id: p14-drehstrom
titel: Spannung zwischen zwei Außenleitern
niveau: 1
lernziel: 9
kompetenz: rechnen
angabe: |
  In einem Drehstromnetz liegen zwischen jedem Außenleiter und dem Neutralleiter $400\,\text{V}$ (das ist zum Beispiel in einem Industrienetz so). Welche Spannung liegt zwischen zwei Außenleitern? Gib sie in V an.
teile:
  - typ: zahl
    loesung: "sqrt(3)*400"
    einheit: "V"
    anzeige: '693'
    fehler:
      - wert: "2*400"
        meldung: Die beiden Spannungen sind um $120^\circ$ verschoben, nicht um $180^\circ$. Sie addieren sich nicht einfach, der Faktor ist $\sqrt 3$.
      - wert: "400"
        meldung: Das ist die Spannung gegen den Neutralleiter. Zwischen zwei Außenleitern ist sie größer, um den Faktor $\sqrt 3$.
hinweise:
  - Die Leiterspannung ist $\sqrt 3$-mal so groß wie die Spannung gegen den Neutralleiter.
loesung: |
  **Ansatz:** Zwei um $120^\circ$ verschobene Zeiger gleicher Länge haben die Differenz $2\cdot U\cdot\sin 60^\circ = \sqrt 3\cdot U$.
  ---
  **Rechnung:** $U_L = \sqrt 3\cdot 400\,\text{V} = 693\,\text{V}$. So ein Netz bezeichnet man als $690$-V-Netz.
```

### Rückblick: Elektrizität, Magnetismus und Licht

Die Kapitel Elektrostatik, Gleichstrom und dieses Kapitel lassen sich in vier Aussagen zusammenfassen. James Clerk
Maxwell hat sie 1864 in mathematische Form gebracht:

1. **Ladungen erzeugen elektrische Felder.** Elektrische Feldlinien beginnen und enden an Ladungen.
2. **Es gibt keine magnetischen Ladungen.** Magnetische Feldlinien sind geschlossen.
3. **Ein sich änderndes Magnetfeld erzeugt ein elektrisches Feld.** Das ist die Induktion. Dieses Feld treibt in einer
   Leiterschleife den Induktionsstrom an, es existiert aber auch ohne Leiter.
4. **Ströme und sich ändernde elektrische Felder erzeugen Magnetfelder.** Den zweiten Teil hat Maxwell selbst ergänzt.

Aus 3 und 4 folgt etwas Erstaunliches. Ein sich änderndes elektrisches Feld erzeugt ein Magnetfeld, dessen Änderung
wieder ein elektrisches Feld erzeugt, und so weiter. Die beiden Felder tragen sich gegenseitig weiter und lösen sich als
**elektromagnetische Welle** von ihrer Quelle. Maxwell berechnete ihre Geschwindigkeit aus den Feldkonstanten:
$$c = \frac{1}{\sqrt{\varepsilon_0\,\mu_0}} \approx 3{,}00\cdot 10^{8}\,\frac{\text{m}}{\text{s}}.$$
Das ist genau die Lichtgeschwindigkeit. **Licht ist eine elektromagnetische Welle.** Heinrich Hertz wies 1886
Radiowellen nach, die ein Schwingkreis abstrahlt. Radio, WLAN, Mobilfunk, Mikrowelle, Licht, Röntgen- und
Gammastrahlung sind dasselbe Phänomen bei verschiedenen Frequenzen. Damit führt der Weg direkt zum
[Kapitel Geometrische Optik](/lernen/physik1/geometrische-optik) und zum
[Kapitel Wellenoptik, Atom- und Kernphysik](/lernen/physik1/wellenoptik-atom-kernphysik).

```aufgabe
id: p14-lichtgeschwindigkeit
titel: Lichtgeschwindigkeit aus den Feldkonstanten
niveau: 2
lernziel: 9
kompetenz: rechnen
angabe: |
  Berechne $c = 1/\sqrt{\varepsilon_0\mu_0}$ mit $\varepsilon_0 = 8{,}854\cdot 10^{-12}\,\text{A s/(V m)}$ und $\mu_0 = 4\pi\cdot 10^{-7}\,\text{V s/(A m)}$. Gib das Ergebnis in $10^{8}\,\text{m/s}$ an.
teile:
  - typ: zahl
    loesung: "1/sqrt(8.854e-12*4*pi*1e-7)/1e8"
    anzeige: '3{,}00'
    fehler:
      - wert: "1/(8.854e-12*4*pi*1e-7)/1e8"
        meldung: Du hast die Wurzel vergessen. Die Einheit zeigt es, $1/(\varepsilon_0\mu_0)$ hat die Einheit $\text{m}^2/\text{s}^2$, also das Quadrat einer Geschwindigkeit.
hinweise:
  - 'Prüfe zuerst die Einheiten: $\frac{\text{A s}}{\text{V m}}\cdot\frac{\text{V s}}{\text{A m}} = \frac{\text{s}^2}{\text{m}^2}$.'
  - Berechne das Produkt, ziehe die Wurzel und bilde dann den Kehrwert.
loesung: |
  **Einheiten:** $\dfrac{\text{A s}}{\text{V m}}\cdot\dfrac{\text{V s}}{\text{A m}} = \dfrac{\text{s}^2}{\text{m}^2}$. Der Kehrwert der Wurzel hat also die Einheit m/s.
  ---
  **Produkt:** $\varepsilon_0\mu_0 = 8{,}854\cdot 10^{-12}\cdot 1{,}257\cdot 10^{-6}\,\text{s}^2/\text{m}^2 = 1{,}113\cdot 10^{-17}\,\text{s}^2/\text{m}^2$.
  ---
  **Ergebnis:** $c = \dfrac{1}{\sqrt{1{,}113\cdot 10^{-17}}}\,\text{m/s} = 3{,}00\cdot 10^{8}\,\text{m/s}$. Die Lichtgeschwindigkeit, berechnet aus Versuchen mit Kondensatoren und Spulen.
```

```aufgabe
id: p14-11-hochspannung-text
titel: Hochspannung und Wechselstrom begründen
niveau: 3
lernziel: 9
kompetenz: begruenden
angabe: |
  Begründe in ganzen Sätzen, warum man elektrische Energie über weite Strecken mit Hochspannung überträgt und warum dafür traditionell Wechselspannung verwendet wird.
teile:
  - typ: text
    muster: |
      Bei gegebener Leistung ist der Strom in der Leitung $I = P/U$. In der Leitung wird die Leistung $I^2R = P^2R/U^2$ in Wärme umgesetzt.
      Die Verluste sinken also mit dem Quadrat der Spannung: Zehnfache Spannung bedeutet ein Hundertstel der Verluste. Außerdem genügen dünnere Seile.
      Am Verbraucher braucht man aber ungefährliche Spannungen wie 230 V. Die Spannung muss also hoch- und heruntergesetzt werden.
      Das geht mit Transformatoren einfach und mit sehr kleinen Verlusten, aber nur bei Wechselspannung, weil Induktion eine Flussänderung braucht.
hinweise:
  - Wie hängen bei fester Leistung Strom und Spannung zusammen, und wie die Verluste vom Strom?
  - Welches Gerät setzt Spannungen um, und was braucht es dafür?
loesung: |
  **Hochspannung:** Bei fester Leistung ist $I = P/U$. Die Verluste $I^2R = P^2R/U^2$ sinken mit dem Quadrat der Spannung.
  ---
  **Umsetzen:** Verbraucher brauchen niedrige Spannungen. Also muss man hoch- und heruntertransformieren.
  ---
  **Wechselspannung:** Transformatoren arbeiten mit Induktion und brauchen deshalb einen sich ändernden Fluss, also Wechselspannung. Für sehr lange Strecken nutzt man heute zusätzlich die HGÜ mit Halbleiterumrichtern.
```

## Gemischte Wiederholung

Hier sind Aufgaben aus diesem Kapitel mit Aufgaben aus den Kapiteln
[Gleichstrom](/lernen/physik1/gleichstrom), [Elektrostatik](/lernen/physik1/elektrostatik),
[Kreisbewegung und Gravitation](/lernen/physik1/kreisbewegung-gravitation),
[Schwingungen](/lernen/physik1/schwingungen) und [Arbeit, Energie, Impuls](/lernen/physik1/arbeit-energie-impuls)
gemischt. Das ist Absicht: In der Prüfung steht nicht dabei, zu welchem Abschnitt eine Aufgabe gehört. Bei den Aufgaben
„Welches Verfahren passt?“ musst du nichts rechnen, sondern nur den richtigen Weg erkennen. Das ist oft der schwerste
Teil.

```aufgabe
id: p14-mix-heizluefter
titel: Widerstand eines Heizlüfters
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Auf einem Heizlüfter steht „$230\,\text{V}$, $2000\,\text{W}$“. Wie groß ist sein Widerstand in Ω?
teile:
  - typ: zahl
    loesung: "230^2/2000"
    einheit: "Ω"
    anzeige: '26{,}5'
    fehler:
      - wert: "325^2/2000"
        meldung: Die Angabe $230\,\text{V}$ ist schon ein Effektivwert. Mit Effektivwerten rechnet man wie mit Gleichstrom, den Scheitelwert brauchst du nicht.
      - wert: "2000/230"
        meldung: Das ist der Strom in Ampere. Der Widerstand ist $R = U/I = U^2/P$.
hinweise:
  - 'Aus $P = U\cdot I$ und $U = R\cdot I$ folgt $P = U^2/R$.'
loesung: |
  **Ansatz:** $P = U^2/R$ mit dem Effektivwert, also $R = U^2/P$.
  ---
  **Rechnung:** $R = \dfrac{(230\,\text{V})^2}{2000\,\text{W}} = 26{,}5\,\Omega$. Wiederholen: [Kapitel Gleichstrom](/lernen/physik1/gleichstrom) und [14.7 Wechselspannung: Scheitelwert und Effektivwert](/lernen/physik1/magnetismus-wechselstrom/wechselspannung-scheitelwert-und-effektivwert).
```

```aufgabe
id: p14-mix-efeld
titel: Kraft auf ein Elektron im elektrischen Feld
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Zwischen zwei Kondensatorplatten herrscht das Feld $E = 5{,}0\cdot 10^{4}\,\text{V/m}$. Welche Kraft wirkt auf ein Elektron? Gib sie in $10^{-15}\,\text{N}$ an.
teile:
  - typ: zahl
    loesung: "1.602e-19*5.0e4/1e-15"
    anzeige: '8{,}01'
    fehler:
      - wert: "1.602e-19/5.0e4/1e-15"
        meldung: Die Kraft ist Ladung **mal** Feldstärke, $F = eE$.
hinweise:
  - Im elektrischen Feld gilt $F = q\cdot E$, auch für ruhende Ladungen.
loesung: |
  **Ansatz:** $F = eE$. Anders als die Lorentzkraft wirkt diese Kraft auch auf ruhende Ladungen.
  ---
  **Rechnung:** $F = 1{,}602\cdot 10^{-19}\,\text{C}\cdot 5{,}0\cdot 10^{4}\,\text{V/m} = 8{,}01\cdot 10^{-15}\,\text{N}$. Wiederholen: [Kapitel Elektrostatik](/lernen/physik1/elektrostatik), elektrisches Feld.
```

```aufgabe
id: p14-mix-umlauf
titel: Umlaufdauer aus Radius und Geschwindigkeit
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Ein Teilchen läuft mit $4{,}0\cdot 10^{6}\,\text{m/s}$ auf einem Kreis mit $2{,}0\,\text{cm}$ Radius. Wie lange braucht es für einen Umlauf? Gib das Ergebnis in $10^{-8}\,\text{s}$ an.
teile:
  - typ: zahl
    loesung: "2*pi*0.020/4.0e6/1e-8"
    anzeige: '3{,}14'
    fehler:
      - wert: "0.020/4.0e6/1e-8"
        meldung: Ein Umlauf ist der ganze Kreisumfang $2\pi r$, nicht der Radius.
hinweise:
  - Weg eines Umlaufs ist $2\pi r$, Zeit ist Weg durch Geschwindigkeit.
loesung: |
  **Ansatz:** Gleichförmige Kreisbewegung, $T = \dfrac{2\pi r}{v}$.
  ---
  **Rechnung:** $T = \dfrac{2\pi\cdot 0{,}020\,\text{m}}{4{,}0\cdot 10^{6}\,\text{m/s}} = 3{,}14\cdot 10^{-8}\,\text{s}$. Wiederholen: [Kapitel Kreisbewegung und Gravitation](/lernen/physik1/kreisbewegung-gravitation).
```

```aufgabe
id: p14-mix-federpendel
titel: Federpendel und Schwingkreis vergleichen
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Ein Federpendel hat die Federkonstante $D = 40\,\text{N/m}$ und die Masse $m = 0{,}10\,\text{kg}$.

  a) Berechne seine Frequenz in Hz.

  b) Beim Schwingkreis entspricht $L$ der Masse und $1/C$ der Federkonstante. Welche Formel für $f_0$ ergibt sich daraus? Wähle aus.
teile:
  - typ: zahl
    label: a) f in Hz
    loesung: "1/(2*pi)*sqrt(40/0.10)"
    einheit: "Hz"
    anzeige: '3{,}18'
    fehler:
      - wert: "sqrt(40/0.10)"
        meldung: Das ist die Kreisfrequenz $\omega$ in $1/\text{s}$. Für die Frequenz musst du durch $2\pi$ teilen.
  - typ: auswahl
    label: b)
    optionen:
      - '$f_0 = \dfrac{1}{2\pi\sqrt{LC}}$'
      - '$f_0 = \dfrac{1}{2\pi}\sqrt{\dfrac{L}{C}}$'
      - '$f_0 = 2\pi\sqrt{LC}$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Setze $D \to 1/C$ und $m \to L$ in $\sqrt{D/m}$ ein. Dann steht $\sqrt{1/(LC)}$ da, nicht $\sqrt{L/C}$.
      - wert: 2
        meldung: Das ist die Periodendauer $T$, nicht die Frequenz. Die Frequenz ist ihr Kehrwert.
hinweise:
  - 'Für das Federpendel gilt $f = \dfrac{1}{2\pi}\sqrt{\dfrac{D}{m}}$.'
  - 'Ersetze in dieser Formel $D$ durch $1/C$ und $m$ durch $L$.'
loesung: |
  **a)** $f = \dfrac{1}{2\pi}\sqrt{\dfrac{D}{m}} = \dfrac{1}{2\pi}\sqrt{\dfrac{40\,\text{N/m}}{0{,}10\,\text{kg}}} = \dfrac{20\,\text{s}^{-1}}{2\pi} = 3{,}18\,\text{Hz}$.
  ---
  **b)** Mit $D \to 1/C$ und $m \to L$ wird $\sqrt{D/m}$ zu $\sqrt{1/(LC)}$, also $f_0 = \dfrac{1}{2\pi\sqrt{LC}}$.
  ---
  **Deutung:** Beide Systeme pendeln Energie zwischen zwei Speichern hin und her. Wiederholen: [Kapitel Schwingungen](/lernen/physik1/schwingungen) und [14.9 Wirkleistung, Blindleistung und Schwingkreis](/lernen/physik1/magnetismus-wechselstrom/wirkleistung-blindleistung-und-schwingkreis).
```

```aufgabe
id: p14-mix-wasserkraft
titel: Leistung eines kleinen Wasserkraftwerks
niveau: 2
lernziel: 8
kompetenz: modellieren
angabe: |
  Durch die Turbine eines Kleinkraftwerks fließt pro Sekunde $1{,}0\,\text{m}^3$ Wasser, das $20\,\text{m}$ tief fällt. Turbine und Generator haben zusammen den Wirkungsgrad $85\,\%$. Welche elektrische Leistung liefert der Generator in kW?
teile:
  - typ: zahl
    loesung: "1000*9.81*20*0.85/1000"
    einheit: "kW"
    anzeige: '167'
    fehler:
      - wert: "1000*9.81*20/1000"
        meldung: Das ist die Leistung des fallenden Wassers. Davon kommen nur $85\,\%$ als elektrische Leistung heraus.
      - wert: "1*9.81*20*0.85/1000"
        meldung: Ein Kubikmeter Wasser hat die Masse $1000\,\text{kg}$, nicht $1\,\text{kg}$.
hinweise:
  - Pro Sekunde wird die Lageenergie $m g h$ von $1000\,\text{kg}$ Wasser frei.
  - 'Elektrische Leistung $= \eta\cdot m g h$ pro Sekunde.'
loesung: |
  **Ansatz:** Pro Sekunde verliert das Wasser die Lageenergie $mgh$ mit $m = 1000\,\text{kg}$. Der Generator wandelt davon $85\,\%$ in elektrische Energie um.
  ---
  **Lageenergie pro Sekunde:** $1000\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot 20\,\text{m} = 1{,}96\cdot 10^{5}\,\text{J}$, also $196\,\text{kW}$.
  ---
  **Elektrisch:** $P = 0{,}85\cdot 196\,\text{kW} = 167\,\text{kW}$. Wiederholen: [Kapitel Arbeit, Energie, Impuls](/lernen/physik1/arbeit-energie-impuls), Leistung und Wirkungsgrad.
```

```aufgabe
id: p14-mix-verfahren-bahn
titel: "Welches Verfahren passt? Elektron zwischen zwei Feldern"
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  Ein Elektron fliegt waagrecht in ein homogenes **Magnetfeld**, das senkrecht zu seiner Bahn steht. Gesucht ist, wie stark seine Bahn gekrümmt ist. Welcher Ansatz passt? Du musst nichts rechnen.
teile:
  - typ: auswahl
    optionen:
      - 'Lorentzkraft als Zentripetalkraft: $evB = mv^2/r$, Kreisbahn mit $r = mv/(eB)$.'
      - 'Wurfparabel wie im Kondensator: konstante Kraft $eE$ in eine feste Richtung.'
      - 'Energieerhaltung: Das Feld beschleunigt das Elektron, $eU = \tfrac12 mv^2$.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Eine Parabel entsteht im elektrischen Feld, wo die Kraft immer in dieselbe Richtung zeigt. Die Lorentzkraft dreht sich mit der Bewegung mit und steht immer senkrecht zu ihr.
      - wert: 2
        meldung: Das Magnetfeld verrichtet keine Arbeit, die Geschwindigkeit bleibt gleich. Energieerhaltung braucht man nur für die Beschleunigung vor dem Feld.
hinweise:
  - Zeigt die Kraft im Magnetfeld immer in dieselbe Richtung, oder dreht sie sich mit?
loesung: |
  Die Lorentzkraft steht immer senkrecht zur Geschwindigkeit. Das ist die Bedingung für eine Kreisbahn.
  ---
  Also passt Lorentzkraft gleich Zentripetalkraft, $r = mv/(eB)$. Siehe [14.3 Geladene Teilchen im Magnetfeld: Lorentzkraft und Kreisbahn](/lernen/physik1/magnetismus-wechselstrom/geladene-teilchen-im-magnetfeld-lorentzkraft-und-kreisbahn).
```

```aufgabe
id: p14-mix-verfahren-spannung
titel: "Welches Verfahren passt? Spannung an einer Spule"
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: |
  Ein Stabmagnet wird in $0{,}2\,\text{s}$ aus einer Spule gezogen. Man kennt die Windungszahl, den Querschnitt und die Flussdichte des Magneten in der Spule. Gesucht ist die mittlere induzierte Spannung. Welcher Ansatz passt?
teile:
  - typ: auswahl
    optionen:
      - '$U = N\cdot\Delta\Phi/\Delta t$ mit $\Delta\Phi = B\cdot A$'
      - '$U = B\cdot l\cdot v$, weil sich der Magnet bewegt'
      - '$U_2/U_1 = N_2/N_1$, weil zwei Spulen beteiligt sind'
      - '$U = R\cdot I$ mit dem Widerstand der Spule'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: $U = Blv$ gilt für einen geraden Leiter, der sich durch ein Feld bewegt. Hier bewegt sich der Magnet, und der Fluss durch die ruhende Spule ändert sich.
      - wert: 2
        meldung: Das ist die Transformatorgleichung. Hier gibt es keine zweite Spule, sondern einen bewegten Magneten.
      - wert: 3
        meldung: Das Ohmsche Gesetz braucht einen Strom, und den kennst du nicht. Die Spannung entsteht durch Induktion.
hinweise:
  - Was ändert sich, und welche Größe kennst du am Anfang und am Ende?
loesung: |
  Der Fluss durch die Spule fällt von $BA$ auf praktisch null, während der Magnet herausgezogen wird.
  ---
  Also passt das Induktionsgesetz $U = N\,\Delta\Phi/\Delta t$ mit $\Delta\Phi = BA$ und $\Delta t = 0{,}2\,\text{s}$. Siehe [14.4 Magnetischer Fluss und Induktionsgesetz](/lernen/physik1/magnetismus-wechselstrom/magnetischer-fluss-und-induktionsgesetz).
```

```aufgabe
id: p14-mix-verfahren-netzteil
titel: "Welches Verfahren passt? Strom in der Zuleitung eines Netzteils"
niveau: 2
lernziel: 8
kompetenz: verstehen
angabe: |
  Ein Netzteil (idealer Transformator) liefert sekundär $12\,\text{V}$ und $2\,\text{A}$ an ein Gerät. Gesucht ist der Strom in der $230$-V-Zuleitung. Welcher Ansatz passt?
teile:
  - typ: auswahl
    optionen:
      - 'Leistung bleibt gleich: $I_1 = \dfrac{U_2 I_2}{U_1}$'
      - 'Der Strom bleibt gleich, also $I_1 = 2\,\text{A}$'
      - 'Ohmsches Gesetz mit dem Widerstand des Geräts: $I_1 = 230\,\text{V}/R$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Ein Transformator tauscht Spannung gegen Strom. Auf der Seite mit der hohen Spannung fließt der kleine Strom.
      - wert: 2
        meldung: Das Gerät hängt nicht direkt an $230\,\text{V}$, sondern an $12\,\text{V}$. Der Transformator liegt dazwischen.
hinweise:
  - Was bleibt beim idealen Transformator auf beiden Seiten gleich?
loesung: |
  Beim idealen Transformator gilt $U_1 I_1 = U_2 I_2$, die Leistung bleibt gleich.
  ---
  Also $I_1 = \dfrac{12\,\text{V}\cdot 2\,\text{A}}{230\,\text{V}} \approx 0{,}1\,\text{A}$. Siehe [14.10 Elektromotor, Generator und Transformator](/lernen/physik1/magnetismus-wechselstrom/elektromotor-generator-und-transformator).
```

```aufgabe
id: p14-mix-lenz-energie
titel: Ein Magnet fällt durch eine Spule
niveau: 3
lernziel: 4
kompetenz: begruenden
angabe: |
  Ein Magnet fällt einmal durch eine Spule mit offenen Enden und einmal durch dieselbe Spule, deren Enden über eine Lampe verbunden sind. Im zweiten Fall kommt er unten langsamer an. Begründe mit der Energieerhaltung und der Lenzschen Regel.
teile:
  - typ: text
    muster: |
      In beiden Fällen ändert der fallende Magnet den Fluss durch die Spule, es wird eine Spannung induziert. Bei offenen Enden fließt aber kein Strom, also gibt es kein Gegenfeld und keine Bremskraft.
      Mit der Lampe ist der Kreis geschlossen. Der Induktionsstrom erzeugt nach Lenz ein Feld, das der Bewegung entgegenwirkt: Beim Eintritt stößt die Spule den Magneten ab, beim Austritt zieht sie ihn zurück.
      Energetisch: Die Lampe gibt Licht und Wärme ab. Diese Energie stammt aus der Lageenergie des Magneten. Deshalb wird weniger Lageenergie in Bewegungsenergie umgewandelt, und der Magnet ist unten langsamer.
hinweise:
  - In welchem Fall fließt ein Strom?
  - Woher kommt die Energie, die die Lampe abgibt?
loesung: |
  **Ansatz:** In beiden Fällen wird eine Spannung induziert. Nur bei geschlossenem Kreis fließt ein Strom.
  ---
  **Lenz:** Der Strom erzeugt ein Feld, das der Bewegung entgegenwirkt. Der Magnet wird gebremst.
  ---
  **Energie:** Die Lampe leuchtet auf Kosten der Lageenergie des Magneten. Seine Bewegungsenergie unten ist um diesen Betrag kleiner. Siehe [14.5 Die Lenzsche Regel: Richtung des Induktionsstroms](/lernen/physik1/magnetismus-wechselstrom/die-lenzsche-regel-richtung-des-induktionsstroms).
```

## Prüfungsaufgaben

Diese Aufgaben haben das Format der schriftlichen Prüfung: mehrere Teile, ein Sachzusammenhang, Punkte und ein
Zeitrichtwert. Rechne sie zuerst ohne Hinweise und mit Stoppuhr. Schreib zu jedem Teil den Ansatz in einem Satz hin,
denn auch der Weg bringt Punkte.

```aufgabe
id: p14-pruefung-fernleitung
titel: Warum Hochspannung?
niveau: 3
punkte: 10
lernziel: 9
kompetenz: modellieren
angabe: |
  Zeitrichtwert: 15 Minuten.

  Ein Kraftwerk liefert $200\,\text{MW}$ über eine Fernleitung mit dem Gesamtwiderstand $12\,\Omega$.

  a) Berechne Strom in A und Verlustleistung in MW bei einer Übertragungsspannung von $110\,\text{kV}$.

  b) Berechne beides für $380\,\text{kV}$.

  c) Um welchen Faktor sinken die Verluste? Begründe allgemein, warum.
teile:
  - typ: zahl
    label: a) I in A
    loesung: "200e6/110e3"
    einheit: "A"
    anzeige: '1818'
  - typ: zahl
    label: a) Verlust in MW
    loesung: "(200e6/110e3)^2*12/1e6"
    einheit: "MW"
    anzeige: '39{,}7'
  - typ: zahl
    label: b) I in A
    loesung: "200e6/380e3"
    einheit: "A"
    anzeige: '526'
  - typ: zahl
    label: b) Verlust in MW
    loesung: "(200e6/380e3)^2*12/1e6"
    einheit: "MW"
    anzeige: '3{,}32'
  - typ: zahl
    label: c) Faktor
    loesung: "(380/110)^2"
    anzeige: '11{,}9'
hinweise:
  - '$I = P/U$ und $P_V = I^2R$.'
  - 'Allgemein $P_V = P^2R/U^2$. Wie hängt $P_V$ von $U$ ab?'
loesung: |
  **a)** $I = \dfrac{P}{U} = \dfrac{2{,}0\cdot 10^{8}\,\text{W}}{1{,}1\cdot 10^{5}\,\text{V}} = 1818\,\text{A}$, $P_V = I^2R = (1818\,\text{A})^2\cdot 12\,\Omega = 39{,}7\,\text{MW}$. Das sind fast $20\,\%$ der Leistung.
  ---
  **b)** $I = \dfrac{2{,}0\cdot 10^{8}\,\text{W}}{3{,}8\cdot 10^{5}\,\text{V}} = 526\,\text{A}$, $P_V = (526\,\text{A})^2\cdot 12\,\Omega = 3{,}32\,\text{MW}$, also $1{,}7\,\%$.
  ---
  **c)** Wegen $P_V = \dfrac{P^2R}{U^2}$ sinken die Verluste mit dem Quadrat der Spannung. Faktor $(380/110)^2 = 11{,}9$. Bei gleicher Leistung bedeutet höhere Spannung kleineren Strom, und die Wärme in der Leitung hängt vom Quadrat des Stroms ab.
```

```aufgabe
id: p14-pruefung-massenspektrometer
titel: Massenspektrometer
niveau: 3
punkte: 10
lernziel: 2
kompetenz: modellieren
angabe: |
  Zeitrichtwert: 15 Minuten.

  Einfach positiv geladene Ionen von Kohlenstoff-12 ($m = 12\cdot 1{,}6605\cdot 10^{-27}\,\text{kg}$) werden aus der Ruhe durch $1000\,\text{V}$ beschleunigt und fliegen dann senkrecht in ein Magnetfeld mit $B = 0{,}10\,\text{T}$.

  a) Mit welcher Geschwindigkeit treten sie ins Feld ein? Gib sie in $10^{5}\,\text{m/s}$ an.

  b) Welchen Radius hat ihre Bahn in cm?

  c) Welchen Radius haben Kohlenstoff-14-Ionen bei gleicher Beschleunigungsspannung in cm? Wie weit liegen die Auftreffpunkte nach einem Halbkreis auseinander?
teile:
  - typ: zahl
    label: a) v in 10⁵ m/s
    loesung: "sqrt(2*1.602e-19*1000/(12*1.6605e-27))/1e5"
    anzeige: '1{,}27'
  - typ: zahl
    label: b) r in cm
    loesung: "12*1.6605e-27*sqrt(2*1.602e-19*1000/(12*1.6605e-27))/(1.602e-19*0.10)*100"
    einheit: "cm"
    anzeige: '15{,}8'
  - typ: zahl
    label: c) r in cm
    loesung: "12*1.6605e-27*sqrt(2*1.602e-19*1000/(12*1.6605e-27))/(1.602e-19*0.10)*100*sqrt(14/12)"
    einheit: "cm"
    anzeige: '17{,}0'
  - typ: zahl
    label: c) Abstand der Auftreffpunkte in cm
    loesung: "2*12*1.6605e-27*sqrt(2*1.602e-19*1000/(12*1.6605e-27))/(1.602e-19*0.10)*100*(sqrt(14/12)-1)"
    einheit: "cm"
    anzeige: '2{,}53'
hinweise:
  - 'a) $qU = \tfrac12 mv^2$. b) $r = mv/(qB)$.'
  - 'c) Setzt man $v$ ein, folgt $r = \frac1B\sqrt{2mU/q}$, also $r \propto \sqrt m$. Nach einem Halbkreis liegt der Auftreffpunkt $2r$ vom Eintritt entfernt.'
loesung: |
  **a)** $v = \sqrt{\dfrac{2qU}{m}} = \sqrt{\dfrac{2\cdot 1{,}602\cdot 10^{-19}\,\text{C}\cdot 1000\,\text{V}}{1{,}993\cdot 10^{-26}\,\text{kg}}} = 1{,}27\cdot 10^{5}\,\text{m/s}$.
  ---
  **b)** $r = \dfrac{mv}{qB} = \dfrac{1{,}993\cdot 10^{-26}\,\text{kg}\cdot 1{,}27\cdot 10^{5}\,\text{m/s}}{1{,}602\cdot 10^{-19}\,\text{C}\cdot 0{,}10\,\text{T}} = 0{,}158\,\text{m} = 15{,}8\,\text{cm}$.
  ---
  **c)** $r = \dfrac1B\sqrt{\dfrac{2mU}{q}} \propto \sqrt m$, also $r_{14} = 15{,}8\,\text{cm}\cdot\sqrt{14/12} = 17{,}0\,\text{cm}$. Nach einem Halbkreis treffen die Ionen im Abstand $2r$ vom Eintrittspunkt auf. Die Differenz ist $2\cdot(17{,}04 - 15{,}77)\,\text{cm} = 2{,}53\,\text{cm}$, so lassen sich die Isotope gut trennen.
```

```aufgabe
id: p14-pruefung-netzteil
titel: Generator, Transformator, Verbraucher
niveau: 3
punkte: 8
lernziel: 8
kompetenz: anwenden
angabe: |
  Zeitrichtwert: 12 Minuten.

  Ein kleiner Generator liefert eine Wechselspannung mit dem Effektivwert $44{,}4\,\text{V}$. Ein idealer Transformator mit $N_1 = 400$ und $N_2 = 108$ Windungen speist damit eine $12$-V-Halogenlampe.

  a) Welche Spannung in V liegt an der Lampe?

  b) Die Lampe nimmt $20\,\text{W}$ auf. Berechne Sekundär- und Primärstrom in A.

  c) Warum könnte man die Lampe nicht über den Transformator an einer $44{,}4$-V-Gleichspannung betreiben?
teile:
  - typ: zahl
    label: a) U₂ in V
    loesung: "44.4*108/400"
    einheit: "V"
    anzeige: '12{,}0'
  - typ: zahl
    label: b) I₂ in A
    loesung: "20/(44.4*108/400)"
    einheit: "A"
    anzeige: '1{,}67'
  - typ: zahl
    label: b) I₁ in A
    loesung: "20/44.4"
    einheit: "A"
    anzeige: '0{,}450'
  - typ: text
    label: c)
    muster: |
      Bei Gleichspannung ist der Fluss im Eisenkern nach dem Einschalten konstant. Ohne Flussänderung wird in der Sekundärspule keine Spannung induziert,
      die Lampe bleibt dunkel. Außerdem begrenzt dann nur der kleine Drahtwiderstand der Primärspule den Strom, sie würde überhitzen.
hinweise:
  - 'Beim idealen Transformator ist $U_2/U_1 = N_2/N_1$ und $U_1I_1 = U_2I_2 = P$.'
  - 'Für c): Wodurch entsteht die Sekundärspannung?'
loesung: |
  **a)** $U_2 = U_1\dfrac{N_2}{N_1} = 44{,}4\,\text{V}\cdot\dfrac{108}{400} = 12{,}0\,\text{V}$.
  ---
  **b)** $I_2 = \dfrac{P}{U_2} = \dfrac{20\,\text{W}}{12{,}0\,\text{V}} = 1{,}67\,\text{A}$ und $I_1 = \dfrac{P}{U_1} = \dfrac{20\,\text{W}}{44{,}4\,\text{V}} = 0{,}450\,\text{A}$.
  ---
  **c)** Die Sekundärspannung entsteht durch Induktion und braucht eine Flussänderung. Gleichspannung erzeugt nach dem Einschalten einen konstanten Fluss, also keine Sekundärspannung. Zudem fließt durch die Primärspule ein zu großer Gleichstrom.
```

```aufgabe
id: p14-pruefung-windrad
titel: Ein Windrad heizt ein Haus
niveau: 3
punkte: 10
lernziel: 6
kompetenz: modellieren
angabe: |
  Zeitrichtwert: 15 Minuten.

  Ein kleines Windrad treibt einen Generator. Seine Spule hat $200$ Windungen und die Fläche $0{,}050\,\text{m}^2$. Sie dreht sich $25$-mal pro Sekunde in einem Feld von $0{,}40\,\text{T}$.

  a) Berechne Scheitelwert und Effektivwert der erzeugten Spannung in V.

  b) Der Generator speist direkt einen Heizwiderstand mit $20\,\Omega$. Welche mittlere Heizleistung in kW ergibt sich?

  c) Bei schwachem Wind dreht sich das Windrad nur halb so schnell. Wie groß ist dann die Heizleistung? Begründe mit einem Proportionalitätsschluss.
teile:
  - typ: zahl
    label: a) Scheitelwert in V
    loesung: "200*0.40*0.050*2*pi*25"
    einheit: "V"
    anzeige: '628'
  - typ: zahl
    label: a) Effektivwert in V
    loesung: "200*0.40*0.050*2*pi*25/sqrt(2)"
    einheit: "V"
    anzeige: '444'
  - typ: zahl
    label: b) P in kW
    loesung: "(200*0.40*0.050*2*pi*25/sqrt(2))^2/20/1000"
    einheit: "kW"
    anzeige: '9{,}87'
  - typ: zahl
    label: c) P in kW
    loesung: "(200*0.40*0.050*2*pi*25/sqrt(2))^2/20/1000/4"
    einheit: "kW"
    anzeige: '2{,}47'
hinweise:
  - '$\hat U = NBA\omega$ mit $\omega = 2\pi f$, dann $U_\text{eff} = \hat U/\sqrt 2$.'
  - 'Mittlere Leistung $P = U_\text{eff}^2/R$. Für c): Wie hängt $U$ von der Drehzahl ab, und wie $P$ von $U$?'
loesung: |
  **a)** $\omega = 2\pi\cdot 25\,\text{s}^{-1} = 157\,\text{s}^{-1}$. $\hat U = NBA\omega = 200\cdot 0{,}40\,\text{T}\cdot 0{,}050\,\text{m}^2\cdot 157\,\text{s}^{-1} = 628\,\text{V}$, $U_\text{eff} = 628\,\text{V}/\sqrt 2 = 444\,\text{V}$.
  ---
  **b)** $P = \dfrac{U_\text{eff}^2}{R} = \dfrac{(444\,\text{V})^2}{20\,\Omega} = 9{,}87\,\text{kW}$.
  ---
  **c)** Die Spannung ist proportional zur Drehzahl, halbe Drehzahl gibt halbe Spannung. Die Leistung ist proportional zum Quadrat der Spannung, also ein Viertel: $9{,}87\,\text{kW}/4 = 2{,}47\,\text{kW}$. Ein Windrad liefert bei schwachem Wind deshalb überproportional wenig.
```

```aufgabe
id: p14-pruefung-fadenstrahl
titel: Das Fadenstrahlrohr im Praktikum
niveau: 3
punkte: 9
lernziel: 2
kompetenz: anwenden
angabe: |
  Zeitrichtwert: 15 Minuten.

  In einem Fadenstrahlrohr werden Elektronen ($e = 1{,}602\cdot 10^{-19}\,\text{C}$, $m_e = 9{,}109\cdot 10^{-31}\,\text{kg}$) mit $180\,\text{V}$ beschleunigt. Das Magnetfeld hat $0{,}90\,\text{mT}$.

  a) Berechne die Geschwindigkeit der Elektronen in $10^{6}\,\text{m/s}$.

  b) Berechne den Radius der Kreisbahn in cm.

  c) Die Beschleunigungsspannung wird verdoppelt. Wie groß ist der Radius jetzt in cm? Begründe ohne neue Rechnung mit $v$.
teile:
  - typ: zahl
    label: a) v in 10⁶ m/s
    loesung: "sqrt(2*1.602e-19*180/9.109e-31)/1e6"
    anzeige: '7{,}96'
  - typ: zahl
    label: b) r in cm
    loesung: "9.109e-31*sqrt(2*1.602e-19*180/9.109e-31)/(1.602e-19*0.90e-3)*100"
    einheit: "cm"
    anzeige: '5{,}03'
  - typ: zahl
    label: c) r in cm
    loesung: "9.109e-31*sqrt(2*1.602e-19*180/9.109e-31)/(1.602e-19*0.90e-3)*100*sqrt(2)"
    einheit: "cm"
    anzeige: '7{,}11'
hinweise:
  - 'a) $eU = \tfrac12 m_e v^2$. b) $r = m_e v/(eB)$.'
  - 'c) $v \propto \sqrt U$ und $r \propto v$. Was passiert mit $r$, wenn $U$ sich verdoppelt?'
loesung: |
  **a)** $v = \sqrt{\dfrac{2eU}{m_e}} = \sqrt{\dfrac{2\cdot 1{,}602\cdot 10^{-19}\,\text{C}\cdot 180\,\text{V}}{9{,}109\cdot 10^{-31}\,\text{kg}}} = 7{,}96\cdot 10^{6}\,\text{m/s}$.
  ---
  **b)** $r = \dfrac{m_e v}{eB} = \dfrac{9{,}109\cdot 10^{-31}\,\text{kg}\cdot 7{,}96\cdot 10^{6}\,\text{m/s}}{1{,}602\cdot 10^{-19}\,\text{C}\cdot 9{,}0\cdot 10^{-4}\,\text{T}} = 0{,}0503\,\text{m} = 5{,}03\,\text{cm}$.
  ---
  **c)** Die Geschwindigkeit wächst mit $\sqrt U$, der Radius ist proportional zu $v$. Doppelte Spannung gibt also den $\sqrt 2$-fachen Radius: $5{,}03\,\text{cm}\cdot 1{,}414 = 7{,}11\,\text{cm}$.
```

```aufgabe
id: p14-pruefung-erklaeren
titel: Induktion im Alltag erklären
niveau: 3
punkte: 6
lernziel: 4
kompetenz: begruenden
angabe: |
  Zeitrichtwert: 10 Minuten.

  a) Erkläre, wie ein Induktionsherd einen Topf erhitzt und warum ein Glastopf darauf kalt bleibt.

  b) Ein Magnet fällt durch ein senkrechtes Kupferrohr deutlich langsamer als daneben durch die Luft. Erkläre.
teile:
  - typ: text
    label: a)
    muster: |
      Unter der Kochfläche liegt eine Spule, durch die ein Wechselstrom hoher Frequenz fließt. Ihr wechselndes Magnetfeld durchsetzt den
      Topfboden und induziert darin Wirbelströme, die den Boden durch Joulesche Wärme direkt erhitzen. Glas ist kein Leiter, dort fließen
      keine Wirbelströme, der Topf bleibt kalt. Gut funktionieren ferromagnetische Töpfe aus Eisen.
  - typ: text
    label: b)
    muster: |
      Der fallende Magnet ändert den Fluss durch die Rohrabschnitte unter und über ihm. Dadurch werden im Rohr Wirbelströme induziert, deren
      Magnetfelder nach der Lenzschen Regel der Ursache, also der Bewegung, entgegenwirken. Unter dem Magneten stoßen sie ihn ab, über ihm
      ziehen sie ihn zurück. Die Bewegungsenergie wird in Wärme im Rohr umgewandelt.
hinweise:
  - Stichworte Wirbelströme und Lenzsche Regel.
  - Ein Induktionsstrom braucht einen Leiter. Welcher Topf ist ein Leiter?
loesung: |
  **a)** Ein Wechselfeld hoher Frequenz induziert Wirbelströme im leitenden Topfboden, die ihn durch Joulesche Wärme erhitzen. Glas leitet nicht, dort fließt kein Strom.
  ---
  **b)** Der fallende Magnet ändert den Fluss durch das Rohr. Die induzierten Wirbelströme bremsen ihn nach der Lenzschen Regel, oben ziehen sie zurück, unten stoßen sie ab.
  ---
  **Energie:** In beiden Fällen wird die Energie, die das Feld beziehungsweise die Lage liefert, im Metall zu Wärme.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, ohne nachzusehen. Vergleiche dann mit der Zusammenfassung darunter.
antwort: |
  Zum Beispiel: (1) Ströme erzeugen Magnetfelder, und Magnetfelder üben auf Ströme und bewegte Ladungen Kräfte aus,
  $F = BIl$ und $F = qvB$. (2) Ändert sich der magnetische Fluss durch eine Spule, wird die Spannung
  $U = -N\,\Delta\Phi/\Delta t$ induziert, und der induzierte Strom wirkt nach Lenz seiner Ursache entgegen.
  (3) Die Netzspannung ist eine sinusförmige Wechselspannung mit dem Effektivwert $230\,\text{V} = \hat U/\sqrt 2$.
  Transformatoren setzen sie um, und Hochspannung senkt die Leitungsverluste mit $1/U^2$.
```

:::zusammenfassung
- **Magnetfelder** entstehen durch bewegte Ladungen. Feldlinien sind geschlossen, Pole gibt es nur paarweise.
  Gerader Leiter $B = \mu_0 I/(2\pi r)$, lange Spule $B = \mu_0\mu_r NI/l$. Richtung mit der rechten Hand.
- **Kraft auf Ströme:** $F = BIl\sin\alpha$, Richtung mit der Drei-Finger-Regel. Gleichsinnige Ströme ziehen sich an.
  Auf eine Leiterschleife wirkt $M = NBIA\sin\varphi$.
- **Lorentzkraft** $F = qvB$ steht senkrecht zur Bewegung und verrichtet keine Arbeit. Kreisbahn $r = mv/(qB)$,
  Umlaufdauer $T = 2\pi m/(qB)$ unabhängig von $v$. Fadenstrahlrohr $e/m = 2U/(B^2r^2)$, Wien-Filter $v = E/B$,
  Hall-Spannung $U_H = vBb$.
- **Induktion:** Fluss $\Phi = BA\cos\varphi$, $U = -N\,\Delta\Phi/\Delta t$, bewegter Leiter $U = Blv$. Nur
  Änderungen zählen.
- **Lenzsche Regel:** Der Induktionsstrom wirkt der Flussänderung entgegen. Sie folgt aus der Energieerhaltung.
  Wirbelströme bremsen und heizen.
- **Selbstinduktion:** $U = -L\,\Delta I/\Delta t$, $L = \mu_0\mu_r N^2A/l$. Der Strom steigt beim Einschalten allmählich,
  beim Ausschalten entsteht eine Spannungsspitze. Feldenergie $\tfrac12 LI^2$.
- **Wechselspannung:** $u = \hat U\sin\omega t$ mit $\hat U = NBA\omega$. Effektivwert $U_\text{eff} = \hat U/\sqrt 2$
  über die Wärmewirkung. $X_L = \omega L$, $X_C = 1/(\omega C)$, Wirkleistung $P = UI\cos\varphi$, Schwingkreis
  $f_0 = 1/(2\pi\sqrt{LC})$.
- **Maschinen und Netz:** Motor und Generator sind dieselbe Maschine. Transformator $U_2/U_1 = N_2/N_1$, $U_1I_1 = U_2I_2$,
  nur mit Wechselspannung. Leitungsverluste $P^2R/U^2$, Drehstrom mit $\sqrt 3\cdot 230\,\text{V} \approx 400\,\text{V}$.
:::

### Die häufigsten Fehler

Jeder Fehler wird von einer Aufgabe in diesem Kapitel gezielt trainiert. Wenn du einen davon bei dir wiedererkennst,
rechne die genannte Aufgabe noch einmal.

1. **Magnetpole für Ladungen gehalten.** Ein Magnet zieht ruhende Ladungen nicht an. Training: „Pole und Ladungen
   vergleichen“ und „Ein ruhendes Elektron im Magnetfeld“.
2. **Längen in Zentimetern eingesetzt.** $\mu_0$, $B$ und $\Phi$ rechnen mit Metern, $1\,\text{cm}^2 = 10^{-4}\,\text{m}^2$.
   Training: „Feld eines geraden Leiters“ und „Magnetischer Fluss“.
3. **Kosinus statt Sinus in $F = BIl\sin\alpha$.** Prüfe den Grenzfall „parallel“. Training: „Kraft auf einen Leiter“.
4. **Linke statt rechte Hand oder Elektron nicht umgedreht.** Training: „Richtung der Kraft bestimmen“.
5. **Spannung statt Geschwindigkeit in $r = mv/(qB)$.** Erst $v$ aus $eU = \tfrac12 mv^2$. Training:
   „Das Fadenstrahlrohr im Praktikum“.
6. **Starkes Feld mit Flussänderung verwechselt.** Ohne Änderung keine Induktion. Training: „Wann wird eine Spannung
   induziert?“ und „Warum braucht der Transformator Wechselspannung?“.
7. **Windungszahl vergessen oder bei $L$ nicht quadriert.** Training: „Induktion in einer Spule“ und „Induktivität einer
   Luftspule“.
8. **„Das induzierte Feld zeigt immer gegen das äußere Feld.“** Bei Abnahme zeigt es in dieselbe Richtung. Training:
   „Ein Südpol wird aus der Spule gezogen“.
9. **Spannung statt Strom in die Bremskraft eingesetzt.** Training: „Bremskraft auf einen Bügel“.
10. **Effektivwert und Scheitelwert verwechselt oder durch 2 statt √2 geteilt.** Training: „Netzspannung in
    Nordamerika“, „Spannung eines Generators“ und „Ein Oszilloskopbild auswerten“.
11. **Mittlere Leistung aus Spitzenwerten.** Training: „Heizwiderstand am Netz“.
12. **$2\pi$ vergessen bei $X_L$, $X_C$ oder $f_0$.** Training: „Spule am Netz“, „Kondensator am Netz“ und
    „Eigenfrequenz eines Schwingkreises“.
13. **Scheinleistung als Wirkleistung genommen.** Training: „Wirkleistung eines Geräts“ und „Blindleistung eines Motors“.
14. **Ströme am Transformator im falschen Verhältnis.** Training: „Transformator berechnen“.
15. **Leitungsverluste mit $U^2/R$ und der Übertragungsspannung.** Training: „Mittelspannung oder Hochspannung?“ und
    „Was passiert bei doppelter Übertragungsspannung?“.

### Lernziel-Selbstcheck

Schätze für jedes Lernziel ein, wie sicher du bist: **1** heißt „noch unsicher“, **2** „mit Nachsehen“, **3** „sicher,
auch in der Prüfung“. Bei einer 1 wiederhole den Abschnitt und rechne seine Aufgabe auf Niveau 3.

1. Magnetfelder von Magneten, Leitern und Spulen zeichnen und berechnen.
2. Kräfte auf Leiter berechnen und ihre Richtung bestimmen.
3. Lorentzkraft und Kreisbahnen auswerten.
4. Fluss und Induktionsgesetz anwenden, auch aus einem Diagramm.
5. Die Richtung des Induktionsstroms mit Lenz bestimmen und begründen.
6. Selbstinduktion erklären und berechnen.
7. Mit Scheitel- und Effektivwerten rechnen.
8. Blindwiderstände, Wirkleistung und Schwingkreis berechnen.
9. Motor, Generator und Transformator erklären und berechnen.
10. Hochspannung und Drehstrom begründen und berechnen.

## Mündliche Prüfung

```karten
- id: p14-k-ursprung
  frage: Woher kommt Magnetismus, und warum gibt es keine einzelnen Magnetpole?
  antwort: |
    Magnetfelder entstehen durch bewegte Ladungen, also durch Ströme. In Dauermagneten wirken die Elektronen der Atome
    wie winzige Kreisströme, die in ferromagnetischen Stoffen in Bereichen gleich ausgerichtet sind. Jeder Kreisstrom hat
    eine Nord- und eine Südseite. Deshalb treten Pole immer paarweise auf, und magnetische Feldlinien sind geschlossen.
    Ein Magnetpol ist auch keine Ladung, eine ruhende Ladung spürt neben einem Magneten keine Kraft.
  kernpunkte: ["bewegte Ladungen als Ursache", "Elementarmagnete / Kreisströme", "Pole nur paarweise", "Feldlinien geschlossen"]
- id: p14-k-felder
  frage: Wie sehen die Magnetfelder eines geraden Leiters und einer Spule aus, und wie stark sind sie?
  antwort: |
    Um einen geraden Leiter verlaufen die Feldlinien in konzentrischen Kreisen, ihre Richtung gibt die Rechte-Hand-Regel.
    Die Flussdichte ist $B = \mu_0 I/(2\pi r)$ und nimmt mit dem Abstand ab. Im Inneren einer langen Spule ist das Feld
    homogen, $B = \mu_0\mu_r NI/l$. Außen gleicht es dem Feld eines Stabmagneten. Ein Eisenkern verstärkt das Feld um
    den Faktor $\mu_r$.
  kernpunkte: ["konzentrische Kreise, Rechte-Hand-Regel", "B = μ0·I/(2πr)", "Spule innen homogen, B = μ0·μr·N·I/l", "Eisenkern verstärkt"]
- id: p14-k-flussdichte
  frage: Wie ist die magnetische Flussdichte definiert, und wie bestimmt man die Richtung der Kraft auf einen Leiter?
  antwort: |
    Über die Kraft auf einen stromdurchflossenen Leiter senkrecht zum Feld: $F = BIl$, also $B = F/(Il)$ mit der Einheit
    Tesla $= \text{N}/(\text{A m})$. Bei einem Winkel $\alpha$ zwischen Leiter und Feld gilt $F = BIl\sin\alpha$. Die
    Richtung gibt die Drei-Finger-Regel der rechten Hand: Daumen in Stromrichtung, Zeigefinger in Feldrichtung,
    Mittelfinger zeigt die Kraft.
  kernpunkte: ["F = B·I·l·sin α", "Tesla = N/(A·m)", "Drei-Finger-Regel rechte Hand", "parallel: keine Kraft"]
- id: p14-k-lorentz
  frage: Was ist die Lorentzkraft, und warum bewegt sich ein geladenes Teilchen im homogenen Magnetfeld auf einem Kreis?
  antwort: |
    Die Lorentzkraft $F = qvB$ wirkt auf eine bewegte Ladung senkrecht zu Geschwindigkeit und Feld. Weil sie immer
    senkrecht zur Bewegung steht, verrichtet sie keine Arbeit, der Betrag der Geschwindigkeit bleibt gleich. Sie wirkt
    als konstante Zentripetalkraft, $qvB = mv^2/r$, also $r = mv/(qB)$. Die Umlaufdauer $2\pi m/(qB)$ hängt nicht von
    der Geschwindigkeit ab.
  kernpunkte: ["F = q·v·B senkrecht zu v und B", "keine Arbeit, Tempo konstant", "Zentripetalkraft, r = mv/(qB)", "T unabhängig von v"]
- id: p14-k-em
  frage: Wie bestimmt man die spezifische Ladung des Elektrons, und was folgt daraus zusammen mit dem Millikan-Versuch?
  antwort: |
    Mit dem Fadenstrahlrohr: Elektronen werden mit der Spannung $U$ beschleunigt und laufen im Magnetfeld $B$ auf einem
    Kreis mit Radius $r$. Aus $eU = \tfrac12 mv^2$ und $r = mv/(eB)$ folgt $e/m = 2U/(B^2r^2) \approx 1{,}76\cdot 10^{11}\,\text{C/kg}$.
    Der Millikan-Versuch aus der Elektrostatik liefert die Elementarladung $e$. Zusammen ergibt das die Masse des
    Elektrons.
  kernpunkte: ["Fadenstrahlrohr: U, B, r messen", "e/m = 2U/(B²r²)", "≈ 1,76·10¹¹ C/kg", "mit Millikan: Elektronenmasse"]
- id: p14-k-induktion
  frage: Formuliere das Induktionsgesetz. Auf welche Arten kann sich der Fluss ändern?
  antwort: |
    Ändert sich der magnetische Fluss $\Phi = BA\cos\varphi$ durch eine Spule mit $N$ Windungen, wird die Spannung
    $U = -N\,\Delta\Phi/\Delta t$ induziert. Der Fluss kann sich durch Änderung der Flussdichte (bewegter Magnet,
    geschalteter Strom), der Fläche (bewegter Leiter, $U = Blv$) oder des Winkels (drehende Spule im Generator) ändern.
    Ein konstantes Feld induziert nichts, egal wie stark es ist.
  kernpunkte: ["Φ = B·A·cos φ", "U = −N·ΔΦ/Δt", "B, A oder Winkel ändern", "nur Änderungen zählen"]
- id: p14-k-lenz
  frage: Was besagt die Lenzsche Regel, und warum muss sie gelten?
  antwort: |
    Der induzierte Strom fließt so, dass sein Magnetfeld der Flussänderung entgegenwirkt, die ihn verursacht. Nähert man
    einem Ring einen Magneten, wird er abgestoßen, entfernt man ihn, wird der Ring angezogen. Die Regel folgt aus der
    Energieerhaltung: Würde der Strom die Änderung verstärken, entstünde ein Perpetuum mobile. So aber muss man Arbeit
    verrichten, und genau diese Arbeit wird zu elektrischer Energie.
  kernpunkte: ["Induktionsstrom wirkt Änderung entgegen", "Ringversuch: Abstoßen beim Nähern, Anziehen beim Entfernen", "Energieerhaltung", "sonst Perpetuum mobile"]
- id: p14-k-wirbel
  frage: Was sind Wirbelströme, und wo nutzt man sie, wo stören sie?
  antwort: |
    Wirbelströme sind Induktionsströme, die in ausgedehnten Metallstücken kreisförmig fließen, wenn sich der Fluss
    ändert. Nach Lenz bremsen sie die Bewegung und erzeugen Wärme. Man nutzt sie in Wirbelstrombremsen von Zügen, im
    Induktionsherd und in Metalldetektoren. In Transformatorkernen stören sie, deshalb baut man die Kerne aus dünnen,
    isolierten Blechen.
  kernpunkte: ["Induktionsströme im Metall", "bremsen nach Lenz, erzeugen Wärme", "Bremse, Induktionsherd", "geblechte Kerne"]
- id: p14-k-selbstinduktion
  frage: Was ist Selbstinduktion, und warum entsteht beim Ausschalten einer Spule eine hohe Spannung?
  antwort: |
    Ändert sich der Strom in einer Spule, ändert sich ihr eigener Fluss, und sie induziert in sich die Spannung
    $U = -L\,\Delta I/\Delta t$. Sie wirkt jeder Stromänderung entgegen, die Spule ist „träge“. Beim Einschalten steigt
    der Strom deshalb allmählich. Beim Ausschalten fällt er in sehr kurzer Zeit, $\Delta I/\Delta t$ ist riesig, und es
    entsteht eine Spannungsspitze, die als Funke überspringen kann. Das nutzt die Zündspule.
  kernpunkte: ["U = −L·ΔI/Δt", "wirkt Stromänderung entgegen", "Einschalten verzögert", "Ausschalten: Spannungsspitze"]
- id: p14-k-generator
  frage: Wie entsteht im Generator eine Wechselspannung?
  antwort: |
    Eine Spule dreht sich gleichmäßig in einem Magnetfeld. Der Winkel zwischen Flächensenkrechte und Feld wächst mit
    $\omega t$, der Fluss schwankt wie $BA\cos\omega t$. Nach dem Induktionsgesetz entsteht $u = NBA\omega\sin\omega t$,
    eine sinusförmige Wechselspannung mit dem Scheitelwert $\hat U = NBA\omega$. Wird Strom entnommen, bremst die
    Lenzsche Regel die Drehung, und man muss mechanische Arbeit verrichten.
  kernpunkte: ["drehende Spule im Feld", "Φ = B·A·cos ωt", "u = N·B·A·ω·sin ωt", "Lenz: Arbeit nötig"]
- id: p14-k-effektiv
  frage: Was ist der Effektivwert einer Wechselspannung, und warum ist er bei Sinusform Û/√2?
  antwort: |
    Der Effektivwert ist die Gleichspannung, die an einem ohmschen Widerstand dieselbe mittlere Leistung erzeugt. Der
    einfache Mittelwert taugt nicht, er ist null. Die Leistung $u^2/R$ ist aber immer positiv. Der Mittelwert von
    $\sin^2$ ist $\tfrac12$, also ist die mittlere Leistung $\hat U^2/(2R) = U_\text{eff}^2/R$ und $U_\text{eff} = \hat U/\sqrt 2$.
    Die $230\,\text{V}$ der Steckdose sind ein Effektivwert, der Scheitelwert ist $325\,\text{V}$.
  kernpunkte: ["gleiche Wärmewirkung wie Gleichspannung", "Mittelwert der Spannung ist null", "Mittelwert von sin² = ½", "230 V eff, 325 V Scheitel"]
- id: p14-k-lc
  frage: Wie verhalten sich Spule und Kondensator im Wechselstromkreis, und warum hängt ihr Widerstand von der Frequenz ab?
  antwort: |
    Die Spule hat den induktiven Widerstand $X_L = 2\pi fL$. Er wächst mit der Frequenz, weil die Gegenspannung der
    Selbstinduktion mit der Änderungsgeschwindigkeit wächst. Der Strom eilt der Spannung nach. Der Kondensator hat
    $X_C = 1/(2\pi fC)$. Er sinkt mit der Frequenz, weil öfter umgeladen wird. Der Strom eilt voraus. Ideale Spulen und
    Kondensatoren nehmen im Mittel keine Leistung auf, ihre Leistung ist Blindleistung.
  kernpunkte: ["X_L = 2πfL, Strom eilt nach", "X_C = 1/(2πfC), Strom eilt voraus", "Begründung über Gegenspannung bzw. Umladen", "Blindleistung"]
- id: p14-k-schwingkreis
  frage: Wie funktioniert ein Schwingkreis, und was hat er mit dem Federpendel gemeinsam?
  antwort: |
    Ein geladener Kondensator entlädt sich über eine Spule. Die Energie wandert vom elektrischen Feld ins Magnetfeld
    und zurück, der Kondensator wird abwechselnd umgeladen. Die Eigenfrequenz ist $f_0 = 1/(2\pi\sqrt{LC})$. Wie beim
    Federpendel pendelt Energie zwischen zwei Speichern; die Induktivität entspricht der Masse, $1/C$ der
    Federkonstante. Der ohmsche Widerstand dämpft die Schwingung. Radios stellen so ihre Empfangsfrequenz ein.
  kernpunkte: ["Energie pendelt zwischen C und L", "f0 = 1/(2π√(LC))", "Analogie Federpendel: L ~ m, 1/C ~ D", "Dämpfung durch R"]
- id: p14-k-motor
  frage: Wie funktioniert ein Gleichstrommotor, und warum zieht er beim Anlaufen einen großen Strom?
  antwort: |
    Auf die stromdurchflossene Rotorspule im Feld des Stators wirkt ein Drehmoment $M = NBIA\sin\varphi$. Damit sie
    sich weiterdreht, polt der Kommutator den Strom jede halbe Umdrehung um. Der drehende Rotor ist zugleich ein
    Generator und induziert eine Gegenspannung, die den Strom begrenzt. Beim Anlaufen fehlt sie, deshalb begrenzt nur
    der kleine Wicklungswiderstand den Strom.
  kernpunkte: ["Drehmoment auf Leiterschleife", "Kommutator polt um", "Gegenspannung durch Induktion", "Anlaufstrom groß"]
- id: p14-k-trafo
  frage: Wie funktioniert ein Transformator, welche Gleichungen gelten, und warum braucht er Wechselspannung?
  antwort: |
    Zwei Spulen sitzen auf einem gemeinsamen Eisenkern. Die Wechselspannung an der Primärspule erzeugt einen wechselnden
    Fluss, der durch die Sekundärspule geht und dort eine Spannung induziert. Für den idealen Transformator gilt
    $U_2/U_1 = N_2/N_1$ und $I_2/I_1 = N_1/N_2$, die Leistung bleibt gleich. Bei Gleichspannung ist der Fluss konstant,
    und es wird nichts induziert.
  kernpunkte: ["Eisenkern koppelt die Spulen", "U2/U1 = N2/N1", "I2/I1 = N1/N2, Leistung gleich", "nur Wechselspannung"]
- id: p14-k-hochspannung
  frage: Warum überträgt man elektrische Energie mit Hochspannung? Verbinde die Antwort mit dem Ohmschen Gesetz aus dem Kapitel Gleichstrom.
  antwort: |
    Bei gegebener Leistung ist der Strom $I = P/U$. Die Leitung hat einen Widerstand $R$, und nach der Leistungsformel aus
    dem Gleichstromkapitel wird in ihr $I^2R$ in Wärme umgesetzt. Also sind die Verluste $P^2R/U^2$ und sinken mit dem
    Quadrat der Spannung. Zehnfache Spannung heißt ein Hundertstel der Verluste. Mit Transformatoren lässt sich
    Wechselspannung einfach hoch- und heruntersetzen.
  kernpunkte: ["I = P/U", "Verluste I²R = P²R/U²", "quadratisch in U", "Transformatoren, Wechselspannung"]
- id: p14-k-drehstrom
  frage: Was ist Drehstrom, und warum liegen zwischen zwei Außenleitern 400 V?
  antwort: |
    Drei Wechselspannungen, die um je $120^\circ$ phasenverschoben sind, erzeugt von drei versetzten Generatorspulen.
    Zwischen Außenleiter und Neutralleiter liegen $230\,\text{V}$. Zwischen zwei Außenleitern liegt die Differenz zweier
    um $120^\circ$ verschobener Zeiger, $\sqrt 3\cdot 230\,\text{V} \approx 400\,\text{V}$. Drehstrom spart Leiter und
    erzeugt in Motoren ein Drehfeld.
  kernpunkte: ["drei Phasen, je 120° verschoben", "230 V gegen N", "√3·230 V ≈ 400 V", "Drehfeld, Leitereinsparung"]
- id: p14-k-maxwell
  frage: Was haben Elektrizität, Magnetismus und Licht miteinander zu tun? Verbinde dieses Kapitel mit der Elektrostatik und der Optik.
  antwort: |
    Ein sich änderndes Magnetfeld erzeugt ein elektrisches Feld (Induktion), und ein sich änderndes elektrisches Feld
    erzeugt ein Magnetfeld. Die beiden Felder können sich gegenseitig weitertragen und als elektromagnetische Welle
    ausbreiten. Ihre Geschwindigkeit $c = 1/\sqrt{\varepsilon_0\mu_0}$ folgt aus der Feldkonstante der Elektrostatik und
    der des Magnetismus und ist genau die Lichtgeschwindigkeit. Licht, Radiowellen und Röntgenstrahlung sind
    elektromagnetische Wellen verschiedener Frequenz.
  kernpunkte: ["Induktion und ihr Gegenstück", "elektromagnetische Welle", "c = 1/√(ε0·μ0)", "Licht ist eine EM-Welle"]
```
