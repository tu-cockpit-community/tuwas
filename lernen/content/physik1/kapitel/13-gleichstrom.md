---
nummer: 13
titel: "Gleichstrom: Ohm, Kirchhoff, Leistung, Messgeräte, Leiter und Halbleiter"
kurz: Strom, Spannung und Widerstand, Ohmsches Gesetz, Kirchhoffsche Regeln, Reihen- und Parallelschaltung, elektrische Arbeit und Leistung, Innenwiderstand, Messgeräte, Leiter und Halbleiter bis zu Diode, LED, Solarzelle und Transistor.
teil: elektrizitaet
stunden: 11
pruefungsgewicht: 3
voraussetzungen:
  - groessen-einheiten-messen
  - arbeit-energie-impuls
  - temperatur-waerme-gase
  - elektrostatik
lernziele:
  - die Stromstärke als Ladung pro Zeit berechnen, auch aus einem I-t-Diagramm, und die technische Stromrichtung von der Bewegung der Elektronen unterscheiden
  - begründen, warum der Strom im geschlossenen Stromkreis nicht verbraucht wird, und die Spannung als Potentialdifferenz zwischen zwei Punkten eines Stromkreises bestimmen
  - das Ohmsche Gesetz anwenden, Kennlinien messen und auswerten und ohmsche von nicht-ohmschen Bauteilen unterscheiden
  - den Widerstand eines Drahtes aus Länge, Querschnitt und spezifischem Widerstand berechnen und seine Änderung mit der Temperatur bestimmen
  - mit Knotenregel und Maschenregel Ströme und Spannungen in Reihen- und Parallelschaltungen berechnen und beide Schaltungsarten vergleichen
  - gemischte Schaltungen, belastete Spannungsteiler, die Wheatstone-Brücke und Netzwerke mit zwei Quellen berechnen
  - elektrische Arbeit, Leistung, Energiekosten und Wirkungsgrad berechnen und die Schutzmaßnahmen im Haushalt erklären
  - Quellenspannung, Klemmenspannung und Innenwiderstand unterscheiden und berechnen und die Leistungsanpassung begründen
  - Strommesser und Spannungsmesser richtig einschalten, ihren Einfluss und ihre Messunsicherheit abschätzen und ihren Messbereich erweitern
  - den Ladungstransport in Metallen, Elektrolyten, Gasen und Halbleitern mit dem Bändermodell erklären und Dotierung, pn-Übergang, Diode, LED, Solarzelle und Transistor beschreiben
---

In der [Elektrostatik](/lernen/physik1/elektrostatik) waren die Ladungen in Ruhe. In diesem Kapitel bewegen
sie sich: Es fließt **Strom**. Gleichstrom heißt, dass die Ladungen immer in dieselbe Richtung fließen,
so wie aus einer Batterie oder einem Handy-Ladegerät. Fast alles, was du in diesem Kapitel lernst,
gilt später auch für den Wechselstrom aus der Steckdose
([Kapitel 14](/lernen/physik1/magnetismus-wechselstrom)).

**Was kommt in der Prüfung?** In der schriftlichen Prüfung sind vier Aufgabentypen typisch:

1. Eine **Schaltung** mit drei oder vier Widerständen. Gesucht sind Ersatzwiderstand, Teilströme,
   Teilspannungen und Leistungen.
2. **Haushaltsrechnungen:** Strom und Widerstand eines Geräts, Energiekosten in Kilowattstunden, ob eine
   Sicherung auslöst.
3. Der **Innenwiderstand** einer Batterie: Warum sinkt die Spannung, wenn man sie belastet?
4. **Messgeräte:** Wie schaltet man sie ein, und wie erweitert man ihren Messbereich?

In der mündlichen Prüfung sind die **Halbleiter** beliebt. Warum leitet ein Halbleiter bei Wärme besser?
Was passiert am pn-Übergang? Wie funktioniert eine Solarzelle? Dort musst du ein Modell in eigenen
Worten erklären.

**Die drei großen Hürden.** Drei Gedanken machen fast allen Lernenden Mühe. Jeder bekommt deshalb viel Platz.

- **„Der Strom wird in der Lampe verbraucht.“** Das stimmt nicht. Durch die Lampe fließt hinten genauso
  viel Ladung heraus, wie vorne hineinfließt. Umgewandelt wird nur Energie. Das klärt die Lektion
  [13.2 Der Stromkreis: Strom wird nicht verbraucht](/lernen/physik1/gleichstrom/der-stromkreis-strom-wird-nicht-verbraucht).
- **Spannung als Potentialdifferenz.** Eine Spannung liegt immer **zwischen zwei Punkten**. Sie ist der
  Unterschied ihrer Potentiale, genau wie in der Lektion
  [Kapitel 12, Feldstärke, Spannung und Potential im homogenen Feld](/lernen/physik1/elektrostatik/feldstaerke-spannung-und-potential-im-homogenen-feld).
  Wir nutzen diesen Gedanken im ganzen Kapitel.
- **Reihe oder parallel?** In der Reihenschaltung ist der Strom überall gleich, in der Parallelschaltung
  die Spannung. Das klärt die Lektion
  [13.6 Reihenschaltung und Parallelschaltung](/lernen/physik1/gleichstrom/reihenschaltung-und-parallelschaltung).

:::anwendung
Für dich als angehenden Informatiker ist dieses Kapitel besonders dankbar. Am Ende steht der
**Transistor** als Schalter, das Grundbauteil jedes Prozessors. Ein moderner Chip enthält Milliarden
davon. Jeder einzelne funktioniert nach den Regeln, die du hier lernst. Auch Spannungsteiler,
Vorwiderstände für Leuchtdioden und das Rechnen mit Akkus in Milliamperestunden begegnen dir bei jedem
Bastelprojekt mit einem Mikrocontroller.
:::

:::vorwissen
Für dieses Kapitel brauchst du aus früheren Kapiteln:

- Vorsilben und Zehnerpotenzen wie Milli, Mikro und Kilo ([Kapitel 1, Vorsilben, Zehnerpotenzen und Umrechnen](/lernen/physik1/groessen-einheiten-messen/vorsilben-zehnerpotenzen-und-umrechnen)).
- Arbeit, Energie, Leistung und Wirkungsgrad ([Kapitel 4, Leistung und Wirkungsgrad](/lernen/physik1/arbeit-energie-impuls/leistung-und-wirkungsgrad)).
- Ladung, Elementarladung, Potential und Spannung ([Kapitel 12, Elektrische Ladung und Elementarladung](/lernen/physik1/elektrostatik/elektrische-ladung-und-elementarladung) und [Feldstärke, Spannung und Potential im homogenen Feld](/lernen/physik1/elektrostatik/feldstaerke-spannung-und-potential-im-homogenen-feld)).
- Bruchrechnen mit Kehrwerten ([Mathematik, Bruchrechnen](/lernen/mathe3/zahlen/bruchrechnen)).
- Die Steigung einer Geraden ([Mathematik, Lineare Funktionen](/lernen/mathe3/funktionen/lineare-funktionen)).
:::

### Eingangsdiagnose: Bist du startklar?

Die folgenden kurzen Fragen prüfen dein Vorwissen. Wenn eine Frage danebengeht, lies den verlinkten
Abschnitt noch einmal, bevor du weitermachst. Das spart dir später viel Zeit.

```aufgabe
id: p13-ein-elementarladung
art: check
titel: Ladung in Elementarladungen
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Ein Körper trägt die Ladung $Q = 1{,}0\,\text{C}$ in Form von Elektronen. Wie viele Elektronen sind das? Gib die Zahl vor $10^{18}$ an ($e = 1{,}602\cdot 10^{-19}\,\text{C}$).

  Herkunft: [Kapitel 12, Elektrische Ladung und Elementarladung](/lernen/physik1/elektrostatik/elektrische-ladung-und-elementarladung)
teile:
  - typ: zahl
    label: Zahl vor 10¹⁸
    loesung: "1.0/1.602e-19/1e18"
    anzeige: '6{,}24'
    fehler:
      - wert: "1.0*1.602e-19/1e18"
        meldung: |
          Du hast mit $e$ multipliziert. Gesucht ist, **wie oft** die kleine Ladung $e$ in $1\,\text{C}$ hineinpasst. Dafür teilt man: $N = Q/e$.
hinweise:
  - 'Jedes Elektron trägt die Ladung $e$. Also ist $Q = N\cdot e$.'
loesung: |
  Jedes Elektron trägt die Elementarladung $e$. Bei $N$ Elektronen ist $Q = N\cdot e$, also $N = Q/e$.
  ---
  $N = \dfrac{1{,}0\,\text{C}}{1{,}602\cdot 10^{-19}\,\text{C}} = 6{,}24\cdot 10^{18}$. Die Einheit Coulomb kürzt sich, $N$ ist eine reine Anzahl.
```

```aufgabe
id: p13-ein-potential
art: check
titel: Spannung aus zwei Potentialen
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Punkt A hat das Potential $\varphi_A = 9{,}0\,\text{V}$, Punkt B das Potential $\varphi_B = 3{,}0\,\text{V}$. Wie groß ist die Spannung $U_{AB}$ zwischen A und B (in V)?

  Herkunft: [Kapitel 12, Feldstärke, Spannung und Potential im homogenen Feld](/lernen/physik1/elektrostatik/feldstaerke-spannung-und-potential-im-homogenen-feld)
teile:
  - typ: zahl
    loesung: "9.0-3.0"
    einheit: "V"
    anzeige: '6{,}0'
    fehler:
      - wert: "9.0+3.0"
        meldung: |
          Die Spannung ist der **Unterschied** der beiden Potentiale, nicht ihre Summe. Denk an zwei Höhen: Der Höhenunterschied zwischen $9\,\text{m}$ und $3\,\text{m}$ ist $6\,\text{m}$.
      - wert: "9.0"
        meldung: |
          $9\,\text{V}$ ist das Potential des einzelnen Punktes A. Eine Spannung gehört aber immer zu **zwei** Punkten.
hinweise:
  - 'Spannung ist Potentialdifferenz: $U_{AB} = \varphi_A - \varphi_B$.'
loesung: |
  Die Spannung zwischen zwei Punkten ist der Unterschied ihrer Potentiale: $U_{AB} = \varphi_A - \varphi_B$.
  ---
  $U_{AB} = 9{,}0\,\text{V} - 3{,}0\,\text{V} = 6{,}0\,\text{V}$.
```

```aufgabe
id: p13-ein-energie-ladung
art: check
titel: Energie einer Ladung, die eine Spannung durchläuft
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Eine Ladung von $2{,}0\,\text{C}$ durchläuft die Spannung $6{,}0\,\text{V}$. Wie viel Energie gibt das Feld dabei an sie ab (in J)?

  Herkunft: [Kapitel 12, Feldstärke, Spannung und Potential im homogenen Feld](/lernen/physik1/elektrostatik/feldstaerke-spannung-und-potential-im-homogenen-feld)
teile:
  - typ: zahl
    loesung: "2.0*6.0"
    einheit: "J"
    anzeige: '12'
    fehler:
      - wert: "6.0/2.0"
        meldung: |
          Spannung ist Energie **pro** Ladung, $U = W/Q$. Stellst du nach $W$ um, musst du mit $Q$ multiplizieren, nicht durch $Q$ teilen.
hinweise:
  - 'Spannung ist Arbeit pro Ladung: $U = W/Q$. Stelle nach $W$ um.'
loesung: |
  Aus der Definition der Spannung $U = W/Q$ folgt durch Multiplizieren mit $Q$: $W = Q\cdot U$.
  ---
  $W = 2{,}0\,\text{C}\cdot 6{,}0\,\text{V} = 12\,\text{J}$, denn $1\,\text{C}\cdot 1\,\text{V} = 1\,\text{J}$.
```

```aufgabe
id: p13-ein-leistung
art: check
titel: Leistung als Arbeit pro Zeit
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Ein Motor verrichtet in $2{,}0$ Minuten die Arbeit $600\,\text{J}$. Wie groß ist seine Leistung (in W)?

  Herkunft: [Kapitel 4, Leistung und Wirkungsgrad](/lernen/physik1/arbeit-energie-impuls/leistung-und-wirkungsgrad)
teile:
  - typ: zahl
    loesung: "600/120"
    einheit: "W"
    anzeige: '5{,}0'
    fehler:
      - wert: "600/2"
        meldung: |
          Die Zeit muss in **Sekunden** stehen: $2{,}0\,\text{min} = 120\,\text{s}$. Sonst kommt Joule pro Minute heraus, und das ist kein Watt.
      - wert: "600*120"
        meldung: |
          Leistung ist Arbeit **pro** Zeit, also wird geteilt: $P = W/t$.
hinweise:
  - 'Leistung ist Arbeit pro Zeit, $P = W/t$, mit $t$ in Sekunden.'
loesung: |
  Leistung ist Arbeit pro Zeit: $P = W/t$. Die Zeit rechnen wir in Sekunden um: $2{,}0\,\text{min} = 120\,\text{s}$.
  ---
  $P = \dfrac{600\,\text{J}}{120\,\text{s}} = 5{,}0\,\text{W}$, denn $1\,\text{J/s} = 1\,\text{W}$.
```

```aufgabe
id: p13-ein-quadratmillimeter
art: check
titel: Quadratmillimeter in Quadratmeter
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Ein Kabel hat den Querschnitt $2{,}5\,\text{mm}^2$. Wie viele Quadratmeter sind das? Gib die Zahl vor $10^{-6}$ an: $2{,}5\,\text{mm}^2 = \;?\;\cdot 10^{-6}\,\text{m}^2$.

  Herkunft: [Kapitel 1, Vorsilben, Zehnerpotenzen und Umrechnen](/lernen/physik1/groessen-einheiten-messen/vorsilben-zehnerpotenzen-und-umrechnen)
teile:
  - typ: zahl
    label: Zahl vor 10⁻⁶
    loesung: "2.5e-6/1e-6"
    anzeige: '2{,}5'
    fehler:
      - wert: "2.5e-3/1e-6"
        meldung: |
          Du hast nur mit $10^{-3}$ umgerechnet, so wie bei Millimeter in Meter. Bei einer **Fläche** wird der Umrechnungsfaktor quadriert: $1\,\text{mm}^2 = (10^{-3}\,\text{m})^2 = 10^{-6}\,\text{m}^2$.
hinweise:
  - '$1\,\text{mm} = 10^{-3}\,\text{m}$. Eine Fläche ist Länge mal Länge, also wird der Faktor quadriert.'
loesung: |
  $1\,\text{mm} = 10^{-3}\,\text{m}$. Eine Fläche ist Länge mal Länge, also ist $1\,\text{mm}^2 = 10^{-3}\,\text{m}\cdot 10^{-3}\,\text{m} = 10^{-6}\,\text{m}^2$.
  ---
  $2{,}5\,\text{mm}^2 = 2{,}5\cdot 10^{-6}\,\text{m}^2$. Die Zahl vor $10^{-6}$ ist also $2{,}5$.
```

```aufgabe
id: p13-ein-kehrwert
art: check
titel: Summe von Kehrwerten
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Berechne $x$ aus $\dfrac{1}{x} = \dfrac{1}{6} + \dfrac{1}{3}$.

  Herkunft: [Mathematik, Bruchrechnen](/lernen/mathe3/zahlen/bruchrechnen)
teile:
  - typ: zahl
    loesung: "1/(1/6+1/3)"
    anzeige: '2'
    fehler:
      - wert: "1/6+1/3"
        meldung: |
          Das ist $\tfrac1x$, noch nicht $x$. Zum Schluss musst du den Kehrwert bilden.
      - wert: "9"
        meldung: |
          Du hast $6 + 3$ gerechnet. Brüche addiert man über einen gemeinsamen Nenner, nicht über die Nenner selbst.
hinweise:
  - 'Bringe beide Brüche auf den Nenner $6$ und addiere. Bilde am Ende den Kehrwert.'
loesung: |
  Gemeinsamer Nenner $6$: $\dfrac16 + \dfrac13 = \dfrac16 + \dfrac26 = \dfrac36 = \dfrac12$.
  ---
  Aus $\dfrac1x = \dfrac12$ folgt durch Kehrwertbilden $x = 2$. Genau so rechnet man später Widerstände in Parallelschaltung.
```

```aufgabe
id: p13-ein-steigung
art: check
titel: Steigung einer Ursprungsgeraden
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Eine Gerade geht durch den Ursprung und durch den Punkt $(4 \mid 2)$. Wie groß ist ihre Steigung $k$?

  Herkunft: [Mathematik, Lineare Funktionen](/lernen/mathe3/funktionen/lineare-funktionen)
teile:
  - typ: zahl
    loesung: "2/4"
    anzeige: '0{,}5'
    fehler:
      - wert: "4/2"
        meldung: |
          Steigung ist „Höhe durch Breite“, also $\Delta y / \Delta x$. Du hast $\Delta x / \Delta y$ gerechnet, den Kehrwert.
hinweise:
  - 'Steigung $k = \dfrac{\Delta y}{\Delta x}$, vom Ursprung zum Punkt gemessen.'
loesung: |
  Die Steigung ist der Höhenzuwachs pro Schritt nach rechts: $k = \dfrac{\Delta y}{\Delta x}$.
  ---
  Vom Ursprung zum Punkt $(4 \mid 2)$ ist $\Delta x = 4$ und $\Delta y = 2$, also $k = \dfrac{2}{4} = 0{,}5$.
```

## Elektrischer Strom: Ladung in Bewegung

```aufgabe
id: p13-1-check
art: check
titel: "Vorwissen: Was bewegt sich in einem Metall?"
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  In einem Kupferdraht können sich manche Teilchen frei bewegen. Welche sind das?

  Herkunft: [Kapitel 12, Influenz, Polarisation und Leiter im Feld](/lernen/physik1/elektrostatik/influenz-polarisation-und-leiter-im-feld)
teile:
  - typ: auswahl
    optionen:
      - "Einige Elektronen jedes Atoms, die sogenannten Leitungselektronen."
      - "Die Protonen in den Atomkernen."
      - "Ganze Kupferatome, die durch den Draht wandern."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Die Protonen sitzen fest in den Atomkernen, und die Kerne sind im Kristallgitter fest eingebaut. In einem festen Körper können sich nur Elektronen bewegen.
      - wert: 2
        meldung: |
          Die Atome bleiben an ihrem Platz im Kristallgitter. Sonst würde sich ein Draht beim Stromfluss ja auflösen. Beweglich sind nur einige ihrer Elektronen.
hinweise:
  - Was bleibt in einem festen Körper an seinem Platz, und was nicht?
loesung: |
  In einem Metall gibt jedes Atom ein oder zwei Elektronen ab. Diese **Leitungselektronen** können sich frei zwischen den Atomrümpfen bewegen.
  ---
  Atomkerne und ganze Atome bleiben im Kristallgitter an ihrem Platz. Deshalb tragen in Metallen allein die Elektronen den Strom.
```

Verbindest du die beiden Pole einer Batterie über einen Draht und eine Lampe, leuchtet die Lampe.
Im Draht passiert dabei Folgendes: Die Batterie hält zwischen ihren Polen eine **Spannung** aufrecht.
Diese Spannung erzeugt im Draht ein elektrisches Feld, wie du es aus
[Kapitel 12, Das elektrische Feld und Feldlinien](/lernen/physik1/elektrostatik/das-elektrische-feld-und-feldlinien)
kennst. Das Feld schiebt die Leitungselektronen in eine gemeinsame Richtung. Die Ladung kommt also in
Bewegung.

**Worum geht es in einem Satz?** Ein **elektrischer Strom** ist Ladung, die sich gemeinsam in eine
Richtung bewegt. Wie stark der Strom ist, misst man so: Man zählt, wie viel Ladung pro Sekunde durch
den Draht fließt.

Stell dir eine gedachte Zählfläche quer durch den Draht vor, wie eine Lichtschranke an einer
Rolltreppe. Fließen pro Sekunde viele Elektronen hindurch, ist der Strom stark. Fließen wenige
hindurch, ist er schwach.

:::definition[Elektrische Stromstärke]
Die **Stromstärke** $I$ ist die Ladung $\Delta Q$, die in der Zeit $\Delta t$ durch einen Querschnitt
des Leiters fließt, geteilt durch diese Zeit:
$$I = \frac{\Delta Q}{\Delta t}, \qquad [I] = \text{A}\ (\text{Ampere}), \qquad 1\,\text{A} = 1\,\frac{\text{C}}{\text{s}}.$$
Dabei ist $\Delta Q$ die Ladung in Coulomb und $\Delta t$ die Zeit in Sekunden. Das Zeichen $\Delta$
(sprich „Delta“) bedeutet „Änderung von“ oder „Menge in einem Zeitabschnitt“. Ist der Strom konstant,
gilt einfach $Q = I\cdot t$.
:::

Das Ampere ist eine der sieben SI-Basiseinheiten. Seit 2019 ist es über die Elementarladung festgelegt.
$1\,\text{A}$ heißt: Pro Sekunde fließen $1/(1{,}602\cdot 10^{-19}) \approx 6{,}24\cdot 10^{18}$
Elementarladungen durch den Querschnitt. Typische Ströme sind $0{,}1\,\text{A}$ in einer
Taschenlampe, $2\,\text{A}$ beim Handyladen und $9\,\text{A}$ in einem Wasserkocher.

**Beispiel und Nichtbeispiel.** Durch eine leuchtende Lampe fließt ein Strom, denn Ladung bewegt sich
gemeinsam in eine Richtung. **Kein** Strom ist dagegen ein geladener Kondensator, der ohne Verbindung
herumsteht. Er trägt zwar Ladung, aber sie ruht. Auch die Elektronen in einem Draht ohne Batterie
bilden **keinen** Strom. Sie flitzen zwar wild durcheinander, aber im Mittel fließen gleich viele nach
links wie nach rechts. Durch die Zählfläche geht netto keine Ladung.

:::beispiel[Ladung beim Handyladen]
Ein Ladekabel liefert $30$ Minuten lang den Strom $I = 2{,}0\,\text{A}$. Wie viel Ladung fließt, und
wie viele Elektronen sind das?

**Schritt 1, Zeit in Sekunden:** $t = 30\cdot 60\,\text{s} = 1800\,\text{s}$. Die Formel braucht
Sekunden, weil $1\,\text{A} = 1\,\text{C/s}$ ist.

**Schritt 2, Ladung:** Der Strom ist konstant, also gilt
$Q = I\cdot t = 2{,}0\,\tfrac{\text{C}}{\text{s}}\cdot 1800\,\text{s} = 3600\,\text{C}$.

**Schritt 3, Anzahl der Elektronen:** Jedes Elektron trägt die Ladung $e$. Wir teilen:
$N = \dfrac{Q}{e} = \dfrac{3600\,\text{C}}{1{,}602\cdot 10^{-19}\,\text{C}} = 2{,}25\cdot 10^{22}$.

**Deutung:** Das sind rund 22 Trilliarden Elektronen. Trotzdem bleibt das Handy elektrisch neutral.
Durch das zweite Kabel fließen genauso viele Elektronen wieder hinaus.
:::

:::achtung[Fehler: Minuten statt Sekunden eingesetzt]
**Falsche Rechnung:** „Durch eine Lampe fließen $2$ Minuten lang $0{,}30\,\text{A}$. Also ist
$Q = 0{,}30\cdot 2 = 0{,}60\,\text{C}$.“

**Richtig:** Ampere heißt Coulomb **pro Sekunde**. Die Zeit muss deshalb in Sekunden stehen:
$t = 2\cdot 60\,\text{s} = 120\,\text{s}$ und $Q = 0{,}30\,\tfrac{\text{C}}{\text{s}}\cdot 120\,\text{s} = 36\,\text{C}$.
Der falsche Wert ist sechzigmal zu klein. Schreib die Einheiten immer mit, dann fällt so ein Fehler sofort auf.
:::

```aufgabe
id: p13-strom-ladung
titel: Ladung und Elektronenzahl
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Durch eine Lampe fließen zwei Minuten lang $0{,}50\,\text{A}$.

  a) Welche Ladung fließt durch die Lampe (in C)?

  b) Wie viele Elektronen sind das? Gib die Zahl vor $10^{20}$ an.
teile:
  - typ: zahl
    label: a) Q in C
    loesung: "0.50*120"
    einheit: "C"
    anzeige: '60'
    fehler:
      - wert: "0.50*2"
        meldung: |
          Du hast die Zeit in Minuten eingesetzt. Ampere heißt Coulomb **pro Sekunde**, also brauchst du $t = 120\,\text{s}$.
  - typ: zahl
    label: b) Anzahl in 10²⁰
    loesung: "0.50*120/1.602e-19/1e20"
    anzeige: '3{,}75'
    fehler:
      - wert: "0.50*120*1.602e-19/1e20"
        meldung: |
          Du hast mit $e$ multipliziert. Gesucht ist, wie oft $e$ in die Ladung hineinpasst: $N = Q/e$.
hinweise:
  - 'Bei konstantem Strom gilt $Q = I\cdot t$, mit $t$ in Sekunden.'
loesung: |
  **a)** Der Strom ist konstant, also $Q = I\cdot t$. Mit $t = 2\cdot 60\,\text{s} = 120\,\text{s}$ wird $Q = 0{,}50\,\tfrac{\text{C}}{\text{s}}\cdot 120\,\text{s} = 60\,\text{C}$.
  ---
  **b)** Jedes Elektron trägt die Ladung $e$, also $N = \dfrac{Q}{e} = \dfrac{60\,\text{C}}{1{,}602\cdot 10^{-19}\,\text{C}} = 3{,}75\cdot 10^{20}$. Das ist eine reine Anzahl ohne Einheit.
```

```aufgabe
id: p13-strom-aus-ladung
titel: Strom aus der Zahl der Elektronen
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Durch den Querschnitt eines Drahtes fließen in $4{,}0\,\text{s}$ genau $2{,}0\cdot 10^{19}$ Elektronen. Wie groß ist die Stromstärke (in A)?
teile:
  - typ: zahl
    loesung: "2.0e19*1.602e-19/4.0"
    einheit: "A"
    anzeige: '0{,}80'
    fehler:
      - wert: "2.0e19/4.0"
        meldung: |
          Du hast Elektronen pro Sekunde berechnet, aber noch nicht die Ladung. Jedes Elektron trägt $e = 1{,}602\cdot 10^{-19}\,\text{C}$. Multipliziere zuerst die Anzahl mit $e$.
      - wert: "2.0e19*1.602e-19*4.0"
        meldung: |
          Stromstärke ist Ladung **pro** Zeit. Durch die Zeit wird geteilt, nicht mit ihr multipliziert.
hinweise:
  - 'Erst die Ladung $Q = N\cdot e$, dann $I = Q/t$.'
loesung: |
  **Ansatz:** Strom ist Ladung pro Zeit. Wir brauchen also zuerst die Ladung: $Q = N\cdot e = 2{,}0\cdot 10^{19}\cdot 1{,}602\cdot 10^{-19}\,\text{C} = 3{,}2\,\text{C}$.
  ---
  **Rechnung:** $I = \dfrac{Q}{t} = \dfrac{3{,}2\,\text{C}}{4{,}0\,\text{s}} = 0{,}80\,\text{A}$. Plausibel: Das ist ein Strom wie in einer kleinen Glühlampe.
```

### Ladung aus einem Strom-Zeit-Diagramm

Oft ist der Strom nicht konstant. Ein Handy-Ladegerät liefert zum Beispiel am Ende des Ladens immer
weniger Strom. Dann hilft $Q = I\cdot t$ nicht direkt weiter. Man zeichnet den Strom über der Zeit, das
**I-t-Diagramm**.

Bei konstantem Strom ist $Q = I\cdot t$ die Fläche eines Rechtecks mit der Höhe $I$ und der Breite $t$.
Dieser Gedanke gilt allgemein: **Die Ladung ist die Fläche unter der Kurve im I-t-Diagramm.** Du kennst
das schon aus der Kinematik, wo der Weg die Fläche unter dem v-t-Diagramm ist. Mathematisch ist das
ein Integral, siehe [Mathematik, Bestand aus Änderungsrate](/lernen/mathe3/integralrechnung/bestand-aus-aenderungsrate-weg-und-bremsweg).
Für gerade Kurvenstücke genügen Rechtecke und Dreiecke.

:::beispiel[Ladung aus einem ansteigenden Strom]
Beim Einschalten eines Geräts steigt der Strom in $5{,}0\,\text{s}$ gleichmäßig von $0$ auf
$4{,}0\,\text{A}$. Wie viel Ladung fließt in diesen $5{,}0\,\text{s}$?

**Schritt 1, Form der Fläche:** Die Kurve ist eine schräge Gerade vom Ursprung aus. Die Fläche darunter
ist ein rechtwinkliges Dreieck mit der Breite $5{,}0\,\text{s}$ und der Höhe $4{,}0\,\text{A}$.

**Schritt 2, Dreiecksfläche:** $Q = \tfrac12\cdot 5{,}0\,\text{s}\cdot 4{,}0\,\text{A} = 10\,\text{C}$,
denn $\text{A}\cdot\text{s} = \text{C}$.

**Probe:** Der mittlere Strom ist $2{,}0\,\text{A}$, die Hälfte des Endwerts. $2{,}0\,\text{A}\cdot 5{,}0\,\text{s} = 10\,\text{C}$ passt.
:::

```plot
x: [0, 7]
y: [0, 5]
achsen: { x: "t in s", y: "I in A" }
graphen:
  - { f: "0.8*x", von: 0, bis: 5, label: "I(t)", farbe: 0 }
flaechen:
  - { f: "0.8*x", von: 0, bis: 5, farbe: 0 }
strecken:
  - { von: [5, 0], nach: [5, 4], gestrichelt: true }
beschriftung: "I-t-Diagramm zum Beispiel: Der Strom steigt in 5 s gleichmäßig von 0 auf 4 A. Die gefärbte Dreiecksfläche unter der Geraden ist die geflossene Ladung, ½ · 5 s · 4 A = 10 C."
```

```aufgabe
id: p13-strom-diagramm
titel: Ladung aus einem I-t-Diagramm
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Das Diagramm zeigt den Strom durch einen kleinen Motor beim Anlaufen, im Betrieb und beim Abschalten. Wie viel Ladung fließt insgesamt durch den Motor (in C)?
plot:
  x: [0, 9]
  y: [0, 4]
  achsen: { x: "t in s", y: "I in A" }
  graphen:
    - { f: "1.5*x", von: 0, bis: 2, farbe: 0 }
    - { f: "3", von: 2, bis: 6, farbe: 0 }
    - { f: "3-1.5*(x-6)", von: 6, bis: 8, farbe: 0 }
  punkte:
    - { x: 2, y: 3, label: "(2 s | 3 A)" }
    - { x: 6, y: 3, label: "(6 s | 3 A)" }
    - { x: 8, y: 0, label: "8 s" }
teile:
  - typ: zahl
    loesung: "0.5*2*3 + 4*3 + 0.5*2*3"
    einheit: "C"
    anzeige: '18'
    fehler:
      - wert: "3*8"
        meldung: |
          Du hast so gerechnet, als wäre der Strom die ganzen $8\,\text{s}$ lang $3\,\text{A}$. Am Anfang und am Ende ist er aber kleiner. Dort ist die Fläche nur ein Dreieck.
      - wert: "4*3"
        meldung: |
          Das ist nur das Rechteck in der Mitte. Die beiden Dreiecke beim Anlaufen und beim Abschalten gehören auch zur Fläche.
hinweise:
  - Die Ladung ist die Fläche unter der Kurve.
  - 'Teile die Fläche in ein Dreieck, ein Rechteck und noch ein Dreieck. Dreiecksfläche: $\tfrac12\cdot$ Breite $\cdot$ Höhe.'
gefuehrt:
  - text: Wie viel Ladung fließt beim Anlaufen, also von $0$ bis $2\,\text{s}$ (in C)?
    teil: { typ: zahl, loesung: "0.5*2*3" }
    erklaerung: 'Die Fläche ist ein Dreieck: $\tfrac12\cdot 2\,\text{s}\cdot 3\,\text{A} = 3\,\text{C}$.'
  - text: Wie viel Ladung fließt im Betrieb, von $2$ bis $6\,\text{s}$ (in C)?
    teil: { typ: zahl, loesung: "4*3" }
    erklaerung: 'Ein Rechteck: $4\,\text{s}\cdot 3\,\text{A} = 12\,\text{C}$.'
  - text: Wie viel Ladung fließt beim Abschalten, von $6$ bis $8\,\text{s}$ (in C)?
    teil: { typ: zahl, loesung: "0.5*2*3" }
    erklaerung: 'Wieder ein Dreieck mit $2\,\text{s}$ Breite und $3\,\text{A}$ Höhe, also $3\,\text{C}$.'
  - text: Addiere die drei Teile.
    erklaerung: '$3\,\text{C} + 12\,\text{C} + 3\,\text{C} = 18\,\text{C}$.'
loesung: |
  **Ansatz:** Die Ladung ist die Fläche unter der Kurve im I-t-Diagramm. Wir zerlegen sie in drei einfache Figuren.
  ---
  **Anlaufen und Abschalten:** zwei Dreiecke mit je $2\,\text{s}$ Breite und $3\,\text{A}$ Höhe, also je $\tfrac12\cdot 2\,\text{s}\cdot 3\,\text{A} = 3\,\text{C}$.
  ---
  **Betrieb:** ein Rechteck mit $4\,\text{s}\cdot 3\,\text{A} = 12\,\text{C}$. Insgesamt $Q = 3\,\text{C} + 12\,\text{C} + 3\,\text{C} = 18\,\text{C}$. Probe: Das ist weniger als $3\,\text{A}\cdot 8\,\text{s} = 24\,\text{C}$, wie es sein muss.
```

### Technische Stromrichtung

Als man die Stromrichtung festlegte, wusste man noch nichts von Elektronen. Sie wurden erst 1897
entdeckt. Man vereinbarte: Der Strom fließt außerhalb der Quelle **vom Pluspol zum Minuspol**. Das ist die
**technische Stromrichtung**. Sie ist die Richtung, in die sich **positive** Ladungen bewegen würden.

Später stellte sich heraus: In Metallen bewegen sich die negativ geladenen Elektronen, und zwar genau
**entgegengesetzt**, vom Minuspol zum Pluspol. Man hat die alte Vereinbarung trotzdem behalten. Alle
Schaltpläne, Formeln und Regeln benutzen sie. Auch wir verwenden in diesem Kurs immer die technische
Stromrichtung.

```plot
x: [0.5, 10.5]
y: [0.2, 6.2]
gleich: true
hoehe: 300
achsen: { x: " ", y: " " }
graphen:
  - { f: "3.32", von: 1.05, bis: 1.95, farbe: 3, label: "+  Pluspol, 9 V" }
  - { f: "3.08", von: 1.3, bis: 1.7, farbe: 3 }
kurven:
  - { x: "9.5 + 0.35*cos(t)", y: "3.2 + 0.35*sin(t)", t: [0, "2*pi"], farbe: 1 }
strecken:
  - { von: [1.5, 1.2], nach: [1.5, 3.08] }
  - { von: [1.5, 3.32], nach: [1.5, 5.2] }
  - { von: [1.3, 3.06], nach: [1.7, 3.06], farbe: 3 }
  - { von: [1.5, 5.2], nach: [9.5, 5.2] }
  - { von: [9.5, 5.2], nach: [9.5, 1.2] }
  - { von: [9.5, 1.2], nach: [1.5, 1.2] }
  - { von: [9.253, 2.953], nach: [9.747, 3.447], farbe: 1 }
  - { von: [9.253, 3.447], nach: [9.747, 2.953], farbe: 1 }
vektoren:
  - { von: [4, 5.6], nach: [7, 5.6], label: "technische Stromrichtung", farbe: 0 }
  - { von: [7, 4.7], nach: [4, 4.7], label: "Elektronen", farbe: 1 }
punkte:
  - { x: 9.747, y: 3.447, label: "Lampe", farbe: 1, offen: true }
beschriftung: "Ein einfacher Stromkreis aus Batterie und Lampe. Die lange Platte des Batteriesymbols ist der Pluspol. Der blaue Pfeil über dem oberen Draht zeigt die technische Stromrichtung, außen vom Pluspol zum Minuspol. Der orange Pfeil darunter zeigt, wie sich die Elektronen im selben Draht tatsächlich bewegen: genau andersherum."
```

**Beispiel und Nichtbeispiel.** In einer Salzlösung bewegen sich positive Ionen und negative Ionen. Dort
stimmt die technische Stromrichtung mit der Bewegung der positiven Ionen überein. In einem Kupferdraht
bewegen sich dagegen nur Elektronen. Dort ist die technische Richtung **nicht** die Bewegungsrichtung
eines einzigen Teilchens. Sie beschreibt trotzdem denselben Strom, denn eine negative Ladung nach links
wirkt wie eine positive Ladung nach rechts.

:::achtung[Fehler: Elektronen in technischer Stromrichtung]
**Falsche Überlegung:** „Der Strom fließt vom Pluspol durch die Lampe zum Minuspol. Also wandern die
Elektronen vom Pluspol zum Minuspol.“

**Richtig:** Die technische Stromrichtung ist eine Vereinbarung für **positive** Ladungen. Elektronen sind
negativ und bewegen sich entgegengesetzt, außen vom **Minuspol zum Pluspol**. Beide Aussagen beschreiben
denselben Strom. Merke: Pfeile in Schaltplänen zeigen immer die technische Richtung.
:::

```aufgabe
id: p13-stromrichtung
titel: Technische Stromrichtung und Elektronen
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  In einem Stromkreis aus Batterie, Kupferdraht und Lampe fließt Strom. Welche Aussagen sind richtig? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Die technische Stromrichtung verläuft außerhalb der Batterie vom Pluspol zum Minuspol."
      - "Die Elektronen bewegen sich im Draht vom Pluspol zum Minuspol."
      - "Die Elektronen bewegen sich im Draht vom Minuspol zum Pluspol."
      - "Die Elektronen kommen beim Einschalten in einem Bruchteil einer Sekunde von der Batterie bis zur Lampe."
    richtig: [0, 2]
    fehler:
      - wert: [0, 1]
        meldung: |
          Die technische Stromrichtung gilt für **positive** Ladungen. Elektronen sind negativ und bewegen sich entgegengesetzt, also vom Minuspol zum Pluspol.
      - wert: [0, 2, 3]
        meldung: |
          Die Elektronen selbst sind sehr langsam, sie kriechen mit Bruchteilen eines Millimeters pro Sekunde. Schnell ist nur das Feld, das alle Elektronen im Draht gleichzeitig anschiebt.
hinweise:
  - Für welches Vorzeichen der Ladung wurde die technische Stromrichtung festgelegt?
loesung: |
  **Ansatz:** Die technische Stromrichtung ist die Bewegungsrichtung positiver Ladungen, außen von Plus nach Minus. Aussage 1 ist richtig.
  ---
  Elektronen sind negativ und bewegen sich entgegengesetzt, von Minus nach Plus. Aussage 3 ist richtig, Aussage 2 falsch.
  ---
  Aussage 4 ist falsch: Die Elektronen driften nur langsam. Beim Einschalten breitet sich das Feld fast mit Lichtgeschwindigkeit aus und setzt alle Elektronen gleichzeitig in Bewegung.
```

### Wie schnell sind die Elektronen?

Diese Stelle überrascht fast alle. Lies sie in Ruhe.

**Worum geht es in einem Satz?** Die Elektronen im Draht sind extrem langsam, trotzdem leuchtet die
Lampe sofort. Der Grund: Der Draht ist schon voller Elektronen, und alle werden gleichzeitig angeschoben.

**Ein Bild:** Denk an einen Gartenschlauch, der schon voll mit Wasser ist. Drehst du den Hahn auf, kommt
vorne sofort Wasser heraus. Es ist aber nicht das Wasser vom Hahn, sondern das Wasser, das schon vorne
im Schlauch war. Der **Druck** breitet sich schnell aus, das Wasser selbst fließt langsam. Im Draht
entspricht das Feld dem Druck und die Elektronen dem Wasser.

**In kleinen Schritten zur Formel.** Die mittlere Geschwindigkeit der Elektronen in Stromrichtung heißt
**Driftgeschwindigkeit** $v$. Wir berechnen sie aus dem Strom.

1. Im Draht gibt es pro Kubikmeter $n$ freie Elektronen. Das ist die **Teilchendichte**. Für Kupfer ist
   $n \approx 8{,}5\cdot 10^{28}\,\text{m}^{-3}$, ungefähr ein freies Elektron pro Atom.
2. In der Zeit $t$ legt jedes Elektron die Strecke $v\cdot t$ zurück. Durch die Zählfläche kommen also
   alle Elektronen, die vorher in einem Zylinder der Länge $v\,t$ und der Querschnittsfläche $A$ waren.
3. Dieser Zylinder hat das Volumen $A\,v\,t$. Er enthält $n\,A\,v\,t$ Elektronen, also die Ladung
   $Q = n\,e\,A\,v\,t$.
4. Wir teilen durch $t$ und erhalten den Strom:

$$I = n\,e\,A\,v \qquad\text{oder umgestellt}\qquad v = \frac{I}{n\,e\,A}.$$

Dabei ist $I$ der Strom in A, $n$ die Teilchendichte in $\text{m}^{-3}$, $e$ die Elementarladung in C,
$A$ die Querschnittsfläche in $\text{m}^2$ und $v$ die Driftgeschwindigkeit in m/s.

:::beispiel[Driftgeschwindigkeit in einer Herdleitung]
Ein Kupferdraht mit $A = 2{,}5\,\text{mm}^2$ Querschnitt führt den Strom $16\,\text{A}$.

**Schritt 1, Einheiten:** $A = 2{,}5\,\text{mm}^2 = 2{,}5\cdot 10^{-6}\,\text{m}^2$.

**Schritt 2, Einsetzen:**
$v = \dfrac{16\,\text{A}}{8{,}5\cdot 10^{28}\,\text{m}^{-3}\cdot 1{,}602\cdot 10^{-19}\,\text{C}\cdot 2{,}5\cdot 10^{-6}\,\text{m}^2} = 4{,}7\cdot 10^{-4}\,\tfrac{\text{m}}{\text{s}}$.
Die Einheiten ergeben $\tfrac{\text{C/s}}{\text{C}\cdot\text{m}^{-3}\cdot\text{m}^2} = \tfrac{\text{m}}{\text{s}}$.

**Deutung:** Das ist knapp ein halber Millimeter pro Sekunde. Für einen Meter Draht braucht ein Elektron
$1\,\text{m} / (4{,}7\cdot 10^{-4}\,\text{m/s}) \approx 2100\,\text{s}$, also gut eine halbe Stunde.
:::

**Was haben wir gezeigt?** Die Elektronen kriechen langsamer als eine Schnecke. Weil es aber unvorstellbar
viele sind, reicht diese langsame Bewegung für einen großen Strom. Das **typische Missverständnis** lautet:
„Der Strom ist so schnell wie das Licht, also rasen die Elektronen.“ Schnell ist nur das Signal, also
das Feld. Die Elektronen selbst sind langsam.

```reflexion
frage: Warum leuchtet eine Lampe sofort, wenn man den Schalter umlegt, obwohl die Elektronen für einen Meter Draht eine halbe Stunde brauchen? Erkläre es mit eigenen Worten.
antwort: |
  Der Draht ist schon vor dem Einschalten voller freier Elektronen, auch der Glühdraht der Lampe. Beim Einschalten breitet sich das elektrische Feld fast mit Lichtgeschwindigkeit im ganzen Stromkreis aus. Es schiebt **alle** Elektronen gleichzeitig an, auch die, die schon in der Lampe sind. Deshalb fließt in der Lampe sofort Strom. Die Elektronen aus der Batterie kommen erst viel später dort an, aber das ist für das Leuchten nicht nötig.
```

```aufgabe
id: p13-drift
titel: Driftgeschwindigkeit in Kupfer
niveau: 2
lernziel: 0
kompetenz: rechnen
angabe: |
  Durch einen Kupferdraht mit $1{,}5\,\text{mm}^2$ Querschnitt fließen $10\,\text{A}$. Kupfer hat $8{,}5\cdot 10^{28}$ freie Elektronen pro Kubikmeter. Berechne die Driftgeschwindigkeit in mm/s.
teile:
  - typ: zahl
    loesung: "10/(8.5e28*1.602e-19*1.5e-6)*1000"
    einheit: "mm/s"
    anzeige: '0{,}49'
    fehler:
      - wert: "10/(8.5e28*1.602e-19*1.5)*1000"
        meldung: |
          Der Querschnitt muss in Quadratmetern stehen: $1{,}5\,\text{mm}^2 = 1{,}5\cdot 10^{-6}\,\text{m}^2$. Bei Flächen wird der Faktor $10^{-3}$ quadriert.
      - wert: "10/(8.5e28*1.5e-6)*1000"
        meldung: |
          Die Elementarladung $e$ fehlt im Nenner. $n\,A\,v$ zählt Elektronen pro Sekunde. Erst mal $e$ wird daraus Ladung pro Sekunde, also ein Strom.
hinweise:
  - '$I = n\,e\,A\,v$, also $v = I/(n\,e\,A)$.'
  - 'Rechne den Querschnitt in m² um: $1{,}5\,\text{mm}^2 = 1{,}5\cdot 10^{-6}\,\text{m}^2$. Das Ergebnis kommt in m/s heraus.'
loesung: |
  **Ansatz:** Aus $I = n\,e\,A\,v$ folgt $v = \dfrac{I}{n\,e\,A}$. Der Querschnitt in SI-Einheiten: $A = 1{,}5\cdot 10^{-6}\,\text{m}^2$.
  ---
  **Rechnung:** $v = \dfrac{10\,\text{A}}{8{,}5\cdot 10^{28}\,\text{m}^{-3}\cdot 1{,}602\cdot 10^{-19}\,\text{C}\cdot 1{,}5\cdot 10^{-6}\,\text{m}^2} = 4{,}9\cdot 10^{-4}\,\tfrac{\text{m}}{\text{s}}$.
  ---
  **Umrechnen und deuten:** $4{,}9\cdot 10^{-4}\,\text{m/s} = 0{,}49\,\text{mm/s}$. Für einen Meter Draht braucht ein Elektron also über eine halbe Stunde.
```

```aufgabe
id: p13-drift-proportional
titel: Dickerer Draht, gleicher Strom
niveau: 2
lernziel: 0
kompetenz: begruenden
angabe: |
  Derselbe Strom fließt einmal durch einen Kupferdraht und einmal durch einen Kupferdraht mit **doppeltem Durchmesser**. Wie ändert sich die Driftgeschwindigkeit der Elektronen?
teile:
  - typ: auswahl
    optionen:
      - "Sie wird ein Viertel so groß."
      - "Sie wird halb so groß."
      - "Sie bleibt gleich, weil der Strom gleich bleibt."
      - "Sie wird doppelt so groß."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Doppelter **Durchmesser** heißt nicht doppelte Fläche. Die Querschnittsfläche $A = \pi r^2$ wächst mit dem Quadrat des Radius, also auf das Vierfache.
      - wert: 2
        meldung: |
          Gleicher Strom heißt gleich viel Ladung pro Sekunde. Im dicken Draht verteilt sie sich aber auf einen viel größeren Querschnitt. Jedes einzelne Elektron muss deshalb weniger schnell sein.
      - wert: 3
        meldung: |
          Mehr Querschnitt heißt mehr Elektronen nebeneinander. Damit dieselbe Ladung pro Sekunde durchkommt, genügt eine **kleinere** Geschwindigkeit.
hinweise:
  - 'Aus $I = n\,e\,A\,v$ folgt $v = I/(n\,e\,A)$. Was bleibt gleich, was ändert sich?'
  - 'Wie ändert sich $A = \pi r^2$, wenn der Durchmesser und damit der Radius doppelt so groß wird?'
loesung: |
  **Ansatz:** $v = \dfrac{I}{n\,e\,A}$. Strom $I$, Material ($n$) und $e$ bleiben gleich. Also ist $v$ umgekehrt proportional zu $A$.
  ---
  Bei doppeltem Durchmesser verdoppelt sich der Radius, und $A = \pi r^2$ wird $2^2 = 4$-mal so groß.
  ---
  Die Driftgeschwindigkeit wird deshalb **ein Viertel** so groß. Anschaulich: Viermal so viele Elektronen nebeneinander transportieren dieselbe Ladung, jedes muss also nur ein Viertel so schnell sein.
```

```aufgabe
id: p13-lampe-sofort
titel: Warum die Lampe sofort leuchtet
niveau: 2
lernziel: 0
kompetenz: begruenden
angabe: |
  Ein Mitschüler sagt: „Die Elektronen müssen beim Einschalten von der Batterie bis zur Lampe fliegen. Weil die Lampe sofort leuchtet, müssen sie fast so schnell wie das Licht sein.“ Erkläre, was an dieser Überlegung falsch ist.
teile:
  - typ: text
    muster: |
      Die Elektronen müssen nicht erst von der Batterie zur Lampe wandern. Der ganze Stromkreis, auch der Glühdraht der Lampe, ist schon voller freier Elektronen. Beim Einschalten breitet sich das elektrische Feld fast mit Lichtgeschwindigkeit aus und schiebt alle Elektronen gleichzeitig an. Die Elektronen selbst driften nur mit Bruchteilen eines Millimeters pro Sekunde. Schnell ist das Signal, nicht die Ladungsträger, wie beim Wasser in einem vollen Gartenschlauch.
hinweise:
  - Sind im Glühdraht der Lampe vor dem Einschalten schon freie Elektronen?
  - Was breitet sich beim Einschalten schnell aus, die Elektronen oder das elektrische Feld?
loesung: |
  **Fehler in der Überlegung:** Der Mitschüler nimmt an, dass die Elektronen erst aus der Batterie kommen müssen.
  ---
  **Richtig ist:** Jedes Stück Metall im Kreis, auch der Glühdraht, enthält schon freie Elektronen. Beim Einschalten breitet sich das Feld fast mit Lichtgeschwindigkeit aus und setzt alle gleichzeitig in Bewegung.
  ---
  **Folgerung:** Die Elektronen selbst sind sehr langsam, etwa $0{,}5\,\text{mm/s}$. Schnell ist nur das Feld, ähnlich wie der Druck in einem vollen Gartenschlauch.
```

```aufgabe
id: p13-elektronen-ladekabel
titel: Wie lange braucht ein Elektron durch ein Ladekabel?
niveau: 3
lernziel: 0
kompetenz: modellieren
angabe: |
  Ein Ladekabel ist $1{,}5\,\text{m}$ lang. Jede seiner Kupferadern hat den Querschnitt $0{,}50\,\text{mm}^2$, und es fließen $2{,}0\,\text{A}$. Kupfer hat $8{,}5\cdot 10^{28}$ freie Elektronen pro Kubikmeter.

  a) Berechne die Driftgeschwindigkeit in mm/s.

  b) Wie lange braucht ein einzelnes Elektron vom einen Ende einer Ader zum anderen (in Minuten)?

  c) Das Ladegerät wird $2$ Stunden lang benutzt. Kommt ein Elektron, das beim Einschalten am Netzteil startet, in dieser Zeit im Handy an?
teile:
  - typ: zahl
    label: a) v in mm/s
    loesung: "2.0/(8.5e28*1.602e-19*0.50e-6)*1000"
    einheit: "mm/s"
    anzeige: '0{,}294'
  - typ: zahl
    label: b) t in min
    loesung: "1.5/(2.0/(8.5e28*1.602e-19*0.50e-6))/60"
    einheit: "min"
    anzeige: '85'
  - typ: auswahl
    label: c)
    optionen:
      - "Ja, nach etwa 85 Minuten."
      - "Nein, es braucht länger als zwei Stunden."
    richtig: [0]
hinweise:
  - '$v = I/(n\,e\,A)$ mit $A$ in m².'
  - 'Für b): Bei konstanter Geschwindigkeit ist $t = s/v$. Rechne $v$ dafür in m/s und das Ergebnis von Sekunden in Minuten um.'
loesung: |
  **a) Ansatz:** $v = \dfrac{I}{n\,e\,A}$ mit $A = 0{,}50\cdot 10^{-6}\,\text{m}^2$.
  $v = \dfrac{2{,}0\,\text{A}}{8{,}5\cdot 10^{28}\,\text{m}^{-3}\cdot 1{,}602\cdot 10^{-19}\,\text{C}\cdot 0{,}50\cdot 10^{-6}\,\text{m}^2} = 2{,}94\cdot 10^{-4}\,\tfrac{\text{m}}{\text{s}} = 0{,}294\,\tfrac{\text{mm}}{\text{s}}$.
  ---
  **b)** Das Elektron bewegt sich im Mittel gleichförmig, also $t = \dfrac{s}{v} = \dfrac{1{,}5\,\text{m}}{2{,}94\cdot 10^{-4}\,\text{m/s}} = 5100\,\text{s}$. Geteilt durch $60\,\text{s/min}$ sind das rund $85\,\text{min}$.
  ---
  **c)** $85\,\text{min}$ sind weniger als $120\,\text{min}$. Das Elektron kommt also an, aber erst nach fast eineinhalb Stunden. Das Handy lädt trotzdem vom ersten Moment an, weil das Feld alle Elektronen im Kabel sofort anschiebt.
```

### Wirkungen des Stroms

Den Strom selbst sieht man nicht. Man erkennt ihn nur an seinen Wirkungen.

- **Wärmewirkung:** Jeder Leiter, durch den Strom fließt, erwärmt sich. Beispiele sind Herdplatte, Föhn und Sicherung.
- **Magnetische Wirkung:** Um jeden Strom entsteht ein Magnetfeld. Diese Wirkung tritt **immer** auf. Sie treibt Elektromotoren an ([Kapitel 14, Elektromotor, Generator und Transformator](/lernen/physik1/magnetismus-wechselstrom/elektromotor-generator-und-transformator)).
- **Chemische Wirkung:** In leitenden Flüssigkeiten zersetzt der Strom Stoffe. Das nutzt man beim Laden eines Akkus und beim Verchromen.
- **Lichtwirkung:** Leuchtdioden und Leuchtstoffröhren senden Licht aus.
- **Wirkung auf Lebewesen:** Strom durch den Körper reizt Nerven und Muskeln. Schon etwa $50\,\text{mA}$ durch den Brustkorb können das Herz aus dem Takt bringen.

Mit der Wärmewirkung und der Sicherheit befasst sich die Lektion
[13.8 Elektrische Arbeit, Leistung und Energiekosten](/lernen/physik1/gleichstrom/elektrische-arbeit-leistung-und-energiekosten).

## Der Stromkreis: Strom wird nicht verbraucht

```aufgabe
id: p13-2-check
art: check
titel: "Vorwissen: Wo liegt eine Spannung?"
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Welche Aussage über die elektrische Spannung ist richtig?

  Herkunft: [Kapitel 12, Feldstärke, Spannung und Potential im homogenen Feld](/lernen/physik1/elektrostatik/feldstaerke-spannung-und-potential-im-homogenen-feld)
teile:
  - typ: auswahl
    optionen:
      - "Eine Spannung besteht immer zwischen zwei Punkten. Sie ist der Unterschied ihrer Potentiale."
      - "Eine Spannung sitzt in einem einzelnen Punkt, zum Beispiel im Pluspol."
      - "Eine Spannung fließt durch den Draht wie Wasser durch ein Rohr."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Ein einzelner Punkt hat ein **Potential**. Eine Spannung gibt es erst zwischen zwei Punkten, so wie ein Höhenunterschied zwei Orte braucht.
      - wert: 2
        meldung: |
          Durch den Draht fließt **Ladung**. Die Spannung fließt nicht, sie liegt zwischen zwei Punkten an. Sie ist der Antrieb für die Ladung.
hinweise:
  - Denk an das Gelände-Bild aus Kapitel 12. Welcher Begriff entspricht der Höhe, welcher dem Höhenunterschied?
loesung: |
  Ein Punkt hat ein Potential, wie ein Ort eine Höhe hat. Die Spannung ist der Potentialunterschied zwischen zwei Punkten, wie ein Höhenunterschied.
  ---
  Fließen kann nur Ladung. Die Spannung „liegt an“, der Strom „fließt durch“.
```

Diese Lektion behandelt die wichtigste Fehlvorstellung der ganzen Elektrizitätslehre. Fast jeder bringt
sie aus dem Alltag mit. Wir prüfen sie zuerst mit einer Vorhersage.

```aufgabe
id: p13-2-vorhersage
art: check
titel: "Vorhersage: Vor oder hinter der Lampe?"
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  In einem Stromkreis messen zwei Strommesser den Strom: $A_1$ zwischen Pluspol und Lampe, $A_2$ zwischen Lampe und Minuspol. Was zeigen sie an? Entscheide, bevor du weiterliest.
plot:
  x: [0.5, 11.5]
  y: [0.2, 6.2]
  gleich: true
  hoehe: 300
  achsen: { x: " ", y: " " }
  graphen:
    - { f: "3.32", von: 1.05, bis: 1.95, farbe: 3, label: "4,5 V" }
    - { f: "3.08", von: 1.3, bis: 1.7, farbe: 3 }
  kurven:
    - { x: "4 + 0.32*cos(t)", y: "5.2 + 0.32*sin(t)", t: [0, "2*pi"], farbe: 2 }
    - { x: "10.5 + 0.35*cos(t)", y: "3.2 + 0.35*sin(t)", t: [0, "2*pi"], farbe: 1 }
    - { x: "8 + 0.32*cos(t)", y: "1.2 + 0.32*sin(t)", t: [0, "2*pi"], farbe: 2 }
  strecken:
    - { von: [1.5, 1.2], nach: [1.5, 3.08] }
    - { von: [1.5, 3.32], nach: [1.5, 5.2] }
    - { von: [1.3, 3.06], nach: [1.7, 3.06], farbe: 3 }
    - { von: [1.5, 5.2], nach: [3.68, 5.2] }
    - { von: [3.89, 5.03], nach: [4, 5.37], farbe: 2 }
    - { von: [4, 5.37], nach: [4.11, 5.03], farbe: 2 }
    - { von: [3.945, 5.18], nach: [4.055, 5.18], farbe: 2 }
    - { von: [4.32, 5.2], nach: [10.5, 5.2] }
    - { von: [10.5, 5.2], nach: [10.5, 3.55] }
    - { von: [10.253, 2.953], nach: [10.747, 3.447], farbe: 1 }
    - { von: [10.253, 3.447], nach: [10.747, 2.953], farbe: 1 }
    - { von: [10.5, 2.85], nach: [10.5, 1.2] }
    - { von: [10.5, 1.2], nach: [8.32, 1.2] }
    - { von: [7.89, 1.03], nach: [8, 1.37], farbe: 2 }
    - { von: [8, 1.37], nach: [8.11, 1.03], farbe: 2 }
    - { von: [7.945, 1.18], nach: [8.055, 1.18], farbe: 2 }
    - { von: [7.68, 1.2], nach: [1.5, 1.2] }
  punkte:
    - { x: 4.226, y: 5.426, label: "A₁", farbe: 2, offen: true }
    - { x: 10.747, y: 3.447, label: "Lampe", farbe: 1, offen: true }
    - { x: 8.226, y: 1.426, label: "A₂", farbe: 2, offen: true }
teile:
  - typ: auswahl
    optionen:
      - "Beide zeigen genau denselben Strom an."
      - "$A_1$ zeigt mehr an, weil die Lampe einen Teil des Stroms verbraucht."
      - "$A_2$ zeigt mehr an, weil die Elektronen am Minuspol starten."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Das ist die häufigste Fehlvorstellung überhaupt. Die Lampe verbraucht keine Ladung. Jede Ladung, die hineinfließt, fließt auch wieder hinaus. Was die Lampe umwandelt, ist **Energie**.
      - wert: 2
        meldung: |
          Auch in Elektronenrichtung gedacht geht keine Ladung verloren. Was in die Lampe hineinfließt, kommt auch wieder heraus, egal in welche Richtung man zählt.
hinweise:
  - Kann sich in der Lampe Ladung ansammeln oder in Nichts verschwinden?
loesung: |
  Beide Strommesser zeigen denselben Wert. In der Lampe kann Ladung weder verschwinden noch sich anhäufen.
  ---
  Die Lampe wandelt Energie um, in Licht und Wärme. Die Ladung selbst fließt vollständig weiter.
```

### Was fließt, und was wird umgewandelt?

Wenn du gerade „$A_1$ zeigt mehr an“ gewählt hast, bist du in guter Gesellschaft. Die Messung zeigt
aber eindeutig: **Beide Strommesser zeigen denselben Wert.** Der Strom ist vor und hinter der Lampe
gleich groß.

**Worum geht es in einem Satz?** Im Stromkreis fließt Ladung im Kreis und kommt vollständig zurück. Was
die Lampe „verbraucht“, ist nicht die Ladung, sondern die **Energie**, die die Ladung mitbringt.

Der Grund ist die **Ladungserhaltung** aus
[Kapitel 12, Elektrische Ladung und Elementarladung](/lernen/physik1/elektrostatik/elektrische-ladung-und-elementarladung).
Ladung kann nicht verschwinden. Würde in der Lampe Ladung hängen bleiben, würde sich die Lampe immer
stärker aufladen. Das passiert nicht. Also fließt jede Sekunde genauso viel Ladung aus der Lampe
heraus, wie hineinfließt.

Damit Strom fließen kann, braucht man einen **geschlossenen Stromkreis**: eine Quelle, Leitungen, einen
Verbraucher und den Rückweg zur Quelle. Ein Schalter öffnet oder schließt diesen Kreis. Ist der Kreis
an **einer** Stelle offen, fließt **nirgends** Strom, auch nicht im Stück zwischen Pluspol und Schalter.

**Zwei Bilder helfen.**

- **Die Fahrradkette:** Die Pedale treiben die Kette an, die Kette treibt das Hinterrad an. Die
  Kettenglieder werden dabei nicht verbraucht. Sie laufen im Kreis. Übertragen wird die Energie vom
  Fahrer zum Rad. Im Stromkreis sind die Elektronen die Kettenglieder, die Batterie ist der Fahrer.
- **Der Wasserkreislauf einer Heizung:** Die Pumpe treibt das Wasser durch die Heizkörper. Dort gibt es
  Wärme ab, aber es kommt vollständig zur Pumpe zurück. Die Pumpe entspricht der Batterie, der
  Heizkörper der Lampe.

:::beispiel[Energiebilanz einer Taschenlampe]
Eine Taschenlampe mit einer $3{,}0$-V-Batterie leuchtet $10$ Minuten lang. Dabei fließt der Strom $0{,}25\,\text{A}$.

**Schritt 1, Ladung:** $Q = I\cdot t = 0{,}25\,\tfrac{\text{C}}{\text{s}}\cdot 600\,\text{s} = 150\,\text{C}$.
Diese $150\,\text{C}$ fließen in die Lampe hinein **und** wieder heraus.

**Schritt 2, Energie:** Jedes Coulomb verliert beim Durchlaufen der Spannung $3{,}0\,\text{V}$ die Energie
$3{,}0\,\text{J}$. Insgesamt gibt die Ladung $W = Q\cdot U = 150\,\text{C}\cdot 3{,}0\,\text{V} = 450\,\text{J}$ ab.

**Deutung:** Die Lampe hat $450\,\text{J}$ in Licht und Wärme umgewandelt. Keine einzige Ladung ist
verschwunden. Die Batterie hat genau diese $450\,\text{J}$ aus chemischer Energie geliefert.
:::

:::achtung[Fehler: Der Strom wird in der Lampe kleiner]
**Falsche Rechnung:** „Vor der Lampe fließen $0{,}50\,\text{A}$. Die Lampe verbraucht $0{,}20\,\text{A}$.
Also fließen hinter der Lampe nur noch $0{,}30\,\text{A}$.“

**Richtig:** Eine Lampe verbraucht keinen Strom. Durch einen unverzweigten Draht fließt an jeder Stelle
derselbe Strom, vor und hinter der Lampe also $0{,}50\,\text{A}$. Die Lampe wandelt **Energie** um, pro
Sekunde $0{,}50\,\text{C}$ mal die Spannung an der Lampe. Merke: Strom fließt **durch** ein Bauteil, Energie
wird **in** ihm umgewandelt.
:::

```aufgabe
id: p13-kreis-amperemeter
titel: Strom vor und hinter der Lampe
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  In einem einfachen Stromkreis aus Batterie und Lampe zeigt ein Strommesser zwischen Pluspol und Lampe $0{,}40\,\text{A}$. Was zeigt ein zweiter Strommesser zwischen Lampe und Minuspol (in A)?
teile:
  - typ: zahl
    loesung: "0.40"
    einheit: "A"
    anzeige: '0{,}40'
    fehler:
      - wert: "0"
        meldung: |
          Die Lampe verbraucht keinen Strom. Würde hinter ihr nichts mehr fließen, müsste sich in der Lampe pro Sekunde $0{,}40\,\text{C}$ ansammeln. Ladung bleibt aber erhalten.
      - wert: "0.20"
        meldung: |
          Der Strom wird in der Lampe nicht kleiner. Die Lampe wandelt Energie um, die Ladung fließt vollständig weiter.
hinweise:
  - Kann in der Lampe Ladung verschwinden?
loesung: |
  **Ansatz:** Ladung bleibt erhalten. Im unverzweigten Kreis fließt pro Sekunde überall gleich viel Ladung.
  ---
  Der zweite Strommesser zeigt deshalb ebenfalls $0{,}40\,\text{A}$. Die Lampe wandelt nur Energie um.
```

```aufgabe
id: p13-kreis-offen
titel: Schalter hinter der Lampe
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: |
  Der Schalter sitzt zwischen Lampe und Minuspol und ist geöffnet. Was gilt?
plot:
  x: [0.5, 11.5]
  y: [0.2, 6.2]
  gleich: true
  hoehe: 300
  achsen: { x: " ", y: " " }
  graphen:
    - { f: "3.32", von: 1.05, bis: 1.95, farbe: 3, label: "4,5 V" }
    - { f: "3.08", von: 1.3, bis: 1.7, farbe: 3 }
  kurven:
    - { x: "10.5 + 0.35*cos(t)", y: "3.2 + 0.35*sin(t)", t: [0, "2*pi"], farbe: 1 }
  strecken:
    - { von: [1.5, 1.2], nach: [1.5, 3.08] }
    - { von: [1.5, 3.32], nach: [1.5, 5.2] }
    - { von: [1.3, 3.06], nach: [1.7, 3.06], farbe: 3 }
    - { von: [1.5, 5.2], nach: [10.5, 5.2] }
    - { von: [10.5, 5.2], nach: [10.5, 3.55] }
    - { von: [10.253, 2.953], nach: [10.747, 3.447], farbe: 1 }
    - { von: [10.253, 3.447], nach: [10.747, 2.953], farbe: 1 }
    - { von: [10.5, 2.85], nach: [10.5, 1.2] }
    - { von: [10.5, 1.2], nach: [7.5, 1.2] }
    - { von: [7.5, 1.2], nach: [5.65, 1.2] }
    - { von: [6.35, 1.2], nach: [4.5, 1.2] }
    - { von: [5.65, 1.2], nach: [6.3, 1.6] }
    - { von: [4.5, 1.2], nach: [1.5, 1.2] }
  punkte:
    - { x: 10.747, y: 3.447, label: "Lampe", farbe: 1, offen: true }
    - { x: 5.65, y: 1.2, farbe: 0, offen: true }
    - { x: 6.35, y: 1.2, farbe: 0, offen: true }
teile:
  - typ: auswahl
    optionen:
      - "Die Lampe leuchtet nicht. Im ganzen Kreis fließt kein Strom."
      - "Die Lampe leuchtet, denn zwischen Pluspol und Lampe ist der Kreis geschlossen."
      - "Die Lampe leuchtet schwächer, weil nur der halbe Kreis geschlossen ist."
      - "Die Lampe leuchtet, bis sich die Ladung vor dem Schalter staut."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Strom braucht einen **geschlossenen** Kreis. Die Ladung, die in die Lampe fließen würde, könnte am offenen Schalter nicht weiter. Sie würde sich in der Lampe anhäufen. Deshalb fließt gar nicht erst ein Strom.
      - wert: 2
        meldung: |
          Einen „halben Strom“ durch einen halben Kreis gibt es nicht. Entweder ist der Kreis geschlossen, dann fließt überall derselbe Strom, oder er ist offen, dann fließt nirgends Strom.
      - wert: 3
        meldung: |
          Beim Öffnen kommt die Bewegung in einem winzigen Bruchteil einer Sekunde zum Stehen. Die kleine Ladung, die sich dabei verschiebt, reicht bei weitem nicht für ein sichtbares Leuchten.
hinweise:
  - Strom ist ein Kreislauf. Was passiert mit einem Kreislauf, der an einer Stelle unterbrochen ist?
  - Wo könnte die Ladung hin, die aus der Lampe herauskommt?
loesung: |
  **Ansatz:** Strom fließt nur in einem geschlossenen Kreis, weil Ladung erhalten bleibt und sich nicht anhäufen kann.
  ---
  Der Kreis ist am Schalter offen. Die Ladung aus der Lampe käme nicht weiter. Deshalb fließt überhaupt kein Strom, auch nicht vor der Lampe.
  ---
  Die Lampe bleibt dunkel. Es ist gleichgültig, ob der Schalter vor oder hinter der Lampe sitzt.
```

### Spannung als Potentialdifferenz im Stromkreis

Jetzt kommt die zweite große Hürde. Sie wird leicht, wenn du das Gelände-Bild aus
[Kapitel 12, Feldstärke, Spannung und Potential im homogenen Feld](/lernen/physik1/elektrostatik/feldstaerke-spannung-und-potential-im-homogenen-feld)
im Kopf hast.

**Worum geht es in einem Satz?** Jeder Punkt eines Stromkreises hat ein **Potential**, so wie jeder Ort
eine Höhe hat. Die Spannung zwischen zwei Punkten ist der **Unterschied** ihrer Potentiale.

**Das Bild:** Stell dir eine Wasserrutsche in einem Freibad vor. Die Pumpe hebt das Wasser nach oben.
Auf der Rutsche läuft es hinunter und gibt dabei Energie ab. Unten fließt es zurück zur Pumpe. Im
Stromkreis gilt das genauso:

1. Die **Batterie** hebt die Ladung auf ein höheres Potential. Bei einer $12$-V-Batterie liegt der Pluspol
   $12\,\text{V}$ über dem Minuspol.
2. In einem **idealen Draht** bleibt das Potential gleich. Ein Draht ist wie ein flacher Weg. Zwischen zwei
   Punkten desselben Drahtes liegt keine Spannung.
3. In einem **Verbraucher** fällt das Potential ab. Hier gibt die Ladung ihre Energie ab, pro Coulomb
   genau so viele Joule, wie die Spannung am Verbraucher in Volt beträgt.
4. Am Ende ist die Ladung wieder beim Minuspol, auf dem Ausgangspotential. Der Kreis ist geschlossen.

Den Nullpunkt des Potentials darf man frei wählen. Meist legt man den Minuspol auf $0\,\text{V}$. In der
Elektronik heißt dieser Bezugspunkt **Masse**, auf Platinen steht dafür oft „GND“. Eine Spannung ändert
sich durch diese Wahl nicht, weil sie eine Differenz ist.

:::beispiel[Potentiale in einem Stromkreis mit zwei Widerständen]
Eine $12$-V-Batterie speist zwei hintereinanderliegende Widerstände $R_1$ und $R_2$. Ein Spannungsmesser
zeigt an $R_1$ die Spannung $4{,}0\,\text{V}$ und an $R_2$ die Spannung $8{,}0\,\text{V}$. Der Minuspol D
liegt auf $0\,\text{V}$.

**Schritt 1, Punkt A:** A ist durch einen Draht mit dem Pluspol verbunden. $\varphi_A = 12\,\text{V}$.

**Schritt 2, Punkt B:** Von A nach B durchläuft die Ladung $R_1$. Das Potential fällt um $4{,}0\,\text{V}$:
$\varphi_B = 12\,\text{V} - 4{,}0\,\text{V} = 8{,}0\,\text{V}$.

**Schritt 3, Punkt C:** In $R_2$ fällt das Potential um $8{,}0\,\text{V}$: $\varphi_C = 8{,}0\,\text{V} - 8{,}0\,\text{V} = 0\,\text{V}$.

**Probe:** C und D liegen am selben Draht, beide haben $0\,\text{V}$. Die beiden Teilspannungen ergeben
zusammen $12\,\text{V}$. Mehr Energie, als die Batterie liefert, kann die Ladung nicht abgeben.
:::

```plot
x: [0.5, 11.5]
y: [0.2, 6.2]
gleich: true
hoehe: 300
achsen: { x: " ", y: " " }
graphen:
  - { f: "3.32", von: 1.05, bis: 1.95, farbe: 3, label: "+ 12 V" }
  - { f: "3.08", von: 1.3, bis: 1.7, farbe: 3 }
  - { f: "5.38", von: 4.5, bis: 5.5, farbe: 0, label: "R₁" }
  - { f: "5.02", von: 4.5, bis: 5.5, farbe: 0 }
  - { f: "3.7", von: 10.32, bis: 10.68, farbe: 1, label: "R₂" }
  - { f: "2.7", von: 10.32, bis: 10.68, farbe: 1 }
strecken:
  - { von: [1.5, 1.2], nach: [1.5, 3.08] }
  - { von: [1.5, 3.32], nach: [1.5, 5.2] }
  - { von: [1.3, 3.06], nach: [1.7, 3.06], farbe: 3 }
  - { von: [1.5, 5.2], nach: [3.5, 5.2] }
  - { von: [3.5, 5.2], nach: [4.5, 5.2] }
  - { von: [5.5, 5.2], nach: [6.5, 5.2] }
  - { von: [4.5, 5.02], nach: [4.5, 5.38], farbe: 0 }
  - { von: [5.5, 5.02], nach: [5.5, 5.38], farbe: 0 }
  - { von: [6.5, 5.2], nach: [10.5, 5.2] }
  - { von: [10.5, 1.2], nach: [10.5, 2.7] }
  - { von: [10.5, 3.7], nach: [10.5, 5.2] }
  - { von: [10.32, 2.7], nach: [10.32, 3.7], farbe: 1 }
  - { von: [10.68, 2.7], nach: [10.68, 3.7], farbe: 1 }
  - { von: [10.5, 1.2], nach: [1.5, 1.2] }
punkte:
  - { x: 1.5, y: 5.2, label: "A", farbe: 0 }
  - { x: 7, y: 5.2, label: "B", farbe: 0 }
  - { x: 10.5, y: 1.2, label: "C", farbe: 0 }
  - { x: 1.5, y: 1.2, label: "D (0 V)", farbe: 0 }
beschriftung: "Schaltung zum Beispiel: Batterie mit 12 V, Widerstand R₁ waagrecht, Widerstand R₂ senkrecht. Die Punkte A und B liegen vor und hinter R₁, C hinter R₂, D am Minuspol mit 0 V."
```

```plot
x: [0, 9.5]
y: [-2, 14]
achsen: { x: "Weg", y: "φ in V" }
graphen:
  - { f: "12*x", von: 0, bis: 1, farbe: 3, label: "Batterie" }
  - { f: "12", von: 1, bis: 3, farbe: 0 }
  - { f: "12-4*(x-3)", von: 3, bis: 4, farbe: 0, label: "R₁" }
  - { f: "8", von: 4, bis: 6, farbe: 0 }
  - { f: "8-8*(x-6)", von: 6, bis: 7, farbe: 1, label: "R₂" }
  - { f: "0", von: 7, bis: 9, farbe: 0 }
punkte:
  - { x: 1, y: 12, label: "A: 12 V" }
  - { x: 4, y: 8, label: "B: 8 V" }
  - { x: 7, y: 0, label: "C: 0 V" }
beschriftung: "Potentialverlauf entlang des Stromkreises aus dem Beispiel. In der Batterie steigt das Potential um 12 V. Entlang der Drähte bleibt es gleich. In R₁ fällt es um 4 V, in R₂ um 8 V. Am Ende ist die Ladung wieder bei 0 V, wie eine Wanderin, die zum Ausgangspunkt zurückkehrt."
```

Lies das Diagramm wie ein Höhenprofil einer Wanderung. Die Batterie ist der Lift nach oben. Die Drähte
sind flache Wege. Die Widerstände sind Abhänge. Wer im Kreis geht, kommt auf derselben Höhe an, auf der
er gestartet ist. Das ist der Kern der Maschenregel aus der Lektion
[13.5 Die Kirchhoffschen Regeln](/lernen/physik1/gleichstrom/die-kirchhoffschen-regeln-knoten-und-maschen).

:::achtung[Fehler: Spannung zwischen zwei Punkten desselben Drahtes]
**Falsche Überlegung:** „Die Batterie hat $12\,\text{V}$. Also misst ein Spannungsmesser auch zwischen
zwei Punkten auf dem Draht vom Pluspol zur Lampe $12\,\text{V}$.“

**Richtig:** Beide Punkte liegen auf demselben Draht und haben dasselbe Potential, hier $12\,\text{V}$.
Ihr Unterschied ist $12\,\text{V} - 12\,\text{V} = 0\,\text{V}$. Der Spannungsmesser zeigt null. Spannung
misst man immer **zwischen** zwei Punkten. Die $12\,\text{V}$ liegen zwischen Pluspol und Minuspol.
:::

**Typisches Missverständnis:** Man sagt im Alltag „An der Steckdose sind $230$ Volt“. Physikalisch genauer
ist: Zwischen den beiden Kontakten der Steckdose liegt die Spannung $230\,\text{V}$. Auch „die Spannung
fließt“ ist falsch. Die Spannung **liegt an**, der Strom **fließt durch**.

```aufgabe
id: p13-kreis-potential
titel: Potentiale an einer Taschenlampe
niveau: 1
lernziel: 1
kompetenz: anwenden
angabe: |
  Eine Batterie mit $4{,}5\,\text{V}$ speist eine Lampe. Der Minuspol liegt auf $0\,\text{V}$. Punkt P liegt auf dem Draht zwischen Pluspol und Lampe, Punkt Q ebenfalls auf diesem Draht, nur näher an der Lampe.

  a) Welches Potential hat P (in V)?

  b) Welche Spannung zeigt ein Spannungsmesser zwischen P und Q (in V)?
teile:
  - typ: zahl
    label: a) φ_P in V
    loesung: "4.5"
    einheit: "V"
    anzeige: '4{,}5'
    fehler:
      - wert: "2.25"
        meldung: |
          Im idealen Draht fällt das Potential nicht ab. Der ganze Draht vom Pluspol bis zur Lampe hat dasselbe Potential wie der Pluspol.
  - typ: zahl
    label: b) U_PQ in V
    loesung: "0"
    einheit: "V"
    anzeige: '0'
    fehler:
      - wert: "4.5"
        meldung: |
          P und Q liegen auf **demselben** Draht und haben dasselbe Potential. Ihr Unterschied ist null. Die $4{,}5\,\text{V}$ liegen zwischen den Polen der Batterie und damit an der Lampe.
hinweise:
  - Im idealen Draht bleibt das Potential gleich, wie auf einem flachen Weg.
loesung: |
  **a)** P ist über einen Draht mit dem Pluspol verbunden. Im Draht ändert sich das Potential nicht, also $\varphi_P = 4{,}5\,\text{V}$.
  ---
  **b)** Auch Q liegt auf diesem Draht, $\varphi_Q = 4{,}5\,\text{V}$. Die Spannung ist $U_{PQ} = \varphi_P - \varphi_Q = 0\,\text{V}$.
```

```aufgabe
id: p13-kreis-energie
titel: Energie, die eine Lampe umwandelt
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Durch eine Lampe, an der die Spannung $6{,}0\,\text{V}$ liegt, fließt insgesamt die Ladung $50\,\text{C}$. Wie viel Energie wandelt die Lampe um (in J)?
teile:
  - typ: zahl
    loesung: "50*6.0"
    einheit: "J"
    anzeige: '300'
    fehler:
      - wert: "50/6.0"
        meldung: |
          Spannung ist Energie pro Ladung, $U = W/Q$. Daraus folgt $W = Q\cdot U$. Es wird multipliziert.
      - wert: "0"
        meldung: |
          Die Ladung kommt zwar vollständig aus der Lampe heraus, aber mit weniger Energie. Pro Coulomb hat sie $6{,}0\,\text{J}$ abgegeben.
hinweise:
  - 'Jedes Coulomb gibt beim Durchlaufen von $6{,}0\,\text{V}$ genau $6{,}0\,\text{J}$ ab.'
loesung: |
  **Ansatz:** Die Spannung gibt die Energie pro Coulomb an, also $W = Q\cdot U$.
  ---
  $W = 50\,\text{C}\cdot 6{,}0\,\text{V} = 300\,\text{J}$. Die Ladung selbst fließt vollständig weiter.
```

```reflexion
frage: Wenn der Strom in der Lampe nicht verbraucht wird, wofür bezahlst du dann eigentlich den Stromversorger? Formuliere die Antwort, bevor du aufdeckst.
antwort: |
  Du bezahlst für **Energie**, nicht für Ladung. Die Elektronen in deinen Leitungen kommen vollständig zurück, sie pendeln beim Wechselstrom sogar nur hin und her. Das Kraftwerk hält die Spannung aufrecht und liefert damit Energie, die in deinen Geräten in Wärme, Licht und Bewegung umgewandelt wird. Der Zähler misst deshalb Kilowattstunden, eine Energieeinheit. Das Wort „Stromverbrauch“ ist eine bequeme Alltagsabkürzung für „Energieumsatz“.
```

```aufgabe
id: p13-kreis-potentialdiagramm
titel: Ein Potentialdiagramm lesen
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Das Diagramm zeigt das Potential entlang eines Stromkreises mit einer Batterie und zwei hintereinanderliegenden Widerständen $R_1$ und $R_2$. Durch beide fließt derselbe Strom.

  a) Welche Spannung liegt an $R_1$ (in V)?

  b) Welche Spannung liegt an $R_2$ (in V)?

  c) Wie viel Energie gibt ein Coulomb Ladung in $R_1$ ab (in J)?
plot:
  x: [0, 9.5]
  y: [-1, 11]
  achsen: { x: "Weg", y: "φ in V" }
  graphen:
    - { f: "9*x", von: 0, bis: 1, farbe: 3, label: "Batterie" }
    - { f: "9", von: 1, bis: 3, farbe: 0 }
    - { f: "9-6*(x-3)", von: 3, bis: 4, farbe: 0, label: "R₁" }
    - { f: "3", von: 4, bis: 6, farbe: 0 }
    - { f: "3-3*(x-6)", von: 6, bis: 7, farbe: 1, label: "R₂" }
    - { f: "0", von: 7, bis: 9, farbe: 0 }
  punkte:
    - { x: 1, y: 9, label: "9 V" }
    - { x: 4, y: 3, label: "3 V" }
    - { x: 7, y: 0, label: "0 V" }
teile:
  - typ: zahl
    label: a) U₁ in V
    loesung: "9-3"
    einheit: "V"
    anzeige: '6'
    fehler:
      - wert: "3"
        meldung: |
          $3\,\text{V}$ ist das **Potential** hinter $R_1$. Die Spannung an $R_1$ ist der Unterschied der Potentiale vor und hinter dem Widerstand, also $9\,\text{V} - 3\,\text{V}$.
      - wert: "9"
        meldung: |
          $9\,\text{V}$ ist das Potential vor $R_1$. Gesucht ist, um wie viel das Potential **in** $R_1$ abfällt.
  - typ: zahl
    label: b) U₂ in V
    loesung: "3-0"
    einheit: "V"
    anzeige: '3'
    fehler:
      - wert: "9"
        meldung: |
          $9\,\text{V}$ ist die Spannung der Batterie. An $R_2$ fällt nur der Rest ab, vom Potential $3\,\text{V}$ auf $0\,\text{V}$.
  - typ: zahl
    label: c) Energie pro Coulomb in R₁ in J
    loesung: "6"
    einheit: "J"
    anzeige: '6'
    fehler:
      - wert: "9"
        meldung: |
          In $R_1$ fällt das Potential nur um $6\,\text{V}$. Die übrigen $3\,\text{J}$ pro Coulomb gibt die Ladung erst in $R_2$ ab.
hinweise:
  - Lies das Potential direkt vor und direkt hinter jedem Widerstand ab.
  - Die Spannung an einem Widerstand ist der Potentialabfall darin. Ein Volt bedeutet ein Joule pro Coulomb.
gefuehrt:
  - text: Welches Potential hat die Ladung direkt vor $R_1$ (in V)?
    teil: { typ: zahl, loesung: "9" }
    erklaerung: Vom Pluspol bis $R_1$ führt ein Draht. Das Potential bleibt $9\,\text{V}$.
  - text: Welches Potential hat sie direkt hinter $R_1$ (in V)?
    teil: { typ: zahl, loesung: "3" }
    erklaerung: Das Diagramm zeigt hinter dem ersten Abfall $3\,\text{V}$.
  - text: Wie groß ist also die Spannung an $R_1$ (in V)?
    teil: { typ: zahl, loesung: "6" }
    erklaerung: '$U_1 = 9\,\text{V} - 3\,\text{V} = 6\,\text{V}$.'
  - text: Überlege, wie groß dann die Spannung an $R_2$ sein muss, damit die Ladung bei $0\,\text{V}$ ankommt.
    erklaerung: 'Von $3\,\text{V}$ auf $0\,\text{V}$, also $U_2 = 3\,\text{V}$. Zusammen ergeben $6\,\text{V} + 3\,\text{V}$ die $9\,\text{V}$ der Batterie.'
loesung: |
  **Ansatz:** Die Spannung an einem Bauteil ist der Potentialunterschied zwischen seinen Anschlüssen. Wir lesen die Potentiale vor und hinter jedem Widerstand ab.
  ---
  **a)** Vor $R_1$: $9\,\text{V}$, hinter $R_1$: $3\,\text{V}$. Also $U_1 = 9\,\text{V} - 3\,\text{V} = 6\,\text{V}$.
  ---
  **b)** Vor $R_2$: $3\,\text{V}$, dahinter $0\,\text{V}$. Also $U_2 = 3\,\text{V}$. Probe: $6\,\text{V} + 3\,\text{V} = 9\,\text{V}$, die Spannung der Batterie.
  ---
  **c)** $1\,\text{V} = 1\,\text{J/C}$. In $R_1$ gibt jedes Coulomb also $6\,\text{J}$ ab. Weil durch beide Widerstände derselbe Strom fließt, setzt $R_1$ doppelt so viel Energie um wie $R_2$.
```

```aufgabe
id: p13-kreis-begruenden
titel: Begründe, dass der Strom nicht verbraucht wird
niveau: 2
lernziel: 1
kompetenz: begruenden
angabe: |
  Begründe in drei bis vier Sätzen, warum der Strom vor und hinter einer Lampe gleich groß ist. Sage auch, was in der Lampe tatsächlich „verbraucht“ wird.
teile:
  - typ: text
    muster: |
      Strom ist Ladung pro Zeit. Ladung bleibt erhalten, sie kann in der Lampe weder verschwinden noch sich dort dauerhaft anhäufen. Deshalb fließt jede Sekunde genauso viel Ladung aus der Lampe heraus, wie hineinfließt, also ist der Strom vor und hinter der Lampe gleich. Umgewandelt wird Energie: Jedes Coulomb gibt in der Lampe so viele Joule ab, wie die Spannung an der Lampe in Volt beträgt, und diese Energie wird zu Licht und Wärme.
hinweise:
  - Welcher Erhaltungssatz gilt für Ladung?
  - Was bedeutet die Spannung an der Lampe für jedes Coulomb, das hindurchfließt?
loesung: |
  **Ansatz:** Strom ist Ladung pro Zeit, und Ladung bleibt erhalten.
  ---
  Würde hinter der Lampe weniger Ladung herauskommen, müsste sie sich in der Lampe sammeln. Die Lampe würde sich immer weiter aufladen. Das geschieht nicht, also ist der Strom vor und hinter der Lampe gleich.
  ---
  „Verbraucht“, genauer umgewandelt, wird die Energie der Ladung: pro Coulomb $U$ Joule, in Licht und Wärme.
```

```aufgabe
id: p13-kreis-handyladen
titel: Ladung und Energie beim Handyladen
niveau: 3
lernziel: 1
kompetenz: modellieren
angabe: |
  Ein Ladegerät liefert $1{,}5$ Stunden lang den Strom $2{,}0\,\text{A}$ bei der Spannung $5{,}0\,\text{V}$.

  a) Welche Ladung fließt durch das Kabel ins Handy hinein (in C)?

  b) Welche Energie gibt das Ladegerät ab? Gib sie in Wattstunden an ($1\,\text{Wh} = 3600\,\text{J}$).

  c) Wie viel Energie bringt jedes einzelne Elektron mit? Gib das Ergebnis in Elektronvolt an.
teile:
  - typ: zahl
    label: a) Q in C
    loesung: "2.0*1.5*3600"
    einheit: "C"
    anzeige: '10800'
  - typ: zahl
    label: b) W in Wh
    loesung: "2.0*1.5*3600*5.0/3600"
    einheit: "Wh"
    anzeige: '15'
  - typ: zahl
    label: c) Energie pro Elektron in eV
    loesung: "5.0"
    einheit: "eV"
    anzeige: '5{,}0'
hinweise:
  - 'Ladung $Q = I\cdot t$ mit $t$ in Sekunden, Energie $W = Q\cdot U$.'
  - 'Für c): Ein Elektron, das die Spannung $1\,\text{V}$ durchläuft, gibt $1\,\text{eV}$ ab. Diese Einheit kennst du aus Kapitel 12.'
loesung: |
  **a) Ladung:** $t = 1{,}5\cdot 3600\,\text{s} = 5400\,\text{s}$, also $Q = I\cdot t = 2{,}0\,\tfrac{\text{C}}{\text{s}}\cdot 5400\,\text{s} = 10\,800\,\text{C}$. Durch das zweite Kabel fließt genauso viel Ladung zurück.
  ---
  **b) Energie:** $W = Q\cdot U = 10\,800\,\text{C}\cdot 5{,}0\,\text{V} = 54\,000\,\text{J}$. Geteilt durch $3600\,\text{J/Wh}$ sind das $15\,\text{Wh}$.
  ---
  **c) Pro Elektron:** Jedes Elektron durchläuft die Spannung $5{,}0\,\text{V}$ und gibt dabei $5{,}0\,\text{eV}$ ab, siehe [Kapitel 12, Feldstärke, Spannung und Potential im homogenen Feld](/lernen/physik1/elektrostatik/feldstaerke-spannung-und-potential-im-homogenen-feld). Probe: $N = Q/e = 6{,}74\cdot 10^{22}$ Elektronen mal $5{,}0\cdot 1{,}602\cdot 10^{-19}\,\text{J} = 54\,000\,\text{J}$.
```

## Widerstand, Ohmsches Gesetz und Kennlinien

```aufgabe
id: p13-3-check
art: check
titel: "Vorwissen: Was heißt proportional?"
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Eine Größe $y$ ist proportional zu einer Größe $x$, also $y = k\cdot x$ mit einer festen Zahl $k$. Wie sieht der Graph von $y$ über $x$ aus?

  Herkunft: [Mathematik, Lineare Funktionen](/lernen/mathe3/funktionen/lineare-funktionen)
teile:
  - typ: auswahl
    optionen:
      - "Eine Gerade durch den Ursprung."
      - "Eine Gerade, die die $y$-Achse irgendwo oberhalb des Ursprungs schneidet."
      - "Eine Kurve, die immer flacher wird."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Bei $x = 0$ ist $y = k\cdot 0 = 0$. Der Graph muss also durch den Ursprung gehen. Eine Gerade mit Achsenabschnitt beschreibt einen linearen, aber keinen proportionalen Zusammenhang.
      - wert: 2
        meldung: |
          Bei einer festen Zahl $k$ wächst $y$ bei jedem Schritt in $x$ um denselben Betrag. Der Graph ist deshalb gerade und nicht gekrümmt.
hinweise:
  - Setze $x = 0$ ein. Was kommt für $y$ heraus?
loesung: |
  Für $x = 0$ ist $y = 0$, der Graph geht durch den Ursprung.
  ---
  Weil $k$ fest ist, wächst $y$ gleichmäßig: Der Graph ist eine Ursprungsgerade mit der Steigung $k$.
```

Schließt man verschiedene Bauteile an dieselbe Batterie an, fließen verschieden große Ströme. Durch
einen dünnen langen Draht fließt wenig, durch einen dicken kurzen viel. Das Bauteil „wehrt sich“
unterschiedlich stark gegen den Strom. Dieses Verhalten beschreibt der **elektrische Widerstand**.

**Worum geht es in einem Satz?** Der Widerstand sagt, wie viel Spannung man braucht, um einen
bestimmten Strom durch ein Bauteil zu treiben.

:::definition[Elektrischer Widerstand]
Der **Widerstand** $R$ eines Bauteils ist die Spannung $U$ am Bauteil geteilt durch den Strom $I$, der
hindurchfließt:
$$R = \frac{U}{I}, \qquad [R] = \Omega\ (\text{Ohm}), \qquad 1\,\Omega = 1\,\frac{\text{V}}{\text{A}}.$$
Das Zeichen $\Omega$ ist der griechische Großbuchstabe Omega. Den Kehrwert $G = 1/R$ nennt man
**Leitwert**, seine Einheit ist das Siemens ($1\,\text{S} = 1\,\text{A/V}$).
:::

:::beispiel[Widerstand eines Lötkolbens]
An einem Lötkolben liegen $230\,\text{V}$, es fließen $0{,}20\,\text{A}$. Sein Widerstand ist
$R = \dfrac{230\,\text{V}}{0{,}20\,\text{A}} = 1150\,\Omega$. Man bräuchte also $1150\,\text{V}$ für jedes
Ampere, das hindurchfließen soll.
:::

**Nichtbeispiel:** Fließt durch ein Bauteil kein Strom, weil der Kreis offen ist, dann ist sein
Widerstand deshalb **nicht** null. Bei $I = 0$ kann man $R = U/I$ gar nicht bilden. Der Widerstand ist eine
Eigenschaft des Bauteils und bleibt auch ohne Strom bestehen.

**Woher kommt der Widerstand?** Die Leitungselektronen stoßen auf ihrem Weg immer wieder mit den
schwingenden Atomrümpfen und mit Fehlstellen im Kristall zusammen. Dabei geben sie Energie an das
Gitter ab, der Leiter wird warm. Je häufiger diese Stöße, desto größer der Widerstand.

### Das Ohmsche Gesetz

Georg Simon Ohm untersuchte 1826 Metalldrähte. Er fand: Verdoppelt man die Spannung, verdoppelt sich der
Strom. Der Widerstand $U/I$ bleibt dabei gleich, solange sich die Temperatur nicht ändert.

:::satz[Ohmsches Gesetz]
Für einen **ohmschen Leiter** ist der Widerstand konstant, er hängt weder von der Spannung noch vom Strom
ab. Dann ist der Strom proportional zur Spannung:
$$U = R\cdot I \qquad\text{mit } R = \text{konstant}.$$
Die Kennlinie im $I$-$U$-Diagramm (Spannung nach rechts, Strom nach oben) ist eine Ursprungsgerade mit
der Steigung $1/R$.
:::

Hier lauert eine Begriffsfalle. $R = U/I$ ist eine **Definition**. Sie gilt für jedes Bauteil, auch für
eine Glühlampe. Das **Ohmsche Gesetz** ist die zusätzliche Aussage, dass dieser Quotient **konstant**
ist. Das gilt nur für bestimmte Bauteile, etwa Metalldrähte bei gleicher Temperatur.

Die **Kennlinie** eines Bauteils ist der Graph des Stroms über der Spannung. Man misst sie mit der
folgenden Schaltung: Eine regelbare Quelle liefert verschiedene Spannungen. Ein Strommesser liegt im
Kreis, ein Spannungsmesser direkt an den Anschlüssen des Bauteils.

```plot
x: [0.5, 13]
y: [-0.8, 7.2]
gleich: true
hoehe: 330
achsen: { x: " ", y: " " }
graphen:
  - { f: "3.32", von: 1.05, bis: 1.95, farbe: 3, label: "regelbare Quelle" }
  - { f: "3.08", von: 1.3, bis: 1.7, farbe: 3 }
  - { f: "3.7", von: 7.32, bis: 7.68, farbe: 0, label: "Bauteil" }
  - { f: "2.7", von: 7.32, bis: 7.68, farbe: 0 }
kurven:
  - { x: "4 + 0.32*cos(t)", y: "5.2 + 0.32*sin(t)", t: [0, "2*pi"], farbe: 2 }
  - { x: "10 + 0.32*cos(t)", y: "3.2 + 0.32*sin(t)", t: [0, "2*pi"], farbe: 2 }
strecken:
  - { von: [1.5, 1.2], nach: [1.5, 3.08] }
  - { von: [1.5, 3.32], nach: [1.5, 5.2] }
  - { von: [1.3, 3.06], nach: [1.7, 3.06], farbe: 3 }
  - { von: [1.5, 5.2], nach: [3.68, 5.2] }
  - { von: [3.89, 5.03], nach: [4, 5.37], farbe: 2 }
  - { von: [4, 5.37], nach: [4.11, 5.03], farbe: 2 }
  - { von: [3.945, 5.18], nach: [4.055, 5.18], farbe: 2 }
  - { von: [4.32, 5.2], nach: [7.5, 5.2] }
  - { von: [7.5, 1.2], nach: [7.5, 2.7] }
  - { von: [7.5, 3.7], nach: [7.5, 5.2] }
  - { von: [7.32, 2.7], nach: [7.32, 3.7], farbe: 0 }
  - { von: [7.68, 2.7], nach: [7.68, 3.7], farbe: 0 }
  - { von: [7.5, 1.2], nach: [1.5, 1.2] }
  - { von: [7.5, 5.2], nach: [10, 5.2] }
  - { von: [10, 5.2], nach: [10, 3.52] }
  - { von: [9.89, 3.37], nach: [10, 3.03], farbe: 2 }
  - { von: [10, 3.03], nach: [10.11, 3.37], farbe: 2 }
  - { von: [10, 2.88], nach: [10, 1.2] }
  - { von: [10, 1.2], nach: [7.5, 1.2] }
punkte:
  - { x: 4.226, y: 5.426, label: "Strommesser", farbe: 2, offen: true }
  - { x: 10.226, y: 3.426, label: "Spannungsmesser", farbe: 2, offen: true }
  - { x: 7.5, y: 5.2, farbe: 0 }
  - { x: 7.5, y: 1.2, farbe: 0 }
beschriftung: "Messschaltung für eine Kennlinie. Der Strommesser liegt in der Leitung, damit der ganze Strom durch ihn fließt. Der Spannungsmesser ist an die beiden Anschlüsse des Bauteils angeschlossen, denn er misst den Potentialunterschied zwischen diesen zwei Punkten."
```

:::beispiel[Eine Messreihe mit Unsicherheit auswerten]
An einem Draht aus **Konstantan** werden vier Wertepaare gemessen. Konstantan ist eine Legierung aus
Kupfer und Nickel, deren Widerstand sich mit der Temperatur kaum ändert. Die Messwerte: $(2{,}0\,\text{V} \mid 41\,\text{mA})$,
$(4{,}0\,\text{V} \mid 80\,\text{mA})$, $(6{,}0\,\text{V} \mid 121\,\text{mA})$ und $(8{,}0\,\text{V} \mid 160\,\text{mA})$.

**Schritt 1, Widerstand für jedes Paar:** $R = U/I$, mit $I$ in Ampere. Das ergibt $48{,}8\,\Omega$,
$50{,}0\,\Omega$, $49{,}6\,\Omega$ und $50{,}0\,\Omega$.

**Schritt 2, Mittelwert:** $\bar R = \tfrac14\,(48{,}8 + 50{,}0 + 49{,}6 + 50{,}0)\,\Omega = 49{,}6\,\Omega$.

**Schritt 3, Unsicherheit:** Bei wenigen Werten schätzt man sie als halbe Spannweite, also
$\tfrac12\,(50{,}0 - 48{,}8)\,\Omega = 0{,}6\,\Omega$. Ergebnis: $R = (49{,}6 \pm 0{,}6)\,\Omega$.

**Deutung:** Die Einzelwerte schwanken nur um gut $1\,\Omega$, also um rund $2\,\%$. Sie werden mit
wachsender Spannung weder größer noch kleiner, es gibt keinen Trend. Der Draht ist im Rahmen der
Messgenauigkeit ein ohmscher Leiter.
Mehr zur Messunsicherheit findest du in
[Kapitel 1, Messunsicherheit und signifikante Stellen](/lernen/physik1/groessen-einheiten-messen/messunsicherheit-und-signifikante-stellen).
:::

:::achtung[Fehler: Die Steigung für den Widerstand gehalten]
**Falsche Rechnung:** „Die Kennlinie im $I$-$U$-Diagramm steigt um $0{,}020\,\text{A}$ pro Volt. Also ist
$R = 0{,}020\,\Omega$.“

**Richtig:** Im $I$-$U$-Diagramm steht der Strom nach oben. Die Steigung ist $\Delta I/\Delta U = 1/R$.
Der Widerstand ist ihr Kehrwert: $R = 1/(0{,}020\,\text{A/V}) = 50\,\Omega$. Prüfe vor dem Ablesen immer,
welche Größe auf welcher Achse steht. Liegt $U$ auf der senkrechten Achse, ist die Steigung direkt $R$.
:::

```aufgabe
id: p13-ohm-basis
titel: Strom durch einen Heizwiderstand
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Ein Heizwiderstand mit $46\,\Omega$ liegt an $230\,\text{V}$. Welcher Strom fließt (in A)?
teile:
  - typ: zahl
    loesung: "230/46"
    einheit: "A"
    anzeige: '5{,}0'
    fehler:
      - wert: "230*46"
        meldung: |
          Aus $R = U/I$ folgt $I = U/R$. Die Spannung wird durch den Widerstand **geteilt**. Sonst käme ein riesiger Strom heraus, der jede Sicherung auslöst.
      - wert: "46/230"
        meldung: |
          Du hast Widerstand durch Spannung gerechnet. Richtig ist $I = U/R$, Spannung durch Widerstand.
hinweise:
  - 'Stelle $R = U/I$ nach $I$ um.'
loesung: |
  **Ansatz:** Aus der Definition $R = U/I$ folgt durch Umstellen $I = \dfrac{U}{R}$.
  ---
  $I = \dfrac{230\,\text{V}}{46\,\Omega} = 5{,}0\,\text{A}$, denn $\text{V}/\Omega = \text{A}$.
```

```aufgabe
id: p13-ohm-spannung
titel: Spannung an einem Widerstand
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Durch einen Widerstand mit $220\,\Omega$ fließen $25\,\text{mA}$. Welche Spannung liegt an ihm (in V)?
teile:
  - typ: zahl
    loesung: "220*0.025"
    einheit: "V"
    anzeige: '5{,}5'
    fehler:
      - wert: "220*25"
        meldung: |
          Der Strom muss in Ampere stehen: $25\,\text{mA} = 0{,}025\,\text{A}$. Sonst ist das Ergebnis tausendmal zu groß.
      - wert: "220/0.025"
        meldung: |
          Aus $R = U/I$ folgt $U = R\cdot I$. Es wird multipliziert, nicht geteilt.
hinweise:
  - '$U = R\cdot I$, mit $I$ in Ampere.'
loesung: |
  **Ansatz:** Aus $R = U/I$ folgt $U = R\cdot I$. Milli heißt $10^{-3}$, also $I = 0{,}025\,\text{A}$.
  ---
  $U = 220\,\Omega\cdot 0{,}025\,\text{A} = 5{,}5\,\text{V}$, denn $\Omega\cdot\text{A} = \text{V}$.
```

```aufgabe
id: p13-kennlinie
titel: Widerstand aus einer Kennlinie
niveau: 1
lernziel: 2
kompetenz: anwenden
angabe: |
  Die Kennlinie eines Widerstands ist eine Ursprungsgerade durch den Punkt $U = 8{,}0\,\text{V}$, $I = 40\,\text{mA}$.

  a) Wie groß ist der Widerstand (in Ω)?

  b) Welcher Strom fließt bei $3{,}0\,\text{V}$ (in mA)?
plot:
  x: [0, 10]
  y: [0, 50]
  achsen: { x: "U in V", y: "I in mA" }
  graphen:
    - { f: "5*x", farbe: 0 }
  punkte:
    - { x: 8, y: 40, label: "(8 V | 40 mA)" }
teile:
  - typ: zahl
    label: a) R in Ω
    loesung: "8.0/0.040"
    einheit: "Ω"
    anzeige: '200'
    fehler:
      - wert: "8.0/40"
        meldung: |
          Der Strom muss in Ampere stehen: $40\,\text{mA} = 0{,}040\,\text{A}$. Mit Milliampere kommt Kiloohm heraus, nicht Ohm.
      - wert: "0.040/8.0"
        meldung: |
          Das ist $I/U$, die Steigung der Kennlinie, also $1/R$. Der Widerstand ist der Kehrwert.
  - typ: zahl
    label: b) I bei 3 V in mA
    loesung: "3.0/200*1000"
    einheit: "mA"
    anzeige: '15'
    fehler:
      - wert: "3.0/200"
        meldung: |
          $3{,}0/200 = 0{,}015$ ist der Strom in **Ampere**. Gefragt ist Milliampere, also mal $1000$.
hinweise:
  - 'Lies ein Wertepaar ab und rechne $R = U/I$ mit $I$ in Ampere.'
loesung: |
  **a)** Die Kennlinie ist eine Ursprungsgerade, das Bauteil ist ohmsch. $R = \dfrac{U}{I} = \dfrac{8{,}0\,\text{V}}{0{,}040\,\text{A}} = 200\,\Omega$.
  ---
  **b)** $I = \dfrac{U}{R} = \dfrac{3{,}0\,\text{V}}{200\,\Omega} = 0{,}015\,\text{A} = 15\,\text{mA}$. Probe am Graphen: Bei $3\,\text{V}$ liegt die Gerade bei $15\,\text{mA}$.
```

### Nicht-ohmsche Bauteile: die Glühlampe

Viele Bauteile gehorchen dem Ohmschen Gesetz **nicht**. Das bekannteste Beispiel ist die Glühlampe. Ihr
Glühdraht wird beim Betrieb über $2000\,^\circ\text{C}$ heiß. Je heißer ein Metall ist, desto stärker
schwingen seine Atomrümpfe, und desto häufiger stoßen die Elektronen mit ihnen zusammen. Der Widerstand
steigt deshalb mit der Spannung. Die Kennlinie wird nach rechts immer flacher.

:::beispiel[Der Widerstand einer Glühlampe an zwei Punkten]
An einer kleinen Glühlampe misst man bei $1{,}0\,\text{V}$ den Strom $0{,}10\,\text{A}$ und bei $6{,}0\,\text{V}$
den Strom $0{,}30\,\text{A}$.

**Schritt 1, kleine Spannung:** $R = \dfrac{1{,}0\,\text{V}}{0{,}10\,\text{A}} = 10\,\Omega$.

**Schritt 2, große Spannung:** $R = \dfrac{6{,}0\,\text{V}}{0{,}30\,\text{A}} = 20\,\Omega$.

**Deutung:** Die sechsfache Spannung liefert nur den dreifachen Strom. Der Widerstand hat sich
verdoppelt, weil der Draht heißer ist. Die Lampe ist **kein** ohmscher Leiter. Trotzdem darf man an
jedem Punkt $R = U/I$ berechnen, denn das ist nur die Definition.
:::

```plot
x: [0, 8]
y: [0, 0.4]
achsen: { x: "U in V", y: "I in A" }
graphen:
  - { f: "x/50", label: "Konstantan", farbe: 0 }
  - { f: "0.1*x^0.6131", label: "Glühlampe", farbe: 1 }
punkte:
  - { x: 1, y: 0.1, label: "10 Ω" }
  - { x: 6, y: 0.3, label: "20 Ω" }
beschriftung: "Kennlinien im I-U-Diagramm. Der Konstantandraht ist ohmsch, seine Kennlinie ist eine Ursprungsgerade. Die Kennlinie der Glühlampe wird immer flacher, weil ihr Widerstand mit der Temperatur steigt. Markiert sind die beiden Messpunkte aus dem Beispiel."
```

:::achtung[Fehler: Einen Widerstand auf eine andere Spannung übertragen]
**Falsche Rechnung:** „Die Lampe hat bei $6{,}0\,\text{V}$ den Widerstand $20\,\Omega$. Bei $1{,}0\,\text{V}$
fließen also $1{,}0\,\text{V}/20\,\Omega = 0{,}050\,\text{A}$.“

**Richtig:** Bei einem nicht-ohmschen Bauteil gilt der Widerstand nur für den Punkt, an dem man ihn
gemessen hat. Bei $1{,}0\,\text{V}$ ist der Draht kälter, sein Widerstand ist nur $10\,\Omega$. Es fließen
$0{,}10\,\text{A}$, doppelt so viel. Den Strom eines nicht-ohmschen Bauteils liest man an der Kennlinie
ab, statt ihn mit einem festen $R$ zu berechnen.
:::

Weitere nicht-ohmsche Bauteile sind **Dioden** und **Leuchtdioden**. Ihre Kennlinie verläuft bis zu einer
Schwellenspannung fast waagrecht bei null und steigt dann sehr steil an. Mehr dazu in der Lektion
[13.12 Dotierung, Diode, LED, Solarzelle und Transistor](/lernen/physik1/gleichstrom/dotierung-diode-led-solarzelle-und-transistor).

```reflexion
frage: Ein Freund sagt „Das Ohmsche Gesetz ist einfach R = U/I, und das gilt immer.“ Was stimmt daran, und was nicht?
antwort: |
  $R = U/I$ gilt tatsächlich immer, aber es ist nur die **Definition** des Widerstands. Das **Ohmsche Gesetz** sagt mehr: Bei bestimmten Bauteilen, etwa Metalldrähten bei gleicher Temperatur, ist dieser Quotient konstant. Dann ist der Strom proportional zur Spannung, und die Kennlinie ist eine Ursprungsgerade. Bei einer Glühlampe oder einer Diode ändert sich $U/I$ mit der Spannung. Diese Bauteile kann man mit $R = U/I$ an einem Punkt beschreiben, aber sie gehorchen nicht dem Ohmschen Gesetz.
```

```aufgabe
id: p13-ohmsch-oder-nicht
titel: Ohmsch oder nicht?
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  Welche Bauteile sind (näherungsweise) **ohmsche** Leiter? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Ein Konstantandraht bei Zimmertemperatur."
      - "Eine Glühlampe vom Einschalten bis zum vollen Leuchten."
      - "Eine Leuchtdiode."
      - "Ein Metallschichtwiderstand in einer Schaltung, der kaum warm wird."
      - "Ein Heißleiter (ein Temperaturfühler aus Halbleitermaterial), der sich durch den eigenen Strom erwärmt."
    richtig: [0, 3]
    fehler:
      - wert: [0, 1, 3]
        meldung: |
          Der Glühdraht wird beim Einschalten sehr heiß. Sein Widerstand steigt dabei auf ein Vielfaches. $U/I$ ist also nicht konstant.
      - wert: [0, 3, 4]
        meldung: |
          Ein Heißleiter ändert seinen Widerstand mit der Temperatur besonders stark, sein Widerstand **sinkt** beim Erwärmen. Erwärmt er sich durch den Strom, ist $U/I$ nicht konstant.
      - wert: [0, 2, 3]
        meldung: |
          Eine Leuchtdiode lässt unterhalb ihrer Schwellenspannung praktisch keinen Strom durch, oberhalb steigt der Strom sehr steil. Ihre Kennlinie ist keine Ursprungsgerade.
hinweise:
  - Ohmsch heißt, dass $U/I$ bei jeder Spannung gleich bleibt.
  - Bei welchen Bauteilen ändert sich die Temperatur stark, und welche sind Halbleiter?
loesung: |
  **Ansatz:** Ohmsch ist ein Bauteil, dessen Widerstand $U/I$ nicht von Spannung und Strom abhängt.
  ---
  Konstantan und Metallschichtwiderstände haben einen fast konstanten Widerstand, solange sie kaum warm werden. Sie sind ohmsch.
  ---
  Glühlampe (Widerstand steigt beim Erwärmen), Heißleiter (Widerstand sinkt beim Erwärmen) und Leuchtdiode (Schwellenspannung, dann steiler Anstieg) sind nicht-ohmsch.
```

```aufgabe
id: p13-kennlinie-lampe
titel: Die Kennlinie einer Glühlampe lesen
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Das Diagramm zeigt die Kennlinie einer Autolampe. Zwei Punkte sind markiert.

  a) Berechne den Widerstand der Lampe bei $2{,}0\,\text{V}$ (in Ω).

  b) Berechne ihren Widerstand bei $12\,\text{V}$ (in Ω).
plot:
  x: [0, 14]
  y: [0, 0.4]
  achsen: { x: "U in V", y: "I in A" }
  graphen:
    - { f: "0.06538*x^0.6131", farbe: 1 }
  punkte:
    - { x: 2, y: 0.1, label: "(2 V | 0,10 A)" }
    - { x: 12, y: 0.3, label: "(12 V | 0,30 A)" }
teile:
  - typ: zahl
    label: a) R bei 2 V in Ω
    loesung: "2.0/0.10"
    einheit: "Ω"
    anzeige: '20'
    fehler:
      - wert: "0.10/2.0"
        meldung: |
          Das ist $I/U$. Der Widerstand ist $R = U/I$, Spannung durch Strom.
  - typ: zahl
    label: b) R bei 12 V in Ω
    loesung: "12/0.30"
    einheit: "Ω"
    anzeige: '40'
    fehler:
      - wert: "2.0/0.10"
        meldung: |
          Das ist der Widerstand bei $2\,\text{V}$. Die Lampe ist nicht ohmsch, bei $12\,\text{V}$ gilt ein anderer Wert. Lies den zweiten Punkt ab.
      - wert: "(12-2.0)/(0.30-0.10)"
        meldung: |
          Du hast die Steigung zwischen den beiden Punkten berechnet. Der Widerstand an einem Punkt ist aber $U/I$ an genau diesem Punkt, gemessen vom Ursprung aus.
hinweise:
  - 'Für jeden Punkt einzeln: $R = U/I$.'
  - Warum dürfen die beiden Werte verschieden sein? Denk an die Temperatur des Glühdrahts.
loesung: |
  **Ansatz:** Die Lampe ist nicht ohmsch. Wir berechnen den Widerstand an jedem Punkt einzeln mit der Definition $R = U/I$.
  ---
  **a)** $R = \dfrac{2{,}0\,\text{V}}{0{,}10\,\text{A}} = 20\,\Omega$.
  ---
  **b)** $R = \dfrac{12\,\text{V}}{0{,}30\,\text{A}} = 40\,\Omega$. Der Widerstand hat sich verdoppelt, weil der Glühdraht bei $12\,\text{V}$ viel heißer ist.
```

```aufgabe
id: p13-ohm-fehler-finden
titel: Fehler finden im U-I-Diagramm
niveau: 2
lernziel: 2
kompetenz: begruenden
angabe: |
  Im Diagramm steht der Strom $I$ nach rechts und die Spannung $U$ nach oben. Die Kennlinie eines Widerstands geht durch den Ursprung und den Punkt $(0{,}25\,\text{A} \mid 5{,}0\,\text{V})$. Eine Mitschülerin rechnet: „Die Steigung ist $5{,}0/0{,}25 = 20$. Die Steigung einer Kennlinie ist $1/R$, also ist $R = 1/20 = 0{,}05\,\Omega$.“ Wie groß ist der Widerstand wirklich (in Ω)?
plot:
  x: [0, 0.35]
  y: [0, 7]
  achsen: { x: "I in A", y: "U in V" }
  graphen:
    - { f: "20*x", farbe: 0 }
  punkte:
    - { x: 0.25, y: 5, label: "(0,25 A | 5,0 V)" }
teile:
  - typ: zahl
    loesung: "5.0/0.25"
    einheit: "Ω"
    anzeige: '20'
    fehler:
      - wert: "0.05"
        meldung: |
          Genau das ist der Fehler der Mitschülerin. „Steigung gleich $1/R$“ gilt nur, wenn der **Strom** nach oben aufgetragen ist. Hier steht die Spannung nach oben.
hinweise:
  - Welche Größe steht hier auf der senkrechten Achse?
  - 'Die Steigung ist hier $\Delta U/\Delta I$. Vergleiche mit der Definition $R = U/I$.'
loesung: |
  **Ansatz:** Hier steht $U$ nach oben und $I$ nach rechts. Die Steigung ist also $\Delta U/\Delta I$.
  ---
  Für eine Ursprungsgerade ist $\Delta U/\Delta I = U/I = R$. Die Steigung ist hier direkt der Widerstand, nicht sein Kehrwert.
  ---
  $R = \dfrac{5{,}0\,\text{V}}{0{,}25\,\text{A}} = 20\,\Omega$. Der Fehler der Mitschülerin: Sie hat eine Regel für das $I$-$U$-Diagramm auf ein $U$-$I$-Diagramm übertragen.
```

```aufgabe
id: p13-ohm-proportional
titel: Was passiert, wenn man die Spannung verändert?
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  Welche Aussagen sind richtig? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Verdreifacht man die Spannung an einem ohmschen Widerstand, verdreifacht sich der Strom."
      - "Verdoppelt man bei gleicher Spannung den Widerstand, halbiert sich der Strom."
      - "Verdoppelt man die Spannung an einer Glühlampe, verdoppelt sich auch ihr Strom."
      - "Verdoppelt man die Spannung an einem ohmschen Widerstand, verdoppelt sich sein Widerstand."
    richtig: [0, 1]
    fehler:
      - wert: [0, 1, 2]
        meldung: |
          Bei der Glühlampe steigt mit der Spannung auch die Temperatur und damit der Widerstand. Der Strom wächst deshalb **weniger** als auf das Doppelte.
      - wert: [0, 1, 3]
        meldung: |
          Bei einem ohmschen Widerstand ist $R$ gerade **konstant**. Mehr Spannung bedeutet mehr Strom, aber derselbe Widerstand.
hinweise:
  - 'Für ohmsche Bauteile gilt $I = U/R$ mit festem $R$.'
  - Was ändert sich bei einer Glühlampe, wenn mehr Strom fließt?
loesung: |
  **Ansatz:** Für einen ohmschen Widerstand gilt $I = U/R$ mit festem $R$. Dreifache Spannung heißt dreifacher Strom, doppelter Widerstand halber Strom. Aussagen 1 und 2 sind richtig.
  ---
  Aussage 4 ist falsch, denn beim ohmschen Widerstand ändert sich $R$ gerade nicht.
  ---
  Aussage 3 ist falsch: Die Glühlampe wird heißer, ihr Widerstand steigt, und der Strom wächst weniger als auf das Doppelte.
```

```aufgabe
id: p13-ohm-messreihe
titel: Widerstand aus einer Messreihe mit Unsicherheit
niveau: 3
lernziel: 2
kompetenz: anwenden
angabe: |
  An einem unbekannten Widerstand werden vier Wertepaare gemessen: $(1{,}5\,\text{V} \mid 31\,\text{mA})$, $(3{,}0\,\text{V} \mid 59\,\text{mA})$, $(4{,}5\,\text{V} \mid 92\,\text{mA})$ und $(6{,}0\,\text{V} \mid 119\,\text{mA})$.

  a) Berechne den Mittelwert der vier Widerstände (in Ω, auf eine Nachkommastelle).

  b) Schätze die Unsicherheit als halbe Spannweite der vier Werte (in Ω).

  c) Ist der Widerstand im Rahmen der Messgenauigkeit ohmsch?
teile:
  - typ: zahl
    label: a) mittleres R in Ω
    loesung: "(1.5/0.031+3.0/0.059+4.5/0.092+6.0/0.119)/4"
    toleranz: 0.2
    einheit: "Ω"
    anzeige: '49{,}6'
  - typ: zahl
    label: b) Unsicherheit in Ω
    loesung: "(3.0/0.059-1.5/0.031)/2"
    toleranz: 0.1
    einheit: "Ω"
    anzeige: '1{,}2'
  - typ: auswahl
    label: c)
    optionen:
      - "Ja, alle Werte liegen innerhalb der Unsicherheit beim Mittelwert."
      - "Nein, denn die vier Werte sind nicht genau gleich."
    richtig: [0]
hinweise:
  - 'Berechne für jedes Paar $R = U/I$, mit $I$ in Ampere.'
  - 'Mittelwert: Summe durch $4$. Halbe Spannweite: (größter Wert minus kleinster Wert) durch $2$.'
gefuehrt:
  - text: Berechne $R$ für das erste Paar $(1{,}5\,\text{V} \mid 31\,\text{mA})$ (in Ω).
    teil: { typ: zahl, loesung: "1.5/0.031", toleranz: 0.1 }
    erklaerung: '$R_1 = 1{,}5\,\text{V}/0{,}031\,\text{A} = 48{,}4\,\Omega$. Die anderen drei ergeben $50{,}8\,\Omega$, $48{,}9\,\Omega$ und $50{,}4\,\Omega$.'
  - text: Bilde den Mittelwert der vier Werte (in Ω).
    teil: { typ: zahl, loesung: "(48.4+50.8+48.9+50.4)/4", toleranz: 0.2 }
    erklaerung: '$\bar R = 198{,}5\,\Omega/4 = 49{,}6\,\Omega$.'
  - text: Wie groß ist die halbe Spannweite (in Ω)?
    teil: { typ: zahl, loesung: "(50.8-48.4)/2", toleranz: 0.1 }
    erklaerung: 'Größter Wert $50{,}8\,\Omega$, kleinster $48{,}4\,\Omega$, also $\tfrac12\cdot 2{,}4\,\Omega = 1{,}2\,\Omega$.'
  - text: Überlege, ob die Abweichungen gegen das Ohmsche Gesetz sprechen.
    erklaerung: Alle Werte liegen im Bereich $49{,}6 \pm 1{,}2\,\Omega$. Die Schwankungen sind Messunsicherheit, kein Trend. Der Widerstand ist ohmsch.
loesung: |
  **Ansatz:** Für jedes Wertepaar $R = U/I$ berechnen, dann Mittelwert und halbe Spannweite bilden.
  ---
  **Einzelwerte:** $\dfrac{1{,}5\,\text{V}}{0{,}031\,\text{A}} = 48{,}4\,\Omega$, $\dfrac{3{,}0\,\text{V}}{0{,}059\,\text{A}} = 50{,}8\,\Omega$, $\dfrac{4{,}5\,\text{V}}{0{,}092\,\text{A}} = 48{,}9\,\Omega$, $\dfrac{6{,}0\,\text{V}}{0{,}119\,\text{A}} = 50{,}4\,\Omega$.
  ---
  **a)** $\bar R = \tfrac14\,(48{,}4 + 50{,}8 + 48{,}9 + 50{,}4)\,\Omega = 49{,}6\,\Omega$. **b)** $\Delta R = \tfrac12\,(50{,}8 - 48{,}4)\,\Omega = 1{,}2\,\Omega$, also $R = (49{,}6 \pm 1{,}2)\,\Omega$.
  ---
  **c)** Die Werte steigen oder fallen nicht mit der Spannung, sie schwanken nur. Alle liegen im Unsicherheitsbereich. Der Widerstand ist im Rahmen der Messgenauigkeit ohmsch.
```

## Widerstand eines Drahtes: Material, Form und Temperatur

```aufgabe
id: p13-4-check
art: check
titel: "Vorwissen: Was tun die Atome, wenn es wärmer wird?"
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  Ein Metallstück wird von $20\,^\circ\text{C}$ auf $80\,^\circ\text{C}$ erwärmt. Was geschieht mit den Atomen im Kristallgitter?

  Herkunft: [Kapitel 10, Temperatur, innere Energie und Wärme](/lernen/physik1/temperatur-waerme-gase/temperatur-innere-energie-und-waerme)
teile:
  - typ: auswahl
    optionen:
      - "Sie schwingen heftiger um ihre Plätze."
      - "Sie bleiben genau gleich, nur die Elektronen werden schneller."
      - "Sie werden selbst größer."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Temperatur ist ein Maß für die mittlere Bewegungsenergie **aller** Teilchen. Auch die Atomrümpfe im Gitter bewegen sich bei höherer Temperatur stärker.
      - wert: 2
        meldung: |
          Die Atome selbst wachsen nicht. Sie schwingen nur weiter um ihre Plätze. Deshalb dehnt sich ein Metall beim Erwärmen auch etwas aus.
hinweise:
  - Temperatur hängt mit der Bewegungsenergie der Teilchen zusammen.
loesung: |
  Höhere Temperatur bedeutet mehr mittlere Bewegungsenergie der Teilchen. Im festen Körper schwingen die Atome heftiger um ihre Plätze.
  ---
  Für den Strom heißt das: Die Elektronen stoßen häufiger mit den Atomrümpfen zusammen. Das wird gleich wichtig.
```

Ein Kabel zum Herd ist dicker als ein Kabel zur Nachttischlampe. Ein langes, dünnes Verlängerungskabel
hat einen merklich größeren Widerstand als ein kurzes, dickes. Beides hängt mit dem Widerstand des Drahtes zusammen. Er hängt von drei Dingen
ab: der Länge, dem Querschnitt und dem Material.

**Worum geht es in einem Satz?** Ein langer, dünner Draht aus einem schlecht leitenden Material hat einen
großen Widerstand, ein kurzer, dicker Draht aus Kupfer einen kleinen.

**Das Bild dazu:** Stell dir die Elektronen wie Autos auf einer Straße mit vielen Schlaglöchern vor.

- Eine **doppelt so lange** Straße hat doppelt so viele Schlaglöcher. Sie bremst doppelt so stark. Der
  Widerstand ist proportional zur Länge $l$.
- Eine Straße mit **doppelt so vielen Fahrspuren** lässt doppelt so viele Autos gleichzeitig durch. Der
  Widerstand halbiert sich. Er ist umgekehrt proportional zur Querschnittsfläche $A$.
- Das **Material** bestimmt, wie viele Schlaglöcher es pro Meter gibt. Diese Materialeigenschaft heißt
  spezifischer Widerstand $\rho$ (sprich „rho“).

:::satz[Widerstand eines Drahtes]
Ein Draht der Länge $l$ mit der Querschnittsfläche $A$ hat den Widerstand
$$R = \rho\cdot\frac{l}{A}.$$
Dabei ist $\rho$ der **spezifische Widerstand** des Materials in $\Omega\cdot\text{m}$, $l$ die Länge in m
und $A$ die Querschnittsfläche in $\text{m}^2$. Oft gibt man $\rho$ in $\Omega\,\text{mm}^2/\text{m}$ an. Es gilt
$1\,\Omega\,\text{mm}^2/\text{m} = 10^{-6}\,\Omega\,\text{m}$.
:::

| Material | $\rho$ bei 20 °C in $\Omega\,\text{m}$ | Verwendung |
|---|---|---|
| Silber | $1{,}6\cdot 10^{-8}$ | Kontakte, zu teuer für Kabel. |
| Kupfer | $1{,}7\cdot 10^{-8}$ | fast alle Kabel. |
| Aluminium | $2{,}7\cdot 10^{-8}$ | Freileitungen, weil leicht. |
| Eisen | $1{,}0\cdot 10^{-7}$ | kaum als Leiter. |
| Konstantan | $4{,}9\cdot 10^{-7}$ | Messwiderstände, Heizdrähte. |
| reines Silizium | etwa $10^{3}$ | Halbleiterbauteile. |
| Glas | $10^{10}$ bis $10^{14}$ | Isolatoren. |

Zwischen Kupfer und Glas liegen etwa 18 bis 22 Zehnerpotenzen. Kaum eine andere Materialeigenschaft
schwankt so stark.

:::beispiel[Widerstand eines Lautsprecherkabels]
Ein Lautsprecher hängt an einem $5{,}0\,\text{m}$ langen Kabel mit zwei Kupferadern von je
$0{,}75\,\text{mm}^2$ Querschnitt.

**Schritt 1, Länge:** Der Strom fließt durch die eine Ader hin und durch die andere zurück. Die
Leiterlänge ist also $l = 2\cdot 5{,}0\,\text{m} = 10\,\text{m}$.

**Schritt 2, Querschnitt in m²:** $A = 0{,}75\,\text{mm}^2 = 0{,}75\cdot 10^{-6}\,\text{m}^2$.

**Schritt 3, Einsetzen:**
$R = 1{,}7\cdot 10^{-8}\,\Omega\,\text{m}\cdot\dfrac{10\,\text{m}}{0{,}75\cdot 10^{-6}\,\text{m}^2} = 0{,}23\,\Omega$.
Die Einheiten ergeben $\Omega\,\text{m}\cdot\text{m}/\text{m}^2 = \Omega$.

**Deutung:** Ein Lautsprecher hat etwa $8\,\Omega$. Das Kabel verschluckt also nur rund drei Prozent der Spannung.
:::

:::achtung[Fehler: Quadratmillimeter nicht umgerechnet]
**Falsche Rechnung:** „$20\,\text{m}$ Kupferdraht mit $2{,}5\,\text{mm}^2$ haben
$R = 1{,}7\cdot 10^{-8}\cdot\dfrac{20}{2{,}5}\,\Omega = 1{,}4\cdot 10^{-7}\,\Omega$.“

**Richtig:** Wenn $\rho$ in $\Omega\,\text{m}$ gegeben ist, muss $A$ in $\text{m}^2$ stehen:
$2{,}5\,\text{mm}^2 = 2{,}5\cdot 10^{-6}\,\text{m}^2$. Dann ist
$R = 1{,}7\cdot 10^{-8}\cdot\dfrac{20}{2{,}5\cdot 10^{-6}}\,\Omega = 0{,}14\,\Omega$. Der falsche Wert ist eine
Million Mal zu klein. Ein Zehntel Mikroohm für $20\,\text{m}$ Kabel wäre auch unglaubwürdig.
:::

:::achtung[Fehler: Durchmesser statt Radius]
**Falsche Rechnung:** „Der Draht hat $0{,}30\,\text{mm}$ Durchmesser, also
$A = \pi\cdot(0{,}30\,\text{mm})^2 = 0{,}28\,\text{mm}^2$.“

**Richtig:** Die Kreisfläche ist $A = \pi r^2$ mit dem **Radius** $r = 0{,}15\,\text{mm}$. Also
$A = \pi\cdot(0{,}15\,\text{mm})^2 = 0{,}071\,\text{mm}^2$. Der falsche Wert ist viermal zu groß, weil der
Durchmesser doppelt so groß ist wie der Radius und quadriert wird. Man kann auch $A = \pi d^2/4$ rechnen.
:::

```aufgabe
id: p13-spez-widerstand
titel: Widerstand einer Kupferleitung
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Eine Kupferleitung ($\rho = 1{,}7\cdot 10^{-8}\,\Omega\,\text{m}$) ist insgesamt $50\,\text{m}$ lang und hat $1{,}5\,\text{mm}^2$ Querschnitt. Berechne ihren Widerstand (in Ω).
teile:
  - typ: zahl
    loesung: "1.7e-8*50/1.5e-6"
    einheit: "Ω"
    anzeige: '0{,}567'
    fehler:
      - wert: "1.7e-8*50/1.5"
        meldung: |
          Der Querschnitt muss in Quadratmetern stehen: $1{,}5\,\text{mm}^2 = 1{,}5\cdot 10^{-6}\,\text{m}^2$. Dein Ergebnis ist eine Million Mal zu klein.
      - wert: "1.7e-8*1.5e-6/50"
        meldung: |
          Länge und Querschnitt sind vertauscht. Ein **längerer** Draht hat einen größeren Widerstand, also steht $l$ im Zähler: $R = \rho\,l/A$.
hinweise:
  - '$R = \rho\,l/A$ mit $A$ in m².'
loesung: |
  **Ansatz:** $R = \rho\dfrac{l}{A}$. Zuerst die Einheit: $A = 1{,}5\,\text{mm}^2 = 1{,}5\cdot 10^{-6}\,\text{m}^2$.
  ---
  $R = 1{,}7\cdot 10^{-8}\,\Omega\,\text{m}\cdot\dfrac{50\,\text{m}}{1{,}5\cdot 10^{-6}\,\text{m}^2} = 0{,}567\,\Omega$.
```

```aufgabe
id: p13-draht-proportional
titel: Doppelter Durchmesser
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  Ein Draht wird durch einen Draht aus demselben Material ersetzt, der genauso lang ist, aber den **doppelten Durchmesser** hat. Wie ändert sich der Widerstand?
teile:
  - typ: auswahl
    optionen:
      - "Er wird ein Viertel so groß."
      - "Er wird halb so groß."
      - "Er wird doppelt so groß."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Doppelter Durchmesser heißt doppelter Radius. Die Fläche $A = \pi r^2$ wird dadurch $2^2 = 4$-mal so groß, nicht nur doppelt so groß.
      - wert: 2
        meldung: |
          Ein dickerer Draht hat mehr „Fahrspuren“ für die Elektronen. Sein Widerstand wird kleiner, nicht größer.
hinweise:
  - 'Wie ändert sich $A = \pi r^2$, wenn sich der Radius verdoppelt?'
loesung: |
  **Ansatz:** $R = \rho\,l/A$. Material und Länge bleiben gleich, $R$ ist umgekehrt proportional zu $A$.
  ---
  Doppelter Durchmesser heißt doppelter Radius, die Fläche wird $4$-mal so groß. Der Widerstand wird deshalb ein Viertel so groß.
```

```aufgabe
id: p13-draht-laenge
titel: Heizdraht zuschneiden
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Aus Konstantandraht ($\rho = 4{,}9\cdot 10^{-7}\,\Omega\,\text{m}$) mit $0{,}20\,\text{mm}$ Durchmesser soll ein Widerstand von $10\,\Omega$ werden. Wie lang muss der Draht sein (in cm)?
teile:
  - typ: zahl
    loesung: "10*pi*(0.10e-3)^2/4.9e-7*100"
    einheit: "cm"
    anzeige: '64{,}1'
    fehler:
      - wert: "10*pi*(0.20e-3)^2/4.9e-7*100"
        meldung: |
          Du hast den Durchmesser als Radius eingesetzt. Der Radius ist $0{,}10\,\text{mm}$. So wird die Fläche und damit die Länge viermal zu groß.
      - wert: "10*pi*(0.10)^2/4.9e-7*100"
        meldung: |
          Der Radius muss in Metern stehen: $0{,}10\,\text{mm} = 0{,}10\cdot 10^{-3}\,\text{m}$.
hinweise:
  - 'Querschnitt aus dem Radius: $A = \pi r^2$ mit $r = 0{,}10\,\text{mm} = 1{,}0\cdot 10^{-4}\,\text{m}$.'
  - 'Stelle $R = \rho\,l/A$ nach $l$ um: $l = R\,A/\rho$.'
gefuehrt:
  - text: Wie groß ist der Radius des Drahtes in Metern? Gib die Zahl vor $10^{-4}$ an.
    teil: { typ: zahl, loesung: "1.0" }
    erklaerung: 'Halber Durchmesser: $r = 0{,}10\,\text{mm} = 1{,}0\cdot 10^{-4}\,\text{m}$.'
  - text: Berechne die Querschnittsfläche. Gib die Zahl vor $10^{-8}\,\text{m}^2$ an.
    teil: { typ: zahl, loesung: "pi*(1.0e-4)^2/1e-8" }
    erklaerung: '$A = \pi\cdot(1{,}0\cdot 10^{-4}\,\text{m})^2 = 3{,}14\cdot 10^{-8}\,\text{m}^2$.'
  - text: Stelle $R = \rho\,l/A$ nach $l$ um. Welche Formel erhältst du?
    erklaerung: 'Beide Seiten mal $A$ und durch $\rho$ teilen: $l = \dfrac{R\cdot A}{\rho}$.'
  - text: Berechne die Länge in cm.
    teil: { typ: zahl, loesung: "10*pi*(1.0e-4)^2/4.9e-7*100" }
    erklaerung: '$l = \dfrac{10\,\Omega\cdot 3{,}14\cdot 10^{-8}\,\text{m}^2}{4{,}9\cdot 10^{-7}\,\Omega\,\text{m}} = 0{,}641\,\text{m} = 64{,}1\,\text{cm}$.'
loesung: |
  **Ansatz:** Aus $R = \rho\,l/A$ folgt $l = \dfrac{R\cdot A}{\rho}$. Dafür brauchen wir zuerst die Querschnittsfläche.
  ---
  **Fläche:** $r = 0{,}10\,\text{mm} = 1{,}0\cdot 10^{-4}\,\text{m}$, also $A = \pi r^2 = 3{,}14\cdot 10^{-8}\,\text{m}^2$.
  ---
  **Länge:** $l = \dfrac{10\,\Omega\cdot 3{,}14\cdot 10^{-8}\,\text{m}^2}{4{,}9\cdot 10^{-7}\,\Omega\,\text{m}} = 0{,}641\,\text{m} = 64{,}1\,\text{cm}$. Die Einheiten ergeben $\Omega\,\text{m}^2/(\Omega\,\text{m}) = \text{m}$.
```

```aufgabe
id: p13-doppelte-laenge
titel: Einen Draht strecken
niveau: 2
lernziel: 3
kompetenz: begruenden
angabe: |
  Ein Draht wird gleichmäßig auf die doppelte Länge gezogen. Sein Volumen bleibt dabei gleich. Auf das Wievielfache ändert sich sein Widerstand?
teile:
  - typ: zahl
    loesung: "2*2"
    anzeige: '4'
    fehler:
      - wert: "2"
        meldung: |
          Du hast nur die doppelte Länge berücksichtigt. Weil das Volumen gleich bleibt, wird der Draht dabei auch **dünner**: Sein Querschnitt halbiert sich. Das verdoppelt den Widerstand noch einmal.
      - wert: "1"
        meldung: |
          Gleiches Volumen heißt nicht gleicher Widerstand. Es kommt auf das Verhältnis $l/A$ an, und das ändert sich beim Strecken.
hinweise:
  - 'Volumen $V = l\cdot A$. Was passiert mit $A$, wenn $l$ sich verdoppelt und $V$ gleich bleibt?'
  - 'Setze $2l$ und $A/2$ in $R = \rho\,l/A$ ein.'
loesung: |
  **Ansatz:** Das Volumen $V = l\cdot A$ bleibt gleich. Wird $l$ doppelt so groß, muss $A$ halb so groß werden.
  ---
  **Einsetzen:** $R_{\text{neu}} = \rho\,\dfrac{2l}{A/2} = 4\,\rho\,\dfrac{l}{A} = 4R$.
  ---
  **Antwort:** Der Widerstand wird viermal so groß. Länge und Querschnitt wirken beide in dieselbe Richtung.
```

```aufgabe
id: p13-alu-statt-kupfer
titel: Aluminium statt Kupfer
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Eine Kupferleitung mit $1{,}5\,\text{mm}^2$ Querschnitt soll durch eine gleich lange Aluminiumleitung mit **demselben Widerstand** ersetzt werden ($\rho_{\text{Cu}} = 1{,}7\cdot 10^{-8}\,\Omega\,\text{m}$, $\rho_{\text{Al}} = 2{,}7\cdot 10^{-8}\,\Omega\,\text{m}$). Welchen Querschnitt braucht sie (in mm²)?
teile:
  - typ: zahl
    loesung: "1.5*2.7/1.7"
    einheit: "mm²"
    anzeige: '2{,}38'
    fehler:
      - wert: "1.5*1.7/2.7"
        meldung: |
          Aluminium leitet **schlechter** als Kupfer. Für denselben Widerstand braucht man deshalb einen **größeren** Querschnitt, nicht einen kleineren.
hinweise:
  - 'Gleicher Widerstand und gleiche Länge heißt $\rho_{\text{Cu}}/A_{\text{Cu}} = \rho_{\text{Al}}/A_{\text{Al}}$.'
  - 'Löse nach $A_{\text{Al}}$ auf. Weil nur ein Verhältnis vorkommt, darfst du in mm² rechnen.'
loesung: |
  **Ansatz:** $R = \rho\,l/A$ soll gleich bleiben, und $l$ ist gleich. Also muss $\rho/A$ gleich bleiben: $\dfrac{\rho_{\text{Cu}}}{A_{\text{Cu}}} = \dfrac{\rho_{\text{Al}}}{A_{\text{Al}}}$.
  ---
  **Umstellen:** $A_{\text{Al}} = A_{\text{Cu}}\cdot\dfrac{\rho_{\text{Al}}}{\rho_{\text{Cu}}} = 1{,}5\,\text{mm}^2\cdot\dfrac{2{,}7}{1{,}7} = 2{,}38\,\text{mm}^2$.
  ---
  **Plausibilität:** Aluminium leitet schlechter, also braucht es mehr Querschnitt. Weil Aluminium aber viel leichter ist, verwendet man es trotzdem für Hochspannungsleitungen.
```

### Der Widerstand hängt von der Temperatur ab

Bei **Metallen** steigt der Widerstand mit der Temperatur. Die Atomrümpfe schwingen heftiger, und die
Elektronen stoßen häufiger mit ihnen zusammen. Für nicht zu große Temperaturänderungen gilt die Näherung
$$R(\vartheta) = R_{20}\cdot\bigl(1 + \alpha\cdot\Delta\vartheta\bigr).$$
Dabei ist $R_{20}$ der Widerstand bei $20\,^\circ\text{C}$, $\Delta\vartheta$ (sprich „Delta theta“) die
Temperaturänderung gegenüber $20\,^\circ\text{C}$ in Kelvin und $\alpha$ der **Temperaturkoeffizient** in
$\text{K}^{-1}$. Für Kupfer ist $\alpha = 3{,}9\cdot 10^{-3}\,\text{K}^{-1}$. Der Widerstand wächst also um
etwa $0{,}4\,\%$ pro Kelvin.

Leiter, deren Widerstand mit der Temperatur steigt, heißen **Kaltleiter**. Sie leiten im Kalten besser.
Bei **Halbleitern** ist es umgekehrt. Mit steigender Temperatur werden mehr Ladungsträger frei, der
Widerstand sinkt. Sie heißen **Heißleiter** und dienen als Temperaturfühler. Warum das so ist, erklärt die
Lektion [13.11 Leiter, Isolatoren und Halbleiter im Bändermodell](/lernen/physik1/gleichstrom/leiter-isolatoren-und-halbleiter-im-baendermodell).
Die Legierung **Konstantan** hat einen fast temperaturunabhängigen Widerstand, daher ihr Name. Manche
Stoffe verlieren bei sehr tiefen Temperaturen ihren Widerstand völlig. Das nennt man **Supraleitung**.

```plot
x: [0, 100]
y: [0, 2.2]
achsen: { x: "ϑ in °C", y: "R / R₂₀" }
graphen:
  - { f: "1+3.9e-3*(x-20)", label: "Kupfer", farbe: 0 }
  - { f: "exp(3950*(1/(x+273.15)-1/293.15))", label: "Heißleiter", farbe: 1, von: 5 }
  - { f: "1", label: "Konstantan", farbe: 2, gestrichelt: true }
beschriftung: "Widerstand im Verhältnis zum Wert bei 20 °C. Kupfer wird mit steigender Temperatur gleichmäßig schlechter leitend, um etwa 0,4 % pro Kelvin. Der Widerstand eines Heißleiters aus Halbleitermaterial fällt dagegen stark: Bei 60 °C ist er nur noch rund ein Fünftel so groß wie bei 20 °C. Konstantan bleibt fast konstant."
```

:::beispiel[Eine Freileitung im Winter]
Ein Stück Kupferleitung hat bei $20\,^\circ\text{C}$ den Widerstand $0{,}50\,\Omega$. Wie groß ist er bei
$-10\,^\circ\text{C}$?

**Schritt 1, Temperaturänderung:** $\Delta\vartheta = -10\,^\circ\text{C} - 20\,^\circ\text{C} = -30\,\text{K}$.
Sie ist negativ, weil es kälter wird. Eine Temperaturdifferenz ist in Kelvin und Grad Celsius gleich groß.

**Schritt 2, Einsetzen:** $R = 0{,}50\,\Omega\cdot(1 + 3{,}9\cdot 10^{-3}\,\text{K}^{-1}\cdot(-30\,\text{K})) = 0{,}50\,\Omega\cdot 0{,}883 = 0{,}44\,\Omega$.

**Deutung:** Im Winter leitet die Leitung etwa $12\,\%$ besser. Die Einheit $\text{K}^{-1}\cdot\text{K}$ kürzt
sich, die Klammer ist eine reine Zahl.
:::

```aufgabe
id: p13-temperatur
titel: Warme Kupferwicklung
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Die Kupferwicklung eines Motors hat bei $20\,^\circ\text{C}$ den Widerstand $10{,}0\,\Omega$. Wie groß ist er im Betrieb bei $80\,^\circ\text{C}$ (in Ω)? ($\alpha = 3{,}9\cdot 10^{-3}\,\text{K}^{-1}$)
teile:
  - typ: zahl
    loesung: "10.0*(1+3.9e-3*60)"
    einheit: "Ω"
    anzeige: '12{,}3'
    fehler:
      - wert: "10.0*(1+3.9e-3*80)"
        meldung: |
          In die Formel gehört die **Änderung** der Temperatur gegenüber $20\,^\circ\text{C}$, also $\Delta\vartheta = 60\,\text{K}$, nicht die Endtemperatur.
      - wert: "10.0*3.9e-3*60"
        meldung: |
          Das ist nur der **Zuwachs** des Widerstands. Der Widerstand bei $20\,^\circ\text{C}$ kommt noch dazu, deshalb steht in der Klammer $1 + \alpha\,\Delta\vartheta$.
hinweise:
  - '$R = R_{20}\,(1 + \alpha\,\Delta\vartheta)$.'
  - 'Berechne zuerst $\Delta\vartheta$ als Differenz zu $20\,^\circ\text{C}$.'
loesung: |
  **Ansatz:** $R = R_{20}\,(1 + \alpha\,\Delta\vartheta)$ mit $\Delta\vartheta = 80\,^\circ\text{C} - 20\,^\circ\text{C} = 60\,\text{K}$.
  ---
  **Rechnung:** $R = 10{,}0\,\Omega\cdot(1 + 3{,}9\cdot 10^{-3}\,\text{K}^{-1}\cdot 60\,\text{K}) = 10{,}0\,\Omega\cdot 1{,}234 = 12{,}3\,\Omega$.
  ---
  **Deutung:** Der Widerstand ist um gut $23\,\%$ gestiegen. Deshalb nimmt ein warmer Motor bei gleicher Spannung etwas weniger Strom auf.
```

```aufgabe
id: p13-pt100
titel: Temperatur aus einem Widerstandsthermometer
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Ein Platin-Widerstandsthermometer „Pt100“ hat bei $0\,^\circ\text{C}$ genau $100\,\Omega$. Sein Temperaturkoeffizient ist $\alpha = 3{,}85\cdot 10^{-3}\,\text{K}^{-1}$, bezogen auf $0\,^\circ\text{C}$, also $R = 100\,\Omega\cdot(1 + \alpha\,\vartheta)$. Es zeigt $111{,}55\,\Omega$. Welche Temperatur hat es (in °C)?
teile:
  - typ: zahl
    loesung: "(111.55/100-1)/3.85e-3"
    einheit: "°C"
    anzeige: '30'
    fehler:
      - wert: "111.55/(100*3.85e-3)"
        meldung: |
          Du hast vergessen, die $1$ aus der Klammer abzuziehen. Der Grundwert $100\,\Omega$ gehört zu $0\,^\circ\text{C}$. Nur der **Zuwachs** von $11{,}55\,\Omega$ kommt von der Temperatur.
hinweise:
  - 'Teile zuerst durch $100\,\Omega$, dann ziehe $1$ ab.'
  - 'Aus $R/R_0 = 1 + \alpha\,\vartheta$ folgt $\vartheta = (R/R_0 - 1)/\alpha$.'
loesung: |
  **Ansatz:** Wir stellen $R = R_0\,(1 + \alpha\,\vartheta)$ nach $\vartheta$ um: $\vartheta = \dfrac{R/R_0 - 1}{\alpha}$.
  ---
  **Rechnung:** $\dfrac{R}{R_0} = \dfrac{111{,}55\,\Omega}{100\,\Omega} = 1{,}1155$, also $\vartheta = \dfrac{0{,}1155}{3{,}85\cdot 10^{-3}\,\text{K}^{-1}} = 30\,\text{K}$ über $0\,^\circ\text{C}$.
  ---
  **Antwort:** Das Thermometer hat $30\,^\circ\text{C}$. Probe: $100\,\Omega\cdot(1 + 3{,}85\cdot 10^{-3}\cdot 30) = 111{,}55\,\Omega$.
```

```aufgabe
id: p13-gluehdraht-einschalten
titel: Warum Glühlampen beim Einschalten durchbrennen
niveau: 3
lernziel: 3
kompetenz: modellieren
angabe: |
  Der Wolframdraht einer Glühlampe hat im Betrieb bei $2500\,^\circ\text{C}$ den Widerstand $880\,\Omega$. Die Lampe liegt an $230\,\text{V}$. Nimm für Wolfram $\alpha = 4{,}4\cdot 10^{-3}\,\text{K}^{-1}$ an und rechne mit der linearen Näherung, auch wenn sie bei so großen Temperaturänderungen nur grob stimmt.

  a) Welchen Widerstand hat der kalte Draht bei $20\,^\circ\text{C}$ (in Ω)?

  b) Wie groß ist der Strom im ersten Augenblick nach dem Einschalten (in A)?

  c) Auf das Wievielfache des Betriebsstroms ist dieser Einschaltstrom erhöht?
teile:
  - typ: zahl
    label: a) R kalt in Ω
    loesung: "880/(1+4.4e-3*2480)"
    einheit: "Ω"
    anzeige: '73{,}9'
  - typ: zahl
    label: b) Einschaltstrom in A
    loesung: "230/(880/(1+4.4e-3*2480))"
    einheit: "A"
    anzeige: '3{,}11'
  - typ: zahl
    label: c) Faktor
    loesung: "1+4.4e-3*2480"
    anzeige: '11{,}9'
hinweise:
  - 'Hier ist der warme Widerstand bekannt. Stelle $R_{\text{warm}} = R_{20}\,(1 + \alpha\,\Delta\vartheta)$ nach $R_{20}$ um.'
  - 'Im ersten Augenblick ist der Draht noch kalt. Der Faktor zwischen den Strömen ist derselbe wie zwischen den Widerständen.'
loesung: |
  **a) Ansatz:** $R_{\text{warm}} = R_{20}\,(1 + \alpha\,\Delta\vartheta)$ mit $\Delta\vartheta = 2480\,\text{K}$. Umgestellt: $R_{20} = \dfrac{880\,\Omega}{1 + 4{,}4\cdot 10^{-3}\,\text{K}^{-1}\cdot 2480\,\text{K}} = \dfrac{880\,\Omega}{11{,}9} = 73{,}9\,\Omega$.
  ---
  **b)** Beim Einschalten ist der Draht kalt: $I = \dfrac{230\,\text{V}}{73{,}9\,\Omega} = 3{,}11\,\text{A}$. Im Betrieb sind es nur $\dfrac{230\,\text{V}}{880\,\Omega} = 0{,}261\,\text{A}$.
  ---
  **c)** Der Faktor ist $3{,}11\,\text{A}/0{,}261\,\text{A} = 11{,}9$, genau das Verhältnis der Widerstände. Dieser kurze Stromstoß belastet den Draht stark. Deshalb brennen Glühlampen meist beim Einschalten durch.
```

```reflexion
frage: Ein Metalldraht leitet schlechter, wenn er warm wird. Ein Halbleiter leitet besser. Welche zwei Dinge bestimmen, wie gut ein Stoff leitet, und welches davon ändert sich beim Erwärmen jeweils am stärksten?
antwort: |
  Die Leitfähigkeit hängt davon ab, **wie viele** bewegliche Ladungsträger es gibt und **wie ungestört** sie sich bewegen können. Im Metall gibt es immer sehr viele freie Elektronen, ihre Zahl ändert sich beim Erwärmen kaum. Es ändert sich vor allem die Behinderung: Die Atome schwingen stärker, die Elektronen stoßen häufiger an. Deshalb steigt der Widerstand. Im Halbleiter gibt es bei Zimmertemperatur nur wenige freie Ladungsträger. Beim Erwärmen werden viel mehr davon frei. Dieser Effekt überwiegt die stärkere Behinderung bei weitem, deshalb sinkt der Widerstand.
```

## Die Kirchhoffschen Regeln: Knoten und Maschen

```aufgabe
id: p13-5-check
art: check
titel: "Vorwissen: Kann Ladung verschwinden?"
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Welche Aussage über die elektrische Ladung ist richtig?

  Herkunft: [Kapitel 12, Elektrische Ladung und Elementarladung](/lernen/physik1/elektrostatik/elektrische-ladung-und-elementarladung)
teile:
  - typ: auswahl
    optionen:
      - "In einem abgeschlossenen System bleibt die Gesamtladung immer gleich."
      - "Beim Reiben entsteht neue Ladung aus Bewegungsenergie."
      - "In einem Verbraucher wird Ladung in Wärme umgewandelt."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Reiben **trennt** Ladung nur. Der eine Körper bekommt Elektronen, der andere verliert genauso viele. Insgesamt bleibt die Ladung gleich.
      - wert: 2
        meldung: |
          Im Verbraucher wird **Energie** in Wärme umgewandelt. Die Ladung fließt vollständig weiter, siehe [13.2 Der Stromkreis: Strom wird nicht verbraucht](/lernen/physik1/gleichstrom/der-stromkreis-strom-wird-nicht-verbraucht).
hinweise:
  - Denk an den Erhaltungssatz für Ladung.
loesung: |
  Ladung ist eine Erhaltungsgröße. Sie kann getrennt und verschoben, aber weder erzeugt noch vernichtet werden.
  ---
  Auf diesem Satz beruht die Knotenregel in dieser Lektion.
```

Bisher hatten wir nur einen einzigen Kreis. In echten Schaltungen verzweigen sich die Leitungen, und
es gibt mehrere Wege. Für alle Gleichstromschaltungen genügen zwei Regeln. Gustav Robert Kirchhoff hat
sie 1845 formuliert. Beide sind Erhaltungssätze, die du schon kennst.

Zuerst drei Begriffe:

- Ein **Knoten** ist ein Punkt, an dem mindestens drei Leitungen zusammentreffen. In Schaltplänen ist er
  oft als dicker Punkt gezeichnet.
- Ein **Zweig** ist eine Verbindung zwischen zwei Knoten. Durch einen Zweig fließt überall derselbe Strom.
- Eine **Masche** ist ein geschlossener Weg durch die Schaltung, der zum Ausgangspunkt zurückführt.

**Beispiel und Nichtbeispiel.** Der Punkt, an dem sich eine Leitung in zwei Leitungen zu zwei Lampen
aufteilt, ist ein Knoten. Eine Ecke in einem Draht ist **kein** Knoten, auch wenn der Draht dort abknickt.
Dort treffen nur zwei Leitungsstücke zusammen, und der Strom kann sich nicht aufteilen.

### Die Knotenregel

:::satz[Knotenregel, 1. Kirchhoffsche Regel]
An jedem Knoten ist die Summe der zufließenden Ströme gleich der Summe der abfließenden Ströme:
$$\sum I_{\text{zu}} = \sum I_{\text{ab}}.$$
Das Zeichen $\sum$ (sprich „Summe“) bedeutet: Alle diese Ströme werden addiert.
:::

**Warum gilt sie?** Wegen der Ladungserhaltung. Würde mehr Ladung zufließen als abfließen, müsste sich
im Knoten Ladung ansammeln. Ein Knoten ist aber nur ein Stück Draht, er kann keine Ladung speichern.
Denk an eine Straßenkreuzung: Jedes Auto, das hineinfährt, muss auch wieder hinausfahren.

```plot
x: [1, 7.5]
y: [1, 6]
gleich: true
hoehe: 300
achsen: { x: " ", y: " " }
strecken:
  - { von: [1.4, 3.5], nach: [6.6, 3.5] }
  - { von: [4, 1.3], nach: [4, 5.7] }
vektoren:
  - { von: [1.6, 3.85], nach: [3.2, 3.85], label: "I₁ = 2,5 A", farbe: 0 }
  - { von: [4.35, 5.6], nach: [4.35, 4.3], label: "I₂ = 0,8 A", farbe: 0 }
  - { von: [4.8, 3.85], nach: [6.4, 3.85], label: "I₃ = 1,1 A", farbe: 1 }
  - { von: [3.65, 2.7], nach: [3.65, 1.4], label: "I₄ = ?", farbe: 1 }
punkte:
  - { x: 4, y: 3.5, label: "K", farbe: 0 }
beschriftung: "Ein Knoten K mit vier Leitungen. Die Pfeile zeigen die technische Stromrichtung. I₁ und I₂ fließen zum Knoten hin, I₃ und I₄ fließen vom Knoten weg."
```

:::beispiel[Einen unbekannten Strom am Knoten bestimmen]
Zum Knoten K fließen $I_1 = 2{,}5\,\text{A}$ und $I_2 = 0{,}8\,\text{A}$. Weg fließen $I_3 = 1{,}1\,\text{A}$ und
der unbekannte Strom $I_4$.

**Schritt 1, Gleichung aufstellen:** zufließend gleich abfließend, also $I_1 + I_2 = I_3 + I_4$.

**Schritt 2, Einsetzen:** $2{,}5\,\text{A} + 0{,}8\,\text{A} = 1{,}1\,\text{A} + I_4$, also $3{,}3\,\text{A} = 1{,}1\,\text{A} + I_4$.

**Schritt 3, Auflösen:** Wir ziehen auf beiden Seiten $1{,}1\,\text{A}$ ab: $I_4 = 2{,}2\,\text{A}$.

**Probe:** Hin fließen $3{,}3\,\text{A}$, weg fließen $1{,}1\,\text{A} + 2{,}2\,\text{A} = 3{,}3\,\text{A}$.
:::

:::achtung[Fehler: Die Richtung der Ströme übersehen]
**Falsche Rechnung:** „In einen Knoten fließen $3{,}0\,\text{A}$ hinein, heraus fließen $1{,}2\,\text{A}$ und
$I_3$. Also $I_3 = 3{,}0\,\text{A} + 1{,}2\,\text{A} = 4{,}2\,\text{A}$.“

**Richtig:** Man darf nicht einfach alle Ströme addieren. Zufließende Ströme stehen auf der einen Seite,
abfließende auf der anderen: $3{,}0\,\text{A} = 1{,}2\,\text{A} + I_3$. Daraus folgt $I_3 = 1{,}8\,\text{A}$. Zeichne
vor jeder Rechnung die Pfeile ein und sortiere nach „hin“ und „weg“.
:::

```aufgabe
id: p13-knotenregel
titel: Knotenregel anwenden
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  In einen Knoten fließt der Strom $I_1 = 4{,}0\,\text{A}$ hinein. Aus dem Knoten fließen $I_2 = 1{,}5\,\text{A}$ und $I_3$ heraus. Wie groß ist $I_3$ (in A)?
teile:
  - typ: zahl
    loesung: "4.0-1.5"
    einheit: "A"
    anzeige: '2{,}5'
    fehler:
      - wert: "4.0+1.5"
        meldung: |
          $I_2$ fließt **heraus**, nicht hinein. Es steht auf derselben Seite wie $I_3$: $I_1 = I_2 + I_3$.
hinweise:
  - 'Zufließend gleich abfließend: $I_1 = I_2 + I_3$.'
loesung: |
  **Ansatz:** Knotenregel. Zu fließt $I_1$, ab fließen $I_2$ und $I_3$, also $I_1 = I_2 + I_3$.
  ---
  $I_3 = I_1 - I_2 = 4{,}0\,\text{A} - 1{,}5\,\text{A} = 2{,}5\,\text{A}$. Probe: $1{,}5\,\text{A} + 2{,}5\,\text{A} = 4{,}0\,\text{A}$.
```

```aufgabe
id: p13-knoten-zwei
titel: Zwei Knoten hintereinander
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Der Strom $I_1 = 5{,}0\,\text{A}$ fließt in den Knoten $K_1$. Dort teilt er sich in $I_2 = 2{,}0\,\text{A}$ und $I_3$. Der Strom $I_3$ fließt in den Knoten $K_2$ und teilt sich dort in $I_4 = 1{,}2\,\text{A}$ und $I_5$.

  a) Wie groß ist $I_3$ (in A)?

  b) Wie groß ist $I_5$ (in A)?
teile:
  - typ: zahl
    label: a) I₃ in A
    loesung: "5.0-2.0"
    einheit: "A"
    anzeige: '3{,}0'
    fehler:
      - wert: "5.0+2.0"
        meldung: |
          $I_2$ fließt aus $K_1$ heraus. Es ist ein Teil von $I_1$, also wird abgezogen.
  - typ: zahl
    label: b) I₅ in A
    loesung: "5.0-2.0-1.2"
    einheit: "A"
    anzeige: '1{,}8'
    fehler:
      - wert: "5.0-1.2"
        meldung: |
          In $K_2$ fließt nur $I_3$, nicht der ganze Strom $I_1$. Ein Teil, nämlich $I_2$, ist schon in $K_1$ abgezweigt.
hinweise:
  - Stelle für jeden Knoten einzeln die Knotenregel auf.
  - 'In $K_2$ fließt nur $I_3$ hinein.'
loesung: |
  **Ansatz:** Knotenregel für jeden Knoten einzeln.
  ---
  **a)** $K_1$: $I_1 = I_2 + I_3$, also $I_3 = 5{,}0\,\text{A} - 2{,}0\,\text{A} = 3{,}0\,\text{A}$.
  ---
  **b)** $K_2$: $I_3 = I_4 + I_5$, also $I_5 = 3{,}0\,\text{A} - 1{,}2\,\text{A} = 1{,}8\,\text{A}$. Probe: Insgesamt fließen $2{,}0 + 1{,}2 + 1{,}8 = 5{,}0\,\text{A}$ ab, so viel wie zu.
```

### Die Maschenregel

Die zweite Regel kennst du schon aus dem Potentialdiagramm der Lektion
[13.2 Der Stromkreis: Strom wird nicht verbraucht](/lernen/physik1/gleichstrom/der-stromkreis-strom-wird-nicht-verbraucht).
Wer einen Rundweg geht, kommt auf derselben Höhe an, auf der er gestartet ist. Er ist insgesamt genauso
viele Höhenmeter aufgestiegen wie abgestiegen.

:::satz[Maschenregel, 2. Kirchhoffsche Regel]
Geht man eine Masche einmal ganz herum, ist die Summe aller Spannungen null. Gleichwertig: Die Summe der
Quellenspannungen ist gleich der Summe der Spannungsabfälle an den Widerständen:
$$\sum U_{\text{Quelle}} = \sum R_i\cdot I_i.$$
Dabei ist $R_i\cdot I_i$ die Spannung am Widerstand $R_i$, durch den der Strom $I_i$ fließt.
:::

**Warum gilt sie?** Jeder Punkt hat genau ein Potential. Wer im Kreis herumgeht und wieder am Start
ankommt, ist wieder beim selben Potential. Alle Anstiege und Abfälle müssen sich also aufheben. Das ist
Energieerhaltung: Eine Ladung kann auf einem Rundweg nicht mehr Energie abgeben, als die Quelle ihr gibt.

**Vorzeichen beim Umlauf.** Man wählt einen Umlaufsinn, zum Beispiel im Uhrzeigersinn.

- Durchläuft man eine Quelle vom Minuspol zum Pluspol, steigt das Potential. Die Quellenspannung zählt **positiv**.
- Durchläuft man einen Widerstand **in** Stromrichtung, fällt das Potential. Der Spannungsabfall $R\cdot I$ zählt **negativ**.
- Durchläuft man einen Widerstand **gegen** die Stromrichtung, steigt das Potential. Dann zählt $R\cdot I$ positiv.

```plot
x: [0.5, 12.5]
y: [0.2, 6.2]
gleich: true
hoehe: 300
achsen: { x: " ", y: " " }
graphen:
  - { f: "3.32", von: 1.05, bis: 1.95, farbe: 3, label: "9,0 V" }
  - { f: "3.08", von: 1.3, bis: 1.7, farbe: 3 }
  - { f: "5.38", von: 4, bis: 5, farbe: 0, label: "R₁: 2,0 V" }
  - { f: "5.02", von: 4, bis: 5, farbe: 0 }
  - { f: "3.7", von: 10.32, bis: 10.68, farbe: 1, label: "R₂: 3,0 V" }
  - { f: "2.7", von: 10.32, bis: 10.68, farbe: 1 }
  - { f: "1.38", von: 6, bis: 7, farbe: 2, label: "R₃: ?" }
  - { f: "1.02", von: 6, bis: 7, farbe: 2 }
strecken:
  - { von: [1.5, 1.2], nach: [1.5, 3.08] }
  - { von: [1.5, 3.32], nach: [1.5, 5.2] }
  - { von: [1.3, 3.06], nach: [1.7, 3.06], farbe: 3 }
  - { von: [1.5, 5.2], nach: [3, 5.2] }
  - { von: [3, 5.2], nach: [4, 5.2] }
  - { von: [5, 5.2], nach: [6, 5.2] }
  - { von: [4, 5.02], nach: [4, 5.38], farbe: 0 }
  - { von: [5, 5.02], nach: [5, 5.38], farbe: 0 }
  - { von: [6, 5.2], nach: [10.5, 5.2] }
  - { von: [10.5, 1.2], nach: [10.5, 2.7] }
  - { von: [10.5, 3.7], nach: [10.5, 5.2] }
  - { von: [10.32, 2.7], nach: [10.32, 3.7], farbe: 1 }
  - { von: [10.68, 2.7], nach: [10.68, 3.7], farbe: 1 }
  - { von: [10.5, 1.2], nach: [8, 1.2] }
  - { von: [5, 1.2], nach: [6, 1.2] }
  - { von: [7, 1.2], nach: [8, 1.2] }
  - { von: [6, 1.02], nach: [6, 1.38], farbe: 2 }
  - { von: [7, 1.02], nach: [7, 1.38], farbe: 2 }
  - { von: [5, 1.2], nach: [1.5, 1.2] }
vektoren:
  - { von: [4.5, 3.8], nach: [7.5, 3.8], label: "Umlaufsinn", farbe: 3 }
beschriftung: "Eine Masche mit einer 9-V-Quelle und drei Widerständen. An R₁ misst man 2,0 V, an R₂ 3,0 V. Die Spannung an R₃ ist gesucht."
```

:::beispiel[Eine fehlende Spannung aus der Maschenregel]
In der Masche liefert die Quelle $9{,}0\,\text{V}$. An $R_1$ liegen $2{,}0\,\text{V}$, an $R_2$ liegen $3{,}0\,\text{V}$.

**Schritt 1, Maschenregel:** Quellenspannung gleich Summe der Abfälle: $9{,}0\,\text{V} = 2{,}0\,\text{V} + 3{,}0\,\text{V} + U_3$.

**Schritt 2, Auflösen:** $U_3 = 9{,}0\,\text{V} - 5{,}0\,\text{V} = 4{,}0\,\text{V}$.

**Deutung als Potential:** Die Quelle hebt das Potential um $9\,\text{V}$. Die drei Widerstände senken es
um $2 + 3 + 4 = 9\,\text{V}$. Die Ladung kommt beim Ausgangspotential an.
:::

:::beispiel[Zwei Quellen gegeneinander]
Ein Akku mit $9{,}0\,\text{V}$ wird über einen Widerstand $R = 12\,\Omega$ mit einer zweiten Quelle mit
$3{,}0\,\text{V}$ verbunden. Der Widerstand verbindet die beiden Pluspole, die beiden Minuspole sind direkt
miteinander verbunden. Die Quellen arbeiten also gegeneinander.

**Schritt 1, Umlauf in Richtung des stärkeren Akkus:** Den Akku durchlaufen wir von Minus nach Plus,
$+9{,}0\,\text{V}$. Die zweite Quelle durchlaufen wir von Plus nach Minus, $-3{,}0\,\text{V}$. Am Widerstand
fallen $R\cdot I$ ab.

**Schritt 2, Gleichung:** $9{,}0\,\text{V} - 3{,}0\,\text{V} = 12\,\Omega\cdot I$, also $I = \dfrac{6{,}0\,\text{V}}{12\,\Omega} = 0{,}50\,\text{A}$.

**Deutung:** Die Spannungen subtrahieren sich. Der stärkere Akku treibt den Strom gegen die schwächere
Quelle. So lädt man zum Beispiel einen Akku.
:::

:::achtung[Fehler: Die Quellenspannung zu den Abfällen addiert]
**Falsche Rechnung:** „In der Masche liegen $9{,}0\,\text{V}$ an der Quelle, $2{,}0\,\text{V}$ an $R_1$ und
$3{,}0\,\text{V}$ an $R_2$. Insgesamt sind das $14\,\text{V}$, also liegen an $R_3$ noch $14\,\text{V}$.“

**Richtig:** Die Quelle **hebt** das Potential, die Widerstände **senken** es. Darum steht die
Quellenspannung auf der anderen Seite der Gleichung: $9{,}0\,\text{V} = 2{,}0\,\text{V} + 3{,}0\,\text{V} + U_3$, also
$U_3 = 4{,}0\,\text{V}$. Mit Vorzeichen geschrieben: $+9{,}0 - 2{,}0 - 3{,}0 - U_3 = 0$.
:::

```aufgabe
id: p13-masche-basis
titel: Maschenregel mit drei Widerständen
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Eine Quelle mit $24\,\text{V}$ speist eine Masche aus drei Widerständen. An $R_1$ liegen $9{,}5\,\text{V}$, an $R_2$ liegen $6{,}0\,\text{V}$. Welche Spannung liegt an $R_3$ (in V)?
teile:
  - typ: zahl
    loesung: "24-9.5-6.0"
    einheit: "V"
    anzeige: '8{,}5'
    fehler:
      - wert: "24+9.5+6.0"
        meldung: |
          Die Quelle hebt das Potential, die Widerstände senken es. Die Spannungen der Widerstände werden von der Quellenspannung **abgezogen**.
      - wert: "9.5+6.0"
        meldung: |
          Das ist die Summe der beiden bekannten Abfälle. Gesucht ist, was von den $24\,\text{V}$ für $R_3$ übrig bleibt.
hinweise:
  - 'Quellenspannung gleich Summe der Spannungsabfälle: $24\,\text{V} = U_1 + U_2 + U_3$.'
loesung: |
  **Ansatz:** Maschenregel: $U_0 = U_1 + U_2 + U_3$.
  ---
  $U_3 = 24\,\text{V} - 9{,}5\,\text{V} - 6{,}0\,\text{V} = 8{,}5\,\text{V}$. Probe: $9{,}5 + 6{,}0 + 8{,}5 = 24$.
```

```aufgabe
id: p13-masche-gegen
titel: Akku laden mit zwei Quellen
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Eine Quelle mit $12\,\text{V}$ lädt einen fast leeren Akku mit $4{,}5\,\text{V}$. Ein Widerstand mit $25\,\Omega$ verbindet die beiden Pluspole, die beiden Minuspole sind direkt miteinander verbunden. Die Quellen arbeiten also gegeneinander. Welcher Strom fließt (in A)?
teile:
  - typ: zahl
    loesung: "(12-4.5)/25"
    einheit: "A"
    anzeige: '0{,}30'
    fehler:
      - wert: "(12+4.5)/25"
        meldung: |
          Die Quellen arbeiten **gegeneinander**. Beim Umlauf durchläuft man eine von Minus nach Plus und die andere von Plus nach Minus. Ihre Spannungen subtrahieren sich.
      - wert: "12/25"
        meldung: |
          Der Akku hält mit seinen $4{,}5\,\text{V}$ dagegen. Am Widerstand liegt nur die Differenz der beiden Quellenspannungen.
hinweise:
  - Welche Spannung bleibt für den Widerstand übrig, wenn zwei Quellen gegeneinander arbeiten?
  - 'Maschenregel: $12\,\text{V} - 4{,}5\,\text{V} = R\cdot I$.'
loesung: |
  **Ansatz:** Umlauf in Richtung des Ladestroms. Die Quelle zählt $+12\,\text{V}$, der Akku $-4{,}5\,\text{V}$, weil er von Plus nach Minus durchlaufen wird.
  ---
  **Maschenregel:** $12\,\text{V} - 4{,}5\,\text{V} = 25\,\Omega\cdot I$.
  ---
  $I = \dfrac{7{,}5\,\text{V}}{25\,\Omega} = 0{,}30\,\text{A}$. Der Strom fließt in den Akku hinein und lädt ihn.
```

```aufgabe
id: p13-kirchhoff-vorzeichen
titel: Die richtige Maschengleichung
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: |
  Welche Gleichung beschreibt die linke Masche (Quelle, $R_1$, $R_2$) richtig? Die Ströme fließen in Pfeilrichtung.
plot:
  x: [0.5, 12.5]
  y: [0.2, 6.4]
  gleich: true
  hoehe: 320
  achsen: { x: " ", y: " " }
  graphen:
    - { f: "3.32", von: 1.05, bis: 1.95, farbe: 3, label: "12 V" }
    - { f: "3.08", von: 1.3, bis: 1.7, farbe: 3 }
    - { f: "5.38", von: 3.5, bis: 4.5, farbe: 0, label: "R₁ = 2 Ω" }
    - { f: "5.02", von: 3.5, bis: 4.5, farbe: 0 }
    - { f: "3.7", von: 7.32, bis: 7.68, farbe: 1, label: "R₂ = 6 Ω" }
    - { f: "2.7", von: 7.32, bis: 7.68, farbe: 1 }
    - { f: "3.7", von: 10.32, bis: 10.68, farbe: 2, label: "R₃ = 3 Ω" }
    - { f: "2.7", von: 10.32, bis: 10.68, farbe: 2 }
  strecken:
    - { von: [1.5, 1.2], nach: [1.5, 3.08] }
    - { von: [1.5, 3.32], nach: [1.5, 5.2] }
    - { von: [1.3, 3.06], nach: [1.7, 3.06], farbe: 3 }
    - { von: [1.5, 5.2], nach: [2.5, 5.2] }
    - { von: [2.5, 5.2], nach: [3.5, 5.2] }
    - { von: [4.5, 5.2], nach: [5.5, 5.2] }
    - { von: [3.5, 5.02], nach: [3.5, 5.38], farbe: 0 }
    - { von: [4.5, 5.02], nach: [4.5, 5.38], farbe: 0 }
    - { von: [5.5, 5.2], nach: [7.5, 5.2] }
    - { von: [7.5, 1.2], nach: [7.5, 2.7] }
    - { von: [7.5, 3.7], nach: [7.5, 5.2] }
    - { von: [7.32, 2.7], nach: [7.32, 3.7], farbe: 1 }
    - { von: [7.68, 2.7], nach: [7.68, 3.7], farbe: 1 }
    - { von: [7.5, 5.2], nach: [10.5, 5.2] }
    - { von: [10.5, 1.2], nach: [10.5, 2.7] }
    - { von: [10.5, 3.7], nach: [10.5, 5.2] }
    - { von: [10.32, 2.7], nach: [10.32, 3.7], farbe: 2 }
    - { von: [10.68, 2.7], nach: [10.68, 3.7], farbe: 2 }
    - { von: [10.5, 1.2], nach: [7.5, 1.2] }
    - { von: [7.5, 1.2], nach: [1.5, 1.2] }
  vektoren:
    - { von: [2.7, 5.75], nach: [4.3, 5.75], label: "I₁", farbe: 0 }
    - { von: [6.95, 4.4], nach: [6.95, 3.4], label: "I₂", farbe: 1 }
    - { von: [9.95, 4.4], nach: [9.95, 3.4], label: "I₃", farbe: 2 }
  punkte:
    - { x: 7.5, y: 5.2, label: "P", farbe: 0 }
    - { x: 7.5, y: 1.2, label: "Q", farbe: 0 }
teile:
  - typ: auswahl
    optionen:
      - '$12\,\text{V} = 2\,\Omega\cdot I_1 + 6\,\Omega\cdot I_2$'
      - '$12\,\text{V} = 2\,\Omega\cdot I_1 + 6\,\Omega\cdot I_2 + 3\,\Omega\cdot I_3$'
      - '$12\,\text{V} = (2\,\Omega + 6\,\Omega)\cdot I_1$'
      - '$12\,\text{V} + 2\,\Omega\cdot I_1 = 6\,\Omega\cdot I_2$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          $R_3$ liegt nicht in dieser Masche. Der Weg Quelle, $R_1$, $R_2$ und zurück führt nicht durch $R_3$.
      - wert: 2
        meldung: |
          Durch $R_2$ fließt nicht $I_1$, sondern nur der Teil $I_2$. Am Knoten P teilt sich $I_1$ auf.
      - wert: 3
        meldung: |
          Auch in $R_1$ **fällt** das Potential, genau wie in $R_2$. Beide Spannungsabfälle gehören auf dieselbe Seite.
hinweise:
  - Fahre den Weg mit dem Finger ab. Durch welche Bauteile kommst du?
  - Welcher Strom fließt durch welches Bauteil?
loesung: |
  **Ansatz:** Die linke Masche führt durch die Quelle, $R_1$ und $R_2$. Durch $R_1$ fließt $I_1$, durch $R_2$ fließt $I_2$.
  ---
  In beiden Widerständen fällt das Potential in Stromrichtung. Die Summe der Abfälle ist gleich der Quellenspannung.
  ---
  Also $12\,\text{V} = 2\,\Omega\cdot I_1 + 6\,\Omega\cdot I_2$.
```

**Vorgehen in größeren Schaltungen.** Die beiden Beispiele zeigen das Muster. Man nennt jeden
unbekannten Strom, stellt Knotengleichungen und Maschengleichungen auf und löst das Gleichungssystem. Das
ist genau ein lineares Gleichungssystem, wie in
[Mathematik, Systeme mit zwei Unbekannten](/lernen/mathe3/lgs-matrizen/systeme-mit-zwei-unbekannten).
Schaltungssimulatoren lösen auf diese Weise Netzwerke mit Millionen Bauteilen.

:::merke[Vorgehen mit den Kirchhoffschen Regeln]
1. Für jeden Zweig einen Strom einzeichnen und benennen. Die Richtung darfst du **frei wählen**.
2. Knotenregel für alle Knoten bis auf einen aufschreiben. Der letzte Knoten liefert nichts Neues.
3. Maschenregel für so viele Maschen aufschreiben, bis es so viele Gleichungen wie Unbekannte gibt.
4. Gleichungssystem lösen. Ein **negatives** Ergebnis heißt nur: Der Strom fließt entgegen dem gezeichneten Pfeil.
:::

```reflexion
frage: Warum folgt die Maschenregel daraus, dass jeder Punkt der Schaltung genau ein Potential hat? Erkläre es mit dem Bild einer Wanderung.
antwort: |
  Das Potential ist wie die Höhe eines Ortes. Jeder Punkt hat genau eine Höhe. Wer eine Rundwanderung macht und zum Startpunkt zurückkehrt, ist wieder auf derselben Höhe. Also müssen alle Anstiege zusammen genau so groß sein wie alle Abstiege. Im Stromkreis sind die Anstiege die Quellen und die Abstiege die Spannungsabfälle an den Widerständen. Wäre die Summe nicht null, hätte der Startpunkt nach dem Rundweg ein anderes Potential als vorher. Das ist unmöglich.
```

```aufgabe
id: p13-kirchhoff-begruenden
titel: Die Kirchhoffschen Regeln begründen
niveau: 2
lernziel: 4
kompetenz: begruenden
angabe: |
  Nenne für jede der beiden Kirchhoffschen Regeln den Erhaltungssatz, auf dem sie beruht, und begründe in je einem bis zwei Sätzen, warum sie daraus folgt.
teile:
  - typ: text
    muster: |
      Die Knotenregel beruht auf der Ladungserhaltung: Ein Knoten kann keine Ladung speichern, also muss pro Sekunde genauso viel Ladung abfließen wie zufließt. Die Maschenregel beruht auf der Energieerhaltung: Jeder Punkt hat genau ein Potential, also hat eine Ladung nach einem vollen Umlauf wieder dieselbe potentielle Energie. Die Energie, die ihr die Quellen geben, muss sie in den Widerständen vollständig abgeben.
hinweise:
  - Was würde an einem Knoten passieren, wenn mehr Ladung zufließt als abfließt?
  - Was hat eine Ladung nach einem vollen Umlauf im Vergleich zum Start?
loesung: |
  **Knotenregel:** Sie folgt aus der Ladungserhaltung. Ein Knoten kann keine Ladung ansammeln, also ist Zufluss gleich Abfluss.
  ---
  **Maschenregel:** Sie folgt aus der Energieerhaltung. Nach einem Umlauf ist die Ladung wieder am selben Ort und hat dasselbe Potential.
  ---
  Deshalb gibt sie in den Widerständen genau die Energie ab, die sie von den Quellen bekommen hat: $\sum U_{\text{Quelle}} = \sum R\,I$.
```

```aufgabe
id: p13-kirchhoff-gls
titel: Ströme aus einem Gleichungssystem
niveau: 3
lernziel: 4
kompetenz: rechnen
angabe: |
  Berechne in der Schaltung die drei Ströme $I_1$, $I_2$ und $I_3$ (in A) mit den Kirchhoffschen Regeln. Stelle dafür eine Knotengleichung und zwei Maschengleichungen auf.
plot:
  x: [0.5, 12.5]
  y: [0.2, 6.4]
  gleich: true
  hoehe: 320
  achsen: { x: " ", y: " " }
  graphen:
    - { f: "3.32", von: 1.05, bis: 1.95, farbe: 3, label: "12 V" }
    - { f: "3.08", von: 1.3, bis: 1.7, farbe: 3 }
    - { f: "5.38", von: 3.5, bis: 4.5, farbe: 0, label: "R₁ = 2 Ω" }
    - { f: "5.02", von: 3.5, bis: 4.5, farbe: 0 }
    - { f: "3.7", von: 7.32, bis: 7.68, farbe: 1, label: "R₂ = 6 Ω" }
    - { f: "2.7", von: 7.32, bis: 7.68, farbe: 1 }
    - { f: "3.7", von: 10.32, bis: 10.68, farbe: 2, label: "R₃ = 3 Ω" }
    - { f: "2.7", von: 10.32, bis: 10.68, farbe: 2 }
  strecken:
    - { von: [1.5, 1.2], nach: [1.5, 3.08] }
    - { von: [1.5, 3.32], nach: [1.5, 5.2] }
    - { von: [1.3, 3.06], nach: [1.7, 3.06], farbe: 3 }
    - { von: [1.5, 5.2], nach: [2.5, 5.2] }
    - { von: [2.5, 5.2], nach: [3.5, 5.2] }
    - { von: [4.5, 5.2], nach: [5.5, 5.2] }
    - { von: [3.5, 5.02], nach: [3.5, 5.38], farbe: 0 }
    - { von: [4.5, 5.02], nach: [4.5, 5.38], farbe: 0 }
    - { von: [5.5, 5.2], nach: [7.5, 5.2] }
    - { von: [7.5, 1.2], nach: [7.5, 2.7] }
    - { von: [7.5, 3.7], nach: [7.5, 5.2] }
    - { von: [7.32, 2.7], nach: [7.32, 3.7], farbe: 1 }
    - { von: [7.68, 2.7], nach: [7.68, 3.7], farbe: 1 }
    - { von: [7.5, 5.2], nach: [10.5, 5.2] }
    - { von: [10.5, 1.2], nach: [10.5, 2.7] }
    - { von: [10.5, 3.7], nach: [10.5, 5.2] }
    - { von: [10.32, 2.7], nach: [10.32, 3.7], farbe: 2 }
    - { von: [10.68, 2.7], nach: [10.68, 3.7], farbe: 2 }
    - { von: [10.5, 1.2], nach: [7.5, 1.2] }
    - { von: [7.5, 1.2], nach: [1.5, 1.2] }
  vektoren:
    - { von: [2.7, 5.75], nach: [4.3, 5.75], label: "I₁", farbe: 0 }
    - { von: [6.95, 4.4], nach: [6.95, 3.4], label: "I₂", farbe: 1 }
    - { von: [9.95, 4.4], nach: [9.95, 3.4], label: "I₃", farbe: 2 }
  punkte:
    - { x: 7.5, y: 5.2, label: "P", farbe: 0 }
    - { x: 7.5, y: 1.2, label: "Q", farbe: 0 }
teile:
  - typ: zahl
    label: I₁ in A
    loesung: "3"
    einheit: "A"
    anzeige: '3{,}0'
  - typ: zahl
    label: I₂ in A
    loesung: "1"
    einheit: "A"
    anzeige: '1{,}0'
  - typ: zahl
    label: I₃ in A
    loesung: "2"
    einheit: "A"
    anzeige: '2{,}0'
hinweise:
  - 'Knoten P: $I_1 = I_2 + I_3$. Linke Masche: $12\,\text{V} = 2\,\Omega\cdot I_1 + 6\,\Omega\cdot I_2$.'
  - 'Rechte Masche aus $R_2$ und $R_3$ ohne Quelle: $6\,\Omega\cdot I_2 = 3\,\Omega\cdot I_3$. Drücke dann alles durch $I_2$ aus.'
gefuehrt:
  - text: Die rechte Masche besteht nur aus $R_2$ und $R_3$. Was folgt aus $6\,\Omega\cdot I_2 = 3\,\Omega\cdot I_3$ für $I_3$?
    erklaerung: 'Teilen durch $3\,\Omega$ ergibt $I_3 = 2\,I_2$. Durch den kleineren Widerstand fließt der doppelte Strom.'
  - text: Setze das in die Knotengleichung $I_1 = I_2 + I_3$ ein. Das Wievielfache von $I_2$ ist $I_1$?
    teil: { typ: zahl, loesung: "3" }
    erklaerung: '$I_1 = I_2 + 2\,I_2 = 3\,I_2$.'
  - text: 'Setze $I_1 = 3\,I_2$ in die linke Masche $12\,\text{V} = 2\,\Omega\cdot I_1 + 6\,\Omega\cdot I_2$ ein und berechne $I_2$ (in A).'
    teil: { typ: zahl, loesung: "1" }
    erklaerung: '$12\,\text{V} = 6\,\Omega\cdot I_2 + 6\,\Omega\cdot I_2 = 12\,\Omega\cdot I_2$, also $I_2 = 1{,}0\,\text{A}$.'
  - text: Berechne nun $I_1$ (in A).
    teil: { typ: zahl, loesung: "3" }
    erklaerung: '$I_1 = 3\cdot 1{,}0\,\text{A} = 3{,}0\,\text{A}$ und $I_3 = 2{,}0\,\text{A}$.'
loesung: |
  **Ansatz:** Drei Unbekannte, also drei Gleichungen. Knoten P: $I_1 = I_2 + I_3$. Linke Masche: $12\,\text{V} = 2\,\Omega\cdot I_1 + 6\,\Omega\cdot I_2$. Rechte Masche (ohne Quelle): $0 = 3\,\Omega\cdot I_3 - 6\,\Omega\cdot I_2$.
  ---
  **Auflösen:** Aus der rechten Masche folgt $I_3 = 2\,I_2$, aus dem Knoten $I_1 = 3\,I_2$. Eingesetzt in die linke Masche: $12\,\text{V} = 6\,\Omega\cdot I_2 + 6\,\Omega\cdot I_2$, also $I_2 = 1{,}0\,\text{A}$.
  ---
  **Ergebnis:** $I_1 = 3{,}0\,\text{A}$, $I_2 = 1{,}0\,\text{A}$, $I_3 = 2{,}0\,\text{A}$. Probe am Knoten: $1{,}0 + 2{,}0 = 3{,}0$. Probe linke Masche: $2\cdot 3{,}0 + 6\cdot 1{,}0 = 12\,\text{V}$.
```

## Reihenschaltung und Parallelschaltung

```aufgabe
id: p13-6-check
art: check
titel: "Vorwissen: Die Maschenregel"
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Eine Quelle mit $12\,\text{V}$ speist zwei Widerstände, die hintereinanderliegen. Am ersten liegen $5\,\text{V}$. Wie viel Spannung liegt am zweiten (in V)?

  Herkunft: [13.5 Die Kirchhoffschen Regeln: Knoten und Maschen](/lernen/physik1/gleichstrom/die-kirchhoffschen-regeln-knoten-und-maschen)
teile:
  - typ: zahl
    loesung: "12-5"
    einheit: "V"
    anzeige: '7'
    fehler:
      - wert: "12"
        meldung: |
          Die $12\,\text{V}$ teilen sich auf beide Widerstände auf. Die Summe der Spannungsabfälle ist gleich der Quellenspannung.
hinweise:
  - Die Spannungsabfälle in einer Masche ergeben zusammen die Quellenspannung.
loesung: |
  Maschenregel: $12\,\text{V} = 5\,\text{V} + U_2$.
  ---
  Also $U_2 = 7\,\text{V}$.
```

Hier liegt die dritte große Hürde des Kapitels. Viele lernen zwei Formeln auswendig und verwechseln sie
dann. Wir gehen deshalb von den Kirchhoffschen Regeln aus. Dann musst du dir fast nichts merken.

**Worum geht es in einem Satz?** In der **Reihenschaltung** ist der **Strom** überall gleich, und die
Spannungen teilen sich auf. In der **Parallelschaltung** ist die **Spannung** überall gleich, und die
Ströme teilen sich auf.

### Die Reihenschaltung

Bei der **Reihenschaltung**, auch Serienschaltung genannt, liegen die Bauteile hintereinander auf einem
einzigen Weg. Zwischen ihnen gibt es keinen Knoten.

```plot
x: [0.5, 12.5]
y: [0.2, 6.4]
gleich: true
hoehe: 300
achsen: { x: " ", y: " " }
graphen:
  - { f: "3.32", von: 1.05, bis: 1.95, farbe: 3, label: "9,0 V" }
  - { f: "3.08", von: 1.3, bis: 1.7, farbe: 3 }
  - { f: "5.38", von: 3.5, bis: 4.5, farbe: 0, label: "R₁ = 47 Ω" }
  - { f: "5.02", von: 3.5, bis: 4.5, farbe: 0 }
  - { f: "5.38", von: 8.5, bis: 9.5, farbe: 1, label: "R₂ = 33 Ω" }
  - { f: "5.02", von: 8.5, bis: 9.5, farbe: 1 }
strecken:
  - { von: [1.5, 1.2], nach: [1.5, 3.08] }
  - { von: [1.5, 3.32], nach: [1.5, 5.2] }
  - { von: [1.3, 3.06], nach: [1.7, 3.06], farbe: 3 }
  - { von: [1.5, 5.2], nach: [2.5, 5.2] }
  - { von: [2.5, 5.2], nach: [3.5, 5.2] }
  - { von: [4.5, 5.2], nach: [5.5, 5.2] }
  - { von: [3.5, 5.02], nach: [3.5, 5.38], farbe: 0 }
  - { von: [4.5, 5.02], nach: [4.5, 5.38], farbe: 0 }
  - { von: [5.5, 5.2], nach: [7.5, 5.2] }
  - { von: [7.5, 5.2], nach: [8.5, 5.2] }
  - { von: [9.5, 5.2], nach: [10.5, 5.2] }
  - { von: [8.5, 5.02], nach: [8.5, 5.38], farbe: 1 }
  - { von: [9.5, 5.02], nach: [9.5, 5.38], farbe: 1 }
  - { von: [10.5, 5.2], nach: [11.5, 5.2] }
  - { von: [11.5, 5.2], nach: [11.5, 1.2] }
  - { von: [11.5, 1.2], nach: [1.5, 1.2] }
vektoren:
  - { von: [5.9, 5.7], nach: [7.1, 5.7], label: "I", farbe: 0 }
  - { von: [7.1, 0.7], nach: [5.9, 0.7], label: "I", farbe: 0 }
beschriftung: "Reihenschaltung von R₁ = 47 Ω und R₂ = 33 Ω an 9,0 V. Es gibt nur einen Weg. Derselbe Strom I fließt durch beide Widerstände."
```

**In kleinen Schritten zur Formel.**

1. Es gibt keinen Knoten, an dem sich der Strom aufteilen könnte. Nach der Knotenregel fließt durch alle
   Bauteile **derselbe Strom** $I$.
2. Nach der Maschenregel teilen sich die Spannungen auf: $U = U_1 + U_2$.
3. Mit $U_1 = R_1 I$ und $U_2 = R_2 I$ wird daraus $U = R_1 I + R_2 I = (R_1 + R_2)\cdot I$.
4. Die ganze Schaltung wirkt also wie **ein** Widerstand $R_{\text{ges}} = R_1 + R_2$. Man nennt ihn den
   **Ersatzwiderstand**.

:::satz[Reihenschaltung]
$$R_{\text{ges}} = R_1 + R_2 + \dots, \qquad I \text{ überall gleich}, \qquad \frac{U_1}{U_2} = \frac{R_1}{R_2}.$$
Die Spannung teilt sich im Verhältnis der Widerstände auf. Am größeren Widerstand fällt die größere
Spannung ab. Der Ersatzwiderstand ist größer als jeder einzelne Widerstand.
:::

:::beispiel[Zwei Widerstände in Reihe]
$R_1 = 47\,\Omega$ und $R_2 = 33\,\Omega$ liegen in Reihe an $9{,}0\,\text{V}$.

**Schritt 1, Ersatzwiderstand:** $R_{\text{ges}} = 47\,\Omega + 33\,\Omega = 80\,\Omega$.

**Schritt 2, Strom:** $I = \dfrac{U}{R_{\text{ges}}} = \dfrac{9{,}0\,\text{V}}{80\,\Omega} = 0{,}1125\,\text{A} = 113\,\text{mA}$.
Er ist in beiden Widerständen gleich.

**Schritt 3, Teilspannungen:** $U_1 = 47\,\Omega\cdot 0{,}1125\,\text{A} = 5{,}3\,\text{V}$ und
$U_2 = 33\,\Omega\cdot 0{,}1125\,\text{A} = 3{,}7\,\text{V}$.

**Probe:** $5{,}3\,\text{V} + 3{,}7\,\text{V} = 9{,}0\,\text{V}$. Der größere Widerstand bekommt die größere Spannung.
:::

### Die Parallelschaltung

Bei der **Parallelschaltung** sind die Bauteile nebeneinander zwischen **dieselben zwei Knoten**
geschaltet. Jedes Bauteil hat einen eigenen Weg.

```plot
x: [0.5, 12.5]
y: [0.2, 6.4]
gleich: true
hoehe: 300
achsen: { x: " ", y: " " }
graphen:
  - { f: "3.32", von: 1.05, bis: 1.95, farbe: 3, label: "12 V" }
  - { f: "3.08", von: 1.3, bis: 1.7, farbe: 3 }
  - { f: "3.7", von: 5.32, bis: 5.68, farbe: 0, label: "R₁ = 60 Ω" }
  - { f: "2.7", von: 5.32, bis: 5.68, farbe: 0 }
  - { f: "3.7", von: 9.32, bis: 9.68, farbe: 1, label: "R₂ = 40 Ω" }
  - { f: "2.7", von: 9.32, bis: 9.68, farbe: 1 }
strecken:
  - { von: [1.5, 1.2], nach: [1.5, 3.08] }
  - { von: [1.5, 3.32], nach: [1.5, 5.2] }
  - { von: [1.3, 3.06], nach: [1.7, 3.06], farbe: 3 }
  - { von: [1.5, 5.2], nach: [9.5, 5.2] }
  - { von: [1.5, 1.2], nach: [9.5, 1.2] }
  - { von: [5.5, 1.2], nach: [5.5, 2.7] }
  - { von: [5.5, 3.7], nach: [5.5, 5.2] }
  - { von: [5.32, 2.7], nach: [5.32, 3.7], farbe: 0 }
  - { von: [5.68, 2.7], nach: [5.68, 3.7], farbe: 0 }
  - { von: [9.5, 1.2], nach: [9.5, 2.7] }
  - { von: [9.5, 3.7], nach: [9.5, 5.2] }
  - { von: [9.32, 2.7], nach: [9.32, 3.7], farbe: 1 }
  - { von: [9.68, 2.7], nach: [9.68, 3.7], farbe: 1 }
vektoren:
  - { von: [2.7, 5.7], nach: [4.3, 5.7], label: "I", farbe: 3 }
  - { von: [4.95, 4.5], nach: [4.95, 3.7], label: "I₁", farbe: 0 }
  - { von: [8.95, 4.5], nach: [8.95, 3.7], label: "I₂", farbe: 1 }
punkte:
  - { x: 5.5, y: 5.2, farbe: 0 }
  - { x: 5.5, y: 1.2, farbe: 0 }
beschriftung: "Parallelschaltung von R₁ = 60 Ω und R₂ = 40 Ω an 12 V. Beide Widerstände hängen zwischen denselben zwei Knoten. Der Gesamtstrom I teilt sich am oberen Knoten in I₁ und I₂."
```

**In kleinen Schritten zur Formel.**

1. Beide Widerstände hängen zwischen denselben zwei Knoten. Diese Knoten haben feste Potentiale. Also
   liegt an beiden Widerständen **dieselbe Spannung** $U$.
2. Nach der Knotenregel teilt sich der Strom auf: $I = I_1 + I_2$.
3. Mit $I_1 = U/R_1$ und $I_2 = U/R_2$ wird daraus $I = U\cdot\left(\dfrac{1}{R_1} + \dfrac{1}{R_2}\right)$.
4. Für den Ersatzwiderstand gilt $I = U/R_{\text{ges}}$. Der Vergleich liefert $\dfrac{1}{R_{\text{ges}}} = \dfrac{1}{R_1} + \dfrac{1}{R_2}$.

:::satz[Parallelschaltung]
$$\frac{1}{R_{\text{ges}}} = \frac{1}{R_1} + \frac{1}{R_2} + \dots, \qquad U \text{ überall gleich}, \qquad \frac{I_1}{I_2} = \frac{R_2}{R_1}.$$
Durch den kleineren Widerstand fließt der größere Strom. Der Ersatzwiderstand ist **kleiner** als der
kleinste Einzelwiderstand. Für genau zwei Widerstände gilt $R_{\text{ges}} = \dfrac{R_1\,R_2}{R_1 + R_2}$.
:::

:::beispiel[Zwei Widerstände parallel]
$R_1 = 60\,\Omega$ und $R_2 = 40\,\Omega$ liegen parallel an $12\,\text{V}$.

**Schritt 1, Teilströme:** An beiden liegen $12\,\text{V}$. $I_1 = \dfrac{12\,\text{V}}{60\,\Omega} = 0{,}20\,\text{A}$ und
$I_2 = \dfrac{12\,\text{V}}{40\,\Omega} = 0{,}30\,\text{A}$.

**Schritt 2, Gesamtstrom:** $I = 0{,}20\,\text{A} + 0{,}30\,\text{A} = 0{,}50\,\text{A}$.

**Schritt 3, Ersatzwiderstand:** $R_{\text{ges}} = \dfrac{60\cdot 40}{60 + 40}\,\Omega = 24\,\Omega$.

**Probe:** $12\,\text{V}/24\,\Omega = 0{,}50\,\text{A}$, derselbe Gesamtstrom. Und $24\,\Omega$ ist kleiner als $40\,\Omega$.
:::

**Warum wird der Widerstand kleiner, wenn man einen Widerstand dazuschaltet?** Jeder neue parallele
Widerstand ist ein **zusätzlicher Weg** für den Strom. Denk an eine Autobahn: Eine zusätzliche Fahrspur
lässt mehr Autos durch, auch wenn sie schmal ist. Mit dem **Leitwert** $G = 1/R$ ist das besonders
einfach: Parallel addieren sich die Leitwerte, $G_{\text{ges}} = G_1 + G_2$.

| | Reihenschaltung | Parallelschaltung |
|---|---|---|
| Gleich ist | der Strom $I$. | die Spannung $U$. |
| Es addieren sich | die Spannungen und die Widerstände. | die Ströme und die Leitwerte. |
| Ersatzwiderstand | größer als jeder einzelne. | kleiner als der kleinste. |
| Typisches Beispiel | alte Lichterketten. | alle Geräte im Haushalt. |

Im Haushalt sind alle Geräte **parallel** geschaltet. Jedes bekommt die volle Spannung und lässt sich
einzeln ein- und ausschalten. Je mehr Geräte laufen, desto kleiner wird der Ersatzwiderstand und desto
größer der Gesamtstrom. Irgendwann löst die Sicherung aus.

:::achtung[Fehler: Parallele Widerstände addiert]
**Falsche Rechnung:** „$10\,\Omega$ parallel zu $10\,\Omega$ ergibt $10\,\Omega + 10\,\Omega = 20\,\Omega$.“

**Richtig:** Addieren darf man nur in Reihe. Parallel addieren sich die Kehrwerte:
$\dfrac{1}{R} = \dfrac{1}{10\,\Omega} + \dfrac{1}{10\,\Omega} = \dfrac{2}{10\,\Omega}$, also $R = 5\,\Omega$. Zwei
gleiche Widerstände parallel ergeben immer den **halben** Wert. Probe: Das Ergebnis muss kleiner sein
als der kleinste Einzelwiderstand.
:::

:::achtung[Fehler: Den Kehrwert am Ende vergessen]
**Falsche Rechnung:** „$\dfrac{1}{R} = \dfrac{1}{4\,\Omega} + \dfrac{1}{12\,\Omega} = \dfrac{1}{3}$, also $R = 0{,}33\,\Omega$.“

**Richtig:** $\dfrac{1}{3\,\Omega}$ ist der **Kehrwert** des Ersatzwiderstands. Daraus folgt $R = 3\,\Omega$.
Hilfreich ist, die Einheit mitzuschreiben: $\tfrac13\,\Omega^{-1}$ ist erkennbar kein Widerstand in Ohm.
Probe: $3\,\Omega$ liegt unter $4\,\Omega$, wie es sein muss.
:::

```aufgabe
id: p13-reihe
titel: Drei Widerstände in Reihe
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Die Widerstände $100\,\Omega$, $220\,\Omega$ und $330\,\Omega$ liegen in Reihe an $12\,\text{V}$.

  a) Berechne den Strom (in mA).

  b) Berechne die Spannung am $220$-$\Omega$-Widerstand (in V).
teile:
  - typ: zahl
    label: a) I in mA
    loesung: "12/650*1000"
    einheit: "mA"
    anzeige: '18{,}5'
    fehler:
      - wert: "12/220*1000"
        meldung: |
          In der Reihenschaltung begrenzen **alle drei** Widerstände den Strom. Rechne mit dem Ersatzwiderstand $100 + 220 + 330 = 650\,\Omega$.
  - typ: zahl
    label: b) U₂ in V
    loesung: "12/650*220"
    einheit: "V"
    anzeige: '4{,}06'
    fehler:
      - wert: "4"
        meldung: |
          Die Spannung teilt sich nicht gleichmäßig auf, sondern im Verhältnis der Widerstände. Am größeren Widerstand fällt mehr ab.
hinweise:
  - 'In Reihe: $R_{\text{ges}} = R_1 + R_2 + R_3$, dann $I = U/R_{\text{ges}}$.'
loesung: |
  **a)** $R_{\text{ges}} = 100\,\Omega + 220\,\Omega + 330\,\Omega = 650\,\Omega$, also $I = \dfrac{12\,\text{V}}{650\,\Omega} = 0{,}0185\,\text{A} = 18{,}5\,\text{mA}$.
  ---
  **b)** Derselbe Strom fließt durch alle: $U_2 = R_2 I = 220\,\Omega\cdot 0{,}0185\,\text{A} = 4{,}06\,\text{V}$. Probe: $U_1 = 1{,}85\,\text{V}$, $U_3 = 6{,}09\,\text{V}$, Summe $12\,\text{V}$.
```

```aufgabe
id: p13-parallel
titel: Drei Widerstände parallel
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Die Widerstände $10\,\Omega$, $20\,\Omega$ und $20\,\Omega$ liegen parallel an $10\,\text{V}$.

  a) Berechne den Ersatzwiderstand (in Ω).

  b) Berechne den Gesamtstrom (in A).
teile:
  - typ: zahl
    label: a) R in Ω
    loesung: "1/(1/10+1/20+1/20)"
    einheit: "Ω"
    anzeige: '5'
    fehler:
      - wert: "50"
        meldung: |
          Addieren darf man nur in Reihe. Parallel addieren sich die **Kehrwerte**. Das Ergebnis muss kleiner sein als $10\,\Omega$.
      - wert: "1/10+1/20+1/20"
        meldung: |
          $0{,}2$ ist der Kehrwert $1/R$ in $\Omega^{-1}$. Bilde zum Schluss noch den Kehrwert.
  - typ: zahl
    label: b) I in A
    loesung: "10/5"
    einheit: "A"
    anzeige: '2'
    fehler:
      - wert: "10/50"
        meldung: |
          Mit dem falsch addierten Ersatzwiderstand wird der Strom viel zu klein. Prüfe Teil a).
hinweise:
  - '$\dfrac{1}{R} = \dfrac{1}{10} + \dfrac{1}{20} + \dfrac{1}{20}$ in $\Omega^{-1}$.'
loesung: |
  **a)** $\dfrac1R = \dfrac{1}{10\,\Omega} + \dfrac{1}{20\,\Omega} + \dfrac{1}{20\,\Omega} = \dfrac{0{,}2}{\Omega}$, also $R = 5\,\Omega$.
  ---
  **b)** $I = \dfrac{10\,\text{V}}{5\,\Omega} = 2\,\text{A}$. Probe mit den Teilströmen: $1\,\text{A} + 0{,}5\,\text{A} + 0{,}5\,\text{A} = 2\,\text{A}$.
```

```aufgabe
id: p13-parallel-stromteilung
titel: Wie teilt sich der Strom?
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  $R_1 = 30\,\Omega$ und $R_2 = 15\,\Omega$ liegen parallel an $6{,}0\,\text{V}$.

  a) Welcher Strom fließt durch $R_2$ (in A)?

  b) Wie groß ist der Gesamtstrom (in A)?
teile:
  - typ: zahl
    label: a) I₂ in A
    loesung: "6.0/15"
    einheit: "A"
    anzeige: '0{,}40'
    fehler:
      - wert: "6.0/30"
        meldung: |
          Das ist der Strom durch $R_1$. Durch den **kleineren** Widerstand $R_2 = 15\,\Omega$ fließt der größere Strom.
      - wert: "6.0/45"
        meldung: |
          An jedem parallelen Widerstand liegt die **volle** Spannung $6{,}0\,\text{V}$. Man darf hier nicht mit der Summe der Widerstände rechnen.
  - typ: zahl
    label: b) I in A
    loesung: "6.0/30+6.0/15"
    einheit: "A"
    anzeige: '0{,}60'
    fehler:
      - wert: "6.0/45"
        meldung: |
          Parallel addieren sich die Ströme, nicht die Widerstände. Der Gesamtstrom ist $I_1 + I_2$.
hinweise:
  - An beiden Widerständen liegt dieselbe Spannung.
loesung: |
  **a)** Parallel liegt an beiden die volle Spannung: $I_2 = \dfrac{6{,}0\,\text{V}}{15\,\Omega} = 0{,}40\,\text{A}$.
  ---
  **b)** $I_1 = \dfrac{6{,}0\,\text{V}}{30\,\Omega} = 0{,}20\,\text{A}$, also $I = 0{,}20\,\text{A} + 0{,}40\,\text{A} = 0{,}60\,\text{A}$. Probe: $R_{\text{ges}} = 10\,\Omega$ und $6{,}0\,\text{V}/10\,\Omega = 0{,}60\,\text{A}$.
```

### Ausprobieren: Reihe gegen parallel

```aufgabe
id: p13-6-vorhersage
art: check
titel: "Vorhersage: Was passiert mit dem Gesamtstrom?"
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Zwei gleiche Widerstände mit je $100\,\Omega$ liegen an einer idealen $12$-V-Quelle, zuerst in Reihe, dann parallel. Wie ändert sich der Gesamtstrom beim Umschalten von Reihe auf parallel? Entscheide, bevor du das Widget benutzt.
teile:
  - typ: auswahl
    optionen:
      - "Er wird viermal so groß."
      - "Er wird doppelt so groß."
      - "Er bleibt gleich, denn es sind dieselben Widerstände."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Zwei Effekte wirken zusammen. In Reihe sind es $200\,\Omega$, parallel nur $50\,\Omega$. Das ist ein Viertel des Widerstands, nicht die Hälfte.
      - wert: 2
        meldung: |
          Es kommt nicht nur auf die Bauteile an, sondern darauf, wie sie verbunden sind. Parallel gibt es zwei Wege für den Strom.
hinweise:
  - Berechne beide Ersatzwiderstände.
loesung: |
  In Reihe: $R = 200\,\Omega$, $I = 60\,\text{mA}$. Parallel: $R = 50\,\Omega$, $I = 240\,\text{mA}$.
  ---
  Der Strom wird viermal so groß.
```

```widget
name: stromkreis
titel: Reihenschaltung und Parallelschaltung vergleichen
props:
  schaltung: reihe
  U0: 12
  Ri: 0
  R1: 100
  R2: 100
```

**Arbeitsauftrag:**

1. **Beobachten:** Lies den Gesamtstrom bei der Reihenschaltung ab. Schalte dann auf Parallelschaltung um.
   Stimmt deine Vorhersage?
2. **Verändern:** Stelle in der Parallelschaltung $R_2$ auf den größten Wert. Wie ändert sich der Strom durch
   $R_1$? Er bleibt gleich, denn an $R_1$ liegt weiterhin die volle Spannung.
3. **Erklären:** Stelle in der Reihenschaltung $R_2$ größer. Jetzt ändert sich auch die Spannung an $R_1$.
   Erkläre mit der Maschenregel, warum.

```aufgabe
id: p13-lampen-konzept
titel: Welche Lampe leuchtet am hellsten?
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: |
  Drei gleiche Lampen sind wie im Bild geschaltet: $L_1$ liegt in Reihe mit der Parallelschaltung aus $L_2$ und $L_3$. Nimm die Widerstände der Lampen als gleich und konstant an. Welche Lampe leuchtet am hellsten?
plot:
  x: [0.5, 12.5]
  y: [0.2, 6.4]
  gleich: true
  hoehe: 300
  achsen: { x: " ", y: " " }
  graphen:
    - { f: "3.32", von: 1.05, bis: 1.95, farbe: 3, label: "U" }
    - { f: "3.08", von: 1.3, bis: 1.7, farbe: 3 }
  kurven:
    - { x: "4 + 0.35*cos(t)", y: "5.2 + 0.35*sin(t)", t: [0, "2*pi"], farbe: 1 }
    - { x: "6.5 + 0.35*cos(t)", y: "3.2 + 0.35*sin(t)", t: [0, "2*pi"], farbe: 1 }
    - { x: "10.5 + 0.35*cos(t)", y: "3.2 + 0.35*sin(t)", t: [0, "2*pi"], farbe: 1 }
  strecken:
    - { von: [1.5, 1.2], nach: [1.5, 3.08] }
    - { von: [1.5, 3.32], nach: [1.5, 5.2] }
    - { von: [1.3, 3.06], nach: [1.7, 3.06], farbe: 3 }
    - { von: [1.5, 5.2], nach: [3.65, 5.2] }
    - { von: [3.753, 4.953], nach: [4.247, 5.447], farbe: 1 }
    - { von: [3.753, 5.447], nach: [4.247, 4.953], farbe: 1 }
    - { von: [4.35, 5.2], nach: [10.5, 5.2] }
    - { von: [6.5, 5.2], nach: [6.5, 3.55] }
    - { von: [6.253, 2.953], nach: [6.747, 3.447], farbe: 1 }
    - { von: [6.253, 3.447], nach: [6.747, 2.953], farbe: 1 }
    - { von: [6.5, 2.85], nach: [6.5, 1.2] }
    - { von: [10.5, 5.2], nach: [10.5, 3.55] }
    - { von: [10.253, 2.953], nach: [10.747, 3.447], farbe: 1 }
    - { von: [10.253, 3.447], nach: [10.747, 2.953], farbe: 1 }
    - { von: [10.5, 2.85], nach: [10.5, 1.2] }
    - { von: [10.5, 1.2], nach: [1.5, 1.2] }
  punkte:
    - { x: 4.247, y: 5.447, label: "L₁", farbe: 1, offen: true }
    - { x: 6.5, y: 5.2, farbe: 0 }
    - { x: 6.5, y: 1.2, farbe: 0 }
    - { x: 6.747, y: 3.447, label: "L₂", farbe: 1, offen: true }
    - { x: 10.747, y: 3.447, label: "L₃", farbe: 1, offen: true }
teile:
  - typ: auswahl
    optionen:
      - "$L_1$, weil der ganze Strom durch sie fließt."
      - "Alle drei gleich hell, weil sie gleich gebaut sind."
      - "$L_2$ und $L_3$, weil zwei Lampen mehr leuchten als eine."
      - "$L_1$ leuchtet am schwächsten, weil sie den Strom zuerst bekommt und ihn verbraucht."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Gleich gebaut heißt nur gleicher Widerstand. Wie hell eine Lampe leuchtet, hängt vom Strom durch sie ab. Durch $L_1$ fließt der ganze Strom, durch $L_2$ und $L_3$ nur je die Hälfte.
      - wert: 2
        meldung: |
          Zusammen setzen $L_2$ und $L_3$ zwar Leistung um, aber jede einzelne bekommt nur den halben Strom. Gefragt ist nach der einzelnen hellsten Lampe.
      - wert: 3
        meldung: |
          Der Strom wird nicht verbraucht. Er teilt sich erst am Knoten hinter $L_1$ auf. Durch $L_1$ fließt deshalb der volle Strom.
hinweise:
  - Verfolge den Strom. Wo teilt er sich auf?
  - 'Die Helligkeit wächst mit dem Strom durch die Lampe. An $L_1$ liegt außerdem doppelt so viel Spannung wie an $L_2$.'
loesung: |
  **Ansatz:** Bei gleichen Lampen hängt die Helligkeit vom Strom durch die einzelne Lampe ab.
  ---
  Der ganze Strom $I$ fließt durch $L_1$. Am Knoten teilt er sich, durch $L_2$ und $L_3$ fließt je $I/2$.
  ---
  $L_1$ leuchtet am hellsten. Rechnung mit dem Widerstand $R$ je Lampe: Der Parallelteil hat $R/2$. An $L_1$ liegen zwei Drittel der Spannung, an $L_2$ und $L_3$ je ein Drittel.
```

```aufgabe
id: p13-reihe-parallel-vergleich
titel: Strom in Reihe und parallel
niveau: 2
lernziel: 4
kompetenz: begruenden
angabe: |
  Drei gleiche Widerstände mit je $30\,\Omega$ liegen an einer idealen Quelle mit $9{,}0\,\text{V}$. Auf das Wievielfache steigt der Gesamtstrom, wenn man sie von Reihe auf parallel umschaltet?
teile:
  - typ: zahl
    loesung: "(9.0/10)/(9.0/90)"
    anzeige: '9'
    fehler:
      - wert: "3"
        meldung: |
          Zwei Effekte wirken gleichzeitig. Der Widerstand wird beim Umschalten nicht nur durch $3$ geteilt. In Reihe sind es $90\,\Omega$, parallel nur $10\,\Omega$.
      - wert: "1"
        meldung: |
          Die Bauteile sind dieselben, aber der Ersatzwiderstand ist ein anderer. Parallel gibt es drei Wege für den Strom.
hinweise:
  - Berechne beide Ersatzwiderstände.
  - 'In Reihe $3R$, parallel $R/3$. Wie verhalten sich die Ströme bei gleicher Spannung?'
loesung: |
  **Ansatz:** Bei gleicher Spannung ist der Strom umgekehrt proportional zum Ersatzwiderstand.
  ---
  **Reihe:** $R = 90\,\Omega$, $I = 9{,}0\,\text{V}/90\,\Omega = 0{,}10\,\text{A}$. **Parallel:** $R = 10\,\Omega$, $I = 0{,}90\,\text{A}$.
  ---
  **Antwort:** Der Strom steigt auf das $9$-Fache. Allgemein: $n$ gleiche Widerstände haben in Reihe $n R$ und parallel $R/n$, das Verhältnis ist $n^2$.
```

```aufgabe
id: p13-parallel-gesucht
titel: Welchen Widerstand parallel schalten?
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Du hast einen Widerstand mit $60\,\Omega$, brauchst aber $20\,\Omega$. Welchen Widerstand musst du **parallel** dazuschalten (in Ω)?
teile:
  - typ: zahl
    loesung: "1/(1/20-1/60)"
    einheit: "Ω"
    anzeige: '30'
    fehler:
      - wert: "60-20"
        meldung: |
          Subtrahieren würde man nur in Reihe. Parallel gilt $\dfrac{1}{R_{\text{ges}}} = \dfrac{1}{R_1} + \dfrac{1}{R_x}$. Du musst mit Kehrwerten rechnen.
      - wert: "1/20-1/60"
        meldung: |
          Das ist $1/R_x$ in $\Omega^{-1}$. Zum Schluss den Kehrwert bilden.
hinweise:
  - '$\dfrac{1}{20\,\Omega} = \dfrac{1}{60\,\Omega} + \dfrac{1}{R_x}$.'
  - 'Löse nach $\dfrac{1}{R_x}$ auf und bilde den Kehrwert.'
loesung: |
  **Ansatz:** Parallelschaltung: $\dfrac{1}{R_{\text{ges}}} = \dfrac{1}{R_1} + \dfrac{1}{R_x}$, also $\dfrac{1}{R_x} = \dfrac{1}{R_{\text{ges}}} - \dfrac{1}{R_1}$.
  ---
  **Rechnung:** $\dfrac{1}{R_x} = \dfrac{1}{20\,\Omega} - \dfrac{1}{60\,\Omega} = \dfrac{3 - 1}{60\,\Omega} = \dfrac{1}{30\,\Omega}$, also $R_x = 30\,\Omega$.
  ---
  **Probe:** $\dfrac{60\cdot 30}{60 + 30}\,\Omega = 20\,\Omega$.
```

```reflexion
frage: Warum wird der Ersatzwiderstand kleiner, wenn man einen zusätzlichen Widerstand parallel schaltet, obwohl man doch „mehr Widerstand“ einbaut?
antwort: |
  Jeder parallele Widerstand ist ein **zusätzlicher Weg** für den Strom. An ihm liegt die volle Spannung, also fließt durch ihn ein eigener Strom. Dieser Strom kommt zum bisherigen Strom hinzu, der Gesamtstrom steigt. Bei gleicher Spannung bedeutet mehr Strom einen kleineren Ersatzwiderstand. Das Wort „Widerstand“ führt hier in die Irre. Besser denkt man an den Leitwert $G = 1/R$: Jeder parallele Weg bringt zusätzlichen Leitwert, und Leitwerte addieren sich.
```

```aufgabe
id: p13-lichterkette
titel: Eine alte Lichterkette
niveau: 3
lernziel: 4
kompetenz: modellieren
angabe: |
  Eine alte Lichterkette besteht aus $20$ gleichen Lämpchen in Reihe an $230\,\text{V}$. Jedes Lämpchen hat im Betrieb den Widerstand $46\,\Omega$.

  a) Welcher Strom fließt (in A)?

  b) Welche Spannung liegt an jedem Lämpchen (in V)?

  c) Ein Lämpchen ist so gebaut, dass es nach dem Durchbrennen einen Kurzschluss bildet. Welche Spannung liegt danach an jedem der übrigen Lämpchen (in V)?
teile:
  - typ: zahl
    label: a) I in A
    loesung: "230/(20*46)"
    einheit: "A"
    anzeige: '0{,}25'
  - typ: zahl
    label: b) U je Lämpchen in V
    loesung: "230/20"
    einheit: "V"
    anzeige: '11{,}5'
  - typ: zahl
    label: c) U je Lämpchen danach in V
    loesung: "230/19"
    einheit: "V"
    anzeige: '12{,}1'
hinweise:
  - 'In Reihe addieren sich die Widerstände: $R_{\text{ges}} = 20\cdot 46\,\Omega$.'
  - 'Alle Lämpchen sind gleich, also teilt sich die Spannung gleichmäßig auf. Nach dem Kurzschluss sind es nur noch $19$.'
gefuehrt:
  - text: Berechne den Ersatzwiderstand der Kette (in Ω).
    teil: { typ: zahl, loesung: "20*46" }
    erklaerung: '$R_{\text{ges}} = 20\cdot 46\,\Omega = 920\,\Omega$.'
  - text: Welcher Strom fließt (in A)?
    teil: { typ: zahl, loesung: "230/920" }
    erklaerung: '$I = 230\,\text{V}/920\,\Omega = 0{,}25\,\text{A}$, in jedem Lämpchen derselbe.'
  - text: Welche Spannung liegt an einem Lämpchen (in V)?
    teil: { typ: zahl, loesung: "46*0.25" }
    erklaerung: '$U = 46\,\Omega\cdot 0{,}25\,\text{A} = 11{,}5\,\text{V}$, ein Zwanzigstel von $230\,\text{V}$.'
  - text: Überlege, was der Kurzschluss eines Lämpchens für die übrigen bedeutet.
    erklaerung: 'Dann teilen sich nur noch $19$ Lämpchen die $230\,\text{V}$: je $12{,}1\,\text{V}$. Sie werden etwas heller und stärker belastet.'
loesung: |
  **a) Ansatz:** Reihenschaltung, $R_{\text{ges}} = 20\cdot 46\,\Omega = 920\,\Omega$. Also $I = \dfrac{230\,\text{V}}{920\,\Omega} = 0{,}25\,\text{A}$.
  ---
  **b)** Derselbe Strom durch alle gleichen Lämpchen, also $U = 46\,\Omega\cdot 0{,}25\,\text{A} = 11{,}5\,\text{V}$. Probe: $20\cdot 11{,}5\,\text{V} = 230\,\text{V}$.
  ---
  **c)** Das kurzgeschlossene Lämpchen hat praktisch keinen Widerstand mehr. Die $230\,\text{V}$ verteilen sich auf $19$ Lämpchen: $U = 230\,\text{V}/19 = 12{,}1\,\text{V}$. Ohne diesen Kurzschluss würde ein einziges defektes Lämpchen die ganze Kette unterbrechen, denn in Reihe gibt es nur einen Weg.
```

## Gemischte Schaltungen, Spannungsteiler und Brückenschaltung

```aufgabe
id: p13-7-check
art: check
titel: "Vorwissen: Zwei Widerstände parallel"
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Wie groß ist der Ersatzwiderstand von $6\,\Omega$ parallel zu $3\,\Omega$ (in Ω)?

  Herkunft: [13.6 Reihenschaltung und Parallelschaltung](/lernen/physik1/gleichstrom/reihenschaltung-und-parallelschaltung)
teile:
  - typ: zahl
    loesung: "6*3/(6+3)"
    einheit: "Ω"
    anzeige: '2'
    fehler:
      - wert: "9"
        meldung: |
          Addieren gilt nur in Reihe. Parallel ist das Ergebnis kleiner als der kleinste Widerstand, also kleiner als $3\,\Omega$.
hinweise:
  - 'Für zwei parallele Widerstände: $R = \dfrac{R_1 R_2}{R_1 + R_2}$.'
loesung: |
  $R = \dfrac{6\,\Omega\cdot 3\,\Omega}{6\,\Omega + 3\,\Omega} = \dfrac{18}{9}\,\Omega = 2\,\Omega$.
  ---
  Probe: $2\,\Omega$ ist kleiner als $3\,\Omega$.
```

Die meisten Schaltungen in der Prüfung sind weder reine Reihen- noch reine Parallelschaltungen. Sie
sind **gemischt**: Einige Teile liegen in Reihe, andere parallel. Man löst sie in zwei Durchgängen.

**Worum geht es in einem Satz?** Man fasst die Schaltung von innen nach außen zu einem einzigen
Ersatzwiderstand zusammen. Dann rechnet man rückwärts zu den Strömen und Spannungen der einzelnen Teile.

**Wie erkennt man, was parallel und was in Reihe liegt?** Zwei Bauteile liegen **parallel**, wenn ihre
beiden Anschlüsse jeweils am selben Knoten hängen. Zwei Bauteile liegen **in Reihe**, wenn zwischen
ihnen kein Knoten ist, an dem Strom abzweigen kann. Folge mit dem Finger den Leitungen und markiere
zuerst alle Knoten.

```plot
x: [0.5, 13]
y: [0.2, 6.4]
gleich: true
hoehe: 300
achsen: { x: " ", y: " " }
graphen:
  - { f: "3.32", von: 1.05, bis: 1.95, farbe: 3, label: "18 V" }
  - { f: "3.08", von: 1.3, bis: 1.7, farbe: 3 }
  - { f: "5.38", von: 3.5, bis: 4.5, farbe: 0, label: "R₁ = 20 Ω" }
  - { f: "5.02", von: 3.5, bis: 4.5, farbe: 0 }
  - { f: "3.7", von: 7.32, bis: 7.68, farbe: 1, label: "R₂ = 60 Ω" }
  - { f: "2.7", von: 7.32, bis: 7.68, farbe: 1 }
  - { f: "3.7", von: 10.32, bis: 10.68, farbe: 2, label: "R₃ = 30 Ω" }
  - { f: "2.7", von: 10.32, bis: 10.68, farbe: 2 }
strecken:
  - { von: [1.5, 1.2], nach: [1.5, 3.08] }
  - { von: [1.5, 3.32], nach: [1.5, 5.2] }
  - { von: [1.3, 3.06], nach: [1.7, 3.06], farbe: 3 }
  - { von: [1.5, 5.2], nach: [2.5, 5.2] }
  - { von: [2.5, 5.2], nach: [3.5, 5.2] }
  - { von: [4.5, 5.2], nach: [5.5, 5.2] }
  - { von: [3.5, 5.02], nach: [3.5, 5.38], farbe: 0 }
  - { von: [4.5, 5.02], nach: [4.5, 5.38], farbe: 0 }
  - { von: [5.5, 5.2], nach: [7.5, 5.2] }
  - { von: [7.5, 1.2], nach: [7.5, 2.7] }
  - { von: [7.5, 3.7], nach: [7.5, 5.2] }
  - { von: [7.32, 2.7], nach: [7.32, 3.7], farbe: 1 }
  - { von: [7.68, 2.7], nach: [7.68, 3.7], farbe: 1 }
  - { von: [7.5, 5.2], nach: [10.5, 5.2] }
  - { von: [10.5, 1.2], nach: [10.5, 2.7] }
  - { von: [10.5, 3.7], nach: [10.5, 5.2] }
  - { von: [10.32, 2.7], nach: [10.32, 3.7], farbe: 2 }
  - { von: [10.68, 2.7], nach: [10.68, 3.7], farbe: 2 }
  - { von: [10.5, 1.2], nach: [1.5, 1.2] }
punkte:
  - { x: 7.5, y: 5.2, farbe: 0 }
  - { x: 7.5, y: 1.2, farbe: 0 }
beschriftung: "Gemischte Schaltung: R₁ liegt in Reihe mit der Parallelschaltung aus R₂ und R₃. R₂ und R₃ hängen beide an denselben zwei Knoten. Zwischen R₁ und den beiden anderen liegt ein Knoten, also ist R₁ zu keinem von beiden einzeln in Reihe, sondern zum Parallelteil als Ganzem."
```

:::beispiel[Ein Widerstand in Reihe mit einem Parallelteil]
$R_1 = 20\,\Omega$ liegt in Reihe mit $R_2 = 60\,\Omega$ parallel $R_3 = 30\,\Omega$. Die Quelle liefert $18\,\text{V}$.

**Schritt 1, innen zusammenfassen:** $R_{23} = \dfrac{60\cdot 30}{60 + 30}\,\Omega = 20\,\Omega$.

**Schritt 2, außen zusammenfassen:** $R_1$ und $R_{23}$ liegen in Reihe: $R_{\text{ges}} = 20\,\Omega + 20\,\Omega = 40\,\Omega$.

**Schritt 3, Gesamtstrom:** $I = \dfrac{18\,\text{V}}{40\,\Omega} = 0{,}45\,\text{A}$. Er fließt ganz durch $R_1$.

**Schritt 4, rückwärts zu den Spannungen:** $U_1 = 20\,\Omega\cdot 0{,}45\,\text{A} = 9{,}0\,\text{V}$. Am Parallelteil
liegt der Rest, $U_{23} = 18\,\text{V} - 9{,}0\,\text{V} = 9{,}0\,\text{V}$.

**Schritt 5, Teilströme:** $I_2 = \dfrac{9{,}0\,\text{V}}{60\,\Omega} = 0{,}15\,\text{A}$ und $I_3 = \dfrac{9{,}0\,\text{V}}{30\,\Omega} = 0{,}30\,\text{A}$.

**Probe mit Kirchhoff:** Knoten $0{,}15 + 0{,}30 = 0{,}45\,\text{A}$. Masche $9{,}0 + 9{,}0 = 18\,\text{V}$.
:::

:::beispiel[Eine Reihenschaltung parallel zu einem Widerstand]
$R_1 = 40\,\Omega$ und $R_2 = 80\,\Omega$ liegen in Reihe. Diese Reihe liegt parallel zu $R_3 = 60\,\Omega$, alles an $12\,\text{V}$.

**Schritt 1, innen:** Die Reihe ergibt $R_{12} = 40\,\Omega + 80\,\Omega = 120\,\Omega$.

**Schritt 2, außen:** $R_{12}$ parallel $R_3$: $R_{\text{ges}} = \dfrac{120\cdot 60}{120 + 60}\,\Omega = 40\,\Omega$.

**Schritt 3, Ströme:** An beiden Zweigen liegen $12\,\text{V}$. Durch die Reihe fließen
$\dfrac{12\,\text{V}}{120\,\Omega} = 0{,}10\,\text{A}$, durch $R_3$ fließen $\dfrac{12\,\text{V}}{60\,\Omega} = 0{,}20\,\text{A}$.

**Schritt 4, Teilspannungen in der Reihe:** $U_1 = 40\,\Omega\cdot 0{,}10\,\text{A} = 4{,}0\,\text{V}$, $U_2 = 8{,}0\,\text{V}$.

**Probe:** Gesamtstrom $0{,}30\,\text{A}$, und $12\,\text{V}/40\,\Omega = 0{,}30\,\text{A}$.
:::

:::merke[Gemischte Schaltungen in zwei Durchgängen]
1. **Hinweg:** Knoten markieren. Teile, die eindeutig in Reihe oder parallel liegen, durch ihren
   Ersatzwiderstand ersetzen. Wiederholen, bis ein einziger Widerstand übrig ist.
2. Gesamtstrom $I = U/R_{\text{ges}}$ berechnen.
3. **Rückweg:** Mit dem Gesamtstrom die Spannungen an den Reihen-Teilen berechnen. Was übrig bleibt, liegt
   am Parallelteil. Daraus die Teilströme.
4. **Probe** mit Knotenregel und Maschenregel.
:::

:::achtung[Fehler: Am Parallelteil die volle Spannung angenommen]
**Falsche Rechnung:** „Im Beispiel liegt $R_3 = 30\,\Omega$ an $18\,\text{V}$, also $I_3 = 18\,\text{V}/30\,\Omega = 0{,}60\,\text{A}$.“

**Richtig:** Vor dem Parallelteil sitzt $R_1$. An ihm fallen schon $9{,}0\,\text{V}$ ab. Für den Parallelteil
bleiben nur $9{,}0\,\text{V}$, also $I_3 = 0{,}30\,\text{A}$. Die volle Quellenspannung liegt nur an Bauteilen, die
direkt an den beiden Polen hängen. Rechne deshalb immer zuerst die Spannung am Parallelteil aus.
:::

```aufgabe
id: p13-gemischt-ersatz
titel: Ersatzwiderstand einer gemischten Schaltung
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  $R_1 = 15\,\Omega$ liegt in Reihe mit der Parallelschaltung aus $R_2 = 30\,\Omega$ und $R_3 = 60\,\Omega$. Wie groß ist der Ersatzwiderstand (in Ω)?
teile:
  - typ: zahl
    loesung: "15+30*60/(30+60)"
    einheit: "Ω"
    anzeige: '35'
    fehler:
      - wert: "15+30+60"
        meldung: |
          $R_2$ und $R_3$ liegen parallel, nicht in Reihe. Fasse sie zuerst mit der Formel für die Parallelschaltung zusammen.
      - wert: "1/(1/15+1/30+1/60)"
        meldung: |
          $R_1$ liegt in Reihe zum Parallelteil, nicht parallel zu den beiden. Nur $R_2$ und $R_3$ werden über Kehrwerte zusammengefasst.
hinweise:
  - Zuerst den Parallelteil, dann die Reihe.
loesung: |
  **Innen:** $R_{23} = \dfrac{30\cdot 60}{30 + 60}\,\Omega = 20\,\Omega$.
  ---
  **Außen:** $R_{\text{ges}} = 15\,\Omega + 20\,\Omega = 35\,\Omega$.
```

```aufgabe
id: p13-gemischt
titel: Ströme in einer gemischten Schaltung
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  $R_1 = 50\,\Omega$ liegt in Reihe mit der Parallelschaltung aus $R_2 = 100\,\Omega$ und $R_3 = 150\,\Omega$. Die Spannung beträgt $15\,\text{V}$.

  a) Berechne den Ersatzwiderstand (in Ω).

  b) Berechne den Gesamtstrom (in mA).

  c) Berechne den Strom durch $R_3$ (in mA).
teile:
  - typ: zahl
    label: a) R in Ω
    loesung: "50+100*150/(100+150)"
    einheit: "Ω"
    anzeige: '110'
    fehler:
      - wert: "50+100+150"
        meldung: |
          $R_2$ und $R_3$ liegen parallel. Ihr Ersatzwiderstand ist kleiner als $100\,\Omega$, nicht ihre Summe.
  - typ: zahl
    label: b) I in mA
    loesung: "15/110*1000"
    einheit: "mA"
    anzeige: '136'
    fehler:
      - wert: "15/300*1000"
        meldung: |
          Das folgt aus dem falsch addierten Ersatzwiderstand. Rechne mit $110\,\Omega$.
  - typ: zahl
    label: c) I₃ in mA
    loesung: "15/110*60/150*1000"
    einheit: "mA"
    anzeige: '54{,}5'
    fehler:
      - wert: "15/150*1000"
        meldung: |
          An $R_3$ liegt nicht die volle Spannung von $15\,\text{V}$. Ein Teil fällt schon an $R_1$ ab. Berechne zuerst $U_{23} = I\cdot R_{23}$.
hinweise:
  - 'Zuerst $R_{23}$, dann $R_{\text{ges}}$ und $I$.'
  - 'Die Spannung am Parallelteil ist $U_{23} = I\cdot R_{23}$. Dann $I_3 = U_{23}/R_3$.'
gefuehrt:
  - text: Fasse den Parallelteil zusammen. Wie groß ist $R_{23}$ (in Ω)?
    teil: { typ: zahl, loesung: "100*150/250" }
    erklaerung: '$R_{23} = \dfrac{100\cdot 150}{250}\,\Omega = 60\,\Omega$.'
  - text: Wie groß ist der Gesamtstrom (in mA)?
    teil: { typ: zahl, loesung: "15/110*1000" }
    erklaerung: '$R_{\text{ges}} = 50\,\Omega + 60\,\Omega = 110\,\Omega$, also $I = 15\,\text{V}/110\,\Omega = 136\,\text{mA}$.'
  - text: Welche Spannung liegt am Parallelteil (in V)?
    teil: { typ: zahl, loesung: "15/110*60" }
    erklaerung: '$U_{23} = 0{,}136\,\text{A}\cdot 60\,\Omega = 8{,}18\,\text{V}$. Der Rest, $6{,}82\,\text{V}$, fällt an $R_1$ ab.'
  - text: Berechne den Strom durch $R_3$ (in mA).
    teil: { typ: zahl, loesung: "15/110*60/150*1000" }
    erklaerung: '$I_3 = 8{,}18\,\text{V}/150\,\Omega = 54{,}5\,\text{mA}$.'
loesung: |
  **a) Hinweg:** $R_{23} = \dfrac{100\cdot 150}{250}\,\Omega = 60\,\Omega$ und $R_{\text{ges}} = 50\,\Omega + 60\,\Omega = 110\,\Omega$.
  ---
  **b)** $I = \dfrac{15\,\text{V}}{110\,\Omega} = 0{,}136\,\text{A} = 136\,\text{mA}$.
  ---
  **c) Rückweg:** $U_{23} = I\cdot R_{23} = 0{,}136\,\text{A}\cdot 60\,\Omega = 8{,}18\,\text{V}$, also $I_3 = \dfrac{8{,}18\,\text{V}}{150\,\Omega} = 54{,}5\,\text{mA}$. Probe: $I_2 = 81{,}8\,\text{mA}$, und $81{,}8 + 54{,}5 = 136\,\text{mA}$.
```

```aufgabe
id: p13-schaltung-erkennen
titel: Was liegt in Reihe, was parallel?
niveau: 2
lernziel: 5
kompetenz: verstehen
angabe: |
  Welche Beschreibung der Schaltung ist richtig?
plot:
  x: [0.5, 12.5]
  y: [0.2, 6.4]
  gleich: true
  hoehe: 320
  achsen: { x: " ", y: " " }
  graphen:
    - { f: "3.32", von: 1.05, bis: 1.95, farbe: 3, label: "12 V" }
    - { f: "3.08", von: 1.3, bis: 1.7, farbe: 3 }
    - { f: "5.38", von: 3.5, bis: 4.5, farbe: 0, label: "R₁ = 2 Ω" }
    - { f: "5.02", von: 3.5, bis: 4.5, farbe: 0 }
    - { f: "3.7", von: 7.32, bis: 7.68, farbe: 1, label: "R₂ = 6 Ω" }
    - { f: "2.7", von: 7.32, bis: 7.68, farbe: 1 }
    - { f: "3.7", von: 10.32, bis: 10.68, farbe: 2, label: "R₃ = 3 Ω" }
    - { f: "2.7", von: 10.32, bis: 10.68, farbe: 2 }
  strecken:
    - { von: [1.5, 1.2], nach: [1.5, 3.08] }
    - { von: [1.5, 3.32], nach: [1.5, 5.2] }
    - { von: [1.3, 3.06], nach: [1.7, 3.06], farbe: 3 }
    - { von: [1.5, 5.2], nach: [2.5, 5.2] }
    - { von: [2.5, 5.2], nach: [3.5, 5.2] }
    - { von: [4.5, 5.2], nach: [5.5, 5.2] }
    - { von: [3.5, 5.02], nach: [3.5, 5.38], farbe: 0 }
    - { von: [4.5, 5.02], nach: [4.5, 5.38], farbe: 0 }
    - { von: [5.5, 5.2], nach: [7.5, 5.2] }
    - { von: [7.5, 1.2], nach: [7.5, 2.7] }
    - { von: [7.5, 3.7], nach: [7.5, 5.2] }
    - { von: [7.32, 2.7], nach: [7.32, 3.7], farbe: 1 }
    - { von: [7.68, 2.7], nach: [7.68, 3.7], farbe: 1 }
    - { von: [7.5, 5.2], nach: [10.5, 5.2] }
    - { von: [10.5, 1.2], nach: [10.5, 2.7] }
    - { von: [10.5, 3.7], nach: [10.5, 5.2] }
    - { von: [10.32, 2.7], nach: [10.32, 3.7], farbe: 2 }
    - { von: [10.68, 2.7], nach: [10.68, 3.7], farbe: 2 }
    - { von: [10.5, 1.2], nach: [7.5, 1.2] }
    - { von: [7.5, 1.2], nach: [1.5, 1.2] }
  vektoren:
    - { von: [2.7, 5.75], nach: [4.3, 5.75], label: "I₁", farbe: 0 }
    - { von: [6.95, 4.4], nach: [6.95, 3.4], label: "I₂", farbe: 1 }
    - { von: [9.95, 4.4], nach: [9.95, 3.4], label: "I₃", farbe: 2 }
  punkte:
    - { x: 7.5, y: 5.2, label: "P", farbe: 0 }
    - { x: 7.5, y: 1.2, label: "Q", farbe: 0 }
teile:
  - typ: auswahl
    optionen:
      - "$R_2$ und $R_3$ liegen parallel. $R_1$ liegt in Reihe mit diesem Parallelteil."
      - "$R_1$ und $R_2$ liegen in Reihe, weil sie direkt nacheinander gezeichnet sind."
      - "Alle drei Widerstände liegen parallel, weil sie alle mit der Quelle verbunden sind."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Zwischen $R_1$ und $R_2$ liegt der Knoten P. Dort zweigt ein Teil des Stroms zu $R_3$ ab. Durch $R_1$ und $R_2$ fließt also **nicht** derselbe Strom, sie liegen nicht in Reihe.
      - wert: 2
        meldung: |
          Parallel heißt: beide Anschlüsse an denselben Knoten. $R_1$ hängt mit einem Anschluss direkt am Pluspol, nicht am Knoten P. Er liegt also nicht parallel zu den anderen.
hinweise:
  - Markiere die Knoten P und Q. Welche Widerstände hängen mit beiden Enden an P und Q?
  - Fließt durch $R_1$ und $R_2$ derselbe Strom?
loesung: |
  **Ansatz:** Wir markieren die Knoten P und Q. Parallel liegen Bauteile, deren beide Enden an denselben Knoten hängen.
  ---
  $R_2$ und $R_3$ hängen beide zwischen P und Q, sie liegen parallel.
  ---
  Durch $R_1$ fließt der ganze Strom, bevor er sich bei P aufteilt. $R_1$ liegt also in Reihe mit dem Parallelteil als Ganzem.
```

### Der Spannungsteiler

Zwei Widerstände in Reihe teilen eine Spannung im Verhältnis ihrer Widerstände. Diese Schaltung heißt
**Spannungsteiler**. Man greift die Spannung am unteren Widerstand $R_2$ ab:
$$U_2 = U\cdot\frac{R_2}{R_1 + R_2}.$$
Dabei ist $U$ die Gesamtspannung und $U_2$ die abgegriffene Teilspannung. Die Formel folgt aus der
Reihenschaltung: $I = U/(R_1 + R_2)$ und $U_2 = R_2\cdot I$.

Ein **Potentiometer** ist ein Spannungsteiler mit einem verschiebbaren Abgriff, etwa ein Lautstärkeregler.
In der Elektronik erzeugt man so aus $5\,\text{V}$ eine kleinere Spannung, die ein Mikrocontroller messen kann.

**Der belastete Spannungsteiler.** Schließt man am Abgriff einen Verbraucher an, liegt er **parallel** zu
$R_2$. Der untere Teil wird dadurch kleiner, und die abgegriffene Spannung sinkt.

```plot
x: [0.5, 13]
y: [0.2, 6.8]
gleich: true
hoehe: 320
achsen: { x: " ", y: " " }
graphen:
  - { f: "3.62", von: 1.05, bis: 1.95, farbe: 3, label: "U" }
  - { f: "3.38", von: 1.3, bis: 1.7, farbe: 3 }
  - { f: "5.1", von: 5.32, bis: 5.68, farbe: 0, label: "R₁ (oben)" }
  - { f: "4.2", von: 5.32, bis: 5.68, farbe: 0 }
  - { f: "2.8", von: 5.32, bis: 5.68, farbe: 1, label: "R₂ (unten)" }
  - { f: "1.9", von: 5.32, bis: 5.68, farbe: 1 }
  - { f: "2.8", von: 9.32, bis: 9.68, farbe: 2, label: "Last" }
  - { f: "1.9", von: 9.32, bis: 9.68, farbe: 2 }
strecken:
  - { von: [1.5, 1.2], nach: [1.5, 3.38] }
  - { von: [1.5, 3.62], nach: [1.5, 5.8] }
  - { von: [1.3, 3.36], nach: [1.7, 3.36], farbe: 3 }
  - { von: [1.5, 5.8], nach: [5.5, 5.8] }
  - { von: [5.5, 3.5], nach: [5.5, 4.2] }
  - { von: [5.5, 5.1], nach: [5.5, 5.8] }
  - { von: [5.32, 4.2], nach: [5.32, 5.1], farbe: 0 }
  - { von: [5.68, 4.2], nach: [5.68, 5.1], farbe: 0 }
  - { von: [5.5, 1.2], nach: [5.5, 1.9] }
  - { von: [5.5, 2.8], nach: [5.5, 3.5] }
  - { von: [5.32, 1.9], nach: [5.32, 2.8], farbe: 1 }
  - { von: [5.68, 1.9], nach: [5.68, 2.8], farbe: 1 }
  - { von: [5.5, 1.2], nach: [1.5, 1.2] }
  - { von: [5.5, 3.5], nach: [9.5, 3.5] }
  - { von: [5.5, 1.2], nach: [9.5, 1.2] }
  - { von: [9.5, 1.2], nach: [9.5, 1.9] }
  - { von: [9.5, 2.8], nach: [9.5, 3.5] }
  - { von: [9.32, 1.9], nach: [9.32, 2.8], farbe: 2 }
  - { von: [9.68, 1.9], nach: [9.68, 2.8], farbe: 2 }
punkte:
  - { x: 5.5, y: 3.5, label: "Abgriff", farbe: 0 }
  - { x: 5.5, y: 1.2, farbe: 0 }
beschriftung: "Spannungsteiler aus R₁ und R₂ mit einer Last am Abgriff. Die Last hängt zwischen Abgriff und Minuspol, also parallel zu R₂."
```

:::beispiel[Ein Spannungsteiler mit und ohne Last]
$R_1 = R_2 = 4{,}7\,\text{k}\Omega$ liegen an $10\,\text{V}$.

**Schritt 1, ohne Last:** $U_2 = 10\,\text{V}\cdot\dfrac{4{,}7}{4{,}7 + 4{,}7} = 5{,}0\,\text{V}$.

**Schritt 2, Last parallel:** Eine Last mit $10\,\text{k}\Omega$ liegt parallel zu $R_2$:
$R_2' = \dfrac{4{,}7\cdot 10}{4{,}7 + 10}\,\text{k}\Omega = 3{,}20\,\text{k}\Omega$.

**Schritt 3, mit Last:** $U_2 = 10\,\text{V}\cdot\dfrac{3{,}20}{4{,}7 + 3{,}20} = 4{,}05\,\text{V}$.

**Deutung:** Die Last zieht die Spannung um fast ein Fünftel herunter. Ein Spannungsteiler bleibt nur
stabil, wenn die Last viel hochohmiger ist als $R_2$.
:::

:::achtung[Fehler: Belasteten Teiler mit der Formel ohne Last gerechnet]
**Falsche Rechnung:** „Der Teiler liefert $5{,}0\,\text{V}$. Also liegen an der angeschlossenen Last auch $5{,}0\,\text{V}$.“

**Richtig:** Die Formel $U_2 = U\cdot R_2/(R_1 + R_2)$ gilt nur **ohne** Last. Mit Last musst du zuerst $R_2$ und
die Last zusammenfassen, dann teilen. Im Beispiel liegen an der Last nur $4{,}05\,\text{V}$. Die Last ist ein
Teil der Schaltung und verändert sie.
:::

```aufgabe
id: p13-teiler-unbelastet
titel: Spannung am Abgriff
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Ein Spannungsteiler besteht aus $R_1 = 3{,}3\,\text{k}\Omega$ (oben) und $R_2 = 6{,}8\,\text{k}\Omega$ (unten) an $12\,\text{V}$. Welche Spannung liegt ohne Last an $R_2$ (in V)?
teile:
  - typ: zahl
    loesung: "12*6.8/(3.3+6.8)"
    einheit: "V"
    anzeige: '8{,}08'
    fehler:
      - wert: "12*3.3/(3.3+6.8)"
        meldung: |
          Das ist die Spannung an $R_1$. Gesucht ist die Spannung am **unteren** Widerstand $R_2$, also gehört $R_2$ in den Zähler.
      - wert: "12*6.8/3.3"
        meldung: |
          Im Nenner steht die **Summe** beider Widerstände, denn der Strom fließt durch beide.
hinweise:
  - '$U_2 = U\cdot\dfrac{R_2}{R_1 + R_2}$.'
loesung: |
  **Ansatz:** Ohne Last bilden $R_1$ und $R_2$ eine Reihenschaltung. Die Spannung teilt sich im Verhältnis der Widerstände.
  ---
  $U_2 = 12\,\text{V}\cdot\dfrac{6{,}8\,\text{k}\Omega}{10{,}1\,\text{k}\Omega} = 8{,}08\,\text{V}$. Probe: An $R_1$ liegen $3{,}92\,\text{V}$, zusammen $12\,\text{V}$.
```

```aufgabe
id: p13-spannungsteiler
titel: Belasteter Spannungsteiler
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Ein Spannungsteiler aus $R_1 = 1{,}0\,\text{k}\Omega$ (oben) und $R_2 = 2{,}0\,\text{k}\Omega$ (unten) liegt an $9{,}0\,\text{V}$.

  a) Welche Spannung liegt ohne Last an $R_2$ (in V)?

  b) Welche Spannung liegt dort, wenn man parallel zu $R_2$ einen Verbraucher mit $2{,}0\,\text{k}\Omega$ anschließt (in V)?
teile:
  - typ: zahl
    label: a) in V
    loesung: "9.0*2/(1+2)"
    einheit: "V"
    anzeige: '6{,}0'
    fehler:
      - wert: "9.0*1/(1+2)"
        meldung: |
          Das ist die Spannung am oberen Widerstand $R_1$. Am unteren, größeren Widerstand fällt die größere Spannung ab.
  - typ: zahl
    label: b) in V
    loesung: "9.0*1/(1+1)"
    einheit: "V"
    anzeige: '4{,}5'
    fehler:
      - wert: "9.0*2/(1+2)"
        meldung: |
          Die Last liegt parallel zu $R_2$ und verkleinert den unteren Teil. Die Spannung bleibt deshalb nicht bei $6{,}0\,\text{V}$.
hinweise:
  - '$U_2 = U\cdot R_2/(R_1 + R_2)$.'
  - 'Mit Last ist der untere Teil $2{,}0\,\text{k}\Omega \parallel 2{,}0\,\text{k}\Omega = 1{,}0\,\text{k}\Omega$.'
loesung: |
  **a)** Ohne Last: $U_2 = 9{,}0\,\text{V}\cdot\dfrac{2{,}0}{3{,}0} = 6{,}0\,\text{V}$.
  ---
  **b)** Unterer Teil mit Last: $2{,}0\,\text{k}\Omega$ parallel $2{,}0\,\text{k}\Omega$ ergibt $1{,}0\,\text{k}\Omega$. Dann $U_2 = 9{,}0\,\text{V}\cdot\dfrac{1{,}0}{2{,}0} = 4{,}5\,\text{V}$.
  ---
  **Deutung:** Die Last zieht die Spannung von $6{,}0$ auf $4{,}5\,\text{V}$ herunter. Ein Spannungsteiler ist nur stabil, wenn der Verbraucher viel hochohmiger als $R_2$ ist.
```

### Die Wheatstone-Brücke

Mit zwei Spannungsteilern nebeneinander kann man einen unbekannten Widerstand sehr genau messen. Diese
Schaltung heißt **Wheatstone-Brücke**. Ein Spannungsmesser verbindet die beiden Abgriffe C und D wie
eine Brücke.

```plot
x: [0.5, 13]
y: [0.2, 6.8]
gleich: true
hoehe: 340
achsen: { x: " ", y: " " }
graphen:
  - { f: "3.62", von: 1.05, bis: 1.95, farbe: 3, label: "U" }
  - { f: "3.38", von: 1.3, bis: 1.7, farbe: 3 }
  - { f: "5.1", von: 4.32, bis: 4.68, farbe: 0, label: "R₁" }
  - { f: "4.2", von: 4.32, bis: 4.68, farbe: 0 }
  - { f: "2.8", von: 4.32, bis: 4.68, farbe: 0, label: "R₂" }
  - { f: "1.9", von: 4.32, bis: 4.68, farbe: 0 }
  - { f: "5.1", von: 10.32, bis: 10.68, farbe: 1, label: "R₃" }
  - { f: "4.2", von: 10.32, bis: 10.68, farbe: 1 }
  - { f: "2.8", von: 10.32, bis: 10.68, farbe: 1, label: "Rₓ" }
  - { f: "1.9", von: 10.32, bis: 10.68, farbe: 1 }
kurven:
  - { x: "7.5 + 0.32*cos(t)", y: "3.5 + 0.32*sin(t)", t: [0, "2*pi"], farbe: 2 }
strecken:
  - { von: [1.5, 1.2], nach: [1.5, 3.38] }
  - { von: [1.5, 3.62], nach: [1.5, 5.8] }
  - { von: [1.3, 3.36], nach: [1.7, 3.36], farbe: 3 }
  - { von: [1.5, 5.8], nach: [10.5, 5.8] }
  - { von: [1.5, 1.2], nach: [10.5, 1.2] }
  - { von: [4.5, 3.5], nach: [4.5, 4.2] }
  - { von: [4.5, 5.1], nach: [4.5, 5.8] }
  - { von: [4.32, 4.2], nach: [4.32, 5.1], farbe: 0 }
  - { von: [4.68, 4.2], nach: [4.68, 5.1], farbe: 0 }
  - { von: [4.5, 1.2], nach: [4.5, 1.9] }
  - { von: [4.5, 2.8], nach: [4.5, 3.5] }
  - { von: [4.32, 1.9], nach: [4.32, 2.8], farbe: 0 }
  - { von: [4.68, 1.9], nach: [4.68, 2.8], farbe: 0 }
  - { von: [10.5, 3.5], nach: [10.5, 4.2] }
  - { von: [10.5, 5.1], nach: [10.5, 5.8] }
  - { von: [10.32, 4.2], nach: [10.32, 5.1], farbe: 1 }
  - { von: [10.68, 4.2], nach: [10.68, 5.1], farbe: 1 }
  - { von: [10.5, 1.2], nach: [10.5, 1.9] }
  - { von: [10.5, 2.8], nach: [10.5, 3.5] }
  - { von: [10.32, 1.9], nach: [10.32, 2.8], farbe: 1 }
  - { von: [10.68, 1.9], nach: [10.68, 2.8], farbe: 1 }
  - { von: [4.5, 3.5], nach: [7.18, 3.5] }
  - { von: [7.39, 3.67], nach: [7.5, 3.33], farbe: 2 }
  - { von: [7.5, 3.33], nach: [7.61, 3.67], farbe: 2 }
  - { von: [7.82, 3.5], nach: [10.5, 3.5] }
punkte:
  - { x: 4.5, y: 5.8, farbe: 0 }
  - { x: 4.5, y: 1.2, farbe: 0 }
  - { x: 10.5, y: 5.8, farbe: 0 }
  - { x: 10.5, y: 1.2, farbe: 0 }
  - { x: 4.5, y: 3.5, label: "C", farbe: 0 }
  - { x: 10.5, y: 3.5, label: "D", farbe: 0 }
beschriftung: "Wheatstone-Brücke. Links teilen R₁ und R₂ die Spannung, rechts R₃ und der unbekannte Widerstand Rₓ. Der Spannungsmesser zwischen den Abgriffen C und D zeigt den Potentialunterschied der beiden Teiler."
```

**Hier zahlt sich die Potentialdifferenz aus.** Der Minuspol liegt auf $0\,\text{V}$. Nach der
Teilerformel hat C das Potential $\varphi_C = U\cdot\dfrac{R_2}{R_1 + R_2}$ und D das Potential
$\varphi_D = U\cdot\dfrac{R_x}{R_3 + R_x}$. Der Spannungsmesser zeigt $\varphi_C - \varphi_D$. Er zeigt null, wenn
beide Teiler die Spannung im gleichen Verhältnis teilen. Dann heißt die Brücke **abgeglichen**:
$$\frac{R_1}{R_2} = \frac{R_3}{R_x}, \qquad\text{also}\qquad R_x = R_3\cdot\frac{R_2}{R_1}.$$
Diese Bedingung enthält die Spannung $U$ nicht mehr. Schwankungen der Quelle stören die Messung deshalb
nicht. Das macht die Brücke so genau.

:::beispiel[Einen Widerstand mit der Brücke messen]
In der Brücke ist $R_1 = 100\,\Omega$, $R_2 = 150\,\Omega$ und $R_3 = 220\,\Omega$. Der Spannungsmesser zeigt null.

**Schritt 1, Abgleichbedingung:** $\dfrac{R_1}{R_2} = \dfrac{R_3}{R_x}$, umgestellt $R_x = R_3\cdot\dfrac{R_2}{R_1}$.

**Schritt 2, Einsetzen:** $R_x = 220\,\Omega\cdot\dfrac{150\,\Omega}{100\,\Omega} = 330\,\Omega$.

**Probe:** Links teilt sich die Spannung im Verhältnis $100 : 150 = 2 : 3$, rechts im Verhältnis $220 : 330 = 2 : 3$. Beide Abgriffe liegen bei $\tfrac35\,U$.
:::

```aufgabe
id: p13-bruecke
titel: Abgeglichene Brücke
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  In einer Wheatstone-Brücke wie im Bild ist $R_1 = 470\,\Omega$, $R_2 = 1000\,\Omega$ und $R_3 = 120\,\Omega$. Der Spannungsmesser zeigt null. Wie groß ist $R_x$ (in Ω)?
teile:
  - typ: zahl
    loesung: "120*1000/470"
    einheit: "Ω"
    anzeige: '255'
    fehler:
      - wert: "470*120/1000"
        meldung: |
          Die Verhältnisse sind vertauscht. Abgeglichen heißt $R_1 : R_2 = R_3 : R_x$. Weil $R_2$ größer als $R_1$ ist, muss auch $R_x$ größer als $R_3$ sein.
hinweise:
  - 'Abgleich: $\dfrac{R_1}{R_2} = \dfrac{R_3}{R_x}$.'
  - 'Löse nach $R_x$ auf: $R_x = R_3\cdot R_2/R_1$.'
loesung: |
  **Ansatz:** Zeigt der Spannungsmesser null, haben C und D dasselbe Potential. Beide Teiler teilen im gleichen Verhältnis: $\dfrac{R_1}{R_2} = \dfrac{R_3}{R_x}$.
  ---
  **Umstellen:** $R_x = R_3\cdot\dfrac{R_2}{R_1} = 120\,\Omega\cdot\dfrac{1000}{470} = 255\,\Omega$.
  ---
  **Probe:** $470 : 1000 = 0{,}47$ und $120 : 255 = 0{,}47$. Die Verhältnisse stimmen überein.
```

```aufgabe
id: p13-bruecke-unabgeglichen
titel: Eine Brücke als Temperatursensor
niveau: 3
lernziel: 5
kompetenz: modellieren
angabe: |
  Eine Brücke liegt an $10\,\text{V}$. Es ist $R_1 = R_2 = R_3 = 1{,}0\,\text{k}\Omega$. Anstelle von $R_x$ sitzt ein Temperaturfühler. Bei $20\,^\circ\text{C}$ hat er $1{,}0\,\text{k}\Omega$, bei einer höheren Temperatur $1{,}2\,\text{k}\Omega$. Der Minuspol liegt auf $0\,\text{V}$.

  a) Welches Potential hat C (in V)?

  b) Welches Potential hat D bei der höheren Temperatur (in V)?

  c) Welche Spannung zeigt der Spannungsmesser zwischen D und C (in V)?
teile:
  - typ: zahl
    label: a) φ_C in V
    loesung: "10*1.0/2.0"
    einheit: "V"
    anzeige: '5{,}0'
  - typ: zahl
    label: b) φ_D in V
    loesung: "10*1.2/2.2"
    einheit: "V"
    anzeige: '5{,}45'
  - typ: zahl
    label: c) U in V
    loesung: "10*1.2/2.2-5"
    einheit: "V"
    anzeige: '0{,}455'
hinweise:
  - 'Jeder Zweig ist ein Spannungsteiler. Das Potential des Abgriffs ist die Spannung am unteren Widerstand.'
  - 'Rechts: $\varphi_D = 10\,\text{V}\cdot\dfrac{R_x}{R_3 + R_x}$. Die Anzeige ist die Differenz $\varphi_D - \varphi_C$.'
loesung: |
  **Ansatz:** Jeder Zweig der Brücke ist ein unbelasteter Spannungsteiler, denn der ideale Spannungsmesser nimmt keinen Strom auf. Das Potential eines Abgriffs ist die Spannung am unteren Widerstand.
  ---
  **a)** Links sind beide Widerstände gleich: $\varphi_C = 10\,\text{V}\cdot\dfrac{1{,}0}{2{,}0} = 5{,}0\,\text{V}$.
  ---
  **b)** Rechts: $\varphi_D = 10\,\text{V}\cdot\dfrac{1{,}2}{1{,}0 + 1{,}2} = 5{,}45\,\text{V}$.
  ---
  **c)** $U = \varphi_D - \varphi_C = 5{,}45\,\text{V} - 5{,}00\,\text{V} = 0{,}455\,\text{V}$. Bei $20\,^\circ\text{C}$ zeigt die Brücke null. Jede Temperaturänderung erzeugt eine Spannung, die man leicht messen kann.
```

```reflexion
frage: Warum hängt die Abgleichbedingung der Wheatstone-Brücke nicht von der Spannung der Quelle ab? Und warum ist das für eine Messung so wertvoll?
antwort: |
  Beide Zweige liegen an derselben Spannung $U$. Jeder Abgriff hat ein Potential, das ein fester Bruchteil von $U$ ist: links $U\cdot R_2/(R_1 + R_2)$, rechts $U\cdot R_x/(R_3 + R_x)$. Sind die beiden Bruchteile gleich, sind auch die Potentiale gleich, egal wie groß $U$ ist. Ändert sich $U$, ändern sich beide Potentiale im selben Verhältnis. Für die Messung heißt das: Eine schwankende oder ungenaue Quelle verfälscht das Ergebnis nicht. Man muss nur die drei bekannten Widerstände genau kennen und auf null abgleichen.
```

### Netzwerke mit zwei Quellen

Enthält eine Schaltung zwei Quellen in verschiedenen Zweigen, lässt sie sich nicht mehr zusammenfassen.
Dann braucht man die Kirchhoffschen Regeln aus der Lektion
[13.5 Die Kirchhoffschen Regeln](/lernen/physik1/gleichstrom/die-kirchhoffschen-regeln-knoten-und-maschen).
Am schnellsten geht es oft mit einem einzigen Trick: Man nennt das unbekannte Potential eines Knotens
$U$ und drückt jeden Strom durch $U$ aus. Die Knotenregel liefert dann eine einzige Gleichung für $U$.

```plot
x: [0.5, 13.5]
y: [0.2, 6.4]
gleich: true
hoehe: 330
achsen: { x: " ", y: " " }
graphen:
  - { f: "3.32", von: 1.05, bis: 1.95, farbe: 3, label: "U₁ = 12 V" }
  - { f: "3.08", von: 1.3, bis: 1.7, farbe: 3 }
  - { f: "5.38", von: 3, bis: 4, farbe: 0, label: "R₁ = 2,0 Ω" }
  - { f: "5.02", von: 3, bis: 4, farbe: 0 }
  - { f: "2.22", von: 6.05, bis: 6.95, farbe: 3, label: "U₂ = 6,0 V" }
  - { f: "1.98", von: 6.3, bis: 6.7, farbe: 3 }
  - { f: "4.55", von: 6.32, bis: 6.68, farbe: 1, label: "R₂ = 4,0 Ω" }
  - { f: "3.65", von: 6.32, bis: 6.68, farbe: 1 }
  - { f: "3.7", von: 10.32, bis: 10.68, farbe: 2, label: "R₃ = 6,0 Ω" }
  - { f: "2.7", von: 10.32, bis: 10.68, farbe: 2 }
strecken:
  - { von: [1.5, 1.2], nach: [1.5, 3.08] }
  - { von: [1.5, 3.32], nach: [1.5, 5.2] }
  - { von: [1.3, 3.06], nach: [1.7, 3.06], farbe: 3 }
  - { von: [1.5, 5.2], nach: [2, 5.2] }
  - { von: [2, 5.2], nach: [3, 5.2] }
  - { von: [4, 5.2], nach: [5, 5.2] }
  - { von: [3, 5.02], nach: [3, 5.38], farbe: 0 }
  - { von: [4, 5.02], nach: [4, 5.38], farbe: 0 }
  - { von: [5, 5.2], nach: [6.5, 5.2] }
  - { von: [6.5, 1.2], nach: [6.5, 1.98] }
  - { von: [6.5, 2.22], nach: [6.5, 3] }
  - { von: [6.3, 1.96], nach: [6.7, 1.96], farbe: 3 }
  - { von: [6.5, 3], nach: [6.5, 3.65] }
  - { von: [6.5, 4.55], nach: [6.5, 5.2] }
  - { von: [6.32, 3.65], nach: [6.32, 4.55], farbe: 1 }
  - { von: [6.68, 3.65], nach: [6.68, 4.55], farbe: 1 }
  - { von: [6.5, 5.2], nach: [10.5, 5.2] }
  - { von: [10.5, 1.2], nach: [10.5, 2.7] }
  - { von: [10.5, 3.7], nach: [10.5, 5.2] }
  - { von: [10.32, 2.7], nach: [10.32, 3.7], farbe: 2 }
  - { von: [10.68, 2.7], nach: [10.68, 3.7], farbe: 2 }
  - { von: [10.5, 1.2], nach: [1.5, 1.2] }
punkte:
  - { x: 6.5, y: 5.2, label: "P", farbe: 0 }
  - { x: 6.5, y: 1.2, farbe: 0 }
beschriftung: "Zwei Quellen speisen gemeinsam die Last R₃. Quelle 1 hat den Vorwiderstand R₁, Quelle 2 den Vorwiderstand R₂. Alle drei Zweige hängen zwischen dem Knoten P und dem Minus-Knoten."
```

```aufgabe
id: p13-kirchhoff-masche
titel: Zwei Quellen speisen eine Last
niveau: 3
lernziel: 5
kompetenz: rechnen
angabe: |
  In der Schaltung mit zwei Quellen ist $U_1 = 12\,\text{V}$, $R_1 = 2{,}0\,\Omega$, $U_2 = 6{,}0\,\text{V}$, $R_2 = 4{,}0\,\Omega$ und die Last $R_3 = 6{,}0\,\Omega$. Die Minuspole sind verbunden und liegen auf $0\,\text{V}$.

  a) Berechne das Potential $U$ des Knotens P, also die Spannung an der Last (in V).

  b) Berechne den Strom aus Quelle 2. Er soll positiv sein, wenn er Quelle 2 normal entlädt, also aus ihrem Pluspol nach P fließt (in A).
teile:
  - typ: zahl
    label: a) U in V
    loesung: "90/11"
    einheit: "V"
    anzeige: '8{,}18'
  - typ: zahl
    label: b) I₂ in A
    loesung: "(6-90/11)/4"
    einheit: "A"
    anzeige: '-0{,}545'
hinweise:
  - 'Nenne das Potential von P einfach $U$. Durch $R_1$ fließt $I_1 = (12 - U)/2$, durch $R_2$ fließt $I_2 = (6 - U)/4$, durch $R_3$ fließt $I_3 = U/6$, alles in A.'
  - 'Knotenregel bei P: $I_1 + I_2 = I_3$. Multipliziere die Gleichung mit $12$, um die Brüche loszuwerden.'
loesung: |
  **Ansatz:** Wir nennen das Potential von P $U$. An $R_1$ liegt der Unterschied zwischen dem Pluspol von Quelle 1 ($12\,\text{V}$) und P, also $I_1 = \dfrac{12 - U}{2}$. Ebenso $I_2 = \dfrac{6 - U}{4}$ und $I_3 = \dfrac{U}{6}$.
  ---
  **Knotenregel bei P:** $I_1 + I_2 = I_3$. Mal $12$: $6\,(12 - U) + 3\,(6 - U) = 2U$, also $72 + 18 = 11U$ und $U = \dfrac{90}{11}\,\text{V} = 8{,}18\,\text{V}$.
  ---
  **Strom aus Quelle 2:** $I_2 = \dfrac{6 - 8{,}18}{4}\,\text{A} = -0{,}545\,\text{A}$. Das Minus heißt: Der Strom fließt **in** Quelle 2 hinein. Die stärkere Quelle lädt die schwächere.
  ---
  **Probe und Folgerung:** $I_1 = 1{,}91\,\text{A}$, $I_3 = 1{,}36\,\text{A}$, und $1{,}91 - 0{,}545 = 1{,}36$. Deshalb schaltet man Batterien mit verschiedener Spannung nie parallel.
```

## Elektrische Arbeit, Leistung und Energiekosten

```aufgabe
id: p13-8-check
art: check
titel: "Vorwissen: Wirkungsgrad"
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Ein Elektromotor nimmt $800\,\text{W}$ auf und gibt $600\,\text{W}$ als mechanische Leistung ab. Wie groß ist sein Wirkungsgrad (in Prozent)?

  Herkunft: [Kapitel 4, Leistung und Wirkungsgrad](/lernen/physik1/arbeit-energie-impuls/leistung-und-wirkungsgrad)
teile:
  - typ: zahl
    loesung: "600/800*100"
    einheit: "%"
    anzeige: '75'
    fehler:
      - wert: "800/600*100"
        meldung: |
          Ein Wirkungsgrad über $100\,\%$ ist unmöglich. Es gilt Nutzen durch Aufwand: $\eta = P_{\text{nutz}}/P_{\text{zu}}$.
hinweise:
  - '$\eta = P_{\text{nutz}}/P_{\text{zu}}$.'
loesung: |
  Wirkungsgrad ist Nutzen durch Aufwand: $\eta = \dfrac{600\,\text{W}}{800\,\text{W}} = 0{,}75 = 75\,\%$.
  ---
  Die restlichen $200\,\text{W}$ werden zu Wärme in den Wicklungen und durch Reibung.
```

Wir wissen aus der Lektion
[13.2 Der Stromkreis: Strom wird nicht verbraucht](/lernen/physik1/gleichstrom/der-stromkreis-strom-wird-nicht-verbraucht):
Im Verbraucher wird nicht die Ladung, sondern die Energie umgewandelt. Jetzt berechnen wir, wie viel.

**Worum geht es in einem Satz?** Jedes Coulomb gibt beim Durchlaufen der Spannung $U$ die Energie $U$
Joule ab. Fließen pro Sekunde $I$ Coulomb, wird pro Sekunde die Energie $U\cdot I$ umgewandelt.

**In kleinen Schritten.**

1. Aus der Definition der Spannung ($U = W/Q$) folgt für die umgewandelte Energie $W = Q\cdot U$.
2. Bei konstantem Strom fließt in der Zeit $t$ die Ladung $Q = I\cdot t$. Also $W = U\cdot I\cdot t$.
3. Die **Leistung** ist Energie pro Zeit: $P = W/t = U\cdot I$.
4. Für einen Widerstand gilt außerdem $U = R\cdot I$. Eingesetzt erhält man zwei weitere Formen.

:::satz[Elektrische Arbeit und Leistung]
$$W = U\cdot I\cdot t, \qquad P = U\cdot I = I^2\cdot R = \frac{U^2}{R}.$$
Dabei ist $W$ die umgewandelte Energie, auch **elektrische Arbeit** genannt, in Joule, $P$ die Leistung in
Watt, $U$ die Spannung am Bauteil und $I$ der Strom durch das Bauteil. Es gilt $1\,\text{W} = 1\,\text{V}\cdot\text{A}$
und $1\,\text{J} = 1\,\text{W}\cdot\text{s}$.
:::

**Welche Form nimmt man?** Alle drei sind gleichwertig. Bei **gleicher Spannung**, also in der
Parallelschaltung und im Haushalt, ist $P = U^2/R$ praktisch: Der **kleinere** Widerstand setzt mehr
Leistung um. Bei **gleichem Strom**, also in der Reihenschaltung, ist $P = I^2 R$ praktisch: Der
**größere** Widerstand setzt mehr Leistung um.

### Kilowattstunden und Energiekosten

Im Haushalt misst man Energie in **Kilowattstunden**. Eine Kilowattstunde ist die Energie, die ein Gerät
mit $1\,\text{kW}$ in einer Stunde umsetzt:
$$1\,\text{kWh} = 1000\,\text{W}\cdot 3600\,\text{s} = 3{,}6\cdot 10^{6}\,\text{J}.$$
Die Kilowattstunde ist eine **Energieeinheit**, keine Leistungseinheit. Der Stromzähler misst
Kilowattstunden. Eine Kilowattstunde kostet in Österreich etwa $0{,}30$ Euro. Für die Leistung im
Haushalt rechnet man mit $230\,\text{V}$ wie mit einer Gleichspannung. Warum das bei Wechselstrom erlaubt
ist, erklärt [Kapitel 14, Wechselspannung: Scheitelwert und Effektivwert](/lernen/physik1/magnetismus-wechselstrom/wechselspannung-scheitelwert-und-effektivwert).

:::beispiel[Ein Föhn]
Ein Föhn hat $1800\,\text{W}$ an $230\,\text{V}$. Er läuft $30$ Tage lang je $10$ Minuten.

**Schritt 1, Strom:** $I = \dfrac{P}{U} = \dfrac{1800\,\text{W}}{230\,\text{V}} = 7{,}83\,\text{A}$.

**Schritt 2, Widerstand:** $R = \dfrac{U^2}{P} = \dfrac{(230\,\text{V})^2}{1800\,\text{W}} = 29{,}4\,\Omega$.

**Schritt 3, Energie:** Die Laufzeit ist $30\cdot 10\,\text{min} = 300\,\text{min} = 5{,}0\,\text{h}$. Also
$W = 1{,}8\,\text{kW}\cdot 5{,}0\,\text{h} = 9{,}0\,\text{kWh}$.

**Schritt 4, Kosten:** $9{,}0\,\text{kWh}\cdot 0{,}30\,\tfrac{\text{Euro}}{\text{kWh}} = 2{,}70$ Euro im Monat.
:::

:::achtung[Fehler: Minuten als Stunden gerechnet]
**Falsche Rechnung:** „Ein Wasserkocher mit $2{,}0\,\text{kW}$ läuft $5$ Minuten. Also
$W = 2{,}0\,\text{kW}\cdot 5 = 10\,\text{kWh}$.“

**Richtig:** Für Kilowattstunden muss die Zeit in **Stunden** stehen: $5\,\text{min} = \tfrac{5}{60}\,\text{h}$. Dann
$W = 2{,}0\,\text{kW}\cdot\tfrac{5}{60}\,\text{h} = 0{,}17\,\text{kWh}$. Das kostet etwa $5$ Cent, nicht $3$ Euro. Auch
„Der Wasserkocher braucht $2\,\text{kW}$ pro Stunde“ ist falsch formuliert. Kilowatt ist schon Energie pro Zeit.
:::

```aufgabe
id: p13-wasserkocher
titel: Wasserkocher
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Ein Wasserkocher hat die Leistung $2000\,\text{W}$ bei $230\,\text{V}$.

  a) Berechne den Strom (in A).

  b) Berechne den Widerstand des Heizelements (in Ω).

  c) Berechne die Kosten für $5$ Minuten Betrieb bei $0{,}30$ Euro pro kWh (in Euro).
teile:
  - typ: zahl
    label: a) I in A
    loesung: "2000/230"
    einheit: "A"
    anzeige: '8{,}70'
    fehler:
      - wert: "2000*230"
        meldung: |
          Aus $P = U\cdot I$ folgt $I = P/U$. Es wird geteilt.
  - typ: zahl
    label: b) R in Ω
    loesung: "230^2/2000"
    einheit: "Ω"
    anzeige: '26{,}5'
    fehler:
      - wert: "230/2000"
        meldung: |
          $U/P$ ist kein Widerstand. Nimm $R = U^2/P$ oder $R = U/I$ mit dem Strom aus a).
  - typ: zahl
    label: c) Kosten in Euro
    loesung: "2*5/60*0.30"
    einheit: "Euro"
    anzeige: '0{,}05'
    fehler:
      - wert: "2*5*0.30"
        meldung: |
          Die Zeit muss in Stunden stehen: $5\,\text{min} = \tfrac{5}{60}\,\text{h}$.
hinweise:
  - '$I = P/U$ und $R = U^2/P$. Für die Kosten: $W$ in kWh mal Preis.'
loesung: |
  **a)** $I = \dfrac{P}{U} = \dfrac{2000\,\text{W}}{230\,\text{V}} = 8{,}70\,\text{A}$.
  ---
  **b)** $R = \dfrac{U^2}{P} = \dfrac{(230\,\text{V})^2}{2000\,\text{W}} = 26{,}5\,\Omega$. Probe: $230\,\text{V}/8{,}70\,\text{A} = 26{,}4\,\Omega$, bis auf Rundung gleich.
  ---
  **c)** $W = 2{,}0\,\text{kW}\cdot\tfrac{5}{60}\,\text{h} = 0{,}167\,\text{kWh}$, Kosten $0{,}167\,\text{kWh}\cdot 0{,}30\,\tfrac{\text{Euro}}{\text{kWh}} = 0{,}05$ Euro.
```

```aufgabe
id: p13-standby
titel: Dauerbetrieb eines Routers
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Ein WLAN-Router nimmt ständig $10\,\text{W}$ auf.

  a) Wie viel Energie braucht er in einem Jahr mit 365 Tagen (in kWh)?

  b) Was kostet das bei $0{,}30$ Euro pro kWh (in Euro)?
teile:
  - typ: zahl
    label: a) Energie in kWh
    loesung: "10*24*365/1000"
    einheit: "kWh"
    anzeige: '87{,}6'
    fehler:
      - wert: "10*24*365"
        meldung: |
          Das sind Wattstunden. Für Kilowattstunden musst du noch durch $1000$ teilen.
  - typ: zahl
    label: b) Kosten in Euro
    loesung: "10*24*365/1000*0.30"
    einheit: "Euro"
    anzeige: '26{,}3'
    fehler:
      - wert: "10*24*365*0.30"
        meldung: |
          Der Preis gilt pro **Kilowattstunde**. Rechne zuerst die Energie in kWh um.
hinweise:
  - 'Ein Jahr hat $365\cdot 24 = 8760$ Stunden. $10\,\text{W} = 0{,}010\,\text{kW}$.'
loesung: |
  **a)** $W = P\cdot t = 0{,}010\,\text{kW}\cdot 8760\,\text{h} = 87{,}6\,\text{kWh}$.
  ---
  **b)** Kosten: $87{,}6\,\text{kWh}\cdot 0{,}30\,\tfrac{\text{Euro}}{\text{kWh}} = 26{,}3$ Euro pro Jahr. Kleine Dauerverbraucher summieren sich.
```

### Leistung in Reihe und parallel

:::beispiel[Zwei Heizwiderstände in Reihe und parallel]
Zwei Heizwiderstände mit $20\,\Omega$ und $40\,\Omega$ liegen an $24\,\text{V}$.

**In Reihe:** Der Strom ist überall gleich, $I = \dfrac{24\,\text{V}}{60\,\Omega} = 0{,}40\,\text{A}$. Wir nehmen $P = I^2 R$:
$P_{20} = (0{,}40\,\text{A})^2\cdot 20\,\Omega = 3{,}2\,\text{W}$ und $P_{40} = (0{,}40\,\text{A})^2\cdot 40\,\Omega = 6{,}4\,\text{W}$.
Der **größere** Widerstand wird wärmer.

**Parallel:** Die Spannung ist gleich, wir nehmen $P = U^2/R$:
$P_{20} = \dfrac{(24\,\text{V})^2}{20\,\Omega} = 28{,}8\,\text{W}$ und $P_{40} = \dfrac{(24\,\text{V})^2}{40\,\Omega} = 14{,}4\,\text{W}$. Jetzt wird der
**kleinere** Widerstand wärmer.

**Deutung:** Es gibt keine allgemeine Regel „großer Widerstand, große Leistung“. Es kommt darauf an, was
gleich bleibt, der Strom oder die Spannung. Parallel setzen beide zusammen $43{,}2\,\text{W}$ um, in Reihe nur $9{,}6\,\text{W}$.
:::

:::achtung[Fehler: Halbe Spannung, halbe Leistung]
**Falsche Rechnung:** „Ein Heizstab hat an $230\,\text{V}$ die Leistung $1000\,\text{W}$. An $115\,\text{V}$ hat er
also $500\,\text{W}$.“

**Richtig:** Bei halber Spannung halbiert sich auch der Strom. Beides zusammen gibt ein Viertel:
$P = U^2/R$ mit festem $R$, also $P = 1000\,\text{W}\cdot\left(\tfrac12\right)^2 = 250\,\text{W}$. Die Leistung ist zum
**Quadrat** der Spannung proportional, solange der Widerstand konstant bleibt.
:::

```aufgabe
id: p13-leistung-formel
titel: Leistung bei halber Spannung
niveau: 2
lernziel: 6
kompetenz: begruenden
angabe: |
  Ein ohmscher Heizwiderstand nimmt an $230\,\text{V}$ die Leistung $1500\,\text{W}$ auf. Welche Leistung nimmt er an $115\,\text{V}$ auf (in W)?
teile:
  - typ: zahl
    loesung: "1500*(115/230)^2"
    einheit: "W"
    anzeige: '375'
    fehler:
      - wert: "1500/2"
        meldung: |
          Bei halber Spannung halbiert sich auch der Strom. Weil $P = U\cdot I$ ist, sinkt die Leistung auf ein **Viertel**.
hinweise:
  - Der Widerstand bleibt gleich. Welche Formel für $P$ enthält nur $U$ und $R$?
  - 'Mit $P = U^2/R$: Was passiert mit $U^2$, wenn $U$ halbiert wird?'
loesung: |
  **Ansatz:** Der Widerstand ist konstant, also nehmen wir $P = U^2/R$. Die Leistung ist proportional zu $U^2$.
  ---
  Halbe Spannung heißt $U^2$ ein Viertel: $P = 1500\,\text{W}\cdot\left(\tfrac{115}{230}\right)^2 = 1500\,\text{W}\cdot 0{,}25 = 375\,\text{W}$.
  ---
  **Kontrolle über den Strom:** $R = (230\,\text{V})^2/1500\,\text{W} = 35{,}3\,\Omega$. Bei $115\,\text{V}$ fließen $3{,}26\,\text{A}$, und $115\,\text{V}\cdot 3{,}26\,\text{A} = 375\,\text{W}$.
```

```aufgabe
id: p13-leistung-welche-formel
titel: Welcher Widerstand wird wärmer?
niveau: 2
lernziel: 6
kompetenz: verstehen
angabe: |
  Zwei Widerstände mit $100\,\Omega$ und $200\,\Omega$ werden einmal in Reihe und einmal parallel an dieselbe Spannung gelegt. Welche Aussagen sind richtig? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "In Reihe setzt der $200$-$\\Omega$-Widerstand mehr Leistung um."
      - "Parallel setzt der $100$-$\\Omega$-Widerstand mehr Leistung um."
      - "In beiden Schaltungen setzt immer der größere Widerstand mehr Leistung um."
      - "Parallel setzen beide zusammen mehr Leistung um als in Reihe."
    richtig: [0, 1, 3]
    fehler:
      - wert: [0, 2, 3]
        meldung: |
          Parallel liegt an beiden dieselbe Spannung. Dann gilt $P = U^2/R$, und der **kleinere** Widerstand setzt mehr um.
      - wert: [0, 1]
        meldung: |
          Auch die vierte Aussage stimmt. Parallel ist der Ersatzwiderstand viel kleiner als in Reihe, also fließt mehr Strom und die Gesamtleistung $U^2/R_{\text{ges}}$ ist größer.
hinweise:
  - In Reihe ist der Strom gleich, parallel die Spannung.
  - 'Nimm in Reihe $P = I^2 R$ und parallel $P = U^2/R$.'
loesung: |
  **In Reihe:** gleicher Strom, $P = I^2 R$. Der größere Widerstand setzt mehr um. Aussage 1 ist richtig.
  ---
  **Parallel:** gleiche Spannung, $P = U^2/R$. Der kleinere Widerstand setzt mehr um. Aussage 2 ist richtig, Aussage 3 falsch.
  ---
  **Gesamt:** In Reihe $R_{\text{ges}} = 300\,\Omega$, parallel $66{,}7\,\Omega$. Mit $P = U^2/R_{\text{ges}}$ ist die Gesamtleistung parallel $4{,}5$-mal so groß. Aussage 4 ist richtig.
```

```aufgabe
id: p13-gluehlampen-reihe
titel: Welche Lampe leuchtet heller?
niveau: 3
lernziel: 6
kompetenz: anwenden
angabe: |
  Eine $60$-W-Lampe und eine $100$-W-Lampe, beide für $230\,\text{V}$ gebaut, werden **in Reihe** an $230\,\text{V}$ angeschlossen. Nimm die Widerstände als konstant an.

  a) Berechne die Leistung der $60$-W-Lampe (in W).

  b) Berechne die Leistung der $100$-W-Lampe (in W).
teile:
  - typ: zahl
    label: a) P der 60-W-Lampe in W
    loesung: "(230/(230^2/60+230^2/100))^2*230^2/60"
    einheit: "W"
    anzeige: '23{,}4'
  - typ: zahl
    label: b) P der 100-W-Lampe in W
    loesung: "(230/(230^2/60+230^2/100))^2*230^2/100"
    einheit: "W"
    anzeige: '14{,}1'
hinweise:
  - 'Widerstände aus den Nenndaten: $R = U^2/P$.'
  - 'In Reihe fließt durch beide derselbe Strom. Nimm deshalb $P = I^2 R$.'
loesung: |
  **Ansatz:** Die Aufschrift gilt für $230\,\text{V}$ an **einer** Lampe. Daraus folgen die Widerstände: $R_{60} = \dfrac{(230\,\text{V})^2}{60\,\text{W}} = 882\,\Omega$, $R_{100} = \dfrac{(230\,\text{V})^2}{100\,\text{W}} = 529\,\Omega$.
  ---
  **Strom in Reihe:** $I = \dfrac{230\,\text{V}}{882\,\Omega + 529\,\Omega} = 0{,}163\,\text{A}$.
  ---
  **Leistungen:** $P_{60} = I^2 R_{60} = (0{,}163\,\text{A})^2\cdot 882\,\Omega = 23{,}4\,\text{W}$ und $P_{100} = (0{,}163\,\text{A})^2\cdot 529\,\Omega = 14{,}1\,\text{W}$.
  ---
  **Deutung:** Die „schwächere“ $60$-W-Lampe leuchtet heller. Sie hat den größeren Widerstand und setzt bei gleichem Strom mehr um. Beide leuchten aber viel schwächer als im Normalbetrieb.
```

### Wärme, Wirkungsgrad und Energieübertragung

In jedem Widerstand wird elektrische Energie in **Wärme** umgewandelt. Man nennt sie nach James Prescott
Joule **Joulesche Wärme**. In Heizgeräten ist sie erwünscht, in Leitungen ist sie ein Verlust. Kein Gerät
wandelt die zugeführte Energie vollständig in die gewünschte Form um. Der **Wirkungsgrad** ist
$$\eta = \frac{P_{\text{nutz}}}{P_{\text{zu}}} = \frac{W_{\text{nutz}}}{W_{\text{zu}}}.$$
Eine Glühlampe erreicht für Licht nur etwa $5\,\%$, eine LED $30$ bis $40\,\%$, ein Elektromotor über $90\,\%$.
Ein Heizstab wandelt für Wärme praktisch $100\,\%$ um.

:::beispiel[Wie lange braucht der Wasserkocher?]
Ein Wasserkocher mit $2200\,\text{W}$ erhitzt $1{,}0\,\text{kg}$ Wasser von $20\,^\circ\text{C}$ auf $100\,^\circ\text{C}$. Sein
Wirkungsgrad ist $90\,\%$. Wasser hat die spezifische Wärmekapazität $c = 4186\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}$.

**Schritt 1, nötige Wärme:** $Q = c\,m\,\Delta\vartheta = 4186\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}\cdot 1{,}0\,\text{kg}\cdot 80\,\text{K} = 335\,\text{kJ}$,
siehe [Kapitel 10, Spezifische Wärmekapazität](/lernen/physik1/temperatur-waerme-gase/spezifische-waermekapazitaet).

**Schritt 2, nutzbare Leistung:** $P_{\text{nutz}} = 0{,}90\cdot 2200\,\text{W} = 1980\,\text{W}$.

**Schritt 3, Zeit:** $t = \dfrac{Q}{P_{\text{nutz}}} = \dfrac{334\,880\,\text{J}}{1980\,\text{W}} = 169\,\text{s}$, knapp drei Minuten.
:::

**Warum Hochspannungsleitungen?** In einer Leitung mit dem Widerstand $R_L$ geht die Leistung $I^2 R_L$
verloren. Ein Zahlenbeispiel: Eine Leitung mit $0{,}50\,\Omega$ soll $2300\,\text{W}$ übertragen. Bei $230\,\text{V}$
fließen $10\,\text{A}$, der Verlust ist $(10\,\text{A})^2\cdot 0{,}50\,\Omega = 50\,\text{W}$. Bei $2300\,\text{V}$ fließt nur
$1{,}0\,\text{A}$, der Verlust ist $0{,}50\,\text{W}$. Zehnfache Spannung bedeutet ein Hundertstel Verlust. Deshalb
überträgt man Energie mit Hochspannung. Die Spannung wandelt ein Transformator um
([Kapitel 14, Elektromotor, Generator und Transformator](/lernen/physik1/magnetismus-wechselstrom/elektromotor-generator-und-transformator)).

```aufgabe
id: p13-hochspannung
titel: Zehnfache Übertragungsspannung
niveau: 2
lernziel: 6
kompetenz: begruenden
angabe: |
  Ein Kraftwerk überträgt eine feste Leistung über eine Leitung mit festem Widerstand. Die Übertragungsspannung wird auf das Zehnfache erhöht. Wie ändert sich die Verlustleistung in der Leitung?
teile:
  - typ: auswahl
    optionen:
      - "Sie sinkt auf ein Hundertstel."
      - "Sie sinkt auf ein Zehntel."
      - "Sie steigt auf das Hundertfache, weil $P = U^2/R$ gilt."
      - "Sie bleibt gleich, weil dieselbe Leistung übertragen wird."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Der Strom sinkt auf ein Zehntel. Die Verlustleistung $I^2 R_L$ hängt aber vom **Quadrat** des Stroms ab.
      - wert: 2
        meldung: |
          In $P = U^2/R$ müsste $U$ die Spannung **an der Leitung** sein, nicht die Übertragungsspannung. Die Spannung an der Leitung ist $I\cdot R_L$ und wird kleiner. Sicherer ist $P = I^2 R_L$.
      - wert: 3
        meldung: |
          Die übertragene Leistung bleibt gleich, aber sie wird jetzt mit kleinerem Strom transportiert. Und der Verlust in der Leitung hängt vom Strom ab.
hinweise:
  - 'Bei fester Leistung gilt $I = P/U$. Wie ändert sich der Strom?'
  - 'Die Verlustleistung in der Leitung ist $I^2 R_L$.'
loesung: |
  **Ansatz:** Die übertragene Leistung $P = U\cdot I$ ist fest. Zehnfache Spannung heißt ein Zehntel Strom.
  ---
  **Verlust:** In der Leitung fließt dieser Strom durch $R_L$. Der Verlust ist $I^2 R_L$, also $\left(\tfrac{1}{10}\right)^2 = \tfrac{1}{100}$ des alten Werts.
  ---
  **Antwort:** Die Verlustleistung sinkt auf ein Hundertstel. Darum nutzt man im Fernnetz $110$ bis $380\,\text{kV}$.
```

```aufgabe
id: p13-wasser-erwaermen
titel: Tee kochen mit Wirkungsgrad
niveau: 3
lernziel: 6
kompetenz: modellieren
angabe: |
  Ein Wasserkocher mit $2000\,\text{W}$ und einem Wirkungsgrad von $95\,\%$ erhitzt $1{,}5\,\text{kg}$ Wasser von $15\,^\circ\text{C}$ auf $100\,^\circ\text{C}$ ($c = 4186\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}$).

  a) Welche Wärme braucht das Wasser (in kJ)?

  b) Wie lange dauert das Erhitzen (in min)?

  c) Wie viel kostet es bei $0{,}30$ Euro pro kWh (in Cent)?
teile:
  - typ: zahl
    label: a) Q in kJ
    loesung: "4186*1.5*85/1000"
    einheit: "kJ"
    anzeige: '534'
  - typ: zahl
    label: b) t in min
    loesung: "4186*1.5*85/(0.95*2000)/60"
    einheit: "min"
    anzeige: '4{,}68'
  - typ: zahl
    label: c) Kosten in Cent
    loesung: "2.0*4186*1.5*85/(0.95*2000)/3600*0.30*100"
    einheit: "Cent"
    anzeige: '4{,}68'
hinweise:
  - '$Q = c\,m\,\Delta\vartheta$. Nutzbar sind $95\,\%$ der elektrischen Leistung.'
  - 'Die Kosten richten sich nach der **aufgenommenen** Energie $2{,}0\,\text{kW}\cdot t$, nicht nach der Wärme im Wasser.'
gefuehrt:
  - text: Welche Wärme braucht das Wasser (in kJ)?
    teil: { typ: zahl, loesung: "4186*1.5*85/1000" }
    erklaerung: '$Q = 4186\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}\cdot 1{,}5\,\text{kg}\cdot 85\,\text{K} = 533{,}7\,\text{kJ}$.'
  - text: Welche Leistung kommt tatsächlich im Wasser an (in W)?
    teil: { typ: zahl, loesung: "0.95*2000" }
    erklaerung: '$P_{\text{nutz}} = 0{,}95\cdot 2000\,\text{W} = 1900\,\text{W}$.'
  - text: Wie lange dauert es (in s)?
    teil: { typ: zahl, loesung: "4186*1.5*85/1900" }
    erklaerung: '$t = 533\,715\,\text{J}/1900\,\text{W} = 281\,\text{s} = 4{,}68\,\text{min}$.'
  - text: Überlege, welche Energie du bezahlst.
    erklaerung: 'Die aufgenommene: $2{,}0\,\text{kW}\cdot\tfrac{281}{3600}\,\text{h} = 0{,}156\,\text{kWh}$, also $4{,}7$ Cent.'
loesung: |
  **a) Ansatz:** Die Wärme für das Wasser ist $Q = c\,m\,\Delta\vartheta = 4186\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}\cdot 1{,}5\,\text{kg}\cdot 85\,\text{K} = 533{,}7\,\text{kJ}$.
  ---
  **b)** Im Wasser kommen $P_{\text{nutz}} = 0{,}95\cdot 2000\,\text{W} = 1900\,\text{W}$ an. Also $t = \dfrac{533\,715\,\text{J}}{1900\,\text{W}} = 281\,\text{s} = 4{,}68\,\text{min}$.
  ---
  **c)** Bezahlt wird die aufgenommene Energie: $W = 2{,}0\,\text{kW}\cdot\dfrac{281\,\text{s}}{3600\,\text{s/h}} = 0{,}156\,\text{kWh}$, Kosten $0{,}156\cdot 30$ Cent $= 4{,}7$ Cent.
```

```aufgabe
id: p13-fermi-handy
titel: "Abschätzung: Was kostet Handyladen im Jahr?"
niveau: 2
lernziel: 6
kompetenz: modellieren
angabe: |
  Schätze ab, was das Laden eines Handys ein Jahr lang kostet. Nimm an: Der Akku speichert $15\,\text{Wh}$, er wird einmal pro Tag vollständig geladen, das Ladegerät hat einen Wirkungsgrad von $80\,\%$, und eine kWh kostet $0{,}30$ Euro.

  a) Wie viel Energie nimmt das Ladegerät im Jahr aus der Steckdose auf (in kWh)?

  b) Was kostet das (in Euro)?
teile:
  - typ: zahl
    label: a) W in kWh
    loesung: "365*15/0.8/1000"
    toleranz: 0.1
    einheit: "kWh"
    anzeige: '6{,}84'
    fehler:
      - wert: "365*15/1000"
        meldung: |
          Das ist die Energie, die im Akku ankommt. Das Ladegerät nimmt mehr auf, weil $20\,\%$ als Wärme verloren gehen. Teile durch den Wirkungsgrad.
      - wert: "365*15*0.8/1000"
        meldung: |
          Mit dem Wirkungsgrad wird hier **geteilt**: Die aufgenommene Energie muss größer sein als die gespeicherte.
  - typ: zahl
    label: b) Kosten in Euro
    loesung: "365*15/0.8/1000*0.30"
    toleranz: 0.05
    einheit: "Euro"
    anzeige: '2{,}05'
    fehler:
      - wert: "365*15/1000*0.30"
        meldung: |
          Bezahlt wird die Energie aus der Steckdose, also inklusive der Verluste im Ladegerät.
hinweise:
  - 'Im Akku kommen pro Jahr $365\cdot 15\,\text{Wh}$ an.'
  - 'Aufgenommen wird mehr: $W_{\text{zu}} = W_{\text{nutz}}/\eta$.'
loesung: |
  **Ansatz:** Gespeichert werden $365\cdot 15\,\text{Wh} = 5475\,\text{Wh} = 5{,}48\,\text{kWh}$ im Jahr.
  ---
  **a)** Wegen $\eta = W_{\text{nutz}}/W_{\text{zu}}$ ist $W_{\text{zu}} = \dfrac{5{,}48\,\text{kWh}}{0{,}80} = 6{,}84\,\text{kWh}$.
  ---
  **b)** $6{,}84\,\text{kWh}\cdot 0{,}30\,\tfrac{\text{Euro}}{\text{kWh}} = 2{,}05$ Euro. Zum Vergleich: Der Router aus der Aufgabe „Dauerbetrieb eines Routers“ kostet mehr als zehnmal so viel.
```

### Sicherungen und Schutz vor elektrischem Strom

Im Haushalt hängen alle Geräte eines Stromkreises parallel hinter einer gemeinsamen **Sicherung**. Sie
unterbricht den Kreis, wenn der Gesamtstrom zu groß wird. Sonst würden die Leitungen überhitzen und
einen Brand auslösen. Haushaltsstromkreise sind meist mit $10\,\text{A}$ oder $16\,\text{A}$ abgesichert. An einem
$16$-A-Kreis dürfen also höchstens $230\,\text{V}\cdot 16\,\text{A} = 3680\,\text{W}$ gleichzeitig laufen.

```plot
x: [0.5, 14]
y: [0.2, 6.4]
gleich: true
hoehe: 300
achsen: { x: " ", y: " " }
graphen:
  - { f: "3.32", von: 1.05, bis: 1.95, farbe: 3, label: "230 V" }
  - { f: "3.08", von: 1.3, bis: 1.7, farbe: 3 }
  - { f: "5.32", von: 2.85, bis: 3.65, farbe: 4, label: "Sicherung 16 A" }
  - { f: "5.08", von: 2.85, bis: 3.65, farbe: 4 }
  - { f: "3.7", von: 5.32, bis: 5.68, farbe: 0, label: "Wasserkocher" }
  - { f: "2.7", von: 5.32, bis: 5.68, farbe: 0 }
  - { f: "3.7", von: 8.32, bis: 8.68, farbe: 1, label: "Toaster" }
  - { f: "2.7", von: 8.32, bis: 8.68, farbe: 1 }
  - { f: "3.7", von: 11.32, bis: 11.68, farbe: 2, label: "Mikrowelle" }
  - { f: "2.7", von: 11.32, bis: 11.68, farbe: 2 }
strecken:
  - { von: [1.5, 1.2], nach: [1.5, 3.08] }
  - { von: [1.5, 3.32], nach: [1.5, 5.2] }
  - { von: [1.3, 3.06], nach: [1.7, 3.06], farbe: 3 }
  - { von: [1.5, 5.2], nach: [2, 5.2] }
  - { von: [2, 5.2], nach: [2.85, 5.2] }
  - { von: [3.65, 5.2], nach: [4.5, 5.2] }
  - { von: [2.85, 5.08], nach: [2.85, 5.32], farbe: 4 }
  - { von: [3.65, 5.08], nach: [3.65, 5.32], farbe: 4 }
  - { von: [4.5, 5.2], nach: [11.5, 5.2] }
  - { von: [1.5, 1.2], nach: [11.5, 1.2] }
  - { von: [5.5, 1.2], nach: [5.5, 2.7] }
  - { von: [5.5, 3.7], nach: [5.5, 5.2] }
  - { von: [5.32, 2.7], nach: [5.32, 3.7], farbe: 0 }
  - { von: [5.68, 2.7], nach: [5.68, 3.7], farbe: 0 }
  - { von: [8.5, 1.2], nach: [8.5, 2.7] }
  - { von: [8.5, 3.7], nach: [8.5, 5.2] }
  - { von: [8.32, 2.7], nach: [8.32, 3.7], farbe: 1 }
  - { von: [8.68, 2.7], nach: [8.68, 3.7], farbe: 1 }
  - { von: [11.5, 1.2], nach: [11.5, 2.7] }
  - { von: [11.5, 3.7], nach: [11.5, 5.2] }
  - { von: [11.32, 2.7], nach: [11.32, 3.7], farbe: 2 }
  - { von: [11.68, 2.7], nach: [11.68, 3.7], farbe: 2 }
punkte:
  - { x: 5.5, y: 5.2, farbe: 0 }
  - { x: 5.5, y: 1.2, farbe: 0 }
  - { x: 8.5, y: 5.2, farbe: 0 }
  - { x: 8.5, y: 1.2, farbe: 0 }
beschriftung: "Ein Haushaltsstromkreis: Drei Geräte liegen parallel an 230 V. Der Gesamtstrom aller Geräte fließt durch die gemeinsame Sicherung."
```

**Gefährlich ist der Strom durch den Körper.** Ab etwa $1\,\text{mA}$ spürt man ein Kribbeln. Ab etwa
$10\,\text{mA}$ verkrampfen die Muskeln, man kann einen umfassten Draht nicht mehr loslassen. Ab etwa
$50\,\text{mA}$ durch den Brustkorb droht Herzkammerflimmern. Wie groß der Strom wird, bestimmt das Ohmsche
Gesetz. Der Körperwiderstand liegt grob bei $1$ bis einigen $\text{k}\Omega$. Bei $230\,\text{V}$ und $1\,\text{k}\Omega$
fließen $230\,\text{mA}$, das ist lebensgefährlich.

- Der **Schutzleiter** (gelb-grün) verbindet Metallgehäuse mit der Erde. Bei einem Defekt fließt ein großer
  Strom über ihn ab, und die Sicherung löst aus.
- Der **Fehlerstromschutzschalter** vergleicht den hinfließenden mit dem zurückfließenden Strom. Fehlen
  mehr als $30\,\text{mA}$, fließt Strom einen anderen Weg, etwa durch einen Menschen. Dann schaltet er in
  Millisekunden ab.
- Die Sicherung schützt die **Leitung**, der Fehlerstromschutzschalter schützt den **Menschen**.

```aufgabe
id: p13-koerperstrom
titel: Strom durch den Körper
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Ein Mensch mit einem Körperwiderstand von $1{,}0\,\text{k}\Omega$ berührt einen Leiter.

  a) Welcher Strom fließt bei $230\,\text{V}$ (in mA)?

  b) Welcher Strom fließt bei einer Kleinspannung von $24\,\text{V}$ (in mA)?
teile:
  - typ: zahl
    label: a) bei 230 V in mA
    loesung: "230/1000*1000"
    einheit: "mA"
    anzeige: '230'
    fehler:
      - wert: "230/1000"
        meldung: |
          $0{,}23$ ist der Strom in **Ampere**. In Milliampere sind das $230\,\text{mA}$.
  - typ: zahl
    label: b) bei 24 V in mA
    loesung: "24/1000*1000"
    einheit: "mA"
    anzeige: '24'
    fehler:
      - wert: "24/1000"
        meldung: |
          $0{,}024$ ist der Strom in **Ampere**. Gefragt sind Milliampere, also $24\,\text{mA}$.
hinweise:
  - '$I = U/R$ mit $R = 1000\,\Omega$.'
loesung: |
  **a)** $I = \dfrac{230\,\text{V}}{1000\,\Omega} = 0{,}23\,\text{A} = 230\,\text{mA}$. Das ist weit über der Gefahrengrenze von etwa $50\,\text{mA}$.
  ---
  **b)** $I = \dfrac{24\,\text{V}}{1000\,\Omega} = 24\,\text{mA}$. Bei trockener Haut ist der Widerstand größer und der Strom noch kleiner. Deshalb gelten Kleinspannungen als ungefährlich.
```

```aufgabe
id: p13-sicherung-geraete
titel: Wie viele Heizlüfter verträgt die Sicherung?
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  An einem mit $16\,\text{A}$ abgesicherten $230$-V-Stromkreis sollen gleichzeitig Heizlüfter mit je $1200\,\text{W}$ laufen.

  a) Wie viele Heizlüfter dürfen höchstens gleichzeitig laufen, ohne dass die Sicherung auslöst?

  b) Welcher Gesamtstrom fließt dann (in A)?
teile:
  - typ: zahl
    label: a) Anzahl
    loesung: "3"
    anzeige: '3'
    fehler:
      - wert: "4"
        meldung: |
          Du hast aufgerundet. $3680\,\text{W}/1200\,\text{W} = 3{,}07$. Ein vierter Lüfter würde den Strom auf über $20\,\text{A}$ bringen. Hier muss man **abrunden**.
  - typ: zahl
    label: b) I in A
    loesung: "3*1200/230"
    einheit: "A"
    anzeige: '15{,}7'
    fehler:
      - wert: "1200/230"
        meldung: |
          Das ist der Strom eines einzelnen Lüfters. Parallel addieren sich die Ströme aller laufenden Geräte.
hinweise:
  - 'Höchstleistung des Kreises: $P_{\max} = 230\,\text{V}\cdot 16\,\text{A}$.'
  - Parallel addieren sich die Leistungen und die Ströme.
loesung: |
  **Ansatz:** Alle Geräte liegen parallel an $230\,\text{V}$. Die Sicherung erlaubt höchstens $P_{\max} = 230\,\text{V}\cdot 16\,\text{A} = 3680\,\text{W}$.
  ---
  **a)** $\dfrac{3680\,\text{W}}{1200\,\text{W}} = 3{,}07$. Es dürfen also höchstens $3$ Lüfter laufen. Abrunden ist hier Pflicht.
  ---
  **b)** $I = \dfrac{3\cdot 1200\,\text{W}}{230\,\text{V}} = 15{,}7\,\text{A}$, knapp unter $16\,\text{A}$.
```

```reflexion
frage: Warum schützt eine $16$-A-Sicherung einen Menschen nicht vor einem tödlichen Stromschlag, ein Fehlerstromschutzschalter aber schon?
antwort: |
  Schon etwa $50\,\text{mA}$ durch den Brustkorb können tödlich sein. Das ist ein Dreihundertstel von $16\,\text{A}$. Die Sicherung merkt davon nichts, sie reagiert erst auf Ströme über $16\,\text{A}$, die eine Leitung überhitzen würden. Der Fehlerstromschutzschalter misst etwas anderes: den **Unterschied** zwischen hinfließendem und zurückfließendem Strom. Fließt Strom durch einen Menschen in die Erde, fehlt er auf dem Rückweg. Schon ab $30\,\text{mA}$ Unterschied schaltet er ab, schnell genug, bevor das Herz aus dem Takt gerät.
```

## Spannungsquellen: Innenwiderstand und Leistungsanpassung

```aufgabe
id: p13-9-check
art: check
titel: "Vorwissen: Widerstände in Reihe"
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Ein Widerstand mit $0{,}50\,\Omega$ und einer mit $5{,}5\,\Omega$ liegen in Reihe an $3{,}0\,\text{V}$. Welcher Strom fließt (in A)?

  Herkunft: [13.6 Reihenschaltung und Parallelschaltung](/lernen/physik1/gleichstrom/reihenschaltung-und-parallelschaltung)
teile:
  - typ: zahl
    loesung: "3.0/6.0"
    einheit: "A"
    anzeige: '0{,}50'
    fehler:
      - wert: "3.0/5.5"
        meldung: |
          Auch der kleine Widerstand mit $0{,}50\,\Omega$ liegt im Stromkreis. In Reihe addieren sich die Widerstände: $6{,}0\,\Omega$.
hinweise:
  - In Reihe addieren sich die Widerstände.
loesung: |
  In Reihe: $R = 0{,}50\,\Omega + 5{,}5\,\Omega = 6{,}0\,\Omega$.
  ---
  $I = 3{,}0\,\text{V}/6{,}0\,\Omega = 0{,}50\,\text{A}$. Genau so werden wir gleich den Innenwiderstand einer Batterie behandeln.
```

Bisher haben wir so getan, als liefere eine Batterie immer genau ihre aufgedruckte Spannung. Das stimmt
nicht. Startet man ein Auto, werden die Scheinwerfer kurz dunkler. Eine alte Batterie zeigt im Leerlauf
noch fast $1{,}5\,\text{V}$, bricht aber unter Last ein.

Eine zweite, sehr verbreitete Fehlvorstellung lautet: **„Eine Batterie liefert immer denselben Strom.“**
Auch das stimmt nicht. Wie viel Strom fließt, entscheidet der angeschlossene Widerstand. Was eine Batterie
ungefähr festlegt, ist ihre **Spannung**. Schließt man an dieselbe Batterie eine kleine Lampe und dann einen
Motor an, fließen sehr verschiedene Ströme.

**Worum geht es in einem Satz?** Jede reale Quelle verhält sich wie eine ideale Quelle mit einem kleinen
Widerstand in ihrem Inneren. An diesem Innenwiderstand geht ein Teil der Spannung verloren, und zwar umso
mehr, je mehr Strom fließt.

```plot
x: [0, 13]
y: [0.2, 6.8]
gleich: true
hoehe: 320
achsen: { x: " ", y: " " }
graphen:
  - { f: "3.32", von: 1.05, bis: 1.95, farbe: 3, label: "U₀" }
  - { f: "3.08", von: 1.3, bis: 1.7, farbe: 3 }
  - { f: "5.38", von: 2.85, bis: 3.65, farbe: 4, label: "Rᵢ" }
  - { f: "5.02", von: 2.85, bis: 3.65, farbe: 4 }
  - { f: "3.7", von: 9.32, bis: 9.68, farbe: 0, label: "Rₐ (Last)" }
  - { f: "2.7", von: 9.32, bis: 9.68, farbe: 0 }
strecken:
  - { von: [0.5, 0.7], nach: [5.3, 0.7], gestrichelt: true }
  - { von: [5.3, 0.7], nach: [5.3, 6.1], gestrichelt: true }
  - { von: [5.3, 6.1], nach: [0.5, 6.1], gestrichelt: true }
  - { von: [0.5, 6.1], nach: [0.5, 0.7], gestrichelt: true }
  - { von: [1.5, 1.2], nach: [1.5, 3.08] }
  - { von: [1.5, 3.32], nach: [1.5, 5.2] }
  - { von: [1.3, 3.06], nach: [1.7, 3.06], farbe: 3 }
  - { von: [1.5, 5.2], nach: [2, 5.2] }
  - { von: [2, 5.2], nach: [2.85, 5.2] }
  - { von: [3.65, 5.2], nach: [4.5, 5.2] }
  - { von: [2.85, 5.02], nach: [2.85, 5.38], farbe: 4 }
  - { von: [3.65, 5.02], nach: [3.65, 5.38], farbe: 4 }
  - { von: [4.5, 5.2], nach: [7.5, 5.2] }
  - { von: [1.5, 1.2], nach: [7.5, 1.2] }
  - { von: [9.5, 1.2], nach: [9.5, 2.7] }
  - { von: [9.5, 3.7], nach: [9.5, 5.2] }
  - { von: [9.32, 2.7], nach: [9.32, 3.7], farbe: 0 }
  - { von: [9.68, 2.7], nach: [9.68, 3.7], farbe: 0 }
  - { von: [7.5, 5.2], nach: [9.5, 5.2] }
  - { von: [7.5, 1.2], nach: [9.5, 1.2] }
punkte:
  - { x: 5.3, y: 5.2, label: "Klemme +", farbe: 0, offen: true }
  - { x: 5.3, y: 1.2, label: "Klemme −", farbe: 0, offen: true }
beschriftung: "Modell einer realen Quelle (gestrichelter Kasten): eine ideale Quelle mit der Quellenspannung U₀ in Reihe mit dem Innenwiderstand Rᵢ. Von außen erreichbar sind nur die beiden Klemmen. Zwischen ihnen misst man die Klemmenspannung. Rₐ ist der äußere Widerstand, die Last."
```

:::satz[Klemmenspannung einer realen Quelle]
Eine reale Quelle besteht aus einer idealen Quelle mit der **Quellenspannung** $U_0$ in Reihe mit dem
**Innenwiderstand** $R_i$. Fließt der Strom $I$, fällt am Innenwiderstand $R_i\cdot I$ ab. An den Klemmen bleibt
die **Klemmenspannung**
$$U_K = U_0 - R_i\cdot I.$$
Mit dem äußeren Widerstand $R_a$ liegen $R_a$ und $R_i$ in Reihe, also $I = \dfrac{U_0}{R_a + R_i}$.
:::

Zwei Grenzfälle sind wichtig.

- **Leerlauf:** Nichts ist angeschlossen, $I = 0$. Dann ist $U_K = U_0$. Die Quellenspannung ist also die Spannung, die man ohne Last misst. Man nennt sie auch Leerlaufspannung.
- **Kurzschluss:** Die Klemmen sind direkt verbunden, $R_a = 0$. Dann fließt der größtmögliche Strom, der **Kurzschlussstrom** $I_K = U_0/R_i$. Die Klemmenspannung ist null.

:::beispiel[Ein 9-V-Block unter Last]
Ein $9$-V-Block hat $U_0 = 9{,}0\,\text{V}$ und $R_i = 1{,}5\,\Omega$. Er speist einen Widerstand mit $R_a = 12\,\Omega$.

**Schritt 1, Strom:** $R_a$ und $R_i$ liegen in Reihe. $I = \dfrac{9{,}0\,\text{V}}{12\,\Omega + 1{,}5\,\Omega} = 0{,}667\,\text{A}$.

**Schritt 2, Klemmenspannung:** $U_K = 9{,}0\,\text{V} - 1{,}5\,\Omega\cdot 0{,}667\,\text{A} = 8{,}0\,\text{V}$.
Probe: $R_a\cdot I = 12\,\Omega\cdot 0{,}667\,\text{A} = 8{,}0\,\text{V}$.

**Schritt 3, Kurzschluss:** $I_K = \dfrac{9{,}0\,\text{V}}{1{,}5\,\Omega} = 6{,}0\,\text{A}$. Mehr kann der Block nie liefern.
:::

Eine Autobatterie hat einen sehr kleinen Innenwiderstand von einigen Milliohm. Nur so kann sie dem Anlasser
hunderte Ampere liefern. Mit dem Alter steigt der Innenwiderstand jeder Batterie. Im Leerlauf merkt man
davon nichts, unter Last bricht die Spannung ein.

:::achtung[Fehler: Den Innenwiderstand vergessen]
**Falsche Rechnung:** „Der $9$-V-Block hat $9\,\text{V}$. An $3{,}0\,\Omega$ fließen also $9\,\text{V}/3{,}0\,\Omega = 3{,}0\,\text{A}$.“

**Richtig:** Der Strom fließt auch durch den Innenwiderstand von $1{,}5\,\Omega$. Beide liegen in Reihe:
$I = \dfrac{9{,}0\,\text{V}}{3{,}0\,\Omega + 1{,}5\,\Omega} = 2{,}0\,\text{A}$. Je kleiner die Last, desto stärker fällt der
Innenwiderstand ins Gewicht. Die $9\,\text{V}$ auf der Batterie sind die Quellenspannung, nicht die Spannung unter Last.
:::

```aufgabe
id: p13-innenwiderstand
titel: Eine Monozelle unter Last
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Eine Monozelle (eine große $1{,}5$-V-Rundzelle) hat die Quellenspannung $1{,}5\,\text{V}$ und den Innenwiderstand $0{,}50\,\Omega$. Sie speist einen Widerstand von $2{,}5\,\Omega$.

  a) Berechne den Strom (in A).

  b) Berechne die Klemmenspannung (in V).

  c) Berechne den Kurzschlussstrom (in A).
teile:
  - typ: zahl
    label: a) I in A
    loesung: "1.5/(2.5+0.5)"
    einheit: "A"
    anzeige: '0{,}50'
    fehler:
      - wert: "1.5/2.5"
        meldung: |
          Der Innenwiderstand fehlt. Der Strom fließt durch $R_a$ **und** $R_i$, die in Reihe liegen.
  - typ: zahl
    label: b) Klemmenspannung in V
    loesung: "1.5-0.5*0.5"
    einheit: "V"
    anzeige: '1{,}25'
    fehler:
      - wert: "1.5"
        meldung: |
          $1{,}5\,\text{V}$ misst man nur ohne Last. Unter Last fällt ein Teil der Spannung am Innenwiderstand ab.
  - typ: zahl
    label: c) Kurzschlussstrom in A
    loesung: "1.5/0.5"
    einheit: "A"
    anzeige: '3{,}0'
    fehler:
      - wert: "1.5/3.0"
        meldung: |
          Beim Kurzschluss ist der äußere Widerstand null. Nur der Innenwiderstand begrenzt dann den Strom.
hinweise:
  - Innen- und Außenwiderstand liegen in Reihe.
loesung: |
  **a)** $I = \dfrac{U_0}{R_a + R_i} = \dfrac{1{,}5\,\text{V}}{3{,}0\,\Omega} = 0{,}50\,\text{A}$.
  ---
  **b)** $U_K = U_0 - R_i I = 1{,}5\,\text{V} - 0{,}50\,\Omega\cdot 0{,}50\,\text{A} = 1{,}25\,\text{V}$. Probe: $R_a I = 2{,}5\,\Omega\cdot 0{,}50\,\text{A} = 1{,}25\,\text{V}$.
  ---
  **c)** $I_K = \dfrac{U_0}{R_i} = \dfrac{1{,}5\,\text{V}}{0{,}50\,\Omega} = 3{,}0\,\text{A}$.
```

```aufgabe
id: p13-quelle-konzept
titel: Liefert eine Batterie einen festen Strom?
niveau: 1
lernziel: 7
kompetenz: verstehen
angabe: |
  An einer Batterie hängt zuerst ein Widerstand mit $10\,\Omega$, danach einer mit $5\,\Omega$. Der Innenwiderstand der Batterie ist klein. Was passiert mit dem Strom?
teile:
  - typ: auswahl
    optionen:
      - "Er wird ungefähr doppelt so groß, etwas weniger als doppelt."
      - "Er bleibt gleich, denn eine Batterie liefert einen festen Strom."
      - "Er wird halb so groß, weil der Widerstand kleiner ist."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Eine Batterie gibt ungefähr eine feste **Spannung** vor, keinen festen Strom. Der Strom ergibt sich erst aus der Last: $I = U_0/(R_a + R_i)$.
      - wert: 2
        meldung: |
          Ein kleinerer Widerstand behindert den Strom **weniger**. Der Strom wird größer, nicht kleiner.
hinweise:
  - 'Welche Größe legt eine Batterie ungefähr fest: Spannung oder Strom?'
loesung: |
  **Ansatz:** Die Batterie legt ungefähr die Spannung fest. Der Strom ist $I = U_0/(R_a + R_i)$.
  ---
  Halber Lastwiderstand heißt ungefähr doppelter Strom. Weil $R_i$ gleich bleibt, ist es etwas weniger als das Doppelte, und die Klemmenspannung sinkt etwas.
```

### Den Innenwiderstand messen

Misst man die Klemmenspannung bei verschiedenen Strömen und trägt sie auf, entsteht eine fallende
Gerade: $U_K = U_0 - R_i\cdot I$. Das ist eine lineare Funktion, siehe
[Mathematik, Lineare Funktionen](/lernen/mathe3/funktionen/lineare-funktionen). Der Achsenabschnitt ist die
Quellenspannung $U_0$. Die Steigung ist $-R_i$. Wo die Gerade die Stromachse trifft, liegt der Kurzschlussstrom.

```plot
x: [0, 8]
y: [0, 7]
achsen: { x: "I in A", y: "Uₖ in V" }
graphen:
  - { f: "6-0.8*x", von: 0, bis: 7.5, label: "Klemmenspannung", farbe: 0 }
punkte:
  - { x: 0.5, y: 5.6, label: "(0,5 A | 5,6 V)" }
  - { x: 1.5, y: 4.8, label: "(1,5 A | 4,8 V)" }
  - { x: 0, y: 6, label: "U₀ = 6,0 V" }
beschriftung: "Kennlinie der Quelle aus dem Beispiel. Die Klemmenspannung fällt gleichmäßig mit dem Strom. Der Schnittpunkt mit der senkrechten Achse ist die Quellenspannung, die Steigung ist −Rᵢ = −0,8 Ω. Bei 7,5 A wäre die Klemmenspannung null: der Kurzschlussstrom."
```

:::beispiel[Innenwiderstand aus zwei Messungen]
An einer Quelle misst man bei $0{,}50\,\text{A}$ die Klemmenspannung $5{,}6\,\text{V}$ und bei $1{,}5\,\text{A}$ nur $4{,}8\,\text{V}$.

**Schritt 1, Steigung:** Der Strom steigt um $1{,}0\,\text{A}$, die Spannung fällt um $0{,}8\,\text{V}$. Also
$R_i = \dfrac{0{,}8\,\text{V}}{1{,}0\,\text{A}} = 0{,}80\,\Omega$.

**Schritt 2, Quellenspannung:** Aus der ersten Messung $U_0 = U_K + R_i I = 5{,}6\,\text{V} + 0{,}80\,\Omega\cdot 0{,}50\,\text{A} = 6{,}0\,\text{V}$.

**Probe:** Mit der zweiten Messung: $6{,}0\,\text{V} - 0{,}80\,\Omega\cdot 1{,}5\,\text{A} = 4{,}8\,\text{V}$.
:::

```aufgabe
id: p13-autobatterie
titel: Innenwiderstand einer Autobatterie
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Eine Autobatterie zeigt ohne Last $12{,}4\,\text{V}$. Beim Starten fließen $200\,\text{A}$, und die Klemmenspannung sinkt auf $10{,}0\,\text{V}$. Wie groß ist der Innenwiderstand (in mΩ)?
teile:
  - typ: zahl
    loesung: "(12.4-10.0)/200*1000"
    einheit: "mΩ"
    anzeige: '12'
    fehler:
      - wert: "10.0/200*1000"
        meldung: |
          $10{,}0\,\text{V}/200\,\text{A}$ ist der Widerstand des **Anlassers**. Am Innenwiderstand fällt nur der Unterschied zur Leerlaufspannung ab: $12{,}4\,\text{V} - 10{,}0\,\text{V}$.
      - wert: "(12.4-10.0)/200"
        meldung: |
          Das Ergebnis ist in Ohm. Gefragt sind Milliohm, also mal $1000$.
hinweise:
  - Die Spannung ohne Last ist die Quellenspannung $U_0$.
  - 'Am Innenwiderstand fällt $U_0 - U_K$ ab. Dann $R_i = (U_0 - U_K)/I$.'
loesung: |
  **Ansatz:** Ohne Last ist $U_K = U_0 = 12{,}4\,\text{V}$. Aus $U_K = U_0 - R_i I$ folgt $R_i = \dfrac{U_0 - U_K}{I}$.
  ---
  **Rechnung:** $R_i = \dfrac{12{,}4\,\text{V} - 10{,}0\,\text{V}}{200\,\text{A}} = 0{,}012\,\Omega = 12\,\text{m}\Omega$.
  ---
  **Deutung:** Schon dieser winzige Widerstand kostet beim Starten $2{,}4\,\text{V}$. Deshalb werden die Scheinwerfer dabei dunkler.
```

```aufgabe
id: p13-kennlinie-quelle
titel: Die Kennlinie einer Quelle lesen
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Das Diagramm zeigt die Klemmenspannung einer Quelle in Abhängigkeit vom Strom.

  a) Wie groß ist die Quellenspannung (in V)?

  b) Wie groß ist der Innenwiderstand (in Ω)?

  c) Wie groß ist der Kurzschlussstrom (in A)?
plot:
  x: [0, 5.5]
  y: [0, 5.5]
  achsen: { x: "I in A", y: "Uₖ in V" }
  graphen:
    - { f: "4.5-x", von: 0, bis: 4.5, farbe: 0 }
  punkte:
    - { x: 0, y: 4.5, label: "(0 | 4,5 V)" }
    - { x: 1.5, y: 3, label: "(1,5 A | 3,0 V)" }
teile:
  - typ: zahl
    label: a) U₀ in V
    loesung: "4.5"
    einheit: "V"
    anzeige: '4{,}5'
    fehler:
      - wert: "3.0"
        meldung: |
          $3{,}0\,\text{V}$ ist die Klemmenspannung bei $1{,}5\,\text{A}$. Die Quellenspannung misst man bei $I = 0$, also am Schnittpunkt mit der senkrechten Achse.
  - typ: zahl
    label: b) Rᵢ in Ω
    loesung: "(4.5-3.0)/1.5"
    einheit: "Ω"
    anzeige: '1{,}0'
    fehler:
      - wert: "3.0/1.5"
        meldung: |
          $3{,}0\,\text{V}/1{,}5\,\text{A}$ ist der äußere Widerstand, der bei diesem Strom angeschlossen ist. Der Innenwiderstand ist der Betrag der **Steigung**: Spannungsabfall pro Ampere.
  - typ: zahl
    label: c) I_K in A
    loesung: "4.5/1.0"
    einheit: "A"
    anzeige: '4{,}5'
    fehler:
      - wert: "4.5/1.5"
        meldung: |
          Der Kurzschlussstrom ist $U_0/R_i$. Im Diagramm ist er der Schnittpunkt der Geraden mit der Stromachse.
hinweise:
  - Bei $I = 0$ ist die Klemmenspannung gleich der Quellenspannung.
  - 'Die Gerade fällt pro Ampere um $R_i$ Volt. Der Kurzschlussstrom liegt bei $U_K = 0$.'
loesung: |
  **a)** Bei $I = 0$ liest man $U_0 = 4{,}5\,\text{V}$ ab.
  ---
  **b)** Von $I = 0$ bis $I = 1{,}5\,\text{A}$ fällt die Spannung um $1{,}5\,\text{V}$. Also $R_i = \dfrac{1{,}5\,\text{V}}{1{,}5\,\text{A}} = 1{,}0\,\Omega$.
  ---
  **c)** $I_K = \dfrac{U_0}{R_i} = \dfrac{4{,}5\,\text{V}}{1{,}0\,\Omega} = 4{,}5\,\text{A}$. Dort schneidet die verlängerte Gerade die Stromachse.
```

```aufgabe
id: p13-quelle-zwei-messungen
titel: Quelle aus zwei Messungen bestimmen
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  An einem Netzteil misst man bei $0{,}20\,\text{A}$ die Klemmenspannung $8{,}6\,\text{V}$ und bei $1{,}0\,\text{A}$ die Klemmenspannung $7{,}0\,\text{V}$.

  a) Berechne den Innenwiderstand (in Ω).

  b) Berechne die Quellenspannung (in V).
teile:
  - typ: zahl
    label: a) Rᵢ in Ω
    loesung: "(8.6-7.0)/(1.0-0.20)"
    einheit: "Ω"
    anzeige: '2{,}0'
    fehler:
      - wert: "8.6/0.20"
        meldung: |
          $8{,}6\,\text{V}/0{,}20\,\text{A}$ ist der äußere Widerstand bei der ersten Messung. Der Innenwiderstand ergibt sich aus der **Änderung**: Spannungsabfall geteilt durch Stromzuwachs.
  - typ: zahl
    label: b) U₀ in V
    loesung: "8.6+2.0*0.20"
    einheit: "V"
    anzeige: '9{,}0'
    fehler:
      - wert: "8.6"
        meldung: |
          Auch bei $0{,}20\,\text{A}$ fällt schon etwas Spannung am Innenwiderstand ab. Die Quellenspannung ist etwas größer: $U_0 = U_K + R_i I$.
hinweise:
  - 'Die Klemmenspannung fällt um $R_i$ Volt pro Ampere.'
  - 'Danach $U_0 = U_K + R_i I$ mit einer der beiden Messungen.'
loesung: |
  **Ansatz:** $U_K = U_0 - R_i I$ ist eine fallende Gerade. Ihre Steigung liefert $R_i$, der Achsenabschnitt $U_0$.
  ---
  **a)** $R_i = \dfrac{8{,}6\,\text{V} - 7{,}0\,\text{V}}{1{,}0\,\text{A} - 0{,}20\,\text{A}} = \dfrac{1{,}6\,\text{V}}{0{,}80\,\text{A}} = 2{,}0\,\Omega$.
  ---
  **b)** $U_0 = 8{,}6\,\text{V} + 2{,}0\,\Omega\cdot 0{,}20\,\text{A} = 9{,}0\,\text{V}$. Probe mit der zweiten Messung: $9{,}0\,\text{V} - 2{,}0\,\Omega\cdot 1{,}0\,\text{A} = 7{,}0\,\text{V}$.
```

### Ausprobieren: Last und Klemmenspannung

```aufgabe
id: p13-9-vorhersage
art: check
titel: "Vorhersage: Kleinere Last, kleinere Spannung?"
niveau: 1
lernziel: 7
kompetenz: verstehen
angabe: |
  Eine Quelle mit $U_0 = 12\,\text{V}$ und $R_i = 10\,\Omega$ speist zwei Widerstände in Reihe. Du verkleinerst die beiden Lastwiderstände. Was passiert mit der Klemmenspannung? Entscheide, bevor du das Widget benutzt.
teile:
  - typ: auswahl
    optionen:
      - "Sie sinkt, weil mehr Strom fließt und mehr Spannung am Innenwiderstand abfällt."
      - "Sie bleibt bei $12\\,\\text{V}$, denn das ist die Spannung der Quelle."
      - "Sie steigt, weil der Strom größer wird."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          $12\,\text{V}$ ist die Quellenspannung, die man nur ohne Last misst. Mit Strom fällt am Innenwiderstand $R_i I$ ab.
      - wert: 2
        meldung: |
          Mehr Strom heißt mehr Spannungsabfall **in** der Quelle. Für die Klemmen bleibt weniger übrig: $U_K = U_0 - R_i I$.
hinweise:
  - '$U_K = U_0 - R_i I$.'
loesung: |
  Kleinere Last heißt mehr Strom. Am Innenwiderstand fällt dann mehr ab.
  ---
  Die Klemmenspannung $U_K = U_0 - R_i I$ sinkt.
```

```widget
name: stromkreis
titel: Innenwiderstand einer Quelle
props:
  schaltung: reihe
  U0: 12
  Ri: 10
  R1: 20
  R2: 30
```

**Arbeitsauftrag:**

1. **Beobachten:** Verkleinere die beiden Lastwiderstände schrittweise. Notiere Strom und Klemmenspannung.
   Die Klemmenspannung steht in der Tabelle in der Zeile „gesamt (außen)“ in der Spalte $U$.
2. **Prüfen:** Rechne für zwei Einstellungen $U_0 - R_i I$ nach. Stimmt es mit der Anzeige überein?
3. **Erklären:** Setze $R_i$ auf null. Warum bleibt die Klemmenspannung jetzt fest, egal welche Last angeschlossen ist?

### Leistungsanpassung

Bei welchem äußeren Widerstand gibt eine Quelle die **größte Leistung** an die Last ab? Ist $R_a$ sehr
groß, fließt kaum Strom, und die Leistung ist klein. Ist $R_a$ sehr klein, fließt zwar viel Strom, aber an
der Last liegt kaum Spannung. Dazwischen muss es ein Maximum geben.

Die Leistung an der Last ist $P = I^2 R_a = \dfrac{U_0^2\,R_a}{(R_a + R_i)^2}$. Leitet man nach $R_a$ ab und setzt
die Ableitung null, findet man das Maximum bei
$$R_a = R_i \qquad\text{mit}\qquad P_{\max} = \frac{U_0^2}{4R_i}.$$
Wie man so ein Maximum findet, zeigt [Mathematik, Extremwertaufgaben](/lernen/mathe3/differentialrechnung/extremwertaufgaben-das-beste-unter-vielen-moeglichkeiten-finden).
Diesen Fall nennt man **Leistungsanpassung**. Dann fällt an $R_i$ genauso viel ab wie an $R_a$. Der
**Wirkungsgrad** $\eta = R_a/(R_a + R_i)$ ist deshalb nur $50\,\%$.

:::beispiel[Die Leistung an der Last für verschiedene Widerstände]
Eine Quelle hat $U_0 = 12\,\text{V}$ und $R_i = 4{,}0\,\Omega$. Mit $P = \dfrac{(12\,\text{V})^2\cdot R_a}{(R_a + 4\,\Omega)^2}$ erhält man:

- Bei $R_a = 1\,\Omega$ ist $P = 5{,}8\,\text{W}$.
- Bei $R_a = 2\,\Omega$ ist $P = 8{,}0\,\text{W}$.
- Bei $R_a = 4\,\Omega$ ist $P = 9{,}0\,\text{W}$, das Maximum.
- Bei $R_a = 8\,\Omega$ ist $P = 8{,}0\,\text{W}$.
- Bei $R_a = 16\,\Omega$ ist $P = 5{,}8\,\text{W}$.

**Deutung:** Das Maximum liegt bei $R_a = R_i$. Probe mit der Formel: $\dfrac{144\,\text{V}^2}{4\cdot 4\,\Omega} = 9{,}0\,\text{W}$.
:::

```plot
x: [0, 20]
y: [0, 10]
achsen: { x: "Rₐ in Ω", y: "P in W" }
graphen:
  - { f: "144*x/(x+4)^2", label: "P", farbe: 0 }
  - { f: "10*x/(x+4)", label: "η · 10", farbe: 1, gestrichelt: true }
punkte:
  - { x: 4, y: 9, label: "Maximum bei Rₐ = Rᵢ" }
beschriftung: "Leistung an der Last für U₀ = 12 V und Rᵢ = 4 Ω. Das Maximum von 9 W liegt bei Rₐ = 4 Ω. Gestrichelt ist der Wirkungsgrad, zehnfach überhöht gezeichnet: Beim Leistungsmaximum ist er nur 50 %, für große Lastwiderstände geht er gegen 100 %."
```

In der **Energietechnik** will man einen hohen Wirkungsgrad. Dort ist der Lastwiderstand viel größer als
der Innenwiderstand. In der **Nachrichtentechnik** will man dagegen
möglichst viel Leistung übertragen, etwa beim Empfang der schwachen Signale einer Antenne. Dort passt man an.

:::achtung[Fehler: Leistungsanpassung mit bestem Wirkungsgrad verwechselt]
**Falsche Überlegung:** „Bei $R_a = R_i$ gibt die Quelle die größte Leistung ab. Das ist also der
wirtschaftlichste Betrieb.“

**Richtig:** Bei $R_a = R_i$ wird im Innenwiderstand genauso viel Leistung verheizt wie in der Last. Mit
$U_0 = 12\,\text{V}$ und $R_i = 4\,\Omega$ bekommt die Last $9{,}0\,\text{W}$, die Quelle verliert ebenfalls $9{,}0\,\text{W}$.
Der Wirkungsgrad ist $50\,\%$. Ein Kraftwerk, das so arbeitet, würde die Hälfte seiner Energie verschwenden.
:::

```aufgabe
id: p13-zellen-reihe
titel: Vier Zellen in Reihe
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Vier Zellen mit je $1{,}5\,\text{V}$ und je $0{,}20\,\Omega$ Innenwiderstand liegen in Reihe. Sie speisen eine Lampe mit $4{,}2\,\Omega$.

  a) Welcher Strom fließt (in A)?

  b) Welche Klemmenspannung liegt an der Lampe (in V)?
teile:
  - typ: zahl
    label: a) I in A
    loesung: "6.0/(4.2+0.8)"
    einheit: "A"
    anzeige: '1{,}2'
    fehler:
      - wert: "6.0/(4.2+0.2)"
        meldung: |
          In Reihe addieren sich nicht nur die Spannungen, sondern auch die Innenwiderstände: $4\cdot 0{,}20\,\Omega = 0{,}80\,\Omega$.
      - wert: "1.5/(4.2+0.2)"
        meldung: |
          In Reihe addieren sich die Quellenspannungen: $4\cdot 1{,}5\,\text{V} = 6{,}0\,\text{V}$.
  - typ: zahl
    label: b) U_K in V
    loesung: "6.0-0.8*1.2"
    einheit: "V"
    anzeige: '5{,}04'
    fehler:
      - wert: "6.0"
        meldung: |
          Unter Last fällt an den Innenwiderständen $0{,}80\,\Omega\cdot 1{,}2\,\text{A}$ ab. An der Lampe liegt weniger als $6{,}0\,\text{V}$.
hinweise:
  - In Reihe addieren sich die Quellenspannungen und die Innenwiderstände.
  - '$I = U_0/(R_a + R_i)$, dann $U_K = U_0 - R_i I$.'
loesung: |
  **Ansatz:** Vier gleiche Zellen in Reihe wirken wie eine Quelle mit $U_0 = 4\cdot 1{,}5\,\text{V} = 6{,}0\,\text{V}$ und $R_i = 4\cdot 0{,}20\,\Omega = 0{,}80\,\Omega$.
  ---
  **a)** $I = \dfrac{6{,}0\,\text{V}}{4{,}2\,\Omega + 0{,}80\,\Omega} = 1{,}2\,\text{A}$.
  ---
  **b)** $U_K = 6{,}0\,\text{V} - 0{,}80\,\Omega\cdot 1{,}2\,\text{A} = 5{,}04\,\text{V}$. Probe: $4{,}2\,\Omega\cdot 1{,}2\,\text{A} = 5{,}04\,\text{V}$.
```

```aufgabe
id: p13-leistungsanpassung
titel: Leistungsanpassung berechnen
niveau: 3
lernziel: 7
kompetenz: rechnen
angabe: |
  Eine Quelle hat $U_0 = 12\,\text{V}$ und $R_i = 2{,}0\,\Omega$.

  a) Bei welchem Lastwiderstand nimmt die Last die größte Leistung auf (in Ω)?

  b) Wie groß ist diese größte Leistung (in W)?

  c) Welche Leistung nimmt eine Last mit $6{,}0\,\Omega$ auf (in W)?

  d) Wie groß ist der Wirkungsgrad bei $6{,}0\,\Omega$ (in Prozent)?
teile:
  - typ: zahl
    label: a) Rₐ in Ω
    loesung: "2.0"
    einheit: "Ω"
    anzeige: '2{,}0'
  - typ: zahl
    label: b) P_max in W
    loesung: "12^2/(4*2.0)"
    einheit: "W"
    anzeige: '18'
  - typ: zahl
    label: c) P bei 6 Ω in W
    loesung: "12^2*6/(6+2)^2"
    einheit: "W"
    anzeige: '13{,}5'
  - typ: zahl
    label: d) η in %
    loesung: "6/(6+2)*100"
    einheit: "%"
    anzeige: '75'
hinweise:
  - 'Die größte Leistung gibt es bei $R_a = R_i$.'
  - 'Allgemein: $I = U_0/(R_a + R_i)$ und $P = I^2 R_a$. Der Wirkungsgrad ist $R_a/(R_a + R_i)$, weil durch beide derselbe Strom fließt.'
gefuehrt:
  - text: Bei welchem Lastwiderstand liegt das Leistungsmaximum (in Ω)?
    teil: { typ: zahl, loesung: "2.0" }
    erklaerung: 'Bei Leistungsanpassung, $R_a = R_i = 2{,}0\,\Omega$.'
  - text: Welcher Strom fließt dann (in A)?
    teil: { typ: zahl, loesung: "12/4.0" }
    erklaerung: '$I = 12\,\text{V}/4{,}0\,\Omega = 3{,}0\,\text{A}$.'
  - text: Welche Leistung nimmt die Last auf (in W)?
    teil: { typ: zahl, loesung: "3^2*2" }
    erklaerung: '$P = (3{,}0\,\text{A})^2\cdot 2{,}0\,\Omega = 18\,\text{W}$. Genauso viel wird in $R_i$ verheizt.'
  - text: Berechne nun die Leistung bei $R_a = 6{,}0\,\Omega$ (in W).
    teil: { typ: zahl, loesung: "1.5^2*6" }
    erklaerung: '$I = 12\,\text{V}/8{,}0\,\Omega = 1{,}5\,\text{A}$, $P = (1{,}5\,\text{A})^2\cdot 6{,}0\,\Omega = 13{,}5\,\text{W}$. Weniger Leistung, aber $75\,\%$ Wirkungsgrad.'
loesung: |
  **a)** Die Last nimmt die größte Leistung bei Leistungsanpassung auf, also bei $R_a = R_i = 2{,}0\,\Omega$.
  ---
  **b)** Dann ist $I = \dfrac{12\,\text{V}}{4{,}0\,\Omega} = 3{,}0\,\text{A}$ und $P = (3{,}0\,\text{A})^2\cdot 2{,}0\,\Omega = 18\,\text{W}$. Probe: $\dfrac{U_0^2}{4R_i} = \dfrac{144\,\text{V}^2}{8{,}0\,\Omega} = 18\,\text{W}$.
  ---
  **c)** Bei $6{,}0\,\Omega$: $I = \dfrac{12\,\text{V}}{8{,}0\,\Omega} = 1{,}5\,\text{A}$ und $P = (1{,}5\,\text{A})^2\cdot 6{,}0\,\Omega = 13{,}5\,\text{W}$.
  ---
  **d)** Durch $R_a$ und $R_i$ fließt derselbe Strom, also teilt sich die Leistung im Verhältnis der Widerstände: $\eta = \dfrac{6{,}0}{6{,}0 + 2{,}0} = 75\,\%$. Weniger Leistung, aber deutlich weniger Verlust.
```

### Batterien und Akkus

Auf Akkus steht meist eine „Kapazität“ in **Milliamperestunden** (mAh). Das ist eine **Ladungsmenge**, keine
Kapazität im Sinn eines Kondensators aus
[Kapitel 12, Kondensator und Kapazität](/lernen/physik1/elektrostatik/kondensator-und-kapazitaet). Es gilt
$1\,\text{mAh} = 10^{-3}\,\text{A}\cdot 3600\,\text{s} = 3{,}6\,\text{C}$. Die gespeicherte **Energie** erhält man erst durch
Multiplizieren mit der Spannung: $W = U\cdot Q$, angegeben in **Wattstunden**.

:::beispiel[Was steckt in einer Powerbank?]
Eine Powerbank hat die Aufschrift $10\,000\,\text{mAh}$ und $3{,}7\,\text{V}$.

**Schritt 1, Ladung:** $10\,000\,\text{mAh} = 10\,\text{Ah}$.

**Schritt 2, Energie:** $W = U\cdot Q = 3{,}7\,\text{V}\cdot 10\,\text{Ah} = 37\,\text{Wh}$. In Joule:
$37\,\text{Wh}\cdot 3600\,\tfrac{\text{J}}{\text{Wh}} = 133\,\text{kJ}$.

**Deutung:** Damit kann man ein Handy mit einem $15$-Wh-Akku rechnerisch gut zweimal laden. Wegen der
Verluste beim Umladen sind es in der Praxis etwas weniger.
:::

:::achtung[Fehler: Milliamperestunden für Energie gehalten]
**Falsche Überlegung:** „Akku A hat $3000\,\text{mAh}$, Akku B nur $2500\,\text{mAh}$. Also speichert A mehr Energie.“

**Richtig:** Milliamperestunden geben die Ladung an. Für die Energie zählt auch die Spannung. Hat A
$3{,}7\,\text{V}$ und B $7{,}4\,\text{V}$, speichert A $3{,}7\,\text{V}\cdot 3{,}0\,\text{Ah} = 11{,}1\,\text{Wh}$ und B
$7{,}4\,\text{V}\cdot 2{,}5\,\text{Ah} = 18{,}5\,\text{Wh}$. Der Akku mit weniger mAh speichert also mehr Energie.
:::

```aufgabe
id: p13-akku
titel: Was steckt im Handyakku?
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Ein Handyakku hat die Aufschrift $4000\,\text{mAh}$ und $3{,}85\,\text{V}$.

  a) Welche Ladung speichert er (in C)?

  b) Welche Energie speichert er (in Wh)?

  c) Welche Energie ist das in kJ?
teile:
  - typ: zahl
    label: a) Q in C
    loesung: "4.000*3600"
    einheit: "C"
    anzeige: '14400'
    fehler:
      - wert: "4000*3600"
        meldung: |
          Milli heißt Tausendstel. $4000\,\text{mAh} = 4{,}000\,\text{Ah}$. Erst dann mal $3600\,\text{s/h}$.
  - typ: zahl
    label: b) W in Wh
    loesung: "4.000*3.85"
    einheit: "Wh"
    anzeige: '15{,}4'
    fehler:
      - wert: "4.000"
        meldung: |
          Amperestunden sind eine Ladung, keine Energie. Für die Energie musst du mit der Spannung multiplizieren.
  - typ: zahl
    label: c) W in kJ
    loesung: "4.000*3600*3.85/1000"
    einheit: "kJ"
    anzeige: '55{,}4'
    fehler:
      - wert: "4.000*3.85/1000"
        meldung: |
          Eine Wattstunde sind $3600\,\text{J}$, weil eine Stunde $3600\,\text{s}$ hat. Multipliziere die Wattstunden mit $3600$.
hinweise:
  - '$4000\,\text{mAh} = 4{,}000\,\text{Ah}$, und $1\,\text{Ah} = 3600\,\text{C}$.'
  - '$W = U\cdot Q$, und $1\,\text{Wh} = 3600\,\text{J}$.'
loesung: |
  **a)** $Q = 4{,}000\,\text{A}\cdot 3600\,\text{s} = 14\,400\,\text{C}$.
  ---
  **b)** $W = U\cdot Q = 3{,}85\,\text{V}\cdot 4{,}000\,\text{Ah} = 15{,}4\,\text{Wh}$.
  ---
  **c)** $W = 3{,}85\,\text{V}\cdot 14\,400\,\text{C} = 55\,440\,\text{J} = 55{,}4\,\text{kJ}$.
```

```reflexion
frage: Warum werden die Scheinwerfer eines Autos kurz dunkler, wenn man den Motor startet? Erkläre es mit dem Innenwiderstand.
antwort: |
  Der Anlasser zieht beim Starten einen sehr großen Strom, etwa $200\,\text{A}$. Dieser Strom fließt auch durch den Innenwiderstand der Batterie. Selbst bei nur $12\,\text{m}\Omega$ fallen dort $2{,}4\,\text{V}$ ab. Die Klemmenspannung sinkt also von gut $12\,\text{V}$ auf etwa $10\,\text{V}$. Die Scheinwerfer hängen parallel an denselben Klemmen. Sie bekommen kurz weniger Spannung und leuchten schwächer. Sobald der Anlasser aus ist, fließt wieder wenig Strom, und die Klemmenspannung steigt.
```

## Messgeräte: Strom und Spannung richtig messen

```aufgabe
id: p13-10-check
art: check
titel: "Vorwissen: Wo fließt der Strom bei zwei Wegen?"
niveau: 1
lernziel: 8
kompetenz: verstehen
angabe: |
  Ein Widerstand mit $0{,}10\,\Omega$ und einer mit $1000\,\Omega$ liegen parallel. Durch welchen fließt fast der ganze Strom?

  Herkunft: [13.6 Reihenschaltung und Parallelschaltung](/lernen/physik1/gleichstrom/reihenschaltung-und-parallelschaltung)
teile:
  - typ: auswahl
    optionen:
      - "Durch den Widerstand mit $0{,}10\\,\\Omega$."
      - "Durch den Widerstand mit $1000\\,\\Omega$."
      - "Durch beide gleich viel, weil an beiden dieselbe Spannung liegt."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Parallel liegt an beiden dieselbe Spannung. Dann fließt durch den **kleineren** Widerstand der größere Strom, $I = U/R$.
      - wert: 2
        meldung: |
          Gleiche Spannung heißt nicht gleicher Strom. Der Strom ist $U/R$, also durch $0{,}10\,\Omega$ zehntausendmal größer.
hinweise:
  - 'Parallel: gleiche Spannung, $I = U/R$.'
loesung: |
  An beiden liegt dieselbe Spannung. Der Strom ist umgekehrt proportional zum Widerstand.
  ---
  Durch $0{,}10\,\Omega$ fließt zehntausendmal mehr als durch $1000\,\Omega$. Genau so wirkt ein Strommesser, den man falsch parallel anschließt.
```

Ein Messgerät soll messen, ohne die Schaltung zu verändern. Das gelingt nur, wenn man es richtig
einbaut und wenn es den passenden Innenwiderstand hat.

**Worum geht es in einem Satz?** Ein Strommesser muss vom Strom **durchflossen** werden und kommt deshalb
in die Leitung. Ein Spannungsmesser vergleicht die Potentiale **zweier Punkte** und kommt deshalb an diese
beiden Punkte.

- Der **Strommesser** (Amperemeter) misst den Strom, der durch ihn hindurchfließt. Man muss den Kreis
  auftrennen und ihn **in Reihe** einbauen. Damit er den Strom nicht verkleinert, braucht er einen
  **möglichst kleinen** Innenwiderstand.
- Der **Spannungsmesser** (Voltmeter) misst den Potentialunterschied zwischen seinen beiden Anschlüssen.
  Man schließt ihn **parallel** zum Bauteil an. Damit er kaum Strom abzweigt, braucht er einen **möglichst
  großen** Innenwiderstand. Digitale Multimeter haben etwa $10\,\text{M}\Omega$.

Die Messschaltung für eine Kennlinie aus der Lektion
[13.3 Widerstand, Ohmsches Gesetz und Kennlinien](/lernen/physik1/gleichstrom/widerstand-ohmsches-gesetz-und-kennlinien)
zeigt beide Geräte richtig eingebaut.

```plot
x: [0.5, 13]
y: [0, 6.8]
gleich: true
hoehe: 330
achsen: { x: " ", y: " " }
graphen:
  - { f: "3.32", von: 1.05, bis: 1.95, farbe: 3, label: "U" }
  - { f: "3.08", von: 1.3, bis: 1.7, farbe: 3 }
  - { f: "5.38", von: 3.5, bis: 4.5, farbe: 0, label: "R₁" }
  - { f: "5.02", von: 3.5, bis: 4.5, farbe: 0 }
  - { f: "2.99", von: 7.32, bis: 7.68, farbe: 1, label: "R₂" }
  - { f: "2.09", von: 7.32, bis: 7.68, farbe: 1 }
  - { f: "3.7", von: 10.32, bis: 10.68, farbe: 2, label: "R₃" }
  - { f: "2.7", von: 10.32, bis: 10.68, farbe: 2 }
kurven:
  - { x: "4 + 0.32*cos(t)", y: "6.2 + 0.32*sin(t)", t: [0, "2*pi"], farbe: 2 }
  - { x: "7.5 + 0.32*cos(t)", y: "4.2 + 0.32*sin(t)", t: [0, "2*pi"], farbe: 2 }
strecken:
  - { von: [1.5, 1.2], nach: [1.5, 3.08] }
  - { von: [1.5, 3.32], nach: [1.5, 5.2] }
  - { von: [1.3, 3.06], nach: [1.7, 3.06], farbe: 3 }
  - { von: [1.5, 5.2], nach: [2.5, 5.2] }
  - { von: [2.5, 5.2], nach: [3.5, 5.2] }
  - { von: [4.5, 5.2], nach: [5.5, 5.2] }
  - { von: [3.5, 5.02], nach: [3.5, 5.38], farbe: 0 }
  - { von: [4.5, 5.02], nach: [4.5, 5.38], farbe: 0 }
  - { von: [5.5, 5.2], nach: [7.5, 5.2] }
  - { von: [2.5, 5.2], nach: [2.5, 6.2] }
  - { von: [2.5, 6.2], nach: [3.68, 6.2] }
  - { von: [3.89, 6.37], nach: [4, 6.03], farbe: 2 }
  - { von: [4, 6.03], nach: [4.11, 6.37], farbe: 2 }
  - { von: [4.32, 6.2], nach: [5.5, 6.2] }
  - { von: [5.5, 6.2], nach: [5.5, 5.2] }
  - { von: [7.5, 5.2], nach: [7.5, 4.52] }
  - { von: [7.39, 4.03], nach: [7.5, 4.37], farbe: 2 }
  - { von: [7.5, 4.37], nach: [7.61, 4.03], farbe: 2 }
  - { von: [7.445, 4.18], nach: [7.555, 4.18], farbe: 2 }
  - { von: [7.5, 1.2], nach: [7.5, 2.09] }
  - { von: [7.5, 2.99], nach: [7.5, 3.88] }
  - { von: [7.32, 2.09], nach: [7.32, 2.99], farbe: 1 }
  - { von: [7.68, 2.09], nach: [7.68, 2.99], farbe: 1 }
  - { von: [7.5, 5.2], nach: [10.5, 5.2] }
  - { von: [10.5, 1.2], nach: [10.5, 2.7] }
  - { von: [10.5, 3.7], nach: [10.5, 5.2] }
  - { von: [10.32, 2.7], nach: [10.32, 3.7], farbe: 2 }
  - { von: [10.68, 2.7], nach: [10.68, 3.7], farbe: 2 }
  - { von: [10.5, 1.2], nach: [1.5, 1.2] }
punkte:
  - { x: 4.226, y: 6.426, label: "Messgerät 2", farbe: 2, offen: true }
  - { x: 2.5, y: 5.2, farbe: 0 }
  - { x: 5.5, y: 5.2, farbe: 0 }
  - { x: 7.5, y: 5.2, farbe: 0 }
  - { x: 7.5, y: 1.2, farbe: 0 }
  - { x: 7.726, y: 4.426, label: "Messgerät 1", farbe: 2, offen: true }
beschriftung: "Zwei Messgeräte in einer gemischten Schaltung. Messgerät 1 sitzt im Zweig von R₂, der ganze Strom dieses Zweigs fließt hindurch. Messgerät 2 ist mit seinen beiden Anschlüssen an die beiden Enden von R₁ angeschlossen."
```

:::achtung[Fehler: Den Strommesser parallel geschaltet]
**Falsche Schaltung:** Ein Strommesser mit $0{,}10\,\Omega$ Innenwiderstand wird direkt an die beiden
Anschlüsse einer Lampe gehalten, die an einem $9$-V-Block mit $1{,}5\,\Omega$ Innenwiderstand hängt.

**Was passiert:** Der Strommesser ist ein fast widerstandsloser Weg parallel zur Lampe, also praktisch ein
**Kurzschluss**. Es fließt $I = \dfrac{9{,}0\,\text{V}}{1{,}5\,\Omega + 0{,}10\,\Omega} = 5{,}6\,\text{A}$, fast nur durch das
Messgerät. Die Lampe geht aus, und die Sicherung des Messgeräts brennt durch. Merke: Strommesser immer in
die Leitung, nie an zwei Punkte mit verschiedenem Potential.
:::

```aufgabe
id: p13-messgeraet-schaltung
titel: Messgeräte richtig einbauen
niveau: 1
lernziel: 8
kompetenz: verstehen
angabe: |
  Welche Aussagen sind richtig? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Ein Strommesser wird in Reihe zum Verbraucher geschaltet."
      - "Ein Spannungsmesser soll einen möglichst kleinen Innenwiderstand haben."
      - "Ein Spannungsmesser wird parallel zum Verbraucher geschaltet."
      - "Ein Strommesser soll einen möglichst kleinen Innenwiderstand haben."
    richtig: [0, 2, 3]
    fehler:
      - wert: [0, 1, 2, 3]
        meldung: |
          Ein Spannungsmesser mit kleinem Innenwiderstand würde viel Strom abzweigen und die Spannung, die er messen soll, selbst herunterziehen. Er braucht einen **großen** Innenwiderstand.
      - wert: [0, 2]
        meldung: |
          Auch die vierte Aussage stimmt. Der Strommesser liegt im Stromweg. Hätte er einen großen Widerstand, würde er den Strom verkleinern, den er messen soll.
hinweise:
  - Welches Gerät liegt im Stromweg, welches daneben?
loesung: |
  **Strommesser:** in Reihe, kleiner Innenwiderstand, damit an ihm kaum Spannung abfällt. Aussagen 1 und 4 sind richtig.
  ---
  **Spannungsmesser:** parallel, **großer** Innenwiderstand, damit er kaum Strom abzweigt. Aussage 3 ist richtig, Aussage 2 falsch.
```

```aufgabe
id: p13-voltmeter-reihe
titel: Spannungsmesser in der Leitung
niveau: 1
lernziel: 8
kompetenz: verstehen
angabe: |
  Jemand baut einen Spannungsmesser mit $10\,\text{M}\Omega$ Innenwiderstand versehentlich **in Reihe** zu einer Lampe in einen Stromkreis mit einer $4{,}5$-V-Batterie ein. Was passiert?
teile:
  - typ: auswahl
    optionen:
      - "Die Lampe bleibt dunkel, und der Spannungsmesser zeigt fast $4{,}5\\,\\text{V}$."
      - "Die Lampe leuchtet normal, und der Spannungsmesser zeigt die Spannung an der Lampe."
      - "Der Spannungsmesser brennt durch, weil zu viel Strom fließt."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Der riesige Innenwiderstand liegt jetzt im Stromweg. Er begrenzt den Strom auf winzige Werte, die Lampe kann nicht leuchten.
      - wert: 2
        meldung: |
          Das passiert einem **Strommesser**, der parallel geschaltet wird. Ein Spannungsmesser in Reihe lässt dagegen fast keinen Strom durch.
hinweise:
  - Wie groß ist der Strom, wenn $10\,\text{M}\Omega$ im Stromweg liegen?
  - Wo fällt in einer Reihenschaltung fast die ganze Spannung ab?
loesung: |
  **Ansatz:** In Reihe begrenzt der riesige Innenwiderstand den Strom: $I \approx 4{,}5\,\text{V}/10\,\text{M}\Omega = 0{,}45\,\mu\text{A}$. Die Lampe bleibt dunkel.
  ---
  Die Spannung teilt sich im Verhältnis der Widerstände. Fast die ganze Spannung fällt am Messgerät ab, es zeigt fast $4{,}5\,\text{V}$. Kaputt geht dabei nichts, aber die Messung ist sinnlos.
```

### Wie stark stört das Messgerät?

Kein Messgerät ist ideal. Ein Spannungsmesser zieht immer einen kleinen Strom. Hängt er an einem
Bauteil mit großem Widerstand, verändert er die Schaltung merklich.

:::beispiel[Ein Spannungsmesser belastet einen hochohmigen Teiler]
Ein Spannungsteiler aus zwei Widerständen mit je $1{,}0\,\text{M}\Omega$ liegt an $10\,\text{V}$. Ohne Messgerät liegen
an jedem Widerstand $5{,}0\,\text{V}$. Ein Multimeter mit $10\,\text{M}\Omega$ misst die Spannung am unteren Widerstand.

**Schritt 1, Messgerät parallel:** Unterer Widerstand und Messgerät bilden
$\dfrac{1{,}0\cdot 10}{1{,}0 + 10}\,\text{M}\Omega = 0{,}909\,\text{M}\Omega$.

**Schritt 2, Teiler neu:** $U = 10\,\text{V}\cdot\dfrac{0{,}909}{1{,}0 + 0{,}909} = 4{,}76\,\text{V}$.

**Deutung:** Das Messgerät zeigt knapp $5\,\%$ zu wenig. Bei kleinen Widerständen im Kiloohm-Bereich wäre der
Fehler vernachlässigbar. Faustregel: Der Spannungsmesser soll mindestens hundertmal hochohmiger sein als
das Bauteil.
:::

**Messunsicherheit eines Digitalmultimeters.** Jedes Messgerät hat eine angegebene Genauigkeit. Bei
Multimetern steht sie oft in der Form „$\pm(0{,}5\,\% + 2\,\text{Digits})$“. Ein **Digit** ist eine Einheit der
letzten angezeigten Stelle. Die Unsicherheit setzt sich also aus einem Anteil vom Messwert und einem
festen Anteil zusammen, siehe auch
[Kapitel 1, Messunsicherheit und signifikante Stellen](/lernen/physik1/groessen-einheiten-messen/messunsicherheit-und-signifikante-stellen).

:::beispiel[Unsicherheit einer Spannungsmessung]
Ein Multimeter mit der Genauigkeit $\pm(0{,}5\,\% + 2\,\text{Digits})$ zeigt $5{,}00\,\text{V}$ an. Die letzte Stelle sind
Hundertstel Volt.

**Schritt 1, prozentualer Anteil:** $0{,}5\,\%$ von $5{,}00\,\text{V}$ sind $0{,}025\,\text{V}$.

**Schritt 2, Digits:** Zwei Einheiten der letzten Stelle sind $2\cdot 0{,}01\,\text{V} = 0{,}02\,\text{V}$.

**Schritt 3, zusammen:** $\Delta U = 0{,}025\,\text{V} + 0{,}02\,\text{V} = 0{,}045\,\text{V}$. Ergebnis:
$U = (5{,}00 \pm 0{,}05)\,\text{V}$. Die Unsicherheit rundet man auf eine Stelle und gibt den Messwert passend an.
:::

```aufgabe
id: p13-multimeter-unsicherheit
titel: Wie genau ist die Anzeige?
niveau: 2
lernziel: 8
kompetenz: anwenden
angabe: |
  Ein Multimeter mit der Genauigkeit $\pm(0{,}8\,\% + 3\,\text{Digits})$ zeigt $3{,}47\,\text{V}$. Die letzte Stelle sind Hundertstel Volt.

  a) Wie groß ist die Messunsicherheit (in V, auf drei Nachkommastellen)?

  b) Wie groß ist die relative Unsicherheit (in Prozent)?
teile:
  - typ: zahl
    label: a) ΔU in V
    loesung: "0.008*3.47+3*0.01"
    toleranz: 0.002
    einheit: "V"
    anzeige: '0{,}058'
    fehler:
      - wert: "0.008*3.47"
        meldung: |
          Die drei Digits fehlen. Sie kommen als fester Anteil dazu: $3\cdot 0{,}01\,\text{V} = 0{,}03\,\text{V}$.
      - wert: "0.008*3.47+3"
        meldung: |
          Ein Digit ist eine Einheit der **letzten angezeigten Stelle**, hier $0{,}01\,\text{V}$, nicht $1\,\text{V}$.
  - typ: zahl
    label: b) relativ in %
    loesung: "(0.008*3.47+0.03)/3.47*100"
    toleranz: 0.1
    einheit: "%"
    anzeige: '1{,}7'
    fehler:
      - wert: "0.8"
        meldung: |
          $0{,}8\,\%$ ist nur der prozentuale Anteil. Durch die Digits ist die gesamte relative Unsicherheit größer.
hinweise:
  - 'Prozentualer Anteil vom Messwert plus $3\cdot 0{,}01\,\text{V}$.'
  - 'Relative Unsicherheit: $\Delta U/U$ in Prozent.'
loesung: |
  **Ansatz:** Die Unsicherheit besteht aus einem Anteil vom Messwert und einem festen Anteil aus den Digits.
  ---
  **a)** $0{,}8\,\%\cdot 3{,}47\,\text{V} = 0{,}028\,\text{V}$ und $3\cdot 0{,}01\,\text{V} = 0{,}030\,\text{V}$, zusammen $\Delta U = 0{,}058\,\text{V}$. Ergebnis: $U = (3{,}47 \pm 0{,}06)\,\text{V}$.
  ---
  **b)** $\dfrac{0{,}058\,\text{V}}{3{,}47\,\text{V}} = 0{,}017 = 1{,}7\,\%$. Bei kleinen Anzeigewerten machen die Digits einen großen Teil der Unsicherheit aus.
```

```aufgabe
id: p13-schaltplan-messgeraete
titel: Was misst welches Gerät?
niveau: 2
lernziel: 8
kompetenz: verstehen
angabe: |
  Welche Aussagen über die beiden Messgeräte sind richtig? (Mehrfachauswahl)
plot:
  x: [0.5, 13]
  y: [0, 6.8]
  gleich: true
  hoehe: 330
  achsen: { x: " ", y: " " }
  graphen:
    - { f: "3.32", von: 1.05, bis: 1.95, farbe: 3, label: "U" }
    - { f: "3.08", von: 1.3, bis: 1.7, farbe: 3 }
    - { f: "5.38", von: 3.5, bis: 4.5, farbe: 0, label: "R₁" }
    - { f: "5.02", von: 3.5, bis: 4.5, farbe: 0 }
    - { f: "2.99", von: 7.32, bis: 7.68, farbe: 1, label: "R₂" }
    - { f: "2.09", von: 7.32, bis: 7.68, farbe: 1 }
    - { f: "3.7", von: 10.32, bis: 10.68, farbe: 2, label: "R₃" }
    - { f: "2.7", von: 10.32, bis: 10.68, farbe: 2 }
  kurven:
    - { x: "4 + 0.32*cos(t)", y: "6.2 + 0.32*sin(t)", t: [0, "2*pi"], farbe: 2 }
    - { x: "7.5 + 0.32*cos(t)", y: "4.2 + 0.32*sin(t)", t: [0, "2*pi"], farbe: 2 }
  strecken:
    - { von: [1.5, 1.2], nach: [1.5, 3.08] }
    - { von: [1.5, 3.32], nach: [1.5, 5.2] }
    - { von: [1.3, 3.06], nach: [1.7, 3.06], farbe: 3 }
    - { von: [1.5, 5.2], nach: [2.5, 5.2] }
    - { von: [2.5, 5.2], nach: [3.5, 5.2] }
    - { von: [4.5, 5.2], nach: [5.5, 5.2] }
    - { von: [3.5, 5.02], nach: [3.5, 5.38], farbe: 0 }
    - { von: [4.5, 5.02], nach: [4.5, 5.38], farbe: 0 }
    - { von: [5.5, 5.2], nach: [7.5, 5.2] }
    - { von: [2.5, 5.2], nach: [2.5, 6.2] }
    - { von: [2.5, 6.2], nach: [3.68, 6.2] }
    - { von: [3.89, 6.37], nach: [4, 6.03], farbe: 2 }
    - { von: [4, 6.03], nach: [4.11, 6.37], farbe: 2 }
    - { von: [4.32, 6.2], nach: [5.5, 6.2] }
    - { von: [5.5, 6.2], nach: [5.5, 5.2] }
    - { von: [7.5, 5.2], nach: [7.5, 4.52] }
    - { von: [7.39, 4.03], nach: [7.5, 4.37], farbe: 2 }
    - { von: [7.5, 4.37], nach: [7.61, 4.03], farbe: 2 }
    - { von: [7.445, 4.18], nach: [7.555, 4.18], farbe: 2 }
    - { von: [7.5, 1.2], nach: [7.5, 2.09] }
    - { von: [7.5, 2.99], nach: [7.5, 3.88] }
    - { von: [7.32, 2.09], nach: [7.32, 2.99], farbe: 1 }
    - { von: [7.68, 2.09], nach: [7.68, 2.99], farbe: 1 }
    - { von: [7.5, 5.2], nach: [10.5, 5.2] }
    - { von: [10.5, 1.2], nach: [10.5, 2.7] }
    - { von: [10.5, 3.7], nach: [10.5, 5.2] }
    - { von: [10.32, 2.7], nach: [10.32, 3.7], farbe: 2 }
    - { von: [10.68, 2.7], nach: [10.68, 3.7], farbe: 2 }
    - { von: [10.5, 1.2], nach: [1.5, 1.2] }
  punkte:
    - { x: 4.226, y: 6.426, label: "Messgerät 2", farbe: 2, offen: true }
    - { x: 2.5, y: 5.2, farbe: 0 }
    - { x: 5.5, y: 5.2, farbe: 0 }
    - { x: 7.5, y: 5.2, farbe: 0 }
    - { x: 7.5, y: 1.2, farbe: 0 }
    - { x: 7.726, y: 4.426, label: "Messgerät 1", farbe: 2, offen: true }
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Messgerät 1 misst den Strom durch $R_2$."
      - "Messgerät 2 misst die Spannung an $R_1$."
      - "Messgerät 1 misst den Gesamtstrom der Schaltung."
      - "Messgerät 2 misst die Spannung der Quelle."
    richtig: [0, 1]
    fehler:
      - wert: [1, 2]
        meldung: |
          Messgerät 1 sitzt im Zweig von $R_2$, **hinter** dem Knoten, an dem sich der Strom aufteilt. Durch $R_3$ fließender Strom kommt nicht durch Messgerät 1.
      - wert: [0, 3]
        meldung: |
          Messgerät 2 ist an die beiden Enden von $R_1$ angeschlossen. Es misst den Potentialunterschied genau zwischen diesen zwei Punkten, also die Spannung an $R_1$.
hinweise:
  - Welcher Strom fließt durch Messgerät 1? Verfolge die Leitung bis zum nächsten Knoten.
  - Zwischen welchen zwei Punkten hängt Messgerät 2?
loesung: |
  **Ansatz:** Ein Strommesser misst den Strom in dem Zweig, in dem er sitzt. Ein Spannungsmesser misst die Spannung zwischen den zwei Punkten, an denen er hängt.
  ---
  **Messgerät 1** sitzt im Zweig von $R_2$. Es misst nur $I_2$, nicht den Gesamtstrom.
  ---
  **Messgerät 2** hängt an den beiden Enden von $R_1$ und misst $U_1$. Die Quellenspannung wäre die Spannung zwischen den beiden Polen.
```

### Den Messbereich erweitern

Ein einfaches Zeigerinstrument, das **Drehspulinstrument**, erreicht seinen Vollausschlag schon bei kleinen
Strömen, oft bei $1\,\text{mA}$. Sein Zeiger wird von einer Spule im Feld eines Magneten gedreht
([Kapitel 14, Die Kraft auf einen stromdurchflossenen Leiter](/lernen/physik1/magnetismus-wechselstrom/die-kraft-auf-einen-stromdurchflossenen-leiter)). Will man damit größere Ströme oder Spannungen
messen, schaltet man passende Widerstände dazu.

- **Strombereich erweitern:** Ein kleiner **Nebenwiderstand** (Shunt) kommt **parallel** zum Instrument. Der
  größte Teil des Stroms fließt am Instrument vorbei.
- **Spannungsbereich erweitern:** Ein großer **Vorwiderstand** kommt **in Reihe** zum Instrument. An ihm fällt
  der größte Teil der Spannung ab.

```plot
x: [0.5, 12.5]
y: [0.7, 5.4]
gleich: true
hoehe: 260
achsen: { x: " ", y: " " }
graphen:
  - { f: "2.18", von: 6, bis: 7, farbe: 1, label: "Nebenwiderstand" }
  - { f: "1.82", von: 6, bis: 7, farbe: 1 }
kurven:
  - { x: "6.5 + 0.32*cos(t)", y: "4.4 + 0.32*sin(t)", t: [0, "2*pi"], farbe: 2 }
strecken:
  - { von: [1.5, 3.2], nach: [4.5, 3.2] }
  - { von: [4.5, 3.2], nach: [4.5, 4.4] }
  - { von: [4.5, 4.4], nach: [6.18, 4.4] }
  - { von: [6.39, 4.23], nach: [6.5, 4.57], farbe: 2 }
  - { von: [6.5, 4.57], nach: [6.61, 4.23], farbe: 2 }
  - { von: [6.445, 4.38], nach: [6.555, 4.38], farbe: 2 }
  - { von: [6.82, 4.4], nach: [8.5, 4.4] }
  - { von: [8.5, 4.4], nach: [8.5, 3.2] }
  - { von: [4.5, 3.2], nach: [4.5, 2] }
  - { von: [4.5, 2], nach: [6, 2] }
  - { von: [7, 2], nach: [8.5, 2] }
  - { von: [6, 1.82], nach: [6, 2.18], farbe: 1 }
  - { von: [7, 1.82], nach: [7, 2.18], farbe: 1 }
  - { von: [8.5, 2], nach: [8.5, 3.2] }
  - { von: [8.5, 3.2], nach: [11.5, 3.2] }
vektoren:
  - { von: [2, 3.6], nach: [3.8, 3.6], label: "I", farbe: 3 }
punkte:
  - { x: 4.5, y: 3.2, farbe: 0 }
  - { x: 8.5, y: 3.2, farbe: 0 }
  - { x: 6.726, y: 4.626, label: "Instrument Rᵢ", farbe: 2, offen: true }
beschriftung: "Strombereich erweitern: Der Nebenwiderstand liegt parallel zum Instrument. Am Knoten teilt sich der Strom I. Nur ein kleiner Teil fließt durch das Instrument, der Rest durch den Nebenwiderstand."
```

```plot
x: [0.5, 12.5]
y: [0.7, 4.6]
gleich: true
hoehe: 220
achsen: { x: " ", y: " " }
graphen:
  - { f: "2.88", von: 3.25, bis: 4.25, farbe: 1, label: "Vorwiderstand" }
  - { f: "2.52", von: 3.25, bis: 4.25, farbe: 1 }
kurven:
  - { x: "7.5 + 0.32*cos(t)", y: "2.7 + 0.32*sin(t)", t: [0, "2*pi"], farbe: 2 }
strecken:
  - { von: [1.5, 2.7], nach: [3.25, 2.7] }
  - { von: [4.25, 2.7], nach: [6, 2.7] }
  - { von: [3.25, 2.52], nach: [3.25, 2.88], farbe: 1 }
  - { von: [4.25, 2.52], nach: [4.25, 2.88], farbe: 1 }
  - { von: [6, 2.7], nach: [7.18, 2.7] }
  - { von: [7.39, 2.53], nach: [7.5, 2.87], farbe: 2 }
  - { von: [7.5, 2.87], nach: [7.61, 2.53], farbe: 2 }
  - { von: [7.445, 2.68], nach: [7.555, 2.68], farbe: 2 }
  - { von: [7.82, 2.7], nach: [10.5, 2.7] }
punkte:
  - { x: 1.5, y: 2.7, label: "A", farbe: 0 }
  - { x: 7.726, y: 2.926, label: "Instrument Rᵢ", farbe: 2, offen: true }
  - { x: 10.5, y: 2.7, label: "B", farbe: 0 }
beschriftung: "Spannungsbereich erweitern: Der Vorwiderstand liegt in Reihe zum Instrument. Gemessen wird die Spannung zwischen A und B. Der größte Teil davon fällt am Vorwiderstand ab."
```

:::satz[Messbereichserweiterung]
Ein Instrument mit dem Innenwiderstand $R_i$ hat bei dem Strom $I_m$ Vollausschlag. Dabei liegt an ihm die
Spannung $U_m = R_i\cdot I_m$.

- Neuer Strombereich $I$: Nebenwiderstand parallel, $R_N = \dfrac{U_m}{I - I_m}$.
- Neuer Spannungsbereich $U$: Vorwiderstand in Reihe, $R_V = \dfrac{U}{I_m} - R_i$.
:::

Die Formeln folgen direkt aus den Regeln der Lektion
[13.6 Reihenschaltung und Parallelschaltung](/lernen/physik1/gleichstrom/reihenschaltung-und-parallelschaltung). Beim Nebenwiderstand liegt an ihm dieselbe
Spannung $U_m$ wie am Instrument, und durch ihn fließt der Rest $I - I_m$. Beim Vorwiderstand muss bei der
vollen Spannung $U$ genau der Strom $I_m$ fließen. Der Gesamtwiderstand ist also $U/I_m$, und davon zieht man
den Instrumentenwiderstand ab.

:::beispiel[Ein Instrument für zwei neue Bereiche]
Ein Instrument hat $R_i = 50\,\Omega$ und Vollausschlag bei $I_m = 2{,}0\,\text{mA}$. Also $U_m = 50\,\Omega\cdot 0{,}0020\,\text{A} = 0{,}10\,\text{V}$.

**Strombereich $100\,\text{mA}$:** Durch den Nebenwiderstand fließen $100\,\text{mA} - 2{,}0\,\text{mA} = 98\,\text{mA}$.
$R_N = \dfrac{0{,}10\,\text{V}}{0{,}098\,\text{A}} = 1{,}02\,\Omega$.

**Spannungsbereich $20\,\text{V}$:** Gesamtwiderstand $\dfrac{20\,\text{V}}{0{,}0020\,\text{A}} = 10\,000\,\Omega$. Davon ist das
Instrument $50\,\Omega$, also $R_V = 9950\,\Omega$.

**Deutung:** Der Nebenwiderstand ist klein, der Vorwiderstand groß. So wird aus dem empfindlichen
Instrument entweder ein Strommesser für größere Ströme mit kleinem Gesamtwiderstand oder ein
Spannungsmesser mit großem Gesamtwiderstand.
:::

:::achtung[Fehler: Im Nebenwiderstand den ganzen Strom angesetzt]
**Falsche Rechnung:** „Ein Instrument mit $5{,}0\,\Omega$ und Vollausschlag bei $10\,\text{mA}$ soll bis $50\,\text{mA}$ messen.
Also $R_N = 0{,}050\,\text{V}/0{,}050\,\text{A} = 1{,}0\,\Omega$.“

**Richtig:** Durch das Instrument fließen bei Vollausschlag selbst $10\,\text{mA}$. Durch den Nebenwiderstand
fließt nur der Rest: $40\,\text{mA}$. Also $R_N = 0{,}050\,\text{V}/0{,}040\,\text{A} = 1{,}25\,\Omega$. Mit dem falschen Wert
würde das Gerät erst bei $60\,\text{mA}$ voll ausschlagen. Es zeigt dann immer ein Sechstel zu wenig an.
:::

```aufgabe
id: p13-shunt
titel: Strommessbereich erweitern
niveau: 2
lernziel: 8
kompetenz: rechnen
angabe: |
  Ein Drehspulinstrument hat den Innenwiderstand $100\,\Omega$ und zeigt bei $1{,}0\,\text{mA}$ Vollausschlag. Wie groß muss der Nebenwiderstand sein, damit der Vollausschlag $10\,\text{mA}$ entspricht (in Ω)?
teile:
  - typ: zahl
    loesung: "100*1.0e-3/(10e-3-1.0e-3)"
    einheit: "Ω"
    anzeige: '11{,}1'
    fehler:
      - wert: "100*1.0e-3/10e-3"
        meldung: |
          Durch den Nebenwiderstand fließt nicht der ganze Strom. $1{,}0\,\text{mA}$ fließen ja durch das Instrument, also nur $9{,}0\,\text{mA}$ durch den Nebenwiderstand.
      - wert: "10e-3/(100*1.0e-3)"
        meldung: |
          Das ist ein Kehrwert, also kein Widerstand. $R_N$ ist Spannung durch Strom: $U_m/(I - I_m)$.
hinweise:
  - 'Bei Vollausschlag liegt am Instrument $U_m = 100\,\Omega\cdot 1{,}0\,\text{mA} = 0{,}10\,\text{V}$, und dieselbe Spannung liegt am parallelen Nebenwiderstand.'
  - 'Durch den Nebenwiderstand fließt $I - I_m$.'
loesung: |
  **Ansatz:** Instrument und Nebenwiderstand liegen parallel, an beiden liegt $U_m = R_i I_m = 100\,\Omega\cdot 0{,}0010\,\text{A} = 0{,}10\,\text{V}$.
  ---
  Durch den Nebenwiderstand fließt der Rest: $I - I_m = 10\,\text{mA} - 1{,}0\,\text{mA} = 9{,}0\,\text{mA}$.
  ---
  $R_N = \dfrac{0{,}10\,\text{V}}{0{,}0090\,\text{A}} = 11{,}1\,\Omega$. Probe: Gesamtwiderstand $100\,\Omega \parallel 11{,}1\,\Omega = 10\,\Omega$, und $0{,}10\,\text{V}/10\,\Omega = 10\,\text{mA}$.
```

```aufgabe
id: p13-vorwiderstand
titel: Spannungsmessbereich erweitern
niveau: 2
lernziel: 8
kompetenz: rechnen
angabe: |
  Dasselbe Instrument ($100\,\Omega$, Vollausschlag bei $1{,}0\,\text{mA}$) soll als Spannungsmesser mit dem Messbereich $10\,\text{V}$ dienen. Wie groß muss der Vorwiderstand sein (in Ω)?
teile:
  - typ: zahl
    loesung: "10/1.0e-3-100"
    einheit: "Ω"
    anzeige: '9900'
    fehler:
      - wert: "10/1.0e-3"
        meldung: |
          $10\,000\,\Omega$ ist der nötige **Gesamtwiderstand**. Das Instrument selbst bringt schon $100\,\Omega$ mit. Ziehe sie ab.
      - wert: "10/1.0e-3+100"
        meldung: |
          Der Instrumentenwiderstand ist schon ein Teil der $10\,000\,\Omega$. Er wird abgezogen, nicht dazugezählt.
hinweise:
  - Bei $10\,\text{V}$ soll genau $1{,}0\,\text{mA}$ fließen. Welcher Gesamtwiderstand ist dazu nötig?
  - Vorwiderstand und Instrument liegen in Reihe, ihre Widerstände addieren sich.
loesung: |
  **Ansatz:** Bei $10\,\text{V}$ soll genau der Vollausschlagstrom fließen. Vorwiderstand und Instrument liegen in Reihe.
  ---
  **Gesamtwiderstand:** $R = \dfrac{10\,\text{V}}{0{,}0010\,\text{A}} = 10\,000\,\Omega$.
  ---
  **Vorwiderstand:** $R_V = 10\,000\,\Omega - 100\,\Omega = 9900\,\Omega$. An ihm fallen bei Vollausschlag $9{,}9\,\text{V}$ ab, am Instrument nur $0{,}10\,\text{V}$.
```

```reflexion
frage: Ein idealer Spannungsmesser hätte einen unendlich großen Innenwiderstand, ein idealer Strommesser den Innenwiderstand null. Erkläre für beide, warum.
antwort: |
  Ein Spannungsmesser wird parallel zu einem Bauteil angeschlossen. Jeder Strom, der durch ihn fließt, fehlt dem Bauteil oder belastet die Schaltung zusätzlich. Nur bei unendlich großem Widerstand fließt gar kein Strom durch ihn, und die Schaltung bleibt unverändert. Ein Strommesser liegt dagegen im Stromweg. Jeder Widerstand in ihm erzeugt einen zusätzlichen Spannungsabfall und verkleinert den Strom, den er messen soll. Nur mit dem Widerstand null ändert er nichts. Reale Geräte kommen diesen Idealen nur nahe.
```

```aufgabe
id: p13-voltmeter-belastung
titel: Ein billiges Messgerät verfälscht die Messung
niveau: 3
lernziel: 8
kompetenz: modellieren
angabe: |
  Ein Spannungsteiler aus zwei Widerständen mit je $470\,\text{k}\Omega$ liegt an $12\,\text{V}$. Ein altes Zeigermessgerät mit dem Innenwiderstand $1{,}0\,\text{M}\Omega$ misst die Spannung am unteren Widerstand.

  a) Welche Spannung liegt dort ohne Messgerät (in V)?

  b) Welche Spannung zeigt das Messgerät (in V)?

  c) Um wie viel Prozent weicht die Anzeige vom wahren Wert ohne Messgerät ab? Gib die Abweichung negativ an, wenn zu wenig angezeigt wird.
teile:
  - typ: zahl
    label: a) U ohne Messgerät in V
    loesung: "12/2"
    einheit: "V"
    anzeige: '6{,}0'
  - typ: zahl
    label: b) angezeigte U in V
    loesung: "12*(470*1000/1470)/(470+470*1000/1470)"
    einheit: "V"
    anzeige: '4{,}86'
  - typ: zahl
    label: c) Abweichung in %
    loesung: "(12*(470*1000/1470)/(470+470*1000/1470)-6)/6*100"
    toleranz: 0.3
    einheit: "%"
    anzeige: '-19'
hinweise:
  - Das Messgerät liegt parallel zum unteren Widerstand und verändert damit den Teiler.
  - 'Fasse $470\,\text{k}\Omega$ und $1000\,\text{k}\Omega$ parallel zusammen und rechne den Teiler neu.'
gefuehrt:
  - text: Welche Spannung liegt ohne Messgerät am unteren Widerstand (in V)?
    teil: { typ: zahl, loesung: "6" }
    erklaerung: Zwei gleiche Widerstände teilen die Spannung halb und halb, also $6{,}0\,\text{V}$.
  - text: Fasse den unteren Widerstand und das Messgerät parallel zusammen (in kΩ).
    teil: { typ: zahl, loesung: "470*1000/1470" }
    erklaerung: '$\dfrac{470\cdot 1000}{470 + 1000}\,\text{k}\Omega = 320\,\text{k}\Omega$.'
  - text: Berechne die Spannung am unteren Teil mit Messgerät (in V).
    teil: { typ: zahl, loesung: "12*(470*1000/1470)/(470+470*1000/1470)" }
    erklaerung: '$12\,\text{V}\cdot\dfrac{320}{470 + 320} = 4{,}86\,\text{V}$.'
  - text: Überlege, was die Abweichung für die Wahl des Messgeräts bedeutet.
    erklaerung: 'Die Anzeige ist $19\,\%$ zu klein. Ein Multimeter mit $10\,\text{M}\Omega$ wäre hier viel besser geeignet.'
loesung: |
  **a) Ansatz:** Ohne Messgerät teilen zwei gleiche Widerstände die Spannung halb und halb: $6{,}0\,\text{V}$.
  ---
  **b)** Das Messgerät liegt parallel zum unteren Widerstand: $R' = \dfrac{470\cdot 1000}{1470}\,\text{k}\Omega = 320\,\text{k}\Omega$. Der Teiler liefert jetzt $U = 12\,\text{V}\cdot\dfrac{320}{470 + 320} = 4{,}86\,\text{V}$.
  ---
  **c)** $\dfrac{4{,}86\,\text{V} - 6{,}0\,\text{V}}{6{,}0\,\text{V}} = -0{,}19 = -19\,\%$. Das Messgerät ist nur etwa doppelt so hochohmig wie das Bauteil. Das reicht bei weitem nicht. Erst ab etwa hundertfach wird der Fehler klein.
```

## Leiter, Isolatoren und Halbleiter im Bändermodell

```aufgabe
id: p13-11-check
art: check
titel: "Vorwissen: Metall gegen Heißleiter"
niveau: 1
lernziel: 9
kompetenz: verstehen
angabe: |
  Wie ändert sich der Widerstand eines Kupferdrahts und eines Heißleiters aus Halbleitermaterial, wenn beide wärmer werden?

  Herkunft: [13.4 Widerstand eines Drahtes: Material, Form und Temperatur](/lernen/physik1/gleichstrom/widerstand-eines-drahtes-material-form-und-temperatur)
teile:
  - typ: auswahl
    optionen:
      - "Beim Kupfer steigt er, beim Heißleiter sinkt er."
      - "Bei beiden steigt er, weil die Atome stärker schwingen."
      - "Bei beiden sinkt er, weil die Elektronen schneller werden."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Für Kupfer stimmt das. Beim Halbleiter werden beim Erwärmen aber viel mehr Ladungsträger frei. Dieser Effekt überwiegt, sein Widerstand sinkt.
      - wert: 2
        meldung: |
          Beim Metall ändert sich die Zahl der freien Elektronen kaum. Die stärkeren Gitterschwingungen bremsen sie, der Widerstand steigt.
hinweise:
  - Was bedeutet der Name „Heißleiter“?
loesung: |
  Kupfer ist ein Kaltleiter: Sein Widerstand steigt mit der Temperatur.
  ---
  Ein Heißleiter leitet im Warmen besser, sein Widerstand sinkt. Warum das so ist, klärt diese Lektion.
```

Warum leitet Kupfer, Glas aber nicht, und Silizium nur ein wenig? Und warum werden manche Stoffe beim
Erwärmen leitfähiger, andere schlechter? Bevor wir das mit dem Bändermodell erklären, sehen wir uns an,
welche Ladungsträger in verschiedenen Stoffen den Strom tragen.

### Wer trägt den Strom?

- **Metalle:** Jedes Atom gibt ein oder zwei Elektronen ab. Diese freien Elektronen bewegen sich durch das
  Gitter. Es fließt nur Ladung, kein Stoff.
- **Elektrolyte:** Salze, Säuren und Laugen zerfallen in Wasser in **Ionen**, also geladene Atome oder
  Moleküle. Kochsalz zerfällt zum Beispiel in $\text{Na}^+$ und $\text{Cl}^-$. Positive und negative Ionen wandern in
  entgegengesetzte Richtungen. Dabei wird **Stoff** transportiert. Reines Wasser leitet kaum.
- **Gase:** Normalerweise sind sie Isolatoren. Werden Moleküle **ionisiert**, also Elektronen herausgeschlagen,
  entstehen freie Elektronen und positive Ionen. Dann leitet das Gas.
- **Vakuum:** Hier gibt es keine Ladungsträger. Ein Strom fließt nur, wenn man welche hineinbringt, etwa
  Elektronen aus einem glühenden Draht. So arbeitete die alte Bildröhre aus
  [Kapitel 12, Geladene Teilchen im homogenen Feld](/lernen/physik1/elektrostatik/geladene-teilchen-im-homogenen-feld).
- **Halbleiter:** Hier gibt es zwei Sorten beweglicher Ladungsträger, Elektronen und sogenannte Löcher.
  Dazu gleich mehr.

**Gasentladung.** In einem starken elektrischen Feld werden die wenigen freien Elektronen eines Gases so
stark beschleunigt, dass sie beim Zusammenstoß weitere Moleküle ionisieren. Jedes neue Elektron wird wieder
beschleunigt und schlägt weitere heraus. Diese Lawine heißt **Stoßionisation**. Beispiele sind Blitz,
Zündfunke, Schweißlichtbogen und Leuchtstoffröhre.

```aufgabe
id: p13-leitungsarten
titel: Ladungsträger in einer Salzlösung
niveau: 1
lernziel: 9
kompetenz: verstehen
angabe: |
  Zwei Elektroden tauchen in eine Kochsalzlösung, und es fließt Strom. Was transportiert die Ladung in der Lösung?
teile:
  - typ: auswahl
    optionen:
      - "Positive und negative Ionen, die in entgegengesetzte Richtungen wandern."
      - "Freie Elektronen, so wie im Metall."
      - "Nur die positiven Natrium-Ionen."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          In einer Flüssigkeit gibt es keine freien Elektronen wie im Metallgitter. Die Ladung sitzt auf den Ionen, die selbst wandern.
      - wert: 2
        meldung: |
          Auch die negativen Chlorid-Ionen wandern, und zwar zur positiven Elektrode. Beide Ionensorten tragen zum Strom bei.
hinweise:
  - In was zerfällt Kochsalz im Wasser?
loesung: |
  **Ansatz:** Kochsalz zerfällt in Wasser in $\text{Na}^+$-Ionen und $\text{Cl}^-$-Ionen.
  ---
  Die positiven Ionen wandern zur negativen Elektrode, die negativen zur positiven. Beide tragen den Strom, und mit ihnen wandert Stoff.
```

### Das Bändermodell

Diese Stelle ist neu und abstrakt. Lies sie langsam. Wir brauchen nur das Bild, keine Rechnung.

**Worum geht es in einem Satz?** Ob ein Stoff leitet, hängt davon ab, ob seine Elektronen leicht in einen
Zustand kommen, in dem sie sich frei bewegen können.

**Das Bild:** In einem einzelnen Atom können Elektronen nur ganz bestimmte Energien haben, wie die Stufen
einer Treppe ([Kapitel 16, Das Bohrsche Atommodell und die Linienspektren](/lernen/physik1/wellenoptik-atom-kernphysik/das-bohrsche-atommodell-und-die-linienspektren)). Rücken sehr viele Atome in einem
Kristall zusammen, verschmieren diese Stufen zu breiten **Energiebändern**. Zwischen den Bändern bleiben
Lücken, deren Energien kein Elektron haben kann. Sie heißen **Bandlücken**.

Zwei Bänder entscheiden über die Leitfähigkeit:

1. Das **Valenzband** enthält die Elektronen, die die Atome aneinander binden. Ist es ganz voll, kann sich
   kein Elektron bewegen. Stell dir einen ausverkauften Kinosaal vor: Niemand kann den Platz wechseln.
2. Das **Leitungsband** liegt darüber und ist fast leer. Ein Elektron dort kann sich frei bewegen, wie ein
   Besucher in einem leeren Saal.
3. Leiten kann ein Stoff also nur, wenn Elektronen ins Leitungsband kommen. Dafür brauchen sie mindestens die
   Energie der Bandlücke.

```plot
x: [0, 9]
y: [0, 5]
achsen: { x: " ", y: "Energie" }
flaechen:
  - { f: "1", g: "0", von: 0.5, bis: 2.5, farbe: 0 }
  - { f: "2.2", g: "0.8", von: 0.5, bis: 2.5, farbe: 1 }
  - { f: "1", g: "0", von: 3.5, bis: 5.5, farbe: 0 }
  - { f: "2.6", g: "1.6", von: 3.5, bis: 5.5, farbe: 1 }
  - { f: "1", g: "0", von: 6.5, bis: 8.5, farbe: 0 }
  - { f: "4.4", g: "3.4", von: 6.5, bis: 8.5, farbe: 1 }
punkte:
  - { x: 0.5, y: 2.2, label: "Leiter" }
  - { x: 3.5, y: 2.6, label: "Halbleiter" }
  - { x: 6.5, y: 4.4, label: "Isolator" }
beschriftung: "Bändermodell. Unten blau das Valenzband, darüber orange das Leitungsband. Beim Leiter überlappen die Bänder, Elektronen kommen ohne Energieaufwand ins Leitungsband. Beim Halbleiter trennt eine kleine Lücke von etwa 1 eV die Bänder. Beim Isolator ist die Lücke so groß, dass praktisch kein Elektron sie überwinden kann."
```

- **Leiter** (Metalle): Valenz- und Leitungsband überlappen, oder das Leitungsband ist schon teilweise gefüllt. Es gibt immer sehr viele freie Elektronen.
- **Halbleiter** wie Silizium oder Germanium: Die Bandlücke ist klein, bei Silizium $1{,}1\,\text{eV}$. Wärme oder Licht heben einige Elektronen hinüber.
- **Isolatoren** wie Glas oder Diamant: Die Bandlücke ist groß, mehrere Elektronvolt. Bei Zimmertemperatur gelangt praktisch kein Elektron ins Leitungsband.

:::beispiel[Bandlücke gegen Wärmeenergie]
Wie groß ist die typische Wärmeenergie eines Teilchens bei Zimmertemperatur ($300\,\text{K}$) im Vergleich zur
Bandlücke von Silizium ($1{,}12\,\text{eV}$)?

**Schritt 1, Wärmeenergie:** Ein Maß dafür ist $k_B T$ mit der Boltzmann-Konstante $k_B = 1{,}381\cdot 10^{-23}\,\text{J/K}$:
$k_B T = 1{,}381\cdot 10^{-23}\,\tfrac{\text{J}}{\text{K}}\cdot 300\,\text{K} = 4{,}14\cdot 10^{-21}\,\text{J}$.

**Schritt 2, in Elektronvolt:** $1\,\text{eV} = 1{,}602\cdot 10^{-19}\,\text{J}$, also $k_B T = 0{,}0259\,\text{eV}$.

**Schritt 3, Vergleich:** $\dfrac{1{,}12\,\text{eV}}{0{,}0259\,\text{eV}} = 43$.

**Deutung:** Die Bandlücke ist $43$-mal größer als die typische Wärmeenergie. Nur sehr wenige Elektronen
schaffen den Sprung, durch seltene, besonders heftige Stöße. Darum leitet reines Silizium schlecht. Der Anteil
der Elektronen, die den Sprung schaffen, hängt sehr empfindlich von der Temperatur ab. Deshalb steigt die
Leitfähigkeit beim Erwärmen stark.
:::

```aufgabe
id: p13-leiter-isolator
titel: Aussagen zum Bändermodell
niveau: 1
lernziel: 9
kompetenz: verstehen
angabe: |
  Welche Aussagen zum Bändermodell sind richtig? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Bei Isolatoren ist die Bandlücke zwischen Valenz- und Leitungsband groß."
      - "Bei Halbleitern können durch Wärme Elektronen ins Leitungsband gelangen."
      - "Der Widerstand von Halbleitern steigt mit der Temperatur."
      - "Ein Loch verhält sich wie eine bewegliche positive Ladung."
    richtig: [0, 1, 3]
    fehler:
      - wert: [0, 1, 2, 3]
        meldung: |
          Beim Halbleiter werden beim Erwärmen mehr Elektronen über die Lücke gehoben. Mehr Ladungsträger bedeuten **weniger** Widerstand.
      - wert: [0, 1]
        meldung: |
          Auch die vierte Aussage stimmt. Wo ein Elektron fehlt, bleibt eine positive Überschussladung, und diese Lücke wandert.
hinweise:
  - Was passiert mit der Zahl der Ladungsträger in einem Halbleiter, wenn er wärmer wird?
loesung: |
  **Ansatz:** Wir prüfen jede Aussage mit dem Bild der Bänder und der Lücke.
  ---
  Isolatoren haben eine große Lücke, Halbleiter eine kleine, die Wärme manchmal überwindet. Aussagen 1 und 2 sind richtig.
  ---
  Mehr Wärme hebt mehr Elektronen über die Lücke, der Widerstand **sinkt**. Aussage 3 ist falsch. Ein Loch wirkt wie eine positive Ladung, Aussage 4 ist richtig.
```

### Elektronen und Löcher

Hebt die Wärme ein Elektron ins Leitungsband, bleibt im Valenzband ein freier Platz zurück. Er heißt
**Loch**. Das ist der zweite schwierige Gedanke dieser Lektion.

**Das Bild:** In einer fast vollen Sitzreihe im Kino ist ein Platz frei. Rückt der Nachbar auf den freien
Platz, ist nun sein alter Platz frei. Rückt dessen Nachbar nach, wandert die Lücke weiter. Die Personen
bewegen sich jeweils nur ein Stück nach links, die Lücke wandert dabei nach rechts.

Im Halbleiter ist es genauso. Die Valenzelektronen springen nacheinander in das Loch. Das Loch wandert
in die Gegenrichtung. Weil an der Stelle des Lochs ein Elektron fehlt, verhält es sich wie eine bewegliche
**positive** Ladung. In einem reinen Halbleiter entstehen Elektronen und Löcher immer paarweise. Es gibt
gleich viele von beiden. Das nennt man **Eigenleitung**.

**Typisches Missverständnis:** Ein Loch ist **kein** Teilchen wie ein Proton. Es ist ein fehlendes Elektron
in einer sonst vollen Umgebung. Nur sein Verhalten gleicht dem einer positiven Ladung.

```aufgabe
id: p13-loch-konzept
titel: Wohin wandert das Loch?
niveau: 2
lernziel: 9
kompetenz: begruenden
angabe: |
  In einem Halbleiter liegt ein elektrisches Feld, das nach rechts zeigt. Die Valenzelektronen springen deshalb nacheinander nach links in benachbarte Löcher. In welche Richtung bewegt sich das Loch, und wie trägt es zum Strom bei?
teile:
  - typ: auswahl
    optionen:
      - "Das Loch wandert nach rechts, in Feldrichtung, wie eine positive Ladung."
      - "Das Loch wandert nach links, zusammen mit den Elektronen."
      - "Das Loch bleibt stehen, weil nur Elektronen sich bewegen können."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Springt ein Elektron von rechts in das Loch, ist danach sein alter Platz rechts frei. Die Lücke wandert also nach **rechts**, gegen die Bewegung der Elektronen.
      - wert: 2
        meldung: |
          Das Loch ist zwar kein Teilchen, aber es wandert, weil Elektronen nacheinander nachrücken. Wie die Lücke in einer Sitzreihe.
hinweise:
  - Denk an die Lücke in einer Sitzreihe, in die die Nachbarn nacheinander rücken.
  - Eine positive Ladung bewegt sich in Feldrichtung.
loesung: |
  **Ansatz:** Ein Elektron, das nach links in ein Loch springt, hinterlässt rechts von sich einen freien Platz.
  ---
  Das Loch wandert also nach rechts, in Feldrichtung. So würde sich eine positive Ladung bewegen.
  ---
  Beide tragen deshalb zum Strom in **dieselbe** technische Richtung bei: Elektronen nach links sind wie positive Ladung nach rechts, und das Loch wandert nach rechts.
```

:::achtung[Fehler: Das Loch für ein Teilchen gehalten]
**Falsche Überlegung:** „Ein Loch ist negativ, weil dort ja ein Elektron hingehört.“

**Richtig:** An der Stelle des Lochs **fehlt** ein Elektron. Der Atomrumpf dort hat also eine positive
Ladung zu viel. Das Loch wirkt deshalb wie eine positive Ladung $+e$. Es ist aber kein eigenes Teilchen,
sondern ein freier Platz, der durch das Nachrücken der Elektronen wandert.
:::

```aufgabe
id: p13-bandluecke-kt
titel: Germanium bei Zimmertemperatur
niveau: 2
lernziel: 9
kompetenz: rechnen
angabe: |
  Germanium hat eine Bandlücke von $0{,}67\,\text{eV}$. Die typische Wärmeenergie bei $300\,\text{K}$ ist $k_B T = 0{,}0259\,\text{eV}$.

  a) Wievielmal größer ist die Bandlücke als $k_B T$?

  b) Leitet reines Germanium bei Zimmertemperatur besser oder schlechter als reines Silizium mit $1{,}12\,\text{eV}$?
teile:
  - typ: zahl
    label: a) Verhältnis
    loesung: "0.67/0.0259"
    anzeige: '25{,}9'
    fehler:
      - wert: "0.0259/0.67"
        meldung: |
          Das ist der Kehrwert. Gefragt ist, wievielmal die Bandlücke **größer** ist, also Bandlücke durch Wärmeenergie.
  - typ: auswahl
    label: b)
    optionen:
      - "Besser, weil die kleinere Lücke von mehr Elektronen überwunden wird."
      - "Schlechter, weil Germanium weniger Elektronen hat."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Entscheidend ist nicht die Zahl aller Elektronen, sondern wie viele ins Leitungsband gelangen. Bei kleinerer Lücke sind das viel mehr.
hinweise:
  - Teile die Bandlücke durch die Wärmeenergie. Beide sind in eV, die Einheit kürzt sich.
  - Je kleiner die Lücke im Vergleich zu $k_B T$, desto mehr Elektronen schaffen den Sprung.
loesung: |
  **Ansatz:** Wir vergleichen die Bandlücke mit der typischen Wärmeenergie.
  ---
  **a)** $\dfrac{0{,}67\,\text{eV}}{0{,}0259\,\text{eV}} = 25{,}9$. Bei Silizium war das Verhältnis $43$.
  ---
  **b)** Bei Germanium ist die Hürde im Verhältnis zur Wärmeenergie kleiner. Viel mehr Elektronen kommen ins Leitungsband. Reines Germanium leitet deshalb deutlich besser als reines Silizium.
```

:::achtung[Fehler: Halbleiter wie Metall gerechnet]
**Falsche Rechnung:** „Ein Heißleiter hat bei $20\,^\circ\text{C}$ den Widerstand $10\,\text{k}\Omega$. Bei
$50\,^\circ\text{C}$ ist er also $10\,\text{k}\Omega\cdot(1 + 3{,}9\cdot 10^{-3}\cdot 30) = 11\,\text{k}\Omega$.“

**Richtig:** Die Formel mit $\alpha$ gilt für Metalle. Im Halbleiter werden beim Erwärmen viel mehr
Ladungsträger frei, sein Widerstand **sinkt**, und zwar stark. Ein typischer Heißleiter hat bei
$50\,^\circ\text{C}$ nur noch etwa $3\,\text{k}\Omega$. Den Wert liest man aus der Kennlinie im Datenblatt ab.
:::

```aufgabe
id: p13-ntc-strom
titel: Ein Heißleiter als Temperaturfühler
niveau: 2
lernziel: 9
kompetenz: anwenden
angabe: |
  Ein Heißleiter liegt an $5{,}0\,\text{V}$. Laut Datenblatt hat er bei $20\,^\circ\text{C}$ den Widerstand $4{,}7\,\text{k}\Omega$ und bei $70\,^\circ\text{C}$ nur $0{,}68\,\text{k}\Omega$.

  a) Welcher Strom fließt bei $20\,^\circ\text{C}$ (in mA)?

  b) Welcher Strom fließt bei $70\,^\circ\text{C}$ (in mA)?
teile:
  - typ: zahl
    label: a) I bei 20 °C in mA
    loesung: "5.0/4.7"
    einheit: "mA"
    anzeige: '1{,}06'
    fehler:
      - wert: "5.0/4700"
        meldung: |
          Das ist der Strom in Ampere. Mit Kiloohm im Nenner kommt direkt Milliampere heraus: $5{,}0\,\text{V}/4{,}7\,\text{k}\Omega = 1{,}06\,\text{mA}$.
  - typ: zahl
    label: b) I bei 70 °C in mA
    loesung: "5.0/0.68"
    einheit: "mA"
    anzeige: '7{,}35'
    fehler:
      - wert: "5.0/4.7"
        meldung: |
          Beim Erwärmen ändert sich der Widerstand des Heißleiters. Nimm den Wert für $70\,^\circ\text{C}$ aus dem Datenblatt.
hinweise:
  - '$I = U/R$. $\text{V}/\text{k}\Omega$ ergibt mA.'
  - Nimm für jede Temperatur ihren eigenen Widerstand.
loesung: |
  **Ansatz:** Für jede Temperatur gilt $I = U/R$ mit dem passenden Widerstand aus dem Datenblatt.
  ---
  **a)** $I = \dfrac{5{,}0\,\text{V}}{4{,}7\,\text{k}\Omega} = 1{,}06\,\text{mA}$.
  ---
  **b)** $I = \dfrac{5{,}0\,\text{V}}{0{,}68\,\text{k}\Omega} = 7{,}35\,\text{mA}$. Der Strom steigt auf fast das Siebenfache. So eine große Änderung lässt sich leicht messen, deshalb eignet sich der Heißleiter als Thermometer.
```

```aufgabe
id: p13-gasentladung
titel: Warum leitet die Luft beim Blitz?
niveau: 2
lernziel: 9
kompetenz: verstehen
angabe: |
  Luft ist normalerweise ein guter Isolator. Warum kann bei einem Gewitter trotzdem ein Blitz durch die Luft schlagen?
teile:
  - typ: auswahl
    optionen:
      - "Im starken Feld schlagen beschleunigte Elektronen weitere Elektronen aus Molekülen heraus. Es entsteht eine Lawine von Ladungsträgern."
      - "Die Regentropfen bilden eine durchgehende Wasserleitung zwischen Wolke und Boden."
      - "Die Luft wird beim Gewitter zu einem Metall, weil sie sich stark aufheizt."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Regentropfen sind weit voneinander entfernt und bilden keine durchgehende Leitung. Außerdem leitet Regenwasser nur schwach. Der Blitz entsteht durch Ionisation der Luft selbst.
      - wert: 2
        meldung: |
          Die Luft heizt sich erst **durch** den Blitz auf. Leitfähig wird sie, weil Moleküle ionisiert werden. Dabei entstehen freie Elektronen und Ionen, aber kein Metall.
hinweise:
  - Was passiert mit einem freien Elektron in einem sehr starken Feld?
  - Was geschieht, wenn ein schnelles Elektron auf ein Molekül trifft?
loesung: |
  **Ansatz:** Ein Gas leitet, sobald es freie Ladungsträger enthält. Die entstehen durch Ionisation.
  ---
  Im starken Feld zwischen Wolke und Boden werden die wenigen freien Elektronen stark beschleunigt. Beim Stoß schlagen sie weitere Elektronen aus Molekülen heraus.
  ---
  Jedes neue Elektron wird wieder beschleunigt: Es entsteht eine Lawine, die **Stoßionisation**. Der Blitzkanal wird dadurch leitend.
```

### Elektrolyse und das Faradaysche Gesetz (Vertiefung)

Fließt Strom durch einen Elektrolyten, scheiden sich an den Elektroden Stoffe ab. Das nennt man
**Elektrolyse**. Man nutzt sie zum Verkupfern und Verchromen, zur Gewinnung von Aluminium und
Wasserstoff und beim Laden jedes Akkus. Jedes Ion trägt eine ganze Zahl $z$ von Elementarladungen. Für ein
Kupferion $\text{Cu}^{2+}$ ist $z = 2$. Ein Mol Elementarladungen ist die **Faraday-Konstante**
$F = e\cdot N_A = 96\,485\,\text{C/mol}$.

Fließt die Ladung $Q = I\cdot t$, werden $Q/(z\cdot e)$ Ionen abgeschieden. Das sind $Q/(z\cdot F)$ Mol. Mit der
molaren Masse $M$ ergibt sich die abgeschiedene Masse:
$$m = \frac{M\cdot I\cdot t}{z\cdot F}.$$
Dieses **Faradaysche Gesetz** war einer der ersten Hinweise darauf, dass Ladung gequantelt ist.

:::beispiel[Einen Löffel versilbern]
Ein Löffel wird $30$ Minuten lang mit $0{,}50\,\text{A}$ versilbert. Silberionen sind $\text{Ag}^+$, also $z = 1$, und
$M = 107{,}9\,\text{g/mol}$.

**Schritt 1, Ladung:** $Q = 0{,}50\,\text{A}\cdot 1800\,\text{s} = 900\,\text{C}$.

**Schritt 2, Stoffmenge:** $n = \dfrac{Q}{z\,F} = \dfrac{900\,\text{C}}{1\cdot 96\,485\,\text{C/mol}} = 9{,}33\cdot 10^{-3}\,\text{mol}$.

**Schritt 3, Masse:** $m = n\cdot M = 9{,}33\cdot 10^{-3}\,\text{mol}\cdot 107{,}9\,\text{g/mol} = 1{,}01\,\text{g}$.
:::

```aufgabe
id: p13-elektrolyse
titel: Ein Werkstück verkupfern
niveau: 3
lernziel: 9
kompetenz: rechnen
angabe: |
  Ein Werkstück wird in einer Kupfersulfatlösung ($\text{Cu}^{2+}$-Ionen, $M = 63{,}5\,\text{g/mol}$) eine Stunde lang mit $2{,}0\,\text{A}$ verkupfert. Wie viel Kupfer scheidet sich ab (in g)? ($F = 96\,485\,\text{C/mol}$)
teile:
  - typ: zahl
    loesung: "63.5*2.0*3600/(2*96485)"
    einheit: "g"
    anzeige: '2{,}37'
    fehler:
      - wert: "63.5*2.0*3600/96485"
        meldung: |
          Jedes Kupferion trägt **zwei** Elementarladungen. Für ein Ion braucht man also zwei Elektronen, und es scheidet sich nur halb so viel ab: $z = 2$.
hinweise:
  - 'Ladung $Q = I\,t$. Jedes Kupferion braucht zwei Elektronen, also $z = 2$.'
  - 'Stoffmenge $n = Q/(z\,F)$, dann Masse $m = n\,M$.'
gefuehrt:
  - text: Welche Ladung fließt (in C)?
    teil: { typ: zahl, loesung: "2.0*3600" }
    erklaerung: '$Q = 2{,}0\,\text{A}\cdot 3600\,\text{s} = 7200\,\text{C}$.'
  - text: Wie viel Mol Kupfer werden abgeschieden?
    teil: { typ: zahl, loesung: "7200/(2*96485)" }
    erklaerung: '$n = \dfrac{7200\,\text{C}}{2\cdot 96\,485\,\text{C/mol}} = 0{,}0373\,\text{mol}$.'
  - text: Welche Masse ist das (in g)?
    teil: { typ: zahl, loesung: "7200/(2*96485)*63.5" }
    erklaerung: '$m = 0{,}0373\,\text{mol}\cdot 63{,}5\,\text{g/mol} = 2{,}37\,\text{g}$.'
  - text: Überlege, ob das Ergebnis plausibel ist.
    erklaerung: Ein paar Gramm Kupfer in einer Stunde bei zwei Ampere passen zu einer dünnen Schicht auf einem kleinen Werkstück.
loesung: |
  **Ansatz:** Faradaysches Gesetz. Zuerst die Ladung: $Q = I\,t = 2{,}0\,\text{A}\cdot 3600\,\text{s} = 7200\,\text{C}$.
  ---
  **Stoffmenge:** Jedes $\text{Cu}^{2+}$ braucht zwei Elementarladungen: $n = \dfrac{Q}{z\,F} = \dfrac{7200\,\text{C}}{2\cdot 96\,485\,\text{C/mol}} = 0{,}0373\,\text{mol}$.
  ---
  **Masse:** $m = n\,M = 0{,}0373\,\text{mol}\cdot 63{,}5\,\tfrac{\text{g}}{\text{mol}} = 2{,}37\,\text{g}$. Die Einheiten ergeben $\text{mol}\cdot\text{g/mol} = \text{g}$.
```

```reflexion
frage: Erkläre in eigenen Worten mit dem Bändermodell, warum ein Metall beim Erwärmen schlechter und ein Halbleiter besser leitet.
antwort: |
  Im Metall überlappen die Bänder. Es gibt immer sehr viele freie Elektronen, und ihre Zahl ändert sich beim Erwärmen kaum. Wärmer heißt aber: Die Atomrümpfe schwingen stärker, die Elektronen werden öfter gestört. Der Widerstand steigt. Im Halbleiter trennt eine kleine Bandlücke das volle Valenzband vom leeren Leitungsband. Bei Zimmertemperatur schaffen nur wenige Elektronen den Sprung. Beim Erwärmen werden es sehr viel mehr, und jedes hinterlässt zusätzlich ein Loch. Die Zahl der Ladungsträger wächst so stark, dass der Widerstand trotz der stärkeren Gitterschwingungen sinkt.
```

## Dotierung, Diode, LED, Solarzelle und Transistor

```aufgabe
id: p13-12-check
art: check
titel: "Vorwissen: Was ist ein Loch?"
niveau: 1
lernziel: 9
kompetenz: verstehen
angabe: |
  Was versteht man im Bändermodell eines Halbleiters unter einem **Loch**?

  Herkunft: [13.11 Leiter, Isolatoren und Halbleiter im Bändermodell](/lernen/physik1/gleichstrom/leiter-isolatoren-und-halbleiter-im-baendermodell)
teile:
  - typ: auswahl
    optionen:
      - "Einen freien Platz im Valenzband, der sich wie eine bewegliche positive Ladung verhält."
      - "Ein Proton, das sich durch den Kristall bewegt."
      - "Eine Stelle, an der ein ganzes Atom im Kristall fehlt."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Protonen sitzen fest in den Atomkernen. Ein Loch ist ein **fehlendes Elektron**, das durch das Nachrücken der Nachbarelektronen wandert.
      - wert: 2
        meldung: |
          Das Atom ist noch da. Es fehlt nur eines seiner Bindungselektronen. Diese Lücke ist das Loch.
hinweise:
  - Was bleibt im Valenzband zurück, wenn ein Elektron ins Leitungsband springt?
loesung: |
  Springt ein Elektron ins Leitungsband, bleibt im Valenzband ein freier Platz zurück: das Loch.
  ---
  Rücken Nachbarelektronen nach, wandert das Loch. Es verhält sich wie eine positive Ladung.
```

Reines Silizium leitet schlecht. Erst kleine, gezielte Verunreinigungen machen daraus das Material, auf dem
die ganze Elektronik beruht. In dieser Lektion bauen wir Schritt für Schritt vom dotierten Halbleiter bis
zum Transistor, dem Baustein jedes Computers.

### Dotierung: n-Halbleiter und p-Halbleiter

Ein Siliziumatom hat vier **Valenzelektronen**, das sind die äußeren Elektronen, die Bindungen eingehen. Mit
ihnen ist es an vier Nachbaratome gebunden. Ersetzt man wenige Siliziumatome durch Fremdatome, etwa eines
von einer Million, ändert sich die Leitfähigkeit enorm. Das nennt man **Dotieren**.

- **n-Dotierung:** Man baut Atome mit **fünf** Valenzelektronen ein, etwa Phosphor. Vier davon binden an die
  Nachbarn. Das fünfte wird nicht gebraucht und ist fast frei. Die beweglichen Ladungsträger sind vor allem
  **Elektronen**, also negativ. Daher der Name n-Halbleiter. Das Fremdatom heißt **Donator**, auf Deutsch
  Spender, weil es ein Elektron abgibt.
- **p-Dotierung:** Man baut Atome mit **drei** Valenzelektronen ein, etwa Bor. Einer Bindung fehlt dann ein
  Elektron: Es entsteht ein Loch. Die beweglichen Ladungsträger sind vor allem **Löcher**, also positiv. Das
  Fremdatom heißt **Akzeptor**, auf Deutsch Annehmer, weil es ein Elektron aufnehmen kann.

:::achtung[Fehler: „n-dotiert heißt negativ geladen“]
**Falsche Überlegung:** „Phosphor bringt ein zusätzliches Elektron mit. Also ist der n-Halbleiter negativ
geladen.“

**Richtig:** Jedes Phosphoratom bringt sein zusätzliches Elektron **und** ein zusätzliches Proton in seinem Kern
mit, denn es ist als Atom neutral. Der Kristall bleibt insgesamt neutral. Das „n“ beschreibt nur die Art
der **beweglichen** Ladungsträger. Genauso ist ein p-Halbleiter nicht positiv geladen.
:::

```aufgabe
id: p13-dotierung
titel: n oder p?
niveau: 1
lernziel: 9
kompetenz: verstehen
angabe: |
  Silizium wird mit Phosphor (fünf Valenzelektronen) dotiert. Welche Aussagen sind richtig? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Es entsteht ein n-Halbleiter."
      - "Der Kristall ist danach negativ geladen."
      - "Die beweglichen Ladungsträger sind vor allem Elektronen."
      - "Phosphor wirkt als Akzeptor."
    richtig: [0, 2]
    fehler:
      - wert: [0, 1, 2]
        meldung: |
          Jedes Phosphoratom ist neutral. Es bringt mit seinem zusätzlichen Elektron auch ein zusätzliches Proton mit. Der Kristall bleibt neutral.
      - wert: [0, 2, 3]
        meldung: |
          Phosphor **gibt** ein Elektron ab, er ist ein Spender, also ein Donator. Akzeptoren sind dreiwertige Atome wie Bor.
hinweise:
  - Was passiert mit dem fünften Elektron, das für die vier Bindungen nicht gebraucht wird?
loesung: |
  **Ansatz:** Phosphor hat ein Valenzelektron mehr als Silizium. Dieses fünfte Elektron ist fast frei.
  ---
  Es entsteht ein n-Halbleiter mit Elektronen als beweglichen Ladungsträgern. Phosphor ist ein Donator. Aussagen 1 und 3 sind richtig.
  ---
  Der Kristall bleibt neutral, denn jeder Phosphorkern hat ein Proton mehr als ein Siliziumkern. Aussagen 2 und 4 sind falsch.
```

### Der pn-Übergang

Was passiert, wenn ein p-Gebiet und ein n-Gebiet aneinandergrenzen? Diese Stelle ist schwer. Wir gehen sie
in kleinen Schritten durch.

**Worum geht es in einem Satz?** An der Grenze entsteht eine dünne Schicht ohne bewegliche Ladungsträger,
in der ein elektrisches Feld herrscht. Diese Schicht wirkt wie ein Ventil.

1. Im n-Gebiet gibt es viele freie Elektronen, im p-Gebiet viele Löcher. Wie Duftstoff, der sich im Raum
   verteilt, wandern die Elektronen ins p-Gebiet und füllen dort Löcher. Das nennt man **Diffusion**.
2. An der Grenze verschwinden so die beweglichen Ladungsträger. Es entsteht die **Sperrschicht**.
3. Zurück bleiben die ortsfesten Fremdatome, nun geladen. Im n-Gebiet sind es positive Donator-Ionen, die
   ihr Elektron abgegeben haben. Im p-Gebiet sind es negative Akzeptor-Ionen.
4. Diese getrennten Ladungen erzeugen ein elektrisches Feld, wie in einem kleinen Kondensator
   ([Kapitel 12, Kondensator und Kapazität](/lernen/physik1/elektrostatik/kondensator-und-kapazitaet)).
   Das Feld stößt weitere Elektronen zurück. Die Diffusion kommt zum Stillstand.

**Was haben wir gezeigt?** An der Grenze sitzt von selbst eine Spannung. Bei Silizium beträgt sie etwa
$0{,}7\,\text{V}$. Sie wirkt wie eine kleine Stufe im Potential, die Elektronen erst überwinden müssen.

- **Sperrrichtung:** Plus an das n-Gebiet, Minus an das p-Gebiet. Die äußere Spannung zieht Elektronen und
  Löcher von der Grenze weg. Die Sperrschicht wird breiter, es fließt praktisch kein Strom.
- **Durchlassrichtung:** Plus an das p-Gebiet, Minus an das n-Gebiet. Die Ladungsträger werden in die
  Sperrschicht gedrückt. Ab etwa $0{,}7\,\text{V}$ verschwindet sie, und der Strom steigt sehr steil an.

### Die Diode

Ein pn-Übergang mit zwei Anschlüssen heißt **Diode**. Sie ist ein Ventil für den Strom: In der einen Richtung
lässt sie ihn durch, in der anderen sperrt sie. Im Schaltzeichen zeigt das Dreieck in Durchlassrichtung,
also in technischer Stromrichtung. Der Strich markiert die n-Seite, die **Kathode**. Die p-Seite heißt **Anode**.
Ihre wichtigste Anwendung ist der **Gleichrichter**, der aus Wechselstrom Gleichstrom macht. In jedem
Netzteil steckt einer.

```plot
x: [-2, 1]
y: [-0.02, 0.1]
achsen: { x: "U in V", y: "I in A" }
graphen:
  - { f: "1e-12*(exp(x/0.026)-1)", farbe: 4, von: -2, bis: 0.72 }
strecken:
  - { von: [0.7, 0], nach: [0.7, 0.1], gestrichelt: true }
beschriftung: "Kennlinie einer Siliziumdiode. In Sperrrichtung (U kleiner als null) fließt praktisch kein Strom. In Durchlassrichtung bleibt der Strom bis etwa 0,7 V (gestrichelt) sehr klein und steigt dann sehr steil an. Die Kennlinie ist keine Ursprungsgerade, die Diode ist nicht ohmsch."
```

Für Rechnungen genügt meist ein einfaches Modell: In Durchlassrichtung fallen an der Diode etwa $0{,}7\,\text{V}$ ab,
egal wie groß der Strom ist. In Sperrrichtung fließt kein Strom. Die restliche Spannung liegt an den übrigen
Bauteilen.

:::beispiel[Diode mit Widerstand]
Eine Siliziumdiode liegt in Reihe mit einem Widerstand $R = 100\,\Omega$ an $6{,}0\,\text{V}$.

**Schritt 1, Durchlassrichtung:** An der Diode fallen $0{,}7\,\text{V}$ ab. Nach der Maschenregel bleiben für den
Widerstand $6{,}0\,\text{V} - 0{,}7\,\text{V} = 5{,}3\,\text{V}$.

**Schritt 2, Strom:** $I = \dfrac{5{,}3\,\text{V}}{100\,\Omega} = 0{,}053\,\text{A} = 53\,\text{mA}$.

**Schritt 3, umgepolt:** Jetzt sperrt die Diode. Es fließt praktisch kein Strom, die ganzen $6{,}0\,\text{V}$ liegen an der Diode.
:::

```aufgabe
id: p13-diode-richtung
titel: Welche Lampe leuchtet?
niveau: 1
lernziel: 9
kompetenz: verstehen
angabe: |
  Zwei Zweige mit je einer Diode und einer Lampe liegen parallel an einer $6{,}0$-V-Batterie. Der Pluspol ist mit der oberen Leitung verbunden. Welche Lampe leuchtet?
plot:
  x: [0.5, 13]
  y: [0.2, 6.8]
  gleich: true
  hoehe: 320
  achsen: { x: " ", y: " " }
  graphen:
    - { f: "3.62", von: 1.05, bis: 1.95, farbe: 3, label: "6,0 V" }
    - { f: "3.38", von: 1.3, bis: 1.7, farbe: 3 }
  kurven:
    - { x: "5.5 + 0.35*cos(t)", y: "2.7 + 0.35*sin(t)", t: [0, "2*pi"], farbe: 1 }
    - { x: "10.5 + 0.35*cos(t)", y: "2.7 + 0.35*sin(t)", t: [0, "2*pi"], farbe: 1 }
  strecken:
    - { von: [1.5, 1.2], nach: [1.5, 3.38] }
    - { von: [1.5, 3.62], nach: [1.5, 5.8] }
    - { von: [1.3, 3.36], nach: [1.7, 3.36], farbe: 3 }
    - { von: [1.5, 5.8], nach: [10.5, 5.8] }
    - { von: [1.5, 1.2], nach: [10.5, 1.2] }
    - { von: [5.5, 5.8], nach: [5.5, 5.4] }
    - { von: [5.5, 5.4], nach: [5.5, 5.1] }
    - { von: [5.5, 5.8], nach: [5.5, 5.2] }
    - { von: [5.5, 4.7], nach: [5.5, 4.1] }
    - { von: [5.2, 5.2], nach: [5.8, 5.2], farbe: 4 }
    - { von: [5.2, 5.2], nach: [5.5, 4.7], farbe: 4 }
    - { von: [5.8, 5.2], nach: [5.5, 4.7], farbe: 4 }
    - { von: [5.2, 4.7], nach: [5.8, 4.7], farbe: 4 }
    - { von: [5.5, 4.1], nach: [5.5, 3.05] }
    - { von: [5.253, 2.453], nach: [5.747, 2.947], farbe: 1 }
    - { von: [5.253, 2.947], nach: [5.747, 2.453], farbe: 1 }
    - { von: [5.5, 2.35], nach: [5.5, 1.2] }
    - { von: [10.5, 5.8], nach: [10.5, 5.2] }
    - { von: [10.5, 4.7], nach: [10.5, 4.1] }
    - { von: [10.2, 4.7], nach: [10.8, 4.7], farbe: 4 }
    - { von: [10.2, 4.7], nach: [10.5, 5.2], farbe: 4 }
    - { von: [10.8, 4.7], nach: [10.5, 5.2], farbe: 4 }
    - { von: [10.2, 5.2], nach: [10.8, 5.2], farbe: 4 }
    - { von: [10.5, 4.1], nach: [10.5, 3.05] }
    - { von: [10.253, 2.453], nach: [10.747, 2.947], farbe: 1 }
    - { von: [10.253, 2.947], nach: [10.747, 2.453], farbe: 1 }
    - { von: [10.5, 2.35], nach: [10.5, 1.2] }
  punkte:
    - { x: 5.5, y: 5.8, farbe: 0 }
    - { x: 5.5, y: 1.2, farbe: 0 }
    - { x: 5.8, y: 5.2, label: "D₁", farbe: 4, offen: true }
    - { x: 5.747, y: 2.947, label: "L₁", farbe: 1, offen: true }
    - { x: 10.8, y: 5.2, label: "D₂", farbe: 4, offen: true }
    - { x: 10.747, y: 2.947, label: "L₂", farbe: 1, offen: true }
teile:
  - typ: auswahl
    optionen:
      - "Nur $L_1$."
      - "Nur $L_2$."
      - "Beide."
      - "Keine."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Das Dreieck im Schaltzeichen zeigt die Durchlassrichtung, also die technische Stromrichtung von Plus nach Minus. Bei $D_2$ zeigt es nach oben, gegen den Strom. $D_2$ sperrt.
      - wert: 2
        meldung: |
          Eine Diode leitet nur in einer Richtung. Die beiden Dioden sind entgegengesetzt eingebaut. Eine von ihnen sperrt.
      - wert: 3
        meldung: |
          $D_1$ ist in Durchlassrichtung eingebaut: Ihr Dreieck zeigt von der Plusleitung zur Minusleitung. Durch diesen Zweig fließt Strom.
hinweise:
  - Das Dreieck zeigt in die Richtung, in die der technische Strom fließen darf.
  - Der technische Strom fließt außen vom Pluspol oben zum Minuspol unten.
loesung: |
  **Ansatz:** Der technische Strom will in beiden Zweigen von oben (Plus) nach unten (Minus) fließen. Das Dreieck einer Diode zeigt die erlaubte Richtung.
  ---
  $D_1$ zeigt nach unten, sie ist in Durchlassrichtung: $L_1$ leuchtet. $D_2$ zeigt nach oben, sie sperrt: $L_2$ bleibt dunkel.
```

```aufgabe
id: p13-diode-strom
titel: Strom durch eine Diode und einen Widerstand
niveau: 2
lernziel: 9
kompetenz: rechnen
angabe: |
  Eine Siliziumdiode (Durchlassspannung $0{,}7\,\text{V}$) liegt in Durchlassrichtung in Reihe mit einem Widerstand von $220\,\Omega$ an $9{,}0\,\text{V}$. Welcher Strom fließt (in mA)?
teile:
  - typ: zahl
    loesung: "(9.0-0.7)/220*1000"
    einheit: "mA"
    anzeige: '37{,}7'
    fehler:
      - wert: "9.0/220*1000"
        meldung: |
          An der Diode fallen $0{,}7\,\text{V}$ ab. Für den Widerstand bleiben nur $8{,}3\,\text{V}$.
      - wert: "0.7/220*1000"
        meldung: |
          $0{,}7\,\text{V}$ liegen an der Diode, nicht am Widerstand. Am Widerstand liegt der Rest der Spannung.
hinweise:
  - An der Diode fallen in Durchlassrichtung etwa $0{,}7\,\text{V}$ ab.
  - 'Maschenregel: Am Widerstand liegt $9{,}0\,\text{V} - 0{,}7\,\text{V}$.'
loesung: |
  **Ansatz:** Modell der Diode in Durchlassrichtung: konstant $0{,}7\,\text{V}$. Nach der Maschenregel liegen am Widerstand $9{,}0\,\text{V} - 0{,}7\,\text{V} = 8{,}3\,\text{V}$.
  ---
  **Rechnung:** $I = \dfrac{8{,}3\,\text{V}}{220\,\Omega} = 0{,}0377\,\text{A} = 37{,}7\,\text{mA}$.
  ---
  **Probe:** $220\,\Omega\cdot 0{,}0377\,\text{A} + 0{,}7\,\text{V} = 9{,}0\,\text{V}$.
```

```aufgabe
id: p13-diode
titel: Diode in Sperrrichtung erklären
niveau: 2
lernziel: 9
kompetenz: begruenden
angabe: |
  Eine Siliziumdiode liegt mit einer Lampe in Reihe an einer $6$-V-Batterie. Die Anode (p-Seite) ist mit dem Minuspol verbunden. Was passiert? Was ändert sich, wenn man die Batterie umpolt? Erkläre beides mit der Sperrschicht.
teile:
  - typ: text
    muster: |
      Die Anode liegt am Minuspol, die Diode ist also in Sperrrichtung geschaltet. Die äußere Spannung zieht die Elektronen im n-Gebiet und die Löcher im p-Gebiet von der Grenze weg. Die Sperrschicht wird breiter, es fließt praktisch kein Strom, und die Lampe bleibt dunkel. Nach dem Umpolen liegt Plus an der p-Seite. Die Ladungsträger werden in die Sperrschicht gedrückt, sie verschwindet ab etwa 0,7 V, und es fließt Strom. Die Lampe leuchtet, an ihr liegen etwa 5,3 V.
hinweise:
  - Durchlassrichtung heißt Plus an p, Minus an n.
  - Was macht die äußere Spannung mit den beweglichen Ladungsträgern an der Grenze?
loesung: |
  **Ansatz:** Durchlassrichtung heißt Plus an p. Hier liegt die p-Seite am Minuspol, also Sperrrichtung.
  ---
  **Sperrrichtung:** Elektronen und Löcher werden von der Grenze weggezogen, die Sperrschicht wird breiter. Kein Strom, die Lampe bleibt dunkel.
  ---
  **Umgepolt:** Die Ladungsträger werden in die Sperrschicht gedrückt. Ab etwa $0{,}7\,\text{V}$ fließt Strom, die Lampe leuchtet mit etwa $5{,}3\,\text{V}$.
```

### Leuchtdiode und Solarzelle

In einer **Leuchtdiode** (LED) fallen in Durchlassrichtung Elektronen aus dem Leitungsband in Löcher des
Valenzbandes. Die frei werdende Energie, gerade die Bandlücke, wird als **Licht** ausgesandt. Die Farbe hängt
von der Bandlücke ab. Die Energie eines Lichtteilchens ist $E = h\,f = h\,c/\lambda$
([Kapitel 16, Photonen und der Photoeffekt](/lernen/physik1/wellenoptik-atom-kernphysik/photonen-und-der-photoeffekt)). Größere Lücke heißt energiereicheres Licht, also
blau statt rot. Deshalb braucht eine rote LED etwa $1{,}8$ bis $2\,\text{V}$, eine blaue etwa $3\,\text{V}$.

Eine LED braucht immer einen **Vorwiderstand**. Oberhalb der Durchlassspannung steigt ihr Strom sonst so
steil, dass sie durchbrennt. Der Vorwiderstand begrenzt den Strom.

:::beispiel[Vorwiderstand für eine blaue LED]
Eine blaue LED soll an $9{,}0\,\text{V}$ mit $15\,\text{mA}$ leuchten. An ihr fallen dabei $3{,}1\,\text{V}$ ab.

**Schritt 1, Spannung am Vorwiderstand:** Maschenregel: $9{,}0\,\text{V} - 3{,}1\,\text{V} = 5{,}9\,\text{V}$.

**Schritt 2, Widerstand:** $R = \dfrac{5{,}9\,\text{V}}{0{,}015\,\text{A}} = 393\,\Omega$.

**Schritt 3, Normwert:** Widerstände gibt es nur in Normwerten. Man nimmt $390\,\Omega$. Dann fließen
$\dfrac{5{,}9\,\text{V}}{390\,\Omega} = 15{,}1\,\text{mA}$, praktisch wie geplant.
:::

:::beispiel[Welche Farbe hat eine LED?]
Eine LED hat die Bandlücke $1{,}9\,\text{eV}$. Welche Wellenlänge hat ihr Licht? ($h = 6{,}626\cdot 10^{-34}\,\text{J}\,\text{s}$,
$c = 3{,}00\cdot 10^{8}\,\text{m/s}$)

**Schritt 1, Energie in Joule:** $E = 1{,}9\cdot 1{,}602\cdot 10^{-19}\,\text{J} = 3{,}04\cdot 10^{-19}\,\text{J}$.

**Schritt 2, Wellenlänge:** $\lambda = \dfrac{h\,c}{E} = \dfrac{6{,}626\cdot 10^{-34}\,\text{J}\,\text{s}\cdot 3{,}00\cdot 10^{8}\,\text{m/s}}{3{,}04\cdot 10^{-19}\,\text{J}} = 6{,}53\cdot 10^{-7}\,\text{m} = 653\,\text{nm}$.

**Deutung:** $653\,\text{nm}$ ist rotes Licht.
:::

:::achtung[Fehler: Vorwiderstand mit der ganzen Spannung berechnet]
**Falsche Rechnung:** „Eine grüne LED soll an $12\,\text{V}$ mit $10\,\text{mA}$ leuchten. Also
$R = 12\,\text{V}/0{,}010\,\text{A} = 1200\,\Omega$.“

**Richtig:** An der LED selbst fallen etwa $2{,}2\,\text{V}$ ab. Am Vorwiderstand liegt nur der Rest,
$9{,}8\,\text{V}$. Also $R = 9{,}8\,\text{V}/0{,}010\,\text{A} = 980\,\Omega$. Mit $1200\,\Omega$ würde die LED nur mit
$8{,}2\,\text{mA}$ leuchten, also schwächer als geplant.
:::

Die **Solarzelle** ist die Umkehrung der LED. Licht hebt Elektronen ins Leitungsband und erzeugt
Elektron-Loch-Paare. Das Feld der Sperrschicht trennt sie: Die Elektronen wandern zur n-Seite, die Löcher zur
p-Seite. So entsteht eine Spannung von etwa $0{,}5\,\text{V}$ pro Zelle. Viele Zellen in Reihe ergeben ein Modul.
Handelsübliche Siliziummodule haben einen Wirkungsgrad von etwa $20\,\%$.

```aufgabe
id: p13-led-vorwiderstand
titel: Vorwiderstand einer roten LED
niveau: 2
lernziel: 9
kompetenz: anwenden
angabe: |
  Eine rote LED soll an $5{,}0\,\text{V}$ mit $20\,\text{mA}$ betrieben werden. An ihr fallen dabei $2{,}0\,\text{V}$ ab.

  a) Berechne den nötigen Vorwiderstand (in Ω).

  b) Welche Leistung setzt der Vorwiderstand in Wärme um (in mW)?
teile:
  - typ: zahl
    label: a) R in Ω
    loesung: "(5.0-2.0)/0.020"
    einheit: "Ω"
    anzeige: '150'
    fehler:
      - wert: "5.0/0.020"
        meldung: |
          Am Vorwiderstand liegt nicht die ganze Spannung. Die LED braucht selbst $2{,}0\,\text{V}$. Für den Vorwiderstand bleiben $3{,}0\,\text{V}$.
  - typ: zahl
    label: b) P in mW
    loesung: "(5.0-2.0)*0.020*1000"
    einheit: "mW"
    anzeige: '60'
    fehler:
      - wert: "5.0*0.020*1000"
        meldung: |
          Das ist die Leistung der ganzen Schaltung. Die LED nimmt davon $2{,}0\,\text{V}\cdot 20\,\text{mA} = 40\,\text{mW}$ auf. Gefragt ist nur der Vorwiderstand.
hinweise:
  - Am Vorwiderstand liegt die Differenz aus Versorgungsspannung und LED-Spannung.
  - '$R = U_R/I$ und $P = U_R\cdot I$.'
loesung: |
  **Ansatz:** LED und Vorwiderstand liegen in Reihe. Maschenregel: $U_R = 5{,}0\,\text{V} - 2{,}0\,\text{V} = 3{,}0\,\text{V}$.
  ---
  **a)** $R = \dfrac{U_R}{I} = \dfrac{3{,}0\,\text{V}}{0{,}020\,\text{A}} = 150\,\Omega$.
  ---
  **b)** $P = U_R\cdot I = 3{,}0\,\text{V}\cdot 0{,}020\,\text{A} = 0{,}060\,\text{W} = 60\,\text{mW}$. Die LED selbst nimmt $40\,\text{mW}$ auf. Mehr als die Hälfte der Energie wird also im Vorwiderstand verheizt.
```

```aufgabe
id: p13-led-farbe
titel: Wellenlänge einer LED
niveau: 2
lernziel: 9
kompetenz: rechnen
angabe: |
  Eine LED aus Indiumgalliumnitrid hat die Bandlücke $2{,}6\,\text{eV}$. Berechne die Wellenlänge ihres Lichts (in nm). ($h = 6{,}626\cdot 10^{-34}\,\text{J}\,\text{s}$, $c = 3{,}00\cdot 10^{8}\,\text{m/s}$, $1\,\text{eV} = 1{,}602\cdot 10^{-19}\,\text{J}$)
teile:
  - typ: zahl
    loesung: "6.626e-34*3.00e8/(2.6*1.602e-19)*1e9"
    einheit: "nm"
    anzeige: '477'
    fehler:
      - wert: "6.626e-34*3.00e8/2.6*1e9"
        meldung: |
          Die Energie muss in Joule stehen. Rechne $2{,}6\,\text{eV}$ zuerst mit $1{,}602\cdot 10^{-19}\,\text{J/eV}$ um.
hinweise:
  - 'Rechne die Bandlücke in Joule um.'
  - '$\lambda = h\,c/E$. Das Ergebnis kommt in Metern heraus, $1\,\text{nm} = 10^{-9}\,\text{m}$.'
loesung: |
  **Ansatz:** Die Energie eines Lichtteilchens entspricht der Bandlücke: $E = h\,c/\lambda$, also $\lambda = h\,c/E$.
  ---
  **Einheit:** $E = 2{,}6\cdot 1{,}602\cdot 10^{-19}\,\text{J} = 4{,}17\cdot 10^{-19}\,\text{J}$.
  ---
  **Rechnung:** $\lambda = \dfrac{6{,}626\cdot 10^{-34}\,\text{J}\,\text{s}\cdot 3{,}00\cdot 10^{8}\,\text{m/s}}{4{,}17\cdot 10^{-19}\,\text{J}} = 4{,}77\cdot 10^{-7}\,\text{m} = 477\,\text{nm}$. Das ist blaues Licht.
```

```aufgabe
id: p13-solarmodul
titel: Leistung eines Solarmoduls
niveau: 1
lernziel: 9
kompetenz: rechnen
angabe: |
  Ein Solarmodul hat $1{,}6\,\text{m}^2$ Fläche und den Wirkungsgrad $20\,\%$. Die Sonne strahlt mit $1000\,\text{W/m}^2$ senkrecht ein. Welche elektrische Leistung liefert es (in W)?
teile:
  - typ: zahl
    loesung: "1.6*1000*0.20"
    einheit: "W"
    anzeige: '320'
    fehler:
      - wert: "1.6*1000"
        meldung: |
          Das ist die eingestrahlte Lichtleistung. Nur $20\,\%$ davon werden in elektrische Leistung umgewandelt.
      - wert: "1000*0.20"
        meldung: |
          $1000\,\text{W/m}^2$ gilt pro Quadratmeter. Das Modul hat $1{,}6\,\text{m}^2$, also musst du noch mit der Fläche multiplizieren.
hinweise:
  - 'Erst die eingestrahlte Leistung $P = 1000\,\text{W/m}^2\cdot A$, dann davon $20\,\%$.'
loesung: |
  **Eingestrahlt:** $P_{\text{zu}} = 1{,}6\,\text{m}^2\cdot 1000\,\text{W/m}^2 = 1600\,\text{W}$.
  ---
  **Elektrisch:** $P = \eta\cdot P_{\text{zu}} = 0{,}20\cdot 1600\,\text{W} = 320\,\text{W}$.
```

### Der Transistor als Schalter

Ein **Transistor** hat drei Anschlüsse. Ein kleiner Strom oder eine kleine Spannung an einem Anschluss
steuert einen großen Strom zwischen den beiden anderen.

- Beim **Bipolartransistor** (Schichtfolge npn oder pnp) steuert ein kleiner **Basisstrom** $I_B$ einen viel
  größeren **Kollektorstrom** $I_C$. Das Verhältnis heißt **Stromverstärkung** $B = I_C/I_B$, typisch $100$ bis $500$.
  Die dünne mittlere Schicht, die Basis, lässt die meisten Elektronen vom Emitter zum Kollektor durch, sobald
  zwischen Basis und Emitter etwa $0{,}7\,\text{V}$ liegen.
- Der **Feldeffekttransistor** (MOSFET) ist der Baustein aller Computerchips. Bei ihm sitzt über dem
  Halbleiter eine isolierte Elektrode, das **Gate**. Ihre Spannung erzeugt ein elektrisches Feld. Dieses Feld
  entscheidet, ob sich zwischen den Anschlüssen **Source** und **Drain** ein leitender Kanal bildet. Das ist
  Elektrostatik im Kleinstformat, Gate und Halbleiter wirken wie die Platten eines Kondensators
  ([Kapitel 12, Kondensator und Kapazität](/lernen/physik1/elektrostatik/kondensator-und-kapazitaet)).

Für die Digitaltechnik genügt die Schalterfunktion. Hohe Gate-Spannung steht für eine logische $1$: Der
Schalter ist geschlossen, zwischen Source und Drain fließt Strom. Niedrige Gate-Spannung steht für eine $0$:
Der Schalter ist offen. Aus solchen Schaltern baut man
Logikgatter wie NOT, NAND und NOR, aus Gattern Addierer und Speicher und daraus Prozessoren. Weil ein
MOSFET über ein Feld gesteuert wird, fließt im Ruhezustand fast kein Steuerstrom. Deshalb passen Milliarden
davon auf einen Chip.

:::beispiel[Ein Transistor schaltet einen Motor]
Ein Mikrocontroller soll mit einem Bipolartransistor ($B = 200$) einen kleinen Motor schalten, der $100\,\text{mA}$
braucht. Sein Ausgang liefert $5{,}0\,\text{V}$, zwischen Basis und Emitter fallen $0{,}7\,\text{V}$ ab.

**Schritt 1, nötiger Basisstrom:** $I_B = \dfrac{I_C}{B} = \dfrac{100\,\text{mA}}{200} = 0{,}50\,\text{mA}$.

**Schritt 2, Basiswiderstand:** Am Basiswiderstand liegen $5{,}0\,\text{V} - 0{,}7\,\text{V} = 4{,}3\,\text{V}$. Damit
mindestens $0{,}50\,\text{mA}$ fließen, darf er höchstens $R_B = \dfrac{4{,}3\,\text{V}}{0{,}50\,\text{mA}} = 8{,}6\,\text{k}\Omega$ haben.

**Deutung:** Der Mikrocontroller muss nur ein halbes Milliampere liefern und schaltet damit das Zweihundertfache.
:::

```aufgabe
id: p13-transistor
titel: Der MOSFET als Schalter
niveau: 2
lernziel: 9
kompetenz: begruenden
angabe: |
  Erkläre, wie ein Feldeffekttransistor (MOSFET) als Schalter funktioniert und warum er sich für Computerchips besonders eignet.
teile:
  - typ: text
    muster: |
      Der MOSFET hat drei Anschlüsse: Source, Drain und das durch eine dünne Isolierschicht getrennte Gate. Eine Spannung am Gate erzeugt ein elektrisches Feld, das im Halbleiter darunter Ladungsträger anreichert. Dadurch bildet sich zwischen Source und Drain ein leitender Kanal, der Schalter ist geschlossen. Eine hohe Gate-Spannung steht für die logische 1. Ohne Gate-Spannung (logisch 0) fehlt der Kanal, der Schalter ist offen. Weil die Steuerung über ein Feld erfolgt, fließt im Ruhezustand fast kein Steuerstrom. Der Transistor verbraucht wenig Energie und lässt sich extrem klein bauen. Aus solchen Schaltern baut man Logikgatter und damit Prozessoren und Speicher.
hinweise:
  - Stichworte Gate, Isolierschicht, Feld, leitender Kanal.
  - Fließt durch das isolierte Gate ein Strom?
loesung: |
  **Funktion:** Die Gate-Spannung erzeugt durch die Isolierschicht ein Feld. Es sammelt Ladungsträger unter dem Gate und öffnet so einen leitenden Kanal zwischen Source und Drain.
  ---
  **Schalter:** Hohe Gate-Spannung (logisch $1$) heißt Kanal vorhanden, der Schalter ist geschlossen und Strom fließt. Niedrige Gate-Spannung (logisch $0$) heißt kein Kanal, der Schalter ist offen.
  ---
  **Vorteile:** Durch das isolierte Gate fließt kaum Steuerstrom. Der Transistor ist sparsam, schnell und winzig. Aus Transistoren entstehen Gatter, aus Gattern Rechenwerke.
```

```aufgabe
id: p13-transistor-basis
titel: Einen Transistor für ein Relais auslegen
niveau: 3
lernziel: 9
kompetenz: modellieren
angabe: |
  Ein Mikrocontroller mit $3{,}3\,\text{V}$ Ausgangsspannung soll über einen Bipolartransistor ein Relais (einen elektrisch betätigten Schalter) schalten, das $60\,\text{mA}$ braucht. Der Transistor hat die Stromverstärkung $B = 150$. Zwischen Basis und Emitter fallen $0{,}7\,\text{V}$ ab.

  a) Welcher Basisstrom ist mindestens nötig (in mA)?

  b) Wie groß darf der Basiswiderstand höchstens sein (in kΩ)?
teile:
  - typ: zahl
    label: a) I_B in mA
    loesung: "60/150"
    einheit: "mA"
    anzeige: '0{,}40'
  - typ: zahl
    label: b) R_B in kΩ
    loesung: "(3.3-0.7)/0.40"
    einheit: "kΩ"
    anzeige: '6{,}5'
hinweise:
  - '$B = I_C/I_B$, also $I_B = I_C/B$.'
  - 'Am Basiswiderstand liegt $3{,}3\,\text{V} - 0{,}7\,\text{V}$. Mit $\text{V}/\text{mA}$ kommt direkt $\text{k}\Omega$ heraus.'
gefuehrt:
  - text: Welcher Basisstrom ist nötig (in mA)?
    teil: { typ: zahl, loesung: "60/150" }
    erklaerung: '$I_B = 60\,\text{mA}/150 = 0{,}40\,\text{mA}$.'
  - text: Welche Spannung liegt am Basiswiderstand (in V)?
    teil: { typ: zahl, loesung: "3.3-0.7" }
    erklaerung: 'Maschenregel: $3{,}3\,\text{V} - 0{,}7\,\text{V} = 2{,}6\,\text{V}$.'
  - text: Wie groß darf der Basiswiderstand höchstens sein (in kΩ)?
    teil: { typ: zahl, loesung: "2.6/0.40" }
    erklaerung: '$R_B = 2{,}6\,\text{V}/0{,}40\,\text{mA} = 6{,}5\,\text{k}\Omega$.'
  - text: Überlege, warum „höchstens“ und nicht „genau“.
    erklaerung: Ein größerer Widerstand würde zu wenig Basisstrom liefern, das Relais zöge nicht sicher an. Ein etwas kleinerer Widerstand schadet nicht, der Transistor schaltet dann voll durch.
loesung: |
  **a) Ansatz:** Die Stromverstärkung verknüpft die Ströme: $I_B = \dfrac{I_C}{B} = \dfrac{60\,\text{mA}}{150} = 0{,}40\,\text{mA}$.
  ---
  **b)** Am Basiswiderstand liegt nach der Maschenregel $3{,}3\,\text{V} - 0{,}7\,\text{V} = 2{,}6\,\text{V}$. Höchstens $R_B = \dfrac{2{,}6\,\text{V}}{0{,}40\,\text{mA}} = 6{,}5\,\text{k}\Omega$.
  ---
  **Praxis:** Man wählt einen etwas kleineren Normwert, etwa $5{,}6\,\text{k}\Omega$. Dann fließt sicher genug Basisstrom.
```

```reflexion
frage: Warum entsteht am pn-Übergang ganz von selbst ein elektrisches Feld, obwohl beide Gebiete für sich elektrisch neutral sind?
antwort: |
  Jedes Gebiet ist für sich neutral, aber im n-Gebiet sind viele Elektronen beweglich und im p-Gebiet viele Löcher. An der Grenze diffundieren Elektronen ins p-Gebiet und füllen dort Löcher. Zurück bleiben die ortsfesten Fremdatome. Im n-Gebiet fehlt ihnen nun ihr Elektron, sie sind positiv. Im p-Gebiet haben sie ein Elektron zusätzlich aufgenommen, sie sind negativ. Diese getrennten Ladungen wirken wie die Platten eines geladenen Kondensators und erzeugen ein Feld. Das Feld stößt weitere Elektronen zurück, bis die Diffusion aufhört.
```

## Gemischte Wiederholung

In dieser Lektion mischen sich Aufgaben aus allen Teilen des Kapitels mit Stoff aus der Elektrostatik, der
Mechanik und der Wärmelehre. So übst du, was in der Prüfung zählt: zu erkennen, **welches** Werkzeug eine
Aufgabe verlangt. Die Aufgaben „Welches Verfahren passt?“ verlangen keine Rechnung, nur die richtige Wahl.

```aufgabe
id: p13-mix-kondensator
titel: "Welches Verfahren passt? Kondensatoren und Widerstände parallel"
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Zwei Kondensatoren ($4\,\mu\text{F}$ und $6\,\mu\text{F}$) und, in einer anderen Schaltung, zwei Widerstände ($4\,\Omega$ und $6\,\Omega$) sind jeweils **parallel** geschaltet. Wie fasst man sie zusammen? Rechnen musst du nicht.

  Herkunft der Kondensatoren: [Kapitel 12, Energie im Kondensator, Schaltungen, Laden und Entladen](/lernen/physik1/elektrostatik/energie-im-kondensator-schaltungen-laden-und-entladen)
teile:
  - typ: auswahl
    optionen:
      - "Kapazitäten addieren, bei den Widerständen die Kehrwerte addieren."
      - "Bei beiden die Kehrwerte addieren."
      - "Bei beiden einfach addieren."
      - "Bei den Kapazitäten die Kehrwerte addieren, die Widerstände einfach addieren."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Parallele Kondensatoren wirken wie ein Kondensator mit größerer Plattenfläche. Ihre Kapazitäten **addieren** sich direkt. Die Kehrwertregel gilt bei Kondensatoren für die Reihenschaltung.
      - wert: 2
        meldung: |
          Bei den Kondensatoren stimmt das. Parallele Widerstände sind aber zusätzliche Wege für den Strom. Der Ersatzwiderstand wird kleiner, also addiert man die Kehrwerte.
      - wert: 3
        meldung: |
          Genau vertauscht. Bei Kondensatoren und Widerständen gelten die Regeln „über Kreuz“: Kapazitäten addieren sich parallel, Widerstände in Reihe.
hinweise:
  - Was ändert sich bei parallelen Kondensatoren an der Plattenfläche? Was ändert sich bei parallelen Widerständen an der Zahl der Wege?
loesung: |
  **Kondensatoren parallel:** Die Plattenflächen addieren sich, also $C = C_1 + C_2 = 10\,\mu\text{F}$.
  ---
  **Widerstände parallel:** zusätzliche Wege, also $\dfrac1R = \dfrac1{R_1} + \dfrac1{R_2}$, $R = 2{,}4\,\Omega$. Die Regeln sind genau vertauscht.
```

```aufgabe
id: p13-mix-elektron-ev
titel: Energie eines Elektrons im Widerstand
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  An einem Widerstand liegen $12\,\text{V}$. Wie viel Energie gibt jedes Elektron, das den Widerstand durchläuft, an das Gitter ab?

  a) in Elektronvolt

  b) in Joule (gib die Zahl vor $10^{-18}$ an)

  Herkunft: [Kapitel 12, Feldstärke, Spannung und Potential im homogenen Feld](/lernen/physik1/elektrostatik/feldstaerke-spannung-und-potential-im-homogenen-feld)
teile:
  - typ: zahl
    label: a) in eV
    loesung: "12"
    einheit: "eV"
    anzeige: '12'
    fehler:
      - wert: "12*1.602e-19"
        meldung: |
          Das ist der Wert in Joule. In Elektronvolt ist es einfacher: Ein Elektron, das $12\,\text{V}$ durchläuft, gibt $12\,\text{eV}$ ab.
  - typ: zahl
    label: b) Zahl vor 10⁻¹⁸ J
    loesung: "12*1.602e-19/1e-18"
    anzeige: '1{,}92'
    fehler:
      - wert: "12/1.602e-19/1e-18"
        meldung: |
          $1\,\text{eV} = 1{,}602\cdot 10^{-19}\,\text{J}$. Von eV nach J wird **multipliziert**.
hinweise:
  - 'Ein Elektronvolt ist die Energie, die eine Elementarladung beim Durchlaufen von $1\,\text{V}$ gewinnt oder abgibt.'
loesung: |
  **a)** Die Spannung ist Energie pro Ladung. Eine Elementarladung gibt beim Durchlaufen von $12\,\text{V}$ genau $12\,\text{eV}$ ab.
  ---
  **b)** $W = 12\cdot 1{,}602\cdot 10^{-19}\,\text{J} = 1{,}92\cdot 10^{-18}\,\text{J}$. Diese Energie geht bei Stößen ans Gitter, der Widerstand wird warm.
```

```aufgabe
id: p13-mix-verfahren-netz
titel: "Welches Verfahren passt? Zusammenfassen oder Gleichungssystem"
niveau: 2
lernziel: 5
kompetenz: verstehen
angabe: |
  Für welche der beiden Schaltungen braucht man ein Gleichungssystem aus den Kirchhoffschen Regeln, weil Zusammenfassen nicht reicht? Rechnen musst du nicht.

  - **Schaltung A:** Eine Quelle speist $R_1$ in Reihe mit $R_2 \parallel R_3$.
  - **Schaltung B:** Zwei Quellen mit Vorwiderständen speisen gemeinsam eine Last, wie in der Aufgabe „Zwei Quellen speisen eine Last“.
teile:
  - typ: auswahl
    optionen:
      - "Nur für B. A lässt sich Schritt für Schritt zusammenfassen."
      - "Nur für A, weil dort drei Widerstände vorkommen."
      - "Für beide, denn Kirchhoff braucht man immer."
      - "Für keine, man kann immer zusammenfassen."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Die Zahl der Widerstände entscheidet nicht. In A liegt jeder Teil eindeutig in Reihe oder parallel. Dann genügt Zusammenfassen und Rückwärtsrechnen.
      - wert: 2
        meldung: |
          Kirchhoff steckt zwar in jeder Rechnung, aber in A braucht man kein Gleichungssystem. Die Reihen- und Parallelregeln reichen.
      - wert: 3
        meldung: |
          Bei zwei Quellen in verschiedenen Zweigen liegt kein Widerstand eindeutig in Reihe oder parallel zu einem anderen. Dort braucht man Knoten- und Maschengleichungen.
hinweise:
  - Kann man jeden Teil der Schaltung eindeutig als Reihe oder parallel erkennen?
  - Was ändert eine zweite Quelle in einem anderen Zweig?
loesung: |
  **Schaltung A:** Ein Parallelteil, dann eine Reihe. Man fasst zusammen und rechnet rückwärts.
  ---
  **Schaltung B:** Mit zwei Quellen in verschiedenen Zweigen gibt es keine reine Reihe oder Parallele mehr. Man stellt Knoten- und Maschengleichungen auf.
  ---
  Faustregel: Eine Quelle und erkennbare Reihen- und Parallelteile heißt zusammenfassen. Mehrere Quellen oder verschachtelte Brücken heißt Gleichungssystem.
```

```aufgabe
id: p13-mix-verfahren-leistung
titel: "Welches Verfahren passt? Die praktische Leistungsformel"
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  Du sollst vergleichen, welches von mehreren **parallel** an $230\,\text{V}$ hängenden Geräten mit bekanntem Widerstand die größte Leistung aufnimmt. Welche Form der Leistungsformel ist am praktischsten?
teile:
  - typ: auswahl
    optionen:
      - '$P = U^2/R$, weil an allen dieselbe Spannung liegt.'
      - '$P = I^2 R$, weil der Strom überall gleich ist.'
      - '$P = U\cdot I$, weil man sonst nichts rechnen kann.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Gleicher Strom gilt in der **Reihenschaltung**. Parallel ist die Spannung gleich, die Ströme sind verschieden.
      - wert: 2
        meldung: |
          $U\cdot I$ ginge auch, aber dafür müsstest du zuerst jeden Strom einzeln ausrechnen. $U^2/R$ liefert die Antwort direkt.
hinweise:
  - Welche Größe ist in der Parallelschaltung für alle Geräte gleich?
loesung: |
  **Ansatz:** Parallel liegt an allen Geräten dieselbe Spannung $230\,\text{V}$.
  ---
  Mit $P = U^2/R$ sieht man sofort: Das Gerät mit dem **kleinsten** Widerstand nimmt die größte Leistung auf.
```

```aufgabe
id: p13-mix-motor-heben
titel: Ein Elektromotor hebt eine Last
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Ein Elektromotor an $230\,\text{V}$ nimmt $2{,}0\,\text{A}$ auf. Er hebt in $20\,\text{s}$ eine Last von $50\,\text{kg}$ um $12\,\text{m}$ ($g = 9{,}81\,\text{m/s}^2$).

  a) Welche elektrische Energie nimmt er in dieser Zeit auf (in J)?

  b) Wie groß ist sein Wirkungsgrad (in Prozent)?

  Herkunft: [Kapitel 4, Leistung und Wirkungsgrad](/lernen/physik1/arbeit-energie-impuls/leistung-und-wirkungsgrad)
teile:
  - typ: zahl
    label: a) W_el in J
    loesung: "230*2.0*20"
    einheit: "J"
    anzeige: '9200'
    fehler:
      - wert: "230*2.0"
        meldung: |
          Das ist die Leistung in Watt. Für die Energie musst du noch mit der Zeit $20\,\text{s}$ multiplizieren.
  - typ: zahl
    label: b) η in %
    loesung: "50*9.81*12/(230*2.0*20)*100"
    einheit: "%"
    anzeige: '64'
    fehler:
      - wert: "50*12/(230*2.0*20)*100"
        meldung: |
          Die Hubarbeit ist $m\,g\,h$. Der Faktor $g = 9{,}81\,\text{m/s}^2$ fehlt.
hinweise:
  - 'Elektrische Energie $W = U\,I\,t$, Hubarbeit $W = m\,g\,h$.'
  - 'Wirkungsgrad: Nutzen durch Aufwand.'
loesung: |
  **a)** $W_{\text{el}} = U\,I\,t = 230\,\text{V}\cdot 2{,}0\,\text{A}\cdot 20\,\text{s} = 9200\,\text{J}$.
  ---
  **Nutzen:** Die Hubarbeit ist $W = m\,g\,h = 50\,\text{kg}\cdot 9{,}81\,\tfrac{\text{m}}{\text{s}^2}\cdot 12\,\text{m} = 5886\,\text{J}$.
  ---
  **b)** $\eta = \dfrac{5886\,\text{J}}{9200\,\text{J}} = 0{,}64 = 64\,\%$. Der Rest wird zu Wärme in den Wicklungen und durch Reibung.
```

```aufgabe
id: p13-mix-tauchsieder
titel: Ein Tauchsieder erhitzt Wasser
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Ein Tauchsieder mit $500\,\text{W}$ erhitzt $0{,}25\,\text{kg}$ Wasser von $20\,^\circ\text{C}$ auf $100\,^\circ\text{C}$ ($c = 4186\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}$). Nimm an, dass keine Wärme verloren geht. Wie lange dauert das (in s)?

  Herkunft: [Kapitel 10, Spezifische Wärmekapazität](/lernen/physik1/temperatur-waerme-gase/spezifische-waermekapazitaet)
teile:
  - typ: zahl
    loesung: "4186*0.25*80/500"
    einheit: "s"
    anzeige: '167'
    fehler:
      - wert: "4186*0.25*100/500"
        meldung: |
          Das Wasser wird nicht von $0$, sondern von $20\,^\circ\text{C}$ an erwärmt. Die Temperaturänderung ist $80\,\text{K}$.
      - wert: "4186*0.25*80*500"
        meldung: |
          Zeit ist Energie **durch** Leistung: $t = Q/P$.
hinweise:
  - 'Wärme $Q = c\,m\,\Delta\vartheta$.'
  - 'Ohne Verluste gilt $P\cdot t = Q$, also $t = Q/P$.'
loesung: |
  **Ansatz:** Die elektrische Energie $P\cdot t$ wird vollständig zur Wärme $Q = c\,m\,\Delta\vartheta$.
  ---
  **Wärme:** $Q = 4186\,\tfrac{\text{J}}{\text{kg}\cdot\text{K}}\cdot 0{,}25\,\text{kg}\cdot 80\,\text{K} = 83\,720\,\text{J}$.
  ---
  **Zeit:** $t = \dfrac{83\,720\,\text{J}}{500\,\text{W}} = 167\,\text{s}$, also knapp drei Minuten.
```

```aufgabe
id: p13-mix-rc
titel: Laden eines Kondensators über einen Widerstand
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Ein ungeladener Kondensator mit $470\,\mu\text{F}$ wird über einen Widerstand von $10\,\text{k}\Omega$ an $9{,}0\,\text{V}$ gelegt.

  a) Wie groß ist der Strom im ersten Augenblick (in mA)?

  b) Wie groß ist die Zeitkonstante $\tau = R\,C$ (in s)?

  Herkunft: [Kapitel 12, Energie im Kondensator, Schaltungen, Laden und Entladen](/lernen/physik1/elektrostatik/energie-im-kondensator-schaltungen-laden-und-entladen)
teile:
  - typ: zahl
    label: a) I₀ in mA
    loesung: "9.0/10000*1000"
    einheit: "mA"
    anzeige: '0{,}90'
    fehler:
      - wert: "0"
        meldung: |
          Im ersten Augenblick ist der Kondensator noch leer, an ihm liegt keine Spannung. Die ganzen $9{,}0\,\text{V}$ liegen am Widerstand, und es fließt der größte Strom.
  - typ: zahl
    label: b) τ in s
    loesung: "10000*470e-6"
    einheit: "s"
    anzeige: '4{,}7'
    fehler:
      - wert: "10*470"
        meldung: |
          Rechne in SI-Einheiten: $R = 10\,000\,\Omega$ und $C = 470\cdot 10^{-6}\,\text{F}$. Dann kommt $\tau$ in Sekunden heraus.
hinweise:
  - Ein leerer Kondensator hat noch keine Spannung. Wo liegt dann die ganze Spannung?
  - '$\tau = R\cdot C$ mit $\Omega\cdot\text{F} = \text{s}$.'
loesung: |
  **a)** Der leere Kondensator hat die Spannung null. Nach der Maschenregel liegen alle $9{,}0\,\text{V}$ am Widerstand: $I_0 = \dfrac{9{,}0\,\text{V}}{10\,000\,\Omega} = 0{,}90\,\text{mA}$.
  ---
  **b)** $\tau = R\,C = 10\,000\,\Omega\cdot 470\cdot 10^{-6}\,\text{F} = 4{,}7\,\text{s}$.
  ---
  **Deutung:** Nach etwa $5\tau \approx 24\,\text{s}$ ist der Kondensator praktisch voll. Dann fließt kein Strom mehr, und am Widerstand liegt keine Spannung.
```

```aufgabe
id: p13-mix-drahtfeld
titel: Das elektrische Feld in einem Draht
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Ein $2{,}0\,\text{m}$ langer, gleichmäßiger Konstantandraht liegt an $3{,}0\,\text{V}$. Nimm das Feld im Draht als homogen an.

  a) Wie groß ist die elektrische Feldstärke im Draht (in V/m)?

  b) Wie groß ist die Kraft auf ein Leitungselektron (gib die Zahl vor $10^{-19}\,\text{N}$ an)?

  Herkunft: [Kapitel 12, Feldstärke, Spannung und Potential im homogenen Feld](/lernen/physik1/elektrostatik/feldstaerke-spannung-und-potential-im-homogenen-feld)
teile:
  - typ: zahl
    label: a) E in V/m
    loesung: "3.0/2.0"
    einheit: "V/m"
    anzeige: '1{,}5'
    fehler:
      - wert: "3.0*2.0"
        meldung: |
          Im homogenen Feld gilt $U = E\cdot d$, also $E = U/d$. Feldstärke ist Spannung **pro** Meter.
  - typ: zahl
    label: b) F in 10⁻¹⁹ N
    loesung: "1.602e-19*1.5/1e-19"
    anzeige: '2{,}40'
    fehler:
      - wert: "1.602e-19*3.0/1e-19"
        meldung: |
          Die Kraft ist $F = e\cdot E$, mit der **Feldstärke**, nicht mit der Spannung.
hinweise:
  - 'Im homogenen Feld $E = U/d$.'
  - 'Kraft auf eine Ladung: $F = q\cdot E$ mit $q = e$.'
loesung: |
  **Ansatz:** Im Draht fällt das Potential gleichmäßig ab. Das Feld ist homogen, also $E = U/d$.
  ---
  **a)** $E = \dfrac{3{,}0\,\text{V}}{2{,}0\,\text{m}} = 1{,}5\,\text{V/m}$. Im Draht herrscht also ein Feld, und genau das schiebt die Elektronen an.
  ---
  **b)** $F = e\,E = 1{,}602\cdot 10^{-19}\,\text{C}\cdot 1{,}5\,\tfrac{\text{N}}{\text{C}} = 2{,}40\cdot 10^{-19}\,\text{N}$.
```

```aufgabe
id: p13-mix-einheit-ohm
titel: Das Ohm in SI-Basiseinheiten
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  Welche Darstellung des Ohm in SI-Basiseinheiten ist richtig?

  Herkunft: [Kapitel 1, Physikalische Größen und das SI](/lernen/physik1/groessen-einheiten-messen/physikalische-groessen-und-das-si)
teile:
  - typ: auswahl
    optionen:
      - '$1\,\Omega = 1\,\dfrac{\text{kg}\cdot\text{m}^2}{\text{s}^3\cdot\text{A}^2}$'
      - '$1\,\Omega = 1\,\dfrac{\text{kg}\cdot\text{m}^2}{\text{s}^2\cdot\text{A}}$'
      - '$1\,\Omega = 1\,\dfrac{\text{V}}{\text{A}}$, und das Volt ist selbst eine Basiseinheit.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Das ist $\text{J}/\text{A}$, also keine Einheit des Widerstands. Ein Volt ist ein Joule pro Coulomb, $\text{J}/(\text{A}\cdot\text{s})$, und ein Ohm ist ein Volt pro Ampere.
      - wert: 2
        meldung: |
          Das Volt ist keine Basiseinheit. Die sieben Basiseinheiten sind m, kg, s, A, K, mol und cd. Das Volt lässt sich aus ihnen zusammensetzen.
hinweise:
  - '$1\,\Omega = 1\,\text{V/A}$ und $1\,\text{V} = 1\,\text{J/C} = 1\,\text{J}/(\text{A}\cdot\text{s})$.'
  - '$1\,\text{J} = 1\,\text{kg}\cdot\text{m}^2/\text{s}^2$.'
loesung: |
  **Ansatz:** Wir zerlegen schrittweise: $1\,\Omega = 1\,\text{V}/\text{A}$ und $1\,\text{V} = 1\,\text{J}/\text{C} = 1\,\dfrac{\text{J}}{\text{A}\cdot\text{s}}$.
  ---
  Mit $1\,\text{J} = 1\,\dfrac{\text{kg}\cdot\text{m}^2}{\text{s}^2}$ wird $1\,\text{V} = 1\,\dfrac{\text{kg}\cdot\text{m}^2}{\text{s}^3\cdot\text{A}}$.
  ---
  Geteilt durch $\text{A}$: $1\,\Omega = 1\,\dfrac{\text{kg}\cdot\text{m}^2}{\text{s}^3\cdot\text{A}^2}$.
```

```aufgabe
id: p13-mix-fermi-elektronen
titel: "Abschätzung: Elektronen im Wasserkocherkabel"
niveau: 3
lernziel: 0
kompetenz: modellieren
angabe: |
  Ein Wasserkocher mit $2{,}0\,\text{kW}$ hängt an $230\,\text{V}$. Seine Zuleitung hat Kupferadern mit $1{,}5\,\text{mm}^2$ Querschnitt ($n = 8{,}5\cdot 10^{28}\,\text{m}^{-3}$).

  a) Wie viele Elektronen fließen pro Sekunde durch einen Querschnitt der Leitung? Gib die Zahl vor $10^{19}$ an.

  b) Wie groß ist ihre Driftgeschwindigkeit (in mm/s)?

  c) Vergleiche: Ein Fußgänger geht etwa $1{,}4\,\text{m/s}$. Wievielmal schneller ist er als die Elektronen? Gib das Ergebnis in Tausend an.
teile:
  - typ: zahl
    label: a) Zahl vor 10¹⁹
    loesung: "2000/230/1.602e-19/1e19"
    anzeige: '5{,}43'
  - typ: zahl
    label: b) v in mm/s
    loesung: "2000/230/(8.5e28*1.602e-19*1.5e-6)*1000"
    einheit: "mm/s"
    anzeige: '0{,}426'
  - typ: zahl
    label: c) Faktor in Tausend
    loesung: "1.4/(2000/230/(8.5e28*1.602e-19*1.5e-6))/1000"
    toleranz: 0.1
    anzeige: '3{,}3'
hinweise:
  - 'Strom aus $P = U\cdot I$. Elektronen pro Sekunde: $I/e$.'
  - '$v = I/(n\,e\,A)$ mit $A$ in m².'
loesung: |
  **a) Ansatz:** $I = \dfrac{P}{U} = \dfrac{2000\,\text{W}}{230\,\text{V}} = 8{,}70\,\text{A}$. Pro Sekunde fließen $\dfrac{8{,}70\,\text{C/s}}{1{,}602\cdot 10^{-19}\,\text{C}} = 5{,}43\cdot 10^{19}$ Elektronen.
  ---
  **b)** $v = \dfrac{I}{n\,e\,A} = \dfrac{8{,}70\,\text{A}}{8{,}5\cdot 10^{28}\,\text{m}^{-3}\cdot 1{,}602\cdot 10^{-19}\,\text{C}\cdot 1{,}5\cdot 10^{-6}\,\text{m}^2} = 4{,}26\cdot 10^{-4}\,\text{m/s} = 0{,}426\,\text{mm/s}$.
  ---
  **c)** $\dfrac{1{,}4\,\text{m/s}}{4{,}26\cdot 10^{-4}\,\text{m/s}} \approx 3300$. Ein Fußgänger ist gut dreitausendmal schneller als die Elektronen im Kabel. Die riesige Zahl der Elektronen macht den großen Strom möglich, nicht ihre Geschwindigkeit.
```

```aufgabe
id: p13-mix-gemischt-quelle
titel: Gemischte Schaltung an einer realen Quelle
niveau: 3
lernziel: 5
kompetenz: rechnen
angabe: |
  Eine Batterie mit $U_0 = 12\,\text{V}$ und $R_i = 1{,}0\,\Omega$ speist $R_1 = 3{,}0\,\Omega$ in Reihe mit der Parallelschaltung aus $R_2 = 6{,}0\,\Omega$ und $R_3 = 12\,\Omega$.

  a) Welcher Strom fließt aus der Batterie (in A)?

  b) Wie groß ist die Klemmenspannung (in V)?

  c) Welche Leistung setzt $R_3$ um (in W)?
teile:
  - typ: zahl
    label: a) I in A
    loesung: "12/(1.0+3.0+6*12/18)"
    einheit: "A"
    anzeige: '1{,}5'
  - typ: zahl
    label: b) U_K in V
    loesung: "12-1.0*1.5"
    einheit: "V"
    anzeige: '10{,}5'
  - typ: zahl
    label: c) P₃ in W
    loesung: "(1.5*4)^2/12"
    einheit: "W"
    anzeige: '3{,}0'
hinweise:
  - 'Der Innenwiderstand liegt in Reihe mit der ganzen äußeren Schaltung. Fasse zuerst $R_2 \parallel R_3$ zusammen.'
  - 'Für c) brauchst du die Spannung am Parallelteil. Dann $P_3 = U_{23}^2/R_3$.'
loesung: |
  **a) Hinweg:** $R_{23} = \dfrac{6{,}0\cdot 12}{18}\,\Omega = 4{,}0\,\Omega$. In Reihe mit $R_1$ und $R_i$: $R_{\text{ges}} = 1{,}0 + 3{,}0 + 4{,}0 = 8{,}0\,\Omega$. Also $I = \dfrac{12\,\text{V}}{8{,}0\,\Omega} = 1{,}5\,\text{A}$.
  ---
  **b)** $U_K = U_0 - R_i I = 12\,\text{V} - 1{,}0\,\Omega\cdot 1{,}5\,\text{A} = 10{,}5\,\text{V}$.
  ---
  **c) Rückweg:** $U_{23} = 1{,}5\,\text{A}\cdot 4{,}0\,\Omega = 6{,}0\,\text{V}$. Parallel liegt an $R_3$ dieselbe Spannung: $P_3 = \dfrac{(6{,}0\,\text{V})^2}{12\,\Omega} = 3{,}0\,\text{W}$.
  ---
  **Probe:** $U_1 = 4{,}5\,\text{V}$, und $4{,}5\,\text{V} + 6{,}0\,\text{V} = 10{,}5\,\text{V} = U_K$.
```

## Prüfungsaufgaben

Rechne die folgenden Aufgaben wie in der Prüfung: ohne Unterbrechung, mit Taschenrechner und mit sauber
dokumentiertem Lösungsweg. Bewährt hat sich diese Reihenfolge: Skizze mit Knoten und Strompfeilen, dann
Ersatzwiderstand, dann rückwärts zu den Teilgrößen, am Ende eine Probe mit Knotenregel und Maschenregel.
Der Zeitrichtwert steht bei jeder Aufgabe.

```aufgabe
id: p13-pruefung-netzwerk
titel: Ein Widerstandsnetzwerk
niveau: 3
lernziel: 5
kompetenz: rechnen
punkte: 10
quelle: "eigene Aufgabe im SBP-Format"
angabe: |
  *Zeitrichtwert: 15 Minuten.*

  $R_1 = 12\,\Omega$ liegt in Reihe mit der Parallelschaltung aus $R_2 = 30\,\Omega$ und $R_3 = 20\,\Omega$. Die Schaltung liegt an einer idealen Quelle mit $36\,\text{V}$.

  a) Berechne den Ersatzwiderstand (in Ω).

  b) Berechne den Gesamtstrom (in A) und die Spannung an $R_1$ (in V).

  c) Berechne die Ströme durch $R_2$ und $R_3$ (in A).

  d) Berechne die Gesamtleistung und die Leistung an $R_3$ (in W).
teile:
  - typ: zahl
    label: a) R in Ω
    loesung: "12+30*20/(30+20)"
    einheit: "Ω"
    anzeige: '24'
  - typ: zahl
    label: b) I in A
    loesung: "36/24"
    einheit: "A"
    anzeige: '1{,}5'
  - typ: zahl
    label: b) U₁ in V
    loesung: "12*36/24"
    einheit: "V"
    anzeige: '18'
  - typ: zahl
    label: c) I₂ in A
    loesung: "(36-18)/30"
    einheit: "A"
    anzeige: '0{,}60'
  - typ: zahl
    label: c) I₃ in A
    loesung: "(36-18)/20"
    einheit: "A"
    anzeige: '0{,}90'
  - typ: zahl
    label: d) P gesamt in W
    loesung: "36*1.5"
    einheit: "W"
    anzeige: '54'
  - typ: zahl
    label: d) P₃ in W
    loesung: "18^2/20"
    einheit: "W"
    anzeige: '16{,}2'
hinweise:
  - '$R_{23} = \dfrac{30\cdot 20}{50}\,\Omega$.'
  - 'Am Parallelteil liegt $36\,\text{V} - U_1$. Für die Leistungen: $P = U\,I$ oder $P = U^2/R$.'
loesung: |
  **a)** $R_{23} = \dfrac{30\cdot 20}{30 + 20}\,\Omega = 12\,\Omega$, also $R_{\text{ges}} = 12\,\Omega + 12\,\Omega = 24\,\Omega$.
  ---
  **b)** $I = \dfrac{36\,\text{V}}{24\,\Omega} = 1{,}5\,\text{A}$ und $U_1 = 12\,\Omega\cdot 1{,}5\,\text{A} = 18\,\text{V}$.
  ---
  **c)** Am Parallelteil: $U_{23} = 36\,\text{V} - 18\,\text{V} = 18\,\text{V}$. Also $I_2 = \dfrac{18\,\text{V}}{30\,\Omega} = 0{,}60\,\text{A}$ und $I_3 = \dfrac{18\,\text{V}}{20\,\Omega} = 0{,}90\,\text{A}$. Probe: $0{,}60 + 0{,}90 = 1{,}5\,\text{A}$.
  ---
  **d)** $P = U\,I = 36\,\text{V}\cdot 1{,}5\,\text{A} = 54\,\text{W}$ und $P_3 = \dfrac{(18\,\text{V})^2}{20\,\Omega} = 16{,}2\,\text{W}$. Probe: $P_1 = 27\,\text{W}$, $P_2 = 10{,}8\,\text{W}$, Summe $27 + 10{,}8 + 16{,}2 = 54\,\text{W}$.
```

```aufgabe
id: p13-pruefung-haushalt
titel: Fliegt die Sicherung?
niveau: 3
lernziel: 6
kompetenz: anwenden
punkte: 8
quelle: "eigene Aufgabe im SBP-Format"
angabe: |
  *Zeitrichtwert: 10 Minuten.*

  In einer Küche hängen an einem mit $16\,\text{A}$ abgesicherten $230$-V-Stromkreis ein Wasserkocher ($2000\,\text{W}$), ein Toaster ($900\,\text{W}$) und eine Mikrowelle ($1200\,\text{W}$).

  a) Welcher Gesamtstrom fließt, wenn alle drei Geräte laufen (in A)?

  b) Löst die Sicherung aus?

  c) Der Wasserkocher läuft allein $4$ Minuten. Was kostet das bei $0{,}30$ Euro pro kWh (in Cent)?

  d) Begründe, warum die Geräte parallel und nicht in Reihe geschaltet sind.
teile:
  - typ: zahl
    label: a) I in A
    loesung: "(2000+900+1200)/230"
    einheit: "A"
    anzeige: '17{,}8'
  - typ: auswahl
    label: b)
    optionen:
      - "Ja, denn der Strom ist größer als 16 A."
      - "Nein, denn jedes Gerät einzeln bleibt unter 16 A."
    richtig: [0]
  - typ: zahl
    label: c) Kosten in Cent
    loesung: "2*4/60*0.30*100"
    einheit: "Cent"
    anzeige: '4{,}0'
  - typ: text
    label: d)
    muster: |
      Parallel liegt jedes Gerät an der vollen Netzspannung von 230 V, für die es gebaut ist. Jedes lässt sich einzeln ein- und ausschalten, und fällt eines aus, laufen die anderen weiter. In Reihe würden sich die 230 V auf alle Geräte aufteilen, keines bekäme seine Nennspannung, und ein offener Schalter würde alle abschalten.
hinweise:
  - Parallel addieren sich die Leistungen und die Ströme.
  - 'Für c): $W = P\cdot t$ mit $t$ in Stunden.'
loesung: |
  **a)** Die Geräte liegen parallel an $230\,\text{V}$. Die Leistungen addieren sich: $P = 4100\,\text{W}$, also $I = \dfrac{4100\,\text{W}}{230\,\text{V}} = 17{,}8\,\text{A}$.
  ---
  **b)** $17{,}8\,\text{A} > 16\,\text{A}$: Die Sicherung löst aus. Ein Leitungsschutzschalter, die heute übliche Sicherung zum Wiedereinschalten, tut das bei dieser kleinen Überlast erst nach einiger Zeit.
  ---
  **c)** $W = 2{,}0\,\text{kW}\cdot\tfrac{4}{60}\,\text{h} = 0{,}133\,\text{kWh}$, Kosten $0{,}133\,\text{kWh}\cdot 30\,\tfrac{\text{Cent}}{\text{kWh}} = 4{,}0$ Cent.
  ---
  **d)** Parallel bekommt jedes Gerät die volle Netzspannung und lässt sich unabhängig schalten. In Reihe teilten sich die Geräte die Spannung, und ein Defekt schaltete alle ab.
```

```aufgabe
id: p13-pruefung-kabel
titel: Die Kabeltrommel
niveau: 3
lernziel: 3
kompetenz: modellieren
punkte: 8
quelle: "eigene Aufgabe im SBP-Format"
angabe: |
  *Zeitrichtwert: 12 Minuten.*

  An einer $20\,\text{m}$ langen Kabeltrommel mit zwei Kupferadern ($\rho = 1{,}7\cdot 10^{-8}\,\Omega\,\text{m}$, je $1{,}5\,\text{mm}^2$) hängt ein Heizlüfter mit $2000\,\text{W}$ an $230\,\text{V}$. Rechne mit dem Strom, der sich aus den Nenndaten ergibt.

  a) Wie groß ist der Widerstand des Kabels, Hin- und Rückleiter zusammen (in Ω)?

  b) Wie viel Spannung fällt am Kabel ab (in V)?

  c) Welche Leistung wird im Kabel in Wärme umgesetzt (in W)?

  d) Warum soll man eine Kabeltrommel bei großer Last ganz abwickeln?
teile:
  - typ: zahl
    label: a) R in Ω
    loesung: "1.7e-8*40/1.5e-6"
    einheit: "Ω"
    anzeige: '0{,}453'
  - typ: zahl
    label: b) Spannungsabfall in V
    loesung: "2000/230*1.7e-8*40/1.5e-6"
    einheit: "V"
    anzeige: '3{,}94'
  - typ: zahl
    label: c) Verlustleistung in W
    loesung: "(2000/230)^2*1.7e-8*40/1.5e-6"
    einheit: "W"
    anzeige: '34{,}3'
  - typ: text
    label: d)
    muster: |
      Die Verlustwärme von rund 34 W entsteht im ganzen Kabel. Aufgewickelt liegen die Windungen dicht aufeinander und können die Wärme kaum an die Luft abgeben. Das Kabel in der Trommel heizt sich immer weiter auf, die Isolierung kann schmelzen und einen Brand auslösen. Abgewickelt verteilt sich die Wärme auf 20 m Kabel an der Luft.
hinweise:
  - Der Strom fließt durch beide Adern, die gesamte Leiterlänge ist $40\,\text{m}$.
  - 'Strom $I = P/U$, dann $\Delta U = R\,I$ und $P_V = I^2 R$.'
loesung: |
  **a)** Hin und zurück sind es $40\,\text{m}$ Leiter: $R = \rho\dfrac{l}{A} = 1{,}7\cdot 10^{-8}\,\Omega\,\text{m}\cdot\dfrac{40\,\text{m}}{1{,}5\cdot 10^{-6}\,\text{m}^2} = 0{,}453\,\Omega$.
  ---
  **b)** $I = \dfrac{2000\,\text{W}}{230\,\text{V}} = 8{,}70\,\text{A}$, also $\Delta U = R\,I = 0{,}453\,\Omega\cdot 8{,}70\,\text{A} = 3{,}94\,\text{V}$.
  ---
  **c)** $P_V = I^2 R = (8{,}70\,\text{A})^2\cdot 0{,}453\,\Omega = 34{,}3\,\text{W}$. Das ist so viel wie eine kleine Lötstation.
  ---
  **d)** Aufgewickelt kann das Kabel diese Wärme kaum abgeben. Es heizt sich auf, die Isolierung kann schmelzen. Abgewickelt verteilt sich die Wärme an der Luft.
```

```aufgabe
id: p13-pruefung-ebike
titel: Der Akku eines E-Bikes
niveau: 3
lernziel: 7
kompetenz: modellieren
punkte: 10
quelle: "eigene Aufgabe im SBP-Format"
angabe: |
  *Zeitrichtwert: 15 Minuten.*

  Ein E-Bike-Akku hat die Quellenspannung $36\,\text{V}$, den Innenwiderstand $0{,}15\,\Omega$ und die Aufschrift $13\,\text{Ah}$. Beim Bergauffahren zieht der Motor $12\,\text{A}$.

  a) Wie groß ist dabei die Klemmenspannung (in V)?

  b) Welche Leistung nimmt der Motor auf (in W)?

  c) Welche Leistung wird im Akku selbst in Wärme umgesetzt (in W)?

  d) Wie lange könnte man mit diesem Strom fahren, bis der Akku leer ist (in h)?

  e) Welche Energie speichert der Akku ungefähr (in Wh)?
teile:
  - typ: zahl
    label: a) U_K in V
    loesung: "36-0.15*12"
    einheit: "V"
    anzeige: '34{,}2'
  - typ: zahl
    label: b) P_Motor in W
    loesung: "(36-0.15*12)*12"
    einheit: "W"
    anzeige: '410'
  - typ: zahl
    label: c) P im Akku in W
    loesung: "12^2*0.15"
    einheit: "W"
    anzeige: '21{,}6'
  - typ: zahl
    label: d) t in h
    loesung: "13/12"
    einheit: "h"
    anzeige: '1{,}08'
  - typ: zahl
    label: e) W in Wh
    loesung: "36*13"
    einheit: "Wh"
    anzeige: '468'
hinweise:
  - '$U_K = U_0 - R_i I$. Der Motor bekommt die Klemmenspannung.'
  - 'Im Akku wird $I^2 R_i$ verheizt. Amperestunden sind eine Ladung, $t = Q/I$.'
loesung: |
  **a)** $U_K = U_0 - R_i I = 36\,\text{V} - 0{,}15\,\Omega\cdot 12\,\text{A} = 34{,}2\,\text{V}$.
  ---
  **b)** Der Motor liegt an den Klemmen: $P = U_K\,I = 34{,}2\,\text{V}\cdot 12\,\text{A} = 410\,\text{W}$.
  ---
  **c)** Im Innenwiderstand: $P = I^2 R_i = (12\,\text{A})^2\cdot 0{,}15\,\Omega = 21{,}6\,\text{W}$. Probe: $410{,}4\,\text{W} + 21{,}6\,\text{W} = 432\,\text{W} = U_0\cdot I$.
  ---
  **d)** $13\,\text{Ah}$ ist eine Ladung. Bei $12\,\text{A}$: $t = \dfrac{13\,\text{Ah}}{12\,\text{A}} = 1{,}08\,\text{h}$, gut eine Stunde.
  ---
  **e)** $W \approx U_0\cdot Q = 36\,\text{V}\cdot 13\,\text{Ah} = 468\,\text{Wh}$. Ein Teil davon geht unter Last im Innenwiderstand verloren.
```

```aufgabe
id: p13-pruefung-messung
titel: Einen Widerstand messen
niveau: 3
lernziel: 8
kompetenz: anwenden
punkte: 9
quelle: "eigene Aufgabe im SBP-Format"
angabe: |
  *Zeitrichtwert: 12 Minuten.*

  Ein Drehspulinstrument hat den Innenwiderstand $200\,\Omega$ und Vollausschlag bei $0{,}50\,\text{mA}$.

  a) Wie groß muss ein Vorwiderstand sein, damit das Instrument als Spannungsmesser bis $5{,}0\,\text{V}$ misst (in Ω)?

  b) Mit einem Multimeter misst man an einem unbekannten Widerstand $2{,}40\,\text{V}$ bei $12{,}0\,\text{mA}$. Wie groß ist der Widerstand (in Ω)?

  c) Das Multimeter hat im Spannungsbereich die Genauigkeit $\pm(1\,\% + 2\,\text{Digits})$, die letzte Stelle sind Hundertstel Volt. Wie groß ist die Unsicherheit der Spannungsmessung (in V)?

  d) Warum muss der Spannungsmesser einen sehr großen Innenwiderstand haben?
teile:
  - typ: zahl
    label: a) R_V in Ω
    loesung: "5.0/0.50e-3-200"
    einheit: "Ω"
    anzeige: '9800'
  - typ: zahl
    label: b) R in Ω
    loesung: "2.40/0.0120"
    einheit: "Ω"
    anzeige: '200'
  - typ: zahl
    label: c) ΔU in V
    loesung: "0.01*2.40+2*0.01"
    toleranz: 0.002
    einheit: "V"
    anzeige: '0{,}044'
  - typ: text
    label: d)
    muster: |
      Der Spannungsmesser wird parallel zum Bauteil angeschlossen. Jeder Strom, der durch ihn fließt, verändert die Schaltung: Er belastet die Quelle oder einen Spannungsteiler und zieht die Spannung, die er messen soll, herunter. Nur wenn sein Innenwiderstand viel größer ist als die Widerstände im Messkreis, fließt durch ihn fast kein Strom und die Messung bleibt unverfälscht.
hinweise:
  - 'Bei $5{,}0\,\text{V}$ soll genau $0{,}50\,\text{mA}$ fließen. Vom Gesamtwiderstand zieht man $R_i$ ab.'
  - 'Unsicherheit: $1\,\%$ vom Messwert plus $2\cdot 0{,}01\,\text{V}$.'
loesung: |
  **a)** Gesamtwiderstand $\dfrac{5{,}0\,\text{V}}{0{,}50\cdot 10^{-3}\,\text{A}} = 10\,000\,\Omega$. Abzüglich des Instruments: $R_V = 9800\,\Omega$.
  ---
  **b)** $R = \dfrac{U}{I} = \dfrac{2{,}40\,\text{V}}{0{,}0120\,\text{A}} = 200\,\Omega$.
  ---
  **c)** $1\,\%$ von $2{,}40\,\text{V}$ sind $0{,}024\,\text{V}$, zwei Digits sind $0{,}02\,\text{V}$. Zusammen $\Delta U = 0{,}044\,\text{V}$, also $U = (2{,}40 \pm 0{,}04)\,\text{V}$. Das sind knapp $2\,\%$.
  ---
  **d)** Der Spannungsmesser liegt parallel zum Bauteil. Zweigt er Strom ab, verändert er die Schaltung und zieht die Spannung herunter. Nur bei sehr großem Innenwiderstand bleibt dieser Einfluss vernachlässigbar.
```

```aufgabe
id: p13-pruefung-led
titel: Eine LED-Leiste für ein Regal
niveau: 3
lernziel: 9
kompetenz: modellieren
punkte: 8
quelle: "eigene Aufgabe im SBP-Format"
angabe: |
  *Zeitrichtwert: 12 Minuten.*

  Drei weiße LEDs mit je $3{,}1\,\text{V}$ Durchlassspannung sollen in Reihe an einem $12$-V-Netzteil mit $20\,\text{mA}$ leuchten.

  a) Wie groß muss der Vorwiderstand sein (in Ω)?

  b) Welche Leistung nehmen die drei LEDs zusammen auf (in mW)?

  c) Welcher Anteil der aufgenommenen Leistung geht an die LEDs (in Prozent)?

  d) Warum leuchtet die Leiste nicht, wenn man das Netzteil verkehrt herum anschließt?
teile:
  - typ: zahl
    label: a) R in Ω
    loesung: "(12-3*3.1)/0.020"
    einheit: "Ω"
    anzeige: '135'
  - typ: zahl
    label: b) P der LEDs in mW
    loesung: "3*3.1*0.020*1000"
    einheit: "mW"
    anzeige: '186'
  - typ: zahl
    label: c) Anteil in %
    loesung: "3*3.1/12*100"
    einheit: "%"
    anzeige: '77{,}5'
  - typ: text
    label: d)
    muster: |
      LEDs sind Dioden. Bei verkehrter Polung liegt an jeder LED Plus an der n-Seite und Minus an der p-Seite, sie ist in Sperrrichtung geschaltet. Die Sperrschicht wird breiter, es fließt praktisch kein Strom, also leuchtet keine LED.
hinweise:
  - In Reihe addieren sich die Durchlassspannungen der LEDs. Den Rest übernimmt der Vorwiderstand.
  - 'Durch alle Bauteile fließt derselbe Strom. Der Anteil der LEDs ist ihre Spannung im Verhältnis zur Gesamtspannung.'
loesung: |
  **a)** An den LEDs fallen $3\cdot 3{,}1\,\text{V} = 9{,}3\,\text{V}$ ab. Am Vorwiderstand bleiben $12\,\text{V} - 9{,}3\,\text{V} = 2{,}7\,\text{V}$, also $R = \dfrac{2{,}7\,\text{V}}{0{,}020\,\text{A}} = 135\,\Omega$.
  ---
  **b)** $P = 9{,}3\,\text{V}\cdot 0{,}020\,\text{A} = 0{,}186\,\text{W} = 186\,\text{mW}$. Im Vorwiderstand gehen $2{,}7\,\text{V}\cdot 0{,}020\,\text{A} = 54\,\text{mW}$ verloren.
  ---
  **c)** Weil durch alle derselbe Strom fließt, teilt sich die Leistung wie die Spannung: $\dfrac{9{,}3\,\text{V}}{12\,\text{V}} = 77{,}5\,\%$.
  ---
  **d)** Verkehrt gepolt sind alle LEDs in Sperrrichtung. Die Sperrschicht wird breiter, und es fließt praktisch kein Strom.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, ohne nachzusehen. Vergleiche dann mit der Zusammenfassung darunter.
antwort: |
  Zum Beispiel: (1) Strom ist Ladung pro Zeit, $I = Q/t$. Im geschlossenen Kreis wird er nicht verbraucht, umgewandelt wird nur Energie, pro Coulomb $U$ Joule. (2) Die Spannung ist eine Potentialdifferenz zwischen zwei Punkten. In der Reihenschaltung ist der Strom überall gleich und die Spannungen addieren sich, in der Parallelschaltung ist die Spannung gleich und die Ströme addieren sich. Beides folgt aus Knoten- und Maschenregel. (3) Die Leistung ist $P = U\,I$. Reale Quellen haben einen Innenwiderstand, deshalb sinkt die Klemmenspannung unter Last: $U_K = U_0 - R_i I$.
```

:::zusammenfassung
- **Strom:** $I = \Delta Q/\Delta t$, Einheit Ampere. Die Ladung ist die Fläche unter dem I-t-Diagramm. Die
  technische Stromrichtung läuft außen von Plus nach Minus, die Elektronen im Metall andersherum und sehr
  langsam ($I = n\,e\,A\,v$).
- **Stromkreis:** Strom fließt nur im geschlossenen Kreis und wird nicht verbraucht. Die Spannung ist die
  Potentialdifferenz zwischen zwei Punkten. Jedes Coulomb gibt in einem Bauteil $U$ Joule ab.
- **Widerstand:** $R = U/I$ ist die Definition. Das Ohmsche Gesetz sagt, dass $R$ konstant ist. Draht:
  $R = \rho\,l/A$. Metalle leiten warm schlechter, Halbleiter besser.
- **Kirchhoff:** Knotenregel aus der Ladungserhaltung, Maschenregel aus der Energieerhaltung. Reihe:
  $R = R_1 + R_2$, gleicher Strom. Parallel: $1/R = 1/R_1 + 1/R_2$, gleiche Spannung.
- **Gemischte Schaltungen:** von innen nach außen zusammenfassen, dann rückwärts rechnen. Spannungsteiler
  $U_2 = U\,R_2/(R_1 + R_2)$ gilt nur ohne Last. Die Brücke ist abgeglichen bei $R_1/R_2 = R_3/R_x$.
- **Leistung und Energie:** $P = U\,I = I^2 R = U^2/R$, $W = U\,I\,t$, $1\,\text{kWh} = 3{,}6\,\text{MJ}$. Wirkungsgrad
  $\eta = P_{\text{nutz}}/P_{\text{zu}}$.
- **Quellen und Messgeräte:** $U_K = U_0 - R_i I$, Kurzschlussstrom $U_0/R_i$, größte Leistung bei $R_a = R_i$
  mit $50\,\%$ Wirkungsgrad. Strommesser in Reihe mit kleinem, Spannungsmesser parallel mit großem
  Innenwiderstand.
- **Halbleiter:** Bändermodell mit Valenzband, Leitungsband und Lücke. Dotierung erzeugt n- und p-Leitung.
  Der pn-Übergang mit seiner Sperrschicht ist eine Diode. LED, Solarzelle und Transistor beruhen auf ihm.
:::

### Die häufigsten Fehler

Jeder Fehler wird von einer Aufgabe in diesem Kapitel gezielt trainiert. Wenn du einen davon bei dir
wiedererkennst, rechne die genannte Aufgabe noch einmal.

1. **„Der Strom wird in der Lampe verbraucht.“** Vor und hinter der Lampe fließt derselbe Strom.
   Training: „Strom vor und hinter der Lampe“ und „Begründe, dass der Strom nicht verbraucht wird“.
2. **Spannung an einem einzelnen Punkt oder zwischen zwei Punkten desselben Drahtes.** Spannung ist eine
   Potentialdifferenz. Training: „Potentiale an einer Taschenlampe“ und „Ein Potentialdiagramm lesen“.
3. **Minuten statt Sekunden oder statt Stunden eingesetzt.** Training: „Ladung und Elektronenzahl“ und „Wasserkocher“.
4. **Die Elektronen in technischer Stromrichtung bewegt.** Training: „Technische Stromrichtung und Elektronen“.
5. **Die Steigung einer Kennlinie mit dem Widerstand verwechselt.** Training: „Fehler finden im U-I-Diagramm“.
6. **Quadratmillimeter nicht umgerechnet oder den Durchmesser als Radius eingesetzt.** Training:
   „Widerstand einer Kupferleitung“ und „Heizdraht zuschneiden“.
7. **Parallele Widerstände addiert oder den Kehrwert vergessen.** Training: „Drei Widerstände parallel“ und
   „Welchen Widerstand parallel schalten?“.
8. **Am Parallelteil die volle Quellenspannung angenommen.** Training: „Ströme in einer gemischten Schaltung“.
9. **Halbe Spannung, halbe Leistung.** Die Leistung ist proportional zu $U^2$. Training: „Leistung bei halber Spannung“.
10. **„Die Batterie liefert einen festen Strom“ oder den Innenwiderstand vergessen.** Training: „Liefert eine
    Batterie einen festen Strom?“ und „Eine Monozelle unter Last“.
11. **Beim Nebenwiderstand den ganzen Strom angesetzt.** Training: „Strommessbereich erweitern“.
12. **„n-dotiert heißt negativ geladen.“** Training: „n oder p?“.
13. **Den Vorwiderstand einer LED mit der ganzen Spannung berechnet.** Training: „Vorwiderstand einer roten LED“.

### Lernziel-Selbstcheck

Schätze für jedes Lernziel ein, wie sicher du bist: **1** heißt „noch unsicher“, **2** „mit Nachsehen“,
**3** „sicher, auch in der Prüfung“. Bei einer 1 wiederhole die Lektion und rechne ihre Aufgabe auf Niveau 3.

1. Stromstärke aus Ladung und Zeit oder aus einem I-t-Diagramm berechnen, Stromrichtung und Driftgeschwindigkeit.
2. Begründen, warum Strom nicht verbraucht wird, und Potentiale im Stromkreis bestimmen.
3. Ohmsches Gesetz anwenden und Kennlinien auswerten.
4. Drahtwiderstand und Temperaturabhängigkeit berechnen.
5. Reihen- und Parallelschaltungen mit Knoten- und Maschenregel berechnen.
6. Gemischte Schaltungen, Spannungsteiler, Brücke und Netzwerke mit zwei Quellen berechnen.
7. Arbeit, Leistung, Kosten und Wirkungsgrad berechnen und Schutzmaßnahmen erklären.
8. Mit Quellenspannung, Klemmenspannung und Innenwiderstand rechnen, Leistungsanpassung begründen.
9. Messgeräte richtig einschalten, ihren Einfluss abschätzen und Messbereiche erweitern.
10. Leitungsmechanismen, Bändermodell, Dotierung, Diode, LED, Solarzelle und Transistor erklären.

## Mündliche Prüfung

```karten
- id: p13-k-strom
  frage: Was ist elektrischer Strom, und wie ist die Stromstärke definiert?
  antwort: |
    Strom ist Ladung, die sich gemeinsam in eine Richtung bewegt. Die Stromstärke ist die Ladung, die pro Zeit durch einen
    Leiterquerschnitt fließt, $I = \Delta Q/\Delta t$, mit der Einheit Ampere, $1\,\text{A} = 1\,\text{C/s}$. In Metallen
    bewegen sich die Leitungselektronen. Die technische Stromrichtung läuft außen von Plus nach Minus, die Elektronen
    bewegen sich entgegengesetzt.
  kernpunkte: ["bewegte Ladung", "I = ΔQ/Δt, 1 A = 1 C/s", "technische Richtung + nach −", "Elektronen entgegengesetzt"]
- id: p13-k-drift
  frage: Warum leuchtet eine Lampe sofort, obwohl die Elektronen im Draht nur Bruchteile eines Millimeters pro Sekunde zurücklegen?
  antwort: |
    Der ganze Stromkreis ist schon vor dem Einschalten voller freier Elektronen. Beim Einschalten breitet sich das elektrische
    Feld fast mit Lichtgeschwindigkeit aus und setzt alle Elektronen gleichzeitig in Bewegung, auch die im Glühdraht. Die
    Driftgeschwindigkeit folgt aus $I = n\,e\,A\,v$ und ist wegen der riesigen Elektronendichte sehr klein. Schnell ist das
    Signal, nicht die Ladungsträger.
  kernpunkte: ["Draht schon voller Elektronen", "Feld breitet sich fast mit c aus", "I = n·e·A·v", "Drift etwa 0,5 mm/s"]
- id: p13-k-verbraucht
  frage: Wird in einer Lampe Strom verbraucht? Was wird tatsächlich umgewandelt?
  antwort: |
    Nein. Wegen der Ladungserhaltung fließt aus der Lampe genauso viel Ladung heraus, wie hineinfließt. Der Strom ist vor und
    hinter der Lampe gleich. Umgewandelt wird Energie: Jedes Coulomb gibt beim Durchlaufen der Spannung $U$ die Energie $U$
    Joule ab, die zu Licht und Wärme wird. Man bezahlt deshalb Kilowattstunden, also Energie, nicht Ladung.
  kernpunkte: ["Ladungserhaltung", "Strom vor und hinter gleich", "Energie wird umgewandelt, W = Q·U", "Zähler misst kWh"]
- id: p13-k-potential
  frage: Was bedeutet es, dass die Spannung eine Potentialdifferenz ist? Erkläre es an einem Stromkreis und verbinde es mit der Elektrostatik.
  antwort: |
    Jeder Punkt eines Stromkreises hat ein Potential, die Energie pro Ladung, wie in der Elektrostatik. Die Spannung ist der
    Unterschied der Potentiale zweier Punkte. Die Quelle hebt das Potential an, im idealen Draht bleibt es gleich, in den
    Verbrauchern fällt es ab. Zwischen zwei Punkten desselben Drahtes liegt deshalb keine Spannung. Im Draht herrscht ein
    elektrisches Feld, das die Elektronen antreibt, mit $U = E\cdot d$ wie im Kondensator.
  kernpunkte: ["Potential = Energie pro Ladung an einem Ort", "Spannung zwischen zwei Punkten", "Quelle hebt, Verbraucher senkt", "Verbindung zu Kapitel 12"]
- id: p13-k-ohm
  frage: Was sagt das Ohmsche Gesetz, und warum ist eine Glühlampe kein ohmscher Leiter?
  antwort: |
    Der Widerstand ist definiert als $R = U/I$. Das Ohmsche Gesetz sagt zusätzlich, dass $R$ bei bestimmten Leitern
    konstant ist, etwa bei Metalldrähten gleicher Temperatur. Dann ist $I$ proportional zu $U$ und die Kennlinie eine
    Ursprungsgerade. Der Glühdraht einer Lampe wird mit steigender Spannung heißer, sein Widerstand steigt, die Kennlinie
    wird flacher. Auch Dioden sind nicht ohmsch.
  kernpunkte: ["R = U/I ist Definition", "Ohmsch: R konstant, Ursprungsgerade", "Glühdraht wird heißer, R steigt", "Dioden nicht ohmsch"]
- id: p13-k-draht
  frage: Wovon hängt der Widerstand eines Drahtes ab, und wie ändert er sich mit der Temperatur?
  antwort: |
    $R = \rho\,l/A$: proportional zur Länge, umgekehrt proportional zur Querschnittsfläche und abhängig vom Material über
    den spezifischen Widerstand. Bei Metallen steigt der Widerstand mit der Temperatur, näherungsweise
    $R = R_{20}(1 + \alpha\,\Delta\vartheta)$, weil die Elektronen häufiger mit den stärker schwingenden Atomen stoßen. Bei
    Halbleitern sinkt er, weil mehr Ladungsträger frei werden.
  kernpunkte: ["R = ρ·l/A", "Metall: Kaltleiter, R(1 + αΔϑ)", "Halbleiter: Heißleiter", "Ursache Gitterschwingungen"]
- id: p13-k-kirchhoff
  frage: Formuliere die Kirchhoffschen Regeln und begründe sie.
  antwort: |
    Knotenregel: An jedem Knoten ist die Summe der zufließenden Ströme gleich der Summe der abfließenden. Grund ist die
    Ladungserhaltung, ein Knoten kann keine Ladung speichern. Maschenregel: In jeder geschlossenen Masche ist die Summe der
    Quellenspannungen gleich der Summe der Spannungsabfälle. Grund ist, dass jeder Punkt genau ein Potential hat, also
    letztlich die Energieerhaltung.
  kernpunkte: ["Knotenregel: Zufluss = Abfluss", "Grund: Ladungserhaltung", "Maschenregel: Quellen = Abfälle", "Grund: eindeutiges Potential, Energieerhaltung"]
- id: p13-k-reihe-parallel
  frage: Vergleiche Reihen- und Parallelschaltung von Widerständen. Warum wird der Ersatzwiderstand parallel kleiner?
  antwort: |
    In Reihe fließt überall derselbe Strom, die Spannungen und die Widerstände addieren sich. Parallel liegt an allen
    dieselbe Spannung, die Ströme addieren sich und die Kehrwerte der Widerstände. Jeder parallele Widerstand ist ein
    zusätzlicher Weg für den Strom. Bei gleicher Spannung fließt insgesamt mehr Strom, also ist der Ersatzwiderstand kleiner
    als der kleinste Einzelwiderstand.
  kernpunkte: ["Reihe: gleicher Strom, R addieren", "parallel: gleiche Spannung, 1/R addieren", "zusätzlicher Weg", "kleiner als kleinster Einzelwiderstand"]
- id: p13-k-haushalt
  frage: Warum sind Haushaltsgeräte parallel geschaltet, und wann löst die Sicherung aus?
  antwort: |
    Parallel bekommt jedes Gerät die volle Netzspannung, und jedes lässt sich unabhängig schalten. Je mehr Geräte laufen,
    desto kleiner wird der Ersatzwiderstand und desto größer der Gesamtstrom. Übersteigt er den Nennstrom der Sicherung, etwa
    $16\,\text{A}$, löst sie aus, damit die Leitungen nicht überhitzen. Den Menschen schützt der Fehlerstromschutzschalter, der
    schon bei $30\,\text{mA}$ Differenz abschaltet.
  kernpunkte: ["volle Spannung für jedes Gerät", "unabhängig schaltbar", "Ströme addieren sich bis zur Sicherung", "Fehlerstromschutzschalter schützt Menschen"]
- id: p13-k-leistung
  frage: Wie berechnet man elektrische Leistung und Arbeit? Was ist eine Kilowattstunde, und warum überträgt man Energie mit Hochspannung?
  antwort: |
    $P = U\,I = I^2 R = U^2/R$ und $W = U\,I\,t$. Die Kilowattstunde ist eine Energieeinheit,
    $1\,\text{kWh} = 3{,}6\cdot 10^{6}\,\text{J}$. In einer Leitung geht $I^2 R_L$ verloren. Bei fester Leistung bedeutet
    höhere Spannung kleineren Strom. Zehnfache Spannung senkt den Verlust auf ein Hundertstel. Die Umwandlung übernimmt der
    Transformator aus Kapitel 14.
  kernpunkte: ["P = U·I = I²R = U²/R", "kWh ist Energie, 3,6 MJ", "Verlust I²·R_L", "Hochspannung, Transformator (Kapitel 14)"]
- id: p13-k-innenwiderstand
  frage: Was ist der Innenwiderstand einer Spannungsquelle, und warum ist eine Batterie keine Konstantstromquelle?
  antwort: |
    Jede reale Quelle verhält sich wie eine ideale Quelle mit der Quellenspannung $U_0$ in Reihe mit einem Innenwiderstand
    $R_i$. Unter Last sinkt die Klemmenspannung auf $U_K = U_0 - R_i I$. Ohne Last misst man $U_0$, im Kurzschluss fließt
    $U_0/R_i$. Die Batterie legt also ungefähr die Spannung fest, der Strom ergibt sich erst aus der Last:
    $I = U_0/(R_a + R_i)$.
  kernpunkte: ["Modell: ideale Quelle plus Rᵢ in Reihe", "U_K = U₀ − Rᵢ·I", "Leerlauf und Kurzschluss", "Strom bestimmt die Last"]
- id: p13-k-anpassung
  frage: Was versteht man unter Leistungsanpassung, und warum betreibt man Kraftwerke nicht so?
  antwort: |
    Die Last bekommt die größte Leistung, wenn ihr Widerstand gleich dem Innenwiderstand der Quelle ist, $R_a = R_i$. Dann
    ist $P_{\max} = U_0^2/(4R_i)$. Dabei wird im Innenwiderstand genauso viel Leistung verheizt wie in der Last, der
    Wirkungsgrad ist nur $50\,\%$. In der Energietechnik will man einen hohen Wirkungsgrad, deshalb ist dort $R_a$ viel
    größer als $R_i$. In der Nachrichtentechnik passt man dagegen an.
  kernpunkte: ["Maximum bei Rₐ = Rᵢ", "P_max = U₀²/(4Rᵢ)", "Wirkungsgrad 50 %", "Energietechnik: Rₐ ≫ Rᵢ"]
- id: p13-k-messgeraete
  frage: Wie schaltet man Strom- und Spannungsmesser, welchen Innenwiderstand sollen sie haben, und wie erweitert man ihren Messbereich?
  antwort: |
    Der Strommesser kommt in Reihe und braucht einen sehr kleinen Innenwiderstand, damit er den Strom nicht verkleinert. Der
    Spannungsmesser kommt parallel und braucht einen sehr großen Innenwiderstand, damit er keinen Strom abzweigt. Für
    größere Ströme schaltet man einen kleinen Nebenwiderstand parallel zum Instrument, für größere Spannungen einen großen
    Vorwiderstand in Reihe.
  kernpunkte: ["Strommesser in Reihe, Rᵢ klein", "Spannungsmesser parallel, Rᵢ groß", "Nebenwiderstand parallel", "Vorwiderstand in Reihe"]
- id: p13-k-leitung
  frage: Wer trägt den Strom in Metallen, Elektrolyten und Gasen?
  antwort: |
    In Metallen tragen freie Elektronen den Strom, Stoff wird nicht transportiert. In Elektrolyten sind es positive und
    negative Ionen, die in entgegengesetzte Richtungen wandern. Dabei wird Stoff transportiert, an den Elektroden scheiden
    sich Stoffe ab. Gase leiten erst, wenn Moleküle ionisiert werden. Im starken Feld kann das lawinenartig durch
    Stoßionisation geschehen, wie beim Blitz.
  kernpunkte: ["Metall: freie Elektronen", "Elektrolyt: Ionen, Stofftransport", "Gas: Ionisation", "Stoßionisation, Blitz"]
- id: p13-k-baendermodell
  frage: Erkläre Leiter, Halbleiter und Isolator mit dem Bändermodell. Warum leitet ein Halbleiter bei Wärme besser?
  antwort: |
    Im Kristall bilden die Energieniveaus der Elektronen Bänder. Beim Leiter überlappen Valenz- und Leitungsband, es gibt
    immer viele freie Elektronen. Beim Isolator trennt eine große Lücke das volle Valenzband vom leeren Leitungsband. Beim
    Halbleiter ist die Lücke klein, etwa $1\,\text{eV}$. Wärme hebt einige Elektronen ins Leitungsband und hinterlässt Löcher.
    Je wärmer, desto mehr Ladungsträger, desto kleiner der Widerstand.
  kernpunkte: ["Valenzband, Leitungsband, Lücke", "Leiter: Überlappung", "Halbleiter: kleine Lücke, etwa 1 eV", "Wärme erzeugt Elektron-Loch-Paare"]
- id: p13-k-dotierung
  frage: Was ist Dotierung? Unterscheide n- und p-Leitung.
  antwort: |
    Dotieren heißt, gezielt wenige Fremdatome in einen Halbleiter einzubauen. Fünfwertige Atome wie Phosphor liefern ein
    fast freies Elektron: n-Leitung mit Elektronen als beweglichen Ladungsträgern, das Fremdatom ist ein Donator.
    Dreiwertige Atome wie Bor erzeugen Löcher: p-Leitung, das Fremdatom ist ein Akzeptor. Der Kristall bleibt dabei
    elektrisch neutral.
  kernpunkte: ["gezielte Fremdatome", "fünfwertig: n, Donator", "dreiwertig: p, Akzeptor", "Kristall bleibt neutral"]
- id: p13-k-diode
  frage: Wie funktioniert eine Diode, und was haben Leuchtdiode und Solarzelle damit zu tun?
  antwort: |
    Am pn-Übergang diffundieren Elektronen ins p-Gebiet und füllen Löcher. Es entsteht eine Sperrschicht ohne bewegliche
    Ladungsträger, deren Feld weitere Diffusion stoppt. In Sperrrichtung, Plus an n, wird sie breiter, es fließt kein Strom.
    In Durchlassrichtung, Plus an p, verschwindet sie ab etwa $0{,}7\,\text{V}$. In der LED fallen Elektronen aus dem Leitungsband
    in Löcher und geben die Energie der Bandlücke als Licht ab. In der Solarzelle trennt das Feld der Sperrschicht die vom Licht erzeugten
    Elektron-Loch-Paare.
  kernpunkte: ["Sperrschicht durch Diffusion", "Sperrrichtung: Plus an n", "Durchlass ab 0,7 V", "LED und Solarzelle als Umkehrung"]
- id: p13-k-transistor
  frage: Wie funktioniert ein Transistor als Schalter, und warum ist der MOSFET die Grundlage jedes Computerchips?
  antwort: |
    Ein Transistor hat drei Anschlüsse. Ein kleines Steuersignal schaltet einen großen Strom zwischen den anderen beiden. Beim
    MOSFET erzeugt die Spannung am isolierten Gate ein elektrisches Feld, das zwischen Source und Drain einen leitenden
    Kanal öffnet. Das ist Elektrostatik aus Kapitel 12. Weil durch das Gate fast kein Strom fließt, ist er sparsam und
    lässt sich winzig bauen. Aus solchen Schaltern entstehen Logikgatter, Addierer und Prozessoren.
  kernpunkte: ["kleines Signal steuert großen Strom", "Gate-Feld öffnet Kanal", "fast kein Steuerstrom", "Gatter, Prozessoren"]
```
