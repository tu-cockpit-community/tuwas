---
nummer: 10
titel: Temperatur, Wärme und Gasgesetze
kurz: Temperatur und Temperaturskalen, thermische Ausdehnung, der Unterschied zwischen Temperatur, innerer Energie und Wärme, Wärmekapazität, Mischungsrechnung, Phasenübergänge, Wärmetransport, Gasgesetze und kinetische Gastheorie.
teil: waerme
stunden: 10
pruefungsgewicht: 3
voraussetzungen: [groessen-einheiten-messen, arbeit-energie-impuls, hydro-aeromechanik]
lernziele:
  - Temperaturen zwischen Celsius, Kelvin und Fahrenheit umrechnen, das thermische Gleichgewicht erklären und den absoluten Nullpunkt begründen
  - Längen- und Volumenausdehnung berechnen und die Anomalie des Wassers mit ihren Folgen erklären
  - Temperatur, innere Energie und Wärme sicher unterscheiden und Änderungen der inneren Energie durch Wärme oder Arbeit berechnen
  - Wärmemengen mit Q = c·m·ΔT berechnen und Mischungsaufgaben, auch mit Kalorimeter, über die Energiebilanz lösen
  - Schmelz- und Verdampfungswärme in Energiebilanzen einbeziehen und Erwärmungskurven lesen
  - Wärmeleitung, Konvektion und Wärmestrahlung unterscheiden und Wärmeströme berechnen oder abschätzen
  - die Gasgesetze von Boyle-Mariotte, Gay-Lussac und Amontons mit Kelvin und Absolutdruck anwenden
  - mit der Zustandsgleichung pV = nRT Stoffmengen, Massen, Dichten, Drücke, Volumina und Temperaturen berechnen
  - Druck und Temperatur eines Gases mit der kinetischen Gastheorie deuten und Teilchengeschwindigkeiten berechnen
---

Die Wärmelehre beschreibt alles, was mit „warm“ und „kalt“ zu tun hat. Warum kocht Nudelwasser so
langsam? Warum platzt eine Spraydose im Feuer? Warum frieren Seen von oben zu und nicht vom Grund her?
Warum kühlt Schwitzen? Alle diese Fragen beantwortest du am Ende dieses Kapitels mit wenigen Gleichungen.

**Was kommt in der Prüfung?** Die Prüfungsordnung nennt ausdrücklich „Temperatur; innere Energie;
Arbeit und Wärme“ sowie „Gasgesetze; Zustandsgleichung“. In der schriftlichen Prüfung sind zwei
Aufgabentypen besonders häufig:

- Wasser wird erwärmt, Eis wird geschmolzen oder zwei Flüssigkeiten werden gemischt. Gesucht ist eine
  Wärmemenge, eine Zeit oder eine Endtemperatur.
- Ein Gas steckt in einer Flasche, einem Reifen oder einem Ballon. Gesucht ist ein Druck, ein Volumen,
  eine Temperatur oder die Gasmenge.

Beide Typen sind gut lösbar, wenn du zwei Werkzeuge sicher beherrschst. Das erste ist die
**Energiebilanz**: Die Wärme, die ein Körper abgibt, nimmt ein anderer auf. Das zweite ist die
**Zustandsgleichung** des idealen Gases, immer mit Temperaturen in **Kelvin**.

In der mündlichen Prüfung kommt fast sicher die Frage nach dem Unterschied zwischen Temperatur,
innerer Energie und Wärme. An dieser Frage scheitern viele, weil die Alltagssprache die drei Wörter
durcheinanderwirft. Im Alltag sagt man „Der Tee hat viel Wärme“. Physikalisch ist das falsch, und
in [10.3 Temperatur, innere Energie und Wärme](/lernen/physik1/temperatur-waerme-gase/temperatur-innere-energie-und-waerme)
lernst du, warum. Dieser Abschnitt ist der wichtigste des Kapitels. Nimm dir dafür Zeit.

Für Softwareleute gibt es ein hilfreiches Bild: Die Wärmelehre ist **Buchhaltung**. Energie ist eine
Erhaltungsgröße wie Geld auf Konten. Die innere Energie ist der Kontostand eines Körpers. Wärme ist
eine Überweisung zwischen zwei Konten. Die Temperatur entscheidet, in welche Richtung überwiesen
wird. Wer jede Aufgabe als Kontenabgleich aufschreibt, macht kaum Fehler.

Das [Kapitel 11 über die Hauptsätze](/lernen/physik1/hauptsaetze-waermekraftmaschinen) baut direkt auf
diesem Kapitel auf. Dort geht es um Motoren, Kühlschränke und das Wetter.

:::vorwissen
Für dieses Kapitel brauchst du:

- **Energie und Leistung**: kinetische und potentielle Energie, Energieerhaltung und die Leistung als
  Energie pro Zeit, aus [Kapitel 4: Energie](/lernen/physik1/arbeit-energie-impuls/energie) und
  [Kapitel 4: Leistung und Wirkungsgrad](/lernen/physik1/arbeit-energie-impuls/leistung-und-wirkungsgrad).
- **Druck** als Kraft pro Fläche und den **Schweredruck** in einer Flüssigkeit aus dem
  [Kapitel Hydro- und Aeromechanik](/lernen/physik1/hydro-aeromechanik).
- **Einheiten umrechnen**, vor allem Liter in Kubikmeter und bar in Pascal, aus
  [Kapitel 1: Vorsilben, Zehnerpotenzen und Umrechnen](/lernen/physik1/groessen-einheiten-messen/vorsilben-zehnerpotenzen-und-umrechnen).
- **Formeln umstellen** und **lineare Funktionen** aus dem Mathematikkurs:
  [Formeln umstellen](/lernen/mathe3/gleichungen/formeln-umstellen) und
  [Lineare Funktionen](/lernen/mathe3/funktionen/lineare-funktionen).
:::

### Eingangsdiagnose: Bist du bereit?

Die folgenden kurzen Fragen prüfen dein Vorwissen. Wenn du bei einer Frage unsicher bist, folge dem
Link in der Lösung und wiederhole den Abschnitt kurz. Das kostet zehn Minuten und spart dir später viel
Ärger.

```aufgabe
id: p10-e-kwh
art: check
titel: Kilowattstunden in Joule
niveau: 1
angabe: |
  Eine Wärmepumpe liefert an einem Tag $2{,}5\,\text{kWh}$ Wärme. Wie viel ist das in Joule? Es gilt $1\,\text{kWh} = 1000\,\text{W}\cdot 3600\,\text{s}$.
teile:
  - typ: zahl
    loesung: "2.5*1000*3600"
    einheit: "J"
    anzeige: '9\,000\,000 = 9{,}0\cdot 10^{6}'
    fehler:
      - wert: "2.5*3600"
        meldung: Du hast das „Kilo“ vergessen. Eine Kilowattstunde ist $1000\,\text{W}$ eine Stunde lang, also $1000\,\text{W}\cdot 3600\,\text{s}$.
      - wert: "2.5*1000"
        meldung: Du hast nur das „Kilo“ umgerechnet. Die Stunde muss auch in Sekunden umgerechnet werden, denn $1\,\text{J} = 1\,\text{W}\cdot 1\,\text{s}$.
hinweise:
  - 'Ein Watt ist ein Joule pro Sekunde. Also ist ein Joule eine Wattsekunde.'
loesung: |
  Eine Kilowattstunde ist die Energie, die eine Leistung von $1000\,\text{W}$ in einer Stunde, also in $3600\,\text{s}$, umsetzt: $1\,\text{kWh} = 1000\,\text{W}\cdot 3600\,\text{s} = 3{,}6\cdot 10^{6}\,\text{J}$.
  ---
  $2{,}5\,\text{kWh} = 2{,}5\cdot 3{,}6\cdot 10^{6}\,\text{J} = 9{,}0\cdot 10^{6}\,\text{J}$. Wiederholen: [Kapitel 4: Leistung und Wirkungsgrad](/lernen/physik1/arbeit-energie-impuls/leistung-und-wirkungsgrad).
```

```aufgabe
id: p10-e-leistung
art: check
titel: Energie aus Leistung und Zeit
niveau: 1
angabe: |
  Ein Haarföhn mit $1500\,\text{W}$ läuft $4{,}0$ Minuten. Wie viel elektrische Energie setzt er um? Gib das Ergebnis in Kilojoule an.
teile:
  - typ: zahl
    loesung: "1500*4*60/1000"
    einheit: "kJ"
    anzeige: '360'
    fehler:
      - wert: "1500*4/1000"
        meldung: Du hast die Minuten nicht in Sekunden umgerechnet. Ein Watt ist ein Joule **pro Sekunde**, also brauchst du die Zeit in Sekunden.
      - wert: "1500/240/1000"
        meldung: Du hast die Leistung durch die Zeit geteilt. Leistung ist Energie pro Zeit, $P = E/t$. Umgestellt heißt das $E = P\cdot t$, also multiplizieren.
hinweise:
  - 'Aus $P = E/t$ folgt $E = P\cdot t$, mit $t$ in Sekunden.'
loesung: |
  Leistung ist Energie pro Zeit, $P = E/t$. Wir multiplizieren beide Seiten mit $t$ und erhalten $E = P\cdot t$.
  ---
  $E = 1500\,\text{W}\cdot 240\,\text{s} = 360\,000\,\text{J} = 360\,\text{kJ}$. Wiederholen: [Kapitel 4: Leistung und Wirkungsgrad](/lernen/physik1/arbeit-energie-impuls/leistung-und-wirkungsgrad).
```

```aufgabe
id: p10-e-bar
art: check
titel: bar in Pascal
niveau: 1
angabe: |
  Ein Reifenmanometer zeigt $2{,}4\,\text{bar}$. Wie viel ist das in Pascal? Es gilt $1\,\text{bar} = 100\,000\,\text{Pa}$.
teile:
  - typ: zahl
    loesung: "2.4*100000"
    einheit: "Pa"
    anzeige: '240\,000'
    fehler:
      - wert: "2.4*1000"
        meldung: Du hast mit $1\,\text{bar} = 1000\,\text{Pa}$ gerechnet. Richtig ist $1\,\text{bar} = 10^{5}\,\text{Pa} = 1000\,\text{hPa}$. Die Hektopascal aus dem Wetterbericht sind schon Hunderter.
hinweise:
  - Ein bar sind hunderttausend Pascal, das ist ungefähr der Luftdruck auf Meereshöhe.
loesung: |
  Ein Pascal ist ein Newton pro Quadratmeter, ein sehr kleiner Druck. Deshalb ist $1\,\text{bar} = 10^{5}\,\text{Pa}$.
  ---
  $2{,}4\,\text{bar} = 2{,}4\cdot 10^{5}\,\text{Pa} = 240\,000\,\text{Pa}$. Wiederholen: [9.1 Druck: Kraft pro Fläche](/lernen/physik1/hydro-aeromechanik/druck-kraft-pro-flaeche).
```

```aufgabe
id: p10-e-liter
art: check
titel: Liter in Kubikmeter
niveau: 1
angabe: |
  Eine Gasflasche hat ein Volumen von $25\,\text{L}$. Wie viel ist das in Kubikmetern?
teile:
  - typ: zahl
    loesung: "25/1000"
    einheit: "m³"
    anzeige: '0{,}025'
    fehler:
      - wert: "25/100"
        meldung: Ein Kubikmeter hat $1000$ Liter, nicht $100$. Ein Würfel mit $1\,\text{m}$ Kantenlänge hat $10\cdot 10\cdot 10 = 1000$ Würfel mit $1\,\text{dm}$ Kantenlänge, und ein solcher Würfel ist ein Liter.
      - wert: "25*1000"
        meldung: Du hast multipliziert statt geteilt. Ein Kubikmeter ist viel größer als ein Liter, also muss die Zahl in Kubikmetern kleiner werden.
hinweise:
  - '$1\,\text{L} = 1\,\text{dm}^3$ und $1\,\text{m}^3 = 1000\,\text{dm}^3$.'
loesung: |
  Ein Liter ist ein Kubikdezimeter. In einen Kubikmeter passen $10\cdot 10\cdot 10 = 1000$ Kubikdezimeter. Also ist $1\,\text{L} = 10^{-3}\,\text{m}^3$.
  ---
  $25\,\text{L} = 25\cdot 10^{-3}\,\text{m}^3 = 0{,}025\,\text{m}^3$. Wiederholen: [Kapitel 1: Vorsilben, Zehnerpotenzen und Umrechnen](/lernen/physik1/groessen-einheiten-messen/vorsilben-zehnerpotenzen-und-umrechnen).
```

```aufgabe
id: p10-e-ekin
art: check
titel: Kinetische Energie
niveau: 1
angabe: |
  Eine Kugel mit $2{,}0\,\text{kg}$ rollt mit $3{,}0\,\text{m/s}$. Wie groß ist ihre kinetische Energie?
teile:
  - typ: zahl
    loesung: "0.5*2*3^2"
    einheit: "J"
    anzeige: '9{,}0'
    fehler:
      - wert: "2*3^2"
        meldung: Der Faktor $\tfrac12$ fehlt. Die kinetische Energie ist $E_\text{kin} = \tfrac12 m v^2$.
      - wert: "0.5*2*3"
        meldung: Du hast die Geschwindigkeit nicht quadriert. In $E_\text{kin} = \tfrac12 m v^2$ steht $v$ im Quadrat.
hinweise:
  - '$E_\text{kin} = \tfrac12 m v^2$.'
loesung: |
  Die kinetische Energie ist die Energie der Bewegung: $E_\text{kin} = \tfrac12 m v^2$.
  ---
  $E_\text{kin} = \tfrac12\cdot 2{,}0\,\text{kg}\cdot(3{,}0\,\text{m/s})^2 = 9{,}0\,\text{kg}\,\text{m}^2/\text{s}^2 = 9{,}0\,\text{J}$. Wiederholen: [Kapitel 4: Energie](/lernen/physik1/arbeit-energie-impuls/energie).
```

```aufgabe
id: p10-e-nullstelle
art: check
titel: Nullstelle einer linearen Funktion
niveau: 1
angabe: |
  Gegeben ist die lineare Funktion $f(x) = 2x + 546$. An welcher Stelle $x$ ist $f(x) = 0$?
teile:
  - typ: zahl
    loesung: "-546/2"
    anzeige: '-273'
    fehler:
      - wert: "546/2"
        meldung: Das Vorzeichen stimmt nicht. Setze zur Probe ein. $2\cdot 273 + 546 = 1092$, nicht null.
      - wert: "-546*2"
        meldung: Du hast mit $2$ multipliziert statt durch $2$ geteilt. Aus $2x = -546$ folgt $x = -546/2$.
hinweise:
  - Setze $2x + 546 = 0$ und löse nach $x$ auf.
loesung: |
  Wir setzen den Funktionswert null: $2x + 546 = 0$. Wir subtrahieren $546$ auf beiden Seiten: $2x = -546$.
  ---
  Wir teilen beide Seiten durch $2$: $x = -273$. Probe: $2\cdot(-273) + 546 = 0$. Genau diese Rechnung führt dich in diesem Kapitel zum absoluten Nullpunkt. Wiederholen: Mathematik, [Lineare Funktionen](/lernen/mathe3/funktionen/lineare-funktionen).
```

```aufgabe
id: p10-e-verhaeltnis
art: check
titel: Eine Verhältnisgleichung lösen
niveau: 1
angabe: |
  Löse die Gleichung $\dfrac{x}{4} = \dfrac{15}{6}$ nach $x$ auf.
teile:
  - typ: zahl
    loesung: "4*15/6"
    anzeige: '10'
    fehler:
      - wert: "6*15/4"
        meldung: Du hast mit dem falschen Nenner multipliziert. Damit $x$ allein steht, multiplizierst du beide Seiten mit dem Nenner **unter dem** $x$, also mit $4$.
      - wert: "4*6/15"
        meldung: Du hast den Bruch auf der rechten Seite umgedreht. Multipliziere beide Seiten einfach mit $4$, dann bleibt $\tfrac{15}{6}$ stehen.
hinweise:
  - Multipliziere beide Seiten mit $4$.
loesung: |
  Wir multiplizieren beide Seiten mit $4$, damit links nur noch $x$ steht: $x = 4\cdot\dfrac{15}{6}$.
  ---
  $x = \dfrac{60}{6} = 10$. Solche Verhältnisgleichungen sind die Gasgesetze, zum Beispiel $\tfrac{p_1}{T_1} = \tfrac{p_2}{T_2}$. Wiederholen: Mathematik, [Formeln umstellen](/lernen/mathe3/gleichungen/formeln-umstellen).
```

## Temperatur und Temperaturskalen

```aufgabe
id: p10-1-check
art: check
titel: "Vorwissen: die SI-Einheit der Temperatur"
niveau: 1
angabe: |
  Die Temperatur ist eine der sieben SI-Basisgrößen. Welche Einheit hat sie im SI?
teile:
  - typ: auswahl
    optionen:
      - "Grad Celsius (°C)"
      - "Kelvin (K)"
      - "Joule (J)"
      - "Grad Fahrenheit (°F)"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Grad Celsius ist im Alltag üblich und erlaubt, aber nicht die SI-Basiseinheit. Die SI-Einheit ist das Kelvin. Warum, erfährst du in diesem Abschnitt.
      - wert: 2
        meldung: Joule ist die Einheit der Energie. Temperatur und Energie hängen zusammen, sind aber verschiedene Größen. Genau diesen Unterschied klärt dieses Kapitel.
      - wert: 3
        meldung: Fahrenheit wird in den USA verwendet, ist aber keine SI-Einheit.
hinweise:
  - Die SI-Einheiten sind Meter, Kilogramm, Sekunde, Ampere, Kelvin, Mol und Candela.
loesung: |
  Die SI-Basiseinheit der Temperatur ist das **Kelvin**.
  ---
  Grad Celsius ist eine zugelassene Einheit mit derselben Schrittweite, aber einem anderen Nullpunkt. Wiederholen: [Kapitel 1: Physikalische Größen und das SI](/lernen/physik1/groessen-einheiten-messen/physikalische-groessen-und-das-si).
```

Leg im Winter eine Hand auf ein Metallgeländer und die andere auf einen Holzzaun daneben. Das Metall
fühlt sich viel kälter an. Trotzdem zeigt ein Thermometer an beiden Stellen dieselbe Temperatur. Das
Metall leitet die Wärme nur schneller aus deiner Hand ab. Deine Hand misst also nicht die Temperatur,
sondern wie schnell sie Wärme verliert. Die Physik braucht deshalb ein Messverfahren, das nicht vom
Gefühl abhängt.

### Thermisches Gleichgewicht

Stell eine Tasse heißen Tee auf den Tisch. Nach einer Stunde hat der Tee dieselbe Temperatur wie das
Zimmer. Der Tee ist abgekühlt, die Luft um ihn herum hat sich ein klein wenig erwärmt. Dann ändert sich
nichts mehr. Diesen Endzustand nennt man **thermisches Gleichgewicht**: Zwei Körper in Kontakt haben
dieselbe Temperatur, und es fließt keine Wärme mehr zwischen ihnen.

- **Beispiel:** Ein Fieberthermometer unter der Zunge ist nach etwa einer Minute im thermischen
  Gleichgewicht mit dem Mund. Erst dann zeigt es die Körpertemperatur.
- **Kein Beispiel:** Ein Eiswürfel, der gerade in ein Glas Limonade fällt, ist **nicht** im
  Gleichgewicht mit der Limonade. Er hat eine andere Temperatur, und es fließt Wärme von der Limonade
  zum Eis.

Ein Thermometer zeigt immer nur seine **eigene** Temperatur an. Die Temperatur eines anderen Körpers
zeigt es erst, wenn es mit ihm im Gleichgewicht ist. Darum muss man beim Fiebermessen warten.

:::satz[Nullter Hauptsatz der Wärmelehre]
Sind zwei Körper A und B jeweils mit einem dritten Körper C im thermischen Gleichgewicht, so sind auch
A und B miteinander im thermischen Gleichgewicht. Die Größe, die dann bei allen dreien gleich ist,
heißt **Temperatur**.
:::

Das klingt selbstverständlich. Es ist aber genau die Grundlage jeder Temperaturmessung: Das
Thermometer ist der dritte Körper C. Zeigt es im Tee und in der Milch dieselbe Zahl, dann haben Tee und
Milch dieselbe Temperatur, auch ohne dass man sie zusammenschüttet. Der Satz heißt „nullter“, weil man
ihn erst formuliert hat, als der erste und der zweite Hauptsatz schon Namen hatten.

```aufgabe
id: p10-1-gleichgewicht-check
art: check
titel: Der nullte Hauptsatz in Aktion
niveau: 1
angabe: |
  Ein Thermometer zeigt in einem Topf Suppe $65\,^\circ\text{C}$ und danach, nachdem es eine Minute in einem zweiten Topf steckt, ebenfalls $65\,^\circ\text{C}$. Was passiert, wenn man die beiden Töpfe mit einer Metallplatte verbindet?
teile:
  - typ: auswahl
    optionen:
      - "Es fließt keine Wärme zwischen den Töpfen, weil beide dieselbe Temperatur haben."
      - "Es fließt Wärme vom größeren Topf zum kleineren."
      - "Man kann es nicht sagen, ohne die Töpfe direkt zu vergleichen."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Ob Wärme fließt, hängt nur vom Temperaturunterschied ab, nicht von der Größe. Beide Töpfe haben $65\,^\circ\text{C}$, also fließt nichts.
      - wert: 2
        meldung: |
          Genau dafür gibt es den nullten Hauptsatz. Beide Töpfe sind mit dem Thermometer im Gleichgewicht, also auch miteinander. Das Thermometer ersetzt den direkten Vergleich.
hinweise:
  - Das Thermometer war mit beiden Töpfen im Gleichgewicht. Was sagt der nullte Hauptsatz dann über die beiden Töpfe?
loesung: |
  Das Thermometer war mit beiden Töpfen im thermischen Gleichgewicht. Nach dem nullten Hauptsatz sind die Töpfe dann auch miteinander im Gleichgewicht.
  ---
  Zwischen Körpern gleicher Temperatur fließt keine Wärme, egal wie groß sie sind.
```

### Wie Thermometer funktionieren

Jedes Thermometer nutzt eine Eigenschaft eines Stoffes, die sich mit der Temperatur gleichmäßig ändert.

- **Flüssigkeitsthermometer:** Alkohol (früher Quecksilber) dehnt sich in einem dünnen Glasröhrchen aus.
  Die Länge des Fadens ist das Maß für die Temperatur.
- **Bimetallthermometer:** Zwei fest verbundene Metallstreifen dehnen sich verschieden stark aus und
  krümmen sich. Mehr dazu in [10.2 Thermische Ausdehnung](/lernen/physik1/temperatur-waerme-gase/thermische-ausdehnung).
- **Widerstandsthermometer:** Der elektrische Widerstand eines Platindrahts steigt mit der Temperatur.
- **Thermoelement:** An der Verbindungsstelle zweier verschiedener Metalle entsteht eine kleine
  Spannung, die von der Temperatur abhängt.
- **Strahlungsthermometer:** Das Infrarot-Fieberthermometer misst die Wärmestrahlung der Haut.

### Celsius, Kelvin und Fahrenheit

Anders Celsius legte 1742 zwei **Fixpunkte** fest, also zwei Temperaturen, die man jederzeit genau
herstellen kann: schmelzendes Eis und siedendes Wasser bei normalem Luftdruck. Den Abstand dazwischen teilte
er in hundert gleiche Schritte. Celsius selbst gab dem siedenden Wasser die $0$ und dem Eis die $100$. Kurz nach
seinem Tod drehte man die Skala um. Seitdem bekommt schmelzendes Eis $0\,^\circ\text{C}$ und siedendes Wasser
$100\,^\circ\text{C}$.

Der Nullpunkt der Celsius-Skala ist also willkürlich gewählt. Gibt es einen natürlichen Nullpunkt?
Ja, und man findet ihn mit einem Gas. Man sperrt Luft in ein Gefäß mit festem Volumen und misst ihren
Druck bei verschiedenen Temperaturen. Der Druck fällt beim Abkühlen auf einer geraden Linie.

```plot
x: [-300, 120]
y: [0, 1.5]
hoehe: 320
achsen: { x: "Temperatur in °C", y: "Druck in bar" }
graphen:
  - { f: "1.0*(1 + x/273.15)", von: -273.15, bis: 0, farbe: 0, gestrichelt: true }
  - { f: "1.0*(1 + x/273.15)", von: 0, bis: 100, farbe: 0, label: "Messbereich" }
punkte:
  - { x: 0, y: 1.0, label: "1,00 bar bei 0 °C" }
  - { x: 100, y: 1.366, label: "1,37 bar bei 100 °C" }
  - { x: -273.15, y: 0, label: "−273,15 °C" }
beschriftung: "Druck einer eingesperrten Luftmenge bei festem Volumen. Gemessen wird nur zwischen 0 °C und 100 °C (durchgezogen). Verlängert man die Gerade nach links (gestrichelt), erreicht der Druck bei −273,15 °C den Wert null."
```

Verlängert man die Gerade nach links, erreicht sie bei $-273{,}15\,^\circ\text{C}$ den Druck null.
Kälter kann ein Gas nicht werden, denn ein negativer Druck ergibt für ein Gas keinen Sinn. Diese
Temperatur heißt **absoluter Nullpunkt**. Auf Teilchenebene heißt das: Die ungeordnete Bewegung der
Teilchen kommt (in der klassischen Physik) zum Stillstand. Mehr dazu in
[10.11 Kinetische Gastheorie](/lernen/physik1/temperatur-waerme-gase/kinetische-gastheorie).

Lord Kelvin schlug 1848 eine Skala vor, die genau dort beginnt. Die **Kelvin-Skala** hat dieselbe
Schrittweite wie die Celsius-Skala. Sie ist nur um $273{,}15$ verschoben. In den USA verwendet man
außerdem die **Fahrenheit-Skala**: Wasser gefriert bei $32\,^\circ\text{F}$ und siedet bei
$212\,^\circ\text{F}$. Zwischen den Fixpunkten liegen also $180$ Fahrenheit-Schritte statt $100$.
Ein Celsius-Schritt ist deshalb $\tfrac{180}{100} = \tfrac95$ Fahrenheit-Schritte.

:::formel[Umrechnung der Temperaturskalen]
$$T = \vartheta + 273{,}15 \qquad\qquad \vartheta_F = \tfrac{9}{5}\,\vartheta + 32$$
Dabei ist $T$ die absolute Temperatur in Kelvin (K), $\vartheta$ (griechisch „theta“) die
Celsius-Temperatur in °C und $\vartheta_F$ die Fahrenheit-Temperatur in °F.

Temperatur**differenzen** sind in Kelvin und in Grad Celsius gleich groß: Eine Erwärmung um
$20\,\text{K}$ ist dieselbe wie eine Erwärmung um $20\,^\circ\text{C}$.
:::

Man schreibt die absolute Temperatur mit großem $T$ und ohne Gradzeichen: $T = 293\,\text{K}$, gesprochen
„293 Kelvin“. Für Temperaturdifferenzen schreibt man $\Delta T$ (gesprochen „Delta T“). Das Delta bedeutet
immer „Endwert minus Anfangswert“.

:::beispiel[Ein Sommertag in drei Skalen]
Das Thermometer zeigt $25\,^\circ\text{C}$. Wie viel ist das in Kelvin und in Fahrenheit?

**Kelvin:** Wir addieren $273{,}15$, weil der Kelvin-Nullpunkt um so viel tiefer liegt:
$T = 25 + 273{,}15 = 298{,}15\,\text{K}$.

**Fahrenheit:** Wir multiplizieren mit $\tfrac95$, weil ein Celsius-Schritt $\tfrac95$ Fahrenheit-Schritte
groß ist. Dann addieren wir $32$, weil der Fahrenheit-Gefrierpunkt bei $32$ liegt:
$\vartheta_F = \tfrac95\cdot 25 + 32 = 45 + 32 = 77\,^\circ\text{F}$.

**Probe mit Gefühl:** $77\,^\circ\text{F}$ klingt für Amerikaner nach einem warmen Tag. Das passt.
:::

:::beispiel[Ein amerikanisches Backrezept]
Ein Rezept verlangt $350\,^\circ\text{F}$. Was stellst du am Backofen ein?

**Schritt 1, umkehren:** Wir lösen $\vartheta_F = \tfrac95\vartheta + 32$ nach $\vartheta$ auf. Zuerst
subtrahieren wir $32$, dann multiplizieren wir mit $\tfrac59$: $\vartheta = \tfrac59\,(\vartheta_F - 32)$.

**Schritt 2, einsetzen:** $\vartheta = \tfrac59\cdot(350 - 32) = \tfrac59\cdot 318 = 176{,}7\,^\circ\text{C}$.

**Antwort:** Etwa $175\,^\circ\text{C}$, eine übliche Backtemperatur.
:::

:::achtung[Fehler: In Grad Celsius „doppelt so warm“ rechnen]
Ein Schüler sagt: „Von $10\,^\circ\text{C}$ auf $20\,^\circ\text{C}$ verdoppelt sich die Temperatur. Also
verdoppelt sich auch der Druck in einer geschlossenen Flasche.“

Das ist falsch. Verdoppeln kann man nur eine Größe mit echtem Nullpunkt. Die absolute Temperatur steigt
von $283{,}15\,\text{K}$ auf $293{,}15\,\text{K}$. Das ist der Faktor $293{,}15 / 283{,}15 = 1{,}035$, also
nur $3{,}5\,\%$ mehr. Auch der Druck steigt nur um $3{,}5\,\%$.
:::

:::achtung[Fehler: Bei Fahrenheit die 32 vergessen]
Eine Schülerin rechnet $98{,}6\,^\circ\text{F}$ in Celsius um: „$\tfrac59\cdot 98{,}6 = 54{,}8\,^\circ\text{C}$.“
Das wäre tödliches Fieber.

Richtig ist: zuerst die $32$ abziehen, dann mit $\tfrac59$ multiplizieren.
$\vartheta = \tfrac59\cdot(98{,}6 - 32) = \tfrac59\cdot 66{,}6 = 37{,}0\,^\circ\text{C}$. Das ist normale
Körpertemperatur. Ein schneller Plausibilitätscheck hätte den Fehler gezeigt.
:::

:::merke
**Umrechnen in drei Schritten:** (1) Schreib die Formel hin. (2) Bei Fahrenheit immer zuerst die $32$
berücksichtigen. (3) Prüfe das Ergebnis mit einem bekannten Wert: Körpertemperatur ist $37\,^\circ\text{C}$,
also $310\,\text{K}$ und $98{,}6\,^\circ\text{F}$. In Gleichungen, in denen die Temperatur **allein** steht
(als Faktor oder im Nenner), rechnest du immer in Kelvin. Nur bei Differenzen darfst du °C verwenden.
:::

```reflexion
frage: Im Winter fühlt sich ein Metallgeländer viel kälter an als ein Holzzaun daneben, obwohl beide dieselbe Temperatur haben. Was misst deine Hand eigentlich? Erkläre in zwei bis drei Sätzen.
antwort: |
  Die Hand misst nicht die Temperatur des Gegenstands, sondern wie schnell sie selbst Wärme verliert. Metall leitet
  Wärme sehr gut und transportiert sie schnell von der Hand weg. Holz leitet schlecht, deshalb erwärmt sich die
  Holzoberfläche unter der Hand rasch und die Hand kühlt kaum ab. Ein Thermometer würde an beiden Stellen dieselbe
  Temperatur anzeigen, sobald es im thermischen Gleichgewicht ist.
```

### Aufgaben zu Temperatur und Temperaturskalen

```aufgabe
id: p10-celsius-kelvin
titel: Celsius und Kelvin
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Rechne in Kelvin um: die Körpertemperatur $37\,^\circ\text{C}$ und die Siedetemperatur von flüssigem Stickstoff $-196\,^\circ\text{C}$. Gib beide Ergebnisse auf zwei Nachkommastellen an.
teile:
  - typ: zahl
    label: 37 °C in K
    loesung: "37+273.15"
    einheit: "K"
    anzeige: '310{,}15'
    fehler:
      - wert: "37-273.15"
        meldung: Du hast $273{,}15$ abgezogen. Der Kelvin-Nullpunkt liegt **tiefer** als der Celsius-Nullpunkt, also ist die Zahl in Kelvin immer **größer**. Man addiert.
  - typ: zahl
    label: −196 °C in K
    loesung: "-196+273.15"
    einheit: "K"
    anzeige: '77{,}15'
    fehler:
      - wert: "196+273.15"
        meldung: Du hast das Minuszeichen von $-196\,^\circ\text{C}$ verloren. Rechne $-196 + 273{,}15$.
      - wert: "-196-273.15"
        meldung: Ein negativer Wert in Kelvin ist unmöglich, denn die Skala beginnt beim absoluten Nullpunkt. Man addiert $273{,}15$.
hinweise:
  - '$T = \vartheta + 273{,}15$. In Kelvin gibt es keine negativen Temperaturen.'
loesung: |
  **Ansatz:** Die Kelvin-Skala hat dieselbe Schrittweite wie Celsius, beginnt aber $273{,}15$ Schritte tiefer. Also gilt $T = \vartheta + 273{,}15$.
  ---
  **Körpertemperatur:** $T = 37 + 273{,}15 = 310{,}15\,\text{K}$.
  ---
  **Stickstoff:** $T = -196 + 273{,}15 = 77{,}15\,\text{K}$. Probe: Beide Werte sind positiv, wie es in Kelvin sein muss. Flüssiger Stickstoff ist nur etwa $77$ Schritte vom absoluten Nullpunkt entfernt.
```

```aufgabe
id: p10-fahrenheit
titel: Fieber in Fahrenheit
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Ein amerikanisches Thermometer zeigt $102{,}2\,^\circ\text{F}$. Wie viel ist das in Grad Celsius? Hat die Person Fieber?
teile:
  - typ: zahl
    loesung: "(102.2-32)*5/9"
    einheit: "°C"
    anzeige: '39'
    fehler:
      - wert: "5/9*102.2"
        meldung: Du hast die $32$ vergessen. Der Fahrenheit-Gefrierpunkt liegt bei $32\,^\circ\text{F}$, deshalb musst du zuerst $32$ abziehen und erst dann mit $\tfrac59$ multiplizieren.
      - wert: "(102.2-32)*9/5"
        meldung: Du hast mit $\tfrac95$ statt mit $\tfrac59$ multipliziert. Ein Fahrenheit-Schritt ist **kleiner** als ein Celsius-Schritt, also muss die Celsius-Zahl kleiner werden.
hinweise:
  - 'Stelle $\vartheta_F = \tfrac95\vartheta + 32$ nach $\vartheta$ um.'
loesung: |
  **Ansatz:** Wir lösen $\vartheta_F = \tfrac95\vartheta + 32$ nach $\vartheta$ auf. Wir ziehen $32$ ab und multiplizieren mit $\tfrac59$: $\vartheta = \tfrac59(\vartheta_F - 32)$.
  ---
  **Rechnung:** $\vartheta = \tfrac59\cdot(102{,}2 - 32) = \tfrac59\cdot 70{,}2 = 39{,}0\,^\circ\text{C}$.
  ---
  **Antwort:** $39\,^\circ\text{C}$ ist deutliches Fieber. Probe: Normale Körpertemperatur ist $98{,}6\,^\circ\text{F}$. Der Wert liegt darüber, das passt.
```

```aufgabe
id: p10-temperaturdifferenz
titel: Differenzen in K und °C
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Wasser wird von $15\,^\circ\text{C}$ auf $75\,^\circ\text{C}$ erwärmt. Welche Aussagen stimmen? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Die Temperaturerhöhung beträgt 60 K."
      - "Die Temperaturerhöhung beträgt 333 K."
      - "Die Endtemperatur beträgt 348,15 K."
      - "Die absolute Temperatur hat sich verfünffacht."
    richtig: [0, 2]
    fehler:
      - wert: [0, 2, 3]
        meldung: '„Verfünffacht“ stimmt nur in °C ($75 : 15 = 5$). Die absolute Temperatur steigt von $288{,}15\,\text{K}$ auf $348{,}15\,\text{K}$, das ist nur der Faktor $1{,}21$.'
      - wert: [1, 2]
        meldung: 'Bei einer Differenz fällt die Verschiebung um $273{,}15$ weg: $(75 + 273{,}15) - (15 + 273{,}15) = 60$. Eine Differenz ist in K und °C gleich groß.'
      - wert: [0]
        meldung: Die Endtemperatur in Kelvin stimmt ebenfalls. Rechne $75 + 273{,}15$.
hinweise:
  - Schreib Anfangs- und Endtemperatur in Kelvin hin und bilde die Differenz.
loesung: |
  **Differenz:** $\Delta T = 348{,}15\,\text{K} - 288{,}15\,\text{K} = 60\,\text{K}$. Die Verschiebung um $273{,}15$ hebt sich weg, deshalb ist die Differenz in K und °C gleich.
  ---
  **Endtemperatur:** $75 + 273{,}15 = 348{,}15\,\text{K}$. Der Faktor zwischen den absoluten Temperaturen ist $348{,}15 / 288{,}15 = 1{,}21$, keine Verfünffachung.
```

```aufgabe
id: p10-metall-holz
titel: Metall oder Holz?
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  Eine Metallbank und eine Holzbank stehen seit Stunden nebeneinander im Schatten. Die Luft hat $5\,^\circ\text{C}$. Du legst eine Hand auf jede Bank. Das Metall fühlt sich viel kälter an. Welche Aussage ist physikalisch richtig?
teile:
  - typ: auswahl
    optionen:
      - "Das Metall hat eine tiefere Temperatur als das Holz."
      - "Beide haben $5\\,^\\circ\\text{C}$. Das Metall leitet die Wärme nur schneller aus der Hand ab."
      - "Das Metall enthält mehr Kälte, die in die Hand hinüberfließt."
      - "Das Holz erzeugt selbst ein wenig Wärme."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Beide Bänke sind seit Stunden im thermischen Gleichgewicht mit der Luft. Also haben beide $5\,^\circ\text{C}$. Das Gefühl misst nicht die Temperatur, sondern wie schnell die Hand Wärme verliert.
      - wert: 2
        meldung: '„Kälte“ ist kein Stoff, der fließen kann. Es fließt nur Wärme, und zwar von der warmen Hand zum kalten Metall. Das Metall leitet sie schneller ab als Holz.'
      - wert: 3
        meldung: Holz erzeugt keine Wärme. Es leitet sie nur schlecht. Deshalb erwärmt sich die Holzoberfläche unter deiner Hand schnell, und die Hand kühlt kaum ab.
hinweise:
  - Was bedeutet „seit Stunden nebeneinander“ für die Temperaturen der beiden Bänke?
  - Deine Hand ist wärmer als beide Bänke. In welche Richtung fließt Wärme, und wovon hängt ab, wie schnell?
loesung: |
  **Ansatz:** Nach Stunden sind beide Bänke im thermischen Gleichgewicht mit der Luft. Nach dem nullten Hauptsatz haben dann beide dieselbe Temperatur, $5\,^\circ\text{C}$.
  ---
  **Was die Hand spürt:** Wärme fließt von der warmen Hand ($\approx 33\,^\circ\text{C}$) zur kalten Bank. Metall leitet die Wärme schnell ab, Holz langsam. Die Hand spürt den schnellen Wärmeverlust als „kalt“.
  ---
  **Antwort:** Richtig ist die zweite Aussage. Ein Thermometer würde an beiden Bänken $5\,^\circ\text{C}$ zeigen.
```

```aufgabe
id: p10-minus-vierzig
titel: Wo Celsius und Fahrenheit übereinstimmen
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Bei welcher Temperatur zeigen ein Celsius-Thermometer und ein Fahrenheit-Thermometer **dieselbe Zahl** an? Gib die Temperatur in °C an.
teile:
  - typ: zahl
    loesung: "-32/(9/5-1)"
    einheit: "°C"
    anzeige: '-40'
    fehler:
      - wert: "32"
        meldung: 'Bei $32\,^\circ\text{F}$ ist es $0\,^\circ\text{C}$, die Zahlen sind also verschieden. Setze $\vartheta_F = \vartheta$ in die Umrechnungsformel ein und löse die Gleichung.'
      - wert: "40"
        meldung: 'Fast: Das Vorzeichen stimmt nicht. Probe: $\tfrac95\cdot 40 + 32 = 104$, nicht $40$.'
hinweise:
  - 'Gesucht ist die Temperatur, bei der $\vartheta_F = \vartheta$ gilt. Setze das in $\vartheta_F = \tfrac95\vartheta + 32$ ein.'
  - 'Du erhältst $\vartheta = \tfrac95\vartheta + 32$. Bring alle $\vartheta$ auf eine Seite.'
loesung: |
  **Ansatz:** Die Anzeigen sind gleich, wenn $\vartheta_F = \vartheta$ ist. Wir setzen das in die Umrechnungsformel ein: $\vartheta = \tfrac95\vartheta + 32$.
  ---
  **Umformen:** Wir subtrahieren $\tfrac95\vartheta$ auf beiden Seiten: $\vartheta - \tfrac95\vartheta = 32$, also $-\tfrac45\vartheta = 32$. Wir multiplizieren mit $-\tfrac54$: $\vartheta = -40$.
  ---
  **Probe:** $\tfrac95\cdot(-40) + 32 = -72 + 32 = -40$. Bei $-40\,^\circ\text{C}$ zeigt auch das Fahrenheit-Thermometer $-40\,^\circ\text{F}$.
```

```aufgabe
id: p10-thermometer-text
titel: Warum man beim Fiebermessen wartet
niveau: 2
lernziel: 0
kompetenz: begruenden
angabe: |
  a) Warum zeigt ein Fieberthermometer die Körpertemperatur erst nach einer Weile richtig an?

  b) Ein großes Thermometer aus dem Zimmer ($20\,^\circ\text{C}$) wird in einen Fingerhut voll heißem Wasser ($60\,^\circ\text{C}$) gesteckt. Warum zeigt es am Ende **weniger** als $60\,^\circ\text{C}$ an?
teile:
  - typ: text
    muster: |
      a) Ein Thermometer zeigt immer seine eigene Temperatur. Erst wenn es im thermischen Gleichgewicht mit dem Körper ist,
      also keine Wärme mehr fließt, ist seine Temperatur gleich der Körpertemperatur. Bis dahin muss Wärme vom Körper ins
      Thermometer fließen, und das dauert.

      b) Das kalte Thermometer nimmt beim Erwärmen Wärme aus dem wenigen Wasser auf. Dabei kühlt das Wasser merklich ab.
      Im Gleichgewicht haben Wasser und Thermometer eine gemeinsame Temperatur, die zwischen 20 °C und 60 °C liegt. Ein
      gutes Thermometer muss deshalb klein sein im Vergleich zum Körper, dessen Temperatur es messen soll.
hinweise:
  - Welche Temperatur zeigt ein Thermometer immer an, seine eigene oder die seiner Umgebung?
  - 'Für b): Woher kommt die Wärme, die das Thermometer aufwärmt, und was passiert dabei mit dem Wasser?'
loesung: |
  **Grundgedanke:** Ein Thermometer zeigt seine eigene Temperatur. Die Temperatur eines anderen Körpers zeigt es erst im thermischen Gleichgewicht mit ihm.
  ---
  **a)** Bis zum Gleichgewicht muss Wärme vom Körper ins Thermometer fließen. Das braucht Zeit, deshalb wartet man etwa eine Minute.
  ---
  **b)** Das Thermometer entzieht der kleinen Wassermenge beim Aufwärmen Wärme. Das Wasser kühlt dabei ab, und beide treffen sich bei einer Mischtemperatur unter $60\,^\circ\text{C}$. Merke: Das Thermometer muss klein gegenüber dem Messobjekt sein.
```

```aufgabe
id: p10-eigene-skala
titel: Eine selbst erfundene Temperaturskala
niveau: 3
lernziel: 0
kompetenz: modellieren
angabe: |
  Eine Schülerin erfindet die „X-Skala“. Schmelzendes Eis bekommt $-10\,^\circ\text{X}$, siedendes Wasser bei Normaldruck bekommt $140\,^\circ\text{X}$. Dazwischen ist die Skala gleichmäßig unterteilt, so wie die Celsius-Skala.

  a) Welchen Wert zeigt ein X-Thermometer bei Körpertemperatur ($37\,^\circ\text{C}$)?

  b) Bei welchem X-Wert liegt der absolute Nullpunkt ($-273{,}15\,^\circ\text{C}$)? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    label: a) 37 °C in °X
    loesung: "-10 + 150/100*37"
    einheit: "°X"
    anzeige: '45{,}5'
    fehler:
      - wert: "150/100*37"
        meldung: Du hast vergessen, dass die X-Skala bei $-10$ beginnt. Bei $0\,^\circ\text{C}$ zeigt sie schon $-10\,^\circ\text{X}$. Also musst du $10$ abziehen.
      - wert: "-10+37"
        meldung: Ein X-Schritt ist nicht so groß wie ein Celsius-Schritt. Zwischen den Fixpunkten liegen $150$ X-Schritte, aber nur $100$ Celsius-Schritte.
  - typ: zahl
    label: b) absoluter Nullpunkt in °X
    loesung: "-10 + 1.5*(-273.15)"
    einheit: "°X"
    anzeige: '-419{,}7'
    toleranz: 0.1
    fehler:
      - wert: "-10 - 273.15"
        meldung: Du hast die Celsius-Schritte direkt übernommen. Jeder Celsius-Schritt entspricht $1{,}5$ X-Schritten, also musst du $-273{,}15$ mit $1{,}5$ multiplizieren.
hinweise:
  - Wie viele X-Schritte liegen zwischen Eis und siedendem Wasser? Wie viele Celsius-Schritte?
  - 'Stelle eine lineare Umrechnung auf: $x = a + b\cdot\vartheta$. Der Wert $a$ ist die Anzeige bei $0\,^\circ\text{C}$.'
  - Ein Celsius-Schritt entspricht $150/100 = 1{,}5$ X-Schritten.
gefuehrt:
  - text: Wie viele X-Schritte entsprechen einem Celsius-Schritt?
    teil: { typ: zahl, loesung: "150/100" }
    erklaerung: Zwischen den Fixpunkten liegen $140 - (-10) = 150$ X-Schritte und $100$ Celsius-Schritte. Ein Celsius-Schritt sind also $1{,}5$ X-Schritte.
  - text: Überlege, wie die Umrechnungsformel aussieht. Was zeigt die X-Skala bei $0\,^\circ\text{C}$?
    erklaerung: Bei $0\,^\circ\text{C}$ zeigt sie $-10\,^\circ\text{X}$. Pro Celsius-Schritt kommen $1{,}5$ X-Schritte dazu. Also gilt $x = -10 + 1{,}5\cdot\vartheta$. Das ist eine lineare Funktion mit Achsenabschnitt $-10$ und Steigung $1{,}5$.
  - text: Berechne die Anzeige bei $37\,^\circ\text{C}$.
    teil: { typ: zahl, loesung: "-10+1.5*37" }
    erklaerung: $x = -10 + 1{,}5\cdot 37 = -10 + 55{,}5 = 45{,}5\,^\circ\text{X}$.
  - text: Berechne die Anzeige beim absoluten Nullpunkt, $\vartheta = -273{,}15\,^\circ\text{C}$.
    teil: { typ: zahl, loesung: "-10+1.5*(-273.15)", toleranz: 0.1 }
    erklaerung: $x = -10 + 1{,}5\cdot(-273{,}15) = -10 - 409{,}7 = -419{,}7\,^\circ\text{X}$.
loesung: |
  **Ansatz:** Beide Skalen sind gleichmäßig unterteilt. Also hängen sie linear zusammen: $x = a + b\cdot\vartheta$. Siehe Mathematik, [Lineare Funktionen](/lernen/mathe3/funktionen/lineare-funktionen).
  ---
  **Steigung und Achsenabschnitt:** Zwischen den Fixpunkten liegen $150$ X-Schritte und $100$ Celsius-Schritte, also $b = 1{,}5$. Bei $0\,^\circ\text{C}$ zeigt die Skala $-10$, also $a = -10$. Damit gilt $x = -10 + 1{,}5\,\vartheta$.
  ---
  **a)** $x = -10 + 1{,}5\cdot 37 = 45{,}5\,^\circ\text{X}$.
  ---
  **b)** $x = -10 + 1{,}5\cdot(-273{,}15) = -419{,}7\,^\circ\text{X}$. Probe mit dem Siedepunkt: $-10 + 1{,}5\cdot 100 = 140$, das stimmt mit der Vorgabe überein.
```

## Thermische Ausdehnung

```aufgabe
id: p10-2-check
art: check
titel: "Vorwissen: Potenzen und kleine Änderungen"
niveau: 1
angabe: |
  Jede Kante eines Würfels wird um $1\,\%$ länger, also mit dem Faktor $1{,}01$ multipliziert. Um wie viel Prozent wächst sein Volumen ungefähr? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "(1.01^3-1)*100"
    einheit: "%"
    anzeige: '3{,}0'
    toleranz: 0.05
    fehler:
      - wert: "1"
        meldung: |
          Das Volumen hängt von **drei** Kanten ab, $V = a^3$. Wenn jede Kante um $1\,\%$ wächst, wächst das Volumen mit dem Faktor $1{,}01^3$.
      - wert: "2"
        meldung: |
          Zwei Prozent wären es bei einer Fläche, $A = a^2$. Ein Volumen hat aber drei Kanten, $V = a^3$.
hinweise:
  - 'Das neue Volumen ist $(1{,}01\,a)^3 = 1{,}01^3\cdot a^3$.'
loesung: |
  Das Volumen ist $V = a^3$. Mit der längeren Kante gilt $V' = (1{,}01\,a)^3 = 1{,}01^3\cdot V = 1{,}0303\cdot V$.
  ---
  Das Volumen wächst also um etwa $3{,}0\,\%$, dreimal so viel wie jede Kante. Wiederholen: Mathematik, [Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln).
```

Fast alle Stoffe dehnen sich beim Erwärmen aus. Im Sommer hängen Stromleitungen tiefer durch, und
Bahnschienen werden länger. Damit Brücken dabei nicht zerreißen, haben sie Dehnungsfugen.

**Warum dehnen sich Stoffe aus?** In einem Festkörper schwingen die Atome um feste Plätze. Je höher die
Temperatur, desto heftiger schwingen sie. Die Kräfte zwischen den Atomen sind dabei nicht symmetrisch.
Zusammendrücken ist schwerer als Auseinanderziehen. Ein heftig schwingendes Atom weicht deshalb weiter
nach außen aus als nach innen. Im Mittel wächst der Abstand zwischen den Atomen, und der ganze Körper
wird größer.

### Längenausdehnung

Bei einem langen, dünnen Körper (Stab, Schiene, Draht) interessiert vor allem die Länge. Messungen
zeigen: Die Verlängerung ist proportional zur Ausgangslänge und zur Temperaturänderung. Ein doppelt so
langer Stab wird doppelt so viel länger, denn jedes Stück dehnt sich gleich. Eine doppelt so große
Erwärmung bewirkt die doppelte Verlängerung.

:::formel[Längenausdehnung]
$$\Delta l = \alpha\cdot l_0\cdot\Delta T \qquad\qquad l = l_0\,(1 + \alpha\,\Delta T)$$
Dabei ist $l_0$ die Ausgangslänge, $\Delta T$ die Temperaturänderung in K (oder °C), $\Delta l$ die
Längenänderung und $l$ die neue Länge. Der **Längenausdehnungskoeffizient** $\alpha$ (griechisch „alpha“)
ist eine Stoffkonstante. Er sagt, um welchen Bruchteil seiner Länge sich ein Stab pro Kelvin verlängert.
Seine Einheit ist $1/\text{K} = \text{K}^{-1}$.
:::

Typische Werte von $\alpha$, jeweils in der Einheit $10^{-6}\,\text{K}^{-1}$:

- Quarzglas $0{,}5$, Invar (eine Eisen-Nickel-Legierung) $1{,}2$, Fensterglas $8$.
- Beton und Stahl $12$, Kupfer $17$, Messing $19$, Aluminium $23$.

Lies die Tabelle so: Stahl hat $\alpha = 12\cdot 10^{-6}\,\text{K}^{-1}$. Ein Meter Stahl wird pro Kelvin
um $12\cdot 10^{-6}\,\text{m} = 12\,\mu\text{m}$ länger, also um zwölf Tausendstel Millimeter. Dass Beton
und Stahl fast denselben Koeffizienten haben, ist ein Glücksfall. Nur deshalb hält Stahlbeton bei Hitze
und Kälte zusammen.

:::beispiel[Wie viel wächst der Eiffelturm im Sommer?]
Der Eiffelturm ist aus Schmiedeeisen, das sich etwa so stark ausdehnt wie Stahl ($\alpha = 12\cdot 10^{-6}\,\text{K}^{-1}$).
Er ist ohne Antennen $324\,\text{m}$ hoch. Zwischen
einem kalten Wintertag ($-5\,^\circ\text{C}$) und einem heißen Sommertag ($25\,^\circ\text{C}$) liegen
$\Delta T = 30\,\text{K}$.

**Schritt 1, Modell:** Der Turm ist ein langer Körper, also verwenden wir die Längenausdehnung.

**Schritt 2, einsetzen:**
$\Delta l = 12\cdot 10^{-6}\,\text{K}^{-1}\cdot 324\,\text{m}\cdot 30\,\text{K} = 0{,}117\,\text{m}$.
Die Einheit Kelvin kürzt sich mit $\text{K}^{-1}$, es bleiben Meter.

**Antwort:** Der Turm ist im Sommer etwa $12\,\text{cm}$ höher als im Winter. Bezogen auf seine Höhe ist
das wenig, nämlich $0{,}036\,\%$.
:::

:::achtung[Fehler: Millimeter und Meter vermischt]
Eine Kupferleitung ($\alpha = 17\cdot 10^{-6}\,\text{K}^{-1}$) ist $20\,\text{m}$ lang und erwärmt sich um
$40\,\text{K}$. Ein Schüler rechnet $17\cdot 10^{-6}\cdot 20\cdot 40 = 0{,}0136$ und schreibt „$0{,}0136\,\text{mm}$“.

Die Länge war in Metern eingesetzt, also ist auch das Ergebnis in Metern:
$\Delta l = 0{,}0136\,\text{m} = 13{,}6\,\text{mm}$. Schreib die Einheit bei jeder Größe mit, dann
passiert das nicht.
:::

### Volumenausdehnung

Auch das Volumen wächst beim Erwärmen. Hier gilt dieselbe Form wie bei der Länge:

:::formel[Volumenausdehnung]
$$\Delta V = \gamma\cdot V_0\cdot\Delta T$$
Dabei ist $V_0$ das Ausgangsvolumen, $\Delta V$ die Volumenänderung und $\gamma$ (griechisch „gamma“)
der **Volumenausdehnungskoeffizient** in $\text{K}^{-1}$.
:::

Für feste Körper muss man $\gamma$ nicht extra messen. Ein Würfel dehnt sich in allen drei Richtungen
gleich aus. Jede Kante wird mit dem Faktor $(1 + \alpha\,\Delta T)$ multipliziert, das Volumen also mit
$(1 + \alpha\,\Delta T)^3$. Multipliziert man das aus, erhält man
$1 + 3\alpha\Delta T + 3(\alpha\Delta T)^2 + (\alpha\Delta T)^3$. Weil $\alpha\Delta T$ winzig ist (etwa
$0{,}001$), sind die Quadrat- und Kubikterme noch viel winziger. Wir dürfen sie weglassen. Es bleibt
$1 + 3\alpha\,\Delta T$, also gilt für Festkörper $\gamma \approx 3\alpha$. Diese Art der Näherung heißt
**Linearisierung**, siehe Mathematik,
[Die Tangente als Näherung](/lernen/mathe3/differentialrechnung/die-tangente-als-naeherung-linearisierung-und-fehlerfortpflanzung).

Flüssigkeiten haben keine feste Form, also nur ein $\gamma$. Es ist viel größer als bei Festkörpern:
Wasser hat bei $20\,^\circ\text{C}$ etwa $0{,}21\cdot 10^{-3}\,\text{K}^{-1}$, zwischen $15\,^\circ\text{C}$
und $70\,^\circ\text{C}$ im Mittel etwa $0{,}40\cdot 10^{-3}\,\text{K}^{-1}$. Benzin und Alkohol haben etwa
$1{,}0\cdot 10^{-3}\,\text{K}^{-1}$. Gase dehnen sich noch viel stärker aus. Bei konstantem Druck ist $\gamma$
für alle (idealen) Gase gleich, nämlich $\tfrac{1}{273{,}15}\,\text{K}^{-1}$ bezogen auf das Volumen bei
$0\,^\circ\text{C}$. Mehr dazu in
[10.9 Die Gasgesetze](/lernen/physik1/temperatur-waerme-gase/die-gasgesetze).

```aufgabe
id: p10-2-messbecher-check
art: check
titel: Warum der Wasserspiegel steigt
niveau: 1
angabe: |
  Ein Messbecher aus Glas ist bei $20\,^\circ\text{C}$ genau bis zur 1-Liter-Marke mit Wasser gefüllt. Man erwärmt Becher und Wasser auf $60\,^\circ\text{C}$. Was zeigt die Marke danach an?
teile:
  - typ: auswahl
    optionen:
      - "Das Wasser steht über der Marke, weil sich Wasser viel stärker ausdehnt als Glas."
      - "Das Wasser steht genau an der Marke, weil sich Becher und Wasser gleich stark ausdehnen."
      - "Das Wasser steht unter der Marke, weil der Becher größer wird."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Flüssigkeiten dehnen sich viel stärker aus als Festkörper. Wasser hat hier im Mittel $\gamma \approx 0{,}4\cdot 10^{-3}\,\text{K}^{-1}$, Glas nur $\gamma \approx 3\cdot 8\cdot 10^{-6} = 0{,}024\cdot 10^{-3}\,\text{K}^{-1}$.
      - wert: 2
        meldung: |
          Der Becher wird tatsächlich größer, aber nur sehr wenig. Das Wasser wächst mehr als zehnmal so stark.
hinweise:
  - Vergleiche den Volumenausdehnungskoeffizienten von Wasser mit dem von Glas.
loesung: |
  Beide dehnen sich aus. Wasser hat aber einen mehr als zehnmal so großen Volumenausdehnungskoeffizienten wie Glas.
  ---
  Das Wasser steht deshalb über der Marke. Messgefäße sind nur bei der aufgedruckten Temperatur genau, meist $20\,^\circ\text{C}$.
```

Die Masse ändert sich beim Ausdehnen nicht. Weil sich das Volumen vergrößert, sinkt die **Dichte**
$\rho = m/V$. Warme Luft und warmes Wasser sind deshalb leichter als kalte und steigen auf. Das ist der
Motor der Konvektion, siehe [10.8 Konvektion und Wärmestrahlung](/lernen/physik1/temperatur-waerme-gase/konvektion-und-waermestrahlung).

:::beispiel[Warum eine Heizung ein Ausdehnungsgefäß braucht]
Der geschlossene Kreislauf einer Zentralheizung enthält $150\,\text{L}$ Wasser. Beim Einschalten wird es
von $15\,^\circ\text{C}$ auf $70\,^\circ\text{C}$ erwärmt. Im Mittel gilt hier $\gamma = 0{,}40\cdot 10^{-3}\,\text{K}^{-1}$.

**Schritt 1, Temperaturänderung:** $\Delta T = 70\,^\circ\text{C} - 15\,^\circ\text{C} = 55\,\text{K}$.

**Schritt 2, Volumenänderung:**
$\Delta V = 0{,}40\cdot 10^{-3}\,\text{K}^{-1}\cdot 150\,\text{L}\cdot 55\,\text{K} = 3{,}3\,\text{L}$.

**Antwort:** Das Wasser braucht $3{,}3\,\text{L}$ mehr Platz. Weil Wasser sich kaum zusammendrücken lässt,
würde der Druck im starren Rohrsystem enorm steigen. Deshalb hat jede Heizung ein **Ausdehnungsgefäß**,
in dem ein Gaspolster nachgibt.
:::

:::achtung[Fehler: Für das Volumen den Längenkoeffizienten nehmen]
Ein Aluminiumwürfel ($\alpha = 23\cdot 10^{-6}\,\text{K}^{-1}$) hat $V_0 = 1000\,\text{cm}^3$ und wird um
$100\,\text{K}$ erwärmt. Eine Schülerin rechnet
$\Delta V = 23\cdot 10^{-6}\cdot 1000\,\text{cm}^3\cdot 100 = 2{,}3\,\text{cm}^3$.

Das ist um den Faktor $3$ zu klein. Für das Volumen braucht man $\gamma \approx 3\alpha = 69\cdot 10^{-6}\,\text{K}^{-1}$.
Richtig ist $\Delta V = 69\cdot 10^{-6}\cdot 1000\,\text{cm}^3\cdot 100 = 6{,}9\,\text{cm}^3$.
:::

### Das Loch im Ring

Ein Stahlring wird erwärmt. Wird das Loch in der Mitte größer oder kleiner? Viele denken: Das Material
dehnt sich nach allen Seiten aus, also auch nach innen, und das Loch wird kleiner. Das stimmt nicht.

Ein **Gedankenexperiment** klärt es. Stell dir vor, das Loch wäre noch mit der ausgeschnittenen
Stahlscheibe gefüllt. Dann hättest du eine volle Stahlscheibe, und beim Erwärmen wird jedes Stück davon
größer, auch die innere Scheibe. Der Ring um sie herum muss also mitwachsen. Nimmst du die innere Scheibe
heraus, ändert das nichts am Ring. **Das Loch wächst genauso, als wäre es aus Stahl.**

:::beispiel[Ein Zahnkranz wird aufgeschrumpft]
Ein Stahl-Zahnkranz soll stramm auf einer Welle sitzen. Sein Innendurchmesser ist bei
$20\,^\circ\text{C}$ genau $50{,}00\,\text{mm}$. Man erwärmt ihn um $200\,\text{K}$.

**Rechnung:** Der Innendurchmesser ist eine Länge und wächst wie Stahl:
$\Delta d = 12\cdot 10^{-6}\,\text{K}^{-1}\cdot 50{,}00\,\text{mm}\cdot 200\,\text{K} = 0{,}12\,\text{mm}$.

**Anwendung:** Ist die Welle $50{,}08\,\text{mm}$ dick, passt der heiße Kranz ($50{,}12\,\text{mm}$) darüber.
Beim Abkühlen schrumpft er und sitzt dann fest. So befestigt man Zahnräder und Radreifen ohne Schrauben.
:::

### Die Anomalie des Wassers

Wasser verhält sich zwischen $0\,^\circ\text{C}$ und $4\,^\circ\text{C}$ anders als fast alle Stoffe. Es
**zieht sich beim Erwärmen zusammen**. Das Wort **Anomalie** heißt „Abweichung von der Regel“. Seine
größte Dichte hat Wasser bei $4\,^\circ\text{C}$, nämlich $999{,}97\,\text{kg/m}^3$.

```plot
x: [0, 12]
y: [999.4, 1000.02]
hoehe: 300
achsen: { x: "Temperatur in °C", y: "Dichte in kg/m³" }
graphen:
  - { f: "999.972 - 0.0079*(x-4)^2", von: 0, bis: 12, farbe: 0, label: "Wasser" }
punkte:
  - { x: 4, y: 999.972, label: "Maximum bei 4 °C" }
  - { x: 0, y: 999.846, label: "0 °C" }
strecken:
  - { von: [4, 999.4], nach: [4, 999.972], gestrichelt: true }
beschriftung: "Dichte von flüssigem Wasser zwischen 0 °C und 12 °C. Die Dichte steigt von 0 °C bis 4 °C an und fällt danach wieder. Wasser von 4 °C ist am dichtesten und sinkt in einem See nach unten."
```

Beim Gefrieren dehnt sich Wasser sprunghaft um etwa $9\,\%$ aus. Eis hat nur eine Dichte von
$917\,\text{kg/m}^3$ und schwimmt deshalb. Die Ursache sind die **Wasserstoffbrücken**, schwache Bindungen
zwischen den Wassermolekülen. Im Eis halten sie die Moleküle in einem offenen, sechseckigen Gitter mit
viel leerem Raum. Beim Schmelzen bricht das Gitter teilweise zusammen, und die Moleküle rücken näher. Bis
$4\,^\circ\text{C}$ ist dieser Effekt stärker als die normale Ausdehnung durch die heftigere Bewegung.

:::intuition
Ohne die Anomalie gäbe es kaum Leben in Seen. Im Herbst kühlt die Oberfläche ab. Das kalte Wasser ist
dichter und sinkt nach unten, bis der ganze See $4\,^\circ\text{C}$ hat. Kühlt die Oberfläche weiter ab, wird
sie **leichter** und bleibt oben. Sie friert zu, das Eis schwimmt und isoliert. Am Grund bleibt Wasser mit
$4\,^\circ\text{C}$, in dem Fische überwintern. Wäre Eis dichter als Wasser, würden Seen vom Grund her
durchfrieren.
:::

Weitere Folgen sind die Frostsprengung von Gestein, geplatzte Wasserleitungen und Glasflaschen im
Gefrierfach sowie Schlaglöcher nach dem Winter.

:::merke
**Ausdehnung berechnen:** (1) Prüfe, ob nach einer Länge oder einem Volumen gefragt ist. (2) Für Längen
nimm $\alpha$, für Volumina $\gamma$; bei Festkörpern ist $\gamma \approx 3\alpha$. (3) $\Delta T$ ist eine
Differenz, also sind °C und K gleichwertig. (4) Das Ergebnis hat die Einheit der Ausgangsgröße. Löcher
und Hohlräume dehnen sich aus wie das Material um sie herum.
:::

```reflexion
frage: Ein Glas mit festsitzendem Metalldeckel lässt sich oft öffnen, wenn man den Deckel unter heißes Wasser hält. Warum hilft das, und warum hilft es mehr, wenn der Deckel aus Metall und das Glas aus Glas ist?
antwort: |
  Das heiße Wasser erwärmt zuerst den Deckel. Der Deckel dehnt sich aus, auch sein Innendurchmesser wird größer, wie bei
  einem Loch im Ring. Metall hat außerdem einen größeren Ausdehnungskoeffizienten als Glas (etwa $12$ bis $23$ gegenüber
  $8$ Millionstel pro Kelvin). Selbst wenn das Glas mit erwärmt wird, wächst der Deckel stärker und sitzt lockerer.
```

### Aufgaben zur thermischen Ausdehnung

```aufgabe
id: p10-schiene
titel: Ausdehnung einer Schiene
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Eine Stahlschiene ($\alpha = 12\cdot 10^{-6}\,\text{K}^{-1}$) ist bei $0\,^\circ\text{C}$ genau $30\,\text{m}$ lang. Um wie viele **Millimeter** verlängert sie sich bis $50\,^\circ\text{C}$?
teile:
  - typ: zahl
    loesung: "12e-6*30*50*1000"
    einheit: "mm"
    anzeige: '18'
    fehler:
      - wert: "12e-6*30*50"
        meldung: |
          Das ist das Ergebnis in **Metern**, denn du hast die Länge in Metern eingesetzt. Gefragt sind Millimeter: $1\,\text{m} = 1000\,\text{mm}$.
      - wert: "12*30*50"
        meldung: |
          Du hast den Faktor $10^{-6}$ von $\alpha$ vergessen. Stahl wird pro Kelvin nur um zwölf **Millionstel** seiner Länge länger.
hinweise:
  - '$\Delta l = \alpha\,l_0\,\Delta T$. Das Ergebnis hat dieselbe Einheit wie $l_0$.'
loesung: |
  **Ansatz:** Die Schiene ist ein langer Körper, also Längenausdehnung $\Delta l = \alpha\,l_0\,\Delta T$ mit $\Delta T = 50\,\text{K}$.
  ---
  **Rechnung:** $\Delta l = 12\cdot 10^{-6}\,\text{K}^{-1}\cdot 30\,\text{m}\cdot 50\,\text{K} = 0{,}018\,\text{m} = 18\,\text{mm}$.
  ---
  **Plausibilität:** Knapp zwei Zentimeter auf $30\,\text{m}$. Genau deshalb hatten alte Gleise Lücken zwischen den Schienen.
```

```aufgabe
id: p10-gamma-alpha
titel: Vom Längen- zum Volumenkoeffizienten
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Kupfer hat den Längenausdehnungskoeffizienten $\alpha = 17\cdot 10^{-6}\,\text{K}^{-1}$. Wie groß ist ungefähr sein Volumenausdehnungskoeffizient $\gamma$? Gib das Ergebnis in $10^{-6}\,\text{K}^{-1}$ an.
teile:
  - typ: zahl
    loesung: "3*17"
    einheit: "10⁻⁶ K⁻¹"
    anzeige: '51'
    fehler:
      - wert: "17"
        meldung: |
          Das ist der Längenkoeffizient. Ein Körper dehnt sich aber in **drei** Richtungen aus, und das Volumen wächst in jeder davon.
      - wert: "17^3"
        meldung: |
          Man multipliziert nicht die Koeffizienten miteinander. Das Volumen wächst mit $(1 + \alpha\Delta T)^3 \approx 1 + 3\alpha\Delta T$, also ist $\gamma \approx 3\alpha$.
hinweise:
  - Ein Würfel dehnt sich in Länge, Breite und Höhe aus.
loesung: |
  **Ansatz:** Jede der drei Kanten wächst mit dem Faktor $1 + \alpha\Delta T$. Das Volumen wächst mit $(1 + \alpha\Delta T)^3 \approx 1 + 3\alpha\Delta T$.
  ---
  **Ergebnis:** $\gamma \approx 3\alpha = 3\cdot 17\cdot 10^{-6}\,\text{K}^{-1} = 51\cdot 10^{-6}\,\text{K}^{-1}$.
```

```aufgabe
id: p10-anomalie
titel: Der See im Winter
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Ein tiefer See ist im Winter zugefroren. Welche Temperatur hat das Wasser am Grund ungefähr?
teile:
  - typ: auswahl
    optionen:
      - "0 °C"
      - "4 °C"
      - "−4 °C"
      - "so kalt wie die Luft über dem Eis"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          $0\,^\circ\text{C}$ hat das Wasser direkt unter dem Eis. Es ist aber leichter als Wasser von $4\,^\circ\text{C}$ und bleibt deshalb oben.
      - wert: 2
        meldung: |
          Flüssiges Wasser unter dem Eis kann bei normalem Druck nicht kälter als $0\,^\circ\text{C}$ sein, sonst würde es gefrieren.
      - wert: 3
        meldung: |
          Das Eis und das Wasser darunter isolieren den Grund von der kalten Luft. Wärme fließt nur sehr langsam nach oben ab.
hinweise:
  - Bei welcher Temperatur ist Wasser am dichtesten, also am schwersten?
loesung: |
  **Ansatz:** Das dichteste Wasser sinkt nach unten. Wasser ist bei $4\,^\circ\text{C}$ am dichtesten.
  ---
  **Antwort:** Am Grund sammelt sich Wasser mit etwa $4\,^\circ\text{C}$. Kälteres Wasser ist leichter, bleibt oben und gefriert dort.
```

```aufgabe
id: p10-bruecke
titel: Dehnungsfuge einer Brücke
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Eine $800\,\text{m}$ lange Stahlbrücke ($\alpha = 12\cdot 10^{-6}\,\text{K}^{-1}$) muss Temperaturen von $-20\,^\circ\text{C}$ bis $+40\,^\circ\text{C}$ aushalten. Welche Längenänderung (in cm) müssen die Dehnungsfugen insgesamt aufnehmen?
teile:
  - typ: zahl
    loesung: "12e-6*800*60*100"
    einheit: "cm"
    anzeige: '57{,}6'
    fehler:
      - wert: "12e-6*800*20*100"
        meldung: |
          Du hast $\Delta T = 40 - 20 = 20\,\text{K}$ gerechnet. Die tiefste Temperatur ist aber $-20\,^\circ\text{C}$, also $\Delta T = 40 - (-20) = 60\,\text{K}$.
      - wert: "12e-6*800*40*100"
        meldung: |
          Du hast nur die Erwärmung von $0\,^\circ\text{C}$ auf $40\,^\circ\text{C}$ berücksichtigt. Die Fuge muss den ganzen Bereich von $-20\,^\circ\text{C}$ bis $+40\,^\circ\text{C}$ ausgleichen.
hinweise:
  - Bestimme zuerst die gesamte Temperaturspanne zwischen der kältesten und der wärmsten Temperatur.
  - 'Dann $\Delta l = \alpha\,l_0\,\Delta T$ und das Ergebnis von Metern in Zentimeter umrechnen.'
loesung: |
  **Ansatz:** Die Fugen müssen den Unterschied zwischen der kürzesten Länge (bei $-20\,^\circ\text{C}$) und der längsten (bei $+40\,^\circ\text{C}$) aufnehmen.
  ---
  **Temperaturspanne:** $\Delta T = 40\,^\circ\text{C} - (-20\,^\circ\text{C}) = 60\,\text{K}$.
  ---
  **Rechnung:** $\Delta l = 12\cdot 10^{-6}\,\text{K}^{-1}\cdot 800\,\text{m}\cdot 60\,\text{K} = 0{,}576\,\text{m} = 57{,}6\,\text{cm}$. Deshalb sieht man an langen Brücken große Fingerfugen.
```

```aufgabe
id: p10-tank
titel: Volle Tankfüllung in der Sonne
niveau: 2
lernziel: 1
kompetenz: modellieren
angabe: |
  Ein Autotank wird morgens bei $10\,^\circ\text{C}$ randvoll mit $60\,\text{L}$ Benzin ($\gamma = 1{,}0\cdot 10^{-3}\,\text{K}^{-1}$) gefüllt. Mittags hat das Benzin $30\,^\circ\text{C}$.

  a) Um wie viele Liter dehnt sich das Benzin aus?

  b) Der Stahltank dehnt sich ebenfalls aus ($\gamma_\text{Stahl} = 36\cdot 10^{-6}\,\text{K}^{-1}$). Wie viel Benzin läuft tatsächlich über? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    label: a) Ausdehnung des Benzins
    loesung: "1.0e-3*60*20"
    einheit: "L"
    anzeige: '1{,}2'
    fehler:
      - wert: "1.0e-3*60*30"
        meldung: |
          Du hast die Endtemperatur als $\Delta T$ eingesetzt. Gebraucht wird die **Änderung**, $30\,^\circ\text{C} - 10\,^\circ\text{C} = 20\,\text{K}$.
  - typ: zahl
    label: b) überlaufendes Benzin
    loesung: "1.0e-3*60*20 - 36e-6*60*20"
    einheit: "L"
    anzeige: '1{,}16'
    toleranz: 0.006
    fehler:
      - wert: "1.0e-3*60*20 + 36e-6*60*20"
        meldung: |
          Wenn der Tank größer wird, passt **mehr** hinein. Seine Ausdehnung muss also abgezogen werden, nicht addiert.
hinweise:
  - '$\Delta V = \gamma\,V_0\,\Delta T$ mit der Temperaturänderung $\Delta T$.'
  - Der Tank wächst auch, nur viel weniger. Übrig bleibt der Unterschied der beiden Ausdehnungen.
loesung: |
  **Ansatz:** Benzin und Tank dehnen sich aus, beide nach $\Delta V = \gamma\,V_0\,\Delta T$ mit $\Delta T = 20\,\text{K}$. Es läuft so viel über, wie das Benzin mehr wächst als der Tank.
  ---
  **a)** $\Delta V_\text{Benzin} = 1{,}0\cdot 10^{-3}\,\text{K}^{-1}\cdot 60\,\text{L}\cdot 20\,\text{K} = 1{,}2\,\text{L}$.
  ---
  **b)** $\Delta V_\text{Tank} = 36\cdot 10^{-6}\,\text{K}^{-1}\cdot 60\,\text{L}\cdot 20\,\text{K} = 0{,}043\,\text{L}$. Es laufen $1{,}2\,\text{L} - 0{,}043\,\text{L} = 1{,}16\,\text{L}$ über.
  ---
  **Plausibilität:** Der Tank dehnt sich fast dreißigmal weniger aus als das Benzin. Deshalb soll man einen Tank im Sommer nicht randvoll füllen.
```

```aufgabe
id: p10-ring-loch
titel: Wird das Loch größer oder kleiner?
niveau: 2
lernziel: 1
kompetenz: begruenden
angabe: |
  Eine Unterlegscheibe aus Messing hat ein Loch, durch das eine Schraube gerade nicht passt. Man erwärmt die Scheibe stark. Was passiert mit dem Loch?
teile:
  - typ: auswahl
    optionen:
      - "Das Loch wird kleiner, weil sich das Messing auch nach innen ausdehnt."
      - "Das Loch bleibt gleich groß, weil im Loch kein Material ist, das sich ausdehnen kann."
      - "Das Loch wird größer, genau so, als wäre es mit Messing gefüllt."
      - "Das Loch wird größer, weil die heiße Luft im Loch sich ausdehnt."
    richtig: [2]
    fehler:
      - wert: 0
        meldung: |
          Das ist die häufigste Fehlvorstellung. Denk an das Gedankenexperiment: Füll das Loch mit einer passenden Messingscheibe. Beim Erwärmen wird alles größer, auch diese Scheibe. Der Ring drumherum muss also mitwachsen.
      - wert: 1
        meldung: |
          Das Loch hat zwar kein eigenes Material, aber sein Rand besteht aus Messing. Jeder Abstand im Material wird größer, also auch der Abstand zwischen gegenüberliegenden Punkten des Randes.
      - wert: 3
        meldung: |
          Die Luft im Loch kann den Ring nicht auseinanderdrücken. Der Grund ist das Messing selbst: Alle Abstände im Material wachsen, auch der Durchmesser des Lochs.
hinweise:
  - Stell dir vor, das Loch ist noch mit dem ausgestanzten Messingstück gefüllt. Was passiert beim Erwärmen mit diesem Stück?
  - Jeder Abstand zwischen zwei Punkten im Material wächst um denselben Bruchteil. Gilt das auch für zwei gegenüberliegende Randpunkte?
loesung: |
  **Gedankenexperiment:** Wir denken uns das Loch mit dem ausgestanzten Messingstück gefüllt. Erwärmt man die volle Scheibe, dehnt sich jedes Stück aus, auch das innere.
  ---
  **Folgerung:** Der Ring muss das wachsende Innenstück weiter umschließen, also wächst sein Innendurchmesser. Ohne das Innenstück ändert sich am Ring nichts.
  ---
  **Antwort:** Das Loch wird größer, genau um $\Delta d = \alpha\,d_0\,\Delta T$ mit dem $\alpha$ von Messing. Die Schraube passt danach eventuell hindurch.
```

```aufgabe
id: p10-bimetall
titel: Wie funktioniert ein Bimetallschalter?
niveau: 2
lernziel: 1
kompetenz: begruenden
angabe: |
  Ein Bimetallstreifen besteht aus Messing ($\alpha = 19\cdot 10^{-6}\,\text{K}^{-1}$) und Stahl ($\alpha = 12\cdot 10^{-6}\,\text{K}^{-1}$), die fest miteinander verbunden sind. Erkläre, in welche Richtung er sich beim Erwärmen krümmt und wie er in einem Bügeleisen die Heizung bei Überhitzung abschaltet.
teile:
  - typ: text
    muster: |
      Beim Erwärmen will sich das Messing stärker verlängern als der Stahl. Weil beide fest verbunden sind, geht das nur,
      wenn sich der Streifen krümmt. Das Messing liegt dann außen (auf dem längeren Bogen), der Stahl innen. Der Streifen
      biegt sich also zur Stahlseite. Ist die eingestellte Temperatur erreicht, hat er sich so weit gebogen, dass er einen
      Kontakt öffnet und den Heizstrom unterbricht. Kühlt er ab, biegt er sich zurück und schließt den Kontakt wieder.
hinweise:
  - Welches der beiden Metalle wird beim Erwärmen länger?
  - Auf einem gekrümmten Streifen ist der äußere Bogen länger als der innere. Welches Metall muss also außen liegen?
loesung: |
  **Ansatz:** Messing hat das größere $\alpha$ und will sich stärker verlängern. Die feste Verbindung zwingt beide Streifen, sich gemeinsam zu verformen.
  ---
  **Krümmung:** Ein gekrümmter Streifen hat außen den längeren Bogen. Also liegt das Messing außen, und der Streifen biegt sich zur Stahlseite.
  ---
  **Schalter:** Die Krümmung bewegt einen Kontakt. Bei der eingestellten Temperatur öffnet er sich, und der Strom ist aus. Beim Abkühlen biegt sich der Streifen zurück, und der Strom fließt wieder.
```

```aufgabe
id: p10-pendeluhr
titel: Eine Pendeluhr im Sommer
niveau: 3
lernziel: 1
kompetenz: modellieren
angabe: |
  Eine Pendeluhr mit Messingpendel ($\alpha = 19\cdot 10^{-6}\,\text{K}^{-1}$) geht bei $20\,^\circ\text{C}$ genau richtig. Im Sommer hat der Raum $30\,^\circ\text{C}$. Für ein Fadenpendel gilt $T_\text{P} = 2\pi\sqrt{l/g}$, die Schwingungsdauer $T_\text{P}$ wächst also mit der Wurzel aus der Länge $l$.

  Wie viele Sekunden geht die Uhr pro Tag ($86\,400\,\text{s}$) nach? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "86400*(1-1/sqrt(1+19e-6*10))"
    einheit: "s"
    anzeige: '8{,}2'
    fehler:
      - wert: "86400*19e-6*10"
        meldung: |
          Du hast angenommen, dass die Schwingungsdauer proportional zur Länge wächst. Sie wächst aber nur mit der **Wurzel** aus der Länge. Eine Längenänderung um einen kleinen Bruchteil $x$ ändert die Dauer nur um etwa $x/2$.
hinweise:
  - Berechne zuerst den Bruchteil, um den das Pendel länger wird, $\alpha\,\Delta T$.
  - 'Die Schwingungsdauer wächst mit dem Faktor $\sqrt{1 + \alpha\Delta T}$. Für kleine $x$ gilt $\sqrt{1 + x} \approx 1 + x/2$.'
  - Die Uhr zählt Schwingungen. Ist jede Schwingung um einen Bruchteil länger, zeigt die Uhr am Tag um denselben Bruchteil zu wenig Zeit an.
gefuehrt:
  - text: Um welchen Bruchteil wird das Pendel länger? Berechne $\alpha\,\Delta T$.
    teil: { typ: zahl, loesung: "19e-6*10" }
    erklaerung: $\alpha\,\Delta T = 19\cdot 10^{-6}\,\text{K}^{-1}\cdot 10\,\text{K} = 1{,}9\cdot 10^{-4}$. Das Pendel wird um $0{,}019\,\%$ länger.
  - text: Um welchen Bruchteil wird die Schwingungsdauer länger? Nutze $\sqrt{1 + x} \approx 1 + x/2$.
    teil: { typ: zahl, loesung: "sqrt(1+19e-6*10)-1" }
    erklaerung: Die Dauer wächst mit $\sqrt{1 + 1{,}9\cdot 10^{-4}} \approx 1 + 0{,}95\cdot 10^{-4}$. Jede Schwingung dauert also um den Bruchteil $0{,}95\cdot 10^{-4}$ länger.
  - text: Überlege, was das für die Anzeige der Uhr bedeutet.
    erklaerung: Die Uhr zählt Schwingungen und rechnet jede mit der alten Dauer. Weil jede Schwingung länger dauert, schafft sie an einem Tag weniger Schwingungen. Die Uhr zeigt zu wenig Zeit an, sie geht nach.
  - text: Wie viele Sekunden geht die Uhr pro Tag nach?
    teil: { typ: zahl, loesung: "86400*(1-1/sqrt(1+19e-6*10))" }
    erklaerung: $86\,400\,\text{s}\cdot 0{,}95\cdot 10^{-4} \approx 8{,}2\,\text{s}$ pro Tag.
loesung: |
  **Ansatz:** Das Pendel wird durch die Erwärmung länger, deshalb dauert jede Schwingung länger. Die Uhr zählt Schwingungen, also geht sie nach.
  ---
  **Längenänderung:** $\dfrac{\Delta l}{l} = \alpha\,\Delta T = 19\cdot 10^{-6}\,\text{K}^{-1}\cdot 10\,\text{K} = 1{,}9\cdot 10^{-4}$.
  ---
  **Dauer:** Weil $T_\text{P} \propto \sqrt l$ ist, wächst die Dauer mit dem Faktor $\sqrt{1 + 1{,}9\cdot 10^{-4}} \approx 1 + 0{,}95\cdot 10^{-4}$. Die Näherung $\sqrt{1+x}\approx 1 + x/2$ ist eine Linearisierung.
  ---
  **Ergebnis:** Pro Tag fehlen $86\,400\,\text{s}\cdot 0{,}95\cdot 10^{-4} \approx 8{,}2\,\text{s}$. Mehr zum Pendel im [Kapitel Schwingungen](/lernen/physik1/schwingungen). Präzisionsuhren hatten deshalb Pendel aus Invar.
```

## Temperatur, innere Energie und Wärme

```aufgabe
id: p10-3-check
art: check
titel: "Vorwissen: Energie umwandeln"
niveau: 1
angabe: |
  Ein Stein mit $0{,}50\,\text{kg}$ fällt $2{,}0\,\text{m}$ tief auf den Boden. Wie viel potentielle Energie verliert er dabei ($g = 9{,}81\,\text{m/s}^2$)?
teile:
  - typ: zahl
    loesung: "0.5*9.81*2"
    einheit: "J"
    anzeige: '9{,}81'
    fehler:
      - wert: "0.5*2"
        meldung: |
          Die Fallbeschleunigung $g$ fehlt. Die potentielle Energie ist $E_\text{pot} = m\,g\,h$.
      - wert: "0.5*9.81"
        meldung: |
          Das ist die Gewichtskraft in Newton. Für die Energie musst du noch mit der Höhe multiplizieren.
hinweise:
  - '$E_\text{pot} = m\,g\,h$.'
loesung: |
  Die potentielle Energie nimmt um $E = m\,g\,h = 0{,}50\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot 2{,}0\,\text{m} = 9{,}81\,\text{J}$ ab.
  ---
  Kurz vor dem Aufprall ist diese Energie kinetische Energie. Wohin sie nach dem Aufprall geht, klärt dieser Abschnitt. Wiederholen: [Kapitel 4: Energie](/lernen/physik1/arbeit-energie-impuls/energie).
```

Dieser Abschnitt ist der wichtigste des Kapitels. Drei Wörter werden im Alltag ständig
durcheinandergeworfen: **Temperatur**, **innere Energie** und **Wärme**. In der Physik sind es drei
verschiedene Dinge. Wer sie sauber trennt, versteht die ganze Wärmelehre. Lies diesen Abschnitt langsam,
gern zweimal.

**Worum geht es in einem Satz?** Die Temperatur sagt, wie heftig sich die Teilchen eines Körpers **im
Mittel** bewegen. Die innere Energie sagt, wie viel Energie **alle** Teilchen zusammen haben. Wärme ist
Energie, die **wegen eines Temperaturunterschieds** von einem Körper zu einem anderen fließt.

### Drei Begriffe, drei Fragen

Jeder Körper besteht aus Teilchen (Atomen oder Molekülen), die sich ständig ungeordnet bewegen. In einem
Festkörper zittern sie um feste Plätze, in einem Gas fliegen sie kreuz und quer. Diese Bewegung sieht man
nicht, weil die Teilchen winzig sind und sich in alle Richtungen gleichzeitig bewegen.

:::definition[Temperatur]
Die **Temperatur** ist ein Maß für die **mittlere** Bewegungsenergie (kinetische Energie) der
ungeordneten Teilchenbewegung. Sie beantwortet die Frage: Wie heftig bewegt sich ein Teilchen im
Durchschnitt? Sie hängt nicht davon ab, wie groß der Körper ist.

**Beispiel:** Ein Tropfen und ein ganzer Topf heißes Wasser mit je $80\,^\circ\text{C}$ haben dieselbe
Temperatur. Ihre Teilchen bewegen sich im Mittel gleich heftig.

**Kein Beispiel:** Die Geschwindigkeit eines fahrenden Zuges erhöht die Temperatur seiner Wagen nicht.
Das ist eine **geordnete** Bewegung, bei der sich alle Teilchen gemeinsam in eine Richtung bewegen.
:::

:::definition[Innere Energie]
Die **innere Energie** $U$ eines Körpers ist die Summe der Energien **aller** seiner Teilchen: ihre
kinetische Energie der ungeordneten Bewegung und die potentielle Energie der Bindungen zwischen ihnen.
Sie beantwortet die Frage: Wie viel Energie steckt insgesamt im Inneren? Ein Körper **hat** innere Energie.
Deshalb heißt sie **Zustandsgröße**: Sie beschreibt den Zustand, in dem der Körper gerade ist.

**Beispiel:** Ein Topf mit $5\,\text{L}$ Wasser von $80\,^\circ\text{C}$ hat etwa fünfmal so viel innere
Energie wie ein Topf mit $1\,\text{L}$ Wasser von $80\,^\circ\text{C}$, weil er fünfmal so viele Teilchen hat.

**Kein Beispiel:** Die kinetische Energie, die ein geworfener Ball als Ganzes hat, gehört **nicht** zur
inneren Energie. Sie kommt von der gemeinsamen Bewegung aller Teilchen, nicht von ihrer ungeordneten
Bewegung gegeneinander.
:::

```aufgabe
id: p10-3-topf-tasse-check
art: check
titel: Temperatur oder innere Energie?
niveau: 1
angabe: |
  Ein Topf enthält $2\,\text{L}$ Wasser mit $50\,^\circ\text{C}$, eine Tasse $0{,}2\,\text{L}$ Wasser mit $90\,^\circ\text{C}$. Welche Aussage stimmt?
teile:
  - typ: auswahl
    optionen:
      - "Die Tasse hat die höhere Temperatur, der Topf hat mehr innere Energie."
      - "Die Tasse hat die höhere Temperatur und mehr innere Energie."
      - "Der Topf hat die höhere Temperatur, weil er mehr Wasser enthält."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Die Temperatur der Tasse ist höher, ihre Teilchen bewegen sich also im Mittel heftiger. Der Topf hat aber zehnmal so viele Teilchen. Die Summe ihrer Energien ist deshalb größer.
      - wert: 2
        meldung: |
          Die Temperatur hängt nicht von der Menge ab. Sie misst die mittlere Bewegungsenergie **pro Teilchen**, und die ist in der Tasse größer.
hinweise:
  - Die Temperatur ist ein Mittelwert pro Teilchen, die innere Energie eine Summe über alle Teilchen.
loesung: |
  Die Temperatur ist ein Mittelwert. Die Tasse hat mit $90\,^\circ\text{C}$ die höhere Temperatur.
  ---
  Die innere Energie ist eine Summe über alle Teilchen. Der Topf hat zehnmal so viel Wasser, und seine Teilchen sind nur wenig langsamer. Er hat deutlich mehr innere Energie.
```

:::definition[Wärme]
**Wärme** $Q$ ist Energie, die **wegen eines Temperaturunterschieds** von einem Körper auf einen anderen
übertragen wird. Sie fließt von selbst immer vom wärmeren zum kälteren Körper. Ein Körper **hat** keine
Wärme. Er **nimmt** Wärme **auf** oder **gibt** Wärme **ab**. Deshalb heißt Wärme **Prozessgröße**: Sie
gehört zu einem Vorgang, nicht zu einem Zustand. Ihre Einheit ist das Joule (J).

**Beispiel:** Eine Herdplatte gibt Wärme an einen Topf ab, weil sie heißer ist als der Topf.

**Kein Beispiel:** Wenn du mit einer Fahrradpumpe Luft zusammendrückst, wird die Luft warm. Die Energie
dafür ist **keine** Wärme, sondern **Arbeit**: Sie kommt von der Kraft deiner Arme, nicht von einem
Temperaturunterschied.
:::

Der Zusammenhang in einem Satz: Fließt Wärme in einen Körper hinein, steigt seine innere Energie, und
meistens steigt dadurch auch seine Temperatur. Wie stark die Temperatur steigt, hängt davon ab, auf wie
viele Teilchen sich die Energie verteilt.

### Ein Bild zum Festhalten: zwei Wassertanks

Stell dir zwei Wassertanks vor, die unten durch ein Rohr mit Ventil verbunden sind. Der linke ist schmal
und hoch gefüllt. Der rechte ist sehr breit und nur niedrig gefüllt. Er enthält aber viel mehr Wasser.

```plot
x: [-1, 11]
y: [-1, 9]
gleich: true
hoehe: 300
strecken:
  - { von: [0, 0], nach: [0, 8.5] }
  - { von: [1.2, 0], nach: [1.2, 8.5] }
  - { von: [0, 0], nach: [1.2, 0] }
  - { von: [0, 7], nach: [1.2, 7], farbe: 0 }
  - { von: [3, 0], nach: [3, 5] }
  - { von: [10, 0], nach: [10, 5] }
  - { von: [3, 0], nach: [10, 0] }
  - { von: [3, 2.5], nach: [10, 2.5], farbe: 0 }
  - { von: [1.2, 0.3], nach: [3, 0.3], farbe: 1 }
vektoren:
  - { von: [1.4, 0.8], nach: [2.8, 0.8], label: "Fluss", farbe: 1 }
punkte:
  - { x: 0.6, y: 7.6, label: "hoher Pegel, wenig Wasser" }
  - { x: 6.5, y: 3.1, label: "niedriger Pegel, viel Wasser" }
beschriftung: "Zwei verbundene Wassertanks als Modell. Der Pegel entspricht der Temperatur, die Wassermenge der inneren Energie, das durchfließende Wasser der Wärme. Das Wasser fließt vom hohen zum niedrigen Pegel, obwohl der rechte Tank viel mehr Wasser enthält."
```

Öffnest du das Ventil, fließt Wasser von **links nach rechts**: vom hohen Pegel zum niedrigen, obwohl
rechts viel mehr Wasser ist. Es fließt so lange, bis beide Pegel gleich hoch sind. Übertragen auf die
Wärmelehre heißt das:

- Der **Pegel** entspricht der **Temperatur**. Er entscheidet, in welche Richtung etwas fließt.
- Die **Wassermenge** in einem Tank entspricht der **inneren Energie**. Sie ist ein Vorrat.
- Das **Wasser, das durch das Rohr fließt**, entspricht der **Wärme**. Es gibt sie nur während des Fließens.
- Die **Breite** des Tanks entspricht der **Wärmekapazität**: Ein breiter Tank braucht viel Wasser, damit
  sein Pegel steigt. Mehr dazu in [10.4 Spezifische Wärmekapazität](/lernen/physik1/temperatur-waerme-gase/spezifische-waermekapazitaet).

**Wo das Bild hinkt:** Wasser ist ein Stoff, Wärme nicht. Früher glaubte man tatsächlich an einen
„Wärmestoff“, der von heißen in kalte Körper fließt. Joule hat diese Vorstellung widerlegt, wie du gleich
siehst. Wärme ist übertragene **Energie** und kein Stoff.

:::beispiel[Glühende Nadel gegen Badewanne]
Eine Stahlnadel mit $1\,\text{g}$ glüht mit $800\,^\circ\text{C}$. Sie fällt in eine Badewanne mit
$150\,\text{kg}$ Wasser von $40\,^\circ\text{C}$. Was passiert?

**Schritt 1, Richtung:** Die Nadel hat die höhere Temperatur. Also fließt Wärme von der Nadel ins Wasser,
obwohl das Wasser eine riesige innere Energie hat und die Nadel eine winzige.

**Schritt 2, wie viel Wärme:** Um $1\,\text{kg}$ Stahl um $1\,\text{K}$ abzukühlen, muss er $450\,\text{J}$
abgeben (das lernst du in 10.4 genauer). Die Nadel kühlt um $760\,\text{K}$ auf $40\,^\circ\text{C}$ ab und
gibt dabei $0{,}001\,\text{kg}\cdot 450\,\tfrac{\text{J}}{\text{kg}\,\text{K}}\cdot 760\,\text{K} = 342\,\text{J}$ ab.

**Schritt 3, Wirkung auf das Wasser:** Um $150\,\text{kg}$ Wasser um nur $1\,\text{K}$ zu erwärmen, braucht
man $150\cdot 4190\,\text{J} = 628\,500\,\text{J}$. Die $342\,\text{J}$ erwärmen das Wasser also nur um
$342/628\,500\,\text{K} \approx 0{,}0005\,\text{K}$. Das misst kein Thermometer.

**Was haben wir gezeigt?** Hohe Temperatur heißt nicht viel Energie. Die Nadel ist sehr heiß, enthält aber
kaum Energie. Die Badewanne ist lauwarm, enthält aber sehr viel.
:::

:::achtung[Fehler: Die Mischungstemperatur als einfachen Mittelwert rechnen]
Ein Schüler sagt: „Die Nadel hat $800\,^\circ\text{C}$, das Wasser $40\,^\circ\text{C}$. Am Ende haben
beide $(800 + 40)/2 = 420\,^\circ\text{C}$.“

Das wäre nur richtig, wenn Nadel und Wasser gleich viel Energie für ein Kelvin bräuchten. Das Wasser
braucht aber rund 1,4 Millionen Mal so viel ($628\,500\,\text{J}$ gegenüber $0{,}45\,\text{J}$ pro Kelvin). Die Endtemperatur liegt deshalb praktisch bei
$40\,^\circ\text{C}$. Wie man richtig mittelt, lernst du in
[10.5 Mischungsrechnung und Kalorimeter](/lernen/physik1/temperatur-waerme-gase/mischungsrechnung-und-kalorimeter).
:::

```aufgabe
id: p10-3-richtung-check
art: check
titel: In welche Richtung fließt Wärme?
niveau: 1
angabe: |
  Ein kleiner Eisennagel mit $300\,^\circ\text{C}$ liegt auf einem großen Eisblock mit $-10\,^\circ\text{C}$. Der Eisblock hat viel mehr innere Energie als der Nagel. In welche Richtung fließt Wärme?
teile:
  - typ: auswahl
    optionen:
      - "Vom Nagel zum Eisblock"
      - "Vom Eisblock zum Nagel, weil der Block mehr innere Energie hat"
      - "Gar nicht, weil sich die Energien ausgleichen"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Die Richtung bestimmt allein die **Temperatur**, nicht die Menge der inneren Energie. Wärme fließt immer von der höheren zur tieferen Temperatur.
      - wert: 2
        meldung: |
          Solange ein Temperaturunterschied besteht, fließt Wärme. Sie hört erst auf, wenn beide dieselbe Temperatur haben.
hinweise:
  - Denk an die Wassertanks. Was entscheidet die Flussrichtung, der Pegel oder die Wassermenge?
loesung: |
  Wärme fließt von der höheren zur tieferen Temperatur, also vom Nagel zum Eisblock.
  ---
  Die größere innere Energie des Blocks spielt für die Richtung keine Rolle, so wie die Wassermenge im breiten Tank.
```

### Zwei Wege, die innere Energie zu ändern

Reib deine Hände kräftig aneinander. Sie werden warm, obwohl du keine Wärme zugeführt hast. Pump einen
Fahrradreifen auf. Die Pumpe wird warm. Die innere Energie eines Körpers lässt sich auf **zwei Wegen**
erhöhen:

1. durch **Wärme**, wenn ein wärmerer Körper sie abgibt, wie die Herdplatte unter dem Topf.
2. durch **Arbeit**, wenn eine Kraft entlang eines Weges wirkt, wie beim Reiben, Bohren, Hämmern oder
   Zusammendrücken.

Ob ein Topf Wasser auf dem Herd warm wurde oder durch heftiges Rühren, kann man dem Wasser hinterher
nicht ansehen. Beide Wege führen zum selben Zustand. Deshalb ist die innere Energie eine Zustandsgröße.
Wärme und Arbeit dagegen sind zwei Arten, Energie zu übertragen. Das wird in
[Kapitel 11 als erster Hauptsatz](/lernen/physik1/hauptsaetze-waermekraftmaschinen) formuliert:
$\Delta U = Q + W$. Dabei ist $\Delta U$ die Änderung der inneren Energie, $Q$ die zugeführte Wärme und
$W$ die am Körper verrichtete Arbeit.

James Prescott Joule zeigte um 1845 mit einem berühmten Versuch, dass Arbeit und Wärme dasselbe
bewirken. Ein fallendes Gewicht trieb über eine Schnur ein Schaufelrad in einem isolierten Wassergefäß an.
Die Schaufeln wirbelten das Wasser herum, und die Reibung im Wasser erwärmte es. Joule fand: Um $1\,\text{kg}$
Wasser um $1\,\text{K}$ zu erwärmen, braucht man immer etwa $4190\,\text{J}$, egal ob als Arbeit oder als Wärme.

:::beispiel[Joules Versuch nachgerechnet]
Ein Gewicht von $20\,\text{kg}$ sinkt $1{,}6\,\text{m}$ tief und treibt dabei das Schaufelrad an. Joule zieht
es $30$-mal wieder hoch und lässt es erneut sinken. Im Gefäß sind $2{,}5\,\text{kg}$ Wasser.

**Schritt 1, Arbeit:** Bei jedem Absinken verliert das Gewicht die potentielle Energie $m\,g\,h$. Nach
$30$ Durchgängen ist das $W = 30\cdot 20\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot 1{,}6\,\text{m} = 9418\,\text{J}$.

**Schritt 2, wohin die Energie geht:** Das Gewicht sinkt langsam, es wird kaum schneller. Fast die ganze
Energie landet über die Reibung als innere Energie im Wasser: $\Delta U \approx 9418\,\text{J}$.

**Schritt 3, Temperaturerhöhung:** Für $2{,}5\,\text{kg}$ Wasser braucht man pro Kelvin
$2{,}5\cdot 4190\,\text{J} = 10\,475\,\text{J}$. Die Temperatur steigt also um
$9418/10\,475\,\text{K} \approx 0{,}90\,\text{K}$.

**Was zeigt das?** Mechanische Arbeit erwärmt Wasser genau wie eine Flamme. Der Effekt ist aber klein,
deshalb brauchte Joule sehr genaue Thermometer.
:::

Eine alte Einheit für Wärme ist die **Kalorie**. Eine Kalorie ist die Wärme, die $1\,\text{g}$ Wasser um
$1\,\text{K}$ erwärmt: $1\,\text{cal} \approx 4{,}19\,\text{J}$ (genauer $4{,}184\,\text{J}$). Auf Lebensmitteln steht meist die **Kilokalorie**:
$1\,\text{kcal} = 1000\,\text{cal} = 4{,}19\,\text{kJ}$.

:::achtung[Fehler: Kilokalorien wie Kalorien umrechnen]
Ein Becher Joghurt hat laut Packung $120\,\text{kcal}$. Eine Schülerin rechnet
$120\cdot 4{,}19\,\text{J} = 503\,\text{J}$.

Das ist um den Faktor $1000$ zu klein. Eine **Kilo**kalorie sind $4{,}19\,\text{kJ}$. Richtig ist
$120\cdot 4{,}19\,\text{kJ} = 503\,\text{kJ} = 503\,000\,\text{J}$. Damit könnte man immerhin
$1{,}5\,\text{L}$ Wasser um $80\,\text{K}$ erwärmen.
:::

:::achtung[Fehler: „Die Kälte kommt herein“]
Im Winter wird ein Fenster gekippt, und jemand sagt: „Mach zu, die Kälte kommt herein.“ Physikalisch
gibt es keine Kälte, die fließen kann. Es fließt **Wärme**, und zwar von drinnen nach draußen. Kälter wird
es drinnen, weil der Raum innere Energie **verliert**. Ebenso „gibt“ ein Eiswürfel dem Getränk keine Kälte.
Das Getränk gibt Wärme an den Eiswürfel ab.
:::

:::merke
- **Temperatur:** mittlere Bewegungsenergie pro Teilchen. Frage: „Wie heftig?“ Sie bestimmt die Richtung
  des Wärmeflusses.
- **Innere Energie:** gesamte Energie aller Teilchen. Frage: „Wie viel insgesamt?“ Ein Körper **hat** sie.
- **Wärme:** Energie, die wegen eines Temperaturunterschieds übertragen wird. Frage: „Wie viel ist
  geflossen?“ Ein Körper **hat** keine Wärme, er nimmt sie auf oder gibt sie ab.
- Die innere Energie ändert sich durch Wärme **oder** durch Arbeit.
:::

```reflexion
frage: Erkläre mit dem Bild der zwei Wassertanks, warum eine kleine Tasse Tee mit 80 °C einen großen Swimmingpool mit 25 °C nicht spürbar erwärmt, obwohl der Tee heißer ist. Wo stößt das Bild an seine Grenzen?
antwort: |
  Der Tee entspricht dem schmalen Tank mit hohem Pegel, der Pool dem sehr breiten Tank mit niedrigem Pegel. Wärme fließt
  vom Tee in den Pool, weil der Tee die höhere Temperatur hat. Die geflossene Energie verteilt sich im Pool aber auf
  ungeheuer viele Teilchen, deshalb steigt dort die Temperatur kaum. Die Grenze des Bildes: Wasser im Tank ist ein Stoff,
  Wärme ist aber kein Stoff, sondern übertragene Energie. Außerdem kann man innere Energie auch durch Arbeit erhöhen,
  wofür es im Tankbild keine Entsprechung gibt.
```

### Aufgaben zu Temperatur, innerer Energie und Wärme

```aufgabe
id: p10-begriffe-saetze
titel: Welche Sätze sind physikalisch richtig?
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Welche Sätze sind physikalisch korrekt formuliert? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Der Tee hat eine Temperatur von 80 °C."
      - "Der Tee hat viel Wärme."
      - "Der Tee gibt Wärme an die Tasse ab."
      - "Der heiße Tee hat mehr innere Energie als derselbe Tee, wenn er kalt ist."
      - "Die Kälte des Eiswürfels fließt in den Tee."
    richtig: [0, 2, 3]
    fehler:
      - wert: [0, 1, 2, 3]
        meldung: |
          „Der Tee hat viel Wärme“ ist Alltagssprache. Ein Körper **hat** keine Wärme. Er hat innere Energie und eine Temperatur. Wärme ist nur die Energie, die gerade wegen eines Temperaturunterschieds fließt.
      - wert: [0, 2, 3, 4]
        meldung: |
          Kälte ist kein Stoff und kann nicht fließen. Es fließt Wärme, und zwar vom Tee zum Eiswürfel.
      - wert: [0, 2]
        meldung: |
          Auch der vierte Satz stimmt. Heißer Tee hat schnellere Teilchen als derselbe Tee kalt, also mehr innere Energie.
hinweise:
  - Prüfe bei jedem Satz, ob von einem Zustand (hat) oder von einem Vorgang (gibt ab, nimmt auf) die Rede ist. Welcher der drei Begriffe passt zu welchem?
loesung: |
  **Richtig:** Ein Körper **hat** eine Temperatur und eine innere Energie. Er **gibt** Wärme ab oder **nimmt** sie auf. Also stimmen der erste, dritte und vierte Satz.
  ---
  **Falsch:** „Hat viel Wärme“ behandelt Wärme wie einen Vorrat. „Kälte fließt“ behandelt Kälte wie einen Stoff. Beides ist Alltagssprache.
```

```aufgabe
id: p10-prozessgroesse
titel: Zustandsgröße oder Prozessgröße?
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Welche der folgenden Größen ist eine **Prozessgröße**, also eine Größe, die zu einem Vorgang gehört und nicht zu einem Zustand?
teile:
  - typ: auswahl
    optionen:
      - "die Temperatur"
      - "die innere Energie"
      - "die Wärme"
      - "die Masse"
    richtig: [2]
    fehler:
      - wert: 0
        meldung: |
          Die Temperatur kann man zu jedem Zeitpunkt messen, auch wenn gar nichts passiert. Sie beschreibt einen Zustand.
      - wert: 1
        meldung: |
          Die innere Energie **hat** ein Körper, auch wenn gerade nichts passiert. Sie ist eine Zustandsgröße. Man kann ihr nicht ansehen, auf welchem Weg sie zustande kam.
      - wert: 3
        meldung: |
          Die Masse hat ein Körper jederzeit. Sie beschreibt einen Zustand und hat mit Wärmeübertragung nichts zu tun.
hinweise:
  - Welche der Größen gibt es nur, während etwas geschieht?
loesung: |
  **Zustandsgrößen** wie Temperatur, innere Energie und Masse hat ein Körper jederzeit.
  ---
  **Wärme** gibt es nur während einer Übertragung zwischen Körpern verschiedener Temperatur. Sie ist eine Prozessgröße.
```

```aufgabe
id: p10-wege-innere-energie
titel: Wie erhöht man die innere Energie?
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Durch welche Vorgänge wird die innere Energie einer Tasse Wasser erhöht? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Man stellt die Tasse auf eine heiße Herdplatte."
      - "Man rührt das Wasser sehr lange und heftig mit einem Mixer."
      - "Man trägt die Tasse im Zug mit, der mit 200 km/h fährt."
      - "Man nimmt dem Wasser seine Kälte weg."
    richtig: [0, 1]
    fehler:
      - wert: [0, 1, 2]
        meldung: |
          Die Fahrt im Zug bewegt die ganze Tasse geordnet in eine Richtung. Das ist kinetische Energie der Tasse als Ganzes, nicht innere Energie. Die ungeordnete Bewegung der Teilchen gegeneinander ändert sich nicht.
      - wert: [0, 1, 3]
        meldung: |
          „Kälte wegnehmen“ ist kein physikalischer Vorgang, weil Kälte kein Stoff ist. Man kann nur Energie zuführen, als Wärme oder als Arbeit.
      - wert: [0]
        meldung: |
          Auch heftiges Rühren erhöht die innere Energie. Das ist Arbeit, genau wie in Joules Versuch.
hinweise:
  - Es gibt genau zwei Wege, die innere Energie zu erhöhen. Welche sind das?
loesung: |
  **Wärme:** Die Herdplatte ist heißer als das Wasser und gibt Wärme ab.
  ---
  **Arbeit:** Der Mixer verrichtet Arbeit am Wasser, die durch Reibung zu innerer Energie wird. Die Zugfahrt ändert nur die geordnete Bewegung der ganzen Tasse.
```

```aufgabe
id: p10-wunderkerze
titel: Die Funken der Wunderkerze
niveau: 2
lernziel: 2
kompetenz: begruenden
angabe: |
  Die Funken einer Wunderkerze sind glühende Eisenteilchen mit über $1000\,^\circ\text{C}$. Trotzdem verbrennen sie die Hand nicht, wenn sie darauf fallen. Warum?
teile:
  - typ: auswahl
    optionen:
      - "Die Funken haben zwar eine hohe Temperatur, aber wegen ihrer winzigen Masse eine sehr kleine innere Energie. Sie geben nur sehr wenig Wärme ab."
      - "Die Funken sind gar nicht heiß, das Glühen ist nur Licht."
      - "Die Haut gibt Kälte an die Funken ab und löscht sie."
      - "Die Funken haben keine Temperatur, weil sie so klein sind."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Die Funken sind wirklich über $1000\,^\circ\text{C}$ heiß. Rotes und gelbes Glühen zeigt genau solche Temperaturen an. Entscheidend ist, wie viel Energie sie abgeben können.
      - wert: 2
        meldung: |
          Kälte ist kein Stoff. Es fließt Wärme vom Funken in die Haut. Es ist nur sehr wenig Energie.
      - wert: 3
        meldung: |
          Auch ein winziges Teilchen hat eine Temperatur. Die Temperatur hängt nicht von der Größe ab, die innere Energie schon.
hinweise:
  - Vergleiche Temperatur und innere Energie. Welche der beiden hängt von der Masse ab?
  - Ein Funke wiegt etwa ein Zehntelmilligramm. Wie viel Energie kann so wenig Eisen beim Abkühlen abgeben?
loesung: |
  **Ansatz:** Die Temperatur sagt nur, wie heftig sich die Teilchen bewegen. Wie viel Energie ein Körper abgeben kann, hängt auch von der Zahl der Teilchen ab.
  ---
  **Abschätzung:** Ein Funke von $0{,}1\,\text{mg}$ Eisen gibt beim Abkühlen von $1000\,^\circ\text{C}$ auf Hauttemperatur etwa $10^{-7}\,\text{kg}\cdot 450\,\tfrac{\text{J}}{\text{kg}\,\text{K}}\cdot 965\,\text{K} \approx 0{,}04\,\text{J}$ ab. Das ist winzig.
  ---
  **Antwort:** Hohe Temperatur, aber kaum innere Energie. Die wenige Wärme verteilt sich sofort in der Haut. Ein großes Stück Eisen mit derselben Temperatur würde dagegen schwer verbrennen.
```

```aufgabe
id: p10-schokolade
titel: Wie hoch kommt man mit einer Tafel Schokolade?
niveau: 2
lernziel: 2
kompetenz: modellieren
angabe: |
  Eine Tafel Schokolade ($100\,\text{g}$) liefert laut Packung $530\,\text{kcal}$. Es gilt $1\,\text{kcal} = 4{,}19\,\text{kJ}$.

  a) Wie viel Energie ist das in Joule?

  b) Eine Wanderin ($75\,\text{kg}$) wandelt $25\,\%$ davon in Hubarbeit um. Den Rest gibt ihr Körper als Wärme ab. Wie viele Höhenmeter kann sie damit steigen? Runde auf ganze Meter.
teile:
  - typ: zahl
    label: a) Energie
    loesung: "530*4190"
    einheit: "J"
    anzeige: '2\,220\,700 \approx 2{,}22\cdot 10^{6}'
    fehler:
      - wert: "530*4.19"
        meldung: |
          Eine Kilokalorie sind $4{,}19$ **Kilo**joule, also $4190\,\text{J}$. Dein Ergebnis ist um den Faktor $1000$ zu klein.
      - wert: "530*1000"
        meldung: |
          Du hast nur das „Kilo“ umgerechnet. Eine Kalorie ist $4{,}19\,\text{J}$, nicht $1\,\text{J}$.
  - typ: zahl
    label: b) Höhe
    loesung: "0.25*530*4190/(75*9.81)"
    einheit: "m"
    anzeige: '755'
    toleranz: 4
    fehler:
      - wert: "530*4190/(75*9.81)"
        meldung: |
          Du hast die ganze Energie in Hubarbeit gesteckt. Nur $25\,\%$ werden zu Hubarbeit, der Rest wird zu innerer Energie des Körpers und als Wärme abgegeben.
hinweise:
  - 'Für a) multipliziere die Kilokalorien mit $4190\,\text{J}$ pro Kilokalorie.'
  - 'Für b) setze $25\,\%$ der Energie gleich der Hubarbeit $m\,g\,h$ und löse nach $h$ auf.'
loesung: |
  **Ansatz:** Die Energie aus der Nahrung wird teils zu Hubarbeit und teils zu Wärme. Für die Höhe zählt nur der Anteil, der zu Hubarbeit wird.
  ---
  **a)** $E = 530\,\text{kcal}\cdot 4190\,\tfrac{\text{J}}{\text{kcal}} = 2{,}22\cdot 10^{6}\,\text{J}$.
  ---
  **b)** Hubarbeit $m\,g\,h = 0{,}25\cdot E$. Wir teilen durch $m\,g$: $h = \dfrac{0{,}25\cdot 2{,}22\cdot 10^{6}\,\text{J}}{75\,\text{kg}\cdot 9{,}81\,\text{m/s}^2} = 755\,\text{m}$.
  ---
  **Plausibilität:** Gut $700$ Höhenmeter mit einer Tafel Schokolade passen zur Erfahrung beim Bergwandern. Die übrigen $75\,\%$ heizen den Körper, deshalb schwitzt man beim Aufstieg.
```

```aufgabe
id: p10-joule-ruehrwerk
titel: Wasser durch Rühren erwärmen
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  In einem Nachbau von Joules Versuch sinkt ein Gewicht von $12\,\text{kg}$ jeweils $2{,}0\,\text{m}$ tief. Man lässt es $25$-mal sinken. Das Schaufelrad rührt $0{,}80\,\text{kg}$ Wasser. Nimm an, dass die ganze Arbeit zu innerer Energie des Wassers wird. Für $1\,\text{kg}$ Wasser braucht man $4190\,\text{J}$ pro Kelvin.

  a) Wie viel Arbeit verrichtet das Gewicht insgesamt?

  b) Um wie viel Kelvin erwärmt sich das Wasser? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    label: a) Arbeit
    loesung: "25*12*9.81*2.0"
    einheit: "J"
    anzeige: '5886'
    fehler:
      - wert: "12*9.81*2.0"
        meldung: |
          Das ist die Arbeit bei **einem** Absinken. Das Gewicht sinkt aber $25$-mal.
  - typ: zahl
    label: b) Temperaturerhöhung
    loesung: "25*12*9.81*2.0/(0.80*4190)"
    einheit: "K"
    anzeige: '1{,}76'
    fehler:
      - wert: "25*12*9.81*2.0/4190"
        meldung: |
          Die $4190\,\text{J}$ pro Kelvin gelten für **ein** Kilogramm. Hier sind es $0{,}80\,\text{kg}$, also braucht man $0{,}80\cdot 4190\,\text{J}$ pro Kelvin.
hinweise:
  - 'Bei jedem Absinken wird die potentielle Energie $m\,g\,h$ frei.'
  - 'Teile die gesamte Arbeit durch die Energie, die das Wasser pro Kelvin braucht, also durch $0{,}80\cdot 4190\,\text{J/K}$.'
loesung: |
  **Ansatz:** Die potentielle Energie des sinkenden Gewichts wird über das Schaufelrad zu innerer Energie des Wassers. Das ist Arbeit, keine Wärme.
  ---
  **a)** $W = 25\cdot 12\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot 2{,}0\,\text{m} = 5886\,\text{J}$.
  ---
  **b)** Das Wasser braucht pro Kelvin $0{,}80\,\text{kg}\cdot 4190\,\tfrac{\text{J}}{\text{kg}\,\text{K}} = 3352\,\text{J/K}$. Also $\Delta T = \dfrac{5886\,\text{J}}{3352\,\text{J/K}} = 1{,}76\,\text{K}$.
  ---
  **Plausibilität:** Knapp zwei Kelvin nach $25$ Durchgängen. Joule brauchte also viel Geduld und sehr genaue Thermometer.
```

```aufgabe
id: p10-kaelte-text
titel: „Mach die Tür zu, die Kälte kommt herein!“
niveau: 2
lernziel: 2
kompetenz: begruenden
angabe: |
  Im Winter steht die Haustür offen. Jemand ruft: „Mach die Tür zu, die Kälte kommt herein!“ Formuliere den Vorgang physikalisch korrekt. Verwende dabei die Begriffe Temperatur, innere Energie und Wärme.
teile:
  - typ: text
    muster: |
      Drinnen ist die Temperatur höher als draußen. Deshalb fließt Wärme von drinnen nach draußen, durch die offene Tür vor
      allem mit der strömenden Luft. Dabei nimmt die innere Energie der Luft im Haus ab, und ihre Temperatur sinkt. Es kommt
      keine „Kälte“ herein, denn Kälte ist kein Stoff. Es geht Energie hinaus. Kalte Außenluft strömt zwar herein, aber sie
      bringt keine Kälte mit, sondern nur weniger innere Energie als die Luft, die sie ersetzt.
hinweise:
  - Wo ist die Temperatur höher? In welche Richtung fließt deshalb Wärme?
  - Was passiert mit der inneren Energie der Luft im Haus, wenn Wärme hinausfließt?
loesung: |
  **Ansatz:** Wärme fließt immer von der höheren zur tieferen Temperatur. Drinnen ist es wärmer, also fließt Wärme hinaus.
  ---
  **Folge:** Die Luft im Haus verliert innere Energie, und ihre Temperatur sinkt. Das fühlt sich an, als käme Kälte herein.
  ---
  **Richtig formuliert:** „Mach die Tür zu, sonst geht die Wärme hinaus.“ Kälte ist kein Stoff und kann nicht fließen.
```

```aufgabe
id: p10-bremsen
titel: Wie heiß werden die Bremsscheiben?
niveau: 3
lernziel: 2
kompetenz: modellieren
angabe: |
  Ein Auto ($1400\,\text{kg}$) fährt mit $90\,\text{km/h}$ und bremst bis zum Stillstand. $90\,\%$ der kinetischen Energie landen als innere Energie in den vier Bremsscheiben aus Stahl, die zusammen $24\,\text{kg}$ wiegen. Stahl braucht $450\,\text{J}$ pro Kilogramm und Kelvin.

  a) Wie groß ist die kinetische Energie des Autos?

  b) Um wie viel Kelvin erwärmen sich die Bremsscheiben? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    label: a) kinetische Energie
    loesung: "0.5*1400*(90/3.6)^2"
    einheit: "J"
    anzeige: '437\,500'
    fehler:
      - wert: "0.5*1400*90^2"
        meldung: |
          Die Geschwindigkeit muss in m/s eingesetzt werden. $90\,\text{km/h} = 25\,\text{m/s}$.
  - typ: zahl
    label: b) Temperaturerhöhung
    loesung: "0.9*0.5*1400*(90/3.6)^2/(24*450)"
    einheit: "K"
    anzeige: '36{,}5'
    toleranz: 0.2
    fehler:
      - wert: "0.5*1400*(90/3.6)^2/(24*450)"
        meldung: |
          Nur $90\,\%$ der Energie gehen in die Scheiben. Der Rest wärmt Reifen, Straße und Luft.
hinweise:
  - Rechne die Geschwindigkeit in m/s um und berechne $E_\text{kin} = \tfrac12 m v^2$.
  - 'Die Scheiben bekommen $0{,}9\cdot E_\text{kin}$. Pro Kelvin brauchen sie $24\,\text{kg}\cdot 450\,\text{J/(kg K)}$.'
gefuehrt:
  - text: Wie schnell fährt das Auto in m/s?
    teil: { typ: zahl, loesung: "90/3.6" }
    erklaerung: $90\,\text{km/h} = 90/3{,}6\,\text{m/s} = 25\,\text{m/s}$.
  - text: Berechne die kinetische Energie in Joule.
    teil: { typ: zahl, loesung: "0.5*1400*25^2" }
    erklaerung: $E_\text{kin} = \tfrac12\cdot 1400\,\text{kg}\cdot(25\,\text{m/s})^2 = 437\,500\,\text{J}$.
  - text: Wie viel Energie bekommen die Bremsscheiben?
    teil: { typ: zahl, loesung: "0.9*437500" }
    erklaerung: $0{,}9\cdot 437\,500\,\text{J} = 393\,750\,\text{J}$. Diese Energie wird durch Reibungsarbeit zu innerer Energie der Scheiben.
  - text: Um wie viel Kelvin erwärmen sich die Scheiben?
    teil: { typ: zahl, loesung: "393750/(24*450)", toleranz: 0.2 }
    erklaerung: Pro Kelvin brauchen sie $24\cdot 450\,\text{J} = 10\,800\,\text{J}$. Also $\Delta T = 393\,750/10\,800\,\text{K} = 36{,}5\,\text{K}$.
loesung: |
  **Ansatz:** Beim Bremsen verrichtet die Reibung in den Bremsen Arbeit. Die kinetische Energie des Autos wird dadurch zu innerer Energie der Bremsscheiben. Die Energie kommt also durch Arbeit (Reibung) in die Scheiben, nicht durch einen Temperaturunterschied.
  ---
  **a)** $v = 90/3{,}6\,\text{m/s} = 25\,\text{m/s}$, also $E_\text{kin} = \tfrac12\cdot 1400\,\text{kg}\cdot(25\,\text{m/s})^2 = 437\,500\,\text{J}$.
  ---
  **b)** Die Scheiben erhalten $0{,}9\cdot 437\,500\,\text{J} = 393\,750\,\text{J}$. Sie brauchen pro Kelvin $24\,\text{kg}\cdot 450\,\tfrac{\text{J}}{\text{kg}\,\text{K}} = 10\,800\,\text{J/K}$. Also $\Delta T = 393\,750\,\text{J} / 10\,800\,\text{J/K} = 36{,}5\,\text{K}$.
  ---
  **Plausibilität:** Gut $35\,\text{K}$ bei einer einzigen Bremsung. Bei einer langen Passabfahrt mit vielen Bremsungen werden Bremsscheiben mehrere hundert Grad heiß. Wiederholen: [Kapitel 4: Energie](/lernen/physik1/arbeit-energie-impuls/energie).
```

## Spezifische Wärmekapazität

```aufgabe
id: p10-4-check
art: check
titel: "Vorwissen: Energie für Wasser"
niveau: 1
angabe: |
  Joule fand, dass man für $1\,\text{kg}$ Wasser und $1\,\text{K}$ Erwärmung $4190\,\text{J}$ braucht. Wie viel Energie braucht man dann für $1\,\text{kg}$ Wasser und $10\,\text{K}$?
teile:
  - typ: zahl
    loesung: "4190*10"
    einheit: "J"
    anzeige: '41\,900'
    fehler:
      - wert: "4190"
        meldung: |
          Das reicht nur für $1\,\text{K}$. Für zehnmal so viel Erwärmung braucht man zehnmal so viel Energie.
      - wert: "4190/10"
        meldung: |
          Mehr Erwärmung braucht **mehr** Energie, nicht weniger. Also multiplizieren.
hinweise:
  - Für jedes Kelvin braucht man noch einmal $4190\,\text{J}$.
loesung: |
  Die Energie ist proportional zur Temperaturerhöhung. Für $10\,\text{K}$ braucht man zehnmal so viel wie für $1\,\text{K}$.
  ---
  $10\cdot 4190\,\text{J} = 41\,900\,\text{J}$. Wiederholen: [10.3 Temperatur, innere Energie und Wärme](/lernen/physik1/temperatur-waerme-gase/temperatur-innere-energie-und-waerme), Joules Versuch.
```

Stell einen Topf mit Wasser und eine gleich schwere leere Eisenpfanne auf zwei gleiche Herdplatten. Die
Pfanne ist nach kurzer Zeit sehr heiß, das Wasser erst lauwarm. Beide bekommen gleich viel Wärme, aber
Wasser braucht viel mehr Energie für jedes Kelvin. Wie viel Energie ein Stoff pro Kilogramm und Kelvin
braucht, ist eine Stoffeigenschaft. Sie heißt **spezifische Wärmekapazität**.

### Die Grundgleichung der Wärmelehre

Die Wärme, die ein Körper für eine bestimmte Erwärmung braucht, hängt von drei Dingen ab:

1. von der **Masse**: Doppelt so viel Wasser braucht doppelt so viel Wärme.
2. von der **Temperaturänderung**: Doppelt so viel Erwärmung braucht doppelt so viel Wärme.
3. vom **Stoff**: Wasser braucht pro Kilogramm und Kelvin etwa neunmal so viel wie Eisen.

:::formel[Grundgleichung der Wärmelehre]
$$Q = c\cdot m\cdot\Delta T$$
Dabei ist $Q$ die zugeführte Wärme in J, $m$ die Masse in kg und $\Delta T$ die Temperaturänderung in K.
Die **spezifische Wärmekapazität** $c$ gibt an, wie viel Wärme $1\,\text{kg}$ des Stoffes für $1\,\text{K}$
Erwärmung braucht. Ihre Einheit ist $\tfrac{\text{J}}{\text{kg}\cdot\text{K}}$.

Ist $Q$ positiv, nimmt der Körper Wärme auf und wird wärmer ($\Delta T > 0$). Ist $Q$ negativ, gibt er Wärme
ab und kühlt ab.
:::

Das Wort „spezifisch“ bedeutet hier „pro Kilogramm“. Typische Werte von $c$ in
$\tfrac{\text{J}}{\text{kg}\cdot\text{K}}$:

- Wasser $4190$, Eis $2100$, Wasserdampf $2000$, Speiseöl etwa $2000$.
- Luft (bei konstantem Druck) $1005$, Aluminium $900$, Beton etwa $880$, Glas $800$.
- Eisen und Stahl $450$, Kupfer $385$, Blei $130$.

Das Produkt $C = c\cdot m$ heißt **Wärmekapazität** des Körpers. Sie sagt, wie viel Wärme der ganze Körper
pro Kelvin braucht. Ihre Einheit ist $\text{J/K}$. Im Bild der Wassertanks aus
[10.3 Temperatur, innere Energie und Wärme](/lernen/physik1/temperatur-waerme-gase/temperatur-innere-energie-und-waerme)
ist sie die Breite des Tanks.

:::beispiel[Wie viel Energie braucht ein Vollbad?]
Eine Badewanne mit $150\,\text{L}$ Wasser soll von $15\,^\circ\text{C}$ auf $40\,^\circ\text{C}$ erwärmt werden.

**Schritt 1, Größen bereitstellen:** $150\,\text{L}$ Wasser haben die Masse $m = 150\,\text{kg}$, weil ein Liter
Wasser ein Kilogramm wiegt. Die Temperaturänderung ist $\Delta T = 40\,^\circ\text{C} - 15\,^\circ\text{C} = 25\,\text{K}$.

**Schritt 2, einsetzen:**
$$Q = 4190\,\frac{\text{J}}{\text{kg}\cdot\text{K}}\cdot 150\,\text{kg}\cdot 25\,\text{K} = 1{,}57\cdot 10^{7}\,\text{J}.$$
Kilogramm und Kelvin kürzen sich, es bleibt Joule.

**Schritt 3, in kWh:** $1\,\text{kWh} = 3{,}6\cdot 10^{6}\,\text{J}$, also $Q = 1{,}57\cdot 10^{7}/3{,}6\cdot 10^{6}\,\text{kWh} = 4{,}4\,\text{kWh}$.

**Einordnung:** Ein Durchlauferhitzer mit $21\,\text{kW}$ schafft das in $1{,}57\cdot 10^{7}\,\text{J}/21\,000\,\text{W} \approx 750\,\text{s}$,
also gut zwölf Minuten. Ein Mensch auf einem Fahrrad-Generator leistet dauerhaft etwa $100\,\text{W}$. Er
müsste $4{,}4\,\text{kWh}/0{,}1\,\text{kW} = 44$ Stunden lang treten, also knapp zwei Tage ohne Pause.
:::

:::beispiel[Ein Babyfläschchen im Flaschenwärmer]
Ein Flaschenwärmer mit $300\,\text{W}$ erwärmt $200\,\text{g}$ Milch ($c = 3900\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}$)
von $6\,^\circ\text{C}$ aus dem Kühlschrank auf $37\,^\circ\text{C}$. $80\,\%$ der elektrischen Energie kommen
in der Milch an. Wie lange dauert das?

**Schritt 1, Wärme:** $Q = 3900\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}\cdot 0{,}200\,\text{kg}\cdot 31\,\text{K} = 24\,180\,\text{J}$.
Die Masse haben wir in Kilogramm umgerechnet, weil $c$ pro Kilogramm angegeben ist.

**Schritt 2, Nutzleistung:** Nur $80\,\%$ der $300\,\text{W}$ wärmen die Milch: $P_\text{nutz} = 0{,}80\cdot 300\,\text{W} = 240\,\text{W}$.

**Schritt 3, Zeit:** Aus $P = Q/t$ folgt $t = Q/P_\text{nutz} = 24\,180\,\text{J}/240\,\text{W} = 101\,\text{s}$.

**Antwort:** Knapp zwei Minuten. Watt mal Sekunde ergibt Joule, deshalb kürzen sich die Einheiten zu Sekunden.
:::

:::achtung[Fehler: Die absolute Temperatur statt der Temperaturänderung einsetzen]
Gesucht ist die Wärme, um $2{,}0\,\text{kg}$ Wasser von $20\,^\circ\text{C}$ auf $30\,^\circ\text{C}$ zu erwärmen.
Ein Schüler „rechnet sicherheitshalber in Kelvin“ und setzt $T = 303{,}15\,\text{K}$ ein:
$Q = 4190\cdot 2{,}0\cdot 303{,}15\,\text{J} = 2{,}54\,\text{MJ}$.

In $Q = c\,m\,\Delta T$ steht aber die **Änderung** $\Delta T = 10\,\text{K}$. Richtig ist
$Q = 4190\cdot 2{,}0\cdot 10\,\text{J} = 83{,}8\,\text{kJ}$. Das falsche Ergebnis ist dreißigmal zu groß.
:::

:::achtung[Fehler: Gramm statt Kilogramm einsetzen]
Eine Schülerin erwärmt $250\,\text{g}$ Kupfer ($c = 385\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}$) um $40\,\text{K}$
und rechnet $Q = 385\cdot 250\cdot 40\,\text{J} = 3{,}85\,\text{MJ}$.

Weil $c$ pro **Kilogramm** angegeben ist, muss auch $m$ in Kilogramm stehen: $m = 0{,}250\,\text{kg}$.
Richtig ist $Q = 385\cdot 0{,}250\cdot 40\,\text{J} = 3850\,\text{J}$. Prüfe die Einheiten, dann fällt so etwas auf.
:::

### Nach der Temperaturänderung oder der Masse auflösen

Oft ist nicht $Q$ gesucht, sondern die Temperaturänderung. Dann stellt man die Grundgleichung um. Wir teilen
beide Seiten durch $c\cdot m$ und erhalten $\Delta T = \dfrac{Q}{c\cdot m}$. Siehe Mathematik,
[Formeln umstellen](/lernen/mathe3/gleichungen/formeln-umstellen).

:::beispiel[Ein Kupferblock nimmt Wärme auf]
Ein Kupferblock mit $0{,}50\,\text{kg}$ nimmt $10\,\text{kJ}$ Wärme auf. Um wie viel wird er wärmer?

**Rechnung:** $\Delta T = \dfrac{Q}{c\,m} = \dfrac{10\,000\,\text{J}}{385\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}\cdot 0{,}50\,\text{kg}} = 52\,\text{K}$.

**Vergleich:** Gleich viel Wasser würde mit derselben Wärme nur um $10\,000/(4190\cdot 0{,}50)\,\text{K} = 4{,}8\,\text{K}$
wärmer. Kupfer hat eine kleine, Wasser eine große spezifische Wärmekapazität.
:::

### Warum die große Wärmekapazität des Wassers so wichtig ist

Wasser hat eine außergewöhnlich große spezifische Wärmekapazität. Das hat viele Folgen:

- Wasser ist ein ideales **Kühl- und Heizmittel**. Es transportiert viel Energie pro Kilogramm, zum
  Beispiel im Automotor oder in der Zentralheizung.
- **Meere gleichen die Temperatur aus.** Sie speichern im Sommer riesige Wärmemengen und geben sie im Winter
  ab. Küstenorte haben milde Winter und kühle Sommer. Orte im Landesinneren haben ein **Kontinentalklima**
  mit großen Schwankungen.
- **Land- und Seewind:** Tagsüber erwärmt sich das Land schneller als das Meer. Über dem Land steigt warme
  Luft auf, und vom Meer strömt kühlere Luft nach. Nachts kühlt das Land schneller ab, und der Wind dreht.
- Der menschliche Körper besteht zu etwa $60\,\%$ aus Wasser. Seine Temperatur steigt deshalb bei Anstrengung
  nur langsam.

```aufgabe
id: p10-4-vorhersage-check
art: check
titel: Was wird schneller heiß?
niveau: 1
angabe: |
  Ein Kilogramm Wasser und ein Kilogramm Aluminium bekommen je $9000\,\text{J}$ Wärme. Welcher Körper wird stärker wärmer?
teile:
  - typ: auswahl
    optionen:
      - "Das Wasser"
      - "Das Aluminium"
      - "Beide gleich, weil Masse und Wärme gleich sind"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Wasser hat die viel größere spezifische Wärmekapazität ($4190$ gegenüber $900\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}$). Es braucht pro Kelvin mehr Energie und wird deshalb **weniger** warm.
      - wert: 2
        meldung: |
          Masse und Wärme sind gleich, aber der Stoff ist verschieden. In $\Delta T = Q/(c\,m)$ steht $c$ im Nenner.
hinweise:
  - 'Vergleiche $\Delta T = Q/(c\,m)$ für beide Stoffe.'
loesung: |
  Aus $\Delta T = Q/(c\,m)$ folgt: Bei gleichem $Q$ und $m$ wird der Stoff mit dem **kleineren** $c$ wärmer.
  ---
  Aluminium: $9000/900\,\text{K} = 10\,\text{K}$. Wasser: $9000/4190\,\text{K} = 2{,}1\,\text{K}$.
```

:::merke
**Wärmemengen berechnen:** (1) Masse in kg, bei Wasser $1\,\text{L} = 1\,\text{kg}$. (2) $\Delta T$ als
Differenz bilden, in K oder °C. (3) $Q = c\,m\,\Delta T$ einsetzen, mit Einheiten. (4) Bei Geräten:
$t = Q/P_\text{nutz}$ mit $P_\text{nutz} = \eta\cdot P$, wobei der **Wirkungsgrad** $\eta$ (griechisch „eta“) der
Anteil der Leistung ist, der im Körper ankommt.
:::

```reflexion
frage: Warum verbrennt man sich bei einer frisch gebackenen Pizza eher an der Tomatensoße als am dünnen Teigrand, obwohl beide aus demselben Ofen kommen und anfangs gleich heiß sind?
antwort: |
  Die Tomatensoße besteht großteils aus Wasser und hat deshalb eine große spezifische Wärmekapazität. Bei gleicher
  Temperatur und gleicher Masse speichert sie mehr innere Energie und gibt beim Abkühlen auf Mundtemperatur mehr Wärme
  ab. Der trockene Teigrand hat eine kleinere Wärmekapazität und kühlt schnell ab, ohne viel Wärme abzugeben.
```

### Aufgaben zur spezifischen Wärmekapazität

```aufgabe
id: p10-waerme-wasser
titel: Nudelwasser zum Kochen bringen
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Wie viel Wärme braucht man, um $3{,}0\,\text{L}$ Wasser von $12\,^\circ\text{C}$ auf $100\,^\circ\text{C}$ zu erwärmen? Gib das Ergebnis in Joule an.
teile:
  - typ: zahl
    loesung: "4190*3.0*88"
    einheit: "J"
    anzeige: '1\,106\,160 \approx 1{,}11\cdot 10^{6}'
    fehler:
      - wert: "4190*3.0*100"
        meldung: |
          Du hast die Endtemperatur als $\Delta T$ eingesetzt. Das Wasser startet aber bei $12\,^\circ\text{C}$, also ist $\Delta T = 88\,\text{K}$.
      - wert: "4190*3000*88"
        meldung: |
          Die Masse muss in Kilogramm stehen, weil $c$ pro Kilogramm angegeben ist. $3{,}0\,\text{L}$ Wasser sind $3{,}0\,\text{kg}$.
      - wert: "4190*3.0*(100+273.15)"
        meldung: |
          In der Grundgleichung steht die **Temperaturänderung**, nicht die absolute Temperatur. $\Delta T = 100\,^\circ\text{C} - 12\,^\circ\text{C} = 88\,\text{K}$.
hinweise:
  - '$Q = c\,m\,\Delta T$ mit $m = 3{,}0\,\text{kg}$ und $\Delta T$ als Differenz.'
loesung: |
  **Ansatz:** Das Wasser wird ohne Phasenübergang erwärmt, also gilt $Q = c\,m\,\Delta T$ mit $m = 3{,}0\,\text{kg}$ und $\Delta T = 88\,\text{K}$.
  ---
  **Rechnung:** $Q = 4190\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}\cdot 3{,}0\,\text{kg}\cdot 88\,\text{K} = 1\,106\,160\,\text{J} \approx 1{,}1\,\text{MJ}$.
  ---
  **Einordnung:** Das sind etwa $0{,}31\,\text{kWh}$. Mehr als ein Megajoule für einen Topf Nudelwasser, deshalb dauert das Kochen so lange.
```

```aufgabe
id: p10-c-umstellen
titel: Wie warm wird der Kupferdraht?
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Eine Kupferspule mit $0{,}80\,\text{kg}$ ($c = 385\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}$) nimmt im Betrieb $12\,320\,\text{J}$ Wärme auf. Um wie viel Kelvin erwärmt sie sich?
teile:
  - typ: zahl
    loesung: "12320/(0.80*385)"
    einheit: "K"
    anzeige: '40'
    fehler:
      - wert: "12320*0.80/385"
        meldung: |
          Die Masse gehört in den Nenner. Aus $Q = c\,m\,\Delta T$ folgt $\Delta T = Q/(c\cdot m)$: Man teilt durch $c$ **und** durch $m$.
      - wert: "12320/385"
        meldung: |
          Du hast die Masse vergessen. Das wäre die Erwärmung von genau $1\,\text{kg}$ Kupfer.
hinweise:
  - 'Teile beide Seiten von $Q = c\,m\,\Delta T$ durch $c\cdot m$.'
loesung: |
  **Ansatz:** Gesucht ist $\Delta T$. Wir teilen $Q = c\,m\,\Delta T$ auf beiden Seiten durch $c\cdot m$ und erhalten $\Delta T = \dfrac{Q}{c\,m}$.
  ---
  **Rechnung:** $\Delta T = \dfrac{12\,320\,\text{J}}{385\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}\cdot 0{,}80\,\text{kg}} = \dfrac{12\,320\,\text{J}}{308\,\text{J/K}} = 40\,\text{K}$.
  ---
  **Probe:** $385\cdot 0{,}80\cdot 40\,\text{J} = 12\,320\,\text{J}$. Das stimmt.
```

```aufgabe
id: p10-wasserkocher
titel: Wasserkocher
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Ein Wasserkocher mit $2200\,\text{W}$ erwärmt $1{,}5\,\text{L}$ Wasser von $20\,^\circ\text{C}$ auf $100\,^\circ\text{C}$. $85\,\%$ der elektrischen Energie gehen ins Wasser, der Rest erwärmt Gehäuse und Luft. Wie lange dauert das? Gib die Zeit in Sekunden an.
teile:
  - typ: zahl
    loesung: "4190*1.5*80/(0.85*2200)"
    einheit: "s"
    anzeige: '269'
    fehler:
      - wert: "4190*1.5*80/2200"
        meldung: |
          Du hast so gerechnet, als käme die ganze Leistung im Wasser an. Nur $85\,\%$ davon wärmen das Wasser, also dauert es **länger**.
      - wert: "4190*1.5*80/(1.15*2200)"
        meldung: |
          Die Nutzleistung ist $85\,\%$ der elektrischen Leistung, also $0{,}85\cdot 2200\,\text{W}$, nicht $115\,\%$.
hinweise:
  - Berechne zuerst die nötige Wärme mit $Q = c\,m\,\Delta T$.
  - 'Die Nutzleistung ist $0{,}85\cdot 2200\,\text{W}$. Dann gilt $t = Q/P_\text{nutz}$.'
loesung: |
  **Ansatz:** Das Gerät liefert pro Sekunde $85\,\%$ seiner Leistung als Wärme an das Wasser. Die Zeit ist die nötige Wärme geteilt durch diese Nutzleistung.
  ---
  **Wärme:** $Q = 4190\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}\cdot 1{,}5\,\text{kg}\cdot 80\,\text{K} = 502\,800\,\text{J}$.
  ---
  **Nutzleistung:** $P_\text{nutz} = 0{,}85\cdot 2200\,\text{W} = 1870\,\text{W}$.
  ---
  **Zeit:** $t = \dfrac{502\,800\,\text{J}}{1870\,\text{W}} = 269\,\text{s} \approx 4{,}5\,\text{min}$. Das passt zur Erfahrung mit einem Wasserkocher.
```

```aufgabe
id: p10-proportional-heizen
titel: Doppelte Menge, halbe Leistung
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: |
  Ein Tauchsieder bringt eine Wassermenge in $4$ Minuten von $20\,^\circ\text{C}$ auf $60\,^\circ\text{C}$. Jetzt nimmt man die **doppelte** Wassermenge und einen Tauchsieder mit der **halben** Leistung. Verluste werden vernachlässigt. Um welchen Faktor ändert sich die Aufheizzeit für dieselbe Erwärmung?
teile:
  - typ: zahl
    loesung: "2/(1/2)"
    anzeige: '4'
    fehler:
      - wert: "1"
        meldung: |
          Die beiden Änderungen heben sich nicht auf. Doppelte Masse braucht doppelt so viel Wärme, **und** halbe Leistung liefert sie halb so schnell. Beide verlängern die Zeit.
      - wert: "2"
        meldung: |
          Du hast nur eine der beiden Änderungen berücksichtigt. Die Zeit hängt von der Masse **und** von der Leistung ab.
hinweise:
  - 'Schreibe die Zeit als Formel: $t = Q/P = c\,m\,\Delta T/P$.'
  - Was passiert mit dem Bruch, wenn der Zähler doppelt und der Nenner halb so groß wird?
loesung: |
  **Ansatz:** Die Aufheizzeit ist $t = \dfrac{Q}{P} = \dfrac{c\,m\,\Delta T}{P}$. Die Zeit ist also proportional zur Masse und umgekehrt proportional zur Leistung.
  ---
  **Masse:** Doppelte Masse verdoppelt den Zähler, also die Zeit.
  ---
  **Leistung:** Halbe Leistung halbiert den Nenner, das verdoppelt die Zeit noch einmal. Insgesamt ändert sich die Zeit um den Faktor $2\cdot 2 = 4$, also von $4$ auf $16$ Minuten.
```

```aufgabe
id: p10-alu-eisen
titel: Aluminium oder Eisen?
niveau: 2
lernziel: 3
kompetenz: begruenden
angabe: |
  Ein Aluminiumblock ($c = 900\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}$) und ein Eisenblock ($c = 450\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}$) haben dieselbe Masse und dieselbe Anfangstemperatur. Beide bekommen gleich viel Wärme. Welche Aussage stimmt?
teile:
  - typ: auswahl
    optionen:
      - "Der Eisenblock wird doppelt so stark wärmer wie der Aluminiumblock."
      - "Der Aluminiumblock wird doppelt so stark wärmer, weil Aluminium ein besserer Wärmeleiter ist."
      - "Beide werden gleich warm, weil sie gleich viel Wärme bekommen."
      - "Der Aluminiumblock wird doppelt so stark wärmer, weil sein $c$ doppelt so groß ist."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Die Wärmeleitfähigkeit bestimmt nur, wie **schnell** sich die Wärme im Block verteilt. Wie stark er am Ende wärmer wird, hängt von $c$ ab.
      - wert: 2
        meldung: |
          Gleich viel Wärme bedeutet nicht gleich viel Erwärmung. Der Stoff spielt eine Rolle, über die spezifische Wärmekapazität.
      - wert: 3
        meldung: |
          Ein großes $c$ bedeutet: Der Stoff braucht **viel** Energie pro Kelvin. Er wird also **weniger** warm. In $\Delta T = Q/(c\,m)$ steht $c$ im Nenner.
hinweise:
  - 'Stelle $Q = c\,m\,\Delta T$ nach $\Delta T$ um.'
  - Bei gleichem $Q$ und $m$ ist $\Delta T$ umgekehrt proportional zu $c$.
loesung: |
  **Ansatz:** $\Delta T = \dfrac{Q}{c\,m}$. Bei gleichem $Q$ und gleichem $m$ ist $\Delta T$ umgekehrt proportional zu $c$.
  ---
  **Vergleich:** Eisen hat das halbe $c$ von Aluminium. Also wird Eisen doppelt so stark wärmer.
  ---
  **Antwort:** Die erste Aussage stimmt. Merke: Ein großes $c$ heißt „träge beim Erwärmen“.
```

```aufgabe
id: p10-kuestenklima-text
titel: Warum ist das Klima am Meer mild?
niveau: 2
lernziel: 3
kompetenz: begruenden
angabe: |
  Brest an der französischen Atlantikküste und Straßburg im Landesinneren liegen auf ähnlicher Breite. In Brest liegt der Unterschied zwischen dem wärmsten und dem kältesten Monat bei etwa $10\,\text{K}$, in Straßburg bei etwa $18\,\text{K}$. Erkläre den Unterschied mit der spezifischen Wärmekapazität.
teile:
  - typ: text
    muster: |
      Wasser hat eine viel größere spezifische Wärmekapazität als Gestein und Boden. Das Meer nimmt im Sommer sehr viel
      Wärme auf, erwärmt sich dabei aber nur wenig. Im Winter gibt es diese Wärme langsam wieder ab und kühlt dabei nur
      wenig ab. Die Luft an der Küste wird vom Meer auf ähnlicher Temperatur gehalten. Im Landesinneren fehlt dieser
      Ausgleich: Boden erwärmt sich im Sommer stark und kühlt im Winter stark ab, deshalb sind die Schwankungen größer.
hinweise:
  - Welcher Stoff hat die größere spezifische Wärmekapazität, Wasser oder Gestein?
  - Was bedeutet eine große Wärmekapazität für die Temperaturänderung bei gleicher Wärmeaufnahme?
loesung: |
  **Ansatz:** Bei gleicher aufgenommener Wärme ändert sich die Temperatur umso weniger, je größer $c\,m$ ist.
  ---
  **Meer:** Wasser hat ein großes $c$, und das Meer hat eine riesige Masse. Es puffert die Jahreszeiten ab und hält die Küstenluft gleichmäßig.
  ---
  **Landesinneres:** Boden hat ein kleines $c$ und nur eine dünne Schicht nimmt teil. Er erwärmt sich im Sommer stark und kühlt im Winter stark ab.
```

```aufgabe
id: p10-c-aus-diagramm
titel: Die Wärmekapazität von Öl aus einem Diagramm
niveau: 3
lernziel: 3
kompetenz: anwenden
angabe: |
  Zwei Bechergläser enthalten je $0{,}50\,\text{kg}$ Wasser beziehungsweise Speiseöl. Beide werden mit baugleichen Tauchsiedern gleicher Leistung erwärmt. Das Diagramm zeigt die gemessenen Temperaturen. Verluste werden vernachlässigt.

  ```plot
  x: [0, 320]
  y: [0, 60]
  achsen: { x: "Zeit in s", y: "Temperatur in °C" }
  graphen:
    - { f: "20 + 30*x/300", von: 0, bis: 300, farbe: 0, label: "Wasser" }
    - { f: "20 + 30*x/150", von: 0, bis: 150, farbe: 1, label: "Öl" }
  punkte:
    - { x: 300, y: 50 }
    - { x: 150, y: 50 }
  ```

  a) Lies ab, wie lange Wasser und Öl brauchen, um von $20\,^\circ\text{C}$ auf $50\,^\circ\text{C}$ zu kommen. Wie groß ist die Leistung eines Tauchsieders? Runde auf ganze Watt.

  b) Bestimme die spezifische Wärmekapazität des Öls.
teile:
  - typ: zahl
    label: a) Leistung
    loesung: "4190*0.5*30/300"
    einheit: "W"
    anzeige: '209{,}5 \approx 210'
    toleranz: 1
    fehler:
      - wert: "4190*0.5*50/300"
        meldung: |
          Du hast die Endtemperatur statt der Temperaturänderung eingesetzt. Das Wasser wird von $20\,^\circ\text{C}$ auf $50\,^\circ\text{C}$ erwärmt, also um $30\,\text{K}$.
  - typ: zahl
    label: b) c des Öls
    loesung: "4190*150/300"
    einheit: "J/(kg K)"
    anzeige: '2095'
    toleranz: 15
    fehler:
      - wert: "4190*300/150"
        meldung: |
          Das Öl wird **schneller** warm als das Wasser. Es braucht also weniger Energie pro Kilogramm und Kelvin, sein $c$ muss kleiner sein als das von Wasser.
hinweise:
  - Lies die Zeiten am Punkt $50\,^\circ\text{C}$ ab. Das Wasser braucht $300\,\text{s}$, das Öl $150\,\text{s}$.
  - 'Für a): Die Leistung ist $P = Q/t$ mit $Q = c_\text{W}\,m\,\Delta T$ für das Wasser.'
  - 'Für b): Gleiche Leistung, gleiche Masse und gleiches $\Delta T$. Dann ist $c$ proportional zur benötigten Zeit.'
gefuehrt:
  - text: Wie viel Wärme nimmt das Wasser auf, bis es $50\,^\circ\text{C}$ hat?
    teil: { typ: zahl, loesung: "4190*0.5*30" }
    erklaerung: $Q = 4190\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}\cdot 0{,}50\,\text{kg}\cdot 30\,\text{K} = 62\,850\,\text{J}$.
  - text: Welche Leistung hat ein Tauchsieder, wenn das Wasser dafür $300\,\text{s}$ braucht?
    teil: { typ: zahl, loesung: "62850/300", toleranz: 1 }
    erklaerung: $P = Q/t = 62\,850\,\text{J}/300\,\text{s} = 209{,}5\,\text{W}$.
  - text: Wie viel Wärme bekommt das Öl in $150\,\text{s}$?
    teil: { typ: zahl, loesung: "209.5*150" }
    erklaerung: $Q_\text{Öl} = 209{,}5\,\text{W}\cdot 150\,\text{s} = 31\,425\,\text{J}$.
  - text: Berechne die spezifische Wärmekapazität des Öls.
    teil: { typ: zahl, loesung: "31425/(0.5*30)", toleranz: 15 }
    erklaerung: $c_\text{Öl} = Q/(m\,\Delta T) = 31\,425\,\text{J}/(0{,}50\,\text{kg}\cdot 30\,\text{K}) = 2095\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}$.
loesung: |
  **Ansatz:** Beide Tauchsieder liefern dieselbe Leistung. Das Wasser mit bekanntem $c$ dient als Eichung: Aus seiner Kurve bestimmen wir die Leistung, damit dann das $c$ des Öls.
  ---
  **Ablesen:** Wasser erreicht $50\,^\circ\text{C}$ nach $300\,\text{s}$, Öl nach $150\,\text{s}$. Beide werden um $\Delta T = 30\,\text{K}$ erwärmt.
  ---
  **a)** $Q_\text{W} = 4190\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}\cdot 0{,}50\,\text{kg}\cdot 30\,\text{K} = 62\,850\,\text{J}$, also $P = 62\,850\,\text{J}/300\,\text{s} = 209{,}5\,\text{W} \approx 210\,\text{W}$.
  ---
  **b)** Das Öl bekommt $Q = 209{,}5\,\text{W}\cdot 150\,\text{s} = 31\,425\,\text{J}$. Also $c_\text{Öl} = \dfrac{31\,425\,\text{J}}{0{,}50\,\text{kg}\cdot 30\,\text{K}} = 2095\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}$.
  ---
  **Plausibilität:** Das Öl braucht halb so lange, also hat es etwa das halbe $c$ von Wasser. Der Wert passt zu Tabellenwerten für Speiseöl (etwa $2000\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}$).
```

```aufgabe
id: p10-fermi-duschen
titel: Abschätzung – Energie fürs Duschen in Österreich
niveau: 3
lernziel: 3
kompetenz: modellieren
angabe: |
  Schätze ab, wie viel Energie alle Menschen in Österreich an einem Tag zum Erwärmen von Duschwasser brauchen. Verwende diese Annahmen: $9$ Millionen Menschen, jede Person duscht einmal am Tag, eine Dusche verbraucht $40\,\text{L}$ Wasser, das von $10\,^\circ\text{C}$ auf $38\,^\circ\text{C}$ erwärmt wird.

  a) Wie viel Wärme braucht eine Dusche? Gib das Ergebnis in kWh an.

  b) Wie viel ist das für ganz Österreich an einem Tag, in Gigawattstunden ($1\,\text{GWh} = 10^{6}\,\text{kWh}$)?
teile:
  - typ: zahl
    label: a) eine Dusche
    loesung: "4190*40*28/3.6e6"
    einheit: "kWh"
    anzeige: '1{,}30'
    toleranz: 0.02
    fehler:
      - wert: "4190*40*28"
        meldung: |
          Das ist das Ergebnis in Joule. Gefragt sind Kilowattstunden: Teile durch $3{,}6\cdot 10^{6}\,\text{J/kWh}$.
      - wert: "4190*40*38/3.6e6"
        meldung: |
          Das Wasser startet nicht bei $0\,^\circ\text{C}$. Die Erwärmung ist $38 - 10 = 28\,\text{K}$.
  - typ: zahl
    label: b) ganz Österreich
    loesung: "9e6*4190*40*28/3.6e6/1e6"
    einheit: "GWh"
    anzeige: '11{,}7'
    toleranz: 0.2
    fehler:
      - wert: "9e6*4190*40*28/3.6e6"
        meldung: |
          Das ist das Ergebnis in kWh. Eine Gigawattstunde sind eine Million Kilowattstunden.
hinweise:
  - 'Für a): $Q = c\,m\,\Delta T$ mit $m = 40\,\text{kg}$ und $\Delta T = 28\,\text{K}$, dann in kWh umrechnen.'
  - Für b) multipliziere mit der Zahl der Duschen pro Tag und rechne in GWh um.
loesung: |
  **Ansatz:** Eine **Abschätzung** (auch Fermi-Abschätzung genannt) rechnet mit runden, plausiblen Annahmen. Das Ergebnis stimmt nur in der Größenordnung, ist aber trotzdem aussagekräftig. Siehe [Kapitel 1: Abschätzen und Größenordnungen](/lernen/physik1/groessen-einheiten-messen/abschaetzen-und-groessenordnungen).
  ---
  **a)** $Q = 4190\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}\cdot 40\,\text{kg}\cdot 28\,\text{K} = 4{,}69\cdot 10^{6}\,\text{J}$. Geteilt durch $3{,}6\cdot 10^{6}\,\text{J/kWh}$ ergibt das $1{,}30\,\text{kWh}$.
  ---
  **b)** $9\cdot 10^{6}\cdot 1{,}30\,\text{kWh} = 1{,}17\cdot 10^{7}\,\text{kWh} = 11{,}7\,\text{GWh}$ pro Tag.
  ---
  **Einordnung:** Das leistungsstärkste österreichische Donaukraftwerk, Altenwörth, erzeugt in einem durchschnittlichen Jahr etwa $1{,}97\,\text{TWh}$ (Regelarbeitsvermögen laut Betreiber VERBUND). Das sind rund $5{,}4\,\text{GWh}$ pro Tag. Das tägliche Duschwasser braucht also so viel Energie, wie gut zwei solche Kraftwerke an einem Tag liefern.
```

## Mischungsrechnung und Kalorimeter

```aufgabe
id: p10-5-check
art: check
titel: "Vorwissen: der gewichtete Mittelwert"
niveau: 1
angabe: |
  Ein Händler mischt $2\,\text{kg}$ Kaffee zu $3$ Euro pro Kilogramm mit $1\,\text{kg}$ Kaffee zu $6$ Euro pro Kilogramm. Was kostet ein Kilogramm der Mischung?
teile:
  - typ: zahl
    loesung: "(2*3+1*6)/3"
    einheit: "Euro/kg"
    anzeige: '4'
    fehler:
      - wert: "(3+6)/2"
        meldung: |
          Das ist der einfache Mittelwert. Vom billigen Kaffee ist aber doppelt so viel in der Mischung. Jeder Preis muss mit seiner Menge gewichtet werden.
hinweise:
  - Berechne den Gesamtpreis und teile durch die Gesamtmenge.
loesung: |
  Gesamtpreis: $2\cdot 3 + 1\cdot 6 = 12$ Euro für $3\,\text{kg}$.
  ---
  Pro Kilogramm: $12/3 = 4$ Euro. Das ist ein **gewichteter Mittelwert**: Er liegt näher am Preis der größeren Menge. Wiederholen: Mathematik, [Mittelwert, Median und Modus](/lernen/mathe3/statistik/mittelwert-median-und-modus).
```

Gießt du heißes und kaltes Wasser zusammen, stellt sich eine Temperatur dazwischen ein. Wo genau sie
liegt, berechnest du mit einer **Energiebilanz**. Diese Rechnung heißt **Mischungsrechnung**. Sie ist
eine der häufigsten Aufgaben in der schriftlichen Prüfung.

### Die Energiebilanz

Der Grundgedanke ist Buchhaltung. Wir nehmen an, dass keine Wärme an die Umgebung verloren geht. Dann
gibt der heiße Körper genau so viel Wärme ab, wie der kalte aufnimmt. Am Ende haben beide dieselbe
**Mischungstemperatur** $T_m$. In Worten:

> abgegebene Wärme des heißen Körpers $=$ aufgenommene Wärme des kalten Körpers

Jede Seite schreiben wir mit $Q = c\,m\,\Delta T$. Damit beide Seiten positiv sind, bilden wir jede
Temperaturdifferenz als „größere minus kleinere Temperatur“:

$$c_1\,m_1\,(T_1 - T_m) = c_2\,m_2\,(T_m - T_2)$$

Dabei ist Körper 1 der heiße mit der Anfangstemperatur $T_1$ und Körper 2 der kalte mit $T_2$. Links steht,
was der heiße abgibt, rechts, was der kalte aufnimmt. Lösen wir nach $T_m$ auf, erhalten wir:

$$T_m = \frac{c_1\,m_1\,T_1 + c_2\,m_2\,T_2}{c_1\,m_1 + c_2\,m_2}$$

Das ist ein **gewichteter Mittelwert** der beiden Temperaturen. Gewichtet wird mit den Wärmekapazitäten
$c\,m$. Die Mischungstemperatur liegt immer näher an der Temperatur des Körpers mit der größeren
Wärmekapazität. Bei gleichen Stoffen kürzt sich $c$, und man mittelt einfach mit den Massen.

In der Mischungsrechnung darfst du Temperaturen in °C einsetzen. Es gehen nur Differenzen ein, und die
sind in °C und K gleich.

:::beispiel[Badewasser mischen]
In eine Wanne laufen $4\,\text{L}$ Wasser mit $70\,^\circ\text{C}$ und $6\,\text{L}$ Wasser mit $15\,^\circ\text{C}$.
Welche Temperatur hat das Gemisch?

**Schritt 1, Bilanz in Worten:** Das heiße Wasser gibt so viel Wärme ab, wie das kalte aufnimmt.

**Schritt 2, Gleichung:** Beide sind Wasser, also kürzt sich $c$:
$4\,\text{kg}\cdot(70 - T_m) = 6\,\text{kg}\cdot(T_m - 15)$.

**Schritt 3, ausmultiplizieren und sortieren:** $280 - 4T_m = 6T_m - 90$. Wir addieren $4T_m$ und $90$ auf
beiden Seiten: $370 = 10\,T_m$. Also $T_m = 37\,^\circ\text{C}$.

**Probe:** Das heiße Wasser gibt $c\cdot 4\cdot 33$ ab, das kalte nimmt $c\cdot 6\cdot 22$ auf. Beides ist
$c\cdot 132$. Die Bilanz stimmt.
:::

:::beispiel[Ein kalter Topf frisst Wärme]
Eine Köchin gießt $1{,}0\,\text{L}$ kochendes Wasser ($100\,^\circ\text{C}$) in einen $1{,}0\,\text{kg}$ schweren
Gusseisentopf ($c = 450\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}$) mit Zimmertemperatur $20\,^\circ\text{C}$.

**Schritt 1, Wärmekapazitäten:** Wasser $C_1 = 4190\cdot 1{,}0 = 4190\,\text{J/K}$. Topf $C_2 = 450\cdot 1{,}0 = 450\,\text{J/K}$.

**Schritt 2, gewichteter Mittelwert:**
$$T_m = \frac{4190\cdot 100 + 450\cdot 20}{4190 + 450}\,^\circ\text{C} = \frac{428\,000}{4640}\,^\circ\text{C} = 92{,}2\,^\circ\text{C}.$$

**Deutung:** Der Topf kostet das Wasser fast $8\,\text{K}$. Wer Nudeln sofort sprudelnd kochen will, wärmt den
Topf vor. Das Ergebnis liegt nahe bei $100\,^\circ\text{C}$, weil das Wasser die viel größere Wärmekapazität hat.
:::

:::achtung[Fehler: Beide Differenzen in dieselbe Richtung bilden]
$300\,\text{g}$ Wasser mit $90\,^\circ\text{C}$ werden mit $200\,\text{g}$ Wasser mit $15\,^\circ\text{C}$ gemischt.
Eine Schülerin schreibt $0{,}3\,(90 - T_m) = 0{,}2\,(15 - T_m)$. Das ergibt $27 - 0{,}3T_m = 3 - 0{,}2T_m$, also
$T_m = 240\,^\circ\text{C}$.

Das ist unmöglich: Eine Mischung kann nicht heißer werden als ihr heißester Teil. Rechts muss
$(T_m - 15)$ stehen, denn das kalte Wasser wird **wärmer**. Richtig ist
$T_m = (0{,}3\cdot 90 + 0{,}2\cdot 15)/0{,}5\,^\circ\text{C} = 60\,^\circ\text{C}$.
:::

:::achtung[Fehler: Bei verschiedenen Stoffen nur mit den Massen mitteln]
$1\,\text{kg}$ Aluminium mit $100\,^\circ\text{C}$ kommt in $1\,\text{kg}$ Wasser mit $20\,^\circ\text{C}$. Ein Schüler
rechnet „gleiche Massen, also die Mitte“: $T_m = 60\,^\circ\text{C}$.

Das Mitteln mit den Massen ist nur bei **gleichen** Stoffen erlaubt. Hier muss man mit $c\,m$ gewichten:
$T_m = \dfrac{900\cdot 100 + 4190\cdot 20}{900 + 4190}\,^\circ\text{C} = 34{,}1\,^\circ\text{C}$. Das Wasser mit
seiner großen Wärmekapazität setzt sich durch.
:::

### Das Kalorimeter

Mit einem **Kalorimeter** misst man Wärmemengen und spezifische Wärmekapazitäten. Es ist ein gut isoliertes
Gefäß mit Wasser, einem Thermometer und einem Rührer, ähnlich einer Thermoskanne. Um das $c$ eines unbekannten
Metalls zu bestimmen, erhitzt man eine Probe in siedendem Wasser auf $100\,^\circ\text{C}$, wirft sie ins
Kalorimeter und misst die Mischungstemperatur.

Für genaue Messungen muss man berücksichtigen, dass auch das **Gefäß** selbst Wärme aufnimmt. Seine
Wärmekapazität $C_K$ in J/K nennt man auch den **Wasserwert** des Kalorimeters. Die Bilanz bekommt dann einen
dritten Term:

$$c_P\,m_P\,(T_P - T_m) = (c_W\,m_W + C_K)\,(T_m - T_W)$$

Dabei ist $P$ die heiße Probe und $W$ das Wasser im Kalorimeter. Gefäß und Wasser starten bei derselben
Temperatur $T_W$, weil sie im Gleichgewicht sind. Deshalb steht $C_K$ einfach neben $c_W\,m_W$.

:::beispiel[Den Wasserwert eines Kalorimeters bestimmen]
In einem Kalorimeter sind $200\,\text{g}$ Wasser mit $20{,}0\,^\circ\text{C}$. Man gießt $100\,\text{g}$ Wasser mit
$60{,}0\,^\circ\text{C}$ dazu. Am Ende zeigt das Thermometer $32{,}0\,^\circ\text{C}$.

**Schritt 1, abgegeben:** Das heiße Wasser gibt $4190\cdot 0{,}100\cdot 28{,}0\,\text{J} = 11\,732\,\text{J}$ ab.

**Schritt 2, vom kalten Wasser aufgenommen:** $4190\cdot 0{,}200\cdot 12{,}0\,\text{J} = 10\,056\,\text{J}$.

**Schritt 3, der Rest ging ins Gefäß:** $11\,732\,\text{J} - 10\,056\,\text{J} = 1676\,\text{J}$ bei einer Erwärmung
um $12{,}0\,\text{K}$. Also $C_K = 1676\,\text{J}/12{,}0\,\text{K} = 140\,\text{J/K}$.

**Deutung:** Das Gefäß verhält sich wie $140/4190\,\text{kg} = 33\,\text{g}$ zusätzliches Wasser. Daher kommt
der Name „Wasserwert“.
:::

```aufgabe
id: p10-5-widget-check
art: check
titel: "Vorhersage: viel kaltes Wasser"
niveau: 1
angabe: |
  Zu $1\,\text{kg}$ Wasser mit $80\,^\circ\text{C}$ gießt man immer mehr Wasser mit $20\,^\circ\text{C}$. Was passiert mit der Mischungstemperatur, wenn die zugegossene Menge sehr groß wird?
teile:
  - typ: auswahl
    optionen:
      - "Sie nähert sich $50\\,^\\circ\\text{C}$, der Mitte."
      - "Sie nähert sich $20\\,^\\circ\\text{C}$."
      - "Sie sinkt unter $20\\,^\\circ\\text{C}$."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Die Mitte gilt nur bei **gleichen** Massen. Bei sehr viel kaltem Wasser hat das kalte Wasser das größere Gewicht im Mittelwert.
      - wert: 2
        meldung: |
          Ein gewichteter Mittelwert liegt immer zwischen den beiden Temperaturen. Unter $20\,^\circ\text{C}$ kann die Mischung nicht fallen.
hinweise:
  - Der gewichtete Mittelwert liegt näher an der Temperatur der größeren Menge.
loesung: |
  Je mehr kaltes Wasser, desto stärker zählt seine Temperatur im gewichteten Mittel.
  ---
  Die Mischungstemperatur nähert sich deshalb $20\,^\circ\text{C}$, erreicht sie aber nie ganz. Prüfe das mit dem Regler.
```

```widget
name: parameter
titel: Mischungstemperatur von zwei Wassermengen
props:
  f: "(m1*T1 + x*T2)/(m1 + x)"
  parameter:
    - { name: m1, min: 0.1, max: 5, step: 0.1, wert: 1 }
    - { name: T1, min: 0, max: 100, step: 1, wert: 80 }
    - { name: T2, min: 0, max: 100, step: 1, wert: 20 }
  x: [0, 5]
  y: [0, 100]
```

Die Kurve zeigt die Mischungstemperatur in °C, wenn man zu $m_1$ Kilogramm Wasser der Temperatur $T_1$ eine
Menge $x$ (in kg) Wasser der Temperatur $T_2$ gießt. Bei $x = m_1$ liegt sie genau in der Mitte. Mit großem
$x$ nähert sie sich $T_2$. Stell $T_2$ höher als $T_1$ ein: Dann steigt die Kurve, und die Rechnung bleibt
dieselbe.

:::merke
**Mischungsaufgaben in vier Schritten:**

1. Schreib die Bilanz in Worten hin. Was der heiße Körper abgibt, nimmt der kalte auf.
2. Drück jeden Körper mit $c\,m\,\Delta T$ aus. Bilde jede Differenz positiv, also größere minus kleinere
   Temperatur. Ein Kalorimetergefäß bekommt seinen Wasserwert $C_K$ dazu.
3. Löse nach $T_m$ oder nach der gesuchten Größe auf.
4. Mach die Probe. $T_m$ muss zwischen den Anfangstemperaturen liegen, und zwar näher an der Temperatur des
   Körpers mit der größeren Wärmekapazität.
:::

```reflexion
frage: Warum darf man bei Mischungsaufgaben in Grad Celsius rechnen, bei den Gasgesetzen aber nicht?
antwort: |
  In der Mischungsrechnung kommen nur Temperaturdifferenzen vor, etwa $T_1 - T_m$. Eine Differenz ist in °C und in K
  gleich groß, weil sich die Verschiebung um $273{,}15$ heraushebt. Auch in der aufgelösten Formel für $T_m$ ist alles
  in Ordnung: Ein gewichteter Mittelwert verschiebt sich einfach mit, wenn man alle Temperaturen verschiebt. In den
  Gasgesetzen steht die Temperatur dagegen allein als Faktor, etwa $p/T$. Dort braucht man den echten Nullpunkt, also Kelvin.
```

### Aufgaben zur Mischungsrechnung

```aufgabe
id: p10-mischung
titel: Heißes und kaltes Wasser mischen
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  $250\,\text{g}$ Wasser mit $85\,^\circ\text{C}$ werden mit $750\,\text{g}$ Wasser mit $25\,^\circ\text{C}$ gemischt. Welche Mischungstemperatur stellt sich ein, wenn keine Wärme verloren geht?
teile:
  - typ: zahl
    loesung: "(0.25*85+0.75*25)/1.0"
    einheit: "°C"
    anzeige: '40'
    fehler:
      - wert: "(85+25)/2"
        meldung: |
          Das ist die Mitte. Sie gilt nur bei gleichen Massen. Hier ist dreimal so viel kaltes wie heißes Wasser, also liegt das Ergebnis näher an $25\,^\circ\text{C}$.
      - wert: "0.75*85+0.25*25"
        meldung: |
          Du hast die Massen vertauscht. Die $85\,^\circ\text{C}$ gehören zu den $250\,\text{g}$, die $25\,^\circ\text{C}$ zu den $750\,\text{g}$.
hinweise:
  - Bei gleichem Stoff ist die Mischungstemperatur das mit den Massen gewichtete Mittel.
loesung: |
  **Ansatz:** Beide Teile sind Wasser, also kürzt sich $c$. Bilanz: $0{,}25\,\text{kg}\cdot(85 - T_m) = 0{,}75\,\text{kg}\cdot(T_m - 25)$.
  ---
  **Auflösen:** $21{,}25 - 0{,}25\,T_m = 0{,}75\,T_m - 18{,}75$. Wir bringen die $T_m$-Terme nach rechts und die Zahlen nach links: $40 = 1{,}0\,T_m$, also $T_m = 40\,^\circ\text{C}$.
  ---
  **Probe:** abgegeben $c\cdot 0{,}25\cdot 45 = 11{,}25\,c$, aufgenommen $c\cdot 0{,}75\cdot 15 = 11{,}25\,c$. Die Bilanz stimmt.
```

```aufgabe
id: p10-mischung-vorhersage
titel: Wo liegt die Mischungstemperatur?
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  $1\,\text{kg}$ Wasser mit $80\,^\circ\text{C}$ wird mit $3\,\text{kg}$ Wasser mit $20\,^\circ\text{C}$ gemischt. Wo liegt die Mischungstemperatur, ohne genau zu rechnen?
teile:
  - typ: auswahl
    optionen:
      - "genau bei $50\\,^\\circ\\text{C}$"
      - "zwischen $20\\,^\\circ\\text{C}$ und $50\\,^\\circ\\text{C}$"
      - "zwischen $50\\,^\\circ\\text{C}$ und $80\\,^\\circ\\text{C}$"
      - "unter $20\\,^\\circ\\text{C}$"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Die Mitte gilt nur bei gleichen Massen. Hier ist dreimal so viel kaltes Wasser da.
      - wert: 2
        meldung: |
          Das heiße Wasser ist in der Minderheit. Der gewichtete Mittelwert liegt näher an der Temperatur der größeren Menge, also näher an $20\,^\circ\text{C}$.
      - wert: 3
        meldung: |
          Eine Mischung kann nie kälter werden als ihr kältester Teil. Sie liegt immer zwischen den beiden Anfangstemperaturen.
hinweise:
  - Welche Menge ist größer? An welcher Temperatur liegt das gewichtete Mittel näher?
loesung: |
  **Ansatz:** Die Mischungstemperatur ist ein gewichteter Mittelwert. Sie liegt näher an der Temperatur der größeren Wassermenge.
  ---
  **Antwort:** Zwischen $20\,^\circ\text{C}$ und $50\,^\circ\text{C}$. Genau gerechnet: $(1\cdot 80 + 3\cdot 20)/4 = 35\,^\circ\text{C}$.
```

```aufgabe
id: p10-mischung-umkehr
titel: Wie viel heißes Wasser für das Bad?
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  In einer Wanne sind $50\,\text{L}$ Wasser mit $15\,^\circ\text{C}$. Wie viele Liter Wasser mit $60\,^\circ\text{C}$ muss man dazugeben, damit das Bad $38\,^\circ\text{C}$ hat? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "50*(38-15)/(60-38)"
    einheit: "L"
    anzeige: '52{,}3'
    toleranz: 0.1
    fehler:
      - wert: "50*(60-38)/(38-15)"
        meldung: |
          Du hast die Differenzen vertauscht. Das kalte Wasser wird um $38 - 15 = 23\,\text{K}$ wärmer, das heiße kühlt um $60 - 38 = 22\,\text{K}$ ab. Stelle die Bilanz sorgfältig auf.
      - wert: "50*(38-15)/60"
        meldung: |
          Das heiße Wasser kühlt nicht auf $0\,^\circ\text{C}$ ab, sondern nur auf $38\,^\circ\text{C}$. Seine Temperaturänderung ist $60 - 38 = 22\,\text{K}$.
hinweise:
  - Die gesuchte Menge heißt $x$. Stelle die Bilanz auf, als wäre $x$ bekannt.
  - 'Bilanz: $x\cdot(60 - 38) = 50\cdot(38 - 15)$. Löse nach $x$ auf.'
loesung: |
  **Ansatz:** Das ist eine Umkehraufgabe: Die Mischungstemperatur ist bekannt, eine Masse ist gesucht. Die Bilanz gilt trotzdem. Weil beides Wasser ist, kürzt sich $c$, und wir können mit Litern statt Kilogramm rechnen.
  ---
  **Bilanz:** Das heiße Wasser ($x$ Liter) gibt ab, das kalte nimmt auf: $x\cdot(60 - 38) = 50\,\text{L}\cdot(38 - 15)$, also $22\,x = 1150\,\text{L}$.
  ---
  **Auflösen:** Wir teilen durch $22$: $x = 1150/22\,\text{L} = 52{,}3\,\text{L}$.
  ---
  **Plausibilität:** $38\,^\circ\text{C}$ liegt fast genau in der Mitte zwischen $15$ und $60$. Also braucht man fast gleich viel heißes wie kaltes Wasser, das passt.
```

```aufgabe
id: p10-mischung-metall
titel: Glühendes Eisen im Wasser
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Ein $0{,}50\,\text{kg}$ schweres Eisenstück ($c = 450\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}$) mit $300\,^\circ\text{C}$ wird in $2{,}0\,\text{kg}$ Wasser von $20\,^\circ\text{C}$ geworfen. Welche Endtemperatur stellt sich ein? Es verdampft kein Wasser, und es geht keine Wärme verloren. Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "(0.5*450*300+2*4190*20)/(0.5*450+2*4190)"
    einheit: "°C"
    anzeige: '27{,}3'
    toleranz: 0.1
    fehler:
      - wert: "(0.5*300+2*20)/2.5"
        meldung: |
          Du hast nur mit den Massen gemittelt. Bei verschiedenen Stoffen muss man mit den Wärmekapazitäten $c\,m$ gewichten. Wasser braucht pro Kilogramm fast zehnmal so viel Energie wie Eisen.
      - wert: "(300+20)/2"
        meldung: |
          Die Mitte gilt nur bei gleichen Wärmekapazitäten. Das Wasser hat hier eine fast vierzigmal so große Wärmekapazität wie das Eisen.
hinweise:
  - Berechne zuerst die beiden Wärmekapazitäten $C = c\,m$.
  - 'Dann der gewichtete Mittelwert: $T_m = \dfrac{C_1 T_1 + C_2 T_2}{C_1 + C_2}$.'
loesung: |
  **Ansatz:** Das Eisen gibt Wärme ab, das Wasser nimmt sie auf. Die Mischungstemperatur ist der mit $c\,m$ gewichtete Mittelwert.
  ---
  **Wärmekapazitäten:** Eisen $C_1 = 450\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}\cdot 0{,}50\,\text{kg} = 225\,\text{J/K}$. Wasser $C_2 = 4190\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}\cdot 2{,}0\,\text{kg} = 8380\,\text{J/K}$.
  ---
  **Mittelwert:** $T_m = \dfrac{225\cdot 300 + 8380\cdot 20}{225 + 8380}\,^\circ\text{C} = \dfrac{235\,100}{8605}\,^\circ\text{C} = 27{,}3\,^\circ\text{C}$.
  ---
  **Plausibilität:** Das Wasser erwärmt sich nur um gut $7\,\text{K}$, obwohl das Eisen um über $270\,\text{K}$ abkühlt. Das passt zur viel größeren Wärmekapazität des Wassers.
```

```aufgabe
id: p10-mischung-fehler
titel: Fehler finden in einer Mischungsrechnung
niveau: 2
lernziel: 3
kompetenz: begruenden
angabe: |
  Ein Schüler mischt $400\,\text{g}$ Wasser mit $70\,^\circ\text{C}$ und $100\,\text{g}$ Wasser mit $10\,^\circ\text{C}$. Er schreibt
  $$0{,}4\cdot(70 - T_m) = 0{,}1\cdot(10 - T_m)$$
  und erhält $T_m = 90\,^\circ\text{C}$. Wo liegt der Fehler?
teile:
  - typ: auswahl
    optionen:
      - "Rechts muss $(T_m - 10)$ stehen, weil das kalte Wasser wärmer wird. Jede Differenz muss positiv sein."
      - "Er hat die spezifische Wärmekapazität $c$ vergessen."
      - "Er hätte die Temperaturen in Kelvin einsetzen müssen."
      - "Die Massen müssen in Gramm eingesetzt werden."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Beide Teile sind Wasser. Dann steht $c$ auf beiden Seiten und kürzt sich heraus. Das Weglassen ist hier kein Fehler.
      - wert: 2
        meldung: |
          In der Mischungsrechnung kommen nur Differenzen vor, und die sind in °C und K gleich. Kelvin würde am Ergebnis nichts ändern.
      - wert: 3
        meldung: |
          Weil die Massen auf beiden Seiten stehen, ist die Einheit egal, solange sie gleich ist. Gramm oder Kilogramm liefern dasselbe $T_m$.
hinweise:
  - Prüfe zuerst, ob $90\,^\circ\text{C}$ überhaupt möglich ist.
  - Was passiert mit dem kalten Wasser? Wird $(10 - T_m)$ dann positiv oder negativ?
loesung: |
  **Plausibilitätscheck:** $90\,^\circ\text{C}$ ist heißer als der heißeste Teil ($70\,^\circ\text{C}$). Das ist unmöglich, also steckt ein Fehler in der Gleichung.
  ---
  **Fehler:** Das kalte Wasser wird wärmer. Die aufgenommene Wärme ist $c\,m\,(T_m - 10)$. Mit $(10 - T_m)$ wird die rechte Seite negativ, und die Bilanz „abgegeben gleich aufgenommen“ stimmt nicht mehr.
  ---
  **Richtig:** $0{,}4\,(70 - T_m) = 0{,}1\,(T_m - 10)$, also $28 + 1 = 0{,}5\,T_m$ und $T_m = 58\,^\circ\text{C}$. Das liegt zwischen $10$ und $70$ und nahe bei $70$, wie es sein muss.
```

```aufgabe
id: p10-kalorimeter-wasserwert
titel: Den Wasserwert eines Kalorimeters bestimmen
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  In einem Kalorimeter sind $300\,\text{g}$ Wasser mit $21{,}0\,^\circ\text{C}$. Man gießt $200\,\text{g}$ Wasser mit $70{,}0\,^\circ\text{C}$ dazu. Die Mischungstemperatur ist $39{,}0\,^\circ\text{C}$. Bestimme die Wärmekapazität $C_K$ des Gefäßes in J/K. Runde auf ganze J/K.
teile:
  - typ: zahl
    loesung: "(4190*0.2*31-4190*0.3*18)/18"
    einheit: "J/K"
    anzeige: '186'
    toleranz: 1
    fehler:
      - wert: "(4190*0.2*31-4190*0.3*18)"
        meldung: |
          Das ist die Wärme, die ins Gefäß ging, in Joule. Die Wärmekapazität ist Wärme **pro Kelvin**. Teile noch durch die Erwärmung des Gefäßes.
      - wert: "(4190*0.2*31-4190*0.3*18)/31"
        meldung: |
          Das Gefäß wurde nicht um $31\,\text{K}$ wärmer, sondern so wie das kalte Wasser, in dem es stand: von $21{,}0$ auf $39{,}0\,^\circ\text{C}$, also um $18\,\text{K}$.
hinweise:
  - Berechne, wie viel Wärme das heiße Wasser abgibt und wie viel das kalte Wasser aufnimmt.
  - Der Unterschied ging ins Gefäß, das sich wie das kalte Wasser um $18\,\text{K}$ erwärmt hat.
loesung: |
  **Ansatz:** Ohne Gefäß müsste die abgegebene gleich der aufgenommenen Wärme sein. Der Unterschied ist die Wärme, die das Gefäß aufgenommen hat.
  ---
  **Abgegeben:** $4190\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}\cdot 0{,}200\,\text{kg}\cdot 31{,}0\,\text{K} = 25\,978\,\text{J}$.
  ---
  **Vom kalten Wasser aufgenommen:** $4190\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}\cdot 0{,}300\,\text{kg}\cdot 18{,}0\,\text{K} = 22\,626\,\text{J}$.
  ---
  **Gefäß:** Es nahm $25\,978\,\text{J} - 22\,626\,\text{J} = 3352\,\text{J}$ auf und wurde um $18{,}0\,\text{K}$ wärmer. Also $C_K = 3352\,\text{J}/18{,}0\,\text{K} = 186\,\text{J/K}$. Das entspricht etwa $44\,\text{g}$ zusätzlichem Wasser.
```

```aufgabe
id: p10-c-bestimmen
titel: Welches Metall ist das?
niveau: 3
lernziel: 3
kompetenz: anwenden
angabe: |
  Ein Metallstück mit $200\,\text{g}$ wird in siedendem Wasser auf $100\,^\circ\text{C}$ erhitzt und dann in ein Kalorimeter mit $150\,\text{g}$ Wasser von $20{,}0\,^\circ\text{C}$ gegeben. Die Mischungstemperatur beträgt $37{,}8\,^\circ\text{C}$. Die Wärmekapazität des Gefäßes wird vernachlässigt.

  Berechne die spezifische Wärmekapazität des Metalls. Um welches Metall handelt es sich vermutlich? Vergleiche mit den Werten in [10.4 Spezifische Wärmekapazität](/lernen/physik1/temperatur-waerme-gase/spezifische-waermekapazitaet).
teile:
  - typ: zahl
    loesung: "0.150*4190*(37.8-20)/(0.200*(100-37.8))"
    einheit: "J/(kg K)"
    anzeige: '899'
    toleranz: 10
    fehler:
      - wert: "0.150*4190*(37.8-20)/(0.200*100)"
        meldung: |
          Das Metall kühlt nicht auf $0\,^\circ\text{C}$ ab, sondern nur auf die Mischungstemperatur. Seine Temperaturänderung ist $100 - 37{,}8 = 62{,}2\,\text{K}$.
hinweise:
  - Das Wasser nimmt $Q = 4190\cdot 0{,}150\cdot(37{,}8 - 20{,}0)\,\text{J}$ auf.
  - 'Das Metall gibt dieselbe Wärme ab: $Q = c_M\cdot 0{,}200\,\text{kg}\cdot(100 - 37{,}8)\,\text{K}$. Löse nach $c_M$ auf.'
loesung: |
  **Ansatz:** Die Wärme, die das Metall abgibt, nimmt das Wasser auf. In dieser Bilanz ist nur $c_M$ unbekannt.
  ---
  **Vom Wasser aufgenommen:** $Q = 4190\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}\cdot 0{,}150\,\text{kg}\cdot 17{,}8\,\text{K} = 11\,187\,\text{J}$.
  ---
  **Vom Metall abgegeben:** $Q = c_M\cdot 0{,}200\,\text{kg}\cdot 62{,}2\,\text{K} = c_M\cdot 12{,}44\,\text{kg}\cdot\text{K}$.
  ---
  **Auflösen:** $c_M = \dfrac{11\,187\,\text{J}}{12{,}44\,\text{kg}\cdot\text{K}} \approx 899\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}$. Das passt zu Aluminium ($900$).
```

```aufgabe
id: p10-kalorimeter-gefaess
titel: Eine Metallprobe im Kalorimeter mit Gefäß
niveau: 3
lernziel: 3
kompetenz: anwenden
angabe: |
  Ein Kalorimeter mit dem Wasserwert $C_K = 120\,\text{J/K}$ enthält $250\,\text{g}$ Wasser mit $18{,}0\,^\circ\text{C}$. Eine Metallprobe mit $150\,\text{g}$ und $98{,}0\,^\circ\text{C}$ wird hineingegeben. Die Mischungstemperatur ist $22{,}4\,^\circ\text{C}$.

  Berechne die spezifische Wärmekapazität der Probe. Runde auf ganze $\tfrac{\text{J}}{\text{kg}\cdot\text{K}}$. Um welches Metall handelt es sich vermutlich?
teile:
  - typ: zahl
    loesung: "(4190*0.25+120)*(22.4-18.0)/(0.15*(98.0-22.4))"
    einheit: "J/(kg K)"
    anzeige: '453'
    toleranz: 3
    fehler:
      - wert: "4190*0.25*(22.4-18.0)/(0.15*(98.0-22.4))"
        meldung: |
          Du hast das Gefäß vergessen. Es nimmt ebenfalls Wärme auf, nämlich $120\,\text{J}$ pro Kelvin. Dein Wert ist deshalb zu klein.
hinweise:
  - Wasser und Gefäß starten beide bei $18{,}0\,^\circ\text{C}$ und erwärmen sich gemeinsam um $4{,}4\,\text{K}$.
  - 'Bilanz: $c_P\cdot 0{,}150\cdot(98{,}0 - 22{,}4) = (4190\cdot 0{,}250 + 120)\cdot(22{,}4 - 18{,}0)$.'
gefuehrt:
  - text: Wie groß ist die Wärmekapazität von Wasser und Gefäß zusammen, in J/K?
    teil: { typ: zahl, loesung: "4190*0.25+120" }
    erklaerung: Wasser $4190\cdot 0{,}250\,\text{J/K} = 1047{,}5\,\text{J/K}$, dazu das Gefäß mit $120\,\text{J/K}$, zusammen $1167{,}5\,\text{J/K}$.
  - text: Wie viel Wärme nehmen Wasser und Gefäß auf, in J?
    teil: { typ: zahl, loesung: "1167.5*4.4" }
    erklaerung: Sie erwärmen sich um $22{,}4 - 18{,}0 = 4{,}4\,\text{K}$. Also $Q = 1167{,}5\,\text{J/K}\cdot 4{,}4\,\text{K} = 5137\,\text{J}$.
  - text: Um wie viel Kelvin kühlt die Probe ab?
    teil: { typ: zahl, loesung: "98.0-22.4" }
    erklaerung: Von $98{,}0\,^\circ\text{C}$ auf $22{,}4\,^\circ\text{C}$, also um $75{,}6\,\text{K}$.
  - text: Berechne die spezifische Wärmekapazität der Probe.
    teil: { typ: zahl, loesung: "5137/(0.15*75.6)", toleranz: 3 }
    erklaerung: $c_P = 5137\,\text{J}/(0{,}150\,\text{kg}\cdot 75{,}6\,\text{K}) = 453\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}$. Das passt zu Eisen ($450$).
loesung: |
  **Ansatz:** Die Probe gibt Wärme ab. Wasser **und** Gefäß nehmen sie auf und erwärmen sich gemeinsam von $18{,}0\,^\circ\text{C}$ auf $22{,}4\,^\circ\text{C}$.
  ---
  **Aufgenommen:** $(4190\cdot 0{,}250 + 120)\,\tfrac{\text{J}}{\text{K}}\cdot 4{,}4\,\text{K} = 1167{,}5\,\tfrac{\text{J}}{\text{K}}\cdot 4{,}4\,\text{K} = 5137\,\text{J}$.
  ---
  **Abgegeben:** $c_P\cdot 0{,}150\,\text{kg}\cdot 75{,}6\,\text{K} = c_P\cdot 11{,}34\,\text{kg}\cdot\text{K}$.
  ---
  **Ergebnis:** $c_P = 5137\,\text{J}/11{,}34\,\text{kg}\cdot\text{K} = 453\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}$, also vermutlich Eisen. Ohne Gefäß hätte man nur $406$ erhalten und das Metall falsch bestimmt.
```

## Phasenübergänge und latente Wärme

```aufgabe
id: p10-6-check
art: check
titel: "Vorwissen: Wasser erwärmen"
niveau: 1
angabe: |
  Wie viel Wärme braucht man, um $2{,}0\,\text{kg}$ Wasser von $0\,^\circ\text{C}$ auf $100\,^\circ\text{C}$ zu erwärmen ($c = 4190\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}$)? Gib das Ergebnis in kJ an.
teile:
  - typ: zahl
    loesung: "4190*2*100/1000"
    einheit: "kJ"
    anzeige: '838'
    fehler:
      - wert: "4190*2*100"
        meldung: |
          Das ist das Ergebnis in Joule. Gefragt sind Kilojoule, also durch $1000$ teilen.
      - wert: "4190*100/1000"
        meldung: |
          Du hast die Masse vergessen. Für $2\,\text{kg}$ braucht man doppelt so viel wie für $1\,\text{kg}$.
hinweise:
  - '$Q = c\,m\,\Delta T$.'
loesung: |
  $Q = c\,m\,\Delta T = 4190\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}\cdot 2{,}0\,\text{kg}\cdot 100\,\text{K} = 838\,000\,\text{J} = 838\,\text{kJ}$.
  ---
  Merk dir diese Zahl. Gleich siehst du, dass das Verdampfen derselben Menge mehr als fünfmal so viel braucht. Wiederholen: [10.4 Spezifische Wärmekapazität](/lernen/physik1/temperatur-waerme-gase/spezifische-waermekapazitaet).
```

Stell einen Topf mit Eiswürfeln auf eine Herdplatte und miss dauernd die Temperatur. Sie steigt bis
$0\,^\circ\text{C}$ und bleibt dann stehen, obwohl die Platte weiter heizt. Erst wenn das letzte Eis
geschmolzen ist, steigt sie wieder. Bei $100\,^\circ\text{C}$ bleibt sie erneut stehen, bis alles Wasser
verdampft ist. Wohin geht die Energie, wenn die Temperatur nicht steigt? Darum geht es in diesem Abschnitt.

### Aggregatzustände im Teilchenbild

Stoffe kommen in drei **Aggregatzuständen** vor. Im Teilchenmodell unterscheiden sie sich so:

- **Fest:** Die Teilchen sitzen dicht in einem regelmäßigen Gitter und schwingen um feste Plätze. Der Körper
  hat eine feste Form und ein festes Volumen.
- **Flüssig:** Die Teilchen liegen dicht, aber ungeordnet, und verschieben sich gegeneinander. Die Flüssigkeit
  hat ein festes Volumen, aber keine feste Form.
- **Gasförmig:** Die Teilchen sind weit voneinander entfernt, fliegen frei und stoßen nur gelegentlich
  zusammen. Ein Gas füllt jeden Raum aus.

Dass sich Teilchen ständig bewegen, sah 1827 der Botaniker Robert Brown. Unter dem Mikroskop zitterten
Pollenkörner in Wasser regellos hin und her. Sie werden von den unsichtbaren Wassermolekülen angestoßen. Diese
**Brownsche Bewegung** erklärte Einstein 1905 genau und lieferte damit einen der ersten direkten Belege für
Atome. Auch die **Diffusion** folgt aus der Teilchenbewegung: Ein Tropfen Tinte verteilt sich ohne Umrühren
im Wasser, in warmem Wasser schneller als in kaltem.

```aufgabe
id: p10-6-tinte-check
art: check
titel: Tinte in warmem und kaltem Wasser
niveau: 1
angabe: |
  Du gibst je einen Tropfen Tinte in ein Glas kaltes und ein Glas heißes Wasser, ohne umzurühren. Wo verteilt sich die Tinte schneller, und warum?
teile:
  - typ: auswahl
    optionen:
      - "Im heißen Wasser, weil sich die Wasserteilchen dort im Mittel schneller bewegen und die Tinte stärker anstoßen."
      - "Im kalten Wasser, weil kaltes Wasser dichter ist."
      - "In beiden gleich schnell, weil Diffusion nicht von der Temperatur abhängt."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Die Dichte ändert sich zwischen kaltem und heißem Wasser nur um wenige Prozent. Entscheidend ist die Bewegung der Teilchen, und die ist im heißen Wasser heftiger.
      - wert: 2
        meldung: |
          Diffusion entsteht durch die ungeordnete Teilchenbewegung. Die Temperatur misst, wie heftig diese Bewegung ist. Also hängt die Diffusion sehr wohl von der Temperatur ab.
hinweise:
  - Was sagt die Temperatur über die Bewegung der Teilchen?
loesung: |
  Höhere Temperatur bedeutet heftigere ungeordnete Teilchenbewegung.
  ---
  Die Wasserteilchen stoßen die Farbteilchen im heißen Wasser öfter und stärker an. Die Tinte verteilt sich deshalb schneller.
```

Die Übergänge heißen **Schmelzen** und **Erstarren** (zwischen fest und flüssig), **Verdampfen** und
**Kondensieren** (zwischen flüssig und gasförmig) sowie **Sublimieren** und **Resublimieren** (direkt
zwischen fest und gasförmig).

### Latente Wärme: Energie ohne Temperaturanstieg

**Worum geht es in einem Satz?** Während ein Stoff schmilzt oder verdampft, steckt die zugeführte Energie
nicht in schnellerer Teilchenbewegung, sondern im Lösen der Bindungen zwischen den Teilchen.

Die Temperatur misst die mittlere Bewegungsenergie der Teilchen. Beim Schmelzen bewegen sie sich nicht
heftiger, sie reißen sich nur aus dem Gitter los. Dafür braucht es Energie, ähnlich wie man Energie braucht,
um zwei Magnete auseinanderzuziehen. Die **innere Energie** steigt also, die **Temperatur** nicht. Diese
„versteckte“ Wärme heißt **latente Wärme**, vom lateinischen *latere*, verborgen sein.

:::formel[Schmelz- und Verdampfungswärme]
$$Q = q_s\cdot m \quad\text{(Schmelzen)} \qquad\qquad Q = q_v\cdot m \quad\text{(Verdampfen)}$$
Dabei ist $m$ die Masse, die schmilzt oder verdampft. Die **spezifische Schmelzwärme** $q_s$ und die
**spezifische Verdampfungswärme** $q_v$ geben an, wie viel Wärme $1\,\text{kg}$ für den Übergang braucht.
Für Wasser gilt $q_s = 334\,\text{kJ/kg}$ und $q_v = 2257\,\text{kJ/kg}$ (bei $100\,^\circ\text{C}$).
Beim Erstarren und Kondensieren wird dieselbe Wärme wieder frei.
:::

Die Zahlen sind beeindruckend. Um $1\,\text{kg}$ Eis zu schmelzen, braucht man so viel Wärme wie für die
Erwärmung von $1\,\text{kg}$ Wasser um etwa $80\,\text{K}$, denn $334/4{,}19 \approx 80$. Um $1\,\text{kg}$
siedendes Wasser zu verdampfen, braucht man mehr als fünfmal so viel wie für das Erwärmen von $0$ auf
$100\,^\circ\text{C}$.

```plot
x: [0, 3200]
y: [-30, 130]
hoehe: 320
achsen: { x: "zugeführte Wärme in kJ", y: "Temperatur in °C" }
strecken:
  - { von: [0, -20], nach: [42, 0], farbe: 0 }
  - { von: [42, 0], nach: [376, 0], farbe: 1 }
  - { von: [376, 0], nach: [795, 100], farbe: 0 }
  - { von: [795, 100], nach: [3052, 100], farbe: 1 }
  - { von: [3052, 100], nach: [3100, 124], farbe: 0 }
punkte:
  - { x: 209, y: 0, label: "Schmelzen" }
  - { x: 1900, y: 100, label: "Sieden" }
beschriftung: "Erwärmungskurve von 1 kg Eis ab −20 °C. Auf den schrägen Abschnitten (blau) steigt die Temperatur. Auf den waagrechten Abschnitten (orange) wird Wärme aufgenommen, ohne dass die Temperatur steigt: 334 kJ beim Schmelzen und 2257 kJ beim Verdampfen."
```

:::beispiel[Vom Eis zum Dampf]
$1{,}0\,\text{kg}$ Eis mit $-20\,^\circ\text{C}$ wird in Dampf von $100\,^\circ\text{C}$ verwandelt. Das ist die Kurve
im Diagramm. Wir gehen sie Abschnitt für Abschnitt durch.

**Abschnitt 1, Eis erwärmen:** $Q_1 = 2100\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}\cdot 1{,}0\,\text{kg}\cdot 20\,\text{K} = 42\,\text{kJ}$.
Eis hat ein eigenes $c$, nur halb so groß wie das von Wasser.

**Abschnitt 2, schmelzen:** $Q_2 = 334\,\tfrac{\text{kJ}}{\text{kg}}\cdot 1{,}0\,\text{kg} = 334\,\text{kJ}$.

**Abschnitt 3, Wasser erwärmen:** $Q_3 = 4190\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}\cdot 1{,}0\,\text{kg}\cdot 100\,\text{K} = 419\,\text{kJ}$.

**Abschnitt 4, verdampfen:** $Q_4 = 2257\,\tfrac{\text{kJ}}{\text{kg}}\cdot 1{,}0\,\text{kg} = 2257\,\text{kJ}$.

**Summe:** $Q = 42 + 334 + 419 + 2257 = 3052\,\text{kJ}$. Fast drei Viertel davon braucht allein das Verdampfen.
:::

:::achtung[Fehler: Den Phasenübergang überspringen]
$0{,}50\,\text{kg}$ Eis mit $-10\,^\circ\text{C}$ soll zu Wasser von $20\,^\circ\text{C}$ werden. Ein Schüler rechnet
„$\Delta T = 30\,\text{K}$“ und $Q = 4190\cdot 0{,}50\cdot 30\,\text{J} = 62{,}9\,\text{kJ}$.

Er hat zwei Dinge übersehen: Eis hat ein anderes $c$, und dazwischen liegt das Schmelzen. Richtig sind drei
Abschnitte: $2100\cdot 0{,}50\cdot 10\,\text{J} + 334\,000\cdot 0{,}50\,\text{J} + 4190\cdot 0{,}50\cdot 20\,\text{J}
= 10{,}5\,\text{kJ} + 167\,\text{kJ} + 41{,}9\,\text{kJ} = 219\,\text{kJ}$. Das ist mehr als dreimal so viel.
:::

:::achtung[Fehler: „Eis hat immer 0 °C“]
Eiswürfel aus dem Gefrierfach haben etwa $-18\,^\circ\text{C}$. Eis kann jede Temperatur unter $0\,^\circ\text{C}$
haben. Genau $0\,^\circ\text{C}$ hat es nur, solange es gerade schmilzt oder mit Wasser im Gleichgewicht ist. Wer
mit kaltem Eis rechnet, muss es zuerst mit $c_\text{Eis} = 2100\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}$ auf
$0\,^\circ\text{C}$ erwärmen, bevor es schmelzen kann.
:::

### Mischen mit Eis: Reicht die Wärme zum Schmelzen?

Wirft man Eis in ein Getränk, schmilzt es mit der Wärme des Getränks. Dabei gibt es zwei Fälle. Entweder
reicht die Wärme, und alles Eis schmilzt. Oder sie reicht nicht, und am Ende schwimmt noch Eis in Wasser von
genau $0\,^\circ\text{C}$. Welcher Fall eintritt, prüft man **vor** der eigentlichen Rechnung.

:::beispiel[Wie viel Eis kühlt einen Liter Saft?]
$1{,}0\,\text{kg}$ Saft (wie Wasser) mit $25\,^\circ\text{C}$ soll mit Eis von $0\,^\circ\text{C}$ auf $5\,^\circ\text{C}$
gekühlt werden. Wie viel Eis braucht man?

**Schritt 1, Bilanz in Worten:** Der Saft gibt Wärme ab. Das Eis nimmt sie auf, zuerst zum Schmelzen und dann,
um das Schmelzwasser von $0$ auf $5\,^\circ\text{C}$ zu erwärmen.

**Schritt 2, Gleichung:**
$4190\cdot 1{,}0\cdot(25 - 5) = m_E\cdot 334\,000 + m_E\cdot 4190\cdot(5 - 0)$, also
$83\,800\,\text{J} = m_E\cdot 354\,950\,\tfrac{\text{J}}{\text{kg}}$.

**Schritt 3, auflösen:** $m_E = 83\,800/354\,950\,\text{kg} = 0{,}236\,\text{kg}$.

**Antwort:** Etwa $240\,\text{g}$ Eis, also eine gute Handvoll Eiswürfel. Fast die ganze Kühlwirkung kommt vom
Schmelzen, nicht vom kalten Schmelzwasser.
:::

:::beispiel[Wenn das Eis nicht ganz schmilzt]
In $200\,\text{g}$ Wasser mit $20\,^\circ\text{C}$ kommen $100\,\text{g}$ Eis mit $0\,^\circ\text{C}$.

**Schritt 1, was das Wasser höchstens abgeben kann:** Kühlt es bis $0\,^\circ\text{C}$ ab, gibt es
$4190\cdot 0{,}200\cdot 20\,\text{J} = 16\,760\,\text{J}$ ab. Kälter kann es nicht werden, solange Eis da ist.

**Schritt 2, was das Eis zum Schmelzen bräuchte:** $334\,000\cdot 0{,}100\,\text{J} = 33\,400\,\text{J}$.

**Schritt 3, Vergleich:** $16\,760\,\text{J}$ reichen nicht. Es schmelzen nur $16\,760/334\,000\,\text{kg} = 50\,\text{g}$.

**Antwort:** Am Ende schwimmen noch $50\,\text{g}$ Eis in Wasser von genau $0\,^\circ\text{C}$. Eine Formel für $T_m$
hätte hier eine negative Temperatur geliefert, und das wäre falsch.
:::

### Sieden, Verdunsten und Druck

**Sieden** ist Verdampfen im Inneren der Flüssigkeit: Es bilden sich Dampfblasen. Eine Blase kann nur
entstehen, wenn der **Dampfdruck** der Flüssigkeit den äußeren Druck erreicht. Der Dampfdruck ist der Druck,
den der Dampf über einer Flüssigkeit in einem geschlossenen Gefäß höchstens erreicht. Er steigt stark mit der
Temperatur. Deshalb hängt die
Siedetemperatur vom Luftdruck ab. Auf dem Großglockner (etwa $630\,\text{hPa}$) siedet Wasser schon bei etwa
$87\,^\circ\text{C}$. Im **Schnellkochtopf** herrschen etwa $2\,\text{bar}$, Wasser siedet bei etwa
$120\,^\circ\text{C}$, und das Essen gart schneller.

**Verdunsten** geschieht bei jeder Temperatur an der Oberfläche. Die schnellsten Teilchen entkommen aus der
Flüssigkeit. Weil gerade die schnellsten gehen, sinkt die mittlere Bewegungsenergie der zurückbleibenden.
Verdunsten **kühlt** also. Darauf beruhen das Schwitzen, die kühlende Wirkung nasser Kleidung im Wind und der
poröse Tonkrug, der Wasser kühl hält.

Umgekehrt wird beim **Kondensieren** Wärme frei. Deshalb verbrüht Dampf von $100\,^\circ\text{C}$ viel schlimmer
als Wasser von $100\,^\circ\text{C}$. In der Meteorologie ist die Kondensationswärme die Energiequelle von
Gewittern, siehe [Kapitel 11](/lernen/physik1/hauptsaetze-waermekraftmaschinen).

Manche Stoffe gehen direkt vom festen in den gasförmigen Zustand über. Trockeneis (festes Kohlendioxid)
**sublimiert** bei $-78\,^\circ\text{C}$, und an sehr kalten, trockenen Tagen verschwindet Schnee, ohne zu
tauen. Der umgekehrte Weg heißt **Resublimation**. So entstehen Raureif und Eisblumen.

:::merke
**Energiebilanz mit Phasenübergängen:** Zerlege den Weg in Abschnitte. Jeder Abschnitt ist entweder eine
Erwärmung mit $Q = c\,m\,\Delta T$ und dem $c$ der jeweiligen Phase, oder ein Übergang mit $Q = q\,m$ ohne
Temperaturänderung. Bei Mischungen mit Eis prüfe zuerst, ob die verfügbare Wärme zum Schmelzen reicht.
:::

```reflexion
frage: Warum bleibt die Temperatur eines Eis-Wasser-Gemisches bei 0 °C, auch wenn man es auf eine heiße Herdplatte stellt? Wohin geht die Energie?
antwort: |
  Die zugeführte Wärme löst die Bindungen im Eisgitter. Die Teilchen bewegen sich dabei im Mittel nicht heftiger, deshalb
  steigt die Temperatur nicht. Die innere Energie steigt trotzdem, weil die gelösten Teilchen mehr potentielle Energie
  haben. Erst wenn das letzte Eis geschmolzen ist, kann zusätzliche Wärme die Bewegung beschleunigen, und die
  Temperatur steigt wieder.
```

### Aufgaben zu Phasenübergängen

```aufgabe
id: p10-eis-schmelzen
titel: Eis schmelzen
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Wie viel Wärme braucht man, um $500\,\text{g}$ Eis von $0\,^\circ\text{C}$ in Wasser von $0\,^\circ\text{C}$ zu verwandeln? Gib das Ergebnis in Joule an.
teile:
  - typ: zahl
    loesung: "0.5*334000"
    einheit: "J"
    anzeige: '167\,000'
    fehler:
      - wert: "0.5*2257000"
        meldung: |
          Das ist die Verdampfungswärme. Hier schmilzt das Eis nur, also brauchst du die Schmelzwärme $q_s = 334\,\text{kJ/kg}$.
      - wert: "500*334000"
        meldung: |
          Die Masse muss in Kilogramm stehen, weil $q_s$ pro Kilogramm angegeben ist. $500\,\text{g} = 0{,}5\,\text{kg}$.
hinweise:
  - Die Temperatur ändert sich nicht. Es ist ein reiner Phasenübergang mit $Q = q_s\,m$.
loesung: |
  **Ansatz:** Anfangs- und Endtemperatur sind gleich. Es findet nur der Phasenübergang statt, also $Q = q_s\,m$.
  ---
  **Rechnung:** $Q = 334\,000\,\tfrac{\text{J}}{\text{kg}}\cdot 0{,}5\,\text{kg} = 167\,000\,\text{J} = 167\,\text{kJ}$.
```

```aufgabe
id: p10-siedepunkt
titel: Kochen auf dem Berg
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Warum dauert es auf einem hohen Berg länger, bis Nudeln gar sind?
teile:
  - typ: auswahl
    optionen:
      - "Weil das Wasser dort mehr Energie zum Sieden braucht."
      - "Weil der Luftdruck geringer ist, siedet Wasser schon bei niedrigerer Temperatur."
      - "Weil die Herdplatte in der Höhe weniger Leistung hat."
      - "Weil Wasser in der Höhe eine größere Wärmekapazität hat."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Das Wasser siedet oben sogar **früher**, bei tieferer Temperatur. Genau das ist das Problem: Das siedende Wasser ist kühler als $100\,^\circ\text{C}$.
      - wert: 2
        meldung: |
          Die Herdplatte arbeitet in der Höhe genauso. Entscheidend ist die Temperatur des siedenden Wassers.
      - wert: 3
        meldung: |
          Die spezifische Wärmekapazität des Wassers hängt praktisch nicht vom Luftdruck ab.
hinweise:
  - Wann siedet eine Flüssigkeit? Was hat der äußere Druck damit zu tun?
loesung: |
  **Ansatz:** Wasser siedet, wenn sein Dampfdruck den äußeren Luftdruck erreicht. Bei kleinerem Luftdruck geschieht das schon bei tieferer Temperatur.
  ---
  **Folge:** Auf dem Großglockner siedet Wasser bei etwa $87\,^\circ\text{C}$. Heißer wird es im offenen Topf nicht, also garen die Nudeln langsamer.
```

```aufgabe
id: p10-erwaermungskurve-lesen
titel: Eine Erwärmungskurve auswerten
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  $0{,}50\,\text{kg}$ eines festen Stoffes werden mit einer Heizung von $250\,\text{W}$ gleichmäßig erwärmt. Das Diagramm zeigt die gemessene Temperatur. Verluste werden vernachlässigt.

  ```plot
  x: [0, 720]
  y: [0, 140]
  achsen: { x: "Zeit in s", y: "Temperatur in °C" }
  strecken:
    - { von: [0, 20], nach: [200, 80], farbe: 0 }
    - { von: [200, 80], nach: [560, 80], farbe: 1 }
    - { von: [560, 80], nach: [700, 120], farbe: 0 }
  punkte:
    - { x: 200, y: 80, label: "200 s" }
    - { x: 560, y: 80, label: "560 s" }
  ```

  a) Bei welcher Temperatur schmilzt der Stoff?

  b) Bestimme seine spezifische Schmelzwärme in kJ/kg.
teile:
  - typ: zahl
    label: a) Schmelztemperatur
    loesung: "80"
    einheit: "°C"
    fehler:
      - wert: "120"
        meldung: |
          $120\,^\circ\text{C}$ ist nur die letzte gemessene Temperatur. Geschmolzen wird dort, wo die Kurve **waagrecht** verläuft.
  - typ: zahl
    label: b) Schmelzwärme
    loesung: "250*(560-200)/0.5/1000"
    einheit: "kJ/kg"
    anzeige: '180'
    fehler:
      - wert: "250*560/0.5/1000"
        meldung: |
          Geschmolzen wird nur auf dem waagrechten Stück, also von $200\,\text{s}$ bis $560\,\text{s}$. Die Zeit davor wurde der feste Stoff erwärmt.
      - wert: "250*(560-200)/1000"
        meldung: |
          Das ist die Wärme für die ganze Probe in kJ. Die **spezifische** Schmelzwärme bezieht sich auf ein Kilogramm, also noch durch $0{,}50\,\text{kg}$ teilen.
hinweise:
  - Auf welchem Abschnitt der Kurve bleibt die Temperatur gleich, obwohl geheizt wird?
  - 'Wie lange dauert dieser Abschnitt? Die Heizung liefert in dieser Zeit $Q = P\cdot t$, und es gilt $Q = q_s\,m$.'
loesung: |
  **Ansatz:** Während des Schmelzens bleibt die Temperatur konstant, die Kurve ist waagrecht. Die Wärme in dieser Zeit ist die Schmelzwärme der Probe.
  ---
  **a)** Das waagrechte Stück liegt bei $80\,^\circ\text{C}$. Das ist die Schmelztemperatur.
  ---
  **b)** Das Schmelzen dauert $560\,\text{s} - 200\,\text{s} = 360\,\text{s}$. Die Heizung liefert $Q = 250\,\text{W}\cdot 360\,\text{s} = 90\,000\,\text{J}$. Also $q_s = Q/m = 90\,000\,\text{J}/0{,}50\,\text{kg} = 180\,\text{kJ/kg}$.
  ---
  **Plausibilität:** Das liegt in der Größenordnung von Wachsen und Paraffin. Wasser hat mit $334\,\text{kJ/kg}$ eine besonders große Schmelzwärme.
```

```aufgabe
id: p10-eis-zu-dampf
titel: Vom kalten Eis zum Dampf
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  $0{,}50\,\text{kg}$ Eis von $-15\,^\circ\text{C}$ soll vollständig in Dampf von $100\,^\circ\text{C}$ verwandelt werden ($c_\text{Eis} = 2100\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}$). Wie viel Wärme ist insgesamt nötig? Gib das Ergebnis in Joule an.
teile:
  - typ: zahl
    loesung: "0.5*(2100*15+334000+4190*100+2257000)"
    einheit: "J"
    anzeige: '1\,520\,750 \approx 1{,}52\cdot 10^{6}'
    fehler:
      - wert: "0.5*4190*115"
        meldung: |
          Du hast nur eine Erwärmung um $115\,\text{K}$ gerechnet. Dazwischen liegen zwei Phasenübergänge, Schmelzen und Verdampfen, und die brauchen den größten Teil der Energie.
      - wert: "0.5*(334000+2257000)"
        meldung: |
          Du hast nur die beiden Phasenübergänge berücksichtigt. Das Eis muss außerdem von $-15$ auf $0\,^\circ\text{C}$ und das Wasser von $0$ auf $100\,^\circ\text{C}$ erwärmt werden.
hinweise:
  - Der Weg hat vier Abschnitte. Eis erwärmen, schmelzen, Wasser erwärmen, verdampfen.
  - 'Jeder Abschnitt mit seiner eigenen Formel, $c\,m\,\Delta T$ oder $q\,m$. Dann alles addieren.'
loesung: |
  **Ansatz:** Wir zerlegen den Weg in vier Abschnitte, wie bei der Erwärmungskurve.
  ---
  **Eis erwärmen:** $2100\cdot 0{,}50\cdot 15\,\text{J} = 15\,750\,\text{J}$. **Schmelzen:** $334\,000\cdot 0{,}50\,\text{J} = 167\,000\,\text{J}$.
  ---
  **Wasser erwärmen:** $4190\cdot 0{,}50\cdot 100\,\text{J} = 209\,500\,\text{J}$. **Verdampfen:** $2\,257\,000\cdot 0{,}50\,\text{J} = 1\,128\,500\,\text{J}$.
  ---
  **Summe:** $15\,750 + 167\,000 + 209\,500 + 1\,128\,500 = 1\,520\,750\,\text{J} \approx 1{,}52\,\text{MJ}$. Das Verdampfen ist fast drei Viertel davon.
```

```aufgabe
id: p10-eis-temperatur
titel: Welche Temperatur hat Eis?
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: |
  Welche Aussagen über die Temperatur von Eis sind richtig? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Eis hat immer genau $0\\,^\\circ\\text{C}$."
      - "Eiswürfel aus dem Gefrierfach haben deutlich weniger als $0\\,^\\circ\\text{C}$."
      - "In einem Glas mit Eis und Wasser im Gleichgewicht haben Eis und Wasser $0\\,^\\circ\\text{C}$."
      - "Schmelzendes Eis wird beim Schmelzen langsam wärmer als $0\\,^\\circ\\text{C}$."
    richtig: [1, 2]
    fehler:
      - wert: [0, 2]
        meldung: |
          Eis kann jede Temperatur unter $0\,^\circ\text{C}$ haben, zum Beispiel $-18\,^\circ\text{C}$ im Gefrierfach. Genau $0\,^\circ\text{C}$ hat es nur, solange es schmilzt oder mit Wasser im Gleichgewicht ist.
      - wert: [1, 2, 3]
        meldung: |
          Solange Eis schmilzt, bleibt seine Temperatur bei $0\,^\circ\text{C}$. Die zugeführte Wärme löst Bindungen und erhöht nicht die Temperatur.
      - wert: [1]
        meldung: |
          Auch die dritte Aussage stimmt. Eis und Wasser können nur bei $0\,^\circ\text{C}$ nebeneinander im Gleichgewicht sein.
hinweise:
  - Bei welcher Temperatur können Eis und Wasser gleichzeitig vorhanden sein?
  - Was passiert mit der Temperatur, während Eis schmilzt?
loesung: |
  **Kaltes Eis:** Eis kann jede Temperatur unter $0\,^\circ\text{C}$ haben. Im Gefrierfach sind es etwa $-18\,^\circ\text{C}$.
  ---
  **Eis und Wasser zusammen:** Nur bei $0\,^\circ\text{C}$ können beide nebeneinander bestehen. Wärmer wird das Eis nicht, solange es schmilzt.
  ---
  **Antwort:** Die zweite und die dritte Aussage stimmen.
```

```aufgabe
id: p10-schwitzen
titel: Kühlung durch Schwitzen
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Ein Radfahrer verdunstet in einer Stunde $0{,}8\,\text{L}$ Schweiß. Die Verdunstungswärme bei Hauttemperatur beträgt etwa $2400\,\text{kJ/kg}$. Welche mittlere Kühlleistung in Watt ergibt das?
teile:
  - typ: zahl
    loesung: "0.8*2400000/3600"
    einheit: "W"
    anzeige: '533'
    fehler:
      - wert: "0.8*2400000"
        meldung: |
          Das ist die Energie in Joule. Die **Leistung** ist Energie pro Zeit. Teile durch die Zeit in Sekunden, $1\,\text{h} = 3600\,\text{s}$.
      - wert: "0.8*2400/3600"
        meldung: |
          Die Verdunstungswärme ist in **Kilo**joule pro Kilogramm angegeben. Rechne $2400\,\text{kJ/kg} = 2\,400\,000\,\text{J/kg}$.
hinweise:
  - 'Berechne zuerst die Wärme mit $Q = q_v\,m$. $0{,}8\,\text{L}$ Schweiß sind etwa $0{,}8\,\text{kg}$.'
  - 'Leistung ist Energie pro Zeit, $P = Q/t$ mit $t = 3600\,\text{s}$.'
loesung: |
  **Ansatz:** Der verdunstende Schweiß nimmt die Verdunstungswärme aus dem Körper mit. Pro Zeit ist das eine Kühlleistung.
  ---
  **Wärme:** $Q = q_v\,m = 2\,400\,000\,\tfrac{\text{J}}{\text{kg}}\cdot 0{,}8\,\text{kg} = 1{,}92\cdot 10^{6}\,\text{J}$.
  ---
  **Leistung:** $P = Q/t = 1{,}92\cdot 10^{6}\,\text{J}/3600\,\text{s} \approx 533\,\text{W}$. So viel Abwärme entsteht etwa bei $130\,\text{W}$ Tretleistung, weil die Muskeln nur rund $20\,\%$ der Energie in Bewegung umsetzen.
```

```aufgabe
id: p10-dampf-verbruehung
titel: Warum Dampf schlimmer verbrüht als heißes Wasser
niveau: 2
lernziel: 4
kompetenz: begruenden
angabe: |
  $10\,\text{g}$ Wasserdampf mit $100\,^\circ\text{C}$ kondensieren auf der Haut und kühlen als Wasser auf $37\,^\circ\text{C}$ ab. Zum Vergleich kühlen $10\,\text{g}$ Wasser mit $100\,^\circ\text{C}$ auf $37\,^\circ\text{C}$ ab. Um welchen Faktor gibt der Dampf mehr Wärme an die Haut ab als das Wasser? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "(0.01*2257000+0.01*4190*63)/(0.01*4190*63)"
    anzeige: '9{,}6'
    toleranz: 0.1
    fehler:
      - wert: "1"
        meldung: |
          Beide haben zwar $100\,^\circ\text{C}$, aber der Dampf muss zuerst kondensieren. Dabei gibt er die Verdampfungswärme $2257\,\text{kJ/kg}$ ab, und die ist riesig.
      - wert: "(0.01*2257000)/(0.01*4190*63)"
        meldung: |
          Du hast beim Dampf nur die Kondensationswärme gezählt. Nach dem Kondensieren ist er Wasser von $100\,^\circ\text{C}$ und kühlt ebenfalls auf $37\,^\circ\text{C}$ ab.
hinweise:
  - Der Dampf gibt zwei Portionen ab. Zuerst beim Kondensieren, dann beim Abkühlen als Wasser.
  - 'Das Wasser gibt nur $c\,m\,\Delta T$ mit $\Delta T = 63\,\text{K}$ ab.'
loesung: |
  **Ansatz:** Beim Kondensieren wird die latente Wärme frei. Der Dampf gibt also die Kondensationswärme **und** die Abkühlungswärme ab, das Wasser nur die Abkühlungswärme.
  ---
  **Wasser:** $Q_W = 4190\cdot 0{,}010\cdot 63\,\text{J} = 2640\,\text{J}$.
  ---
  **Dampf:** $Q_D = 2\,257\,000\cdot 0{,}010\,\text{J} + 2640\,\text{J} = 22\,570\,\text{J} + 2640\,\text{J} = 25\,210\,\text{J}$.
  ---
  **Faktor:** $25\,210/2640 = 9{,}6$. Dampf gibt fast zehnmal so viel Wärme ab, deshalb sind Dampfverbrühungen so gefährlich.
```

```aufgabe
id: p10-eiswuerfel
titel: Eiswürfel im Getränk
niveau: 3
lernziel: 4
kompetenz: anwenden
angabe: |
  In $300\,\text{g}$ Limonade (wie Wasser) mit $25\,^\circ\text{C}$ werden $50\,\text{g}$ Eis von $0\,^\circ\text{C}$ gegeben. Welche Endtemperatur stellt sich ein, wenn das Eis vollständig schmilzt? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "(0.3*4190*25-0.05*334000)/(0.35*4190)"
    einheit: "°C"
    anzeige: '10{,}0'
    toleranz: 0.1
    fehler:
      - wert: "(0.3*25+0.05*0)/0.35"
        meldung: |
          Du hast das Eis wie kaltes Wasser von $0\,^\circ\text{C}$ behandelt. Es muss aber zuerst schmelzen und braucht dafür $334\,\text{kJ}$ pro Kilogramm. Das kühlt viel stärker.
hinweise:
  - 'Das Eis nimmt zuerst die Schmelzwärme auf. Danach erwärmt sich das Schmelzwasser von $0\,^\circ\text{C}$ auf $T_m$.'
  - 'Bilanz: $4190\cdot 0{,}3\cdot(25 - T_m) = 334\,000\cdot 0{,}05 + 4190\cdot 0{,}05\cdot T_m$.'
loesung: |
  **Ansatz:** Die Limonade gibt Wärme ab. Das Eis nimmt sie in zwei Portionen auf, zum Schmelzen und zum Erwärmen des Schmelzwassers.
  ---
  **Abgegeben (Limonade):** $4190\cdot 0{,}3\cdot(25 - T_m)$. **Aufgenommen (Eis):** $334\,000\cdot 0{,}05 + 4190\cdot 0{,}05\cdot(T_m - 0)$.
  ---
  **Auflösen:** $31\,425 - 1257\,T_m = 16\,700 + 209{,}5\,T_m$. Wir sammeln: $14\,725 = 1466{,}5\,T_m$, also $T_m = 10{,}0\,^\circ\text{C}$.
  ---
  **Probe:** $T_m > 0\,^\circ\text{C}$, also ist das Eis wirklich ganz geschmolzen. Allein das Schmelzen kühlt die Limonade um gut $13\,\text{K}$.
```

```aufgabe
id: p10-eis-reicht-nicht
titel: Kaltes Eis in wenig Wasser
niveau: 3
lernziel: 4
kompetenz: modellieren
angabe: |
  In ein gut isoliertes Glas mit $150\,\text{g}$ Wasser von $12\,^\circ\text{C}$ kommen $80\,\text{g}$ Eis aus dem Gefrierfach mit $-10\,^\circ\text{C}$ ($c_\text{Eis} = 2100\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}$).

  a) Welche Endtemperatur stellt sich ein?

  b) Wie viel Gramm Eis schmelzen? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    label: a) Endtemperatur
    loesung: "0"
    einheit: "°C"
    fehler:
      - wert: "(0.15*4190*12-0.08*2100*10-0.08*334000)/(0.23*4190)"
        meldung: |
          Eine negative Temperatur zeigt: Die Formel für „alles Eis schmilzt“ passt hier nicht. Prüfe zuerst, ob die Wärme des Wassers zum Schmelzen reicht.
  - typ: zahl
    label: b) geschmolzenes Eis
    loesung: "(4190*0.15*12-2100*0.08*10)/334000*1000"
    einheit: "g"
    anzeige: '17{,}6'
    toleranz: 0.1
    fehler:
      - wert: "4190*0.15*12/334000*1000"
        meldung: |
          Das Eis muss zuerst von $-10\,^\circ\text{C}$ auf $0\,^\circ\text{C}$ erwärmt werden. Dafür geht ein Teil der Wärme verloren, bevor überhaupt etwas schmilzt.
hinweise:
  - Berechne, wie viel Wärme das Wasser höchstens abgibt, wenn es auf $0\,^\circ\text{C}$ abkühlt.
  - Berechne, wie viel davon das Eis braucht, um auf $0\,^\circ\text{C}$ zu kommen. Reicht der Rest, um alles zu schmelzen?
  - Wenn nicht, bleibt die Temperatur bei $0\,^\circ\text{C}$. Der Rest der Wärme bestimmt, wie viel Eis schmilzt.
gefuehrt:
  - text: Wie viel Wärme gibt das Wasser höchstens ab, wenn es auf $0\,^\circ\text{C}$ abkühlt?
    teil: { typ: zahl, loesung: "4190*0.15*12" }
    erklaerung: $4190\cdot 0{,}150\cdot 12\,\text{J} = 7542\,\text{J}$. Kälter als $0\,^\circ\text{C}$ wird es nicht, solange Eis da ist.
  - text: Wie viel Wärme braucht das Eis, um sich von $-10\,^\circ\text{C}$ auf $0\,^\circ\text{C}$ zu erwärmen?
    teil: { typ: zahl, loesung: "2100*0.08*10" }
    erklaerung: $2100\cdot 0{,}080\cdot 10\,\text{J} = 1680\,\text{J}$.
  - text: Wie viel Wärme bräuchte das ganze Eis zum Schmelzen? Vergleiche mit dem, was übrig bleibt.
    teil: { typ: zahl, loesung: "334000*0.08" }
    erklaerung: Zum Schmelzen bräuchte es $334\,000\cdot 0{,}080\,\text{J} = 26\,720\,\text{J}$. Übrig sind aber nur $7542 - 1680 = 5862\,\text{J}$. Es schmilzt also nicht alles, und die Endtemperatur ist $0\,^\circ\text{C}$.
  - text: Wie viel Gramm Eis schmelzen mit den übrigen $5862\,\text{J}$?
    teil: { typ: zahl, loesung: "5862/334000*1000", toleranz: 0.1 }
    erklaerung: $m = 5862\,\text{J}/334\,000\,\tfrac{\text{J}}{\text{kg}} = 0{,}0176\,\text{kg} = 17{,}6\,\text{g}$.
loesung: |
  **Ansatz:** Bei kaltem Eis und wenig warmem Wasser prüfen wir zuerst, ob die verfügbare Wärme zum Schmelzen reicht. Erst dann rechnen wir eine Endtemperatur.
  ---
  **Verfügbar:** Das Wasser gibt beim Abkühlen auf $0\,^\circ\text{C}$ höchstens $4190\cdot 0{,}150\cdot 12\,\text{J} = 7542\,\text{J}$ ab.
  ---
  **Bedarf:** Das Eis braucht $2100\cdot 0{,}080\cdot 10\,\text{J} = 1680\,\text{J}$ bis $0\,^\circ\text{C}$ und dann $26\,720\,\text{J}$ zum Schmelzen. Für das Schmelzen bleiben nur $5862\,\text{J}$. Das reicht nicht.
  ---
  **a)** Es bleibt Eis übrig, also ist die Endtemperatur genau $0\,^\circ\text{C}$.
  ---
  **b)** Es schmelzen $5862\,\text{J}/334\,000\,\tfrac{\text{J}}{\text{kg}} = 0{,}0176\,\text{kg} = 17{,}6\,\text{g}$. Im Glas schwimmen danach noch $62{,}4\,\text{g}$ Eis in Wasser von $0\,^\circ\text{C}$.
```

## Wärmeleitung

```aufgabe
id: p10-7-check
art: check
titel: "Vorwissen: Leistung als Energie pro Zeit"
niveau: 1
angabe: |
  Durch ein Fenster gehen in $3{,}0$ Stunden $0{,}90\,\text{kWh}$ Wärme verloren. Wie groß ist der mittlere Wärmeverlust pro Sekunde, also die Leistung in Watt?
teile:
  - typ: zahl
    loesung: "0.9*1000/3"
    einheit: "W"
    anzeige: '300'
    fehler:
      - wert: "0.9/3"
        meldung: |
          Das ist die Leistung in Kilowatt ($0{,}3\,\text{kW}$). Gefragt sind Watt, also mal $1000$.
      - wert: "0.9*3*1000"
        meldung: |
          Leistung ist Energie **pro** Zeit, also musst du durch die Zeit teilen, nicht mit ihr multiplizieren.
hinweise:
  - '$P = E/t$. Kilowattstunden durch Stunden ergibt Kilowatt.'
loesung: |
  Leistung ist Energie pro Zeit: $P = \dfrac{0{,}90\,\text{kWh}}{3{,}0\,\text{h}} = 0{,}30\,\text{kW}$.
  ---
  $0{,}30\,\text{kW} = 300\,\text{W}$. In der Wärmelehre heißt eine solche Leistung **Wärmestrom**. Wiederholen: [Kapitel 4: Leistung und Wirkungsgrad](/lernen/physik1/arbeit-energie-impuls/leistung-und-wirkungsgrad).
```

Wärme gelangt auf drei Arten von einem Ort zum anderen: durch **Wärmeleitung**, durch **Konvektion** und
durch **Wärmestrahlung**. Dieser Abschnitt behandelt die Leitung. Konvektion und Strahlung folgen in
[10.8 Konvektion und Wärmestrahlung](/lernen/physik1/temperatur-waerme-gase/konvektion-und-waermestrahlung).

### Wie Wärmeleitung funktioniert

Halt einen Metalllöffel in heißen Tee. Nach kurzer Zeit wird der Griff warm, obwohl kein Tee hinaufgeflossen
ist. Bei der **Wärmeleitung** geben die Teilchen ihre Bewegungsenergie durch Stöße an ihre Nachbarn weiter. Die
Teilchen selbst bleiben an ihrem Platz. Nur die Energie wandert, wie bei einer Reihe von Dominosteinen.

**Metalle** leiten Wärme besonders gut. Sie haben frei bewegliche Elektronen, die Energie schnell durch das
Material tragen. Deshalb sind gute elektrische Leiter fast immer auch gute Wärmeleiter. **Gase** leiten sehr
schlecht, weil ihre Teilchen weit voneinander entfernt sind und selten zusammenstoßen. Fast alle Dämmstoffe
(Styropor, Mineralwolle, Daunen, Wolle) bestehen deshalb hauptsächlich aus **ruhender Luft** in kleinen
Kammern. Die Kammern verhindern, dass die Luft strömt. Würde sie strömen, nähme sie Wärme durch Konvektion mit.

### Der Wärmestrom durch eine Wand

Die Wärme, die pro Sekunde durch eine Wand fließt, heißt **Wärmestrom** $P$. Er wird in Watt gemessen. Wovon
hängt er ab? Ein Wärmestrom durch eine größere Fläche ist größer. Ein größerer Temperaturunterschied treibt
mehr Wärme hindurch. Eine dickere Wand bremst den Strom.

:::formel[Wärmeleitung durch eine Wand]
$$P = \frac{Q}{t} = \lambda\cdot\frac{A\cdot\Delta T}{d}$$
Dabei ist $Q$ die Wärme, die in der Zeit $t$ hindurchfließt, $A$ die Fläche der Wand, $d$ ihre Dicke und
$\Delta T$ der Temperaturunterschied zwischen den beiden Seiten. Die **Wärmeleitfähigkeit** $\lambda$
(griechisch „lambda“) ist eine Stoffkonstante in $\tfrac{\text{W}}{\text{m}\cdot\text{K}}$.
:::

Typische Werte von $\lambda$ in $\tfrac{\text{W}}{\text{m}\cdot\text{K}}$:

- Kupfer $400$, Aluminium $235$, Stahl $50$, Edelstahl $15$.
- Glas $0{,}8$, Ziegel $0{,}5$ bis $0{,}8$, Wasser $0{,}6$, Holz $0{,}13$ bis $0{,}15$.
- Mineralwolle $0{,}040$, Styropor $0{,}035$, ruhende Luft $0{,}026$.

```aufgabe
id: p10-7-proportional-check
art: check
titel: "Vorhersage: größere Wand, größerer Unterschied"
niveau: 1
angabe: |
  Eine Wand wird durch eine doppelt so große Wand aus demselben Material und mit derselben Dicke ersetzt. Gleichzeitig ist es draußen kälter, sodass sich der Temperaturunterschied verdoppelt. Mit welchem Faktor ändert sich der Wärmestrom?
teile:
  - typ: zahl
    loesung: "2*2"
    anzeige: '4'
    fehler:
      - wert: "2"
        meldung: |
          Beide Änderungen wirken. Der Wärmestrom ist proportional zur Fläche **und** zum Temperaturunterschied. Beide verdoppeln ihn.
      - wert: "1"
        meldung: |
          Fläche und Temperaturunterschied stehen beide im Zähler von $P = \lambda A\Delta T/d$. Sie heben sich nicht auf, sie verstärken sich.
hinweise:
  - 'In $P = \lambda A\Delta T/d$ stehen $A$ und $\Delta T$ beide im Zähler.'
loesung: |
  Der Wärmestrom ist proportional zu $A$ und zu $\Delta T$.
  ---
  Doppelte Fläche verdoppelt ihn, doppelter Temperaturunterschied verdoppelt ihn noch einmal. Insgesamt Faktor $2\cdot 2 = 4$.
```

Die Formel enthält zwei wichtige **Proportionalitäten**. Doppelte Fläche oder doppelter Temperaturunterschied
verdoppeln den Wärmestrom. Doppelte Dicke **halbiert** ihn. In der Bauphysik fasst man $\lambda/d$ zum
**U-Wert** zusammen. Er gibt an, wie viele Watt pro Quadratmeter und Kelvin durch ein Bauteil gehen. Dann gilt
$P = U\cdot A\cdot\Delta T$. Eine gut gedämmte Außenwand hat $U \approx 0{,}2\,\tfrac{\text{W}}{\text{m}^2\cdot\text{K}}$.

Diese einfache Rechnung vernachlässigt die dünnen, ruhenden Luftschichten direkt an den Oberflächen. Bei gut
gedämmten Wänden spielen sie kaum eine Rolle. Bei einer einzelnen Glasscheibe bestimmen dagegen gerade diese
Luftschichten den Wärmeverlust.

:::beispiel[Ziegelwand mit und ohne Dämmung]
Eine Außenwand hat $12\,\text{m}^2$ und besteht aus $25\,\text{cm}$ Ziegel ($\lambda = 0{,}50\,\tfrac{\text{W}}{\text{m}\cdot\text{K}}$).
Innen hat es $20\,^\circ\text{C}$, außen $-5\,^\circ\text{C}$.

**Schritt 1, Größen in SI:** $d = 0{,}25\,\text{m}$, $\Delta T = 20\,^\circ\text{C} - (-5\,^\circ\text{C}) = 25\,\text{K}$.

**Schritt 2, Wärmestrom ohne Dämmung:**
$P = 0{,}50\,\tfrac{\text{W}}{\text{m}\cdot\text{K}}\cdot\dfrac{12\,\text{m}^2\cdot 25\,\text{K}}{0{,}25\,\text{m}} = 600\,\text{W}$.
Meter, Quadratmeter und Kelvin kürzen sich zu Watt.

**Schritt 3, zum Vergleich nur eine Dämmplatte:** $12\,\text{cm}$ Styropor allein ergäben
$P = 0{,}035\cdot\dfrac{12\cdot 25}{0{,}12}\,\text{W} = 87{,}5\,\text{W}$.

**Deutung:** Die dünnere Dämmplatte lässt fast siebenmal weniger Wärme durch als die dicke Ziegelwand, weil
ihr $\lambda$ so klein ist.
:::

:::achtung[Fehler: Die Dicke in Zentimetern einsetzen]
Eine Schülerin rechnet für $10\,\text{cm}$ Mineralwolle ($\lambda = 0{,}040$) auf $50\,\text{m}^2$ bei
$\Delta T = 20\,\text{K}$: $P = 0{,}040\cdot 50\cdot 20/10\,\text{W} = 4\,\text{W}$.

Weil $\lambda$ in $\tfrac{\text{W}}{\text{m}\cdot\text{K}}$ angegeben ist, muss $d$ in **Metern** stehen. Richtig ist
$P = 0{,}040\cdot 50\cdot 20/0{,}10\,\text{W} = 400\,\text{W}$, hundertmal mehr.
:::

### Mehrere Schichten hintereinander

Eine echte Wand besteht aus mehreren Schichten, zum Beispiel Ziegel und Dämmung. Die Wärme muss nacheinander
durch alle Schichten. Durch jede fließt im Gleichgewicht **derselbe** Wärmestrom $P$, sonst würde sich irgendwo
Wärme stauen. Das ist wie bei Wasser in einem Rohr mit verschieden engen Stücken: Durch jedes Stück fließt
gleich viel.

Damit das klappt, teilt sich der Temperaturunterschied auf die Schichten auf. Jede Schicht hat einen
**Wärmewiderstand** $R = \dfrac{d}{\lambda\cdot A}$ in $\text{K/W}$. Er sagt, wie viele Kelvin Temperaturunterschied
nötig sind, um $1\,\text{W}$ durch die Schicht zu treiben. Die Widerstände hintereinander **addieren** sich:

$$P = \frac{\Delta T}{R_1 + R_2}$$

Das funktioniert genau wie Widerstände in Reihe im Stromkreis, siehe [Kapitel Gleichstrom](/lernen/physik1/gleichstrom).

:::beispiel[Ziegelwand mit Außendämmung]
Die Ziegelwand aus dem ersten Beispiel ($12\,\text{m}^2$, $25\,\text{cm}$, $\lambda = 0{,}50$) bekommt außen
$12\,\text{cm}$ Styropor ($\lambda = 0{,}035$). Innen $20\,^\circ\text{C}$, außen $-5\,^\circ\text{C}$.

**Schritt 1, Widerstände:**
$R_1 = \dfrac{0{,}25\,\text{m}}{0{,}50\,\tfrac{\text{W}}{\text{m}\cdot\text{K}}\cdot 12\,\text{m}^2} = 0{,}0417\,\tfrac{\text{K}}{\text{W}}$ und
$R_2 = \dfrac{0{,}12\,\text{m}}{0{,}035\,\tfrac{\text{W}}{\text{m}\cdot\text{K}}\cdot 12\,\text{m}^2} = 0{,}286\,\tfrac{\text{K}}{\text{W}}$.

**Schritt 2, Wärmestrom:** $P = \dfrac{25\,\text{K}}{0{,}0417\,\text{K/W} + 0{,}286\,\text{K/W}} = \dfrac{25\,\text{K}}{0{,}327\,\text{K/W}} = 76\,\text{W}$.

**Schritt 3, Temperatur zwischen den Schichten:** Im Ziegel fällt die Temperatur um
$P\cdot R_1 = 76\,\text{W}\cdot 0{,}0417\,\text{K/W} = 3{,}2\,\text{K}$, also auf $16{,}8\,^\circ\text{C}$. Den Rest von
$21{,}8\,\text{K}$ übernimmt die Dämmung.

**Deutung:** Mit Dämmung gehen statt $600\,\text{W}$ nur noch $76\,\text{W}$ verloren. Der Ziegel bleibt fast so warm
wie der Raum, deshalb bildet sich innen kein Kondenswasser.
:::

```plot
x: [-0.05, 0.42]
y: [-10, 25]
hoehe: 280
achsen: { x: "Ort in der Wand in m (innen links)", y: "Temperatur in °C" }
strecken:
  - { von: [0, 20], nach: [0.25, 16.8], farbe: 0 }
  - { von: [0.25, 16.8], nach: [0.37, -5], farbe: 1 }
  - { von: [0, -10], nach: [0, 25], gestrichelt: true }
  - { von: [0.25, -10], nach: [0.25, 25], gestrichelt: true }
  - { von: [0.37, -10], nach: [0.37, 25], gestrichelt: true }
punkte:
  - { x: 0.12, y: 21, label: "Ziegel" }
  - { x: 0.31, y: 21, label: "Styropor" }
  - { x: 0.25, y: 16.8, label: "16,8 °C" }
beschriftung: "Temperaturverlauf in der gedämmten Wand. Im Ziegel (links, blau) fällt die Temperatur nur um 3,2 K, in der dünneren Dämmschicht (rechts, orange) um 21,8 K. Durch beide Schichten fließt derselbe Wärmestrom."
```

:::achtung[Fehler: Die Wärmeströme der Schichten addieren]
Ein Schüler rechnet für die gedämmte Ziegelwand jede Schicht einzeln. Er nimmt jeweils den vollen
Temperaturunterschied von $25\,\text{K}$ und erhält $600\,\text{W}$ für den Ziegel und $87{,}5\,\text{W}$ für das Styropor.
Dann addiert er: „Zusammen $687{,}5\,\text{W}$.“

Das ist doppelt falsch. Mehr Schichten können den Wärmeverlust nicht **erhöhen**. Die Schichten liegen
hintereinander, also addieren sich ihre **Widerstände**, nicht die Ströme. Richtig sind $76\,\text{W}$.
:::

### Was Kleidung wirklich tut

Ein Pullover fühlt sich warm an. Erzeugt er Wärme? Ein **Gedankenexperiment** klärt das: Wickle ein
Thermometer in einen Pullover, der im Zimmer lag, und warte eine Stunde. Das Thermometer zeigt die
Zimmertemperatur, kein Grad mehr. Der Pullover erzeugt also keine Wärme. Er hält nur die Wärme fest, die dein
Körper erzeugt.

Das schafft er vor allem durch die **Luft**, die zwischen den Fasern eingeschlossen ist. Ruhende Luft leitet
Wärme sehr schlecht, und die Fasern verhindern, dass sie strömt. Nasse Kleidung wärmt kaum noch: Wasser
verdrängt die Luft und leitet Wärme über zwanzigmal besser als ruhende Luft.

:::merke
**Wärmeleitung berechnen:** (1) Alle Größen in SI, besonders $d$ in Metern. (2) Eine Schicht:
$P = \lambda A\Delta T/d$. (3) Mehrere Schichten hintereinander: Widerstände $R = d/(\lambda A)$ addieren, dann
$P = \Delta T/R_\text{ges}$. (4) Plausibilität: Mehr Dämmung muss den Wärmestrom verkleinern.
:::

```reflexion
frage: Warum verwendet man für Kochtöpfe einen Boden aus Kupfer oder Aluminium, für den Griff aber Kunststoff oder Holz?
antwort: |
  Der Boden soll die Wärme der Herdplatte schnell und gleichmäßig an das Essen weitergeben. Dafür braucht man ein
  Material mit großer Wärmeleitfähigkeit wie Kupfer ($400$) oder Aluminium ($235\,\tfrac{\text{W}}{\text{m}\cdot\text{K}}$).
  Der Griff soll dagegen möglichst wenig Wärme zur Hand leiten. Kunststoff und Holz leiten Wärme mehrere tausendmal
  schlechter als Kupfer, deshalb bleibt der Griff kühl.
```

### Aufgaben zur Wärmeleitung

```aufgabe
id: p10-waermeleitung
titel: Wärmeverlust durch eine Dämmung
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Eine Hauswand mit $100\,\text{m}^2$ ist mit $10\,\text{cm}$ Styropor ($\lambda = 0{,}040\,\tfrac{\text{W}}{\text{m}\cdot\text{K}}$) gedämmt. Innen ist es $20\,\text{K}$ wärmer als außen. Wie groß ist der Wärmestrom durch die Dämmschicht?
teile:
  - typ: zahl
    loesung: "0.040*100*20/0.10"
    einheit: "W"
    anzeige: '800'
    fehler:
      - wert: "0.040*100*20/10"
        meldung: |
          Du hast die Dicke in Zentimetern eingesetzt. Weil $\lambda$ in $\tfrac{\text{W}}{\text{m}\cdot\text{K}}$ angegeben ist, muss $d$ in Metern stehen: $d = 0{,}10\,\text{m}$.
      - wert: "0.040*100*20"
        meldung: |
          Die Dicke fehlt. Eine dickere Wand lässt weniger Wärme durch, also steht $d$ im Nenner.
hinweise:
  - '$P = \lambda\,A\,\Delta T/d$ mit $d$ in Metern.'
loesung: |
  **Ansatz:** Wärmeleitung durch eine einzelne Schicht: $P = \lambda\,\dfrac{A\,\Delta T}{d}$ mit $d = 0{,}10\,\text{m}$.
  ---
  **Rechnung:** $P = 0{,}040\,\tfrac{\text{W}}{\text{m}\cdot\text{K}}\cdot\dfrac{100\,\text{m}^2\cdot 20\,\text{K}}{0{,}10\,\text{m}} = 800\,\text{W}$.
  ---
  **Einordnung:** Mit $20\,\text{cm}$ Dämmung wären es nur $400\,\text{W}$, denn doppelte Dicke halbiert den Wärmestrom.
```

```aufgabe
id: p10-daemmung-verdoppeln
titel: Doppelte Dämmung
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Ein Dachboden ist mit $8\,\text{cm}$ Mineralwolle gedämmt. Man verstärkt die Dämmung auf $16\,\text{cm}$ aus demselben Material. Mit welchem Faktor muss man den bisherigen Wärmestrom multiplizieren?
teile:
  - typ: zahl
    loesung: "8/16"
    anzeige: '0{,}5'
    fehler:
      - wert: "2"
        meldung: |
          Mehr Dämmung lässt **weniger** Wärme durch. Die Dicke steht in $P = \lambda A\Delta T/d$ im Nenner.
      - wert: "0.25"
        meldung: |
          Der Wärmestrom ist umgekehrt proportional zur Dicke, nicht zu ihrem Quadrat. Doppelte Dicke halbiert ihn.
hinweise:
  - In $P = \lambda A\Delta T/d$ steht die Dicke im Nenner.
loesung: |
  **Ansatz:** Bei gleichem Material, gleicher Fläche und gleichem Temperaturunterschied ist $P$ umgekehrt proportional zu $d$.
  ---
  **Ergebnis:** Doppelte Dicke heißt halber Wärmestrom, also Faktor $0{,}5$.
```

```aufgabe
id: p10-pullover
titel: Wärmt ein Pullover?
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  Ein Pullover liegt seit Stunden im Zimmer ($20\,^\circ\text{C}$). Man wickelt ein Thermometer, das ebenfalls $20\,^\circ\text{C}$ hat, dick in den Pullover ein und wartet eine Stunde. Was zeigt das Thermometer, und warum?
teile:
  - typ: auswahl
    optionen:
      - "Mehr als $20\\,^\\circ\\text{C}$, weil der Pullover Wärme erzeugt."
      - "Genau $20\\,^\\circ\\text{C}$, weil der Pullover keine Wärme erzeugt, sondern nur den Wärmefluss bremst."
      - "Weniger als $20\\,^\\circ\\text{C}$, weil der Pullover Kälte speichert."
      - "Mehr als $20\\,^\\circ\\text{C}$, weil Wolle Wärme aus der Luft sammelt."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Ein Pullover hat keine Energiequelle, er kann keine Wärme erzeugen. Er fühlt sich am Körper warm an, weil er die Wärme festhält, die **dein Körper** erzeugt.
      - wert: 2
        meldung: |
          Kälte ist kein Stoff, den man speichern könnte. Pullover und Thermometer haben beide Zimmertemperatur, also fließt keine Wärme.
      - wert: 3
        meldung: |
          Wärme fließt nur von warm nach kalt. Ohne Temperaturunterschied gibt es nichts zu sammeln.
hinweise:
  - Hat der Pullover eine eigene Energiequelle?
  - Welche Temperatur haben Pullover und Thermometer am Anfang? Kann dann Wärme fließen?
loesung: |
  **Gedankenexperiment:** Pullover und Thermometer haben beide $20\,^\circ\text{C}$. Ohne Temperaturunterschied fließt keine Wärme, und der Pullover hat keine Energiequelle.
  ---
  **Ergebnis:** Das Thermometer zeigt weiter $20\,^\circ\text{C}$.
  ---
  **Deutung:** Ein Pullover ist eine Wärmedämmung. Am Körper bremst er den Wärmestrom vom warmen Körper nach außen, vor allem durch die eingeschlossene ruhende Luft. Deshalb fühlt er sich warm an.
```

```aufgabe
id: p10-styropor-luft
titel: Warum dämmt Styropor so gut?
niveau: 2
lernziel: 5
kompetenz: verstehen
angabe: |
  Der Kunststoff Polystyrol hat als massiver Block eine Wärmeleitfähigkeit von etwa $0{,}17\,\tfrac{\text{W}}{\text{m}\cdot\text{K}}$. Aufgeschäumt als Styropor sind es nur $0{,}035\,\tfrac{\text{W}}{\text{m}\cdot\text{K}}$. Warum dämmt das aufgeschäumte Material so viel besser?
teile:
  - typ: auswahl
    optionen:
      - "Styropor besteht zu etwa $98\\,\\%$ aus Luft in kleinen geschlossenen Zellen. Ruhende Luft leitet Wärme sehr schlecht und kann in den Zellen nicht strömen."
      - "Beim Aufschäumen entsteht ein Stoff, der Kälte abhält."
      - "Styropor ist weiß und strahlt deshalb keine Wärme ab."
      - "Die Luft in den Zellen strömt ständig und trägt die Wärme ab."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Ein Stoff kann keine „Kälte abhalten“, denn Kälte ist kein Stoff. Eine Dämmung bremst den **Wärme**strom von warm nach kalt.
      - wert: 2
        meldung: |
          Die Farbe beeinflusst die Strahlung an der Oberfläche, nicht die Leitung durch das Material. Innen ist entscheidend, woraus der Schaum besteht.
      - wert: 3
        meldung: |
          Wenn die Luft strömen könnte, würde sie Wärme durch Konvektion transportieren und schlecht dämmen. Gerade das verhindern die kleinen geschlossenen Zellen.
hinweise:
  - Woraus besteht der Schaum hauptsächlich, wenn man das Volumen betrachtet?
  - Welcher Stoff hat die kleinste Wärmeleitfähigkeit in der Liste, und warum darf er sich nicht bewegen?
loesung: |
  **Ansatz:** Ein Schaum besteht überwiegend aus Gas. Die Wärmeleitfähigkeit des Schaums liegt deshalb nahe an der des eingeschlossenen Gases.
  ---
  **Luft:** Ruhende Luft hat $\lambda = 0{,}026\,\tfrac{\text{W}}{\text{m}\cdot\text{K}}$, viel weniger als massiver Kunststoff.
  ---
  **Zellen:** Die kleinen geschlossenen Zellen verhindern, dass die Luft strömt. So entfällt auch die Konvektion. Deshalb erreicht Styropor fast den Wert ruhender Luft.
```

```aufgabe
id: p10-kuehlbox
titel: Wie lange hält das Eis in der Kühlbox?
niveau: 2
lernziel: 5
kompetenz: modellieren
angabe: |
  Eine Kühlbox hat Wände aus $5{,}0\,\text{cm}$ Styropor ($\lambda = 0{,}035\,\tfrac{\text{W}}{\text{m}\cdot\text{K}}$) mit einer Gesamtfläche von $0{,}80\,\text{m}^2$. Innen liegen $2{,}0\,\text{kg}$ Eis von $0\,^\circ\text{C}$, außen hat es $25\,^\circ\text{C}$.

  a) Wie groß ist der Wärmestrom in die Box?

  b) Wie viele Stunden dauert es, bis das ganze Eis geschmolzen ist ($q_s = 334\,\text{kJ/kg}$)? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    label: a) Wärmestrom
    loesung: "0.035*0.8*25/0.05"
    einheit: "W"
    anzeige: '14'
    fehler:
      - wert: "0.035*0.8*25/5"
        meldung: |
          Die Dicke muss in Metern stehen: $5{,}0\,\text{cm} = 0{,}050\,\text{m}$.
  - typ: zahl
    label: b) Zeit
    loesung: "2*334000/(0.035*0.8*25/0.05)/3600"
    einheit: "h"
    anzeige: '13{,}3'
    toleranz: 0.1
    fehler:
      - wert: "2*334000/(0.035*0.8*25/0.05)"
        meldung: |
          Das ist die Zeit in Sekunden. Eine Stunde hat $3600\,\text{s}$.
hinweise:
  - 'Für a): $P = \lambda A\Delta T/d$ mit $\Delta T = 25\,\text{K}$ und $d = 0{,}050\,\text{m}$.'
  - 'Für b): Das Eis braucht $Q = q_s\,m$ zum Schmelzen. Die Zeit ist $t = Q/P$.'
loesung: |
  **Ansatz:** Durch die Wände fließt Wärme von außen nach innen. Solange Eis da ist, bleibt es innen bei $0\,^\circ\text{C}$, also ist der Wärmestrom konstant. Die Wärme schmilzt das Eis.
  ---
  **a)** $P = 0{,}035\,\tfrac{\text{W}}{\text{m}\cdot\text{K}}\cdot\dfrac{0{,}80\,\text{m}^2\cdot 25\,\text{K}}{0{,}050\,\text{m}} = 14\,\text{W}$.
  ---
  **b)** Schmelzen braucht $Q = 334\,000\,\tfrac{\text{J}}{\text{kg}}\cdot 2{,}0\,\text{kg} = 668\,000\,\text{J}$. Also $t = 668\,000\,\text{J}/14\,\text{W} = 47\,700\,\text{s} = 13{,}3\,\text{h}$.
  ---
  **Plausibilität:** Gut einen halben Tag. Das passt zur Erfahrung mit Kühlboxen. Jedes Öffnen lässt warme Luft hinein und verkürzt die Zeit.
```

```aufgabe
id: p10-u-wert
titel: Wärmeverlust mit dem U-Wert
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Die Außenwände eines Einfamilienhauses haben zusammen $120\,\text{m}^2$ und einen U-Wert von $0{,}25\,\tfrac{\text{W}}{\text{m}^2\cdot\text{K}}$. Innen hat es $20\,^\circ\text{C}$, außen $0\,^\circ\text{C}$.

  a) Wie groß ist der Wärmestrom durch die Wände?

  b) Wie viel Wärme geht an einem Tag durch die Wände verloren, in kWh?
teile:
  - typ: zahl
    label: a) Wärmestrom
    loesung: "0.25*120*20"
    einheit: "W"
    anzeige: '600'
    fehler:
      - wert: "0.25*120*(20+273.15)"
        meldung: |
          In die Formel gehört der **Temperaturunterschied** zwischen innen und außen, $\Delta T = 20\,\text{K}$, keine absolute Temperatur.
  - typ: zahl
    label: b) Wärme pro Tag
    loesung: "0.25*120*20*24/1000"
    einheit: "kWh"
    anzeige: '14{,}4'
    fehler:
      - wert: "0.25*120*20*24"
        meldung: |
          Das sind Wattstunden. Gefragt sind Kilowattstunden, also durch $1000$ teilen.
      - wert: "0.25*120*20*86400"
        meldung: |
          Das ist das Ergebnis in Joule (Wattsekunden). Gefragt sind kWh. Rechne mit $0{,}6\,\text{kW}\cdot 24\,\text{h}$.
hinweise:
  - 'Mit dem U-Wert gilt $P = U\cdot A\cdot\Delta T$.'
  - 'Energie ist Leistung mal Zeit. In kW und Stunden gerechnet erhältst du direkt kWh.'
loesung: |
  **Ansatz:** Der U-Wert fasst Material und Dicke zusammen. Es gilt $P = U\cdot A\cdot\Delta T$.
  ---
  **a)** $P = 0{,}25\,\tfrac{\text{W}}{\text{m}^2\cdot\text{K}}\cdot 120\,\text{m}^2\cdot 20\,\text{K} = 600\,\text{W}$.
  ---
  **b)** $E = P\cdot t = 0{,}60\,\text{kW}\cdot 24\,\text{h} = 14{,}4\,\text{kWh}$.
  ---
  **Einordnung:** Dazu kommen noch Fenster, Dach, Boden und Lüftung. Die Wände allein kosten an einem solchen Tag etwa so viel Energie wie drei Vollbäder (ein Vollbad mit $150\,\text{L}$ von $15$ auf $40\,^\circ\text{C}$ braucht etwa $4{,}4\,\text{kWh}$).
```

```aufgabe
id: p10-daunen-nass
titel: Warum eine nasse Daunenjacke kaum wärmt
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  Eine trockene Daunenjacke hält sehr warm. Wird sie im Regen durchnässt, wärmt sie kaum noch. Erkläre das mit der Wärmeleitung. Ruhende Luft hat $\lambda = 0{,}026\,\tfrac{\text{W}}{\text{m}\cdot\text{K}}$, Wasser $\lambda = 0{,}6\,\tfrac{\text{W}}{\text{m}\cdot\text{K}}$.
teile:
  - typ: text
    muster: |
      Die Daunen selbst dämmen kaum. Sie halten aber sehr viel Luft fest und verhindern, dass sie strömt. Ruhende Luft
      leitet Wärme sehr schlecht. Wird die Jacke nass, verdrängt Wasser die Luft zwischen den Daunen, und die Daunen
      fallen zusammen. Wasser leitet Wärme etwa zwanzigmal besser als ruhende Luft ($0{,}6$ gegenüber $0{,}026$), und die
      Schicht wird dünner. Beides vergrößert den Wärmestrom vom Körper nach außen stark. Dazu kommt, dass das Wasser
      verdunstet und dem Körper zusätzlich Wärme entzieht.
hinweise:
  - Was befindet sich zwischen den Daunen, wenn die Jacke trocken ist, und was, wenn sie nass ist?
  - Vergleiche die beiden Wärmeleitfähigkeiten. Was passiert außerdem mit dem Wasser auf der Jacke?
loesung: |
  **Ansatz:** Eine Dämmung wirkt durch ruhende Luft. Ihre Wärmeleitfähigkeit ist sehr klein.
  ---
  **Nass:** Wasser verdrängt die Luft. Es leitet Wärme etwa $0{,}6/0{,}026 \approx 23$-mal besser. Außerdem fallen die Daunen zusammen, die Schicht wird dünner.
  ---
  **Folge:** Der Wärmestrom $P = \lambda A\Delta T/d$ wird viel größer, weil $\lambda$ wächst und $d$ schrumpft. Zusätzlich kühlt das verdunstende Wasser.
```

```aufgabe
id: p10-zusammengesetzte-wand
titel: Holzwand mit Dämmung
niveau: 3
lernziel: 5
kompetenz: modellieren
angabe: |
  Die Wand einer Gartenhütte hat $15\,\text{m}^2$. Sie besteht innen aus $4{,}0\,\text{cm}$ Holz ($\lambda = 0{,}13\,\tfrac{\text{W}}{\text{m}\cdot\text{K}}$) und außen aus $10\,\text{cm}$ Mineralwolle ($\lambda = 0{,}040\,\tfrac{\text{W}}{\text{m}\cdot\text{K}}$). Innen hat es $21\,^\circ\text{C}$, außen $-4\,^\circ\text{C}$.

  a) Wie groß ist der Wärmestrom durch die Wand? Runde auf ganze Watt.

  b) Welche Temperatur herrscht an der Grenze zwischen Holz und Mineralwolle? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    label: a) Wärmestrom
    loesung: "25/(0.04/(0.13*15)+0.10/(0.040*15))"
    einheit: "W"
    anzeige: '134'
    toleranz: 1
    fehler:
      - wert: "25/(0.04/(0.13*15))+25/(0.10/(0.040*15))"
        meldung: |
          Du hast die Wärmeströme der beiden Schichten addiert. Die Schichten liegen aber **hintereinander**. Dann addieren sich die Widerstände, und durch beide fließt derselbe Strom.
      - wert: "25/(0.10/(0.040*15))"
        meldung: |
          Du hast nur die Dämmung berücksichtigt. Auch das Holz hat einen Wärmewiderstand, der sich zu dem der Dämmung addiert.
  - typ: zahl
    label: b) Grenztemperatur
    loesung: "21 - 25/(0.04/(0.13*15)+0.10/(0.040*15))*0.04/(0.13*15)"
    einheit: "°C"
    anzeige: '18{,}3'
    toleranz: 0.1
    fehler:
      - wert: "-4 + 25/(0.04/(0.13*15)+0.10/(0.040*15))*0.04/(0.13*15)"
        meldung: |
          Du bist von der falschen Seite ausgegangen. Das Holz liegt **innen**. Der Temperaturabfall im Holz wird also von den $21\,^\circ\text{C}$ innen abgezogen.
hinweise:
  - 'Berechne für jede Schicht den Wärmewiderstand $R = d/(\lambda A)$.'
  - 'Hintereinander addieren sich die Widerstände. Dann $P = \Delta T/(R_1 + R_2)$.'
  - Der Temperaturabfall im Holz ist $P\cdot R_\text{Holz}$. Zieh ihn von der Innentemperatur ab.
gefuehrt:
  - text: Wie groß ist der Wärmewiderstand des Holzes in K/W?
    teil: { typ: zahl, loesung: "0.04/(0.13*15)" }
    erklaerung: $R_1 = \dfrac{0{,}040\,\text{m}}{0{,}13\,\tfrac{\text{W}}{\text{m}\cdot\text{K}}\cdot 15\,\text{m}^2} = 0{,}0205\,\text{K/W}$.
  - text: Wie groß ist der Wärmewiderstand der Mineralwolle in K/W?
    teil: { typ: zahl, loesung: "0.10/(0.040*15)" }
    erklaerung: $R_2 = \dfrac{0{,}10\,\text{m}}{0{,}040\,\tfrac{\text{W}}{\text{m}\cdot\text{K}}\cdot 15\,\text{m}^2} = 0{,}167\,\text{K/W}$. Die Dämmung bremst achtmal stärker als das Holz.
  - text: Berechne den Wärmestrom in Watt.
    teil: { typ: zahl, loesung: "25/(0.04/(0.13*15)+0.10/(0.040*15))", toleranz: 1 }
    erklaerung: $P = \dfrac{25\,\text{K}}{0{,}0205\,\text{K/W} + 0{,}167\,\text{K/W}} = \dfrac{25\,\text{K}}{0{,}187\,\text{K/W}} = 134\,\text{W}$.
  - text: Wie groß ist die Temperatur an der Grenze zwischen Holz und Dämmung?
    teil: { typ: zahl, loesung: "21 - 25/(0.04/(0.13*15)+0.10/(0.040*15))*0.04/(0.13*15)", toleranz: 0.1 }
    erklaerung: Im Holz fällt die Temperatur um $134\,\text{W}\cdot 0{,}0205\,\text{K/W} = 2{,}7\,\text{K}$. An der Grenze sind es also $21 - 2{,}7 = 18{,}3\,^\circ\text{C}$.
loesung: |
  **Ansatz:** Die Wärme fließt nacheinander durch Holz und Dämmung. Durch beide fließt derselbe Wärmestrom, und ihre Wärmewiderstände addieren sich wie Widerstände in Reihe.
  ---
  **Widerstände:** $R_1 = \dfrac{0{,}040\,\text{m}}{0{,}13\,\tfrac{\text{W}}{\text{m}\cdot\text{K}}\cdot 15\,\text{m}^2} = 0{,}0205\,\tfrac{\text{K}}{\text{W}}$, $R_2 = \dfrac{0{,}10\,\text{m}}{0{,}040\,\tfrac{\text{W}}{\text{m}\cdot\text{K}}\cdot 15\,\text{m}^2} = 0{,}167\,\tfrac{\text{K}}{\text{W}}$.
  ---
  **a)** $\Delta T = 21 - (-4) = 25\,\text{K}$. $P = \dfrac{25\,\text{K}}{0{,}187\,\text{K/W}} = 134\,\text{W}$.
  ---
  **b)** Im Holz fällt die Temperatur um $P\cdot R_1 = 134\,\text{W}\cdot 0{,}0205\,\tfrac{\text{K}}{\text{W}} = 2{,}7\,\text{K}$. An der Grenze herrschen $21\,^\circ\text{C} - 2{,}7\,\text{K} = 18{,}3\,^\circ\text{C}$.
  ---
  **Probe:** In der Dämmung fällt die Temperatur um $134\cdot 0{,}167\,\text{K} = 22{,}3\,\text{K}$. Zusammen $2{,}7 + 22{,}3 = 25\,\text{K}$, das ist genau der gesamte Unterschied.
```

## Konvektion und Wärmestrahlung

```aufgabe
id: p10-8-check
art: check
titel: "Vorwissen: Auftrieb und Dichte"
niveau: 1
angabe: |
  Über einer Heizung steigt warme Luft nach oben. Warum?
teile:
  - typ: auswahl
    optionen:
      - "Warme Luft hat eine kleinere Dichte als die kalte Luft um sie herum. Der Auftrieb ist deshalb größer als ihr Gewicht."
      - "Wärme steigt immer nach oben, weil sie leichter ist als Kälte."
      - "Die Heizung bläst die Luft aktiv nach oben."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Wärme ist kein Stoff und hat kein Gewicht. Es steigt die **warme Luft** auf, weil sie sich ausgedehnt hat und dadurch leichter ist als gleich viel kalte Luft.
      - wert: 2
        meldung: |
          Ein normaler Heizkörper hat kein Gebläse. Die Luft steigt von selbst auf, wegen des Auftriebs.
hinweise:
  - Was passiert mit dem Volumen und damit mit der Dichte von Luft, wenn man sie erwärmt?
loesung: |
  Erwärmte Luft dehnt sich aus, ihre Dichte sinkt. Ein Körper mit kleinerer Dichte als seine Umgebung erfährt einen Auftrieb, der größer ist als sein Gewicht.
  ---
  Die warme Luft steigt deshalb auf wie ein Korken im Wasser. Wiederholen: [9.4 Auftrieb: das Prinzip von Archimedes](/lernen/physik1/hydro-aeromechanik/auftrieb-das-prinzip-von-archimedes).
```

Neben der Wärmeleitung gibt es zwei weitere Wege, auf denen Wärme transportiert wird. Bei der **Konvektion**
strömt warmer Stoff selbst von einem Ort zum anderen und nimmt seine innere Energie mit. Bei der
**Wärmestrahlung** reist die Energie als elektromagnetische Strahlung, ganz ohne Stoff. So kommt die Wärme der
Sonne durch den leeren Weltraum zu uns.

### Konvektion: Die Strömung trägt die Wärme

Ein Heizkörper erwärmt die Luft direkt an seiner Oberfläche. Diese Luft dehnt sich aus, wird leichter und
steigt nach oben. Unter der Decke strömt sie zur gegenüberliegenden Wand, kühlt dabei ab, sinkt nach unten und
strömt am Boden zum Heizkörper zurück. Es entsteht eine **Konvektionswalze**. So erwärmt ein Heizkörper das ganze
Zimmer, obwohl Luft ein schlechter Wärmeleiter ist.

```plot
x: [0, 10]
y: [0, 6]
gleich: true
hoehe: 260
strecken:
  - { von: [0, 0], nach: [10, 0] }
  - { von: [0, 0], nach: [0, 6] }
  - { von: [10, 0], nach: [10, 6] }
  - { von: [0, 6], nach: [10, 6] }
  - { von: [0.3, 0.5], nach: [0.3, 2.5], farbe: 1 }
vektoren:
  - { von: [1, 1.5], nach: [1, 5], label: "warm, steigt", farbe: 1 }
  - { von: [1.5, 5.4], nach: [8.5, 5.4], farbe: 1 }
  - { von: [9, 5], nach: [9, 1.5], label: "kühlt ab, sinkt", farbe: 0 }
  - { von: [8.5, 0.6], nach: [1.5, 0.6], farbe: 0 }
punkte:
  - { x: 0.3, y: 2.8, label: "Heizkörper" }
beschriftung: "Konvektionswalze in einem Zimmer. Am Heizkörper (links) erwärmte Luft steigt auf, strömt unter der Decke nach rechts, kühlt ab, sinkt an der kalten Wand nach unten und strömt am Boden zurück."
```

Konvektion gibt es nur in Flüssigkeiten und Gasen, denn nur dort können sich die Teilchen frei verschieben.
Weitere Beispiele sind die Warmwasserheizung, der Golfstrom, die Thermik, mit der Segelflieger und Greifvögel
aufsteigen, und der Land- und Seewind. Treibt ein Ventilator oder eine Pumpe die Strömung an, spricht man von
**erzwungener Konvektion**. Beispiele sind der Haartrockner (Föhn), der Computerlüfter und der Kühler im Auto.

### Wärmestrahlung

Jeder Körper sendet elektromagnetische Strahlung aus, und zwar umso mehr, je heißer er ist. Bei Zimmertemperatur
ist sie unsichtbares **Infrarot**. Eine Wärmebildkamera macht sie sichtbar. Ab etwa $500\,^\circ\text{C}$ beginnt ein
Körper dunkelrot zu glühen, bei noch höheren Temperaturen gelb und weiß. Strahlung braucht **kein Medium**. Sie
geht auch durch das Vakuum.

Ein idealer Strahler heißt **schwarzer Körper**. Er absorbiert alle Strahlung, die auf ihn trifft, und strahlt
bei gegebener Temperatur am meisten ab. Für ihn gilt ein einfaches Gesetz:

:::formel[Stefan-Boltzmann-Gesetz]
$$P = \varepsilon\cdot\sigma\cdot A\cdot T^4$$
Dabei ist $P$ die abgestrahlte Leistung, $A$ die Oberfläche und $T$ die absolute Temperatur in **Kelvin**. Die
**Stefan-Boltzmann-Konstante** ist $\sigma = 5{,}67\cdot 10^{-8}\,\tfrac{\text{W}}{\text{m}^2\cdot\text{K}^4}$
(griechisch „sigma“). Der **Emissionsgrad** $\varepsilon$ (griechisch „epsilon“) liegt zwischen $0$ und $1$. Er ist
$1$ für einen schwarzen Körper und für menschliche Haut fast $1$.
:::

Ein Körper strahlt nicht nur ab, er empfängt auch die Strahlung seiner Umgebung. Hat die Umgebung die
Temperatur $T_U$, dann gilt für die **netto** abgegebene Leistung:
$$P_\text{netto} = \varepsilon\,\sigma\,A\,\left(T^4 - T_U^4\right).$$

Die **vierte Potenz** hat große Folgen. Doppelte absolute Temperatur bedeutet $2^4 = 16$-fache Strahlungsleistung.
Ein Körper, der gut absorbiert, strahlt auch gut ab. Matte, dunkle Flächen tun beides gut. Blanke, spiegelnde
Metallflächen tun beides schlecht. Vorsicht bei der Farbe: Sie beschreibt nur sichtbares Licht. Im Infraroten,
also bei der Wärmestrahlung von Körpern mit Zimmertemperatur, strahlt weißer Lack fast so gut ab wie schwarzer
($\varepsilon \approx 0{,}9$).

:::beispiel[Wie viel Leistung strahlt die Sonne ab?]
Die Sonne hat den Radius $R = 6{,}96\cdot 10^{8}\,\text{m}$ und eine Oberflächentemperatur von $5778\,\text{K}$. Sie
strahlt fast wie ein schwarzer Körper, also $\varepsilon = 1$.

**Schritt 1, Oberfläche:** Eine Kugel hat die Oberfläche $A = 4\pi R^2 = 4\pi\cdot(6{,}96\cdot 10^{8}\,\text{m})^2 = 6{,}09\cdot 10^{18}\,\text{m}^2$.

**Schritt 2, einsetzen:**
$P = 5{,}67\cdot 10^{-8}\,\tfrac{\text{W}}{\text{m}^2\cdot\text{K}^4}\cdot 6{,}09\cdot 10^{18}\,\text{m}^2\cdot(5778\,\text{K})^4 = 3{,}85\cdot 10^{26}\,\text{W}$.
Quadratmeter und $\text{K}^4$ kürzen sich, es bleiben Watt.

**Einordnung:** Davon trifft nur ein winziger Bruchteil die Erde. Dort kommen außerhalb der Atmosphäre etwa
$1360\,\text{W}$ pro Quadratmeter an (die sogenannte Solarkonstante).
:::

:::beispiel[Eine glühende Herdplatte]
Eine Herdplatte mit $A = 0{,}020\,\text{m}^2$ glüht mit $900\,\text{K}$ (etwa $630\,^\circ\text{C}$). Die Küche hat
$293\,\text{K}$. Wir nehmen $\varepsilon = 1$ an.

**Rechnung:** $P_\text{netto} = 5{,}67\cdot 10^{-8}\cdot 0{,}020\cdot\left(900^4 - 293^4\right)\,\text{W}
= 5{,}67\cdot 10^{-8}\cdot 0{,}020\cdot 6{,}49\cdot 10^{11}\,\text{W} = 736\,\text{W}$.

**Deutung:** Das ist ein großer Teil der Leistung einer Herdplatte. Deshalb spürt man die Hitze schon mit der
Hand darüber, ohne die Platte zu berühren. Der Beitrag der Küche ($293^4$) ist im Vergleich zu $900^4$ klein.
:::

:::achtung[Fehler: Grad Celsius in das Stefan-Boltzmann-Gesetz einsetzen]
Haut mit $34\,^\circ\text{C}$ ($1{,}7\,\text{m}^2$) strahlt gegen Wände mit $18\,^\circ\text{C}$. Eine Schülerin rechnet
$P = 5{,}67\cdot 10^{-8}\cdot 1{,}7\cdot(34^4 - 18^4)\,\text{W} = 0{,}12\,\text{W}$.

Das ist absurd wenig. Das Gesetz gilt nur mit **absoluten** Temperaturen, weil $T$ hier allein als Potenz steht.
Richtig ist $P = 5{,}67\cdot 10^{-8}\cdot 1{,}7\cdot(307{,}15^4 - 291{,}15^4)\,\text{W} = 165\,\text{W}$.
:::

:::achtung[Fehler: „Doppelte Temperatur, sechzehnfache Strahlung“ in Celsius]
Ein Schüler sagt: „Von $20\,^\circ\text{C}$ auf $40\,^\circ\text{C}$ verdoppelt sich die Temperatur, also steigt die
Strahlung auf das Sechzehnfache.“

In Kelvin steigt die Temperatur nur von $293{,}15\,\text{K}$ auf $313{,}15\,\text{K}$. Die Strahlung wächst um den
Faktor $(313{,}15/293{,}15)^4 = 1{,}30$, also um $30\,\%$ und nicht auf das Sechzehnfache.
:::

```aufgabe
id: p10-8-farbe-check
art: check
titel: "Vorhersage: Welches Auto heizt sich auf?"
niveau: 1
angabe: |
  Ein schwarzes und ein weißes Auto stehen im Sommer in der Sonne. Welches wird innen heißer, und warum?
teile:
  - typ: auswahl
    optionen:
      - "Das schwarze, weil dunkle Flächen die Sonnenstrahlung besser absorbieren."
      - "Das weiße, weil Weiß die Wärme festhält."
      - "Beide gleich, weil die Lufttemperatur gleich ist."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Weiße Flächen **reflektieren** einen großen Teil des Sonnenlichts. Es wird gar nicht erst aufgenommen.
      - wert: 2
        meldung: |
          Die Luft ist gleich warm, aber die Sonnenstrahlung liefert zusätzlich Energie. Wie viel davon aufgenommen wird, hängt von der Farbe ab.
hinweise:
  - Welche Fläche absorbiert Strahlung besser, eine dunkle oder eine helle?
loesung: |
  Dunkle Flächen absorbieren Strahlung gut, helle reflektieren sie.
  ---
  Das schwarze Auto nimmt deshalb mehr Energie aus dem Sonnenlicht auf und wird heißer.
```

### Was Kleidung, Thermoskanne und Rettungsdecke tun

Kleidung wirkt vor allem gegen Leitung und Konvektion. Die zwischen den Fasern eingeschlossene Luft leitet
schlecht und kann nicht strömen, siehe [10.7 Wärmeleitung](/lernen/physik1/temperatur-waerme-gase/waermeleitung).
Auf die Strahlung wirkt Kleidung nur indirekt. Ihre Außenseite ist kühler als die Haut und strahlt deshalb
weniger ab. Kleidung ist also **kein** Strahlungsschutz in erster Linie, sondern eine Luftpolster-Dämmung.

:::beispiel[Die Thermoskanne bekämpft alle drei Wege]
Eine Thermoskanne hält Tee stundenlang heiß. Jedes Bauteil bremst einen anderen Transportweg.

**Doppelwand mit Vakuum:** Zwischen den beiden Glaswänden ist fast keine Luft. Ohne Teilchen gibt es weder
Wärmeleitung noch Konvektion.

**Verspiegelung:** Die Glaswände sind innen verspiegelt. Sie reflektieren die Wärmestrahlung des Tees zurück
und strahlen selbst kaum ab.

**Stopfen:** Der Verschluss aus schlecht leitendem Kunststoff verhindert, dass warme Luft nach oben entweicht.

**Ergebnis:** Übrig bleibt nur eine schwache Wärmeleitung über den Glashals. Der Tee kühlt in sechs Stunden nur um
etwa $15$ bis $20\,\text{K}$ ab.
:::

### Wie schnell kühlt etwas ab? (Vertiefung)

Eine Tasse Tee kühlt am Anfang schnell ab und dann immer langsamer. Der Grund: Der Wärmestrom zur Umgebung ist
ungefähr proportional zum **Temperaturunterschied** $T - T_U$. Ist der Tee viel heißer als das Zimmer, verliert er
schnell Wärme. Kurz vor der Zimmertemperatur fließt kaum noch etwas. Daraus folgt das **Abkühlungsgesetz von Newton**:
$$T(t) = T_U + (T_0 - T_U)\cdot e^{-k t}.$$
Dabei ist $T_0$ die Anfangstemperatur, $T_U$ die Umgebungstemperatur und $k$ die **Abkühlungskonstante**. Sie hängt
von der Tasse, der Flüssigkeit und der Luftbewegung ab. Der Temperaturunterschied nimmt also **exponentiell** ab,
wie bei einem radioaktiven Zerfall. Mehr dazu in Mathematik,
[Exponentialfunktionen](/lernen/mathe3/funktionen/exponentialfunktionen) und
[Wachstum, Zerfall, Abkühlung](/lernen/mathe3/integralrechnung/wachstum-zerfall-abkuehlung-einfache-differentialgleichungen-vertiefung).

```plot
x: [0, 60]
y: [0, 100]
hoehe: 280
achsen: { x: "Zeit in min", y: "Temperatur in °C" }
graphen:
  - { f: "20 + 70*exp(-0.05596*x)", von: 0, bis: 60, farbe: 0, label: "Tee" }
  - { f: "20", von: 0, bis: 60, farbe: 2, gestrichelt: true, label: "Zimmer" }
punkte:
  - { x: 0, y: 90, label: "90 °C" }
  - { x: 10, y: 60, label: "60 °C nach 10 min" }
beschriftung: "Abkühlung einer Tasse Tee nach dem Newtonschen Abkühlungsgesetz. Der Tee kühlt zuerst schnell und dann immer langsamer ab und nähert sich der Zimmertemperatur von 20 °C (gestrichelt)."
```

:::merke
**Welcher Transportweg?** Wandert Energie durch ruhenden Stoff, ist es **Leitung**. Strömt der warme Stoff selbst,
ist es **Konvektion**. Geht Energie ohne Stoff, auch durch Vakuum, ist es **Strahlung**. Bei Strahlungsrechnungen
gilt immer: Temperaturen in Kelvin, vierte Potenz, netto mit $T^4 - T_U^4$.
:::

```reflexion
frage: Warum friert man in einem Raum mit kalten Wänden, auch wenn die Luft angenehme 22 °C hat?
antwort: |
  Der Körper verliert Wärme nicht nur an die Luft, sondern auch durch Strahlung an die Wände. Die netto abgestrahlte
  Leistung hängt von $T_\text{Haut}^4 - T_\text{Wand}^4$ ab. Sind die Wände kalt, ist dieser Unterschied groß, und
  der Körper strahlt viel Energie ab, egal wie warm die Luft ist. Deshalb fühlt sich ein Raum mit warmen Wänden, etwa
  mit einem Kachelofen, bei gleicher Lufttemperatur viel behaglicher an.
```

### Aufgaben zu Konvektion und Wärmestrahlung

```aufgabe
id: p10-transportart
titel: Welche Art von Wärmetransport?
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Welche Vorgänge beruhen **hauptsächlich auf Konvektion**? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Ein Heizkörper erwärmt das ganze Zimmer."
      - "Der Griff eines Metalllöffels im Tee wird warm."
      - "Die Sonne erwärmt die Erde."
      - "Ein Segelflieger steigt in der Thermik."
      - "Ein Lagerfeuer wärmt das Gesicht."
    richtig: [0, 3]
    fehler:
      - wert: [0, 1, 3]
        meldung: |
          Im Löffel strömt nichts. Die Energie wandert durch das ruhende Metall von Teilchen zu Teilchen. Das ist Wärmeleitung.
      - wert: [0, 2, 3]
        meldung: |
          Zwischen Sonne und Erde ist Vakuum, dort kann nichts strömen. Die Energie kommt als Strahlung.
      - wert: [0, 3, 4]
        meldung: |
          Die heiße Luft eines Lagerfeuers steigt nach oben, nicht seitlich zum Gesicht. Was du im Gesicht spürst, ist Wärmestrahlung.
hinweise:
  - Bei Konvektion strömt der warme Stoff selbst. Wo strömt in den Beispielen etwas?
loesung: |
  **Konvektion:** Am Heizkörper und in der Thermik steigt warme Luft auf und trägt ihre Energie mit.
  ---
  **Andere Wege:** Im Löffel ist es Wärmeleitung. Sonne und Lagerfeuer wärmen durch Strahlung.
```

```aufgabe
id: p10-schwarz-weiss
titel: Welche Oberfläche strahlt am meisten ab?
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Vier gleich große Blechdosen sind mit heißem Wasser gleicher Temperatur gefüllt. Sie unterscheiden sich nur in der Oberfläche. Welche kühlt durch Strahlung am schnellsten ab?
teile:
  - typ: auswahl
    optionen:
      - "die matt schwarz lackierte Dose"
      - "die glänzend weiß lackierte Dose"
      - "die blank polierte, spiegelnde Dose"
      - "alle gleich schnell, weil die Temperatur gleich ist"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Überraschend: Im Infraroten strahlt weißer Lack fast so gut ab wie schwarzer ($\varepsilon \approx 0{,}9$). Die Farbe, die das Auge sieht, sagt über die Wärmestrahlung wenig. Matt schwarzer Lack liegt mit $\varepsilon$ nahe $1$ trotzdem etwas vorn. Deutlich schlechter strahlt nur das blanke Metall.
      - wert: 2
        meldung: |
          Eine spiegelnde Fläche hat einen sehr kleinen Emissionsgrad. Deshalb sind Thermoskannen innen verspiegelt.
      - wert: 3
        meldung: |
          Bei gleicher Temperatur hängt die Strahlung noch vom Emissionsgrad $\varepsilon$ ab, und der hängt von der Oberfläche ab.
hinweise:
  - 'Im Stefan-Boltzmann-Gesetz steht außer $T$ auch der Emissionsgrad $\varepsilon$.'
loesung: |
  **Ansatz:** Die Strahlungsleistung ist $P = \varepsilon\sigma A T^4$. Bei gleicher Temperatur und Fläche entscheidet der Emissionsgrad.
  ---
  **Antwort:** Matt schwarze Flächen haben einen Emissionsgrad nahe $1$. Die schwarze Dose kühlt am schnellsten ab.
```

```aufgabe
id: p10-proportional-t4
titel: Glühlampe heller drehen
niveau: 2
lernziel: 5
kompetenz: verstehen
angabe: |
  Der Glühfaden einer Halogenlampe wird von $2400\,\text{K}$ auf $3000\,\text{K}$ geheizt. Um welchen Faktor steigt seine Strahlungsleistung? Die Umgebung kann man vernachlässigen. Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    loesung: "(3000/2400)^4"
    anzeige: '2{,}44'
    toleranz: 0.01
    fehler:
      - wert: "3000/2400"
        meldung: |
          Die Strahlungsleistung ist nicht proportional zu $T$, sondern zu $T^4$. Das Verhältnis muss in die vierte Potenz.
      - wert: "(3000/2400)^2"
        meldung: |
          Im Stefan-Boltzmann-Gesetz steht die **vierte** Potenz der Temperatur, nicht das Quadrat.
hinweise:
  - '$P \propto T^4$. Bilde das Verhältnis der Temperaturen.'
  - 'Der Faktor ist $(T_2/T_1)^4$.'
loesung: |
  **Ansatz:** Nach Stefan-Boltzmann ist $P \propto T^4$. Fläche und Emissionsgrad bleiben gleich und kürzen sich im Verhältnis.
  ---
  **Verhältnis:** $\dfrac{P_2}{P_1} = \left(\dfrac{3000\,\text{K}}{2400\,\text{K}}\right)^4 = 1{,}25^4$.
  ---
  **Ergebnis:** $1{,}25^4 = 2{,}44$. Nur $25\,\%$ mehr Temperatur liefern fast zweieinhalbmal so viel Strahlung.
```

```aufgabe
id: p10-heizkoerper
titel: Warum der Heizkörper unter dem Fenster hängt
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  In älteren Häusern hängen Heizkörper fast immer unter dem Fenster. Was ist der wichtigste Grund?
teile:
  - typ: auswahl
    optionen:
      - "Die am kalten Fenster abgekühlte Luft sinkt nach unten. Der Heizkörper erwärmt sie direkt dort, sodass keine kalte Luft über den Boden in den Raum strömt."
      - "Die Wärme des Heizkörpers soll durch das Fenster nach draußen strahlen."
      - "Unter dem Fenster kommt die Kälte herein, und der Heizkörper hält sie auf."
      - "Unter dem Fenster ist sonst kein Platz für Möbel."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Wärme nach draußen zu schicken wäre Verschwendung. Der Grund ist die Konvektion im Raum: Am kalten Glas kühlt Luft ab und sinkt.
      - wert: 2
        meldung: |
          Kälte ist kein Stoff, der hereinkommt. Am Fenster verliert der Raum Wärme, und die dort abgekühlte Luft sinkt nach unten. Genau diese Strömung fängt der Heizkörper ab.
      - wert: 3
        meldung: |
          Platz ist ein Nebeneffekt. Physikalisch entscheidend ist die Luftströmung am kalten Fenster.
hinweise:
  - Was passiert mit der Luft, die am kalten Fensterglas abkühlt?
  - Wohin strömt sie, wenn nichts sie aufhält?
loesung: |
  **Ansatz:** Am kalten Fenster kühlt die Raumluft ab, wird dichter und sinkt nach unten. Ohne Heizkörper entstünde ein kalter Luftstrom über den Boden, den man an den Füßen spürt.
  ---
  **Heizkörper darunter:** Er erwärmt die sinkende kalte Luft sofort wieder. Die warme Luft steigt am Fenster hoch und bildet eine Art Vorhang.
  ---
  **Antwort:** Die erste Aussage ist richtig. Es geht um Konvektion, nicht um Strahlung.
```

```aufgabe
id: p10-kachelofen
titel: Strahlungsleistung eines Kachelofens
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Ein Kachelofen hat eine Oberfläche von $3{,}0\,\text{m}^2$ mit $70\,^\circ\text{C}$. Die Wände des Raumes haben $20\,^\circ\text{C}$. Der Emissionsgrad der Kacheln ist $\varepsilon = 0{,}90$. Berechne die netto abgestrahlte Leistung. Runde auf ganze Watt.
teile:
  - typ: zahl
    loesung: "0.9*5.67e-8*3.0*(343.15^4-293.15^4)"
    einheit: "W"
    anzeige: '992'
    toleranz: 5
    fehler:
      - wert: "0.9*5.67e-8*3.0*(70^4-20^4)"
        meldung: |
          Du hast in Grad Celsius gerechnet. Im Stefan-Boltzmann-Gesetz steht $T$ als Potenz, also braucht man die absolute Temperatur in Kelvin.
      - wert: "0.9*5.67e-8*3.0*343.15^4"
        meldung: |
          Das ist die gesamte Abstrahlung. Der Ofen bekommt aber auch Strahlung von den Wänden zurück. Netto zählt $T^4 - T_U^4$.
      - wert: "5.67e-8*3.0*(343.15^4-293.15^4)"
        meldung: |
          Der Emissionsgrad $\varepsilon = 0{,}90$ fehlt. Kacheln sind kein idealer schwarzer Körper.
hinweise:
  - Rechne beide Temperaturen in Kelvin um.
  - '$P_\text{netto} = \varepsilon\sigma A(T^4 - T_U^4)$.'
loesung: |
  **Ansatz:** Der Ofen strahlt ab und empfängt die Strahlung der Wände. Netto gilt $P = \varepsilon\sigma A(T^4 - T_U^4)$ mit Temperaturen in Kelvin.
  ---
  **Temperaturen:** $T = 343{,}15\,\text{K}$, $T_U = 293{,}15\,\text{K}$. Dann $T^4 - T_U^4 = 1{,}387\cdot 10^{10}\,\text{K}^4 - 0{,}739\cdot 10^{10}\,\text{K}^4 = 0{,}648\cdot 10^{10}\,\text{K}^4$.
  ---
  **Rechnung:** $P = 0{,}90\cdot 5{,}67\cdot 10^{-8}\,\tfrac{\text{W}}{\text{m}^2\cdot\text{K}^4}\cdot 3{,}0\,\text{m}^2\cdot 0{,}648\cdot 10^{10}\,\text{K}^4 = 992\,\text{W}$.
  ---
  **Einordnung:** Knapp ein Kilowatt allein durch Strahlung. Dazu kommt noch Konvektion an der Ofenoberfläche. Die Strahlung macht die besondere Behaglichkeit eines Kachelofens aus.
```

```aufgabe
id: p10-rettungsdecke
titel: Wie wärmt eine Rettungsdecke?
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  Eine Rettungsdecke ist eine hauchdünne, auf einer Seite silbern glänzende Folie. Erkläre, warum sie einen unterkühlten Menschen warm hält, obwohl sie selbst kaum dämmt. Gehe auf alle drei Wege des Wärmetransports ein.
teile:
  - typ: text
    muster: |
      Strahlung: Die glänzende Seite reflektiert die Wärmestrahlung des Körpers zum Körper zurück, und sie strahlt selbst
      wegen ihres kleinen Emissionsgrads kaum ab. Konvektion: Die Folie ist luftdicht und hält eine Schicht ruhender,
      warmer Luft am Körper fest. Wind kann diese Luft nicht wegtragen. Verdunstung von Schweiß oder nasser Kleidung
      wird ebenfalls gebremst. Leitung: Gegen Leitung hilft die dünne Folie selbst kaum, nur die eingeschlossene Luft
      dämmt etwas. Deshalb sollte der Mensch zusätzlich vom kalten Boden isoliert werden.
hinweise:
  - Welche Eigenschaft hat eine glänzende Fläche in Bezug auf Strahlung?
  - Was macht eine luftdichte Folie mit der Luft direkt am Körper?
loesung: |
  **Strahlung:** Die glänzende Folie reflektiert die Wärmestrahlung des Körpers zurück und strahlt selbst kaum ab.
  ---
  **Konvektion:** Die luftdichte Folie hält ruhende warme Luft fest und schützt vor Wind. Auch die Verdunstungskühlung wird gebremst.
  ---
  **Leitung:** Dagegen hilft die dünne Folie kaum. Gegen den kalten Boden braucht man eine dicke Unterlage, zum Beispiel eine Isomatte.
```

```aufgabe
id: p10-strahlung
titel: Wärmeabstrahlung des Menschen
niveau: 3
lernziel: 5
kompetenz: modellieren
angabe: |
  Die Haut eines unbekleideten Menschen hat eine Oberfläche von $1{,}8\,\text{m}^2$ und eine Temperatur von $33\,^\circ\text{C}$. Die Wände des Raumes haben $20\,^\circ\text{C}$. Die Haut wird als schwarzer Strahler betrachtet ($\varepsilon = 1$).

  a) Berechne die netto abgestrahlte Leistung $P = \sigma A\,(T_H^4 - T_W^4)$. Runde auf ganze Watt.

  b) Der Grundumsatz eines Menschen in Ruhe beträgt etwa $80\,\text{W}$. Warum hält Kleidung dann warm?
teile:
  - typ: zahl
    label: a) Leistung
    loesung: "5.67e-8*1.8*(306.15^4-293.15^4)"
    einheit: "W"
    anzeige: '143'
    toleranz: 2
    fehler:
      - wert: "5.67e-8*1.8*(33^4-20^4)"
        meldung: |
          Du hast mit Grad Celsius gerechnet. Im Stefan-Boltzmann-Gesetz braucht man Kelvin, sonst kommen absurd kleine Werte heraus.
      - wert: "5.67e-8*1.8*306.15^4"
        meldung: |
          Das ist die gesamte Abstrahlung der Haut. Die Haut empfängt aber gleichzeitig die Strahlung der Wände. Netto zählt die Differenz der vierten Potenzen.
  - typ: auswahl
    label: b) Wirkung der Kleidung
    optionen:
      - "Kleidung ist vor allem ein Strahlungsschutz, der die Infrarotstrahlung der Haut vollständig zurückhält."
      - "Kleidung hält ruhende Luft fest, die Leitung und Konvektion bremst. Ihre Außenseite ist kühler als die Haut und strahlt deshalb auch weniger ab."
      - "Kleidung erzeugt selbst Wärme, die den Verlust ausgleicht."
      - "Kleidung hält die Kälte der Umgebung ab."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Das ist eine verbreitete, aber falsche Vorstellung. Kleidung hält Strahlung nicht vollständig zurück, sie strahlt selbst nach außen ab. Ihre Hauptwirkung ist die eingeschlossene ruhende Luft gegen Leitung und Konvektion. Die Strahlung sinkt nur, weil die Außenseite kühler ist.
      - wert: 2
        meldung: |
          Kleidung hat keine Energiequelle. Sie bremst nur den Wärmestrom, den der Körper erzeugt.
      - wert: 3
        meldung: |
          Kälte ist kein Stoff, den man abhalten könnte. Kleidung bremst den **Wärme**strom vom Körper nach außen.
hinweise:
  - Rechne beide Temperaturen in Kelvin um, $306{,}15\,\text{K}$ und $293{,}15\,\text{K}$.
  - 'Für b): Was ist zwischen den Fasern der Kleidung eingeschlossen, und welche Temperatur hat ihre Außenseite?'
loesung: |
  **Ansatz:** Haut und Wände strahlen sich gegenseitig an. Netto zählt $\sigma A(T_H^4 - T_W^4)$ mit absoluten Temperaturen.
  ---
  **Vierte Potenzen:** $306{,}15^4 - 293{,}15^4 = 8{,}785\cdot 10^{9}\,\text{K}^4 - 7{,}385\cdot 10^{9}\,\text{K}^4 = 1{,}400\cdot 10^{9}\,\text{K}^4$.
  ---
  **a)** $P = 5{,}67\cdot 10^{-8}\,\tfrac{\text{W}}{\text{m}^2\cdot\text{K}^4}\cdot 1{,}8\,\text{m}^2\cdot 1{,}400\cdot 10^{9}\,\text{K}^4 = 143\,\text{W}$. Dazu kommen noch Verluste durch Konvektion. Der Körper verliert mehr, als sein Grundumsatz von etwa $80\,\text{W}$ liefert. Deshalb friert man nackt bei $20\,^\circ\text{C}$.
  ---
  **b)** Kleidung wirkt vor allem durch die eingeschlossene ruhende Luft, die Leitung und Konvektion bremst. Die Strahlung sinkt nebenbei, weil die Außenseite der Kleidung kühler ist als die Haut. Kleidung ist also in erster Linie eine Luftpolster-Dämmung und kein Strahlungsschutz.
```

```aufgabe
id: p10-abkuehlung
titel: Abkühlungsdaten auswerten (Vertiefung)
niveau: 3
lernziel: 5
kompetenz: modellieren
angabe: |
  Ein Tee hat zu Beginn $90\,^\circ\text{C}$, das Zimmer $20\,^\circ\text{C}$. Nach $10$ Minuten misst man $60\,^\circ\text{C}$. Die Abkühlung folgt dem Gesetz $T(t) = T_U + (T_0 - T_U)\,e^{-kt}$.

  a) Bestimme die Abkühlungskonstante $k$ in $1/\text{min}$. Runde auf drei Nachkommastellen.

  b) Nach wie vielen Minuten hat der Tee $40\,^\circ\text{C}$? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    label: a) k
    loesung: "ln(70/40)/10"
    einheit: "1/min"
    anzeige: '0{,}056'
    toleranz: 0.001
    fehler:
      - wert: "ln(90/60)/10"
        meldung: |
          Exponentiell nimmt nur der **Unterschied zur Zimmertemperatur** ab, nicht die Temperatur selbst. Rechne mit $90 - 20 = 70\,\text{K}$ und $60 - 20 = 40\,\text{K}$.
  - typ: zahl
    label: b) Zeit bis 40 °C
    loesung: "ln(70/20)/(ln(70/40)/10)"
    einheit: "min"
    anzeige: '22{,}4'
    toleranz: 0.1
    fehler:
      - wert: "ln(90/40)/(ln(90/60)/10)"
        meldung: |
          Du hast die Temperaturen direkt ins Verhältnis gesetzt. Exponentiell nimmt aber der Unterschied zur Umgebung ab: $70\,\text{K}$ am Anfang, $20\,\text{K}$ bei $40\,^\circ\text{C}$.
      - wert: "20"
        meldung: |
          Die Abkühlung ist nicht linear. Von $90$ auf $60\,^\circ\text{C}$ dauert es $10$ Minuten, von $60$ auf $40\,^\circ\text{C}$ aber länger, weil der Tee immer langsamer abkühlt.
hinweise:
  - Schreib den Temperaturunterschied zur Umgebung hin. Er ist $70\,\text{K}$ am Anfang und $40\,\text{K}$ nach $10$ Minuten.
  - 'Aus $40 = 70\,e^{-10k}$ folgt $e^{-10k} = 40/70$. Logarithmieren liefert $k$.'
  - 'Für b): Löse $20 = 70\,e^{-kt}$ nach $t$ auf.'
gefuehrt:
  - text: Wie groß ist der Temperaturunterschied zur Umgebung am Anfang und nach $10$ Minuten?
    erklaerung: Am Anfang $90 - 20 = 70\,\text{K}$, nach $10$ Minuten $60 - 20 = 40\,\text{K}$. Nur dieser Unterschied nimmt exponentiell ab.
  - text: Um welchen Faktor ist der Unterschied in $10$ Minuten geschrumpft?
    teil: { typ: zahl, loesung: "40/70" }
    erklaerung: $40/70 = 0{,}571$. Es gilt also $e^{-10k} = 0{,}571$.
  - text: Bestimme $k$ in $1/\text{min}$.
    teil: { typ: zahl, loesung: "ln(70/40)/10", toleranz: 0.001 }
    erklaerung: Wir logarithmieren $e^{-10k} = 40/70$ und erhalten $-10k = \ln(40/70)$, also $k = \ln(70/40)/10 = 0{,}056\,\text{min}^{-1}$.
  - text: Nach wie vielen Minuten ist der Unterschied auf $20\,\text{K}$ geschrumpft?
    teil: { typ: zahl, loesung: "ln(70/20)/(ln(70/40)/10)", toleranz: 0.1 }
    erklaerung: Aus $20 = 70\,e^{-kt}$ folgt $t = \ln(70/20)/k = 1{,}253/0{,}0560\,\text{min} = 22{,}4\,\text{min}$.
loesung: |
  **Ansatz:** Nach Newton nimmt der Unterschied $T - T_U$ exponentiell ab: $T - 20 = 70\cdot e^{-kt}$ in °C. Die Messung nach $10$ Minuten liefert $k$. Siehe Mathematik, [Exponentialfunktionen](/lernen/mathe3/funktionen/exponentialfunktionen).
  ---
  **a)** $40 = 70\,e^{-10k}$. Wir teilen durch $70$ und logarithmieren: $-10k = \ln(40/70)$, also $k = \dfrac{\ln(70/40)}{10\,\text{min}} = 0{,}056\,\text{min}^{-1}$.
  ---
  **b)** $20 = 70\,e^{-kt}$ ergibt $t = \dfrac{\ln(70/20)}{k} = \dfrac{1{,}253}{0{,}0560\,\text{min}^{-1}} = 22{,}4\,\text{min}$.
  ---
  **Plausibilität:** Die ersten $30\,\text{K}$ Abkühlung dauern $10$ Minuten, die nächsten $20\,\text{K}$ über $12$ Minuten. Der Tee kühlt immer langsamer ab, wie das Gesetz es verlangt.
```

## Die Gasgesetze

```aufgabe
id: p10-9-check
art: check
titel: "Vorwissen: Druck unter Wasser"
niveau: 1
angabe: |
  An der Wasseroberfläche herrscht der Luftdruck $1{,}013\,\text{bar}$. Wie groß ist der Druck in $10\,\text{m}$ Wassertiefe ($\rho = 1000\,\text{kg/m}^3$, $g = 9{,}81\,\text{m/s}^2$)? Gib das Ergebnis in bar an.
teile:
  - typ: zahl
    loesung: "1.013 + 1000*9.81*10/100000"
    einheit: "bar"
    anzeige: '1{,}994 \approx 2{,}0'
    toleranz: 0.01
    fehler:
      - wert: "1000*9.81*10/100000"
        meldung: |
          Das ist nur der Schweredruck des Wassers. Auf die Wasseroberfläche drückt aber auch noch die Luft. Der gesamte Druck ist die Summe.
hinweise:
  - 'Der Schweredruck ist $\rho\,g\,h$. Dazu kommt der Luftdruck an der Oberfläche.'
loesung: |
  Schweredruck: $\rho\,g\,h = 1000\cdot 9{,}81\cdot 10\,\text{Pa} = 98\,100\,\text{Pa} = 0{,}981\,\text{bar}$.
  ---
  Gesamtdruck: $1{,}013\,\text{bar} + 0{,}981\,\text{bar} = 1{,}994\,\text{bar}$, also etwa das Doppelte des Luftdrucks. Wiederholen: [9.2 Der Schweredruck in Flüssigkeiten](/lernen/physik1/hydro-aeromechanik/der-schweredruck-in-fluessigkeiten).
```

Gase sind die einfachsten Stoffe der Wärmelehre. Ihre Teilchen sind weit voneinander entfernt und beeinflussen
sich kaum, außer wenn sie zusammenstoßen. Deshalb gehorchen alle Gase bei nicht zu hohem Druck und nicht zu
tiefer Temperatur denselben einfachen Gesetzen, egal ob Luft, Helium oder Kohlendioxid. Ein gedachtes Gas, für
das diese Gesetze exakt gelten, heißt **ideales Gas**.

### Die drei Zustandsgrößen

Den Zustand einer abgeschlossenen Gasmenge beschreiben drei Größen:

- Der **Druck** $p$ ist die Kraft pro Fläche auf die Gefäßwand, gemessen in Pascal oder bar.
- Das **Volumen** $V$ wird in m³ oder Liter angegeben.
- Die **Temperatur** $T$ steht in den Gasgesetzen immer in Kelvin.

Hält man eine der drei Größen fest, hängen die beiden anderen auf einfache Weise zusammen. Das ergibt drei
Gasgesetze. Wichtig ist dabei der Unterschied zwischen zwei Arten, einen Druck anzugeben. Der **Absolutdruck**
ist der wirkliche Druck des Gases, gemessen gegen das Vakuum. Ein Reifenmanometer zeigt dagegen den
**Überdruck** an, also wie viel der Druck über dem Luftdruck liegt. Ein Reifen mit $2{,}0\,\text{bar}$ Überdruck
hat etwa $3{,}0\,\text{bar}$ Absolutdruck. In den Gasgesetzen steht **immer der Absolutdruck**.

### Boyle-Mariotte: konstante Temperatur

Halt die Öffnung einer Luftpumpe zu und drück den Kolben hinein. Je kleiner das Volumen wird, desto stärker
drückt die Luft zurück. Robert Boyle und Edme Mariotte fanden im 17. Jahrhundert: Bei gleicher Temperatur ist
das Produkt aus Druck und Volumen konstant. Halbes Volumen bedeutet doppelten Druck.

**Warum?** Halbiert man das Volumen, sind in jedem Kubikzentimeter doppelt so viele Teilchen. Doppelt so viele
treffen pro Sekunde auf die Wand, also verdoppelt sich die Kraft auf die Wand und damit der Druck. Die Teilchen
sind dabei nicht schneller geworden, denn die Temperatur blieb gleich.

Eine Zustandsänderung bei konstanter Temperatur heißt **isotherm** (griechisch *isos*, gleich, und *thermos*,
warm). Im p-V-Diagramm ergibt $p = \text{konst.}/V$ eine **Hyperbel**, die **Isotherme**. Siehe Mathematik,
[Rationale Funktionen und Wurzelfunktionen](/lernen/mathe3/funktionen/rationale-funktionen-und-wurzelfunktionen).

```plot
x: [0, 30]
y: [0, 4]
hoehe: 280
achsen: { x: "V in L", y: "p in bar" }
graphen:
  - { f: "24/x", von: 6, bis: 30, farbe: 0, label: "Isotherme 300 K" }
  - { f: "32/x", von: 8, bis: 30, farbe: 1, label: "Isotherme 400 K" }
punkte:
  - { x: 12, y: 2, label: "12 L, 2 bar" }
  - { x: 24, y: 1, label: "24 L, 1 bar" }
beschriftung: "Zwei Isothermen derselben Gasmenge im p-V-Diagramm. Auf jeder Kurve ist p mal V konstant: 12 L mal 2 bar ergibt dasselbe wie 24 L mal 1 bar. Bei höherer Temperatur liegt die Isotherme weiter außen."
```

:::satz[Gesetz von Boyle-Mariotte]
Für eine abgeschlossene Gasmenge bei konstanter Temperatur gilt
$$p\cdot V = \text{konstant} \qquad\text{also}\qquad p_1\,V_1 = p_2\,V_2.$$
Dabei sind $p_1$, $V_1$ Druck und Volumen im Anfangszustand und $p_2$, $V_2$ im Endzustand.
:::

- **Beispiel:** Ein Taucher atmet unter Wasser Luft aus seiner Flasche mit dem Druck der Umgebung. Steigt er
  auf, ohne auszuatmen, dehnt sich die Luft in seiner Lunge aus.
- **Kein Beispiel:** Eine Spraydose wird in der Sonne heiß. Hier ändert sich die Temperatur, also gilt
  Boyle-Mariotte nicht.

:::beispiel[Die Lunge eines Apnoetauchers]
Eine Apnoetaucherin atmet an der Oberfläche ($1{,}0\,\text{bar}$) tief ein. Ihre Lunge enthält $6{,}0\,\text{L}$ Luft.
Dann taucht sie ohne Gerät auf $20\,\text{m}$ Tiefe. Wie groß ist das Lungenvolumen dort?

**Schritt 1, Druck in der Tiefe:** $p_2 = 1{,}0\,\text{bar} + \rho\,g\,h = 1{,}0\,\text{bar} + 1000\cdot 9{,}81\cdot 20\,\text{Pa}
= 1{,}0\,\text{bar} + 1{,}96\,\text{bar} = 2{,}96\,\text{bar}$.

**Schritt 2, Modell:** Die Körpertemperatur bleibt gleich, also gilt Boyle-Mariotte: $p_1 V_1 = p_2 V_2$.

**Schritt 3, auflösen:** $V_2 = V_1\cdot\dfrac{p_1}{p_2} = 6{,}0\,\text{L}\cdot\dfrac{1{,}0\,\text{bar}}{2{,}96\,\text{bar}} = 2{,}0\,\text{L}$.

**Deutung:** Die Lunge wird auf ein Drittel zusammengedrückt. Beim Auftauchen dehnt sie sich wieder auf
$6{,}0\,\text{L}$ aus. Die Einheit bar kürzt sich, deshalb muss man hier nicht in Pascal umrechnen.
:::

### Gay-Lussac: konstanter Druck

Ein Luftballon, der vom kalten Balkon ins warme Zimmer kommt, wird praller. Bei konstantem Druck dehnt sich ein
Gas beim Erwärmen aus. Joseph Louis Gay-Lussac fand 1802: Das Volumen ist proportional zur **absoluten**
Temperatur. Doppelte absolute Temperatur bedeutet doppeltes Volumen.

Trägt man das Volumen über der Celsius-Temperatur auf, erhält man eine Gerade. Verlängert man sie nach links,
trifft sie bei $-273{,}15\,^\circ\text{C}$ die Achse, für jede Gasmenge und jedes Gas. Pro Kelvin wächst das Volumen
um $\tfrac{1}{273{,}15}$ des Volumens bei $0\,^\circ\text{C}$. Eine Zustandsänderung bei konstantem Druck heißt **isobar**
(griechisch *baros*, Schwere oder Druck).

```plot
x: [-300, 120]
y: [0, 3]
hoehe: 280
achsen: { x: "Temperatur in °C", y: "V in L" }
graphen:
  - { f: "2*(1 + x/273.15)", von: -273.15, bis: 0, farbe: 0, gestrichelt: true }
  - { f: "2*(1 + x/273.15)", von: 0, bis: 100, farbe: 0, label: "2 L bei 0 °C" }
  - { f: "1*(1 + x/273.15)", von: -273.15, bis: 0, farbe: 1, gestrichelt: true }
  - { f: "1*(1 + x/273.15)", von: 0, bis: 100, farbe: 1, label: "1 L bei 0 °C" }
punkte:
  - { x: -273.15, y: 0, label: "−273,15 °C" }
beschriftung: "Volumen zweier Gasmengen bei konstantem Druck. Gemessen wird zwischen 0 °C und 100 °C. Die verlängerten Geraden (gestrichelt) treffen sich beim absoluten Nullpunkt, −273,15 °C."
```

:::satz[Gesetz von Gay-Lussac]
Für eine abgeschlossene Gasmenge bei konstantem Druck gilt
$$\frac{V}{T} = \text{konstant} \qquad\text{also}\qquad \frac{V_1}{T_1} = \frac{V_2}{T_2},$$
mit $T$ in Kelvin.
:::

:::beispiel[Ein Luftballon im Kühlschrank]
Ein Luftballon enthält bei $24\,^\circ\text{C}$ genau $3{,}0\,\text{L}$ Luft. Man legt ihn in den Kühlschrank ($6\,^\circ\text{C}$).
Der Druck im Ballon bleibt praktisch gleich dem Luftdruck.

**Schritt 1, Kelvin:** $T_1 = 297{,}15\,\text{K}$, $T_2 = 279{,}15\,\text{K}$.

**Schritt 2, auflösen:** Wir multiplizieren $\tfrac{V_1}{T_1} = \tfrac{V_2}{T_2}$ mit $T_2$:
$V_2 = V_1\cdot\dfrac{T_2}{T_1} = 3{,}0\,\text{L}\cdot\dfrac{279{,}15\,\text{K}}{297{,}15\,\text{K}} = 2{,}82\,\text{L}$.

**Deutung:** Der Ballon schrumpft um etwa $6\,\%$. Das passt, denn die absolute Temperatur sinkt ebenfalls um
$6\,\%$, von $297$ auf $279\,\text{K}$.
:::

### Amontons: konstantes Volumen

In einem starren Gefäß kann sich das Gas nicht ausdehnen. Beim Erwärmen steigt dann der Druck. Guillaume Amontons
fand um 1700: Der Druck ist proportional zur absoluten Temperatur. Eine solche Zustandsänderung heißt **isochor**
(griechisch *chora*, Raum).

:::satz[Gesetz von Amontons]
Für eine abgeschlossene Gasmenge bei konstantem Volumen gilt
$$\frac{p}{T} = \text{konstant} \qquad\text{also}\qquad \frac{p_1}{T_1} = \frac{p_2}{T_2},$$
mit $T$ in Kelvin und $p$ als Absolutdruck.
:::

:::beispiel[Warum ein Einmachglas nach dem Einkochen fest verschlossen ist]
Ein Glas wird bei $20\,^\circ\text{C}$ und $1{,}013\,\text{bar}$ verschlossen und im Wasserbad auf $95\,^\circ\text{C}$ erhitzt.
Ein Teil der Luft entweicht dabei durch den federnden Deckel. Wir rechnen zuerst, welcher Druck sich ohne
Entweichen einstellen würde.

**Rechnung:** $p_2 = p_1\cdot\dfrac{T_2}{T_1} = 1{,}013\,\text{bar}\cdot\dfrac{368{,}15\,\text{K}}{293{,}15\,\text{K}} = 1{,}27\,\text{bar}$.

**Deutung:** Der Überdruck von gut $0{,}25\,\text{bar}$ drückt den Deckel kurz auf, und Luft entweicht. Beim Abkühlen
sinkt der Druck im Glas nach demselben Gesetz unter den Luftdruck. Der äußere Luftdruck presst dann den Deckel fest
auf das Glas.
:::

:::achtung[Fehler: Celsius in die Gasgesetze einsetzen]
Ein Gas hat bei $15\,^\circ\text{C}$ das Volumen $1{,}5\,\text{L}$ und wird bei konstantem Druck auf $45\,^\circ\text{C}$
erwärmt. Ein Schüler rechnet $V_2 = 1{,}5\,\text{L}\cdot\tfrac{45}{15} = 4{,}5\,\text{L}$, also das Dreifache.

Das ist falsch, denn Proportionalität gilt nur ab einem echten Nullpunkt. Richtig ist
$V_2 = 1{,}5\,\text{L}\cdot\dfrac{318{,}15\,\text{K}}{288{,}15\,\text{K}} = 1{,}66\,\text{L}$. Das Gas wird nur um etwa $10\,\%$ größer.
:::

:::achtung[Fehler: Mit dem Überdruck rechnen]
Ein Fahrradreifen hat bei $5\,^\circ\text{C}$ einen Überdruck von $3{,}5\,\text{bar}$ (Luftdruck $1{,}0\,\text{bar}$). Er wird in
der Sonne $35\,^\circ\text{C}$ warm. Eine Schülerin rechnet mit dem Überdruck:
$p_2 = 3{,}5\,\text{bar}\cdot\tfrac{308{,}15}{278{,}15} = 3{,}88\,\text{bar}$ Überdruck.

Richtig ist: zuerst den Absolutdruck bilden, $3{,}5 + 1{,}0 = 4{,}5\,\text{bar}$. Dann
$p_2 = 4{,}5\,\text{bar}\cdot\tfrac{308{,}15}{278{,}15} = 4{,}99\,\text{bar}$ absolut, also $3{,}99\,\text{bar}$ Überdruck. Der Fehler
beträgt hier zwar nur $0{,}1\,\text{bar}$, wächst aber bei kleinen Drücken stark an.
:::

```aufgabe
id: p10-9-widget-check
art: check
titel: "Vorhersage: isotherm zusammendrücken"
niveau: 1
angabe: |
  Ein Gas wird bei konstanter Temperatur auf ein Drittel seines Volumens zusammengedrückt. Was passiert mit dem Druck?
teile:
  - typ: auswahl
    optionen:
      - "Er verdreifacht sich."
      - "Er bleibt gleich, weil die Temperatur gleich bleibt."
      - "Er wächst auf das Neunfache."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Die Teilchen sind zwar nicht schneller, aber sie sind dichter gepackt. Dreimal so viele treffen pro Sekunde auf jedes Stück Wand.
      - wert: 2
        meldung: |
          Der Druck ist umgekehrt proportional zum Volumen, nicht zu seinem Quadrat. Ein Drittel des Volumens heißt dreifacher Druck.
hinweise:
  - Bei konstanter Temperatur ist $p\cdot V$ konstant.
loesung: |
  Nach Boyle-Mariotte bleibt $p\cdot V$ gleich. Wird $V$ gedrittelt, muss $p$ sich verdreifachen.
  ---
  Prüfe das im Widget. Wähle „isotherm“ und verkleinere $V_2$ auf ein Drittel von $V_1$.
```

```widget
name: pv-diagramm
titel: Isotherme und isobare Zustandsänderung
props:
  prozess: isotherm
  n: 1
  f: 3
  V1: 10
  T1: 300
  V2: 25
```

Wähle „isotherm“ und verändere $V_2$: Der Zustand wandert auf einer Hyperbel, und $p\cdot V$ bleibt gleich. Wähle
„isobar“: Jetzt ist die Linie waagrecht, und $T_2$ wächst proportional mit $V_2$. Die angezeigten Werte für Arbeit
und Wärme brauchst du erst in [Kapitel 11](/lernen/physik1/hauptsaetze-waermekraftmaschinen).

:::merke
**Gasgesetze in vier Schritten:** (1) Welche Größe bleibt konstant? Temperatur heißt Boyle-Mariotte, Druck heißt
Gay-Lussac, Volumen heißt Amontons. (2) Temperaturen in Kelvin, Drücke als Absolutdruck. (3) Die Verhältnisgleichung
nach der gesuchten Größe auflösen. Einheiten wie bar oder Liter dürfen bleiben, weil sie sich kürzen.
(4) Plausibilität: Wird das Gas wärmer, muss $V$ oder $p$ steigen.
:::

```reflexion
frage: Warum muss man in den Gasgesetzen mit dem Absolutdruck rechnen, und was würde passieren, wenn man es mit dem Überdruck versucht?
antwort: |
  Die Gasgesetze sind Proportionalitäten, etwa $p \propto T$. Eine Proportionalität gilt nur für Größen mit einem echten
  Nullpunkt. Der Absolutdruck ist null, wenn keine Teilchen mehr auf die Wand stoßen. Der Überdruck ist dagegen schon
  null, wenn der Gasdruck gleich dem Luftdruck ist, obwohl dann noch sehr viele Teilchen stoßen. Mit dem Überdruck
  würde ein schlaffer Reifen mit $0$ bar Überdruck beim Erwärmen angeblich keinen Druck aufbauen, was nicht stimmt.
```

### Aufgaben zu den Gasgesetzen

```aufgabe
id: p10-boyle
titel: Luftpumpe zuhalten
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  In einer Fahrradpumpe befinden sich $50\,\text{mL}$ Luft bei $1{,}0\,\text{bar}$. Man hält die Öffnung zu und drückt den Kolben, bis das Volumen $20\,\text{mL}$ beträgt. Die Temperatur bleibt gleich. Welcher Druck herrscht dann?
teile:
  - typ: zahl
    loesung: "1.0*50/20"
    einheit: "bar"
    anzeige: '2{,}5'
    fehler:
      - wert: "1.0*20/50"
        meldung: |
          Kleineres Volumen bedeutet **größeren** Druck. Aus $p_1V_1 = p_2V_2$ folgt $p_2 = p_1\cdot V_1/V_2$, das größere Volumen steht im Zähler.
hinweise:
  - 'Boyle-Mariotte: $p_1V_1 = p_2V_2$. Teile durch $V_2$.'
loesung: |
  **Ansatz:** Die Temperatur bleibt konstant, also gilt Boyle-Mariotte: $p_1V_1 = p_2V_2$. Wir teilen durch $V_2$: $p_2 = p_1\cdot\dfrac{V_1}{V_2}$.
  ---
  **Rechnung:** $p_2 = 1{,}0\,\text{bar}\cdot\dfrac{50\,\text{mL}}{20\,\text{mL}} = 2{,}5\,\text{bar}$. Milliliter kürzen sich.
  ---
  **Plausibilität:** Das Volumen sinkt auf $40\,\%$, der Druck steigt auf $250\,\%$. Das Produkt bleibt gleich.
```

```aufgabe
id: p10-gesetz-erkennen
titel: Welches Gasgesetz passt?
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  Eine Gasflasche aus Stahl liegt in der prallen Sonne und erwärmt sich. Welches Gesetz beschreibt, was mit dem Gas passiert?
teile:
  - typ: auswahl
    optionen:
      - "Boyle-Mariotte, $pV = \\text{konst.}$"
      - "Gay-Lussac, $V/T = \\text{konst.}$"
      - "Amontons, $p/T = \\text{konst.}$"
    richtig: [2]
    fehler:
      - wert: 0
        meldung: |
          Boyle-Mariotte verlangt eine konstante Temperatur. Hier wird die Flasche aber wärmer.
      - wert: 1
        meldung: |
          Gay-Lussac verlangt einen konstanten Druck, und das Gas müsste sich ausdehnen können. Eine Stahlflasche ist aber starr.
hinweise:
  - Welche der drei Größen kann sich in einer starren Stahlflasche nicht ändern?
loesung: |
  **Ansatz:** Eine Stahlflasche ist starr, also bleibt das Volumen konstant. Die Temperatur steigt.
  ---
  **Antwort:** Bei konstantem Volumen gilt Amontons: $p/T$ ist konstant. Der Druck steigt proportional zur absoluten Temperatur.
```

```aufgabe
id: p10-gay-lussac
titel: Luftballon am Heizkörper
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Ein Luftballon enthält bei $20\,^\circ\text{C}$ genau $2{,}0\,\text{L}$ Luft. Er wird bei gleichem Druck auf $80\,^\circ\text{C}$ erwärmt. Welches Volumen hat er dann? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    loesung: "2.0*(80+273.15)/(20+273.15)"
    einheit: "L"
    anzeige: '2{,}41'
    toleranz: 0.01
    fehler:
      - wert: "2.0*80/20"
        meldung: |
          Du hast in Grad Celsius gerechnet. Gay-Lussac ist eine Proportionalität zur **absoluten** Temperatur. Rechne zuerst in Kelvin um.
hinweise:
  - Der Druck bleibt gleich, also gilt Gay-Lussac.
  - 'Rechne beide Temperaturen in Kelvin um und setze in $V_2 = V_1\cdot T_2/T_1$ ein.'
loesung: |
  **Ansatz:** Konstanter Druck, also Gay-Lussac: $\dfrac{V_1}{T_1} = \dfrac{V_2}{T_2}$, mit $T$ in Kelvin.
  ---
  **Kelvin:** $T_1 = 293{,}15\,\text{K}$, $T_2 = 353{,}15\,\text{K}$.
  ---
  **Rechnung:** $V_2 = 2{,}0\,\text{L}\cdot\dfrac{353{,}15\,\text{K}}{293{,}15\,\text{K}} = 2{,}41\,\text{L}$. Mit °C gerechnet käme fälschlich das Vierfache heraus.
```

```aufgabe
id: p10-reifen
titel: Mopedreifen nach der Fahrt
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Ein Mopedreifen hat bei $5\,^\circ\text{C}$ einen **Absolutdruck** von $2{,}8\,\text{bar}$. Nach einer Fahrt in der Sonne hat die Luft im Reifen $35\,^\circ\text{C}$. Welcher Absolutdruck herrscht nun? Das Volumen des Reifens bleibt praktisch gleich. Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    loesung: "2.8*(35+273.15)/(5+273.15)"
    einheit: "bar"
    anzeige: '3{,}10'
    toleranz: 0.01
    fehler:
      - wert: "2.8*35/5"
        meldung: |
          Mit Celsius-Temperaturen wäre der Druck auf das Siebenfache gestiegen. Das ist absurd. Amontons gilt nur mit Kelvin.
      - wert: "2.8*(5+273.15)/(35+273.15)"
        meldung: |
          Du hast die Temperaturen vertauscht. Wird das Gas wärmer, muss der Druck **steigen**.
hinweise:
  - Das Volumen ist konstant. Welches Gesetz gilt?
  - 'Amontons: $p_2 = p_1\cdot T_2/T_1$ mit Kelvin.'
loesung: |
  **Ansatz:** Das Volumen bleibt gleich, also gilt Amontons: $\dfrac{p_1}{T_1} = \dfrac{p_2}{T_2}$. Der Druck ist schon absolut angegeben.
  ---
  **Kelvin:** $T_1 = 278{,}15\,\text{K}$, $T_2 = 308{,}15\,\text{K}$.
  ---
  **Rechnung:** $p_2 = 2{,}8\,\text{bar}\cdot\dfrac{308{,}15\,\text{K}}{278{,}15\,\text{K}} = 3{,}10\,\text{bar}$. Deshalb soll man den Reifendruck im kalten Zustand prüfen.
```

```aufgabe
id: p10-spraydose
titel: Spraydose im Feuer
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Eine Spraydose enthält Gas mit einem Absolutdruck von $3{,}0\,\text{bar}$ bei $20\,^\circ\text{C}$. Sie gerät in ein Feuer und erreicht $300\,^\circ\text{C}$. Welcher Druck würde sich einstellen, wenn die Dose nicht platzt? Behandle den Inhalt als ideales Gas und runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    loesung: "3.0*(300+273.15)/(20+273.15)"
    einheit: "bar"
    anzeige: '5{,}87'
    toleranz: 0.02
    fehler:
      - wert: "3.0*300/20"
        meldung: |
          Mit Celsius wäre der Druck auf das Fünfzehnfache gestiegen. Proportional ist der Druck aber zur absoluten Temperatur in Kelvin.
hinweise:
  - Die Dose ist starr, das Volumen bleibt gleich.
  - 'Amontons: $p_2 = p_1\cdot T_2/T_1$, Temperaturen in Kelvin.'
loesung: |
  **Ansatz:** Die Dose ist starr, also isochor. Es gilt Amontons: $p_2 = p_1\cdot\dfrac{T_2}{T_1}$.
  ---
  **Kelvin:** $T_1 = 293{,}15\,\text{K}$, $T_2 = 573{,}15\,\text{K}$.
  ---
  **Rechnung:** $p_2 = 3{,}0\,\text{bar}\cdot\dfrac{573{,}15}{293{,}15} = 5{,}87\,\text{bar}$, fast das Doppelte. In echten Spraydosen ist das Treibgas teilweise flüssig. Beim Erhitzen verdampft es, und der Druck steigt noch viel stärker. Deshalb steht auf jeder Dose „vor Hitze schützen“.
```

```aufgabe
id: p10-taucher-aufstieg
titel: Luft anhalten beim Auftauchen
niveau: 2
lernziel: 6
kompetenz: modellieren
angabe: |
  Ein Gerätetaucher atmet in $25\,\text{m}$ Tiefe aus seiner Flasche Luft mit dem Umgebungsdruck. Seine Lunge enthält dabei $4{,}0\,\text{L}$. Er steigt auf, **ohne auszuatmen**. Welches Volumen hätte die Luft an der Oberfläche ($1{,}0\,\text{bar}$, $\rho_\text{Wasser} = 1000\,\text{kg/m}^3$, $g = 9{,}81\,\text{m/s}^2$)? Die Temperatur bleibt gleich. Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "4.0*(1.0+1000*9.81*25/1e5)/1.0"
    einheit: "L"
    anzeige: '13{,}8'
    toleranz: 0.1
    fehler:
      - wert: "4.0*(1000*9.81*25/1e5)/1.0"
        meldung: |
          Du hast in der Tiefe nur den Schweredruck des Wassers genommen. Dazu kommt der Luftdruck an der Oberfläche. Der Absolutdruck in $25\,\text{m}$ ist $1{,}0 + 2{,}45 = 3{,}45\,\text{bar}$.
      - wert: "4.0*1.0/(1.0+1000*9.81*25/1e5)"
        meldung: |
          Beim Auftauchen sinkt der Druck. Dann muss das Volumen **größer** werden, nicht kleiner.
hinweise:
  - Berechne den Absolutdruck in $25\,\text{m}$ Tiefe. Luftdruck plus Schweredruck.
  - 'Boyle-Mariotte: $V_2 = V_1\cdot p_1/p_2$.'
loesung: |
  **Ansatz:** Die Temperatur bleibt gleich, also gilt Boyle-Mariotte. Der Druck in der Tiefe ist Luftdruck plus Schweredruck.
  ---
  **Druck in der Tiefe:** $p_1 = 1{,}0\,\text{bar} + \dfrac{1000\cdot 9{,}81\cdot 25}{10^5}\,\text{bar} = 1{,}0\,\text{bar} + 2{,}45\,\text{bar} = 3{,}45\,\text{bar}$.
  ---
  **Volumen oben:** $V_2 = 4{,}0\,\text{L}\cdot\dfrac{3{,}45\,\text{bar}}{1{,}0\,\text{bar}} = 13{,}8\,\text{L}$.
  ---
  **Bedeutung:** Eine Lunge fasst höchstens etwa $6\,\text{L}$. Die Luft würde sie zerreißen. Deshalb lautet die wichtigste Tauchregel: Beim Auftauchen immer ausatmen.
```

```aufgabe
id: p10-boyle-teilchen
titel: Boyle-Mariotte im Teilchenbild
niveau: 2
lernziel: 6
kompetenz: begruenden
angabe: |
  Erkläre mit dem Teilchenmodell, warum sich bei konstanter Temperatur der Druck eines Gases verdoppelt, wenn man sein Volumen halbiert.
teile:
  - typ: text
    muster: |
      Der Druck entsteht durch die Stöße der Gasteilchen auf die Wand. Bei konstanter Temperatur bleibt die mittlere
      Geschwindigkeit der Teilchen gleich, also überträgt jeder einzelne Stoß im Mittel gleich viel Impuls. Halbiert man
      das Volumen, sind in jedem Kubikzentimeter doppelt so viele Teilchen. Deshalb treffen pro Sekunde doppelt so viele
      Teilchen auf jedes Stück Wand. Die Kraft auf die Wand verdoppelt sich, und damit der Druck.
hinweise:
  - Wodurch entsteht der Druck eines Gases auf eine Wand?
  - Was ändert sich beim Halbieren des Volumens, und was bleibt wegen der konstanten Temperatur gleich?
loesung: |
  **Ansatz:** Der Gasdruck entsteht durch Teilchen, die auf die Wand prallen. Er hängt davon ab, wie oft sie stoßen und wie heftig.
  ---
  **Was gleich bleibt:** Die Temperatur ist konstant, also auch die mittlere Geschwindigkeit. Jeder Stoß ist im Mittel gleich heftig.
  ---
  **Was sich ändert:** Im halben Volumen sind die Teilchen doppelt so dicht. Doppelt so viele Stöße pro Sekunde ergeben den doppelten Druck.
```

```aufgabe
id: p10-nullpunkt-messdaten
titel: Den absoluten Nullpunkt aus Messdaten bestimmen
niveau: 3
lernziel: 6
kompetenz: modellieren
angabe: |
  Bei einem Gasthermometer mit konstantem Volumen wurden diese Drücke gemessen. Jeder Druck hat eine Messunsicherheit von $\pm 0{,}005\,\text{bar}$.

  | $\vartheta$ in °C | $p$ in bar |
  |---|---|
  | 0 | 1,000 |
  | 50 | 1,183 |
  | 100 | 1,366 |

  Dazwischen liegen die Werte $1{,}092\,\text{bar}$ bei $25\,^\circ\text{C}$ und $1{,}274\,\text{bar}$ bei $75\,^\circ\text{C}$.

  ```plot
  x: [0, 110]
  y: [0.95, 1.4]
  achsen: { x: "Temperatur in °C", y: "p in bar" }
  punkte:
    - { x: 0, y: 1.000 }
    - { x: 25, y: 1.092 }
    - { x: 50, y: 1.183 }
    - { x: 75, y: 1.274 }
    - { x: 100, y: 1.366 }
  strecken:
    - { von: [0, 0.995], nach: [0, 1.005] }
    - { von: [100, 1.361], nach: [100, 1.371] }
  ```

  a) Bestimme die Steigung der Geraden aus dem ersten und dem letzten Messpunkt in bar pro Kelvin.

  b) Bei welcher Temperatur würde der Druck null werden? Runde auf ganze Grad.

  c) Schätze die Unsicherheit dieses Nullpunkts ab. Lege dazu die steilste und die flachste Gerade durch die Fehlerbereiche des ersten und letzten Punkts. Gib die halbe Breite des Bereichs auf ganze Kelvin an.
teile:
  - typ: zahl
    label: a) Steigung
    loesung: "(1.366-1.000)/100"
    einheit: "bar/K"
    anzeige: '0{,}00366'
    toleranz: 0.00002
    fehler:
      - wert: "1.366/100"
        meldung: |
          Die Steigung ist die **Änderung** des Drucks geteilt durch die Änderung der Temperatur. Der Druck ändert sich um $1{,}366 - 1{,}000 = 0{,}366\,\text{bar}$.
  - typ: zahl
    label: b) Nullpunkt
    loesung: "-1.000/((1.366-1.000)/100)"
    einheit: "°C"
    anzeige: '-273'
    toleranz: 1
    fehler:
      - wert: "1.000/((1.366-1.000)/100)"
        meldung: |
          Der Nullpunkt liegt links von $0\,^\circ\text{C}$, also bei einer negativen Temperatur. Aus $1{,}000 + 0{,}00366\cdot\vartheta = 0$ folgt $\vartheta = -1{,}000/0{,}00366$.
  - typ: zahl
    label: c) Unsicherheit
    loesung: "(-0.995/((1.371-0.995)/100) - (-1.005/((1.361-1.005)/100)))/2"
    einheit: "K"
    anzeige: '9'
    toleranz: 0.5
    fehler:
      - wert: "0.005"
        meldung: |
          Das ist die Unsicherheit eines Drucks in bar. Gefragt ist, wie stark sich dadurch der **Nullpunkt** verschiebt. Rechne den Nullpunkt für die steilste und die flachste Gerade aus.
hinweise:
  - 'Für a): Steigung $= \Delta p/\Delta\vartheta$ zwischen $0\,^\circ\text{C}$ und $100\,^\circ\text{C}$.'
  - 'Für b): Die Gerade ist $p(\vartheta) = 1{,}000\,\text{bar} + m\cdot\vartheta$. Setze $p = 0$ und löse nach $\vartheta$ auf.'
  - 'Für c): Steilste Gerade durch $(0 \mid 0{,}995)$ und $(100 \mid 1{,}371)$, flachste durch $(0 \mid 1{,}005)$ und $(100 \mid 1{,}361)$. Berechne für beide den Nullpunkt.'
gefuehrt:
  - text: Berechne die Steigung $m$ aus dem ersten und dem letzten Messpunkt.
    teil: { typ: zahl, loesung: "(1.366-1.000)/100", toleranz: 0.00002 }
    erklaerung: $m = \dfrac{1{,}366\,\text{bar} - 1{,}000\,\text{bar}}{100\,\text{K}} = 0{,}00366\,\tfrac{\text{bar}}{\text{K}}$.
  - text: Löse $1{,}000 + 0{,}00366\cdot\vartheta = 0$ nach $\vartheta$ auf.
    teil: { typ: zahl, loesung: "-1.000/0.00366", toleranz: 1 }
    erklaerung: $\vartheta = -1{,}000/0{,}00366\,^\circ\text{C} = -273\,^\circ\text{C}$.
  - text: Wo liegt der Nullpunkt der steilsten Geraden durch $(0 \mid 0{,}995)$ und $(100 \mid 1{,}371)$?
    teil: { typ: zahl, loesung: "-0.995/((1.371-0.995)/100)", toleranz: 1 }
    erklaerung: Steigung $0{,}376/100 = 0{,}00376$, Nullpunkt $-0{,}995/0{,}00376 = -265\,^\circ\text{C}$.
  - text: Wo liegt der Nullpunkt der flachsten Geraden durch $(0 \mid 1{,}005)$ und $(100 \mid 1{,}361)$?
    teil: { typ: zahl, loesung: "-1.005/((1.361-1.005)/100)", toleranz: 1 }
    erklaerung: Steigung $0{,}356/100 = 0{,}00356$, Nullpunkt $-1{,}005/0{,}00356 = -282\,^\circ\text{C}$. Der Bereich reicht also von $-282$ bis $-265\,^\circ\text{C}$, die halbe Breite ist etwa $9\,\text{K}$.
loesung: |
  **Ansatz:** Bei konstantem Volumen wächst der Druck linear mit der Temperatur. Wir bestimmen die Gerade aus den Messpunkten und suchen ihre Nullstelle. Siehe Mathematik, [Lineare Funktionen](/lernen/mathe3/funktionen/lineare-funktionen).
  ---
  **a)** $m = \dfrac{1{,}366\,\text{bar} - 1{,}000\,\text{bar}}{100\,^\circ\text{C} - 0\,^\circ\text{C}} = 0{,}00366\,\tfrac{\text{bar}}{\text{K}}$.
  ---
  **b)** $p(\vartheta) = 1{,}000\,\text{bar} + 0{,}00366\,\tfrac{\text{bar}}{\text{K}}\cdot\vartheta = 0$ ergibt $\vartheta = -\dfrac{1{,}000}{0{,}00366}\,^\circ\text{C} = -273\,^\circ\text{C}$.
  ---
  **c)** Steilste Gerade: Steigung $0{,}00376\,\tfrac{\text{bar}}{\text{K}}$, Nullpunkt $-0{,}995/0{,}00376 = -265\,^\circ\text{C}$. Flachste Gerade: Steigung $0{,}00356\,\tfrac{\text{bar}}{\text{K}}$, Nullpunkt $-1{,}005/0{,}00356 = -282\,^\circ\text{C}$. Der Nullpunkt liegt also bei $(-273 \pm 9)\,^\circ\text{C}$.
  ---
  **Deutung:** Schon kleine Druckfehler verschieben den Nullpunkt um etliche Kelvin, weil man sehr weit über den Messbereich hinaus verlängert. Der genaue Wert $-273{,}15\,^\circ\text{C}$ liegt im Unsicherheitsbereich. Mehr zu Unsicherheiten in [Kapitel 1: Messunsicherheit und signifikante Stellen](/lernen/physik1/groessen-einheiten-messen/messunsicherheit-und-signifikante-stellen).
```

## Die Zustandsgleichung des idealen Gases

```aufgabe
id: p10-10-check
art: check
titel: "Vorwissen: mit Zehnerpotenzen rechnen"
niveau: 1
angabe: |
  Berechne $(2{,}0\cdot 10^{5})\cdot(3{,}0\cdot 10^{-2})$. So ein Produkt entsteht, wenn man einen Druck in Pascal mit einem Volumen in Kubikmetern multipliziert.
teile:
  - typ: zahl
    loesung: "2.0e5*3.0e-2"
    anzeige: '6000 = 6{,}0\cdot 10^{3}'
    fehler:
      - wert: "6e-10"
        meldung: |
          Beim Multiplizieren werden die Exponenten **addiert**, nicht multipliziert: $10^{5}\cdot 10^{-2} = 10^{5 + (-2)} = 10^{3}$.
      - wert: "6e7"
        meldung: |
          Der Exponent $-2$ ist negativ. $5 + (-2) = 3$, nicht $5 + 2$.
hinweise:
  - Multipliziere die Zahlen vor den Zehnerpotenzen und addiere die Exponenten.
loesung: |
  Zahlen: $2{,}0\cdot 3{,}0 = 6{,}0$. Zehnerpotenzen: $10^{5}\cdot 10^{-2} = 10^{3}$.
  ---
  Ergebnis: $6{,}0\cdot 10^{3} = 6000$. Wiederholen: Mathematik, [Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln).
```

Die drei Gasgesetze aus [10.9 Die Gasgesetze](/lernen/physik1/temperatur-waerme-gase/die-gasgesetze) gelten jeweils nur,
wenn eine Größe konstant bleibt. In der Wirklichkeit ändern sich oft alle drei gleichzeitig. Ein Wetterballon steigt
auf, Druck und Temperatur sinken, und das Volumen wächst. Für solche Fälle fassen wir die drei Gesetze zu einer einzigen
Gleichung zusammen.

### Die allgemeine Gasgleichung

Für eine abgeschlossene Gasmenge gilt
$$\frac{p\cdot V}{T} = \text{konstant} \qquad\text{also}\qquad \frac{p_1\,V_1}{T_1} = \frac{p_2\,V_2}{T_2}.$$
Hält man eine der drei Größen fest, kürzt sie sich heraus, und man erhält wieder Boyle-Mariotte, Gay-Lussac oder
Amontons. Zum Beispiel ergibt $T_1 = T_2$ das Gesetz $p_1V_1 = p_2V_2$.

:::beispiel[Ein Wetterballon steigt auf]
Ein Wetterballon enthält am Boden $5{,}0\,\text{m}^3$ Helium bei $1{,}0\,\text{bar}$ und $15\,^\circ\text{C}$. In $10\,\text{km}$ Höhe
herrschen nur $0{,}26\,\text{bar}$ und $-50\,^\circ\text{C}$. Die Hülle ist dehnbar, der Druck innen gleicht sich dem Druck außen an.

**Schritt 1, Kelvin:** $T_1 = 288{,}15\,\text{K}$, $T_2 = 223{,}15\,\text{K}$.

**Schritt 2, auflösen:** Wir multiplizieren die allgemeine Gasgleichung mit $T_2$ und teilen durch $p_2$:
$V_2 = V_1\cdot\dfrac{p_1}{p_2}\cdot\dfrac{T_2}{T_1}$.

**Schritt 3, einsetzen:** $V_2 = 5{,}0\,\text{m}^3\cdot\dfrac{1{,}0}{0{,}26}\cdot\dfrac{223{,}15}{288{,}15} = 5{,}0\,\text{m}^3\cdot 3{,}85\cdot 0{,}774 = 14{,}9\,\text{m}^3$.

**Deutung:** Der Druckabfall allein würde das Volumen fast vervierfachen. Die Kälte schrumpft es wieder etwas. Weil
nur Verhältnisse vorkommen, dürfen bar und Kubikmeter stehen bleiben. Nur die Temperatur muss in Kelvin sein.
:::

### Stoffmenge und Mol

Was steckt in der Konstanten $pV/T$? Sie hängt nur davon ab, **wie viele Teilchen** das Gas enthält, nicht von der
Gasart. Das vermutete Amedeo Avogadro schon 1811: Gleiche Volumina verschiedener Gase enthalten bei gleichem Druck
und gleicher Temperatur gleich viele Teilchen. Ein Liter Wasserstoff und ein Liter Kohlendioxid enthalten also
gleich viele Moleküle, obwohl Kohlendioxid zweiundzwanzigmal so schwer ist.

Teilchenzahlen sind riesig. Deshalb zählt man sie in Paketen, so wie man Eier im Dutzend zählt. Ein solches Paket
heißt **Mol**. Ein Mol enthält $N_A = 6{,}022\cdot 10^{23}$ Teilchen. Diese Zahl heißt **Avogadro-Konstante**. Die
**Stoffmenge** $n$ gibt an, wie viele Mol eine Probe enthält.

Die **molare Masse** $M$ ist die Masse eines Mols, in g/mol. Sie ist gleich der relativen Teilchenmasse aus dem
Periodensystem:

- Wasserstoff $\text{H}_2$: $2\,\text{g/mol}$. Helium $\text{He}$: $4\,\text{g/mol}$.
- Stickstoff $\text{N}_2$: $28\,\text{g/mol}$. Sauerstoff $\text{O}_2$: $32\,\text{g/mol}$.
- Kohlendioxid $\text{CO}_2$: $44\,\text{g/mol}$. Luft als Gemisch: im Mittel $29\,\text{g/mol}$.

Zwischen Masse $m$, Teilchenzahl $N$ und Stoffmenge $n$ gilt
$$n = \frac{m}{M} = \frac{N}{N_A}.$$
Zum Beispiel sind $64\,\text{g}$ Sauerstoff $n = 64\,\text{g}/(32\,\text{g/mol}) = 2\,\text{mol}$, also
$2\cdot 6{,}022\cdot 10^{23} = 1{,}2\cdot 10^{24}$ Moleküle.

```aufgabe
id: p10-10-mol-check
art: check
titel: Wie viel Mol Kohlendioxid?
niveau: 1
angabe: |
  Wie viel Mol sind $11\,\text{g}$ Kohlendioxid ($M = 44\,\text{g/mol}$)?
teile:
  - typ: zahl
    loesung: "11/44"
    einheit: "mol"
    anzeige: '0{,}25'
    fehler:
      - wert: "44/11"
        meldung: |
          Du hast den Bruch umgedreht. Die Stoffmenge ist Masse durch molare Masse, $n = m/M$. Weniger als ein Mol Masse ergibt weniger als ein Mol.
hinweise:
  - '$n = m/M$.'
loesung: |
  Ein Mol Kohlendioxid wiegt $44\,\text{g}$. Wir haben ein Viertel davon.
  ---
  $n = \dfrac{11\,\text{g}}{44\,\text{g/mol}} = 0{,}25\,\text{mol}$.
```

### Die Zustandsgleichung

:::satz[Zustandsgleichung des idealen Gases]
$$p\,V = n\,R\,T \qquad\text{oder gleichwertig}\qquad p\,V = N\,k_B\,T$$
Dabei ist $p$ der Absolutdruck in Pa, $V$ das Volumen in m³, $T$ die Temperatur in K, $n$ die Stoffmenge in mol und
$N$ die Teilchenzahl. Die **universelle Gaskonstante** ist $R = 8{,}314\,\tfrac{\text{J}}{\text{mol}\cdot\text{K}}$, die
**Boltzmann-Konstante** $k_B = R/N_A = 1{,}381\cdot 10^{-23}\,\tfrac{\text{J}}{\text{K}}$.
:::

Die Gleichung gilt für **jedes** ideale Gas, egal welche Teilchen es enthält. Hier müssen alle Größen in SI-Einheiten
stehen, denn $R$ ist in Joule angegeben. Ein Joule ist ein Pascal mal Kubikmeter.

Ein wichtiger Sonderfall ist das **molare Volumen**, das Volumen eines Mols. Bei $0\,^\circ\text{C}$ und $1013\,\text{hPa}$
(den sogenannten Normbedingungen) gilt
$$V_m = \frac{R\,T}{p} = \frac{8{,}314\cdot 273{,}15}{101\,300}\,\text{m}^3 = 0{,}0224\,\text{m}^3 = 22{,}4\,\text{L}.$$
Bei $20\,^\circ\text{C}$ sind es etwa $24\,\text{L}$. Zwei Gramm Wasserstoff und 44 Gramm Kohlendioxid brauchen gleich viel Platz.

:::beispiel[Wie viele Moleküle atmest du ein?]
Ein ruhiger Atemzug hat etwa $0{,}5\,\text{L}$ bei $37\,^\circ\text{C}$ und $1013\,\text{hPa}$.

**Schritt 1, SI-Einheiten:** $p = 101\,300\,\text{Pa}$, $V = 5\cdot 10^{-4}\,\text{m}^3$, $T = 310{,}15\,\text{K}$.

**Schritt 2, Teilchenzahl:** Wir lösen $pV = Nk_BT$ nach $N$ auf:
$$N = \frac{p\,V}{k_B\,T} = \frac{101\,300\cdot 5\cdot 10^{-4}}{1{,}381\cdot 10^{-23}\cdot 310{,}15} \approx 1{,}2\cdot 10^{22}.$$

**Schritt 3, eine Fermi-Abschätzung:** Die ganze Erdatmosphäre enthält etwa $10^{44}$ Moleküle. Ein Atemzug ist also
der Bruchteil $1{,}2\cdot 10^{22}/10^{44}$ der Atmosphäre. Hat sich ein Atemzug von Julius Caesar in 2000 Jahren gleichmäßig
verteilt, enthält jeder deiner Atemzüge davon etwa $1{,}2\cdot 10^{22}\cdot 1{,}2\cdot 10^{22}/10^{44} \approx 1$ Molekül.
:::

### Die Dichte eines Gases

Setzt man $n = m/M$ in die Zustandsgleichung ein, erhält man $pV = \tfrac{m}{M}RT$. Teilt man durch $V$, steht dort die
Dichte $\rho = m/V$:
$$\rho = \frac{p\,M}{R\,T}.$$
Die Dichte eines Gases ist proportional zum Druck und umgekehrt proportional zur absoluten Temperatur. Warme Luft ist
dünner als kalte. Darauf beruht der Heißluftballon. Auch die Abnahme des Luftdrucks mit der Höhe folgt daraus, siehe
[9.6 Luftdruck und die barometrische Höhenformel](/lernen/physik1/hydro-aeromechanik/luftdruck-und-die-barometrische-hoehenformel).

:::beispiel[Was trägt ein Heißluftballon?]
Die Hülle eines Heißluftballons fasst $2800\,\text{m}^3$. Außen hat die Luft $15\,^\circ\text{C}$, innen wird sie auf
$100\,^\circ\text{C}$ geheizt. Der Druck ist innen und außen etwa $101\,300\,\text{Pa}$.

**Schritt 1, Dichte außen:** $\rho_a = \dfrac{101\,300\cdot 0{,}029}{8{,}314\cdot 288{,}15}\,\tfrac{\text{kg}}{\text{m}^3} = 1{,}226\,\tfrac{\text{kg}}{\text{m}^3}$.

**Schritt 2, Dichte innen:** $\rho_i = \dfrac{101\,300\cdot 0{,}029}{8{,}314\cdot 373{,}15}\,\tfrac{\text{kg}}{\text{m}^3} = 0{,}947\,\tfrac{\text{kg}}{\text{m}^3}$.

**Schritt 3, Auftrieb minus Gewicht der Füllung:** Der Auftrieb entspricht dem Gewicht der verdrängten kalten Luft,
die Füllung wiegt weniger. Der Unterschied trägt Hülle, Korb und Passagiere:
$\Delta m = 2800\,\text{m}^3\cdot(1{,}226 - 0{,}947)\,\tfrac{\text{kg}}{\text{m}^3} = 782\,\text{kg}$.

**Deutung:** Der Ballon kann knapp $800\,\text{kg}$ tragen. Die molare Masse haben wir in kg/mol eingesetzt, damit die
Dichte in $\text{kg/m}^3$ herauskommt.
:::

:::achtung[Fehler: bar und Liter in pV = nRT einsetzen]
Eine Gasflasche hat $20\,\text{L}$ und $180\,\text{bar}$ bei $15\,^\circ\text{C}$. Ein Schüler rechnet
$n = \dfrac{180\cdot 20}{8{,}314\cdot 288{,}15}\,\text{mol} = 1{,}50\,\text{mol}$.

Das ist hundertmal zu wenig. Die Gaskonstante $R$ ist in Joule angegeben, und $1\,\text{J} = 1\,\text{Pa}\cdot\text{m}^3$.
Also muss $p = 180\cdot 10^{5}\,\text{Pa}$ und $V = 20\cdot 10^{-3}\,\text{m}^3$ eingesetzt werden. Richtig ist
$n = \dfrac{1{,}8\cdot 10^{7}\cdot 0{,}020}{8{,}314\cdot 288{,}15}\,\text{mol} = 150\,\text{mol}$.
:::

:::achtung[Fehler: Die molare Masse in g/mol mit kg verwechseln]
Für $410\,\text{mol}$ Sauerstoff rechnet eine Schülerin $m = n\cdot M = 410\cdot 32 = 13\,120\,\text{kg}$.

Dreizehn Tonnen in einer Flasche sind unmöglich. Die molare Masse ist $32\,\text{g/mol} = 0{,}032\,\text{kg/mol}$. Richtig ist
$m = 410\,\text{mol}\cdot 0{,}032\,\tfrac{\text{kg}}{\text{mol}} = 13{,}1\,\text{kg}$. Wer die Einheit mitschreibt, bemerkt den Fehler sofort.
:::

```aufgabe
id: p10-10-avogadro-check
art: check
titel: Gleiche Volumina, gleiche Teilchenzahl
niveau: 1
angabe: |
  Ein Ballon ist mit Helium gefüllt, ein gleich großer Ballon mit Luft. Beide haben denselben Druck und dieselbe Temperatur. Welche Aussage stimmt?
teile:
  - typ: auswahl
    optionen:
      - "Beide enthalten gleich viele Teilchen."
      - "Der Luftballon enthält mehr Teilchen, weil Luft schwerer ist."
      - "Der Heliumballon enthält mehr Teilchen, weil Heliumatome kleiner sind."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Die Luft ist schwerer, weil jedes **einzelne** Teilchen schwerer ist. Die Zahl der Teilchen ist bei gleichem $p$, $V$ und $T$ gleich, denn $N = pV/(k_BT)$ enthält keine Teilchenmasse.
      - wert: 2
        meldung: |
          Im idealen Gas spielt die Größe der Teilchen keine Rolle, weil sie winzig gegenüber ihrem Abstand ist. Die Teilchenzahl folgt allein aus $p$, $V$ und $T$.
hinweise:
  - 'Löse $pV = Nk_BT$ nach $N$ auf. Hängt das Ergebnis von der Gasart ab?'
loesung: |
  Aus $pV = Nk_BT$ folgt $N = pV/(k_BT)$. Darin kommt die Gasart nicht vor.
  ---
  Bei gleichem Druck, Volumen und gleicher Temperatur enthalten beide Ballone gleich viele Teilchen. Das ist der Satz von Avogadro.
```

### Grenzen des Modells: reale Gase

Das ideale Gas vernachlässigt zwei Dinge: das Eigenvolumen der Teilchen und die Anziehungskräfte zwischen ihnen.
Beides wird wichtig, wenn die Teilchen eng zusammenrücken (hoher Druck) oder sehr langsam sind (tiefe Temperatur).
Kühlt man ein reales Gas genug ab, kondensiert es zur Flüssigkeit. Ein ideales Gas könnte das nie. Luft wird bei
etwa $-190\,^\circ\text{C}$ flüssig, Helium erst bei $-269\,^\circ\text{C}$.

Bei normalem Luftdruck und Zimmertemperatur ist die Zustandsgleichung für Luft, Stickstoff, Sauerstoff und Helium auf
Bruchteile eines Prozents genau. Bei Drücken von $200$ bis $300\,\text{bar}$, wie in Druckgasflaschen, weichen reale
Gase dagegen um **einige Prozent** ab. Sauerstoff hat bei $200\,\text{bar}$ und $20\,^\circ\text{C}$ eine
Dichte von $280\,\text{kg/m}^3$, das ideale Gas liefert $263\,\text{kg/m}^3$, also gut $6\,\%$ weniger (Quelle: NIST
Chemistry WebBook). Für Abschätzungen genügt das ideale Gas
auch dort. Für genaue technische Rechnungen braucht man Korrekturfaktoren.

:::merke
**Gasaufgaben lösen:** Ist die Gasmenge fest und ändert sich nur der Zustand, nimm $\tfrac{p_1V_1}{T_1} = \tfrac{p_2V_2}{T_2}$.
Dabei dürfen bar und Liter stehen bleiben, weil sie sich kürzen. Ist nach Stoffmenge, Masse, Teilchenzahl oder Dichte
gefragt, nimm $pV = nRT$ und rechne alles in SI: Pa, m³, K und kg/mol. Die Temperatur ist in beiden Fällen in Kelvin.
:::

```reflexion
frage: Warum darf man in der allgemeinen Gasgleichung p₁V₁/T₁ = p₂V₂/T₂ mit bar und Litern rechnen, in pV = nRT aber nicht?
antwort: |
  In der allgemeinen Gasgleichung stehen auf beiden Seiten dieselben Einheiten, also kürzen sie sich heraus. Ob man in bar
  oder Pascal rechnet, ändert nur beide Seiten um denselben Faktor. In $pV = nRT$ steht dagegen die Konstante $R$ mit
  der festen Einheit $\tfrac{\text{J}}{\text{mol}\cdot\text{K}}$. Damit die Einheiten zusammenpassen, muss $p\cdot V$ in Joule,
  also in Pa mal m³, herauskommen. Die Temperatur muss in beiden Fällen in Kelvin stehen, weil sie allein als Faktor vorkommt.
```

### Aufgaben zur Zustandsgleichung

```aufgabe
id: p10-molvolumen
titel: Molares Volumen
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Welches Volumen in Litern nimmt $1\,\text{mol}$ eines idealen Gases bei $0\,^\circ\text{C}$ und $1013\,\text{hPa}$ ein? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "8.314*273.15/101300*1000"
    einheit: "L"
    anzeige: '22{,}4'
    fehler:
      - wert: "8.314*273.15/101300"
        meldung: |
          Das ist das Volumen in Kubikmetern. Gefragt sind Liter. Ein Kubikmeter hat $1000$ Liter.
      - wert: "8.314*273.15/1013*1000"
        meldung: |
          Den Druck musst du in Pascal einsetzen. $1013\,\text{hPa} = 101\,300\,\text{Pa}$.
hinweise:
  - '$V = nRT/p$ mit $p$ in Pa und $T$ in K. Das Ergebnis ist in m³.'
loesung: |
  **Ansatz:** Wir lösen $pV = nRT$ nach $V$ auf, mit $n = 1\,\text{mol}$, $T = 273{,}15\,\text{K}$ und $p = 101\,300\,\text{Pa}$.
  ---
  **Rechnung:** $V = \dfrac{1\,\text{mol}\cdot 8{,}314\,\tfrac{\text{J}}{\text{mol}\cdot\text{K}}\cdot 273{,}15\,\text{K}}{101\,300\,\text{Pa}} = 0{,}0224\,\text{m}^3 = 22{,}4\,\text{L}$.
  ---
  **Einordnung:** Das gilt für jedes ideale Gas. Ein Mol passt etwa in einen Würfel mit $28\,\text{cm}$ Kantenlänge.
```

```aufgabe
id: p10-mol-umrechnen
titel: Gramm, Mol und Teilchen
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Eine kleine Flasche enthält $64\,\text{g}$ Sauerstoff $\text{O}_2$ ($M = 32\,\text{g/mol}$).

  a) Wie viel Mol sind das?

  b) Wie viele Moleküle sind das? Gib das Ergebnis in Zehnerpotenz-Schreibweise an.
teile:
  - typ: zahl
    label: a) Stoffmenge
    loesung: "64/32"
    einheit: "mol"
    anzeige: '2'
    fehler:
      - wert: "64/16"
        meldung: |
          $16\,\text{g/mol}$ ist die molare Masse eines Sauerstoff**atoms**. Sauerstoffgas besteht aber aus Molekülen $\text{O}_2$ mit zwei Atomen, also $32\,\text{g/mol}$.
      - wert: "64*32"
        meldung: |
          Du hast multipliziert. Die Stoffmenge ist Masse **geteilt** durch molare Masse, $n = m/M$.
  - typ: zahl
    label: b) Teilchenzahl
    loesung: "64/32*6.022e23"
    anzeige: '1{,}2\cdot 10^{24}'
    fehler:
      - wert: "6.022e23/2"
        meldung: |
          Zwei Mol sind **doppelt** so viele Teilchen wie ein Mol, also $N = n\cdot N_A$.
hinweise:
  - '$n = m/M$ und $N = n\cdot N_A$ mit $N_A = 6{,}022\cdot 10^{23}\,\text{mol}^{-1}$.'
loesung: |
  **Ansatz:** Ein Mol hat die Masse $M$. Also ist die Stoffmenge die Masse geteilt durch die molare Masse.
  ---
  **a)** $n = \dfrac{64\,\text{g}}{32\,\text{g/mol}} = 2{,}0\,\text{mol}$.
  ---
  **b)** $N = n\cdot N_A = 2{,}0\,\text{mol}\cdot 6{,}022\cdot 10^{23}\,\text{mol}^{-1} = 1{,}2\cdot 10^{24}$ Moleküle.
```

```aufgabe
id: p10-sauerstoffflasche
titel: Sauerstoffflasche
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Eine Sauerstoffflasche mit $50\,\text{L}$ Volumen ist bei $20\,^\circ\text{C}$ mit $200\,\text{bar}$ (absolut) gefüllt. Berechne mit dem Modell des idealen Gases die Stoffmenge und die Masse des Sauerstoffs ($M = 32\,\text{g/mol}$). Runde die Stoffmenge auf ganze Mol und die Masse auf eine Nachkommastelle.

  Hinweis zur Genauigkeit: Bei $200\,\text{bar}$ weicht Sauerstoff schon um einige Prozent vom idealen Gas ab. Das Ergebnis ist eine gute Abschätzung, aber kein exakter Wert.
teile:
  - typ: zahl
    label: Stoffmenge
    loesung: "200e5*0.050/(8.314*293.15)"
    einheit: "mol"
    anzeige: '410'
    toleranz: 2
    fehler:
      - wert: "200*50/(8.314*293.15)"
        meldung: |
          Du hast bar und Liter eingesetzt. Weil $R$ in Joule angegeben ist, brauchst du Pascal und Kubikmeter: $p = 2{,}00\cdot 10^{7}\,\text{Pa}$, $V = 0{,}050\,\text{m}^3$.
      - wert: "200e5*0.050/(8.314*20)"
        meldung: |
          Die Temperatur muss in Kelvin stehen: $T = 293{,}15\,\text{K}$.
  - typ: zahl
    label: Masse
    loesung: "200e5*0.050/(8.314*293.15)*0.032"
    einheit: "kg"
    anzeige: '13{,}1'
    toleranz: 0.1
    fehler:
      - wert: "200e5*0.050/(8.314*293.15)*32"
        meldung: |
          Das sind Gramm, nicht Kilogramm. Die molare Masse ist $32\,\text{g/mol} = 0{,}032\,\text{kg/mol}$.
hinweise:
  - 'SI-Einheiten: $p = 2{,}00\cdot 10^7\,\text{Pa}$, $V = 0{,}050\,\text{m}^3$, $T = 293{,}15\,\text{K}$.'
  - 'Erst $n = pV/(RT)$, dann $m = n\cdot M$ mit $M$ in kg/mol.'
loesung: |
  **Ansatz:** Gesucht ist die Gasmenge, also brauchen wir $pV = nRT$ in SI-Einheiten.
  ---
  **Stoffmenge:** $n = \dfrac{pV}{RT} = \dfrac{2{,}00\cdot 10^{7}\,\text{Pa}\cdot 0{,}050\,\text{m}^3}{8{,}314\,\tfrac{\text{J}}{\text{mol}\cdot\text{K}}\cdot 293{,}15\,\text{K}} = 410\,\text{mol}$.
  ---
  **Masse:** $m = n\,M = 410\,\text{mol}\cdot 0{,}032\,\tfrac{\text{kg}}{\text{mol}} = 13{,}1\,\text{kg}$.
  ---
  **Genauigkeit:** Echter Sauerstoff lässt sich bei $200\,\text{bar}$ etwas leichter zusammendrücken als ein ideales Gas. In der Flasche sind deshalb gut $6\,\%$ mehr Sauerstoff, als das Modell liefert, also etwa $14\,\text{kg}$ (Wert nach NIST Chemistry WebBook).
```

```aufgabe
id: p10-luft-im-zimmer
titel: Wie viel wiegt die Luft in einem Zimmer?
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Ein Zimmer ist $5{,}0\,\text{m}\times 4{,}0\,\text{m}\times 2{,}5\,\text{m}$ groß. Die Luft hat $20\,^\circ\text{C}$ und $1013\,\text{hPa}$. Berechne die Stoffmenge und die Masse der Luft ($M = 29\,\text{g/mol}$). Runde die Stoffmenge auf ganze Mol und die Masse auf eine Nachkommastelle.
teile:
  - typ: zahl
    label: Stoffmenge
    loesung: "101300*50/(8.314*293.15)"
    einheit: "mol"
    anzeige: '2078'
    toleranz: 5
    fehler:
      - wert: "101300*11.5/(8.314*293.15)"
        meldung: |
          Das Volumen ist das **Produkt** der drei Maße, nicht ihre Summe: $5{,}0\cdot 4{,}0\cdot 2{,}5 = 50\,\text{m}^3$.
  - typ: zahl
    label: Masse
    loesung: "101300*50/(8.314*293.15)*0.029"
    einheit: "kg"
    anzeige: '60{,}3'
    toleranz: 0.2
    fehler:
      - wert: "101300*50/(8.314*293.15)*29"
        meldung: |
          Das sind Gramm. Rechne mit $M = 0{,}029\,\text{kg/mol}$.
hinweise:
  - 'Das Volumen ist $V = 5{,}0\cdot 4{,}0\cdot 2{,}5\,\text{m}^3 = 50\,\text{m}^3$.'
  - 'Dann $n = pV/(RT)$ mit $p = 101\,300\,\text{Pa}$ und $m = nM$.'
loesung: |
  **Ansatz:** Die Luft im Zimmer ist ein ideales Gas. Mit $pV = nRT$ bestimmen wir ihre Stoffmenge, dann mit $m = nM$ ihre Masse.
  ---
  **Stoffmenge:** $n = \dfrac{101\,300\,\text{Pa}\cdot 50\,\text{m}^3}{8{,}314\,\tfrac{\text{J}}{\text{mol}\cdot\text{K}}\cdot 293{,}15\,\text{K}} = 2078\,\text{mol}$.
  ---
  **Masse:** $m = 2078\,\text{mol}\cdot 0{,}029\,\tfrac{\text{kg}}{\text{mol}} = 60{,}3\,\text{kg}$.
  ---
  **Einordnung:** Die Luft in einem Zimmer wiegt so viel wie ein Mensch. Das entspricht einer Dichte von $60{,}3/50 = 1{,}2\,\text{kg/m}^3$.
```

```aufgabe
id: p10-dichte-helium
titel: Die Dichte von Helium
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Berechne die Dichte von Helium ($M = 4{,}0\,\text{g/mol}$) bei $20\,^\circ\text{C}$ und $1013\,\text{hPa}$. Runde auf drei Nachkommastellen. Vergleiche mit Luft ($1{,}205\,\text{kg/m}^3$ bei denselben Bedingungen).
teile:
  - typ: zahl
    loesung: "101300*0.004/(8.314*293.15)"
    einheit: "kg/m³"
    anzeige: '0{,}166'
    toleranz: 0.001
    fehler:
      - wert: "101300*4/(8.314*293.15)"
        meldung: |
          Die molare Masse muss in kg/mol stehen: $4{,}0\,\text{g/mol} = 0{,}0040\,\text{kg/mol}$. Sonst kommt die Dichte in $\text{g/m}^3$ heraus.
      - wert: "101300*0.004/(8.314*20)"
        meldung: |
          Die Temperatur muss in Kelvin stehen. Mit $20$ statt $293{,}15$ wird die Dichte fast fünfzehnmal zu groß.
hinweise:
  - '$\rho = \dfrac{pM}{RT}$ mit $p$ in Pa, $M$ in kg/mol und $T$ in K.'
  - Teile die Dichte von Luft durch dein Ergebnis, um den Vergleich zu ziehen.
loesung: |
  **Ansatz:** Aus $pV = nRT$ mit $n = m/M$ folgt $\rho = \dfrac{pM}{RT}$.
  ---
  **Rechnung:** $\rho = \dfrac{101\,300\,\text{Pa}\cdot 0{,}0040\,\tfrac{\text{kg}}{\text{mol}}}{8{,}314\,\tfrac{\text{J}}{\text{mol}\cdot\text{K}}\cdot 293{,}15\,\text{K}} = 0{,}166\,\tfrac{\text{kg}}{\text{m}^3}$.
  ---
  **Vergleich:** Luft ist $1{,}205/0{,}166 \approx 7{,}3$-mal so dicht, genau das Verhältnis der molaren Massen $29/4$. Deshalb steigt ein Heliumballon so kräftig auf.
```

```aufgabe
id: p10-ideal-real
titel: Wann versagt das ideale Gas?
niveau: 2
lernziel: 7
kompetenz: begruenden
angabe: |
  Unter welchen Bedingungen weicht ein reales Gas deutlich vom idealen Gas ab? Begründe mit den beiden Vereinfachungen des Modells.
teile:
  - typ: text
    muster: |
      Das ideale Gas vernachlässigt das Eigenvolumen der Teilchen und die Anziehungskräfte zwischen ihnen. Das Eigenvolumen
      wird wichtig, wenn die Teilchen dicht gepackt sind, also bei hohem Druck. Dann ist ein merklicher Teil des
      Volumens von den Teilchen selbst besetzt. Die Anziehung wird wichtig, wenn die Teilchen langsam sind und lange
      nahe beieinander bleiben, also bei tiefer Temperatur, besonders kurz vor dem Kondensieren. Bei normalem Luftdruck
      und Zimmertemperatur sind beide Effekte für Luft sehr klein.
hinweise:
  - Welche zwei Eigenschaften echter Teilchen lässt das Modell weg?
  - Bei welchen Bedingungen sind die Teilchen dicht gepackt, bei welchen sind sie langsam?
loesung: |
  **Vereinfachung 1:** Die Teilchen haben im Modell kein Eigenvolumen. Das stört bei **hohem Druck**, wenn die Teilchen dicht gepackt sind.
  ---
  **Vereinfachung 2:** Die Teilchen ziehen sich im Modell nicht an. Das stört bei **tiefer Temperatur**, wenn die Teilchen langsam sind. Dort kondensiert ein reales Gas sogar.
  ---
  **Fazit:** Bei Normaldruck und Zimmertemperatur ist das Modell sehr gut, in Druckgasflaschen nur noch auf einige Prozent genau.
```

```aufgabe
id: p10-luftblase
titel: Aufsteigende Luftblase
niveau: 3
lernziel: 7
kompetenz: modellieren
angabe: |
  Eine Luftblase steigt in einem See aus $20\,\text{m}$ Tiefe ($8\,^\circ\text{C}$) zur Oberfläche ($20\,^\circ\text{C}$, $p_0 = 1013\,\text{hPa}$) auf. Um welchen Faktor wächst ihr Volumen ($\rho_\text{Wasser} = 1000\,\text{kg/m}^3$, $g = 9{,}81\,\text{m/s}^2$)? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    loesung: "(101300+1000*9.81*20)/101300*(293.15/281.15)"
    anzeige: '3{,}06'
    toleranz: 0.01
    fehler:
      - wert: "(1000*9.81*20)/101300*(293.15/281.15)"
        meldung: |
          Der Druck in der Tiefe ist Luftdruck **plus** Schweredruck. Der Schweredruck allein ist zu wenig.
      - wert: "(101300+1000*9.81*20)/101300*(20/8)"
        meldung: |
          Die Temperaturen müssen in Kelvin stehen. Mit Celsius würde die Erwärmung das Volumen angeblich mehr als verdoppeln.
hinweise:
  - 'Der Druck in der Tiefe ist $p_1 = p_0 + \rho g h$.'
  - 'Allgemeine Gasgleichung: $\dfrac{V_2}{V_1} = \dfrac{p_1}{p_2}\cdot\dfrac{T_2}{T_1}$.'
loesung: |
  **Ansatz:** Druck und Temperatur ändern sich gleichzeitig, die Gasmenge bleibt gleich. Also gilt die allgemeine Gasgleichung $\tfrac{p_1V_1}{T_1} = \tfrac{p_2V_2}{T_2}$.
  ---
  **Drücke:** $p_1 = 101\,300\,\text{Pa} + 1000\cdot 9{,}81\cdot 20\,\text{Pa} = 297\,500\,\text{Pa}$, $p_2 = 101\,300\,\text{Pa}$.
  ---
  **Faktor:** $\dfrac{V_2}{V_1} = \dfrac{p_1}{p_2}\cdot\dfrac{T_2}{T_1} = 2{,}937\cdot\dfrac{293{,}15\,\text{K}}{281{,}15\,\text{K}} = 3{,}06$.
  ---
  **Deutung:** Fast der ganze Effekt kommt vom Druck (Faktor $2{,}94$). Die Erwärmung trägt nur gut $4\,\%$ bei.
```

```aufgabe
id: p10-heissluftballon
titel: Wie heiß muss der Ballon sein?
niveau: 3
lernziel: 7
kompetenz: modellieren
angabe: |
  Ein Heißluftballon hat ein Hüllenvolumen von $2500\,\text{m}^3$. Hülle, Korb, Brenner und Passagiere wiegen zusammen $700\,\text{kg}$. Die Außenluft hat $10\,^\circ\text{C}$, der Druck ist innen und außen $1{,}0\cdot 10^{5}\,\text{Pa}$, die molare Masse der Luft $0{,}029\,\text{kg/mol}$.

  a) Wie groß ist die Dichte der Außenluft? Runde auf drei Nachkommastellen.

  b) Auf welche Temperatur in °C muss die Luft im Ballon mindestens geheizt werden, damit er schwebt? Runde auf ganze Grad.
teile:
  - typ: zahl
    label: a) Dichte außen
    loesung: "1e5*0.029/(8.314*283.15)"
    einheit: "kg/m³"
    anzeige: '1{,}232'
    toleranz: 0.002
    fehler:
      - wert: "1e5*0.029/(8.314*10)"
        meldung: |
          Die Temperatur muss in Kelvin stehen: $283{,}15\,\text{K}$.
  - typ: zahl
    label: b) Innentemperatur
    loesung: "1e5*0.029/(8.314*(1e5*0.029/(8.314*283.15) - 700/2500)) - 273.15"
    einheit: "°C"
    anzeige: '93'
    toleranz: 1
    fehler:
      - wert: "1e5*0.029/(8.314*(1e5*0.029/(8.314*283.15) - 700/2500))"
        meldung: |
          Das ist die Temperatur in Kelvin. Gefragt sind Grad Celsius, also $273{,}15$ abziehen.
hinweise:
  - 'Für a): $\rho = pM/(RT)$ mit der Außentemperatur in Kelvin.'
  - 'Der Ballon schwebt, wenn die Luft im Inneren um $700\,\text{kg}$ leichter ist als dieselbe Menge Außenluft. Daraus folgt die nötige Innendichte.'
  - 'Löse $\rho_i = pM/(RT_i)$ nach $T_i$ auf.'
gefuehrt:
  - text: Berechne die Dichte der Außenluft in $\text{kg/m}^3$.
    teil: { typ: zahl, loesung: "1e5*0.029/(8.314*283.15)", toleranz: 0.002 }
    erklaerung: $\rho_a = \dfrac{1{,}0\cdot 10^{5}\cdot 0{,}029}{8{,}314\cdot 283{,}15}\,\tfrac{\text{kg}}{\text{m}^3} = 1{,}232\,\tfrac{\text{kg}}{\text{m}^3}$.
  - text: Um wie viel muss die Innenluft pro Kubikmeter leichter sein, damit der Ballon $700\,\text{kg}$ trägt?
    teil: { typ: zahl, loesung: "700/2500" }
    erklaerung: Der Auftrieb minus das Gewicht der Füllung muss $700\,\text{kg}$ tragen. Pro Kubikmeter sind das $700\,\text{kg}/2500\,\text{m}^3 = 0{,}28\,\text{kg/m}^3$.
  - text: Welche Dichte muss die Innenluft also haben?
    teil: { typ: zahl, loesung: "1e5*0.029/(8.314*283.15) - 0.28", toleranz: 0.002 }
    erklaerung: $\rho_i = 1{,}232 - 0{,}280 = 0{,}952\,\tfrac{\text{kg}}{\text{m}^3}$.
  - text: Welche Temperatur in °C gehört zu dieser Dichte?
    teil: { typ: zahl, loesung: "1e5*0.029/(8.314*0.9519) - 273.15", toleranz: 1 }
    erklaerung: Aus $\rho_i = pM/(RT_i)$ folgt $T_i = \dfrac{pM}{R\,\rho_i} = \dfrac{1{,}0\cdot 10^{5}\cdot 0{,}029}{8{,}314\cdot 0{,}952}\,\text{K} = 366\,\text{K}$, also etwa $93\,^\circ\text{C}$.
loesung: |
  **Ansatz:** Der Ballon schwebt, wenn der Auftrieb (Gewicht der verdrängten Außenluft) gleich dem Gewicht von Füllung plus Last ist. Die Dichten der Luft folgen aus $\rho = pM/(RT)$.
  ---
  **a)** $\rho_a = \dfrac{1{,}0\cdot 10^{5}\,\text{Pa}\cdot 0{,}029\,\tfrac{\text{kg}}{\text{mol}}}{8{,}314\,\tfrac{\text{J}}{\text{mol}\cdot\text{K}}\cdot 283{,}15\,\text{K}} = 1{,}232\,\tfrac{\text{kg}}{\text{m}^3}$.
  ---
  **Schwebebedingung:** $V\rho_a = V\rho_i + 700\,\text{kg}$. Wir teilen durch $V$: $\rho_i = \rho_a - \dfrac{700\,\text{kg}}{2500\,\text{m}^3} = 1{,}232 - 0{,}280 = 0{,}952\,\tfrac{\text{kg}}{\text{m}^3}$.
  ---
  **b)** $T_i = \dfrac{pM}{R\,\rho_i} = \dfrac{1{,}0\cdot 10^{5}\cdot 0{,}029}{8{,}314\cdot 0{,}952}\,\text{K} = 366\,\text{K} = 93\,^\circ\text{C}$.
  ---
  **Plausibilität:** Echte Heißluftballone heizen auf $80$ bis $120\,^\circ\text{C}$. Das Ergebnis passt. Siehe auch das Kapitel [Hydro- und Aeromechanik](/lernen/physik1/hydro-aeromechanik) zum Auftrieb.
```

## Kinetische Gastheorie

```aufgabe
id: p10-11-check
art: check
titel: "Vorwissen: Impulsänderung beim Abprallen"
niveau: 1
angabe: |
  Ein Ball mit $0{,}10\,\text{kg}$ fliegt mit $5{,}0\,\text{m/s}$ senkrecht gegen eine Wand und prallt mit $5{,}0\,\text{m/s}$ zurück. Wie groß ist der Betrag seiner Impulsänderung in $\text{kg}\cdot\text{m/s}$?
teile:
  - typ: zahl
    loesung: "2*0.10*5.0"
    einheit: "kg·m/s"
    anzeige: '1{,}0'
    fehler:
      - wert: "0"
        meldung: |
          Der Betrag der Geschwindigkeit ist gleich geblieben, aber die **Richtung** hat sich umgedreht. Der Impuls ist ein Vektor. Von $+0{,}5$ auf $-0{,}5\,\text{kg}\cdot\text{m/s}$ ist eine Änderung um $1{,}0$.
      - wert: "0.10*5.0"
        meldung: |
          Das ist nur der Impuls vor dem Stoß. Weil der Ball umkehrt, ändert sich der Impuls um das **Doppelte**: von $+mv$ auf $-mv$.
hinweise:
  - 'Der Impuls ist $p = m\,v$ mit Richtung. Vorher zeigt er zur Wand, nachher von ihr weg.'
loesung: |
  Vorher ist der Impuls $+m v = +0{,}50\,\text{kg}\cdot\text{m/s}$ (zur Wand), nachher $-0{,}50\,\text{kg}\cdot\text{m/s}$ (von der Wand weg).
  ---
  Die Änderung ist $-0{,}50 - 0{,}50 = -1{,}0\,\text{kg}\cdot\text{m/s}$, also der Betrag $2mv = 1{,}0\,\text{kg}\cdot\text{m/s}$. Genau so viel Impuls überträgt der Ball an die Wand. Wiederholen: [Kapitel 4: Impuls und Kraftstoß](/lernen/physik1/arbeit-energie-impuls/impuls-und-kraftstoss).
```

Die Zustandsgleichung $pV = nRT$ beschreibt ein Gas **von außen**, mit messbaren Größen wie Druck und Temperatur.
Die **kinetische Gastheorie** erklärt diese Größen **von innen**, aus der Bewegung der Teilchen. Am Ende steht eine
der schönsten Aussagen der Physik: Die absolute Temperatur eines idealen Gases ist direkt proportional zur mittleren
Bewegungsenergie seiner Teilchen.

### Das Modell

Die kinetische Gastheorie macht vier Annahmen über ein ideales Gas:

1. Ein Gas besteht aus sehr vielen, sehr kleinen Teilchen. Ihr Eigenvolumen ist gegenüber dem Gefäß vernachlässigbar.
2. Die Teilchen bewegen sich geradlinig und völlig ungeordnet in alle Richtungen.
3. Sie stoßen elastisch miteinander und mit der Wand. Dabei geht keine Bewegungsenergie verloren.
4. Zwischen den Stößen üben sie keine Kräfte aufeinander aus.

```aufgabe
id: p10-11-modell-check
art: check
titel: Wann passt das Modell nicht mehr?
niveau: 1
angabe: |
  Eine Gasflasche wird auf $300\,\text{bar}$ gefüllt. Welche Annahme des Modells wird dabei am ehesten verletzt?
teile:
  - typ: auswahl
    optionen:
      - "Das Eigenvolumen der Teilchen ist vernachlässigbar."
      - "Die Teilchen bewegen sich ungeordnet in alle Richtungen."
      - "Die Stöße mit der Wand sind elastisch."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Die Bewegung bleibt auch bei hohem Druck ungeordnet. Was sich ändert, ist der Abstand zwischen den Teilchen.
      - wert: 2
        meldung: |
          An der Art der Stöße ändert der Druck wenig. Bei hohem Druck sind die Teilchen aber so dicht gepackt, dass ihr eigenes Volumen zählt.
hinweise:
  - Was passiert mit dem Abstand zwischen den Teilchen, wenn man ein Gas stark zusammendrückt?
loesung: |
  Bei sehr hohem Druck rücken die Teilchen eng zusammen.
  ---
  Dann nehmen sie selbst einen merklichen Teil des Volumens ein, und Annahme 1 gilt nicht mehr. Siehe [10.10 Die Zustandsgleichung des idealen Gases](/lernen/physik1/temperatur-waerme-gase/die-zustandsgleichung-des-idealen-gases), Grenzen des Modells.
```

### Druck aus Teilchenstößen

**Worum geht es in einem Satz?** Der Druck eines Gases ist die mittlere Kraft, mit der unzählige Teilchen gegen die
Wand prallen, geteilt durch die Fläche der Wand.

Stell dir Hagel vor, der auf ein Blechdach prasselt. Jedes Hagelkorn gibt dem Dach einen kleinen Stoß. Weil sehr
viele Körner fallen, spürt das Dach eine gleichmäßige Kraft. So entsteht auch der Gasdruck, nur mit unvorstellbar
vielen, unvorstellbar kleinen Stößen. Wir rechnen ihn in fünf kleinen Schritten aus.

**Schritt 1, ein Stoß:** Ein Teilchen der Masse $m$ fliegt in einem Würfel mit der Kantenlänge $L$. Seine
Geschwindigkeit hat in Richtung der rechten Wand die Komponente $v_x$. Es prallt elastisch ab und fliegt mit $-v_x$
zurück. Sein Impuls ändert sich um $2 m v_x$, genau wie beim Ball im Vorwissen-Check. Diesen Impuls überträgt es an
die Wand.

**Schritt 2, wie oft:** Bis das Teilchen wieder an dieselbe Wand kommt, muss es zur linken Wand und zurück, also den
Weg $2L$ in $x$-Richtung. Das dauert $\Delta t = 2L/v_x$.

**Schritt 3, mittlere Kraft eines Teilchens:** Kraft ist Impulsänderung pro Zeit. Also übt das Teilchen im Mittel die Kraft
$$F = \frac{2 m v_x}{2L/v_x} = \frac{m\,v_x^2}{L}$$
auf die Wand aus.

**Schritt 4, alle Teilchen:** Im Würfel sind $N$ Teilchen mit verschiedenen Geschwindigkeiten. Wir ersetzen $v_x^2$ durch
den Mittelwert $\overline{v_x^2}$ (der Strich bedeutet „Mittelwert über alle Teilchen“). Weil keine Richtung bevorzugt ist,
gilt $\overline{v_x^2} = \overline{v_y^2} = \overline{v_z^2}$. Zusammen ergeben sie $\overline{v^2}$, also ist
$\overline{v_x^2} = \tfrac13\,\overline{v^2}$. Die Gesamtkraft ist $F = N\,m\,\tfrac13\overline{v^2}/L$.

**Schritt 5, Druck:** Wir teilen durch die Wandfläche $L^2$ und verwenden $L^3 = V$:
$$p = \frac{F}{L^2} = \frac13\,\frac{N}{V}\,m\,\overline{v^2} = \frac23\,\frac{N}{V}\cdot\tfrac12 m\,\overline{v^2}.$$

**Was haben wir gezeigt?** Der Druck ist proportional zur Teilchendichte $N/V$ und zur mittleren Bewegungsenergie
$\tfrac12 m\overline{v^2}$ eines Teilchens. Mehr Teilchen pro Volumen bedeuten mehr Stöße. Schnellere Teilchen stoßen
öfter **und** heftiger.

```aufgabe
id: p10-11-druck-check
art: check
titel: "Vorhersage: doppelt so schnelle Teilchen"
niveau: 1
angabe: |
  In einem Gefäß mit festem Volumen werden alle Gasteilchen doppelt so schnell. Um welchen Faktor steigt der Druck?
teile:
  - typ: zahl
    loesung: "2^2"
    anzeige: '4'
    fehler:
      - wert: "2"
        meldung: |
          Doppelte Geschwindigkeit wirkt zweimal. Jeder Stoß überträgt doppelt so viel Impuls, **und** die Teilchen kommen doppelt so oft an die Wand. Der Druck ist proportional zu $\overline{v^2}$.
hinweise:
  - 'Im Ergebnis steht $p \propto \overline{v^2}$.'
loesung: |
  Der Druck ist proportional zu $\overline{v^2}$. Doppelte Geschwindigkeit ergibt $2^2 = 4$-fachen Druck.
  ---
  Anschaulich: Jeder Stoß ist doppelt so heftig, und es gibt doppelt so viele Stöße pro Sekunde.
```

### Was Temperatur bedeutet

Jetzt vergleichen wir das Ergebnis mit der Zustandsgleichung $pV = N k_B T$. Wir multiplizieren unser Ergebnis mit $V$:
$$p\,V = \tfrac23\,N\cdot\tfrac12 m\,\overline{v^2} \qquad\text{und}\qquad p\,V = N\,k_B\,T.$$
Beide Gleichungen beschreiben dasselbe Gas, also müssen die rechten Seiten gleich sein. Wir teilen beide durch $N$
und multiplizieren mit $\tfrac32$.

:::satz[Temperatur und mittlere kinetische Energie]
$$\overline{E}_\text{kin} = \tfrac12 m\,\overline{v^2} = \tfrac32\,k_B\,T$$
Dabei ist $\overline{E}_\text{kin}$ die mittlere kinetische Energie der Translationsbewegung eines Teilchens, also seiner
Bewegung von Ort zu Ort. Die absolute Temperatur ist direkt proportional zu ihr. Am absoluten Nullpunkt käme diese
Bewegung (in der klassischen Physik) zum Stillstand.
:::

Das ist die Antwort auf die Frage aus
[10.3 Temperatur, innere Energie und Wärme](/lernen/physik1/temperatur-waerme-gase/temperatur-innere-energie-und-waerme):
Die Temperatur misst die mittlere Bewegungsenergie **pro Teilchen**. Bemerkenswert ist, dass die Masse nicht vorkommt.
Bei gleicher Temperatur haben ein leichtes Heliumatom und ein schweres Kohlendioxidmolekül im Mittel **dieselbe**
kinetische Energie. Das schwerere Teilchen ist dafür langsamer.

### Wie schnell sind die Teilchen?

Aus $\tfrac12 m\overline{v^2} = \tfrac32 k_B T$ folgt eine typische Geschwindigkeit. Wir multiplizieren mit $2/m$ und
ziehen die Wurzel:
$$v_\text{rms} = \sqrt{\overline{v^2}} = \sqrt{\frac{3\,k_B\,T}{m}} = \sqrt{\frac{3\,R\,T}{M}}.$$
Dabei ist $v_\text{rms}$ die Wurzel aus dem mittleren Geschwindigkeitsquadrat (englisch *root mean square*). Die rechte Form
erhält man, wenn man Zähler und Nenner mit $N_A$ multipliziert. Dann wird $k_B N_A = R$ und $m N_A = M$, die molare Masse
in **kg/mol**. Siehe Mathematik, [Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln).

:::beispiel[Wie schnell sind Heliumatome?]
Helium ($M = 4{,}0\,\text{g/mol}$) hat $0\,^\circ\text{C}$.

**Schritt 1, Einheiten:** $M = 0{,}0040\,\text{kg/mol}$, $T = 273{,}15\,\text{K}$.

**Schritt 2, einsetzen:**
$v_\text{rms} = \sqrt{\dfrac{3\cdot 8{,}314\,\tfrac{\text{J}}{\text{mol}\cdot\text{K}}\cdot 273{,}15\,\text{K}}{0{,}0040\,\tfrac{\text{kg}}{\text{mol}}}} = \sqrt{1{,}70\cdot 10^{6}\,\tfrac{\text{m}^2}{\text{s}^2}} = 1305\,\tfrac{\text{m}}{\text{s}}$.
Ein Joule pro Kilogramm ist ein $\text{m}^2/\text{s}^2$, deshalb kommt eine Geschwindigkeit heraus.

**Einordnung:** Fast $5000\,\text{km/h}$. Stickstoffmoleküle sind bei Zimmertemperatur mit etwa $500\,\text{m/s}$ viel
langsamer, weil sie siebenmal so schwer sind. Leichte Gase wie Wasserstoff und Helium entweichen deshalb langsam
aus der Erdatmosphäre ins All.
:::

:::beispiel[Die innere Energie eines Edelgases]
Bei einem **einatomigen** Gas wie Helium oder Argon besteht die innere Energie nur aus der Bewegungsenergie der Atome.
Für $N$ Atome gilt $U = N\cdot\tfrac32 k_B T = \tfrac32\,n R T$. Wie groß ist sie für $1{,}0\,\text{mol}$ Helium bei $300\,\text{K}$?

**Rechnung:** $U = \tfrac32\cdot 1{,}0\,\text{mol}\cdot 8{,}314\,\tfrac{\text{J}}{\text{mol}\cdot\text{K}}\cdot 300\,\text{K} = 3741\,\text{J}$.

**Deutung:** Die innere Energie hängt beim idealen Gas nur von der Temperatur ab, nicht vom Volumen. Mehratomige
Moleküle können zusätzlich rotieren. Jede unabhängige Bewegungsmöglichkeit (ein **Freiheitsgrad** $f$) trägt im Mittel
$\tfrac12 k_B T$ bei. Für zweiatomige Gase wie Luft ist $f = 5$ und $U = \tfrac52 nRT$. Das brauchst du in
[Kapitel 11](/lernen/physik1/hauptsaetze-waermekraftmaschinen).
:::

:::achtung[Fehler: Die molare Masse in g/mol einsetzen]
Für Stickstoff bei $20\,^\circ\text{C}$ rechnet ein Schüler
$v_\text{rms} = \sqrt{3\cdot 8{,}314\cdot 293{,}15/28}\,\text{m/s} = 16\,\text{m/s}$.

Das ist langsamer als ein Radfahrer und kann nicht stimmen. Weil $R$ in Joule angegeben ist, muss $M$ in **kg/mol**
stehen: $M = 0{,}028\,\text{kg/mol}$. Richtig ist $v_\text{rms} = 511\,\text{m/s}$.
:::

:::achtung[Fehler: Doppelte Temperatur, doppelte Geschwindigkeit]
Ein Gas wird von $300\,\text{K}$ auf $600\,\text{K}$ erwärmt. Eine Schülerin schließt: „Die Teilchen sind jetzt doppelt so
schnell.“

Verdoppelt hat sich die mittlere **Energie**. Die Geschwindigkeit wächst nur mit der Wurzel der Temperatur:
$v_\text{rms} \propto \sqrt T$. Sie steigt also um den Faktor $\sqrt 2 = 1{,}41$. Für doppelte Geschwindigkeit braucht man die
vierfache absolute Temperatur.
:::

### Nicht alle Teilchen sind gleich schnell

Die Teilchen eines Gases haben nicht alle dieselbe Geschwindigkeit. Durch die ständigen Stöße sind manche gerade sehr
langsam, andere sehr schnell. Wie viele Teilchen welche Geschwindigkeit haben, beschreibt die
**Maxwell-Boltzmann-Verteilung**.

```plot
x: [0, 1600]
y: [0, 2.2]
hoehe: 300
achsen: { x: "Geschwindigkeit in m/s", y: "relative Häufigkeit" }
graphen:
  - { f: "1000*4*pi*(5.6114e-6/pi)^1.5*x^2*exp(-5.6114e-6*x^2)", von: 0, bis: 1600, farbe: 0, label: "300 K" }
  - { f: "1000*4*pi*(2.8057e-6/pi)^1.5*x^2*exp(-2.8057e-6*x^2)", von: 0, bis: 1600, farbe: 1, label: "600 K" }
punkte:
  - { x: 422, y: 1.967, label: "Maximum bei 422 m/s" }
  - { x: 597, y: 1.391, label: "597 m/s" }
beschriftung: "Geschwindigkeitsverteilung von Stickstoffmolekülen bei 300 K (blau) und 600 K (orange). Bei höherer Temperatur liegt das Maximum weiter rechts, und die Kurve wird flacher und breiter. Die Fläche unter beiden Kurven ist gleich groß, weil es gleich viele Moleküle sind."
```

Die Kurve hat ein Maximum bei der **wahrscheinlichsten Geschwindigkeit**. Für Stickstoff bei $300\,\text{K}$ liegt es bei
$422\,\text{m/s}$. Es gibt nach links wenige sehr langsame Teilchen und nach rechts einen langen Ausläufer mit wenigen sehr
schnellen. Genau diese schnellsten Teilchen entkommen beim Verdunsten aus einer Flüssigkeit. Deshalb kühlt Verdunsten,
siehe [10.6 Phasenübergänge und latente Wärme](/lernen/physik1/temperatur-waerme-gase/phasenuebergaenge-und-latente-waerme).

:::merke
**Kinetische Gastheorie in drei Gleichungen:** Der Druck ist $p = \tfrac13\tfrac{N}{V}m\overline{v^2}$. Die Temperatur ist
die mittlere Bewegungsenergie, $\tfrac12 m\overline{v^2} = \tfrac32 k_B T$, unabhängig von der Masse. Die typische
Geschwindigkeit ist $v_\text{rms} = \sqrt{3RT/M}$ mit $M$ in kg/mol. Daraus folgt: $v_\text{rms}$ wächst mit $\sqrt T$ und
sinkt mit $\sqrt M$.
:::

```reflexion
frage: Warum erwärmt sich ein Gas, wenn man es mit einem Kolben schnell zusammendrückt? Erkläre mit den Teilchen, die gegen den bewegten Kolben prallen.
antwort: |
  Der Kolben bewegt sich auf die Teilchen zu. Ein Teilchen, das gegen den entgegenkommenden Kolben prallt, fliegt
  schneller zurück, als es gekommen ist, so wie ein Tennisball, der von einem entgegenkommenden Schläger zurückprallt.
  Im Mittel werden die Teilchen dadurch schneller. Ihre mittlere kinetische Energie steigt, und das bedeutet nach
  $\tfrac12 m\overline{v^2} = \tfrac32 k_B T$ eine höhere Temperatur. Der Kolben verrichtet Arbeit am Gas, und diese Arbeit
  erhöht die innere Energie.
```

### Aufgaben zur kinetischen Gastheorie

```aufgabe
id: p10-ekin
titel: Mittlere kinetische Energie
niveau: 1
lernziel: 8
kompetenz: rechnen
angabe: |
  Wie groß ist die mittlere kinetische Energie der Translationsbewegung eines Gasteilchens bei $300\,\text{K}$ ($k_B = 1{,}381\cdot 10^{-23}\,\text{J/K}$)? Gib das Ergebnis in $10^{-21}\,\text{J}$ an.
teile:
  - typ: zahl
    loesung: "1.5*1.381e-23*300/1e-21"
    einheit: "10⁻²¹ J"
    anzeige: '6{,}21'
    fehler:
      - wert: "1.381e-23*300/1e-21"
        meldung: |
          Der Faktor $\tfrac32$ fehlt. Die mittlere kinetische Energie ist $\overline{E}_\text{kin} = \tfrac32 k_B T$.
      - wert: "0.5*1.381e-23*300/1e-21"
        meldung: |
          $\tfrac12 k_B T$ ist der Beitrag **eines** Freiheitsgrads. Die Translation hat drei Richtungen, $x$, $y$ und $z$, also $\tfrac32 k_B T$.
hinweise:
  - '$\overline{E}_\text{kin} = \tfrac32 k_B T$.'
loesung: |
  **Ansatz:** Die kinetische Gastheorie liefert $\overline{E}_\text{kin} = \tfrac32 k_B T$.
  ---
  **Rechnung:** $\overline{E}_\text{kin} = 1{,}5\cdot 1{,}381\cdot 10^{-23}\,\tfrac{\text{J}}{\text{K}}\cdot 300\,\text{K} = 6{,}21\cdot 10^{-21}\,\text{J}$. Das gilt für jedes Gas, egal ob Helium oder Stickstoff.
```

```aufgabe
id: p10-he-n2
titel: Helium und Stickstoff bei gleicher Temperatur
niveau: 1
lernziel: 8
kompetenz: verstehen
angabe: |
  Helium ($4\,\text{g/mol}$) und Stickstoff ($28\,\text{g/mol}$) haben dieselbe Temperatur. Welche Aussage stimmt?
teile:
  - typ: auswahl
    optionen:
      - "Beide Teilchenarten haben im Mittel dieselbe kinetische Energie. Die Heliumatome sind schneller."
      - "Die Stickstoffmoleküle haben mehr kinetische Energie, weil sie schwerer sind."
      - "Beide sind im Mittel gleich schnell, weil die Temperatur gleich ist."
      - "Die Heliumatome haben mehr kinetische Energie, weil sie schneller sind."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Die mittlere kinetische Energie ist $\tfrac32 k_B T$. Darin kommt die Masse nicht vor. Bei gleicher Temperatur haben alle Teilchen im Mittel dieselbe Energie.
      - wert: 2
        meldung: |
          Gleiche Temperatur heißt gleiche mittlere **Energie**, nicht gleiche Geschwindigkeit. Wer schwerer ist, muss bei gleicher Energie langsamer sein.
      - wert: 3
        meldung: |
          Die Heliumatome sind schneller, aber auch viel leichter. In $\tfrac12 m v^2$ gleicht sich beides genau aus.
hinweise:
  - 'Hängt $\tfrac32 k_B T$ von der Masse ab?'
  - 'Wenn $\tfrac12 m v^2$ gleich ist und $m$ kleiner, was folgt für $v$?'
loesung: |
  **Energie:** $\overline{E}_\text{kin} = \tfrac32 k_B T$ hängt nur von der Temperatur ab. Beide haben dieselbe mittlere Energie.
  ---
  **Geschwindigkeit:** Aus $v_\text{rms} = \sqrt{3RT/M}$ folgt: Helium ist um den Faktor $\sqrt{28/4} = 2{,}6$ schneller.
```

```aufgabe
id: p10-vrms
titel: Wie schnell sind Luftmoleküle?
niveau: 2
lernziel: 8
kompetenz: rechnen
angabe: |
  Berechne $v_\text{rms}$ von Stickstoffmolekülen ($M = 28\,\text{g/mol}$) bei $20\,^\circ\text{C}$. Runde auf ganze m/s.
teile:
  - typ: zahl
    loesung: "sqrt(3*8.314*293.15/0.028)"
    einheit: "m/s"
    anzeige: '511'
    toleranz: 2
    fehler:
      - wert: "sqrt(3*8.314*293.15/28)"
        meldung: |
          Du hast $M$ in g/mol eingesetzt. Weil $R$ in Joule angegeben ist, muss $M$ in kg/mol stehen: $0{,}028\,\text{kg/mol}$.
      - wert: "sqrt(3*8.314*20/0.028)"
        meldung: |
          Die Temperatur muss in Kelvin stehen, $293{,}15\,\text{K}$.
hinweise:
  - '$v_\text{rms} = \sqrt{3RT/M}$.'
  - '$M$ in kg/mol und $T$ in K einsetzen.'
loesung: |
  **Ansatz:** Aus $\tfrac12 m\overline{v^2} = \tfrac32 k_BT$ folgt $v_\text{rms} = \sqrt{3RT/M}$, mit $M$ in kg/mol.
  ---
  **Einheiten:** $T = 293{,}15\,\text{K}$, $M = 0{,}028\,\text{kg/mol}$.
  ---
  **Rechnung:** $v_\text{rms} = \sqrt{\dfrac{3\cdot 8{,}314\cdot 293{,}15}{0{,}028}}\,\tfrac{\text{m}}{\text{s}} = \sqrt{2{,}61\cdot 10^{5}}\,\tfrac{\text{m}}{\text{s}} = 511\,\tfrac{\text{m}}{\text{s}}$. Das ist rund anderthalbmal so schnell wie der Schall in Luft ($343\,\text{m/s}$). Der Schall wird von genau diesen Molekülen weitergegeben, deshalb liegen beide Werte in derselben Größenordnung.
```

```aufgabe
id: p10-temperatur-verdoppeln
titel: Doppelte Geschwindigkeit
niveau: 2
lernziel: 8
kompetenz: anwenden
angabe: |
  Ein Gas hat $27\,^\circ\text{C}$. Auf welche Temperatur in °C muss man es erwärmen, damit sich $v_\text{rms}$ der Teilchen verdoppelt? Runde auf ganze Grad.
teile:
  - typ: zahl
    loesung: "4*300.15-273.15"
    einheit: "°C"
    anzeige: '927'
    toleranz: 1
    fehler:
      - wert: "54"
        meldung: |
          Du hast die Celsius-Temperatur verdoppelt. Erstens gilt die Proportionalität nur in Kelvin. Zweitens wächst $v_\text{rms}$ mit $\sqrt T$, für doppelte Geschwindigkeit braucht man also die **vierfache** absolute Temperatur.
      - wert: "2*300.15-273.15"
        meldung: |
          Doppelte absolute Temperatur ergibt nur $\sqrt 2$-fache Geschwindigkeit. Für die doppelte Geschwindigkeit braucht man $2^2 = 4$-fache Temperatur.
hinweise:
  - '$v_\text{rms} \propto \sqrt{T}$. Um welchen Faktor muss $T$ wachsen, damit $\sqrt T$ sich verdoppelt?'
  - Rechne mit Kelvin und am Ende zurück in Grad Celsius.
loesung: |
  **Ansatz:** $v_\text{rms} \propto \sqrt T$. Soll sich $v_\text{rms}$ verdoppeln, muss $\sqrt T$ sich verdoppeln, also $T$ sich vervierfachen.
  ---
  **Kelvin:** $T_1 = 27 + 273{,}15 = 300{,}15\,\text{K}$, $T_2 = 4\cdot 300{,}15\,\text{K} = 1200{,}6\,\text{K}$.
  ---
  **Zurück in Celsius:** $\vartheta_2 = 1200{,}6 - 273{,}15 = 927\,^\circ\text{C}$. Probe: $\sqrt{1200{,}6/300{,}15} = \sqrt 4 = 2$.
```

```aufgabe
id: p10-teilchenbild-text
titel: Gasdruck im Teilchenbild
niveau: 2
lernziel: 8
kompetenz: begruenden
angabe: |
  Erkläre mit dem Teilchenmodell, warum der Druck in einer geschlossenen Flasche steigt, wenn man sie erwärmt. Nenne die beiden Effekte, die zusammenwirken.
teile:
  - typ: text
    muster: |
      Der Druck entsteht durch die Stöße der Gasteilchen auf die Wand. Beim Erwärmen steigt die mittlere kinetische Energie
      der Teilchen proportional zur absoluten Temperatur, sie werden schneller. Erstens überträgt jedes schnellere Teilchen
      bei jedem Stoß mehr Impuls. Zweitens kommt es öfter an die Wand zurück. Beides zusammen vergrößert die Kraft pro
      Fläche. Weil das Volumen gleich bleibt, steigt der Druck proportional zu T (Gesetz von Amontons).
hinweise:
  - Was ändert sich an der Bewegung der Teilchen, wenn die Temperatur steigt?
  - Zwei Effekte, die Häufigkeit der Stöße und der Impuls pro Stoß.
loesung: |
  **Ansatz:** Höhere Temperatur bedeutet höhere mittlere kinetische Energie, also schnellere Teilchen.
  ---
  **Effekt 1:** Jeder Stoß ist heftiger, weil der übertragene Impuls $2mv_x$ mit der Geschwindigkeit wächst.
  ---
  **Effekt 2:** Die Teilchen kommen öfter an die Wand. Zusammen wächst der Druck mit $\overline{v^2}$, also proportional zu $T$.
```

```aufgabe
id: p10-maxwell-lesen
titel: Die Geschwindigkeitsverteilung lesen
niveau: 2
lernziel: 8
kompetenz: anwenden
angabe: |
  Das Diagramm zeigt die Geschwindigkeitsverteilung von Sauerstoffmolekülen bei $300\,\text{K}$.

  ```plot
  x: [0, 1400]
  y: [0, 2.4]
  achsen: { x: "Geschwindigkeit in m/s", y: "relative Häufigkeit" }
  graphen:
    - { f: "1000*4*pi*(6.413e-6/pi)^1.5*x^2*exp(-6.413e-6*x^2)", von: 0, bis: 1400, farbe: 0 }
  strecken:
    - { von: [395, 0], nach: [395, 2.1], gestrichelt: true }
  ```

  a) Lies die wahrscheinlichste Geschwindigkeit ab. Runde auf zehn m/s.

  b) Wie ändert sich die Kurve, wenn man das Gas auf $600\,\text{K}$ erwärmt?
teile:
  - typ: zahl
    label: a) wahrscheinlichste Geschwindigkeit
    loesung: "sqrt(2*8.314*300/0.032)"
    einheit: "m/s"
    anzeige: '395'
    toleranz: 15
    fehler:
      - wert: "2.1"
        meldung: |
          Das ist die Höhe des Maximums auf der senkrechten Achse. Gefragt ist die Geschwindigkeit, also der Wert auf der waagrechten Achse unter dem Maximum.
  - typ: auswahl
    label: b) bei 600 K
    optionen:
      - "Das Maximum wandert nach rechts, die Kurve wird flacher und breiter."
      - "Die ganze Kurve wird doppelt so hoch."
      - "Das Maximum wandert auf die doppelte Geschwindigkeit, die Form bleibt gleich."
      - "Alle Moleküle haben dann dieselbe Geschwindigkeit."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Die Fläche unter der Kurve steht für die Zahl der Moleküle, und die bleibt gleich. Wenn die Kurve breiter wird, muss sie flacher werden.
      - wert: 2
        meldung: |
          Die Geschwindigkeiten wachsen mit $\sqrt T$. Bei doppelter Temperatur wandert das Maximum nur um den Faktor $\sqrt 2 = 1{,}41$.
      - wert: 3
        meldung: |
          Durch die ständigen Stöße bleiben die Geschwindigkeiten immer verteilt. Bei höherer Temperatur wird die Verteilung sogar breiter.
hinweise:
  - Das Maximum ist der höchste Punkt der Kurve. Die gestrichelte Linie hilft beim Ablesen.
  - 'Für b): Die Fläche unter der Kurve bleibt gleich, und die typischen Geschwindigkeiten wachsen mit $\sqrt T$.'
loesung: |
  **a)** Das Maximum liegt bei etwa $395\,\text{m/s}$. Zur Kontrolle: Die wahrscheinlichste Geschwindigkeit ist $\sqrt{2RT/M} = \sqrt{2\cdot 8{,}314\cdot 300/0{,}032}\,\text{m/s} = 395\,\text{m/s}$.
  ---
  **b)** Bei $600\,\text{K}$ sind die Moleküle im Mittel schneller. Das Maximum wandert um den Faktor $\sqrt 2$ nach rechts, auf etwa $560\,\text{m/s}$.
  ---
  **Form:** Die Verteilung wird breiter. Weil die Zahl der Moleküle gleich bleibt, ist die Fläche unter der Kurve gleich, und die Kurve wird flacher.
```

```aufgabe
id: p10-druck-kinetisch
titel: Druck und Temperatur aus der Teilchenbewegung
niveau: 3
lernziel: 8
kompetenz: anwenden
angabe: |
  In einem Gefäß mit $1{,}0\,\text{L}$ befinden sich $2{,}5\cdot 10^{22}$ Stickstoffmoleküle. Ihre Geschwindigkeit ist im Mittel $v_\text{rms} = 500\,\text{m/s}$. Die Masse eines Moleküls ist $m = 4{,}65\cdot 10^{-26}\,\text{kg}$.

  a) Berechne den Druck mit $p = \tfrac13\tfrac{N}{V}m\overline{v^2}$. Runde auf drei geltende Ziffern.

  b) Welche Temperatur hat das Gas? Runde auf ganze Kelvin.
teile:
  - typ: zahl
    label: a) Druck
    loesung: "(1/3)*2.5e22/1.0e-3*4.65e-26*500^2"
    einheit: "Pa"
    anzeige: '96\,900 \approx 9{,}69\cdot 10^{4}'
    toleranz: 100
    fehler:
      - wert: "2.5e22/1.0e-3*4.65e-26*500^2"
        meldung: |
          Der Faktor $\tfrac13$ fehlt. Er kommt daher, dass nur die Geschwindigkeitskomponente senkrecht zur Wand zählt, und die ist im Mittel ein Drittel von $\overline{v^2}$.
      - wert: "(1/3)*2.5e22/1.0*4.65e-26*500^2"
        meldung: |
          Das Volumen muss in m³ stehen: $1{,}0\,\text{L} = 1{,}0\cdot 10^{-3}\,\text{m}^3$.
  - typ: zahl
    label: b) Temperatur
    loesung: "4.65e-26*500^2/(3*1.381e-23)"
    einheit: "K"
    anzeige: '281'
    toleranz: 1
    fehler:
      - wert: "4.65e-26*500^2/(3*1.381e-23)-273.15"
        meldung: |
          Das ist die Temperatur in Grad Celsius. Gefragt sind Kelvin.
hinweise:
  - Rechne das Volumen in m³ um und setze in die Druckformel ein.
  - 'Für b): Aus $\tfrac12 m\overline{v^2} = \tfrac32 k_B T$ folgt $T = \dfrac{m\overline{v^2}}{3k_B}$.'
gefuehrt:
  - text: Wie groß ist die Teilchendichte $N/V$ in $\text{m}^{-3}$?
    teil: { typ: zahl, loesung: "2.5e22/1.0e-3" }
    erklaerung: $N/V = 2{,}5\cdot 10^{22}/(1{,}0\cdot 10^{-3}\,\text{m}^3) = 2{,}5\cdot 10^{25}\,\text{m}^{-3}$.
  - text: Berechne $m\,\overline{v^2}$ für ein Molekül in Joule.
    teil: { typ: zahl, loesung: "4.65e-26*500^2" }
    erklaerung: $4{,}65\cdot 10^{-26}\,\text{kg}\cdot(500\,\text{m/s})^2 = 1{,}16\cdot 10^{-20}\,\text{J}$. Das ist das Doppelte der mittleren kinetischen Energie.
  - text: Berechne den Druck in Pascal.
    teil: { typ: zahl, loesung: "(1/3)*2.5e25*1.1625e-20", toleranz: 100 }
    erklaerung: $p = \tfrac13\cdot 2{,}5\cdot 10^{25}\,\text{m}^{-3}\cdot 1{,}16\cdot 10^{-20}\,\text{J} = 9{,}69\cdot 10^{4}\,\text{Pa}$, knapp der Luftdruck.
  - text: Berechne die Temperatur in Kelvin.
    teil: { typ: zahl, loesung: "1.1625e-20/(3*1.381e-23)", toleranz: 1 }
    erklaerung: $T = m\overline{v^2}/(3k_B) = 1{,}16\cdot 10^{-20}\,\text{J}/(3\cdot 1{,}381\cdot 10^{-23}\,\text{J/K}) = 281\,\text{K}$, also etwa $8\,^\circ\text{C}$.
loesung: |
  **Ansatz:** Die kinetische Gastheorie verbindet Druck und Temperatur mit der Teilchenbewegung. Alle Größen in SI.
  ---
  **Teilchendichte:** $\dfrac{N}{V} = \dfrac{2{,}5\cdot 10^{22}}{1{,}0\cdot 10^{-3}\,\text{m}^3} = 2{,}5\cdot 10^{25}\,\text{m}^{-3}$.
  ---
  **a)** $p = \tfrac13\cdot 2{,}5\cdot 10^{25}\,\text{m}^{-3}\cdot 4{,}65\cdot 10^{-26}\,\text{kg}\cdot(500\,\tfrac{\text{m}}{\text{s}})^2 = 9{,}69\cdot 10^{4}\,\text{Pa}$. Die Einheit ist $\tfrac{\text{kg}}{\text{m}\cdot\text{s}^2} = \tfrac{\text{N}}{\text{m}^2} = \text{Pa}$.
  ---
  **b)** $T = \dfrac{m\overline{v^2}}{3k_B} = \dfrac{4{,}65\cdot 10^{-26}\,\text{kg}\cdot 2{,}5\cdot 10^{5}\,\tfrac{\text{m}^2}{\text{s}^2}}{3\cdot 1{,}381\cdot 10^{-23}\,\tfrac{\text{J}}{\text{K}}} = 281\,\text{K}$.
  ---
  **Probe:** $pV = Nk_BT$ ergibt $9{,}69\cdot 10^{4}\cdot 10^{-3}\,\text{J} = 96{,}9\,\text{J}$ und $2{,}5\cdot 10^{22}\cdot 1{,}381\cdot 10^{-23}\cdot 281\,\text{J} = 97\,\text{J}$. Beides passt zusammen.
```

```aufgabe
id: p10-uran-anreicherung
titel: Isotope trennen durch Geschwindigkeit
niveau: 3
lernziel: 8
kompetenz: modellieren
angabe: |
  Natürliches Uran besteht fast nur aus den Isotopen $^{238}\text{U}$ und $^{235}\text{U}$. Um sie zu trennen, verwandelt man Uran in das Gas Uranhexafluorid. Ein Molekül mit $^{235}\text{U}$ hat die molare Masse $349\,\text{g/mol}$, eines mit $^{238}\text{U}$ hat $352\,\text{g/mol}$. Beide haben dieselbe Temperatur.

  Um wie viel Prozent ist $v_\text{rms}$ der leichteren Moleküle größer? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    loesung: "(sqrt(352/349)-1)*100"
    einheit: "%"
    anzeige: '0{,}43'
    toleranz: 0.01
    fehler:
      - wert: "(352/349-1)*100"
        meldung: |
          Die Geschwindigkeit ist nicht umgekehrt proportional zur Masse, sondern zur **Wurzel** der Masse: $v_\text{rms} = \sqrt{3RT/M}$. Der Unterschied ist deshalb nur etwa halb so groß.
      - wert: "0"
        meldung: |
          Gleiche Temperatur heißt gleiche mittlere **Energie**, nicht gleiche Geschwindigkeit. Die leichteren Moleküle sind etwas schneller.
hinweise:
  - '$v_\text{rms} = \sqrt{3RT/M}$. Bilde das Verhältnis der beiden Geschwindigkeiten.'
  - 'Bei gleicher Temperatur kürzen sich $3$, $R$ und $T$. Übrig bleibt $\sqrt{M_{238}/M_{235}}$.'
loesung: |
  **Ansatz:** Bei gleicher Temperatur haben beide Molekülsorten dieselbe mittlere kinetische Energie. Die leichteren sind deshalb schneller, und zwar mit $v_\text{rms} \propto 1/\sqrt M$.
  ---
  **Verhältnis:** $\dfrac{v_{235}}{v_{238}} = \sqrt{\dfrac{3RT/M_{235}}{3RT/M_{238}}} = \sqrt{\dfrac{M_{238}}{M_{235}}} = \sqrt{\dfrac{352}{349}} = 1{,}0043$.
  ---
  **Ergebnis:** Die leichteren Moleküle sind nur um $0{,}43\,\%$ schneller. Deshalb braucht man für die Anreicherung von Uran viele hintereinandergeschaltete Trennstufen oder sehr schnelle Zentrifugen.
```

## Gemischte Wiederholung

In diesem Abschnitt sind Aufgaben aus diesem Kapitel mit Aufgaben aus den Kapiteln
[Größen, Einheiten, Messen](/lernen/physik1/groessen-einheiten-messen),
[Arbeit, Energie, Impuls](/lernen/physik1/arbeit-energie-impuls) und
[Hydro- und Aeromechanik](/lernen/physik1/hydro-aeromechanik) gemischt. Das ist Absicht: In der Prüfung steht nicht
dabei, zu welchem Abschnitt eine Aufgabe gehört. Bei den Aufgaben „Welches Verfahren passt?“ musst du nichts rechnen,
sondern nur den richtigen Ansatz erkennen. Das ist oft der schwerste Teil einer Prüfungsaufgabe.

```aufgabe
id: p10-mix-verfahren-eis
titel: Welches Verfahren passt? Eis im Getränk
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  In ein Glas Cola mit $20\,^\circ\text{C}$ kommen Eiswürfel mit $-5\,^\circ\text{C}$. Gesucht ist die Endtemperatur. Welcher Ansatz ist richtig? Du musst nichts rechnen.
teile:
  - typ: auswahl
    optionen:
      - "Eine Energiebilanz mit drei Abschnitten für das Eis: erwärmen auf $0\\,^\\circ\\text{C}$, schmelzen, Schmelzwasser erwärmen. Vorher prüfen, ob die Wärme der Cola zum Schmelzen reicht."
      - "Der gewichtete Mittelwert $T_m = \\frac{m_1T_1 + m_2T_2}{m_1 + m_2}$ mit den Massen."
      - "Die allgemeine Gasgleichung, weil Cola Kohlensäure enthält."
      - "$Q = c\\,m\\,\\Delta T$ mit $\\Delta T = 25\\,\\text{K}$ für das Eis."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Der einfache Mittelwert vergisst die Schmelzwärme. Gerade das Schmelzen kühlt am stärksten. Außerdem hat Eis ein anderes $c$ als Wasser.
      - wert: 2
        meldung: |
          Die Kohlensäure spielt für die Temperatur keine Rolle. Es geht um Wärmeaustausch zwischen Cola und Eis.
      - wert: 3
        meldung: |
          Das Eis wird nicht einfach um $25\,\text{K}$ erwärmt. Dazwischen liegt das Schmelzen, und die Endtemperatur ist ja gerade gesucht.
hinweise:
  - Welche Vorgänge durchläuft das Eis, bis es die Endtemperatur hat?
loesung: |
  **Ansatz:** Es ist eine Mischungsaufgabe mit Phasenübergang. Das Eis wird zuerst auf $0\,^\circ\text{C}$ erwärmt, schmilzt dann, und das Schmelzwasser erwärmt sich weiter.
  ---
  **Vorsicht:** Bei viel Eis reicht die Wärme der Cola eventuell nicht. Dann bleibt Eis übrig, und die Endtemperatur ist $0\,^\circ\text{C}$. Wiederholen: [10.6 Phasenübergänge und latente Wärme](/lernen/physik1/temperatur-waerme-gase/phasenuebergaenge-und-latente-waerme).
```

```aufgabe
id: p10-mix-verfahren-gas
titel: Welches Verfahren passt? Eine Gasaufgabe
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  Ordne den Situationen das passende Werkzeug zu. Welche Zuordnungen sind richtig? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Ein Reifen wird warm, gesucht ist der neue Druck: Amontons, $p_1/T_1 = p_2/T_2$."
      - "Gesucht ist die Masse des Gases in einer Flasche: $pV = nRT$ in SI-Einheiten, dann $m = nM$."
      - "Ein Ballon steigt auf, Druck und Temperatur ändern sich, gesucht ist das Volumen: Boyle-Mariotte."
      - "Gesucht ist die Geschwindigkeit der Gasteilchen: $v_\\text{rms} = \\sqrt{3RT/M}$."
    richtig: [0, 1, 3]
    fehler:
      - wert: [0, 1, 2, 3]
        meldung: |
          Boyle-Mariotte gilt nur bei konstanter Temperatur. Ändern sich Druck **und** Temperatur, braucht man die allgemeine Gasgleichung $\tfrac{p_1V_1}{T_1} = \tfrac{p_2V_2}{T_2}$.
      - wert: [0, 3]
        meldung: |
          Auch die zweite Zuordnung stimmt. Für eine Masse braucht man die Stoffmenge, und die liefert nur $pV = nRT$.
hinweise:
  - Prüfe bei jeder Situation, welche Größen sich ändern und welche gesucht ist.
loesung: |
  **Richtig:** Reifen mit festem Volumen heißt Amontons. Masse heißt $pV = nRT$ und $m = nM$. Teilchengeschwindigkeit heißt kinetische Gastheorie.
  ---
  **Falsch:** Beim aufsteigenden Ballon ändern sich Druck und Temperatur. Dafür braucht man die allgemeine Gasgleichung. Wiederholen: [10.10 Die Zustandsgleichung des idealen Gases](/lernen/physik1/temperatur-waerme-gase/die-zustandsgleichung-des-idealen-gases).
```

```aufgabe
id: p10-mix-heizluefter
titel: Ein Heizlüfter wärmt die Zimmerluft
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Ein Heizlüfter mit $2{,}0\,\text{kW}$ soll die Luft in einem Zimmer ($60\,\text{kg}$ Luft, $c = 1005\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}$) um $5{,}0\,\text{K}$ erwärmen. Wie lange dauert das, wenn man Wände und Möbel vernachlässigt?
teile:
  - typ: zahl
    loesung: "60*1005*5/2000"
    einheit: "s"
    anzeige: '151'
    toleranz: 1
    fehler:
      - wert: "60*4190*5/2000"
        meldung: |
          Du hast die spezifische Wärmekapazität von Wasser genommen. Luft hat $c = 1005\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}$.
      - wert: "60*1005*5/2"
        meldung: |
          Die Leistung muss in Watt stehen: $2{,}0\,\text{kW} = 2000\,\text{W}$.
hinweise:
  - 'Erst $Q = c\,m\,\Delta T$, dann $t = Q/P$. Siehe Kapitel 4 zur Leistung.'
loesung: |
  **Ansatz:** Der Heizlüfter liefert pro Sekunde $2000\,\text{J}$. Die nötige Wärme folgt aus $Q = c\,m\,\Delta T$.
  ---
  **Wärme:** $Q = 1005\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}\cdot 60\,\text{kg}\cdot 5{,}0\,\text{K} = 301\,500\,\text{J}$.
  ---
  **Zeit:** $t = Q/P = 301\,500\,\text{J}/2000\,\text{W} = 151\,\text{s}$, gut zweieinhalb Minuten. In Wirklichkeit dauert es viel länger, weil Wände und Möbel mitgewärmt werden. Wiederholen: [Kapitel 4: Leistung und Wirkungsgrad](/lernen/physik1/arbeit-energie-impuls/leistung-und-wirkungsgrad).
```

```aufgabe
id: p10-mix-reibung
titel: Reibung erzeugt innere Energie
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Eine Kiste ($5{,}0\,\text{kg}$) wird $3{,}0\,\text{m}$ weit über einen waagrechten Boden geschoben. Die Gleitreibungszahl ist $\mu = 0{,}40$. Wie viel Energie wird dabei zu innerer Energie von Kiste und Boden?
teile:
  - typ: zahl
    loesung: "0.40*5.0*9.81*3.0"
    einheit: "J"
    anzeige: '58{,}9'
    toleranz: 0.2
    fehler:
      - wert: "5.0*9.81*3.0"
        meldung: |
          Das wäre die Hubarbeit, um die Kiste $3\,\text{m}$ zu heben. Hier geht es um die Reibungskraft $F_R = \mu\,m\,g$ entlang des Weges.
hinweise:
  - 'Die Reibungsarbeit ist $W = F_R\cdot s$ mit $F_R = \mu\,m\,g$.'
loesung: |
  **Ansatz:** Die Reibung verrichtet Arbeit. Diese Arbeit wird vollständig zu innerer Energie der Reibflächen, sie werden etwas wärmer.
  ---
  **Reibungskraft:** $F_R = \mu\,m\,g = 0{,}40\cdot 5{,}0\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 19{,}6\,\text{N}$.
  ---
  **Arbeit:** $W = F_R\cdot s = 19{,}6\,\text{N}\cdot 3{,}0\,\text{m} = 58{,}9\,\text{J}$. Wiederholen: [Kapitel 4: Energie](/lernen/physik1/arbeit-energie-impuls/energie).
```

```aufgabe
id: p10-mix-wasserfall
titel: Wie viel wärmer wird ein Wasserfall?
niveau: 2
lernziel: 2
kompetenz: modellieren
angabe: |
  Wasser stürzt einen $80\,\text{m}$ hohen Wasserfall hinunter. Unten wird die ganze Bewegungsenergie durch Verwirbelung zu innerer Energie des Wassers. Um wie viel Kelvin ist das Wasser unten wärmer als oben ($g = 9{,}81\,\text{m/s}^2$, $c = 4190\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}$)? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    loesung: "9.81*80/4190"
    einheit: "K"
    anzeige: '0{,}19'
    toleranz: 0.005
    fehler:
      - wert: "80/4190"
        meldung: |
          Die Fallbeschleunigung fehlt. Die potentielle Energie ist $m\,g\,h$, nicht $m\,h$.
      - wert: "9.81*80"
        meldung: |
          Das ist die Energie pro Kilogramm in Joule. Um daraus eine Temperaturerhöhung zu machen, teilst du durch $c$.
hinweise:
  - 'Setze die potentielle Energie $m\,g\,h$ gleich der Änderung der inneren Energie $c\,m\,\Delta T$.'
  - Die Masse kürzt sich heraus.
loesung: |
  **Ansatz:** Energieerhaltung: Die potentielle Energie oben wird unten zu innerer Energie, $m\,g\,h = c\,m\,\Delta T$.
  ---
  **Masse kürzen:** Wir teilen beide Seiten durch $m\,c$: $\Delta T = \dfrac{g\,h}{c}$.
  ---
  **Rechnung:** $\Delta T = \dfrac{9{,}81\,\text{m/s}^2\cdot 80\,\text{m}}{4190\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}} = 0{,}19\,\text{K}$. Joule selbst soll in seinen Flitterwochen die Temperatur an einem Wasserfall gemessen haben, um genau diesen Effekt zu finden. Wiederholen: [Kapitel 4: Der Energieerhaltungssatz](/lernen/physik1/arbeit-energie-impuls/der-energieerhaltungssatz).
```

```aufgabe
id: p10-mix-heliumballon
titel: Was trägt ein Heliumballon?
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Ein Luftballon wird mit $10\,\text{L}$ Helium gefüllt ($20\,^\circ\text{C}$, $1013\,\text{hPa}$). Die Dichte von Luft ist dabei $1{,}205\,\text{kg/m}^3$, die von Helium $0{,}166\,\text{kg/m}^3$. Welche Masse in Gramm kann der Ballon höchstens tragen, einschließlich seiner Hülle? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "(1.205-0.166)*0.010*1000"
    einheit: "g"
    anzeige: '10{,}4'
    toleranz: 0.1
    fehler:
      - wert: "1.205*0.010*1000"
        meldung: |
          Das ist die Masse der verdrängten Luft, also der Auftrieb. Das Helium selbst wiegt aber auch etwas und muss abgezogen werden.
      - wert: "(1.205-0.166)*10*1000"
        meldung: |
          Das Volumen muss in m³ stehen: $10\,\text{L} = 0{,}010\,\text{m}^3$.
hinweise:
  - 'Der Auftrieb entspricht dem Gewicht der verdrängten Luft (Archimedes, Kapitel 9).'
  - Davon geht das Gewicht des Heliums ab. Der Rest kann Hülle und Last tragen.
loesung: |
  **Ansatz:** Nach Archimedes ist der Auftrieb gleich dem Gewicht der verdrängten Luft. Der Ballon kann so viel tragen, wie die verdrängte Luft mehr wiegt als das Helium.
  ---
  **Massen:** verdrängte Luft $1{,}205\cdot 0{,}010\,\text{kg} = 12{,}05\,\text{g}$, Helium $0{,}166\cdot 0{,}010\,\text{kg} = 1{,}66\,\text{g}$.
  ---
  **Ergebnis:** $12{,}05\,\text{g} - 1{,}66\,\text{g} = 10{,}4\,\text{g}$. Eine Ballonhülle wiegt meist schon ein paar Gramm, deshalb trägt ein kleiner Ballon fast nichts mehr. Wiederholen: [Kapitel Hydro- und Aeromechanik](/lernen/physik1/hydro-aeromechanik), Abschnitt über den Auftrieb.
```

```aufgabe
id: p10-mix-unsicherheit
titel: Wärmemenge mit Messunsicherheit
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Gemessen wurden die Masse von Wasser $m = (0{,}500 \pm 0{,}005)\,\text{kg}$ und seine Erwärmung $\Delta T = (20{,}0 \pm 0{,}5)\,\text{K}$. Berechne die aufgenommene Wärme und ihre absolute Unsicherheit. Verwende die Regel: Bei einem Produkt addieren sich die relativen Unsicherheiten. Die Unsicherheit von $c = 4190\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}$ wird vernachlässigt.
teile:
  - typ: zahl
    label: Wärme
    loesung: "4190*0.5*20"
    einheit: "J"
    anzeige: '41\,900'
    fehler:
      - wert: "4190*0.5*20.5"
        meldung: |
          Der Bestwert wird mit den gemessenen Werten selbst berechnet, ohne die Unsicherheit dazuzuzählen.
  - typ: zahl
    label: absolute Unsicherheit
    loesung: "4190*0.5*20*(0.005/0.5+0.5/20)"
    einheit: "J"
    anzeige: '1467 \approx 1500'
    toleranz: 40
    fehler:
      - wert: "0.005+0.5"
        meldung: |
          Unsicherheiten mit verschiedenen Einheiten (kg und K) kann man nicht addieren. Bei einem Produkt addiert man die **relativen** Unsicherheiten.
      - wert: "4190*0.5*20*(0.5/20)"
        meldung: |
          Du hast nur die Unsicherheit der Temperatur berücksichtigt. Auch die Masse ist um $1\,\%$ unsicher.
hinweise:
  - 'Relative Unsicherheiten: $0{,}005/0{,}500$ und $0{,}5/20{,}0$.'
  - Addiere sie und multipliziere mit dem Bestwert von $Q$.
loesung: |
  **Ansatz:** $Q = c\,m\,\Delta T$ ist ein Produkt. Seine relative Unsicherheit ist die Summe der relativen Unsicherheiten der Faktoren.
  ---
  **Bestwert:** $Q = 4190\cdot 0{,}500\cdot 20{,}0\,\text{J} = 41\,900\,\text{J}$.
  ---
  **Relative Unsicherheit:** $\dfrac{0{,}005}{0{,}500} + \dfrac{0{,}5}{20{,}0} = 1{,}0\,\% + 2{,}5\,\% = 3{,}5\,\%$.
  ---
  **Ergebnis:** $\Delta Q = 0{,}035\cdot 41\,900\,\text{J} = 1467\,\text{J}$, also $Q = (41{,}9 \pm 1{,}5)\,\text{kJ}$. Wiederholen: [Kapitel 1: Messunsicherheit und signifikante Stellen](/lernen/physik1/groessen-einheiten-messen/messunsicherheit-und-signifikante-stellen).
```

```aufgabe
id: p10-mix-tauchflasche
titel: Wie lange reicht die Luft beim Tauchen?
niveau: 2
lernziel: 6
kompetenz: modellieren
angabe: |
  Eine Tauchflasche hat $12\,\text{L}$ und ist mit $200\,\text{bar}$ gefüllt. Aus Sicherheitsgründen taucht man auf, wenn noch $50\,\text{bar}$ in der Flasche sind. Ein Taucher atmet pro Minute $20\,\text{L}$ Luft, gemessen beim jeweiligen Umgebungsdruck. Er taucht in $20\,\text{m}$ Tiefe (Absolutdruck dort $2{,}96\,\text{bar}$). Die Temperatur bleibt gleich. Wie viele Minuten reicht die Luft? Runde auf ganze Minuten.
teile:
  - typ: zahl
    loesung: "(200-50)*12/(20*2.96)"
    einheit: "min"
    anzeige: '30'
    toleranz: 0.5
    fehler:
      - wert: "(200-50)*12/20"
        meldung: |
          So lange würde die Luft an der Oberfläche reichen. In $20\,\text{m}$ Tiefe ist jeder Atemzug fast dreimal so dicht, der Taucher verbraucht also fast dreimal so viel Gas.
      - wert: "200*12/(20*2.96)"
        meldung: |
          Die Reserve von $50\,\text{bar}$ darf nicht verbraucht werden. Nutzbar sind nur $200 - 50 = 150\,\text{bar}$.
hinweise:
  - 'Wie viele Liter Luft bei $1\,\text{bar}$ entsprechen $150\,\text{bar}$ in $12\,\text{L}$? Boyle-Mariotte.'
  - 'In der Tiefe entsprechen $20\,\text{L}$ pro Minute bei $2{,}96\,\text{bar}$ wie viel Litern bei $1\,\text{bar}$?'
loesung: |
  **Ansatz:** Wir rechnen alle Luftmengen auf den Druck $1\,\text{bar}$ um, mit Boyle-Mariotte $p_1V_1 = p_2V_2$. Dann sind Vorrat und Verbrauch vergleichbar.
  ---
  **Vorrat:** Nutzbar sind $150\,\text{bar}$ in $12\,\text{L}$. Bei $1\,\text{bar}$ wären das $V = 12\,\text{L}\cdot 150 = 1800\,\text{L}$.
  ---
  **Verbrauch:** $20\,\text{L}$ pro Minute bei $2{,}96\,\text{bar}$ entsprechen $20\cdot 2{,}96 = 59{,}2\,\text{L}$ pro Minute bei $1\,\text{bar}$.
  ---
  **Zeit:** $t = 1800\,\text{L}/(59{,}2\,\text{L/min}) = 30\,\text{min}$. An der Oberfläche würde dieselbe Luft $90$ Minuten reichen. Wiederholen: [Kapitel Hydro- und Aeromechanik](/lernen/physik1/hydro-aeromechanik), Schweredruck.
```

```aufgabe
id: p10-mix-hammer
titel: Ein Nagel wird warm gehämmert
niveau: 3
lernziel: 2
kompetenz: modellieren
angabe: |
  Ein Hammer mit $0{,}50\,\text{kg}$ trifft mit $6{,}0\,\text{m/s}$ auf einen Eisennagel mit $20\,\text{g}$ ($c = 450\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}$). Der Hammer bleibt bei jedem Schlag liegen. Man schlägt $20$-mal. Die Hälfte der kinetischen Energie wird zu innerer Energie des Nagels, der Rest geht in Holz und Hammer.

  a) Wie viel kinetische Energie hat der Hammer bei einem Schlag?

  b) Um wie viel Kelvin erwärmt sich der Nagel insgesamt, wenn er zwischendurch keine Wärme abgibt?
teile:
  - typ: zahl
    label: a) Energie pro Schlag
    loesung: "0.5*0.50*6.0^2"
    einheit: "J"
    anzeige: '9{,}0'
    fehler:
      - wert: "0.50*6.0^2"
        meldung: |
          Der Faktor $\tfrac12$ fehlt: $E_\text{kin} = \tfrac12 m v^2$.
  - typ: zahl
    label: b) Erwärmung
    loesung: "20*0.5*0.5*0.50*6.0^2/(0.020*450)"
    einheit: "K"
    anzeige: '10'
    toleranz: 0.2
    fehler:
      - wert: "20*0.5*0.50*6.0^2/(0.020*450)"
        meldung: |
          Nur die **Hälfte** der Energie geht in den Nagel. Du hast alles dem Nagel zugeschrieben.
      - wert: "20*0.5*0.5*0.50*6.0^2/(20*450)"
        meldung: |
          Die Masse des Nagels muss in Kilogramm stehen: $20\,\text{g} = 0{,}020\,\text{kg}$.
hinweise:
  - 'Für a): $E_\text{kin} = \tfrac12 m v^2$ für den Hammer.'
  - 'Für b): Gesamtenergie für den Nagel ist $20\cdot\tfrac12\cdot E_\text{kin}$. Dann $\Delta T = Q/(c\,m)$.'
loesung: |
  **Ansatz:** Bei jedem Schlag wird die kinetische Energie des Hammers in Verformungsarbeit und schließlich in innere Energie umgewandelt. Die Hälfte landet im Nagel.
  ---
  **a)** $E_\text{kin} = \tfrac12\cdot 0{,}50\,\text{kg}\cdot(6{,}0\,\text{m/s})^2 = 9{,}0\,\text{J}$.
  ---
  **Energie für den Nagel:** $20\cdot 0{,}5\cdot 9{,}0\,\text{J} = 90\,\text{J}$.
  ---
  **b)** $\Delta T = \dfrac{90\,\text{J}}{450\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}\cdot 0{,}020\,\text{kg}} = \dfrac{90\,\text{J}}{9{,}0\,\text{J/K}} = 10\,\text{K}$. Wer einen Nagel kräftig einschlägt, kann ihn danach tatsächlich warm fühlen. Wiederholen: [Kapitel 4: Energie](/lernen/physik1/arbeit-energie-impuls/energie).
```

## Prüfungsaufgaben

Diese Aufgaben sind im Stil der schriftlichen Prüfung: mehrere Teilaufgaben, die aufeinander aufbauen, mit einem
Sachzusammenhang. Jede Aufgabe nennt eine Richtzeit. Rechne zuerst ohne Hinweise. Schreib bei jeder Teilaufgabe den
Ansatz in Worten hin, so wie du es in der Prüfung tun würdest.

```aufgabe
id: p10-pruefung-tee
titel: Teewasser mit dem Tauchsieder
niveau: 3
lernziel: 4
kompetenz: anwenden
punkte: 9
angabe: |
  Richtzeit: etwa 15 Minuten.

  Ein Tauchsieder mit $1500\,\text{W}$ erwärmt $0{,}25\,\text{L}$ Wasser von $20\,^\circ\text{C}$. Wärmeverluste werden vernachlässigt.

  a) Wie lange dauert es bis zum Sieden? Runde auf eine Nachkommastelle.

  b) Man vergisst den Tauchsieder. Wie lange dauert es zusätzlich, bis $10\,\%$ des Wassers verdampft sind ($q_v = 2257\,\text{kJ/kg}$)?

  c) Der Tee ist inzwischen auf $90\,^\circ\text{C}$ abgekühlt, es sind noch $225\,\text{g}$. Man gießt $50\,\text{g}$ Milch mit $5\,^\circ\text{C}$ dazu ($c$ wie Wasser). Welche Temperatur hat der Tee danach?
teile:
  - typ: zahl
    label: a) Zeit bis zum Sieden
    loesung: "4190*0.25*80/1500"
    einheit: "s"
    anzeige: '55{,}9'
    toleranz: 0.1
  - typ: zahl
    label: b) zusätzliche Zeit
    loesung: "0.025*2257000/1500"
    einheit: "s"
    anzeige: '37{,}6'
    toleranz: 0.1
  - typ: zahl
    label: c) Mischungstemperatur
    loesung: "(0.225*90+0.05*5)/0.275"
    einheit: "°C"
    anzeige: '74{,}5'
    toleranz: 0.1
hinweise:
  - 'a) $Q = c\,m\,\Delta T$, dann $t = Q/P$.'
  - 'b) $10\,\%$ von $250\,\text{g}$ sind $25\,\text{g}$, und $Q = q_v\,m$.'
  - c) Gleicher Stoff, also das mit den Massen gewichtete Mittel.
loesung: |
  **a) Ansatz:** Das Wasser wird ohne Phasenübergang von $20$ auf $100\,^\circ\text{C}$ erwärmt. $Q = 4190\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}\cdot 0{,}25\,\text{kg}\cdot 80\,\text{K} = 83\,800\,\text{J}$. Dann $t = Q/P = 83\,800\,\text{J}/1500\,\text{W} = 55{,}9\,\text{s}$.
  ---
  **b) Ansatz:** Jetzt siedet das Wasser, die Temperatur bleibt bei $100\,^\circ\text{C}$. Es verdampfen $m = 0{,}10\cdot 0{,}25\,\text{kg} = 0{,}025\,\text{kg}$. $Q = 2\,257\,000\,\tfrac{\text{J}}{\text{kg}}\cdot 0{,}025\,\text{kg} = 56\,425\,\text{J}$, also $t = 56\,425\,\text{J}/1500\,\text{W} = 37{,}6\,\text{s}$.
  ---
  **Deutung von b):** Nur $10\,\%$ zu verdampfen dauert schon zwei Drittel so lange wie das ganze Aufheizen. So groß ist die Verdampfungswärme.
  ---
  **c) Ansatz:** Tee und Milch sind beide wie Wasser, also kürzt sich $c$. $T_m = \dfrac{0{,}225\cdot 90 + 0{,}050\cdot 5}{0{,}275}\,^\circ\text{C} = \dfrac{20{,}5}{0{,}275}\,^\circ\text{C} = 74{,}5\,^\circ\text{C}$. Probe: Das liegt zwischen $5$ und $90$, nahe bei $90$, wie es bei der größeren Teemenge sein muss.
```

```aufgabe
id: p10-pruefung-gasflasche
titel: Heliumflasche für Luftballone
niveau: 3
lernziel: 7
kompetenz: modellieren
punkte: 9
angabe: |
  Richtzeit: etwa 15 Minuten.

  Eine Heliumflasche ($V = 10\,\text{L}$) ist bei $20\,^\circ\text{C}$ mit $150\,\text{bar}$ (absolut) gefüllt. Helium wird als ideales Gas behandelt.

  a) Wie viel Mol Helium enthält sie? Runde auf eine Nachkommastelle.

  b) Wie viele Ballone mit je $5{,}0\,\text{L}$ Volumen und $1{,}05\,\text{bar}$ Innendruck kann man bei $20\,^\circ\text{C}$ füllen? Beachte, dass die Flasche am Ende nicht leer ist, sondern noch $1{,}05\,\text{bar}$ enthält.

  c) Die volle Flasche steht in der Sonne und erwärmt sich auf $50\,^\circ\text{C}$. Welcher Druck herrscht dann? Runde auf ganze bar.
teile:
  - typ: zahl
    label: a) Stoffmenge
    loesung: "150e5*0.010/(8.314*293.15)"
    einheit: "mol"
    anzeige: '61{,}5'
    toleranz: 0.1
  - typ: zahl
    label: b) Anzahl Ballone (ganze Zahl)
    loesung: "floor((150*10/1.05-10)/5)"
    anzeige: '283'
  - typ: zahl
    label: c) Druck
    loesung: "150*(50+273.15)/(20+273.15)"
    einheit: "bar"
    anzeige: '165'
    toleranz: 0.5
hinweise:
  - 'a) $n = pV/(RT)$ in SI-Einheiten.'
  - 'b) Boyle-Mariotte: Welches Volumen hätte das ganze Gas bei $1{,}05\,\text{bar}$? Davon bleiben $10\,\text{L}$ in der Flasche.'
  - 'c) Das Volumen ist konstant, also Amontons.'
loesung: |
  **a) Ansatz:** Gesucht ist eine Stoffmenge, also $pV = nRT$ in SI: $n = \dfrac{1{,}5\cdot 10^{7}\,\text{Pa}\cdot 0{,}010\,\text{m}^3}{8{,}314\,\tfrac{\text{J}}{\text{mol}\cdot\text{K}}\cdot 293{,}15\,\text{K}} = 61{,}5\,\text{mol}$.
  ---
  **b) Ansatz:** Die Temperatur bleibt gleich, also Boyle-Mariotte. Bei $1{,}05\,\text{bar}$ nähme das ganze Gas $V = 10\,\text{L}\cdot\dfrac{150\,\text{bar}}{1{,}05\,\text{bar}} = 1429\,\text{L}$ ein. $10\,\text{L}$ bleiben in der Flasche, nutzbar sind $1419\,\text{L}$.
  ---
  **b) Ergebnis:** $1419\,\text{L}/5{,}0\,\text{L} = 283{,}7$. Es lassen sich **283** Ballone vollständig füllen. Man rundet ab, weil der letzte Ballon nicht mehr voll wird.
  ---
  **c) Ansatz:** Die Flasche ist starr, also Amontons: $p_2 = 150\,\text{bar}\cdot\dfrac{323{,}15\,\text{K}}{293{,}15\,\text{K}} = 165\,\text{bar}$. Druckgasflaschen dürfen deshalb nicht in der prallen Sonne stehen.
```

```aufgabe
id: p10-pruefung-eis-gas
titel: Wärme und Begriffe
niveau: 3
lernziel: 2
kompetenz: begruenden
punkte: 6
angabe: |
  Richtzeit: etwa 10 Minuten. Diese Aufgabe prüft das Verständnis, wie es auch in der mündlichen Prüfung gefragt wird.

  a) Erkläre den Unterschied zwischen Temperatur, innerer Energie und Wärme an einem selbst gewählten Beispiel.

  b) Warum bleibt die Temperatur eines Eis-Wasser-Gemisches bei Wärmezufuhr bei $0\,^\circ\text{C}$, solange noch Eis vorhanden ist?
teile:
  - typ: text
    label: a)
    muster: |
      Temperatur misst die mittlere kinetische Energie der ungeordneten Teilchenbewegung, also wie heftig sich ein Teilchen im
      Mittel bewegt. Innere Energie ist die gesamte Energie aller Teilchen eines Körpers, sie ist eine Zustandsgröße. Wärme
      ist Energie, die wegen eines Temperaturunterschieds von einem Körper auf einen anderen übertragen wird, sie ist eine
      Prozessgröße. Beispiel: Eine Badewanne mit 40 °C hat viel mehr innere Energie als eine glühende Nadel mit 800 °C, weil
      sie viel mehr Teilchen enthält. Die Nadel hat aber die höhere Temperatur. Wirft man sie ins Wasser, fließt Wärme von
      der Nadel zum Wasser, also von der höheren zur tieferen Temperatur, nicht von mehr zu weniger Energie.
  - typ: text
    label: b)
    muster: |
      Die zugeführte Wärme wird zum Aufbrechen der Bindungen im Eisgitter verwendet (Schmelzwärme 334 kJ/kg), nicht zur
      Erhöhung der mittleren kinetischen Energie der Teilchen. Die innere Energie steigt, die Temperatur bleibt gleich,
      bis alles Eis geschmolzen ist. Erst danach erhöht weitere Wärme die Temperatur.
hinweise:
  - 'Für a): Was ist eine Zustandsgröße, was eine Prozessgröße? Welche Größe ist ein Mittelwert, welche eine Summe?'
  - 'Für b): Wofür wird die Energie beim Schmelzen gebraucht?'
loesung: |
  **a) Begriffe:** Temperatur ist ein Mittelwert der Bewegungsenergie pro Teilchen. Innere Energie ist die Summe der Energien aller Teilchen (Zustandsgröße). Wärme ist übertragene Energie wegen eines Temperaturunterschieds (Prozessgröße).
  ---
  **a) Beispiel:** Badewanne gegen glühende Nadel. Die Wanne hat mehr innere Energie, die Nadel die höhere Temperatur. Wärme fließt von der Nadel ins Wasser. Die Richtung bestimmt die Temperatur, nicht die Energiemenge.
  ---
  **b)** Latente Wärme: Die Energie geht in die Phasenumwandlung, nicht in schnellere Teilchenbewegung. Die innere Energie steigt, die Temperatur bleibt bei $0\,^\circ\text{C}$.
```

```aufgabe
id: p10-pruefung-solarspeicher
titel: Ein Solarspeicher für Warmwasser
niveau: 3
lernziel: 5
kompetenz: modellieren
punkte: 10
angabe: |
  Richtzeit: etwa 20 Minuten.

  Ein Warmwasserspeicher enthält $300\,\text{L}$ Wasser. Er wird von einer Solaranlage mit $4{,}0\,\text{m}^2$ Kollektorfläche geheizt. Die Sonne liefert $700\,\text{W}$ pro Quadratmeter, die Anlage nutzt davon $50\,\%$.

  a) Wie viel Wärme braucht das Wasser, um von $15\,^\circ\text{C}$ auf $55\,^\circ\text{C}$ zu kommen? Gib das Ergebnis in kWh an und runde auf eine Nachkommastelle.

  b) Wie viele Stunden Sonnenschein braucht die Anlage dafür? Runde auf ganze Stunden.

  c) Der Speicher hat eine Oberfläche von $3{,}5\,\text{m}^2$ und ist mit $10\,\text{cm}$ Mineralwolle ($\lambda = 0{,}040\,\tfrac{\text{W}}{\text{m}\cdot\text{K}}$) gedämmt. Der Keller hat $20\,^\circ\text{C}$. Wie groß ist der Wärmeverlust bei $55\,^\circ\text{C}$ Wassertemperatur?

  d) Um wie viel Kelvin kühlt das Wasser an einem Tag ohne Sonne ab, wenn der Verlust aus c) ungefähr gleich bleibt? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    label: a) Wärme
    loesung: "4190*300*40/3.6e6"
    einheit: "kWh"
    anzeige: '14{,}0'
    toleranz: 0.05
  - typ: zahl
    label: b) Sonnenstunden
    loesung: "4190*300*40/(4.0*700*0.5)/3600"
    einheit: "h"
    anzeige: '10'
    toleranz: 0.1
  - typ: zahl
    label: c) Wärmeverlust
    loesung: "0.040*3.5*35/0.10"
    einheit: "W"
    anzeige: '49'
  - typ: zahl
    label: d) Abkühlung pro Tag
    loesung: "0.040*3.5*35/0.10*86400/(4190*300)"
    einheit: "K"
    anzeige: '3{,}4'
    toleranz: 0.05
hinweise:
  - 'a) $Q = c\,m\,\Delta T$ mit $m = 300\,\text{kg}$, dann in kWh umrechnen.'
  - 'b) Nutzleistung $= 0{,}50\cdot 4{,}0\,\text{m}^2\cdot 700\,\text{W/m}^2$, dann $t = Q/P$.'
  - 'c) $P = \lambda A\Delta T/d$ mit $\Delta T = 35\,\text{K}$.'
  - 'd) Energieverlust an einem Tag $= P\cdot 86\,400\,\text{s}$, dann $\Delta T = Q/(c\,m)$.'
loesung: |
  **a) Ansatz:** Erwärmen ohne Phasenübergang. $Q = 4190\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}\cdot 300\,\text{kg}\cdot 40\,\text{K} = 5{,}03\cdot 10^{7}\,\text{J}$. Geteilt durch $3{,}6\cdot 10^{6}\,\text{J/kWh}$ ergibt das $14{,}0\,\text{kWh}$.
  ---
  **b) Ansatz:** Nutzleistung $P = 0{,}50\cdot 4{,}0\,\text{m}^2\cdot 700\,\tfrac{\text{W}}{\text{m}^2} = 1400\,\text{W}$. Zeit $t = 5{,}03\cdot 10^{7}\,\text{J}/1400\,\text{W} = 35\,900\,\text{s} \approx 10\,\text{h}$. Das ist ein ganzer sonniger Sommertag.
  ---
  **c) Ansatz:** Wärmeleitung durch die Dämmung mit $\Delta T = 55 - 20 = 35\,\text{K}$ und $d = 0{,}10\,\text{m}$: $P = 0{,}040\,\tfrac{\text{W}}{\text{m}\cdot\text{K}}\cdot\dfrac{3{,}5\,\text{m}^2\cdot 35\,\text{K}}{0{,}10\,\text{m}} = 49\,\text{W}$.
  ---
  **d) Ansatz:** An einem Tag gehen $Q = 49\,\text{W}\cdot 86\,400\,\text{s} = 4{,}23\cdot 10^{6}\,\text{J}$ verloren. Das Wasser kühlt um $\Delta T = \dfrac{4{,}23\cdot 10^{6}\,\text{J}}{4190\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}\cdot 300\,\text{kg}} = 3{,}4\,\text{K}$ ab.
  ---
  **Plausibilität:** Ein gut gedämmter Speicher verliert pro Tag nur wenige Kelvin. Der Verlust wird beim Abkühlen sogar etwas kleiner, weil der Temperaturunterschied zum Keller sinkt.
```

```aufgabe
id: p10-pruefung-fahrradreifen
titel: Einen Fahrradreifen aufpumpen
niveau: 3
lernziel: 6
kompetenz: anwenden
punkte: 8
angabe: |
  Richtzeit: etwa 15 Minuten.

  Ein Fahrradschlauch hat ein Volumen von $2{,}0\,\text{L}$, das sich beim Aufpumpen kaum ändert. Am Anfang enthält er Luft mit $1{,}0\,\text{bar}$ (absolut). Eine Pumpe drückt bei jedem Hub $0{,}15\,\text{L}$ Außenluft ($1{,}0\,\text{bar}$) in den Schlauch. Die Temperatur bleibt beim Pumpen gleich ($15\,^\circ\text{C}$).

  a) Wie viele Hübe braucht man, bis im Schlauch $4{,}0\,\text{bar}$ (absolut) herrschen?

  b) Nach einer Fahrt in der Sonne hat die Luft im Schlauch $45\,^\circ\text{C}$. Welcher Überdruck wird jetzt angezeigt? Der äußere Luftdruck ist $1{,}0\,\text{bar}$. Runde auf zwei Nachkommastellen.

  c) Beim schnellen Pumpen wird die Pumpe warm. Erkläre das mit der inneren Energie.
teile:
  - typ: zahl
    label: a) Anzahl Hübe
    loesung: "2.0*(4.0-1.0)/(1.0*0.15)"
    anzeige: '40'
  - typ: zahl
    label: b) Überdruck
    loesung: "4.0*(45+273.15)/(15+273.15) - 1.0"
    einheit: "bar"
    anzeige: '3{,}42'
    toleranz: 0.01
  - typ: text
    label: c)
    muster: |
      Beim Pumpen verrichtet man Arbeit an der Luft: Der Kolben drückt die Luft zusammen. Die Teilchen, die gegen den
      entgegenkommenden Kolben prallen, werden schneller. Dadurch steigen die innere Energie und die Temperatur der Luft.
      Weil das schnell geschieht, bleibt kaum Zeit, die Wärme an die Umgebung abzugeben. Die warme Luft erwärmt dann die
      Pumpe. Dazu kommt Reibung zwischen Kolben und Zylinder.
hinweise:
  - 'a) Wie viel Luft bei $1{,}0\,\text{bar}$ muss zusätzlich in den Schlauch, damit $4{,}0\,\text{bar}$ in $2{,}0\,\text{L}$ herrschen? Boyle-Mariotte.'
  - 'b) Amontons mit Kelvin, dann den Luftdruck abziehen.'
  - 'c) Wie kann man die innere Energie eines Gases außer durch Wärme noch erhöhen?'
loesung: |
  **a) Ansatz:** Bei $4{,}0\,\text{bar}$ in $2{,}0\,\text{L}$ ist so viel Luft im Schlauch, wie bei $1{,}0\,\text{bar}$ in $2{,}0\cdot 4{,}0 = 8{,}0\,\text{L}$ passen würde (Boyle-Mariotte). $2{,}0\,\text{L}$ davon sind schon drin. Es fehlen $6{,}0\,\text{L}$ Außenluft. Das sind $6{,}0/0{,}15 = 40$ Hübe.
  ---
  **b) Ansatz:** Volumen konstant, also Amontons mit Absolutdruck und Kelvin: $p_2 = 4{,}0\,\text{bar}\cdot\dfrac{318{,}15\,\text{K}}{288{,}15\,\text{K}} = 4{,}42\,\text{bar}$ absolut. Der Überdruck ist $4{,}42 - 1{,}0 = 3{,}42\,\text{bar}$.
  ---
  **c)** Die innere Energie lässt sich durch Wärme **oder** durch Arbeit erhöhen. Beim Pumpen verrichtet der Kolben Arbeit an der Luft. Die Teilchen prallen vom entgegenkommenden Kolben schneller zurück, also steigt ihre mittlere kinetische Energie und damit die Temperatur. Die warme Luft gibt Wärme an die Pumpe ab.
```

```aufgabe
id: p10-pruefung-schmied
titel: Ein Hufeisen wird abgeschreckt
niveau: 3
lernziel: 3
kompetenz: modellieren
punkte: 9
angabe: |
  Richtzeit: etwa 15 Minuten.

  Ein Schmied taucht ein glühendes Hufeisen aus Eisen ($0{,}60\,\text{kg}$, $650\,^\circ\text{C}$, $c = 450\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}$, $\alpha = 12\cdot 10^{-6}\,\text{K}^{-1}$) in einen Bottich mit $5{,}0\,\text{L}$ Wasser von $18\,^\circ\text{C}$.

  a) Welche Endtemperatur stellt sich ein, wenn man Verdampfen und Verluste vernachlässigt? Runde auf eine Nachkommastelle.

  b) Das Hufeisen ist $35\,\text{cm}$ lang. Um wie viele Millimeter wird es beim Abkühlen auf die Endtemperatur kürzer? Runde auf zwei Nachkommastellen.

  c) In Wirklichkeit zischt es, und ein Teil des Wassers verdampft. Schätze ab, wie viel Wasser höchstens verdampfen könnte. Nimm dazu an, dass die ganze Wärme, die das Eisen beim Abkühlen von $650\,^\circ\text{C}$ auf $100\,^\circ\text{C}$ abgibt, nur zum Verdampfen von Wasser mit $100\,^\circ\text{C}$ dient ($q_v = 2257\,\text{kJ/kg}$). Gib das Ergebnis in Gramm an.
teile:
  - typ: zahl
    label: a) Endtemperatur
    loesung: "(0.60*450*650+5.0*4190*18)/(0.60*450+5.0*4190)"
    einheit: "°C"
    anzeige: '26{,}0'
    toleranz: 0.1
  - typ: zahl
    label: b) Verkürzung
    loesung: "12e-6*0.35*(650-(0.60*450*650+5.0*4190*18)/(0.60*450+5.0*4190))*1000"
    einheit: "mm"
    anzeige: '2{,}62'
    toleranz: 0.01
  - typ: zahl
    label: c) verdampftes Wasser höchstens
    loesung: "0.60*450*550/2257000*1000"
    einheit: "g"
    anzeige: '66'
    toleranz: 0.5
hinweise:
  - 'a) Gewichteter Mittelwert mit den Wärmekapazitäten $c\,m$ von Eisen und Wasser.'
  - 'b) $\Delta l = \alpha\,l_0\,\Delta T$ mit $\Delta T = 650\,^\circ\text{C} - T_m$.'
  - 'c) $Q = c\,m\,(650 - 100)$ für das Eisen, dann $m_W = Q/q_v$.'
loesung: |
  **a) Ansatz:** Mischungsrechnung mit zwei Stoffen. Wärmekapazitäten: Eisen $0{,}60\cdot 450 = 270\,\text{J/K}$, Wasser $5{,}0\cdot 4190 = 20\,950\,\text{J/K}$. $T_m = \dfrac{270\cdot 650 + 20\,950\cdot 18}{270 + 20\,950}\,^\circ\text{C} = \dfrac{552\,600}{21\,220}\,^\circ\text{C} = 26{,}0\,^\circ\text{C}$.
  ---
  **b) Ansatz:** Längenausdehnung mit der Abkühlung $\Delta T = 650 - 26{,}0 = 624\,\text{K}$. $\Delta l = 12\cdot 10^{-6}\,\text{K}^{-1}\cdot 350\,\text{mm}\cdot 624\,\text{K} = 2{,}62\,\text{mm}$.
  ---
  **c) Ansatz:** Das Eisen gibt beim Abkühlen auf $100\,^\circ\text{C}$ ab: $Q = 450\cdot 0{,}60\cdot 550\,\text{J} = 148\,500\,\text{J}$. Damit verdampfen höchstens $m = 148\,500\,\text{J}/2\,257\,000\,\tfrac{\text{J}}{\text{kg}} = 0{,}066\,\text{kg} = 66\,\text{g}$.
  ---
  **Deutung:** In Wirklichkeit verdampft viel weniger, weil das meiste Wasser kalt bleibt und die Wärme aufnimmt. Die $66\,\text{g}$ sind eine obere Grenze. Sie zeigen aber, dass das Zischen nur einen kleinen Teil der $5\,\text{L}$ betrifft.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, ohne nachzusehen. Vergleiche dann mit der Zusammenfassung darunter.
antwort: |
  Zum Beispiel: (1) Temperatur ist die mittlere Bewegungsenergie pro Teilchen, innere Energie die Energie aller Teilchen
  zusammen, und Wärme ist Energie, die wegen eines Temperaturunterschieds fließt. (2) Wärmeaufgaben löst man mit einer
  Energiebilanz aus Abschnitten der Form $c\,m\,\Delta T$ und $q\,m$. (3) Für Gase gilt $pV = nRT$, und überall, wo die
  Temperatur allein als Faktor steht, muss sie in Kelvin eingesetzt werden.
```

:::zusammenfassung
- **Temperatur, innere Energie, Wärme:** Die Temperatur misst die mittlere Bewegungsenergie pro Teilchen und bestimmt,
  in welche Richtung Wärme fließt. Die innere Energie ist die Energie aller Teilchen zusammen (Zustandsgröße). Wärme
  ist Energie, die wegen eines Temperaturunterschieds übertragen wird (Prozessgröße). Die innere Energie ändert sich
  durch Wärme oder durch Arbeit.
- **Temperaturskalen:** $T = \vartheta + 273{,}15$. Der absolute Nullpunkt liegt bei $0\,\text{K} = -273{,}15\,^\circ\text{C}$.
  Wo die Temperatur als Differenz vorkommt, sind °C erlaubt. Wo sie allein steht, braucht man Kelvin.
- **Ausdehnung:** $\Delta l = \alpha\,l_0\,\Delta T$ und $\Delta V = \gamma\,V_0\,\Delta T$ mit $\gamma \approx 3\alpha$ für Festkörper.
  Wasser ist bei $4\,^\circ\text{C}$ am dichtesten, Eis schwimmt.
- **Wärmemengen:** $Q = c\,m\,\Delta T$ ohne Phasenübergang, $Q = q\,m$ beim Schmelzen oder Verdampfen. Mischungsaufgaben
  löst man mit „abgegeben gleich aufgenommen“. Die Mischungstemperatur ist ein mit $c\,m$ gewichteter Mittelwert.
- **Wärmetransport:** Leitung mit $P = \lambda A\Delta T/d$, Schichten hintereinander addieren ihre Widerstände.
  Konvektion trägt Wärme mit strömendem Stoff. Strahlung braucht kein Medium, $P = \varepsilon\sigma A(T^4 - T_U^4)$.
- **Gasgesetze:** Bei fester Gasmenge gilt $\tfrac{p_1V_1}{T_1} = \tfrac{p_2V_2}{T_2}$, mit den Sonderfällen Boyle-Mariotte,
  Gay-Lussac und Amontons. Immer Kelvin und Absolutdruck.
- **Zustandsgleichung:** $pV = nRT = Nk_BT$ in SI-Einheiten. Daraus folgen Stoffmenge, Masse ($m = nM$) und Dichte
  ($\rho = pM/(RT)$).
- **Kinetische Gastheorie:** Der Druck entsteht durch Teilchenstöße. Es gilt $\tfrac12 m\overline{v^2} = \tfrac32 k_BT$ und
  $v_\text{rms} = \sqrt{3RT/M}$.
:::

### Die häufigsten Fehler

Jeder Fehler wird von einer Aufgabe in diesem Kapitel gezielt trainiert. Wenn du einen davon bei dir wiedererkennst,
rechne die genannte Aufgabe noch einmal.

1. **Celsius statt Kelvin in Gasgesetzen, Strahlung oder Teilchengeschwindigkeit.** Training: „Luftballon am Heizkörper“,
   „Strahlungsleistung eines Kachelofens“ und „Wie schnell sind Luftmoleküle?“.
2. **Die absolute Temperatur statt der Temperaturänderung in $Q = c\,m\,\Delta T$.** Training: „Nudelwasser zum Kochen
   bringen“.
3. **Wärme als Vorrat oder Kälte als Stoff behandeln.** Training: „Welche Sätze sind physikalisch richtig?“ und
   „Mach die Tür zu, die Kälte kommt herein!“.
4. **Hohe Temperatur mit viel Energie verwechseln.** Training: „Die Funken der Wunderkerze“ und „Temperatur oder innere
   Energie?“.
5. **In der Mischungsrechnung beide Differenzen in dieselbe Richtung bilden.** Training: „Fehler finden in einer
   Mischungsrechnung“.
6. **Bei verschiedenen Stoffen nur mit den Massen mitteln.** Training: „Glühendes Eisen im Wasser“.
7. **Die Schmelzwärme vergessen oder nicht prüfen, ob das Eis ganz schmilzt.** Training: „Eiswürfel im Getränk“ und
   „Kaltes Eis in wenig Wasser“.
8. **„Eis hat immer 0 °C.“** Training: „Welche Temperatur hat Eis?“.
9. **Das Loch im Ring wird beim Erwärmen kleiner.** Training: „Wird das Loch größer oder kleiner?“.
10. **Dicke in Zentimetern oder Wärmeströme von Schichten addieren.** Training: „Wärmeverlust durch eine Dämmung“ und
    „Holzwand mit Dämmung“.
11. **Kleidung erzeuge Wärme oder sei vor allem Strahlungsschutz.** Training: „Wärmt ein Pullover?“ und
    „Wärmeabstrahlung des Menschen“.
12. **Überdruck statt Absolutdruck.** Training: „Einen Fahrradreifen aufpumpen“ und „Luft anhalten beim Auftauchen“.
13. **bar, Liter oder g/mol in $pV = nRT$ einsetzen.** Training: „Sauerstoffflasche“ und „Die Dichte von Helium“.
14. **Doppelte Temperatur für doppelte Teilchengeschwindigkeit halten.** Training: „Doppelte Geschwindigkeit“.

### Lernziel-Selbstcheck

Schätze für jedes Lernziel ein, wie sicher du bist: **1** heißt „noch unsicher“, **2** „mit Nachsehen“, **3** „sicher,
auch in der Prüfung“. Bei einer 1 wiederhole den Abschnitt und rechne seine Aufgabe auf Niveau 3.

1. Temperaturen umrechnen, das thermische Gleichgewicht und den absoluten Nullpunkt erklären.
2. Längen- und Volumenausdehnung berechnen, die Anomalie des Wassers erklären.
3. Temperatur, innere Energie und Wärme unterscheiden, Arbeit und Wärme als Wege der Energieübertragung nennen.
4. Mit $Q = c\,m\,\Delta T$ rechnen und Mischungsaufgaben lösen, auch mit Kalorimeter.
5. Schmelz- und Verdampfungswärme einbeziehen und Erwärmungskurven lesen.
6. Die drei Wege des Wärmetransports unterscheiden und Wärmeströme berechnen.
7. Die Gasgesetze mit Kelvin und Absolutdruck anwenden.
8. Mit $pV = nRT$ Stoffmengen, Massen und Dichten berechnen.
9. Druck und Temperatur mit der kinetischen Gastheorie deuten.

## Mündliche Prüfung

Die folgenden Karten enthalten typische Fragen aus der mündlichen Prüfung. Beantworte jede Frage zuerst laut in ganzen
Sätzen und vergleiche dann mit der Musterantwort und den Kernpunkten.

```karten
- id: p10-k-temperatur
  frage: Was ist Temperatur, und wie misst man sie?
  antwort: |
    Die Temperatur ist ein Maß für die mittlere kinetische Energie der ungeordneten Teilchenbewegung. Man misst sie mit
    Thermometern, die eine temperaturabhängige Eigenschaft nutzen, etwa die Ausdehnung einer Flüssigkeit, die Krümmung
    eines Bimetalls, den elektrischen Widerstand oder die Wärmestrahlung. Das Thermometer zeigt seine eigene Temperatur.
    Deshalb muss es im thermischen Gleichgewicht mit dem Körper sein. Dass das funktioniert, sagt der nullte Hauptsatz.
  kernpunkte: ["mittlere kinetische Energie der Teilchen", "temperaturabhängige Eigenschaft", "thermisches Gleichgewicht, nullter Hauptsatz"]
- id: p10-k-nullpunkt
  frage: Was ist der absolute Nullpunkt, und wie kommt man auf −273,15 °C?
  antwort: |
    Misst man den Druck eines Gases bei konstantem Volumen und verschiedenen Temperaturen, liegen die Werte auf einer
    Geraden. Verlängert man sie, erreicht der Druck bei $-273{,}15\,^\circ\text{C}$ den Wert null. Tiefer kann die
    Temperatur nicht sinken, dort käme die Teilchenbewegung klassisch zum Stillstand. Die Kelvin-Skala beginnt dort und hat
    dieselbe Schrittweite wie Celsius: $T = \vartheta + 273{,}15$.
  kernpunkte: ["p(ϑ) bei konstantem Volumen linear", "Extrapolation auf p = 0", "Kelvin-Skala, T = ϑ + 273,15"]
- id: p10-k-begriffe
  frage: Unterscheide Temperatur, innere Energie und Wärme an einem Beispiel.
  antwort: |
    Die Temperatur misst die mittlere Bewegungsenergie pro Teilchen. Die innere Energie ist die Summe der Energien aller
    Teilchen, eine Zustandsgröße. Wärme ist Energie, die wegen eines Temperaturunterschieds übertragen wird, eine
    Prozessgröße. Ein Körper hat innere Energie, aber keine Wärme. Beispiel: Eine Badewanne mit $40\,^\circ\text{C}$ hat viel
    mehr innere Energie als eine glühende Nadel. Trotzdem fließt Wärme von der Nadel ins Wasser, weil die Nadel heißer ist.
  kernpunkte: ["Temperatur ist ein Mittelwert pro Teilchen", "innere Energie ist eine Summe, Zustandsgröße", "Wärme ist übertragene Energie, Prozessgröße", "Beispiel mit Richtung des Wärmeflusses"]
- id: p10-k-arbeit-waerme
  frage: Auf welchen Wegen kann man die innere Energie eines Körpers ändern? Was zeigte Joules Versuch?
  antwort: |
    Durch Wärme, wenn ein wärmerer Körper Energie abgibt, und durch Arbeit, etwa durch Reiben, Rühren oder Zusammendrücken.
    Joule ließ ein fallendes Gewicht ein Schaufelrad im Wasser antreiben. Er fand, dass eine bestimmte Arbeit immer dieselbe
    Erwärmung bewirkt, für $1\,\text{kg}$ Wasser und $1\,\text{K}$ rund $4190\,\text{J}$. Wärme und Arbeit sind also zwei Formen
    der Energieübertragung. Das ist der Kern des ersten Hauptsatzes $\Delta U = Q + W$ aus Kapitel 11.
  kernpunkte: ["Wärme oder Arbeit", "Joules Schaufelradversuch", "Verbindung zu Kapitel 4 und zum ersten Hauptsatz"]
- id: p10-k-anomalie
  frage: Erkläre die Anomalie des Wassers und ihre Folgen.
  antwort: |
    Wasser hat seine größte Dichte bei $4\,^\circ\text{C}$ und dehnt sich beim Gefrieren um etwa $9\,\%$ aus, weil die
    Wasserstoffbrücken im Eis ein offenes Gitter bilden. Folgen: Eis schwimmt, Seen frieren von oben zu und haben am Grund
    etwa $4\,^\circ\text{C}$, sodass Fische überleben. Frost sprengt Gestein und Wasserleitungen.
  kernpunkte: ["größte Dichte bei 4 °C", "Eis weniger dicht, offenes Gitter", "Seen frieren von oben, Frostsprengung"]
- id: p10-k-loch
  frage: Ein Metallring wird erwärmt. Wird das Loch größer oder kleiner? Begründe.
  antwort: |
    Das Loch wird größer. Man denkt sich das Loch mit dem passenden Metallstück gefüllt. Beim Erwärmen wird jedes Stück
    der vollen Scheibe größer, auch das innere. Der Ring muss also mitwachsen. Jeder Abstand im Material wächst um
    denselben Bruchteil $\alpha\,\Delta T$, auch der Durchmesser des Lochs. Darauf beruht das Aufschrumpfen von Zahnkränzen.
  kernpunkte: ["Loch wird größer", "Gedankenexperiment mit gefülltem Loch", "alle Abstände wachsen mit αΔT"]
- id: p10-k-waermekapazitaet
  frage: Was ist die spezifische Wärmekapazität, und warum ist die große Wärmekapazität des Wassers so wichtig?
  antwort: |
    Sie gibt an, wie viel Wärme $1\,\text{kg}$ eines Stoffes für $1\,\text{K}$ Erwärmung braucht, $c = Q/(m\,\Delta T)$. Wasser
    hat mit $4190\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}$ einen besonders großen Wert. Deshalb ist es ein gutes Kühl- und
    Heizmittel, Meere gleichen das Klima aus, und unsere Körpertemperatur steigt bei Anstrengung nur langsam.
  kernpunkte: ["Q = c·m·ΔT", "Wasser 4190 J/(kg·K)", "Kühlmittel, Küstenklima"]
- id: p10-k-mischung
  frage: Wie löst man eine Mischungsaufgabe, und was ist dabei zu beachten?
  antwort: |
    Mit der Energiebilanz: Was der heiße Körper abgibt, nimmt der kalte auf, $c_1m_1(T_1 - T_m) = c_2m_2(T_m - T_2)$. Jede
    Differenz wird positiv gebildet. Die Mischungstemperatur ist ein mit $c\,m$ gewichteter Mittelwert. Bei einem Kalorimeter
    nimmt auch das Gefäß Wärme auf, sein Wasserwert kommt dazu. Bei Eis muss man die Schmelzwärme einbeziehen und prüfen,
    ob die Wärme zum Schmelzen reicht.
  kernpunkte: ["abgegeben gleich aufgenommen", "gewichteter Mittelwert mit c·m", "Gefäß und Schmelzwärme beachten"]
- id: p10-k-latent
  frage: Was ist latente Wärme, und warum kühlt Schwitzen?
  antwort: |
    Latente Wärme wird bei einem Phasenübergang aufgenommen oder abgegeben, ohne dass sich die Temperatur ändert. Sie löst
    die Bindungen zwischen den Teilchen. Für Wasser sind es $334\,\text{kJ/kg}$ beim Schmelzen und $2257\,\text{kJ/kg}$ beim
    Verdampfen. Beim Verdunsten verlassen die schnellsten Teilchen die Flüssigkeit. Die mittlere Energie der
    zurückbleibenden sinkt, also auch die Temperatur. So kühlt Schweiß die Haut.
  kernpunkte: ["Phasenübergang ohne Temperaturänderung", "334 und 2257 kJ/kg", "die schnellsten Teilchen verdunsten"]
- id: p10-k-sieden
  frage: Warum kocht Wasser auf einem hohen Berg schon unter 100 °C?
  antwort: |
    Eine Flüssigkeit siedet, wenn ihr Dampfdruck den äußeren Druck erreicht. In der Höhe ist der Luftdruck kleiner, also
    wird dieser Dampfdruck schon bei tieferer Temperatur erreicht. Auf dem Großglockner siedet Wasser bei etwa
    $87\,^\circ\text{C}$. Im Schnellkochtopf ist der Druck höher, dort siedet Wasser bei etwa $120\,^\circ\text{C}$.
  kernpunkte: ["Sieden: Dampfdruck gleich äußerer Druck", "kleinerer Luftdruck in der Höhe", "Gegenbeispiel Schnellkochtopf"]
- id: p10-k-transport
  frage: Welche Arten des Wärmetransports gibt es? Nenne je ein Beispiel.
  antwort: |
    Wärmeleitung gibt Energie durch Stöße weiter, ohne dass Stoff wandert, zum Beispiel im Löffel im Tee. Metalle leiten
    gut, ruhende Luft schlecht. Konvektion trägt Wärme mit strömendem Gas oder strömender Flüssigkeit, angetrieben durch
    Dichteunterschiede, zum Beispiel am Heizkörper. Wärmestrahlung ist elektromagnetische Strahlung, braucht kein Medium
    und wächst mit $T^4$, zum Beispiel die Sonne.
  kernpunkte: ["Leitung ohne Stofftransport", "Konvektion mit Strömung", "Strahlung ohne Medium, P ∝ T⁴"]
- id: p10-k-kleidung
  frage: Warum hält ein Pullover warm, obwohl er selbst keine Wärme erzeugt?
  antwort: |
    Ein Pullover ist eine Dämmung. Zwischen seinen Fasern ist ruhende Luft eingeschlossen, die Wärme sehr schlecht leitet
    und nicht strömen kann. So bremst er Leitung und Konvektion. Die Strahlung sinkt nur nebenbei, weil seine Außenseite
    kühler ist als die Haut. Ein Thermometer, das man im Zimmer in einen Pullover wickelt, zeigt deshalb einfach
    Zimmertemperatur. Nasse Kleidung wärmt kaum, weil Wasser die Luft verdrängt.
  kernpunkte: ["erzeugt keine Wärme", "ruhende Luft bremst Leitung und Konvektion", "kein Strahlungsschutz in erster Linie"]
- id: p10-k-gasgesetze
  frage: Nenne die drei Gasgesetze. Warum muss man dabei mit Kelvin und Absolutdruck rechnen?
  antwort: |
    Boyle-Mariotte: Bei konstanter Temperatur ist $pV$ konstant. Gay-Lussac: Bei konstantem Druck ist $V/T$ konstant.
    Amontons: Bei konstantem Volumen ist $p/T$ konstant. Es sind Proportionalitäten, und die gelten nur für Größen mit
    echtem Nullpunkt. Absolutdruck null heißt keine Stöße, null Kelvin heißt keine Teilchenbewegung. Mit Celsius oder
    Überdruck würden falsche Ergebnisse herauskommen.
  kernpunkte: ["pV, V/T, p/T jeweils konstant", "Proportionalität braucht echten Nullpunkt", "Kelvin und Absolutdruck"]
- id: p10-k-zustandsgleichung
  frage: Wie lautet die Zustandsgleichung des idealen Gases, und was ist ein ideales Gas?
  antwort: |
    $pV = nRT$ oder $pV = Nk_BT$, mit $R = 8{,}314\,\tfrac{\text{J}}{\text{mol}\cdot\text{K}}$ und allen Größen in SI. Ein ideales
    Gas besteht aus punktförmigen Teilchen, die außer bei elastischen Stößen keine Kräfte aufeinander ausüben. Reale Gase
    verhalten sich bei niedrigem Druck und hoher Temperatur nahezu ideal. Bei hohem Druck zählt das Eigenvolumen, bei
    tiefer Temperatur die Anziehung. Ein Mol jedes idealen Gases nimmt bei $0\,^\circ\text{C}$ und $1013\,\text{hPa}$ etwa
    $22{,}4\,\text{L}$ ein.
  kernpunkte: ["pV = nRT in SI", "Modellannahmen", "Grenzen bei hohem Druck und tiefer Temperatur", "molares Volumen 22,4 L"]
- id: p10-k-kinetisch
  frage: Was sagt die kinetische Gastheorie über Druck und Temperatur?
  antwort: |
    Der Druck entsteht durch die Stöße der Teilchen auf die Wand: $p = \tfrac13\tfrac{N}{V}m\overline{v^2}$. Vergleicht man
    das mit $pV = Nk_BT$, folgt $\tfrac12 m\overline{v^2} = \tfrac32 k_BT$. Die absolute Temperatur ist also direkt ein Maß
    für die mittlere kinetische Energie eines Teilchens, unabhängig von seiner Masse. Leichte Teilchen sind bei gleicher
    Temperatur schneller, $v_\text{rms} = \sqrt{3RT/M}$.
  kernpunkte: ["Druck aus Impulsübertrag bei Stößen", "½mv² = 3/2 kT", "v_rms = √(3RT/M), leichte Teilchen schneller"]
- id: p10-k-heissluftballon
  frage: Warum steigt ein Heißluftballon auf? Verbinde dabei die Zustandsgleichung mit dem Auftrieb aus Kapitel 9.
  antwort: |
    Nach Archimedes erfährt der Ballon einen Auftrieb gleich dem Gewicht der verdrängten kalten Außenluft. Die Dichte eines
    Gases ist $\rho = pM/(RT)$, sie sinkt bei gleichem Druck mit steigender Temperatur. Die heiße Luft im Ballon ist deshalb
    leichter als die gleiche Menge Außenluft. Der Unterschied trägt Hülle, Korb und Passagiere. Je heißer die Füllung,
    desto mehr kann er tragen.
  kernpunkte: ["Auftrieb gleich Gewicht der verdrängten Luft", "ρ = pM/(RT) sinkt mit T", "Differenz trägt die Last"]
```
